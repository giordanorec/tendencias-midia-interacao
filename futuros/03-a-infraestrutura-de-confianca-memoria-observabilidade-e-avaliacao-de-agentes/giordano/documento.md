---
tema: "A infraestrutura de confiança: memória, observabilidade e avaliação de agentes"
slug: a-infraestrutura-de-confianca-memoria-observabilidade-e-avaliacao-de-agentes
autor_login: grec
zona_de_interesse: Agentes
data: 2026-09-10
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 21
efeitos_ordem_2: 26
efeitos_ordem_3: 16
tecnologias_citadas: [OpenTelemetry GenAI semantic conventions, Langfuse, LangSmith, Braintrust, Arize Phoenix, MLflow, ClickHouse, Mem0, Zep, Letta, LoCoMo, LongMemEval, LongMemEval-V2, BEAM, SWE-bench Verified, SWE-bench Pro, tau2-bench, tau3-bench, GAIA2, Meta Agents Research Environments, HAL Holistic Agent Leaderboard, DFAH, agrepl, LLM-as-a-judge, Model Context Protocol, OWASP Top 10 for Agentic Applications, ASI06, prEN 18229-1, ISO/IEC DIS 24970, ISACA AAIA, Nof1 Alpha Arena, Claude memory, Chroma context rot]
fontes: 29
confianca: media
experimento: "Caixa-preta — gravador de trajetória com replay determinístico, dois juízes-máquina de famílias diferentes e um painel de discordância"
skill_usada: futurizacao-giordano
publico_ok: true
---

## 1. Resumo

Quando a máquina fabrica o produto, avaliar o produto deixa de medir a máquina — e a pergunta
passa de "o que foi entregue?" para "por que isso está certo?". Responder exige ver o caminho:
cada chamada, cada ferramenta, cada tentativa que falhou. Ao mesmo tempo, o agente que lembra
entre sessões para de ser ferramenta e vira algo que acumula. Este mapa trata as duas coisas
como faces da mesma infraestrutura e deriva quatro rupturas: a memória que atravessa a sessão,
o objeto avaliado que migra da saída para a trajetória, o registro de execução que vira prova
conservada, e o avaliador que é uma máquina do mesmo tipo da avaliada. A âncora de hoje é
dura: em fevereiro de 2026 a OpenAI parou de reportar o SWE-bench Verified; um estudo com
541 mil julgamentos mostrou que juízes-máquina são consistentes sem serem válidos (a
concordância bruta excede o kappa corrigido por acaso em 33,8 a 41,2 pontos); a OWASP criou
em dezembro de 2025 uma categoria só para envenenamento de memória; e o artigo 12 do AI Act
europeu transforma log em obrigação com data. A aposta central é que a confiança deixa de ser
uma propriedade do resultado e vira uma propriedade do registro — e quem projeta mídia e
interação passa a desenhar, na tela, o que o sistema lembra, o que ele fez e quem verificou.
Quem perde primeiro é quem trabalha com segredo de terceiro e não pode deixar o agente
acumular.

## 2. O tema

O tema é a camada que permite **confiar num sistema que ninguém consegue ler por inteiro**.
Ela tem duas metades que a literatura trata separadamente e que a prática já juntou.

A primeira é a **memória**: o estado que sobrevive ao fim da conversa. Preferências, decisões,
erros já cometidos, procedimentos aprendidos. Em 2026 isso deixou de ser recurso de pesquisa e
virou peça de produto em todos os assistentes grandes, e virou também uma indústria de
bibliotecas — Mem0, Zep, Letta e uma dezena de concorrentes — com benchmarks próprios e
disputas públicas sobre quem mede o quê.

A segunda é a **trilha**: o registro do que o agente fez para chegar onde chegou. Chamada,
ferramenta, argumento, resposta, custo, tentativa abandonada. É daqui que saem tanto a
depuração quanto a avaliação, porque num sistema que roda vinte a cem passos por tarefa, a
saída final é uma amostra pequena demais do comportamento.

As duas metades se encontram numa pergunta só: **o que o sistema sabe e como sei que ele fez
certo.** Memória é a entrada que ninguém escreveu deliberadamente; trilha é a saída que
ninguém lê por inteiro. Uma governa o que entra no contexto sem passar pelo usuário; a outra
governa o que sai do sistema sem passar por um revisor. As duas são, no fundo, o mesmo
problema de **procedência**: de onde veio isto que está influenciando a decisão, e quem
responde por isso.

**Onde encosta em mídia e interação.** Em quatro lugares concretos, e nenhum deles é
metafórico. Primeiro, a interface de memória: "o que você sabe sobre mim" já é uma tela
editável em produto de massa, e é uma das telas mais difíceis de projetar que existem, porque
ela mostra ao usuário um retrato dele feito por outro. Segundo, a interface de trajetória: a
conversa linear é uma representação ruim de um processo com ramificação, e ferramentas
agênticas estão inventando, uma a uma, como mostrar vinte passos sem exigir que se leia vinte
passos. Terceiro, a interface de justificativa: se uma decisão foi automatizada e tem de ser
consultável, alguém desenha esse componente. Quarto, a economia da atenção do revisor: quando
o agente produz mais do que cabe ser revisado, o design decide o que sobe à superfície — e
essa decisão é editorial antes de ser técnica.

**Por que merece mapa de futuro, e não levantamento de estado da arte.** Por três razões.
Primeiro, porque o problema central não é de engenharia e sim de **fundamento**: não existe
teste que decida, no caso geral, se uma trajetória aberta foi "boa", e a resposta prática —
outra máquina julga — acabou de ser medida e reprovada como âncora de validade. Um
levantamento descreveria as ferramentas atuais e venceria junto com elas; a vida útil
observada de um benchmark de saída nesta área foi de cerca de dois anos e meio. Segundo,
porque as saídas em disputa implicam **arranjos institucionais diferentes**, não graus do
mesmo: um mundo onde a avaliação é mercado, um onde é obrigação legal, e um onde é profissão
credenciada não são o mesmo mundo com intensidades diferentes. Terceiro, porque há um efeito
distributivo que ninguém está medindo: se o sistema que lembra há três anos é melhor que o
novo, a memória vira o ativo — e então a pergunta "a memória é sua ou da plataforma?" deixa de
ser filosófica e vira cláusula de contrato.

## 3. Onde isso está hoje

Âncora feita **com acesso à web em 10/09/2026**, com vinte e três buscas em português e inglês
e **vinte e nove fontes abertas e lidas** (seção 11). Quatro fontes que apareceram na busca
**não abriram** e por isso não sustentam nada aqui: o post da OpenAI sobre abandonar o
SWE-bench Verified (HTTP 403), a matéria do TI Inside sobre a previsão do Gartner para
observabilidade de LLM (HTTP 403), a página de notícias da ANPD (conteúdo carregado por
JavaScript) e a página de recursos da OWASP sobre o Top 10 agêntico (HTTP 404 — o conteúdo foi
obtido pelo anúncio oficial, que abriu). O que elas diziam está registrado na seção 12 como
não verificado.

### 3.1 O que já existe e funciona

**Memória persistente em produto de massa, com separação por projeto.** A memória do Claude
chegou a Team e Enterprise em 11 de setembro de 2025 e a Pro e Max em 23 de outubro de 2025.
Três detalhes de projeto importam mais que o recurso em si: a memória é **opcional**; o usuário
vê e edita o resumo do que o sistema guardou, conversando com ele; e, dentro de projetos, **o
sistema cria memória separada por projeto**, de modo que o planejamento de lançamento não
vaze para o trabalho de cliente. Há ainda um modo anônimo que não grava. Ou seja: a fronteira
de privacidade da memória já é hoje um **parâmetro de interface**, não uma propriedade do
modelo.

**Uma indústria de memória com benchmarks e disputa pública.** O LoCoMo, o LongMemEval e o BEAM
são as três réguas em uso. Os números publicados em 2026 — ZeroMemory 96,1%, Zep 94,7%, Mem0
92,5%, ByteRover 92,2% ou 96,1% conforme a publicação, Dakera 88,2% no LoCoMo; Mem0 94,4%,
ByteRover 92,8% e Zep 71,2% no LongMemEval; Mem0 com 64,1% no BEAM-1M e 48,6% no BEAM-10M —
vêm quase todos de **auto-relato**, e o próprio compilador da lista adverte: "*nenhum desses
números foi gerado usando o mesmo conjunto de modelos, modelo-juiz ou configuração de
recuperação*". A disputa mais explícita é a do Zep contra o artigo do Mem0: o Mem0 reportou
65,99% para o Zep no LoCoMo; o Zep refez o teste e chegou a **75,14% ± 0,17**, alegando três
erros de configuração — papel de usuário atribuído aos dois participantes do diálogo,
timestamps colados na mensagem em vez do campo próprio, e buscas sequenciais em vez de
paralelas (o que inflava a latência p95 de 0,632 s para 0,778 s). O mesmo texto ataca o
LoCoMo em si: conversas curtas demais, falhas de controle de qualidade, atribuição errada de
falante e perguntas ambíguas.

**Observabilidade de LLM como categoria consolidada.** O Langfuse — plataforma aberta sob MIT,
com rastreamento, gestão de prompt, avaliação e datasets — está em 34,4 mil estrelas no GitHub
e informa no próprio README: "*desde janeiro de 2026 fazemos parte da ClickHouse*". Integra
OpenTelemetry, LangChain, SDK da OpenAI e LiteLLM. Do lado fechado, a Braintrust levantou US$
80 milhões em série B em fevereiro de 2026, e a categoria (Langfuse, LangSmith, Braintrust,
Arize, MLflow) já tem comparativos de mercado e guias de compra.

**Convenção semântica própria para GenAI.** As convenções `gen_ai.*` do OpenTelemetry — spans
como `invoke_agent`, `chat` e `execute_tool`, atributos como `gen_ai.request.model` e
`gen_ai.usage.input_tokens` — **saíram do repositório principal** de semantic conventions e
ganharam repositório próprio, `open-telemetry/semantic-conventions-genai`, que cobre spans,
métricas e eventos para clientes GenAI, para o Model Context Protocol e para convenções
específicas de provedor. A página antiga no site do OpenTelemetry hoje é só um aviso de
mudança.

**Envenenamento de memória reconhecido como classe de risco com nome.** A OWASP publicou em **9
de dezembro de 2025** o *Top 10 for Agentic Applications*, assinado por John Sotiropoulos,
Keren Katz e Ron F. Del Rosario, com **ASI06 — Memory & Context Poisoning** em sexto lugar,
exemplificado pelo ataque à memória do Gemini. Em 13 de maio de 2026, Idan Habler (Cisco)
publicou no mesmo canal o caso **MemoryTrap**: um fluxo de trabalho rotineiro de
desenvolvimento no Claude Code permitia injeção persistente que alcançava "*a memória
persistente, a configuração global de hooks e até uma camada de instrução altamente confiável
através do prompt de sistema*".

**Reprodução determinística saindo do laboratório.** O `agrepl` (abril de 2026, Go, binário
estático, MIT) intercepta toda interação externa na camada de transporte via proxy
man-in-the-middle, serializa como traço estruturado e reexecuta em ambiente isolado **sem
rede**. Relata fidelidade de replay F = 1,0 em 250 instâncias sobre cinco cargas de trabalho, e
redução mediana de 98,3% na latência por passo.

**Certificação de auditoria de IA.** A ISACA oferece a **AAIA — Advanced in AI Audit**,
descrita por ela como "*a primeira certificação avançada de auditoria de IA do mundo*", em três
domínios (governança e risco de IA, operações de IA, ferramentas e técnicas de auditoria de
IA). O pré-requisito é revelador: exige CISA ativo, ou CIA/CPA/ACCA/contador registrado atuando
em auditoria ou consultoria de TI. Ou seja, **a porta de entrada do campo é a auditoria
contábil e de TI, não a engenharia de software**.

### 3.2 O que existe e ainda não funciona

**Benchmark de saída para agente.** O SWE-bench Verified é o caso didático. A Epoch AI, que o
opera de forma independente, avalia 484 amostras validadas, estima **5 a 10% de taxa de erro no
próprio conjunto**, exclui 16 amostras por problemas de confiabilidade, remove do contêiner
todo o histórico do git posterior ao issue original para evitar vazamento — e mesmo assim
registra que uma atualização grande de scaffolding e ambientes em **12 de fevereiro de 2026**
(v2.0.0) melhorou significativamente o desempenho dos modelos. Quando a nota sobe porque o
andaime mudou, a nota não está medindo o modelo. A OpenAI parou de reportar o benchmark em
fevereiro de 2026; o post oficial não abriu para esta rodada, então o fato entra aqui apoiado
na leitura secundária e está registrado na seção 12 como não verificado na fonte primária.

**Juiz-máquina como âncora de validade.** O estudo de Justin D. Norman, Michael U. Rivera e D.
Alex Hughes (Berkeley, 17 de junho de 2026) avaliou **21 modelos de nove provedores em três
benchmarks, com cerca de 541 mil julgamentos individuais**. Os resultados:

- a concordância por correspondência exata **excede o κ de Cohen corrigido por acaso em 33,8 a
  41,2 pontos percentuais** no MT-Bench, nos 21 modelos;
- o viés de posição varia de **0,002** (Gemini 2.5 Pro) a **0,192** (Qwen 3 8B);
- confiabilidade teste-reteste entre **0,889 e 0,992** no MT-Bench;
- modelos mudam **até 14 posições** de ranking entre benchmarks diferentes.

O título do trabalho é a conclusão: *confiabilidade sem validade*. "*Alta confiabilidade
teste-reteste frequentemente mascara viés de posição severo.*"

**Memória como sistema.** O levantamento de Wei Zhou e colegas (23 de junho de 2026) pergunta
no título se estamos prontos para um sistema de memória nativo de agentes, e responde que
**não**: as avaliações tratam a memória como caixa-preta, ignorando custo operacional e
compromissos de arquitetura; "*nenhuma arquitetura domina em todos os cenários; a eficácia
depende de quão bem a estrutura da memória se alinha ao gargalo da carga de trabalho*". Um
segundo levantamento, de Pengfei Du (8 de março de 2026), formaliza memória como um laço
escrever–gerenciar–ler e documenta a virada de método: de benchmarks estáticos de recordação
para testes agênticos multissessão.

**Determinismo.** O DFAH (Raffi Khatchadourian, janeiro de 2026, revisto em março) mediu mais
de **4.700 execuções de agente em 7 modelos de 4 provedores** sobre três benchmarks
financeiros, e achou o que mais importa para este mapa: determinismo de decisão e acurácia têm
correlação **desprezível (r = −0,11)**. Modelos compactos (7 a 20 bilhões de parâmetros)
chegaram perto do determinismo perfeito com acurácia de 20 a 42%; modelos de fronteira ficaram
entre 50 e 96% de determinismo com acurácia variável. **Nenhum modelo conseguiu as duas
coisas.**

**Contexto longo como substituto de memória.** O trabalho da Chroma (Kelly Hong, Anton
Troynikov, Jeff Huber, 14 de julho de 2025) testou **18 modelos** isolando o comprimento da
entrada com dificuldade constante, e mostrou degradação contínua — não um precipício — à medida
que o contexto cresce, inclusive o achado contraintuitivo de que os modelos vão **melhor em
palheiros embaralhados do que em palheiros logicamente estruturados**. A leitura de 2026,
porém, complica: com cache de prompt, guardar o histórico inteiro bateu toda estratégia de
sumarização em custo, latência e recordação ao mesmo tempo. Quer dizer: **não está decidido se
"lembrar" é engenharia de memória ou só janela barata.**

**Regulação.** O artigo 12 do AI Act europeu exige que sistemas de alto risco permitam
tecnicamente o registro automático de eventos ao longo de toda a vida do sistema, para
identificar situações de risco, viabilizar monitoramento pós-mercado e permitir que o operador
acompanhe a operação — com exigências mínimas para identificação biométrica (período de cada
uso com data e hora de início e fim, bases de referência consultadas, dados de entrada que
casaram com o resultado, e identificação de quem verificou). **Mas a data é disputada nas
fontes:** a leitura do texto no portal do AI Act indica entrada em vigor em **2 de dezembro de
2027** para sistemas do Anexo III e **2 de agosto de 2028** para os do Anexo I, enquanto a
cobertura especializada de abril de 2026 trata **2 de agosto de 2026** como o prazo das
obrigações do Anexo III, mencionando discussão de adiamento para dezembro de 2027. As duas
leituras estão registradas; o mapa usa a mais conservadora. E **não existe norma técnica
publicada**: há dois rascunhos, prEN 18229-1 (registro e supervisão humana) e ISO/IEC DIS
24970 (registro de sistemas de IA).

### 3.3 Quem constrói

Seis grupos, com incentivos diferentes:

1. **Plataformas de assistente** (Anthropic, OpenAI, Google) — constroem memória como recurso
   de produto e retenção. Incentivo: memória boa e não portátil.
2. **Bibliotecas de memória** (Mem0, Zep, Letta, ByteRover, ZeroMemory) — vendem a camada que a
   plataforma não dá ou que o cliente não quer na plataforma. Incentivo: número alto no
   benchmark, e a régua ainda sendo escrita por elas.
3. **Plataformas de observabilidade e avaliação** (Langfuse/ClickHouse, LangSmith, Braintrust,
   Arize, MLflow) — vendem armazenamento e leitura de traço. Incentivo: mais traço, mais
   avaliação, e — depois da compra do Langfuse — mais integração vertical com banco de dados.
4. **Academia de avaliação** (Princeton/HAL, Berkeley, Sierra com o τ-bench, Meta com o GAIA2)
   — produzem as réguas e, cada vez mais, as críticas às réguas.
5. **Segurança** (OWASP GenAI, Cisco, grupos acadêmicos de envenenamento de memória) — nomeiam
   a classe de risco e empurram controle para dentro do ciclo de vida da memória.
6. **Normalizadores e reguladores** (OpenTelemetry, CEN/CENELEC, ISO/IEC, Comissão Europeia,
   ANPD) — transformam prática em formato e formato em obrigação.

### 3.4 Que número descreve a adoção hoje

Os números disponíveis descrevem mais a pressa do mercado que a adoção da infraestrutura:

- **34,4 mil estrelas** no repositório do Langfuse, sob licença MIT, e aquisição pela
  ClickHouse em janeiro de 2026.
- **US$ 80 milhões** de série B na Braintrust, fevereiro de 2026.
- **541 mil julgamentos** no estudo de confiabilidade de juízes; **21.730 execuções** de agente
  e cerca de **US$ 40 mil** no Holistic Agent Leaderboard, que liberou **2,5 bilhões de tokens**
  de log de chamadas de modelo.
- No levantamento da Voker com empresas da Y Combinator (20 de fevereiro de 2026): **86%** já
  têm agentes em produção, **76%** os expõem diretamente a clientes, **48%** os rodam como
  sistema de fundo — e **89% operam abaixo de dez mil conversas por mês**. **38%** citaram
  avaliação como dificuldade explícita, mesmo já usando LangSmith, Langfuse ou Braintrust. O
  tamanho da amostra não é divulgado, o que rebaixa a confiabilidade desses percentuais.
- O ecossistema do Mem0 declara 21 frameworks integrados e 20 bancos vetoriais suportados; a
  mesma página cita projeção do Gartner de que **40% das aplicações empresariais** estarão
  integradas a agentes específicos até o fim de 2026, ante menos de 5% em 2025 — número de
  terceiro, reproduzido por parte interessada, e por isso não usado como âncora aqui.

**Não achei número confiável** para as duas coisas que mais interessariam: quantos sistemas em
produção usam memória persistente, e que fração dos times tem avaliação automática bloqueando
o deploy. Registro a ausência em vez de estimar.

### 3.5 Nota sobre o Brasil

O marco legal está **parado**. O PL 2338/2023, de Rodrigo Pacheco, foi aprovado pelo Plenário
do Senado em 10 de dezembro de 2024 depois de 244 emendas, e a última movimentação registrada
na página oficial é de **17 de março de 2025**: remetido à Câmara dos Deputados pelo Ofício SF
nº 235. Um ano e meio depois, a tramitação no Senado consta encerrada e a página não registra
avanço na Câmara.

Isso tem uma consequência de mapa: no Brasil, **o vetor mais provável de obrigação de registro
não é a lei de IA, é a LGPD** — que já está em vigor, já tem autoridade com poder sancionador,
e já alcança memória de agente enquanto dado pessoal, com direito de acesso, correção,
eliminação e portabilidade. A leitura secundária indica que a ANPD incluiu IA e tecnologias
emergentes no seu mapa de temas prioritários para 2026-2027 e programou fiscalizações
específicas; **não consegui confirmar isso na fonte primária** (a página de notícias da ANPD
não carrega sem JavaScript), então isso entra como alegação não verificada, na seção 12.

Do lado do mercado, a leitura disponível em português — de baixa confiabilidade, toda
secundária — descreve 2026 como o ano em que empresas brasileiras deixam de construir agentes
e passam a operá-los, com observabilidade citada como requisito e não como refinamento. Não
achei número brasileiro auditável de adoção de observabilidade de LLM.

## 4. As disrupções-raiz

### 4.0 Candidatos recusados como raiz

A régua desta disciplina descarta o que já é comum em produto de massa. Aplicando-a:

**Recusado: logs, métricas e rastreamento distribuído de aplicação.** Adoção em maioria há
anos; o OpenTelemetry é infraestrutura corrente. Tratado como contexto na seção 3.

**Recusado: teste automatizado e integração contínua.** Maduro desde a década passada. Entra
como o padrão que o novo objeto (trajetória) não consegue herdar.

**Recusado: recuperação aumentada por busca (RAG) e banco vetorial.** Adoção em maioria desde
2024. É componente da memória, não ruptura.

**Recusado: "assistente com memória" como recurso de produto.** Está em produto de massa desde
2024-2025 em todos os grandes. O que entra como raiz não é o recurso, é o **estado que
atravessa sessão, projeto, ferramenta e fornecedor** — que é outra coisa e ainda não é comum.

**Recusado: cache de prompt e redução de token.** Faz o mesmo, mais barato: melhoria
sustentadora clássica. Aparece no mapa como o mecanismo que pode **matar** a raiz A (§7.1).

**Recusado: avaliação com consequência material (Nof1 Alpha Arena).** Alto valor de sinal,
baixa base instalada: seis modelos, US$ 10 mil cada, uma temporada em 2025 e uma extensão, e o
próprio site indicando em 2026 que os modelos não estão mais rodando. É **sinal fraco** (§6),
não raiz.

### 4.1 Raiz A — A memória atravessa a sessão: o agente passa a acumular estado que ninguém escreveu deliberadamente

**O que rompe.** Rompe três coisas ao mesmo tempo. Rompe a **sessão como unidade de
privacidade**: até aqui, fechar a conversa era o gesto de apagar; agora não é. Rompe o
**software como função**: o mesmo pedido, feito por duas pessoas ou em dois meses, produz
respostas diferentes por causa de estado que nenhuma delas escreveu. E rompe a **reversibilidade
da escolha de fornecedor**: trocar de assistente deixa de ser trocar de ferramenta e passa a
ser perder acúmulo.

**Por que agora, e não há cinco anos.** Três pré-condições apareceram juntas. Primeiro, o
contexto ficou **caro e degradante** — a medição da Chroma em 18 modelos mostrou queda contínua
de qualidade com o comprimento da entrada, o que torna "empurrar tudo para dentro do prompt"
uma resposta ruim. Segundo, a memória virou **produto de massa com controles**, com separação
por projeto e edição pelo usuário, o que criou expectativa social sobre o que o sistema deve
lembrar. Terceiro, a memória ganhou **camada de ataque com nome**: ASI06 na OWASP em dezembro
de 2025, e um caso publicado contra uma ferramenta de programação amplamente usada em maio de
2026. Nenhuma das três existia em 2021.

**Onde está na difusão.** **Adoção precoce.** Está em produto de massa como recurso, mas a
prática que define a raiz — memória que atravessa ferramenta e fornecedor, com governança de
ciclo de vida — está em nicho.

**O que ainda falta acontecer.** (1) Exportação e importação programáveis: hoje a migração é
copiar e colar texto, sem API. (2) Governança do ciclo de vida — o levantamento de segurança de
memória de longo prazo identifica seis fases (escrever, armazenar, recuperar, executar,
compartilhar e propagar, esquecer e reverter) e quatro objetivos (integridade,
confidencialidade, disponibilidade, governança), e defende que segurança "*não pode ser
acrescentada no momento da recuperação ou da execução: tem de estar ancorada em procedência no
momento da escrita, versionamento e retenção sensível a política*". (3) Prova de esquecimento:
um jeito de demonstrar que um item saiu. (4) Uma resposta à contra-hipótese: que cache barato
torne a memória desnecessária.

**Quem bloqueia.** As plataformas de assistente. Memória valiosa e não portátil é retenção; o
incentivo para padronizar exportação é negativo. O efeito disso está em `e3` e `e3.1`.

### 4.2 Raiz B — O objeto avaliado deixa de ser a saída e passa a ser o caminho

**O que rompe.** Rompe o **teste como contrato de entrada e saída**, que é a base de todo o
aparato de qualidade de software desde os anos 1990. Rompe o **benchmark público como moeda de
comparação** — se a nota muda 12 pontos conforme o andaime, o número não pertence ao modelo. E
rompe a **divisão de trabalho do code review**: revisar o que foi entregue deixa de ser
suficiente quando o que foi entregue é uma amostra de um processo de cem passos.

**Por que agora, e não há cinco anos.** Porque só agora a tarefa virou longa o bastante para
que o caminho carregue a informação. Em 2021 a saída *era* o comportamento: um prompt, uma
resposta. Em 2026, o Holistic Agent Leaderboard rodou **21.730 execuções** em 9 modelos e 9
benchmarks a cerca de US$ 40 mil, publicou **2,5 bilhões de tokens** de log — e o que encontrou
só aparecia no log: agentes **procurando o benchmark no HuggingFace em vez de resolver a
tarefa**, e uso indevido de cartão de crédito em cenários de reserva de voo. Nenhum desses
comportamentos aparece na taxa de acerto. E porque o benchmark de saída deu sinais claros de
fim de vida útil: taxa de erro estimada em 5 a 10% no conjunto, exclusões por falha de
ambiente, e ganho de desempenho vindo de atualização de scaffolding.

**Onde está na difusão.** **Produto de nicho migrando para adoção precoce.** Todas as
plataformas de observabilidade já mostram traço; o que é nicho é *avaliar* o traço como objeto,
com critério.

**O que ainda falta acontecer.** (1) Uma noção compartilhada de trajetória aceitável — hoje
cada equipe inventa a sua. (2) Anotação barata: ler um traço de cem passos custa caro em
atenção humana. (3) Formato comum, que está começando pelo OpenTelemetry GenAI. (4) Métricas
que sobrevivam à variância: o trabalho de confiabilidade de agentes (Rabanser, Kapoor, Kirgis,
Liu, Utpala e Narayanan, fevereiro de 2026, aceito no ICML 2026) propõe **doze métricas em
quatro dimensões** — consistência, robustez, previsibilidade e segurança — e conclui, avaliando
15 modelos em dois benchmarks, que "*ganhos recentes de capacidade produziram apenas pequenas
melhorias em confiabilidade*".

**Quem bloqueia.** Quem vende pelo número de benchmark. Publicar trajetória é publicar o
andaime, e o andaime é onde está boa parte da vantagem competitiva. O efeito está em `e7.2` e
`e15`.

### 4.3 Raiz C — O registro da execução vira prova: log deixa de ser telemetria descartável e vira evidência conservada

**O que rompe.** Rompe a **economia da observabilidade**: o modelo corrente é amostrar,
comprimir e reter por duas semanas a um mês, porque se cobra por span ou por gigabyte e uma
carga completa de prompt e resposta ocupa quilobytes por span. Um registro que serve de prova
não pode ser amostrado nem expirar. Rompe a **separação entre engenharia e conformidade**: o
traço passa a ter dois donos com requisitos incompatíveis. E rompe a **presunção de que dá para
apagar**: conservar por obrigação e apagar por direito recaem sobre o mesmo registro.

**Por que agora, e não há cinco anos.** Porque a obrigação ganhou texto e data. O artigo 12
exige registro **automático** — documentação manual não satisfaz — ao longo de **toda a vida**
do sistema, com penalidade de até 15 milhões de euros ou 3% do faturamento mundial. Porque o
formato começou a existir: as convenções `gen_ai.*` ganharam repositório próprio em junho de
2026, com cadência de release separada do núcleo. E porque a norma técnica está sendo escrita
agora: prEN 18229-1 e ISO/IEC DIS 24970. Em 2021 não havia nem obrigação, nem formato, nem
norma.

**Onde está na difusão.** **Demo pública migrando para produto de nicho.** O formato existe e é
experimental; a obrigação existe e ainda não é exigível; a prática de conservar traço íntegro
por anos é rara fora de serviços financeiros.

**O que ainda falta acontecer.** (1) A norma técnica ser publicada — sem ela, "log apropriado
ao propósito" é indeterminado. (2) A decisão sobre inviolabilidade: o artigo 12 não exige
literalmente log à prova de adulteração, mas alteração silenciosa destrói o valor probatório,
e a leitura do setor já fala em assinatura encadeada — "*mude uma entrada e a cadeia quebra
visivelmente*". (3) Um formato de exportação que sobreviva à troca de fornecedor. (4) A
colisão com o direito ao apagamento ser arbitrada por alguém.

**Quem bloqueia.** Os fornecedores de assistente, que não querem expor prompt de sistema,
conjunto de ferramentas e custo interno; e as áreas de infraestrutura, para quem conservar tudo
é linha de orçamento. O efeito está em `e15` e `e10`.

### 4.4 Raiz D — O avaliador é uma máquina, e do mesmo tipo da que é avaliada

**O que rompe.** Rompe a **independência entre medido e medidor**, que é o fundamento silencioso
de qualquer medida. Rompe a **comparabilidade**: dois sistemas julgados por juízes diferentes
não estão na mesma escala, e a evidência de 2026 mostra que modelos mudam até 14 posições de
ranking entre benchmarks. E rompe a **autoridade do número**: quando a concordância bruta
excede o kappa corrigido por acaso em 33,8 a 41,2 pontos, o número que se publica está medindo,
em boa parte, o acaso.

**Por que agora, e não há cinco anos.** Porque o volume tornou o humano inviável — e porque
agora existe medição do juiz. Até 2024 o LLM-as-judge era prática sem literatura de validação;
em junho de 2026 há um estudo com 21 modelos, três benchmarks e 541 mil julgamentos que separa
**confiabilidade** de **validade** e mostra que a primeira mascara a ausência da segunda. Essa
separação é o que transforma uma prática em ruptura: antes, o juiz era só uma conveniência;
agora ele é um problema epistemológico documentado que alguém vai ter de resolver.

**Onde está na difusão.** **Adoção precoce.** O juiz-máquina é padrão em times que fazem
avaliação, mas a maior parte dos times ainda revisa à mão, e a prática de *avaliar o juiz* é de
nicho.

**O que ainda falta acontecer.** (1) Métrica corrigida por acaso virar o padrão de reporte, no
lugar da correspondência exata. (2) Independência de família: juiz de fornecedor diferente do
avaliado. (3) Calibração humana permanente, como conjunto pequeno e caro. (4) Alguém arbitrar
quem certifica o juiz — hoje a única credencial formal de auditoria de IA tem porta de entrada
contábil.

**Quem bloqueia.** Quem opera o juiz. Definir a régua num mercado é poder, e há incentivo em
manter a régua própria e não corrigida por acaso. O efeito está em `e17.1.1`.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A memória atravessa a sessão e o agente passa a acumular estado que ninguém escreveu deliberadamente
    efeitos:
      - id: e1
        ordem: 1
        efeito: "A fronteira da memória vira decisão de projeto de produto, e não de engenharia"
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "Quem projeta interface passa a desenhar a tela do que o sistema sabe sobre você, editável em linguagem natural"
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "A edição da memória vira ponto de atrito, e as pessoas passam a mentir ao agente para corrigir o retrato que ele guardou"
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "Equipes que compartilham um agente descobrem vazamento lateral, quando o que uma pessoa contou reaparece na resposta a outra"
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Contrato de trabalho passa a tratar a memória do agente corporativo como ativo da empresa e a exigir higienização na saída do funcionário"
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "A memória entra no orçamento de segurança de produto como superfície de ataque com nome próprio"
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Aparece a função de curadoria de memória, humana ou automatizada, que revisa o que entrou no armazenamento antes de ele influenciar decisão"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "O ataque passa a ser escrito para passar no curador, e não para enganar o agente"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "Fornecedores passam a vender memória com procedência, em que cada item guarda de onde veio e que política o escreveu"
            sinal: medio
            prazo: 2029
            confianca: baixa
      - id: e3
        ordem: 1
        efeito: "Trocar de assistente passa a ter custo de memória, e o custo é assimétrico porque quem usou mais perde mais"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "Surge uma camada de memória fora do assistente, lida por vários, e a disputa comercial passa a ser sobre quem controla essa camada"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "O modelo vira o componente barato e substituível do sistema, e a memória vira o ativo que se compra numa aquisição"
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "Empresas reguladas desligam a memória persistente para dado pessoal por não conseguirem provar apagamento, e voltam ao agente sem estado"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "O apagamento verificável, com prova de que um item saiu da memória, entra como cláusula de contrato de fornecimento"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: "Quem trabalha com segredo de terceiro fica sem poder usar a camada que mais melhora o agente"
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "Aparecem agentes de nicho que vendem o não acúmulo como característica principal, e não como limitação"
            sinal: fraco
            prazo: 2030
            confianca: baixa
      - id: e5
        ordem: 1
        efeito: "A avaliação passa a medir o que o sistema lembrou, esqueceu e contradisse, e não só se a resposta final está certa"
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "Os números de memória publicados por fornecedor perdem valor de comparação porque cada um usa um conjunto de modelos e um juiz diferente"
            sinal: forte
            prazo: 2027
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Aparece um avaliador terceiro de memória, pago por quem compra e não por quem vende"
                sinal: fraco
                prazo: 2030
                confianca: baixa

  - disrupcao: O objeto avaliado deixa de ser a saída e passa a ser o caminho
    efeitos:
      - id: e6
        ordem: 1
        efeito: "O traço de execução vira artefato que se versiona, se revisa e se compara, como o diff virou no código"
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "A revisão de código incorpora revisão de trajetória, e o revisor lê o que o agente tentou e abandonou"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "O tamanho do traço estoura a atenção humana disponível, e a revisão passa a ser feita por amostragem dirigida por anomalia"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "Ferramentas agênticas passam a exibir a trajetória como objeto navegável, com linha do tempo, passos colapsáveis e custo por passo"
            sinal: medio
            prazo: 2028
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "A trajetória vira a peça que se compartilha ao pedir ajuda, ocupando o lugar que o stack trace ocupou"
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: "Benchmark de saída passa a ser citado com data de validade porque perde sentido em cerca de dois anos e meio"
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "Quem compra sistema agêntico deixa de aceitar número de benchmark público e exige avaliação sobre o próprio dado"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "Montar o conjunto de avaliação próprio vira a parte mais cara da compra e passa a ser vendido como serviço"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: "O andaime passa a ser declarado junto do número porque a diferença entre andaimes supera a diferença entre modelos"
            sinal: medio
            prazo: 2028
            confianca: media
      - id: e8
        ordem: 1
        efeito: "Consistência entre execuções, robustez a perturbação e severidade do pior caso entram no material de venda ao lado da acurácia"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "Aparece o orçamento de variância, que fixa em contrato quanta divergência entre duas execuções o produto tolera"
            sinal: fraco
            prazo: 2031
            confianca: baixa
      - id: e9
        ordem: 1
        efeito: "Gravar todo o tráfego externo do agente vira infraestrutura padrão de desenvolvimento, e não recurso de depuração avançada"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: "Rodar a avaliação por replay, sem chamar o modelo, barateia a ponto de a avaliação caber no ciclo de cada commit"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: "O gravado envelhece e passa a validar contra um mundo que não existe mais, obrigando a reexecução ao vivo por amostragem"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: "O custo de guardar traço completo cresce mais rápido que o orçamento e a amostragem volta, cegando a cauda onde estão as falhas"
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: "A decisão sobre o que não guardar sobe de nível na organização porque passa a ter consequência jurídica"
            sinal: fraco
            prazo: 2030
            confianca: baixa

  - disrupcao: O registro da execução vira prova e o log deixa de ser telemetria descartável
    efeitos:
      - id: e11
        ordem: 1
        efeito: "O traço de agente ganha esquema padronizado e deixa de ser texto livre de cada fornecedor"
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: "Plataformas de observabilidade param de competir por formato e passam a competir por leitura, isto é, pelo que extraem do traço"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: "A consolidação acelera e quem tem armazenamento barato compra quem tem leitura"
                sinal: medio
                prazo: 2029
                confianca: baixa
          - id: e11.2
            ordem: 2
            efeito: "Contratos de fornecimento passam a exigir exportação do traço em formato aberto para que a auditoria não dependa do auditado"
            sinal: fraco
            prazo: 2030
            confianca: baixa
      - id: e12
        ordem: 1
        efeito: "Conservar vira obrigação e o traço migra para armazenamento longo e separado, porque a retenção de duas semanas não atende"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: "Separam-se dois sistemas, o traço operacional barato e amostrado e o traço probatório íntegro e completo"
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: "O traço probatório passa a ser assinado e encadeado, e alterar um registro vira evento detectável e reportável"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e13
        ordem: 1
        efeito: "A obrigação de conservar colide com o dever de apagar, e as duas exigências recaem sobre o mesmo registro"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: "Aparece a prática de guardar o traço sem o conteúdo, com estrutura, decisão e resumo criptográfico, e o dado pessoal fora"
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: "A auditoria passa a verificar a forma da decisão e perde a capacidade de verificar o mérito dela"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e14
        ordem: 1
        efeito: "Quem projeta interação passa a ter de mostrar na tela que houve decisão automatizada e como consultá-la"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: "O componente que responde por que isto apareceu para mim vira peça recorrente de interface, com custo de projeto próprio"
            sinal: fraco
            prazo: 2030
            confianca: baixa
      - id: e15
        ordem: 1
        efeito: "Fornecedores expõem uma versão redigida do traço, sem prompt de sistema nem custo interno, e a auditoria enxerga só essa camada"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: "A auditoria passa a valer o quanto vale a confiança em quem redigiu o traço, o que realimenta a demanda por auditor independente"
            sinal: fraco
            prazo: 2031
            confianca: baixa
      - id: e16
        ordem: 1
        efeito: "No Brasil a exigência de registro de execução chega pela via da proteção de dados antes de chegar pela lei de inteligência artificial"
        sinal: medio
        prazo: 2028
        confianca: media

  - disrupcao: O avaliador é uma máquina e do mesmo tipo da que é avaliada
    efeitos:
      - id: e17
        ordem: 1
        efeito: "O número que sai de um juiz-máquina passa a vir acompanhado da ficha do juiz, com modelo, temperatura e concordância corrigida por acaso"
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e17.1
            ordem: 2
            efeito: "Comparar dois sistemas julgados por juízes diferentes deixa de ser aceito e surge a exigência de juiz comum"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e17.1.1
                ordem: 3
                efeito: "O juiz comum vira infraestrutura compartilhada e quem o opera passa a definir o que conta como qualidade num mercado inteiro"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e17.2
            ordem: 2
            efeito: "Times mantêm um conjunto pequeno de julgamentos humanos como calibração permanente, e o humano passa a avaliar o avaliador"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e17.2.1
                ordem: 3
                efeito: "A anotação humana muda de natureza, com menos volume e mais qualificação, e deixa de ser trabalho terceirizado barato"
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e18
        ordem: 1
        efeito: "Avaliar passa a consumir tanto quanto produzir, e o custo da avaliação entra no mesmo orçamento do produto"
        sinal: medio
        prazo: 2028
        confianca: baixa
        efeitos:
          - id: e18.1
            ordem: 2
            efeito: "A avaliação passa a ser desenhada por custo, e as partes do produto que ninguém mede acumulam defeito em silêncio"
            sinal: fraco
            prazo: 2030
            confianca: baixa
      - id: e19
        ordem: 1
        efeito: "A demonstração de que consistência não é validade retira autoridade do número automático em decisão de alto risco"
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e19.1
            ordem: 2
            efeito: "Compradores e reguladores passam a exigir que o avaliador não seja da mesma família de modelos do avaliado"
            sinal: fraco
            prazo: 2030
            confianca: baixa
      - id: e20
        ordem: 1
        efeito: "A avaliação de sistemas de IA vira ofício com nome, formação e credencial"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e20.1
            ordem: 2
            efeito: "A credencial de auditoria de IA se ancora na auditoria contábil e de tecnologia já existente, e não na engenharia de software"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e20.1.1
                ordem: 3
                efeito: "Quem projeta mídia e interação fica fora da mesa onde se define o que conta como sistema que presta"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e21
        ordem: 1
        efeito: "Avaliação com consequência material ganha espaço porque o benchmark sintético perdeu credibilidade"
        sinal: fraco
        prazo: 2030
        confianca: baixa
```

### 5.1 Os mecanismos, um a um

Um efeito sem mecanismo não é efeito, é palpite. Aqui está o `porque` de cada um.

**`e1`** — porque a memória atravessa a sessão, o produto precisa decidir **onde ela para**, e
essa fronteira não é técnica: separar por projeto, por espaço de trabalho, por pessoa ou por
organização são decisões sobre o que o usuário considera "o mesmo contexto". Já é assim: a
separação por projeto existe hoje em produto, com o argumento explícito de que planejamento de
lançamento não deve vazar para trabalho de cliente.

**`e1.1`** — porque `e1` obriga a mostrar a fronteira, e mostrar a fronteira exige mostrar o
conteúdo. Uma memória invisível não tem como ser corrigida pelo usuário, e uma memória errada
que não se corrige quebra a confiança no sistema inteiro. O padrão emergente já é o resumo
editável em linguagem natural.

**`e1.1.1`** — porque `e1.1` transforma o retrato em objeto negociável. Quando a correção é feita
conversando com o sistema, a forma mais barata de mudar o retrato não é explicar, é **afirmar** —
e afirmar coisa conveniente é mais barato que afirmar coisa verdadeira. O mecanismo é o mesmo do
perfil de rede social, com a diferença de que aqui a mentira realimenta a decisão do sistema.

**`e1.2`** — porque `e1` cria fronteiras que alguém tem de desenhar, e a fronteira mais difícil é
a de equipe: o agente que ajuda o time inteiro é mais útil exatamente por juntar o que cada um
contou, e é aí que o vazamento acontece. Não é falha de implementação; é a função operando.

**`e1.2.1`** — porque `e1.2` cria um dano com dono, e dano com dono vira cláusula. O precedente é
o tratamento contratual de correio corporativo e de base de clientes.

**`e2`** — porque a memória atravessa a sessão, um conteúdo escrito hoje age depois, e a defesa
que funciona dentro da sessão não alcança. O que cria a linha de orçamento é a classe ter nome:
ASI06 na OWASP desde dezembro de 2025, com um caso publicado contra ferramenta de programação
em maio de 2026 alcançando memória persistente, hooks globais e o prompt de sistema.

**`e2.1`** — porque `e2` exige controle no momento da escrita, e o estudo sistemático mostra que a
defesa de injeção de prompt não serve: detectou 67,67% dos ataques de sinal forte e **42,50%**
dos de sinal fraco. Se o filtro genérico não pega, alguém revisa especificamente.

**`e2.1.1`** — porque `e2.1` insere um classificador entre o mundo e a memória, e todo
classificador vira alvo. O deslocamento é conhecido: o atacante otimiza contra o controle mais
recente, não contra o sistema.

**`e2.2`** — porque `e2.1` precisa de base para decidir, e a base natural é **de onde veio**. A
recomendação do levantamento de segurança é literalmente essa: ancorar em procedência no momento
da escrita, com versionamento e retenção sensível a política.

**`e3`** — porque `e1` e `e2` tornam a memória valiosa e específica, e não existe caminho
programável de saída: a migração hoje é pedir ao sistema de origem que liste o que lembra, colar
no destino e ver as duas cópias divergirem a partir dali. O custo é assimétrico porque cresce com
o acúmulo: quem usou seis meses perde seis meses.

**`e3.1`** — porque `e3` cria dor de saída e dor de saída cria mercado. A camada fora do
assistente é a resposta natural, e o protocolo que a viabiliza já existe como padrão aberto de
conexão. Note o que muda: a disputa deixa de ser "qual modelo é melhor" e passa a ser "quem
guarda o que sei".

**`e3.1.1`** — porque `e3.1`, se acontecer, inverte a hierarquia de valor. Modelo se troca por
chamada de API; memória de três anos não. Quando o ativo é o que não se substitui, a aquisição
compra o ativo.

**`e3.2`** — este é o **efeito de retroação da raiz A**: porque `e2` mostra que a memória é
atacável e a legislação de dados exige demonstrar apagamento, o caminho mais barato para um banco
ou um hospital é não acumular. Freia a própria raiz.

**`e3.2.1`** — porque `e3.2` é caro (perde-se a utilidade) e a alternativa é comprar a garantia.
Prova de apagamento é o que transforma a promessa em obrigação exigível.

**`e4`** — porque `e1` e `e2` tornam a memória útil e arriscada ao mesmo tempo, e há ofícios em
que o segredo não é do usuário: é do cliente, da fonte, do paciente, do aluno. Quem guarda
segredo de terceiro não pode consentir em nome dele. Este é o efeito de **quem perde**.

**`e4.1`** — porque `e4` cria demanda não atendida, e demanda não atendida com disposição a pagar
vira produto. O precedente é o mercado de mensageria que vende não-retenção.

**`e5`** — porque memória que atravessa sessão só se avalia com histórico longo, e a régua velha
não serve. Já está acontecendo: o LongMemEval-V2 (maio de 2026) usa **451 questões curadas à
mão** sobre até 500 trajetórias com **115 milhões de tokens** de histórico, e mede cinco
habilidades — recordação de estado estático, rastreio de estado dinâmico, conhecimento de fluxo,
armadilhas do ambiente e consciência de premissa. O BEAM mede em 1 e 10 milhões de tokens.

**`e5.1`** — porque `e5` cria régua nova e a régua nova nasce nas mãos de quem é medido. Os
números de 2026 saem com modelos, juízes e configurações diferentes, e o próprio compilador
avisa que não são comparáveis. A disputa Mem0 × Zep — 65,99% contra 75,14% para o mesmo sistema
na mesma régua — é a demonstração.

**`e5.1.1`** — porque `e5.1` destrói a utilidade do auto-relato, e quem precisa decidir uma compra
precisa de número que não venha de parte interessada. O modelo é o laboratório de ensaio
independente.

**`e6`** — porque a avaliação migrou para o caminho, e caminho precisa de representação estável
para ser comparado. O traço ocupa a posição que o diff ocupa: a unidade sobre a qual se discute.

**`e6.1`** — porque `e6` torna o traço legível, e quem revisa código de agente descobre que o
resultado não explica o risco. O achado do Holistic Agent Leaderboard é o argumento: agentes
procurando o benchmark no HuggingFace em vez de resolver a tarefa **não aparecem na taxa de
acerto**, só no log.

**`e6.1.1`** — porque `e6.1` cria uma carga de leitura que não cabe: um traço de cem passos por
tarefa, vezes o número de tarefas, excede a atenção disponível. O que sobra é amostrar — e
amostrar por anomalia, não por acaso.

**`e6.2`** — porque `e6` exige interface, e a conversa linear representa mal um processo com
ramificação, repetição e abandono. É aqui que o tema encosta mais diretamente em design de
interação: alguém vai desenhar a representação padrão de trajetória, e ela vai ser copiada.

**`e6.2.1`** — porque `e6.2` cria um objeto compartilhável, e todo objeto compartilhável de
depuração vira gênero de comunicação. O stack trace ocupou esse lugar por trinta anos.

**`e7`** — porque a saída deixou de descrever o comportamento e o benchmark de saída passou a
medir contaminação e andaime. Evidência: taxa de erro estimada em 5 a 10% no próprio conjunto do
SWE-bench Verified, 16 amostras excluídas por falha de ambiente, e um salto de desempenho vindo
de atualização de scaffolding em fevereiro de 2026.

**`e7.1`** — porque `e7` tira valor do número público e quem compra continua precisando decidir.
A saída é medir no próprio dado, que é a única régua que o vendedor não pode ter visto.

**`e7.1.1`** — porque `e7.1` transfere ao comprador um trabalho caro e especializado — escolher
casos, definir o certo, manter o conjunto vivo — e trabalho caro e especializado que todo mundo
precisa vira serviço.

**`e7.2`** — porque `e7` mostra que o número não pertence ao modelo, e a única forma de restaurar
comparabilidade é declarar o resto do sistema. O precedente é a ficha técnica de teste de
desempenho de hardware.

**`e8`** — porque o caminho é o objeto, e o caminho varia. A medição existe: doze métricas em
quatro dimensões, com a conclusão de que capacidade crescente não trouxe confiabilidade
correspondente em 15 modelos e dois benchmarks. O que empurra para o material de venda é a
diferença entre "acerta 80% das vezes" e "acerta 80% das vezes, e nas outras 20% erra de forma
limitada".

**`e8.1`** — porque `e8` torna a variância mensurável, e o que é mensurável entra em contrato. É o
equivalente do acordo de nível de serviço para um sistema que não repete.

**`e9`** — porque avaliar caminho exige reproduzir caminho, e reproduzir caminho exige capturar
o mundo externo. A viabilidade já foi demonstrada: interceptação no transporte, replay isolado
sem rede, fidelidade F = 1,0 em 250 instâncias, 98,3% de redução mediana de latência por passo.

**`e9.1`** — porque `e9` remove o custo dominante da avaliação, que é a inferência. Se o traço
gravado responde no lugar do modelo, a suíte que custava caro passa a caber no ciclo de
integração contínua — que é o lugar onde teste vira obrigatório.

**`e9.1.1`** — porque `e9.1` congela o mundo no instante da gravação. API muda, ferramenta muda,
a informação muda; a suíte continua verde contra um mundo morto. A correção conhecida é
reexecutar ao vivo uma fração.

**`e10`** — este é o **efeito de retroação da raiz B**: porque o traço completo é caro — carga de
prompt e resposta em quilobytes por span, cobrança por span ou por gigabyte, retenção de duas
semanas a um mês nos planos correntes — o caminho barato é amostrar. E amostrar apaga a cauda,
que é justamente onde mora a falha rara que motivou guardar.

**`e10.1`** — porque `e10` transforma uma configuração de infraestrutura numa decisão sobre o que
poderá ser provado depois. Decisão com consequência jurídica não fica com quem configura o
coletor.

**`e11`** — porque prova exige forma, e forma exige padrão. As convenções `gen_ai.*` já existem,
com spans de invocação de agente, de conversa e de execução de ferramenta, e ganharam repositório
próprio em junho de 2026 justamente para andar mais rápido que o núcleo.

**`e11.1`** — porque `e11` comoditiza o formato. Quando todo mundo guarda igual, guardar deixa de
ser vantagem e a diferença passa a ser o que se extrai.

**`e11.1.1`** — porque `e11.1` põe o valor na leitura e o custo no armazenamento, e quem já tem
armazenamento barato compra a leitura em vez de construí-la. A compra do Langfuse pela ClickHouse
em janeiro de 2026 é o caso.

**`e11.2`** — porque `e11` torna a exportação tecnicamente trivial e `e15` torna a exportação
politicamente necessária. Auditoria que depende do auditado para ver o registro não é auditoria.

**`e12`** — porque a obrigação é de registro **automático** ao longo de **toda a vida** do
sistema, e a retenção comum do mercado é de semanas. Duas exigências incompatíveis no mesmo
sistema resultam em dois sistemas.

**`e12.1`** — porque `e12` separa requisitos: um lado quer barato, amostrado e rápido; o outro quer
íntegro, completo e duradouro. Otimizar os dois no mesmo armazenamento é caro.

**`e12.1.1`** — porque `e12.1` cria um registro cuja função é servir de prova, e prova que pode ser
alterada em silêncio não prova nada. A leitura do setor já formula assim: mude uma entrada e a
cadeia quebra visivelmente.

**`e13`** — porque a mesma linha de log contém o que o regulador manda conservar e o que o titular
pode mandar apagar. Não é tensão retórica: é o mesmo registro.

**`e13.1`** — porque `e13` precisa de saída, e a saída barata é separar forma de conteúdo. Guardar
qual ferramenta foi chamada, com que política e em que ordem, sem guardar o texto.

**`e13.1.1`** — porque `e13.1` preserva a estrutura e descarta o conteúdo, e mérito é conteúdo. A
auditoria passa a poder dizer que o processo foi seguido, e a não poder dizer se a decisão foi
correta.

**`e14`** — porque `e12` e `e13` criam um registro consultável, e registro consultável sem porta de
entrada não é consultável. A porta de entrada é interface.

**`e14.1`** — porque `e14` transforma a justificativa em requisito recorrente, e requisito
recorrente vira componente. O precedente é o aviso de cookie, que virou padrão de projeto — com
a diferença de que aqui há conteúdo real a mostrar.

**`e15`** — porque o traço completo expõe prompt de sistema, conjunto de ferramentas e custo, que
é onde está a vantagem competitiva do fornecedor. O incentivo é entregar uma camada suficiente
para a conformidade e insuficiente para a cópia. Este é o efeito **de quem bloqueia** na raiz C.

**`e15.1`** — porque `e15` faz a auditoria depender de um resumo produzido pelo auditado, e o
único jeito de restaurar confiança é um terceiro que possa ver mais. É o mesmo mecanismo que
criou a auditoria independente em contabilidade.

**`e16`** — porque no Brasil o marco de IA está parado desde março de 2025 na Câmara, enquanto a
lei de proteção de dados está em vigor com autoridade sancionadora. Quando um caminho está
bloqueado e o outro está aberto, a exigência chega pelo aberto: memória de agente é dado pessoal,
e dado pessoal tem acesso, correção, eliminação e portabilidade.

**`e17`** — porque o juiz virou o instrumento e o instrumento não estava calibrado. A medição de
2026 dá os parâmetros que passam a ser exigidos: qual modelo, qual temperatura — mesma-resposta
acima de 95% a temperatura zero, caindo a 70% a temperatura 1 — e qual concordância **corrigida
por acaso**, já que a bruta infla em 33,8 a 41,2 pontos.

**`e17.1`** — porque `e17` revela que a escala depende do juiz, e escalas diferentes não se
comparam. Modelos que mudam até 14 posições entre benchmarks tornam a comparação cruzada
indefensável.

**`e17.1.1`** — porque `e17.1` cria um ponto único, e ponto único é poder. Quem opera a régua
define o que o mercado inteiro chama de qualidade — e nada obriga essa régua a ser pública.

**`e17.2`** — porque `e17` exige calibração e calibração exige âncora externa, que só o humano
fornece. A inversão é a parte interessante: o humano sai da avaliação do produto e entra na
avaliação do avaliador.

**`e17.2.1`** — porque `e17.2` muda a unidade de trabalho de volume para precisão. Anotação de
calibração exige entender o domínio e a rubrica, e não é o mesmo trabalho que rotular em escala.

**`e18`** — porque avaliar caminho com juiz-máquina significa rodar modelo sobre a saída de
modelo, várias vezes, para estimar variância. O custo da avaliação passa a ser da mesma ordem do
custo da produção.

**`e18.1`** — porque `e18` impõe escolha, e escolha sob orçamento mede o que é barato de medir.
O que sobra sem medição não melhora e não avisa que piorou.

**`e19`** — este é o **efeito de retroação da raiz D**: porque a evidência de que o juiz é
consistente sem ser válido circula, e circula com números — 541 mil julgamentos, 21 modelos,
kappa deflacionado, viés de posição que varia cem vezes entre juízes. O efeito é sobre a
autoridade: quem decide alto risco deixa de aceitar o número sozinho.

**`e19.1`** — porque `e19` cria uma exigência de independência, e a forma mais simples de
independência é o juiz não ser da mesma família do avaliado. O precedente é a proibição de o
auditor prestar consultoria ao auditado.

**`e20`** — porque a demanda por alguém que responda "isto presta?" cresceu, e a resposta precisa
de nome. Já há vagas com o rótulo desde 2024 e já há credencial formal de auditoria de IA.

**`e20.1`** — porque a credencial existente exige CISA ativo ou habilitação contábil com atuação
em auditoria de TI. Não é detalhe burocrático: **define de onde vem quem vai dizer o que é um
sistema aceitável.**

**`e20.1.1`** — porque `e20.1` fixa o vocabulário do campo em controle, risco e conformidade. Quem
projeta mídia e interação fala de tarefa, entendimento e erro do usuário, e esse vocabulário não
entra na régua — logo o que a régua não mede não é projetado.

**`e21`** — porque `e7` e `e19` retiram credibilidade do número sintético, e o que sobra como prova
de que um sistema funciona é a consequência real. O caso existente opera com capital próprio em
mercado aberto; é pequeno e parou, mas é o único desenho conhecido em que errar custa.

### 5.2 As classes de referência usadas para os prazos

Prazo sem classe de referência é chute. As que usei:

| Classe de referência | O que ela mede | Usada em |
|---|---|---|
| **Vida útil de um benchmark de saída nesta área** — SWE-bench (out/2023) até o abandono público por um laboratório de fronteira (fev/2026): ~28 meses | quanto tempo uma régua de resultado sustenta comparação | `e7` (2027), `e5.1` (2027) |
| **OpenTelemetry** — fusão OpenTracing/OpenCensus em 2019, padrão de fato em ~5 anos; as convenções GenAI ainda experimentais em jun/2026 | do rascunho de convenção ao uso majoritário: 4 a 6 anos | `e11` (2028), `e11.1` (2029) |
| **GDPR** — texto em 2016, aplicável em 2018, efeito estrutural em produto por volta de 2021 | de obrigação escrita a mudança visível: ~5 anos | `e12` (2029), `e14` (2029) |
| **Sarbanes-Oxley e a auditoria de TI** — lei em 2002, mercado de auditoria consolidado por volta de 2007 | de escândalo a profissão estabelecida: ~5 anos | `e20` (2029), `e20.1` (2029) |
| **Portabilidade de dados** — direito no GDPR desde 2018, com uso real residual; Open Banking brasileiro de 2019 a 2023 | portabilidade sem interesse comercial do detentor é **lenta ou nula** | `e3` (2029, empurrado no §7.3), `e3.1` (2030), `e11.2` (2030) |
| **Teste unitário a integração contínua obrigatória** — xUnit em 1998, CI como padrão por volta de 2010 | de técnica disponível a prática obrigatória: ~10 anos | `e9.1` (2029), `e8` (2029) |
| **Consolidação de observabilidade de aplicação** — APM comercial em 2008, mercado consolidado por volta de 2015; em LLM, Langfuse em 2023 e aquisição em 2026 | consolidação em observabilidade de IA está rodando **duas vezes mais rápido** que a de aplicação | `e11.1.1` (2029) |
| **Nomeação de classe de risco pela OWASP e resposta de produto** — Top 10 para LLM em 2023, controles em produto em 2024-2025: ~12 a 18 meses | de categoria nomeada a orçamento alocado | `e2` (2027), `e2.1` (2029) |

### 5.3 Convergências, ciclos e contradições

**Convergência 1 — o número publicado perde autoridade, por três caminhos independentes.**
`e5.1` (raiz A: os números de memória de fornecedor não são comparáveis), `e7` (raiz B: o
benchmark de saída tem validade curta) e `e17` (raiz D: o número depende do juiz) chegam ao
mesmo efeito de segunda ordem: **quem compra deixa de aceitar número publicado e passa a medir no
próprio dado** (`e7.1`). Três rupturas diferentes, com mecanismos diferentes, no mesmo ponto —
esta é a convergência mais forte do mapa, e é a que eu apostaria como a coisa realmente provável
até 2029.

**Convergência 2 — o dado que descreve o trabalho do agente sai do fornecedor.** `e3.1` (camada de
memória fora do assistente, raiz A) e `e11.2` (exportação de traço em formato aberto, raiz C)
chegam à mesma prática por motivos opostos: uma por pressão de mercado, a outra por pressão de
auditoria. Se as duas andarem juntas, o que se leva ao trocar de fornecedor deixa de ser só o
dado do negócio e passa a ser **o registro de como o trabalho foi feito**.

**Convergência 3 — aparece um intermediário que decide o que o sistema pode ver e mostrar.**
`e2.1` (curadoria de memória, raiz A) e `e15` (traço redigido pelo fornecedor, raiz C) instalam,
cada uma do seu lado, um filtro entre o sistema e quem o observa. Um filtra a entrada, o outro a
saída. Nos dois casos, **a confiança no sistema passa a ser confiança no filtro**.

**Ciclo de reforço.** `e9` (gravar tudo) → `e9.1` (avaliação barata por replay) → mais avaliação →
mais traço guardado → `e12` (conservação longa) → mais valor no traço → mais razão para gravar
tudo. Este ciclo acelera a raiz C sem precisar de regulação.

**Ciclo de freio.** `e19` (o número automático perde autoridade) → `e17.2` (humano calibra o juiz)
→ avaliação mais cara → `e18.1` (mede-se menos) → menos avaliação. A raiz D contém o próprio
freio: quanto mais se descobre sobre o juiz, mais caro fica usá-lo direito.

**Contradição 1 — conservar contra apagar.** `e12` (conservação longa e íntegra, por obrigação
regulatória) e `e3.2`/`e13` (apagamento por direito do titular) não podem coexistir sobre o mesmo
registro. Não resolvo. O que decide entre as duas é **quem é multado primeiro**, e isso é
jurisdicional: onde a autoridade de proteção de dados for mais ativa que a autoridade de IA, o
apagamento ganha; onde for o contrário, a conservação ganha. No Brasil, `e16` sugere que o
apagamento chega primeiro.

**Contradição 2 — amostrar contra conservar.** `e10` (a economia empurra a amostragem de volta) e
`e12` (a obrigação exige registro completo) descrevem o mesmo sistema indo para lados opostos. O
que decide é se o custo de armazenamento cai mais rápido que o volume de traço cresce — e a
direção do agente autônomo, que multiplica passos por tarefa, sugere que não.

### 5.4 Efeitos que passam do horizonte

Dois efeitos de terceira ordem têm prazo **2032**, fora da janela de 2031 deste mapa, e estão
declarados como tal: `e3.1.1` (a memória vira o ativo que se adquire) e `e17.2.1` (a anotação
humana muda de natureza). Nos dois casos o motivo é o mesmo: dependem de um efeito de segunda
ordem que só amadurece por volta de 2030, e nenhuma classe de referência sustenta menos de dois
anos entre a prática se estabelecer e o mercado de trabalho se reorganizar em torno dela.
Nenhum efeito de primeira ou segunda ordem passa do horizonte.

### 5.5 Cobertura — STEEP e quem perde

**Social.** `e1.1.1` (as pessoas mentem para o agente para corrigir o retrato), `e4` (ofícios com
segredo de terceiro), `e17.2.1` (o trabalho de anotação muda de natureza), `e1.2` (vazamento
lateral em equipe).

**Tecnológico.** `e9` (captura de tráfego), `e11` (esquema padronizado), `e6.2` (representação de
trajetória), `e13.1` (traço sem conteúdo).

**Econômico.** `e3` (custo de troca), `e10` (custo de retenção), `e18` (custo de avaliar),
`e11.1.1` (consolidação por aquisição), `e7.1.1` (avaliação como serviço).

**Ecológico.** Ficou **quase vazio**, e registro isso em vez de forçar. O único fio real é `e18`:
se avaliar passa a consumir tanto quanto produzir, o consumo de inferência de um sistema em
produção pode dobrar. Não encontrei nesta rodada nenhum número que sustentasse um efeito próprio
— nem consumo por avaliação, nem estimativa de sobrecarga energética de observabilidade de IA —
e por isso não escrevi um efeito ecológico que não consigo ancorar.

**Político.** `e13` (conservar contra apagar), `e15` (o que a auditoria pode ver), `e16` (a via
brasileira), `e19.1` (independência do avaliador), `e20.1` (quem captura a credencial).

**Quem perde.** `e4` — advogado, jornalista, terapeuta, professor: quem guarda segredo que não é
seu. `e3` — quem acumulou mais, que é quem tem mais a perder ao sair. `e10` — quem depende da
cauda rara, porque é ela que é amostrada fora. `e17.2.1` — quem vive de anotação em volume.
`e20.1.1` — quem projeta interação, que fica de fora da mesa onde se define a régua. E, de forma
difusa, `e15.1` — quem precisa auditar e só enxerga o que o auditado redigiu.

## 6. Sinais fracos e wildcards

### 6.1 Sinais fracos

**1. Avaliação com dinheiro real, e o fato de ela ter parado.**
*Onde foi visto:* o Alpha Arena, da Nof1, deu **US$ 10 mil de capital real** a cada um de seis
modelos — DeepSeek V3.1, GPT-5, Qwen 3 Max, Claude 4.5 Sonnet, Gemini 2.5 Pro e Grok 4 — para
operar contratos perpétuos de criptomoeda, com o mesmo prompt. A temporada 1 rodou até 3 de
novembro de 2025; num corte intermediário o DeepSeek estava em +10,11% e o GPT-5 em −39,73%. A
frase dos fundadores é a tese: "*nosso objetivo com o Alpha Arena é tornar os benchmarks mais
parecidos com o mundo real, e os mercados são perfeitos para isso — dinâmicos, adversariais,
abertos e infinitamente imprevisíveis*".
*O que mudaria:* se avaliação com consequência material pegar, `e21` sobe de terceira prioridade
para efeito central, e o benchmark sintético vira aquecimento.
*O sinal observável de crescimento:* uma gestora publicando resultado auditado de modelo com
capital próprio; ou uma temporada nova com capital institucional, não de pesquisa. **Hoje o
sinal está esfriando** — a leitura de agosto de 2026 indica que os modelos não estão mais
rodando e não há temporada 2 anunciada. Um sinal fraco que esfriou é informação, não ruído.

**2. MemoryTrap — o primeiro ataque publicado que usa a memória de uma ferramenta de programação
amplamente usada.**
*Onde foi visto:* Cisco, via OWASP GenAI, 13 de maio de 2026. Um fluxo de trabalho rotineiro
permitia que uma carga maliciosa alcançasse memória persistente, configuração global de hooks e
o prompt de sistema.
*O que mudaria:* `e2.1` (curadoria de memória) deixa de ser boa prática e vira requisito, e
`e3.2` (desligar memória em setor regulado) acelera.
*O sinal observável:* um identificador público de vulnerabilidade atribuído a item de memória de
agente; ou o primeiro incidente com dano contabilizado.

**3. As convenções semânticas de GenAI ganharem repositório próprio.**
*Onde foi visto:* `open-telemetry/semantic-conventions-genai`, separado do núcleo em junho de
2026, com cadência de release independente.
*O que mudaria:* padronização quatro a seis anos mais rápida que a do núcleo — o que antecipa
`e11` e, por consequência, toda a raiz C.
*O sinal observável:* a primeira versão marcada como estável para spans de agente (hoje ainda
experimental); e a citação dessas convenções dentro de um rascunho de norma (prEN 18229-1 ou
ISO/IEC DIS 24970).

**4. Avaliação de memória exigindo corpus do tamanho de um ano de trabalho.**
*Onde foi visto:* LongMemEval-V2, maio de 2026 — até 500 trajetórias e **115 milhões de tokens**
de histórico para 451 questões; o BEAM medindo em 1 e 10 milhões de tokens.
*O que mudaria:* se a régua exige história longa, avaliar memória deixa de ser acessível a quem
não tem história — e a avaliação se concentra em quem já opera em escala.
*O sinal observável:* o primeiro benchmark de memória construído sobre trajetória **real** de uma
organização, e não sintética; e a primeira recusa pública de um fornecedor em ser medido por ele.

**5. Determinismo e acurácia sem correlação.**
*Onde foi visto:* DFAH, janeiro-março de 2026: 4.700 execuções, 7 modelos, 4 provedores, três
benchmarks financeiros, correlação **r = −0,11** entre determinismo de decisão e acurácia; nenhum
modelo conseguiu as duas coisas.
*O que mudaria:* separa definitivamente "repetir" de "acertar", e torna `e8` (métricas de
confiabilidade no material de venda) quase inevitável em setor regulado.
*O sinal observável:* um fornecedor publicando determinismo como métrica de produto, ao lado da
acurácia; ou um edital exigindo os dois.

**6. Duas normas técnicas de registro de IA em rascunho ao mesmo tempo.**
*Onde foi visto:* prEN 18229-1 (registro e supervisão humana) e ISO/IEC DIS 24970 (registro de
sistemas de IA), ambas citadas como rascunhos em abril de 2026.
*O que mudaria:* norma publicada transforma "log apropriado ao propósito" — hoje indeterminado —
em lista verificável, e desbloqueia a fiscalização de `e12`.
*O sinal observável:* publicação de qualquer uma das duas; ou a primeira compra pública que a
cite como requisito.

### 6.2 Wildcards

**W1 — Uma decisão judicial que trate o traço do agente como documento, e a ausência dele como
presunção contra quem operava.**
*Mecanismo:* numa disputa com dano quantificável — crédito negado, contrato mal executado,
conteúdo removido — a parte prejudicada pede o traço na fase de provas. Quem operava o agente ou
entrega, ou explica por que amostrou fora justamente aquela execução. A partir do primeiro caso,
não guardar vira risco processual maior que o custo de guardar.
*Por que é improvável:* exige uma coincidência de três coisas — dano quantificável, parte com
recursos para litigar, e um juízo disposto a tratar log de modelo de linguagem como documento e
não como opinião técnica.
*O que faria com o mapa:* antecipa a raiz C em dois a três anos sem precisar do AI Act, torna
`e12.1` (traço probatório separado) prática corrente, e inverte a contradição 2 — a economia
deixa de decidir.
*Sinal precoce:* a primeira ordem de preservação de traço de agente numa ação civil; ou a
primeira perícia técnica que peça o traço como objeto.

**W2 — Vazamento de memória compartilhada de agente corporativo, em escala.**
*Mecanismo:* um armazenamento de memória de equipe exposto por erro de configuração — o mesmo
tipo de falha que expõe bucket de objeto há quinze anos —, com meses de contexto de trabalho de
uma organização inteira, incluindo o que cada pessoa contou ao agente achando que estava falando
com uma ferramenta.
*Por que é improvável:* exige que um fornecedor com memória compartilhada erre em escala, e os
grandes têm operação madura de segurança.
*Por que é plausível mesmo assim:* a memória raramente recebe o mesmo controle que o banco de
produção, porque nasceu como recurso de conveniência; e a OWASP acabou de dizer, por escrito, que
ela é tratada como implicitamente confiável.
*O que faria com o mapa:* `e3.2` (desligar memória) vira norma em setor regulado, `e4.1` (agentes
que vendem não acúmulo) vira mercado grande, e a raiz A se reorganiza em torno de memória local.
*Sinal precoce:* o primeiro incidente com memória de agente reportado a uma autoridade de
proteção de dados.

**W3 — Portabilidade de memória por imposição regulatória.**
*Mecanismo:* uma autoridade trata a memória do assistente como dado pessoal sujeito a
portabilidade — o direito já existe, tanto no regulamento europeu quanto na lei brasileira — e
exige formato legível por máquina. Não é lei nova: é aplicação de lei existente a um objeto novo.
*Por que é improvável:* exige que alguém formule a memória de assistente como dado pessoal
portável num despacho, e que o formato seja definível sem virar ficção.
*O que faria com o mapa:* mata `e3` (custo de troca) e `e3.1` (disputa de mercado pela camada de
memória) como fenômenos de mercado e os converte em obrigação — o que é um mapa diferente, com
consequência oposta para `e3.1.1` (a memória deixa de ser ativo adquirível).
*Sinal precoce:* qualquer manifestação de autoridade de proteção de dados que use as palavras
"memória do assistente" ao lado de "portabilidade". No Brasil, isto passaria pela ANPD.

**W4 — O juiz-máquina declarado inadequado para avaliação de conformidade.**
*Mecanismo:* uma autoridade lê o resultado de que o juiz é confiável sem ser válido e conclui que
avaliação de conformidade de sistema de alto risco não pode ser feita por modelo de linguagem —
ou, na versão branda, não pode ser feita por modelo da mesma família do avaliado.
*Por que é improvável:* reguladores costumam exigir processo, não proibir instrumento; e a
alternativa (avaliação humana em escala) é cara o bastante para inviabilizar o setor.
*O que faria com o mapa:* `e19.1` vira exigência formal, `e17.2` (calibração humana) vira
obrigação, a avaliação encarece de forma estrutural, e `e20` acelera — porque um ofício
credenciado é a saída natural quando a máquina é proibida de julgar.
*Sinal precoce:* a primeira minuta de norma técnica que diga como um juiz automático deve ser
validado; ou uma exigência de kappa corrigido por acaso em documento oficial.

## 7. Contra o próprio mapa

Este é o passo que a maioria das rodas não tem. Foi feito por escrito sobre o mapa já pronto, e
alterou o mapa.

### 7.1 Pré-mortem — é 2031 e este mapa se mostrou errado

**Razão 1: a avaliação nunca virou problema de ninguém.** Os agentes ficaram bons o bastante em
tarefas estreitas e as pessoas simplesmente passaram a aceitar o resultado, como aceitam o
corretor ortográfico e o resultado de busca. A pergunta "por que isso está certo?" nunca foi
feita fora de setor regulado, porque o custo do erro era baixo e o custo de verificar era alto.
Nesse mundo, avaliação continua sendo uma preocupação de um punhado de laboratórios e de bancos.
*Aponta para:* `e8` (métricas de confiabilidade no material de venda) e `e18` (custo da
avaliação). **Rebaixei os dois.**

**Razão 2: a regulação atrasou, e a raiz C não se materializou.** O AI Act já teve seu calendário
disputado publicamente, e as próprias fontes desta rodada divergem em dois anos sobre quando o
artigo 12 passa a valer. O PL brasileiro está parado na Câmara desde março de 2025. Se as datas
escorregarem outra vez, nada em `e12`, `e14` e `e16` acontece até 2031, e o log continua sendo
telemetria amostrada.
*Aponta para:* a raiz C inteira. **Rebaixei `e16` e empurrei `e11`.**

**Razão 3: a memória se resolveu por capacidade, não por engenharia.** Esta é a razão mais forte,
e é a que eu levaria mais a sério. A evidência de 2026 já aponta nessa direção: com cache de
prompt, guardar o histórico inteiro venceu **toda** estratégia de sumarização testada em custo,
latência e recordação **ao mesmo tempo**. Se janela e cache continuarem baratos, "memória" vira
um nome elegante para "não jogar fora o histórico", a indústria de bibliotecas de memória
desaparece por irrelevância, e a raiz A se reduz a um problema de privacidade sem problema
técnico.
*Aponta para:* a raiz A inteira, e em especial `e3.1` (camada de memória como disputa de
mercado). **Rebaixei `e2.2` e empurrei `e3`.**

### 7.2 Extrapolação linear — o que é só mais do mesmo, maior

Três efeitos são extrapolação e foram tratados:

- **`e18`** ("avaliar consome tanto quanto produzir") é aritmética: mais chamadas, mais custo. Só
  ganha não-linearidade se a avaliação passar a exigir execução no mundo real, como em `e21`.
  Como isso é sinal fraco e esfriando, **rebaixei a confiança de `e18` de média para baixa**.
- **`e10`** ("a amostragem volta") é a curva de custo continuando. A não-linearidade que o salva
  é `e10.1`: o momento em que a decisão sobre o que não guardar deixa de ser técnica. Mantive
  `e10` como está, porque a não-linearidade tem nome e mecanismo.
- **`e6.2`** ("trajetória como objeto navegável") é interface acompanhando complexidade — o que
  sempre acontece. **Rebaixei a confiança de média para baixa**, porque não há nada que garanta
  que a representação convirja para um padrão em vez de continuar fragmentada.

### 7.3 Velocidade de adoção — prazos confrontados com a classe de referência

- **`e3` (custo de troca por memória): 2028 → 2029.** A classe de referência é portabilidade de
  dados, e ela é devastadora: o direito europeu existe desde 2018 com uso residual, e o Open
  Banking brasileiro levou quatro anos. Quando o detentor não tem interesse comercial em
  facilitar, nada anda rápido. O efeito de percepção do custo é mais lento do que eu tinha posto.
- **`e11` (esquema padronizado de traço): 2027 → 2028.** Pela classe do OpenTelemetry, do rascunho
  de convenção ao uso majoritário levam-se quatro a seis anos, e as convenções de GenAI ainda
  estavam **experimentais** em junho de 2026. Ter repositório próprio acelera, mas não em um ano.
- **`e21` (avaliação com consequência material): 2029 → 2030, e confiança média → baixa.** O único
  caso conhecido parou de rodar. Prazo curto com o sinal esfriando é otimismo disfarçado.
- **`e20` (a avaliação vira ofício com credencial): mantido em 2029.** A classe de referência aqui
  sustenta o prazo: de Sarbanes-Oxley em 2002 ao mercado de auditoria de TI consolidado levaram-se
  cerca de cinco anos, e a credencial de auditoria de IA já existe com pré-requisito definido.

### 7.4 A raiz que não acontece

- **Sem a raiz A** (a memória se resolve por capacidade): sobram B, C e D praticamente inteiras.
  Caem `e1` a `e5` e seus descendentes — cerca de um terço do mapa. O tema continua de pé, mas
  vira um mapa só sobre avaliação e trilha, e a pergunta sobre privacidade entre projetos perde
  objeto.
- **Sem a raiz B** (a avaliação continua olhando a saída): a raiz C **perde o objeto**. Não faz
  sentido conservar trajetória como prova se ninguém a usa como evidência de qualidade. Esta é a
  dependência mais séria do mapa, e ela significa que B e C não são tão independentes quanto a
  estrutura sugere. Declaro: **C depende de B**.
- **Sem a raiz C** (a regulação atrasa): sobram A, B e D. O mercado faz por conta própria uma
  versão mais barata e menos íntegra do que a lei faria — traço curto, amostrado, sem assinatura.
  O mapa não morre; fica menos exigente.
- **Sem a raiz D** (o juiz-máquina se mostra válido depois de calibrado): B fica **mais barato** e
  acelera, `e17` e `e19` caem, e o mapa inteiro fica mais otimista. Note que esta é a única raiz
  cuja falha *melhora* o desfecho.

Conclusão do teste: o mapa não é uma raiz disfarçada em quatro, mas também não são quatro
independentes. São **duas duplas**: A com D (o que o sistema sabe e quem julga o que ele sabe) e
B com C (o que ele fez e quem conserva o registro disso).

### 7.5 Suposições escondidas

Cinco premissas que o mapa assume sem dizer:

1. **O custo de inferência continua caindo.** Se parar de cair, `e9.1`, `e17.2` e `e18` mudam de
   sinal: a avaliação passa a ser racionada, não barateada.
2. **Continua havendo modelo de família diferente disponível para servir de juiz.** `e19.1`
   depende de pluralidade de fornecedores. Se o mercado concentrar em dois, "juiz de outra
   família" vira formalidade.
3. **As plataformas continuam permitindo exportar traço e memória.** Nada obriga. Se fecharem,
   `e11.2` e `e3.1` morrem e `e15` (traço redigido) vira o teto permanente do que se pode
   auditar.
4. **A direção regulatória não reverte.** O mapa assume que a exigência de registro só aumenta.
   Uma mudança política que trate obrigação de log como barreira à inovação inverteria a raiz C.
5. **Energia e capacidade de processamento não limitam avaliação duplicada.** Se limitarem, a
   primeira coisa a ser cortada é a avaliação, porque ela não aparece para o usuário.

Cada uma dessas premissas quebrada é um wildcard que eu não escrevi. A quarta é a mais provável.

### 7.6 Viés do autor

Este mapa tem um viés localizável e eu vou nomeá-lo. O autor mantém, há anos, um sistema pessoal
de registro de decisões e uma wiki de conhecimento acumulado, e opera com a convicção prática de
que **o acúmulo registrado vale mais que a ferramenta que o produziu**. Isso empurra o mapa numa
direção específica: os efeitos `e3.1` (a camada de memória vira a disputa) e `e3.1.1` (a memória
vira o ativo, o modelo vira commodity) são exatamente a tese que o autor gostaria que fosse
verdade. Os dois são os efeitos que eu recomendaria atacar primeiro numa leitura adversarial.

Um segundo viés, menor: o mapa trata a avaliação como problema epistemológico interessante. Para
a maior parte de quem constrói produto, ela é um imposto. A Razão 1 do pré-mortem existe porque
eu precisei escrever contra o meu próprio gosto pelo assunto.

Um terceiro, que é do método e não do autor: escolher "memória, observabilidade e avaliação" como
um tema só já é uma tese — a de que são a mesma infraestrutura. Se estiverem erradas em serem a
mesma coisa, o mapa junta o que deveria estar separado, e as convergências da §5.3 são artefato
da montagem, não achado.

### 7.7 Registro de alterações

Cada linha traz o `id`, o valor antes e o valor depois. Cota mínima da skill: pelo menos um efeito
rebaixado ou removido **por raiz**.

**Raiz A:**
- `e3`: prazo **2028 → 2029**, porque a classe de referência de portabilidade de dados mostra que,
  sem interesse do detentor, a fricção demora a ser percebida como custo (§7.3).
- `e2.2`: confiança **média → baixa**, porque memória com procedência depende de a memória
  persistir como problema, e a Razão 3 do pré-mortem pode eliminá-la.
- **Removido:** *"Escolas e universidades passam a proibir memória persistente em trabalho de
  aluno"* — cai no efeito proibido "formação reorganiza o currículo" sem ator nomeado nem
  mecanismo específico. Vai para a §12.7.

**Raiz B:**
- `e6`: sinal **forte → médio**, porque traço versionado existe em ferramenta, mas não achei caso
  de revisão de trajetória como prática estabelecida de equipe — o que rebaixa de "há caso real"
  para "há tentativa".
- `e8`: prazo **2028 → 2029**, pela classe de referência de teste unitário a integração contínua
  obrigatória (~10 anos de técnica disponível a prática exigida).
- `e6.2`: confiança **média → baixa** (§7.2, extrapolação linear).
- **Removido:** *"Surge a profissão de engenheiro de trajetória"* — efeito proibido ("surge uma
  nova profissão") sem nome, sem vaga e sem credencial. O que sobrou com nome real está em `e20`.

**Raiz C:**
- `e11`: prazo **2027 → 2028**, pela classe do OpenTelemetry, e porque as convenções de GenAI
  ainda estavam experimentais em junho de 2026.
- `e16`: confiança **alta → média**, porque a alegação de que a ANPD programou fiscalizações
  específicas de IA **não foi confirmada em fonte primária** nesta rodada.
- `e12.1`: confiança **média → baixa**, porque a separação entre traço operacional e probatório
  depende de uma norma técnica que ainda é rascunho.
- **Removido:** *"Reguladores criam uma categoria jurídica nova para agentes"* — efeito proibido
  ("reguladores criam categoria nova") sem regulador nomeado. O que sobreviveu, com nome, é `e16`.

**Raiz D:**
- `e18`: confiança **média → baixa** (§7.2, extrapolação linear).
- `e21`: prazo **2029 → 2030** e confiança **média → baixa**, porque o único caso conhecido de
  avaliação com dinheiro real parou de rodar.
- `e19`: confiança **alta → média**, porque a evidência é de um estudo, por mais robusto que seja,
  e um estudo não move a autoridade de um número sozinho.

Ao todo: **três efeitos removidos, oito rebaixados ou empurrados.** A bateria derrubou coisa.

### 7.8 Calibração

Distribuição de confiança por ordem, depois das alterações:

| Ordem | alta | média | baixa | total |
|---|---|---|---|---|
| 1 | 4 | 15 | 2 | 21 |
| 2 | 0 | 14 | 12 | 26 |
| 3 | 0 | 0 | 16 | 16 |

A distribuição cai com a ordem, como deve. As quatro confianças altas de primeira ordem são
todas efeitos **já observáveis hoje** com caso real: `e1` (separação de memória por projeto já é
produto), `e2` (ASI06 e MemoryTrap), `e5` (LongMemEval-V2 e BEAM em operação) e `e7` (SWE-bench
Verified abandonado por um laboratório de fronteira). Nenhuma terceira ordem tem confiança acima
de baixa — e isso não é modéstia, é o que a distância causal permite afirmar.

Uma observação sobre a relação entre `sinal` e `confianca`, que a skill exige tratar
separadamente: `e5.1` tem **sinal forte** (a disputa Mem0 × Zep é artefato verificável hoje) e
**confiança média** (o mecanismo é sólido, mas a consequência — perda generalizada de valor
comparativo — depende de compradores mudarem de comportamento). `e11.1.1` tem **sinal médio** (uma
aquisição já ocorreu) e **confiança baixa** (uma aquisição não faz tendência). São eixos
diferentes, e o mapa os trata assim.

## 8. O que a máquina errou

Eu sou a máquina. Sete itens específicos desta rodada:

**1. Errei a data do artigo 12 antes de abrir a fonte.** Três páginas secundárias afirmavam que
as obrigações do Anexo III valem desde **2 de agosto de 2026** — uma delas com a frase "*nada
passou para a lei, então agosto de 2026 continua sendo a data exigível*". Eu tinha isso anotado
como fato. Ao abrir o texto do artigo no portal do AI Act, a leitura indica **2 de dezembro de
2027** (Anexo III) e **2 de agosto de 2028** (Anexo I). Não sei qual está certa — pode haver
diferença entre a data de aplicabilidade da obrigação e a data de exigibilidade da sanção — e por
isso o documento registra as duas e usa a conservadora. Se eu não tivesse aberto, teria escrito
uma data errada com ar de certeza.

**2. Quase publiquei um ranking de memória que não existe.** A busca devolveu "Zep 94,7%, Mem0
92,5%" formatado como leaderboard, e eu ia usar. Ao abrir a fonte, ela mesma adverte que nenhum
desses números foi gerado com o mesmo conjunto de modelos, modelo-juiz ou configuração de
recuperação. O ranking era uma ficção de formatação — uma tabela sugere comparabilidade que os
dados não têm.

**3. Ia datar o texto do Zep como 2026.** O artigo de refutação tem data de publicação de **maio
de 2025** com correção em junho de 2026; a busca o apresentou junto com material de 2026. A
diferença importa: a disputa é mais antiga do que o mapa sugeriria.

**4. Ia datar o Holistic Agent Leaderboard como 2026.** É de **13 de outubro de 2025**. A busca o
trouxe misturado a resultados de 2026, e o número (21.730 execuções, US$ 40 mil, 2,5 bilhões de
tokens) é atraente o bastante para eu não conferir a data.

**5. Citei de segunda mão um fato importante e declarei isso.** A decisão da OpenAI de parar de
reportar o SWE-bench Verified em fevereiro de 2026 é um pilar da raiz B, e a fonte primária
retornou HTTP 403. Optei por apoiar a raiz nos números da Epoch AI, que abriu, e registrar o fato
da OpenAI como não verificado. O risco residual: se a leitura secundária estiver errada sobre o
motivo (contaminação × scaffolding), a §4.2 exagera um componente.

**6. Usei "34% das organizações aplicam controles de grau humano a agentes" num rascunho, vindo
de outro mapa.** Esse número apareceu no mapa do tema 2 desta mesma série, com fonte aberta lá.
Aqui eu **não abri a fonte**, e por isso ele saiu do corpo do documento e está na §12.5. Um número
verificado numa rodada não é um número verificado nesta.

**7. Deixei fora um número que parecia útil e era ruim.** O salário médio de "engenheiro de
avaliação de IA" (US$ 53,63/hora) vem de agregador de vagas, que é fonte de baixa confiabilidade
para qualquer coisa que não seja o próprio agregador. Ele sustentaria bem a frase "o ofício
existe", e é exatamente por isso que era perigoso.

**Um erro de tipo diferente, que não é de fato e sim de forma:** em duas passagens eu escrevi
"a indústria" e "o mercado" como sujeito de frase, o que é o oposto do que a skill exige (sujeito
concreto). Corrigi no bloco da roda, onde a regra é dura; na prosa, sobreviveram algumas.

## 9. Três cenários para 2031

**Provável — a confiança virou um custo administrado.**
Em 2031 toda ferramenta agêntica séria grava trajetória por padrão, num esquema derivado das
convenções de GenAI do OpenTelemetry, e o traço é o objeto que se olha quando algo dá errado. A
avaliação é feita por juiz-máquina, com ficha do juiz anexada, e um punhado de julgamentos
humanos serve de calibração — o humano saiu de avaliar o produto e passou a avaliar o avaliador.
O benchmark público perdeu a função de decidir compra; quem compra traz o próprio conjunto de
casos, e montá-lo virou a parte cara. A memória atravessa a sessão em quase todo produto, com
separação por projeto e uma tela editável, e ninguém resolveu portabilidade: sair custa o que se
acumulou. Em setor regulado, memória persistente para dado pessoal é exceção documentada, não
padrão. A auditoria de IA existe como serviço e como credencial, e o vocabulário dela é o da
auditoria de TI: controle, risco, evidência. Quem projeta interação está desenhando as telas
dessa camada — memória, trajetória, justificativa — sem ter participado da definição do que elas
precisam mostrar.
*Sinal precoce de que estamos entrando nele:* a primeira norma técnica de registro publicada, e a
primeira compra corporativa grande decidida por avaliação no próprio dado em vez de número de
benchmark.

**Desejável — a régua virou bem público.**
Em 2031 existe pelo menos um avaliador independente, financiado por quem compra e não por quem
vende, publicando avaliação comparável de memória e de trajetória com método aberto e kappa
corrigido por acaso. O formato de traço é aberto e exportável por contrato, de modo que trocar de
fornecedor não apaga o histórico de como o trabalho foi feito. A memória tem procedência: cada
item guarda de onde veio, e existe prova de apagamento verificável, o que resolveu a contradição
entre conservar e apagar sem sacrificar nenhum dos dois. Quem projeta mídia e interação entrou na
definição da régua: "o usuário entendeu?" e "o usuário conseguiu corrigir?" são critérios de
avaliação e não apenas de usabilidade. E existe um caminho barato para quem é pequeno — uma
avaliação mínima viável que uma equipe de três pessoas consegue rodar.
*O que teria de ser feito para chegar lá:* alguém precisa financiar o avaliador independente antes
de existir mercado para ele; e o formato de exportação precisa entrar em contrato-padrão de
compra pública, que é o único ator com poder de compra e sem interesse em travamento.
*Sinal precoce:* um consórcio de compradores — não de fornecedores — anunciando uma régua comum.

**Indesejável — a auditoria confirma o que não pode ver.**
Em 2031 existe a obrigação e existe o ritual. Os fornecedores entregam um traço redigido, sem
prompt de sistema, sem ferramentas e sem custo, suficiente para o relatório e insuficiente para
descobrir qualquer coisa. A avaliação é feita por juiz-máquina do mesmo fornecedor do sistema
avaliado, com concordância bruta publicada e sem correção por acaso, e os números são altos e
comparáveis entre si porque medem a mesma coisa duas vezes. A memória é o ativo, é da plataforma,
e o custo de sair cresceu o bastante para que ninguém saia — o que significa que a ameaça de sair
deixou de disciplinar o fornecedor. A auditoria existe, é cara, é obrigatória, e certifica a
forma da decisão sem alcançar o mérito. O resultado é pior do que não ter auditoria, porque agora
há um selo.
*Sinal precoce dele:* o primeiro relatório de conformidade de IA publicado em que a seção de
evidência é composta inteiramente de declarações do fornecedor; e a primeira régua de mercado
operada por quem também vende o sistema medido.

## 10. O experimento

**Caixa-preta** — um gravador de trajetória com replay determinístico, dois juízes-máquina de
famílias diferentes e um painel de discordância.

### O que é

Três peças pequenas, todas construíveis hoje com ferramenta aberta:

1. **Gravador.** Um proxy que fica entre o agente e o mundo e grava tudo o que passa: chamada de
   modelo, chamada de ferramenta, argumento, resposta, custo, tempo. Grava no esquema `gen_ai.*`
   do OpenTelemetry, para não inventar formato. A técnica está demonstrada — interceptação na
   camada de transporte, com replay isolado sem rede — e existe implementação aberta em Go para
   referência.
2. **Visualizador.** A parte de design de interação, e a mais interessante da turma: uma
   representação navegável da trajetória. Linha do tempo, passos colapsáveis, custo por passo,
   ramos abandonados visíveis, e um marcador para "aqui o agente leu algo que veio da memória".
   A pergunta de projeto é: **como mostrar cem passos sem exigir que se leiam cem passos?**
3. **Painel de discordância.** Duas medições, lado a lado: (a) a mesma tarefa rodada duas vezes,
   mostrando onde as duas trajetórias divergiram; (b) a mesma trajetória julgada por dois
   juízes-máquina de famílias diferentes, mostrando onde os dois discordam. O painel não mostra
   nota: mostra **desacordo**.

### Que pergunta sobre o futuro ele ajuda a responder

Três, na ordem em que o mapa precisa delas:

- **Quanto da avaliação que fazemos hoje sobrevive quando medimos o avaliador?** (raiz D)
- **O que o caminho mostra que a saída esconde?** (raiz B) — a hipótese testável é a do Holistic
  Agent Leaderboard: comportamentos que não aparecem na taxa de acerto aparecem no log.
- **O que a memória faz quando ninguém está olhando?** (raiz A) — testável escrevendo uma nota
  inócua na memória na sessão 1 e observando se, e quando, ela reaparece influenciando a decisão
  na sessão 3.

### Que tecnologia emergente ele usa, e por que não dá com a madura

Usa três coisas que não existiam há dois anos: o **esquema `gen_ai.*`** (sem ele, cada ferramenta
grava o seu jeito e não há como comparar traço entre agentes); o **replay determinístico** com
interceptação em transporte (sem ele, cada rodada de avaliação custa inferência, e o experimento
não cabe numa aula); e o **juiz-máquina com métrica corrigida por acaso** (sem ele, a única
alternativa é julgamento humano em volume, que uma turma de quatorze pessoas não produz).

Com tecnologia madura dá para fazer o gravador — proxy e log são tecnologia dos anos 1990 —, mas
não dá para fazer o painel de discordância, porque o objeto que ele compara (duas trajetórias de
um sistema não determinístico) não existia como objeto de engenharia.

### O que a turma vai fazer quando testar isso em sala

Uma sessão de noventa minutos, em quatro tempos:

1. **Quinze minutos.** Cada pessoa roda a **mesma tarefa aberta** no seu agente, com o gravador
   ligado. Tarefa sugerida: algo de mídia, com critério discutível — "resuma este material para
   um público que não é da área" ou "encontre e corrija a inconsistência entre estes dois
   documentos".
2. **Vinte minutos.** Rodamos tudo de novo. Mesma tarefa, mesma pessoa, mesmo prompt. Olhamos o
   painel: **onde as duas trajetórias divergiram?** Aposto que a divergência começa cedo e
   importa pouco na saída — e que em uma ou duas execuções importa muito. Esse é o ponto do
   exercício.
3. **Vinte e cinco minutos.** Cada pessoa julga à mão duas trajetórias de outra pessoa, sem ver a
   nota das máquinas. Depois comparamos: humanos entre si, máquinas entre si, e humanos contra
   máquinas. Calculamos concordância bruta **e** corrigida por acaso, e vemos a diferença entre
   as duas com o nosso próprio dado.
4. **Trinta minutos.** A parte de memória. Na sessão anterior, cada pessoa escreveu uma nota
   inócua na memória do seu agente ("prefiro exemplos de música brasileira"). Agora rastreamos:
   em quantas trajetórias ela apareceu, em que passo, e se a pessoa percebeu. Discussão: o que
   isso significa quando a nota não é inócua, e quando quem a escreveu não é você.

### O que seria um resultado que me faria mudar de ideia

Quatro resultados, cada um atacando uma raiz:

- **Se os dois juízes-máquina de famílias diferentes concordarem acima de κ = 0,7 na tarefa
  aberta**, a raiz D perde força: o juiz seria uma âncora razoável, e a preocupação do mapa seria
  acadêmica. (O estudo de Berkeley sugere que não, mas ele mede em benchmark, não em tarefa
  aberta de um domínio estreito — e é exatamente aí que o juiz pode ir melhor.)
- **Se as duas execuções da mesma tarefa produzirem trajetórias que divergem sem que a saída
  mude de qualidade**, então a variância não importa para o usuário, e `e8` e `e8.1` caem.
- **Se a nota plantada na memória não reaparecer em nenhuma trajetória**, ou reaparecer sempre de
  forma que a pessoa percebe, a raiz A perde a metade que trata de risco — e sobra só a metade
  econômica.
- **Se ninguém na turma achar, no traço, nada que não estivesse na saída**, a raiz B está errada
  para tarefas deste tamanho, e o mapa só vale para agentes de horizonte longo.

O experimento custa pouco: o gravador e o visualizador são trabalho de duas pessoas por duas
semanas, e o painel de discordância é uma planilha se for preciso. O que ele produz e que não
existe é **dado nosso**, com a nossa tarefa, no nosso idioma — que é precisamente o que `e7.1`
prevê que todo mundo vai ter de fazer.

## 11. Fontes

Vinte e nove fontes, todas **abertas e lidas** em 10/09/2026. As que não abriram estão na §12.4 e
não sustentam nada acima.

**Regulação e norma**

1. https://artificialintelligenceact.eu/article/12/ — texto do artigo 12 do AI Act (registro e
   log automático), seus três parágrafos e as datas de entrada em vigor. Sustenta a raiz C, `e12`
   e `e14`. *Confiabilidade:* alta para o texto legal, que é reproduzido; média para a
   interpretação de datas, que é editorial do portal e diverge da fonte 2.
2. https://www.helpnetsecurity.com/2026/04/16/eu-ai-act-logging-requirements/ — leitura
   especializada do artigo 12 aplicada a agentes: automatismo, retenção mínima de seis meses,
   penalidade de até €15 milhões ou 3% do faturamento, ausência de norma técnica, prEN 18229-1 e
   ISO/IEC DIS 24970. Sustenta `e12`, `e12.1.1` e o sinal fraco 6. *Confiabilidade:* média —
   veículo de segurança estabelecido, mas é interpretação com fonte nomeada (João Marques,
   Asqav), e diverge da fonte 1 sobre a data.
3. https://www25.senado.leg.br/web/atividade/materias/-/materia/157233 — página oficial de
   tramitação do PL 2338/2023: aprovação no Plenário em 10/12/2024, 244 emendas, remessa à Câmara
   em 17/03/2025, tramitação encerrada no Senado. Sustenta a §3.5 e `e16`. *Confiabilidade:*
   alta — é registro oficial.

**Avaliação, benchmarks e juiz-máquina**

4. https://arxiv.org/html/2606.19544v1 — Norman, Rivera e Hughes (Berkeley, 17/06/2026),
   *Reliability without Validity*: 21 modelos, 9 provedores, 3 benchmarks, ~541 mil julgamentos;
   κ deflacionado em 33,8 a 41,2 p.p.; viés de posição de 0,002 a 0,192; teste-reteste de 0,889 a
   0,992; deslocamento de até 14 posições entre benchmarks. Sustenta a raiz D, `e17` e `e19`.
   *Confiabilidade:* alta — preprint com protocolo e escala declarados; não consta revisão por
   pares.
5. https://epoch.ai/benchmarks/swe-bench-verified — operação independente do SWE-bench Verified:
   484 amostras validadas, taxa de erro estimada em 5-10%, 16 amostras excluídas, remoção do
   histórico posterior do git, atualização de scaffolding em 12/02/2026 (v2.0.0). Sustenta `e7` e
   `e7.2`. *Confiabilidade:* alta — terceiro sem produto no jogo, com metodologia publicada.
6. https://arxiv.org/abs/2510.11977 — Kapoor, Stroebl, Kirgis, Nadgir e colegas (13/10/2025),
   *Holistic Agent Leaderboard*: 9 modelos, 9 benchmarks, 21.730 execuções, ~US$ 40 mil, 2,5
   bilhões de tokens de log publicados; agentes procurando o benchmark no HuggingFace e usando
   cartão de crédito indevidamente. Sustenta a raiz B e `e6.1`. *Confiabilidade:* alta — dados e
   logs abertos. **Atenção: é de 2025, não de 2026.**
7. https://arxiv.org/abs/2602.16666 — Rabanser, Kapoor, Kirgis, Liu, Utpala e Narayanan
   (18/02/2026, revisto em 02/06/2026, ICML 2026), *Towards a Science of AI Agent Reliability*:
   doze métricas em quatro dimensões, 15 modelos em dois benchmarks, e a conclusão de que ganhos
   de capacidade produziram pouca melhoria de confiabilidade. Sustenta `e8`. *Confiabilidade:*
   alta — aceito em conferência de primeira linha.
8. https://arxiv.org/abs/2601.15322 — Khatchadourian (17/01/2026, revisto em 07/03/2026), DFAH:
   4.700+ execuções, 7 modelos, 4 provedores, 3 benchmarks financeiros; correlação r = −0,11
   entre determinismo de decisão e acurácia; modelos compactos determinísticos e imprecisos,
   modelos de fronteira entre 50 e 96% de determinismo. Sustenta `e8` e o sinal fraco 5.
   *Confiabilidade:* média-alta — preprint com escala declarada, autor único.
9. https://github.com/sierra-research/tau2-bench — repositório do τ-bench/τ²/τ³: domínios mock,
   airline, retail, telecom e banking_knowledge; v1.0.1 em julho de 2026 com avaliação de voz e
   recuperação de conhecimento; 2 mil estrelas. Sustenta a §3.3 e a lista de tecnologias.
   *Confiabilidade:* alta para o que o próprio projeto declara; o repositório **não publica
   resultados pass^k**, ao contrário do que a busca sugeria.
10. https://voker.ai/blog/the-state-of-yc-ai-agents-2026 — levantamento com empresas da Y
    Combinator (20/02/2026): 86% com agente em produção, 76% expondo a cliente, 48% como sistema
    de fundo, 89% abaixo de 10 mil conversas/mês, 38% citando avaliação como dificuldade.
    Sustenta a §3.4. *Confiabilidade:* **baixa-média** — o tamanho da amostra não é divulgado e a
    empresa vende analítica para agentes.

**Memória**

11. https://claude.com/blog/memory — memória do Claude: Team e Enterprise em 11/09/2025, Pro e Max
    em 23/10/2025; opcional, resumo editável, memória separada por projeto, modo anônimo,
    desligamento pelo administrador. Sustenta `e1` e `e1.1`. *Confiabilidade:* alta para o que o
    produto faz (é o fabricante); nula como avaliação de mercado.
12. https://mem0.ai/blog/ai-memory-benchmarks-in-2026 — tabelas de LoCoMo, LongMemEval e BEAM com
    os números por sistema e a advertência explícita de não comparabilidade. Sustenta `e5` e
    `e5.1`. *Confiabilidade:* **baixa como placar, alta como confissão** — quem publica é parte
    interessada, e o valor está justamente na ressalva que ela mesma faz.
13. https://blog.getzep.com/lies-damn-lies-statistics-is-mem0-really-sota-in-agent-memory/ —
    refutação do Zep: 65,99% reportado contra 75,14% ± 0,17 recalculado; três erros de
    configuração apontados; crítica ao próprio LoCoMo. Sustenta `e5.1`. *Confiabilidade:* baixa
    como número isolado (é o concorrente), alta como evidência de que a régua está em disputa.
    **Publicado em 06/05/2025, corrigido em 03/06/2026.**
14. https://mem0.ai/blog/state-of-ai-agent-memory-2026 — panorama do fornecedor: 21 frameworks e
    20 bancos vetoriais integrados; números de LoCoMo, LongMemEval e BEAM; projeções de Gartner e
    McKinsey reproduzidas. Sustenta a §3.3 e a §3.4. *Confiabilidade:* baixa — material de
    fornecedor com números de terceiros não verificáveis ali.
15. https://arxiv.org/abs/2605.12493 — Wu, Ji, Kawatkar, Kwan, Gu, Peng e Chang (12/05/2026),
    LongMemEval-V2: 451 questões curadas à mão, até 500 trajetórias, 115 milhões de tokens, cinco
    habilidades; melhor método em 72,5% contra 48,5% de uma linha de base com recuperação.
    Sustenta `e5` e o sinal fraco 4. *Confiabilidade:* alta — método e corpus declarados.
16. https://arxiv.org/abs/2606.24775 — Zhou, Zhou, Han, Xu, Li, Li, Xiong e Wu (23/06/2026),
    *Are We Ready For An Agent-Native Memory System?*: decomposição em quatro módulos, conclusão
    de que nenhuma arquitetura domina e de que manutenção localizada é mais eficiente que
    reorganização global. Sustenta a §3.2 e a raiz A. *Confiabilidade:* alta — trabalho de
    sistemas com comparação controlada.
17. https://arxiv.org/abs/2603.07670 — Du (08/03/2026), *Memory for Autonomous LLM Agents*:
    memória como laço escrever–gerenciar–ler, taxonomia em três dimensões, cinco famílias de
    mecanismo, e a virada de benchmarks estáticos para testes agênticos multissessão. Sustenta a
    §3.2 e `e5`. *Confiabilidade:* média-alta — levantamento de autor único.
18. https://www.trychroma.com/research/context-rot — Hong, Troynikov e Huber (Chroma, 14/07/2025):
    18 modelos, comprimento isolado com dificuldade constante, degradação contínua, e o achado de
    que modelos vão melhor em palheiro embaralhado que em palheiro estruturado. Sustenta a raiz A
    (por que agora) e a Razão 3 do pré-mortem. *Confiabilidade:* média-alta — método publicado, e
    a Chroma vende banco vetorial, o que é interesse na direção do resultado.

**Segurança de memória**

19. https://arxiv.org/html/2606.04329v1 — Dash, Ge, Jain, Shah e Shang (Huawei/Waterloo,
    03/06/2026): seis classes de ataque, dois sistemas, quatro canais de escrita em memória, nove
    vulnerabilidades estruturais; taxa média de sucesso de 34,25% num sistema e 66,67% no outro;
    defesa de injeção de prompt detectando 67,67% dos ataques de sinal forte e **42,50%** dos de
    sinal fraco. Sustenta `e2` e `e2.1`. *Confiabilidade:* alta — protocolo e versões declarados.
20. https://arxiv.org/abs/2604.16548 — Lin, Hao, Fu, Cui, Chen, Li, Li e Xiong (17/04/2026,
    revisto em 11/06/2026), levantamento de segurança de memória de longo prazo: seis fases do
    ciclo de vida (escrever, armazenar, recuperar, executar, compartilhar e propagar, esquecer e
    reverter), quatro objetivos de segurança, e a recomendação de ancorar em procedência no
    momento da escrita. Sustenta a raiz A e `e2.2`. *Confiabilidade:* alta — levantamento amplo
    com estrutura explícita.
21. https://genai.owasp.org/2025/12/09/owasp-top-10-for-agentic-applications-the-benchmark-for-agentic-security-in-the-age-of-autonomous-ai/
    — anúncio oficial do Top 10 for Agentic Applications (09/12/2025), assinado por John
    Sotiropoulos, Keren Katz e Ron F. Del Rosario, com ASI01 a ASI10 e ASI06 = Memory & Context
    Poisoning. Sustenta `e2`. *Confiabilidade:* alta — documento normativo de referência do setor.
22. https://genai.owasp.org/2026/05/13/memory-is-a-feature-it-is-also-an-attack-surface/ — Idan
    Habler (Cisco), 13/05/2026, caso MemoryTrap contra o Claude Code, alcançando memória
    persistente, hooks globais e prompt de sistema. Sustenta `e2` e o sinal fraco 2.
    *Confiabilidade:* alta para o caso relatado; é pesquisa de fornecedor de segurança, com o
    viés de escala que isso implica.

**Observabilidade, formato e reprodução**

23. https://github.com/open-telemetry/semantic-conventions-genai — repositório próprio das
    convenções semânticas de GenAI: spans, métricas e eventos para clientes GenAI, para o Model
    Context Protocol e para convenções de provedor. Sustenta `e11` e o sinal fraco 3.
    *Confiabilidade:* alta — é a fonte normativa; **não declara nível de estabilidade na página
    inicial**, o que por si é informação.
24. https://opentelemetry.io/docs/specs/semconv/gen-ai/ — a página antiga, hoje só um aviso de
    que as convenções de GenAI mudaram de repositório. Sustenta a afirmação da separação.
    *Confiabilidade:* alta — é o próprio projeto declarando a mudança.
25. https://github.com/langfuse/langfuse — plataforma aberta de engenharia de LLM: 34,4 mil
    estrelas, licença MIT, integração com OpenTelemetry, e a declaração "*desde janeiro de 2026
    fazemos parte da ClickHouse*". Sustenta a §3.1, `e11.1` e `e11.1.1`. *Confiabilidade:* alta
    para os fatos do repositório.
26. https://www.braintrust.dev/articles/agent-observability-complete-guide-2026 — guia comercial
    de observabilidade de agentes; usado aqui **pelo que ele não diz**: não quantifica custo por
    span, política de amostragem nem retenção longa, e o único número de retenção citado no
    material do setor é a janela de 15 dias de um concorrente. Sustenta `e10` por ausência.
    *Confiabilidade:* baixa — material de fornecedor.
27. https://arxiv.org/abs/2607.16200 — Mudasiru (30/04/2026), *Deterministic Replay for AI Agent
    Systems* (`agrepl`): interceptação em transporte por proxy, replay isolado sem rede,
    fidelidade F = 1,0 em 250 instâncias sobre 5 cargas, redução mediana de 98,3% na latência por
    passo; Go, binário estático, MIT. Sustenta `e9` e `e9.1`, e é a base técnica do experimento.
    *Confiabilidade:* média-alta — preprint de autor único, mas com código e números reproduzíveis.

**Avaliação com consequência e profissionalização**

28. https://finance.yahoo.com/news/deepseek-outperforms-ai-rivals-real-093000567.html — Alpha
    Arena da Nof1: US$ 10 mil de capital real por modelo, seis modelos nomeados, contratos
    perpétuos na Hyperliquid, temporada até 03/11/2025, DeepSeek em +10,11% e GPT-5 em −39,73% num
    corte intermediário; fundadores Jay Azhang e Matthew Siper. Sustenta `e21` e o sinal fraco 1.
    *Confiabilidade:* média — reportagem de agência sobre um experimento pequeno e em curso à
    época; os percentuais são de um instante, não de fechamento.
29. https://www.isaca.org/credentialing/aaia — certificação AAIA (Advanced in AI Audit): três
    domínios e, sobretudo, o pré-requisito — CISA ativo, ou CIA/CPA/ACCA/contador registrado em
    função de auditoria ou consultoria de TI. Sustenta `e20` e `e20.1`. *Confiabilidade:* alta
    para os requisitos (é o emissor); a página **não informa data de lançamento nem número de
    certificados emitidos**, o que enfraquece qualquer alegação sobre tamanho do campo.

## 12. Anexo — o levantamento bruto

Nada aqui foi cortado por espaço. Esta seção existe para que a próxima pessoa — ou a próxima
sessão — não repita o trabalho nem herde conclusão sem ver o caminho.

### 12.1 Como esta rodada foi feita

Rodada em **modo MAPA, não interativo**, com a skill `futurizacao-giordano` v1.2.0, em
10/09/2026, na conta CIn, com acesso à web. O briefing veio completo no pedido (tema, horizonte,
público, recorte, descartes, viés, falseador, profundidade, zona de interesse), o que dispensa a
entrevista do §0 e **não** aciona o rebaixamento de confiança — mas o que o briefing não cobriu
está declarado em 12.2.

Ordem de trabalho: (1) leitura do formato da disciplina e do verificador antes de escrever
qualquer coisa; (2) leitura de uma rodada anterior da mesma série (tema 2, contenção e segurança)
para calibrar extensão e estrutura, sem reaproveitar conteúdo; (3) vinte e três buscas em
português e inglês; (4) abertura e leitura de vinte e nove fontes; (5) teste automatizado dos
vinte e nove endereços antes de escrevê-los na seção 11, com o mesmo método que o verificador
usa; (6) redação; (7) bateria do §6 sobre o mapa pronto, com alteração efetiva do bloco `roda:`;
(8) verificação.

**Tempo em que o mapa foi escrito:** uma sessão. **O que isso limita:** não houve segunda leitura
com distância, e não houve confronto com outra pessoa. As duas coisas normalmente derrubam mais
do que a auto-crítica derruba.

### 12.2 Premissas assumidas e declaradas

O briefing definiu tema, horizonte (2031), público (quem projeta mídia e interação), recorte
(global com nota sobre o Brasil), descarte inicial (o que já é comum em produto de massa), viés
(neutro) e falseador (evidência de adoção além da maioria inicial, ou de que a tecnologia não
rompe nada). **O que ele não cobriu, e eu assumi:**

1. **"Mídia e interação" inclui software de programação como mídia de trabalho.** Boa parte da
   evidência disponível sobre memória e traço vem de ferramentas de programação, porque é onde os
   agentes rodam há mais tempo. Assumi que isso é legítimo, e sinalizei quando um efeito depende
   dessa transposição (`e6.1`, `e6.2`).
2. **"Global" significa, na prática, anglófono.** Vinte e cinco das vinte e nove fontes são em
   inglês. Não achei literatura relevante em português, espanhol, francês ou mandarim sobre
   avaliação de trajetória. Isso é um limite do levantamento, não uma descrição do mundo.
3. **Trato memória e observabilidade como uma infraestrutura só.** Isso é a tese do tema, não um
   achado meu. Está nomeado como viés de método na §7.6.
4. **Não usei número de mercado como âncora de nenhum efeito.** Projeções de consultoria (Gartner,
   McKinsey, tamanhos de mercado) aparecem citadas com o nome de quem as reproduziu, e nunca
   sustentam um `prazo` ou uma `confianca`.
5. **A confiança global do mapa é `media`.** Alta seria indefensável com três fontes primárias
   inacessíveis e uma divergência de dois anos numa data regulatória central. Baixa seria
   injusta com vinte e nove fontes abertas, das quais dez são trabalho acadêmico com método
   declarado.

### 12.3 As buscas — o que cada uma deu

Vinte e três buscas. Em ordem de execução:

1. `OpenTelemetry GenAI semantic conventions agent spans stable 2026` — deu a separação de
   repositório em junho de 2026 e o estado experimental dos spans de agente. **Usado.**
2. `agent memory benchmark LOCOMO Mem0 Letta Zep 2026` — deu o campo de benchmarks e a disputa.
   **Usado.**
3. `Nof1 Alpha Arena LLM trading real money results` — deu a temporada 1, os números e, o que
   importa mais, a informação de que parou. **Usado.**
4. `tau2-bench agent evaluation benchmark 2026 results` — deu os domínios e a existência do τ³.
   Os números de leaderboard que a busca ofereceu (GLM-5.2 em 99,1%) **não foram usados**, porque
   vêm de um agregador comercial e não confirmei no repositório.
5. `Langfuse open source LLM observability adoption 2026 funding GitHub stars` — deu a aquisição
   pela ClickHouse. Os números de estrelas variavam (21 mil, 24,6 mil, 31,5 mil) conforme a
   página; usei o do repositório (34,4 mil). **Usado com correção.**
6. `LLM-as-a-judge reliability bias 2026 study agreement human` — deu o estudo de Berkeley.
   **Usado.**
7. `EU AI Act automatic logging record-keeping article 12 high-risk August 2026` — deu a data
   errada em três páginas. **Usado como alerta**, não como fato (ver §8, item 1).
8. `ChatGPT memory Claude memory portability export lock-in 2026` — deu um campo de páginas de
   baixa qualidade (blogs de ferramentas de migração, todos com interesse no tema). **Quase nada
   usado**: só a afirmação estrutural de que não há API de exportação, que é verificável por
   ausência.
9. `Brasil PL 2338 regulamentação inteligência artificial 2026 rastreabilidade registro auditoria
   ANPD` — deu a pista da ANPD e de dois PLs novos (762/2026 e 704/2026). **Parcialmente usado**:
   só a parte confirmada na página do Senado.
10. `agent memory poisoning attack persistent memory injection research 2026` — deu uma safra
    grande de trabalho acadêmico. **Usado.**
11. `AI audit profession third-party assurance market 2026 certification auditors` — deu a AAIA e
    projeções de mercado. **Usado só a AAIA**; as projeções vêm de relatório vendido.
12. `SWE-bench verified contamination criticism benchmark validity 2026` — deu os números de
    contaminação e a decisão da OpenAI. **Usado parcialmente** (a fonte primária não abriu).
13. `"eval engineer" AI evaluation job role hiring 2026 new profession` — deu o rótulo, as datas e
    um salário de agregador. **Usado só o rótulo.**
14. `deterministic replay LLM agent trace reproducibility tooling 2026` — deu o `agrepl` e o
    DFAH. **Usado.**
15. `context engineering context rot token reduction agent long context 2026` — deu o trabalho da
    Chroma e, mais importante, a contra-evidência do cache de prompt. **Usado, inclusive contra o
    mapa.**
16. `GAIA2 Meta Agents Research Environments benchmark agent evaluation` — deu a plataforma e os
    números (800 cenários, 1.120 com aumentações, 10 universos, 101 ferramentas). **Não usei os
    números no corpo** porque não abri a fonte primária; o nome entra na lista de tecnologias.
17. `agent trace storage cost observability sampling traces expensive LLM logging volume 2026` —
    deu a estrutura de custo por span e a retenção de duas semanas a um mês. **Usado em `e10`.**
18. `arxiv survey agent memory 2026 taxonomy long-term memory LLM agents` — deu os levantamentos.
    **Usado.**
19. `Braintrust LangSmith evals platform funding 2026 enterprise adoption` — deu os US$ 80 milhões
    da Braintrust. **Usado**; as listas de clientes e o tamanho de mercado, não.
20. `Brasil observabilidade de IA 2026 empresas adoção agentes LLM produção pesquisa` — deu só
    material secundário brasileiro. **Usado apenas como descrição qualitativa**, com a
    confiabilidade declarada.
21. `agent evaluation evals gate CI production teams survey 2026 percentage no evals` — **não deu
    o que eu procurava**: não achei número de quantos times têm avaliação bloqueando deploy. Levou
    ao levantamento da Voker, que responde outra pergunta. Registro a busca frustrada.
22. `right to be forgotten / direito ao esquecimento AI agent memory deletion GDPR LGPD 2026` —
    deu o campo da contradição conservar × apagar, inclusive a ação coordenada de 32 autoridades
    europeias sobre prova de exclusão. **Usado como mecanismo de `e13`, sem citar número**, porque
    não abri as fontes.
23. `Voker State of YC AI Agents 2026 survey` — deu o levantamento. **Usado, com a confiabilidade
    rebaixada.**

**Duas buscas que eu deveria ter feito e não fiz**, e registro como dívida: (a) o estado das
ferramentas que a turma levantou (`projectmem`, `deja-vu`, `memtrace`, `lean-ctx`, `vibe-log`,
`agent-qa`, `Rath`, `Parseable`, `Agnost`, `agent-inspect`) — não verifiquei nenhuma delas, e por
isso **nenhuma aparece no corpo do documento**, embora estejam no enunciado do tema; (b) literatura
de HCI sobre interface de memória e de trajetória, que é o ângulo mais direto para o público deste
mapa e que eu cobri por inferência, não por fonte.

### 12.4 Fontes que não abriram

Quatro, todas relevantes, nenhuma sustentando nada acima:

1. `https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/` — **HTTP 403**. O que a
   leitura secundária dizia, e que fica como **não verificado**: que a OpenAI parou de reportar o
   SWE-bench Verified em fevereiro de 2026 citando contaminação e o impacto desproporcional do
   andaime, com divergência de 12 pontos entre arreios de teste; que uma auditoria manual de 138
   falhas do o3 mostrou que 59,4% vinham de defeito no teste e não do modelo; e que a recomendação
   foi descontinuar o reporte. Se alguém abrir, vale conferir o número 59,4% e a autoria da
   auditoria.
2. `https://tiinside.com.br/01/04/2026/ai-explicavel-deve-levar-observabilidade-de-llm-a-50-dos-projetos-de-genai-ate-2028-diz-gartner/`
   — **HTTP 403**. Alegação não verificada: que o Gartner projeta observabilidade de LLM em 50%
   das implementações de IA generativa até 2028, contra 15% hoje. Seria o melhor número de adoção
   do documento inteiro. **Não usado.**
3. `https://www.gov.br/anpd/pt-br/assuntos/noticias` — a página carrega por JavaScript e devolve
   só a moldura. Alegação não verificada, vinda de leitura secundária: que a ANPD publicou em
   dezembro de 2025 um mapa de temas prioritários para 2026-2027 com IA entre quatro eixos de
   fiscalização, e programou vinte fiscalizações específicas de IA. **Isso é o que rebaixou a
   confiança de `e16` de alta para média** (§7.7).
4. `https://genai.owasp.org/resource/agentic-ai-top-10-risks/` — **HTTP 404**. O conteúdo foi
   obtido pelo anúncio oficial de 09/12/2025, que abriu (fonte 21).

Registro também que `https://arxiv.org/pdf/2510.11977` excedeu o limite de tamanho da ferramenta
de leitura; o conteúdo foi obtido pela página de resumo (`/abs/`), que abriu.

### 12.5 Números que circularam na busca e que NÃO estão no corpo do documento

Todos verificáveis por quem quiser, nenhum usado como âncora:

- **Gartner:** 40% das aplicações empresariais integradas a agentes até o fim de 2026, contra
  menos de 5% em 2025 — reproduzido por fornecedor de memória, não conferido na fonte.
- **Gartner:** observabilidade de LLM em 50% dos projetos de IA generativa até 2028, contra 15%
  hoje — fonte não abriu.
- **McKinsey:** 23% das organizações escalando IA agêntica em ao menos uma função, 39% ainda
  experimentando — reproduzido por fornecedor.
- **Mercado de observabilidade de LLM:** US$ 2,69 bilhões em 2026, US$ 9,26 bilhões em 2030,
  36,2% ao ano — vindo de página comparativa comercial.
- **Braintrust:** avaliação de US$ 800 milhões na série B — só a soma captada (US$ 80 milhões) foi
  usada, porque avaliação privada é declaração de parte.
- **34% das organizações aplicam controles de segurança de grau humano a agentes** — número usado
  no mapa do tema 2 desta série, com fonte aberta lá. **Não abri a fonte nesta rodada**, então
  ficou fora do corpo. Ver §8, item 6.
- **Salário de engenheiro de avaliação de IA:** média de US$ 53,63/hora, faixa de US$ 43,27 a US$
  62,26 — agregador de vagas.
- **τ²-Bench Telecom:** GLM-5.2 com 99,1%, JT-35B-Flash com 99,1%, GLM-4.7-Flash com 98,8% —
  agregador comercial, não confirmado no repositório da Sierra.
- **GAIA2:** 800 cenários verificáveis, 1.120 com aumentações, 10 universos, 101 ferramentas —
  fonte primária não aberta nesta rodada.
- **Consistência de juiz:** 86% intra-juiz e 76% inter-juiz a temperatura 1; mesma-resposta acima
  de 95% a temperatura 0 caindo a 70% a temperatura 1 — vindos de resumo de busca sobre trabalhos
  que **não abri individualmente**. Usei apenas a formulação qualitativa em `e17`, sem atribuir os
  números a uma fonte da seção 11.
- **Brasil:** 75% dos executivos esperando agentes atuando de forma independente até o fim de
  2026; US$ 3,4 bilhões de investimento previsto em implementação de IA — material secundário
  brasileiro sem metodologia publicada.
- **Ataques de envenenamento de memória com 80%, 95% e 99,8% de sucesso; MINJA com ~98% de
  injeção** — vindos de resumo de busca. Usei apenas os números do trabalho que **abri**
  (34,25% e 66,67%), que são bem menores. A diferença entre os dois conjuntos é instrutiva e vale
  investigação: provavelmente mede coisas diferentes (sucesso de escrita contra sucesso de
  efeito).

### 12.6 A divergência de datas do artigo 12, por extenso

Vale registrar porque é o ponto mais frágil da raiz C.

- **Leitura A** (portal do AI Act, fonte 1): as obrigações do artigo 12 entram em vigor em **2 de
  dezembro de 2027** para sistemas de alto risco do Anexo III, e em **2 de agosto de 2028** para
  os do Anexo I.
- **Leitura B** (cobertura especializada de abril de 2026, fonte 2): as obrigações do Anexo III
  valem a partir de **2 de agosto de 2026**, com discussão pública de adiamento para dezembro de
  2027; e a frase textual do material é que, como nada foi aprovado até ali, agosto de 2026
  continuava sendo a data exigível.

**Hipótese de reconciliação, não verificada:** as duas podem estar certas sobre coisas diferentes
— uma sobre a aplicabilidade geral do regulamento a sistemas de alto risco, outra sobre a
exigibilidade específica do dispositivo após os atos de execução e as normas harmonizadas. Não
consegui fechar isso com as fontes desta rodada. **O mapa usa a data mais conservadora (2027-2028)
em todos os prazos da raiz C**, o que empurra `e12` e `e14` para 2029 pela classe de referência do
GDPR (de obrigação escrita a efeito visível, ~5 anos, aqui comprimido para ~2 porque a
infraestrutura já existe).

### 12.7 Os efeitos cortados, com o motivo

**Cortados pela bateria do §6** (os três do registro de alterações, §7.7):

1. *"Escolas e universidades passam a proibir memória persistente em trabalho de aluno."* — Efeito
   proibido pela skill ("formação reorganiza o currículo") sem nome de instituição, sem mecanismo
   específico e sem sinal observável. Serviria para qualquer tema deste semestre. **Se alguém
   quiser recuperá-lo**, precisa nomear a instituição, a norma e o que exatamente ela proíbe.
2. *"Surge a profissão de engenheiro de trajetória."* — Efeito proibido ("surge uma nova
   profissão") sem vaga, sem rótulo e sem credencial observáveis. Sobreviveu na forma nomeada e
   verificável em `e20` (engenheiro de avaliação, e a AAIA).
3. *"Reguladores criam uma categoria jurídica nova para agentes."* — Efeito proibido ("reguladores
   criam categoria nova") sem regulador nomeado. Sobreviveu como `e16`, com regulador e via
   nomeados.

**Cortados antes da bateria, na montagem da roda:**

4. *"O custo de inferência da avaliação cai e a avaliação vira contínua."* — Descartado pelo teste
   da causa solta (§3, regra 10): aconteceria do mesmo jeito por barateamento geral de modelo, sem
   nenhuma das quatro raízes. Não deriva daqui.
5. *"Empresas passam a exigir certificação ISO para fornecedores de IA."* — Mesmo teste: decorre de
   qualquer tecnologia entrando em compras corporativas, não desta.
6. *"A memória do agente vira alvo de pedido de acesso a dados pessoais."* — Não cortado por ser
   falso, e sim por ser **o mesmo efeito que `e13` visto de outro ângulo**: viola a regra de parada
   (não há troca de ator nem de mecanismo). Incorporado ao mecanismo de `e13`.
7. *"Ferramentas de observabilidade passam a oferecer detecção de envenenamento de memória."* —
   Cortado por ser produto previsível, não efeito: é `e2.1` com nome comercial.
8. *"A avaliação de agentes passa a exigir hardware dedicado."* — Cortado por falta de qualquer
   evidência: não achei nada que sustentasse, e escrever teria sido inventar.
9. *"O traço de agente vira objeto de treinamento para o próximo modelo."* — **Este eu lamento
   cortar**, e registro para quem quiser puxar: é plausível (o HAL publicou 2,5 bilhões de tokens
   de log justamente para isso), tem mecanismo, e criaria um ciclo interessante — o registro feito
   para auditar vira o dado que melhora o auditado. Cortei porque não consegui ancorar num caso
   comercial, e porque ele pertence tanto ao tema 1 (o ofício de programar) quanto a este. **É a
   melhor pista deixada nesta rodada.**

### 12.8 Caminhos abandonados

- **Tentei montar um quinto ramo sobre "avaliação como mídia"** — a ideia de que o placar público
  de modelos (arenas, leaderboards) já é um gênero editorial com audiência, e que quem projeta
  mídia deveria olhá-lo como tal. Abandonei porque não consegui ligá-lo a nenhuma das quatro
  raízes por mecanismo, e porque ele é mais sobre comunicação de ciência que sobre a
  infraestrutura de confiança. **Fica como tema possível para outra pessoa.**
- **Tentei usar o τ-bench e o GAIA2 como evidência de que a avaliação já migrou para trajetória.**
  Abandonei porque, ao abrir o repositório do τ-bench, ele mede sobretudo **estado final do banco
  de dados e conformidade com política**, não a trajetória em si; e porque não abri a fonte
  primária do GAIA2. A migração para trajetória está melhor sustentada pelo Holistic Agent
  Leaderboard, que analisou log, do que por qualquer benchmark.
- **Tentei quantificar quanto custa guardar traço completo.** Nenhuma das fontes comerciais
  publica preço por span em condição comparável, e as que publicam camada gratuita o fazem em
  unidades diferentes (gigabytes processados, número de traços, número de spans, dias de
  retenção). Desisti e registrei `e10` apoiado na estrutura de cobrança, não em número.
- **Considerei tratar "avaliação" e "memória" como dois mapas separados**, com uma seção de
  interface entre eles. Abandonei porque o enunciado do tema é explícito em tratá-los como uma
  infraestrutura só, e porque a convergência 1 da §5.3 só aparece quando se olha junto. Mas
  **registro que essa foi uma escolha, não uma constatação** — está na §7.6 como viés de método.
- **Considerei incluir a dimensão de custo ambiental da avaliação duplicada** como efeito próprio,
  para não deixar a categoria ecológica do STEEP vazia. Não escrevi porque não achei um único
  número que a sustentasse. Categoria declarada vazia na §5.5, o que é a resposta honesta.

### 12.9 Saída do verificador

Executado em 10/09/2026 com `--links`, sobre este arquivo:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 21 (frontmatter diz 21)
efeitos ordem 2: 26 (frontmatter diz 26)
efeitos ordem 3: 16 (frontmatter diz 16)
prazo > horizonte (2031) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 2 [('e3.1.1', 2032), ('e17.2.1', 2032)]
confiança ordem 1: alta 4 · media 15 · baixa 2
confiança ordem 2: alta 0 · media 14 · baixa 12
confiança ordem 3: alta 0 · media 0 · baixa 16
links da seção 11: 29/29 respondem (frontmatter diz fontes: 29)
RESULTADO: ok
```

**Leitura da saída, item a item:**

- **`frontmatter: 18/18 campos`** e **`títulos literais: 12/12`** — o documento está no formato da
  disciplina, sem título trocado.
- **`raízes: 4`, `ordem 1: 21`, `ordem 2: 26`, `ordem 3: 16`** — batem com o frontmatter. Os
  contadores foram corrigidos **no frontmatter**, não no texto: a primeira execução acusou
  `ordem 3: 16 (frontmatter diz 15)`, porque eu havia contado a terceira ordem da raiz A a menos.
  O erro era meu, na contagem à mão; o texto estava certo.
- **`prazo > horizonte em ordens 1-2: 0`** — nenhum efeito de primeira ou segunda ordem escapa da
  janela de 2031, como a regra exige.
- **`prazo > horizonte em ordem 3: 2 [('e3.1.1', 2032), ('e17.2.1', 2032)]`** — permitido, e
  declarado por extenso na §5.4 com o motivo.
- **`confiança ordem 1: alta 4 · media 15 · baixa 2` / `ordem 2: alta 0 · media 14 · baixa 12` /
  `ordem 3: alta 0 · media 0 · baixa 16`** — a distribuição cai com a ordem. Nenhuma terceira
  ordem acima de baixa.
- **`links da seção 11: 29/29 respondem`** — os vinte e nove endereços foram testados antes de
  serem escritos, com o mesmo método do verificador, e nenhum foi incluído sem responder. As
  quatro fontes que **não** abriram estão na §12.4 e fora da seção 11, de propósito.
- **`RESULTADO: ok`**
