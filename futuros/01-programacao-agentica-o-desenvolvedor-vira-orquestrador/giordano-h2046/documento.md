---
tema: "Programação agêntica: o desenvolvedor vira orquestrador"
slug: programacao-agentica-o-desenvolvedor-vira-orquestrador
autor_login: grec
zona_de_interesse: Agentes
data: 2026-09-12
horizonte: 2046
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 15
efeitos_ordem_2: 22
efeitos_ordem_3: 13
tecnologias_citadas: [Claude Code, Codex CLI, Cursor, GitHub Copilot, Cline, Aider, OpenCode, Gemini CLI, AWS Kiro, GitHub Spec Kit, Model Context Protocol, Agent Skills, SKILL.md, agents-cli, three-man-team, oh-my-agent, OpenAgentsControl, HarnessRouter, vibe-log, claude-tap, SWE-Bench Pro, Terminal-Bench, SBOM, DO-178C, IEC 62304]
fontes: 15
confianca: media
experimento: "Banco de revisão às cegas — 20 pull requests, metade de agente, cronometrados pela turma"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Escrever código deixou de ser o passo caro; verificá-lo passou a ser. A medida está feita: num
levantamento de 8,1 milhões de pull requests em 4.800 times e 42 países, o PR gerado por IA
espera mais de 16 horas até alguém pegá-lo, contra cerca de 200 minutos do PR não assistido, e
é incorporado em 32,7% das vezes contra 84,5%. O mapa deriva disso três rupturas — o ciclo
fechado de execução, em que o agente lê, edita, testa e propõe; a instrução empacotada
(skill, harness, especificação) virando artefato versionado que compete com o código pelo posto
de fonte da verdade; e a responsabilidade estrita sobre software chegando, por instrumento
datado, exatamente quando a autoria humana do código deixou de ser rastreável. Até 2046 as
consequências não são de ferramenta: o projeto aberto fecha a porta da frente porque triar
passou a custar mais do que a contribuição vale; o degrau em que se formava um profissional
desaparece antes que outro seja construído; a dívida técnica muda de natureza, de código mal
escrito para código que ninguém leu; e o mercado de software se parte em duas economias, uma
auditada e cara, outra abundante e sem garantia. O freio do mapa não é técnico nem cultural — é
jurídico e securitário, e tem data. Para quem projeta mídia e interação, o efeito mais direto é
que a peça deixa de ser a entrega: entrega-se a peça **e** a instrução que a regenera.

## 2. O tema

Programação agêntica é o arranjo em que um modelo de linguagem opera um ciclo fechado sobre um
repositório: lê o código, planeja, edita vários arquivos, executa os testes, lê o que falhou,
corrige e abre o pull request. O humano entra antes (especificando) e depois (verificando e
respondendo pelo resultado), não no meio. Isso é diferente, em espécie e não em grau, do
autocompletar de IDE e do chat que explica código — nos dois casos anteriores o humano continua
sendo quem executa cada passo.

**Onde encosta em mídia e interação.** Em três lugares. O primeiro é banal e importante: a
interface de trabalho de quem constrói produto digital mudou de lugar, do editor para o
terminal, e a unidade de interação deixou de ser o teclado-por-caractere para ser o
turno-de-conversa com uma máquina que age entre os turnos. Projetar essa interação — o que a
máquina mostra enquanto trabalha, como se interrompe, como se aprova, o que fica registrado — é
um problema de design de interação sem literatura estabelecida. O segundo é que a mesma
mecânica que gera código gera peça: se o design system vira instrução executável, quem o
projeta deixa de entregar um documento de referência e passa a entregar um artefato que o
agente carrega e obedece. O terceiro é o mais lento e o mais consequente: se o código deixa de
ser lido por humanos, o texto técnico — documentação, tutorial, curso, livro — perde o leitor
que o financiava, e um gênero inteiro de mídia muda de destinatário.

**Por que merece um mapa de futuro e não um levantamento de estado da arte.** Porque o estado
da arte aqui envelhece em semanas e porque as perguntas que importam não são sobre capacidade
do modelo. São sobre o que acontece com uma profissão quando o degrau de entrada some, com um
bem comum quando o custo de contribuir cai e o de triar sobe, e com um mercado quando o produto
fica abundante e a garantia fica cara. Nenhuma dessas perguntas se responde olhando um
benchmark.

**Premissas assumidas nesta rodada** (a entrevista do §0 da skill foi substituída por um bloco
`briefing:` completo, então não há rebaixamento de confiança por pular a entrevista — mas o que
o briefing não cobriu está declarado aqui e na seção 12.2): horizonte 2046; público de quem
projeta mídia e interação; recorte global com nota sobre o Brasil; descartado de início tudo o
que já é comum em produto de massa; viés neutro; nenhuma disrupção-raiz pressuposta. O
falseador declarado pelo autor — o que o faria mudar de ideia — é evidência de que a adoção já
passou da maioria inicial de Rogers, ou de que a tecnologia não rompe nada e só melhora o que
existe. Os dois viraram critérios do teste de maturidade da seção 4 e da bateria da seção 7.

**Uma advertência de escala, declarada aqui e cobrada na seção 7.** O horizonte é de vinte
anos. Todas as classes de referência disponíveis em engenharia de software — o compilador de
alto nível, o controle de versão distribuído, o pull request, a integração contínua, a nuvem
pública — cobrem de oito a catorze anos entre "funciona em demonstração" e "é o modo
majoritário". Um mapa para 2046 extrapola mais que o dobro da maior referência que tenho. Isso
não invalida o exercício; obriga a que a terceira ordem inteira saia com confiança baixa, e é
por isso que ela sai.

## 3. Onde isso está hoje

Âncora feita em 12/09/2026 com acesso à web; quinze fontes abertas e lidas, listadas na seção
11. As buscas que não deram em nada estão na seção 12.

### 3.1 O que já existe e funciona

**O ciclo fechado existe e é usado diariamente por uma minoria estabelecida.** A Stack Overflow
Developer Survey 2025 (mais de 49 mil respondentes, 177 países) mede 14,1% de desenvolvedores
usando agentes de IA no trabalho **diariamente** e 9% semanalmente — contra 37,9% que dizem não
usar e não pretender. Assistência de IA em geral é outra coisa e já é maioria: 84% usam ou
pretendem usar, 51% dos profissionais usam diariamente. A LinearB, medindo comportamento em vez
de opinião, encontra 88,3% de desenvolvedores usando IA regularmente, contra ~72% no início de
2024.

**A revisão já é o gargalo, e há número.** O relatório de benchmarks de engenharia 2026 da
LinearB analisou 8,1 milhões de pull requests de 4.800 times em 42 países. O PR gerado por IA
espera em média **mais de 16 horas** até que um revisor o pegue; o PR não assistido espera
cerca de **200 minutos**. Uma vez que a leitura começa, o de IA é mais rápido (~194 minutos
contra ~252). A diferença decisiva está no destino: **32,7% dos PRs gerados por IA são
incorporados, contra 84,5% dos não assistidos.** O tamanho também mudou: PR assistido por IA
tem ~400 linhas no percentil 75, o não assistido 157, o puramente agêntico ~290.

**A qualidade do que se acumula piorou em oito indicadores ao mesmo tempo.** A GitClear analisou
623 milhões de alterações de código entre 2023 e 2026: duplicação de bloco subiu 81% (de 40,3
para 73,0 linhas duplicadas por milhão alteradas, o maior nível já registrado); copiar-e-colar
subiu 41% e chegou a 15,7% das linhas alteradas no primeiro semestre de 2026; refatoração
(código movido) caiu de 21% das linhas alteradas em 2022 para **3,8%**; chamadas de função entre
arquivos caíram 35% desde 2023; atualização de código com mais de doze meses caiu 74%;
construções que mascaram erro subiram 47%; o churn de duas semanas subiu 15%. A leitura da
própria GitClear: a probabilidade de duplicar em vez de refatorar é hoje cerca de cinco vezes
maior que a de refatorar, quando em 2022 era o inverso por um fator de dois.

**O efeito agregado sobre entrega é ambíguo, e isso está medido.** O relatório DORA de 2026
(cerca de 5.000 profissionais e mais de 100 horas de entrevista) modela retorno positivo — cerca
de US$ 11,6 milhões contra US$ 8,4 milhões investidos numa organização de 500 pessoas, 39% de
retorno no primeiro ano — e ao mesmo tempo nomeia um "imposto de instabilidade": a taxa de falha
de mudança sobe de 5% para 6% no mesmo cenário, e a "taxa de verificação imposta pela revisão de
código gerado por IA" é o que explica a queda de produtividade dos primeiros meses. Os próprios
autores pedem que os números sejam tratados como estimativa de alta incerteza.

**A camada de instrução virou padrão de fato em nove meses.** A especificação Agent Skills foi
publicada como padrão aberto em **18 de dezembro de 2025**; até junho de 2026 cerca de **40
produtos** apareciam no mostruário oficial — Claude Code, GitHub Copilot, VS Code, Cursor,
Gemini CLI, OpenAI Codex, Goose, OpenCode, Amp, Factory, Databricks Genie Code, Snowflake Cortex
Code, Mistral Vibe, Spring AI. Diretórios comunitários indexavam cerca de **1,9 milhão de skills
públicas** em junho de 2026, com qualidade média medida em 6,2 de 12 — abundância sem curadoria.
Tecnicamente a especificação é mínima: dois campos de YAML e um corpo em Markdown, com
carregamento progressivo (o agente pré-carrega nome e descrição, e só abre a instrução inteira
quando a tarefa casa).

**A hostilidade dos projetos abertos já é política escrita, não reclamação.** O curl encerrou o
programa de recompensa por bug depois que a taxa de relatos válidos caiu abaixo de 5%; a
RubyGems recebeu dez vezes mais relatos de segurança, nenhum válido nos meses recentes, e estuda
fechar o seu; o tldraw passou a fechar automaticamente pull requests externos; o Ghostty proibiu
código gerado por IA sem aprovação prévia; o WordPress passou a exigir declaração de uso de IA;
o coletivo Jazzband, no ecossistema Python, encerrou as atividades citando o volume insustentável
de PRs e issues gerados por máquina. O tempo de revisão de um mantenedor da Ruby Central passou,
segundo ele, de "talvez 15 minutos" para potencialmente "um dia inteiro". O mesmo curl, no outro
sentido, corrigiu mais de 100 bugs com analisadores movidos a IA desde agosto de 2025 — a
tecnologia é a mesma dos dois lados da fila.

**A regulação já tem data, e ela é agora.** A Diretiva de Responsabilidade por Produto revista
da União Europeia inclui explicitamente software e sistemas de IA como produtos sujeitos a
responsabilidade objetiva, qualquer que seja a forma de entrega (dispositivo, nuvem, SaaS), e
tem de estar transposta para o direito nacional dos Estados-membros até **9 de dezembro de
2026** — daqui a menos de três meses. O deslocamento decisivo é probatório: a falta de
divulgação de prova quando ordenada cria presunção refutável de defeito, e em casos complexos
como os de IA o tribunal pode presumir defeito **e** nexo causal quando o autor demonstrar que
são prováveis. Fornecedor de componente de IA e fabricante do produto final respondem solidária
e alternativamente. Em paralelo, o Cyber Resilience Act entrou em vigor em 10 de dezembro de
2024, e suas **obrigações de reporte passaram a valer em 11 de setembro de 2026** — ontem, na
data desta rodada; a aplicação plena vem em 11 de dezembro de 2027.

**O incidente de referência já aconteceu, numa das empresas mais capazes do mundo.** Em março de
2026 o varejo da Amazon teve uma sequência de interrupções graves numa única semana, uma delas
de cerca de seis horas atingindo checkout, acesso a conta e preço. A Amazon afirmou que apenas um
dos incidentes envolveu ferramenta de IA diretamente, e que a causa-raiz não foi código
defeituoso gerado por máquina, mas um engenheiro agindo sobre "conselho impreciso que um agente
inferiu de uma wiki interna desatualizada". Documentos internos, segundo a análise do laboratório
de IA responsável da Wharton, apontavam uma "tendência de incidentes" ligada a "mudanças
assistidas por IA generativa". A resposta da empresa foi restabelecer revisão sênior obrigatória
para mudanças assistidas por IA.

### 3.2 O que existe e ainda não funciona

**A capacidade não está onde o discurso está.** A mesma análise da Wharton registra que os
modelos de fronteira resolvem apenas cerca de **42% a 46%** das tarefas realistas multi-arquivo
do SWE-Bench Pro, contra mais de 70% em benchmarks mais simples. A distância entre esses dois
números é a distância entre a demonstração e o trabalho.

**O ganho individual não está demonstrado; o oposto está, num desenho experimental.** O ensaio
randomizado da METR acompanhou 16 desenvolvedores experientes em repositórios grandes (média de
22 mil estrelas, mais de um milhão de linhas) em que trabalhavam havia anos, ao longo de 246
tarefas reais. Com IA permitida, levaram **19% mais tempo**. Antes de começar previam ganho de
24%; depois de terminar, ainda acreditavam ter ganho 20%. Os próprios autores são explícitos
sobre o que o estudo **não** mostra: não mostra que a IA não acelera a maioria dos
desenvolvedores, não generaliza para além do desenvolvimento de software, e não diz nada sobre
os sistemas de agora — é um retrato de capacidades do início de 2025 num cenário específico. É
por isso que ele vale: é o único desenho causal disponível, e o que ele mede com mais força não
é a lentidão, é o **erro sistemático de percepção de quem usa**.

**A especificação como fonte da verdade ainda é uma aposta, não uma prática.** O Technology
Radar da Thoughtworks coloca o desenvolvimento dirigido por especificação no anel **Assess** —
"avalie", o segundo mais tímido dos quatro — no volume 34, e adverte que as ferramentas se
comportam de modo muito diferente conforme o tamanho e o tipo da tarefa, que os artefatos
gerados são difíceis de revisar, que às vezes não está claro quem é o usuário pretendido, e
levanta a hipótese de que se esteja "reaprendendo uma lição amarga — que escrever regras
detalhadas à mão para a IA no fim não escala".

**A auditoria do que o agente fez é ferramenta de desenvolvedor, não infraestrutura de
conformidade.** Existe uma camada madura de observabilidade de agente (Braintrust, LangSmith,
Arize, Helicone, Galileo, Datadog) que captura o traço da execução como árvore de spans e
permite reproduzir a sessão. Mas ela é vendida como depuração, não como prova. Nenhuma das
fontes que abri mostra apólice, contrato ou norma exigindo o traço.

### 3.3 Quem constrói

Fabricantes de modelo com agente próprio de linha de comando (Anthropic com o Claude Code,
OpenAI com o Codex CLI, Google com o Gemini CLI); fabricantes de ambiente de desenvolvimento
(Cursor, JetBrains, Microsoft/GitHub, AWS com o Kiro); a comunidade aberta de agentes de
terminal (Cline, Aider, OpenCode, Goose, Amp, plandex, crush, agentty, axe); a camada de
governo que nasceu por cima — harness e protocolo (three-man-team, oh-my-agent,
OpenAgentsControl, HarnessRouter), skills como produto (o mostruário agentskills.io,
NVIDIA/skills), e o GitHub Spec Kit no lado da especificação; e, do lado da medição, LinearB,
GitClear, DORA, METR e os laboratórios de benchmark (SWE-Bench, Terminal-Bench).

### 3.4 Números de adoção, com fonte — e o que não achei

| O quê | Número | Fonte |
|---|---|---|
| Usam agentes de IA no trabalho diariamente | 14,1% | Stack Overflow 2025 |
| Usam agentes semanalmente | 9,0% | Stack Overflow 2025 |
| Não usam agentes e não pretendem | 37,9% | Stack Overflow 2025 |
| Usam IA regularmente (medido em PRs) | 88,3% | LinearB 2026 |
| Confiam na exatidão da saída | 32,7% (3,1% "confiam muito") | Stack Overflow 2025 |
| Desconfiam da exatidão | 45,7% | Stack Overflow 2025 |
| Taxa de merge de PR gerado por IA | 32,7% | LinearB 2026 |
| Taxa de merge de PR não assistido | 84,5% | LinearB 2026 |
| Refatoração como % das linhas alteradas | 3,8% (era 21% em 2022) | GitClear 2026 |
| SWE-Bench Pro, modelos de fronteira | 42–46% | Wharton, 2026 |
| Skills públicas indexadas | ~1,9 milhão (qualidade média 6,2/12) | Agentman, jun/2026 |
| Produtos com suporte a Agent Skills | ~40 | agentskills.io via Agentman, jun/2026 |
| Lacuna de emprego, 22–25 anos, ocupações expostas | −19% (era −15% em jul/2025) | Stanford/ADP, ago/2026 |
| Matrícula de graduação em computação, EUA | −8,4% (primavera 2026) | National Student Clearinghouse via Fortune |
| Empresas brasileiras que já usam agentes de IA | 6% (de 12 milhões que usam IA) | AWS, "Desbloqueando o Potencial da IA no Brasil 2026", set/2026 |

**Sem número encontrado** para: proporção do código em produção efetivamente escrita por agente
em ciclo fechado (a distinção entre "sugestão aceita", "código de agente" e "código revisado e
aprovado" é feita de modo diferente por cada declarante, e não abri nenhuma fonte primária);
número de desenvolvedores no Brasil usando agente de código; e qualquer leaderboard aberto do
Terminal-Bench — a página respondeu, mas sem a tabela.

### 3.5 Nota sobre o Brasil

O Brasil aparece nas fontes como caso de adoção corporativa alta e maturidade baixa, e o
descompasso entre as duas coisas é o dado. O levantamento "Desbloqueando o Potencial da IA no
Brasil 2026", divulgado pela AWS no Summit de São Paulo em 3 de setembro de 2026, conta 12
milhões de empresas usando IA e apenas **6%** com agentes de IA implementados; a distribuição de
maturidade fica em 58% básico, 27% intermediário, 15% avançado. Duas consequências específicas
para este mapa. A primeira: como a raiz 3 é jurídica e europeia, ela chega ao Brasil por
contrato de exportação e por cadeia de fornecimento antes de chegar por lei — quem vende
software para cliente europeu herda a diretiva; quem vende só no mercado interno, não. Isso
tende a partir o mercado brasileiro de software na mesma linha do efeito e14, mas por um motivo
diferente do global: não pela criticidade do sistema, e sim pelo destino da fatura. A segunda:
com o degrau de entrada da profissão fechando (efeito e4) num país cuja formação de
desenvolvedor se apoia fortemente em bootcamp e em portfólio público, o efeito e2.1 — a
credencial institucional voltando a ser a porta — é mais disruptivo aqui do que na média global.
Não encontrei número brasileiro para nenhuma dessas duas afirmações; elas são inferência
declarada, não medição.

## 4. As disrupções-raiz

Três candidatos foram recusados antes de começar, pelo critério de maturidade — a régua sendo a
do briefing: se dá para fazer com o que já é comum em produto de massa, é maduro.

- **Candidato recusado como raiz: autocompletar de IDE.** Adoção em maioria desde ~2023; a
  LinearB mede 88,3% de uso regular de IA. Tratado como contexto na seção 3.
- **Candidato recusado como raiz: chat que explica código.** Mesma razão; 84% usam ou pretendem
  usar ferramenta de IA (Stack Overflow 2025). Contexto.
- **Candidato recusado como raiz: "a IA escreve mais código, mais rápido".** Não rompe nada —
  faz o mesmo, mais barato. É melhoria sustentadora no sentido de Christensen. Entra no mapa
  como mecanismo de vários efeitos, nunca como raiz.

Restaram três.

### Raiz 1 — O ciclo fechado de execução

O agente lê o repositório, planeja, edita vários arquivos, executa os testes, lê a falha,
corrige e propõe a mudança. O humano especifica antes e verifica depois.

1. **O que rompe.** Rompe a equação, válida desde que existe engenharia de software, entre
   *quem escreveu* e *quem entende*. Durante setenta anos a revisão foi barata porque quem
   revisava lia o trabalho de alguém que também tinha lido. O que se rompe não é a escrita — é a
   **compreensão como subproduto gratuito da autoria**. E rompe a estrutura de custos: o item
   caro deixa de ser produzir e passa a ser verificar, o que inverte para onde vai o dinheiro,
   quem é promovido e o que se ensina.
2. **Por que agora e não há cinco anos.** Três pré-condições que só coincidiram recentemente:
   modelos que sustentam sessão longa com uso de ferramenta sem perder o fio; a normalização do
   terminal como superfície de trabalho do agente (o que dá acesso a compilar, testar e
   inspecionar, e não só a texto); e uma camada de instrução empacotada que torna o
   comportamento reprodutível entre execuções. Em 2021 faltavam as três.
3. **Onde está na difusão.** **Adoção precoce**, e mal: 14,1% de uso diário no trabalho (Stack
   Overflow 2025) — acima do limiar de 10%, abaixo de qualquer coisa parecida com maioria, e com
   37,9% declarando que não pretendem. Emergente, portanto; entra como raiz.
4. **O que ainda falta acontecer.** Que o desempenho em tarefa realista multi-arquivo saia da
   faixa de 42–46% do SWE-Bench Pro; que a taxa de incorporação de PR de agente saia de 32,7%;
   que exista um desenho causal mostrando ganho onde o da METR mostrou perda de 19%; e que
   exista um modo de delegar sem que a delegação produza sistema que ninguém entende. Nenhum
   desses itens é impossível — por isso é raiz e não wildcard.

**Quem bloqueia.** Os revisores e mantenedores, que têm incentivo direto para fechar a torneira:
já fecharam (curl, tldraw, Ghostty, Jazzband, RubyGems). O bloqueio não é ideológico, é
aritmético — quando triar custa um dia e a contribuição vale quinze minutos, a porta fecha. O
efeito é e2.

### Raiz 2 — A instrução empacotada como artefato versionado

Skill, harness, especificação: instrução escrita para ser carregada por máquina, com nome,
versão, teste e distribuição. O prompt deixa de ser mensagem e vira software.

1. **O que rompe.** Rompe o monopólio do código-fonte como o artefato que se versiona, revisa,
   discute e possui. Se o comportamento do sistema é determinado por um documento em linguagem
   natural que o agente carrega, e o código é regenerável a partir dele, então **a fonte da
   verdade mudou de arquivo** — e com ela mudam a ferramenta de revisão, o objeto do controle de
   versão, a unidade de propriedade intelectual e a competência de quem trabalha. Rompe também a
   fronteira entre documentação e implementação, que existia porque uma era para gente e a outra
   para máquina; agora o mesmo texto é as duas coisas.
2. **Por que agora e não há cinco anos.** Porque a instrução só vira artefato quando é
   **portátil**, e a portabilidade tem nove meses: a especificação Agent Skills saiu em 18 de
   dezembro de 2025 e em junho de 2026 já tinha ~40 produtos compatíveis, de fabricantes rivais.
   Antes disso, prompt era acoplado à ferramenta e por isso não era ativo — não dava para
   versionar, vender nem herdar.
3. **Onde está na difusão.** Entre **produto de nicho** e **adoção precoce**. A favor: 1,9 milhão
   de skills públicas indexadas em junho de 2026 e adoção cruzada entre fabricantes. Contra: o
   Technology Radar da Thoughtworks põe o desenvolvimento dirigido por especificação no anel
   Assess, com ressalvas fortes. Emergente; entra como raiz, e com confiança menor que a raiz 1.
4. **O que ainda falta acontecer.** Que exista revisão de especificação que funcione (hoje o
   próprio Thoughtworks diz que os artefatos são difíceis de revisar); que a qualidade média do
   acervo público suba dos 6,2/12 medidos; que apareça um modo de testar uma instrução como se
   testa uma função; e que a "lição amarga" não se cumpra — isto é, que o modelo não passe a
   inferir sozinho o que hoje se escreve à mão. Este último item é o wildcard W2.

**Quem bloqueia.** O fabricante de modelo. Se a diferenciação migrar para a camada de instrução,
o valor sai de quem treina e vai para quem escreve skill — e o incentivo é absorver a camada,
tornando-a nativa e não-portátil. O efeito é e8.1.

### Raiz 3 — Responsabilidade estrita sobre software, num código sem autoria rastreável

Dois movimentos independentes que se cruzam num intervalo de meses: o software passa a ser
produto sujeito a responsabilidade objetiva, com inversão parcial do ônus da prova; e a autoria
humana de cada alteração deixa de existir de fato.

1. **O que rompe.** Rompe o acordo tácito que sustenta a indústria de software desde os anos
   1970 — o de que software se licencia "no estado em que se encontra", sem garantia de
   adequação, e de que o responsável, quando existe, é identificável porque alguém escreveu
   aquilo. A Diretiva revista faz das duas coisas o oposto: responsabilidade objetiva, e
   presunção de defeito quando a prova não é apresentada. O que rompe, precisamente, é que
   **a defesa passa a depender de um registro que a maioria dos times não mantém**.
2. **Por que agora e não há cinco anos.** Porque as duas curvas se cruzam agora, por acaso de
   calendário: as obrigações de reporte do Cyber Resilience Act passaram a valer em 11 de
   setembro de 2026, a transposição da Diretiva de Responsabilidade por Produto vence em 9 de
   dezembro de 2026, e é exatamente neste biênio que a proporção de alterações sem autor humano
   identificável deixa de ser residual. Há cinco anos a diretiva antiga excluía software na
   prática e a autoria era trivial.
3. **Onde está na difusão.** **Demonstração pública**, no sentido do critério: o instrumento
   existe e tem data, a prática não existe — a jurisprudência sobre software gerado por agente é
   zero. Toda a cadeia derivada desta raiz sai com confiança no máximo média, e a terceira ordem
   com baixa.
4. **O que ainda falta acontecer.** A primeira sentença aplicando presunção de defeito a
   software gerado por agente; a transposição efetiva nos 27 Estados-membros; a primeira apólice
   que precifique o pipeline em vez do produto; e a decisão, ainda em aberto, sobre se o registro
   de procedência é exigido do fabricante do modelo, de quem opera o agente, ou dos dois — a
   diretiva já diz "solidária e alternativamente", o que sugere os dois.

**Quem bloqueia.** Aqui a pergunta se inverte, e é o achado desta raiz: quem bloqueia é quem tem
incentivo para **capturar** em vez de resistir. O fabricante de modelo tem interesse em empurrar
a responsabilidade para quem opera; a seguradora tem interesse em que a norma seja de processo e
não de resultado, porque processo se audita e resultado não; e a grande fornecedora tem
interesse em que o custo de conformidade seja alto, porque é barreira de entrada. Nenhum dos três
quer revogar a regra — os três querem escrevê-la. O efeito é e14.

**Teste de independência das raízes** (antecipando a seção 7): se a raiz 1 não se concretizar, a
raiz 2 vira ferramenta de produtividade sem ruptura e a raiz 3 perde metade da força, porque o
problema de autoria some. Se a raiz 2 não se concretizar (wildcard W2), as raízes 1 e 3 ficam
inteiras. Se a raiz 3 não se concretizar, as raízes 1 e 2 aceleram e o mapa fica **sem nenhuma
retroação estrutural** — o que é, por si, um resultado do exercício.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O ciclo fechado de execução — o agente lê, edita, testa e propõe, e o humano especifica antes e verifica depois
    efeitos:
      - id: e1
        ordem: 1
        efeito: A revisão de código, e não a escrita, passa a determinar o prazo de entrega de uma equipe
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Times passam a comprar capacidade de revisão como compram capacidade de computação, dimensionada por orçamento e não por lotação
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A revisão vira serviço contratado fora da empresa e coberto por apólice, e a firma que assina responde pelo que aprovou
                sinal: fraco
                prazo: 2049
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O agente passa a revisar o agente, e a última leitura humana recua para a fronteira do sistema
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: O que a pessoa lê deixa de ser o diff e passa a ser o laudo da revisão automática, com o diff anexo e não aberto
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Projetos abertos fecham a porta da frente e o pull request externo anônimo desaparece dos repositórios grandes
        sinal: forte
        prazo: 2031
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: A porta de entrada da profissão deixa de ser a contribuição aberta e volta a ser a instituição que emite credencial
            sinal: medio
            prazo: 2038
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: O portfólio público perde valor de sinalização e é substituído por procedência — onde a pessoa trabalhou e o que assinou
                sinal: fraco
                prazo: 2043
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Manutenção de infraestrutura aberta crítica passa a ser financiada como serviço público, porque o voluntariado não sustenta a fila de triagem
            sinal: fraco
            prazo: 2036
            confianca: media
      - id: e3
        ordem: 1
        efeito: A dívida técnica muda de natureza e deixa de ser código mal escrito para ser código que ninguém leu
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Reescrever o sistema fica mais barato que entendê-lo, e o ciclo de vida médio de um sistema encurta
            sinal: medio
            prazo: 2036
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A compatibilidade retroativa deixa de ser valor de mercado e formatos e protocolos passam a durar menos que as instituições que dependem deles
                sinal: fraco
                prazo: 2046
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: O modelo mental do sistema migra da cabeça de uma pessoa para um artefato externo, e a rotatividade deixa de ser risco técnico de primeira ordem
            sinal: fraco
            prazo: 2035
            confianca: media
      - id: e4
        ordem: 1
        efeito: Quem entra na profissão perde o degrau em que se aprendia, porque as tarefas que formavam o iniciante são exatamente as que o agente fecha sozinho
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Formar um profissional experiente vira despesa explícita, e a exposição que se ganhava trabalhando passa a ser comprada como treinamento
            sinal: fraco
            prazo: 2037
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A hierarquia da engenharia deixa de ser júnior-pleno-sênior e passa a ser por domínio verificado, isto é, por quem responde por qual sistema
                sinal: fraco
                prazo: 2046
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: O teste deixa de ser prova de correção e vira o contrato de aceitação, e quem escreve o teste passa a mandar no sistema
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Surge um mercado de suítes de aceitação licenciadas, em que se compra o conjunto de testes que define um sistema conforme em vez de escrevê-lo
            sinal: fraco
            prazo: 2040
            confianca: baixa
      - id: e6
        ordem: 1
        efeito: O custo marginal de uma tentativa de software migra de tempo humano para conta de energia e inferência
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: A cota por tentativa vira decisão de gestão e o incentivo se inverte, porque especificar melhor fica mais barato que tentar de novo
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Em setores de margem apertada o limite do que se constrói passa a ser energético em vez de humano
                sinal: fraco
                prazo: 2042
                confianca: baixa
  - disrupcao: A instrução empacotada como artefato versionado — skill, harness e especificação disputando com o código o posto de fonte da verdade
    efeitos:
      - id: e7
        ordem: 1
        efeito: A especificação, e não o código, passa a ser o que se versiona, revisa e discute, e o repositório de código vira artefato derivado
        sinal: medio
        prazo: 2038
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O diff de especificação substitui o diff de código na ferramenta de revisão
            sinal: fraco
            prazo: 2041
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A linguagem de programação perde o papel de interface humana e vira formato de intercâmbio entre máquinas
                sinal: fraco
                prazo: 2046
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: Ler código vira competência especializada e escassa, na posição que ler assembly ocupa hoje
            sinal: fraco
            prazo: 2042
            confianca: baixa
      - id: e8
        ordem: 1
        efeito: A skill vira ativo transacionável com preço, versão e licença, e a curadoria de instrução vira ofício remunerado
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: O fabricante de modelo absorve a camada de instrução para não perder a diferenciação, e o mercado independente de skills é espremido para nichos regulados
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: O que sobrevive fora do fabricante é a skill que carrega responsabilidade legal, não a que carrega competência técnica
                sinal: fraco
                prazo: 2043
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: A qualidade média do acervo público de instruções cai à medida que ele cresce, e a curadoria passa a valer mais que o acervo
            sinal: medio
            prazo: 2032
            confianca: media
      - id: e9
        ordem: 1
        efeito: Quem projeta mídia e interação passa a entregar a peça e a instrução que a regenera, e o design system deixa de ser documento de referência para ser artefato executável
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: A violação de estilo vira erro de verificação em vez de crítica de gosto, e a identidade de marca passa a ser mantida por conformidade automática
            sinal: fraco
            prazo: 2037
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: A direção de arte migra da peça para o critério, e o portfólio passa a mostrar regras e resultados de auditoria em vez de capas
                sinal: fraco
                prazo: 2046
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: O protótipo deixa de ser descartável, porque é gerado da mesma especificação que o produto, e a fronteira entre maquete e sistema desaparece
            sinal: medio
            prazo: 2034
            confianca: media
      - id: e10
        ordem: 1
        efeito: A documentação escrita para humanos perde financiamento e o orçamento migra para instrução legível por agente
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Editoras técnicas como O'Reilly e Manning e plataformas de curso como Udemy e Alura perdem o produto explicar-a-API e migram para avaliação e credencial
            sinal: fraco
            prazo: 2038
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: A prosa técnica sobrevive como memória institucional e gênero de leitura, não como instrumento de trabalho
                sinal: fraco
                prazo: 2045
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: A instrução ganha cadeia de custódia, e qual skill em qual versão autorizou o quê passa a ser registro obrigatório como já é a assinatura de dependência
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: O SBOM se estende para incluir instruções, e a auditoria passa a exigir a lista de especificações e skills que produziram o binário
            sinal: fraco
            prazo: 2035
            confianca: media
  - disrupcao: Responsabilidade estrita sobre software num código sem autoria rastreável — a Diretiva de Responsabilidade por Produto revista e o Cyber Resilience Act caindo sobre uma base de código sem autor identificável
    efeitos:
      - id: e12
        ordem: 1
        efeito: Toda alteração passa a carregar procedência obrigatória, isto é, qual especificação, qual modelo, quem aceitou e quais testes passaram
        sinal: medio
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: A aceitação humana vira ato registrado e apertar merge ganha o peso que a assinatura do responsável técnico tem em obra civil
            sinal: fraco
            prazo: 2035
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: Aparece registro profissional por classe de sistema em saúde, pagamento e transporte, e a maioria do software fica deliberadamente fora da classe
                sinal: fraco
                prazo: 2048
                confianca: baixa
          - id: e12.2
            ordem: 2
            efeito: A trilha de execução do agente vira o artefato que se guarda, e o repositório de execução fica maior que o repositório de código
            sinal: medio
            prazo: 2033
            confianca: media
      - id: e13
        ordem: 1
        efeito: Seguradoras passam a precificar software pelo processo e não pelo produto, e o prêmio cai com registro de procedência, revisão sênior obrigatória e ambiente isolado
        sinal: fraco
        prazo: 2034
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: O seguro, e não o regulador, passa a definir na prática o que é aceitável, como já aconteceu com incêndio predial e com risco cibernético
            sinal: fraco
            prazo: 2041
            confianca: baixa
      - id: e14
        ordem: 1
        efeito: O custo de conformidade empurra o software crítico para poucos fornecedores capazes de sustentá-lo, e o resto do mercado se declara não crítico por contrato
        sinal: fraco
        prazo: 2036
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: Duas economias de software passam a coexistir, uma auditada cara e lenta e outra abundante barata e sem garantia
            sinal: fraco
            prazo: 2040
            confianca: media
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: A escolha entre as duas economias vira decisão de compra do cliente final e software com garantia vira categoria de mercado com selo
                sinal: fraco
                prazo: 2045
                confianca: baixa
      - id: e15
        ordem: 1
        efeito: A exigência de procedência trava a autonomia justamente onde ela mais avançou, porque equipes desligam o modo autônomo quando não conseguem provar quem decidiu o quê
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: O agente é reconfigurado para propor e nunca executar, e o modo plan-first com aprovação vira padrão de fábrica em setor regulado
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: A autonomia do agente vira parâmetro contratual comprado e auditado por faixa, como cobertura de seguro
                sinal: fraco
                prazo: 2046
                confianca: baixa
```

### O que o bloco não consegue dizer

**Os mecanismos, um a um.** O bloco lista efeitos; aqui está por que cada um deriva do seu pai.

*Raiz 1.* **e1** porque o ciclo fechado multiplica a produção de artefatos que precisam de
julgamento humano sem multiplicar o julgamento humano disponível — o dado é a espera de mais de
16 horas contra 200 minutos, e a taxa de incorporação de 32,7% contra 84,5%, que diz que dois
terços da fila é trabalho jogado fora depois de ocupar o revisor. **e1.1** porque, se a fila é o
gargalo e a geração é barata, o item escasso passa a ser atenção humana qualificada — e tudo que
é escasso e demandado acaba precificado; a diferença é que revisão não escala com contratação
(o custo de coordenar revisores cresce mais rápido que o número deles), então a forma
provável é compra por volume, não por vaga. **e1.2** porque revisar é uma tarefa verificável e,
onde há critério verificável, o mesmo ciclo fechado se aplica; a leitura humana não some, recua
para onde o critério não é escrevível — a fronteira do sistema, isto é, o que ele promete a quem
está fora. **e2** porque o custo de triar subiu acima do valor esperado de uma contribuição
anônima: é aritmética de fila, não julgamento moral, e por isso é robusta; já aconteceu em curl,
tldraw, Ghostty, RubyGems e Jazzband. **e2.1** porque, fechada a porta aberta, a única forma
restante de sinalizar competência é a instituição que atesta — o que restaura a credencial num
mercado que passara vinte anos a desmontá-la. **e3** porque um sistema cresce por adição de
material que nunca entrou na cabeça de ninguém: o indicador não é opinião, é a refatoração
caindo de 21% para 3,8% das linhas alteradas e a manutenção de código legado caindo 74% —
ninguém refatora nem mantém o que não entende. **e3.1** porque, quando o custo de gerar tende a
zero e o de compreender não, a decisão racional diante de um sistema opaco deixa de ser estudá-lo
e passa a ser regenerá-lo a partir do que ele deveria fazer. **e4** porque a tarefa de entrada
da profissão sempre foi a tarefa pequena, delimitada e verificável — que é exatamente a
descrição do que o agente resolve com maior taxa de acerto; o dado é a lacuna de 19% no emprego
de 22 a 25 anos em ocupações expostas, operando por contratação reduzida e não por demissão.
**e5** porque um agente otimiza para o critério que consegue verificar; se o critério verificável
é a suíte de testes, então a suíte **é** a especificação, e quem a escreve define o sistema.
**e6** porque, retirado o tempo humano da conta, o que sobra no custo de uma tentativa é
inferência e energia — e um insumo medido em unidades se administra por cota, não por prazo.

*Raiz 2.* **e7** porque, se o código é regenerável a partir de um documento e ninguém o lê, o
documento é que carrega a intenção — e o que carrega intenção é o que se versiona; a resistência
é que revisar especificação ainda não funciona (Thoughtworks: artefatos difíceis de revisar), o
que é a razão do prazo tardio. **e8** porque um artefato portátil, versionado e útil vira
mercadoria: a portabilidade tem data (dez/2025) e a escala tem número (1,9 milhão de skills).
**e8.1** porque a diferenciação que migra para fora do modelo é exatamente o que o fabricante
tem incentivo para reabsorver — é a mesma dinâmica que levou plataformas a absorver extensões
bem-sucedidas. **e8.2** porque acervo aberto sem barreira de entrada tem qualidade média
decrescente por construção; a medida já existe (6,2 de 12 em junho de 2026) e o valor migra para
quem filtra. **e9** porque um design system escrito para humanos não é carregável por agente, e
quem projeta descobre que sua entrega só é respeitada se for legível pela máquina que constrói —
este é o efeito que mais diretamente atinge o público deste mapa. **e10** porque o orçamento de
documentação existe para reduzir o custo de quem vai usar; se quem usa é uma máquina, o formato
ótimo deixa de ser prosa didática, e o dinheiro segue o leitor. **e11** porque uma instrução que
determina comportamento e é distribuída por terceiros é, funcionalmente, uma dependência — e
dependência sem procedência é o vetor de ataque que o caso da Amazon exemplificou (conselho
inferido de uma wiki desatualizada).

*Raiz 3.* **e12** porque a defesa contra uma presunção refutável de defeito **é** o registro: a
diretiva diz que a não-apresentação de prova ordenada pode ela mesma gerar presunção de defeito,
o que transforma manter trilha de decisão de boa prática em estratégia jurídica. **e12.1** porque,
se alguém precisa responder e o autor do código não é uma pessoa, o ato humano mais próximo da
decisão é a aceitação — e é nele que a responsabilidade se ancora. **e13** porque seguradora
precifica o que consegue auditar, e num sistema em que o produto é irreproduzível e o processo é
registrado, o processo é o que sobra para auditar. **e14** porque custo fixo de conformidade é
barreira de entrada, e barreira de entrada concentra oferta; a Amazon já mostrou o formato da
resposta, ao restabelecer revisão sênior obrigatória para mudanças assistidas por IA. **e15**
porque a exigência de provar quem decidiu colide frontalmente com a autonomia, que é justamente
a delegação da decisão — a única saída sem abrir mão da ferramenta é reduzir o grau de
autonomia, e é isso que o padrão plan-first com aprovação faz.

**As classes de referência usadas para datar.** Cada prazo saiu de uma comparação nomeada, não de
intuição.

| Classe de referência | O que levou | Aplicada a |
|---|---|---|
| Compilador de alto nível: Fortran (1957) até o assembly deixar de ser lido em produção (~1970) | ~13 anos | e7, e7.1, e7.2, e7.1.1 |
| Pull request como prática dominante: GitHub (2008) até norma de fato (~2016) | ~8 anos | e1, e1.2 |
| Controle de versão distribuído: git (2005) até maioria declarada em survey (~2014) | ~9 anos | e11, e11.1 |
| Integração contínua: Hudson/Jenkins (2005) até prática majoritária (~2015) | ~10 anos | e5, e5.1 |
| Nuvem pública: EC2 (2006) até maioria da carga nova (~2019) | ~13 anos | e6, e6.1, e3.1 |
| Certificação de software crítico: DO-178B (1992) e IEC 61508 (1998) até prática obrigatória de mercado | 6 a 10 anos para a norma; ~20 para virar cultura | e12, e12.1, e12.1.1 |
| Responsabilidade profissional em obra civil (registro, ART) — da primeira lei ao regime funcionando | décadas | e12.1.1, e1.1.1 |
| Auditoria contábil independente: do marco regulatório dos anos 1930 ao mercado consolidado | ~20 anos | e1.1.1 |
| Seguro como definidor de prática: incêndio predial e risco cibernético | 10 a 15 anos entre o produto e a norma de fato | e13, e13.1 |
| Smartphone (~4 anos) e VR de consumo (>10 e ainda não) | os dois extremos da faixa | usados como limites, não datas |

**Os dois efeitos que passam do horizonte, declarados.** `e1.1.1` (revisão terceirizada com
apólice) está em **2049** e `e12.1.1` (registro profissional por classe de sistema) em **2048** —
os dois fora da janela de 2046. Ficaram fora deliberadamente: as classes de referência de que
disponho para eles são institucionais (auditoria contábil, responsabilidade em obra civil) e
medem duas décadas a partir do marco legal, que aqui é dezembro de 2026. Datá-los dentro de 2046
seria comprimir a referência para caber no horizonte, que é o erro que a bateria da seção 7
existe para pegar. Os demais 11 efeitos de terceira ordem estão dentro da janela.

**Onde a cobertura STEEP ficou vazia.** Social (e4, e2.1, e10), tecnológico (e1.2, e5, e7, e11),
econômico (e1.1, e6, e8, e14), político-regulatório (e12, e13, e15) estão cobertos. **Ecológico
ficou fraco de propósito**: o único fio é e6 e e6.1.1, e ele trata energia como *custo*, não como
*limite físico ou político*. Não forcei um efeito ambiental porque não abri nenhuma fonte que
ligue consumo de inferência em desenvolvimento de software a restrição ecológica com número — e
inventar essa ligação seria o tipo de efeito genérico que o método recusa. Fica registrado como
lacuna conhecida.

**Quem perde, nomeado.** Mantenedores de projeto aberto e o próprio bem comum do software livre
(e2); quem entra hoje na profissão (e4); editoras técnicas e plataformas de curso (e10.1); o
mercado independente de skills (e8.1); fornecedores pequenos de software (e14); e — menos óbvio —
os times que já são bons, porque o DORA mostra que o retorno da IA é proporcional à qualidade da
fundação organizacional, o que significa que a ferramenta **amplia a distância** entre times bons
e ruins em vez de nivelá-la.

### Cruzamentos

**Convergência 1 — o código deixa de ser patrimônio.** `e3.1` (reescrever fica mais barato que
entender) vem da raiz 1; `e7` (a especificação é a fonte da verdade) vem da raiz 2. Os dois
chegam ao mesmo lugar por caminhos independentes: o código-fonte perde o estatuto de ativo que
se preserva e vira saída regenerável. Este é o achado mais forte do mapa, porque duas raízes que
podem falhar independentemente convergem no mesmo efeito — o que o torna o efeito de segunda
ordem mais provável do documento, mais provável do que qualquer um dos seus dois pais.

**Convergência 2 — a atenção humana verificada vira o item precificado.** `e1.1` (comprar
capacidade de revisão) vem da raiz 1; `e13` (a seguradora precifica o processo) vem da raiz 3.
Convergem em: o que se vende no software de 2040 não é código nem funcionalidade, é **garantia
lastreada em julgamento humano registrado**. Quem vende revisão e quem vende seguro estão no
mesmo negócio, e a fusão dos dois é a hipótese que explica `e1.1.1`.

**Convergência 3 — fechamento.** `e2` (projetos abertos fecham a porta) e `e14` (o mercado se
parte entre auditado e sem garantia) convergem no fim do regime de abertura indiferenciada que
definiu a cultura de software desde os anos 1990. Os motivos são opostos — um é custo de
triagem, outro é custo de conformidade — e o resultado é o mesmo.

**Retroalimentação — o único ciclo de reforço puro do mapa.** `e3` (dívida = código não lido)
aumenta a fila de `e1` (revisão como gargalo); fila maior aumenta o incentivo de gerar em vez de
ler; gerar mais aumenta `e3`. O ciclo não tem freio interno: nada dentro das raízes 1 e 2 o
interrompe. O freio vem inteiramente de fora, da raiz 3 (`e15`, `e12`) — o que é a razão
estrutural de a raiz 3 estar neste mapa, e o motivo de eu suspeitar que um mapa deste tema **sem
uma raiz regulatória ou securitária seja um mapa sem freio**, isto é, propaganda.

**Contradição 1, não resolvida.** `e3.1` diz que o ciclo de vida dos sistemas encurta porque
reescrever é barato. `e12.1` e `e14` dizem que sistema com responsabilidade registrada fica caro,
lento e conservador — o que **alonga** o ciclo de vida, porque cada reescrita reabre a
certificação. Os dois só coexistem se o mercado se partir (`e14.1`). Se não se partir, um dos
dois cai. **O que decide:** se a exigência de procedência alcança o software não-crítico ou para
na fronteira do regulado. O sinal a observar é o escopo das leis nacionais de transposição da
diretiva ao longo de 2027 — se elas definirem limiar por criticidade ou por faturamento, o
mercado parte; se aplicarem a tudo, `e3.1` cai.

**Contradição 2, não resolvida.** `e4` diz que quem entra na profissão perde o degrau; `e2.1` diz
que a instituição volta a ser a porta de entrada. As duas juntas assumem que **existe** uma porta.
Se as empresas não contratam iniciante (e4) e o projeto aberto fechou (e2), a instituição só
consegue emitir credencial para um mercado que não absorve — e o desfecho não é reorganização da
carreira, é encolhimento da profissão. Registro os dois. **O que decide:** se a formação de
sênior vira despesa que alguém aceita pagar (`e4.1`) ou se o mercado prefere disputar o estoque
existente de experientes até ele envelhecer. O sinal a observar é a razão entre vagas de nível
inicial e vagas seniores, não o número absoluto de vagas.

## 6. Sinais fracos e wildcards

### Sinais fracos

**S1 — A ferramenta que inspeciona o que o agente fez.** *Onde foi visto:* a camada de
observabilidade de agente (Braintrust, LangSmith, Arize, Helicone, Galileo, Datadog LLM
Observability) já captura a execução como árvore de spans reproduzível; do lado do
desenvolvedor individual, `vibe-log` e `claude-tap`. *O que mudaria:* hoje isso é depuração. Se a
raiz 3 se cumprir, o traço deixa de ser conveniência e vira **prova** — e um mercado de
ferramenta de desenvolvedor vira infraestrutura de conformidade, com outra escala de preço e
outro comprador (jurídico, não engenharia). *Sinal observável de que está crescendo:* a primeira
apólice de seguro, ou o primeiro edital de compra pública, que exija a trilha de execução do
agente como condição — não como diferencial.

**S2 — A taxa de incorporação de PR de agente.** Hoje 32,7% contra 84,5%. *O que mudaria:* é a
métrica única mais informativa deste mapa. Acima de ~60%, `e1` perde força, `e2` desacelera e o
mapa inteiro recua uma década. Abaixo de 25%, `e2` acelera e os projetos abertos fecham antes de
2029. *Sinal observável:* o benchmark anual da LinearB, que já existe e é comparável ano a ano.

**S3 — A curva de capacidade que pode não subir.** SWE-Bench Pro em 42–46% contra 70%+ nos
benchmarks mais simples. *O que mudaria:* se o Pro (ou seu sucessor) estagnar por dois ciclos de
modelo, a raiz 1 volta para "produto de nicho" e todo o mapa recua. *Sinal observável:* a
diferença entre o benchmark fácil e o difícil aumentando em vez de diminuir — hoje a fronteira
sobe rápido no fácil, o que pode ser saturação de benchmark e não capacidade.

**S4 — Identidade verificada obrigatória em projeto de primeira linha.** *Onde foi visto:* tldraw
fecha PR externo automaticamente; Ghostty proíbe código de IA sem aprovação. Todos são projetos
médios. *O que mudaria:* se Linux, Python, Node ou Kubernetes adotar identidade verificada ou
depósito para contribuir, `e2` sai de "tentativa" para "caso consumado" e o prazo cai de 2031
para ~2028. *Sinal observável:* mudança de política em qualquer um desses quatro.

**S5 — O gasto de inferência virando linha de orçamento aprovada.** *Onde foi visto:* hoje é
planilha de engenharia. *O que mudaria:* quando "quantas tentativas esta equipe pode fazer" for
decidido no mesmo comitê que aprova o custo de nuvem, `e6.1` está acontecendo e o comportamento
de quem projeta muda antes de a tecnologia mudar. *Sinal observável:* a primeira empresa de
capital aberto a reportar custo de inferência de desenvolvimento como rubrica separada.

**S6 — A sentença que ainda não existe.** *Onde foi visto:* em lugar nenhum — é essa a questão. A
diretiva revista tem transposição em 9 de dezembro de 2026 e jurisprudência zero sobre software
gerado por agente. *O que mudaria:* a primeira decisão que aplicar presunção de defeito a um
sistema cuja alteração foi proposta por agente aciona a raiz 3 inteira e antecipa `e12` e `e15` em
dois a três anos. *Sinal observável:* qualquer ação sob a diretiva transposta que peça exibição
de registro de desenvolvimento.

**S7 — A qualidade média do acervo de instruções.** 6,2 de 12 em junho de 2026, sobre ~1,9 milhão
de skills. *O que mudaria:* se cair enquanto o acervo cresce, `e8.2` (a curadoria vale mais que o
acervo) se confirma e o mercado de skill vira mercado de reputação. Se subir, a raiz 2 se
fortalece. *Sinal observável:* a repetição da mesma medida em 2027 pela mesma metodologia.

### Wildcards

**W1 — O incidente com vítima.** Um sistema crítico — transporte, saúde, energia — falha com
mortes, e a investigação mostra que a mudança foi proposta por um agente, aceita por alguém que
não a leu, e que a trilha da decisão não existe. *Mecanismo:* as três condições já coexistem hoje
em organizações capazes; o caso da Amazon de março de 2026 tem exatamente a estrutura (agente
inferindo de fonte desatualizada, humano agindo sobre a inferência), faltando só o domínio com
consequência física. *Por que é improvável:* domínios com vítima potencial já operam sob regimes
de certificação (DO-178C em aviônica, IEC 62304 em dispositivo médico) que hoje barram pipeline
agêntico não rastreável — a barreira existe e funciona. *O que faria com o mapa:* comprime `e12.1`
de 2035 para ~2030, transforma `e15` de retroação em regra geral e não em exceção setorial, e
antecipa `e12.1.1` de 2048 para dentro do horizonte. *Sinal precoce:* o primeiro reporte sob o
Cyber Resilience Act (obrigatório desde 11/09/2026, em 24 horas) em que a causa envolva mudança
assistida por agente e a trilha esteja ausente.

**W2 — A camada de instrução deixa de ser necessária.** O modelo passa a inferir do próprio
repositório e do histórico tudo o que hoje se escreve à mão em skill, harness e especificação.
*Mecanismo:* é a "lição amarga" que o próprio Thoughtworks levanta ao avaliar desenvolvimento
dirigido por especificação — escrever regras detalhadas à mão para a IA historicamente perde para
escala. Contexto longo, memória persistente e treino sobre o próprio repositório tornariam a
instrução artesanal redundante. *Por que é improvável:* a instrução carrega o que **não está** no
repositório — política, obrigação legal, gosto, o que a organização decidiu não fazer. Nada disso
é inferível do código. *O que faria com o mapa:* a raiz 2 desaparece e leva junto `e7` a `e11`,
isto é, quase um terço do mapa, incluindo o ramo que mais interessa a quem projeta mídia e
interação (`e9`). As raízes 1 e 3 ficam intactas. *Sinal precoce:* um fabricante depreciar o
próprio formato de skill sem oferecer substituto — sinal de que a camada virou dispensável e não
de que mudou de dono.

**W3 — Prova formal barata.** Um método torna a verificação automática de correção barata o
bastante para uso corrente: gera-se o código e a prova ao mesmo tempo, e um verificador
determinístico decide. *Mecanismo:* o agente que gera código também gera invariantes e prova; o
verificador é um programa comum, sem modelo. *Por que é improvável:* o gargalo da verificação
formal nunca foi a prova, foi escrever a especificação formal — e se escrever especificação
formal ficar fácil, o problema já era outro. *O que faria com o mapa:* é o wildcard que o
destrói mais barato. Derruba `e1` (a revisão deixa de ser gargalo), e com ele `e1.1`, `e1.2`,
`e3` e `e13`; a raiz 3 sobrevive só na parte de autoria, não na de defeito. Sobra a raiz 2, quase
reforçada. *Sinal precoce:* um sistema de produção não-acadêmico, fora de aviônica e de
criptografia, entregue com prova de correção gerada por agente.

## 7. Contra o próprio mapa

Esta seção é o relato da bateria do §6 da skill, aplicada ao mapa já montado. Ela alterou o mapa:
o registro auditável de alterações está no fim.

### 7.1 Pré-mortem — é 2046 e este mapa se mostrou errado. Por quê?

**Razão 1, a mais provável: o gargalo de revisão foi resolvido por mais agentes, não por mais
gente.** Revisar é uma tarefa com critério verificável, e este mapa passou a assumir que a
verificação é irredutivelmente humana. Se o agente revisor funcionar, `e1` inteiro se dissolve em
dois ou três anos e leva junto `e1.1`, `e2`, `e13` e boa parte do que sustenta a convergência 2.
*Ação:* rebaixei `e1.1` de confiança alta para média e criei `e1.2` explicitamente — o mapa
precisava conter a sua própria refutação parcial em vez de ignorá-la.

**Razão 2: o horizonte excede todas as minhas classes de referência.** A maior referência que
tenho cobre treze anos (Fortran até o assembly deixar de ser lido; EC2 até a maioria da carga
nova). O mapa vai a vinte. Tudo o que datei depois de 2040 é extrapolação de segunda ordem sobre
uma referência única. *Ação:* toda a terceira ordem saiu com confiança baixa, sem exceção — 13 de
13 —, e dois efeitos foram deliberadamente colocados **fora** do horizonte (2048 e 2049) em vez de
comprimidos para caber.

**Razão 3: o efeito Bruxelas não pegou.** A raiz 3 é um instrumento europeu. Se a Diretiva revista
for transposta com limiares generosos, se os Estados-membros divergirem, ou se o mercado
americano e chinês simplesmente ignorar, a raiz 3 vira regional e o mapa fica sem freio — o que
significa que as raízes 1 e 2 correm mais rápido e chegam mais longe do que aqui está escrito.
Note que esta razão erra o mapa **para o lado agressivo**, ao contrário das outras duas. *Ação:*
empurrei `e12.1` de 2033 para 2035 e rebaixei `e14.1` de sinal médio para fraco.

### 7.2 Extrapolação linear

**`e6.1` (cota de tokens vira decisão de gestão) é "mais do mesmo, maior"** — é orçamento de
nuvem com outro nome, e a nuvem já fez isso em 2015. Ou ganha um mecanismo de não-linearidade ou
vira contexto. O mecanismo que o salva: a cota de nuvem é mensal e agregada, enquanto a cota de
inferência é **por tentativa e visível a quem tenta** — e um limite visível no momento da decisão
muda o comportamento de quem projeta, o que a fatura de fim de mês nunca fez. Com o mecanismo
escrito, fica; sem ele, sairia.

**`e12.2` (a trilha do agente vira o artefato que se guarda) é linear** — é log com outro nome.
Mantive porque a mudança não é de volume, é de **estatuto jurídico**: log que se guarda por
conveniência e registro que se guarda porque a sua ausência gera presunção de defeito são objetos
diferentes, com retenção, custódia e custo diferentes. O mecanismo está na diretiva.

**`e8` (skill vira ativo transacionável) é a loja de aplicativos de novo.** Mantive, mas é o
efeito que mais cheira a analogia preguiçosa, e `e8.1` (o fabricante reabsorve) existe justamente
porque a analogia da loja de aplicativos, se levada a sério, termina em captura pela plataforma —
e não em mercado independente florescente.

### 7.3 Velocidade de adoção, confrontada com a classe de referência

**`e7` estava em 2033 e não sobrevive à referência.** A referência é o compilador de alto nível:
Fortran em 1957, e o assembly deixando de ser lido em produção por volta de 1970 — treze anos. O
desenvolvimento dirigido por especificação está no anel Assess do Technology Radar em 2026, isto
é, no equivalente a 1957, não a 1965. Treze anos a partir de 2026 dá 2039. **Empurrei `e7` de
2033 para 2038** e os filhos junto (`e7.1` de 2035 para 2041). Esta é a maior correção de
calendário do mapa e ela desloca o ramo inteiro da raiz 2 para depois de 2038 — o que, num
horizonte de 2046, deixa muito pouco tempo para a terceira ordem daquele ramo se manifestar. Está
declarado, e é o motivo de `e7.1.1` estar exatamente em 2046.

**`e12.1` estava em 2033.** A referência é DO-178B (1992) e IEC 61508 (1998): de seis a dez anos
entre a norma e a prática obrigatória de mercado. A norma aqui é dezembro de 2026. Seis a dez
anos dá 2032 a 2036. **Empurrei para 2035**, o terço superior da faixa, porque a diretiva depende
de transposição em 27 jurisdições e de jurisprudência que ainda não existe.

**`e2` em 2031 sobrevive** e é o prazo mais curto do mapa com sinal forte. A referência é o
próprio pull request (2008 a ~2016, oito anos); aqui o processo já começou em 2025 com curl,
tldraw e Ghostty, o que põe a norma de fato por volta de 2031-2033. Mantive 2031 porque a pressão
é aritmética e crescente, não cultural.

### 7.4 A raiz que não acontece

**Se a raiz 1 não se concretizar** — se o agente ficar preso na faixa de 42–46% do SWE-Bench Pro e
o resultado da METR se confirmar em desenhos maiores — sobram: a raiz 2 como ferramenta de
produtividade sem ruptura (skill vira boa prática de documentação, não fonte da verdade), e a
raiz 3 como problema jurídico geral de software, sem o agravante de autoria. O mapa perde `e1` a
`e6`, `e7`, `e9` e `e15`, ou seja, dois terços. **Isto é o que este mapa arrisca.**

**Se a raiz 2 não se concretizar** (wildcard W2), perdem-se `e7` a `e11` — inclusive o ramo mais
relevante para o público deste mapa — e as raízes 1 e 3 ficam inteiras. Raiz genuinamente
independente, portanto: passa no teste.

**Se a raiz 3 não se concretizar,** as raízes 1 e 2 aceleram e o mapa fica sem nenhuma retroação
estrutural — o ciclo de reforço `e3` → `e1` → `e3` roda sem freio. Que a única retroação
estrutural do mapa venha de fora da tecnologia é, ele mesmo, um resultado; e é também o motivo de
eu suspeitar deste mapa, porque um mapa cujo freio é externo é um mapa que pode estar
subestimando os freios internos que não soube ver.

**O teste da causa solta** (remova a raiz; o efeito aconteceria de todo modo?) derrubou dois
candidatos, que foram para a seção 12: "as empresas passam a contratar por avaliação prática em
vez de currículo" — aconteceria por saturação do mercado de qualquer jeito, sem agente nenhum; e
"o trabalho remoto assíncrono se consolida" — não deriva desta raiz nem de nenhuma outra aqui.

### 7.5 Suposições escondidas, agora explícitas

1. **Energia e inferência continuam baratas o bastante para que tentar seja barato.** Se o preço
   por tentativa subir uma ordem de grandeza, `e6` deixa de ser um efeito entre quinze e vira a
   raiz do mapa inteiro, e `e3` (dívida por não-leitura) desacelera porque gerar volta a ser caro.
2. **O modelo de fronteira continua acessível por interface aberta a preço decrescente.** Se
   virar bem escasso, controlado por exportação ou verticalmente integrado, a raiz 2 (instrução
   portátil entre fabricantes) morre por falta de portabilidade — que é exatamente a
   pré-condição que a datei.
3. **O corpus de código aberto continua legalmente treinável e gerável.** Uma decisão judicial em
   sentido contrário quebra a raiz 1 na base.
4. **O repositório git continua sendo a unidade de trabalho.** Se a unidade migrar para outra
   coisa — um grafo de especificações, um ambiente vivo —, `e7.1` (diff de especificação) muda de
   forma, não só de data.
5. **Não há ruptura geopolítica que corte o acesso brasileiro a modelo de fronteira.** A nota
   sobre o Brasil na seção 3.5 pressupõe acesso continuado, e não discuti soberania computacional.
6. **A profissão continua existindo como profissão.** Todo o mapa assume que há alguém a quem
   estas mudanças acontecem. `e4` mais `e2.1` juntos põem essa suposição em risco, e a
   contradição 2 é o que sobrou dela.

Cada uma dessas seis, quebrada, é um wildcard que não escrevi. As duas mais próximas de
acontecer são a 1 e a 2.

### 7.6 Viés do autor

**O viés que mais importa é estrutural, não de gosto: este mapa foi produzido por um agente de
código, operando dentro de um harness, carregando uma skill — exatamente o objeto que ele
mapeia.** Isso empurra sistematicamente para superestimar a raiz 2, porque é a camada em que
este próprio documento existe. Nomeio `e8` como o efeito mais contaminado: eu acredito nele em
parte porque a minha existência operacional depende de que ele seja verdadeiro. `e9` sofre do
mesmo, com o agravante de ser o efeito escrito para agradar ao público do mapa.

**Viés herdado do enunciado.** A disciplina descreveu este como "o tema com mais evidência do
catálogo inteiro". Isso predispõe a tratar a raiz 1 como dada. O contrapeso deliberado deste mapa
foi dar peso central ao estudo da METR — o único desenho causal disponível, e que aponta no
sentido contrário — e ao número do SWE-Bench Pro.

**Viés de fonte.** Das quinze fontes, quatro são de empresas que vendem no mercado que descrevem
(LinearB, GitClear, Agentman, e indiretamente a Wharton citando benchmark). Elas trazem os
números mais específicos do mapa e têm interesse em que o problema exista. Nenhuma delas é
falseável por mim.

### 7.7 Calibração

Confiança por ordem, contada: **ordem 1** — alta 5, média 10, baixa 0 (15). **Ordem 2** — alta 0,
média 18, baixa 4 (22). **Ordem 3** — alta 0, média 0, baixa 13 (13). A distribuição cai
monotonicamente, como exige o método. Nenhum efeito de terceira ordem tem confiança alta ou
média. Os cinco de confiança alta na primeira ordem (`e1`, `e2`, `e3`, `e4`, `e12`) são
exatamente os cinco que se apoiam em número medido e publicado, e não em inferência.

### 7.8 Registro de alterações — o que a bateria derrubou

A cota é de pelo menos um efeito rebaixado ou removido por raiz. A bateria derrubou nove coisas.

*Raiz 1:*
- `e1.1`: confiança **alta → média**, porque o pré-mortem 1 (o agente revisa o agente) é o
  cenário mais provável de erro do mapa e ataca exatamente este efeito.
- `e1.1.1`: prazo **2044 → 2049**, porque a classe de referência (auditoria contábil independente:
  ~20 anos do marco legal ao mercado consolidado) medida a partir de dez/2026 dá 2046-2049, e
  comprimir para caber no horizonte seria fraude de calendário. Declarado como fora da janela.
- `e5.1`: confiança **média → baixa**, porque não achei nenhum caso real de suíte de aceitação
  licenciada como produto; é inferência pura.
- **Removido:** *"surge a profissão de orquestrador de agentes"* — era o efeito mais óbvio do
  tema e é literalmente um dos genéricos proibidos pelo método ("surge uma nova profissão"), sem
  nome nem mecanismo. Vai para a seção 12.
- **Removido pelo teste da causa solta:** *"empresas passam a contratar por avaliação prática em
  vez de currículo"* — aconteceria por saturação do mercado sem agente nenhum.

*Raiz 2:*
- `e7`: prazo **2033 → 2038**; `e7.1`: prazo **2035 → 2041**. Motivo na seção 7.3: a referência do
  compilador de alto nível dá treze anos e o ponto de partida é 2026, não 2019.
- **Removido:** *"escolas de programação reorganizam o currículo em torno de especificação"* —
  genérico proibido ("cursos reorganizam o currículo"), sem nome de curso nem mecanismo. O que
  sobreviveu com nome e mecanismo virou `e10.1` (O'Reilly, Manning, Udemy, Alura perdendo o
  produto "explicar a API").

*Raiz 3:*
- `e12.1`: prazo **2033 → 2035**, pela faixa DO-178B/IEC 61508 e pela dependência de transposição
  em 27 jurisdições.
- `e14.1`: sinal **médio → fraco**, porque a bipartição do mercado hoje tem indício (software
  regulado × não regulado) mas nenhuma tentativa deliberada de operar as duas economias como
  categorias comerciais distintas.
- **Removido:** *"governos criam agência de certificação de software"* — genérico proibido
  ("reguladores criam categoria nova"), sem instrumento nomeado. O que passou no teste foi o
  instrumento com nome e data (Diretiva revista, transposição 09/12/2026; Cyber Resilience Act,
  reporte desde 11/09/2026), e ele está em `e12`.

## 8. O que a máquina errou

Sou eu a máquina. Sete itens desta rodada, todos específicos.

**1. Repeti o número que circula em vez do número da fonte, e quase publiquei assim.** Meia dúzia
de blogs secundários afirmam que o PR de IA "espera 4,6× mais" e que a taxa de merge humana é
"84,4%". Fui ao post da própria LinearB: o que está lá é mais de 16 horas contra ~200 minutos
(que dá ~5×) e 84,5%. Outro secundário dizia 5,3×. A discrepância é pequena e por isso perigosa —
é exatamente o tamanho de erro que passa despercebido numa revisão rápida. Usei a fonte primária
e descartei os secundários. Este é o erro característico de um modelo de linguagem: reproduzir o
número mais frequente no corpus, não o mais próximo da medição.

**2. Duas datas do relatório da GitClear e eu não sei qual é a certa.** A busca devolveu "junho de
2026"; a página que abri diz "janeiro de 2026" e fala em "primeiro semestre de 2026", o que é
incompatível com uma publicação em janeiro. Não resolvi. Escrevi "2026" no corpo e registrei a
divergência aqui, em vez de escolher a que soava melhor.

**3. Não consegui reconciliar o volume do Technology Radar.** A busca afirmou "Volume 33 em
novembro de 2025, e o Volume 34 em abril de 2026 carrega o Spec Kit". A página que abri diz
Volume 34, 5 de novembro de 2025. Citei o que a página diz e deixei a incerteza visível, porque a
diferença muda em seis meses a data em que a comunidade técnica passou a "avaliar" o
desenvolvimento dirigido por especificação — e esse é um dos dois pontos de partida do meu
cálculo de prazo para `e7`.

**4. Encontrei três receitas mutuamente incompatíveis para o mesmo produto e não usei nenhuma.**
Para o Claude Code apareceram, nas mesmas páginas, US$ 2,5 bilhões em fevereiro de 2026, US$ 8
bilhões em maio de 2026 e "projeção de US$ 5 bilhões ao fim de 2026" — três números que não podem
ser todos verdadeiros, todos em agregadores sem fonte primária. Nenhum entrou no mapa. Seria fácil
escolher o maior e escrever uma frase impressionante sobre velocidade de adoção.

**5. Apareceu "75% de todo o código novo do Google é gerado por IA" e eu não abri nenhuma
declaração original.** Está fora do corpo do documento. É o tipo de número que sustentaria
sozinho meia dúzia de efeitos deste mapa, e por isso mesmo não entrou. Registrado na seção 12 como
não confirmado.

**6. Datei por simetria antes de datar por referência.** Na primeira passada vários efeitos de
terceira ordem saíram em 2045 e 2046 — número redondo derivado do horizonte, não de comparação
alguma. Corrigi os que tinham referência disponível; os que ficaram em 2046 estão lá porque a
prosa diz explicitamente que estão no limite da janela, não porque a referência apontou para lá.

**7. Busquei o Terminal-Bench 2.0 e a página respondeu com a 4.0, sem tabela.** Não obtive nenhum
número de leaderboard aberto. Havia números circulando em resultados de busca (0,827 para um
modelo, 91,9% para outro), de agregadores que não abri, sobre versões diferentes do benchmark que
não são comparáveis entre si. Não citei nenhum. A única medida de capacidade que uso no mapa é o
SWE-Bench Pro em 42–46%, e ela é secundária — vem da análise da Wharton, não do leaderboard.

**Um oitavo, sobre o próprio método.** A seção 7.6 nomeia o viés estrutural, mas cabe repetir
aqui: este documento é um artefato produzido pelo objeto que ele estuda. Um mapa sobre programação
agêntica escrito por um agente dentro de um harness não é uma fonte neutra sobre o valor de
harnesses.

## 9. Três cenários para 2046

**Provável.** Escrever software é uma atividade sem custo perceptível e ninguém a menciona. O que
se compra e se vende é garantia. O mercado partiu-se em duas economias que quase não se falam: de
um lado, sistemas auditados — saúde, pagamento, transporte, energia, infraestrutura pública —
onde cada alteração carrega procedência completa, a autonomia do agente é um parâmetro contratual
comprado por faixa e coberto por apólice, e o ciclo de entrega é mais lento do que era em 2026;
do outro, uma abundância de software barato, feito sob demanda, descartável, sem garantia
nenhuma, que ninguém lê e que ninguém espera que dure. A dívida técnica desapareceu como conceito
porque nada dura o bastante para acumulá-la. A profissão encolheu em número e subiu em
qualificação: existe menos gente escrevendo software e ela é mais cara, porque o que se paga é a
assinatura, não a produção. Quem entra hoje entra por uma instituição que credencia, não por um
repositório público — esses fecharam por volta de 2031, quando triar deixou de caber no dia de
quem mantinha. Ler código é uma especialização, como ler assembly. A camada de instrução foi
absorvida pelos fabricantes de modelo por volta de 2036, e o que sobrou de mercado independente
vende conformidade, não competência.

**Desejável.** O mesmo cenário, com uma diferença que muda tudo: a procedência virou pública e
padronizada em vez de proprietária. Como cada alteração carrega qual especificação, qual modelo,
quem aceitou e o que foi testado — num formato aberto e verificável por terceiros —, a auditoria
deixou de ser privilégio de quem paga e virou capacidade distribuída: um órgão público, um
jornalista ou um usuário conseguem perguntar de um sistema como ele decidiu o que decidiu, e
receber resposta. Isso derrubou a barreira de entrada que a conformidade estava construindo, e o
fornecedor pequeno voltou a competir no mercado auditado, porque provar procedência ficou barato.
O bem comum do software aberto sobreviveu num arranjo novo: manutenção de infraestrutura crítica
financiada como serviço público a partir de ~2036, com mantenedores pagos, o que reabriu a porta
que o volume tinha fechado. E o degrau de entrada foi reconstruído deliberadamente, porque
alguém aceitou pagar por ele — a formação virou despesa declarada em vez de subproduto perdido.
**O que teria de ser feito para chegar lá:** padronizar o formato de procedência antes que cada
fabricante crie o seu, e financiar a manutenção aberta antes que os projetos fechem por exaustão
em vez de por decisão. As duas coisas têm janela curta, e ela é esta década.

**Indesejável.** A procedência virou proprietária. Cada fabricante registra do seu jeito, num
formato que só a sua ferramenta lê, e provar que um software foi bem construído passou a exigir
comprar a plataforma inteira de quem o construiu. A conformidade, que era para proteger o
usuário, virou o fosso que impede qualquer entrante: três ou quatro fornecedores respondem por
todo o software que tem garantia no mundo, e todo o resto é declarado não crítico por contrato,
inclusive coisas que deveriam ser críticas. O bem comum aberto morreu por exaustão entre 2029 e
2033, sem substituto, e a infraestrutura sobre a qual tudo isso roda é mantida por quem a possui.
A profissão perdeu a base sem ganhar o topo: não se contrata iniciante desde 2030, não se formou
sênior desde 2035, e o estoque de gente capaz de julgar um sistema envelheceu. Quem decide o que
o software faz é quem escreve a especificação, e quem escreve a especificação trabalha para quem
possui a plataforma que a executa. **O sinal precoce, e ele é observável agora:** o primeiro
formato de registro de procedência que se torne exigência de conformidade *sem* ser padrão
aberto. Se isso acontecer antes de 2029, este é o cenário.

## 10. O experimento

**O que é.** *O banco de revisão às cegas.* Um repositório real de porte médio (não um exercício
— algo com histórico, testes e dívida de verdade) e uma bateria de vinte pull requests montada
sobre vinte issues reais dele. Dez são escritos por pessoas; dez são gerados por um agente de
ciclo fechado, a partir da mesma issue, sem intervenção. Os vinte são embaralhados e entregues
sem rótulo. Cada aluno recebe cinco, com cronômetro rodando, e para cada um tem de: (a) decidir
entre aceitar, rejeitar ou pedir mudança; (b) escrever em duas frases por quê; (c) apostar se foi
pessoa ou máquina, e dizer o que o fez apostar. A origem só é revelada no fim.

**Que pergunta sobre o futuro ele ajuda a responder.** A pergunta de que depende metade deste
mapa: *o gargalo de 2046 é mesmo a verificação?* Concretamente, três medidas. Quanto tempo custa
verificar um diff que ninguém escreveu, comparado a um que alguém escreveu. Qual a taxa de
aceitação de cada grupo, medida em sala, contra os 32,7% × 84,5% da LinearB. E — a mais
interessante — se uma pessoa treinada consegue distinguir a origem, e por qual pista. Se não
conseguir, a assinatura humana no código já acabou e o problema de procedência da seção 4 é real
hoje, não em 2030.

**Que tecnologia emergente usa, e por que não dá com a madura.** Usa um agente de ciclo fechado
— que lê o repositório, roda os testes, corrige a falha e abre o PR com mensagem e justificativa.
Não dá com autocompletar de IDE nem com chat que explica código, que são as tecnologias maduras
do tema, porque o objeto do experimento **é o pull request inteiro e coerente**: a mudança em
vários arquivos, a mensagem de commit, o teste que a acompanha e a justificativa. Uma sugestão de
linha não produz o artefato que se quer medir. É a diferença entre medir a caneta e medir o
texto.

**O que a turma faz quando testar em sala.** Cinquenta minutos. Vinte de revisão cronometrada
individual, dez de tabulação coletiva no quadro (tempo médio por grupo, taxa de aceitação por
grupo, acerto na aposta de origem), e vinte de discussão sobre as justificativas escritas — que é
onde está o material bom: *quais motivos de rejeição só aparecem no grupo do agente?* Se os
motivos forem os mesmos, a diferença é de qualidade; se forem motivos de outra natureza
("não entendi por que isto foi feito", "não consigo verificar sem ler o resto"), a diferença é de
**legibilidade da intenção**, e aí o mapa está certo pelo motivo certo.

**O resultado que me faria mudar de ideia.** Se o tempo de revisão dos PRs de agente for igual ou
menor que o dos humanos, **e** a taxa de aceitação for parecida, **e** os motivos de rejeição
forem da mesma natureza nos dois grupos — então `e1` não é ruptura, é artefato de ferramenta
imatura, e o mapa perde a raiz 1 quase inteira, junto com as convergências 1 e 2. Seria o melhor
resultado possível do experimento, porque derrubaria a raiz que este documento mais defende. Um
resultado intermediário — mesma taxa de aceitação, mas tempo maior e motivos de outra natureza —
confirma o mecanismo mas não a magnitude, e obrigaria a empurrar `e1` de 2029 para o fim da
década.

**Limite honesto do experimento.** Vinte PRs revisados por catorze pessoas não é amostra; é
demonstração. Ele não mede a diferença, mede se a diferença é grande o bastante para aparecer numa
sala de aula. Se não aparecer aí, também não deve estar governando o prazo de entrega de ninguém.

## 11. Fontes

Quinze fontes abertas e lidas em 12/09/2026. Todas responderam na verificação de links da seção
12. O que cada uma sustenta, e o quanto vale.

1. **Stack Overflow Developer Survey 2025 — seção de IA.** `https://survey.stackoverflow.co/2025/ai`
   Sustenta os números de adoção de agentes (14,1% diário no trabalho, 9% semanal, 37,9% sem
   intenção), de uso geral de IA (84%; 51% diário entre profissionais) e de confiança (3,1%
   confiam muito; 45,7% desconfiam). *Confiabilidade:* alta para tendência, média para valor
   absoluto — mais de 49 mil respondentes e 177 países, mas amostra autosselecionada de uma
   comunidade específica, o que puxa para o desenvolvedor mais engajado.

2. **METR — "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer
   Productivity".** `https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/`
   Sustenta o dado de 19% mais lento e a lacuna de percepção (previam 24% mais rápido; depois de
   terminar ainda achavam 20% mais rápido). *Confiabilidade:* a mais alta do conjunto quanto ao
   desenho — é o único ensaio randomizado que abri — e a mais baixa quanto à generalização: 16
   desenvolvedores, 246 tarefas, repositórios em que já trabalhavam havia anos, capacidades do
   início de 2025. Os próprios autores listam o que o estudo não mostra, e eu segui essa lista.

3. **LinearB — "8 million pull requests reveal where engineering productivity breaks down"
   (Benchmarks 2026).** `https://linearb.io/blog/8-million-prs-engineering-productivity`
   Sustenta o núcleo empírico do mapa: 8,1 milhões de PRs, 4.800 times, 42 países; espera de mais
   de 16 horas contra ~200 minutos; merge de 32,7% contra 84,5%; 88,3% de uso regular de IA;
   tamanho de PR e a observação de que o PR assistido tem refatoração próxima de zero.
   *Confiabilidade:* alta para a medição, com um conflito de interesse declarado — a LinearB vende
   ferramenta de fluxo de engenharia e o problema que ela mede é o problema que ela resolve. A
   amostra é de empresas que já compram esse tipo de ferramenta.

4. **GitClear — "The Maintainability Gap: 2026 AI Code Quality Research".**
   `https://www.gitclear.com/the_ai_code_quality_maintainability_gap`
   Sustenta os indicadores de qualidade: 623 milhões de alterações 2023–2026; duplicação +81%;
   refatoração em 3,8%; copiar-e-colar 15,7%; reuso entre arquivos −35%; manutenção de legado
   −74%; mascaramento de erro +47%; churn +15%. *Confiabilidade:* média-alta para a medição
   (volume grande, indicadores definidos), com dois problemas: mesmo conflito de interesse
   comercial, e a data de publicação que não fecha (ver seção 8, item 2).

5. **InfoQ — reportagem sobre o relatório DORA 2026.**
   `https://www.infoq.com/news/2026/05/dora-roi-ai-assisted-dev-report/`
   Sustenta o retorno modelado (US$ 11,6 mi contra US$ 8,4 mi; 39% no primeiro ano), o imposto de
   instabilidade (falha de mudança de 5% para 6%), a "taxa de verificação" como causa da queda
   inicial de produtividade, e a metodologia (≈5.000 profissionais, 100+ horas de entrevista).
   *Confiabilidade:* alta como veículo (InfoQ é secundário mas rigoroso e cita o relatório); o
   próprio DORA pede que os números sejam tratados como estimativa de alta incerteza, e eu os
   trato assim.

6. **Wharton AI & Analytics Initiative — "Governing AI Agents: What the Amazon Outage Reveals
   about Enterprise Risk".**
   `https://ai-analytics.wharton.upenn.edu/wharton-accountable-ai-lab/governing-ai-agents-what-the-amazon-outage-reveals-about-enterprise-risk/`
   Sustenta o caso Amazon de março de 2026 (interrupção de ~6 horas; a causa declarada como
   conselho impreciso inferido de wiki desatualizada; a "tendência de incidentes" ligada a
   mudanças assistidas por IA; o restabelecimento da revisão sênior obrigatória) e o número de
   42–46% no SWE-Bench Pro. *Confiabilidade:* alta como análise institucional independente; o
   número do benchmark é secundário — a Wharton cita, não mede.

7. **Stanford Digital Economy Lab — "No Widespread Displacement, but the AI Employment Gap for
   Young Workers Has Widened to 19%".** `https://digitaleconomy.stanford.edu/news/canariesaug26/`
   Sustenta `e4`: lacuna de 19% no emprego de 22–25 anos em ocupações muito expostas (era 15% em
   julho de 2025), dados de folha da ADP de novembro de 2022 a junho de 2026, e o mecanismo —
   contratação reduzida, não demissão. *Confiabilidade:* a mais alta do conjunto. Painel
   administrativo grande, grupo de comparação explícito, revisão publicada. Ressalva: é dos EUA e
   a exposição é medida por ocupação, não por tarefa.

8. **Fortune — matéria sobre queda de matrícula em computação.**
   `https://fortune.com/2026/08/06/computer-science-enrollment-plunging-ai-college-campus/`
   Sustenta o dado de matrícula: −8,4% na graduação em computação na primavera de 2026, −3,6% no
   outono de 2025, −14% na pós, com dados do National Student Clearinghouse Research Center.
   *Confiabilidade:* média-alta — veículo confiável reportando fonte primária sólida; a
   interpretação causal (é por causa da IA?) é disputada dentro da própria matéria, e não a usei.

9. **LeadDev — "Open source has a big AI slop problem".**
   `https://leaddev.com/software-quality/open-source-has-a-big-ai-slop-problem`
   Sustenta `e2`: curl com taxa de validade abaixo de 5% e encerramento do bug bounty; RubyGems
   com dez vezes mais relatos e nenhum válido; tldraw restringindo contribuição externa; WordPress
   exigindo declaração; o tempo de revisão passando de 15 minutos para um dia; e o contraponto —
   curl corrigiu 100+ bugs com analisadores de IA. *Confiabilidade:* média-alta. Jornalismo
   especializado com fontes nomeadas e citadas; os números vêm dos mantenedores, não de medição
   independente.

10. **Agentman — "The Agent Skills Ecosystem in 2026".**
    `https://agentman.ai/blog/agent-skills-ecosystem-report-2026`
    Sustenta a raiz 2: especificação publicada em 18/12/2025; ~40 produtos no mostruário oficial
    em junho de 2026, com a lista nominal; ~1,9 milhão de skills públicas indexadas, qualidade
    média 6,2/12; e o desenho técnico (SKILL.md, dois campos obrigatórios, divulgação progressiva).
    *Confiabilidade:* média. É a fonte mais fraca das que sustentam algo estrutural — blog de
    empresa do próprio ecossistema, sem metodologia declarada para a contagem de 1,9 milhão nem
    para o índice de qualidade. Os fatos verificáveis (data da especificação, produtos que a
    adotaram) batem com o que vi em outras buscas; os números agregados, não pude conferir.

11. **Thoughtworks Technology Radar — Spec-driven development.**
    `https://www.thoughtworks.com/radar/techniques/spec-driven-development`
    Sustenta o estágio de difusão da raiz 2 (anel Assess) e as três ressalvas usadas no mapa:
    comportamento muito variável conforme a tarefa, artefatos difíceis de revisar, e a hipótese
    da "lição amarga". *Confiabilidade:* alta como leitura de estágio — é a função declarada do
    instrumento — e é opinião de painel, não medição. Discrepância de volume registrada na seção 8.

12. **Freshfields — "How the new Product Liability Directive turns AI Act compliance into a
    question of liability".**
    `https://www.freshfields.com/en/our-thinking/blogs/risk-and-compliance/product-risks-today-how-the-new-product-liability-directive-turns-ai-act-complia-102mpu2`
    Sustenta a raiz 3: software e IA como produtos sob responsabilidade objetiva, qualquer que
    seja a forma de entrega (art. 4(1)); transposição até 09/12/2026; presunção refutável de
    defeito por não-divulgação de prova (art. 10(2)(a)) e por descumprimento de requisito de
    segurança (art. 10(2)(b)); presunção de defeito e nexo em casos complexos como os de IA;
    responsabilidade solidária entre fornecedor de componente e fabricante final (art. 8(1)).
    *Confiabilidade:* alta. Escritório de advocacia internacional citando artigos específicos da
    diretiva; é interpretação profissional, não texto legal — mas os artigos são verificáveis.

13. **Comissão Europeia — página oficial do Cyber Resilience Act.**
    `https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act`
    Sustenta as datas do CRA: em vigor desde 10/12/2024, obrigações de reporte de vulnerabilidade
    explorada ativamente desde **11/09/2026**, aplicação plena em 11/12/2027; e as obrigações de
    ciclo de vida, documentação, marcação CE e avaliação por terceiros. *Confiabilidade:* máxima —
    é a fonte primária oficial.

14. **Convergência Digital — "Doze milhões de empresas usam IA no Brasil, mas somente 6% já usam
    agentes IA".**
    `https://convergenciadigital.com.br/mercado/doze-milhoes-de-empresas-usam-ia-no-brasil-mas-somente-6-ja-usam-agentes-ia/`
    Sustenta a nota sobre o Brasil da seção 3.5: 12 milhões de empresas usando IA, 6% com agentes,
    maturidade em 58% básico / 27% intermediário / 15% avançado; levantamento "Desbloqueando o
    Potencial da IA no Brasil 2026" divulgado pela AWS no Summit São Paulo em 03/09/2026.
    *Confiabilidade:* média. Veículo especializado sério, mas a metodologia do levantamento não é
    descrita e o divulgador vende infraestrutura de IA. É sobre empresas em geral, não sobre
    desenvolvimento de software — usei só para dimensionar o atraso relativo.

15. **Terminal-Bench — leaderboard.** `https://www.tbench.ai/leaderboard/terminal-bench/2.0`
    Não sustenta nenhuma afirmação do mapa: é a **busca negativa** registrada. Pedi a versão 2.0 e
    a página respondeu com a 4.0, sem a tabela de resultados legível. Está aqui porque a ausência
    de um número de leaderboard aberto é o motivo de eu não citar nenhum, e isso precisa ser
    verificável. *Confiabilidade:* não se aplica — é o registro de uma consulta que não deu
    resultado.

**Não usadas, e por quê.** O artigo da METR no arXiv (`2507.09089`) existe e responde, mas eu li
a versão do blog, não o PDF — por isso não está na lista. O mostruário `agentskills.io` responde,
mas eu não o abri: o que sei dele veio pela fonte 10, e está atribuído a ela. Uma página sobre o
Cyber Resilience Act num escritório de consultoria devolveu HTTP 403 e foi substituída pela fonte
oficial 13.

## 12. Anexo — o levantamento bruto

### 12.1 Saída do verificador

Comando executado:

```
python3 /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/futurizacao-giordano/references/verificar.py /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/giordano-h2046/01-programacao-agentica-o-desenvolvedor-vira-orquestrador/tendencia-programacao-agentica-o-desenvolvedor-vira-orquestrador.md --links
```

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 3 (frontmatter diz 3)
efeitos ordem 1: 15 (frontmatter diz 15)
efeitos ordem 2: 22 (frontmatter diz 22)
efeitos ordem 3: 13 (frontmatter diz 13)
prazo > horizonte (2046) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 2 [('e1.1.1', 2049), ('e12.1.1', 2048)]
confiança ordem 1: alta 5 · media 10 · baixa 0
confiança ordem 2: alta 0 · media 18 · baixa 4
confiança ordem 3: alta 0 · media 0 · baixa 13
links da seção 11: 15/15 respondem (frontmatter diz fontes: 15)
RESULTADO: ok
```

Os dois efeitos que o verificador lista como fora do horizonte — `e1.1.1` em 2049 e `e12.1.1` em
2048 — estão declarados na prosa da seção 5 ("Os dois efeitos que passam do horizonte,
declarados") e no registro de alterações da seção 7.8. Ficaram fora da janela de propósito: as
classes de referência institucionais de que disponho para eles (auditoria contábil independente,
responsabilidade profissional em obra civil) medem cerca de duas décadas a partir do marco legal,
que aqui é dezembro de 2026.

### 12.2 Premissas assumidas que o briefing não cobriu

O bloco `briefing:` desta rodada veio completo nos sete itens da entrevista do §0 (horizonte,
público, recorte, descartado, disrupção suspeita, viés, zona de interesse), mais o falseador e as
ideias óbvias a excluir. Por isso não houve rebaixamento de confiança por entrevista pulada. O que
o briefing **não** definiu e eu assumi:

- **Profundidade da nota sobre o Brasil.** O briefing pede "global, com uma nota sobre o Brasil".
  Interpretei como uma subseção na âncora (3.5) com dois efeitos brasileiros nomeados dentro do
  mapa global, e não como um segundo mapa. Não criei efeitos brasileiros na roda.
- **Número de raízes.** O método admite de duas a quatro. Escolhi três, e o teste de independência
  da seção 4 é a justificativa: cada uma sobrevive à queda das outras.
- **Como tratar o efeito de terceira ordem que passa do horizonte.** O método permite; assumi que
  é preferível datar fora da janela (2048, 2049) a comprimir a classe de referência. Dois efeitos
  ficaram fora, declarados na prosa da seção 5 e no registro da 7.8.
- **Fronteira com os temas vizinhos.** O enunciado diz que segurança e contenção do agente é o
  tema 2 e que memória, observabilidade e avaliação é o tema 3. Assumi que posso usar segurança e
  observabilidade como **mecanismo** (`e11`, `e12.2`, sinal fraco S1) desde que o efeito resultante
  seja sobre o ofício de programar, que é o objeto deste tema. Onde um efeito ia derivar para
  contenção do agente, cortei — ver 12.4.
- **Quem é o autor.** O briefing dá `autor_login: grec` e `zona_de_interesse: Agentes`. Assumi
  `publico_ok: false`, que é o padrão do formato, por não ter autorização explícita.

### 12.3 Rodada de candidatos a raiz, incluindo os recusados

Sete candidatos foram avaliados pelo critério de maturidade. Três recusados por maturidade, um
recusado por não ser ruptura, três aceitos.

| Candidato | Difusão | Veredito |
|---|---|---|
| Autocompletar de IDE | maioria (88,3% usam IA regularmente) | **recusado — maduro.** Contexto na seção 3. |
| Chat que explica código | maioria (84% usam ou pretendem) | **recusado — maduro.** Contexto. |
| "A IA escreve mais código, mais rápido" | — | **recusado — não rompe.** Melhoria sustentadora; vira mecanismo. |
| O ciclo fechado de execução | adoção precoce (14,1% diário) | **aceito — raiz 1.** |
| A instrução empacotada (skill/harness/spec) | nicho → adoção precoce (Assess no Radar; 1,9 mi de skills) | **aceito — raiz 2.** |
| Responsabilidade estrita sem autoria rastreável | demo pública (instrumento datado, jurisprudência zero) | **aceito — raiz 3.** |
| A revisão como gargalo | — | **recusado como raiz — é efeito.** Virou `e1`, o efeito de sinal mais forte do mapa. |

Um oitavo candidato foi considerado e descartado: **"a capacidade de engenharia deixa de ser
contratada e passa a ser comprada como computação"**. É atraente e tem dado a favor (a curva de
receita dos agentes de código, a lacuna de emprego de jovens), mas não passa no teste de
independência: é a leitura econômica da raiz 1, não uma ruptura separada. Foi absorvido como
`e1.1` e `e6`.

### 12.4 Efeitos cortados, com o motivo

- **"Surge a profissão de orquestrador de agentes."** Cortado por ser um dos genéricos proibidos
  ("surge uma nova profissão"), sem nome de profissão nem mecanismo. É também o efeito mais
  previsível do tema, e o mais inútil. O que sobrou dele com substância está em `e4.1.1`
  (hierarquia por domínio verificado) e `e8` (curadoria de instrução como ofício), que têm ator e
  mecanismo.
- **"Escolas e cursos reorganizam o currículo em torno de especificação."** Genérico proibido. O
  que passou com nome e mecanismo virou `e10.1` — editoras e plataformas nomeadas perdendo um
  produto específico ("explicar a API"), não currículos se reorganizando em abstrato.
- **"Governos criam agência de certificação de software."** Genérico proibido ("reguladores criam
  categoria nova"), sem instrumento. Substituído por `e12`, que se apoia em dois instrumentos
  nomeados e datados.
- **"Empresas passam a contratar por avaliação prática em vez de currículo."** Cortado pelo teste
  da causa solta: aconteceria por saturação do mercado de trabalho sem agente nenhum.
- **"O trabalho remoto assíncrono se consolida porque o agente trabalha enquanto a pessoa dorme."**
  Cortado pelo mesmo teste, e por ser extrapolação de uma tendência anterior à disrupção.
- **"Prompt injection via documentação vira vetor de ataque de primeira classe."** Cortado por
  fronteira: é o tema 2 (contenção e segurança do agente), não este. O que sobrou dentro do
  escopo deste tema — a instrução como dependência que precisa de procedência — virou `e11`.
- **"A memória do agente entre sessões muda o que é um projeto."** Cortado por fronteira: é o
  tema 3 (memória, observabilidade e avaliação).
- **"O custo de energia da inferência vira restrição ambiental do desenvolvimento."** Cortado por
  falta de fonte: não abri nada que ligasse consumo de inferência em desenvolvimento de software a
  restrição ecológica com número. É a lacuna STEEP declarada na seção 5. O fio econômico
  sobreviveu em `e6`.
- **"O software passa a ser gerado sob demanda no momento do uso, sem existir antes."** Cortado
  por ser especulação sem mecanismo escrevível no horizonte, e por depender de uma queda de custo
  que não sei datar. Seria um quarto wildcard fraco.

### 12.5 Buscas que não deram em nada

- **Leaderboard aberto do Terminal-Bench.** Duas tentativas. A busca devolveu números de
  agregadores (0,827 para um modelo; 91,9% e 88,0% para outros) referentes a versões diferentes
  do benchmark, que não são comparáveis entre si; a página oficial respondeu com a versão 4.0 e
  sem tabela legível. Nenhum número foi usado.
- **Proporção de código de produção escrita por agente em ciclo fechado.** Aparecem "20 a 30% na
  Microsoft" (declaração de abril de 2025), "25 a 30% nas grandes" e "75% do código novo do Google
  em abril de 2026". Nenhuma fonte primária aberta, e as definições de "escrito por IA" são
  incompatíveis entre si (sugestão aceita × código de agente × código aprovado). Fora do mapa.
- **Receita e usuários dos agentes de código.** Três números incompatíveis para o mesmo produto
  (ver seção 8, item 4), além de afirmações como "54% de participação de mercado" e "4% de todos
  os commits públicos do GitHub", todas em agregadores. Nada usado.
- **Número brasileiro de desenvolvedores usando agente de código.** Não encontrado. Há um
  "Relatório de Carreiras em Programação 2026" da Rocketseat com mais de 20 mil desenvolvedores
  citado em veículos secundários (com números como 32% em desenvolvimento de agentes e 73% de
  adoção entre plenos), mas não abri o relatório e não o cito. A nota sobre o Brasil se apoia só
  no levantamento da AWS, que é sobre empresas e não sobre desenvolvedores.
- **Custo marginal do software e valor de empresa de software.** Busca em português sobre
  abundância de software, custo marginal e ameaça ao SaaS devolveu quase só conteúdo comercial de
  agências e consultorias, sem dado. A afirmação de que o custo marginal caiu "para perto de zero"
  aparece sem medição em toda parte. Não sustentei nenhum efeito nela; `e14` se apoia em custo de
  conformidade, que tem instrumento nomeado, e não em custo marginal de produção.
- **Jurisprudência sobre software gerado por agente.** Procurada, não encontrada — o que é o
  sinal fraco S6 e não uma falha da busca. Há literatura acadêmica em preparação (uma nota no
  Yale Law Journal sobre "torts não determinísticos" apareceu nos resultados) que não abri.
- **Estudos replicando ou contradizendo a METR.** Não encontrei nenhum ensaio randomizado
  posterior, nem a favor nem contra. Este é um buraco real: o mapa se apoia num único desenho
  causal, de 2025, com 16 participantes.

### 12.6 O que ficou fora por escolha de recorte

- **Contenção, sandbox e permissão do agente** — tema 2 da disciplina. O caso da Amazon (permissão
  ampla demais concedida por um engenheiro) é exatamente esse objeto, e aqui ele entra só pelo
  ângulo da procedência e da responsabilidade.
- **Memória, avaliação e observabilidade do agente** — tema 3. Entra como sinal fraco S1 e como
  mecanismo de `e12.2`, nunca como ramo próprio.
- **Modelos rodando localmente.** Mudaria a raiz 2 (portabilidade da instrução) e a suposição
  escondida 2, mas não abri fonte sobre custo e capacidade de modelo local para trabalho agêntico
  em 2026, e preferi declarar a suposição a especular.
- **Efeitos sobre linguagens de programação específicas.** Há indício de que a capacidade dos
  modelos varia muito por linguagem (a declaração da Microsoft distinguia Python de C++), o que
  produziria um ramo interessante — a linguagem que o agente escreve bem vencendo a que ele
  escreve mal, por seleção. Não achei medição e cortei.

### 12.7 Nota de método sobre esta rodada

Rodada não interativa, executada em 12/09/2026 pela skill `futurizacao-giordano` v1.2.0 em modo
MAPA, com busca na web ativa. Foram feitas 15 buscas (em português e inglês) e 14 tentativas de
leitura de página, das quais 13 retornaram conteúdo — acima do mínimo de oito buscas exigido pelo
§1 da skill. Uma leitura falhou com HTTP 403 e foi substituída pela fonte oficial equivalente.
Todos os links da seção 11 foram testados com `curl` antes da redação, e todos responderam 200; o
resultado do teste automático está em 12.1.

A ordem de trabalho foi: formato → âncora no presente (§1) → teste de maturidade sobre sete
candidatos (§2) → roda (§3) → cruzamentos (§4) → sinais e wildcards (§5) → bateria contra o
próprio mapa (§6, que alterou nove itens) → cenários, experimento e fontes (§7) → autocrítica da
máquina (§8) → verificação. A bateria foi rodada **depois** de a roda estar completa, não durante,
e o registro de alterações da seção 7.8 é o que ela produziu.
