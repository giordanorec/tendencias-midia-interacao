---
tema: "Gerar geradores: design procedural e creative coding com IA"
slug: gerar-geradores-design-procedural-e-creative-coding-com-ia
autor_login: kvv
zona_de_interesse: Criação e plataforma
data: 2026-09-15
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 12
efeitos_ordem_3: 18
tecnologias_citadas: [geração code-native de 3D (TypeScript/Three.js, Blender Python), representação procedural compacta para LLM (Procedural Compact Graph), benchmark de executabilidade de código gráfico (3DCodeBench, P3D-Bench), agentes multi-etapa com crítica visual (LL3M), geração de shader GLSL por evolução interativa com LLM, agente dentro da ferramenta procedural via MCP (NodeArchitect/Houdini), nós SDF em grafo procedural (Substance 3D Designer 16), WebGPU em todos os navegadores, geradores procedurais randomizados como fonte de dados (Infinigen), creative coding permacomputacional (L5)]
fontes: 17
confianca: media
experimento: A turma recebe a mesma peça visual em duas formas — como arquivo gerado e como gerador em código — e mede quanto tempo leva para atender a três pedidos de mudança, contando quantas vezes cada forma exige começar de novo.
skill_usada: futurizacao-kvv
publico_ok: false
---

## 1. Resumo

Este mapa não trata de "IA que faz imagem 3D" nem de geração procedural clássica — ruído, wave function collapse, L-system, Processing — que existe há décadas e é tecnologia madura. Trata da inversão do objeto entregue: em vez do artefato, o **programa que produz o artefato**, escrito por um modelo e submetido a um portão que a imagem nunca tinha — compila e roda, ou não existe. Três rupturas ainda abertas até 2031 sustentam o mapa: a geração *code-native* com aceite por execução; a edição que deixa de ser regeração, porque a regra expõe parâmetro em vez de pixel; e a migração da autoria para a regra, com o agente operando a ferramenta procedural por dentro e o direito precisando decidir o que protege. As três colidem num ponto único: se tudo que é visual pode ser expresso como programa curto, quem projeta mídia projeta sistema, não peça. O mapa aplica a Roda dos Futuros em três ordens, audita as próprias contas e propõe um experimento de sala que mede custo de mudança, não beleza de resultado.

## 2. O tema

"Gerar geradores" nomeia uma escolha de representação, não uma tecnologia: em vez de produzir o artefato final — malha, pixel, quadro —, produzir a **regra** que o produz. Isso é design procedural, e é antigo: Processing nasceu em 2001, ruído e L-system são anos 1980, geradores randomizados de cena inteira já são infraestrutura de pesquisa em visão computacional, onde tudo — terreno, flora, material — é sintetizado por programas paramétricos aleatorizados sem biblioteca de asset [16]. O que muda agora é **quem escreve a regra**. Modelos de código passaram a produzir programas gráficos que rodam: script de Blender, fábrica de geometria em TypeScript, shader GLSL, grafo de nós, programa paramétrico de CAD.

Os pontos de contato com mídia e interação são três e são estruturais. **Primeiro, a natureza do que se entrega.** Mídia gerada como pixel é opaca, pesada e terminal: para mudar, gera-se de novo. Mídia gerada como programa é legível, diffável, versionável e leve — e continua editável depois de pronta. **Segundo, o ofício.** Se a IA escreve o gerador, o trabalho de quem projeta desloca-se para especificar regra, faixa, invariante e teste — atividade de projeto de sistema, com vocabulário de engenharia, dentro de uma profissão formada em composição e forma. **Terceiro, a prova de autoria.** Quando o objeto é um programa, existe um artefato intermediário que registra decisão humana passo a passo; quando é um render, não existe. Isso importa juridicamente: nos Estados Unidos, a Parte 2 do relatório do Copyright Office (29/01/2025) firmou que a obra é protegível na medida do controle criativo humano sobre elementos expressivos, e que prompt, por si, não fornece esse controle [8, 9].

Isso exige mapa prospectivo e não levantamento de estado da arte porque o que está indeterminado não é capacidade de modelo — é arranjo institucional e interacional. Um levantamento hoje concluiria que modelos de fronteira já escrevem código gráfico que roda em cerca de 91% dos casos em passe único [1], que existe representação procedural que cabe em 702 tokens contra 6.048 do equivalente em nós de Blender [4], e que já há plugin comercial em produção com agente operando grafo de nós por dentro [10]. Nada disso diz se a cadeia de produção vai trocar malha por fonte, se a loja de assets vira loja de programas, se o ensino de design se reescreve como ensino de sistemas, ou se a lei vai proteger a regra. Essas quatro se decidem por escolha coletiva — e por isso precisam ser projetadas, não inventariadas.

## 3. Onde isso está hoje

**O que funciona.** Escrever código gráfico que executa funciona. O 3DCodeBench (arXiv:2606.01057, junho de 2026) montou 26 mil triplas de prompt ↔ código autônomo ↔ objeto 3D em 212 categorias, com scripts de 531 linhas em média (mediana 387, alguns acima de 1.000), e mediu doze modelos de fronteira: executabilidade de passe único em torno de 0,91 nos melhores, e agregado subindo de 0,702 para 0,974 quando se devolve o erro de execução ao modelo [1]. Representação compacta funciona: o Proc3D (arXiv:2601.12234, 18/01/2026) traduziu 79 nós de geometry nodes do Blender para texto e relata 89% de taxa de compilação contra 0 a 45% das representações concorrentes, com o token do grafo caindo de 6.048 para 702 [4]. Edição sem regeração funciona em bancada: o mesmo trabalho reivindica "mais de 400× de aceleração" na edição frente a métodos que precisam gerar tudo outra vez [4]. Escrever shader com LLM funciona para quem não sabia escrever shader: no estudo do AI Co-Artist (arXiv:2512.08951, novembro de 2025), com 50 participantes, novatos produziram em média 4,2 shaders contra 0,6 no Shadertoy, e especialistas 6,8 contra 2,9, com erro de compilação abaixo de 3% após novas tentativas [3]. E há ferramenta de produção, não só artigo: o NodeArchitect coloca um agente dentro do Houdini — lê nós, parâmetros e conexões, gera VEX e Python, monta HDA a partir de descrição em linguagem natural, traz servidor MCP embutido, modo de plano e consentimento por ferramenta; versão 2.4.4, atualizada em 08/09/2026, com suporte a Houdini 20, 21 e 22 [10].

**O que falha.** Falha o raciocínio geométrico, não a sintaxe. O próprio 3DCodeBench registra que as falhas vêm sobretudo de incompatibilidade de API, mas que renders bem-sucedidos ainda exibem componentes desconectados ou flutuando [1]. O P3D-Bench (arXiv:2606.11152, junho de 2026), com 1.003 casos — 400 de texto, 400 de imagem, 203 de montagem —, conclui que os modelos acertam silhueta e identidade semântica e erram a geometria paramétrica exigida, e que a montagem de múltiplas peças é o cenário mais fraco: contagem e geometria de partes saem erradas [6]. Falha a autonomia: o LL3M (arXiv:2508.08228, agosto de 2025) reporta que a fase de autorrefinamento não corrige todos os defeitos iniciais, que a percepção espacial do modelo de visão é imperfeita, que cerca de 59% das edições do usuário se resolvem numa instrução e o resto exige de três a quatro, e que a geração inicial leva por volta de dez minutos [5]. Falha o orçamento de render: na discussão pública do trabalho de geração code-native de asset programável (55 pontos, 40 comentários no Hacker News), um desenvolvedor apontou que um objeto com cerca de 50 partes separadas estoura o orçamento de draw call de hardware comum, e a resposta do autor foi que fusão de malha, atlasing, LODs e proxies de colisão "ainda precisam ser testados" [11]. E falha a promessa de geração em tempo de execução: um fornecedor de motor procedural resume a posição de 2026 em uma frase — "a força da IA na geração procedural é escrever o gerador, não ser o gerador" — porque o modelo chamado durante o jogo traz latência perceptível, custo por sessão, dependência de rede e saída que não se reproduz a partir de uma semente [12].

**Quem está construindo.** Em pesquisa acadêmica: Princeton (Infinigen, geradores paramétricos randomizados como infraestrutura [16]), os grupos por trás de 3D-GPT, LL3M, Proc3D, ShapeLib e dos benchmarks 3DCodeBench e P3D-Bench [1, 4, 5, 6]. Em código aberto de comunidade: o img2threejs, que reconstrói o objeto de uma imagem como fábrica TypeScript de Three.js — só código, com portão de qualidade por etapa (blockout → estrutural → forma → material → superfície → luz → interação → otimização), revisão por visão antes de avançar, relatório de confiança por região, dependência zero fora da biblioteca padrão do Python, licença Apache 2.0, 15,8 mil estrelas e 1,3 mil forks no momento da consulta [2]; e o Graphite, editor 2D cujo modelo único é um grafo procedural avaliado em tempo real via wgpu. Na indústria de ferramenta: SideFX (Houdini) com plugins de terceiros abrindo a ferramenta ao agente [10]; Adobe, que em 21/07/2026 anunciou o Substance 3D Designer 16 aprofundando o **grafo** — nós de campo de distância assinada para construir forma 3D dentro do grafo, Shape Splatter v2 gerando variações com rotação e propriedades próprias, visualizador 3D como nó — e, notavelmente, **sem** anunciar geração de grafo por IA [13]. Na plataforma: WebGPU passou a vir habilitado por padrão em Safari 26 para macOS, iOS, iPadOS e visionOS [14], fechando o conjunto dos navegadores principais e tornando o cliente um alvo viável para geometria e shader gerados. Na margem: o L5 (arXiv:2606.18481, junho de 2026), biblioteca de creative coding em Lua que organiza o projeto em torno de permacomputação — consumo, longevidade, restrição deliberada de recursos, documentação legível sem conectividade [7]. No Brasil, o que se encontra publicado é formação em uso de IA para desenvolvimento e para processo criativo — por exemplo, o curso de extensão de 48 horas do Instituto de Computação da Unicamp em desenvolvimento de software apoiado por IA generativa, híbrido, para engenheiros, desenvolvedores e analistas de qualidade [15] —, não formação em projeto de gerador. É uma diferença que importa e que a seção 7 cobra deste mapa.

## 4. As disrupções-raiz

### Nota de recusa (Etapa 2 — filtro anti-tecnologia madura)

Quatro candidatas foram **formalmente recusadas** antes de entrar no mapa. A recusa é parte do resultado, porque três delas são exatamente o que se costuma vender como novidade neste tema.

- **Geração procedural clássica** (ruído, wave function collapse, L-system, costura de salas, Processing/p5, Shadertoy). Madura em toda medida razoável: Processing tem 25 anos, geradores randomizados de cena inteira são infraestrutura corrente de pesquisa [16] e um fornecedor descreve o gerador determinístico como o caminho conhecido — milissegundos, custo zero por sessão, offline, reprodutível por semente [12]. Recusada: é o substrato sobre o qual a ruptura acontece, não a ruptura.
- **Copiloto de código escrevendo shader ou sketch de p5 sob pedido.** É aceleração de tarefa dentro de uma lógica que não muda: alguém continua sendo o autor do programa e o LLM completa trechos. Os ganhos medidos são reais e grandes — 4,2 contra 0,6 shaders por novato, 60% menos tempo até o primeiro resultado [3] —, mas o objeto, o pipeline e a economia permanecem os mesmos. Recusada como disrupção; aproveitada como **evidência de viabilidade** das rupturas 1 e 3.
- **Geração de malha e de pixel por difusão** (imagem-para-malha, texto-para-vídeo, splat). Atravessou a maioria inicial, é produto de massa e cai na régua da disciplina. Também é objeto declarado dos temas 10 e 12, não deste. Recusada.
- **Texto-para-CAD como produto.** Existe agente conversacional comercial em CAD paramétrico desde o início de 2026 e uma família de trabalhos de geração de código CAD. É o mesmo movimento da ruptura 1 aplicado a um vertical de engenharia, com aceite por execução e por restrição geométrica. Recusada por redundância metodológica — contaria a mesma história duas vezes — e não por falta de importância.

### Disrupção 1 — O artefato entregue passa a ser o programa, e o aceite passa a ser a execução

**O que rompe.** Rompe a unidade de entrega da mídia digital. Durante trinta anos o que circulou entre quem cria e quem integra foi arquivo opaco: malha, textura, quadro, agora splat. O aceite era perceptual — parece certo? Quando a saída é programa, entra um portão que a imagem nunca teve: **compila e roda, ou não existe**. Isso rompe três coisas juntas. Rompe o formato de troca, porque o que se versiona é fonte tipada e diffável, não binário [2]. Rompe o laço de qualidade, porque erro de execução é sinal automático e barato — devolver o erro ao modelo levou a executabilidade agregada de 0,702 para 0,974 no 3DCodeBench, sem trocar de modelo [1]. E rompe a economia da tentativa: o custo deixa de estar num passe caro de difusão e passa a estar em muitas tentativas baratas com verificação, o que muda o que se pode orçar.

**Por que agora e não há cinco anos.** Três coisas mudaram ao mesmo tempo. Primeiro, os modelos passaram a escrever programa gráfico longo que roda — scripts de 531 linhas em média, alguns acima de mil, com executabilidade de passe único em torno de 0,91 nos melhores [1]; em 2021 isso não existia em nenhuma medida. Segundo, apareceu **representação** feita para modelo, e não para humano: comprimir o grafo de nós num formato de 702 tokens [4] é o que torna o problema tratável dentro de uma janela de contexto — o gargalo era de representação tanto quanto de capacidade. Terceiro, o laço de crítica visual automatizada amadureceu: sistemas multiagente com planejador, codificador, crítico e verificação por visão passaram a corrigir a própria saída [5], e pipelines de comunidade formalizaram portão por etapa com revisão obrigatória antes de avançar [2].

**O que falta para se concretizar.** Falta raciocínio geométrico e paramétrico: os modelos acertam silhueta e erram dimensão, topologia e montagem de peças [6], e renders que executam ainda trazem componente flutuando [1]. Falta o caminho para produção: sem fusão de malha, atlasing, LOD e proxy de colisão, um objeto de cinquenta partes é elegante no artigo e inviável no motor [11]. Falta padrão: cada trabalho inventa a sua representação — código de Blender, fábrica de Three.js, grafo compacto, programa de CAD — e sem formato comum não há cadeia de ferramentas. E falta resolver quem é o juiz: se o aceite é "roda e se parece", quem define o renderizador e a métrica perceptual define a estética aceitável.

### Disrupção 2 — A edição deixa de ser regeração, e o peso volta a ser argumento

**O que rompe.** Rompe o laço *prompt → resultado → prompt de novo*, que é a gramática de interação de toda a mídia generativa de massa. Se a saída expõe parâmetro nomeado, a mudança é um slider e não um novo passe de inferência — o Proc3D reivindica mais de 400× de diferença entre ajustar e regenerar [4]. Isso rompe a noção de versão (há fonte, há diff, há histórico de decisão), rompe a colaboração (revisão por pull request em vez de troca de arquivo) e rompe a divisão entre quem cria e quem ajusta. E rompe o orçamento de entrega: uma captura típica produz de 5 a 15 milhões de splats a 200–500 MB, e a recomendação prática para web fica em 50–100 MB no desktop, 30–50 MB no laptop e 15–30 MB no celular, com carga inicial de 20 a 200 MB [17]. Programa que gera geometria no cliente, com WebGPU habilitado por padrão em todos os navegadores principais [14], joga em outra faixa de peso — e peso, no óculos e no celular, é decisão de projeto, não detalhe.

**Por que agora e não há cinco anos.** Porque as duas pontas ficaram prontas quase juntas. De um lado, apareceu saída paramétrica de verdade: parâmetros expostos como slider e checkbox, partes nomeadas com pares de contato, ajuste por linguagem natural sobre o mesmo objeto [2, 4]. De outro, o cliente passou a ter API gráfica moderna universal — WebGPU por padrão em Safari 26 além de Chrome, Edge e Firefox [14] —, e ferramentas de autoria consolidaram o grafo procedural como modelo central em vez de camada acessória: o Graphite avalia um grafo em tempo real via wgpu, e o Substance 3D Designer 16 levou construção de forma 3D para dentro do grafo com nós SDF [13]. Há cinco anos não havia nem a saída editável nem o alvo de execução universal.

**O que falta para se concretizar.** Falta a camada que permite a quem não programa editar a regra: hoje o parâmetro é legível para quem lê TypeScript ou grafo, e o público de design é maior que isso. Falta cadeia de otimização automática do fonte para alvo — compilar a mesma peça diferente para web, celular e headset é proposta declarada, não prática estabelecida [11]. Falta contrato: quem responde pela variação que o gerador produz fora da faixa testada? A reprodutibilidade por semente é justamente o que dá para depurar [12], e ninguém ainda escreve isso em briefing. E falta cultura: a estética procedural — primitiva, repetição, shader — carrega estigma de limitação técnica, e o mapa aposta que ela volta como escolha; essa aposta é a mais frágil deste documento.

### Disrupção 3 — A autoria migra para a regra: o agente opera a ferramenta, e o direito precisa decidir o que protege

**O que rompe.** Rompe a interface. Software criativo profissional foi projetado para mão e olho humanos; quando um agente lê nós, parâmetros e conexões, gera VEX e monta HDA a partir de descrição em linguagem natural [10], a ferramenta passa a ter dois usuários com necessidades opostas — e um deles não vê a tela. Rompe a divisão de trabalho: o artista técnico deixa de construir o grafo e passa a revisar, travar e nomear o que o agente construiu, o que é atividade de arquitetura, não de execução. Rompe o ensino: avaliar um aluno pela peça mais bonita deixa de fazer sentido quando a peça é uma amostra de um espaço de possibilidades que ele definiu — o que se examina é o gerador. E rompe a pergunta jurídica: se prompt não confere controle criativo suficiente e a proteção alcança o que o humano de fato controlou e arranjou [8, 9], então **o programa é o lugar onde a autoria humana é demonstrável** — o render é exemplar, o gerador é a obra.

**Por que agora e não há cinco anos.** Porque a chave não é o modelo, é o **acesso**: protocolo de ferramenta (MCP), chamada de função nativa, consentimento por ferramenta e modo de plano tornaram viável deixar um agente escrever dentro do arquivo do cliente com risco administrável — e isso já está em plugin comercial versionado, atualizado em setembro de 2026, suportando três versões do Houdini [10]. Em 2021 não havia protocolo, não havia agente multi-etapa confiável e não havia jurisprudência administrativa: a Parte 2 do relatório do Copyright Office é de janeiro de 2025 [8], e a exigência de autoria humana só foi consolidada judicialmente em seguida [9].

**O que falta para se concretizar.** Falta linguagem de intenção: não existe vocabulário estabelecido para especificar regra — faixa válida, invariante, o que nunca pode acontecer — e sem isso "especificar sistema" continua sendo escrever prosa e torcer. Falta verificação de gerador: sabemos testar uma saída, não sabemos atestar que um gerador não produz a saída proibida em nenhuma semente. Falta currículo: as formações brasileiras publicadas ensinam a usar IA no processo criativo e no desenvolvimento [15], não a projetar geradores, e reescrever disciplina de projeto é ciclo de anos. E falta decisão jurídica sobre o gerador como objeto — registrar fonte e sementes como prova de autoria é hipótese razoável, sem nenhum precedente aberto que a sustente.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "O artefato entregue passa a ser o programa, e o aceite passa a ser a execução"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "O critério de aceite da mídia gerada deixa de ser semelhança perceptual e passa a ser execução — o que não compila e não roda não entra no pipeline"
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "Ferramentas de criação embutem o laço de correção por erro de execução, e a taxa de entrega sobe sem o modelo de base ficar melhor"
            sinal: forte
            prazo: 2029
            confianca: alta
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "O custo da criação visual migra de um passe caro para muitas tentativas baratas com verificação, e o orçamento de estúdio passa a ser medido em tentativas por peça"
                sinal: medio
                prazo: 2031
                confianca: media
              - id: e1.1.2
                ordem: 3
                efeito: "Forma-se mercado de ambiente de execução como serviço, e quem opera o renderizador que julga a peça passa a definir o que é aceitável esteticamente"
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "A revisão por modelo de visão vira etapa contratada do pipeline, com parecer da máquina anexado à entrega"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.2.2
                ordem: 3
                efeito: "Métricas perceptuais entram em cláusula de aceite, e o cliente passa a comprar número de similaridade em vez de peça aprovada por pessoa"
                sinal: medio
                prazo: 2032
                confianca: media
      - id: e2
        ordem: 1
        efeito: "A malha deixa de ser o formato de troca em parte da cadeia: o que circula entre equipes é fonte tipada, versionada e diffável"
        sinal: medio
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "O controle de versão engole o pipeline de arte, e revisão por pull request substitui troca de arquivo binário em parte dos times"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Alfabetização em versionamento passa a ser requisito de vaga de design, e o portfólio vira repositório com histórico de decisão"
                sinal: medio
                prazo: 2032
                confianca: media
          - id: e2.2
            ordem: 2
            efeito: "Bibliotecas de asset viram bibliotecas de gerador: vende-se a função paramétrica, não o modelo pronto"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "Licenciamento passa a precificar faixa de parâmetro e número de variações permitidas, e não unidade de arquivo entregue"
                sinal: fraco
                prazo: 2033
                confianca: baixa
  - disrupcao: "A edição deixa de ser regeração, e o peso volta a ser argumento de projeto"
    efeitos:
      - id: e3
        ordem: 1
        efeito: "Editar deixa de ser gerar de novo: mexer no parâmetro muda a peça na hora, e o prompt volta a ser apenas a primeira etapa da produção"
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "A interface de criação converge para grafo mais código mais controle direto, e o campo de prompt perde o centro da tela"
            sinal: forte
            prazo: 2030
            confianca: alta
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Quem projeta passa a entregar o espaço de possibilidades — faixas, travas, invariantes — e o cliente escolhe dentro dele"
                sinal: medio
                prazo: 2031
                confianca: media
              - id: e3.1.2
                ordem: 3
                efeito: "Abre-se disputa de responsabilidade sobre a variação que o gerador produz fora da faixa testada, e o contrato passa a citar semente e intervalo"
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "Identidade visual de marca passa a ser distribuída como gerador travado em vez de manual em PDF"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "Auditoria de marca vira teste automatizado: roda-se o gerador em milhares de sementes procurando a saída que viola a identidade"
                sinal: medio
                prazo: 2033
                confianca: media
      - id: e4
        ordem: 1
        efeito: "O peso volta a ser argumento estético e econômico, porque entregar programa em vez de captura muda o que cabe no navegador e no óculos"
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "A web 3D divide-se por natureza do conteúdo — captura para o que existe, programa para o que se inventa — e a peça híbrida passa a ser o normal"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "O visual procedural — primitiva, repetição, shader — retorna como escolha estética declarada, e não como marca de limitação técnica"
                sinal: medio
                prazo: 2031
                confianca: media
              - id: e4.1.2
                ordem: 3
                efeito: "Consumo computacional entra no briefing como item declarado, do mesmo modo que acessibilidade entrou na década anterior"
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "Compilar o mesmo fonte para alvos diferentes vira etapa padrão, e o orçamento de draw call passa a ser escrito na especificação de projeto"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "Motores passam a aceitar o gerador como formato de distribuição, e a loja de assets vira loja de programas"
                sinal: fraco
                prazo: 2033
                confianca: baixa
              - id: e4.2.2
                ordem: 3
                efeito: "Conteúdo gerado no instante em que o jogador chega deixa de ser wildcard e se estabiliza como recurso de nicho, contido por custo e por exigência de reprodutibilidade"
                sinal: medio
                prazo: 2034
                confianca: media
  - disrupcao: "A autoria migra para a regra: o agente opera a ferramenta procedural e o direito precisa decidir o que protege"
    efeitos:
      - id: e5
        ordem: 1
        efeito: "O agente passa a operar a ferramenta profissional por dentro — grafo de nós, VEX, HDA — e a interface do software deixa de ser feita só para humanos"
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "O trabalho do artista técnico desloca-se de construir o grafo para revisar, travar e nomear o que o agente construiu"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Domínio de ferramenta específica perde valor de mercado, e capacidade de especificar sistema passa a ser o que se contrata"
                sinal: medio
                prazo: 2031
                confianca: media
              - id: e5.1.2
                ordem: 3
                efeito: "Fornecedores de software passam a cobrar pelo acesso de agente à própria API, criando pedágio sobre a automação de estúdio"
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "Consentimento por ferramenta e modo de plano tornam-se padrão de segurança em software criativo, porque o agente escreve dentro do arquivo do cliente"
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "Um incidente de agente destruindo trabalho não versionado força versionamento obrigatório dentro da suíte criativa"
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: "O ensino de design começa a ser reescrito como ensino de sistemas: regra, parâmetro, invariante e teste entram no lugar de composição isolada"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "Disciplinas de projeto passam a avaliar o gerador entregue pelo aluno — leitura do código, faixa de variação, travas — em vez da peça mais bonita"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "Portfólios de design deixam de ser galeria de imagens e passam a ser demonstração interativa com controles expostos"
                sinal: medio
                prazo: 2033
                confianca: media
          - id: e6.2
            ordem: 2
            efeito: "A pergunta jurídica desloca-se do render para a regra, porque é no programa que a decisão humana fica demonstrável"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "Escritórios passam a depositar fonte e sementes como prova de autoria, e o render passa a ser tratado como exemplar e não como obra"
                sinal: fraco
                prazo: 2033
                confianca: baixa
              - id: e6.2.2
                ordem: 3
                efeito: "Abre-se discussão sobre proteger a regra em si, com risco de travar vocabulário procedural comum como ruído, wave function collapse e L-system"
                sinal: fraco
                prazo: 2035
                confianca: baixa
```

**O que o bloco não exprime sozinho.** Primeiro: quatorze dos dezoito efeitos de terceira ordem têm prazo além de 2031, e isso é declarado de propósito. Este tema tem inércia institucional — currículo de design, jurisprudência, formato de distribuição de motor de jogo — e fingir que essas coisas acontecem dentro do horizonte seria o erro mais comum do gênero. O que o mapa afirma para 2031 são as duas primeiras ordens; a terceira é o vetor, não a data.

Segundo: a roda é desenhada como árvore e o objeto real é uma malha. Três cruzamentos importam mais que qualquer ramo isolado. (a) `e1` (aceite por execução) e `e6.2` (autoria na regra) se reforçam: um pipeline que já versiona fonte produz, de graça, a prova de controle criativo humano que o direito passou a exigir. (b) `e4` (peso) e `e2.2` (loja de geradores) se reforçam: se compilar o mesmo fonte para alvos diferentes vira rotina, vender a função é mais valioso que vender o arquivo. (c) `e3.1` (grafo e controle voltando ao centro da tela) **contraria** parte da corrida atual de produto, que investe em caixa de prompt; se essa contramão não acontecer, a segunda disrupção morre na bancada e o mapa perde um terço.

Terceiro: há um efeito que não entrou como nó e atravessa tudo — a assimetria de acesso. Escrever gerador exige ler código; enquanto isso for verdade, "gerar geradores" amplia a distância entre quem projeta com programa e quem opera ferramenta de caixa. Nenhum dos nós acima resolve isso, e nenhuma fonte consultada mede.

Quarto: a confiança cai por construção (cinco efeitos de primeira ordem em confiança alta, dois na segunda, nenhum na terceira), e isso não é modéstia retórica — é a única forma honesta de registrar que a primeira ordem está ancorada em número medido [1, 3, 4, 6] e a terceira é raciocínio sobre instituição.

## 6. Sinais fracos e wildcards

**Sinais fracos.**

1. **O agente entra na ferramenta pela porta de serviço, não pela porta grande.** A integração relevante em 2026 não vem do fabricante: vem de plugin de terceiro, vendido por artista, com MCP embutido, consentimento por ferramenta e suporte a três versões do Houdini [10]. Enquanto a Adobe aprofunda o grafo para o humano [13], quem abre a ferramenta ao agente é a comunidade.
2. **A economia da geração está sendo recontada em tokens.** Um projeto de comunidade se descreve como "token-efficient image-to-3D" e organiza o pipeline para gastar uma imagem de comparação por ciclo de revisão [2]; um artigo comprime o grafo de 6.048 para 702 tokens e trata isso como resultado principal [4]. Quando a unidade de custo da criação visual vira token, muda quem consegue competir.
3. **Benchmark de executabilidade está substituindo benchmark de beleza.** Em menos de um ano apareceram pelo menos dois conjuntos de avaliação cujo eixo primário é "o programa roda" [1, 6]. Métrica define pesquisa; isso é um sinal de que o campo está migrando de visual para verificável.
4. **Permacomputação encostando no creative coding.** Uma biblioteca nova organiza o projeto em torno de consumo, longevidade e restrição deliberada de recursos [7]. É marginal hoje e casa exatamente com a vantagem estrutural da mídia programada: leveza como valor declarado, não como consequência.
5. **A geração em tempo de execução está sendo desaconselhada por quem vende geração.** O argumento contra não é técnico e sim de engenharia de produto — latência sentida, custo por sessão, ausência de reprodutibilidade por semente [12]. Sinal fraco relevante porque vem do lado que teria interesse em prometer o contrário.
6. **A montagem é o gargalo nomeado.** Três trabalhos independentes apontam a mesma falha: partes que não se conectam, contagem errada de peças, geometria flutuando [1, 5, 6]. Quando falhas convergem assim, a próxima leva de avanço tende a vir daí — e quem projeta deveria estar olhando para isso, não para fidelidade de textura.

**Wildcard (baixa probabilidade, alto impacto).** Um motor de jogo ou navegador de grande porte adota **o gerador como formato nativo de distribuição de conteúdo** — não malha, não splat, mas programa assinado que o cliente executa para materializar a cena, com semente e faixa de parâmetro no manifesto. Se isso acontecer antes de 2031, o mapa inteiro se reorganiza: o peso deixa de ser argumento e passa a ser padrão; a loja de assets vira loja de programas da noite para o dia (`e4.2.1` salta da terceira ordem para a primeira); a autoria passa a ser discutida sobre código, com toda a maquinaria de licença de software que já existe; e a assimetria de acesso descrita na seção 5 vira problema de política pública, porque quem não escreve programa perde o canal de distribuição. Probabilidade baixa por uma razão concreta e medida: hoje um objeto code-native de cinquenta partes estoura orçamento de draw call em hardware comum, e a cadeia de otimização que resolveria isso é declarada como não testada [11].

**Anti-wildcard (o que faria o mapa envelhecer rápido sem nada disso acontecer).** Um modelo de difusão que passe a emitir malha limpa, com partes nomeadas e parâmetros expostos, sem intermediar por programa. Nesse caso a editabilidade — que é o argumento central das disrupções 1 e 2 — deixa de depender de código, e "gerar geradores" vira uma curiosidade de engenharia em vez de uma virada de representação.

## 7. Contra o próprio mapa (teste adversarial)

**Extrapolação linear.** O mapa assume que a curva de executabilidade continua subindo e arrasta o resto. Ela pode estar perto do teto útil: 0,91 em passe único e 0,974 com correção por erro [1] são números de *rodar*, não de *estar certo*, e o benchmark que mede geometria paramétrica é exatamente o que mostra fracasso em montagem [6]. É perfeitamente possível que 2031 chegue com 0,99 de executabilidade e a mesma incapacidade de compor cinco peças na posição correta — caso em que a disrupção 1 se realiza como brinquedo e não como pipeline. Segundo viés linear: tratei "código é editável" como se implicasse "editável por quem projeta". Não implica, e o mapa se apoia nessa passagem mais do que deveria.

**Velocidade de adoção irreal.** Coloquei `e5` (agente operando a ferramenta) em 2028 com confiança alta apoiado em **um** plugin comercial de terceiro [10]. Um plugin não é adoção; é existência. Estúdio grande tem pipeline homologado, contrato de confidencialidade que restringe modelo externo e aversão a ferramenta que escreve dentro do arquivo do cliente — as próprias travas de consentimento e modo de plano [10] existem porque esse medo é real. Também suspeito de `e6` (2029, ensino como sistemas): reforma curricular no Brasil tramita em anos, e o que se encontra publicado hoje é formação em *usar* IA [15], o que é um degrau antes. Se eu fosse honesto até o fim, `e6` iria para 2031 e a confiança cairia para baixa.

**Falha da disrupção.** A hipótese mais frágil é a segunda, e o motivo não é técnico: é de mercado. A indústria está investindo em prompt, e o mapa aposta que o grafo e o controle direto voltam ao centro da tela (`e3.1`). O único sinal forte a favor é uma anti-evidência interessante — a Adobe aprofundou o grafo procedural em julho de 2026 sem anunciar geração de grafo por IA [13] —, e isso pode significar duas coisas opostas: que o grafo é o futuro, ou que o fabricante não acredita que IA saiba construí-lo. A disrupção 3 também pode falhar por um caminho diferente: se o direito decidir que o programa gerado por modelo tampouco tem autoria humana suficiente, "depositar o gerador" não protege nada e `e6.2` cai inteira. A decisão administrativa de 2025 fala em controle criativo humano sobre elementos expressivos [8, 9] — e não está dito em lugar algum que revisar código conta como isso.

**Viés pessoal do autor.** A zona de interesse é "Criação e plataforma", e há um viés estético declarado: gosto do argumento de que programa é melhor que pixel — mais leve, mais legível, mais honesto. Isso me faz tratar leveza como valor universal quando ela é, na maior parte do mercado, indiferente: o público que consome mídia não paga por peso, paga por resultado. Também escolhi fontes que confirmam: benchmarks de código e projetos procedurais, pouca literatura de quem defende pipeline de difusão ponta a ponta. E há um viés de comunidade: dei peso a um projeto de código aberto cujas 15,8 mil estrelas [2] medem entusiasmo de desenvolvedor, não adoção em produção — exatamente o tipo de número que eu criticaria num mapa alheio.

## 8. O que a máquina errou

1. **Data errada por leitura de identificador.** No primeiro resumo do 3DCodeBench a máquina escreveu "publicado em maio de 2026" para o arXiv:2606.01057. O prefixo `2606` é junho de 2026. Corrigido no texto para junho; fica o registro de que datar por memória do identificador é um erro recorrente e silencioso.
2. **Citação com referência quebrada, pega na conferência.** Um trecho da disrupção 2 saiu com a marca de fonte literalmente escrita como "[16 → ver nota; fonte 6 da lista é outra]", porque os números de gaussian splatting e os de Infinigen disputaram o mesmo índice enquanto a lista final ainda não existia. Detectado ao numerar a seção 11 e conferir cada marca contra a lista; a fonte dos pesos de captura passou a ser a de número 17 e a lista foi para dezessete itens.
3. **Números de peso de splat usados antes de abrir a fonte.** Os valores de 200–500 MB por captura e de 20–200 MB de carga inicial apareceram primeiro num resumo de busca, sem página aberta. Como a régua deste tema é "só cite o que abriu", a página foi aberta antes de o número ficar no texto [17]; sem isso, o número seria cortado.
4. **Tentação de inventar o dado brasileiro.** Ao escrever o recorte nacional, o primeiro rascunho ia afirmar que "cursos brasileiros de design já incluem creative coding com IA". Nenhuma fonte consultada sustenta isso. O que se achou foi formação em uso de IA no desenvolvimento e no processo criativo [15] — e a seção 3 passou a dizer exatamente isso, com a diferença nomeada. O mapa perdeu força retórica e ganhou verdade.
5. **PDF ilegível tratado como fonte.** A primeira tentativa de ler o P3D-Bench e o L5 foi pelo PDF: uma estourou o limite de tamanho e a outra devolveu fluxo binário, e o resumo automático "não encontrou" o conteúdo. Se o resumo tivesse sido aceito, o mapa citaria dois artigos sem os ter lido. As duas foram relidas pela página de resumo do arXiv antes de entrar [6, 7].
6. **Raciocínio fraco descartado no meio.** Havia um efeito escrito como "o direito autoral de regra vira o principal campo de disputa da mídia até 2031". É afirmação de magnitude sem nenhuma base: não há caso, não há processo, não há lei citada. Foi rebaixado para `e6.2.2`, terceira ordem, sinal fraco, confiança baixa, prazo 2035 — que é onde uma especulação desse porte pertence.
7. **O que continua não verificado, e está declarado como tal.** As estrelas e forks do img2threejs, o portão de qualidade por etapa e a eficiência em tokens são **autodescrição do projeto** [2], não medição independente; a aceleração de "mais de 400×" na edição é reivindicação dos autores do Proc3D em bancada própria [4]; e os números do AI Co-Artist vêm de estudo com usuários sem replicação [3]. Nenhum deles foi tratado como fato do mundo no texto, e a seção 11 registra a confiabilidade correspondente.

## 9. Três cenários para 2031

**Provável.** O programa ganhou uma fatia da cadeia e não a cadeia. Em produção de web, de motion design e de conteúdo para headset, o entregável já é fonte: fábricas paramétricas versionadas em repositório, revisadas por pull request, compiladas de formas diferentes para desktop, celular e óculos, com o aceite dado por um teste que executa a peça e um parecer de modelo de visão anexado. Difusão continua reinando onde o objetivo é o quadro final — cinema, publicidade de imagem, vídeo —, e captura continua reinando onde o objeto existe no mundo. O artista técnico virou revisor de grafo construído por agente: ele lê, trava faixa, nomeia partes e garante que o gerador não produza a peça proibida. A loja de assets vende as duas coisas, arquivo e gerador, com o gerador saindo mais caro. O ensino de design mudou pouco no currículo formal e muito na prática de estágio, onde ninguém contrata mais quem não sabe ler um diff. A disputa jurídica está aberta e sem resposta: escritórios depositam fonte e sementes por precaução, sem saber se isso vale.

**Desejável.** A leveza virou argumento explícito de projeto e o campo ganhou vocabulário para isso. Peças declaram consumo do mesmo jeito que declaram acessibilidade, e a mídia programada é escolhida por ser auditável — dá para ler a regra, achar o que produz o viés, corrigir a linha. O grafo e o controle direto voltaram ao centro da interface, e a caixa de prompt ficou onde devia: na primeira etapa. Apareceu a camada que faltava, uma forma de editar regra sem escrever código, e por causa dela a assimetria de acesso diminuiu em vez de crescer — projetar sistema deixou de ser privilégio de quem programa. O ensino de design incorporou regra, parâmetro, invariante e teste sem abandonar forma e composição, e os portfólios pararam de ser galerias: são demonstrações com controles, onde se examina o espaço de possibilidades que a pessoa desenhou. No Brasil, a formação chegou junto e não cinco anos depois, porque o insumo é barato — navegador, código aberto, dependência zero.

**Indesejável.** O gerador virou pedágio. Fabricantes de ferramenta cobram pelo acesso de agente à própria API, plataformas cobram pelo ambiente de execução que julga a peça, e a métrica perceptual do renderizador de quem cobra passou a definir o que é bonito. O aceite por execução, que era um portão honesto, virou cláusula contratual onde o cliente compra um número e a pessoa que projeta perde o direito de discordar dele. A assimetria de acesso cresceu: quem lê código projeta sistemas e captura valor; quem não lê opera caixa de prompt e entrega peça avulsa por preço de commodity — e o ensino, em vez de corrigir, ratificou a divisão. A montagem nunca foi resolvida, então o mundo se encheu de objetos programados com partes flutuando que ninguém revisa porque o modelo de visão aprovou. E o direito escolheu o pior dos dois lados: negou autoria ao render e não reconheceu o gerador, de modo que a única proteção viável passou a ser segredo — geradores fechados, sem fonte, sem semente, sem auditoria. A representação legível venceu tecnicamente e foi trancada.

## 10. O experimento

**O que é.** Uma bancada de custo de mudança, chamada **Dois Coelhos**. A turma recebe a mesma peça visual em duas formas: (A) como artefato gerado — uma imagem ou um modelo exportado, sem fonte; (B) como gerador — um arquivo de código curto que produz a peça, com parâmetros nomeados. Em seguida recebe três pedidos de mudança em ordem crescente de crueldade: *muda a cor de uma parte*; *muda a proporção dessa parte sem mexer nas outras*; *faz cinco variações que sejam reconhecivelmente a mesma família*. Cronômetro em cada pedido. Registra-se tempo, número de vezes em que foi preciso começar de novo, peso do arquivo final e — o dado que costuma surpreender — se a pessoa consegue explicar *por que* a peça ficou daquele jeito.

**Pergunta sobre o futuro.** A vantagem da mídia programada é a editabilidade. A editabilidade é vantagem *para quem*? Se o ganho medido aparecer só entre quem lê código, então "gerar geradores" não democratiza a criação: redistribui poder para quem já programa — e a terceira disrupção deste mapa se cumpre com o sinal invertido.

**Tecnologia emergente usada.** Um agente de código escrevendo o gerador (a forma B é produzida em sala pelo próprio modelo, não preparada antes), Three.js ou p5.js como alvo de execução no navegador — WebGPU disponível por padrão em todos os navegadores principais dispensa qualquer instalação [14] —, e, como forma A, uma saída de modelo generativo de imagem ou de malha. Opcionalmente, um grafo de nós no lugar do código, para testar se a mediação visual muda o resultado.

**Atividade da turma.** Catorze pessoas, duas rodadas cruzadas de cerca de 25 minutos. Na primeira, metade recebe A e metade recebe B; na segunda, trocam — o cruzamento evita que o resultado meça apenas quem já sabia programar. Cada dupla anota os quatro registros por pedido numa planilha comum. Nos dez minutos finais, uma única pergunta em plenário: em que momento você quis jogar a peça fora e recomeçar? Esse instante é o dado qualitativo mais valioso da bancada, porque é ali que a diferença entre editar e regerar aparece como experiência, e não como número.

**Resultado de mudança de ideia.** Se o grupo B levar vantagem clara nos três pedidos **e** o terceiro pedido (a família de variações) só for cumprido por B, a disrupção 2 deste mapa se fortalece e a leveza deixa de ser argumento estético para ser argumento de custo. Se a vantagem de B aparecer apenas entre quem já programava, eu tenho de reescrever `e3.1` e `e6`: a interface de grafo e o ensino de sistemas deixam de ser consequência e passam a ser **pré-condição** — sem eles, a disrupção não tem público. E se o grupo A vencer o primeiro pedido por larga margem, eu tenho de aceitar o que a seção 7 já suspeita: para mudança pequena, regerar é mais rápido que entender, e a editabilidade só paga a partir de certa complexidade. Nesse caso o mapa precisa declarar onde está esse limiar — e nenhuma das dezessete fontes consultadas o mede.

## 11. Fontes

1. **3DCodeBench: Benchmarking Agentic Procedural 3D Modeling Via Code** — `https://arxiv.org/html/2606.01057v1` — sustenta as contagens de executabilidade (0,91 em passe único; 0,702 → 0,974 com correção por erro), o tamanho dos scripts (531 linhas em média, mediana 387), a escala do conjunto (26 mil triplas, 212 categorias) e a falha de componentes desconectados. Confiabilidade: **alta** (artigo com método e números explícitos; ainda preprint).
2. **img2threejs** — `https://github.com/img2threejs/img2threejs` — sustenta a descrição do pipeline code-native com portão de qualidade por etapa, saída como fábrica TypeScript diffável, dependência zero, licença Apache 2.0 e as métricas de comunidade (15,8 mil estrelas, 1,3 mil forks). Confiabilidade: **média** — é fonte primária para o que o projeto *é* e autodescrição para o que o projeto *consegue*.
3. **AI Co-Artist: A LLM-Powered Framework for Interactive GLSL Shader Animation Evolution** — `https://arxiv.org/html/2512.08951v1` — sustenta os números do estudo com 50 participantes (4,2 contra 0,6 shaders entre novatos; 6,8 contra 2,9 entre especialistas; erro de compilação abaixo de 3%; 60% menos tempo até o primeiro resultado). Confiabilidade: **média** (estudo único, sem replicação, comparação contra Shadertoy como linha de base).
4. **Proc3D: Procedural 3D Generation and Parametric Editing of 3D Shapes with Large Language Models** — `https://arxiv.org/html/2601.12234v1` — sustenta os 79 nós de geometry nodes traduzidos, a taxa de compilação de 89% contra 0–45%, a redução de 6.048 para 702 tokens e a reivindicação de mais de 400× na edição. Confiabilidade: **alta** para os números de representação; a aceleração de edição é reivindicação dos autores.
5. **LL3M: Large Language 3D Modelers** — `https://arxiv.org/html/2508.08228v1` — sustenta os limites do autorrefinamento, os cerca de 59% de edições resolvidas numa instrução, os dez minutos de geração inicial e a imperfeição da percepção espacial do modelo de visão. Confiabilidade: **alta**.
6. **P3D-Bench: Benchmarking MLLMs for Parametric 3D Generation and Structural Reasoning** — `https://arxiv.org/abs/2606.11152` — sustenta os 1.003 casos (400 texto, 400 imagem, 203 montagens) e o diagnóstico de que os modelos acertam identidade semântica e erram geometria paramétrica e composição de partes. Confiabilidade: **alta**.
7. **Designing L5: A Permacomputing Approach to Creative Coding** — `https://arxiv.org/abs/2606.18481` — sustenta o sinal fraco de permacomputação encostando no creative coding (consumo, longevidade, restrição deliberada, documentação sem conectividade). Confiabilidade: **média** (artigo de desenho de ferramenta, sem medição de adoção).
8. **Copyright and Artificial Intelligence — U.S. Copyright Office** — `https://www.copyright.gov/ai/` — sustenta as datas e a existência das três partes do relatório, com a Parte 2 (Copyrightability) publicada em 29/01/2025. Confiabilidade: **alta** (fonte oficial).
9. **Análise da Parte 2 do relatório do Copyright Office (McBrayer)** — `https://www.mcbrayerfirm.com/blogs-intellectual-property-blog,u-s-copyright-office-releases-part-2-of-copyright-and-artificial-intelligence-series-copyrightability-guidance` — sustenta o conteúdo da Parte 2: exigência de autoria humana, insuficiência do prompt e proteção do que o humano modificou e arranjou. Confiabilidade: **média** (análise jurídica secundária; usada porque o relatório em si não foi aberto nesta sessão).
10. **NodeArchitect — agente de IA e servidor MCP para Houdini (fórum SideFX)** — `https://www.sidefx.com/forum/topic/103890/` — sustenta a existência de agente operando a ferramenta procedural por dentro: leitura de nós e conexões, geração de VEX e Python, HDA a partir de linguagem natural, MCP embutido, modo de plano, consentimento por ferramenta, versão 2.4.4 de 08/09/2026, suporte a Houdini 20, 21 e 22. Confiabilidade: **média** (anúncio do próprio desenvolvedor em fórum oficial).
11. **Code-native generation of highly programmable 3D assets (2026) — discussão no Hacker News** — `https://news.ycombinator.com/item?id=49346538` — sustenta o termômetro da comunidade (55 pontos, 40 comentários), a crítica de orçamento de draw call para objeto com cerca de 50 partes e a resposta do autor de que fusão de malha, atlasing, LODs e proxies de colisão ainda precisam ser testados. Confiabilidade: **média** (discussão pública; o valor está no argumento técnico, não na autoridade).
12. **AI Procedural Generation for Games: What It Actually Does (2026) — Summer Engine** — `https://www.summerengine.com/blog/ai-procedural-generation-for-games` — sustenta a frase "a força da IA na geração procedural é escrever o gerador, não ser o gerador" e o argumento contra geração em tempo de execução (latência, custo por sessão, rede, perda de reprodutibilidade por semente). Data: 06/06/2026. Confiabilidade: **baixa** como evidência de mercado (blog de fornecedor), **média** como registro de posição de quem constrói.
13. **Adobe Substance 3D unveils new innovations (Substance 3D Designer 16)** — `https://blog.adobe.com/en/publish/2026/07/21/adobe-substance-3d-unveils-new-innovations-deliver-faster-workflows-openpbr-everywhere-digital-twins-scale` — sustenta o aprofundamento do grafo procedural (nós SDF construindo forma 3D no grafo, Shape Splatter v2, visualizador 3D como nó) e a **ausência** de anúncio de geração de grafo por IA, usada como anti-evidência na seção 7. Data: 21/07/2026. Confiabilidade: **alta** para o próprio produto.
14. **News from WWDC25: WebKit in Safari 26 beta** — `https://webkit.org/blog/16993/news-from-wwdc25-web-technology-coming-this-fall-in-safari-26-beta/` — sustenta WebGPU habilitado por padrão em Safari 26 para macOS, iOS, iPadOS e visionOS, e a orientação de que supera o WebGL para novos projetos. Data: 09/06/2025. Confiabilidade: **alta** (fonte primária do fabricante).
15. **Curso de Desenvolvimento de Software Apoiado por IA Generativa — Instituto de Computação, Unicamp** — `https://ic.unicamp.br/noticia/12234/curso-de-desenvolvimento-de-software-apoiado-por-ia-generativa/` — sustenta a nota sobre o Brasil: 48 horas, híbrido, para engenheiros de software, desenvolvedores e analistas de qualidade, com foco em uso de IA em projeto, codificação e teste (não em projeto de gerador). Confiabilidade: **alta** (página institucional).
16. **Infinigen — Princeton Vision & Learning Lab** — `https://infinigen.org/` — sustenta a afirmação de que gerador procedural randomizado já é infraestrutura de pesquisa: "creates everything entirely from randomized mathematical rules, including all shapes and materials", livre e aberto sob BSD 3-Clause. Confiabilidade: **alta**.
17. **3D Gaussian Splatting: Complete Guide to Services, Use Cases & Web Viewers (2026) — Utsubo** — `https://www.utsubo.com/blog/gaussian-splatting-guide` — sustenta os números de peso usados no argumento da disrupção 2: 5 a 15 milhões de splats a 200–500 MB sem otimização; alvos de web de 50–100 MB (desktop), 30–50 MB (laptop) e 15–30 MB (celular); carga inicial de 20 a 200 MB. Data: 15/01/2026. Confiabilidade: **média** (guia de agência; valores de prática de mercado, não medição controlada).

## 12. Anexo — o levantamento bruto

### 12.1 Respostas da entrevista de recorte (Etapa 1), como recebidas

- **Tema:** "Gerar geradores: design procedural e creative coding com IA" (tema 14 de 19 da disciplina; família "Criação e plataforma").
- **Horizonte:** 2031.
- **Público:** quem projeta mídia e interação.
- **Recorte:** global, com uma nota sobre o Brasil.
- **Descartado de início:** o que já é comum em produto de massa (a régua da disciplina); nenhuma outra exclusão.
- **Disrupção suspeita:** nenhuma — descobrir.
- **Viés:** neutro.
- **Ideias óbvias a excluir:** as que servem para qualquer tema.
- **O que faria mudar de ideia:** evidência de que a adoção já passou da maioria inicial (Rogers) ou de que a tecnologia não rompe nada (só melhora o que existe).
- **Profundidade:** três ordens. **Modo:** a partir de uma inovação/tema, não de um setor.
- **Zona de interesse do autor:** "Criação e plataforma". **Login:** kvv. **Skill:** futurizacao-kvv.
- **Busca na web:** usar busca e leitura de verdade; citar só o que abriu; não inventar fontes.
- **Condição de sessão:** não interativa — nenhuma pergunta de volta, nenhuma parada para confirmação; o que não estiver definido, assumir e declarar.

**Assunções declaradas por falta de interlocutor.** (a) O horizonte 2031 foi aplicado como teto rígido para as ordens 1 e 2 e teto flexível para a 3, conforme o verificador da disciplina permite. (b) "Nota sobre o Brasil" foi interpretada como uma passagem na seção 3, ancorada em fonte aberta, e não como recorte paralelo. (c) A régua "o que já é comum em produto de massa" foi aplicada literalmente na Etapa 2 e produziu quatro recusas formais, incluindo uma (texto-para-CAD) recusada por redundância metodológica e não por maturidade — a distinção está declarada no texto.

### 12.2 Buscas executadas (termos, nesta ordem)

1. `LLM generating procedural 3D models as code arXiv 2026 program synthesis graphics`
2. `img2threejs github procedural Three.js code from image`
3. `LLM shader generation benchmark Shadertoy 2026 evaluation`
4. `text-to-CAD parametric program generation 2026 Zoo CAD-LLM editable`
5. `Blender geometry nodes LLM agent generate node graph 2026 research`
6. `US Copyright Office AI generated code copyrightability 2026 procedural rules output`
7. `3D gaussian splatting file size megabytes vs procedural mesh web delivery 2026 compression`
8. `Graphite editor procedural node graph vector 2026 release`
9. `WebGPU Safari shipped enabled by default 2025 2026 browser support`
10. `creative coding p5.js Processing foundation LLM generative design ensino Brasil 2026`
11. `game runtime LLM generates code content on demand procedural 2026 engine`
12. `manim-web-mcp MCP model context protocol manim AI animation github`
13. `SideFX Houdini AI procedural 2026 copilot node network generation`
14. `"design generativo" OR "creative coding" Brasil 2026 curso universidade IA código generativo`
15. `Hacker News discussion procedural code generation versus generated pixels lighter web 3D 2026`
16. `Adobe Substance 3D procedural material AI node graph generation 2026 announcement`
17. `Infinigen procedural generation blender synthetic data 2026 adoption randomized generator`

### 12.3 Páginas efetivamente abertas (17) e o que cada uma rendeu

| # | URL | Rendeu |
|---|---|---|
| 1 | `https://arxiv.org/html/2606.01057v1` | executabilidade 0,91 / 0,702→0,974; 26k triplas; 212 categorias; 531 linhas médias; falha por API e por componente flutuante; correlação r=0,964 entre similaridade SigLIP-2 e preferência humana (não usada no texto) |
| 2 | `https://github.com/img2threejs/img2threejs` | portão por etapa; fábrica TypeScript; 15,8k estrelas; 1,3k forks; Apache 2.0; Python 3.10+ sem dependência; v2.0.0 |
| 3 | `https://arxiv.org/html/2512.08951v1` | 50 participantes (30 novatos, 20 especialistas); 4,2/0,6 e 6,8/2,9 shaders; satisfação 4,7 contra 2,8; erro <3%; população de 14 shaders; GPT-4 fazendo mutação semântica |
| 4 | `https://arxiv.org/html/2601.12234v1` | PCG; 79 nós; 89% de compilação contra 0–45%; 702 contra 6.048 tokens; 5× menor que Infinigen e 10× menor que Python de Blender; ULIP +28%; >400× em edição |
| 5 | `https://arxiv.org/html/2508.08228v1` | agentes (planejador, recuperação, codificação, crítico, verificação); ~10 min inicial, ~38 s por edição; 59% de edições numa instrução; 17 categorias; 5× mais operações complexas com recuperação; 26% menos erro de execução |
| 6 | `https://arxiv.org/abs/2606.11152` | 1.003 casos (400/400/203); executabilidade, fidelidade geométrica, topologia, restrição textual, alinhamento multivista, estrutura por parte; montagem como cenário mais fraco |
| 7 | `https://arxiv.org/abs/2606.18481` | L5 em Lua sobre LOVE; cinco estudos de caso; tensões entre simplicidade e revelar o detalhe técnico, consumo, estabilidade, restrição de recursos, documentação offline |
| 8 | `https://www.copyright.gov/ai/` | Parte 1 em 31/07/2024; Parte 2 em 29/01/2025; Parte 3 (pré-publicação) em 09/05/2025 |
| 9 | `https://www.mcbrayerfirm.com/blogs-intellectual-property-blog,u-s-copyright-office-releases-part-2-...` | autoria humana; "lack of direct control" nega proteção; modificar e arranjar conteúdo gerado pode ser protegível |
| 10 | `https://www.sidefx.com/forum/topic/103890/` | NodeArchitect 2.4.4 em 08/09/2026; MCP embutido; HDA Composer por prompt; modo headless; consentimento por ferramenta; Houdini 20/21/22; autor jbishop02; v1 grátis, v2+ comercial |
| 11 | `https://news.ycombinator.com/item?id=49346538` | 55 pontos; 40 comentários; crítica de draw call com ~50 partes; "We still need to test mesh fusion, atlasing, LODs, collision proxies"; "the same source could compile differently for web, mobile or desktop" |
| 12 | `https://www.summerengine.com/blog/ai-procedural-generation-for-games` | 06/06/2026; "AI's strength in procedural generation is writing the generator, not being the generator"; latência, custo por sessão, rede, reprodutibilidade por semente; exemplo do bug na semente 4471 |
| 13 | `https://blog.adobe.com/.../adobe-substance-3d-unveils-new-innovations...` | 21/07/2026; nós SDF no grafo; Shape Splatter v2; nó de visualização 3D; controles de deslocamento; nenhuma menção a IA gerando grafo |
| 14 | `https://webkit.org/blog/16993/...` | 09/06/2025; WebGPU habilitado por padrão em Safari 26 (macOS, iOS, iPadOS, visionOS); supera WebGL para novos projetos |
| 15 | `https://ic.unicamp.br/noticia/12234/...` | 48 h; híbrido; engenheiros, desenvolvedores, testadores; APIs, chat e copilotos em IDE; anúncio de 06/11/2025 |
| 16 | `https://infinigen.org/` | Princeton Vision & Learning Lab; BSD 3-Clause; "creates everything entirely from randomized mathematical rules" |
| 17 | `https://www.utsubo.com/blog/gaussian-splatting-guide` | 15/01/2026; 5–15 M splats a 200–500 MB; alvos 50–100 / 30–50 / 15–30 MB; carga inicial 20–200 MB; SPZ/KSPLAT/SOG com 5–10× de redução |

### 12.4 Material levantado e NÃO usado (com o motivo)

- **3D-GPT (arXiv:2310.12945), SceneCraft, ShapeLib, ShapeCraft, BlenderRAG, Zero-to-CAD, Text2CAD-Bench, CAD-Coder, TOOLCAD, CADDesigner, Zookeeper (Zoo), treegen-llm, VLMaterial, ProcMatRL, MatFormer, DI-PCG, ChatPCG.** Apareceram nas buscas 1, 4, 5 e 16 e sustentariam o mesmo ponto já sustentado pelas fontes 1, 4, 5 e 6. Não foram abertos; portanto não entraram na seção 11 nem no corpo. Registro aqui porque a densidade da lista **é** um dado: em 2026 há uma família inteira de trabalhos convergindo para "gerar programa em vez de malha", e nenhum deles é o mesmo grupo.
- **Servidores MCP de Manim** (`abhiemj/manim-mcp-server`, `paulnegz/manim-mcp`, `wstcpyt/manim-mcp`, `ameymn/manim_mcp_server`). A busca 12 devolveu vários projetos independentes, mas **não** encontrou o `manim-web-mcp` citado no enunciado do tema. Como não abri nenhum e não confirmei o projeto nomeado, ficou fora do corpo — e fica registrado que o sinal fraco original do tema não foi confirmado nesta sessão.
- **Graphite.** Usado no corpo apenas pela descrição factual (grafo procedural único avaliado via wgpu), sem número e sem citação numerada, porque a busca 8 devolveu só espelhos de repositório e páginas de produto que não abri. Se o mapa fosse entregue em regime de revisão, esta seria a primeira lacuna a fechar.
- **Números de compressão de splat** (KISS-GS com 228×, SPZ com até 90%, PCGS, 3DGS.zip). Fora porque enfraqueceriam o argumento de peso da disrupção 2 sem leitura cuidadosa — é exatamente o tipo de contra-evidência que merece fonte aberta, e não coube nesta rodada. Declarado aqui para que a próxima rodada o cobre.
- **Cursos brasileiros e portugueses de design com IA** (Alura, Aprender Design, IED São Paulo, IADE, ESAD). Apareceram na busca 14, nenhum aberto; além disso são formação em *usar* ferramenta, não em projetar gerador — o que é o ponto da nota sobre o Brasil, e por isso a nota ficou apoiada só na fonte 15.

### 12.5 Efeitos cortados da roda (e por quê)

- "O direito autoral de regra vira o principal campo de disputa da mídia até 2031" — magnitude sem base. Rebaixado a `e6.2.2` (3ª ordem, fraco, baixa, 2035).
- "Todo motor de jogo passa a distribuir conteúdo como programa até 2031" — promovido a **wildcard** da seção 6 em vez de nó, porque é salto de ordem, não efeito encadeado.
- "A estética procedural substitui a fotorrealista" — cortado por falsidade provável: convivência é o cenário sustentado pela evidência. Sobrou a versão fraca em `e4.1.1` (volta como escolha declarada).
- "Designers perdem o emprego para agentes" — cortado por ser efeito genérico, que serviria a qualquer um dos 19 temas da disciplina; a instrução de recorte pedia justamente excluir isso. Sobrou o deslocamento específico em `e5.1` e `e5.1.1`.
- "Escolas de design fecham" — cortado pelo mesmo critério, mais ausência total de sinal.
- Três efeitos de 3ª ordem foram cortados por aritmética, não por mérito, para fechar em dezoito: "viés do revisor automático vira pauta de estúdio" (ramo `e1.2`), "o diff como prova jurídica de autoria humana" (ramo `e2.1`, absorvido por `e6.2.1`) e "a formação se bifurca entre projetar regra e curar resultado" (ramo `e6.1`). O corte por contagem é uma limitação do formato e está declarado.

### 12.6 Log das iterações

1. Leitura dos arquivos de apoio da skill (`SKILL.md`, `ESTUDO.md`, `DUVIDAS.md`) e da rodada anterior do mesmo autor, para herdar o formato — inclusive o relatório de verificação da rodada 13, que acusou zero de doze títulos literais.
2. **Decisão de formato tomada nesta rodada:** usar `## 1. Resumo` … `## 12. Anexo — o levantamento bruto`, exatamente como o verificador da disciplina exige, em vez do `## Seção N — …` que a rodada anterior usou e que foi reprovado. A skill pede "12 seções numeradas com `##`"; as duas leituras são compatíveis, e esta passa no verificador.
3. Etapa 1 respondida pelo pacote de respostas da rodada (sessão não interativa). Nenhuma pergunta devolvida.
4. Dezessete buscas, dezessete páginas abertas. Quatro tentativas frustradas: PDF do P3D-Bench estourou limite de tamanho, PDF do L5 devolveu fluxo binário ilegível — ambos relidos pela página de resumo —, e o relatório Parte 2 do Copyright Office não foi aberto em si, sendo substituído por análise secundária declarada como tal na fonte 9.
5. Etapa 2 aplicada: quatro recusas formais escritas antes de qualquer disrupção ser aceita.
6. Roda construída com contagem fixada em 3 / 6 / 12 / 18; três efeitos de terceira ordem cortados por aritmética (§12.5); prazos das ordens 1 e 2 mantidos dentro de 2031 e catorze dos dezoito da terceira ordem declarados além do horizonte; confiança calibrada para cair por ordem (alta: 5 → 2 → 0).
7. Conferência final: cada marca de fonte no corpo cruzada contra a lista numerada. Um erro real encontrado e corrigido nessa passagem — a marca quebrada descrita no item 2 da seção 8 — e a contagem de fontes do frontmatter ajustada de 16 para 17.
