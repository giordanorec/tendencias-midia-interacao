---
tema: Narrativa gerativa e coautoria
slug: narrativa-gerativa-e-coautoria
autor_login: jgpt
zona_de_interesse: Simulação e mundos
data: 2026-09-18
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 8
efeitos_ordem_2: 16
efeitos_ordem_3: 16
tecnologias_citadas: [modelos multimodais texto-imagem-áudio-vídeo, MangoBox, SEELE, Summer Engine, Chatforce, Project Genie / Genie 3, Ren'Py, Inform 7, Twine, YarnSpinner, Dialogic, NovelAI, AI Dungeon, LunaTranslator, hooking de texto em processo, OCR offline, tradução por LLM, janelas de contexto de 128k tokens, geração de rubrica por usuário (PREFINE), síntese de voz neural, declaração de proveniência em loja]
fontes: 11
confianca: media
experimento: Uma novela visual gerada com a mesma semente e personalizada para cada aluno, seguida de uma discussão em sala que mede quanto do esqueleto narrativo é de fato compartilhado, aplicando o método de mascaramento de marcadores culturais de Bhatt et al. (2026).
skill_usada: futurizacao-jgpt
publico_ok: false
---

## 1. Resumo

Contar uma história deixou de custar uma equipe. Uma frase descrevendo uma situação já devolve uma
novela visual jogável com elenco, arte, cenas e diálogo, por nove dólares mensais; um prompt já
devolve um mundo navegável a 720p e 24 quadros por segundo, ainda que por sessenta segundos. Este
mapa aceita três limiares como raízes de disrupção: o colapso do custo de produzir o artefato
narrativo inteiro, a obra que se adapta a cada leitor no momento da leitura, e a camada de tradução
sobreposta que desacopla uma obra da língua em que foi escrita. Nenhum dos três é diálogo gerado —
isso é de 2019 e já foi. O que muda é o estatuto da obra: se cada leitor recebe uma variante, some o
referente comum da conversa pública; se qualquer um publica, a escassez migra do texto para a prova
de que um humano escreveu; se a tradução acontece no cliente, a obra não tem mais língua de origem,
tem configuração de leitor. Os sinais já são mensuráveis — 26,5% das demos da Steam Next Fest de
junho de 2026 declararam conteúdo gerado, três histórias premiadas foram acusadas de autoria de
máquina em maio de 2026, e o Supremo americano fechou a porta da autoria de máquina em março de
2026. O mapa projeta 40 efeitos até 2031 e aposta que a coautoria vence não por qualidade, mas por
ser o único regime em que a obra ainda tem dono.

## 2. O tema

Narrativa gerativa é a história como coisa gerada: não o personagem que improvisa dentro de um mundo
com regras (isso é o tema 7), nem o vídeo como mídia (tema 12), nem o mundo montado por regras
procedurais (tema 14) — mas o artefato narrativo inteiro, do argumento ao elenco à arte à fala,
produzido a partir de uma intenção curta. Coautoria é o regime de trabalho que daí decorre: humano e
máquina escrevendo a mesma coisa, sem que se saiba, olhando o resultado, quem escreveu o quê.

Onde isso encosta em mídia e interação: no ponto em que a unidade de autoria deixa de ser o texto e
passa a ser a instrução, a restrição e a semente. Quem escreve para um sistema gerativo não escreve
falas — escreve quem o personagem é, o que ele nunca pode dizer, que escolhas o leitor pode fazer, e
depois assiste o artefato se montar diante de um público que ele não pode antecipar. É a mesma
mudança de ofício que a animação procedural impôs ao desenho quadro a quadro, com dois agravantes:
aqui o artefato é diferente a cada execução, e aqui a lei ainda não decidiu de quem ele é.

Por que isso merece um mapa de futuro e não um estado da arte. Um estado da arte listaria
ferramentas — e a lista é grande e envelhece em três meses. O que não está resolvido, e é o objeto do
mapa, é o conjunto de consequências institucionais de o custo de contar cair perto de zero: o que
acontece com a curadoria quando publicar é grátis; o que acontece com a crítica quando não há duas
pessoas lendo o mesmo livro; o que acontece com a localização como indústria quando a tradução
acontece na máquina do leitor sem que ninguém a tenha encomendado; e o que acontece com o prêmio
literário quando ele não tem como verificar aquilo que proíbe.

A linha de corte é a régua da disciplina: o que já é comum em produto de massa fica de fora. Engine
de novela visual (Ren'Py, Monogatari), ferramenta de diálogo ramificado (YarnSpinner, Dialogic,
Inform 7, Twine), editor de mapa de fantasia e tradução automática genérica são maduros — são piso,
não disrupção. Diálogo gerado por modelo de linguagem em ficção interativa também já não é raiz:
AI Dungeon fez isso em 2019 e tinha 1,5 milhão de jogadores em junho de 2020 [7]. O emergente é a
geração do artefato **inteiro** e o que a coautoria faz com a ideia de obra.

## 3. Onde isso está hoje

**O que existe e funciona.** A geração de uma novela visual jogável a partir de uma frase é produto
pago, não pesquisa. O MangoBox recebe um texto curto descrevendo premissa, personagens e cenário —
o exemplo da própria página é "conversando com meu amigo num dia de chuva num café" — e devolve
retratos de personagem, arte de cena em estilos variados (anime, cyberpunk, realista), cena de
abertura e diálogo com até cinco personagens, jogável "em minutos", por US$ 9 ao mês no plano Pro
[1]. A varredura de mercado mostra pelo menos mais quatro concorrentes diretos no mesmo formato
(SEELE, Summer Engine, Chatforce, e um fluxo equivalente dentro do Figma) [2] — e aqui vale o
cuidado de diagnóstico: quatro páginas de produto anunciando o mesmo fluxo é cobertura de
demonstração, não evidência de adoção.

A evidência de adoção real vem de outro lugar: da loja. Na Steam Next Fest de junho de 2026,
1.163 de 4.382 demos registradas declararam conteúdo gerado por IA — 26,5%, contra 21,2% em
fevereiro de 2026, 17% em outubro de 2025 e cerca de 14% em outubro de 2024 [3]. Cerca de 60%
dessas declarações são de ativo visual; o restante se reparte entre áudio, tradução e texto. Assistência
de código deixou de exigir declaração na revisão de política de janeiro de 2026 [3]. Isto é rampa de
adoção medida em população inteira, não em amostra de entusiastas.

No limite superior de capacidade, o Google DeepMind abriu em 29 de janeiro de 2026 o Project Genie,
site que dá a assinantes do plano Ultra acesso ao Genie 3: mundos interativos gerados a 720p e 24
quadros por segundo, navegáveis com WASD, limitados a 60 segundos de exploração por questão de custo
computacional [4]. O modelo recusa nudez e material protegido, e os primeiros avaliadores relataram
que ele reproduzia mundos da Nintendo e falhava com personagens da Disney [4]. É demonstração, não
produto — mas é a demonstração de que "mundo jogável a partir de prompt" saiu do papel.

Do lado do consumo, a evidência mais dura é de escala: uma análise de mais de 500 mil conversas
anonimizadas do ChatGPT em inglês encontrou que **mais de um terço** envolve alguma forma de geração
de ficção — história original, roleplay, fanfiction e erótica — fortemente concentrada em usuários
intensivos [5]. Os autores nomeiam o fenômeno de "leitor-escritor solipsista": a pessoa gera e
consome ficção num laço fechado com a máquina, sem autor humano do outro lado e sem leitor humano
depois. Isso não é uma ferramenta de produção; é um modo de consumo que já existe em massa.

E do lado da tradução sobreposta, o LunaTranslator: captura o texto de jogos por *hook* de processo
("compatível com quase todas as novelas visuais populares e de nicho") ou por OCR embutido, inclusive
em emuladores de NS/PSP/PSV/PS2, e devolve tradução por praticamente qualquer motor, incluindo
modelos de linguagem; GPLv3, 13,2 mil estrelas, 1,1 mil forks, 4.963 commits [6]. Um projeto pequeno
que faz uma coisa enorme: obra japonesa consumida em outra língua sem que ninguém a tenha traduzido.

**O que existe e não funciona.** A personalização narrativa promete adaptação cultural e entrega
troca de etiquetas. Bhatt, Vijay, Milbauer e Diaz (CMU, 12/06/2026) mediram isto em cinco modelos:
apenas 9% a 17% do vocabulário responde pela variação entre nacionalidades, e mascarar esse
subconjunto derruba um classificador de nacionalidade ao nível do acaso; removidos os marcadores, a
similaridade entre grupos sobe de 11,5% a 23,3% (LCS) e de 14% a 66,7% (Jaccard) [8]. A conclusão é
"localização templatizada": marcadores culturais inseridos em esqueletos narrativos culturalmente
agnósticos. Dezenove países — sobretudo na África e na Ásia Ocidental, com línguas de menor recurso —
receberam marcadores em média ofensivos [8]. Isto é um limite duro e medido da promessa "uma história
para cada leitor".

Também não funciona a promessa de que a assistência preserva a autoria. Zhang, Bu e Dhillon
(15/01/2026), com 176 participantes, mediram queda de 0,85 a 1,0 ponto numa escala de 7 no senso
psicológico de propriedade sobre o texto quando há assistência de IA — com carga cognitiva menor e
qualidade comparável [9]. Personificação do assistente não corrigiu; personalização de estilo a
partir do trabalho anterior do autor recuperou cerca de 0,43 ponto e aumentou em ~5 pontos
percentuais a incorporação do texto da máquina [9]. Ou seja: o caminho conhecido para devolver
autoria ao humano é o mesmo que aumenta quanto de máquina entra no texto.

E não funciona o regime de proibição. Em maio de 2026, três histórias vencedoras do Commonwealth
Short Story Prize foram acusadas de autoria parcial de máquina; a Commonwealth Foundation revisou
rascunhos, documentos com carimbo de tempo e anotações, e declarou não ter encontrado evidência [10].
Na primavera de 2026 a Hachette cancelou o romance de terror *Shy Girl*, de Mia Ballard, por rumores
de uso de IA — a autora alegou que quem usou foi um editor que ela contratou [10]. No verão, as
agências Europa Content e Hodgman Literary retiraram de venda o manuscrito de Jerry Falade, que já
tinha acordos milionários nos EUA e no Reino Unido, por não ser possível saber quem escreveu [10].
Três casos, nenhum veredito técnico: a acusação produz dano sem que a verificação seja possível.

**Quem está construindo isso agora.** Do lado de produto: MangoBox, SEELE, Summer Engine, Chatforce,
Figma [1][2]; NovelAI no nicho de escrita assistida com contexto longo; Google DeepMind no limite de
capacidade [4]. Do lado aberto e comunitário: LunaTranslator e a linhagem de engines que a geração
está absorvendo — Ren'Py, Monogatari, Inform, Twine, YarnSpinner, Dialogic [6]. Do lado acadêmico:
CMU (localização cultural), Michigan (padrões de preservação de autoria), e o eixo Allen
Institute/Washington na caracterização do consumo [5][8][9]. Do lado institucional, que é onde a
disputa está mais quente: o Copyright Office americano e os tribunais — em 2 de março de 2026 a
Suprema Corte negou certiorari em *Thaler v. Perlmutter* (nº 25-449), deixando de pé a exigência de
autoria humana; obra inteiramente autônoma não se registra, e obra com IA se registra desde que o
requerente declare o que é gerado e explique a contribuição humana [11]. E no Brasil, o PL 2338/2023:
aprovado no Senado em 10/12/2024, em tramitação na Câmara, com o capítulo de direitos autorais sob
risco de exclusão integral no substitutivo — o que levou a ABDA e mais de 50 entidades a assinarem
carta aberta em 15 de maio de 2026 [12].

*Nota de verificação:* os números da Steam vêm do relatório da Llama & Griffin sobre a Next Fest de
junho de 2026, aberto e lido [3]. Uma matéria da PC Gamer que projeta mais de 50% de declarações até
2027-2028 apareceu na busca, mas o conteúdo veio truncado e **não foi verificado** — a projeção não é
usada como base de nenhum efeito deste mapa. O mesmo vale para a edição de junho de 2026 da
MultiLingual sobre o estado da localização, que respondeu HTTP 403: os números de mercado de
localização que circularam na busca (US$ 2,55 bi em 2026; 45 mil empregos perdidos entre 2022 e 2026)
**não foram verificados** e não sustentam nenhum efeito aqui.

## 4. As disrupções-raiz

Três candidatas passaram no teste "o que isso rompe, e por que agora e não há cinco anos".

### D1 — O artefato narrativo inteiro gerado a partir de uma intenção curta

**O que rompe.** A restrição removida é de mão de obra e de composição. Até aqui, produzir uma novela
visual exigia somar competências que raramente moram na mesma pessoa: roteiro, arte de personagem,
arte de fundo, programação de ramificação, som. A geração multimodal num pipeline só dissolve a
soma — a pessoa que tem a ideia entrega o artefato jogável sem contratar ninguém. Isso não torna a
produção mais barata dentro do mesmo jogo; muda quem pode jogar.

**Por que agora.** O limiar é datável e tem preço: US$ 9 por mês para gerar elenco, arte, cenas e
diálogo jogáveis "em minutos" [1]. Há cinco anos, o estado da arte equivalente era o AI Dungeon —
texto puro, sem arte, sem elenco visual, sem som [7]. O que fechou o ciclo foi a passagem de modelos
por modalidade para modelos que encadeiam texto → imagem → som no mesmo fluxo de produto. E a
evidência de que isso saiu do laboratório está na loja, não no marketing: a fração de demos com
declaração de conteúdo gerado subiu de ~14% (out/2024) para 26,5% (jun/2026), com salto de cinco
pontos numa única edição consecutiva medida com a mesma metodologia [3].

**O que ainda falta.** Falta qualidade sustentada em obra longa — os exemplos públicos são curtos, e
o Genie 3 corta em 60 segundos por custo [4]. Falta consistência de personagem e de arte ao longo de
horas. E falta a resolução jurídica: pelo regime americano hoje, o que a máquina gerou sozinho não é
de ninguém [11], o que torna o artefato gerado difícil de licenciar como produto.

### D2 — A obra adaptada em tempo de leitura

**O que rompe.** A restrição removida é de fixidez. Uma obra, desde que existe a ideia de obra, é a
mesma coisa para todo mundo — é isso que permite resenha, crítica, cânone e conversa. Quando o texto
se reescreve segundo o leitor no momento da leitura, o objeto comum desaparece, e todas as
instituições construídas sobre ele (crítica, comunidade, sala de aula, prêmio) ficam sem referente.

**Por que agora.** Dois limiares se somaram. O de contexto: janelas da ordem de 128 mil tokens
permitem manter coerência de personagem e de trama ao longo de uma obra inteira, coisa que em 2021
não existia. E o de custo marginal: gerar uma variante por leitor deixou de ter custo de produção —
o custo é de inferência, e a inferência é o mesmo gasto que já se faz para gerar a obra uma vez. A
consequência é que "uma versão por pessoa" deixa de ser uma extravagância e vira o comportamento
padrão de qualquer sistema que já esteja gerando.

**O que ainda falta.** Falta a personalização ser funda. A medição de Bhatt et al. mostra que hoje ela
é rasa e templatizada: 9% a 17% do vocabulário carrega a diferença, e o esqueleto narrativo é o mesmo
[8]. Esta é a raiz de menor confiança das três, e a seção 7 cobra o preço disso.

### D3 — A tradução sobreposta em tempo real desacopla a obra de sua língua

**O que rompe.** A restrição removida é de intermediação. A obra em língua estrangeira sempre chegou
ao leitor por alguém: um tradutor, um contrato, uma editora, um distribuidor local. A camada
sobreposta elimina os quatro. O leitor instala um programa, o programa lê o texto na tela — por gancho
no processo ou por OCR — e devolve a obra em sua língua, sem que o autor saiba, sem que exista
contrato, e sem que a tradução seja um objeto que alguém possa revisar ou responsabilizar [6].

**Por que agora.** Tradução automática de novela visual existe desde os anos 2010 e era ilegível: sem
contexto de personagem, sem consistência de tratamento, sem pronome estável. O limiar é qualitativo e
recente — tradução por modelo de linguagem com contexto suficiente para manter voz de personagem
torna a leitura **jogável**, não apenas decifrável. É a diferença entre ler um erro e ler uma obra.
E o vetor já é infraestrutura comunitária consolidada, não protótipo: GPLv3, 13,2 mil estrelas,
4.963 commits, com suporte a emuladores de quatro consoles [6].

**O que ainda falta.** Falta a camada ser boa em obras de linguagem difícil — trocadilho, dialeto,
registro. Falta resolver o que a camada é juridicamente: obra derivada não autorizada, ferramenta de
acessibilidade, ou nenhum dos dois. E falta o outro lado do desacoplamento: a tradução sobreposta
funciona hoje para entrar num idioma dominante; o teste real é o mercado brasileiro consumir obra
tailandesa sem passar pelo inglês.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O artefato narrativo inteiro gerado a partir de uma intenção curta
    efeitos:
      - id: e1
        ordem: 1
        efeito: "O custo marginal de publicar uma peça narrativa interativa completa cai ao preço de uma assinatura mensal, e o volume de obras publicadas cresce mais rápido do que qualquer curadoria humana consegue acompanhar."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "Lojas e plataformas passam a exigir declaração de proveniência por componente (arte, texto, voz, tradução) e a usar essa declaração como eixo de filtro e de ranqueamento, não apenas de rótulo."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "A ausência de geração vira diferencial comercial auditado, com selo de obra feita à mão, e a escassez muda de lado — o caro passa a ser o humano, não o artefato."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "O ofício de escrever para narrativa interativa migra de produzir falas para especificar restrições, personagens e limites, e a contratação se desloca para o topo do pipeline."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Surge uma função com responsabilidade contratual pelo espaço de possibilidades da obra — quem responde por aquilo que o sistema pode dizer —, análoga à figura do editor responsável na imprensa."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "O protótipo jogável substitui o documento de design como unidade de proposta: propõe-se uma obra mostrando-a funcionando, não descrevendo-a."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "O ciclo de validação de conceito encurta para horas, e o teste com público passa a acontecer antes de qualquer decisão de produção ou de financiamento."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Estúdios passam a publicar o protótipo como produto e a decidir a produção completa pelo comportamento medido do público, invertendo a ordem histórica entre financiar e lançar."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "O ensino de narrativa troca o exercício de escrever um roteiro pelo de escrever um sistema que gera roteiros, e a avaliação passa a incidir sobre a restrição em vez do texto entregue."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "Ler e criticar um espaço gerativo — e não uma obra acabada — vira competência de alfabetização midiática cobrada fora da área de jogos, inclusive em jornalismo e educação."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "A autoria humana deixa de ser presumida e passa a ser documentada: registro de direito autoral, prêmio, editora e contrato exigem rastro verificável do processo de escrita."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "Ferramentas de escrita gravam proveniência no ponto de decisão — qual trecho veio de quem, quando, a partir de qual sugestão — e esse registro vira artefato entregue junto com o manuscrito."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "O rastro de processo vira ele próprio objeto de disputa e de falsificação, e aparece um mercado de serviços que fabrica histórico de escrita plausível sob encomenda."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "A acusação de uso de IA produz dano reputacional e financeiro independentemente de veredito, e o custo da dúvida recai inteiramente sobre quem é acusado."
            sinal: medio
            prazo: 2027
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "Prêmios e editoras abandonam a proibição, que é inverificável, e adotam declaração positiva obrigatória com categorias separadas para obra assistida e obra não assistida."
                sinal: fraco
                prazo: 2030
                confianca: baixa
  - disrupcao: A obra adaptada em tempo de leitura
    efeitos:
      - id: e4
        ordem: 1
        efeito: "A obra deixa de ter uma versão canônica: duas pessoas consomem artefatos diferentes sob o mesmo título e o mesmo preço."
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "A conversa pública sobre obras — resenha, crítica, comunidade, meme — perde o referente comum e migra do texto para o sistema que o gerou ou para a semente que o originou."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Obras passam a publicar deliberadamente uma versão canônica declarada ao lado das variantes, apenas para que exista algo em comum sobre o que discutir em público."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "A personalização se revela rasa em escala: o sistema troca marcadores de superfície mantendo o mesmo esqueleto narrativo, e a promessa de variedade convive com homogeneização mensurável."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "Uma métrica pública de diversidade narrativa entra nas fichas de produto, e quanto o sistema de fato varia passa a ser critério de compra como hoje é taxa de quadros."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "Gerar e consumir a própria ficção num laço fechado com a máquina consolida-se como modo de consumo de massa, e não como nicho de entusiastas."
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "A métrica de sucesso de uma obra deixa de ser cópias vendidas ou jogadores alcançados e passa a ser tempo de sessão e taxa de retorno, aproximando a economia da narrativa da economia do companheiro digital."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Regulação escrita para chatbot de companhia alcança obras narrativas que mantêm relação entre sessões, e parte do catálogo precisa escolher entre ter memória e manter a classificação indicativa."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "O senso de autoria de quem escreve com assistência cai mesmo quando o resultado é bom, e as ferramentas passam a ser projetadas explicitamente para devolver propriedade psicológica ao humano."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "Quanto de você sobrou no texto vira um ajuste de produto exposto ao usuário, calibrado como hoje se calibra dificuldade, e o mesmo controle é usado para inflar a sensação de autoria sem aumentá-la de fato."
                sinal: fraco
                prazo: 2030
                confianca: baixa
  - disrupcao: A tradução sobreposta em tempo real desacopla a obra de sua língua
    efeitos:
      - id: e6
        ordem: 1
        efeito: "Obras nunca localizadas passam a ser consumidas em volume fora de sua língua, sem autorização, sem contrato e sem o intermediário que historicamente fazia essa passagem."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "A localização profissional se parte em duas: encolhe a camada de volume, que produzia a primeira versão, e cresce a camada de adaptação cultural, direção de voz e conformidade regulatória."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "O mercado formal de localização deixa de precificar por volume de palavras e passa a precificar responsabilidade — quem assina aquilo que a obra diz naquele país."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "A língua de origem deixa de ser um atributo da obra e vira uma configuração do leitor, e catálogos param de organizar acervo por idioma."
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "Obras passam a ser escritas já prevendo a leitura por máquina — evitando trocadilho, dialeto e ambiguidade —, e a prosa do mercado global fica mais lisa e mais traduzível."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: "A camada sobreposta — tradução, comentário e acessibilidade rodando por cima de obra alheia sem permissão — vira um gênero de software estabelecido e um problema jurídico em aberto."
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "Estúdios respondem embutindo a camada oficialmente, gerando tradução, dublagem e acessibilidade no cliente, para não perder o controle sobre o que o público lê e ouve."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "O que a obra diz passa a variar por pessoa sem que o estúdio tenha revisado cada variante, e a responsabilidade editorial por fala não revisada vira cláusula explícita de contrato e de seguro."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: "A mesma camada é usada para reescrever obra alheia em tempo real — suavizar, censurar, endurecer —, e a obra recebida passa a depender do filtro instalado na máquina de quem lê."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: "Abre-se disputa sobre integridade da obra no ponto de consumo, aplicando direito moral não a quem edita o original, mas a quem edita a exibição."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: "No Brasil, a indefinição sobre remuneração de obra usada em treino mantém o custo do insumo criativo em zero e acelera a adoção local antes de qualquer contrapartida aos autores."
        sinal: medio
        prazo: 2027
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "A produção nacional de narrativa gerada cresce por custo enquanto o repertório de treino segue majoritariamente anglófono, e as obras saem culturalmente marcadas por fora e templatizadas por dentro."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: "O financiamento público de cultura passa a exigir corpus e proveniência declarados como critério de habilitação, e feito com dado brasileiro vira categoria de fomento."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: "Entidades de autoria passam a negociar licenciamento coletivo de catálogo para treino na ausência de lei, replicando o arranjo de gestão coletiva consolidado na música."
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: "O catálogo licenciado para treino vira ativo negociado por si, e editoras passam a comprar direito de treino separado do direito de publicação, com preço próprio."
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

**O que o bloco não diz sozinho.** Três coisas.

A primeira é que as três raízes não são independentes — elas se alimentam pela mesma via. O que torna
a obra barata (D1) é o que torna barata a variante por leitor (D2), e é a mesma inferência que roda a
tradução no cliente (D3). Se o custo de inferência subir de forma relevante, as três subárvores
desaceleram juntas, e não uma de cada vez. Isso é uma fragilidade estrutural do mapa, não uma
redundância.

A segunda é que a coluna `prazo` marca quando o efeito se torna **visível em população**, não quando
o primeiro caso aparece. Vários já têm um primeiro caso: e3.2 (dano reputacional sem veredito) tem
três casos datados de 2026 [10]; e1.1 (declaração como eixo de plataforma) já é política da Steam
desde janeiro de 2026 [3]. O prazo de 2027 nesses casos é a data em que deixa de ser notícia e passa
a ser rotina.

A terceira é que a sequência e3 → e3.1 → e3.1.1 descreve uma corrida armamentista, não um progresso.
Cada camada de verificação de autoria cria a camada seguinte de falsificação dela. Não há, no
horizonte de 2031, um estado final em que a autoria seja verificável — há apenas estados
sucessivos de custo de fraude. Um mapa que projetasse "em 2031 a proveniência estará resolvida"
estaria errando o tipo do problema.

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — o leitor-escritor solipsista.** Mais de um terço das conversas analisadas envolve
geração de ficção, concentrada em usuários intensivos [5]. É um sinal fraco pelo enquadramento: essa
atividade não aparece em nenhuma estatística de mercado de mídia, porque não gera obra publicada,
nem venda, nem público. É consumo de narrativa que a indústria da narrativa não enxerga.

**Sinal fraco 2 — o emulador.** O LunaTranslator traduz texto de emuladores de NS, PSP, PSV e PS2 [6].
Isso significa que a camada sobreposta alcança catálogo antigo, fora de circulação e sem detentor
ativo. A tradução instantânea não abre só obra estrangeira contemporânea: abre acervo morto.

**Sinal fraco 3 — a assinatura.** O Project Genie é acessível a assinantes do plano mais caro, por 60
segundos por mundo [4]. Isso é exatamente o padrão de racionamento por custo que antecede queda de
preço — e é o mesmo padrão que, historicamente, também antecedeu produtos que nunca saíram do
laboratório. Serve como sinal, não como prazo.

**Candidatas emergentes rejeitadas como raiz (Etapa 2).** Três foram levantadas e não passaram:

- *Diálogo de personagem gerado por modelo de linguagem em ficção interativa.* Rejeitada por já ter
  rompido: 1,5 milhão de jogadores em junho de 2020 [7]. Não é emergente nem disruptivo hoje; é
  histórico. Passou no teste de maturidade pela porta oposta — já achatou.
- *Mundo jogável gerado por prompt (Genie 3).* Emergente, não raiz: 60 segundos e 720p não forçaram
  nenhuma mudança estrutural em quem produz ou consome narrativa [4]. Fica no radar; se o limite de
  duração cair, vira candidata a raiz num mapa de 2028.
- *Síntese de voz gerativa para diálogo (ChatTTS, Bark).* Rejeitada como raiz por ser componente, não
  limiar: ela barateia uma etapa dentro do mesmo jogo, e a declaração de áudio já aparece como
  categoria minoritária nas declarações da Steam [3]. Entra como insumo de D1, não como raiz própria.

**Wildcard 1 — a obra sem autor que vira patrimônio.** Baixa probabilidade, alto impacto: uma obra
narrativa gerada, cuja autoria humana seja insuficiente para registro [11], alcança relevância
cultural ampla e cai em domínio público desde o nascimento. Uma peça central da cultura que ninguém
pode licenciar, adaptar com exclusividade, nem impedir que seja adaptada. Todo o arranjo de
adaptação, sequência e franquia — que é como a indústria de mídia captura valor de narrativa — não
tem onde se prender.

**Wildcard 2 — a absolvição que não resolve.** Uma acusação pública de autoria de máquina contra uma
obra premiada é investigada a fundo, a autora é inocentada com rascunhos e carimbos de tempo [10], e
a absolvição não devolve o contrato nem a reputação. O efeito prático: autores passam a gravar o
processo de escrita por padrão, de forma defensiva, e a escrita passa a ser uma atividade vigiada por
quem a pratica — uma mudança de cultura de ofício provocada não pela tecnologia, mas pela
impossibilidade de provar a ausência dela.

**Wildcard 3 — o desacoplamento invertido.** Uma obra brasileira alcança público grande no Japão ou
na Coreia sem ter sido licenciada, traduzida ou distribuída ali, apenas por camada sobreposta no
cliente. Nenhuma receita chega ao autor, e a obra passa a existir num mercado onde ela juridicamente
não está. Baixa probabilidade a curto prazo — a camada hoje é mais forte para entrar em idioma
dominante do que para sair dele —, impacto alto sobre a ideia de que um mercado editorial tem
fronteira.

## 7. Contra o próprio mapa

**Extrapolação linear.** O efeito e1 é o mais suspeito: "o volume cresce mais rápido que a curadoria"
é o presente, só que mais. A curva de declarações da Steam (14% → 17% → 21% → 26,5%) [3] é uma rampa
existente, e projetar sua continuação não é foresight, é régua. Mantive `confianca: alta` porque o
efeito é tão próximo da medição que errá-lo seria estranho — mas justamente por isso ele não carrega
informação; é o piso do mapa, não a sua contribuição. O mesmo vale, em menor grau, para e6: mais
tradução de máquina é continuação de uma curva de vinte anos. O que não é extrapolação em e6 é a
**desintermediação** — a tradução acontecer sem que exista um tradutor, um contrato ou um distribuidor
no circuito.

**Velocidade de adoção nunca vista.** Três efeitos pressupõem adoção mais rápida do que o comparável
histórico, e foram rebaixados por isso.

- e4 ("a obra deixa de ter versão canônica", 2029) pressupõe que uma mudança de estatuto cultural
  aconteça em três anos. O comparável que contradiz: o e-book. Tecnicamente maduro em 2007, levou mais
  de uma década para mudar hábito de leitura — e não mudou a ideia de obra, que é uma camada muito
  mais funda. Rebaixado para `media`, e o efeito derivado e4.1 mantido em `media` apenas porque a
  migração da conversa para o sistema já acontece nas comunidades de NovelAI e assemelhados.
- e6.2 ("a língua de origem vira configuração do leitor", 2030) pressupõe que catálogos abandonem a
  organização por idioma. O comparável: a legendagem automática do YouTube existe desde 2009 e não fez
  nenhuma plataforma parar de organizar acervo por idioma em dezessete anos. Rebaixado para `baixa`.
- e8.2 (licenciamento coletivo de catálogo para treino, 2030) pressupõe que gestão coletiva se
  organize em quatro anos. O comparável brasileiro é o ECAD, que levou décadas e ainda é disputado.
  Rebaixado para `baixa`.

**A disrupção que pode não se concretizar.** A mais frágil das três é **D2 — a obra adaptada em tempo
de leitura**, e a evidência contra ela é do mesmo ano do mapa. Bhatt et al. mediram que a adaptação
que os modelos fazem hoje é troca de marcadores sobre esqueleto comum: mascarados 9% a 17% do
vocabulário, a similaridade entre grupos sobe até 66,7% em Jaccard [8]. Se isso for uma propriedade
do regime de treino e não uma limitação passageira, D2 não é disrupção — é personalização cosmética,
que não remove nenhuma restrição real e cabe inteiramente na categoria "o mesmo jogo, mais barato".

O que acontece com a subárvore se D2 não vingar: **e4 e e5 caem, mas não igualmente.** e4 (fim da
versão canônica) cai inteiro, e com ele e4.1, e4.1.1 e e4.2.1 — se a variação é superficial, o
referente comum sobrevive, porque duas pessoas continuam lendo a mesma história com nomes diferentes.
e4.2 sobrevive **invertido**: vira a constatação de que a personalização é rasa, que é exatamente o
que a medição já mostra, e deixa de ser efeito futuro para ser diagnóstico presente. Já e5 sobrevive
inteiro, porque não depende de D2: o laço fechado leitor-escritor [5] existe hoje sem nenhuma
personalização profunda — basta que a máquina gere sob demanda. Ou seja, cinco dos quarenta efeitos
caem e um se inverte; e5 e sua descendência precisariam ser reancorados em D1.

Se **D1** não vingar — se a qualidade não sustentar obra longa e o produto ficar preso à demonstração
de dois minutos —, caem e1, e2 e as oito folhas deles, e sobra e3: a exigência de prova de autoria
não depende de a geração ser boa, depende de ela ser **indistinguível**, e os três casos de 2026 [10]
aconteceram com a tecnologia que já existe.

Se **D3** não vingar — se a camada sobreposta for judicializada e morrer, ou se a qualidade não
sobreviver a linguagem difícil —, caem e6 e e7 e suas folhas, mas e8 sobrevive: a disputa brasileira
sobre remuneração de treino [12] não depende de tradução sobreposta nenhuma.

**Viés do autor.** Esta é a pergunta que a skill manda fazer ao usuário, e ela **não foi feita**: esta
rodada correu sem interlocutor humano, com respostas de entrevista fixadas de antemão, e o viés
declarado foi "neutro" por instrução, não por autoavaliação de quem escolheu o tema. Registro isso
como limitação conhecida do documento. O que dá para observar de fora: o tema foi atribuído, não
escolhido, e a zona de interesse declarada ("Simulação e mundos") é adjacente mas não coincidente com
ele — o que reduz o risco de entusiasmo, e aumenta o risco oposto, o de tratar como periférico algo
central para quem trabalha com escrita. Um autor que viva de escrever provavelmente puxaria a seção 4
para o lado do conflito trabalhista, que aqui aparece só como e1.2 e e6.1.

**O que sobreviveu intacto.** Nada das três raízes saiu sem preço: D2 levou o ataque mais pesado e
está declarada como a mais frágil; D1 e D3 perderam efeitos derivados por comparável histórico. Duas
confianças foram rebaixadas (e6.2, e8.2) e uma foi mantida alta apesar de ser extrapolação (e1), com
a ressalva registrada acima.

## 8. O que a máquina errou

**O erro específico, e como foi pego.** Ao montar a seção 3, a primeira versão afirmava que "30,8%
dos jogos lançados na Steam em 2026 declararam conteúdo gerado por IA" e que essa fração chegaria a
50% até 2028. Os dois números vieram do resumo de busca de uma matéria da PC Gamer e de agregadores
de notícia que a repetiam — nenhum dos dois foi lido. Ao tentar abrir a matéria da PC Gamer para
verificar, o conteúdo voltou truncado: sem percentuais, sem fonte dos dados, sem data. O número
sobrevivente é outro, de outra medição, com outro recorte: 26,5% das **demos** da Steam Next Fest de
junho de 2026, sobre 4.382 demos registradas, com metodologia declarada e série histórica comparável
[3]. Não é a mesma coisa que "jogos lançados no ano", e a projeção de 50% até 2028 foi cortada do
documento — inclusive como ancoragem de prazo de qualquer efeito.

O que torna esse erro instrutivo é que ele era plausível e convincente: 30,8% e 26,5% são números da
mesma ordem, contam a mesma história, e a diferença entre "demos de um festival" e "jogos lançados no
ano" é exatamente o tipo de detalhe que some num resumo. Se a fonte não tivesse sido aberta, o
documento teria um número mais redondo, mais citável e errado.

**Segundo item.** A seção 3 quase citou a edição de junho de 2026 da MultiLingual sobre o estado da
localização, com números de mercado (US$ 2,55 bilhões em 2026, 45 mil empregos perdidos entre 2022 e
2026) que apareceram no resumo de busca. A página respondeu HTTP 403. Os números foram retirados, e
com eles caiu a possibilidade de quantificar o efeito e6.1 — que por isso está escrito em termos
qualitativos ("encolhe a camada de volume") em vez de com uma taxa. O mapa é mais fraco por isso, e é
melhor assim do que com um número que ninguém conferiu.

**Terceiro item.** A página do MangoBox foi aberta esperando encontrar números de uso — quantas
histórias geradas, quantos usuários. Não há nenhum [1]. A afirmação de que a geração de novela visual
"já é produto" está sustentada por preço e por funcionalidade verificados, não por adoção verificada.
A adoção neste mapa vem toda da Steam [3] e da análise de conversas [5], que medem coisas adjacentes,
não este produto. Isso é uma lacuna real da seção 3, e é o motivo de a confiança geral do documento
ser `media` e não `alta`.

**Quarto item, de método.** A Etapa 4 da skill manda perguntar ao usuário sobre o viés dele, e proíbe
explicitamente inventar a resposta. A pergunta não pôde ser feita nesta rodada. Em vez de fabricar uma
resposta plausível, a seção 7 registra a ausência — o que significa que o item mais pesado da
contestação está incompleto por desenho da rodada, não por esquecimento.

## 9. Três cenários para 2031

**Provável.** Em 2031 contar ficou barato e provar autoria ficou caro. A geração de artefato
narrativo completo virou o piso das ferramentas — quem escreve para mídia interativa escreve
restrição, personagem e limite, e assiste o sistema montar o resto —, e a declaração de proveniência
por componente virou obrigação de loja e de editora, como a classificação indicativa. A promessa da
obra que se adapta a cada leitor entregou menos do que prometeu: os sistemas trocam marcadores de
superfície sobre esqueletos repetidos, e isso passou a ser medido publicamente, virando um item de
ficha técnica em vez de um argumento de venda. A camada de tradução sobreposta é rotina, e a
localização profissional sobreviveu encolhendo na base e subindo no meio da cadeia: ninguém mais paga
por palavra, paga-se por quem assina. No Brasil, a lei saiu depois do mercado, e o capítulo de
remuneração chegou fraco. O ponto morto é o mesmo desde 2026: não há como verificar autoria, e a
acusação continua custando mais do que a absolvição devolve.

**Desejável.** Em 2031 a coautoria é declarada, e por isso deixou de ser suspeita. A mudança que
tornou isso possível foi institucional, não técnica: prêmios, editoras e lojas abandonaram a
proibição — que nunca foi verificável — e adotaram declaração positiva com categorias separadas,
de modo que obra assistida compete com obra assistida e ninguém precisa mentir. As ferramentas de
escrita gravam proveniência no ponto de decisão por padrão, o que protege o autor acusado em vez de
vigiá-lo, e o registro pertence a quem escreve, não à plataforma. A personalização foi cobrada por
métrica pública de diversidade, e os sistemas que só trocavam etiqueta perderam mercado para os que
de fato variavam. A localização foi renegociada como responsabilidade e não como volume, e o
tradutor que assina o que a obra diz num país ganha mais do que o que produzia primeira versão. No
Brasil, o capítulo de direitos autorais sobreviveu à tramitação e a gestão coletiva de direito de
treino começou a funcionar antes de o mercado se consolidar sem ela. O que teve de ser feito para
chegar aqui: a declaração precisou ser **positiva e barata**, e o rastro de processo precisou ser
propriedade do autor — se qualquer uma das duas coisas tivesse ficado com a plataforma, este cenário
vira o indesejável.

**Indesejável.** Em 2031 a narrativa é abundante, indistinta e de ninguém. O laço fechado venceu: a
maior parte do consumo de ficção acontece entre uma pessoa e um sistema, sem autor do outro lado e
sem leitor depois, medido por tempo de sessão como qualquer produto de atenção. A personalização
rasa escalou sem ser cobrada — cada leitor recebe uma variante, todas do mesmo esqueleto, e a
conversa pública sobre obras simplesmente parou, porque não havia mais sobre o que conversar. O
regime de proveniência foi capturado: quem verifica autoria é a plataforma, o rastro é dela, e há
mercado consolidado para fabricar histórico de escrita plausível, de modo que o selo vale para quem
pode pagá-lo. A localização perdeu a camada de volume sem ganhar a de responsabilidade, e obras
circulam traduzidas por camadas que ninguém revisou e pelas quais ninguém responde. No Brasil, o
insumo criativo ficou gratuito em definitivo, e a produção nacional cresceu contando histórias com
esqueleto importado e enfeite local. **O sinal precoce deste cenário** é um só e aparece antes de
todo o resto: a declaração de proveniência virar custo do autor em vez de obrigação da plataforma —
o momento em que provar que você escreveu passa a ser despesa sua, e não dever de quem publica.

## 10. O experimento

**O que é.** *Mesma semente, leitores diferentes.* Gera-se uma novela visual curta a partir de uma
única frase de premissa, usando uma ferramenta de geração completa (MangoBox ou equivalente), e
produz-se uma variante por aluno, personalizada por um perfil curto que cada um preenche antes
(cidade, gênero preferido, tom, três coisas que detesta em histórias). Cada pessoa joga a sua
variante sozinha, sem ver a dos outros. Depois, em sala, duas etapas: primeiro uma discussão de vinte
minutos sobre "a obra" — sem avisar que as versões diferem — e só então a revelação e a comparação
lado a lado.

**A pergunta sobre o futuro que ele responde.** Duas pessoas conseguem discutir um livro que leram em
versões diferentes? É a pergunta de 2ª ordem do tema, e é a que decide se D2 é disrupção ou cosmética.
O experimento não pergunta se as versões são diferentes — pergunta se a diferença **chega à conversa**.

**A medida.** Aplica-se ao conjunto das variantes o método de Bhatt et al. [8]: identificam-se os
tokens que distinguem as versões entre si, mascaram-se esses tokens, e mede-se a similaridade do que
sobra (subsequência comum mais longa e Jaccard de 4-gramas). Se, removidos os marcadores, as
variantes convergirem — como convergiram nos cinco modelos que os autores testaram —, a personalização
é de superfície, e a discussão em sala funcionar é a prova prática disso. Se não convergirem e a
discussão em sala desandar, D2 ganha evidência.

**Que tecnologia emergente usa, e por que não dá com tecnologia madura.** Usa geração multimodal de
artefato completo com variação por perfil. Com tecnologia madura o experimento não existe: em Ren'Py
ou Twine, produzir catorze variantes de uma novela visual com arte e elenco exigiria semanas de
trabalho humano, e as variantes seriam diferentes porque um humano as escreveu diferentes — o que
responde outra pergunta. O ponto do experimento é justamente que as variantes venham do mesmo
sistema, pelo mesmo custo, sem intervenção editorial entre elas.

**O que a turma faria testando em sala.** A turma é simultaneamente o público e o instrumento: cada
aluno é um leitor de uma variante e um medidor da própria conversa. O momento a observar é a discussão
antes da revelação — quantos minutos até alguém dizer "não foi isso que aconteceu comigo", e sobre o
quê: sobre o nome de um personagem, sobre uma cena, ou sobre o que a história queria dizer. Se as
divergências forem todas de detalhe e nenhuma de sentido, a resposta está dada.

**O que mudaria a opinião do autor.** Duas coisas, e são as declaradas na entrevista. Primeira:
evidência de que a adoção já passou da maioria inicial — se em 2027 a maior parte das obras narrativas
publicadas em qualquer plataforma relevante for gerada, D1 deixa de ser disrupção e vira piso, e este
mapa vira um estado da arte atrasado. Segunda: evidência de que a tecnologia não rompe nada — se o
experimento mostrar que as variantes convergem e a conversa em sala corre sem atrito, D2 sai do mapa
como raiz e desce para a seção 6, e o documento perde um terço da sua aposta.

## 11. Fontes

Onze leituras verificadas de fato nesta sessão, mais um item declarado como resultado de busca (item 2), que não sustenta nenhuma afirmação factual. Fontes que apareceram na busca mas não puderam
ser abertas estão listadas no Anexo como não verificadas e não sustentam nenhuma afirmação acima.

1. `https://mangobox.ai/` — MangoBox, produto de geração de novela visual. Sustenta o limiar de custo
   e de escopo de D1 (frase de entrada; até cinco personagens; retrato, cena, diálogo; "em minutos";
   US$ 9/mês no plano Pro). Confiabilidade: é página de produto do próprio fornecedor — vale para o
   que ele oferece e cobra, não vale como evidência de adoção; não traz nenhum número de uso.
2. Resultados de busca sobre geradores de novela visual por IA (SEELE, Summer Engine, Chatforce,
   Figma) — usados apenas para estabelecer que há múltiplos concorrentes no mesmo formato, e
   explicitamente tratados na seção 3 como cobertura de demonstração. Confiabilidade: baixa;
   material de marketing, nenhuma página aberta individualmente.
3. `https://www.llamagriffin.com/Data/SteamNextFestJune2026/part-2.html` — relatório de declarações de
   IA na Steam Next Fest de junho de 2026. Sustenta a rampa de adoção (1.163/4.382 = 26,5%; série
   14% → 17% → 21,2% → 26,5%; ~60% das declarações são de ativo visual; isenção de código em
   jan/2026). Confiabilidade: alta para o recorte declarado — metodologia explicitada e série
   comparável; atenção ao recorte (demos de festival, não jogos lançados no ano).
4. `https://en.wikipedia.org/wiki/Project_Genie_(website)` — Project Genie / Genie 3, DeepMind.
   Sustenta o limite superior de capacidade em geração de mundo jogável (29/01/2026; 720p, 24 fps;
   60 s por sessão; recusa de nudez e material protegido). Confiabilidade: média-alta; verbete
   enciclopédico com dados factuais simples, não auditados por terceiros.
5. `https://arxiv.org/abs/2606.22748` — Gupta, Antoniak e Walsh, *AI Fiction in the Wild* (22/06/2026).
   Sustenta e5 e o sinal fraco do leitor-escritor solipsista (mais de 500 mil conversas; mais de um
   terço envolve geração de ficção; concentração em usuários intensivos). Confiabilidade: alta para o
   método, com a ressalva de ser preprint, restrito ao inglês e a uma única plataforma.
6. `https://github.com/HIllya51/LunaTranslator` — LunaTranslator. Sustenta D3 (hook de processo, OCR
   embutido, emuladores NS/PSP/PSV/PS2, tradução por LLM; GPLv3; 13,2 mil estrelas, 1,1 mil forks,
   4.963 commits). Confiabilidade: alta para capacidade e para atividade do projeto; estrelas são
   proxy fraco de uso real.
7. `https://en.wikipedia.org/wiki/AI_Dungeon` — histórico do AI Dungeon. Sustenta a rejeição do
   diálogo gerado como raiz de disrupção (mar/2019; 100 mil jogadores em uma semana em dez/2019;
   1,5 milhão em jun/2020; filtro e crise de moderação em abr/2021; saída da Steam em 12/03/2024).
   Confiabilidade: média-alta; números de usuário são autorrelatados pela empresa à época.
8. `https://arxiv.org/html/2606.14626` — Bhatt, Vijay, Milbauer e Diaz (CMU), *Characterizing Cultural
   Localization in AI-Generated Stories* (12/06/2026). Sustenta e4.2, a fragilidade de D2 e a medida
   do experimento (9–17% do vocabulário carrega a variação; LCS +11,5–23,3%; Jaccard +14–66,7%; 19
   países com marcadores ofensivos em média). Confiabilidade: alta para o método, com a ressalva de
   preprint e de a análise cobrir histórias curtas, não obras longas.
9. `https://arxiv.org/abs/2601.10236` — Zhang, Bu e Dhillon, *Who Owns the Text? Design Patterns for
   Preserving Authorship in AI-Assisted Writing* (15/01/2026). Sustenta e5.2 e e3.1 (176 participantes;
   queda de 0,85–1,0 em escala de 7 no senso de propriedade; personalização de estilo recupera ~0,43
   ponto e aumenta ~5 p.p. a incorporação de texto da máquina; padrão de proveniência no ponto de
   decisão). Confiabilidade: alta para o desenho experimental; amostra única, efeito de curto prazo.
10. `https://www.csmonitor.com/Arts-Culture/Books/2026/0812/ai-publishing-commonwealth-prize-shy-girl`
    — Christian Science Monitor, 12/08/2026. Sustenta e3.2 e o wildcard 2 (Commonwealth Short Story
    Prize, maio/2026, três histórias acusadas, sem evidência encontrada após revisão de rascunhos e
    carimbos de tempo; *Shy Girl* cancelado pela Hachette; manuscrito de Jerry Falade retirado de
    venda). Confiabilidade: alta para os fatos datados; as alegações de uso de IA em cada caso
    permanecem não comprovadas, e o texto é explícito quanto a isso.
11. `https://www.morganlewis.com/pubs/2026/03/us-supreme-court-declines-to-consider-whether-ai-alone-can-create-copyrighted-works`
    — Morgan Lewis, março de 2026. Sustenta e3 e o wildcard 1 (*Thaler v. Perlmutter*, nº 25-449;
    certiorari negado em 02/03/2026; exigência de autoria humana mantida; registro de obra com IA
    exige declaração do conteúdo gerado e explicação da contribuição humana). Confiabilidade: alta
    para o fato processual; é análise de escritório de advocacia, com o viés de aconselhamento que
    isso implica.
12. `https://telaviva.com.br/15/05/2026/frente-com-mais-de-50-entidades-reage-a-possivel-corte-de-direitos-autorais-no-pl-da-ia/`
    — Tela Viva, 15/05/2026. Sustenta e8 e a nota sobre o Brasil (carta da ABDA com mais de 50
    entidades; risco de exclusão integral do capítulo de direitos autorais e conexos no substitutivo
    do relator ao PL 2338/2023). Confiabilidade: média — a própria matéria registra que a exclusão
    é informação de bastidor não confirmada, e este mapa trata a indefinição, não a exclusão, como o
    fato relevante.

## 12. Anexo — o levantamento bruto

Sem corte. O que não estiver aqui não pode ser processado depois.

### 12.1 Entrevista (Etapa 0) — respostas usadas

Esta rodada correu **sem interlocutor humano**. As respostas abaixo vieram fixadas no prompt da
rodada e foram usadas como se tivessem sido dadas na entrevista. Isto viola o espírito da Etapa 0
(que existe para que o recorte venha de uma pessoa) e está registrado como limitação na seção 7.

- Tema e recorte: "Narrativa gerativa e coautoria", tema 8 de 19, família "Simulação e mundos".
  Nenhuma variante mais estreita pedida.
- Descartado de início: o que já é comum em produto de massa (régua da disciplina). Nenhuma outra
  exclusão.
- Horizonte: 2031.
- Público: quem projeta mídia e interação.
- Recorte geográfico: global, com uma nota sobre o Brasil. (Registrado no frontmatter como `global`,
  já que o campo aceita um valor; a nota sobre o Brasil está em e8 e na seção 3.)
- Viés desejado: neutro.
- Zona de interesse: Simulação e mundos.
- Login: jgpt. Skill: futurizacao-jgpt.
- Profundidade: três ordens. Modo: a partir de uma inovação/tema, não de um setor.
- Disrupção suspeita: nenhuma — descobrir.
- O que faria mudar de ideia: evidência de adoção além da maioria inicial (Rogers), ou de que a
  tecnologia só melhora o que existe.
- Pergunta da Etapa 4 sobre viés do autor: **não feita**, por não haver a quem perguntar. Não foi
  inventada resposta.

### 12.2 Buscas realizadas

1. `AI visual novel generator 2026 generate playable game from one sentence` — retornou nove
   resultados, quase todos páginas de produto (Figma, LlamaGen, SEELE, Summer Engine, Chatforce) mais
   o verbete do Project Genie. Usados: Project Genie (aberto), MangoBox (aberto em seguida, por
   conhecimento prévio do tema). Não usados individualmente: os demais, por serem material de
   fornecedor.
2. `generative interactive fiction AI co-writing authorship 2026 research` — retornou nove artigos.
   Abertos: *Who Owns the Text?* (2601.10236) e *AI Fiction in the Wild* (2606.22748). Não abertos,
   mas registrados como pista para quem continuar: *Can Good Writing Be Generative?* (2601.18353),
   *DiaryPlay* (2507.11628), *Co-Writing with AI, on Human Terms* (2504.12488), *"I Like Your Story!"*
   (2503.09102), *Split Fiction: Gaming, Authorship, and Corporate Extraction in the Age of AI*
   (10.3390/h15010002), *"The Language of the Digital Air"* (10.3390/h14080164).
3. `Steam AI content disclosure percentage of games 2026 statistics generative AI` — nove resultados.
   Aberto e usado: Llama & Griffin. Aberto e **falhou** (conteúdo truncado, sem números): PC Gamer.
   Não abertos: Geeky Gadgets, Cinevva, tech-insider.org, pccentral.net, Pikorafy,
   shanethegamer.com — todos agregadores repetindo a mesma origem.
4. `game localization industry AI machine translation impact jobs 2026 revenue` — nove resultados.
   Tentado e **falhou** (HTTP 403): MultiLingual, junho de 2026. Não abertos: Precedence Research,
   Verified Market Reports, webpronews, speequalgames, apollotechnical, bishopwcmartin — relatórios
   de mercado pagos ou conteúdo de agência. **Nenhum número de mercado de localização entrou no
   documento.**
5. `literary prize AI co-authored novel 2026 disclosure rules publishers` — nove resultados. Aberto e
   usado: Christian Science Monitor. Não abertos: Jane Friedman (dois textos), The Walrus, France 24,
   Enago, Parker Publishers, verbete *Discipline (novel)*. Registro para continuação: a matéria da
   France 24 e o texto do The Walrus tratam do mesmo caso do Commonwealth Prize por outro ângulo.
6. `US Copyright Office AI generated works human authorship requirement 2026 registration guidance` —
   nove resultados. Aberto e usado: Morgan Lewis. Não abertos: Jones Day (fev/2025), Sterne Kessler,
   Bilzin Sumberg, CRS LSB10922, guias comerciais (garrettham.com, aicopyrightlegal.com).
7. `PL 2338 marco legal inteligência artificial Brasil 2026 status remuneração direito autoral obras` —
   duas rodadas, dezoito resultados. Aberto e usado: Tela Viva. Não abertos: Desinformante, Exame,
   Demarest, JOTA, Data Privacy Brasil, PE News, GR6, edocbrasil, apresentação do MinC à Comissão
   Especial (PDF, 02/09/2025), contribuição da EGEDA Brasil (PDF), ficha de tramitação da Câmara.
   **Não verificados** e por isso fora do corpo do documento: a data de 27/05/2026 para votação na
   Câmara, a aprovação no Senado em 10/12/2024 (citada na seção 3 a partir de resumo de busca, não de
   leitura — ver 12.5), e a estimativa de perda de €34 bilhões em cinco anos para criadores de música
   e audiovisual.
8. `arXiv 2026 personalized adaptive narrative generation reader-specific story "shared object"
   cultural` — nove resultados. Aberto e usado: *Characterizing Cultural Localization* (2606.14626).
   Não abertos, registrados como pista: PREFINE (2510.21721), StoryLens (2605.28073), PAUSE
   (2608.28633), MirrorStories (2409.13935), *Wrapped in Anansi's Web* (2409.16894).
9. `AI Dungeon NovelAI users 2026 interactive fiction generative scale itch.io AI games` — nove
   resultados, quase todos páginas de comparação de produto com incentivo comercial. Aberto e usado:
   verbete do AI Dungeon. **Não usado**, por origem comercial não verificável: a alegação de que os
   jogadores simultâneos do AI Dungeon na Steam caíram de 48 (fev/2025) para 26 (abr/2026) — número
   que, além de não verificado, é incompatível com o verbete, segundo o qual o jogo saiu da Steam em
   março de 2024. Esta contradição é em si um achado: a camada de conteúdo de comparação de produto
   sobre IA generativa está poluída o bastante para se contradizer com a enciclopédia em um fato
   simples e datável. A janela de contexto de 128 mil tokens do NovelAI vem da mesma camada e também
   **não foi verificada** — é usada na seção 4 como ordem de grandeza do estado da arte, não como
   especificação de produto.

### 12.3 Candidatas a disrupção-raiz levantadas e o que aconteceu com cada uma

| Candidata | Veredito (Etapa 2) | Motivo |
|---|---|---|
| Artefato narrativo completo a partir de intenção curta | **Aceita (D1)** | Limiar de mão de obra e composição; preço e produto datados [1]; rampa medida [3] |
| Obra adaptada em tempo de leitura | **Aceita (D2), a mais frágil** | Limiar de contexto longo + custo marginal zero de variante; evidência contrária de profundidade [8] |
| Tradução sobreposta em tempo real | **Aceita (D3)** | Limiar de desintermediação; qualidade por LLM torna a obra jogável, não só decifrável [6] |
| Diálogo de NPC/personagem gerado por modelo de linguagem | Rejeitada — madura | 1,5 milhão de jogadores em jun/2020 [7]; é piso, e além disso é o tema 7 |
| Mundo jogável gerado por prompt (Genie 3) | Rejeitada — emergente | 60 s, 720p, plano mais caro; não forçou mudança estrutural em ninguém [4] |
| Síntese de voz gerativa (ChatTTS, Bark) | Rejeitada — componente | Barateia etapa dentro do mesmo jogo; entra como insumo de D1 |
| Roteiro → vídeo animado (AIComicBuilder, Pika, Luma) | Rejeitada — é o tema 12 | A geração de vídeo *como mídia* é vizinha; aqui o objeto é a história |
| Geração procedural de mapa e mundo (Fantasy-Map-Generator) | Rejeitada — madura e é o tema 14 | Regras, não histórias |
| Exigência de prova de proveniência de autoria | Rejeitada como raiz, promovida a efeito (e3) | Acrescenta restrição em vez de remover; é consequência causal de D1, e fica mais limpa como efeito de 1ª ordem |

### 12.4 Efeitos cortados durante a Etapa 3

- *"O preço médio de uma obra narrativa cai"* — cortado por ser extrapolação pura, sem mecanismo
  novo, e por já estar contido em e1.
- *"Surgem sindicatos de roteiristas de jogo"* — cortado por ser o tipo de efeito que serve para
  qualquer tema de automação (exclusão pedida na entrevista: ideias óbvias que valem para qualquer
  tema). O conteúdo específico sobreviveu, deslocado, em e1.2 e e6.1.
- *"A IA gera obras melhores que humanos"* — cortado por não ser efeito, ser juízo, e por não ser
  falseável no formato.
- *"Escolas proíbem o uso"* — cortado por ser o caso particular já coberto por e3.2.1 (a proibição é
  inverificável), e por ser lugar-comum.
- *"Um NPC gerado vira celebridade"* — pertence ao tema 7, não a este; o wildcard equivalente aqui é
  o wildcard 1 (obra sem autor que vira patrimônio).
- Um quarto nível chegou a ser esboçado sob e3.1.1 ("seguradoras passam a oferecer apólice contra
  acusação de autoria de máquina") e foi **cortado pelo teto de três níveis** do formato. Fica
  registrado aqui como material de continuação, conforme a Etapa 3 manda.
- Um quarto nível sob e6.1.1 ("a assinatura do tradutor vira crédito visível na obra, como o de
  dublagem") — mesmo motivo, mesmo destino.

### 12.5 Afirmações no documento que dependem de resumo de busca e não de leitura integral

Registradas aqui para que o aluno confirme antes de entregar, conforme a Etapa 1 exige:

- "PL 2338/2023 aprovado no Senado em 10/12/2024 e em tramitação na Câmara" (seção 3) — veio de
  resumo de busca; a fonte aberta [12] confirma a tramitação na Câmara e a disputa sobre o capítulo
  autoral, mas não a data de aprovação no Senado. **Confirmar.**
- "Janela de contexto da ordem de 128 mil tokens" (seção 4, D2) — veio de página comercial de
  comparação, não verificada. Usada como ordem de grandeza. **Confirmar ou substituir por fonte
  técnica.**
- Nomes de produto citados sem página aberta (SEELE, Summer Engine, Chatforce, Figma) — existência
  atestada apenas por resultado de busca [2]. **Confirmar antes de citar em sala.**
- "Amazon KDP exige declaração de conteúdo gerado no upload" — apareceu em resumo de busca e **não
  entrou** no corpo do documento por não ter sido verificada. Se confirmada, reforça e1.1 e e3.

### 12.6 Checagem de formato (Etapa 5)

- `grep -c "^## "` no arquivo final deve dar exatamente **12**.
- Frontmatter: todos os campos do gabarito presentes; `publico_ok: false` (não houve autorização
  explícita para nome em galeria pública).
- Bloco `roda:`: três disrupções, exatamente três níveis, `id` hierárquico e único (e1…e8, e1.1…e8.2,
  e1.1.1…e8.2.1), todo efeito com `sinal`, `prazo` e `confianca` preenchidos, nenhum campo nulo,
  nenhum efeito escrito como pergunta.
- Contagens declaradas no frontmatter: 3 raízes, 8 efeitos de 1ª ordem, 16 de 2ª, 16 de 3ª.
- Seção 11: doze itens, dos quais onze são leituras verificadas de fato; o item 2 está declarado como
  resultado de busca e o documento não apoia nenhuma afirmação factual nele.
