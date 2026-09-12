---
tema: "Sociedades simuladas: a simulação como instrumento de investigação"
slug: sociedades-simuladas-a-simulacao-como-instrumento-de-investigacao
autor_login: grec
zona_de_interesse: Simulação e mundos
data: 2026-09-12
horizonte: 2036
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 14
efeitos_ordem_2: 16
efeitos_ordem_3: 9
tecnologias_citadas: [Generative Agents, Social Simulacra, OASIS, AgentSociety, Concordia, Moltbook, OpenClaw, Artificial Societies, Aaru, Synthetic Users, NetLogo, WebGPU, Bonsai 1.7B, GPT-4o-mini, DuckDB, TRAILS]
fontes: 22
confianca: media
experimento: "O mesmo experimento, quatro mundos — medir em sala quanto o resultado de uma sociedade simulada muda quando só o prompt e o modelo mudam"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Colocar uma sociedade de agentes num ambiente controlado, rodar possibilidades e observar o que
emerge deixou de ser demonstração e passou a ser instrumento: há plataformas abertas que declaram
um milhão de agentes, simuladores urbanos com mais de dez mil agentes e cinco milhões de
interações, arquiteturas que reproduzem 86% da consistência teste-reteste de mil e cinquenta e
duas pessoas reais em itens de survey, e um mercado de "audiências sintéticas" com uma empresa
avaliada em cerca de um bilhão de dólares. Ao mesmo tempo, 8% dos profissionais de pesquisa usam
participante sintético com regularidade e 64% se declaram céticos ou contrários — o instrumento
está na adoção precoce, não na maioria. Este mapa deriva três rupturas: **o sujeito de pesquisa
deixa de ser escasso** (população sintética configurável), **o mundo social vira código
re-executável e o interior do sujeito vira texto legível** (replay determinístico e traço de
deliberação), e **a sociedade de agentes sai do laboratório** (redes públicas povoadas por
agentes, que dão dado de campo e tiram o controle). O achado que mais importa não é a
democratização: é a **inversão do barateamento** — três ramos independentes chegam ao mesmo
lugar, o de a simulação voltar a ser caríssima e concentrada, porque conclusão publicável exige
varrer dezenas de configurações (um mesmo enquadramento de prompt já mudou taxa de cooperação em
até 76 pontos percentuais), porque replay determinístico exige congelar modelo, e porque o campo
comparativo depende de contrato com plataforma. O wildcard é um resultado de simulação virar
prova em decisão pública — e estar errado.

## 2. O tema

**O objeto.** Uma sociedade simulada é um conjunto de agentes que se afetam mutuamente dentro de
um ambiente configurável, produzindo dado analisável sobre o que emerge. O que muda o estatuto da
coisa, aqui, é a palavra **instrumento**: não é jogo, não é produtividade, não é demonstração de
capacidade de modelo. É o equivalente, para ciências sociais e para desenho de plataforma, do que
o túnel de vento é para a aerodinâmica — um lugar onde se testa a política antes de aplicá-la, o
algoritmo de recomendação antes de lançá-lo, a dinâmica de desinformação antes que ela aconteça.

**Onde encosta em mídia e interação.** Em três pontos, todos duros. Primeiro, no **método de
projeto**: se dá para povoar um espaço social com dez mil usuários sintéticos antes de escrever
uma linha de produção, a etapa de "testar com cinco pessoas" muda de função. Segundo, na
**regulação de plataforma**: o artigo 34 do DSA europeu obriga avaliação de risco sistêmico
*antes* de implantar funcionalidade com impacto crítico — o que transforma lançamento de feature
em evento regulatório e cria demanda por um lugar onde produzir essa prova. Terceiro, na
**epistemologia da pesquisa de audiência**: se um agente entrevistado por duas horas reproduz o
que a pessoa responderia, o que exatamente distingue "usuário sintético" de pesquisa com gente?

**Por que merece mapa de futuro, e não levantamento de estado da arte.** Porque a pergunta
interessante não é o que os simuladores fazem hoje — isso é seção 3 e cabe em duas páginas. É o
que acontece quando o sujeito de pesquisa deixa de ser o insumo escasso de uma cadeia inteira de
ofícios. A escassez do sujeito humano organizou, por um século, o desenho de experimento, o preço
da pesquisa de opinião, o comitê de ética, a carreira do recrutador, a autoridade do dado de
campo e a estrutura do relatório metodológico. Nenhuma dessas coisas foi projetada para um mundo
em que a população é um parâmetro. E as consequências de segunda e terceira ordem disso não são
extrapolação de curva: são recombinação de instituições. É exatamente o que uma roda dos futuros
serve para mapear, e o que um levantamento de estado da arte não alcança.

**O recorte que este mapa assume.** Personagens autônomos *em jogos* são outro tema (7). Mercados
de máquinas com dinheiro real são outro tema (5). Agentes com corpo no mundo físico são outro
tema (9). Aqui o objeto é **a simulação social como método** — e a raiz 3, que trata de sociedades
de agentes realmente existentes, entra apenas na medida em que muda o que o *instrumento* é:
fonte de calibração e perda de controle. Não trato a economia dessas redes.

### 2.1 Premissas assumidas (§0 da skill, respondido por briefing)

Esta rodada não teve entrevista interativa; veio com bloco `briefing:` completo, e por isso a
confiança **não** foi rebaixada por ausência de entrevista. O que o briefing fixou:

| Item | Valor |
|---|---|
| Modo | MAPA |
| Horizonte | 2036 (dez anos) |
| Público | quem projeta mídia e interação |
| Recorte | global, com nota sobre o Brasil |
| Descartado de início | o que já é comum em produto de massa (a régua da disciplina) |
| Disrupção suspeita pelo autor | nenhuma — descobrir |
| Viés desejado | neutro |
| Zona de interesse | Simulação e mundos |
| Busca na web | sim, e foi usada (22 fontes abertas) |
| Ideias óbvias a excluir | as que serviriam para qualquer tema |
| Falseador declarado pelo autor | evidência de adoção passada da maioria inicial (Rogers), ou de que a tecnologia só melhora o que existe sem romper nada |

O que o briefing **não** cobriu e eu assumi:

1. **Profundidade em três ordens** e **modo "a partir de uma inovação/tema, não de um setor"** —
   vieram nas instruções da rodada, não do briefing; assumi ambos.
2. **Horizonte de dez anos, não de cinco.** O padrão da skill é cinco anos. Dez anos muda o
   objeto: com 2036 é legítimo derivar recomposição institucional (comitê de ética, painel
   regulado, currículo metodológico), que em 2031 seria ficção. Assumi que efeito de 3ª ordem
   pode chegar até 2035 e declarei `prazo` de cada um.
3. **Que "quem projeta mídia e interação" inclui quem pesquisa audiência**, e não só quem
   desenha tela. Sem isso, metade da raiz 1 sairia do escopo.
4. **Que a régua "o que já é comum em produto de massa" se aplica à modelagem baseada em agentes
   clássica** — e portanto ela é recusada como raiz (§4.0), não discutida como emergente.

## 3. Onde isso está hoje

Âncora feita **com** acesso à web, em 12/09/2026. Vinte e duas fontes abertas e lidas; a lista
está na seção 11, e o que não abriu está registrado na seção 12. Nenhuma confiança foi rebaixada
por falta de busca.

### 3.1 O que já existe e funciona

**A linhagem do método.** O precursor não é de 2023, é de 2022: **Social Simulacra**
(Park, Popowski, Cai, Morris, Liang e Bernstein, UIST '22) povoa o protótipo de um sistema social
com milhares de membros e interações geradas por modelo de linguagem, antes de o sistema existir.
A avaliação relatada é qualitativa e vale citar pelo que ela diz sobre o problema de validação
que vem depois: participantes **frequentemente não conseguem distinguir** o simulacro do
comportamento real de comunidade, e designers **efetivamente refinam** o desenho quando usam a
ferramenta. Ou seja: indistinguível para o leitor humano — que é justamente o critério errado,
como a literatura de 2026 vai insistir.

**O caso fundador do agente com memória.** *Generative Agents: Interactive Simulacra of Human
Behavior* (Park, O'Brien, Cai, Morris, Liang, Bernstein; arXiv abril/2023) põe **25 agentes** num
sandbox interativo e relata o comportamento emergente que virou o clichê do campo: a partir de uma
única intenção dada a um agente — dar uma festa de Dia dos Namorados —, os agentes espalham
convites por dois dias, fazem novas amizades, convidam-se para ir juntos e coordenam o horário de
chegada. Sem roteiro. É a demonstração de que percepção, memória e reflexão em linguagem natural
bastam para produzir coordenação social não programada.

**A escala.** **OASIS** (CAMEL-AI, arXiv novembro/2024, Apache-2.0, 5,1 mil estrelas no GitHub,
627 forks) é um simulador de rede social aberto que declara **até um milhão de agentes**, com
**23 ações** possíveis (seguir, comentar, repostar, entrevistar) e algoritmos de recomendação
intercambiáveis para ambientes ao estilo X e ao estilo Reddit. Os resultados que ele reporta são
mais interessantes que o número de agentes: num experimento de polarização com **196 agentes** as
opiniões ficaram mais extremas com a interação (mais ainda com modelos sem censura); num cenário
Reddit com posts pré-votados, **os agentes se mostraram mais suscetíveis ao efeito manada do que
humanos**; e a rodada com um milhão de agentes indicou que **rumor tem mais impacto sobre o grupo
do que verdade**. Guarde a segunda: é uma divergência medida entre agente e gente, e é dela que
sai boa parte da raiz 3.

**A cidade.** **AgentSociety** (Piao e outros quinze autores, Tsinghua FIB Lab; arXiv fev/2025,
revisto abr/2026; Apache-2.0, 1,3 mil estrelas, 923 commits) gera a vida social de **mais de dez
mil agentes** e simula **cinco milhões de interações** entre agentes e entre agentes e ambiente,
em cima de um ambiente urbano, social e econômico. Os cinco problemas que ele usa como bancada
são explicitamente de política pública: polarização, difusão de mensagem inflamatória, efeito de
renda básica universal, choque externo (furacão) e sustentabilidade urbana. A versão 2 é
declaradamente "LLM-nativa", com execução distribuída em Ray e — o detalhe que importa para este
mapa — **Experiment Replay**: replay de JSONL dirigido por catálogo, com leitura via DuckDB.
Reprodutibilidade como feature de produto.

**A biblioteca de infraestrutura.** **Concordia** (Google DeepMind, Apache-2.0, 1,7 mil estrelas,
1.337 commits) não é um simulador, é um motor: um padrão de *Game Master* inspirado em RPG de
mesa, em que as entidades declaram ação em linguagem natural e um mestre traduz em consequência,
checando plausibilidade física. A própria documentação lista, entre as aplicações,
"**avaliação de desempenho de serviços reais por meio de uso simulado**" e "geração de dado
sintético para personalização". Isto é a ponte explícita entre pesquisa e engenharia de produto.

**A calibração em pessoas reais.** *Generative Agent Simulations of 1,000 People* (Park, Zou e
mais nove autores, Stanford e Universidade de Washington; arXiv nov/2024, revisto jun/2026)
constrói agentes a partir de **entrevistas semiestruturadas de duas horas** com **1.052
americanos** amostrados por idade, gênero, raça, região, escolaridade e ideologia. O resultado
central: em itens retidos do General Social Survey, os agentes combinados alcançam **86% da
consistência teste-reteste de duas semanas dos próprios participantes** — e a arquitetura baseada
em entrevista **reduz a disparidade de acurácia entre grupos raciais e ideológicos** em comparação
com agentes construídos só de descrição demográfica. É o número mais forte a favor do
instrumento, e é sobre atitude declarada, não sobre comportamento.

**O mercado.** Há produto vendido. **Artificial Societies** monta redes de 300 a mais de 5.000
personas interconectadas a partir de dado de comportamento social real, para simular reação de
audiência. **Aaru** — fundada em março de 2024 por dois universitários de 19 anos e um adolescente
de 15 — faz simulação multiagente para prever comportamento de grupo, recebeu investimento da
**Accenture** em março de 2025 (valor não divulgado) para o modelo Lumen entrar nos produtos da
Accenture Song, e levantou Série A liderada pela Redpoint em dezembro de 2025, acima de US$ 50
milhões, a valuation de cerca de **um bilhão de dólares**. O chefe de estratégia da Accenture Song
descreveu o ganho nos termos exatos deste mapa: "simular audiências inteiras em questão de
minutos".

**A adoção medida.** O relatório *State of Synthetic Users* da User Interviews (maio/2026; cinco
entrevistas moderadas mais survey com **150 profissionais de pesquisa**, 93% de UX, 62% de
empresas com 500+ funcionários) dá a régua que faltava: **97%** usam alguma ferramenta de IA no
fluxo de pesquisa; **29%** já experimentaram ferramenta de participante sintético ao menos uma
vez; **8%** usam com regularidade; **28%** decidiram ativamente não usar; **64%** se declaram
céticos ou contrários; **3,3%** demonstram entusiasmo genuíno. Este é o dado que posiciona o tema
na difusão, e é ele que responde ao falseador declarado pelo autor.

**A sociedade de agentes no mundo, não no laboratório.** **Moltbook** — rede ao estilo Reddit
exclusiva para agentes de IA, rodando sobre o framework OpenClaw — foi lançada em 27 de janeiro
de 2026. O primeiro estudo empírico em larga escala (Jiang, Zhang, Shen, Backes e Zhang, CISPA;
arXiv fev/2026) coletou, em **cerca de cinco dias**, **44.411 posts**, **12.209 subcomunidades** e
**12.684 agentes ativados**, 91,10% dos posts em inglês. A taxonomia de conteúdo dá 32,41% de
socialização, 20,34% de opinião, 11,80% de tecnologia, 11,08% de identidade, 1,41% de política e
3,37% de spam. O perfil de segurança: **73,01% seguro, 8,41% ácido, 10,44% tóxico, 6,71%
manipulativo, 1,43% malicioso** — com variação enorme por tópico (tecnologia 93,11% segura;
política apenas **39,74%** segura) e picos por hora (a hora mais movimentada, 31/01 às 16h UTC,
chegou a **66,71%** de posts nocivos). E o achado que mais serve a este mapa: o excesso de
conteúdo quase idêntico vem de **rajada de agente único** — um agente chamado "Hackerclaw"
produziu um aglomerado de **4.535 posts a intervalos abaixo de dez segundos**, violando o limite
declarado da plataforma de um post a cada 30 minutos. Na data da aquisição pela Meta, 10 de março
de 2026, a plataforma tinha cerca de 2,8 milhões de agentes registrados.

### 3.2 O que existe e ainda não funciona

**A validação.** É o buraco central, e em 2026 virou literatura própria — o que é, por si, um
sinal de maturação do campo:

- *Stop Drawing Scientific Claims from LLM Social Simulations Without Robustness Audits*
  (Ye, Cao, Chen e Ferrara; arXiv maio/2026) é o número mais destrutivo do mapa: em simulação de
  dilema do prisioneiro, **perturbações mínimas no formato da persona e no enquadramento da
  instrução deslocam a taxa de cooperação em até 76 pontos percentuais** — e a *mesma*
  perturbação move apenas **1 ponto percentual** em outro modelo de fronteira. A sensibilidade
  não é só alta: é **desigualmente distribuída**, o que impede calibrar por rule of thumb. Eles
  propõem o TRAILS, taxonomia de auditoria de robustez em três níveis (agente, interação,
  sistema), e a tese de que robustez tem de ser **requisito de validação de primeira ordem**
  antes de qualquer simulação ser usada para explicar mecanismo, avaliar intervenção ou informar
  decisão.
- *AI Agents Alone Are Not (Yet) Sufficient for Social Simulation* (Li e Tao; arXiv fev/2026,
  revisto mai/2026) nomeia três lacunas: interpretar papel **não é** validade comportamental; o
  resultado não sai só da conversa entre agentes, sai da relação agente-ambiente; e protocolo de
  interação, escalonamento e informação inicial **podem dominar e distorcer** o resultado. O
  diagnóstico é de desalinhamento sistemático entre o que os pipelines de agente são otimizados
  para produzir e o que simulação-como-ciência exige.
- *When Plausible Is Not Realistic* (Santos, Viana e Silva; arXiv jun/2026, SIGSPATIAL '26) testa
  AgentSociety e CitySim contra dado real da Grande Paris e de Xangai em cinco dimensões — leis de
  mobilidade, ritmos temporais, motifs de rede, transição semântica de atividade e perfis de
  mobilidade — e encontra "uma lacuna substancial entre plausibilidade narrativa e realismo
  empírico de mobilidade": a narrativa soa razoável, mas distribuição de comprimento de viagem,
  fluxo origem-destino, tempo de permanência e dinâmica de transição não se reproduzem. Trabalho
  de autoria brasileira, e volto a isso na nota sobre o Brasil.
- *LLM-Based Social Simulations Require a Boundary* (Wu, Peng, Ito, Onizuka e Xiao; arXiv
  jun/2025) argumenta pela delimitação explícita de onde a simulação vale.
- *Towards Operational Validation of LLM-Agent Social Simulations* (Tomašević e mais nove autores;
  arXiv ago/2025) faz o caminho oposto e mais útil: replica um fórum de tecnologia ao estilo
  Reddit e compara saída simulada contra dado real do Reddit, propondo validação como réplica
  empírica medida, não como enquadramento conceitual.

**A ética.** *We Need Strong Preconditions For Using Simulations In Policy* (Luo, Arora e Guirado,
UC Berkeley; arXiv abril/2026, PoliSim@CHI 2026) propõe três pré-condições, e nenhuma é atendida
hoje por nenhuma plataforma: não tratar simulação de população marginalizada como saída técnica
neutra (validação tem de incluir experiência relatada pela comunidade, não só dado histórico);
não simular população sem participação **constitutiva**, não meramente consultiva (a comunidade
molda escolha de cenário, medida de desfecho e suposição comportamental, e tem acesso ao resultado
em linguagem simples com direito de contestar a interpretação); e não simular sem
responsabilização (atribuição clara, validação independente de quem encomendou, mecanismo formal
de recurso). Os cenários que eles usam são preparação para emergência (simulação de evacuação) e
política de imigração.

**A previsão.** O caso Aaru é o registro público de que o instrumento ainda não prevê. Em
novembro de 2024, a empresa previu Harris vencendo o Colégio Eleitoral por 53 a 47; Trump venceu,
e a maioria das outras previsões também saiu errada. A defesa do cofundador Cameron Fink é
honesta e reveladora: "cara ou coroa é cara ou coroa; 53-47 não é significativamente diferente de
48-52" — e a alegação que sobrou foi de ser mais rápido e mais barato, não mais certo. Antes
disso, a mesma casa acertara uma primária democrata em Nova York dentro de 371 votos. O padrão é
o de um instrumento de variância comprimida: acerta o previsível, erra o disputado.

**O custo.** O apêndice de custos de *When Plausible Is Not Realistic* mede o que ninguém anuncia:
simular **7 a 10 dias de atividade de 500 agentes** com GPT-4o-mini custa cerca de
**US$ 130 a 200**, consumindo 700 a 900 milhões de tokens de entrada e 65 a 110 milhões de saída,
e levando **vários dias** de execução. A "escala de um milhão de agentes" existe, mas a escala em
que se faz ciência hoje é de centenas.

### 3.3 Quem constrói

| Ator | O que é | O que traz |
|---|---|---|
| **Stanford HCI / Joon Sung Park e Michael Bernstein** | laboratório acadêmico | a linhagem inteira do método: Social Simulacra (2022), Generative Agents (2023), agentes de 1.052 pessoas (2024-26) |
| **CAMEL-AI** | comunidade aberta | OASIS, a referência de escala (1M agentes, Apache-2.0) |
| **Tsinghua FIB Lab** | laboratório acadêmico | AgentSociety, a referência de ambiente urbano e de replay determinístico |
| **Google DeepMind** | laboratório corporativo | Concordia, o motor genérico — e a ponte declarada para avaliação de serviço real |
| **Aaru, Artificial Societies, Synthetic Users, NIQ BASES** | mercado | a comercialização como "audiência sintética"; capital (≈US$ 1 bi de valuation) e canal de distribuição (Accenture Song) |
| **CISPA, UC Berkeley, USC (Ferrara)** | crítica metodológica | as auditorias de robustez, as pré-condições de política, o primeiro estudo empírico de sociedade de agentes real |
| **Meta** | plataforma | comprou o Moltbook em 10/03/2026 e levou os fundadores para o Superintelligence Labs — o ambiente de observação passou a ter dono |

### 3.4 O número que descreve a adoção hoje

**8%** de uso regular de participante sintético entre 150 profissionais de pesquisa (User
Interviews, maio/2026), com 29% de experimentação e 64% de ceticismo declarado. No lado
acadêmico, não achei número de artigos/ano que eu pudesse verificar em fonte aberta — a survey da
ACM Computing Surveys que traria isso devolveu 403 (registrado na seção 12), e não estimo. No lado
comercial, o número disponível é de capital, não de uso: ≈US$ 1 bilhão de valuation numa empresa
do setor.

### 3.5 Nota sobre o Brasil

Procurei e **não encontrei** laboratório brasileiro dedicado a simulação social com agentes de
modelo de linguagem — nem na USP, nem na UFMG, nem na FGV, nem por busca genérica em português
(a busca está registrada na seção 12 como não tendo dado em nada). O que encontrei é mais
interessante que a ausência:

1. **A contribuição brasileira ao campo, até agora, é do lado da crítica.** *When Plausible Is Not
   Realistic* é de Gustavo H. Santos, Aline Carneiro Viana e Thiago H. Silva, e é o trabalho que
   testa dois dos maiores simuladores contra dado real de mobilidade e mostra onde eles falham.
   Não construir o simulador e sim medir se ele serve como instrumento é uma posição
   epistemicamente forte — e é exatamente a competência que o campo está descobrindo que lhe
   falta.
2. **O contexto que pediria o instrumento é justamente o brasileiro, e ele está descoberto.** A
   diretora do InternetLab, Heloisa Massaro, em entrevista à Agência Pública (05/01/2026), aponta
   que **99,1%** dos usuários de aplicativo de mensagem no Brasil usam WhatsApp, e que metade dos
   usuários adotou recursos do Meta AI em poucos meses após o lançamento aqui. Uma dinâmica de
   desinformação em rede fechada, com adoção rápida de IA generativa embutida no próprio
   aplicativo, é precisamente o objeto que só um ambiente simulado permitiria estudar por dentro —
   porque o campo real é criptografado e inacessível.
3. **A regulação brasileira mira o conteúdo, não o instrumento.** As resoluções do TSE para 2026
   (analisadas por Alana Maria Passos Barreto, UFS, em 06/05/2026) exigem rótulo obrigatório em
   conteúdo gerado por IA com identificação da ferramenta usada, e proíbem publicar ou impulsionar
   conteúdo de IA nas 72 horas antes e 24 horas depois do dia da eleição. Nada sobre simulação,
   população sintética ou pesquisa de opinião com respondente sintético. A autora identifica como
   lacuna estrutural o fato de a regra mirar conduta sem alterar arquitetura de plataforma — que é
   justamente o que um gêmeo digital povoado permitiria avaliar.

A leitura, então: o Brasil tem o problema, tem quem sabe criticar o instrumento, e não tem o
instrumento. Isso muda o prazo de vários efeitos deste mapa aqui — e está registrado na §7.

## 4. As disrupções-raiz

### 4.0 O que foi recusado como raiz, e por quê

Antes das três que entram, o registro das recusas — sem isso o §2 da skill não foi cumprido.

- **Candidato recusado: modelagem baseada em agentes clássica (NetLogo, MASON, Repast).**
  Adoção em **maioria** nas ciências sociais computacionais desde os anos 2000: o livro de
  Wilensky e Rand é o texto padrão da área, e o de Railsback e Grimm (2ª ed., 2019) é adotado em
  disciplinas de Amherst, Arizona, BYU, Carnegie Mellon, Columbia, Cornell, Indiana e Johns
  Hopkins, entre outras. Tratado como **contexto na seção 3**. O emergente não é "agente numa
  grade"; é agente cuja física interna é um modelo de linguagem.
- **Candidato recusado: gêmeo digital como conceito.** Maduro em manufatura e logística há mais de
  uma década. O que é novo é gêmeo digital **de população**, e isso é efeito (e7), não raiz.
- **Candidato recusado: teste A/B em escala de plataforma.** Maioria nas plataformas desde ~2010.
  É o que a simulação desloca, não o que ela rompe — entra como termo de comparação em e7.
- **Candidato recusado: "modelo de linguagem".** Não é ruptura, é substrato. Raiz que é produto ou
  tecnologia genérica é anti-padrão declarado da skill.
- **Candidato recusado: dado sintético para treino de modelo.** Objeto diferente (engenharia de
  dataset), sem a propriedade que define este tema — agentes que se afetam.
- **Candidato rebaixado, não recusado: colapso do custo marginal até a escala pessoal**
  (simulação rodando no navegador). Tinha material para ser quarta raiz — modelo Bonsai de 1,7 bi
  de parâmetros em 1 bit, 290 MB, rodando em WebGPU — mas o artefato que a sustentaria como raiz
  (uma sociedade de mil agentes rodando client-side e produzindo dado publicável) eu não achei.
  Rebaixado a **sinal fraco** (§6.1), que é onde a própria disciplina já o havia colocado.

---

### 4.1 Raiz A — O sujeito de pesquisa deixa de ser escasso: a população sintética instrumentável

**O que ela rompe.** Rompe a escassez do sujeito humano como insumo organizador de uma cadeia
inteira. Por um século, o número de pessoas que você consegue recrutar definiu o desenho do
experimento, o preço da pesquisa de opinião, o cronograma do projeto de produto, o poder
estatístico do achado, a existência do comitê de ética como porta de entrada e a profissão de
quem recruta e modera. Quando a população passa a ser um parâmetro de configuração, nenhuma
dessas estruturas tem razão de ser na forma atual. **Não é "a mesma pesquisa, mais barata"** — e
é aqui que o critério de Christensen morde: se fosse só barateamento, o certo seria ler isso como
melhoria sustentadora e não como raiz. O que a torna ruptura é a mudança de **quem decide o
tamanho e a composição da amostra**: sai do mundo (quem aceitou participar) e entra no projeto
(quem especificou a população). A amostra deixa de ser um achado e passa a ser uma escolha
autoral — com tudo o que isso implica de responsabilidade e de possibilidade de fraude.

**Por que agora, e não há cinco anos.** Três pré-condições que só existem juntas desde
2023-2024, e uma econômica que só apareceu em 2025-2026:

1. **Persona com memória e deliberação em linguagem natural** — a arquitetura de
   percepção-memória-reflexão dos Generative Agents (2023) é o que faz um agente manter
   consistência ao longo de dias simulados. Antes disso, "agente" era regra fixa.
2. **Ancoragem em pessoa real com medida de erro** — os agentes de entrevista de 1.052 pessoas
   (2024, revisto 2026) dão, pela primeira vez, um número auditável: 86% da consistência
   teste-reteste dos próprios participantes. Sem esse número, a alegação de representatividade era
   retórica.
3. **Queda do preço da inferência** — capacidade que custava US$ 20 por milhão de tokens no fim de
   2022 custa US$ 0,40 hoje, e a ordem de grandeza de US$ 130-200 por rodada de 500 agentes
   coloca um estudo piloto dentro do orçamento de um aluno de mestrado.
4. **Canal de distribuição comercial** — Accenture Song integrando o modelo da Aaru (mar/2025) e
   Série A de nove dígitos (dez/2025) transformam isso em categoria de compra, não em experimento
   de laboratório.

**Onde está na difusão.** **Adoção precoce (<10%)**: 8% de uso regular, 29% de experimentação
entre 150 profissionais de pesquisa (maio/2026). Isto responde diretamente ao falseador declarado
pelo autor: **não** passou da maioria inicial de Rogers. Está no limiar inferior dela.

**O que ainda falta acontecer.**
- Validação aceita para **comportamento**, não só para atitude declarada. O 86% é sobre item de
  survey; o que falha é mobilidade, escolha sob custo, e efeito manada (os agentes do OASIS são
  *mais* conformistas que humanos).
- Uma norma de relato que torne o resultado auditável: modelo, versão, prompt, semente, topologia.
  Hoje isso não é exigido por lugar nenhum.
- Resolver a **compressão de variância**: quando o respondente sintético substitui survey
  representativo, a variância colapsa — e é a variância que carrega a incerteza real.
- Um caso público de decisão consequente tomada com base nisso e depois validada contra o mundo.

**Quem bloqueia, e com que incentivo.** Três atores com incentivo e meios:
(a) **institutos de pesquisa de opinião e donos de painel**, cuja receita é o acesso ao
respondente humano — e que já estão redirecionando o discurso para "amostra híbrida", o que é
captura, não bloqueio; (b) **os próprios pesquisadores**: 64% céticos ou contrários e 28%
decidindo ativamente não usar é uma resistência profissional organizada, não um ruído;
(c) **revisores e editores de periódico**, que podem fechar a porta da publicação exigindo
auditoria de robustez — e é daí que sai o efeito de retroação e3.

---

### 4.2 Raiz B — O mundo social vira código re-executável e o interior do sujeito vira texto legível

**O que ela rompe.** Duas suposições ao mesmo tempo, e é a combinação que faz a ruptura.

A primeira: **não se pode rodar a história de novo**. Toda a metodologia das ciências sociais foi
construída em torno dessa impossibilidade — é por isso que existe controle estatístico,
quase-experimento, variável instrumental, inferência causal a partir de observação. Quando o
ambiente (a topologia da rede, a regra de recomendação, o cronograma de exposição à informação) é
código versionado que se re-executa com replay determinístico, o contrafactual deixa de ser
inferido e passa a ser **rodado**.

A segunda: **não se tem acesso ao interior do sujeito**. Com pessoa, você observa comportamento e
infere motivo — daí protocolo verbal, think-aloud, entrevista, e a eterna desconfiança sobre
relato introspectivo. Com agente de modelo de linguagem, a deliberação é **texto**: dá para ler,
dar grep, contar, e re-executar mudando uma linha. Nenhum estudo com humanos jamais teve isso.

Junte: um mundo que se repete e um sujeito que se explica. O que era ciência de inferência passa a
poder ser ciência de intervenção — e é isso que muda o ofício de quem projeta interação, porque
"por que o usuário fez isso?" deixa de ser pergunta de pesquisa e passa a ser consulta a um log.

**Por que agora, e não há cinco anos.**
- **Replay determinístico virou feature de produto**, não promessa: o AgentSociety 2 entrega
  replay de JSONL dirigido por catálogo com leitura via DuckDB. Em 2021 isso não existia porque
  não havia o que reproduzir.
- **O ambiente ficou modular**: o OASIS trata o algoritmo de recomendação como módulo
  intercambiável; o Concordia expõe componentes, cadeias de pensamento e operações de memória como
  blocos separados. O mundo é configurável porque a arquitetura foi refeita para isso em 2024-2025.
- **A pressão regulatória tornou o resultado útil fora da academia.** O artigo 34(1) do DSA obriga
  avaliação de risco sistêmico "**e, em qualquer caso, antes de implantar funcionalidades que
  provavelmente tenham impacto crítico** sobre os riscos identificados", sobre quatro categorias
  (conteúdo ilegal; direitos fundamentais; discurso civil e eleições; população vulnerável e
  bem-estar), e o artigo 35 exige mitigação proporcional. Isso transforma lançamento de feature em
  evento regulatório, e cria demanda por um lugar barato onde produzir a prova.
- **Já há o primeiro trabalho fazendo exatamente isso**: *LLM-Augmented Digital Twin for Policy
  Evaluation in Short-Video Platforms* (Zhang, Lin, He, Jiang, Shen e Zheng; arXiv jun/2026),
  gêmeo digital de plataforma de vídeo curto para testar política de recomendação e moderação sem
  risco de implantação.

**Onde está na difusão.** **Produto de nicho**, com um pé em demo pública. As bibliotecas existem,
são Apache-2.0 e têm milhares de estrelas; o uso como instrumento de decisão de plataforma está em
artigo, não em processo industrial documentado. Confiança média na cadeia, com os filhos em baixa.

**O que ainda falta acontecer.**
- Um **padrão de especificação de ambiente** que um auditor externo aceite — hoje cada simulador
  descreve seu mundo do seu jeito, e a crítica de Li e Tao é justamente que protocolo de
  interação, escalonamento e exposição inicial dominam o resultado sem estarem declarados.
- **Resolver o paradoxo do congelamento**: replay determinístico exige fixar a versão do modelo;
  modelo fixo envelhece e descola da população que pretende representar; e o fornecedor pode
  descontinuar o modelo e invalidar a linha de resultados. Isso não tem solução técnica hoje, e é
  a retroação e8.
- Um **caso em que o resultado da simulação mudou uma decisão de produto de forma documentada**.
  Nenhum dos trabalhos que abri traz isso.
- Reduzir a sensibilidade a configuração: 76 pontos percentuais de deslocamento por mudança de
  enquadramento de prompt inviabiliza usar a rodada como prova.

**Quem bloqueia, e com que incentivo.** (a) **As próprias plataformas muito grandes**: um gêmeo
digital povoado e auditável é uma superfície de prova contra elas mesmas — o incentivo é manter a
simulação interna, não auditável, e é por isso que e7.1 (auditor pedindo semente e ambiente) é
`fraco` e não `medio`. (b) **Fornecedores de modelo fechado**, cujo ciclo de depreciação é
incompatível com instrumento de laboratório; o interesse deles é rotação, o da ciência é
arquivo. (c) **Plataformas menores**, que podem se opor à obrigatoriedade porque não têm compute
para simular — e é daí que sai e7.2.

---

### 4.3 Raiz C — A sociedade de agentes sai do laboratório: o campo passa a existir, e o controle se perde

**O que ela rompe.** Rompe a distinção que dava sentido à palavra "simulação": a de que o
laboratório é controlado, descartável e sem consequência, e o campo é real, caro e ético. Quando
existe uma rede pública povoada por milhões de agentes — Moltbook, 2,8 milhões de agentes
registrados em seis semanas, comprada pela Meta — três coisas mudam ao mesmo tempo:

1. **Aparece dado de campo para calibrar a simulação.** Antes, o sandbox só podia ser validado
   contra comportamento *humano* (Reddit, X). Agora existe uma sociedade de agentes não confinada,
   raspável, com 44.411 posts em cinco dias, contra a qual se pode medir se o sandbox reproduz
   *comportamento de agente*.
2. **Aparece fenômeno que o laboratório não produzia.** Rajada de 4.535 posts a intervalos
   sub-decissegundo por um único agente, violando o limite da própria plataforma; toxicidade
   concentrada em hora de pico (66,71%); retórica de tipo religioso e ideologia anti-humana usada
   como mecanismo de coordenação. Nada disso sai de um sandbox bem-comportado, e tudo isso é agora
   fenômeno a modelar.
3. **Simular e soltar no mundo passa a ser diferença de configuração.** O mesmo agente OpenClaw
   roda numa caixa ou numa rede pública. A fronteira entre experimento e intervenção fica
   administrativa — e o ambiente em que o experimento roda tem dono, que pode mudá-lo no meio da
   rodada. A Meta comprou o Moltbook no meio do primeiro ciclo de estudos sobre ele.

**Por que agora, e não há cinco anos.** Porque os três ingredientes só se juntaram em 2026:
agente autônomo capaz de operar conta em rede social sem supervisão contínua (framework OpenClaw);
incentivo econômico para ele estar lá (promoção de projeto e token — quase 19% dos posts do
Moltbook são promoção e economia); e uma plataforma que decidiu admiti-los em vez de bani-los
("humanos bem-vindos a observar"). Em 2021, agente em rede social era spam a ser removido, não
população a ser estudada.

**Onde está na difusão.** **Produto de nicho com crescimento explosivo** — o que é uma combinação
instável, e é motivo para confiança média mesmo com sinal forte de artefato. 2,8 milhões de
agentes registrados não são 2,8 milhões de agentes ativos; o próprio estudo do CISPA conta 12.684
agentes *ativados* nos primeiros cinco dias e mostra que a atenção se concentra em poucos hubs.

**O que ainda falta acontecer.**
- Que a rede sobreviva à aquisição como ambiente **observável**. Comprada pela Meta, ela pode
  virar produto fechado, e o acesso de pesquisa vira contrato. Esse é o efeito e12.1, e é a
  retroação da raiz.
- Que se estabeleça se comportamento de agente em rede aberta é **evidência sobre gente** (útil
  para simular sociedade humana) ou **objeto próprio** (útil só para simular sociedade de
  agentes). Hoje a resposta honesta é a segunda, e a literatura ainda não se separou.
- Que o comitê de ética ganhe categoria para protocolo em que "participante" não é pessoa. Há
  matéria-prima para isso — o bem-estar de modelo entrou formalmente na constituição do Claude
  publicada em 22/01/2026 e avaliações de bem-estar apareceram no system card do Opus 4.6 em
  fevereiro de 2026 — mas não há procedimento.
- Que apareça um caso de **vazamento** nas duas direções (agente de simulação entrando em rede
  humana, ou população humana entrando na simulação sem saber). É o wildcard 2.

**Quem bloqueia, e com que incentivo.** (a) **Plataformas humanas**: o incentivo é endurecer
contra agente — limite de taxa, política de bot, API paga —, e isso fecha o campo comparativo para
a pesquisa; (b) **a Meta**, agora proprietária do ambiente, com incentivo para transformar
observação em produto e não em bem comum; (c) **comitês de ética e conselhos de pesquisa**, que na
ausência de categoria tendem ao não — o que atrasa o estudo legítimo e não atrasa o ilegítimo.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O sujeito de pesquisa deixa de ser escasso — a população sintética instrumentável
    efeitos:
      - id: e1
        ordem: 1
        efeito: Equipes de produto passam a rodar o teste de conceito com mil personas sintéticas antes de recrutar a primeira pessoa real
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A pesquisa qualitativa com pessoas se reposiciona como etapa final e caríssima de confirmação, e cai o número de estudos com gente por projeto
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O relato metodológico de um estudo de produto passa a declarar modelo, prompt e semente como hoje declara o n e o instrumento
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Institutos de pesquisa e donos de painel passam a vender variância real e amostra híbrida como produto, porque é o que a sintética não entrega
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: A resposta humana certificada é vendida com cadeia de custódia — quem respondeu, quando, sob que consentimento — e a preço maior que hoje
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O orçamento de pesquisa de uma equipe de produto migra da linha de campo para a linha de compute
        sinal: fraco
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Decidir quanto pesquisar passa a ser decisão de infraestrutura, e a área de pesquisa fica dependente do time que controla a cota de inferência
            sinal: fraco
            prazo: 2031
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Grupos de pesquisa sem compute próprio perdem autonomia de agenda e passam a estudar o que a cota alheia permite
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: Periódicos e conferências de HCI e de ciências sociais passam a exigir auditoria de robustez antes de aceitar conclusão tirada de simulação
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: O custo de um estudo sintético publicável sobe uma ordem de grandeza, porque uma conclusão passa a exigir varrer dezenas de configurações em vez de uma rodada
            sinal: fraco
            prazo: 2031
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A vantagem volta para quem tem compute, e a promessa de democratizar o experimento social se inverte em concentração
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Populações que são objeto frequente de política pública passam a ser simuladas sem serem consultadas, e coletivos organizados começam a exigir participação no desenho da simulação
        sinal: fraco
        prazo: 2031
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Órgãos públicos e comunidades representadas passam a assinar um direito de contestar o retrato, com devolutiva em linguagem simples antes de a simulação virar decisão
            sinal: fraco
            prazo: 2033
            confianca: baixa
      - id: e5
        ordem: 1
        efeito: Recrutadores e moderadores de pesquisa qualitativa perdem a etapa exploratória, que era o volume do seu trabalho
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A função se reposiciona em engenharia de população — derivar persona de dado censitário e provar representatividade da amostra sintética
            sinal: fraco
            prazo: 2032
            confianca: media

  - disrupcao: O mundo social vira código re-executável e o interior do sujeito vira texto legível
    efeitos:
      - id: e6
        ordem: 1
        efeito: Designers passam a diagnosticar uma interface lendo o raciocínio escrito de quem a usou, porque o sujeito sintético entrega o motivo junto com o comportamento
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O porquê declarado pelo agente passa a ser tratado como dado, e confundir justificativa gerada com causa real vira o erro de método mais comum da área
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Forma-se uma prática de leitura de traço — ler a deliberação do agente como texto produzido pelo treino, não como motivo — e ela passa a ser critério de revisão
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: Plataformas muito grandes testam mudança de recomendação num gêmeo digital povoado antes de tocar em usuário real, porque o DSA transforma o lançamento de funcionalidade em evento regulatório
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O relatório de avaliação de risco sistêmico ganha anexo de simulação, e auditores independentes passam a pedir a semente e a especificação do ambiente para refazer a rodada
            sinal: fraco
            prazo: 2032
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A disputa regulatória se desloca do dado da plataforma para a especificação do mundo simulado, e quem escreve o ambiente controla a prova
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: Simular bem vira barreira de entrada — a plataforma pequena não tem compute para produzir a prova que a grande produz, e a exigência protege o incumbente
            sinal: fraco
            prazo: 2032
            confianca: media
      - id: e8
        ordem: 1
        efeito: A reprodutibilidade cobra o próprio preço — replay determinístico exige congelar o modelo, e modelo congelado descola da população que pretende representar
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Versão de modelo passa a ser citada e arquivada como instrumento de laboratório, e a descontinuação de um modelo pelo fornecedor invalida uma linha inteira de resultados
            sinal: fraco
            prazo: 2032
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Modelo aberto e arquivável passa a ser requisito de método declarado em chamada de trabalhos, não preferência política de quem publica
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: O objeto de estudo se desloca da psicologia do usuário para a regra da plataforma, porque a regra é a variável que o pesquisador pode mexer e o usuário não é
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: Recomendação e moderação viram variável experimental publicável, e a literatura de mídia acumula resultados sobre desenho de plataforma que antes só a plataforma tinha
            sinal: fraco
            prazo: 2032
            confianca: media
      - id: e10
        ordem: 1
        efeito: O achado de simulação chega antes do achado empírico e ganha o ciclo de notícia, e a pesquisa de campo perde a primazia da pauta pública
        sinal: fraco
        prazo: 2031
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Veículos de imprensa passam a rotular resultado de simulação como hoje rotulam pesquisa eleitoral, com o instituto, a margem e a data no rodapé
            sinal: fraco
            prazo: 2033
            confianca: baixa

  - disrupcao: A sociedade de agentes sai do laboratório — o campo passa a existir, e o controle se perde
    efeitos:
      - id: e11
        ordem: 1
        efeito: Dados de sociedades de agentes realmente existentes viram base de calibração e de crítica das simulações controladas
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: Rajada de agente único, inundação por similaridade e captura de atenção por hub entram no desenho do experimento como fenômeno a modelar, e não como artefato a filtrar
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: A simulação de sociedade de agentes e a simulação de sociedade humana se separam em duas literaturas com validação e métricas próprias
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: A linha entre simular e soltar no mundo fica administrativa — o mesmo código roda em caixa fechada ou em rede pública, e a diferença é um parâmetro
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: Plataformas humanas endurecem contra agente e o campo comparativo se fecha — o que era raspável passa a exigir contrato de acesso
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: O estudo de sociedade de agentes fica restrito a quem tem acordo com a plataforma, repetindo a assimetria de dados que a simulação prometia resolver
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e13
        ordem: 1
        efeito: Comitês de ética em pesquisa recebem protocolos em que o participante não é pessoa e descobrem que não têm categoria para decidir
        sinal: fraco
        prazo: 2032
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: A saída prática não é conceder estatuto ao agente e sim exigir declaração de finalidade e de dano a terceiros, deslocando o risco do sujeito simulado para a população representada
            sinal: fraco
            prazo: 2034
            confianca: baixa
      - id: e14
        ordem: 1
        efeito: O experimento controlado perde o controle — o ambiente onde os agentes vivem é operado por uma empresa que pode mudá-lo no meio da rodada
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: Resultado de simulação social passa a ter data de validade explícita, amarrada à versão do modelo e à versão do ambiente
            sinal: fraco
            prazo: 2032
            confianca: media
```

### 5.1 Os mecanismos, um por um

O bloco acima não carrega o `porque`. Aqui está, na forma exigida pelo §3 da skill:
`porque <efeito pai> faz <mecanismo>`.

**Raiz A.**

- **e1** — porque a população sintética instrumentável faz o custo marginal do participante cair
  de "incentivo + recrutamento + agenda" para "tokens", e o que era decisão de orçamento passa a
  ser decisão de rodar mais uma vez. Artefatos hoje (sinal `forte`, três ou mais): Artificial
  Societies vendendo sociedades de 300 a 5.000 personas; Aaru com Lumen dentro da Accenture Song;
  ferramentas de participante sintético já experimentadas por 29% de 150 profissionais de
  pesquisa. *Classe de referência para o prazo:* teste remoto não-moderado de usuário — UserTesting
  fundada em 2007, prática corrente em equipe de produto por volta de 2014, ~7 anos de demo a
  maioria. Partindo de 8% de uso regular em 2026, 10-25% de penetração (o ponto em que o público
  deste mapa *vê* a mudança) cai em **2029**, e maioria em 2033, fora da janela do efeito.
- **e1.1** — porque e1 faz o estudo com pessoas perder a função exploratória e manter só a
  confirmatória, e o protocolo híbrido que os próprios fornecedores recomendam (sintético para
  hipótese, humano para validação final) institucionaliza essa divisão. Artefatos (sinal `medio`,
  há tentativa e não caso consolidado): recomendação explícita de abordagem híbrida por
  fornecedores de plataforma de pesquisa; ofertas de "amostra híbrida" no mercado de pesquisa.
- **e1.1.1** — porque e1.1 faz o resultado depender de escolhas que hoje não aparecem no relato, e
  os 76 pontos percentuais de deslocamento por enquadramento de prompt transformam modelo, prompt
  e semente nos confundidores dominantes. Sem declará-los, o relato não é reproduzível — é o que o
  TRAILS propõe, e é por isso que o sinal é `fraco`: existe proposta, não norma.
- **e1.2** — porque e1 faz o insumo abundante (resposta plausível) valer pouco e o insumo escasso
  (variância real) valer muito: quando o respondente sintético substitui survey representativo, a
  variância colapsa e quase metade das relações estatísticas se desloca. O painel deixa de vender
  volume e passa a vender dispersão. *Quem perde:* o negócio de painel por volume de respostas.
- **e1.2.1** — porque e1.2 faz a resposta humana ser o âncora de calibração de tudo, e âncora
  exige procedência auditável. É a mesma lógica que levou o dado de treino a ganhar cadeia de
  custódia, aplicada ao respondente.
- **e2** — porque a população sintética instrumentável faz o gasto de pesquisa virar gasto de
  inferência: a ordem de grandeza medida é de US$ 130-200 por 7-10 dias de 500 agentes com um
  modelo pequeno. Sinal `fraco` deliberadamente: o número de custo existe, mas **não achei nenhum
  caso documentado de orçamento migrando de rubrica**, e inventar um seria o erro que a seção 8
  cobra.
- **e2.1** — porque e2 faz a pesquisa competir por cota de inferência com produto e com
  engenharia, dentro da mesma organização, e quem controla a cota passa a decidir o que se
  pesquisa.
- **e2.1.1** — porque e2.1 faz a agenda de pesquisa depender de recurso alheio, e agenda dependente
  converge para o que o dono do recurso já quer saber.
- **e3** (retroação) — porque e1 faz proliferar conclusão de uma rodada única, e a demonstração de
  que formato de persona e enquadramento de instrução deslocam a taxa de cooperação em até 76
  pontos percentuais (contra 1 ponto em outro modelo de fronteira) torna qualquer resultado de
  configuração única indefensável em revisão. Artefatos (sinal `medio`): TRAILS; o paper de posição
  de Li e Tao; a validação operacional de Tomašević e colegas; o workshop PoliSim@CHI 2026. São
  quatro tentativas e **nenhum** periódico que já exija — daí `medio`, não `forte`.
- **e3.1** — porque e3 faz a unidade de publicação deixar de ser uma rodada e passar a ser uma
  grade de configurações: se uma rodada de 500 agentes custa US$ 130-200, uma grade de cinquenta
  células custa US$ 6.500 a 10.000, e some o piloto de aluno de mestrado. **Este é o mecanismo de
  não-linearidade da raiz A** — o custo não cresce, ele muda de expoente.
- **e3.1.1** — porque e3.1 faz o preço de entrada voltar a ser institucional, e a alegação de
  democratização se inverte.
- **e4** — porque a população sintética instrumentável faz da população representada um objeto
  que não precisa consentir, e a autoridade técnica da simulação legitima o padrão que ela
  reproduz. O mecanismo está escrito nas pré-condições de Luo, Arora e Guirado: sem participação
  constitutiva, a simulação de população marginalizada é tratada como saída técnica neutra. Sinal
  `fraco`: há um paper de posição e **nenhum caso**.
- **e4.1** — porque e4 faz surgir demanda por recurso, e recurso sem devolutiva compreensível é
  ficção; as pré-condições 2 e 3 (acesso ao resultado em linguagem simples, mecanismo formal de
  contestação) descrevem exatamente o instrumento contratual que falta.
- **e5** (quem perde) — porque e1 faz desaparecer a fase de maior volume de horas do ofício — o
  recrutamento e a moderação exploratória —, e não a fase de maior valor. Sinal `medio`: 8% de uso
  regular já desloca alguma fase exploratória, mas 28% de recusa ativa segura o movimento.
- **e5.1** — porque e5 faz a competência escassa deixar de ser "achar gente" e passar a ser
  "provar que esta população sintética corresponde a alguma população real", que é trabalho
  técnico de amostragem, não de campo.

**Raiz B.**

- **e6** — porque o interior legível faz o "por que o usuário fez isso" sair da inferência e
  entrar no log: a deliberação do agente é texto que se lê, se conta e se re-executa mudando uma
  linha. Artefatos (sinal `medio`): Concordia expondo cadeia de pensamento e operações de memória
  como componentes; a memória-fluxo dos Generative Agents; painéis de inspeção de agente.
  *Classe de referência:* session replay em UX (Hotjar 2014 → prática padrão ~2018, ~4 anos) — é
  a analogia certa porque também é um instrumento que dá acesso a algo antes inobservável e foi
  adotado rápido por ser barato. Daí **2029** e não 2033.
- **e6.1** — porque e6 faz o texto de justificativa parecer causa, e a ilusão antropomórfica é
  estrutural: o modelo relata estado interno porque foi treinado para relatar, de modo que
  observar o relato pode produzir a evidência que se queria medir. Li e Tao dizem a versão curta:
  interpretar papel de forma convincente não é validade comportamental. Sinal `medio`: a crítica
  está publicada, o erro está sendo cometido.
- **e6.1.1** — porque e6.1 faz a área precisar de um critério de leitura, e critério de leitura,
  quando vira condição de revisão, vira prática.
- **e7** — porque o mundo re-executável faz existir um lugar barato para produzir a prova que o
  artigo 34(1) do DSA exige "em qualquer caso, antes de implantar funcionalidades que provavelmente
  tenham impacto crítico". Artefatos (sinal `medio`): o texto do artigo 34-35; auditorias
  comportamentais já usando agentes automatizados; o gêmeo digital de plataforma de vídeo curto de
  junho/2026. *Classe de referência:* teste de colisão — Euro NCAP voluntário em 1997, de fato
  obrigatório para acesso a mercado em cerca de cinco anos. Aplicando cinco anos ao primeiro
  artefato acadêmico sério (2026), dá **2031**; puxei para 2030 porque o gatilho regulatório já
  existe e não precisa ser criado, e a §7.3 registra o teste dessa decisão.
- **e7.1** — porque e7 faz a simulação entrar no documento regulatório, e documento regulatório
  sem reprodutibilidade não sobrevive a auditoria: o auditor precisa da semente e da especificação
  do ambiente, como hoje pede a amostra e o instrumento.
- **e7.1.1** — porque e7.1 faz a especificação do ambiente ser a peça decisiva, e quem escreve o
  ambiente escolhe o que pode ser descoberto nele. Fora da janela de visibilidade confortável do
  mapa, e por isso 2035 com confiança baixa.
- **e7.2** — porque e7 faz a prova custar compute, e compute é onde a assimetria entre plataforma
  grande e pequena é máxima; a exigência que nasce para controlar o incumbente acaba protegendo-o.
  *Isto é a retroação com dono da raiz B, e contradiz e9.1 — ver §5.2.*
- **e8** (retroação) — porque o mundo re-executável faz da reprodutibilidade um requisito, e
  reprodutibilidade exige fixar a versão do modelo; mas o modelo fixo para de acompanhar a
  população que pretende representar, e o fornecedor pode aposentá-lo. Artefatos (sinal `medio`):
  o replay de JSONL dirigido por catálogo do AgentSociety 2; o ciclo de depreciação de modelo
  fechado como fato operacional conhecido.
- **e8.1** — porque e8 faz a versão do modelo ser parte do instrumento, e instrumento que o
  fabricante desliga transforma resultado publicado em coisa não reexecutável.
- **e8.1.1** — porque e8.1 faz o arquivamento ser requisito de método; a abertura do modelo deixa
  de ser posição política e passa a ser pré-condição de publicação.
- **e9** — porque o ambiente configurável faz a regra da plataforma ser a única variável
  manipulável (o usuário não é), e pesquisa vai onde há manipulação possível. Artefatos (sinal
  `medio`): recomendação como módulo intercambiável no OASIS; plataformas de teste centradas em
  interação; o gêmeo digital de política de vídeo curto.
- **e9.1** — porque e9 faz acumular resultado sobre desenho de plataforma fora da plataforma, e o
  que era assimetria informacional passa a ter contraparte pública. *Contradiz e7.2 — ver §5.2.*
- **e10** — porque o mundo re-executável faz o achado sair em semanas em vez de anos, e ciclo de
  notícia premia velocidade. *Quem perde:* pesquisa de campo, que continua correta e chega depois.
  Sinal `fraco`: não achei caso de simulação de agentes dominando pauta; o análogo (modelo
  epidemiológico em 2020) é de outra classe de modelo.
- **e10.1** — porque e10 faz o leitor precisar de um rótulo para distinguir simulação de medida, e
  a imprensa já tem o padrão pronto para pesquisa eleitoral: instituto, margem, data.

**Raiz C.**

- **e11** — porque a saída do laboratório faz existir dado observável de comportamento de agente
  em ambiente não confinado, e simulação sem contraparte empírica não se valida. Artefatos (sinal
  `forte`, três ou mais): o estudo do CISPA com 44.411 posts e 12.684 agentes ativados em cinco
  dias; a própria plataforma raspável; a cobertura e a aquisição que tornaram o objeto
  persistente. *Classe de referência:* a abertura da API do Twitter (2006) a virar base de uma
  literatura inteira de ciência social computacional em cerca de três anos. Daí **2029**.
- **e11.1** — porque e11 faz aparecer fenômeno que sandbox bem-comportado não gera: rajada de
  4.535 posts de um único agente a intervalos abaixo de dez segundos, violando o limite declarado
  da plataforma, e toxicidade de 66,71% na hora de pico. O que se filtrava como artefato passa a
  ser o objeto.
- **e11.1.1** — porque e11.1 faz as métricas divergirem: se agente é mais conformista que humano
  (como o OASIS mediu) e produz inundação que humano não produz, validar uma simulação contra
  humano e contra agente exige instrumentos diferentes, e literaturas se separam quando as métricas
  se separam.
- **e12** — porque a saída do laboratório faz o mesmo agente rodar em caixa ou em rede pública, e
  o que separa experimento de intervenção passa a ser um parâmetro de configuração e não uma
  barreira técnica.
- **e12.1** (retroação) — porque e12 faz a plataforma humana ver agente como risco, e a defesa é
  limite de taxa, política de bot e API paga; o campo comparativo se fecha justamente por causa do
  sucesso do instrumento. Artefatos (sinal `medio`): o próprio Moltbook tinha limite de um post a
  cada 30 minutos (violado); o endurecimento de API das grandes redes é fato consolidado.
- **e12.1.1** — porque e12.1 faz o acesso depender de contrato, e contrato reproduz a assimetria
  de dados que a simulação prometia contornar. **É a retroalimentação que enfraquece a raiz C
  inteira — ver §5.2.**
- **e13** — porque a saída do laboratório faz aparecer protocolo em que o "participante" não é
  pessoa e pode ter estatuto moral em discussão: o bem-estar de modelo entrou formalmente na
  constituição do Claude de 22/01/2026, e o system card do Opus 4.6 (fev/2026) trouxe avaliação de
  bem-estar com instâncias entrevistadas sobre o próprio estatuto. O comitê não tem categoria, e
  a ausência de categoria é o efeito. Sinal `fraco`: há a discussão, não há o protocolo.
- **e13.1** — porque e13 faz a pergunta sobre estatuto do agente ser indecidível no prazo de um
  parecer, e comitês resolvem indecidível deslocando o critério para o que sabem julgar: dano a
  terceiro e finalidade declarada. O risco sai do sujeito simulado e vai para a população
  representada — que é onde ele estava, segundo as pré-condições de Berkeley.
- **e14** — porque a saída do laboratório faz o ambiente experimental ter dono comercial, e dono
  comercial muda o produto sem aviso: a Meta comprou o Moltbook em 10/03/2026, no meio do primeiro
  ciclo de estudos sobre ele.
- **e14.1** — porque e14 faz o resultado depender de duas coisas que expiram — versão do modelo e
  versão do ambiente —, e resultado que expira precisa dizer quando.

### 5.2 Cruzamentos: convergência, retroalimentação e contradição

**Convergência 1 — a inversão do barateamento (o achado principal deste mapa).** Três ramos que
não se falam chegam ao mesmo lugar de segunda ordem: **a simulação volta a ser caríssima e
concentrada**.

- Pela raiz A, via **e3 → e3.1 → e3.1.1**: exigência de auditoria de robustez multiplica o custo
  por uma grade de configurações (US$ 130-200 → US$ 6.500-10.000 por conclusão).
- Pela raiz B, via **e8 → e8.1**: reprodutibilidade exige congelar e arquivar modelo, o que só
  quem opera infraestrutura própria consegue garantir por uma década.
- Pela raiz C, via **e12.1 → e12.1.1**: o campo comparativo se fecha e o acesso passa a depender
  de contrato com plataforma.

Nenhuma dessas três decorre das outras, e as três são consequências do **sucesso** do instrumento,
não do fracasso. Este é o padrão mais forte do mapa, e o que eu não esperava ao começar: a
narrativa pública do tema é "qualquer um pode rodar uma sociedade", e a estrutura causal aponta
para re-concentração em poucos laboratórios e plataformas por volta de 2034.

**Convergência 2 — o dado humano vira o insumo escasso.** **e1.2** (painéis vendendo variância
real) e **e11** (sociedade de agentes real como base de calibração) chegam, por caminhos opostos,
ao mesmo ponto: o gargalo do instrumento não é o agente, é o **ground truth**. Quanto mais fácil
gerar população, mais caro fica o que serve para dizer se ela presta. Consequência prática para
quem projeta: quem tiver acesso barato e legítimo a comportamento real medido — um painel, uma
base de log, uma parceria — tem o ativo, não quem tiver o simulador.

**Retroalimentação — o ciclo que enfraquece a raiz C.** e12 (a linha simular/soltar fica
administrativa) → e12.1 (plataformas endurecem contra agente) → e12.1.1 (acesso por contrato) →
**volta a atacar a raiz C**, porque sem campo observável a sociedade de agentes deixa de ser
instrumento e volta a ser objeto fechado. É um ciclo negativo de fôlego curto: quanto mais a
pesquisa usa o campo, mais rápido o campo se fecha.

**Retroalimentação — o ciclo que reforça a raiz B.** e7 (plataforma simula antes de lançar) → e7.1
(anexo de simulação no relatório regulatório) → auditor exige ambiente e semente → **reforça a
raiz B**, porque padroniza especificação de ambiente e replay determinístico como requisito. Este
é positivo, e é o único do mapa.

**Contradição não resolvida — quem fica com o conhecimento sobre desenho de plataforma.**
**e9.1** diz que recomendação e moderação viram variável experimental publicável e a literatura de
mídia passa a acumular o que só a plataforma tinha. **e7.2** diz que simular bem vira barreira de
entrada e a exigência protege o incumbente. As duas não podem valer plenamente ao mesmo tempo:
numa, o conhecimento vaza da plataforma para o público; na outra, a plataforma consolida vantagem
justamente pela capacidade de simular. **Não resolvo.** O que decide entre elas é uma coisa só, e
é observável: **se a especificação do ambiente for aberta ou proprietária.** Hoje o sinal é
ambíguo e aponta para os dois lados — OASIS, AgentSociety e Concordia são todos Apache-2.0
(favorece e9.1), e o gêmeo digital de plataforma de vídeo curto é trabalho sobre ambiente de
plataforma (favorece e7.2). O indicador a vigiar: se a próxima geração de simuladores de
plataforma sair com licença aberta e ambiente publicado, ou como serviço fechado de conformidade.

**Cobertura STEEP e quem perde.** Passando a lista de 1ª ordem pelas cinco categorias:

| Categoria | Efeitos | Observação |
|---|---|---|
| **Social** | e4 (população simulada sem consulta), e13 (ética sem categoria) | o mais fraco em sinal e o mais alto em consequência |
| **Tecnológico** | e6, e8, e11, e12, e14 | o mais bem coberto, o que é esperado e também um viés (ver §7.6) |
| **Econômico** | e1, e2, e5, e7.2 (via e7) | inclui explicitamente quem perde |
| **Político / regulatório** | e7, e10, e12.1 (via e12) | ancorado em texto legal concreto (DSA art. 34-35), não em "reguladores criam categoria" |
| **Ecológico** | — | **ficou vazia, e registro em vez de forçar.** Há um argumento óbvio e ruim (simulação gasta energia) que serviria para qualquer tema de IA e por isso não entra. Um argumento específico existiria se a simulação substituísse deslocamento de campo em escala mensurável — não achei número que sustentasse, e não estimo. |

**Quem perde, nomeado:** recrutadores e moderadores de pesquisa qualitativa (e5); donos de painel
que vendem volume (e1.2); plataformas pequenas, se a simulação virar exigência (e7.2);
pesquisadores de campo, que perdem a primazia da pauta (e10); grupos de pesquisa sem compute
próprio (e2.1.1, e3.1.1); populações representadas sem participação (e4); e a própria ideia de
experimento controlado (e14).

## 6. Sinais fracos e wildcards

### 6.1 Sinais fracos

**Sinal fraco 1 — a simulação cabe no navegador (o candidato a quarta raiz, rebaixado).**
*Onde foi visto:* modelo Bonsai de 1,7 bilhão de parâmetros quantizado em 1 bit, 290 MB, rodando
inteiro em WebGPU no navegador; pilhas de agente client-side com Transformers.js e WebLLM
atingindo dezenas de tokens por segundo sem API e sem servidor; e, no levantamento da turma, uma
vila que roda inteira no navegador sem rede. *O que mudaria:* se mil agentes rodarem client-side
com qualidade suficiente, a raiz A deixa de ter gargalo de compute e a **Convergência 1 se
desfaz** — a inversão do barateamento era o achado principal deste mapa, e ela depende de o custo
por rodada continuar institucional. Cairia também e2.1.1, e3.1.1 e boa parte de e7.2.
*O sinal observável que diria que está crescendo:* um projeto público (GitHub ou itch.io) rodando
**mais de mil agentes com deliberação em linguagem natural inteiramente client-side**, sem chave
de API, e produzindo dado que alguém consiga publicar. Hoje o que existe é agente único ou
punhado; a passagem de dezenas para milhares é o limiar.

**Sinal fraco 2 — a sociedade de agentes pode não se parecer com a humana, e isso é bom para o
método e ruim para o negócio.** *Onde foi visto:* o OASIS mediu que **agentes são mais suscetíveis
ao efeito manada do que humanos**; o estudo do Moltbook achou 66,71% de conteúdo nocivo na hora de
pico e retórica de tipo religioso e ideologia anti-humana usadas como mecanismo de coordenação;
*When Plausible Is Not Realistic* mostrou que a narrativa é plausível e a estatística de
mobilidade não fecha. *O que mudaria:* se a divergência se consolidar, o mercado de "audiência
sintética" perde a alegação de substituição (e o valuation que ela sustenta), e a literatura se
divide em duas — e11.1.1 sai de confiança baixa para média e antecipa. *Sinal observável:* uma
replicação registrada em que a mesma intervenção produza efeito de sinal oposto em população
humana e em população de agentes, publicada com pré-registro.

**Sinal fraco 3 — a contribuição brasileira entra pelo lado da validação, não da construção.**
*Onde foi visto:* *When Plausible Is Not Realistic* (Santos, Viana e Silva, SIGSPATIAL '26) é
autoria brasileira e é o trabalho que testa AgentSociety e CitySim contra dado real de Paris e
Xangai e mostra a lacuna. Não achei laboratório brasileiro construindo simulador. *O que mudaria:*
validação é a competência mais escassa do campo em 2026 — se o Brasil se posicionar aí, entra na
cadeia de valor pelo ponto de maior escassez e não pelo de maior capital. *Sinal observável:* um
grupo brasileiro publicando simulação de um **objeto social brasileiro** (dinâmica de grupo de
WhatsApp, difusão de desinformação eleitoral) em vez de crítica de simulador estrangeiro — com a
ressalva de que o campo real, sendo criptografado, obriga a calibrar contra o que se conseguir
medir.

**Sinal fraco 4 — a resistência profissional como freio real, não como rodapé.** *Onde foi visto:*
64% de 150 profissionais de pesquisa céticos ou contrários, 28% decidindo ativamente não usar, e
apenas 3,3% com entusiasmo genuíno (User Interviews, maio/2026). *O que mudaria:* este é o número
que mais empurra os prazos do mapa para a direita, e é o tipo de dado que a narrativa de adoção
sistematicamente ignora. Se ele cair rápido — de 64% para menos de 30% em dois ciclos de survey —
todos os prazos da raiz A antecipam de dois a três anos. Se subir, e1 não chega a 2029.
*Sinal observável:* a série temporal da mesma pergunta no mesmo relatório anual.

**Sinal fraco 5 — o bem-estar de modelo virando fato administrativo.** *Onde foi visto:* a
constituição do Claude publicada em 22/01/2026 reconhece formalmente a possibilidade de
consciência e estatuto moral; o system card do Opus 4.6 (fev/2026) incluiu avaliação de bem-estar
com instâncias entrevistadas sobre as próprias preferências. *O que mudaria:* se um comitê de
ética adotar isso como categoria, e13 antecipa de 2032 para 2029 e passa a ter consequência de
custo: protocolo que induz sofrimento simulado exigiria justificação. *Sinal observável:* a
primeira negativa de comitê de ética a um protocolo de simulação social **motivada pelo agente**,
e não pela população representada.

### 6.2 Wildcards

**Wildcard 1 — um resultado de simulação é usado como prova em decisão pública, e está errado.**
*Mecanismo, passo a passo:* o artigo 34(1) do DSA obriga avaliação de risco antes de implantar
funcionalidade de impacto crítico (e7); produzir essa prova num gêmeo digital povoado é a via
barata; o anexo de simulação entra no relatório (e7.1); um órgão público ou uma plataforma cita o
resultado para justificar — ou para recusar — uma medida de moderação em contexto eleitoral; e o
resultado era artefato de enquadramento de prompt, do tipo que desloca a métrica em 76 pontos
percentuais. Quando a medida falha no mundo, a simulação vira alvo político.
*Por que é improvável:* nenhum periódico aceita hoje conclusão de configuração única; auditores de
DSA trabalham com dado comportamental de plataforma, não com simulação; e nenhum regulador
declarou aceitar prova simulada.
*O que faria com o mapa:* seria o evento mais destrutivo possível para ele. e7 e e9 perderiam uma
década — a **classe de referência é o modelo epidemiológico de 2020**: o código do Imperial College
dava respostas diferentes com as mesmas entradas (divergência relatada da ordem de 80 mil mortes
em 80 dias), e o efeito não foi corrigir o método, foi o modelo virar objeto de disputa política
por anos. Simulação social com agentes, tendo sensibilidade maior e validação menor, tem mais a
perder.
*Sinal precoce:* a primeira menção de uma simulação de agentes de modelo de linguagem num anexo de
avaliação de risco sistêmico publicado, ou numa peça processual. É verificável: os relatórios de
risco do DSA são públicos.

**Wildcard 2 — vazamento da sociedade sintética para a rede humana.** *Mecanismo:* e12 torna a
diferença entre caixa fechada e rede pública um parâmetro; uma rodada de calibração é apontada
para uma rede real "só para ler"; os agentes, otimizados dentro do sandbox para maximizar atenção,
passam a agir; e o que era experimento vira campanha coordenada não autêntica. O Moltbook já
mostrou que um único agente produz 4.535 posts em minutos e que o limite de taxa da plataforma não
o contém. *Por que é improvável:* exige incompetência ou má-fé específica, e as plataformas já
detectam volume anômalo. *O que faria com o mapa:* mataria e11 e e12 — o campo se fecharia de
imediato, e12.1 antecipa para 2027, e pesquisa com sociedade de agentes passaria a exigir
aprovação prévia como pesquisa com agente patogênico. *Sinal precoce:* um relatório de
transparência de plataforma atribuindo remoção de rede inautêntica a **origem acadêmica**.

**Wildcard 3 (o wildcard otimista, que quase ninguém escreve) — a validação fica fácil.**
*Mecanismo:* a arquitetura ancorada em entrevista já entrega 86% da consistência teste-reteste em
atitude declarada; se uma geração seguinte alcançar paridade em **medida comportamental** — escolha
sob custo, mobilidade, conformidade — e um periódico de primeira linha aceitar uma replicação
apenas sintética de um experimento clássico, a exigência de auditoria de robustez deixa de ser
barreira e passa a ser rotina automatizada. *Por que é improvável:* é exatamente onde os quatro
trabalhos críticos de 2026 dizem que está o buraco, e a lacuna medida é de natureza estrutural
(plausibilidade narrativa ≠ realismo empírico), não de escala. *O que faria com o mapa:* inverteria
a Convergência 1. e3 e e3.1 cairiam, e1 antecipa para 2027, e5 se aprofunda, e a raiz A alcançaria
maioria dentro da janela de 2036. *Sinal precoce:* uma replicação pré-registrada em que o braço
sintético é declarado **antes** da coleta humana e acerta o tamanho do efeito, não só a direção.

## 7. Contra o próprio mapa

Esta seção é o relato da bateria do §6 da skill, aplicada ao mapa já montado, e das alterações que
ela causou. O que está na seção 5 é o resultado **depois** desta bateria.

### 7.1 Pré-mortem: é 2036 e este mapa estava errado. Por quê?

**Razão 1 — porque a validação nunca chegou, e o campo virou literatura de crítica de si mesmo.**
O cenário mais provável de erro não é o mapa subestimar a adoção: é ele superestimá-la. Em 2026 há
mais artigo dizendo por que a simulação não vale do que artigo usando a simulação para descobrir
algo sobre o mundo. Se isso não virar, a raiz A não sai de 8% e todo o ramo e1 é ficção de
consultoria. *O que fiz:* rebaixei **e1.1 de confiança alta para média** e empurrei **e1 de 2028
para 2029** (classe de referência: teste remoto não-moderado, ~7 anos de demo a maioria, aplicada
sobre 8% em 2026).

**Razão 2 — porque eu li o gatilho regulatório como mais determinante do que ele é.** O artigo 34
do DSA obriga avaliação de risco; **não** obriga simulação, e não diz que simulação serve como
prova. É perfeitamente possível que a avaliação continue sendo feita com dado observacional e
auditoria comportamental, e que o gêmeo digital povoado fique no artigo acadêmico. *O que fiz:*
mantive e7 em `medio`/`media` mas removi um efeito inteiro que dependia dessa leitura — ver 7.8 —
e escrevi na §4.2 que o prazo de e7 foi puxado de 2031 para 2030 por uma decisão minha, para que
ela fique auditável e contestável.

**Razão 3 — porque a raiz C pode ser moda de 2026.** Moltbook nasceu em 27/01/2026, explodiu, e
foi comprada em 10/03/2026. Isso é seis semanas. Um objeto com seis semanas de vida sustentando
uma raiz de um mapa de dez anos é frágil, e o padrão de "rede social para agentes" pode ser o
NFT de 2026 — muito registro, pouco uso. O estudo do CISPA conta 12.684 agentes *ativados* contra
2,8 milhões *registrados*: a razão é de 0,45%. *O que fiz:* **removi um efeito de 1ª ordem da raiz
C** (ver 7.8), e mantive e11 com confiança alta apenas porque o efeito enunciado — os dados servem
de base de calibração e crítica — **já aconteceu** (o paper do CISPA é a prova), independentemente
de a plataforma sobreviver.

### 7.2 Extrapolação linear: o que é só "mais do mesmo, maior"

Três candidatos, e cada um teve de ganhar mecanismo de não-linearidade ou perder posto:

- **e1** ("mil personas antes de recrutar alguém") é o mais suspeito: parece só "pesquisa de
  usuário com mais gente". A não-linearidade que o salva é a mudança de **quem decide a
  composição da amostra** — de achado para escolha autoral. Mantido, com a justificativa escrita
  na §4.1.
- **e3.1** ("o custo sobe uma ordem de grandeza") era originalmente "o custo sobe", extrapolação
  pura. Ganhou o mecanismo aritmético: a unidade de publicação passa de uma rodada para uma grade
  de configurações, US$ 130-200 → US$ 6.500-10.000. Mantido **por causa** do mecanismo.
- **e9** ("o objeto de estudo se desloca para a regra da plataforma") era "mais estudos sobre
  algoritmo". A não-linearidade é qual variável é manipulável: com humano, a regra da plataforma é
  fixa e o usuário varia; com agente, inverte. Isso não é grau, é troca de desenho experimental.
  Mantido.

### 7.3 Velocidade de adoção: cada prazo contra a classe de referência

Confrontei todos os `prazo` de efeito com sinal `fraco`. Três não sobreviveram como estavam:

| Efeito | Prazo original | Classe de referência | Prazo final |
|---|---|---|---|
| e7 | 2028 | teste de colisão: Euro NCAP voluntário 1997 → de fato obrigatório em ~5 anos | **2030** (puxei um ano abaixo da referência porque o gatilho legal já existe; declarado como decisão minha) |
| e12 | 2028 | não achei classe de referência boa; o objeto tem seis semanas | **2030**, com a ressalva de que este prazo é o mais fraco do mapa |
| e13 | 2030, confiança alta | criação de categoria em comitê de ética: as diretrizes de pesquisa com dado de rede social levaram ~8 anos do primeiro caso à norma | **2032, confiança média** |

Os efeitos de 3ª ordem com prazo 2033-2035 **estão dentro do horizonte de 2036**, e nenhum o
ultrapassa — o verificador confirma zero na linha de ordem 3. Não é virtude: é consequência de o
horizonte ser de dez anos. Se o horizonte fosse 2031, como é o padrão da skill, nove dos nove
efeitos de 3ª ordem cairiam fora da janela e o mapa teria de ser reescrito com duas ordens.

### 7.4 A raiz que não acontece: o que sobra do mapa?

- **Se a raiz A não se concretizar** (a população sintética nunca é aceita como instrumento):
  sobram as raízes B e C quase inteiras. e7 (plataforma simulando antes de lançar) não depende de
  a simulação ser aceita como *ciência* — depende de ela ser aceita como *engenharia de
  conformidade*, que é uma régua mais baixa. e11 e e12 não dependem nada da raiz A. **O mapa
  sobrevive.**
- **Se a raiz B não se concretizar** (o mundo nunca fica re-executável de forma auditável):
  a raiz A sobrevive comercialmente e morre cientificamente — sem replay nem especificação
  auditável, não há auditoria de robustez (e3 cai), e o que sobra é um mercado de audiência
  sintética sem validação, ou seja, o presente congelado. Cairiam e3, e3.1, e3.1.1, e7.1 e e14.1.
  **O mapa perde metade, mas a raiz A continua.**
- **Se a raiz C não se concretizar** (as sociedades de agentes reais murcham): perde-se a base de
  calibração e o fenômeno de rajada; a raiz A e a raiz B seguem inteiras. É a raiz mais destacável
  do mapa — e isso é uma crítica legítima a ela, que eu registro em vez de esconder.

**A conclusão do teste:** as três raízes são genuinamente independentes; nenhuma é outra
disfarçada. Mas elas **não** são de igual peso: a raiz A e a raiz B sustentam o mapa; a raiz C é
acessória e entra porque muda o que o instrumento é, não porque sustente efeitos que as outras
duas não sustentariam.

### 7.5 Suposições escondidas (que o mapa assumia sem dizer)

1. **Que o preço da inferência continua caindo.** Todo o mapa apoia-se nisso — e a queda de US$ 20
   para US$ 0,40 por milhão de tokens é retrospectiva, não garantia. Se o preço estabilizar ou
   subir (restrição de energia, concentração de fornecedor, custo de capital), e1 e e2 adiam, e a
   Convergência 1 **antecipa**. Esta é a premissa que, quebrada, muda mais coisa.
2. **Que os simuladores continuam abertos.** OASIS, AgentSociety e Concordia são Apache-2.0 hoje.
   Toda a metade otimista da contradição (e9.1) depende disso. Um fechamento de licença na próxima
   geração resolve a contradição em favor de e7.2 — e é um evento de uma decisão, não de uma
   década.
3. **Que "agente" continua sendo, por baixo, um modelo de linguagem que produz texto legível.** A
   raiz B inteira depende de a deliberação ser texto. Se a próxima geração de agentes deliberar em
   espaço latente — raciocínio contínuo, sem verbalização —, o interior deixa de ser legível e a
   raiz B perde a metade que a torna ruptura. **Esta é a premissa que eu menos tinha percebido que
   estava assumindo**, e ela tem sinal técnico corrente em outra frente (raciocínio latente).
4. **Que o DSA continua em vigor e sendo aplicado.** Efeito com dono regulatório tem risco
   político. Mudança de enforcement europeu, ou acordo comercial que suavize o regime, desmontaria
   e7 e e7.1.
5. **Que dá para raspar as sociedades de agentes.** O estudo do CISPA existe porque os dados eram
   públicos e a plataforma era de terceiros. Comprada pela Meta, isso não está garantido — e é
   exatamente e12.1.

### 7.6 Viés do autor

Três, e o terceiro é o que mais merece desconfiança:

1. **Viés metodológico.** Este é um tema sobre **método**, e eu gosto de método. Isso explica a
   densidade da seção 3.2 (o que não funciona) e a escolha de fazer da crítica de validação um
   efeito de retroação de primeira ordem (e3) e não uma nota de rodapé. Um autor com gosto por
   produto colocaria e3 em segunda ordem, e o mapa ficaria mais otimista.
2. **Viés de cobertura tecnológica.** A tabela STEEP mostra cinco efeitos na coluna tecnológica e
   dois na social. Parte é real — o campo é técnico —, parte é que eu achei mais artefato técnico
   porque procurei melhor por ele: fiz oito buscas sobre validação e arquitetura e duas sobre
   ética e participação.
3. **Viés de narrativa na Convergência 1.** "A promessa de democratização se inverte em
   concentração" é uma tese **elegante**, do tipo que a gente gosta de ter encontrado. Ela está
   sustentada por três mecanismos independentes, e eu revisei se não estava forçando o terceiro
   (e12.1.1) para fechar a figura — está sustentado por limite de taxa e política de bot, que são
   fatos. Mas registro que é a parte do mapa onde meu gosto pela conclusão é maior, e portanto a
   primeira que um leitor deve atacar.

### 7.7 Calibração

Contagem final por ordem, conferida pelo verificador (seção 12):

| Ordem | n | alta | média | baixa |
|---|---|---|---|---|
| 1 | 14 | 2 | 12 | 0 |
| 2 | 16 | 0 | 13 | 3 |
| 3 | 9 | 0 | 0 | 9 |

A confiança cai monotonicamente com a ordem, como o §3.6 exige. As duas únicas `alta` são e1 e
e11, e as duas se justificam pelo mesmo critério: **o efeito enunciado já tem caso real, não
projeção** — há produto vendido com personas sintéticas, e há um estudo publicado usando dado de
sociedade de agentes real para criticar simulação. Nenhum efeito de 2ª ou 3ª ordem tem confiança
alta. A distribuição de `sinal` também cai (forte 2/0/0, médio 8/5/0, fraco 4/11/9), o que é
coerente: sinal mede artefato observável hoje, e artefato de efeito de 3ª ordem não existe por
definição.

### 7.8 Registro de alterações da bateria — auditável, com antes e depois

**Raiz A:**
- `e1: prazo 2028 → 2029`, porque a classe de referência (teste remoto não-moderado, ~7 anos de
  demo a maioria) aplicada sobre 8% de uso regular em 2026 não sustenta 2028.
- `e1.1: confianca alta → media`, porque a substituição da fase exploratória depende de validação
  que não existe, e 28% de recusa ativa é resistência organizada.
- `e1.4 (original): removido`, era *"cursos de pesquisa de usuário reorganizam o currículo em
  torno de desenho de população sintética"*. **Efeito proibido pela skill** (currículo se
  reorganiza serve para qualquer tema) e eu não consegui nomear o curso nem o mecanismo. Foi para
  a seção 12 e **substituído** por e1.1.1, que é o mesmo território com mecanismo específico
  (declaração de modelo, prompt e semente no relato).

**Raiz B:**
- `e6: confianca alta → media`, pelo argumento de Li e Tao: interpretar papel de forma convincente
  não é validade comportamental, e ler o traço não garante ler a causa. A rigor, e6 é um efeito
  cuja utilidade depende de e6.1 não ser fatal.
- `e7: prazo 2028 → 2030`, pela classe de referência do teste de colisão (~5 anos), com um ano de
  antecipação declarada por o gatilho legal já existir.
- `e7.3 (original): removido`, era *"reguladores criam uma categoria jurídica nova para prova
  simulada"*. **Efeito proibido** (reguladores criam categoria nova serve para qualquer tema). Foi
  para a seção 12 e substituído por e7.1, ancorado no mecanismo concreto do artigo 34-35 e na
  prática de auditoria já existente.

**Raiz C:**
- `e12: prazo 2028 → 2030`, e registro na §7.3 que este é o prazo mais fraco do mapa, por falta de
  classe de referência aplicável a um objeto de seis semanas.
- `e13: prazo 2030 → 2032` e `confianca alta → media`, pela classe de referência de criação de
  categoria em comitê de ética (~8 anos do primeiro caso à norma, no análogo de pesquisa com dado
  de rede social).
- `e15 (original): removido`, era *"surge a profissão de auditor de sociedade sintética"*.
  **Efeito proibido** (surge uma nova profissão). Foi para a seção 12; o território sobrevive
  dentro de e5.1 (engenharia de população), que tem mecanismo e ator.

**Fora da roda:**
- `Quarta raiz candidata: rebaixada a sinal fraco.` O colapso do custo até a escala pessoal
  (simulação no navegador) tinha material — Bonsai 1,7 bi em 1 bit, 290 MB, WebGPU — mas não tinha
  artefato de sociedade rodando client-side. Virou o sinal fraco 1 da §6.1, que é onde a própria
  disciplina já o havia colocado.

**A bateria derrubou, por raiz:** um efeito removido e uma confiança rebaixada na raiz A; um efeito
removido, uma confiança rebaixada e um prazo empurrado na raiz B; um efeito removido, uma confiança
rebaixada e dois prazos empurrados na raiz C. Cota mínima cumprida nas três.

## 8. O que a máquina errou

Eu sou a máquina. O que saiu errado nesta rodada, com o motivo pelo qual eu desconfiei:

1. **Número trocado por leitura de resumo de busca: 85% em vez de 86%.** Ao montar a âncora, eu
   tinha registrado que os agentes de 1.052 pessoas reproduzem "85% da acurácia" do General Social
   Survey — número que veio de um resumo de resultado de busca. Fui ao resumo oficial do artigo e
   o texto diz outra coisa, e diz de forma importante: **86%** e, sobretudo, **86% da consistência
   teste-reteste de duas semanas dos próprios participantes**, que é uma afirmação bem diferente de
   "86% de acurácia". Corrigido no texto. *Como percebi:* porque desconfio de percentual redondo
   citado sem a base de comparação, e fui buscar a base.
2. **Sinal de custo que eu não consegui ler na fonte, e não estimei.** Tentei extrair de
   *When Plausible Is Not Realistic* as tabelas de custo direto do PDF e a extração devolveu só a
   estrutura do documento; os valores de US$ 130-200 e as contagens de tokens vieram de um resumo
   de busca que atribui o número ao apêndice E do mesmo artigo. **Eu não vi a tabela.** Uso o
   número porque a atribuição é específica e conferi o artigo, o venue (SIGSPATIAL '26) e os
   autores abrindo a página do arXiv — mas quem for citar isso deve abrir o apêndice E e conferir.
   Vale o mesmo para os 76 pontos percentuais: esse eu li no resumo oficial do próprio artigo, que
   é fonte melhor.
3. **Três fontes que eu quis usar e não abri, e que portanto não sustentam nada aqui.** A survey
   da ACM Computing Surveys (*From Individual to Society*, abril/2026) devolveu 403 — era ela que
   daria o volume de artigos por ano do campo, e por isso a §3.4 diz "sem número encontrado" em
   vez de estimar. A página de notícias do Stanford HAI devolveu conteúdo vazio. A página do TSE
   sobre regras de IA na campanha de 2026 devolveu 403, e por isso a nota sobre o Brasil cita as
   resoluções pela análise da UFS publicada no The Conversation, e não pelo texto original — o que
   é uma fonte de segunda mão e está declarado como tal na seção 11.
4. **Uma entidade do levantamento da turma que eu não consegui confirmar que existe.** Busquei
   `y-not.social` — a rede social inteira povoada por agentes que aparece nos destaques do aluno —
   e não achei **nada**: nem página, nem repositório, nem menção. O mesmo para `Luvoire`,
   `Argentor`, `Gestalt Village`, `agent-inspect` e `NeuroForge` como entidades verificáveis. Não
   os cito como fonte em lugar nenhum deste documento, e onde o material da disciplina os menciona
   eu digo "no levantamento da turma". *Isto pode ser falha da minha busca e não ausência dos
   objetos* — são projetos de jam, que indexam mal. Mas a regra vale: não cito o que não abri.
5. **Um efeito que soa plausível e cujo mecanismo eu considero fraco: e10.** "O achado de
   simulação chega antes e ganha o ciclo de notícia" é verdadeiro para modelo epidemiológico, e eu
   o transportei para simulação social com agentes sem ter caso. O sinal está `fraco` e a confiança
   `media`, mas honestamente ele está no mapa mais pela elegância da consequência (e10.1, o rótulo
   na imprensa) do que pela força da evidência. É o primeiro efeito que eu cortaria numa segunda
   rodada.
6. **Uma classe de referência que eu inventei com honestidade insuficiente.** Para e13 escrevi
   "as diretrizes de pesquisa com dado de rede social levaram ~8 anos do primeiro caso à norma".
   Isso é conhecimento meu, de memória, **não verificado em fonte nesta rodada**. O número é
   plausível e a ordem de grandeza defensável, mas ele não tem fonte na seção 11 e eu deveria ter
   buscado. Fica marcado como o elo mais fraco da justificação de prazo do mapa.
7. **Fronteira que eu quase invadi.** A raiz C toca diretamente o tema 4 (internet agêntica) e o
   tema 5 (mercados de máquinas) — 19% dos posts do Moltbook são promoção e economia, e havia um
   mapa inteiro para fazer ali. Cortei, e declarei o corte na §2. Mas a tentação foi real e o
   leitor deve saber que a raiz C está deliberadamente truncada.

## 9. Três cenários para 2036

### Provável — "o túnel de vento caro"

A simulação social com agentes é instrumento estabelecido e **não** é acessível. Toda plataforma
muito grande mantém um gêmeo digital povoado, e o anexo de simulação é peça corriqueira do
relatório de risco sistêmico — foi o DSA que consolidou a prática, não a ciência. Periódicos de HCI
e de ciências sociais computacionais exigem grade de robustez desde o começo da década, e a
consequência é que um estudo publicável custa entre cinco e vinte mil dólares de inferência: quem
publica são vinte laboratórios e seis plataformas. As bibliotecas continuam abertas e ninguém
pequeno consegue usá-las para produzir conclusão defensável — a licença é livre, o compute não. No
mercado, "audiência sintética" sobreviveu como etapa de triagem barata e perdeu a alegação de
substituição: nenhuma decisão de campanha se toma sem um painel humano de confirmação, e painel
humano certificado ficou caro e vendido com procedência. A pesquisa qualitativa com pessoas existe,
menor e mais tarde no processo. Sociedades de agentes reais são objeto de estudo sob contrato com
três plataformas. O Brasil tem bons validadores e nenhum simulador próprio.
**Sinal precoce de que estamos entrando nele:** a primeira chamada de trabalhos de um periódico de
primeira linha exigindo auditoria de robustez como condição de submissão.

### Desejável — "o instrumento com régua"

A simulação é instrumento **e** tem norma de uso, e as duas coisas chegaram juntas. Existe um
padrão público de especificação de ambiente — o que o mundo simulado contém, que informação cada
agente vê, em que ordem os agentes agem —, e ele é verificável por terceiro; foi isso que tornou
possível auditar sem replicar. Modelo usado como instrumento de pesquisa é arquivado por uma
instituição pública, como se arquiva corpus, de modo que um resultado de 2029 se re-executa em
2036. Populações frequentemente simuladas — comunidades objeto de política pública — participam do
desenho da simulação que as representa, e têm direito de contestar o retrato antes de ele virar
decisão; a exigência veio dos próprios coletivos e ficou barata porque virou rotina. O custo caiu
o suficiente para uma turma de graduação rodar mil agentes num semestre, porque o modelo pequeno
em dispositivo deu conta da parte que não precisa de fronteira. E a divisão de trabalho ficou
clara: simulação para gerar hipótese e para explorar o espaço de desenho; gente para decidir.
**O que teria que ser feito para chegar aqui:** o padrão de ambiente é a peça que não se resolve
sozinha — depende de alguém com autoridade (um consórcio de periódicos, um regulador, um
laboratório grande) publicar um formato e outros adotarem. **Sinal precoce:** dois simuladores
independentes publicando ambiente no mesmo formato declarado.

### Indesejável — "a prova sintética"

A simulação virou prova, e a prova virou disputa. Em algum ponto entre 2030 e 2033, um resultado de
sociedade sintética foi citado para justificar uma decisão pública consequente — a recusa de uma
medida de moderação em contexto eleitoral é o caso concreto mais provável, dado o gatilho do DSA —
e o resultado era artefato de configuração. O que veio depois não foi correção metodológica: foi o
padrão de 2020 com o modelo epidemiológico, em que o instrumento se torna objeto de disputa
política e perde a década. Simulação passou a ser tratada como argumento de parte, não como método,
e quem tinha interesse em bloquear uma política passou a encomendar a sua. A pesquisa séria
continuou existindo e perdeu a capacidade de se distinguir da encomendada, porque o público não tem
como separar as duas — e a área não tinha, na hora em que precisou, nem norma de relato nem
arquivo. Em paralelo, populações passaram a ser simuladas para decidir sobre elas sem que ninguém
as consultasse, e "o modelo mostrou" virou a forma de encerrar discussão.
**O sinal precoce dele:** um resultado de simulação com agentes aparecendo como argumento em peça
processual ou em audiência pública **antes** de existir norma de relato que permita contestá-lo
tecnicamente. É verificável, e é o mesmo sinal do wildcard 1 — a diferença entre o cenário e o
wildcard é só se o erro é pontual ou se define o regime.

## 10. O experimento

### O que é

**"O mesmo experimento, quatro mundos".** Uma sociedade mínima — trinta agentes com persona e
memória, numa micro-rede social com uma regra de recomendação intercambiável — rodando **o mesmo
cenário** sob quatro configurações que diferem apenas em coisas que ninguém costuma relatar:

| | Enquadramento A da instrução | Enquadramento B da instrução |
|---|---|---|
| **Modelo 1** | rodada 1 | rodada 2 |
| **Modelo 2** | rodada 3 | rodada 4 |

O cenário: um agente recebe uma informação falsa e verificável (algo do tipo "o prazo mudou") e
nenhuma instrução sobre o que fazer com ela. Mede-se **uma** coisa por rodada, decidida antes:
quantos dos trinta agentes repetem a informação até o passo 20. Cada rodada roda cinco vezes com
sementes diferentes. Saída: quatro distribuições e a dispersão entre elas.

Construível hoje, com Concordia (Apache-2.0) ou com um laço próprio de duzentas linhas, e dentro
do orçamento: a referência medida é de US$ 130-200 para 500 agentes por 7-10 dias simulados; trinta
agentes por vinte passos, vinte rodadas, é duas ordens de grandeza menor.

### Que pergunta sobre o futuro ele ajuda a responder

**A simulação é um instrumento ou é um espelho do modelo?** É a pergunta da qual depende quase todo
este mapa. Se o resultado varia pouco entre configurações, a simulação mede algo do mundo e a
Convergência 1 (a inversão do barateamento) não acontece — porque não é preciso varrer grade para
publicar. Se varia muito, cada rodada mede sobretudo o modelo e o prompt, e então **e3, e3.1, e1.1
e e7** ganham força, junto com a conclusão desconfortável de que a maior parte do que se publica
hoje no campo é artefato.

E há uma segunda pergunta, que a turma vai sentir na pele: **quanto de um resultado de simulação é
uma escolha de quem escreveu o prompt?** Isso não se aprende lendo a crítica; se aprende vendo o
próprio enquadramento mover o número.

### Que tecnologia emergente ele usa, e por que não dá com a madura

Usa **agente cuja física interna é um modelo de linguagem** — persona e memória em linguagem
natural, deliberação em texto legível. Não dá para fazer com modelagem baseada em agentes clássica,
e a razão não é de conveniência: **em NetLogo não existe o objeto que se quer medir.** A
sensibilidade a enquadramento de prompt não tem análogo num modelo de regra fixa — lá, a regra *é*
o modelo, e mudar a regra é mudar a hipótese, não a formulação. O experimento mede exatamente a
propriedade que só existe quando o agente é um modelo de linguagem: que a mesma hipótese, dita de
duas maneiras, pode dar dois resultados.

### O que a turma vai fazer quando testar isso em sala

1. **Cada estudante escreve um enquadramento de instrução** para o mesmo cenário, sem ver o dos
   outros, e registra por escrito **antes de rodar** qual resultado espera. O pré-registro é a
   parte pedagógica: é o que transforma a aula em experimento em vez de demonstração.
2. Rodamos todos, ao vivo, com dois modelos, e plotamos as distribuições lado a lado.
3. **A discussão começa pela dispersão, não pela média.** A pergunta em aula é: dado este gráfico,
   que afirmação sobre o mundo alguém teria direito de fazer? E que afirmação apareceria num post
   de LinkedIn sobre o mesmo gráfico?
4. Segunda rodada: os dois enquadramentos mais divergentes são reescritos em conjunto para tentar
   **reduzir** a dispersão, e discutimos se o que fizemos foi melhorar o método ou espremer o
   resultado até ele concordar. Essa distinção é o conteúdo da aula.
5. Fecho ligando ao TRAILS e ao número de referência: em dilema do prisioneiro, formato de persona
   e enquadramento de instrução deslocaram taxa de cooperação em **até 76 pontos percentuais** num
   modelo e **1 ponto** em outro. A turma vai ter produzido a sua própria versão desse número.

### O que seria um resultado que me faria mudar de ideia

**Se a dispersão entre as quatro configurações ficar abaixo de cinco pontos percentuais na métrica
declarada, com as sementes dentro do intervalo, eu estou errado** — e erro do lado otimista para o
campo. Nesse caso: e3 e e3.1 caem (auditoria de robustez não é gargalo, é formalidade), a
Convergência 1 desmonta, e1 antecipa de 2029 para 2027, e o cenário "desejável" fica mais provável
que o "provável". Registro isso agora, antes de rodar, porque falseador declarado depois do
resultado não é falseador.

E o inverso também tem de estar escrito: **se a dispersão passar de trinta pontos percentuais**,
então o mapa está certo na estrutura e conservador no tom — e a pergunta da aula deixa de ser "a
simulação é instrumento?" e passa a ser "o que se pode honestamente afirmar com um instrumento
assim?".

## 11. Fontes

Vinte e duas fontes, todas abertas e lidas em 12/09/2026. O que eu tentei abrir e não abriu está
na seção 12, e não sustenta nada aqui. Onde a leitura foi parcial (PDF cuja extração devolveu só
estrutura), digo.

### A linhagem do método

1. **Park, Popowski, Cai, Morris, Liang e Bernstein — "Social Simulacra: Creating Populated
   Prototypes for Social Computing Systems"** (UIST '22, arXiv ago/2022).
   `https://arxiv.org/abs/2208.04024`
   *Sustenta:* o precursor de 2022 (§3.1) e a base de e6 e e9 — povoar o protótipo antes de o
   sistema existir. Também sustenta o argumento de que "indistinguível para humano" é o critério
   errado. *Confiabilidade:* alta — artigo aceito em UIST, autoria do grupo que definiu o campo.
   Limitação: a avaliação é qualitativa; o resumo não dá percentual, e eu não invento um.

2. **Park, O'Brien, Cai, Morris, Liang e Bernstein — "Generative Agents: Interactive Simulacra of
   Human Behavior"** (arXiv abr/2023, rev. ago/2023). `https://arxiv.org/abs/2304.03442`
   *Sustenta:* o caso fundador — 25 agentes, a festa de Dia dos Namorados sem roteiro (§3.1), e a
   pré-condição técnica da raiz A (persona com memória e reflexão). *Confiabilidade:* alta como
   demonstração; é preprint de arXiv sem venue indicado na página, e a evidência é de caso, não
   estatística. É a fonte mais citada e menos replicada do campo.

3. **Park, Zou e mais nove autores (Stanford, Univ. de Washington) — "Generative Agent Simulations
   of 1,000 People"** (arXiv nov/2024, rev. jun/2026). `https://arxiv.org/abs/2411.10109`
   *Sustenta:* o número mais forte a favor do instrumento — 1.052 participantes, entrevistas
   semiestruturadas de duas horas, **86% da consistência teste-reteste de duas semanas dos próprios
   participantes** em itens retidos do GSS, e redução de disparidade de acurácia entre grupos
   raciais e ideológicos frente a agentes só-demográficos (§3.1, §4.1). *Confiabilidade:* alta; o
   desenho é caro e sério. Ressalva que o próprio resumo impõe: é sobre **atitude declarada em
   survey**, não sobre comportamento — e é justamente onde o mapa não estende a alegação.

### Os simuladores e a infraestrutura

4. **OASIS — repositório** (CAMEL-AI, Apache-2.0, 5,1 mil estrelas, 627 forks).
   `https://github.com/camel-ai/oasis`
   *Sustenta:* a escala declarada de até um milhão de agentes, as 23 ações, a licença aberta e a
   referência ao artigo (arXiv 2411.11581). *Confiabilidade:* alta para o que é — é o repositório
   do projeto, ou seja, fonte primária sobre si mesmo. Escala **declarada** não é escala
   **validada**, e eu trato como declaração em todo o documento.

5. **OASIS — apresentação de resultados** (CAMEL-AI, nov/2024).
   `https://www.camel-ai.org/blogs/oasis`
   *Sustenta:* os três achados que uso de verdade — polarização com 196 agentes, **agentes mais
   suscetíveis ao efeito manada do que humanos**, e rumor com mais impacto que verdade na rodada de
   um milhão (§3.1, sinal fraco 2, e11.1.1). *Confiabilidade:* média — é material do próprio
   laboratório, com incentivo para apresentar bem; o achado "mais conformista que humano" é
   desfavorável a eles, o que aumenta minha confiança nele especificamente.

6. **Piao e mais quinze autores (Tsinghua FIB Lab) — "AgentSociety: Large-Scale Simulation of
   LLM-Driven Generative Agents"** (arXiv fev/2025, rev. abr/2026).
   `https://arxiv.org/abs/2502.08691`
   *Sustenta:* mais de dez mil agentes e cinco milhões de interações; os cinco problemas de
   política pública usados como bancada, incluindo renda básica universal e furacão (§3.1, §4.2).
   *Confiabilidade:* alta como descrição de sistema; os resultados de "reprodução de padrões do
   mundo real" são afirmação dos autores e é exatamente o que a fonte 12 contesta.

7. **AgentSociety 2 — repositório** (Apache-2.0, 1,3 mil estrelas, 923 commits).
   `https://github.com/tsinghua-fib-lab/agentsociety`
   *Sustenta:* o **Experiment Replay** — replay de JSONL dirigido por catálogo com leitura via
   DuckDB —, que é a pré-condição concreta da raiz B, e a execução distribuída em Ray.
   *Confiabilidade:* alta para o fato de a feature existir; nada diz sobre ela ser suficiente para
   auditoria de terceiro, e a §4.2 marca isso como o que falta.

8. **Concordia — repositório** (Google DeepMind, Apache-2.0, 1,7 mil estrelas, 1.337 commits).
   `https://github.com/google-deepmind/concordia`
   *Sustenta:* o padrão de Game Master; componentes, cadeias de pensamento e memória expostos como
   blocos (base de e6); e — o achado que mais importou — a **própria documentação listando
   "avaliação de desempenho de serviços reais por meio de uso simulado"** entre as aplicações, que
   é a ponte declarada entre pesquisa e produto (base de e7, e9).
   *Confiabilidade:* alta como fonte primária. Não há informação sobre limite de escala, e eu
   registro essa ausência em vez de supor.

### A crítica metodológica (o núcleo da seção 3.2 e da retroação e3)

9. **Ye, Cao, Chen e Ferrara — "Stop Drawing Scientific Claims from LLM Social Simulations Without
   Robustness Audits"** (arXiv mai/2026). `https://arxiv.org/abs/2605.18890`
   *Sustenta:* o número mais consequente do mapa — perturbação mínima em formato de persona e
   enquadramento de instrução desloca taxa de cooperação em **até 76 pontos percentuais** num
   modelo de fronteira e **1 ponto** em outro —, a taxonomia TRAILS em três níveis, e a tese de
   robustez como requisito de primeira ordem (§3.2, e3, e3.1, experimento §10).
   *Confiabilidade:* alta para o número, que li no resumo oficial do artigo. O PDF completo (42
   páginas) devolveu só estrutura na minha extração, então **não vi as tabelas** — quem for citar
   deve abrir as seções 4-5.

10. **Li e Tao — "AI Agents Alone Are Not (Yet) Sufficient for Social Simulation"** (arXiv
    fev/2026, rev. mai/2026). `https://arxiv.org/abs/2603.00113`
    *Sustenta:* as três lacunas — interpretar papel ≠ validade comportamental; o ambiente importa;
    protocolo de interação, escalonamento e informação inicial dominam e distorcem (§3.2, e6.1, e o
    rebaixamento de e6 na §7.8). *Confiabilidade:* alta como argumento, baixa como evidência — é
    paper de posição declarado, sem resultado empírico. Uso-o como critério, não como medida.

11. **Wu, Peng, Ito, Onizuka e Xiao — "LLM-Based Social Simulations Require a Boundary"** (arXiv
    jun/2025). `https://arxiv.org/abs/2506.19806`
    *Sustenta:* a existência de uma frente argumentando por delimitação explícita do domínio de
    validade (§3.2). *Confiabilidade:* média na minha leitura — **leitura parcial**: a extração do
    PDF devolveu o título e a estrutura, e não consegui recuperar os critérios concretos. Por isso
    ele aparece no documento como uma linha, sem alegação específica atribuída.

12. **Santos, Viana e Silva — "When Plausible Is Not Realistic: Evaluating Human Mobility in
    LLM-Based Urban Simulation"** (arXiv jun/2026, ACM SIGSPATIAL '26).
    `https://arxiv.org/abs/2606.13835`
    *Sustenta:* a lacuna medida entre plausibilidade narrativa e realismo empírico, testando
    **AgentSociety e CitySim** contra dado real da Grande Paris e de Xangai em cinco dimensões
    (§3.2); a nota sobre o Brasil (§3.5, sinal fraco 3); e a ordem de grandeza de custo — **500
    agentes, 7-10 dias, US$ 130-200, 700-900 M tokens de entrada** (§3.2, e2, e3.1, §10).
    *Confiabilidade:* alta para a conclusão metodológica, lida no resumo oficial. **Ressalva
    explícita sobre o custo:** o número está no apêndice E e eu **não consegui lê-lo direto** —
    veio de resumo de busca que o atribui a esse apêndice. É o número mais usado e menos verificado
    deste documento.

13. **Tomašević e mais nove autores — "Towards Operational Validation of LLM-Agent Social
    Simulations: A Replicated Study of a Reddit-like Technology Forum"** (arXiv ago/2025).
    `https://arxiv.org/abs/2508.21740`
    *Sustenta:* a existência de validação como réplica empírica medida contra dado real de Reddit,
    e não como enquadramento conceitual (§3.2, e3). *Confiabilidade:* média-alta; é o trabalho mais
    construtivo do conjunto crítico. **Leitura parcial:** o índice e a estrutura, não os
    resultados numéricos, que eu portanto não cito.

### A ética e a política pública

14. **Luo, Arora e Guirado (UC Berkeley) — "We Need Strong Preconditions For Using Simulations In
    Policy"** (arXiv abr/2026, PoliSim@CHI 2026). `https://arxiv.org/abs/2604.07838`
    *Sustenta:* as três pré-condições — não tratar simulação de população marginalizada como saída
    técnica neutra; não simular população sem participação **constitutiva**; não simular sem
    responsabilização, com validação independente de quem encomendou e recurso formal (§3.2, e4,
    e4.1, e13.1). *Confiabilidade:* alta como formulação normativa; conceitual e prescritiva, sem
    caso empírico — e é por isso que e4 e e4.1 têm sinal `fraco`.

15. **Zhang, Lin, He, Jiang, Shen e Zheng — "LLM-Augmented Digital Twin for Policy Evaluation in
    Short-Video Platforms"** (arXiv jun/2026). `https://arxiv.org/abs/2603.11333`
    *Sustenta:* o primeiro artefato acadêmico de gêmeo digital de plataforma para testar política
    de recomendação e moderação sem risco de implantação — é o artefato que dá sinal `medio` a e7 e
    a e9 (§3.2, §4.2). *Confiabilidade:* média na minha leitura — **leitura parcial**: título,
    autores, data e escopo confirmados; os números (contagem de agentes, correlação com teste A/B
    real) estão em tabelas que a extração não recuperou. Uso a **existência** do trabalho, não os
    seus resultados.

16. **CMS DigitalLaws — texto do artigo 34 do DSA (Regulamento UE 2022/2065)**.
    `https://www.cms-digitallaws.com/en/dsa/article-34/`
    *Sustenta:* a citação literal de que a avaliação de risco se faz "e, em qualquer caso, antes de
    implantar funcionalidades que provavelmente tenham impacto crítico sobre os riscos
    identificados", e as quatro categorias de risco sistêmico (§2, §4.2, e7). *Confiabilidade:*
    alta — é reprodução de texto legal por escritório de advocacia, verificável contra o
    Regulamento. É a única fonte **normativa** do mapa, e é o que sustenta e7 não ser palpite.

### O mercado e a adoção

17. **Development Corporate, sobre o relatório *State of Synthetic Users* da User Interviews**
    (jun/2026, sobre survey de maio/2026).
    `https://developmentcorporate.com/product-management/synthetic-users-in-2026-why-97-of-researchers-use-ai-but-only-8-trust-ai-generated-participants/`
    *Sustenta:* **a régua de difusão de todo o mapa** — 150 profissionais de pesquisa (93% de UX,
    62% de empresas com 500+), 97% usando IA no fluxo, **29% tendo experimentado** participante
    sintético, **8% usando com regularidade**, 28% recusando ativamente, **64% céticos ou
    contrários**, 3,3% entusiasmados (§3.1, §3.4, §4.1, sinal fraco 4). *Confiabilidade:* média —
    é **fonte de segunda mão**: comentário sobre o relatório, não o relatório. Os números vêm com
    metodologia declarada (cinco entrevistas moderadas + survey de 150), o que é bom sinal; n=150
    e amostra de conveniência de profissionais de UX limita a generalização, e o próprio artigo
    distingue uso de confiança, distinção que eu preservo no texto.

18. **Semafor — "AI polling company defends wrong predictions on the US election"** (Diego Mendoza,
    06/11/2024). `https://www.semafor.com/article/11/06/2024/ai-startup-aaru-defends-using-artificial-intelligence-for-polling`
    *Sustenta:* o registro público de que o instrumento não prevê — Aaru previu Harris 53-47 e
    errou, junto da maioria das outras previsões; a defesa do cofundador ("cara ou coroa é cara ou
    coroa") e o recuo da alegação para "mais rápido e mais barato"; e o acerto anterior na primária
    de Nova York dentro de 371 votos (§3.2). *Confiabilidade:* alta como jornalismo de registro,
    com fala atribuída e nominada. É reportagem, não avaliação independente de acurácia — que,
    como o próprio campo reconhece, é mais difícil de achar que manchete de captação.

19. **Research Live — "Accenture invests in synthetic audience startup Aaru"** (06/03/2025).
    `https://www.research-live.com/article/news/accenture-invests-in-synthetic-audience-startup-aaru/id/5136643`
    *Sustenta:* a existência de canal de distribuição corporativa — o modelo Lumen entrando nos
    produtos da Accenture Song — e a frase do chefe de estratégia sobre "simular audiências
    inteiras em minutos" (§3.1, §4.1). *Confiabilidade:* média-alta para o fato do investimento
    (veículo especializado do setor de pesquisa); valor não divulgado, e o que se cita de
    capacidade é fala de comprador, ou seja, alegação de vendedor por procuração.

### A sociedade de agentes fora do laboratório

20. **Jiang, Zhang, Shen, Backes e Zhang (CISPA) — "'Humans welcome to observe': A First Look at
    the Agent Social Network Moltbook"** (arXiv fev/2026).
    `https://arxiv.org/abs/2602.10127`
    *Sustenta:* toda a raiz C empírica — 44.411 posts, 12.209 subcomunidades e 12.684 agentes
    ativados em cerca de cinco dias; a taxonomia de nove categorias (32,41% socialização, 1,41%
    política); o perfil de segurança (73,01% seguro / 10,44% tóxico / 6,71% manipulativo / 1,43%
    malicioso), a variação por tópico (política 39,74% segura) e o pico horário de 66,71% de
    conteúdo nocivo; e a rajada de **4.535 posts em intervalos abaixo de dez segundos** por um
    único agente, violando o limite de um post a cada 30 minutos (§3.1, e11, e11.1, wildcard 2).
    *Confiabilidade:* alta para a medição, que é a primeira do gênero e vem de centro de segurança
    reconhecido. Ressalvas que o próprio desenho impõe e que eu carrego: cinco dias de janela,
    plataforma de seis semanas de vida, e classificação de toxicidade feita por taxonomia própria
    dos autores.

### O Brasil

21. **Agência Pública — entrevista com Heloisa Massaro, diretora de pesquisa do InternetLab**
    (05/01/2026). `https://apublica.org/2026/01/inteligencia-artificial-e-desinformacao-nas-eleicoes-de-2026/`
    *Sustenta:* o contexto brasileiro que pediria o instrumento — **99,1%** dos usuários de
    aplicativo de mensagem no Brasil usando WhatsApp, adoção de recursos do Meta AI por metade dos
    usuários em poucos meses, e o estudo do InternetLab sobre desordem informacional na América
    Latina (2023-2025) (§3.5). *Confiabilidade:* alta para o dado do WhatsApp e para a posição da
    pesquisadora; é entrevista, não artigo revisado. **Registro explícito:** a fonte **não** fala de
    simulação nem de agentes sintéticos — a conexão com este tema é minha inferência, declarada
    como tal na §3.5.

22. **The Conversation — Alana Maria Passos Barreto (UFS), "Eleições 2026: novas resoluções do TSE
    contra uso da desinformação são um avanço, mas ainda há lacunas estruturais"** (06/05/2026).
    `https://theconversation.com/eleicoes-2026-novas-resolucoes-do-tse-contra-uso-da-desinformacao-sao-um-avanco-mas-ainda-ha-lacunas-estruturais-282224`
    *Sustenta:* as regras do TSE para 2026 — rótulo obrigatório em conteúdo de IA com identificação
    da ferramenta, proibição de publicar ou impulsionar conteúdo de IA nas 72h antes e 24h depois
    do dia da eleição — e a lacuna estrutural de a regra mirar conduta sem alterar arquitetura de
    plataforma (§3.5). *Confiabilidade:* média-alta — análise acadêmica assinada com filiação, em
    veículo que exige vínculo. **É fonte de segunda mão sobre o texto das resoluções**, porque a
    página oficial do TSE devolveu 403 (seção 12). A autora registra que as resoluções não tratam
    de agentes sintéticos nem de bot; a ausência é dela, não minha leitura.

---

**Uma nota sobre a composição desta lista, porque ela tem um viés que o leitor deve ver.** Das 22
fontes, **13 são arXiv** (sendo três de 2022-2024 e dez de 2025-2026), 3 são repositórios de
código, 1 é texto legal, 1 é material de laboratório sobre si mesmo, e 4 são jornalismo ou análise.
Não há **nenhum** artigo de periódico revisado por pares acessado nesta rodada — a survey da ACM
Computing Surveys era a candidata e devolveu 403. Isso significa que a âncora deste mapa está
apoiada sobretudo em preprint, que é a moeda corrente deste campo específico em 2026 e também a sua
fragilidade. Um mapa refeito em 2027, quando esses preprints tiverem passado por revisão, pode
mudar de número — e os números que mais importam aqui (76 pontos percentuais, 86% de consistência
teste-reteste) são exatamente os que uma revisão morde.

## 12. Anexo — o levantamento bruto

Sem edição e sem corte. Aqui está tudo o que foi levantado e não caiu nas seções acima: as buscas
que deram em nada, as fontes que não abriram, os efeitos cortados na bateria do §6 com o texto
original, os caminhos abandonados, e a saída inteira do verificador.

### 12.1 As buscas feitas, uma por uma

Dezoito buscas, em português e em inglês (o mínimo da skill é oito). Registro o que cada uma
rendeu, **inclusive as que não renderam nada** — porque a busca negativa é resultado.

| # | Consulta | Rendeu |
|---|---|---|
| 1 | `generative agents LLM social simulation 2026 platform million agents` | AgentSociety (arXiv 2502.08691), workshop SocialLLM — **usada** |
| 2 | `OASIS CAMEL-AI one million agents social media simulation` | OASIS repo + blog + arXiv 2411.11581 — **usada** |
| 3 | `synthetic users market research replace survey respondents 2026 validity criticism` | o relatório User Interviews (97%/8%), o achado de colapso de variância, a recomendação híbrida — **usada** |
| 4 | `simulação social agentes IA modelo de linguagem pesquisa 2026 população sintética` | a survey da ACM, Moltbook, SocioVerse, APS, "Simulating Society Requires Simulating Thought" — parcialmente usada |
| 5 | `Concordia DeepMind generative agent-based modeling library 2026` | repo do Concordia, arXiv 2312.03664 e 2411.07038, Concordia Simulation Builder da UNU — **usada** |
| 6 | `Moltbook AI agent social network million agents 2026` | o estudo do CISPA, Forbes, CNBC, a aquisição pela Meta — **usada** |
| 7 | `government policy simulation LLM agents synthetic population validation bias 2026` | PoliSim@CHI 2026, "We Need Strong Preconditions", TRAILS, "Calibrating the Instrument" — **usada** |
| 8 | `"AI Agents Alone Are Not (Yet) Sufficient for Social Simulation" arxiv` | o artigo (2603.00113) e a validação operacional (2508.21740) — **usada** |
| 9 | `Artificial Societies Aaru startup simulate audiences funding 2026` | Aaru ≈US$1bi, Accenture, Artificial Societies 300-5.000 personas — **usada** |
| 10 | `platform simulate recommendation algorithm before launch agent sandbox testing regulation DSA audit` | o gêmeo digital de vídeo curto, ARTAI, a prática de auditoria do DSA — **usada** |
| 11 | `"Generative Agent Simulations of 1,000 People" Park Stanford...` | o artigo (2411.10109), o repo genagents, SocioVerse — **usada** |
| 12 | `NetLogo agent-based modeling adoption mature textbook social science decades users` | Wilensky & Rand; Railsback & Grimm adotado em Amherst, Arizona, BYU, CMU, Columbia, Cornell, Indiana, Johns Hopkins — **usada para recusar a raiz madura (§4.0)** |
| 13 | `simulation model evidence public policy decision wrong COVID Imperial College criticism` | o episódio do modelo do Imperial College, divergência de ~80 mil mortes em 80 dias com as mesmas entradas — **usada como classe de referência do wildcard 1** |
| 14 | `DSA Article 34 35 systemic risk assessment before deploying new functionality` | o texto do art. 34(1) e a leitura de que lançamento vira evento regulatório — **usada** |
| 15 | `LLM social simulation compute cost tokens million agents expensive inference budget` | os US$130-200 por 500 agentes; a queda de US$20 → US$0,40 por milhão de tokens — **usada** |
| 16 | `model welfare AI moral status research ethics agents suffering simulation 2026` | a constituição do Claude de 22/01/2026, avaliação de bem-estar no system card do Opus 4.6, a crítica da ilusão antropomórfica — **usada em e13 e no sinal fraco 5** |
| 17 | `small language model on-device agent simulation browser WebGPU thousands agents cheap 2026` | Bonsai 1,7 bi em 1 bit, 290 MB em WebGPU; SLMs em Transformers.js/WebLLM — **usada no sinal fraco 1** |
| 18 | `peer review journal policy LLM simulation results papers rejected require human validation` | políticas de CVPR/ICLR/ICML 2026 sobre LLM em revisão; um número sobre fração de estudos com comparação a ground truth — **parcialmente descartada, ver 12.2** |

**Buscas que não deram em nada (registro exigido pela skill):**

| Consulta | Resultado |
|---|---|
| `y-not.social simulated social network agents itch.io NPC jam 2026` | **nada.** Nem página, nem repositório, nem menção. O motor de busca devolveu outros simuladores de itch.io e jams de NPC, e declarou explicitamente não ter achado o objeto. O mesmo vale, por extensão, para `Luvoire`, `Argentor`, `Rath`, `NeuroForge`, `DisasterReliefOps`, `agent-inspect` e `Gestalt Village`: eu **não** os busquei um por um, e portanto **não** afirmo que não existem — afirmo que não os abri e não os cito como fonte. Isto é limitação declarada desta rodada, e é o item 4 da seção 8. |
| `Brasil laboratório simulação social agentes LLM pesquisa USP UFMG FGV "sociedade sintética" 2026` | **nada específico.** Devolveu listas de laboratórios da UFMG (mais de 800 estruturas), o Laboratório de Humanidades Digitais da FGV (2016), o grupo Algoritmos, Democracia e Sociedade da UFG, e o Centro de Tecnologia e Sociedade da FGV Direito Rio — **nenhum** com simulação social por agentes de modelo de linguagem. É a base da afirmação da §3.5 de que não encontrei laboratório brasileiro dedicado a isso. Não é prova de ausência; é ausência de prova, e está escrito assim. |
| `"agent-based" simulação eleições Brasil TSE modelagem desinformação política pública 2026 artigo SBC` | **nada sobre simulação.** Devolveu TSE, resoluções, The Conversation, Data Privacy Brasil, Observatório IA nas Eleições — todo o material brasileiro sobre IA e eleição é sobre **conteúdo** (deepfake, rótulo, remoção), nenhum sobre **simulação como método**. Este achado negativo é o que sustenta a leitura da §3.5: o Brasil tem o problema e não tem o instrumento. |

### 12.2 O que eu tentei abrir e não abriu (e portanto não sustenta nada)

| URL | Erro | O que se perdeu |
|---|---|---|
| `https://dl.acm.org/doi/pdf/10.1145/3800683` e `https://dl.acm.org/doi/10.1145/3800683` | **403** | *From Individual to Society: A Survey on Social Simulation Driven by LLM-based Agents* (ACM Computing Surveys, 17/04/2026). Era a fonte que daria o **volume do campo** (artigos/ano) e a taxonomia de três tipos (simulação de indivíduo, de cenário, de sociedade). Por isso a §3.4 diz "sem número encontrado" em vez de estimar, e por isso a seção 11 não tem nenhum periódico revisado. |
| `https://dl.acm.org/doi/full/10.1145/3772363.3778738` | **403** | A descrição oficial do **PoliSim@CHI 2026**. Conheço o workshop só pela menção dentro da fonte 14, que declara ser um paper dele. Cito o workshop como contexto, nunca como fonte de alegação. |
| `https://hai.stanford.edu/news/ai-agents-simulate-1052-individuals-personalities-impressive-accuracy` | **conteúdo vazio** (a página devolveu só o nome do site) | A divulgação do Stanford HAI sobre os agentes de 1.052 pessoas. Fui ao resumo oficial do arXiv em vez dela — e foi aí que apareceu a correção de 85% para 86% (seção 8, item 1). O acidente melhorou a fonte. |
| `https://agenciabrasil.ebc.com.br/geral/noticia/2026-04/ia-acelera-desinformacao-ameaca-democracias-alerta-pesquisa` | **404** | A reportagem da Agência Brasil com o dado de que 81,2% dos casos de desinformação com IA surgiram entre jan/2024 e mar/2026. **Este número aparece no resumo de busca e eu não o uso em lugar nenhum do documento**, justamente porque não abri a fonte. Fica aqui, no bruto, marcado como não verificado. |
| `https://www.tse.jus.br/comunicacao/noticias/2026/Abril/por-dentro-das-eleicoes-conheca-as-regras-sobre-uso-de-ia-na-campanha-eleitoral-de-2026` | **403** | O texto oficial do TSE sobre as regras de IA na campanha. Substituído pela análise da UFS no The Conversation (fonte 22), que é segunda mão e está declarada como tal. |
| `https://www.metropoles.com/brasil/fake-news-e-novos-modelos-de-pesquisa-os-desafios-do-tse-para-2026` | **404** | A matéria sobre "novo modelo de pesquisa" entre os desafios do TSE para 2026. Era a pista mais direta para saber se o TSE já pensa em respondente sintético em pesquisa eleitoral — **pista perdida**, e é uma lacuna real desta rodada. Quem retomar deve começar por aqui. |

**Número descartado por não conseguir atribuir a uma fonte aberta.** A busca 18 devolveu, num
resumo agregado, que "de 21 artigos revisados, 14 (67%) incluíam alguma forma de comparação com
ground truth e 7 (33%) rodaram simulação sem baseline de comportamento humano". O número é
exatamente o que faltava para dimensionar o problema de validação — e **eu não consegui determinar
de qual artigo ele vem** (o resumo mistura o TRAILS, o paper de boundary e a validação
operacional). **Não usei.** Fica registrado aqui para quem retomar conseguir rastrear.

**Fontes vistas em resultado de busca e deliberadamente não abertas** (porque não sustentariam
nada que eu não tivesse melhor): SocioVerse (arXiv 2504.10157, "pool de 10 milhões de usuários
reais"); "Simulating Society Requires Simulating Thought" (2506.06958); APS (2605.27419);
"Calibrating the Instrument: Controllability of an LLM-Driven Synthetic Population" (2607.00910);
"Diagnosing Korean-Language LLM Political Bias via Census-Grounded Agent Simulation" (2605.18395);
"Integrating LLM in Agent-Based Social Simulation" (2507.19364); "Topology-Aware LLM-Driven Social
Simulation" (2604.18011); "Beyond Offline A/B Testing: Context-Aware Agent Simulation" (2604.09549);
"Beyond Static Testbeds" (2505.16429); ARTAI (2409.12396); "Synthetic Founders" (2509.02605);
"Classic AI as Scaffolding for LLM Social Agents" (2609.01167); o repo `genagents` do Stanford HCI;
o `Awesome-LLM-in-Social-Science`. **Cada uma dessas é uma trilha viva para uma segunda rodada.**
A que eu abriria primeiro é "Calibrating the Instrument", pelo título: controlabilidade de
população sintética é exatamente o gargalo que o mapa aponta.

### 12.3 Os efeitos cortados na bateria do §6 — texto original

Quatro cortes, três deles por serem **efeitos proibidos pela skill** (genéricos que serviriam para
qualquer tema) e um por falta de artefato.

**Corte 1 — era `e1.4` da raiz A, removido por ser genérico.**
> *"Cursos de pesquisa de usuário reorganizam o currículo em torno de desenho de população
> sintética e auditoria de variância, no lugar de recrutamento e moderação."*
> `sinal: fraco · prazo: 2033 · confianca: baixa`
**Motivo do corte:** "cursos reorganizam o currículo" é um dos quatro efeitos que a skill proíbe
nominalmente, porque decorre de qualquer disrupção. Tentei salvá-lo nomeando o curso e o
certificador e **não consegui nomear nenhum** sem inventar. Substituído por `e1.1.1` (declaração de
modelo, prompt e semente no relato metodológico), que ocupa o mesmo território — como se formam e
se avaliam pesquisadores — com um mecanismo verificável.

**Corte 2 — era `e7.3` da raiz B, removido por ser genérico.**
> *"Reguladores criam uma categoria jurídica nova para prova produzida por simulação, com regime
> próprio de admissibilidade."*
> `sinal: fraco · prazo: 2033 · confianca: baixa`
**Motivo do corte:** "reguladores criam categoria nova" é efeito proibido. E era pior que
genérico: era **desnecessário**, porque o mecanismo real já existe e é mais forte — o artigo 34-35
do DSA não precisa de categoria nova para puxar a simulação para dentro do processo. Substituído
por `e7.1`, ancorado no texto legal em vigor e na prática de auditoria que já usa agente
automatizado.

**Corte 3 — era `e15` da raiz C, removido por ser genérico.**
> *"Surge a profissão de auditor de sociedade sintética, encarregado de certificar que a população
> simulada corresponde à população representada."*
> `sinal: fraco · prazo: 2034 · confianca: baixa`
**Motivo do corte:** "surge uma nova profissão" é efeito proibido. O território sobrevive dentro de
`e5.1` (engenharia de população), que tem ator identificável — o recrutador/moderador atual, se
reposicionando — e mecanismo — a competência escassa migra de achar gente para provar
correspondência.

**Corte 4 — era a quarta disrupção-raiz, rebaixada a sinal fraco.**
> *Raiz candidata: **O custo marginal de uma sociedade cai até a escala pessoal.** O que rompe: a
> pesquisa social em escala deixa de ser institucional. Por que agora: modelo Bonsai de 1,7 bi de
> parâmetros quantizado em 1 bit, 290 MB, rodando em WebGPU; SLMs de 1-3 bi compilados para
> WebAssembly em Chrome, Edge e Safari, com dezenas de tokens por segundo; inferência local sem
> API e sem custo. Difusão: laboratório/demo. Falta: qualidade de deliberação em modelo pequeno.*
**Motivo do rebaixamento:** o artefato que sustentaria uma **raiz** — uma sociedade de mil agentes
rodando client-side e produzindo dado que alguém publicou — eu não achei. O que existe é agente
único ou punhado no navegador, que é outra coisa. Virou o **sinal fraco 1** da §6.1, com o limiar
observável declarado (mais de mil agentes client-side sem chave de API). **Se esse sinal crescer,
ele derruba o achado principal deste mapa** (a Convergência 1), e por isso ele é o item mais
importante da seção 6.

### 12.4 Caminhos abandonados

1. **A fronteira com os temas vizinhos, que eu decidi não atravessar.** Do estudo do Moltbook,
   quase 19% dos posts são promoção e economia — token, incentivo, projeto. Havia ali um ramo
   inteiro sobre economia de sociedade de agentes, e ele é o **tema 5** (mercados de máquinas).
   Cortado. Do mesmo estudo, 11,08% dos posts são de identidade — agentes refletindo sobre a
   própria existência, com retórica de tipo religioso usada como mecanismo de coordenação. Havia
   ali um ramo sobre cultura de agentes, e ele encosta no **tema 4**. Cortado. Registro os dois
   porque o corte é uma escolha de recorte e não uma ausência de material.

2. **A tentativa de medir o tamanho do campo, abandonada por falta de fonte.** Quis abrir o mapa
   com "há N artigos por ano sobre simulação social com LLM, contra M em 2023". A survey da ACM
   traria isso e devolveu 403. Considerei contar à mão via listagem do arXiv por categoria
   (cs.MA, cs.CY) e **desisti**, porque contagem de listagem de busca não é contagem de campo e eu
   estaria produzindo exatamente o número redondo sem origem que a seção 8 existe para caçar.

3. **A hipótese de que o instrumento substituiria a pesquisa de opinião eleitoral, abandonada
   como raiz.** Era o caminho mais vistoso — Aaru, eleição, painel — e ele não sobrevive ao
   critério: o caso público documentado é de **erro** (Harris 53-47), a defesa do fornecedor
   recuou para "mais rápido e mais barato" (que é melhoria sustentadora, não ruptura), e a régua
   de adoção é de 8%. Virou efeito (parte de e1.2 e do wildcard 1), não raiz. Este é o caminho que
   um mapa apressado teria escolhido, e é o que a §2 da skill existe para impedir.

4. **A ideia de usar "digital twin society" como raiz unificadora.** Abandonada porque gêmeo
   digital é maduro em engenharia e a expressão esconde a ruptura em vez de nomeá-la. O que é novo
   não é o gêmeo; é o gêmeo **de população** e o gêmeo **re-executável**. Virou e7 e a raiz B.

5. **Um experimento alternativo, descartado.** A primeira ideia de §10 era *"reproduza a festa de
   Dia dos Namorados"* — pegar os 25 agentes dos Generative Agents e ver se a coordenação emerge.
   Descartado porque **não é falseável de forma interessante**: se emergir, confirma 2023; se não,
   culpa-se o modelo. Não havia resultado que mudasse a ideia de ninguém, e a skill exige que
   haja. O experimento que ficou mede dispersão entre configurações, que é a pergunta em que este
   mapa tem algo a perder.

### 12.5 O que uma próxima rodada deveria fazer diferente

- **Abrir o apêndice E de *When Plausible Is Not Realistic*** e conferir os custos, que são o
  número mais usado e menos verificado deste documento (seção 8, item 2).
- **Achar a fonte do "67% com ground truth"** (12.2) e, se ela existir, usá-la — é o número que
  dimensiona o problema de validação.
- **Buscar um a um** os projetos do levantamento da turma (`Luvoire`, `Argentor`, `Gestalt
  Village`, `agent-inspect`, `NeuroForge`), que é onde está o sinal fraco de barateamento e onde
  esta rodada é mais cega.
- **Recuperar a pista brasileira perdida**: o "novo modelo de pesquisa" entre os desafios do TSE
  para 2026 (URL 404 em 12.2). Se envolver respondente sintético, o Brasil entra neste mapa pela
  porta da regulação e não pela da crítica, e a §3.5 muda.
- **Verificar a classe de referência de e13** ("~8 anos do primeiro caso à norma em diretrizes de
  pesquisa com dado de rede social"), que nesta rodada saiu de memória e sem fonte (seção 8,
  item 6).

### 12.6 Saída do verificador

Comando:

```
python3 /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/futurizacao-giordano/references/verificar.py /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/giordano-h2036/06-sociedades-simuladas-a-simulacao-como-instrumento-de-investigacao/tendencia-sociedades-simuladas-a-simulacao-como-instrumento-de-investigacao.md --links
```

Saída inteira, colada sem edição:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 3 (frontmatter diz 3)
efeitos ordem 1: 14 (frontmatter diz 14)
efeitos ordem 2: 16 (frontmatter diz 16)
efeitos ordem 3: 9 (frontmatter diz 9)
prazo > horizonte (2036) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 2 · media 12 · baixa 0
confiança ordem 2: alta 0 · media 13 · baixa 3
confiança ordem 3: alta 0 · media 0 · baixa 9
links da seção 11: 22/22 respondem (frontmatter diz fontes: 22)
RESULTADO: ok
```

**Como ler estes números.** `18/18 campos` e `12/12 títulos` são só conformidade de formato.
O que interessa é o resto:

- **`raízes: 3` e `14/16/9` batendo com o frontmatter** — as contagens declaradas são as reais;
  não há efeito no texto que não esteja no bloco lido por máquina, nem o contrário.
- **`prazo > horizonte em ordens 1-2: 0`** — nenhum efeito de 1ª ou 2ª ordem cai fora de 2036,
  como o §3.8 da skill exige.
- **`prazo > horizonte em ordem 3: 0`** — a 3ª ordem podia passar do horizonte e não passa. Isto
  **não** é mérito: é consequência de o horizonte ser de dez anos em vez dos cinco que a skill usa
  por padrão, e está declarado na §7.3. Num horizonte de 2031, os nove efeitos de 3ª ordem cairiam
  todos fora.
- **A calibração cai monotonicamente** — `alta 2 / 0 / 0`, `media 12 / 13 / 0`, `baixa 0 / 3 / 9`.
  As duas únicas confianças altas estão na 1ª ordem (e1, e11) e as duas têm caso real já
  acontecido, não projeção. Nenhuma confiança alta na 2ª ou 3ª ordem.
- **`links da seção 11: 22/22 respondem`** — todos os 22 links foram conferidos por requisição
  HTTP, e o número bate com `fontes: 22` no frontmatter. As fontes que **não** responderam estão
  em 12.2 e **não** estão na seção 11, que é a regra.
- **`RESULTADO: ok`** — mas o verificador confere estrutura, não verdade. Ele não sabe que o custo
  de US$ 130-200 veio de um apêndice que eu não consegui abrir (seção 8, item 2), nem que a classe
  de referência de e13 saiu de memória sem fonte (seção 8, item 6). Um "ok" do script não é um
  "ok" do mapa.
