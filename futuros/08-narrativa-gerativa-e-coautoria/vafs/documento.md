---
tema: Narrativa gerativa e coautoria
slug: narrativa-gerativa-e-coautoria
autor_login: vafs
zona_de_interesse: Simulação e mundos
data: 2026-09-11
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 3
efeitos_ordem_2: 7
efeitos_ordem_3: 7
tecnologias_citadas: [MangoBox, LunaTranslator, AI Dungeon, Character.AI, SillyTavern, Ren'Py, Monogatari, TyranoBuilder, Twine, Inform 7, Yarn Spinner, Dialogic, Arrow, Pika, Luma, ChatTTS, Bark, Fantasy-Map-Generator, Chronicler, InstructGPT, detectores de texto gerado]
fontes: 13
confianca: media
experimento: A mesma frase, quatorze obras — gerar a mesma novela visual em paralelo e tentar discuti-la como se fosse uma só
skill_usada: futurizacao-vafs
publico_ok: false
---

## 1. Resumo

O custo de **contar** está caindo, mas não caiu por igual, e é aí que o mapa começa. A medição
mais completa disponível hoje sobre uso declarado de IA em produto narrativo — o censo de
~53.600 jogos publicados na Steam entre julho de 2023 e julho de 2026 — mostra que **30,8% dos
lançamentos de 2026** já carregam declaração de IA generativa, contra 10,9% em 2024. Mas mostra
também **onde** essa IA está: cerca de **60% das declarações são de asset visual**, localização
aparece como categoria "comum", e **escrita/diálogo é a categoria menos declarada de todas**.

Ou seja: a imagem já foi absorvida, a tradução está sendo absorvida, e a história — o objeto
deste tema — ainda não. É exatamente por isso que ela é a disrupção, e não a arte: a arte já é
produto de massa, e sai do mapa pela régua da disciplina.

Três disrupções-raiz sobrevivem ao teste da Fase 2, e cada uma ataca uma coisa diferente:
**(D1)** a obra narrativa inteira gerada de uma intenção curta — o que destrói não o roteirista,
mas o *pipeline como sequência de especialidades*; **(D2)** a obra que se reescreve para cada
leitor — o que destrói a cópia idêntica como base da conversa cultural; **(D3)** a tradução como
camada de leitura instalada pelo leitor — o que destrói a localização como decisão editorial e
como território de licenciamento.

D1 é a mais sólida e a mais chata: ela já está acontecendo e é, em boa medida, extrapolação do
que se mede hoje. D2 é a mais interessante e a mais frágil — tem evidência histórica **contra**
(a Netflix aposentou 20 dos seus 24 títulos interativos em 01/12/2024). D3 é a menos discutida e
a que tem o sinal mais concreto: uma ferramenta de 13,1 mil estrelas no GitHub que lê a memória
do processo do jogo e devolve tradução embutida na tela.

Viés declarado: **neutro**. O mapa tenta não ser nem entusiasta nem cético — e a seção 7 lista,
item a item, onde ele provavelmente está errado.

## 2. O tema

O objeto aqui é **a história como coisa gerada**, e o que isso faz com a ideia de autoria e de
obra. Não é o personagem que age dentro de um mundo (tema 7), não é o vídeo ou a imagem como
mídia (tema 12), não é a geração de regras e espaço (tema 14). É o artefato narrativo — a
novela visual, o quadrinho, o romance, a cena — nascendo inteiro de uma intenção curta, e a
coautoria humano-máquina deixando de ser exceção declarada para virar o modo normal de escrever.

**Recorte:** global, com uma nota sobre o Brasil na parte de localização e voz (efeito e3.1.1),
que é onde o Brasil tem posição própria e não derivada.

**Horizonte:** 2031. Isso importa porque calibra o que pode e o que não pode caber: cinco anos
comportam mudança de mercado e de prática profissional; não comportam, historicamente, reforma
curricular consolidada nem mudança de doutrina jurídica — e onde o mapa supôs que comportam,
a auditoria rebaixou (seção 7).

**Público:** quem projeta mídia e interação, para decidir onde vale investir esforço de desenho
nos próximos anos — e, mais especificamente, para decidir se o trabalho de desenho migra da
produção de conteúdo para a produção de **restrição** sobre conteúdo gerado.

**Descartado de início**, pela régua da disciplina: tudo que já é comum em produto de massa. Isso
tira do mapa, como raiz, a geração de imagem para asset, o chat de personagem em escala de
consumo (Character.AI), a tradução automática neural aplicada por quem publica, e as engines de
novela visual e de diálogo ramificado. Todas essas continuam no mapa — mas na seção 3, como
estado atual, não na seção 4.

## 3. Onde isso está hoje

**A infraestrutura narrativa clássica está madura e estável.** Ren'Py, Monogatari, TyranoBuilder,
Twine, Inform 7, Yarn Spinner, Dialogic, Arrow, geradores de mapa de fantasia, worldbuilding em
Markdown. São décadas de ferramenta em produção, opção padrão de fluxos reais, e o que resta
delas é melhorar — não mudar de natureza. É contra esse fundo que a geração aparece: ela não
chega num vazio, chega num ecossistema de ferramentas que funcionam.

**A geração já entrou na produção — pela arte, não pelo texto.** O dado mais duro disponível vem
do censo de ~53.600 jogos lançados na Steam entre julho/2023 e julho/2026, feito sobre o campo
obrigatório de "AI Generated Content Disclosure" que a Valve instituiu em janeiro de 2024:
10,9% dos lançamentos de 2024, 19,9% em 2025 e **30,8% de 2026 até julho**. O relatório
independente sobre os 4.382 demos da Steam Next Fest de junho/2026 (26,5% com declaração de IA,
contra 21,2% em fevereiro/2026) quebra por tipo de uso: **asset visual ~60%**, tradução/
localização "comum", áudio "menor", **escrita/diálogo "mais baixa"**, código isento desde a
revisão de política de janeiro/2026.

Essa assimetria é o fato central deste documento, e ela contraria a intuição de quem lê o tema:
o texto é o que a IA faz melhor há mais tempo, e é o último a ser declarado no produto.

**A abundância já chegou, independentemente da IA.** A Steam registrou 21.344 lançamentos em
2025 e 16.115 em 2026 até 20 de agosto — cerca de 69,5 por dia, contra 4.648 no ano inteiro de
2016. O gargalo do mercado narrativo já não é produção.

**O produto "prompt → obra jogável" existe e é vendido.** O MangoBox gera, de uma descrição em
texto, uma novela visual jogável com até cinco personagens com personalidade e estilo visual
próprios, arte de cenário e retrato, diálogo em grupo com interrupção e conversa paralela, e
cenas ramificadas por escolha do jogador — por US$ 9/mês no plano pago. Não é protótipo de
laboratório; é assinatura.

**A tradução do lado do leitor existe e é popular.** O LunaTranslator (13,1 mil estrelas no
GitHub, GPLv3, 4.940 commits) extrai o texto de novelas visuais por *hook* de memória do
processo — e por OCR, e por hook de emulador de NS/PSP/PSV/PS2 — e devolve tradução por
praticamente qualquer motor, inclusive LLM e tradução offline, com modo de "tradução embutida"
sobreposta ao jogo.

**A coautoria já foi julgada em público, dos dois lados.** Em 2024, Rie Qudan ganhou o 170º
Prêmio Akutagawa com *Tokyo-to Dojo-to*; declarou em coletiva ter usado ChatGPT em cerca de 5%
do texto e depois esclareceu que a IA foi usada apenas para escrever as falas da IA dentro do
romance. Em novembro de 2025, o Ockham New Zealand Book Awards desclassificou dois livros do
Jann Medlicott Acorn Prize por imagem de capa gerada por IA, sob regra criada em agosto de 2025
proibindo "AI interference – whether in content or artwork". Em junho de 2026, a Commonwealth
Foundation investigou por um mês acusações de uso de IA nos vencedores regionais do Commonwealth
Short Story Prize e concluiu, examinando "working drafts, time-stamped documents and notes",
que a IA não foi usada — mantendo os vencedores e anunciando que "further strengthening our
processes is now an immediate priority", com discussões já iniciadas sobre uso de detectores de
IA em prêmios literários.

**A regra jurídica já está posta, e é restritiva.** O relatório *Copyright and Artificial
Intelligence, Part 2: Copyrightability* do U.S. Copyright Office (29/01/2025) conclui que
inserir um prompt não constitui autoria do resultado; que usar IA como ferramenta não anula a
proteção, desde que um humano tenha autorado os elementos expressivos; que em obra mista a
proteção cobre apenas a expressão humana perceptível, podendo alcançar a seleção, coordenação e
arranjo do material; e recomenda explicitamente **não** criar direito novo para obra gerada por
IA.

## 4. As disrupções-raiz

### D1 — A obra narrativa inteira gerada de uma intenção curta

**Teste 1 (madura?)** Não. Apesar de 30,8% dos lançamentos Steam de 2026 declararem IA, a
categoria escrita/diálogo é a **menos** declarada, e a geração do artefato *completo* — elenco,
arte, cena e diálogo de uma vez — não é opção padrão de nenhum fluxo em escala. Não passa no
teste de exclusão.

**Teste 2 (emergente?)** Sim. Existe fora do laboratório como produto pago (MangoBox, US$ 9/mês),
tem linhagem de adoção real (AI Dungeon serviu, em 2020, milhões de aventuras a mais de um
milhão de usuários mensais) e a curva de capacidade segue subindo com os modelos multimodais.

**Teste 3 (disruptiva?)** Sim, e não pelo motivo óbvio. Não é "o roteirista perde o emprego" —
isso seria melhoria de custo. É que o **pipeline de produção como sequência de especialidades**
perde a razão de existir: roteiro → arte de personagem → arte de cenário → programação de
diálogo → montagem é uma cadeia que só existe porque cada etapa exige uma competência diferente.
Quando uma frase produz as cinco, a unidade mínima de produção deixa de ser a equipe e passa a
ser a pessoa. O ator que perde a razão de existir é o **estúdio pequeno como forma de juntar
especialidades**.

### D2 — A obra que se reescreve para cada leitor

**Teste 1 (madura?)** Não, e a evidência é de fracasso, não de imaturidade: a ramificação
pré-autorada em vídeo foi testada em escala de massa e recuada. A Netflix removeu 20 dos seus 24
títulos interativos em 01/12/2024, declarando que "the technology served its purpose, but is now
limiting as we focus on technological efforts in other areas". A variante generativa — texto
reescrito em tempo de execução, não escolha entre ramos pré-escritos — é outra coisa, e não é
padrão em lugar nenhum.

**Teste 2 (emergente?)** Sim, mas com uma ressalva que importa: é emergente na forma de
**sandbox** (AI Dungeon, Character.AI, SillyTavern — uso real, em escala, crescente) e ainda
**não** emergente na forma de **obra publicada**. O que existe em escala é conversa; o que não
existe é o livro que você e eu compramos e lemos diferente.

**Teste 3 (disruptiva?)** Sim. O que deixa de fazer sentido é a **cópia idêntica como base da
conversa cultural**. Resenha, crítica, clube de leitura, spoiler, walkthrough, wiki de fã,
prova de literatura na escola — todos pressupõem que as duas pessoas tiveram acesso ao mesmo
texto. Nenhum desses atores "fica pior"; eles ficam sem referente.

### D3 — A tradução como camada de leitura, instalada pelo leitor

**Teste 1 (madura?)** Aqui é preciso separar duas coisas que costumam ser confundidas. Tradução
automática aplicada **por quem publica** é madura — aparece como uso "comum" nas declarações da
Steam, e é o clássico MT + pós-edição. Isso sai do mapa. O que **não** é maduro é a tradução
aplicada **pelo leitor**, sem editor, sem licença e sem ninguém ter sido pago: é nicho de fã de
novela visual japonesa, não padrão de consumo.

**Teste 2 (emergente?)** Sim. LunaTranslator: 13,1 mil estrelas, hook de memória, OCR, hook de
emulador, tradução embutida na tela, praticamente qualquer motor de tradução incluindo LLM local.
Existe, funciona, é usado, e a curva de qualidade sobe com os modelos.

**Teste 3 (disruptiva?)** Sim. "Traduzir fica mais barato" seria melhoria — e é a parte madura.
O que rompe é outra coisa: a obra passa a ser consumida em línguas que o detentor de direito
**nunca licenciou**, por um caminho que ele não controla e que não deixa registro comercial.
O ator que perde a razão de existir é a **janela de lançamento por território linguístico**, e
com ela a ideia de que uma obra tem uma língua de origem que o leitor precisa atravessar. É o
mecanismo do fansub — mas sem o fansubber, portanto sem o gargalo humano que o mantinha pequeno.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "D1 — A obra narrativa inteira gerada de uma intenção curta"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "O custo marginal de produzir uma obra narrativa jogável completa cai ao preço de uma assinatura mensal, e a unidade mínima de produção deixa de ser a equipe multidisciplinar e passa a ser uma pessoa com uma frase."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "O gargalo de quem publica muda de conseguir produzir para conseguir ser encontrado: o catálogo cresce mais rápido que a atenção disponível, e a triagem passa a ser o trabalho escasso, não a produção."
            sinal: forte
            prazo: 2028
            confianca: alta
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "A vitrine deixa de ser lista e vira filtro declarado: plataformas passam a competir pelo que recusam, e a proveniência (quem fez, com qual ferramenta) vira metadado de mercado com preço, não questão ética."
                sinal: medio
                prazo: 2030
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "O trabalho de escrita narrativa se parte em dois ofícios: quem escreve linha de diálogo e quem escreve restrição — persona, arco, limite do que o sistema pode inventar — e só o segundo cresce em demanda."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "O portfólio de entrada na profissão passa a ser um conjunto de regras e testes de mundo narrativo, não um conjunto de textos escritos — a avaliação de quem contrata muda de amostra de prosa para amostra de especificação."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.3
            ordem: 2
            efeito: "A homogeneidade vira o custo escondido da abundância: com todos partindo dos mesmos modelos alinhados, o catálogo cresce em número de títulos e encolhe em variedade de conteúdo."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.3.1
                ordem: 3
                efeito: "Feito sem IA reaparece como categoria comercial e regulamentar da narrativa — não por qualidade demonstrada, mas porque prêmios e editoras já escrevem a regra e o mercado a converte em rótulo."
                sinal: medio
                prazo: 2030
                confianca: baixa
  - disrupcao: "D2 — A obra que se reescreve para cada leitor"
    efeitos:
      - id: e2
        ordem: 1
        efeito: "Duas pessoas passam a poder terminar a mesma obra sem terem lido o mesmo texto: a variação entre execuções deixa de ser defeito de edição e vira a forma normal do artefato."
        sinal: fraco
        prazo: 2029
        confianca: baixa
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "A crítica e a conversa de fã perdem o objeto comum: resenha, wiki, guia e spoiler passam a descrever apenas uma execução entre muitas, e param de servir como referência compartilhada."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "O que se discute publicamente deixa de ser a obra e passa a ser o gerador que a produz: a crítica migra de avaliar uma instância para avaliar uma distribuição de resultados, como já ocorre com jogos procedurais."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "O registro da execução vira infraestrutura obrigatória: sem log do que foi efetivamente gerado e lido, não há como citar em trabalho acadêmico, avaliar em sala de aula, nem responsabilizar por conteúdo."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "A prova de autoria migra do produto para o rastro: prêmio, editora e universidade passam a exigir o processo — rascunhos, carimbo de tempo, notas — em vez do texto final, porque só o processo distingue coautoria de geração."
                sinal: medio
                prazo: 2029
                confianca: media
  - disrupcao: "D3 — A tradução como camada de leitura, instalada pelo leitor"
    efeitos:
      - id: e3
        ordem: 1
        efeito: "A obra passa a ser consumida em línguas que ninguém licenciou nem traduziu, por um caminho instalado pelo leitor, sem que o detentor de direito participe da decisão nem registre a venda."
        sinal: medio
        prazo: 2027
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "A localização se parte: a tradução de texto corrido migra para o leitor e para o motor, e o que resta do lado editorial é o que a máquina não resolve sozinha — adaptação cultural, revisão de risco jurídico e a voz."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "A profissão se defende por lei antes de se defender por mercado, e a voz é protegida antes do texto: dublagem tem corpo identificável e vira objeto de projeto de lei, enquanto tradução de texto não encontra o mesmo caminho jurídico."
                sinal: medio
                prazo: 2029
                confianca: media
          - id: e3.2
            ordem: 2
            efeito: "Língua de origem deixa de ser propriedade da obra e vira configuração do leitor, e o texto passa a ser escrito já contando com isso — menos trocadilho, menos dialeto, mais estrutura traduzível por máquina."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "A janela de lançamento por território linguístico perde o argumento que a sustentava: como ela existe por contrato de distribuição e por calendário de marketing, e não só pelo atraso da tradução, ela só cai onde o contrato for renegociado — o que começa pelos mercados de menor receita, onde licenciar já não compensa."
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — o texto é a última fronteira, e isso é mensurável.** Na quebra por tipo de uso
das declarações da Steam Next Fest de junho/2026, escrita/diálogo é a categoria **mais baixa**,
abaixo de arte (~60%), de tradução ("comum") e de áudio. Num campo em que a IA de texto é a mais
antiga e a mais barata, isso é estranho o suficiente para ser sinal. Duas leituras possíveis, e
não dá para decidir entre elas com o dado disponível: ou escrever ainda é o que a máquina faz
pior no nível de obra inteira, ou é o que declarar dói mais — e há razão para suspeitar da
segunda, já que o censo registra que **22% dos jogos de receita significativa com IA adicionaram
a declaração depois do lançamento**, às vezes anos depois.

**Sinal fraco 2 — o `hook` de memória.** O LunaTranslator não pede permissão a ninguém: lê a
memória do processo do jogo. É uma técnica de fã, pequena, com 13,1 mil estrelas. É também a
prova de conceito de que a camada de tradução pode ser instalada **abaixo** de qualquer decisão
editorial. Obra em japonês consumida em português sem que ninguém tenha traduzido, licenciado ou
sido pago.

**Sinal fraco 3 — o detector como infraestrutura de prêmio.** A Commonwealth Foundation declarou,
em 22/06/2026, ter iniciado "discussions with relevant organisations about the appropriate use of
AI checkers in the context of literary prizes". Um instrumento de verificação sendo institucionalizado
dentro do circuito literário é sinal de que a suspeita deixou de ser episódica.

**Wildcard que já aconteceu — e este é o achado mais importante desta seção.** O wildcard
proposto para este tema ("um best-seller assumido como coautoria com IA ganhar um prêmio
literário — ou ser barrado dele") **não é wildcard: é passado, e nos dois sentidos.** Rie Qudan
ganhou o 170º Prêmio Akutagawa em 2024 tendo declarado uso de ChatGPT; o Ockham New Zealand Book
Awards desclassificou dois livros em novembro de 2025 por arte de capa gerada. O mesmo evento
produziu os dois desfechos opostos em dezoito meses, em instituições diferentes. A consequência
para este mapa: **não existe um ponto de virada único à frente**. A instituição literária não vai
decidir a questão de uma vez; ela já está decidindo caso a caso, em direções contrárias, e é
isso que vai continuar acontecendo até 2031.

**Wildcard que resta (baixa probabilidade, alto impacto):** uma decisão judicial ou legislativa
que reverta a posição de que prompt não gera autoria — isto é, que reconheça direito autoral
sobre saída gerada a partir de instrução detalhada. O U.S. Copyright Office recomendou
explicitamente **não** criar direito novo; se um tribunal ou legislador for na direção oposta, o
ramo inteiro do mapa que trata de prova de autoria (e2.2, e2.2.1) e de rótulo de proveniência
(e1.1.1, e1.3.1) muda de sentido: a proveniência deixaria de ser um filtro de recusa e viraria um
título de propriedade.

## 7. Contra o próprio mapa

- **e1.1 é extrapolação linear, não futurização.** O efeito "o gargalo vira descoberta, não
  produção" está descrito como consequência futura da geração narrativa, mas a curva já é essa
  hoje e **sem** IA generativa: 4.648 lançamentos na Steam em 2016, 21.344 em 2025, 69,5/dia em
  2026. A geração acelera uma saturação que já existia. Mantido no mapa porque tem consequência
  estrutural real e porque sustenta e1.1.1, mas o leitor deve tratá-lo como continuação de
  tendência medida, não como descoberta deste mapa.

- **Evidência histórica contra D2 inteira, não especulação.** O ramo e2/e2.1/e2.2 pressupõe que o
  público aceite obra que varia por leitor. O teste mais próximo disso já foi feito, em escala de
  massa, e falhou: a Netflix aposentou 20 dos 24 títulos interativos em 01/12/2024, com a
  declaração de que "a tecnologia cumpriu seu propósito, mas agora é limitante". A ressalva
  honesta é que ramificação pré-autorada e geração em tempo de execução não são a mesma coisa —
  mas quem quiser defender D2 tem de explicar por que o público que recusou escolher vai aceitar
  variar, e este mapa não tem essa explicação. **Se D2 não se concretizar, cinco dos dezessete
  efeitos caem**, incluindo dois dos sete de 3ª ordem.

- **e1.2.1 assume velocidade sem precedente.** "O portfólio de entrada na profissão deixa de ser
  amostra de prosa e vira amostra de especificação" pressupõe mudança consolidada em critério de
  contratação e em formação até 2031. O caso comparável mais próximo — a transição do portfólio
  de arte tradicional para o portfólio digital em estúdios de animação — levou mais de uma
  década. Rebaixado para `confianca: baixa` por este motivo, não por falta de mecanismo.

- **e3.2.1 pulava uma etapa, e foi reescrito.** A versão original dizia que a janela de
  lançamento por território cai porque o atraso de tradução some. Isso ignora que a janela existe
  também por contrato de distribuição e por calendário de marketing, que não dependem de tradução
  nenhuma. Reescrito com o passo faltante: a janela só cai onde o contrato for renegociado, e
  isso começa pelos mercados de menor receita, onde licenciar já não compensa. Continua com
  `confianca: baixa`.

- **e1.3.1 nasceu de analogia, mas sobreviveu por sinal de domínio.** "Feito sem IA vira
  categoria comercial" é o padrão do selo orgânico e do rótulo "human-made" recolocado aqui —
  o tipo de efeito que se gera fácil demais e que a Fase 4 existe para pegar. Sobreviveu porque,
  diferentemente da analogia pura, há sinal específico do domínio: a regra do Ockham NZ de
  agosto/2025 proíbe "AI interference" em conteúdo **ou** arte, e prêmios como CRAFT, Masters
  Review e Vassar Miller desclassificam automaticamente. A parte que continua sendo analogia
  é o salto de *regra de prêmio* para *rótulo de mercado com preço* — e é por isso que ficou com
  `confianca: baixa`.

- **D1 pode ser verdade e irrelevante ao mesmo tempo.** O censo da Steam registra que jogos com
  IA declarada alcançam 100 avaliações a apenas **cerca de 55% da taxa** dos jogos sem IA, e que
  o crescimento da receita vem de volume, não de conversão por título — "more shots on goal, not
  individual AI games converting better". Isto é, a abundância pode crescer sem que nada do que o
  mapa deriva dela (e1.1, e1.1.1) mude de fato o mercado, porque o topo continua capturando quase
  tudo (o top 1% dos títulos, ~94% da receita estimada).

- **Viés de quem construiu.** A zona de interesse declarada é "Simulação e mundos", e isso puxa a
  leitura para o lado do artefato gerado e do sistema que o gera — não para o lado de quem lê.
  Um mapa feito por alguém da zona de "leitura e crítica" provavelmente teria posto D2 como raiz
  principal e D1 como consequência, e chegaria a um desenho diferente. O viés pedido foi neutro;
  o viés estrutural do recorte permanece, e é esta a razão de o documento ficar em
  `confianca: media` e não `alta`, apesar de 13 fontes abertas.

## 8. O que a máquina errou

**1. Tratei como wildcard futuro algo que já é passado — e a busca corrigiu.** O enunciado do
tema propõe como wildcard "um best-seller assumido como coautoria com IA ganhar um prêmio
literário — ou ser barrado dele", e o primeiro rascunho desta roda seguiu esse enquadramento,
colocando o episódio em 2029–2030 como evento de virada. Ao checar, os dois desfechos já
ocorreram: Rie Qudan / Akutagawa em 2024 (com uso declarado de ChatGPT) e Ockham NZ em novembro
de 2025 (duas desclassificações). Isso mudou o mapa, não só a redação: em vez de um ponto de
virada à frente, o que existe é **decisão caso a caso, em direções opostas, já em curso** — e foi
por isso que e2.2.1 (prova de autoria migra para o rastro) subiu para `sinal: medio` e
`confianca: media`, ancorado no que a Commonwealth Foundation de fato fez em junho de 2026.

**2. Quase escrevi a versão mais dramática e menos exata do caso Qudan.** A frase que circula é
"5% do romance premiado foi escrito por ChatGPT", e ela ia entrar assim. A página consultada
registra as duas coisas: ela disse em coletiva ter usado ChatGPT em cerca de 5% do texto, e
**depois esclareceu** que a IA foi usada apenas para escrever as falas da IA dentro do romance —
o que é um fato bem menos escandaloso e bem mais interessante. As duas versões cabem no mesmo
número; só a segunda descreve o que aconteceu. Corrigido no corpo do documento.

**3. Minha intuição sobre onde a disrupção já chegou estava errada, e o dado inverteu o mapa.**
Por ser um tema de narrativa, o rascunho inicial assumia que a IA generativa em jogos era
majoritariamente geração de texto e diálogo. O censo da Steam diz o contrário com clareza: asset
visual domina com ~60% das declarações e escrita/diálogo é a categoria **menos** declarada. Essa
correção não foi cosmética — ela é a razão de D1 ter sido reformulada. Se a geração de texto já
fosse dominante, D1 seria tecnologia madura e sairia do mapa pela régua da disciplina; como não
é, ela permanece como raiz, e a seção 1 passou a abrir por essa assimetria em vez de pela
abundância.

**4. Uma alegação forte que eu não pude verificar, e por isso não usei.** Um resultado de busca
afirmava que um dos contos vencedores do Commonwealth Short Story Prize 2026 foi sinalizado como
"fully AI-written" por um detector, e que a WIRED teria confirmado isso de forma independente.
Não abri a matéria da WIRED. Abri a declaração oficial da Commonwealth Foundation, de 22/06/2026,
que conclui o oposto: "we are satisfied that AI was not used to write the winning stories".
O documento usa apenas a fonte que foi aberta, e registra aqui que existe uma alegação em sentido
contrário que não foi verificada — o que é diferente de dizer que ela é falsa.

**5. Um limite do método que vale declarar.** Em três buscas sobre tamanho e impacto do mercado
de localização de jogos, os resultados eram relatórios de mercado comerciais e páginas de SEO com
números que não se sustentam em metodologia publicada (projeções de CAGR, "risco 81/100 para
tradutores"). Nenhum deles entrou como fonte, e por isso o efeito e3.1 está sustentado por
mecanismo e por sinal qualitativo — não por número de mercado. A ausência é deliberada.

## 9. Três cenários para 2031

**Provável.** A geração do artefato inteiro virou rotina na faixa de baixo orçamento e não subiu
dali: estúdios pequenos publicam mais e vendem igual, porque a atenção não cresceu junto. A
declaração de IA é universal e semanticamente vazia — cobre desde uma textura de placeholder até
o jogo inteiro —, então plataformas e prêmios começaram a pedir proveniência granular, não a
caixinha. O texto continua sendo a parte menos declarada, e ninguém sabe dizer se é porque a
máquina escreve pior ou porque declarar escrita custa mais caro em reputação. A tradução do lado
do leitor cresceu em silêncio, sem nunca virar notícia, e uma parte mensurável do consumo de obra
japonesa e coreana no Ocidente acontece por caminhos que nenhum editor registra. A obra que se
reescreve para cada leitor continua sendo promessa: existe em sandbox, não em catálogo.

**Desejável.** A distinção entre coautoria e geração deixou de ser feita por detector e passou a
ser feita por rastro: prêmios, editoras e universidades pedem processo — rascunho, carimbo de
tempo, nota de trabalho — e isso se tornou tão banal quanto citar fonte. O efeito colateral bom é
que a discussão saiu do terreno da acusação: não se pergunta mais "isto foi feito por IA?", que é
indecidível, e sim "como isto foi feito?", que é verificável. Do lado da tradução, o
reconhecimento da camada de leitura levou a licenciamento simplificado por língua em vez de
proibição — o detentor de direito passou a ganhar onde antes não ganhava nada, porque o consumo
já acontecia de qualquer jeito.

**Indesejável.** A abundância e a homogeneidade se realimentaram: o catálogo tem ordem de
grandeza a mais de títulos e uma variedade menor do que tinha em 2026, porque quase tudo parte do
mesmo punhado de modelos alinhados — o efeito que Padmakumar & He mediram em redação de ensaio e
que Sui mediu como diferença de incerteza entre 28 modelos e escritores profissionais, agora em
escala de indústria. A resposta institucional foi a mais fácil e a menos eficaz: proibição
genérica de IA em prêmio e em catálogo, verificada por detector não confiável, que acerta o
amador honesto e erra o profissional que sabe se esconder. E o sinal precoce disso já é visível
hoje: prêmios adotando desclassificação automática antes de existir método de verificação com
erro conhecido.

## 10. O experimento

- **O que é:** *A mesma frase, quatorze obras.* A turma escolhe **uma** frase de premissa — uma
  só, escrita coletivamente em sala. Cada aluno gera, a partir dela e sem combinar nada com os
  outros, uma novela visual jogável num gerador de artefato completo (MangoBox ou equivalente).
  Cada um joga a própria e registra: elenco, ambientação, três batidas principais e o final.
  Depois a turma tenta fazer duas coisas: (a) **discutir "a obra"** como se discute um livro lido
  por todos, e (b) montar, no quadro, o mapa do que foi comum e do que foi único.

- **Que pergunta sobre o futuro ele ajuda a responder:** duas, e em direções opostas — é o desenho
  do experimento. Se as quatorze saídas convergirem para as mesmas batidas e os mesmos
  arquétipos, o que se confirma é **e1.3** (a homogeneidade como custo escondido da abundância),
  e D2 enfraquece: se tudo sai parecido, não há perda de objeto comum a lamentar. Se divergirem
  muito, o que se confirma é **e2.1** (a perda do objeto comum da crítica), e e1.3 enfraquece.
  Nenhum dos dois resultados é neutro, e os dois são informativos — é por isso que o experimento
  vale a pena rodar mesmo sem hipótese preferida.

- **Que tecnologia emergente ele usa, e por que não dá com tecnologia madura:** usa geração de
  artefato narrativo completo a partir de intenção curta (D1). Com tecnologia madura — Ren'Py,
  Twine, Yarn Spinner — o experimento é impossível dentro de uma aula: quatorze pessoas não
  produzem quatorze novelas visuais com arte e elenco em cinquenta minutos. O que torna a
  pergunta *fazível* é exatamente a capacidade que ainda está subindo.

- **O que a turma faria ao testar isso em sala:** além de gerar e comparar, medir a convergência
  de forma simples e honesta — contar quantas das quatorze repetem o mesmo arquétipo de
  protagonista, o mesmo tipo de conflito e o mesmo tipo de final. Não precisa de métrica
  sofisticada: a contagem bruta já separa "variação de superfície" de "variação de estrutura".

- **O que seria um resultado que mudaria de ideia:** se as quatorze obras divergirem em superfície
  (nome, cenário, arte) mas convergirem em estrutura (mesmo arco, mesmo conflito, mesmo final),
  isso derruba **os dois** lados de uma vez: não há homogeneidade visível o bastante para virar
  problema de mercado, e não há diferença suficiente para destruir o objeto comum da crítica —
  a conversa sobre "a obra" continuaria possível, só que sobre o esqueleto, não sobre o texto.
  Esse resultado obrigaria a reescrever D2 inteira, e é o desfecho que este mapa menos espera.

## 11. Fontes

Treze fontes abertas e lidas de fato nesta sessão, por busca e leitura de página. Fontes que
apareceram em resultado de busca mas não foram abertas **não** entram nesta lista nem no contador
— inclusive uma cuja alegação contraria uma que está aqui (registrado na seção 8, item 4).

1. Sulka Haro — ["Three years of AI on Steam"](https://fragwyz.substack.com/p/three-years-of-ai-on-steam).
   Censo de ~53.600 jogos lançados na Steam entre julho/2023 e julho/2026. Sustenta as seções 1,
   3 e 7: percentuais de declaração por ano (10,9% / 19,9% / ~30,8%), predomínio de arte, 22% de
   declarações adicionadas após o lançamento, taxa de 100 avaliações a ~55% da dos jogos sem IA,
   top 1% com ~94% da receita estimada. Confiabilidade: análise independente sobre dado público
   (campo obrigatório da Valve + SteamDB), metodologia descrita e censo completo, não amostra —
   alta para os percentuais; média para a estimativa de receita, que depende de modelo de terceiro.
2. Llama & Griffin — ["The AI Disclosure Report · Steam Next Fest · June 2026"](https://www.llamagriffin.com/Data/SteamNextFestJune2026/part-2.html).
   4.382 demos da edição de 15–22/06/2026. Sustenta a quebra por tipo de uso (arte ~60%,
   tradução "comum", escrita/diálogo "mais baixa", código isento desde jan/2026) e a comparação
   com fevereiro/2026 (21,2%). Confiabilidade: dado primário de contagem, com limite reconhecido
   pelos próprios autores — uma única caixa de declaração cobre desde textura de placeholder até
   jogo inteiro gerado; alta para a contagem, média para a interpretação por tipo.
3. Notebookcheck — ["Steam averages almost 70 new games a day in 2026"](https://www.notebookcheck.net/Steam-averages-almost-70-new-games-a-day-in-2026.1374113.0.html).
   Sustenta a seção 3 e o efeito e1.1: 16.115 lançamentos em 2026 até 20/08 (~69,5/dia), 21.344
   em 2025, 18.478 em 2024, 4.648 em 2016. Confiabilidade: imprensa especializada reportando
   SteamDB, número verificável na fonte primária — alta.
4. Padmakumar, V. & He, H. — ["Does Writing with Language Models Reduce Content Diversity?"](https://arxiv.org/abs/2309.05196),
   arXiv:2309.05196, ICLR 2024. Sustenta e1.3 e o cenário indesejável: experimento controlado de
   redação de ensaio argumentativo em três condições (GPT-3, InstructGPT, sem modelo) encontra
   redução estatisticamente significativa de diversidade **apenas** com o modelo ajustado por
   feedback humano, e atribui o efeito ao texto contribuído pelo modelo — o texto do usuário não
   muda. Confiabilidade: revisado por pares em conferência de primeira linha — alta para o achado;
   **atenção ao limite**: o domínio testado é ensaio argumentativo, não ficção, e a transposição
   para narrativa é minha, não dos autores.
5. Sui, P. — ["LLMs Exhibit Significantly Lower Uncertainty in Creative Writing Than Professional Writers"](https://arxiv.org/abs/2602.16162),
   arXiv:2602.16162, submetido em 18/02/2026. Sustenta e1.3: análise informacional de 28 LLMs
   contra conjuntos de narrativa de alta qualidade, achando lacuna consistente de incerteza, maior
   em escrita criativa que em domínio funcional, e **pior em modelos instruídos e de raciocínio do
   que nos modelos base**. Confiabilidade: preprint **sem revisão por pares** — tratar com cautela
   adicional; é usado aqui como convergência com a fonte 4, não como evidência isolada.
6. MangoBox — [página oficial do produto](https://mangobox.ai/). Sustenta a seção 3 e D1: geração
   de novela visual jogável a partir de descrição em texto, até cinco personagens, arte de cenário
   e retrato, diálogo em grupo com interrupção, cenas ramificadas; plano Pro a US$ 9/mês.
   Confiabilidade: fonte primária **com interesse comercial no próprio tema** — vale como prova de
   que o produto existe e é vendido, não como avaliação de qualidade do que ele gera.
7. HIllya51 — [LunaTranslator, repositório no GitHub](https://github.com/HIllya51/LunaTranslator).
   Sustenta D3 e e3: hook de memória como método primário, OCR, hook de emulador NS/PSP/PSV/PS2,
   "embedded translation" sobreposta, suporte a praticamente qualquer motor incluindo LLM e
   tradução offline; 13,1 mil estrelas, GPLv3, 4.940 commits. Confiabilidade: fonte primária
   verificável, e as estrelas são proxy de atenção, **não** de número de usuários — alta para as
   capacidades, média para a inferência de adoção.
8. Wikipédia — ["Rie Qudan"](https://en.wikipedia.org/wiki/Rie_Qudan). Sustenta a seção 3 e a
   seção 8: 170º Prêmio Akutagawa em 2024 por *Tokyo-to Dojo-to*; declaração de uso de ChatGPT em
   ~5% do texto e esclarecimento posterior de que a IA foi usada apenas nas falas da IA dentro do
   romance. Confiabilidade: terciária — média; foi usada justamente porque registra a declaração
   **e** o esclarecimento, que é a parte que as manchetes cortam.
9. Euronews — ["New Zealand book award disqualifies two authors for AI artwork"](https://www.euronews.com/2025/11/18/new-zealand-book-award-disqualifies-two-authors-for-ai-artwork),
   18/11/2025. Sustenta a seção 3, o wildcard e e1.3.1: desclassificação de *Obligate Carnivore*
   (Stephanie Johnson) e *Angel Train* (Elizabeth Smither) do Jann Medlicott Acorn Prize por capa
   gerada por IA, sob regra de agosto/2025 vedando "AI interference – whether in content or
   artwork"; resposta da editora de que os livros foram inscritos antes da regra.
   Confiabilidade: imprensa internacional com declarações atribuídas — alta.
10. Commonwealth Foundation — ["2026 Commonwealth Short Story Prize Update"](https://commonwealthfoundation.com/2026-cw-prize-update/),
    22/06/2026. Sustenta e2.2.1 e o sinal fraco 3: investigação de um mês, exame de "working
    drafts, time-stamped documents and notes", conclusão de que a IA não foi usada, manutenção dos
    vencedores, e início de discussões sobre uso de detectores em prêmios literários.
    Confiabilidade: fonte primária, **e parte interessada no desfecho** — é a instituição se
    pronunciando sobre acusação contra si; vale integralmente como prova do **procedimento**
    adotado (que é o que este mapa usa), e com ressalva como prova da conclusão.
11. U.S. Copyright Office — [página oficial "Copyright and Artificial Intelligence"](https://www.copyright.gov/ai/).
    Sustenta as datas das três partes do relatório: Parte 1 (Digital Replicas) em 31/07/2024,
    Parte 2 (Copyrightability) em 29/01/2025, Parte 3 (Generative AI Training) em pré-publicação
    em 09/05/2025. Confiabilidade: fonte primária oficial — alta.
12. Jones Day — ["Copyrightability of AI Outputs: U.S. Copyright Office Analyzes Human Authorship Requirement"](https://www.jonesday.com/en/insights/2025/02/copyrightability-of-ai-outputs-us-copyright-office-analyzes-human-authorship-requirement),
    fev/2025. Sustenta o conteúdo da Parte 2 citado na seção 3: prompt não constitui autoria do
    resultado; IA como ferramenta não anula a proteção se um humano autorou os elementos
    expressivos; em obra mista a proteção cobre a expressão humana perceptível e pode alcançar
    seleção, coordenação e arranjo; recomendação explícita de **não** criar direito *sui generis*.
    Confiabilidade: síntese de escritório de advocacia sobre documento público — alta para a
    descrição do que o relatório diz, e a ressalva óbvia é que é resumo, não o texto original
    (o PDF oficial está em `https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf`
    e não foi aberto nesta sessão).
13. Pocket-lint — ["Netflix ditches most of its interactive shows"](https://www.pocket-lint.com/netflix-is-saying-goodbye-to-interactive-shows/).
    Sustenta o teste de maturidade de D2 e o item mais forte da seção 7: remoção de 20 dos 24
    títulos interativos em 01/12/2024, sobrevivência de quatro, e a declaração da Netflix — "the
    technology served its purpose, but is now limiting as we focus on technological efforts in
    other areas". Confiabilidade: imprensa de tecnologia com citação direta atribuída à empresa —
    média-alta; a data e a declaração batem com outras coberturas vistas em busca, embora só esta
    tenha sido aberta.

## 12. Anexo — o levantamento bruto

**Estado da entrevista (Fase 1).** Os seis pontos foram respondidos antes da execução, no próprio
pedido — nenhum ficou em aberto, e por isso não houve rebaixamento de confiança por entrevista
incompleta. Registro do que foi fixado: (1) recorte — a história como coisa gerada e o efeito
disso sobre autoria, excluídos os temas vizinhos 7, 12 e 14; (2) horizonte — 2031; (3) público —
quem projeta mídia e interação; (4) geografia — global, com nota sobre o Brasil; (5) descartado —
o que já é comum em produto de massa, sem nenhuma outra exclusão; (6) viés — neutro.
Duas informações adicionais foram dadas e usadas: nenhuma disrupção suspeita previamente
(a escolha das três raízes é do mapa, não do pedido), e o critério de mudança de ideia declarado
— evidência de adoção além da maioria inicial de Rogers, ou de que a tecnologia só melhora o que
existe. O segundo critério foi o que mais trabalhou: é ele que expulsou geração de imagem,
tradução aplicada pelo editor e chat de personagem da seção 4.

**Nota sobre busca:** WebSearch e WebFetch estavam disponíveis e foram usados. Treze páginas
foram abertas e lidas; o contador `fontes: 13` corresponde a essas, não ao que apareceu em
resultado de busca.

**Candidatos testados na Fase 2 e rejeitados, com o motivo:**

| Candidato | Resultado | Motivo |
|---|---|---|
| Ren'Py, Monogatari, TyranoBuilder (engines de novela visual) | **Madura** | Décadas de uso em produção, opção padrão do fluxo; resta melhorar, não mudar de natureza. Entra na seção 3. |
| Twine, Inform 7, Yarn Spinner, Dialogic, Arrow (diálogo ramificado e ficção interativa) | **Madura** | Mesma razão. Inform 7 é caso de maturidade com adoção em declínio, o que é maturidade ainda assim. |
| Fantasy-Map-Generator, Chronicler (worldbuilding e mapa) | **Madura** e fora do recorte | Geração procedural de espaço e regra é o tema 14, não a história como coisa gerada. |
| Geração de imagem para asset de jogo | **Madura pela medição** | ~60% das declarações de IA na Steam; 30,8% dos lançamentos de 2026. É produto de massa — cai pela régua declarada no ponto 5 da entrevista. |
| Tradução automática neural aplicada por quem publica (localização MT + pós-edição) | **Madura** | Categoria "comum" nas declarações da Steam; padrão da indústria há anos. A variante **não** madura — aplicada pelo leitor — virou D3. |
| Character.AI e chat de personagem em escala de consumo | **Madura como produto de massa** e fora do recorte | Cai pela régua; e o personagem que age dentro de um mundo é o tema 7. |
| Pika, Luma, geração de vídeo por prompt | **Emergente, fora do recorte** | A geração de vídeo como mídia — controle, qualidade, autoria visual — é o tema 12 por definição da disciplina. |
| ChatTTS, Bark, voz sintética para diálogo | **Emergente, não disruptiva neste recorte** | Nas declarações da Steam, voz é minoria (embora 3× mais frequente entre jogos bem-sucedidos: 24% contra 8%). Ameaça o ofício de dublagem — que aparece no mapa como **efeito** (e3.1.1), não como raiz, porque não rompe nada sobre *a história como coisa gerada*. |
| Detector de texto gerado por IA | **Emergente, não é tecnologia narrativa** | É infraestrutura de governança sobre a narrativa, não produção dela. Entra como sinal fraco 3 e dentro de e2.2.1. |
| AI Dungeon | **Marco histórico, não candidato** | 2020; usado como evidência de que a linhagem de adoção existe, não como tecnologia a testar hoje. |

**Efeitos alterados pela auditoria da Fase 4** (nenhum efeito sobreviveu sem exame; cinco foram
alterados ou explicitamente marcados):

- **e1.1** — identificado como extrapolação linear de curva já medida. Mantido com `confianca:
  alta` porque o dado é forte, mas registrado na seção 7 como continuação de tendência, não como
  descoberta do mapa.
- **e1.2.1** — falhou o teste de velocidade (mudança de critério de contratação e de formação em
  cinco anos, sem precedente comparável). Rebaixado para `confianca: baixa`.
- **e1.3.1** — identificado como derivação por analogia entre setores. Sobreviveu com `sinal:
  medio` porque há sinal específico do domínio (regras de prêmio de 2025–2026), mas com
  `confianca: baixa` pelo salto ainda analógico de regra de prêmio para rótulo de mercado.
- **e2.2.1** — foi o único efeito **promovido** pela verificação: nasceu como especulação de
  `sinal: fraco` e subiu para `medio`/`media` depois que a declaração da Commonwealth Foundation
  mostrou que a prova por rastro (rascunhos, carimbo de tempo, notas) já foi usada na prática,
  em junho de 2026, por uma instituição literária decidindo um caso real.
- **e3.2.1** — falhou o teste do elo causal (pulava de "some o atraso de tradução" para "cai a
  janela de lançamento por território", ignorando contrato e marketing). **Reescrito** com o passo
  intermediário, e mantido com `confianca: baixa`.

**Efeitos considerados e cortados antes de virar `id` na roda:**

- *"Prêmios literários criam categoria separada para obra coautorada com IA."* Cortado: a
  evidência aponta na direção contrária — Ockham NZ, CRAFT, Masters Review e Vassar Miller
  desclassificam em vez de segmentar. Manter o efeito seria escrever contra o único sinal
  disponível.
- *"Escolas de escrita criativa desaparecem."* Cortado pelo critério (a) da Fase 3: não há
  mecanismo narrável em uma frase entre "gerar obra fica barato" e "a instituição de ensino de
  escrita fecha". É o tipo de efeito que se aplica a qualquer disrupção e não diz nada sobre esta.
- *"Modelos passam a ser treinados por editora, com catálogo próprio, e a editora vira detentora
  do estilo."* Cortado por ultrapassar o recorte: é uma questão de treinamento e de direito sobre
  dado, que tem literatura e disputa própria (a Parte 3 do relatório do U.S. Copyright Office,
  sobre treinamento de IA generativa, saiu em pré-publicação em 09/05/2025), e que renderia mapa
  inteiro em vez de galho deste.
- *"A tradução em tempo real elimina o conceito de obra estrangeira."* Cortado por ser afirmação
  forte demais sem etapa intermediária — e substituído pela versão com mecanismo, que é e3.2
  (a língua de origem vira configuração do leitor, e o texto passa a ser escrito contando com
  isso).

**Buscas que não deram em nada utilizável:** três buscas sobre tamanho, emprego e impacto no
mercado de localização de jogos devolveram apenas relatórios de mercado comerciais e páginas
otimizadas para busca, com projeções sem metodologia publicada. Nenhuma entrou como fonte, e
o efeito e3.1 está sustentado por mecanismo e sinal qualitativo — declarado assim na seção 8,
item 5. Uma quarta busca, sobre o caso do Commonwealth Short Story Prize, devolveu alegação de
confirmação independente por detector de IA que **não** foi aberta e portanto não foi usada
(seção 8, item 4).

**Nota sobre o Brasil (recorte geográfico).** A parte brasileira deste mapa está concentrada em
e3.1.1, e por um motivo estrutural, não por escassez: o Brasil tem posição **própria** no lado da
voz e da dublagem — onde é um dos maiores mercados do mundo e onde existe organização profissional
e agenda legislativa ativa — e posição **derivada** no lado da geração de texto narrativo. Em
29/08/2024 houve audiência pública conjunta das comissões de Cultura e de Trabalho na Câmara dos
Deputados sobre proteção legal contra voz gerada por IA, com o Movimento Dublagem Viva,
representação do Ministério da Cultura e discussão dos PLs 1.376/2022 (dublagem e legendagem por
empresas e profissionais sediados no Brasil) e 2.338/2023 (remuneração de titulares por uso de
obra em treinamento de IA). Uma das falas registradas na cobertura oficial da Câmara resume a
posição do setor: "A automação do processo significaria a negação disso. Eu gosto de dizer que
isso seria um novo processo de colonização". Em 2025 tramita ainda o PL 2.462/2025, com sanções
para distribuição de conteúdo dublado por IA. Isso é a evidência que sustenta a parte de e3.1.1
que diz que **a voz é protegida antes do texto**: há corpo identificável, há categoria
profissional organizada, há projeto de lei — e nada equivalente do lado da tradução de texto
corrido. A ressalva honesta é que a cobertura oficial consultada não traz números de mercado
(emprego, faturamento, participação brasileira), então o argumento é sobre **mecanismo político**,
não sobre tamanho econômico.
