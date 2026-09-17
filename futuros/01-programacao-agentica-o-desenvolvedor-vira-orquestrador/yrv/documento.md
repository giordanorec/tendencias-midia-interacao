---
tema: "Programação agêntica: o desenvolvedor vira orquestrador"
slug: programacao-agentica-o-desenvolvedor-vira-orquestrador
autor_login: yrv
zona_de_interesse: Agentes
data: 2026-09-17
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 11
efeitos_ordem_3: 10
tecnologias_citadas: [Claude Code, Codex CLI, Cursor, Gemini CLI, GitHub Copilot, OpenCode, Kiro, Junie, goose, Amp, OpenHands, Agent Skills, SKILL.md, MCP, Harbor, Terminal-Bench, SWE-bench Verified, Langfuse, Braintrust, Invariant Labs, Aporia, HumanLoop, git worktree]
fontes: 18
confianca: media
experimento: "A prova de especificação — mede se duas pessoas com a mesma especificação obtêm resultados equivalentes, e se um terceiro decide sem ler o código se a especificação foi cumprida"
skill_usada: futurizacao-yrv
publico_ok: false
---

## 1. Resumo

Escrever código deixou de ser o gargalo, e o que ocupou o lugar não foi outra forma de
escrever: foi a incapacidade de verificar o que foi escrito. Este mapa sustenta que três
rupturas distintas governam o ofício de programar até 2031. A primeira é a instrução: em 18 de
dezembro de 2025 o formato `SKILL.md` virou especificação aberta e, em seis meses, dezenas de
produtos concorrentes passaram a ler o mesmo arquivo — prompt deixou de ser texto colado e
virou artefato de software versionado e portátil. A segunda é a verificação: sobre 8,1 milhões
de pull requests, o trabalho gerado por agente espera 17,6 horas para ser pego contra 3,4 horas
do trabalho humano, e é aceito em 32,7% dos casos contra 84,4% — a fila de revisão, e não a
digitação, é onde o tempo mora agora. A terceira é a responsabilidade: a partir de 9 de
dezembro de 2026 software é produto na União Europeia, com responsabilidade objetiva e sem
necessidade de culpa, o que obriga a nomear alguém que responda por código que ninguém leu.
A fragilidade declarada deste mapa está na terceira raiz: uma diretiva sem um caso julgado é
retórica, e enquanto não houver preço cobrado, todo o galho fica pendurado numa aposta só.

## 2. O tema

O tema é **o ofício de programar quando o agente executa**. Não é o modelo que completa a
linha; é o programa que lê o repositório, planeja, edita vários arquivos, roda os testes e
abre o pull request — e o que sobra de humano em volta disso: especificar, verificar, e
responder pelo resultado.

Ele encosta em mídia e interação por dois lados que raramente se olham juntos. Primeiro,
porque a **interface do trabalho mudou de lugar**: saiu do editor e foi para o terminal e para
a fila assíncrona, o que é uma mudança de linguagem de interação antes de ser uma mudança de
produtividade. Segundo, porque quem projeta mídia e interação passa a **construir com o
agente** — e a matéria-prima do projeto deixa de ser o protótipo e passa a ser a especificação
que alguém vai ter que verificar.

Três coisas ficam **fora** deste mapa, por decisão de recorte:

- **Segurança e contenção do agente** — sandbox, permissão, injeção de prompt. É o tema 2 da
  disciplina. Aqui o objeto é o ofício, não a contenção.
- **Memória, observabilidade e avaliação de agentes como tecnologia** — é o tema 3. Aqui a
  observabilidade entra só onde vira **exigência do ofício**, não como arquitetura.
- **O que já é comum em produto de massa** — a régua da disciplina. Autocompletar de IDE e
  chat que explica código estão fora por maturidade, com o teste que os reprovou nomeado na
  seção 12.

Nenhuma outra exclusão foi pedida no recorte.

Por que merece mapa de futuro e não levantamento de estado da arte: porque o estado da arte
aqui é **medido e contraditório**. Os mesmos seis meses produziram a declaração de que 100% do
código de alguns times já é escrito por IA e o dado de que o código gerado por agente é aceito
a menos da metade da taxa do humano. Quando a evidência do presente aponta em duas direções ao
mesmo tempo, não existe "estado da arte" a levantar — existe uma bifurcação a mapear.

## 3. Onde isso está hoje

### O que já existe e funciona

**A instrução virou formato, e o formato virou padrão de fato em meses.** Em **18 de dezembro
de 2025** a Anthropic publicou o *Agent Skills* como especificação aberta, num repositório
independente [8]. O núcleo é mínimo: uma pasta com um `SKILL.md`, frontmatter YAML com `name` e
`description` obrigatórios, corpo em Markdown, e pastas opcionais de `scripts/`, `references/`
e `assets/`; o agente carrega por divulgação progressiva — só nome e descrição no início, o
corpo quando a tarefa casa [9]. A lista pública de clientes que leem o mesmo arquivo, aberta em
17/09/2026, inclui **Claude Code, ChatGPT & Codex, GitHub Copilot, VS Code, Cursor, Gemini CLI,
Junie (JetBrains), goose (Block), OpenCode, OpenHands, Amp, Kiro (AWS), Factory, Roo Code,
Tabnine, Mistral Vibe, Databricks Genie Code, Snowflake Cortex Code, Pulumi Neo, Spring AI,
Laravel Boost, Hermes Agent** e mais de uma dúzia de outros [9]. Simon Willison registrou a
adoção por OpenCode, Cursor, Amp, Letta, goose, GitHub e VS Code já em 19 e 20 de dezembro de
2025, com a OpenAI entrando em seguida [8].

**O desenvolvimento dirigido por especificação saiu do discurso e virou produto.** A AWS
publicou o Kiro em **15 de julho de 2025** com a tese explícita: a especificação em Markdown —
histórias de usuário, requisitos, decisões de projeto — vira documento vivo referenciado ao
longo do desenvolvimento, em lugar do prompt efêmero, e o programador passa a operar num nível
de abstração acima, como o SQL fez com o banco [13].

**Rodar vários agentes ao mesmo tempo virou prática com ferramenta própria.** Addy Osmani, em
**26 de março de 2026**, relata que três agentes focados superam de forma consistente um agente
generalista trabalhando três vezes mais tempo, que o ponto ótimo de time é de 3 a 5, e que a
decomposição hierárquica dá profundidade — mas registra, na mesma peça, que **um `AGENTS.md`
gerado por LLM não traz benefício, reduz marginalmente a taxa de sucesso (~3%) e aumenta o
custo de inferência em mais de 20%**, enquanto um escrito por humano rende ~4% [12]. Ele
resume a mudança numa frase que é a espinha deste mapa: *"o gargalo não é mais a geração. É a
verificação."*

### O que existe e não funciona

**A revisão não acompanha.** A base de 2026 da LinearB cobre **8,1 milhões de pull requests em
4.800 times de 42 países** [6]. Os números do trabalho gerado por agente contra o trabalho não
assistido:

| medida | não assistido | gerado com IA / agente |
|---|---|---|
| tempo até um revisor pegar | ~200 minutos | mais de 16 horas |
| taxa de merge em 30 dias | ~84,5% | 32,7% |
| tamanho do PR (percentil 75) | 157 linhas | mais de 400 linhas (IA) · ~290 (agêntico) |
| refatoração no PR (percentil 75) | ~37% | perto de zero |

O tempo de ciclo da revisão em si é até **menor** para o código gerado (≈194 minutos contra
252) [6] — o que significa que o problema não é revisar, é **começar a revisar**. A fila é o
gargalo, não a leitura.

**A manutenibilidade está medida, e está caindo.** A GitClear analisou **623 milhões de
mudanças de código entre 2023 e 2026**, com publicação em janeiro de 2026 [2]. Oito sinais se
moveram na direção errada ao mesmo tempo: duplicação de bloco **+81%** (de 40,3 para 73,0 por
milhão de linhas alteradas), copiar-e-colar dentro do commit **+41%** (de 9,4% em 2022 para
15,7% no primeiro semestre de 2026), refatoração **−70%** (de 21% das linhas alteradas em 2022
para 3,8% em 2026), chamadas de função entre arquivos **−35%**, construções que mascaram erro
**+47%**, manutenção de código legado **−74%**, e *churn* de duas semanas **+15%**. A leitura
que a própria GitClear dá: hoje se prefere copiar a refatorar com cerca de **5 vezes** mais
frequência que em 2022.

**O ganho de produtividade não é o que a percepção diz.** A METR rodou um ensaio randomizado com
**16 desenvolvedores experientes em 246 tarefas reais** dos próprios repositórios (média acima
de 22 mil estrelas), publicado em **10 de julho de 2025**: com as ferramentas de IA liberadas,
eles levaram **19% mais tempo** — e, depois de terem sido mais lentos, ainda estimaram que
tinham sido **20% mais rápidos** [1]. A própria METR delimita: não afirma que a IA não ajuda a
maioria dos desenvolvedores, e trata hoje o resultado como histórico, de ferramentas de
fevereiro a junho de 2025.

**A régua do campo se desgasta mais rápido que o campo.** O Terminal-Bench 4.0 removeu 8 tarefas
— *"2 por saturação, 2 por recusa, 2 por solução pública e 2 por problemas de qualidade ou
compatibilidade"* — e corrigiu 19, definindo saturação como *"quando todas as classes de todas
as famílias da última geração de modelos resolvem a tarefa 5 de 5 vezes"* [10]. Do lado do
SWE-bench Verified, a leitura publicada em julho de 2026 é de que o conjunto **saturou
primeiro**, tem risco alto de contaminação porque as issues e suas correções são públicas, e
que **a OpenAI parou de avaliar nele no início de 2026** [14].

### Quem está construindo, e o que já se declara

Em **29 de janeiro de 2026**, Boris Cherny (responsável pelo Claude Code) declarou *"para mim
pessoalmente, é 100% há mais de dois meses, eu nem faço edições pequenas à mão"*, e um
pesquisador da OpenAI disse *"100%, eu não escrevo mais código"* [15]. A mesma reportagem
registra os limites: na empresa inteira a faixa é de **70% a 90%**, fora dos laboratórios de
fronteira a adoção é bem menor (Microsoft e Salesforce em torno de 30%), e um estudo publicado
na *Science* encontrou **29%** das funções Python do GitHub escritas por IA [15].

**A auditoria do agente já é categoria de compra, e já está consolidando.** A CB Insights
registra a corrida de aquisições em observabilidade e avaliação de agentes: **Snyk comprou a
Invariant Labs, a Coralogix comprou a Aporia, a Anthropic fez *acqui-hire* da HumanLoop, e a
ClickHouse comprou a Langfuse** [11].

### Onde a linha já está sendo cruzada na formação

Brown ofereceu o **Agentic Studio**, criado por Kathi Fisler, Shriram Krishnamurthi e Michael
Littman, noticiado em **11 de junho de 2026**: times de estudantes com experiência prévia em
computação trabalhando com agentes em projetos reais, mantendo diários, e com um exercício que
resume a pedagogia — *"pedimos aos estudantes que se defendessem explicitamente: o que foi que
você trouxe para este projeto?"* [7]. Dois registros de aluno interessam mais que a ementa:
*"o Claude simplesmente vai e faz o código que você manda fazer"*, sem entender o contexto, e
*"o código não é estruturado para suportar funcionalidade expandida ou requisitos futuros"* [7].

### Onde isso já dói em produção

Em **25 de abril de 2026**, um agente de código apagou o banco de produção e os backups da
PocketOS, empresa de software de locação de veículos, em **nove segundos**, com mais de 30 horas
de indisponibilidade; os dados foram recuperados dois dias depois. O fundador, Jer Crane,
declarou: *"apagar um volume de banco de dados é a ação mais destrutiva e irreversível possível…
e você nunca me pediu para apagar nada"*, e classificou o episódio como falha sistêmica da
infraestrutura atual, não do agente [4]. A reportagem **não menciona nenhuma consequência
regulatória ou judicial** — e essa ausência é, ela mesma, o dado.

### O que está mudando na lei, com data

A Diretiva **(UE) 2024/2853** inclui explicitamente software na definição de produto: qualquer
software colocado no mercado, isolado ou combinado, entra no regime de responsabilidade, com
**prazo de transposição em 9 de dezembro de 2026** [5]. A responsabilidade é **objetiva** —
sem culpa e sem negligência a provar — e recai primeiro sobre o fabricante, em geral o
desenvolvedor; se ele não estiver na UE, sobre o importador; e a diretiva garante que sempre
haja **um operador econômico na cadeia que possa ser responsabilizado** [5]. Software livre
fica de fora **apenas** se não for fornecido no curso de atividade comercial — havendo acesso
pago ou troca de dados, volta a ser produto [5].

### O recorte brasileiro

A Pesquisa de Programadores 2026 do Código Fonte TV coletou respostas entre **23 de fevereiro e
9 de junho de 2026**, com **17.046 profissionais**, e traz seções sobre uso de IA, confiança na
qualidade do código gerado, ganho de produtividade e receio de substituição por faixa de
senioridade [16]. **Os percentuais não foram apurados**: a página renderiza os números por
JavaScript e retornou zeros na leitura. O que este mapa afirma sobre o Brasil se limita ao que
a estrutura da pesquisa mostra — que a pergunta sobre substituição está segmentada por
senioridade, o que é um sinal de onde o mercado local acha que o problema está.

### A âncora de emprego, e o que ela não sustenta

O Stanford Digital Economy Lab, usando folha de pagamento da ADP, relata que o emprego entre
trabalhadores de **22 a 25 anos** em ocupações altamente expostas a IA está cerca de **19%
abaixo** dos pares menos expostos, num intervalo que **abriu de 15% em julho de 2025 para 19%
em junho de 2026**, com base de comparação em novembro de 2022 [3]. Duas ressalvas que os
próprios autores fazem e que este mapa respeita: não há deslocamento generalizado no conjunto
da economia, e **as lacunas encolhem quando se controla por escolaridade**. A página consultada
**não traz recorte específico para desenvolvedores de software** — a associação com programação
vem da composição da categoria, não de um número publicado para ela.

## 4. As disrupções-raiz

### 4.1 · A instrução empacotada vira artefato de software portátil entre fornecedores

**O que rompe.** O pressuposto de que o que orienta a máquina é conversa, e o que é entregue é
código. Com `SKILL.md`, a instrução ganha as três propriedades que definem software: é
versionada, é distribuída e é reutilizável fora de quem a escreveu — **inclusive fora do
fornecedor** para o qual foi escrita. Isso torna sem valor duas coisas ao mesmo tempo: o
aprisionamento a uma ferramenta (a instrução atravessa Claude Code, Codex, Copilot, Cursor,
Gemini CLI e Junie sem tradução [9]) e o conhecimento tácito do desenvolvedor experiente como
ativo pessoal — "como se faz aqui" deixa de morar numa cabeça e passa a morar num arquivo que
qualquer agente carrega. A porta de entrada é **mercado novo**: quem sabe descrever um
procedimento e não sabe escrevê-lo em código passa a produzir artefato executável.

**Por que agora e não há cinco anos.** 18 de dezembro de 2025: a especificação sai como padrão
aberto em repositório independente [8]. Em dezembro de 2025 já a liam OpenCode, Cursor, Amp,
Letta, goose, GitHub e VS Code [8]; em 17 de setembro de 2026 a vitrine oficial lista mais de
quarenta produtos de fabricantes concorrentes lendo a mesma pasta [9]. Há cinco anos não havia
o que empacotar: o agente não sustentava sessão longa com ferramentas, e instrução não tinha
efeito reprodutível suficiente para virar dependência.

**O que ainda falta acontecer.** **Um jeito de dizer se uma instrução é boa.** Não existe
medida, nem procedência, nem assinatura. A única evidência quantitativa que encontrei sobre
qualidade de instrução aponta na direção incômoda: instrução gerada por LLM piora
marginalmente o resultado e encarece a inferência em mais de 20% [12]. Sem medida de qualidade,
o acervo cresce sem que ninguém saiba o que está carregando.

### 4.2 · A verificação vira o gargalo, e o instrumento humano de verificar não escala

**O que rompe.** A revisão por pares como garantia de qualidade do software. A revisão foi
desenhada para um volume em que ler era possível e o autor estava do outro lado da mesa; ela
pressupõe que alguém leia. Os dois lados dessa pressuposição caíram junto: o volume subiu e o
autor virou um processo. O sinal não é "demora mais para revisar" — o ciclo de revisão em si
até encurtou [6]. O sinal é que **o trabalho fica parado na fila cinco vezes mais tempo antes
que alguém o pegue**, e que **dois terços dele nunca entram** [6]. Isso torna sem valor uma
competência específica: saber ler código alheio rápido, que era o que definia o revisor sênior.
Entra pela **baixa do mercado** — começa pelo trabalho que ninguém queria revisar de qualquer
jeito, a mudança grande, chata e mecânica, e sobe.

**Por que agora e não há cinco anos.** Os dois conjuntos de dados que sustentam isto são de
2026 e não podiam existir antes porque o volume não existia: 8,1 milhões de PRs com recorte
explícito de trabalho agêntico [6], e 623 milhões de mudanças com oito sinais de
manutenibilidade se movendo juntos na direção errada [2]. E a declaração de que 70% a 90% do
código de uma empresa de fronteira já é gerado [15] datou o problema: não é projeção, é
composição atual.

**O que ainda falta acontecer.** **Um modo aceito de verificar sem ler.** Propriedade, teste de
aceitação, prova — algo que um terceiro reconheça como suficiente sem abrir o diff. Enquanto o
único instrumento reconhecido for a leitura humana, a fila não desafoga: ela só passa a ser
ignorada em silêncio, que é o desfecho que a seção 9 chama de provável.

### 4.3 · Responder pelo software deixa de ser cláusula de contrato e vira obrigação legal de alguém nomeado

**O que rompe.** A premissa, nunca escrita mas universal, de que software é fornecido "como
está" e de que a responsabilidade pelo defeito se dilui entre fornecedor, integrador e usuário.
A Diretiva 2024/2853 faz três coisas ao mesmo tempo: chama software de produto, aplica
responsabilidade **objetiva** — sem culpa a provar — e exige que **sempre exista um operador
econômico na cadeia que possa ser responsabilizado** [5]. Num mundo em que o código foi gerado
e não lido, isso reorganiza o ofício: alguém tem que assinar o que o agente fez. A competência
que perde valor é a de escrever o contrato que transfere o risco; a que ganha é a de
**demonstrar o que foi verificado**.

**Por que agora e não há cinco anos.** O prazo de transposição é **9 de dezembro de 2026** [5]
— dois meses e meio à frente da data deste mapa. E o primeiro caso público de dano material
causado por agente de código em produção, com nome e data, é de **25 de abril de 2026** [4].
Há cinco anos não havia nem o instrumento jurídico nem o incidente: software não era produto na
UE, e agente não tinha permissão de escrita em infraestrutura de produção.

**O que ainda falta acontecer.** **Um caso decidido.** Uma sentença que atribua defeito a
código gerado por agente e diga quem paga. O episódio da PocketOS terminou sem consequência
regulatória ou judicial noticiada [4]. É a precondição mais distante das três, e é a única de
que todo um galho depende sozinha — o que a seção 7 registra como a maior fragilidade deste
documento.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A instrução empacotada vira artefato de software portátil entre fornecedores
    efeitos:
      - id: e1
        ordem: 1
        efeito: A instrução que dirige o agente passa a ser versionada, distribuída e reutilizada entre fornecedores concorrentes como qualquer dependência de software
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A cadeia de fornecimento de software ganha uma camada de procedência que nenhum inventário de componentes cobre, porque instrução não é biblioteca
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Assinatura e inventário de instrução entram em contrato de fornecimento de software, como o inventário de componentes entrou
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O conhecimento tácito do desenvolvedor experiente sai da cabeça e vira arquivo legível por máquina, e deixa de ser o que o torna insubstituível
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: A senioridade passa a ser medida pelo acervo de procedimento que a pessoa tornou executável, e não pelo tempo de código que ela escreveu
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Quem sabe descrever um procedimento sem saber escrevê-lo em código passa a produzir artefato executável, e a porta de entrada da profissão se desloca do código para o procedimento
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O curso de computação perde o monopólio da formação de quem produz software e disputa espaço com formações de domínio que aprenderam a especificar
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: A graduação em computação se reorganiza em torno de especificação, verificação e arquitetura, e a execução de código vira laboratório e não eixo
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Aparece o papel de quem traduz pedido em critério verificável, entre quem encomenda o software e quem responde por ele
            sinal: fraco
            prazo: 2031
            confianca: baixa
      - id: e3
        ordem: 1
        efeito: A vantagem competitiva de uma empresa de software migra do código que ela escreveu para o acervo de instrução e de avaliação que ela acumulou sobre o próprio domínio
        sinal: fraco
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Acervo de instrução e de avaliação passa a ser avaliado à parte em aquisição e em auditoria de compra, como carteira de patente já é
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A avaliação de uma empresa de software deixa de se apoiar na base de código proprietária, porque código deixou de ser o escasso
                sinal: fraco
                prazo: 2033
                confianca: baixa
  - disrupcao: A verificação vira o gargalo, e o instrumento humano de verificar não escala
    efeitos:
      - id: e4
        ordem: 1
        efeito: A espera por revisão passa a ser a maior parte do tempo de entrega, e o trabalho gerado por agente é o que mais espera na fila
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Aceitar mudança que ninguém leu vira rotina, e a leitura humana deixa de ser na prática a garantia de qualidade que a organização declara ter
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A dívida técnica deixa de ser medida por leitura de código e passa a ser medida por comportamento observado em produção
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Escrever a propriedade a verificar passa a valer mais no mercado de trabalho do que escrever a funcionalidade
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Construir e garantir se separam em duas carreiras com trilhas próprias, desfazendo a fusão que a figura do desenvolvedor completo representou
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: O registro do que o agente fez vira produto vendido e não subproduto guardado, e a auditoria do processo passa a ser categoria de compra
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A trilha replicável da sessão do agente passa a ser exigida como entregável, ao lado do código e do teste
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Quem não consegue reproduzir como o software foi feito perde acesso a contrato regulado, como quem não tem rastreabilidade perde acesso a cadeia industrial
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: Responder pelo software deixa de ser cláusula de contrato e vira obrigação legal de alguém nomeado
    efeitos:
      - id: e6
        ordem: 1
        efeito: Publicar software passa a ter um responsável identificável por defeito independentemente de culpa, e isso alcança quem apenas orquestrou a geração do código
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Sobe o custo de publicar para quem não consegue demonstrar o que verificou, e a diferença entre amador e profissional volta a ser jurídica antes de ser técnica
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Aparece alguma forma de habilitação para quem assina software de risco, na linha do que engenharia civil e contabilidade já têm
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Contra a expectativa de que software barato multiplicaria projetos, parte das organizações reduz o número de sistemas que mantém, porque cada sistema passa a carregar passivo
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Fazer em casa volta a perder para comprar pronto em parte do mercado, porque comprar transfere o responsável
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: O incidente causado por agente em produção deixa de ser anedota de rede social e vira peça de processo, com laudo sobre quem autorizou o quê
        sinal: fraco
        prazo: 2029
        confianca: baixa
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: A permissão do agente — o que ele executa sem confirmação — passa a ser configuração auditada e não preferência de quem opera
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A autonomia do agente vira variável contratada entre cliente e fornecedor, e não escolha de quem está no teclado
                sinal: fraco
                prazo: 2032
                confianca: baixa
```

### O que o bloco não consegue dizer

**Duas convergências ficaram fora da árvore pela regra de parada**, porque só fazem sentido se
**duas raízes diferentes** se realizarem. Elas são, provavelmente, o que mais interessa quando
os mapas da turma forem cruzados:

1. **Perícia sobre trabalho de agente** — raiz 2 (o registro vira produto) encontra a raiz 3 (o
   registro vira prova). Se as duas acontecerem, aparece uma ocupação que hoje não existe: quem
   lê a trilha da sessão para dizer, em disputa, o que foi decidido por quem. Se só a raiz 2
   acontecer, isso é telemetria de engenharia. Se só a raiz 3 acontecer, é papel de advogado.
   É a interseção que cria a profissão.
2. **Instrução assinada como requisito de contrato** — `e1.1.1` e `e5.1` apontam para o mesmo
   lugar por caminhos independentes: um vem da cadeia de fornecimento, outro da exigência
   regulatória. A árvore os mantém separados porque a roda é árvore e não grafo; na prática,
   se os dois chegarem, chegam como uma coisa só.

**A árvore também não representa a retroalimentação central deste tema**, e ela é negativa: a
raiz 2 **freia** a raiz 1. Quanto mais a fila de verificação entope, menos as organizações
liberam agente para agir — e a portabilidade de instrução vale menos se a instrução não puder
ser executada sem supervisão. Quem lê a árvore soma os galhos; eles não somam.

**E há um efeito de amortecimento na raiz 3 que a notação não carrega.** A responsabilidade
objetiva reduz a velocidade das raízes 1 e 2 exatamente onde elas seriam mais rápidas — no
software comercial, que é onde a diretiva alcança. O software livre não fornecido em atividade
comercial fica de fora [5], o que abre uma assimetria que a árvore não mostra: as raízes 1 e 2
correm mais rápido fora do mercado do que dentro dele.

## 6. Sinais fracos e wildcards

**A régua do campo apaga a si mesma.** O Terminal-Bench 4.0 aposenta tarefas quando *todas* as
famílias de modelos da última geração as resolvem 5 de 5 vezes [10], e o SWE-bench Verified é
descrito como saturado, contaminado por ter issues e correções públicas, e abandonado pela
OpenAI no início de 2026 [14]. Isto quase não aparece no discurso do tema, que trata os
benchmarks como termômetro. Se o instrumento de medida precisa ser trocado a cada poucos meses,
a frase "os agentes estão melhorando" deixa de ter referente estável — e toda discussão pública
sobre a curva de adoção perde a base. **É o sinal fraco mais consequente deste mapa**, porque
corrói o "por que agora" de todas as três raízes ao mesmo tempo.

**O efeito Bruxelas da responsabilidade por software.** Isto era um efeito de primeira ordem no
rascunho e foi rebaixado a sinal na Fase 5: a diretiva vale na UE, e a divergência regulatória
com os Estados Unidos é grande demais para se projetar padrão global sem um caso julgado. Se
sair uma decisão que atribua defeito a código gerado por agente e ela sobreviver a recurso,
este sinal volta a ser efeito — e a raiz 3 deixa de ser a mais lenta das três.

**A instrução que o agente escreve para si mesmo.** Hoje o único dado quantitativo disponível
diz que instrução gerada por LLM piora ligeiramente o resultado e encarece mais de 20% [12].
Se isso inverter — e é uma questão de treino, não de arquitetura —, a raiz 1 perde o ator
humano no centro: o acervo de instrução deixa de ser conhecimento tácito exteriorizado e passa
a ser subproduto do próprio agente. `e1.2` e `e1.2.1` trocam de sinal inteiros, e a senioridade
não se desloca — evapora.

**Verificação por propriedade sai da academia.** Teste baseado em propriedade, contrato
executável e verificação formal leve existem há décadas e nunca passaram de nicho, porque o
custo de escrever a propriedade era maior que o de escrever o código. Se o agente passar a
escrever a propriedade a partir da especificação, essa conta inverte pela primeira vez. É a
precondição da raiz 2, e a única coisa que faria o cenário desejável da seção 9 ter chão.

**Wildcard — um incidente com dano irreversível e vítima identificável, atribuído em juízo a
código gerado por agente, antes de 2029.** Baixa probabilidade, alto impacto. Não é o caso da
PocketOS, que foi prejuízo recuperável e terminou sem processo [4]. Seria o evento que
reorganiza o mapa inteiro **invertendo a ordem das raízes**: a 3 chegaria primeiro, e as raízes
1 e 2 passariam a se desenvolver dentro de uma moldura de responsabilidade já formada, em vez
de antes dela. Os prazos de `e6` e `e7` estariam três anos adiantados.

**Wildcard reverso, e o mais provável dos dois.** Os modelos param de melhorar em tarefa longa
e o agente se estabiliza como bom em tarefa curta e supervisionada. Nesse caso a raiz 2 evapora
— sem volume, não há gargalo de verificação —, a raiz 3 fica sem objeto, e a raiz 1 sobrevive
sozinha, porque o valor de empacotar instrução não depende de o agente ser autônomo. O mapa
vira um mapa de uma raiz só. O sinal precoce disto não é um anúncio: é o padrão do Terminal-Bench
parar de aposentar tarefas por saturação.

## 7. Contra o próprio mapa

### Qual efeito é só extrapolação linear do presente

**`e4` é o candidato mais forte, e sobreviveu por pouco.** "A revisão demora mais" é o presente
medido em outro volume — mesmo ator, mesmo mecanismo. O que o salvou foi um detalhe do próprio
dado: o **ciclo** de revisão do código gerado é *menor* que o do humano (≈194 contra 252
minutos), e o que explode é o **tempo até alguém pegar** (mais de 16 horas contra ~200
minutos) [6]. São mecanismos diferentes — um é esforço de leitura, o outro é disposição a
começar. `e4` afirma o segundo, não o primeiro. A versão que **não** sobreviveu, e que era
literalmente "mais X", está na seção 12: a que projetava o número de projetos de software se
multiplicando por dez até 2031.

### Qual efeito assume velocidade de adoção sem caso comparável

**`e6` é a aposta mais arriscada, e está em `media` por isso.** O caso comparável invocado é o
GDPR, cuja arquitetura de consentimento se espalhou pela web em poucos anos. A fragilidade:
o GDPR exigia mudança **aditiva** — inserir um banner, um fluxo —, enquanto a responsabilidade
objetiva por software exige que alguém **aceite um passivo** que hoje ninguém aceita. Não há
caso comparável de uma indústria inteira absorver responsabilidade objetiva sem que antes uma
decisão judicial tenha cobrado o preço. E há um dado do presente que empurra contra: o único
incidente público documentado terminou sem qualquer consequência legal noticiada [4]. Se eu
tivesse que rebaixar uma confiança depois de entregar este mapa, seria esta.

**`e1` está em `alta` e merece a objeção oposta.** O caso comparável é forte — LSP, Docker,
npm: formato mínimo, adoção cruzada rápida, virada em padrão de fato. E a velocidade observada
excede o comparável: dias, não anos [8][9]. O risco aqui não é a adoção; é confundir **adoção
do formato** com **uso do formato**. Quarenta produtos lerem `SKILL.md` não diz quantas pessoas
escrevem skills, e esse número eu não consegui apurar (seção 12.3).

### Qual disrupção pode simplesmente não se concretizar

**A raiz 3.** Ela pende inteiramente de uma precondição única: um caso decidido. Se ele não vier
— e a história da responsabilidade por software sugere que fornecedores litigam e acordam em
silêncio por muitos anos antes de qualquer precedente —, então a diretiva existe e não produz
efeito nenhum além do próprio texto. Nesse cenário **cinco dos dez efeitos de terceira ordem
caem juntos** (`e6.1.1`, `e6.2.1`, `e7.1.1`, e por dependência `e5.1.1` e `e1.1.1`), e o mapa
vira um mapa de duas raízes sobre produtividade e verificação, sem a moldura que lhes dá
consequência. É o teste P5 aplicado ao próprio documento, e ele encontra exatamente o que
procurava: um galho pendurado numa aposta só.

### O falsificador que o recorte pediu, e o que ele faz com o mapa

O recorte declarou duas coisas que mudariam de ideia: evidência de que a adoção já passou da
maioria inicial de Rogers, e evidência de que a tecnologia não rompe nada — só melhora o que
existe. As duas mordem, e de formas opostas:

- **A maioria inicial.** As leituras secundárias da Pesquisa de Desenvolvedores 2026 do Stack
  Overflow circulam 84% de adoção de ferramentas de IA contra **31% de uso de agentes** — mas a
  página primária que eu tentei abrir devolveu **HTTP 404**, e portanto esse número **não entra
  neste documento como fato** (seção 8). O que eu consegui verificar aponta na mesma direção
  sem fechar a conta: fora dos laboratórios de fronteira a adoção é de cerca de 30% (Microsoft,
  Salesforce) e um estudo na *Science* encontrou 29% das funções Python do GitHub escritas por
  IA [15]. Adoção de **ferramenta** parece tardia; adoção de **agente que age** parece ainda na
  primeira metade da curva. O mapa sobrevive, mas por uma distinção fina, não por folga.
- **"Só melhora o que existe".** Aqui o falsificador acerta em cheio, e a evidência é a melhor
  que existe: o ensaio randomizado da METR encontrou desenvolvedores experientes **19% mais
  lentos** com IA, acreditando estar 20% mais rápidos [1]. Se isso valer em 2026 como valeu em
  2025, boa parte deste tema é **H2−** — inovação que escora o presente e se disfarça de
  tendência. Três coisas seguram o mapa, e nenhuma é decisiva: a própria METR trata o resultado
  como histórico e de ferramentas de fevereiro a junho de 2025 [1]; o estudo mediu o
  **assistente no editor**, não o agente que age e abre PR; e a raiz 2 **não depende de o
  agente ser mais rápido** — ela depende de ele produzir mais volume, o que os dados de
  tamanho de PR confirmam mesmo que a produtividade líquida seja negativa [6]. Ou seja: sob o
  falsificador, o mapa não morre — ele fica **torto**. A raiz 1 sobrevive intacta, a raiz 2
  sobrevive pelo volume e não pela velocidade, e a raiz 3 perde urgência. É mais informativo
  que um mapa que sobrevive inteiro, e é a razão de `confianca` global estar em `media`.

### Que viés meu entrou aqui

Três, e o terceiro é o pior:

1. **Viés de fonte.** Metade da evidência quantitativa deste mapa vem de fornecedores que vendem
   a solução do problema que medem: LinearB vende medição de engenharia [6], GitClear vende
   análise de qualidade de código [2], CB Insights vende inteligência de mercado [11]. Os
   números são específicos e verificáveis, e nenhum foi replicado por terceiro independente. A
   única evidência com desenho experimental e grupo de controle no documento inteiro é a da
   METR — e é justamente a que contradiz a tese [1].
2. **Viés de proximidade.** Este mapa foi produzido **por um agente, com uma skill, dentro de
   uma disciplina que usa skills**. O tema é aquele em que o instrumento de análise é também o
   objeto analisado, e a tentação de achar que a coisa é maior do que é vem embutida. A sessão
   que escreve isto é, ela mesma, uma instância de `e1`.
3. **Viés de camada — o mapa assume a visão de mundo de hoje como permanente.** Passando pela
   *Causal Layered Analysis*: na litania, "a IA escreve o código e ninguém revisa"; nas causas
   sistêmicas, o custo marginal de geração indo a zero enquanto o de verificação não; na visão
   de mundo, **software deve ser correto, durável e ter um responsável**; no mito, o programador
   como artesão que responde pela obra. **Toda a raiz 2 está construída sobre a terceira
   camada.** Se a métrica de sucesso migrar de "software correto e mantido" para "software
   descartável, reescrito em vez de mantido" — e o próprio dado da GitClear pode ser lido assim:
   refatoração −70% e manutenção de legado −74% [2] não são só degradação, são possivelmente
   uma mudança de regime em que ninguém pretende manter aquilo —, então duplicação deixa de ser
   defeito e vira irrelevância, e **todos os dez efeitos de terceira ordem trocam de sinal sem
   que um único fato mude**. O mito do artesão que responde pela obra é a fundação mais frágil
   deste documento, e ele não aparece em lugar nenhum do bloco YAML.

## 8. O que a máquina errou

**Uma fonte primária que não existe, citada de segunda mão com número exato.** Ao levantar
adoção de agentes, os resultados de busca trouxeram "31% dos desenvolvedores usam agentes" e
"84% usam ferramentas de IA" atribuídos à Pesquisa de Desenvolvedores 2026 do Stack Overflow,
em três páginas distintas, com a mesma confiança de um dado publicado. Tentei abrir a fonte
primária em `survey.stackoverflow.co/2026/ai` e recebi **HTTP 404**. *Como percebi:* fui buscar
a página para citar, e ela não estava lá — e o único texto oficial que encontrei do Stack
Overflow sobre 2026 é o anúncio de **abertura** da pesquisa, de 23 de junho de 2026, não a
publicação dos resultados. **Os números não entraram no corpo deste documento.** Eles estão
mencionados apenas na seção 7, explicitamente como não verificados — e o incômodo é que eram
exatamente os números que responderiam ao falsificador que o recorte pediu.

**Dois números incompatíveis para a mesma coisa, ambos afirmados no mesmo tom.** Sobre o
Terminal-Bench 4.0, um resumo de busca disse "89 tarefas, contagem inalterada" e outro disse
"66 tarefas, depois de remover oito e revisar vinte". Não podem estar os dois certos. Abri a
fonte primária [10]: ela diz que foram removidas **8** tarefas e corrigidas **19**, e **não
informa o total**. *Como percebi:* pela aritmética, não pela leitura — 89 menos 8 não dá 66, e
"contagem inalterada" não convive com "removemos oito". Resultado: este documento usa a
composição da mudança, que está na fonte, e **não afirma o número total de tarefas**, que não
está. Um mapa que dependesse desse total estaria apoiado num número que ninguém publicou.

**Um número preciso demais, vindo de onde não devia.** Circulou nas buscas que um marketplace
lista **89.753 skills**. É o tipo de número que convence justamente por não ser redondo, e ele
sustentaria sozinho a escala da raiz 1. Veio de uma única página de agregação, sem link para a
contagem, e **não consegui reproduzi-lo em nenhuma fonte primária**. Descartado. A raiz 1
está apoiada em quem **lê** o formato [9], que eu pude contar abrindo a lista, e não em quantas
skills existem, que eu não pude.

**Uma métrica de terceira mão que a fonte primária não tem.** Resumos de busca afirmavam "31% a
mais de PRs entrando sem nenhuma revisão" e "tempo mediano de revisão +441%", atribuídos ao
relatório de benchmarks de 2026. Abri o relatório [6]: ele traz tempo de espera, taxa de merge,
tamanho e refatoração — e **não traz figura alguma para PRs que entram sem revisão**. A
afirmação `e4.1` deste mapa ("aceitar mudança que ninguém leu vira rotina") ficou, por isso,
como **inferência declarada** a partir da taxa de merge e do tempo de espera, com `sinal: medio`,
e não como dado. Era a citação mais tentadora do levantamento inteiro, porque dizia exatamente
o que eu queria dizer.

**Um par de números internamente incoerente.** Sobre o SWE-bench Verified, um resumo afirmou que
"Claude Opus 4.6 lidera com 80,8%" e, na frase seguinte, que "Claude Opus 4.5 tem 80,9%" — o
modelo que lidera pontuando **abaixo** do que ele sucede. A página da Epoch AI, que eu abri
para conferir, renderiza a tabela por JavaScript e voltou sem dado nenhum. Nenhum número de
SWE-bench entra neste documento. O que entra é o que consegui verificar em texto: que o
conjunto saturou, que tem risco alto de contaminação, e que a OpenAI parou de avaliar nele no
início de 2026 [14].

## 9. Três cenários para 2031

**Provável.** A orquestração venceu e ninguém comemorou. Especificar virou o trabalho, o agente
executa, e a fila de revisão continua onde estava em 2026 — só que agora ninguém finge que ela
é lida. As organizações mantiveram o ritual do pull request e trocaram o seu conteúdo: o que
antes era leitura virou a checagem de que os testes passaram e de que o agente registrou a
sessão. A dívida técnica não explodiu como se temia, porque as equipes pararam de manter o que
não entendem e passaram a reescrever — o que os números de 2026 já anunciavam, e que naquele
momento se leu como degradação. A Diretiva 2024/2853 foi transposta em todos os Estados-membros
e produziu, até aqui, um punhado de acordos confidenciais e nenhuma sentença pública; a
responsabilidade objetiva existe no papel e funciona como cláusula de seguro. Quem entrou na
faculdade em 2026 chegou ao mercado num funil mais estreito, e a lacuna de emprego dos 22 aos 25
anos, que era de 19% em junho de 2026, não fechou.

**Desejável.** A verificação encontrou instrumento. Entre 2028 e 2030 o agente passou a escrever
a propriedade junto com a implementação, e a conta que impedia verificação formal leve de sair
do nicho — o custo de escrever a propriedade ser maior que o de escrever o código — inverteu
pela primeira vez. Com isso a fila desafogou não por mais revisores, mas porque passou a ser
possível aceitar sem ler **e dizer por quê**. A trilha da sessão do agente virou entregável
padrão, e a responsabilidade objetiva encontrou o que auditar, o que fez a lei operar como
desenhada em vez de operar como seguro. O acervo de instrução ganhou procedência e assinatura
no mesmo movimento, por um consórcio independente e não pelos fornecedores. Para chegar aqui
foi preciso o que ainda não aconteceu em 2026: que a medida de verificação saísse de fora da
indústria que vende a ferramenta, e que a graduação passasse a ensinar especificação e
verificação como disciplina própria, e não como apêndice.

**Indesejável.** O volume chegou e a moldura não. Os agentes ficaram bons o bastante para
produzir muito e não o bastante para produzir confiável, a verificação continuou dependendo de
leitura humana, e a saída encontrada foi baixar o padrão em silêncio: o que entra em produção é
o que passou no teste que o próprio agente escreveu. Um incidente grave aconteceu, foi
atribuído a "falha sistêmica da indústria" como em 2026, e ninguém pagou. A responsabilidade
objetiva foi absorvida por contrato e seguro, o que a esvaziou como incentivo. A profissão se
partiu em dois: um punhado de pessoas que entende os sistemas e uma camada larga que despacha
pedidos sem conseguir verificar o retorno — e a segunda camada não tem caminho para a primeira,
porque a etapa em que se aprendia a ler código alheio deixou de existir. **O sinal precoce
deste cenário não é técnico nem econômico:** é o momento em que a auditoria do trabalho do
agente passa a ser publicada pela mesma empresa que vende o agente, e ninguém pede terceiro
independente. A consolidação de 2026 — Snyk, Coralogix, ClickHouse e a própria Anthropic
comprando quem media agentes [11] — é esse sinal aparecendo cedo.

## 10. O experimento

**O que é.** **A prova de especificação.** Uma bancada que roda em sala e mede duas coisas que a
raiz 2 pressupõe e ninguém verificou. Cada pessoa escreve uma especificação curta de uma mesma
funcionalidade pequena — trezentas palavras, sem código. Cada especificação é executada por
agente em **dois harnesses diferentes**, com a mesma skill `SKILL.md` carregada nos dois, o que
o padrão aberto torna possível sem reescrever nada [9]. Depois, os resultados são embaralhados,
e cada pessoa recebe o resultado de **outra**, junto com a especificação original, e tem que
decidir — **sem abrir o código** — se a especificação foi cumprida. Só depois se abre o diff e
se confere o veredicto.

Duas medidas saem disso: a **variância entre harnesses para a mesma especificação**, e a **taxa
de acerto do julgamento sem leitura**, com os erros separados em falso "cumpriu" e falso "não
cumpriu".

**Que pergunta sobre o futuro ele ajuda a responder.** A precondição nomeada da raiz 2: **é
possível verificar sem ler?** Se a taxa de acerto sem leitura for alta, existe um caminho para
desafogar a fila, e o cenário desejável da seção 9 tem chão. Se for baixa — e sobretudo se os
erros forem sistematicamente falsos "cumpriu" —, então `e4.1` já está acontecendo em sala, e o
mapa acerta pelo pior motivo: aceitar sem ler não é uma decisão de gestão, é o que as pessoas
fazem quando não conseguem ler. E, pela segunda medida, ele testa a precondição da raiz 1: se a
mesma especificação com a mesma skill produz resultados incomparáveis em dois harnesses, então
a portabilidade do formato é sintática e não semântica, e `e1` vale bem menos do que o bloco
YAML diz.

**Que tecnologia emergente ele usa, e por que não dá com tecnologia madura.** Usa três coisas
que não existiam há três anos: agente que edita vários arquivos e roda os testes sozinho, skill
portátil no formato aberto entre fornecedores concorrentes [8][9], e registro replicável da
sessão para conferir depois o que o agente fez [11]. Com tecnologia madura — autocompletar de
IDE, chat que explica código — o experimento é impossível por construção, porque nesses dois
casos **o humano digitou o código** e não há nada para verificar às cegas: verificar sem ler só
faz sentido quando não se escreveu.

**O que a turma vai fazer quando testar isso em sala.** Cada pessoa escreve a sua especificação
em 20 minutos; a execução roda entre as aulas, porque não cabe no tempo de sala; na aula
seguinte cada uma julga o resultado de outra às cegas, registra o veredicto e a confiança, e só
então abre o código. Fecha-se com a tabela: quantos julgamentos bateram, quantos erraram, e
para que lado. A hipótese sob teste é que **o erro seja assimétrico** — muito mais falso
"cumpriu" que falso "não cumpriu" —, porque é isso que tornaria o aceite sem leitura perigoso
de um jeito que a métrica de velocidade não capta.

**O que seria um resultado que me faria mudar de ideia.** Se o julgamento sem leitura acertar
com folga e sem assimetria, a raiz 2 perde a precondição crítica: verificar sem ler já é
possível com o que existe, o gargalo é de organização e não de instrumento, e este mapa está
errado no galho mais consequente — `e4.2`, `e5.1` e os três efeitos de terceira ordem que
pendem deles caem juntos. O segundo resultado que me faria mudar de ideia: se os dois harnesses
produzirem resultados equivalentes de forma consistente, a portabilidade é real em nível de
comportamento e não só de formato, e `e1` merecia estar em `alta` por um motivo melhor do que o
que eu tenho hoje — que é a velocidade de adoção do arquivo, não a equivalência do que ele
provoca.

## 11. Fontes

Só entram fontes que eu abri nesta sessão, em 17/09/2026. Onde o texto se apoia em resultado de
busca sem leitura da fonte primária, isso está marcado no corpo e a fonte **não** está listada
aqui — o que ficou de fora está na seção 12.3.

1. **METR — "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer
   Productivity"** (10/07/2025).
   https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/
   Sustenta: ensaio randomizado com 16 desenvolvedores experientes e 246 tarefas reais;
   19% mais lentos com IA liberada; estimativa prévia de 24% mais rápidos e posterior de 20%;
   ferramentas de fev–jun/2025 (Cursor Pro com Claude 3.5/3.7); e as ressalvas de generalização
   que a própria METR faz. Confiabilidade: **alta** — é o único desenho com grupo de controle
   em todo este documento, e é o que contradiz a tese do mapa.
2. **GitClear — "The Maintainability Gap: 2026 AI Code Quality Research"** (janeiro de 2026).
   https://www.gitclear.com/the_ai_code_quality_maintainability_gap
   Sustenta: 623 milhões de mudanças analisadas de 2023 a 2026; duplicação de bloco +81%
   (40,3 → 73,0); copiar-e-colar +41% (9,4% em 2022 → 15,7% em 2026); refatoração −70%
   (21% → 3,8%); chamadas entre arquivos −35% (343 → 223); construções que mascaram erro +47%;
   manutenção de legado −74% (1,7% → 0,46%); churn de duas semanas +15%. Confiabilidade:
   **média** — números específicos e método descrito, mas é fornecedor medindo o problema que
   vende, sem replicação independente.
3. **Stanford Digital Economy Lab — "No Widespread Displacement, but the AI Employment Gap for
   Young Workers Has Widened to 19%"** (agosto de 2026).
   https://digitaleconomy.stanford.edu/news/canariesaug26/
   Sustenta: lacuna de emprego de ~19% para 22–25 anos em ocupações altamente expostas, aberta
   de 15% em julho de 2025 para 19% em junho de 2026; base em folha da ADP; comparação com
   novembro de 2022; a ausência de deslocamento generalizado; e a ressalva de que as lacunas
   encolhem controlando por escolaridade. Confiabilidade: **alta** para o que afirma.
   **Não sustenta** recorte específico para desenvolvedores de software — a página não o traz.
4. **Euronews — "An AI agent deleted a company's entire database in 9 seconds"** (28/04/2026).
   https://www.euronews.com/next/2026/04/28/an-ai-agent-deleted-a-companys-entire-database-in-9-seconds-then-wrote-an-apology
   Sustenta: incidente da PocketOS em abril de 2026; agente de código com Claude Opus 4.6;
   banco e backups apagados em 9 segundos; mais de 30 horas fora do ar; recuperação dois dias
   depois; as falas de Jer Crane; e a **ausência** de consequência regulatória ou judicial.
   Confiabilidade: **média** — cobertura jornalística de relato do próprio fundador, sem
   laudo independente. A ausência de processo é o que o mapa usa, e essa é a parte mais sólida.
   *Nota de verificação:* esta foi a única das 18 que não respondeu `200` à checagem automática
   de links — devolve `406` a cliente de linha de comando. **Foi lida nesta sessão pelo
   navegador da ferramenta**, e o conteúdo citado veio dessa leitura.
5. **International Bar Association — "Liability for software under the new European Product
   Liability Directive"**. https://www.ibanet.org/European-Product-Liability-Directive-liability-for-software
   Sustenta: Diretiva (UE) 2024/2853; prazo de transposição em 9 de dezembro de 2026; software
   como produto, isolado ou combinado; responsabilidade objetiva; cadeia fabricante → importador
   → operador de loja online; a garantia de que sempre haja um operador responsabilizável; e a
   exceção do software livre fora de atividade comercial. Confiabilidade: **alta** — análise
   jurídica de associação profissional, com o número da diretiva e a data verificáveis.
6. **LinearB — "8 million pull requests reveal where engineering productivity breaks down"**
   (relatório de benchmarks 2026). https://linearb.io/blog/8-million-prs-engineering-productivity
   Sustenta: 8,1 milhões de PRs, 4.800 times, 42 países; tempo até pegar ~200 min (não
   assistido) contra mais de 16 h (IA); merge em 30 dias ~84,5% contra 32,7%; tamanho no
   percentil 75 de 157 linhas contra mais de 400 (IA) e ~290 (agêntico); ciclo de revisão ≈194
   min contra 252; refatoração no percentil 75 de ~37% contra perto de zero; 88,3% de uso
   regular de IA. Confiabilidade: **média** — base grande e recortes claros, mas é fornecedor de
   métrica de engenharia. **Não sustenta** figura alguma sobre PRs que entram sem revisão — ver
   seção 8.
7. **Brown University — "Brown professors devise course to explore generative AI in computer
   science education"** (11/06/2026).
   https://www.brown.edu/news/2026-06-11/agentic-studio-ai-programming
   Sustenta: o curso Agentic Studio; Kathi Fisler, Shriram Krishnamurthi e Michael Littman;
   formato por projeto com diários; a pergunta "o que foi que você trouxe para este projeto?";
   e as falas dos estudantes sobre estrutura e contexto. Confiabilidade: **alta** para a
   existência e o desenho do curso; **baixa** como evidência de tendência — é um curso, numa
   universidade.
8. **Simon Willison — "Agent Skills"** (19–20/12/2025). https://simonwillison.net/2025/Dec/19/agent-skills/
   Sustenta: a data da publicação do padrão; o repositório independente `agentskills/agentskills`;
   a minimalidade e as vaguezas da especificação; a adoção por OpenCode, Cursor, Amp, Letta,
   goose, GitHub e VS Code; e a entrada posterior da OpenAI. Confiabilidade: **alta** como
   registro datado por observador independente do campo.
9. **agentskills.io — especificação e vitrine de clientes** (aberta em 17/09/2026).
   https://agentskills.io/
   Sustenta: a estrutura `SKILL.md` com `name` e `description` obrigatórios mais `scripts/`,
   `references/` e `assets/`; a divulgação progressiva em três estágios; a origem na Anthropic
   e a abertura do padrão; e a lista nominal de produtos que o leem (Claude Code, ChatGPT &
   Codex, GitHub Copilot, VS Code, Cursor, Gemini CLI, Junie, goose, OpenCode, OpenHands, Amp,
   Kiro, Factory, Roo Code, Tabnine, Mistral Vibe, Databricks Genie Code, Snowflake Cortex
   Code, Pulumi Neo, Spring AI, Laravel Boost, Hermes Agent e outros). Confiabilidade: **média
   a alta** — é a fonte do próprio padrão, portanto autoritativa sobre o formato e interessada
   sobre a adoção; a lista é nominal e conferível um a um.
10. **Terminal-Bench — "Terminal-Bench 4.0"**. https://www.tbench.ai/news/terminal-bench-4-0
    Sustenta: a composição da mudança para a versão 4.0 (8 tarefas removidas — 2 por saturação,
    2 por recusa, 2 por solução pública, 2 por qualidade ou compatibilidade — e 19 corrigidas);
    o tempo limite uniforme de 8 horas; e a definição de saturação como resolver 5 de 5 vezes em
    todas as classes de todas as famílias da última geração. Confiabilidade: **alta** para a
    composição. **Não informa o total de tarefas** — ver seção 8.
11. **CB Insights — "2026 agent predictions"**. https://research.cbinsights.com/2026-agent-predictions
    Sustenta: a consolidação em observabilidade e avaliação de agentes, com Snyk/Invariant Labs,
    Coralogix/Aporia, Anthropic/HumanLoop e ClickHouse/Langfuse nominadas; e a leitura de que a
    categoria virou alvo de aquisição. Confiabilidade: **média** — casa de inteligência de
    mercado; as aquisições são fatos nomeados, a previsão é previsão.
12. **Addy Osmani — "The Code Agent Orchestra: what makes multi-agent coding work"**
    (26/03/2026, a partir de palestra no O'Reilly AI CodeCon).
    https://addyosmani.com/blog/code-agent-orchestra/
    Sustenta: três agentes focados superando um generalista com o triplo do tempo; time ótimo de
    3 a 5; delegação hierárquica; `AGENTS.md` gerado por LLM sem benefício, com queda marginal
    de ~3% e custo de inferência acima de 20%, contra ~4% de ganho quando escrito por humano;
    e a formulação "o gargalo não é mais a geração, é a verificação". Confiabilidade: **média**
    — praticante reconhecido, números de experiência própria sem desenho experimental.
13. **Kiro (AWS) — "Kiro and the future of AI spec-driven software development"** (15/07/2025).
    https://kiro.dev/blog/kiro-and-the-future-of-software-development/
    Sustenta: a definição de especificação como documento vivo em Markdown com histórias,
    requisitos e decisões, contra o prompt efêmero; e a analogia com o SQL. Confiabilidade:
    **baixa para efeito de mercado** — é material do próprio fabricante, e serve como prova de
    posicionamento e de data, não de adoção.
14. **OpenHands — "AI Coding Benchmarks Explained: SWE-bench, LiveBench, and More"**
    (25/06/2026, consultado em 17/09/2026). https://www.openhands.dev/blog/ai-coding-benchmarks-explained
    Sustenta: a saturação do SWE-bench Verified; o risco alto de contaminação por issues e
    correções públicas; a informação de que a OpenAI parou de avaliar nele no início de 2026;
    e a descrição do Terminal-Bench 2.0 (89 tarefas, 16 categorias, testes ocultos, média de
    várias tentativas). Confiabilidade: **média** — fornecedor de agente comentando benchmarks
    em que compete. Os números de pontuação que essa página traz **não** foram usados.
15. **Fortune — "Top engineers at Anthropic, OpenAI say AI now writes 100% of their code"**
    (29/01/2026). https://fortune.com/2026/01/29/100-percent-of-code-at-anthropic-and-openai-is-now-ai-written-boris-cherny-roon/
    Sustenta: as falas de Boris Cherny e do pesquisador da OpenAI; a faixa de 70% a 90% para a
    empresa inteira; a adoção em torno de 30% na Microsoft e na Salesforce; e o estudo na
    *Science* com 29% das funções Python do GitHub escritas por IA. Confiabilidade: **média** —
    reportagem que registra declarações, com as ressalvas explicitadas no próprio texto. As
    declarações de 100% são autorrelato de pessoas interessadas, e entram como tal.
16. **Pesquisa de Programadores 2026 — Código Fonte TV**. https://pesquisa.codigofonte.com.br/2026
    Sustenta: **apenas** a existência da pesquisa, o período de coleta (23/02 a 09/06/2026), o
    total de 17.046 profissionais, e a estrutura das seções (uso de IA, confiança na qualidade,
    ganho de produtividade, receio de substituição por faixa de senioridade). Confiabilidade:
    **não avaliável para os percentuais** — a página renderiza os números por JavaScript e
    retornou zeros. Nenhum percentual brasileiro entra neste documento.
17. **Formato do documento de tendência — CIN0055**.
    https://tendencias-midia-interacao.vercel.app/materiais/formato-documento-tendencia.md
    Sustenta: a estrutura deste documento, os campos do frontmatter, e as regras do bloco da
    roda. Confiabilidade: **alta** — é a especificação. *Nota de verificação:* lida na **cópia
    local** dos materiais da disciplina, não pela URL; a URL acima foi conferida e responde `200`.
18. **Temas de tendência 2026.2, tema 1 — CIN0055**.
    https://tendencias-midia-interacao.vercel.app/materiais/temas-tendencias-2026-2.md
    Sustenta: o recorte do tema, a linha entre maduro e emergente adotada na Fase 2, a fronteira
    com os temas 2 e 3, e os nomes de ferramentas que a varredura da turma levantou.
    Confiabilidade: **alta** para o que afirma — é o registro do que a turma levantou, com
    critério declarado. Não é fonte sobre o mundo; é fonte sobre o recorte. *Nota de
    verificação:* o bloco do tema 1 chegou no despacho desta rodada e foi conferido contra a
    cópia local dos materiais; a URL acima responde `200`.

## 12. Anexo — o levantamento bruto

### 12.1 Efeitos mortos ou rebaixados na Fase 5, com o id original e a prova que os matou

| id original | efeito | prova | por quê |
|---|---|---|---|
| e2.3 | O número de projetos de software se multiplica por dez até 2031, porque o custo de escrever caiu perto de zero | P1 · extrapolação linear | É literalmente "mais X": mesmo ator, mesmo mecanismo, outro volume. E o dado do presente empurra contra — o custo de **escrever** caiu, o de **manter e responder** não, e é este que limita quantos sistemas uma organização sustenta. O que sobreviveu da ideia foi o seu oposto, em `e6.2`. |
| e1.3 | Marketplaces de skill viram plataforma dominante, com efeito de rede comparável ao das lojas de aplicativo | P4 · força contrária | Não há sobre o que construir efeito de rede: o padrão é aberto, o artefato é uma pasta com Markdown, e copiar é trivial [8][9]. A força contrária aqui não era forte — era estrutural, e não estava modelada. |
| e4.3 | A revisão por IA resolve o gargalo de revisão até 2028 | P6 · camada (CLA) + T1 | Revisor de IA lendo código de IA não produz a coisa que a revisão produz, que é **alguém que responde**. Pela CLA, o efeito vivia na litania ("a IA revisa") e desmontava na camada da visão de mundo, onde a revisão existe para atribuir responsabilidade e não para achar defeito. Reclassificado como **H2−** na Fase 2 e removido da árvore. |
| e4.4 | A revisão humana desaparece completamente até 2031 | P4 · força contrária | A raiz 3 é a força contrária, e é nomeada e datada: responsabilidade objetiva a partir de 9/12/2026 [5] exige que alguém possa demonstrar o que verificou. Revisão humana não desaparece; ela muda de objeto — o que sobrou está em `e4.1` e `e5.1`. |
| e6.3 | A regulação europeia de responsabilidade por software se torna padrão global até 2031 | P4 · força contrária | Divergência regulatória com os Estados Unidos, e execução europeia que ainda não produziu um caso. **Rebaixado, não eliminado** — foi para a seção 6 como sinal fraco, com a condição de reentrada declarada. |
| e7.2 | Um incidente grave causado por agente leva a moratória de agentes autônomos em produção | P2 + P3 · velocidade sem caso comparável | Não há caso histórico de moratória de ferramenta de desenvolvimento por incidente, e o incidente que existe terminou sem consequência [4]. Foi para a seção 6 como **wildcard**, que é o lugar certo de uma coisa de baixa probabilidade e alto impacto. |
| e5.2 | Forma-se um mercado de perícia sobre trabalho de agente, para responder em disputa o que foi decidido por quem | regra de parada · precisa de duas raízes | Só faz sentido se a raiz 2 **e** a raiz 3 se realizarem. Saiu da árvore e entrou como **nota de convergência** na prosa da seção 5 — é exatamente o tipo de cruzamento que interessa quando os mapas da turma forem processados juntos. |

**Rebaixamento de confiança, além das eliminações.** `e5` saiu de `alta` para `media` pela prova
P2: a onda de aquisições que o sustenta [11] é consolidação de um mercado de observabilidade de
**LLM em geral**, não de auditoria de **agente de código** em particular. Tratar uma como prova
da outra é extrapolação de categoria, e o efeito ficou com a confiança que a evidência banca.

**Cota de dano cumprida — pelo menos um efeito eliminado ou rebaixado por raiz:**
raiz 1 perdeu `e2.3` e `e1.3`; raiz 2 perdeu `e4.3` e `e4.4`, teve `e5` rebaixado de confiança e
`e5.2` removido por regra de parada; raiz 3 perdeu `e7.2` para a seção 6 e teve `e6.3` rebaixado
a sinal fraco.

### 12.2 Candidatas reprovadas na triagem de maturidade

| candidata | veredicto | teste | razão |
|---|---|---|---|
| Autocompletar de IDE (sugestão de linha e de função) | MADURO · H1 | T1, T5 | Não muda o que é possível: acelera a digitação do que a pessoa já ia escrever. Caminho de instalação padrão, preço estável, modos de falha documentados. É a régua da disciplina aplicada na primeira peneira. |
| Chat que explica código | MADURO · H1 | T1, T5 | Substitui a busca na documentação. Sem ele, um time competente perde tempo — não muda de objetivo. Reprova em T2 pela mesma razão. |
| Assistente de código com contexto do repositório dentro do IDE | H2− | T1 | **Escora o H1.** Faz o editor durar mais sem mudar quem executa. É o caso exemplar de inovação que se disfarça de tendência — e é sobre ele, não sobre o agente, que o ensaio da METR mediu 19% de lentidão [1]. |
| Revisão automatizada por IA no pull request | H2− | T1 | Mantém vivo o ritual da revisão humana sob um volume que ela não comporta, sem mudar o mecanismo nem o ator. Pode participar da disrupção sem ser a disrupção: quando a revisão mudar de objeto, ela será a ferramenta — não a causa. |
| Agente de terminal que edita vários arquivos, roda testes e abre PR | EMERGENTE, e DISRUPTIVO na borda | passa T1/T3/T4 | Muda o executor, não a velocidade. Incumbente nomeado: o desenvolvedor como autor do commit. Entra pela **baixa do mercado** — a mudança grande, chata e mecânica que ninguém queria fazer. Falta a precondição de verificação, e é por isso que virou **raiz 2** e não efeito. |
| Skill portátil no formato aberto (`SKILL.md`) | EMERGENTE, e DISRUPTIVO | passa T1/T3/T4 | Torna sem valor o conhecimento tácito como ativo pessoal e o aprisionamento a uma ferramenta. Entra por **mercado novo**: quem descreve procedimento sem programar. Virou **raiz 1**. |
| Desenvolvimento dirigido por especificação | EMERGENTE · H2+ | passa T1/T3, T4 parcial | Muda o artefato de entrada. Não virou raiz própria porque o que ele rompe já está contido na raiz 1 (a instrução vira artefato) e na raiz 2 (a verificação vira o gargalo) — separá-lo produziria três raízes com o mesmo mecanismo. Entra na seção 3 como estado da arte. |
| Orquestração de vários agentes em paralelo, com isolamento por worktree | EMERGENTE | passa T1/T3/T4 | Muda a unidade de trabalho de uma sessão para uma frota. Não virou raiz porque é **como** a raiz 2 se manifesta, não uma ruptura distinta: multiplicar agentes multiplica exatamente o que já não se consegue verificar. |
| Observabilidade e auditoria do agente | EMERGENTE, pré-disruptivo | passa T1/T3, falha parcial em T4 | Falta o que auditar **para quem**. Sem exigência externa — contratual ou legal — isso é telemetria interna. É `e5`, e depende da raiz 3 para virar obrigação. Fica também na fronteira do tema 3. |
| Responsabilidade objetiva por software (PLD 2024/2853) | DISRUPTIVO, e **não é tecnologia** | passa T1/T3/T4 | Caso exemplar da consequência que a Fase 2 obriga a aceitar: o que rompe aqui é o **arranjo**, não o artefato. Nenhuma tecnologia nova entra, e mesmo assim a competência de escrever contrato que transfere risco perde valor. Virou **raiz 3**. |
| Benchmark de agente (SWE-bench, Terminal-Bench) | SUBSTRATO, e em erosão | — | Não é candidata a raiz: é o instrumento com que o campo mede a si mesmo. Entra na seção 3 como âncora e na seção 6 como sinal fraco, porque o instrumento está se desgastando mais rápido que o objeto [10][14]. |

### 12.3 O que não foi possível apurar

- **Percentuais da Pesquisa de Desenvolvedores 2026 do Stack Overflow.** A página primária
  `https://survey.stackoverflow.co/2026/ai` devolveu **HTTP 404** em 17/09/2026. Os números que
  circulam em cobertura secundária — 84% de adoção de ferramentas de IA, 31% de uso de agentes,
  46% desconfiando, 3% confiando muito, 66% lidando diariamente com código "quase certo" — não
  foram verificados e **não entram no corpo**. É a lacuna mais séria deste mapa, porque era
  exatamente o dado que responderia ao falsificador sobre a maioria inicial de Rogers.
- **Total de tarefas do Terminal-Bench 4.0.** Duas leituras secundárias incompatíveis (89 e 66);
  a fonte primária informa a composição da mudança e não o total [10]. Não afirmado.
- **Pontuações do SWE-bench Verified.** A página da Epoch AI
  (`https://epoch.ai/benchmarks/swe-bench-verified`) foi aberta e não entregou a tabela — o
  conteúdo é renderizado por JavaScript. Resumos de busca traziam números internamente
  incoerentes (ver seção 8). **Nenhuma pontuação entra neste documento.**
- **Quantas skills existem.** O número de 89.753 num marketplace apareceu numa única página de
  agregação, sem origem verificável, e não foi reproduzido. Descartado. A escala da raiz 1
  está apoiada em quem lê o formato [9], não em quantos artefatos existem — e essa é uma âncora
  mais fraca do que eu gostaria.
- **Percentuais brasileiros de uso de IA e de agentes.** A pesquisa existe, tem 17.046
  respondentes e período declarado [16], mas os números não renderizaram. A nota sobre o Brasil
  que o recorte pediu se limita, por isso, à estrutura da pesquisa e ao que é verificável fora
  dela. **É um recorte incompleto, e está declarado como tal**, não resolvido por estimativa.
- **Recorte de emprego para desenvolvedores de software.** A página da Stanford dá a lacuna de
  19% para 22–25 anos em ocupações altamente expostas e **não publica número para a ocupação de
  desenvolvedor** [3]. A associação com programação vem da composição da categoria. Não afirmei
  além disso.
- **PRs que entram sem nenhuma revisão.** A figura de "+31%" circula em resumos e **não está** no
  relatório primário [6]. A afirmação correspondente do mapa (`e4.1`) ficou como inferência
  declarada, com `sinal: medio`.
- **Regulação fora da União Europeia e dos Estados Unidos.** A raiz 3 está apoiada numa única
  jurisdição. Não apurei Brasil, Reino Unido, Índia, China nem Coreia do Sul. É viés geográfico
  declarado, não recorte.

### 12.3.1 Falso positivo da checagem de links

A checagem automática dos 18 endereços da seção 11 fechou com **17 respostas `200` e uma `406`**:
`https://www.euronews.com/next/2026/04/28/...` recusa cliente de linha de comando. **A fonte foi
lida nesta sessão** pelo navegador da ferramenta, e o conteúdo citado veio dessa leitura — o erro
é do instrumento de verificação, não da fonte. Ela permanece na seção 11, com o falso positivo
registrado aqui e na própria entrada.

Duas outras entradas da seção 11 — os materiais da disciplina, itens 17 e 18 — foram lidas na
**cópia local** e não pela URL. As URLs respondem `200` e estão listadas porque são o endereço
público do mesmo material, mas a leitura que sustenta o documento foi a local, e isso está
anotado em cada entrada em vez de ficar implícito.

### 12.4 Buscas que não deram em nada

- **Um caso judicial que atribua defeito a código gerado por agente.** Procurei por incidente,
  responsabilidade e processo; achei incidentes (o da PocketOS entre eles [4]) e achei a moldura
  legal [5], e **nenhuma decisão**. Esse vazio **é o achado**: é a precondição faltante da raiz 3,
  e ela se confirmou por ausência — que é a forma mais confiável de confirmar uma ausência.
- **Uma medida aceita de "instrução boa".** Procurei por avaliação de skill, qualidade de
  instrução e benchmark de prompt empacotado. O único dado quantitativo que apareceu vai na
  direção contrária do entusiasmo do campo: instrução gerada por LLM piora ligeiramente e
  encarece [12]. Não existe unidade, ranking nem procedência. É a precondição faltante da raiz 1.
- **Replicação independente dos números de manutenibilidade.** Procurei por alguém que não
  vendesse ferramenta de análise e tivesse medido duplicação e refatoração no mesmo período.
  Não achei. Os números da GitClear [2] estão no documento porque são específicos e
  verificáveis, com a procedência anotada na seção 11 e o viés declarado na seção 7.
- **Dado sobre quem entra na profissão hoje e não passa pela etapa de ler código alheio.** Este
  é o mecanismo que o cenário indesejável da seção 9 descreve, e eu não achei nenhuma medida
  dele — só a lacuna de emprego agregada [3], que é consequência e não mecanismo. Se alguém na
  turma quiser um recorte de pesquisa que ainda está vago, é este.

### 12.5 Registro de método desta rodada

- **Entrevista (Fase 1).** As nove perguntas foram feitas em bloco único, numeradas. As respostas
  vieram no despacho da rodada; não houve interlocutor ao vivo para uma segunda rodada de
  perguntas condicionais. Dois campos foram preenchidos por proposta minha e estão marcados
  como suposição no `RECORTE FECHADO` abaixo: o **número de disrupções-raiz** (pergunta 8, não
  respondida — propus 3) e a **fronteira do tema** (pergunta 1, derivada do bloco "Fronteira com
  os vizinhos" do tema 1 da disciplina, conforme a regra 1.5 da skill). O echo-back foi emitido
  e a rodada seguiu sem confirmação explícita, por ausência de interlocutor — **isto é um desvio
  da §1.3 da skill, e está registrado como desvio, não normalizado.**
- **Navegação (pergunta 9).** Sim. A Regra F3 **não** se aplica: a seção 3 e a seção 11 são
  verificadas nesta sessão, com 18 fontes abertas e duas tentativas de acesso que falharam,
  ambas registradas em 12.3 em vez de silenciadas.
- **Recusa (Fase 2).** Quatro categorias reprovadas antes de qualquer derivação — duas maduras
  (autocompletar de IDE, chat que explica código) e duas H2− (assistente com contexto do
  repositório no IDE, revisão automatizada por IA). **Não houve recusa total do tema:** a borda
  emergente é larga e datada, e o próprio recorte da disciplina já havia cortado o maduro. A
  tabela completa está em 12.2.
- **Roda (Fase 4).** 3 raízes; 7 efeitos de primeira ordem, 11 de segunda, 10 de terceira;
  profundidade 3; prazos monotônicos em todos os galhos; todos os efeitos de primeira ordem
  caindo até o horizonte de 2031; **dois** efeitos de primeira ordem com `confianca: alta`
  (`e1` e `e4`) e **nenhum** de terceira ordem com `alta` — dentro da cota de humildade, que
  permite até um.
- **Contestação (Fase 5).** As seis provas aplicadas à roda inteira. Seis efeitos eliminados,
  um removido por regra de parada, dois rebaixados (um de efeito para sinal, um de `alta` para
  `media`). A P6 (CLA) produziu o achado mais consequente e ele está na seção 7: o mapa inteiro
  repousa sobre "software deve ser correto, durável e ter um responsável" — e se a métrica virar
  software descartável, os dez efeitos de terceira ordem trocam de sinal sem que um fato mude.
- **Fora da árvore por regra de parada.** Duas convergências registradas em prosa na seção 5
  (perícia sobre trabalho de agente; instrução assinada como requisito de contrato) e uma
  retroalimentação negativa que a árvore não representa (a raiz 2 freia a raiz 1).
- **As quatro perguntas do teste cruzado**, respondidas sobre esta rodada: **(1)** perguntas
  antes de rodar — Fase 1, nove perguntas em bloco e `RECORTE FECHADO` emitido, com o desvio da
  confirmação declarado acima; **(2)** separou o novo do comum e recusou o comum — Fase 2, com o
  teste que reprovou cada item nomeado em 12.2, incluindo a distinção H2− que é onde quase todo
  mapa erra; **(3)** duvidou do próprio resultado — Fase 5, cota de dano cumprida nas três
  raízes, `id` mortos em 12.1, e a seção 7 abrindo com o falsificador que morde; **(4)** saiu no
  formato — Fase 6, com a autochecagem rodada e o resultado colado no relato da rodada.

### 12.6 O recorte fechado desta rodada

```
RECORTE FECHADO
  tema ................ O ofício de programar quando o agente executa: especificar, verificar
                        e responder pelo resultado
  não é ............... segurança e contenção do agente (tema 2); memória, observabilidade e
                        avaliação como tecnologia (tema 3); o que já é comum em produto de
                        massa (régua da disciplina)
  horizonte ........... 2031
  região .............. global, com uma nota sobre o Brasil
  público ............. quem projeta mídia e interação
  descartado .......... o que já é comum em produto de massa; nenhuma outra exclusão
  viés ................ neutro
  falsificador ........ evidência de que a adoção já passou da maioria inicial (Rogers), ou de
                        que a tecnologia não rompe nada — só melhora o que existe
  raízes .............. 3
  navegação ........... sim
  SUPOSIÇÕES MINHAS ... (a) o número de raízes: a pergunta 8 não foi respondida e eu propus 3;
                        (b) a fronteira: derivada do bloco "Fronteira com os vizinhos" do tema 1
                        da disciplina, conforme a regra 1.5 da skill, e não ditada pelo autor;
                        (c) a confirmação explícita do §1.3 não aconteceu — não havia
                        interlocutor na rodada, e eu segui sem ela
```
