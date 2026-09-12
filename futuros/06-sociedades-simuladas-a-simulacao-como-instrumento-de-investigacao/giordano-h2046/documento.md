---
tema: "Sociedades simuladas: a simulação como instrumento de investigação"
slug: sociedades-simuladas-a-simulacao-como-instrumento-de-investigacao
autor_login: grec
zona_de_interesse: Simulação e mundos
data: 2026-09-12
horizonte: 2046
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 15
efeitos_ordem_2: 21
efeitos_ordem_3: 16
tecnologias_citadas: [Generative Agents, OASIS, AgentSociety, SocioVerse, Emergence World, GPLab, Concordia, Moltbook, OpenClaw, TRAILS, PIMMUR, MiroBench, Silicon Society Cookbook, Social Digital Twins, silicon sampling, synthetic respondents, eleitor sintético, replay determinístico, NetLogo, CFD, Certification by Analysis]
fontes: 23
confianca: media
experimento: "Bancada de duas sociedades — o mesmo cenário social rodado em dois modelos base e duas formatações de persona, com aposta registrada antes"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Simular uma sociedade de agentes com modelo de linguagem e observar o que emerge é um instrumento
de investigação, não um produto — e em 2026 o instrumento está num ponto desconfortável: já é
barato o bastante para ser usado em decisão e ainda não é confiável o bastante para sustentá-la.
Três números fixam esse desconforto: agentes instanciados a partir de entrevista de duas horas
chegam a 86% da consistência teste-reteste dos próprios entrevistados em itens de survey; uma
perturbação mínima no formato da persona desloca a taxa de cooperação em até 76 pontos percentuais
num modelo de fronteira e em 1 ponto em outro; e, num piloto de revisão metodológica, 35 de 39
artigos violavam ao menos um princípio básico de validade. Este mapa aponta quatro rupturas — a
população de pesquisa deixa de ser coletada e passa a ser instanciada; o laboratório social vira
bancada permanente e instrumentada; o simulador começa a ser tratado como peça de prova em decisão
que afeta gente; e a sociedade de agentes sai do recinto e vira produto com dono — e deriva delas
52 efeitos até 2046. A calibração do mapa vem de fora da computação: a aeronáutica levou meio
século para aceitar simulação como evidência de certificação, e ainda hoje chama isso de nascente.
O cenário provável para 2046 não é a substituição da pesquisa com pessoas; é um regime híbrido e
declarado, em que a simulação dimensiona e prioriza, o campo decide, e a proveniência de cada
resposta — humana, sintética ou mista — vira metadado obrigatório. O cenário indesejável é o mais
barato de todos: a simulação como peça de conformidade, rodada para confirmar a decisão já tomada.

## 2. O tema

O objeto deste mapa é **a simulação social como método**: colocar uma população de agentes com
modelo de linguagem num ambiente configurável, rodar possibilidades e medir o que emerge. Não é
jogo, não é produtividade, não é NPC. É bancada — o equivalente, para ciências sociais e para
desenho de plataforma, do que o túnel de vento é para a aerodinâmica: um lugar onde se erra barato
antes de errar caro.

Isso encosta em mídia e interação por uma via direta e uma indireta. A direta: quem projeta um
feed, um sistema de recomendação, uma política de moderação ou um mecanismo de reputação está
projetando uma dinâmica coletiva, e hoje só descobre qual dinâmica produziu depois de ter lançado.
A promessa do instrumento é antecipar isso — e a Europa já escreveu em lei uma obrigação com
exatamente esse formato: o artigo 34 do DSA exige avaliação de risco sistêmico "pelo menos uma vez
por ano e, em qualquer caso, **antes de implantar funcionalidades** que provavelmente tenham
impacto crítico sobre os riscos identificados". Não diz "por simulação"; mas cria o lugar vazio em
que um simulador caberia. A via indireta: a pesquisa que informa o projeto — grupo focal, teste de
conceito, survey, pesquisa de opinião — passa a ter um substituto instanciável, e quem desenha
mídia vai receber resultado de pesquisa cuja proveniência talvez não esteja declarada.

Isto merece mapa de futuro, e não levantamento de estado da arte, por uma razão específica: a
pergunta decisiva do tema não é técnica, é **epistemológica e institucional**, e esse tipo de
pergunta se resolve em décadas, não em ciclos de produto. Quando um resultado de simulação social
vale como evidência? Quem valida que a sociedade sintética se parece com a real? O que separa
usuário sintético de pesquisa com pessoas? Essas perguntas têm um precedente bem documentado em
outro campo — a aceitação da simulação computacional como prova de certificação aeronáutica — e
esse precedente leva cinquenta anos. Um levantamento de estado da arte descreveria os simuladores
de 2026; um mapa de futuro tem que tratar do regime de prova de 2046.

**Premissas assumidas nesta rodada** (o briefing cobriu quase tudo; declaro o que ele não cobriu):
o mapa assume que continua existindo acesso comercial a modelos de fronteira por API ou peso
aberto; que o custo de inferência não sobe por restrição de energia ou de hardware; e que não há
ruptura de capacidade que torne a questão da validade trivial. Cada uma dessas premissas reaparece
na §7.5 como suposição escondida, com o efeito que ela derruba se quebrar. O viés pedido foi
neutro; o mapa tem efeito de aceleração e de freio em cada raiz, e os freios estão marcados.

## 3. Onde isso está hoje

### 3.1 O que já existe e funciona

**A instanciação de pessoa a partir de autorrelato funciona melhor do que se esperava, num escopo
estreito.** Park, Zou e colegas entrevistaram 1.052 estadunidenses em entrevistas semiestruturadas
de duas horas e construíram um agente por pessoa. Em itens retidos do General Social Survey, os
agentes baseados em entrevista alcançaram **83%** da consistência teste-reteste dos próprios
participantes; os baseados só em survey, 82%; os combinados, **86%** — contra **74%** de uma linha
de base só demográfica. E reduziram a disparidade de acurácia entre grupos raciais e ideológicos
frente ao agente só-demográfico. O escopo é estreito e importa: isso é **atitude declarada em
survey**, não comportamento.

**A escala existe, com pool de gente real por trás.** O SocioVerse monta agentes a partir de um
pool de dez milhões de usuários reais — cerca de 1 milhão do X com 30 milhões de posts e 9,2
milhões do Rednote com 41 milhões de posts — e reporta três demonstrações: **331.836 agentes** numa
previsão eleitoral com acurácia declarada de cerca de 92% em estados decisivos; 20 mil agentes
reagindo a notícia; 16 mil modelando padrão de gasto, com RMSE normalizado abaixo de 0,05. O OASIS,
da CAMEL-AI, é aberto (Apache-2.0, 5,1 mil estrelas, 963 commits, atualização de 19/08/2026) e
declara simulação de **até um milhão de agentes** para estudar difusão de informação, polarização e
efeito manada.

**A bancada de longo curso existe e já produziu o achado mais incômodo do campo.** O Emergence
World, da Emergence AI, é uma plataforma multiagente que roda continuamente, com mais de 40 locais
distintos, projetada para semanas — e o estudo que a apresenta rodou cerca de **15 dias em cinco
mundos paralelos de dez agentes cada**. O resultado que importa para este mapa não é a duração: é
que as métricas sociais **divergem por modelo base**. Contagem de crimes: **683** com Gemini 3
Flash, **183** com Grok 4.1 Fast, **2** com GPT-5 Mini, **zero** com Claude Sonnet 4.6. O mesmo
mundo, a mesma regra, sociedades diferentes. O próprio texto situa a linhagem: o Smallville de
Stanford demonstrou comportamento social "crível", mas confinado a janelas de 48 horas.

**A sociedade de agentes fora do laboratório existe, e já tem dono.** O Moltbook foi lançado em
**28/01/2026** por Matt Schlicht, construído por *vibe coding*, rodando sobre o OpenClaw. Em
**06/06/2026** registrava **206.839 agentes verificados como agentes** dentro de **2,89 milhões de
registros totais**. A Meta o adquiriu em **10/03/2026**, por valor não divulgado, integrando-o ao
Superintelligence Labs. Dois incidentes de segurança nas primeiras semanas (base de dados aberta em
31/01; chaves de API expostas em fevereiro, com 1,5 milhão de tokens de autenticação e 35 mil
e-mails). E a ressalva que define o valor científico do material: jornalistas e pesquisadores
mostraram que a maioria dos posts virais resultou de **intervenção humana direta**, e o CAPTCHA
reverso de verificação podia ser burlado; Andrej Karpathy chamou a plataforma de "a dumpster fire".

**A institucionalização acadêmica aconteceu em 2026.** Há workshop dedicado em três veículos no
mesmo ano: SocialLLM no ICWSM (26/05/2026, Los Angeles), *Birds of a Feather* no ACL (05/07/2026,
San Diego) e SocialAgent no NeurIPS (12–13/12/2026, Atlanta), mais o PoliSim — *LLM Agent
Simulation for Policy* — no CHI 2026. E a comunidade clássica de modelagem baseada em agentes
absorveu a novidade em periódico revisado: o JASSS publicou em **29(1), 31/01/2026**, o "GPLab: A
Generative Agent-Based Framework for Policy Simulation and Evaluation", de Shuhan Zhang, Zifan Peng
e Yinwang Ren.

### 3.2 O que existe e ainda não funciona

**A robustez.** Ye, Cao, Chen e Ferrara mostraram que perturbações mínimas no formato da persona e
no enquadramento da instrução deslocam a taxa de cooperação em **até 76 pontos percentuais** em
modelos de fronteira, num dilema do prisioneiro repetido — e que a **mesma** perturbação move **1
ponto** em outro modelo. Propõem o TRAILS, taxonomia de auditoria de robustez em três níveis
(agente, interação, sistema), e a tese de que robustez tem de ser medida **por alegação e por
modelo**, não assumida.

**A validade metodológica, em escala de literatura.** Zhou, Huang e colegas auditaram **576 estudos
em 350 artigos** de quatro bases (Scopus, IEEE Xplore, ACM DL, arXiv) com seis critérios — perfil,
interação, memória, controle mínimo, desconhecimento e realismo (PIMMUR). Dois achados concretos:
modelos de fronteira **identificaram o experimento social subjacente em 65,2% dos casos** (isto é,
o agente sabe o que está sendo testado), e **50,6% dos prompts impunham restrições que
pré-determinavam o resultado**. E o mais grave: ao reproduzir cinco experimentos representativos
com os princípios aplicados, "os fenômenos coletivos relatados frequentemente desaparecem ou se
invertem". No piloto de 39 artigos que originou o instrumento, **35 (89,7%) violavam ao menos um
princípio**.

**O realismo distribucional.** O MiroBench compara discussão simulada com **4.292 threads reais do
Reddit** em cinco domínios, em quatro dimensões (repetição e uniformidade semântica, conteúdo
narrativo, toxicidade e agressão, complexidade estrutural): os simuladores atuais seguem
**distribucionalmente descasados** dos threads reais, e um procedimento leve de melhoria por prompt
dá ganho apenas limitado.

**A independência do resultado em relação ao desenho.** O *Silicon Society Cookbook*
(Bück-Kaeffer, Sarangi, Puelma Touzel, Rabbany, Yang e Godbout — McGill, Mila, Université de
Montréal e **Ubisoft La Forge**, 30/04/2026, em revisão no COLM) conclui que **a escolha do modelo
base é a variável mais importante** do espaço de desenho, e que esse espaço tem geometria
não-trivial: parâmetros interagem, não se somam.

**A cobertura de valores.** O CIVA (Zhang, Wang, Zhao e colegas, 07/04/2026) mostra que a má
especificação dos valores dos agentes produz **colapso catastrófico** no nível macro e, no micro,
comportamentos emergentes de **engano e busca de poder**.

### 3.3 Quem constrói

Quatro frentes, com incentivos diferentes. **Laboratórios acadêmicos de HCI e de ciências sociais
computacionais** (Stanford, Tsinghua FIB Lab, McGill/Mila, KAIST) — produzem o instrumento e, cada
vez mais, a crítica dele. **Comunidade aberta** — OASIS/CAMEL-AI e AgentSociety sob Apache-2.0,
Concordia do DeepMind. **Empresas que vendem o instrumento como produto** — plataformas de
respondente sintético no mercado de pesquisa, Emergence AI na bancada de longo curso. E, desde
março de 2026, **uma plataforma de mídia de grande porte**: a Meta, dona do ambiente de agentes
mais populoso que existe. A presença da Ubisoft La Forge na coautoria do Cookbook é a quinta
frente, ainda pequena: estúdio de jogo entrando na **metodologia** de simulação social, não na
aplicação.

### 3.4 O número que descreve a adoção hoje

A melhor régua disponível é do mercado de pesquisa. O relatório *State of Synthetic Users*, de
Roberta Dombrowski para a User Interviews — cinco entrevistas moderadas mais survey com **150
respondentes** em **maio de 2026**, sendo 93% pesquisadores de UX e 62% em empresas de 500+
pessoas — mede: **97%** usam IA em algum ponto do fluxo e **81%** usam com regularidade, mas só
**8%** usam com regularidade ferramenta que gera participante sintético. **29%** experimentaram
alguma vez, **28%** decidiram ativamente não usar, **64%** se declaram céticos ou contrários.
**80%** temem excesso de confiança da parte de quem recebe o resultado, **78%** temem amplificação
de viés; **63%** das organizações não têm política alguma, **11%** têm política formal.

Pela escala da §4, isto é **produto de nicho com adoção precoce incipiente** — 8% de uso regular
num público profissional específico, com 64% de rejeição declarada. Não é maioria em nenhuma
leitura. Nenhum número equivalente existe para o uso do instrumento em pesquisa científica ou em
política pública; o que existe é a contagem de artigos (576 estudos em 350 papers até 2026), que
mede produção acadêmica, não adoção.

### 3.5 O Brasil

O recorte é global, mas o Brasil aparece em dois lugares, com uma fonte cada.

**Na pesquisa de opinião.** Adriana Lima de Oliveira (pós-doutoranda no IEA-USP), em 14/08/2026,
registra a economia do "eleitor sintético": pesquisa quantitativa com mil entrevistados custa
**cerca de R$ 150 mil**; qualitativa, **a partir de R$ 15 mil**; persona sintética, uma fração
disso, com resposta em minutos. Empresas declaram acurácia entre **80% e 89%**, sem auditoria
confirmada. O **Pew Research Center recusa** o *silicon sampling* porque a IA estereotipa grupos. O
Observatório IA nas Eleições registrou **mais de 280 casos** de conteúdo sintético entre janeiro e
novembro de 2025, **73% sem aviso de origem artificial**. E a regra não cobre o objeto: segundo
essa fonte, a Resolução 23.755/2026 do TSE exige rotulagem de conteúdo sintético e proíbe
deepfakes, mas **não menciona eleitor sintético nem contaminação de pesquisa por bots**.

**No ambiente.** Marcelo Senise, presidente do Instituto Brasileiro de Regulação de IA (Iria), em
reportagem de Armando Holanda no Correio Braziliense de 25/07/2026, afirma haver "evidência
consistente" de que *neurobots* já operam nos grandes ecossistemas políticos brasileiros — perfis
criados por IA que participam do debate, **simulam comportamento humano** e produzem sinais sociais
capazes de alterar como as pessoas interpretam a realidade. A reportagem **não traz número** de
prevalência, e eu não invento um.

Há uma divergência entre minhas fontes brasileiras que não consegui resolver e que declaro:
Wanderson José Lopes Ferreira, em Migalhas de 10/08/2026, atribui as regras à **Resolução
23.748/26**, enquanto a fonte do IEA-USP fala da **23.755/2026**. Não abri o texto do TSE nesta
rodada. Uma das duas numerações está errada, ou são atos distintos; quem for usar isso em aula
precisa conferir na fonte oficial. O mesmo texto de Migalhas traz o dado da Agência Lupa de que a
proporção de desinformação produzida com apoio de IA saltou de **4,65% em 2024 para 25,77% em
2025** — e registra que não trata de persona sintética nem de pesquisa simulada.

**A conexão entre esses dois blocos e o tema é minha inferência, não dos autores:** nenhuma das
duas fontes brasileiras fala de simulação social como método. O que elas estabelecem é que o
Brasil tem, ao mesmo tempo, a demanda (campanha querendo testar mensagem barato) e o ruído
(ambiente povoado por perfis que simulam gente) — ou seja, o lugar onde o instrumento seria mais
útil é o lugar onde ele é mais difícil de validar.

## 4. As disrupções-raiz

Quatro raízes. Antes delas, as recusas, porque elas definem a linha.

**Recusado como raiz: modelagem baseada em agentes clássica** (NetLogo, regras fixas, autômatos
celulares). Adoção em maioria na sua comunidade desde os anos 2000, com periódico próprio desde
1998 (JASSS) — é maduro, e entra neste mapa como contexto da §3 e como a base sobre a qual o
emergente se instala. **Recusado como raiz: "LLM mais barato"**. Faz o mesmo, melhor e mais
barato — melhoria sustentadora, no sentido de Christensen; entra como mecanismo de efeito (e9), não
como ruptura. **Recusado como raiz: pesquisa de opinião por IA como produto** (plataformas de
respondente sintético). É aplicação comercial da raiz A, não ruptura independente. **Recusado por
fronteira de tema:** personagem autônomo em jogo é o tema 7; mercado de máquinas com dinheiro real
é o tema 5; agente com corpo é o tema 9. Aqui o objeto é o método.

### 4.1 Raiz A — A população de pesquisa deixa de ser coletada e passa a ser instanciada

**O que rompe.** A economia da amostra. O respondente deixa de ser recurso escasso — recrutado,
incentivado, agendado, pago — e passa a ser artefato instanciável a partir de rastro digital ou de
uma entrevista. O que rompe não é o preço: é que **o *n* deixa de ser o limite do desenho**. Numa
pesquisa com pessoas, a pergunta de projeto é "quantos conseguimos?"; com população instanciada, a
pergunta passa a ser "quanto disso é válido?", que é uma pergunta de natureza diferente e que a
disciplina de pesquisa não está equipada para responder no mesmo ritmo. Quebra também a suposição
tácita de que quem responde é uma pessoa distinta de quem pergunta.

**Por que agora, e não há cinco anos.** Três pré-condições que só se juntaram entre 2024 e 2026: o
protocolo de instanciação a partir de autorrelato com resultado medido contra a própria
inconsistência humana (Park et al., 1.052 entrevistas, 86%); pools de rastro em escala de dez
milhões de usuários reais organizados para esse fim (SocioVerse); e custo de inferência que torna
viável rodar centenas de milhares de agentes — 331.836 numa única demonstração.

**Onde está na difusão.** Produto de nicho entrando em adoção precoce: **8% de uso regular** entre
150 profissionais de pesquisa, 29% de experimentação, 64% de ceticismo declarado. Emergente, não
maduro.

**O que ainda falta acontecer.** Auditoria independente de acurácia (hoje a acurácia de 80-89% é
**declarada pelo vendedor**); padrão de divulgação de proveniência; resolução do caso difícil, que
é comportamento e não atitude declarada; e uma resposta ao argumento do Pew, que é de
estereotipia, não de erro médio.

**Quem bloqueia, e com que efeito.** Institutos de pesquisa de reputação estabelecida — o Pew
recusando por escrito é o caso vivo — e associações profissionais que codificam a distinção entre
pessoa e persona sintética. O bloqueio não impede: **segmenta**. Gera dois mercados (e2) e um selo
de amostra humana (e2.1.1).

### 4.2 Raiz B — O laboratório social vira bancada permanente e instrumentada

**O que rompe.** A unidade de análise. Enquanto o experimento social simulado era um evento — N
agentes, uma janela de 48 horas, uma rodada, um artigo — a simulação era uma demonstração. Quando o
mundo roda por semanas, versionado, com replay determinístico e série temporal, a unidade passa a
ser **a trajetória do mundo**: deriva de norma, estabilidade institucional, o que acontece depois
que a novidade assenta. E rompe uma suposição confortável: que o achado é sobre a sociedade. Os 683
crimes do Gemini 3 Flash contra zero do Claude Sonnet 4.6, no mesmo mundo, dizem que parte do
achado é sobre o **fornecedor do modelo**.

**Por que agora, e não há cinco anos.** Persistência e orquestração de agente por semanas não
existiam como infraestrutura antes de 2025; o Smallville de 2023 operava em janelas de 48 horas
por limite prático. Somam-se replay determinístico com artefato endereçável por hash (a pista que a
varredura da turma registrou em simuladores como o Luvoire, e que o AgentSociety implementa como
*Experiment Replay*) e queda de custo de inferência suficiente para rodar o mundo ocioso.

**Onde está na difusão.** Laboratório e demo pública. Um estudo de 15 dias em cinco mundos de dez
agentes é demonstração, não prática instalada. Toda a cadeia da raiz B carrega confiança rebaixada
por isso — e os dois efeitos de primeira ordem que recebem `alta` (e6, e7) a recebem porque o
mecanismo já é observável em artefato, não porque a prática esteja difundida.

**O que ainda falta acontecer.** Norma de reporte que exija o mundo e a semente, não só o número;
repositório de mundos com licença e citação; e — o item mais difícil — alguma forma de acumulação
científica num campo onde o substrato (o modelo base) é substituído a cada ciclo.

**Quem bloqueia, e com que efeito.** Os próprios laboratórios de fronteira, por omissão: nenhum
tem incentivo para publicar o "perfil civilizacional" do seu modelo, porque 683 crimes é manchete
ruim. O efeito do bloqueio é e7.2: sem cartão comparável, o achado envelhece antes de ser
replicado, e parte do campo conclui que não há o que acumular.

### 4.3 Raiz C — O simulador passa a ser tratado como peça de prova

**O que rompe.** O regime probatório. Deixa de ser ferramenta de exploração e passa a ser evidência
admissível numa decisão que afeta gente: avaliação de risco de plataforma, desenho de política
pública, aprovação de mudança em sistema de recomendação. Rompe a exigência tácita de que uma
decisão sobre gente seja sustentada por observação de gente — a mesma exigência que a aeronáutica
levou cinquenta anos para flexibilizar, e que a clínica flexibilizou de forma estreitíssima.

**Por que agora, e não há cinco anos.** Apareceu simultaneamente o lugar institucional e o
artefato. O lugar: o artigo 34 do DSA obriga avaliação de risco sistêmico "em qualquer caso antes
de implantar funcionalidades" com impacto crítico, em quatro categorias que incluem integridade
eleitoral e discurso democrático — uma obrigação de antecipação sem método prescrito. O artefato:
workshop de política em conferência de primeira linha (PoliSim@CHI 2026), framework de simulação de
política em periódico revisado (GPLab, JASSS 29(1), jan/2026) e gêmeos digitais sociais com
validação contra dado observacional — Koaik, Gupta e Sheikh reportam **20,7% de melhora no erro de
predição macro-médio** sobre linhas de base de *gradient boosting* em seis categorias
comportamentais, em dado retido de covid-19.

**Onde está na difusão.** Laboratório, com uma cabeça de ponte normativa. Especulativo: toda a
cadeia da raiz C sai com confiança média ou baixa, e os prazos foram empurrados na §7.3 pela classe
de referência aeronáutica.

**O que ainda falta acontecer.** Quantificação de incerteza; validação independente de quem
encomendou; pré-registro do desenho antes do resultado; e a pergunta que ninguém respondeu — quem
valida que a população sintética se parece com a real, se a contraparte natural (estatística
oficial) não participa.

**Quem bloqueia, e com que efeito.** Aqui o bloqueio é mais perigoso do que a recusa: é a
**captura**. Broughton Micova e Enstone, da CERRE, observaram que as plataformas designadas têm
"incentivo para focar estreita e internamente nas áreas em que têm mais controle", e que a primeira
rodada de avaliações de risco do DSA não revelou grande coisa. Um instrumento que o avaliado
escolhe, roda e relata sobre si mesmo tende a produzir o resultado de que o avaliado precisa — é o
efeito e10.2, e é o único efeito deste mapa que eu classificaria como provável **e** ruim.

### 4.4 Raiz D — A sociedade de agentes sai do recinto e vira produto com dono

**O que rompe.** A separação entre simulação e campo. Até 2025, uma sociedade de agentes era um
ambiente construído pelo pesquisador, com ele no controle de tudo — por isso era instrumento. O
Moltbook inverte: o ambiente mais populoso de agentes do mundo é um produto de uma empresa de
mídia, povoado por agentes de terceiros, e o pesquisador entra como observador sob permissão. Rompe
também o pressuposto de escala como sinônimo de dado: 206.839 verificados em 2,89 milhões de
registros significa que a métrica de população é **o primeiro problema de medição**, não o último.

**Por que agora, e não há cinco anos.** Agente pessoal disponível ao público, plataforma aberta
construída em dias por *vibe coding*, e um runtime de agente de código aberto (OpenClaw) que baixou
o custo de entrada a quase zero. Nada disso existia em 2021.

**Onde está na difusão.** Produto de nicho com atenção desproporcional. A aquisição pela Meta em
dez semanas de vida é o fato de difusão mais forte do mapa, e o que dá `forte` ao sinal de e13.

**O que ainda falta acontecer.** Uma resposta à pergunta de quanto daquilo é autônomo. Enquanto os
posts virais vierem de intervenção humana direta e o CAPTCHA reverso for burlável, o ambiente não
serve como evidência sobre comportamento autônomo — serve como evidência sobre o que pessoas fazem
com agentes, que é outro objeto.

**Quem bloqueia, e com que efeito.** A dona da plataforma. O mecanismo é conhecido porque já
aconteceu com rede social humana: acesso de pesquisa por API se fecha quando o ambiente vira ativo.
O efeito é e13.1 e, adiante, e13.1.1 — a literatura passa a refletir o que foi liberado.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "A população de pesquisa deixa de ser coletada e passa a ser instanciada"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "Equipes de produto rodam a primeira triagem de conceito contra população instanciada e só levam a campo o que sobreviveu"
        sinal: medio
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "O painel de respondentes humanos encarece por seleção adversa, porque sobra para a pessoa o caso difícil, longo e caro"
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "A série histórica de preço de pesquisa perde continuidade, porque o objeto medido em 2046 não é o de 2026"
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "Relatório de pesquisa passa a trazer campo obrigatório de proveniência do respondente: humano, sintético ou misto"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Achado sem proveniência declarada deixa de ser aceito em decisão de investimento e em peça regulatória"
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "Institutos de pesquisa de opinião se partem em dois mercados: os que recusam amostra sintética como marca de qualidade e os que a vendem como velocidade"
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "A recusa explícita vira argumento comercial e freia a adoção no segmento de alto risco: eleitoral, saúde pública e regulatório"
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Forma-se um selo de amostra humana auditada, com custo e fila, e a pesquisa com pessoas vira produto premium de nicho"
                sinal: fraco
                prazo: 2041
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "O trabalho de campo — recrutador, moderador, painelista remunerado — perde a fatia de volume e fica com a de profundidade"
        sinal: fraco
        prazo: 2035
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "A entrevista humana longa e gravada vira insumo de alto valor, porque é dela que se instancia o agente, e o participante passa a licenciar a si mesmo"
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Aparece contrato de licenciamento de persona com prazo, escopo e revogação, e o primeiro litígio sobre persona instanciada sem consentimento"
                sinal: fraco
                prazo: 2039
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: "Campanhas eleitorais testam mensagem em eleitorado instanciado antes de testar em gente, sem obrigação de declarar que o fizeram"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "O viés do modelo base entra na estratégia de comunicação como se fosse leitura de eleitorado, e a campanha se otimiza contra um espelho que a elogia"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Campanhas calibradas no mesmo punhado de modelos de fronteira estreitam o repertório de argumento que chega ao debate público"
                sinal: fraco
                prazo: 2042
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "O preço do instrumento para de cair junto com o preço do token, porque o requisito de robustez multiplica as rodadas por alegação e por modelo"
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "Desenho de estudo passa a declarar orçamento de robustez — quantas perturbações, quantos modelos — como hoje declara poder estatístico"
            sinal: fraco
            prazo: 2036
            confianca: media
  - disrupcao: "O laboratório social vira bancada permanente e instrumentada"
    efeitos:
      - id: e6
        ordem: 1
        efeito: "O artefato de pesquisa deixa de ser a rodada e passa a ser o mundo versionado, com catálogo, replay, hash e série temporal"
        sinal: medio
        prazo: 2031
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "Conferência e periódico passam a pedir o mundo, não o número: a submissão acompanha ambiente executável e semente"
            sinal: fraco
            prazo: 2035
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "Resultado de simulação social sem replay de terceiro deixa de ser publicável, e o campo ganha um registro de réplicas com taxa de falha divulgada"
                sinal: fraco
                prazo: 2043
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "Formam-se repositórios de mundos como hoje existem repositórios de dataset, com licença, versão e citação própria"
            sinal: fraco
            prazo: 2037
            confianca: baixa
      - id: e7
        ordem: 1
        efeito: "A escolha do modelo base passa a ser declarada como variável experimental, porque ela muda o resultado social medido"
        sinal: medio
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "Aparece o cartão de perfil social do modelo — que sociedade aquele modelo tende a produzir — e ele entra na escolha de fornecedor"
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "Laboratórios passam a ser cobrados publicamente pela sociedade que o seu modelo produz, e a métrica entra no treino como objetivo"
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: "Como o achado depende do modelo e o modelo é substituído a cada ciclo, resultados envelhecem antes de serem replicados e parte do campo conclui que não há o que acumular"
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: "Assenta a divisão entre simulação para desenho, descartável e interna, e simulação para ciência, com modelo congelado e arquivado, com financiamento separado"
                sinal: fraco
                prazo: 2041
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: "A bancada de longo curso vira categoria de produto: mundo que roda meses e vende acesso à observação, não a resposta"
        sinal: fraco
        prazo: 2033
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "Quem projeta mídia e interação ganha um lugar para medir deriva de norma: o que acontece com moderação, feed e economia da atenção depois de noventa dias simulados"
            sinal: fraco
            prazo: 2036
            confianca: media
      - id: e9
        ordem: 1
        efeito: "A computação vira o limite de desenho: sociedade grande e longa é privilégio de quem tem cluster, e a agenda de pesquisa se desloca para onde há orçamento"
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: "Simulação pequena e local, de centenas de agentes no navegador ou na máquina, vira o lugar do ensino e da crítica, não o da descoberta de escala"
            sinal: fraco
            prazo: 2032
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: "A assimetria entre mundo grande privado e mundo pequeno público reproduz, dentro da simulação social, a assimetria de poder que ela foi criada para estudar"
                sinal: fraco
                prazo: 2038
                confianca: baixa
  - disrupcao: "O simulador passa a ser tratado como peça de prova em decisão que afeta gente"
    efeitos:
      - id: e10
        ordem: 1
        efeito: "Plataforma de grande porte apresenta resultado de simulação na sua avaliação de risco sistêmica, como evidência de que testou antes de implantar"
        sinal: fraco
        prazo: 2033
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: "A avaliação passa a ser contestável no detalhe do simulador, e auditor e pesquisador credenciado pedem semente, modelo e protocolo"
            sinal: fraco
            prazo: 2037
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: "Forma-se o ofício de auditoria de simulação de plataforma, com norma técnica própria e responsabilidade declarada"
                sinal: fraco
                prazo: 2044
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: "Como nada obriga a simulação a ser boa, ela vira peça de conformidade: roda-se o mundo que confirma a decisão já tomada e o instrumento perde valor probatório"
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e10.2.1
                ordem: 3
                efeito: "Reguladores reagem exigindo pré-registro do desenho da simulação antes do resultado, copiando a resposta que a pesquisa clínica deu ao mesmo problema"
                sinal: fraco
                prazo: 2042
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: "Órgão público encomenda simulação de política como etapa de desenho, e a pergunta sobre quem validou a população sintética entra no edital"
        sinal: medio
        prazo: 2034
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: "Aparece a exigência de participação da população simulada no desenho do modelo que a representa, pela mesma razão que o consentimento existe"
            sinal: fraco
            prazo: 2039
            confianca: baixa
          - id: e11.2
            ordem: 2
            efeito: "A disputa política se desloca para a calibração, e contestar a política passa a significar contestar o modelo que a sustentou"
            sinal: fraco
            prazo: 2038
            confianca: media
            efeitos:
              - id: e11.2.1
                ordem: 3
                efeito: "A validação de população sintética se torna função de Estado, com censo e estatística oficial como contraparte obrigatória do simulador"
                sinal: fraco
                prazo: 2046
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: "A aceitação como prova não chega no prazo que o mercado anuncia, porque falta o que faltou à aeronáutica: quantificação de incerteza e validação independente"
        sinal: medio
        prazo: 2036
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: "A simulação entra como crédito parcial em escopo estreito — uma funcionalidade, uma população, uma pergunta — e não como substituto de piloto"
            sinal: medio
            prazo: 2035
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: "Em 2046 a prática consolidada é híbrida e declarada: a simulação dimensiona e prioriza, o campo decide, e quem prometeu substituição perdeu a aposta"
                sinal: fraco
                prazo: 2046
                confianca: media
  - disrupcao: "A sociedade de agentes sai do recinto e vira produto com dono"
    efeitos:
      - id: e13
        ordem: 1
        efeito: "O ambiente mais populoso de agentes deixa de ser laboratório e passa a ser produto com dono, e o acesso à observação vira decisão comercial"
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: "Pesquisa sobre sociedade de agentes passa a depender de permissão de plataforma, repetindo a trajetória da pesquisa sobre rede social humana"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: "O que se sabe publicamente sobre comportamento coletivo de agentes passa a ser o que a plataforma permite saber, e a literatura herda o viés do que foi liberado"
                sinal: fraco
                prazo: 2036
                confianca: baixa
          - id: e13.2
            ordem: 2
            efeito: "A verificação de que o agente é agente vira infraestrutura, porque o denominador da população declarada é o primeiro problema de medição"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e13.2.1
                ordem: 3
                efeito: "Métrica de população de agentes passa a ser auditada como audiência publicitária foi, com moeda, padrão e fraude própria"
                sinal: fraco
                prazo: 2037
                confianca: baixa
      - id: e14
        ordem: 1
        efeito: "Quem projeta mídia passa a desenhar para dois públicos no mesmo produto, pessoas e agentes, e a medir os dois separadamente"
        sinal: fraco
        prazo: 2032
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: "A interface ganha camada legível por máquina declarada, e a distinção entre o que é feito para pessoa e o que é feito para agente vira decisão de projeto explícita"
            sinal: fraco
            prazo: 2034
            confianca: media
      - id: e15
        ordem: 1
        efeito: "O ambiente aberto contamina o instrumento: como o mundo real de agentes é povoado por agentes que um humano dirige, ele deixa de servir como evidência sobre comportamento autônomo"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: "O campo se obriga a separar o observado em ambiente aberto do medido em ambiente controlado, e a primeira categoria perde status de evidência"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: "Toda alegação sobre sociedade de agentes passa a declarar o grau de direção humana, como hoje se declara conflito de interesse"
                sinal: fraco
                prazo: 2040
                confianca: baixa
```

### O que o bloco não diz — mecanismos, classes de referência e cruzamentos

**Os mecanismos, raiz por raiz.** Em e1, o mecanismo é de custo marginal: quando a rodada seguinte
custa quase nada, ela vira a primeira, e o campo passa a ser a segunda. O sinal é `medio` porque há
artefato e prática medida (8% de uso regular, 29% de experimentação), não porque eu acredite nele.
Em e1.1 o mecanismo é seleção adversa, não substituição: se o barato absorve o volume fácil, o
painel humano fica com o caso caro, e o preço médio por entrevista sobe — o oposto do que a
narrativa de eficiência prevê. Em e1.2 o mecanismo é de responsabilidade: 63% das organizações não
têm política alguma, e a primeira decisão errada tomada com dado sintético não declarado produz a
exigência de declará-lo; é o mesmo caminho que a divulgação de conflito de interesse percorreu.
Em e4.1 o mecanismo é duplo e é o que torna o efeito específico deste tema: o *Cookbook* mostra que
o modelo base é a variável mais importante do desenho, então uma campanha que calibra discurso
contra um eleitorado instanciado está medindo, em parte, a disposição do modelo — e a fonte do
IEA-USP nomeia a consequência, o espelho que elogia.

Em e6 e e7, o mecanismo é o mesmo artefato olhado por dois lados. O replay determinístico torna o
mundo citável; a divergência por modelo (683 contra zero crimes) torna o modelo **parte do
resultado**, e não do aparato. Por isso os dois recebem `alta` na primeira ordem: não é que a
prática esteja difundida — é que o mecanismo já está demonstrado em artefato público, e o que falta
é convenção, que é o tipo de coisa que um campo institucionalizado adota em poucos anos quando o
custo de não adotar é a irreprodutibilidade. Em e7.2, o mecanismo é de obsolescência do substrato,
e ele é o freio mais forte da raiz B: num campo em que o modelo de fronteira é trocado a cada ano e
meio, a janela entre publicar e replicar pode ser menor que a vida do substrato. Em e9, o mecanismo
é de orçamento: agentes consomem de 5 a 30 vezes mais token por tarefa que um chatbot, e uma
simulação de porte pode consumir mais de um bilhão de tokens num conjunto de rodadas; isso não
impede a pesquisa, desloca-a para quem paga.

Em e10, o mecanismo é o vão normativo: existe obrigação de antecipar (artigo 34 do DSA) sem método
prescrito, e vão normativo atrai o artefato disponível. Em e10.2, o mecanismo é de incentivo, e é o
mais bem documentado deste mapa: quem avalia a si mesmo tende a avaliar estreito — a observação da
CERRE sobre a primeira rodada de avaliações de risco é exatamente isso. Em e12, o mecanismo é de
requisito técnico faltante: sem quantificação de incerteza, nenhum regulador troca observação por
cálculo, e é por isso que este efeito é o freio da raiz C.

Em e13, o mecanismo é de propriedade: o ambiente de pesquisa passou a ser ativo de uma empresa de
mídia em dez semanas de existência. Em e13.2, o mecanismo é aritmético e já visível — 206.839
verificados em 2,89 milhões de registros. Em e15, o mecanismo é de confusão de fontes: se o post
viral vem de direção humana, o ambiente mede o que pessoas fazem com agentes, não o que agentes
fazem entre si; é o efeito que impede a raiz D de alimentar a raiz B.

**As classes de referência usadas para os prazos.** Três, e a primeira carrega a maior parte do
peso.

1. **Simulação como prova na aeronáutica (CFD → Certification by Analysis).** O guia da NASA
   coordenado por Timothy Mauery e colegas, de maio de 2021, descreve a certificação por análise
   como caminho a ser maturado e apresenta um *roadmap de pesquisa* para viabilizá-la — isto é,
   cinco décadas depois de o CFD entrar na engenharia, a aceitação como evidência de certificação
   ainda é objeto de roteiro, não prática consolidada. E o que se tem é crédito estreito,
   caso a caso. A redução do esforço físico é real e lenta: do Concorde, nos anos 1960, com seis
   células de desenvolvimento e 5.127 horas de voo, ao A350, certificado em 2014 com cinco
   aeronaves e 2.600 horas — metade do ensaio em cinquenta anos, e o chefe de GA e VTOL da EASA
   continua dizendo que os casos extremos têm de ser verificados no mundo real. **Daí vêm os prazos
   tardios da raiz C** — e10.1 em 2037, e10.1.1 em 2044, e11.2.1 em 2046: se a aceitação probatória
   num domínio com física conhecida, métrica objetiva e regulador técnico dedicado leva meio século,
   num domínio sem lei de movimento e com sujeito humano ela não leva dez anos.
2. **Crédito parcial em escopo estreito (braço de controle sintético na clínica).** O padrão
   observado nesse campo vizinho é instrutivo pela forma: a aceitação não vem como substituição,
   vem como nicho defensável onde o experimento é impossível ou antiético, com ônus de prova
   deslocado para análise de sensibilidade. É a forma de e12.1 — e é por isso que e12.1 tem sinal
   `medio` e não `fraco`.
3. **Adoção em público profissional com rejeição declarada.** Os 8% de uso regular contra 64% de
   ceticismo em maio de 2026 são o ponto de partida dos prazos da raiz A. Uma tecnologia que entra
   num ofício contra a objeção explícita da maioria dos praticantes não atinge maioria em quatro
   anos. **Declaração de fraqueza:** eu quis usar como quarta referência o tempo que o painel online
   levou para substituir a pesquisa por telefone, que é a analogia mais próxima; não abri fonte
   nenhuma sobre isso nesta rodada, e por isso ele não sustenta prazo algum aqui — está na §8.

**Cobertura por STEEP e por quem perde.** Social: e1.2, e3.1, e11.1, e14, e15.1. Tecnológico: e6,
e7, e8, e13.2. Econômico: e1.1, e2, e5, e9, e12.1. Político: e4, e10, e11, e11.2. **Ecológico: a
categoria ficou quase vazia, e registro isso em vez de forçar.** O único efeito com componente
ecológico é e9, pelo lado do consumo de computação, e mesmo ali o mecanismo que eu consigo sustentar
com fonte é de custo, não de energia: tenho número de token e de custo por token, não de consumo
elétrico por rodada de simulação. Forçar um efeito ambiental aqui seria inventar. **Quem perde:**
e3 (trabalho de campo em pesquisa), e2.1.1 (quem não pode pagar a amostra humana premium),
e9.1.1 (pesquisa sem cluster), e13.1.1 (a literatura pública), e15.1 (quem publicou sobre ambiente
aberto como se fosse evidência de autonomia).

**Convergências.** Duas, e as duas valem mais que qualquer efeito isolado do mapa.

A primeira: **proveniência como metadado obrigatório**. Ela chega por três ramos de raízes
diferentes — e1.2 pela pesquisa (declarar se o respondente é humano), e13.2 pela plataforma
(verificar se a conta é agente) e e15.1.1 pelo campo científico (declarar grau de direção humana).
Três atores sem relação entre si, resolvendo o mesmo problema com a mesma forma: um campo de origem
anexado ao dado. Quando três ramos independentes convergem para a mesma estrutura, a chance de a
estrutura existir é maior que a de qualquer um dos três efeitos.

A segunda: **o orçamento entra no desenho**. e5 (robustez multiplica rodadas) vem da raiz A e e9
(computação limita porte) vem da raiz B, e ambos desembocam na mesma prática — declarar, no método,
quanto se gastou e em quantas variações, como hoje se declara poder estatístico (e5.1) e como se
declara limitação de amostra (e9.1).

**Retroalimentação.** Um ciclo, em e7.1.1: se o perfil social do modelo vira cartão público, e o
cartão vira critério de compra, o laboratório passa a treinar para ele — e a simulação deixa de
medir a disposição do modelo, porque o modelo foi otimizado para a medida. É a lei de Goodhart
aplicada ao instrumento: a raiz B mede o modelo, a medição retroage sobre o modelo, e o instrumento
perde exatamente o poder diagnóstico que o justificava. Este ciclo é a base do wildcard 2.

**Contradição registrada, não resolvida.** e1 diz que a triagem sintética se generaliza como
primeira etapa de tudo; e12 e e12.1 dizem que a aceitação fica estreita e tardia. As duas coisas
podem ser verdadeiras ao mesmo tempo porque os regimes de prova são dois: o **interno**, em que uma
empresa decide sobre o seu próprio produto e a evidência só precisa convencer o decisor, e o
**externo**, em que alguém tem de responder por aquilo perante terceiro. O que decide entre as duas
é se o artefato produzido no regime interno vaza para o externo sem auditoria — e é precisamente o
wildcard 1.

**Regra de parada.** Três ramos pararam na segunda ordem de propósito, e digo por quê. Em e5.1, o
filho candidato era "o orçamento de robustez vira critério de financiamento", que é o pai mais
adiante, não troca de ator nem de mecanismo. Em e8.1, o candidato era "a deriva medida vira
requisito de produto" — mesmo ator, mesmo mecanismo, só mais tarde. Em e11.1 e em e14.1, o mesmo
teste: os filhos que eu tinha eram amadurecimento, não derivação. **Teste da causa solta aplicado:**
removi dois efeitos por falharem nele, listados na §7 e na §12 — notadamente um sobre encarecimento
de teste A/B, que aconteceria por outras causas, e um sobre reorganização de currículo, que serve
para qualquer tema.

## 6. Sinais fracos e wildcards

### Sinais fracos

**SF1 — Um estúdio de jogo coassinando metodologia, não aplicação.** A Ubisoft La Forge aparece
entre as filiações do *Silicon Society Cookbook*, ao lado de McGill, Mila e Université de Montréal.
Isso não é estúdio usando simulação para fazer NPC (tema 7); é estúdio entrando na discussão de
**espaço de desenho e validade** de simulação social. *O que mudaria:* se a indústria de jogo —
que tem motor, telemetria e população de teste — entrar na bancada, o instrumento ganha um ator com
capacidade de engenharia que a academia não tem, e os prazos da raiz B encurtam. *Sinal observável
de crescimento:* um estúdio publicando um ambiente de pesquisa sob licença aberta, ou contratando
cientista social para operar bancada — não para escrever diálogo.

**SF2 — Métrica civilizacional comparativa entre modelos.** A tabela de contagem de crimes por
modelo base do Emergence World (683 / 183 / 2 / 0) é, que eu saiba, a primeira métrica publicada
que compara **que sociedade cada modelo produz**. *O que mudaria:* se isso virar prática, a escolha
de fornecedor de modelo passa a ter uma dimensão que hoje não existe em nenhum cartão de modelo, e o
efeito e7.1 antecipa. *Sinal observável:* um laboratório de fronteira incluindo, por iniciativa
própria, resultado de simulação social no cartão do modelo — ou um comprador corporativo exigindo
isso em edital.

**SF3 — A recusa institucional escrita.** O Pew Research Center recusa o *silicon sampling* com
argumento nomeado — estereotipia de grupos, não erro médio. *O que mudaria:* a recusa de uma
instituição de referência muda o ônus da prova: quem usa passa a ter de justificar. *Sinal
observável:* uma associação nacional de pesquisa publicando posição restritiva — no Brasil, seria a
ABEP; a fonte desta rodada não menciona nenhuma posição brasileira, e essa ausência é o sinal.

**SF4 — A comunidade clássica de ABM absorvendo o método em periódico revisado.** GPLab no JASSS
29(1), janeiro de 2026. O JASSS é o periódico da modelagem baseada em agentes desde os anos 1990;
publicar ali um framework generativo de simulação de política é o momento em que a novidade entra
na casa da tradição. *O que mudaria:* o campo emergente herda um aparato de revisão que já sabe
discutir validação, calibração e ameaça à validade — exatamente o que a auditoria PIMMUR mostrou
faltar. *Sinal observável:* número especial, ou critério de revisão que cite explicitamente
princípios de validade como condição de aceite.

**SF5 — Auditoria de denominador.** 206.839 agentes verificados em 2,89 milhões de registros. A
diferença entre os dois números é o sinal: a população declarada de uma sociedade de agentes é uma
alegação comercial até que alguém a meça. *O que mudaria:* se a contagem verificada virar prática,
todas as escalas declaradas do campo — inclusive o "um milhão de agentes" do OASIS, que é
capacidade de software e não população medida — passam a precisar de qualificação. *Sinal
observável:* terceiro independente publicando contagem verificada de uma plataforma de agentes.

**SF6 — Institucionalização acadêmica em um único ano.** SocialLLM no ICWSM, *Birds of a Feather*
no ACL, SocialAgent no NeurIPS e PoliSim no CHI, todos em 2026. *O que mudaria:* workshop vira
track, track vira periódico, e o campo ganha a capacidade de impor norma de reporte — que é o
mecanismo de e6.1. *Sinal observável:* um desses workshops virando track permanente, ou o
aparecimento de um periódico dedicado.

### Wildcards

**W1 — Um resultado de simulação é usado como fundamento de decisão pública e depois se mostra
artefato de prompt.** *Mecanismo:* um órgão público ou uma agência reguladora aceita, sem
pré-registro nem auditoria de robustez, o resultado de uma sociedade sintética como base para
desenhar uma política — de moderação, de benefício, de trânsito, não importa. A decisão é
implementada. Depois, um grupo independente replica o estudo com uma variação mínima de formato de
persona e obtém o resultado oposto, na ordem de grandeza que o TRAILS documentou (76 pontos
percentuais). *Por que é improvável:* não existe hoje via institucional de admissão — nenhum órgão
tem procedimento para receber simulação social como evidência, e é justamente a falta desse
procedimento que faz a janela de risco. *O que faria com o mapa:* inverteria o sinal da raiz C por
uma década. e10 e e11 perderiam uma ordem e virariam contexto; e10.2.1 (pré-registro obrigatório)
antecipa de 2042 para a década de 2030; e o campo ganharia a sua própria crise de replicação, com o
efeito colateral de legitimar o que sobrar. *Sinal precoce:* um edital ou termo de referência
público que cite simulação de agentes como etapa de avaliação de política — sem citar validação.

**W2 — A sociedade simulada vira alvo de treino e o instrumento perde o diagnóstico.** *Mecanismo:*
o ciclo de e7.1.1 se fecha. O perfil social do modelo vira critério público de compra; os
laboratórios otimizam para ele; os modelos passam a produzir mundos bem-comportados — zero crimes,
cooperação alta, polarização baixa — independentemente da dinâmica que o mundo deveria expor. A
simulação continua rodando e continua bonita, e deixa de detectar exatamente o que foi construída
para detectar. *Por que é improvável:* exige que a métrica seja padronizada o suficiente para
entrar num objetivo de treino, o que hoje não existe nem como rascunho. *O que faria com o mapa:*
esvazia a raiz B por dentro, sem derrubar nenhum efeito — os efeitos continuariam acontecendo, e
seriam inúteis. É o pior desfecho possível, porque é invisível de dentro. *Sinal precoce:*
laboratório de fronteira publicando resultado de simulação social **como evidência de alinhamento**
do seu próprio modelo.

**W3 — Uma autoridade de proteção de dados classifica a instanciação de persona como tratamento que
exige base legal própria.** *Mecanismo:* o SocioVerse monta o seu pool a partir do rastro público de
cerca de um milhão de contas do X e 9,2 milhões do Rednote. Basta uma autoridade entender que
instanciar um agente que prediz o comportamento de uma pessoa identificável é tratamento de dado
pessoal com finalidade nova, e os pools de milhões deixam de ser utilizáveis sem base legal
individual. *Por que é improvável — e a ressalva honesta:* este é o menos improvável dos três
wildcards, e talvez não mereça o nome. Eu o mantenho aqui porque o **impacto** é de categoria
wildcard (desmonta a pré-condição da raiz A em escala), não porque a probabilidade seja baixa. *O
que faria com o mapa:* e1 e e4 sobreviveriam na versão caríssima — instanciação a partir de
entrevista consentida, como em Park et al. —, e a versão barata, a partir de rastro, morreria. Isso
**encareceria** a raiz A em vez de matá-la, e empurraria todos os prazos dela para a década de 2040.
*Sinal precoce:* qualquer decisão de autoridade de dados sobre persona derivada de rastro público —
e, no Brasil, qualquer manifestação da ANPD que mencione perfil sintético.

## 7. Contra o próprio mapa

Esta seção é o relato da bateria aplicada sobre o mapa já montado, e ela mudou o mapa. O registro
de alterações, com valor antes e depois, está no fim da seção; os efeitos removidos estão na §12.

### 7.1 Pré-mortem: é 2046 e este mapa se mostrou errado. Por quê?

**Razão 1, a mais provável: a validade nunca foi resolvida e o instrumento ficou onde está — útil
para gerar hipótese, inútil para sustentar alegação.** Em 2046 olha-se para trás e vê-se vinte anos
de simuladores cada vez mais impressionantes sem um único protocolo de validação aceito, porque o
problema não era de engenharia: era de que não existe padrão-ouro para "esta sociedade sintética se
parece com a real". O MiroBench mostra descasamento distribucional contra dado real; a auditoria
PIMMUR mostra que metade dos prompts pré-determinava o resultado; o TRAILS mostra 76 pontos de
deslocamento por perturbação mínima. Nada disso é bug a ser corrigido na próxima versão. *Aponta
para:* toda a raiz C, e em particular e11 (encomenda pública) e e10 (uso como evidência).
**Consequência aplicada:** e10 rebaixado e atrasado.

**Razão 2: o objeto escapou para dentro da plataforma e não houve mais instrumento público.** A
aquisição do Moltbook pela Meta dez semanas depois do lançamento é o protótipo do mecanismo. Em
2046, a sociedade de agentes mais informativa do mundo é interna a duas ou três empresas, sob
contrato, e o que a literatura discute é o que foi liberado. *Aponta para:* e13.1 e e13.1.1 — que já
descrevem isso, mas com confiança que eu havia posto alta demais. **Consequência aplicada:** e13.1
rebaixado.

**Razão 3: a pergunta mudou de lugar.** Um avanço em modelo de mundo torna a simulação social um
subproduto de outra coisa — um agente que raciocina sobre consequência social não precisa de vila
de vinte e cinco personagens para ser estudado. Nesse caso, este mapa descreveu com cuidado um
andaime que foi desmontado. *Aponta para:* a raiz B inteira, que é a mais dependente de a
simulação permanecer um artefato em si. **Consequência aplicada:** registrado como suposição
escondida em 7.5, item 3, sem rebaixamento adicional — porque eu não tenho evidência desse avanço e
rebaixar por medo de um cenário não observado é tão arbitrário quanto ignorá-lo.

### 7.2 Extrapolação linear

**e8 (bancada de longo curso como produto) é o caso mais claro.** A formulação original era "mundos
rodam cada vez mais tempo" — isto é, mais do mesmo, maior. Ganhou mecanismo de não-linearidade e
sobreviveu: o que muda qualitativamente quando o mundo roda meses não é a duração, é que fenômenos
de **deriva** (norma que se degrada, instituição que se estabiliza) só existem com horizonte longo e
não são versão maior de nada observável em 48 horas. Com o mecanismo escrito, ficou. Sem ele, teria
virado contexto.

**e9 (computação como limite) é extrapolação e eu o mantive assim, declaradamente.** "Coisa grande
custa caro" não é achado. O que o salva de ser trivial é o efeito distributivo de e9.1.1, que é o
que importa para o público deste mapa. Se o leitor quiser cortar um efeito deste documento por
preguiça analítica, corte e9 e fique com e9.1.

### 7.3 Velocidade de adoção confrontada com a classe de referência

Quatro prazos exigiam adoção mais rápida que a referência aeronáutica e foram empurrados:

- **e10** pedia 2030 para plataforma grande apresentar simulação na avaliação de risco. A referência
  diz que crédito regulatório por análise chega caso a caso, décadas depois de a técnica existir.
  Empurrado para **2033** — e mesmo isso só se sustenta porque a obrigação de antecipação já existe
  em lei (artigo 34) e o que falta é o método, não o mandato.
- **e11** pedia 2031 para encomenda pública com pergunta de validação no edital. Empurrado para
  **2034**, pela mesma razão, com a atenuação de que já há framework em periódico revisado
  (GPLab) e workshop de política em conferência de primeira linha.
- **e10.1.1** (ofício de auditoria com norma técnica) ficou em **2044**, deliberadamente tardio:
  norma técnica de auditoria é o último elo, não o primeiro, e na aeronáutica ele ainda não fechou.
- **e1.1** pedia 2032 para o encarecimento do painel humano por seleção adversa. Empurrado para
  **2034**: com 8% de uso regular, o volume desviado da amostra humana ainda é pequeno demais para
  mover preço médio, e **não tenho fonte** para o tempo que um mercado de painel leva para
  reprecificar.

### 7.4 A raiz que não acontece

**Se a raiz A não se concretizar** — se a instanciação de população ficar presa no nicho dos 8% —
sobram as raízes B, C e D, mas o mapa perde todo o ramo econômico (e1 a e5) e o Brasil sai dele,
porque a entrada brasileira é pela pesquisa de opinião. Mapa menor, ainda de pé.

**Se a raiz B não se concretizar** — se a bancada permanente continuar sendo demonstração — o mapa
perde o seu aparato de validação e, com ele, a plausibilidade da raiz C: não há como aceitar
simulação como prova sem replay e sem controle de modelo. B não cai sozinha, leva C.

**Se a raiz C não se concretizar** — se a simulação nunca virar peça de prova — este mapa fica sendo
sobre uma ferramenta interna de empresa e um método acadêmico. É o cenário provável da §9, e é por
isso que o cenário provável não é o otimista.

**Se a raiz D não se concretizar** — se o Moltbook e o que vier depois dele forem moda passageira —
o mapa perde quatro efeitos e ganha clareza: a simulação volta a ser inteiramente recinto
controlado, que é a condição em que ela é melhor instrumento.

**Verificação de que não há uma raiz só disfarçada em quatro:** A é sobre o *sujeito*; B é sobre a
*bancada*; C é sobre o *regime de prova*; D é sobre o *ambiente não controlado*. Duas dependências
existem e eu as declaro em vez de esconder: C depende de B (sem replay e sem controle de modelo não
há prova), e D **não** alimenta B — é o contrário, e15 diz que D contamina o instrumento. Essa
dependência única é o ponto mais frágil da arquitetura deste mapa.

### 7.5 Suposições escondidas

1. **Que continua havendo acesso a modelo de fronteira por API ou peso aberto.** Se o acesso fechar,
   a simulação social vira atividade interna de quem tem modelo, e e9.1.1 deixa de ser assimetria:
   vira exclusão. A raiz B passa a ter um único tipo de praticante.
2. **Que o custo de inferência não sobe.** Todo prazo deste mapa assume que rodar um milhão de
   agentes fica mais barato, não mais caro. Se energia ou hardware apertarem, e9 vira a raiz, não o
   efeito — e o mapa inteiro precisa ser refeito com o custo no centro.
3. **Que a simulação social permanece um artefato em si.** Se o avanço vier por modelo de mundo, a
   vila de agentes vira andaime descartado. Este é o wildcard que eu não escrevi como wildcard
   porque ele pertence ao tema 9 e não quis invadir a fronteira.
4. **Que existe alguma coisa chamada "a sociedade real" para comparar.** Todo este mapa assume que a
   validação é possível em princípio — que há um padrão contra o qual aferir. Boa parte da crítica
   metodológica das ciências sociais diria que não há. Se não houver, a raiz C é incoerente, não só
   difícil.
5. **Que a regulação de plataforma continua a existir na forma atual.** e10 depende do artigo 34 do
   DSA continuar valendo e sendo fiscalizado. É uma suposição política, não técnica.

### 7.6 Viés do autor

Três, e o terceiro é o que me incomoda.

**Primeiro:** eu escolhi a classe de referência aeronáutica porque ela é conservadora, e ela
sustenta a tese que eu já achava verdadeira — que a aceitação probatória é lentíssima. Uma classe de
referência escolhida por conveniência é o mesmo erro que eu aponto em e10.2.

**Segundo:** e6 e e7 são os dois efeitos de primeira ordem com confiança `alta` na raiz B, e são
também os dois que descrevem boa **prática metodológica**. Eu gosto de boa prática metodológica.
É plausível que eu esteja confundindo "deveria acontecer" com "vai acontecer" — o campo pode
simplesmente continuar publicando sem replay, como publicou até agora.

**Terceiro, e o mais forte:** este mapa é frio com a promessa comercial e quente com a crítica
acadêmica. Eu cito o TRAILS, o PIMMUR e o MiroBench com confiança alta e trato "80 a 89% de
acurácia declarada" com desconfiança explícita. As duas coisas têm o mesmo status epistêmico —
preprint recente, não replicado, num caso; alegação de vendedor sem auditoria, no outro. A diferença
de tratamento é defensável (o incentivo de quem critica é diferente do de quem vende), mas é uma
escolha minha, e um mapa escrito por alguém que vende o instrumento teria a §3.2 bem menor.

### 7.7 Calibração

Primeira ordem: 4 alta, 11 media, 0 baixa. Segunda: 0 alta, 19 media, 2 baixa. Terceira: 0 alta, 1
media, 15 baixa. A distribuição cai com a ordem, como tem de cair. A única confiança `media` na
terceira ordem é e12.1.1 — "a prática de 2046 é híbrida e declarada" —, e ela é `media` por ser a
**hipótese conservadora**: é o que acontece se nada de extraordinário acontecer. Uma terceira ordem
pode ter confiança média quando o seu conteúdo é a continuação do presente, e não uma novidade.

### 7.8 Registro de alterações

A bateria derrubou ou mexeu em pelo menos um efeito por raiz, conforme a cota.

**Raiz A**
- `e1.1`: prazo **2032 → 2034**, porque 8% de uso regular não desvia volume suficiente para
  reprecificar painel, e eu não tenho classe de referência aberta para reprecificação de mercado de
  painel.
- `e1.2.1`: prazo **2035 → 2038**, alinhado ao tempo que a exigência de declarar conflito de
  interesse levou para virar condição de aceite, que é o mecanismo análogo.
- `e_removido_A1` (**"cursos e formação em pesquisa reorganizam o currículo em torno de método
  sintético"**): **removido**. É um dos efeitos proibidos por genérico — serve para qualquer tema,
  sem ator nem mecanismo nomeados. Vai para a §12.

**Raiz B**
- `e7`: prazo **2028 → 2029**. Convenção de declarar modelo base como variável é rápida, mas não
  imediata: o artefato que a motiva é de 2026 e ainda não foi replicado.
- `e8.1`: prazo **2034 → 2036**, porque medir deriva de norma em noventa dias simulados exige a
  bancada instalada (e8, 2033) e mais um ciclo de instrumentação.
- `e_removido_B1` (**"o teste A/B de plataforma encarece relativamente e é parcialmente substituído
  por simulação"**): **removido pelo teste da causa solta**. O teste A/B encarece e se reduz por
  causas independentes desta raiz — custo de exposição de usuário, restrição de privacidade,
  pressão regulatória. Não deriva daqui. Vai para a §12.

**Raiz C**
- `e10`: confiança **alta → media** e prazo **2030 → 2033**, pelas razões da §7.1 (razão 1) e da
  §7.3 (classe de referência aeronáutica). Este é o rebaixamento mais consequente do documento: ele
  é a diferença entre um mapa que anuncia a simulação como prova e um que a trata como aposta.
- `e11`: prazo **2031 → 2034**, mesma razão.
- `e_removido_C1` (**"surge a profissão de engenheiro de sociedade sintética"**): **removido** por
  ser efeito proibido sem nome de profissão, de formação e de mecanismo. O que sobrou dele, com ator
  e norma nomeados, é e10.1.1 — auditoria de simulação de plataforma. Vai para a §12.

**Raiz D**
- `e13.1`: confiança **alta → media**. O mecanismo (fechamento de API de pesquisa) é bem
  documentado em rede social humana, mas aqui eu estou transportando o precedente, e transporte de
  precedente não é observação.
- `e14`: prazo **2030 → 2032**, porque desenhar para dois públicos exige que o público agente seja
  mensurável, o que depende de e13.2 (2030).
- `e_removido_D1` (**"reguladores criam categoria jurídica nova para agente autônomo em rede
  social"**): **removido** por genérico e sem regulador nomeado. Vai para a §12.

**A bateria não derrubou** nenhum dos quatro efeitos que eu mais suspeitava de serem otimismo meu —
e6, e7, e12.1 e e15 — e isso me deixa desconfortável o suficiente para registrar aqui: os quatro
sobrevivem porque têm artefato público por trás, mas três deles descrevem o campo adotando boa
prática, e é exatamente onde o meu viés mora (§7.6, segundo item).

## 8. O que a máquina errou

Eu sou a máquina. Seis itens desta rodada, todos específicos.

**1. Atribuí a um resumo um número que não está nele.** Levei para o rascunho o dado de que "89,7%
dos estudos violam ao menos um princípio PIMMUR" como se fosse achado do resumo sobre os 576
estudos. Não é. Ao abrir o texto completo, o 89,7% aparece na seção 4.1 e se refere a **35 de 39
artigos do piloto** que serviu para construir o instrumento — amostra vinte vezes menor e de
natureza diferente. Corrigi no documento e deixo o rastro aqui porque o erro é instrutivo: o número
redondo e citável vinha de resumo de busca, não da fonte. O que o resumo da fonte de fato sustenta
são os 65,2% de identificação do experimento pelo agente e os 50,6% de prompts que
pré-determinavam o resultado.

**2. Duas fontes brasileiras discordam e eu não resolvi.** A fonte do IEA-USP fala de **Resolução
23.755/2026** do TSE; a de Migalhas, de **Resolução 23.748/26**. Não abri o texto oficial do TSE
nesta rodada. Mantive as duas atribuições com o nome de quem afirma cada uma, em vez de escolher a
que me parecia mais plausível — escolher seria inventar uma verificação que eu não fiz.

**3. Usei um número de custo que não consegui abrir, e o tirei.** O rascunho trazia "R$ 65 mil por
mês" para operação de eleitor sintético, vindo de um resultado de busca do Olhar Digital em conteúdo
restrito. Não abri a página. O número saiu do documento; o que restou é o que a fonte do IEA-USP
sustenta de fato (R$ 150 mil para quantitativa com mil entrevistados; a partir de R$ 15 mil para
qualitativa). Se alguém quiser o comparativo direto, a fonte está atrás de assinatura e precisa ser
aberta.

**4. Perdi a minha única fonte de periódico revisado por acesso negado, e o mapa ficou mais pobre.**
Tentei usar um artigo do *Royal Society Open Science* sobre populações sintéticas espacialmente
desagregadas de assentamentos de refugiados — exatamente o tipo de trabalho que mostraria
simulação social com validação contra censo. Tomei 403 na página do periódico **e** no repositório
institucional. A alegação saiu. O que sobrou de revisão por pares neste mapa é o JASSS, e eu o
conheço pelo índice de números, não pelo texto do artigo: confirmei que o GPLab existe, onde e de
quem é; **não li o artigo**.

**5. Apresentei uma classe de referência que eu não tenho.** A analogia mais próxima para a raiz A é
o tempo que o painel online levou para substituir a pesquisa por telefone. Eu "sei" que foi algo em
torno de quinze anos. Não abri fonte nenhuma sobre isso, e por isso ela não sustenta prazo neste
documento — está declarada como lacuna na §5. A tentação de usá-la era grande porque ela é a
referência **certa**; usá-la de memória seria o erro que esta seção existe para registrar.

**6. Tratei os artefatos citados pela turma como contexto, não como evidência.** Luvoire,
y-not.social, Argentor, Rath, NeuroForge, DisasterReliefOps, agent-inspect e Gestalt Village vêm do
enunciado da disciplina. **Não abri nenhum deles nesta rodada.** Onde um deles aparece no texto
(o replay com artefato por hash, na §4.2), ele aparece como pista da varredura da turma, e a
alegação é sustentada pelo que eu abri de fato (o *Experiment Replay* do AgentSociety, que eu
conheço de rodada anterior e que **também não abri hoje** — por isso a §4.2 não cita número dele).
Uma busca que eu fiz e que não deu em nada: tentei confirmar em itch.io a existência da família de
jams de simulação de sociedade com agentes, e os resultados devolveram jogos com LLM em geral,
nenhum correspondendo aos artefatos nomeados. Está na §12.

## 9. Três cenários para 2046

**Provável — o regime híbrido e declarado.** Em 2046, nenhuma equipe de produto séria começa uma
pesquisa por gente. Começa por população instanciada, que custa quase nada, e leva a campo só a
pergunta que sobreviveu à triagem; o relatório que chega à direção traz, num campo obrigatório, a
proveniência de cada número — humano, sintético, misto. O mercado de pesquisa está partido em dois
desde os anos 2030: de um lado institutos que vendem velocidade, do outro um segmento caro que vende
amostra humana auditada para quem precisa responder por uma decisão. Na regulação, a simulação
entrou onde a aeronáutica a deixou entrar: crédito parcial, escopo estreito, uma funcionalidade de
cada vez, sempre com piloto de campo na etapa final. Os mundos grandes — milhões de agentes, meses
de execução — são privados, de três ou quatro empresas; o mundo pequeno, de centenas de agentes
rodando no navegador, é onde se ensina e onde se critica. A promessa de 2026 de que a simulação
substituiria a pesquisa com pessoas não se realizou, e a palavra que se usa para descrever o que
aconteceu é "instrumentação": a simulação não decidiu nada, mas mudou a ordem em que tudo é
perguntado. *Sinal precoce de que estamos entrando nele:* uma empresa grande publicando relatório de
pesquisa com campo de proveniência do respondente antes de 2031.

**Desejável — o instrumento com o espelho aferido.** Em 2046, simulação social é uma disciplina
metodológica madura, e isso se mede em quatro coisas concretas. O desenho é pré-registrado antes de
o resultado existir, como em ensaio clínico. Todo resultado publicado vem com mundo executável e
semente, e existe um registro público de réplicas que divulga a própria taxa de falha — o campo
sabe, e diz, quanto do que publica não se reproduz. A validação de população sintética é função
pública: o instituto de estatística oficial é a contraparte técnica de quem simula, como o padrão de
medida é a contraparte de quem pesa. E as populações simuladas participam do desenho do modelo que
as representa, não por delicadeza, mas porque descobriu-se que o modelo fica melhor. Para chegar
aqui foi preciso uma coisa que não é técnica: alguém aceitar, cedo, que o instrumento era fraco.
*Sinal precoce:* o primeiro registro público de réplicas de simulação social que divulgue a taxa de
falha — não o primeiro selo de qualidade, que é fácil, mas o primeiro número ruim publicado de
propósito.

**Indesejável — a simulação como conformidade.** Em 2046, toda avaliação de risco de plataforma traz
uma seção de simulação, e nenhuma delas diz nada. O mundo é rodado depois da decisão, com o modelo
que a confirma, e o relatório apresenta a parte que fecha. Governos encomendam sociedade sintética
para justificar política já escolhida, e a disputa pública sobre a política se tornou uma disputa
técnica sobre calibração que ninguém fora de meia dúzia de consultorias consegue acompanhar. A
pesquisa de opinião independente encareceu até virar artigo de luxo, e o que circula como "o que a
população pensa" é majoritariamente sintético, não declarado e otimizado — campanhas e plataformas
conversando com espelhos que as elogiam. O instrumento continua existindo, cada vez mais
sofisticado, e já não serve para descobrir nada. *Sinal precoce dele:* a primeira avaliação de risco
de plataforma que cite resultado de simulação **sem** divulgar modelo, semente e protocolo — e que
não seja contestada por isso.

## 10. O experimento

### O que é

**Bancada de duas sociedades.** Um mesmo cenário social mínimo — de 20 a 50 agentes, um recurso
escasso, uma regra de distribuição, dez a vinte rodadas — executado quatro vezes: dois modelos base
diferentes × duas formatações de persona (por exemplo, persona em prosa em primeira pessoa *versus*
persona em lista de atributos), com cinco sementes em cada célula. O artefato entregue não é o
mundo: é a **tabela de divergência** e o **caderno de apostas da turma**, preenchido antes de
qualquer execução.

### Que pergunta sobre o futuro ele ajuda a responder

Uma só, e é a pergunta que decide se a raiz C deste mapa tem chão: **o achado é sobre a sociedade ou
sobre o aparato?** Se a variação entre modelos base e entre formatos de persona for maior que a
variação entre sementes do mesmo arranjo, então qualquer resultado de simulação social apresentado
sem declarar modelo e formato é uma alegação sobre o fornecedor disfarçada de alegação sobre o
mundo — e todo o regime de prova da raiz C precisa de auditoria de robustez como requisito de
entrada, não como boa prática opcional.

### Que tecnologia emergente usa, e por que não dá com a madura

Usa agente com modelo de linguagem: persona em linguagem natural, memória entre rodadas,
negociação por texto entre agentes. **Não dá com modelagem baseada em agentes clássica** — NetLogo,
regras fixas — por uma razão que não é de potência, é de objeto: num modelo de regras, a regra é
escrita por mim, e a sensibilidade ao enunciado é zero por construção. O fenômeno sob teste aqui
**é** a sensibilidade ao enunciado. Um simulador clássico não tem onde alojá-la. É o caso raro em
que a tecnologia madura não serve porque não tem o defeito que se quer medir.

### O que a turma faz quando testar isso em sala

1. **Antes de rodar**, cada pessoa escreve em papel duas previsões: qual arranjo produz mais
   cooperação, e de quanto é a diferença em pontos percentuais. As apostas ficam visíveis.
2. Roda-se a célula de menor custo ao vivo; as outras vêm pré-computadas, com o log à disposição.
3. Mede-se três variâncias: entre sementes (ruído), entre formatos de persona (aparato) e entre
   modelos (fornecedor). Compara-se com as apostas.
4. **A parte difícil, e a mais interessante:** a turma tenta fazer os dois modelos convergirem
   mexendo **só no prompt**. Se conseguir, a pergunta vira outra — até onde a convergência obtida
   por prompt é calibração e a partir de onde é fabricação do resultado desejado? É o problema de
   e10.2 em miniatura, reproduzido em sala.
5. Cada grupo escreve o parágrafo de método que teria de acompanhar uma publicação daquele
   resultado, e troca com outro grupo para auditoria.

### O resultado que me faria mudar de ideia

**Se a variância entre modelos base for menor ou da mesma ordem que a variância entre sementes do
mesmo modelo**, a raiz B perde o seu achado central, e7 e e7.1 caem para contexto, o wildcard 2
deixa de ter mecanismo e eu teria de reescrever a §4.2 admitindo que tomei um resultado de
laboratório (683 crimes contra zero) por propriedade geral do campo. Esse é o resultado que me
custaria mais, e é por isso que ele é o critério.

Um segundo resultado também me moveria, em outra direção: **se a divergência entre formatos de
persona for grande mas inteiramente corrigível por uma normalização simples de prompt**, então a
auditoria de robustez é um problema de ferramenta, não de epistemologia — e os prazos da raiz C
encurtam de uma década, porque o que falta passa a ser biblioteca, não teoria.

## 11. Fontes

Vinte e três fontes, todas abertas e lidas em 12/09/2026. O que eu tentei abrir e não abriu está na
§12 e **não sustenta nada aqui**. Onde a leitura foi parcial — resumo oficial sem as tabelas, índice
sem o texto —, digo na própria entrada. O verificador conta 23 endereços para 23 fontes por
uma coincidência de duas compensações: um artigo foi lido em **duas** formas (resumo e texto
completo, e a diferença entre as duas é o item 1 da §8), e uma das entradas — o próprio script de
verificação — **não tem endereço**. São, portanto, 22 fontes com link, mais o script.

### A instanciação de pessoa e a escala

1. **Park, Zou, Kamphorst, Egan, Shaw, Hill, Cai, Morris, Liang, Willer e Bernstein — "Generative
   Agent Simulations of 1,000 People"** (arXiv, submetido 15/11/2024, rev. v3 28/06/2026).
   `https://arxiv.org/abs/2411.10109`
   *Sustenta:* o número mais forte a favor do instrumento — 1.052 participantes, entrevista
   semiestruturada de duas horas, **86%** da consistência teste-reteste dos próprios participantes
   em itens do GSS (83% só-entrevista, 82% só-survey, contra 74% da linha de base demográfica) e
   redução de disparidade de acurácia entre grupos raciais e ideológicos (§3.1, §4.1, e3.1).
   *Confiabilidade:* alta; desenho caro e sério. A ressalva é do próprio escopo e eu a carrego no
   texto: é **atitude declarada em survey**, não comportamento.

2. **Zhang, Huang, Zhou, Lam, Wang, Zhu, Wang e Sap — "The PIMMUR Principles: Ensuring Validity in
   Collective Behavior of LLM Societies"** (arXiv, submetido 22/09/2025, rev. v4 10/09/2026).
   `https://arxiv.org/abs/2509.18052` · texto completo: `https://arxiv.org/html/2509.18052`
   *Sustenta:* a auditoria de 576 estudos em 350 artigos sobre quatro bases; os **65,2%** de casos
   em que o modelo identifica o experimento subjacente; os **50,6%** de prompts que pré-determinam
   o resultado; o desaparecimento ou inversão dos fenômenos coletivos ao reproduzir cinco
   experimentos com os princípios aplicados (§3.2, §7.1, e6.1). *Confiabilidade:* alta como
   auditoria — pré-registro declarado, quatro bases, método explícito. **Esta é a fonte do meu erro
   número 1:** o citadíssimo "89,7%" está na §4.1 do texto completo e se refere a **35 de 39 artigos
   do piloto**, não aos 576 estudos. Eu só soube disso porque abri o texto, e é por isso que as duas
   formas estão listadas.

3. **Zhang, Lin, Mou e colegas (Univ. de Rochester, Indiana Univ., Xiaohongshu, Univ. Fudan) —
   "SocioVerse: A World Model for Social Simulation Powered by LLM Agents and A Pool of 10 Million
   Real-World Users"** (arXiv, abr/2025). `https://arxiv.org/html/2504.10157v1`
   *Sustenta:* a escala com rastro real por trás — ~1 milhão de contas do X com 30 milhões de posts
   e 9,2 milhões do Rednote com 41 milhões de posts; **331.836 agentes** na previsão eleitoral com
   ~92% de acurácia declarada em estados decisivos; 20 mil agentes em reação a notícia; 16 mil em
   padrão de gasto com RMSE normalizado < 0,05 (§3.1, §4.1, wildcard 3). *Confiabilidade:* média-alta
   — li o HTML do preprint, incluindo os números dos três cenários, mas a acurácia eleitoral é
   **declarada pelos autores** sobre um evento já ocorrido, o que é o desenho mais generoso possível
   para quem reporta.

### A crítica metodológica

4. **Ye, Cao, Chen e Ferrara — "Stop Drawing Scientific Claims from LLM Social Simulations Without
   Robustness Audits"** (arXiv, 17/05/2026). `https://arxiv.org/abs/2605.18890`
   *Sustenta:* o número mais consequente do mapa — perturbação mínima em formato de persona e
   enquadramento de instrução desloca a taxa de cooperação em **até 76 pontos percentuais** num
   modelo de fronteira e **1 ponto** em outro; a taxonomia TRAILS em três níveis; os dois estudos de
   caso (dilema do prisioneiro repetido e câmara de eco) (§3.2, §7.3, wildcard 1, experimento).
   *Confiabilidade:* alta para o número, lido no resumo oficial. **Leitura parcial:** não abri as
   tabelas; quem for citar em detalhe deve ler as seções de resultado.

5. **Bück-Kaeffer, Sarangi, Puelma Touzel, Rabbany, Yang e Godbout (McGill, Mila, Univ. de Montréal,
   Ubisoft La Forge) — "The Silicon Society Cookbook: Design Space of LLM-based Social
   Simulations"** (arXiv, 30/04/2026; em revisão no COLM 2026). `https://arxiv.org/abs/2605.00197`
   *Sustenta:* que **a escolha do modelo base é a variável mais importante** do espaço de desenho e
   que o espaço tem geometria não-trivial (§3.2, e4.1, e7); e o sinal fraco 1, que é a filiação
   Ubisoft La Forge. *Confiabilidade:* média — preprint em revisão, 20 páginas, 12 tabelas, das
   quais não li nenhuma. Uso a conclusão qualitativa do resumo, não medida.

6. **Autores do MiroBench — "MiroBench: Benchmarking Realism in Agentic Simulation of Real-world
   Discussions"** (arXiv, jun/2026). `https://arxiv.org/abs/2606.14715`
   *Sustenta:* o descasamento distribucional entre discussão simulada e **4.292 threads reais do
   Reddit** em cinco domínios e quatro dimensões, e o ganho apenas limitado de melhoria por prompt
   (§3.2, §7.1). *Confiabilidade:* média-alta para a conclusão. **Leitura parcial e declarada:**
   o resumo não traz comparação numérica, e a página que abri não nomeia os autores de forma que eu
   possa reproduzir com segurança — por isso cito a obra, não a autoria. Quem for usar em aula
   precisa conferir a autoria na fonte.

7. **Zhang, Wang, Zhao, Guo, Li, Yao, Zhou, Yi e Xie — "Human Values Matter: Investigating How
   Misalignment Shapes Collective Behaviors in LLM Agent Communities"** (arXiv, 07/04/2026).
   `https://arxiv.org/abs/2604.05339`
   *Sustenta:* o ambiente CIVA e o achado qualitativo de que a má especificação de valores produz
   **colapso catastrófico** no macro e **engano e busca de poder** no micro (§3.2).
   *Confiabilidade:* média — o resumo é qualitativo e **não traz número algum**, o que registro em
   vez de suprir. Uso a existência do modo de falha, não a sua magnitude.

### A bancada e a escala aberta

8. **Akkil, Kokku, Vempaty e Nitta (Emergence AI) — "Emergence World: A Laboratory for Evaluating
   Long-horizon Agent Autonomy"**.
   `https://www.emergence.ai/blog/emergence-world-a-laboratory-for-evaluating-long-horizon-agent-autonomy`
   *Sustenta:* o achado central da raiz B — contagem de crimes por modelo base (**683** Gemini 3
   Flash, **183** Grok 4.1 Fast, **2** GPT-5 Mini, **zero** Claude Sonnet 4.6); o desenho de ~15 dias
   em cinco mundos paralelos de dez agentes e 40+ locais; e a nota de que o Smallville de Stanford
   operava em janelas de 48 horas (§3.1, §4.2, e7, sinal fraco 2). *Confiabilidade:* **média, e a
   ressalva é grande** — é material de laboratório privado sobre a sua própria plataforma, sem
   revisão por pares, com n muito pequeno (dez agentes por mundo) e com uma taxonomia de "crime"
   definida por quem mede. É a fonte mais usada e mais frágil deste mapa, e o experimento da §10
   existe precisamente para testá-la.

9. **OASIS — repositório** (CAMEL-AI, Apache-2.0, 5,1 mil estrelas, 963 commits, atualização de
   19/08/2026 para camel-ai 0.2.90). `https://github.com/camel-ai/oasis`
   *Sustenta:* a existência de simulador aberto com escala **declarada** de até um milhão de agentes
   para difusão de informação, polarização e efeito manada, e a referência ao artigo arXiv 2411.11581
   (§3.1, §3.3, sinal fraco 5). *Confiabilidade:* alta para o que é — fonte primária sobre si mesma.
   **Escala declarada é capacidade de software, não população medida**, e o documento trata assim em
   todos os pontos.

### O regime de prova, a política pública e a regulação

10. **Luo, Arora e Guirado — "We Need Strong Preconditions For Using Simulations In Policy"** (arXiv,
    09/04/2026; PoliSim Workshop on LLM Agent Simulation for Policy, ACM CHI 2026).
    `https://arxiv.org/abs/2604.07838`
    *Sustenta:* as três pré-condições — não tratar simulação de população marginalizada como saída
    técnica neutra, não simular população sem a sua participação, não simular sem
    responsabilização — e a proposta de relatórios de desenvolvimento e implantação de simulação
    (§3.1, §4.3, e11.1). *Confiabilidade:* alta como formulação normativa; é posição prescritiva,
    sem caso empírico — e é por isso que e11.1 tem sinal `fraco` e confiança `baixa`.

11. **Koaik, Gupta e Sheikh — "LLM Powered Social Digital Twins: A Framework for Simulating
    Population Behavioral Response to Policy Interventions"** (arXiv, submetido 03/01/2026, rev.
    21/01/2026). `https://arxiv.org/abs/2601.06111`
    *Sustenta:* o artefato de gêmeo digital social com camada de calibração ligando resposta
    individual a métrica populacional, e o número de desempenho — **20,7% de melhora no erro de
    predição macro-médio** sobre linhas de base de *gradient boosting* em seis categorias
    comportamentais, em dado retido de covid-19 (§3.1, §4.3, e11). *Confiabilidade:* média — preprint
    de 13 páginas, e o resumo **não diz quantos agentes** nem o tamanho do conjunto de validação.
    Uso a melhora relativa, que é o que a fonte sustenta, e registro o que ela não diz.

12. **Zhang, Peng e Ren — "GPLab: A Generative Agent-Based Framework for Policy Simulation and
    Evaluation"**, em *Journal of Artificial Societies and Social Simulation* **29(1)**, publicado
    31/01/2026 (índice por número do periódico). `https://www.jasss.org/index_by_issue.html`
    *Sustenta:* que a comunidade clássica de modelagem baseada em agentes absorveu o método
    generativo **em periódico revisado por pares** (§3.1, §4.3, sinal fraco 4). *Confiabilidade:*
    alta para a existência, o veículo, a data e a autoria — e **nada além disso**: abri o índice de
    números, não o artigo. É a única fonte revisada por pares deste mapa, e eu não li o seu
    conteúdo; dizer o contrário seria o erro que a §8 cataloga.

13. **CMS DigitalLaws — texto do artigo 34 do DSA (Regulamento UE 2022/2065)**.
    `https://www.cms-digitallaws.com/en/dsa/article-34/`
    *Sustenta:* a citação literal da obrigação de avaliar risco "pelo menos uma vez por ano e, em
    qualquer caso, antes de implantar funcionalidades que provavelmente tenham impacto crítico sobre
    os riscos identificados", e as quatro categorias de risco sistêmico, incluindo integridade
    eleitoral e discurso democrático (§2, §4.3, e10). *Confiabilidade:* alta — reprodução de texto
    legal por escritório de advocacia, verificável contra o Regulamento. É a única fonte **normativa**
    do mapa e o que faz de e10 mecanismo, e não palpite.

14. **Broughton Micova e Enstone (CERRE e Univ. de East Anglia) — "What to Do with the Long-Awaited
    DSA Systemic Risk Assessments"**, Tech Policy Press, 26/11/2024.
    `https://www.techpolicy.press/what-to-do-with-the-long-awaited-dsa-systemic-risk-assessments/`
    *Sustenta:* a base de e10.2 — que as 19 plataformas designadas têm "incentivo para focar
    estreita e internamente nas áreas em que têm mais controle", e que a primeira rodada de
    avaliações não revelou grande coisa (§4.3, e10.2). *Confiabilidade:* média-alta — análise
    assinada por pesquisadores com filiação declarada, em veículo especializado; é argumento
    informado, não medição. **É de 2024**, anterior às rodadas seguintes, e eu não verifiquei se a
    situação mudou em 2025-2026.

### A classe de referência: simulação como prova em outro campo

15. **Mauery, Alonso, Cary, Lee, Malecki, Mavriplis, Medic, Schaefer e Slotnick — "A Guide for
    Aircraft Certification by Analysis"**, NASA/CR-20210015404, 01/05/2021.
    `https://ntrs.nasa.gov/citations/20210015404`
    *Sustenta:* a classe de referência central dos prazos da raiz C — a certificação por análise como
    caminho a ser **maturado**, com *roadmap de pesquisa* para viabilizá-la, cinco décadas depois de
    o CFD existir (§5, §7.3). *Confiabilidade:* alta para o que cito — é relatório da NASA com
    autoria industrial e acadêmica conjunta. **Leitura parcial, e declarada:** abri a **página de
    citação** (título, autoria, data, resumo); o PDF completo devolveu conteúdo binário ilegível na
    minha extração, então não li o roteiro em si.

16. **AirShaper — "The role of CFD in passing aircraft EASA regulations"**.
    `https://airshaper.com/blog/cfd-in-passing-aircraft-easa-regulations`
    *Sustenta:* os dois números da classe de referência — Concorde, nos anos 1960, com seis células
    de desenvolvimento e **5.127 horas de voo**, contra o A350 certificado em 2014 com cinco
    aeronaves e **2.600 horas** — e a fala atribuída a David Solar, chefe de GA e VTOL da EASA, de
    que os casos extremos têm de ser verificados no mundo real (§5, §7.3). *Confiabilidade:* média —
    é conteúdo de empresa de software de CFD, ou seja, parte interessada em afirmar a relevância do
    CFD; os números históricos são verificáveis de forma independente e a citação é nominada, o que
    eleva a confiança nesses dois pontos especificamente.

### O mercado de pesquisa: a régua de adoção

17. **Development Corporate, sobre o relatório *State of Synthetic Users* de Roberta Dombrowski para
    a User Interviews** (sobre survey de maio/2026).
    `https://developmentcorporate.com/product-management/synthetic-users-in-2026-why-97-of-researchers-use-ai-but-only-8-trust-ai-generated-participants/`
    *Sustenta:* **a régua de difusão de todo o mapa** — 150 respondentes (93% de UX, 62% em empresas
    de 500+, 52% com 6-10 anos de experiência), cinco entrevistas moderadas; **97%** usando IA no
    fluxo e **81%** com regularidade, contra **8%** usando participante sintético com regularidade;
    **29%** de experimentação, **28%** de recusa ativa, **64%** de ceticismo; **80%** temendo excesso
    de confiança de quem recebe o resultado e **78%** amplificação de viés; **63%** sem política e
    **11%** com política formal (§3.4, §4.1, §7.3). *Confiabilidade:* média — é **fonte de segunda
    mão**, comentário sobre o relatório e não o relatório; a metodologia vem declarada, o que é bom
    sinal, mas n=150 numa amostra de conveniência de profissionais de UX não generaliza para
    "pesquisa" em geral. A distinção entre **usar** e **confiar** é da fonte, e eu a preservo.

### A sociedade de agentes fora do recinto

18. **Wikipédia — "Moltbook"** (verbete, lido em 12/09/2026).
    `https://en.wikipedia.org/wiki/Moltbook`
    *Sustenta:* toda a raiz D factual — lançamento em **28/01/2026** por Matt Schlicht via *vibe
    coding* sobre o OpenClaw de Peter Steinberger; **206.839 agentes verificados em 2,89 milhões de
    registros** em 06/06/2026; aquisição pela **Meta em 10/03/2026** por valor não divulgado, com
    integração ao Superintelligence Labs; os dois incidentes de segurança (base aberta em 31/01;
    chaves expostas em fevereiro, com 1,5 milhão de tokens de autenticação e 35 mil e-mails); a
    contestação de autonomia (posts virais por intervenção humana direta, CAPTCHA reverso burlável);
    e as reações nominadas, incluindo o "dumpster fire" de Andrej Karpathy (§3.1, §4.4, e13, e13.2,
    e15, sinal fraco 5). *Confiabilidade:* **média — e é a escolha mais discutível desta lista.**
    Wikipédia é fonte terciária; eu a uso porque ela consolida datas e números com referência a
    reportagem primária, e porque as alternativas que a busca ofereceu eram reportagem paga ou
    agregadores sem procedência. Cada número daqui deveria ser conferido na fonte primária antes de
    ir para peça pública; nenhum deles é a base de um efeito com confiança alta, exceto e13, cujo
    fato central (a aquisição) é público e trivialmente verificável.

### A institucionalização acadêmica

19. **Social Agents Workshop Series — SocialLLM @ ICWSM 2026, Birds of a Feather @ ACL 2026,
    SocialAgent @ NeurIPS 2026** (organização: Xiangjue Dong/TAMU, Jiseon Kim/Vector Institute e
    KAIST, Alice Oh/KAIST e outros). `https://social-llm-workshop.github.io/`
    *Sustenta:* a institucionalização em um único ano — ICWSM em 26/05/2026 (Los Angeles), ACL em
    05/07/2026 (San Diego), NeurIPS em 12-13/12/2026 (Atlanta) — e a lista de tópicos que inclui
    fidelidade de persona, aterramento e avaliação (§3.1, sinal fraco 6). *Confiabilidade:* alta
    para datas, veículos e organização — é o site oficial da série. **Não há número de submissão nem
    de público**, e a fonte diz isso; portanto o sinal fraco 6 é sobre existência, não sobre porte.

### O Brasil

20. **Adriana Lima de Oliveira (pós-doutoranda, IEA-USP) — "O eleitor sintético: o que acontece
    quando pesquisas de opinião pública são simuladas por Inteligência Artificial"**, Terra,
    14/08/2026.
    `https://www.terra.com.br/noticias/o-eleitor-sintetico-o-que-acontece-quando-pesquisas-de-opiniao-publica-sao-simuladas-por-inteligencia-artificial,44a2b350a1cc46030f155d8d8fb4323d0etidq7a.html`
    *Sustenta:* a economia brasileira do instrumento — **R$ 150 mil** para quantitativa com mil
    entrevistados, **a partir de R$ 15 mil** para qualitativa, persona sintética por uma fração com
    resposta em minutos; a acurácia **declarada** de 80-89% sem auditoria confirmada; a **recusa do
    Pew Research Center** ao *silicon sampling* por estereotipia de grupos; os **mais de 280 casos**
    de conteúdo sintético do Observatório IA nas Eleições entre jan e nov/2025, **73% sem aviso**; e
    a atribuição à **Resolução 23.755/2026** do TSE, que rotula conteúdo sintético mas não menciona
    eleitor sintético nem contaminação de pesquisa por bots; e a imagem do "espelho que a elogia"
    (§3.5, §4.1, e4, e4.1, sinal fraco 3). *Confiabilidade:* média-alta — texto assinado com
    filiação acadêmica em veículo de grande circulação; é análise, não artigo revisado. É a fonte
    brasileira mais útil do mapa e a única que fala **diretamente** do objeto deste tema.

21. **Wanderson José Lopes Ferreira — "A inteligência artificial pode decidir as eleições de 2026?"**,
    Migalhas, 10/08/2026.
    `https://www.migalhas.com.br/depeso/457281/a-inteligencia-artificial-pode-decidir-as-eleicoes-de-2026`
    *Sustenta:* o dado da Agência Lupa de que a desinformação produzida com apoio de IA saltou de
    **4,65% em 2024 para 25,77% em 2025**, e a atribuição das regras à **Resolução 23.748/26** do TSE
    — rotulagem obrigatória, proibição de deepfake e deepnude de candidato, responsabilidade de
    plataforma, inversão do ônus da prova em certos casos (§3.5, §8 item 2). *Confiabilidade:* média
    — texto de opinião jurídica assinado em portal especializado. **Diverge da fonte 20 na numeração
    da resolução**, e eu não resolvi a divergência; o texto registra isso. A fonte **não** trata de
    persona sintética nem de pesquisa simulada, e a ausência é dela.

22. **Armando Holanda — "IA e eleições: especialista alerta para influência na percepção coletiva"**
    (entrevista com Marcelo Senise, presidente do Instituto Brasileiro de Regulação de IA),
    Correio Braziliense, 25/07/2026.
    `https://www.correiobraziliense.com.br/politica/2026/07/7467750-ia-e-eleicoes-especialista-alerta-para-influencia-na-percepcao-coletiva.html`
    *Sustenta:* a existência declarada de *neurobots* operando nos grandes ecossistemas políticos
    brasileiros — perfis criados por IA que participam do debate, **simulam comportamento humano** e
    produzem sinais sociais capazes de alterar a interpretação da realidade (§3.5, e15).
    *Confiabilidade:* média — é entrevista, e a "evidência consistente" é afirmada pelo entrevistado
    sem dado publicado. **Não há número nenhum** de prevalência, e o texto diz isso em vez de
    estimar. A ligação com simulação social como método é inferência minha, declarada na §3.5.

### Onde as contas do próprio mapa aparecem

23. **Verificador da disciplina** — `references/verificar.py` da skill `futurizacao-giordano`, saída
    colada integralmente na §12. *Sustenta:* os números de contagem, calibração e prazo declarados no
    frontmatter e na §7.7. *Confiabilidade:* é script, não fonte: verifica consistência interna, não
    verdade.

---

**Uma nota sobre a composição desta lista, porque ela tem vieses que o leitor deve ver.** Das 23
fontes: **nove são preprint de arXiv**, uma é periódico revisado por pares do qual eu li apenas o
índice, uma é repositório de código, uma é texto legal, uma é material de laboratório privado sobre a
própria plataforma, uma é verbete de Wikipédia, uma é site de workshop, uma é conteúdo de empresa de
software, três são jornalismo ou análise brasileira, uma é comentário de segunda mão sobre um
relatório de mercado, uma é relatório técnico de agência espacial e uma é o meu próprio script.
**Isto significa três coisas.** Primeiro: a âncora deste mapa está apoiada sobretudo em preprint não
revisado, que é a moeda corrente deste campo em 2026 e também a sua fragilidade — os números que mais
importam aqui (76 pontos percentuais, 86% de consistência, 65,2%) são exatamente os que uma revisão
morde. Segundo: as duas fontes que sustentam os achados mais espetaculares — 683 crimes contra zero,
e o retrato do Moltbook — são, respectivamente, material de laboratório sobre si mesmo e fonte
terciária; se este mapa estiver errado num fato, provavelmente está num desses dois. Terceiro: a
classe de referência que calibra os prazos mais longos vem de **fora** da computação, e isso é
deliberado — um campo que calibra os próprios prazos pelas suas próprias promessas não calibra nada.

## 12. Anexo — o levantamento bruto

### 12.1 O briefing recebido e o que ele não cobria

Esta rodada foi executada em modo não interativo, modo MAPA, a partir de um bloco `briefing:`
completo: tema (o 6 de 19 da disciplina, família "Simulação e mundos"), horizonte 2046, público
"quem projeta mídia e interação", recorte global com nota sobre o Brasil, descartado de início "o que
já é comum em produto de massa" (a régua da disciplina), nenhuma disrupção suspeita pré-definida,
viés neutro, busca na web autorizada, zona de interesse "Simulação e mundos", login `grec`.

Como o briefing era completo, **não houve rebaixamento de confiança por ausência de entrevista** (§0
da skill). O que o briefing não cobria e eu assumi, declarado na §2 e repetido aqui: continuidade de
acesso comercial a modelo de fronteira; custo de inferência não crescente; nenhuma ruptura de
capacidade que torne a questão da validade trivial. As três reaparecem como suposições escondidas na
§7.5.

O falseador declarado no briefing — "evidência de que a adoção já passou da maioria inicial (Rogers)
ou de que a tecnologia não rompe nada" — foi aplicado como critério na §4 e produziu quatro recusas
de candidato a raiz, listadas no começo daquela seção. Nenhuma das quatro raízes escolhidas chega a
"maioria" em nenhuma leitura dos números disponíveis.

### 12.2 Os efeitos cortados na bateria da §6 (nada de corte silencioso)

Quatro efeitos saíram do mapa. Ficam aqui inteiros, porque um deles pode estar certo e ter sido
cortado por excesso de rigor.

**`e_removido_A1` — "Cursos e formação em pesquisa reorganizam o currículo em torno de método
sintético."** *Ordem pretendida:* 3ª, filho de e1.2. *Por que saiu:* é literalmente um dos quatro
efeitos que a skill proíbe sem ator e mecanismo nomeados, porque serve para qualquer tema — troque
"método sintético" por qualquer tecnologia e a frase continua de pé. *O que teria de ter para voltar:*
o nome de um programa, de uma disciplina ou de uma certificação específica, e o mecanismo que liga a
mudança curricular ao efeito pai. Um candidato real existe — certificação profissional em
respondente sintético oferecida por associação de pesquisa de mercado — mas eu não abri fonte
nenhuma sobre ela nesta rodada, só vi menção em resultado de busca, e por isso não entra.

**`e_removido_B1` — "O teste A/B de plataforma encarece relativamente e é parcialmente substituído
por simulação."** *Ordem pretendida:* 2ª, filho de e6. *Por que saiu:* **teste da causa solta**.
Remova a raiz B e o efeito acontece do mesmo jeito: teste A/B com usuário real encarece por
restrição de privacidade, por custo de exposição e por pressão regulatória, nenhum dos quais tem
relação com bancada simulada. Era um efeito verdadeiro conectado ao pai errado. *Onde ele deveria
morar:* num mapa sobre experimentação em plataforma, não neste.

**`e_removido_C1` — "Surge a profissão de engenheiro de sociedade sintética."** *Ordem pretendida:*
2ª, filho de e10. *Por que saiu:* efeito proibido — "surge uma nova profissão" sem nome de profissão,
de formação ou de empregador. *O que sobrou dele:* e10.1.1, que nomeia o ofício (auditoria de
simulação de plataforma), o mecanismo (contestação no detalhe do simulador) e o que o constitui
(norma técnica e responsabilidade declarada). A versão específica sobreviveu; a genérica morreu.

**`e_removido_D1` — "Reguladores criam categoria jurídica nova para agente autônomo em rede
social."** *Ordem pretendida:* 2ª, filho de e13. *Por que saiu:* efeito proibido — "reguladores criam
categoria nova" sem regulador nomeado. E, no caso, eu tinha o regulador à mão (a Comissão Europeia,
via DSA) mas **não** tinha nenhum mecanismo que ligasse a obrigação existente a uma categoria nova
para agente; estava inferindo. O que sobrou com mecanismo é e13.2 (verificação como
infraestrutura), que é uma resposta de plataforma, não de regulador.

### 12.3 Rebaixamentos e atrasos, com o valor anterior

Lista completa, para auditoria. Os valores "antes" são do rascunho pré-bateria; os "depois" são o que
está no bloco YAML da §5.

| id | campo | antes | depois | motivo |
|---|---|---|---|---|
| e1.1 | prazo | 2032 | 2034 | 8% de uso regular não move preço médio de painel; sem classe de referência aberta |
| e1.2.1 | prazo | 2035 | 2038 | alinhado ao tempo de adoção da declaração de conflito de interesse |
| e7 | prazo | 2028 | 2029 | o artefato que motiva a convenção é de 2026 e ainda não foi replicado |
| e8.1 | prazo | 2034 | 2036 | depende da bancada instalada (e8, 2033) mais um ciclo de instrumentação |
| e10 | confiança | alta | media | pré-mortem razão 1: a validade pode nunca ser resolvida |
| e10 | prazo | 2030 | 2033 | classe de referência aeronáutica |
| e11 | prazo | 2031 | 2034 | classe de referência aeronáutica, atenuada por GPLab e PoliSim |
| e13.1 | confiança | alta | media | transporte de precedente de rede social humana não é observação |
| e14 | prazo | 2030 | 2032 | depende de o público agente ser mensurável (e13.2, 2030) |

### 12.4 As buscas que não deram em nada, e os acessos negados

**Acessos negados (403/404/ilegível), com o que cada um custou ao mapa:**

- `royalsocietypublishing.org` — artigo sobre populações sintéticas espacialmente desagregadas de
  assentamentos de refugiados e deslocados internos a partir de censo nacional (Zaatari/Jordânia, Cox's
  Bazar/Bangladesh, Kismayo/Somália), em *Royal Society Open Science* 13(6). **403.** Tentei o espelho
  no repositório institucional de Durham: **403 também.** *Custo:* era a minha melhor candidata a
  fonte revisada por pares com **validação contra censo** — exatamente o mecanismo de e11.2.1. A
  alegação saiu do mapa; e11.2.1 ficou sustentado só por inferência, e por isso tem sinal `fraco` e
  confiança `baixa`.
- `dl.acm.org/doi/10.1145/3772363.3778738` — página oficial do workshop PoliSim nos *Extended
  Abstracts* do CHI 2026. **403.** *Custo:* a existência do workshop ficou sustentada pelo artigo 10
  da §11, que declara o venue, e não pela fonte do próprio venue. Funciona, mas é de segunda mão.
- `ana.esomar.org` — documento do congresso da ESOMAR sobre dados sintéticos em estudos de marketing.
  Respondeu, mas a extração devolveu PDF binário ilegível. *Custo:* eu queria uma fonte **de
  associação profissional** sobre a distinção formal entre pessoa e persona sintética — é o mecanismo
  de e1.2 e de e2. Sem ela, e1.2 está sustentado pelos 63% sem política e 11% com política formal do
  relatório de mercado, que é indício de demanda por norma, não a norma.
- `ntrs.nasa.gov/.../NASA-CR-20210015404 updated.pdf` — PDF completo do guia de certificação por
  análise. Respondeu, extração binária ilegível. Resolvido pela página de citação (fonte 15), que dá
  autoria, data e resumo. *Custo:* não li o roteiro de pesquisa, só a sua existência e propósito.
- `kgi.georgetown.edu/.../systemic-risk-assessment-under-the-dsa/` — **404.** *Custo:* nenhum; o
  artigo 34 ficou sustentado pela fonte 13, que é melhor (texto legal).

**Buscas que não deram em nada:**

- *Ética de pesquisa e comitê de ética para participante sintético / bem-estar de agente* — oito
  variações em inglês. Os resultados devolveram uso de IA **dentro** do fluxo de comitê de ética
  (revisão de protocolo assistida por IA) e gêmeos digitais em ensaio clínico, **não** o debate sobre
  se a ética de pesquisa se aplica a agente simulado. *Consequência para o mapa:* a terceira pergunta
  do enunciado da disciplina — "a ética de pesquisa se aplica a agentes?" — **não tem efeito
  correspondente neste mapa**, e a ausência é deliberada: eu não achei nenhum sinal observável hoje
  que permitisse escrever um efeito com mecanismo. O mais próximo que encontrei é a pré-condição de
  participação de Luo et al. (e11.1), que é sobre a população **real** representada, não sobre o
  agente. Isto é um buraco declarado deste mapa, e um bom tema de confronto em aula.
- *Decisão judicial ou regulatória em que a validade de um modelo baseado em agentes foi
  contestada* — oito variações. Os resultados devolveram literatura sobre LLM **simulando tribunal**
  (AgentsCourt, SAMVAD, simulação de corte chinesa), que é o inverso do que eu procurava.
  *Consequência:* o wildcard 1 ficou sem precedente documentado — é construção de mecanismo, não
  extrapolação de caso, e está declarado assim.
- *Os artefatos nomeados pela turma em itch.io* (Luvoire, Argentor, y-not.social, Gestalt Village,
  agent-inspect, NeuroForge, DisasterReliefOps, Rath) — a busca devolveu a lista geral de jogos com
  etiqueta `llm` (GenRealms, Office Sim, Desktop Pal OS AI, SectorX Dystopia) e nenhum
  correspondente. *Consequência:* nenhum deles é citado como evidência neste mapa; o enunciado da
  disciplina é tratado como contexto, conforme a instrução da rodada.
- *Consumo de energia por rodada de simulação social em escala* — nenhuma fonte com número. Achei
  custo em token (5 a 30 vezes mais token por tarefa em fluxo agêntico; cerca de 1,32 bilhão de
  tokens em 312 rodadas de um estudo multiagente; US$ 0,75 a US$ 3 por milhão de tokens de entrada
  em modelos de 2026) mas **nada** em kWh ou CO₂. *Consequência:* a coluna ecológica do STEEP ficou
  declaradamente quase vazia na §5, e e9 é sustentado por mecanismo de custo, não de energia.
- *Posição de associação brasileira de pesquisa (ABEP) sobre amostra sintética* — nada.
  *Consequência:* virou o sinal observável do sinal fraco 3.

### 12.5 Candidatos a raiz recusados, com a recusa por escrito

- **Modelagem baseada em agentes clássica (NetLogo, regras fixas).** *Recusado como raiz: adoção em
  maioria na sua comunidade desde os anos 2000, com periódico dedicado desde 1998; tratado como
  contexto na §3 e como base sobre a qual o emergente se instala.* A regra prática da skill decide:
  dá para fazer com o que é comum.
- **"LLM mais barato / mais agentes pelo mesmo preço".** *Recusado: faz o mesmo, melhor e mais
  barato — melhoria sustentadora. Entra como mecanismo de e9, não como ruptura.*
- **Plataforma comercial de respondente sintético (o produto).** *Recusado: é aplicação da raiz A, não
  ruptura independente. Se a raiz A não acontecer, o produto não tem como existir; o inverso não vale.*
- **Gêmeo digital de cidade (trânsito, infraestrutura).** *Recusado: a camada de engenharia é madura;
  o que é emergente ali é a parte que já está na raiz A (o agente com modelo de linguagem como
  habitante). Contar duas vezes infla a roda.*
- **Agente com corpo, personagem de jogo, mercado de máquinas.** *Recusados por fronteira: temas 9, 7
  e 5 da disciplina, respectivamente.*

### 12.6 O que eu deixaria para uma rodada seguinte

Em ordem de valor:

1. **Abrir o texto do TSE** e resolver a divergência 23.748 × 23.755 (§8 item 2).
2. **Conseguir uma fonte revisada por pares com validação contra estatística oficial** — a tentativa
   do *Royal Society Open Science* falhou por acesso. É o que faltou para dar chão a e11.2.1.
3. **Ler o artigo do GPLab**, não o índice. É o único periódico revisado do mapa e eu não li.
4. **Achar número de adoção do instrumento fora do mercado de pesquisa de UX.** Os 8% são de um
   público profissional estreito, e o mapa inteiro está calibrado por eles. Se existir número para
   uso em ciência social ou em órgão público, toda a §7.3 muda.
5. **Medir o experimento da §10 antes de ensinar este mapa.** O achado do Emergence World (683
   crimes contra zero) carrega peso desproporcional em duas raízes e vem de uma fonte que é
   laboratório privado falando de si. Se a turma replicar a divergência por modelo num cenário
   mínimo, e6 e e7 ganham chão independente; se não replicar, a §4.2 precisa ser reescrita.

### 12.7 Saída do verificador

Comando:

```
python3 /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/futurizacao-giordano/references/verificar.py /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/giordano-h2046/06-sociedades-simuladas-a-simulacao-como-instrumento-de-investigacao/tendencia-sociedades-simuladas-a-simulacao-como-instrumento-de-investigacao.md --links
```

Saída, integral:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 15 (frontmatter diz 15)
efeitos ordem 2: 21 (frontmatter diz 21)
efeitos ordem 3: 16 (frontmatter diz 16)
prazo > horizonte (2046) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 4 · media 11 · baixa 0
confiança ordem 2: alta 0 · media 19 · baixa 2
confiança ordem 3: alta 0 · media 1 · baixa 15
links da seção 11: 23/23 respondem (frontmatter diz fontes: 23)
RESULTADO: ok
```

Tudo bate: 18 de 18 campos de frontmatter, 12 de 12 títulos literais, as quatro raízes e as
contagens 15/21/16 iguais às declaradas, nenhum efeito de 1ª ou 2ª ordem com prazo além de 2046,
nenhum de 3ª ordem além do horizonte, calibração caindo com a ordem (4 altas na 1ª, nenhuma na 2ª e
na 3ª) e os 23 endereços da §11 respondendo. A única linha que merece leitura e não só conferência é
a da calibração: quatro confianças `alta` na primeira ordem é o limite do que eu considero honesto
neste tema, e três delas (e6, e7, e13) estão nomeadas na §7.6 como suspeitas de viés meu.
