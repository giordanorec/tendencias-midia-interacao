---
tema: "Sociedades simuladas: a simulação como instrumento de investigação"
slug: sociedades-simuladas-a-simulacao-como-instrumento-de-investigacao
autor_login: grec
zona_de_interesse: Simulação e mundos
data: 2026-09-12
horizonte: 2056
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 14
efeitos_ordem_2: 18
efeitos_ordem_3: 15
tecnologias_citadas: [Generative Agents, OASIS, AgentSociety, Concordia, EconSimulacra, TRAILS, WebLLM, WebGPU, PolicySim, General Social Survey, World Values Survey, NetLogo, Phaser, Mastodon, Bluesky, DSA artigo 34]
fontes: 9
confianca: baixa
experimento: "A mesma pergunta, três populações — medir o envelope de uma sociedade sintética antes de medir sua média"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Colocar uma sociedade de agentes num ambiente controlado e observar o que emerge deixou de ser
demonstração e virou instrumento: em 2026 há populações sintéticas calibradas em entrevistas de
duas horas que acertam 86% do teste-reteste de um survey clássico, simuladores de rede social
declarando um milhão de agentes, e dois workshops de CHI dedicados ao uso disso em política
pública. Ao mesmo tempo, e no mesmo ano, a literatura que mede o instrumento é devastadora:
uma perturbação de formato de persona move a taxa de cooperação em até 76 pontos percentuais
num modelo e 1 ponto em outro; modelos atribuem 67% da variação a uma variável que explica
1,5% na realidade; e 64% dos pesquisadores de UX se declaram céticos ou contrários. Este mapa
trata as duas coisas como o mesmo fato: o instrumento existe, funciona o bastante para ser
usado, e não funciona o bastante para ser confiado — e é exatamente essa combinação que decide
os próximos trinta anos. Quatro rupturas sustentam o mapa: a população re-executável (o
contrafactual vira objeto observável), a plataforma de mídia como bancada de ensaio, a
simulação como peça de prova em decisão pública, e a simulação barata que roda no navegador de
qualquer um. A classe de referência que mais pesa aqui é a dinâmica dos fluidos computacional
contra o túnel de vento: trinta anos para deslocar parcialmente — e o túnel nunca fechou. Em
2056, o cenário provável não é a pesquisa com pessoas ter acabado; é a pesquisa com pessoas ter
encolhido, encarecido e se especializado no resíduo que a simulação não cobre, enquanto a
rodada sintética virou o estágio anterior obrigatório — e a briga passou a ser sobre quem
calibra a sociedade de quem.

## 2. O tema

**O objeto.** Uma sociedade simulada é um conjunto de agentes que se afetam mutuamente num
ambiente configurável, produzindo comportamento agregado que ninguém programou. Isso não é
novo: modelagem baseada em agentes faz isso desde a segregação de Schelling, nos anos 1970. O
que é novo é o **agente com modelo de linguagem** — que tem memória, biografia, fala em língua
natural com os outros e cuja regra de decisão não está escrita em lugar nenhum, porque é o
próprio modelo. E a escala: de vinte e cinco agentes numa vila, em 2023, a plataformas
declarando dez mil e um milhão, em 2025 e 2026.

**Onde encosta em mídia e interação.** Em três lugares, e nenhum deles é o jogo.

1. **É bancada de ensaio para o que projetamos.** Um algoritmo de recomendação, uma regra de
   moderação, uma mudança de interface — tudo isso hoje só se testa em gente, depois de no ar.
   A sociedade simulada oferece um estágio antes disso.
2. **É método de pesquisa de usuário.** O "usuário sintético" já é produto comercial. Se ele
   funciona, a pesquisa com pessoas muda de função; se não funciona e é usado mesmo assim, o
   que muda é a qualidade do que projetamos.
3. **É um formato.** O log de uma sociedade de agentes é legível — é uma história. O
   experimento de Stanford circulou porque "os agentes organizaram uma festa", não porque
   replicou algo. Isso faz da simulação um gênero de mídia, não só um instrumento.

**Por que merece mapa de futuro e não levantamento de estado da arte.** Porque a pergunta
interessante não é "o que existe hoje" — existe muito, e está tudo listado na seção 3. A
pergunta é o que acontece com as instituições que hoje produzem conhecimento sobre
comportamento coletivo quando produzir esse conhecimento fica cem vezes mais barato e
permanece de qualidade desconhecida. Barateamento sem validação é a combinação que reorganiza
campos inteiros, e reorganiza pelo lado de fora: não por quem entende do método, mas por quem
precisa de um número até sexta.

**Premissas deste mapa** (vieram do briefing; as que não vieram estão marcadas como assumidas):

| Item | Valor | Origem |
|---|---|---|
| Horizonte | 2056 | briefing |
| Público | quem projeta mídia e interação | briefing |
| Recorte | global, com nota sobre o Brasil | briefing |
| Descartado de início | o que já é comum em produto de massa | briefing |
| Disrupção suspeita pelo autor | nenhuma — descobrir | briefing |
| Viés | neutro | briefing |
| Zona de interesse | Simulação e mundos | briefing |
| Falseador declarado | adoção já passou da maioria inicial de Rogers, **ou** a tecnologia só melhora o que existe | briefing |
| **Assumido:** fronteira com os vizinhos | personagem autônomo em jogo (tema 7), mercado de máquinas (tema 5) e agente corporificado (tema 9) ficam de fora; o objeto aqui é a simulação social **como método** | assunção deste mapa |
| **Assumido:** classes de referência | CFD × túnel de vento; A/B testing; ensaio in-silico em submissão regulatória; crash test; modelagem epidemiológica de agentes | assunção deste mapa — ver §5 e §7 |
| **Assumido:** "fonte" = documento que este mapa abriu | resultado de busca não aberto vai para a §12, não para a §11 | assunção deste mapa |

Não houve rebaixamento de confiança por falta de entrevista: o briefing cobre as sete perguntas
do §0 da skill. A confiança geral do mapa é `baixa` por outra razão, declarada na §7: trinta
anos é três vezes o prazo da classe de referência mais lenta que consegui usar.

## 3. Onde isso está hoje

Âncora feita **com** acesso à web em 12/09/2026. Doze buscas em português e inglês, nove
documentos abertos e lidos (§11). Os números abaixo vêm dos documentos abertos; onde não há
número, está escrito que não há.

### 3.1 O que já existe e funciona

**Agentes generativos com memória, reflexão e plano.** Park, O'Brien, Cai, Morris, Liang e
Bernstein, UIST 2023: 25 agentes numa sandbox construída sobre o Phaser, dois dias de jogo,
avaliadores humanos julgando credibilidade. É o marco fundador e o código está aberto.

**População sintética calibrada em entrevista.** Park, Zou e mais nove autores (submetido em
novembro de 2024, revisto em **28 de junho de 2026**): **1.052 estadunidenses**, entrevistas
semiestruturadas de **duas horas** pelo roteiro do American Voices Project. Em perguntas
retidas do General Social Survey, contra o teto do teste-reteste: agente só-entrevista **83%**,
só-survey **82%**, combinado **86%**, contra **74%** do agente só-demográfico. Também prevê
traços de personalidade e comportamento em jogos econômicos. Este é o número mais importante
da âncora: ele separa "persona demográfica", que é estereótipo, de "pessoa simulada", que é
outra coisa.

**Simulação de rede social em escala.** OASIS (CAMEL-AI): simulador de código aberto de Twitter
e Reddit, **até um milhão de agentes**, **21 ações** possíveis por agente, sistema de
recomendação dentro do laço. Repositório com **5,1 mil estrelas** e **627 forks**; última
atualização registrada em **19/08/2026**. E traz o que quase ninguém publica — a conta: 100
agentes por 1 passo de tempo consomem cerca de **335,6 mil tokens de entrada e 16,75 mil de
saída**; o custo estimado de um passo com probabilidade de ativação 0,1 vai de ¥0,027 (100
agentes, modelo barato) a **¥77,17** (10 mil agentes, modelo caro). Custo por passo, não por
experimento.

**Sociedade urbana simulada com estado interno.** AgentSociety (Piao et al., fevereiro de 2025,
revisto em **10/04/2026**): **mais de 10 mil agentes**, **5 milhões de interações**, agentes
com emoção, necessidade, motivação e cognição, e comportamento de mobilidade, emprego, consumo
e socialização. Foi usado para reproduzir cinco experimentos sociais reais: polarização,
difusão de mensagem inflamatória, efeito de renda básica universal, choque externo (furacão) e
sustentabilidade urbana.

**Biblioteca de propósito geral.** Concordia, do Google DeepMind: modelagem generativa baseada
em agentes com um "Game Master" que resolve o mundo, no padrão de RPG de mesa. Está no GitHub e
no PyPI.

**Gêmeo digital socioeconômico.** EconSimulacra (Hashimoto, Kaneko, Ueda, Takayanagi e Izumi,
versão de **01/07/2026**): plataforma de gêmeo digital de sistema socioeconômico com agentes de
modelo de linguagem. *Nenhum número de agentes ou de validação foi encontrado no documento que
abri* — cito a existência da plataforma, não seu desempenho.

**Uso comercial já em produção.** Respondente sintético é linha de produto em institutos
(NIQ BASES, Evidenza e outros). O número de adoção mais confiável que encontrei: relatório
*State of Synthetic Users*, desenhado e conduzido por Roberta Dombrowski para a User Interviews,
**maio de 2026**, **150 profissionais** (93% pesquisadores de UX, 62% em empresa média ou
grande), precedido de cinco entrevistas moderadas. Resultado: **97%** usam IA em algum ponto do
fluxo, **81%** usam com regularidade, e apenas **8%** usam com regularidade ferramenta que gera
participante sintético; **28%** decidem ativamente não usar. Sentimento: **47%** céticos, **17%**
contrários (64% somados), e entusiasmo genuíno em **3,3%** — cinco pessoas.

**Inferência local no navegador.** WebLLM/WebGPU: modelos quantizados de até ~8B na GPU do
usuário, sub-3B já corriqueiro, retendo até **80%** do desempenho nativo, sem servidor e sem
chave de API.

### 3.2 O que existe e ainda não funciona

**A validade individual.** *When Synthetic Users Fail* (Chen, Zhu e Zheng, **28/07/2026**),
protocolo unificado sobre GSS (ondas 2016–2024) e World Values Survey (onda 7, **63 países**),
quatro modelos de duas famílias. No GSS os modelos **empatam ou perdem** para a linha de base
demográfica (0,589 de acurácia); no WVS ficam **11 a 22 pontos percentuais abaixo**. O achado
mais duro é o de superdeterminação: posição política explica **~1,5%** da variação real na
confiança em bancos, e os modelos a tratam como explicando **~67%**. Consequência de decisão:
distância entre segmentos inflada **de duas a quatro vezes**, segmento-alvo errado em **50%**
dos casos no GSS e **72%** no WVS, e divisão espúria de segmento em até **41%** das perguntas
transculturais.

**A estabilidade da rodada.** *Stop Drawing Scientific Claims from LLM Social Simulations
Without Robustness Audits* (Ye, Cao, Chen e Ferrara, **17/05/2026**). Dois estudos de caso: no
dilema do prisioneiro, perturbações menores no formato da persona e no enquadramento da
instrução deslocam a taxa de cooperação em **até 76 pontos percentuais**; em câmara de eco,
homofilia de rede e escolha de hubs deslocam sistematicamente a polarização. E o dado que
fecha: **a mesma perturbação moveu 76 pontos num modelo e 1 ponto em outro**. Os autores
propõem o TRAILS, taxonomia de auditoria de robustez em três níveis — agente, interação,
desenho de sistema — e a regra: "a alegação não deve ser mais forte que a auditoria que a
sustenta".

**O agente como proxy de usuário em avaliação.** *Lost in Simulation* (Seshadri, Cahyawijaya,
Odumakinde, Singh e Goldfarb-Tarrant, **29/01/2026**): usuários simulados por modelo de
linguagem são proxies não confiáveis de usuários humanos em avaliação agêntica, com diferenças
sistemáticas entre domínios. *Não consegui extrair os números do PDF* — registro a conclusão,
não uma cifra.

**A governança.** *We Need Strong Preconditions For Using Simulations In Policy* (Luo, Arora e
Guirado, UC Berkeley, **09/04/2026**): três precondições — não tratar simulação de população
marginalizada como saída técnica neutra; não simular população sem participação dela
(constitutiva, não consultiva); não simular sem responsabilização (cadeia de decisão
rastreável, validação independente, recurso formal). Propõem "relatórios de desenvolvimento e
implantação de simulação", no molde dos model cards. Os exemplos de duplo uso são os que
importam: evacuação de emergência *versus* otimização de ruptura de evacuação; teste de política
de apoio a imigrante *versus* otimização de estratégia de deportação. Citam ainda uma pesquisa
de 2026 em que **26%** dos eleitores tinham visão positiva sobre IA.

### 3.3 Quem constrói

- **Laboratórios acadêmicos.** Stanford (Park, Bernstein) para o agente-indivíduo; Tsinghua e
  colaboradores (Piao, Li) para a sociedade urbana; USC (Ferrara) para a crítica do método.
- **Laboratórios corporativos.** Google DeepMind (Concordia); Google Research (co-autoria do
  paper fundador).
- **Comunidade aberta.** CAMEL-AI (OASIS), MLC-AI (WebLLM), o repositório do Stanford. Tudo
  código aberto e instalável.
- **Indústria de pesquisa de mercado.** NIQ, Evidenza, PyMC Labs e fornecedores de plataforma;
  do outro lado, User Interviews (recém-adquirida pela UserTesting) publicando o ceticismo.
- **A comunidade de HCI como instituição.** CHI 2026 sediou **dois** workshops sobre isto:
  PoliSim (simulação com agentes para política pública) e um sobre padrões e documentação para
  uso de modelos de linguagem como participante simulado de pesquisa.
- **Brasil.** Não encontrei laboratório brasileiro construindo simulação social com agentes de
  modelo de linguagem. O que encontrei é o entorno: o programa de inteligência para políticas
  públicas do IBGE, com foco no biênio **2025–2026** e previsão de plataformas analíticas; o
  Plano Brasileiro de Inteligência Artificial; e uma revisão sistemática brasileira sobre
  gêmeos digitais e cidades inteligentes cobrindo 2003–2025. O Brasil tem o dado e a agenda;
  não achei o instrumento. Registro como lacuna da minha busca, não como ausência provada.

### 3.4 O número que descreve a adoção hoje

Não existe um número único, e eu não consegui produzir o meu (tentei contar submissões do arXiv
por ano pela API e o ambiente não tem rede — ver §8). Os três que tenho, e que discordam:

| Recorte | Número | Fonte e data |
|---|---|---|
| Pesquisadores de mercado que já usaram resposta sintética | **69%** de mais de 3.000 | survey de indústria de 2025, citado em página que abri apenas por resumo de busca — **não conta como fonte** |
| Pesquisadores de UX que usam participante sintético com regularidade | **8%** de 150 | User Interviews, maio de 2026 (aberta) |
| Pesquisadores de UX céticos ou contrários | **64%** de 150 | User Interviews, maio de 2026 (aberta) |

A distância entre 69% e 8% é o dado mais informativo da âncora, e vale mais que qualquer média:
**a mesma tecnologia foi absorvida em massa onde a cultura de método é fraca e barrada onde ela
é forte.** Todo o resto deste mapa é uma tentativa de prever para que lado essa tesoura fecha.

## 4. As disrupções-raiz

Quatro entram. Duas foram recusadas por maturidade e estão registradas ao final.

### R1 — A população re-executável: o contrafactual deixa de ser inferido e passa a ser executado

**O que rompe.** Rompe o caráter irrepetível da observação social. A ciência social gastou um
século construindo aproximações do contrafactual — variável instrumental, experimento natural,
descontinuidade de regressão — porque não se pode rodar a mesma sociedade duas vezes com uma
coisa mudada. Uma população sintética calibrada é exatamente isso: um estado salvo, com semente,
que se roda de novo. Não é "survey mais barato" (isso seria melhoria sustentadora); é um objeto
epistemicamente diferente, porque a unidade de análise deixa de ser a resposta e passa a ser o
*espaço de respostas sob variação de condição*.

**Por que agora, e não há cinco anos.** Porque até 2023 a heterogeneidade de uma população
simulada estava numa tabela de parâmetros escrita à mão, e o resultado era tão bom quanto a
teoria de quem escreveu. A pré-condição nova é a calibração por linguagem: 1.052 pessoas, duas
horas de entrevista cada, e o agente sobe de 74% para 86% do teto do teste-reteste. Isso não
existia em 2021, e não existia em 2023 — o paper foi submetido em novembro de 2024 e revisado
em junho de 2026.

**Onde está na difusão.** Entre **produto de nicho** e **adoção precoce**: 8% de uso regular
entre pesquisadores de UX, contra 97% de uso de IA em geral. Emergente, com sobra. Não é
maioria em lugar nenhum onde exista exigência de método.

**O que ainda falta acontecer.** (a) Um critério, por classe de pergunta, que diga quando a
resposta sintética vale — hoje não existe, e a evidência de 2026 diz que a acurácia agregada
esconde estereótipo estrutural; (b) auditoria de robustez barata o suficiente para ser rotina,
já que a variação por formato de persona chega a 76 pontos percentuais; (c) calibração fora dos
Estados Unidos — a queda de 11 a 22 pontos no WVS é o tamanho do buraco.

**Quem tem incentivo para bloquear, capturar ou redirecionar.** Os institutos de painel. Eles
possuem o ativo humano e o venderão como âncora do sintético, não como concorrente dele. O
resultado da captura não é atraso: é a forma híbrida de e1 — dois números lado a lado, e a
discussão deslocada para a diferença entre eles.

### R2 — O ambiente sociotécnico configurável: a plataforma de mídia vira bancada de ensaio

**O que rompe.** Rompe o A/B test como epistemologia única do design de plataforma — e, junto
com ele, o arranjo ético que legitima experimentar em usuário ao vivo. Hoje só se sabe o que uma
mudança de recomendação faz depois de expor gente a ela. A ruptura é a existência de um estágio
*antes*: ambiente configurável, recomendador dentro do laço, população que produz conteúdo (não
só cliques), e log analisável.

**Por que agora, e não há cinco anos.** Três pré-condições que só se juntaram depois de 2024:
(a) agentes que **geram conteúdo** em vez de escolher entre opções, o que fecha o laço
recomendador↔conteúdo; (b) escala declarada de um milhão de agentes com 21 ações; (c) as
primeiras validações estruturais contra plataforma real — um simulador de coevolução
recomendador/rede calibrado em Mastodon e validado contra Bluesky com erro de 4 a 6% em
métricas estruturais. Em 2021 nada disso existia junto.

**Onde está na difusão.** **Demo pública**, caminhando para produto de nicho. Há ferramenta
aberta e instalável, há paper com validação, não há relato público de plataforma grande usando
isto como estágio formal de lançamento. Cadeia com confiança rebaixada.

**O que ainda falta acontecer.** (a) Validação preditiva, não retrospectiva: reproduzir um
fenômeno já conhecido é mais fácil do que antecipar um desconhecido, e o que está publicado é
reprodução; (b) custo por rodada compatível com ciclo de produto — a conta do OASIS mostra que
10 mil agentes por passo já é linha de orçamento; (c) alguém assumir publicamente que usa, o que
cria responsabilidade pelo resultado.

**Quem tem incentivo para bloquear.** O próprio time de crescimento da plataforma. Um ensaio que
mostre dano estrutural atrasa lançamento e cria documento descobrível em litígio. O redirecionamento
previsível: o ensaio vira gate opcional e, depois, peça de defesa (e5.2) — usado para mostrar que
não se previu o dano, não para evitá-lo.

### R3 — A simulação como peça de prova: uma rodada entra numa decisão que vincula gente real

**O que rompe.** Rompe o que conta como evidência em decisão pública sobre sistemas de mídia. Se
a avaliação de risco é *ex ante*, não há observação — há modelo. A ruptura é o modelo deixar de
ser argumento e virar **peça**: um artefato que se entrega, se audita e se contesta.

**Por que agora, e não há cinco anos.** Porque a obrigação *ex ante* passou a existir. O artigo
34 do DSA obriga plataformas muito grandes a avaliar risco sistêmico — inclusive sobre discurso
cívico e processo eleitoral — e a avaliação é engatilhada particularmente na **implantação de
nova funcionalidade**, com atenção explícita a recomendador e moderação. O regime está em
execução ativa em 2026. Em 2021 o DSA nem estava em vigor. A pergunta não é mais "alguém vai
querer prever?", é "até quando prosa basta?".

**Onde está na difusão.** **Laboratório**, com um pé em demo pública: AgentSociety reproduzindo
renda básica e furacão, PolicySim, o workshop PoliSim no CHI 2026. Especulativo. Toda a cadeia
sai com confiança baixa, por obrigação do método.

**O que ainda falta acontecer.** (a) Reprodutibilidade bit-a-bit — semente, versão de modelo,
replay — sem a qual nenhuma peça sobrevive a contestação; (b) validação independente, que hoje
não existe como mercado; (c) alguém ser responsabilizado por um resultado, que é o que cria a
prática; (d) as três precondições de Berkeley, ou alguma coisa no lugar delas.

**Quem tem incentivo para bloquear ou capturar.** A plataforma regulada e a auditora que ela
contrata. É a estrutura clássica de captura de norma técnica, e produz e9.1.1: o ensaio passa a
ser desenhado para passar, não para descobrir.

### R4 — A simulação barata, local e pessoal: o instrumento deixa de ser institucional

**O que rompe.** Rompe o monopólio institucional sobre a produção de alegações a respeito de
comportamento coletivo. Rodar uma sociedade exigia cluster, orçamento e comitê. Com modelo
quantizado no navegador, exige uma aba. Quem pode produzir a alegação muda — e isso é ruptura de
**quem**, não de quanto.

**Por que agora, e não há cinco anos.** WebGPU estabilizado entre navegadores, modelos
quantizados sub-3B com desempenho útil, e bibliotecas JavaScript maduras retendo até 80% do
desempenho nativo. Em 2021, rodar qualquer modelo de linguagem no navegador era demonstração de
conferência.

**Onde está na difusão.** **Demo pública.** A infraestrutura existe e é usada; sociedade
simulada rodando inteiramente no cliente eu não consegui abrir nenhuma (a turma relata uma; ver
§12). Cadeia com confiança baixa a média.

**O que ainda falta acontecer.** (a) Um modelo local pequeno o bastante e bom o bastante para
sustentar agente com memória — hoje a janela de contexto é o gargalo, não o parâmetro; (b) os
pesos continuarem abertos (é a premissa escondida nº 1 da §7); (c) uma forma de compartilhar a
rodada que não seja o vídeo — sem isso, a simulação pessoal não circula.

**Quem tem incentivo para bloquear.** Os provedores de modelo. Cada rodada local é receita de
API que não acontece. O instrumento de bloqueio é a licença de peso, e ele é acionável por
decisão unilateral de empresa — daí ser wildcard, e não efeito.

### Candidatos recusados como raiz

*Candidato "modelagem baseada em agentes" recusado como raiz: adoção em maioria na ciência
social computacional desde os anos 2000 (NetLogo, Schelling, Sugarscape); dá para fazer com o
que é comum em produto de massa. Tratado como contexto na seção 3 e como termo de comparação em
R1 — o que muda é o agente falar, não o agente existir.*

*Candidato "gêmeo digital urbano" recusado como raiz: a revisão sistemática brasileira que
encontrei cobre aplicações de 2003 a 2025 em planejamento urbano e gestão pública, o que é
maturidade, não emergência. Entra no mapa apenas onde cruza com R3 (e11: a população sintética
nacional), porque ali o objeto simulado deixa de ser a cidade e passa a ser a sociedade.*

*Candidato "usuário sintético" recusado como raiz separada: é a mesma ruptura de R1 vista pelo
lado do produto. Manter os dois duplicaria a árvore. Aparece como e1.*

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "A população re-executável: o contrafactual deixa de ser inferido e passa a ser executado"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "Pesquisa de opinião passa a entregar dois números — o medido e o simulado — e a discussão do cliente migra para a diferença entre eles"
        sinal: forte
        prazo: 2031
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "O painel humano encolhe de propósito e muda de função: deixa de ser fonte primária e vira calibrador do modelo"
            sinal: medio
            prazo: 2036
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "O trabalho de respondente se inverte de preço: paga-se caro por duas horas de entrevista biográfica e quase nada por dez minutos de questionário"
                sinal: fraco
                prazo: 2041
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "A auditoria de robustez vira artefato que se compra junto com o resultado, e sem ela a alegação não circula"
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "CHI e periódicos de HCI passam a exigir o relatório de simulação no formulário de submissão, como hoje exigem declaração de conflito de interesse"
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "A superdeterminação — tratar um grupo como mais homogêneo do que ele é — vira viés nomeado, medido e reportado no produto"
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Grupos sub-representados passam a disputar o direito sobre a própria representação sintética, e a disputa é sobre quem pode rodar uma versão deles"
            sinal: fraco
            prazo: 2046
            confianca: baixa
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Microdado público de censo passa a sair com cláusula de uso que distingue análise de instanciação de população sintética"
                sinal: fraco
                prazo: 2051
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "A pergunta de pesquisa muda de forma: sai de o que as pessoas acham e entra sob que condições isso muda"
        sinal: medio
        prazo: 2038
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "Revistas de ciência social passam a publicar o envelope de resultados sobre sementes e formatos de prompt em vez do resultado pontual"
            sinal: fraco
            prazo: 2043
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Replicação deixa de significar outro laboratório refez e passa a significar outro modelo refez, e a diversidade de modelos vira requisito metodológico"
                sinal: fraco
                prazo: 2049
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: "A rodada vira formato de mídia: assistir a uma sociedade sintética se torna um gênero, porque o log já é narrativa"
        sinal: fraco
        prazo: 2040
        confianca: baixa
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "A legibilidade narrativa vira fonte sistemática de erro de leitura pública, porque a história do agente convence mais que o intervalo de confiança"
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Agências de checagem estendem o método ao resultado de simulação e passam a pedir semente, prompt e versão de modelo como hoje pedem o microdado"
                sinal: fraco
                prazo: 2047
                confianca: baixa
  - disrupcao: "O ambiente sociotécnico configurável: a plataforma de mídia vira bancada de ensaio"
    efeitos:
      - id: e5
        ordem: 1
        efeito: "Mudança de recomendação passa por um estágio de ensaio em população sintética antes de chegar ao teste A/B com gente"
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "O critério de sucesso do design de plataforma ganha um segundo eixo: além de engajamento, o que a mudança faz com a distribuição"
            sinal: medio
            prazo: 2036
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Métricas de estrutura como polarização, concentração de atenção e desigualdade de alcance entram no painel de produto ao lado de usuários ativos"
                sinal: fraco
                prazo: 2044
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "O ensaio vira peça de defesa jurídica: rodamos e não deu isso passa a ser alegado quando o dano aparece"
            sinal: fraco
            prazo: 2039
            confianca: baixa
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "Seguradoras passam a precificar risco de produto digital com base no ensaio, e a exigência contratual chega antes da exigência legal"
                sinal: fraco
                prazo: 2046
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: "Times de produto passam a manter uma população da casa, persistente, versionada e com registro de mudanças"
        sinal: fraco
        prazo: 2037
        confianca: baixa
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "A população da casa vira ativo proprietário e barreira de entrada, porque dez anos de calibração não se compram"
            sinal: fraco
            prazo: 2048
            confianca: baixa
      - id: e7
        ordem: 1
        efeito: "A pesquisa com pessoas se reorganiza em torno do que a simulação não faz: o inesperado, o corporal, o constrangimento e o conflito real"
        sinal: medio
        prazo: 2035
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "Métodos qualitativos caros como etnografia, diário e observação em campo sobem de preço e de prestígio relativo"
            sinal: fraco
            prazo: 2042
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "A pesquisa com pessoas passa a ser contratada para falsificar o resultado da simulação, não para produzi-lo do zero"
                sinal: fraco
                prazo: 2047
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: "Plataformas param de rodar experimento em gente nos casos que a simulação cobre, e o repertório público de evidência sobre elas encolhe"
        sinal: medio
        prazo: 2038
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "Pesquisadores externos perdem a via de acesso que tinham e passam a exigir acesso à população sintética, não ao dado de usuário"
            sinal: fraco
            prazo: 2045
            confianca: baixa
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: "O acesso à população sintética de uma plataforma vira item de negociação regulatória, no mesmo balcão em que hoje se negocia acesso a dado"
                sinal: fraco
                prazo: 2050
                confianca: baixa
  - disrupcao: "A simulação como peça de prova: uma rodada entra numa decisão que vincula gente real"
    efeitos:
      - id: e9
        ordem: 1
        efeito: "Órgão regulador passa a pedir a rodada, não o relatório sobre ela: a avaliação de risco sistêmico exige o artefato executável"
        sinal: fraco
        prazo: 2036
        confianca: baixa
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: "Forma-se um mercado de auditoria independente de simulação, com firmas que não constroem o modelo que examinam"
            sinal: fraco
            prazo: 2044
            confianca: baixa
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: "Auditora e plataforma capturam a norma, e o ensaio passa a ser desenhado para passar em vez de para descobrir"
                sinal: fraco
                prazo: 2053
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: "Um resultado de simulação sustenta uma decisão pública que se mostra errada, e o método entra em disputa aberta"
        sinal: fraco
        prazo: 2041
        confianca: baixa
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: "Reprodutibilidade bit-a-bit — semente, versão de modelo, replay determinístico — vira requisito de entrada antes de a validade ser discutida"
            sinal: fraco
            prazo: 2043
            confianca: media
          - id: e10.2
            ordem: 2
            efeito: "Governos passam a manter a simulação como infraestrutura pública auditável em vez de contratá-la como serviço"
            sinal: fraco
            prazo: 2048
            confianca: baixa
            efeitos:
              - id: e10.2.1
                ordem: 3
                efeito: "A infraestrutura pública de simulação vira alvo, e manipular a população oficial se torna vetor de influência"
                sinal: fraco
                prazo: 2055
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: "A população simulada de um país vira questão de soberania, porque quem calibra a sociedade decide o que ela responde"
        sinal: fraco
        prazo: 2040
        confianca: baixa
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: "Institutos nacionais de estatística passam a publicar população sintética oficial, como hoje publicam microdado"
            sinal: fraco
            prazo: 2046
            confianca: baixa
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: "A população oficial vira o padrão contra o qual as privadas se comparam, e o viés do instituto passa a ser o viés do setor inteiro"
                sinal: fraco
                prazo: 2054
                confianca: baixa
  - disrupcao: "A simulação barata, local e pessoal: o instrumento deixa de ser institucional"
    efeitos:
      - id: e12
        ordem: 1
        efeito: "A sociedade sintética sai do centro de dados e roda na aba do navegador de quem quiser, sem servidor e sem chave de API"
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: "Em disciplinas de design de interação, alterar o mecanismo de uma sociedade simulada substitui comentar o estudo de caso como exercício"
            sinal: medio
            prazo: 2035
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: "A avaliação nessas disciplinas passa a ser o envelope que o aluno produziu, não o texto que ele escreveu sobre o que observou"
                sinal: fraco
                prazo: 2046
                confianca: baixa
          - id: e12.2
            ordem: 2
            efeito: "A simulação vira peça de argumentação amadora, e qualquer um roda uma sociedade que produz o resultado que ele já queria"
            sinal: medio
            prazo: 2037
            confianca: media
            efeitos:
              - id: e12.2.1
                ordem: 3
                efeito: "A credibilidade da simulação como gênero cai antes de o método amadurecer, e o campo gasta esforço se distinguindo do amador"
                sinal: fraco
                prazo: 2044
                confianca: baixa
      - id: e13
        ordem: 1
        efeito: "Comunidades pequenas — um fórum, um servidor, uma escola — passam a ensaiar as próprias regras de convivência antes de aplicá-las"
        sinal: fraco
        prazo: 2039
        confianca: baixa
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: "A regra de convivência deixa de ser texto e vira artefato executável com histórico de versões"
            sinal: fraco
            prazo: 2050
            confianca: baixa
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: "Comunidades passam a bifurcar regras como se bifurca código, e regra e software deixam de ser coisas distintas"
                sinal: fraco
                prazo: 2056
                confianca: baixa
      - id: e14
        ordem: 1
        efeito: "O mesmo motor que ensaia política serve de conteúdo, e a fronteira entre instrumento e entretenimento se apaga"
        sinal: fraco
        prazo: 2042
        confianca: baixa
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: "O letramento público em incerteza passa a vir de ter jogado uma simulação, não de ter lido sobre ela"
            sinal: fraco
            prazo: 2055
            confianca: baixa
```

### O que o bloco não consegue dizer

**Os mecanismos, um por efeito.** O bloco lista; aqui está o *porque*.

- **e1** — porque o custo marginal de uma resposta sintética é próximo de zero e o do painel
  humano não caiu, quem já tem o painel adiciona a camada sintética como acréscimo de preço, não
  como substituição. Os dois números saem juntos porque é isso que o fornecedor quer vender.
- **e1.1** — porque o número simulado só vale com âncora humana: duas horas de entrevista levam
  o agente de 74% para 86% do teto do teste-reteste. A amostra humana deixa de precisar ser
  *representativa* e passa a precisar ser *informativa* — poucos casos, muito profundos.
- **e1.1.1** — porque o valor migra de representatividade para profundidade, e o preço segue o
  valor.
- **e1.2** — porque uma perturbação de formato de persona moveu a cooperação em até 76 pontos
  percentuais num modelo e 1 ponto em outro. Robustez deixa de ser propriedade do método e vira
  propriedade *de cada alegação* — logo tem de ser produzida e vendida junto com ela. **Este é
  o efeito de retroação de R1: encarece cada alegação e freia a própria disrupção.**
- **e1.2.1** — porque o pedido por "relatório de desenvolvimento e implantação de simulação"
  (Berkeley, 2026) é o mesmo movimento que produziu model cards e datasheets, e esses foram de
  proposta a campo de formulário em cerca de cinco anos. Dois workshops de CHI 2026 sobre o
  tema são o começo da via institucional.
- **e2** — porque o benchmark de 2026 mediu o modelo atribuindo ~67% da variação a uma variável
  que explica ~1,5% na realidade, inflando distância entre segmentos de duas a quatro vezes.
  Erro com nome e métrica vira item de relatório; erro sem nome não.
- **e2.1** — porque o estereótipo medido dá base material a uma reivindicação que antes era só
  ética. A precondição de Berkeley "não simular população sem participação dela" só ganha força
  quando existe número mostrando o dano.
- **e2.1.1** — porque o instituto que fornece o insumo é o ponto de controle mais barato: é mais
  fácil condicionar o microdado do que fiscalizar quem roda o quê.
- **e3** — porque re-executar é barato e medir uma vez é caro: o instrumento favorece varredura
  de condições, não estimativa pontual. A pergunta se adapta ao que o instrumento faz bem.
- **e3.1** e **e3.1.1** — porque, se a mesma perturbação move 76 pontos num modelo e 1 em outro,
  a variação entre modelos deixa de ser ruído e vira informação. Publicar a média passa a ser
  um erro de forma, não de cálculo.
- **e4** — porque o log de uma sociedade de agentes é legível em língua natural, ao contrário do
  log de um modelo clássico. O experimento de 2023 circulou como história ("organizaram uma
  festa"), não como resultado — e isso é a definição de formato.
- **e4.1** — porque a mesma legibilidade que faz circular faz enganar: a narrativa tem coerência
  interna independente de validade, e coerência convence. **Retroação cultural de R1.**
- **e5** — porque o A/B custa exposição real e leva semanas, enquanto o ensaio custa tokens e
  leva horas. O ensaio entra como estágio anterior porque é o único lugar onde cabe. A validação
  estrutural de 4 a 6% contra Bluesky é o que torna isso defensável dentro da empresa.
- **e5.1** — porque, uma vez que a saída da rodada é a *distribuição*, o gerente passa a ter um
  número de estrutura na mesa. Ter o número é o que cria a métrica; não ter é o que a impede.
- **e5.1.1** — porque toda métrica que existe e é barata acaba no painel; a resistência é ao
  custo de medir, não ao que se mede.
- **e5.2** — porque documento interno sobre risco é descobrível em litígio, e a defesa mais
  natural para quem o produziu é alegar diligência. **Retroação ambígua de R2:** o mesmo ensaio
  que poderia evitar o dano vira justificativa para ele.
- **e5.2.1** — porque a seguradora precifica o que consegue modelar. Foi assim que o teste de
  colisão entrou na indústria automotiva: por prêmio de seguro e classificação de consumidor,
  anos antes de norma obrigatória.
- **e6** — porque comparar duas rodadas exige que a população não mude entre elas. É a mesma
  razão que transformou benchmark em artefato versionado em aprendizado de máquina.
- **e6.1** — porque calibração é acumulação: quem tem dez anos de população ajustada não é
  alcançado por quem começa hoje, mesmo com o mesmo modelo.
- **e7** — porque o agente é proxy não confiável exatamente onde a tarefa é aberta. A pesquisa
  humana não desaparece: ela se especializa no resíduo, que é o que a simulação erra.
- **e7.1** e **e7.1.1** — porque o valor marginal do humano fica onde o sintético erra, e
  derrubar um resultado é mais barato do que levantar um do zero. O serviço muda de nome antes
  de mudar de natureza.
- **e8** — porque o experimento interno em usuário real é o que vaza, o que é auditável e o que
  vira paper. O ensaio sintético fica dentro de casa e não deixa rastro externo. **Este é o
  efeito de quem perde: a comunidade de pesquisa sobre plataformas.**
- **e8.1** e **e8.1.1** — porque a via de acesso desaparecida precisa ser substituída por outra,
  e a única que resta é a população sintética. O balcão já existe: é o mesmo em que hoje se
  negocia acesso a dado.
- **e9** — porque o artigo 34 do DSA já obriga avaliação de risco na implantação de nova
  funcionalidade, ou seja, *ex ante*, e *ex ante* só há modelo. A pergunta não é se haverá
  exigência, é quando prosa deixa de bastar.
- **e9.1** — porque não existe exigência técnica sem alguém que a verifique, e verificador que
  também constrói não sobrevive ao primeiro escândalo.
- **e9.1.1** — porque quem paga a auditoria influencia o escopo dela. **Retroação de R3, com
  dono nomeado.**
- **e10** — porque foi exatamente o percurso do modelo epidemiológico de agentes: decisivo em
  2020, contestado em seguida, e a crítica recaindo sobre o **código** (irreprodutibilidade,
  ilegibilidade) e não sobre a teoria.
- **e10.1** — porque a contestação anterior ensinou onde se ataca primeiro. Reprodutibilidade
  vira requisito de *entrada*, antes de a discussão substantiva começar.
- **e10.2** e **e10.2.1** — porque infraestrutura que sustenta decisão vinculante tende a ser
  internalizada, e infraestrutura internalizada vira alvo. As duas coisas são o mesmo movimento
  visto de dois lados.
- **e11** — porque o modelo que responde "o brasileiro acha X" foi treinado majoritariamente em
  texto de outro lugar, e a queda de 11 a 22 pontos percentuais no recorte transcultural do WVS
  é o tamanho do problema, medido.
- **e11.1** — porque o instituto nacional já tem o insumo (microdado) e já tem o mandato. No
  Brasil, o programa de inteligência para políticas públicas do IBGE, de 2025–2026, é o lugar
  onde isso caberia.
- **e11.1.1** — porque padrão oficial vira referência, e referência transmite o próprio viés a
  tudo que se compara com ela.
- **e12** — porque WebGPU estabilizou entre navegadores e modelos quantizados cabem na GPU de
  consumo retendo até 80% do desempenho nativo. O que era servidor virou aba.
- **e12.1** e **e12.1.1** — porque rodar passou a custar o mesmo que abrir uma página. É o
  lugar que o NetLogo ocupa em modelagem clássica desde os anos 2000; o que muda é que agora o
  agente fala, e portanto o aluno consegue ler o porquê do comportamento sem saber programar.
- **e12.2** — porque o mesmo barateamento que permite investigar permite fabricar. Uma rodada
  que dá o resultado desejado custa a mesma aba. **Retroação de R4, e a mais rápida delas.**
- **e12.2.1** — porque a reputação de um gênero se forma pelo exemplar mais visível, não pelo
  melhor, e o amador é mais numeroso.
- **e13** e **e13.1** — porque comunidade pequena não tem escala para A/B, mas tem escala para
  simulação local; e porque o corpus da própria comunidade é exatamente o que falta para
  calibrar qualquer coisa.
- **e13.1.1** — porque, uma vez executável e versionada, a regra herda as práticas de quem
  versiona: bifurcar, mesclar, reverter.
- **e14** — porque instrumento e jogo compartilham motor, agente e log narrativo. O experimento
  de 2023 já rodava sobre o Phaser, um framework de jogo web: a fronteira nunca foi técnica.
- **e14.1** — porque incerteza se aprende manipulando, e a simulação é a única forma de mídia em
  que manipular a premissa e ver a consequência é a própria interação.

### As classes de referência usadas para dar os anos

Prazo sem classe de referência é chute. Estas são as cinco que usei, e o que cada uma sustenta:

| Classe | O que levou | O que ela ancora aqui |
|---|---|---|
| **CFD × túnel de vento** | ~30 anos, da usabilidade (anos 1970) ao deslocamento parcial (anos 2000) — e o túnel nunca fechou | o formato geral do mapa: em 2056 a simulação é estágio anterior, não substituição. Ancora e5, e7, e o cenário provável. **Escrita de memória; ver §8.** |
| **A/B testing em plataformas** | ~12 anos, de prática de duas empresas (~2000) a padrão de indústria (~2012) | e5 (2033): a validação estrutural publicável começou em 2025–26, logo ~2033 para virar estágio corrente |
| **Ensaio in-silico em submissão regulatória** | ~15 a 20 anos, do primeiro uso à aceitação rotineira | e9 (2036) e e9.1 (2044) |
| **Teste de colisão** | prêmio de seguro e classificação de consumidor vieram **antes** da norma obrigatória | e5.2.1 (2046) antes de e9 virar universal |
| **Modelagem epidemiológica de agentes** | ~15 anos de existência (meados dos 2000) até ser decisiva (2020) e imediatamente contestada, pelo código | e10 (2041) e e10.1 (2043) |
| **Model cards e datasheets** | ~5 anos de proposta a campo de formulário | e1.2.1 (2038) |
| **Smartphone (~4 anos a 10%) e RV de consumo (>10 anos e ainda não)** | os dois extremos da faixa | usadas para **não** colocar nada de R4 antes de 2033 |

### Convergências — o achado mais valioso

Três ramos de raízes diferentes chegam ao mesmo lugar, e é isso que faz este mapa valer mais
que a soma das quatro rodas:

1. **A reprodutibilidade como pré-requisito de tudo.** e1.2 (R1, por exigência de método),
   e10.1 (R3, por exigência de contestação) e e6 (R2, por exigência de comparabilidade
   comercial) convergem para o mesmo artefato: semente, versão de modelo, replay. Três atores
   sem relação entre si — o revisor de periódico, o advogado e o gerente de produto — pedindo a
   mesma coisa por razões incompatíveis. **Quando três incentivos distintos convergem para um
   artefato técnico, ele acontece.** É a previsão mais forte deste mapa, e a única que eu
   defenderia com confiança média na terceira ordem.
2. **A população calibrada como ativo.** e6.1 (R2, ativo privado), e11.1 (R3, ativo público) e
   e2.1 (R1, ativo disputado pelo grupo representado) são três donos reivindicando a mesma
   coisa. A briga de 2046 não é sobre modelo — é sobre **quem é dono da população**.
3. **O barateamento destrói a credibilidade antes de o método amadurecer.** e12.2 (R4, amador) e
   e4.1 (R1, narrativa convincente) convergem em e12.2.1. Esta convergência é a razão de o
   cenário indesejável da §9 ser mais provável do que o desejável.

### Retroalimentação

**Ciclo que freia (dominante).** R1 barateia a alegação → e12.2 permite fabricá-la → e4.1 faz a
fabricação circular melhor que a boa → e12.2.1 derruba a credibilidade do gênero → e1.2 (a
auditoria) vira obrigatória → o custo por alegação sobe → **R1 desacelera**. É um ciclo negativo
com atraso: barateia primeiro, encarece depois, e o encarecimento chega quando o estrago já
circulou.

**Ciclo que reforça.** R2 produz ensaio → e6 produz população versionada → e6.1 a torna ativo →
o ativo justifica investimento em calibração → a calibração melhora o ensaio → **R2 acelera**.
Positivo e concentrador: favorece quem já é grande, porque calibração é acumulação.

**Ciclo cruzado.** R3 exige reprodutibilidade (e10.1) → a reprodutibilidade torna o ensaio de R2
defensável → mais plataformas ensaiam → há mais matéria para o regulador pedir → **R3 acelera
R2 e R2 realimenta R3**. Este é o caminho pelo qual a simulação vira obrigatória sem que
ninguém tenha decidido que deveria ser.

### Contradições que este mapa não resolve

- **e8 contra e9.** Em e8, a plataforma ensaia dentro de casa e o repertório público encolhe. Em
  e9, o regulador pede a rodada e o repertório público cresce. Os dois não podem valer ao mesmo
  tempo no mesmo lugar. O que decide: se a exigência regulatória chega **antes** de o ensaio
  virar rotina interna, vale e9; se chega depois, vale e8 e o regulador recebe o que a plataforma
  quiser mostrar. A janela é estreita e está aberta agora.
- **e7 contra e1.1.** Em e7 a pesquisa humana encarece e ganha prestígio; em e1.1 ela encolhe e
  vira função auxiliar. Podem coexistir — encolher e encarecer é o que aconteceu com a alfaiataria
  —, mas então o campo perde massa crítica e formação. Registro os dois; o que decide é se o
  resíduo que só o humano cobre é grande o bastante para sustentar uma profissão.
- **e12 contra e6.1.** Simulação pessoal no navegador democratiza; população calibrada como ativo
  concentra. O que decide é se a calibração pode ser compartilhada como se compartilha um modelo
  aberto, ou se ela é inseparável do dado privado que a produziu.

### Cobertura STEEP e quem perde

| Eixo | Efeitos de 1ª ordem | Nota |
|---|---|---|
| **Social** | e7, e13 | |
| **Tecnológico** | e5, e6, e12 | |
| **Econômico** | e1, e8, e14 | |
| **Ecológico** | *vazio* | Declarado: o custo energético de rodar um milhão de agentes é real (a conta do OASIS mostra a escala) mas **não achei nenhum número que ligasse simulação social a consumo agregado**. Em vez de inventar um efeito, tratei o custo como freio de e6 e como premissa escondida na §7.5. |
| **Político** | e9, e10, e11 | |

**Quem perde, nomeado:** o respondente de painel barato (e1.1.1); pessoas de grupos
sub-representados, que são simuladas com estereótipo antes de serem consultadas (e2); a
comunidade externa de pesquisa sobre plataformas, que perde a via de acesso (e8, e8.1); o campo
científico, que gasta esforço se distinguindo do amador (e12.2.1); e — se e9.1.1 se der — o
público, que recebe ensaio desenhado para passar.

### Regra de parada

Parei em três níveis onde a skill manda, mas **em quatro ramos parei antes**, porque o filho
seria o pai amadurecido e não um efeito novo: e6.1 (o ativo proprietário não gera efeito de
terceira ordem distinto — gera mais concentração, que é ele próprio adiante); e10.1 (a
reprodutibilidade como requisito não tem filho que troque de ator); e13.1.1 e e14.1 estão na
fronteira e entraram porque trocam de ator (comunidade → prática de software; instrumento →
público leitor). Registro para que se possa discordar do corte.

### Teste da causa solta

Removi da roda quatro efeitos que aconteceriam de qualquer jeito, por outro motivo, sem esta
raiz. Estão listados na §12 com a razão da remoção. O caso mais claro: "métodos qualitativos
ganham prestígio" aconteceria por reação à quantificação em geral, independentemente de
simulação — mantive só como e7.1, filho de e7, que amarra o prestígio ao *resíduo específico*
que a simulação erra, e não à qualificação em geral.

## 6. Sinais fracos e wildcards

### Sinais fracos

**SF1 — A sociedade simulada inteira no cliente.** *Onde foi visto:* WebLLM e WebGPU, com
modelos sub-3B rodando na aba e retendo até 80% do desempenho nativo; a turma relata uma vila
de agentes rodando no navegador (`Gestalt Village`), que eu não consegui abrir. *O que mudaria:*
a simulação deixa de ter dono institucional; R4 sai de demo para nicho e puxa e12, e13 e e14 uns
cinco anos para a frente. *Sinal observável:* **um artigo revisado por pares cuja simulação
social roda inteiramente no cliente e se reproduz clicando num link** — não um vídeo, não um
notebook: o link.

**SF2 — O relatório de simulação como documento padrão.** *Onde foi visto:* a proposta de Luo,
Arora e Guirado (Berkeley, abril de 2026) por "relatórios de desenvolvimento e implantação de
simulação", explicitamente no molde dos model cards. Hoje é a proposta de três autores num
preprint. *O que mudaria:* transforma e1.2 de prática de nicho em requisito de circulação e
antecipa e1.2.1. *Sinal observável:* **a primeira conferência que torna isso campo obrigatório
no formulário de submissão** — e o candidato natural é o CHI, que já sediou dois workshops sobre
o assunto em 2026.

**SF3 — A queda transcultural tratada como oportunidade de produto, não como defeito.** *Onde
foi visto:* os 11 a 22 pontos percentuais de queda no World Values Survey, em 63 países. Hoje é
lido como limitação. *O que mudaria:* se for lido como nicho de mercado, nasce a indústria de
população sintética nacional e e11 antecipa em cinco a dez anos. *Sinal observável:* **um
instituto nacional de estatística publicando população sintética como publica microdado** — no
Brasil, o candidato é o IBGE, cujo programa de inteligência para políticas públicas tem foco em
2025–2026.

**SF4 — A institucionalização acadêmica acontecendo em dose dupla.** *Onde foi visto:* dois
workshops no CHI 2026 sobre o mesmo objeto (PoliSim, sobre política pública; e outro sobre
padrões e documentação para modelo de linguagem como participante simulado). Dois workshops
simultâneos é o padrão que costuma preceder trilha própria. *O que mudaria:* trilha própria
cria revisor especializado, e revisor especializado é o que faz e1.2 pegar. *Sinal observável:*
**virar trilha, não workshop.**

**SF5 — A tesoura 69% × 8%.** *Onde foi visto:* 69% dos pesquisadores de mercado já usaram
resposta sintética (2025); 8% dos pesquisadores de UX a usam com regularidade (maio de 2026).
*O que mudaria:* o número de UX é o termômetro de se o método está sendo aceito ou só sendo
comprado. *Sinal observável:* **o 8% sair do lugar em qualquer direção.** Se subir sem que os
números de validade melhorem, o cenário indesejável da §9 está em curso; se ficar parado
enquanto o de mercado sobe, o campo se parte em dois com padrões incompatíveis.

**SF6 — O log como narrativa.** *Onde foi visto:* a razão pela qual o experimento de 2023
circulou foi "os agentes organizaram uma festa" — uma frase de enredo, não um resultado.
*O que mudaria:* confirma e4 e antecipa e4.1. *Sinal observável:* **a primeira peça jornalística
cuja reportagem é uma rodada de simulação**, com repórter creditado como quem a desenhou.

### Wildcards

**W1 — Um resultado de simulação sustenta uma decisão pública vinculante e está errado.**
*Mecanismo:* o artigo 34 do DSA exige avaliação de risco na implantação de nova funcionalidade;
ex ante só há modelo; uma plataforma apresenta a rodada como evidência de que a mudança é
segura; o regulador aceita; a mudança entra; o dano aparece em escala. *Por que é improvável:*
nenhum regulador hoje aceita rodada como peça — o que se entrega é prosa, e prosa não erra de
forma verificável. *O que faria com o mapa:* mata e9 como adoção voluntária e antecipa e9.1 e
e10.1 em cinco a dez anos, mas pelo pior caminho — por crise, com desconfiança embutida.
*Sinal precoce:* **um despacho regulatório que cite a saída de uma simulação, e não a
metodologia dela.**

**W2 — Fecham os pesos.** *Mecanismo:* modelo capaz é decisão unilateral de empresa; se as
famílias hoje abertas publicarem a geração seguinte só por API, R4 morre inteira e R1–R3 viram
infraestrutura de três fornecedores. *Por que é improvável:* há pressão competitiva e
regulatória em sentido contrário — mas já houve reversão de política de peso antes, e o
incentivo de e12 (cada rodada local é receita de API que não acontece) aponta para lá. *O que
faria com o mapa:* remove e12, e13, e14 e seus filhos — onze efeitos — e transforma e6.1 de
tendência em fato consumado. *Sinal precoce:* **uma das famílias abertas de hoje publicando a
geração seguinte só por API.**

**W3 — A validação se resolve.** *Mecanismo:* aparece um método que prove, para uma classe
delimitada de perguntas, que a população sintética é não-enviesada dentro de um intervalo
calculável — o análogo do que o bootstrap fez pela inferência sem distribuição conhecida. *Por
que é improvável:* o erro medido hoje não é ruído, é estrutura: 67% de variação atribuída onde a
realidade tem 1,5% é estereótipo, e estereótipo não se corrige com mais amostras. *O que faria
com o mapa:* colapsa quase tudo — e1, e5 e e9 dez anos antes, e1.2 vira rotina barata em vez de
freio, e o cenário desejável da §9 passa a ser o provável. **É o wildcard que mais mudaria este
mapa, e o que eu considero menos provável.** *Sinal precoce:* **um paper de estatística, não de
HCI nem de PLN, sobre garantia de cobertura em população sintética.**

**W4 — A sociedade sintética otimizando o dano.** *Mecanismo:* é o duplo uso nomeado em
Berkeley — a mesma ferramenta que testa política de apoio a imigrante otimiza estratégia de
deportação; a que planeja evacuação otimiza a ruptura dela. Nada no método distingue os dois; a
função-objetivo é um parâmetro. *Por que é improvável:* hoje falta calibração local o bastante
para a otimização valer a pena; é mais barato agir sem simular. *O que faria com o mapa:* torna
e11 (soberania) o efeito central em vez de periférico, e faz e10.2 (infraestrutura pública)
virar questão de segurança nacional em vez de transparência. *Sinal precoce:* **um edital de
compra pública de simulação social cujo objetivo declarado seja de controle, não de serviço.**

**W5 — A simulação vira a plataforma.** *Mecanismo:* se assistir a uma sociedade sintética é
formato (e4) e rodar uma é barato (e12), nada impede que o produto de mídia dominante de 2050
seja uma sociedade simulada persistente com público humano dentro — e aí o instrumento e o
objeto de estudo passam a ser a mesma coisa. *Por que é improvável:* exige que o formato retenha
atenção sem roteiro, o que nenhuma mídia generativa demonstrou sustentar. *O que faria com o
mapa:* dissolve a fronteira que este mapa assumiu com o tema 7 (personagens autônomos em jogos)
e obriga a refazê-lo. *Sinal precoce:* **uma simulação social com retenção de público medida em
meses, não em dias.**

## 7. Contra o próprio mapa

Esta seção é o relato da bateria do §6 da skill, rodada sobre o mapa já pronto. As alterações
que ela produziu estão no registro ao final e **já estão aplicadas** no bloco da §5.

### 7.1 Pré-mortem — é 2056 e este mapa se mostrou errado

**Razão 1, a mais provável: a validação nunca chegou e o instrumento ficou onde está.** Em 2056,
simulação social com agentes de linguagem é o que a realidade virtual de consumo é hoje — trinta
anos de demonstração excelente, uso real em nicho, e nenhuma das instituições mudou. O sinal que
eu ignorei ao escrever: 64% de pesquisadores céticos ou contrários não é ruído inicial de
difusão, é a resposta de um campo que já viu a evidência. *Consequência aplicada:* rebaixei e9
de sinal médio para fraco e de confiança média para baixa, e empurrei e5 de 2030 para 2033.

**Razão 2: o mapa confundiu barateamento com adoção.** Barato não é adotado; é *disponível*.
Planilha barateou modelagem financeira e não fez todo mundo modelar. A parte de R4 que assume que
"qualquer um roda" pode simplesmente não acontecer, porque quase ninguém quer rodar nada.
*Consequência aplicada:* removi um efeito de primeira ordem de R4 ("todo mundo mantém sua
sociedade sintética como mantém uma planilha") e rebaixei e12 de 2031 para 2033.

**Razão 3: a categoria se dissolveu.** Em 2056 "sociedade simulada" pode não ser uma coisa —
pode estar diluída dentro de ferramentas de produto, como "teste estatístico" está diluído dentro
de painéis sem que ninguém chame aquilo de estatística. Se a categoria some, todos os efeitos
que dependem de a simulação ser **nomeada** (e1.2, e1.2.1, e9, e9.1) somem com ela. *Consequência
aplicada:* rebaixei e1.2.1 e mantenho o aviso — este é o modo de falha que eu menos sei detectar.

### 7.2 Extrapolação linear

Três efeitos eram "mais do mesmo, maior":

- **e12 ("roda no navegador")** era extrapolação de capacidade de hardware. Ganhou mecanismo de
  não-linearidade: não é a GPU que decide, é a **janela de contexto**, que é o gargalo real do
  agente com memória — e essa não cresce com a mesma curva. Prazo empurrado.
- **e6 ("população da casa")** era só "empresas guardam coisas". Ganhou o mecanismo da
  comparabilidade entre rodadas, que é o que torna a versão obrigatória e não conveniente.
  Confiança rebaixada de média para baixa mesmo assim.
- **Um efeito removido:** "o A/B test com humanos desaparece". É extrapolação linear pura e
  contradiz frontalmente a classe de referência central deste mapa — o CFD não fechou o túnel de
  vento em trinta anos. Foi para a §12.

### 7.3 Velocidade de adoção

Confrontei todo prazo de efeito com sinal fraco contra a classe de referência. Dois não passaram:

- **e9 (regulador pede a rodada)** estava em 2033. A classe de referência é a aceitação de ensaio
  in-silico em submissão regulatória: **15 a 20 anos** do primeiro uso à rotina. Se o primeiro uso
  sério é 2025–26, a rotina é 2040–2046, não 2033. Empurrei para 2036 como *primeira exigência
  pontual* — não como rotina — e coloquei a rotina em e9.1, 2044.
- **e5 (ensaio antes do A/B)** estava em 2030. A classe é a adoção do próprio A/B: ~12 anos de
  prática pioneira a padrão de indústria. Contando de 2025, dá 2037; contando do primeiro paper
  com validação estrutural contra plataforma real, dá ~2033. Fiquei em 2033 e registro que estou
  no limite otimista da referência.

Um alerta de calibração que a própria ferramenta não pega: **com horizonte em 2056, nenhum prazo
deste mapa cai fora da janela.** Isso não é bom sinal — quer dizer que o teste "prazo × horizonte"
não está exercendo pressão nenhuma. Trinta anos absorvem qualquer chute. É a principal razão de a
confiança geral do mapa estar em `baixa`, e não em `media`.

### 7.4 A raiz que não acontece

- **Se R1 não acontece** (a população calibrada nunca fica boa): sobram R2 e R4, porque ensaio de
  plataforma não precisa que o agente seja *uma pessoa* — precisa que o agregado se mexa de forma
  parecida, e o erro de 4 a 6% em métricas estruturais é sobre estrutura, não sobre indivíduo.
  Caem e1, e2, e3 e filhos. O mapa perde um terço e continua de pé.
- **Se R2 não acontece** (plataformas nunca adotam o estágio de ensaio): R1 e R4 seguem, e R3 fica
  sem matéria — o regulador não pode pedir o que ninguém produz. Caem e5 a e8 e boa parte de R3.
  Perda grande.
- **Se R3 não acontece** (simulação nunca vira peça): o mapa perde o eixo político inteiro e vira
  um mapa sobre método de pesquisa e produto. Menor, mas coerente.
- **Se R4 não acontece** (fica caro e institucional): cai o eixo de democratização e, com ele, a
  retroação mais rápida (e12.2). O mapa fica **mais otimista**, não menos — o que é um sinal de
  que R4 está fazendo trabalho honesto aqui.

**O teste passa:** nenhuma raiz, sozinha, sustenta o mapa. Não há uma raiz disfarçada de quatro.
A dependência mais forte é R2→R3, e ela está declarada.

### 7.5 Suposições escondidas

1. **Os pesos continuam abertos.** Todo R4 depende disso, e é decisão unilateral de empresa. Virou
   o wildcard W2.
2. **Energia e computação seguem baratas o bastante.** A conta do OASIS mostra que dez mil agentes
   por passo de tempo já é linha de orçamento; um milhão é outra ordem de grandeza. Se o custo de
   inferência subir em vez de cair, R2 e R3 ficam privilégio de quem tem centro de dados — o que
   é o cenário indesejável da §9 por outro caminho. **Não achei número para isto** e não inventei.
3. **A plataforma continua permitindo.** e5, e6 e e8 assumem que o time de produto pode ensaiar o
   próprio produto. Numa empresa em que o recomendador é o segredo, o ensaio pode ser proibido
   *internamente*, por risco de vazamento.
4. **A régua de validade continua sendo o survey.** Todos os números de acurácia que ancoram este
   mapa — 86%, 74%, 11 a 22 pontos — comparam agente contra resposta de questionário. Se a
   resposta de questionário for, ela mesma, uma medida ruim do que as pessoas fazem, o mapa está
   calibrando contra a régua errada, e nem eu nem as fontes que li tratam disso.
5. **O modelo de linguagem continua sendo a arquitetura.** O mapa inteiro assume agente-com-LLM.
   Outra arquitetura de agente com as mesmas propriedades manteria as rupturas e invalidaria todas
   as datas.

### 7.6 Viés do autor

Três, nomeados:

- **Viés de instrumento.** Este mapa gosta da ideia de que o método importa: a convergência nº 1
  (reprodutibilidade) e o peso dado a e1.2 refletem a preferência de quem valoriza rigor. Um mapa
  escrito por quem precisa de um número até sexta teria colocado e1 em 2028 e não teria escrito
  a §7.3.
- **Viés de simetria.** Coloquei quatro raízes porque quatro é o máximo que a skill permite e
  fica bonito. R4 é a mais fraca das quatro em evidência — vive de uma inferência sobre WebGPU e
  de um projeto que não consegui abrir. Ela poderia ser um sinal fraco em vez de raiz. Deixei
  como raiz e declaro a dúvida.
- **Viés de escolha do próprio tema.** Simulação como instrumento é o tema mais lisonjeiro para
  quem escreve mapas de futuro: é literalmente a ferramentalização da especulação. Isso me faz
  favorecer efeitos em que a simulação ganha estatuto. Contrapeso aplicado: e8 (o repertório
  público encolhe), e12.2.1 (o gênero perde credibilidade) e o cenário indesejável foram escritos
  depois de notar esse viés, e são os três lugares onde a simulação sai pior.

### 7.7 Calibração

| Ordem | alta | media | baixa | Total |
|---|---|---|---|---|
| 1ª | 1 | 6 | 7 | 14 |
| 2ª | 0 | 7 | 11 | 18 |
| 3ª | 0 | 0 | 15 | 15 |

Cai com a ordem, como deve. Uma observação honesta: o único `alta` do mapa é e1, e ele é `alta`
porque já está acontecendo — 69% de pesquisadores de mercado já usaram resposta sintética. Se
esse for o único efeito de que tenho certeza, o mapa está dizendo, sobre si mesmo, que descreve
bem o presente e mal o futuro. Aceito a leitura.

### 7.8 Registro de alterações — antes → depois

| id | antes | depois | por quê |
|---|---|---|---|
| **e1** | prazo 2029 | prazo **2031** | a tesoura 69% × 8% mostra dois mercados em velocidades diferentes; para o público deste mapa (quem projeta mídia e interação), o efeito só é visível quando chega ao lado de UX |
| **e3** | confianca alta | confianca **media** | mudança de forma de pergunta é mudança cultural de campo; nenhuma classe de referência minha cobre isso em menos de uma geração |
| **e4** | sinal medio, confianca media | sinal **fraco**, confianca **baixa** | o sinal era um único artefato (a viralização de 2023) e um artefato não é sinal médio pela regra do §3.4 da skill |
| **R1 — removido** | "a pesquisa de opinião tradicional desaparece" | removido, vai para a §12 | falha no teste da causa solta: a pesquisa de opinião já está em crise por taxa de resposta, independentemente de simulação |
| **e5** | prazo 2030 | prazo **2033** | classe de referência do A/B testing (~12 anos de pioneiro a padrão), contada do primeiro simulador validado contra plataforma real |
| **e6** | confianca media | confianca **baixa** | era extrapolação de "empresas guardam coisas"; ganhou mecanismo, mas o mecanismo é fraco enquanto ninguém assume publicamente que ensaia |
| **R2 — removido** | "o teste A/B com humanos desaparece" | removido, vai para a §12 | extrapolação linear e contradição direta com a classe de referência central (CFD não fechou o túnel de vento) |
| **e9** | sinal medio, confianca media, prazo 2033 | sinal **fraco**, confianca **baixa**, prazo **2036** | o DSA exige avaliação, não exige o arquivo; não há caso de regulador pedindo a rodada. Classe de referência in-silico: 15 a 20 anos |
| **e10.1** | sinal medio | sinal **fraco** | eu tinha apoiado o sinal no replay determinístico de um projeto relatado pela turma que **não consegui abrir**. Sem o artefato, o sinal é inferência |
| **R3 — removido** | "organismos multilaterais adotam sociedade sintética em negociação climática" | removido, vai para a §12 | enredo sem mecanismo: não sei dizer por que a negociação climática usaria isto e não usa modelo climático, que já tem |
| **e12** | prazo 2031 | prazo **2033** | o gargalo é janela de contexto, não parâmetro nem GPU; e a classe de referência da RV de consumo (>10 anos e ainda não) é o aviso contra otimismo de hardware |
| **e12.2** | confianca alta | confianca **media** | eu estava confiante porque o efeito é cínico, e cinismo não é evidência |
| **R4 — removido** | "toda pessoa mantém uma sociedade sintética pessoal como hoje mantém uma planilha" | removido, vai para a §12 | confunde disponibilidade com adoção; é a razão 2 do pré-mortem |

**Cota cumprida:** houve rebaixamento ou remoção em cada uma das quatro raízes. A bateria
derrubou quatro efeitos e rebaixou nove.

## 8. O que a máquina errou

Eu sou a máquina. Sete itens específicos desta rodada:

1. **Tentei medir sozinho o crescimento da área e falhei em silêncio.** Rodei quatro vezes uma
   contagem de submissões do arXiv por ano, pela API oficial, para ter um número de adoção que
   fosse meu e reproduzível. As quatro voltaram vazias — o ambiente desta sessão não tem rede
   para `curl`, só para as ferramentas de busca. **Se eu não tivesse conferido a saída, teria
   escrito "a produção da área cresce" sem número, ou pior, com um número plausível.** O mapa não
   tem nenhuma medida própria de volume de publicação, e a §3.4 diz isso.
2. **A ferramenta que leu o repositório do OASIS desconfiou do próprio resultado.** Ela reportou
   a última atualização como 19/08/2026 e acrescentou, por conta própria, "esta data futura
   parece ser um erro de dado" — porque o modelo que faz a leitura tem corte de conhecimento
   anterior a hoje. A data está certa; a ferramenta é que não sabe em que ano está. Usei o número
   e registro o episódio, porque o mesmo mecanismo poderia ter me feito **descartar** um dado
   correto por parecer futuro.
3. **Pedi números ao EconSimulacra e não vieram.** Quantos agentes, que validação: o PDF não
   entregou. A tentação era escrever "milhares de agentes", que é verdadeiro para quase qualquer
   plataforma dessas e portanto não é informação. Escrevi "nenhum número encontrado" na §3.1.
4. **O mesmo com o *Lost in Simulation*.** Abri o PDF, a conclusão veio, os números não. Cito a
   conclusão e digo que não tenho a cifra. É a fonte mais fraca da minha lista, e sustenta apenas
   o mecanismo de e7.
5. **A classe de referência que mais pesa neste mapa é a que eu não verifiquei.** CFD contra
   túnel de vento — trinta anos, deslocamento parcial, o túnel não fechou — eu escrevi de
   memória. Ela ancora o formato do mapa inteiro, o cenário provável da §9 e a remoção de dois
   efeitos na §7. **Não abri uma única fonte sobre ela.** Está marcada na tabela da §5 e é o
   primeiro item que eu mandaria conferir.
6. **Rebaixei um sinal depois de perceber que o apoiava em algo que não abri.** e10.1
   (reprodutibilidade bit-a-bit) saiu como `sinal: medio` na primeira versão, apoiado no "replay
   determinístico e artefato por hash SHA256" que o enunciado atribui ao `Luvoire`. Não consegui
   abrir o Luvoire — a busca combinada por ele, `y-not.social` e `Gestalt Village` devolveu só
   páginas genéricas de itch.io. Sem o artefato, o sinal virou `fraco`.
7. **Usei um número de terceira mão e o marquei como não-fonte.** Os "69% de mais de 3.000
   pesquisadores de mercado" aparecem num resumo de busca citando um survey de indústria de 2025
   que eu **não abri**. Ele é importante o bastante para a §3.4 que eu o deixei na tabela, mas
   com a origem declarada e **fora da §11**. Se ele estiver errado, a tesoura 69% × 8% — que é o
   achado mais citado deste mapa — desmorona.

## 9. Três cenários para 2056

**Provável — o estágio anterior.** É 2056. Nenhuma mudança relevante de recomendação, moderação
ou interface chega a usuário sem antes passar por uma população sintética versionada; a rodada
leva horas, custa menos que uma reunião e produz um envelope, não um número. E o teste A/B com
gente continua existindo, exatamente como o túnel de vento continuou existindo depois da dinâmica
dos fluidos computacional: mais caro, mais raro, reservado para o que a simulação notoriamente
erra. A pesquisa com pessoas encolheu, encareceu e se especializou — contrata-se o campo para
derrubar o resultado da simulação, não para produzi-lo. Na esfera pública a coisa é menos
resolvida: o regulador pede a rodada em alguns casos, aceita prosa na maioria, e houve pelo menos
um episódio ruidoso em que um resultado sustentou uma decisão e estava errado, depois do qual
reprodutibilidade bit-a-bit virou requisito de entrada. A população de cada país é objeto de
disputa: alguns institutos nacionais publicam a sua, a maioria usa a de terceiros, e ninguém está
inteiramente confortável com isso. *Sinal precoce de que estamos entrando aqui:* a primeira
plataforma grande a **assumir publicamente** que ensaia mudanças em população sintética antes de
lançar.

**Desejável — o instrumento com régua.** É 2056. A simulação social tem o que a estatística levou
um século para ter: um critério que diz onde ela vale. Não é geral — é por classe de pergunta,
com intervalo calculável, e existem perguntas declaradamente fora do alcance. Toda alegação
circula com a auditoria de robustez junto, e publicar a média sem o envelope é erro de forma, como
publicar estimativa sem erro-padrão. As populações nacionais são bens públicos auditáveis,
construídas com participação das comunidades que representam — constitutiva, não consultiva — e é
possível saber quem calibrou o quê. A pesquisa com pessoas não encolheu: mudou de função e
absorveu o que a simulação não faz, com mais prestígio e mais dinheiro. *O que teria de ser feito
para chegar lá:* o trabalho estatístico de W3, que hoje ninguém está fazendo, e a escolha
deliberada de tratar população sintética como infraestrutura pública em vez de produto. *Sinal
precoce:* um paper de estatística — não de HCI, não de processamento de linguagem — sobre garantia
de cobertura em população sintética.

**Indesejável — a evidência barata.** É 2056. Simular ficou trivial e validar não. Qualquer
alegação sobre comportamento coletivo pode ser produzida em uma tarde, com o resultado que se
quiser, e vem embrulhada numa narrativa de agentes que convence mais do que qualquer intervalo
de confiança conseguiria. A auditoria de robustez existe, é cara, e por isso só quem já tem razão
institucional a compra. As plataformas pararam de experimentar em usuário real nos casos que a
simulação cobre — o que soou como ganho ético e significou que o repertório público de evidência
sobre elas secou: não vaza mais nada, porque não há mais nada acontecendo em gente. Reguladores
recebem ensaios desenhados para passar, produzidos por auditoras pagas por quem é auditado. E a
sociedade que qualquer um consulta quando quer saber o que "as pessoas" acham é uma sociedade
calibrada em texto de outro país, que atribui 67% da variação a uma variável que explica 1,5% —
e ninguém confere mais, porque conferir exige gente, e gente ficou cara. *O sinal precoce:* o 8%
de uso regular entre pesquisadores de UX subir depressa **sem** que os números de validade
publicados tenham melhorado. Se a adoção descolar da validação, é este o cenário.

## 10. O experimento

**O que é.** *A mesma pergunta, três populações.* Monta-se uma sociedade simulada pequena — 30 a
60 agentes — que responde a **uma** pergunta para a qual existe medida real publicada e
acessível (uma questão de survey brasileiro com microdado público serve, e é onde entra o IBGE).
A mesma pergunta é respondida em três configurações:

- **(a) persona demográfica** — idade, renda, escolaridade, região;
- **(b) persona + uma biografia curta** — meia página de texto sobre a vida daquele agente;
- **(c) persona + biografia + conversa** — os agentes conversam entre si por N rodadas antes de
  responder.

E aqui está a parte que faz do experimento um experimento e não uma demonstração: **cada
configuração é rodada com cinco sementes e três formatos de prompt diferentes**, e o que se
reporta é o **envelope** — a faixa inteira de resultados —, nunca a média.

**Que pergunta sobre o futuro ele ajuda a responder.** Duas, encadeadas. Primeira: *a conversa
entre agentes aproxima ou afasta do real?* Ou seja — a parte "sociedade" da sociedade simulada
acrescenta alguma coisa, ou o agregado de indivíduos independentes já seria melhor? Segunda, e
mais importante: *o instrumento é estável o bastante para medir o que diz medir?* Se o envelope
de uma configuração engolir a diferença entre as três configurações, então a escolha de desenho
não importa — o que importa é a sorte da semente, e a simulação não está medindo nada.

**Que tecnologia emergente usa, e por que não dá com a madura.** Usa agente com modelo de
linguagem: memória, biografia em texto corrido, conversa entre agentes em língua natural. Com
modelagem baseada em agentes clássica (NetLogo, regras fixas) a configuração (c) é impossível de
montar honestamente, porque ali **você teria de escrever a regra de como a conversa muda a
opinião** — e essa regra é exatamente o que o experimento quer medir. É a diferença entre supor
o mecanismo e observá-lo. A configuração (a) sozinha, aliás, é factível com tecnologia madura, e
por isso ela está no desenho: é o grupo de controle que diz quanto o emergente acrescenta sobre
o maduro.

**O que a turma faz ao testar em sala.** Cada dupla recebe **uma** variação para mexer — formato
da persona, ordem das perguntas, número de rodadas de conversa, modelo usado — e roda. Ao final,
a sala junta os envelopes num quadro único. O produto da aula **não é a média da turma**: é a
dispersão. A pergunta que se responde coletivamente é "quanto do resultado veio da sociedade
simulada e quanto veio de como cada dupla a configurou?". Se quatorze duplas produzem quatorze
faixas que se sobrepõem, o instrumento é estável. Se produzem quatorze faixas disjuntas, a turma
reproduziu, em uma aula, o achado de Ye e colegas — e passou a saber por experiência o que a
frase "76 pontos percentuais" quer dizer.

**O resultado que me faria mudar de ideia.** Se o envelope sobre sementes e formatos for
**menor** que a diferença entre as três configurações — isto é, se a escolha de desenho dominar o
ruído —, então a simulação social é um instrumento mais estável do que a literatura crítica de
2026 sugere, este mapa subestimou a adoção em toda a linha, e e5, e9 e e1 deveriam andar cinco a
dez anos para trás. Seria, na prática, um sinal precoce do wildcard W3. Se o envelope engolir a
diferença, o mapa está calibrado e a §7.3 estava certa em empurrar os prazos.

## 11. Fontes

Só o que eu **abri e li** nesta rodada. Resultado de busca que não foi aberto está na §12, não
aqui.

1. `https://arxiv.org/abs/2411.10109` — *LLM Agents Grounded in Self-Reports Enable
   General-Purpose Simulation of Individuals*, Park, Zou e outros; submetido 15/11/2024, revisto
   28/06/2026. **Sustenta:** os números que separam persona demográfica de pessoa simulada (1.052
   participantes, entrevistas de 2h, 83%/82%/86% contra 74% da linha de base); a pré-condição de
   R1; o mecanismo de e1.1. **Confiabilidade:** alta — preprint de grupo que produziu o marco
   fundador da área, com amostra nacional e comparação contra teto de teste-reteste, que é a
   régua correta.

2. `https://arxiv.org/html/2607.26348` — *When Synthetic Users Fail: A Cross-Domain Benchmark of
   LLM-Simulated Human Survey Responses*, Chen, Zhu e Zheng; 28/07/2026. **Sustenta:** a queda de
   11 a 22 pontos percentuais no WVS; a superdeterminação (67% × 1,5%); o alvo errado em 50% e
   72% dos casos; os mecanismos de e2 e e11. **Confiabilidade:** alta para o que afirma, com uma
   ressalva declarada pelos próprios autores — está em revisão por pares, não revisado.

3. `https://arxiv.org/abs/2605.18890` — *Stop Drawing Scientific Claims from LLM Social
   Simulations Without Robustness Audits*, Ye, Cao, Chen e Ferrara; 17/05/2026. **Sustenta:** os
   76 pontos percentuais de deslocamento por perturbação de persona; o contraste 76 × 1 entre
   modelos; o TRAILS; os mecanismos de e1.2, e3.1.1 e todo o desenho do experimento da §10.
   **Confiabilidade:** alta — laboratório com histórico longo em desinformação computacional, e a
   alegação é sobre o próprio método, não sobre o mundo.

4. `https://arxiv.org/abs/2502.08691` — *AgentSociety: Large-Scale Simulation of LLM-Driven
   Generative Agents*, Piao e outros; 12/02/2025, revisto 10/04/2026. **Sustenta:** mais de 10 mil
   agentes, 5 milhões de interações, os cinco temas de política pública testados; a âncora de R3.
   **Confiabilidade:** média — os números de escala são verificáveis, mas a alegação central
   ("reproduz cinco experimentos reais") é auto-reportada e a página do abstract não declara
   limitação nenhuma, o que é em si um sinal.

5. `https://github.com/camel-ai/oasis` — OASIS, CAMEL-AI. **Sustenta:** um milhão de agentes, 21
   ações, recomendador no laço, 5,1 mil estrelas e 627 forks, atualização de 19/08/2026, e —
   sobretudo — a conta de tokens e custo por passo, que é o que sustenta a premissa escondida nº 2
   da §7.5. **Confiabilidade:** alta para o que é (código instalável e documentação de custo),
   média para a alegação de escala, que é capacidade declarada e não resultado demonstrado.

6. `https://arxiv.org/html/2604.07838v1` — *We Need Strong Preconditions For Using Simulations In
   Policy*, Luo, Arora e Guirado (UC Berkeley); 09/04/2026. **Sustenta:** as três precondições; a
   proposta de relatório de simulação (SF2 e e1.2.1); o duplo uso que vira W4; o dado de 26% de
   eleitores com visão positiva sobre IA. **Confiabilidade:** média — é artigo de posição, não de
   evidência; vale pelo argumento e pela proposta concreta, não por medida.

7. `https://arxiv.org/pdf/2601.17087` — *Lost in Simulation: LLM-Simulated Users are Unreliable
   Proxies for Human Users in Agentic Evaluations*, Seshadri, Cahyawijaya, Odumakinde, Singh e
   Goldfarb-Tarrant; 29/01/2026. **Sustenta:** o mecanismo de e7 (a pesquisa humana se especializa
   no resíduo). **Confiabilidade:** baixa **neste documento**, não por culpa do paper: não consegui
   extrair os números dele, então uso só a conclusão do título e do resumo. É a fonte mais fraca
   da lista.

8. `https://arxiv.org/pdf/2606.26883` — *EconSimulacra: A Digital Twin Platform of Socio-Economic
   Systems Powered by LLM Agents*, Hashimoto, Kaneko, Ueda, Takayanagi e Izumi; versão de
   01/07/2026. **Sustenta:** apenas a existência de plataforma de gêmeo digital socioeconômico com
   agentes de linguagem, citada na §3.1. **Confiabilidade:** não avaliável — não obtive número
   nenhum do documento, e digo isso no corpo do texto em vez de preencher com plausibilidade.

9. `https://developmentcorporate.com/product-management/synthetic-users-in-2026-why-97-of-researchers-use-ai-but-only-8-trust-ai-generated-participants/`
   — análise do relatório *State of Synthetic Users*, da User Interviews (desenho e condução de
   Roberta Dombrowski), maio de 2026. **Sustenta:** 150 respondentes, 93% pesquisadores de UX, 62%
   em empresa média ou grande; 97% usam IA, 81% com regularidade, 8% usam participante sintético
   com regularidade, 28% recusam ativamente; 47% céticos, 17% contrários, 3,3% entusiastas. É a
   base da tesoura da §3.4 e do sinal fraco SF5. **Confiabilidade:** média — é comentário sobre o
   relatório, não o relatório; a amostra é de conveniência e pequena (150), e a plataforma que
   encomendou vive de recrutar humanos, o que é conflito de interesse declarável. Os números
   internos são consistentes e os dados brutos anonimizados foram publicados, o que ajuda.

## 12. Anexo — o levantamento bruto

### 12.1 Saída do verificador

Colada inteira, com números, logo abaixo — ver §12.9.

### 12.2 Premissas assumidas onde o briefing não decidiu

O `briefing:` cobriu as sete perguntas do §0 da skill, então **não houve rebaixamento de
confiança por falta de entrevista**. O que ele não cobriu, e eu assumi, está na tabela da §2:
(a) a fronteira com os temas vizinhos 5, 7 e 9; (b) o conjunto de classes de referência; (c) a
regra de que "fonte" significa documento efetivamente aberto. A `confianca: baixa` do
frontmatter **não** é penalidade de processo — é a avaliação honesta de um mapa com horizonte de
trinta anos, justificada na §7.3.

### 12.3 Os quatro efeitos removidos pela bateria da §7

1. **"A pesquisa de opinião tradicional desaparece"** (era 1ª ordem de R1). *Removido pelo teste
   da causa solta:* a pesquisa de opinião por telefone e painel já está em crise por queda de taxa
   de resposta, há mais de quinze anos, sem nenhuma relação com simulação. Se ela morrer, terá
   morrido por outro motivo, e atribuir isso a esta raiz seria roubar crédito de uma causa alheia.
   O que sobra do efeito legítimo está em e1 e e1.1.
2. **"O teste A/B com humanos desaparece"** (era 1ª ordem de R2). *Removido por extrapolação
   linear e por contradizer a classe de referência central.* A dinâmica dos fluidos computacional
   não fechou os túneis de vento em trinta anos; a simulação não fecha o A/B em trinta. O efeito
   sobrevive na forma correta como e5 (ensaio **antes** do A/B) e e8 (encolhimento **seletivo**).
3. **"Organismos multilaterais adotam sociedade sintética em negociação climática"** (era 1ª
   ordem de R3). *Removido por ser enredo, não wildcard:* não consigo escrever o mecanismo. A
   negociação climática já tem modelo — modelo climático — e é justamente sobre o modelo que ela
   briga. Não sei dizer o que a sociedade sintética acrescentaria, e um efeito cujo mecanismo eu
   não sei escrever não entra.
4. **"Toda pessoa mantém uma sociedade sintética pessoal como hoje mantém uma planilha"** (era 1ª
   ordem de R4). *Removido por confundir disponibilidade com adoção.* É a razão nº 2 do
   pré-mortem, e o exemplo que a derruba é a própria planilha: ela barateou a modelagem financeira
   e a maioria das pessoas nunca modelou nada. O que sobra de legítimo está em e12 (é **possível**)
   e e12.2 (quem **quer** um resultado vai rodar um).

### 12.4 Efeitos considerados e não incluídos, com o motivo

- *"Cursos e currículos se reorganizam em torno de simulação."* Recusado pela lista de proibidos
  do §3 da skill: serve para qualquer tema. A versão que sobreviveu (e12.1) nomeia o tipo de
  disciplina, o exercício substituído (estudo de caso), o mecanismo (rodar custa o mesmo que abrir
  uma página) e o precedente (o lugar que o NetLogo já ocupa).
- *"Surge a profissão de calibrador de população."* Mesmo motivo. A versão que sobreviveu
  (e7.1.1) não cria profissão: muda a **encomenda** feita a uma profissão existente — contrata-se
  o campo para falsificar, não para levantar.
- *"Reguladores criam uma categoria legal nova para simulação."* Mesmo motivo, e pior: assume o
  regulador como deus ex machina. A versão que sobreviveu (e9) parte de um instrumento que **já
  existe e já está em execução** (artigo 34 do DSA) e pergunta apenas quando prosa deixa de bastar.
- *"A ética de pesquisa passa a se aplicar a agentes."* Esta é uma das três perguntas do enunciado
  do tema e eu **não** a transformei em efeito, deliberadamente. Não encontrei mecanismo: o que a
  literatura de 2026 discute é consentimento de quem **gerou o texto de treino** e de quem
  **interage** com o agente — os dois humanos —, não estatuto moral do agente. Deixo registrado
  como pergunta boa para a aula e como buraco declarado deste mapa.
- *"O custo energético da simulação em massa vira tema."* Não achei número que ligasse simulação
  social a consumo agregado. Virou premissa escondida (§7.5, item 2) e a declaração de casela
  vazia no eixo Ecológico do STEEP.

### 12.5 O que a turma levantou e eu NÃO consegui abrir

Registro com a lista inteira, porque a ausência é informação. Não abri, e portanto nenhum efeito
deste mapa depende deles: `Luvoire` (grade 60×60, até 10 mil agentes, replay determinístico,
artefatos por hash SHA256), `y-not.social` (rede social povoada por agentes), `Gestalt Village`
(vila rodando inteira no navegador), `Argentor` (dez personagens com diário próprio),
`NeuroForge`, `DisasterReliefOps`, `agent-inspect` (Gini, riqueza e poder em tempo real), `Rath`.
A busca combinada por `"y-not.social" OR "Gestalt Village" OR "Luvoire"` devolveu apenas páginas
genéricas de listagem do itch.io — a própria ferramenta de busca respondeu que não encontrou os
três títulos. **Consequência concreta:** rebaixei e10.1 de `sinal: medio` para `fraco`, porque o
sinal estava apoiado no replay determinístico do Luvoire.

Também não verifiquei o achado do aluno de que **2 de 7.776 anúncios** em dois grandes diretórios
comerciais de IA eram sobre simulação. É um número excelente e é dele; se for confirmado, é a
melhor evidência isolada de que simulação é instrumento e não produto. Não o uso em lugar nenhum
do mapa.

### 12.6 Leads que apareceram na busca e NÃO foram abertos

Não entram na §11 e não sustentam nada acima. Ficam aqui porque são o caminho da próxima rodada:

- `arxiv.org/abs/2304.03442` — *Generative Agents: Interactive Simulacra of Human Behavior*, Park
  et al., UIST 2023. **Este é o marco fundador e eu não o abri nesta rodada** — descrevo-o na §3.1
  a partir de resumo de busca e do que é consenso público. É a lacuna mais constrangedora da
  minha §11.
- `arxiv.org/abs/2312.03664` — Concordia (Google DeepMind), modelagem generativa baseada em
  agentes com Game Master.
- `arxiv.org/abs/2411.11581` — o paper do OASIS (abri o repositório, não o paper).
- `dl.acm.org/doi/10.1145/3800683` — *From Individual to Society: A Survey on Social Simulation
  Driven by LLM-based Agents*, ACM Computing Surveys, v. 58, n. 11, art. 280, 41 páginas,
  17/04/2026. Seria a melhor fonte única para a §3; não abri e não sei quantos trabalhos revisa.
- `dl.acm.org/doi/full/10.1145/3772363.3778738` — PoliSim@CHI 2026.
- `doi.org/10.1145/3772363.3778756` — workshop do CHI 2026 sobre padrões e documentação para uso
  de modelos como participantes simulados de pesquisa.
- `arxiv.org/abs/2512.10106` — simulador de coevolução recomendador/rede calibrado em Mastodon e
  validado contra Bluesky com 4 a 6% de erro estrutural. **Este número sustenta o mecanismo de e5
  e vem de resumo de busca, não de leitura.** É a segunda lacuna mais séria.
- `arxiv.org/abs/2603.19649` — PolicySim, sandbox de simulação social para otimização proativa de
  política.
- `arxiv.org/abs/2604.09549` — *Beyond Offline A/B Testing: Context-Aware Agent Simulation for
  Recommender System Evaluation*.
- `arxiv.org/abs/2607.00910` — *Calibrating the Instrument: Controllability of an LLM-Driven
  Synthetic Population*.
- `arxiv.org/abs/2506.19806` — *LLM-Based Social Simulations Require a Boundary*.
- `arxiv.org/abs/2608.07519` — *From Survey Personas to LLM Agents*, preferência por política de
  mobilidade.
- `cms-digitallaws.com/en/dsa/article-34/` e `ppc.land/systemic-risk/` — texto e comentário do
  artigo 34 do DSA. **Toda a base de R3 depende do meu entendimento do artigo 34 e eu não abri o
  artigo.** Terceira lacuna séria, e a mais fácil de corrigir.
- `agenciabrasil.ebc.com.br` (programa de inteligência do IBGE, junho de 2025),
  `gov.br/mcti` (Plano Brasileiro de IA), `regrasp.spo.ifsp.edu.br` (revisão sistemática
  brasileira sobre gêmeos digitais, 2003–2025) — a base da nota sobre o Brasil, toda por resumo.

### 12.7 As buscas feitas, e as que não deram em nada

Doze buscas, em português e inglês. As que renderam: agentes generativos de Stanford; OASIS;
AgentSociety; usuários sintéticos e a crítica a eles; Concordia; simulação social com agentes em
português; teste de recomendador antes do lançamento; simulação e política pública com população
sintética; modelos locais no navegador com WebGPU; ética de pesquisa com participante simulado;
adoção de usuário sintético na indústria de UX; modelo epidemiológico de agentes como classe de
referência.

**As que não deram em nada:**

- `"y-not.social" OR "Gestalt Village" OR "Luvoire" agent simulation itch.io` — zero resultados
  sobre os três; só listagens genéricas. Documentado na §12.5.
- `simulação social agentes LLM sociedade sintética pesquisa 2026` (em português) — devolveu
  literatura internacional, **nenhum trabalho brasileiro** de simulação social com agentes de
  linguagem. Ou não existe, ou não está indexado onde busquei.
- `Brasil simulação agentes IA política pública gêmeo digital sociedade IBGE 2026` — devolveu
  política de IA e gêmeo digital urbano, **nada sobre sociedade sintética brasileira**. Esta é a
  ausência mais interessante do levantamento inteiro: o Brasil tem microdado de qualidade
  incomum e nenhum instrumento aparente para usá-lo assim. Se o mapa estiver certo sobre e11, é
  um buraco de oportunidade — e, se estiver errado, é porque brasileiro nenhum vai construir isso
  e vamos usar a população calibrada de outra pessoa.
- Contagem própria de submissões do arXiv por ano, via API oficial (quatro tentativas, duas
  formulações de consulta) — **retornou vazio nas quatro**, por falta de rede no ambiente. Sem
  medida própria de volume de publicação. Documentado na §8, item 1.

### 12.8 Nota sobre o horizonte de 2056

Este mapa foi escrito com horizonte de **trinta anos**, e isso muda o comportamento de dois
controles do método, o que registro para quem for comparar esta rodada com as de 2036, 2041 e
2046 do mesmo tema:

1. **O teste "prazo × horizonte" para de exercer pressão.** Nada cai fora de uma janela de trinta
   anos, então o verificador vai reportar zero violações em todas as ordens — e isso não significa
   calibração boa, significa teste inócuo. Ver §7.3.
2. **Nenhuma classe de referência disponível cobre trinta anos com precisão.** A mais longa que
   consegui usar (CFD × túnel de vento) cobre justamente trinta — e é a única que **não
   verifiquei**. Todos os prazos depois de ~2045 neste mapa são, honestamente, ordenações relativas
   ("isto vem depois daquilo") disfarçadas de anos. Leia-os assim.

### 12.9 Saída do verificador, inteira

