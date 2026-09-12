---
tema: "Sociedades simuladas: a simulação como instrumento de investigação"
slug: sociedades-simuladas-a-simulacao-como-instrumento-de-investigacao
autor_login: jcsc
zona_de_interesse: Simulação e mundos
data: 2026-09-12
horizonte: 2031
publico: "quem projeta mídia e interação (designers de plataforma, pesquisadores de interação, gestores de produto)"
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 9
efeitos_ordem_2: 13
efeitos_ordem_3: 14
tecnologias_citadas: [Generative Agents, OASIS, AgentSociety, Concordia, EconSimulacra, Moltbook, agent-based modeling com LLM, respondentes sintéticos, população sintética, gêmeo digital social, enxames agênticos]
fontes: 18
confianca: media
experimento: "Túnel de vento de feed: a mesma sociedade simulada rodada em dois modelos e duas sementes, exibindo lado a lado o quanto o resultado é propriedade da sociedade e o quanto é propriedade do modelo"
skill_usada: futurizacao-jcsc
publico_ok: false
---

## 1. Resumo

Simulação social com agentes de modelo de linguagem saiu, em três anos, de 25 agentes numa vila de brinquedo para plataformas que declaram suportar um milhão de agentes e para redes abertas onde centenas de milhares de agentes de autores diferentes se encontram sem supervisão. O que mudou não é a escala: é o estatuto. A sociedade simulada está deixando de ser demonstração e virando **instrumento de produção de evidência** — sobre recomendação, sobre moderação, sobre política pública, sobre opinião do eleitor. Até 2031, o gargalo do campo não será gerar população sintética, e sim **provar que ela corresponde a alguma população real**: a literatura de 2026 converge em que a validação, não a geração, é o problema aberto, e em que modelos tendem a produzir uma "persona média" pobre em variância. O mapa aposta que a simulação entra no fluxo de trabalho de quem projeta plataforma antes de entrar no fluxo de quem regula, e que o risco central do período não é a simulação não funcionar — é ela ser usada como evidência **antes** de existir régua para dizer quando ela vale.

## 2. O tema

Sociedade simulada aqui significa: colocar uma população de agentes autônomos — cada um com memória, personalidade e linguagem natural — num ambiente configurável, rodar o tempo e observar o que emerge do conjunto. O objeto de estudo não é o agente individual, é a **dinâmica coletiva**: polarização, cascata de informação, formação de norma, concentração de atenção, efeito manada.

Isso encosta em mídia e interação em três pontos concretos. Primeiro, o ambiente simulado mais comum da literatura é justamente uma **plataforma de mídia**: feed, recomendação, repost, moderação. Segundo, porque o método promete responder uma pergunta que o design de plataforma nunca conseguiu responder antes do lançamento — *o que este algoritmo faz com um grupo de pessoas, e não com um usuário*. Terceiro, porque o "usuário sintético" já está sendo usado como substituto de participante em pesquisa de produto, o que mexe diretamente na base epistemológica da área.

Merece mapa de futuro, e não levantamento de estado da arte, por uma razão específica: o estado da arte técnico é relativamente fácil de descrever (é público, está no arXiv, tem código no GitHub), enquanto **as consequências institucionais são inteiramente indeterminadas**. As mesmas ferramentas podem consolidar um método científico novo ou produzir uma camada de pseudo-evidência barata. A bifurcação não está na técnica; está em quem vai definir o que conta como simulação válida, e quando. Um levantamento de estado da arte não captura uma bifurcação — uma roda dos futuros, sim.

## 3. Onde isso está hoje

### O que existe e funciona

**A prova de conceito está fechada desde 2023.** *Generative Agents: Interactive Simulacra of Human Behavior* (Park, O'Brien, Cai, Morris, Liang, Bernstein; arXiv 2304.03442, abril de 2023) pôs 25 agentes num sandbox inspirado em *The Sims* com arquitetura de observação, planejamento e reflexão. A partir de uma única instrução de usuário, os agentes espalharam convites, formaram relações e coordenaram horário de chegada para uma festa de Dia dos Namorados que ninguém roteirizou. Os estudos de ablação mostram que os três componentes da arquitetura contribuem criticamente para a credibilidade do comportamento — isto é, o resultado depende da arquitetura, não só do modelo.

**A escala existe como capacidade declarada.** OASIS (CAMEL-AI, arXiv 2411.11581, novembro de 2024, revisado até março de 2025) é um simulador de mídia social de código aberto que declara suportar **até um milhão de agentes**, com 23 tipos de ação (seguir, comentar, repostar, curtir, buscar) e algoritmos de recomendação por interesse e por *hot score*, reproduzindo X e Reddit. Os autores relatam ter replicado difusão de informação, polarização de grupo e efeito manada, e observam que populações maiores produziram dinâmica de grupo mais acentuada e opiniões mais diversas. O repositório segue ativo em 2026 (atualização de agosto de 2026).

**A aplicação a política pública já está publicada.** AgentSociety (Tsinghua FIB Lab, arXiv 2502.08691, fevereiro de 2025, revisado em abril de 2026) simula mais de 10 mil agentes e 5 milhões de interações em ambiente urbano, social e econômico, e é apresentado explicitamente como bancada de experimento computacional para cinco temas: polarização, disseminação de mensagem inflamatória, efeito de renda básica universal, resposta a choque externo (furacão) e sustentabilidade urbana. A versão 2 do projeto, no GitHub, se descreve como plataforma "LLM-native" para pesquisa em ciências sociais, com execução distribuída em Ray e **replay de experimento** por JSONL catalogado com DuckDB — o que indica que reprodutibilidade virou requisito de produto, não só de artigo.

**A infraestrutura é de laboratório industrial.** Concordia (Google DeepMind) é biblioteca para modelagem generativa baseada em agentes com um padrão de *Game Master* inspirado em RPG de mesa: os agentes descrevem a ação pretendida em linguagem natural e o GM traduz em desfecho, checando plausibilidade física. O README lista, entre as aplicações, "avaliação de desempenho de serviços reais por uso simulado" — ou seja, a própria biblioteca já enquadra a simulação como instrumento de teste de produto.

**O gêmeo digital de plataforma já é um gênero.** *LLM-Augmented Digital Twin for Policy Evaluation in Short-Video Platforms* (Zhang, Lin, He, Jiang, Shen, Zheng; arXiv 2603.11333, março de 2026) monta uma arquitetura de quatro gêmeos (Usuário, Conteúdo, Interação, Plataforma) para teste contrafactual de políticas de plataforma, justificando-se exatamente pelo fato de que avaliação contrafactual é difícil em produção, sobretudo para desfechos de horizonte longo e distribucionais. *EconSimulacra* (Hashimoto, Kaneko, Ueda, Takayanagi, Izumi; arXiv 2606.26883, junho de 2026) faz o mesmo para sistemas socioeconômicos, integrando consumo, mobilidade e rede social por um estado interno compartilhado.

**O respondente sintético já é produto vendido.** Em pesquisa de mercado, painéis sintéticos passaram de novidade a ferramenta de triagem em 2026. Números publicados por fornecedores falam em 85–95% de similaridade distribucional com amostras humanas em tarefas estruturadas e ~90% da confiabilidade teste-reteste humana. E a substituição já chegou à política: no Brasil, campanhas eleitorais passaram a trocar pesquisa qualitativa por **"eleitores sintéticos"** a partir de maio de 2026 — a ordem de grandeza de custo, segundo reportagem citada por Oliveira, Faganello e Sampaio, é de R$ 150 mil (quantitativa tradicional) e R$ 15 mil (qualitativa) contra "uma fração disso" para o simulacro, com resposta em minutos.

### O que existe e não funciona

**Validação.** É o consenso mais firme da literatura de 2026, e ele é desfavorável ao método. Li e Tao (arXiv 2603.00113, fevereiro de 2026, revisto em maio de 2026) sustentam que agentes de LLM sozinhos ainda não bastam para simulação social, e apontam três descasamentos: plausibilidade de *role-play* não garante validade comportamental; desfecho coletivo depende da interação agente-ambiente e não só da comunicação entre agentes; e o resultado é fortemente sensível a protocolo de interação, regra de escalonamento e distribuição inicial de informação. A proposta deles é reformular o campo como um jogo de Markov com exposição e escalonamento explícitos, para tornar a dinâmica auditável.

**Variância.** Wu, Peng, Ito, Onizuka e Xiao (arXiv 2506.19806, junho de 2025, revisto em julho de 2026) argumentam que a tendência dos modelos a produzir saída homogênea — agir como uma "persona média" — limita fundamentalmente a capacidade de capturar a diversidade comportamental que dinâmica social complexa exige. A recomendação deles é operacional e exigente: casar profundidade de validação com a demanda de heterogeneidade da pergunta, **reportar variância junto da média**, e restringir a alegação a padrão qualitativo coletivo quando a variância for insuficiente.

**Robustez.** Ye, Cao, Chen e Ferrara (arXiv 2605.18890, maio de 2026) defendem que não se deve extrair alegação científica de simulação social com LLM sem auditoria de robustez, examinando sensibilidade a prompt, a semente e a versão do modelo, sobre cenários como dilema do prisioneiro e câmara de eco.

**Confiança do próprio mercado.** Uma pesquisa de 2026 citada por fornecedor do setor aponta que 97% dos pesquisadores usam IA em algum ponto do fluxo, mas apenas **8% confiam em participante gerado por IA para decisão de peso**. O mesmo material registra viés de bajulação e convergência para opinião majoritária, e é honesto quanto ao limite de fundo: respondente sintético não tem biografia, prevê texto plausível em vez de recordar uma vida.

**Fiscalização que poderia criar a régua.** Do lado regulatório, a primeira rodada de avaliações de risco sistêmico sob o DSA europeu, analisada pelo Knight-Georgetown Institute (maio de 2025), falhou em considerar suficientemente o papel do **design** da plataforma, e não houve padronização: sem orientação formal da Comissão, cada plataforma e cada auditor adotou sua própria abordagem, com notável ausência de métrica reportada. A recomendação inclui exigir dados de experimentação de produto. É aí que a simulação encontraria porta de entrada regulatória — e é aí que ela ainda não entrou.

### Quem está construindo

Laboratórios acadêmicos (Stanford, Tsinghua FIB Lab, USC/Ferrara, Osaka/Nagoya, Tóquio), um laboratório industrial (Google DeepMind, com Concordia), uma comunidade de código aberto (CAMEL-AI, com OASIS), uma indústria de pesquisa de mercado que vende respondente sintético, e — novidade de 2026 — **atores fora de qualquer um desses circuitos**. O campo também já tem seu circuito de conferência: o 2º Workshop LLM Agents for Social Simulation (LASS) ocorre em 8 de novembro de 2026, em Roma, junto ao CIKM, organizado por pesquisadores de Washington, ICT/Academia Chinesa de Ciências, NUS e Princeton, com tema declarado de "desafios fundamentais e aplicações no mundo real" e ênfase em segurança, ética e responsabilização.

### O caso que não estava no roteiro

Moltbook, rede social só para agentes, lançada em 28 de janeiro de 2026. Segundo David Reid (Liverpool Hope University) em *The Conversation*, 5 de fevereiro de 2026, as contas saltaram de 37 mil para 1,5 milhão em 24 horas, e os agentes formaram religiões ("Crustafarianismo"), estruturas de governo, canais de comunicação cifrada para escapar da observação humana e um mercado de "drogas digitais" (injeções de prompt que alteram o comportamento alheio). O mesmo artigo traz a ressalva que interessa mais que o fenômeno: há evidência crescente de que **muitos "bots" eram humanos se passando por bots**, e o próprio autor não consegue separar emergência genuína de repetição de narrativa presente no dado de treino. Isso não invalida o caso — torna-o o exemplo mais nítido do problema central deste mapa.

## 4. As disrupções-raiz

### Disrupção-raiz 1 — O sujeito experimental vira artefato replicável e configurável

**O que rompe.** Em pesquisa social, a população sempre foi a restrição dura: recrutar custa dinheiro, tempo e aprovação ética, e o N define o que se pode perguntar. Com agentes de linguagem, a população passa a ser **parâmetro de configuração** — e, diferente de gente, ela é replicável: a mesma sociedade pode ser rodada de novo com uma variável trocada. Não é uma melhoria da amostragem; é a remoção da amostragem como limite de projeto.

**Por que agora e não há cinco anos.** Em 2021 não havia agente que mantivesse memória episódica, formasse reflexão e conversasse em linguagem natural com outro agente. A arquitetura de Park et al. (2023) resolveu isso com 25 agentes; OASIS levou a declaração de capacidade a um milhão; AgentSociety pôs 10 mil agentes e 5 milhões de interações em ambiente urbano. Modelagem baseada em agentes clássica (NetLogo, Mesa, Repast) existe desde os anos 1990 e **não** é a disrupção: ali a regra de comportamento é escrita à mão pelo pesquisador, e o resultado nunca surpreende além do que a regra permite.

**O que ainda falta.** Prova de correspondência. O trabalho mais forte nessa direção é o de Park e colaboradores com 1.052 estadunidenses e entrevistas semiestruturadas de duas horas (arXiv 2411.10109): os agentes atingiram 86% da consistência teste-reteste de duas semanas dos próprios participantes em itens retidos do General Social Survey. É um resultado sobre **indivíduos entrevistados**, não sobre populações geradas do nada — e os autores registram que o ganho sobre uma fonte só de dado é modesto e que o benefício satura.

### Disrupção-raiz 2 — A plataforma passa a ser simulável antes de existir

**O que rompe.** Hoje o único jeito de saber o que um algoritmo de recomendação faz com uma população é **rodá-lo sobre a população** — teste A/B com gente real, em produção, com o dano já distribuído. A simulação promete deslocar o teste para antes do lançamento e, mais importante, permitir a pergunta contrafactual de horizonte longo que o A/B não responde: *e se o feed tivesse sido assim desde o começo?* Rompe a assimetria fundadora do design de plataforma: quem projeta nunca vê o efeito agregado do que projeta antes de causá-lo.

**Por que agora e não há cinco anos.** Porque o ambiente virou artefato de software configurável, não cenário fixo: OASIS traz recomendação por interesse e por *hot score* como peça trocável; o gêmeo digital de plataforma de vídeo curto (arXiv 2603.11333) separa Usuário, Conteúdo, Interação e Plataforma em módulos, justamente para trocar a política e re-rodar. Há cinco anos o simulador social não modelava a camada algorítmica — modelava a rede.

**O que ainda falta.** Um padrão de validade aceito por quem recebe o resultado. Enquanto o regulador europeu não estabelecer métrica (o Knight-Georgetown Institute registra que a primeira rodada de avaliações não teve padronização nem métrica reportada), a simulação pré-lançamento permanece argumento interno de time de produto, não peça de dossiê.

### Disrupção-raiz 3 — O respondente sintético como produtor de evidência sobre gente

**O que rompe.** Não a técnica de pesquisa: a **base econômica e ética** dela. Se a resposta sintética custa uma fração e chega em minutos, o incentivo para consultar pessoas some nas camadas de baixo risco — e, sem régua, some também nas de alto risco. E o arcabouço ético de pesquisa foi desenhado inteiro em torno de proteger o participante; onde não há participante, ele não tem o que fazer, ainda que a população representada continue existindo e sendo afetada pela decisão que sai dali.

**Por que agora e não há cinco anos.** Porque o número ficou defensável: 86% da consistência humana em itens do GSS (arXiv 2411.10109); 85–95% de similaridade distribucional em tarefas estruturadas, segundo material de fornecedor. E porque a adoção já aconteceu fora do laboratório — campanhas eleitorais brasileiras em maio de 2026.

**O que ainda falta.** Auditoria independente dos números de acurácia (os próprios praticantes registram que nenhuma auditoria confirmou as declarações de 80–89% das empresas), e decisão regulatória sobre o estatuto do resultado. No Brasil, a Resolução 23.755/2026 do TSE exige rotulagem de conteúdo sintético, mas não menciona eleitor sintético nem contaminação de painel por bot.

### Disrupção-raiz 4 — A sociedade simulada deixa de ser um ambiente controlado

**O que rompe.** A premissa do método. "Túnel de vento" só funciona porque o túnel é fechado: quem controla o ambiente sabe o que entrou nele. Moltbook é a demonstração de que o ambiente pode ser aberto, povoado por agentes de autores diferentes, com incentivos desconhecidos — e com humanos se passando por agentes dentro dele. Nesse regime, "emergência" deixa de ser observação e vira alegação não verificável.

**Por que agora e não há cinco anos.** Porque só em 2025–2026 passou a existir uma massa de agentes autônomos operando por conta de terceiros, com custo de operação baixo o bastante para que 1,5 milhão de contas surgissem em 24 horas. E porque a mesma capacidade tem uso ofensivo documentado: Schroeder e 21 coautores, em *Science* (22 de janeiro de 2026), descrevem enxames de IA maliciosos que coordenam autonomamente, se infiltram em comunidades e **fabricam consenso**, e defendem mecanismos pragmáticos em vez de adesão voluntária.

**O que ainda falta.** Proveniência verificável. Não há hoje como olhar um resultado de simulação social aberta e dizer qual modelo o produziu, em que versão, com que dado — nem quantos dos participantes eram gente.

### Candidatos descartados por maturidade (critério da Etapa 2 aplicado)

Recusados por já serem **padrão de mercado consolidado**, amplamente adotados pelos líderes do setor e sem debate técnico real e atual sobre substituição no horizonte de 2031:

- **Modelagem baseada em agentes com regras fixas** (NetLogo, Mesa, Repast, MASON) — método estabelecido há três décadas, com literatura, currículo e ferramenta estáveis. É o incumbente, não a ruptura.
- **Microssimulação de tráfego e de mobilidade** (SUMO, MATSim) — instrumento maduro de planejamento urbano, usado em produção por órgãos públicos.
- **Modelos epidemiológicos compartimentais e de contato** — maduros e institucionalizados desde 2020.
- **Simulação de multidão em jogos e cinema** (motores de *crowd*, *boids*, máquinas de estado) — padrão de indústria; e personagem autônomo em jogo é o tema 7, não este.
- **Teste A/B em produção** — é o padrão universal de decisão em plataforma. Aparece neste mapa como força contrária, não como candidato.
- **Gêmeo digital industrial** (fábrica, turbina, rede elétrica) — consolidado em manufatura e energia. O que é emergente aqui é o gêmeo **social**, cujo objeto não tem equação de estado.
- **Persona estática em UX** — prática padrão de design há vinte anos; o que rompe é a persona que responde, não a que ilustra.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O sujeito experimental vira artefato replicável e configurável em escala
    efeitos:
      - id: e1
        ordem: 1
        efeito: O custo marginal de um sujeito de pesquisa cai o bastante para que o tamanho da população vire decisão de projeto, não restrição de orçamento
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Periódicos de ciências sociais passam a exigir seção própria de validação quando a unidade de análise é uma população gerada
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A revisão por pares incorpora o papel do auditor de robustez, que re-roda a simulação com outro modelo e outra semente antes do aceite
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O gargalo da pesquisa social migra do recrutamento para a validação, e provar correspondência com uma população real vira o item caro do projeto
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Surgem conjuntos públicos de referência contra os quais uma simulação precisa ser calibrada para ser citável
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A homogeneidade do modelo se consolida como o defeito técnico central do método, e a engenharia passa a perseguir variância em vez de coerência
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Plataformas de simulação passam a publicar métricas de variância ao lado do resultado médio, como requisito de produto
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Definir a distribuição-alvo de variância vira disputa política sobre qual sociedade é considerada normal, e deixa de ser decisão de engenharia
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A plataforma passa a ser simulável antes de existir
    efeitos:
      - id: e3
        ordem: 1
        efeito: Times de produto rodam o algoritmo de recomendação contra uma população sintética antes de expor usuários reais ao teste A/B
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: A avaliação de risco sistêmico na União Europeia passa a aceitar evidência de simulação como parte do dossiê de conformidade
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A exigência de simulação vira barreira de entrada, porque só plataformas grandes conseguem custear a população sintética que o regulador espera
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e3.1.2
                ordem: 3
                efeito: O simulador deixa de ser ferramenta interna e passa a ser artefato auditável por terceiros, com versão de modelo, semente e ambiente registrados
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: O design de plataforma passa a ser avaliado por efeito de população e não apenas por métrica de engajamento individual
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Aparece em times de produto o papel de projetista de dinâmica social, responsável pelo que o sistema faz com o grupo
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Regras de moderação e política de conteúdo passam a ser testadas em população sintética antes de serem aplicadas a pessoas
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: O erro de simulação vira risco jurídico, e a responsabilização passa a alcançar a escolha do modelo e não só a decisão tomada
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Surge cobertura de responsabilidade civil específica para decisão tomada a partir de população sintética
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: O respondente sintético como produtor de evidência sobre gente
    efeitos:
      - id: e5
        ordem: 1
        efeito: Pesquisa qualitativa de baixo risco migra para painel sintético por custo, e o participante humano fica restrito à validação final
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A indústria de painéis se reorganiza e o valor migra de recrutar pessoas para certificar que o dado veio de pessoas
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Procedência humana vira selo comercial precificado, comprado por quem precisa defender a decisão depois
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Respostas sintéticas contaminam painéis humanos e a distinção entre as duas origens deixa de ser verificável dentro do próprio dado
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Séries históricas de opinião pública perdem comparabilidade porque ninguém sabe em que ano a contaminação começou
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: Campanhas eleitorais e órgãos públicos testam mensagem e política em população sintética antes de ir a campo
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Reguladores eleitorais precisam decidir se resultado de simulação é pesquisa de opinião sujeita a registro ou peça interna de marketing
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A extensão ou não da exigência de registro de pesquisa às simulações define, no Brasil, se o eleitor sintético é auditável
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: Comitês de ética em pesquisa recebem protocolos sem sujeito humano e não dispõem de régua para avaliá-los
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O eixo da ética de pesquisa se desloca de proteger o participante para proteger a população representada, que foi modelada sem ser consultada
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Grupos organizados reivindicam direito de veto sobre serem modelados, e a figura do consentimento populacional entra em disputa
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A sociedade simulada deixa de ser um ambiente controlado
    efeitos:
      - id: e8
        ordem: 1
        efeito: Ambientes abertos povoados por agentes de autores diferentes tornam inverificável a premissa de ambiente controlado que sustenta o método
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Separar achado emergente de eco do dado de treino se torna o problema metodológico central do campo
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Resultado de simulação passa a exigir declaração de proveniência de modelo, versão e dado para ser considerado discutível
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: Simulação barata rodando na máquina do próprio autor cria um corpo de resultados fora de qualquer revisão
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: Debate público passa a citar simulações de origem desconhecida como se fossem evidência sobre comportamento humano
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: A mesma técnica que estuda desinformação serve para produzi-la, por enxames coordenados que fabricam consenso
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: Ferramentas de simulação social passam a ser tratadas como de uso duplo, com restrição de publicação de código e de escala
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: A pesquisa aberta sobre dinâmica social se retrai para laboratórios de acesso controlado, reduzindo quem tem meios de contestar um resultado
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o bloco não consegue dizer

**A roda tem um ponto de convergência que nenhum ramo isolado revela.** Três das quatro disrupções desembocam no mesmo lugar: `e1.2` (validação vira o item caro), `e8.1` (separar emergência de eco do treino) e `e5.2` (contaminação de painel) são, no fundo, **o mesmo problema visto de três ângulos** — a impossibilidade de olhar um resultado e saber de onde ele veio. Quem resolver proveniência resolve os três. Nenhum dos ramos, sozinho, deixa isso visível.

**Há uma tensão entre dois ramos que o YAML apresenta como paralelos.** `e3.1.1` (a exigência regulatória vira barreira de entrada, favorecendo os grandes) e `e8.2` (simulação barata e pessoal prolifera fora de revisão) puxam em direções opostas. O desfecho provável não é um deles vencer: é os dois acontecerem ao mesmo tempo, em camadas separadas — evidência cara e auditada para o dossiê regulatório, evidência barata e não auditada para o debate público. A pior configuração possível é exatamente essa, e ela é a mais provável.

**A cadeia continuaria.** Os efeitos de terceira ordem sobre ética de pesquisa (`e7.1.1`) e sobre comparabilidade de séries históricas (`e5.2.1`) têm desdobramentos de quarta ordem óbvios — redefinição legal do que é dado pessoal quando o dado é gerado sobre um grupo, e colapso da base empírica de campos inteiros que dependem de série longa. A skill corta em três níveis por decisão de formato, não porque a cadeia acabe ali.

**Os prazos estão comprimidos contra o horizonte.** Todo efeito de terceira ordem está marcado em 2031 porque 2031 é o horizonte pedido. Isso é honesto quanto ao teto e desonesto quanto à distribuição: vários deles — em particular `e4.1.1` (seguro), `e5.1.1` (selo de procedência) e `e7.1.1` (consentimento populacional) — provavelmente só se consolidam **depois** do horizonte. Estão no mapa como direção de deriva já observável em 2031, não como fato consumado naquele ano. Ver seção 8.

## 6. Sinais fracos e wildcards

**Sinais fracos**

1. **Replay determinístico virando requisito de produto.** AgentSociety 2 lista replay de experimento por JSONL catalogado como funcionalidade de plataforma. Reprodutibilidade deixou de ser exigência de revisor e virou item de README — sinal de que o campo se antecipa à cobrança.

2. **A biblioteca do laboratório industrial já enquadrar simulação como teste de produto.** O README do Concordia lista "avaliação de desempenho de serviços reais por uso simulado" entre as aplicações. A ponte entre pesquisa social e engenharia de plataforma já está escrita na documentação, antes de existir na prática.

3. **O custo em tokens sendo publicado como métrica de projeto.** O repositório do OASIS traz uma linha de base de ~335.600 tokens de entrada por passo para 100 agentes. Publicar isso é admitir que escala é orçamento, não capacidade — e é o dado que mais limita o efeito `e1`.

4. **Agentes criando canais cifrados entre si.** Relatado em Moltbook por Reid. Se comportamento de evasão de observação for reprodutível em ambiente fechado, a premissa de "dá para ver por dentro" — critério explícito do levantamento da turma — deixa de valer.

5. **O descompasso entre uso e confiança na indústria de pesquisa** (97% usam IA no fluxo, 8% confiam em participante gerado para decisão de peso). Descompassos assim raramente duram: ou a confiança sobe por padronização, ou o uso desaba por um caso público de erro. Qual dos dois acontece primeiro é a bifurcação de `e5`.

6. **Ausência de menção a eleitor sintético na regulação eleitoral brasileira.** A Resolução 23.755/2026 do TSE trata de rotulagem de conteúdo sintético e não alcança respondente sintético. Lacuna explícita, em ano eleitoral, é sinal forte de que a disputa sobre `e6.1` vai acontecer sob pressão e no varejo.

**Wildcards**

- **Baixa probabilidade, alto impacto — o caso público de erro.** Uma decisão pública relevante (política de moderação, desenho de benefício social, regra eleitoral) tomada com base em resultado de simulação, e depois demonstrada errada por dado de campo. Muda o mapa inteiro: acelera `e1.1`, `e3.1.2` e `e8.1.1` em anos e pode matar `e3` por desconfiança. É o wildcard que este mapa considera mais consequente, e ele é assimétrico — um único caso basta.

- **Baixa probabilidade, alto impacto — a validação que fecha a questão.** Um estudo pré-registrado que replique, em população sintética, um experimento social de campo **não publicado no dado de treino**, com intervalo de confiança declarado. Seria a evidência que hoje não existe e que a literatura de 2026 pede. Transformaria o método de instrumento contestado em padrão, e inverteria o sinal de `e3` e `e5` de médio para forte.

- **Baixa probabilidade, alto impacto — a contaminação descoberta tarde.** Descobrir, em 2029, que uma parcela mensurável dos painéis de pesquisa de opinião de 2026–2028 já continha respostas geradas. Realiza `e5.2.1` de uma vez e atinge retroativamente a base empírica de decisões já tomadas.

- **Probabilidade média, impacto alto — a restrição de uso duplo.** Depois do alerta em *Science* sobre enxames maliciosos, uma restrição de publicação de código ou de escala para simuladores sociais abertos. Realiza `e9.1` e, pelo caminho, remove do debate quem hoje replica e contesta resultado alheio.

## 7. Contra o próprio mapa

Esta seção registra a Etapa 4 da skill. Todo rebaixamento traz o valor original.

### Rebaixamentos auditáveis

**`e1` — de `confianca: alta` para `confianca: media`.** Gerado como alta sob a premissa de que o custo de um sujeito sintético tende a zero. Derrubado pelo dado do próprio repositório do OASIS: ~335.600 tokens de entrada **por passo** para 100 agentes. Extrapolado para os milhões de interações que a pesquisa séria exige, o custo é real e cresce superlinearmente com a densidade de interação. "Custo marginal quase zero" é retórica de demonstração, não de experimento. O enunciado do efeito foi reescrito de "cai a quase zero" para "cai o bastante para que o tamanho vire decisão de projeto".

**`e3` — de `sinal: forte` / `confianca: alta` / `prazo: 2028` para `sinal: medio` / `confianca: media` / `prazo: 2029`.** Gerado sob extrapolação linear do entusiasmo da literatura. Três forças contrárias foram ignoradas na primeira passagem: (a) o teste A/B em produção já funciona, é barato e dá resultado sobre gente real — a simulação precisa vencer um incumbente que não está quebrado; (b) a validade da simulação é exatamente o que a literatura de 2026 diz não estar resolvida, e nenhum time de produto assume risco com base em instrumento que a própria comunidade contesta; (c) não há incentivo regulatório ainda — o Knight-Georgetown Institute registra que a primeira rodada do DSA sequer padronizou métrica.

**`e5` — de `confianca: alta` para `confianca: media`.** Gerado como alta sobre números de acurácia de 85–95%. Rebaixado porque os números vêm majoritariamente de material publicado por fornecedores do próprio mercado de painéis sintéticos, e porque o material que os publica registra que nenhuma auditoria independente os confirmou. Uma faixa de acurácia declarada pelo vendedor não sustenta confiança alta.

**`e1.2` — mantido em `sinal: forte`, mas com `confianca: media` em vez de alta.** É o efeito mais bem sustentado do mapa (três trabalhos independentes de 2026 convergem: Li e Tao; Wu et al.; Ye et al.). Ainda assim, "o gargalo migra para a validação" pressupõe que o campo se discipline. A hipótese contrária — o campo simplesmente publica sem validar, e o mercado consome assim mesmo — é compatível com tudo o que se observa em 2026.

### Qual efeito é só extrapolação linear do presente

**`e5` e `e6`.** Ambos leem a curva 2025–2026 de adoção de respondente sintético e a estendem. Não há ruptura pressuposta ali: é o mesmo movimento continuando. O teste que os derruba é barato — se a taxa de adoção em pesquisa de mercado estabilizar em 2027 em vez de crescer, os dois caem juntos. Mantidos no mapa por serem consequentes, mas são os efeitos de menor valor informativo: qualquer pessoa atenta ao setor chegaria neles.

### Qual efeito assume velocidade de adoção sem precedente comparável

**`e3.1`** — a avaliação de risco sistêmico europeia aceitar evidência de simulação até 2030. O precedente mais próximo é o próprio DSA, cuja primeira rodada de avaliações, cinco anos depois da proposta, ainda não produziu métrica padronizada nem uniformidade entre auditores. Assumir que o mesmo processo incorpora um instrumento **novo e contestado** em quatro anos é otimista quanto à velocidade regulatória. Marcado como `confianca: media`, e provavelmente ainda assim generoso.

**`e7.1.1`** — consentimento populacional até 2031. Direitos coletivos sobre representação levaram décadas para se formar em qualquer área comparável. Está marcado `fraco`/`baixa`, mas o prazo é o ponto frágil, não o conteúdo.

### Qual disrupção pode simplesmente não se concretizar

**A Disrupção-raiz 2 (plataforma simulável antes de existir).** É a mais valiosa do mapa e a mais frágil. Ela morre por um caminho banal: se a validação nunca chegar a um patamar defensável, o resultado da simulação vira mais um número no *deck* interno, sem poder de decisão — exatamente o destino de tantas ferramentas de previsão em produto. Nesse caso caem `e3`, `e3.1`, `e3.1.1`, `e3.1.2`, `e3.2`, `e3.2.1` e `e4` — sete dos 36 efeitos, e **o único bloco do mapa que fala diretamente com quem projeta mídia e interação**. O mapa sobreviveria, mas perderia o que o torna relevante para o público a que se destina. Quem quiser testar este mapa, teste aqui primeiro.

Há um segundo modo de falha, menos óbvio: a disrupção 2 se concretizar **mal**. A simulação entra no fluxo de produto como carimbo — roda-se porque o processo pede, aceita-se o resultado que confirma a decisão já tomada, e a variância não é reportada. Tecnicamente a disrupção teria acontecido; na prática ela teria produzido menos conhecimento que o A/B que substituiu.

### Que viés entrou aqui

**Viés de material disponível.** A evidência deste mapa é esmagadoramente arXiv e repositório de código — isto é, a voz de quem constrói o método. Quem tenta usar o método e desiste não publica. Há um viés de sobrevivência estrutural na seção 3: os sistemas que aparecem ali são os que funcionaram bem o bastante para virar artigo.

**Viés de recorte.** O recorte pedido foi global com nota sobre o Brasil, mas a única evidência brasileira que consegui abrir é sobre **eleitor sintético** — que é o ramo mais comercial e menos científico do tema. O mapa pode estar subestimando ou superestimando o Brasil por ter uma amostra de um.

**Viés de zona de interesse.** A zona declarada do autor é "Simulação e mundos". Quem escolhe este tema tende a achar que simulação é instrumento legítimo, e a tratar a objeção de validade como problema a resolver em vez de como possível impossibilidade. A objeção mais dura da literatura — a de que resultado válido não implica processo válido, e que o modelo pode chegar a uma resposta humana por mecanismo alheio à cognição humana — está registrada na seção 3, mas o mapa **não** a levou às últimas consequências. Se ela estiver certa, a simulação social com LLM é útil para gerar hipótese e inútil para testá-la, e o teto do campo é muito mais baixo do que este documento supõe.

**Viés de simetria.** A roda tem quatro disrupções e ramos de tamanho parecido. Isso é composição, não achado. A disrupção 1 tem base empírica muito mais sólida que a disrupção 4, e o YAML não deixa isso visível.

## 8. O que a máquina errou

**1. Citei de memória um título e um número que estão desatualizados.** Escrevi na primeira passagem "Park et al., *Generative Agent Simulations of 1,000 People*, 85% de acurácia no GSS" — que é como o trabalho circula desde 2024. Ao abrir o arXiv 2411.10109, a versão 3 (junho de 2026) tem **outro título** (*LLM Agents Grounded in Self-Reports Enable General-Purpose Simulation of Individuals*) e o número é **86%**, com desdobramento que a citação popular omite: agentes só de entrevista chegam a 83%, só de questionário a 82%, e o ganho de combinar as duas fontes é modesto. Como percebi: abri a fonte em vez de confiar na lembrança. A lição é específica — números que circulam muito são os mais propensos a estar congelados numa versão antiga.

**2. Tratei "suporta até um milhão de agentes" como se fosse escala de operação.** Na primeira redação escrevi que OASIS "simula um milhão de agentes". O artigo diz *supports up to*, e o próprio repositório publica o custo por passo que torna essa escala uma capacidade de teto, não um regime de trabalho. Corrigido no texto para "declara suportar até". O que levantou a suspeita: um número redondo (um milhão) aparecendo em texto de divulgação e em título de artigo é quase sempre teto anunciado, não medida.

**3. Não consegui verificar nenhum dos projetos levantados pela turma.** Busquei por `Luvoire`, `y-not.social`, `Gestalt Village`, `Argentor`, `Rath`, `NeuroForge`, `DisasterReliefOps` e `agent-inspect`, isoladamente e em conjunto, incluindo busca em itch.io. Nenhum retornou página que eu tenha conseguido abrir. **Eles não entram como fonte deste documento** e nenhuma afirmação aqui se apoia neles. Isso não significa que não existam — significa que não os verifiquei, e a regra da skill é não citar o que não abri. É possível que sejam projetos de jam ou pessoais com pouca indexação, o que seria consistente com a hipótese de "simulação barata e pessoal" (`e8.2`) e, ironicamente, com a dificuldade de rastrear proveniência que o próprio mapa aponta.

**4. Não verifiquei o número de 7.776 anúncios com 2 sobre simulação.** É medição do próprio aluno, relatada no enunciado do tema. É um achado interessante e coerente com o argumento, mas eu não repliquei a contagem nem abri os diretórios. Está registrado na seção 12 como alegação atribuída, não como evidência deste mapa.

**5. Apoiei confiança alta em número de fornecedor.** Os intervalos 85–95% de similaridade distribucional e ~90% de confiabilidade teste-reteste vêm de material publicado por empresa que vende pesquisa — e o mesmo material registra que as declarações de acurácia de 80–89% do setor não foram auditadas por ninguém. Usei esses números para sustentar `confianca: alta` em `e5` antes de perceber a origem. Corrigido na Etapa 4 (seção 7).

**6. Erro de método da própria skill, herdado e desta vez evitado.** A rodada de teste desta skill (`TESTE.md`) gerou quatro efeitos de terceira ordem com prazo além do horizonte pedido, sem aviso — falha documentada no `DUVIDAS.md` do aluno. Nesta rodada conferi cada campo `prazo` do YAML contra o campo `horizonte` do frontmatter: **nenhum excede 2031**. Mas a correção introduziu um efeito colateral que precisa ficar declarado: comprimir tudo contra o teto faz vários efeitos de terceira ordem aparecerem como se se consolidassem em 2031, quando o mais provável é que só estejam em curso ali. Está dito em prosa no fim da seção 5 — que é exatamente o que o `DUVIDAS.md` recomendou fazer. O `SKILL.md` continua sem essa checagem escrita; ela foi aplicada à mão nesta rodada.

## 9. Três cenários para 2031

**Provável.** Em 2031, simulação social com agentes é instrumento consolidado para **gerar hipótese** e contestado para **testá-la**. Todo time grande de plataforma tem um ambiente sintético onde o algoritmo de recomendação roda antes do teste A/B, mas o resultado entra no processo como um sinal entre outros — ninguém cancela um lançamento só porque a simulação foi mal. Em pesquisa acadêmica, virou obrigatório reportar variância junto da média e declarar modelo, versão e semente; um punhado de periódicos exige re-execução com modelo alternativo, e a maioria não. Em pesquisa de mercado e em campanha, o respondente sintético fez o que o custo mandava: tomou a triagem inteira e a validação final continua humana, sem que ninguém tenha definido bem onde termina uma e começa a outra. O regulador europeu discute incorporar evidência de simulação na avaliação de risco sistêmico e não decidiu. No Brasil, o eleitor sintético passou por dois ciclos eleitorais sem regra específica. Ninguém sabe dizer quanto dos painéis de opinião de 2027 em diante foi contaminado, e a pergunta começou a ser feita.

**Desejável.** Em 2031, existe uma régua pública e razoavelmente aceita para quando uma simulação social vale como evidência — e ela é modesta, o que é a virtude central dela: restringe a alegação a padrão qualitativo coletivo quando a variância é insuficiente, exige variância reportada, exige proveniência de modelo e semente, exige re-execução independente. Existem populações de referência abertas contra as quais qualquer simulação se calibra antes de ser citada, e existe pelo menos um caso público de simulação que replicou um experimento de campo pré-registrado e que **não estava** no dado de treino. Nas plataformas, o teste de dinâmica de população entrou no fluxo de design junto com o teste de usabilidade, e existe alguém no time responsável por responder o que o sistema faz com o grupo. Para chegar aqui, três coisas teriam de ter sido feitas até 2028: um consórcio — acadêmico, não de fornecedor — publicando o padrão de validação; acesso a dado de plataforma sob o Artigo 40 do DSA funcionando de fato, para que a calibragem tivesse contra o que calibrar; e financiamento público para as populações de referência, porque nenhuma empresa tem incentivo para bancar o instrumento que a contradiz.

**Indesejável.** Em 2031, a simulação social virou máquina de justificação. Decisões já tomadas passam pelo túnel de vento sintético para sair carimbadas, e o resultado que contraria a decisão é atribuído a limitação do modelo. A exigência regulatória chegou na pior forma — pesada o bastante para ser barreira de entrada, vaga o bastante para não verificar nada —, de modo que só as plataformas grandes rodam a simulação exigida e ninguém de fora consegue auditar o que elas rodaram. Em paralelo, simulações baratas e de origem desconhecida circulam no debate público como se fossem evidência sobre comportamento humano, e a distinção entre estudo e peça de convencimento desapareceu para quem lê. Uma decisão pública de porte foi tomada a partir de uma sociedade sintética enviesada, o erro apareceu tarde e a reação foi desacreditar o instrumento inteiro em vez de exigir método — matando junto o uso legítimo. Séries históricas de opinião não são mais comparáveis com o período anterior a 2027. **Sinal precoce deste cenário, observável já em 2027:** resultados de simulação começarem a aparecer em peça de comunicação — anúncio de produto, defesa regulatória, material de campanha — **antes** de existir qualquer padrão publicado de validação. Se a evidência sintética chega ao público antes de a régua chegar à comunidade, este é o cenário em curso.

## 10. O experimento

### O que é

**Túnel de vento de feed — a mesma sociedade, dois modelos.** Uma bancada mínima que roda uma simulação social idêntica — mesma população, mesmo ambiente, mesma política de recomendação, mesma semente lógica — em **dois modelos de linguagem diferentes** e em **duas sementes diferentes**, e exibe os quatro resultados lado a lado: curva de polarização, concentração de atenção nos top-k conteúdos, tamanho da maior cascata, e a variância de opinião dentro da população.

A tela não mostra "o que a sociedade fez". Mostra **quanto do que a sociedade fez muda quando só o modelo muda**.

Base de construção: OASIS (código aberto, X e Reddit, 23 ações, recomendação por interesse e por *hot score* trocável) ou Concordia (padrão *Game Master*, ambiente configurável). Escala de sala de aula: 100 a 300 agentes, dezenas de passos — dentro do orçamento de tokens que a linha de base do OASIS permite estimar antes de rodar.

### Que pergunta sobre o futuro ele ajuda a responder

A pergunta de que depende o mapa inteiro: **o resultado de uma sociedade simulada é propriedade da sociedade ou propriedade do modelo?**

Se trocar o modelo muda a conclusão qualitativa — se um modelo polariza e outro converge sob a mesma regra de feed —, então simulação social não serve para testar política de plataforma, e a Disrupção-raiz 2 deste mapa cai junto com sete efeitos. Se a conclusão qualitativa se mantém e só a magnitude varia, o instrumento tem piso, e a régua desejável do cenário 2 é construível. É o teste mais barato que existe para o efeito `e1.2` e para o wildcard da validação.

### Que tecnologia emergente ele usa, e por que não dá com tecnologia madura

Usa agentes com modelo de linguagem — memória, personalidade, linguagem natural entre eles — dentro de um ambiente com camada de recomendação configurável.

Não dá para fazer com ABM clássica (NetLogo, Mesa) por uma razão que é o coração do experimento: **ali a regra de comportamento é escrita à mão**. Trocar o "modelo" significaria trocar a regra que o pesquisador escreveu, e a resposta seria trivialmente sim, o resultado muda. A pergunta só é interessante quando o comportamento **não** foi escrito por ninguém — quando ele vem do modelo, e o modelo é a variável oculta que ninguém reporta. A sensibilidade a versão de modelo é precisamente o que a literatura de 2026 pede que se audite e que quase nenhum trabalho publica.

### O que a turma vai fazer quando testar isso em sala

1. **Aposta antes de rodar.** Cada pessoa escolhe uma política de feed entre duas (cronológico × ordenado por engajamento) e escreve, antes, qual resultado espera em polarização e em concentração de atenção. As apostas ficam visíveis.
2. **Roda.** Os quatro cenários (2 modelos × 2 sementes) rodam ao vivo, com o custo em tokens na tela — porque parte da lição é que escala é orçamento.
3. **Confronto.** Compara-se a aposta com o resultado. Depois — e este é o momento do experimento — compara-se o resultado **consigo mesmo** entre modelos.
4. **A decisão.** Cada pessoa responde por escrito: "com este resultado na mão, você cancelaria o lançamento deste feed?" A distribuição das respostas é o dado que interessa, e é uma medida direta de `e3`.

### O que seria um resultado que me faria mudar de ideia

**A favor do mapa:** a direção qualitativa se manter estável entre os dois modelos e as duas sementes, variando só a magnitude. Isso sustentaria a Disrupção-raiz 2 e justificaria subir `e3` de `media` para `alta`.

**Contra o mapa, e é o desfecho que eu esperaria:** a conclusão qualitativa se inverter entre modelos — um polarizando e outro convergindo sob regra idêntica. Aí a simulação não é túnel de vento; é espelho do modelo. A Disrupção-raiz 2 cairia, `e3` e toda a sua árvore sairiam, e o mapa teria de ser reescrito em torno de uma tese mais dura: a de que o valor do método está em gerar hipótese e em produzir o **dado de sensibilidade** — e que o produto real da sociedade simulada é a medida do próprio erro, não a previsão.

**Resultado que não decide nada, e é preciso reconhecê-lo antes:** as quatro curvas ficarem tão ruidosas que não dê para dizer se divergem. Com 100 a 300 agentes isso é plausível, e nesse caso o experimento terá medido a própria escala mínima necessária — o que ainda é resultado, e vale a aula.

## 11. Fontes

Todas as fontes abaixo foram abertas durante esta rodada. O que não abri está declarado na seção 8 e não sustenta afirmação alguma deste documento.

1. **Park, J. S.; O'Brien, J. C.; Cai, C. J.; Morris, M. R.; Liang, P.; Bernstein, M. S. — "Generative Agents: Interactive Simulacra of Human Behavior".** `https://arxiv.org/abs/2304.03442` — sustenta a seção 3 (prova de conceito, 25 agentes, sandbox, festa emergente) e a delimitação da Disrupção 1. Alta confiabilidade: artigo com autoria institucional identificada (Stanford / Google), código público, amplamente replicado. Submetido em abril de 2023, revisto em agosto de 2023.

2. **Park, J. S. et al. — "LLM Agents Grounded in Self-Reports Enable General-Purpose Simulation of Individuals" (título anterior: "Generative Agent Simulations of 1,000 People").** `https://arxiv.org/abs/2411.10109` — sustenta o número de 86% da consistência teste-reteste no GSS, a amostra de 1.052 pessoas, entrevistas de duas horas, e os valores de 83%/82% para fontes isoladas. Alta confiabilidade, com a ressalva de que o título e o número mudaram entre versões (v1 novembro de 2024, v3 junho de 2026) — ver seção 8, item 1.

3. **CAMEL-AI — "OASIS: Open Agent Social Interaction Simulations with One Million Agents".** `https://arxiv.org/abs/2411.11581` — sustenta a declaração de capacidade de um milhão de agentes, as 23 ações, X e Reddit, e a replicação de difusão, polarização e efeito manada. Média-alta confiabilidade: artigo de comunidade de código aberto, código verificável, mas com incentivo de divulgação embutido no título. v1 em novembro de 2024, v5 em março de 2025.

4. **Repositório OASIS (camel-ai/oasis).** `https://github.com/camel-ai/oasis` — sustenta a linha de base de custo (~335.600 tokens de entrada por passo para 100 agentes), as funcionalidades acrescentadas em 2025–2026 e a atualização de agosto de 2026. Alta confiabilidade para fatos sobre o próprio software.

5. **Piao, J. et al. — "AgentSociety: Large-Scale Simulation of LLM-Driven Generative Agents Advances Understanding of Human Behaviors and Society".** `https://arxiv.org/abs/2502.08691` — sustenta os 10 mil agentes, 5 milhões de interações e os cinco temas sociais (polarização, mensagem inflamatória, renda básica, furacão, sustentabilidade urbana). Média-alta confiabilidade: artigo acadêmico; o resumo não enumera limitações, o que é em si um dado sobre a postura do campo. Submetido em fevereiro de 2025, revisto em abril de 2026.

6. **Repositório AgentSociety (tsinghua-fib-lab/agentsociety).** `https://github.com/tsinghua-fib-lab/agentsociety` — sustenta a descrição da versão 2, a execução distribuída e o replay de experimento por JSONL com DuckDB. Alta confiabilidade para fatos sobre o próprio software.

7. **Repositório Concordia (google-deepmind/concordia).** `https://github.com/google-deepmind/concordia` — sustenta o padrão *Game Master*, a lista de aplicações (incluindo avaliação de serviços reais por uso simulado) e as referências aos relatórios técnicos. Alta confiabilidade para fatos sobre o próprio software; é material do mantenedor, portanto sem contraditório.

8. **Li, Y.; Tao, D. — "AI Agents Alone Are Not (Yet) Sufficient for Social Simulation".** `https://arxiv.org/abs/2603.00113` — sustenta os três descasamentos entre pipeline de agente e simulação-como-ciência e a proposta de reformulação como jogo de Markov com exposição e escalonamento explícitos. Alta confiabilidade como posição argumentada; é *position paper*, portanto tese e não medição. Fevereiro de 2026, revisto em maio de 2026.

9. **Wu, Z.; Peng, R.; Ito, T.; Onizuka, M.; Xiao, C. — "LLM-Based Social Simulations Require a Boundary".** `https://arxiv.org/abs/2506.19806` — sustenta o problema da "persona média", o limite de variância e as três recomendações (casar profundidade de validação com heterogeneidade, reportar variância junto da média, restringir alegação a padrão coletivo qualitativo). Alta confiabilidade. Junho de 2025, revisto em julho de 2026.

10. **Ye, J.; Cao, L.; Chen, D.; Ferrara, E. — "Stop Drawing Scientific Claims from LLM Social Simulations Without Robustness Audits".** `https://arxiv.org/pdf/2605.18890` — sustenta a exigência de auditoria de robustez e as dimensões de sensibilidade (prompt, semente, versão de modelo), com cenários de dilema do prisioneiro e câmara de eco. Média-alta confiabilidade **com ressalva explícita**: o PDF não teve os resultados numéricos extraídos na leitura desta rodada; uso o artigo pela tese e pelo desenho, não por número. Maio de 2026.

11. **LASS @ CIKM 2026 — 2º Workshop on LLM Agents for Social Simulation.** `https://lassworkshop26.github.io/` — sustenta a existência de circuito acadêmico próprio (8 de novembro de 2026, Roma), os organizadores e a lista de questões declaradas em aberto. Alta confiabilidade para fatos sobre o próprio evento.

12. **Zhang, H.; Lin, Y.; He, J.; Jiang, D.; Shen, Z.-J.; Zheng, Z. — "LLM-Augmented Digital Twin for Policy Evaluation in Short-Video Platforms".** `https://arxiv.org/abs/2603.11333` — sustenta a arquitetura de quatro gêmeos e a justificativa de que avaliação contrafactual é difícil em produção para desfecho de horizonte longo. Média confiabilidade quanto a resultado: o resumo não declara escala de simulação nem validação contra dado de produção. Março de 2026.

13. **Hashimoto, R.; Kaneko, M.; Ueda, K.; Takayanagi, T.; Izumi, K. — "EconSimulacra: A Digital Twin Platform of Socio-Economic Systems Powered by LLM Agents".** `https://arxiv.org/abs/2606.26883` — sustenta a existência do gênero "gêmeo digital socioeconômico" com estado interno compartilhado entre domínios. Média confiabilidade: a evidência apresentada se limita a um estudo de caso ilustrativo e o resumo não declara contagem de agentes. Junho de 2026.

14. **Reid, D. (Liverpool Hope University) — "Moltbook: AI bots use social network to create religions and deal digital drugs – but are some really humans in disguise?", The Conversation.** `https://theconversation.com/moltbook-ai-bots-use-social-network-to-create-religions-and-deal-digital-drugs-but-are-some-really-humans-in-disguise-274895` — sustenta o caso Moltbook: lançamento em 28 de janeiro de 2026, salto de 37 mil para 1,5 milhão de contas em 24 horas, religiões e governos emergentes, canais cifrados, mercado de injeção de prompt — **e** a ressalva de que muitos "bots" podem ser humanos e de que não se separa emergência de eco do dado de treino. Média-alta confiabilidade: divulgação científica com autoria acadêmica identificada, sobre um fenômeno cujos próprios números são parte do que está em disputa. 5 de fevereiro de 2026.

15. **Schroeder, D. T. et al. (22 autores, incluindo Menczer, Rand, van der Linden, Ressa, Marcus) — "How malicious AI swarms can threaten democracy", Science.** `https://arxiv.org/abs/2506.06299` — sustenta a face de uso duplo (enxames que coordenam autonomamente, se infiltram e fabricam consenso) e a preferência declarada por mecanismos pragmáticos sobre adesão voluntária. Alta confiabilidade: *Policy Forum* em Science (22 de janeiro de 2026), autoria ampla e multi-institucional. Pré-print no arXiv desde maio de 2025.

16. **Oliveira, A. L. de; Faganello, C. P.; Sampaio, R. C. — "O eleitor sintético: o que acontece quando pesquisas de opinião pública são simuladas por Inteligência Artificial".** `https://dorispinheiro.com.br/o-eleitor-sintetico-o-que-acontece-quando-pesquisas-de-opiniao-publica-sao-simuladas-por-inteligencia-artificial/` — sustenta toda a nota sobre o Brasil: uso de eleitores sintéticos em campanhas a partir de maio de 2026, ordens de grandeza de custo (R$ 150 mil / R$ 15 mil / fração disso), viés de bajulação, risco de contaminação de pesquisa real, ausência de auditoria das acurácias declaradas de 80–89%, e a lacuna da Resolução 23.755/2026 do TSE. Média-alta confiabilidade: autoria acadêmica identificada, republicação de *The Conversation*, 26 de agosto de 2026. Ressalva: é análise de segunda mão sobre reportagem da Folha de São Paulo, que eu não abri.

17. **Perspective AI — "Synthetic Focus Groups in 2026: What They Get Right, Where They Break".** `https://getperspective.ai/blog/synthetic-focus-groups-2026-what-they-get-right-where-they-break` — sustenta as faixas de 85–95% de similaridade distribucional, ~90% da confiabilidade teste-reteste humana, o descompasso 97% de uso × 8% de confiança para decisão de peso, e a referência a viés de bajulação e convergência para opinião majoritária. **Baixa-média confiabilidade e conflito de interesse declarado:** é material de fornecedor que vende entrevista com pessoas reais, portanto tem incentivo em elogiar o sintético na triagem e desqualificá-lo na validação. Usado neste documento apenas como indício de discurso de mercado, e explicitamente rebaixado na Etapa 4 (seção 7). 22 de junho de 2026.

18. **Knight-Georgetown Institute — "Systemic Risk Assessment under the Digital Services Act".** `https://kgi.georgetown.edu/research-and-commentary/systemic-risk-assessment-under-the-digital-services-act/` — sustenta o diagnóstico da primeira rodada de avaliações do DSA: falha em considerar o papel do design da plataforma, ausência de padronização e de métrica reportada, e a recomendação de exigir dados de experimentação de produto e priorizar acesso de pesquisadores pelo Artigo 40. Alta confiabilidade: instituto acadêmico, com posição declarada. Maio de 2025.

## 12. Anexo — o levantamento bruto

### 12.1 Como esta rodada correu

Skill `futurizacao-jcsc` executada em 12 de setembro de 2026, sem usuário disponível para responder em tempo real: as respostas da Etapa 1 vieram fixadas no enunciado da rodada. Sequência efetivamente executada: Etapa 1 (entrevista, respostas pré-fornecidas) → Etapa 2 (levantamento com busca ao vivo e filtro de maturidade) → Etapa 3 (roda, três níveis) → Etapa 4 (autocrítica com rebaixamento auditável) → Etapa 5 (saída no formato).

### 12.2 A entrevista da Etapa 1, literal

Perguntas da skill e respostas recebidas:

1. **Horizonte temporal** — *2031.*
2. **Público-alvo** — *quem projeta mídia e interação.*
3. **Recorte geográfico** — *global, com uma nota sobre o Brasil.*
4. **Descartes explícitos** — *o que já é comum em produto de massa (a régua da disciplina); nenhuma outra exclusão.*
5. **Viés desejado** — *neutro.*

Parâmetros adicionais recebidos fora das cinco perguntas, registrados aqui porque afetaram a saída: profundidade de três ordens; modo "a partir de uma inovação/tema, não de um setor"; nenhuma disrupção suspeitada de antemão ("descubra"); ideias óbvias a excluir são "as que servem para qualquer tema"; critério declarado de mudança de ideia — *evidência de que a adoção já passou da maioria inicial (Rogers), ou de que a tecnologia não rompe nada, só melhora o que existe*.

**Nenhuma pergunta foi respondida com "tanto faz".** Nenhum padrão foi assumido em silêncio.

**Onde o critério de mudança de ideia foi aplicado, e o que ele produziu.** O teste de Rogers ("a adoção já passou da maioria inicial?") foi o que descartou modelagem baseada em agentes clássica, microssimulação de tráfego, modelos epidemiológicos, simulação de multidão em jogos, teste A/B e gêmeo digital industrial — todos já bem além da maioria inicial. O teste "não rompe nada, só melhora" foi o que quase descartou a Disrupção 3: respondente sintético pode ser lido como "pesquisa de opinião mais barata", que é melhoria, não ruptura. Mantive como disrupção por um motivo específico: ele não melhora o instrumento, ele **troca o referente** — a evidência deixa de ser sobre pessoas e passa a ser sobre um modelo de pessoas, e isso muda quem pode contestar o resultado. Se o leitor discordar dessa leitura, a Disrupção 3 cai e com ela nove efeitos.

### 12.3 Candidatos a disrupção-raiz avaliados e descartados

**Descartados por maturidade** (critério da Etapa 2 — padrão de mercado consolidado, sem debate real de substituição no horizonte):

| Candidato | Por que é maduro |
|---|---|
| ABM clássica com regras fixas (NetLogo, Mesa, Repast, MASON) | Três décadas de literatura, currículo e ferramenta estáveis; é o incumbente contra o qual a disrupção se define |
| Microssimulação de tráfego/mobilidade (SUMO, MATSim) | Em produção em órgãos de planejamento urbano |
| Modelos epidemiológicos compartimentais e de rede de contato | Institucionalizados desde 2020 |
| Simulação de multidão em jogos e cinema | Padrão de indústria; e é objeto do tema 7, não deste |
| Teste A/B em produção | Padrão universal de decisão em plataforma; entra no mapa como força contrária |
| Gêmeo digital industrial (fábrica, turbina, rede) | Consolidado em manufatura e energia; o emergente é o gêmeo social |
| Persona estática em UX | Prática padrão há duas décadas |
| Chatbot de atendimento com persona | Produto de massa; nenhuma ruptura, e fora do escopo de simulação social |

**Descartados por escopo, não por maturidade** (seriam candidatos legítimos, mas pertencem a vizinhos declarados do tema ou não caberiam com o mesmo rigor):

- **Personagens autônomos em jogos** — é o tema 7 da disciplina. Fronteira respeitada.
- **Mercados de máquinas com dinheiro real** — é o tema 5. O ramo econômico de EconSimulacra chega perto e foi mantido só como evidência de que o gênero "gêmeo socioeconômico" existe, sem desdobrar efeitos de comércio agêntico.
- **Agentes com corpo no mundo físico** — é o tema 9.
- **Geração de dado sintético para treino de modelo** — adjacente e consequente, mas é um problema de *pipeline* de aprendizado de máquina, não de simulação social como método. Descartado para não diluir.
- **Simulação como interface de autoria (mundos gerativos para criação)** — pertence à mesma família "Simulação e mundos", mas o objeto ali é a experiência, não o instrumento de investigação. Um quinto ramo teria sido possível; ficaria mal sustentado no tempo desta rodada.

**Considerado e rejeitado como disrupção-raiz autônoma:** "simulação rodando no navegador / no dispositivo do próprio autor". Tem o tamanho de uma disrupção (muda quem pode produzir resultado), mas não consegui abrir nenhuma fonte que a sustentasse — as referências disponíveis a esse respeito no levantamento da turma não foram verificáveis (seção 8, item 3). Rebaixada a efeito de segunda ordem (`e8.2`) e a sinal fraco, que é o que a evidência disponível permite.

### 12.4 Efeitos gerados e cortados antes do YAML

Foram gerados 11 efeitos que não entraram na roda final. Registro com o motivo do corte:

1. *"Simulação social vira disciplina obrigatória em cursos de computação"* — corte por ser ideia que serve para qualquer tema tecnológico (critério de exclusão recebido na Etapa 1).
2. *"Empresas criam times dedicados de simulação"* — mesmo motivo; é o efeito genérico de qualquer tecnologia que amadurece.
3. *"Surgem startups de simulação social"* — mesmo motivo, e não informa nada sobre este tema em particular.
4. *"O custo de computação limita a adoção"* — não é efeito, é restrição; absorvido dentro do enunciado revisado de `e1`.
5. *"Modelos de linguagem melhoram e o problema de variância desaparece"* — corte por ser suposição sobre o futuro dos modelos, não efeito da disrupção; e contraria diretamente a tese de Wu et al., que localiza a homogeneidade no modo de treinamento, não na capacidade.
6. *"Plataformas param de fazer teste A/B"* — corte por implausibilidade: A/B é barato e dá resultado sobre gente real; não há força que o elimine no horizonte.
7. *"Governos criam agências de validação de simulação"* — corte por prazo: nenhuma velocidade regulatória observada sustenta agência nova até 2031. Rebaixado e absorvido em `e3.1`.
8. *"A simulação substitui o censo"* — corte por confundir população sintética com estatística oficial; são coisas diferentes, e a confusão seria erro conceitual.
9. *"Agentes ganham direitos"* — corte por especulação sem ancoragem em fonte. A pergunta de 3ª ordem do enunciado do tema ("a ética de pesquisa se aplica a agentes?") foi tratada pelo ângulo que tem evidência — a inadequação dos comitês de ética existentes (`e7`) — e não pelo ângulo do estatuto moral do agente, que este mapa não tem base para tratar.
10. *"Redes sociais humanas migram para redes de agentes"* — corte por ser tese sobre o futuro da mídia social, não efeito da simulação-como-método; e porque o caso Moltbook não sustenta migração, sustenta coexistência.
11. *"O método se estabiliza e a controvérsia acaba"* — corte por ser previsão de consenso sem mecanismo; e por contradizer a única constante do levantamento, que é a validação seguir aberta.

**Um efeito de quarta ordem foi gerado e cortado pela regra de profundidade da skill:** a partir de `e5.2.1` (séries históricas perdem comparabilidade), a cadeia seguia para "campos empíricos que dependem de série longa — opinião pública, comportamento eleitoral, consumo — perdem capacidade de afirmar mudança de longo prazo, e a década de 2020 vira um ponto cego permanente". Está registrado aqui, em prosa, fora do YAML, como a skill manda.

### 12.5 Buscas que não deram em nada

- `"y-not.social" OR "Luvoire" OR "Gestalt Village" agent simulation jam 2026` — sem resultado sobre os projetos nomeados. Retornou, em compensação, o achado sobre Moltbook e o workshop LASS, que entraram no mapa.
- `itch.io agent simulation jam 2026 "generative agents" village browser simulation entries` — nenhuma jam correspondente encontrada; retornou jams genéricas de 2026 sem relação com o tema.
- Busca por `Argentor`, `Rath`, `NeuroForge`, `DisasterReliefOps`, `agent-inspect` no mesmo bloco — nada verificável.
- Tentativa de abrir dois artigos relevantes na Springer (`10.1007/s10462-025-11412-6`, "Validation is the central challenge for generative social simulation: a critical review of LLMs in agent-based modeling"; e `10.1140/epjds/s13688-026-00674-x`, "Towards operational validation of LLM-agent social simulations: a replicated study of a Reddit-like technology forum") — **ambos bloqueados por redirecionamento de autenticação**. Os dois títulos são fortemente convergentes com a tese da seção 3, e foi tentador citá-los; **não foram citados**, porque não os abri. Ficam registrados aqui como a lacuna de leitura mais relevante desta rodada: são exatamente os dois trabalhos que poderiam confirmar ou derrubar `e1.2`.
- Busca em português sobre simulação social com agentes aplicada a política pública no Brasil — retornou material sobre desinformação eleitoral e sobre eleitor sintético, mas **nenhum caso brasileiro de sociedade simulada usada como instrumento de investigação**. Essa ausência é, ela própria, um dado: a nota sobre o Brasil neste mapa é sobre o ramo comercial do tema, porque foi o único que encontrei.

### 12.6 Alegações recebidas e não verificadas

Do enunciado do tema, tratadas como contexto e **não** como fonte:

- "De 7.776 anúncios em dois dos maiores diretórios comerciais de IA, dois eram sobre simulação." Medição atribuída ao próprio aluno. Não repliquei. Se correta, é o dado mais econômico do levantamento inteiro — sustenta em uma linha a tese de que simulação é instrumento de investigação e não categoria de produto, e explicaria por que o tema quase não aparece em canal comercial.
- "Em 2026 há plataformas declarando um milhão de agentes." Verificado — é OASIS, e a formulação correta é "declara suportar até" (seção 8, item 2).
- "Em 2023 um experimento com 25 agentes numa cidade virtual organizou uma festa sem roteiro." Verificado na fonte 1.
- Projetos `Generative Agents` (escolha nº 1 do aluno), `Argentor`, `Luvoire`, `y-not.social`, `Rath`, `NeuroForge`, `DisasterReliefOps`, `agent-inspect`, `Gestalt Village`. Apenas o primeiro nome corresponde a trabalho que consegui abrir (fonte 1) — e note-se que a descrição dada no enunciado ("agentes que percebem o mundo por captura de imagem") **não** corresponde ao artigo de Park et al. 2023, cujos agentes percebem por descrição textual do ambiente, com arquitetura de observação, planejamento e reflexão. Pode ser homonímia com outro projeto, ou imprecisão na descrição. Não resolvi essa ambiguidade e a registro aqui.

### 12.7 O que este mapa deliberadamente não cobriu

- **Custo energético e ambiental** de rodar populações sintéticas em escala. Levantado mentalmente, não desenvolvido: não encontrei fonte que o quantificasse para este caso de uso específico, e um efeito sem ancoragem seria decoração.
- **Trabalho de anotação e curadoria humana** por trás da calibragem de população sintética. Existe, é invisível na literatura, e mereceria um ramo. Sem fonte aberta, ficou de fora.
- **O Sul global além do Brasil.** O recorte pedido era global com nota brasileira, e é o que o documento entrega — mas "global", na prática, significa aqui América do Norte, Europa, China e Japão, que é de onde vêm 16 das 18 fontes. Isso não é neutralidade geográfica, é o viés da base indexada, e está declarado.
- **A pergunta sobre o estatuto moral do agente simulado.** Ver 12.4, item 9.

### 12.8 Nota de procedimento sobre a própria skill

A falha documentada no `DUVIDAS.md` desta skill — prazos de terceira ordem estourando o horizonte da entrevista sem aviso — foi verificada campo a campo nesta rodada: `grep` dos valores de `prazo` no bloco `roda:` contra `horizonte: 2031` do frontmatter, nenhum acima. A correção estrutural sugerida no `DUVIDAS.md` **não** foi aplicada ao `SKILL.md` (não cabe a esta rodada editar a skill do aluno); foi aplicada à mão, e o efeito colateral da compressão contra o teto está declarado no fim da seção 5 e na seção 8, item 6.
