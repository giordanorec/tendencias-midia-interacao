---
tema: Narrativa gerativa e coautoria
slug: narrativa-gerativa-e-coautoria
autor_login: jlsn
zona_de_interesse: Sistemas de Informação
data: 2026-09-18
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: Global, com nota sobre o Brasil
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 12
efeitos_ordem_3: 12
tecnologias_citadas: ["LLM multimodal", "difusão de imagem para sprite e cenário", "script-to-video", "TTS gerativo (ChatTTS, Bark)", "Ren'Py", "Monogatari", "Inform 7", "Twine", "YarnSpinner", "Dialogic", "Arrow", "Mangobox", "NovelAI", "AI Dungeon", "Character.AI", "LunaTranslator", "hook de texto e OCR em runtime", "geração estruturada de grafo narrativo", "Fantasy-Map-Generator", "marca d'água e proveniência de conteúdo"]
fontes: 12
confianca: media
experimento: A mesma história, dois leitores
skill_usada: futurizacao-jlsn
publico_ok: false
---

## 1. Resumo

Contar deixou de custar. Um produto de 9 dólares por mês recebe uma frase e devolve uma novela visual jogável com até cinco personagens, arte, cenário e ramificação — e isso não é protótipo de laboratório, é assinatura mensal.
O efeito já aparece no denominador: de 53.597 jogos lançados na Steam entre julho de 2023 e julho de 2026, a fatia com aviso de IA foi de 10,9% em 2024 para 30,8% em 2026, e os títulos que dão certo são justamente os que declaram voz, localização e texto, não só arte.
A segunda ruptura é mais funda que o volume: a obra que se remonta para cada leitor. Se duas pessoas leem versões diferentes, o objeto comum da conversa some — e com ele a crítica, o clube de leitura e o cânone.
A terceira é a tradução sobreposta em tempo real, que o LunaTranslator (13,3 mil estrelas) já faz por hook e OCR: obra japonesa consumida em português sem que ninguém a tenha localizado.
O que a evidência sustenta é um trade-off medido, não uma promessa: com IA a história individual fica melhor, e o conjunto das histórias fica mais parecido entre si.
Até 2031, o cenário provável não é o fim do escritor, é a separação entre escrever e restringir — e uma crise de confiança em prêmios, currículos e catálogos, que já começou.
O que derruba o mapa inteiro é o público continuar pagando por intenção autoral verificável, tornando "gerado" um rótulo de desvalor em vez de um custo menor.

## 2. O tema

Narrativa gerativa é a produção do artefato narrativo inteiro — texto, elenco, arte, voz, ramificação e, cada vez mais, vídeo — por um modelo, a partir de uma intenção curta. Coautoria é o que sobra para o humano nesse arranjo: escolher, restringir, cortar, assinar.

A fronteira com o que já é maduro importa, porque a régua da disciplina exclui o comum em produto de massa. Engine de novela visual (Ren'Py, Monogatari), ferramenta de diálogo ramificado (YarnSpinner, Dialogic, Twine), parser de ficção interativa (Inform 7) e gerador de mapa de fantasia são tecnologia resolvida: existem há décadas, têm comunidade, documentação e sucessor. Escrever com autocompletar também já é comum. O que rompe paradigma é outra coisa: **o artefato completo sair de uma frase**, e **a obra deixar de ser um exemplar fixo**.

Onde encosta em mídia e interação: o objeto de projeto muda de lugar. Quem projeta não escreve mais a cena; escreve a restrição que produz cenas aceitáveis, e depois julga a amostra. Isso aproxima a autoria de uma prática que já existe em software — não se testa cada saída, mede-se a distribuição — e afasta da prática que o campo editorial e o game writing herdaram do roteiro.

Merece um mapa porque o dano não é no ofício, é na instituição. Prêmio literário, seleção editorial, contrato de localização, crítica, currículo de escritor, acervo: todos pressupõem que existe **uma** obra, com **um** autor, numa **língua** de origem. As três disrupções abaixo atacam exatamente esses três pressupostos.

## 3. Onde isso está hoje

**O que existe e funciona.** O Mangobox recebe uma descrição de situação — "uma frase basta; mais detalhe dá mais controle" — e gera até cinco personagens com personalidades distintas, arte de retrato e de cenário em estilos variados, conversa em grupo e caminhos ramificados jogáveis na hora, por US$ 9/mês no plano Pro. Não é o único: Summer Engine, Seele AI e LlamaGen vendem a mesma promessa de "descreva e jogue". Do lado do consumo, o Character.AI opera na casa de 20 milhões de usuários mensais com mais de 10 milhões de personagens criados pela comunidade; AI Dungeon (2019) e NovelAI (2021) são a linhagem histórica dessa prática.

A adoção tem denominador público, coisa rara neste campo. Um censo de 53.597 jogos lançados na Steam entre julho de 2023 e julho de 2026 mostra a fatia com "AI Generated Content Disclosure" indo de ~1% (2023, só retroativo) a 10,9% (2024), 19,9% (2025) e 30,8% (2026 até julho). E o censo separa quem acerta de quem erra: entre os jogos que fracassam (menos de 50 avaliações), 72% declaram só arte/imagem/textura, com mediana de 13 palavras na declaração; entre os que passam de mil avaliações, a declaração é multimodal — três vezes mais provável mencionar voz (24% contra 8%) e localização (18% contra 6%).

A tradução sobreposta também funciona, e é de código aberto. O LunaTranslator (13,3 mil estrelas, 1,1 mil forks, quase 5 mil commits) extrai o texto do jogo por hook de memória ou OCR embutido, traduz por LLM ou motor offline e devolve por cima da tela — em alguns títulos, embutido no próprio jogo — com TTS e suporte a emuladores.

**O que existe e não funciona.** A promessa de que isso amplia o repertório coletivo não se sustentou no teste. O experimento de Doshi e Hauser (293 escritores, três condições: sem IA, com 1 ideia da IA, com 5 ideias) mediu histórias mais criativas, melhor escritas e mais agradáveis — sobretudo para os escritores menos criativos — e, ao mesmo tempo, mais parecidas entre si. Trabalho posterior mostra que o efeito depende da prática de uso, não é lei da natureza: com personas diversas na geração das ideias, a homogeneização cai. E há evidência de que o próprio pós-treino comprime variação temática, afetiva e estilística na ficção dos modelos.

A governança também não funciona. Na itch.io, a etiqueta de IA é declaração voluntária do criador, sem verificação nem teste da plataforma; as diretrizes desencorajam projeto "predominantemente criado por algoritmo com intervenção humana mínima", mas quem decide é quem publica. Na Steam, o aviso é binário: um jogo que passou uma textura no upscaler e um que gerou todo o conjunto de arte carregam a mesma marca — é sinal de "encostou em IA", não medida de dose.

**Quem está construindo.** Startups de novela visual por prompt (Mangobox, Summer Engine, Seele, LlamaGen); plataformas de roleplay em escala (Character.AI, NovelAI, AI Dungeon); comunidade aberta de tradução em runtime (LunaTranslator e derivados para Android); e, por baixo, os laboratórios de modelo multimodal que fecharam o ciclo texto → imagem → som → vídeo num pipeline só. Do outro lado da mesa: prêmios literários, plataformas de publicação e legisladores, todos reativos.

## 4. As disrupções-raiz

### D1. O artefato narrativo inteiro sai de uma intenção curta

**O que rompe.** Rompe a economia da produção narrativa. Uma novela visual publicável exigia roteiro, arte de personagem em várias expressões, cenários, programação de ramificação e, se houvesse dinheiro, voz — trabalho de meses e de várias pessoas. Hoje sai de uma frase, por assinatura mensal, com elenco e arte inclusos. O gargalo deixa de ser produzir e passa a ser **escolher** e **ser encontrado**.

**Por que agora e não há cinco anos.** Em 2020 havia geração de texto plausível (AI Dungeon) e nada mais no mesmo lugar: a arte vinha de outro processo, a ramificação era escrita à mão, a voz não existia. O que mudou é a integração — modelo multimodal único e geração estruturada capaz de devolver um grafo narrativo válido, não prosa solta —, mais o preço. Nenhuma das ferramentas maduras do campo (Ren'Py, Twine, Inform) foi substituída; elas viraram alvo de preenchimento automático.

**O que falta acontecer.** Falta qualidade sustentada além do primeiro impacto: a evidência da Steam mostra que declarar IA em arte correlaciona com fracasso comercial. Falta descoberta — se todo mundo publica, ninguém acha. E falta uma medida de dose que distinga "usei para localizar" de "gerei tudo"; enquanto o rótulo for binário, nenhum mercado consegue precificar a diferença.

### D2. A obra se remonta para cada leitor

**O que rompe.** Rompe o pressuposto do exemplar idêntico — a base de toda a nossa infraestrutura cultural. Crítica, clube de leitura, prova de literatura, citação com número de página, sequência, spoiler, adaptação: tudo assume que o que eu li é o que você leu. Se a história se ajusta ao ritmo, ao gosto e ao histórico de cada leitor em tempo de execução, "a obra" vira uma distribuição de obras possíveis, e o que é comum a duas pessoas passa a ser o gerador, não o texto.

**Por que agora.** Adaptação ao jogador é velha (dificuldade dinâmica, conteúdo procedural), mas sempre operou sobre conteúdo escrito de antemão. Só recentemente o conteúdo passa a ser escrito no momento do consumo com custo marginal quase nulo e coerência suficiente para durar horas. Some-se a isso o fato de que o consumo já é conversacional em escala de dezenas de milhões de pessoas: o público que aceita uma história sem exemplar fixo já existe e já é grande.

**O que falta acontecer.** Falta o problema da memória longa e da coerência entre sessões estar resolvido a ponto de sustentar obra de dezenas de horas. Falta responder o que significa "preservar" uma obra que não existe como arquivo. E falta a evidência do lado do desejo: não está demonstrado que o público queira personalização na ficção — pode ser exatamente o contrário, já que parte do valor de uma história é ela ser a mesma para todos.

### D3. A tradução deixa de ser etapa e vira camada de runtime

**O que rompe.** Rompe a localização como indústria e a ideia de língua de origem como propriedade da obra. Se a tradução é sobreposta, no dispositivo, na hora, então a obra não é traduzida — ela é lida traduzida, por decisão do leitor, sem contrato, sem revisor, sem crédito e sem controle do detentor de direitos. O ativo "versão em português" perde valor; o catálogo inteiro de qualquer língua fica disponível em qualquer outra, com perda de qualidade e ganho brutal de alcance.

**Por que agora.** O LunaTranslator resolve os três problemas que travavam isso: extrair o texto (hook de memória, OCR próprio), traduzir com qualidade aceitável (LLM barato ou modelo offline) e devolver sem quebrar a experiência (sobreposição, embutido, TTS). Nenhum deles era viável em conjunto há cinco anos. E o vetor é comunitário, não corporativo — 13,3 mil estrelas, quase 5 mil commits —, o que significa que não há um fornecedor para processar ou comprar.

**O que falta acontecer.** Falta o salto de nicho (novela visual japonesa) para mídia de massa em tempo real — vídeo, voz dublada em streaming, legenda ao vivo — com latência e qualidade toleráveis. E falta a reação jurídica: tradução não autorizada em runtime é uma obra derivada distribuída? Ninguém decidiu, em nenhum foro relevante.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O artefato narrativo inteiro sai de uma intenção curta
    efeitos:
      - id: e1
        ordem: 1
        efeito: O volume de obras narrativas interativas publicadas cresce mais rápido que qualquer capacidade humana de triagem, e o custo de atenção substitui o custo de produção como escassez do setor.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: As plataformas de publicação passam a cobrar ou limitar submissões e a exigir declaração de dose de IA, deixando de tratar a etiqueta como binária.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A proveniência verificável — quem escreveu o quê, com qual ferramenta — vira infraestrutura de mercado, e obra sem trilha de proveniência é tratada como estoque, não como catálogo.
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A curadoria com nome e rosto — pessoa, clube, selo — captura mais valor do que o catálogo, porque é o único filtro que o volume não replica.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Surge uma classe profissional de curador-editor remunerado por assinatura direta do público, ocupando o lugar econômico que o editor de aquisição tinha na cadeia antiga.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "O trabalho de escrita de jogo se parte em dois: escrever texto final, que encolhe, e especificar restrição e julgar amostra, que cresce e ainda não tem nome nem formação."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Estúdios passam a contratar por capacidade de avaliar saída em escala — rubrica, amostragem, teste com jogador — e não por portfólio de texto escrito.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Cursos de escrita criativa e de game writing se dividem entre formar quem escreve e formar quem avalia, e a segunda trilha passa a disputar alunos com engenharia de software.
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: A remuneração do escritor migra de pagamento por palavra ou por projeto para pagamento por participação declarada na obra, o que exige medir a participação.
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Sindicatos e associações de roteiristas passam a negociar sobre percentual de origem humana verificável, não sobre uso ou não uso de IA, transformando uma disputa moral em disputa contábil.
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A obra se remonta para cada leitor
    efeitos:
      - id: e3
        ordem: 1
        efeito: Duas pessoas que consumiram "a mesma" obra passam a não ter um texto comum para discutir, e a conversa migra do conteúdo para a experiência de cada um.
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "A crítica cultural muda de objeto: analisa o sistema gerador, suas regras e seus vieses, em vez de analisar o texto, porque o texto deixou de ser público."
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A citação acadêmica de obra gerativa exige publicar a semente, o modelo e o log da sessão, e obra cujo gerador foi desligado torna-se incitável e, na prática, inexistente.
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Produtos passam a oferecer explicitamente um modo canônico — a versão que todo mundo recebe igual — como recurso vendável, ao lado do modo adaptativo.
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: O "corte canônico" vira o objeto de valor cultural e o adaptativo vira consumo descartável, repetindo a separação entre edição e conteúdo efêmero que já ocorreu na música e no vídeo.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: A obra adaptativa precisa do histórico do leitor para adaptar, e o consumo de ficção vira coleta de dado comportamental íntimo — o que emociona, o que assusta, o que faz parar.
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Reguladores de proteção de dados passam a tratar perfil narrativo como dado sensível, exigindo base legal específica para personalizar ficção.
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Cria-se a figura jurídica da manipulação narrativa — adaptar a história para prolongar o engajamento contra o interesse do leitor —, análoga ao padrão escuro de interface.
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Uma parte do público adota deliberadamente ficção não personalizada como escolha de higiene, do mesmo jeito que hoje se escolhe cliente sem rastreamento.
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: O selo de obra não adaptativa vira marca de prestígio no mercado editorial e de jogos, e a personalização passa a sinalizar produto barato.
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: A tradução deixa de ser etapa e vira camada de runtime
    efeitos:
      - id: e5
        ordem: 1
        efeito: O catálogo de qualquer língua fica acessível em qualquer outra sem que o detentor de direitos tenha contratado, autorizado ou sequer sabido da tradução.
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A localização profissional se reorganiza em torno do que a camada de runtime não faz — adaptação cultural, humor, revisão de risco jurídico —, com menos postos e maior exigência.
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Mercados periféricos deixam de depender de decisão de publisher para existir como público, e a escolha de quais línguas recebem uma obra deixa de ser decisão comercial de alguém.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Disputas judiciais testam se tradução sobreposta em runtime é obra derivada, e plataformas começam a bloquear hooks de leitura de memória por termo de serviço.
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: A tradução comunitária em tempo real migra para o nível do sistema operacional e do dispositivo, onde o detentor de direitos não tem como alcançá-la.
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: A língua de origem deixa de ser propriedade da obra e passa a ser uma informação de bastidor, como o formato de arquivo em que ela foi escrita.
        sinal: fraco
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Autores passam a escrever otimizando para tradução automática — sintaxe simples, trocadilho evitado, referência explicada —, e o estilo converge entre línguas.
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A literatura intraduzível — a que depende da matéria da própria língua — vira nicho de prestígio deliberado, definido pela resistência à camada automática.
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Políticas culturais nacionais deslocam o incentivo da tradução para a produção em língua local, já que traduzir deixou de ser gargalo e produzir não.
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Cota de conteúdo nacional passa a ser medida por origem da autoria e não por língua da versão publicada, porque a língua da versão deixou de significar alguma coisa.
                sinal: fraco
                prazo: 2033
                confianca: baixa
```

O bloco acima não consegue dizer três coisas.

A primeira é que os três ramos não são independentes: eles se reforçam num circuito. O volume (D1) torna a triagem impossível, o que empurra para personalização como forma de triagem (D2), o que dissolve o objeto comum — e a camada de tradução (D3) multiplica o volume por vinte línguas de uma vez. Quem projetar assumindo que enfrenta um dos três vai ser atingido pelos outros dois.

A segunda é o sinal de amortecimento, que é forte e o YAML não representa. A evidência comercial aponta contra a hipótese ingênua: no censo da Steam, os jogos com IA são um terço dos lançamentos e entre 10% e 27% da receita estimada — ou seja, o crescimento é de volume, não de resultado. Se isso persistir, o gerativo se estabiliza como camada de produção barata em segmento barato, e não como substituto de obra autoral.

Uma nota de método, declarada: oito dos doze efeitos de terceira ordem têm prazo posterior a 2031 — o horizonte desta análise. Isso é deliberado e está dentro da regra, porque efeito de terceira ordem aqui é quase sempre resposta institucional (tribunal, regulador, sindicato, universidade), e instituição responde depois. O que o mapa afirma dentro do horizonte são as ordens 1 e 2, todas com prazo até 2031; a terceira ordem é a sombra que elas projetam adiante, e deve ser lida como tal.

A terceira é que a confiança cai abruptamente da ordem 1 para a 3 não por modéstia retórica, mas porque as ordens 2 e 3 dependem quase todas de decisão institucional — prêmio, tribunal, regulador, sindicato —, e decisão institucional não tem taxa de adoção, tem gatilho. Um caso de repercussão antecipa cinco anos; a ausência dele adia indefinidamente.

## 6. Sinais fracos e wildcards

**O sinal fraco que já virou.** Em 19 de maio de 2026, o Prêmio Commonwealth de Conto — 7.806 inscrições afuniladas para 200, depois 25, depois 5 finalistas, júri presidido pela romancista Louise Doughty, publicação na Granta — virou notícia porque uma das peças premiadas foi acusada de não ter sido escrita por um humano. O wildcard que este tema sugeria como hipótese aconteceu antes do horizonte. Em paralelo, e na direção oposta, os Prompty Awards abriram inscrições em 3 de setembro de 2026 premiando explicitamente ficção feita com IA, em seis categorias, com contrato de publicação para o grande vencedor. As duas instituições coexistem: uma tentando barrar, outra tentando premiar.

**Sinal fraco 2.** O padrão de declaração na Steam funciona como confissão involuntária: quem fracassa escreve 13 palavras e fala só de arte; quem tem sucesso usa linguagem minimizadora — "auxiliar", "suplementar" — em 59% dos casos contra 41% dos fracassados, e acrescenta garantia de supervisão humana. O mercado já aprendeu a apresentar o uso de IA como coadjuvante. Isso é anterior a qualquer norma, e diz mais sobre o que o público pune do que qualquer pesquisa de opinião.

**Sinal fraco 3.** A tradução sobreposta sai do PC. Já existe equivalente do LunaTranslator para Android sem root, com OCR no dispositivo, LLM offline e leitura em voz alta. Quando isso for função do sistema operacional, deixa de ser ferramenta e vira condição do consumo.

**Wildcard A (baixa probabilidade, alto impacto).** Um tribunal de peso decide que a saída de um modelo treinado sobre obra protegida é obra derivada — não o treino, a saída. Todo catálogo gerativo comercial vira passivo retroativo da noite para o dia, e o valor migra de volta para acervo licenciado e autoria verificável. A probabilidade é baixa; o impacto zera dois dos três ramos deste mapa.

**Wildcard B.** Um prêmio literário de primeira linha institui categoria de coautoria com IA e ela se torna mais concorrida que a categoria principal — não por adesão entusiástica, mas porque virou o único lugar onde é possível competir sem ser suspeito. A consequência não prevista é que a categoria principal passa a exigir prova de processo: rascunho, histórico de edição, gravação. Escrever passa a ser uma atividade auditada.

**Wildcard C, o contrário de tudo acima.** O público se cansa. Não por princípio, por saturação: a evidência de homogeneização se confirma no consumo, o gerado passa a ser reconhecível em dois parágrafos e "feito por IA" vira sinal de baixa qualidade, como "stock photo". A geração continua onde ninguém olha — localização, variação, preenchimento — e some do lugar onde alguém assina.

## 7. Contra o próprio mapa

**Qual efeito é apenas extrapolação linear do presente.** O e1 — o volume cresce, a curadoria vira escassa. É a coisa mais segura do mapa e também a mais preguiçosa: é o que se disse do blog, do YouTube, do app store e do podcast, sempre com a mesma estrutura ("produzir ficou barato, achar ficou caro"). Está no mapa porque a evidência sustenta, mas não é descoberta: é o efeito que serviria para qualquer tema de geração automática, e foi justamente o tipo de ideia que o recorte mandava excluir. O leitor não deveria pagar atenção por ele.

**Qual efeito assume velocidade de adoção irreal.** O e3 e toda a sua descendência — a dissolução do objeto comum até 2029. Isso pressupõe que a personalização de ficção será adotada em massa em três anos, e não há nenhuma evidência de demanda do lado do público. Há oferta (plataformas conversacionais em escala de 20 milhões de usuários mensais), mas oferta não é a mesma coisa que preferir sua própria versão de um romance. Hábito cultural de leitura muda em geração, não em ciclo de produto. Se este mapa erra por otimismo de velocidade, erra aqui — e provavelmente o prazo correto de e3 está mais perto de 2035 que de 2029, se é que chega.

**Qual disrupção-raiz pode não se concretizar e derrubar o mapa inteiro.** A D2. As D1 e D3 já estão acontecendo e têm número público; a D2 é a única puramente hipotética — e é a que carrega o peso conceitual do tema, porque é dela que vem a pergunta sobre "a obra". Se a personalização narrativa não pegar, o que sobra é um mapa sobre custo de produção e sobre tradução: importante, porém muito menos radical do que este documento sugere. Há, inclusive, um argumento forte contra: parte substancial do valor de uma história é ela ser compartilhada — o spoiler, a discussão, a referência —, e personalizar destrói exatamente esse valor. É plausível que a D2 seja tecnicamente viável e comercialmente indesejada, que é a pior combinação para um mapa de futuros, porque parece inevitável de dentro da tecnologia e nunca chega.

**Qual foi o viés da análise.** Três. Primeiro, viés de fonte anglófona e de plataforma ocidental: Steam, itch.io, arXiv, imprensa em inglês — o consumo de novela visual e de ficção interativa é majoritariamente japonês e chinês, e nenhuma fonte primária desses mercados foi lida. Segundo, viés institucional: o mapa se interessa mais pelo que acontece com prêmio, contrato e crítica do que pelo que acontece com o prazer de ler, que é o que decide de fato. Terceiro, viés de disponibilidade métrica: a Steam entrou com três parágrafos porque publica número, e o mercado editorial, que é maior, entrou com quase nada porque não publica. Isso enviesa o mapa para jogos.

## 8. O que a máquina errou

<!-- Preencher após a leitura humana. -->

## 9. Três cenários para 2031

* **Provável:** a autoria se parte em dois orçamentos, como o software se partiu entre escrever código e revisar código. Escrever texto final vira trabalho de nicho e de prestígio; especificar restrição, gerar em lote e julgar amostra vira o trabalho comum, mal pago no começo e sem formação estabelecida. A localização encolhe em postos e sobe em exigência. A "obra" sobrevive porque o público continua querendo algo em comum para discutir, mas passa a conviver com uma camada enorme de ficção descartável e personalizada, que ninguém chama de obra e que consome a maior parte do tempo de tela. Prêmios e editoras operam com exigência de prova de processo, mal aplicada e facilmente contornável.

* **Desejável:** a dose vira pública e medível. A declaração deixa de ser binária ("tem IA") e passa a descrever o que foi gerado, com qual ferramenta e sob qual supervisão — com proveniência técnica, não honra. Isso permite três coisas que hoje são impossíveis: o leitor escolher com informação, o prêmio julgar sem caçar bruxa, e o escritor ser pago por participação declarada em vez de por palavra. Para chegar lá, é preciso que alguém com poder de plataforma — Steam, itch.io, uma grande editora — substitua o rótulo binário por um rótulo de dose antes que o binário vire lei. A janela é curta: uma vez que reguladores copiem o rótulo binário para dentro de uma norma, ele congela por uma década.

* **Indesejável:** a suspeita generalizada sem instrumento de verificação. Todo texto premiado é acusado, nenhuma acusação é resolvida, detectores continuam não funcionando e a resposta institucional é exigir prova de processo — rascunho, histórico de digitação, gravação de tela. Escrever vira atividade vigiada, o que penaliza exatamente quem não tem estrutura para se documentar: escritor estreante, de país periférico, sem agente. O sinal precoce disso já está visível e é datável — a controvérsia do Commonwealth em maio de 2026, com acusação pública e sem método de arbitragem. Se até 2028 aparecerem três casos iguais em prêmios diferentes sem que nenhum tenha sido decidido por evidência, é este o cenário em curso.

## 10. O experimento

**A mesma história, dois leitores.** Um experimento de sala, de uma aula, com resultado mensurável.

**A pergunta que responde.** A personalização narrativa destrói a conversa sobre a obra? É a pergunta que sustenta a D2, que é a disrupção mais frágil e mais importante deste mapa — e é testável sem infraestrutura.

**Como se faz.** Divida a turma em duplas. Cada dupla recebe a mesma premissa de uma frase e gera, em ferramenta de novela visual por prompt (Mangobox ou equivalente), uma história curta — mas cada pessoa da dupla joga **sozinha**, fazendo suas próprias escolhas, sem ver a tela do colega. Tempo de jogo: 15 minutos. Depois, 10 minutos de conversa em dupla com uma única instrução: **discutam a história**. A conversa é gravada ou transcrita pelos próprios alunos.

**Tecnologia.** Um gerador de novela visual por prompt no plano gratuito ou Pro; nada além de navegador. Como grupo de controle, metade das duplas recebe uma novela visual curta pronta, feita em Ren'Py, idêntica para os dois — a condição "exemplar fixo".

**O que se mede.** Três coisas, contadas na transcrição: (1) quantos minutos a dupla leva para descobrir que leu coisas diferentes; (2) quantas afirmações da conversa são sobre o enredo e quantas são sobre a própria experiência de jogar ("na minha versão…"); (3) se a dupla consegue, ao final, formular uma frase sobre a obra com que as duas concordem. O controle dá a linha de base para os três números.

**Qual resultado mudaria a minha ideia.** Se as duplas da condição personalizada conversarem tão bem quanto as do controle — convergindo para uma frase comum em tempo parecido —, a D2 está errada no ponto em que é radical: a variação de superfície não impede o objeto comum, porque o comum estava no gerador e na premissa, não no texto. Todo o ramo e3 cai, e o mapa vira um mapa sobre custo e tradução. Se, ao contrário, a conversa personalizada virar duas narrações paralelas sem ponto de encontro, a D2 ganha evidência de uma aula — e a pergunta seguinte deixa de ser "se" e passa a ser o que se projeta para devolver o comum: canonizar um corte, compartilhar a semente, ou algo que ainda não existe.

## 11. Fontes

1. https://arxiv.org/abs/2312.00506 — Doshi & Hauser, "Generative artificial intelligence enhances creativity but reduces the diversity of novel content" (experimento com 293 escritores, três condições). Alta confiabilidade: preprint da versão publicada em *Science Advances* (2024), com dados abertos no Dryad. Sustenta o trade-off entre criatividade individual e diversidade coletiva.
2. https://fragwyz.substack.com/p/three-years-of-ai-on-steam — Sulka Haro, censo de 53.597 jogos da Steam (jul/2023–jul/2026): fatia com aviso de IA por ano, receita estimada, análise do texto das declarações. Confiabilidade média-alta: censo completo com método descrito e autor identificado da indústria, mas não revisado por pares e com receita estimada, não auditada.
3. https://www.pcgamer.com/gaming-industry/steam-week-in-review-take-cover-because-it-looks-like-more-than-half-of-steam-games-will-have-an-ai-disclosure-by-2027-2028/ — cobertura independente do mesmo conjunto de dados, com a projeção de ultrapassar metade dos lançamentos em 2027–2028. Confiabilidade média: imprensa especializada, útil como corroboração da leitura dos números.
4. https://github.com/HIllya51/LunaTranslator — repositório do tradutor de novela visual em tempo real: 13,3 mil estrelas, 1,1 mil forks, ~4.963 commits; hook de memória, OCR embutido, tradução por LLM ou offline, TTS, tradução embutida no jogo. Alta confiabilidade para o fato técnico: é o artefato em si.
5. https://mangobox.ai/ — produto que gera novela visual jogável a partir de uma frase (até cinco personagens, arte, cenário, ramificação); Pro a US$ 9/mês. Confiabilidade baixa-média: é material do próprio fornecedor, serve para estabelecer a oferta e o preço, não o desempenho.
6. https://www.thefp.com/p/ai-generated-literature-controversy — controvérsia do Commonwealth Short Story Prize 2026 (7.806 inscrições, 5 finalistas, júri de Louise Doughty, publicação na Granta), com acusação de autoria por IA, datada de 19/05/2026. Confiabilidade média: veículo com posição editorial marcada e texto integral atrás de paywall; os números de processo e o fato da acusação são verificáveis pelo trecho aberto.
7. https://edition.cnn.com/2026/01/23/tech/translation-language-jobs-ai-automation-intl — reportagem sobre perda de postos de tradução para automação, com o setor de jogos citado como epicentro da compressão de tarifas. Confiabilidade média-alta: imprensa internacional com fontes nomeadas; evidência qualitativa, não série estatística.
8. https://itch.io/t/4309690/generative-ai-disclosure-tagging — anúncio oficial da etiqueta de divulgação de IA na itch.io, declarativa e sem verificação pela plataforma. Alta confiabilidade: fonte primária da plataforma.
9. https://itch.io/docs/creators/quality-guidelines — diretrizes de qualidade da itch.io, que desencorajam projeto predominantemente gerado por algoritmo com intervenção humana mínima. Alta confiabilidade: documento normativo da própria plataforma.
10. https://arxiv.org/abs/2504.13868 — "Diverse AI Personas Can Mitigate the Homogenization Effect in Human-AI Collaborative Ideation" (300 enredos gerados por 10 personas, duas fases). Confiabilidade média-alta: preprint com versão em periódico; sustenta que a homogeneização depende da prática de uso, não é inerente.
11. https://arxiv.org/abs/2507.22445 — "AI-generated stories favour stability over change: homogeneity and cultural stereotyping in narratives generated by gpt-4o-mini". Confiabilidade média: preprint não revisado por pares, com método replicável; sustenta o viés de conservação temática na ficção gerada.
12. https://www.camara.leg.br/noticias/1092791-segmento-de-dublagem-pede-protecao-legal-contra-uso-de-voz-gerada-por-inteligencia-artificial/ — nota do Brasil: setor de dublagem pede proteção legal contra voz gerada por IA; tramita o PL 1376/22 exigindo dublagem e legendagem por profissionais residentes no país, e a proteção autoral brasileira pressupõe autor humano (Lei 9.610/98), de modo que obra puramente gerada tende a ficar sem proteção. Alta confiabilidade para o fato legislativo: fonte oficial da Câmara dos Deputados.

## 12. Anexo — o levantamento bruto

**A entrevista (etapa a).** Esta rodada foi executada sem interlocutor humano disponível; as cinco perguntas obrigatórias foram feitas e respondidas com o briefing recebido, transcrito aqui na íntegra:

1. *Horizonte de tempo:* 2031.
2. *Público-alvo:* quem projeta mídia e interação.
3. *Recorte geográfico:* global, com uma nota sobre o Brasil.
4. *Fora do escopo:* o que já é comum em produto de massa (a régua da disciplina). Nenhuma outra exclusão. Também foram excluídas as ideias que serviriam para qualquer tema — e onde isso não foi possível, o efeito ficou no mapa com a ressalva explícita na seção 7 (caso do e1).
5. *Viés desejado:* neutro. Nenhuma disrupção suspeita foi fornecida — a instrução foi descobrir.

Condição de mudança de ideia declarada pelo solicitante: evidência de que a adoção já passou da maioria inicial (Rogers), ou de que a tecnologia não rompe nada, apenas melhora o que existe. **Achado relevante contra o próprio mapa:** a fatia de 30,8% de lançamentos na Steam com aviso de IA em 2026 encosta na fronteira dos ~34% que separa a maioria inicial na curva de Rogers. Se o critério for "encostou em IA em algum ponto da produção", a tecnologia está deixando de ser emergente **neste sentido**. O que sustenta a execução é que o objeto deste mapa não é "usar IA na produção" — é o artefato narrativo inteiro gerado de uma intenção curta e a obra sem exemplar fixo, que continuam muito abaixo desse patamar. A distinção está registrada no filtro abaixo porque ela é o ponto mais frágil da decisão de executar.

**O filtro de maturidade (etapa b).** Avaliação explícita, com o critério da skill:

| Camada | Classificação | Razão |
|---|---|---|
| Engine de novela visual (Ren'Py, Monogatari), diálogo ramificado (YarnSpinner, Dialogic, Twine), parser (Inform 7), gerador de mapa | **Madura** | Infraestrutura consolidada, comunidade, documentação, décadas de uso. Excluída por decisão de escopo. |
| Autocompletar de texto na escrita | **Incremental** | Melhora processo existente sem quebrar modelo mental. Excluída. |
| Tradução automática como etapa de pipeline de localização | **Incremental** | Barateia etapa existente da cadeia. Excluída enquanto etapa; incluída na forma de camada de runtime, que é outra coisa. |
| Artefato narrativo completo a partir de intenção curta | **Disruptiva** | Destrói a cadeia de valor da produção (arte, roteiro, programação, voz como trabalhos separados) e cria mercado que não existia (US$ 9/mês por catálogo próprio). |
| Obra que se remonta por leitor | **Disruptiva** | Quebra o modelo mental do exemplar idêntico, sobre o qual se apoiam crítica, prêmio, citação e preservação. |
| Tradução sobreposta em tempo real | **Disruptiva** | Marginaliza um player estabelecido (a indústria de localização) e retira do detentor de direitos o controle sobre em que língua a obra é consumida. |

**Veredito:** três camadas disruptivas, execução autorizada, mapa gerado sobre elas.

**Caminhos abandonados.**
- *Geração de vídeo e imagem como mídia* (Pika, Luma, qualidade e autoria visual) — abandonado por ser o tema 12 da disciplina; entra aqui apenas como capacidade de pipeline, nunca como objeto.
- *Personagem que age dentro do mundo* (NPC agente) — abandonado por ser o tema 7, já mapeado nesta mesma série. A fronteira adotada: aqui o objeto é a história como coisa gerada, não o personagem como coisa que age.
- *Design procedural por regras* — abandonado por ser o tema 14. Geração procedural de conteúdo existe desde os anos 1980 e é madura; não é o que rompe.
- *Efeito sobre educação e detecção de plágio escolar* — abandonado por não ser mídia e interação, apesar de ser onde o volume de casos aparece primeiro.
- *Um quarto ramo sobre economia de plataformas de roleplay conversacional* (Character.AI e congêneres, ~20 milhões de usuários mensais) — abandonado porque o efeito principal ali é sobre vínculo afetivo e saúde mental, não sobre autoria; virou parágrafo da seção 3.

**O que a busca não encontrou e ficou como lacuna declarada.** Nenhuma fonte primária dos mercados japonês e chinês de novela visual, que são os maiores; nenhuma série estatística do mercado editorial sobre participação de obra gerativa, porque ninguém publica; nenhum dado de retenção ou satisfação em produto de narrativa personalizada, que é exatamente o que decidiria a D2. Os três números que sustentam este mapa (Steam, LunaTranslator, Doshi & Hauser) vêm de jogos e de laboratório — não de leitores.

**Divergência de metadado, registrada.** O campo `zona_de_interesse` foi preenchido com "Sistemas de Informação" por ser o valor literal fixado no formato de saída obrigatório da skill. A zona de interesse declarada pelo autor para esta rodada é "Simulação e mundos", a que o tema 8 pertence na disciplina. A skill foi seguida como escrita.
