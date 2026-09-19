---
tema: Máquinas que veem qualquer coisa — visão de vocabulário aberto
slug: maquinas-que-veem-qualquer-coisa-visao-de-vocabulario-aberto
autor_login: jlsn
zona_de_interesse: Sistemas de Informação
data: 2026-09-18
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: Global, com nota sobre o Brasil
disrupcoes_raiz: 3
efeitos_ordem_1: 9
efeitos_ordem_2: 9
efeitos_ordem_3: 9
tecnologias_citadas: ["SAM 3", "SAM 3.1", "Promptable Concept Segmentation", "SA-Co", "DINOv3", "Gram Anchoring", "Grounding DINO", "YOLO-World", "YOLOE", "RF-DETR", "Florence-2", "auto-rotulagem zero-shot", "OCR-free document understanding", "Donut", "DeepSeek-OCR", "PaddleOCR-VL", "dots.ocr", "Granite-Docling", "Qwen3-VL", "OmniDocBench", "Meta Ray-Ban Display", "Be My AI", "Smart Sampa"]
fontes: 12
confianca: media
experimento: O vocabulário que não existe
skill_usada: futurizacao-jlsn
publico_ok: false
---

## 1. Resumo

A visão computacional deixou de ter um vocabulário fechado. Até pouco tempo, uma câmera só reconhecia o que alguém pagou para rotular; hoje se segmenta, detecta e rastreia por frase nominal — "ônibus escolar amarelo" — e o modelo devolve máscara e identidade sem ter visto aquela classe no treino ([1], [3]). Três rupturas saem daí. A primeira é de interface: o conceito, em texto, virou o controle da percepção, e quem projeta mídia passa a escrever vocabulário em vez de treinar classificador. A segunda é de formato: o documento deixou de ser texto extraído e passou a ser imagem compreendida inteira, o que corrói o OCR, o formulário e a razão de ser do PDF como troca máquina-a-máquina ([5], [6]). A terceira é econômica: rotular, que era o gargalo e o fosso competitivo da área, caiu cerca de cinco ordens de grandeza em custo ([7]) — e o valor migrou de possuir dados para verificar saídas. O mapa inteiro depende de uma coisa só: se o vocabulário aberto sustentar o conceito raro. Hoje não sustenta — em LVIS, a auto-rotulagem despenca abaixo de 0,10 de mAP ([7]). Se isso não for resolvido até 2031, o que fica é uma demo excelente sobre um mundo que continua rodando com classe fixa.

## 2. O tema

Visão de vocabulário aberto é a capacidade de um sistema de visão operar sobre conceitos que não estavam no seu conjunto de treino, recebidos como linguagem no momento do uso. O deslocamento técnico é preciso e tem nome dado pelos próprios autores: do **apontar** para o **nomear**. SAM e SAM 2 segmentavam o que você apontava — um clique, uma caixa, um traço; SAM 3 introduz *Promptable Concept Segmentation*, em que o prompt é uma frase nominal curta, um exemplar de imagem, ou os dois juntos, e a saída é máscara **mais identidade de instância** para todas as ocorrências daquele conceito, em imagem e em vídeo ([1], [3]).

Ao lado disso corre uma segunda linhagem, que não usa linguagem nenhuma: modelos auto-supervisionados que aprendem representação densa sem rótulo, como o DINOv3, treinado em 1,7 bilhão de imagens com 7 bilhões de parâmetros e usável em segmentação, profundidade e rastreamento **sem fine-tuning** ([2]). Uma linhagem dá o *nome*; a outra dá a *forma* sem precisar de nome. Juntas, elas desmontam a premissa que organizava a área: a de que ver exige, antes, ensinar.

Onde isso encosta em mídia e interação. Primeiro, na interface: a câmera deixa de ser sensor e vira campo de consulta — pergunta-se ao vídeo, em linguagem, e ele responde com região. Segundo, na produção: recorte, rotoscopia, máscara e efeito por objeto, que eram trabalho de especialista quadro a quadro, passam a ser um substantivo digitado. Terceiro, no material: qualquer imagem existente — acervo, CFTV, foto pessoal, streaming — passa a ser consultável por conceito, o que converte arquivo em banco de dados sem que ninguém tenha estruturado nada.

Merece um mapa porque a mudança não é de acurácia, é de quem decide o que é visível. Num sistema de classe fixa, o vocabulário é uma decisão de engenharia, tomada uma vez, auditável, cara de mudar. Num sistema de vocabulário aberto, o vocabulário é digitado na hora, por qualquer um, sem registro — e é ele que determina o que a máquina enxerga no mundo.

## 3. Onde isso está hoje

**O que existe e funciona.** SAM 3 alcança 65,0 cgF1 no benchmark SA-Co/Gold contra 34,3 do OWLv2 — quase o dobro — e chega a 88% do limite inferior estimado do desempenho humano no mesmo teste (74,2 cgF1). Em zero-shot, marca 47,0 de mask AP em LVIS (contra 38,5 anterior) e 53,5 de box AP em COCO. Roda a 30 ms por imagem com mais de 100 objetos detectados numa H200 ([3]). O corpus que sustenta isso é o dado mais revelador do estado da arte: 5,2 milhões de imagens anotadas com 4 milhões de frases únicas, 52,5 mil vídeos, 1,4 bilhão de máscaras sintéticas, e um benchmark com 214 mil conceitos únicos — cinquenta vezes o vocabulário do LVIS ([3]). O vocabulário aberto não nasceu de elegância arquitetural; nasceu de um motor de dados industrial.

A linhagem já virou produto e já teve iteração de manutenção. Em 27 de março de 2026 a Meta publicou o SAM 3.1, substituto direto do SAM 3, cuja novidade é *object multiplexing*: até 16 objetos rastreados numa única passagem, o que dobrou a taxa de processamento de vídeo de 16 para 32 quadros por segundo numa única H100 — e, mais importante para o argumento, "reduz o requisito de GPU, tornando aplicações de alto desempenho viáveis em hardware menor e mais acessível". Os pesos estão no Hugging Face, o código no GitHub, e a tecnologia já opera em três produtos de massa: efeitos no Instagram Edits, *View in Room* no Facebook Marketplace e experiências no Meta AI ([4]).

Do lado sem linguagem, o DINOv3 fez algo que não tinha acontecido antes: um modelo treinado por auto-supervisão superou modelos com supervisão fraca numa faixa ampla de tarefas de sondagem, da classificação fina à segmentação semântica e ao rastreamento em vídeo. Escalou de 1 bilhão para 7 bilhões de parâmetros e de 142 milhões para 1,7 bilhão de imagens, e introduziu o *Gram Anchoring* para impedir que as características densas degradassem ao longo de treinos muito longos. Foi destilado em variantes ViT-S/B/L/H+ e ConvNeXt, o que cobre desde dispositivo restrito até servidor ([2]).

**O que existe e ainda não funciona.** Duas coisas, e as duas são estruturais.

A primeira é o conceito raro. O trabalho de auto-rotulagem verificada da Voxel51 mede isso com clareza incômoda: modelos fundacionais de vocabulário aberto (YOLO-World, YOLOE, Grounding DINO) atingem 90% a 95% do desempenho da anotação humana em cenários práticos — mAP50 de 0,768 contra 0,817 em PASCAL VOC, 0,538 contra 0,588 em COCO — e **desabam abaixo de 0,10 em LVIS**, o conjunto de vocabulário longo ([7]). Ou seja: o vocabulário aberto funciona muito bem no vocabulário comum, que é justamente onde o vocabulário fechado já funcionava. A promessa — ver o que ninguém rotulou — é exatamente onde a evidência é pior. Os próprios autores do SAM 3 declaram a limitação: desempenho reduzido em conceitos extremamente raros, dificuldade com expressões complexas sem acoplar um MLLM, e ambiguidade inerente em descritores como "janela pequena" ou "sala aconchegante" ([3]).

A segunda é o custo real fora do papel. Os 30 ms por imagem são numa H200. Na mesma documentação, numa RTX PRO 6000, o número medido é 2.921 ms por imagem — contra 8,4 ms de um detector especialista treinado para a tarefa ([3]). Entre a demo e o produto há três ordens de grandeza de latência e de conta de energia.

**Quem está construindo.** Meta (SAM 3/3.1, DINOv3, e os óculos que dão a esses modelos um corpo), IDEA Research (Grounding DINO), Roboflow (auto-rotulagem por VLM ligada a treino de RF-DETR, ou seja, o modelo aberto rotula e o modelo especialista entrega em produção — [8]), Voxel51 (verificação em escala), e, no eixo documental, uma frente aberta e barata: Nanonets-OCR2-3B, PaddleOCR-VL com 0,9 bilhão de parâmetros cobrindo 109 idiomas, dots.ocr, OlmOCR-2, Granite-Docling com apenas 258 milhões de parâmetros, DeepSeek-OCR, Chandra e Qwen3-VL — avaliados em OmniDocBench, OlmOCR-Bench e CC-OCR ([6]).

**No Brasil.** O vocabulário aberto chega a um país que já construiu a infraestrutura de câmera antes de construir a regra. O Smart Sampa tinha, em abril de 2026, 50 mil câmeras em São Paulo — 20 mil com reconhecimento facial e 30 mil privadas integradas ao sistema municipal — e contabilizava 3 mil foragidos presos em um ano e sete meses de operação, mais 202 desaparecidos localizados ([9], [10]). Do lado da regra, o PL 2338/2023 foi aprovado por unanimidade no Senado em dezembro de 2024 e seguia em tramitação na Câmara ao longo de 2026, com votação de plenário adiada ([11]). O ponto que interessa a este mapa: a infraestrutura instalada é biométrica, a regra em discussão fala de biometria, e a tecnologia que está chegando **não precisa de biometria** para achar uma pessoa — basta descrevê-la.

## 4. As disrupções-raiz

### 4.1 O conceito, escrito em texto, vira o controle da percepção

**O que rompe.** O paradigma de que um sistema de visão tem um vocabulário definido em tempo de projeto. Rompe três coisas juntas: o ciclo de desenvolvimento (coletar → rotular → treinar → validar → implantar deixa de ser pré-requisito para ver algo novo), a divisão de trabalho (quem define o que a máquina vê deixa de ser o engenheiro de ML e passa a ser quem escreve o prompt) e a auditabilidade (a lista de classes era um artefato inspecionável; a frase digitada não é).

**Por que agora e não há cinco anos.** Em 2021 existia CLIP, que alinhava imagem e texto, mas classificava a imagem inteira — não localizava. O que faltava era o par localização-conceito em escala, e ele não era obtenível por anotação humana: 4 milhões de frases únicas e 1,4 bilhão de máscaras não se anotam à mão. O que destravou foi o motor de dados em que o próprio modelo propõe e um verificador — parte humano, parte modelo — corrige, mais um detalhe arquitetural pequeno e decisivo: o *presence head*, que separa "reconhecer que este conceito existe na cena" de "localizar onde ele está". Foi esse desacoplamento que permitiu ao modelo dizer **não** — responder que o conceito pedido não está ali — que é a condição de possibilidade de uma consulta em linguagem ([1], [3]).

**O que falta acontecer.** Três coisas. (a) O conceito raro precisa sair de 0,10 em LVIS; sem isso, a promessa se reduz ao vocabulário que já existia ([7]). (b) A latência precisa cair de hardware de datacenter para hardware de borda — o SAM 3.1 move nessa direção, mas 32 fps numa H100 ainda não é um óculos ([4]). (c) Precisa aparecer alguma forma de registro do vocabulário usado: hoje, o que um sistema procurou não deixa rastro estruturado.

### 4.2 O documento deixa de ser texto extraído e vira imagem compreendida

**O que rompe.** A cadeia OCR → parser de layout → regra de extração → validação, que é a espinha dorsal de praticamente todo processamento documental corporativo e público. No lugar dela, uma única passagem de um modelo visão-linguagem que lê layout, texto e semântica juntos e devolve estrutura ([5], [6]). Rompe também a hipótese que sustenta o formulário: a de que é preciso pedir ao usuário que coloque cada informação num campo, porque a máquina não sabe achar sozinha.

**Por que agora.** O gargalo não era o reconhecimento de caractere — isso estava resolvido havia anos. Era o entendimento de estrutura: tabela dentro de célula, nota de rodapé, carimbo, formulário manuscrito, coluna quebrada. A fusão visão-linguagem resolveu isso ao tratar o documento como objeto visual único em vez de sequência de caixas de texto ([5]). E o que muda o cálculo econômico é o tamanho: Granite-Docling faz o trabalho com 258 milhões de parâmetros, PaddleOCR-VL cobre 109 idiomas com 0,9 bilhão ([6]) — modelos que cabem numa máquina comum, não numa fatura de nuvem.

**O que falta acontecer.** A garantia. Um OCR errado erra de modo tipograficamente visível — "RG 12345" vira "RG l2345". Um VLM erra de modo semanticamente plausível: preenche o campo com um valor que faz sentido e não estava no documento. Enquanto não existir verificação barata e amostragem auditável para esse tipo de erro, nenhum processo com consequência jurídica troca um pelo outro. É por isso que os serviços gerenciados de mercado hoje são híbridos — modelo fundacional mais revisão humana ([7]).

### 4.3 Rotular deixa de ser o gargalo econômico da visão

**O que rompe.** O fosso competitivo da década passada: o dataset proprietário. Se qualquer um consegue um conjunto rotulado sem pagar anotação, ter o conjunto deixa de ser vantagem.

**Por que agora.** Os números são grosseiros o suficiente para não depender de interpretação: rotular 3,4 milhões de objetos custou US$ 1,18 e pouco mais de uma hora numa GPU L40S, contra aproximadamente US$ 124 mil e cerca de 7 mil horas via anotação gerenciada — cerca de 100.000× mais barato e 5.000× mais rápido, com 90% a 95% do desempenho humano nos domínios comuns ([7]). O fluxo já é de prateleira: um VLM como o Florence-2 rotula, e um detector como o RF-DETR treina em cima e vai a produção ([8]).

**O que falta acontecer.** O mercado ainda não se reorganizou em torno disso — projeta-se crescimento de US$ 4,06 bilhões em 2026 para US$ 34,38 bilhões em 2035 no segmento de ferramentas de anotação, o que é incompatível com o colapso do preço unitário, a menos que o que cresça seja outra coisa: verificação, curadoria do raro e conformidade. A hipótese deste mapa é que é exatamente isso que vai acontecer, e que o nome "anotação" vai sobreviver ao desaparecimento da atividade que ele descrevia.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O conceito escrito vira o controle da percepção
    efeitos:
      - id: e1
        ordem: 1
        efeito: A acessibilidade visual deixa de ser legenda pronta e vira consulta ao mundo em tempo real
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A interface para quem não enxerga sai do aplicativo dedicado e passa a ser uma camada sobre qualquer câmera
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Norma de acessibilidade digital passa a exigir descrição dinâmica sob demanda, e o alt-text estático vira insuficiente por lei
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Vigilância por descrição textual dispensa galeria biométrica e sai do enquadramento legal de biometria
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: As regras escritas contra reconhecimento facial passam a não alcançar o sistema que encontra a mesma pessoa sem olhar o rosto
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Surge a categoria juridica de identificacao por atributo, e a descricao de uma pessoa passa a ser tratada como dado sensivel
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: Trabalho visual de inspeção, triagem e contagem passa a ser configurado por texto, sem dataset e sem treino
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: O dataset proprietário deixa de ser fosso competitivo e o valor migra para verificação e avaliação
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Aparece a função de escrever e auditar vocabulário, e a ambiguidade de um conceito vira passivo contratual
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: O documento deixa de ser texto extraído e vira imagem compreendida
    efeitos:
      - id: e4
        ordem: 1
        efeito: O formulário de campos perde a razão de existir e o usuário passa a enviar a foto do que tem
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Processos administrativos perdem a etapa de digitação e conferência, e o posto de trabalho correspondente some
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: O erro muda de natureza — sai do erro de digitação, visível e rastreável, e entra na alucinação plausível, silenciosa
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: O OCR deixa de ser produto e vira funcionalidade embutida de modelo visão-linguagem
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A verificação passa a ser o produto vendido, e não mais a extração
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Auditoria amostral de saída de modelo vira exigência de conformidade em processo documental regulado
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: O PDF deixa de ser formato de troca máquina-a-máquina e volta a ser apenas camada visual
        sinal: fraco
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O design gráfico do documento volta a ter consequência funcional, porque o layout é lido pela máquina
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Aparecem documentos adversariais, desenhados para que o leitor-máquina extraia algo diferente do que o humano lê
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: Rotular deixa de ser o gargalo econômico da visão
    efeitos:
      - id: e7
        ordem: 1
        efeito: Equipes pequenas passam a construir visão sob medida sem dataset e sem orçamento de anotação
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: A aplicação de visão vira commodity e o diferencial migra para quem tem acesso à câmera e ao contexto
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: O óculos vira a plataforma disputada, porque controlar o campo de visão passa a valer mais que controlar o modelo
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: Acervo de vídeo — CFTV, arquivo, streaming — vira índice consultável em linguagem natural
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Material audiovisual antigo vira base de dados pesquisável, e o direito de imagem passa a ser cobrado retroativamente
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Esquecer deixa de ser apagar arquivo e passa a ser remover de um índice conceitual que ninguém publicou
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: O mercado de anotação se bifurca — evapora no conceito comum, concentra no raro e no regulado
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: O conceito raro fica caro e concentrado, porque só quem paga a anotação do raro consegue vê-lo
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: Instala-se assimetria de percepção — quem financia enxerga o específico, o resto enxerga o genérico
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

**O que o bloco não consegue dizer.**

A roda sugere três cascatas paralelas. Não são. Elas se cruzam num ponto específico e é ali que está a parte interessante do mapa: **e2.1 e e8.1 são o mesmo evento visto de dois lados**. Vigilância por descrição textual e indexação conceitual de acervo são tecnicamente a mesma operação — segmentar por conceito num fluxo de vídeo — e diferem apenas em quem opera e sob que autorização. Isso significa que qualquer norma que restrinja uma restringe a outra, e qualquer capacidade construída para uma está construída para a outra. Um sistema de busca em arquivo jornalístico e um sistema de perseguição são, em 2031, o mesmo produto com dois contratos diferentes.

A roda também não consegue expressar a dependência assimétrica entre as disrupções. A 4.3 (custo de rotular) é parcialmente **filha** da 4.1 (conceito como interface), não irmã dela: a auto-rotulagem barata funciona porque os modelos de vocabulário aberto existem. Mantive as duas separadas porque a consequência econômica tem dinâmica própria — o colapso do preço da anotação reorganiza um setor inteiro mesmo que o vocabulário aberto nunca chegue ao conceito raro, já que o que ele automatiza é o rótulo comum. Mas quem ler o mapa como três apostas independentes vai superestimar a robustez dele. São, no fundo, duas apostas e meia.

Terceiro: os prazos do ramo documental (e4, e6) são os menos confiáveis do mapa, e não por razão técnica. A tecnologia está pronta agora; o que não está pronto é a burocracia que consome documento. O formulário não existe porque a máquina não sabe ler — existe porque alguém é responsável pelo campo preenchido. Enquanto a responsabilidade tiver dono nominal, o campo sobrevive à tecnologia que o tornou desnecessário.

## 6. Sinais fracos e wildcards

**O presence head como sinal fraco de projeto.** O detalhe arquitetural mais citado do SAM 3 é o desacoplamento entre reconhecer e localizar ([1], [3]). Traduzido para interface: pela primeira vez um sistema de visão tem um mecanismo dedicado a dizer "isto não está aqui". Toda a interação com visão computacional até hoje foi construída sobre o pressuposto de que o sistema sempre devolve alguma coisa. Um sistema que recusa muda o gênero da interação — de detecção para diálogo.

**ORTHOS, ou a fronteira entre ver e sentir.** A extensão que simula e visualiza resposta emocional a manchetes, apoiada em modelo da Meta, é um sinal fraco de segunda ordem: ela usa a maquinaria da percepção não para descrever o que está na imagem, mas para prever o que acontece **em quem olha**. Se essa linha amadurecer, o objeto da visão computacional deixa de ser a cena e passa a ser o espectador — e a mesma infraestrutura que hoje conta caixas num galpão passa a medir reação em vitrine, em sala de aula e em campanha.

**A queda de requisito de hardware como sinal subestimado.** O anúncio do SAM 3.1 não é sobre qualidade: é sobre reduzir a conta de GPU e viabilizar hardware menor ([4]). Historicamente, é esse tipo de notícia — e não o salto de acurácia — que antecede a difusão. Vale mais como indicador de adoção do que qualquer benchmark.

**O acervo brasileiro como sinal fraco local.** Trinta mil das 50 mil câmeras do Smart Sampa são privadas, integradas ao sistema municipal ([9], [10]). O que está instalado não é uma rede pública de vigilância: é uma federação de acervos privados sob coordenação pública. Vocabulário aberto aplicado a esse arranjo não cria capacidade nova de captura — cria capacidade nova de **consulta** sobre uma captura que já vem acontecendo há anos, sem que a regra de uso tenha sido escrita para consulta.

**Wildcard 1 — segmentação contínua em óculos de consumo, com registro do campo de visão.** Baixa probabilidade até 2031, alto impacto. Hoje os óculos Meta fazem reconhecimento visual com processamento majoritariamente conectado ao telefone e à nuvem, com perguntas contínuas sobre o que se vê, tradução de placas e menus, leitura de QR, e memória visual de curto prazo ([12]). Se a rotulagem contínua do campo de visão passar a rodar localmente e a ser gravada, cada usuário vira um sensor de vocabulário aberto sobre o espaço público, e a pergunta "o que é privado numa foto" perde o objeto: não haverá foto, haverá índice. O gatilho a vigiar não é o lançamento de um óculos — é o dia em que a transcrição do campo de visão for oferecida como funcionalidade de produtividade.

**Wildcard 2 — equiparação jurídica da busca por descrição à biometria.** Baixa probabilidade, altíssimo impacto de curto prazo. O artigo 5 do AI Act europeu proíbe identificação biométrica remota em tempo real em espaço público para fins de polícia, com exceções estritas, e multas de até €35 milhões ou 7% do faturamento global ([11] para o caso brasileiro; para o europeu, ver a análise do próprio texto legal). Se uma autoridade decidir que encontrar uma pessoa por descrição de aparência é identificação remota por equiparação — e o argumento é defensável, já que o resultado é idêntico —, uma classe inteira de produtos de vocabulário aberto fica ilegal na Europa de uma semana para outra, sem que uma linha de código tenha mudado.

**Wildcard 3 — o documento adversarial.** Quando o leitor de documento for um modelo visão-linguagem, o layout vira superfície de ataque: texto em contraste imperceptível ao olho humano, instrução embutida como elemento gráfico, tabela desenhada para ser lida de outro jeito pela máquina. O equivalente documental do prompt injection, com a diferença de que a vítima é um processo administrativo e a evidência é visualmente inocente.

## 7. Contra o próprio mapa

**Qual efeito é apenas extrapolação linear do presente.** O ramo e3 → e3.1 (trabalho visual configurado por texto → dataset deixa de ser fosso) é a curva de custo de rotulagem prolongada para a frente e chamada de ruptura. É o efeito mais previsível do mapa e o menos informativo: dizer que algo que ficou 100.000× mais barato vai ser mais usado não exige um mapa de futuros. Pior: ele assume que o custo de anotação era o principal obstáculo à automação do trabalho visual, e isso é falso na maioria dos casos reais — o obstáculo costuma ser integração com o processo, responsabilidade pelo erro e taxa de falso negativo tolerada, nenhum dos quais barateou. Um galpão não deixa de contratar inspetor porque o modelo ficou barato; deixa quando alguém assume o prejuízo do que o modelo não viu.

**Qual efeito assume velocidade de adoção irreal.** Os efeitos e4 (fim do formulário) e e6 (fim do PDF como formato de troca) em cinco anos. A tecnologia está disponível hoje, e isso é justamente o que torna a previsão suspeita: ela confunde disponibilidade com adoção. Sistemas administrativos públicos e financeiros são as camadas mais lentas do mundo digital; há formulário em produção mais velho que a web. O prazo honesto para e4 não é 2029 em geral, é 2029 **em canal digital novo, de baixo risco jurídico** — e provavelmente depois de 2035 em processo com efeito legal. Deixei os prazos como estão no bloco YAML porque a autocrítica pede que a fragilidade fique registrada, não apagada; o leitor deve descontar e4 e e6 em pelo menos meia década.

**Qual disrupção-raiz pode não se concretizar e derrubar o mapa inteiro.** A 4.1, e a evidência contra já está neste documento. Se o vocabulário aberto não resolver o conceito raro, ele não rompeu nada: entregou, com um custo computacional três ordens de grandeza maior ([3]), o mesmo que um detector de classe fixa entregava — porque o vocabulário comum é exatamente o vocabulário que já estava resolvido. O número que sustenta essa dúvida é o desempenho abaixo de 0,10 em LVIS ([7]), o único benchmark da lista construído para medir cauda longa. Nesse cenário, o vocabulário aberto vira o que muitas tecnologias viraram: uma excelente ferramenta de prototipagem e rotulagem — ou seja, um insumo da disrupção 4.3, e não uma disrupção por direito próprio. Como duas das três raízes deste mapa dependem dela (e a terceira é parcialmente sua consequência), o mapa inteiro cai com ela. Pelo critério declarado na entrevista — "evidência de que a tecnologia não rompe nada, só melhora o que existe" —, este é o achado que mais se aproxima de reprovar o próprio tema, e ele está registrado aqui e não escondido na seção 3.

**Qual foi o viés da análise.** Três, todos na mesma direção.

O primeiro é de fonte. Sete das doze fontes são de quem vende a tecnologia ou ganha com a narrativa dela: Meta publica o modelo e o blog, Roboflow e Voxel51 vendem ferramentas de auto-rotulagem, Extend vende processamento documental por VLM. A comparação "100.000× mais barato" vem de uma empresa cujo produto é auto-rotulagem verificada ([7]) — o que não invalida os números, que são detalhados e incluem o resultado ruim em LVIS, mas significa que o enquadramento é deles. Não encontrei, nesta rodada, avaliação independente de terceiro sobre custo total de propriedade em produção.

O segundo é geográfico. Toda a evidência técnica é do Norte global, e o recorte pedia nota sobre o Brasil. O que consegui ancorar no Brasil é infraestrutura de vigilância e estado de regulação ([9], [10], [11]) — nada sobre desempenho de vocabulário aberto em conceitos brasileiros, que é precisamente a pergunta da cauda longa. Esse vazio é a razão de o experimento da seção 10 ser o que é.

O terceiro é temporal e afeta a régua da disciplina. O enunciado manda descartar o que já é comum em produto de massa. SAM 3.1 já opera em Instagram Edits e Facebook Marketplace ([4]), o que, pela régua literal, empurraria a tecnologia para fora do escopo. Mantive o tema porque o que está em produto de massa é o **uso assistivo de recorte** — segmentar um sofá para colocá-lo na sala —, e não a consulta conceitual aberta sobre o mundo, que é o objeto deste mapa. Mas o julgamento é meu, é discutível, e alguém que aplicasse a régua com mais rigor recusaria o tema na etapa (b).

## 8. O que a máquina errou

<!-- Seção reservada ao usuário. Preencher após a leitura crítica em aula. -->

## 9. Três cenários para 2031

* **Provável:** o vocabulário aberto se instala como camada de prototipagem, rotulagem e consulta, e não como camada de produção. O fluxo dominante é híbrido: o modelo aberto define o conceito e rotula, um modelo especialista pequeno roda em produção e um verificador amostra a saída. O OCR desaparece como categoria de produto e reaparece dentro de VLMs pequenos, com o formulário sobrevivendo onde há responsabilidade jurídica pelo campo e morrendo onde não há. A vigilância por descrição opera em zona cinzenta em vários países, inclusive no Brasil, porque a regra escrita fala de biometria e a prática não usa biometria. O conceito raro continua caro, e quem paga por ele — segurança pública, seguradoras, agronegócio, defesa — enxerga um mundo mais detalhado que o resto.

* **Desejável:** o vocabulário aberto entrega o que prometeu na acessibilidade — descrição sob demanda, em português, funcionando em dispositivo comum, para as 900 mil pessoas cegas e de baixa visão que já usam ferramentas do tipo e para quem ainda não usa ([12] como sinal de mercado; Be My AI como precedente) — e a cauda longa vira bem público em vez de ativo privado. Para isso acontecer é preciso: (a) benchmark aberto de conceitos locais, mantido por instituição pública, para que "mototáxi com baú" e "fiação emaranhada" não dependam de quem tem orçamento de anotação; (b) obrigação de registro do vocabulário consultado em sistema de vigilância, o equivalente ao log de quem consultou qual base — sem isso não há auditoria possível; (c) que o modelo pequeno e local, do tipo Granite-Docling com 258 milhões de parâmetros ([6]), prevaleça sobre a chamada de nuvem, porque é o que mantém a percepção fora da conta de terceiro. Nada disso é técnico: os três são decisões de política e de compra.

* **Indesejável:** a consulta conceitual sobre acervo se generaliza antes de qualquer regra, e o resultado é um regime de busca sobre pessoas — não de reconhecimento, de **busca** — em que qualquer descrição de aparência, roupa, comportamento ou companhia devolve trajetória. O Brasil chega lá primeiro pela via da infraestrutura já instalada e da regra ainda em tramitação ([9], [10], [11]). O sinal precoce a vigiar é bem específico e aparece em edital, não em notícia: **o dia em que uma licitação de videomonitoramento pedir "busca por atributo", "busca semântica em vídeo" ou "consulta em linguagem natural" em vez de "reconhecimento facial"**. Quando essa expressão entrar no termo de referência, a capacidade estará contratada e o debate sobre biometria terá ficado obsoleto sem nunca ter sido concluído.

## 10. O experimento

**Nome:** O vocabulário que não existe.

**A pergunta que responde.** O vocabulário aberto enxerga conceitos que ninguém rotulou — ou só enxerga bem os conceitos que já estavam nos datasets ocidentais? É a pergunta que decide se a disrupção-raiz 4.1 é real ou é reembalagem, e é a única do mapa que uma turma pode responder empiricamente numa aula.

**Como funciona.** A turma monta, antes da aula, um conjunto de 60 a 100 fotos tiradas com celular no Recife, cobrindo dez conceitos deliberadamente ausentes de COCO e LVIS e imediatamente óbvios para qualquer brasileiro: gato de energia, puxadinho, mototáxi com baú, caixa d'água de fibra em laje, fiação emaranhada em poste, carroça de reciclagem, banca de coco, buraco de rua com sinalização improvisada, grade de janela residencial, calçada com desnível. Cada foto recebe anotação humana feita por dois alunos independentes — é daí que sai a concordância humana, que é o teto real do teste. Em seguida rodam-se os modelos: SAM 3 ou SAM 3.1 por frase nominal ([3], [4]) e Grounding DINO como segundo ponto de comparação ([7]), com o prompt escrito em três variantes por conceito — em português, em inglês, e em paráfrase descritiva sem o nome local ("fio elétrico ligado irregularmente ao poste"). Mede-se IoU contra a anotação humana, a taxa de falso positivo e — o dado mais interessante — quanto a paráfrase descritiva recupera do que o nome local não recupera.

**Tecnologia.** SAM 3.1 pelos pesos abertos no Hugging Face e código no GitHub ([4]); Grounding DINO; `supervision` para métricas e visualização; CVAT ou Label Studio para a anotação humana, usados aqui como régua e não como ferramenta de produção — o que é, por si, um comentário sobre a tese de que o vocabulário aberto dispensa anotação. Uma GPU de nuvem por algumas horas basta; a latência de 2.921 ms por imagem em placa comum ([3]) torna isso viável mesmo sem hardware de datacenter, já que o conjunto é pequeno.

**O que a turma faz em sala.** Duas rodadas de quinze minutos. Na primeira, cada dupla escreve, às cegas, o prompt que acha que vai funcionar para o seu conceito, e roda. Na segunda, vê os prompts das outras duplas e reescreve. A diferença entre as duas rodadas mede uma coisa que nenhum benchmark mede: quanto do desempenho do vocabulário aberto é do modelo e quanto é da habilidade de quem escreve o conceito. Se a segunda rodada melhorar muito, o "vocabulário aberto" é, na prática, uma nova competência profissional mal distribuída — o que reforça e3.1.1 e enfraquece a promessa de democratização.

**Qual resultado mudaria minha ideia.** Se o IoU médio nos dez conceitos locais ficar dentro de 10% do que os mesmos modelos obtêm em conceitos de COCO, a tese da cauda longa deste mapa está errada: o vocabulário aberto generaliza para o não rotulado, o resultado ruim em LVIS ([7]) é artefato de benchmark, e a disrupção-raiz 4.1 se confirma — o que valida o mapa e derruba a principal ressalva da seção 7. Se a paráfrase descritiva funcionar muito melhor que o nome local, a conclusão é diferente e mais interessante: o modelo vê o objeto, mas não conhece a palavra, e o que falta não é percepção, é léxico — o que desloca o gargalo de pesquisa de visão para linguagem, e transforma "ensinar o nome" numa tarefa barata que qualquer comunidade pode fazer. E se ambos falharem, o mapa perde a raiz 4.1 e o que sobra é a 4.3: uma ferramenta de rotulagem muito boa, que é bem menos do que "a máquina passou a ver o que se pede".

## 11. Fontes

1. https://arxiv.org/abs/2511.16719 — Artigo original "SAM 3: Segment Anything with Concepts" (Meta Superintelligence Labs), submetido em 20/11/2025, revisado em 28/03/2026. Sustenta a definição de *Promptable Concept Segmentation*, a arquitetura com detector de imagem e rastreador de vídeo em backbone único, o *presence head* e o corpus de 4M de rótulos conceituais. Alta confiabilidade: fonte primária, pré-print com código e benchmark abertos; ressalva de ser publicação do próprio fabricante.
2. https://arxiv.org/abs/2508.10104 — "DINOv3" (Meta AI). Sustenta a linhagem auto-supervisionada, os 7B de parâmetros, os 1,7B de imagens, o *Gram Anchoring* e o fato de um modelo SSL superar modelos de supervisão fraca em tarefas de sondagem. Alta confiabilidade, mesma ressalva de origem.
3. https://docs.ultralytics.com/models/sam-3 — Documentação técnica com os números comparativos do SAM 3: 65,0 cgF1 em SA-Co/Gold contra 34,3 do OWLv2, 47,0 mask AP em LVIS zero-shot, 30 ms/imagem em H200 e 2.921 ms/imagem em RTX PRO 6000, escala do SA-Co (5,2M imagens, 214K conceitos) e limitações declaradas. Confiabilidade média-alta: terceiro independente da Meta, mas comercialmente interessado em modelos de visão; números conferem com o artigo original.
4. https://ai.meta.com/blog/segment-anything-model-3/ — Anúncio do SAM 3.1 (27/03/2026): *object multiplexing* com até 16 objetos por passagem, 16 → 32 fps em H100, redução de requisito de GPU, pesos no Hugging Face, uso em Instagram Edits, Facebook Marketplace e Meta AI. Sustenta o argumento de difusão e de queda de hardware. Confiabilidade média: comunicação institucional do fabricante.
5. https://www.extend.ai/resources/ocr-and-ai-vision-language-models-replacing-text-recognition — Análise (agosto/2026) do deslocamento de pipelines OCR para VLMs, com o argumento de leitura holística em passagem única. Confiabilidade baixa-média: fornecedor da tecnologia que descreve; usado apenas para o enquadramento conceitual, não para números.
6. https://huggingface.co/blog/ocr-open-models — Panorama de oito modelos OCR/VLM abertos com tamanhos e cobertura de idiomas (PaddleOCR-VL 0,9B/109 idiomas, Granite-Docling 258M, DeepSeek-OCR, dots.ocr, Qwen3-VL) e os benchmarks OmniDocBench, OlmOCR-Bench e CC-OCR. Confiabilidade alta para o levantamento de modelos e escalas; plataforma neutra quanto a fornecedor.
7. https://voxel51.com/blog/zero-shot-auto-labeling-rivals-human-performance — Benchmark de auto-rotulagem verificada: US$ 1,18 e ~1h para 3,4M de objetos contra ~US$ 124.092 e ~7.000h, 90–95% do desempenho humano em VOC e COCO, e queda abaixo de 0,10 em LVIS. É a fonte que sustenta tanto a disrupção 4.3 quanto a principal evidência **contra** o mapa. Confiabilidade média: fornecedor interessado, mas publica o resultado desfavorável, o que aumenta a credibilidade dos números.
8. https://blog.roboflow.com/zero-shot-auto-labeling-with-vlms/ — Fluxo prático de auto-rotulagem por VLM (Florence-2) alimentando treino de RF-DETR para produção. Sustenta a existência do caminho híbrido como prática corrente, não como proposta. Confiabilidade média, fornecedor.
9. https://www.band.com.br/radio-bandeirantes/noticias/smart-sampa-atinge-3-mil-foragidos-presos-com-cameras-inteligentes-202604141155 — Matéria de 14/04/2026 com os números do Smart Sampa: 3.000 foragidos presos desde setembro de 2024, 50 mil câmeras (20 mil com reconhecimento facial, 30 mil privadas integradas), 202 desaparecidos localizados, distribuição por zona. Confiabilidade média: imprensa, reproduzindo balanço da prefeitura; os números são do operador do sistema.
10. https://smartsampa.prefeitura.sp.gov.br/ — Portal oficial do programa. Fonte primária da existência, escopo e comunicação oficial do sistema. Alta confiabilidade quanto ao que o programa declara ser; nenhuma quanto a avaliação independente de erro.
11. https://www25.senado.leg.br/web/atividade/materias/-/materia/157233 — Ficha de tramitação do PL 2338/2023 no Senado Federal (aprovado em 10/12/2024, seguindo para a Câmara). Fonte primária do estado da regulação brasileira de IA e da moldura de risco proposta. Alta confiabilidade.
12. https://www.meta.com/ai-glasses/meta-ray-ban-display/ — Página de produto do Meta Ray-Ban Display: assistente com respostas visuais em tempo real, tradução de placas e menus no display, navegação guiada. Sustenta o wildcard dos óculos e o estado atual (processamento conectado, não local). Confiabilidade média: material de produto; usado para capacidade anunciada, não para desempenho medido.

## 12. Anexo — o levantamento bruto

### A entrevista (etapa a)

Esta execução ocorreu em rodada automatizada, sem interlocutor humano disponível. As cinco perguntas obrigatórias da etapa (a) foram feitas e respondidas a partir do pacote de respostas fornecido pelo enunciado da rodada, registrado aqui na íntegra:

1. **Horizonte de tempo.** 2031.
2. **Público-alvo.** Quem projeta mídia e interação.
3. **Recorte geográfico.** Global, com uma nota sobre o Brasil.
4. **Fora do escopo.** O que já é comum em produto de massa (régua da disciplina). Nenhuma outra exclusão. Ideias óbvias que servissem a qualquer tema deveriam ser excluídas.
5. **Viés desejado.** Neutro. Sem disrupção suspeita pré-definida — a instrução foi descobrir.

Critério declarado de mudança de ideia, fornecido pelo enunciado: evidência de que a adoção já passou da maioria inicial (Rogers), ou de que a tecnologia não rompe nada, apenas melhora o que existe. Profundidade: três ordens. Modo: a partir de uma inovação/tema, não de um setor.

### O filtro de maturidade (etapa b)

Avaliação pelo critério da skill — maduro tem infraestrutura consolidada e mercado estabelecido; incremental melhora processo existente; disruptivo rompe paradigma ou modelo mental, criando ou destruindo mercado.

**Veredito: disruptivo, com ressalva declarada.** O que rompe é um modelo mental explícito e de longa data — "um sistema de visão reconhece o que foi treinado para reconhecer". A transição de *apontar* para *nomear* ([1]) não é ganho de acurácia sobre a tarefa antiga: muda quem define o vocabulário, quando, e sem registro. Há destruição de mercado identificável (OCR como categoria de produto, anotação manual como serviço) e criação de outro (verificação, curadoria de cauda longa).

**A ressalva, registrada porque quase inverteu o veredito.** Duas evidências empurram o tema para "incremental": (i) SAM 3.1 já está em produto de massa — Instagram Edits e Facebook Marketplace ([4]) —, o que pela régua literal da disciplina o excluiria do escopo; (ii) o desempenho na cauda longa é ruim ([7]), e se o vocabulário aberto só funciona bem no vocabulário que já era coberto por classe fixa, ele melhora o processo sem romper o paradigma. A decisão de prosseguir foi tomada por dois motivos: o que está em produto de massa é o recorte assistivo, não a consulta conceitual aberta sobre o mundo; e a evidência contrária, em vez de ser omitida, foi promovida a eixo da seção 7 e a objeto do experimento da seção 10. Um executor mais rigoroso teria recusado o tema nesta etapa, e esse desacordo fica registrado.

### A autocrítica (etapa c)

Conduzida antes da formatação, conforme a skill. As três obrigações da etapa alimentaram a seção 7: efeito linear identificado (e3 → e3.1); velocidade de adoção irreal identificada (e4 e e6, com desconto recomendado de meia década); disrupção que pode derrubar o mapa identificada (4.1, com o número de LVIS como evidência contrária). Os prazos do bloco YAML foram deliberadamente **mantidos** como gerados, e não corrigidos pela autocrítica, para que a discrepância entre o que o mapa projeta e o que a crítica desconta fique visível ao leitor — corrigir em silêncio apagaria o achado.

### Caminhos abandonados

- **Reconstrução 3D e robótica.** Excluídos por fronteira explícita do enunciado: reconstrução é o tema 10, o robô que age sobre a visão é o tema 9. O que ficou aqui foi só a percepção aberta.
- **Reconhecimento facial como eixo central.** Abandonado deliberadamente. Seria o caminho óbvio e é o que a discussão pública já ocupa; o achado mais específico deste mapa é justamente que a busca por descrição **contorna** o enquadramento de biometria, e centrar em rosto teria escondido isso.
- **Mercado de anotação como tema econômico principal.** Recuado a disrupção-raiz 4.3 depois de constatar que ele é, em boa parte, consequência de 4.1. A dependência está declarada na prosa da seção 5.
- **Caso jornalístico sobre erros do Smart Sampa (AFP, março/2026).** A reportagem sobre prisões de inocentes pelo sistema paulistano foi localizada em busca, mas a URL retornou HTTP 403 na verificação e o conteúdo não foi aberto. Pela instrução da rodada — só citar o que foi aberto —, a fonte foi descartada e o argumento sobre falso positivo no Brasil ficou sem ancoragem documental. É uma lacuna conhecida deste mapa.
- **Números de adoção de Be My AI.** Encontrados em busca, não confirmados por abertura de fonte primária; a menção na seção 9 é qualitativa e o dado quantitativo foi retirado da contagem de fontes.

### Divergência de metadado, declarada

O campo `zona_de_interesse` do cabeçalho traz **Sistemas de Informação**, enquanto o enunciado desta rodada informa a zona de interesse do autor como "Percepção e mídia sintética". A divergência é intencional: o formato de saída obrigatório da skill `futurizacao-jlsn` fixa aquele valor como literal, sem campo variável, e a instrução da rodada manda executar a skill exatamente como ela está escrita, sem melhorá-la. Corrigir o campo faria o artefato deixar de ser a skill do aluno. O registro aqui cumpre a regra de não deixar a divergência passar por descuido.

### Verificação das fontes

Todas as doze URLs da seção 11 foram testadas com requisição HTTP seguindo redirecionamentos, e todas retornaram **200**. Uma décima terceira candidata (Malay Mail / AFP, sobre falsos positivos no Smart Sampa) retornou **403** e foi descartada, conforme registrado acima. Nenhuma fonte foi citada sem ter sido aberta.
