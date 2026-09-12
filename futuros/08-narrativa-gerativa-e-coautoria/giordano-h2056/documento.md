---
tema: Narrativa gerativa e coautoria
slug: narrativa-gerativa-e-coautoria
autor_login: grec
zona_de_interesse: Simulação e mundos
data: 2026-09-12
horizonte: 2056
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 14
efeitos_ordem_2: 31
efeitos_ordem_3: 34
tecnologias_citadas: [MangoBox, LunaTranslator, Ren'Py, Monogatari, YarnSpinner, Inform 7, Twine, AI Dungeon, NovelAI, Character.AI, Audible Virtual Voice, Audible speech-to-speech, Amazon KDP, Steam, itch.io, IFComp, Adaptive Reader, OLMo 32B, Sora, Veo, Pika, Luma, ChatTTS, Bark, StreamVox, SeqBench]
fontes: 17
confianca: media
experimento: A mesma obra, duas execuções — clube de leitura sobre uma novela visual gerada por leitor, medindo quantas proposições a turma consegue dar como verdadeiras em comum
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Contar uma história deixou de custar o que custava contar. Uma frase vira elenco, cena, arte e
diálogo jogável; um manuscrito vira audiolivro em quatro línguas com a voz do narrador
preservada; um jogo em japonês vira jogo em português por uma camada que ninguém do lado do autor
instalou. O que isso rompe não é o ofício de escrever — é a **atribuição**: quem assina, o que é a
obra, em que língua ela nasceu e quem tem de provar o quê. O estado de hoje não é de adoção
massiva: no Steam, 30,8% dos lançamentos de 2026 declaram IA mas capturam entre 10% e 27% das
vendas estimadas; no itch.io, 3.471 dos 51.750 jogos de novela visual carregam a etiqueta de
geração — 6,7%. Quatro rupturas sustentam este mapa: o **artefato narrativo inteiro a partir de
uma intenção curta**; a **obra que deixa de ser objeto fixo e vira gerador executado no leitor**;
a **língua que sai da obra e vira configuração do aparelho de quem consome**; e o **descolamento
entre o que o autor faz e o que se reconhece como autoria** — o Copyright Office dos EUA decidiu
em 29/01/2025 que promptar não basta, e o IFComp decidiu em 2026 que o que o jogador vê tem de ser
humano. Delas saem efeitos duros para quem projeta: a descoberta substitui a produção como
gargalo; o rótulo de IA vira penalidade de mercado e empurra a geração para onde não se vê (voz
24% contra 8%, localização 18% contra 6% entre os que vendem e os que fracassam); a citação deixa
de identificar um trecho; e a atribuição vira regime probatório com rascunho datado como prova — o
Commonwealth Short Story Prize de 2026 conduziu uma revisão de um mês exatamente assim. O
horizonte pedido, 2056, excede qualquer classe de referência disponível: os efeitos se concentram
entre 2028 e 2048 e a última década do horizonte está deliberadamente vazia.

## 2. O tema

O objeto deste mapa é **a história como coisa gerada**, e o que isso faz com a autoria. Não é o
personagem que age dentro de um mundo com regras — esse é o tema 7. Não é a geração de vídeo e
imagem como mídia, com suas questões de controle e qualidade visual — esse é o tema 12. Não é o
design procedural, que gera regras e não histórias — esse é o tema 14. Aqui o objeto é o artefato
narrativo: a novela visual, o conto, o roteiro, o quadrinho, a fala do personagem, a legenda.

A distinção importa porque muda quem responde pela obra. Uma novela visual em Ren'Py, um diálogo
ramificado em YarnSpinner, um mundo descrito em Inform 7: em todos os três, alguém escreveu cada
frase que o público lê. Dessa escrita frase a frase derivam coisas que ninguém costuma listar
como dependentes dela — o direito autoral (que protege expressão fixada por humano), a
classificação indicativa (que classifica conteúdo existente), a citação acadêmica (que aponta uma
página), a resenha (que fala de um objeto que o leitor também terá), o prêmio literário (que
compara obras), a localização (que traduz um original), o contrato de dublagem (que paga hora de
estúdio por fala escrita). Quando a frase passa a ser produzida por um sistema, no momento da
leitura, a partir de uma intenção curta, **nenhuma dessas instituições tem mais o objeto sobre o
qual foi construída.**

Onde isso encosta em mídia e interação: a narrativa é o lugar onde um sistema fala com uma pessoa
usando linguagem em vez de interface. Se esse lugar passa a ser improvisado por máquina, o ofício
de projetar mídia migra de *escrever o que se diz* para *definir o que não pode ser dito e como se
prova o que foi dito*. Isso é projeto de sistema, não redação — e é por isso que o tema merece um
mapa de futuro e não um levantamento de estado da arte: o estado da arte descreve ferramentas, e a
pergunta em jogo é institucional.

**Premissas assumidas nesta rodada** (o briefing cobriu horizonte, público, recorte, viés e
descarte; o que ele não cobriu está declarado aqui):

- Nenhum candidato a raiz foi herdado de outro contexto. As quatro raízes foram derivadas da
  âncora, não do enunciado do tema.
- O recorte é global, com uma nota sobre o Brasil concentrada em `e8.1.2`, `e8.3` e na seção 3.
- "O que já é comum em produto de massa" é a régua de recusa da §2 e foi aplicada literalmente:
  ver a lista de candidatos recusados na seção 4.
- O viés pedido é neutro. O mapa tem um ramo de aceleração e um de freio por raiz, e a seção 7
  nomeia o efeito que está aqui por gosto do autor.
- Assumi que o horizonte de 2056 deve ser respeitado como janela máxima e não como alvo: dizer
  "2056" para um efeito de que não tenho referência seria chute com cara de precisão.

## 3. Onde isso está hoje

Âncora feita com acesso à web em 12/09/2026. Dezessete fontes abertas e lidas; as buscas que não
deram em nada estão na seção 12.

### O que já existe e funciona

**Geração do artefato inteiro a partir de uma frase.** `MangoBox` (mangobox.ai) recebe uma
descrição — quem é você, quem mais está lá, onde se passa — e devolve retratos de personagem,
cenários, personalidades e cena de abertura, com até cinco personagens que conversam entre si e a
história rejogável a partir do mesmo setup. É gratuito no nível básico e US$ 9/mês no Pro, com 20
vídeos gerados por mês. Não publica número de usuários. A versão hospedada no itch.io é HTML5,
gratuita, sessão média declarada de cerca de 30 minutos, e a página não tem avaliação nem
seguidores registrados — o que é, em si, um dado: a ferramenta existe e quase ninguém a comenta.

**Volume.** No itch.io, em 12/09/2026, a etiqueta `AI Generated` cobre **77.366** projetos.
Filtrando pelo gênero novela visual: **3.471** de um total de **51.750** — 6,7%. No Steam, um
levantamento de Sulka Haro sobre **53.597** lançamentos entre meados de 2023 e meados de 2026,
publicado em 20/07/2026, mede a curva da declaração obrigatória: **10,9%** dos lançamentos em
2024, **19,9%** em 2025, **30,8%** em 2026 até a data. No Next Fest de junho de 2026, **1.163 de
4.382** demos declararam IA — 26,5%; a distribuição por tipo de uso é dominada por ativo visual
(cerca de 60%), com escrita e diálogo na faixa mais baixa.

**Tradução e locução em tempo de consumo.** `LunaTranslator` — captura o texto de um jogo por
gancho de memória ou OCR e devolve tradução sobreposta — está em **13.147 estrelas** no GitHub,
1.144 forks, com commit no próprio 12/09/2026. Há equivalentes comerciais rodando sobreposição em
mais de 50 idiomas sem tocar nos arquivos do jogo. Do lado editorial: a Audible anunciou em
13/05/2025 narração sintética com mais de 100 vozes em inglês, espanhol, francês e italiano, e
tradução em beta — inclusive **fala-para-fala, preservando a voz e o estilo do narrador original**
— de inglês para espanhol, francês, italiano e alemão. Títulos com narração sintética passaram de
cerca de 1.600 em 2023 para mais de 40.000 em 2025.

**A infraestrutura narrativa madura que a geração vai absorver.** Ren'Py: 6.813 estrelas, ativo
desde 2012, commit em 12/09/2026. YarnSpinner: 2.841 estrelas. Monogatari: 883. Inform e Twine,
ambos com décadas. Nenhuma dessas é candidata a disrupção — são o substrato.

### O que existe e ainda não funciona

**Coerência narrativa longa em vídeo.** Os benchmarks de 2026 (`SeqBench`, `VideoWeaver`,
`NarraStream-Bench`) existem precisamente porque a falha é sistemática: modelos como Sora, Veo e
Wan produzem clipe de alta fidelidade e perdem a linha quando o roteiro é longo. A resposta atual
da literatura é condicionar o vídeo a um roteiro estruturado por agente, o que melhora as métricas
mas confirma o diagnóstico: o gargalo é a estrutura, não o pixel.

**A adaptação por leitor como obra publicada.** Existem produtos que reescrevem clássicos por
nível de leitura (`Adaptive Reader`) e plataformas de conversa em que cada sessão é única
(Character.AI, AI Dungeon, NovelAI). Não existe, em 2026, uma obra publicada, comprada, resenhada
e discutida que seja diferente para cada leitor por projeto do autor. Isso é o que sustenta a
raiz 2 com confiança baixa.

**A homogeneização como custo medido.** Um artigo de 2026 (EMNLP) compara quatro checkpoints do
OLMo 32B — Base, SFT, DPO, RLVR — contra texto humano e mede o que chama de *narrative
flattening*: à medida que o modelo passa pelo pós-treino, as transições temáticas ficam mais
uniformes, a emoção de alta intensidade cede à neutralidade, e a diversidade estilística entre
histórias encolhe. A compressão é maior justamente sobre ficção literária profissional. Isso é um
número contra a promessa de "mil histórias diferentes": o sistema converge.

### Quem constrói

Quatro famílias de ator, com incentivos diferentes: (1) ferramentas de geração narrativa —
MangoBox, NovelAI, AI Dungeon, Character.AI; (2) plataformas de distribuição que viraram
árbitros da origem por obrigação — Valve, Amazon KDP, itch.io, Audible; (3) a comunidade aberta
que faz a camada sobreposta — HIllya51/LunaTranslator, os overlays de tradução; (4) as
instituições de atribuição, que entraram no jogo sem querer — Commonwealth Foundation, IFComp,
New Zealand Book Awards Trust, o Copyright Office dos EUA, SAG-AFTRA.

### Os números que descrevem a adoção hoje

| Medida | Valor | Data | Fonte |
|---|---|---|---|
| Lançamentos no Steam declarando IA | 10,9% → 19,9% → 30,8% | 2024 / 2025 / 2026 | Haro, 53.597 jogos |
| Participação desses jogos nas vendas estimadas | 10% a 27% (era 3% a 6% em 2024) | 2026 | idem |
| Uso de IA entre os que venderam × os que fracassaram | voz 24%×8%; localização 18%×6%; visual 72% entre os que fracassaram | 2026 | idem |
| Demos com declaração no Next Fest | 1.163 / 4.382 (26,5%) | jun/2026 | GDCo + SteamDB |
| Novelas visuais com etiqueta de IA no itch.io | 3.471 / 51.750 (6,7%) | 12/09/2026 | itch.io |
| Projetos com etiqueta `AI Generated` no itch.io | 77.366 | 12/09/2026 | itch.io |
| Estrelas do LunaTranslator | 13.147 | 12/09/2026 | GitHub API |
| Títulos com narração sintética | ~1.600 → >40.000 | 2023 → 2025 | Audible / imprensa |
| Inscritos no Commonwealth Short Story Prize | mais de 7.800 | 2026 | Commonwealth Foundation |
| Ratificação do acordo de mídia interativa da SAG-AFTRA | 95,04% a favor | jul/2025 | SAG-AFTRA |

**Nota sobre o Brasil.** O país tem mais de 1.000 estúdios de jogos cadastrados e cerca de 13 mil
profissionais, com 60% deles em MEI ou microempresa faturando até R$ 360 mil por ano, e a
principal fonte de recurso sendo fundador, família e amigos (46%). Essa composição importa para
este mapa por uma razão específica: **estúdio sem caixa não paga localização.** Um efeito que no
mundo rico é "a tradução fica mais barata" é, aqui, "a exportação deixa de ter custo de entrada" —
e também "o público brasileiro passa a consumir obra que ninguém escolheu traduzir". Do outro
lado, o Brasil tem uma indústria de dublagem organizada e mobilizada: em 15/08/2025 foi
apresentado na Câmara um projeto que proíbe o uso de IA para substituir dubladores, classifica a
voz como dado pessoal sensível na LGPD e só admite IA para ajuste técnico sob supervisão humana; a
sugestão legislativa correlata (SUG 7/2025) passou pela Comissão de Direitos Humanos do Senado. O
Brasil é, portanto, simultaneamente o caso que mais ganha com a raiz 3 e o que mais organiza o
freio contra ela.

## 4. As disrupções-raiz

### Candidatos recusados (registro obrigatório)

- **Candidato "engine de novela visual" recusado como raiz:** Ren'Py existe desde 2012 com 6.813
  estrelas, Twine e Inform têm décadas. Maduro. Tratado como contexto na seção 3.
- **Candidato "diálogo ramificado / narrativa não linear" recusado como raiz:** YarnSpinner (2.841
  estrelas, desde 2015), Arrow, Dialogic. É a ferramenta que a geração vai absorver, não a ruptura.
- **Candidato "geração de texto por modelo de linguagem" recusado como raiz:** adoção em maioria
  desde 2023; está em produto de massa. Se dá para fazer com o que já é comum em produto de massa,
  é maduro. É o substrato das quatro raízes, não uma delas.
- **Candidato "tradução automática de texto" recusado como raiz:** tradução neural em maioria
  desde cerca de 2017. O que é emergente é a **camada sobreposta, no aparelho de quem consome,
  fora do controle do autor** — e a preservação de voz na fala-para-fala. É essa a raiz 3, não a
  tradução.
- **Candidato "narração sintética" recusado como raiz:** Kindle Virtual Voice e Audible já
  distribuem em produto de massa. Entra como mecanismo dentro da raiz 3.
- **Candidato "roteiro vira vídeo animado" recusado como raiz:** é o tema 12 (geração de vídeo
  como mídia). Aqui entra só como âncora de custo, na seção 3.

### Raiz 1 — O artefato narrativo inteiro nasce de uma intenção curta

**O que rompe.** Rompe a proporcionalidade entre o tamanho de uma obra e o trabalho para produzi-la
— e, com ela, a premissa que sustenta toda a infraestrutura de curadoria: a de que o número de
obras acabadas é pequeno o bastante para que humanos as vejam. Não é "fazer o mesmo mais barato":
é o fim da escassez do lado da oferta, com a escassez inteira migrando para a atenção. A loja, a
resenha, o prêmio, a lista de lançamentos — todos foram desenhados para um mundo em que terminar
uma obra era o filtro.

**Por que agora, e não há cinco anos.** Três pré-condições fecharam juntas: os modelos multimodais
passaram a cobrir texto, imagem, som e vídeo num pipeline só; o custo de inferência caiu ao ponto
de uma novela visual completa caber num plano de US$ 9/mês; e as ferramentas de narrativa
interativa, que existiam há décadas em formato aberto e documentado, ofereceram o alvo pronto. Em
2021 faltavam as três.

**Onde está na difusão.** Produto de nicho entrando em adoção precoce. 6,7% das novelas visuais do
itch.io; 30,8% dos lançamentos do Steam declaram algum uso de IA, mas apenas 10% a 27% das vendas.
Gerar não é vender.

**O que ainda falta acontecer.** Uma obra gerada desse modo entrar na cauda que vende — o Steam
mostra que o 1% do topo captura cerca de 94% da receita com ou sem IA, e nenhuma obra gerada por
prompt entrou nesse 1%. Falta também a ferramenta de geração se integrar à distribuição (hoje ela
gera para o navegador, não para a loja).

**Quem bloqueia.** As lojas. A Amazon já racionou por cota — três títulos por dia por conta, desde
18/09/2023, depois de contas subirem cinquenta por dia — e o Steam racionou por rótulo. Nenhuma
das duas tem interesse em catálogo infinito: catálogo infinito destrói a própria função de loja.
O efeito disso é `e2`.

### Raiz 2 — A obra deixa de ser objeto fixo e passa a ser um gerador executado no leitor

**O que rompe.** Rompe o **referente comum** — a suposição, tão básica que raramente é enunciada,
de que duas pessoas que leram o mesmo livro leram o mesmo texto. Dessa suposição dependem a
citação, a resenha, a prova escolar, o clube de leitura, a classificação indicativa, a perícia de
plágio, a preservação em arquivo e a própria noção de que uma obra pode ser boa ou ruim (e não
apenas ter saído boa naquela vez).

**Por que agora, e não há cinco anos.** Duas coisas: memória persistente por usuário entre sessões
— o que as ferramentas de escrita de 2026 anunciam como seu diferencial — e custo de inferência
baixo o bastante para gerar no momento da leitura em vez de gerar antes e servir. Em 2021, gerar
por leitor era proibitivo e o sistema esquecia o leitor entre uma sessão e outra.

**Onde está na difusão.** Laboratório e demo pública. Existem produtos adjacentes (reescrita por
nível de leitura, conversa persistente com personagem), mas não existe obra publicada e discutida
que seja projetada para divergir por leitor. **Toda a cadeia desta raiz carrega confiança baixa ou
média por obrigação da §2.**

**O que ainda falta acontecer.** Falta um formato de publicação que empacote gerador e não texto;
falta uma loja que aceite vendê-lo; falta uma resposta ao problema de o autor não saber o que a
obra dirá. Nenhum dos três é impossível — por isso é raiz e não wildcard.

**Quem bloqueia.** Escolas e reguladores de classificação indicativa, que precisam de objeto fixo
para fazer seu trabalho, e que têm o poder de exigir uma execução travada como condição de
adoção. O efeito disso é `e5.3` e `e6.1`.

### Raiz 3 — A língua sai da obra e passa a ser uma configuração do aparelho de quem consome

**O que rompe.** Rompe a ideia de que uma obra **tem** uma língua, e com ela a localização como
etapa de produção, o licenciamento por território, a cota linguística, o cachê do tradutor e do
dublador, e a noção de original. A tradução deixa de ser um ato de alguém autorizado pelo autor e
passa a ser uma função do aparelho de quem lê — como o brilho da tela.

**Por que agora, e não há cinco anos.** O que mudou não foi a qualidade da tradução (neural desde
2017, madura). Foi: (a) OCR e gancho de memória rápidos o bastante para sobrepor em tempo real
sem quebrar o jogo; (b) fala-para-fala que **preserva timbre e estilo do intérprete original** —
o que a Audible pôs em beta em 2025 e que antes não existia; (c) o custo cair a ponto de a camada
ser gratuita e amadora. O LunaTranslator tem 13.147 estrelas e é mantido por uma pessoa.

**Onde está na difusão.** Adoção precoce, e assimétrica: madura no consumo amador (quem joga
novela visual japonesa em português já faz isso hoje), emergente no lado da produção
(fala-para-fala com voz preservada), ainda não integrada às plataformas.

**O que ainda falta acontecer.** Falta a camada deixar de ser ferramenta de terceiro e virar
função de plataforma — Steam, console, navegador, óculos. Esse é o sinal a vigiar.

**Quem bloqueia.** Sindicatos de voz e legisladores nacionais, com incentivo direto e organização
existente. SAG-AFTRA ratificou em julho de 2025, por 95,04% contra 4,96%, um acordo que exige
consentimento escrito, específico e destacado para réplica digital e que permite **suspender o
consentimento durante greve** — uma cláusula desenhada para impedir que a geração fure a greve. No
Brasil, o projeto de 15/08/2025 vai além e proíbe a substituição. O efeito disso é `e8.3`.

### Raiz 4 — O que o humano faz ao escrever deixa de coincidir com o que se reconhece como autoria

**O que rompe.** Rompe a coincidência, até aqui automática, entre **o trabalho de escrever** e **a
autoria reconhecida**. O co-escritor de 2026 faz seleção, direção, recusa e revisão — e o
Copyright Office dos EUA disse, em 29/01/2025, que promptar não confere autoria e que refazer o
prompt até um resultado aceitável é "apenas relançar o dado". O que a lei protege é a seleção,
coordenação e arranjo minimamente criativos do que saiu. Ao mesmo tempo, prêmios passaram a exigir
prova de processo. A autoria deixa de ser um fato declarado e vira um **regime probatório**.

**Por que agora, e não há cinco anos.** Porque o texto gerado passou a ser indistinguível do
humano **na extensão de um conto** — e porque, ao mesmo tempo, as instituições foram forçadas a
decidir: a Amazon em 2023 (cota e declaração obrigatória), o Copyright Office em 2025, os New
Zealand Book Awards em novembro de 2025 (dois livros desclassificados do Jann Medlicott Acorn
Prize por arte de capa gerada), o Commonwealth em 2026, o IFComp em 2026. Em 2021 nenhuma dessas
decisões existia.

**Onde está na difusão.** Adoção precoce entre gatekeepers, e em plena divergência: IFComp proíbe
no que o jogador vê e permite na ferramenta; IBPA não proíbe; o National Book Awards de 2026 não
deu orientação nenhuma. É a fase em que a regra ainda não convergiu — que é exatamente quando o
mapa vale.

**O que ainda falta acontecer.** Falta um método de prova que funcione. A revisão do Commonwealth
de 2026 usou rascunhos, documentos datados, notas e entrevista sobre processo criativo — trabalho
humano caro, sobre 7.800 inscrições, num prêmio em que cada história vencedora já tinha sido lida
por pelo menos sete pessoas. Isso não escala.

**Quem bloqueia.** As próprias instituições de atribuição, que têm incentivo para manter a
distinção porque é ela que lhes dá função: um prêmio que não distingue nada não é um prêmio. O
efeito disso é `e11.3`.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O artefato narrativo inteiro nasce de uma intenção curta
    efeitos:
      - id: e1
        ordem: 1
        efeito: A descoberta substitui a produção como gargalo da mídia narrativa, porque achar passa a custar mais que fazer
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A loja passa a cobrar pelo direito de ser listada e não pela venda realizada
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A estreia de um autor volta a acontecer em comunidade e não em loja, porque a vitrine passa a exigir capital que o estreante não tem
                sinal: fraco
                prazo: 2041
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Quem filtra captura mais valor que quem escreve, e a resenha vira o produto vendável
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Casas de curadoria assinam exclusividade com autores como gravadoras assinavam com músicos
                sinal: fraco
                prazo: 2044
                confianca: baixa
          - id: e1.3
            ordem: 2
            efeito: O preço de uma obra narrativa isolada tende a zero e a receita migra para assinatura de acesso a catálogo vivo
            sinal: medio
            prazo: 2035
            confianca: media
            efeitos:
              - id: e1.3.1
                ordem: 3
                efeito: O autor passa a ser pago por retenção medida e não por cópia vendida, e escreve para a métrica
                sinal: fraco
                prazo: 2042
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O rótulo de IA vira penalidade comercial e empurra a geração para as camadas que o público não vê, como voz, localização e texto de apoio
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: A declaração obrigatória deixa de descrever o uso real, porque declarar o visível custa venda e declarar o invisível não
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Plataformas trocam autodeclaração por detecção e passam a arbitrar origem com instrumento que erra nos dois sentidos
                sinal: medio
                prazo: 2036
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: O selo de obra feita sem geração vira categoria de mercado com preço mais alto
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: O selo humano passa a exigir auditoria de processo e encarece a obra artesanal em vez de protegê-la
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e2.3
            ordem: 2
            efeito: O público desenvolve heurística amadora de detecção e passa a acusar obra humana de ser gerada, punindo prosa limpa e escrita em segunda língua
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e2.3.1
                ordem: 3
                efeito: Autores introduzem irregularidade deliberada para parecer humanos, e a imperfeição vira convenção de autenticidade
                sinal: fraco
                prazo: 2036
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: O protótipo jogável substitui o documento de design como unidade de conversa em estúdio, porque a ideia passa a ser testada jogada e não lida
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: A pré-produção narrativa encolhe e os estúdios testam mais direções e matam cada uma mais cedo
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: O roteirista de jogo passa a ser contratado por rodada de teste e não por projeto, e a renda vira intermitente
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: A fan fiction deixa de ser texto e passa a ser obra jogável completa, e o litígio de marca sai do texto para o produto
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Detentores de franquia passam a licenciar mundos para geração de terceiros com cerca técnica, em vez de proibir
                sinal: fraco
                prazo: 2039
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: A hora de produzir texto perde valor de mercado e o contrato de escrita se reorganiza em torno de restrição e revisão
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: A pós-edição de texto gerado vira o formato dominante de contrato, com tarifa por palavra revista mais baixa que a tarifa por palavra escrita
            sinal: forte
            prazo: 2030
            confianca: alta
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Sindicatos de escrita passam a negociar piso por obra e não por palavra, porque a palavra deixou de medir esforço
                sinal: fraco
                prazo: 2037
                confianca: baixa
  - disrupcao: A obra deixa de ser objeto fixo e passa a ser um gerador executado no leitor
    efeitos:
      - id: e5
        ordem: 1
        efeito: O referente comum desaparece, e duas pessoas que leram a mesma obra não conseguem discordar sobre a mesma frase
        sinal: fraco
        prazo: 2034
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A citação deixa de identificar um trecho e passa a exigir o registro da sessão que a produziu
            sinal: fraco
            prazo: 2037
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Arquivos e bibliotecas passam a guardar o gerador e as sementes em vez do texto, e a preservação vira problema de execução de software
                sinal: fraco
                prazo: 2045
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: A crítica migra da obra para o sistema e passa a resenhar o espaço de histórias possíveis
            sinal: fraco
            prazo: 2038
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Estabelece-se uma prática de amostragem crítica, em que se leem várias execuções para descrever a obra
                sinal: fraco
                prazo: 2046
                confianca: baixa
          - id: e5.3
            ordem: 2
            efeito: Escola e clube de leitura fixam uma execução canônica para poder discutir, e a versão travada vira a obra de fato
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e5.3.1
                ordem: 3
                efeito: A edição travada vira produto vendido à parte e o adaptativo fica como a versão barata
                sinal: fraco
                prazo: 2043
                confianca: baixa
              - id: e5.3.2
                ordem: 3
                efeito: A obra adaptativa fica fora dos usos que exigem texto estável, como prova escolar e citação em decisão judicial
                sinal: fraco
                prazo: 2044
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: A classificação indicativa perde objeto, porque não há conteúdo a classificar antes de o leitor executá-lo
        sinal: fraco
        prazo: 2033
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Reguladores passam a certificar a cerca em vez do conteúdo, e a auditoria vira contínua
            sinal: fraco
            prazo: 2037
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: O custo da certificação contínua concentra a publicação de obra adaptativa em quem pode pagá-la
                sinal: fraco
                prazo: 2044
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Um caso público de conteúdo gerado para criança faz a plataforma desligar a adaptação em obra infantil
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: A narrativa adaptativa se estabelece primeiro em público adulto e de nicho, e chega à infância uma década depois
                sinal: fraco
                prazo: 2045
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: O leitor vira coautor sem querer, porque a sessão dele é insumo da obra seguinte
        sinal: fraco
        prazo: 2032
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Plataformas passam a pagar por sessão de leitura usada em treino, criando uma renda de leitura
            sinal: fraco
            prazo: 2040
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A leitura anônima vira produto pago e quem não pode pagar paga com os próprios dados narrativos
                sinal: fraco
                prazo: 2047
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: O perfil afetivo do leitor vira o parâmetro mais valioso da obra, e a adaptação tende a confirmar o que ele já sente
            sinal: medio
            prazo: 2035
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: A ficção perde a função de confrontar o leitor e a literatura difícil migra do mercado para a instituição subsidiada
                sinal: fraco
                prazo: 2046
                confianca: baixa
  - disrupcao: A língua sai da obra e passa a ser uma configuração do aparelho de quem consome
    efeitos:
      - id: e8
        ordem: 1
        efeito: A localização deixa de ser etapa de produção e vira função do aparelho do leitor, executada sem o autor e sem o editor
        sinal: medio
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: O mercado de localização se parte entre commodity engolida pela máquina e adaptação cultural cara
            sinal: forte
            prazo: 2029
            confianca: alta
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Estúdio pequeno passa a publicar em língua única e deixar a tradução para o público, e a exportação perde o custo de entrada
                sinal: medio
                prazo: 2035
                confianca: media
              - id: e8.1.2
                ordem: 3
                efeito: O público brasileiro passa a consumir obra que ninguém escolheu traduzir, e o repertório deixa de ser filtrado por quem decidia o que valia a pena localizar
                sinal: medio
                prazo: 2034
                confianca: media
          - id: e8.2
            ordem: 2
            efeito: A obra deixa de ter língua de origem declarada e passa a ter apenas uma língua de composição, invisível ao público
            sinal: fraco
            prazo: 2038
            confianca: media
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: Prêmios e políticas de cota linguística perdem o critério e passam a exigir prova de língua de composição
                sinal: fraco
                prazo: 2046
                confianca: baixa
          - id: e8.3
            ordem: 2
            efeito: Países com indústria de dublagem organizada regulam a voz sintética e reabrem a exigência de trabalho local
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e8.3.1
                ordem: 3
                efeito: A camada de tradução sobreposta vira zona cinzenta jurídica, legal para quem assiste e ilegal para quem distribui
                sinal: fraco
                prazo: 2036
                confianca: media
      - id: e9
        ordem: 1
        efeito: A voz do intérprete vira licença cobrada por linha gerada, e não cachê por hora de estúdio
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: O elenco de uma obra passa a ser um contrato de uso contínuo, renovável e com direito de suspensão
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: A greve deixa de parar a produção e passa a parar a geração de material novo, o que troca o instrumento de pressão do trabalho
                sinal: medio
                prazo: 2034
                confianca: media
          - id: e9.2
            ordem: 2
            efeito: O dublador de elenco secundário perde a base de renda, porque é onde a diferença perceptível entre voz humana e sintética é menor
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e9.2.1
                ordem: 3
                efeito: A carreira de voz se reorganiza em torno de poucos nomes licenciáveis como personagem-marca, e a base sai do ofício
                sinal: fraco
                prazo: 2041
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: O acesso a obra narrativa em língua minoritária deixa de depender de mercado e passa a depender de o modelo ter visto a língua
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Línguas com pouco texto digital ficam fora da camada automática e sua literatura fica menos acessível do que era com tradução humana subsidiada
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: Comunidades linguísticas passam a produzir corpus deliberadamente para entrar no modelo, e o arquivo vira ativo político
                sinal: fraco
                prazo: 2043
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: O ensino de língua estrangeira perde a justificativa do acesso à obra e passa a se justificar por convívio e trabalho
            sinal: fraco
            prazo: 2038
            confianca: media
            efeitos:
              - id: e10.2.1
                ordem: 3
                efeito: A queda na procura por língua estrangeira reduz o número de tradutores formados, e a adaptação cultural cara fica sem quem a faça
                sinal: fraco
                prazo: 2048
                confianca: baixa
  - disrupcao: O que o humano faz ao escrever deixa de coincidir com o que se reconhece como autoria
    efeitos:
      - id: e11
        ordem: 1
        efeito: A atribuição vira regime probatório, e quem reivindica autoria passa a ter de exibir processo, rascunho e carimbo de tempo
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: A ferramenta de escrita passa a gravar procedência por padrão, e escrever sem telemetria vira desvantagem competitiva
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: O rascunho deixa de ser privado e vira prova, o que muda o que o autor se permite escrever no caminho
                sinal: fraco
                prazo: 2038
                confianca: media
          - id: e11.2
            ordem: 2
            efeito: O detector erra contra quem escreve em segunda língua e contra prosa formal, e a acusação falsa vira risco maior que a fraude
            sinal: forte
            prazo: 2029
            confianca: alta
            efeitos:
              - id: e11.2.1
                ordem: 3
                efeito: Prêmios abandonam o detector e voltam ao exame de processo e entrevista, o que encarece o júri e reduz o número de inscrições aceitas
                sinal: fraco
                prazo: 2034
                confianca: media
              - id: e11.2.2
                ordem: 3
                efeito: Universidades e prêmios adotam defesa oral do texto em vez de análise do texto, e escrever passa a exigir performance do autor
                sinal: fraco
                prazo: 2037
                confianca: baixa
          - id: e11.3
            ordem: 2
            efeito: Concursos se dividem entre os que exigem conteúdo humano no que o público vê e os que abrem categoria própria para geração
            sinal: forte
            prazo: 2030
            confianca: alta
            efeitos:
              - id: e11.3.1
                ordem: 3
                efeito: A fronteira se estabiliza no ponto de exposição e não na ferramenta, de modo que o que o público vê tem de ser humano e o que sustenta pode ser gerado
                sinal: medio
                prazo: 2035
                confianca: media
      - id: e12
        ordem: 1
        efeito: O direito autoral e o ofício deixam de coincidir, porque dirigir, selecionar e recusar não é o que a lei conta como autoria
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: Obras muito geradas nascem sem proteção efetiva de cópia e o valor migra para acesso, serviço e marca
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: Estúdios protegem história por segredo e por serviço em vez de copyright, e o contrato substitui a lei como cerca
                sinal: fraco
                prazo: 2040
                confianca: media
          - id: e12.2
            ordem: 2
            efeito: O editor passa a exigir do autor declaração e indenização por origem, transferindo o risco jurídico para quem escreve
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e12.2.1
                ordem: 3
                efeito: Autor sem estrutura jurídica é empurrado para plataformas que assumem o risco em troca de direitos, e a independência encarece
                sinal: fraco
                prazo: 2039
                confianca: baixa
      - id: e13
        ordem: 1
        efeito: A aprendizagem do ofício perde o degrau de baixo, porque o trabalho pelo qual se aprendia a escrever é o primeiro a ser gerado
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: O estágio de sala de roteiro desaparece porque a tarefa do estagiário, que é primeira versão, coverage e passe de diálogo, é a mais barata de gerar
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: A entrada no ofício passa a exigir obra própria publicada antes do primeiro emprego, o que filtra por tempo livre e renda familiar
                sinal: fraco
                prazo: 2041
                confianca: media
          - id: e13.2
            ordem: 2
            efeito: O estilo pessoal fica mais caro de formar e mais fácil de imitar, e a assinatura de voz vira o ativo escasso
            sinal: medio
            prazo: 2036
            confianca: media
            efeitos:
              - id: e13.2.1
                ordem: 3
                efeito: Autores treinam modelos privados sobre a própria obra para não convergir para a média pública
                sinal: fraco
                prazo: 2042
                confianca: baixa
      - id: e14
        ordem: 1
        efeito: Declarar coautoria com máquina deixa de ser confissão, mas a suspeita permanece assimétrica e cai sobre quem tem menos capital reputacional
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: Autor consagrado declara uso e não paga preço, enquanto autor estreante declara e é descartado na triagem
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: A declaração de uso migra do produto para o contrato, pública para quem pode e privada para quem precisa
                sinal: fraco
                prazo: 2039
                confianca: baixa
```

### O que o bloco não consegue dizer

**Os mecanismos, um por um.** `e1` vale porque o Steam já mostra o descolamento: 30,8% dos
lançamentos declaram IA e esses jogos ficam com 10% a 27% das vendas — a produção subiu, a atenção
não. `e2` é o efeito mais bem medido de todo o mapa e é um efeito de **freio**: entre os jogos com
declaração que fracassaram, 72% usavam IA em arte; entre os que venderam, o uso se concentra em
voz (24% contra 8%) e localização (18% contra 6%). O mercado não pune a dose, pune a
**visibilidade** — e isso empurra a geração para baixo da linha d'água, que é justamente onde ela
fica fora do alcance do rótulo. `e4.1` tem sinal forte porque não é previsão: é o que já aconteceu
com tradução, onde a pós-edição paga cerca de um quarto da tarifa de tradução e mais de um terço
dos tradutores pesquisados pela Society of Authors em 2024 declarou ter perdido trabalho.

`e7.2` junta dois mecanismos independentes e por isso é o efeito de 2ª ordem mais robusto da
raiz 2: o artigo sobre *narrative flattening* mede que o pós-treino empurra a emoção para a
neutralidade e a variação estilística para baixo; o incentivo de retenção empurra na mesma
direção. Uma obra que se adapta ao leitor e é otimizada para que ele continue tende
estruturalmente a não contrariá-lo.

`e9.1.1` merece explicação porque parece futurologia e não é: a cláusula de suspensão de
consentimento em greve **já está escrita** no acordo de mídia interativa de 2025. O efeito não é
"vai surgir tal instrumento"; é "esse instrumento existe no papel e ainda não foi usado", e é por
isso que carrega sinal médio e não fraco.

`e11.2` tem sinal forte por um caso concreto e datado: em 2026, uma história vencedora regional do
Commonwealth Short Story Prize foi publicamente acusada de ser gerada porque partes dela pareciam
"linguagem típica de ChatGPT". A Fundação abriu revisão, examinou rascunhos, documentos datados e
notas, entrevistou todos os vencedores e concluiu em 22/06/2026 que IA **não** foi usada. O custo
recaiu inteiro sobre o autor e sobre a instituição; o acusador não pagou nada. Essa assimetria é o
mecanismo.

**Classes de referência usadas para os prazos.** Para os efeitos de mercado e de contrato (`e4`,
`e8.1`, `e9.2`), usei a própria tradução comercial: da difusão da tradução neural (2016-2017) ao
colapso de tarifa documentado em 2024-2025 foram cerca de oito anos — daí prazos de 2029 a 2032.
Para os efeitos de plataforma (`e1.1`, `e2.2`), usei a resposta da Amazon ao volume: do início da
enxurrada à cota de três por dia passaram-se meses, mas da cota a um modelo de receita novo ainda
não se passou nada em três anos — daí prazos na casa de 2033 a 2035. Para os efeitos
institucionais (`e11`, `e12`), usei a própria série de decisões de 2023 a 2026, que é rápida: dois
a três anos entre o problema e a regra — daí 2028 a 2030. Para os efeitos culturais (`e5`, `e13`,
`e7.2`), não há classe de referência boa; usei a mudança de hábito de leitura como proxy (o
e-book levou mais de uma década para chegar a um quarto do mercado e parou ali) e por isso os
prazos são 2034 a 2046 com confiança baixa.

**Sobre o horizonte de 2056.** Nenhuma classe de referência disponível cobre trinta anos. O efeito
mais distante deste mapa é de 2048, e isso é deliberado: preencher 2049-2056 seria produzir
precisão falsa. A última década do horizonte está vazia e declarada vazia.

### Cruzamentos

**Convergência 1 — a origem do texto deixa de ser determinável.** Três ramos de raízes diferentes
chegam ao mesmo lugar: `e2.1` (a declaração deixa de descrever o uso real, porque o mercado pune o
visível), `e11.2` (o detector erra e a acusação vira o risco) e `e12.2` (o editor transfere o
risco jurídico para o autor). Nenhum depende dos outros, e os três produzem o mesmo estado: a
pergunta "quem escreveu isto?" deixa de ter resposta técnica e vira **disputa administrativa, com
ônus da prova sobre quem tem menos poder**. Este é o achado mais valioso do mapa.

**Convergência 2 — a instituição crítica se desloca da obra para o filtro.** `e1.2` (quem filtra
captura mais valor que quem escreve, por excesso de oferta) e `e5.2` (a crítica migra para o
sistema, por ausência de objeto fixo) chegam à mesma coisa por caminhos opostos: excesso de obras
e ausência de obra produzem, os dois, uma crítica que fala de sistemas.

**Convergência 3 — a língua deixa de ser barreira de mercado e vira barreira de treino.** `e8.1.1`
(estúdio publica em língua única e deixa a tradução para o público) e `e10.1` (língua sem corpus
fica de fora) são a mesma moeda: o que decide o alcance de uma obra deixa de ser quanto o editor
investiu em localização e passa a ser quanto texto daquela língua entrou no modelo.

**Retroalimentação (ciclo negativo, com dono).** `e2` → `e2.1` → `e2.1.1` → reforça `e11`
(atribuição vira regime probatório) → que encarece publicar obra gerada → que **freia a raiz 1**. O
ciclo é real e tem dono: as lojas, que ganham com catálogo grande mas perdem com catálogo
inútil. É o ciclo que impede o mapa de ser uma reta de aceleração.

**Contradição 1, não resolvida.** `e1.3` (o preço da obra isolada tende a zero, a receita vai para
assinatura) contra `e2.2` (o selo de obra humana vira categoria de preço mais alto). Os dois não
podem valer no mesmo mercado com a mesma força. O que decide: se o público consegue **verificar** o
selo. Se `e2.1.1` (detecção que erra nos dois sentidos) se concretizar, o selo perde valor e `e1.3`
vence; se emergir prova de origem confiável — o wildcard W2 —, `e2.2` vence.

**Contradição 2, não resolvida.** `e5` (não existe mais "a obra") contra `e5.3` (a execução
travada vira a obra de fato). A instituição escolar recria o objeto fixo que a técnica dissolveu.
O que decide: se o custo de gerar por leitor cai mais rápido que o custo institucional de arbitrar
qual execução vale.

### Cobertura por STEEP e por quem perde

- **Social:** `e13` (o degrau de baixo do ofício some), `e14` (a suspeita é assimétrica), `e5`
  (o referente comum).
- **Tecnológico:** `e2.1.1` (detecção), `e10` (a língua depende do corpus), `e11.1` (procedência
  por padrão).
- **Econômico:** `e1` (descoberta como gargalo), `e4` (a palavra deixa de medir esforço), `e8.1`
  (o mercado de localização parte em dois), `e9` (voz vira licença).
- **Ecológico:** **vazio, e declarado vazio.** Não encontrei mecanismo que ligue especificamente a
  geração de narrativa a efeito ecológico distinto do custo energético de inferência em geral —
  que é tema de outro mapa, não deste. Forçar a categoria seria inventar.
- **Político:** `e6.1` (certificar a cerca), `e8.3` (regulação nacional da voz), `e12`
  (descolamento entre lei e ofício), `e10.1.1` (o arquivo vira ativo político).

**Quem perde, nominalmente:** o tradutor de commodity e o localizador de jogo (`e8.1`); o dublador
de elenco secundário (`e9.2`); o estagiário de sala de roteiro (`e13.1`); o autor estreante sem
capital reputacional (`e14.1`) e sem capital financeiro (`e1.1.1`); o falante de língua sem corpus
digital (`e10.1`); o leitor que não pode pagar por anonimato (`e7.1.1`); e o autor de prosa limpa
que escreve em segunda língua, acusado por parecer com a máquina (`e2.3`, `e11.2`).

## 6. Sinais fracos e wildcards

### Sinais fracos

**SF1 — a camada que ninguém autorizou.** O LunaTranslator é pequeno (uma pessoa mantém) e enorme
(13.147 estrelas, commit hoje): obra japonesa consumida em português sem que ninguém tenha
traduzido, sem contrato, sem editor, sem cachê. **O que mudaria:** a raiz 3 inteira deixa de ser
sinal e vira infraestrutura. **Sinal observável de crescimento:** uma plataforma — Steam, um
console, um navegador, um óculos — embutir a camada de tradução sobreposta como função nativa, em
vez de deixá-la como ferramenta de terceiro. Esse é o evento a vigiar, e é datável.

**SF2 — a greve que para a geração, não a produção.** A cláusula de suspensão de consentimento em
greve do acordo de 2025 existe e nunca foi invocada. **O que mudaria:** confirmaria `e9.1.1` e
transformaria o consentimento de réplica no principal instrumento de pressão do trabalho criativo
— um instrumento novo, que não existia em nenhuma greve anterior. **Sinal observável:** a primeira
invocação real, em qualquer estúdio.

**SF3 — a inversão do rótulo.** Hoje a declaração de IA no Steam é dominada por ativo visual
(~60%). **O que mudaria:** se a proporção de declarações de *texto e diálogo* ultrapassar a de
arte, é sinal de que a geração narrativa saiu do protótipo e entrou no produto — e de que o
estigma medido em `e2` deixou de proteger a escrita. **Sinal observável:** a série anual da
distribuição por tipo de uso, que já é pública e já é medida.

**SF4 — a linha traçada no ponto de exposição.** O IFComp de 2026 decidiu que todo conteúdo
voltado ao jogador tem de ser humano — capa, prosa, ativos — e que ferramenta generativa é
permitida no desenvolvimento, inclusive para tradução limitada. Isso é uma fronteira nova: não
proíbe a ferramenta, proíbe a exposição. **O que mudaria:** se virar padrão, `e11.3.1` se
concretiza e a discussão sai de "usou IA?" para "o que o público vê foi feito por quem?". **Sinal
observável:** um segundo festival de porte copiar a mesma redação.

**SF5 — a medida da homogeneização.** O artigo sobre *narrative flattening* (EMNLP 2026) é o
primeiro que conheço a medir a compressão de variação como efeito do pós-treino, e não como
impressão de leitor. **O que mudaria:** daria base empírica a `e13.2` e `e7.2`. **Sinal
observável:** métrica de diversidade narrativa aparecer em cartão de modelo comercial — o que
significaria que o fornecedor passou a considerar isso um defeito a reportar.

### Wildcards

**W1 — o tribunal que decide que não há texto.** *Mecanismo:* numa ação por conteúdo ofensivo
gerado dentro de uma obra adaptativa, a defesa alega que não houve publicação no sentido jurídico,
porque não existe texto fixo — só um gerador e uma execução privada. O tribunal aceita. *Por que é
improvável:* tribunais tendem a estender categoria existente em vez de reconhecer vazio.
*O que faria com o mapa:* dissolveria `e6` inteiro e transferiria toda a regulação da obra para a
plataforma, o que aceleraria `e6.1.1` em uma década. *Sinal precoce:* o primeiro caso em que essa
defesa é sustentada por escrito, mesmo perdendo.

**W2 — a prova de origem que funciona.** *Mecanismo:* marca d'água criptográfica em texto passa a
ser exigida por lei nos modelos comerciais, com sanção, e os poucos fornecedores grandes cumprem.
A origem de um texto vira verificável. *Por que é improvável:* modelo aberto rodando localmente
não assina nada, e o custo de contornar é uma reescrita. *O que faria com o mapa:* mataria `e2.1`,
`e11.2` e `e12.2` — um terço da raiz 4 e o freio da raiz 1. O mapa perderia sua convergência
principal. *Sinal precoce:* exigência de marca d'água em **texto** (não em imagem) dentro de um
instrumento legal com sanção.

**W3 — o prêmio que cria a categoria em vez de proibir.** *Mecanismo:* um prêmio literário de
primeira linha abre categoria de obra declaradamente coescrita, e alguém ganha sem controvérsia.
*Por que é improvável:* o movimento de 2025-2026 foi no sentido oposto — Ockham desclassificou por
capa gerada, IFComp proibiu no conteúdo exposto, e o caso Commonwealth mostrou que hoje o evento é
a **acusação**, não a premiação. *O que faria com o mapa:* inverteria `e14` — declarar deixaria de
ser risco e a assimetria desapareceria. *Sinal precoce:* um prêmio grande publicar regra que
**admite** em vez de regra que **proíbe**.

## 7. Contra o próprio mapa

Este passo foi feito por escrito sobre o mapa já pronto, e o mapa foi alterado.

### Pré-mortem — é 2056 e este mapa se mostrou errado. Por quê?

**Razão 1 — o horizonte não tinha classe de referência e eu preenchi assim mesmo.** Trinta anos
excedem qualquer comparável: o smartphone levou cerca de quatro anos do produto viável a 10% de
adoção; a realidade virtual de consumo passou dez e não chegou. Eu não tenho nada que autorize
datar 2045. *Aponta para:* toda a cauda longa da raiz 2 e os efeitos de 3ª ordem pós-2040.

**Razão 2 — a distribuição de atenção pode ser invariante.** O Steam mostra que o 1% do topo
captura cerca de 94% da receita **com ou sem IA**. Se essa distribuição não se mexe, a raiz 1
produz muito mais obras e quase nenhum efeito sobre o mercado — a enxurrada afoga o meio da cauda,
não o topo, e a estrutura de valor fica onde estava. *Aponta para:* `e1.1`, `e1.3`, `e1.2`.

**Razão 3 — a obra adaptativa pode simplesmente não ser desejada.** A evidência que eu tenho de
"cada um a sua história" é de **conversa** (Character.AI, AI Dungeon), não de **obra publicada**.
Conversa é descartável e ninguém a discute; obra existe para ser compartilhada. Pode ser que o
público queira exatamente o objeto fixo, e que a adaptação fique presa ao nicho onde já está.
*Aponta para:* a raiz 2 inteira.

### As sete baterias

**1. Extrapolação linear.** `e1.3` (preço tende a zero, receita vai para assinatura) era só "mais
do mesmo, maior" — é o que já aconteceu com música e vídeo. Ganhou mecanismo de não-linearidade
(só se concretiza se o selo humano de `e2.2` falhar em se estabelecer) e virou metade da
Contradição 1. `e3.1` também era extrapolação e foi mantido só porque o custo de descartar uma
direção é um mecanismo real e específico de estúdio.

**2. Velocidade de adoção contra a referência.** Confrontei cada prazo com sinal fraco. Três não
sobreviveram e foram empurrados (ver registro abaixo). O caso mais grave era `e5`: eu tinha 2031
para o desaparecimento do referente comum, o que exigiria que a obra adaptativa fosse publicada,
comprada e discutida em cinco anos — mais rápido que o e-book, que levou uma década para um quarto
do mercado, com uma tecnologia muito mais simples.

**3. A raiz que não acontece.** *Se a raiz 1 não acontecer:* o mapa perde `e1`-`e4` inteiros e a
raiz 4 perde intensidade, mas sobrevive — a atribuição já virou regime probatório com o volume que
existe hoje. *Se a raiz 2 não acontecer:* o mapa perde `e5`-`e7`, o que é 3 de 14 efeitos de 1ª
ordem, e não afeta as outras três raízes. É a raiz mais isolada e a mais frágil, e está declarada
como tal. *Se a raiz 3 não acontecer:* o mapa perde `e8`-`e10` e a nota sobre o Brasil perde o
lado positivo. *Se a raiz 4 não acontecer:* o mapa perde o freio — `e2` e a Convergência 1 caem
juntas, e o resultado seria um mapa de aceleração pura, que é exatamente o que a §3 chama de
propaganda. **Resposta ao teste:** as raízes não são uma só disfarçada em quatro. A raiz 4 é a que
mais sustenta as outras, e por isso é a que mais precisa estar certa.

**4. Suposições escondidas, agora explícitas.** (a) Que o custo de inferência continua caindo ou
pelo menos não sobe — se subir, `e7` e `e5` morrem, porque gerar por leitor deixa de ser viável.
(b) Que modelo aberto continua existindo e rodando localmente — é o que sustenta W2 ser improvável
e o que sustenta `e13.2.1`. (c) Que as plataformas continuam permitindo obra gerada — Valve e
Amazon podem simplesmente parar de aceitar, e isso não é hipótese remota, é o que já fizeram com
outras categorias. (d) Que a regulação de voz fica nacional e não vira tratado — se virar
internacional, `e8.3` deixa de ser freio local e vira barreira global. Cada uma dessas é um
wildcard novo que não escrevi na seção 6 por falta de mecanismo suficientemente específico.

**5. Viés do autor.** Dois efeitos estão aqui porque eu gosto do tema. `e5.2.1` (amostragem
crítica: ler N execuções para descrever a obra) é elegante e não tem nenhum sinal por trás — é uma
ideia bonita sobre método, não um efeito observado. Ficou, com confiança baixa e sinal fraco, e o
leitor deve tratá-lo como especulação. E `e10.1.1` (o arquivo vira ativo político) me agrada
porque é o tipo de efeito que gosto de encontrar; o mecanismo existe, mas eu o encontrei
procurando, não tropeçando nele.

**6. Efeitos genéricos, caçados.** A §3 proíbe quatro formulações que servem para qualquer tema.
Eu tinha escrito uma delas: *"a formação em escrita criativa se reorganiza em torno de julgamento
e recusa"*. Serve para qualquer tecnologia e não nomeia nada. Foi reescrita como `e13.1`, que
nomeia o posto (estagiário de sala de roteiro), a tarefa (primeira versão, coverage, passe de
diálogo) e o mecanismo (é a tarefa mais barata de gerar). Duas outras — "reguladores criam
categoria nova" e "surge uma nova profissão" — foram cortadas e estão na seção 12.

**7. Calibração.** A distribuição de confiança cai com a ordem: 5 altas em 14 na 1ª ordem (36%),
4 em 31 na 2ª (13%), 0 em 34 na 3ª. Está no formato esperado. A concentração de "alta" na 1ª
ordem está toda em efeitos com artefato datado por trás (`e1`, `e2`, `e8`, `e11`, `e12`) — nenhuma
delas é confiança por convicção.

### Registro de alterações

- `e5`: prazo 2031 → **2034**, e confianca alta → **media** — porque a referência (e-book, uma
  década para um quarto do mercado) não autoriza cinco anos para uma mudança muito maior.
- `e5`: sinal medio → **fraco** — não há artefato de obra adaptativa publicada; só de conversa.
- `e1.3`: prazo 2032 → **2035** — a classe de referência é a música, e do Napster ao streaming
  dominante foram cerca de quinze anos.
- `e3`: confianca alta → **media** — o artefato (MangoBox) existe, mas não há nenhum caso
  documentado de estúdio que tenha trocado o documento de design pelo protótipo gerado. É
  inferência, não observação.
- `e10`: confianca alta → **media** — eu tinha alta por causa da evidência sobre tradução, mas
  essa evidência é sobre mercado de tradução, não sobre acesso a obra em língua minoritária. O
  mecanismo é plausível; o dado é de outro fenômeno.
- `e13`: confianca alta → **media** — mesmo motivo: a evidência de destruição do degrau de baixo
  vem de tradução e de localização, não de escrita de ficção.
- `e14.1.1`: prazo 2035 → **2039** — exigia que a prática de declaração já estivesse madura, e ela
  mal começou.
- `e8.2`: confianca alta → **media** — a perda da língua de origem depende de a camada virar
  nativa de plataforma, que é justamente o sinal que ainda não aconteceu (SF1).
- **Removido:** *"O leitor passa a preferir a versão adaptada à versão fixa"* (era `e7.3`) —
  extrapolação linear sem mecanismo, e contradiz a própria evidência de que o público procura
  objeto compartilhável. Foi para a seção 12.
- **Removido:** *"Reguladores criam uma categoria jurídica nova para obra gerada"* (era `e12.3`) —
  efeito proibido pela §3: serve para qualquer tema, sem nome de regulador nem mecanismo. Foi para
  a seção 12.
- **Removido:** *"Surge a profissão de diretor de narrativa gerativa"* (era `e4.2`) — idem. Foi
  para a seção 12.
- **Reescrito:** *"A formação em escrita criativa se reorganiza"* → `e13.1` (estágio de sala de
  roteiro), pelo motivo da bateria 6.

Cota da §6 cumprida: pelo menos um efeito rebaixado ou removido por raiz. Raiz 1: `e1.3`, `e3`,
`e4.2` removido. Raiz 2: `e5` (duas vezes), `e7.3` removido. Raiz 3: `e10`, `e8.2`. Raiz 4:
`e13`, `e14.1.1`, `e12.3` removido. A bateria derrubou coisa.

## 8. O que a máquina errou

Eu sou a máquina. Sobre o meu próprio trabalho nesta rodada:

**1. Eu montei um efeito inteiro sobre um fato invertido.** O resumo da primeira busca sobre
prêmios literários afirmou, com todas as letras, que *"três das cinco histórias vencedoras
regionais do Commonwealth Short Story Prize de 2026 foram consideradas total ou parcialmente
escritas por IA"*. Eu já tinha escrito um efeito de 1ª ordem em cima disso. Ao abrir a fonte
primária — o comunicado da Commonwealth Foundation, de 22/06/2026 — o conteúdo é o oposto: a
Fundação revisou, examinou rascunhos e documentos datados, entrevistou os vencedores e concluiu
que IA **não** foi usada. O efeito foi reescrito como `e11.2`, que é sobre o **custo da acusação**,
e virou um dos melhores do mapa. Se eu tivesse confiado no resumo, teria publicado uma falsidade
sobre pessoas nomeadas.

**2. Usei número de segunda mão e percebi ao conferir.** A busca sobre o LunaTranslator devolveu
"12,1 mil estrelas". A API do GitHub, consultada diretamente no mesmo dia, diz **13.147**. A
diferença é pequena e não muda nada no mapa — mas mostra que o número que vem no resumo de busca é
sempre de outra data e de outra fonte que a citada.

**3. Descartei um bloco inteiro de estatísticas por não ter origem.** Os números de Character.AI
que apareceram (20 milhões de usuários mensais, 10 bilhões de mensagens por mês, 18 milhões de
bots criados) vêm todos de sites agregadores de estatística — demandsage, sqmagazine, gitnux,
wifitalents — que se citam entre si e não citam ninguém. **Não usei nenhum no mapa e nenhum entra
na seção 11**, mesmo sendo o dado de escala que o mapa mais gostaria de ter.

**4. Errei o dono de repositório e não reciclei o dado.** Procurei `Arrow` (narrativa não linear) e
`chronicler` no GitHub com o caminho errado; a chamada voltou vazia. Achei um `dialogic` com 89
estrelas e último push em abril de 2025 — que não é o `dialogic` da comunidade Godot que o
enunciado do tema cita, e sim outro repositório de mesmo nome. **Não cito nenhum dos três**, porque
o número que eu tenho não é do projeto que interessa.

**5. Tenho duas identificações conflitantes para o mesmo projeto de lei brasileiro e não resolvi.**
Um resultado aponta "PL 2462/2025, do deputado Ruy Carneiro"; outro, "projeto do deputado Leo
Prates (PDT-BA), apresentado em 15/08/2025". Tentei abrir o inteiro teor na Câmara e a ferramenta
devolveu PDF ilegível. **No texto eu descrevo o conteúdo e a data, e não afirmo o número do PL** —
pode haver dois projetos distintos sobre o mesmo assunto, que é o mais provável, e eu não
verifiquei.

**6. Meu instinto inicial de raiz era genérico.** A primeira lista que produzi tinha "os modelos
multimodais fecharam o ciclo" como disrupção-raiz. Isso é uma pré-condição técnica, não uma
ruptura: não diz o que deixa de valer. Reescrevi as quatro raízes em torno do que **para de
funcionar** (a proporcionalidade obra-trabalho, o referente comum, a língua como propriedade da
obra, a coincidência entre ofício e autoria) e o mapa mudou de qualidade.

**7. Três prazos eu escrevi antes de procurar a classe de referência.** `e5`, `e1.3` e `e14.1.1`
saíram do primeiro rascunho com ano redondo e sem nada por trás. A bateria 2 da seção 7 os pegou e
os três foram empurrados. O erro não é o ano estar errado — é ter escrito um ano antes de ter
motivo.

## 9. Três cenários para 2056

**Provável.** A geração narrativa está em toda parte e quase nunca aparece. Depois de vinte e
cinco anos, a lição de 2026 se confirmou: o público pune o que vê, não o que é usado, e a
indústria aprendeu a pôr a máquina onde ninguém olha — voz, localização, primeira versão, texto de
apoio, tudo gerado; o que o público lê como "a obra" é revisado e assinado por alguém. A
localização como profissão de massa acabou por volta de 2035 e sobreviveu como adaptação cultural
cara, feita por poucas pessoas muito bem pagas em poucos mercados. A obra adaptativa por leitor
existe e é nicho: a escola, a crítica e o tribunal exigiram objeto fixo, e o objeto fixo venceu
porque é o único que se pode discutir, ensinar e julgar. A autoria virou regime probatório e o
peso da prova caiu, como sempre cai, sobre quem tinha menos — o estreante declara e é descartado,
o consagrado declara e não paga nada. *Sinal precoce de que estamos entrando nele:* a proporção de
declarações de IA em texto e diálogo permanecer abaixo da de arte visual depois de 2030, apesar da
capacidade existir.

**Desejável.** O ponto de exposição virou a fronteira, e ela é clara: o que o público vê é
respondido por uma pessoa nomeada, e o que sustenta a obra pode ser gerado — a regra do IFComp de
2026 virou padrão de setor porque era simples de aplicar e não exigia detector. Com isso, o
esforço institucional saiu da caça à origem e foi para a **responsabilidade**: quem assina
responde, independentemente de como fez. A camada de tradução sobreposta virou função nativa das
plataformas e foi acompanhada, não substituída, por um regime de licença de voz negociado — o
instrumento de suspensão de consentimento em greve foi usado, funcionou, e virou cláusula padrão
em cinco países. Literatura em língua sem corpus digital entrou nos modelos porque comunidades
construíram os corpora e Estados pagaram por isso, tratando arquivo como infraestrutura. *O que
teria que ter sido feito:* traçar a fronteira no ponto de exposição em vez de na ferramenta, e
financiar corpus de língua minoritária antes de 2032, quando o custo ainda era baixo. *Sinal
precoce:* um segundo festival grande adotar a redação do IFComp, e um Estado financiar corpus
literário de língua minoritária com dinheiro de cultura, não de tecnologia.

**Indesejável.** A prova de origem nunca funcionou e a suspeita virou o modo normal de ler.
Detectores erram, todo mundo sabe que erram, e mesmo assim eles decidem — porque decidir errado é
mais barato que decidir devagar. Autores escrevem com telemetria ligada por medo, o rascunho
deixou de ser lugar de errar, e a prosa passou a ser deliberadamente imperfeita para parecer
humana. A adaptação por leitor se estabeleceu no único lugar onde o incentivo era forte o
bastante — o entretenimento otimizado para retenção — e produziu exatamente o que o artigo sobre
*narrative flattening* previa: histórias que não contrariam ninguém, porque contrariar mede pior.
A ficção que confronta migrou inteira para a instituição subsidiada e para o nicho, e a
literatura difícil virou hobby de quem pode. *Sinal precoce dele:* uma acusação pública de autoria
por IA contra um autor conhecido ser aceita sem revisão, com base só em detector — ou a primeira
plataforma de leitura a anunciar adaptação por perfil afetivo como recurso de retenção.

## 10. O experimento

### A mesma obra, duas execuções

**O que é.** Uma novela visual curta, gerada, em que **cada aluno joga uma execução diferente da
mesma premissa** — mesmo mundo, mesmo elenco, mesma situação inicial, mesma intenção autoral de
uma frase. Depois, a turma faz um clube de leitura sobre "a obra" e tenta produzir uma **lista de
proposições verdadeiras em comum**: o que aconteceu, quem fez o quê, como terminou, o que a
história disse. A medida é simples e contável: **quantas proposições a turma consegue dar como
verdadeiras para todas as execuções, e quantas se revelam verdadeiras só para algumas.**

Construção: uma premissa de uma frase, cinco personagens, MangoBox ou equivalente para gerar, uma
execução por aluno gravada em log. O log é o dado. Roda numa aula.

**Que pergunta sobre o futuro ele ajuda a responder.** A pergunta de `e5`, que é a mais frágil e a
mais importante do mapa: **o referente comum sobrevive à divergência de execução?** O mapa assume
que não. Se a turma conseguir concordar sobre a maior parte do que importa, a raiz 2 está
superestimada e o clube de leitura é mais robusto do que o mapa supõe. Responde também, de lambuja,
à pergunta de `e5.3`: a turma vai *espontaneamente* eleger uma execução canônica para poder
conversar? Se sim, `e5.3` ganha sinal.

**Que tecnologia emergente ele usa, e por que não dá com a madura.** Usa geração do artefato
inteiro a partir de uma intenção curta, com memória de sessão por jogador. Com tecnologia madura
— Ren'Py, Twine, YarnSpinner — **não dá**, e a razão é exata: numa árvore de diálogo, todas as
execuções são caminhos de um conjunto finito que o autor escreveu. A turma discordaria sobre qual
ramo pegou, mas o conjunto de proposições possíveis seria comum e conhecido. O experimento só
tem sentido quando o espaço de histórias não é enumerável antes de rodar, que é exatamente a
condição da raiz 2.

**O que a turma faz ao testar em sala.** (1) Cada aluno joga sua execução, sozinho, 15 minutos,
com o log gravado. (2) Sem consultar os logs, a turma tenta escrever em conjunto dez proposições
sobre a história; cada proposição é votada como verdadeira, falsa ou "não na minha". (3) Confere
contra os logs e conta: quantas eram verdadeiras para todos, quantas para a maioria, quantas para
ninguém além de quem propôs. (4) Registra se alguém propôs, espontaneamente, adotar uma execução
como referência — e em que minuto da discussão isso apareceu. (5) Repete com uma premissa mais
apertada (mais restrição autoral) e compara as duas contagens: **quanta restrição o autor precisa
pôr para que a obra volte a ser uma obra?** Essa última medida é o achado prático do experimento
para quem projeta.

**O resultado que me faria mudar de ideia.** Se, com premissa larga, a turma produzir e confirmar
**oito ou mais das dez proposições como verdadeiras para todas as execuções**, então o referente
comum sobrevive à geração e `e5` está errado — a divergência de execução seria superficial, e a
raiz 2 deveria ser rebaixada a efeito da raiz 1, não a raiz. Se, no outro extremo, **nenhuma
proposição sobreviver**, então `e5` está subestimado e o prazo de 2034 é tarde demais.

## 11. Fontes

Dezessete fontes abertas e lidas em 12/09/2026. Fonte que não abriu não entra; as que
falharam estão registradas na seção 12.

1. `https://app.cinevva.com/news/2026-07-20-steam-ai-disclosure-study` — o levantamento de Sulka
   Haro sobre 53.597 lançamentos do Steam (meados de 2023 a meados de 2026), publicado em
   20/07/2026: 10,9% / 19,9% / 30,8% de declaração por ano, 10% a 27% das vendas, e a quebra por
   tipo de uso entre jogos que venderam e que fracassaram. Sustenta `e1`, `e2`, `e2.1` e a tabela
   da seção 3. **Confiabilidade:** cobertura secundária de um estudo independente com método e n
   declarados; o estudo original não foi aberto, então o número é de segunda mão com origem
   nomeada.
2. `https://www.llamagriffin.com/Data/SteamNextFestJune2026/part-2.html` — contagem do Next Fest
   de junho de 2026: 1.163 de 4.382 demos com declaração (26,5%), série histórica das edições
   anteriores e distribuição por categoria de uso (visual ~60%, escrita na faixa baixa). Sustenta
   `e2` e a seção 3. **Confiabilidade:** contagem própria com método declarado (GDCo + SteamDB) e
   distinção explícita entre o que foi estimado e o que foi contado — o que é mais do que a maioria
   das fontes do setor faz.
3. `https://itch.io/games/genre-visual-novel/tag-ai-generated` — 3.471 novelas visuais com etiqueta
   `AI Generated` em 12/09/2026. Sustenta o número de adoção da raiz 1. **Confiabilidade:**
   contagem da própria plataforma, mas por **autodeclaração do criador**, sem verificação — o que é
   exatamente o problema que `e2.1` descreve.
4. `https://itch.io/games/genre-visual-novel` — 51.750 novelas visuais no total, o denominador dos
   6,7%. **Confiabilidade:** idem.
5. `https://itch.io/games/tag-ai-generated` — 77.366 projetos com a etiqueta, em todos os gêneros.
   Sustenta a escala do volume em `e1`. **Confiabilidade:** idem.
6. `https://github.com/HIllya51/LunaTranslator` — 13.147 estrelas, 1.144 forks, commit em
   12/09/2026 (consultado pela API). Sustenta SF1 e a raiz 3. **Confiabilidade:** dado primário da
   plataforma; estrela mede interesse de desenvolvedor, não uso — é proxy fraco e está usado como
   proxy fraco.
7. `https://www.mangobox.ai/` — o produto que gera novela visual jogável a partir de uma descrição
   curta: até cinco personagens, arte, cenário, cena de abertura, US$ 9/mês no Pro. Sustenta a
   âncora da raiz 1 e o experimento. **Confiabilidade:** página do próprio fornecedor — descreve
   capacidade, não adoção, e não publica número de usuários.
8. `https://mangoboxai.itch.io/mangoboxai` — a mesma ferramenta hospedada no itch.io: gratuita,
   HTML5, sessão média declarada de ~30 minutos, sem avaliações. **Confiabilidade:** página do
   fornecedor numa plataforma de terceiro; a ausência de avaliação é, ela própria, o dado.
9. `https://commonwealthfoundation.com/2026-cw-prize-update/` — o comunicado de 22/06/2026: mais de
   7.800 inscritos, cada história vencedora lida por pelo menos sete pessoas, revisão com
   rascunhos, documentos datados, notas e entrevistas, e a conclusão de que IA não foi usada.
   Sustenta `e11`, `e11.2` e `e11.2.1`. **Confiabilidade:** fonte primária da instituição
   envolvida — é parte interessada, mas é a única que sabe o que examinou.
10. `https://ifcomp.org/rules/` — a regra de 2026: todo conteúdo voltado ao jogador tem de ser
    humano, ferramenta generativa permitida no desenvolvimento (edição, depuração,
    acessibilidade, pesquisa, tradução limitada, código), e proibição de a obra exigir interação
    com serviço generativo externo durante o jogo. Sustenta `e11.3`, `e11.3.1` e SF4.
    **Confiabilidade:** regulamento oficial vigente, primário.
11. `https://www.euronews.com/2025/11/18/new-zealand-book-award-disqualifies-two-authors-for-ai-artwork`
    — novembro de 2025: dois livros desclassificados do Jann Medlicott Acorn Prize por arte de capa
    gerada, sob regra criada em agosto de 2025. Sustenta `e11` e W3. **Confiabilidade:** cobertura
    jornalística com nomes, datas e confirmação da editora.
12. `https://copyrightalliance.org/ai-report-part-2-copyrightability/` — o relatório do Copyright
    Office dos EUA de 29/01/2025: obra inteiramente gerada não é protegida; prompt não confere
    autoria; refazer o prompt é "relançar o dado"; protege-se a seleção, coordenação e arranjo
    minimamente criativos; declaração obrigatória acima do de minimis. Sustenta a raiz 4 e `e12`.
    **Confiabilidade:** análise de uma associação de titulares de direito — parte interessada na
    direção oposta à do relatório, o que torna a concordância com ele mais informativa; o
    relatório original não foi aberto.
13. `https://authorsguild.org/news/amazon-adds-to-kdp-generative-ai-policy-caps-daily-self-publishing-uploads/`
    — setembro de 2023: cota de três títulos por dia por conta e declaração obrigatória de texto,
    imagem ou tradução gerados. Sustenta "quem bloqueia" na raiz 1 e `e1.1`. **Confiabilidade:**
    entidade de classe relatando decisão de plataforma, com citação direta da comunicação da
    Amazon.
14. `https://www.audible.com/about/newsroom/audible-expands-catalog-with-ai-narration-and-translation-for-publishers`
    — 13/05/2025: mais de 100 vozes sintéticas em quatro línguas e tradução em beta, inclusive
    fala-para-fala preservando voz e estilo do narrador original. Sustenta a raiz 3 e `e9`.
    **Confiabilidade:** anúncio da própria empresa — descreve o que foi lançado, não o que foi
    adotado.
15. `https://arxiv.org/abs/2605.27878` — *Narrative Flattening*, EMNLP 2026: quatro checkpoints do
    OLMo 32B (Base, SFT, DPO, RLVR) contra texto humano de três fontes; o pós-treino comprime
    variação temática, afetiva e estilística, com efeito maior sobre ficção literária
    profissional. Sustenta `e7.2`, `e13.2` e SF5. **Confiabilidade:** artigo revisado por pares com
    desenho controlado (mesma arquitetura e mesmo pré-treino entre versões) — o desenho é a força
    principal; a generalização para modelos comerciais fechados é minha, não do artigo.
16. `https://arxiv.org/abs/2604.23676` — *Directional Alignment and Narrative Agency in Human-LLM
    Co-Writing*, Fundal e Bizzoni, 26/04/2026: corpus de 87 histórias coescritas; o humano
    introduz maior novidade semântica e dirige o rumo, o modelo elabora e mantém coerência, e o
    modelo se adapta emocionalmente mais que o humano, com tendência independente ao tom positivo.
    Sustenta a raiz 4 e `e7.2`. **Confiabilidade:** amostra pequena (87 histórias, participantes
    de um contexto universitário dinamarquês) — bom para descrever a divisão de trabalho, fraco
    para generalizar.
17. `https://www.bloodinthemachine.com/p/ai-killed-my-job-translators` — relatos de tradutores com
    números: pós-edição a cerca de um quarto da tarifa, queda de US$ 0,03-0,05 para US$ 0,01 por
    palavra, composição do trabalho migrando para ~90% de pós-edição. Sustenta `e4.1`, `e8.1` e a
    classe de referência dos prazos de mercado. **Confiabilidade:** jornalismo de testemunho, não
    amostra probabilística — os números são casos, não médias, e estão usados como ordem de
    grandeza e não como estatística.

## 12. Anexo — o levantamento bruto

### Saída do verificador

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 14 (frontmatter diz 14)
efeitos ordem 2: 31 (frontmatter diz 31)
efeitos ordem 3: 34 (frontmatter diz 34)
prazo > horizonte (2056) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 5 · media 9 · baixa 0
confiança ordem 2: alta 4 · media 25 · baixa 2
confiança ordem 3: alta 0 · media 9 · baixa 25
links da seção 11: 17/17 respondem (frontmatter diz fontes: 17)
RESULTADO: ok
```

Rodado em 12/09/2026 sobre a versão final do documento, com `--links`. Os dezessete links da
seção 11 respondem. Os contadores do frontmatter foram escritos **depois** desta saída e ajustados
a ela, não o contrário.

### Efeitos cortados na seção 7, com o motivo

**`e7.3` — "O leitor passa a preferir a versão adaptada à versão fixa".** Removido por
extrapolação linear sem mecanismo. Eu tinha escrito isso como se fosse consequência óbvia de a
adaptação existir, o que é a definição de extrapolação: "existe, logo vence". E contradiz a
própria evidência que sustenta `e5.3` — que o público de narrativa procura objeto compartilhável,
porque é isso que permite conversar sobre ele. Se algum dia voltar, precisa de mecanismo próprio:
o que faria uma pessoa preferir uma história que ninguém mais leu.

**`e12.3` — "Reguladores criam uma categoria jurídica nova para obra gerada".** Removido por ser
um dos quatro efeitos que a §3 da skill proíbe explicitamente. Serve para qualquer tema de
tecnologia, não nomeia regulador nenhum, e não tem mecanismo ligando-o ao pai. O que sobrou dele
está em `e6.1` — que nomeia o objeto da certificação (a cerca, não o conteúdo) e o mecanismo (não
há conteúdo antes de o leitor executar).

**`e4.2` — "Surge a profissão de diretor de narrativa gerativa".** Removido pelo mesmo motivo.
"Surge uma nova profissão" é o efeito genérico por excelência. O que havia de real nele está em
`e4` (a hora de produzir texto perde valor e o contrato se reorganiza em torno de restrição e
revisão) e em `e13.2` (a assinatura de voz vira o ativo escasso), que têm ator e mecanismo.

**"A formação em escrita criativa se reorganiza em torno de julgamento e recusa"** — não removido,
**reescrito**. Era o quarto efeito proibido ("cursos reorganizam o currículo"). Virou `e13.1`, que
nomeia o posto de trabalho que some (estágio de sala de roteiro), as tarefas exatas (primeira
versão, coverage, passe de diálogo) e por que elas primeiro (são as mais baratas de gerar). A
diferença entre as duas formulações é a diferença entre um mapa e um horóscopo.

### O teste da causa solta, aplicado

Para cada efeito de 2ª e 3ª ordem, removi a raiz e perguntei se ele aconteceria assim mesmo.
Quatro não sobreviveram ao teste e foram reconectados a outro pai antes da versão final:

- **"Sindicatos negociam piso por obra e não por palavra"** — eu tinha pendurado na raiz 4
  (autoria). Aconteceria do mesmo jeito por pressão salarial comum, sem nada de geração. Foi
  reconectado a `e4.1.1`, onde o mecanismo é específico: a palavra deixou de medir esforço porque
  a maior parte dela não foi digitada.
- **"O custo de certificação concentra a publicação em quem pode pagar"** — serve para qualquer
  regulação de qualquer setor. Sobreviveu só porque está pendurado em `e6.1`, cujo objeto
  (certificação **contínua**, porque o conteúdo não existe antes de rodar) é específico desta
  raiz. Mantido com confiança baixa.
- **"A independência editorial encarece"** — aconteceria por concentração de mercado sem nenhuma
  IA envolvida. Sobreviveu como `e12.2.1` porque o mecanismo específico é a transferência de
  **risco jurídico de origem**, que não existia antes de `e12`.
- **"Autores treinam modelos privados sobre a própria obra"** — no primeiro rascunho estava
  pendurado na raiz 1 (volume). Não deriva de volume; deriva de convergência estilística. Foi
  reconectado a `e13.2.1`, cujo pai é a compressão de variação medida no artigo de
  *narrative flattening*.

### A regra de parada, e onde ela foi aplicada

A §3 manda derivar o nível seguinte só enquanto houver troca de ator ou de mecanismo. Parei em três
lugares onde o filho seria só o pai mais adiante:

- Abaixo de `e8.1.1` (estúdio pequeno publica em língua única): o filho natural seria "mais
  estúdios pequenos exportam". É o mesmo efeito amadurecendo, com o mesmo ator e o mesmo
  mecanismo. Parado.
- Abaixo de `e2.1.1` (plataformas trocam declaração por detecção): o filho seria "a detecção
  melhora ou piora". Não é efeito, é parâmetro. Parado — o que interessa desse parâmetro está
  isolado em W2, onde tem mecanismo próprio.
- Abaixo de `e9.2.1` (a base sai do ofício de voz): o filho seria "há menos dubladores". Tautologia.
  Parado.

### Buscas que não deram em nada

- **Número de usuários ou de obras publicadas do MangoBox.** Nem o site do produto, nem a página do
  itch.io, nem cobertura de terceiros. A ferramenta central do enunciado do tema não tem nenhum
  dado de adoção público. Isso é, por si, informação: a raiz 1 está em produto de nicho, e nem o
  fornecedor tem número para mostrar.
- **`AIComicBuilder`** (roteiro → quadrinho animado), citado no enunciado do tema. Não localizei
  repositório nem página com dado verificável nesta rodada. Não entra no mapa.
- **`chronicler`** (worldbuilding offline em Markdown) e **`Fantasy-Map-Generator`**, também do
  enunciado. Não consultados por falta de tempo de rodada; ficam como pendência para quem
  confrontar este mapa.
- **`Arrow`** (narrativa não linear). Tentei pela API do GitHub com o caminho errado; a chamada
  voltou vazia e eu não tentei de novo. Não cito.
- **`dialogic`**. O repositório que encontrei (89 estrelas, último push em abril de 2025) não é o
  da comunidade Godot a que o enunciado se refere. O número existe e é inútil. Não cito.
- **Inteiro teor do projeto de lei brasileiro sobre dublagem.** O PDF da Câmara voltou ilegível
  pela ferramenta. Duas identificações conflitantes na cobertura secundária (PL 2462/2025, Ruy
  Carneiro; e um projeto de Leo Prates de 15/08/2025). No texto descrevo conteúdo e data sem
  afirmar o número — provavelmente são dois projetos distintos, e eu não verifiquei.
- **Página oficial da SAG-AFTRA sobre o acordo de 2025** e **a coluna do CEPR sobre emprego de
  tradutores**: as duas devolveram 403. Os números de ratificação (95,04% a 4,96%) e o teor das
  cláusulas de IA aparecem no texto vindos de resumo de busca, e **não entram na seção 11** porque
  não abri a fonte. A cobertura da Variety redirecionou para um domínio de paywall e não foi
  seguida.
- **Artigo original de Sulka Haro sobre os 53.597 lançamentos do Steam.** Li a cobertura (fonte 1),
  não o original. O número está declarado como de segunda mão com origem nomeada.
- **Dados de adoção do Character.AI, AI Dungeon e NovelAI.** Toda a primeira página de resultados
  é composta de sites agregadores de estatística que se citam entre si. Nenhum dado primário.
  Descartados inteiros.
- **Busca por "narrativa gerativa" e "coautoria com IA" em português acadêmico.** Não produziu nada
  aproveitável nesta rodada; a literatura que encontrei é toda em inglês. Isso é uma lacuna real do
  mapa e deve ser dita: o recorte brasileiro da seção 3 está apoiado em dado de indústria (games e
  dublagem), não em pesquisa sobre narrativa gerativa feita no Brasil.

### O que a busca devolveu errado, em bruto

Registro literal porque é matéria-prima para a aula sobre confiar em resumo de busca. A primeira
busca sobre prêmios literários devolveu, como síntese: *"Three of the five winning regional stories
for the Commonwealth Short Story Prize for 2026 have been found to be entirely or partially
written by AI."* A fonte primária, aberta em seguida — comunicado da Commonwealth Foundation de
22/06/2026 — diz o contrário: *"After a thorough consultation with our judges and careful
consideration of all available information, we are satisfied that AI was not used to write the
winning stories."* Entre as duas coisas há um mês de revisão, 7.800 inscrições, sete leitores por
história vencedora, exame de rascunhos e de documentos datados, e o nome de uma pessoa real
publicamente acusada. Eu já tinha um efeito de primeira ordem escrito sobre a versão falsa.

Registro também o que aconteceu depois, porque é o dado mais interessante da rodada: a Granta
anunciou que deixaria de publicar as histórias vencedoras do prêmio e de firmar parcerias
editoriais externas. Ou seja — a instituição que **não** foi acusada de nada, e que saiu da revisão
inocentada, perdeu um parceiro de publicação assim mesmo. É o custo assimétrico de `e11.2`
acontecendo em tempo real, e é por isso que aquele efeito é um dos poucos com sinal forte neste
mapa.

### Contagens de referência usadas na seção 3, em bruto

```
HIllya51/LunaTranslator : 13.147 estrelas · 1.144 forks · criado 2022-09-28 · push 2026-09-12
renpy/renpy             :  6.813 estrelas ·   933 forks · criado 2012-06-28 · push 2026-09-12
YarnSpinnerTool/Yarn... :  2.841 estrelas ·   230 forks · criado 2015-10-03 · push 2026-09-07
Monogatari/Monogatari   :    883 estrelas ·   127 forks · criado 2015-06-23 · push 2026-06-18

itch.io tag AI Generated ................. 77.366 resultados
itch.io novela visual + AI Generated ......  3.471 resultados
itch.io novela visual (total) ............. 51.750 resultados
```

Consultado em 12/09/2026 pela API do GitHub e pelas páginas de listagem do itch.io. As estrelas do
GitHub medem interesse de quem desenvolve, não uso de quem joga; as contagens do itch.io dependem
de autodeclaração do criador e não são verificadas pela plataforma. Os dois vieses estão
declarados na seção 11 e nenhum efeito depende só deles.

### O que ficou de fora por recorte, não por falta de material

- **A geração de vídeo como mídia** — controle, qualidade, autoria visual. É o tema 12. Entra aqui
  só como âncora de custo na seção 3 (os benchmarks de coerência narrativa longa) e não gera
  efeito próprio.
- **O personagem que age dentro de um mundo com regras.** É o tema 7. A fronteira que usei: aqui o
  objeto é a **história como coisa gerada**; lá, o **agente dentro de um mundo**. Um NPC que
  improvisa uma fala é tema 7; uma novela visual que se escreve inteira a partir de uma frase é
  tema 8. Onde os dois se tocam — a fala que o NPC improvisa é, ela também, narrativa gerada — os
  dois mapas convergem em `e11.3.1` (a fronteira no ponto de exposição) e vale a pena comparar as
  duas seções 5 lado a lado na aula.
- **Design procedural** (regras, não histórias). É o tema 14.
- **O companheiro digital sem mundo e sem obra.** Fica no tema 19, e é justamente por isso que os
  números de Character.AI não entram aqui mesmo se fossem confiáveis: descrevem conversa, não obra
  publicada.

### Nota de método sobre o horizonte

O briefing pediu 2056 e o mapa o respeita como janela máxima, não como alvo. Nenhuma classe de
referência disponível cobre trinta anos: o telefone conectado levou cerca de quatro anos do
produto viável a 10% de adoção; a realidade virtual de consumo levou mais de dez e não chegou; o
livro eletrônico levou uma década para um quarto do mercado e parou. O efeito mais distante deste
mapa é de 2048 (`e10.2.1`). Os anos de 2049 a 2056 estão vazios de propósito. Preenchê-los seria
produzir precisão que eu não tenho — e a §6 da skill chama isso pelo nome: prazo sem classe de
referência é chute.
