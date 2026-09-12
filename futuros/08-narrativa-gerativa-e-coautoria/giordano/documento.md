---
tema: "Narrativa gerativa e coautoria"
slug: narrativa-gerativa-e-coautoria
autor_login: grec
zona_de_interesse: Simulação e mundos
data: 2026-09-11
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 14
efeitos_ordem_2: 26
efeitos_ordem_3: 17
tecnologias_citadas: [MangoBox, Ren'Py, Twine, Inform 7, Ink, LunaTranslator, Game Overlay Translator, Pangram 3.3, Writermark, TypeOS, C2PA, marca d'água de texto do Claude, ConStory-Bench, WSE-Bench, NARRA-Gym, PAN 2026, Whispers from the Star, Justice Dreamweaver, Audible Virtual Voice, Sora 2, Veo 3.1, Choice of Games, Hosted Games, AI Dungeon, NovelAI, Character.AI, Archive of Our Own, itch.io, Light.vn, RenJS, Bitsy, Decker]
fontes: 25
confianca: media
experimento: "A ficha técnica: a mesma novela visual curta jogada pela turma sob três fichas de procedência diferentes, para medir quanto da nota vem da obra e quanto vem da declaração"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

O custo de produzir uma narrativa caiu; o custo de ser lido, não. É o achado que organiza este
mapa, e ele tem número: entre o primeiro trimestre de 2023 e o primeiro de 2026, os títulos de
ficção de gênero lançados na Amazon cresceram 38,3 vezes, os que vendem alguma coisa cresceram
19,2 vezes, e a receita cresceu 8,9 vezes — livros com texto substancialmente gerado são 20% do
catálogo e 12,1% das vendas. Na Steam, 30,8% dos lançamentos de 2026 declaram IA e essa fatia
responde por algo entre 10% e 27% das vendas estimadas; no Next Fest de junho de 2026 a
declaração veio sobretudo de arte, com tradução "comum", texto e diálogo "baixo" e geração em
tempo real "rara". Por isso este mapa **recusa** como disrupção-raiz aquilo que o tema oferece de
mais vistoso — a frase que vira novela visual jogável: o artefato inteiro gerado é uma melhoria de
custo cuja consequência de mercado já foi medida, e é de diluição, não de ruptura. As quatro
rupturas que o mapa aponta estão em outro lugar: **a tradução vira camada do leitor** e a obra
perde a língua de origem (um tradutor por sobreposição, no dispositivo, 35 línguas, R$ 15,75 na
própria Steam desde 16/07/2026, enquanto o mercado de localização de texto encolheu de US$ 253 mi
em 2024 para US$ 246 mi em 2025); **a prova de autoria migra do texto para o processo** (Art. 50
do AI Act aplicável desde 02/08/2026, marca d'água em todo texto do Claude desde 14/08/2026,
atestação por digitação, resíduo de HTML em fanfic, rascunhos com carimbo de tempo no prêmio
Commonwealth); **o gargalo se inverte** e curadoria, não produção, vira o ativo escasso; e **a
linha de aceitação se desloca** de "quem fez" para "o que o leitor toca" — o IFComp 2026 proíbe
conteúdo gerado voltado ao jogador e libera a mesma tecnologia no desenvolvimento, enquanto o
motor Ren'Py rachou a comunidade por uso de IA na própria engine. O efeito central de 2031 não é
a obra deixar de ter autor. É a obra passar a viajar com um dossiê de procedência, e o dossiê
virar parte do que se julga.

## 2. O tema

**O que é.** "Narrativa gerativa e coautoria" tem dois objetos que costumam ser confundidos. O
primeiro é o **artefato narrativo gerado**: uma frase vira novela visual com elenco, cena, arte e
diálogo; um roteiro vira quadrinho animado; um argumento vira conto. O segundo é a **coautoria
como regime normal de escrita**: a pessoa continua sendo o autor, mas parte do texto passou por
uma máquina, e ninguém sabe dizer qual parte nem quanto. O primeiro é um objeto de produção; o
segundo é um objeto de atribuição. O tema só fica interessante quando se percebe que o segundo
não depende do primeiro: mesmo que nenhuma novela visual inteira jamais seja gerada, a pergunta
de quem assinou o parágrafo já está posta, e já derrubou contratos de livro em 2026.

**Onde encosta em mídia e interação.** Em quatro pontos verificáveis hoje, todos com caso
nomeado. Primeiro, a **regra de admissão**: o IFComp escreveu em 2026 uma regra que separa o que
o jogador toca do que o autor usa — a primeira formulação normativa que não é "humano contra
máquina". Segundo, a **ferramenta**: o motor em que a forma "novela visual" se apoia há vinte
anos virou ele próprio objeto de disputa de autoria, com desenvolvedores voltando para versões
anteriores a 2021. Terceiro, a **língua**: a tradução saiu do processo de produção e entrou no
dispositivo do jogador, o que retira do detentor de direito a decisão sobre em que línguas a obra
existe. Quarto, a **prova**: o julgamento sobre autoria deixou de ser feito lendo e passou a ser
feito periciando — marca d'água, metadado, rascunho, carimbo de tempo, padrão de digitação.

**Por que merece mapa de futuro e não levantamento de estado da arte.** Porque o levantamento
responderia "que ferramentas geram história" e a resposta seria enganosa por excesso: há centenas,
e a mais citada pela turma — o MangoBox — não publica número de usuário, nem preço, nem data de
lançamento, nem que modelo usa. O objeto em disputa não é a lista de ferramentas. É o **contrato
tácito da leitura**, que diz que um texto testemunha a própria autoria: que dá para ler e atribuir.
Quando esse contrato cai, cai junto tudo o que dependia dele — a submissão às cegas, o pseudônimo,
o prêmio, a resenha, o direito autoral, a antologia, a bolsa, a nota da disciplina. A pergunta de
futuro não é "a máquina vai escrever bem?". É: **quando o texto deixa de provar quem o escreveu, o
que ocupa o lugar da prova — e quem paga por ela?**

### 2.1 Premissas assumidas nesta rodada

Esta rodada correu em modo não interativo, a partir de um bloco `briefing:` completo. Não houve
rebaixamento de confiança por ausência de entrevista, porque o briefing cobriu os sete itens da §0
da skill. O que ele não cobriu está declarado na seção 12.2. O que vale adiantar:

- **Horizonte 2031**, cinco anos. Efeitos de 3ª ordem podem passar disso; quando passam, a prosa
  diz e o verificador lista.
- **Público**: quem projeta mídia e interação. Isso muda o que conta como efeito relevante — uma
  mudança no ofício de escrever pesa mais que uma mudança na cotação de uma empresa de IA.
- **Recorte global, com nota sobre o Brasil** na seção 3.6.
- **Descartado de início**: o que já é comum em produto de massa. É a régua da disciplina e é o que
  faz a seção 4.0 existir — e ela ficou grande nesta rodada, porque neste tema quase tudo o que
  chama atenção já é comum.
- **Viés neutro**, com um cenário de cada lado na seção 9.
- **Disrupção suspeita: nenhuma.** O briefing pediu para descobrir. A consequência é que a recusa
  da geração do artefato inteiro como raiz (seção 4.0) é um achado da rodada, não uma premissa —
  e é o ponto em que este mapa mais provavelmente diverge do mapa de um aluno.
- **O que me faria mudar de ideia**, conforme o briefing: evidência de que a adoção passou da
  maioria inicial, ou de que a tecnologia não rompe nada. Nas seções 7 e 10 isso vira critério
  operacional, não frase.

## 3. Onde isso está hoje

Âncora feita com acesso à web em 11/09/2026. Vinte e cinco fontes abertas e lidas; as buscas que
não deram em nada estão na seção 12.1, e as páginas que não abriram, com o código de erro, na
12.4. Sem rebaixamento por ausência de busca.

### 3.1 O que já existe e funciona

**A geração do artefato narrativo inteiro existe e é usada — mas por quem cria, não por quem lê.**
O MangoBox recebe uma frase e devolve uma novela visual jogável com até cinco personagens, arte e
conversas, no navegador, sem Ren'Py. Está no ar, tem página no itch.io e comunidade no Discord. O
que ele **não** tem, e eu procurei: número de usuários, número de histórias, preço, data de
lançamento, modelo usado. A página "about" não diz nenhuma dessas coisas. O emblema do tema é, em
termos de evidência pública, quase opaco.

**A narrativa gerada em tempo de execução chegou ao mercado e vendeu — em dois lugares do mundo.**
*Whispers from the Star*, do estúdio Anuttacon, saiu para Windows em 14/08/2025: o jogador
conversa por voz, vídeo ou texto com Stella, e não há árvore de diálogo — a fala é gerada na hora
por um modelo ajustado. No mesmo eixo, a NetEase lançou em 03/04/2026 o modo *Dreamweaver* dentro
de *Justice Mobile*, em que o jogador conduz a história por comando de texto ou voz e a cena é
gerada em tempo real; o levantamento que consultei registra que ele liderou as paradas de
popularidade móveis no lançamento. Outros números do mesmo levantamento, para calibrar a escala do
que é "IA em jogo" quando dá certo: *Death by AI*, 20 milhões de jogadores em três meses, pico de
700 mil ativos diários; *Peacekeeper Elite*, 17,7 milhões de ativos diários no companheiro de IA.

**A tradução em sobreposição virou produto de prateleira.** O `LunaTranslator` — o sinal que a
turma trouxe — é software livre que extrai o texto do jogo por gancho de memória ou OCR e devolve
tradução sobreposta. O que mudou em 2026 é que essa função deixou a periferia: o *Game Overlay
Translator* está à venda **na própria Steam** desde 16/07/2026, por R$ 15,75, do R.U Studio, com
OCR e tradução neural **no dispositivo**, sem nuvem e sem internet, 35 línguas de destino e 22 de
interface. Não é um projeto de GitHub: é um aplicativo pago, com análises, na mesma loja onde o
jogo original é vendido.

**A declaração de procedência virou infraestrutura, com data e com lei.** O Art. 50 do AI Act
europeu é aplicável desde **02/08/2026** e exige que a saída de sistema generativo seja "marcada em
formato legível por máquina e detectável como artificialmente gerada ou manipulada"; sistemas já no
mercado antes dessa data têm até **02/12/2026** pela prorrogação do Omnibus de maio de 2026. Do
lado do provedor, a Anthropic passou a embutir marca d'água em todo texto gerado pelo Claude a
partir de **14/08/2026**, e credenciais C2PA nos arquivos `.png`, `.jpg` e `.svg`. A técnica é
escolher, entre palavras igualmente válidas, de um jeito que deixa padrão. Do lado das lojas, a
Steam exige declaração desde o início de 2024 e o itch.io exige a etiqueta `AI Generated` — com a
ressalva, na própria documentação da loja, de que quem declara é o criador e a plataforma não
confere.

**A perícia de autoria virou prática — amadora antes de institucional.** Em junho de 2026 um grupo
anônimo distribuiu um PDF de 25 páginas nomeando cerca de trinta autoras do Archive of Our Own
por um resíduo de HTML: a classe CSS `font-claude-response-body`, que sobrevive à colagem em
algumas plataformas. A denúncia veio com uma ferramenta de verificação caseira — uma folha de
estilo que pinta a página de vermelho quando a etiqueta aparece. Do lado formal, o PAN 2026
organiza cinco tarefas compartilhadas sobre o mesmo problema, e duas delas são novas neste ano:
detecção de plágio generativo e detecção de trajetória de raciocínio. E do lado comercial já há
ferramentas que atestam **o processo** em vez do texto: o Writermark observa o ritmo da digitação e
emite certificado criptográfico; o TypeOS guarda o histórico datado do documento e exporta um
certificado de procedência.

**A regra de comunidade foi escrita, e ela não separa humano de máquina.** O IFComp 2026 — 32ª
edição — introduziu uma regra de IA generativa que diz duas coisas ao mesmo tempo: *todo o conteúdo
voltado ao jogador deve ser criado por humanos*, incluindo capa, prosa e todos os ativos, e as
obras *não podem exigir que jurados ou jogadores interajam com serviço generativo externo durante o
jogo*; ao mesmo tempo, o autor **pode** usar ferramentas generativas no desenvolvimento — edição,
depuração, acessibilidade, pesquisa, tradução limitada, código. A justificativa registrada é a
pesquisa pós-competição de 2025. A Choice of Games e a Hosted Games recusam prosa e arte geradas —
e o motivo declarado é **jurídico antes de estético**: "incerteza legal em torno do direito autoral
de conteúdo gerado por IA", com a exigência de que toda submissão seja criada por quem tem direito
legal de publicá-la.

### 3.2 O que existe e ainda não funciona

**A coerência longa.** É o limite técnico mais bem medido do tema, e ele não cedeu com escala. O
`ConStory-Bench` (Li, Guo, Wu, Lee, Li e Xie, 06/03/2026) tem 2.000 prompts em quatro cenários e
uma taxonomia de cinco categorias de erro com 19 subtipos; a conclusão é que os erros de
consistência se concentram nas dimensões factual e temporal, aparecem **no meio** da narrativa, e
ocorrem em trechos de entropia mais alta. O `WSE-Bench` (Chen, Li, Cai, Li, Yan e Li, 16/08/2026)
mede três coisas separadas em 20 passos narrativos, sobre 12 arquiteturas: Cobertura de Geração,
Consistência e Riqueza. O resultado que mais importa para este mapa: dentro dos checkpoints densos
do Qwen2.5, a Cobertura sobe cerca de 19,32 pontos percentuais por duplicação de parâmetros, mas
Consistência e Riqueza **não melhoram de forma monotônica confiável**. Traduzindo: modelo maior
escreve por mais tempo sem parar; não escreve melhor sem se contradizer. E as duas não trocam
suavemente uma pela outra — a fronteira de Pareto empírica é não-côncava. O `NARRA-Gym` (Huang e
outros dezessete autores, 08/05/2026) avalia nove modelos de fronteira sobre oito personas, e o
que ele acrescenta é a medida de **personalização empática** e de síntese de artefato ancorado na
história — exatamente o que a promessa de "história que se adapta a cada leitor" exigiria.

**A história que se adapta a cada leitor.** Procurei produto lançado, duas vezes, com termos
diferentes, e não achei. O que voltou foi material de venda: histórias que se adaptam ao humor
detectado por relógio inteligente, livros infantis com o nome da criança, listas de "melhores jogos
de história com IA". O único material com método é acadêmico (o PREFINE, sobre geração
personalizada por críticos simulados). Registro isto como **busca negativa**, não como sinal:
em 11/09/2026, a adaptação por leitor é promessa de catálogo, não prática instalada.

**A geração do vídeo a partir do roteiro — e aqui a capacidade recuou.** Em 24/03/2026 a OpenAI
notificou os desenvolvedores da depreciação da Videos API e de todos os apelidos do Sora 2; a
tabela de depreciações lista `sora-2`, `sora-2-pro` e os instantâneos datados, com remoção em
**24/09/2026** e — o detalhe que importa — **nenhuma substituição recomendada**. Este é o único
ponto do mapa em que uma capacidade largamente disponível foi retirada de circulação, e ele
desmente a suposição, comum em mapas de futuro, de que capacidade só acumula.

**A detecção como prova.** A própria Anthropic declara os limites da marca d'água que acabou de
embarcar: ela não distingue "o Claude escreveu" de "o Claude editou"; é ineficaz em amostra pequena
ou em passagem factual com poucas escolhas; some com reescrita completa; e não identifica outro
sistema. O detector existe em **pré-visualização privada** para reguladores, pesquisadores e
imprensa — não para quem julga um concurso literário.

### 3.3 O que já produziu consequência fora da tela

Três episódios de 2026, todos com data, e nenhum deles sobre qualidade literária:

- **Prêmio Commonwealth de Conto, 2026.** Em 18/05/2026 uma acusação pública apontou que o conto
  vencedor da região caribenha, *The Serpent in the Grove*, de Jamir Nazir, era gerado; o detector
  comercial Pangram marcou 100%, e outros dois vencedores regionais foram apontados (Malta, 100%;
  Índia, 89%). Em **22/06/2026** a Commonwealth Foundation publicou a decisão: examinou rascunhos,
  documentos com carimbo de tempo e anotações de todos os vencedores regionais, e concluiu que "IA
  não foi usada para escrever as histórias vencedoras". Nenhum prêmio foi retirado; o vencedor
  geral foi anunciado em 30/06/2026 como previsto. E a Fundação anunciou que iniciou conversas
  sobre "o uso apropriado de verificadores de IA no contexto de prêmios literários" — ela não usava
  nenhum, por preocupação com propriedade artística e consentimento sobre obra inédita.
- **Um livro cancelado por rumor.** *Shy Girl*, de Mia Ballard, foi autopublicado em fevereiro de
  2025, comprado pela Hachette, lançado no Reino Unido em novembro de 2025. Em janeiro de 2026 um
  vídeo de quase três horas passou de um milhão de visualizações acusando o livro de ser gerado;
  em **março de 2026** a Hachette cancelou a edição americana e descontinuou a britânica. Ballard
  nega ter usado IA e atribui as alterações a uma revisora freelancer.
- **Um manuscrito retirado de venda.** Agências literárias retiraram do mercado o romance policial
  do nigeriano Jerry Falade alegando incerteza sobre autoria. Ele nega, e — como Ballard —
  aponta que autores negros carregam desconfiança desproporcional.

A consequência prática destes três episódios juntos não é "a IA escreveu": em nenhum deles ficou
demonstrado que escreveu. É que **a suspeita passou a ter efeito econômico próprio, independente
da verdade do fato**. E o custo dela não é distribuído por igual.

### 3.4 Quem constrói

Seis atores, de naturezas diferentes, e a diferença importa:

1. **Ferramentas de geração de artefato narrativo** — MangoBox e a longa cauda de geradores de
   novela visual e conto; sem números públicos, sem consolidação visível.
2. **Estúdios que embarcam narrativa gerada em runtime** — Anuttacon (*Whispers from the Star*) e
   NetEase (*Justice Dreamweaver*); é onde há dinheiro e escala, e as duas estão fora do eixo
   ocidental.
3. **A infraestrutura incumbente da forma** — Ren'Py, Twine (2.12.0, 10/04/2026), Inform, Ink; é
   ela que está em crise, e não por obsolescência técnica.
4. **Os provedores de modelo como provedores de procedência** — Anthropic com marca d'água e C2PA,
   sob o Art. 50; papel novo, e não escolhido por eles.
5. **A camada de verificação** — Pangram do lado da detecção estilística, Writermark e TypeOS do
   lado da atestação de processo, PAN 2026 do lado acadêmico.
6. **As instituições de legitimação** — IFComp, Commonwealth Foundation, Choice of Games, Hachette,
   AO3, Steam, itch.io. É aqui que as decisões de 2026 foram tomadas, e é o ator que os mapas de
   futuro de tecnologia habitualmente esquecem.

### 3.5 Que número descreve a adoção hoje

Cinco números, cada um com origem:

**Livro.** Chakrabarty, Liu, Ginsburg e Dhillon (arXiv 2607.20349v2, 26/07/2026) detectaram texto
gerado com o Pangram 3.3 no texto integral de **14.419** e-books de ficção de gênero autopublicados
na Amazon, com registro diário de vendas de 2023 a junho de 2026. Do 1T2023 ao 1T2026: títulos
lançados **×38,3**, títulos que vendem **×19,2**, receita **×8,9**. Livros com mais de 25% de texto
detectado como gerado são **20% do catálogo, 12,1% das vendas e 11,3% da receita**; livros sem
texto gerado detectado são 62,9% dos títulos, **71,7% das vendas e 72,5% da receita**. A fatia de
vendas dos livros substancialmente gerados foi de quase zero no início de 2023 a **cerca de 20% no
2T2026**, e eles ocupavam **23,3%** das posições de Top-25 construídas. O efeito de diluição é o
achado mais duro: a fatia de Top-25 dos livros sem IA cai de **87,8%** no décimo de menor exposição
para **62,8%** no de maior; nos gêneros dominados por Kindle Unlimited, a dianteira encolhe 8,5
pontos em vendas. E a receita por livro que vende caiu na maioria dos gêneros.

**Jogo.** Censo de Sulka Haro sobre **53.597** lançamentos da Steam de meados de 2023 a meados de
2026: declaração de IA em **10,9%** dos lançamentos de 2024, **19,9%** em 2025 e **30,8%** em 2026
até julho. Os lançamentos declarados passaram de 13 por mês para cerca de 530, e respondem por 60%
a 90% de todo o crescimento do volume mensal da loja. Mas a fatia de vendas estimadas é de **10% a
27%**, contra 3% a 6% em 2024 — e o topo continua onde estava: 1% dos títulos captura cerca de 94%
da receita estimada.

**Onde a IA entra no jogo.** O relatório do Steam Next Fest de junho de 2026 (Llama & Griffin,
sobre a base da GameDiscoverCo) mede **26,5%** de declaração em 4.382 demos registradas — contra
21,2% em fevereiro de 2026 pela mesma metodologia. A repartição por uso é o número que mais muda
este mapa: **ativos visuais ~60%**; áudio, menos; **tradução e localização, comum**; **escrita e
diálogo, baixo**; **conteúdo gerado em tempo real, raro**; código deixou de exigir declaração numa
revisão de política de janeiro de 2026. E os títulos declarados aparecem no top 100 a **cerca de
metade** da sua representação no campo.

**Localização.** O mercado de localização de texto de jogos foi de **US$ 253 milhões em 2024** para
**US$ 246 milhões em 2025** — pico em 2024 e contração, porque a erosão de preço por IA corre mais
rápido que o crescimento do volume de conteúdo. Concentração alta: três empresas com ~60%, dez com
~77%, a Keywords Studios com 40,5%.

**Áudio.** Uma busca por "virtual voice" no Audible devolve mais de **50 mil** títulos com narração
sintética, a partir de um serviço aberto às editoras em maio de 2025, com mais de 100 vozes em
inglês, espanhol, francês e italiano. É a referência mais próxima que temos de quanto tempo um
catálogo leva para inundar quando uma plataforma abre a torneira: cerca de um ano para dezenas de
milhares.

### 3.6 A nota sobre o Brasil

Três coisas, e as três importam para o mapa.

**O jogador brasileiro não rejeita, mas cobra.** A Pesquisa Game Brasil 2026 (SX Group e Go Gamers,
com Blend New Research e ESPM; **7.115** respondentes de 16 a 55 anos, coleta de 5 a 13/03/2026,
divulgação em 09/04/2026) registra **45,7%** preocupados com a deterioração do processo criativo
pelo crescimento da IA e **39,3%** que ainda comprariam um jogo feito com apoio substancial dela —
com outra fatia respondendo "talvez". Não é rejeição; é condicionamento à transparência. O que a
pesquisa **não** separa é arte, dublagem e texto — e o relatório da Steam mostra que essa separação
é justamente onde está a diferença.

**A resposta institucional brasileira à IA na narrativa começou pela voz, e começou por proibição.**
Em 29/08/2024, em reunião conjunta das comissões de Cultura e de Trabalho da Câmara, o segmento de
dublagem pediu proteção legal contra voz gerada, com dois projetos na mesa: o **PL 1376/22**, que
exige que dublagem e legendagem comerciais no Brasil sejam feitas por empresas e profissionais
sediados no país, e o **PL 2338/23**, que prevê remuneração de direito autoral quando a obra é
usada para treinar modelo. Projetos posteriores endureceram: há proposta de proibir IA na dublagem
de obra audiovisual, com multa diária de até R$ 50 mil e suspensão de atividade por até 90 dias.
O Brasil está legislando sobre a **voz** antes de legislar sobre o **texto** — e a tradução por
sobreposição, que é a frente que de fato avançou, escapa dos dois por rodar no dispositivo do
jogador, depois da publicação.

**O produto que materializa a raiz 1 já está precificado em real.** O *Game Overlay Translator*
custa R$ 15,75 na Steam brasileira, roda offline, e serve exatamente ao caso de quem quer jogar uma
novela visual japonesa em português sem esperar que alguém a localize. Para um mercado grande, de
língua não hegemônica, historicamente mal servido de localização e com uma cena de tradução amadora
forte, este é o ponto do mapa em que o Brasil não é seguidor: é caso de uso central.

## 4. As disrupções-raiz

### 4.0 Candidatos recusados como raiz

A régua da disciplina é literal: se dá para fazer com o que já é comum em produto de massa, é
maduro. Nesta rodada a régua derrubou cinco candidatos, e o primeiro deles é o candidato óbvio do
tema. Registro cada recusa com o teste que falhou, porque a recusa é o principal ponto em que este
mapa deve divergir de outros.

**Candidato 1 — "Uma frase vira uma novela visual jogável". Recusado como raiz.**
Falha no teste 1 do §2: *o que ela rompe?* A resposta honesta é "faz o mesmo artefato, muito mais
barato e sem exigir o ofício". Isso é melhoria de custo com rebaixamento de barreira — importante,
mas sustentadora no sentido de Christensen, e a evidência de consequência já existe e já foi
medida. Ela não é de ruptura: é de **diluição**. Do lado do livro, o catálogo cresceu 38,3 vezes e
a receita 8,9; do lado do jogo, 30,8% dos lançamentos e 10% a 27% das vendas, com metade da
presença esperada no top 100. Um artefato que qualquer um produz em minutos e que quase ninguém
consome não rompe uma prática — ele satura um canal. Entra neste mapa como **efeito de 1ª ordem**
da raiz 3 (e8, e9, e11), que é o lugar certo dele. Em difusão: produto de nicho a caminho de
adoção precoce na **produção**, e sem sinal de adoção no **consumo** — e essa assimetria é o fato.

**Candidato 2 — "Conversar com um personagem para fazer história". Recusado por maturidade.**
O AI Dungeon é de 2019; o Character.AI e o NovelAI operam há cinco anos com assinatura e público
de massa; o roleplay narrativo por chat é produto comum. Falha no teste 3: está em maioria dentro
do seu nicho, e a lista do teste 4 — o que ainda falta acontecer — é vazia. Fica como contexto da
seção 3. O que **mudou** nesse campo em 2025-2026 não foi capacidade e sim regulação de acesso: o
Character.AI barrou menores depois de um processo, o que é um efeito de política sobre companhia
artificial e pertence ao tema 7, não a este.

**Candidato 3 — "Roteiro vira vídeo". Recusado por fronteira e por recuo.**
Duas razões independentes. A fronteira: a disciplina atribui a geração de vídeo *como mídia* ao
tema 12, e aqui o objeto é a história como coisa gerada, não a imagem em movimento. E o recuo: a
OpenAI removeu a Videos API e todos os apelidos do Sora 2 em 24/09/2026, anunciado em 24/03/2026,
**sem substituto recomendado**. Um candidato a raiz cuja principal implementação de consumo foi
desligada no ano do mapa não é raiz; é advertência, e vira o wildcard 2 da seção 6.

**Candidato 4 — "Coescrever com a máquina como modo normal de redigir". Recusado por maturidade.**
Autocompletar, reescrever, resumir e sugerir estão dentro do Word, do Google Docs e de todo editor
comercial. Está em maioria. A parte **não** madura disso não é o ato de coescrever: é o que
acontece quando alguém precisa **provar** que não coescreveu, ou que coescreveu dentro de um limite
aceito. Essa parte é a raiz 2, e é nela que a coautoria aparece neste mapa.

**Candidato 5 — "A história se adapta a cada leitor, e a obra deixa de ser uma só". Recusado por
falta de evidência, não por implausibilidade.**
É a segunda pergunta de 2ª ordem que a disciplina propõe, e eu não encontrei nenhum produto
lançado que a sustente — só material de venda. O `NARRA-Gym` mede personalização empática em nove
modelos, o que significa que o campo acadêmico ainda está construindo a métrica. Um candidato que
só tem métrica em construção e nenhuma instalação é **especulativo**, e o §2 manda que entre com
confiança baixa em toda a cadeia. Em vez de virar raiz com cadeia inteira rebaixada, entra como
**sinal fraco 5** da seção 6, com o sinal observável que indicaria que está crescendo.

### 4.1 Raiz 1 — A tradução deixa de ser etapa da obra e vira camada do leitor

**O que rompe.** Rompe a suposição de que uma obra tem uma língua de origem e que alcançar outra
língua é uma decisão de produção, tomada por quem detém o direito, paga por quem publica, e visível
como uma versão. Quando a tradução acontece no dispositivo do leitor, em tempo real, sobreposta ao
original, o detentor de direito sai do circuito: não licenciou, não revisou, não faturou e não
soube. O que se rompe não é o ofício do tradutor — é o **controle sobre a existência da obra em
cada língua**, e com ele três coisas que dele dependiam: a versão oficial como objeto único, a
janela de lançamento por território, e a cadeia de responsabilidade sobre o que a obra diz naquela
língua (classificação indicativa, adaptação cultural, censura local).

**Por que agora, e não há cinco anos.** Porque a pilha inteira coube no dispositivo e no preço de
um lanche. OCR e tradução neural rodando localmente, offline, em 35 línguas, num aplicativo de
R$ 15,75 vendido na mesma loja do jogo — isso não existia em 2021, quando a mesma função exigia
chamada de nuvem, custo por caractere e conexão. A pré-condição não foi qualidade de tradução: foi
**custo marginal zero por execução no cliente**.

**Onde está na difusão.** Entre produto de nicho e adoção precoce. O sinal institucional é o
relatório do Next Fest de junho de 2026, que classifica tradução e localização como uso **comum** de
IA declarada — mais comum que escrita e diálogo. O sinal de mercado é a contração da localização de
texto, de US$ 253 mi (2024) para US$ 246 mi (2025), com a causa declarada sendo erosão de preço.

**O que ainda falta acontecer.** Integração no nível da plataforma ou do console, e não como
aplicativo de terceiro. Uma decisão jurídica sobre se a sobreposição feita no cliente é obra
derivada. Qualidade aceitável em texto culturalmente carregado — trocadilho, registro, dialeto —,
que é justamente o que a novela visual usa. E uma resposta ao problema de o texto estar **dentro
da imagem**, que hoje obriga o OCR e limita tudo.

**Quem bloqueia, e com que incentivo.** Três atores. Detentores de direito, que perdem o
licenciamento por território e têm incentivo para tratar a sobreposição como derivada não
autorizada e pedir bloqueio às lojas (e1.3). O segmento de dublagem e legendagem, que no Brasil já
pede proibição com multa (e3). E as plataformas, que podem tanto absorver a função quanto expulsá-la
— e cuja decisão determina se e3.2 acontece.

### 4.2 Raiz 2 — A prova de autoria migra do texto para o processo

**O que rompe.** Rompe o contrato mais antigo da leitura: o de que o texto testemunha a própria
autoria. Durante séculos, atribuir foi uma operação **interna ao texto** — estilo, vocabulário,
erro característico, hábito de pontuação —, e todas as instituições que julgam escrita foram
construídas em cima disso. Quando o texto deixa de testemunhar, a prova sai de dentro dele e vai
para fora: marca d'água no fluxo de saída do modelo, metadado C2PA no arquivo, resíduo de HTML na
colagem, carimbo de tempo no rascunho, ritmo de digitação no teclado. Isso rompe, em ordem de
gravidade: a **submissão às cegas** (o rastro identifica a máquina e o hábito), o **pseudônimo**, o
direito de escrever **sem ser observado**, e a autoridade de quem lê para julgar lendo.

**Por que agora, e não há cinco anos.** Porque em agosto de 2026 três coisas coincidiram. A lei
passou a exigir marcação legível por máquina (Art. 50(2), aplicável desde 02/08/2026). Um provedor
grande embarcou a marcação por padrão, no mundo todo (Claude, 14/08/2026). E a Suprema Corte
americana negou certiorari em 02/03/2026, deixando de pé a exigência de autoria humana — o que
transforma a procedência de questão reputacional em questão **patrimonial**: sem controle criativo
humano demonstrável, não há registro, e sem registro não há o que vender. Nenhuma dessas três
existia em 2021.

**Onde está na difusão.** Entre demo pública e produto de nicho — com uma função de forçamento
regulatório, que é rara e que acelera. As ferramentas de atestação de processo (Writermark, TypeOS)
são pequenas e recentes; a marca d'água é grande e obrigatória; a perícia amadora (o PDF do AO3) é
onde a prática está mais viva, e é a menos confiável.

**O que ainda falta acontecer.** Um detector acessível a quem julga, e não só a regulador,
pesquisador e imprensa. Interoperabilidade entre provedores — hoje a marca do Claude não diz nada
sobre outro sistema. Um padrão de prova: quanto de resíduo basta, quem tem o ônus, o que vale como
defesa. E, principalmente, um remédio para a **acusação falsa**, que em 2026 já produziu dois
contratos desfeitos sem que a acusação tenha sido demonstrada.

**Quem bloqueia, e com que incentivo.** Os próprios provedores de modelo: a Anthropic declara os
limites da própria marca e mantém o detector em pré-visualização privada — expor um detector
público é criar um alvo de evasão e uma responsabilidade. E os acusados, com um instrumento novo e
eficaz: o caso Ballard e o caso Falade estabeleceram que acusar publicamente sem prova tem custo
reputacional para quem acusa, especialmente quando o padrão de suspeita recai desigualmente sobre
autores negros (e5.2).

### 4.3 Raiz 3 — O gargalo se inverte: produzir é barato, ser lido é o ativo escasso

**O que rompe.** Rompe a economia sobre a qual toda a cadeia de narrativa está montada: a de que a
obra é o bem escasso e a atenção é abundante. Ela era verdadeira porque escrever, ilustrar e
programar custavam tempo humano. Quando o custo de produzir cai a quase nada e o de ser lido não
cai, o escasso muda de lado, e com ele muda o que é um ativo: deixa de ser o catálogo e passa a ser
**a capacidade de pôr uma obra diante de alguém**. O que se rompe, em concreto: "escrever mais"
como estratégia de carreira; a curadoria algorítmica da loja como filtro suficiente; a ideia de que
uma obra a mais é, por definição, um ganho para quem a fez.

**Por que agora, e não há cinco anos.** Porque o volume absoluto ultrapassou qualquer capacidade de
triagem, e isso é datável. Cerca de 530 lançamentos declarados por mês na Steam; mais de 300 mil
e-books despejados no mercado pouco antes de janeiro de 2026; mais de 50 mil títulos de narração
sintética no Audible em cerca de um ano. E, sobretudo, porque a diluição foi **medida**: a queda da
fatia de Top-25 dos livros sem IA de 87,8% para 62,8% conforme sobe a exposição do gênero é um
efeito sobre quem não usou a tecnologia. Esse número não existia antes de julho de 2026.

**Onde está na difusão.** Aqui é preciso separar dois relógios, e a separação é o que impede que
esta raiz seja recusada por maturidade. O **despejo** já é adoção precoce alta, quase maioria, na
produção. A **reorganização institucional** que ele força — quem filtra, quem paga pelo filtro, o
que substitui a loja como porta — está em produto de nicho. A raiz não é a inundação; é a inversão
do que é escasso, e as consequências dela mal começaram.

**O que ainda falta acontecer.** Um mecanismo de triagem que escale com o volume e que alguém pague.
Uma forma de remunerar curadoria que não seja publicidade. E a resposta à pergunta que nenhum ator
formulou ainda: se a maior parte do que se gera não é para ser publicado, o que é uma loja?

**Quem bloqueia, e com que incentivo.** A própria saturação, pelo lado da demanda — e há uma frase
do fórum de ficção interativa que a resume melhor que qualquer dado: *"as pessoas gostam muito mais
de gerar jogos com LLM do que de jogar jogos gerados por LLM"*. O Spring Thing mudou de política
porque os resenhistas ameaçaram parar de participar. O freio desta raiz não é regulatório: é a
recusa de quem julga a trabalhar de graça na triagem (e11).

### 4.4 Raiz 4 — A linha de aceitação se desloca de "quem fez" para "o que o leitor toca"

**O que rompe.** Rompe a taxonomia binária sobre a qual **toda** a infraestrutura de declaração foi
construída. A Steam pergunta se o jogo usou IA. O itch.io pede a etiqueta `AI Generated`. O Art. 50
manda marcar a saída como gerada. As três presumem que o mundo se divide em obra feita por humano e
obra feita por máquina. A regra do IFComp 2026 diz outra coisa: *todo o conteúdo voltado ao jogador
deve ser criado por humanos* **e** o autor pode usar as mesmas ferramentas para editar, depurar,
pesquisar, traduzir e programar. A linha não passa entre humano e máquina; passa entre **o que o
leitor toca e o que o autor usa**. Se essa é a linha que as comunidades de fato regulam, então a
bandeira binária mede a coisa errada — e um jogo que passou uma textura por um ampliador carrega a
mesma marca de um jogo com o texto inteiro gerado.

**Por que agora, e não há cinco anos.** Porque a regra foi escrita, com essas palavras, em 2026,
depois de uma pesquisa com a própria comunidade — e porque a mesma comunidade descobriu, no mesmo
ano, que a linha vaza para trás. Em março de 2026 o mantenedor do Ren'Py, que sustenta o motor
desde 2004, informou aos apoiadores que usa modelos de linguagem e agentes de código no
desenvolvimento da engine, distinguindo isso explicitamente de programar sem entender; em junho ele
repetiu em rede pública e veio a reação. O ponto que interessa não é quem tem razão: é que a
suspeita **subiu a cadeia de produção**, do artefato para a ferramenta. Desenvolvedores relatam
sentir-se presos, porque não há equivalente do Ren'Py, e alguns voltaram a versões anteriores a
2021 do motor. Isso não era possível há cinco anos porque a IA ainda não tinha entrado nas
ferramentas que as pessoas usam para fazer o que não é IA.

**Onde está na difusão.** Produto de nicho, com sinal forte: a regra existe, está escrita, é
aplicada em uma competição na 32ª edição, e tem um precedente comercial independente — a Choice of
Games recusa prosa gerada por motivo **jurídico**, não estético, o que significa que a recusa
sobrevive mesmo se a qualidade empatar.

**O que ainda falta acontecer.** Que alguma loja passe a declarar por superfície — arte, texto,
voz, tradução, geração em tempo real — em vez de sim/não. Que exista modo de **verificar** a linha,
e não só de declará-la. E que se resolva o que fazer com a obra cuja ferramenta foi contaminada
depois de a obra estar pronta.

**Quem bloqueia, e com que incentivo.** Os autores presos ao ecossistema, cujo custo de migração é
maior que a discordância (e13); e o incentivo estrutural a não declarar, já que a declaração
binária pune quem obedece sem distinguir o que ele fez (e14). Esta é a raiz com o freio mais forte
embutido nela mesma.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A tradução deixa de ser etapa da obra e vira camada do leitor
    efeitos:
      - id: e1
        ordem: 1
        efeito: Estúdios deixam de decidir em quantas línguas a obra existe, porque o leitor resolve isso do lado dele
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A localização para de vender palavra traduzida e passa a vender garantia de que a tradução não quebra a obra
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Contratos de publicação passam a nomear um responsável editorial por língua, porque é isso que a lei europeia isenta
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Comunidades de tradução amadora perdem a função e a autoridade, porque a espera que elas preenchiam deixou de existir
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: O prestígio da cena de tradução migra para a anotação cultural, de quem explica a piada e não de quem traduz a frase
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e1.3
            ordem: 2
            efeito: Detentores de direito passam a tratar a sobreposição de tradução como obra derivada não autorizada e pedem bloqueio às lojas
            sinal: fraco
            prazo: 2030
            confianca: baixa
      - id: e2
        ordem: 1
        efeito: Obras em línguas pequenas passam a ser jogadas fora do seu mercado sem nunca terem sido licenciadas para lá
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O valor de um catálogo para de depender da língua em que ele está e passa a depender de o leitor conseguir alcançá-lo
            sinal: fraco
            prazo: 2031
            confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Estúdios de novela visual passam a manter o texto fora da imagem por decisão de engenharia, para que a sobreposição funcione
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: A tipografia sai da arte e volta a ser camada, e a gramática visual da novela visual muda junto
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: O ofício de dublagem no Brasil é regulado por proibição antes de ser reorganizado por contrato
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Plataformas passam a manter duas linhas de produção por país, uma com voz humana obrigatória e outra sem, e a obra pequena paga a fragmentação
            sinal: fraco
            prazo: 2030
            confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: A proibição empurra a tradução por máquina para a camada do cliente, onde a lei não alcança, em vez de eliminá-la
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: A fiscalização migra de quem publica a obra para quem distribui o aplicativo, e a loja vira o ponto de regulação da tradução
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: A prova de autoria migra do texto para o processo
    efeitos:
      - id: e4
        ordem: 1
        efeito: Prêmios e concursos passam a pedir o rastro da escrita — rascunho, carimbo de tempo, certificado de digitação — como parte da inscrição
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: A submissão às cegas deixa de ser possível na forma antiga, porque o rastro do processo identifica a máquina e o hábito de quem escreveu
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Concursos que usavam o anonimato para corrigir viés perdem esse instrumento e precisam inventar outro
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Escrever num editor que não atesta processo vira desvantagem competitiva, e a escolha da ferramenta deixa de ser preferência pessoal
            sinal: fraco
            prazo: 2030
            confianca: baixa
          - id: e4.3
            ordem: 2
            efeito: O custo da suspeita recai desigualmente, e quem já era lido com desconfiança paga mais pela acusação do que pela prova
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e4.3.1
                ordem: 3
                efeito: Editoras passam a exigir cláusula de indenização contra acusação de autoria por máquina, e o preço dessa cláusula vira o preço da reputação
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: A acusação de autoria por máquina vira prática amadora distribuída, com ferramenta caseira e alvo público, antes de existir padrão de prova
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Plataformas de obra amadora passam a limpar metadados na publicação, e a limpeza vira indistinguível de encobrimento
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: O que sobra como sinal é o comportamento do autor ao longo do tempo, e a reputação vira série temporal em vez de obra
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Erros públicos de acusação tornam o acusador responsável, e o custo de acusar sobe o bastante para frear a perícia amadora
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e6
        ordem: 1
        efeito: O que decide se uma obra é comercializável deixa de ser a qualidade e passa a ser a registrabilidade, isto é, quanto de controle humano dá para demonstrar
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Editoras de ficção interativa mantêm a recusa a prosa gerada por razão jurídica e não estética, e a recusa sobrevive mesmo se a qualidade empatar
            sinal: forte
            prazo: 2028
            confianca: alta
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: O prompt vira documento contratual arquivado, porque é onde mora a prova de escolha expressiva humana
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Surge um mercado de auditoria de autoria vendido a quem publica, e não a quem escreve
            sinal: fraco
            prazo: 2030
            confianca: baixa
      - id: e7
        ordem: 1
        efeito: A marca d'água prova que a máquina passou pelo texto mas não prova quem o escreveu, e a infraestrutura entrega menos do que a instituição precisa
        sinal: medio
        prazo: 2027
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O detector fica com quem regula e pesquisa e não com quem julga um concurso, e a assimetria de acesso vira assimetria de poder editorial
            sinal: medio
            prazo: 2029
            confianca: media
          - id: e7.2
            ordem: 2
            efeito: Autores passam a reescrever à mão a saída da máquina não para melhorá-la mas para apagar a marca, e o trabalho humano vira lavagem
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: Revisão humana deixa de ser garantia de qualidade e vira procedimento de conformidade, medido em cobertura e não em julgamento
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: O gargalo se inverte — produzir é barato, ser lido é o ativo escasso
    efeitos:
      - id: e8
        ordem: 1
        efeito: Escrever mais deixa de ser estratégia de carreira, porque o título marginal canibaliza a atenção do próprio autor
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: O catálogo antigo passa a valer mais que o lançamento, e cuidar do próprio acervo vira trabalho do autor
            sinal: fraco
            prazo: 2031
            confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: Quem já publicava em volume aumenta a produção e concentra o topo, porque a diluição pune a média e premia quem já tinha alcance
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: A ficção de gênero se parte em cauda infinita sem leitor e um punhado de contas industriais, e desaparece o meio-termo onde se aprendia o ofício
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: A loja para de conseguir filtrar por qualidade e passa a filtrar por procedência declarada, mesmo sabendo que a declaração binária mede a coisa errada
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: O selo de obra sem máquina vira posicionamento de mercado com preço, e não informação sobre método
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: A obra passa a ser vendida com um dossiê de procedência, como alimento com rótulo de origem, e o dossiê vira parte do que se julga
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: A curadoria humana com nome e responsabilidade volta a ser paga, depois de duas décadas sendo substituída por recomendação automática
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e9.2.1
                ordem: 3
                efeito: Quem indica passa a ser mais conhecido que quem escreve, e o crítico recupera poder econômico que havia perdido para o algoritmo
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: O concurso e o júri voltam a ser infraestrutura econômica e não cerimônia, porque são o único filtro que o volume não afoga
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Concursos sobem a inscrição e limitam submissões por pessoa, e o filtro vira barreira de entrada paga
            sinal: fraco
            prazo: 2030
            confianca: baixa
      - id: e11
        ordem: 1
        efeito: A demanda não acompanha a oferta porque o público prefere gerar a jogar o gerado, e a saturação freia a própria produção
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: Ferramentas de geração passam a ser vendidas como brinquedo de autor e não como fábrica de obra, e a receita vem de quem cria e não de quem lê
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: O artefato gerado deixa de ser publicado e vira consumo privado, a novela visual de uma pessoa só que ninguém mais joga
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A linha de aceitação se desloca de quem fez para o que o leitor toca
    efeitos:
      - id: e12
        ordem: 1
        efeito: Regras de comunidade passam a proibir conteúdo gerado voltado ao leitor e a permitir a mesma tecnologia no desenvolvimento
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: A declaração binária das lojas para de descrever o que as comunidades de fato regulam, e as duas taxonomias divergem
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: Lojas passam a declarar por superfície — arte, texto, voz, tradução, geração em tempo real — em vez de sim ou não
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e12.2
            ordem: 2
            efeito: A suspeita vaza para trás na cadeia e atinge a ferramenta — motor, editor, biblioteca — e não só a obra
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e12.2.1
                ordem: 3
                efeito: Projetos de infraestrutura criativa passam a publicar política de uso de máquina junto da licença, e escolher motor vira posição pública
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e13
        ordem: 1
        efeito: Autores ficam presos a ferramentas que já não querem usar, porque o custo de aprendizagem acumulado é maior que a discordância
        sinal: medio
        prazo: 2027
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: Motores alternativos menores ganham atenção por razão política sem ganhar capacidade técnica, e o ecossistema se fragmenta sem se diversificar
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: A forma novela visual se conserva por inércia de ferramenta, e a invenção de forma acontece fora dela, em objetos que ninguém chama de novela visual
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e14
        ordem: 1
        efeito: A coautoria declarada vira desvantagem competitiva, e o incentivo racional passa a ser não declarar
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: A disciplina da declaração passa a depender de sanção externa e não de norma comunitária, porque a norma pune quem obedece
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: A obra passa a ter dois públicos incompatíveis, um que exige declaração e outro que a ignora, e o autor tem de escolher em qual mercado existe
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### 5.1 Os mecanismos, um a um

O bloco acima não diz *por quê*. Cada efeito abaixo traz o mecanismo na forma exigida: porque o
efeito-pai faz alguma coisa acontecer. Onde o mecanismo é fraco, está dito que é fraco.

**Raiz 1 — a tradução como camada do leitor.**

- **e1** — Porque a tradução no cliente é gratuita na margem e invisível ao publicador, a decisão
  sobre em que línguas a obra existe deixa de ser tomada por quem publica. O estúdio continua
  podendo localizar; o que ele perde é o poder de **não** localizar. Teste de especificidade: esta
  frase não decorre de "tradução automática ficou melhor" — decorre de a execução ser local,
  offline e paga uma vez pelo leitor.
- **e1.1** — Porque a tradução crua passou a ser um bem livre, a única coisa que resta para vender
  é o que a tradução crua não faz: terminologia consistente ao longo de 80 mil palavras, adequação
  à classificação indicativa do território, revisão do que não pode ser dito naquele país. O
  fornecedor deixa de ser pago por palavra e passa a ser pago por **assumir a responsabilidade**.
  É a leitura causal da contração de US$ 253 mi para US$ 246 mi: não é menos trabalho, é outro
  produto.
- **e1.1.1** — Porque o Art. 50(4) do AI Act isenta de divulgação o texto gerado que passou por
  revisão editorial **com alguém detendo responsabilidade editorial**, a lei criou, sem querer, um
  cargo. Quem quiser publicar sem carimbo de "gerado" precisa nomear alguém. Mecanismo forte;
  evidência de adoção, nenhuma — daí `confianca: baixa`.
- **e1.2** — Porque o valor da tradução amadora nunca foi a tradução: era a **espera** que ela
  encurtava e o pertencimento que ela organizava. Quando a espera some, some a função. Mecanismo
  bom; o que enfraquece é que a mesma cena pode migrar (e1.2.1) em vez de desaparecer.
- **e1.2.1** — Porque o que a máquina continua não fazendo é explicar por que a piada é engraçada
  naquela cultura, o capital simbólico da cena se desloca para a anotação. É inferência, sem caso
  observado: `sinal: fraco`.
- **e1.3** — Porque o detentor de direito perde receita de licenciamento por território sem
  perceber, ele tem incentivo para reclassificar a sobreposição como derivada não autorizada. É a
  **retroação** da raiz 1. O que a segura: a execução é local e não deixa rastro no servidor — a
  única alavanca é a loja que vende o aplicativo, e ela ganha dinheiro com ele.
- **e2** — Porque a barreira que mantinha uma obra dentro do seu mercado era linguística e não
  jurídica, removê-la faz a obra circular sem licença. Específico: decorre da sobreposição, não de
  "a internet globaliza".
- **e2.1** — Porque a língua deixa de ser o que separa um catálogo do seu leitor, o que passa a
  separar é o que sobrou: loja, DRM, meio de pagamento, bloqueio regional. Mecanismo por eliminação
  — mais fraco que os outros, e por isso 2031 e `baixa`.
- **e2.2** — Porque a sobreposição depende de OCR e o OCR falha em texto desenhado dentro da arte,
  o estúdio que quiser ser alcançável tem incentivo técnico para tirar o texto da imagem. Mecanismo
  claro, adoção zero observada.
- **e2.2.1** — Porque a novela visual usa a tipografia dentro da arte como recurso expressivo, tirar
  o texto da imagem muda o repertório visual da forma. Efeito de 3ª ordem, fora da janela (2032).
- **e3** — Porque a voz é o ponto da cadeia onde há categoria profissional organizada e
  representação parlamentar, ela é regulada primeiro — não porque é onde a tecnologia avançou mais.
  Evidência: PL 1376/22, PL 2338/23, e propostas de multa diária de até R$ 50 mil.
- **e3.1** — Porque uma proibição nacional obriga quem publica em muitos países a manter linhas
  distintas, o custo fixo da conformidade recai proporcionalmente mais sobre a obra pequena.
  Mecanismo de custo fixo, clássico e verificável; sem caso ainda.
- **e3.2** — Porque a lei alcança quem publica e a sobreposição acontece depois da publicação, no
  dispositivo, a proibição não elimina a tradução por máquina: ela a desloca para onde não há quem
  autuar. É a segunda **retroação** da raiz 1, e é a que tem mais chance de acontecer.
- **e3.2.1** — Porque o único ponto de estrangulamento que resta é a distribuição do aplicativo, a
  loja herda um papel regulatório que ninguém lhe deu. Fora da janela (2032).

**Raiz 2 — a prova migra para o processo.**

- **e4** — Porque a Commonwealth Foundation resolveu o caso de 2026 examinando rascunhos, documentos
  com carimbo de tempo e anotações, e anunciou que discutir verificadores virou prioridade
  imediata, o procedimento de exceção vira requisito de entrada. Não é inferência: é a
  generalização de um procedimento já executado por uma instituição, em junho de 2026.
- **e4.1** — Porque o rastro de processo é, por construção, **identificante** — máquina, ritmo,
  horário, sequência de revisão —, ele é incompatível com o anonimato que a submissão às cegas
  exige. Mecanismo lógico e forte; o que rebaixa a confiança é que há soluções possíveis
  (atestação por terceiro que só devolve um booleano) que ninguém implementou ainda.
- **e4.1.1** — Porque o anonimato na submissão existia para corrigir viés de origem, gênero e nome,
  perdê-lo devolve o viés que ele suprimia. Conecta diretamente com e4.3.
- **e4.2** — Porque quem atesta compete com quem não atesta pelo mesmo lugar na antologia, a
  ferramenta de escrita deixa de ser questão de conforto. Mecanismo de corrida armamentista;
  nenhuma instituição exige isso hoje.
- **e4.3** — Porque a acusação é barata e a defesa é cara, e porque a suspeição prévia não se
  distribui por igual, o ônus recai sobre quem já era lido com desconfiança. Dois casos nomeados em
  2026, ambos com o mesmo argumento levantado pelos próprios acusados. `sinal: medio` porque há
  caso, mas não há medida.
- **e4.3.1** — Porque a Hachette cancelou uma edição já publicada por rumor, o risco deixou de ser
  hipotético para quem assina contrato, e risco precificável vira cláusula. Inferência de mercado,
  sem instrumento observado: `baixa`.
- **e5** — Porque existe um resíduo verificável sem perícia — uma classe de CSS que sobrevive à
  colagem — e uma ferramenta de uma linha para vê-lo, a acusação deixou de exigir competência.
  Três artefatos observáveis hoje: o PDF de 25 páginas nomeando ~30 autoras no AO3, o episódio
  Commonwealth de maio de 2026, e o vídeo de três horas que derrubou *Shy Girl*. Daí `sinal: forte`
  e `confianca: alta` — este é o único efeito de 1ª ordem do mapa que já aconteceu por inteiro.
- **e5.1** — Porque o resíduo é um acidente de implementação e não uma decisão, a plataforma pode
  removê-lo com uma linha de sanitização; e como a remoção protege tanto o inocente quanto o
  culpado, ela é lida das duas formas. O mecanismo é bom; o que falta é a plataforma agir.
- **e5.1.1** — Porque, apagados o resíduo e a marca, nenhum sinal fica no artefato, o que resta é o
  padrão de publicação ao longo do tempo — cadência, volume, variação de estilo. Inferência pura.
- **e5.2** — Porque acusar em público sem prova produziu, em 2026, retratação institucional
  (Commonwealth) e contestação pública com argumento de viés racial (Ballard, Falade), o acusador
  passou a ter algo a perder. É a **retroação** da raiz 2.
- **e6** — Porque a Suprema Corte negou certiorari em 02/03/2026 e a exigência de autoria humana
  ficou de pé, a pergunta comercial deixou de ser "é bom?" e virou "dá para registrar?". É o
  mecanismo mais **econômico** do mapa: não depende de gosto, de ética nem de detecção.
- **e6.1** — Porque a Choice of Games declara a incerteza jurídica como motivo, e não a qualidade,
  a política dela não cede quando a qualidade da máquina melhorar. `sinal: forte` e `alta`: é
  política escrita, em vigor, de uma editora comercial em atividade.
- **e6.1.1** — Porque a prova de controle criativo humano precisa estar em algum lugar, e o lugar
  onde a escolha expressiva humana ficou registrada é a instrução dada, o prompt migra de rascunho
  descartável a documento de arquivo. Inferência com mecanismo claro.
- **e6.2** — Porque quem carrega o risco jurídico é o publicador e não o autor, o serviço de
  auditoria se vende a quem tem o risco. Havia aqui um mecanismo mais forte que não sobreviveu à
  seção 7: as ferramentas que achei (Writermark, TypeOS) vendem ao **autor**, não ao publicador —
  o que é evidência contra, não a favor. Rebaixado.
- **e7** — Porque a própria Anthropic declara que a marca não distingue "escreveu" de "editou", ela
  responde uma pergunta que ninguém fez e não responde a que as instituições fazem. O mecanismo é
  uma **lacuna**, não um evento, e por isso o prazo é curto: a lacuna já existe.
- **e7.1** — Porque o detector está em pré-visualização privada para regulador, pesquisador e
  imprensa, quem julga um concurso não o tem — e quem o tem passa a poder afirmar o que os outros
  não conseguem contestar.
- **e7.2** — Porque a marca some com reescrita completa, e porque a lei e a loja premiam o texto
  sem marca, a reescrita passa a ter valor independente da melhoria que traga. É a **retroação**
  perversa da raiz 2: o mecanismo de transparência produz trabalho humano cujo produto é opacidade.
- **e7.2.1** — Porque o que se mede passa a ser se houve revisão, e não se a revisão foi boa, o
  conceito de revisão humana se esvazia por dentro. Este é o efeito mais especulativo da raiz 2 e
  também, se acontecer, o mais grave.

**Raiz 3 — o gargalo invertido.**

- **e8** — Porque a receita por título que vende caiu na maioria dos gêneros enquanto o número de
  títulos multiplicou por 38,3, o lançamento adicional passou a disputar atenção com o anterior do
  mesmo autor. Mecanismo de canibalização, ancorado em número medido.
- **e8.1** — Porque, se o novo não vende, o que sobra é o que já foi lido, a manutenção do acervo
  ganha valor relativo. Mecanismo por eliminação, sem evidência direta: rebaixado a `baixa`.
- **e8.2** — Porque a diluição é proporcional à exposição do gênero e não ao mérito do título, ela
  penaliza mais quem estava no meio da distribuição. Evidência: 74,5% dos 385 autores que
  publicaram mais de um título substancialmente gerado aumentaram a produção mensal; o autor do
  topo somou US$ 1,7 milhão em 8 títulos. **Contradiz e8 e os dois se sustentam** — ver 5.3.
- **e8.2.1** — Porque o meio-termo é onde se aprendia o ofício por tentativa remunerada, a
  polarização retira o degrau intermediário da carreira. Inferência sobre estrutura de mercado.
- **e9** — Porque a loja não tem como avaliar 530 lançamentos novos por mês, o único atributo que
  ela consegue coletar a custo zero é a declaração do próprio criador. Três artefatos hoje: Steam
  desde 2024, itch.io com `AI Generated`, Art. 50 desde 02/08/2026. `forte` e `alta`.
- **e9.1** — Porque a declaração distingue obras num mercado saturado, ela vira posicionamento; e
  porque é binária, ela distingue sem informar. Mecanismo de sinalização de mercado, e já há
  formato de etiqueta "No AI" no itch.io para ancorá-lo.
- **e9.1.1** — Porque um bit não sustenta a distinção que o comprador quer fazer, a pressão é por
  mais bits: o que foi gerado, em que etapa, revisto por quem. O dossiê é a convergência de três
  ramos — ver 5.3.
- **e9.2** — Porque a recomendação automática falha exatamente quando o catálogo cresce mais rápido
  que o sinal de qualidade, o filtro humano recupera valor econômico. O caso do Spring Thing —
  mudar a política porque os resenhistas ameaçaram sair — é a primeira evidência de que o trabalho
  de triagem tem preço.
- **e9.2.1** — Porque quem filtra passa a decidir o que existe, o poder migra de quem produz para
  quem seleciona. Fora da janela (2032) e por inferência.
- **e10** — Porque o concurso é o único mecanismo de triagem que já opera com leitura integral e
  julgamento com nome, e porque o volume não o afoga (ele recusa por desenho), ele volta a ser
  infraestrutura. O Commonwealth 2026 recebeu 7.806 inscrições e selecionou 25.
- **e10.1** — Porque o filtro é caro e o número de submissões é o que o encarece, o organizador
  racionaliza pelo preço. Mecanismo econômico simples; transforma o filtro em barreira, o que é o
  efeito indesejado a vigiar.
- **e11** — Porque gerar é ato e ler é tempo, e o tempo não escala, a oferta cresce num relógio que
  a demanda não tem. Evidência de três lados: 30,8% dos lançamentos contra 10-27% das vendas;
  metade da presença esperada no top 100 do Next Fest; e o relato dos resenhistas de ficção
  interativa. É a **retroação** da raiz 3.
- **e11.1** — Porque quem paga é quem gera e não quem consome, o modelo de receita das ferramentas
  se ajusta a isso. Mecanismo econômico direto; já é o modelo do NovelAI (assinatura de quem
  escreve) e do MangoBox (ferramenta, não loja).
- **e11.1.1** — Porque o artefato gerado tem valor de uso alto para quem o gerou e valor de troca
  quase nulo, ele deixa de ser posto à venda. Se este efeito estiver certo, a raiz 3 se resolve
  sozinha e o mapa inteiro fica menor — ver seção 7.

**Raiz 4 — a linha no que o leitor toca.**

- **e12** — Porque o que a comunidade protege é a experiência de quem lê, e não a pureza de quem
  faz, a regra que ela escreve separa superfície e bastidor. Artefato: a regra do IFComp 2026, em
  vigor, na 32ª edição, com a justificativa registrada na pesquisa de 2025. `forte` e `alta`.
- **e12.1** — Porque a loja declara um bit e a comunidade regula uma superfície, os dois sistemas
  passam a classificar a mesma obra de forma diferente. Já é observável: o relatório do Next Fest
  precisou **desagregar** a declaração em arte, áudio, tradução, escrita e tempo real para dizer
  algo útil — ou seja, o analista já não aceita o bit.
- **e12.1.1** — Porque o bit não resolve a decisão de compra nem a de admissão, a pressão é por
  campo estruturado. Convergente com e9.1.1 e e4.
- **e12.2** — Porque a ferramenta é o que produz a superfície, suspeitar da superfície leva a
  suspeitar da ferramenta. Artefato: o cisma do Ren'Py em 2026, com desenvolvedores voltando a
  versões anteriores a 2021 do motor — o que, note-se, é uma reação sobre **código de engine**, não
  sobre uma linha de diálogo lida pelo jogador.
- **e12.2.1** — Porque a escolha de motor passou a ser lida como posição, o projeto de
  infraestrutura passa a precisar declará-la. Inferência com precedente próximo (licenças com
  cláusula ética).
- **e13** — Porque não existe equivalente do Ren'Py e o investimento em aprender é irrecuperável,
  a discordância não se converte em migração. Já relatado em 2026, por isso `prazo: 2027`.
- **e13.1** — Porque a atenção migra por motivo político e a capacidade técnica não migra junto, a
  alternativa ganha usuários sem ganhar recursos. Nomes que apareceram como alternativas: Light.vn,
  RenJS, Twine, Bitsy, Decker, Ink.
- **e13.1.1** — Porque a forma é sustentada pelo que a ferramenta sabe fazer, uma ferramenta
  congelada congela a forma, e a invenção migra para fora dela sem o nome dela. Inferência.
- **e14** — Porque a declaração é binária e o mercado a lê como demérito — títulos declarados
  aparecem no top 100 a metade da sua representação —, declarar corretamente custa vendas. **É a
  retroação da raiz 4 e é a mais desconfortável do mapa**: a infraestrutura de transparência cria
  o incentivo a mentir.
- **e14.1** — Porque a norma comunitária depende de que cumpri-la não seja ruinoso, e cumpri-la
  passou a ser, a sanção tem de vir de fora. É por isso que o Art. 50 importa mais do que parece:
  não por informar o leitor, mas por retirar do autor a escolha.
- **e14.1.1** — Porque os dois públicos leem a mesma etiqueta com sinais opostos, a obra não
  consegue existir nos dois. Inferência; é o efeito que descreve a fratura, se ela se consolidar.

### 5.2 As classes de referência usadas para dar os prazos

Prazo sem classe de referência é chute. As sete que usei, com o que cada uma ancora:

1. **Tradução amadora e patches de fã (2000–2026).** Vinte e cinco anos em nicho, sem nunca cruzar
   para o consumidor comum, apesar de gratuita e desejada. Ancora e1 e e1.2: foi por causa dela
   que empurrei e1 de 2027 para 2028 e o rebaixei de `alta` para `media`. O que muda agora é a
   fricção (instalar e configurar virou comprar por R$ 15,75), não o desejo — e fricção costuma
   mover adoção mais devagar do que se espera.
2. **Declaração obrigatória na Steam (jan/2024 → 2026).** ~7% na largada, 10,9% em 2024, 19,9% em
   2025, 30,8% em 2026: **dois anos e meio para triplicar**, com projeção de metade dos
   lançamentos em 2027-2028. Ancora e9, e12.1 e e14: regimes de declaração saturam em 3 a 4 anos.
3. **Narração sintética no Audible (mai/2025 → 2026).** Mais de 50 mil títulos em cerca de um ano,
   a partir do momento em que a plataforma abriu o serviço às editoras. Ancora e8 e e11: quando a
   plataforma abre a torneira, o catálogo inunda em **12 meses**, não em cinco anos.
4. **C2PA (especificação 2021 → adoção por provedor 2024-2026).** Cinco anos entre padrão e
   embarque por padrão num provedor grande. Ancora e4, e9.1.1 e e12.1.1: infraestrutura de
   procedência leva meia década do desenho ao uso, mesmo com lei empurrando.
5. **Greve e contrato SAG-AFTRA (26/07/2024 → 09/07/2025, ratificado com 95,04%).** Onze meses de
   greve, ~2 anos do conflito à cláusula. Ancora e3 e e3.1: quando há categoria organizada, o
   conflito vira contrato em torno de dois anos — e é por isso que o prazo de e3 é 2028 e não 2031.
6. **Detecção de plágio (Turnitin, 2000 → padrão institucional ~2010).** Cerca de dez anos entre a
   ferramenta existir e virar padrão de prova aceito. Ancora e4.1 e e10: por essa referência, um
   padrão de prova de autoria maduro fica **fora** do horizonte de 2031, o que é exatamente por que
   e4.1 está em 2030 com confiança baixa e não em 2028.
7. **AI Act (proposta 2021 → Art. 50 aplicável em 02/08/2026, com prorrogação a 02/12/2026).**
   Cinco anos da proposta à aplicação, com prorrogação de última hora. Ancora e1.1.1, e6 e e14.1:
   efeito regulatório novo dentro deste mapa chega em 2030-2031, não antes, porque o relógio
   legislativo é esse — e a prorrogação de quatro meses concedida em 2026 é o lembrete de que ele
   costuma atrasar, nunca adiantar.

### 5.3 Cruzamentos: convergência, retroalimentação, contradição

**Convergência — o dossiê de procedência.** É o achado mais valioso deste mapa. Três ramos de
raízes diferentes chegam ao mesmo objeto de 2ª e 3ª ordem, por mecanismos que não se conhecem:

- da **raiz 2**, e4 → o prêmio pede rascunho, carimbo de tempo e certificado de processo;
- da **raiz 3**, e9 → e9.1 → e9.1.1: a loja precisa de mais que um bit para o comprador decidir;
- da **raiz 4**, e12 → e12.1 → e12.1.1: a comunidade regula superfícies e o bit não as descreve;
- e, de lado, da **raiz 1**, e1.1.1: a lei europeia precisa saber quem tem responsabilidade
  editorial sobre a versão traduzida.

Quatro caminhos independentes — jurídico, comercial, normativo e regulatório — convergem para **a
obra passar a viajar com um registro estruturado de como foi feita**. Não é uma previsão sobre
tecnologia: é o ponto em que quatro pressões distintas precisam do mesmo artefato. Se algo neste
mapa merece ser construído de propósito em vez de acontecer por acidente, é este dossiê — e o
experimento da seção 10 testa justamente se ele funciona ou se ele apenas muda a nota.

**Retroalimentação 1 — o ciclo da lavagem (raiz 2).** e7 (a marca não prova autoria) → e7.2 (o
autor reescreve para apagar a marca) → a marca perde valor probatório → a instituição migra para
atestação de processo (e4, e4.2) → que é mais identificante e mais invasiva que a marca. O ciclo
**reforça** a raiz 2 e a empurra para a sua forma mais intrusiva: quanto menos o artefato prova,
mais o processo é vigiado. Quem quiser quebrar o ciclo tem de quebrá-lo em e7.2, não em e4.

**Retroalimentação 2 — o freio da demanda (raiz 3).** e11 (o público prefere gerar a jogar o
gerado) → e11.1 (a ferramenta se vende a quem cria) → e11.1.1 (o gerado deixa de ser publicado) →
o despejo diminui → a raiz 3 se **enfraquece sozinha**. É a única retroalimentação negativa forte
do mapa, e é ela que separa o cenário provável do indesejável na seção 9.

**Contradição 1 — escrever mais deixa de compensar, e quem escreve mais concentra o topo.** e8 e
e8.2 não podem ser verdade para a mesma pessoa, e os dois saem do **mesmo estudo**: a receita por
título cai, e 74,5% dos autores que repetiram aumentaram a produção. Não resolvo: registro os dois
e digo o que decide entre eles. **O que decide é se o autor já tinha alcance antes.** Para quem
tem, o título marginal capta atenção que já era sua; para quem não tem, ele disputa com o próprio
título anterior. A contradição é, na verdade, a descrição de uma distribuição que se parte em duas
— e é exatamente o que e8.2.1 afirma.

**Contradição 2 — o detentor bloqueia a sobreposição, e a sobreposição roda offline.** e1.3 exige
um ponto de estrangulamento; e1 e e3.2 dizem que não há nenhum depois da instalação. **O que decide
é a loja**: se a Steam retirar de venda a categoria de tradutores por sobreposição, e1.3 vence; se
mantiver — e ela ganha dinheiro com ela —, e3.2 vence e a regulação migra para e3.2.1. Note-se que
esta é uma decisão de uma empresa, tomável em uma reunião, e o mapa inteiro da raiz 1 depende dela.

**Contradição 3 — a comunidade exige declaração e o mercado pune quem declara.** e12 e e14. O que
decide é se a sanção externa (Art. 50, política de loja) chega antes de a norma comunitária se
desmoralizar. Se chegar, e12 se consolida; se não, e14.1.1 descreve o resultado: dois públicos e
nenhuma obra que exista nos dois.

### 5.4 Cobertura STEEP e quem perde

**Social.** e5 (a perícia amadora), e4.3 (o custo desigual da suspeita), e4.1.1 (a perda do
anonimato como corretor de viés), e14.1.1 (a fratura de público). É o eixo mais denso do mapa, e
não por escolha: os três episódios documentados de 2026 são todos sociais antes de técnicos.

**Tecnológico.** e1 (execução local), e7 (o limite declarado da marca d'água), e12.1.1 (declaração
por superfície), e2.2 (texto fora da imagem). Menos denso do que se esperaria — o que é o próprio
achado: neste tema, 2026 foi um ano institucional, não um ano técnico. A única melhora técnica
grande medida (`WSE-Bench`) diz que escala **não** melhora coerência.

**Econômico.** e8, e8.2, e9, e9.2, e10, e11, e1.1, e6. É onde estão os números duros e onde a
confiança é mais alta.

**Ecológico.** Quase vazio, e registro isso em vez de forçar. O único fio encontrado é argumentativo:
no debate sobre o Ren'Py, o consumo de água dos modelos foi usado como razão para não usar IA em
tarefa não crítica. É um **argumento em uso**, não um efeito medido, e não virou efeito da roda
porque não achei mecanismo que ligue consumo energético a uma mudança na prática narrativa dentro
do horizonte. Se alguém achar, é um buraco deste mapa.

**Político.** e3 (proibição antes de contrato no Brasil), e6 (registrabilidade após a negativa de
certiorari), e1.3, e14.1 (a norma que precisa de sanção externa), e1.1.1 (o cargo que a lei
inventou). Segundo eixo mais denso.

**Quem perde — a lista, porque mapa que só lista quem ganha está incompleto.**

| Quem | Por quê | Efeito |
|---|---|---|
| Dubladores e tradutores no Brasil | erosão de preço e deslocamento da função para o cliente | e3, e3.2 |
| Cenas de tradução amadora | perdem a espera que lhes dava função e autoridade | e1.2 |
| Autores já lidos com desconfiança | pagam o custo da acusação mesmo quando ela é infundada | e4.3 |
| Autores no meio da distribuição | a diluição pune a média e premia quem já tinha alcance | e8, e8.2.1 |
| Quem depende de submissão anônima | o rastro de processo é identificante por construção | e4.1, e4.1.1 |
| Quem declara honestamente | a etiqueta binária custa vendas sem informar nada | e14 |
| Autores presos ao Ren'Py | discordam da ferramenta e não têm para onde ir | e13 |
| Empresas de localização de texto | o produto que vendiam virou bem livre | e1.1 |
| Quem publicava por volume sem alcance | o título marginal canibaliza a própria atenção | e8 |

## 6. Sinais fracos e wildcards

### 6.1 Sinal fraco — a detecção que não olha o texto

**Onde foi visto.** Em junho de 2026, no Archive of Our Own: a classe CSS
`font-claude-response-body`, que um modelo deixa no HTML e que sobrevive à colagem em certas
plataformas. Um grupo anônimo publicou um PDF de 25 páginas nomeando cerca de trinta autoras a
partir dela, com uma ferramenta de verificação que é literalmente uma regra de estilo pintando a
página de vermelho.

**O que mudaria.** Se a atribuição passar a ser feita por **resíduo de artefato** em vez de por
estilo, ela deixa de exigir perícia, deixa de custar dinheiro e deixa de precisar de um detector
sob licença. A acusação vira infraestrutura de praça pública. E, ao mesmo tempo, vira frágil
demais para ser prova: a mesma análise contou 6 ocorrências numa obra de 263.627 palavras e 1.300
ocorrências numa obra muito mais curta, e tratou as duas igual.

**O sinal observável de que está crescendo.** Uma plataforma de publicação amadora anunciar
sanitização de metadados na publicação. No dia em que isso acontecer, e5.1 entrou em vigor — e, com
ele, a impossibilidade de distinguir higiene de encobrimento.

### 6.2 Sinal fraco — a tradução de prateleira com preço em real

**Onde foi visto.** *Game Overlay Translator*, R.U Studio, na Steam desde 16/07/2026, R$ 15,75, OCR
e tradução neural no dispositivo, 35 línguas de destino, funcionamento offline, integração opcional
com modelo local.

**O que mudaria.** Pequeno em tudo — 28 análises no total — e enorme no que significa: uma obra em
japonês consumida em português sem que ninguém a tenha traduzido, comprada na mesma loja em que o
jogo é vendido, por menos que o preço de um café da tarde. É a materialização inteira da raiz 1 num
objeto que cabe num recibo.

**O sinal observável.** A função aparecer **na plataforma** e não como aplicativo de terceiro:
uma opção de tradução por sobreposição no cliente da Steam, no console, ou no sistema operacional.
No dia em que uma plataforma embarcar isso, e1 pula de 2028 para o ano seguinte, e1.3 vira
irrelevante e e2 acelera.

### 6.3 Sinal fraco — o cargo que a lei inventou

**Onde foi visto.** Art. 50(4) do AI Act: a obrigação de divulgar texto gerado tem exceção quando o
texto passou por **revisão editorial humana** e **alguém detém responsabilidade editorial** sobre a
publicação. Há também exceção para obra artística e criativa, com divulgação apropriada.

**O que mudaria.** Isto é uma lei sobre transparência criando, como efeito colateral, uma
**função**: existe alguém que responde. Se essa figura pegar, o debate sai de "foi máquina ou
humano?" e vai para "quem responde por isto?" — que é uma pergunta melhor, respondível, e com
tradição jurídica de séculos. Seria a saída mais civilizada deste mapa inteiro.

**O sinal observável.** Uma editora ou uma loja passar a exibir, junto da obra, o nome de quem
detém responsabilidade editorial — não o nome do autor, o nome do responsável. Seria a primeira
peça concreta do dossiê de procedência da seção 5.3.

### 6.4 Sinal fraco — a linha desenhada no lugar certo

**Onde foi visto.** A regra do IFComp 2026: conteúdo voltado ao jogador criado por humanos,
ferramenta generativa liberada no desenvolvimento, e proibição de a obra exigir que o jurado
interaja com serviço generativo externo durante o jogo.

**O que mudaria.** É a primeira formulação normativa que não é binária e que não é sobre pureza:
ela protege a experiência, não a proveniência. Se for copiada por lojas — e a desagregação que o
relatório do Next Fest já faz sugere pressão nessa direção —, toda a infraestrutura de declaração
construída desde 2024 fica obsoleta de uma vez, porque estava medindo outra coisa.

**O sinal observável.** Uma loja substituir a caixa "usou IA generativa?" por campos separados de
arte, texto, voz, tradução e geração em tempo real. É e12.1.1, e seria o fim do bit.

### 6.5 Sinal fraco — a obra que muda a cada leitor, e que não apareceu

**Onde foi visto.** Em lugar nenhum como produto. É a razão de estar aqui e não na seção 4. Procurei
duas vezes, com termos diferentes; o que voltou foi material de venda (histórias que reagem a
batimento cardíaco medido por relógio, livros infantis com o nome da criança) e trabalho acadêmico
em estágio de construção de métrica — o `NARRA-Gym`, com nove modelos e oito personas, mede
personalização empática justamente porque ainda não se sabe medi-la.

**O que mudaria.** Tudo. Se a obra passar a ser diferente para cada leitor, a conversa sobre um
livro deixa de ter referente comum, a crítica perde o objeto, e a citação — a operação que
sustenta ensino e pesquisa — deixa de ser verificável. É a pergunta de 2ª ordem que a disciplina
propõe, e eu não consegui sustentá-la com evidência.

**O sinal observável, e ele é preciso.** Uma obra comercial cujo **texto** (não a ordem das cenas,
não a dificuldade) difira entre dois compradores, e cuja loja precise decidir o que fazer com a
resenha. O dia em que uma loja tiver de responder "esta resenha é sobre qual versão?" é o dia em
que este sinal virou raiz — e o mapa precisa ser refeito.

### 6.6 Sinal fraco — a recusa que não cede com a qualidade

**Onde foi visto.** A política da Choice of Games e da Hosted Games: recusa de prosa e arte geradas
por **incerteza jurídica sobre o direito autoral**, com um argumento estético anexo (o objetivo de
treino minimiza a surpresa, e output previsível é a definição de lixo gerado), mas com o motivo
operativo sendo o primeiro.

**O que mudaria.** Uma recusa estética cede quando a qualidade sobe. Uma recusa jurídica não cede —
ela cede quando a **lei** muda. Isso significa que a variável que governa o acesso ao mercado
comercial da ficção interativa não é o progresso dos modelos: é a jurisprudência. É contraintuitivo
e é o mecanismo mais estável do mapa.

**O sinal observável.** Um registro de direito autoral concedido sobre obra narrativa com texto
gerado, com base em seleção e arranjo humanos demonstrados. No dia seguinte, e6 inverte de sinal —
está no wildcard 3.

### 6.7 Sinal fraco — a frase do fórum

**Onde foi visto.** No fórum de ficção interativa, em discussão sobre competições abertas a
entradas geradas: *"as pessoas gostam muito mais de gerar jogos com LLM do que de jogar jogos
gerados por LLM"*. E, ao lado, o relato de que o Spring Thing mudou de política porque os
resenhistas disseram que parariam de participar se tivessem de atravessar quantidades crescentes
de lixo.

**O que mudaria.** É a formulação mais econômica do freio da raiz 3, e ela vem de dentro da
comunidade, não de um analista. Se for generalizável, o mercado de narrativa gerada não é um
mercado de obras: é um mercado de **ferramentas**, e toda a seção 5 da raiz 3 muda de forma.

**O sinal observável.** A receita das plataformas de geração narrativa crescer enquanto a receita
das obras geradas estagna — que é, aliás, exatamente o que o NovelAI (assinatura, sem capital de
risco) e o MangoBox (ferramenta, não loja) já parecem ser.

### 6.8 Wildcard 1 — a marca d'água derrubada num tribunal

**Mecanismo.** Um prêmio grande retira um título já premiado com base em marca d'água detectada. O
autor processa. A defesa usa o que o próprio provedor publicou: a marca não distingue escrita de
edição, é ineficaz em amostra pequena e some com reescrita. O tribunal decide que procedência
técnica **não é prova de autoria**, e fixa isso.

**Por que é improvável.** Exige a coincidência de três coisas — um prêmio que use a marca (hoje o
detector não está acessível a prêmios), um autor com recursos para litigar, e um tribunal disposto
a se pronunciar sobre método técnico em vez de decidir por procedimento.

**O que faria com o mapa.** Derruba e4, e7.1 e e9.1.1 de uma vez: toda a infraestrutura de
procedência perde valor **jurídico**, e sobra só valor de marketing. A convergência da seção 5.3
deixa de acontecer por necessidade e passa a acontecer, se acontecer, por moda.

**Sinal precoce.** Qualquer instituição de premiação anunciar uso de verificador automático como
critério eliminatório — a Commonwealth Foundation disse em 22/06/2026 que iniciou conversas
exatamente sobre isso.

### 6.9 Wildcard 2 — a obra que o provedor desligou

**Mecanismo.** Um jogo com narrativa gerada em tempo de execução — do tipo de *Whispers from the
Star* ou do modo *Dreamweaver* — depende de um modelo hospedado. O provedor desliga o modelo. A
obra publicada, comprada e jogada deixa de existir, e não há build antiga para voltar, porque a
obra **nunca esteve no disco**.

**Por que é improvável — e por que já aconteceu com outra coisa.** Não é especulação de ficção
científica: a OpenAI notificou em 24/03/2026 e removeu a Videos API e todos os apelidos do Sora 2
em 24/09/2026, **sem substituto recomendado**. O que falta para o wildcard é que o desligado seja
o motor de uma obra narrativa vendida, e não uma API de geração.

**O que faria com o mapa.** Transforma a compra de obra gerada em runtime em **arrendamento**, com
todas as consequências: conservação de mídia vira cláusula contratual, arquivo de jogo vira
impossível, e a pergunta "esta obra ainda existe?" passa a ter resposta datada. Acrescentaria um
ramo inteiro à raiz 3 que este mapa não tem.

**Sinal precoce.** Um estúdio anunciar garantia contratual de disponibilidade do modelo, ou modo
degradado local, na página de venda de um jogo com narrativa gerada.

### 6.10 Wildcard 3 — o registro concedido

**Mecanismo.** Um tribunal ou o próprio escritório de direito autoral reconhece proteção sobre a
**seleção e o arranjo** de saídas geradas, aceitando como prova o prompt arquivado e o rastro de
processo. A registrabilidade deixa de ser barreira.

**Por que é improvável no horizonte.** A Suprema Corte negou certiorari em 02/03/2026, deixando de
pé a exigência de autoria humana; a orientação de janeiro de 2025 admite registro quando há
"autoria humana significativa", caso a caso, o que é justamente o oposto de uma regra.

**O que faria com o mapa.** Inverte e6 e e6.1: a recusa comercial da Choice of Games perde o seu
motivo declarado, e a coautoria declarada deixa de ser risco patrimonial. Boa parte da raiz 2
continuaria de pé (a questão social não é jurídica), mas o mecanismo econômico mais forte do mapa
sairia.

**Sinal precoce.** Um registro concedido com fundamentação publicada em que o prompt apareça como
prova — e não como confissão.

### 6.11 Wildcard 4 — a lavagem automatizada

**Mecanismo.** Alguém publica uma ferramenta que remove a marca d'água sem reescrever o texto —
parafraseando localmente só nas posições de escolha de baixo risco. O trabalho humano de e7.2
deixa de ser necessário.

**Por que é improvável.** Exige conhecimento da regra de marcação, que não é pública; mas a
literatura de marca d'água em texto é aberta e o PAN 2026 tem uma tarefa compartilhada dedicada a
isso — ou seja, há uma comunidade organizada atacando o problema por motivos legítimos.

**O que faria com o mapa.** e7.2 deixa de exigir esforço, e7.2.1 nunca acontece (não há nem
simulacro de revisão), e o Art. 50 vira letra morta para texto em menos de um ano. Toda a raiz 2
se desloca de uma vez para atestação de processo, que é a variante mais invasiva.

**Sinal precoce.** Um artigo aceito no PAN, ou um repositório com mais de mil estrelas, demonstrando
remoção de marca com preservação de sentido medida.

## 7. Contra o próprio mapa

Este é o passo que a maioria das rodas não tem. Foi feito por escrito sobre o mapa já pronto, e o
mapa foi alterado. O registro auditável das alterações está em 7.8.

### 7.1 Pré-mortem: é 2031 e este mapa se mostrou errado. Por quê?

**Razão 1 — porque a coisa toda passou, e o tema de 2031 era outro.** A hipótese mais provável de
fracasso deste mapa não é errar um efeito: é ter escolhido o objeto errado. Em 2026 a narrativa
gerada é, pelos números, uma **fração pequena** do que se usa IA para fazer em mídia: no Next Fest
de junho, ativos visuais responderam por cerca de 60% das declarações e escrita e diálogo por
"baixo". Se em 2031 a escrita continuar sendo o uso menos comum, este mapa terá mapeado uma
periferia com muita precisão. **Aponta para:** rebaixar toda a raiz 3, que assume que o despejo
narrativo continua. *Aplicado em 7.8.*

**Razão 2 — porque as instituições se acomodaram e nada mudou.** Todo o eixo das raízes 2 e 4
supõe que prêmios, editoras, lojas e comunidades **agem**. A evidência de 2026 é mais modesta que
isso: a Commonwealth Foundation, diante de três acusações públicas, examinou, concluiu que não
houve IA, manteve todos os prêmios, e disse que ia conversar com outras organizações. Isso é o
comportamento normal de uma instituição: absorver o choque e continuar. Se o mesmo se repetir por
cinco anos, e4, e10 e e12.1.1 não acontecem. **Aponta para:** e4 e e10.

**Razão 3 — porque o gerado ficou bom o bastante para ninguém perguntar.** Todo o mapa supõe que a
distinção importa. Se a qualidade média do gerado subir até o ponto em que o leitor comum não
distingue e não se interessa, a procedência vira uma preocupação de nicho profissional — como
ninguém pergunta hoje se a capa de um livro foi feita em Illustrator. A evidência contra isso é o
`WSE-Bench` (escala não melhora consistência) e os 45,7% de preocupação da PGB; a evidência a favor
são os 39,3% que comprariam assim mesmo. **Aponta para:** e9.1 e e14 — se o leitor não se importa,
o selo não vira posicionamento **e** declarar não custa vendas, e as duas pontas caem juntas.

### 7.2 Extrapolação linear: o que aqui é só "mais do mesmo, maior"?

Três efeitos foram marcados como extrapolação e tratados:

- **e8 ("escrever mais deixa de compensar")** é a extrapolação mais pura do mapa: é a curva de
  diluição do estudo da Amazon prolongada. Ganhou mecanismo de não-linearidade ao ser cruzada com
  e8.2 — a mesma curva produz resultados opostos conforme o alcance prévio, o que é uma
  bifurcação, não uma reta. Mantido.
- **e9.2 ("a curadoria humana volta a ser paga")** era "mais curadoria, porque mais conteúdo". Só
  sobrevive porque tem um mecanismo não-linear observado: o Spring Thing mudou de política quando
  os resenhistas ameaçaram **sair**. É um limiar, não uma inclinação. Mantido, com o mecanismo
  explicitado em 5.1.
- **e2.1 ("o valor do catálogo deixa de depender da língua")** não tinha mecanismo próprio — era
  "a tradução melhora, logo a língua importa menos". Perdeu confiança e ganhou prazo. *Aplicado em
  7.8.*

### 7.3 Velocidade de adoção: confronto com a classe de referência

- **e1** pedia 2027 com confiança alta. A classe de referência 1 (tradução amadora, 25 anos em
  nicho) desmente: o desejo existe há duas décadas e nunca cruzou. O que mudou é fricção e preço, e
  fricção move adoção devagar. **Empurrado para 2028 e rebaixado.**
- **e4** pedia 2028. A classe 6 (Turnitin, ~10 anos da ferramenta ao padrão de prova) diz que um
  padrão maduro fica fora de 2031. Mantive 2028 porque o que e4 afirma não é o padrão maduro — é o
  prêmio **pedir** o rastro, que é um ato administrativo barato e já foi executado uma vez em
  2026. Mas **e4.1**, que depende do padrão, foi empurrado para 2030 com confiança baixa.
- **e12.1.1** (declaração por superfície) pedia 2029. A classe 4 (C2PA, cinco anos do padrão ao
  embarque) e a classe 2 (declaração na Steam, 3-4 anos para saturar) somadas dizem 2031.
  **Empurrado.**
- **e3** (regulação da dublagem no Brasil) foi conferido contra a classe 5 (SAG-AFTRA, ~2 anos do
  conflito à cláusula). A audiência é de agosto de 2024, os projetos estão em tramitação: 2028 é
  compatível, com a ressalva de que o relógio legislativo brasileiro é mais lento que o de uma
  negociação coletiva. **Mantido, e a ressalva fica registrada.**

### 7.4 A raiz que não acontece: o que sobra do mapa?

- **Sem a raiz 1** (a tradução fica em nicho, como ficou por 25 anos): perdem-se e1, e2, e3 e todos
  os descendentes — **13 efeitos**. As raízes 2, 3 e 4 ficam intactas, porque nenhuma delas depende
  de tradução. O mapa encolhe e não muda de forma.
- **Sem a raiz 2** (a marca d'água não pega, a atestação não sai do nicho, as instituições não
  pedem nada): perdem-se 14 efeitos. Mas e5 **já aconteceu** — a perícia amadora é fato de 2026 —,
  então o que se perde é a institucionalização, não o fenômeno. Sobra um mundo em que a acusação
  existe e a prova não, que é pior que o mapa e não está desenhado aqui. É a maior fragilidade
  desta seção.
- **Sem a raiz 3** (o despejo não continua, seja por saturação, seja porque a IA em narrativa
  continua marginal): perdem-se 11 efeitos, e o mapa perde o seu eixo econômico. As raízes 2 e 4
  sobrevivem inteiras, porque a briga sobre autoria não precisa de volume — precisa de um caso.
- **Sem a raiz 4** (a linha continua binária, o IFComp recua, o Ren'Py se acomoda): perdem-se 9
  efeitos. E, notavelmente, e9 (a loja filtra por procedência declarada) **fica de pé**, porque ele
  deriva da raiz 3.

**O teste passa.** Nenhuma raiz sustenta sozinha o mapa inteiro, e as quatro têm mecanismos
distintos — custo marginal no cliente, obrigação jurídica, economia de atenção, norma comunitária.
A que mais se aproxima de ser dispensável é a raiz 1, que é também a mais autocontida; e a que
mais expõe um buraco quando removida é a raiz 2.

### 7.5 Suposições escondidas

Sete premissas que o mapa assumia sem dizer. Cada uma, se quebrada, é um efeito removido ou um
wildcard novo.

1. **Que a capacidade dos modelos só acumula.** O desligamento do Sora 2 (24/09/2026, sem
   substituto) desmente, e virou o wildcard 2. Esta era a premissa mais perigosa do mapa e eu a
   tinha, sim, antes de encontrar a tabela de depreciações.
2. **Que os provedores continuam marcando.** A marca d'água do Claude é uma decisão de empresa sob
   pressão do Art. 50. Um provedor fora da Europa, ou um modelo aberto rodando localmente, não
   marca nada — e a raiz 2 inteira supõe que a saída passa por quem marca.
3. **Que modelo aberto continua aberto e rodável em máquina de consumidor.** A raiz 1 depende
   disso: OCR e tradução neural offline num aplicativo de R$ 15,75. Se a licença ou o hardware
   mudarem, a tradução volta para a nuvem e volta a ter dono.
4. **Que a plataforma continua permitindo.** e1, e3.2 e e5.1 dependem de a loja não agir. Uma
   decisão de uma empresa, tomável numa reunião, derruba três ramos.
5. **Que a regulação europeia é o relógio do mundo.** Metade do eixo político deste mapa é o Art.
   50. O Brasil está legislando sobre voz, não sobre texto; os Estados Unidos decidiram por
   omissão (certiorari negado). O mapa é mais europeu do que declarei no recorte "global".
6. **Que o público quer saber.** e9.1 e e14 supõem que a procedência é um atributo de compra. Os
   39,3% da PGB que comprariam assim mesmo são a evidência contra, e o experimento da seção 10 foi
   desenhado para atacar exatamente esta premissa.
7. **Que a novela visual continua existindo como forma.** e13.1.1 é o único efeito que questiona
   isso, e é de 3ª ordem. Todo o resto do mapa assume a forma dada.

### 7.6 Viés do autor

Três vieses meus, nomeados.

**Primeiro: gosto do achado contraintuitivo, e isso me fez recusar a raiz óbvia.** A seção 4.0
recusa "a frase vira novela visual" com argumento, mas a satisfação de recusá-la veio antes do
argumento. Um leitor razoável pode dizer que baixar a barreira de entrada de "saber programar
Ren'Py" para "escrever uma frase" **é** a ruptura, e que eu a reclassifiquei como efeito porque a
ruptura de mercado ainda não apareceu nos números — o que confunde disrupção com resultado
comercial. Registro a objeção porque ela é boa, e não a resolvo.

**Segundo: sou professor, e prêmio, concurso e critério de admissão são o meu mundo.** As raízes 2
e 4 são, juntas, 23 dos 57 efeitos, e são precisamente sobre julgar trabalho escrito e sobre quem
tem autoridade para admitir. É plausível que eu esteja dando a instituições de legitimação um peso
que elas não têm fora do meu ofício. O contrapeso honesto é que os três episódios documentados de
2026 foram todos de legitimação — mas eu também os encontrei porque os procurei.

**Terceiro: escrevi este mapa com a mesma tecnologia que ele analisa**, e o fiz sob as regras da
seção 4.4 invertidas — o leitor toca conteúdo gerado, e a declaração está no frontmatter. Se e14
estiver certo, este documento paga o custo que ele descreve.

### 7.7 Calibração

Contagem por ordem, depois das alterações: 1ª ordem — alta 3, média 11, baixa 0; 2ª ordem — alta 1,
média 16, baixa 9; 3ª ordem — alta 0, média 0, baixa 17.

A distribuição cai com a ordem, como deve. Duas observações sobre ela. Primeira: **não há nenhum
efeito de 1ª ordem com confiança baixa**, o que é correto neste mapa mas merece suspeita — significa
que eu só admiti como 1ª ordem o que já tem artefato, e efeitos de 1ª ordem genuinamente incertos
podem ter sido empurrados para baixo na árvore por comodidade de calibração. Segunda: os três
`alta` de 1ª ordem (e5, e9, e12) são todos efeitos que **já aconteceram** em 2026 — o que é honesto,
mas quer dizer que a parte mais confiável deste mapa é a parte que não é futuro.

### 7.8 Registro de alterações

Cota mínima da skill: pelo menos um efeito rebaixado ou removido por raiz. A bateria derrubou nove
e removeu quatro.

**Raiz 1:**
- `e1`: prazo 2027 → **2028**; confiança alta → **media**. Porque a classe de referência 1
  (tradução amadora em nicho por 25 anos) diz que fricção e preço movem adoção mais devagar do que
  a disponibilidade sugere.
- `e2.2`: era efeito de **1ª ordem** com `sinal: medio` → reclassificado como **2ª ordem** sob e2,
  com `sinal: fraco`. Porque não há um só caso observado de estúdio mudando decisão de arte por
  causa de tradução no cliente, e porque, sem e2, ele não tem causa.
- `e2.1`: prazo 2029 → **2031**; confiança media → **baixa**. Porque, na §7.2, ele se revelou
  extrapolação sem mecanismo próprio.

**Raiz 2:**
- `e4.1`: prazo 2028 → **2030**; confiança media → **baixa**. Porque a classe 6 (Turnitin, ~10 anos
  até virar padrão de prova) coloca um padrão maduro fora de 2031.
- `e6.2`: confiança media → **baixa**. Porque as duas ferramentas de atestação que encontrei
  (Writermark, TypeOS) vendem **ao autor**, e o efeito afirma venda **a quem publica** — a evidência
  disponível é contra, não a favor.
- **Removido** — `e4.4`, *"cursos de escrita criativa reorganizam o currículo em torno de
  procedência"*: cai na lista de efeitos proibidos do §3 da skill (formação reorganiza currículo),
  sem curso nomeado e sem mecanismo que o ligue ao pai. Vai para a seção 12.3.

**Raiz 3:**
- `e8.1`: confiança media → **baixa**; prazo 2029 → **2031**. Porque o mecanismo é por eliminação
  ("se o novo não vende, sobra o velho") e não tem nenhum caso.
- **Removido** — `e10.2`, *"universidades criam disciplina de curadoria de acervo gerado"*: mesmo
  motivo que o anterior, e com o agravante de que eu tinha interesse pessoal em que fosse verdade.
- **Removido** — `e9.3`, *"reguladores criam uma categoria jurídica nova para obra gerada"*:
  proibido pelo §3 sem regulador nomeado — e, além disso, **já aconteceu** (Art. 50). Virou
  contexto na seção 3.1, não efeito.

**Raiz 4:**
- `e12.1.1`: prazo 2029 → **2031**. Porque as classes 2 e 4 somadas (saturação de regime de
  declaração + adoção de padrão de procedência) não permitem 2029.
- `e14`: reformulado. Era *"leitores boicotam obras declaradas"*, que falhava no teste de
  especificidade (serve para qualquer tecnologia rejeitada) e não tinha mecanismo. Virou a
  inversão de incentivo, ancorada num número: títulos declarados aparecem no top 100 a metade da
  sua representação no campo.
- **Removido** — `e13.2`, *"surge a profissão de curador de procedência"*: proibido pelo §3 (nova
  profissão) sem nome e sem mecanismo; a substância útil dele foi absorvida por e9.2, que tem ator
  nomeado (o resenhista do Spring Thing) e mecanismo de limiar.

**Um efeito que a bateria testou e não derrubou, com o motivo:** `e5` (a perícia amadora
distribuída) manteve `sinal: forte` e `confianca: alta`, contra a regra geral de desconfiar de
confiança alta. Mantido porque há **três artefatos independentes** em 2026 — o PDF do AO3 com ~30
nomes, o episódio Commonwealth com detector comercial, e o vídeo que derrubou *Shy Girl* — e porque
o efeito descreve algo que já ocorreu, não algo que ocorrerá.

## 8. O que a máquina errou

Eu sou a máquina. Sete itens específicos sobre esta rodada, cada um com como percebi.

**1. Quase publiquei "a OpenAI desistiu de gerar vídeo" a partir de um resumo de busca.** O
primeiro resultado dizia que o Sora 2 seria desligado em 24/09/2026 e a tentação era escrever isso
como se fosse uma retirada de mercado. Fui à tabela de depreciações da OpenAI e o que ela sustenta
é preciso e mais estreito: a **Videos API** e os apelidos `sora-2` e `sora-2-pro` saem da API
nessa data, sem substituto recomendado. A data de 26/04/2026 para o encerramento do aplicativo e
da web, que aparece em fontes secundárias, eu **não** consegui confirmar: a página oficial de ajuda
devolveu 403. Ela não está no corpo do mapa por isso.

**2. Usei números de um detector publicados pelo próprio fabricante do detector.** As marcas de
"100% IA" sobre os contos do Commonwealth vêm do blog da Pangram, que vende o Pangram. Eu as uso
para descrever **o que foi alegado**, nunca o que é o caso — e a decisão da Commonwealth Foundation,
de 22/06/2026, conclui o oposto. Se eu tivesse deixado o número valer como fato, teria publicado
material de marketing de um fornecedor como achado de pesquisa. É o erro mais fácil de cometer neste
tema, porque o número é vistoso e a fonte é pública.

**3. O emblema do tema é o meu ponto mais fraco.** Abri a página "sobre" do MangoBox e ela não
tem: número de usuários, número de histórias, preço, data de lançamento, modelo usado. Nada. Passei
por um momento em que a saída natural era escrever prosa plausível sobre "milhares de histórias
geradas" — e ela teria passado despercebida. A seção 3.1 diz, em vez disso, que o emblema do tema é
**opaco**, o que é menos satisfatório e é o que eu tenho.

**4. Dois números importantes vêm de fonte secundária porque a primária me barrou.** Os percentuais
da Pesquisa Game Brasil 2026 (45,7% e 39,3%) vêm do Omelete, porque o Adrenaline devolveu 403; e a
história da detecção no AO3 vem de um ensaio no Substack, porque a postagem administrativa do
próprio AO3 devolveu 403. O "12,6 milhões de obras raspadas em abril de 2025" é um número redondo
que eu **não** verifiquei na fonte e que, por isso, não sustenta nenhum efeito da roda — está na
seção 3 como contexto e nada mais.

**5. Procurei duas vezes a obra que se adapta a cada leitor e voltei com material de venda.** Dei
ao resultado o estatuto de **busca negativa** (seção 4.0, candidato 5, e sinal fraco 6.5) em vez de
tratar marketing como sinal. Declaro a tentação porque ela era grande: é a pergunta de 2ª ordem que
o enunciado da disciplina propõe, e havia um caminho fácil para escrever uma cadeia inteira em cima
dela.

**6. Atribuí a uma comunidade a fala de uma pessoa.** A frase *"as pessoas gostam muito mais de
gerar jogos com LLM do que de jogar jogos gerados por LLM"* é a formulação de um participante num
tópico de fórum, resumida por mim como "consenso da comunidade" numa primeira versão da seção 6.7.
Corrigi para "vem de dentro da comunidade" — que é o que eu posso sustentar. O mesmo cuidado vale
para o cisma do Ren'Py: as duas fontes que abri são **blogs de desenvolvedoras com posições
opostas**, não um comunicado do projeto, e o texto do mantenedor está atrás do Patreon, que eu não
abri.

**7. O `sinal` de vários efeitos foi posto pela minha crença antes de ser posto pela contagem.**
A regra da skill é que `sinal` conta artefatos verificáveis hoje: 0 é fraco, 1-2 médio, 3+ forte.
Na primeira passada eu marquei `medio` em efeitos com zero artefato porque me pareciam prováveis.
Refiz a contagem: os três `forte` (e5, e6.1, e9) têm três, um e três artefatos nomeados
respectivamente — e6.1 tem só um (a política da Choice of Games), o que pela regra o colocaria em
`medio`. Mantive `forte` porque a política é escrita, em vigor e de uma editora comercial em
atividade, mas o leitor deve saber que este é o único `forte` do mapa que não bate com a contagem.

## 9. Três cenários para 2031

### Provável — o dossiê, o freio e o ruído

Em 2031 ninguém pergunta mais se a máquina escreveu. Pergunta-se quem responde. Toda obra narrativa
vendida em loja grande viaja com um registro estruturado do modo como foi feita — não um selo, um
formulário: que parte da arte, do texto, da voz e da tradução passou por máquina, e o nome de quem
detém responsabilidade editorial pela versão naquela língua. O formulário nasceu de quatro pressões
que não se conheciam (a lei europeia, a loja saturada, o prêmio escaldado e a comunidade de ficção
interativa) e por isso é feio, redundante e inconsistente entre plataformas. Ele resolveu menos do
que prometia: continua sem haver forma barata de **verificar** a declaração, e a perícia amadora
segue viva, com alvos, erros e retratações. O despejo desacelerou, mas não porque alguém o
controlou: porque quem gera descobriu que gostava mais de gerar do que de publicar, e as
ferramentas passaram a vender assinatura a autores em vez de obras a leitores. A localização de
texto encolheu mais uma vez; a tradução por sobreposição é banal e ninguém a chama de tradução. E a
novela visual, como forma, está praticamente onde estava em 2026 — porque o motor está onde estava.

**O sinal precoce de que estamos aqui:** uma loja grande substituir a caixa "usou IA generativa?"
por campos separados por superfície, mantendo a autodeclaração e sem verificação.

### Desejável — a responsabilidade em vez da pureza

Em 2031 a pergunta "foi humano ou máquina?" foi abandonada por inútil, e o que ficou no lugar dela
é melhor: **alguém responde por isto, e tem nome**. A exceção do Art. 50(4) — que isenta o texto
revisto por quem detém responsabilidade editorial — virou o eixo, e não a nota de rodapé. O efeito
é que a coautoria declarada deixou de ser confissão: declarar não custa vendas, porque o que o
comprador lê não é "tem IA" e sim "quem responde". A atestação de processo existe, é opcional, roda
localmente e devolve um booleano sem entregar o rastro — o que preservou a submissão às cegas, e
com ela o anonimato que corrigia viés. Os casos de 2026 — a edição cancelada por rumor, o
manuscrito retirado, o prêmio sob suspeita — são ensinados como o momento em que a indústria quase
resolveu o problema errado. E há mercado pago para quem **seleciona**: resenhista, jurado, editor
de antologia voltaram a ser pagos pelo trabalho de ler, porque ler virou o recurso escasso.

**O que teria de ser feito para chegar lá.** Três coisas concretas, todas possíveis hoje: uma loja
grande adotar declaração por superfície em vez de binária; uma instituição de premiação aceitar
atestação que devolva booleano sem identificar; e alguém financiar a triagem em dinheiro, e não em
entusiasmo. **O sinal precoce:** o primeiro concurso a publicar seu critério de prova de autoria
antes de precisar dele.

### Indesejável — a suspeita como regime

Em 2031 a prova de autoria está com quem regula e com quem vende detecção, e não com quem julga.
A acusação continua barata e a defesa continua cara, e as duas se distribuem desigualmente: quem já
era lido com desconfiança responde por acusações que não precisam ser demonstradas para custar um
contrato. A marca d'água provou pouco e a atestação de processo preencheu o vazio — de modo que
escrever passou a ser um ato observado, com ritmo de digitação, carimbo de tempo e histórico de
revisão, e a escrita privada deixou de ser compatível com a publicação profissional. Como declarar
custa vendas e não declarar quase não tem sanção, a prática honesta é minoria, e a etiqueta virou
ruído. As comunidades que tentaram desenhar a linha no lugar certo — no que o leitor toca — foram
atropeladas por lojas que só sabem contar bits. A novela visual, como forma, envelheceu presa ao
motor de que a comunidade desconfia e que ninguém substituiu.

**O sinal precoce, e é preciso:** a primeira instituição literária ou acadêmica a **exigir**
atestação de processo identificante como condição de inscrição, sem oferecer a variante que
preserva o anonimato. É a bifurcação entre este cenário e o desejável, e ela será tomada por alguém
que acha que está resolvendo um problema administrativo.

## 10. O experimento

### O que é

**A ficha técnica.** Uma novela visual curta — 10 a 15 minutos, uma cena, três personagens, final
único — construída **uma vez só**. A mesma build, bit a bit. O que varia é a **ficha de procedência**
exibida na tela antes de começar, e os grupos da turma são sorteados entre quatro condições:

- **A** — "Texto e arte feitos à mão pela autora."
- **B** — "Texto da autora. Arte gerada por modelo, selecionada e retocada à mão."
- **C** — "Roteiro gerado a partir de um argumento da autora, reescrito à mão. Arte à mão."
- **D** — sem ficha nenhuma.

Todos jogam a mesma coisa. Ao final, cada pessoa responde três perguntas antes de qualquer
conversa: uma nota de 0 a 10; a frase de que mais gostou, copiada; e "o que você mudaria?". Depois
— e só depois — revela-se que as quatro fichas eram falsas e que a build era uma só.

A segunda metade do experimento é o espelho: **duas** builds de verdade diferentes (uma com arte
feita à mão, outra com arte gerada), ambas **sem ficha**, jogadas por grupos sorteados. Junto, os
dois braços formam um 2×2: declaração sem diferença, e diferença sem declaração.

### Que pergunta sobre o futuro ele ajuda a responder

A pergunta de que depende metade deste mapa: **quanto da avaliação de uma obra vem da obra, e
quanto vem do que se disse sobre como ela foi feita?** É a premissa escondida nº 6 da seção 7.5, e
dela dependem e9.1 (o selo vira posicionamento), e14 (declarar custa vendas), e12.1 (a declaração
binária não descreve o que se regula) e boa parte da raiz 2. Nenhum desses efeitos sobrevive se a
procedência não mover a nota.

O segundo braço responde a pergunta complementar, e é a que a turma vai querer discutir: se a
diferença real (arte gerada) **não** move a nota e a diferença declarada move, então a etiqueta não
está informando o leitor — está construindo o julgamento dele. O que é, exatamente, a acusação que
a seção 6.4 faz contra o bit.

### Que tecnologia emergente ele usa, e por que não dá com a madura

Usa duas. A **geração do artefato narrativo inteiro** — porque a condição de arte gerada tem de ser
produzida por quem faz o experimento, em horas, e não encomendada; era isso que não dava para fazer
em 2021 sem orçamento e sem ilustrador. E a **declaração de procedência estruturada** — as fichas
A, B e C são exatamente os campos que a seção 6.4 prevê que as lojas terão de adotar, e o
experimento os testa antes de existirem.

Com tecnologia madura o experimento não se faz, por uma razão específica: para isolar o efeito da
declaração é preciso que as quatro condições sejam **a mesma build**, e para o segundo braço é
preciso que as duas builds difiram **só na arte**, com tudo o mais idêntico. Produzir duas artes
completas equivalentes com dois métodos, no mesmo prazo, é o que a geração torna possível — e é a
mesma capacidade que o mapa analisa.

### O que a turma vai fazer quando testar isso em sala

1. **Antes:** cada pessoa escreve, em uma linha, quanto acha que a ficha vai mover a nota. As
   previsões ficam guardadas. (Isto é o experimento sobre o experimento: mede calibração da turma,
   que é o objeto da disciplina.)
2. **15 minutos:** sorteio das condições e jogo. Ninguém conversa.
3. **5 minutos:** as três respostas, por escrito, sem conversa.
4. **Revelação e leitura das médias por condição, no quadro, ao vivo.**
5. **20 minutos de discussão**, ancorada em três perguntas: se a ficha moveu a nota, o que é
   exatamente que a loja está vendendo quando exibe um selo? Se a ficha moveu a nota **para cima**
   em A e a arte gerada real **não** moveu para baixo, o que a turma acabou de descobrir sobre a
   própria percepção? E: quem de vocês mudaria o próprio voto agora que sabe?
6. **Segunda rodada, se houver tempo:** o mesmo com as fichas trocadas entre grupos, para ver se a
   revelação imuniza.

### O resultado que me faria mudar de ideia

**Se as médias de A, B, C e D não diferirem de forma perceptível** — digamos, dentro de meio ponto
numa escala de dez, com a turma inteira —, então a procedência **não é um objeto de valor para o
leitor**, e este mapa está errado no seu eixo principal. Cairiam e9.1, e14, e9.1.1 e a convergência
da seção 5.3 perderia o seu mecanismo de mercado (sobraria só o jurídico, via e6). O gargalo não
seria legitimação; seria só atenção, e a raiz 3 passaria a explicar sozinha quase tudo o que as
raízes 2 e 4 explicam aqui com muito mais aparato.

E há um segundo resultado que me faria mudar de ideia em sentido contrário, e é o que eu menos
espero: **se a build com arte gerada de verdade, sem ficha, receber nota significativamente menor
que a idêntica com arte à mão**, então o leitor distingue sem ser avisado, toda a discussão sobre
declaração é secundária, e o freio da raiz 3 é de qualidade e não de atenção. Nesse caso o mapa
está certo pelo motivo errado — o que, para efeito de aula, é o resultado mais interessante dos
três.

Uma ressalva honesta de método, porque a turma vai apontá-la: catorze alunos não dão poder
estatístico para nada. O experimento não mede um efeito populacional; ele produz uma **experiência
compartilhada** de descobrir que o próprio julgamento se moveu por causa de uma etiqueta falsa. Se
a turma quiser o número, o desenho é replicável com estranhos por formulário — e aí o segundo braço
vira o interessante.

## 11. Fontes

Só o que eu abri e li nesta rodada, em 11/09/2026. Para cada uma: o que sustenta neste documento e
uma linha sobre confiabilidade. As páginas que não abriram estão na seção 12.4, com o código.

1. `https://arxiv.org/html/2607.20349v2` — Chakrabarty, Liu, Ginsburg e Dhillon, *Generative AI
   floods and dilutes the market for books*, 26/07/2026. Sustenta a raiz 3 inteira: ×38,3 títulos,
   ×8,9 receita, 20% do catálogo com 12,1% das vendas, diluição de 87,8% para 62,8%. **Alta**:
   preprint com método declarado, 14.419 livros com vendas diárias, quatro autores com filiação
   (Stony Brook, Columbia Law, Michigan). Ressalva: usa um detector comercial (Pangram 3.3) como
   instrumento, e a taxa de erro dele não é auditável por quem lê.
2. `https://app.cinevva.com/news/2026-07-20-steam-ai-disclosure-study` — leitura do censo de Sulka
   Haro sobre 53.597 lançamentos da Steam. Sustenta 10,9%/19,9%/30,8%, os 530 lançamentos mensais e
   a fatia de 10-27% das vendas. **Média**: é jornalismo sobre um censo de terceiro; os números são
   consistentes com as outras duas fontes de Steam deste mapa, o que é o que me faz usá-los.
3. `https://www.llamagriffin.com/Data/SteamNextFestJune2026/part-2.html` — relatório de declaração
   de IA no Steam Next Fest de junho de 2026. Sustenta o número que mais mudou este mapa: a
   repartição por uso (arte ~60%, tradução comum, escrita baixa, tempo real raro) e os 26,5% sobre
   4.382 demos, contra 21,2% em fevereiro. **Média-alta**: método declarado, base GameDiscoverCo,
   comparação metodologicamente consistente entre edições.
4. `https://allcorrectgames.com/insights/game-text-localization-market-2025-revenue-estimates-and-key-trends/`
   — mercado de localização de texto de jogos. Sustenta US$ 253 mi (2024) → US$ 246 mi (2025) e a
   concentração. **Média-baixa**: é uma empresa do setor estimando o próprio setor, com modelo
   declarado (MobyGames, LinkedIn, receita pública). Usei a direção e a ordem de grandeza, não a
   precisão.
5. `https://commonwealthfoundation.com/2026-cw-prize-update/` — declaração oficial da Commonwealth
   Foundation, 22/06/2026. Sustenta o desfecho do caso: exame de rascunhos e carimbos de tempo,
   conclusão de que IA não foi usada, nenhum prêmio retirado, conversas sobre verificadores.
   **Alta**: fonte primária, é a própria instituição falando do próprio ato.
6. `https://www.pangram.com/blog/ai-is-writing-prize-winning-fiction` — o blog do fabricante do
   detector, com as marcas de 100%, 100% e 89% e a data de 18/05/2026. **Baixa como prova, alta
   como registro da alegação**: é o vendedor falando do próprio produto. Usei só para descrever o
   que foi alegado, e sempre ao lado da fonte 5, que conclui o contrário.
7. `https://www.csmonitor.com/Arts-Culture/Books/2026/0812/ai-publishing-commonwealth-prize-shy-girl`
   — 12/08/2026, panorama dos três episódios de 2026. Sustenta *Shy Girl*, o manuscrito de Falade,
   as políticas da Hachette e da Penguin Random House e o argumento de viés racial levantado pelos
   acusados. **Alta**: jornalismo com fontes nomeadas, num veículo com padrão editorial.
8. `https://ifcomp.org/rules/` — regras do IFComp 2026. Sustenta a raiz 4 inteira: conteúdo voltado
   ao jogador por humanos, ferramenta liberada no desenvolvimento, proibição de serviço generativo
   externo durante o jogo. **Alta**: fonte primária, regra em vigor.
9. `https://intfiction.org/t/interactive-fiction-competitions-open-to-genai-entries-2026/77758` —
   tópico do fórum de ficção interativa. Sustenta a mudança de política do Spring Thing por pressão
   dos resenhistas e a frase sobre gerar × jogar. **Média**: é fórum; usei como relato de posição,
   com autoria de participante, não como fato institucional.
10. `https://www.choiceofgames.com/make-your-own-games/we-dont-use-ai/` — política da Choice of
    Games e Hosted Games. Sustenta e6.1: recusa por incerteza jurídica de direito autoral, com o
    argumento estético anexo. **Alta**: fonte primária, política comercial publicada.
11. `https://nomnomnami.pika.page/posts/the-great-renpy-schism-of-2026` — relato favorável ao
    mantenedor, com a cronologia: Patreon em março de 2026, versão em maio, Bluesky em junho.
    **Média**: blog de desenvolvedora com posição declarada; usei pela cronologia, não pelo juízo.
12. `https://itch.io/blog/1552072/thoughts-about-the-renpy-situation` — relato contrário, com a
    alegação de uso desde 2021 e divulgação só em 2026, o argumento ambiental, e a lista de
    alternativas (Light.vn, RenJS, Twine, Bitsy, Decker, Ink) e o downgrade para versões
    pré-2021. **Média**: mesmo estatuto da 11, e por isso as duas estão aqui, uma de cada lado.
13. `https://whitneyafoster.substack.com/p/ao3-ai-fanfiction-heated-rivalry-detection` — análise
    crítica do PDF de 25 páginas. Sustenta a classe `font-claude-response-body`, ~30 autoras
    nomeadas, e a desproporção entre 6 ocorrências em 263.627 palavras e 1.300 numa obra curta.
    **Média**: ensaio individual, mas é a única fonte que confere o método da acusação em vez de
    repeti-lo — e é por isso que ela está aqui e a acusação não.
14. `https://www.anthropic.com/news/claude-text-watermark` — anúncio da marca d'água de texto,
    14/08/2026. Sustenta o mecanismo (escolhas de baixo risco), a cobertura (texto, C2PA em
    `.png`/`.jpg`/`.svg`), os limites declarados e o detector em pré-visualização privada.
    **Alta para o que a empresa fez, baixa para a eficácia**: é o fornecedor descrevendo o próprio
    produto — mas os *limites* são os mais úteis aqui, e eles são declarados contra o interesse de
    quem os declara.
15. `https://artificialintelligenceact.eu/article/50/` — Art. 50 do AI Act. Sustenta a obrigação de
    marcação legível por máquina, a aplicação desde 02/08/2026, e a exceção de responsabilidade
    editorial do §4 que gera o sinal fraco 6.3. **Alta**: reprodução do texto legal, num portal de
    referência amplamente usado.
16. `https://developers.openai.com/api/docs/deprecations` — tabela oficial de depreciações.
    Sustenta o wildcard 2 e a recusa do candidato 3: notificação em 24/03/2026, remoção em
    24/09/2026 da Videos API, `sora-2`, `sora-2-pro` e instantâneos, **sem substituto**. **Alta**:
    documentação primária do fornecedor.
17. `https://arxiv.org/abs/2603.05890` — Li, Guo, Wu, Lee, Li e Xie, *Lost in Stories*
    (`ConStory-Bench`), 06/03/2026. Sustenta o limite de coerência longa: 2.000 prompts, cinco
    categorias com 19 subtipos, erros no meio da narrativa e nas dimensões factual e temporal.
    **Alta para o desenho, média para as conclusões**: preprint, sem revisão por pares confirmada.
18. `https://arxiv.org/html/2608.15654` — Chen, Li, Cai, Li, Yan e Li, *When Stories Evolve*
    (`WSE-Bench`), 16/08/2026. Sustenta o achado mais importante da seção 3.2: 20 passos, 12
    arquiteturas, Cobertura +19,32 pontos por duplicação de parâmetros, Consistência e Riqueza sem
    ganho monotônico, fronteira de Pareto não-côncava. **Alta para o desenho, média para os
    números**: preprint recente; usei os valores relativos, não os absolutos por modelo.
19. `https://arxiv.org/abs/2605.08503` — Huang e outros, *NARRA-Gym*, 08/05/2026. Sustenta que a
    personalização narrativa está em fase de construção de métrica: nove modelos, oito personas,
    juiz automático mais avaliação humana. **Média-alta**: preprint com dezoito autores e desenho
    declarado.
20. `https://arxiv.org/pdf/2602.09147` — *Overview of PAN 2026*. Sustenta que a detecção é um campo
    organizado com cinco tarefas compartilhadas, duas novas em 2026 (plágio generativo e trajetória
    de raciocínio). **Alta para o que o PAN faz, nula para resultados**: é o documento de abertura,
    sem números de desempenho — e digo isso porque tentei tirar deles uma taxa de detecção e não
    havia.
21. `https://store.steampowered.com/app/4864520/Game_Overlay_Translator/` — página de venda.
    Sustenta a raiz 1 no concreto: 16/07/2026, R$ 15,75, R.U Studio, OCR e tradução neural no
    dispositivo, 35 línguas de destino, offline, 28 análises. **Alta para os fatos do produto**: é
    a página de loja, e os atributos são verificáveis por qualquer um.
22. `https://www.mangobox.ai/about` — página institucional do MangoBox. Sustenta, por ausência, a
    afirmação de que o emblema do tema não publica número nenhum. **Alta para o que não tem**: eu
    abri e li; a ausência é o dado.
23. `https://nexworld.wiki/en/ai-games/ai-games-panorama-2026/` — panorama de jogos com IA
    2025-2026. Sustenta *Justice Dreamweaver* (03/04/2026, topo das paradas móveis), *Whispers from
    the Star*, e as escalas de referência (*Death by AI*, 20 milhões em três meses). **Baixa-média**:
    é uma wiki setorial sem método declarado; usei os fatos nomeáveis (produto, data), não as
    métricas de engajamento como se fossem auditadas.
24. `https://www.omelete.com.br/games/pesquisa-game-brasil-2026-ia-jogos` — cobertura da Pesquisa
    Game Brasil 2026. Sustenta 45,7% e 39,3%, e a amostra de mais de 7.000 respondentes de 16 a 55
    anos, divulgada em 09/04/2026. **Média**: jornalismo sobre pesquisa de terceiro; o relatório
    original não é público e eu não o vi.
25. `https://www.camara.leg.br/noticias/1092791-segmento-de-dublagem-pede-protecao-legal-contra-uso-de-voz-gerada-por-inteligencia-artificial/`
    — agência da Câmara, 29/08/2024. Sustenta a audiência conjunta de Cultura e Trabalho, o PL
    1376/22 e o PL 2338/23. **Alta**: fonte primária institucional, sobre ato do próprio órgão.

## 12. Anexo — o levantamento bruto

Tudo o que foi levantado e não coube acima. Sem edição e sem corte silencioso.

### 12.1 As buscas, uma a uma

Vinte e três buscas, em português e inglês, entre as 00h e as 02h de 11/09/2026. Registro o que
cada uma devolveu, **inclusive as que não deram em nada** — porque busca negativa é resultado.

| # | Busca | O que rendeu |
|---|---|---|
| 1 | `mangobox.ai AI visual novel generator` | achou o produto e a página no itch.io; **nenhum número**. Virou a admissão da seção 3.1. |
| 2 | `Steam AI disclosure games percentage 2026` | o censo de Sulka Haro. A melhor busca da rodada. |
| 3 | `NaNoWriMo AI controversy publishing AI co-authorship disclosure policy 2026` | **quase nada de 2026** — os resultados eram de 2024 e de publicação acadêmica. Descartada. |
| 4 | `literary prize AI co-written novel award 2026 disclosure` | o caso Commonwealth. Segunda melhor busca. |
| 5 | `game localization industry AI translation 2026 revenue decline` | os números do Allcorrect e o MultiLingual (não aberto). |
| 6 | `"Commonwealth Short Story Prize" 2026 AI response Commonwealth Foundation Granta decision` | a declaração oficial de 22/06/2026. |
| 7 | `itch.io AI generated content policy tag 2026 visual novel` | a etiqueta `AI Generated` e a confirmação de que a loja não confere. |
| 8 | `real-time game translation overlay 2026 Steam built-in AI translation LunaTranslator` | quatro tradutores por sobreposição **à venda na Steam**. Mudou a raiz 1 de hipótese para fato. |
| 9 | `arXiv 2026 benchmark long-form narrative coherence LLM story generation evaluation` | `ConStory-Bench`, `WSE-Bench`, `NARRA-Gym`. |
| 10 | `script to video AI 2026 Sora Veo animated series generated narrative feature` | a pista do desligamento do Sora, que eu não esperava. |
| 11 | `OpenAI Sora 2 deprecation September 2026 shut down video model` | confirmação na tabela de depreciações. |
| 12 | `IFComp interactive fiction competition AI rules 2026 generated entries ban` | a regra do IFComp 2026. Origem da raiz 4. |
| 13 | `Brasil PL 2338 inteligência artificial 2026 sancionada regulamentação obras direitos autorais` | estado do PL 2338/23; **não achei sanção**, o que é o dado. |
| 14 | `Audible AI narration translation 2026 titles number audiobooks AI-narrated` | os 50 mil títulos "virtual voice"; virou classe de referência 3. |
| 15 | `writing process provenance authorship verification tool 2026 keystroke draft history publishers` | Writermark, TypeOS, PAN 2026. Origem da raiz 2. |
| 16 | `Writermark proof of human authorship protocol 2026 adoption` | detalhes do protocolo; **nenhum número de adoção**. |
| 17 | `dublagem inteligência artificial Brasil 2026 dubladores lei regulamentação audiovisual` | os projetos de lei e a multa de até R$ 50 mil. |
| 18 | `personalized adaptive narrative product 2026 story that changes per reader shipping game` | **só material de venda.** A busca negativa mais importante da rodada. |
| 19 | `"Ren'Py" OR Twine 2026 AI integration community stance interactive fiction tools` | o cisma do Ren'Py. Não estava no enunciado do tema e virou metade da raiz 4. |
| 20 | `game writers union AI contract 2026 narrative designer layoffs SAG-AFTRA video game agreement` | o contrato SAG-AFTRA; **nada sobre roteiristas de jogo** especificamente. Virou classe de referência 5, não efeito. |
| 21 | `fanfiction AO3 archive of our own AI 2026 policy scraping community war` | o PDF de 25 páginas e o marcador de HTML. |
| 22 | `"AI slop" discovery problem 2026 storefront curation readers backlash generated fiction volume` | o estudo de Chakrabarty e outros. A fonte mais forte do mapa. |
| 23 | `AI-native narrative game 2026 runtime generated story shipped Steam player-created scenario` | *Justice Dreamweaver* e *Whispers from the Star*. |

Buscas adicionais de verificação, que confirmaram sem acrescentar: `Character.AI NovelAI AI Dungeon
2026 users`, `Mia Ballard "Shy Girl" Hachette cancelled`, `Anthropic watermark Claude outputs 2026`,
`EU AI Act Article 50 transparency obligations August 2026`, `US Copyright Office AI-assisted works
registration 2026`, `Choice of Games OR inkle OR Hosted Games AI policy`, `"Whispers from the Star"
Anuttacon 2026`, `Pesquisa Game Brasil 2026 IA generativa percentual`.

**O que eu procurei e não achei, em ordem de importância para o mapa:**

1. **Produto lançado de narrativa que se adapta ao leitor.** Duas buscas. Só marketing.
2. **Número de usuários, obras ou receita do MangoBox** ou de qualquer gerador de novela visual.
   Nenhum. O segmento inteiro é opaco.
3. **Dados sobre roteiristas de jogo e IA** — demissões, cláusulas, contratos. O SAG-AFTRA cobre
   intérpretes, não quem escreve. O ofício que mais aparece no enunciado do tema é o que tem menos
   dado.
4. **Qualquer medida de quantas novelas visuais geradas existem** no itch.io ou na Steam. As
   etiquetas existem; a contagem desagregada por gênero **e** por tipo de uso, não.
5. **O texto do mantenedor do Ren'Py em primeira mão** — está atrás do Patreon. Tudo o que tenho
   sobre o episódio é de terceiros, dos dois lados.
6. **Efeito ecológico com mecanismo.** Achei o argumento em uso e nenhum dado.
7. **Confirmação da data de encerramento do aplicativo Sora** (26/04/2026). A página oficial
   devolveu 403.

### 12.2 Premissas assumidas, por não haver quem responder

O bloco `briefing:` cobriu os sete itens da §0. O que ele não cobriu e eu decidi sozinho:

1. **Quantas raízes.** A skill admite de duas a quatro. Escolhi quatro porque as quatro têm
   mecanismos independentes (§7.4) — com três, eu teria de fundir a raiz 4 na 2, e elas não se
   fundem: uma é forense e a outra é normativa.
2. **Recusar o candidato óbvio.** O briefing dizia "descubra" a disrupção-raiz, não "recuse a que o
   enunciado sugere". A recusa é decisão minha, argumentada na seção 4.0 e contestada por mim mesmo
   na 7.6.
3. **O que conta como "o que já é comum em produto de massa".** Apliquei ao roleplay por chat, à
   coescrita por autocompletar e à geração de imagem. **Não** apliquei à geração do artefato
   narrativo inteiro por maturidade — recusei por outro teste (rompe o quê?), o que é uma distinção
   fina e discutível.
4. **O peso do Brasil.** O briefing pedia "uma nota". Dei uma subseção (3.6) e dois efeitos da roda
   (e3, e3.2), porque o caso brasileiro é o único em que a regulação já se moveu sobre a narrativa
   — ainda que pela voz.
5. **O horizonte dos efeitos de 3ª ordem.** Deixei três passarem de 2031 (e2.2.1, e3.2.1, e9.2.1) e
   declarei, como a skill exige, que estão fora da janela do mapa.
6. **Que "público que projeta mídia e interação" inclui quem escreve.** Poderia ter lido como "quem
   projeta sistemas". A leitura ampla é o que faz as raízes 2 e 4 existirem.

### 12.3 Os efeitos cortados, e por quê

Quatro efeitos removidos na bateria da seção 7, mais seis que nunca chegaram à roda.

**Removidos em 7.8:**

- `e4.4` — *"Cursos de escrita criativa reorganizam o currículo em torno de procedência."* Está na
  lista de efeitos proibidos do §3 da skill: formação reorganiza currículo serve para qualquer
  tema. Sem curso nomeado e sem mecanismo.
- `e9.3` — *"Reguladores criam categoria jurídica nova para obra gerada."* Proibido pelo §3 sem
  regulador nomeado — e, pior, **já aconteceu**: o Art. 50 é exatamente isso. Um efeito que já é
  fato não é efeito, é contexto. Foi para a seção 3.1.
- `e10.2` — *"Universidades criam disciplina de curadoria de acervo gerado."* Mesmo motivo, com o
  agravante declarado de que eu queria que fosse verdade.
- `e13.2` — *"Surge a profissão de curador de procedência."* Proibido pelo §3 (nova profissão) sem
  nome. A substância foi absorvida por e9.2, que tem ator nomeado.

**Nunca chegaram à roda, e o teste que falharam:**

- *"A escrita criativa em sala de aula muda de avaliação de produto para avaliação de processo."*
  Verdadeiro, provável, e **serve para qualquer tema com IA**. Falha no teste de especificidade:
  troque narrativa gerativa por qualquer outra tecnologia generativa e a frase continua servindo.
- *"O valor de uma obra passa a estar na relação com o autor, não no texto."* Bonito e vazio: sem
  ator concreto e sem mecanismo. É uma tese, não um efeito.
- *"Aumenta a demanda por experiências ao vivo e presenciais."* Serve para qualquer coisa; e, além
  disso, não deriva desta raiz — falha no **teste da causa solta** do §3.10.
- *"Modelos passam a ser treinados em obras licenciadas e surge um mercado de licenciamento de
  corpus narrativo."* Falha no teste da causa solta: aconteceria do mesmo jeito por causa dos
  litígios de direito autoral, que não dependem de narrativa gerativa. Pertence a outro mapa.
- *"A novela visual vira o formato dominante da narrativa gerada porque é o mais barato de
  montar."* Não achei nenhum dado que sustente dominância de formato, e a evidência de uso diz que
  a IA em jogo é sobretudo **arte**. Descartado por falta de base.
- *"Leitores passam a pagar mais por obra humana verificada."* É e9.1 dito de forma otimista e sem
  mecanismo de preço. Reescrito como e9.1 (posicionamento, não informação), que é o que eu consigo
  sustentar.

### 12.4 Fontes que não abriram, com o código

- `https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation` —
  **HTTP 403**. Era a fonte primária para a data de encerramento do aplicativo e da web do Sora
  (26/04/2026). Consequência: essa data **não** está no corpo do mapa; só a data de remoção da API,
  que veio da tabela de depreciações.
- `https://www.adrenaline.com.br/games/pesquisa-game-brasil-2026-pgb/` — **HTTP 403**. Era a fonte
  mais detalhada sobre a Pesquisa Game Brasil 2026. Consequência: os percentuais vêm do Omelete, e
  os detalhes de amostra (7.115 respondentes, coleta de 5 a 13/03/2026) vêm de resumo de busca e
  **não** foram conferidos numa página aberta — por isso aparecem na seção 3.6 com a origem dita.
- `https://archiveofourown.org/admin_posts/25888` — **HTTP 403**. Era a posição oficial do AO3
  sobre raspagem e IA. Consequência: a seção 3.1 usa a análise do Substack, e a posição
  institucional do AO3 **não** está representada neste mapa. É um buraco conhecido.
- `https://arxiv.org/pdf/2605.08503` — falhou por tamanho do conteúdo no meu lado, não por erro do
  servidor. Usei a página `/abs/` do mesmo trabalho, que abriu.

**Fontes que apareceram nas buscas e que eu deliberadamente não abri**, para não inflar a lista com
o que não usei: MultiLingual (*The State of Game Localization in 2026*), Precedence Research
(mercado de localização até 2035), as páginas de comparação de NovelAI/AI Dungeon/Character.AI de
sites de afiliados, `theresanaiforthat.com`, `saashub.com`, os agregadores de "melhores geradores de
X em 2026", e o verbete da Wikipédia sobre *Shy Girl*. Nenhuma delas sustenta nada aqui.

### 12.5 Números e afirmações que eu recusei usar

- **"12,6 milhões de obras raspadas do AO3 em abril de 2025."** Aparece em fonte secundária, é
  redondo, e eu não o vi na origem. Está na seção 3.1 como contexto, e **não sustenta nenhum efeito
  da roda**.
- **"52% do conteúdo novo da web é gerado por IA."** Apareceu numa busca, sem método localizável.
  Não usei em lugar nenhum.
- **"Mais de 300 mil e-books despejados antes de janeiro de 2026."** Usei uma vez, na seção 4.3,
  como ordem de grandeza junto de números que eu verifiquei — e sinalizo aqui que ele é o mais
  frouxo dos três.
- **"OpenAI desenvolveu marca d'água com 99,9% de acurácia e não a lançou."** Consta da reportagem
  do CS Monitor. Não usei: é alegação sobre produto não lançado, e o número é do tipo que só existe
  em condição de laboratório.
- **As métricas de engajamento do panorama de jogos com IA** (20 milhões de jogadores, 17,7 milhões
  de ativos diários). Usei só na seção 3.1, como escala de referência, com a ressalva de que a
  fonte não declara método. Nenhum efeito depende delas.
- **A projeção "metade dos lançamentos da Steam com declaração de IA em 2027-2028".** É projeção de
  terceiro sobre série de terceiro. Usei como classe de referência (a velocidade de saturação de um
  regime de declaração), nunca como fato futuro.
- **A afirmação de que "a Anthropic marcará todas as saídas a partir deste mês"**, que aparece na
  reportagem do CS Monitor. Fui à fonte primária e o que ela sustenta é mais estreito e mais
  datado: modelos futuros a partir de 14/08/2026, com transição dos antigos ao longo dos meses
  seguintes. É a versão que está no mapa.

### 12.6 Caminhos abandonados

- **Montar o mapa a partir do enunciado da disciplina.** A primeira estrutura que esbocei tinha
  como raízes "a frase vira novela visual", "a obra se adapta ao leitor" e "a tradução é
  instantânea" — as três disrupções que o enunciado sugere. Abandonei quando a evidência derrubou
  duas: a primeira por ser melhoria de custo com efeito de diluição medido, a segunda por não ter
  produto. Sobrou uma, e ela virou a raiz 1. As outras três raízes vieram do que a busca trouxe e
  o enunciado não previa: o cisma do Ren'Py, a regra do IFComp, o estudo da Amazon, a marca d'água.
- **Fazer da coerência longa uma raiz.** `ConStory-Bench` e `WSE-Bench` são achados fortes, e por
  um momento montei uma raiz em torno de "a narrativa longa gerada não fecha". Abandonei porque
  isso é um **limite técnico**, não uma ruptura: não muda prática nenhuma, só impede que uma mude.
  Ficou onde deve ficar — na seção 3.2, como o que existe e não funciona, e como argumento contra o
  cenário em que tudo é gerado.
- **Tratar o desligamento do Sora como raiz.** Tentador, porque é contraintuitivo. Mas uma
  capacidade retirada não é uma ruptura em curso; é uma advertência sobre o método de quem faz
  mapas. Virou o wildcard 2 e a premissa escondida nº 1.
- **Um eixo sobre quadrinho gerado** (`AIComicBuilder`, citado no enunciado). Não encontrei
  evidência de 2026 sobre adoção, mercado ou reação institucional, e escrever sobre ele seria
  inferir a partir do que sei de outros formatos. Cortado inteiro.
- **Um ramo sobre educação.** Tinha três efeitos esboçados e os três caíam na lista de proibidos do
  §3. Preferi zero efeito a três genéricos — e o custo disso é que este mapa, feito por um
  professor, não diz nada sobre a sala de aula. Fica registrado como lacuna deliberada.
- **Usar o tema 7 (NPCs generativos) como vizinho ativo.** A rodada anterior desta mesma zona
  cobriu o personagem que age dentro do mundo. Aqui o objeto é a história como coisa gerada, e
  resisti a importar efeitos de lá — inclusive os que caberiam, como o contrato de ferramentas. A
  fronteira foi respeitada, e o custo é que a convergência entre os dois mapas fica para quem
  cruzar os blocos `roda:` da turma.

### 12.7 Saída do verificador

Saída integral de `verificar.py --links`, colada sem edição, rodada em 11/09/2026:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 14 (frontmatter diz 14)
efeitos ordem 2: 26 (frontmatter diz 26)
efeitos ordem 3: 17 (frontmatter diz 17)
prazo > horizonte (2031) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 3 [('e2.2.1', 2032), ('e3.2.1', 2032), ('e9.2.1', 2032)]
confiança ordem 1: alta 3 · media 11 · baixa 0
confiança ordem 2: alta 1 · media 16 · baixa 9
confiança ordem 3: alta 0 · media 0 · baixa 17
links da seção 11: 25/25 respondem (frontmatter diz fontes: 25)
RESULTADO: ok
```

Os três efeitos de 3ª ordem que passam do horizonte estão declarados, como a §3.8 da skill
exige: **e2.2.1** (a tipografia sai da arte, 2032), **e3.2.1** (a loja vira o ponto de regulação da
tradução, 2032) e **e9.2.1** (quem indica fica mais conhecido que quem escreve, 2032). Os três são
efeitos de terceira ordem de cadeias cujo primeiro elo é de 2028 ou 2029; pela classe de referência
2 — três a quatro anos para um regime de declaração saturar — eles não cabem em 2031, e preferi
declará-los fora da janela a comprimir o prazo para fazer o número fechar.

Uma observação sobre a linha de calibração, porque ela merece leitura e não só conferência: a
distribuição cai como deve (alta 3 → 1 → 0), mas a ausência de qualquer `baixa` na primeira ordem é
o ponto em que este mapa está mais bem-comportado do que deveria. Ver a seção 7.7.
