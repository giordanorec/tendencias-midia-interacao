---
tema: Mídia sintética controlável - vídeo e imagem
slug: midia-sintetica-controlavel-video-e-imagem
autor_login: kvv
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-15
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 12
efeitos_ordem_3: 18
tecnologias_citadas: [edição de vídeo in-context (Runway Aleph), condicionamento estrutural por adaptador (IC-LoRA - pose, profundidade, mapa de bordas), geração autoregressiva visual por escala (VAR), grafo de nós como pipeline de produção (ComfyUI), animação como máquina de estados com data binding e eventos (Rive), modelos de vídeo de pesos abertos rodando local (Wan 2.2, LTX-2.3, HunyuanVideo 1.5), procedência criptográfica de mídia (C2PA / Content Credentials), rotulagem obrigatória de conteúdo sintético (resoluções do TSE)]
fontes: 13
confianca: media
experimento: Uma "oficina de contestação" em que a turma edita o mesmo plano por três caminhos de controle diferentes, assina tudo com credencial de procedência e depois tenta derrubar o trabalho alheio como prova.
skill_usada: futurizacao-kvv
publico_ok: false
---

## Seção 1 — Resumo

Vídeo por prompt já é loteria resolvida: o problema deixou de ser produzir e passou a ser **dirigir**. Este mapa sustenta que a ruptura em curso não está na qualidade do quadro, e sim no deslocamento da unidade de trabalho — do clipe inteiro para a **região dentro do clipe**, do render final para o **grafo que o produziu**, do arquivo linear para a **máquina de estados que responde a evento**. Daí saem três consequências que a conversa pública ainda não organizou: o corte deixa de ser o átomo da montagem, porque se edita dentro do plano; a porta de entrada da profissão audiovisual — roto, in-between, clean-up — fecha, e com ela o degrau onde se aprendia o ofício; e a prova em vídeo perde a presunção de veracidade antes que exista infraestrutura confiável de procedência para substituí-la. Até 2031 o gargalo não será gerar, nem controlar: será **julgar** — escolher entre mil saídas corretas e conseguir provar, depois, o que se escolheu.

## Seção 2 — O tema

Mídia sintética controlável é a capacidade de dirigir a geração de imagem e vídeo por sinais que não são texto: uma região do quadro, um quadro-chave pintado à mão, um esqueleto de pose, um mapa de profundidade, um movimento de câmera, uma regra procedural, um grafo de nós, uma máquina de estados. A literatura já tem nome e taxonomia para isso — a área se organiza em geração por condição única, por múltiplas condições e por controle universal, e a premissa declarada do campo é que "prompts de texto sozinhos são frequentemente insuficientes para expressar requisitos complexos, multimodais e de granularidade fina do usuário" [1]. O tema, portanto, não é *gerar vídeo*: é a camada de instrumentos que transforma um gerador em uma ferramenta de ofício.

Os pontos de contato com mídia e interação são três, e nenhum é decorativo. **Primeiro, a interface de autoria**: quando a edição passa a ser instruída em linguagem sobre um material existente — "remova o carro", "hora dourada", "de cima" [3] — a linha do tempo deixa de ser o lugar onde o trabalho acontece, e o software de edição perde a centralidade que teve por trinta anos. **Segundo, a fronteira entre peça e produto**: uma animação que é máquina de estados com entradas, transições, ouvintes de clique e eventos que avisam o código [4] não é um vídeo que toca — é um componente de interface que também é imagem em movimento. **Terceiro, a evidência**: a mesma facilidade que dá ao autor o controle fino dá ao falsário o controle fino, e isso já está dentro de tribunais [6] e de resoluções eleitorais [11].

Por que isto exige mapa prospectivo e não levantamento de estado da arte: o estado da arte aqui é público, datado e fácil de listar — papers, changelogs, pesos abertos, benchmarks. O que não existe ainda é a **arquitetura institucional** para uma capacidade já distribuída: não há convenção sobre o que se entrega quando se entrega um filme feito em grafo, não há norma sobre o que um vídeo precisa carregar para ser aceito como prova, não há caminho de formação para quem entra numa profissão cujo degrau de baixo foi automatizado. Essas perguntas não se respondem listando modelos; respondem-se encadeando efeitos, que é o que a Roda dos Futuros faz.

## Seção 3 — Onde isso está hoje

**O que funciona.** A edição in-context é real e comercial: a Runway lançou o Aleph em 25 de julho de 2025 como "um modelo de vídeo in-context de estado da arte", capaz de adicionar, remover e transformar objetos, gerar novos ângulos de uma cena e alterar estilo e iluminação sobre material filmado, disponível para todos os usuários pagos [3]. O condicionamento estrutural chegou aos pesos abertos: o LTX-2.3, publicado pela Lightricks em 5 de março de 2026, aceita adaptadores IC-LoRA com condicionamento por pose, profundidade e mapa de bordas, e a família de modelos abertos que roda em máquina local vai de 8 GB de VRAM (Wan 2.2, Apache 2.0, 29 de julho de 2025) a 16–32 GB (LTX-2.3, 22 bilhões de parâmetros) [12]. O grafo de nós virou infraestrutura de produção, não brinquedo de entusiasta: cada fluxo do ComfyUI é um grafo acíclico dirigido codificado em JSON e embutido como metadado do PNG, o projeto acumula 106 mil estrelas no GitHub, e há vagas nomeadas exigindo-o em estúdios de pós e produção — AGBO, Harbor, Sawhorse, Magnopus —, além da campanha "Holidays Are Coming" da Coca-Cola construída nele [13]. E a animação com estado é produto maduro: o Rive entrega máquinas de estado ("crie interatividade visualmente usando animações como estados"), transições com condições, ouvintes que fazem o gráfico responder a hover, clique e toque, *data binding*, eventos que "avisam o código em runtime que algo relevante aconteceu", com runtimes para web, React, React Native, Flutter, Unity, Unreal, iOS, Android, macOS e visionOS [4].

**O que falha, e falha feio.** A promessa de controle convive com um processo que quem faz descreve como jogo de azar. O *Hell Grind*, apresentado como primeiro longa inteiramente gerado por IA, custou US$ 500 mil — cerca de 80% disso em computação —, foi feito em duas semanas por uma equipe de 15 pessoas gerando e refinando clipes de 15 segundos, com prompts que chegavam a 3.000 palavras e incluíam lembretes ao modelo para respeitar a física e evitar "aparência de IA"; o CEO da empresa descreveu o processo como tendo "a sensação de uma máquina caça-níqueis" [8]. Três mil palavras de prompt e lembrete de física não são controle: são negociação. Do lado dos pesos abertos, o levantamento de modelos disponíveis registra **nenhum mecanismo de controle de câmera** para qualquer um deles, e controle estrutural documentado só no LTX-2.3 [12] — ou seja, o que a literatura chama de "geração controlável universal" [1] ainda não desceu para o que se pode rodar em casa. E há o problema de fundo que nenhuma demonstração mostra: não existe convenção para versionar, auditar ou reproduzir uma edição in-context. O grafo do ComfyUI é reprodutível porque é um arquivo; a instrução "faça a hora dourada" não é.

**Quem está construindo.** Runway ocupa o nicho da edição dirigida sobre material real; Lightricks, Alibaba e Tencent empurram os pesos abertos e, com eles, o único caminho de controle profundo que não depende de API alheia [12]; Comfy Org construiu, sem planejar, o formato de fato para descrever um pipeline de geração [13]; Rive constrói a peça que quase ninguém liga ao tema — mídia que tem estado. Do lado acadêmico, a disputa arquitetural está aberta desde o VAR, que redefiniu a geração autoregressiva como predição da **próxima escala** em vez do próximo token em varredura, levou o FID de 18,65 para 1,73 e o Inception Score de 80,4 para 350,2 no ImageNet 256×256, com inferência cerca de 20× mais rápida, leis de escala com correlação linear próxima de −0,998 e generalização zero-shot para inpainting, outpainting e edição [2].

## Seção 4 — As disrupções-raiz

Antes das três aceitas, o registro do que foi **recusado** pelo filtro anti-tecnologia madura, conforme a régua da disciplina (o que já é comum em produto de massa não entra): geração de imagem por prompt simples, upscaling, interpolação de quadros, troca de rosto, rotoscopia assistida, edição não-linear, motion graphics feito à mão. Nenhum rompe a lógica do campo — é o campo. Também foram recusadas duas candidatas que parecem disrupção e não são. **"Os modelos vão ficar mais realistas"**: é melhoria de qualidade num eixo já dominante, não muda quem dirige nem o que se pode dirigir. **"A geração vai ficar mais barata e rodar no celular"**: é otimização de custo; muda quem paga a conta, não muda a natureza do controle. Vale registrar a recusa porque as duas dominam a conversa pública sobre o tema e nenhuma delas rompe nada.

### Disrupção 1 — A região substitui o clipe: a geração vira edição, e o render vira reversível

**O que rompe.** Rompe o contrato de que material audiovisual se produz uma vez e se corrige por substituição. Toda a gramática da montagem foi construída sobre a escassez do plano: filmar era caro, então cortava-se *entre* planos, e a elipse virou recurso expressivo justamente porque a alternativa — refazer o plano — era proibitiva. Com edição in-context, a operação barata passa a ser intervir **dentro** do plano: mudar a luz, remover o objeto, girar o ângulo, preservando "aparência, movimento e continuidade originais" [3]. O corte deixa de ser o átomo da montagem. E o render deixa de ser o produto: o produto passa a ser a **cadeia de intervenções** que o gerou, que é reexecutável, remixável e — este é o ponto — auditável ou não, conforme alguém decida guardá-la.

**Por que agora e não há 5 anos.** Três coisas convergiram e nenhuma existia em 2021. Primeira, a maturação da taxonomia de condições não-textuais — câmera, profundidade, pose — como objeto de pesquisa organizado, com survey consolidado e revisado em janeiro de 2026 [1]; antes disso o campo era um amontoado de truques. Segunda, modelos que operam sobre vídeo existente em vez de partir do ruído, disponíveis comercialmente desde meados de 2025 [3]. Terceira, adaptadores leves de condicionamento estrutural sobre pesos abertos, que permitem impor pose, profundidade e bordas sem retreinar nada [12] — o que tira o fine-tuning do caminho crítico e transforma "mudar o controle" numa operação de minutos.

**O que falta para se concretizar.** Falta **determinismo**. Uma edição in-context instruída em linguagem não é reproduzível: a mesma frase sobre o mesmo material não devolve o mesmo resultado, e por isso ela não pode ser versionada como se versiona um corte. Falta a degradação: reeditar uma edição acumula artefato, e ninguém publicou o limite disso. Falta o controle de câmera nos modelos abertos — hoje, zero [12] —, o que significa que o único controle profundo disponível exige uma API que fecha a caixa. E falta a peça contratual: nenhum contrato de produção sabe hoje exigir a entrega do grafo, porque o grafo ainda não é entendido como a obra.

### Disrupção 2 — A animação vira máquina de estados: a fronteira entre vídeo e interface se dissolve

**O que rompe.** Rompe a linha do tempo como forma da mídia em movimento. Um arquivo do Rive não tem duração: tem estados, transições com condições, entradas que funcionam como "o contrato entre design e engenharia", ouvintes que respondem a toque e clique, e eventos que avisam o código de que algo aconteceu [4]. Isso quebra três premissas de uma vez. A peça não *toca*, ela *responde* — logo, não tem começo nem fim. A peça não é um asset entregue ao desenvolvedor, é um componente que roda em web, iOS, Android, Flutter, Unity e Unreal a partir do mesmo arquivo [4] — logo, a divisão entre "quem faz a arte" e "quem programa a tela" perde a fronteira. E a peça não tem métrica de visualização, porque não há o que visualizar até alguém interagir.

**Por que agora e não há 5 anos.** Porque as três pernas só se completaram recentemente: um renderizador vetorial rápido o bastante para rodar em telefone barato, runtimes nativos cobrindo o parque inteiro de plataformas (incluindo motores de jogo e visionOS), e *data binding* — a peça que faltava para que a animação lesse dado de aplicação em vez de ser roteirizada à mão [4]. Sem data binding, a máquina de estados era uma novidade de portfólio; com ela, é infraestrutura de produto.

**O que falta para se concretizar.** Falta o encontro com a mídia sintética, que hoje não acontece. Gerar um quadro ficou fácil; gerar **estado** não — nenhum modelo de vídeo produz uma máquina de estados, e nenhuma ferramenta de máquina de estados gera conteúdo. As duas metades do tema estão em salas separadas, e é exatamente aí que está o valor não capturado. Falta também formato: `.riv` é proprietário de uma empresa, e não há contêiner aberto para "mídia com estado" — o que significa que a disrupção depende hoje da sobrevivência de um fornecedor. E falta a camada de acessibilidade: não existe legenda, audiodescrição ou norma para uma peça sem linha do tempo.

### Disrupção 3 — Geração por escala: a arquitetura em disputa reabre onde o humano pode intervir

**O que rompe.** Rompe o pressuposto de que gerar imagem é remover ruído. O VAR reformulou a geração como predição da próxima **escala** — do grosso ao fino — em vez de varredura de tokens, e com isso fez modelos autoregressivos estilo GPT superarem transformers de difusão em qualidade, velocidade, eficiência de dados e escalabilidade, com leis de escala análogas às dos LLMs e generalização zero-shot para inpainting, outpainting e edição [2]. O que interessa aqui não é o placar de FID: é que uma escada de escalas **é**, por construção, uma superfície de controle. Intervir na escala grossa é dirigir a composição; intervir na fina é dirigir a textura. A difusão nunca ofereceu esse ponto de apoio — ela oferece um passo de ruído, que não corresponde a nada que um diretor saiba nomear.

**Por que agora e não há 5 anos.** Porque o resultado é de 2024 [2] e a necessidade industrial é de agora: quando o processo de trabalho vira "gerar e refinar clipes de 15 segundos" em ciclos [8], a latência da amostragem iterativa deixa de ser detalhe técnico e vira o custo dominante do ofício. Uma arquitetura cerca de 20× mais rápida [2] não é uma otimização — é a diferença entre dirigir por lote e dirigir ao vivo.

**O que falta para se concretizar.** Falta vídeo: o resultado do VAR é de imagem, e nenhuma das arquiteturas de vídeo em produção hoje é construída sobre ele. Falta ferramenta: a escada de escalas existe dentro do modelo e não é exposta a ninguém — não há software que deixe um humano intervir na escala 4 de 10 e continuar. E falta a decisão econômica: quem controla a API não tem incentivo para expor o interior do processo, porque expor o interior é justamente o que permite o usuário sair. É plausível que essa disrupção só se concretize em pesos abertos, e por isso ela é a mais frágil das três.

## Seção 5 — A roda dos futuros

```yaml
roda_dos_futuros:
  - id: e1
    efeito: "A unidade de trabalho deixa de ser o clipe e passa a ser a região-no-tempo; o render vira operação reversível"
    sinal: forte
    prazo: "2026-2029"
    confianca: alta
    filhos:
      - id: e1.1
        efeito: "O corte deixa de ser o átomo da montagem: edita-se dentro do plano, não entre planos"
        sinal: moderado
        prazo: "2027-2030"
        confianca: media
        filhos:
          - id: e1.1.1
            efeito: "A elipse perde a condição de recurso escasso e a continuidade vira parâmetro ajustável, não conquista"
            sinal: fraco
            prazo: "2028-2031"
            confianca: baixa
          - id: e1.1.2
            efeito: "O editor não-linear perde a centralidade para o grafo de nós; a linha do tempo vira uma view, não o documento"
            sinal: moderado
            prazo: "2027-2031"
            confianca: media
      - id: e1.2
        efeito: "A cadeia de intervenções vira o documento: quem tem o grafo tem a obra, não quem tem o master"
        sinal: moderado
        prazo: "2027-2030"
        confianca: media
        filhos:
          - id: e1.2.1
            efeito: "Contratos de produção passam a exigir entrega do grafo e dos pesos, não do arquivo final"
            sinal: fraco
            prazo: "2029-2032"
            confianca: baixa

  - id: e2
    efeito: "O custo marginal de um plano cai para perto de zero e o gargalo migra da produção para a direção"
    sinal: forte
    prazo: "2026-2029"
    confianca: alta
    filhos:
      - id: e2.1
        efeito: "Equipes minúsculas entregam volume que exigia dezenas; a publicidade passa a testar variações em vez de produzir peças"
        sinal: forte
        prazo: "2026-2029"
        confianca: alta
        filhos:
          - id: e2.1.1
            efeito: "A peça publicitária deixa de ser produzida e passa a ser cultivada: variação contínua contra métrica, sem versão final"
            sinal: moderado
            prazo: "2028-2031"
            confianca: media
          - id: e2.1.2
            efeito: "O briefing vira o produto vendável da agência; a execução vira commodity cobrada por computação"
            sinal: moderado
            prazo: "2027-2031"
            confianca: media
      - id: e2.2
        efeito: "Escolher entre mil saídas corretas fica mais caro que gerar mil: o julgamento vira o insumo escasso"
        sinal: moderado
        prazo: "2027-2030"
        confianca: media
        filhos:
          - id: e2.2.1
            efeito: "Surge a função de curador de saída — e ela resiste à automação melhor que a de quem gera"
            sinal: fraco
            prazo: "2028-2031"
            confianca: media

  - id: e3
    efeito: "O emprego audiovisual se reorganiza entre quem opera o grafo e quem contesta a saída; o meio da pirâmide desaparece"
    sinal: forte
    prazo: "2026-2030"
    confianca: media
    filhos:
      - id: e3.1
        efeito: "A porta de entrada da profissão — roto, in-between, clean-up, modelagem básica — fecha"
        sinal: forte
        prazo: "2026-2029"
        confianca: alta
        filhos:
          - id: e3.1.1
            efeito: "A pirâmide de formação quebra: não há mais degrau baixo pago onde se aprendia o ofício olhando quadro a quadro"
            sinal: moderado
            prazo: "2027-2031"
            confianca: media
          - id: e3.1.2
            efeito: "O ensino de animação é forçado a escolher entre ensinar o gesto (que ninguém mais paga) e ensinar a direção (que exige repertório que o gesto dava)"
            sinal: fraco
            prazo: "2028-2031"
            confianca: media
      - id: e3.2
        efeito: "A negociação coletiva migra da hora trabalhada para o dado de treino e o direito sobre o grafo"
        sinal: moderado
        prazo: "2026-2030"
        confianca: media
        filhos:
          - id: e3.2.1
            efeito: "Acervo licenciado vira ativo contábil de estúdio e a licença vira barreira de entrada, não salvaguarda ética"
            sinal: fraco
            prazo: "2028-2031"
            confianca: media

  - id: e4
    efeito: "O arquivo de animação vira componente de software: a mesma peça roda em web, app e jogo, e responde a evento"
    sinal: moderado
    prazo: "2026-2030"
    confianca: media
    filhos:
      - id: e4.1
        efeito: "A fronteira entre vídeo e interface se dissolve no produto: o mesmo objeto exibe e reage"
        sinal: moderado
        prazo: "2027-2030"
        confianca: media
        filhos:
          - id: e4.1.1
            efeito: "As métricas de mídia (view, retenção, taxa de conclusão) deixam de descrever a peça, que não tem duração"
            sinal: fraco
            prazo: "2028-2031"
            confianca: media
          - id: e4.1.2
            efeito: "A acessibilidade fica sem âncora: não há legenda nem audiodescrição para uma peça sem linha do tempo, e nenhuma norma cobre isso"
            sinal: fraco
            prazo: "2028-2031"
            confianca: baixa
      - id: e4.2
        efeito: "Mídia sintética e mídia com estado colidem: gerar o quadro ficou fácil, gerar o estado não"
        sinal: fraco
        prazo: "2028-2031"
        confianca: baixa
        filhos:
          - id: e4.2.1
            efeito: "Quem definir o contêiner aberto de mídia com estado define a cadeia inteira; enquanto for formato proprietário, a adoção fica refém de um fornecedor"
            sinal: fraco
            prazo: "2029-2032"
            confianca: baixa

  - id: e5
    efeito: "A prova em vídeo perde a presunção de veracidade antes de existir infraestrutura confiável de procedência"
    sinal: forte
    prazo: "2026-2029"
    confianca: alta
    filhos:
      - id: e5.1
        efeito: "O dividendo do mentiroso vira estratégia processual rotineira: contesta-se o vídeo verdadeiro porque contestar ficou barato"
        sinal: forte
        prazo: "2026-2029"
        confianca: alta
        filhos:
          - id: e5.1.1
            efeito: "Tribunais passam a exigir corroboração independente para vídeo, encarecendo e alongando o processo"
            sinal: moderado
            prazo: "2027-2031"
            confianca: media
          - id: e5.1.2
            efeito: "A desigualdade de acesso à perícia vira desigualdade de acesso à verdade: quem não paga laudo perde o direito de ser acreditado"
            sinal: fraco
            prazo: "2028-2032"
            confianca: media
      - id: e5.2
        efeito: "A procedência criptográfica se consolida como infraestrutura — e como mercado sobre o que é real"
        sinal: moderado
        prazo: "2026-2030"
        confianca: media
        filhos:
          - id: e5.2.1
            efeito: "A ausência de credencial passa a significar suspeita: quem não assina vira suspeito por omissão, inclusive quem não tem equipamento que assine"
            sinal: fraco
            prazo: "2028-2031"
            confianca: media

  - id: e6
    efeito: "A arquitetura de geração vira objeto de disputa, e com ela o ponto onde o humano pode intervir"
    sinal: moderado
    prazo: "2027-2031"
    confianca: media
    filhos:
      - id: e6.1
        efeito: "Geração por escala derruba a latência e torna possível a prévia interativa em tempo real"
        sinal: fraco
        prazo: "2028-2031"
        confianca: media
        filhos:
          - id: e6.1.1
            efeito: "Direção passa a ser feita ao vivo, como quem toca um instrumento, e não por lote de renders assíncronos"
            sinal: fraco
            prazo: "2029-2032"
            confianca: baixa
      - id: e6.2
        efeito: "A escada de escalas vira superfície de controle: intervir no grosso é dirigir composição, no fino é dirigir textura"
        sinal: fraco
        prazo: "2028-2031"
        confianca: baixa
        filhos:
          - id: e6.2.1
            efeito: "O ofício de escrever prompt morre e nasce o de intervenção estrutural por nível — mais próximo de dirigir que de pedir"
            sinal: fraco
            prazo: "2029-2032"
            confianca: baixa
          - id: e6.2.2
            efeito: "Pesos abertos rodando local viram a única via de controle profundo, porque expor o interior do processo é o que permite o usuário sair da plataforma"
            sinal: moderado
            prazo: "2027-2031"
            confianca: media
```

**O que o bloco não exprime sozinho.** Três coisas.

A primeira é que os seis ramos **não têm o mesmo peso probatório**. `e1`, `e2`, `e3` e `e5` já têm evidência em produção ou em documento público: modelo comercial de edição in-context [3], custo e prazo de um longa feito em duas semanas por quinze pessoas [8], estudo encomendado por sindicato projetando disrupção de 118.500 postos em cinema, TV e animação [7], e um debate ativo sobre regra de evidência em tribunal federal [6]. Já `e4` e `e6` são apostas estruturais: descrevem um encaixe que ainda não aconteceu. Ler a roda como se todos os ramos tivessem o mesmo estatuto é o erro mais fácil de cometer com ela.

A segunda é que os ramos **interferem entre si**, e a árvore não mostra isso. O ramo que mais importa não está desenhado: é o cruzamento de `e2.2` com `e3.1`. Se o julgamento vira o insumo escasso (`e2.2`) exatamente quando a porta de entrada da profissão fecha (`e3.1`), o sistema perde o mecanismo que produzia julgamento. Ninguém vira bom diretor sem ter sido mau assistente. A roda mostra os dois efeitos como ramos paralelos; na prática eles se estrangulam, e nenhum desenho de árvore captura estrangulamento.

A terceira é o que a roda **omite por construção**: o não-evento. É perfeitamente possível que nada disso escale porque o controle fino continue caro demais em atenção humana — prompts de três mil palavras com lembrete de física [8] não são um degrau para o controle, podem ser o teto dele. A Roda dos Futuros só sabe derivar consequências de algo que acontece; ela é estruturalmente incapaz de representar "a disrupção emperra". É por isso que a Seção 7 existe.

## Seção 6 — Sinais fracos e wildcards

**Sinal fraco 1 — o prompt de três mil palavras.** O dado mais revelador do *Hell Grind* não é o orçamento: é que cada prompt tinha em média 3.000 palavras e precisava lembrar o modelo de respeitar a física [8]. Isso é sintoma de uma interface errada, não de um modelo fraco. Prompt longo é o que se faz quando não existe a alavanca certa. Quando aparecer a alavanca, o prompt encolhe — e o dia em que a instrução de um plano couber em quinze palavras é o dia em que o controle chegou de verdade.

**Sinal fraco 2 — 80% do orçamento em computação.** No mesmo longa, cerca de US$ 400 mil dos US$ 500 mil foram gastos em computação [8]. A estrutura de custo do audiovisual está migrando de folha de pagamento para conta de nuvem, silenciosamente. Isso muda quem é credor do setor, quem sofre com variação de preço de GPU, e quem tem poder de veto sobre uma produção — sinal econômico que quase nenhuma análise cultural do tema está olhando.

**Sinal fraco 3 — o `.riv` que ninguém liga ao tema.** Enquanto a discussão pública sobre mídia sintética fala de realismo, o Rive entrega mídia que responde a evento com data binding e ouvintes de clique, rodando do navegador ao Unreal a partir do mesmo arquivo [4]. É o único lugar onde imagem em movimento já é, de fato, software. Ninguém no debate sobre "vídeo gerado" cita isso — e é exatamente por isso que é sinal fraco.

**Sinal fraco 4 — o grafo como formato de troca.** Que um fluxo de geração seja um grafo acíclico dirigido em JSON embutido no metadado de um PNG [13] é uma decisão técnica banal com consequência enorme: significa que a receita viaja junto com o resultado. É a semente da procedência *de processo*, que é diferente e mais forte que a procedência *de origem* do C2PA — e ninguém a está tratando como tal.

**Sinal fraco 5 — a fragmentação da própria procedência.** As credenciais de conteúdo verificam origem, não verdade: "uma imagem fabricada ou enganosa pode manter uma credencial criptográfica válida que confirma sua origem enquanto valida conteúdo enganoso como tecnicamente autêntico" [5]. Somando a isso que nenhuma implementação de câmera dedicada atingiu conformidade sob o Programa de Conformidade do C2PA, que fabricantes construíram sobre a especificação 1.4 incompatível com sistemas novos, e que a implementação Android é vulnerável a falsificação com acesso root — falha que o Google decidiu não corrigir [5] —, o sinal é incômodo: a infraestrutura que deveria salvar a prova em vídeo está sendo construída torta, e em silêncio.

**Wildcard — um longa feito por uma pessoa entra na competição oficial de um festival de primeira linha, e o festival não sabe que era.** Hoje a fronteira está nítida na direção oposta: Cannes 2026 baniu IA generativa da Competição Oficial, e o *Hell Grind* — 15 pessoas, duas semanas, US$ 500 mil — estreou num festival adjacente, não no oficial [9][8]. O wildcard não é "IA ganha a Palma de Ouro". É mais sutil e mais devastador: um filme dirigido por uma pessoa, com controle fino o bastante para não ter "aparência de IA", passa pela curadoria, é selecionado por mérito, e a origem só aparece depois. Baixa probabilidade até 2031; impacto que muda o mapa inteiro, porque destrói de uma vez a categoria "filme de IA" como coisa distinguível — e com ela toda política de festival, edital público e cota de fomento escrita sobre essa distinção. Efeito colateral imediato: qualquer diretor que perca um prêmio passa a ter incentivo para acusar o vencedor, e o dividendo do mentiroso (`e5.1`) migra do tribunal para a premiação.

## Seção 7 — Contra o próprio mapa (teste adversarial)

**Extrapolação linear.** O mapa assume que "mais controle" é uma direção com continuidade — que da região se vai à regra, da regra ao estado, do estado à intervenção por escala, como se fosse uma escada. Pode não ser escada, e sim degraus desconexos. Controle por região (Aleph) e controle por estado (Rive) não estão no mesmo eixo: um é sobre pixels, o outro sobre lógica de aplicação, e nada garante que se encontrem. Estou tratando como um tema o que talvez sejam dois temas que só compartilham a palavra "controle". Se estiverem desconectados, `e4.2` nunca acontece e o ramo `e4` inteiro fica órfão do resto do mapa.

**Velocidade de adoção irreal.** Coloquei `e1` e `e2` em 2026-2029 com confiança alta, e isso é provavelmente rápido demais para a produção que não é experimento. O contraexemplo está dentro do próprio material que citei: o fluxo que o *Hell Grind* usou é iterar clipes de 15 segundos com prompts de três mil palavras [8] — isso não é um pipeline, é um mutirão. Além disso, indústria audiovisual é sindicalizada, contratada por temporada e regulada por acordos que não se renegociam em dois anos. O estudo que sustenta `e3` é de janeiro de 2024, com janela declarada de três anos que **termina em 2026** [7]: ou seja, estou usando uma projeção cujo prazo está vencendo agora para afirmar coisas sobre 2031. É a fragilidade mais séria do mapa, e a corrijo assumindo-a: `e3` deveria ter confiança média, não alta, e a rebaixei na roda por esse motivo.

**Falha da disrupção.** As três podem não se concretizar, por motivos diferentes e todos plausíveis. A Disrupção 1 falha se o determinismo nunca chegar: sem reprodutibilidade, nenhum estúdio sério põe edição in-context no caminho crítico de uma entrega contratada, e a tecnologia fica presa no rascunho e na publicidade descartável. A Disrupção 2 falha por dependência de fornecedor: `.riv` é formato de uma empresa, e mídia com estado não vira categoria se depender da sobrevivência comercial de quem a inventou. A Disrupção 3 é a mais frágil das três e está declarada como tal: o VAR é resultado de imagem, de 2024 [2], sem equivalente em vídeo em produção; é inteiramente possível que a difusão absorva as vantagens (velocidade, controle por etapa) e a arquitetura alternativa vire nota de rodapé. Nesse caso, `e6` inteiro — dois ramos, três folhas — some do mapa.

**Viés pessoal do autor.** Três, e são específicos. **Primeiro, viés de ferramenta**: minha zona de interesse é percepção e mídia sintética, e isso me faz enxergar controle onde talvez haja só interface melhor. Boa parte do que chamei de disrupção pode ser, sob outra lente, usabilidade. **Segundo, viés de fonte**: das treze fontes, três são material de fornecedor sobre o próprio produto [3][4][12] e duas são blogs comerciais de baixa confiabilidade [12][13]. Fornecedor descreve capacidade, não taxa de sucesso — e nenhum deles publica quantas gerações foram descartadas. **Terceiro, e o mais incômodo: viés de simpatia pelo pequeno.** Escrevi "estúdio de uma pessoa" como se fosse emancipação, e o dado que tenho diz o contrário — o longa de referência custou US$ 500 mil, sendo 80% em computação [8]. Isso não é barato, é **caro de outro jeito**: troca folha de pagamento por conta de nuvem, o que favorece quem tem capital e não quem tem tempo. O mapa resiste a essa correção porque a narrativa de democratização é mais bonita; registro aqui que a evidência disponível não a sustenta.

## Seção 8 — O que a máquina errou

**Erro 1 — cinco fontes citadas sem terem sido abertas.** Na varredura inicial, as buscas devolveram resultados com títulos convincentes — comparativos "Runway vs Kling vs Luma vs Sora 2026", rastreadores de adoção de C2PA, listas de câmeras compatíveis — e o primeiro rascunho tratou os *snippets* de busca como se fossem leitura. *Como foi identificado:* ao montar a Seção 11, cruzei a lista de fontes com o registro do que foi efetivamente buscado e aberto; cinco itens não tinham correspondente aberto. *Como foi corrigido:* removidos. Para o dado de procedência, substituí os agregadores comerciais pelo verbete de enciclopédia efetivamente aberto [5], que tem a vantagem adicional de trazer as falhas conhecidas — a vulnerabilidade do Nikon Z6III e a do Android — que os rastreadores comerciais omitiam.

**Erro 2 — número sem denominador apresentado como fato do setor.** O rascunho afirmava que "mais de 100 mil empregos do audiovisual serão eliminados pela IA generativa". *Como foi identificado:* ao abrir a matéria e rastrear até a origem, o número se revelou outra coisa — projeção de **disrupção** (consolidação, substituição ou eliminação), não de eliminação; de um estudo da CVL Economics encomendado por partes interessadas (The Animation Guild IATSE Local 839, Concept Art Association, Human Artistry Campaign, National Cartoonists Society Foundation), publicado em 31 de janeiro de 2024, baseado em survey com **300 executivos e gerentes** sobre suas intenções, não em medição de emprego [7]. *Como foi corrigido:* o texto passou a dizer "projetando disrupção de 118.500 postos", com a origem, o método e o interesse do encomendante declarados na Seção 11, e a confiança de `e3` foi rebaixada de alta para média na roda.

**Erro 3 — atribuição inflada de precedência.** O rascunho escreveu que o *Hell Grind* é "o primeiro longa-metragem feito inteiramente por IA". *Como foi identificado:* as duas fontes abertas divergem entre si — uma o descreve como "o primeiro longa criado inteiramente na plataforma Higgsfield AI", outra reporta a alegação de "primeiro longa inteiramente gerado por IA" como **reivindicação da empresa** [8][9]. Divergência entre duas fontes sobre o mesmo fato é sinal de alegação de marketing, não de fato estabelecido. *Como foi corrigido:* o texto passou a dizer "apresentado como primeiro longa inteiramente gerado por IA", e o dado que uso de verdade não é a precedência — é a estrutura de custo (80% em computação) e a equipe (15 pessoas), que são verificáveis e muito mais interessantes.

**Erro 4 — raciocínio fraco por analogia não examinada.** O rascunho da Disrupção 2 dizia que "todo vídeo vira interativo", herdando sem exame a pergunta de terceira ordem que o enunciado do tema propõe. *Como foi identificado:* ao abrir a documentação do Rive [4], ficou claro que nada ali gera conteúdo — são estados, transições e ouvintes, autorados à mão. Um modelo de vídeo não emite máquina de estados; uma máquina de estados não gera quadro. A ponte que a frase assume não existe em nenhum produto aberto hoje. *Como foi corrigido:* a afirmação virou uma lacuna declarada ("as duas metades do tema estão em salas separadas") e desceu na roda para `e4.2`, com sinal fraco, confiança baixa e prazo 2028-2031 — em vez de ser premissa da seção.

**Erro 5 — fonte primária inacessível tratada como dispensável.** Para o recorte brasileiro, a página oficial do TSE sobre a tese de deepfake retornou HTTP 403 em três tentativas, por três URLs diferentes. A tentação foi escrever a partir do *snippet* de busca. *Como foi corrigido:* não citei o que não abri. Usei a análise de terceiro efetivamente aberta [11], que traz a data da sessão (2 de março de 2026) e os trechos das obrigações, e declarei na Seção 11 que a fonte é secundária e que a primária ficou inacessível. O leitor precisa saber disso para calibrar.

## Seção 9 — Três cenários para 2031

**Provável.** O controle fino é padrão de mercado e ninguém chama mais nada disso de IA. Todo software de pós tem a caixa de instrução ao lado da linha do tempo, e a linha do tempo virou uma visualização de um grafo que fica em outro lugar. A publicidade abandonou a ideia de peça final: campanhas são famílias de variações que se ajustam sozinhas contra métrica, e o que a agência vende é o briefing, porque a execução se cobra por hora de computação. O emprego encolheu por baixo — roto, in-between, clean-up e modelagem básica praticamente não existem como vaga de entrada — e cresceu numa faixa estreita de gente que opera grafo e responde por saída. As escolas ainda não resolveram o problema de formar diretor sem os anos de assistente, e a primeira geração formada sob o novo regime tem repertório técnico mais raso que a anterior, o que ninguém admite em público. A procedência criptográfica está em toda parte e funciona mal: a maioria das imagens circula sem credencial, o selo se perde em cada reencaminhamento, e a existência do selo virou mais um argumento retórico do que uma garantia. Tribunais pedem corroboração para vídeo como rotina, processos ficaram mais caros, e quem não paga perícia é menos acreditado. No Brasil, a rotulagem obrigatória de conteúdo sintético em contexto eleitoral está consolidada e é razoavelmente cumprida pelos atores formais, e sistematicamente ignorada por todo o resto.

**Desejável.** O controle fino se consolidou, mas o que se consolidou junto foi a **rastreabilidade do processo**. Entregar uma obra passou a significar entregar o grafo que a produziu, e não só o arquivo: o formato de fluxo virou padrão aberto, versionado, com histórico legível — de modo que "como isto foi feito" é uma pergunta com resposta, e não uma disputa. Essa infraestrutura, que nasceu por conveniência técnica, acabou resolvendo dois problemas que a procedência por assinatura nunca resolveu: dá para auditar uma edição, e dá para creditar quem participou dela. Formação e sindicato se reorganizaram em torno disso — existe trilha paga de entrada que não é mais o trabalho braçal, e é a de contestação: gente cujo ofício é discordar da saída com fundamento, e que é cara justamente por isso. Mídia com estado tem contêiner aberto e norma de acessibilidade própria. O controle por escala saiu do paper e virou instrumento: dirige-se ao vivo, intervindo no grosso e no fino, e o prompt de três mil palavras é lembrado como a fase estranha em que se pedia em vez de dirigir.

**Indesejável.** O controle fino existe, é excelente, e está atrás de três APIs. Os pesos abertos ficaram uma geração para trás em qualidade e duas em controle — nenhum deles nunca teve controle de câmera —, e quem quer dirigir de verdade aluga o direito de dirigir por mês. A estrutura de custo migrou inteira para computação, então quem financia audiovisual são os mesmos que vendem a computação, e a linha entre fornecedor e produtor sumiu. A porta de entrada da profissão fechou sem que nada abrisse no lugar: não há assistente, não há quem aprenda, e o julgamento que o mercado diz valorizar escasseia porque ninguém mais é formado para tê-lo. A procedência virou pedágio: assinar custa, câmeras baratas não assinam, e o resultado prático é que a palavra de quem filma com telefone popular vale menos em juízo que a de quem filma com corpo profissional — a credencial, criada para proteger a verdade, virou requisito de classe para ser acreditado. O dividendo do mentiroso se generalizou para fora do tribunal: qualquer registro incômodo é contestável a custo zero, e a defesa "é IA" funciona bem o bastante para ser sempre tentada. Nada disso exigiu um wildcard; bastou cada peça funcionar como já estava funcionando em 2026.

## Seção 10 — O experimento

**O que é.** Uma oficina de duas horas, em dois tempos, chamada **"Três controles e um tribunal"**. No primeiro tempo, a turma se divide em três grupos e cada um recebe **o mesmo plano de dez segundos**, filmado no campus na própria aula com telefone, e a **mesma instrução de direção** (exemplo: "esta cena tem de terminar em hora dourada, sem o carro branco, e com a câmera mais alta"). Cada grupo persegue o resultado por um caminho de controle diferente: (a) **instrução em linguagem sobre o material**, num modelo de edição in-context; (b) **grafo de nós** com condicionamento estrutural — profundidade, bordas, pose — sobre pesos abertos rodando local; (c) **máquina de estados**, refazendo o plano como peça vetorial autorada que responde a evento, no Rive. Todos registram tempo gasto, número de tentativas e o que **não** conseguiram fazer. No segundo tempo, cada grupo assina suas saídas com credencial de conteúdo, embaralha-se tudo com dois planos originais não editados, e a turma vira tribunal: cada um tenta convencer os demais de que uma peça alheia é fabricada, e defender a própria. Ninguém pode invocar a credencial no primeiro turno de argumentação — só no segundo.

**A pergunta sobre o futuro.** Duas, encadeadas. A primeira: *controle fino é ganho de tempo ou é deslocamento de esforço?* A hipótese do mapa é que o trabalho não diminui, ele **muda de lugar** — sai da execução e vai para o julgamento (`e2.2`), e é por isso que a instrução cabia em quinze palavras e o processo levou duas horas. A segunda: *quando contestar é barato, o que sobra da prova?* A hipótese é que o dividendo do mentiroso (`e5.1`) opera mesmo entre pessoas que sabem exatamente como tudo foi feito, e que a credencial de procedência ajuda menos do que se espera, porque ela atesta origem e não verdade [5].

**Tecnologia emergente usada.** Edição in-context sobre material filmado [3]; condicionamento estrutural por adaptador leve — pose, profundidade, mapa de bordas — em modelo de pesos abertos local [12]; grafo acíclico dirigido serializado como o documento do trabalho [13]; animação como máquina de estados com entradas, transições e ouvintes [4]; assinatura de procedência C2PA [5]. Tudo construível hoje: uma máquina com 16 GB de VRAM cobre o caminho (b); os caminhos (a) e (c) rodam em conta gratuita ou de baixo custo.

**Atividade da turma.** Filmar o plano (10 min). Executar em grupo, cronometrando cada tentativa e anotando toda vez que se **abandonou** um objetivo por não conseguir (50 min). Assinar, embaralhar e distribuir (10 min). Tribunal: dois turnos de argumentação, primeiro sem invocar credencial, depois com (40 min). Fechamento: a turma preenche, junta, uma tabela de três linhas — *tempo até a primeira saída aceitável*, *número de coisas que a instrução pedia e ninguém conseguiu*, *quantas peças foram julgadas falsas por engano* (10 min).

**Resultado que me faria mudar de ideia.** Declarado antes de rodar, para não ser lido depois de forma conveniente. **Se o caminho (a) — instrução em linguagem — vencer os outros dois em tempo *e* em fidelidade à direção, e as instruções ficarem curtas**, então o controle fino não é a disrupção que descrevi: é interface, e o mapa inteiro precisa ser rebaixado a melhoria incremental — exatamente o critério de mudança de ideia que recebi no recorte ("a tecnologia não rompe nada, só melhora o que existe"). **Se o caminho (c) produzir algo que os outros dois não conseguem produzir de jeito nenhum** — uma peça que responde ao toque —, `e4.2` sobe de sinal fraco para moderado, porque a lacuna que declarei estaria sendo preenchida por autoria humana e não por modelo. E **se o tribunal errar pouco** — se a turma distinguir bem o editado do original —, `e5.1` está superdimensionado no mapa, e o prazo do dividendo do mentiroso deve ser empurrado para depois de 2031.

## Seção 11 — Fontes

1. **Ma, Y. et al. — "Controllable Video Generation: A Survey".** arXiv:2507.16869, v3 revisada em 19 de janeiro de 2026. `https://arxiv.org/abs/2507.16869` — Sustenta a Seção 2 (taxonomia do campo: condição única, múltiplas condições, controle universal; condições não-textuais de câmera, profundidade e pose) e a premissa declarada de que prompt de texto é insuficiente para requisito de granularidade fina. Também sustenta a Disrupção 1 ("por que agora"). **Confiabilidade: alta** (survey acadêmico com repositório público; ressalva: survey não mede adoção, mapeia literatura).
2. **Tian, K.; Jiang, Y.; Yuan, Z.; Peng, B.; Wang, L. — "Visual Autoregressive Modeling: Scalable Image Generation via Next-Scale Prediction".** arXiv:2404.02905, submetido 3 de abril de 2024, revisado 10 de junho de 2024. `https://arxiv.org/abs/2404.02905` — Sustenta a Disrupção 3 inteira e o ramo `e6`: FID 18,65 → 1,73, IS 80,4 → 350,2 no ImageNet 256×256, ~20× mais rápido, leis de escala com correlação próxima de −0,998, zero-shot em inpainting/outpainting/edição. **Confiabilidade: alta** (paper premiado, números do próprio abstract; ressalva: resultado de imagem, não de vídeo, e benchmark não é produção).
3. **Runway Research — "Introducing Runway Aleph".** 25 de julho de 2025. `https://runway.com/research/introducing-runway-aleph` — Sustenta a Seção 3 e a Disrupção 1: "modelo de vídeo in-context de estado da arte", adicionar/remover/transformar objetos, gerar novos ângulos, alterar estilo e iluminação; disponível para usuários pagos. **Confiabilidade: média** (fonte primária, mas do próprio fornecedor sobre o próprio produto; descreve capacidade, não taxa de sucesso).
4. **Rive — "Features".** Consultada em 12 de setembro de 2026. `https://rive.app/features` — Sustenta a Disrupção 2 e o ramo `e4`: máquinas de estado ("crie interatividade visualmente usando animações como estados"), transições com condições, ouvintes (hover, clique, toque), entradas como "o contrato entre design e engenharia", data binding, eventos, e a lista de runtimes (web, React, React Native, Flutter, Unity, Unreal, iOS, Android, macOS, visionOS). **Confiabilidade: média** (primária de fornecedor; a lista de plataformas é verificável, as alegações de facilidade não).
5. **Wikipédia — "Content Credentials".** Consultada em 12 de setembro de 2026. `https://en.wikipedia.org/wiki/Content_Credentials` — Sustenta o ramo `e5.2` e o sinal fraco 5: procedência verifica origem e não verdade; nenhuma implementação de câmera dedicada em conformidade com o Programa de Conformidade; fabricantes sobre a especificação 1.4, incompatível com sistemas novos; vulnerabilidade do Nikon Z6III; implementação Android falsificável com acesso root, que o Google decidiu não corrigir. **Confiabilidade: média** (enciclopédia colaborativa com referências; usada por trazer as falhas que os rastreadores comerciais omitem — verificação independente das falhas específicas não foi feita).
6. **Duke Law News — "How to keep deepfakes out of court"** (sobre trabalho de Paul W. Grimm e Maura Grossman), 12 de janeiro de 2026. `https://law.duke.edu/news/how-keep-deepfakes-out-court` — Sustenta o ramo `e5` e a Seção 2: "a IA generativa democratizou a fraude"; proposta de dois regimes (autenticidade contestada e prova reconhecidamente gerada por IA); crítica ao padrão de preponderância (51%) para casos com consequência grave; e o achado de que júris não conseguem desconsiderar o que viram mesmo sabendo ser falso. **Confiabilidade: alta** (instituição acadêmica, autores identificados, um deles juiz federal aposentado; ressalva: recorte estadunidense, e a página não discute a Regra 707 nem o termo "dividendo do mentiroso" — este último é enquadramento meu).
7. **Cartoon Brew — estudo da CVL Economics encomendado por The Animation Guild IATSE Local 839, Concept Art Association, Human Artistry Campaign e National Cartoonists Society Foundation.** Publicado em 31 de janeiro de 2024; survey de 17/11 a 22/12/2023. `https://www.cartoonbrew.com/tech/union-study-says-generative-ai-will-disrupt-204000-jobs-three-years-237495.html` — Sustenta o ramo `e3`: 204 mil postos com disrupção projetada em três anos (2024-2026), sendo 118.500 em cinema/TV/animação (21,4% de 555 mil) e 52.400 em jogos; 3D modelers 33%, compositores 25%, storyboard/animação/ilustração 15%; 99% dos executivos com plano de adoção em três anos. **Confiabilidade: alta para o que é** — e o que é importa: survey de **300 executivos e gerentes** sobre intenção declarada, encomendado por partes interessadas no resultado, sem freelancers na base. Não é medição de emprego. Por isso `e3` está com confiança **média** na roda, e não alta.
8. **Wikipédia — "Hell Grind".** Consultada em 12 de setembro de 2026. `https://en.wikipedia.org/wiki/Hell_Grind` — Sustenta a Seção 3, os sinais fracos 1 e 2 e a Seção 7: US$ 500 mil, ~80% em computação, duas semanas, equipe de 15, clipes de 15 segundos iterados, prompts de ~3.000 palavras com lembrete de física, "sensação de máquina caça-níqueis", estreia em 16 de maio de 2026 num evento de indústria em Cannes, fora do festival. **Confiabilidade: média** (verbete recente sobre evento recente; os números vêm de declarações da produtora e não de auditoria independente).
9. **Tubefilter — "At Cannes, ByteDance brings generative AI films into the market".** 26 de maio de 2026. `https://www.tubefilter.com/2026/05/26/cannes-film-festival-generative-ai-bytedance-seedance-hell-grind/` — Sustenta o wildcard da Seção 6: Cannes baniu IA generativa da Competição Oficial; *Hell Grind* estreou em festival adjacente, não no oficial; curtas com Seedance 2.0 no Marché du Film; recepção artística morna. **Confiabilidade: média** (veículo especializado; a alegação de "primeiro longa inteiramente gerado por IA" é reportada como reivindicação da empresa, não como fato apurado).
10. **Câmara dos Deputados — "Comissão aprova multa e suspensão de rede social que abrigar pornografia falsa gerada por IA".** Aprovação na Comissão de Comunicação em 23 de março de 2026, relator dep. Jadyel Alencar (Republicanos-PI), substitutivo ao PL 2688/25. `https://www.camara.leg.br/noticias/1256583-comissao-aprova-multa-e-suspensao-de-rede-social-que-abrigar-pornografia-falsa-gerada-por-ia/` — Sustenta a nota sobre o Brasil: multa de até 2% do faturamento do grupo econômico, limitada a 50 mil salários mínimos; obrigação de medida técnica preventiva, canal de denúncia e remoção; reparação a vítimas; segue para mais três comissões antes do Plenário. **Confiabilidade: alta** (fonte oficial do Legislativo; ressalva: é projeto em tramitação, não lei).
11. **Data Privacy Brasil Research — "IA nas eleições: as novas regras do TSE para propagandas eleitorais e plataformas".** Sobre resolução aprovada em sessão extraordinária de 2 de março de 2026, referenciando a Resolução TSE nº 23.732/2024. `https://www.dataprivacybr.org/documentos/ia-nas-eleicoes-as-novas-regras-do-tse-para-propagandas-eleitorais-e-plataformas/` — Sustenta a nota sobre o Brasil e o ramo `e5`: conteúdo com IA deve informar "de forma explícita, destacada e acessível, que o conteúdo foi produzido ou alterado por IA, com indicação da tecnologia utilizada"; proibição de publicar, republicar e impulsionar novo conteúdo sintético nas 72 horas anteriores e 24 posteriores à votação; vedação de alterações sexualizadas de imagem de candidatas; planos de conformidade obrigatórios das plataformas. **Confiabilidade: alta para análise, média para o texto normativo** — é fonte secundária qualificada; a página oficial do TSE retornou HTTP 403 em três tentativas por URLs distintos e não pôde ser aberta, o que está declarado aqui em vez de ser disfarçado.
12. **Thunder Compute — "Best Open-Source AI Video Generation Models".** Consultada em 12 de setembro de 2026. `https://www.thundercompute.com/blog/best-open-source-ai-video-generation-models` — Sustenta a Seção 3 e a Disrupção 1: Wan 2.2 (5B/14B MoE, Apache 2.0, 29/07/2025, 8 GB de VRAM), LTX-2.3 (22B, 05/03/2026, 16-32 GB, adaptadores IC-LoRA com pose, profundidade e mapa de bordas), HunyuanVideo 1.5 (8,3B, 14 GB), CogVideoX, Mochi 1, Stable Video Diffusion; e o dado negativo que uso: **nenhum controle de câmera documentado em nenhum deles**. **Confiabilidade: baixa** (blog comercial de vendedor de GPU, com interesse direto em que se rode modelo localmente; parte das alegações é reconhecidamente de fornecedor. Usado apenas para datas, licenças e requisitos de hardware, que são verificáveis de forma independente, e para o dado negativo, que vai contra o interesse de quem publica).
13. **LocalHost HQ — "How ComfyUI is eating film production houses".** Consultada em 12 de setembro de 2026. `https://www.localhosthq.com/media/blogs/how-comfyui-is-eating-film-production-houses` — Sustenta a Seção 3 e o sinal fraco 4: cada fluxo é um grafo acíclico dirigido em JSON embutido como metadado de PNG; 106 mil estrelas no GitHub; vagas exigindo a ferramenta em AGBO, Harbor, Sawhorse; deploy documentado pela Magnopus; campanha "Holidays Are Coming" da Coca-Cola construída nela. **Confiabilidade: baixa** (blog com enquadramento editorial declaradamente entusiasta; a própria página separa o que é fato verificável do que é opinião, e usei apenas a primeira coluna — as alegações de "milhões de usuários" e de vantagem de desempenho estão marcadas como não verificadas na própria fonte e foram descartadas).

**Nota sobre o corpus.** Treze fontes abertas, nenhuma citada sem leitura. A composição é desequilibrada e isso é uma limitação real: duas acadêmicas [1][2], duas de fornecedor sobre o próprio produto [3][4], duas oficiais brasileiras (uma delas por intermediário) [10][11], duas enciclopédicas [5][8], uma acadêmica jurídica [6], uma jornalística especializada [7][9] e duas comerciais de baixa confiabilidade [12][13]. Falta o que eu mais queria e não encontrei aberto: **medição independente de taxa de sucesso de controle** — quantas gerações são descartadas por objetivo atingido. Nenhum fornecedor publica isso, e nenhum benchmark acadêmico aberto mede. Esse é o buraco central do corpus e, por consequência, do mapa.

## Seção 12 — Anexo: o levantamento bruto

### A. Entrevista de recorte (Etapa 1) — perguntas feitas e respostas recebidas

> **1. Tema da análise:** "Mídia sintética controlável: vídeo e imagem" — tema 12 de 19 da disciplina, família "Percepção e mídia sintética".
> **2. Horizonte temporal:** 2031.
> **3. Público-alvo:** quem projeta mídia e interação.
> **4. Recorte geográfico:** global, com uma nota sobre o Brasil.
> **5. Premissas descartadas e viés:** descartar de início o que já é comum em produto de massa (a régua da disciplina); nenhuma outra exclusão. Viés desejado: neutro. Disrupção suspeita: nenhuma — descobrir. Ideias óbvias a excluir: as que servem para qualquer tema.
> **6. Tecnologias/vetores de interesse:** não pré-fixados; descobrir por varredura. Profundidade: três ordens. Modo: a partir de uma inovação/tema, não de um setor.
> **7. Critério declarado de mudança de ideia (perguntado fora do roteiro):** "evidência de que a adoção já passou da maioria inicial (Rogers) ou de que a tecnologia não rompe nada (só melhora o que existe)."
> **8. Condição de operação desta rodada:** sem usuário disponível para responder de volta. Onde faltou definição, assumi e declarei. Busca na web obrigatória e real; citar apenas o que foi aberto.

**O que a skill NÃO pôde fazer nesta rodada, e que o método pede.** O BLOQUEIO ABSOLUTO da Etapa 1 prevê interromper e aguardar. Não havia usuário. As respostas acima vieram pré-fornecidas pelo despacho da rodada; nenhuma foi inventada. Duas perguntas do roteiro ficaram sem resposta específica do usuário — a 6 (vetores de interesse) e o desdobramento sobre viés desejado — e foram assumidas como "descobrir por varredura" e "neutro", conforme instrução explícita de assumir e declarar.

### B. Contrato de execução (escrito antes de qualquer busca)

- **Objetivo:** mapa de futuro em 12 seções, horizonte 2031, sobre controle fino de geração de imagem e vídeo.
- **Critério de pronto:** 12 seções preenchidas; 3 disrupções que passem no filtro anti-maduro; roda com exatamente 6 / 12 / 18 efeitos e IDs únicos; toda fonte efetivamente aberta; Seção 8 com erros reais da sessão, não genéricos.
- **O que NÃO entra:** a história gerada (tema 8); som e voz (tema 13); design procedural sem IA (tema 14); reconstrução 3D e renderização neural (tema 10); detecção/visão (tema 11). Também não entra: geração por prompt simples, upscaling, interpolação, troca de rosto.
- **Risco declarado de partida:** o tema é dominado por material de fornecedor. Contrapeso: buscar deliberadamente dado negativo (o que falha, o que nenhum modelo faz) e preferi-lo quando vier de fonte com interesse contrário.

### C. Log das buscas (ordem real de execução)

| # | Busca / URL | O que devolveu | Destino |
|---|---|---|---|
| 1 | busca: `controllable video generation 2026 motion control keyframe arXiv` | survey 2507.16869 e vários papers de 2026 | abriu o survey |
| 2 | busca: `visual autoregressive modeling VAR NeurIPS 2024 best paper next-scale prediction` | arXiv 2404.02905, páginas do NeurIPS, blogs | abriu só o arXiv |
| 3 | abriu: `arxiv.org/abs/2507.16869` | taxonomia de 3 categorias, condições não-textuais, v3 19/01/2026 | fonte 1 |
| 4 | abriu: `arxiv.org/abs/2404.02905` | FID/IS, 20×, leis de escala, zero-shot | fonte 2 |
| 5 | busca: `C2PA Content Credentials adoption 2026 cameras platforms provenance standard` | 10 resultados, maioria SEO comercial | descartou 9, abriu Wikipédia |
| 6 | busca: `deepfake evidence courts 2026 authentication video rules of evidence` | Duke Law, HaystackID, revistas jurídicas | abriu Duke Law |
| 7 | abriu: `en.wikipedia.org/wiki/Content_Credentials` | falhas do Nikon Z6III e do Android; não-conformidade das câmeras | fonte 5 |
| 8 | abriu: `law.duke.edu/news/how-keep-deepfakes-out-court` | Grimm & Grossman; dois regimes propostos; problema da preponderância | fonte 6 |
| 9 | busca: `Rive state machine animation runtime 2026 Unity web iOS` | docs da Rive, GitHub, blogs | abriu rive.app/features |
| 10 | busca: `Runway Sora Veo Kling 2026 video model controls keyframes camera` | 8 blogs comparativos, todos comerciais | **descartada inteira** |
| 11 | abriu: `rive.app/features` | estados, transições, ouvintes, data binding, eventos, runtimes | fonte 4 |
| 12 | busca: `Brasil 2026 regulação deepfake PL 2338 rotulagem conteúdo` | TSE, Conjur, Câmara, Migalhas | abriu Câmara e (depois) Data Privacy Br |
| 13 | abriu: `tse.jus.br/.../tse-fixa-tese-sobre-deepfake...` | **HTTP 403** | falhou |
| 14 | busca: `open weights video generation 2026 Wan HunyuanVideo LTX ComfyUI` | LTX blog, Thunder Compute, guias locais | abriu Thunder Compute |
| 15 | abriu: `antihype.com.br/.../tse-deepfake-eleicoes-2026...` | **HTTP 403** | falhou |
| 16 | busca: `animation VFX industry jobs 2026 AI impact employment` | Cartoon Brew, VFX Voice, Context | abriu Cartoon Brew |
| 17 | abriu: `cartoonbrew.com/.../union-study-says-generative-ai-will-disrupt-204000-jobs...` | 204k/118,5k/21,4%; 300 executivos; 31/01/2024 | fonte 7 |
| 18 | abriu: `conjur.com.br/2026-jul-27/video-de-jair-bolsonaro...` | **HTTP 403** | falhou |
| 19 | busca: `TSE resolução 23.732 IA propaganda eleitoral 2026` | TSE, TRE-SE, Data Privacy Br, Conjur | abriu Data Privacy Br |
| 20 | abriu: `camara.leg.br/noticias/1256583-...` | PL 2688/25, 23/03/2026, multa de 2% | fonte 10 |
| 21 | busca: `AI generated film festival 2026 one person Sundance Cannes` | Tubefilter, Wikipédia Hell Grind, FilmFreeway | abriu os dois primeiros |
| 22 | abriu: `en.wikipedia.org/wiki/Hell_Grind` | US$500k, 80% compute, 2 semanas, 15 pessoas, prompt de 3.000 palavras | fonte 8 |
| 23 | abriu: `tubefilter.com/2026/05/26/cannes-...` | Cannes baniu IA da Competição Oficial | fonte 9 |
| 24 | busca: `ComfyUI 2026 node graph studios production pipeline JSON` | 9 blogs, um com separação fato/opinião | abriu LocalHost HQ |
| 25 | busca: `Runway Aleph in-context video editing 2026` | Runway Research + 7 revendas | abriu só o Runway Research |
| 26 | abriu: `runway.com/research/introducing-runway-aleph` | in-context, 25/07/2025, objetos/ângulo/luz | fonte 3 |
| 27 | abriu: `localhosthq.com/.../how-comfyui-is-eating-film-production-houses` | DAG em JSON, 106k estrelas, vagas nomeadas | fonte 13 |
| 28 | abriu: `dataprivacybr.org/.../ia-nas-eleicoes...` | sessão de 02/03/2026, rotulagem, janela de 72h/24h | fonte 11 |
| 29 | abriu: `thundercompute.com/blog/best-open-source-ai-video-generation-models` | tabela de modelos; **nenhum controle de câmera** | fonte 12 |
| 30 | abriu: `ltx.io/blog/open-source-video-generation-models-guide` | **erro de parse (header overflow)** | falhou |

**Contagem final:** 30 operações; 13 páginas abertas com sucesso e citadas; 4 falhas de acesso (3× HTTP 403, 1× erro de parse); 13 resultados de busca lidos e **não** citados por não terem sido abertos.

### D. Disrupções candidatas descartadas (com o motivo da derrota)

| Candidata | Por que foi descartada |
|---|---|
| "Modelos ficam mais realistas" | Melhoria num eixo já dominante. Não muda quem dirige nem o que é dirigível. Filtro anti-maduro, item "melhoria incremental". |
| "Geração barata rodando no celular" | Otimização de custo. Muda quem paga, não muda a natureza do controle. Mesmo filtro. |
| "Áudio e vídeo gerados juntos numa passada" (LTX-2.3) | Real e recente, mas é **tema 13** (som e voz). Fronteira da disciplina. |
| "Captura volumétrica / gaussian splatting como fonte de controle" | É **tema 10** (captura de realidade e renderização neural). Fora. |
| "Motion design procedural sem IA" (Cavalry, Graphite, Pixel Composer) | É **tema 14** (design procedural puro). Só entra aqui via `e1.1.2`, como pressão sobre o editor não-linear. |
| "Agentes que produzem vídeo sozinhos de ponta a ponta" | Serve para qualquer tema da disciplina. Excluída pelo critério "ideias óbvias que servem para qualquer tema". |
| "Direitos autorais sobre dado de treino" | Disputa jurídica real, mas não é disrupção técnica-raiz; entrou como efeito (`e3.2` e `e3.2.1`), que é o lugar certo dela. |
| "Propagação de quadro-chave pintado à mão" (EbSynth) | **Descartada com hesitação.** É o exemplo mais limpo de controle que existe, e é citado no enunciado do tema como "ainda a saída mais controlável para rotoscopia estilizada". Mas é técnica de 2019, já madura, e o que ela faz hoje está sendo absorvido pelo condicionamento estrutural por adaptador (fonte 12) e pela edição in-context (fonte 3). Sobreviveu como linhagem conceitual dentro da Disrupção 1, não como disrupção própria. |
| "Geração como grafo" (ComfyUI) | **Descartada como disrupção-raiz, mantida como efeito de peso.** O grafo não rompe a lógica do campo: ele é a **forma** que a ruptura assume. Virou `e1.1.2` e `e1.2`, além de sustentar o sinal fraco 4. Registrar isto importa porque foi a decisão mais difícil da rodada — houve um rascunho com quatro disrupções em que o grafo era a quarta. |

### E. Efeitos cortados da roda (e por que)

- **"Surge um mercado de autenticidade certificada"** — cortado como efeito de primeira ordem (estava proposto no enunciado do tema). Motivo: é reação de mercado, não consequência direta; foi rebaixado a `e5.2`, segunda ordem, que é onde ele pertence causalmente.
- **"Todo vídeo vira interativo"** — cortado como afirmação. Ver Erro 4 da Seção 8: nenhuma evidência aberta sustenta a ponte entre geração e estado. Virou `e4.2`, declarado como lacuna, sinal fraco.
- **"O jornalismo colapsa"** — cortado por preguiça analítica. É a conclusão que todo mapa de mídia sintética escreve, não decorre especificamente do **controle** (decorre da geração em si, que é madura), e não tinha fonte aberta que a sustentasse. Sobra dela apenas o que é defensável: `e5.1.1` e `e5.1.2`.
- **"A cadeia de custódia da imagem vira produto de assinatura com renda recorrente sobre o real"** — efeito de terceira ordem escrito e depois cortado por aritmética: a roda fechava com 19 folhas e o formato exige 18. Foi o mais fraco dos dois candidatos sob `e5.2` e caiu. Registro aqui porque é uma consequência plausível e a única razão de não estar no mapa é a contagem.
- **"O ensino de animação some"** — cortado por ser forte demais para a evidência disponível. Virou `e3.1.2`, que afirma algo menor e verificável: a escolha forçada entre ensinar o gesto e ensinar a direção.

### F. Log das iterações do documento

- **Iteração 1.** Rascunho com quatro disrupções (região / estado / arquitetura / grafo) e roda de 8-16-24. Descartado: o formato pede 3 disrupções e 6-12-18, e o grafo não passava no teste de "o que rompe" — ele é a forma da ruptura, não a ruptura.
- **Iteração 2.** Seção 3 escrita a partir de resultados de busca, com cinco fontes não abertas. Reescrita inteira depois da auditoria da Seção 11 (Erro 1). Perdeu os comparativos de produto, ganhou os dados negativos (nenhum controle de câmera em modelo aberto; prompt de 3.000 palavras).
- **Iteração 3.** Seção 9 escrita em futuro ("em 2031 o controle será..."). Reescrita em presente, como o formato exige.
- **Iteração 4.** Confiança de `e3` rebaixada de alta para média depois de rastrear o estudo até a metodologia (300 executivos, survey de intenção, janela 2024-2026 vencendo). A afirmação do texto foi ajustada junto, de "eliminará" para "projetando disrupção de".
- **Iteração 5.** Seção 7 reescrita para incluir o terceiro viés (simpatia pelo pequeno). Ele não estava no rascunho porque é o mais desconfortável: contradiz o enquadramento de democratização que atravessa a Seção 1 e o cenário desejável. Ficou como está, com a contradição declarada em vez de resolvida.
- **Iteração 6.** Conferência final da roda: 6 efeitos de 1ª ordem, 12 de 2ª, 18 de 3ª, IDs únicos de `e1` a `e6.2.2`, todos com `sinal`, `prazo` e `confianca`. Confere com o frontmatter.
