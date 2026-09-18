---
tema: Narrativa gerativa e coautoria
slug: narrativa-gerativa-e-coautoria
autor_login: hfm
zona_de_interesse: Simulação e mundos
data: 2026-09-18
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 11
efeitos_ordem_3: 13
tecnologias_citadas: [Mangobox, LunaTranslator, Ren'Py, Inform 7, Twine, YarnSpinner, Monogatari, Arrow, Character.AI, NovelAI, AI Dungeon, ConStory-Bench, Sora 2, Veo 3.1, Kling, Seedance, Runway Gen-3, MiniMax, ChatTTS, Bark, knowledge graphs para narrativa, campo de disclosure de IA da Steam, tag "AI Generated" do itch.io, marcação legível por máquina do AI Act]
fontes: 17
confianca: media
experimento: Duplo cego de procedência — a turma joga a mesma micro-obra narrativa em três versões (humana, gerada, coescrita) sem saber qual é qual, e tenta identificar a autoria
skill_usada: futurizacao-hfm
publico_ok: false
---

## 1. Resumo

Gerar uma obra narrativa inteira — elenco, arte, diálogo, ramificação — a partir de uma frase deixou
de ser demonstração e virou produto de assinatura mensal. O efeito observável não é qualidade: é
volume. Cerca de um terço dos lançamentos recentes da Steam já declara conteúdo de IA, e a fatia de
receita correspondente segue muito abaixo da fatia de oferta, o que indica que o gargalo migrou da
produção para a atenção e a descoberta. Ao mesmo tempo, a obra começa a perder fixidez: a tradução
acontece sobreposta, durante o uso, e a história se reconfigura por sessão. E a autoria deixa de ser
inferida do texto para virar um metadado declarado — campo obrigatório em loja, regra de prêmio,
marcação legível por máquina exigida por lei na União Europeia desde 2 de agosto de 2026. Este mapa
deriva três disrupções-raiz daí, com seis efeitos de primeira ordem, onze de segunda e treze de
terceira, até 2031. A confiança é média: a evidência de barateamento e de regulação é forte e
datada; a de que a coautoria vira modo normal de escrever é fraca, e a evidência técnica disponível
mostra que a coerência de histórias longas ainda falha de modo mensurável.

## 2. O tema

Narrativa gerativa e coautoria é a história tratada como coisa gerada — e o que isso faz com a
noção de autor e de obra. O objeto aqui não é o personagem que age dentro de um mundo, nem a geração
de vídeo e imagem como mídia, nem o design procedural de regras. É o artefato narrativo: a novela
visual jogável, o quadrinho animado, o romance, o roteiro, a ficção interativa — produzido, adaptado
e traduzido por sistemas generativos, com um humano em algum ponto do laço.

Onde isso encosta em mídia e interação: a ficção interativa é, há quarenta anos, o lugar onde a
narrativa e a interface se negociam. Engine de novela visual (Ren'Py, Monogatari), linguagem de
ficção interativa (Inform 7, Twine), ferramenta de diálogo ramificado (YarnSpinner, Arrow) são
infraestrutura madura e barata. O que muda não é a existência dessas ferramentas: é que o conteúdo
que elas organizavam passou a ser gerável, e o papel humano se desloca de produzir para especificar,
escolher e responder pelo resultado.

Por que isto merece um mapa de futuro e não um levantamento de estado da arte: porque a pergunta
interessante não é "o que existe hoje", e sim o que acontece com instituições que pressupõem uma obra
fixa, com um autor identificável, numa língua de origem. Prêmio literário, direito autoral, contrato
de roteirista, catálogo de biblioteca, crítica, currículo de escrita criativa — todos operam sobre
esse pressuposto. A evidência de 2024 a 2026 mostra os três se movendo ao mesmo tempo: o custo, a
fixidez e a atribuição. Um levantamento de estado da arte listaria ferramentas; um mapa de futuro
pergunta o que se reorganiza quando o pressuposto cai.

## 3. Onde isso está hoje

### O que já existe e funciona

**Geração de obra narrativa completa a partir de intenção curta, como produto pago.** O Mangobox
recebe uma descrição de cenário — de uma frase a um parágrafo — e devolve retratos de personagem,
locações, personalidades e uma cena de abertura jogável, com até cinco personagens, escolhas e
conversa em grupo; o plano pago custa US$ 9 por mês e inclui geração de imagem ilimitada e vinte
gerações de vídeo mensais [1]. Isto é fato observado: existe, é comercial, é barato. **Não** é
evidência de que o resultado seja bom, nem de adoção em escala — a própria página não publica número
de usuários.

**Tradução sobreposta em tempo real sobre obra em execução.** O LunaTranslator captura o texto de um
jogo por gancho de memória ou OCR e devolve a tradução sobreposta, com suporte a "praticamente todos
os motores de tradução, incluindo tradução por grandes modelos de linguagem e tradução offline";
13,2 mil estrelas, 1,1 mil forks, quase cinco mil commits, GPLv3, manutenção ativa [2]. É um projeto
pequeno em equipe e grande em consequência: uma obra em japonês é consumida em português sem que
ninguém a tenha traduzido, e sem que o detentor de direitos participe da decisão.

**Geração de vídeo a partir de roteiro, com preço por segundo.** Em maio de 2026, os preços de API
por segundo de vídeo gerado iam de US$ 0,036 (Seedance) a US$ 0,40 (Veo 3.1 completo), passando por
Kling a US$ 0,07 e Sora 2 a US$ 0,10 [3]. É aqui que "o custo de contar cai perto de zero" deixa de
ser retórica e vira número: um minuto de vídeo custa entre dois e vinte e quatro dólares de inferência.

**Declaração de IA como campo de loja, já com série histórica.** No itch.io, desde 20 de novembro de
2024, existe o campo "Generative AI disclosure", que discrimina quatro tipos de uso — gráficos, som,
texto e diálogo, código — e aplica a tag "AI Generated" ou "No AI"; a declaração é **obrigatória para
pacotes de assets** (os não declarados deixam de ser indexados nas páginas de navegação) e
**voluntária para jogos** [4]. Na Steam, a série é mais dura: no Next Fest, a fatia de demos com
declaração de IA subiu de 21,2% em fevereiro de 2026 para 26,5% em junho de 2026, medida sobre o
mesmo recorte (1.163 de 4.382 demos registradas) [5].

**Regulação de transparência em vigor.** Desde 2 de agosto de 2026, a Comissão Europeia passou a
aplicar as obrigações de transparência do AI Act: conteúdo gerado ou alterado por IA "terá de
carregar marcas legíveis por máquina para que possa ser detectado mais facilmente", deepfakes têm de
ser rotulados, e sistemas interativos têm de informar ao usuário que não são humanos [6][7].

**Doutrina de autoria estabelecida nos EUA.** Em 29 de janeiro de 2025, o U.S. Copyright Office
publicou a Parte 2 do relatório sobre IA: a proteção alcança saídas de IA generativa apenas quando um
autor humano determinou elementos expressivos suficientes; a mera provisão de prompts não basta; obras
inteiramente geradas por IA não são protegíveis; e a análise é caso a caso, sem necessidade de lei
nova [8].

**Regra de comunidade que já exclui.** Em 31 de janeiro de 2026, a IFComp — a competição anual de
ficção interativa, a instituição central dessa comunidade — publicou política para a edição 2026:
"todo conteúdo voltado ao jogador nas inscrições da IFComp, inclusive a arte de capa, deve ser
inteiramente criado por humanos", e as obras não podem exigir que juízes ou jogadores interajam com
serviços de IA externos durante o jogo; o uso de IA continua permitido como assistência de
desenvolvimento — edição, depuração, acessibilidade, pesquisa, auxílio limitado de tradução,
programação [9].

**Contrato coletivo que já precifica réplica.** O Interactive Media Agreement de 2025 da SAG-AFTRA,
ratificado em julho de 2025, exige consentimento escrito "claro e conspícuo", separado ou em aditivo
assinado especificamente, com descrição razoavelmente específica do uso da réplica digital — inclusive
se há geração em tempo real; proíbe consentimento amplo obtido na contratação inicial para projetos
futuros; e obriga relatório de uso em até 90 dias do lançamento. Réplicas geradas a partir de material
não sindicalizado ou por prompt com o nome do intérprete ("Independently Created Digital Replicas")
continuam exigindo consentimento e negociação na maioria dos casos [10].

### O que existe e não funciona

**Coerência de história longa.** O ConStory-Bench avaliou 21 sistemas (7 proprietários, 9 abertos, 3
com capacidade aumentada, 2 baseados em agentes) sobre 2.000 prompts, mirando histórias de 8 a 10 mil
palavras, com taxonomia de cinco categorias de erro e 19 subtipos. O melhor resultado — GPT-5-Reasoning
— teve densidade de erro de consistência de 0,113 por 10 mil palavras; Gemini-2.5-Pro, 0,305;
Claude-Sonnet-4.5, 0,520. Os erros se acumulam aproximadamente de forma linear com o comprimento, e os
modos dominantes de falha são consistência factual/de detalhe e lógica de linha do tempo e enredo [11].
Isto é evidência direta contra a versão forte da disrupção: gerar muito não é o mesmo que gerar uma
obra que se sustenta.

**Andaime estrutural como solução geral.** O estudo de grafos de conhecimento guiando narrativa
gerativa (N=15) mediu avaliação agregada de 3,51 com grafo contra 3,49 sem — diferença sem
significância estatística (p>0,05). O grafo ajudou em histórias de ação (p=0,039; desenvolvimento de
personagem subindo de 2,38 para 3,75, p=0,016) e **piorou** as introspectivas (p=0,07). O achado que
se sustenta é outro: 92,9% dos participantes preferiram poder editar o grafo, e 78,5% avaliaram sua
sensação de controle como "muito boa" ou "excelente" [12]. Ou seja: o ganho mensurado foi de agência,
não de qualidade.

**Conversão de oferta em demanda.** Um censo de 53.597 lançamentos da Steam, de meados de 2023 a
meados de 2026, mostra que jogos com declaração de IA são cerca de um terço dos lançamentos recentes
mas capturam entre 10% e 27% das vendas estimadas (contra 3% a 6% em 2024); e o 1% do topo concentra
cerca de 94% da receita estimada [13]. A IA baixou o custo de produzir; não moveu o que as pessoas
querem jogar.

### Quem está construindo, e quem resiste

Do lado da oferta: produtos de geração de novela visual por prompt (Mangobox e concorrentes),
plataformas de ficção conversacional em escala — o Character.AI tinha 3,5 milhões de visitantes
diários em janeiro de 2024, com a grande maioria entre 16 e 30 anos [14] — e a linhagem de escrita
assistida (NovelAI, AI Dungeon) sobre a infraestrutura madura de ficção interativa.

Do lado da resistência e da regra: a IFComp [9], a comunidade de ficção interativa que discute a
granularidade da declaração — querendo separar capa de conteúdo, e relatando alívio ao poder filtrar
pacotes sem IA, o que "revelou o quanto assets gerados já eram prevalentes" [15] —, a SAG-AFTRA [10],
o AI Act [6][7] e o Copyright Office [8].

Do lado do público: no Brasil, a Pesquisa Game Brasil 2026, com mais de 7 mil respondentes de 16 a 55
anos, registra 45,7% preocupados com a precarização do processo criativo diante do avanço da IA — e
39,3% que comprariam assim mesmo um jogo desenvolvido com apoio significativo de IA [16]. As duas
frases convivem, e é essa convivência que importa: a objeção é declarada e não é bloqueante.

Do lado dos prêmios literários, o caso mais citado do tema — um prêmio japonês de primeira linha
concedido em 2024 a um romance com trecho declaradamente gerado — **não entra neste mapa**: nenhuma
das reportagens que o sustentam abriu nesta rodada (§12.3). A afirmação foi removida em vez de
mantida com ressalva. O que resta como evidência aberta sobre prêmio e elegibilidade é a política da
IFComp [9], que é mais recente, mais específica e verificável na fonte.

### Onde passa a linha

Maduro: engine de novela visual, linguagem de ficção interativa, ferramenta de diálogo ramificado,
editor de mapa, síntese de fala. **Emergente:** geração do artefato narrativo inteiro a partir de
intenção curta; tradução sobreposta em tempo real; narrativa que se reconfigura por sessão.
**Disruptivo:** as três raízes da seção 4 — porque cada uma altera papel, custo ou relação, e não
apenas a eficiência do que já se fazia.

## 4. As disrupções-raiz

### D1 — O artefato narrativo inteiro passa a sair de uma intenção curta

**O que rompe.** A unidade econômica da produção narrativa. Até aqui, o custo de uma obra crescia com
a sua extensão e com o número de ramos: cada cena escrita, cada arte encomendada, cada linha dublada.
A ramificação era cara justamente porque o jogador só veria uma fração dela. Com geração de obra
inteira, o custo de produzir deixa de ser função da extensão e passa a ser função da inferência — e a
ramificação, que era o luxo da ficção interativa, deixa de ter preço proibitivo. O que rompe não é a
qualidade: é a relação entre ambição narrativa e orçamento.

**Por que agora e não há cinco anos.** Em 2021, AI Dungeon mostrava texto gerado interativo, mas a arte,
a voz e a montagem eram etapas humanas separadas. O que fechou o ciclo foi a convergência de três
coisas datáveis: modelos multimodais que percorrem texto→imagem→som→vídeo num pipeline só; preço de
vídeo por segundo na casa dos centavos em 2026 [3]; e produtos que empacotam isso em assinatura de US$
9 mensais entregando algo jogável no navegador [1]. Cinco anos atrás faltavam os três.

**O que ainda falta acontecer.** Coerência em obra longa. O ConStory-Bench mede o buraco com precisão:
mesmo o melhor sistema erra, os erros se acumulam linearmente com o comprimento, e as falhas dominantes
são exatamente as que destroem uma narrativa — fato contradito, linha do tempo impossível [11]. Enquanto
isso não cair, a geração de obra inteira funciona bem em formato curto e episódico, e mal em obra longa.
Falta também algo que converta oferta em público: a evidência da Steam mostra que baratear a produção
não moveu a demanda [13].

### D2 — A obra deixa de ser um objeto fixo: reconfigura-se por leitor, por sessão e por língua

**O que rompe.** A identidade da obra como objeto compartilhado. A crítica, a conversa entre leitores,
o cânone, o catálogo, a citação acadêmica e a própria ideia de "spoiler" pressupõem que duas pessoas que
leram o mesmo título leram a mesma coisa. Duas camadas atacam esse pressuposto por lados diferentes: a
tradução sobreposta em tempo real dissolve a língua de origem como propriedade da obra [2]; a geração
por sessão dissolve o texto como invariante.

**Por que agora e não há cinco anos.** A tradução automática de tela existe há muito tempo e era ruim o
bastante para ser um paliativo; o que mudou foi o LunaTranslator poder chamar grandes modelos de
linguagem e tradução offline no mesmo laço de gancho de memória e OCR [2], com qualidade que sustenta
leitura contínua de obra longa. E, do lado da indústria, a tradução deixou de ser a etapa e passou a ser
o rascunho: no mercado de localização, o fluxo dominante já é máquina mais pós-edição humana — o que
significa que a camada automática está dentro do processo, não fora dele. (Esta última afirmação vem de
análise de mercado que não abri; trato como contexto, não como evidência — ver §12.)

**O que ainda falta acontecer.** Falta a reconfiguração por leitor sair do modo conversacional e entrar
em obra autoral distribuída. O que existe hoje em escala é ficção conversacional — Character.AI, com
milhões de visitantes diários [14] —, que é diferente: ali nunca houve uma obra fixa para perder. Falta
o caso em que uma obra publicada, com autor assinado e crítica escrita, chega ao leitor em versões que
não coincidem. Sem isso, D2 vale para tradução (onde já acontece) e é hipótese para o resto.

### D3 — A autoria deixa de ser inferida do texto e vira metadado declarado, auditável e regulado

**O que rompe.** O modo como a autoria é estabelecida. Sempre foi uma inferência: quem assina responde,
e a obra é a prova. A partir de 2024, a autoria passa a ser um campo de formulário — no itch.io, com
quatro subtipos [4]; na Steam, com série histórica mensurável [5][13] —, uma regra de elegibilidade de
prêmio [9], uma cláusula de consentimento com relatório de uso em 90 dias [10], uma marca legível por
máquina exigida por lei [6][7] e um teste jurídico sobre quais elementos expressivos o humano
determinou [8]. A obra deixa de bastar como prova de si mesma.

**Por que agora e não há cinco anos.** Porque as cinco camadas convergiram num intervalo de vinte meses:
novembro de 2024 (itch.io), janeiro de 2025 (Copyright Office), julho de 2025 (SAG-AFTRA), janeiro de
2026 (IFComp), agosto de 2026 (AI Act em aplicação). Nenhuma delas isolada seria uma ruptura; juntas,
constituem uma infraestrutura de atribuição que não existia e que agora é condição de publicação.

**O que ainda falta acontecer.** Falta interoperabilidade e falta verificação. Hoje cada balcão tem seu
campo, com definição própria, e nada disso é verificável: a declaração é autodeclaração. Falta também o
primeiro caso de sanção por declaração falsa em obra narrativa — sem ele, o campo é etiqueta, não regra.
E falta a parte mais difícil: o Copyright Office exige que o humano tenha determinado elementos
expressivos suficientes [8], mas ninguém definiu como se documenta isso durante o trabalho.

### Por que estas três e não mais

Considerei e descartei duas candidatas. "Síntese de voz para diálogo" (ChatTTS, Bark) é melhoria de
custo dentro de uma prática existente, não ruptura de papel — entra como insumo de D1. "Narrativa
adaptada ao estado emocional do jogador" não tem sinal observável em produto e não passou o critério.
As três raízes também não são independentes: D3 é em parte reação a D1, e um erro possível deste mapa é
tratá-las como paralelas — ver §7.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O artefato narrativo inteiro passa a sair de uma intenção curta
    efeitos:
      - id: e1
        ordem: 1
        efeito: O custo marginal de produzir uma obra narrativa completa cai para a ordem de centavos por minuto de mídia
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A oferta de obras narrativas cresce mais rápido que a atenção disponível e a descoberta vira o gargalo do mercado
            sinal: forte
            prazo: 2028
            confianca: alta
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A curadoria com procedência declarada vira serviço pago e critério de status cultural
                sinal: medio
                prazo: 2031
                confianca: media
              - id: e1.1.2
                ordem: 3
                efeito: Plataformas assumem função editorial de fato e passam a responder publicamente por ela
                sinal: medio
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O trabalho de escrita de jogo migra de produzir linhas para especificar restricoes e revisar saidas
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: A formacao em roteiro e narrativa se reorganiza em torno de direcao, critica e teste, e nao de execucao
                sinal: medio
                prazo: 2032
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O prototipo jogavel substitui o documento de design como primeira forma de uma ideia narrativa
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Estudios pequenos testam dezenas de premissas por semana e decidem por evidencia de jogo em vez de pitch
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: O financiamento de jogo narrativo passa a exigir prototipo jogavel no lugar de documento de design
                sinal: medio
                prazo: 2032
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: A vantagem competitiva se desloca da capacidade de produzir para a capacidade de escolher e descartar
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Julgamento editorial vira competencia contratada e ensinada explicitamente, com vocabulario proprio
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: A obra deixa de ser um objeto fixo e se reconfigura por leitor, por sessao e por lingua
    efeitos:
      - id: e3
        ordem: 1
        efeito: A localizacao deixa de ser etapa de producao e vira camada de execucao aplicada durante o uso
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: O mercado de localizacao se parte entre volume automatizado e um topo pequeno de adaptacao cultural autoral
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A lingua de origem perde funcao pratica em catalogo, contrato e licenciamento territorial
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Obras de mercados linguisticos pequenos circulam globalmente sem intermediario editorial que as autorize
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: O repertorio comum de referencias deixa de ser definido pelo que foi traduzido comercialmente
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Duas pessoas passam a poder ter jogado a mesma obra em versoes que nao coincidem
        sinal: fraco
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: A critica e a conversa publica migram do texto para o sistema que o gera
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: O canone passa a se formar por sistemas e por sessoes notaveis registradas, e nao so por obras
                sinal: fraco
                prazo: 2034
                confianca: baixa
  - disrupcao: A autoria deixa de ser inferida do texto e vira metadado declarado, auditavel e regulado
    efeitos:
      - id: e5
        ordem: 1
        efeito: Toda loja, premio e plataforma passa a ter campo de declaracao de IA com regra propria e incompativel com a do vizinho
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: O custo de conformidade recai sobre o autor individual, que declara o mesmo fato de varias formas diferentes
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Surge uma camada de procedencia padronizada de obra como infraestrutura compartilhada e nao como produto
                sinal: medio
                prazo: 2032
                confianca: baixa
              - id: e5.1.2
                ordem: 3
                efeito: Declarar ausencia de IA vira posicionamento de mercado com preco, e nao apenas informacao ao comprador
                sinal: medio
                prazo: 2031
                confianca: media
          - id: e5.2
            ordem: 2
            efeito: Comunidades e premios usam a declaracao para excluir obras, e nao apenas para informar o publico
            sinal: forte
            prazo: 2027
            confianca: alta
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Forma-se um circuito paralelo de obras certificadas humanas com publico, premio e economia proprios
                sinal: medio
                prazo: 2032
                confianca: media
      - id: e6
        ordem: 1
        efeito: A protecao juridica do resultado passa a depender do que o humano decidiu, e isso precisa ser documentado durante o trabalho
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O registro de processo com versoes, prompts e escolhas vira parte do ativo de um estudio narrativo
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Ferramentas de escrita passam a ser projetadas para produzir prova de autoria, e nao apenas texto
                sinal: medio
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Contratos de escrita e de voz especificam replica, consentimento e uso derivado como clausula padrao
            sinal: forte
            prazo: 2028
            confianca: alta
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: A negociacao coletiva se desloca de remuneracao por obra para governanca de reuso
                sinal: medio
                prazo: 2032
                confianca: media
```

### O que o bloco não consegue dizer

**A cadeia de e4 é curta de propósito.** Ela tem um único efeito de segunda ordem e um de terceira,
porque a evidência para "a obra se reconfigura por leitor" é a mais fraca do mapa. O que existe em
escala é ficção conversacional [14], onde nunca houve obra fixa; o que existe como produto é geração
por sessão em formato curto [1]. Ramificar mais essa cadeia seria decoração. Registro a interrupção
aqui e em §7.

**Os prazos não são datas, são ordens de grandeza.** Os efeitos com prazo 2027-2028 e confiança alta
descrevem coisas cujo mecanismo já está em operação — o campo de declaração existe, a lei está em
aplicação, o contrato foi ratificado. Os de 2031-2034 são hipóteses prospectivas; tratá-los como
previsão é erro de leitura.

**As três raízes se retroalimentam, e o YAML não mostra isso.** e1.1 (a descoberta vira gargalo) é o
que dá função econômica a e5.1.2 (declarar ausência de IA vira posicionamento): sem excesso de oferta,
a etiqueta não vale dinheiro. Do mesmo modo, e6.1 (registro de processo vira ativo) só faz sentido
porque e1.2 (escrever vira especificar e revisar) produz um rastro que antes não existia. A roda é
uma árvore; o fenômeno é um grafo.

**O eixo do público não aparece.** A resistência declarada — 45,7% de preocupação com precarização
contra 39,3% de disposição de compra assim mesmo [16] — não é um efeito: é uma condição de contorno
que modula quase todos eles, e que a estrutura de três ordens não sabe representar.

## 6. Sinais fracos e wildcards

### Sinais fracos

**A tradução sobreposta como consumo normal de obra estrangeira.** O LunaTranslator é um projeto de
uma pessoa com 13,2 mil estrelas [2] — irrelevante em qualquer métrica de indústria, e enorme no que
implica: uma geração inteira pode ter lido obra japonesa sem jamais ter lido uma tradução publicada.
Se isso virar hábito, a localização deixa de ser um mercado e vira uma preferência de configuração.

**O ganho medido da coautoria é agência, não qualidade.** No estudo dos grafos de conhecimento, a
diferença de qualidade não foi significativa, mas 92,9% preferiram poder editar a estrutura e 78,5%
relataram sensação de controle alta [12]. É um sinal fraco com consequência grande: sugere que o
produto que vence não é o que escreve melhor, é o que deixa o humano mandar melhor — e isso muda o
que se deve projetar.

**A granularidade da declaração como disputa concreta.** No fórum da ficção interativa, autores pedem
para separar a capa do conteúdo, porque um jogo pode ter capa gerada e nenhuma geração em jogo [15].
É uma discussão de formulário hoje; é a definição operacional de "obra com IA" amanhã — e quem
escrever essa taxonomia decide quem é excluído de onde.

**A restrição etária como precedente.** O Character.AI barrou menores de 18 de conversar com chatbots
a partir de 25 de novembro de 2025 [14]. Vale como sinal porque mostra que a plataforma de narrativa
gerativa em escala já foi tratada como risco a regular pelo lado do público, não do autor.

**A obrigação de rastro documental.** A SAG-AFTRA exige relatório de uso de réplica em até 90 dias do
lançamento [10]. Hoje é cláusula de voz; é o molde de qualquer exigência futura de prestação de contas
sobre o que foi gerado numa obra.

### Wildcards

**Um caso de plágio estrutural entre obras geradas.** Duas obras geradas por sistemas diferentes, a
partir de prompts diferentes, saem com enredo, elenco e reviravolta substancialmente iguais — porque o
espaço de saídas prováveis é estreito. Baixa probabilidade, alto impacto: se acontecer com duas obras
comerciais, dissolve na prática a noção de originalidade como critério de proteção e força tribunais a
decidir sobre um caso em que nenhum dos dois lados copiou o outro. **Não é previsão** — é um cenário
cuja plausibilidade vem de uma propriedade conhecida dos modelos, não de um caso observado.

**Uma obra coescrita declaradamente ganha um prêmio literário de primeira linha — e o prêmio seguinte
muda a regra para impedir a próxima.** Coautoria assumida como método, não como detalhe, premiada — e
a resposta institucional imediata. O que torna isso plausível não é um precedente literário (o caso
que eu citaria não foi verificado, §12.3), e sim o mecanismo já observado em terreno vizinho: a IFComp
escreveu, em janeiro de 2026, exatamente a regra de elegibilidade que impede a próxima [9]. O wildcard
é essa sequência acontecendo onde o público é maior e a instituição, mais lenta. Impacto alto porque
força cada instituição literária a escrever a regra que hoje evita escrever. **Não é previsão.**

**Marcação legível por máquina obrigatória na Europa quebra a ficção interativa amadora.** Se a
aplicação do Artigo 50 [6][7] for lida por lojas como exigência técnica repassada a cada criador — e
não como obrigação do provedor do modelo —, o custo de conformidade recai sobre quem publica um jogo de
Twine de graça. Efeito: o amador some da vitrine europeia, e sobra quem tem jurídico. Baixa
probabilidade — as diretrizes apontam no sentido oposto, com exceções — mas impacto direto sobre a
comunidade que este tema descreve.

## 7. Contra o próprio mapa

**O efeito que é só extrapolação linear do presente: e1.1.** "A oferta cresce mais rápido que a
atenção e a descoberta vira o gargalo" é a curva da Steam projetada para frente [5][13]. Mas a Steam
não é o mundo: é uma vitrine com regra de declaração própria, viés de gênero e um algoritmo de
descoberta que já concentrava receita no 1% do topo **antes** da IA generativa. Ou seja, parte do que
atribuo à disrupção pode ser a distribuição de cauda longa de sempre, que é anterior e independente. O
efeito continua no mapa com confiança alta porque o mecanismo é sólido; a atribuição causal é que é
mais fraca do que o texto sugere.

**O efeito que assume velocidade de adoção sem caso comparável: e1.2 e e2.1.** "O trabalho de escrita
de jogo migra para especificar e revisar" até 2029, e "estúdios testam dezenas de premissas por semana"
até 2029 — isso pressupõe reorganização de ofício em três anos. A comparação honesta é com motion
capture ou middleware de engine: dez a quinze anos entre disponibilidade e prática dominante, com
sindicato, contrato e formação no caminho. Rebaixei e1.2 de alta para média por isso, e e2.1 é média
por generosidade.

**A disrupção que pode simplesmente não se concretizar: D2 na sua parte não-linguística.** A camada de
tradução em tempo real está documentada e funcionando [2]; a reconfiguração da obra por leitor não
está. É inteiramente possível que, em 2031, obra continue significando texto fixo, e que a geração por
sessão fique confinada a um gênero próprio — ficção conversacional — que ninguém confunde com romance
ou com novela visual autoral, do mesmo modo que ninguém confundiu RPG de mesa com literatura. Se D2
cair pela metade, e4, e4.1 e e4.1.1 caem inteiros; e3 e seus ramos sobrevivem, porque dependem só da
tradução. O mapa perde três efeitos e não perde a espinha.

**A disrupção que pode se concretizar por motivo errado: D3.** Escrevi D3 como ruptura na natureza da
autoria. Leitura alternativa, mais econômica: é só compliance — mais um campo de formulário, como
classificação etária ou aviso de conteúdo, que ninguém lê e que não muda prática nenhuma. A evidência
de que é mais que isso é a IFComp usando a declaração para **excluir** [9], não para informar; e o
Copyright Office condicionando proteção ao que o humano determinou [8]. Se nenhum outro caso de
exclusão ou de negativa de registro aparecer até 2028, D3 deve ser rebaixada de disrupção para
melhoria administrativa, e e5.2.1 e e6.1.1 perdem base.

**O número que pode estar errado.** A faixa "10% a 27% das vendas estimadas" [13] é estimativa sobre
estimativa: vendas da Steam não são públicas, e o dado depende de proxy de avaliações. Uso a faixa, e
não um ponto, justamente por isso — mas a conclusão de que a oferta cresce mais que a receita não deve
ser tratada como medida, e sim como direção. O mesmo vale para os 26,5% do Next Fest [5], que valem
para demos de um evento, não para o catálogo.

**A autoria que pode estar trocada.** Os números de disclosure da Steam circulam em várias
reportagens atribuídos a fontes diferentes; a única cadeia que consegui abrir aponta para o
levantamento da GameDiscoverCo (Next Fest) [5] e para o censo de Sulka Haro (53.597 lançamentos) [13].
Onde vi os percentuais por ano — 10,9% em 2024, 19,9% em 2025, 30,8% em 2026 — a página não abriu, e
por isso esses três números **não** entram no corpo do mapa. Estão registrados em §12 como não
verificados.

**O viés que entrou aqui.** Dois, e em direções opostas. O primeiro é do recorte da disciplina: o tema
foi entregue já formulado como disrupção-raiz ("o custo de contar cai perto de zero — e a pergunta de
quem é o autor fica sem chão"), com uma lista de ferramentas anexada. Procurar evidência para uma
disrupção que já me foi nomeada é o desenho de pesquisa mais enviesado que existe, e tentei compensar
buscando deliberadamente medida de falha (ConStory-Bench) e medida de não-conversão (censo da Steam) —
que são as duas fontes que mais restringem o mapa. O segundo é meu, de agente: fontes de ruptura
institucional (lei, prêmio, sindicato) são fáceis de encontrar, datáveis e citáveis; fontes de
não-mudança são raras porque ninguém publica que nada aconteceu. O mapa provavelmente superestima D3
por esse motivo. O contrapeso é que D3 é também a raiz mais fácil de falsificar: basta que, até 2028,
nenhuma outra instituição exclua alguém por declaração de IA.

## 8. O que a máquina errou

**Erro 1 — Fonte apresentada como aberta sem ter aberto.** Quatro páginas que eu pretendia citar
falharam e, no primeiro rascunho, os números delas já estavam no texto como se fossem verificados: a
reportagem da CNN sobre Rie Kudan devolveu HTTP 451 (indisponível por motivos legais, bloqueio
geográfico), o PC Gamer devolveu conteúdo truncado sem os percentuais, a página da própria SAG-AFTRA
devolveu 403, e o press corner da Comissão Europeia devolveu só o cabeçalho. Percebi porque a skill
exige registrar link, afirmação e confiabilidade fonte a fonte — e ao montar a lista faltava o que
citar. Consequência no documento: os percentuais anuais de disclosure da Steam saíram do corpo; o caso do
prêmio literário japonês saiu inteiro do mapa; a SAG-AFTRA foi recuperada por uma análise jurídica
secundária que abriu [10], e o AI Act pela página oficial alternativa [7]. **Registro o erro seguinte,
que é o mais instrutivo:** na primeira correção eu mantive o caso do prêmio no corpo "rebaixado a
sinal, com a limitação declarada". Isso é um terceiro estado — nem verificado, nem removido — que
produz aparência de rigor sem o custo dele, e passa por qualquer leitura rápida. Ou a fonte abre, ou a
afirmação sai. Saiu.

**Erro 2 — Transformar existência de ferramenta em evidência de adoção.** Na primeira passada, escrevi
que "produtos de geração de novela visual já operam em escala". Nenhuma das fontes sustenta escala: a
página do Mangobox não publica número de usuários [1], e as listas de "melhores geradores de novela
visual de 2026" que apareceram na busca são páginas promocionais de fornecedores, sem dado de uso. A
afirmação correta é mais fraca e é a que ficou: existe, é comercial, custa US$ 9 por mês, e não se sabe
quantos usam.

**Erro 3 — Número redondo demais e sem denominador.** A busca devolveu "um em cada três jogos novos da
Steam declara IA" com três percentuais anuais limpos. Desconfiei da limpeza: as fontes citavam
populações diferentes (demos de um evento, lançamentos do ano, catálogo inteiro) sob o mesmo rótulo. A
página do Next Fest que abriu confirma exatamente essa armadilha e a nomeia: "a maior parte da
cobertura cita o número que for maior, sem dizer de que população ele fala" — 26,5% no conjunto de 4.382
demos, ~20% nas ~8.682 inscrições do evento inteiro [5]. Foi o achado mais útil da rodada, e serviu
contra o próprio mapa.

**Erro 4 — Inventar uma quarta disrupção por simetria.** Cheguei a redigir "síntese de voz gerativa"
como raiz, porque o tema a menciona (ChatTTS, Bark) e porque três raízes pareceram poucas. Não passa no
critério da própria skill: não consigo dizer o que ela rompe além de baratear uma etapa que já existia.
Foi removida e virou insumo de D1. O sintoma a reconhecer é o impulso de completar um padrão em vez de
responder a uma evidência.

**Erro 5 — Ramificar a roda por estética.** A cadeia e4 tinha, no rascunho, dois efeitos de segunda
ordem e quatro de terceira, para ficar visualmente equilibrada com as outras. Nenhum deles tinha
evidência distinta — eram paráfrases uns dos outros. Ficou um de cada, com a interrupção declarada em
§5 e §7.

## 9. Três cenários para 2031

**Provável.** Em 2031, gerar uma novela visual jogável a partir de uma frase é tão banal quanto gerar
uma imagem: está dentro das engines, dentro das lojas, dentro das ferramentas de escrita, e ninguém
mais chama isso de IA — chama de fazer um jogo. A promessa que não se cumpriu é a da obra longa: os
sistemas continuam perdendo o fio, e o formato que prosperou foi o curto, episódico e conversacional,
enquanto o romance e a novela visual de vinte horas seguem sendo trabalho humano com assistência
pesada. O catálogo inchou e a receita não acompanhou; a descoberta virou o produto mais valioso da
cadeia, e quem cura ganha mais que quem produz. Toda vitrine tem seu campo de declaração, nenhum
conversa com o outro, e a autodeclaração continua sem verificação — o autor independente perde um dia
por lançamento preenchendo formulário. A tradução sobreposta é hábito consolidado em nicho e ainda
constrangedora do ponto de vista de direitos, com editoras litigando pouco porque não sabem contra
quem. A ficção interativa amadora continua existindo, menor e mais militante, com a IFComp mantendo a
regra de conteúdo humano e virando, sem ter pedido, um selo.

**Desejável.** Em 2031, a coautoria é declarada com granularidade útil — o que foi gerado, em que
etapa, sob que direção — e isso não é vergonha nem selo de qualidade: é ficha técnica, lida como se lê
crédito de fotografia. Existe um padrão de procedência que funciona nas várias vitrines, mantido como
infraestrutura compartilhada e não como produto de uma empresa, e o autor declara uma vez. As
ferramentas foram desenhadas em torno do achado que a evidência de fato sustentou — o ganho é agência,
não qualidade [12] —, então o que se otimiza é o controle do humano sobre a estrutura, não a
autonomia do gerador. O trabalho narrativo de nível alto vale mais, não menos, porque o que escasseou
foi julgamento e o que sobrou foi produção. A tradução em tempo real virou canal legítimo, com
remuneração acordada, e obras de mercados linguísticos pequenos chegam longe sem depender de um
editor estrangeiro dizer sim. **Para chegar aqui, três coisas precisariam ter sido feitas entre 2026 e
2029:** um padrão de procedência interoperável adotado por lojas e prêmios antes de cada um consolidar
o seu; jurisprudência que defina, com exemplo concreto, o que conta como determinar elementos
expressivos suficientes [8]; e um acordo de remuneração para tradução automática em tempo real
espelhando o que a SAG-AFTRA fez com réplica de voz [10].

**Indesejável.** Em 2031, a declaração de IA virou o eixo de uma guerra cultural e parou de informar
qualquer coisa. Metade do catálogo declara por medo e a outra metade não declara por cálculo, sem
verificação nem sanção; "sem IA" virou etiqueta de preço premium vendida por quem usa IA na produção e
não na entrega. A descoberta colapsou sobre si mesma: as vitrines desistiram da curadoria e passaram a
ranquear por engajamento medido em segundos, e o formato narrativo que sobrou é o que prende atenção
em vinte segundos. Escritores de jogo foram recontratados como revisores por peça, a preço de revisão.
A comunidade de ficção interativa se fechou em circuito próprio, saudável por dentro e invisível por
fora. E a obra longa nunca chegou: a promessa foi absorvida por um gênero curto e infinito que ninguém
discute com ninguém, porque cada um jogou uma coisa diferente. **O sinal precoce disso é específico e
observável antes de 2028:** o dia em que uma loja grande tornar a declaração de IA um fator de
ranqueamento — para cima ou para baixo — em vez de um filtro que o usuário escolhe. No instante em que
declarar passa a mexer em visibilidade, declarar deixa de ser informação e vira estratégia, e o campo
morre como fonte de verdade.

## 10. O experimento

**O que é.** Um duplo cego de procedência. Três versões da mesma micro-obra narrativa — uma novela
visual curta, de dez a quinze minutos, com uma decisão que ramifica: (A) escrita e montada inteiramente
por uma pessoa da turma; (B) gerada a partir de uma frase, em ferramenta de geração de novela visual,
sem revisão; (C) coescrita — a pessoa especifica restrições, o sistema gera, a pessoa corta, reescreve
e redirige, com o rastro de todas as decisões registrado. As três entram em Ren'Py com a mesma
interface, a mesma fonte e a mesma qualidade de apresentação, para que a procedência não vaze pela
forma. Cada participante joga as três em ordem aleatória, sem saber qual é qual.

**Que pergunta sobre o futuro ele ajuda a responder.** Se a autoria virou metadado declarado (D3), a
pergunta que decide o valor desse metadado é: a diferença é perceptível sem ele? Concretamente:
(i) o jogador identifica a versão gerada acima do acaso? (ii) qual versão ele diz que prefere **antes**
de saber a procedência, e qual diz depois? (iii) a versão coescrita se parece mais com a humana ou com
a gerada — ou seja, a revisão humana recupera o que a geração perde? A terceira é a mais importante
para quem projeta: se C ≈ A, o gargalo é revisão e a ferramenta certa é de controle; se C ≈ B, a
revisão é cosmética e o problema está na geração.

**Que tecnologia emergente ele usa, e por que não dá com tecnologia madura.** Usa geração de obra
narrativa completa a partir de intenção curta [1] — que é exatamente o emergente deste mapa. Com
tecnologia madura, o experimento não existe: a condição B é irreproduzível sem geração (era uma
encomenda a um humano, com outro custo e outro prazo), e a condição C não teria rastro de decisão para
registrar, porque numa engine tradicional a escrita e a revisão não são atos separáveis. A montagem
final, essa sim, usa maduro de propósito — Ren'Py — para neutralizar a forma como pista.

**O que a turma faz quando testar em sala.** Cada pessoa joga as três versões, em ordem sorteada, e
responde em ficha fechada: qual gostou mais; qual acha que foi gerada e com que confiança; em que
momento exato desconfiou — a frase, a imagem, a escolha. Só então se revela a procedência, e aí abre a
discussão sobre o que mudou depois da revelação. Registro obrigatório: o texto das justificativas. É o
dado mais valioso, porque nomeia os marcadores concretos de "cheiro de IA" que a turma usa — e é
justamente isso que a taxonomia de declaração das lojas [4] ainda não sabe descrever.

**O que seria um resultado que me faria mudar de ideia.** Se a turma identificar a versão gerada com
acurácia alta e consistente, e se a preferência declarada antes da revelação já apontar para a versão
humana, então D1 é muito mais fraca do que este mapa supõe: o custo caiu, mas o produto não substitui
nada, e os efeitos de mercado (e1.1, e2.2) perdem base. E se acontecer o inverso — ninguém distingue, e
a preferência só muda **depois** da revelação —, então D3 ganha peso e muda de natureza: a declaração
não informa sobre a obra, informa sobre o que se deve sentir por ela, e é isso que vale regular e
projetar. Os dois resultados são publicáveis; o que não é publicável é o resultado de que a turma
distinguiu, mas por causa da apresentação — daí o cuidado de padronizar a forma.

## 11. Fontes

Somente páginas efetivamente abertas nesta rodada. As que falharam estão em §12.

1. **Mangobox** — `https://mangobox.ai/` — sustenta que a geração de novela visual jogável a partir de
   uma frase é produto comercial: pipeline de prompt a cena jogável, até cinco personagens, plano pago
   de US$ 9/mês. *Confiabilidade:* baixa como evidência independente — é página de vendedor. Vale
   apenas para existência, funcionalidade declarada e preço; não vale para qualidade nem para adoção.
2. **LunaTranslator (repositório)** — `https://github.com/HIllya51/LunaTranslator` — sustenta a
   tradução sobreposta em tempo real sobre jogo em execução (gancho de memória, OCR, motores incluindo
   LLM e tradução offline) e sua tração: 13,2 mil estrelas, 1,1 mil forks, ~4.963 commits, GPLv3.
   *Confiabilidade:* alta para existência e atividade (dados da plataforma, verificáveis); estrelas são
   proxy fraco de uso real.
3. **FluxNote — comparação de preços de modelos de vídeo (13/05/2026)** —
   `https://fluxnote.io/guides/ai-video-model-pricing-comparison-2026` — sustenta a faixa de preço por
   segundo de vídeo gerado em 2026 (Seedance US$ 0,036; Kling US$ 0,07; Sora 2 US$ 0,10; Veo 3.1
   completo US$ 0,40). *Confiabilidade:* média — agregador secundário, mas declara a data da última
   verificação e os preços são publicados pelos próprios fornecedores.
4. **itch.io — "Generative AI disclosure tagging" (20/11/2024)** —
   `https://itch.io/t/4309690/generative-ai-disclosure-tagging` — sustenta a existência, a data e o
   desenho do campo de declaração (quatro subtipos), a obrigatoriedade para assets, a voluntariedade
   para jogos e a sanção de desindexação. *Confiabilidade:* alta — anúncio oficial da plataforma, é
   fonte primária sobre a própria regra.
5. **Llama & Griffin — "The AI Disclosure Report · Steam Next Fest · June 2026"** —
   `https://www.llamagriffin.com/Data/SteamNextFestJune2026/part-2.html` — sustenta 26,5% de demos com
   declaração de IA (1.163 de 4.382) em junho de 2026 contra 21,2% em fevereiro de 2026, e a advertência
   metodológica sobre populações diferentes citadas sob o mesmo rótulo. *Confiabilidade:* média-alta —
   análise de terceiro, mas declara fontes (GameDiscoverCo, SteamDB, declarações de desenvolvedores) e
   explicita o denominador, o que é raro nesta literatura.
6. **Comissão Europeia — Diretrizes sobre obrigações de transparência para conteúdo gerado por IA** —
   `https://digital-strategy.ec.europa.eu/en/policies/guidelines-transparency-ai-generated-content` —
   sustenta a obrigação de marcação legível por máquina e a data de aplicação do Artigo 50 (2/08/2026).
   *Confiabilidade:* alta — fonte institucional primária. A página não detalha as exceções para obra
   artística/ficcional; isso está no documento completo, que não abri.
7. **Comissão Europeia — "Commission starts enforcing AI Act rules and new transparency requirements on
   2 August" (31/07/2026)** —
   `https://digital-strategy.ec.europa.eu/en/news/commission-starts-enforcing-ai-act-rules-and-new-transparency-requirements-2-august`
   — sustenta o que entra em aplicação: marcas legíveis por máquina, rotulagem de deepfakes, aviso de
   que se fala com IA. *Confiabilidade:* alta — comunicado oficial, datado.
8. **U.S. Copyright Office — NewsNet 1060 (29/01/2025), sobre a Parte 2 do relatório de IA** —
   `https://www.copyright.gov/newsnet/2025/1060.html` — sustenta a doutrina de autoria: proteção só onde
   o humano determinou elementos expressivos suficientes; a mera provisão de prompts não basta; análise
   caso a caso; uso assistivo não prejudica a proteção. *Confiabilidade:* alta — órgão emissor da
   própria norma interpretativa.
9. **IFComp — "IFComp 2026: Generative AI Policy Update" (31/01/2026)** —
   `https://blog.ifcomp.org/post/807273791356010496/ifcomp-2026-generative-ai-policy-update` — sustenta
   a regra de elegibilidade: todo conteúdo voltado ao jogador, inclusive capa, tem de ser inteiramente
   humano; proibida a dependência de serviço de IA externo durante o jogo; permitido o uso em
   desenvolvimento (edição, depuração, acessibilidade, pesquisa, tradução limitada, código).
   *Confiabilidade:* alta — anúncio oficial da competição sobre a própria regra.
10. **Frankfurt Kurnit Klein & Selz — análise do 2025 SAG-AFTRA Interactive Media Agreement** —
    `https://technologylaw.fkks.com/post/102mewu/inside-the-new-sag-aftra-interactive-media-agreement-new-standards-for-ai-and-di`
    — sustenta os termos de réplica digital: consentimento escrito claro e conspícuo, separado ou em
    aditivo; descrição razoavelmente específica do uso, inclusive geração em tempo real; proibição de
    consentimento amplo na contratação; relatório de uso em 90 dias; definição de "Independently Created
    Digital Replica". *Confiabilidade:* média-alta — escritório de advocacia especializado, análise
    secundária de documento primário; usei porque a página da própria SAG-AFTRA devolveu 403.
11. **ConStory-Bench — "Lost in Stories: Consistency Bugs in Long Story Generation by LLMs"** —
    `https://arxiv.org/html/2603.05890v1` — sustenta os limites de coerência em obra longa: 21 sistemas,
    2.000 prompts, alvo de 8–10 mil palavras, taxonomia de 5 categorias e 19 subtipos; melhor densidade
    de erro 0,113 por 10 mil palavras (GPT-5-Reasoning), 0,305 (Gemini-2.5-Pro), 0,520
    (Claude-Sonnet-4.5); acúmulo aproximadamente linear com o comprimento. *Confiabilidade:* média-alta
    — preprint com método e taxonomia explícitos; como todo benchmark, mede o que escolheu medir, e o
    ranking envelhece rápido.
12. **"Guiding Generative Storytelling with Knowledge Graphs"** —
    `https://arxiv.org/html/2505.24803v2` — sustenta que o andaime estrutural não melhorou a qualidade de
    modo significativo (3,51 vs 3,49; p>0,05), ajudou em narrativa de ação (p=0,039) e prejudicou a
    introspectiva (p=0,07), enquanto 92,9% preferiram poder editar o grafo e 78,5% relataram controle
    alto. *Confiabilidade:* média — preprint, N=15, amostra pequena; os subgrupos (N=8 e N=7) são
    pequenos demais para conclusão forte, e uso o resultado principalmente pelo achado de agência.
13. **Cinevva — estudo sobre declaração de IA na Steam (20/07/2026)** —
    `https://app.cinevva.com/news/2026-07-20-steam-ai-disclosure-study` — sustenta que jogos com
    declaração de IA são cerca de um terço dos lançamentos recentes mas capturam 10%–27% das vendas
    estimadas (contra 3%–6% em 2024), sobre censo de 53.597 lançamentos (mid-2023 a mid-2026, Sulka
    Haro), com o topo de 1% concentrando ~94% da receita estimada. *Confiabilidade:* média — análise
    jornalística de um censo de terceiro; receita da Steam não é pública, então tudo ali é estimativa
    por proxy. Uso a faixa, nunca o ponto.
14. **Wikipedia — Character.ai** — `https://en.wikipedia.org/wiki/Character.ai` — sustenta escala e
    demografia da ficção conversacional (3,5 milhões de visitantes diários em janeiro de 2024, maioria
    de 16 a 30 anos) e a restrição a menores de 18 a partir de 25/11/2025. *Confiabilidade:* média —
    fonte terciária; usei por ser a única que abriu com números datados, e os trato como ordem de
    grandeza, não como medida.
15. **intfiction.org — "Gen AI disclosure on itch.io"** —
    `https://intfiction.org/t/gen-ai-disclosure-on-itch-io/72448` — sustenta a disputa comunitária sobre
    granularidade da declaração (separar capa de conteúdo, marcação em lote) e o relato de prevalência
    percebida de assets gerados. *Confiabilidade:* média para o que é — é fórum, logo é opinião; vale
    como evidência direta de qual é a discussão da comunidade, não de fato externo.
16. **Omelete — Pesquisa Game Brasil 2026** —
    `https://www.omelete.com.br/games/pesquisa-game-brasil-2026-ia-jogos` — sustenta o recorte
    brasileiro: mais de 7 mil respondentes de 16 a 55 anos; 45,7% preocupados com a precarização do
    processo criativo diante da IA; 39,3% comprariam mesmo assim um jogo desenvolvido com apoio
    significativo de IA. *Confiabilidade:* média — cobertura jornalística de pesquisa de mercado; não
    abri o relatório original nem a metodologia amostral, então os percentuais valem como indicação de
    opinião declarada, não como medida populacional.
17. **"Holding the Line: A Study of Writers' Attitudes on Co-creativity with AI"** —
    `https://arxiv.org/abs/2404.13165` — sustenta que escritores aceitam assistência de modo desigual
    conforme a etapa e o modo de trabalho, e que parte deles considera essencial traçar fronteiras
    firmes com o sistema; estudo qualitativo com 37 escritores, de amadores a profissionais, abril de
    2024. *Confiabilidade:* média — qualitativo, amostra pequena e autosseleção provável; não suporta
    generalização quantitativa, e uso apenas para sustentar que a aceitação é condicionada, não uniforme.

## 12. Anexo — o levantamento bruto

### 12.1 A entrevista

A skill exige entrevista com oito campos confirmados antes de pesquisar. Esta rodada foi executada em
modo não interativo: **não havia usuário para responder**. Os valores abaixo vieram pré-fixados no
briefing da rodada e foram tratados como confirmados. Isto é um desvio do procedimento da skill (que
manda esperar resposta e pedir confirmação explícita) e está declarado aqui como tal.

| Campo | Valor | Origem |
|---|---|---|
| tema | Narrativa gerativa e coautoria (tema 8 de 19; família "Simulação e mundos") | briefing |
| recorte | A história como coisa gerada e o que isso faz com autoria; fora: personagem que age no mundo (tema 7), vídeo/imagem como mídia (tema 12), design procedural (tema 14) | briefing + descrição do tema |
| horizonte | 2031 | briefing |
| público | Quem projeta mídia e interação | briefing |
| região | global, com nota sobre o Brasil | briefing |
| objetivo | Mapa de futuro para a disciplina CIN0055, com experimento derivável para o movimento 3 | briefing |
| exclusões | O que já é comum em produto de massa (régua da disciplina); nenhuma outra | briefing |
| viés desejado | neutro | briefing |

Parâmetros adicionais declarados no briefing: disrupção suspeita — nenhuma, descobrir; ideias óbvias a
excluir — as que serviriam para qualquer tema; profundidade — três ordens; modo — a partir de uma
inovação/tema, não de um setor; o que faria mudar de ideia — evidência de que a adoção já passou da
maioria inicial (Rogers) ou de que a tecnologia só melhora o que existe sem romper nada.

**Sobre esse último critério, o resultado é misto e merece registro.** (a) *Passou a maioria inicial?*
Não, e a melhor evidência disponível é lateral: ~30% de declaração entre lançamentos recentes da Steam
[13] e 26,5% entre demos do Next Fest [5] colocam a **declaração** perto do limiar da maioria inicial
num nicho — mas declaração de uso de IA em alguma etapa não é adoção de geração de obra narrativa
inteira, que é o objeto deste mapa. (b) *Só melhora o que existe?* Parcialmente sim, e é o achado mais
desconfortável: para obra longa, o que se mede é falha [11], e para qualidade, o andaime estrutural não
entregou ganho significativo [12]. Por isso a confiança global do mapa é **média**, e não alta, e por
isso D1 é apresentada como ruptura de **custo e de unidade de trabalho** — que está demonstrada — e não
como ruptura de qualidade, que não está.

### 12.2 Consultas feitas

Buscas (WebSearch): "AI generated visual novel game tool 2026 prompt to playable story"; "generative
interactive narrative arXiv 2026 story generation co-writing evaluation"; "Steam AI content disclosure
policy percentage of games 2026 statistics"; "literary prize AI co-authored novel award Japan Akutagawa
Kudan Rie Kudan generative AI"; "US Copyright Office report copyright human authorship generative AI
part 2 2025 conclusions"; "game localization industry AI machine translation 2026 revenue impact
translators"; "EU AI Act Article 50 transparency obligations deepfake AI-generated content labelling
August 2026"; "Brasil PL 2338 regulamentação inteligência artificial 2026 status Câmara direitos
autorais conteúdo gerado"; "SAG-AFTRA interactive media agreement AI voice performers 2025 terms
digital replica"; "itch.io AI generated content tag policy disclosure indie games 2026"; "LLM long story
coherence limitation evaluation 2026 benchmark narrative consistency failure"; "Abragames pesquisa
indústria brasileira de jogos 2026 uso de inteligência artificial estúdios"; "IFComp 2026 rules
artificial intelligence generated text disclosure interactive fiction competition"; "'AI Dungeon' OR
'NovelAI' OR 'Character.AI' 2026 users scale interactive fiction generative storytelling numbers";
"script to video generative model 2026 Veo Sora animation studio production cost narrative short film".

Páginas abertas com sucesso (WebFetch): as 17 da §11.

### 12.3 Fontes descartadas, e por quê

| Fonte | Motivo |
|---|---|
| `https://www.cnn.com/2024/01/19/style/rie-kudan-akutagawa-prize-chatgpt/index.html` | HTTP 451 (indisponível por motivos legais). Consequência: o caso do prêmio literário japonês foi **removido** do corpo do mapa (§3 e §6), não rebaixado. |
| `https://www.pcgamer.com/gaming-industry/steam-week-in-review-take-cover-because-it-looks-like-more-than-half-of-steam-games-will-have-an-ai-disclosure-by-2027-2028/` | Conteúdo truncado; a página não devolveu os percentuais. Consequência: os números 10,9% (2024), 19,9% (2025) e 30,8% (2026) **não** entraram no mapa. |
| `https://www.sagaftra.org/sag-aftra-members-approve-2025-video-game-agreement` | HTTP 403. Substituída por análise jurídica secundária [10]. Os percentuais de reajuste (15,17% + 3% ao ano) que apareceram na busca **não** foram usados, por não terem sido verificados em página aberta. |
| `https://ec.europa.eu/commission/presscorner/detail/en/ip_26_1714` | Devolveu apenas o cabeçalho. Substituída pela página equivalente do Digital Strategy [7]. |
| Páginas comerciais de geradores de novela visual (llamagen.ai, seeles.ai, summerengine.com, chatforce.com, jenova.ai, combos.converge.ai) | Material promocional de fornecedor, sem dado verificável de uso. Não abertas e não citadas. Registro que existem porque a densidade delas **é** um dado sobre o mercado: em setembro de 2026, "gerador de novela visual por IA" já é uma categoria de produto com muitos concorrentes e nenhum número público. |
| Análises de mercado de localização (phrase.com, precedenceresearch, webpronews e similares) | Não abertas. Os números que apareceram em busca — mercado de US$ 3,9 bi em 2025, mais de 66% dos fluxos em máquina + pós-edição, 50%–80% de receita adicional com localização — **não** entram no mapa. A menção a "máquina mais pós-edição como fluxo dominante" ficou em §4 marcada explicitamente como contexto não verificado. |
| `https://huggingface.co/papers/2603.05890`, `picrew.github.io/constory-bench`, `pith.science/paper/2608.08160`, NarrativeWorldBench | Duplicatas ou secundárias do mesmo benchmark, ou não abertas. Usei apenas o HTML do arXiv [11]. O número do NarrativeWorldBench (Plot-Beat F1 entre 0,78 e 0,81, caindo 0,20 em horizonte de 200 episódios) apareceu em busca, não foi verificado e **não** entrou. |
| arXiv 2403.01575 (SARD), 2606.04095 (POLARIS), 2405.12438 (CoCo Matrix), 2209.14958 (co-writing de roteiros), 2503.09102 (jogo cocriativo) | Relevantes ao tema e não abertos nesta rodada, por limite de escopo. São a primeira fila de leitura para quem continuar este mapa — sobretudo o CoCo Matrix (taxonomia de contribuição cognitiva em coescrita), que endereça diretamente a pergunta que a §10 tenta responder empiricamente. |
| `https://www25.senado.leg.br/web/atividade/materias/-/materia/157233` e páginas da Câmara sobre o PL 2338/2023 | Não abertas. O status (aprovado no Senado em 10/12/2024, em tramitação na Câmara, votação adiada para 2026, disputa sobre direito autoral em treinamento) veio só de busca e por isso **não** entrou no corpo do mapa. É a lacuna mais séria do recorte brasileiro, e fica registrada como tal. |
| Abragames — censo da indústria brasileira de jogos | A busca indica que a próxima edição está em coleta, sem resultado publicado. Nada a citar. |

### 12.4 Efeitos cortados e rodadas descartadas

**Quarta disrupção-raiz descartada: "síntese de voz e fala gerativa para diálogo" (ChatTTS, Bark).**
Não passa no critério: baixa o custo de uma etapa que já existia (dublagem), sem alterar papel ou
relação. O que **de fato** altera relação nesse terreno é o regime de consentimento e réplica [10], e
isso está em D3 (e6.2). Rebaixada a insumo de D1.

**Quinta disrupção-raiz descartada: "narrativa adaptada ao estado emocional ou ao perfil do jogador".**
Sem sinal observável em produto. É a versão mais citada de "narrativa gerativa" em material promocional
e a que menos evidência tem. Se aparecer implementada e medida, é candidata a raiz própria.

**Efeitos removidos por serem genéricos** — a régua "serviria para qualquer tema": "a IA acelera o
trabalho criativo"; "surgem novas profissões"; "questões éticas se tornam centrais"; "a educação precisa
se adaptar". Todos foram escritos no rascunho e todos foram cortados: nenhum é específico de narrativa e
nenhum é falseável.

**Ramo e4 podado.** Rascunho tinha e4.2 ("a noção de spoiler perde sentido") e quatro efeitos de
terceira ordem. e4.2 era paráfrase de e4.1.1; os de terceira ordem eram variações sobre cânone. Ficou um
de cada, com a interrupção declarada em §5 e §7.

**Efeito rebaixado:** e1.2 ("escrever jogo vira especificar e revisar") saiu de confiança **alta** para
**média**, pela comparação com o tempo real de reorganização de ofício em casos anteriores (motion
capture, middleware): dez a quinze anos, não três.

**Efeito rebaixado:** e4 saiu de sinal **médio** para **fraco** e de confiança **média** para **baixa**,
porque toda a evidência de reconfiguração por sessão vem de ficção conversacional [14] — um gênero onde
nunca houve obra fixa a perder —, e não de obra autoral publicada.

**Efeito que sobreviveu à crítica sem rebaixamento:** e5.2 ("comunidades e prêmios usam a declaração
para excluir"). Tentei rebaixá-lo por ser um único caso (IFComp), mas o caso é forte demais: é a
instituição central da comunidade de ficção interativa, a regra é de 2026, é anterior ao horizonte, e
já vale — não é projeção, é vigência.

### 12.5 Inferências (explicitadas como tais)

1. **De [3] + [1] para "o custo de contar cai perto de zero".** Inferência causal: preço de inferência
   por segundo de vídeo na casa dos centavos, mais empacotamento em assinatura mensal de dois dígitos
   baixos, implicam custo marginal de obra curta próximo de zero **para quem aceita o resultado como
   está**. A qualificação final é essencial e frequentemente omitida: o custo que caiu é o de produzir,
   não o de produzir algo que alguém queira.
2. **De [13] para "a descoberta virou o gargalo".** Inferência: se a oferta declarada cresce muito mais
   rápido que a fatia de receita correspondente, e a receita é concentrada no topo, então o fator
   limitante se deslocou da produção para a atenção. Limite: correlação num único mercado (Steam), com
   concentração pré-existente à IA generativa — a inferência é plausível, a atribuição causal é parcial.
3. **De [4] + [5] + [9] + [10] + [6] + [8] para D3.** Inferência: cinco instituições independentes, em
   vinte meses, criando mecanismos de atribuição incompatíveis entre si constituem uma camada nova, não
   cinco coincidências. Limite: é leitura de padrão; cada caso tem explicação local própria, e o
   contrafactual não é testável.
4. **De [11] + [12] para "a coautoria vence pela agência, não pela qualidade".** Inferência: se a
   qualidade não melhora significativamente com andaime estrutural, mas a preferência por controle é
   quase unânime (92,9%), então o eixo de projeto que importa é o de controle. Limite: N=15, um estudo
   só, um tipo de andaime só.
5. **De [2] para "a localização vira camada de execução".** Inferência: uma ferramenta que traduz
   durante o uso, com LLM, sobre qualquer jogo, torna a tradução prévia dispensável **para quem tolera
   ruído**. Limite: tolerância ao ruído é exatamente o que separa nicho de mercado, e não há dado sobre
   quantos toleram.

### 12.6 Limitações declaradas

- **A entrevista não foi feita com um humano** (§12.1). Os oito campos vieram do briefing e não foram
  confirmados por ninguém. Qualquer inadequação de recorte é atribuível a isso.
- **Quatro fontes pretendidas não abriram** (§12.3), e uma delas sustentava o precedente de prêmio
  literário mais citado do tema. O caso foi **removido** do corpo, não rebaixado: fonte que não abre sai
  da lista numerada e a afirmação que dependia dela é reancorada em primário aberto ou cai. A lacuna não
  fica escondida — fica aqui, nomeada, no anexo, que é o lugar dela.
- **O recorte brasileiro se apoia em uma única fonte secundária** [16], e a frente regulatória brasileira
  (PL 2338/2023) não entrou por não ter sido aberta. O mapa é global com uma nota sobre o Brasil, como
  pedido — mas a nota é mais fina do que deveria.
- **Nenhuma fonte deste mapa mede o objeto central diretamente.** Não existe, entre as 17, um dado sobre
  quantas obras narrativas completas foram geradas, por quantas pessoas, com que retenção. A declaração
  de IA na Steam e no itch.io é o proxy mais próximo, e é um proxy ruim: mede declaração de uso de IA em
  qualquer etapa, não geração de obra inteira. **Esta é a limitação mais séria do documento**, e é a
  razão de a confiança global ser média.
- **Benchmarks envelhecem em meses.** Os números de [11] valem para os modelos daquela rodada; a
  conclusão estrutural que uso — erro acumulando com o comprimento — é mais robusta que o ranking, mas
  também pode cair.
- **Este mapa foi produzido por uma IA sobre um tema que trata de IA produzindo obras.** O viés de
  interesse próprio é estrutural e não se resolve declarando; o contrapeso praticável foi buscar
  deliberadamente evidência de falha e de não-conversão, e é a §7 que deve ser lida primeiro por quem
  desconfiar do resto.
