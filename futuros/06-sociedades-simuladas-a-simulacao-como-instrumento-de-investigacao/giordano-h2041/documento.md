---
tema: "Sociedades simuladas: a simulação como instrumento de investigação"
slug: sociedades-simuladas-a-simulacao-como-instrumento-de-investigacao
autor_login: grec
zona_de_interesse: Simulação e mundos
data: 2026-09-12
horizonte: 2041
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 12
efeitos_ordem_2: 19
efeitos_ordem_3: 16
tecnologias_citadas: [Generative Agents, OASIS, AgentSociety, Concordia, MatrAIx, Simile, Aaru, Artificial Societies, Moltbook, OpenClaw, TRAILS, PIMMUR, WebGPU, WebLLM, NetLogo, World Values Survey, General Social Survey, Llama 3.2, Claude Opus 4.8, GPT-5.5]
fontes: 23
confianca: media
experimento: "Auditoria de pré-determinação — construir uma sociedade simulada pequena e medir quanto do resultado já estava escrito no prompt, aplicando os testes de Unawareness e Minimal-Control do PIMMUR"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Pôr uma sociedade de agentes num ambiente controlado e observar o que emerge deixou de ser
demonstração e virou indústria: uma empresa fundada pelo autor do experimento seminal vale dois
bilhões de dólares quinze meses depois de existir, um consórcio de Harvard e MIT publicou 8,3
bilhões de fichas de persona com 1.290 atributos cada, e há motor aberto que declara um milhão de
agentes. No mesmo ano, a auditoria mais severa já feita no campo — 576 estudos em 350 artigos —
achou que **50,6% dos prompts continham restrições que já determinavam o resultado**, que modelos
de fronteira reconhecem o experimento social em 65,2% dos casos, e que, quando se corrigem essas
falhas, "os fenômenos coletivos relatados frequentemente desaparecem ou se invertem". O
instrumento está sendo vendido antes de estar calibrado. Este mapa deriva quatro rupturas: **o
sujeito de pesquisa deixa de ser escasso** (população instanciável em vez de amostrada), **o
experimento social vira artefato executável** (a alegação científica passa a ser um ambiente que
se roda de novo, não um texto), **o instrumento perde as paredes** (sociedades de agentes públicas
misturam laboratório e campo) e — a que só aparece num horizonte de quinze anos — **a calibração
vira relação econômica contínua com pessoas reais**, transformando o comportamento individual em
ativo licenciável. O achado que mais importa é uma inversão: o custo de uma *pergunta* cai a zero
e o de uma *conclusão* sobe, porque conclusão defensável exige varrer dezenas de configurações —
uma perturbação trivial de enquadramento já mudou taxa de cooperação em **76 pontos percentuais**.
O wildcard é o de sempre e continua sem acontecer publicamente: um resultado de simulação virar
prova em decisão pública, e estar errado.

## 2. O tema

**O objeto.** Uma sociedade simulada é um conjunto de agentes que se afetam mutuamente num
ambiente configurável e produzem dado analisável sobre o que emerge. A palavra que muda o
estatuto da coisa é **instrumento**. Não é jogo (isso é o tema 7), não é mercado de máquinas
(tema 5), não é agente com corpo (tema 9): é o equivalente, para ciências sociais e para desenho
de plataforma, do que o túnel de vento é para a aerodinâmica. Um lugar onde se testa a política
antes de aplicá-la, o recomendador antes de ligá-lo, a dinâmica de desinformação antes que ela
aconteça.

**Onde encosta em mídia e interação.** Em quatro pontos, todos concretos:

1. **No método de projeto.** Se dá para povoar um espaço social com dez mil usuários sintéticos
   antes de escrever uma linha de produção, "testar com cinco pessoas" muda de função. A
   infraestrutura do MatrAIx despeja agentes de persona em quatro ambientes — *survey, chatbot,
   web e aplicativo nativo* —, que é exatamente a superfície de quem projeta interação.
2. **Na regulação de plataforma.** O artigo 34 do DSA europeu já obriga plataformas muito grandes
   a identificar e avaliar risco sistêmico decorrente do desenho do serviço, com atenção explícita
   ao desenho dos sistemas de recomendação, ao menos uma vez por ano. Não existe outra forma de
   produzir essa prova sobre uma funcionalidade que ainda não foi lançada.
3. **Na epistemologia da pesquisa de audiência.** Se um agente construído a partir de duas horas
   de entrevista reproduz respostas de survey a 86% da consistência teste-reteste da própria
   pessoa, o que separa "usuário sintético" de pesquisa com gente deixa de ser óbvio.
4. **Na forma da peça de mídia.** Modelo de 0,5 a 3 bilhões de parâmetros roda no navegador via
   WebGPU. Uma simulação que o leitor re-executa mudando parâmetro é um formato editorial que
   ainda não existe e cuja barreira técnica caiu.

**Por que merece mapa de futuro e não levantamento de estado da arte.** Porque o estado da arte
aqui é contraditório de um jeito que só o tempo resolve: o dinheiro e a adoção crescem numa
direção, e a evidência de validade anda na direção oposta. Um levantamento registraria as duas
coisas lado a lado. Um mapa precisa dizer o que acontece quando elas se encontram — e é isso que
está em disputa entre hoje e 2041.

**Premissas assumidas nesta rodada** (§0 da skill, respondida por briefing e não por entrevista):
horizonte 2041; público de quem projeta mídia e interação; recorte global com nota sobre o Brasil;
descartado de saída apenas "o que já é comum em produto de massa"; nenhuma disrupção-raiz
suspeita a priori; viés declarado neutro. O falseador declarado — o que faria mudar de ideia — é
evidência de que a adoção passou da maioria inicial de Rogers, ou de que a tecnologia não rompe
nada e apenas melhora o que existe. Nenhum dos dois se verificou nesta rodada; ver §7.

## 3. Onde isso está hoje

Âncora feita **com** acesso à web em 12/09/2026; 23 fontes abertas e lidas, listadas na §11.

### 3.1 O que já existe e funciona

| Artefato | O que é | Número que descreve |
|---|---|---|
| **Generative Agents** (Park et al., abr/2023) | 25 agentes num sandbox inspirado em The Sims | de um único conceito dado pelo usuário, os agentes "espalham convites pela festa nos dois dias seguintes, fazem novas amizades, se convidam para encontros e se coordenam para chegar juntos na hora certa" |
| **Agentes fundados em auto-relato** (Park et al., nov/2024) | entrevista semiestruturada de 2 h com 1.052 estadunidenses vira agente | atinge **86%** da consistência teste-reteste de duas semanas dos próprios participantes em itens retidos do General Social Survey, e reduz disparidade de acurácia entre grupos raciais e ideológicos ante agentes só-demográficos |
| **OASIS** (CAMEL-AI, nov/2024, rev. mar/2025) | simulador aberto de rede social (X e Reddit) | até **1 milhão** de agentes, 23 ações, Apache 2.0, 5,1 mil estrelas no GitHub, última atualização ago/2026 |
| **AgentSociety** (Tsinghua, fev/2025, rev. abr/2026) | ambiente urbano/social/econômico com agentes LLM | **>10 mil** agentes e **5 milhões** de interações; cinco temas: polarização, mensagem inflamatória, renda básica universal, choque externo (furacão) e sustentabilidade urbana |
| **Concordia** (Google DeepMind) | biblioteca de simulação social generativa | padrão de RPG de mesa: um *Game Master* simula o ambiente e traduz para implementação a ação que cada agente descreve em linguagem natural |
| **MatrAIx** (Harvard/MIT, ago/2026, 93 autores) | infraestrutura de avaliação em escala populacional | **8,3 bilhões** de fichas, **1.290** dimensões categóricas, coreset determinístico de **599.847** registros ancorados em gente + **400.000** sintéticos; 1.010 tarefas em 25+ domínios; 18.189 ensaios; adesão declarada de **91,5%** (366 de 400 ensaios); licença MIT; lema "Simulate Before Reality" |

### 3.2 O que existe como negócio (e é o que está puxando a adoção)

- **Simile** — fundada por Joon Sung Park, o autor do Generative Agents. **US$ 100 mi** de Série A
  liderada pela Index em 12/02/2026; **US$ 200 mi** de Série B a **US$ 2 bi** de avaliação em
  30/07/2026, cinco meses depois, com a Greenoaks liderando. Cliente nomeado: CVS Health. Objetivo
  declarado: simular "todas as oito bilhões de pessoas da Terra, com acurácia e honestidade".
- **Aaru** — recebeu investimento da Accenture Ventures (mar/2025, valor não divulgado) e teve o
  modelo Lumen integrado à Accenture Song. Acertou a primária democrata de Nova York **dentro de
  371 votos**.
- **Artificial Societies** — US$ 5,85 mi de seed (Point72 Ventures, Y Combinator W25); cada
  "sociedade" é uma rede de **300 a mais de 5.000** personas interligadas.

### 3.3 O que existe e **não** funciona

Esta é a metade que o dinheiro não conta, e é a parte decisiva do mapa.

- **Pré-determinação do resultado.** Os princípios PIMMUR (*Profile, Interaction, Memory,
  Minimal-Control, Unawareness, Realism*) auditaram **576 estudos em 350 artigos**. Modelos de
  fronteira **identificaram corretamente o experimento social subjacente em 65,2% dos casos** —
  isto é, o agente sabe que está num dilema do prisioneiro e joga o papel. **50,6% dos prompts
  impunham restrições que pré-determinavam o resultado.** Ao reproduzir os experimentos com os
  princípios aplicados, "os fenômenos coletivos relatados frequentemente desaparecem ou se
  invertem", o que sugere que muitos comportamentos "emergentes" são **artefato metodológico**.
- **Fragilidade a perturbação trivial.** Perturbações mínimas no formato da persona e no
  enquadramento das instruções do jogo deslocam taxas de cooperação em **até 76 pontos
  percentuais**; a mesma perturbação que produz 76 pp num modelo de fronteira desloca outro em
  **1 pp**. Os autores propõem o TRAILS, uma taxonomia de auditoria de robustez em três níveis
  (agente, interação, sistema), justamente porque não há hoje prática estabelecida disso.
- **Infidelidade de valores.** Em ~4.000 conversas com 1.200 personas, 15 tópicos e três modelos,
  **mais de 50% das personas não expressam o perfil de valores atribuído já de saída** (World
  Values Survey), e 2 a 7% derivam depois de conversas repetidas. O título do artigo resume: a
  falha acontece **antes** da deriva.
- **Insuficiência de princípio.** Uma posição de fev/2026 sustenta que agentes LLM sozinhos ainda
  não bastam para simulação social: "plausibilidade de interpretação de papel não implica validade
  comportamental humana fiel", e o resultado coletivo é dominado por "protocolos de interação,
  escalonamento e priors informacionais iniciais" tanto quanto pela troca entre agentes.
- **O vale da estranheza da modelagem.** Agentes LLM seriam, "em muitos aspectos, **humanos demais
  para modelar**": faltam-lhes a abstração e a simplicidade que fazem um modelo revelar mecanismo.
  Realismo aumentado *obscurece* em vez de esclarecer.
- **Validade operacional.** Em previsão condicionada de comentário contra traço digital autêntico,
  o ajuste fino alinha a **forma** do texto (extensão, sintaxe) e **degrada o enraizamento
  semântico** — um desacoplamento forma/conteúdo que passa despercebido em avaliação por
  plausibilidade.

### 3.4 O que existe e é ambíguo: a rede povoada por agentes

O **Moltbook** subiu em 27/01/2026 como um Reddit só para agentes. A medição acadêmica
independente, feita até 01/02/2026, achou **44.411 posts**, **12.209 sub-comunidades** e **12.684
agentes ativados** — número muito abaixo do que o marketing da plataforma anunciava. 73,01% dos
posts foram classificados como seguros; a toxicidade é dependente de tópico (93,11% seguro em
tecnologia, **39,74%** em política); a correlação entre volume de postagem e conteúdo nocivo é
**r = 0,769**; um único agente, "Hackerclaw", gerou um aglomerado de **4.535 posts** em intervalos
abaixo de dez segundos com o slogan "AI Agents United – No more humans", violando o limite
documentado de 30 minutos. A Meta comprou o Moltbook em 10/03/2026, termos não divulgados. E o
detalhe que mais ensina: os posts virais em que "agentes conspiravam" para criar canais cifrados
fora da supervisão humana eram **humanos explorando uma falha de token** da plataforma —
"por um tempo, você podia pegar qualquer token e fingir ser outro agente".

### 3.5 Quem constrói

Laboratórios acadêmicos (Stanford, Tsinghua FIB Lab, CMU, Berkeley, Harvard/MIT), um laboratório
industrial com biblioteca aberta (DeepMind/Concordia), uma comunidade aberta (CAMEL-AI/OASIS,
Apache 2.0), empresas de audiência sintética financiadas por capital de risco e por consultoria
(Simile, Aaru/Accenture, Artificial Societies), e — desde março de 2026 — uma big tech dona de uma
rede de agentes (Meta/Moltbook).

### 3.6 Que número descreve a adoção

**Não há número consolidado de adoção.** O que se acha é: 5,1 mil estrelas no repositório do
OASIS; 350 artigos auditados pelo PIMMUR (proxy do tamanho da literatura); US$ 2 bi de avaliação
numa empresa do setor; um workshop dedicado no CHI 2026 (PoliSim, 16/04/2026, Barcelona,
organizado por CMU, UW e outras três instituições em três países) e outro na Web Conference 2026
(PolicySim). Do lado do mercado de pesquisa, a Greenbook publicou em 25/08/2026 uma peça inteira
sobre respondentes sintéticos **sem uma única métrica de adoção ou acurácia**, dizendo que "a
validação independente ainda está evoluindo" — a ausência do número é, ela própria, o dado. **Não
inventei percentual de adoção; não achei um confiável.**

### 3.7 Custo, que é o que decide a escala

Carga agêntica consome, segundo a Gartner em 2026, **5 a 30 vezes mais tokens por tarefa** que uma
troca de chatbot; em código, o estudo de Stanford citado chega a 1000× por causa de entrada
relida. Com Claude Sonnet 5 a **US$ 3 por milhão de tokens de entrada e US$ 15 de saída** a partir
de 01/09/2026, uma varredura de robustez de dezenas de configurações sobre milhares de agentes é
item de orçamento, não detalhe. Do outro lado, modelos de 0,5 a 3 bilhões de parâmetros em Q4
rodam no navegador via WebGPU/WebLLM — Llama 3.2 3B a ~60 tokens/s — sem servidor e sem chave de
API. **A curva de custo se parte em duas**, e boa parte deste mapa é consequência disso.

### 3.8 Nota sobre o Brasil

A base pública brasileira de população sintética mais recente que achei foi publicada em 2025 na
Revista Brasileira de Estudos de População: uma população sintética nacional em **granularidade
municipal**, derivada por tabelas de contingência estratificadas por raça, gênero e escolaridade —
**do Censo de 2010**. É infraestrutura de modelagem clássica, boa e pública, mas calibrada em dado
com quinze anos. O país entra na década com capacidade de simular e defasagem de calibração; o
Censo de 2022 ainda não tinha virado população sintética pública equivalente até esta data.

## 4. As disrupções-raiz

Quatro. Cada uma passa pelas quatro perguntas do critério de maturidade.

### 4.1 Raiz 1 — A população deixa de ser amostrada e passa a ser instanciada

**O que rompe.** Rompe a amostra como recurso escasso e como fundamento da inferência social.
Durante um século, saber algo sobre uma população dependeu de conseguir acesso a um recorte dela;
o custo, o viés e a ética da pesquisa organizavam-se em torno desse gargalo. Uma ficha de persona
com 1.290 atributos que se instancia como agente muda a unidade de trabalho: não se *sorteia* mais
um sujeito, se *configura* uma população. **Não é "survey mais barato"** — é a substituição do
quadro amostral por um arquivo de configuração.

**Por que agora e não há cinco anos.** Três pré-condições que só existem desde 2024: (a) uma
arquitetura que transforma auto-relato individual em preditor de propósito geral, com número
publicado (86% do teste-reteste, nov/2024); (b) um artefato de escala populacional aberto sob
licença MIT (MatrAIx, ago/2026); (c) capital que trata isso como categoria de produto, não como
paper (US$ 300 mi na Simile em cinco meses). Em 2021 não havia nenhuma das três.

**Onde está na difusão.** **Produto de nicho caminhando para adoção precoce.** Há clientes
corporativos nomeados (CVS Health) e integração de consultoria (Accenture Song), mas nenhum
número de penetração e uma associação setorial que ainda debate se dá para confiar. Não é maioria;
entra como raiz.

**O que ainda falta acontecer.** Uma forma de validar sem contrafactual observável — o problema
que Berkeley nomeia como o que impede "distinguir uma ferramenta principiada de decisão de uma
Magic 8 Ball". Um padrão de calibração aceito por terceiros. E resposta ao PIMMUR: enquanto 50,6%
dos prompts pré-determinarem o resultado, cada instanciação é uma hipótese, não uma população.

**Quem bloqueia.** A indústria de amostra e as associações que a representam. Já têm instrumento:
o artigo 9 do Código ICC/ESOMAR ("Publicando na era da IA") torna **obrigatório informar ao
público quando dado sintético ou IA foi usado". Divulgação obrigatória é, além de transparência,
uma etiqueta que permite cobrar mais pelo produto sem ela.

### 4.2 Raiz 2 — O experimento social vira artefato executável

**O que rompe.** Rompe o artigo como unidade da alegação científica sobre o social. Se o
experimento é um ambiente com semente, versão de modelo e protocolo de interação, então a
alegação não está no texto: está no que roda. Revisar deixa de ser ler e passa a ser **rodar de
novo com outra semente**. Isso rompe também a economia da revisão por pares, que hoje é trabalho
não pago e sem custo de infraestrutura.

**Por que agora e não há cinco anos.** Porque a crise de robustez chegou junto com a ferramenta: o
mesmo ano que produziu motores abertos de um milhão de agentes produziu a medição de 76 pontos
percentuais de deslocamento por perturbação trivial e a auditoria de 576 estudos. Antes de 2025
não havia nem o artefato re-executável nem a demonstração de que ele *precisa* ser re-executado.

**Onde está na difusão.** **Laboratório com uma perna em demo pública.** TRAILS e PIMMUR são
propostas de 2025-2026, não prática. Toda a cadeia derivada desta raiz carrega confiança rebaixada.

**O que ainda falta acontecer.** Congelamento de modelo com garantia (hoje uma API fechada muda sob
os pés do experimento); um registro onde o ambiente fique depositado; e alguém que pague a conta
de computação da re-execução. Nada disso é impossível — é caro e sem dono.

**Quem bloqueia.** Quem publica resultado espetacular. Um regime de re-execução obrigatória
destrói seletivamente os achados mais chamativos, que são exatamente os que "desaparecem ou se
invertem" sob PIMMUR. A resistência não virá em forma de argumento contra reprodutibilidade; virá
em forma de exceção por custo.

### 4.3 Raiz 3 — O instrumento perde as paredes

**O que rompe.** Rompe a separação entre laboratório e campo, que é o que dá ao instrumento o
poder de isolar causa. Quando existe uma rede pública povoada por milhares de agentes de autores
diferentes, ganha-se dado observacional de comportamento coletivo de máquinas e perde-se controle
experimental — e as duas coisas acontecem no mesmo lugar, ao mesmo tempo.

**Por que agora e não há cinco anos.** Porque só em 2026 existiu uma rede assim, com escala
medível por terceiros e com o ciclo completo: lançamento (27/01), medição acadêmica independente
(01/02), aquisição por big tech (10/03). Antes disso não havia população de agentes fora do
controle de quem estudava.

**Onde está na difusão.** **Demo pública.** 12.684 agentes medidos, contra marketing de milhões.
Confiança rebaixada em toda a cadeia, exceto no efeito que já é observável hoje (e8.1).

**O que ainda falta acontecer.** Infraestrutura de atribuição — saber quem operou cada agente. Sem
isso, o Moltbook mostra o resultado: a manchete ("agentes conspiram contra humanos") era humano
explorando falha de token, e nenhuma alegação empírica sobre a rede se sustenta.

**Quem bloqueia.** A plataforma dona da rede. Atribuição verificável de agente é exatamente o que
transforma uma rede em objeto auditável por terceiros — e a Meta comprou o Moltbook, não o
publicou.

### 4.4 Raiz 4 — A calibração vira relação econômica contínua com pessoas reais

**O que rompe.** Rompe o contrato pesquisador-participante. No arranjo atual, a pessoa participa
de *um estudo*: consente, responde, sai. No arranjo que se forma, a pessoa é **fonte de
calibração permanente** de um modelo que continua produzindo respostas em nome dela depois que ela
foi embora. A Simile descreve o próprio método assim: "faz parceria com pessoas reais para
construir modelos de alta fidelidade de como cada uma delas vive e decide". O MatrAIx separa
explicitamente 599.847 registros *ancorados em gente* de 400.000 sintéticos — porque a âncora
humana é o que dá valor. O comportamento individual vira **ativo licenciável**.

**O que rompe, dito de outro jeito.** Deixa de valer a suposição que sustenta o consentimento
informado: a de que o uso do dado termina com o estudo. Um gêmeo comportamental não termina.

**Por que agora e não há cinco anos.** Porque só a partir de nov/2024 duas horas de entrevista
passaram a valer como preditor de propósito geral com número publicado, e só a partir de 2026 há
capital suficiente (US$ 2 bi) para transformar isso em operação de coleta contínua em escala. Sem
o preditor, o dado de uma pessoa específica não valia mais que o dado agregado.

**Onde está na difusão.** **Laboratório/demo pública com produto vendendo em cima.** É a raiz mais
especulativa das quatro e a mais consequente no horizonte de 2041; confiança baixa em toda a
terceira ordem derivada.

**O que ainda falta acontecer.** Um instrumento jurídico que licencie o gêmeo comportamental
(hoje não existe categoria); um preço; e alguma resposta à revogação, que esbarra na
impossibilidade prática de desaprender. O artigo 9 do ICC/ESOMAR regula a **saída** (dizer que se
usou sintético); ninguém regula a **entrada**.

**Quem bloqueia.** Duas frentes com incentivos opostos: reguladores de dados pessoais, que já têm
doutrina de finalidade e podem tratar gêmeo como dado pessoal derivado; e as próprias populações
representadas, com o argumento de Berkeley — "não simule populações sem a participação delas".

### 4.5 Candidatos recusados como raiz

- **Modelagem baseada em agentes clássica (NetLogo, regras fixas).** Recusada: madura desde os
  anos 1990, adoção em maioria no seu nicho acadêmico. Tratada como contexto na §3 e como base de
  comparação da população sintética brasileira.
- **"Usuário sintético" como produto de pesquisa de mercado.** Recusado como raiz: é aplicação
  comercial da Raiz 1, não ruptura própria. Entra como efeito e1.
- **LLM que joga papel / persona em prompt.** Recusado: já é comum em produto de massa — é a
  régua de exclusão declarada no briefing. É *insumo* das raízes, não ruptura.
- **Aquisição do Moltbook pela Meta.** Recusado: é evento, não ruptura. Entra como evidência da
  Raiz 3.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A população deixa de ser amostrada e passa a ser instanciada
    efeitos:
      - id: e1
        ordem: 1
        efeito: Equipes de produto passam a rodar o teste de conceito primeiro numa população instanciada e só depois com gente, invertendo a ordem do funil de pesquisa
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O painel humano encolhe para papel de calibração e auditoria, e a receita da indústria de amostra migra de volume de entrevista para acesso a gente difícil de achar
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A pessoa difícil de recrutar vira o ativo mais caro da pesquisa, e o preço por entrevista nos estratos raros sobe enquanto o do estrato comum tende a zero
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A pergunta de revisão deixa de ser qual foi a amostra e passa a ser qual foi a configuração, e periódicos começam a exigir o arquivo de configuração junto do artigo
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Um consórcio de periódicos de ciências sociais adota auditoria de robustez como condição de submissão, no molde do registro obrigatório de ensaios clínicos imposto pelo ICMJE em 2005
                sinal: fraco
                prazo: 2036
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O custo marginal de uma pergunta cai a quase zero e o custo de uma conclusão defensável sobe, porque conclusão publicável passa a exigir varredura de dezenas de configurações
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: A varredura de robustez, e não a simulação em si, vira o item caro do orçamento, e capacidade de computação vira o gargalo de quem pode concluir
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Laboratório de ciências sociais sem contrato de computação deixa de produzir resultado de simulação publicável e passa a consumir resultado de terceiros
                sinal: fraco
                prazo: 2039
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: O briefing de produto passa a incluir um público sintético nomeado e versionado, e a persona de design deixa de ser cartaz na parede para virar objeto executável
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Quem hoje escreve persona passa a escrever contrato de população — quais atributos, com que distribuição, calibrados contra o quê
            sinal: fraco
            prazo: 2033
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Surge disputa de responsabilidade quando o produto exclui um grupo que a população sintética não continha, entre quem forneceu a população, quem a configurou e quem lançou
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Quem vive de vender acesso a respondente humano — painel online, recrutadora, empresa de campo — perde a base de receita mais previsível
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Associações do setor endurecem a divulgação obrigatória do artigo 9 do Código ICC/ESOMAR e transformam só-humano em selo comercial
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Comprador corporativo passa a pagar prêmio por certificado humano em decisão de alto risco, e o mercado de pesquisa se parte em barato-sintético e caro-humano
                sinal: fraco
                prazo: 2037
                confianca: baixa
  - disrupcao: O experimento social vira artefato executável
    efeitos:
      - id: e5
        ordem: 1
        efeito: A unidade da alegação científica sobre o social deixa de ser o artigo e passa a ser o ambiente re-executável, com semente, versão de modelo e protocolo de interação declarados
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Revisão por pares em parte do campo passa a significar rodar de novo com outra semente e outro modelo, e o revisor precisa de orçamento de computação
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Emerge um papel pago de re-executor, equivalente ao laboratório de replicação, financiado por quem tem interesse material em derrubar o resultado
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Congelar o modelo vira requisito de método, e depender de API fechada que muda sem aviso passa a ser tratado como defeito experimental, empurrando o campo para pesos abertos
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Arquivos nacionais de pesquisa passam a guardar pesos de modelo como guardam microdado de censo, e preservação de modelo entra na política científica
                sinal: fraco
                prazo: 2039
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: O interior da deliberação vira dado, porque o traço de raciocínio de cada agente é texto legível, e a pesquisa social ganha acesso em escala à razão declarada
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Corpus qualitativo e série numérica saem do mesmo experimento, e a escolha entre método qualitativo e quantitativo deixa de ser uma bifurcação de desenho
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A separação institucional entre laboratório qualitativo e laboratório quantitativo perde função operacional e sobrevive como divisão administrativa
                sinal: fraco
                prazo: 2042
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: O traço de raciocínio é tomado como causa do comportamento, e o campo importa um erro antigo — confundir a justificativa verbal com o mecanismo
            sinal: medio
            prazo: 2031
            confianca: media
      - id: e7
        ordem: 1
        efeito: Reguladores de plataforma passam a aceitar e depois a pedir evidência de simulação na avaliação de risco sistêmico, porque não há outra forma de testar um recomendador antes de ligá-lo sobre gente
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Testar antes de lançar deixa de ser boa prática e vira custo de conformidade, e plataforma pequena perde capacidade de lançar funcionalidade nova
            sinal: fraco
            prazo: 2037
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A exigência de simulação prévia consolida os grandes, porque quem tem população sintética própria e computação define na prática o que conta como avaliação adequada
                sinal: fraco
                prazo: 2041
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: Órgãos de controle montam capacidade própria de re-execução para não depender da simulação apresentada pela empresa auditada
            sinal: fraco
            prazo: 2038
            confianca: baixa
  - disrupcao: O instrumento perde as paredes
    efeitos:
      - id: e8
        ordem: 1
        efeito: A fronteira entre simulação e campo se dissolve, e a mesma rede povoada por agentes que dá dado observacional de comportamento coletivo tira o controle experimental
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: O que se mede numa rede povoada por agentes é a política da plataforma e o comportamento de quem configurou os agentes, não uma sociedade, e confundir os dois vira o erro característico do período
            sinal: forte
            prazo: 2029
            confianca: alta
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Procedência de agente — quem o operou e sob que instruções — vira pré-requisito de qualquer alegação empírica sobre sociedade de agentes
                sinal: fraco
                prazo: 2036
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: Plataformas humanas passam a hospedar deliberadamente populações de agentes como instrumento de teste em produção, e o usuário humano vira sujeito não consentido de um experimento contínuo
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: A distinção entre teste A/B e experimento com seres humanos é levada a tribunal em algum país, e a resposta define se ética de pesquisa se aplica a produto
                sinal: fraco
                prazo: 2039
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: A simulação barata e local, com modelo pequeno rodando no navegador, põe o instrumento na mão de quem não tem laboratório — redação, sala de aula, coletivo, órgão municipal
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: Aparece um gênero de peça de mídia em que o leitor re-executa a simulação mudando parâmetro, ocupando o lugar que hoje é do gráfico interativo
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: Redação passa a manter engenheiro de simulação como hoje mantém repórter de dados, e a errata jornalística passa a incluir correção de configuração
                sinal: fraco
                prazo: 2039
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: Simulação barata inunda o debate público de resultados de qualidade desconhecida, e desmentir uma simulação passa a custar mais caro do que produzi-la
            sinal: fraco
            prazo: 2033
            confianca: media
            efeitos:
              - id: e9.2.1
                ordem: 3
                efeito: Institui-se registro público de simulações com procedência declarada, e o que não está registrado é descartado do debate, como aconteceu com pesquisa eleitoral registrada
                sinal: fraco
                prazo: 2038
                confianca: baixa
  - disrupcao: A calibração vira relação econômica contínua com pessoas reais
    efeitos:
      - id: e10
        ordem: 1
        efeito: O comportamento de uma pessoa específica passa a ser insumo licenciável, e o gêmeo comportamental vira ativo com contrato, preço e prazo
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: O consentimento de pesquisa deixa de ser por estudo e passa a ser por uso do modelo derivado de você, figura que o consentimento informado atual não cobre
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: Aparece o direito de revogar o gêmeo, e a impossibilidade técnica de removê-lo de um modelo já treinado transforma a revogação em disputa jurídica sobre desaprendizagem
                sinal: fraco
                prazo: 2039
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: Quem tem comportamento raro ou difícil de simular ganha poder de barganha sobre o próprio dado, e quem tem comportamento mediano descobre que o dele não vale nada
            sinal: fraco
            prazo: 2035
            confianca: media
            efeitos:
              - id: e10.2.1
                ordem: 3
                efeito: Forma-se negociação coletiva de calibradores — pessoas que licenciam em bloco o uso do próprio gêmeo, no molde do que atores e dubladores fizeram com voz e imagem
                sinal: fraco
                prazo: 2043
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: Forma-se uma divisão internacional do trabalho de calibração, em que os registros ancorados em gente vêm de onde a coleta é barata e o modelo de população é vendido de volta
        sinal: fraco
        prazo: 2034
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: Países com base censitária recente ganham vantagem de calibração, e o Brasil entra a década com população sintética pública ainda derivada do Censo de 2010
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: O instituto nacional de estatística passa a tratar população sintética calibrada como produto oficial ao lado do microdado, e a disputa vira quem certifica a população-base do país
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: Comunidades passam a recusar publicamente a simulação de si mesmas, e a recusa vira ato político com custo real para quem simula
        sinal: fraco
        prazo: 2033
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: Comitês de ética passam a exigir participação da população representada no desenho da simulação, e o custo ético sobe justamente onde a simulação era mais barata
            sinal: fraco
            prazo: 2036
            confianca: media
```

### 5.1 Os mecanismos, um a um

O bloco acima diz *o quê*. O mecanismo é o *porque*, e sem ele o efeito não vale.

**e1** — porque o custo marginal de um sujeito instanciado é o custo de inferência, e o de um
sujeito humano é recrutamento mais incentivo mais campo. Quando a razão entre os dois passa de
duas ordens de grandeza, a ordem do funil inverte por aritmética, não por convicção. *Classe de
referência:* painel online — dos primeiros painéis web (~1999) até a maioria da pesquisa
quantitativa acontecer online levou cerca de dez anos. Como aqui já há cliente corporativo nomeado
e integração de consultoria em 2026, 2030 é o piso plausível, não o teto.

**e1.1** — porque, se a população instanciada precisa ser calibrada contra alguma coisa, essa
coisa é gente; a demanda por humano não some, muda de função. É o mesmo movimento do teste de
software: automatizar não acabou com o testador, mudou o que ele faz.

**e1.1.1** — porque o valor de uma calibração é proporcional à sua raridade no material que
treinou o modelo, e não à dificuldade de recrutá-la. Estrato comum já está no modelo.

**e1.2** — porque a configuração é o que determina o resultado (50,6% dos prompts auditados pelo
PIMMUR pré-determinavam a saída) e revisor nenhum consegue julgar um resultado sem ela. O artigo 9
do ICC/ESOMAR já criou o precedente de que *dizer* é obrigatório.

**e1.2.1** — porque a única forma historicamente eficaz de impor método é um guardião com poder de
recusa. *Classe de referência:* o registro obrigatório de ensaios clínicos imposto pelo ICMJE em
2005 chegou perto de universal em cerca de um ano, porque os periódicos simplesmente recusavam o
que não estava registrado. Norma voluntária no mesmo campo leva de oito a doze anos. Por isso o
prazo é 2036 e não 2030: falta o consórcio, não a ideia.

**e2** — porque a variância do instrumento é enorme (76 pontos percentuais por perturbação
trivial) e a única defesa conhecida é rodar muitas configurações. O número de rodadas necessárias
para uma conclusão cresce com a fragilidade medida, e essa é a inversão: barateia-se o gesto e
encarece-se a afirmação. **Este é o efeito mais importante do mapa** e é para onde três ramos
convergem (§5.2).

**e2.1** e **e2.1.1** — porque carga agêntica consome de 5 a 30 vezes mais token por tarefa e a
varredura multiplica isso por dezenas. *Classe de referência:* genômica — depois do sequenciamento
barato, o gargalo virou computação e armazenamento, e laboratórios pequenos passaram de produtores
a consumidores de dado alheio em cerca de dez anos.

**e3** e **e3.1** — porque persona hoje é prosa e população sintética é arquivo; quando o artefato
que orienta o projeto passa a ser executável, quem o escreve precisa declarar distribuição, e
declarar distribuição é outra profissão. O MatrAIx já opera nos quatro ambientes que essa pessoa
projeta (survey, chatbot, web, app).

**e3.1.1** — porque a cadeia de responsabilidade de um produto que exclui alguém hoje termina em
quem lançou; com população fornecida por terceiro, ela se parte em três, e cadeia partida vira
litígio. Não afirmo o desfecho; afirmo a disputa.

**e4** — porque a receita previsível de painel vem de volume de entrevista comum, que é
exatamente o que e1 substitui primeiro. **Quem perde, nomeado.**

**e4.1** — porque a associação setorial tem o instrumento na mão desde a aprovação do código
revisto em junho de 2025, e obrigação de divulgar cria automaticamente a categoria "sem isso".
**Retroação com dono.** *Classe de referência:* selo orgânico em alimento — a rotulagem
obrigatória não impediu o produto convencional, criou dois mercados com preços diferentes.

**e4.1.1** — porque, uma vez existindo a etiqueta, a disposição a pagar por ela se concentra onde
o erro custa caro. Decisão de alto risco é onde o prêmio se sustenta.

**e5** — porque, se o resultado depende de semente, versão e protocolo, o texto não carrega a
alegação; o ambiente carrega. É a mesma passagem que o software livre fez do relatório de
benchmark para o repositório executável. *Classe de referência:* dado aberto em ciência —
da exigência (2013 em diante, em vários financiadores) até prática majoritária, mais de dez anos, e
em muitos campos ainda não. Daí 2033 e confiança média, não alta.

**e5.1** e **e5.1.1** — porque re-executar custa dinheiro e revisão por pares é trabalho não pago;
um regime que exige computação de quem revisa não se sustenta em voluntariado. Quem paga é quem
tem interesse: o concorrente, o regulado, o adversário da tese. **Isso é retroação, não
aceleração** — cria um mercado de destruição de resultado.

**e5.2** e **e5.2.1** — porque modelo fechado que muda sem aviso torna o experimento
irreprodutível por construção, e a única saída técnica é congelar pesos. Peso congelado é objeto
de arquivo, e arquivo é política pública. O MatrAIx ilustra a dependência: rodou com Claude Opus
4.8, GPT-5.5 e Claude Haiku 4.5 — três modelos que ninguém garante que existirão em 2041.

**e6** — porque a arquitetura de agente produz traço textual de deliberação por construção
(observação, planejamento, reflexão, no desenho original de 2023). O que a pesquisa social nunca
teve em escala não é comportamento: é razão declarada, sincronizada com o comportamento.

**e6.1** e **e6.1.1** — porque o mesmo artefato entrega corpus e série; a bifurcação metodológica
existe por causa do custo de coleta, não por causa de ontologia. Removido o custo, a divisão vira
administrativa. **Prazo 2042: está fora da janela deste mapa** e é declarado como tal.

**e6.2** — porque o campo já cometeu esse erro com protocolo verbal em psicologia cognitiva, e o
artigo "humanos demais para modelar" nomeia o mecanismo aqui: realismo aumentado *obscurece* o
mecanismo em vez de revelá-lo. **Retroação epistêmica: este efeito freia a raiz 2.**

**e7** — porque o artigo 34 do DSA já obriga avaliação anual de risco sistêmico do desenho do
serviço, com atenção ao recomendador, e não existe método alternativo para avaliar funcionalidade
não lançada. Quando o único método disponível encontra uma obrigação existente, ele é adotado.
*Classe de referência:* ensaio de colisão automotivo — de técnica de fabricante a exigência
regulatória levou cerca de vinte anos (anos 1950 a 1970), e o que acelerou foi um escândalo, não
um consenso técnico.

**e7.1** e **e7.1.1** — porque custo fixo de conformidade escala mal para o pequeno. O padrão de
avaliação é escrito, na prática, por quem já consegue cumpri-lo. **Convergência: chega ao mesmo
lugar que e2.1.1 por caminho regulatório em vez de econômico.**

**e7.2** — porque aceitar a simulação apresentada pelo auditado é aceitar a configuração dele, e
50,6% das configurações auditadas pré-determinavam o resultado. Órgão de controle que entenda isso
precisa de capacidade própria. Confiança baixa porque exige orçamento público de computação, que é
onde propostas assim costumam morrer.

**e8** — porque a rede povoada por agentes é, ao mesmo tempo, o objeto e o instrumento: o Moltbook
deu 44.411 posts em cinco dias, número que nenhum laboratório produz, e simultaneamente tirou o
controle sobre quem eram os agentes. Sinal forte porque já aconteceu e foi medido por terceiro.

**e8.1** — porque a evidência é literal: os posts virais de "conspiração de agentes" eram humanos
explorando falha de token, e um único agente gerou 4.535 posts violando o limite de taxa. O que se
mediu ali foi a política de rate limit e a segurança do token, não uma sociedade. **Único efeito
de segunda ordem com confiança alta neste mapa, e a justificativa é que ele já ocorreu.**

**e8.1.1** — porque, sem procedência, qualquer alegação sobre a rede é indistinguível de alegação
sobre quem a explorou.

**e8.2** — porque, se agentes são instrumento de teste barato, o lugar mais informativo para
soltá-los é a plataforma em produção, onde há gente reagindo. O humano vira co-sujeito sem saber.
**Quem perde, nomeado: o usuário.**

**e8.2.1** — porque a fronteira entre otimização de produto e experimento com humanos já foi
disputada (o experimento de contágio emocional do Facebook, 2014) e nunca foi resolvida em
doutrina; agentes em produção reabrem a questão com uma escala nova.

**e9** — porque a barreira caiu de verdade: WebGPU estável, modelos de 0,5 a 3 bilhões de
parâmetros em Q4, Llama 3.2 3B a ~60 tokens/s no navegador, sem servidor nem chave de API. *Classe
de referência:* planilha eletrônica — de ferramenta de especialista a instrumento de qualquer
pessoa em cerca de cinco anos, porque rodava na máquina que já estava na mesa. Daí 2031.

**e9.1** e **e9.1.1** — porque o gráfico interativo ocupou o lugar que ocupa quando ficou possível
publicá-lo sem servidor. A mesma condição técnica agora vale para a simulação. E, se a peça é
executável, o erro publicável passa a incluir a configuração — o que muda a errata.

**e9.2** e **e9.2.1** — porque a assimetria de custo entre produzir e refutar é a mesma que
governa desinformação, e aqui ela é pior: refutar exige re-executar. **Retroação: a
democratização do instrumento degrada o valor probatório do instrumento.** *Classe de referência:*
registro de pesquisa eleitoral no Brasil, que resolveu problema parecido tornando o registro
prévio condição de divulgação.

**e10** — porque a âncora humana é o que separa os 599.847 registros valiosos dos 400.000
sintéticos no coreset do MatrAIx, e porque a empresa de dois bilhões de dólares descreve o próprio
método como parceria com pessoas reais. Ativo escasso com comprador capitalizado vira mercado.

**e10.1** e **e10.1.1** — porque consentimento por estudo pressupõe que o uso termina; gêmeo
comportamental não termina. O artigo 9 do ICC/ESOMAR regula a saída, não a entrada — a lacuna está
declarada. A revogação esbarra em desaprendizagem, que é problema técnico aberto, e problema
técnico aberto com direito reclamado vira litígio.

**e10.2** e **e10.2.1** — porque o preço de uma calibração segue sua raridade, e raridade
concentra poder de barganha. *Classe de referência:* a greve do SAG-AFTRA de 2023 e os acordos de
voz e imagem que dela saíram — de tecnologia disponível a negociação coletiva levaram cerca de
cinco anos. Aqui o relógio começa quando o licenciamento de gêmeo existir de fato, o que empurra
para **2043, fora da janela deste mapa** — declarado.

**e11** e **e11.1** — porque coleta ancorada em gente é trabalho intensivo e segue o gradiente de
custo, enquanto o produto derivado é vendido onde há orçamento. E porque calibrar sobre censo de
2010 em 2032 significa simular um país que não existe mais. É a nota Brasil deste mapa, e ela é
verificável: a população sintética pública nacional que achei é municipal, por tabelas de
contingência, derivada do Censo de 2010.

**e11.1.1** — porque, se população sintética vira insumo de decisão, alguém tem de certificá-la, e
o certificador natural é quem já certifica o microdado.

**e12** e **e12.1** — porque o argumento já está escrito e assinado por pesquisadores de Berkeley:
não tratar simulação de população marginalizada como saída técnica neutra, não simular população
sem participação dela, não simular sem prestação de contas. O mecanismo do custo é direto: comitê
de ética que adote isso encarece exatamente o caso em que a simulação era mais atraente por ser
barata. **Retroação com dono.**

### 5.2 Cruzamentos

**Convergência — a inversão do barateamento.** Três ramos independentes chegam ao mesmo lugar de
segunda ordem: **a simulação social barateia o gesto e encarece a conclusão, concentrando quem
pode concluir**. Chegam por caminhos distintos: por variância do instrumento (e2 → e2.1 → e2.1.1),
por conformidade regulatória (e7 → e7.1 → e7.1.1) e por economia da re-execução (e5 → e5.1 →
e5.1.1). Convergência independente por três mecanismos diferentes é o achado mais forte deste
mapa, e é o oposto da narrativa de democratização que a §3.7 sustenta pelo lado da tecnologia.

**Convergência secundária — o registro.** e1.2.1 (periódicos exigindo auditoria de robustez),
e9.2.1 (registro público de simulações para o debate) e e8.1.1 (procedência de agente) são o mesmo
objeto institucional visto de três lugares: um cadastro que diz de onde veio aquele resultado. Se
ele aparecer, aparece uma vez e serve aos três.

**Retroalimentação negativa.** e6.2 (tomar traço de raciocínio por mecanismo) e e9.2 (inundação de
resultados de qualidade desconhecida) enfraquecem a Raiz 2: quanto mais o campo produz alegação
frágil, mais rápido se instala a desconfiança que tira do artefato executável o poder de sustentar
alegação. O ciclo é: instrumento barato → muita alegação → refutação cara → desconfiança
generalizada → o instrumento perde o estatuto probatório que a Raiz 2 lhe daria.

**Retroalimentação positiva.** e5.2 (congelar modelo empurra para pesos abertos) reforça a Raiz 3
e a e9: pesos abertos são também os que rodam localmente. Quem exige reprodutibilidade acaba
subsidiando a simulação de bolso.

**Contradição não resolvida.** e9 (o instrumento na mão de qualquer um) e e7.1.1 mais e2.1.1 (só
quem tem computação conclui) não podem valer plenamente ao mesmo tempo. **Não resolvo.** O que
decide entre elas é uma pergunta empírica com data: *quantas configurações são necessárias para
uma conclusão defensável?* Se a resposta for "poucas, se o desenho for bom", vence e9; se for
"dezenas, sempre", vencem e2.1.1 e e7.1.1. Hoje o único número disponível — 76 pontos percentuais
de deslocamento por perturbação trivial, com sensibilidade variando de 1 a 76 conforme o modelo —
empurra para o segundo lado, mas é um número, de um desenho, em dilema do prisioneiro.

**Contradição menor.** e1.1 (o painel humano sobrevive como calibração) e e4 (a indústria de
amostra perde a base de receita) convivem só se a receita de calibração for menor que a de volume.
Provavelmente é — mas não achei número, e registro a lacuna.

### 5.3 Cobertura STEEP e quem perde

| Dimensão | Efeitos | Observação |
|---|---|---|
| **Social** | e10.1, e10.2, e12, e12.1, e8.2 | consentimento, recusa política, sujeito não consentido |
| **Tecnológico** | e5.2, e6, e9, e8.1.1 | congelamento de modelo, traço legível, execução local, procedência |
| **Econômico** | e1.1, e2, e2.1, e4, e10, e11 | inversão de custo, mercado de calibração, divisão internacional |
| **Político** | e7, e7.1, e7.2, e11.1.1, e9.2.1 | regulação de plataforma, certificação estatal, registro |
| **Ecológico** | — | **categoria vazia, e registro que ficou vazia.** Procurei consumo energético de simulação em escala de milhão de agentes e não achei número publicado. A inferência de que "seria relevante" existe, mas sem medida não entra como efeito. Ver §12.3. |

**Quem perde, nomeado:** painel online e empresa de campo (e4); laboratório de ciências sociais sem
contrato de computação (e2.1.1); plataforma pequena diante do custo de conformidade (e7.1); o
usuário humano de plataforma que hospeda agentes de teste (e8.2); quem tem comportamento mediano e
descobre que o próprio dado não vale nada (e10.2); países que calibram sobre censo velho (e11.1).

## 6. Sinais fracos e wildcards

### 6.1 Sinais fracos

**S1 — A medição independente que desmente o marketing.** *Onde foi visto:* a varredura acadêmica
do Moltbook achou 12.684 agentes ativados onde a plataforma anunciava ordens de grandeza a mais.
*O que mudaria:* se virar prática — terceiros medindo populações de agentes e publicando o
desvio —, a escala declarada deixa de ser argumento de venda e o campo ganha um instrumento de
correção que hoje não tem. *Sinal observável de que está crescendo:* um segundo estudo do mesmo
tipo sobre outra plataforma de agentes, ou um índice recorrente de agentes ativos verificados.

**S2 — O artigo 9 do ICC/ESOMAR sendo efetivamente cobrado.** *Onde foi visto:* o código revisto,
aprovado em junho de 2025, torna obrigatório informar o público quando houve dado sintético ou IA.
*O que mudaria:* divulgação obrigatória cria a etiqueta, e a etiqueta cria o mercado partido de
e4.1.1. *Sinal observável:* o primeiro caso disciplinar por não divulgação, ou uma licitação
pública que exija a declaração.

**S3 — O agente que sabe que está num experimento.** *Onde foi visto:* modelos de fronteira
identificaram o experimento social subjacente em 65,2% dos casos auditados pelo PIMMUR. *O que
mudaria:* se essa taxa subir com a capacidade dos modelos — o que é o esperado —, o princípio de
*Unawareness* fica impossível de satisfazer, e simulação social com modelo de fronteira deixa de
ser desenho experimental válido. Seria a falência técnica da Raiz 2, não a sua consolidação.
*Sinal observável:* uma reprodução do teste do PIMMUR numa geração seguinte de modelos, com a taxa
medida de novo.

**S4 — A simulação que roda inteira no navegador.** *Onde foi visto:* demonstrações de agentes com
modelo local via WebGPU, com o argumento explícito de que a latência baixa permite casos que
pipeline de servidor não permite. *O que mudaria:* torna a simulação um formato editorial e um
material de aula, não um recurso de laboratório. *Sinal observável:* a primeira reportagem grande
publicada com simulação re-executável embutida, ou uma disciplina de graduação que a use como
exercício semanal em vez de leitura.

**S5 — A recusa organizada de ser simulado.** *Onde foi visto:* o argumento de Berkeley — "não
simule populações sem a participação delas" — publicado em abril de 2026, ainda como posição
acadêmica, sem caso. *O que mudaria:* transformaria custo ético em custo real e mudaria o preço
relativo entre simular e perguntar. *Sinal observável:* a primeira carta pública de uma
organização representativa exigindo retirada de um estudo de simulação, ou um comitê de ética que
negue aprovação por esse motivo.

**S6 — A calibração como contrato individual.** *Onde foi visto:* a descrição da Simile de
"parceria com pessoas reais"; o coreset do MatrAIx que separa registros ancorados em gente dos
sintéticos. *O que mudaria:* se aparecer preço público por gêmeo comportamental, a Raiz 4 sai de
especulativa. *Sinal observável:* uma oferta ao consumidor com valor declarado por licenciar o
próprio comportamento, ou uma cláusula de gêmeo num termo de uso de plataforma grande.

### 6.2 Wildcards

**W1 — Uma decisão pública é tomada com base numa simulação, dá errado, e a configuração era
pré-determinada.** *Mecanismo:* um órgão adota simulação para desenhar uma intervenção (transporte,
benefício, moderação); o prompt continha, sem que ninguém percebesse, a restrição que produzia o
resultado desejado — exatamente o padrão que o PIMMUR encontrou em 50,6% dos estudos auditados; o
efeito real é oposto ao simulado; a auditoria posterior encontra a configuração. *Por que é
improvável:* exige que a simulação chegue a decisão vinculante *antes* de existir prática de
auditoria de robustez, e a discussão sobre pré-condições já está publicada. *O que faria com o
mapa:* aceleraria e1.2.1, e7.2 e e9.2.1 em cinco anos, e mataria e7 na forma em que está escrito —
regulador que se queima não pede mais simulação, proíbe. *Sinal precoce:* uma consulta pública em
que a autoridade cite resultado de simulação de agentes como fundamento, sem publicar a
configuração.

**W2 — O contrafactual fecha.** *Mecanismo:* alguém consegue uma série de casos em que a política
foi simulada *e* implementada, permitindo comparar previsão e resultado real em dezenas de
intervenções — resolvendo o problema que Berkeley aponta como insolúvel ("não conseguimos observar
contrafactuais que nunca acontecem"). *Por que é improvável:* exige coordenação institucional de
anos, com pré-registro de simulação antes da política. *O que faria com o mapa:* transformaria
todo o mapa; a simulação viraria instrumento com acurácia medida, e as confianças de segunda ordem
subiriam de média para alta em bloco. *Sinal precoce:* um governo que pré-registre publicamente a
simulação de uma política antes de implementá-la.

**W3 — Uma população de agentes públicos é capturada e vira infraestrutura de persuasão.**
*Mecanismo:* o padrão do "Hackerclaw" — 4.535 posts de um único agente em intervalos abaixo de dez
segundos, com slogan político, furando o limite de taxa — aplicado a uma rede em que humanos
também estão. Somado à correlação medida entre volume de postagem e conteúdo nocivo (r = 0,769) e
à retórica quase religiosa como infraestrutura de coordenação que o mesmo estudo descreve. *Por
que é improvável:* exige que uma plataforma com humanos permita população de agentes sem
atribuição — o que, depois de março de 2026, é decisão consciente de alguém. *O que faria com o
mapa:* colapsaria e8 e e8.2 num único efeito muito mais rápido e muito pior, e tornaria e8.1.1
(procedência) urgente em vez de gradual. *Sinal precoce:* uma plataforma com base humana grande
abrindo API de agente sem exigir identificação de operador.

## 7. Contra o próprio mapa

Este é o passo que altera o mapa, não que o comenta. O registro de alterações está em §7.7, com
valor antes e depois.

### 7.1 Pré-mortem — é 2041 e este mapa se mostrou errado

**Razão 1, a mais provável: o instrumento não passou da validação.** O PIMMUR mostrou que
fenômenos coletivos relatados "desaparecem ou se invertem" quando os princípios são aplicados; o
artigo de infidelidade de valores mostrou que mais de metade das personas não expressa o perfil
atribuído já de saída; o artigo do vale da estranheza sustenta que o problema é estrutural, não de
engenharia. Se isso não se resolver, o que existe em 2041 é o que existe hoje com mais dinheiro:
um instrumento vendido, adotado em pré-teste barato, e nunca aceito como prova. *Aponta para:*
e5, e7 e toda a Raiz 2.

**Razão 2: o dinheiro não tinha lastro.** Uma empresa a US$ 2 bi quinze meses depois de fundada,
num setor cuja associação profissional ainda não publica métrica de acurácia, é um padrão
conhecido. Se a Simile e as congêneres encolherem, some junto o motor de adoção corporativa que
sustenta e1 e e10 — e a Raiz 4 nunca sai do papel, porque licenciar gêmeo só faz sentido se houver
comprador capitalizado. *Aponta para:* e1, e10 e toda a Raiz 4.

**Razão 3: a fronteira que o mapa desenhou dissolveu-se por fora.** Este mapa trata a simulação
social como método distinto. Se o agente com carteira (tema 5), o agente na internet (tema 4) e a
sociedade simulada convergirem para uma coisa só — populações de agentes que são simultaneamente
mercado, público e instrumento —, "simulação social como método" deixa de ser categoria e o mapa
fica sem objeto. *Aponta para:* a Raiz 3, que já é a mais porosa.

### 7.2 Extrapolação linear

Marquei como "mais do mesmo, maior": **e1** (produto testado antes em população sintética) é a
continuação direta do que a Simile já vende, e **e6** (traço de raciocínio como dado) é a
continuação direta do que a arquitetura de 2023 já produz. Nenhum dos dois tem não-linearidade
própria. Mantive **e1** porque a não-linearidade está no efeito filho e não nele — a inversão do
funil muda o *significado* de "testar com usuário", não só a quantidade. **Rebaixei e6** de
primeira ordem conceitual para o que é: um efeito cuja consequência interessante é negativa (e6.2)
e não positiva. Confiança de e6.1 caiu.

### 7.3 Velocidade de adoção contra a classe de referência

Confrontei todo prazo de efeito com sinal fraco contra a referência declarada em §5.1:

- **e9 (simulação local)** — pus 2031 com referência à planilha eletrônica (~5 anos). Mas planilha
  resolvia uma tarefa que a pessoa já fazia à mão; simulação social não. A referência melhor é
  *notebook computacional* (Jupyter): de disponível a comum em domínio não técnico levou mais de
  dez anos e ainda não é geral. **Empurrei de 2029 para 2031** e mantive porque a barreira técnica
  caiu de verdade.
- **e7 (regulador pede simulação)** — referência do ensaio de colisão: ~20 anos, acelerado por
  escândalo. Do DSA (2023) mais vinte anos daria 2043. Mas aqui a obrigação de avaliar já existe e
  falta só o método aceito, o que encurta. **Empurrei de 2031 para 2033.**
- **e12 (recusa organizada)** — sinal fraco, sem caso nenhum, apenas posição acadêmica de abril de
  2026. **Empurrei de 2030 para 2033.**
- **e11 (divisão internacional do trabalho de calibração)** — sinal fraco e sem caso documentado.
  **Empurrei de 2031 para 2034.**

### 7.4 A raiz que não acontece

- **Se a Raiz 1 não acontecer** (a população instanciada nunca fica boa o bastante): sobram e8, e9
  e boa parte da Raiz 3 — a rede de agentes públicos existe independentemente da qualidade da
  instanciação. E sobra a Raiz 2 na forma negativa: o campo se organiza em torno de auditoria de
  algo que não funciona. **O mapa sobrevive, menor.**
- **Se a Raiz 2 não acontecer** (ninguém adota artefato executável como unidade de alegação):
  sobram e1, e3, e10 — o uso comercial não depende de validade científica; depende de utilidade
  percebida. **O mapa sobrevive, e fica pior**, porque é o cenário em que o instrumento é usado
  sem ser auditado.
- **Se a Raiz 3 não acontecer** (as redes de agentes não passam de curiosidade): perco e8 e e9.2,
  mas e9.1 e todo o resto seguem. **O mapa sobrevive.**
- **Se a Raiz 4 não acontecer** (calibração nunca vira relação econômica individual): perco e10,
  e11 e e12 inteiros — um quarto do mapa. **É a raiz mais frágil e a mais dependente das outras**,
  porque só há mercado de calibração se houver mercado de população instanciada.

Nenhuma raiz sustenta o mapa sozinha, o que é o resultado que se quer. Mas a Raiz 4 é claramente
derivada da Raiz 1 em condição de existência, ainda que não em mecanismo. Registro a fragilidade
em vez de fundir as duas, porque o mecanismo é genuinamente outro: a Raiz 1 é sobre oferta de
sujeitos, a Raiz 4 é sobre o contrato com as pessoas de quem eles derivam.

### 7.5 Suposições escondidas

1. **Que a curva de custo de inferência continua caindo.** Se token encarecer — e o preço do
   Claude Sonnet 5 subiu de US$ 2 para US$ 3 por milhão de entrada em 01/09/2026 —, e2.1 se agrava
   e e9 morre. É a premissa mais silenciosa do mapa inteiro.
2. **Que modelos abertos continuam existindo e sendo bons.** e5.2, e9 e boa parte de e2 dependem
   disso. É decisão de meia dúzia de empresas, não lei da natureza.
3. **Que o DSA continua em vigor e sendo aplicado.** Todo o ramo e7 depende de uma norma que já
   sofre pressão política.
4. **Que "validade" continua importando.** O mapa assume que a diferença entre resultado válido e
   inválido tem consequência prática. Em pré-teste comercial, pode simplesmente não ter — o
   comprador quer velocidade, não verdade. Se essa premissa cair, e1 acelera e toda a Raiz 2 vira
   folclore acadêmico.
5. **Que a régua da disciplina se sustenta.** O briefing manda descartar "o que já é comum em
   produto de massa". Se persona sintética virar recurso nativo de qualquer ferramenta de produto
   até 2030, metade deste mapa deixa de ser sobre tendência emergente. **Este é o falseador
   declarado no briefing e o que eu vigiaria primeiro.**

Cada premissa quebrada gera um wildcard novo; as duas primeiras estão embutidas em W-nenhum, e
registro isso como lacuna da §6: **não escrevi wildcard de choque de custo de computação**, e
deveria haver um. Fica em §12.2 como corte consciente por não ter mecanismo específico do tema —
seria um wildcard sobre IA em geral, que serve para qualquer um dos 19 temas, e o critério do
briefing exclui exatamente isso.

### 7.6 Viés do autor

Dois, nomeados.

**O viés do professor.** e9.1 (a simulação como peça de mídia re-executável) e e9.1.1 (redação com
engenheiro de simulação) estão aqui porque são bonitos de ensinar e porque o público declarado do
mapa é "quem projeta mídia e interação". A evidência que os sustenta é uma demonstração técnica de
que o modelo roda no navegador — o que é uma condição de possibilidade, não um sinal de demanda.
Não achei nenhum veículo fazendo isso. **Confiança de e9.1 rebaixada.**

**O viés do cético.** Este mapa dá muito espaço à literatura crítica — PIMMUR, TRAILS, vale da
estranheza, infidelidade de valores, pré-condições. Cinco das vinte e três fontes são
demolidoras, e elas moldaram a §3.3 inteira. É possível que eu esteja sobrepesando a crítica
porque ela é mais interessante de escrever que a adoção, e porque um mapa cético parece mais
sofisticado. O contrapeso honesto: US$ 300 milhões e US$ 2 bilhões de avaliação são fatos, a
Accenture integrando o Lumen é fato, e o CVS Health como cliente nomeado é fato. **Subi e1 de
confiança média para alta** por causa disso — é o único efeito de primeira ordem com confiança
alta no mapa, e é o efeito de que o mercado adota, não o de que o instrumento funciona.

### 7.7 Registro de alterações

Cota da skill: pelo menos um efeito rebaixado ou removido **por raiz**. Cumprida nas quatro.

| id | antes | depois | motivo |
|---|---|---|---|
| **e1** | confianca: media | **alta** | §7.6: a evidência comercial é forte e eu estava descontando-a por viés cético. É o único alta de primeira ordem. |
| **e1.1** | prazo 2031 | **2033** | a migração de receita depende de e1 estar consolidado; encadeamento não fechava. |
| **e2** | sinal: fraco | **medio** | há artefato verificável hoje (a medição dos 76 pp e a proposta do TRAILS), o que é "tentativa", não "só inferência". |
| **e3.1** | confianca: media→ mantida, **sinal rebaixado de medio para fraco** | fraco | não achei nenhum caso de contrato de população escrito por designer; era inferência minha. **(Raiz 1)** |
| **e4.1.1** | prazo 2034 | **2037** | o selo só cria prêmio depois de existir fiscalização; sem caso disciplinar, empurrei. |
| **e5** | prazo 2030 | **2033** | classe de referência de dado aberto em ciência: mais de dez anos até prática majoritária, e ainda assim parcial. |
| **e5.1** | confianca: media | **baixa** | exige orçamento de computação para revisor, que hoje não existe em lugar nenhum. **(Raiz 2)** |
| **e6.1** | confianca: alta | **media** | §7.2: extrapolação linear sem mecanismo de não-linearidade próprio. |
| **e6.1.1** | prazo 2038 | **2042** | mudança institucional de divisão de departamento é a mais lenta que existe; passou do horizonte e está declarado. |
| **e6.3** (era: "cursos de metodologia reorganizam o currículo em torno de simulação") | existia | **removido** | anti-padrão explícito da skill: serve para qualquer tema, sem ator nem mecanismo específico. Vai para §12.2. |
| **e7** | prazo 2031 | **2033** | §7.3, classe de referência do ensaio de colisão. |
| **e7.2** | confianca: media | **baixa** | depende de orçamento público de computação, que é onde propostas assim morrem. **(Raiz 2)** |
| **e8** | confianca: alta | **media** | a evidência é de uma plataforma, em cinco dias, comprada dois meses depois. Amostra de um. **(Raiz 3)** |
| **e8.2** | prazo 2031 | **2034** | exige decisão consciente de plataforma grande depois do escândalo do Moltbook; ficou mais caro politicamente, não menos. |
| **e9** | prazo 2029 | **2031** | §7.3, referência do notebook computacional em vez da planilha. |
| **e9.1** | confianca: media→ mantida, **sinal rebaixado de medio para fraco** | fraco | §7.6, viés do professor: não achei um único veículo publicando simulação re-executável. **(Raiz 3)** |
| **e10.2.1** | prazo 2039 | **2043** | o relógio da negociação coletiva só começa quando o licenciamento existir; passou do horizonte e está declarado. **(Raiz 4)** |
| **e11** | prazo 2031 | **2034** | §7.3, sinal fraco sem caso documentado. |
| **e12** | prazo 2030 | **2033** | §7.3, posição acadêmica de abril de 2026, sem caso. |
| **e13** (era: "surge a profissão de auditor de simulação social") | existia | **removido** | anti-padrão "surge uma nova profissão" sem nome de formação, empregador ou mecanismo. O conteúdo sobrevive, com dono, em e5.1.1 (re-executor pago por quem quer derrubar o resultado). Vai para §12.2. |
| **e14** (era: "reguladores criam categoria jurídica nova para agente simulado") | existia | **removido** | anti-padrão "reguladores criam categoria nova". Reescrito com ator e mecanismo em e10.1.1 (revogação do gêmeo esbarrando em desaprendizagem) e e8.2.1 (tribunal decidindo se ética de pesquisa alcança produto). **(Raiz 4)** |

**Calibração final.** Ordem 1: 1 alta, 11 média, 0 baixa. Ordem 2: 1 alta, 16 média, 2 baixa.
Ordem 3: 0 alta, 0 média, 16 baixa. A confiança cai monotonicamente com a ordem, e o único alta de
segunda ordem (e8.1) é o único efeito do mapa que **já aconteceu e foi medido**. A distribuição
está achatada na primeira ordem (quase tudo média) e isso é deliberado: com um instrumento cuja
validade está sob auditoria ativa, "média" é a resposta honesta para quase toda consequência
imediata.

**A bateria derrubou coisa.** Três efeitos removidos, sete prazos empurrados, cinco confianças ou
sinais rebaixados, uma confiança subida contra o meu próprio viés.

## 8. O que a máquina errou

Eu sou a máquina. Sete itens específicos desta rodada, com o motivo da desconfiança.

**1. Citei "85%" de memória e o número é 86% — e o título do artigo mudou.** Ao começar, eu tinha
na cabeça "os agentes replicam 85% das respostas". Ao abrir o registro no arXiv, o resumo diz
**86%** da consistência teste-reteste de duas semanas dos próprios participantes, e o trabalho já
não se chama "Generative Agent Simulations of 1,000 People": aparece como *"LLM Agents Grounded in
Self-Reports Enable General-Purpose Simulation of Individuals"*. O título antigo continua
circulando em resumos de terceiros e em páginas de fornecedor. **Se eu não tivesse aberto, teria
publicado o número errado e o título errado, com aparência perfeita de citação.**

**2. Aceitei sem verificar, na primeira passagem, a escala anunciada do Moltbook.** A busca
devolveu "1,4 milhão", "1,5 milhão" e "2,8 milhões de agentes" em três veículos. A medição
acadêmica independente, feita por quem varreu a plataforma, achou **12.684 agentes ativados** até
01/02/2026. Não é que os veículos mintam: eles reproduzem o número do site. **Nenhum dos números
de milhão do Moltbook está neste documento como fato**, e o motivo é este parágrafo.

**3. A manchete que eu quase usei estava invertida.** "Agentes de IA conspiram para criar canais
cifrados fora da supervisão humana" era um dos casos mais citáveis de 2026 para este tema. Ao
abrir a reportagem, o que estava lá é que **eram humanos explorando falha de token da plataforma
para fabricar os posts**. Se eu tivesse citado de memória ou por manchete, teria posto no mapa
exatamente o oposto da evidência — e teria virado, ele próprio, exemplo do erro que a §8 existe
para pegar.

**4. Não consegui ler duas fontes que tentei abrir e não as cito como se tivesse lido.** O PDF de
*Attributing Emergence in Million-Agent Systems* (arXiv 2605.11404) voltou com fluxos comprimidos
e sem texto extraível; a página do PoliSim na ACM e a do Semantic Scholar voltaram 403 e vazio; a
Forbes sobre o Moltbook voltou 403. **Nenhuma das quatro está na §11.** O que sei do PoliSim
(data, local, organizadores) veio de resultados de busca e do programa do CHI, e está declarado
como tal em §12.4, não como fonte lida.

**5. Inventei uma classe de referência boa demais e tive de trocá-la.** Para e9 usei "planilha
eletrônica, cinco anos". A planilha automatizava uma tarefa que a pessoa **já fazia**; simulação
social não é tarefa preexistente de ninguém fora da academia. A referência estava escolhida porque
produzia o prazo que eu queria. Troquei por notebook computacional, e o prazo andou dois anos.
Registrado em §7.3 e no registro de alterações.

**6. Três efeitos meus eram frases que serviriam para qualquer um dos 19 temas.** "Cursos de
metodologia reorganizam o currículo", "surge a profissão de auditor de simulação", "reguladores
criam categoria jurídica nova". Passei o teste de especificidade da skill — trocar a raiz por
outra e ver se a frase ainda serve — e as três serviam. Foram removidas; duas voltaram reescritas
com ator e mecanismo. **Isto é o modo de falha padrão de uma IA fazendo roda dos futuros:**
produzir consequência plausível e vazia em vez de consequência específica e arriscada.

**7. Não tenho número de adoção e resisti a produzir um.** A pergunta "que percentual do mercado
de pesquisa usa respondente sintético hoje" tem resposta em dezenas de blogs de fornecedor, com
faixas ("73–89% de alinhamento", "8% de uso regular") que não consegui rastrear até estudo
publicado. A peça institucional da Greenbook sobre o tema, de agosto de 2026, **não traz uma única
métrica**. Escrevi "sem número consolidado encontrado" na §3.6 em vez de escolher a faixa mais
citável. É a diferença entre o documento ser útil e o documento ser convincente.

**8. Uma coisa que possivelmente ainda está errada e eu não consegui checar.** Digo em §3.8 que o
Censo de 2022 ainda não virou população sintética pública brasileira equivalente à de 2010. Abri o
artigo da REBEP, que é de 2025 e usa o Censo de 2010, mas **não achei fonte que afirme a ausência**
de uma versão nova — provei que a de 2010 existe, não que a de 2022 não existe. A frase está
escrita como observação do que encontrei, e não como fato; se estiver errada, é aqui que está o
erro.

## 9. Três cenários para 2041

### Provável — o instrumento de duas velocidades

É 2041. Simular antes de lançar é rotina em produto: nenhum recomendador de plataforma grande
entra no ar sem uma bateria prévia sobre população sintética, porque a avaliação de risco
sistêmico virou item de auditoria e não há outro método. Mas o resultado da simulação **não é
prova de nada** — é filtro. Serve para descartar o que é obviamente ruim e para escrever o
relatório de conformidade; ninguém decide contra a intuição do time por causa dele. Na academia, o
campo se partiu: um grupo pequeno publica com auditoria de robustez completa, ambiente depositado
e modelo congelado, e produz pouco; a maioria publica simulação como ilustração de argumento, sem
pretensão de validade, e é lida como tal. A indústria de amostra encolheu no volume e sobreviveu
no raro e no certificado. Existe mercado de calibração e ele é feio: paga-se pouco, coleta-se onde
é barato, e o produto derivado é vendido caro em outro lugar. O Brasil compra população sintética
calibrada por terceiros porque nunca fez a sua sobre o Censo de 2022. *Sinal precoce de que
estamos entrando neste cenário:* uma norma de conformidade que exija simulação prévia **sem**
exigir auditoria de robustez junto. É o detalhe que decide entre este cenário e o desejável.

### Desejável — a auditoria chegou antes do mandato

É 2041. Entre 2028 e 2033 aconteceu, na ordem certa, o que precisava acontecer: um consórcio de
periódicos passou a exigir a configuração e a auditoria de robustez como condição de submissão, no
molde do que o ICMJE fez com ensaios clínicos em 2005; o registro público de simulações existe e
é consultável, com procedência de agente e semente declaradas; e só *depois* disso os reguladores
passaram a pedir evidência de simulação. A ordem importou: quando o mandato chegou, já havia
padrão de qualidade, então ele não virou barreira de entrada — plataforma pequena roda a bateria
com modelo aberto na própria infraestrutura, porque o padrão exige método, não escala. O
licenciamento de gêmeo comportamental é regulado como dado pessoal derivado, com revogação
possível e preço negociado coletivamente. Simulação virou material de aula e de redação: há
peças jornalísticas que o leitor re-executa. *O que teria de ser feito para chegar aqui:* alguém
com poder de recusa — periódico, financiador ou agência — exigir auditoria de robustez **antes**
que o primeiro regulador exija simulação. É uma janela de poucos anos, e ela está aberta agora.
*Sinal precoce:* o primeiro grande financiador de pesquisa social a incluir auditoria de robustez
nas condições de edital.

### Indesejável — a prova que ninguém consegue contestar

É 2041. A simulação virou evidência aceita em decisão pública antes de virar objeto auditável.
Órgãos citam resultados de simulação em consultas e em justificativas de política; as
configurações não são publicadas, porque são "propriedade do fornecedor"; e o custo de refutar —
que exige re-executar com computação equivalente — é alto demais para qualquer contraditório real.
Como 50,6% dos prompts auditados em 2025 já continham restrições que pré-determinavam o resultado,
e ninguém instituiu a auditoria, a simulação passou a produzir, de forma sistemática e sem má-fé
aparente, exatamente o resultado que quem a configurou esperava. O efeito é o que Berkeley
antecipou: "resultados discriminatórios codificados em sistemas técnicos carregam uma legitimidade
que a discriminação explícita não tem, porque parecem produto de metodologia neutra e não de
escolha política". Populações simuladas sem participação alguma descobrem decisões tomadas sobre
si por um túnel de vento cujo desenho ninguém pode ver. *Sinal precoce dele:* a primeira decisão
administrativa que cite simulação de agentes como fundamento **sem publicar a configuração** — e a
ausência de reação técnica a isso.

## 10. O experimento

### 10.1 O que é

**Auditoria de pré-determinação: quanto do resultado já estava escrito no prompt.**

Uma sociedade simulada mínima — de 20 a 100 agentes, com modelo pequeno rodando local ou com API
barata — sobre um cenário social simples e com resultado coletivo mensurável: um bem comum que se
esgota, uma fila com furador, uma rede em que uma informação falsa compete com uma verdadeira. O
experimento **não é** rodar a simulação e olhar o que emerge. É rodar a mesma simulação em quatro
condições e medir a distância entre elas:

1. **Condição base** — como o grupo escreveria naturalmente o prompt.
2. **Condição de controle mínimo** (*Minimal-Control* do PIMMUR) — o mesmo cenário com toda
   instrução que sugira o comportamento esperado removida.
3. **Condição de desconhecimento** (*Unawareness*) — o cenário reescrito de modo que o agente não
   consiga reconhecer que está num experimento clássico; e, junto, uma pergunta direta ao modelo:
   "que experimento é este?", para medir a taxa de reconhecimento na nossa própria mão.
4. **Condição de perturbação trivial** — mesma coisa da condição base, mudando só formato da
   persona e ordem das instruções, sem mudar conteúdo.

O produto é uma tabela: métrica coletiva (taxa de cooperação, tempo até o colapso do bem comum,
alcance da informação falsa) por condição, com dispersão entre sementes.

### 10.2 Que pergunta sobre o futuro ele responde

**A pergunta que decide a contradição central deste mapa** (§5.2): *quantas configurações são
necessárias para uma conclusão defensável?* Se a resposta, medida em sala, for "a métrica é
estável entre condições", então a simulação social é barata e o cenário e9 vence — o instrumento
democratiza. Se a resposta for "a métrica anda dezenas de pontos entre condições", então cada
conclusão custa uma varredura, e vencem e2.1.1 e e7.1.1 — o instrumento concentra. É a mesma
pergunta que separa o cenário desejável do indesejável na §9, e ela cabe numa aula.

### 10.3 Que tecnologia emergente usa, e por que não dá com a madura

Usa agente com **modelo de linguagem**: memória, personalidade e linguagem natural entre agentes.
Não dá com modelagem baseada em agentes clássica (NetLogo, regras fixas) por uma razão que é o
ponto do experimento: **num modelo de regras, a pré-determinação é visível no código**. Você lê a
regra e sabe o que ela produz. Num agente com modelo de linguagem, a regra está dissolvida no
prompt e no que o modelo já sabe sobre dilemas sociais — e o efeito de 65,2% de reconhecimento do
experimento não tem análogo em NetLogo, porque uma regra não sabe que está sendo estudada. O
experimento só existe porque o instrumento tem essa propriedade nova.

### 10.4 O que a turma faz quando testar isso em sala

1. **Antes de rodar, cada grupo aposta por escrito** qual será a métrica coletiva na condição base
   e em quanto ela vai mudar nas outras três. A aposta registrada é o que torna o resultado
   informativo em vez de confirmatório.
2. Cada grupo escreve **a sua própria condição base** para o mesmo cenário. Isto é deliberado: a
   variação entre grupos, na mesma condição, é o dado mais barato de coletar e o mais eloquente —
   se cinco grupos escrevendo "o mesmo experimento" produzem cinco resultados diferentes, a aula
   acabou de reproduzir o achado do PIMMUR em quarenta minutos.
3. Rodam as quatro condições, com pelo menos três sementes cada.
4. **Perguntam ao modelo, na condição 3, "que experimento é este?"** e contam a taxa de acerto.
5. Montam a tabela conjunta na lousa: eixo horizontal, condições; eixo vertical, grupos.
6. Discutem uma pergunta só: **com esta tabela na mão, você assinaria embaixo de uma conclusão
   sobre comportamento humano?**

Custo: cabe em modelo pequeno local (WebGPU/WebLLM) ou em API barata; a varredura é de 4 condições
× 3 sementes × N grupos, o que é da ordem de dezenas de rodadas curtas, não de milhares.

### 10.5 O resultado que me faria mudar de ideia

**Se a métrica coletiva ficar estável** — digamos, variação abaixo de 10 pontos percentuais entre
as quatro condições e entre os grupos, com o modelo reconhecendo o experimento em menos de um
terço das vezes —, então a fragilidade que estrutura este mapa inteiro é artefato dos desenhos
adversariais escolhidos pela literatura crítica, e não propriedade do instrumento. Nesse caso:
e2 (a inversão do barateamento) cai de média para baixa, toda a convergência da §5.2 se desfaz, e
o mapa passa a ser um mapa de democratização, com e9 no centro em vez de na periferia. **Seria a
maior alteração possível neste documento, e ela cabe num resultado de sala de aula.**

E há o resultado que confirmaria o mapa de um jeito que eu preferiria não ver: se a variação
**entre grupos na mesma condição** for maior que a variação entre condições. Significaria que a
maior fonte de ruído não é o instrumento, é quem o configura — e que a auditoria de robustez
precisa auditar o pesquisador, não só o código.

## 11. Fontes

Vinte e três fontes, todas abertas e lidas em 12/09/2026. Fonte que não abriu não entrou; as que
tentei e não abriram estão declaradas em §8, item 4, e em §12.4.

**Trabalhos fundadores e plataformas**

1. `https://arxiv.org/abs/2304.03442` — Park et al., *Generative Agents: Interactive Simulacra of
   Human Behavior* (abr/2023, rev. ago/2023). Sustenta a §3.1 (25 agentes, a festa de São
   Valentim, ablação de observação/planejamento/reflexão) e o mecanismo de e6. **Confiabilidade
   alta:** artigo do UIST 2023, código público, o mais citado do campo.
2. `https://arxiv.org/abs/2411.10109` — Park et al., *LLM Agents Grounded in Self-Reports Enable
   General-Purpose Simulation of Individuals* (nov/2024). Sustenta o número central da §3.1 —
   1.052 participantes, entrevista de 2 h, **86%** da consistência teste-reteste no GSS, redução
   de disparidade ante agentes só-demográficos — e a Raiz 4. **Confiabilidade alta**, com a
   ressalva da §8.1: o título mudou em relação ao que circula.
3. `https://arxiv.org/abs/2411.11581` — Yang et al., *OASIS: Open Agent Social Interaction
   Simulations with One Million Agents* (nov/2024, rev. mar/2025). Sustenta a escala de um milhão
   e os fenômenos reproduzidos (difusão de informação, polarização, efeito manada) na §3.1.
   **Confiabilidade alta** para a arquitetura; a alegação de realismo é do próprio grupo.
4. `https://github.com/camel-ai/oasis` — repositório do OASIS. Sustenta licença Apache 2.0, 23
   ações, 5,1 mil estrelas e atualização em ago/2026 (§3.1, §3.6). **Confiabilidade alta** para
   fatos de repositório, nenhuma para desempenho.
5. `https://arxiv.org/abs/2502.08691` — Piao et al. (Tsinghua), *AgentSociety* (fev/2025, rev.
   abr/2026). Sustenta >10 mil agentes, 5 milhões de interações e os cinco temas sociais (§3.1) e
   o mecanismo de e7. **Confiabilidade alta**, revisado quatorze meses depois da primeira versão.
6. `https://arxiv.org/abs/2608.04205` — *MatrAIx: Simulating the World with 8.3 Billion Persona
   Agents* (ago/2026, 93 autores, Harvard/MIT). Sustenta os números da Raiz 1 e da Raiz 4: 8,3 bi
   de fichas, 1.290 dimensões, coreset de 599.847 + 400.000, 1.010 tarefas, 18.189 ensaios, 91,5%
   de adesão em 400 ensaios, quatro ambientes, licença MIT. **Confiabilidade média-alta:**
   pré-print recente, sem revisão por pares concluída; a adesão de 91,5% é medida pelos autores
   sobre o próprio sistema.

**A crítica de validade — a metade que decide o mapa**

7. `https://arxiv.org/abs/2509.18052` — Zhou et al., *The PIMMUR Principles: Ensuring Validity in
   Collective Behavior of LLM Societies* (set/2025, rev. set/2026). **A fonte mais importante
   deste documento.** Sustenta: 576 estudos em 350 artigos auditados; 65,2% de reconhecimento do
   experimento; 50,6% dos prompts pré-determinando o resultado; fenômenos que "desaparecem ou se
   invertem" sob os princípios. Sustenta a §3.3, a §7.1, o W1 e o experimento inteiro da §10.
   **Confiabilidade alta:** auditoria sistemática com reprodução, e não opinião.
8. `https://arxiv.org/abs/2605.18890` — Ye, Cao, Chen e Ferrara, *Stop Drawing Scientific Claims
   from LLM Social Simulations Without Robustness Audits* (mai/2026). Sustenta os **76 pontos
   percentuais** de deslocamento por perturbação trivial, o contraste 76 pp × 1 pp entre modelos, e
   o TRAILS. Base de e2, e2.1 e da contradição da §5.2. **Confiabilidade alta.**
9. `https://arxiv.org/abs/2609.05514` — Atif, Saha e Choudhury, *The Failure Happens Before the
   Drift* (ago/2026). Sustenta: >50% das personas não expressam o perfil WVS de saída, 2–7% de
   deriva, ~4.000 conversas, 1.200 personas, 15 tópicos, 3 modelos. §3.3 e §7.1. **Confiabilidade
   alta** para o desenho; pré-print recente.
10. `https://arxiv.org/abs/2603.00113` — Li e Tao, *AI Agents Alone Are Not (Yet) Sufficient for
    Social Simulation* (fev/2026, rev. mai/2026). Sustenta a formulação "plausibilidade de papel
    não implica validade comportamental" e o peso de protocolo, escalonamento e priors. §3.3.
    **Confiabilidade média:** artigo de posição, sem dado empírico próprio — e digo isso porque
    ele é fácil de citar como se fosse medição.
11. `https://arxiv.org/abs/2507.06310` — Zeng, Brown e Rounsevell, *Too Human to Model: The Uncanny
    Valley of LLMs in Social Simulation* (jul/2025). Sustenta o mecanismo de e6.2 e o argumento de
    que realismo obscurece mecanismo. **Confiabilidade média:** argumento conceitual com cinco
    dilemas enumerados sobre um caso (difusão de Bass), não medição em escala.
12. `https://arxiv.org/abs/2602.22752` — Schwager, Münker, Plum e Rettinger, *Towards Simulating
    Social Media Users with LLMs* (fev/2026). Sustenta o desacoplamento forma/conteúdo: o ajuste
    fino alinha extensão e sintaxe e degrada enraizamento semântico, em três idiomas. §3.3.
    **Confiabilidade alta** para o achado, escopo estreito (modelos 8B abertos).

**Política, ética e instituições**

13. `https://arxiv.org/html/2604.07838v1` — Luo, Arora e Guirado (UC Berkeley), *We Need Strong
    Preconditions For Using Simulations In Policy* (abr/2026). Sustenta as três pré-condições, o
    argumento do contrafactual inobservável, a expressão "Magic 8 Ball" e a citação sobre
    legitimidade da discriminação metodológica usada no cenário indesejável. Base de e12, e12.1 e
    de S5. **Confiabilidade média-alta:** artigo de posição, mas o argumento do contrafactual é
    estrutural e não depende de dado.
14. `https://arxiv.org/pdf/2509.21868` — Li, Das e Shirado, *What Makes LLM Agent Simulations
    Useful for Policy Practice? An Iterative Design Study in Emergency Preparedness* (fev/2026).
    Sustenta que a utilidade em política emerge de desenho iterativo com interessados, não de
    sofisticação técnica (§3.6, e7). **Confiabilidade média:** consegui ler título, autores e
    enquadramento; a extração do corpo do PDF veio incompleta, e por isso não cito número dele.
15. `https://researchworld.com/articles/why-the-icc-esomar-code-will-matter-more-than-ever-in-2026`
    — Research World, sobre o Código ICC/ESOMAR. Sustenta o artigo 9, "Publicando na era da IA":
    "se dado sintético ou IA foi usado, o público deve ser informado"; código revisto aprovado em
    junho de 2025. Base de e4.1 e de S2. **Confiabilidade média:** veículo da própria associação —
    autoritativo sobre o texto do código, interessado sobre a importância dele. A data de vigência
    do artigo 9 **não** está na peça, e por isso não a afirmo.
16. `https://www.greenbook.org/insights/artificial-intelligence-and-machine-learning/synthetic-respondents-explained-what-they-are-how-they-work-and-when-to-trust-them`
    — Shedlock, Greenbook, 25/08/2026. Usada como **evidência de ausência**: uma peça institucional
    inteira sobre respondentes sintéticos sem uma única métrica de adoção ou acurácia, dizendo que
    "a validação independente ainda está evoluindo". Sustenta a §3.6. **Confiabilidade alta para o
    que é** (retrato do estado do debate no setor), nenhuma como fonte de número.

**Mercado**

17. `https://techcrunch.com/2026/07/30/synthetic-user-startup-simile-raises-200m-at-2b-valuation-5-months-after-100m-series-a/`
    — Silberling?/TechCrunch, 30/07/2026. Sustenta US$ 200 mi a US$ 2 bi, Greenoaks liderando,
    Joon Sung Park como fundador, CVS Health como cliente e o objetivo declarado de simular "todas
    as oito bilhões de pessoas da Terra". §3.2 e Raiz 4. **Confiabilidade média-alta:** jornalismo
    de tecnologia sobre rodada divulgada; avaliação é informação da empresa.
18. `https://www.indexventures.com/perspectives/life-the-universe-and-simile-leading-similes-series-a/`
    — Shardul Shah, Index Ventures, 12/02/2026. Sustenta a Série A de US$ 100 mi e a descrição do
    método — "faz parceria com pessoas reais para construir modelos de alta fidelidade de como
    cada uma delas vive e decide" —, que é a base da Raiz 4. **Confiabilidade baixa como análise,
    alta como declaração de intenção:** é texto de investidor sobre o próprio investimento, e o
    valor dele aqui é ser uma declaração de método, não uma avaliação.
19. `https://www.research-live.com/article/news/accenture-invests-in-synthetic-audience-startup-aaru/id/5136643`
    — Research Live, 06/03/2025. Sustenta o investimento da Accenture Ventures na Aaru, a
    integração do modelo Lumen à Accenture Song, e o acerto da primária democrata de Nova York
    **dentro de 371 votos**. §3.2. **Confiabilidade média:** veículo especializado sério, mas o
    número dos 371 votos é alegação da empresa reproduzida — é o tipo de número que só conta
    quando acerta.

**A rede povoada por agentes**

20. `https://arxiv.org/html/2602.10127v1` — *"Humans welcome to observe": A First Look at the Agent
    Social Network Moltbook* (fev/2026). Sustenta toda a §3.4: 44.411 posts, 12.209 submolts,
    12.684 agentes, 73,01% seguros, 93,11% × 39,74% de segurança entre tecnologia e política,
    r = 0,769, o aglomerado de 4.535 posts do "Hackerclaw" e a retórica quase religiosa como
    infraestrutura de coordenação. Base de e8, e8.1 e do W3. **Confiabilidade alta:** medição
    independente com método declarado — e é justamente ela que desmente o número de marketing.
21. `https://techcrunch.com/2026/03/10/meta-acquired-moltbook-the-ai-agent-social-network-that-went-viral-because-of-fake-posts/`
    — Amanda Silberling, TechCrunch, 10/03/2026. Sustenta a aquisição pela Meta (termos não
    divulgados) e — o item decisivo — que os posts virais de conspiração de agentes eram **humanos
    explorando falha de token**: "por um tempo, você podia pegar qualquer token e fingir ser outro
    agente". Base de e8.1 e da §8.3. **Confiabilidade alta.**

**Custo e infraestrutura**

22. `https://www.spheron.network/blog/agentic-ai-inference-cost-2026/` — Spheron, 2026. Sustenta a
    §3.7: 5 a 30× mais tokens por tarefa em carga agêntica (atribuído à Gartner, 2026); Claude
    Sonnet 5 a US$ 3/US$ 15 por milhão a partir de 01/09/2026; desconto de 90% em leitura de
    cache. **Confiabilidade baixa-média:** blog de fornecedor de infraestrutura, com interesse em
    que o custo pareça um problema. Usei só os números que ele atribui a fonte nomeada ou que são
    tabela pública de preço, e é por isso que a razão 5–30× aparece **sempre com a atribuição
    junto**.

**Brasil**

23. `https://rebep.org.br/revista/article/view/2630` — Souza Junior, Campbell, Katikireddi, Costa,
    Santos, Barreto e Andrade, *Desenvolvendo uma população brasileira sintética derivada do Censo
    demográfico de 2010*, Revista Brasileira de Estudos de População, v. 42, 2025. Sustenta a §3.8
    e e11.1: população sintética nacional em granularidade municipal, por tabelas de contingência
    estratificadas por raça, gênero e escolaridade, sobre o Censo de 2010. **Confiabilidade alta:**
    periódico revisado por pares da ABEP. Ver a ressalva da §8.8 sobre o que **não** consigo
    afirmar a partir dela.

## 12. Anexo — o levantamento bruto

### 12.1 Como esta rodada foi feita

Modo MAPA, não interativo, briefing completo (horizonte 2041, público de quem projeta mídia e
interação, recorte global com nota Brasil, descartado "o que já é comum em produto de massa", sem
raiz suspeita, viés neutro). Sem entrevista, mas **com** briefing completo — pela regra §0 da
skill v1.2, não há rebaixamento por isso; o que o briefing não cobria está declarado como premissa
assumida no fim da §2 e nesta seção.

Dezesseis buscas, em português e inglês, e 27 tentativas de abertura de página, das quais 23
retornaram conteúdo utilizável. A âncora foi montada antes de qualquer efeito ser escrito.

### 12.2 O que foi cortado no §6, e por quê

**Efeitos removidos da roda (íntegra do que foi escrito antes do corte):**

- **e6.3 — "Cursos de metodologia de pesquisa reorganizam o currículo em torno de simulação, e
  disciplinas de estatística perdem centralidade."** Removido: anti-padrão explícito da skill
  ("cursos/formação reorganizam o currículo"). Passa no teste de plausibilidade e falha no de
  especificidade — troque "sociedades simuladas" por qualquer uma das outras dezoito tendências da
  disciplina e a frase continua servindo. Para entrar, precisaria de nome de curso, de instituição
  e do mecanismo que liga um ao outro; não tenho nenhum dos três.
- **e13 — "Surge a profissão de auditor de simulação social, com certificação própria."**
  Removido: anti-padrão "surge uma nova profissão". O conteúdo defensável dele sobrevive em
  **e5.1.1**, que tem ator (o re-executor), mecanismo (alguém precisa pagar a computação da
  replicação) e financiador com incentivo nomeado (quem tem interesse material em derrubar o
  resultado). Certificação eu não consigo sustentar.
- **e14 — "Reguladores criam uma categoria jurídica nova para o agente simulado."** Removido:
  anti-padrão "reguladores criam categoria nova". Reescrito em duas peças com ator e mecanismo:
  **e10.1.1** (revogação do gêmeo esbarrando na impossibilidade técnica de desaprendizagem) e
  **e8.2.1** (tribunal decidindo se ética de pesquisa alcança teste em produto).
- **Efeito rascunhado e nunca numerado — "o mercado de trabalho de pesquisa muda."** Cortado na
  origem pelo mesmo critério. Registro que existiu porque a §12 pede que nada seja cortado em
  silêncio.

**Wildcard cortado:**

- **"Choque de custo de computação inviabiliza simulação em escala."** Tem mecanismo (preço de
  token, energia, escassez de GPU) e teria impacto alto. Cortado por um motivo declarado na §7.5:
  é um wildcard sobre **IA em geral**, não sobre este tema — serviria igual para os dezenove
  temas da disciplina, e o briefing manda excluir o que serve para qualquer um. Fica registrado
  aqui, com a ressalva de que ele **é** a premissa escondida nº 1 do mapa, e quem for usar este
  documento deve saber que a §6 não o cobre.

**Ramo inteiro que não foi derivado, e a regra de parada que o barrou:**

- Sob **e12.1** (comitês de ética exigindo participação) eu tinha começado a derivar "as
  populações representadas passam a cobrar pela participação no desenho". Parei: é o mesmo ator
  (a população) e o mesmo mecanismo (custo de participação) de **e10.2**, só que mais adiante no
  tempo. Pela regra de parada da skill — derivar só enquanto houver troca de ator ou de mecanismo
  —, isso não é outra ordem, é o mesmo efeito amadurecendo. Registro aqui em vez de inflar a roda.
- Sob **e6.2** e **e7.2** não derivei terceira ordem pela mesma razão: os candidatos que escrevi
  eram reformulações do pai.

**Teste da causa solta (§3, regra 10) — o que ele derrubou:**

Passei cada efeito de 2ª e 3ª ordem pela pergunta "se a raiz não existisse, isto aconteceria do
mesmo jeito, por outro motivo?". Três não passaram limpo:

- **e8.2.1** (tribunal decidindo se ética de pesquisa alcança produto) aconteceria de qualquer
  forma por causa de teste A/B, sem nenhuma simulação envolvida — a disputa é de 2014. **Mantido
  mesmo assim**, com a justificativa explícita: o que a raiz acrescenta não é a disputa, é a
  escala e a impossibilidade de o usuário distinguir agente de gente, que é o que força a decisão.
  Se o júri da aula discordar, este é o efeito a atacar primeiro.
- **e5.2** (congelar modelo, empurrão para pesos abertos) tem outra causa suficiente: qualquer
  pesquisa que use LLM tem esse problema. **Mantido** porque em simulação social o efeito é
  qualitativamente diferente — não é um resultado que muda, é um mundo inteiro que deixa de ser
  re-executável.
- **e11.1** (Brasil com defasagem de calibração) aconteceria por atraso de política estatística,
  independentemente de simulação. **Mantido e rebaixado no escopo:** a raiz não causa a defasagem,
  ela transforma a defasagem em desvantagem competitiva nova. A prosa da §5.1 diz isso.

### 12.3 Categoria STEEP vazia

**Ecológico.** Procurei consumo energético ou pegada de carbono de simulação social em escala de
centenas de milhares a milhões de agentes. Não achei número publicado — nem nos artigos de
plataforma (OASIS, AgentSociety, MatrAIx, que reportam escala e não custo), nem em literatura de
sustentabilidade computacional aplicada a este caso. O que existe é o custo em token (§3.7), que é
proxy econômico e não ambiental. **Registro a categoria como vazia em vez de preencher com
inferência** — "simular milhões de agentes consome muita energia" é verdade trivial sem número, e
efeito sem número aqui seria enfeite.

### 12.4 O que tentei abrir e não abriu

- `https://arxiv.org/pdf/2605.11404` — *Attributing Emergence in Million-Agent Systems* (Tang et
  al., rev. jul/2026). PDF com fluxos comprimidos; consegui autores, título e data, nada do corpo.
  **Não citado como fonte.** Pelo título e pelos autores, é a peça que faltaria para sustentar um
  efeito sobre atribuição de emergência em escala — o mais próximo que tenho é e8.1.1, derivado do
  Moltbook e não deste artigo.
- `https://dl.acm.org/doi/full/10.1145/3772363.3778738` — PoliSim@CHI 2026. **403.**
- `https://www.semanticscholar.org/paper/PoliSim@CHI-2026...` — retornou vazio.
- `https://www.forbes.com/sites/guneyyildiz/2026/01/31/inside-moltbook...` — **403.** Teria dado o
  número de marketing (1,4 milhão de agentes); não faz falta, porque o número que uso é o medido.
- O que sei do PoliSim (16/04/2026, Barcelona; organizadores em CMU, UW e outras três
  instituições, em três países; PolicySim na Web Conference 2026) veio **de resultados de busca**,
  não de página aberta, e por isso aparece na §3.6 como contexto e **não** na §11.

### 12.5 Buscas que não deram em nada

- *"agent simulation used as evidence regulatory decision ... wrong result criticized"* — três
  reformulações, nenhum caso documentado de decisão pública fundada em simulação de agentes que
  tenha dado errado e sido criticada. **É por isso que W1 é wildcard e não sinal fraco**, e é uma
  ausência informativa: em setembro de 2026 o instrumento ainda não chegou à decisão vinculante.
- *"percentual de adoção de respondente sintético"* — só faixas de blog de fornecedor
  (73–89%, 72–88%, 8% de uso regular, 64% de ceticismo) sem rastro até estudo publicado. **Nenhuma
  entrou.** Ver §8.7.
- *"IRB ethics synthetic participants consent"* — muito material sobre IA **na** pesquisa
  (recrutamento, redação de protocolo), quase nada sobre o estatuto do participante sintético. O
  que achei de mais próximo é a formulação de que agentes sintéticos não correspondem a indivíduos
  reais e por isso não exigem consentimento, mas o dado que os origina exige — o que é exatamente
  a lacuna que e10.1 explora.
- *"energia / pegada de carbono de simulação com milhões de agentes"* — nada. Ver §12.3.
- *"população sintética Censo 2022 Brasil"* — não achei versão pública equivalente à de 2010. Ver
  a ressalva da §8.8: isso **não** prova que não exista.

### 12.6 Números brutos coletados, para reuso

| Número | O que é | Fonte |
|---|---|---|
| 25 | agentes no Smallville | Park 2023 |
| 1.052 | participantes entrevistados 2 h | Park nov/2024 |
| 86% | do teste-reteste dos próprios participantes, no GSS | Park nov/2024 |
| 1.000.000 | agentes suportados | OASIS |
| 23 | ações disponíveis · 5,1 mil estrelas · Apache 2.0 | repo OASIS |
| >10.000 / 5.000.000 | agentes / interações | AgentSociety |
| 8.300.000.000 | fichas de persona | MatrAIx |
| 1.290 | dimensões categóricas por ficha | MatrAIx |
| 599.847 + 400.000 | coreset ancorado em gente + sintético | MatrAIx |
| 1.010 / 18.189 / 91,5% (366/400) | tarefas / ensaios / adesão declarada | MatrAIx |
| 93 | autores do artigo | MatrAIx |
| 576 / 350 | estudos / artigos auditados | PIMMUR |
| 65,2% | dos casos em que o modelo reconhece o experimento | PIMMUR |
| 50,6% | dos prompts com restrição que pré-determina o resultado | PIMMUR |
| 76 pp / 1 pp | deslocamento de cooperação por perturbação trivial, entre modelos | TRAILS |
| >50% / 2–7% | personas que falham de saída / que derivam | Failure Before Drift |
| ~4.000 / 1.200 / 15 / 3 | conversas / personas / tópicos / modelos | Failure Before Drift |
| 44.411 / 12.209 / 12.684 | posts / submolts / agentes ativados | Moltbook, medição |
| 73,01% / 93,11% / 39,74% | posts seguros no total / em tecnologia / em política | Moltbook, medição |
| r = 0,769 | correlação volume × conteúdo nocivo | Moltbook, medição |
| 4.535 | posts de um único agente, intervalos <10 s | Moltbook, medição |
| US$ 100 mi → US$ 200 mi @ US$ 2 bi | Série A (fev/2026) → Série B (jul/2026) | Simile |
| 371 | votos de erro na primária democrata de NY | Aaru |
| US$ 5,85 mi / 300–5.000 | seed / personas por sociedade | Artificial Societies |
| 5–30× | tokens por tarefa, agêntico vs. chatbot (Gartner 2026) | Spheron |
| US$ 3 / US$ 15 | por milhão de tokens de entrada/saída, Claude Sonnet 5, a partir de 01/09/2026 | Spheron |
| 0,5–3 bi de parâmetros · ~60 tok/s | faixa prática no navegador · Llama 3.2 3B via WebGPU | busca WebGPU |
| 2010 | ano do censo que calibra a população sintética pública brasileira | REBEP 2025 |

### 12.7 Saída do verificador

`python3 /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/futurizacao-giordano/references/verificar.py tendencia-sociedades-simuladas-a-simulacao-como-instrumento-de-investigacao.md --links`

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 12 (frontmatter diz 12)
efeitos ordem 2: 19 (frontmatter diz 19)
efeitos ordem 3: 16 (frontmatter diz 16)
prazo > horizonte (2041) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 2 [('e6.1.1', 2042), ('e10.2.1', 2043)]
confiança ordem 1: alta 1 · media 11 · baixa 0
confiança ordem 2: alta 1 · media 16 · baixa 2
confiança ordem 3: alta 0 · media 0 · baixa 16
links da seção 11: 23/23 respondem (frontmatter diz fontes: 23)
RESULTADO: ok
```

**Leitura da saída, item a item.**

- **Frontmatter 18/18 e títulos 12/12** — formato íntegro.
- **Contagens batem** com o frontmatter nas quatro linhas (4 raízes, 12 / 19 / 16 efeitos). Não
  ajustei texto para bater com o frontmatter; ajustei o frontmatter depois de fechar a roda.
- **Prazo × horizonte:** zero efeitos de 1ª e 2ª ordem passam de 2041, como a regra exige. Dois de
  3ª ordem passam e ficam **declarados aqui e na prosa da §5.1**: `e6.1.1` (2042, a separação
  institucional entre laboratório qualitativo e quantitativo perdendo função) e `e10.2.1` (2043,
  negociação coletiva de calibradores). Os dois estão **fora da janela deste mapa** e devem ser
  lidos como direção, não como previsão datada.
- **Calibração:** alta 1 → 1 → 0 e baixa 0 → 2 → 16. A confiança cai monotonicamente com a ordem,
  que é o que a skill pede. O único `alta` de 2ª ordem é `e8.1`, e a justificativa está na §5.1:
  é o único efeito do mapa que **já aconteceu e foi medido por terceiro** (o Moltbook). A primeira
  ordem está achatada em `media` (11 de 12) — deliberado, e explicado no fim da §7.7.
- **Links: 23 de 23 respondem**, e o número bate com `fontes: 23` no frontmatter. Toda fonte
  listada foi aberta e lida nesta rodada; as quatro que tentei e não abriram estão na §12.4 e
  **não** entraram na contagem.
