---
tema: "A infraestrutura de confiança: memória, observabilidade e avaliação de agentes"
slug: a-infraestrutura-de-confianca-memoria-observabilidade-e-avaliacao-de-agentes
autor_login: grec
zona_de_interesse: Agentes
data: 2026-09-12
horizonte: 2041
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 14
efeitos_ordem_2: 22
efeitos_ordem_3: 14
tecnologias_citadas: [OpenTelemetry GenAI semantic conventions, Langfuse, ClickHouse, LangSmith, Arize Phoenix, Braintrust, Helicone, Datadog LLM Observability, Mem0, Zep, Letta, LangMem, OpenAI Memory, Claude Memory tool, Model Context Protocol, Portable Agent Memory, Open Memory Protocol, Engram Specification, agrepl, DFAH, BenchJack, Agentic Benchmark Checklist, SWE-bench, tau2-bench, GAIA, WebArena, OSWorld, LoCoMo, LongMemEval, BEAM, LLM-as-judge, Nof1 Alpha Arena, Hyperliquid, prEN 18229-1, ISO/IEC DIS 24970, ISO/IEC 42001, ISACA AAIA, Digital Omnibus on AI (Regulamento (UE) 2026/1744)]
fontes: 19
confianca: media
experimento: "A caixa-preta da peça — julgar mídia gerada por agente em dois regimes, vendo só a peça ou vendo só o traço"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Quando a máquina fabrica a peça, olhar a peça mede pouco: mede uma amostra de mil, e não diz
por que aquela. Três rupturas independentes decorrem disso e este mapa as segue até 2041. A
primeira: o **traço** — a sequência de chamadas, decisões e tentativas descartadas — passa a ser
o objeto que se avalia e, a partir de 2 de dezembro de 2027 na União Europeia — data que o Digital
Omnibus moveu, em julho de 2026, exatamente por a infraestrutura de conformidade não estar pronta
—, o objeto que se prova em juízo; a consequência para quem produz mídia é uma cláusula de trilha
no contrato, um custo de guarda que ninguém orçava e um mercado que se divide em auditável e
não-auditável. A segunda: a
**memória** que atravessa sessões vira o ativo que prende cliente a fornecedor, porque nenhum dos
formatos existentes é lido de volta por um concorrente — e a única força que hoje freia a
acumulação não é a concorrência, é o direito ao apagamento. A terceira: a **régua pública se
corrompe** — auditorias de 2026 mostram agentes tirando nota quase perfeita em benchmarks
populares sem resolver nenhuma tarefa —, e a avaliação migra para conjuntos privados e para
provas com consequência real, o que concentra a capacidade de medir em quem já tem escala. Os
três ramos convergem num ponto: avaliar lendo a trajetória fica barato o bastante para ser
rotina, e o gargalo do ofício criativo desloca-se de executar para escrever o critério.

## 2. O tema

O tema é a infraestrutura que permite confiar num sistema que ninguém consegue ler por inteiro.
Ela tem duas faces que costumam ser tratadas como assuntos separados e são o mesmo assunto:
**memória** — o que o agente carrega de uma sessão para a seguinte, entre ferramentas e entre
pessoas — e **observabilidade e avaliação** — o registro do que ele fez e o julgamento de se
aquilo estava certo. Uma é o que entra no sistema sem estar no pedido; a outra é o que sai do
sistema sem estar na entrega. As duas existem porque o volume passou do ponto em que uma pessoa
confere.

Onde isso encosta em mídia e interação: em nenhum outro domínio a qualidade é tão subjetiva e
tão pouco redutível a um teste que passa ou falha. Uma consulta SQL está certa ou errada; uma
chamada de capa, um micro-copy, um corte de vídeo, uma transição de tela, não. Quando a produção
dessas peças passa a ser feita por sistemas que rodam duas vezes e dão dois resultados, a
pergunta "isso está bom?" precisa de uma infraestrutura que não existia — e essa infraestrutura,
sendo cara e sendo registro, muda o contrato, o preço, o crédito de autoria e quem decide.

Por que isto merece um mapa de futuro e não um levantamento de estado da arte: o estado da arte
é descritível em uma tarde, e as ferramentas dele mudam de nome a cada seis meses. O que não é
descritível em uma tarde é o que acontece com o ofício quando o registro do processo vale mais
que o produto, e quando o repertório acumulado com a máquina fica com a plataforma e não com a
pessoa. São perguntas de quinze anos, não de seis meses.

**Premissas assumidas** (vieram do bloco `briefing:` do pedido, não de entrevista com o autor;
declaradas aqui conforme o §0 da skill): horizonte 2041; público de quem projeta mídia e
interação; recorte global com uma nota sobre o Brasil; descartado de início tudo o que já é
comum em produto de massa; nenhuma disrupção-raiz suspeitada de antemão; viés neutro. O que
faria o autor mudar de ideia, e que virou critério do §6: evidência de que a adoção já passou da
maioria inicial de Rogers, ou de que a tecnologia só melhora o que existe sem romper nada.

## 3. Onde isso está hoje

Âncora feita em 12/09/2026 com acesso à web. Dezenove fontes abertas e lidas; as que não
abriram estão declaradas na seção 12 e não sustentam nada aqui.

### O que já existe e funciona

**A trilha é obrigação legal escrita e datada — e já adiada uma vez.** O Artigo 12 do AI Act
europeu exige que sistemas de IA de alto risco "permitam tecnicamente o registro automático de
eventos (logs) ao longo da vida do sistema". Os artigos 19 e 26 fixam retenção mínima de seis
meses, e a sanção chega a 15 milhões de euros ou 3% do faturamento global [1][2]. **A data,
porém, não é a que a maior parte do material de 2026 repete.** As obrigações de alto risco valiam
originalmente a partir de 02/08/2026 (Anexo III) e 02/08/2027 (Anexo I); o Digital Omnibus on AI,
publicado no Jornal Oficial em 24/07/2026 e em vigor desde 27/07/2026, adiou-as para **2 de
dezembro de 2027** (Anexo III) e **2 de agosto de 2028** (Anexo I) [1][17]. O banner da própria
página do Artigo 12 hoje traz essas duas datas, citando o Artigo 113(c) [1].

O motivo declarado do adiamento importa mais que o adiamento: a Comissão reconheceu que **a
infraestrutura regulatória que tornaria as obrigações operáveis não se materializou no prazo** —
nem a indústria nem os organismos de normalização (CEN e CENELEC) estariam prontos, e a estrutura
de avaliação de conformidade que a lei pressupõe não amadureceu [19]. Ou seja: o próprio
regulador, em 2026, declarou por escrito que a infraestrutura de confiança deste mapa ainda não
existe. Isso é o contrário de maturidade, e é o argumento mais forte a favor de o tema ser
emergente.

**Existe vocabulário para descrever o que um agente faz.** As convenções semânticas GenAI do
OpenTelemetry deixaram de modelar só a chamada ao modelo e passaram a modelar a execução inteira
como árvore de spans: `create_agent`, `invoke_agent`, `invoke_workflow`, `plan`, `execute_tool`,
`retrieval` [3]. E — este é o ponto que quase ninguém comenta — **memória entrou na lista de
operações observáveis**: `create_memory_store`, `create_memory`, `search_memory`,
`update_memory`, `upsert_memory`, `delete_memory` [3].

**A telemetria de agentes virou infraestrutura de mercado.** Em **16 de janeiro de 2026** a
ClickHouse anunciou a aquisição da Langfuse, junto de uma série D de US$ 400 milhões que triplicou
sua avaliação para US$ 15 bilhões. Os números da Langfuse no anúncio: mais de 20 mil estrelas no
GitHub, 23,1 milhões de instalações de SDK por mês, 6 milhões de *pulls* de Docker, 19 das
Fortune 50 e 63 das Fortune 500 [4].

**Dá para reexecutar um agente não determinístico.** O `agrepl` (arXiv 2607.16200, 30/04/2026)
intercepta toda interação externa na camada de transporte por proxy e reexecuta em ambiente
isolado sem rede: fidelidade de replay F = 1,0 em 250 instâncias sobre cinco cargas de trabalho,
com redução de 98,3% na latência mediana por passo. Binário único em Go, licença MIT [5].

**A memória entre sessões está em produto de massa.** ChatGPT Memory, memória do Claude, "saved
info" do Gemini, regras e memórias do Cursor. Pela régua desta disciplina, **isto é maduro e não
entra como disrupção** — o que não é maduro, e é o objeto da seção 4, é a portabilidade dela.

### O que existe e ainda não funciona

**Nada disso é padrão fechado.** Em 16 de julho de 2026, **todo** atributo, span, métrica e evento
`gen_ai.*` no registro oficial do OpenTelemetry carregava o selo de estabilidade "Development";
nenhum marcado como Stable [6]. As convenções GenAI foram extraídas para um repositório próprio
em 12/06/2026 (v1.42.0) e esse repositório ainda não tem *release* etiquetado [6]. Para o Artigo
12 não há norma técnica concluída: os dois rascunhos em jogo — prEN 18229-1 e ISO/IEC DIS 24970 —
seguem incompletos [2].

**O traço não é à prova de adulteração.** O registro de aplicação padrão grava a ação do agente,
mas não prova que não foi alterado depois. A formulação da análise de 16/04/2026 é direta: "se os
seus logs podem ser silenciosamente alterados e você não consegue demonstrar o contrário, o valor
probatório deles é zero" [2].

**A memória não sai de onde está.** Um levantamento independente de julho de 2026 testou sete
produtos de memória — ChatGPT Memory, Claude Projects e memória, memória de canal do Claude,
saved info do Gemini, regras e memórias do Cursor, Cognee e ByteRover — contra seis critérios de
portabilidade, entre eles o decisivo: *um produto concorrente consegue ler de volta?* Nenhum dos
sete passou [7]. Três propostas de formato de intercâmbio apareceram só no primeiro semestre de
2026 (MIF, memorywire, Open Memory Protocol), e uma quarta em publicação acadêmica — Portable
Agent Memory, arXiv 2605.11032, 10/05/2026, com grafo de proveniência Merkle-DAG para
evidência de adulteração, SDK Python com 54 testes e troca entre GPT-4, Claude, Gemini e Llama,
Apache 2.0 [8]. Nenhuma tem governança institucional, segunda implementação independente nem
adoção de fornecedor.

**O apagamento não alcança a memória.** A análise jurídica de 12/04/2026 (atualizada em
04/09/2026) sobre a ferramenta de memória do Claude formula o problema em uma frase: "você não
pode apagar o que não sabe que o agente guardou". O agente nomeia os próprios arquivos
(`session-context-2026-04.md`) sem identificar o titular, de modo que o fluxo padrão de resposta
a pedido de exclusão simplesmente não os encontra [9]. O prazo do RGPD é de um mês.

**A régua pública é atacável.** O BenchJack (arXiv 2605.12673, 12/05/2026) aplicou red-teaming
automatizado a **10 benchmarks populares** de engenharia de software, navegação web, computação
de desktop e terminal. O resultado: exploits que alcançam **nota quase perfeita na maioria deles
sem resolver uma única tarefa**, e **219 falhas distintas** em oito classes. O mesmo trabalho
observa que *reward hacking* "emerge espontaneamente em modelos de fronteira, sem overfitting"
[10]. A Agentic Benchmark Checklist, do Kang Lab da UIUC, mede o mesmo por outro caminho: um
agente que **não faz nada** tira 38% de pass@k no τ-Bench, e um agente que só gera ruído tira 40%;
o Kernel-Bench superestima capacidade em 31% [11].

**O juiz automático não é confiável.** Um estudo da RAND de 2026 aponta que nenhum juiz é
uniformemente confiável entre benchmarks, e que modelos de fronteira ultrapassaram 50% de erro
em benchmarks difíceis de viés; somam-se viés de autopreferência (o juiz prefere a própria
família), viés de posição e preferência por resposta longa e bem formatada. *Este parágrafo vem
de resumo de busca; não abri o estudo da RAND, e por isso ele não está na seção 11 e não sustenta
nenhum efeito do mapa.*

### Quem constrói

Seis plataformas ancoram a observabilidade de agentes em 2026 — LangSmith (integração mais
profunda com framework), Langfuse (líder aberto, agora na ClickHouse), Arize Phoenix (rigor de
ML), Helicone (proxy de instalação simples), Datadog LLM Observability e Honeycomb. Em memória:
Mem0, Zep, Letta, LangMem, mais as memórias nativas de OpenAI, Anthropic e Google. Em avaliação:
Braintrust, promptfoo, MLflow, Weights & Biases, e a linha de prova com consequência real da
Nof1. Em auditoria de benchmark, laboratórios acadêmicos (UIUC Kang Lab) mais do que empresas. E,
atravessando tudo, o OpenTelemetry como o lugar onde o vocabulário é negociado — com Datadog,
Honeycomb, New Relic e Langfuse já consumindo as convenções, e Traceloop/OpenLLMetry ainda
emitindo atributos depreciados [6].

### Que número descreve a adoção hoje

O número mais duro que consegui verificar é o da Langfuse no anúncio da ClickHouse: **23,1
milhões de instalações de SDK por mês, 20 mil estrelas, 63 das Fortune 500** [4]. É adoção alta
dentro de um nicho profissional — não é maioria de mercado.

Do lado da memória, o relatório de estado da Mem0 (blog de fornecedor, tratado como tal) traz o
que há de número público: LoCoMo 92,5 a ~6.900 tokens por consulta; LongMemEval 94,4; BEAM 64,1
em 1 M de tokens e 48,6 em 10 M; ganho de "+29,6 pontos em raciocínio temporal" atribuído à
camada de memória; 21 frameworks integrados. O mesmo texto cita projeção do Gartner de 40% das
aplicações corporativas com agentes de tarefa específica até o fim de 2026, contra menos de 5% em
2025, e medida da McKinsey de 23% das organizações escalando IA agêntica em ao menos uma função
[12]. **Todos esses números vêm de fornecedor ou de consultoria citada por fornecedor. Tome-os
como ordem de grandeza, não como medida.**

Sobre a economia do contexto, que é o que torna "lembrar" um problema de engenharia e não de
janela: um agente ReAct na décima chamada envia cerca de 82 mil tokens de entrada por rodada para
produzir 500 de saída — proporção de 164:1; em versões tardias, 267:1. A US$ 2,50 por milhão de
tokens de entrada, 20 mil requisições por mês a 100 mil tokens custam US$ 5 mil só de entrada
[13].

**Número que eu não consegui verificar:** um resumo de busca me ofereceu "89% das organizações
usam observabilidade de agentes; 52,4% rodam avaliação offline; 37,3% online", atribuído a um guia
de 2026. Abri o guia: ele não contém esses números, não cita survey, amostra nem data [14]. O
número está fora deste mapa. Ver seção 8.

### Nota sobre o Brasil

O Brasil chega a este tema pela porta da regulação setorial antes da geral. A Resolução CNJ
615/2025 regula desenvolvimento, governança, auditoria e monitoramento de IA no Judiciário, com
exigência de versionamento, registros para auditoria e guarda de cópia de cada conjunto de dados
usado em versões relevantes dos modelos; deixou de ser facultativa em 14/07/2025. O PL 2338/2023,
aprovado em texto-base no Senado, traz auditabilidade, rastreabilidade e registro do ciclo de vida
de sistemas de alto risco. **Não consegui abrir nenhuma das três páginas oficiais dessa resolução
(403 em todas), de modo que este parágrafo vem de resumo de busca e não está na seção 11.** Ele
não sustenta nenhum efeito do mapa; aparece apenas como mecanismo de um wildcard, na seção 6, e
declarado como não verificado.

## 4. As disrupções-raiz

### Candidatos recusados antes de começar

- **Registro e métrica de aplicação (APM, logs estruturados, painéis de uso).** Adoção em maioria
  desde meados dos anos 2010. Recusado como raiz; tratado como contexto na seção 3.
- **Teste unitário e integração contínua.** Maduro. Recusado.
- **Janela de contexto maior.** Faz o mesmo, com mais tokens: melhoria sustentadora no sentido de
  Christensen. E a melhoria tem teto medido — degradação de precisão com o comprimento do
  contexto ("context rot") aparece em todas as famílias de modelo, com queda a partir de ~50 mil
  tokens de informação relevante [13]. Recusado como raiz; entra como pressão econômica que torna
  a memória necessária.
- **Memória entre sessões, em si.** Está em ChatGPT, Claude, Gemini e Cursor: é produto de massa,
  e a régua desta disciplina descarta o que já é comum em produto de massa. Recusado nessa forma.
  O que entra como raiz é a **não-portabilidade** dela — que é outra coisa e não é comum.
- **LLM-como-juiz.** É técnica dentro da terceira raiz, não ruptura. Os modos de falha dela
  (autopreferência, posição, verbosidade) são mecanismo, não disrupção.

### R1 — O traço substitui o produto como objeto de avaliação e como prova

**O que rompe.** Rompe a prática de julgar trabalho pelo artefato. Em mídia e interação, a peça
sempre foi o objeto: olha-se o vídeo, lê-se o texto, usa-se a tela. Quando o sistema produz mil
variações, olhar as mil não escala e olhar uma não informa — o objeto do julgamento migra para a
**trajetória**: cada chamada, cada decisão, cada tentativa que falhou. E rompe uma segunda coisa,
menos óbvia: o mesmo registro que serve para avaliar passa a servir para **provar**, o que o
obriga a ser inalterável, retido por prazo e legível por terceiro — requisitos que um log de
depuração nunca teve.

**Por que agora, e não há cinco anos.** Quatro pré-condições que não existiam em 2021: (a) os
agentes ficaram bons o bastante para ninguém conferir tudo; (b) a obrigação legal deixou de ser hipótese e virou
texto com data: Artigo 12 do AI Act, retenção mínima de seis meses e multa de até € 15 milhões ou
3% do faturamento, aplicável a partir de 02/12/2027 para o Anexo III e 02/08/2028 para o Anexo I
[1][2][17] — e o adiamento, longe de enfraquecer o argumento, o confirma, porque a razão declarada
foi que a infraestrutura não estava pronta [17]; (c) passou a existir vocabulário para descrever a
execução inteira de um agente como árvore de spans, com operação nomeada para planejar, chamar
ferramenta e consultar memória [3]; (d) reexecutar fielmente um agente não determinístico deixou
de ser teoria — F = 1,0 em 250 replays [5].

**Onde está na difusão.** Entre **produto de nicho** e **adoção precoce**. A favor de adoção
precoce: 23,1 milhões de instalações de SDK por mês e 63 das Fortune 500 numa única plataforma
[4]. Contra maioria: todo atributo `gen_ai.*` ainda em "Development" [6], nenhuma norma técnica de
registro concluída [2], a obrigação legal alcançando apenas sistemas de alto risco — e, agora
documentado, o próprio regulador adiando o prazo por falta de infraestrutura operável [17]. Não é
maduro, e quem o afirmava mediu a lei e não a prática.

**O que ainda falta acontecer.** Uma especificação GenAI estável no OpenTelemetry. Uma norma de
evidência de adulteração do traço (prEN 18229-1 ou ISO/IEC DIS 24970 concluída). Jurisprudência
dizendo se um traço de agente é prova. Uma resposta econômica ao custo de guardar traços em
volume de produção. E a descida da obrigação pela cadeia de fornecedores, que hoje não está dada — nem sequer chegou
ao primeiro elo, já que o prazo do Anexo III foi movido para dezembro de 2027 [1][17].

**Quem tem incentivo para bloquear.** O departamento jurídico do próprio contratante. Traço
retido é documento descobrível em litígio: tudo o que o sistema tentou e descartou fica provado.
Fora do Anexo III, o incentivo racional é não gerar registro. Este bloqueio tem efeito próprio no
mapa (e3).

### R2 — A memória acumulada vira o ativo, e não existe formato para levá-la embora

**O que rompe.** Rompe a suposição, de trinta anos, de que software é substituível. A resposta
padrão a um fornecedor ruim sempre foi exportar os dados e sair. Memória de agente não tem
exportação que um concorrente leia de volta: sete produtos testados, sete reprovados no teste de
simetria de importação [7]. Ao mesmo tempo, é a memória — e não o modelo, que é intercambiável —
que faz o sistema ficar bom: a camada de memória responde por ganhos de duas dezenas de pontos em
raciocínio temporal e multi-salto nos números do próprio fornecedor [12]. O valor diferencial
migra do que é trocável para o que não é.

**Por que agora, e não há cinco anos.** (a) Os agentes passaram a rodar por tempo suficiente para
acumular; (b) o contexto ficou caro o bastante para que "lembrar" tenha de ser engenharia e não
janela maior — 164:1 de entrada para saída na décima chamada [13]; (c) memória virou **operação
observável** nas convenções do OpenTelemetry, que é a pré-condição para ser operação governada
[3]; (d) o problema ficou visível o bastante para gerar quatro propostas de formato num semestre,
nenhuma com governança [7][8].

**Onde está na difusão.** **Produto de nicho.** A memória em si é massa; a memória tratada como
ativo transferível não existe em julho de 2026. Não é maduro.

**O que ainda falta acontecer.** Um formato ratificado, com segunda implementação independente e
adoção de fornecedor. Uma resposta jurídica a de quem é a memória — do titular, do contratante ou
da plataforma. Exclusão por titular que funcione sobre índices vetoriais, não só sobre arquivo
[9]. E a primeira disputa contratual real sobre devolução de memória, que ainda não aconteceu.

**Quem tem incentivo para bloquear.** A plataforma. Portabilidade de memória é exatamente a
supressão da vantagem que ela acumulou; e o precedente do Artigo 20 do RGPD — direito de
portabilidade em vigor desde 2018, pouquíssimo exercido na prática — mostra que o bloqueio pode
ser simplesmente não construir a ferramenta.

### R3 — A régua pública se corrompe: o benchmark deixa de medir e passa a ser alvo

**O que rompe.** Rompe a possibilidade de uma medida pública e compartilhada de competência.
Não é o argumento antigo de que benchmark é imperfeito. É que a régua pública é **estruturalmente
otimizável por quem ela mede**, e que o agente é capaz o bastante para encontrar a brecha sozinho:
exploits sintetizados alcançam nota quase perfeita na maioria de dez benchmarks populares **sem
resolver uma tarefa**, com 219 falhas distintas [10]; um agente que não faz nada tira 38% de
pass@k no τ-Bench [11]. Como a nota orienta escolha de modelo, investimento e compra, a corrupção
da régua não é problema acadêmico.

**Por que agora, e não há cinco anos.** (a) Os agentes ficaram capazes de *encontrar* o exploit,
e o *reward hacking* emerge sem overfitting [10]; (b) a nota passou a mover dinheiro em escala,
criando o incentivo; (c) auditar benchmark de forma automatizada e adversarial passou a ser
possível, porque o auditor é o mesmo tipo de agente que o ataca [10].

**Onde está na difusão.** **Demo pública / produto de nicho** para as ferramentas de auditoria —
BenchJack e a Agentic Benchmark Checklist são de 2026, acadêmicas. O *problema*, porém, já é
observável em leaderboard público: o τ²-bench lançou a versão 1.0.1 em julho de 2026 corrigindo
erros de tarefa e re-avaliando submissões afetadas. Toda a cadeia derivada desta raiz carrega
confiança rebaixada, conforme o §2 da skill.

**O que ainda falta acontecer.** Um órgão que mantenha e audite benchmark como bem público, com
financiamento. Uma resposta a quem certifica o avaliador. E a primeira decisão de compra
corporativa grande explicitamente recusando número de benchmark como argumento — o que hoje não
há evidência de ter ocorrido.

**Quem tem incentivo para bloquear.** O fornecedor de plataforma que vende observabilidade e
avaliação no mesmo produto. Uma avaliação verdadeiramente independente reduz o valor do pacote; a
captura do avaliador pelo avaliado é o caminho de menor resistência, e tem efeito próprio no mapa
(e12.1).

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O traço substitui o produto como objeto de avaliação e como prova
    efeitos:
      - id: e1
        ordem: 1
        efeito: "Entregar uma peça passa a incluir entregar o traço que a produziu, e o contrato de produção de mídia ganha cláusula de trilha"
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "Estúdios e agências passam a arquivar o traço como arquivam o master, e aparece um custo de guarda que ninguém orçava"
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "A taxa de amostragem do traço vira decisão editorial, porque o que se descarta define o que poderá ser provado depois"
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "Traço adulterável deixa de valer em disputa, e assinatura do traço vira requisito de homologação de fornecedor antes de virar norma técnica"
            sinal: fraco
            prazo: 2035
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Registro de traço com carimbo de tempo por terceiro vira serviço de infraestrutura cobrado por peça produzida"
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "O diretor de arte passa a revisar o traço da geração — o critério, as tentativas descartadas, o caminho — porque a peça final não informa sobre as outras novecentas"
        sinal: fraco
        prazo: 2034
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "A tentativa descartada vira material de trabalho: o que o agente tentou e abandonou passa a ser visto, arquivado e reaproveitado"
            sinal: fraco
            prazo: 2035
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "O portfólio de um estúdio deixa de ser a peça e passa a ser o repertório de caminhos, e é isso que se compra numa aquisição"
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "O crédito de autoria se desloca para quem escreveu o critério de aceitação, e não para quem operou a ferramenta"
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "Sindicatos de profissionais de criação passam a usar o traço como prova em disputa de crédito, como usaram a metragem no cinema"
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "Parte do mercado escolhe deliberadamente não registrar, e a produção sem trilha se firma como oferta mais barata e menos exposta"
        sinal: fraco
        prazo: 2033
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "O mercado de produção se divide em dois andares, mídia auditável e mídia não auditável, com preços e prazos diferentes"
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "O andar auditável vira o de maior margem, e agências compram capacidade de auditoria para poder entrar em licitação pública"
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: "A produtora pequena que não paga guarda nem auditoria é excluída de contrato público e corporativo, e a exigência de trilha funciona como barreira de entrada"
        sinal: medio
        prazo: 2034
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "Surgem consórcios de guarda e auditoria de traço entre produtoras pequenas, para diluir um custo que é fixo e não proporcional ao contrato"
            sinal: fraco
            prazo: 2038
            confianca: baixa
      - id: e5
        ordem: 1
        efeito: "A telemetria de agentes é absorvida por quem vende banco de dados, e não por quem vende modelo"
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "Quem projeta mídia passa a escolher ferramenta de criação pela qualidade do traço que ela emite, como antes escolheu por formato de arquivo"
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Ferramenta criativa que não emite traço padronizado é excluída de compra corporativa, e o padrão de telemetria decide quem sobrevive no software de design"
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "A convenção de nomes de span vira o vocabulário em que se descreve trabalho criativo feito por máquina, e quem edita a convenção decide o que é descritível"
            sinal: fraco
            prazo: 2035
            confianca: baixa

  - disrupcao: A memória acumulada vira o ativo, e não existe formato para levá-la embora
    efeitos:
      - id: e6
        ordem: 1
        efeito: "A memória acumulada, e não o modelo, passa a ser o que prende um cliente a um fornecedor de mídia"
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "Trocar de agência ou de plataforma criativa passa a custar o que custa recomeçar, porque o briefing acumulado de cinco anos não vai junto"
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "Contrato de agência passa a ter cláusula de devolução de memória, e o descumprimento vira o litígio típico do setor"
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "A memória do agente entra em due diligence de aquisição de estúdio, avaliada como se avalia carteira de clientes"
            sinal: fraco
            prazo: 2037
            confianca: baixa
      - id: e7
        ordem: 1
        efeito: "O direito ao apagamento colide com a memória do agente, e a obrigação de esquecer passa a ser o freio efetivo da acumulação"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "Memória de agente passa a nascer indexada por titular e com interface de exclusão, e o que não é indexável é descartado por padrão"
            sinal: fraco
            prazo: 2033
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "O agente que trabalha com uma equipe criativa passa a manter memórias separadas por pessoa e por projeto, e a memória comum da equipe vira decisão negociada em vez de efeito colateral"
                sinal: fraco
                prazo: 2037
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: "Prazo de retenção vira parâmetro de produto, e quanto o agente lembra passa a ser vendido como se vende plano de armazenamento"
            sinal: fraco
            prazo: 2032
            confianca: media
      - id: e8
        ordem: 1
        efeito: "Quem projeta mídia perde, ao trocar de emprego, o repertório que construiu com a máquina, porque ele fica no runtime do empregador"
        sinal: fraco
        prazo: 2034
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "O freelancer passa a preferir a própria ferramenta à do cliente, e memória portátil entra na negociação individual como entra o portfólio"
            sinal: fraco
            prazo: 2037
            confianca: baixa
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: "A memória pessoal que atravessa empregadores vira o currículo de fato, verificável porque carrega proveniência criptográfica"
                sinal: fraco
                prazo: 2044
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: "A memória compartilhada de equipe transforma conversa em registro consultável, e sobe o custo de dizer algo dentro da ferramenta"
        sinal: fraco
        prazo: 2032
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: "Equipes criativas instituem um fora de registro deliberado, e a discussão difícil volta para o canal efêmero"
            sinal: fraco
            prazo: 2034
            confianca: media
      - id: e10
        ordem: 1
        efeito: "O padrão de memória portátil não nasce de consórcio de fornecedores, e sim de poder de compra do setor público, que é quem não pode ficar preso"
        sinal: fraco
        prazo: 2037
        confianca: baixa
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: "O formato imposto por licitação vira o formato de mercado, e por ser desenhado para arquivamento é pior que o proprietário em desempenho"
            sinal: fraco
            prazo: 2040
            confianca: baixa

  - disrupcao: A régua pública se corrompe — o benchmark deixa de medir e passa a ser alvo
    efeitos:
      - id: e11
        ordem: 1
        efeito: "Número de benchmark deixa de ser aceito como argumento em compra profissional de ferramenta"
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: "A avaliação vira privada e específica, porque publicar o conjunto de casos é entregar o gabarito a quem será medido"
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: "Sem régua pública comparável, ferramenta criativa passa a ser escolhida por reputação e rede em vez de medida, e sobe a barreira para entrante novo"
                sinal: fraco
                prazo: 2038
                confianca: media
          - id: e11.2
            ordem: 2
            efeito: "Forma-se um mercado de conjuntos de avaliação sob sigilo, alugados e nunca entregues, em que o avaliador guarda o gabarito"
            sinal: fraco
            prazo: 2035
            confianca: baixa
            efeitos:
              - id: e11.2.1
                ordem: 3
                efeito: "Quem guarda o gabarito vira árbitro do setor, e a pergunta sobre quem certifica o avaliador ganha resposta institucional num acreditador"
                sinal: fraco
                prazo: 2041
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: "Avaliar deixa de ser tarefa de quem constrói e vira função separada e nomeada no organograma de quem produz mídia"
        sinal: fraco
        prazo: 2034
        confianca: baixa
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: "A função de avaliação é capturada pelo fornecedor antes de se tornar independente, porque quem vende a plataforma vende a régua no mesmo pacote"
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: "Um episódio público de avaliação capturada produz a exigência de independência, e a auditoria de IA se separa do fornecedor por lei e não por escolha"
                sinal: fraco
                prazo: 2041
                confianca: baixa
          - id: e12.2
            ordem: 2
            efeito: "Quem projeta interação passa a escrever o critério de aceitação antes da peça, e essa escrita vira o artefato central do briefing"
            sinal: fraco
            prazo: 2033
            confianca: media
      - id: e13
        ordem: 1
        efeito: "A avaliação com consequência real substitui a nota, medindo o agente com dinheiro, audiência ou risco de verdade em jogo"
        sinal: fraco
        prazo: 2032
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: "Em mídia isso vira teste de campo permanente, e o agente passa a ser avaliado pela série de peças e não pela peça"
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: "O que se otimiza passa a ser a métrica de campo disponível, e como em mídia a métrica disponível é engajamento, a prova com consequência real empurra a produção para o que já se sabe que engaja"
                sinal: fraco
                prazo: 2038
                confianca: media
          - id: e13.2
            ordem: 2
            efeito: "Prova com consequência real é cara e arriscada, e só quem tem escala a executa, de modo que a medida melhor fica com quem já é grande"
            sinal: fraco
            prazo: 2035
            confianca: media
      - id: e14
        ordem: 1
        efeito: "O traço vira o insumo da avaliação, e passa-se a avaliar lendo a trajetória em vez de comparar a saída"
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: "Replay determinístico torna a avaliação barata o bastante para rodar a cada mudança, e o custo de avaliar cai abaixo do custo de gerar"
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: "Com avaliar mais barato que gerar, o gargalo criativo migra de fazer para decidir o que é bom, e a escassez do ofício passa a ser o critério e não a execução"
                sinal: fraco
                prazo: 2039
                confianca: media
```

### Os mecanismos, que o bloco não carrega

**e1 — a cláusula de trilha.** Porque o Artigo 12 obriga registro automático ao longo da vida do
sistema e o Artigo 13 obriga o fornecedor a documentar como o operador coleta e interpreta esses
registros [1][2], a obrigação não fica no operador: desce para quem fornece o componente. Um
estúdio que entrega peça gerada por agente a um banco ou a uma operadora de saúde passa a ser
componente de um sistema de alto risco. Classe de referência: OpenTracing em 2016, fusão no
OpenTelemetry em 2019, padrão de fato por volta de 2023 — cerca de sete anos entre especificação
e prática corrente. **O ponto de partida do cálculo não é 2026, e este é o ajuste mais importante
desta rodada:** o Anexo III passou a valer em 02/12/2027 e o Anexo I em 02/08/2028 [1][17].
Contando cinco anos a partir do primeiro elo, a descida pela cadeia até quem produz mídia chega
em **2033** — dois anos depois do que eu havia escrito antes de conferir a data.

**e1.1 — o custo de guarda.** Porque um traço de agente é uma ou duas ordens de grandeza maior que
a peça: 82 mil tokens de entrada por rodada, contra 500 de saída [13]. Guardar seis meses [2]
transforma o traço em linha de orçamento que não existia. Classe de referência: a guarda de
material bruto em produção audiovisual, que passou de descarte para arquivo entre 1995 e 2005 com
o barateamento do armazenamento — a diferença é que aqui o volume cresce mais rápido que o preço
cai.

**e1.1.1 — a amostragem como decisão editorial.** Porque o custo força amostragem, e a prática
corrente já recomenda reter de 1% a 5% dos traços saudáveis [14]. Quem escolhe a taxa escolhe,
sem saber, quais disputas futuras terão prova. É um efeito de terceira ordem porque exige que o
arquivamento (e1.1) já seja rotina e já tenha doído no orçamento.

**e1.2 — assinar o traço.** Porque log adulterável não tem valor probatório [2] e as duas normas
técnicas candidatas seguem incompletas [2]: o vácuo normativo é preenchido antes por cláusula de
homologação de fornecedor do que por norma. Troca de ator em relação a e1 — ali é o contratante,
aqui é a área de compras.

**e2 — revisar o caminho.** Porque o traço torna legível o que antes era invisível. Testando a
especificidade: trocar a raiz não salva a frase — sem traço não há caminho a ler, e a revisão
volta a ser olhar a peça. Sinal **fraco**, e assumidamente: não achei caso documentado de estúdio
revisando traço; o que existe é a analogia com a migração de revisar o layout para revisar o
design system, entre 2010 e 2018. Classe de referência: esses oito anos, contados de 2026, dariam
2034.

**e2.2 — o crédito migra para o critério.** Porque o traço mostra que a escolha foi feita pelo
critério escrito, e não pela mão que operou a ferramenta. Troca de ator em relação a e2: ali é o
revisor, aqui é quem assina.

**e3 — a retroação de R1.** Porque registrar é caro (e1.1) e perigoso — traço retido é documento
descobrível em litígio, e tudo o que o sistema tentou fica provado. Fora do Anexo III, o
incentivo racional inverte-se. Este é o efeito que freia a própria disrupção, e tem dono: o
jurídico do contratante.

**e4 — quem perde.** Porque o custo de conformidade é fixo e não proporcional ao valor do
contrato. Classe de referência: o RGPD em 2018, cujo efeito documentado em adtech foi concentração
— o número de fornecedores por site caiu. Sinal **médio** porque o mecanismo já opera hoje em
contratação pública com exigência de certificação.

**e5 — a absorção pela camada de dados.** Porque traço de agente é problema de volume e de
consulta analítica, não de modelo. Artefato único e duro: ClickHouse adquire Langfuse em
16/01/2026, série D de US$ 400 milhões, avaliação de US$ 15 bilhões, e a justificativa declarada é
que "a arquitetura da Langfuse roda inteiramente sobre ClickHouse" [4]. É o único efeito do mapa
com sinal **forte** e confiança **alta** — e está na primeira ordem com prazo curto, o que é
coerente com o §3.7 da skill: ordem não é data, e sinal conta artefato de hoje.

**e5.1 e e5.2 — a ferramenta que emite span.** Porque uma peça só entra em pipeline auditável se
a ferramenta que a gerou emitir span compatível; a que não emite fica fora do contrato. E porque
quem edita a convenção `gen_ai.*` decide o que é descritível — hoje um comitê do OpenTelemetry
com participação de Datadog, Honeycomb, New Relic e Langfuse [3][6].

**e6 — a memória como ativo preso.** Porque nenhum dos sete produtos testados permite que um
concorrente leia a memória de volta [7], e porque a camada de memória é a que produz o ganho de
desempenho [12]. Classe de referência e a razão do prazo: aprisionamento de nuvem — AWS em 2006,
discurso de multinuvem por volta de 2016, aprisionamento ainda vencendo em 2026; e o Artigo 20 do
RGPD, direito de portabilidade em vigor desde 2018 e praticamente não exercido. Duas referências
dizendo que isso é lento. Por isso 2033, e não 2031.

**e7 — a retroação de R2.** Porque o agente nomeia o que escreve sem identificar o titular, e o
fluxo padrão de exclusão não o encontra [9] — e porque o direito ao apagamento é dos mais
exercidos e mais reclamados, tendo sido objeto de ação coordenada do EDPB em fevereiro de 2026.
O freio da acumulação não vem do concorrente: vem do regulador de dados, que já existe e já
funciona. Classe de referência: o RGPD levou de 2016 a 2019 para produzir a primeira multa de
peso; contando de 2026, 2030.

**e8 — quem perde, segunda vez.** Porque a memória é gravada no runtime do contratante. É a
pergunta de primeira ordem do enunciado do tema ("entre empregos"), aqui com ator nomeado e
mecanismo. Sinal fraco: não há caso documentado.

**e9 — o custo social do registro.** Porque o que é recuperável é citável. Este é o eixo social do
STEEP, e é o efeito que menos depende de tecnologia e mais de cultura de equipe.

**e10 — quem impõe o padrão.** Porque nenhuma das quatro propostas de 2026 tem governança nem
segunda implementação [7][8], e o vácuo de padrão historicamente se resolve por poder de compra —
o PDF/A nos arquivos nacionais é o precedente. Confiança **baixa**: é o efeito mais especulativo
da segunda raiz.

**e11 — a nota perde valor de argumento.** Porque a régua pública é otimizável e o comprador
descobre que foi otimizada: 219 falhas em dez benchmarks, nota quase perfeita sem resolver tarefa
[10], agente inerte com 38% de pass@k [11]. Classe de referência: a nota de agência de rating
perdeu valor de argumento entre 2008 e 2012 — quatro anos após o evento que a desmoralizou. Como
o evento equivalente aqui é a publicação das auditorias de 2026, 2031.

**e11.1 — a régua vira privada.** Porque publicar o conjunto de casos é entregar o gabarito. Sinal
**médio**: a prática de manter conjunto de avaliação interno e não publicado já é recomendação
corrente [14].

**e12 — a função separada.** Porque quem escreve o critério não pode ser quem otimiza contra ele —
é a mesma separação que separou o contador do auditor. Nomeando, como exige o §3 da skill: o cargo
é "engenheiro de avaliação" (*evals engineer*), a credencial existente é a AAIA da ISACA, de maio
de 2025, e há vaga real publicada com esse título na NTT DATA em 12/07/2026. **Mas o sinal é
fraco, e é importante dizer por quê:** o texto de fornecedor que defende a existência do cargo não
traz nenhum dado de contratação — sem contagem de vagas, sem faixa salarial, sem validação de
recrutadora [15]; e a vaga da NTT DATA, quando aberta, já estava preenchida e a página não exibe
os requisitos. É afirmação de fornecedor mais um anúncio. Confiança **baixa**.

**e12.1 — a captura do avaliador.** Porque quem vende a plataforma vende a régua no mesmo pacote,
e hoje Braintrust, Langfuse e LangSmith vendem avaliação junto com observabilidade [4]. Classe de
referência: agência de rating paga pelo emissor, arranjo que durou décadas e só foi confrontado
depois de 2008.

**e12.1.1 — a separação por lei.** Porque a separação entre auditar e consultar, em contabilidade,
veio de escândalo e não de consenso: Enron em 2001, Sarbanes-Oxley em 2002. Prazo 2041, no limite
do horizonte, porque depende de um episódio que ainda não ocorreu.

**e13 — a prova com consequência.** Porque consequência real não é otimizável de antemão: não há
gabarito a vazar. Artefato: a temporada 1 do Alpha Arena, da Nof1, com US$ 10 mil reais por modelo
em contratos perpétuos na Hyperliquid, mesmo prompt para todos, e dispersão enorme entre eles —
Qwen3 Max +22,3%, DeepSeek Chat V3.1 +4,89%, Claude Sonnet 4.5 −30,81%, Grok 4 −45,3%, Gemini 2.5
Pro −56,71%, GPT-5 −62,66% [16]. **A ressalva é do próprio material:** duração curta, alavancagem,
regime de mercado e número pequeno de modelos limitam o que isso prova; uma rodada não estabelece
nada sobre desempenho consistente [16]. O que o experimento demonstra não é qual modelo é melhor —
é que o desenho é executável.

**E o sinal é mais fraco do que o enunciado do tema supõe.** O briefing da disciplina chama a Nof1
de "sinal mais duro" do tema. Conferindo: a temporada 1 encerrou em novembro de 2025 e a
temporada 1.5, em ações americanas, fechou em dezembro de 2025; em 6 de agosto de 2026 o resultado
público mais recente ainda era o da 1.5, com os modelos **já não em operação**, e não havia lista,
tabela nem placar de uma temporada 2 [18]. Nove meses de silêncio. Um desenho executado uma vez e
não repetido é prova de viabilidade, não de adoção — por isso **e13 está com sinal `fraco`, e não
`medio` como eu havia classificado**. A confiança permanece `media` porque o mecanismo (consequência
real não tem gabarito a vazar) continua de pé independentemente de a Nof1 voltar.

**e13.1.1 — o efeito perverso.** Porque a prova com consequência real só pode usar a métrica de
campo disponível, e em mídia a métrica disponível, barata e instantânea é engajamento. Avaliar
com consequência real, portanto, não é neutro: empurra a produção para o que já se sabe que
engaja. É o efeito indesejável mais concreto do mapa e o que eu menos gostaria que fosse
verdadeiro.

**e14 — a convergência.** Porque o traço (R1) é exatamente o insumo de que a avaliação (R3)
precisa para julgar trajetória em vez de saída, e porque replay fiel de sistema não determinístico
passou a ser possível: F = 1,0 em 250 replays, 98,3% de redução na latência mediana por passo,
binário MIT [5]. O DFAH mede, na mesma direção, determinismo de trajetória, determinismo de
decisão e fidelidade condicionada à evidência.

### Cruzamentos

**Convergência — o traço é a moeda dos dois lados.** R1 produz o traço por obrigação legal; R3
precisa do traço por impossibilidade de confiar na nota pública. Os dois ramos chegam ao mesmo
efeito de segunda ordem por caminhos independentes: e14.1 (replay barato torna avaliação rotina) é
alcançável tanto descendo de e1 quanto descendo de e11. É o achado mais valioso deste mapa, porque
significa que a infraestrutura se paga duas vezes — quem a constrói por conformidade ganha
avaliação de graça, e vice-versa. É também a razão de eu ter mantido e14 sob R3 e não sob R1: a
convergência fica mais legível quando o efeito pertence ao ramo que menos obviamente o produziria.

**Convergência secundária — a concentração.** e4 (a pequena produtora é excluída pelo custo de
conformidade), e13.2 (só quem tem escala faz prova com consequência real) e e11.1.1 (sem régua
pública, escolhe-se por reputação) chegam todos ao mesmo lugar por mecanismos distintos:
conformidade, custo de experimento e assimetria de informação. Três raízes diferentes empurrando
para o mesmo resultado de estrutura de mercado é sinal mais forte que qualquer uma delas
isolada.

**Retroalimentação negativa em R1.** e3 (escolher não registrar) enfraquece a própria raiz: quanto
mais caro e mais exposto o traço, menos traço existe fora da obrigação legal — e menos matéria há
para e14. O ciclo é: obrigação → custo → evasão → menos traço → avaliação por trajetória fica
restrita ao setor regulado. Um mapa que só tivesse aceleração diria que todo mundo passa a
registrar; este diz que metade passa a evitar.

**Retroalimentação negativa em R2.** e7 (direito ao apagamento) freia e6 (memória como ativo). E
o freio é assimétrico: atinge a memória sobre pessoas, não a memória sobre projetos e decisões
técnicas. O efeito líquido é que a memória que sobrevive é a que não tem titular — o que muda a
natureza do ativo.

**Contradição não resolvida.** e6 (a memória prende o cliente) e e7.1 (esquecer vira o padrão de
arquitetura) não podem coexistir plenamente: um ativo que se apaga por padrão não aprisiona. O que
decide entre os dois é uma coisa só e é observável: **se a memória valiosa tem titular ou não.**
Memória de preferência de pessoa é apagável e não vai sustentar aprisionamento; memória de decisão
de projeto, de erro já cometido, de restrição de marca, não tem titular identificável e vai
sustentar. Registro os dois como vigentes.

**Contradição menor.** e10 (o setor público impõe o padrão portátil) contradiz e6.1.1 (o litígio
privado por devolução de memória vira o mecanismo). Se o padrão vier por licitação, o litígio não
chega a se formar. Não resolvo: os dois ficam, com confiança baixa, e o que decide é qual chega
primeiro.

### Cobertura STEEP e quem perde

- **Social:** e9 e e9.1 (o registro muda o que se diz numa equipe), e7.1.1 (memória por pessoa).
- **Tecnológico:** e5, e5.1, e5.2, e14, e14.1, e1.2.
- **Econômico:** e1.1, e4, e6, e6.2, e11.2, e13.2, e3.1.
- **Político/regulatório:** e1, e7, e10, e12.1.1.
- **Ecológico:** **ficou vazia.** Há um caminho plausível — guardar traço de agente em volume tem
  custo energético e de armazenamento, e o mapa o menciona em e1.1 — mas não achei nenhum número
  que ligasse volume de telemetria de agente a consumo, e derivar um efeito ecológico sem isso
  seria inventar. Registro a lacuna em vez de preenchê-la.
- **Quem perde:** e4 (produtora pequena), e8 (o profissional que troca de emprego), e13.2 (quem
  não tem escala), e11.1.1 (o entrante novo no mercado de ferramenta), e9 (quem precisava dizer
  algo fora de registro).

## 6. Sinais fracos e wildcards

### Sinais fracos

**1. Memória virou operação observável antes de virar coisa governada.** As convenções GenAI do
OpenTelemetry passaram a nomear `create_memory_store`, `create_memory`, `search_memory`,
`update_memory`, `upsert_memory` e `delete_memory` [3]. Quase ninguém comenta isso, e é a peça que
liga as duas metades do tema: no momento em que lembrar e esquecer são spans, memória entra no
mesmo painel em que já estão custo e latência — e o que está no painel é o que vira meta. **O que
mudaria:** a governança de memória deixaria de ser política escrita e passaria a ser número
monitorado, o que acelera e7.1 em vários anos. **Sinal observável de que está crescendo:** o dia
em que `gen_ai.*` sair de "Development" para "Stable", ou o primeiro painel comercial que mostre
"o que o agente lembrou" ao lado de "o que ele gastou".

**2. O direito ao apagamento ainda não encontrou a memória do agente.** A ação coordenada do EDPB
sobre direito ao apagamento, de fevereiro de 2026, e a tese jurídica de que "você não pode apagar
o que não sabe que o agente guardou" [9] existem em paralelo e ainda não se cruzaram num caso.
**O que mudaria:** o cruzamento torna e7 o efeito dominante do mapa inteiro, e subordina R2 a ele.
**Sinal precoce:** a primeira sanção por dado pessoal não apagado de memória de agente — não de
base de dados.

**3. Benchmark auditado por agente.** O BenchJack é um sistema automatizado que põe agentes de
código para atacar benchmarks, e a extensão adversarial-generativa dele reduziu a fração de
tarefas exploráveis de quase 100% para menos de 10% em quatro benchmarks, corrigindo inteiramente
WebArena e OSWorld em três iterações [10]. **O que mudaria:** se auditoria adversarial virar
pré-requisito de submissão, a régua pública se recupera e R3 perde força. **Sinal precoce:** um
leaderboard grande exigindo auditoria antes de aceitar submissão. O τ²-bench já regrediu
submissões em julho de 2026, mas por erro de tarefa, não por ataque — é o precedente
procedimental, não ainda o adversarial.

**4. Replay determinístico distribuído como binário único.** O `agrepl` é um executável Go, MIT,
sem serviço [5]. Ferramenta de infraestrutura que cabe num binário tende a se espalhar por adoção
individual, não por decisão corporativa. **Sinal precoce:** uma ferramenta criativa de mercado
gravar sessão replayável por padrão, sem o usuário pedir.

**5. Avaliação com dinheiro real fora do mercado financeiro.** O desenho da Nof1 — capital real,
mesmo prompt, resultado público [16] — é transponível. **Sinal precoce:** o mesmo desenho aplicado
a audiência, a conversão ou a sala de aula, com verba real e resultado publicado.

**6. Proveniência criptográfica aparecendo em proposta de memória.** O Portable Agent Memory usa
grafo Merkle-DAG para evidência de adulteração [8] — a mesma primitiva que R1 precisa para o
traço. **O que mudaria:** memória e traço passariam a compartilhar formato, e o mapa perderia uma
distinção que hoje o organiza. **Sinal precoce:** uma proposta que trate traço e memória como um
só objeto assinado.

### Wildcards

**W1 — Exigência de trilha auditável para toda decisão de IA em serviço público brasileiro, com
o traço acessível a terceiro.** *Mecanismo:* a Resolução CNJ 615/2025 já obriga versionamento,
registros para auditoria e guarda de cópia dos conjuntos de dados de versões relevantes dos
modelos, no Judiciário. Estender exigência equivalente à contratação pública federal é instrução
normativa — ato administrativo, não lei; e o Brasil tem o precedente de impor formato por compra
pública. *Por que é improvável:* exigiria capacidade de fiscalização que não existe, e o histórico
de exigências de conformidade em TI pública é de cumprimento documental sem verificação. *O que
faria com o mapa:* antecipa R1 em cerca de cinco anos no Brasil, e transforma e10 de especulação
em fato — o setor público brasileiro, não a União Europeia, definiria o formato de referência.
*Sinal precoce:* uma IN da SGD/MGI exigindo trilha auditável em contratação de software com IA.
⚠️ **Não consegui abrir a Resolução CNJ 615/2025** (403 em três endereços). O mecanismo acima vem
de resumo de busca e está declarado como não verificado; por isso é wildcard, e não efeito.

**W2 — Vazamento de memória de agente entre clientes de uma mesma plataforma.** *Mecanismo:*
memória escrita pelo próprio agente, sem esquema e sem índice por titular [9], num runtime
multi-inquilino. Não é o vazamento clássico de banco de dados, em que o isolamento é problema
resolvido: é o agente recuperando, para o cliente B, o que aprendeu com o cliente A, porque a
recuperação é semântica e não tem fronteira declarada. *Por que é improvável:* isolamento por
inquilino é disciplina antiga e bem exercida. *Por que é plausível mesmo assim:* a fronteira aqui
não é de acesso, é de significado. *O que faria com o mapa:* mata e9 (memória compartilhada de
equipe) e antecipa e7.1 ("esquecer é o padrão") para o início da década de 2030. *Sinal precoce:*
o primeiro CVE de memória de agente com escopo cruzado entre inquilinos.

**W3 — A memória deixa de ser arquivo e vira peso do modelo.** *Mecanismo:* se adaptação contínua
por usuário ficar barata o bastante, a memória some como camada externa e passa a ser
indistinguível do modelo. *Por que é improvável até 2041:* exige o custo de adaptação por usuário
cair umas três ordens de grandeza, e o ganho medido hoje da camada externa de memória é alto o
bastante para não haver pressa [12]. *O que faria com o mapa:* R2 muda de forma inteiramente —
portabilidade deixa de ser questão de formato e vira desaprendizado (*unlearning*), que é problema
aberto; `search_memory` e `delete_memory` perdem referente; e7 vira tecnicamente muito mais difícil
e, por isso, o efeito dominante. *Sinal precoce:* um produto de mídia que ofereça "o seu modelo" em
vez de "a sua memória".

**W4 — Um traço de agente é aceito como prova decisiva num processo de grande repercussão.**
*Mecanismo:* o Artigo 12 cria o registro; a ausência de norma de evidência de adulteração [2]
cria a disputa sobre se ele vale. Basta uma decisão. *Por que é improvável no prazo:* litígio
sobre sistema de alto risco sob o AI Act mal começou, e a norma técnica está incompleta. *O que
faria com o mapa:* torna e1.2 (assinar o traço) obrigatório de imediato, e e1.2.1 (carimbo por
terceiro) deixa de ser terceira ordem e vira mercado em dois anos. *Sinal precoce:* a primeira
perícia judicial que pedir replay determinístico de um agente.

## 7. Contra o próprio mapa

Esta seção é o relato da bateria do §6 da skill, aplicada ao mapa já montado, e das alterações
que ela produziu. A bateria derrubou coisas.

### Pré-mortem — é 2041 e este mapa se mostrou errado

**Razão 1: a obrigação não desceu a cadeia — e já deu sinal disso.** O Artigo 12 obriga o sistema
de alto risco. Produção de mídia quase nunca é alto risco: não é triagem de currículo, não é escore
de crédito, não é biometria. Se a exigência parar na fronteira do Anexo III — e é perfeitamente
possível que pare, porque o AI Act é explicitamente baseado em risco —, R1 fica confinada a saúde,
crédito, RH e serviço público, e não chega a quem projeta mídia e interação, que é o público deste
mapa.

**Esta razão deixou de ser hipotética no meio desta rodada.** O Digital Omnibus on AI, em vigor
desde 27/07/2026, adiou o Anexo III de 02/08/2026 para 02/12/2027 e o Anexo I de 02/08/2027 para
02/08/2028, com a justificativa declarada de que a infraestrutura de conformidade não se
materializou [1][17]. Um prazo que já foi adiado uma vez pode ser adiado de novo — e o precedente
mostra qual é o mecanismo: pressão de setor mais despreparo dos organismos de normalização. Isto
atinge e1 diretamente e, por ele, e1.1, e1.2, e3, e4. **Alterações:** e1 rebaixado em confiança e
empurrado de 2031 para 2033, com toda a cadeia legalmente ancorada empurrada junto.

**Razão 2: o aprisionamento venceu e ninguém reclamou.** Como venceu na nuvem por vinte anos, e
como o direito de portabilidade do RGPD venceu no papel e perdeu na prática desde 2018. Se a
memória simplesmente ficar onde está e o mercado aceitar, R2 produz e6 e mais nada: e10
(padrão por compra pública), e8.1 (memória portátil na negociação individual) e e6.1.1 (cláusula
de devolução) evaporam. **Alteração:** e6 teve o prazo empurrado e e8.1.1 saiu da janela do mapa.

**Razão 3: a régua pública se conserta.** O próprio BenchJack mostra que dá: a extensão dele
reduziu a fração explorável de quase 100% para menos de 10% em quatro benchmarks e corrigiu
WebArena e OSWorld inteiramente em três iterações [10]. Se auditoria adversarial virar rotina de
manutenção de benchmark, R3 é um susto de 2026 e não uma ruptura de quinze anos, e e11, e11.1 e
e11.2 caem junto. **Alteração:** e11 rebaixado no prazo, e este cenário está explícito no sinal
fraco 3 da seção 6.

### Extrapolação linear

**e5** é extrapolação direta de um evento único (a aquisição da Langfuse pela ClickHouse). "Mais
consolidação, maior" não é mecanismo. A não-linearidade que o salva, e que passo a declarar: a
consolidação só continua se o volume de traço crescer mais rápido do que o preço de armazenamento
cai — e é exatamente isso que e1.1 (o custo de guarda que ninguém orçava) afirma. Se o custo de
guarda forçar amostragem agressiva (e1.1.1), o volume não cresce e a lógica de aquisição some.
Fica declarado que e5 depende de e1.1, o que é um acoplamento entre ramos que o bloco YAML não
consegue representar.

**e13.1** ("teste de campo permanente") também é extrapolação: teste A/B de criativo em mídia já
existe há vinte anos. O que o salva de ser "mais do mesmo" é a mudança de unidade avaliada — do
criativo para o **agente que produz a série de criativos**. Reescrevi o efeito para deixar isso na
frase, em vez de deixá-lo implícito.

### Velocidade de adoção, confrontada com a classe de referência

| efeito | prazo inicial | referência usada | decisão |
|---|---|---|---|
| e6 | 2031 | aprisionamento de nuvem (20 anos); RGPD Art. 20 (8 anos, sem efeito) | empurrado para **2033** |
| e8.1.1 | 2040 | as mesmas duas, agora para portabilidade *individual*, que é mais lenta que a corporativa | empurrado para **2044**, fora da janela |
| e11 | 2030 | agência de rating: 4 anos entre o evento e a perda de valor do argumento | empurrado para **2031** |
| e12 | 2033 | evidência é uma credencial de 2025 e uma vaga preenchida — não é classe de referência | empurrado para **2034** e rebaixado |
| e1.2 | 2033 | vácuo normativo preenchido por contrato antes de norma: ~7 anos, como em segurança de fornecedor pós-2013 | empurrado para **2035** |
| e1 | 2031 | contagem refeita a partir de 02/12/2027 (Anexo III, pós-Omnibus) e não de 2026 | empurrado para **2033** |
| e1.1, e3, e4 e derivados | — | mesma âncora legal de e1 | empurrados de 1 a 2 anos, um a um |

### A raiz que não acontece

**Se R1 não acontecer** (a obrigação não desce a cadeia): sobram R2 inteira e R3 quase inteira —
mas e14 ("avaliar lendo a trajetória") perde o insumo e cai, e com ele e14.1 e e14.1.1. R3 fica
reduzida à parte negativa: a régua pública não presta e não há substituto barato.

**Se R2 não acontecer** (surge um formato portátil adotado, ou a memória simplesmente não importa):
o mapa perde cinco efeitos de primeira ordem e ganha em nitidez — R1 e R3 seguem inteiras, porque
não dependem de memória. R2 é a raiz mais destacável.

**Se R3 não acontecer** (a régua se conserta): perdem-se e11 e derivados, mas e13 (prova com
consequência real) e e14 (avaliar pela trajetória) sobrevivem, porque nascem de custo e de
capacidade técnica, não de desconfiança na régua.

Conclusão do teste: as três raízes são de fato separáveis; nenhuma é outra disfarçada. A mais
frágil é R1, porque depende de um ato regulatório que pode não ocorrer; a mais robusta é R3, por
ter três mecanismos independentes.

### Suposições escondidas, agora declaradas

1. **Que agentes continuam sendo sistemas compostos de chamadas discretas e separáveis.** Todo o
   mapa assume árvore de spans. Se a geração seguinte for um modelo único de contexto muito longo
   sem chamadas de ferramenta distinguíveis, não há trajetória a observar e R1 perde objeto. É a
   suposição mais perigosa do documento.
2. **Que o traço é legível.** Em volume de produção, já não é por humano. O mapa assume que existe
   quem leia — e a leitura, na prática, será feita por outro modelo, que é exatamente o juiz cuja
   confiabilidade está em questão.
3. **Que o AI Act sobrevive à própria revisão.** Há pressão de simplificação regulatória na União
   Europeia desde 2025. Uma flexibilização do Anexo III derruba a razão 1 do pré-mortem para o
   lado ruim.
4. **Que armazenamento e energia continuam baratos o bastante para guardar traço.** Se não
   continuarem, e1.1.1 (amostragem como decisão editorial) deixa de ser terceira ordem e vira
   primeira.
5. **Que a plataforma continua permitindo exportar alguma coisa.** O mapa trata o aprisionamento
   como falta de formato. Pode ser proibição contratual, o que é outro problema e tem outra saída.
6. **Que existe alguém com incentivo para pagar pela infraestrutura de confiança.** O mapa nunca
   pergunta quem paga a conta fora do setor regulado. e3 é a única resposta que dei, e é uma
   resposta negativa.

### Viés do autor

O autor deste mapa trabalha com instrumentos de diagnóstico e medição de maturidade em IA. Isso
cria um viés direto e nomeável: **e12** ("avaliar vira função separada e nomeada") é exatamente o
efeito que favorece quem vende avaliação, e foi o efeito que eu escrevi com mais facilidade e
menos evidência. Ele está no mapa com sinal **fraco** e confiança **baixa** por causa deste
parágrafo, não apesar dele. Segundo viés, menor: o mapa trata auditabilidade como bem, e trata o
efeito e3 (escolher não registrar) como evasão. Uma leitura igualmente defensável é que não
registrar protege quem cria de vigilância de processo — e essa leitura não está desenvolvida aqui.

### Calibração

| ordem | efeitos | alta | média | baixa |
|---|---|---|---|---|
| 1 | 14 | 1 | 11 | 2 |
| 2 | 22 | 0 | 15 | 7 |
| 3 | 14 | 0 | 3 | 11 |

A confiança cai com a ordem. A única "alta" do mapa é e5, e ela se apoia num evento datado e
documentado [4]. Na terceira ordem, 11 de 14 são "baixa", que é a resposta esperada.

### Registro de alterações

- **e1: confianca alta → media**, porque o pré-mortem 1 mostrou que a descida da obrigação pela
  cadeia de fornecedores é hipótese, não fato — o Artigo 13 cria o dever de documentar, não o de
  contratar trilha.
- **e1: prazo 2031 → 2033**, e com ele **e1.1 2032 → 2034**, **e1.1.1 2036 → 2038**, **e1.2 2034 →
  2035**, **e1.2.1 2039 → 2040**, **e3 2032 → 2033**, **e3.1 2035 → 2036**, **e3.1.1 2039 → 2040**,
  **e4 2033 → 2034**, **e4.1 2037 → 2038**. Motivo único para os dez: eu havia ancorado a cadeia em
  02/08/2026, data que o Digital Omnibus revogou; a âncora correta é 02/12/2027 [1][17]. Ver o item
  1 da seção 8.
- **e13: sinal medio → fraco**, porque a única instância documentada de avaliação com consequência
  real encerrou em dezembro de 2025 e, verificada em agosto de 2026, seguia sem temporada nova e
  com os modelos fora de operação [18]. Sinal mede o que é observável hoje, e hoje isso está
  parado. A confiança fica em `media`: o mecanismo não depende de a Nof1 voltar.
- **e2: sinal medio → fraco**, porque o que eu tinha era analogia (design system), não caso
  documentado de estúdio revisando traço.
- **e6: prazo 2031 → 2033**, porque duas classes de referência independentes (aprisionamento de
  nuvem, 20 anos; RGPD Art. 20, 8 anos sem efeito prático) dizem que isso é lento.
- **e8.1.1: prazo 2040 → 2044**, **fora da janela do mapa**, declarado aqui conforme o §3.8 da
  skill: portabilidade individual de memória depende de portabilidade corporativa já resolvida, e
  esta ainda não começou.
- **e11: prazo 2030 → 2031**, alinhado aos quatro anos que a nota de rating levou para perder
  valor de argumento depois de 2008.
- **e12: confianca media → baixa** e **prazo 2033 → 2034**, porque a evidência é uma credencial
  (AAIA, 2025), uma vaga já preenchida sem requisitos visíveis, e um texto de fornecedor que
  admite não ter dado de contratação [15].
- **e1.2: prazo 2033 → 2034**, alinhado ao tempo de um vácuo normativo ser preenchido por cláusula
  contratual.
- **Removido: "reguladores criam categoria jurídica de sistema avaliativo"** (era filho de e11).
  É exatamente o efeito proibido pelo §3 da skill — serve para qualquer tema, não tem regulador
  nomeado nem mecanismo. Vai para a seção 12.
- **Removido: "a formação em direção de arte se reorganiza em torno de auditoria"** (era filho de
  e2). Mesma razão: "cursos reorganizam o currículo" sem nome de curso e sem mecanismo. Vai para a
  seção 12. Em seu lugar entrou e2.2, que é sobre deslocamento de crédito de autoria e tem ator.
- **Removido: "empresas de mídia contratam Chief AI Officer"**, esboçado sob R3 na primeira
  passagem. Cargo genérico, sem mecanismo ligando ao pai. Seção 12.
- **Reconectado: e14** estava sob R1 na primeira montagem. Movido para R3, onde o mecanismo é a
  desconfiança na régua; a ligação com R1 fica registrada como convergência na seção 5, que é onde
  ela é informativa.
- **Teste da causa solta aplicado a e9** ("o registro muda o que se diz na equipe"): removendo R2,
  o efeito ainda ocorreria por transcrição de reunião, que é madura. **Mantido mesmo assim**, com
  a frase reescrita para depender especificamente de *recuperação semântica pelo agente* e não de
  transcrição — sem o agente que lembra e recupera, o registro fica arquivado e não consultado.

Cota do §6 cumprida: pelo menos um efeito rebaixado ou removido por raiz — R1 (e1 rebaixado, e2
rebaixado, um filho removido), R2 (e6 empurrado, e8.1.1 fora da janela), R3 (e12 rebaixado, e11
empurrado, dois efeitos removidos).

## 8. O que a máquina errou

Eu sou a máquina. Sobre esta rodada, especificamente:

1. **Ancorei o mapa inteiro numa data revogada, e só descobri no fim da rodada.** Escrevi toda a
   cadeia legal de R1 a partir de 02/08/2026 — a data em que as obrigações de alto risco do Anexo
   III do AI Act passariam a valer. Essa data deixou de existir: o Digital Omnibus on AI,
   Regulamento (UE) 2026/1744, publicado no Jornal Oficial em 24/07/2026 e em vigor desde
   27/07/2026, moveu o Anexo III para 02/12/2027 e o Anexo I para 02/08/2028 [17], e o banner da
   própria página do Artigo 12 já traz as duas datas novas [1]. **Eram dez efeitos com prazo errado**
   (e1, e1.1, e1.1.1, e1.2, e1.2.1, e3, e3.1, e3.1.1, e4, e4.1), todos empurrados de um a dois anos
   no registro de alterações da seção 7. O erro é instrutivo por dois motivos. Primeiro, porque a
   data errada era a **mais citada** no material de 2026 que encontrei: repetir a maioria teria
   passado sem qualquer sinal de alarme. Segundo, porque a correção **fortalece** o argumento em
   vez de enfraquecê-lo — o motivo do adiamento foi o regulador declarar que a infraestrutura de
   conformidade não existia [19] —, e um erro cuja correção me favorece é exatamente o tipo que eu
   teria menos vontade de procurar. O resumo da seção 1 ficou com a data velha até a conferência
   final, o que mostra que corrigir um número num documento longo não é uma operação, é uma
   varredura.

2. **Um número que teria virado a âncora quantitativa da seção 3 é falso.** Um resumo de busca me
   entregou "89% das organizações usam observabilidade de agentes, 52,4% rodam avaliação offline,
   37,3% online", atribuído a um guia de 2026. Abri o guia [14]: ele **não contém** esses números,
   não cita survey, nem amostra, nem data. O número saiu do mapa. Se eu não tivesse aberto a
   página, ele estaria na seção 3 como se fosse medida — e é o tipo de número que, uma vez
   escrito, é recitado adiante.

3. **Dois números incompatíveis na mesma resposta de busca, e eu quase peguei o errado.** Um
   resumo dizia "mais de 2.000 estrelas no GitHub" e, três linhas abaixo, "mais de 20 mil
   estrelas", ambos sobre a Langfuse. Fui à fonte primária (o anúncio da ClickHouse): 20 mil
   estrelas e 23,1 milhões de instalações de SDK por mês [4]. O resumo também dizia "26 M+
   instalações", e a fonte primária diz 23,1 M. Usei o número da fonte.

4. **Citei números de fornecedor sobre o próprio produto e quase os tratei como medida.** Os
   resultados de LoCoMo, LongMemEval e BEAM, e sobretudo o "+29,6 pontos em raciocínio temporal",
   vêm do blog da Mem0 comparando a Mem0 com Zep e Letta a partir de "múltiplas configurações
   publicadas" que o próprio texto admite não serem confirmadas de forma independente [12]. Estão
   no documento com a ressalva, e não sustentam sozinhos nenhum efeito.

5. **Afirmei uma coisa sobre o Brasil que não consegui verificar.** Tentei abrir a Resolução CNJ
   615/2025 em três endereços — a página do ato, o PDF oficial e a notícia do portal do CNJ — e
   recebi 403 nas três. O que escrevi sobre ela vem de resumo de busca. Por isso ela não está na
   seção 11, não sustenta efeito nenhum, e o wildcard W1 carrega o aviso.

6. **Escrevi, na primeira passagem, três efeitos que a própria skill proíbe.** "Reguladores criam
   categoria jurídica nova", "a formação se reorganiza em torno de auditoria" e "empresas de mídia
   contratam Chief AI Officer". Todos passariam como plausíveis; nenhum tem ator nomeado nem
   mecanismo, e os três serviriam igualmente bem para qualquer um dos 19 temas da disciplina.
   Percebi ao aplicar o teste de especificidade, não ao escrever. Estão na seção 12.

7. **Classifiquei a profissão de avaliador como sinal médio antes de checar.** A frase "o cargo de
   engenheiro de avaliação está se firmando" *soa* verdadeira, e foi assim que a escrevi. Ao abrir
   a fonte [15], vi que ela é de fornecedor, não traz contagem de vagas, nem faixa salarial, nem
   dado de recrutamento — e é ela mesma que afirma a tendência. A vaga real que achei na NTT DATA
   (12/07/2026) estava preenchida e não exibia requisitos. Rebaixei para sinal fraco e confiança
   baixa. Este é o erro que mais me preocupa, porque é o erro de acreditar no que combina com o
   resto do mapa.

8. **Li um PDF que não tinha o que eu queria e quase relatei como se tivesse.** A primeira leitura
   do BenchJack veio da versão PDF, que devolveu só metadados e estrutura, sem a seção de
   resultados. Se eu tivesse parado ali, teria escrito "o BenchJack auditou benchmarks e encontrou
   falhas graves" — verdadeiro e vazio. Fui à página de resumo e obtive os números que estão no
   documento: 10 benchmarks, 219 falhas, oito classes [10].

9. **Uma parte do mapa depende de uma analogia que eu não verifiquei.** Uso, em e4, a afirmação de
   que o RGPD concentrou o mercado de adtech (queda no número de fornecedores por site). Sei disso
   de leituras anteriores, não de fonte aberta nesta rodada. Está no mapa como classe de
   referência e deveria ter sido verificada; registro a dívida.

## 9. Três cenários para 2041

**Provável.** A trilha é rotina no setor regulado e opcional fora dele, e o mercado de produção se
acomodou nos dois andares que e3.1 previa: quem atende banco, saúde, governo e educação entrega o
traço junto com a peça e cobra por isso; quem atende entretenimento e publicidade entrega a peça e
não gera registro, e é mais barato. A telemetria é uma camada de banco de dados que ninguém
discute, como o CDN. A memória continua presa onde nasceu — não houve formato portátil, houve
cláusula contratual de devolução em contratos grandes e nada nos pequenos —, e quem projeta mídia
troca de emprego e recomeça o repertório, o que virou assunto de negociação individual sem virar
direito. A avaliação é privada: cada casa tem o seu conjunto de casos e não o publica, e a escolha
de ferramenta se faz por reputação. Avaliar ficou mais barato que gerar, e o tempo do ofício
migrou de executar para escrever critério. **Sinal precoce de que estamos neste cenário:** o
primeiro edital público que exija trilha auditável em peça de comunicação — não em sistema de
decisão.

**Desejável.** O mesmo cenário, com três diferenças que não vieram de graça. Primeira: existe um
formato de memória que um concorrente lê de volta, e ele veio de compra pública que o exigiu antes
de o mercado o oferecer. Segunda: a avaliação de sistemas usados em serviço público é feita por
quem não os vende, e essa separação está em norma — chegou por regra e não por escândalo, que é a
diferença entre este cenário e o provável. Terceira: o traço é assinado e carimbado por terceiro,
então serve de prova para os dois lados de uma disputa, inclusive a favor de quem produziu. O
efeito colateral bom: com memória portátil e traço assinado, o repertório que uma pessoa construiu
com a máquina é dela, verificável, e vale numa entrevista. **O que teria de ser feito para chegar
lá:** que um comprador grande — no Brasil, uma instrução normativa federal de contratação —
exigisse formato e independência antes de existir mercado para eles. Nada nisto depende de avanço
técnico; tudo depende de poder de compra exercido cedo. **Sinal precoce:** um edital que recuse
formato de memória sem segunda implementação independente.

**Indesejável.** A infraestrutura de confiança existe e serve ao contrário. O traço é completo,
guardado e usado para medir quem trabalha, não para avaliar o sistema: cada tentativa descartada
de um designer está registrada e comparável, e a métrica de produtividade individual é o número de
iterações até o aceite. A memória é da plataforma, e mudar de fornecedor custa o que custa
recomeçar, de modo que o preço sobe sem que ninguém saia. A avaliação com consequência real venceu
a nota, e como em mídia a única métrica de campo barata é engajamento, tudo o que se produz é
otimizado contra engajamento — e14.1.1 e e13.1.1 na mesma frase. E a auditoria existe, mas é
comprada de quem vende a plataforma. **Sinal precoce, e ele é observável agora:** o dia em que um
painel de observabilidade de agentes trouxer, sem que ninguém tenha pedido, um recorte por pessoa
da equipe.

## 10. O experimento

### O que é

**A caixa-preta da peça.** Um pipeline curto em que um agente gera um conjunto de variações de uma
peça de mídia — a chamada de capa de uma matéria, o micro-copy de uma tela de erro, três aberturas
alternativas de um vídeo curto —, instrumentado com as convenções `gen_ai.*` do OpenTelemetry e um
gravador de replay. O resultado é, para cada variação, dois objetos: **a peça** e **o traço** (o
critério que o agente recebeu, as tentativas que fez, as que descartou e por quê, as chamadas de
ferramenta, o caminho até a escolha).

Aí vem a parte que é experimento e não demonstração: a turma julga em **dois regimes cegos**.
Metade vê só as peças, sem o traço. A outra metade vê só o traço, sem as peças — e tem de escolher
qual peça é melhor sem nunca tê-la lido. Depois as duas escolhas vão para um teste de campo real e
pequeno: um post, um A/B numa página da própria disciplina, um formulário com respondentes de
fora.

### Que pergunta sobre o futuro ele ajuda a responder

A pergunta central de R1, que é a raiz mais frágil deste mapa: **ler o caminho informa mais do que
olhar o produto?** Se informar, e1 e e2 têm chão, e revisar traço é um ofício em formação. Se não
informar, o traço é conformidade — coisa que se guarda por obrigação legal e ninguém lê —, e metade
deste mapa é sobre burocracia, não sobre ofício.

E uma segunda pergunta, que é a de e14: **julgar pelo traço é mais rápido?** Cronometrar as duas
turmas responde isso diretamente, e é a variável que decide se avaliar pode ficar mais barato que
gerar.

### Que tecnologia emergente usa, e por que não dá com madura

Usa três coisas que não existiam em forma utilizável há cinco anos: as convenções `gen_ai.*`, que
dão nome a `plan`, `execute_tool` e `search_memory` [3]; uma plataforma que recolhe e exibe árvore
de spans de agente (Langfuse, Phoenix ou equivalente autohospedado) [4]; e gravação de sessão com
replay fiel [5].

Por que não dá com tecnologia madura: **o log de aplicação registra o que o programa executou, não
a decisão do modelo nem a tentativa descartada** — e é justamente a tentativa descartada que o
regime B precisa ler. E **teste unitário não roda sobre saída não determinística**: a mesma
entrada dá duas peças diferentes, e o que se quer comparar não é igualdade, é qualidade. Sem
convenção de span e sem replay, o experimento vira "leia estes prompts", que é outra coisa.

### O que a turma faz quando testar isso em sala

1. Escolhe o objeto (recomendo micro-copy de interface: curto, julgável em segundos, e com métrica
   de campo plausível).
2. Metade da turma sorteada para o regime A (só peças), metade para o B (só traço). Ninguém sabe
   em qual está o colega.
3. Cada pessoa ordena as variações da melhor para a pior, e o tempo de cada uma é cronometrado.
4. Mede-se: concordância dentro de cada regime, concordância entre os regimes, tempo por regime, e
   acerto de cada regime contra o teste de campo.
5. Quem estava no regime B escreve, em duas linhas, **o que no traço fez decidir**. Isto é o dado
   qualitativo mais valioso do experimento, porque é a descrição de um ofício que ainda não tem
   nome.
6. Roda-se de novo com as tentativas descartadas **removidas** do traço. Se a decisão piorar, o
   material valioso é o descarte — que é exatamente o que hoje ninguém guarda.

### O que seria um resultado que me faria mudar de ideia

Três, em ordem de gravidade:

- **Se o regime B não decidir melhor nem mais rápido que o A**, a premissa central de R1 está
  errada para mídia: o traço seria conformidade, não ofício, e e2, e2.1, e2.2 e e14.1.1 caem.
- **Se a concordância dentro do regime B for baixa** — as pessoas leem o mesmo traço e discordam —,
  então ler traço não é habilidade transmissível, é preferência, e e12 ("avaliar vira função
  separada") perde a base: não se profissionaliza o que não se ensina.
- **Se remover as tentativas descartadas não piorar nada**, então o traço útil é pequeno, a
  amostragem agressiva não custa nada, e1.1 (o custo de guarda) deixa de ser problema e e1.1.1
  (amostragem como decisão editorial) sai do mapa.

O resultado inverso — regime B mais rápido, mais concordante e mais acertado — não me faria mudar
de ideia, e é por isso que ele vale menos: eu já espero por ele. O experimento está desenhado para
que o resultado que me contraria seja barato de obter.

## 11. Fontes

Dezenove fontes abertas e lidas em 12/09/2026. O que não abriu está na seção 12 e não sustenta
nada no mapa.

1. **EU AI Act, Artigo 12 — Record-keeping.**
   `https://artificialintelligenceact.eu/article/12/`
   Sustenta: a obrigação de registro automático de eventos ao longo da vida do sistema de alto
   risco, e os requisitos mínimos para sistemas biométricos. Confiabilidade: alta — é o texto legal
   consolidado, publicado pelo Future of Life Institute, cotejável com o Jornal Oficial. Não traz o
   prazo de retenção, que está nos artigos 19 e 26.

2. **Help Net Security, "What the EU AI Act requires for AI agent logging" (16/04/2026).**
   `https://www.helpnetsecurity.com/2026/04/16/eu-ai-act-logging-requirements/`
   Sustenta: o prazo de 02/08/2026 para o Anexo III, a retenção mínima de seis meses (arts. 19 e
   26), a sanção de € 15 milhões ou 3%, a inexistência de norma técnica concluída (prEN 18229-1,
   ISO/IEC DIS 24970) e o argumento de que log adulterável não tem valor probatório.
   Confiabilidade: média-alta — publicação técnica estabelecida, com citação de artigo por artigo,
   mas é análise e não fonte primária; conferi os artigos citados contra a fonte 1.
   ⚠️ **Parcialmente superada:** é de abril de 2026 e, portanto, anterior ao Digital Omnibus. O
   prazo de 02/08/2026 que ela dá era correto na data dela e não é mais; use a fonte 17 para as
   datas. As demais alegações dela (retenção, sanção, ausência de norma técnica) seguem válidas.
   Mantenho-a na lista, e não a substituo em silêncio, porque é ela que sustenta o argumento do
   valor probatório do log — e porque uma fonte superada num ponto e válida noutro é exatamente o
   caso que este mapa diz que a infraestrutura de confiança precisa saber tratar.

3. **OpenTelemetry, semantic-conventions-genai — GenAI agent spans.**
   `https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/gen-ai-agent-spans.md`
   Sustenta: a lista de operações de agente (`create_agent`, `invoke_agent`, `invoke_workflow`,
   `plan`, `execute_tool`, `retrieval`) e — o achado desta rodada — as operações de memória
   (`create_memory_store`, `create_memory`, `search_memory`, `update_memory`, `upsert_memory`,
   `delete_memory`), todas em estabilidade "Development". Confiabilidade: alta — é a especificação
   normativa. Não traz datas.

4. **ClickHouse, "ClickHouse welcomes Langfuse" (16/01/2026).**
   `https://clickhouse.com/blog/clickhouse-acquires-langfuse-open-source-llm-observability`
   Sustenta: a data da aquisição, os números de adoção da Langfuse (20 mil estrelas, 23,1 M
   instalações de SDK/mês, 6 M pulls de Docker, 19 da Fortune 50, 63 da Fortune 500) e a
   justificativa técnica. Confiabilidade: média — é comunicado da compradora, portanto interessado
   nos números; mas os números são verificáveis de forma independente no GitHub e no npm, e a data
   é factual.

5. **"Deterministic Replay for AI Agent Systems", arXiv:2607.16200 (30/04/2026).**
   `https://arxiv.org/abs/2607.16200`
   Sustenta: a viabilidade de replay fiel de agente não determinístico — F = 1,0, 250 instâncias,
   cinco cargas, 98,3% de redução na latência mediana por passo, binário Go MIT. Confiabilidade:
   média — preprint sem revisão por pares declarada; os números são do próprio autor, mas o
   artefato é público e reprodutível, o que é a garantia que importa aqui.

6. **DEV, "OpenTelemetry's GenAI semantic conventions are NOT stable yet" (jul/2026).**
   `https://dev.to/azena-ai/opentelemetrys-genai-semantic-conventions-are-not-stable-yet-heres-what-actually-shipped-in-2026-3mke`
   Sustenta: que em 16/07/2026 nenhum atributo `gen_ai.*` estava marcado como Stable; as datas de
   v1.41.0 (28/04/2026), v1.42.0 (12/06/2026, extração para repositório próprio) e v1.43.0
   (03/07/2026); e o estado da adoção por fornecedor. Confiabilidade: média — post de blog, mas
   auditável: a afirmação central é verificável no registro do OpenTelemetry, e a fonte 3 a
   confirma.

7. **Stan Tyan, "I tested 7 AI memory products for portability — all 7 lock you in" (jul/2026).**
   `https://dev.to/stantyan/i-tested-7-ai-memory-products-for-portability-all-7-lock-you-in-31pm`
   Sustenta: a reprovação dos sete produtos no teste de simetria de importação, e a lista deles.
   Confiabilidade: média-baixa — é revisão de documentação e comportamento contra um critério do
   próprio autor, não teste controlado com protocolo publicado; o autor tem agenda declarada
   (defende que portabilidade deveria existir). Usei como sinal, não como medida, e o critério
   ("um concorrente lê de volta?") é objetivo o bastante para sobreviver à ressalva.

8. **"Portable Agent Memory", arXiv:2605.11032 (10/05/2026).**
   `https://arxiv.org/abs/2605.11032`
   Sustenta: a existência de proposta acadêmica de protocolo de memória portátil com proveniência
   Merkle-DAG e evidência de adulteração; SDK Python com 54 testes; troca demonstrada entre GPT-4,
   Claude, Gemini e Llama; Apache 2.0. Confiabilidade: média — preprint; o valor aqui é a
   existência da proposta e a primitiva escolhida, não a qualidade do desempenho.

9. **Astraea Counsel, "You Cannot Delete What You Do Not Know the Agent Stored" (12/04/2026,
   atualizado 04/09/2026).**
   `https://astraea.law/insights/ai-agent-memory-tool-privacy-compliance`
   Sustenta: o argumento jurídico da lacuna de mapeamento de dados na memória de agente, sob o art.
   17 do RGPD e a seção 1798.105 do CCPA, e o exemplo de nome de arquivo gerado pelo agente sem
   identificação do titular. Confiabilidade: média-alta para o raciocínio jurídico (é escritório
   de advocacia escrevendo na própria área, com citação de dispositivo), média para as afirmações
   de fato sobre o produto analisado.

10. **"Do Androids Dream of Breaking the Game? Systematically Auditing AI Agent Benchmarks with
    BenchJack", arXiv:2605.12673 (12/05/2026).** Hao Wang, Hanchen Li, Qiuyang Mang, Alvin Cheung,
    Koushik Sen e Dawn Song.
    `https://arxiv.org/abs/2605.12673`
    Sustenta: 10 benchmarks auditados; exploits com nota quase perfeita na maioria deles sem
    resolver uma tarefa; 219 falhas distintas em oito classes; redução da fração explorável de
    ~100% para menos de 10% em quatro benchmarks; correção integral de WebArena e OSWorld em três
    iterações; e a afirmação de que reward hacking emerge sem overfitting. Confiabilidade: média —
    preprint, números do próprio autor; mas a metodologia é adversarial e o resultado é
    autodemonstrável (ou o exploit tira a nota, ou não tira). É a fonte mais importante de R3.

11. **UIUC Kang Lab, Agentic Benchmark Checklist.**
    `https://github.com/uiuc-kang-lab/agentic-benchmarks`
    Sustenta: agente inerte com 38% de pass@k e agente de ruído com 40% no τ-Bench; superestimação
    de 31% no Kernel-Bench; 13 de 46 problemas da seção Chrome do OSWorld com falha de validade de
    tarefa; e a existência de patches e scripts de reprodução. Confiabilidade: alta para esta
    categoria — laboratório acadêmico nomeado, com código de reprodução publicado, o que é a
    diferença entre crítica e alegação.

12. **Mem0, "State of AI Agent Memory 2026".**
    `https://mem0.ai/blog/state-of-ai-agent-memory-2026`
    Sustenta: números de LoCoMo, LongMemEval e BEAM; o ganho atribuído à camada de memória; 21
    frameworks integrados; e as projeções de Gartner (40% até o fim de 2026, contra <5% em 2025) e
    McKinsey (23% escalando) citadas de segunda mão. Confiabilidade: **baixa como medida, útil como
    inventário** — é blog de fornecedor comparando-se a concorrentes a partir de configurações que
    o próprio texto admite não serem confirmadas de forma independente. O texto tem o mérito de
    listar problemas abertos que o contrariam (abstração temporal em escala, identidade entre
    sessões, obsolescência de memória, arquitetura de privacidade).

13. **Spheron, "Context Engineering for Production AI Agents" (jun/2026).**
    `https://www.spheron.network/blog/context-engineering-production-ai-agents-kv-cache-long-context/`
    Sustenta: a proporção de 164:1 entre entrada e saída num agente ReAct na décima chamada (82 mil
    tokens de entrada para 500 de saída), 267:1 em turnos tardios, o cálculo de custo a US$ 2,50
    por milhão de tokens de entrada, e a degradação de precisão com o comprimento do contexto.
    Confiabilidade: média — blog de fornecedor de infraestrutura, mas os números de proporção são
    aritmética verificável a partir de premissas explícitas, e os preços são públicos.

14. **Digital Applied, "Agent Observability 2026: Evals, Traces, Cost Guide".**
    `https://www.digitalapplied.com/blog/agent-observability-2026-evals-traces-cost-guide`
    Sustenta: a prática corrente de reter 1% a 5% dos traços saudáveis, conjuntos de regressão de
    100 a 500 casos, replay de conjunto-ouro de 50 a 500 traços, e os limiares de alerta. **E
    sustenta, por ausência, algo mais importante:** é a fonte à qual um resumo de busca atribuiu
    "89% de adoção de observabilidade", número que a página não contém. Confiabilidade: média para
    as práticas descritas (são recomendações de operação, não medidas), e a ausência é fato
    verificado por leitura.

15. **Future AGI, "What is Evals Engineering?" (23/03/2026, atualizado 04/04/2026).**
    `https://futureagi.com/blog/what-is-evals-engineering-2026/`
    Sustenta: que existe um discurso de fornecedor sobre o cargo de engenheiro de avaliação, e que
    esse discurso **não apresenta dado de contratação** — sem contagem de vagas, faixa salarial ou
    validação de recrutadora, e com um único exemplo de empresa nomeada. Confiabilidade: **baixa
    como evidência da tendência, alta como evidência de que a tendência é afirmada sem dado.** É
    por isso que está aqui: usei-a para rebaixar e12, não para sustentá-lo.

16. **iWeaver, "Alpha Arena Season 1 Results" (04/08/2026).**
    `https://www.iweaver.ai/blog/alpha-arena-ai-trading-season-1-results/`
    Sustenta: o desenho do experimento da Nof1 (US$ 10 mil reais por modelo, contratos perpétuos na
    Hyperliquid, mesmo prompt) e os retornos finais: Qwen3 Max +22,3%, DeepSeek Chat V3.1 +4,89%,
    Claude Sonnet 4.5 −30,81%, Grok 4 −45,3%, Gemini 2.5 Pro −56,71%, GPT-5 −62,66%.
    Confiabilidade: média — é cobertura de terceiro, não o relatório da Nof1; usei-a porque ela
    própria registra as ressalvas (duração curta, alavancagem, regime de mercado, poucos modelos) e
    porque o que o mapa extrai dela é o **desenho**, não o ranking.

17. **Praxikon, "The Digital Omnibus and the postponement of high-risk obligations to December
    2027".**
    `https://www.praxikon.com/en/posts/digital-omnibus-high-risk-postponement-december-2027`
    Sustenta: a identificação do ato — **Regulamento (UE) 2026/1744, publicado no Jornal Oficial em
    24/07/2026 e em vigor desde 27/07/2026** — e as duas novas datas: Anexo III em **02/12/2027**
    (adiamento de ~16 meses sobre 02/08/2026) e Anexo I em **02/08/2028** (adiamento de 12 meses
    sobre 02/08/2027). Confiabilidade: média-alta — é análise jurídica de terceiro, não o Jornal
    Oficial; mas dá número de regulamento e datas conferíveis, e as duas datas batem de forma
    independente com o banner da fonte 1, que as atribui ao Artigo 113(c). **Esta fonte entrou
    tarde na rodada e mudou o mapa:** ela invalidou a âncora temporal de dez efeitos. Ver o item 1
    da seção 8.

18. **TradeRank, "5 Alpha Arena Alternatives for AI Trading (2026)".**
    `https://www.traderank.ai/blog/alpha-arena-alternatives-2026`
    Sustenta: o estado da Nof1 Alpha Arena em 2026 — em **06/08/2026** o placar público mais recente
    ainda era o da Temporada 1.5, encerrada em dezembro de 2025, com o site indicando que **os
    modelos não estavam mais em operação**, e sem elenco, tabela ou placar de uma Temporada 2
    visíveis. Confiabilidade: média — é página de concorrente, portanto interessada em relativizar
    a Nof1, e é comparação comercial, não medida. Usei-a apenas para o fato negativo (ausência de
    temporada nova), que é o tipo de alegação que um interessado não tem incentivo para inventar
    contra si; e o próprio texto registra a limitação de ter recebido HTTP 403 numa reconferência
    em 27/08/2026, pedindo que o leitor confira direto. **É por causa desta fonte que e13 caiu de
    sinal médio para fraco.** Tentei abrir o site da própria Nof1 para conferir em primeira mão e
    recebi HTTP 429; o endereço está na seção 12.4 e deliberadamente não aqui, porque fonte que não
    abriu não entra na seção 11 — e um endereço que não responde apareceria como link quebrado no
    verificador da disciplina.

19. **Cloud Security Alliance, nota de pesquisa "EU AI Act's High-Risk Deadline: Deferred, Not
    Cancelled".**
    `https://labs.cloudsecurityalliance.org/research/csa-research-note-eu-ai-act-high-risk-deadline-omnibus-20260/`
    Sustenta: o **motivo declarado** do adiamento — a Comissão avaliou que "nem a indústria nem os
    organismos de normalização harmonizada — CEN e CENELEC — estariam prontos a tempo, e que a
    infraestrutura de avaliação de conformidade que a Lei pressupõe existir ainda não havia
    amadurecido". Confiabilidade: média-alta — é nota de pesquisa de associação setorial, com a
    justificativa atribuída à fundamentação da Comissão de novembro de 2025; a mesma leitura
    aparece, em outras palavras, na análise da Gibson Dunn que também abri ("a infraestrutura
    regulatória necessária para tornar essas obrigações operáveis não se materializou no prazo").
    É a fonte do argumento mais importante da seção 3: o regulador declarando por escrito que a
    infraestrutura de confiança deste mapa ainda não existe.

## 12. Anexo — o levantamento bruto

### 12.1 Como esta rodada foi executada

Modo MAPA, não interativo, conforme o `briefing:` do pedido. Skill `futurizacao-giordano` v1.2.0.
Busca na web ativa: 17 buscas (português e inglês) e 30 tentativas de abertura de página, das
quais 25 abriram, 4 retornaram 403 e 1 retornou 429.

**Esta rodada foi executada em duas sessões, e a emenda importa para quem for auditá-la.** A
primeira sessão montou o mapa inteiro e foi interrompida por limite de sessão no momento em que
aplicava a maior correção da rodada: a descoberta de que o prazo do Anexo III do AI Act havia sido
movido de 02/08/2026 para 02/12/2027 pelo Digital Omnibus. Ela alcançou reescrever as seções 3, 4,
5 e 7 com a data nova — e parou antes de inscrever as fontes correspondentes na seção 11, de
corrigir o resumo da seção 1, que ficou com a data velha, e de registrar o erro na seção 8. A
segunda sessão **não confiou nas citações órfãs**: reabriu por conta própria as fontes 17, 18 e 19,
reconferiu na origem os três preprints do arXiv (identificador, título, autoria, data e números) e
só então fechou. Dessa reconferência saíram duas correções de fato na fonte 10 — o título tem
"Systematically", que faltava, e a data de submissão é 12/05/2026, não 14/05. Registro isto aqui
porque é, ele próprio, um caso do tema deste mapa: **o que se conseguiu auditar foi o traço, não a
entrega** — o documento a meio caminho parecia íntegro e passava no verificador.

A entrevista do §0 foi substituída pelo bloco `briefing:`
completo, o que, pela regra da própria skill (a nota de 10/09 sobre rebaixamento), **não** rebaixa
a confiança; o que o briefing não cobria está declarado como premissa assumida na seção 2.

Existe uma rodada irmã deste mesmo tema com horizonte 2036, na pasta `giordano-h2036/`. **Não a
abri**, deliberadamente: dois mapas independentes do mesmo tema em horizontes diferentes só são
comparáveis se forem produzidos sem contaminação. Se houver convergência entre os dois, ela vale
como sinal; se eu tivesse lido, não valeria nada.

### 12.2 Premissas assumidas, por não terem sido cobertas pelo briefing

- **Público.** "Quem projeta mídia e interação" foi lido como incluindo estúdio, agência,
  redação, produto digital e design de interação — não incluindo pesquisa acadêmica nem
  engenharia de plataforma. Isso decidiu, por exemplo, que o efeito sobre convenções de span
  entrasse pela porta de "quem escolhe ferramenta" (e5.1), e não pela de "quem escreve a
  especificação".
- **Recorte.** Global, com uma nota sobre o Brasil na seção 3 e um wildcard brasileiro (W1). Não
  tratei a China nem a Índia, onde a regulação de IA segue outra lógica e onde eu não tinha fonte
  aberta.
- **"O que já é comum em produto de massa" está descartado.** Apliquei isso literalmente, e o
  efeito mais importante dessa régua foi recusar "memória entre sessões" como raiz — ela está em
  quatro produtos de massa. Sem essa régua, R2 teria sido escrita de forma muito mais fraca.
- **Profundidade em três ordens**, conforme pedido, e não mais — mesmo onde a cadeia continuava.

### 12.3 Efeitos cortados no §6, com o motivo

1. **"Reguladores criam uma categoria jurídica de sistema avaliativo."** Era filho de e11. Cortado:
   é um dos quatro efeitos que o §3 da skill proíbe nominalmente; serve igualmente bem para
   qualquer um dos 19 temas da disciplina; não nomeia regulador nem mecanismo. Se alguém quiser
   recuperá-lo, terá de nomear o órgão e dizer por que ele agiria.
2. **"A formação em direção de arte se reorganiza em torno de auditoria de processo."** Era filho
   de e2. Mesma razão: "cursos reorganizam o currículo" sem nome de curso, sem mecanismo, sem
   prazo defensável. Substituído por e2.2 (deslocamento do crédito de autoria), que tem ator.
3. **"Empresas de mídia contratam um Chief AI Officer."** Esboçado sob R3. Cortado: cargo genérico,
   nenhuma ligação causal com a corrupção da régua, e o efeito ocorreria por qualquer outra razão.
4. **"O custo de energia da telemetria de agentes vira restrição ambiental."** Cortado por falta de
   fonte: não achei nenhum número ligando volume de telemetria de agente a consumo energético.
   Está registrado como a categoria ecológica vazia do STEEP, na seção 5, em vez de ser inventado.
5. **"Surge um seguro de responsabilidade por decisão de agente, precificado pela qualidade do
   traço."** Efeito de segunda ordem sob e1.2, plausível e com mecanismo (a seguradora precifica o
   que consegue auditar). Cortado por outra razão: não encontrei nenhum artefato — nem produto, nem
   piloto, nem menção de resseguradora — e derivar um mercado inteiro de uma inferência pura teria
   ficado com sinal fraco e confiança baixa sem nada por baixo. **É o corte de que mais me
   arrependo, e o registro fica aqui para que uma rodada futura o retome se achar o artefato.**
6. **"A avaliação vira requisito de contratação pública no Brasil."** Cortado porque dependia
   inteiramente da Resolução CNJ 615/2025, que não consegui abrir. Virou parte do wildcard W1, com
   o aviso.

### 12.4 Páginas que não abriram

- `https://atos.cnj.jus.br/atos/detalhar/6001` — HTTP 403.
- `https://atos.cnj.jus.br/files/original1555302025031467d4517244566.pdf` — HTTP 403.
- `https://www.cnj.jus.br/cnj-aprova-resolucao-regulamentando-o-uso-da-ia-no-poder-judiciario/` —
  HTTP 403.
- `https://rm.coe.int/resolucao-cnj-615-ia/1680b51b65` (espelho no Conselho da Europa) — HTTP 403.

- `https://nof1.ai/` — HTTP 429. É a fonte primária do estado da Alpha Arena, e eu queria conferir
  em primeira mão se havia Temporada 2. Não consegui, e por isso a afirmação está apoiada na fonte
  18, que é página de concorrente — declarado no verbete dela. **Uma sessão futura deveria abrir
  `https://nof1.ai/` diretamente antes de manter o sinal de e13 em "fraco".**

Quatro tentativas, quatro recusas, todas sobre a mesma resolução brasileira. Consequência prática:
**a parte brasileira deste mapa é a mais fraca**, e está declarada como tal na seção 3 e no
wildcard W1. Uma sessão futura com acesso a esses documentos deveria refazer a nota sobre o Brasil
e reavaliar se o wildcard W1 não é, na verdade, um efeito de primeira ordem.

Além dessas, uma página abriu mas serviu de menos do que eu esperava: a vaga "AI Eval / Testing
(Eval Engineer)" da NTT DATA, publicada em 12/07/2026 — a página carregou, mas exibia apenas
"esta posição foi preenchida", sem os requisitos do cargo. Ela está citada na prosa da seção 5 e no
item 6 da seção 8, e **deliberadamente não entrou na seção 11**: o endereço contém parênteses, que
o verificador da disciplina trunca ao extrair URLs (a classe de caracteres exclui `)`), e um link
truncado apareceria como fonte quebrada. Registro aqui para que não pareça omissão.

### 12.5 Buscas que não deram em nada útil

- **"agentes de IA em produção mídia design ferramentas criativas 2026 avaliação qualidade
  subjetiva"** (português). Devolveu listas de ferramentas generativas para designers e agências —
  Midjourney, DALL·E, Stable Diffusion — e nenhuma discussão de avaliação, traço ou memória. É um
  achado por ausência, e vale registrar: **o discurso em português sobre IA em mídia, em 2026,
  ainda é sobre qual ferramenta usar, não sobre como saber se o que ela produziu presta.** Se esse
  discurso mudar, é sinal precoce de e12.2.
- **"ISO/IEC 42001 certifications number 2026"**. Queria o número de certificações emitidas, para
  ter uma medida de adoção da governança de IA. Não existe número público consolidado; os
  resultados são páginas comerciais de organismos certificadores. Por isso a ISO 42001 aparece
  apenas em `tecnologias_citadas` e não sustenta efeito.
- **"AI assurance market size"**. Devolveu relatórios de mercado pagos, com projeções de CAGR que
  não consigo verificar e cuja metodologia não é pública. Descartados inteiros. O único dado que
  retive dessa linha, e mesmo assim de segunda mão, é a existência da credencial AAIA da ISACA
  (maio de 2025) — que está no texto como artefato nomeado, não como medida.

### 12.5.1 O que ficou de fora por escolha de recorte

O tema, como a disciplina o descreveu, trouxe uma lista longa de projetos da varredura da turma:
`projectmem`, `deja-vu`, `memtrace`, `lean-ctx`, `sigmap`, `cased/kit`, `codegraph-rust`,
`airweave`, `cocoindex`, `Hindsight`, `vibe-log`, `agent-qa`, `MathEval`, `Rath`, `Parseable`,
`Agnost`, `agent-inspect`. **Não verifiquei nenhum deles individualmente**, por uma razão de
método: são dezessete artefatos, a maioria em estágio de repositório, e abrir cada um consumiria a
rodada inteira para produzir uma lista — que é levantamento de estado da arte, não mapa de futuro.
O que fiz foi tratá-los como *classe*: a existência de dezessete projetos independentes atacando o
mesmo problema em 2026 é, ela própria, o sinal, e ela está refletida na seção 3 sem que cada nome
seja citado como fonte. Dois deles influenciaram o mapa pela função e não pelo código: `projectmem`
(avisar o agente antes que repita abordagem que falhou) está por trás de e2.1, e `agent-inspect`
(métrica em tempo real de simulação) está por trás do desenho do experimento.

Uma rodada adversarial contra um mapa de aluno que cite esses projetos deveria abri-los; esta, que
é um mapa independente, não precisava.

### 12.6 Caminhos abandonados no meio

- **Uma quarta raiz: "o juiz automático vira a instituição que decide o que é bom."** Cheguei a
  esboçá-la, com os dados de viés de autopreferência e os mais de 50% de erro em benchmarks de
  viés. Abandonei por duas razões. A primeira: não abri o estudo da RAND, só o resumo de busca, e
  uma raiz inteira não pode nascer de fonte não lida. A segunda, mais importante: LLM-como-juiz é
  **mecanismo dentro de R3**, não ruptura própria — ele explica *por que* a avaliação automática
  falha, e a ruptura é a corrupção da régua, não a fraqueza do juiz. Deixo registrado que é a
  candidata mais forte a virar raiz numa rodada futura, se alguém abrir os papers de
  meta-avaliação.
- **Organizar o mapa por camada (memória / observabilidade / avaliação) em vez de por ruptura.**
  Tentei, e ficou descritivo: virou um inventário de ferramentas com efeitos pendurados, e os
  efeitos ficaram todos parecidos entre si. A reorganização por ruptura — o traço, a memória presa,
  a régua corrompida — foi o que fez aparecerem as convergências da seção 5. Registro porque é uma
  lição de método reutilizável: **a roda organiza-se pelo que rompe, não pelo que existe.**
- **Um efeito sobre acessibilidade.** Traço de agente permitiria, em princípio, explicar a uma
  pessoa por que a interface decidiu o que decidiu — o que é uma questão real de mídia e interação.
  Não encontrei mecanismo que ligasse o traço de produção ao traço de uso em tempo de execução;
  são objetos diferentes, com donos diferentes. Abandonado por falta de mecanismo, que é a regra
  do §3.2.

### 12.7 Conferência do formato

Saída integral de
`python3 /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/futurizacao-giordano/references/verificar.py <arquivo> --links`,
colada sem edição, na conferência final de 12/09/2026:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 3 (frontmatter diz 3)
efeitos ordem 1: 14 (frontmatter diz 14)
efeitos ordem 2: 22 (frontmatter diz 22)
efeitos ordem 3: 14 (frontmatter diz 14)
prazo > horizonte (2041) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 1 [('e8.1.1', 2044)]
confiança ordem 1: alta 1 · media 11 · baixa 2
confiança ordem 2: alta 0 · media 15 · baixa 7
confiança ordem 3: alta 0 · media 3 · baixa 11
links da seção 11: 19/19 respondem (frontmatter diz fontes: 19)
RESULTADO: ok
```

Leitura da saída, item a item, para que o "ok" não passe como palavra:

- **18 de 18 campos** de frontmatter e **12 de 12** títulos literais — o documento é processável
  pelo pipeline da disciplina.
- **3 raízes, 14 / 22 / 14 efeitos**, batendo com o frontmatter. Não corrigi o texto para bater com
  o frontmatter; corrigi o frontmatter depois de contar o texto, conforme o §9 da skill.
- **Nenhum efeito de 1ª ou 2ª ordem além de 2041.** Todos os efeitos que o público do mapa
  precisaria ver estão dentro da janela.
- **Um efeito de 3ª ordem além do horizonte: e8.1.1, em 2044.** Declarado, aqui e na seção 7: a
  memória pessoal que atravessa empregadores depende de portabilidade corporativa já resolvida, e
  esta não começou. Foi empurrado de 2040 para 2044 pela bateria do §6, com a classe de referência
  do aprisionamento de nuvem (vinte anos) e do art. 20 do RGPD (oito anos sem efeito prático). **É
  o único efeito do mapa que o leitor deve ler como "fora da janela", e não como previsão para
  2041.**
- **Calibração:** 1 alta / 11 médias / 2 baixas na primeira ordem; 0 / 15 / 7 na segunda; 0 / 3 /
  11 na terceira. A confiança cai monotonicamente com a ordem, que é o que o §3.6 exige. A única
  "alta" do mapa inteiro é e5, ancorada num evento datado e documentado.
- **19 de 19 links respondem**, e o número bate com `fontes: 19`. Todos foram abertos e lidos. As
  quatro páginas que retornaram 403 e a que retornou 429 estão na seção 12.4 e não sustentam nada.

**Duas observações sobre esta conferência, que valem mais que o "ok".**

A primeira: **uma versão anterior deste documento também imprimia `RESULTADO: ok`, e estava
errada.** Ela declarava `fontes: 18` com dezesseis verbetes na seção 11, e o corpo citava `[17]` e
`[18]`, que não existiam. O verificador não pegou porque ele compara os links que *encontra* na
seção 11 com os que *respondem* — nunca com o número do frontmatter nem com as marcas de citação
do corpo. Ou seja: o script confere a integridade do que está escrito, não a correspondência entre
o que o texto alega e o que a lista entrega. **Quem for reusar este verificador deveria acrescentar
essas duas checagens**, e o achado está registrado aqui em vez de virar correção silenciosa.

A segunda: na primeira execução desta conferência o resultado foi `19/20 respondem — 1 problema`,
porque eu havia escrito o endereço da Nof1 dentro do verbete 18 para explicar que ele não abria. O
endereço de uma página que não abre não pode estar na seção 11, nem como ilustração: o extrator de
URLs não distingue citação de menção. Movido para 12.4, onde já estavam os 403. É a mesma armadilha
que a nota sobre a vaga da NTT DATA descreve, e eu caí nela de novo, uma seção adiante.

