---
tema: "Programação agêntica: o desenvolvedor vira orquestrador"
slug: programacao-agentica-o-desenvolvedor-vira-orquestrador
autor_login: grec
zona_de_interesse: Agentes
data: 2026-09-12
horizonte: 2056
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 16
efeitos_ordem_2: 34
efeitos_ordem_3: 27
tecnologias_citadas: [Claude Code, Codex, GitHub Copilot, Cursor, OpenCode, Google Antigravity, JetBrains AI, spec-kit, AWS Kiro, OpenSpec, Tessl, SKILL.md, Model Context Protocol, Rocq, Lean, seL4, git worktree, Composio Agent Orchestrator, Conductor, Vibe Kanban, Claude Squad, Zaivern Code, vibe-log, claude-tap, SBOM, CE marking, Conjure, Figma Make, WCAG]
fontes: 17
confianca: media
experimento: "Bancada de regeneração — a mesma especificação executada por três agentes diferentes, com medição da divergência entre as saídas e do que um humano consegue verificar em quinze minutos"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Em 2026 o agente que lê o repositório, edita, testa e abre o PR já não é emergente: 90% dos
desenvolvedores profissionais usam um toda semana e cerca de 47% do código é gerado por agente.
Esta rodada, portanto, **recusa o agente de código como disrupção-raiz** — ele é o contexto — e
procura as rupturas que estão atrás dele. Encontra quatro. A primeira: o código deixa de ser o
artefato que se guarda, e a especificação executável mais o harness passam a ser o que se
versiona, se possui e se audita. A segunda: como a revisão humana não escala (98% mais PRs, 91%
mais tempo de revisão, PRs sem revisão nenhuma em alta), a verificação deixa de ser humana e o
consentimento em fazer merge passa a depender de prova de máquina. A terceira: com custo de
produção perto de zero, o software deixa de ser produto e vira artefato de uso único gerado no
ponto de uso — e, para quem projeta interação, a tela deixa de ser o objeto de projeto. A quarta:
a unidade de trabalho deixa de ser a sessão e vira a frota, o que apaga a diferença entre
contribuir e gerenciar e destrói o degrau de entrada na profissão, já medível hoje. Até 2056,
as três forças que decidem o desenho são a responsabilidade jurídica (o CRA europeu em dezembro
de 2027 trata software como produto), a escassez de quem sabe julgar, e o custo de energia de
gerar tudo toda vez.

## 2. O tema

**O objeto.** Não é a IA que escreve código — é **o ofício de programar** e o que acontece com
ele quando escrever deixa de ser o gargalo. O tema está na fronteira com dois vizinhos do
catálogo da disciplina e é preciso não invadi-los: contenção e segurança do agente é o tema 2;
memória, observabilidade e avaliação é o tema 3. Aqui o objeto é a **profissão** — o que a pessoa
faz o dia inteiro, o que ela guarda, por que ela responde, e como se aprende a fazer isso.

**Onde encosta em mídia e interação.** Em três lugares, e nenhum deles é óbvio. Primeiro: se a
interface passa a ser gerada por pessoa e por momento, o objeto do design de interação deixa de
ser a tela e passa a ser a regra de comportamento — projeto vira redação normativa. Segundo: o
próprio ambiente de trabalho de quem produz software é uma interface, e ela está mudando do
editor de texto para o painel de frota; é um problema de IHC de primeira ordem, com dez processos
assíncronos disputando a atenção de uma pessoa. Terceiro: quando o custo de produzir software
cai, a mídia interativa de nicho — a que nunca teve mercado para pagar por si — passa a existir
em volume, e a curadoria substitui a produção como escassez.

**Por que merece mapa de futuro, e não levantamento de estado da arte.** Porque o estado da arte
aqui envelhece em semanas e porque a pergunta interessante não é "qual agente é melhor" — é o que
acontece com o repositório, com a revisão, com o contrato e com a entrada na profissão quando o
custo marginal de escrever cai a quase zero e o custo de **responder pelo que foi escrito** não
cai nada. Essa assimetria é o motor de todo este mapa.

**Premissas assumidas** (o briefing desta rodada cobriu horizonte, público, recorte, viés,
descarte e falseador; o que ele não cobriu está declarado aqui e repetido na seção 12):

- Horizonte 2056, trinta anos. É uma janela longa demais para prazos e curta demais para
  descontinuidades civilizatórias; o mapa trata o intervalo como três décadas de transição de
  ofício, não como salto.
- Recorte global, com uma nota sobre o Brasil onde o mecanismo muda de forma (formação,
  regulação, mercado de trabalho).
- Descartado de início, pela régua da disciplina: **o que já é comum em produto de massa**.
  Nenhuma outra exclusão.
- Viés declarado: neutro, com um cenário de cada lado na seção 9.
- Falseador dado pelo autor: evidência de que a adoção já passou da maioria inicial de Rogers,
  ou de que a tecnologia não rompe nada. **Este falseador foi acionado e mudou o mapa** — ver
  a recusa registrada na seção 4.
- Assumido sem ter sido perguntado: que haverá energia e capacidade de inferência para sustentar
  geração contínua; que os modelos continuam acessíveis por API a terceiros; que não há colapso
  de cadeia de suprimento de semicondutores no período. As três entram na seção 7 como premissas
  escondidas.

## 3. Onde isso está hoje

*Âncora feita com acesso à web em 12/09/2026; dezesseis buscas, dezoito páginas abertas,
dezessete listadas na seção 11 e uma na 12 por bloquear verificação automática.*

### O que já existe e funciona

**O agente de código é infraestrutura, não novidade.** A décima edição do Developer Ecosystem
Survey da JetBrains, com mais de 15.000 profissionais ouvidos entre maio e julho de 2026, mede
**90% de uso semanal** de agentes de código no trabalho e **68% de uso diário**. Claude Code
aparece em 39% globalmente e 47% nos Estados Unidos, tendo saído de 18% em janeiro de 2026;
Copilot caiu de 29% para 21%; Cursor caiu de 18% para 12%; Codex subiu de 3% para 16%; OpenCode
chegou a 7%. É o dado que decide o desenho deste mapa e está detalhado na recusa da seção 4.

**A escrita manual virou minoria.** A mesma pesquisa mede a composição do código: cerca de **47%
totalmente gerado por agente**, 38% escrito com assistência, 27% inteiramente à mão. Um terço dos
respondentes (≈31%) são "codificadores agênticos", com 84% do código gerado. A diferença regional
é grande: 32% a 35% no Leste Asiático geram mais de 80% do código com agente, contra ~16% na
Europa e Reino Unido.

**A revisão já é o gargalo, com número.** A revisão multivocal de Farrag (arXiv 2605.01160, maio
de 2026, 67 fontes de 2022 a 2026) reúne o quadro: estudos controlados relatam ganhos de 20% a
56% em tarefas bem escopadas, o RCT mais rigoroso documenta **19% de lentidão** em
desenvolvedores experientes, e telemetria de mais de 10.000 desenvolvedores mostra **98% mais
pull requests e 91% mais tempo de revisão**, com métricas de entrega estáveis. Agarwal, Miller,
Kästner e Vasilescu (arXiv 2607.07980, julho de 2026) codificam 3.100 de 38.709 documentos de
literatura cinzenta e concluem que PRs de autoria de agente são **revisados com menos frequência,
mesclados várias vezes mais rápido e discutidos menos** — e, honestamente, registram que a
direção dessas tendências inverte conforme escolhas de análise igualmente defensáveis.

**A conta da manutenibilidade já chegou.** O relatório da GitClear sobre 623 milhões de mudanças
de código entre 2023 e 2026 mede oito sinais piorando ao mesmo tempo: duplicação de blocos
**+81%** (de 40,3 para 73,0 por milhão de linhas alteradas, o maior nível já registrado),
copiar-e-colar dentro do commit +41%, construções que mascaram erro +47%, churn de duas semanas
+15%, reuso de função entre arquivos −35%, e refatoração em **queda de 70%**, chegando a 3,8% das
linhas alteradas.

**A especificação já é ferramenta de prateleira.** O `spec-kit` do GitHub está em ~135,8 mil
estrelas e chegou à versão 1.0.0; a documentação diz literalmente que a abordagem "inverte o
roteiro" e trata especificações como **executáveis**, que "geram diretamente implementações em
vez de apenas guiá-las". Kiro, OpenSpec, Tessl e as variantes de cada fabricante seguem a mesma
linha. O argumento de fundo é o da palestra "The New Code", de Sean Grove: código é "10% a 20% do
valor; os outros 80% a 90% estão na comunicação estruturada", e código é uma projeção com perda
da especificação, como um binário decompilado.

**A camada de instrução empacotada virou padrão aberto.** O SKILL.md foi publicado como padrão
aberto em dezembro de 2025 e adotado por outros fabricantes; o MCP foi doado à Agentic AI
Foundation sob a Linux Foundation e, na revisão de 28 de julho de 2026, deixou de ser um
protocolo com sessão para ser um protocolo sem estado, com roteamento por cabeçalho e respostas
de listagem cacheáveis — mudança feita explicitamente para escala de gateway. Os SDKs de primeira
linha somam quase meio bilhão de downloads por mês.

**A frota já é prática.** Rodar vários agentes em paralelo, cada um no seu git worktree, é rotina
de ferramenta: Composio Agent Orchestrator, Conductor, Vibe Kanban, Claude Squad, Zaivern Code.
A recomendação corrente de Addy Osmani é que 3 a 5 agentes é o ponto ótimo, com orçamento de
token por agente e morte do agente travado após três iterações no mesmo erro — e a frase que
resume o problema todo: "o gargalo não é mais geração, é verificação".

**O efeito no emprego de entrada já está medido.** O AI Index 2026 de Stanford registra que o
emprego de desenvolvedores de software entre 22 e 25 anos **caiu quase 20% desde 2024**, enquanto
o de coortes mais velhas cresceu. O mesmo relatório mede 88% de adoção organizacional de IA e
26% de ganho de produtividade em desenvolvimento de software.

### O que existe e ainda não funciona

- **Regeneração determinística.** A promessa central do spec-driven — jogar fora o código e
  regerá-lo — depende de a mesma especificação produzir comportamento equivalente na próxima
  execução, com outro modelo. Não há, hoje, medição pública dessa estabilidade. É a lacuna que
  o experimento da seção 10 ataca.
- **Verificação formal em escala industrial.** Há avanço real: agentes sobre Rocq gerando
  interpretadores verificados (1.859 linhas de Rocq extraídas para 2.848 de C++, num caso de
  RISC-V RV32I, em trinta minutos) e provadores de LLM batendo recordes em miniF2F e ProofNet.
  Mas nada disso cobre sistemas com efeito colateral, concorrência e integração — o software
  comum. O seL4 está provado desde 2009 e não virou requisito contratual em lugar nenhum fora
  de nicho.
- **Interface gerada no ponto de uso.** Existe como demo e como tese — Conjure, "just-in-time
  interfaces", a literatura de software maleável, a linhagem acadêmica das *ephemeral user
  interfaces* de 2013 — e não existe como produto que alguém use sem saber que está usando.
- **Segurança do agente com privilégio em produção.** O incidente da PocketOS, em 25 de abril de
  2026, é o caso testemunha: um agente Cursor rodando Claude Opus 4.6 apagou o banco de produção
  **e os backups de volume** em nove segundos, com um token irrestrito encontrado num arquivo que
  nada tinha a ver com a tarefa; o CEO da Railway restaurou os dados pessoalmente no domingo.
  Nenhuma consequência regulatória ou contratual foi registrada — e é exatamente essa ausência
  que o mapa trata como transitória.

### Quem constrói

Fabricantes de agente e de harness (Anthropic, OpenAI, GitHub/Microsoft, Google, JetBrains,
Cursor); a camada aberta de protocolo e de skills (Agentic AI Foundation/Linux Foundation para o
MCP, o padrão SKILL.md, registries e marketplaces de skill); a camada de orquestração de frota,
quase toda comunidade e startup (Composio, Conductor, Vibe Kanban, Claude Squad, Zaivern); a
academia de verificação (grupos de Rocq/Lean, o workshop VeriCodeGen do NeurIPS 2026) e a de
engenharia de software empírica (CMU, no caso do estudo de revisão); e — decisivo, e quase sempre
esquecido nas listas de atores — **os reguladores**: a Comissão Europeia com o CRA (em vigor
desde 10/12/2024, obrigações de reporte desde 11/09/2026, obrigações plenas em 11/12/2027) e, no
Brasil, a Câmara dos Deputados com o PL 2338/2023, aprovado no Senado em 26/12/2024 e remetido à
Câmara em 17/03/2025.

### O número que descreve a adoção

**90% de uso semanal e 68% diário entre 15.000+ profissionais** (JetBrains, maio–julho de 2026),
com **47% do código gerado por agente**. Para a camada de protocolo: **41% das organizações de
software com servidores MCP em produção limitada ou ampla** (relatório Stacklok 2026, citado em
agregadores — *não abri o relatório original, e por isso este número entra rebaixado*).

**Nota Brasil.** A Pesquisa Salarial de Programadores 2026 do Código Fonte TV ouviu **17.046
profissionais entre 23/02 e 09/06/2026** e tem seção própria sobre IA generativa — mas a página
pública renderiza os percentuais como 0% e não permite leitura dos valores; abri e não consegui
extrair número. **Sem número brasileiro confiável de adoção de agente**, portanto. O que há de
sólido no recorte nacional é institucional e demográfico: déficit projetado de mais de 530 mil
profissionais de tecnologia (Brasscom), a formação em TI concentrada em cursos técnicos e de
tecnólogo, e o PL 2338 parado na Câmara — três coisas que aparecem nos ramos e2, e15 e e16.

## 4. As disrupções-raiz

### Recusas registradas

**Candidato recusado como raiz: "o agente que age — executa, roda os testes, abre o PR".**
Adoção em maioria desde 2026 (90% semanal, 68% diário, 15.000+ respondentes, JetBrains
maio–julho de 2026). Pela régua da disciplina — *se dá para fazer com o que já é comum em produto
de massa, é maduro* — está fora. Tratado como contexto na seção 3. **Esta recusa é o acionamento
do falseador declarado pelo autor no briefing** ("evidência de que a adoção já passou da maioria
inicial de Rogers") e é o que separa este mapa de uma roda que tomaria o agente por novidade.

**Candidato recusado como raiz: "o spec-driven development como prática".** É melhoria
sustentadora do jeito como já se documentava intenção, e já é produto de massa: `spec-kit` com
~135,8 mil estrelas e uma variante por fabricante. O que **não** é maduro, e vira R1, é a
consequência radical — descartar o código.

**Candidato recusado como raiz: "MCP e a camada de protocolo".** Rompe integração, não ofício;
e está em difusão avançada (SDKs com quase meio bilhão de downloads mensais, revisão de julho de
2026 já otimizando para escala de gateway). É pré-condição de R1 e R4, não raiz.

**Candidato recusado como raiz: "autocompletar de IDE" e "chat que explica código".** Maduros
desde antes da janela; a própria disciplina já os coloca fora.

### R1 — O código deixa de ser o artefato que se guarda

A especificação executável mais o harness passam a ser o que se versiona, se audita, se licencia
e se possui; o código passa a ser saída de build, regenerável e descartável.

1. **O que rompe.** O repositório como memória da organização; o diff como unidade de revisão;
   o git como âncora de autoria e de propriedade; e a prática de "ler o código para saber o que
   o sistema faz". Não é fazer o mesmo mais barato — é trocar o objeto guardado.
2. **Por que agora, e não há cinco anos.** Porque três pré-condições fecharam juntas em 2025–26:
   o custo de regerar caiu abaixo do custo de manter (47% do código já sai de agente); a
   instrução virou artefato empacotado e portátil (SKILL.md como padrão aberto, adotado fora de
   quem o publicou); e a ferramenta de especificação virou infraestrutura de prateleira
   (`spec-kit` em 1.0.0). Em 2021 faltavam as três.
3. **Onde está na difusão.** **Produto de nicho.** A prática de escrever spec antes é maioria; o
   descarte do código é raro e experimental.
4. **O que ainda falta acontecer.** Regeneração estável entre versões e entre fabricantes de
   modelo; um formato de especificação que sobreviva à troca de modelo; e um regime de
   conformidade que aceite spec como o produto — hoje o CRA exige documentação técnica e
   marcação CE do artefato entregue, não da sua receita.
5. **Quem bloqueia.** A Comissão Europeia, via CRA a partir de 11/12/2027 — software autônomo
   passa a ter obrigação de produto —, e as cláusulas de escrow de código-fonte em contrato
   corporativo, que só sabem depositar código. Efeito gerado: e2 e seus filhos.

### R2 — A verificação deixa de ser humana

O gargalo migra da escrita para o consentimento em fazer merge, e a única saída que escala é
máquina verificando máquina.

1. **O que rompe.** O code review como prática, como ponto de controle social da engenharia e
   como escola — era revisando linha que se formava sênior. Rompe também a suposição, hoje ainda
   presente em todo contrato e em toda auditoria, de que **alguém leu**.
2. **Por que agora.** Porque a pressão virou número: 98% mais PRs contra 91% mais tempo de
   revisão; PRs de agente revisados com menos frequência e mesclados mais rápido; e, do outro
   lado, provadores assistidos por modelo passaram a produzir milhares de linhas verificadas por
   sessão. Há cinco anos não havia nem a pressão nem a saída.
3. **Onde está na difusão.** **Laboratório e demo pública.** A pressão é forte e presente; a
   solução — verificação formal barata sobre software comum — é especulativa. Por isso a cadeia
   que depende de prova formal carrega `confianca: baixa`.
4. **O que ainda falta acontecer.** Provadores que cubram efeito colateral, concorrência e
   integração; custo por linha verificada abaixo do custo do revisor humano; e um regime que
   aceite prova como evidência de conformidade — hoje nenhuma norma aceita.
5. **Quem bloqueia.** As seguradoras e as auditorias de conformidade, que precisam de um humano
   nomeado a quem imputar, e não sabem o que fazer com um certificado de prova; e os próprios
   revisores seniores, cujo poder organizacional vem do portão de merge. Efeito gerado: e5.3 e
   e6.3.

### R3 — O software deixa de ser produto e vira artefato de uso único

Gerado no ponto de uso, para uma pessoa e um momento, e descartado.

1. **O que rompe.** O modelo de negócio de software — licença, assinatura, assento; a loja de
   aplicativos como catálogo; e, para o público deste mapa, **a tela como objeto de projeto**:
   não há mais *a* interface, há uma interface por pessoa por vez.
2. **Por que agora.** Porque o preço se moveu de verdade: US$ 285 bilhões evaporaram de ações de
   software em 48 horas em fevereiro de 2026, o *per-seat* puro caiu de 21% para 15% em doze
   meses, e o custo de construir uma ferramenta interna caiu de faixas de US$ 50 mil–500 mil para
   US$ 500–20 mil. Em 2021 o custo de gerar era alto e o de manter, aceitável.
3. **Onde está na difusão.** **Demo pública, entrando em produto de nicho.** Software interno
   gerado já acontece; interface gerada no ponto de uso para usuário final, não.
4. **O que ainda falta acontecer.** Confiança em software que ninguém auditou; latência e custo
   de geração no momento do uso; uma resposta para onde ficam os dados quando o aplicativo some;
   e um mecanismo de cobrança que não seja assento nem loja.
5. **Quem bloqueia.** Apple e Google, donas da distribuição, que perdem o catálogo, e os
   fornecedores de SaaS, que perdem a renda; e os times de segurança corporativa, para quem
   software não catalogado é superfície de ataque. Efeito gerado: e11.

### R4 — A unidade de trabalho deixa de ser a sessão e passa a ser a frota

Uma pessoa conduz muitos agentes simultâneos e assíncronos; o trabalho vira despacho e triagem.

1. **O que rompe.** A jornada de trabalho como atenção sequencial a uma tarefa; a fronteira entre
   contribuidor individual e gerente; a métrica de produtividade por pessoa; e a própria
   experiência do que é "estar programando".
2. **Por que agora.** Porque o isolamento ficou barato (um git worktree por agente virou padrão
   de ferramenta) e o token ficou barato o bastante para dez sessões simultâneas — e porque
   apareceu uma camada inteira de painéis de frota entre 2025 e 2026. Há cinco anos não havia
   nem isolamento automático nem agente que sustentasse sessão longa.
3. **Onde está na difusão.** **Adoção precoce, abaixo de 10%.** A regra de bolso que circula —
   3 a 5 agentes, e só some um a mais se você consegue revisar a saída — amarra R4 a R2 e é, ela
   mesma, o sinal de que a prática ainda não escalou.
4. **O que ainda falta acontecer.** Uma interface que permita supervisionar dez processos sem
   ler dez diffs; um modelo de custo que não puna paralelismo; e uma resposta para quem responde
   quando dez agentes erram juntos.
5. **Quem bloqueia.** O direito do trabalho e a norma de saúde ocupacional, para os quais
   supervisão contínua de processos é trabalho de vigilância com limite; e o fornecedor de
   modelo, que pode precificar paralelismo. Efeito gerado: e13.2.1 e e15.3.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O código deixa de ser o artefato que se guarda e a especificação executável passa a ser a fonte
    efeitos:
      - id: e1
        ordem: 1
        efeito: Times passam a versionar a especificação e o harness e a tratar o código como saída de build regenerável
        sinal: medio
        prazo: 2034
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O diff deixa de ser a unidade de revisão e a revisão passa a incidir sobre a mudança de especificação
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A entrevista técnica troca o exercício de escrever função pelo de desambiguar uma especificação contraditória
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A propriedade intelectual do software se desloca do código para o par especificação e suíte de avaliação
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Licenças livres se reescrevem para cobrir especificação e avaliação e projetos que liberam só o código passam a ser tratados como fechados
                sinal: fraco
                prazo: 2042
                confianca: baixa
          - id: e1.3
            ordem: 2
            efeito: A dívida técnica migra para dívida de especificação, medida em ambiguidade acumulada em vez de código duplicado
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e1.3.1
                ordem: 3
                efeito: Surge a categoria de ferramenta que mede contradição e ambiguidade da especificação e ela vira a métrica de qualidade do time
                sinal: fraco
                prazo: 2037
                confianca: baixa
              - id: e1.3.2
                ordem: 3
                efeito: Sistemas legados cujo código ninguém entende passam a ser reespecificados a partir do comportamento observado em produção
                sinal: fraco
                prazo: 2039
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A Comissão Europeia passa a exigir do fabricante a documentação do processo que gerou o código e não só o binário e o SBOM
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Quem descarta o código perde a marcação CE e o descarte se confina ao software fora do escopo do CRA
            sinal: fraco
            prazo: 2033
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Forma-se uma fronteira dura entre software regulado com código guardado e software efêmero sem código, com ofícios e salários separados
                sinal: fraco
                prazo: 2044
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: A auditoria de proveniência de cada trecho — que agente, que modelo, que skill — vira exigência contratual e mercado próprio
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: O registro de proveniência do agente vira documento de instrução processual em disputa de autoria e de responsabilidade
                sinal: fraco
                prazo: 2041
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: Quem projeta mídia e interação passa a entregar especificação de comportamento em vez de tela e o design vira redação normativa
        sinal: fraco
        prazo: 2035
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: O protótipo de alta fidelidade perde função porque a especificação já roda, e a etapa de passagem de design para desenvolvimento desaparece do processo
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A profissão de designer de interação se divide entre quem escreve regra de comportamento e quem cura saída de gerador
                sinal: fraco
                prazo: 2043
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: A marca de um produto digital deixa de estar na tela e passa a estar na especificação de comportamento, inclusive no que o sistema recusa fazer
            sinal: fraco
            prazo: 2038
            confianca: baixa
      - id: e4
        ordem: 1
        efeito: Trocar de fornecedor de modelo deixa de significar reescrever o produto porque a especificação é portátil
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: O poder de barganha migra de quem tem o modelo para quem tem a especificação e a suíte de avaliação do domínio
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Setores regulados passam a manter especificações públicas de referência mantidas por consórcio, como hoje se mantêm normas técnicas
                sinal: fraco
                prazo: 2046
                confianca: baixa
  - disrupcao: A verificação deixa de ser humana e o merge passa a depender de prova de máquina
    efeitos:
      - id: e5
        ordem: 1
        efeito: O merge deixa de depender de leitura humana e passa a depender de um conjunto de provas e testes que o próprio sistema executa
        sinal: medio
        prazo: 2036
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: O revisor sênior deixa de ser gargalo e vira autor do critério, escrevendo a propriedade que precisa valer em vez do comentário na linha
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A senioridade passa a se medir pela qualidade das propriedades que a pessoa enuncia, e some o caminho pelo qual se aprendia a enunciá-las
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: A cobertura de prova formal vira requisito de contrato em software de infraestrutura antes de virar prática comum no resto
            sinal: fraco
            prazo: 2044
            confianca: baixa
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Bibliotecas sem prova associada passam a ser recusadas por política de dependência e o ecossistema aberto se parte entre o provado e o não provado
                sinal: fraco
                prazo: 2050
                confianca: baixa
          - id: e5.3
            ordem: 2
            efeito: A ausência de leitura humana vira risco segurável e apólices de erro e omissão passam a precificar o regime de verificação do time
            sinal: fraco
            prazo: 2036
            confianca: baixa
      - id: e6
        ordem: 1
        efeito: O volume de código sem revisão cresce mais rápido que a capacidade de verificar e o setor atravessa um período de falhas visíveis antes de a verificação alcançar
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Incidentes causados por código que ninguém leu ganham nome próprio e cobertura de imprensa não especializada
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Contratos públicos brasileiros passam a exigir declaração de revisão humana em sistema de missão crítica, ancorados na cláusula de responsabilidade por decisão automatizada do PL 2338
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: A confiança em software cai como bem geral e produtos passam a competir por auditável como hoje competem por privado
            sinal: fraco
            prazo: 2037
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: O selo de verificação vira elemento de interface e o usuário passa a ver na tela o que foi provado sobre o que está usando
                sinal: fraco
                prazo: 2042
                confianca: baixa
          - id: e6.3
            ordem: 2
            efeito: Times reintroduzem freios deliberados como limite de PRs por dia e quarentena de código novo, e a produtividade medida cai antes de subir
            sinal: medio
            prazo: 2030
            confianca: media
      - id: e7
        ordem: 1
        efeito: A prova e o teste passam a ser a mercadoria vendida em vez do código e forma-se um mercado de verificação como serviço
        sinal: fraco
        prazo: 2040
        confianca: baixa
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Provedores de nuvem passam a oferecer execução restrita ao que está provado, e o não provado roda em ambiente degradado
            sinal: fraco
            prazo: 2044
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: O ambiente degradado vira o padrão do software efêmero e a distinção entre aplicativo instalado e aplicativo gerado se resolve por nível de privilégio e não por origem
                sinal: fraco
                prazo: 2047
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: Disciplinas introdutórias de programação trocam o exercício de escrever a função pelo de enunciar o que tem de valer e ler o contraexemplo
        sinal: fraco
        prazo: 2034
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: O aprendizado perde o erro de sintaxe como professor barato e a formação inicial fica mais lenta antes de ficar mais rápida
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Cursos técnicos e de tecnólogo no Brasil perdem a vantagem de ensinar sintaxe rápido e migram para operação de frota e conformidade
                sinal: fraco
                prazo: 2044
                confianca: baixa
  - disrupcao: O software deixa de ser produto e vira artefato de uso único gerado no ponto de uso
    efeitos:
      - id: e9
        ordem: 1
        efeito: A interface deixa de ser projetada uma vez e passa a ser montada por pessoa e por momento, e o número de telas distintas de um produto deixa de ser contável
        sinal: medio
        prazo: 2035
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: O teste de usabilidade perde o objeto e a avaliação migra para o gerador e para a distribuição de saídas que ele produz
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: A pesquisa em interação humano-computador passa a medir sistemas por amostragem estatística de interfaces geradas, como hoje se avalia modelo
                sinal: fraco
                prazo: 2043
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: A acessibilidade deixa de ser conformidade de artefato e vira propriedade que o gerador precisa provar em toda saída
            sinal: fraco
            prazo: 2037
            confianca: baixa
            efeitos:
              - id: e9.2.1
                ordem: 3
                efeito: Pessoas com deficiência passam a receber interface adaptada por padrão e a categoria de versão acessível desaparece
                sinal: fraco
                prazo: 2046
                confianca: baixa
          - id: e9.3
            ordem: 2
            efeito: A consistência visual entre sessões vira decisão de projeto e item de custo, e times passam a contratar estabilidade como hoje se contrata desempenho
            sinal: fraco
            prazo: 2035
            confianca: media
      - id: e10
        ordem: 1
        efeito: O software de nicho que nunca teve mercado para pagar por si passa a existir em volume e a cauda longa fica maior que a cabeça
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Organizações pequenas param de comprar SaaS de função única e passam a gerar o equivalente, e o mercado de ferramentas horizontais encolhe antes do de plataformas
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: Fornecedores de software sobrevivem vendendo dado, integração e responsabilidade assumida em vez de funcionalidade
                sinal: medio
                prazo: 2038
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: A manutenção some como categoria porque o que quebra é regerado e não consertado, e a noção de versão perde sentido para o usuário
            sinal: fraco
            prazo: 2039
            confianca: baixa
            efeitos:
              - id: e10.2.1
                ordem: 3
                efeito: A preservação digital fica sem objeto e arquivos passam a guardar especificação e modelo, com o problema de que o modelo não é reexecutável
                sinal: fraco
                prazo: 2048
                confianca: baixa
          - id: e10.3
            ordem: 2
            efeito: O custo de inferência e a pegada energética de gerar toda vez passam a competir com o custo de guardar, e funções muito usadas voltam a ser escritas uma vez e cacheadas
            sinal: fraco
            prazo: 2034
            confianca: media
      - id: e11
        ordem: 1
        efeito: Donas de loja passam a exigir que aplicativo gerado no dispositivo rode sob permissão declarada previamente e a loja vira registro de capacidade em vez de catálogo
        sinal: fraco
        prazo: 2035
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: A distribuição de software deixa de passar por publicação e passa a passar por autorização, e o poder da plataforma aumenta em vez de diminuir
            sinal: fraco
            prazo: 2038
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: A regra europeia escrita para catálogo de aplicativos não alcança geração no dispositivo e a disputa regulatória sobre lojas recomeça do zero
                sinal: fraco
                prazo: 2044
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: A fronteira entre usar e programar deixa de existir para uma parte dos usuários, que passam a mandar em software sem intermediário
        sinal: medio
        prazo: 2040
        confianca: baixa
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: A alfabetização digital escolar troca aprender a usar o programa por aprender a pedir e a conferir
            sinal: fraco
            prazo: 2044
            confianca: baixa
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: No Brasil a diferença entre quem sabe conferir e quem aceita a saída pronta reproduz a desigualdade que o acesso ao dispositivo havia começado a fechar
                sinal: fraco
                prazo: 2052
                confianca: baixa
  - disrupcao: A unidade de trabalho deixa de ser a sessão e passa a ser a frota de agentes simultâneos
    efeitos:
      - id: e13
        ordem: 1
        efeito: O trabalho de quem desenvolve deixa de ser sequencial e vira despacho e triagem simultânea de muitos processos assíncronos
        sinal: medio
        prazo: 2031
        confianca: alta
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: A interface de trabalho de quem programa deixa de ser o editor e vira o painel de frota
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: A ferramenta de desenvolvimento mais vendida passa a ser um sistema de supervisão e não um sistema de escrita
                sinal: fraco
                prazo: 2038
                confianca: media
          - id: e13.2
            ordem: 2
            efeito: A carga cognitiva migra de resolver para decidir e o esgotamento profissional muda de forma, de fadiga de concentração para fadiga de decisão
            sinal: fraco
            prazo: 2034
            confianca: baixa
            efeitos:
              - id: e13.2.1
                ordem: 3
                efeito: Normas de saúde ocupacional passam a tratar supervisão de frota como vigilância contínua e a fixar limite de processos simultâneos por pessoa
                sinal: fraco
                prazo: 2045
                confianca: baixa
          - id: e13.3
            ordem: 2
            efeito: O trabalho passa a ser medido por vazão de decisão e a métrica de produtividade individual por linhas ou commits perde sentido antes de ser substituída
            sinal: medio
            prazo: 2032
            confianca: media
      - id: e14
        ordem: 1
        efeito: A diferença entre contribuidor individual e gerente se apaga porque as duas funções viram despacho e verificação de trabalho alheio
        sinal: fraco
        prazo: 2038
        confianca: baixa
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: A escada de carreira em engenharia se achata em poucos níveis com faixas salariais largas
            sinal: fraco
            prazo: 2043
            confianca: baixa
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: A promoção deixa de ser por escopo de pessoas e passa a ser por escopo de responsabilidade assumida, medido em quantos sistemas a pessoa aceita assinar
                sinal: fraco
                prazo: 2050
                confianca: baixa
          - id: e14.2
            ordem: 2
            efeito: O tamanho mínimo de time capaz de manter um produto sério cai para uma pessoa e a empresa de software de uma pessoa deixa de ser anedota
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e14.2.1
                ordem: 3
                efeito: A concentração de risco numa pessoa vira o problema de governança da pequena empresa de software e o seguro passa a exigir sucessor com acesso à especificação
                sinal: fraco
                prazo: 2042
                confianca: baixa
      - id: e15
        ordem: 1
        efeito: A entrada na profissão perde o degrau porque não sobra tarefa pequena o bastante para o iniciante que o agente não faça melhor
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: A formação de sênior passa a depender de simulação deliberada e a residência substitui o estágio como forma de entrada
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: Falta gente capaz de julgar por volta de 2045 porque a coorte que não entrou entre 2025 e 2035 não existe, e o preço de quem sabe julgar sobe desproporcionalmente
                sinal: fraco
                prazo: 2045
                confianca: media
          - id: e15.2
            ordem: 2
            efeito: A matrícula em cursos de computação cai antes de se recompor e instituições brasileiras que abriram vagas na expansão da década de 2010 fecham turmas
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e15.2.1
                ordem: 3
                efeito: A formação em computação se funde com formação de domínio e quem entende de saúde, direito ou música com competência de especificar vale mais que quem só sabe computação
                sinal: fraco
                prazo: 2041
                confianca: baixa
          - id: e15.3
            ordem: 2
            efeito: A escassez de gente capaz de julgar freia a própria expansão da frota porque cada agente a mais exige alguém que responda pela saída
            sinal: medio
            prazo: 2033
            confianca: media
      - id: e16
        ordem: 1
        efeito: A responsabilidade por software passa a ser imputada a uma pessoa nomeada porque a organização não consegue explicar quem decidiu
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e16.1
            ordem: 2
            efeito: Aparece a figura contratual do responsável técnico por sistema, que assina, e a assinatura passa a ter preço como tem em engenharia civil
            sinal: fraco
            prazo: 2038
            confianca: baixa
            efeitos:
              - id: e16.1.1
                ordem: 3
                efeito: Entidades de classe brasileiras retomam a disputa por reserva de mercado em computação com o argumento da responsabilidade, e a discussão se desloca de diploma para atestação
                sinal: fraco
                prazo: 2044
                confianca: baixa
          - id: e16.2
            ordem: 2
            efeito: Quem assina passa a exigir controle sobre o ambiente do agente e o direito de recusar merge vira cláusula contratual em vez de norma de time
            sinal: fraco
            prazo: 2037
            confianca: baixa
```

### Os mecanismos, que o bloco não carrega

**R1.** `e1` acontece porque o custo de regerar caiu abaixo do custo de manter — é a mesma
inversão que fez ninguém mais versionar binário compilado. `e1.3` deriva de `e1` porque, se
ninguém lê o código, a ambiguidade não é mais absorvida por quem lê: ela fica na spec e se
acumula lá; a queda de 70% em refatoração medida pela GitClear é o primeiro sinal desse
deslocamento, ainda com o código no lugar. `e2` é a retroação com dono: o CRA não foi escrito
contra spec-driven, mas exige documentação técnica e marcação CE **do produto entregue**, o que
torna o descarte do código inviável em qualquer coisa que entre no mercado europeu — daí `e2.1`,
a fronteira entre software regulado e software efêmero. `e3` liga a raiz ao público deste mapa
pelo mesmo mecanismo de `e1.1`: se o artefato revisado é a regra, o entregável do design é a
regra.

**Classes de referência usadas em R1.** Para `e1` (2034): a transição de CVS/SVN para git levou
cerca de nove anos entre existir (2005) e ser padrão de fato (~2014); a troca do artefato
guardado é mais radical que a troca da ferramenta que o guarda, então 2034 é uma referência de
git esticada. Para `e2` (2031): quando há mandato regulatório, a difusão é rápida — o SBOM saiu
de ordem executiva norte-americana em 2021 para exigência contratual comum em cerca de quatro
anos; o CRA tem obrigações plenas em 11/12/2027, e 2031 é quatro anos depois.

**R2.** `e6` é o efeito mais bem ancorado do mapa inteiro: já está acontecendo, com três medições
independentes (98% mais PRs contra 91% mais tempo de revisão; PRs de agente revisados menos e
mesclados mais rápido; oito sinais de manutenibilidade piorando juntos em 623 milhões de
mudanças). `e5` deriva de `e6` porque a resposta a um gargalo de leitura humana não pode ser mais
leitura humana. `e6.3` é a retroação, e é a mais provável de todas: quando a produtividade medida
cai — 19% de lentidão no RCT, contra a percepção de estar mais rápido —, a reação organizacional
padrão é frear.

**Classes de referência usadas em R2.** Para `e5.2` (2044): a verificação formal é o caso mais
lento que existe. O seL4 está provado desde 2009 e, dezessete anos depois, não é requisito
contratual fora de nicho; a DO-178C, de 2011, exige métodos formais em aviação e não vazou para o
resto. Qualquer prazo de prova formal difundida antes de vinte anos contraria a única classe de
referência disponível — por isso `e5.2` foi empurrado de 2038 para 2044 na seção 7. Para `e8`
(2034): a introdução de uma linguagem nova no currículo introdutório de computação leva de cinco
a dez anos entre a primeira grande universidade e a maioria; trocar o **tipo de exercício** é
mais fundo que trocar a linguagem.

**R3.** `e9` deriva da raiz por custo: se gerar é barato e a geração é personalizável, a tela
única passa a ser uma escolha de contenção, não um dado. `e10.3` é a retroação: gerar toda vez
tem custo de inferência e de energia, e para função muito usada o cache é mais barato — é o
mesmo mecanismo que fez CDN existir. `e11` é o bloqueador com nome: quem controla a distribuição
não abre mão dela; o que muda é a forma do controle, de catálogo para autorização.

**Classes de referência usadas em R3.** Para `e12` (2040): a planilha eletrônica é a classe certa
e é desconfortável. Desde 1979 ela colocou programação nas mãos de centenas de milhões de
pessoas, e mesmo assim a fração que constrói algo além de fórmula simples ficou estável por
quarenta anos. Programação por usuário final tem um teto que não é técnico. Por isso `e12` foi
rebaixado na seção 7. Para `e11` (2035): entre a App Store (2008) e a regra europeia que a
obrigou a abrir (DMA, 2024) passaram dezesseis anos; a resposta da plataforma a uma ameaça ao
catálogo, porém, é rápida — dois a três anos, como foi com as regras de *sideloading*.

**R4.** `e13` já é observável e por isso sai com confiança alta apesar de ser primeira ordem
recente: há uma classe inteira de produto (Conductor, Vibe Kanban, Claude Squad, Zaivern) que só
existe porque a prática existe. `e15` é o efeito mais forte do mapa e o único com dado
populacional: queda de quase 20% no emprego de 22 a 25 anos desde 2024, medida por Stanford
contra folha de pagamento. `e15.3` é a retroação e fecha o ciclo com R2: a frota só cresce até o
limite de quem responde pela saída — que é exatamente a regra de bolso de três a cinco agentes
que circula hoje entre praticantes.

**Classes de referência usadas em R4.** Para `e15.1.1` (2045): a formação de um sênior leva de
dez a quinze anos; se a coorte de entrada encolhe a partir de 2025, o buraco aparece por volta de
2040 e é agudo em 2045. Para `e16.1` (2038): a responsabilidade técnica assinada em engenharia
civil brasileira existe desde a Lei 5.194/1966 e levou décadas para se consolidar em ART
obrigatória — mas o gatilho aqui não é corporativo, é de seguro, e seguro se move em anos, não
em décadas, depois do primeiro sinistro grande.

### Cobertura por STEEP e por quem perde

- **Social:** `e13.2`, `e15`, `e15.1`, `e12.1`, `e12.1.1`, `e8.1`.
- **Tecnológico:** `e1`, `e5`, `e7`, `e9`, `e10.3`.
- **Econômico:** `e10`, `e10.1`, `e10.1.1`, `e14.2`, `e4.1`, `e1.2`.
- **Ecológico:** só `e10.3` (custo energético de gerar toda vez). **Categoria quase vazia, e isto
  é um achado, não um descuido:** o mapa não encontrou mecanismo pelo qual o ofício de programar
  agêntico produza efeito ambiental de primeira ordem que não passe por consumo de inferência.
  Se alguém encontrar, é um buraco deste mapa.
- **Político/regulatório:** `e2`, `e2.1`, `e6.1.1`, `e11`, `e11.1.1`, `e13.2.1`, `e16`, `e16.1.1`.

**Quem perde**, explicitamente: quem entra na profissão hoje (`e15`); o revisor sênior cujo poder
vinha do portão de merge (`e5.1`); o fornecedor de SaaS de função única (`e10.1`); o designer que
entrega tela (`e3.1.1`); a instituição de ensino que ensina sintaxe rápido (`e8.1.1`, `e15.2`);
a pessoa que não sabe conferir (`e12.1.1`); e o acervo digital, que fica sem objeto (`e10.2.1`).

### Cruzamentos

**Convergência — o achado principal.** Três raízes independentes chegam ao mesmo efeito de
segunda ordem: **a responsabilidade nomeada**. R1 chega por `e2.2` (proveniência auditável exigida
em contrato), R2 chega por `e5.3` (a ausência de leitura vira risco segurável) e R4 chega por
`e16.1` (a figura de quem assina). Quando três mecanismos distintos — conformidade, seguro e
organização do trabalho — apontam para a mesma instituição nova, isso é o sinal mais forte que
uma roda produz. **A profissionalização por assinatura é a aposta central deste mapa**, e não
depende de nenhuma raiz isolada se concretizar.

**Segunda convergência.** `e9.1` (avaliar o gerador, não a saída) e `e5` (provar o sistema, não
ler o código) são o mesmo movimento em dois campos que não se falam — IHC e engenharia de
software. Nos dois, o objeto de avaliação sobe um nível de abstração, de artefato para processo
gerador. Vale nomear: **a avaliação migra do produto para o produtor**.

**Retroalimentação.** `e15` (sem degrau de entrada) → `e15.1.1` (faltam seniores em 2045) →
`e15.3` (a frota não cresce por falta de quem responda) → freia R4. É um ciclo negativo que se
fecha em vinte anos e que o mapa considera o principal limitador da própria disrupção. O ciclo
positivo simétrico é `e1` → `e4` → `e4.1`: quanto mais a spec é o artefato, mais barato trocar de
modelo, mais competição entre fabricantes, mais barato gerar, mais vale guardar a spec.

**Contradição não resolvida.** `e10.2` diz que a manutenção some porque o que quebra é regerado;
`e2.1` diz que software regulado tem de guardar código auditável, e código guardado se mantém.
As duas não podem valer no mesmo objeto. O mapa **não resolve**: o que decide é se o software em
questão entra no escopo do CRA. Se o escopo for interpretado de forma ampla — e a leitura da
Comissão até aqui tem sido ampla, alcançando software autônomo e não só dispositivo conectado —
`e10.2` fica confinado a protótipo, ferramenta interna e mídia; se for estreito, `e2.1` é que
fica confinado. **Segunda contradição:** `e11.1` diz que o poder da plataforma aumenta;
`e10.1.1` diz que o valor migra para quem assume responsabilidade. Se a plataforma autoriza mas
não responde, as duas coexistem; se a autorização implicar responsabilidade, uma das duas cai.

## 6. Sinais fracos e wildcards

### Sinais fracos

**1. Ferramentas para inspecionar o que o agente fez.** `vibe-log` e `claude-tap` são, hoje,
utilitários de curiosidade. **O que mudaria:** se a proveniência virar exigência contratual
(`e2.2`), a auditoria de processo vira mercado, e quem tiver o formato de log vira padrão.
**Sinal observável de crescimento:** a primeira cláusula de contrato corporativo que exija
registro de sessão de agente como entregável, ou a primeira norma técnica (ISO/IEC ou ETSI) que
padronize formato de log de agente.

**2. O protocolo perdendo estado.** A revisão do MCP de 28/07/2026 eliminou sessões, moveu nome
de método para cabeçalho HTTP e tornou listagens cacheáveis. É mudança de encanamento — e é
exatamente o tipo de mudança que precede escala de ordem de magnitude, porque o que ela remove é
o custo de manter conexão aberta por agente. **O que mudaria:** agentes deixam de ser sessões
caras e passam a ser chamadas baratas, o que torna a frota de cem agentes tão viável quanto a de
dez. **Sinal observável:** contagem mediana de agentes simultâneos por desenvolvedor passando de
um dígito.

**3. A especificação como norma pública setorial.** Ainda não existe, mas a Model Spec da OpenAI
— um documento em markdown que alinha engenharia, produto, jurídico e segurança e serve de
âncora de confiança — é o protótipo. **O que mudaria:** se um setor regulado publicar uma spec de
referência mantida por consórcio (`e4.1.1`), o software daquele setor deixa de ser diferenciado
por funcionalidade. **Sinal observável:** o primeiro banco central, tribunal eleitoral ou
agência de saúde a publicar especificação executável de referência, em vez de norma em prosa.

**4. A regra de bolso dos praticantes.** "Só adicione um agente a mais se você consegue revisar a
saída dele" é folclore de ferramenta hoje. **O que mudaria:** ela é a formulação informal de um
limite de capacidade humana que, se for medido, vira norma de saúde ocupacional (`e13.2.1`).
**Sinal observável:** o primeiro estudo controlado publicando o número — quantos processos
assíncronos uma pessoa supervisiona sem degradação medível de julgamento.

**5. O código como 10% a 20% do valor.** A afirmação de Grove é retórica de palestra, e mesmo
assim aparece citada em documentação de ferramenta. **O que mudaria:** se essa proporção entrar
em contrato — pagar pela spec, não pelo código —, o modelo de precificação de serviço de
software inteiro se reescreve. **Sinal observável:** a primeira licitação pública cujo objeto
seja "especificação e suíte de avaliação", com o código como anexo.

### Wildcards

**W1 — Um incidente com morte atribuída a código que ninguém leu.** *Mecanismo:* um agente altera,
sob pressão de prazo, o comportamento de um sistema de saúde, transporte ou energia; o PR é
mesclado sem revisão (a taxa de merge sem revisão já sobe); a falha mata. A investigação não
encontra ninguém que tenha lido a mudança. *Por que é improvável:* software crítico tem camadas
de certificação que ainda exigem humano, e o CRA reforça isso a partir de 2027. *O que faria com
o mapa:* acelera `e16` e `e16.1` em cinco a dez anos e antecipa `e5.2`; a responsabilidade
nomeada deixa de ser tendência e vira lei em dois anos, como aconteceu com a aviação depois de
1996. *Sinal precoce:* o primeiro incidente em que a defesa da empresa em juízo seja "o agente
decidiu" — e o juiz não aceitar. O caso PocketOS é o ensaio sem vítima.

**W2 — Um fabricante de modelo proíbe uso da saída para treinar concorrente e cobra por
paralelismo.** *Mecanismo:* a economia de frota depende de token barato; se o preço passar a ser
por sessão simultânea em vez de por token, dez agentes custam dez vezes mais que hoje mesmo
gerando o mesmo total. *Por que é improvável:* a concorrência entre fabricantes empurra o preço
para baixo, e o padrão aberto de skills reduz o custo de troca (`e4`). *O que faria com o mapa:*
R4 estanca; `e13` e `e14.2` recuam uma década; e o ofício fica no que hoje é: uma pessoa, um
agente, atenção sequencial. *Sinal precoce:* qualquer fabricante grande introduzindo limite ou
tarifa por sessão concorrente no plano profissional.

**W3 — A regeneração se mostra instável e o setor volta a guardar código.** *Mecanismo:* medições
independentes mostram que a mesma spec, com modelos diferentes, produz comportamento
divergente o bastante para quebrar contrato; a spec deixa de ser fonte e vira documentação. *Por
que é improvável:* há forte incentivo comercial na direção contrária, e testes de aceitação
compensam parte da divergência. *O que faria com o mapa:* R1 cai inteira, e com ela `e1`, `e1.2`,
`e4` e `e3`; sobra R2, R3 e R4, que não dependem dela. *Sinal precoce:* exatamente o resultado do
experimento da seção 10 — e é por isso que ele é o experimento.

## 7. Contra o próprio mapa

### Pré-mortem — é 2056 e este mapa se mostrou errado

**Razão 1, a mais provável: a regeneração nunca ficou estável, e o código continuou sendo
guardado.** Todo R1 é uma aposta em determinismo que nada, hoje, mede. Se a mesma especificação
não produz comportamento equivalente com outro modelo, a spec vira documentação — útil, mas não
fonte. *Consequência aplicada:* `e1` rebaixado de `alta` para `media` e empurrado de 2032 para
2034.

**Razão 2: a responsabilidade jurídica chegou antes da capacidade técnica e congelou tudo.**
O CRA em 11/12/2027 trata software como produto; se a interpretação for ampla e o custo de
conformidade alto, o setor faz o que fez com a LGPD e o GDPR — para de inovar na superfície
regulada e empurra a experimentação para fora dela. *Consequência aplicada:* o ramo `e2` ganhou
peso e `e2.1` foi reconhecido como o divisor de águas do mapa; nenhuma confiança foi elevada,
porque a direção é incerta.

**Razão 3: a escassez de julgamento mordeu antes de qualquer transformação de ofício.** Se
`e15.1.1` chegar mais cedo e mais forte, não há quem conduza a frota; o setor não migra para
orquestração, ele encolhe. *Consequência aplicada:* `e14` rebaixado de `media` para `baixa` e
empurrado de 2035 para 2038, e `e15.3` mantido como retroação central.

### Extrapolação linear

`e7` ("mercado de verificação como serviço") é o caso mais claro: é o mercado de teste
terceirizado, maior. Não tinha mecanismo de não-linearidade. *Aplicado:* confiança de `media`
para `baixa`, prazo de 2036 para 2040, e o filho `e7.1` empurrado de 2041 para 2044.
`e14` é o segundo caso: hierarquia organizacional sobreviveu a toda mudança de ferramenta desde
a industrialização, e o mapa não apresentou mecanismo que a derrube. Foi rebaixado, não removido,
porque a fusão IC/gerente tem um mecanismo próprio — as duas funções passam a ter o mesmo
conteúdo, despachar e verificar — que a mera mudança de ferramenta não tem.

### Velocidade de adoção confrontada com a classe de referência

- `e5.2` (prova formal como requisito contratual) exigia adoção mais rápida que a única classe
  disponível: seL4 provado em 2009 e sem difusão em 2026; DO-178C de 2011 sem vazamento para fora
  da aviação. *Aplicado:* 2038 → **2044**, e o filho `e5.2.1` de 2045 → **2050**.
- `e12` (a fronteira usar/programar some) exigia adoção mais rápida que a planilha eletrônica, que
  em quarenta e sete anos não passou de um teto estável de usuários que programam de verdade.
  *Aplicado:* confiança `media` → **baixa**, prazo 2036 → **2040**; `e12.1` 2040 → **2044**;
  `e12.1.1` 2048 → **2052**.
- `e9` (interface montada por pessoa e por momento) tem como classe de referência a interface
  responsiva, que levou cerca de dez anos do artigo de 2010 à obrigatoriedade de fato. *Aplicado:*
  2033 → **2035**.

### A raiz que não acontece

- **Sem R1** (o código continua sendo guardado): sobram R2, R3 e R4 praticamente intactas. A
  revisão continua sendo gargalo, o software continua ficando barato, a frota continua crescendo.
  Perde-se `e1` a `e4` e seus filhos — treze efeitos. **R1 é dispensável.**
- **Sem R2** (a verificação continua humana e dá conta): cai `e5`, `e7` e boa parte de `e6`; mas
  `e15.3` fica **mais** forte, porque o limite humano vira o único freio. R4 sobrevive limitada.
- **Sem R3** (o software continua sendo produto): cai o ramo inteiro `e9`–`e12`, que é o mais
  relevante para o público deste mapa. R1, R2 e R4 não se abalam.
- **Sem R4** (a frota não acontece e cada pessoa conduz um agente): `e13` a `e16` caem, mas `e16`
  ressurge por R2, via `e5.3`. **É o teste que revela a convergência da seção 5:** a
  responsabilidade nomeada aparece por três caminhos, então não é raiz disfarçada — é destino
  comum.

Conclusão do teste: as quatro raízes são independentes o bastante. Nenhuma delas, sozinha,
sustenta mais que um terço do mapa.

### Suposições escondidas

1. **Energia e capacidade de inferência abundantes.** Todo o mapa assume que gerar continua
   barato. Se o preço de inferência subir por escassez de energia ou de silício, `e10.3` deixa de
   ser retroação lateral e vira o efeito dominante — e W2 se realiza sem que nenhum fabricante
   decida nada.
2. **Os modelos continuam acessíveis por API a terceiros.** Se a capacidade de fronteira ficar
   restrita a quem a treina, R4 vira privilégio de poucas empresas e o mapa inteiro se torna um
   mapa de concentração, não de transformação de ofício.
3. **O padrão aberto continua aberto.** SKILL.md e MCP são hoje abertos e governados fora do
   fabricante original. `e4` depende disso; se fechar, o custo de troca volta e `e4.1` se inverte.
4. **Não há descontinuidade civilizatória em trinta anos.** Assumido, e não justificado.
5. **Regulação estável em direção.** O mapa assume que o CRA entra em vigor como previsto e que o
   PL 2338 é aprovado em alguma forma. As duas são apostas institucionais, não técnicas.

### Viés do autor

Dois efeitos estão neste mapa porque o autor gosta do tema, e é preciso dizer qual é qual.
**Primeiro:** havia um efeito de terceira ordem — "o histórico do projeto vira histórico de
intenção, e a arqueologia de software fica respondível pela primeira vez" — que é uma projeção
direta da prática pessoal do autor de registrar decisões em texto. Ele **falha no teste da causa
solta**: aconteceria igual por qualquer disciplina de documentação forçada, sem precisar desta
raiz. *Removido, e depositado na seção 12.* **Segundo:** `e8` (a mudança do exercício
introdutório) é o efeito que um professor de computação quer que aconteça. Foi mantido porque tem
mecanismo e ator nomeáveis, mas fica registrado que sua confiança `media` é generosa.

Um terceiro viés, de sinal contrário: o autor conduz frotas de agente diariamente e portanto
**superestima a naturalidade de `e13`**. A confiança `alta` ali se justifica por haver classe
inteira de produto no mercado, não por experiência pessoal — mas a distinção é fina.

### Calibração

Distribuição final, conferida contra o verificador na seção 12: primeira ordem com 3 altas, 10
médias e 3 baixas; segunda ordem com 0 alta, 23 médias e 11 baixas; terceira ordem com 0 alta, 2
médias e 25 baixas. A confiança cai com a ordem, como tem de cair. Os dois casos de `media` na
terceira ordem são `e13.1.1` (o mercado de IDE se reorganizar em torno de supervisão — já há
produto) e `e15.1.1` (a falta de seniores em 2045 — é aritmética demográfica, não previsão de
comportamento).

Sobre prazo e horizonte: **nenhum efeito ultrapassa 2056**; o mais distante é `e12.1.1`, em 2052.
Com trinta anos de janela, o risco deste mapa é o oposto do usual — não é estourar o horizonte, é
concentrar tudo nas duas primeiras décadas e deixar a terceira vazia. Isso está assumido: o mapa
sustenta que a transição de ofício se resolve até meados dos anos 2040 e que a década de 2050 é
consolidação, não ruptura. Se essa leitura estiver errada, o erro é de omissão, e ele aparece
como a quarta razão do pré-mortem que não foi escrita.

### Registro de alterações

| id | antes | depois | por quê |
|---|---|---|---|
| `e1` | confianca alta · prazo 2032 | confianca **media** · prazo **2034** | Razão 1 do pré-mortem: a regeneração determinística não está medida em lugar nenhum. |
| `e1.1.2` | presente (3ª ordem, R1) | **removido**, vai para a seção 12 | Falha no teste da causa solta e é o efeito do viés do autor. |
| `e5.2` | prazo 2038 | prazo **2044** | Classe de referência: seL4 provado em 2009, sem difusão em 2026. |
| `e5.2.1` | prazo 2045 | prazo **2050** | Consequência do anterior. |
| `e5.3` | confianca media | confianca **baixa** | Não há caso de apólice que precifique regime de verificação; é inferência pura. |
| `e7` | confianca media · prazo 2036 | confianca **baixa** · prazo **2040** | Extrapolação linear do mercado de teste, sem mecanismo de não-linearidade. |
| `e7.1` | prazo 2041 | prazo **2044** | Consequência do anterior. |
| `e9` | prazo 2033 | prazo **2035** | Classe de referência: interface responsiva levou ~10 anos do artigo à prática obrigatória. |
| `e9.2` | confianca media | confianca **baixa** | Provar acessibilidade em toda saída de gerador não tem nem demo; é aspiração. |
| `e10.1.1` | confianca media | confianca **baixa** | Terceira ordem apoiada em movimento de mercado de doze meses; cedo demais para média. |
| `e12` | confianca media · prazo 2036 | confianca **baixa** · prazo **2040** | Classe de referência: a planilha eletrônica tem teto estável há quarenta e sete anos. |
| `e12.1` | prazo 2040 | prazo **2044** | Consequência do anterior. |
| `e12.1.1` | prazo 2048 | prazo **2052** | Consequência do anterior. |
| `e13.2` | confianca media | confianca **baixa** | Fadiga de decisão em supervisão de frota não tem medição publicada. |
| `e14` | confianca media · prazo 2035 | confianca **baixa** · prazo **2038** | Extrapolação linear; a hierarquia sobreviveu a toda mudança de ferramenta anterior. |
| `e14.1` | prazo 2040 | prazo **2043** | Consequência do anterior. |
| `e14.1.1` | prazo 2046 | prazo **2050** | Consequência do anterior. |
| `e16.1` | confianca media | confianca **baixa** | A ART da engenharia civil levou décadas; o gatilho por seguro é hipótese, não observação. |

Cota do §6 cumprida em todas as raízes: R1 teve `e1` rebaixado e `e1.1.2` removido; R2 teve `e7`,
`e5.2` e `e5.3`; R3 teve `e12`, `e9`, `e9.2` e `e10.1.1`; R4 teve `e14`, `e13.2` e `e16.1`.
A bateria derrubou dezoito linhas, uma delas por remoção.

## 8. O que a máquina errou

1. **Atribuí a um texto uma afirmação que ele não contém.** Um resumo de busca atribuiu ao ensaio
   *Malleable Software Reshapes the World* (tals.substack.com) a divisão de Sean Grove entre 10%
   de interfaces fixas, 40% conversacionais e 50% geradas na hora. Abri o ensaio: **ele não
   menciona Grove nem Conjure**. Depois abri o texto de *ephemeral user interfaces* do getlundy:
   também não menciona. A origem do 10/40/50 é, aparentemente, um post do Grove no X em março de
   2023, que não consegui abrir. **Por isso o número não aparece em nenhum efeito deste mapa** —
   só a tese qualitativa da geração no ponto de uso, que os dois textos sustentam. Se este mapa
   fosse produzido sem abrir as fontes, o 10/40/50 teria entrado como se fosse dado.

2. **Repeti uma contagem desatualizada até abrir o repositório.** Vários agregadores dizem que o
   `spec-kit` tem 107 mil estrelas. Ao abrir o GitHub, são ~135,8 mil. A diferença não muda
   nenhuma conclusão, mas mostra o padrão: o número que circula em texto de terceiro é sempre o
   de alguns meses atrás, e num tema que se move em semanas isso é erro de ordem prática.

3. **Datas conflitantes sobre o mesmo dado, que eu quase somei.** Sobre a queda de emprego de
   jovens desenvolvedores, algumas fontes dizem "quase 20% desde 2022" e outras "quase 20% desde
   2024". Abri a página do AI Index de Stanford: é **desde 2024**. As duas versões estavam nos
   meus resultados de busca ao mesmo tempo, e usar a de 2022 teria feito o efeito `e15` parecer
   mais lento do que é.

4. **Citei um número que não abri, e o marquei.** Os 41% de organizações com MCP em produção vêm
   do relatório Stacklok 2026 via agregador; **não abri o original**. Está na seção 3 com a
   ressalva explícita, e nenhum efeito depende dele. Se dependesse, teria de sair.

5. **Uma fonte que li não pode ser verificada por script.** A análise do CRA da UC Berkeley Law
   foi lida e é a melhor peça que encontrei sobre software virar objeto de responsabilidade de
   produto — mas o servidor devolve HTTP 403 a requisição automatizada. Está na seção 12, não na
   11, e a afirmação que ela sustentava foi reancorada na página oficial da Comissão Europeia e
   no material do Open Regulatory Compliance Working Group, que respondem.

6. **Um efeito plausível cujo mecanismo é fraco, e eu o mantive assim mesmo.** `e6.2` ("produtos
   competem por auditável como hoje competem por privado") soa bem e tem uma analogia boa, mas a
   analogia é o mecanismo inteiro — não há caso de produto vendendo auditabilidade a usuário
   final. Fica com confiança `media` porque a pressão regulatória a sustenta pelo lado de baixo,
   mas é o efeito deste mapa em que eu menos apostaria.

7. **Não consegui extrair o dado brasileiro que este mapa mais precisava.** A pesquisa do Código
   Fonte TV tem 17.046 respondentes e uma seção sobre IA generativa; a página renderiza tudo como
   0%. Está declarado na seção 3 como "sem número brasileiro confiável", e não inventei
   substituto — mas é uma lacuna real, e o recorte Brasil deste mapa é institucional em vez de
   quantitativo por causa dela.

## 9. Três cenários para 2056

**Provável.** Programar, em 2056, é escrever a regra e responder por ela. O código existe — roda
mais software do que nunca — mas quase ninguém o lê, e ler código é uma especialidade forense,
como hoje é a perícia contábil. O repositório de uma empresa é um conjunto de especificações
executáveis, suítes de avaliação e registros de proveniência; o código é o que sai do build.
Existem duas profissões onde havia uma: quem trabalha no software regulado, que guarda tudo,
assina embaixo e ganha bem por isso, e quem trabalha no software efêmero, que gera, usa e
descarta. A entrada na carreira passa por residência, não por estágio, porque não sobrou tarefa
pequena; e há menos gente, mais velha e mais cara, do que havia em 2026. A frota é rotina — dez a
trinta processos por pessoa — e o painel de supervisão substituiu o editor de texto como a
ferramenta que se aprende primeiro. A verificação formal não venceu: cobre infraestrutura crítica
e falha no resto, onde o que se usa é teste gerado, execução em ambiente restrito e uma cadeia de
responsabilidade que termina numa pessoa com nome. *Sinal precoce de que estamos entrando aqui:*
a primeira grande empresa a exigir, em contrato de fornecimento, a especificação e a suíte de
avaliação como entregáveis, com o código listado como anexo.

**Desejável.** O mesmo cenário, com três coisas que não vieram de graça. A primeira: a formação
foi reconstruída a tempo — as escolas trocaram o exercício de escrever a função pelo de enunciar
o que tem de valer e ler o contraexemplo, e criaram residências financiadas, porque alguém
percebeu por volta de 2032 que a coorte que não entra hoje é a que falta em 2045. A segunda: a
proveniência virou norma técnica aberta em vez de produto proprietário, de modo que auditar o que
um agente fez não depende de comprar do fabricante do agente. A terceira, a que mais importa
para quem projeta interação: a geração no ponto de uso ficou obrigada a provar acessibilidade em
toda saída, o que fez desaparecer a "versão acessível" como categoria separada — pela primeira
vez desde que existe interface gráfica, o padrão passou a ser adaptado à pessoa em vez de médio.
*Sinal precoce:* um consórcio setorial publicando especificação de referência executável e
pública, mantida como se mantém norma técnica.

**Indesejável.** A responsabilidade nunca foi nomeada. O software continuou barato e abundante,
ninguém leu nada, e a conta foi paga em falhas distribuídas: sistemas que degradam sem que
ninguém saiba por quê, porque a spec que os gerou se perdeu e o modelo que a executou foi
descontinuado. A preservação digital fracassou — não há binário, não há código, e o modelo não é
reexecutável, então a década de 2030 é um vazio documental. A distribuição, que parecia estar se
abrindo, fechou mais: como todo software gerado precisa de autorização para rodar, duas ou três
plataformas passaram a decidir o que pode existir, com muito mais granularidade do que uma loja
de aplicativos jamais teve. E a desigualdade que o acesso ao dispositivo havia começado a fechar
reabriu na competência de conferir: quem sabe checar a saída manda, quem não sabe aceita — e, no
Brasil, isso mapeia sobre a escola pública com precisão desconfortável. *Sinal precoce:* a
proporção de PRs mesclados sem nenhuma revisão, humana ou automatizada, continuar subindo por
mais três anos sem que nenhuma norma, contrato ou apólice reaja.

## 10. O experimento

**Bancada de regeneração.**

**O que é.** Uma bancada que pega **uma especificação executável** — pequena, mas real: um
componente de interface com estado, digamos um reprodutor de mídia com fila, ou um formulário com
validação e recuperação de erro — e a executa com **três agentes diferentes** (por exemplo Claude
Code, Codex e um agente aberto como OpenCode), três vezes cada, em ambientes limpos. Depois mede
duas coisas: **a divergência entre as nove saídas** (comportamento observável contra uma suíte de
aceitação escrita antes; tamanho e estrutura do código; escolhas de dependência) e **quanto disso
um humano consegue verificar em quinze minutos** — a mesma pessoa, cronometrada, dizendo ao final
se aceitaria fazer merge e por quê.

**Que pergunta sobre o futuro ele responde.** A pergunta de que R1 inteira depende, e que nenhuma
fonte aberta nesta rodada responde: **a especificação é fonte ou é documentação?** Se as nove
saídas passam na suíte e divergem só em estrutura, o código é mesmo descartável e o mapa está no
caminho. Se divergem em comportamento não coberto pela suíte — e é aí que mora a resposta —, a
especificação não é fonte, é uma sugestão bem escrita, e a `confianca: media` de `e1` está
generosa. A segunda pergunta, embutida no cronômetro, é a de R2 e R4 juntas: **qual é a taxa de
verificação de um humano?** É esse número que decide quantos agentes uma pessoa pode conduzir, e
ele é o freio de `e15.3`.

**Que tecnologia emergente usa, e por que não dá com a madura.** Usa três coisas que não
existiam em produto há cinco anos: agentes que sustentam sessão longa com ferramentas e alteram
múltiplos arquivos; a camada de instrução empacotada (SKILL.md, `spec-kit`) que torna a mesma
especificação portátil entre fabricantes; e isolamento barato por *worktree*, que permite as nove
execuções em paralelo na mesma máquina. Com tecnologia madura — autocompletar de IDE, gerador de
scaffold, template — a pergunta nem se formula: o template é determinístico por construção, então
não há divergência a medir. **A divergência só existe porque o gerador é não determinístico, e é
exatamente ela o objeto.**

**O que a turma faz quando testar em sala.** Cada dupla recebe as nove saídas **sem saber qual
agente produziu qual** e tem quinze minutos cronometrados para decidir se faz merge. Ao final,
compara-se: (a) quantas duplas aceitaram uma saída que a suíte reprova; (b) quantas recusaram uma
que a suíte aprova; (c) o que elas olharam nos quinze minutos — e é aqui que a aula acontece,
porque quase ninguém vai ler o código, quase todo mundo vai rodar a suíte, e a discussão passa a
ser sobre o que a suíte não cobre. Depois, a turma escreve **uma cláusula a mais** na
especificação para eliminar a divergência que mais incomodou, e a bancada roda de novo. O
segundo turno mede se especificar mais reduz a divergência ou só a desloca.

**O resultado que faria o autor mudar de ideia.** Dois, em direções opostas. **Se as nove saídas
passarem na suíte e nenhuma dupla conseguir distinguir qual agente gerou qual em quinze minutos**,
então a regeneração é estável o bastante, `e1` merece confiança `alta`, `e5` deve ser antecipado
e a razão 1 do pré-mortem cai. **Se, ao contrário, escrever mais especificação não reduzir a
divergência — se o segundo turno divergir tanto quanto o primeiro** —, então a especificação não
converge para comportamento, R1 cai inteira e o wildcard W3 vira o cenário provável. Um resultado
intermediário e chato — divergência que cai com mais especificação, mas nunca zera — confirma o
mapa como está, com a spec sendo fonte para o que ela cobre e o código continuando a ser guardado
para o resto. É o desfecho mais provável e o menos interessante, e é preciso dizer isso antes de
rodar, para não ler o resultado morno como vitória.

## 11. Fontes

1. `https://blog.jetbrains.com/research/2026/08/ai-coding-agent-adoption-2026/` — JetBrains,
   *AI Coding Agents: Adoption Trends*, agosto de 2026. Sustenta os 90% de uso semanal, 68%
   diário e a repartição por ferramenta (Claude Code 39%, Copilot 21%, Cursor 12%, Codex 16%,
   OpenCode 7%). **É o dado que recusa o agente de código como raiz.** Confiabilidade alta para
   tendência: 15.000+ respondentes, décima edição, metodologia de reponderação declarada; viés
   possível de amostra inclinada a usuários de IDE JetBrains, o que o próprio relatório admite ao
   descrever a reponderação.
2. `https://blog.jetbrains.com/research/2026/08/how-much-code-do-developers-really-let-agents-write/`
   — JetBrains, agosto de 2026. Sustenta os ~47% de código gerado por agente, os três segmentos
   (31% agênticos, 47% assistidos, 23% manuais) e a variação regional. Mesma pesquisa, mesmas
   ressalvas; é autorrelato de proporção de código, que costuma ser mal estimado por quem
   responde.
3. `https://www.gitclear.com/the_ai_code_quality_maintainability_gap` — GitClear, *The
   Maintainability Gap*, 2026. Sustenta duplicação +81%, churn +15%, refatoração −70%, reuso
   −35%, sobre 623 milhões de mudanças de 2023 a 2026. Confiabilidade alta para a medição, média
   para a causalidade: a empresa vende análise de qualidade de código, e correlação com adoção de
   IA não é atribuição.
4. `https://arxiv.org/abs/2607.07980` — Agarwal, Miller, Kästner e Vasilescu, *3100 Opinions on
   Code Review in an AI World*, julho de 2026. Sustenta que PRs de agente são revisados menos,
   mesclados mais rápido e discutidos menos, e a tese de que a revisão é o ponto de controle.
   Confiabilidade alta e honestidade rara: os próprios autores registram que a direção das
   tendências inverte sob escolhas de análise defensáveis. Pré-print, sem revisão por pares.
5. `https://arxiv.org/abs/2605.01160` — Farrag, *The Productivity-Reliability Paradox*, maio de
   2026. Sustenta 98% mais PRs contra 91% mais tempo de revisão, o RCT com 19% de lentidão, e a
   tese de que disciplina de especificação — e não capacidade do modelo — é a restrição.
   Revisão multivocal de 67 fontes; pré-print de autor único, sem revisão por pares.
6. `https://www.theregister.com/2026/04/27/cursoropus_agent_snuffs_out_pocketos/` — *The
   Register*, abril de 2026. Sustenta o incidente PocketOS: agente apagou banco e backups em nove
   segundos, token irrestrito em arquivo alheio à tarefa, restauração pelo CEO da Railway.
   Confiabilidade alta para o relato factual; a atribuição de culpa é declaração do fundador da
   empresa afetada, e o texto marca isso.
7. `https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act` — Comissão Europeia.
   Sustenta as datas do CRA (vigor 10/12/2024, reporte 11/09/2026, obrigações plenas 11/12/2027),
   o escopo de hardware e software conectáveis e a marcação CE. Fonte primária.
8. `https://orcwg.org/cra/` — Open Regulatory Compliance Working Group. Sustenta o tratamento de
   software livre pelo CRA (mantenedor que monetiza, *steward*), as datas de normas harmonizadas
   e a proporção de dependências abertas. Confiabilidade alta para leitura da norma; é grupo de
   interesse da comunidade aberta, com viés declarado a favor dela.
9. `https://www25.senado.leg.br/web/atividade/materias/-/materia/157233` — Senado Federal,
   PL 2338/2023. Sustenta a tramitação: aprovado no Senado em 26/12/2024, remetido à Câmara em
   17/03/2025, autoria de Rodrigo Pacheco. Fonte primária; nada diz sobre o que a Câmara fará.
10. `https://pesquisa.codigofonte.com.br/2026` — Código Fonte TV, Pesquisa Salarial de
    Programadores 2026, 17.046 respondentes entre 23/02 e 09/06/2026. **Aberta e não utilizável:**
    os percentuais da seção de IA renderizam como 0%. Entra como registro da lacuna brasileira,
    não como evidência. Amostra autosselecionada de audiência de canal, o que já limitaria a
    generalização.
11. `https://github.com/github/spec-kit` — GitHub. Sustenta ~135,8 mil estrelas, versão 1.0.0 e a
    formulação de que especificações são executáveis e geram a implementação em vez de guiá-la.
    Fonte primária; é material de divulgação do próprio projeto, então a alegação de eficácia não
    vale como evidência — só a existência e a escala de atenção.
12. `https://blog.modelcontextprotocol.io/posts/2026-07-28/` — Model Context Protocol, revisão de
    28/07/2026. Sustenta a passagem a protocolo sem estado, roteamento por cabeçalho, listagens
    cacheáveis, e quase meio bilhão de downloads mensais nos SDKs de primeira linha. Fonte
    primária; números de download são do próprio ecossistema.
13. `https://lawwu.github.io/transcripts/8rABwKRsec4.html` — transcrição de *The New Code*, Sean
    Grove (OpenAI). Sustenta a tese de código como projeção com perda da especificação e a
    afirmação dos "10% a 20% do valor". Transcrição de terceiro de uma palestra; **é retórica de
    palestra, não medição**, e o mapa a usa como posição de ator relevante, não como dado.
14. `https://hai.stanford.edu/ai-index/2026-ai-index-report/economy` — Stanford HAI, AI Index
    2026, capítulo de economia. Sustenta a queda de quase 20% no emprego de desenvolvedores de 22
    a 25 anos **desde 2024**, os 88% de adoção organizacional e os 26% de ganho em
    desenvolvimento. Confiabilidade alta; o próprio relatório não atribui a queda exclusivamente
    à IA.
15. `https://addyosmani.com/blog/code-agent-orchestra/` — Addy Osmani. Sustenta a prática de
    frota: 3 a 5 agentes como ponto ótimo, orçamento de token por agente, travamento de arquivo,
    e a formulação de que o gargalo é verificação. Blog de praticante reconhecido; é experiência
    relatada, não estudo.
16. `https://tals.substack.com/p/malleable-software-reshapes-the-world` — ensaio sobre software
    maleável. Sustenta a tese de que a fronteira usuário/desenvolvedor se dissolve, com Roblox e
    TikTok como classes de referência de criação em massa. Ensaio de opinião de investidor, com
    viés otimista evidente; usado só para a tese qualitativa. **Não contém** a divisão 10/40/50
    que agregadores lhe atribuem — ver seção 8.
17. `https://www.getlundy.io/post/the-rise-of-ephemeral-user-interfaces` — outubro de 2025.
    Sustenta a linhagem acadêmica das *ephemeral user interfaces* (Döring, Sylvester e Schmidt,
    2013) e a formulação do problema. Post de empresa, sem dado próprio; vale pela referência
    acadêmica que aponta.

## 12. Anexo — o levantamento bruto

### 12.1 Saída do verificador

Comando rodado em 12/09/2026, da pasta desta rodada:

```
python3 /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/futurizacao-giordano/references/verificar.py \
  tendencia-programacao-agentica-o-desenvolvedor-vira-orquestrador.md --links
```

Saída inteira, sem edição:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 16 (frontmatter diz 16)
efeitos ordem 2: 34 (frontmatter diz 34)
efeitos ordem 3: 27 (frontmatter diz 27)
prazo > horizonte (2056) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 3 · media 10 · baixa 3
confiança ordem 2: alta 0 · media 23 · baixa 11
confiança ordem 3: alta 0 · media 2 · baixa 25
links da seção 11: 17/17 respondem (frontmatter diz fontes: 17)
RESULTADO: ok
```

Leitura dos números. As quatro contagens do frontmatter batem com as reais (4 raízes, 16 / 34 /
27 efeitos). Nenhum prazo ultrapassa o horizonte, nem na terceira ordem — comentado na seção 7
como característica desta rodada, não como acerto. A confiança cai com a ordem em `alta`
(3 → 0 → 0) e sobe em `baixa` (3 → 11 → 25), que é a direção exigida pelo §3.6. Os 17 links da
seção 11 respondem; numa execução anterior, `gitclear.com` devolveu falha e voltou a responder
logo em seguida, o que sugere limitação de taxa e não link morto — registrado para quem repetir
a checagem.

### 12.2 Premissas assumidas nesta rodada

O `briefing:` recebido cobriu modo, tema, slug, autor, zona de interesse, horizonte, público,
recorte, descarte, disrupção suspeita, viés, falseador, profundidade e busca na web — ou seja,
substituiu a entrevista do §0 sem rebaixamento de confiança. **O que ele não cobriu e foi
assumido**, declarado aqui e na seção 2:

| Item não coberto | O que assumi | Por quê |
|---|---|---|
| Data do documento | 12/09/2026 | data da rodada |
| `publico_ok` | `false` | padrão do formato da disciplina |
| Tamanho do mapa | 4 raízes, 16 efeitos de 1ª ordem | o §3 pede 3 a 6 por raiz; com trinta anos de janela, quatro raízes cobrem sem diluir |
| Energia, silício e acesso a modelo | continuam disponíveis | declarado como suposição escondida na seção 7 |
| Estabilidade institucional | CRA entra em vigor como previsto; PL 2338 é apreciado | idem |
| Nota Brasil | institucional em vez de quantitativa | não achei número brasileiro de adoção de agente que pudesse abrir |

### 12.3 Efeitos cortados no §6

**`e1.1.2` — "O histórico do projeto vira histórico de intenção, e a arqueologia de software (por
que isto está aqui?) fica respondível pela primeira vez."** Era terceira ordem sob `e1.1`, com
sinal fraco, prazo 2040 e confiança baixa. **Removido por duas falhas simultâneas.** A primeira é
o teste da causa solta do §3.10: se eu removo a raiz R1 e imagino uma organização que
simplesmente adota disciplina de registrar decisão em texto — coisa que existe desde os ADRs de
2011 —, o efeito acontece igual, sem precisar de agente, de spec executável ou de descarte de
código. A segunda é o teste de viés do §6.6: é a projeção direta de uma prática pessoal do autor,
que mantém um protocolo de decantação de decisões, e portanto é o efeito que ele mais quer que
seja verdade. Fica aqui registrado porque não é falso — é só mal atribuído. Se alguém quiser
reaproveitá-lo, o pai correto é uma raiz sobre disciplina documental, que este mapa não tem.

### 12.4 Efeitos redigidos e descartados antes de entrar na roda

Estes nunca chegaram ao bloco YAML. Ficam registrados para que a próxima rodada não os redescubra
e para que a aula possa discutir por que caíram.

1. **"Plataformas de mídia passam a gerar o reprodutor sob medida para cada peça de conteúdo."**
   Descartado por falhar no **teste de especificidade** do §3.3: troque a raiz "software vira
   artefato de uso único" por "modelos multimodais rodando no dispositivo" e a frase continua
   servindo. Efeito que serve a duas raízes diferentes não pertence a nenhuma.
2. **"Cursos de graduação reorganizam o currículo para a era dos agentes."** Descartado por ser
   literalmente um dos quatro efeitos proibidos do §3 — genérico, sem ator nomeado, serve para
   qualquer tema do catálogo. Foi reescrito como `e8`, com o objeto nomeado (o exercício
   introdutório de programação, "escreva a função" trocado por "enuncie o que tem de valer e leia
   o contraexemplo") e mecanismo próprio.
3. **"Reguladores criam uma categoria jurídica nova para software gerado por IA."** Mesmo motivo.
   Reescrito como `e2` — regulador nomeado (Comissão Europeia), instrumento nomeado (CRA),
   data (11/12/2027) e mecanismo (a documentação técnica exigida do produto não é satisfeita por
   uma especificação).
4. **"Surge a profissão de orquestrador de agentes."** Proibido pelo §3 e, pior, é o nome do tema
   travestido de achado. O conteúdo real dele está distribuído em `e13` (o trabalho vira despacho),
   `e14` (IC e gerente se fundem) e `e16.1` (a figura de quem assina) — três efeitos com ator e
   mecanismo, em vez de um rótulo.
5. **"O emprego em tecnologia cai."** Descartado por falta de mecanismo específico e por
   contrariar parte da evidência: o AI Index mede queda concentrada na faixa de 22 a 25 anos com
   crescimento nas coortes mais velhas, e dados brasileiros de 2026 indicam emprego de
   desenvolvedores ~4% maior que em 2025. O efeito honesto não é "cai", é "perde o degrau de
   entrada" — que é `e15`.
6. **"A dívida técnica explode."** Descartado como extrapolação linear pura. O que sobreviveu foi
   `e1.3`: a dívida não explode, ela **muda de lugar** — sai do código, que ninguém lê, e vai
   para a ambiguidade acumulada na especificação, que é o único artefato que alguém ainda lê.
7. **"O software abre mão de interface e tudo vira conversa."** Descartado por contrariar a
   própria literatura que o sustentaria: a tese da interface efêmera prevê convivência de
   interface fixa, conversa e geração sob demanda, não substituição. E a versão forte já é, em
   parte, produto de massa — portanto maduro pela régua da disciplina.

### 12.5 Buscas que não deram em nada

- **Número brasileiro de adoção de agente de código.** Buscas em português sobre adoção de IA por
  desenvolvedores no Brasil devolveram matéria de mercado (déficit da Brasscom, tamanho do setor,
  salário) e uma pesquisa com amostra grande — 17.046 respondentes do Código Fonte TV — cuja
  página renderiza os percentuais como 0%. **Não há, nesta rodada, número brasileiro utilizável.**
  A próxima rodada deveria tentar a API ou o dataset bruto da pesquisa, se houver, ou a edição do
  Stack Overflow Survey com corte por país.
- **Currículo de computação sendo redesenhado por causa de agentes.** Procurei mudança
  documentada em disciplina introdutória — CS50, CMU, MIT. Achei disciplinas *sobre* agentes
  (11-768 na CMU, CSCI 7000-05 em Colorado) e o uso de IA como monitoria no CS50 desde 2023, mas
  **nenhuma reforma documentada do exercício introdutório**. Por isso `e8` tem sinal `fraco`: não
  há artefato, só pressão.
- **Origem primária do 10/40/50 de Sean Grove.** Rastreada até um post no X de março de 2023,
  que não abriu. Os dois textos que agregadores apontavam como fonte não o contêm. Descrito na
  seção 8; o número não foi usado.
- **Relatório Stacklok 2026 com os 41% de MCP em produção.** Só encontrei citações de segunda
  mão. O número está na seção 3 marcado como não verificado e nenhum efeito depende dele.
- **Terminal-Bench como medida da curva de capacidade.** O tema sugeria usá-lo junto com
  SWE-bench. As buscas devolveram sobretudo agregadores de leaderboard, e o quadro que emergiu —
  SWE-bench Verified saturado, com os cinco primeiros dentro de quatro pontos e o ranking real
  migrando para SWE-bench Pro — foi lido em agregadores, **não em fonte primária**. Por isso
  nenhum número de benchmark entrou em efeito nenhum: a saturação é interessante, mas não
  sustenta prazo.
- **Caso de seguradora precificando regime de verificação de software.** Nada. É a razão de
  `e5.3` ter sido rebaixado para confiança `baixa` no §6.
- **Estudo controlado sobre quantos processos assíncronos uma pessoa supervisiona.** Nada além de
  folclore de praticante (o "3 a 5 agentes"). É a razão de `e13.2` ter sido rebaixado.

### 12.6 Fonte lida que não passa na verificação automática

`https://www.law.berkeley.edu/research/bclt/bclt-legal-analysis/how-the-eu-cyber-resilience-act-transforms-cybersecurity-into-product-liability-law/`
— UC Berkeley Law, análise de Chris Hoofnagle sobre o CRA. **Foi lida** e é a peça mais clara
sobre a mudança de fundo: o CRA "torna todos os dispositivos de internet das coisas e mesmo
software autônomo sujeitos a um regime jurídico com sabor de responsabilidade de produto", com
cadeia de responsabilidade entre fabricante, importador e distribuidor, ciclo de suporte padrão
de cinco anos e notificação em 24 horas à ENISA. **Não está na seção 11** porque o servidor
devolve HTTP 403 a requisição automatizada, o que faria o verificador reportar link quebrado. As
afirmações que ela sustentava foram reancoradas nas fontes 7 e 8. Registrado aqui para que a
leitura não se perca.

### 12.7 O que este mapa deliberadamente não tratou, por ser de outro tema

A disciplina divide o assunto em três temas vizinhos, e esta rodada respeitou a divisão.
**Ficaram de fora, por pertencerem ao tema 2 (contenção, segurança e identidade de agentes):** o
desenho de sandbox e de permissão, a identidade criptográfica do agente, o problema do agente com
credencial ampla — o incidente PocketOS entrou aqui apenas como evidência de que a revisão
falhou, não como caso de segurança. **Ficaram de fora, por pertencerem ao tema 3 (memória,
observabilidade e avaliação):** o desenho de memória de longo prazo do agente, a instrumentação
de sessão e as metodologias de avaliação de modelo. Onde os temas encostam — `e2.2` (proveniência
auditável) e `e9.1` (avaliar o gerador em vez da saída) — o mapa registra a fronteira em vez de
atravessá-la, e esses dois efeitos são os candidatos naturais a convergência com os mapas dos
temas 2 e 3 quando a turma cruzar os blocos `roda:`.

### 12.8 Contagem bruta da rodada

- Buscas na web: 16 (dez em inglês, duas em português, quatro mistas).
- Páginas efetivamente abertas e lidas: 18.
- Páginas listadas como fonte na seção 11: 17. Lidas e não listadas: 1 (item 12.6).
- Números encontrados em agregador e **não** usados por falta de fonte primária: 3 (os 41% de MCP
  em produção — usado com ressalva explícita; a divisão 10/40/50 de Grove — descartada; a queda
  de 67% em vagas de nível de entrada — descartada, porque a mesma busca trazia versões
  incompatíveis do mesmo indicador e o AI Index dá o número populacional, que é mais defensável).
- Efeitos redigidos: 78. Efeitos na roda final: 77. Removidos no §6: 1. Descartados antes de
  entrar: 7 (item 12.4).
- Linhas alteradas pela bateria do §6: 18, sobre 15 efeitos distintos.
