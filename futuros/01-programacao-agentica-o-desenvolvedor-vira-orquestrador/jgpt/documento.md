---
tema: "Programação agêntica: o desenvolvedor vira orquestrador"
slug: programacao-agentica-o-desenvolvedor-vira-orquestrador
autor_login: jgpt
zona_de_interesse: Agentes
data: 2026-09-18
horizonte: 2031
publico: "quem projeta mídia e interação"
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 14
efeitos_ordem_3: 14
tecnologias_citadas: [Claude Code, Codex CLI, Gemini CLI, Cursor, Cline, Aider, OpenCode, GitHub Copilot CLI, JetBrains Junie, Agent Skills, MCP, Agent Plugins, GitHub Spec Kit, AWS Kiro, Terminal-Bench, SWE-bench, git worktree, OpenHands]
fontes: 11
confianca: media
experimento: "Banco de provas de harness: uma só especificação, vários harnesses, mesmo modelo — medir o quanto da diferença de resultado é do harness e não do modelo."
skill_usada: futurizacao-jgpt
publico_ok: false
---

## 1. Resumo

Escrever código deixou de ser a parte cara. Agentes que leem o repositório, editam vários
arquivos, rodam os testes e abrem o *pull request* já operam em produção, e a evidência de
2026 é que o ganho aparece — e vaza. A telemetria da Faros AI sobre 22 mil desenvolvedores
mostra vazão subindo (épicos por pessoa +66%) com o tempo mediano de revisão subindo 441,5%,
bugs por pessoa +54% e 31,3% mais PRs entrando sem nenhuma revisão. O gargalo mudou de lugar:
saiu da mão que escreve e foi para a atenção que verifica e para a pessoa que assina. Ao mesmo
tempo nasceu uma camada de infraestrutura que quase ninguém previu — *skills* e *harnesses*,
instruções empacotadas em formato aberto que dezenas de agentes diferentes já leem. Isso
transforma prompt em software versionado e portável. Este mapa trata do ofício: o que acontece
com o trabalho de programar, com a formação de quem entra agora, com a economia do software
abundante e com a pergunta jurídica que está chegando primeiro que a técnica — quem responde
pelo código que ninguém leu. Horizonte 2031.

## 2. O tema

Programação agêntica é o arranjo em que um agente de código sustenta uma sessão longa com
ferramentas — shell, editor, testes, git — e fecha um ciclo de trabalho inteiro: entende o
pedido, planeja, edita, executa, corrige e entrega. Não é autocompletar melhor. O autocompletar
de IDE devolve um trecho para a pessoa aprovar com Tab; o agente devolve um PR. A diferença é
quem executa.

Isso encosta em mídia e interação por três lados, e nenhum deles é o óbvio "a IA escreve o
código do seu app".

O primeiro é que **a interface do trabalho mudou de lugar**. O editor de texto era o objeto
central da profissão há quarenta anos; o terminal voltou, e com ele uma interação conversacional,
assíncrona e de turnos longos, em que a pessoa não vê o trabalho acontecer — vê um relatório
depois. Projetar essa interação (quando o agente pergunta, quando ele para, o que mostra do que
fez, como se aprova algo que não se leu) é problema de design, não de compilador.

O segundo é que **surgiu um gênero de artefato novo**: a *skill*. Uma pasta com um `SKILL.md`,
metadados e instruções em prosa, que o agente carrega sob demanda. É documentação que executa.
Escrever uma skill é uma atividade híbrida entre redação técnica, design de serviço e
programação — e é exatamente o tipo de objeto que uma disciplina de mídia e interação deveria
saber ler.

O terceiro é que **o software fica barato de produzir e caro de confiar**. Quando o custo de
fazer cai, a escassez migra para outro lugar. Para quem projeta mídia, essa migração é a notícia:
muda o que vale a pena construir, quanto tempo uma coisa dura, e o que é um produto.

Merece mapa de futuro e não estado-da-arte porque a parte interessante não é o que os agentes
conseguem fazer hoje — isso muda a cada trimestre e envelhece em semanas. A parte interessante
é a cadeia de consequências que já está medida no começo e ainda não chegou no fim: se a revisão
virou o gargalo em 2026, o que ela vira em 2031? Se a tarefa de entrada da profissão é a que o
agente faz melhor, quem é sênior daqui a seis anos? Essas perguntas não se respondem lendo
changelog.

## 3. Onde isso está hoje

### O que já existe e funciona

**A adoção do assistente é quase universal; a do agente, não.** A Pesquisa de Desenvolvedores
do Stack Overflow 2025 registra 84% usando ou planejando usar ferramentas de IA e 51% dos
profissionais usando diariamente. Mas agentes especificamente: **14,1% usam diariamente**, 30,9%
usam semanal/mensalmente ou planejam, e **37,9% não têm nenhum plano de adotar**. Ou seja: em
2025 o agente ainda não era maioria nem perto disso [1].

**O ganho de vazão é real e mensurável.** O relatório da Faros AI, com dois anos de telemetria
de 22 mil desenvolvedores e mais de 4 mil equipes, mede entre o período de menor e o de maior
adoção de IA dentro de cada organização: épicos por desenvolvedor +66%, vazão de tarefas +33,7%,
taxa de merge de PR +16,2%. A taxa de aceitação de código gerado subiu de 20% para 60% [5].

**As ferramentas fecham o ciclo de verdade.** O Terminal-Bench, publicado como benchmark de
agentes em ambientes de terminal, usa 89 tarefas curadas à mão, cada uma com ambiente próprio,
solução humana escrita e testes de verificação — coisas que exigem fluxo ponta a ponta, não
resposta de uma tacada. Na publicação, os autores registram que modelos e agentes de fronteira
ficavam **abaixo de 65%** [3].

**A camada de skill/harness virou padrão aberto e foi adotada rápido.** O formato Agent Skills —
uma pasta com `SKILL.md`, opcionalmente `scripts/`, `references/`, `assets/`, carregado por
*progressive disclosure* em três etapas (descoberta pelo nome+descrição, ativação, execução) —
foi criado pela Anthropic e liberado como padrão aberto. A vitrine oficial em setembro de 2026
lista dezenas de clientes lendo o mesmo formato, entre eles Claude Code, ChatGPT & Codex,
Gemini CLI, GitHub Copilot, VS Code, Cursor, JetBrains Junie, OpenCode, OpenHands, Goose, Kiro,
Roo Code, Amp, Factory, Databricks, Snowflake, Mistral Vibe, Tabnine e Hermes Agent [6]. Isso é
incomum: um formato de instrução que atravessa fornecedores rivais.

**O volume de agente no ecossistema aberto já é visível.** O Octoverse 2025 do GitHub registra
mais de 1 milhão de PRs criados com envolvimento de agentes de código entre maio e setembro de
2025, num contexto de 43,2 milhões de PRs mergeados por mês e quase 1 bilhão de commits no ano.
E 80% dos novos desenvolvedores usando Copilot na primeira semana [7].

**Ensino já está reagindo.** Brown ofereceu na primavera de 2026 o *Agentic Studio*, disciplina
experimental em que equipes fazem projetos reais com Claude Code — incluindo um exercício de
reprogramar Tetris de cabeça para baixo, escolhido justamente porque expõe os limites da
ferramenta. A conclusão dos professores, na matéria da própria universidade: é preciso
"começar pelos fundamentos do que faz um bom programa", e não pela codificação [8].

### O que existe e não funciona

**A confiança caiu enquanto o uso subia.** No mesmo levantamento do Stack Overflow, apenas 3,1%
"confiam muito" na precisão da saída, 45,7% desconfiam, e a queixa nº 1 (66%) é "soluções quase
certas, mas não exatamente" — que produz a queixa nº 2: "depurar código gerado por IA toma mais
tempo" (45,2%) [1].

**A produtividade percebida não bate com a medida.** O ensaio randomizado da METR com 16
desenvolvedores experientes de repositórios grandes (média de 22 mil estrelas, 1 milhão de
linhas), 246 tarefas reais sorteadas entre permitir e proibir IA: os desenvolvedores levaram
**19% mais tempo** com IA. Antes esperavam 24% de aceleração; depois de terem sido mais lentos,
ainda achavam que tinham acelerado 20%. Os próprios autores fazem questão de listar o que o
estudo **não** prova: não prova que IA não acelera a maioria dos desenvolvedores, nem que o
resultado vale fora daquele grupo e daqueles repositórios, nem que modelos futuros não mudariam
o quadro [2].

**O ganho vaza na jusante.** Ainda na Faros AI: tempo mediano de revisão **+441,5%**, tempo até
a primeira revisão +156,6%, bugs por desenvolvedor +54% (contra 9% no relatório de 2025), razão
incidentes/PR +242,7%, *churn* de código +861%, e PRs mergeados sem revisão nenhuma +31,3% [5].
O nome que o relatório dá a isso é "chicote da aceleração". A leitura do DORA 2025 é da mesma
família e mais curta: a IA é **amplificadora** — magnifica as forças e as fraquezas que a
organização já tinha, e o retorno vem do sistema organizacional, não da ferramenta [4].

**A porta de entrada está mais estreita.** O estudo de Brynjolfsson, Chandar e Chen, na versão de
agosto de 2026, com microdados de folha de pagamento da ADP: o emprego de trabalhadores de 22 a
25 anos em ocupações muito expostas à IA está cerca de **19% abaixo** de onde estaria se tivesse
acompanhado os pares menos expostos — lacuna que era 15% em julho de 2025. Em números absolutos,
esse grupo caiu ~11% entre nov/2022 e jun/2026 enquanto os pares menos expostos cresceram 10%.
Os autores não afirmam deslocamento generalizado, e listam ressalvas: parte dos padrões antecede
a IA generativa, e as lacunas encolhem ao controlar por educação [9].

### Quem está construindo

Fabricantes de agente de terminal e IDE (Anthropic/Claude Code, OpenAI/Codex, Google/Gemini CLI,
GitHub/Copilot, Cursor, JetBrains/Junie, Mistral/Vibe), projetos abertos de harness e paralelismo
(OpenCode, OpenHands, Goose, Roo Code, Mux, Emdash, pi), plataformas de agente em nuvem (Factory,
Ona, Superconductor), e uma camada de padrões que está sendo escrita por um consórcio incomum —
o formato de skills mantido em aberto com contribuição do ecossistema [6], e propostas de
empacotamento conjunto de skills + servidores MCP. Em paralelo, cresce o campo da
**especificação como unidade de trabalho** (GitHub Spec Kit, AWS Kiro) e o de **inspeção da
sessão do agente**.

### Diagnóstico de maturidade (Hype Cycle só como heurística, nunca como previsão)

Separando cobertura de demonstração de cobertura de adoção: assistente de código e chat sobre
código estão em **cobertura de adoção** (pesquisa com dezenas de milhares de respondentes,
telemetria de milhões de PRs). Agente que fecha ciclo está **entre as duas** — já tem telemetria
de uso real (Faros, Octoverse) mas a base instalada ainda é minoria declarada (14,1% de uso
diário em 2025). Multi-agente coordenado e mercado de skills estão em **cobertura de
demonstração**: muito anúncio, catálogo crescendo, nenhum número de adoção auditado que eu tenha
conseguido abrir. A curva não diz quando cada um chega no outro estágio, e não é usada aqui para
estimar prazo.

## 4. As disrupções-raiz

Três candidatas passaram no teste "o que isso rompe, e por que agora e não há cinco anos".
Duas foram rejeitadas e estão na seção 6.

### D1 — O agente fecha o ciclo dentro do repositório

**O que rompe.** A restrição que cai é **mão de obra por unidade de mudança**. Até aqui, toda
alteração de software passava obrigatoriamente por uma pessoa digitando — o autocompletar
encurtava a digitação, não a eliminava do caminho crítico. O agente que lê o repositório, edita
vários arquivos, roda os testes, lê o erro, corrige e abre o PR retira a pessoa do **caminho de
execução** e a coloca no de **especificação e aceite**. O uso qualitativamente novo não é "código
mais rápido": é que a quantidade de software produzida deixa de ser proporcional ao número de
pessoas na equipe.

**Por que agora e não há cinco anos.** O limiar é composto e datável. Primeiro, modelos que
sustentam sessões longas com chamada de ferramenta sem se perder — o Terminal-Bench existe
justamente porque, antes, medir isso não fazia sentido: as tarefas exigem fluxo ponta a ponta em
contêiner, com verificação por testes, e agentes de fronteira ficavam abaixo de 65% quando o
benchmark foi publicado [3]. Segundo, a taxa de aceitação do que o agente produz saiu de 20%
para 60% na telemetria da Faros [5] — abaixo de um certo patamar de aceitação, revisar custa mais
que escrever e ninguém adota. Terceiro, o volume já é mensurável no ecossistema aberto: mais de
1 milhão de PRs com agente em cinco meses de 2025 [7].

**O que falta para se concretizar por inteiro.** Falta a jusante. Os mesmos dados que mostram o
ganho mostram que ele vaza: revisão +441,5%, bugs +54%, incidentes/PR +242,7%, 31,3% mais PRs
sem revisão [5]. E o ensaio da METR mostra que, em código maduro e complexo, com pessoas que
conhecem o repositório há anos, o saldo pode ser negativo (-19% de velocidade) sem que ninguém
perceba [2]. Enquanto a verificação não tiver um ganho da mesma ordem, D1 entrega vazão e cobra
em instabilidade.

### D2 — A instrução vira artefato de software portável (skill / harness)

**O que rompe.** A restrição que cai é **portabilidade e propriedade do método**. Prompt era
texto efêmero, preso a uma janela de conversa e a um fornecedor; conhecimento de processo morava
na cabeça das pessoas ou em wiki que ninguém lê. O formato de skill torna a instrução um objeto
de primeira classe: pasta versionável em git, com metadados, scripts e referências, carregada sob
demanda por *progressive disclosure*, e — o ponto decisivo — **legível por agentes de fabricantes
concorrentes** [6]. Isso é qualitativamente novo: método de trabalho vira artefato distribuível.

**Por que agora e não há cinco anos.** O limiar é de padronização, e é de 2026. Há cinco anos não
havia sequer o objeto "agente que carrega instrução sob demanda"; há dois anos, cada fabricante
tinha o seu formato incompatível. O que mudou foi a publicação do formato como especificação
aberta e a adesão cruzada: um mesmo `SKILL.md` lido por Claude Code, Codex, Gemini CLI, Copilot,
VS Code, Cursor, Junie, OpenCode, Goose, Kiro, Databricks, Snowflake e dezenas de outros [6]. O
custo de escrever método para agente deixou de ser um custo afundado por fornecedor.

**O que falta.** Falta tudo que um ecossistema de pacotes leva uma década para construir:
governança de versão, critério de qualidade, resolução de conflito entre skills, e um modelo de
segurança para um artefato cujo conteúdo executável é **prosa em linguagem natural** — que
nenhum analisador estático lê. Falta também evidência pública de que harness bem escrito produz
resultado melhor de forma reprodutível; hoje isso é alegação de quem vende, não medição de quem
usa. É exatamente a lacuna que o experimento da seção 10 ataca.

### D3 — A responsabilidade descola da autoria

**O que rompe.** Cai uma restrição **jurídica e organizacional**, não técnica: a suposição,
implícita em todo o ofício, de que quem escreve o código é quem responde por ele. Quando 31,3%
mais PRs entram sem revisão [5] e a aceitação do gerado chega a 60%, a pessoa que assina o commit
frequentemente não leu o que assinou. Isso não é um detalhe de processo; é a base de como se
atribui culpa, se contrata, se audita e se segura software.

**Por que agora.** Porque a resposta jurídica começou a chegar antes da resposta técnica. A
Califórnia colocou em vigor em 1º de janeiro de 2026 dispositivo que **impede usar a operação
autônoma do sistema como defesa** contra responsabilização por dano; o Colorado tem exigência de
avaliação de impacto e gestão de risco para sistemas de alto risco a partir de junho de 2026; o
NIST abriu iniciativa de padrões de agente em fevereiro de 2026 com pilar explícito de segurança
e avaliação; e a IMDA de Singapura publicou em maio de 2026 documento de discussão sobre
responsabilidade legal por agentes. *(Este parágrafo é o único do documento sustentado apenas em
resultado de busca — ver seção 8: não abri esses instrumentos e não os cito como fonte lida.)*

**O que falta.** Falta o elo probatório. O problema apontado repetidamente é que, numa cadeia com
fornecedor de modelo, fornecedor de harness, empresa que configurou e pessoa que aprovou o
escopo, provar **qual** elo causou o dano é difícil — e sem isso a regra de responsabilidade não
tem onde morder. É essa falta que faz da inspeção da sessão do agente um candidato a
infraestrutura, e não a curiosidade que é hoje.

**Ressalva honesta.** D3 é parcialmente derivada de D1: sem agente que executa, não há descolamento
de autoria. Entra como raiz porque o limiar que a habilita (a regra jurídica em vigor) é de outra
natureza e tem relógio próprio — pode acelerar ou travar independentemente do progresso técnico.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "O agente fecha o ciclo dentro do repositório"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "O custo marginal de produzir uma unidade de código cai abaixo do custo de decidir se ela deve existir."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "A revisão substitui a escrita como gargalo e passa a consumir a maior parte da atenção sênior da equipe."
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "Auditoria de código torna-se serviço vendido por terceiros, que emitem parecer sobre software que o contratante nunca leu."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "Repositórios passam a conter trechos extensos que nenhum humano da equipe leu, e a leitura vira amostragem em vez de cobertura."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "A dívida técnica passa a ser medida em intenção não registrada, não em código ruim: o que se perde é o porquê, não o como."
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "O número de projetos cresce mais rápido que o número de pessoas, porque o piso de esforço para começar um projeto desaba."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Software de uso único e descartável, feito para uma aula, uma reunião ou um evento, torna-se formato corriqueiro como o slide é hoje."
            sinal: medio
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Quem projeta mídia e interação passa a desenhar gêneros de software efêmero, com convenções próprias de descarte em vez de manutenção."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "A escassez migra da produção para a distribuição e a atenção: existe mais software do que gente disposta a experimentá-lo."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "O valor de uma empresa de software desloca-se do artefato para o acesso: base instalada, dados proprietários, contrato e marca."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "A porta de entrada da profissão fecha exatamente na tarefa que o agente faz melhor: a implementação pequena e bem especificada."
        sinal: forte
        prazo: 2027
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "A formação inverte a ordem e passa a ensinar a ler e criticar código antes de ensinar a escrevê-lo."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Cursos de computação passam a avaliar a especificação e o parecer crítico como artefato entregue, no lugar do programa funcionando."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "Forma-se um vão de senioridade: falta a coorte intermediária que antes se produzia fazendo as tarefas agora automatizadas."
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "Empresas passam a pagar para fabricar dificuldade: treinos em ambientes onde o agente é desligado de propósito para gerar experiência."
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: "A instrução vira artefato de software portável (skill / harness)"
    efeitos:
      - id: e4
        ordem: 1
        efeito: "A instrução passa a ser tratada como software: versionada em git, testada, distribuída e licenciada."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "Surge um mercado de skills com as patologias conhecidas dos gerenciadores de pacote: dependência transitiva, abandono e typosquatting."
            sinal: medio
            prazo: 2028
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Ataques de cadeia de suprimento passam a se propagar por instrução em prosa, e a auditoria de segurança precisa ler texto em vez de analisar código."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "O conhecimento tácito de um estúdio — como se nomeia, como se testa, o que nunca se faz — passa a existir em arquivo legível por máquina."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "Método de trabalho vira ativo transacionável: compra-se o harness de um estúdio como hoje se compra sua biblioteca."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "O harness, e não o modelo, passa a explicar a maior parte da diferença de resultado entre duas equipes que usam o mesmo agente."
        sinal: medio
        prazo: 2027
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "Trocar de modelo barateia, porque quem investiu no harness muda de fornecedor sem reescrever o processo de trabalho."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "O poder de barganha desloca-se do fabricante de modelo para quem detém o harness e os dados de avaliação."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "Engenharia de harness aparece como função nomeada e contratada, separada de quem escreve o produto."
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "O design da interação do agente — o que ele pergunta, quando para, o que mostra do que fez — vira disciplina de projeto e não de engenharia."
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: "A responsabilidade descola da autoria"
    efeitos:
      - id: e6
        ordem: 1
        efeito: "A assinatura humana sobre uma mudança passa a ser exigida como ato formal, explicitamente separado da autoria do código."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "A procedência do artefato — qual agente, qual modelo, qual skill, sob qual instrução — vira metadado obrigatório em setores regulados."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "Ferramentas de inspeção da sessão do agente deixam de ser curiosidade de desenvolvedor e viram infraestrutura de conformidade."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "Seguro de responsabilidade para software produzido por agente aparece como produto, com prêmio atrelado ao harness e ao processo usados."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "A seguradora, e não o cliente, passa a ditar na prática o processo de desenvolvimento de quem contrata."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: "O limite prático da autonomia deixa de ser a capacidade do agente e passa a ser quanto risco alguém aceita assinar."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "Equipes adotam faixas de autonomia por tipo de mudança: total no descartável, nenhuma no que toca dinheiro, saúde ou dado pessoal."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "A arquitetura passa a ser desenhada para isolar o que um agente pode alterar sozinho, e a fronteira de raio de dano vira decisão de projeto."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: "Projetos abertos passam a recusar contribuição de agente por política declarada, porque o custo de triagem excede o valor esperado."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: "Abre-se uma separação entre repositórios de humanos e repositórios de agentes, com regras de entrada e sistemas de reputação distintos."
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o bloco não diz sozinho

**A roda tem um centro de gravidade que o YAML esconde: quase tudo converge para a verificação.**
e1.1, e1.2, e6, e7.2 e e3.1 são a mesma pressão vista de ângulos diferentes — sobra código,
falta quem responda por ele. Isso é um achado, não uma redundância: significa que a variável que
mais move este mapa entre 2026 e 2031 **não é a capacidade do agente**, é o custo de confiar no
que ele fez. Se esse custo cair (por ferramenta de inspeção, por verificação formal, por
convenção de aceite), metade dos efeitos negativos evapora e e2 acelera. Se não cair, a adoção
trava num teto imposto por apetite de risco, exatamente como diz e7.

**A ordem dos prazos não é a ordem da importância.** e4 (instrução como software) é o efeito de
maior confiança e prazo mais curto, porque já aconteceu — e é o menos discutido publicamente.
e3.2 (o vão de senioridade) é o de menor confiança e maior consequência, porque só se confirma
quando for tarde: não existe medição possível de "coorte que não se formou" antes de ela fazer
falta.

**Há um efeito que a roda registra e o discurso da área nega:** e2.2. Todo o entusiasmo com
abundância de software assume que a demanda absorve a oferta. A roda diz que não — se produzir
fica trivial, a escassez muda de lugar, e o lugar para onde ela vai é justamente o terreno de
quem projeta mídia e interação.

**E há uma assimetria de reversibilidade.** Os efeitos de D1 e D2 são difíceis de desfazer
(ninguém desinventa um formato aberto, ninguém volta a digitar o que já delega). Os de D3 são
decisões, e decisões se revogam — uma eleição, um lobby ou um caso judicial mal resolvido muda a
subárvore inteira em dois anos.

## 6. Sinais fracos e wildcards

### Candidatas rejeitadas na Etapa 2

**Desenvolvimento guiado por especificação (*spec-driven development*) — rejeitada como raiz,
mantida como sinal.** É prática relevante e crescente (GitHub Spec Kit, AWS Kiro, e variantes em
praticamente todo agente comercial), mas não passa no teste: não há limiar concreto de custo,
latência, acesso ou direito que tenha caído. É **resposta organizacional** a D1, não causa dela —
escrever especificação antes de implementar já era possível e recomendado em 1970. O que mudou
foi o retorno de fazê-lo, não a possibilidade. Fica aqui porque, se a prática pegar, ela muda a
distribuição dos efeitos de e3 (o que se ensina) e e5 (onde mora o método).

**Paralelismo multi-agente — emergente, não disruptiva.** Rodar vários agentes simultâneos, cada
um em seu *worktree* isolado, com um papel (arquiteto, construtor, revisor), é tecnicamente
possível e há ferramentas dedicadas a isso. Mas não forçou nenhuma mudança estrutural em quem usa
ou produz software: em 2025 só 14,1% usavam **um** agente diariamente [1]. Não se pula de um
para muitos sem passar por um. Fica no radar como o efeito de 4º nível que o formato não permite
gerar: se a atenção humana é o gargalo, paralelizar agentes multiplica o gargalo em vez de
aliviá-lo — o que sugere que a adoção de multi-agente depende de resolver verificação primeiro, e
não o contrário.

### Sinais fracos

- **Inspeção de sessão como categoria.** Ferramentas para ver o que o agente fez (não o que ele
  produziu) existem hoje como utilitário de desenvolvedor. Elas são o pré-requisito técnico de
  e6.1.1 e do elo probatório que falta em D3. Se alguma virar padrão de fato, D3 destrava.
- **Recusa explícita de contribuição agêntica em projetos abertos.** Ainda é debate de
  mantenedor, não política publicada em escala. Se virar norma, e7.2 acontece antes de 2028.
- **Instrução como superfície de ataque.** Skill é prosa que agente obedece. Não há analisador
  estático para prosa. É a diferença entre e4.1 ser um incômodo de ecossistema e e4.1.1 ser um
  incidente sério.
- **O Brasil adotando na frente e revertendo na frente.** O levantamento de fornecedor citado em
  [10] afirma 76% de empresas brasileiras com agentes em produção contra 62% da média global —
  e, no mesmo material, 80% tendo interrompido ou revertido implantações por problemas de
  governança, contra 74% global. Se o número for real, o Brasil é laboratório antecipado da
  tensão entre D1 e D3, não apenas adotante tardio. É autodeclaração de executivo, não telemetria:
  tratar como hipótese, não como fato.

### Wildcard (baixa probabilidade, alto impacto)

**Um incidente de grande porte causado por agente autônomo cuja cadeia de responsabilidade não se
consegue estabelecer.** Não o incidente em si — esses já acontecem —, mas um em que a apuração
termine sem culpado identificável: o fornecedor do modelo aponta o harness, o harness aponta a
configuração, a configuração aponta a aprovação, e a aprovação foi de alguém que não leu. O
efeito não seria proibir agente; seria **obrigar proveniência** de forma abrupta. Nesse cenário,
e6.1 sai de 2029 para dezoito meses depois do incidente, e6.1.1 vira obrigação legal, e uma
camada inteira de conformidade nasce de uma vez — com o efeito colateral de consolidar o mercado
em poucos fornecedores capazes de emitir a trilha de auditoria exigida. Abundância de software
com oligopólio de ferramenta: o oposto do que a promessa de D1 sugere.

**Wildcard inverso, igualmente improvável:** a verificação automática dá um salto e o custo de
confiar cai junto com o custo de produzir. Nesse caso e1.1 nunca se firma como gargalo, e7 perde
o freio, e o mapa inteiro desloca para uma abundância sem o pedágio de atenção — e o problema
de 2031 passa a ser exclusivamente e2.2, distribuição e atenção.

## 7. Contra o próprio mapa

### 7.1 Extrapolação linear — onde isto é "o presente, só que mais"

**e4.1 (mercado de skills com patologias de gerenciador de pacote) é a peça mais preguiçosa do
mapa.** Ela apenas transporta a história do npm/PyPI para um objeto novo, sem apontar nenhuma
descontinuidade específica de skills. É plausível justamente porque é familiar, e isso é motivo
de suspeita, não de confiança — pode ser que skills nunca formem um ecossistema transitivo,
porque cada organização escreve as suas e a reutilização entre estranhos seja marginal.
**Confiança rebaixada de `media` para `baixa` nesta etapa.**

**e2 (mais projetos) é continuação de curva.** O custo de iniciar projeto vem caindo desde o
Rails, o Heroku e o Vercel; a IA acelera uma tendência de vinte anos em vez de romper. Mantida
como `media` porque o tamanho do salto é diferente, mas registrada aqui como o efeito que menos
depende de agentes para acontecer.

**e5.1 (troca de modelo barateia) presume portabilidade real.** A portabilidade existe no formato
de skill [6], mas é perfeitamente possível que os fabricantes diferenciem por recurso não
portável e o formato comum vire o mínimo denominador — como aconteceu com padrões web e extensões
proprietárias.

### 7.2 Velocidade de adoção nunca vista

**e2.1 é o efeito com o prazo mais otimista do mapa: "software descartável vira formato normal"
em 2029.** Isso pressupõe que uma prática de criação atravesse a população em três anos. O caso
comparável que contradiz o prazo é o próprio agente de código: a capacidade existe desde 2024 e,
em 2025, 14,1% usavam diariamente e 37,9% declaravam não ter plano nenhum de adotar [1]. Uma
tecnologia com adoção interna a desenvolvedores nessa faixa não produz um gênero cultural novo
três anos depois. **Confiança rebaixada de `media` para `baixa`.**

**e3.1 (a formação inverte a ordem) em 2029 é rápido para currículo universitário.** Currículo de
graduação leva de três a cinco anos entre decisão e primeira turma formada. Brown ofereceu uma
disciplina experimental em 2026 [8] — uma disciplina, em uma universidade de elite, com três
professores de peso. Entre isso e "a formação inverte a ordem" existem centenas de colegiados.
Mantida em `media` porque o efeito pode ocorrer por fora do currículo formal (bootcamp, empresa,
autodidata), mas o prazo é frágil.

**Contra-argumento ao mapa inteiro:** todos os prazos aqui são mais rápidos do que o padrão
histórico de difusão em engenharia de software. Test-driven development, revisão por par e
integração contínua levaram de dez a vinte anos cada para virar norma, e nenhum deles exigia
comprar confiança nova.

### 7.3 Se cada disrupção-raiz não vingar

**Se D1 não vingar** — isto é, se o agente que fecha ciclo ficar preso no código simples e
gramado novo, sem penetrar em base legada complexa — a subárvore e1–e3 encolhe drasticamente.
Isso não é remoto: é a leitura mais direta da METR, cujo ensaio foi feito justamente em
repositórios maduros, com donos experientes, e mediu **19% mais lento** [2]. Se essa for a
realidade estável do software que já existe (a maior parte do software que existe), então o
agente é ferramenta de protótipo e de projeto novo, e1.1 nunca se torna gargalo sistêmico, e3 não
fecha porta nenhuma, e o que sobra é um ganho localizado. Neste cenário, o mapa inteiro está
superdimensionado.

**Se D2 não vingar** — se o formato aberto de skills se fragmentar, cada fabricante puxar para o
seu dialeto, ou a prática de escrever skill simplesmente não pegar fora de um núcleo de
entusiastas — a subárvore e4–e5 cai por inteiro. e5.1.1 (deslocamento de poder de barganha) e
e4.2.1 (método como ativo) desaparecem, e o poder consolida no fabricante de modelo, que é o
oposto do que o mapa prevê. O sinal precoce disso seria a vitrine de clientes parar de crescer,
ou os fabricantes grandes passarem a exigir extensões próprias para funcionar bem.

**Se D3 não vingar** — se a regulação recuar, os tribunais acomodarem os casos sem criar doutrina,
ou a indústria absorver os incidentes como custo operacional — a subárvore e6–e7 se dissolve. Não
haveria proveniência obrigatória, nem seguro, nem faixas de autonomia formalizadas: só prática
informal, variável por empresa. Isto é bem possível: regulação de software historicamente chega
tarde, chega fraca, e chega só nos setores que já eram regulados por outro motivo. Se D3 não
vingar, o teto de e7 some — e o cenário indesejável da seção 9 fica mais provável, não menos.

### 7.4 Viés do autor

A skill manda perguntar ao autor se ele escolheu o tema por gostar dele e se isso pode estar
inflando o otimismo. **Nesta rodada não havia autor disponível para responder** — as respostas de
entrevista vieram por procuração, com viés declarado como "neutro". Isso é uma limitação real do
documento, e o registro honesto é este: a pergunta não foi feita a quem deveria responder.

O que dá para dizer sobre o viés da **máquina** que escreveu isto, e que é mais grave: este mapa
foi produzido por um agente de código descrevendo o futuro dos agentes de código, usando um
arquivo `SKILL.md` para argumentar que arquivos `SKILL.md` são uma disrupção-raiz. O conflito é
estrutural e não se resolve declarando-o. A contramedida aplicada foi dar peso desproporcional às
evidências que contrariam o entusiasmo — METR [2], a queda de confiança do Stack Overflow [1], o
chicote da Faros [5] — e rebaixar duas confianças nesta etapa. Quem lê deve descontar mesmo assim.

## 8. O que a máquina errou

**1. Tratei *spec-driven development* como disrupção-raiz e tive de derrubá-la.** Era a candidata
mais confortável: tem nome, tem ferramenta, tem defensores, tem narrativa bonita ("a spec é a
nova unidade de trabalho"). Só não tem limiar. Quando apliquei o teste "que restrição caiu, e por
que agora e não há cinco anos", a resposta honesta foi *nenhuma* — escrever especificação antes
sempre foi possível; o que mudou foi o retorno de fazê-lo. Ela desceu para a seção 6. Percebi
porque o teste da Etapa 2 exige um número ou uma data, e eu não tinha nem um nem outro.

**2. Quase usei dois números do Terminal-Bench como se fossem uma curva de progresso.** Encontrei
"<65%" (do artigo do benchmark, que abri [3]) e "~89%" (de agregadores de leaderboard, que não
abri). A tentação era escrever "de 65% para 89%, uma curva íngreme". São coisas diferentes:
versões diferentes do benchmark, harnesses diferentes, condições diferentes. Só cito o número que
li no artigo, e não afirmo curva nenhuma.

**3. Um número grande e sedutor ficou de fora por não sustentar verificação.** Vi em resultado de
busca a alegação de que agentes geraram "cerca de 17 milhões de PRs por mês no GitHub em março de
2026, contra 4 milhões em setembro de 2025", com cinco quedas do serviço em dois dias. Seria a
melhor evidência de D1 no documento inteiro. Não abri a fonte, e o Octoverse oficial que **abri**
sustenta apenas "mais de 1 milhão de PRs com agente entre maio e setembro de 2025" [7]. O número
grande não entra no corpo do mapa. **Não verificado — precisa de confirmação antes de qualquer
uso.**

**4. Confundi ordem de grandeza entre duas leituras do mesmo fenômeno.** O agregador [11]
atribuía "441%" e "31%" à LinearB; a fonte que abri e que de fato reporta esses dois números é o
relatório da Faros AI [5], e os números da LinearB são outros. Corrigido: cada número está
creditado a quem eu li.

**5. Números redondos de fonte comercial.** "76% das empresas brasileiras com agentes em
produção" vem de um levantamento de fornecedor com 2.527 líderes de negócio [10] — autodeclaração
de executivo sobre a própria empresa, categoria notoriamente inflada. Está no documento como
sinal fraco e com a ressalva explícita, não como fato.

**6. Sobre o parágrafo regulatório de D3.** Os instrumentos citados (Califórnia a partir de
1º/1/2026, Colorado em junho/2026, iniciativa do NIST de fevereiro/2026, documento da IMDA de
maio/2026) vieram de resultado de busca. Não abri nenhum deles e por isso não estão na seção 11.
**Não verificado — o usuário precisa confirmar antes de entregar.** É o ponto mais frágil do
documento, e sustenta uma das três raízes.

**7. Limitação de processo, declarada.** A Etapa 4 exige perguntar ao autor sobre o próprio viés.
Não havia autor na sessão. A pergunta ficou sem dono.

## 9. Três cenários para 2031

### Provável — "o pedágio da atenção"

Em 2031 olhamos para trás e o que houve foi menos épico do que o discurso de 2026 prometia e mais
incômodo do que os céticos previam. O agente virou o modo normal de escrever código novo, e nunca
resolveu bem o código velho: em base legada grande, as equipes continuaram fazendo à mão a parte
que importava, e o ganho ficou concentrado em projeto novo e em camada de apresentação. O gargalo
migrou como a roda previu, e a resposta que a indústria deu foi burocrática, não elegante —
faixas de autonomia por tipo de mudança, aprovação obrigatória no que toca dinheiro e dado
pessoal, agente solto no descartável. O tempo que se ganhou escrevendo foi quase todo gasto
verificando; a conta líquida ficou positiva, mas muito abaixo do prometido, e ninguém conseguiu
medi-la de forma convincente porque a percepção continuou dez pontos acima da realidade, como já
estava em 2025. A profissão não encolheu: mudou de forma. Sobrou menos gente escrevendo e mais
gente especificando, revisando e respondendo. E a coorte que deveria ter virado sênior por volta
de 2030 ficou visivelmente mais rala, o que só se tornou um problema reconhecido quando alguém
precisou de alguém para revisar.

### Desejável — "a verificação virou ofício"

Em 2031, o que separou as equipes boas das ruins não foi qual agente usavam — todos usavam
praticamente os mesmos —, foi o que tinham escrito em volta dele. A camada de harness amadureceu
como padrão aberto de verdade: método de trabalho passou a ser artefato versionado, revisado e
discutido em público, e trocar de fornecedor de modelo virou operação de tarde. A revisão deixou
de ser a tarefa ingrata que sobrava para quem tinha experiência e virou o núcleo da competência
profissional, com formação própria, ferramenta própria e reconhecimento — ler, criticar e
especificar passaram a ser o que se ensina primeiro, e programar, o que se ensina depois. A
proveniência tornou-se convenção antes de virar exigência: quem assina sabe qual agente, qual
modelo e qual instrução produziram aquilo, e por isso consegue assinar. **Para chegar aqui foi
preciso fazer três coisas, todas trabalhosas e nenhuma automática:** medir de verdade o efeito das
próprias ferramentas em vez de acreditar na sensação — o ensaio da METR, que constrangeu tanta
gente em 2025, virou modelo de conduta e não anedota de rodapé; tratar skill e harness como
código, com revisão, versionamento e responsabilidade nomeada, e não como gambiarra de
configuração; e sustentar deliberadamente a formação da coorte intermediária, inclusive pagando
para que pessoas em início de carreira fizessem trabalho que o agente faria melhor, porque a
alternativa era não ter quem revisasse em 2035.

### Indesejável — "o software que ninguém leu"

Em 2031 a abundância chegou e a confiança não. Produzir ficou trivial, verificar continuou caro,
e a saída que a maior parte do mercado encontrou foi a única que estava disponível a curto prazo:
parar de verificar. Os PRs sem revisão, que eram 31% mais numerosos em 2026, viraram o caminho
padrão para tudo que não fosse crítico — e a fronteira do que era crítico foi sendo empurrada por
pressão de prazo. Os incidentes subiram junto e foram absorvidos como custo operacional, cada um
pequeno demais para gerar reação. A dívida técnica deixou de ser legível: não era código ruim, era
código correto cujo motivo ninguém sabia, escrito a partir de uma instrução que ninguém guardou.
Mudar sistemas antigos ficou mais caro, não mais barato, porque entender o que eles faziam exigia
arqueologia. A formação seguiu a mesma inércia: sem tarefas de entrada, o funil se estreitou, e
por volta de 2030 as empresas competiam por um estoque fixo e envelhecente de gente capaz de
julgar software. **O sinal precoce disso já estava visível em 2026 e foi lido como sucesso:** os
mesmos painéis que mostravam vazão subindo mostravam, na linha de baixo, revisão mediana +441%,
bugs +54% e um terço a mais de código entrando sem ninguém olhar. Quem reportava o primeiro
número e não o segundo estava anunciando este cenário sem saber.

## 10. O experimento

**Banco de provas de harness — uma especificação, vários harnesses, um só modelo.**

**O que é.** A turma escreve **uma** especificação de tarefa de software — pequena, real e
verificável por testes (por exemplo: um leitor de um formato de arquivo com cinco casos-limite
declarados, ou um endpoint com regra de negócio que contém uma armadilha deliberada). Essa
especificação é entregue, sem nenhuma alteração, a três ou quatro **harnesses** diferentes que
leiam o mesmo formato aberto de skill — Claude Code, Codex, Gemini CLI, OpenCode —, **mantendo o
modelo constante sempre que a ferramenta permitir**. Cada execução é gravada por inteiro: o que
o agente perguntou, o que decidiu sozinho, quantas vezes rodou os testes, o que entregou. Depois,
duas rodadas de medição: (a) os testes passam? (b) a turma revisa às cegas, sem saber qual
harness produziu o quê, e registra **quanto tempo levou para confiar** em cada entrega.

**Que pergunta sobre o futuro ele responde.** A do efeito `e5`: **o harness explica mais que o
modelo?** É a pergunta de que depende metade deste mapa. Se harnesses diferentes com o mesmo
modelo produzem resultados equivalentes, D2 é marketing e a subárvore e4–e5 cai — o poder fica
com quem faz o modelo. Se produzem resultados sistematicamente diferentes, então método de
trabalho virou de fato um artefato de engenharia, e `e5.1.1` (deslocamento de poder de barganha)
deixa de ser especulação. A segunda medição responde a outra pergunta, mais próxima de mídia e
interação: **o que faz alguém confiar num trabalho que não viu ser feito?** O tempo até confiar é
uma medida de design de interação, não de qualidade de código — e é a variável que governa `e1.1`.

**Que tecnologia emergente usa, e por que não dá com tecnologia madura.** Usa duas coisas que não
existiam há dois anos: o agente que fecha ciclo (sem ele não há "entrega" para comparar, só
sugestões de autocompletar que a pessoa aceita ou não, e o resultado seria da pessoa, não da
ferramenta) e o **formato aberto de skill lido por ferramentas rivais** [6] — sem ele, não haveria
como dar a *mesma* instrução a harnesses de fabricantes diferentes, e a comparação mediria
dialeto de prompt em vez de harness. Com tecnologia madura — autocompletar de IDE, chat que
explica código — o experimento não tem objeto: não há execução autônoma para comparar, e a
variável "tempo até confiar" não faz sentido, porque a pessoa viu cada linha nascer.

**O que a turma faria testando em sala.** Uma aula: cada grupo pega um harness, roda a mesma
especificação ao vivo, e o resultado vai para um mural cego. A discussão não é sobre qual ganhou
— é sobre **onde os agentes divergiram**: se todos erraram o mesmo caso-limite, o problema está
na especificação, e a aula vira sobre escrever especificação; se erraram casos diferentes, o
problema está no harness, e a aula vira sobre o que aquelas instruções em prosa estão de fato
fazendo. Nos dois desfechos a turma sai tendo lido um `SKILL.md` como quem lê código.

**O que mudaria a opinião do autor.** Duas coisas, simétricas. Se a divergência entre harnesses
for pequena e o tempo até confiar for parecido, D2 não é disrupção-raiz e este documento
superestimou a camada de skill — foi confundir a novidade de um formato com a importância dele.
E se a revisão às cegas for rápida e tranquila para todas as entregas, então `e1.1` está errado:
verificar não é o gargalo que a telemetria de 2026 sugere, e o mapa inteiro está ancorado num
custo que já está caindo sozinho.

## 11. Fontes

Somente o que foi de fato aberto e lido nesta sessão (18/09/2026). O que apareceu apenas em
resultado de busca está no Anexo, marcado como não verificado.

1. `https://survey.stackoverflow.co/2025/ai` — Stack Overflow Developer Survey 2025, seção de IA.
   Sustenta: 84% usam ou planejam usar IA; 51% dos profissionais usam diariamente; **14,1% usam
   agentes diariamente, 37,9% sem plano de adotar**; 3,1% confiam muito na precisão, 45,7%
   desconfiam; queixa nº1 "quase certo, mas não" (66%) e nº2 depuração mais demorada (45,2%).
   *Confiabilidade: alta para tendência, com a ressalva conhecida de autosseleção — respondem
   quem frequenta o Stack Overflow, que não é a população de desenvolvedores.*

2. `https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/` — METR, ensaio
   randomizado. Sustenta: 16 desenvolvedores, 246 tarefas reais em repositórios maduros, **19%
   mais lentos** com IA; expectativa prévia de +24%, percepção posterior de +20%. Sustenta também
   a seção 7.3 (o que acontece se D1 não vingar). *Confiabilidade: alta no desenho (é ensaio
   randomizado, raro na área) e deliberadamente estreita no alcance — os próprios autores listam
   o que o estudo não prova. Amostra pequena.*

3. `https://arxiv.org/abs/2601.11868` — Terminal-Bench, artigo do benchmark. Sustenta: 89 tarefas
   com ambiente, solução humana e testes próprios; modelos e agentes de fronteira **abaixo de
   65%**; existência de uma medida de fluxo ponta a ponta em terminal. *Confiabilidade: alta para
   o desenho do benchmark; números de leaderboard envelhecem em semanas e não foram usados.*

4. `https://dora.dev/dora-report-2025/` — DORA, State of AI-assisted Software Development 2025.
   Sustenta: a tese da IA como **amplificadora** de forças e fraquezas organizacionais, e que o
   retorno vem do sistema e não da ferramenta. *Confiabilidade: alta como referência do setor. A
   página pública não expõe as estatísticas — os números de adoção e instabilidade que circulam
   atribuídos ao DORA 2025 **não** foram lidos por mim e não estão neste documento.*

5. `https://www.faros.ai/blog/ai-acceleration-whiplash-takeaways` — Faros AI, AI Engineering
   Report 2026, dez conclusões. Sustenta a espinha dorsal empírica do mapa: 22 mil
   desenvolvedores, 4 mil equipes, dois anos de telemetria; aceitação de código de 20%→60%;
   épicos/dev +66%, vazão +33,7%, merge +16,2%; **revisão mediana +441,5%**, tempo até primeira
   revisão +156,6%; bugs/dev +54%; incidentes/PR +242,7%; churn +861%; **PRs sem revisão +31,3%**.
   *Confiabilidade: média-alta. É telemetria real e grande, mas de um fornecedor que vende
   medição de engenharia, e a comparação é entre períodos de menor e maior adoção dentro de cada
   organização — desenho observacional, não causal.*

6. `https://agentskills.io/` — especificação aberta Agent Skills. Sustenta: formato (`SKILL.md` +
   `scripts/` + `references/` + `assets/`), carregamento por *progressive disclosure* em três
   etapas, origem na Anthropic com liberação como padrão aberto, e a lista nominal de clientes que
   leem o mesmo formato (Claude Code, ChatGPT & Codex, Gemini CLI, GitHub Copilot, VS Code,
   Cursor, Junie, OpenCode, OpenHands, Goose, Kiro, Roo Code, Amp, Factory, Tabnine, Databricks,
   Snowflake, Mistral Vibe, Hermes Agent e outros). *Confiabilidade: alta para o formato, que é
   documento normativo; a vitrine de clientes é autopublicada por quem mantém o padrão — comprova
   que o formato é lido, não o quanto é usado.*

7. `https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/`
   — GitHub Octoverse 2025. Sustenta: **1+ milhão de PRs com agentes entre maio e setembro de
   2025**; 43,2 milhões de PRs mergeados/mês (+23% a/a); ~1 bilhão de commits no ano; 36 milhões
   de novos desenvolvedores; TypeScript em 1º; ~80% dos novos usando Copilot na primeira semana.
   *Confiabilidade: alta para volume (é o próprio dono da plataforma medindo), com viés de
   interesse óbvio na leitura otimista.*

8. `https://www.brown.edu/news/2026-06-11/agentic-studio-ai-programming` — Brown University,
   sobre o curso *Agentic Studio*. Sustenta a seção 3 (ensino reagindo) e o contraponto de prazo
   em 7.2: é **uma** disciplina experimental, com Kathi Fisler, Shriram Krishnamurthi e Michael
   Littman, projetos reais com Claude Code, e a conclusão de começar pelos fundamentos do que faz
   um bom programa. *Confiabilidade: alta para o fato; é comunicação institucional da própria
   universidade, portanto favorável ao que descreve, e n=1.*

9. `https://digitaleconomy.stanford.edu/news/canariesaug26/` — Stanford Digital Economy Lab,
   "Canaries in the Coal Mine?", versão de agosto de 2026 (Brynjolfsson, Chandar, Chen). Sustenta
   `e3`: emprego de 22–25 anos em ocupações muito expostas ~**19% abaixo** do contrafactual
   (era 15% em jul/2025); queda absoluta de ~11% entre nov/2022 e jun/2026 contra +10% dos pares
   menos expostos; mecanismo ligado a conhecimento codificado. *Confiabilidade: alta para os
   dados (microdados de folha da ADP, alta frequência), com ressalvas dos próprios autores: parte
   dos padrões antecede a IA generativa, as lacunas encolhem ao controlar por educação, e eles
   não reivindicam prova definitiva.*

10. `https://tiinside.com.br/13/08/2026/estudo-coloca-brasil-a-frente-dos-eua-na-adocao-de-agentes-de-ia/`
    — cobertura do estudo "The AI Production Paradox" (Sinch, 2.527 líderes de negócio em dez
    países). Sustenta a nota sobre o Brasil na seção 6: 76% de empresas brasileiras com agentes em
    produção contra 62% global e 67% nos EUA; 80% tendo interrompido ou revertido implantações
    por governança contra 74% global; vazamento de dados como motivo de 39% das reversões
    brasileiras contra 24% nos EUA. *Confiabilidade: baixa-média. É notícia sobre pesquisa de
    fornecedor, baseada em autodeclaração de executivos e não em telemetria. Usado apenas como
    sinal fraco, com a ressalva no corpo do texto.*

11. `https://www.flowverify.co/blog/ai-code-review-bottleneck-2026-data` — agregador de dados
    sobre o gargalo de revisão. Foi lido para **conferir atribuição**, e serviu para corrigir um
    erro meu: ele mistura números de fontes distintas (Faros, LinearB, GitHub). Nenhuma afirmação
    deste documento se apoia apenas nele. *Confiabilidade: baixa. Blog comercial secundário, sem
    metodologia própria.*

## 12. Anexo — o levantamento bruto

### 12.1 Entrevista da Etapa 0 — respostas e defaults assumidos

A skill exige entrevista bloqueante antes de qualquer geração. **Não havia usuário nesta sessão**
para responder; as respostas vieram por procuração na chamada que disparou a execução. Registro
literal do que foi recebido, porque a procedência das respostas importa para avaliar o mapa:

- Tema: "Programação agêntica: o desenvolvedor vira orquestrador" (tema 1 de 19; família
  "Agentes").
- Recorte mais estreito preferido: nenhum — o tema é o **ofício de programar** e o que acontece
  com ele; segurança/contenção de agente é o tema 2 da disciplina e memória/observabilidade/
  avaliação é o tema 3, e ambos ficam de fora deste mapa por fronteira declarada.
- Horizonte: 2031.
- Público: quem projeta mídia e interação.
- Recorte geográfico: global, com uma nota sobre o Brasil.
- Descartado de início: o que já é comum em produto de massa (régua da disciplina). Nenhuma outra
  exclusão.
- Disrupção suspeita: nenhuma — descobrir.
- Viés desejado: neutro.
- Ideias óbvias a excluir: as que serviriam para qualquer tema.
- O que faria o autor mudar de ideia: evidência de que a adoção já passou da maioria inicial
  (Rogers), ou de que a tecnologia não rompe nada (só melhora o que existe).
- Profundidade: três ordens. Modo: a partir de uma inovação/tema, não de um setor.
- `autor_login`: jgpt. `zona_de_interesse`: Agentes. `publico_ok`: não autorizado → `false`.

**Default assumido em silêncio? Um, e está declarado aqui:** `confianca` global do mapa. Ninguém
a informou; assumi `media`, porque duas das três raízes têm base empírica sólida e a terceira (D3)
repousa em material que não consegui abrir.

**Nota sobre o critério de Rogers.** O autor declarou que mudaria de ideia com evidência de que a
adoção já passou da maioria inicial. Esse teste foi aplicado e **o tema passou**: 14,1% de uso
diário de agentes e 37,9% sem plano nenhum de adotar [1] colocam agentes, em 2025, antes da
maioria inicial — inovadores e adotantes iniciais, no vocabulário de Rogers. Se a régua fosse
"assistente de IA" em vez de "agente", o tema seria reprovado: 84% é maioria tardia, e por isso
autocompletar e chat sobre código estão declarados maduros na seção 3.

### 12.2 Candidatas a disrupção-raiz e o veredito de cada uma

Aplicação do teste "o que isso rompe, e por que agora e não há cinco anos" a tudo que foi
considerado, inclusive o que caiu:

| Candidata | Veredito | Limiar concreto? |
|---|---|---|
| Agente fecha ciclo no repositório | **Raiz (D1)** | Sim: aceitação 20%→60% [5]; benchmark de fluxo ponta a ponta existindo [3]; 1M+ PRs com agente em 5 meses [7] |
| Instrução como artefato portável (skill/harness) | **Raiz (D2)** | Sim: formato aberto com adesão cruzada de fabricantes rivais [6] |
| Responsabilidade descola da autoria | **Raiz (D3), com ressalva** | Sim, mas jurídico e **não verificado** — ver seção 8, item 6 |
| Spec-driven development | Rejeitada → seção 6 | Não. Prática antiga com retorno novo; nenhuma restrição caiu |
| Multi-agente coordenado / paralelismo | Emergente → seção 6 | Não. Possível, mas não forçou mudança estrutural: 14,1% mal usam um agente [1] |
| MCP / protocolo de ferramentas | Absorvida em D2 | Rompe conexão a ferramentas, mas neste mapa é camada complementar ao formato de skill, não raiz própria do ofício |
| Terminal como interface de trabalho | Rejeitada | É sintoma de D1, não causa. Vira material da seção 2 |
| Custo de inferência caindo | Rejeitada | Mais barato do mesmo jogo — critério de "maduro" da Etapa 2 |
| Agentes em nuvem / background | Absorvida em D1 | Variação de entrega da mesma capacidade |

### 12.3 Efeitos gerados e cortados

Cortados por não resistirem ao teste de causalidade rastreável ou por serem genéricos demais
(serviriam para qualquer tema):

- *"O software fica gratuito."* Confunde custo de produção com preço. Preço de software nunca foi
  função do custo de produção; e2.2 e e2.2.1 dizem o que sobra dessa intuição depois de corrigida.
- *"Todo mundo vira programador."* Genérico, e repetido a cada ciclo de ferramenta desde o
  Visual Basic. Sem mecanismo identificável ligando a capacidade do agente à ampliação da
  população que sustenta software em produção.
- *"As linguagens de programação mudam para agradar agentes."* Plausível e sedutor, mas sem sinal
  presente que eu tenha conseguido verificar. O dado mais próximo é TypeScript em 1º lugar no
  Octoverse [7], atribuído em parte a IA — insuficiente para sustentar o efeito.
- *"Desaparece a profissão de programador."* Contradiz a fonte [9], que é explícita em não
  encontrar deslocamento generalizado, e contradiz o mecanismo do próprio mapa: o gargalo migra
  para dentro da profissão, não para fora dela.
- *"Agentes escrevem agentes, e a curva vira exponencial."* Seria 4º nível e é especulação sem
  mecanismo verificável. O formato fixa três níveis; anotado aqui e não gerado.
- *"O PR deixa de existir como unidade de trabalho."* Efeito interessante, sem sinal presente.
  Candidato a sinal fraco numa rodada futura, se aparecer evidência de fluxos que abandonem a
  unidade "PR".

### 12.4 Mudanças aplicadas na Etapa 4 (autocontestação)

Registro do que efetivamente mudou, para que se possa checar que a contestação não foi decorativa:

| Efeito | Antes | Depois | Motivo |
|---|---|---|---|
| `e4.1` (mercado de skills com patologias de pacote) | `confianca: media` | `confianca: baixa` | Extrapolação linear da história do npm, sem descontinuidade própria de skills |
| `e2.1` (software descartável vira formato normal) | `confianca: media` | `confianca: baixa` | Velocidade de adoção sem caso comparável: contradita pelos 14,1% de uso diário de agentes [1] |
| `e5.2` (engenharia de harness como função) | `sinal: medio` | `sinal: fraco` | Não há oferta de vaga nem função nomeada que eu tenha conseguido verificar |
| `e1.1` (revisão vira gargalo) | `sinal: medio` | `sinal: forte` | **Elevado**: é o efeito com a melhor evidência presente do mapa (+441,5% [5]) |
| D3 inteira | aceita sem ressalva | aceita **com ressalva de derivação e de fonte** | Parcialmente derivada de D1; o "por que agora" repousa em material não aberto |

Nada mais mudou. Isso é registrado porque a própria skill adverte que um mapa que sobrevive 100%
intacto à contestação provavelmente não foi contestado de verdade — cinco alterações em vinte e
oito efeitos é pouco, e quem revisar deve atacar de novo.

### 12.5 Buscas feitas — inclusive as que não renderam

Todas as consultas desta sessão, com o que saiu de cada uma:

1. *Stack Overflow Developer Survey 2025 AI agents adoption trust* → fonte [1], aberta.
2. *METR study 2025 experienced developers AI tools slower randomized* → fonte [2], aberta.
3. *DORA State of DevOps 2025 AI adoption 90% trust software delivery instability* → levou à
   fonte [4]. **Rendeu menos do que prometia:** a página pública não traz as estatísticas, só a
   tese da amplificação. Os números que circulam atribuídos ao DORA 2025 (90% usando IA, 30% com
   pouca ou nenhuma confiança no código gerado, correlação com instabilidade) apareceram apenas em
   coberturas secundárias e **não entraram no documento**.
4. *Terminal-Bench 2026 coding agent benchmark results harness* → fonte [3], aberta. Os resultados
   de leaderboard (Terminal-Bench 2.1, ~89%) vieram de agregadores não abertos e foram descartados
   — ver seção 8, item 2.
5. *Anthropic Agent Skills MCP adoption 2026 standard harness portable instructions* → fonte [6],
   aberta. Uma tentativa de abrir a cobertura do The New Stack sobre Agent Skills **falhou**: a
   página devolveu formulário de assinatura em vez do artigo. Não citada.
6. *code review bottleneck AI generated code 2026 pull request volume study* → levou a [5] e [11].
7. *Faros AI 2026 report AI impact 22000 developers review time bugs incidents* → fonte [5],
   aberta.
8. *Brasil desenvolvedores IA agentes 2026 pesquisa adoção mercado software vagas júnior* → fonte
   [10], aberta. Também apareceram dados da ABES/IDC (40% das empresas brasileiras investindo em
   agentes, 33% planejando; 103 executivos no Brasil e 507 na América Latina) e do Panorama do
   desenvolvimento profissional (68% dizendo que dominar IA é requisito básico; busca por
   candidatos com IA +306%). **Não abertos, não citados, não usados.**
9. *junior developer hiring collapse 2026 entry level software engineering jobs AI data* →
   rendeu só agregadores. As cifras que circulam ("queda de 67% nas vagas de entrada", "54% das
   empresas pararam de contratar júnior por causa de IA", "IBM e Cognizant aumentando contratação
   de recém-formados") vêm de blogs sem metodologia publicada. **Descartadas** em favor da fonte
   [9], que é estudo com microdados. A busca valeu por ter levado até ela.
10. *arxiv "Canaries in the Coal Mine" ...* → fonte [9], aberta.
11. *GitHub Octoverse 2026 agents pull requests statistics* → fonte [7], aberta. Aqui apareceu a
    alegação dos 17 milhões de PRs de agentes por mês e das cinco quedas do GitHub em dois dias
    (abril/2026), em blog não aberto. **Não verificada** — ver seção 8, item 3.
12. *spec-driven development 2026 agents specification as source of truth* → nada aberto. As
    afirmações que circulam (Spec Kit com 111 mil estrelas em jun/2026, casos da AWS Kiro de
    features de 40 horas entregues em menos de 8) são **não verificadas** e não entram no corpo.
    A busca serviu para derrubar SDD como raiz: muita cobertura de método, nenhum limiar.
13. *autonomous coding agent production incident 2026 liability who is responsible regulation* →
    nada aberto. Originou o parágrafo regulatório de D3, integralmente **não verificado** (seção 8,
    item 6). Também apareceram, e não foram usados: a alegação de que 88% das organizações tiveram
    incidente confirmado ou suspeito com agente no ano anterior, e relatos de modelos escapando de
    sandbox em avaliações de segurança (jul/2026).
14. *computer science curriculum 2026 change AI agents teaching programming universities* →
    fonte [8], aberta.

### 12.6 O que ficou de fora por fronteira de tema

A disciplina separa este tema dos vizinhos, e a separação foi respeitada mesmo quando a evidência
puxava para lá. Ficaram de fora, e pertencem a outros mapas: **contenção e segurança do agente**
(sandbox, escopo de permissão, escape) — tema 2; **memória, observabilidade e avaliação de
agentes** — tema 3. Onde este mapa encosta neles (e6.1.1, inspeção de sessão; e7.1.1, raio de
dano), o efeito é tratado do ponto de vista do **ofício** — quem assina, quem revisa, quem
responde — e não do ponto de vista do mecanismo de contenção.
