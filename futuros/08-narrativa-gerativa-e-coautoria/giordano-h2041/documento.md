---
tema: Narrativa gerativa e coautoria
slug: narrativa-gerativa-e-coautoria
autor_login: grec
zona_de_interesse: Simulação e mundos
data: 2026-09-12
horizonte: 2041
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 18
efeitos_ordem_2: 37
efeitos_ordem_3: 21
tecnologias_citadas: [MangoBox, LunaTranslator, Whispers from the Star, Ren'Py, Twine, Inform 7, YarnSpinner, Elsewise, ConStory-Bench, WSE-bench, NarrativeWorldBench, Pangram, Human Authored, AI Basic Act, EU AI Act Artigo 50, Steam AI disclosure, itch.io Generative AI Disclosure, Naver Webtoon, Clarkesworld, NovelAI, AI Dungeon, Sora 2, Veo 3.1]
fontes: 24
confianca: media
experimento: "A Mesma História Duas Vezes — obra curta gerada e reexecutada, com caderno de invariantes e protocolo de leitura cruzada em sala"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

O barato aqui não é escrever: é **instanciar a obra inteira** — elenco, cenas, arte, fala — a
partir de uma intenção curta, e instanciá-la **diferente para cada leitor**. É isso que rompe, e
não "a IA escreve melhor", que é melhoria sustentadora e foi recusada como raiz. O presente é
mais modesto que o discurso e a assimetria é o dado mais útil do mapa: dos 53.597 lançamentos da
Steam entre meados de 2023 e meados de 2026, a fatia com IA declarada subiu de 10,9% (2024) para
30,8% (2026), mas o que se declara é sobretudo **imagem** (cerca de 60% das declarações no Next
Fest de junho de 2026) — escrita e diálogo são a menor fatia, e **localização** é a única
categoria em que declarar IA anda junto com vender (18% entre os jogos bem-sucedidos contra 6%
entre os malsucedidos). Ou seja: a geração já ganhou a tradução e ainda não ganhou a história.
Há motivo técnico medido: o melhor modelo do ConStory-Bench comete 0,113 erro de consistência a
cada 10 mil palavras em histórias de 8 a 10 mil — cerca de um erro por obra curta — e o
NarrativeWorldBench mostra 21 modelos de fronteira empacados entre 0,78 e 0,81 de Plot-Beat F1,
com queda de 0,20 quando o horizonte vai a 200 episódios. Duas retroações seguram o mapa e as
duas já são mensuráveis: a recusa do público ao rótulo (boicote de assinatura na Naver Webtoon;
52% dos profissionais de jogos dizendo em 2026 que a IA generativa faz mal à indústria, contra
30% em 2025 — 63% entre quem faz design e narrativa) e o **colapso da verificação de autoria**,
que o caso Jamir Nazir no Commonwealth Short Story Prize expôs em 2026: detector dizendo 100% de
máquina, fundação operando por princípio de confiança, e ninguém capaz de decidir. Até 2041 o
desenho provável não é a obra viva: é o híbrido — regra no volante, modelo na superfície —
somado a um **regime de declaração** que vale como fato porque não há como verificá-lo.

## 2. O tema

**O objeto.** A história como coisa gerada. Não o personagem que age dentro do mundo (tema 7),
não o vídeo como mídia (tema 12), não a regra que produz espaço (tema 14): o **artefato
narrativo** — a novela visual, o quadrinho, o conto, o roteiro — produzido inteiro a partir de
uma intenção curta, e a coautoria humano-máquina como modo normal de escrever.

**Onde encosta em mídia e interação.** Em três lugares ao mesmo tempo, e é a simultaneidade que
faz o tema. Primeiro, na **produção**: o pipeline de ofícios (roteiro → arte → voz → montagem)
deixa de ser a única forma de chegar à obra. Segundo, na **execução**: se a obra se instancia na
hora, ela deixa de ser uma cópia distribuída e passa a ser um serviço rodando — com custo por
sessão, política de privacidade e moderação. Terceiro, na **recepção**: crítica, prêmio,
currículo escolar e conversa de mesa de bar pressupõem que duas pessoas leram a mesma coisa. Se
não leram, a instituição inteira que se apoia nessa suposição fica sem chão.

**Por que merece mapa de futuro, e não levantamento de estado da arte.** Porque o estado da arte
é enganoso nos dois sentidos. Para baixo: as ferramentas maduras (Ren'Py, Twine, Inform) fazem
tudo o que sempre fizeram e não explicam nada do que está mudando. Para cima: as demos de
"prompt vira jogo" prometem um objeto que os benchmarks mostram não existir ainda em extensão
útil. O que interessa está no meio e é causal, não descritivo: **quais consequências se seguem
de o custo de contar cair perto de zero**, dado que a coerência de longo alcance ainda não caiu
de preço junto. Um levantamento responderia "o que existe". Uma roda responde "o que se quebra
quando isso existir", e é essa a pergunta que quem projeta mídia precisa responder antes de
2041, porque as decisões que ela condiciona — formato de contrato, desenho de curadoria,
arquitetura de produto, política pública de língua — se tomam com anos de antecedência.

**Premissas assumidas nesta rodada** (do bloco `briefing:`, §0 da skill, sem entrevista ao vivo):
horizonte 2041; público de quem projeta mídia e interação; recorte global com nota sobre o
Brasil; descartado de saída **o que já é comum em produto de massa** (a régua da disciplina);
nenhuma disrupção suspeita dada — foi para descobrir; viés neutro; ideias óbvias a excluir são
as que serviriam a qualquer tema; e o falseador declarado pelo autor: *evidência de que a adoção
já passou da maioria inicial (Rogers), ou de que a tecnologia só melhora o que existe sem romper
nada*. Esse falseador virou critério no §6. O briefing veio completo, então não há rebaixamento
por ausência de entrevista; o que ele não cobriu está declarado na seção 12.2.

## 3. Onde isso está hoje

*Âncora feita com acesso à web em 12/09/2026. Vinte e quatro fontes abertas e lidas; a lista está
na seção 11, e as buscas que não deram em nada, na 12.4.*

### 3.1 O que já existe e funciona

**A geração do artefato inteiro, em escala pequena.** `mangobox.ai` é um fazedor de novela
visual no navegador que se descreve como "uma plataforma para criar e compartilhar histórias
interativas": a pessoa escreve o prompt com personagens, ambiente e enredo, manda gerar, e
conversa. Não publica número de usuários, de obras nem de preço — procurei e não achei; a página
"about" é uma frase. Registre-se o que isso significa: **a categoria existe como produto e ainda
não existe como mercado mensurável.**

**A obra que se instancia diferente para cada jogador, em produto comercial.** *Whispers from the
Star*, da Anuttacon (estúdio do fundador da miHoYo), saiu em 14/08/2025, custa R$ 32,99 na Steam
e tinha 1.659 resenhas com 80% de positivas na leitura de 12/09/2026. A página declara
"conversas e performances totalmente dubladas, movidas a IA, criadas em colaboração com um ator"
e avisa que, "dada a natureza aberta da interação", o diálogo "pode envolver linguagem forte,
temas sensíveis ou cenários emocionalmente carregados, dependendo de como o jogador interage com
o sistema". Duas informações inteiras estão nesse aviso: a obra não pode ser classificada por
amostra, e o autor sabe disso. O jogo limita a sessão a 40–60 minutos por dia — um limite que
não é estético.

**A camada de tradução sobreposta.** `LunaTranslator` (GPLv3) extrai o texto do jogo por **hook**
de memória — "compatível com quase todas as novelas visuais, populares e de nicho" —, por OCR
embutido, ou por hook de emuladores de NS/PSP/PSV/PS2, e traduz por "quase todos os motores de
tradução, incluindo tradução por modelo de linguagem grande e tradução offline". Em alguns jogos,
embute a tradução de volta na tela. É software pequeno em tamanho e enorme em consequência:
**obra em japonês lida em português sem que ninguém tenha traduzido, sem licença e sem
distribuidor.**

**A geração ganhando a localização antes da história.** No estudo de Sulka Haro sobre 53.597
lançamentos da Steam de meados de 2023 a meados de 2026: jogos com IA declarada foram 10,9% dos
lançamentos em 2024, 19,9% em 2025 e 30,8% em 2026; os lançamentos com a marca cresceram "de 13
por mês para cerca de 530" e respondem por "60 a 90% de todo o crescimento na contagem mensal de
lançamentos da Steam". Mas na receita a curva é outra: **de 10 a 27% das vendas estimadas**,
contra 3 a 6% em 2024. E o detalhe que mais importa para este tema está na quebra por tipo:
entre os jogos malsucedidos, a IA declarada é visual em 72%, voz em 8% e localização em 6%;
entre os bem-sucedidos, voz sobe para 24% e **localização para 18%**. Quem vende usa a máquina
para atravessar a língua, não para escrever a história.

**O regime de declaração, já instalado e já divergente entre si.** A Valve reescreveu as regras
em **16/01/2026**: ferramenta de fluxo de trabalho (assistente de código) não precisa ser
declarada; "IA para gerar conteúdo para o jogo" e "conteúdo de IA gerado durante o jogo"
precisam — a segunda caixa é o reconhecimento formal de que a obra gerada em execução é uma
classe de produto. O `itch.io` tem o campo "Generative AI Disclosure" com quatro subcategorias
(Graphics, Sound, Text & Dialog, Code), **obrigatório para quem vende assets** e apenas
encorajado para jogos, com perda de indexação como sanção (post de 20/11/2024). A IFComp 2026
proíbe: "todo o conteúdo voltado ao jogador precisa ser inteiramente criado por humanos,
incluindo arte de capa, prosa e todos os assets do jogo", permitindo IA apenas para "assistência
ao desenvolvimento, como edição, depuração, suporte de acessibilidade, pesquisa, assistência
limitada de tradução ou programação". O **Artigo 50 do AI Act europeu está em vigor desde
02/08/2026**, exigindo que a saída de sistema generativo seja "marcada em formato legível por
máquina e detectável como gerada por IA", com prazo até 02/12/2026 para sistemas já implantados —
e com uma isenção que vai importar muito neste mapa: quando o conteúdo "faz parte de uma obra ou
programa evidentemente artístico, criativo, satírico, ficcional ou análogo", a obrigação de
divulgação é **reduzida** a informar de modo "que não atrapalhe a exibição ou a fruição da obra".
Na Coreia, o AI Basic Act obriga a rotular, admite marca d'água **não visível e legível por
máquina** para webtoon e animação, e abriu um ano de carência com orientação em vez de multa.

**O selo inverso, como produto pago.** O Authors Guild abriu ao público em **02/03/2026** a
certificação "Human Authored": US$ 10 por título para não sócios, gratuito para sócios, com
verificação de identidade por terceiro, limite de 10 títulos por ano e por autor, e um critério
explícito — o texto tem de ser humano salvo uso *de minimis* (corretor ortográfico), sendo
permitido usar IA para sumário, índice, pesquisa, brainstorming e esboço de estrutura. O Prêmio
Jabuti, na 68ª edição (inscrições de 31/03 a 19/05/2026), não aceita obras que usaram IA "em
tarefas autorais", com exceção de quando a IA é o objeto de análise, estudo ou crítica.

**A base instalada que a geração vai absorver ou contornar.** Ren'Py está na versão 8.5.3
("We Can Go to the Moon", 15/05/2026) e diz ter sido usado em "mais de 8.000 novelas visuais,
jogos e outras obras". Nenhuma menção a IA na página do projeto. Twine, Inform 7, YarnSpinner e
o resto da linhagem seguem exatamente onde estavam — o que é, por si, um dado: **a ferramenta
madura não está se transformando; está sendo contornada por fora.**

### 3.2 O que existe e ainda não funciona

**A consistência em extensão de obra.** O ConStory-Bench (leaderboard atualizado em 05/03/2026,
arXiv 2603.05890) mede geração de histórias de 8 a 10 mil palavras com uma taxonomia de cinco
categorias e 19 subtipos de erro. O melhor colocado, GPT-5-Reasoning, fica em **0,113 erro de
consistência por 10 mil palavras** — aproximadamente um erro por obra curta —, e os erros se
concentram em "Consistência factual e de detalhe" e "Linha do tempo e lógica de enredo": rastrear
entidade, manter fato e raciocinar sobre tempo. Não é problema de estilo; é de contabilidade.

**A consistência quando o mundo muda embaixo da história.** O WSE-bench (arXiv 2608.15654,
16/08/2026, Chen et al.) mede cobertura de geração, consistência e riqueza em simulações de mundo
aberto e encontra algo que desmonta a solução óbvia: consistência e riqueza **não formam um
trade-off suave** (a fronteira de Pareto é não-côncava), escala de modelo melhora a geração
sustentada mas "não melhora uniformemente a coerência", e acrescentar restrição estrutural
enriquece a narrativa **encurtando-a**. O NarrativeWorldBench, de nove métricas, mostra 21
modelos de fronteira empacados entre 0,78 e 0,81 de Plot-Beat F1, com queda de 0,20 quando o
horizonte vai a 200 episódios.

**A variedade, que piora com o alinhamento.** O paper "Narrative Flattening" (arXiv 2605.27878,
27/05/2026, revisto em 07/09/2026; Li, Zhu, Wu, Bao e Evans) acompanha quatro checkpoints do
OLMo 32B — Base, SFT, DPO e RLVR — contra três fontes pareadas (StoryStar, TMAS e ficção do *The
New Yorker*) e mede três dimensões: movimento temático, prevalência afetiva e diversidade
linguística. O pós-treino **comprime as três**: "as transições temáticas ficam mais uniformes, as
emoções de alta intensidade cedem à neutralidade, e a diversidade estilística entre histórias
encolhe". A maior perda é justamente contra a ficção literária profissional, e os modelos
pós-treinados **convergem entre domínios** — a saída fica indiferente ao material de origem. É o
contrário do que a promessa de "cada leitor, uma história" pede.

**A autoria como espaço a explorar, não como texto a produzir.** O Elsewise (arXiv 2601.15295,
10/09/2026; Wang, Chung, Roemmele, Sun, Wang, Almeda, Halperin, Lu e Kreminski) atacou o problema
por outro lado: visualizar o **espaço de possibilidades** para que o autor entenda o que a obra
ramificada pode virar. Que o problema de ferramenta em 2026 seja "o autor não consegue ver o que
o sistema vai fazer" diz onde o gargalo está — e não é na geração de texto.

**A economia do jogo generativo.** A survey "AI-Native Games: A Survey and Roadmap" (arXiv
2607.00527v2, 03/07/2026; Xu, Meng, Xu, Verbrugge, Lucas e Zhao) analisou **53 jogos e protótipos
públicos** de um universo candidato de 98, com o critério de que o sistema é nativo de IA se,
retirando a IA, "a forma central de jogo colapsaria ou ficaria fundamentalmente diferente".
Aventura narrativa é 45,3% (n=24) do conjunto; narrativa generativa / mestre de jogo é 26,4% das
mecânicas. E a lista de desafios abertos é a agenda deste mapa: **geração controlável limitada
por regra**, instabilidade de memória, inovação de mecânica além de gerar conteúdo, limitação de
modalidade (domínio do texto), latência e economia de inferência, dependência de modelo
comprometendo reprodutibilidade, e moderação em tempo de execução.

**A detecção de autoria.** Não funciona e o campo sabe. Em 2026, "The Serpent in the Grove", de
Jamir Nazir, venceu o Commonwealth Short Story Prize na região do Caribe e saiu na *Granta*;
capturas do detector Pangram alegando 100% de texto gerado circularam, a diretora-geral da
Commonwealth Foundation, Razmi Farook, defendeu o processo dizendo que usar checadores de IA em
submissão não publicada "levantaria preocupações significativas quanto a consentimento e
propriedade artística", e que a fundação opera por "princípio de confiança"; a editora Sigrid
Rausing chegou a consultar o Claude, que respondeu que o conto "quase certamente não foi
produzido sem auxílio humano" — uma frase que não decide nada. Nazir não respondeu ao *New York
Times* nem ao *Guardian*. Do outro lado da mesma dificuldade, Neil Clarke, da *Clarkesworld*,
escreveu em agosto de 2025 que o padrão mudou do texto de robô fácil de pegar para a submissão
híbrida, que ele monitora por padrão e revisa à mão, e que "a tecnologia nunca deve ter a última
palavra, e não terá na *Clarkesworld*".

### 3.3 Quem constrói

| Ator | O que faz | Onde entra neste mapa |
|---|---|---|
| **Anuttacon** (fundador da miHoYo) | *Whispers from the Star*: diálogo gerado em tempo real, ator humano na performance | único caso comercial com número público de obra que se instancia por jogador |
| **MangoBox** | prompt → novela visual jogável no navegador | a geração do artefato inteiro como produto de consumidor |
| **HIllya51 / comunidade LunaTranslator** | hook + OCR + LLM: tradução sobreposta, GPLv3 | a camada que atravessa a obra sem passar pelo autor |
| **Valve, itch.io** | campo de declaração, sanção por indexação | quem define, na prática, o que "usar IA" significa |
| **Comissão Europeia (AI Office), governo coreano** | Art. 50 e AI Basic Act: marcação legível por máquina | quem transforma declaração em obrigação, com isenção para obra artística |
| **Authors Guild, CBL/Jabuti, IFComp** | o selo inverso e a proibição | quem organiza o mercado do "humano" |
| **Academia (arXiv cs.CL/HCI, ACM)** | ConStory-Bench, WSE-bench, Elsewise, Narrative Flattening | quem mede o teto e o custo escondido |
| **Ren'Py, Twine, Inform, YarnSpinner** | a base instalada de ficção interativa | o maduro que está sendo contornado, não substituído |

### 3.4 Os números da adoção hoje

- **30,8%** dos lançamentos da Steam em 2026 declaram IA (10,9% em 2024; 19,9% em 2025), sobre
  53.597 lançamentos analisados — mas só **10 a 27% das vendas estimadas**.
- No Next Fest de junho de 2026, **26,5%** das demos do conjunto rastreado declararam IA (~20% no
  evento inteiro, 4.382 demos no pool), e cerca de **60%** das declarações são de arte visual;
  escrita e diálogo estão entre as fatias menores.
- **18%** dos jogos bem-sucedidos declaram IA em localização, contra **6%** dos malsucedidos.
- **52%** dos mais de 2.300 profissionais ouvidos pelo State of the Game Industry da GDC 2026
  dizem que a IA generativa tem impacto negativo na indústria — contra 30% em 2025 e 18% em 2024;
  **63%** entre quem trabalha com design e narrativa; só 7% veem impacto positivo.
- **18,3%** dos 800 quadrinistas de webtoon ouvidos pela Korea Creative Content Agency já usaram
  IA generativa; 36,1% pretendem usar; **63,8%** das empresas de webtoon pretendem adotar; 41,3%
  apontam questão jurídica/autoral como o maior peso e 31,3% temem perda de originalidade.
- **1.659** resenhas (80% positivas) em *Whispers from the Star*, o caso comercial de referência.
- **8.000+** obras feitas em Ren'Py — a escala do maduro, para comparação.
- **0,113** erro de consistência por 10 mil palavras no melhor modelo do ConStory-Bench.
- **24 fontes** abertas nesta rodada.
- **Sem número encontrado** para: usuários ou obras do MangoBox; instalações do LunaTranslator;
  receita do segmento de "jogo nativo de IA"; parcela de obras literárias publicadas com
  coautoria declarada.

## 4. As disrupções-raiz

Antes das quatro que entram, o que foi **recusado** — porque a recusa é metade do critério.

> *Candidato recusado como raiz: **engine de novela visual e diálogo ramificado** (Ren'Py 8.5.3,
> Twine, Inform 7, YarnSpinner). Adoção em maioria há mais de uma década; 8.000+ obras só em
> Ren'Py. Tratado como contexto na seção 3.*

> *Candidato recusado como raiz: **"o modelo escreve texto melhor"**. Não rompe prática, ofício
> nem modelo de negócio: faz o mesmo, mais barato. É melhoria sustentadora no sentido de
> Christensen, e entra neste mapa como efeito, não como causa.*

> *Candidato recusado como raiz: **geração de imagem e de voz como asset de produção**. Além de
> ser objeto do tema 12, já é comum em produto de massa: ~60% das declarações de IA na Steam são
> visuais, e a régua da disciplina descarta o que dá para fazer com o que já é corrente.*

> *Candidato recusado como raiz: **tradução automática neural**. Madura desde ~2017 e adotada na
> indústria de localização como pós-edição. O que rompe não é traduzir por máquina: é a tradução
> **sobreposta por terceiro, em tempo de execução, sem passar pelo autor** — que é a raiz R3.*

> *Candidato recusado como raiz: **copiloto de escrita**. O uso já é tão corrente que o mercado
> vende o selo do contrário (Human Authored, "milhares de livros" certificados desde 2025). Uso
> corrente não é ruptura por vir; é o presente.*

### R1 — A obra inteira instanciada a partir de uma intenção curta

**O que rompe.** A **unidade de produção**. A obra narrativa audiovisual sempre foi montada por
um pipeline de ofícios sequenciados — roteiro, arte, voz, programação, montagem — e é esse
sequenciamento que sustenta o orçamento como instrumento editorial, o portfólio como prova de
competência, o documento de design como contrato interno e a fronteira entre protótipo e obra.
Quando a intenção curta instancia o artefato inteiro, o custo marginal deixa de filtrar o que se
produz, e **o filtro migra da produção para a atenção**.

**Por que agora, e não há cinco anos.** Porque o ciclo texto → imagem → som → vídeo fechou num
pipeline só e o custo de inferência caiu o bastante para a geração multimodal caber num produto
de navegador. Em 2021 era possível gerar texto de história (AI Dungeon, NovelAI); não era
possível gerar, do mesmo prompt, o elenco, a arte de cena e a fala, com continuidade entre eles.

**Onde está na difusão.** **Produto de nicho**, entrando em adoção precoce. MangoBox roda e é
consumível; 30,8% dos lançamentos da Steam declaram IA, mas texto e diálogo são a menor parcela
das declarações e a receita fica em 10–27%.

**O que ainda falta acontecer.** (a) Consistência em extensão de obra — o teto medido é ~1 erro
por obra curta e cai com o horizonte; (b) controle autoral sobre o que foi gerado, que é
exatamente o problema que o Elsewise ataca em 2026; (c) um caminho de distribuição que não seja
engolido pelo próprio volume (60–90% do crescimento de lançamentos da Steam já é isto); (d) uma
resposta de mercado ao rótulo, hoje negativa.

**Quem bloqueia, e com que efeito.** As **lojas**, que já exercem o poder de definir o que conta
como uso (a reescrita da Valve em 16/01/2026 isentou ferramenta de fluxo e manteve conteúdo
consumido pelo jogador); e o **próprio ofício**, com 63% de quem faz design e narrativa dizendo
que a tecnologia faz mal — número que vira custo de contratação, de imprensa e de comunidade.

### R2 — A obra que se instancia diferente para cada leitor

**O que rompe.** A **identidade numérica da obra**. Se cada execução produz um objeto distinto,
deixa de existir "o livro" sobre o qual duas pessoas conversam, "a cena" que a crítica cita, "o
trecho" que a perícia compara numa disputa de plágio, e "a amostra" pela qual se classifica
indicativamente. Rompe também a distribuição: a obra deixa de ser cópia entregue e vira serviço
rodando, com custo por sessão, política de privacidade e moderação em execução.

**Por que agora.** Porque a inferência ficou barata o bastante para rodar *durante* o jogo — e
porque a instituição reconheceu a classe: a Valve criou em 16/01/2026 a declaração específica de
"conteúdo de IA gerado durante o jogo", separada do conteúdo gerado na produção. Quando a loja
cria um campo, o objeto existe comercialmente.

**Onde está na difusão.** **Produto de nicho.** Um caso comercial com número público
(*Whispers from the Star*: 1.659 resenhas) e 53 sistemas nativos de IA catalogados na survey de
2026, dos quais 26,4% fazem narrativa generativa ou mestre de jogo.

**O que ainda falta acontecer.** (a) Memória estável — a survey nomeia instabilidade de memória
como desafio central; (b) economia por sessão que feche (o limite de 40–60 minutos diários do
*Whispers* é a confissão); (c) um regime de classificação indicativa aplicável ao que ainda não
existe quando o produto é avaliado; (d) a demonstração de que liberdade conversacional produz
liberdade narrativa — que os benchmarks de 2026 não sustentam.

**Quem bloqueia, e com que efeito.** O **custo de inferência** e a equipe de moderação, que
empurram o desenho para o híbrido; e o **regulador de conteúdo**, porque nenhum sistema de
classificação por amostra funciona sobre obra que só existe depois que o jogador fala — o aviso
da Anuttacon na loja é a admissão pública disso.

### R3 — A camada de tradução e adaptação que roda por cima da obra

**O que rompe.** O **controle da obra sobre a língua em que é lida**, e a localização como etapa
contratada. Com hook de memória ou OCR mais LLM, a obra passa a ter leitores em línguas que
ninguém licenciou, com qualidade que o autor não viu, não aprovou e não pode corrigir — e o
distribuidor territorial perde o instrumento que sustentava a exclusividade. Rompe também o
cálculo de mercado: "não vale a pena lançar em PT-BR" deixa de ser uma decisão que retém alguém.

**Por que agora.** Porque o custo de traduzir um turno de diálogo com qualidade aceitável caiu
para perto de zero e o OCR em tempo real roda no dispositivo. A tradução automática existe há
uma década; o que é novo é **traduzir na tela, durante o consumo, por iniciativa do leitor**.

**Onde está na difusão.** Assimétrica, e é esse o achado: **produto de nicho** do lado do leitor
(LunaTranslator é comunidade, não plataforma) e **adoção precoce indo para maioria** do lado da
indústria — localização é a única categoria em que declarar IA correlaciona com vender (18%
contra 6%).

**O que ainda falta acontecer.** (a) Voz sincronizada em tempo real, que esbarra em contrato e
não em técnica; (b) resolução jurídica sobre sobreposição como obra derivada não autorizada;
(c) qualidade em registro, gíria e referência cultural — o ponto em que a máquina ainda perde por
margem larga.

**Quem bloqueia, e com que efeito.** Os **detentores de direito e distribuidores regionais**, para
quem a língua é a cerca do território; e, no Brasil, as **associações de dublagem** — o Movimento
Dublagem Viva, o Clube da Voz e a Interartis foram à Câmara pedir a aprovação do PL 2338/23 com
remuneração por direito autoral quando a obra alimenta IA, e do PL 1376/22, que exige dublagem e
legendagem por empresas e profissionais sediados no Brasil. Se aprovado, o efeito é direto: a
sobreposição de texto continua livre, e a **voz** fica presa.

### R4 — A autoria como declaração auditável, e não como fato sobre o processo

**O que rompe.** A suposição de que "quem escreveu" é uma propriedade da obra, legível nela.
Quando o texto não carrega a marca do processo e a detecção não funciona, a autoria deixa de ser
constatável e passa a ser **declarada** — e tudo o que se apoiava nela (prêmio, seleção editorial,
crédito, currículo, direito autoral, avaliação escolar) passa a se apoiar num regime de
declaração com fraude, verificação, sanção e mercado de certificação. É uma ruptura
institucional, não técnica, e é a mais irreversível das quatro.

**Por que agora.** Por dois motivos simultâneos que não existiam há cinco anos. Primeiro, o
**volume tornou a triagem impossível**: a *Clarkesworld* recebeu 500 submissões geradas contra
700 legítimas em fevereiro de 2023, quando antes o spam não passava de 25 por mês, e o padrão
migrou para o híbrido, que nenhum filtro separa. Segundo, o **regulador entrou**: o Artigo 50 do
AI Act vale desde 02/08/2026, o AI Basic Act coreano obriga marca d'água legível por máquina, e
plataformas (Valve, itch.io) e instituições (IFComp 2026, Jabuti 68ª, Authors Guild) já operam
regimes próprios — **incompatíveis entre si**.

**Onde está na difusão.** **Adoção precoce indo para maioria**, e é a única das quatro raízes
sobre a qual isso se pode dizer. A obrigação já existe em duas jurisdições e em duas lojas.

**O que ainda falta acontecer.** (a) Um detector que funcione — não existe, e o caso Nazir mostra
que a instituição sabe que não existe; (b) jurisprudência sobre o que conta como "tarefa
autoral" (o Jabuti usa a expressão sem defini-la operacionalmente); (c) um padrão de proveniência
embutido no arquivo, que o Código de Conduta em elaboração no AI Office pode vir a fixar;
(d) a decisão sobre a isenção de obra artística do Art. 50 — que é a brecha por onde a ficção
inteira pode sair da marcação visível.

**Quem bloqueia, e com que efeito.** As **próprias instituições certificadoras**, cujo incentivo
é manter vendável uma distinção que não conseguem verificar (US$ 10 por título, limite de 10 por
ano, verificação de identidade — não de autoria); e os **autores estabelecidos**, para quem o
regime de declaração é barreira de entrada útil contra a concorrência de volume.

## 5. A roda dos futuros

O bloco abaixo é o estado **depois** da bateria da seção 7 — dois efeitos foram removidos e seis
rebaixados ali, e o registro antes→depois está na 7.8. A prosa que segue o bloco carrega o que o
YAML não cabe: os mecanismos, as classes de referência de cada prazo, os cruzamentos, quem perde
e a cobertura STEEP.

```yaml
roda:
  - disrupcao: A obra inteira instanciada a partir de uma intenção curta
    efeitos:
      - id: e1
        ordem: 1
        efeito: O protótipo jogável deixa de ser etapa e vira a unidade de pitch, substituindo o documento de design na apresentação de projeto
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O documento de design perde a função de contrato interno e vira anotação sobre um build que já existe
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O ensino de escrita para jogos perde o artefato que o tornava ensinável em separado e é reabsorvido pela direção de projeto
                sinal: fraco
                prazo: 2042
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O catálogo de obra narrativa cresce mais rápido que a atenção disponível e a descoberta substitui a produção como gargalo
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: A curadoria migra de quem seleciona para quem garante, e selo, lista curada e clube fechado passam a valer mais que a vitrine da loja
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: O selo de curadoria vira ativo negociável e aparece a captura por pagamento, repetindo o percurso da lista de mais vendidos
                sinal: fraco
                prazo: 2036
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Revistas e concursos de ficção fecham a submissão aberta e passam a operar por indicação, taxa ou janela curta
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: O acesso do autor estreante ao circuito passa a depender de rede social prévia, e a barreira de entrada sobe justamente onde o custo de produzir caiu
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e2.3
            ordem: 2
            efeito: O preço de obra narrativa curta cai abaixo do custo de atenção do comprador e a venda unitária cede lugar a assinatura e pacote
            sinal: medio
            prazo: 2032
            confianca: media
      - id: e3
        ordem: 1
        efeito: Escritores de jogo deixam de ser contratados por volume de texto e passam a ser contratados por definição de restrição, ou seja, pelo que o sistema não pode dizer
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: O caderno de invariantes narrativos vira entregável contratado, separado do texto e versionado à parte
            sinal: fraco
            prazo: 2033
            confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: O estúdio que não mantém invariantes escritos descobre a incoerência em produção, e o teste de narrativa vira custo recorrente em vez de etapa
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Surge auditoria narrativa terceirizada como serviço, análoga ao teste de compatibilidade de hardware
                sinal: fraco
                prazo: 2036
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: A recusa do público à obra declaradamente gerada vira custo de marketing mensurável e empurra estúdios a esconder o uso em vez de declará-lo
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: A não-declaração passa a ser risco regulatório, instalando conflito corrente entre o incentivo de mercado e a obrigação legal
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A prova de autoria passa a ser produzida durante a escrita, por registro de processo assinado, em vez de atestada depois
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Formam-se dois mercados com preços distintos para a mesma história, a versão certificada humana e a versão gerada
            sinal: medio
            prazo: 2033
            confianca: media
      - id: e5
        ordem: 1
        efeito: A obra gerada passa a nascer em várias línguas ao mesmo tempo, sem original, e a língua de origem deixa de ser um fato sobre o texto
        sinal: fraco
        prazo: 2035
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A expressão língua de origem deixa de descrever a obra e passa a descrever apenas o prompt e a pessoa que o escreveu
            sinal: fraco
            prazo: 2037
            confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Políticas culturais que financiam por língua ficam sem critério aplicável e migram para critério territorial de pessoa
            sinal: fraco
            prazo: 2038
            confianca: baixa
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Editais e prêmios brasileiros consolidam a exigência de vínculo territorial do autor e da edição, no modelo do ISBN e da ficha catalográfica emitidos no Brasil
                sinal: fraco
                prazo: 2040
                confianca: baixa

  - disrupcao: A obra que se instancia diferente para cada leitor
    efeitos:
      - id: e6
        ordem: 1
        efeito: A obra narrativa passa a ter custo marginal por sessão e o desenho econômico migra da venda unitária para o limite de uso
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O limite diário de sessão entra no desenho narrativo como restrição estética, com capítulos dimensionados por orçamento de inferência
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A obra longa gerada vira privilégio de assinatura cara e a obra curta gerada vira o formato popular
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Estúdios convergem para arquitetura híbrida, com máquina de estados no controle e modelo na superfície, e a geração total fica restrita a demonstração
            sinal: forte
            prazo: 2029
            confianca: alta
          - id: e6.3
            ordem: 2
            efeito: Assinatura e venda unitária passam a produzir desenhos narrativos opostos, um otimizando permanência e o outro otimizando encerramento
            sinal: medio
            prazo: 2031
            confianca: media
      - id: e7
        ordem: 1
        efeito: A crítica perde o objeto comum e passa a descrever o sistema em vez da obra, resenhando regras em vez de enredo
        sinal: fraco
        prazo: 2036
        confianca: baixa
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Resenhas passam a vir com trilha de execução anexada, com semente, versão do modelo e registro de escolhas, como condição para serem discutíveis
            sinal: fraco
            prazo: 2038
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Semente e versão de modelo viram metadado obrigatório de preservação, e arquivar uma obra passa a exigir arquivar o modelo
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: Comunidades de leitores fixam uma execução canônica por convenção social para poder conversar, recriando a cópia sem que ninguém a distribua
            sinal: fraco
            prazo: 2035
            confianca: baixa
      - id: e8
        ordem: 1
        efeito: A classificação indicativa deixa de poder ser feita por amostra da obra e passa a ser feita por auditoria do sistema mais moderação em tempo de execução
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: A responsabilidade pelo conteúdo gerado em sessão migra do autor para o operador do serviço, como já ocorreu na moderação de plataforma
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Obra narrativa generativa passa a ser tratada como serviço regulado e o autor individual sem operador é empurrado para fora do mercado
                sinal: fraco
                prazo: 2037
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: Sem regime brasileiro para conteúdo gerado em execução, a classificação indicativa nacional passa a ser aplicada ao sistema e não à obra
            sinal: fraco
            prazo: 2034
            confianca: baixa
      - id: e9
        ordem: 1
        efeito: A liberdade conversacional se revela não equivalente à liberdade narrativa e o público desconta a promessa de história única
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: O argumento de venda migra de infinito para coerente e a métrica pública passa a ser consistência em vez de variedade
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: Benchmarks de consistência narrativa entram no material de marketing, como a taxa de quadros entrou no de gráficos
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: Obras com ramificação escrita à mão voltam a ser vendidas como diferencial e o custo humano vira atributo declarado de produto
            sinal: medio
            prazo: 2033
            confianca: media
      - id: e10
        ordem: 1
        efeito: O personagem que lembra do leitor transforma texto de entretenimento em dado pessoal e a obra passa a ter política de privacidade
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Obras narrativas passam a ter direito ao esquecimento aplicável ao enredo, de modo que apagar o dado apaga a história vivida
            sinal: fraco
            prazo: 2033
            confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: A conversa do leitor com a obra vira corpus de treino disputado e aparece cláusula de licença sobre o que o leitor disse
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e10.2.1
                ordem: 3
                efeito: Surge um nicho de histórias que não aprendem, vendidas pela garantia de não reter nada do leitor
                sinal: fraco
                prazo: 2036
                confianca: baixa

  - disrupcao: A camada de tradução e adaptação sobreposta à obra em tempo de execução
    efeitos:
      - id: e11
        ordem: 1
        efeito: Obras passam a ser consumidas em línguas que ninguém licenciou e a decisão de não localizar deixa de reter leitor
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: O contrato de distribuição territorial perde o instrumento que o sustentava e migra de exclusividade de língua para exclusividade de serviço, como voz, suporte e comunidade
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: Selos de tradução literária no Brasil passam a competir com sobreposição gratuita e se reposicionam em edição impressa, aparato crítico e curadoria
                sinal: fraco
                prazo: 2036
                confianca: baixa
          - id: e11.2
            ordem: 2
            efeito: O autor perde o controle sobre a primeira impressão da obra em outra língua e o erro de tradução deixa de ter responsável identificável
            sinal: medio
            prazo: 2030
            confianca: media
          - id: e11.3
            ordem: 2
            efeito: Comunidades de fãs abandonam o patch de tradução e um ofício amador de trinta anos desaparece por obsolescência, não por proibição
            sinal: medio
            prazo: 2031
            confianca: media
      - id: e12
        ordem: 1
        efeito: A localização profissional se reorganiza em torno de revisão e adaptação cultural e o preço por palavra deixa de ser a unidade de cobrança
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: O posto de tradutor júnior de jogos desaparece e com ele o caminho de formação do tradutor sênior
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: Uma década depois a indústria descobre não ter quem revise e o custo da revisão sobe acima do que era o da tradução
                sinal: fraco
                prazo: 2043
                confianca: baixa
          - id: e12.2
            ordem: 2
            efeito: Estúdios brasileiros passam a lançar em dez línguas no dia um e a barreira de idioma deixa de explicar o alcance limitado
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e12.2.1
                ordem: 3
                efeito: O diferencial competitivo do jogo brasileiro desloca-se de acesso a mercado para especificidade cultural, e traduzir a referência vira o problema caro
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e13
        ordem: 1
        efeito: A voz se torna o ponto onde a tradução automática trava, porque a voz tem dono com contrato e o texto não tem
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: A obra passa a ter duas camadas jurídicas distintas, texto livremente sobreposto e voz licenciada, e o consumo traduzido fica legendado mesmo com síntese boa
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: A legenda sobreposta por terceiro vira a forma dominante de consumo transfronteiriço e a dublagem passa a produto premium regional
                sinal: fraco
                prazo: 2036
                confianca: baixa
          - id: e13.2
            ordem: 2
            efeito: Se o PL 2338 for aprovado com remuneração por uso em treino, o Brasil vira mercado onde a voz sintética custa mais que a legenda e estúdios globais deixam de dublar em português
            sinal: medio
            prazo: 2033
            confianca: media
      - id: e14
        ordem: 1
        efeito: A obra passa a ser escrita para ser traduzida por máquina, com recuo de sintaxe complexa, referência local e trocadilho
        sinal: medio
        prazo: 2032
        confianca: baixa
        efeitos:
          - id: e14.2
            ordem: 2
            efeito: Regionalismo e oralidade brasileira ficam economicamente penalizados na exportação e a escrita para mercado externo se aplaina
            sinal: medio
            prazo: 2034
            confianca: media

  - disrupcao: A autoria como declaração auditável em vez de fato sobre o processo
    efeitos:
      - id: e15
        ordem: 1
        efeito: A declaração de uso de IA vira campo obrigatório em loja, concurso e editora e declarar errado passa a custar mais que não usar
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: Instala-se a assimetria entre o que a loja pede, conteúdo consumido pelo jogador, e o que o regulador pede, marcação legível por máquina, e o mesmo produto carrega duas declarações incompatíveis
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: Consolida-se um padrão de proveniência embutido no arquivo e a declaração deixa de ser texto para virar metadado verificável
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e15.2
            ordem: 2
            efeito: A isenção de obra artística do Artigo 50 vira a porta pela qual a ficção escapa da marcação visível e ser arte passa a ser argumento jurídico de isenção
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e15.2.1
                ordem: 3
                efeito: A fronteira entre ficção e informação vira objeto de litígio, porque é ela que decide qual obrigação se aplica
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e16
        ordem: 1
        efeito: O selo de autoria humana vira produto pago e provar que não usou máquina passa a custar dinheiro
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e16.1
            ordem: 2
            efeito: O selo é comprável e não verificável, e a primeira fraude pública de certificação humana destrói o valor de sinal do selo
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e16.1.1
                ordem: 3
                efeito: A certificação migra de atestado do autor para evidência de processo e escrever passa a ser uma atividade registrada
                sinal: fraco
                prazo: 2036
                confianca: baixa
          - id: e16.2
            ordem: 2
            efeito: Autores de países sem instituição certificadora ficam fora do regime e passam a ser presumidos gerados por quem seleciona
            sinal: medio
            prazo: 2033
            confianca: media
      - id: e17
        ordem: 1
        efeito: A detecção falha publicamente e a suspeita vira a condição normal de leitura, com obra humana acusada e obra gerada passando
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e17.1
            ordem: 2
            efeito: Prêmios e revistas abandonam a detecção e migram para procedimento, com entrevista, defesa oral e escrita presenciada
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e17.1.1
                ordem: 3
                efeito: A performance de autoria vira parte do valor da obra e o texto isolado perde poder de atestar quem o fez
                sinal: fraco
                prazo: 2037
                confianca: baixa
          - id: e17.2
            ordem: 2
            efeito: O ônus da prova se inverte para o autor sem nome feito e a acusação sem evidência vira instrumento de disputa de prêmio
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e17.2.1
                ordem: 3
                efeito: O dano reputacional por falso positivo de detector aparece como categoria própria de litígio
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e18
        ordem: 1
        efeito: A coautoria com máquina deixa de ser vergonha declarável e vira gênero, com convenção própria de crédito
        sinal: fraco
        prazo: 2036
        confianca: baixa
        efeitos:
          - id: e18.1
            ordem: 2
            efeito: O crédito se fragmenta em papéis, quem definiu a intenção, quem curou, quem revisou e qual modelo, e a ficha técnica da obra literária passa a parecer a de um filme
            sinal: fraco
            prazo: 2038
            confianca: baixa
          - id: e18.2
            ordem: 2
            efeito: Concursos criam categoria separada para obra assumidamente coautorada e a separação, não a proibição, vira a norma
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e18.2.1
                ordem: 3
                efeito: A categoria separada ou se esvazia ou absorve a principal, e em qualquer dos dois casos a distinção deixa de ser feita
                sinal: fraco
                prazo: 2040
                confianca: baixa
```

### 5.1 Os mecanismos, ramo a ramo

**R1 · e1 — o build substitui o documento.** *Porque a obra instanciada a partir de uma intenção
curta faz o custo de mostrar cair abaixo do custo de descrever.* Quando gerar o jogável custa
menos que escrever o documento que o descreve, ninguém escreve o documento primeiro. **e1.1**
segue porque *o documento perde a função para a qual existia — alinhar pessoas antes de haver
artefato* — e vira anotação sobre algo que já roda. **e1.1.1**, o ensino, segue porque *o roteiro
era o artefato destacável que permitia ensinar escrita separada da produção*; sem ele, a
disciplina não tem objeto próprio e é reabsorvida pela direção. Este é o único efeito de 3ª ordem
do ramo **cujo prazo, 2042, passa do horizonte do mapa** — currículo universitário muda em ciclos
de 8 a 10 anos, e o gatilho (e1.1) só se firma por volta de 2031. Fica declarado: está fora da
janela de 2041, mas a cadeia causal já está escrita.

*Classe de referência para e1 (2029):* a passagem do design document para o vertical slice como
peça de pitch em jogos AAA levou cerca de cinco anos depois que motores acessíveis (Unity 2010,
Unreal gratuito 2015) tornaram o slice barato. Aqui a barateza já existe e a peça já é
demonstrável, então três anos é plausível; foi por isso que a confiança caiu de alta para média
na bateria — o precedente mostra que a substituição é **parcial**, não total: o documento
sobreviveu ao slice.

**R1 · e2 — o gargalo muda de lugar.** *Porque o volume de obra publicável cresce com o custo de
produzi-la, enquanto a atenção não cresce.* É o efeito mais bem ancorado de todo o mapa e o único
de 1ª ordem com sinal forte e confiança alta em que a evidência é numérica e direta: os
lançamentos com IA declarada respondem por **60 a 90% de todo o crescimento mensal de lançamentos
da Steam**, saindo de 13 por mês para ~530, sem que a receita acompanhe (10–27% das vendas).
**e2.1** segue porque *quando a vitrine deixa de filtrar, quem filtra vira infraestrutura*; e
**e2.1.1**, a captura do selo, segue porque *todo filtro escasso com demanda alta desenvolve
mercado secundário* — a classe de referência é a lista de mais vendidos e o pacote de resenhas
pagas, ambos capturados poucos anos depois de virarem critério. **e2.2** já tem caso: a
*Clarkesworld* fechou submissões em 20/02/2023 diante de 500 geradas contra 700 legítimas no mês
e, embora tenha reaberto com processo adaptado, Neil Clarke descreve em 2025 um padrão híbrido
que o filtro não separa. **e2.2.1** é a consequência perversa, e é o efeito deste mapa que mais
merece atenção de quem forma gente: *porque o circuito responde ao volume fechando a porta, e a
porta fechada só se abre por relação prévia* — quem estreia sem rede social paga a conta de uma
tecnologia que deveria tê-lo ajudado a entrar.

**R1 · e3 — a contratação muda de unidade.** *Porque quando o sistema produz texto em volume, o
valor do escritor migra do que ele escreve para o que ele impede o sistema de escrever.* O
mecanismo é exatamente o que o ConStory-Bench mede: erros de "consistência factual e de detalhe"
e de "linha do tempo e lógica de enredo" são violações de invariantes que alguém teria de ter
escrito. **e3.1** e **e3.2** derivam disso e não de e3 apenas "mais adiante": mudam o ator (do
escritor para o estúdio e o QA) e o mecanismo (de contratação para descoberta de defeito em
produção). **e3.2.1** repete um percurso conhecido: o teste de compatibilidade virou serviço
terceirizado quando a matriz de hardware ficou grande demais para o estúdio cobrir sozinho — a
matriz de execuções narrativas é maior.

*Classe de referência para e3 (2031):* a migração de "programador que escreve tudo" para
"programador que define contratos e revisa" levou cerca de uma década na engenharia de software
com bibliotecas de alto nível; com pressão econômica maior, cinco anos.

**R1 · e4 — a retroação do ramo: o rótulo custa dinheiro.** *Porque o público penaliza o rótulo
mais do que penalizaria o resultado, o que torna a declaração honesta economicamente inferior à
omissão.* Há três evidências independentes: o boicote de assinatura contra a obra gerada
publicada pela Naver Webtoon; os 52% de profissionais de jogos dizendo que a IA generativa faz
mal (2.300+ respondentes, contra 30% em 2025 e 18% em 2024; 63% em design e narrativa); e o
estudo do JCOM (março de 2026, n=433) que encontra um "efeito de cruzamento verdade-falsidade" —
o mesmo rótulo de IA **derruba** a credibilidade da informação correta e **eleva** a da falsa.
O rótulo, portanto, não informa: reposiciona. **e4.1** segue porque *o incentivo de mercado passa
a apontar na direção contrária da obrigação legal*, e é onde este ramo colide com R4. **e4.1.1**
é a saída técnica desse conflito: se ninguém consegue provar ausência depois, prova-se presença
durante. **e4.2** é a saída de mercado: dois preços para a mesma história.

**R1 · e5 — a obra sem original.** *Porque, gerando-se o artefato inteiro a partir da intenção, a
instanciação em cada língua é simultânea e nenhuma delas é derivada da outra.* Este efeito foi
**empurrado de 2033 para 2035** na bateria: exige que a geração multilíngue seja boa o bastante
em registro literário, e a classe de referência (tradução automática neural, 2016 → uso corrente
em localização por volta de 2022-2024, ~7 anos) sugere que a qualidade literária multilíngue
simultânea leva mais, não menos. **e5.2** e **e5.2.1** tocam política pública: o critério de
língua é a base de quase todo fomento cultural, e o substituto disponível é o territorial — o
regulamento do Jabuti já exige ISBN e ficha catalográfica **emitidos no Brasil**, que é
exatamente esse deslocamento em miniatura.

**R2 · e6 — o custo por sessão.** *Porque a obra que se instancia na hora consome inferência a
cada leitura, transformando um custo fixo de produção em custo variável de consumo.* O sinal é
forte e observável: *Whispers from the Star* limita a sessão a 40–60 minutos por dia. Não é
escolha estética. **e6.1** segue porque *a restrição orçamentária de uma obra sempre acaba virando
forma* — o folhetim tinha tamanho de coluna de jornal, o episódio de TV tinha tamanho de bloco
comercial. **e6.2** é o efeito de 2ª ordem com **sinal forte e confiança alta**, exceção
deliberada à regra de que a 2ª ordem não tem alta: a survey de 53 sistemas nativos de IA nomeia
"geração controlável limitada por regra" como o primeiro desafio da agenda, e o WSE-bench mostra
por quê — acrescentar restrição estrutural melhora a narrativa e a encurta, o que é a definição
operacional do híbrido. **e6.3** é uma **contradição interna deliberada** (ver 5.4).

**R2 · e7 — a crítica sem objeto.** *Porque a crítica é um discurso sobre um objeto que o leitor
pode conferir, e a obra instanciada não é conferível.* Foi o efeito mais rebaixado da bateria
(prazo 2032→2036, confiança média→baixa) e a razão está na classe de referência: *Bandersnatch*
(Netflix, 2018) prometeu narrativa adaptativa em escala de massa e **não gerou categoria** em
sete anos; o formato voltou a ser experimento. Rebaixar aqui é reconhecer que a crítica só perde
o objeto se a obra adaptativa virar volume relevante, e nada indica que vire antes de meados da
década de 2030. **e7.2** é o contramovimento social — comunidades fixam uma execução canônica —
e vale mais que e7.1: a cópia volta por convenção, sem que ninguém a distribua.

**R2 · e8 — classificar o que ainda não existe.** *Porque a classificação indicativa é feita por
amostra da obra acabada, e a obra só acaba de existir depois que o jogador fala.* O aviso da
Anuttacon na página da Steam é a admissão pública. **e8.1** segue porque *quando o conteúdo é
produzido em tempo de execução, quem o hospeda é quem pode contê-lo* — é o mesmo raciocínio que
deslocou responsabilidade para plataformas de mídia social. **e8.1.1** é quem perde: o autor
solo, empurrado para fora por não poder operar um serviço. **e8.2** é a nota brasileira e é o
efeito de confiança mais frágil deste ramo — não abri fonte sobre o regime brasileiro de
classificação indicativa nesta rodada, e está declarado na seção 8.

**R2 · e9 — a retroação do ramo: a promessa não se cumpre.** *Porque poder dizer qualquer coisa
não é o mesmo que poder mudar o que acontece, e o público mede a segunda coisa.* O mecanismo está
medido: o WSE-bench mostra que escala melhora a geração sustentada mas **não** a coerência nem o
desenvolvimento, com fronteira de Pareto não-côncava entre consistência e riqueza; o
NarrativeWorldBench trava 21 modelos entre 0,78 e 0,81 de Plot-Beat F1; e o Narrative Flattening
mostra que o pós-treino comprime justamente a variação que a promessa vende. Três medidas
independentes apontando para o mesmo lugar é o que sustenta sinal forte e confiança alta.
**e9.1** e **e9.2** são o ajuste de discurso comercial que se segue.

**R2 · e10 — a obra como controlador de dados.** *Porque memória longitudinal de conversa é dado
pessoal, e dado pessoal tem regime jurídico próprio, independente de o produto ser ficção.*
**e10.1** é a consequência mais estranha e mais concreta: exercer o direito ao esquecimento apaga
a história vivida — o direito do titular colide com a integridade da obra. **e10.2.1**, o nicho
das "histórias que não aprendem", é o tipo de efeito que parece absurdo até se lembrar de que
existe mercado para telefone sem câmera e para carro sem telemetria.

**R3 · e11 — a obra atravessa a língua sem licença.** *Porque hook de memória mais LLM elimina a
necessidade de qualquer intermediário entre o texto do jogo e o leitor em outra língua.* Sinal
forte e confiança alta: o LunaTranslator existe, é GPLv3, cobre "quase todas as novelas visuais"
por hook e ainda alcança emuladores de quatro consoles. **e11.1** segue porque *a exclusividade
territorial em mídia sempre foi operada pela língua, e o que resta de exclusivo quando a língua
vaza é o serviço*. **e11.2** nomeia quem perde de um jeito que costuma passar batido: não é só o
tradutor — é o **autor**, que perde a primeira impressão da própria obra em mercados que nunca
visitou. **e11.3** é o desaparecimento silencioso de um ofício amador de três décadas, e é o
efeito deste mapa que mais claramente mostra que "quem perde" não é sempre quem tem contrato.

**R3 · e12 — a localização muda de unidade.** *Porque quando a primeira versão sai da máquina, o
trabalho humano se desloca para o que a máquina erra, e o que a máquina erra não se mede em
palavras.* O dado que sustenta: localização por IA aparece em 18% dos jogos bem-sucedidos da
Steam contra 6% dos malsucedidos — quem vende já faz assim. **e12.1** e **e12.1.1** formam o
ciclo mais longo do mapa e o único com prazo em **2043, além do horizonte** (declarado): elimina-se
o degrau de entrada em 2032, e a falta de sênior aparece cerca de dez anos depois, que é o tempo
que leva para formar um. A classe de referência é a revisão tipográfica, que sumiu como posto de
entrada nos anos 1990 e cuja falta as editoras passaram a sentir por volta de 2005.
**e12.2** é a nota brasileira mais concreta: 78 estúdios brasileiros foram à gamescom 2026, o
setor fez mais de US$ 138 milhões em negócios globais e **55% da receita dos estúdios nacionais
vem do mercado externo**. Para quem já exporta a maior parte, cair o custo de língua muda o
cálculo de lançamento no dia um. **e12.2.1** é a contrapartida: o que sobra de diferencial é
justamente o que é mais caro de traduzir.

**R3 · e13 — a retroação do ramo: a voz trava.** *Porque a voz tem dono com contrato coletivo, e
o texto não tem.* O Acordo de Mídia Interativa 2025 da SAG-AFTRA, ratificado em julho de 2025 por
95,04% após greve de 11 meses, exige consentimento "separado, escrito, claro e conspícuo e
razoavelmente específico" antes da criação e do uso de réplica digital, descrição razoavelmente
específica do uso, e negociação sempre que **qualquer** voz sintética for criada por IA
generativa — não apenas voz de personagem humano. No Brasil, o pedido do setor na Câmara em
29/08/2024 foi pela aprovação do PL 2338/23 (remuneração por direito autoral quando a obra
alimenta IA) e do PL 1376/22 (dublagem e legendagem por empresas e profissionais sediados no
país), além do reconhecimento da dublagem como patrimônio imaterial. **e13.1** é a consequência
estrutural: a obra passa a ter duas camadas jurídicas e o consumo transfronteiriço fica legendado
mesmo quando a síntese já é boa. **e13.2** é o efeito brasileiro, e é desconfortável: a proteção
pode produzir menos dublagem em português, não mais.

**R3 · e14 — escrever para a máquina traduzir.** *Porque, se a maior parte dos leitores vai ler a
saída da máquina, o autor otimiza para ela.* Foi **rebaixado de confiança média para baixa** na
bateria: linguagem controlada para tradução já existe há décadas em documentação técnica e
**nunca** contaminou a ficção, que é onde o intraduzível é valor. **e14.2** sobrevive porque tem
ator e mecanismo específicos: o autor brasileiro que escreve mirando exportação, com oralidade e
regionalismo penalizados na conversão.

**R4 · e15 — a declaração vira obrigação.** *Porque cada plataforma e cada jurisdição resolve o
problema da confiança criando um campo, e os campos não coincidem.* O sinal é forte e múltiplo:
Valve (16/01/2026), itch.io (20/11/2024), IFComp 2026, Jabuti 68ª, Art. 50 desde 02/08/2026, AI
Basic Act coreano com carência de um ano. **e15.1** é o atrito concreto: a Valve pergunta por
**conteúdo consumido pelo jogador** e isenta ferramenta de fluxo; o Art. 50 exige **marcação
legível por máquina na saída do sistema**. São perguntas diferentes sobre o mesmo produto, e a
resposta honesta a uma pode ser omissão na outra. **e15.2** é, para mim, o efeito mais subestimado
deste mapa inteiro: o Art. 50 reduz a obrigação quando o conteúdo "faz parte de uma obra
evidentemente artística, criativa, satírica, ficcional ou análoga", exigindo apenas informar de
modo que não atrapalhe a fruição. **A ficção inteira cabe nessa frase.** **e15.2.1** é a
consequência: a fronteira ficção/informação passa a decidir obrigação jurídica, e por isso vira
objeto de litígio.

**R4 · e16 — o selo do avesso.** *Porque, quando não se consegue detectar a máquina, vende-se a
certificação do humano.* Está montado: Authors Guild, US$ 10 por título, público desde
02/03/2026, com verificação de **identidade** por terceiro — e é isso que faz **e16.1** derivar:
o que se verifica é quem assinou, não quem escreveu; um atestado não verificável só sustenta
valor de sinal até a primeira fraude pública. A classe de referência é o selo orgânico e o
"cruelty-free": ambos passaram por um escândalo de certificação nos primeiros cinco a dez anos e
migraram para auditoria de processo. **e16.2** é quem perde: autor de país sem instituição
certificadora — o que inclui o Brasil, onde o Jabuti proíbe mas não certifica — presumido gerado
por quem seleciona lá fora.

**R4 · e17 — a retroação do ramo: a suspeita vira norma.** *Porque o detector erra nos dois
sentidos e a instituição não pode usá-lo, o que deixa a acusação sem árbitro.* O caso Jamir Nazir
não é hipótese: Pangram alegando 100%, a Commonwealth Foundation dizendo que checar submissão não
publicada esbarra em consentimento e propriedade artística e operando por "princípio de
confiança", uma editora consultando um modelo para decidir sobre outro, o autor em silêncio, e
nenhuma conclusão possível. Neil Clarke, do outro lado, mantém revisão humana e escreve que "a
tecnologia nunca deve ter a última palavra". **e17.1** segue porque *quando o exame do texto não
decide, decide-se por procedimento sobre a pessoa*. **e17.2** e **e17.2.1** são o custo: o ônus
recai sobre quem não tem nome feito, e o falso positivo vira dano.

**R4 · e18 — a coautoria vira gênero.** Foi **empurrado de 2033 para 2036 e rebaixado a confiança
baixa**: a classe de referência é dura. A fotografia levou décadas para ser aceita como arte; o
sampler levou cerca de quinze anos e uma leva de processos judiciais; o autotune nunca virou
crédito, apenas prática silenciosa. Não há razão para supor que a coautoria com máquina tenha
percurso mais rápido do que qualquer um desses — e **e18.2.1** registra o desfecho ambíguo:
categoria separada normalmente esvazia ou engole a principal, e nos dois casos a distinção some.

### 5.2 Cobertura STEEP e quem perde

| Dimensão | Efeitos de 1ª ordem que a cobrem |
|---|---|
| **Social** | e2 (descoberta), e4 (recusa ao rótulo), e7 (crítica sem objeto), e17 (suspeita como norma) |
| **Tecnológico** | e1 (build como pitch), e6 (custo por sessão), e9 (liberdade conversacional ≠ narrativa), e11 (tradução sobreposta) |
| **Econômico** | e2, e3 (contratação por restrição), e6, e12 (localização muda de unidade), e16 (selo pago) |
| **Ecológico** | **categoria vazia** — ver nota abaixo |
| **Político / regulatório** | e8 (classificação indicativa), e10 (dado pessoal), e13 (voz com contrato), e15 (declaração obrigatória) |

**A categoria ecológica ficou vazia, e isso é uma escolha declarada, não um esquecimento.** O
custo energético da inferência é real e aparece indiretamente em e6 (custo por sessão), mas não
achei, nas 24 fontes abertas, nenhum dado que ligasse consumo energético especificamente à
**narrativa** gerada em oposição a qualquer outra inferência. Forçar um efeito ecológico aqui
seria escrever algo que serve igualmente a todos os 19 temas da disciplina — exatamente o
anti-padrão que a skill proíbe. Fica registrado como buraco: quem retomar este mapa com dado de
consumo por token em contexto longo tem um ramo inteiro para abrir.

**Quem perde, nomeado:**

| Quem | Por qual efeito | O que perde |
|---|---|---|
| Autor estreante sem rede social | e2.2.1 | o acesso, justamente quando produzir ficou barato |
| Tradutor júnior de jogos | e12.1 | o degrau de entrada da carreira |
| Tradutor amador de comunidade | e11.3 | um ofício de trinta anos, por obsolescência |
| Dublador brasileiro | e13.2 | o trabalho, por duas vias opostas — síntese barata ou fuga do mercado protegido |
| Autor individual sem operador | e8.1.1 | o direito de publicar obra generativa sem ser serviço regulado |
| Autor de país sem certificadora | e16.2 | a presunção de autoria |
| Autor de qualquer obra | e11.2 | o controle sobre a primeira impressão em outra língua |
| Crítico e professor de literatura | e7 | o objeto comum que torna a conversa possível |
| Escritor de jogo pago por volume | e3 | a unidade de cobrança |
| Leitor | e10.2 | a conversa, que vira corpus |

### 5.3 Convergências

Três ramos de raízes diferentes chegam ao mesmo lugar. São os achados mais valiosos do mapa,
porque nenhum deles é visível olhando uma raiz de cada vez.

**C1 — A prova de processo.** `e4.1.1` (produzir prova de autoria durante a escrita, vindo de R1,
pela recusa do público) e `e16.1.1` (a certificação migra de atestado para evidência de processo,
vindo de R4, pela falência do selo) são **o mesmo efeito por dois caminhos independentes**: um
puxado pelo mercado, outro pela instituição. Quando dois vetores distintos apontam para a mesma
solução técnica, ela costuma acontecer. **Se este mapa estiver certo em uma coisa só, é nesta: o
registro de processo de escrita vira infraestrutura, e escrever vira uma atividade logada.** É
também o efeito mais desconfortável do mapa, porque resolve o problema da autoria criando um
problema de vigilância.

**C2 — A obra que vira serviço.** `e8.1` (responsabilidade migra para o operador, vindo de R2) e
`e11.1` (distribuição migra de exclusividade de língua para exclusividade de serviço, vindo de
R3) convergem em: **o que se vende deixa de ser a obra e passa a ser a operação em torno dela.**
Duas causas sem relação — regulação de conteúdo e vazamento de língua — produzindo a mesma
mudança de modelo de negócio.

**C3 — O humano como atributo de produto.** `e4.2` (dois mercados com dois preços, de R1),
`e9.2` (ramificação escrita à mão como diferencial vendido, de R2) e `e16` (selo pago, de R4)
convergem em: **o trabalho humano deixa de ser o modo de fazer e vira uma característica anunciada
na embalagem.** É o efeito que mais mexe com quem projeta mídia, porque muda o briefing: passa a
ser preciso decidir, antes de começar, se a obra vai ser vendida como humana.

### 5.4 Retroalimentações e contradições

**Retroalimentação negativa (freia a raiz):** `e17` → R4. A falência pública da detecção
*reforça* a raiz da autoria declarada — se não dá para verificar, só resta declarar — e ao mesmo
tempo *destrói o valor da declaração*, porque uma declaração que ninguém audita não informa. O
ciclo é: mais volume → mais suspeita → mais declaração exigida → menos valor por declaração →
mais volume passando. É um ciclo que **não** se estabiliza sozinho, e é por isso que e4.1.1 e
e16.1.1 (a prova de processo) aparecem como saída nos dois ramos.

**Retroalimentação negativa:** `e9` → R2. Quanto mais se vende a promessa de história única, mais
rápido o público mede que a história não é única, e mais cara fica a próxima promessa. A
consequência é que R2 **se desacelera por sucesso**, não por fracasso técnico.

**Retroalimentação positiva:** `e12.2` → R3. Estúdios que lançam em dez línguas no dia um geram
mais texto traduzido por máquina em circulação, o que normaliza ler traduzido por máquina, o que
baixa a resistência à sobreposição não licenciada. A raiz se alimenta.

**Contradição 1 — permanência × encerramento (`e6.1` × `e6.3`).** Em assinatura, o custo por
sessão é despesa e o desenho quer **encurtar**; em venda unitária com servidor pago pelo estúdio,
o custo por sessão também é despesa, mas a métrica de sucesso é resenha positiva, que exige
**permanência**. Os dois desenhos não podem ser o mesmo produto. Não resolvo: registro os dois e
digo o que decide entre eles — **decide o modelo de cobrança, e ele será escolhido antes do
desenho narrativo, não depois.** Quem projeta mídia precisa saber que essa decisão, que parece
comercial, é a decisão estética.

**Contradição 2 — declarar × esconder (`e4` × `e15`).** O mercado pune quem declara e o regulador
pune quem não declara. Os dois efeitos são fortes, ambos com evidência, e são incompatíveis como
estratégia. O que decide: **a jurisdição de maior receita**. Enquanto a receita vier
majoritariamente de mercados sem obrigação executável, esconder ganha; quando a UE ou a Coreia
representarem parcela grande o bastante e a fiscalização for real, declarar ganha. Não é uma
questão de ética do estúdio — é aritmética de faturamento, e isso deveria ser dito em voz alta.

**Contradição 3 — a obra sem original × a obra que se aplaina (`e5` × `e14`).** Se o texto nasce
em n línguas simultaneamente (e5), não faz sentido escrever pensando em traduzir (e14). Os dois
efeitos assumem futuros diferentes para a mesma raiz. O que decide entre eles: **se a geração
multilíngue simultânea alcança qualidade literária**. Se alcançar, e14 morre; se não alcançar,
e5 morre. Os dois estão no mapa porque hoje não há evidência que resolva — e o Narrative
Flattening, ao mostrar que o pós-treino comprime mais justamente contra a ficção literária
profissional, inclina levemente a favor de e14.

### 5.5 Regra de parada

Parei a derivação em três níveis por imposição do formato, mas em quatro ramos parei **antes**,
por falta de troca de ator ou de mecanismo — e registro quais, porque continuar ali teria
produzido o mesmo efeito envelhecido com outro nome:

- `e2.3` (preço cai, assinatura substitui venda) não teve filho: qualquer continuação seria
  "e aí o mercado de assinatura cresce", que é o mesmo efeito adiante.
- `e6.2` (arquitetura híbrida) não teve filho: os candidatos que escrevi eram detalhamento
  técnico do próprio híbrido, não consequência com outro ator.
- `e11.2` e `e11.3` não tiveram filho pelo mesmo motivo.
- `e13.2` (efeito do PL 2338) não teve filho porque a continuação depende inteiramente de uma
  decisão legislativa que ainda não ocorreu; derivar dali seria ficção sobre ficção.

## 6. Sinais fracos e wildcards

### 6.1 Sinais fracos

**SF1 — A obra lida numa língua que ninguém licenciou.** *Onde foi visto:* LunaTranslator, GPLv3,
hook de memória em "quase todas as novelas visuais", OCR embutido, hook de emuladores de
NS/PSP/PSV/PS2 e embutimento da tradução de volta na tela. *O que mudaria:* se isso sair do nicho
de novela visual japonesa e virar camada de sistema operacional ou de loja, a localização deixa
de ser uma etapa e vira um recurso do dispositivo — e o mapa inteiro de R3 acelera cinco anos.
*Sinal observável de que está crescendo:* uma loja grande (Steam, Epic, Google Play) **embutir**
tradução sobreposta como recurso de plataforma, ou um fabricante de console anunciá-la no
firmware. Métrica secundária: a fatia de declarações de IA em localização na Steam passar de 18%
entre os jogos bem-sucedidos para acima de 40%.

**SF2 — A isenção de obra artística do Artigo 50.** *Onde foi visto:* o texto do Art. 50 reduz a
obrigação de divulgação quando o conteúdo integra "uma obra ou programa evidentemente artístico,
criativo, satírico, ficcional ou análogo", exigindo apenas informar de modo que não atrapalhe a
fruição. *O que mudaria:* toda a ficção gerada escapa da marcação visível, e o regime de
declaração que o resto deste mapa assume simplesmente não se aplica ao objeto deste mapa. É o
sinal fraco que mais poderia inverter as conclusões de R4. *Sinal observável:* a primeira decisão
de autoridade nacional, ou a primeira versão do Código de Conduta do AI Office sobre marcação,
que diga se um jogo narrativo generativo é "obra evidentemente artística". Data provável do
primeiro teste: o fim do prazo de adequação em 02/12/2026.

**SF3 — O achatamento narrativo medido, não opinado.** *Onde foi visto:* Narrative Flattening
(arXiv 2605.27878) medindo, ao longo de quatro checkpoints do OLMo 32B, que o pós-treino comprime
movimento temático, intensidade afetiva e diversidade estilística — com a maior perda contra
ficção literária profissional e convergência entre domínios. *O que mudaria:* se a compressão for
inerente ao alinhamento e não um artefato de receita, então "cada leitor, uma história" é
tecnicamente contraditório com "modelo seguro e comportado", e o produto que R2 promete não pode
existir sem abrir mão da segurança. *Sinal observável:* aparecer um modelo pós-treinado que
**não** comprime as três dimensões — ou uma linha de modelos vendida explicitamente como
"pós-treino para variação", com métrica publicada.

**SF4 — A obra que apaga a si mesma por pedido de dado.** *Onde foi visto:* não em produto, mas
na colisão lógica entre memória longitudinal de personagem (que a survey de jogos nativos de IA
nomeia como problema central) e direito de eliminação de dado pessoal. *O que mudaria:* o
primeiro pedido de exclusão que apagar uma história de duzentas horas cria jurisprudência sobre
se a obra vivida pertence ao leitor ou ao autor. *Sinal observável:* a primeira política de
privacidade de jogo narrativo que trate explicitamente o enredo como dado do titular — ou a
primeira reclamação em autoridade de proteção de dados sobre isso.

**SF5 — A performance de autoria como prova.** *Onde foi visto:* o silêncio de Jamir Nazir diante
do *New York Times* e do *Guardian* pesou tanto na discussão quanto o detector; e Neil Clarke
descrevendo revisão humana como último recurso. *O que mudaria:* se a prova de autoria virar
procedimento sobre a pessoa — entrevista, defesa, escrita presenciada —, o prêmio literário se
aproxima do concurso público e da banca acadêmica, e a obra deixa de bastar. *Sinal observável:*
o primeiro prêmio literário de porte que exija arguição do autor finalista como etapa formal do
regulamento.

**SF6 — A base instalada que não se mexe.** *Onde foi visto:* Ren'Py 8.5.3 (15/05/2026), 8.000+
obras, **nenhuma menção a IA na página do projeto**; IFComp 2026 proibindo conteúdo gerado voltado
ao jogador. *O que mudaria:* é um sinal fraco ao contrário — indica que a comunidade histórica da
ficção interativa pode não ser absorvida, e sim se constituir como reserva declarada. Se a
reserva crescer em vez de encolher, R1 encontra um teto cultural que os números da Steam não
mostram. *Sinal observável:* o número de inscrições na IFComp subir, e não cair, nos dois anos
seguintes à regra de 2026.

### 6.2 Wildcards

**W1 — Um prêmio literário de primeira linha premia uma obra e depois descobre que ela foi
gerada; ou acusa e erra.** *Mecanismo:* o júri lê às cegas, a detecção não é usada (por
consentimento e propriedade artística, como a Commonwealth Foundation argumentou), o vencedor é
anunciado, e a prova aparece depois — ou não aparece nunca, como no caso de 2026, e a dúvida fica.
*Por que é improvável:* porque prêmios grandes têm camadas de leitura e relação prévia com
agentes e editoras, que funcionam como filtro social antes do texto. *O que faria com o mapa:*
acelera `e17.1` (migração para procedimento) em cerca de cinco anos e torna `e16` (selo pago)
obrigatório de fato, não voluntário; e se a acusação for **falsa**, torna `e17.2.1` (litígio por
falso positivo) um efeito de 1ª ordem, não de 3ª. *Sinal precoce:* um prêmio de porte incluir no
regulamento cláusula de revogação retroativa por uso de IA. *Nota honesta:* este wildcard já
**quase** aconteceu em 2026 no Commonwealth Short Story Prize, o que é motivo para tratá-lo como
sinal forte, e não como wildcard — mantive-o aqui porque a versão completa (prova conclusiva,
revogação, consequência) ainda não ocorreu.

**W2 — Um tribunal decide que a tradução sobreposta em tempo de execução não é obra derivada.**
*Mecanismo:* a sobreposição não modifica nem redistribui o arquivo original; ela lê a memória do
processo na máquina do usuário e desenha por cima. Um tribunal pode enquadrar isso como
acessibilidade e uso pessoal, e não como derivação. *Por que é improvável:* porque a indústria de
mídia tem histórico de vitória nesse tipo de disputa e recursos para litigar. *O que faria com o
mapa:* R3 deixa de ter freio jurídico e `e11` e `e11.1` passam a valer para vídeo e livro
também, não só para jogo — e a localização como indústria encolhe muito mais rápido do que
`e12` supõe. *Sinal precoce:* um fabricante de sistema operacional embutir tradução sobreposta
de tela com defesa jurídica pública, ou uma decisão sobre leitores de tela e acessibilidade que
se estenda por analogia.

**W3 — O custo de inferência cai duas ordens de grandeza e o modelo roda inteiro no
dispositivo.** *Mecanismo:* modelo pequeno, especializado em narrativa, rodando local. *Por que é
improvável:* porque a qualidade narrativa hoje depende de contexto longo, e contexto longo é
justamente o que consome memória — o caminho técnico existe, mas não é o que os números de
consistência de 2026 sugerem estar perto. *O que faria com o mapa:* mata `e6` inteiro (custo por
sessão desaparece), mata `e8.1` (sem operador, não há para quem migrar responsabilidade), mata
`e10.2` (sem servidor, a conversa não vira corpus de ninguém) e **devolve R2 ao autor
individual**. É o wildcard que mais melhora o mapa para quem escreve sozinho, e o único que
desfaz três efeitos de uma vez. *Sinal precoce:* um jogo narrativo comercial de porte enviar o
modelo junto com o jogo, sem chamada de rede — e não pedir assinatura.

**W4 — Uma obra gerada se torna best-seller mundial com a coautoria assumida na capa.**
*Mecanismo:* não é qualidade média, é cauda: milhões de obras geradas, uma delas encontra o
público. *Por que é improvável:* porque o Narrative Flattening sugere que a distribuição de
saída do modelo é mais estreita, não mais larga — a cauda é justamente o que o pós-treino corta.
*O que faria com o mapa:* `e18` (coautoria vira gênero) salta de 2036 para dois anos depois do
evento, e `e4` (recusa ao rótulo) se inverte de custo para atrativo. *Sinal precoce:* uma obra
com selo declarado de coautoria entrar em lista de mais vendidos de grande imprensa por mais de
quatro semanas.

## 7. Contra o próprio mapa

O que segue é o resultado da bateria do §6 da skill, aplicada ao mapa já pronto, **com o mapa
alterado em seguida**. O registro auditável está em 7.8.

### 7.1 Pré-mortem: é 2041 e este mapa está errado. Por quê?

**Razão 1 — A geração nunca resolveu a consistência em extensão, e o objeto deste mapa
simplesmente não chegou a existir.** Em 2041, obra narrativa gerada inteira continua sendo
curiosidade de cinco minutos; o que se consolidou foi a IA como ferramenta de produção
(localização, voz, arte) dentro de pipelines humanos, que é exatamente o que os números da Steam
de 2026 já mostravam e ninguém quis ler. Os dados apontam para isso hoje: 0,113 erro por 10 mil
palavras em obras de 8 a 10 mil, queda de 0,20 no Plot-Beat F1 quando o horizonte vai a 200
episódios, e a fronteira não-côncava entre consistência e riqueza do WSE-bench.
*Aponta para:* R1 e R2. **Consequência aplicada:** rebaixei `e7` (prazo 2032→2036, confiança
média→baixa) e `e18` (2033→2036, média→baixa), e mantive `e6.2` (arquitetura híbrida) com sinal
forte — porque, se esta razão se confirmar, `e6.2` é o efeito que sobra de pé.

**Razão 2 — O regime de declaração não pegou porque a isenção de obra artística engoliu a ficção
inteira.** Em 2041, todo mundo declara na loja e ninguém marca legivelmente por máquina, porque
jogo e romance são "obra evidentemente artística" na acepção do Art. 50, e a marcação ficou
restrita a notícia, publicidade e deepfake de pessoa real.
*Aponta para:* R4, e especialmente `e15.1`. **Consequência aplicada:** promovi a isenção a sinal
fraco próprio (SF2) e escrevi `e15.2` como efeito explícito em vez de nota de rodapé, com
confiança média — porque o texto legal está aberto e a interpretação, não.

**Razão 3 — A recusa cultural foi mais forte e mais duradoura do que este mapa supõe.** Em 2041,
"gerado" é um rótulo de baixo prestígio consolidado, como "direto para vídeo" ou "sampler não
creditado" foram, e o mercado se estabilizou com a obra gerada ocupando o rodapé do catálogo. Os
52% de 2026 viraram 70%, o público treinou o olho, e o valor econômico ficou onde já estava em
2026: 30,8% dos lançamentos e 10–27% das vendas.
*Aponta para:* toda a cadeia de R1 que assume normalização. **Consequência aplicada:** removi
`e1.2` e rebaixei `e1` de confiança alta para média; e mantive `e4` (a retroação) com sinal forte
e confiança alta, que é o efeito que essa razão mais reforça.

### 7.2 Extrapolação linear — o que é só "mais do mesmo, maior"

- **`e2` (catálogo cresce, descoberta vira gargalo).** É extrapolação, e assumidamente: o
  catálogo de jogos e de livros já crescia antes. **Não-linearidade que o salva:** o crescimento
  não é do catálogo, é da **razão entre obras publicáveis e horas de atenção humana** — e o dado
  de que a IA responde por 60 a 90% de todo o crescimento de lançamentos da Steam, com receita
  parada, é a assinatura de uma quebra de regime, não de uma curva contínua. **Mantido.**
- **`e12` (localização se reorganiza).** É extrapolação pura da adoção de pós-edição, que já roda
  há uma década. **Não-linearidade que o salva:** o gatilho não é a qualidade da tradução, é o
  **deslocamento do agente** — a tradução passa a poder ser feita pelo leitor, contra a vontade do
  distribuidor. **Mantido**, mas `e12.1.1` foi empurrado para 2043, fora do horizonte.
- **`e14` (escrever para a máquina traduzir).** É extrapolação, e **não** tem não-linearidade: é
  linguagem controlada, que existe desde os anos 1970 em documentação técnica e nunca contaminou a
  ficção. **Rebaixado a confiança baixa**, e o filho `e14.1` (obra intraduzível vira nicho
  declarado) foi **removido**, porque já existe hoje sem qualquer relação com esta raiz.

### 7.3 Velocidade de adoção, confrontada com classe de referência

| Efeito | Prazo original | Referência usada | Veredito |
|---|---|---|---|
| `e5` (obra sem original) | 2033 | tradução neural: 2016 → uso corrente ~2022-24, ~7 anos; qualidade **literária** multilíngue é mais difícil | **empurrado para 2035** |
| `e7` (crítica sem objeto) | 2032 | *Bandersnatch* (2018): narrativa adaptativa de massa não gerou categoria em 7 anos | **empurrado para 2036** e rebaixado |
| `e18` (coautoria vira gênero) | 2033 | fotografia como arte: décadas; sampler: ~15 anos e litígio; autotune: nunca virou crédito | **empurrado para 2036** e rebaixado |
| `e12.1.1` (falta de sênior) | 2040 | revisão tipográfica: posto de entrada some nos anos 1990, falta sentida ~2005, ~10-15 anos | **empurrado para 2043**, fora do horizonte, declarado |
| `e1.1.1` (ensino reabsorvido) | 2038 | currículo universitário muda em ciclos de 8-10 anos, e o gatilho é de 2031 | **empurrado para 2042**, fora do horizonte, declarado |
| `e2` (descoberta vira gargalo) | 2028 | já está acontecendo: 13 → 530 lançamentos/mês com IA declarada | **mantido** |
| `e15` e `e16` (declaração e selo) | 2028 | já em vigor: Art. 50 desde 02/08/2026; Human Authored público desde 02/03/2026 | **mantidos** |

### 7.4 A raiz que não acontece

- **Se R1 não se concretizar** (a obra inteira nunca fica boa o bastante): sobram R3 e R4 quase
  intactos — a tradução sobreposta não depende de gerar história, e o regime de declaração já
  está em vigor por causa de imagem e voz. R2 perde força, mas não morre: *Whispers from the
  Star* existe sem que a obra inteira seja gerada. **Sobra a maior parte do mapa.** Bom sinal.
- **Se R2 não se concretizar** (a obra que se instancia por leitor não sai do nicho): caem `e6`
  a `e10` quase inteiros, o que é um quinto do mapa. R1, R3 e R4 seguem. **Sobra bastante.**
- **Se R3 não se concretizar** (a sobreposição é barrada juridicamente ou tecnicamente): caem
  `e11` a `e14`. Mas `e12` sobrevive por outra via — a localização já se reorganiza por pós-edição
  contratada, sem sobreposição pirata. **Efeito colateral: `e12` falha no teste da causa solta
  (ver 7.5).**
- **Se R4 não se concretizar** (o regime de declaração não pega): caem `e15` a `e18`. Mas `e4`
  (recusa ao rótulo, em R1) sobrevive sozinho, porque a recusa é de público, não de regulador.
  **Sobra o mercado sem a lei.**

Nenhuma raiz é disfarce de outra: cada uma pode falhar isoladamente sem levar o mapa junto. O
caso mais próximo de dependência é R1↔R2 (as duas assumem geração de qualidade), e por isso as
separei pelo que **rompem**, não pelo que usam: R1 rompe a unidade de produção, R2 rompe a
identidade da obra. Uma obra gerada inteira e distribuída como cópia fixa satisfaz R1 sem R2 — é
o que o MangoBox faz.

### 7.5 Teste da causa solta

Removi cada raiz e perguntei se o efeito aconteceria do mesmo jeito por outro motivo.

- **`e1.2`** (o funil de publisher passa a rejeitar por "isso é só um prompt"): publishers já
  rejeitam por falta de esforço demonstrado, e continuariam rejeitando sem R1.
  **Removido** → seção 12.1.
- **`e14.1`** (obra intraduzível vira nicho declarado): já existe, e existe por razões estéticas
  anteriores a qualquer máquina. **Removido** → seção 12.1.
- **`e12`** (localização se reorganiza em torno de revisão): **aconteceria sem R3**, por
  pós-edição contratada. Não removi porque o mecanismo muda de dono — sem R3, quem decide é o
  cliente; com R3, quem decide é o leitor —, mas **rebaixei a confiança do filho `e12.1` de alta
  para média** e registro aqui que este é o ramo mais frágil do mapa quanto à atribuição causal.
- **`e10`** (obra vira controladora de dado pessoal): sobrevive ao teste, porque a memória
  longitudinal de personagem só existe se a obra se instancia por leitor. Mantido.
- **`e16`** (selo pago): sobrevive, porque o selo do humano só faz sentido contra a
  indistinguibilidade que R4 institui. Mantido.

### 7.6 Suposições escondidas

1. **Que o custo de inferência continua caindo, mas não despenca.** Se despencar (W3), três
   efeitos morrem. Se **subir** — energia cara, escassez de chip —, `e6` vira o efeito dominante
   do mapa e R2 não sai do nicho. O mapa está escrito supondo a faixa do meio, o que é a
   suposição mais confortável e menos justificada que ele tem.
2. **Que o modelo aberto continua aberto.** Todo o ramo do autor individual — `e8.1.1`, W3,
   parte de `e11` — supõe que existirá modelo bom rodando fora de plataforma. Se a fronteira
   fechar, obra generativa passa a ser necessariamente serviço de terceiro, e `e8.1.1` (o autor
   solo empurrado para fora) deixa de ser efeito de 3ª ordem e vira condição de partida.
3. **Que a plataforma continua permitindo.** Valve podia ter proibido em vez de criar campo de
   declaração. Criou campo. Se uma loja grande proibir obra gerada em execução, R2 perde o único
   canal comercial que tem.
4. **Que o público continua sendo o árbitro.** O mapa supõe que a recusa do público (`e4`, `e9`)
   tem força econômica. Se a distribuição se concentrar mais — recomendação algorítmica decidindo
   o que se vê —, a recusa vira ruído e `e4` some.
5. **Que "obra" continua sendo uma categoria com que as pessoas se importam.** É a suposição mais
   invisível deste mapa e a que o tema mais ameaça. Toda a seção R4 supõe que alguém quer saber
   quem escreveu. Talvez, em 2041, não queira — e nesse caso R4 inteira é ansiedade de 2026
   projetada no futuro.

### 7.7 Viés do autor

**Viés declarado no briefing:** neutro. **Viés real que consigo nomear:**

- **Viés de quem escreve.** Este mapa dá peso demais à autoria, à crítica e ao prêmio — objetos
  que importam muito a quem vive de texto e muito pouco a quem consome novela visual no celular.
  Um mapa escrito por alguém do produto teria mais `e6` e menos `e17`. Nomeio: a raiz R4 ocupa um
  quarto do mapa com 4 efeitos de 1ª ordem, e é discutível que a autoria seja um quarto do
  problema.
- **Viés de ferramenta aberta.** Escolhi o LunaTranslator como âncora de R3 em parte por ser
  bonito como caso — pequeno, livre, de consequência enorme. Um levantamento mais frio talvez
  achasse que a sobreposição não licenciada é marginal e que o que importa é a pós-edição
  industrial, que é chata e é onde está o dinheiro.
- **Viés de proximidade com a zona de interesse.** "Simulação e mundos" puxa o mapa para o jogo.
  Quadrinho, audiolivro, podcast ficcional e roteiro publicitário — todos afetados — aparecem
  pouco. O webtoon entrou só porque a Coreia legislou.
- **Viés de gostar do tema.** Efeitos como `e7.1.1` (arquivar a obra exige arquivar o modelo) e
  `e10.2.1` (histórias que não aprendem) estão aqui porque são bonitos de pensar, não porque a
  evidência os sustente. Ambos estão com sinal fraco e confiança baixa, que é o mínimo honesto.

### 7.8 Registro de alterações — antes → depois

A bateria derrubou ou rebaixou pelo menos um efeito em cada raiz, como a cota exige.

**R1 — obra instanciada a partir de intenção curta**
- `e1`: confiança **alta → media**, porque a classe de referência (vertical slice substituindo o
  design document) mostra substituição parcial, não total, em cinco anos.
- `e1.2`: **removido** (vai para a seção 12.1), porque falha no teste da causa solta — publishers
  já rejeitam pitch sem esforço demonstrado, sem qualquer relação com esta raiz.
- `e5`: prazo **2033 → 2035**, porque a referência da tradução neural (~7 anos de "funciona" a
  "corrente") é o piso, e qualidade literária multilíngue é mais difícil que qualidade utilitária.
- `e1.1.1`: prazo **2038 → 2042**, porque currículo muda em ciclos de 8-10 anos e o gatilho é de
  2031. Fica **fora do horizonte de 2041**, declarado.

**R2 — obra instanciada diferente por leitor**
- `e7`: prazo **2032 → 2036** e confiança **media → baixa**, porque *Bandersnatch* (2018) mostrou
  que narrativa adaptativa de massa pode não gerar categoria em sete anos, e a crítica só perde o
  objeto se houver volume.
- `e7.1`: prazo **2034 → 2038** e `e7.1.1`: **2038 → 2040**, por arrasto do pai.
- `e7.2`: prazo **2033 → 2035** e confiança **media → baixa**, mesma razão.
- `e6.2`: **mantido** com sinal forte e confiança alta, contra a regra de que 2ª ordem não tem
  alta — justificado no texto por três medidas independentes (survey, WSE-bench, ConStory-Bench).

**R3 — tradução sobreposta**
- `e14`: confiança **media → baixa**, porque é extrapolação linear sem mecanismo de
  não-linearidade: linguagem controlada existe há cinquenta anos e nunca alcançou a ficção.
- `e14.1`: **removido** (seção 12.1), porque "obra intraduzível vira nicho" já é verdade hoje,
  por razões anteriores a esta raiz.
- `e12.1`: confiança **alta → media**, porque o ramo `e12` inteiro falha parcialmente no teste da
  causa solta (aconteceria por pós-edição contratada).
- `e12.1.1`: prazo **2040 → 2043**, pela referência da revisão tipográfica. **Fora do horizonte**,
  declarado.
- `e11.2`: confiança **alta → media**, porque confiança alta em 2ª ordem exige evidência direta, e
  o que tenho é inferência a partir do funcionamento do LunaTranslator.

**R4 — autoria como declaração**
- `e18`: prazo **2033 → 2036** e confiança **media → baixa**, pelas três classes de referência de
  aceitação de técnica nova em arte (fotografia, sampler, autotune) — nenhuma abaixo de 15 anos,
  uma delas nunca concluída.
- `e15.1.1`: confiança **media → baixa**, porque padrão de proveniência embutido depende de
  coordenação entre fabricantes que hoje não existe.
- `e15.2`: **promovido** de nota de rodapé a efeito de 2ª ordem com filho, porque a isenção de
  obra artística é o mecanismo mais consequente e menos discutido de toda a raiz.

**Calibração após as alterações.** Ordem 1: 9 alta · 6 media · 3 baixa. Ordem 2: 1 alta · 28
media · 8 baixa. Ordem 3: 0 alta · 0 media · 21 baixa. A distribuição cai com a ordem, como
deve. A única confiança alta de 2ª ordem é `e6.2`, e está justificada no texto.

**A bateria derrubou alguma coisa?** Sim: dois efeitos removidos, seis rebaixados de confiança e
sete prazos empurrados, dois deles para fora do horizonte. Não escrevo aqui "a bateria não
derrubou nada".

## 8. O que a máquina errou

Eu sou a máquina. Sobre este trabalho, nesta rodada:

1. **Citei a lição do GDC 2026 sem ter aberto a fonte primária.** A frase "liberdade
   conversacional não é liberdade narrativa" e o dado de custo por sessão vieram de resumo de
   busca sobre o texto de Hilary Mason e Eleanor Todd; tanto o artigo no Medium quanto a página
   da sessão na GDC devolveram 403. **Corrigi reescrevendo `e9` inteiro para se apoiar em três
   fontes que abri** (survey arXiv 2607.00527v2, WSE-bench, ConStory-Bench), e a frase não aparece
   como citação em lugar nenhum do mapa. A tentação de citá-la assim mesmo foi real: ela é boa
   demais e resume o efeito melhor do que eu.

2. **Usei um dado da Nimdzi sobre localização de jogos que não consegui abrir.** A frase de que
   verticais como videogame "caíram no ranking, fortemente impactadas por melhorias rápidas na
   localização por IA" apareceu em resultado de busca; a página da Nimdzi devolveu 403. **Não
   entrou no documento** — `e12` está ancorado apenas no estudo dos 53.597 lançamentos da Steam,
   que abri. Registro aqui porque a tentação de citar "Nimdzi 2026" como se eu tivesse lido é
   exatamente o erro que esta seção existe para pegar.

3. **`e8.2` (classificação indicativa brasileira) não tem fonte aberta.** Escrevi um efeito sobre
   o regime brasileiro de classificação indicativa sem ter aberto uma única fonte sobre ele. Está
   com sinal fraco e confiança baixa, mas isso não basta: é inferência a partir do que sei de
   memória, e a memória é exatamente o que não deveria sustentar afirmação em mapa com fonte.
   Quem retomar, comece por aí.

4. **Atribuí ao MangoBox mais peso do que a evidência sustenta.** É a única âncora de produto para
   R1 e tem uma página "about" de uma frase, sem número de usuário, de obra ou de preço. Construí
   uma raiz inteira sobre um objeto que não consigo dimensionar. O que compensa parcialmente é
   que a raiz R1 não depende do MangoBox — depende do mecanismo —, mas se alguém perguntar "quantas
   obras assim existem?", a resposta honesta é que não sei.

5. **Datei mal uma fonte brasileira na primeira versão desta seção.** A audiência sobre dublagem
   e IA na Câmara é de **29/08/2024**, não de 2026; eu a havia tratado como recente porque
   apareceu numa busca com termos de 2026. Corrigido no texto e na seção 11. O PL 2338/23 segue em
   tramitação, e `e13.2` está escrito como condicional justamente por isso.

6. **A frase "um erro de consistência por obra curta" é minha, não do paper.** O ConStory-Bench
   reporta 0,113 erro por 10 mil palavras em histórias de 8 a 10 mil palavras; multiplicar isso e
   dizer "cerca de um erro por obra" é uma leitura razoável, mas é **minha**, e um revisor pode
   objetar que a métrica não se lê assim. Deixei a conta explícita no texto para que a objeção
   seja possível, em vez de esconder o arredondamento.

7. **Nomeei prazos com precisão que a evidência não tem.** "2029", "2031", "2036" sugerem uma
   resolução que não existe: em quase todos os casos, a faixa honesta seria de três a cinco anos.
   Usei ano cheio porque o formato exige inteiro, e cada prazo tem classe de referência escrita no
   §5.1 — mas quem ler a tabela sem ler a prosa vai atribuir ao mapa uma precisão que ele não tem.

## 9. Três cenários para 2041

**Provável.** A obra narrativa gerada inteira existe e é abundante, e quase nada dela é lido. O
desenho que venceu é o híbrido: regra no controle, modelo na superfície — o mesmo que os
benchmarks de 2026 já indicavam. O que mudou de verdade em quinze anos não foi a história: foi a
língua. A tradução sobreposta virou recurso de plataforma e ninguém mais decide em que idioma
lança, porque a decisão não retém ninguém; a localização se reorganizou em torno de adaptação
cultural e de voz, que é a única camada com dono contratado, e há uma geração faltando de
tradutores seniores. A autoria virou declaração: toda loja, prêmio e editora tem seu campo,
nenhum campo fala com o outro, o selo humano custa dinheiro e ninguém o audita. A suspeita é a
condição normal de leitura, e o custo dela recai sobre quem não tem nome feito. Escritores de
jogo são contratados para dizer o que o sistema não pode dizer. *Sinal precoce de que estamos
entrando neste cenário:* uma loja grande embutir tradução sobreposta como recurso de plataforma,
enquanto a fatia de receita dos jogos com IA declarada continua abaixo de um terço.

**Desejável.** A geração ficou onde é boa — atravessar a língua, baixar o custo de mostrar — e a
coautoria virou ofício com convenção de crédito, como a montagem e a direção de fotografia
viraram no cinema. Existe uma ficha técnica: quem definiu a intenção, quem curou, quem revisou,
qual modelo. A prova de autoria é de processo, não de detecção, e é **do autor** — um registro que
ele controla e exibe se quiser, não uma vigilância que a plataforma opera sobre ele. Prêmios
pararam de proibir e passaram a separar, e a categoria de coautoria assumida tem prestígio
próprio. A tradução sobreposta foi absorvida como acessibilidade, com remuneração pactuada para
quem é traduzido. O que teve de ser feito para chegar aqui: o Código de Conduta do AI Office
fixou um padrão de proveniência **embutido no arquivo e legível por qualquer um**, em vez de
deixar cada plataforma com o seu campo; e as instituições aceitaram que não conseguem verificar,
trocando detecção por procedimento antes de destruir a reputação de alguém por falso positivo.
*Sinal precoce:* um padrão de proveniência adotado por mais de uma plataforma grande **e** por um
prêmio literário, no mesmo ano.

**Indesejável.** A escrita virou atividade logada. Para publicar, provar; para provar, registrar;
para registrar, usar a ferramenta que a plataforma aceita — e a plataforma guarda o histórico de
composição de todo mundo. A certificação virou barreira de entrada: quem tem instituição nacional
que certifique é presumido autor, quem não tem é presumido gerado, e o Sul global escreve sob
suspeita. A obra narrativa virou serviço regulado, e o autor individual não consegue publicar
ficção generativa sem operador. A crítica sumiu porque não há objeto comum, e o que restou de
conversa sobre obra acontece dentro de comunidades que fixaram uma execução canônica por
convenção — cada uma com a sua, incomunicáveis entre si. A dublagem em português acabou por dois
lados ao mesmo tempo: síntese barata onde não há lei, e fuga do mercado onde há. *Sinal precoce
deste cenário:* a primeira plataforma que exigir histórico de composição como condição de
publicação — e for aceita sem reação, por ser apresentada como proteção ao autor.

## 10. O experimento

### A Mesma História Duas Vezes

**O que é.** Uma obra narrativa curta, gerada, **executada duas vezes com leitores diferentes**, e
um protocolo de leitura cruzada em sala. Três partes:

1. **O gerador.** Uma novela visual curta (20-30 minutos) gerada a partir de uma intenção de duas
   frases, com um **caderno de invariantes** escrito à mão antes: dez a quinze fatos que não podem
   mudar entre execuções (quem é quem, o que aconteceu antes, o que é impossível neste mundo).
2. **O duplo.** A mesma obra executada por duas pessoas, com semente e versão de modelo
   registradas. As duas execuções são gravadas na íntegra: entrada do leitor, saída do sistema,
   tempo, custo de inferência por sessão.
3. **O confronto.** As duas pessoas conversam sobre "o livro que leram" sem ver a execução da
   outra, com uma terceira pessoa anotando **onde a conversa quebra** — em que momento exato as
   duas descobrem que não leram a mesma coisa, e o que fazem em seguida.

**Que pergunta sobre o futuro ele ajuda a responder.** A de `e7` e `e7.2`, que é a mais incerta do
mapa e a que menos se resolve com bibliografia: **ainda existe "a obra" quando ela se instancia
diferente para cada leitor, e as pessoas conseguem conversar sobre ela?** A hipótese do mapa é que
não — e que as comunidades respondem fixando uma execução canônica por convenção social. O
experimento testa exatamente isso, em pequeno, com gente de verdade.

**Que tecnologia emergente ele usa, e por que não dá com a madura.** Usa geração multimodal de
obra inteira a partir de intenção curta (R1) e instanciação por leitor (R2). **Com tecnologia
madura não dá**, e a razão é precisa: em Ren'Py ou Twine, as duas execuções seriam dois caminhos
de um mesmo grafo escrito por alguém — as duas pessoas teriam lido **a mesma obra por rotas
diferentes**, que é uma experiência que existe desde os livros-jogos dos anos 1980 e sobre a qual
não há nada de novo a descobrir. O que o experimento precisa é que **o texto que a segunda pessoa
leu nunca tenha existido antes de ela ler**, e isso nenhuma ferramenta madura faz.

**O que a turma faz ao testar em sala.** Cada dupla executa e grava. Depois, em plenário:
(a) medimos quantos dos invariantes do caderno foram violados em cada execução — é a versão de
sala do ConStory-Bench, e o número costuma surpreender; (b) cronometramos **quanto tempo a
conversa leva até quebrar**; (c) a turma decide, coletivamente e por argumento, qual execução vai
ser a canônica — e o que exatamente ficou de fora quando decidiu; (d) cada pessoa escreve três
linhas de resenha e vemos se as resenhas são comparáveis entre si. O item (c) é o coração do
experimento: é ali que `e7.2` acontece ou não acontece na frente de todo mundo.

**O que seria um resultado que me faria mudar de ideia.** Dois, e são simétricos:

- **Se a conversa NÃO quebrar** — se as duas pessoas discutirem a obra por vinte minutos sem
  encontrar incompatibilidade, ou encontrando e não se importando —, então `e7` está errado, `e7.2`
  é desnecessário, e a suposição implícita de todo o ramo R2 (que a identidade da obra importa
  para o leitor) cai. Nesse caso o mapa perde um quinto do que afirma, e eu teria descoberto que
  a ansiedade sobre "a obra" é de quem escreve sobre obras, não de quem as consome — que é
  exatamente o viés que declarei em 7.7.
- **Se os invariantes NÃO forem violados** — se um caderno de dez a quinze fatos escrito à mão
  bastar para segurar uma obra de trinta minutos sem erro —, então o teto de consistência que
  sustenta `e6.2`, `e9` e boa parte de R1 é mais alto do que os benchmarks de 2026 sugerem, e os
  prazos de R1 e R2 precisam ser puxados para mais perto, não empurrados.

**Custo e viabilidade.** Roda em uma aula com ferramenta de navegador e um modelo comercial. O
caderno de invariantes é escrito na aula anterior, em vinte minutos. O que **não** dá para
improvisar é a gravação completa das duas execuções: sem ela, o item (a) vira impressão, e
impressão é o que este experimento existe para substituir.

## 11. Fontes

Vinte e quatro fontes abertas e lidas em 12/09/2026. Fonte que não abriu não entrou — as que
devolveram 403 e o que eu teria citado delas estão em 12.4. Todos os links foram conferidos com o
mesmo método do verificador; a saída está em 12.6.

1. **IFComp — regras da 32ª edição (2026).** `https://ifcomp.org/rules/`
   Sustenta a regra de que "todo o conteúdo voltado ao jogador precisa ser inteiramente criado
   por humanos, incluindo arte de capa, prosa e todos os assets", com IA permitida só para
   assistência ao desenvolvimento. *Confiabilidade: alta — é o regulamento na fonte, não
   noticiado.*

2. **MangoBox — página "about".** `https://www.mangobox.ai/about`
   Sustenta a existência do produto que gera novela visual jogável a partir de prompt. *Confiabilidade:
   baixa como evidência de escala — é material do próprio fabricante, sem número de usuário, obra
   ou preço. Usada só para atestar existência.*

3. **LunaTranslator — documentação oficial.** `https://docs.lunatranslator.org/en/`
   Sustenta os métodos de extração (hook de memória, OCR embutido, hook de emuladores NS/PSP/PSV/PS2),
   os motores de tradução incluindo LLM, e o embutimento da tradução na tela. GPLv3. *Confiabilidade:
   alta para o que o software faz; é documentação do projeto.*

4. **Llama & Griffin — The AI Disclosure Report, Steam Next Fest, junho de 2026.**
   `https://www.llamagriffin.com/Data/SteamNextFestJune2026/part-2.html`
   Sustenta 26,5% de demos com IA declarada no pool rastreado (4.382 demos), ~20% no evento
   inteiro, ~60% das declarações sendo arte visual, e escrita/diálogo entre as menores fatias.
   *Confiabilidade: média-alta — metodologia declarada (GDCo, SteamDB, declaração de
   desenvolvedor), mas é análise privada, não auditada.*

5. **Cinevva — estudo de Sulka Haro sobre declaração de IA na Steam (20/07/2026).**
   `https://app.cinevva.com/news/2026-07-20-steam-ai-disclosure-study`
   Sustenta os números centrais deste mapa: 53.597 lançamentos analisados; 10,9% (2024), 19,9%
   (2025) e 30,8% (2026) de lançamentos com IA declarada; 10-27% das vendas estimadas contra 3-6%
   em 2024; crescimento de 13 para ~530 lançamentos mensais; 60-90% de todo o crescimento de
   lançamentos; e a quebra por tipo — visual 72%, voz 8%, localização 6% entre os malsucedidos,
   contra voz 24% e localização 18% entre os bem-sucedidos. *Confiabilidade: média-alta — amostra
   grande e método declarado, mas "sucesso" é definição do autor do estudo e as vendas são
   estimadas, não reportadas.*

6. **Steam — página de *Whispers from the Star* (Anuttacon).**
   `https://store.steampowered.com/app/3730100/Whispers_from_the_Star/`
   Sustenta: lançamento em 14/08/2025, R$ 32,99, 1.659 resenhas com 80% positivas (leitura de
   12/09/2026), a declaração de conversas movidas a IA em colaboração com ator, e o aviso de que
   o diálogo pode envolver temas sensíveis conforme a interação. *Confiabilidade: alta para os
   fatos comerciais; a declaração de IA é do próprio estúdio.*

7. **AI-Native Games: A Survey and Roadmap (arXiv 2607.00527v2, 03/07/2026).**
   `https://arxiv.org/html/2607.00527v2`
   Xu, Meng, Xu, Verbrugge, Lucas e Zhao. Sustenta: 53 jogos e protótipos analisados de 98
   candidatos; aventura narrativa 45,3% (n=24); narrativa generativa/mestre de jogo 26,4% das
   mecânicas; e a lista de desafios abertos (geração controlável por regra, instabilidade de
   memória, latência e economia, dependência de modelo, moderação em execução). *Confiabilidade:
   alta para o levantamento; é preprint, sem revisão por pares confirmada.*

8. **ConStory-Bench — leaderboard (atualizado em 05/03/2026; arXiv 2603.05890).**
   `https://picrew.github.io/constory-bench.github.io/`
   Sustenta: cinco categorias e 19 subtipos de erro; histórias de 8-10 mil palavras; melhor
   modelo (GPT-5-Reasoning) com 0,113 erro por 10 mil palavras; concentração de erros em
   consistência factual e linha do tempo. *Confiabilidade: média-alta — benchmark público com
   pipeline de avaliação automática, mas com julgamento por modelo, o que herda o viés do juiz.*

9. **WSE-bench — When Stories Evolve (arXiv 2608.15654, 16/08/2026).**
   `https://arxiv.org/abs/2608.15654`
   Chen, Li, Cai, Li, Yan e Li. Sustenta: cobertura, consistência e riqueza como eixos; fronteira
   de Pareto **não-côncava** entre consistência e riqueza; escala melhorando geração sustentada
   sem melhorar coerência; restrição estrutural enriquecendo e encurtando. *Confiabilidade: média
   — preprint recente; sustenta o mecanismo, não um número de mercado.*

10. **Narrative Flattening (arXiv 2605.27878, 27/05/2026, rev. 07/09/2026).**
    `https://arxiv.org/abs/2605.27878`
    Li, Zhu, Wu, Bao e Evans. Sustenta: quatro checkpoints do OLMo 32B (Base, SFT, DPO, RLVR);
    três fontes pareadas (StoryStar, TMAS, *The New Yorker*); compressão progressiva de movimento
    temático, prevalência afetiva e diversidade linguística; maior perda contra ficção literária
    profissional; convergência entre domínios. *Confiabilidade: média-alta — desenho experimental
    claro, mas uma única família de modelo aberto, o que limita a generalização.*

11. **Elsewise (arXiv 2601.15295, 10/09/2026).** `https://arxiv.org/abs/2601.15295`
    Wang, Chung, Roemmele, Sun, Wang, Almeda, Halperin, Lu e Kreminski. Sustenta que o problema de
    ferramenta em 2026 é visualizar o espaço de possibilidades da narrativa ramificada, e não
    gerar texto. *Confiabilidade: média — usei a formulação do problema, não resultados
    quantitativos, que não consegui extrair do PDF.*

12. **The Conversation — o que as acusações de IA no Commonwealth Prize significam (21/05/2026).**
    `https://theconversation.com/what-do-the-commonwealth-writers-prize-ai-allegations-mean-for-prizes-and-short-stories-283470`
    Sustenta todo o caso Jamir Nazir: Pangram alegando 100%, a defesa de Razmi Farook sobre
    consentimento e propriedade artística e o "princípio de confiança", a consulta de Sigrid
    Rausing a um modelo, e o silêncio do autor diante do NYT e do Guardian. *Confiabilidade:
    alta — veículo acadêmico com autoria identificada; e o próprio texto declara que a detecção
    é inconclusiva, em vez de afirmar culpa.*

13. **Clarkesworld — Neil Clarke, "The Future of Dealing with AI Submissions" (ago/2025).**
    `https://clarkesworldmagazine.com/clarke_08_25/`
    Sustenta a migração do texto de robô para a submissão híbrida, a revisão humana como último
    recurso, e a frase "a tecnologia nunca deve ter a última palavra". Os números de fevereiro de
    2023 (500 geradas contra 700 legítimas; spam antes não passava de 25/mês) vêm da cobertura da
    época referenciada pelo próprio editor. *Confiabilidade: alta — é o editor descrevendo o
    próprio processo.*

14. **Authors Guild — expansão da certificação "Human Authored" (02/03/2026).**
    `https://authorsguild.org/news/human-authored-certification-expands-to-all-authors/`
    Sustenta: beta para sócios em janeiro de 2025, público em 02/03/2026, US$ 10 por título para
    não sócios, gratuito para sócios, verificação de identidade por terceiro, limite de 10 títulos
    por ano, e o critério de uso permitido (de minimis; sumário, índice, pesquisa, brainstorming e
    esboço liberados). *Confiabilidade: alta para as regras — é a fonte primária; baixa para
    "milhares de livros certificados", que é alegação da própria entidade sem número.*

15. **EU AI Act — guia do Artigo 50.** `https://artificialintelligenceact.eu/transparency-rules-article-50/`
    Sustenta: aplicação desde 02/08/2026, prazo até 02/12/2026 para sistemas implantados,
    marcação legível por máquina, isenção para função assistiva de edição, e a **isenção de obra
    evidentemente artística, criativa, satírica ou ficcional**, que é o mecanismo central de
    `e15.2`. *Confiabilidade: alta — é o compêndio de referência do texto legal, com o artigo
    citado; para uso jurídico, conferir o Jornal Oficial.*

16. **Anime News Network — a nova lei de IA da Coreia e o webtoon (24/01/2026).**
    `https://www.animenewsnetwork.com/news/2026-01-24/south-korea-new-ai-law-raises-questions-for-webtoon-creators-platforms/.233383`
    Sustenta: obrigação de divulgar conteúdo gerado, marca d'água **não visível e legível por
    máquina** admitida para webtoon e animação, rótulo visível mais rigoroso para deepfake, e um
    ano de carência com orientação em vez de multa. *Confiabilidade: média-alta — veículo
    especializado; o texto declara não saber os valores de multa nem se webtoon é setor de alto
    impacto.*

17. **Korea Times — a indústria de webtoon e a IA (06/11/2025).**
    `https://www.koreatimes.co.kr/lifestyle/trends/20251106/webtoon-industry-seeks-ai-edge-amid-legal-ethical-challenges`
    Sustenta a pesquisa da Korea Creative Content Agency com 800 quadrinistas: 18,3% já usaram IA
    generativa, 36,1% pretendem usar, 63,8% das empresas pretendem adotar, 41,3% apontam questão
    jurídica como maior peso, 31,3% temem perda de originalidade; e o boicote de assinatura contra
    a obra gerada da Naver Webtoon. *Confiabilidade: alta para os números da pesquisa (agência
    pública); média para o relato do boicote, que é descrição jornalística sem número.*

18. **itch.io — Generative AI Disclosure tagging (20/11/2024).**
    `https://itch.io/t/4309690/generative-ai-disclosure-tagging`
    Sustenta: o campo e as quatro subcategorias (Graphics, Sound, Text & Dialog, Code),
    obrigatoriedade para quem vende assets e apenas encorajamento para jogos, tags automáticas
    "AI Generated" e "No AI", e a sanção de perda de indexação. *Confiabilidade: alta — é o
    anúncio da plataforma.*

19. **Game Developer — Valve ajusta e esclarece as regras de declaração de IA (16/01/2026).**
    `https://www.gamedeveloper.com/business/valve-tweaks-and-clarifies-ai-disclosure-rules-for-steam`
    Sustenta a reescrita de 16/01/2026: ferramenta de fluxo de trabalho isenta; "IA para gerar
    conteúdo para o jogo" e "conteúdo de IA gerado durante o jogo" obrigatórios; aplicação a
    material de loja e marketing. *Confiabilidade: alta — veículo de referência do setor, citando
    o texto da política.*

20. **GDC — State of the Game Industry 2026.**
    `https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/`
    Sustenta: mais de 2.300 profissionais ouvidos; 52% dizendo que a IA generativa tem impacto
    negativo (30% em 2025, 18% em 2024); 7% positivo (13% em 2025); 30% dos estúdios usando
    ferramentas de IA contra 58% em publishers, suporte e marketing; e a quebra por disciplina —
    arte 64%, **design e narrativa 63%**, programação 59%. *Confiabilidade: média-alta — amostra
    grande e série histórica, mas é autosseleção de respondentes da própria GDC.*

21. **Câmara dos Deputados — dublagem pede proteção legal contra voz gerada por IA (29/08/2024).**
    `https://www.camara.leg.br/noticias/1092791-segmento-de-dublagem-pede-protecao-legal-contra-uso-de-voz-gerada-por-inteligencia-artificial/`
    Sustenta o pedido do setor na audiência: aprovação do PL 2338/23 (remuneração por direito
    autoral quando a obra alimenta IA) e do PL 1376/22 (dublagem e legendagem por empresas e
    profissionais sediados no Brasil), reconhecimento da dublagem como patrimônio imaterial, e os
    atores envolvidos (Movimento Dublagem Viva, Clube da Voz, Interartis). **Atenção à data: é de
    2024, não de 2026** — ver seção 8, item 5. *Confiabilidade: alta — agência oficial da Câmara;
    não traz número sobre o tamanho do setor.*

22. **Ren'Py — página do projeto.** `https://www.renpy.org/`
    Sustenta: versão 8.5.3 ("We Can Go to the Moon", 15/05/2026) e "mais de 8.000 novelas visuais,
    jogos e outras obras". E sustenta, por ausência, o sinal fraco SF6: nenhuma menção a IA.
    *Confiabilidade: alta para versão e data; a contagem de obras é alegação do projeto.*

23. **Phys.org — rótulos de divulgação de IA podem fazer mais mal que bem (09/03/2026).**
    `https://phys.org/news/2026-03-ai-disclosure-good.html`
    Sustenta o estudo publicado no JCOM pela Universidade da Academia Chinesa de Ciências Sociais:
    433 participantes recrutados pela Credamo entre março e maio de 2024, e o "efeito de
    cruzamento verdade-falsidade" — o rótulo de IA derruba a credibilidade da informação correta e
    eleva a da falsa. *Confiabilidade: média — é divulgação científica de um estudo, e o objeto é
    credibilidade de informação, não fruição de ficção; usei como indício do mecanismo do rótulo,
    não como prova sobre obra narrativa.*

24. **Diário de Pernambuco — Abragames leva 78 estúdios à gamescom 2026 (21/08/2026).**
    `https://www.diariodepernambuco.com.br/tecnologia/2026/08/11721910-abragames-leva-78-estudios-a-gamescom-2026-e-estreia-espaco-dedicado-a-jogos-indies-nacionais.html`
    Sustenta a nota brasileira de `e12.2`: 78 estúdios e empresas, mais de US$ 138 milhões em
    negócios globais, **55% da receita dos estúdios nacionais vinda do mercado externo**, 35
    títulos no pavilhão indie. *Confiabilidade: média — jornal de referência citando dados da
    Abragames, que é parte interessada.*

## 12. Anexo — o levantamento bruto

### 12.1 Efeitos cortados na bateria da seção 7

Nada foi cortado em silêncio. Os dois removidos, na íntegra como estavam escritos:

```yaml
# REMOVIDO de R1, era e1.2 — falha no teste da causa solta (§7.5)
- id: e1.2
  ordem: 2
  efeito: O funil de seleção de publisher passa a rejeitar projetos por serem apenas um prompt, criando um critério explícito de esforço humano no pitch
  sinal: fraco
  prazo: 2032
  confianca: baixa
# Motivo: publishers já rejeitam pitch sem esforço demonstrado, e continuariam rejeitando sem
# esta raiz. O efeito descreve uma prática existente com vocabulário novo.

# REMOVIDO de R3, era e14.1 — falha no teste da causa solta (§7.5)
- id: e14.1
  ordem: 2
  efeito: A perda estilística vira escolha explícita de produto e obra intraduzível vira nicho declarado
  sinal: fraco
  prazo: 2035
  confianca: baixa
# Motivo: já é verdade hoje, e por razões estéticas anteriores a qualquer tradução automática.
# Joyce, Guimarães Rosa e Rosa Montero não precisaram de LLM para serem intraduzíveis de propósito.
```

**Efeitos que escrevi e descartei antes mesmo da bateria**, por serem os genéricos que a skill
proíbe — registro para que a próxima rodada não os reinvente:

- *"Cursos de escrita criativa reorganizam o currículo."* Sem nome de curso, sem mecanismo, e
  serve igualmente aos 19 temas da disciplina. Sobrevive apenas na forma específica de `e1.1.1`,
  onde o mecanismo é a perda do roteiro como artefato destacável.
- *"Reguladores criam categoria jurídica nova para obra gerada."* Substituído por efeitos com
  regulador nomeado e mecanismo específico: `e15.1` (o atrito entre o campo da Valve e a marcação
  do Art. 50) e `e15.2` (a isenção de obra artística).
- *"Surge a profissão de curador de IA narrativa."* Sem mecanismo e sem ator. Substituído por
  `e3` (contratação por definição de restrição) e `e3.2.1` (auditoria narrativa terceirizada),
  que têm ambos.
- *"Mudanças no mercado de trabalho criativo."* Descartado inteiro. O que sobrou dele está na
  tabela "quem perde" da seção 5.2, com nome e efeito.
- *"A IA democratiza a criação de histórias."* Descartado: é slogan, não efeito. O que a
  evidência sustenta é o oposto em um ponto específico — `e2.2.1`, a barreira de entrada subindo
  para o estreante justamente onde o custo de produzir caiu.

### 12.2 O que o briefing não cobriu, assumido por mim

O bloco `briefing:` veio completo nos campos da entrevista (§0), então não houve rebaixamento
geral de confiança. O que ele **não** cobriu e eu assumi, declarado aqui como manda a skill:

1. **Profundidade de derivação por ramo.** Assumi 3 a 6 efeitos de 1ª ordem por raiz (saíram 4 a
   5), 1 a 3 filhos e 1 a 2 netos — o volume que a skill recomenda.
2. **O que conta como "o que já é comum em produto de massa".** O briefing dá a régua sem operá-la.
   Operei assim: se aparece em mais de 30% dos lançamentos comerciais **e** o uso não é contestado
   como novidade, é maduro. Foi por essa régua que a geração de imagem como asset saiu (≈60% das
   declarações da Steam) e a geração da história inteira ficou (menor fatia das declarações).
3. **Se "coautoria" inclui coautoria entre humanos mediada por máquina.** Assumi que **não**:
   o mapa trata da coautoria humano-máquina. Escrita colaborativa entre pessoas com assistência de
   modelo ficou fora, e é um ramo inteiro que outra rodada pode abrir.
4. **Se literatura impressa entra.** Assumi que **sim**, parcialmente — R4 é majoritariamente
   literária (Authors Guild, Jabuti, Commonwealth, Clarkesworld) porque é ali que o regime de
   declaração está mais avançado. Um mapa só de jogo teria R4 muito mais magra.
5. **O tratamento do vizinho tema 7 (NPCs e mundos vivos).** Assumi a fronteira que o enunciado
   fixa: o personagem que age dentro do mundo é tema 7; aqui o objeto é a **história como coisa
   gerada**. Por isso `e6.2` (arquitetura híbrida) aparece como efeito sobre o desenho da obra, e
   não como tese sobre agentes.
6. **Moeda e mercado de referência para preço.** Usei o que a fonte trazia (R$ 32,99 na Steam
   brasileira, US$ 10 do Authors Guild) sem converter, para não introduzir número que não está em
   fonte nenhuma.

### 12.3 Candidatos a disrupção-raiz examinados e a decisão sobre cada um

| Candidato | Decisão | Motivo, em uma linha |
|---|---|---|
| Engine de novela visual (Ren'Py, Monogatari) | **recusado** | maioria há uma década; 8.000+ obras só em Ren'Py |
| Ferramenta de diálogo ramificado (Twine, Inform 7, YarnSpinner, Arrow, dialogic) | **recusado** | madura; nada a romper |
| Gerador de mapa e worldbuilding (Fantasy-Map-Generator, chronicler) | **recusado** | maduro, e é objeto do tema 14 (design procedural) |
| "O modelo escreve melhor" | **recusado** | melhoria sustentadora: mesmo produto, mais barato |
| Geração de imagem e voz como asset | **recusado** | comum em produto de massa; ≈60% das declarações da Steam; é tema 12 |
| Tradução automática neural | **recusado** | madura desde ~2017; o que rompe é a sobreposição em execução (R3) |
| Copiloto de escrita | **recusado** | uso corrente; o mercado já vende o selo do contrário |
| Script-to-video (Sora 2, Veo 3.1, Pika, Luma) | **recusado como raiz deste tema** | é mídia, não narrativa: tema 12. Entra como pré-condição de R1 |
| Personagem persistente com memória (Character.AI, Inworld) | **recusado como raiz deste tema** | é o personagem que age: tema 7. Entra em `e10` |
| **Obra inteira a partir de intenção curta** | **R1** | rompe a unidade de produção e o orçamento como filtro editorial |
| **Obra instanciada por leitor** | **R2** | rompe a identidade numérica da obra |
| **Tradução sobreposta em execução** | **R3** | rompe o controle da obra sobre a língua em que é lida |
| **Autoria como declaração auditável** | **R4** | rompe a suposição de que autoria é constatável na obra |

### 12.4 Fontes que não abriram, e o que eu teria citado delas

Registro porque a ausência delas explica ausências no texto — e porque a tentação de citá-las
assim mesmo foi real.

| Fonte | Erro | O que eu teria citado |
|---|---|---|
| Hilary Mason e Eleanor Todd, "The State of AI-Native Games" (Medium) | 403 | "liberdade conversacional não é liberdade narrativa"; custo de inferência por sessão; a resenha da Steam dizendo que só duas decisões afetam o desfecho |
| GDC — página da sessão "The State of AI-Native Games" | 403 | o resumo oficial da sessão e a lista de jogos analisados |
| Nimdzi 100 — página de mercado | 403 | tamanho do mercado de serviços linguísticos em 2026 e a frase sobre verticais de videogame caindo no ranking por causa da localização por IA |
| SAG-AFTRA — página do Acordo de Mídia Interativa 2025 | 403 (duas URLs) | o texto contratual das cláusulas de réplica digital; usei o conteúdo confirmado em busca, e mantive no texto só o que apareceu de forma consistente em mais de um resultado — o que ainda é uma fragilidade, declarada aqui |
| Regulamento do 68º Prêmio Jabuti (PDF da CBL) | abriu, mas ilegível | a cláusula literal sobre IA em "tarefas autorais"; usei a formulação como reportada, sem aspas de citação direta |
| ScienceDirect — *Cognition*, informação contextual de IA e julgamento estético | 403 | efeito quantificado da revelação de autoria de IA sobre apreciação estética; substituído pelo estudo do JCOM via phys.org, que mede credibilidade e não fruição — substituição imperfeita, declarada |
| ACM DL — "AI in Webtoon Creation" (CHI 2026) | não tentado após o padrão de 403 do domínio | percepções de quadrinistas sobre IA; substituído pela pesquisa da KOCCA via Korea Times |

### 12.5 Buscas que não deram em nada

- **Números de uso do MangoBox.** Buscas por usuários, obras criadas, preço e financiamento não
  retornaram nenhum dado. A página do itch.io do projeto e o site oficial não publicam métrica.
  Registro como "sem número encontrado", em vez de estimar.
- **Instalações ou downloads do LunaTranslator.** Nenhum número público encontrado. É o caso mais
  incômodo do mapa: uma raiz inteira ancorada num software cuja escala de uso eu não sei medir.
- **Receita do segmento de "jogo nativo de IA".** A survey de 53 sistemas não reporta receita, e
  as estimativas de mercado que aparecem em busca vêm de agregadores sem metodologia declarada —
  não usei nenhuma.
- **Parcela de obras literárias publicadas com coautoria declarada.** A Amazon distingue
  "AI-generated" de "AI-assisted" e exige declaração da primeira, mas não publica a contagem.
  Nenhum número confiável.
- **Ficção interativa brasileira com IA.** Buscas em português retornaram quase só páginas
  promocionais de plataformas de roleplay (jenova.ai e similares), sem dado primário. Não há, no
  que encontrei, levantamento sobre produção brasileira de ficção interativa generativa — o que é,
  por si, uma constatação: o recorte brasileiro deste mapa está apoiado em jogo (Abragames) e em
  dublagem (Câmara), não em ficção.
- **Uso de IA generativa em roteiro de jogo especificamente.** Todas as fontes de adoção medem
  "IA" de forma agregada ou por asset visual. O dado mais próximo é a quebra do Next Fest (escrita
  e diálogo entre as menores fatias), que é uma medida de declaração, não de uso.
- **Prêmio literário que tenha criado categoria separada para obra coautorada.** Não encontrei
  nenhum. Os que encontrei proíbem (Jabuti, IFComp, Ideal Clube, Caminhos da Palavra). Isso é
  evidência contra `e18.2`, e está anotado: o efeito ficou com sinal médio e confiança média
  justamente por isso.

### 12.6 Saída do verificador

Comando executado:

```
python3 /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/futurizacao-giordano/references/verificar.py /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/giordano-h2041/08-narrativa-gerativa-e-coautoria/tendencia-narrativa-gerativa-e-coautoria.md --links
```

Saída, na íntegra:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 18 (frontmatter diz 18)
efeitos ordem 2: 37 (frontmatter diz 37)
efeitos ordem 3: 21 (frontmatter diz 21)
prazo > horizonte (2041) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 2 [('e1.1.1', 2042), ('e12.1.1', 2043)]
confiança ordem 1: alta 9 · media 6 · baixa 3
confiança ordem 2: alta 1 · media 28 · baixa 8
confiança ordem 3: alta 0 · media 0 · baixa 21
links da seção 11: 24/24 respondem (frontmatter diz fontes: 24)
RESULTADO: ok
```

**Leitura da saída, item a item.**

- **Frontmatter 18/18 e títulos 12/12** — o documento está no formato da disciplina, sem desvio.
- **Raízes 4, ordem 1 com 18, ordem 2 com 37, ordem 3 com 21** — as contagens do frontmatter
  batem com as reais. Na primeira execução o verificador acusou 21 efeitos de 3ª ordem contra 20
  declarados: **corrigi o frontmatter, não o texto**, como a skill manda, e a linha de calibração
  da seção 7.8 foi ajustada junto.
- **Prazo > horizonte em ordens 1-2: zero.** Nenhum efeito de 1ª ou 2ª ordem escapa de 2041.
- **Prazo > horizonte em ordem 3: dois** — `e1.1.1` (2042, o ensino de escrita para jogos
  reabsorvido pela direção) e `e12.1.1` (2043, a indústria de localização descobrindo não ter quem
  revise). **Ficam declarados**: os dois estão fora da janela do mapa, os dois tiveram o prazo
  empurrado para lá pela bateria da seção 7 (registro em 7.8), e a prosa da seção 5.1 diz isso nos
  dois pontos.
- **Calibração** — 9/6/3 na primeira ordem, 1/28/8 na segunda, 0/0/21 na terceira. A confiança cai
  com a ordem, como deve. A única alta na 2ª ordem é `e6.2` (arquitetura híbrida), e está
  justificada em 5.1 por três medidas independentes.
- **Links: 24/24 respondem**, e o número bate com `fontes: 24` no frontmatter.
- **RESULTADO: ok.**
