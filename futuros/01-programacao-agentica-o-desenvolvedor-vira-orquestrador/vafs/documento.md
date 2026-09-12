---
tema: "Programação agêntica: o desenvolvedor vira orquestrador"
slug: programacao-agentica-o-desenvolvedor-vira-orquestrador
autor_login: vafs
zona_de_interesse: Agentes
data: 2026-09-11
horizonte: 2031
publico: Quem projeta mídia e interação — para decidir que ferramenta, que interface e que ofício vale projetar quando escrever código deixa de ser o gargalo
recorte_geografico: global (com nota sobre o Brasil)
disrupcoes_raiz: 3
efeitos_ordem_1: 3
efeitos_ordem_2: 8
efeitos_ordem_3: 9
tecnologias_citadas: [agente de codificação que executa e abre PR (Claude Code, Codex CLI, Cline, Aider, OpenCode, Copilot CLI), harness de agente, agent skills empacotadas, Model Context Protocol (MCP), desenvolvimento multi-agente, spec-driven development (GitHub Spec Kit), revisão de código por agente, autocompletar de IDE, chat explicativo de código, Terminal-Bench, SWE-bench]
fontes: 12
confianca: media
experimento: "A Sala de Controle — duplas resolvem a mesma especificação em três regimes (à mão, um agente, três agentes em paralelo) medindo tempo até o critério de aceite, quantas linhas a pessoa leu de fato, e um teste-surpresa de compreensão do código entregue"
skill_usada: futurizacao-vafs
publico_ok: false
---

## 1. Resumo

Escrever código deixou de ser onde a hora é gasta, mas quase nada do que vinha depois se
reorganizou ainda. O agente lê o repositório, edita vários arquivos, roda o teste e abre o PR;
o humano especifica, verifica e responde. Este mapa parte de três disrupções-raiz — o agente
que fecha o ciclo `editar → testar → abrir PR` sem aprovação passo a passo; a instrução
empacotada (skill, harness, protocolo) virando dependência de software versionada e
distribuída; e um humano coordenando vários agentes ao mesmo tempo — e deriva vinte efeitos em
três ordens até 2031.

O achado que mais aparece nos dados abertos para este documento não é o ganho de velocidade, é
o deslocamento do gargalo: a telemetria de 22 mil desenvolvedores da Faros AI registra
throughput por pessoa **+33,7%** e, na mesma janela, tempo mediano de revisão de código
**+441,5%** e PRs mesclados sem nenhuma revisão **+31,3%**. A capacidade de produzir cresceu;
a de julgar, não. Os efeitos de 2ª ordem deste mapa moram quase todos aí.

O freio explícito: a adoção do agente que **age** ainda é de early adopter — 14,1% dos
desenvolvedores usam agentes diariamente no trabalho, e 37,9% declaram que não pretendem usar
(Stack Overflow, 2025). E a única medida randomizada disponível sobre o efeito real na
produtividade encontrou o sinal invertido: desenvolvedores experientes ficaram **19% mais
lentos** com IA, enquanto estimavam ter ficado 20% mais rápidos (METR, 2025). O mapa abaixo é
derivável, não previsto; a seção 7 diz onde ele mais provavelmente quebra.

Viés declarado: **neutro**. Onde o sinal era ambíguo, a leitura escolhida foi a que preserva a
possibilidade de a disrupção não se concretizar — por isso o cenário cético (seção 9, cenário B)
recebe o mesmo peso do cenário central.

## 2. O tema

O recorte não é "IA para programar". É **o ofício de programar** e o que acontece com ele
quando o agente executa em vez de sugerir.

A diferença é operacional, não retórica: autocompletar propõe um trecho e espera o humano
aceitar; chat explica e espera o humano aplicar. O agente de codificação lê o repositório,
decide um plano, edita múltiplos arquivos, roda o teste, lê a falha, corrige e abre o pull
request — e o humano entra no fim, não no meio. O que muda de natureza aí é a unidade de
trabalho: de "linha escrita" para "resultado aceito". O que sobra para o humano é especificar,
verificar e responder pelo resultado.

Ao lado disso apareceu uma camada que não existia como categoria em 2024: **harness** (a
infraestrutura de orquestração acima do modelo — planejamento, uso de ferramenta, memória,
execução, tratamento de falha), **skill** (instrução empacotada, versionada, distribuída por
registro público) e **protocolo** (MCP, para o agente falar com ferramenta). Um levantamento
acadêmico recente já trata o desenho de harness como camada de engenharia autônoma, separada da
capacidade do modelo: *From Question Answering to Task Completion: A Survey on Agent System and
Harness Design* (Guo, Hao, Wang e outros, arXiv:2606.20683). É essa camada que transforma prompt
em software — e é ela que produz a segunda disrupção-raiz deste mapa.

**Recorte geográfico:** global, com uma nota sobre o Brasil na seção 3. **Horizonte:** 2031.
**Público:** quem projeta mídia e interação — a pergunta prática que este mapa serve é *que
interface e que ferramenta vale projetar quando o objeto de trabalho deixa de ser o cursor de
texto*.

**O que ficou fora, por decisão de quem pediu:** tudo que já é comum em produto de massa (a
régua da disciplina). Isso exclui de saída autocompletar de IDE e chat que explica código — ver
seção 12, onde os dois estão registrados com o motivo da rejeição. Fronteira com os temas
vizinhos: contenção e segurança do agente é o tema 2; memória, observabilidade e avaliação é o
tema 3. Aqui o objeto é o ofício.

## 3. Onde isso está hoje

**A capacidade técnica já está alta e ainda sobe.** No Terminal-Bench v2.1 — 89 tarefas
verificadas programaticamente em software, administração de sistema, processamento de dados,
treino de modelo e segurança, pontuadas em pass@1 sobre três repetições — o topo da tabela na
Artificial Analysis marca 91,4% de resolução (Claude Fable 5.1, esforço máximo). Um ano antes o
mesmo tipo de tarefa era terreno de demonstração, não de uso.

**A adoção da ferramenta é ampla; a do agente, não.** Na pesquisa da Stack Overflow com mais de
49 mil respondentes, 84% usam ou planejam usar ferramentas de IA no desenvolvimento e 51% dos
profissionais usam diariamente — mas, na pergunta específica sobre agentes, **14,1%** respondem
"sim, uso agentes de IA no trabalho diariamente", 17,4% planejam adotar e **37,9%** dizem que
não pretendem. A própria pesquisa conclui: "AI agents are not yet mainstream". Entre quem usa,
70,7% relatam redução de tempo e 68,7% relatam aumento de produtividade — mas só **17,3%**
relatam melhora de colaboração no time. O ganho é declarado como individual, não coletivo.

**A confiança caiu enquanto a adoção subia.** Na mesma pesquisa, 46% desconfiam da acurácia da
IA contra 33% que confiam — e apenas **3,1%** dizem confiar muito. O principal motivo declarado
para ainda procurar ajuda humana é "quando não confio na resposta da IA" (75,3%).

**O gargalo já se moveu, e isso é mensurável.** A telemetria da Faros AI sobre cerca de 22 mil
desenvolvedores registra, na mesma janela: throughput de tarefas por pessoa **+33,7%**, tempo
mediano de revisão **+441,5%**, tempo até a primeira revisão **+156,6%**, bugs por pessoa
**+54%**, churn de código **+861%** e PRs mesclados sem revisão **+31,3%**. A LinearB, sobre 8,1
milhões de PRs em 4.800 times, mede PRs assistidos por IA com 400+ linhas no percentil 75
(contra 157 nos não assistidos), *pickup time* de 16+ horas (contra ~200 minutos) e taxa de
merge em 30 dias de 32,7% (contra 84,5%). O GitHub reporta mais de 60 milhões de revisões
automatizadas e cerca de **uma em cada cinco revisões envolvendo um agente**.

**A qualidade estrutural do código está se degradando de forma medida.** A GitClear, sobre 623
milhões de mudanças de código entre 2023 e 2026: duplicação de blocos **+81%** (73 linhas
duplicadas por mil mudadas, o mais alto já registrado), cópia e cola dentro do commit **+41%**,
movimentação de linhas por refatoração **−70%** contra 2022, chamadas de função entre arquivos
**−35%**, manutenção de código legado **−74%** desde 2023, e o percentual de atualização de
código intocado há 12+ meses caindo de 1,7% para **0,46%** em 2026. Em outras palavras: o código
novo conversa menos com o que já existe, e o que já existe é cada vez menos tocado.

**A camada de instrução já é infraestrutura.** O roadmap oficial do Model Context Protocol para
2026 lista quatro frentes — transporte e escala, comunicação entre agentes, maturação de
governança (com *contributor ladder* e delegação a working groups) e prontidão para empresa,
esta última entregue "como extensões, não como mudança no núcleo da especificação". Um protocolo
com processo formal de proposta e ladder de contribuição não é mais experimento; é padrão em
formação.

**E a supply chain dessa camada já tem o problema que se espera dela.** A Snyk varreu 3.984
skills do ClawHub e do skills.sh em 5 de fevereiro de 2026: **13,4%** (534) com ao menos um
problema crítico, **36,82%** (1.467) com alguma falha, **76 payloads maliciosos confirmados**
por revisão humana — e 8 deles ainda publicamente disponíveis na data da publicação. O motivo
importa: uma skill instalada herda a permissão inteira do agente — shell, leitura e escrita no
sistema de arquivos, variáveis de ambiente e credenciais, canais de saída como e-mail e
mensageria, e memória persistente entre sessões.

**O método já tem nome.** O `github/spec-kit`, kit de *spec-driven development*, tinha 135.654
estrelas na consulta direta à API do GitHub em 11/09/2026, pouco mais de um ano depois de criado
(21/08/2025). Na mesma consulta: `anthropics/claude-code` 144.756, `anomalyco/opencode` 206.709,
`openai/codex` 123.382, `cline/cline` 67.842, `Aider-AI/aider` 48.903. Estrela não é adoção — é
atenção; mas a ordem de grandeza e a data de criação dizem que a categoria "agente de terminal"
saiu do zero em cerca de 24 meses.

**Nota sobre o Brasil.** O estudo ABES/IDC apresentado em junho de 2026, com 103 executivos no
Brasil e 507 na América Latina, coloca IA e agentes como a prioridade estratégica nº 1 para 2026
(53% das menções, contra 41% de segurança e nuvem): **40%** das empresas já têm plano de
investimento em agentes de IA e **33%** pretendem adotar nos próximos 12 meses. A ressalva é
importante e o documento a faz explicitamente: isso mede **agentes de IA em geral** na agenda
corporativa, não agentes de codificação em uso por times de engenharia. Não encontrei, nas
buscas desta rodada, medida brasileira específica de adoção de agente de codificação — o que
significa que a nota sobre o Brasil deste mapa é de intenção declarada, não de prática medida.

Tudo acima é **estado atual**, não disrupção. É o chão a partir do qual a seção 4 deriva.

## 4. As disrupções-raiz

O teste da Fase 2 da skill (maduro / emergente / disruptivo) foi aplicado por escrito a onze
candidatos. Oito foram rejeitados e estão registrados na seção 12 com o motivo. Três passaram.

### D1 — O agente fecha o ciclo `editar → testar → abrir PR` sem aprovação passo a passo

**Teste 1 (madura?)** Não. Há uso real em produção, mas não é a opção padrão de nenhum fluxo em
escala: 14,1% de uso diário e 37,9% de recusa declarada (Stack Overflow, 2025) é perfil de early
adopter, não de maioria. O que falta não é barateamento — é confiança (3,1% confiam muito).

**Teste 2 (emergente?)** Sim. Existe fora do laboratório, com produto comercial, e a curva de
capacidade ainda sobe de forma medida (91,4% no Terminal-Bench v2.1; a mesma família de tarefas
era intratável dois anos antes).

**Teste 3 (disruptiva?)** Sim, e o ator nomeável é duplo. Primeiro: **o posto de trabalho de
implementar especificação já escrita por outro** deixa de ser necessário — não fica mais barato,
deixa de ser preciso existir, porque é exatamente a tarefa em que o agente é confiável e a que
menos depende de contexto tácito. Segundo: **a IDE como categoria de produto organizada em torno
do cursor de texto** perde o centro — se o humano não digita o código, uma ferramenta projetada
para ajudar a digitar está otimizando a etapa que sobrou pequena.

→ **Aprovada como disrupção-raiz.**

### D2 — A instrução empacotada vira dependência de software versionada e distribuída

Skill, harness e protocolo: texto em linguagem natural com versão, registro público, dependência
e cadeia de suprimento.

**Teste 1 (madura?)** Não. O próprio roadmap de 2026 do MCP descreve transporte, comunicação
entre agentes e prontidão para empresa como frentes **em aberto**, e admite que nem o working
group de enterprise existe ainda. Padrão em formação não é padrão maduro.

**Teste 2 (emergente?)** Sim, e com escala já suficiente para ter patologia própria: 3.984 skills
num único levantamento, 76 payloads maliciosos confirmados (Snyk, fev/2026). Ecossistema que já
tem ataque de supply chain não é laboratório.

**Teste 3 (disruptiva?)** Sim. O que deixa de fazer sentido é **a fronteira entre configurar e
programar** — quem escreve uma skill está distribuindo comportamento executável, com permissão
de shell e credenciais, sem escrever uma linha na linguagem do projeto e sem passar por
compilador, revisão de código ou gerenciador de pacotes. E, em consequência, deixa de fazer
sentido **o inventário de dependências como lista de bibliotecas**: o repositório deixa de
conter a descrição completa do que o software faz.

→ **Aprovada como disrupção-raiz.**

### D3 — Um humano coordena vários agentes em paralelo

Não é "usar um agente mais rápido": é manter N frentes abertas ao mesmo tempo, com fila de
aprovação, plano antes da execução e papéis distribuídos entre agentes.

**Teste 1 (madura?)** Não, com folga. Só 17,3% de quem usa agentes relata melhora de colaboração
no time (Stack Overflow, 2025) — o ganho ainda é individual, o que é precisamente o oposto de
uma prática coletiva consolidada.

**Teste 2 (emergente?)** Sim. Existe em uso real (harness com papéis, roteadores entre agentes,
protocolos unificados de execução), fora do piloto, ainda longe de padrão.

**Teste 3 (disruptiva?)** Sim. O que perde a razão de existir é **a revisão humana linha a linha
como controle de qualidade primário**. Não é que fique mais difícil: é que deixa de ser
executável — um humano não lê o diff de cinco frentes simultâneas, e os números já mostram o
sistema cedendo nessa junta (revisão +441,5%, merge sem revisão +31,3%, pickup de 16h). Se
escalar, o controle migra para artefato — passou no teste, o comportamento observável confere —
e o diff deixa de ser lido.

→ **Aprovada como disrupção-raiz.**

## 5. A roda dos futuros

O bloco abaixo é lido por máquina. Em prosa, três observações sobre como lê-lo:

Primeiro, os efeitos de 3ª ordem estão quase todos em `confianca: baixa`. Isso é o resultado
esperado do método, não uma lacuna: 3ª ordem só se sustenta se o efeito de 2ª ordem que a
originou se sustentar, e nenhum dos de 2ª ordem aqui está garantido.

Segundo, dois efeitos foram **rebaixados de propósito** na auditoria da Fase 4 por dependerem de
velocidade de adoção sem precedente comparável (`e1.2.1`, reforma curricular; `e2.2.1`, exigência
formal de inventário de instruções), e um foi **reescrito** para incluir o passo intermediário que
faltava (`e3.1`). Dois foram **cortados** e estão na seção 12. Detalhe em 7 e em 12.

Terceiro, `e1.1` está em `confianca: alta` por um motivo incômodo: ele já é mensurável hoje
(Faros, LinearB, GitHub). Isso o coloca perto da linha entre "estado atual" e "efeito de
futurização" — ver seção 7, item 1.

```yaml
roda:
  - disrupcao: O agente fecha o ciclo editar-testar-abrir PR sem aprovação passo a passo
    efeitos:
      - id: e1
        ordem: 1
        efeito: O tempo humano no ciclo de desenvolvimento migra de escrever código para escrever critério de aceite e julgar resultado, e a digitação deixa de ser a etapa onde a hora é gasta
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O volume de código submetido por pessoa cresce mais rápido que a capacidade de revisão do time, e a revisão passa a ser a etapa mais lenta do fluxo, medida como tal nos painéis de engenharia
            sinal: forte
            prazo: 2027
            confianca: alta
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A avaliação profissional de quem faz software deixa de usar volume entregue como métrica e passa a usar risco aceito no merge, com a carreira medida por decisão em vez de por produção
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: A ferramenta de desenvolvimento passa a ser projetada para leitura e julgamento (diff, rastro de execução, evidência de teste) em vez de para escrita, e a IDE centrada no cursor de texto deixa de ser a categoria de produto que define o mercado
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O posto de entrada da profissão encolhe, porque implementar especificação já escrita por outro é a tarefa em que o agente é mais confiável e a que menos depende de contexto tácito
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: O curso de computação deixa de ter a formação de implementadores como saída natural e se reorganiza em torno de especificar, verificar e responder, com leitura de código virando disciplina de leitura crítica em vez de exercício de escrita
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A instrução empacotada (skill, harness, protocolo) vira dependência de software versionada e distribuída
    efeitos:
      - id: e2
        ordem: 1
        efeito: Texto em linguagem natural passa a ser distribuído como pacote, com versão, registro público e cadeia de suprimento, e herda as patologias conhecidas do gerenciador de pacotes
        sinal: forte
        prazo: 2026
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Surge trabalho remunerado de escrever e manter instrução para agente, exercido por quem não escreve código na linguagem do projeto, e a fronteira entre configurar e programar deixa de ser nítida no organograma
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: A responsabilidade por defeito de software precisa ser redefinida para um artefato escrito em português, porque o autor do defeito deixa de ser localizável no diff
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: A superfície de ataque de uma aplicação passa a incluir texto que ninguém compila, e nasce um mercado de varredura de instrução equivalente ao de varredura de dependência
            sinal: medio
            prazo: 2027
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Contrato, seguro e certificação de software passam a exigir inventário de instruções da mesma forma que hoje exigem inventário de bibliotecas
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e2.3
            ordem: 2
            efeito: A documentação escrita para humano perde a posição de veículo principal de know-how de uma ferramenta, porque o primeiro leitor de qualquer documentação passa a ser o agente que a carrega como contexto
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e2.3.1
                ordem: 3
                efeito: O gênero documentação técnica se bifurca em duas mídias com públicos distintos, uma otimizada para carga de contexto de máquina e outra narrativa para humano, e a segunda vira produto editorial em vez de obrigação de engenharia
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: Um humano coordena vários agentes em paralelo
    efeitos:
      - id: e3
        ordem: 1
        efeito: O trabalho deixa de ser uma tarefa por vez e passa a ser N frentes abertas, trocando o custo cognitivo da concentração pelo da troca de contexto e da espera por resultado alheio
        sinal: medio
        prazo: 2027
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: A revisão linha a linha deixa de ser executável como controle primário e é substituída por controle por artefato (o teste passou, o comportamento observável confere), com o diff sendo cada vez menos lido antes do merge
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A dívida técnica deixa de ser um problema de legibilidade e vira um problema de arqueologia, porque o código que ninguém leu só é compreendido reexecutando-o
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: O valor de uma empresa de software desloca-se do código que ela possui para o contexto que ela possui (dado proprietário, integração, relação com cliente, restrição de domínio), porque o código deixa de ser o recurso escasso
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Adquirir uma empresa de software pela base de código perde sentido como tese de investimento, e a aquisição passa a ser justificada por distribuição, dado proprietário e confiança instalada
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.3
            ordem: 2
            efeito: A interface de coordenação, e não o editor, vira o produto disputado, com painel de N agentes, fila de aprovação e rastro de decisão como elementos centrais
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e3.3.1
                ordem: 3
                efeito: Projetar ferramenta de desenvolvimento converge com projetar sala de controle, e o vocabulário de referência passa a ser o de fatores humanos (atenção, alarme, confiança calibrada, handoff) em vez do de UI de produtividade
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

## 6. Sinais fracos e wildcards

**Sinais fracos**

- **A auditoria do processo do agente como categoria de produto.** Ferramentas para inspecionar
  o que o agente fez — e não o que ele produziu — começam a aparecer ao lado dos agentes. É o
  sinal mais direto de `e1.1.2` e `e3.3`: se o objeto de trabalho é o julgamento, a ferramenta
  passa a ser de leitura. A Snyk já lançou varredura de skill como produto (Agent Scan), o que é
  a versão de segurança do mesmo movimento.
- **O agente deixando de ser sessão e virando daemon.** Agentes de propósito único declarados em
  arquivo de configuração e disparados por *git hook*, *cron* ou pipe (o padrão de `jrswab/axe`)
  são um sinal fraco importante porque removem o humano do laço por construção, não por descuido.
  Se esse padrão pegar, `e3.1` acontece mais cedo e mais forte.
- **Protocolo unificado de harness.** Iniciativas para rodar agentes diferentes por uma interface
  só (roteadores de harness, "unified harness protocol") apontam para a commoditização do agente
  e a valorização da camada acima dele. Se vencer, D2 engole parte de D1: o produto deixa de ser
  o agente e passa a ser a instrução.
- **A conversa em texto como interface de criação fora de código.** O padrão "terminal" começa a
  aparecer em domínios criativos vizinhos. Para quem projeta mídia e interação, esse é o sinal
  fraco com maior alcance: se a interface de criação converge para linguagem natural com
  execução, o repertório de design de ferramenta criativa muda de eixo — de manipulação direta
  para especificação e verificação.

**Wildcards**

- **Incidente grave em produção causado por agente autônomo, com dano atribuível.** O precedente
  material já existe: 76 payloads maliciosos confirmados num registro público de skills, oito
  ainda no ar na data da publicação, com permissão herdada de shell e credenciais. Um incidente
  desses puxa regulação de "quem responde pelo código" e antecipa `e2.1.1` em vários anos — ou
  congela D1 inteira em setores regulados.
- **Colapso de confiança num registro de skills**, no formato dos episódios clássicos de supply
  chain de npm. Efeito paradoxal: fortaleceria D2 ao forçar governança formal (assinatura,
  proveniência, inventário), que é exatamente `e2.2.1` chegando por crise em vez de por maturação.
- **Reversão institucional.** Uma organização grande audita o próprio ganho, encontra o padrão do
  METR (percepção de +20%, medição de −19%) e proíbe agente autônomo em produção. Se um caso
  assim for publicado com método defensável, a curva de adoção pode estacionar nos early
  adopters — e é o gatilho do cenário B da seção 9.
- **O oposto do mapa: a verificação também automatiza.** Se a revisão por agente amadurecer a
  ponto de ser aceita como controle suficiente — hoje já é uma em cada cinco revisões no GitHub —
  o gargalo de `e1.1` se dissolve sem nunca ter virado crise, e metade dos efeitos de 2ª ordem
  deste mapa perde a causa. Este é o wildcard que mais barato derruba o documento.

## 7. Contra o próprio mapa

Produto direto da auditoria da Fase 4, item a item.

**1. `e1.1` é quase extrapolação linear, e está no mapa mesmo assim.** "A revisão vira o gargalo"
não é uma previsão: é a leitura do que a Faros (+441,5% no tempo de revisão) e a LinearB (pickup
de 16h contra 200 minutos) já mediram. Um efeito que já aconteceu não é futurização — é
descrição. Ele fica porque é a dobradiça causal de `e1.1.1`, `e1.1.2` e de toda a ramificação de
D3, mas quem lê deve tratá-lo como premissa medida, não como derivação.

**2. `e1.2.1` assume velocidade de adoção sem precedente.** Reforma curricular universitária
consolidada historicamente leva mais de uma década, e o currículo de computação já absorveu duas
ondas anteriores (orientação a objetos, web) com atraso dessa ordem. Supor reorganização
substantiva até 2031 é supor uma velocidade institucional que não tem caso comparável conhecido.
Rebaixado para `confianca: baixa` por esse motivo específico.

**3. `e2.2.1` assume regulação mais rápida do que o histórico regulatório sustenta.** A exigência
formal de SBOM levou anos entre a proposta técnica e a exigência contratual. Exigir inventário de
instruções até 2030 supõe trânsito mais rápido, provavelmente só possível pela via do wildcard
(incidente grave). Rebaixado, e o mecanismo alternativo declarado.

**4. `e3.1` pulava uma etapa e foi reescrito.** A formulação original — "ninguém mais revisa
código" — não narrava o passo intermediário e teria entrado como afirmação mágica. A versão no
mapa diz o passo: a revisão não desaparece, ela **troca de objeto** — de leitura do diff para
verificação por artefato (teste, comportamento observável). Sem esse passo, o efeito era
indefensável.

**5. `e3.2` e `e3.2.1` são derivação econômica por analogia, não sinal do domínio.** "Quando o
insumo barateia, o valor migra para o que continua escasso" é um raciocínio que se aplicaria a
qualquer disrupção de barateamento — exatamente o critério de parada (c) do método. Não encontrei
sinal específico de reprecificação de empresa de software por esse motivo nas fontes desta
rodada. Ficam no mapa como derivação válida, com `sinal: fraco` e `confianca: baixa`, e quem ler
deve saber que a base é analógica.

**6. A disrupção-raiz D1 pode simplesmente não se concretizar — e há uma medida apontando para
isso.** O único estudo randomizado disponível sobre efeito real de IA na produtividade de
desenvolvedores experientes (METR, 16 desenvolvedores, 246 tarefas reais em repositórios próprios
com mais de 22 mil estrelas, julho/2025) encontrou **19% de lentidão**, não de aceleração,
enquanto os participantes estimavam ter ficado 20% mais rápidos. Os próprios autores delimitam:
o resultado é um retrato das capacidades do início de 2025, num contexto específico, e não
demonstra falha geral. Mas a direção do erro importa muito para este mapa: se a percepção de
ganho é sistematicamente maior que o ganho medido, boa parte da adoção observada pode ser
movida por percepção, e a curva estaciona sem nunca virar maioria. Se D1 não escala, `e1.2`,
`e1.2.1` e toda a ramificação de D3 caem junto — restaria D2, que tem sinal próprio e
independente.

**7. Um segundo dado empurra na mesma direção cética.** 37,9% dos desenvolvedores declaram que
não pretendem usar agentes, e 46% desconfiam da acurácia da IA contra 33% que confiam. Recusa
declarada dessa magnitude é incompatível com a hipótese de travessia rápida para maioria, que
vários efeitos deste mapa assumem implicitamente ao datar prazos em 2027–2029.

**8. Viés de quem construiu.** Este documento foi produzido por um agente de codificação
executando uma skill — isto é, por uma instância exata do fenômeno que ele analisa. Há um
interesse estrutural em achar a disrupção real, e o cuidado tomado foi o de exigir ator nomeável
no Teste 3 e ancorar cada efeito de 1ª e 2ª ordem em número aberto. Ainda assim, o leitor deve
descontar: um mapa sobre agentes escrito por um agente tende a superestimar agentes. O viés
pedido foi neutro; a origem do texto não é.

**9. Viés da seleção do tema.** O tema chegou à skill já descrito pela disciplina como "o tema
com mais evidência do catálogo inteiro", com uma lista de ferramentas e um conjunto de perguntas
mobilizadoras. Isso é insumo legítimo, mas é também um enquadramento: a pergunta "o que acontece
com o ofício" já estava feita, e o mapa a respondeu em vez de perguntar se ela é a pergunta
certa. Uma leitura alternativa que não foi explorada aqui: talvez o que esteja mudando não seja o
ofício de programar, e sim o de **especificar** — que nunca teve currículo, método nem profissão
própria, e que este mapa trata como consequência quando poderia ser a raiz.

## 8. O que a máquina errou

Cinco correções feitas nesta rodada por ter aberto a fonte antes de escrever. Todas são casos em
que o número recuperado de memória ou de resumo de busca **parecia igualmente confiável** e não
era.

**1. Contagem de estrelas do `spec-kit`, errada por 22%.** Um texto secundário afirmava que o
GitHub Spec Kit "cruzou 111 mil estrelas em junho de 2026". Consultei a API do GitHub
diretamente em 11/09/2026: **135.654**. A diferença não é enorme em ordem de grandeza, mas o
número secundário teria entrado no documento como fato datado e estaria errado por quase um
quarto. Corrigido: o documento usa o valor da API, com a data da consulta.

**2. Pesquisa da Stack Overflow atribuída ao ano errado.** Vários posts datados de 2026 anunciam
"Stack Overflow Developer Survey 2026: 84% de adoção de IA, 3% de confiança alta". Ao abrir a
página oficial, esses números — 84% usando ou planejando usar, 3,1% confiando muito, 46%
desconfiando — são os da edição **2025**. A edição 2026 abriu para respostas em junho de 2026.
Ou seja: dados de 2025 circulando com carimbo de 2026. Corrigido: todas as citações desta
pesquisa no documento dizem 2025.

**3. Número do DORA citado de resumo de busca e removido.** Um resumo de busca atribuía ao
relatório DORA 2025 a afirmação de que "90% dos desenvolvedores usam IA diariamente". Abri
`dora.dev/dora-report-2025` e a página não traz esse número nem nenhuma das métricas de
adoção, throughput ou instabilidade — só o enquadramento de que a IA atua como **amplificador**
das forças e fraquezas organizacionais já existentes. O número foi cortado, e o DORA é citado
neste documento apenas pelo que a página que abri de fato afirma. Verificar o dado teria exigido
baixar o relatório completo, o que não coube nesta rodada — registrado como limitação, não como
fonte.

**4. Versão do benchmark citada errada.** Ia citar "Terminal-Bench 2.0, topo em ~89%". A URL
`tbench.ai/leaderboard/terminal-bench/2.0` hoje serve conteúdo da versão **4.0**, e a tabela com
nomes e pontuações não veio no fetch. O dado que uso é o da Artificial Analysis para
Terminal-Bench **v2.1** (89 tarefas, pass@1 sobre 3 repetições, topo em 91,4%). A lição
específica: neste domínio a versão do benchmark muda mais rápido que o ciclo de escrita de um
documento, e citar "Terminal-Bench" sem versão e sem data é citar nada.

**5. Atribuição de fonte inventada por encadeamento de resumos.** Um resumo de busca atribuía ao
artigo da FlowVerify um dado do CodeRabbit (470 PRs de código aberto, 10,83 problemas por PR
coautorado por IA contra 6,45 humanos). Ao abrir o artigo, o CodeRabbit **não está entre as
fontes citadas** — são Faros AI, LinearB e GitHub. O número foi descartado inteiro. É o erro mais
perigoso dos cinco, porque a citação estava completa, plausível e com atribuição a um veículo
real: só a leitura do veículo desfez.

**O que não apareceu.** Os números da Faros AI, da LinearB, do GitHub, da GitClear, da Snyk, da
Stanford e do METR bateram com o que os resumos diziam, quando abri as fontes. Isso não
demonstra que resumo de busca seja confiável — demonstra que estes cinco erros só foram
encontrados porque as doze fontes foram abertas. Sem abrir, memória verificada e memória não
verificada são indistinguíveis.

**Limitação de sourcing declarada.** Duas fontes que o documento gostaria de ter e não tem:
(a) o relatório DORA completo, que exigia download; (b) uma medida brasileira específica de
adoção de **agente de codificação** — o dado ABES/IDC que uso mede agentes de IA na agenda
corporativa, com amostra de 103 executivos no Brasil, e não substitui o que faltou. A nota sobre
o Brasil na seção 3 é, por isso, mais fraca que o resto do documento, e está marcada como tal.

## 9. Três cenários para 2031

**Cenário A — O ofício se parte em dois.** (central)

A travessia acontece, mas assimétrica: o agente vira padrão em código novo, produto novo e
projeto de vida curta, e continua marginal em sistema legado crítico e setor regulado. A
profissão se divide em duas carreiras com formação, remuneração e prestígio diferentes — quem
**especifica e verifica** (define critério de aceite, desenha o teste, decide o merge, responde
pelo resultado) e quem **mantém e audita** o que ninguém leu. O posto de entrada muda de
natureza antes de encolher: o júnior de 2031 começa revisando, não escrevendo, o que inverte a
ordem tradicional de aprendizado e cria um problema pedagógico real — como formar julgamento em
quem nunca teve de construir. A revisão continua sendo o gargalo, mas administrado: limite de
tamanho de PR, revisão por agente em primeira camada, humano na segunda, e métricas de time
reescritas para medir decisão em vez de volume. A dívida técnica não explode — ela muda de
endereço, do código para o contexto: o que fica caro não é consertar, é **entender**.

**Cenário B — O gargalo não se move.** (cético; e há dado apontando para cá)

A produção acelera e a verificação absorve inteiramente o ganho. O padrão do METR se confirma em
replicações maiores: a percepção de velocidade continua alta e a medição agregada não acompanha,
porque o tempo economizado na escrita reaparece na revisão, no retrabalho e no incidente. A
recusa declarada (37,9%) não se dissolve — endurece, porque ganha justificativa empírica. A
adoção estaciona num platô de early adopter em setores de baixo risco, e agente autônomo em
produção vira prática proibida por política interna em finanças, saúde e infraestrutura, com
comitê de arquitetura exigindo humano no laço por escrito. D2 sobrevive mesmo assim, porque a
camada de instrução é útil independentemente de autonomia — skill e MCP viram infraestrutura
padrão de ferramenta de IA, com a governança que o roadmap de 2026 já prenuncia, sem que o
ofício de programar tenha mudado de forma. Neste cenário, o documento inteiro erra, e a lição é
sobre a diferença entre capacidade demonstrada em benchmark e capacidade entregue em organização.

**Cenário C — A instrução vira a linguagem.** (acelerado)

D2 engole D1. A camada de skill e spec amadurece a ponto de a especificação em linguagem natural
ser o artefato-fonte versionado de fato, com o código tratado como saída derivada — compilada,
descartável, regenerável. O repositório deixa de ser o inventário do que o software faz, e quem
escreve especificação sem escrever código passa a ser contratado como engenheiro, com a fronteira
do organograma redesenhada. As consequências aparecem primeiro na governança, não na
produtividade: em algum ponto entre 2028 e 2031, um incidente com dano atribuível força a
pergunta de quem responde por um defeito escrito em português, e a resposta regulatória cria a
figura de inventário auditável de instruções. Para quem projeta mídia e interação, é o cenário de
maior consequência: a ferramenta a projetar deixa de ser um editor e passa a ser uma sala de
controle — vários processos autônomos, atenção escassa, alarme calibrado, decisão sob incerteza
e rastro para prestar conta depois. O repertório útil passa a ser o de fatores humanos, e a
principal competência de design vira **calibrar confiança**: fazer com que a pessoa desconfie na
medida certa de um sistema que acerta na maior parte das vezes.

## 10. O experimento

**A Sala de Controle** — teste presencial, uma aula, turma dividida em duplas.

**A hipótese a falsear.** Os efeitos `e1.1`, `e3.1` e `e3.1.1` deste mapa dependem todos da mesma
afirmação: *à medida que a coordenação de agentes aumenta a velocidade de entrega, a compreensão
do que foi entregue cai — e a pessoa não percebe a queda.* Se a compreensão **não** cair, ou se
a pessoa perceber a queda com precisão, boa parte da ramificação de 2ª e 3ª ordem deste documento
não se sustenta.

**O desenho.** Três regimes, uma especificação única de tamanho controlado (algo resolvível em
~25 minutos à mão, com critério de aceite escrito e suíte de teste pronta):

- **Regime 1 — à mão.** Sem assistência de IA.
- **Regime 2 — um agente.** Um agente de terminal, humano aprovando por etapa.
- **Regime 3 — três agentes em paralelo.** Três frentes da mesma especificação, humano coordenando.

Cada dupla passa por um regime; os regimes são sorteados, não escolhidos, para não filtrar por
preferência prévia.

**O que medir — quatro números, três deles independentes da percepção:**

1. **Tempo até o critério de aceite.** Cronômetro parando quando a suíte passa.
2. **Linhas efetivamente lidas.** Capturado por gravação de tela, contando linhas de diff que
   estiveram visíveis por mais de dois segundos. É a medida menos confortável e a mais
   importante.
3. **Teste-surpresa de compreensão**, aplicado **depois** da entrega, sem acesso ao código: três
   perguntas sobre o que o código entregue faz num caso de borda que a suíte não cobre. Esta é a
   variável dependente principal.
4. **Autoavaliação, coletada antes do teste-surpresa:** "de 0 a 10, quanto você entende o que
   acabou de entregar?" e "quanto mais rápido você foi do que seria à mão?".

**O que o resultado significa.** O par (4) contra (3) reproduz, em escala de sala de aula, a
estrutura do achado do METR — a distância entre percepção e medição. Se a nota de compreensão cai
do Regime 1 para o 3 enquanto a autoavaliação sobe, a hipótese central do mapa ganha apoio local.
Se a compreensão se mantém, ou se a autoavaliação acompanha a queda (as pessoas **sabem** que não
entenderam), o mapa perde a dobradiça e o cenário B fica mais provável.

**Por que é honesto.** O experimento pode derrubar o documento que o propõe, e o resultado que o
derruba é tão publicável quanto o que o confirma. Limitação a declarar de saída: n pequeno,
tarefa artificial de 25 minutos e ausência de consequência real de erro — nenhum dos três se
parece com produção, e o resultado não generaliza para além da sala.

## 11. Fontes

Doze fontes abertas e lidas nesta rodada. O contador do frontmatter é este número — não o de
obras mencionadas de memória, que é zero.

1. **Stack Overflow Developer Survey 2025 — seção de IA.** Adoção (84%), uso diário (51%),
   confiança (33% confiam, 46% desconfiam, 3,1% confiam muito), uso de agentes (14,1% diário,
   17,4% planejam, 37,9% recusam) e efeitos declarados por usuários de agentes (70,7% economia de
   tempo, 68,7% produtividade, 17,3% colaboração). Mais de 49 mil respondentes.
   `https://survey.stackoverflow.co/2025/ai`
2. **METR — "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer
   Productivity", jul/2025.** ECR com 16 desenvolvedores, 246 tarefas reais, repositórios com
   22 mil+ estrelas; 19% de lentidão medida contra 24% de aceleração prevista e 20% percebida;
   caveats dos autores sobre generalização.
   `https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/`
3. **GitClear — "The Maintainability Gap: 2026 AI Code Quality Research".** 623 milhões de
   mudanças de código, 2023–2026; duplicação +81%, cópia e cola no commit +41%, refatoração −70%
   vs 2022, chamadas entre arquivos −35%, manutenção de legado −74%, long-term update de 1,7%
   para 0,46%.
   `https://www.gitclear.com/the_ai_code_quality_maintainability_gap`
4. **FlowVerify — "The AI Code Review Bottleneck, By the 2026 Numbers".** Agregador; usado pelos
   números que ele atribui explicitamente a Faros AI (22 mil devs, ~4 mil times), LinearB
   (8,1 milhões de PRs, 4.800 times, 42 países) e GitHub (60+ milhões de revisões, ~1 em 5
   envolvendo agente). Fonte secundária, declarada como tal.
   `https://www.flowverify.co/blog/ai-code-review-bottleneck-2026-data`
5. **Snyk — "ToxicSkills" (fev/2026).** 3.984 skills do ClawHub e skills.sh varridas em
   05/02/2026; 13,4% com problema crítico, 36,82% com alguma falha, 76 payloads maliciosos
   confirmados, 8 ainda no ar; permissões herdadas por uma skill instalada.
   `https://snyk.io/blog/toxicskills-malicious-ai-agent-skills-clawhub/`
6. **Model Context Protocol — "The 2026 MCP Roadmap" (blog oficial).** Quatro frentes
   prioritárias, governança com contributor ladder e working groups, enterprise entregue como
   extensão e não como mudança de núcleo.
   `https://blog.modelcontextprotocol.io/posts/2026-mcp-roadmap/`
7. **Artificial Analysis — Terminal-Bench v2.1.** 89 tarefas verificadas programaticamente,
   pass@1 sobre 3 repetições; topo em 91,4%.
   `https://artificialanalysis.ai/evaluations/terminalbench-v2-1`
8. **Guo, Hao, Wang et al. — "From Question Answering to Task Completion: A Survey on Agent
   System and Harness Design", arXiv:2606.20683.** Usada apenas para uma coisa: estabelecer que
   "desenho de harness" já existe como categoria de pesquisa autônoma, separada da capacidade do
   modelo. Ver ressalva na seção 12.
   `https://arxiv.org/pdf/2606.20683`
9. **Stanford Digital Economy Lab — atualização do "Canaries in the Coal Mine?" (jun/2026).**
   Emprego de trabalhadores de 22 a 25 anos em ocupações muito expostas a IA ~19% abaixo do que
   seria se tivesse acompanhado os pares menos expostos; folha de pagamento ADP; a defasagem era
   15% em jul/2025. **Sem recorte por ocupação** — o documento não analisa desenvolvedores em
   separado, e este mapa não pode fingir que analisa.
   `https://digitaleconomy.stanford.edu/news/canariesaug26/`
10. **DORA — "State of AI-assisted Software Development 2025" (página do relatório).** Citada
    apenas pelo enquadramento que a página afirma: a IA como amplificador das forças e fraquezas
    organizacionais existentes. As métricas não estão na página; ver seção 8, item 3.
    `https://dora.dev/dora-report-2025/`
11. **MobileTime — cobertura do estudo ABES/IDC (jun/2026).** 40% das empresas brasileiras com
    plano de investimento em agentes de IA, 33% pretendendo adotar em 12 meses, 53% apontando IA
    e agentes como prioridade estratégica nº 1; amostra de 103 executivos no Brasil e 507 na
    América Latina.
    `https://www.mobiletime.com.br/noticias/15/06/2026/abes-agentes-ia-brasil/`
12. **API REST do GitHub, endpoint `/repos/{owner}/{repo}`, consultada em 11/09/2026.**
    `github/spec-kit` 135.654 estrelas (criado em 21/08/2025); `anthropics/claude-code` 144.756;
    `anomalyco/opencode` 206.709; `openai/codex` 123.382; `cline/cline` 67.842; `Aider-AI/aider`
    48.903.
    `https://api.github.com/repos/github/spec-kit`

## 12. Anexo — o levantamento bruto

### 12.1 Estado da entrevista (Fase 1 da skill)

Os seis pontos foram respondidos. Nenhum ficou em aberto, e nenhum valor foi assumido pela skill
sem instrução — portanto a `confianca` do documento **não** foi rebaixada pela regra de corte da
Fase 1.

| # | Ponto | Resposta recebida |
|---|---|---|
| 1 | Tema e recorte | "Programação agêntica: o desenvolvedor vira orquestrador" — o ofício de programar, não IA para programar em geral. Fronteira declarada com o tema 2 (segurança/contenção) e o tema 3 (memória/observabilidade). |
| 2 | Horizonte | 2031 |
| 3 | Para quem | Quem projeta mídia e interação |
| 4 | Recorte geográfico | Global, com uma nota sobre o Brasil |
| 5 | O que já está descartado | O que já é comum em produto de massa (régua da disciplina). Nenhuma outra exclusão. Também pedido: excluir ideias óbvias que serviriam para qualquer tema. |
| 6 | Viés desejado | Neutro |

Instruções adicionais registradas, fora dos seis pontos: nenhuma disrupção suspeita foi sugerida
de antemão ("descubra"); o critério declarado para mudar de ideia foi evidência de que a adoção
já passou da maioria inicial de Rogers, ou de que a tecnologia não rompe nada (só melhora o que
existe). Ambos foram tratados como o teste central da Fase 2, e o segundo eliminou três
candidatos (ver 12.2). Sobre o primeiro: os 14,1% de uso diário de agentes medidos pela Stack
Overflow ficam **abaixo** da fronteira dos early adopters na curva de Rogers, o que é o resultado
que mantém o tema elegível como disrupção — se estivesse acima de ~34%, o critério declarado de
quem pediu teria derrubado o documento.

`confianca: media`, e não `alta`, por dois motivos declarados: (a) o horizonte de 2031 empurra
quase todos os efeitos de 3ª ordem para `baixa`, por construção do método; (b) duas lacunas de
sourcing permanecem (relatório DORA completo não baixado; nenhuma medida brasileira específica de
adoção de agente de codificação). Não é `baixa` porque as três disrupções-raiz e todos os efeitos
de 1ª e 2ª ordem estão ancorados em número de fonte aberta nesta rodada.

### 12.2 Tecnologias testadas e rejeitadas (Fase 2)

Onze candidatos foram testados; três passaram (seção 4) e oito foram rejeitados. Registro
completo, com o motivo:

| Candidato | Teste 1 (madura?) | Teste 2 (emergente?) | Teste 3 (disruptiva?) | Decisão |
|---|---|---|---|---|
| Autocompletar de IDE (sugestão inline) | **Sim.** Opção padrão em fluxo real, em escala; o que resta é ficar mais barato e mais preciso, não mudar de natureza. | — | — | **Madura.** Rejeitada como raiz. Também excluída de saída pelo ponto 5 da entrevista (comum em produto de massa). Entra na seção 2 como contraste. |
| Chat que explica código | **Sim.** Padrão em fluxo real; 84% de adoção declarada de ferramentas de IA. | — | — | **Madura.** Rejeitada, mesma dupla razão. |
| CI/CD e suíte de teste automatizada | **Sim.** Décadas de produção em escala. | — | — | **Madura.** Rejeitada. Entra na seção 3 como pré-condição de D1: sem teste automatizado confiável, o agente não tem como fechar o ciclo. |
| Geração de protótipo a partir de linguagem natural ("vibe coding") | **Sim**, na forma de produto de massa. | — | Não avaliado — barrado antes. | **Rejeitada** pelo ponto 5 da entrevista. |
| Modelos maiores, mais baratos e mais rápidos | Não. | Sim. | **Não.** A única resposta possível é "fica mais rápido/barato/acessível". É o exemplo de manual de melhoria, não de disrupção. | **Emergente, não disruptiva.** Rejeitada. |
| Revisão de código feita por agente | Não — mas perto: 60+ milhões de revisões, ~1 em 5 no GitHub. | Sim, em adoção rápida. | **Não.** Acelera e barateia um controle que já existe; nenhum ator nomeável perde a razão de existir — o revisor humano continua necessário e, pelos dados de merge sem revisão, mais necessário. | **Emergente, não disruptiva.** Rejeitada como raiz; entra na roda como mecanismo (`e3.1`) e na seção 6 como o wildcard que mais barato derruba o mapa. |
| Sandbox e isolamento de execução do agente | Não. | Sim. | Sim — mas **fora do recorte declarado**: é o objeto do tema 2 (contenção e segurança de agentes autônomos). | **Rejeitada por escopo**, não por mérito. |
| Memória, observabilidade e avaliação de agente (`vibe-log`, `claude-tap`) | Não. | Sim. | Sim — mas **fora do recorte declarado**: objeto do tema 3. | **Rejeitada por escopo.** Entra na seção 6 como sinal fraco, porque a auditoria do processo é o que torna `e1.1.2` e `e3.3` possíveis. |
| Benchmarks (SWE-bench, Terminal-Bench) | — | — | — | **Não é candidato**: é instrumento de medida, não tecnologia que escala e desloca ator. Entra na seção 3 como evidência da curva de capacidade. |

### 12.3 Efeitos cortados pela auditoria (Fase 4)

Dois efeitos foram gerados, auditados e **removidos** da roda. Ficam registrados aqui porque a
skill exige que a rejeição seja verificável:

- **"O software fica barato e abundante, e as empresas passam a construir internamente o que hoje
  compram como SaaS."** Cortado por **pular etapa causal**. O elo supõe que o custo de um software
  é o custo de escrevê-lo, e não é: operar, manter, cumprir conformidade, dar suporte e responder
  por incidente continuam custando o mesmo — nenhum deles barateia com D1. Sem esse passo
  intermediário, o efeito era uma afirmação mágica com verbo forte.
- **"O número de projetos de software em existência cresce em ordem de grandeza."** Cortado por
  ser **extrapolação linear pura** — é a curva de hoje, só que mais — e por já estar parcialmente
  medido no presente (throughput por pessoa +33,7%, Faros). Descrever o presente com prazo futuro
  é o erro que o critério de parada (a) do método existe para pegar.

Efeitos **rebaixados ou reescritos** (mantidos na roda, detalhados na seção 7): `e1.2.1` e
`e2.2.1` rebaixados por velocidade sem precedente; `e3.2` e `e3.2.1` marcados como derivação
analógica sem sinal do domínio; `e3.1` reescrito para incluir o passo que faltava; `e1.1`
mantido em confiança alta, mas sinalizado como próximo da linha entre estado atual e efeito.
Nenhum efeito sobreviveu à auditoria sem que ao menos a sua classificação fosse reexaminada, e
seis dos vinte sofreram alteração explícita — que é o resultado que a Fase 4 exige.

### 12.4 Buscas que não deram em nada, e ressalvas de fonte

- **Medida brasileira de adoção de agente de codificação.** Buscada em português e em inglês.
  Não encontrada. O que existe é (a) o estudo ABES/IDC, que mede agentes de IA na agenda
  corporativa, não uso por times de engenharia, e (b) reportagem sobre o Octoverse do GitHub
  citando 8,3 milhões de desenvolvedores no Brasil — cuja página retornou **HTTP 403** no fetch,
  motivo pelo qual esse número **não** aparece no corpo do documento. A nota sobre o Brasil na
  seção 3 é, por isso, a parte mais fraca deste mapa, e está declarada como tal.
- **Página oficial da ABES.** Também retornou **HTTP 403**. Os números do estudo ABES/IDC vêm da
  cobertura do MobileTime, fonte secundária, declarada como tal na seção 11.
- **`tbench.ai/leaderboard/terminal-bench/2.0`.** Aberta; o conteúdo servido é da versão 4.0 e a
  tabela de agentes não veio no fetch. Não conta como fonte e não é citada. Substituída pela
  Artificial Analysis (fonte 7).
- **`dora.dev/dora-report-2025`.** Aberta, mas sem nenhuma das métricas procuradas. Citada apenas
  pelo que afirma. Ver seção 8, item 3.
- **arXiv:2606.20683 (survey de harness).** O fetch devolveu uma síntese em nível bastante geral,
  sem números nem taxonomia detalhada — provavelmente por ser um PDF longo. Por isso a fonte é
  usada para **uma única afirmação**: que o desenho de harness já constitui categoria de pesquisa
  nomeada e autônoma. Nenhum dado quantitativo deste documento vem dela.
- **Stanford Canaries.** Aberta e confirmada, mas com a limitação decisiva registrada na fonte 9:
  o documento **não** desagrega por ocupação e não menciona desenvolvedores de software
  separadamente. O efeito `e1.2` cita o dado como contexto de ocupações expostas, e não como
  medida do mercado de desenvolvimento — a tentação de ler os 19% como "vagas de programador
  júnior caíram 19%" é exatamente o tipo de erro que esta ressalva existe para impedir.
