---
tema: Narrativa gerativa e coautoria
slug: narrativa-gerativa-e-coautoria
autor_login: alpa2
zona_de_interesse: Simulação e mundos
data: 2026-09-17
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 13
efeitos_ordem_3: 13
tecnologias_citadas: [Mangobox, Summer Engine, Chatforce, LlamaGen, LunaTranslator, NovelAI, AI Dungeon, "Ren'Py", Monogatari, Inform 7, Twine, Yarn Spinner, Dialogic, Arrow, Fantasy-Map-Generator, ChatTTS, Bark, Pika, Luma, Genie 3, Project Genie, NARRA-Gym]
fontes: 8
confianca: media
experimento: Um clube de leitura em que cada participante lê uma versão diferente da mesma obra gerada, para medir em que ponto exato a conversa sobre "a obra" deixa de funcionar.
skill_usada: futurizacao-alpa2
publico_ok: false
---

## 1. Resumo

O custo de **contar** está caindo a quase zero, e isso não é a notícia. A notícia é o que
sobra quando ele cai: uma obra narrativa interativa deixa de ser um objeto produzido por uma
equipe e passa a ser uma **saída de um sistema** — que pode ser diferente a cada execução, e
que pode ser consumida numa língua que ninguém publicou.

Três disrupções-raiz passaram o critério de corte deste mapa:

1. **A geração do artefato narrativo inteiro a partir de uma intenção curta.** Não é
   "escrever com ajuda de IA" — é uma frase virar novela visual jogável, com elenco, arte,
   ramificação e final. Rompe quem pode publicar.
2. **A obra que se reescreve por leitor.** Adaptação empática por pessoa, medida e otimizada.
   Rompe a existência de "a obra" como objeto comum — e, com ela, a possibilidade de duas
   pessoas conversarem sobre a mesma coisa.
3. **A camada de tradução sobreposta, instalada pelo público e não pela editora.** Rompe quem
   decide em que língua uma obra existe. O `LunaTranslator`, com 13,2 mil estrelas no GitHub,
   é um sinal pequeno de algo grande: obra japonesa consumida em português sem que ninguém
   tenha traduzido nada.

O que **não** entrou como disrupção-raiz, apesar de parecer: script-to-video por prompt
(`Pika`, `Luma`), voz sintética (`ChatTTS`, `Bark`) e co-escrita com LLM (`NovelAI`, desde
2021). Todas as três tornam mais rápido e mais barato algo que já se fazia — pelo teste do
Passo 2 da skill, são melhoria incremental, e estão na seção 3.

A aposta central do mapa, se for para escolher uma: **até 2031 o gargalo do campo não é
gerar, é distinguir**. Descoberta, procedência e prova de autoria humana passam a ser onde o
dinheiro e a política se concentram — não a produção. O sinal mais forte disso já está nos
números: em 2026, aproximadamente um terço dos lançamentos na Steam declara uso de IA, mas
esse terço captura uma fração muito menor das vendas. Capacidade de produzir deixou de ser
escassa; atenção não.

A confiança geral deste mapa é **média**, e na 3ª ordem é **baixa por construção** — não por
falha. Ver seção 7.

## 2. O tema

**Narrativa gerativa e coautoria** trata da história *como coisa gerada*, e do que isso faz
com a ideia de autoria e de obra.

O recorte importa, porque três vizinhos são facilmente confundidos com este:

- O **personagem que age** dentro de um mundo (NPC generativo, agente com objetivo) é outro
  tema. Aqui o objeto não é o habitante, é a narrativa.
- A **geração de imagem e vídeo como mídia** — controle, qualidade, autoria visual — é outro
  tema. Aqui a imagem entra só como parte do artefato narrativo.
- O **design procedural** — regras que geram espaço, nível, item — é outro tema. Geração
  procedural produz *possibilidade*; narrativa gerativa produz *história*, que é uma escolha
  entre possibilidades com consequência dramática.

O que este mapa persegue é uma pergunta única, e ela é de natureza ontológica antes de ser
tecnológica: **o que é uma obra, quando cada execução produz uma diferente e cada leitor
recebe a sua?** É a pergunta que a queda do custo de contar torna inevitável.

### Parâmetros deste mapa (declarados)

| Item | Valor |
|---|---|
| Horizonte | 2031 |
| Público | quem projeta mídia e interação |
| Recorte geográfico | global, com uma nota sobre o Brasil na seção 9 |
| Descartado de início | o que já é comum em produto de massa (régua da disciplina) |
| Viés desejado | neutro, sem preferência declarada |
| Palpite prévio de disrupção | nenhum — levantado do zero |
| Profundidade | três ordens (regra do formato) |
| Modo | a partir de um tema/inovação, não de um setor |

**Critério declarado de falseamento**, fornecido junto com o pedido: este mapa deve ser
revisto se aparecer evidência de que (a) a adoção já passou da maioria inicial na curva de
Rogers — caso em que deixa de ser emergente e vira estado de coisas —, ou (b) a tecnologia
não rompe nada, só melhora o que já existe. O critério (b) foi aplicado de forma literal no
Passo 2 e derrubou três candidatas.

## 3. Onde isso está hoje

### 3.1 O que já existe e funciona

**A infraestrutura narrativa clássica está madura e não é notícia.** `Ren'Py` e `Monogatari`
(engines de novela visual), `Inform 7` e `Twine` (ficção interativa), `Yarn Spinner`,
`Dialogic` e `Arrow` (diálogo ramificado e narrativa não linear), `Fantasy-Map-Generator` e
`chronicler` (worldbuilding). Tudo isso funciona, tem comunidade, documentação e uso comum.
Pelo critério deste mapa, é **contexto**, não disrupção. Importa aqui por um motivo
específico: é o alvo que a geração vai absorver ou transformar, e é o repertório de formas
que a geração herda sem ter inventado.

**A geração do artefato completo existe e está à venda.** O `mangobox.ai`, aberto em
17/09/2026, recebe a descrição de uma situação e devolve uma novela visual jogável: até cinco
personagens com personalidades distintas, arte de retrato e de cena em vários estilos
(anime, cyberpunk, realista), conversas em grupo em que os personagens interagem entre si e
com o jogador, história jogável "em minutos", rejogável com escolhas diferentes. Não é
protótipo de laboratório: tem plano gratuito e assinatura Pro a US$ 9/mês, com vídeo gerado
incluído na cota. Na mesma faixa há `Summer Engine`, `Chatforce` e `LlamaGen`, todos
prometendo a mesma coisa com arranjos diferentes — descrição em linguagem natural, lógica de
ramificação, salvamento e múltiplos finais sem escrever código.

**A camada de tradução sobreposta existe, é livre e tem público.** O `LunaTranslator`
(GPLv3, 13,2 mil estrelas e 1,1 mil forks no GitHub em 17/09/2026) extrai o texto de um jogo
por *hook* de memória — "compatível com quase todas as novelas visuais, populares e de
nicho" — ou por OCR quando o hook não serve, traduz com praticamente qualquer motor,
incluindo LLM e tradução offline, e **incorpora a tradução dentro do jogo**. Faz mais do que
traduzir: segmentação de palavras em japonês, anotação de kana, integração com AnkiConnect e
Yomitan, síntese de fala online e offline, reconhecimento de voz, e hook para emuladores de
NS, PSP, PSV e PS2. É simultaneamente uma ferramenta de acesso e uma ferramenta de
aprendizado de língua.

**A geração de mundo jogável em tempo real saiu do papel.** O `Genie 3` do Google DeepMind,
de agosto de 2025, gera ambientes interativos a 720p e 24 fps com memória de um minuto —
contra 10 a 20 segundos do `Genie 2`, de dezembro de 2024, que rodava a 360p. Em 29 de
janeiro de 2026 o `Project Genie` abriu a assinantes AI Ultra nos EUA, com sessões limitadas
a 60 segundos pelo custo computacional do modelo autorregressivo. Isso importa para
narrativa por um motivo indireto: se o **mundo** pode ser gerado em tempo real, o limite para
a história gerada em tempo real deixa de ser a arte e passa a ser a memória e a coerência.

**A declaração de IA já é infraestrutura de plataforma.** O `itch.io` mantém um campo de
"Generative AI disclosure" que pergunta em quais camadas houve geração — gráficos, som,
texto e diálogo, código — e aplica ao projeto a etiqueta `AI Generated` ou `No AI`. A
declaração é **opcional para jogos e obrigatória para pacotes de assets**, e asset não
etiquetado deixa de aparecer nas páginas de navegação, embora continue acessível por busca ou
link direto. A justificativa declarada pela plataforma é a ambiguidade jurídica sobre os
direitos associados a conteúdo gerado. Na comunidade de ficção interativa, a recepção foi de
aceitação cautelosa com duas queixas concretas: não há etiquetagem em lote, o que na prática
faz autores etiquetarem só o que ainda tem tráfego, e a categoria não distingue arte de capa
gerada de conteúdo de jogo gerado.

**A base jurídica da autoria já está decidida, e é restritiva.** O relatório de
copyrightability do U.S. Copyright Office fixou que material gerado por máquina não é
registrável — nem isolado, nem como elemento dentro de obra humana. O ponto mais duro para
este tema é o que o relatório diz sobre prompt: prompting, por elaborado que seja, não gera
material protegível, porque não constitui controle criativo suficiente. A analogia adotada é
crua — usar prompting sucessivo até achar o resultado desejado é como girar uma roleta até
sair o número que você quer. O que **sobra** protegível é a contribuição humana: seleção,
arranjo e organização. Obra mista é registrável se a parte humana for suficiente, com dever
de declarar e desconsiderar a parte gerada.

### 3.2 O que existe mas não pegou, ou pegou torto

**A declaração cresce mais rápido que o resultado.** No Steam Next Fest de junho de 2026,
26,5% dos 4.382 demos rastreados declararam uso de IA, contra 21,2% na edição de fevereiro de
2026 — uma alta de cinco pontos na comparação mais limpa disponível. Considerando o conjunto
completo do evento (cerca de 8.682 entradas), a taxa fica em torno de 20%. A distribuição por
tipo de conteúdo é o dado mais interessante: cerca de 60% do uso declarado está em **ativos
visuais**, e escrita e diálogo aparecem na faixa **mais baixa**. Ou seja: o que hoje se gera
em escala é a arte, não a história. Código e lógica ficaram isentos de declaração a partir de
janeiro de 2026.

Isso importa porque contraria a intuição do tema. A capacidade de gerar narrativa existe; o
que a indústria efetivamente terceirizou para a máquina, até aqui, é a imagem.

**A qualidade narrativa não acompanha a fluência.** O `NARRA-Gym`, publicado em 8 de maio de
2026 (arXiv 2605.08503, Huang et al., 18 autores), é um ambiente executável de avaliação que
transforma uma "semente emocional esparsa" num episódio interativo completo e registra a
trajetória inteira com modelo no laço: construção da história, atualização de memória,
planejamento, intervenção de ritmo e síntese opcional de artefato. O achado que mais pesa
para este mapa, medido em nove geradores de fronteira: **modelos que produzem histórias
fluentes ainda falham em robustez, em experiência do usuário e em personalização sensível à
resistência do leitor.** Há variação substancial entre modelos, entre personas e entre
dimensões de avaliação. Escrever bonito e conduzir bem são capacidades diferentes, e a
segunda não vem de graça com a primeira.

**A co-escrita com LLM já é velha, e isso é um dado.** O `NovelAI` lançou em 28 de abril de
2021, com beta em 15 de junho de 2021 — escrita assistida por assinatura, geração de imagem
adicionada em 3 de outubro de 2022, e uma cláusula de termos que dá ao usuário todo o
conteúdo gerado, comercial ou não. Cinco anos de existência, com controvérsias que
prefiguraram todas as atuais: treino em imagens do Danbooru sem consentimento dos artistas,
com repúdio público da própria plataforma de origem, e vazamento do código-fonte em 6 de
outubro de 2022. O `AI Dungeon` é anterior. **Co-escrever com máquina não é o futuro — é o
presente desde 2021.** É exatamente por isso que não entra como disrupção-raiz aqui.

**A autoria assumida já foi punida e já foi premiada, na mesma janela.** No 18º prêmio de
romance de fantasia da AlphaPolis, em 2025, uma novela web de isekai ganhou o Grande Prêmio
e o Prêmio do Leitor; o autor declarou que a maior parte do texto foi feita com IA
generativa. A editora cancelou a publicação impressa e a adaptação em mangá, e em 18 de
novembro de 2025 alterou as regras para excluir obras geradas por IA. No sentido oposto, o
IBPA Book Awards não proíbe trabalho assistido por IA, e um autor que foi transparente sobre
o uso ganhou o prêmio de 2026 em sua categoria. O New Zealand Book Awards Trust passou a
exigir que obras submetidas ao Ockham não contenham material de IA de qualquer tipo, e
desclassificou dois autores por arte de capa gerada.

O wildcard sugerido pelo enunciado do tema — "um best-seller assumido como coautoria com IA
ganhar um prêmio literário ou ser barrado dele" — **já aconteceu nas duas direções**. Isso
rebaixa aquele item de wildcard a sinal em curso, e obriga a procurar um wildcard de verdade
(seção 6).

### 3.3 Quem está construindo

| Quem | O que faz | Onde |
|---|---|---|
| Mangobox | frase → novela visual jogável, elenco, arte, conversa em grupo | produto pago, `mangobox.ai` |
| Summer Engine, Chatforce, LlamaGen | engines nativas de IA para novela visual | produto |
| Anlatan (NovelAI) | co-escrita e imagem por assinatura desde 2021 | produto maduro |
| Google DeepMind | mundo jogável gerado em tempo real (Genie 3, Project Genie) | pesquisa em rollout |
| Comunidade `LunaTranslator` | camada de tradução sobreposta, GPLv3 | software livre, 13,2k estrelas |
| Academia (Huang et al. e outros) | avaliação de narrativa interativa, grafos de conhecimento como guia, modelo narrativo centrado no autor | arXiv, ACL |
| itch.io, Valve | taxonomia e política de declaração | plataforma |
| U.S. Copyright Office | a régua do que é registrável | regulador |
| Comunidade `Ren'Py`, IFDB, intfiction.org | o repertório de formas e a norma social do campo | comunidade |

### 3.4 O que foi rejeitado como disrupção-raiz (e por quê)

Pelo Passo 2 da skill, três candidatas plausíveis foram rejeitadas. Registro aqui porque a
rejeição é resultado, não sobra.

**Script-to-video por prompt (`Pika`, `Luma`).** Teste 1 — o que rompe? Torna mais rápido e
mais barato produzir animática, storyboard animado e vídeo curto: coisas que já se faziam,
com o mesmo pipeline de decisão e o mesmo cliente. Não muda quem pode fazer de forma
qualitativa, muda o custo. → **melhoria incremental de tecnologia madura, rejeitada.** Entra
como contexto, e como habilitador da disrupção 1.

**Voz sintética para diálogo (`ChatTTS`, `Bark`, TTS embutido no `LunaTranslator`).** Teste 3
— o que falta para se concretizar? Tecnicamente, pouco: já roda offline, já está dentro de
ferramenta de usuário final, já aparece no uso declarado na Steam. O que falta é **contrato e
norma**, não capacidade. → **rejeitada como raiz**; reaparece como efeito (e7 e e7.1), que é
o lugar correto dela no mapa.

**Co-escrita com LLM.** Teste 2 — por que agora e não há cinco anos? Não há resposta: há
exatamente cinco anos, e o `NovelAI` está no mercado desde abril de 2021. → **rejeitada.** O
que é emergente não é escrever com a máquina, é a máquina entregar o artefato inteiro.

## 4. As disrupções-raiz

### D1 — A geração do artefato narrativo inteiro a partir de uma intenção curta

**O que rompe.** Quem pode publicar uma obra narrativa interativa. Até aqui, uma novela
visual exigia a soma de três competências escassas — escrita, arte e programação — e
portanto uma equipe, ou anos de uma pessoa. A geração do artefato completo dissolve a
composição da equipe como pré-requisito. Não é "mais barato": é uma mudança de quem está
autorizado pela realidade material a tentar.

**Por que agora, e não há cinco anos.** Três coisas cruzaram limiar ao mesmo tempo. Primeira:
o pipeline multimodal fechou o ciclo texto → imagem → som → vídeo num único sistema, o que
permite gerar um **conjunto coerente** de personagem, retrato, cena e diálogo, não peças
soltas. Há cinco anos não havia consistência de personagem entre imagens. Segunda: as
ferramentas de narrativa interativa — que existem há décadas, com formas estabilizadas —
viraram alvo natural, porque o formato de saída já estava resolvido: a máquina não precisou
inventar o que é uma novela visual. Terceira: apareceu modelo de negócio a US$ 9/mês, o que
significa que alguém já acredita que a inferência custa menos do que isso.

**O que ainda falta.** Coerência de longo prazo — o `NARRA-Gym` mostra que fluência não
garante robustez nem gestão de memória e ritmo. Distribuição: declarar IA não faz vender, e o
dado da Steam é explícito em que a geração hoje é de imagem, não de história. E norma social:
comunidades de ficção interativa e plataformas ainda estão negociando as etiquetas.

### D2 — A obra que se reescreve por leitor

**O que rompe.** A existência de "a obra" como objeto compartilhado. Se a história se adapta
ao leitor — ao seu ritmo, às suas reações, à sua resistência —, então duas pessoas que dizem
ter lido a mesma coisa não leram a mesma coisa. Isso rompe algo que nenhuma tecnologia
anterior tinha tocado: a possibilidade de **conversar** sobre uma obra. Ramificação não faz
isso, porque o conjunto de ramos é finito, público e enumerável — dá para dizer "eu peguei o
final B". Adaptação contínua por leitor não tem ramo nomeável.

**Por que agora, e não há cinco anos.** Porque a personalização deixou de ser escolha de
ramo e passou a ser objeto mensurável: o `NARRA-Gym` avalia explicitamente personalização
sensível à resistência do leitor, gestão de memória, planejamento e intervenção de ritmo —
isto é, o campo já tem instrumento para medir a coisa, o que é o sinal mais confiável de que
a coisa está sendo construída. E porque a geração em tempo real passou a ser demonstrável
até no nível do mundo (`Genie 3` a 24 fps, `Project Genie` em rollout em janeiro de 2026).

**O que ainda falta.** Memória. O limite declarado do `Genie 3` é um minuto, e a sessão do
`Project Genie` é de 60 segundos por custo computacional — para uma obra de dez horas, isso
é a diferença entre um efeito e um produto. Falta custo de inferência por leitor compatível
com preço de obra. E falta, sobretudo, **convenção**: não existe forma estabelecida de citar,
resenhar, ensinar ou vender uma obra que é diferente para cada pessoa.

### D3 — A camada de tradução sobreposta, instalada pelo público

**O que rompe.** Quem decide em que língua uma obra existe. A localização sempre foi decisão
do titular: abrir um mercado era um investimento com retorno estimado, e havia mercados que
nunca se abriam. A camada sobreposta transfere essa decisão para o leitor — e o leitor a toma
sem pedir licença. Não é melhoria da tradução: é a remoção do titular do caminho entre a obra
e a língua.

**Por que agora, e não há cinco anos.** Porque as três peças ficaram prontas juntas: hook de
memória e OCR maduros o suficiente para pegar o texto de "quase todas" as novelas visuais,
LLM barato o bastante para traduzir em tempo real com qualidade aceitável para consumo, e TTS
offline para fechar a experiência em voz. Há cinco anos existiam hooks e existia tradução
automática, mas a qualidade do meio do caminho tornava a experiência inutilizável para obra
longa e dialogada. O número que marca a virada não é técnico, é social: 13,2 mil estrelas e
1,1 mil forks.

**O que ainda falta.** Legitimidade jurídica — uma camada de tradução não autorizada produz
obra derivada, e ninguém testou isso a sério em tribunal. Qualidade contestável em registro
literário, especialmente em obra com jogo de palavra e em voz de personagem. E
reconhecimento pela indústria: a localização oficial ainda trata a camada como pirataria, não
como concorrente.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A geração do artefato narrativo inteiro a partir de uma intenção curta
    efeitos:
      - id: e1
        ordem: 1
        efeito: Uma pessoa sozinha passa a publicar obra narrativa interativa com escopo que antes exigia equipe de escrita, arte e programação.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O volume de lançamentos cresce mais rápido que a atenção disponível, e a descoberta substitui a produção como gargalo do mercado narrativo.
            sinal: forte
            prazo: 2028
            confianca: alta
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O selo de procedência passa a ser precificado como atributo de produto, e a plataforma que define a taxonomia das etiquetas exerce política cultural sem se declarar como tal.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A escrita de jogo se reorganiza em torno de especificar e revisar, e a linha de diálogo deixa de ser a unidade de trabalho remunerada.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: A formação de roteirista passa a ensinar desenho de restrição como competência central, e o portfólio deixa de ser amostra de texto para ser sistema verificável.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O protótipo jogável substitui o documento de pitch como forma normal de apresentar uma ideia narrativa.
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: A decisão de financiar uma obra passa a ser tomada sobre um jogável de vinte minutos, e não sobre um roteiro lido.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: O contrato de encomenda migra de entrega de texto para entrega de sistema que gera texto, e a disputa contratual passa a ser sobre comportamento do sistema em vez de sobre a página entregue.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Fã-obra e obra oficial deixam de se distinguir pelo acabamento e passam a se distinguir apenas pela licença.
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: O titular de um mundo ficcional passa a licenciar o direito de gerar dentro dele como produto, com os limites do canon codificados em regra legível por máquina.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: A obra gerada não é registrável na parte que a máquina fez, e a autoria passa a ser declarada em camadas em vez de atribuída a um nome.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: A prova da contribuição humana — histórico de edição, seleção e arranjo — vira artefato obrigatório de produção, e não subproduto do processo.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Nasce um registro de proveniência de obra narrativa, mantido por plataforma ou consórcio, e o valor comercial de uma obra passa a depender da qualidade do seu rastro documental.
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: A obra que se reescreve por leitor
    efeitos:
      - id: e4
        ordem: 1
        efeito: Duas pessoas que afirmam ter lido a mesma obra passam a ter lido textos materialmente diferentes, sem poder nomear a diferença.
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: A conversa sobre obras perde o objeto comum e se desloca de "o que aconteceu" para "o que aconteceu com você".
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A crítica deixa de julgar o texto e passa a julgar o gerador, o que exige dela uma competência metodológica de amostragem e teste que a formação em crítica não oferece hoje.
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Aparece uma edição canônica congelada, vendida como produto premium ao lado da versão adaptativa da mesma obra.
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: A escola e a universidade ensinam apenas a versão congelada, e a obra adaptativa fica fora do currículo por não ser citável.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: A adaptação por leitor se torna vetor de manipulação afetiva, porque o sistema aprende o que prende cada pessoa antes de aprender o que a serve.
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A regulação passa a exigir limites de personalização de conteúdo narrativo, como já exige de sistema de recomendação.
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Consolida-se uma categoria regulatória de obra que se ajusta ao usuário, com dever de auditoria, separada tanto de mídia editorial quanto de jogo.
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: A avaliação de narrativa gerada deixa de medir qualidade de texto e passa a medir robustez, gestão de ritmo e resistência à personalização indevida.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Métrica de benchmark narrativo entra no contrato de licenciamento de engine, como hoje entram métricas de desempenho gráfico.
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A camada de tradução sobreposta, instalada pelo público
    efeitos:
      - id: e6
        ordem: 1
        efeito: Obras passam a ser consumidas em escala em línguas nas quais nunca foram publicadas, sem que nenhum titular tenha autorizado.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: A localização oficial perde a função de abrir mercado e passa a competir com a camada do público em qualidade percebida e em rapidez.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A cadeia de localização se reorganiza em duas pontas — engenharia de pipeline e direção cultural — e a camada intermediária de tradução e revisão por volume desaparece como carreira.
                sinal: medio
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "A pirataria muda de natureza: deixa de ser cópia da obra e passa a ser cópia do acesso a ela em outra língua."
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Contratos de publicação passam a tratar a língua como camada de serviço licenciável, e não como edição territorial com tiragem própria.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.3
            ordem: 2
            efeito: A língua de origem deixa de ser propriedade da obra e passa a ser apenas um fato da produção dela.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.3.1
                ordem: 3
                efeito: O mercado narrativo deixa de se organizar por território linguístico, e o público-alvo passa a ser definido por gosto em vez de idioma.
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: A voz sintética fecha a camada sobreposta, e a obra passa a ser ouvida, e não apenas lida, em qualquer língua.
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O trabalho de dublagem se torna objeto de disputa contratual explícita, com cláusula de IA como condição de assinatura.
            sinal: forte
            prazo: 2027
            confianca: alta
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A voz humana se estabelece como selo de nicho premium, e o restante do catálogo passa a ser sintético por padrão.
                sinal: medio
                prazo: 2031
                confianca: baixa
```

### O que o bloco não consegue dizer

**As três disrupções não são independentes, e a ordem entre elas importa.** D1 produz volume;
D3 produz alcance; D2 produz variação. Se D1 e D3 andarem sem D2 — muita obra, em muitas
línguas, mas cada obra ainda sendo uma coisa fixa —, o mapa é apenas um mercado inflado com
um problema de curadoria: incômodo, administrável, sem crise conceitual. **A crise é D2.** É
ela que tira o chão da pergunta "o que é uma obra", e é a que tem a evidência mais fraca.
Isso é desconfortável e está declarado.

**Há uma tensão direta entre e1.1 e e6.3.** O primeiro diz que a atenção fica escassa e a
descoberta vira o gargalo. O segundo diz que o mercado deixa de se organizar por território
linguístico. Juntos, eles produzem um resultado que nenhum dos dois prevê isoladamente: a
concorrência por atenção deixa de ser local. Hoje uma novela visual em português compete com
outras novelas visuais em português; num mundo com camada de tradução, ela compete com o
catálogo japonês inteiro. O efeito líquido sobre um autor brasileiro pode ser **negativo**,
mesmo com o custo de produção dele caindo a zero — porque o custo de acesso ao concorrente
também caiu a zero, e o catálogo do concorrente tem trinta anos de vantagem. Isto não é
efeito de nenhuma disrupção isolada; é interação, e a roda não tem lugar para registrá-la.

**Há uma contradição de fundo entre e3 e e1.** A base jurídica (e3) diz que prompting não
gera propriedade. A economia (e1) diz que a produção por prompting vai explodir. As duas
coisas juntas produzem um mercado em que **a maior parte das obras publicadas não é
propriedade de ninguém** — situação sem precedente moderno no mercado cultural, e cujas
consequências eu não consigo derivar com honestidade. A roda produz e3.1.1 (registro de
proveniência) como saída, mas essa é a saída *ordenada*; a saída desordenada — um domínio
público de fato, involuntário e gigantesco — é igualmente plausível e não está no bloco.

**Os prazos das 3ªs ordens são quase todos 2031 e 2032, e isso é suspeito.** Não é
convergência de evidência: é o horizonte do mapa atraindo os números. Ver seção 7.

**Sobre "sinal forte" em e7.1.** É o único caso em que um efeito de 2ª ordem tem sinal mais
forte que seu efeito de 1ª ordem, o que é logicamente estranho. A razão é factual: a
mobilização contratual da dublagem **já está em curso** por razões que antecedem a camada de
tradução sobreposta — é reação à dublagem sintética em geral. Ou seja, e7.1 tem uma segunda
causa, fora deste mapa. Deixei o sinal alto e registro a anomalia em vez de maquiar a
hierarquia.

## 6. Sinais fracos e wildcards

### Sinais fracos

**A geração está na imagem, não na história.** Cerca de 60% do uso declarado de IA nos demos
da Steam está em ativos visuais; escrita e diálogo estão na faixa mais baixa. Se o tema é
narrativa gerativa, o sinal diz que a narrativa é justamente onde a máquina ainda não entrou
em escala — ou onde os desenvolvedores não declaram que entrou. As duas leituras são
interessantes e mutuamente exclusivas.

**A etiqueta `No AI` existe.** O `itch.io` não oferece apenas a marcação positiva; oferece o
inverso. Uma plataforma criou o vocabulário pelo qual "feito sem máquina" se torna afirmável
— e, portanto, vendável. Isso é infraestrutura de uma economia de procedência que ainda não
existe.

**Ninguém consegue etiquetar em lote.** A queixa concreta dos autores de ficção interativa é
prosaica e reveladora: sem etiquetagem em lote, cada um marca só o que ainda tem tráfego. A
política de declaração já nasce com um viés estrutural — o catálogo antigo fica sem etiqueta
para sempre. Qualquer estatística futura sobre "quanto do acervo usa IA" herdará esse viés.

**O `LunaTranslator` é ferramenta de aprendizado de língua, não só de tradução.** Segmentação
de japonês, anotação de kana, AnkiConnect, Yomitan. O público que instala a camada não
necessariamente quer evitar a língua — parte dele quer aprendê-la usando a obra. Isso
complica e6.3: a camada pode aumentar, e não diminuir, o número de pessoas que lê no
original.

**O limite de 60 segundos do `Project Genie`.** O gargalo declarado é custo computacional do
modelo autorregressivo, não capacidade do modelo. Isso significa que o prazo de D2 é uma
função de preço de inferência — uma variável econômica, não científica. Prazos que dependem
de preço de computação foram historicamente subestimados, nas duas direções.

**A voz sintética entrou pela porta da série curta vertical.** No Brasil, a mobilização da
dublagem ganhou tração com a chegada de plataformas de série curta para consumo em celular.
O formato novo, sem tradição de elenco nem contrato estabelecido, é onde a substituição
acontece primeiro — não no catálogo prestigioso. Vale como regra geral: a substituição entra
pelo formato que ainda não tem norma.

### Wildcards

**1. Um processo judicial mata a camada de tradução sobreposta — ou a legaliza.** Um único
titular grande processando um projeto de camada sobreposta produz uma decisão que vale para
todos. Se a camada for declarada obra derivada não autorizada, D3 recua para a
clandestinidade e e6.1 nunca acontece. Se for declarada acessibilidade ou uso
transformativo, a camada passa a poder ser embutida por plataformas, e D3 acelera anos. O
wildcard não é o processo: é que **o resultado é binário e não previsível**, e metade do meu
mapa depende dele.

**2. Uma obra adaptativa ganha um prêmio que exige obra fixa, e a comissão descobre que não
consegue verificar o que premiou.** Não é a versão do enunciado — aquela já aconteceu, nas
duas direções, em 2025 e 2026. Este é o caso seguinte: não o escândalo de "foi IA que
escreveu", mas o vexame procedimental de um júri não conseguir estabelecer **o objeto** que
julgou, porque cada jurado leu uma versão. Baixa probabilidade, alto impacto: seria o
primeiro evento público a tornar a questão de D2 inegável para quem não é do campo.

**3. O contrário de tudo: o público rejeita e o preço da procedência explode.** Os dados da
Steam já mostram que declarar IA não converte em venda. Se essa curva se firmar — um terço
dos lançamentos disputando uma fração pequena das vendas por três anos seguidos —, o
resultado não é adoção com atrito, é **repúdio de mercado**. Nesse mundo, D1 se concretiza
tecnicamente e fracassa comercialmente, a geração fica confinada ao amador e ao asset
invisível, e "escrito por humano" passa a ser a categoria premium dominante. É o wildcard
mais desconfortável porque não é catastrófico nem utópico: é o mapa inteiro virando um
fenômeno de nicho, e este documento envelhecendo como entusiasmo datado.

**4. Alguém resolve a memória, e a obra de dez horas adaptativa fica barata antes de 2029.**
Se o custo por sessão longa cair uma ordem de grandeza, D2 deixa de ser a disrupção fraca do
mapa e passa a ser a principal, e todos os prazos da segunda roda antecipam três anos de
uma vez. Probabilidade baixa no horizonte, impacto maior que o de qualquer outro item aqui.

## 7. Contra o próprio mapa

Esta seção é obrigatória na skill e não é decorativa. Ataco o que produzi acima.

### 7.1 Qual efeito é só extrapolação linear do presente

**e1.1 é a extrapolação mais óbvia, e eu a mantive.** "Volume cresce, atenção não, descoberta
vira gargalo" é a curva da Steam esticada — 10,9% em 2024, 19,9% em 2025, cerca de 30% em
2026, e daí para frente reto. Curvas de adoção quase nunca seguem retas; e há uma razão
específica para essa parar: a declaração depende de **política de plataforma**, que já mudou
duas vezes (código foi isentado em janeiro de 2026) e vai mudar de novo. Parte do crescimento
observado pode ser aumento de conformidade, não aumento de uso. Mantive o efeito com sinal
forte porque a direção é robusta, mas **o número não deve ser projetado**, e qualquer leitura
que trate "50% até 2028" como dado está tratando projeção de blog como medição.

**e6.1.1 também é linear**, e de forma mais perigosa, porque parece ancorada em fato: a
recomposição da cadeia de localização em duas pontas com desaparecimento do meio. A forma
dessa afirmação — "o meio desaparece, as pontas sobrevivem" — é exatamente a forma que toda
previsão de automação assume desde os anos 1980, e ela acerta menos do que a repetição
sugere. Reduzi a confiança para baixa por esse motivo, apesar de o sinal ser médio.

**Um efeito que cortei por ser extrapolação pura.** Na primeira rodada eu tinha escrito, como
efeito de 1ª ordem de D1: *"o mercado de trabalho de escritor de jogo desaparece até 2029"*.
Cortado e substituído por e1.2 (reorganização em torno de especificar e revisar). Dois
motivos. Primeiro, o único caso comparável com dados — a localização — mostra **recomposição
de papel**, não eliminação: o mercado de serviços cresceu em valor no mesmo período em que os
profissionais perderam renda e posto. Segundo, e mais importante: a indústria de jogos perdeu
dezenas de milhares de postos entre 2022 e 2026 com pico em 2024, ou seja, **antes** de a
geração de narrativa existir em produto. Atribuir a perda de emprego à disrupção deste mapa
seria confundir duas causas — e seria exatamente o erro que o `DUVIDAS.md` desta skill
documenta: classificação errada de um fato correto.

### 7.2 Qual efeito assume velocidade de adoção sem precedente comparável

**e5.1 e e5.1.1 — a regulação de personalização narrativa — assumem a velocidade menos
defensável do mapa.** Eu coloquei consolidação de categoria regulatória em 2032. Precedente
comparável: a regulação de sistemas de recomendação. No Brasil, o PL 2338/2023 foi aprovado
no Senado em 10 de dezembro de 2024 e, em 2026, ainda tramita na Câmara com votação final
adiada — e ele trata de IA em geral, não de narrativa adaptativa, que ninguém propôs
regular. Pela régua desse precedente, **uma categoria regulatória nova, específica para obra
que se ajusta ao leitor, em cinco anos, não tem precedente**. Mantive o efeito no mapa porque
ele é logicamente necessário se D2 se concretizar, mas com sinal fraco e confiança baixa, e
registro aqui que o prazo é aspiracional, não estimado.

**e7.1 é o oposto: eu subestimei a velocidade e tive de corrigir.** Escrevi inicialmente 2029
para a disputa contratual da dublagem. Está errado: a partir de 31 de março, profissionais de
voz no Brasil e em outros países pararam de assinar contrato com estúdio sem cláusula de
proteção contra IA generativa, articulados internacionalmente pelo United Voice Artist, e há
projeto de lei em tramitação para proibir dublagem por IA em obra exibida comercialmente. O
efeito **já aconteceu**. Corrigi para 2027 com sinal forte, o que é quase o mesmo que dizer
que ele não é previsão. Registro a correção em vez de apagá-la, porque o erro é informativo:
eu estava olhando para o pipeline de texto e não vi que a frente de conflito já tinha se
aberto na voz.

**e4 e e4.1 não têm precedente comparável, e eu não encontrei nenhum.** Procurei um caso
histórico em que um objeto cultural tenha deixado de ser compartilhado sem deixar de ser
consumido em massa. Feed personalizado é o candidato óbvio, e não serve: um feed nunca foi
uma obra, nunca teve título, nunca teve crítica nem cânone. Edição variante de livro, texto
recensionado, tradução divergente — todos preservam um referente comum. **Marco como "não
encontrei precedente comparável"**, o que é o tratamento honesto e que a skill exige, em vez
de forçar uma analogia que soaria erudita e não sustentaria nada.

### 7.3 Qual disrupção-raiz pode simplesmente não se concretizar

**D2 é a candidata a não acontecer, e é a que mais custaria ao mapa.** Três razões concretas.
O limite de memória é real e declarado (um minuto no `Genie 3`, sessão de 60 segundos no
`Project Genie`). A adaptação mede-se hoje em benchmark de laboratório, não em produto
vendido. E o `NARRA-Gym` mostra que a personalização sensível à resistência do leitor é
justamente a dimensão em que modelos fluentes falham. É plausível que, até 2031, adaptação
por leitor exista como recurso de luxo em obras curtas e nada mais.

**Se D2 não acontecer, o mapa não desmorona — mas ele muda de assunto.** D1 e D3 se sustentam
sozinhas e sobre evidência bem melhor: produto à venda, ferramenta com 13,2 mil estrelas,
dados de plataforma, posição de regulador. Sem D2, sobra um mapa sobre **abundância e
acesso**: obra demais, em toda língua, com autoria fragmentada e um problema de curadoria.
Perde-se toda a segunda roda (e4 a e5.2.1, nove efeitos) e, com ela, a pergunta que dá
interesse intelectual ao tema — "ainda existe a obra?". O mapa continuaria útil e ficaria
menos importante.

**D1 tem uma forma de falhar que não é técnica.** Ela pode se concretizar por completo e não
importar, se o repúdio de mercado se firmar (wildcard 3). Os dados da Steam já sugerem isso:
um terço dos lançamentos, uma fatia muito menor das vendas. Uma disrupção que acontece e não
é comprada não deixa de ser uma disrupção — mas o mapa de efeitos econômicos dela vira
ficção.

**D3 é a mais sólida das três** e tem o modo de falha mais brusco: um tribunal. Ver wildcard 1.

### 7.4 Que viés entrou aqui

**Viés declarado pelo usuário:** neutro, sem preferência. Procurei cumprir por construção,
incluindo um wildcard (3) em que o mapa inteiro fracassa comercialmente.

**Viés de fonte, o mais grave deste documento.** Das oito fontes que consegui abrir, três são
de plataforma ou de indústria de jogos, duas são enciclopédicas, uma é acadêmica, uma é de
fórum de comunidade e uma é de associação de autores. **Não consegui abrir nenhuma das duas
fontes primárias sobre o lado editorial e de localização** — a reportagem da AUTOMATON WEST
sobre o caso AlphaPolis veio truncada, e a MultiLingual devolveu 403. Consequência: tudo que
este mapa afirma sobre prêmio literário, editora e mercado de tradução está apoiado em
**resumo de resultado de busca, não em leitura de fonte**, e está marcado como tal na seção
11. O mapa é, por isso, mais confiável no eixo jogo e plataforma do que no eixo livro e
localização — e o tema exige os dois.

**Viés de disponibilidade.** Busquei em inglês e em português, e o tema tem seu centro de
gravidade em japonês: novela visual, `LunaTranslator`, AlphaPolis, o mercado de galgame. Não
li nenhuma fonte em japonês. É uma lacuna estrutural, não um descuido.

**Viés do horizonte.** Onze dos treze efeitos de 3ª ordem têm prazo 2031 ou 2032, que é o
horizonte pedido mais um ano. Isso não é convergência de evidência: é o horizonte atraindo os
números. Um mapa com horizonte 2035 teria produzido 3ªs ordens em 2035 com a mesma prosa.
Trate os prazos de 3ª ordem como **ordenação relativa** — o que vem antes do quê — e não como
datas.

**Viés de seletividade na rejeição.** Rejeitei três candidatas maduras aplicando o Passo 2 com
rigor, e é possível que eu tenha sido rigoroso com elas e leniente com D2, que é a mais
interessante de escrever. Testei D2 outra vez, por escrito, e ela passa o teste 3 (falta
memória, custo e convenção). Mas registro a assimetria de zelo: uma disrupção
intelectualmente atraente recebe menos ceticismo do que uma entediante, e eu não tenho como
garantir que não caí nisso.

**Suposições adotadas por ausência de interlocutor.** Esta rodada não teve usuário para
responder à entrevista do Passo 1; as respostas vieram pré-fornecidas no pedido e estão
tabuladas na seção 2. Duas coisas eu tive de assumir sem base: que "quem projeta mídia e
interação" inclui tanto autor independente quanto estúdio, o que me levou a manter efeitos de
mercado e efeitos de ofício no mesmo mapa; e que a nota sobre o Brasil deveria ser
regulatória e trabalhista, e não de mercado — escolha minha, e a ausência de dado sobre
consumo de narrativa gerativa no Brasil é uma lacuna real deste documento.

## 8. O que a máquina errou

Registro do que deu errado durante a execução desta skill, com o motivo da desconfiança.

**1. Duas fontes primárias não abriram, e eu quase as citei como se tivessem aberto.** A
reportagem da AUTOMATON WEST sobre o caso AlphaPolis voltou com o corpo do texto substituído
por "[Content truncated due to length...]" — o modelo de extração recusou explicitamente
resumir, o que foi o comportamento correto. A MultiLingual devolveu HTTP 403, e a GameSpot
sobre o `itch.io` também. O risco aqui é específico e vale nomear: eu **já tinha** os fatos
pelos resumos de busca, e eles eram plausíveis e detalhados. A tentação não é inventar fonte;
é tratar "li o resumo da busca" como "li a fonte". As três estão marcadas como não abertas na
seção 11, e o campo `fontes` do frontmatter conta 8, não 14.

**2. Três números incompatíveis sobre a mesma coisa, e nenhum errado.** Os resumos de busca
me deram, para declaração de IA na Steam em 2026: "30,8% dos lançamentos", "33% dos novos
jogos" e "26,5% dos demos do Next Fest". Populações diferentes — lançamentos do ano, catálogo
novo, demos de um festival — apresentadas com a mesma cara de estatística. Citei no corpo do
texto **apenas** o 26,5%, que vem da única dessas páginas que eu efetivamente abri, com a
população e a metodologia declaradas (4.382 demos, dados GameDiscoverCo + SteamDB +
declaração de desenvolvedor), e mantive "aproximadamente um terço" como formulação vaga no
resumo justamente para não fingir precisão que não tenho. A tendência é robusta; os decimais
não são.

**3. Descartei uma projeção que estava a um passo de entrar como fato.** Um resumo trazia
"esperado subir a 50% até 2028". Número redondo, sem método, de página não aberta, sobre o
futuro. Não entrou, e menciono na seção 7.1 exatamente como o tipo de coisa que não deve ser
projetada.

**4. Quase promovi tecnologia madura a disrupção-raiz — o erro que o `DUVIDAS.md` desta skill
documenta.** Na primeira passagem, `Pika` e `Luma` (script-to-video por prompt) entraram como
disrupção-raiz com a justificativa "roteiro vira vídeo animado, o custo de contar cai". A
justificativa não é falsa. O que a derruba é o teste 1 aplicado por escrito: script-to-video
torna mais rápido e mais barato produzir animática — algo que já se fazia, para o mesmo
cliente, com a mesma decisão no meio. É melhoria incremental. Foi para a seção 3. É a mesma
falha do CGM registrada no `DUVIDAS.md`: **fato correto, categoria errada**, e só o teste
escrito pega.

**5. Errei um prazo em três anos por olhar para o lugar errado.** Datei a disputa contratual
da dublagem em 2029, quando ela começou em 31 de março, com paralisação de assinaturas. Eu
estava rastreando o pipeline de texto e não vi que a frente de conflito já havia se aberto na
voz. Corrigido para 2027 em e7.1, com a anomalia hierárquica que isso cria registrada na
seção 5.

**6. Tratei o wildcard sugerido pelo enunciado como wildcard, e ele já é passado.** "Um
best-seller assumido como coautoria com IA ganhar um prêmio literário ou ser barrado dele" —
aconteceu nas duas direções: prêmio revogado e adaptação cancelada na AlphaPolis em 2025,
prêmio concedido pelo IBPA em 2026 a autor transparente sobre o uso. Se eu tivesse aceitado o
enunciado como pauta em vez de como hipótese a testar, teria listado como improvável algo
documentado. Serve de regra: **o item que o briefing chama de wildcard é o primeiro a
verificar, não o último.**

**7. Um efeito que soou bem e não se sustentou.** Escrevi, e apaguei: *"a crítica literária se
profissionaliza como avaliação de gerador, com metodologia própria, até 2031"*. Soa
sofisticado. Não se sustenta: não há nenhum sinal de que instituições de crítica estejam
adquirindo competência metodológica de amostragem, e o prazo era meu horizonte com uma frase
bonita em cima. Reescrito como e4.1.1, que afirma a **necessidade** dessa competência e a
ausência dela na formação atual — afirmação verificável — em vez de prever a aquisição dela.

## 9. Três cenários para 2031

### Provável — "O dilúvio etiquetado"

É 2031. Gerar uma novela visual jogável a partir de uma frase é banal e barato, e ninguém
mais comenta. O catálogo do `itch.io` e da Steam cresceu a um ponto em que nenhuma pessoa
consegue formar uma opinião sobre a produção do ano, e a etiqueta de procedência virou
filtro de navegação usado por padrão — como filtro de preço. Estúdios contratam curadores, e
o cargo tem nome. A escrita de jogo continua existindo e mudou de unidade: contrata-se quem
escreve a bíblia de mundo, a regra de personagem e o critério de aceite, e revisa o que a
máquina devolve; quem era pago por linha de diálogo ou saiu do campo ou virou uma das duas
pontas. A localização oficial perdeu a função de abrir mercado — o público chega antes, com a
camada sobreposta instalada — e as casas de localização que sobreviveram vendem pipeline e
direção cultural. Dublagem humana é selo premium e o resto do catálogo é sintético por
padrão. A obra adaptativa por leitor existe, é curta, é vendida como novidade e ninguém
descobriu como resenhá-la, então quase ninguém resenha. A maior parte das obras publicadas no
ano não é propriedade de ninguém, e o mercado aprendeu a conviver com isso sem resolver.

### Desejável — "A procedência como serviço público"

É 2031. A abundância aconteceu, e a resposta a ela não ficou nas mãos de duas plataformas. Um
registro de proveniência de obra narrativa — mantido por consórcio, com participação de
biblioteca e de associação de autores, não só de loja — permite que qualquer obra exiba seu
rastro: o que foi gerado, o que foi selecionado por quem, o que foi editado à mão. Declarar
não é vergonha e não declarar não é crime: é informação, e o público a usa. O trabalho de
autoria se deslocou para onde está a decisão — mundo, regra, restrição, critério — e esse
trabalho é remunerado porque é **verificável**. A camada de tradução sobreposta foi
reconhecida como acessibilidade e absorvida pelas plataformas, com repasse ao titular, o que
abriu para obras de línguas pequenas um público que a economia da localização nunca
justificaria. A obra adaptativa é vendida com sua edição congelada ao lado, por convenção de
mercado, e por isso pode ser citada, ensinada e discutida.

**O que teria de acontecer para chegar lá.** Três coisas, nenhuma automática. Primeira: o
registro de proveniência ter de nascer fora da plataforma de venda, porque quem define a
taxonomia exerce poder cultural (e1.1.1) e não deveria ser o mesmo que cobra a comissão.
Segunda: alguma decisão judicial ou legislativa reconhecer a camada de tradução como acesso,
com remuneração — hoje o caminho de menor resistência é o oposto. Terceira: a convenção da
edição congelada precisa vir **do mercado, e cedo**, antes de existir catálogo grande de obra
adaptativa não citável; convenção que chega depois do acervo não alcança o acervo.

### Indesejável — "A obra que só existe para você"

É 2031. A adaptação por leitor venceu, e venceu pela métrica errada: o que se otimiza é
retenção. Cada pessoa recebe a versão que a prende, e o sistema sabe o que a prende melhor do
que ela. Não há edição congelada, porque congelar reduz engajamento. Não há resenha possível,
e por isso a crítica sumiu do circuito — não foi substituída, foi desidratada. Duas pessoas
que gostaram da mesma obra não conseguem descobrir por quê, e a conversa sobre ficção virou
troca de relato de experiência privada. O cânone é uma seção de catálogo antigo. A camada de
tradução foi criminalizada por decisão judicial e voltou à clandestinidade, então o acesso
entre línguas depende outra vez de quem decide investir — só que agora a produção é tão barata
que cada mercado se abastece do próprio ruído, e a circulação internacional de narrativa caiu
em vez de crescer. Ninguém decidiu isso.

**O sinal precoce.** Não é queda de qualidade — qualidade percebida vai **subir**, porque cada
versão é ajustada a quem a recebe. O sinal precoce é o desaparecimento do vocabulário
compartilhado: quando resenhas de uma mesma obra deixarem de descrever os mesmos eventos, e
comunidades de fã pararem de manter wiki de enredo porque não há enredo comum a registrar. O
segundo sinal, mais mensurável: uma plataforma anunciando "adaptação" como recurso e
reportando ganho de retenção como métrica principal, sem reportar nenhuma métrica de
compreensão, de satisfação posterior ou de robustez. O `NARRA-Gym` mostra que essas dimensões
podem divergir; o cenário indesejável é aquele em que só uma delas é medida em produto.

## 10. O experimento

### O que é

**"O clube de leitura de uma obra que ninguém leu igual."** Seis pessoas, uma sessão de duas
horas, nada a construir de zero.

Procedimento:

1. Escreva **uma** frase de premissa — uma só, idêntica para todos. Gere a partir dela seis
   novelas visuais jogáveis no `mangobox.ai` (ou `Summer Engine`), uma por participante, sem
   nenhuma edição humana entre as execuções. As seis obras têm a mesma origem e nenhuma tem
   o mesmo texto.
2. Cada pessoa joga a sua sozinha, por 30 minutos, sem ver a dos outros. Todas recebem o
   mesmo título e a mesma premissa na tela.
3. Reúna as seis para uma discussão de clube de leitura normal, **sem avisar que as versões
   diferem**. Grave.
4. Cronometre um número só: **em quantos minutos a conversa deixa de funcionar** — o instante
   em que o grupo percebe que não está falando da mesma coisa. Anote o que quebrou primeiro:
   nome de personagem, evento, tom, final.
5. Revele, e faça a segunda rodada de conversa: agora que sabem, do que conseguem falar? A
   hipótese é que ainda consigam falar de **premissa, tema e mecânica**, e não de nada mais.
   Teste se é verdade.
6. Braço B, opcional, mesma tarde: uma das seis pessoas joga 30 minutos de uma novela visual
   japonesa nunca publicada em português com o `LunaTranslator` por cima. Marque cada momento
   em que ela percebe a costura — e pergunte, no fim, em que língua ela diria que leu a obra.

### Que pergunta sobre o futuro ele ajuda a responder

A pergunta de 2ª ordem do tema, testada em vez de argumentada: **duas pessoas podem discutir
uma obra que leram em versões diferentes?** E, mais útil para quem projeta: **qual é a unidade
mínima que precisa ser compartilhada** para que a conversa sobre uma obra ainda exista? Se o
grupo conversar bem por vinte minutos e quebrar no nome de um personagem, a resposta é que
identidade nominal basta e o resto pode variar — o que é uma diretriz de projeto imediata e
barata. Se quebrar em três minutos, a edição congelada de e4.2 não é produto premium: é
requisito.

O braço B testa a pergunta de 3ª ordem de D3 — o que acontece com a ideia de que uma obra tem
língua de origem — na forma mais simples possível: perguntando a quem acabou de ler.

### Que tecnologia emergente ele usa, e por que a madura não serviria

Usa **geração do artefato completo** (D1) e **camada de tradução sobreposta** (D3), as duas
emergentes. Tecnologia madura não serve, e o motivo é o cerne do experimento: com `Ren'Py`,
`Twine` ou `Inform`, a variação entre versões seria **autorada** — seis ramos que eu escrevi,
enumeráveis, nomeáveis. O grupo diria "eu peguei o final B" e a conversa se reorganizaria em
torno da árvore, como acontece em jogo ramificado desde sempre. A variação precisa ser **não
autorada e não enumerável** para reproduzir a condição de D2, e só a geração produz isso. No
braço B, a legenda ou a versão localizada oficial também não serviriam: a obra tem de ser uma
que **ninguém traduziu**, porque é a ausência do tradutor que está sendo testada.

### O que faria quem testar mudar de ideia sobre o mapa

**A favor de descartar a segunda roda:** se a conversa funcionar por trinta minutos sem
ninguém notar nada, ou notar e não se importar, então e4 e e4.1 estão errados e as pessoas
toleram variação de obra muito melhor do que este mapa supõe. Nesse caso os nove efeitos da
segunda roda caem, e o mapa fica sobre abundância e acesso — o cenário da seção 7.3.

**A favor de antecipar tudo:** se a conversa quebrar em menos de cinco minutos e o grupo
ficar visivelmente incomodado, e4.2 (edição congelada como produto) deixa de ser efeito de 2ª
ordem em 2030 e passa a ser requisito de lançamento agora, e quem projeta narrativa
adaptativa precisa entregar a versão fixa no dia um.

**Contra a premissa de D1:** se as seis obras geradas forem todas ruins de um modo parecido —
se a variação for grande no detalhe e pequena na experiência —, então o problema de 2031 não é
"obra demais", é "a mesma obra muitas vezes". Isso mudaria o eixo do mapa de curadoria para
homogeneização, e e1.1 (descoberta como gargalo) daria lugar a um efeito que não está aqui:
diversidade real caindo enquanto o volume sobe.

### Nota sobre o Brasil

Rodar este experimento no Brasil tem uma vantagem e um dever. A vantagem: o braço B é mais
informativo aqui do que em país anglófono, porque a fila de localização para o português é
longa e o acervo nunca traduzido é enorme — a camada sobreposta não é conveniência, é a única
via. O dever: se o braço B envolver voz sintética, ele toca um conflito trabalhista **em
curso**, não hipotético. Profissionais de dublagem no Brasil pararam de assinar contrato sem
cláusula de proteção contra IA generativa a partir de 31 de março, articulados
internacionalmente, e há projeto de lei em tramitação para proibir dublagem por IA em obra
exibida comercialmente. O marco geral, o PL 2338/2023, foi aprovado no Senado em 10 de
dezembro de 2024, segue na Câmara em 2026 com votação final adiada, e traz obrigação de
identificar conteúdo gerado sem resolver titularidade. **Quem rodar o experimento em sala
deve declarar isso à turma:** o braço de voz é uma demonstração sobre trabalho de gente que
está em negociação agora, e tratá-lo como curiosidade técnica é a parte errada do exercício.

## 11. Fontes

**Abertas e lidas** (as oito contadas no frontmatter):

1. `https://mangobox.ai/` — sustenta a seção 3.1 e a disrupção D1: geração de novela visual
   jogável a partir de descrição, até cinco personagens, arte de retrato e cena, conversa em
   grupo, plano Pro a US$ 9/mês. **Confiabilidade:** é o próprio fornecedor. Vale como prova
   de que o produto existe, está à venda e a que preço; não vale nada como prova de que
   funciona bem.
2. `https://github.com/HIllya51/LunaTranslator` — sustenta D3 e a seção 3.1: hook de memória,
   OCR, tradução por LLM e offline, TTS, hook de emuladores, 13,2 mil estrelas, 1,1 mil
   forks, GPLv3. **Confiabilidade:** alta para o que a ferramenta faz e para a escala de
   adoção — estrela e fork são contagem, não alegação. O texto descritivo é dos próprios
   autores.
3. `https://www.llamagriffin.com/Data/SteamNextFestJune2026/part-2.html` — sustenta os números
   de declaração de IA: 26,5% de 4.382 demos em junho de 2026, 21,2% em fevereiro de 2026,
   cerca de 60% do uso em ativos visuais, escrita e diálogo na faixa baixa, código isento
   desde janeiro de 2026. **Confiabilidade:** média-alta e a melhor que encontrei: declara
   população, método e origem (GameDiscoverCo, SteamDB, declaração de desenvolvedor) e
   explicita que não há auditoria independente. Depende da autodeclaração do desenvolvedor,
   que é o viés estrutural do dado.
4. `https://arxiv.org/abs/2605.08503` — NARRA-Gym, Huang et al., 8 de maio de 2026. Sustenta
   a seção 3.2, D2 e e5.2: avaliação executável de narrativa interativa, nove geradores de
   fronteira, achado de que fluência não garante robustez nem personalização sensível à
   resistência. **Confiabilidade:** preprint sem revisão por pares confirmada; o achado é
   coerente com o conhecido sobre avaliação de LLM, e eu li o resumo, não o método.
5. `https://en.wikipedia.org/wiki/NovelAI` — sustenta a rejeição de co-escrita como
   disrupção-raiz: lançamento em 28/04/2021, beta em 15/06/2021, imagem em 03/10/2022, treino
   em Danbooru sem consentimento com repúdio público, vazamento de código em 06/10/2022,
   termos que atribuem o gerado ao usuário. **Confiabilidade:** enciclopédica, boa para data
   e fato verificável, e as datas são o que uso.
6. `https://en.wikipedia.org/wiki/Genie_(world_model)` — sustenta a seção 3.1 e o limite de
   memória em D2: Genie 1 em março de 2024 a 1 fps e 2D; Genie 2 em dezembro de 2024, 360p,
   10 a 20 segundos; Genie 3 em agosto de 2025, 720p, 24 fps, memória de um minuto; Project
   Genie a assinantes AI Ultra em 29/01/2026, sessão limitada a 60 segundos.
   **Confiabilidade:** enciclopédica, com o cuidado de que números de desempenho de modelo
   vêm do anúncio do fornecedor.
7. `https://intfiction.org/t/gen-ai-disclosure-on-itch-io/72448` — sustenta a seção 3.1 e os
   sinais fracos: política do `itch.io` (opcional para jogo, obrigatória para asset,
   etiquetas `AI Generated` e `No AI`, asset não etiquetado fora da navegação), ausência de
   etiquetagem em lote, ambiguidade de arte de capa. **Confiabilidade:** é fórum — vale como
   evidência direta do que a comunidade de ficção interativa diz, e não como descrição
   autoritativa da política; os detalhes da política batem com o que os resumos de busca
   traziam de duas outras páginas que não abriram.
8. `https://authorsguild.org/news/us-copyright-office-ai-report-part-2-what-authors-should-know/`
   — sustenta e3, e3.1 e a seção 3.1: exigência de autoria humana, material gerado não
   protegível isolado nem dentro de obra humana, prompting não gera protegibilidade ("girar a
   roleta até sair o número"), seleção e arranjo como via de proteção, dever de declarar.
   **Confiabilidade:** é parte interessada — associação de autores, com posição na disputa —,
   mas relata um documento público do U.S. Copyright Office cujo conteúdo é consistente com a
   orientação de registro de 2023. Tratar como leitura fiel de fonte primária, não como fonte
   primária.

**Consultadas apenas por resumo de resultado de busca — não abri a página.** Tudo que este
mapa afirma a partir daqui é de segunda mão, e está marcado no corpo do texto:

9. AUTOMATON WEST, sobre o caso AlphaPolis (prêmio de 2025, cancelamento da publicação e da
   adaptação, mudança de regra em 18/11/2025). **A página abriu e voltou truncada** — o
   conteúdo não estava disponível para leitura. Sustenta a seção 3.2.
10. MultiLingual, "The State of Game Localization in 2026". **HTTP 403.** Os dados de mercado
    e de emprego em localização que aparecem na seção 7.1 vêm do resumo de busca sobre esta e
    outras páginas do mesmo conjunto, e são os números de que menos tenho certeza neste
    documento.
11. GameSpot, sobre a exigência de declaração no `itch.io`. **HTTP 403.** O que afirmo sobre a
    política vem da fonte 7, que é comunidade, não plataforma.
12. Portal da Câmara dos Deputados e cobertura correlata sobre a mobilização da dublagem
    brasileira, o United Voice Artist e o projeto de lei de 2025 contra dublagem por IA.
    Sustenta e7.1 e a nota sobre o Brasil.
13. Cobertura sobre o PL 2338/2023 (aprovação no Senado em 10/12/2024, tramitação na Câmara
    em 2026, obrigação de identificar conteúdo gerado sem resolver titularidade). Sustenta a
    seção 7.2 e a nota sobre o Brasil.
14. Cobertura sobre regras de prêmio literário: IBPA sem proibição e premiação em 2026 a autor
    transparente; New Zealand Book Awards Trust exigindo ausência de material de IA no Ockham
    com dois autores desclassificados por arte de capa; alegações sobre o Commonwealth Short
    Story Prize. Sustenta a seção 3.2 e o rebaixamento do wildcard do enunciado.

**Marcado como especulação própria da skill, sem fonte:** todos os efeitos de 3ª ordem da
seção 5 sem exceção; os quatro wildcards da seção 6; os três cenários da seção 9; e a
interação entre e1.1 e e6.3 descrita na seção 5 (concorrência por atenção deixando de ser
local). Nenhuma dessas afirmações tem fonte, e nenhuma deve ser citada como se tivesse.

## 12. Anexo — o levantamento bruto

### 12.1 A entrevista do Passo 1

Rodada sem interlocutor humano. As respostas da entrevista vieram pré-fornecidas no pedido e
estão na tabela da seção 2. Itens 1 e 2 da entrevista (horizonte e recorte) foram respondidos
— 2031, quem projeta mídia e interação, global com nota sobre o Brasil —, o que satisfaz a
condição de saída da entrevista sem precisar invocar a cláusula de "pular a entrevista".
Itens 3, 4 e 5 vieram como: descarte apenas do que já é comum em produto de massa; viés
neutro; nenhuma suspeita de disrupção, levantar do zero. Suposições que **não** vinham no
pedido e eu tive de adotar estão declaradas ao fim da seção 7.4.

### 12.2 Buscas realizadas, e o que cada uma deu

| Busca | Resultado |
|---|---|
| geração de novela visual jogável por prompt, 2026 | achou Mangobox, Summer Engine, Chatforce, LlamaGen, Figma. Serviu, e revelou que a categoria já tem concorrência e preço — o que é mais informativo que qualquer uma das ferramentas isolada |
| declaração de IA na Steam, percentuais 2026 | achou três números incompatíveis; ver seção 8, item 2 |
| localização de jogo e IA, emprego, 2026 | achou material relevante e a fonte central (MultiLingual) não abriu; a melhor fonte do tema ficou fora |
| prêmio literário e obra com IA, regra, 2025-2026 | achou o caso AlphaPolis, Ockham, IBPA, Commonwealth. Derrubou o wildcard do enunciado |
| arXiv, narrativa interativa gerativa e personalização | achou NARRA-Gym, "Guiding Generative Storytelling with Knowledge Graphs", "Universal Narrative Model", survey de LLM para geração de história na ACL. Abri só o primeiro |
| U.S. Copyright Office, autoria humana | achou o relatório Parte 2 e cobertura de escritório de advocacia; abri a leitura da Authors Guild |
| world model, mundo jogável gerado em tempo real | achou Genie 3 e Project Genie, com o dado de memória que virou o argumento central sobre o que falta em D2 |
| PL 2338, direito autoral, obra gerada, Brasil | achou o estado de tramitação; suficiente para a nota sobre o Brasil |
| dublagem brasileira e IA, 2026 | achou a mobilização, o United Voice Artist e o PL de 2025. **Corrigiu um prazo meu em três anos** |
| itch.io, política de IA | achou a política e o fórum de ficção interativa; a página da plataforma e a do GameSpot não abriram |

**Buscas que não fiz e deveria ter feito:** nada em japonês, o que é a lacuna estrutural
registrada na seção 7.4. Nada sobre consumo de narrativa gerativa no Brasil — procurei
regulação e trabalho, não público, e por isso a nota sobre o Brasil é de política e ofício, e
não de mercado. Nada sobre custo de inferência por sessão longa, que é a variável de que
D2 depende inteiramente e sobre a qual este mapa não tem um único número.

### 12.3 Disrupções-raiz candidatas, com o resultado dos três testes

| Candidata | T1 — o que rompe | T2 — por que agora | T3 — o que falta | Veredito |
|---|---|---|---|---|
| Artefato narrativo completo por intenção curta | quem pode publicar | pipeline multimodal fechado, formas de saída já estabilizadas, preço a US$ 9/mês | coerência longa, distribuição, norma | **aceita (D1)** |
| Obra que se reescreve por leitor | a obra como objeto comum | personalização já é objeto de benchmark; geração em tempo real demonstrada | memória, custo por leitor, convenção de citação | **aceita (D2)** |
| Camada de tradução sobreposta pelo público | quem decide a língua da obra | hook e OCR maduros, LLM barato, TTS offline | legalidade, qualidade literária, reconhecimento | **aceita (D3)** |
| Script-to-video por prompt (Pika, Luma) | nada — acelera animática | — | — | **rejeitada: incremental** |
| Voz sintética para diálogo (ChatTTS, Bark) | a economia da dublagem | idem | contrato e norma, não capacidade | **rejeitada como raiz; virou e7 e e7.1** |
| Co-escrita com LLM | — | **falha:** existe desde 2021 (NovelAI) | — | **rejeitada: madura** |
| Engines e ferramentas clássicas (Ren'Py, Twine, Inform, Yarn Spinner, Arrow, Dialogic, geradores de mapa) | — | — | **falha:** nada, uso comum | **rejeitadas: maduras. Contexto, seção 3.1** |

### 12.4 Efeitos cortados ou reescritos, com o motivo

1. *"O mercado de trabalho de escritor de jogo desaparece até 2029"* — **cortado.**
   Extrapolação linear; o caso comparável (localização) mostra recomposição, não eliminação; e
   a perda de postos na indústria de jogos entre 2022 e 2026 tem causa anterior à geração de
   narrativa. Substituído por e1.2.
2. *"A crítica literária se profissionaliza como avaliação de gerador até 2031"* —
   **reescrito** como e4.1.1, que afirma a necessidade e a ausência da competência, em vez de
   prever a aquisição dela. Motivo: nenhum sinal, e o prazo era o horizonte com uma frase
   bonita em cima.
3. *"A tradução sobreposta acaba com a indústria de localização"* — **reescrito** como e6.1 e
   e6.1.1, que falam de perda de função específica (abrir mercado) e recomposição em duas
   pontas. O mercado de serviços de localização cresceu em valor no período em que os
   profissionais perderam renda; "acabar" é a palavra errada.
4. *"Prêmio literário proíbe IA generalizadamente"* — **cortado.** Falso pelos fatos: as
   regras divergem entre instituições, e há premiação a autor transparente em 2026 no mesmo
   ano em que outra instituição desclassifica por arte de capa. A divergência é o fenômeno; a
   convergência seria a previsão errada.
5. *"Efeitos de 4ª ordem sobre canonicidade e memória cultural"* — **cortado por regra de
   formato.** A skill para na 3ª ordem, sem exceção. A cadeia existia e ficava fina: "se não
   há obra comum, não há cânone; se não há cânone, não há memória cultural compartilhada" —
   registro aqui porque é a derivação mais interessante que este exercício produziu e que o
   formato não permite afirmar.
6. Prazo de e7.1 movido de 2029 para 2027 — **corrigido**, ver seção 8, item 5.

### 12.5 Anomalias de método que não resolvi

**A hierarquia de sinal está invertida em um ponto.** e7.1 (2ª ordem) tem sinal forte e prazo
2027; e7 (1ª ordem) tem sinal médio e prazo 2028. Logicamente impossível dentro da roda —
efeito de 2ª ordem não pode preceder o de 1ª. A causa é que e7.1 tem uma **segunda causa fora
deste mapa**: a mobilização da dublagem responde à voz sintética em geral, não à camada de
tradução sobreposta. A roda dos futuros não tem notação para efeito com causa externa, e eu
preferi registrar a anomalia a falsear a data ou remover o efeito.

**Onze de treze efeitos de 3ª ordem em 2031-2032.** Ver seção 7.4. Prazos de 3ª ordem devem
ser lidos como ordenação relativa.

**A segunda roda (D2) tem nove efeitos apoiados em uma fonte.** Toda a segunda roda depende,
para evidência, do `NARRA-Gym` mais o limite de memória do `Genie`. É a parte mais extensa e
mais bem escrita deste mapa, e a mais mal sustentada. A correlação entre essas duas coisas não
é coincidência, e é o achado mais desconfortável do exercício: **a facilidade de escrever um
efeito não guarda nenhuma relação com a evidência que ele tem.** Foi para isso que o Passo 6
existiu.
