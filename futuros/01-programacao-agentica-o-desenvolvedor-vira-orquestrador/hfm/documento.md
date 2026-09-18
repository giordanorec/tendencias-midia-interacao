---
tema: "Programação agêntica: o desenvolvedor vira orquestrador"
slug: programacao-agentica-o-desenvolvedor-vira-orquestrador
autor_login: hfm
zona_de_interesse: Agentes
data: 2026-09-18
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 12
efeitos_ordem_3: 15
tecnologias_citadas: [Claude Code, Codex CLI, Cursor, Cline, Aider, OpenCode, GitHub Copilot CLI, Gemini CLI, Hermes Agent, OpenHands, Junie, Goose, Kiro, Amp, Factory, Roo Code, Model Context Protocol, Agent Skills, MCP Bundles, SWE-bench Verified, Terminal-Bench, Harbor, Harness-of-Harness, GitHub Spec Kit, OpenSpec, BMAD, GSD, git worktrees]
fontes: 19
confianca: media
experimento: Bancada de orquestração — três agentes resolvem a mesma tarefa em worktrees isolados e a turma decide qual entra, lendo evidência de execução em vez do diff
skill_usada: futurizacao-hfm
publico_ok: false
---

## 1. Resumo

Escrever código deixou de ser o gargalo, e a evidência de 2025–2026 sustenta isso em três frentes
que não se confundem: o agente fecha sozinho o laço ler–planejar–editar–executar–testar–abrir PR;
a instrução que governa esse agente virou artefato versionado, com formato aberto, registry e
superfície de ataque própria; e a responsabilidade pelo resultado descolou-se da autoria, porque a
regulação europeia não distingue código escrito por pessoa de código gerado por agente. Os números
disponíveis são assimétricos de um jeito revelador: a adoção de assistentes é quase universal
(84% dos desenvolvedores usam ou pretendem usar) enquanto a adoção de *agentes* ainda não é
(30,9% usam no trabalho, 38% sem planos), e a confiança na saída caiu em vez de subir. O volume
merged no GitHub cresceu 29% no ano, e a revisão humana não cresceu junto. Daí decorre a tese deste
mapa: até 2031 a escassez migra da produção para a verificação e para a atenção de quem verifica —
o cargo que aparece não é o de quem escreve mais rápido, é o de quem consegue dizer, com evidência,
que aquilo pode entrar. Para quem projeta mídia e interação isso muda o objeto de trabalho: o
protótipo deixa de ser a tela e passa a ser o produto inteiro, e a interface que precisa de projeto
é a do humano supervisionando muitas execuções paralelas que ele não leu.

## 2. O tema

**Programação agêntica** é o regime em que um modelo de linguagem opera um repositório com
ferramentas — lê arquivos, planeja, edita vários deles, roda testes, interpreta a falha, corrige e
abre um pull request — sustentando isso por sessões longas sem que um humano intervenha a cada
passo. A diferença em relação ao autocompletar de IDE não é de grau. O autocompletar propõe um
trecho para um humano que está com as mãos no teclado; o agente *age*, e o humano entra depois,
como quem recebe trabalho pronto de outra pessoa.

O tema encosta em mídia e interação por três lugares, e nenhum deles é o óbvio "programador usa
ferramenta melhor".

O primeiro é a **interface**. A superfície primária do trabalho migrou do editor de texto para o
terminal e para painéis de orquestração — Claude Code, Codex CLI, Gemini CLI, OpenCode, Copilot
CLI, Hermes Agent, Mistral Vibe, Amp, Factory, Goose. É uma regressão aparente (a linha de comando,
de novo) que na verdade é outra coisa: a CLI virou o protocolo de uma conversa longa entre um humano
e um processo que executa. Projetar essa conversa — quando interromper, como mostrar o que já foi
feito, como pedir aprovação sem quebrar o fluxo, como representar cinco agentes rodando ao mesmo
tempo — é problema de design de interação, não de engenharia.

O segundo é a **autoria**. Quando o artefato que o humano escreve é uma especificação e o artefato
que chega ao mundo é gerado, o lugar do projeto se desloca. Isso já aconteceu com tipografia
digital, com fotografia computacional, com síntese sonora. Cada vez, a disciplina de design levou
uma década para reconhecer que o objeto de trabalho tinha mudado.

O terceiro é a **assimetria de leitura**. Um humano produz mais do que consegue ler. Essa é a
condição nova, e ela não é resolvível com mais ferramenta de produção.

Por que um mapa de futuro em vez de um levantamento de estado da arte: porque o estado da arte aqui
tem meia-vida de meses e porque as perguntas que importam não são sobre a ferramenta. São sobre o
que acontece com a formação de quem entra na profissão quando o degrau de entrada é justamente a
tarefa que o agente faz melhor; sobre quem responde legalmente por um commit que ninguém leu; e
sobre o que sobra de valor numa empresa cujo ativo era escrever software. Nenhuma dessas perguntas
se responde lendo changelog.

## 3. Onde isso está hoje

### O que já funciona e é medido

Os benchmarks mudaram de natureza. O **SWE-bench Verified** é um subconjunto de 500 instâncias do
SWE-bench revisadas por humanos em colaboração com a OpenAI, em que o agente recebe uma issue real
de repositório Python e o estado do repositório, e precisa produzir um patch que passe nos testes
[1]. O critério é execução, não preferência de juiz — e é isso que o tornou o sinal público padrão.
O **Terminal-Bench 2.0** foi mais longe: 89 tarefas em ambientes de terminal reais, cada uma com
ambiente próprio, solução escrita por humano e testes de verificação, executadas em container
isolado pelo harness Harbor; os autores registram que modelos e agentes de fronteira pontuam **menos
de 65%** [2]. Duas leituras convivem aqui: o agente resolve tarefa de repositório real, e ainda
falha em um terço largo do trabalho de terminal realista.

### O que existe e não funciona como o discurso sugere

O dado mais desconfortável é o da **METR**. Um ensaio randomizado publicado em julho de 2025, com 16
desenvolvedores experientes e 246 tarefas em repositórios maduros (média de 22 mil estrelas e mais
de 1 milhão de linhas), mediu que o acesso a ferramentas de IA deixou os participantes **19% mais
lentos** — enquanto eles próprios estimavam, depois de terminar, que tinham ficado 20% mais rápidos
[3]. Os autores são explícitos sobre o que o estudo não prova: não prova que a IA não acelera a
maioria dos desenvolvedores, nem que o resultado valha para outros domínios ou ferramentas
posteriores [3].

O que aconteceu com esse estudo desde então é, por si, um achado. Em fevereiro de 2026 a METR
publicou que está **redesenhando o experimento** porque ele deixou de ser executável: desenvolvedores
recusam participar sem acesso a IA, e os que aceitam evitam submeter justamente as tarefas em que a
IA ajudaria muito — um participante diz textualmente que evita issues em que a IA terminaria em duas
horas e ele levaria vinte [4]. Nos dados brutos novos, a estimativa passou a sugerir aceleração, com
intervalos de confiança largos demais para afirmar [4]. Ou seja: a linha de base humana sem agente
está ficando difícil de medir porque quase ninguém aceita trabalhar assim.

### Quem usa, e quanto

A Pesquisa de Desenvolvedores do Stack Overflow de 2025 separa bem as duas coisas. **84%** usam ou
planejam usar ferramentas de IA (contra 76% no ano anterior) e 51% dos profissionais usam
diariamente. Mas **agentes** são outra história: 30,9% usam agentes no trabalho, e **52% não usam ou
preferem ferramentas mais simples — 38% sem planos de adotar** [5]. A confiança na exatidão caiu:
33% confiam (3,1% "confiam muito") contra 46% que desconfiam ativamente [5]. As duas frustrações
maiores são reveladoras do problema central deste mapa: **66%** apontam "soluções quase certas, mas
não exatamente", e **45,2%** dizem que depurar código gerado por IA consome tempo demais [5]. E há
uma fronteira de recusa nítida por tipo de tarefa: **76% não usam IA para deploy e monitoramento** e
69% a rejeitam em planejamento de projeto [5]. A análise do próprio Stack Overflow em fevereiro de
2026 nomeia isso de lacuna de confiança e localiza a causa no determinismo — o engenheiro espera
"mesma entrada, mesma saída", e a ferramenta é probabilística [6].

### O volume, e quem o absorve

O Octoverse 2025 do GitHub dá a escala. Mais de 180 milhões de desenvolvedores na plataforma, 36
milhões de novos em 2025 (+23%), **43,2 milhões de pull requests merged por mês** e 518,7 milhões no
ano em open source (**+29%**) [7]. O relatório registra que mais de **1 milhão de pull requests foram
criados entre maio e setembro de 2025** por recursos de coding agent, e que a atividade de agente é
enviesada para repositórios com mais estrelas, maiores e mais antigos — times testando agente em
projeto estabelecido, não em código descartável [7]. A análise da InfoQ sobre os dados de 2026
descreve o outro lado: o influxo de contribuições geradas é caracterizado como "AI slop" e como um
**ataque de negação de serviço à atenção humana**, porque o volume de submissões cresceu e o conjunto
de revisores não [8].

### A camada que nasceu para governar isso

Aqui está a novidade estrutural de 2025–2026, e ela é de formato, não de modelo.

**Agent Skills** virou um padrão aberto. Uma skill é uma pasta com um `SKILL.md` (metadados mínimos
`name` e `description`, mais instruções) que pode empacotar `scripts/`, `references/` e `assets/`. O
carregamento é por *progressive disclosure* em três estágios — na partida o agente lê só nome e
descrição; quando a tarefa casa, carrega o `SKILL.md` inteiro; na execução lê os arquivos
referenciados sob demanda [9]. O formato foi desenvolvido pela Anthropic e liberado como padrão
aberto, e o showcase oficial lista implementações em Claude Code, ChatGPT/Codex, Cursor, GitHub
Copilot, VS Code, Gemini CLI, JetBrains Junie, OpenCode, OpenHands, Goose, Amp, Factory, Roo Code,
Kiro, Tabnine, Letta, Hermes Agent, Mistral Vibe, Databricks, Snowflake, Pulumi e outros [9]. A
documentação do **Model Context Protocol** trata skills como o modo recomendado de guiar um agente
na própria construção de servidores MCP, com caminhos de implantação distintos — Streamable HTTP
remoto como padrão, MCP Apps para widgets, MCPB para empacotar servidor local com runtime, stdio
para prototipagem [10].

Repare no que isso significa: **o "como se faz aqui" saiu da cabeça do sênior e virou arquivo
versionado, distribuível e instalável por qualquer agente compatível**. Prompt virou software.

A literatura acadêmica acompanhou. Um mapeamento de junho de 2026 compara frameworks de
desenvolvimento dirigido por especificação — OpenSpec, GitHub Spec Kit, BMAD, GSD, SpecFlow,
Spec-Kitty — e propõe uma taxonomia de processo para como o agente converte instrução em processo
executável, concluindo que a participação humana permanece crítica através de especificação e
supervisão [11]. Um trabalho de setembro de 2026 (Harness-of-Harness, Shanghai AI Laboratory)
organiza agentes em ciclos repetidos de planejamento–desenvolvimento–teste com dois estados
persistentes entre iterações (continuidade de artefato e continuidade de evidência), reporta ganhos
absolutos de 16,6 a 22,1 pontos em GameCraft-Bench e 19 a 29 pontos em FrontierSWE, e um estudo de
caso multi-dia em que o sistema desenvolveu um jogo jogável ao longo de **70 laços** [12]. Um paper
de abril de 2026 argumenta que a engenharia de software precisa ser repensada para sistemas
agênticos, com ênfase em verificação não determinística, trilhas de auditoria e uma lacuna explícita
de formação [13]. E um de maio de 2026 sustenta que autonomia não basta — falta **proatividade**, e
o ponto ótimo é o sistema de iniciativa mista [14].

### O que ainda não está resolvido

Skills funcionam pior no mundo real do que em bancada. Um benchmark de abril de 2026 sobre uso de
skills em cenários realistas encontra queda de desempenho fora da distribuição de treino e quatro
modos de falha recorrentes: **erro de seleção** (o agente escolhe a skill errada), **falha de
composição** (não encadeia várias), **desalinhamento de contexto** e **degradação de robustez** [15].
E o formato aberto trouxe superfície de ataque junto: um trabalho de abril de 2026 propõe uma
taxonomia de ameaças para agent skills cobrindo injeção de skill maliciosa, exploração de
credenciais, controle de acesso e **vulnerabilidades de cadeia de suprimento na distribuição de
skills** [16].

### A régua jurídica que já está correndo

O **Cyber Resilience Act** europeu não faz distinção entre código escrito por humano e código
sugerido por IA: o fabricante responde pela segurança do produto independentemente de como o código
foi produzido. A obrigação de reportar vulnerabilidades ativamente exploradas vale desde **11 de
setembro de 2026**, e a aplicação plena da maior parte das demais disposições começa em **11 de
dezembro de 2027** [17]. Este é um marco raro num mapa de tendências: uma data já vencida, não uma
projeção.

### O Brasil

O estudo do mercado brasileiro de software da ABES com dados da IDC, apresentado em **18 de junho de
2026**, registra **40% das médias e grandes empresas brasileiras já usando agentes inteligentes
ativamente** e **33% com planos formais de iniciar implementação nos 12 meses seguintes**, projetando
mais de 70% operando com agentes em escala [18]. O investimento total em TI é de US$ 67,8 bilhões,
com US$ 21,7 bilhões em software. O contraste dentro do próprio estudo é o dado interessante: 57%
têm objetivos claros de IA, mas só **38% têm estrutura sólida de governança de dados** e **34%
arquitetura de cibersegurança adequada** [18]. Isto é, a adoção corre na frente da capacidade de
verificar — exatamente a assimetria que este mapa persegue, e no Brasil ela é mais larga.

### Onde passa a linha da disciplina

Autocompletar de IDE: maduro. Chat que explica código: maduro. Agente que executa, testa e abre PR:
**emergente**, com 30,9% de uso declarado e 38% de recusa explícita. Skill e harness como camada de
governo: **emergente e disruptivo**, porque criam um artefato que antes não existia. Revisão de
código como gargalo econômico: **disruptivo**, porque altera quem responde pelo quê.

## 4. As disrupções-raiz

### D1. O agente fecha o laço de execução sem humano no meio

**O que rompe.** A unidade de trabalho do desenvolvedor deixa de ser o arquivo e passa a ser a
tarefa verificável. Enquanto a ferramenta sugeria trechos, o humano permanecia o executor e a
máquina era acessório do gesto de digitar. Quando o agente lê o repositório, planeja, edita vários
arquivos, roda os testes, lê a falha, corrige e abre o PR, o humano deixa de ser executor e passa a
ser quem encomenda e quem aceita. É uma troca de papel, não um ganho de velocidade.

**Por que agora e não há cinco anos.** Três condições se juntaram e nenhuma delas existia em 2021.
Primeira: os modelos passaram a sustentar sessões longas com uso de ferramentas, e os benchmarks
mudaram para medir isso — SWE-bench Verified pontua por execução de teste em repositório real [1], e
Terminal-Bench avalia agentes em container isolado com testes de verificação por tarefa [2].
Segunda: a interface migrou para onde há execução. Terceira: o resultado virou verificável por
máquina, e é isso que permite o laço fechar — o agente sabe que falhou sem precisar perguntar.

**O que ainda falta.** Falta o laço fechar em trabalho realista com margem confortável: agentes de
fronteira ficam abaixo de 65% no Terminal-Bench [2]. Falta a linha de base humana ser mensurável de
novo — a METR não consegue mais recrutar para o braço sem IA [4]. E falta a recusa por tipo de
tarefa ceder: 76% dos desenvolvedores não usam IA para deploy e monitoramento [5], que é onde o
prejuízo de um erro é maior.

### D2. A instrução virou artefato versionado, distribuível e atacável

**O que rompe.** O conhecimento procedimental de um time — como se revisa aqui, o que nunca se faz,
qual o padrão de commit, como se lida com aquele módulo que ninguém entende — sempre foi tácito,
transmitido por convivência e perdido quando a pessoa saía. O formato Agent Skills o converte em
pasta com `SKILL.md`, versionada em git, instalável em qualquer agente compatível e carregada sob
demanda [9]. Isso rompe três relações de uma vez: a relação de aprendizado (deixa de depender de
convivência), a relação de propriedade (método vira produto que se distribui) e a relação de
confiança (uma instrução de terceiro passa a governar o que o agente faz na sua máquina).

**Por que agora.** Porque o formato ficou trivialmente simples e aberto ao mesmo tempo em que o
agente ficou capaz de segui-lo. O `progressive disclosure` em três estágios resolve o problema
econômico que impedia isso antes: dá para ter muitas skills instaladas pagando, em contexto, só
nome e descrição de cada uma até que uma seja ativada [9]. E a adoção atravessou fabricantes
concorrentes — o mesmo `SKILL.md` roda em Claude Code, Codex, Cursor, Copilot, Gemini CLI, Junie,
OpenCode, Goose, Kiro, Tabnine [9]. Padrão que roda no produto do concorrente é padrão de verdade.

**O que ainda falta.** Falta funcionar fora da bancada: o benchmark de skills em cenário realista
documenta erro de seleção, falha de composição e degradação fora da distribuição [15]. Falta
procedência: a taxonomia de ameaças já descreve injeção de skill maliciosa e ataque de cadeia de
suprimento na distribuição [16], e não existe ainda um equivalente consolidado de assinatura e SBOM
para instrução. E falta resolver a composição — várias skills ativas simultaneamente é o caso comum
e o caso que falha.

### D3. A responsabilidade descolou-se da autoria

**O que rompe.** Durante toda a história da engenharia de software, quem escreveu o código era
localizável, e a revisão consistia em outro humano ler o que um humano escreveu. Duas coisas
quebraram isso ao mesmo tempo. De um lado, o volume: 518,7 milhões de PRs merged em open source no
ano, +29%, com mais de um milhão criados por coding agents em cinco meses de 2025 [7], enquanto o
conjunto de revisores não cresceu — o que a InfoQ descreve como negação de serviço à atenção humana
[8]. Do outro, a lei: o CRA responsabiliza o fabricante independentemente de o código ter sido
escrito por pessoa, sugerido por assistente ou modificado por agente autônomo, com obrigação de
reporte de vulnerabilidade explorada valendo desde 11/09/2026 [17].

O resultado é uma condição inédita e ainda não resolvida: **alguém responde juridicamente por um
artefato que ninguém leu.** Não é retórica — é a combinação literal de [7], [8] e [17].

**Por que agora.** Porque as duas curvas se cruzaram. A produção ficou barata antes que a
verificação ficasse, e a regulação chegou antes que a prática se organizasse. O Stack Overflow
mede o efeito no nível do indivíduo: 66% reclamam de soluções quase certas e 45,2% de tempo gasto
depurando código gerado [5] — "quase certo" é precisamente o que passa numa leitura casual e
custa caro depois.

**O que ainda falta.** Falta a revisão mudar de natureza, de leitura de diff para conferência de
evidência de execução — o Harness-of-Harness já propõe manter continuidade de evidência entre
iterações como estado de primeira classe [12], e a literatura pede trilhas de auditoria explícitas
[13]. Falta instrumentação: observabilidade de agente ainda é artesanal. E falta jurisprudência —
o CRA está escrito, mas não foi testado num caso em que o agente foi a causa próxima.

### O que NÃO entrou como disrupção-raiz

Autocompletar de IDE e chat explicativo são maduros e não rompem papel. "Modelos vão ficar melhores"
não é disrupção, é extrapolação. Multi-agente (Arquiteto/Construtor/Revisor) foi rebaixado a efeito
de segunda ordem de D1 e D2: a evidência atual mostra ganho de benchmark [12], não ruptura de papel
ou de custo. Geração de interface por prompt ficou de fora do recorte por ser tema vizinho.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O agente fecha o laço de execução sem humano no meio
    efeitos:
      - id: e1
        ordem: 1
        efeito: A unidade de trabalho do desenvolvedor passa a ser a tarefa verificável e não o arquivo
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A interface primária de desenvolvimento migra do editor para o terminal e para painéis de orquestração
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O repositório versionado vira a interface dominante de trabalho intelectual técnico mesmo fora da programação
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Um desenvolvedor passa a conduzir vários agentes em paralelo em espaços de trabalho isolados
            sinal: forte
            prazo: 2028
            confianca: alta
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: A atenção humana e não o tempo de digitação vira o recurso escasso que as equipes medem e disputam
                sinal: medio
                prazo: 2030
                confianca: media
              - id: e1.2.2
                ordem: 3
                efeito: Surgem funções de orquestração avaliadas por taxa de aceite e não por volume produzido
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O custo marginal de uma tentativa de implementação cai a ponto de tornar o descarte mais barato que o planejamento
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Equipes passam a gerar soluções concorrentes e escolher entre elas em vez de projetar uma única
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: O projeto de software incorpora seleção e curadoria como etapa formal ao lado da especificação
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Software de nicho e de uso único prolifera porque deixa de precisar justificar custo de desenvolvimento
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: O valor de uma empresa de software desloca-se do código para distribuição dado e confiança
                sinal: medio
                prazo: 2031
                confianca: baixa
              - id: e2.2.2
                ordem: 3
                efeito: Projetar mídia e interação passa a incluir construir o produto inteiro e não apenas a tela
                sinal: medio
                prazo: 2029
                confianca: media
  - disrupcao: A instrução virou artefato versionado distribuível e atacável
    efeitos:
      - id: e3
        ordem: 1
        efeito: O conhecimento tácito de engenharia de um time vira arquivo versionado e auditável
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: A integração de alguém novo deixa de ser conversa e vira carregar o pacote de skills do time
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: O currículo de computação precisa ensinar a escrever especificação e skill e não apenas linguagem de programação
                sinal: medio
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: A skill vira superfície de ataque e exige registro assinatura e controle de procedência
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Nasce uma cadeia de procedência para instrução análoga ao inventário de componentes do código
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: O harness e não o modelo vira a camada onde as equipes competem e se diferenciam
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Equipes trocam de modelo sem trocar de processo porque o protocolo e o formato de skill são comuns
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: O poder de barganha de quem fornece modelo cai frente a quem detém o harness e o contexto acumulado
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: A prática de engenharia passa a ser distribuída como produto instalável e não como treinamento presencial
            sinal: medio
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Consultoria e metodologia são reembaladas como skills assinadas e vendidas por assinatura
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A responsabilidade descolou-se da autoria
    efeitos:
      - id: e5
        ordem: 1
        efeito: A revisão e a verificação tornam-se o gargalo e o maior custo do ciclo de desenvolvimento
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A revisão humana migra de ler o diff para conferir evidência de execução produzida pelo agente
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: O teste automatizado deixa de ser garantia de qualidade e passa a ser a especificação executável de fato
                sinal: medio
                prazo: 2030
                confianca: media
          - id: e5.2
            ordem: 2
            efeito: A auditoria do processo do agente com traço decisão e custo vira categoria própria de produto
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Forma-se um mercado de observabilidade de agente comparável ao de monitoramento de aplicação
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e5.2.2
                ordem: 3
                efeito: A governança do repositório e o registro de quem aprovou o quê viram exigência regulada e auditada
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: A porta de entrada da profissão fecha exatamente na tarefa que o agente executa melhor que o iniciante
        sinal: medio
        prazo: 2027
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: A formação do iniciante perde o degrau em que se aprendia lendo e escrevendo código trivial
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A senioridade fica escassa por falta de esteira de formação e não por falta de demanda
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: A contratação passa a avaliar capacidade de especificar e de recusar em vez de codar sob pressão
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: A régua de competência da área reorganiza-se em torno de julgamento verificável e responsabilidade assumida
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o bloco não consegue dizer

**A roda esconde o conflito entre e2 e e5.** O efeito e2 (produzir fica barato) e o efeito e5
(verificar vira o gargalo) não são ramos independentes: são a mesma tesoura vista pelas duas lâminas.
Todo ganho em e2 agrava e5, e o mapa inteiro depende de qual das duas curvas vence. Se a verificação
automatizar junto — e há sinal disso, com o QA Tester independente do Harness-of-Harness [12] —, e5
se resolve e o ramo e6 (fechamento da porta de entrada) fica muito pior, porque some também o
trabalho de revisão júnior. Se a verificação não automatizar, e5 domina e e2 se auto-limita: não
adianta produzir dez vezes mais se nada passa. **Os dois cenários ruins são simétricos e opostos.**

**A roda não representa recusa.** 38% declaram não ter planos de adotar agentes e 76% recusam IA em
deploy [5]. Recusa deliberada não é atraso de adoção — é uma decisão que pode se estabilizar e
permanecer. Uma roda de futuros representa mal o que *não* acontece por escolha.

**Os prazos são o elemento mais frágil.** Estão ancorados em duas âncoras duras (11/09/2026 e
11/12/2027, do CRA [17]) e, fora disso, em julgamento. Leia-os como ordenação, não como data.

**A terceira ordem é quase toda `confianca: baixa`, e isso é resposta correta**, não omissão. Onde
está `media` na terceira ordem (e5.1.1 e e3.1.1) é porque o mecanismo já tem sinal observável hoje.

## 6. Sinais fracos e wildcards

### Sinal fraco 1 — a auditoria do processo do agente vira mercado

Ferramentas para *inspecionar o que o agente fez* — não o que ele produziu — mal existem, e onde
aparecem são acessórias. Mas a literatura já pede trilha de auditoria como requisito de primeira
classe [13], e o Harness-of-Harness trata continuidade de *evidência* como estado persistente, no
mesmo nível do artefato [12]. O sinal a observar: o dia em que um time exigir o traço de execução
antes de olhar o diff. Isso muda o objeto da revisão de "o código está certo" para "o processo que
produziu isto é confiável" — e processo confiável é exatamente o que se audita e se vende.

### Sinal fraco 2 — a linha de base humana está ficando inobservável

O achado mais estranho de 2026 não é sobre agente, é sobre medição. A METR não consegue mais rodar o
braço de controle: desenvolvedores recusam trabalhar sem IA, e os que aceitam auto-selecionam tarefas
em que a IA ajudaria pouco [4]. Se em 2031 não houver mais população mensurável trabalhando sem
agente, **a pergunta "isso melhora a produtividade?" deixa de ser respondível empiricamente**, e
qualquer afirmação sobre ganho vira crença. Uma disciplina que perde a capacidade de medir o próprio
efeito é um caso raro e vale a atenção.

### Sinal fraco 3 — a skill como produto de marca

A lista de implementações de Agent Skills já inclui Laravel Boost, publicada pelo próprio framework
para que agentes escrevam Laravel do jeito que o Laravel considera correto [9]. É pequeno e parece
detalhe de ecossistema. Mas se generalizar, cada framework, cada design system e cada empresa de
consultoria passa a publicar a versão oficial de si mesma em formato legível por agente — e
"seguir a boa prática" deixa de ser cultura e vira dependência instalada, com versão e mantenedor.

### Sinal fraco 4 — o Brasil adota agente mais rápido do que constrói governança

No estudo ABES/IDC, 40% já usam agentes, mas só 38% têm governança de dados sólida e 34% arquitetura
de segurança adequada [18]. A distância entre as duas curvas é maior aqui do que os números globais
sugerem. Se o CRA criar um padrão de fato para quem exporta software [17], o custo de conformidade
recai sobre um parque que adotou primeiro e se organizou depois.

### Wildcard — o incidente que nomeia um responsável

**Não é previsão.** Baixa probabilidade em qualquer ano dado, alto impacto se acontecer.

Um incidente grave em produção — indisponibilidade prolongada, vazamento, perda financeira — é
rastreado até um commit de agente autônomo que passou por revisão nominal e não foi lido por
ninguém. Sob o CRA, o fabricante responde independentemente da origem do código [17], mas a pergunta
que a imprensa faz não é jurídica: é *quem*. O que torna o cenário plausível não é o erro (erros
sempre existiram) e sim a combinação de três condições já presentes: volume de PR crescendo 29% ao
ano [7], revisores não crescendo [8], e código gerado que é "quase certo" — a queixa de 66% dos
desenvolvedores [5] — que é justamente o que sobrevive a uma leitura apressada.

O impacto não seria a proibição. Seria a **exigência de nomear um responsável humano por merge em
software regulado**, com registro. Isso inverte a economia inteira do mapa: o gargalo deixa de ser a
capacidade de revisar e passa a ser a disposição de assinar. Os ramos e5.2.2 e e6.2 saltariam de
`fraco` para `forte` em poucos meses, e o efeito colateral seria concentrar desenvolvimento em quem
tem estrutura jurídica para assumir risco — ou seja, reduzir, não aumentar, a abundância que o
resto do mapa projeta.

### Contra-wildcard — a verificação automatiza junto

Simétrico e igualmente pouco provável no horizonte: um salto em verificação formal assistida por
modelo torna barato *provar* propriedades do código gerado. Nesse caso e5 evapora, e5.1.1 se realiza
integralmente, e o mapa fica errado do lado otimista — com um custo escondido em e6, porque some
também o trabalho de revisão que hoje forma o iniciante.

## 7. Contra o próprio mapa

### Qual efeito é só extrapolação linear do presente

**e2.2** ("software de nicho prolifera") é o mais frágil, e é o mais sedutor. Ele assume que custo de
produção era a única barreira contra a existência de software. Não era: distribuição, manutenção,
suporte, confiança e atenção do usuário também barram, e nenhuma delas cai com o custo de escrever.
Software abundante e não mantido é lixo, não abundância. O Octoverse mostra que a atividade de agente
concentra-se em repositórios **grandes, antigos e com mais estrelas** [7] — o oposto de proliferação
de nicho. Rebaixei e2.2 de `confianca: alta` para `media` por causa desse dado, e e2.2.1 (valor da
empresa de software) para `baixa`.

**e1.2** ("vários agentes em paralelo") também é extrapolação da prática de quem já opera assim — e
eu sou um desses, o que é precisamente o problema. A infraestrutura existe (worktrees isolados, Mux,
Emdash, Superconductor [9]) e a existência de ferramenta não é evidência de adoção.

### Qual efeito assume velocidade de adoção sem caso comparável

**e3.1** ("onboarding vira carregar o pacote de skills") assume que uma prática de 2026 se torne
padrão de indústria em três anos. Não há caso comparável: revisão por pares levou décadas;
integração contínua, mais de dez anos; testes automatizados ainda não são universais. O formato
Agent Skills é aberto e multi-fabricante [9], o que acelera — mas adoção de *formato* não é adoção
de *prática*. E o benchmark de skills em cenário realista mostra que elas ainda falham exatamente
onde o onboarding precisaria delas: seleção e composição [15].

**e6** (fechamento da porta de entrada) tem o defeito oposto e mais grave: **ele já está acontecendo,
e eu o datei como se fosse futuro**. O dado do Stanford Digital Economy Lab, com folha ADP até junho
de 2026, mede emprego de jovens de 22 a 25 anos em ocupações expostas a IA **19% abaixo** do que
estaria se tivesse acompanhado os pares menos expostos, por queda de contratação e não por demissão
[19]. Os próprios autores chamam de indicador descritivo, não estimativa causal [19] — e é honesto
manter e6 em `confianca: media` por isso. Mas datá-lo em 2027 é conservador demais.

### Qual disrupção pode simplesmente não se concretizar

**D1 é a que pode falhar, e por um motivo específico: o teto de confiabilidade.** Agentes de
fronteira ficam abaixo de 65% no Terminal-Bench [2]. Se essa curva saturar — e há razão para
suspeitar que sim, porque o que falta não é conhecimento e sim juízo sobre contexto que o agente não
tem —, o agente fica bom em tarefa bem delimitada e permanentemente ruim no resto. Nesse mundo, o
laço não fecha: o humano volta para dentro de cada passo e a programação agêntica vira uma
ferramenta produtiva e chata, sem troca de papel. **O mapa inteiro cai**, porque D2 e D3 derivam da
premissa de que o agente age sem supervisão contínua. Sobreviveria apenas o fragmento e5, e por
outra causa: o volume de código gerado por assistente não-agêntico já basta para sobrecarregar
revisão.

**D3 pode não se concretizar por caminho jurídico.** Se a jurisprudência do CRA convergir para exigir
revisão humana documentada em software regulado, a responsabilidade *volta* a coincidir com a
autoria — e o descolamento, que é a própria disrupção, se fecha.

### Que viés meu entrou aqui

Três, e o terceiro é o pior.

**Viés de ferramenta.** Este documento foi produzido por um agente executando uma skill, dentro de
uma disciplina que pede uma skill por aluno. A configuração inteira é evidência a favor de D2, e
eu sou parte da amostra. Tenho interesse estrutural em que a tese esteja certa.

**Viés de recorte declarado.** O tema me foi entregue já formulado como "o desenvolvedor vira
orquestrador" — a conclusão está no enunciado. Tentei compensar procurando ativamente o que derruba:
o estudo METR [3], o dado dos 38% sem planos [5], o viés de concentração em repositórios grandes [7],
a falha de skills fora da bancada [15]. Mas buscar refutação depois de receber a tese não é o mesmo
que testá-la antes.

**Viés de sobrevivência das fontes.** Quase todo o material aberto é produzido por quem tem interesse
no assunto: fabricantes, pesquisadores do campo, imprensa especializada. A maioria silenciosa que
**não** usa agente — os 38% sem planos [5] — não publica. Meu mapa foi construído lendo os
entusiastas e inferindo os outros. Dos 19 itens da seção 11, dois são fornecedores com produto no
tema ([17] e, em parte, [9]).

### Uma contradição que preservei em vez de resolver

A adoção é declarada minoritária (30,9% usam agentes, 38% sem planos [5]) e simultaneamente
inobservável (a METR não consegue recrutar quem trabalhe sem IA [4]). As duas coisas não se
encaixam — talvez porque "IA" e "agente" sejam coisas diferentes na cabeça de quem responde, talvez
porque a população da METR (mantenedores open source experientes) não represente o survey. **Não
sei**, e não vou fabricar reconciliação. Registro como a maior incerteza aberta do mapa.

## 8. O que a máquina errou

### 1. Placar de benchmark inventado por agregação

A busca devolveu, na mesma resposta, que o SWE-bench Verified estaria em **97,00%** (por uma "Vals.ai
run"), em **80,6%**, e em **75,2%** — três números incompatíveis, todos apresentados como "o
leaderboard". Ao abrir a página oficial do SWE-bench Verified, ela **não publica placar nenhum** no
corpo: descreve o subconjunto de 500 instâncias validadas por humanos e remete a um seletor
interativo [1]. Os números vinham de sites agregadores e de papers citando snapshots diferentes.

**Como percebi:** a distância entre 75% e 97% é grande demais para variação de método no mesmo
benchmark, e o maior valor estava associado a uma fonte que não é a mantenedora. **O que fiz:** não
cito placar de SWE-bench neste documento. Cito o benchmark pelo que ele é [1] e uso o Terminal-Bench,
cujo número ("menos de 65%") está no resumo dos próprios autores [2].

### 2. Um número de emprego que trocou de referente no caminho

A busca sobre empregos júnior devolveu "**67%** das vagas de entrada desapareceram", atribuído ao
Stanford Digital Economy Lab com dados ADP. Ao abrir a publicação do Stanford, o número é **outro e
mede outra coisa**: emprego de jovens de 22 a 25 anos em ocupações expostas a IA está **19% abaixo**
do contrafactual, por redução de contratação, com os autores classificando explicitamente o achado
como descritivo e não causal [19]. Os "67%" vêm de posts de blog sobre *anúncios de vaga* num
recorte de datas variável — outra métrica, outra fonte, mesma autoridade invocada.

**Como percebi:** a atribuição estava colada numa autoridade acadêmica, mas o número redondo e o
verbo ("desapareceram") não têm a forma de um resultado de paper. **O que fiz:** usei só [19] e
mantive a ressalva causal dos autores no corpo do texto.

### 3. Discrepância de confiança entre duas páginas do mesmo publicador

A página de IA do survey 2025 do Stack Overflow reporta **33%** confiando na exatidão (3,1% "confiam
muito") [5]; o post do blog do mesmo Stack Overflow, em fevereiro de 2026, diz "**apenas 29%
confiam**, queda de 41% em 2024" [6]. São recortes diferentes da mesma pesquisa — provavelmente
população total contra profissionais, ou agregação diferente das opções.

**Como percebi:** li as duas páginas e os números não bateram. **O que fiz:** uso **33%/46%** por
serem os da página de dados, e cito o post separadamente pelo argumento qualitativo do determinismo,
sem usar o 29% como fato. Não resolvi a discrepância; declaro que ela existe.

### 4. Estatística de vendedor apresentada como achado de pesquisa

A afirmação de que "**cerca de 40%** do código gerado por IA contém falhas de segurança" apareceu no
material do fornecedor sobre o CRA, atribuída a "pesquisa" sem referência localizável no texto [17].
É um vendedor de análise estática de código descrevendo o problema que seu produto resolve.

**Como percebi:** número redondo, sem citação primária, e alinhado ao interesse comercial de quem
publica. **O que fiz:** **não usei esse número em lugar nenhum do mapa.** Usei de [17] somente as
datas regulatórias e o texto sobre indistinção entre código humano e gerado, que são verificáveis
contra o regulamento.

### 5. Ganho de benchmark lido como ganho de mundo

Ao resumir o Harness-of-Harness, minha primeira formulação foi "agentes desenvolvem software
autonomamente por vários dias com melhoria contínua" — que é o título, não o resultado. O resultado é
ganho **em três benchmarks** e **um estudo de caso** de um jogo em 70 laços [12]. Um estudo de caso é
uma existência, não uma taxa.

**Como percebi:** ao escrever o efeito na roda, não consegui dizer qual era o denominador. **O que
fiz:** o Harness-of-Harness não sustenta nenhum efeito `forte` neste mapa; sustenta e5.1 e o sinal
fraco da auditoria, ambos em `media`/`fraco`.

### 6. Uma fonte que não abri e por isso não entrou

A busca apontou um paper de fevereiro de 2026 sobre engenharia de dados para capacidades de terminal
(arXiv 2602.21193) que seria útil para datar a curva de capacidade. Não abri. **Não está na seção
11 e não sustenta nada aqui** — registro a ausência porque a regra da skill é que fonte não aberta
não entra, e a tentação de citá-la pelo título era real.

## 9. Três cenários para 2031

### Provável

Em 2031, o agente é onde o trabalho começa e o humano é onde ele termina. Especificar virou a parte
cara do dia, e a maior parte dos times opera de três a cinco agentes em paralelo, cada um no seu
espaço isolado, com um humano decidindo o que entra. O `SKILL.md` é tão banal quanto o `.gitignore`:
todo repositório tem os seus, frameworks publicam os oficiais, e existe um registro com assinatura
porque em 2028 uma skill maliciosa distribuída por um registro popular vazou credenciais em alguns
milhares de máquinas e ninguém mais instala instrução sem procedência. O gargalo é a revisão, como o
mapa previu, mas ele se acomodou de um jeito que o mapa não previu: a revisão humana quase não lê
código: lê evidência — que testes rodaram, que propriedades se mantiveram, o que o agente tentou e
descartou — e o diff só é aberto quando a evidência cheira mal. A medição do ganho de produtividade
continua sem resposta limpa, porque não sobrou população trabalhando sem agente para comparar, e a
discussão migrou de "acelera?" para "quanto custa por tarefa aceita". A porta de entrada da profissão
continua mais estreita que em 2024, e o setor reclama de falta de gente sênior sem enxergar que
fechou a esteira que a produzia. No Brasil, a adoção é alta e desigual: quem exporta software se
adequou ao CRA por obrigação de cliente; quem atende só o mercado interno opera sem trilha de
auditoria e descobre o custo disso caso a caso.

### Desejável

Em 2031, o ofício ganhou um vocabulário que não tinha e por isso conseguiu ser ensinado. A
especificação executável virou o artefato central — não a burocracia que se escreve depois, mas o
lugar onde a intenção se registra antes e contra o qual o resultado se confere. Cursos de computação
reorganizaram os dois primeiros anos em torno de três competências que antes não tinham nome:
escrever uma especificação falseável, ler evidência de execução e **recusar** com argumento. A
esteira de formação não foi eliminada, foi reconstruída: o iniciante entra revisando e especificando
sob supervisão, em vez de escrever código trivial que o agente escreveria melhor, e chega à
senioridade sabendo julgar — que é a competência que ficou escassa. Para chegar aqui foi preciso que
três coisas acontecessem, e nenhuma delas é tecnológica: que empresas aceitassem carregar o custo de
formar quem não produz no primeiro ano; que a auditoria de processo de agente virasse exigência
contratual antes de virar exigência jurídica; e que alguém publicasse, cedo, a medida honesta de que
o ganho de produtividade era menor do que se dizia — o que teria evitado a década de expectativa
inflada que se seguiu.

### Indesejável

Em 2031, todo mundo produz muito e ninguém responde por nada. A revisão virou ritual: o PR tem
aprovação, a aprovação tem carimbo, e o carimbo foi dado por um agente revisor cujo critério ninguém
auditou. O código roda, e quando não roda não há quem saiba dizer por quê, porque a decisão que o
causou foi tomada dentro de uma sessão cujo traço não foi guardado. Em algum ponto entre 2028 e 2030
um incidente rastreado até um commit que ninguém leu forçou a regulação a nomear responsável humano
por merge em software regulado — e o efeito foi o contrário da abundância que se prometia:
desenvolver software em setor regulado ficou caro e concentrado em quem tem estrutura jurídica para
assinar, enquanto o resto do mundo produziu montanhas de software sem manutenção, sem procedência e
sem ninguém que entenda. A porta de entrada fechou de vez; existe uma geração que aprendeu a operar
agentes sem nunca ter lido um sistema inteiro, e ela não consegue julgar o que o agente entrega
porque nunca construiu o critério.

**O sinal precoce** deste cenário não é técnico e aparece cedo: é o dia em que o tempo mediano de
revisão de um PR **cair** enquanto o volume de PRs sobe. Revisão que fica mais rápida sob carga maior
não é eficiência — é revisão que parou de acontecer. Esse número é público em qualquer organização
que meça, e ele é observável hoje.

## 10. O experimento

### O que é

**Bancada de orquestração.** Uma estação de trabalho, projetada em sala e testada com a turma, onde
**três agentes de código resolvem a mesma tarefa simultaneamente**, cada um num espaço de trabalho
isolado (git worktree), a partir da **mesma especificação escrita pela turma**. A bancada não mostra
o código. Mostra, lado a lado: o que cada agente entendeu da especificação, que testes rodaram e com
que resultado, quantas tentativas foram descartadas no caminho, quanto custou, e o que cada um decidiu
sem perguntar. O diff existe e está a um clique — mas fica escondido por padrão, e isso é a decisão
de projeto central do experimento.

A tarefa tem um requisito deliberadamente **subespecificado** e um requisito **impossível de
satisfazer junto com outro** — inseridos pelo condutor, sem aviso à turma.

### Que pergunta sobre o futuro ele ajuda a responder

A pergunta de e5.1: **é possível aceitar ou recusar trabalho de software sem ler o código?** Se a
resposta for não, o gargalo de revisão não tem saída e o mapa converge para o cenário indesejável.
Se for sim, a próxima pergunta é de interação, e é a que interessa a esta disciplina: **qual é a
interface que torna isso possível?** O que precisa estar na tela para que uma pessoa assuma
responsabilidade por algo que não leu — e isso pode ser projetado, ou a recusa dos 76% em deploy [5]
é uma resposta correta sobre o limite do delegável?

E uma pergunta secundária, sobre D2: quando três agentes divergem lendo a *mesma* especificação, a
divergência está na especificação ou nos agentes? Rodar a mesma tarefa com skills idênticas e depois
sem skill nenhuma mede diretamente quanto da variação a instrução versionada elimina.

### Que tecnologia emergente ele usa, e por que não dá com tecnologia madura

Usa três coisas que não existiam em forma utilizável há dois anos: **agentes de terminal que fecham o
laço** e produzem traço de execução (Claude Code, Codex CLI, OpenCode, Gemini CLI); **Agent Skills**
no formato aberto, que é o que permite dar a três agentes de fabricantes diferentes a mesma instrução
e atribuir a diferença ao agente e não ao prompt [9]; e **isolamento por worktree**, que é o que
torna a comparação simultânea possível sem que um agente veja o trabalho do outro.

Com tecnologia madura, o experimento não existe. Autocompletar de IDE não produz trabalho comparável
porque o humano fica no meio de cada passo — não há o que comparar, só o mesmo humano três vezes.
Chat que explica código não executa, e sem execução não há evidência para julgar — o experimento
inteiro colapsaria em ler três diffs, que é exatamente a prática que ele se propõe a testar contra.

### O que a turma faz quando testar em sala

1. **Especifica junto** (15 min). A turma escreve a especificação da tarefa, em voz alta, sem ver
   código. Este é o primeiro dado: onde a turma acha que foi clara.
2. **Dispara** e assiste os três executarem em paralelo (10 min). Ninguém abre o diff.
3. **Julga às cegas** (15 min). Cada pessoa aceita ou recusa cada um dos três, **só pela evidência**,
   e escreve numa linha o motivo. Registra-se o quanto cada um se sente confiante.
4. **Abre os diffs** (10 min). Quem muda de opinião levanta a mão. **A taxa de mudança é o resultado
   principal do experimento.**
5. **Revela as armadilhas** (10 min): o requisito subespecificado e o par contraditório. Quantos
   agentes perguntaram em vez de adivinhar? Quantos avisaram da contradição em vez de escolher em
   silêncio? Alguém notou pela evidência, antes do diff?
6. **Reprojeta** (20 min). Em grupos: que informação faltava na tela para decidir sem abrir o
   código? Cada grupo desenha uma tela. As telas são o entregável de design do experimento.

### O que seria um resultado que me faria mudar de ideia

**Sobre o experimento.** Se ao abrir os diffs **quase ninguém mudar de opinião**, a revisão por
evidência funciona e e5 é um problema de ferramenta, não de natureza — o gargalo se resolve e o
cenário indesejável perde força. Esse resultado me faria rebaixar e5 de `forte` para `medio`.

Se **quase todo mundo mudar**, a evidência é insuficiente por natureza e não por imaturidade, e o
mapa erra para o lado otimista: nenhuma interface resolve, e a única saída é produzir menos.

**Sobre o mapa inteiro.** Duas coisas me fariam reescrevê-lo. Primeira: evidência de que a adoção de
*agentes* (não de assistentes) passou da maioria inicial — isto é, algo acima de 50% de uso regular
declarado numa pesquisa ampla e comparável ao survey do Stack Overflow, contra os 30,9% de hoje [5].
Isso mataria a premissa de que estamos na borda e tornaria este um levantamento de estado da arte, não
um mapa de futuro. Segunda: evidência de que a tecnologia não rompe nada — por exemplo, um estudo com
o desenho da METR [3][4] mostrando que, com agentes fechando o laço, a estrutura do trabalho, os
papéis e a responsabilidade permanecem os mesmos e só a velocidade muda. Nesse caso não há D1, e o
que resta é uma melhoria, que por definição não sustenta uma roda de futuros.

## 11. Fontes

Dezenove fontes, todas abertas durante a produção deste documento em 18/09/2026. Onde o acesso foi
por extração de conteúdo da página (e não leitura integral do PDF), está indicado — ver a limitação
correspondente na seção 12.

1. **SWE-bench Verified** — `https://www.swebench.com/verified.html`
   Sustenta: o que é o benchmark (subconjunto de 500 instâncias validadas por humanos, em colaboração
   com a OpenAI) e que a avaliação é por execução de teste. Confiabilidade: alta — é a página dos
   mantenedores do benchmark. Ressalva importante: **a página não publica placar**, o que foi decisivo
   para descartar os números conflitantes da seção 8.

2. **Terminal-Bench (arXiv 2601.11868)** — `https://arxiv.org/abs/2601.11868`
   Sustenta: 89 tarefas em ambiente de terminal, cada uma com ambiente, solução humana e testes; e o
   dado de que modelos e agentes de fronteira pontuam menos de 65%. Confiabilidade: alta para o
   desenho; o número é auto-reportado pelos autores no resumo.

3. **METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity"
   (10/07/2025)** — `https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/`
   Sustenta: ensaio randomizado, 16 desenvolvedores, 246 tarefas, 19% mais lentos contra 20% de
   percepção de aceleração; e as ressalvas de generalização dos próprios autores. Confiabilidade:
   alta para o desenho (é ensaio randomizado, raro na área), baixa para generalização — amostra
   pequena, população específica, ferramentas de fev–jun/2025.

4. **METR, "We are Changing our Developer Productivity Experiment Design" (24/02/2026)** —
   `https://metr.org/blog/2026-02-24-uplift-update/`
   Sustenta: o experimento foi redesenhado por viés de seleção — recusa de participar sem IA e
   auto-seleção de tarefas —, e os dados brutos novos sugerem aceleração com intervalos largos.
   Confiabilidade: alta, e é autocrítica do próprio grupo, o que aumenta o peso.

5. **Stack Overflow Developer Survey 2025, seção de IA** — `https://survey.stackoverflow.co/2025/ai`
   Sustenta: 84% usam ou planejam usar; 51% dos profissionais usam diariamente; 30,9% usam agentes no
   trabalho; 52% não usam agentes ou preferem ferramentas simples, 38% sem planos; 33% confiam na
   exatidão (3,1% muito) contra 46% que desconfiam; 66% frustrados com soluções quase certas; 45,2%
   com tempo de depuração; 76% recusam IA em deploy e monitoramento. Confiabilidade: alta em escala e
   consistência temporal; ressalva conhecida de auto-seleção da amostra (respondentes do Stack
   Overflow não são a população de desenvolvedores).

6. **Stack Overflow Blog, "Mind the gap: Closing the AI trust gap for developers" (18/02/2026)** —
   `https://stackoverflow.blog/2026/02/18/closing-the-developer-ai-trust-gap/`
   Sustenta: o argumento qualitativo do determinismo (mesma entrada, mesma saída) como causa da
   fricção, e a recomendação de intensificar teste em trabalho assistido por IA. Confiabilidade:
   média — é conteúdo editorial de empresa com interesse no tema, e **o número de confiança diverge
   da própria página de dados** (ver seção 8, item 3).

7. **GitHub Octoverse 2025** —
   `https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/`
   Sustenta: 180M+ desenvolvedores, 36M novos (+23%), 43,2M de PRs merged por mês, 518,7M no ano
   (+29%), 1M+ de PRs criados por coding agents entre maio e set/2025, e a concentração da atividade
   de agente em repositórios maiores, mais antigos e com mais estrelas. Confiabilidade: alta para os
   dados de plataforma (o GitHub mede o próprio tráfego); média para interpretação, porque a empresa
   vende ferramenta de IA.

8. **InfoQ, "GitHub Points to a More Global, AI-Challenged Open Source Ecosystem in 2026"
   (03/03/2026)** — `https://www.infoq.com/news/2026/03/github-ai-2026/`
   Sustenta: a caracterização de "AI slop" e da sobrecarga de mantenedores como negação de serviço à
   atenção humana; 36M de novos desenvolvedores, 5,2M na Índia; ~60% dos projetos de maior
   crescimento em IA. Confiabilidade: média-alta — jornalismo técnico especializado reportando dados
   do GitHub; a frase forte é caracterização, não medida.

9. **Agent Skills — padrão aberto** — `https://agentskills.io/home`
   Sustenta: o formato (pasta com `SKILL.md`, `scripts/`, `references/`, `assets/`), o carregamento em
   três estágios por progressive disclosure, a origem na Anthropic com liberação como padrão aberto, e
   a lista de implementações em agentes concorrentes (Claude Code, Codex, Cursor, Copilot, VS Code,
   Gemini CLI, Junie, OpenCode, OpenHands, Goose, Amp, Factory, Roo Code, Kiro, Tabnine, Letta, Hermes,
   Mistral Vibe, Laravel Boost e outros). Confiabilidade: alta para o formato (é a especificação);
   **baixa para inferir adoção real** — a lista é vitrine de compatibilidade declarada, não medida de
   uso.

10. **Model Context Protocol, "Build with Agent Skills" (spec 2026-07-28)** —
    `https://modelcontextprotocol.io/docs/2026-07-28/develop/build-with-agent-skills`
    Sustenta: skills como camada recomendada sobre MCP, os quatro caminhos de implantação (Streamable
    HTTP remoto como padrão, MCP Apps, MCPB, stdio), e a estrutura `SKILL.md` + `references/`.
    Confiabilidade: alta como documentação normativa do protocolo.

11. **"From Prompt to Process: a Process Taxonomy and Comparative Assessment of Frameworks Supporting
    AI Software Development Agents" (arXiv 2606.04967, 04/06/2026)** —
    `https://arxiv.org/pdf/2606.04967`
    Sustenta: a existência e comparação de frameworks de spec-driven development (OpenSpec, SpecKit,
    BMAD, GSD, SpecFlow, Spec-Kitty) e a conclusão de que a participação humana permanece crítica via
    especificação e supervisão. Confiabilidade: média — preprint, autor único, de natureza
    comparativa e não experimental.

12. **"Harness-of-Harness: Multi-Day Autonomous Software Development with Continual Improvement"
    (arXiv 2609.01481, 01/09/2026)** — `https://arxiv.org/html/2609.01481v1`
    Sustenta: a arquitetura de laços planejamento–desenvolvimento–teste com continuidade de artefato e
    de evidência entre iterações; ganhos de 16,62–22,08 pontos em GameCraft-Bench e 19–29 em
    FrontierSWE; e o estudo de caso de 70 laços. Confiabilidade: média — preprint recente, resultados
    auto-reportados em benchmarks escolhidos pelos autores, sem replicação independente. **Usado só
    para sustentar mecanismo, nunca magnitude.**

13. **"Rethinking Software Engineering for Agentic AI Systems" (arXiv 2604.10599, abril/2026)** —
    `https://arxiv.org/pdf/2604.10599`
    Sustenta: verificação determinística insuficiente para comportamento emergente; necessidade de
    trilha de auditoria de decisões e ações do agente; e a lacuna curricular. Confiabilidade:
    média-baixa — é artigo de posição, autor único, sem dado primário. Usado como formulação de
    problema, não como evidência.

14. **"Agentic Coding Needs Proactivity, Not Just Autonomy" (arXiv 2605.06717, maio/2026)** —
    `https://arxiv.org/pdf/2605.06717`
    Sustenta: o argumento de que autonomia sem antecipação de intenção é insuficiente e de que o
    ponto ótimo é iniciativa mista. Confiabilidade: baixa como evidência (é paper de posição, sem
    estudo com participantes), média como formulação conceitual — sustenta a ressalva sobre a
    especificação subdeterminada no experimento.

15. **"How Well Do Agentic Skills Work in the Wild: Benchmarking LLM Skill Usage in Realistic
    Settings" (arXiv 2604.04323, abril/2026)** — `https://arxiv.org/pdf/2604.04323`
    Sustenta: a lacuna entre avaliação controlada e uso real de skills, e os quatro modos de falha —
    erro de seleção, falha de composição, desalinhamento de contexto, degradação fora da distribuição.
    Confiabilidade: média — preprint com benchmark e código públicos, sem replicação.

16. **"Towards Secure Agent Skills: Architecture, Threat Taxonomy, and Security Analysis"
    (arXiv 2604.02837, 06/04/2026)** — `https://arxiv.org/pdf/2604.02837`
    Sustenta: a taxonomia de ameaças a agent skills — injeção de skill maliciosa, exploração de
    credenciais, controle de acesso, cadeia de suprimento na distribuição. Confiabilidade: média —
    preprint de natureza sistematizadora; sustenta **a existência de categorias de ataque**, não a
    frequência delas no mundo.

17. **Sonar, "Cyber Resilience Act: Navigating speed and security with AI-coding"** —
    `https://www.sonarsource.com/blog/cra-navigating-speed-and-security-with-ai-coding/`
    Sustenta: que o CRA não distingue código escrito por humano de código sugerido por IA ou
    modificado por agente, e as duas datas — 11/09/2026 (reporte de vulnerabilidade ativamente
    explorada) e 11/12/2027 (aplicação plena da maior parte das disposições). Confiabilidade: **baixa
    como fonte, média para os fatos citados** — é fornecedor de análise estática com interesse
    comercial direto no problema. As datas e o princípio de indistinção são verificáveis contra o
    Regulamento (UE) 2024/2847 e por isso foram mantidos; **a estatística de "~40% do código gerado
    contém falhas" foi descartada** (seção 8, item 4). Uma leitura futura deste mapa deve substituir
    esta fonte pelo texto oficial do regulamento.

18. **ABES/IDC, "Estudo do Mercado Brasileiro de Software 2026 — Panorama e Tendências", 2ª parte
    (apresentado em 18/06/2026)** —
    `https://abes.org.br/en/ia-generativa-e-agentes-inteligentes-lideram-os-investimentos-no-mercado-de-software-no-brasil/`
    Sustenta: 40% das médias e grandes empresas brasileiras já usando agentes; 33% com planos formais
    para os 12 meses seguintes; US$ 67,8 bi de investimento em TI e US$ 21,7 bi em software; e a
    defasagem interna — 57% com objetivos claros de IA contra 38% com governança de dados sólida e
    34% com arquitetura de segurança adequada. Confiabilidade: média-alta para o mercado brasileiro
    (21ª edição, metodologia IDC); ressalva de que é associação setorial reportando sobre o próprio
    setor, e de que "usar agentes" no questionário corporativo não significa agente de código.

19. **Stanford Digital Economy Lab, "Canaries in the Coal Mine" (dados ADP até jun/2026, revisão de
    ago/2026)** — `https://digitaleconomy.stanford.edu/publications/canaries-in-the-coal-mine/`
    Sustenta: emprego de jovens de 22 a 25 anos em ocupações expostas a IA 19% abaixo do
    contrafactual, por redução de contratação e não por demissão, com emprego estável ou crescente
    onde a IA complementa; e a ressalva dos autores de que são indicadores descritivos e não
    estimativas causais. Confiabilidade: alta para o dado (folha de pagamento administrativa, não
    pesquisa declarativa); a ressalva causal é dos próprios autores e está preservada no corpo do
    texto.

### Consultada e NÃO usada

- Agregadores de placar de SWE-bench (leaderboard.steel.dev, morphllm.com/swe-bench-pro) — números
  mutuamente incompatíveis, sem concordar com a página oficial. Descartados (seção 8, item 1).
- Posts de blog sobre queda de 67% em vagas de entrada — métrica e recorte diferentes dos atribuídos
  à fonte acadêmica invocada. Descartados em favor de [19] (seção 8, item 2).
- arXiv 2602.21193 (engenharia de dados para capacidades de terminal) — **não aberto**, não citado.

## 12. Anexo — o levantamento bruto

### 12.1 A entrevista

A skill exige entrevista antes de pesquisar. Nesta rodada não houve interlocutor humano disponível;
os parâmetros vieram pré-declarados na abertura da execução, e é assim que devem ser lidos — como
resposta dada, não como suposição do agente. **Não houve rodada de confirmação, e isso é um desvio
declarado do §1 da skill.** Valores registrados:

| Campo | Valor | Origem |
|---|---|---|
| tema | Programação agêntica: o desenvolvedor vira orquestrador (tema 1 de 19; família "Agentes") | declarado |
| recorte | global, com nota sobre o Brasil | declarado |
| horizonte | 2031 | declarado |
| público | quem projeta mídia e interação | declarado |
| região | global | declarado |
| objetivo | mapa de futuro para o movimento 2 da disciplina, a partir da inovação e não do setor | declarado |
| exclusões | o que já é comum em produto de massa (régua da disciplina); nenhuma outra | declarado |
| viés desejado | neutro | declarado |
| profundidade | três ordens | declarado |
| disrupção suspeita | nenhuma — descobrir | declarado |
| ideias óbvias a excluir | as que serviriam para qualquer tema | declarado |
| critério de mudança de ideia | adoção já passada da maioria inicial (Rogers), ou tecnologia que não rompe nada | declarado |
| autor | hfm | declarado |
| skill | futurizacao-hfm | declarado |

### 12.2 Consultas feitas

Buscas (WebSearch):
1. `SWE-bench Verified 2026 coding agent results leaderboard`
2. `Stack Overflow Developer Survey 2025 AI agents adoption trust`
3. `METR randomized controlled trial developers AI tools slower 19% 2025`
4. `Model Context Protocol adoption 2026 standard agent skills specification`
5. `GitHub Octoverse 2025 AI generated code pull requests review bottleneck`
6. `Terminal-Bench 2 results 2026 agent harness benchmark`
7. `Brasil desenvolvedores IA agentes 2026 pesquisa adoção mercado software`
8. `"spec-driven development" agentic coding 2026 specification as source of truth`
9. `entry-level software engineering jobs decline 2026 junior developers AI hiring data`
10. `Cyber Resilience Act 2026 software liability AI generated code responsibility`
11. `arxiv 2026 multi-agent software development orchestration verification artifacts harness`

Páginas abertas (WebFetch): as 19 da seção 11, mais `https://www.swebench.com/verified.html` (que
confirmou a ausência de placar) e `https://digitaleconomy.stanford.edu/publications/canaries-in-the-coal-mine/`.

Buscas que **não** deram em nada aproveitável:
- Números de adoção de agentes de código no Brasil especificamente (o dado da ABES é corporativo
  amplo, não de desenvolvimento de software). **Lacuna real** — a nota sobre o Brasil neste mapa é
  mais fraca do que eu gostaria.
- Dado longitudinal comparável de 2026 sobre uso de agentes por desenvolvedores; o survey mais
  recente com metodologia comparável continua sendo o de 2025.
- Qualquer caso público de incidente em produção atribuído a agente autônomo com responsabilização
  nomeada. **Nenhum encontrado** — o que é por si um dado: o wildcard da seção 6 ainda não tem
  precedente, e por isso permanece wildcard.

### 12.3 Classificação de cada achado

**Maduro** (fica na seção 3, não é raiz): autocompletar de IDE; chat que explica código; assistente
de IA de uso geral (84% de adoção [5] é adoção estabilizada, não emergente); CI/CD como
infraestrutura.

**Emergente**: agentes que fecham o laço (30,9% de uso no trabalho [5]); Agent Skills como formato
(padrão aberto de dezembro de 2025, com adoção cruzada declarada [9]); spec-driven development [11];
orquestração multi-agente [12]; observabilidade de agente.

**Disruptivo**: os três da seção 4. Critério aplicado, conforme §2 da skill — cada um precisa ter
sinal observável, ruptura de relação/papel/custo, condição ainda não resolvida e cadeia causal
plausível:

| Candidato | Sinal observável | Ruptura | Não resolvido | Veredito |
|---|---|---|---|---|
| Agente fecha o laço | 1M+ PRs de agente em 5 meses [7]; benchmarks de execução [1][2] | papel: executor → encomendante | <65% em terminal realista [2] | **raiz** |
| Instrução versionada | formato aberto multi-fabricante [9][10] | tácito → artefato distribuível | falha fora da bancada [15]; procedência [16] | **raiz** |
| Responsabilidade ≠ autoria | +29% PRs [7]; CRA vigente 11/09/2026 [17] | quem responde deixa de ser quem escreveu | sem jurisprudência; revisão sem forma nova | **raiz** |
| Multi-agente (Arq/Constr/Revisor) | ganho de benchmark [12] | — (é modo de organizar D1) | — | **rebaixado a 2ª ordem** |
| "Modelos melhoram" | — | nenhuma | — | **recusado: extrapolação** |
| Geração de UI por prompt | existe | fora do recorte (tema vizinho) | — | **fora de escopo** |

### 12.4 Separação fato / inferência / hipótese

**Fatos apoiados por fonte aberta** (todos com referência no corpo): 84% / 51% / 30,9% / 52% / 38% /
33% / 46% / 66% / 45,2% / 76% [5]; 19% mais lentos, 16 devs, 246 tarefas [3]; redesenho do
experimento e viés de seleção [4]; 180M devs, 43,2M PRs/mês, 518,7M/ano +29%, 1M+ PRs de agente,
concentração em repos grandes [7]; 500 instâncias [1]; 89 tarefas, <65% [2]; formato e três estágios
de carregamento, origem e lista de implementações [9]; quatro caminhos de implantação [10]; ganhos de
benchmark e 70 laços [12]; quatro modos de falha de skills [15]; categorias de ameaça [16]; datas
11/09/2026 e 11/12/2027 e indistinção humano/IA no CRA [17]; 40% / 33% / 57% / 38% / 34% e US$ 67,8
bi / US$ 21,7 bi [18]; 19% abaixo do contrafactual para 22–25 anos [19].

**Inferências causais explícitas** (minhas, argumentadas, não medidas):
- Que o descolamento entre autoria e responsabilidade **decorre** da conjunção de volume [7][8] com
  regulação [17]. Cada peça é fato; a conjunção é minha leitura.
- Que a migração da interface para o terminal **decorre** da necessidade de execução, e não de moda.
- Que o `progressive disclosure` [9] é o que torna skills economicamente viáveis em escala — é
  mecanismo declarado na especificação, mas a consequência econômica é inferência minha.
- Que a inobservabilidade da linha de base [4] **tornará** a pergunta de produtividade irrespondível.
  Inferência forte a partir de um único dado.

**Hipóteses prospectivas** (tudo na seção 5 com prazo ≥ 2029, mais os cenários da seção 9). Confiança
proporcional à incerteza, e majoritariamente `baixa` na terceira ordem — o que é a resposta esperada,
não uma falha do mapa.

**O que explicitamente NÃO foi convertido**: a existência de ferramenta **não** foi tratada como
evidência de eficácia. A lista de 40+ produtos compatíveis com Agent Skills [9] sustenta que o
formato foi adotado por fabricantes — **não** sustenta que times o usem, e muito menos que funcione.
Onde o mapa afirma adoção, a fonte é pesquisa com desenvolvedores [5] ou dado de plataforma [7].

### 12.5 Efeitos gerados e depois removidos ou rebaixados

Removidos:
- *"Linguagens de programação tornam-se irrelevantes porque o agente escreve em qualquer uma"* —
  contradito pelo próprio Octoverse, em que TypeScript **cresceu** e assumiu o primeiro lugar com
  +66,6% de contribuidores [7]. Se a linguagem fosse indiferente, não haveria migração concentrada.
- *"O emprego de desenvolvedor encolhe N% até 2031"* — nenhuma fonte aberta sustenta um número
  agregado prospectivo, e [19] é explicitamente descritivo e não causal. Substituído por e6, sobre a
  **porta de entrada**, que é o que o dado sustenta.
- *"A revisão de código desaparece, substituída por agentes revisores"* — plausível e sem sinal
  observável de adoção; teria sido efeito bonito e infundado. Preservado apenas como mecanismo dentro
  do contra-wildcard da seção 6.
- *"Empresas de software perdem valor de mercado"* — extrapolação econômica sem fonte. Reduzido a
  e2.2.1, com `confianca: baixa` e verbo mais fraco ("desloca-se" em vez de "perde").
- *"Todo repositório terá um agente residente em CI"* — sem evidência; a concentração observada em
  repositórios grandes [7] sugere o contrário.

Rebaixados após a contestação da seção 7:
- e2.2, de `alta` para `media` (dado de concentração em repos grandes [7]).
- e2.2.1, para `baixa`.
- e4.2, para `baixa` (é inferência de mercado, sem sinal além de um caso).
- e6.2, de `media` para `baixa` (prática de contratação muda devagar e não tem sinal).

Cadeias **interrompidas por falta de evidência** (§3 da skill exige registrar):
- **Ramo de custo/energia**: se agentes rodando em paralelo multiplicam consumo computacional por
  tarefa, há efeito de segunda ordem sobre custo e sobre ambiente. Não encontrei dado aberto de custo
  por tarefa aceita. **Cadeia cortada na primeira ordem.**
- **Ramo de acessibilidade**: se o agente torna programação acessível a quem não digita
  confortavelmente ou não lê código, há efeito social relevante. Nenhuma fonte aberta encontrada;
  seria também fronteira com o tema de acessibilidade. **Cortada.**
- **Ramo de idioma e periferia**: se a instrução versionada é escrita em inglês por padrão, quem
  programa em outra língua herda a prática de quem a escreveu. Especulativo, sem dado. **Cortada** —
  mas é o ramo que eu mais gostaria de ter podido sustentar, dado o recorte brasileiro.
- **Ramo de propriedade intelectual**: código gerado, autoria, licenciamento de contribuição em open
  source. Fronteira com outro debate e sem fonte aberta nesta rodada. **Cortada.**

### 12.6 Limitações desta rodada

1. **Sem entrevista real.** §1 da skill pede rodadas até confirmação explícita. Não houve
   interlocutor. Os parâmetros são declarados, não confirmados.
2. **Leitura por extração, não integral.** As páginas foram abertas por ferramenta que converte e
   resume o conteúdo. Para os preprints do arXiv ([11]–[16]), isso significa que **li resumo
   estruturado e não o texto completo**: método, amostra e limitações internas desses trabalhos não
   foram auditados por mim. É a limitação mais séria da seção 11, e por isso nenhum preprint sustenta
   sozinho um efeito `forte`.
3. **Assimetria de fonte.** Três fontes são de empresas com interesse comercial direto no tema
   ([6], [7] em parte, [17]). A mais frágil é [17]: fornecedor de ferramenta de segurança descrevendo
   uma regulação. As datas do CRA deveriam ser reconfirmadas contra o Regulamento (UE) 2024/2847
   antes de qualquer uso consequente.
4. **Números de pesquisa declarativa.** [5] e [18] são auto-relato. "Usar agentes" significa coisas
   diferentes para respondentes diferentes, e no caso de [18] o respondente é corporativo, não
   desenvolvedor — a comparação entre os 30,9% de [5] e os 40% de [18] **não é válida**, e não foi
   feita no corpo do texto.
5. **Recorte Brasil fraco.** Uma fonte só [18], corporativa e não específica de desenvolvimento.
6. **Preprints sem revisão por pares.** Seis dos dezenove ([11]–[16]). Nenhum sustenta magnitude.
7. **Viés de janela temporal.** Quase tudo é de 2025–2026. Um mapa com horizonte 2031 construído
   sobre dezoito meses de evidência tem pouca profundidade histórica para distinguir tendência de
   ciclo — que é exatamente o alerta do Hype Cycle registrado no ESTUDO.md desta skill, e que aqui
   se aplica ao próprio documento.
8. **Sem alegação clínica ou de saúde.** O tema não envolve saúde, deficiência ou neurodivergência;
   a ressalva correspondente da skill não se aplicou nesta rodada.

### 12.7 Nota de método

Ordem de execução seguida: entrevista (parâmetros declarados) → pesquisa e abertura de fontes →
classificação maduro/emergente/disruptivo → identificação das raízes por teste explícito (tabela
12.3) → derivação dos três níveis → contestação adversarial (§4) → rebaixamento e remoção de efeitos
→ redação no formato da disciplina.

**A contestação alterou o mapa de fato**, e é importante que isso fique registrado: quatro efeitos
foram rebaixados de confiança, cinco foram removidos, um candidato a disrupção-raiz foi rebaixado a
segunda ordem, e dois números atraentes foram descartados por não sobreviverem à abertura da fonte
([1] e [19]). A versão anterior à seção 7 era mais confiante e pior.

O **Hype Cycle** foi usado apenas como suspeita metodológica — para perguntar se o discurso está
adiantado em relação ao uso —, nunca para datar, conforme o ESTUDO.md. A resposta a essa pergunta,
neste tema, é **sim**: 84% de adoção de assistentes contra 30,9% de agentes [5] é exatamente a forma
de um discurso adiantado em relação à prática. O **Quadrante Mágico** não foi usado.
