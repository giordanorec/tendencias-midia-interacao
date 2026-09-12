---
tema: "Mídia sintética controlável: vídeo e imagem"
slug: midia-sintetica-controlavel-video-e-imagem
autor_login: bvga
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-12
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 12
efeitos_ordem_3: 10
tecnologias_citadas: [ControlNet, VAR, Causal Forcing, AlayaRenderer-Flash, Runway Aleph, Kling, Adobe Firefly, EbSynth, Rive, VBench-2.0, PhyParam, C2PA Content Credentials]
fontes: 25
confianca: media
experimento: Prova de direção
skill_usada: futurizacao-bvga
publico_ok: false
---

## 1. Resumo

O que está mudando em mídia sintética não é a qualidade da geração — é a possibilidade de **dirigi-la**. Entre 2023 e 2026 o condicionamento espacial explícito saiu do paper (ControlNet, 2023) e entrou no produto como edição in-context sobre material já filmado: remover um objeto, gerar outro ângulo da mesma cena, trocar a luz (Runway Aleph, jul/2025). Ao mesmo tempo, a destilação causal fechou a lacuna que separava geração de tempo real da geração de qualidade (Causal Forcing, ICML 2026), e um renderizador generativo saiu de 0,56 para 31,54 FPS (jul/2026). Três disrupções-raiz saem daí: **o quadro como superfície editável**, **o vídeo gerado enquanto é assistido** e **a peça de movimento entregue como programa, não como pixels**.

O contrassinal é forte e vem dos próprios benchmarks: quando se mede controlabilidade em vez de beleza, os modelos ainda falham. O VBench-2.0 existe justamente porque vídeos "visualmente plausíveis" não são "fundamentalmente realistas", e o PhyParam (jul/2026) descreve o estado da arte como movimento plausível **não governado de forma confiável por causas físicas explícitas**. Ou seja: a promessa de instrumento é real e a entrega ainda é parcial. Este mapa trata essa distância como o objeto de análise, não como detalhe.

O horizonte é 2031. A confiança geral é **média**: alta sobre o que já existe (seção 3), média sobre os efeitos de 1ª ordem, baixa sobre a maior parte da 3ª ordem — e assim declarada, efeito a efeito, no YAML da seção 5.

## 2. O tema

**Recorte.** Imagem em movimento como mídia sintética **dirigível**: região do quadro, quadro-chave propagado, trajetória, parâmetro físico, regra, grafo, máquina de estados. Fica de fora a história gerada, o som e a voz, e o design procedural sem IA — que são objeto de outros temas da disciplina. Fica de fora, também, por régua explícita da disciplina, tudo que já é comum em produto de massa: edição de vídeo, motion graphics feito à mão e geração de imagem por prompt simples entram como antecedente, nunca como disrupção.

**Entrevista (§0 da skill).** Esta rodada correu sem interlocutor humano disponível; os parâmetros foram fixados no protocolo da rodada e são reproduzidos aqui como contrato, antes de qualquer análise:

| Campo | Valor |
|---|---|
| tema | Mídia sintética controlável: vídeo e imagem |
| horizonte | 2031 |
| público | quem projeta mídia e interação |
| recorte geográfico | global, com nota sobre o Brasil |
| descartes | o que já é comum em produto de massa; nenhuma outra exclusão |
| viés desejado | neutro |
| profundidade | três ordens |
| modo | a partir de uma inovação/tema, não de um setor |
| critério de refutação declarado pelo solicitante | evidência de que a adoção já passou da maioria inicial (Rogers), ou de que a tecnologia apenas melhora o que existe sem romper nada |

**Contradições resolvidas antes de pesquisar.** Duas. Primeira: "global com nota sobre o Brasil" e "neutro" convivem, mas obrigam a não usar o caso brasileiro como ilustração conveniente — ele aparece na seção 3 e na 6 como jurisdição com regra própria, não como cor local. Segunda: o solicitante pede que se descubra a disrupção sem hipótese prévia, e ao mesmo tempo a descrição do tema já afirma qual é ("o controle"). Tratei essa afirmação como **hipótese a ser testada**, não como premissa: a seção 12 registra o que aconteceria com o mapa se ela caísse.

**O que este documento não é.** Não é previsão. A Futures Wheel organiza hipóteses causais para serem contestadas — a seção 7 existe para isso, e a seção 8 registra onde a máquina errou durante o próprio trabalho.

## 3. Onde isso está hoje

### 3.1 A raiz técnica do controle já é antiga o bastante para ter história

O condicionamento espacial de modelos de difusão tem data e paper: **ControlNet** (Zhang, Rao e Agrawala, fev/2023) adiciona controle espacial a um modelo texto-para-imagem pré-treinado usando "edges, depth, segmentation, human pose, etc.", com *zero convolutions* que impedem o ajuste fino de contaminar o modelo base, e treino robusto "com datasets pequenos (<50k) e grandes (>1m)". Antes disso, e fora do paradigma generativo, **EbSynth** (Jamriška, Sochorová, Texler, Sýkora, com Adobe Research — *Stylizing Video by Example*, SIGGRAPH 2019, ACM TOG 38(4)) já resolvia o problema que a turma identificou como o mais controlável de todos: o artista pinta alguns quadros-chave com ferramentas convencionais e o sistema propaga o estilo pela sequência, com *blending* temporal que preserva textura e detalhe de alta frequência. O produto segue disponível, com plano gratuito "sem limitações de tempo ou funcionais".

Essas duas capacidades são **maduras**: repetíveis, documentadas, com problemas de engenharia conhecidos e uso real além de demonstração. Entram neste mapa como **antecedente**, não como raiz.

### 3.2 O que mudou entre 2023 e 2026

**Do condicionamento para a edição in-context.** O survey *Controllable Video Generation* (Ma et al., arXiv 2507.16869, v1 jul/2025, v3 jan/2026) organiza o campo em três famílias — condição única, múltiplas condições e geração controlável universal — e parte de um diagnóstico explícito: "prompts textuais sozinhos são frequentemente insuficientes para expressar requisitos complexos, multimodais e detalhados". Do lado do produto, a Runway anunciou o **Aleph** (25/jul/2025) como "state-of-the-art in-context video model", capaz de "adicionar, remover e transformar objetos", "gerar qualquer ângulo de uma cena" e "modificar estilo e iluminação". A Adobe consolidou a camada de acesso: na NAB 2026 (CineD, 25/abr/2026) o Firefly aparece como plataforma multi-modelo com escala via Topaz e canvas de ideação, e — o dado relevante — posicionado explicitamente para "preencher lacunas em produções reais", não para fazer o filme inteiro. O **Kling** chegou à versão 3.0 em 07/fev/2026.

**Da difusão para o autoregressivo.** O sinal técnico começou em imagem: **VAR** (*Visual Autoregressive Modeling*, arXiv 2404.02905, abr/2024), melhor artigo do NeurIPS 2024, trocou *next-token* por *next-scale prediction* e levou o FID de 18,65 para 1,73 no ImageNet 256×256, com IS de 80,4 para 350,2 e inferência ~20× mais rápida — a primeira vez que um AR estilo GPT superou transformers de difusão em geração de imagem. Em vídeo, 2026 é o ano em que a lacuna se fechou: **Causal Forcing** (Zhu et al., THU-ML, ICML 2026) identifica o *gap* arquitetural entre difusão bidirecional e atenção causal e o corrige com um professor autoregressivo na inicialização ODE, ganhando +19,3% em *Dynamic Degree*, +8,7% em VisionReward e +16,7% em *Instruction Following* sobre o Self Forcing. E **AlayaRenderer-Flash** (arXiv 2607.18703, jul/2026) reformulou um renderizador generativo como modelo autoregressivo de poucos passos, saindo de **0,56 para 31,54 FPS** e entregando, acoplado a um motor de física, "um mundo generativo totalmente jogável a 30 FPS".

**Da mídia gravada para a mídia executável.** O Rive documenta a máquina de estados como anatomia de produto: "A basic state machine will consist of a Graph, States, Transitions, and Layers", onde "States are simply timeline animations that can play in your state machine". A página de casos de uso lista trinta e poucos usos — *game UI*, criador de avatar, *pull-to-refresh*, formulários interativos, painéis automotivos — e três clientes nomeados: Duolingo (que "reconstruiu todos seus personagens", obtendo arquivos menores, mais performáticos e *lip sync* em escala), Figma e Struck. Note-se o recorte: **micro-interação de interface**, não narrativa.

### 3.3 O contrassinal, que é a parte mais importante desta seção

Quando se mede controle em vez de beleza, o resultado muda de sinal. O **VBench-2.0** (Zheng et al., arXiv 2503.21755, mar–ago/2025) existe porque a fidelidade aparente parou de ser informativa: ele avalia cinco dimensões — fidelidade humana, **controlabilidade**, criatividade, física e senso comum — e conclui que os modelos "funcionam cada vez melhor nessas métricas, mas ainda lutam para gerar vídeos que sejam não apenas visualmente plausíveis mas fundamentalmente realistas". O **PhyParam** (Li et al., arXiv 2607.18924, jul/2026) é mais direto: os modelos atuais geram "movimento plausível, mas não governado confiavelmente por causas físicas explícitas", e a contribuição do paper é justamente condicionar em força, massa e fricção para obter controle de corpo rígido. O survey de *interactive video world modeling* (Liu et al., arXiv 2606.01164, mai/2026) nomeia os três problemas em aberto: "action-conditioned controllability, long-horizon interactions and memory, and action-following responsiveness for real-time interactivity".

**Leitura pelo Hype Cycle, como heurística e não como lei.** Geração por prompt está em zona de expectativa alta com uso real amplo. **Controle fino** está no ponto em que a demonstração já convence e a métrica ainda não confirma — exatamente onde o entusiasmo antecede a capacidade. Nada disso prova fase nem prevê data; serve só para desconfiar de maturidade aparente.

### 3.4 Governança: a camada que já tem data marcada

O **AI Act** europeu torna aplicáveis em **2 de agosto de 2026** as obrigações do Artigo 50: provedores devem garantir que outputs sintéticos sejam "marcados em formato legível por máquina e detectáveis como artificialmente gerados ou manipulados"; quem implanta deve rotular deepfakes de forma clara, com exceção reduzida para obra "evidentemente artística, criativa, satírica, ficcional" e para conteúdo com revisão humana ou controle editorial. Sistemas colocados no mercado antes dessa data têm até **2 de dezembro de 2026**.

A infraestrutura correspondente é o **C2PA**, na versão 2.4 (abr/2026), com a Content Authenticity Initiative acima de 6.000 membros (18/jan/2026) e implementações em hardware (Google Pixel 10, Sony PXW-Z300). E a própria C2PA declara o limite: "While C2PA Manifests are typically embedded in the asset, they can be separated", e a especificação central "does not support attribution of content to individuals or organizations" por opção de privacidade. O limite é também empírico: *Editing Away the Evidence* (Qi et al., arXiv 2603.12949, mar/2026) mostra que "mesmo edições semânticas rotineiras podem reduzir significativamente a recuperabilidade da marca d'água", modelando a edição por difusão como uma transformação que contrai progressivamente perturbações de baixa amplitude.

**Nota sobre o Brasil.** Há regra vigente antes da lei geral. A **Resolução TSE nº 23.732/2024** (27/fev/2024) proíbe, no Art. 9º-C, o uso de conteúdo sintético em áudio ou vídeo para alterar imagem ou voz de pessoa a fim de prejudicar ou favorecer candidatura; e exige, no Art. 9º-B, que quem usa conteúdo sintético multimídia em propaganda eleitoral informe "de modo explícito, destacado e acessível" que o conteúdo foi fabricado ou manipulado e qual tecnologia foi usada — com responsabilidade estendida a plataformas (Art. 9º-E). O **PL 2338/2023**, aprovado no Senado em dezembro de 2024, adota estrutura por nível de risco semelhante à europeia e segue na Câmara. Do lado do mercado, a TELA VIVA (08/jan/2026) aponta IA entre as quatro tendências do audiovisual brasileiro para 2026, com a produtora Coração da Selva organizando a adoção em três frentes — escritório, fábrica e laboratório "inteligentes".

### 3.5 Três Horizontes

- **H1 (sistema dominante hoje).** Produção linear: filmagem, corte, efeito aplicado à mão, entrega como arquivo de pixels. A IA entra como acelerador de tarefas dentro desse fluxo — a própria Adobe posiciona assim o Firefly. O contrato do Animation Guild com a AMPTP é H1 negociando com H2: permite notificação e consulta sobre GenAI, mas não permite ao animador recusar a ferramenta se a função exigir, nem impedir que seu trabalho treine modelos.
- **H2 (transição, onde está o conflito).** Controle fino que convence na demo e falha no benchmark; tempo real que já roda a 30 FPS mas sem memória de longo horizonte; proveniência obrigatória por lei em uma jurisdição e ausente na seguinte; litígio sobre dados de treino ainda aberto (Getty v. Stability no Reino Unido, com 12 milhões de imagens alegadas; Disney e Universal v. Midjourney nos EUA).
- **H3 (outra lógica possível).** Mídia em movimento como artefato dirigível e executável: a entrega é uma descrição (grafo, estado, regra, semente) resolvida no consumo, e a proveniência é condição de circulação, não selo opcional. Nada garante que H3 chegue; H2 pode reforçar H1 — é o que a seção 7 testa.

## 4. As disrupções-raiz

Gerei onze candidatos e mantive três. Os oito rebaixados estão na seção 12, com o motivo da derrota.

---

### D1 — O quadro deixa de ser resultado e vira superfície editável

| campo | conteúdo |
|---|---|
| `candidato` | Direção espacial e temporal in-context sobre material já existente: região, máscara, trajetória, ângulo, luz e parâmetro físico como argumentos da geração |
| `maturidade` | emergente |
| `potencial_de_ruptura` | alto |
| `o_que_rompe` | (a) a cadeia de valor da pós-produção, que hoje é uma sequência de especialidades — roto, *cleanup*, *matchmove*, compositing, *relighting*; (b) quem pode produzir, porque a barreira deixa de ser a equipe e passa a ser o julgamento; (c) o papel do intermediário técnico, cuja competência era executar o que o diretor descrevia |
| `por_que_agora` | A geração ficou boa o bastante para que o problema passasse a ser dirigir. O survey de 2025/26 declara a insuficiência do prompt textual; o Aleph entrega edição por instrução sobre clipe existente; o PhyParam mostra que já se condiciona em grandezas físicas nomeadas, não só em aparência |
| `o_que_falta` | Controlabilidade medida, não demonstrada — o VBench-2.0 e o PhyParam registram que a governança explícita do movimento ainda não é confiável. Falta também reprodutibilidade determinística e integração nativa com a *timeline* de edição |
| `evidencias` | ControlNet (fev/2023); survey 2507.16869; Runway Aleph (jul/2025); Firefly NAB 2026; PhyParam (jul/2026); VBench-2.0 (2025) |
| `veredito` | **aceita.** Emergente, ruptura alta, "por que agora" com data, e uma condição faltante nomeada e mensurável |

### D2 — O vídeo passa a ser gerado enquanto é assistido

| campo | conteúdo |
|---|---|
| `candidato` | Geração causal autoregressiva em tempo real: o quadro seguinte é produzido durante o consumo, condicionado ao que o espectador acaba de fazer |
| `maturidade` | experimental, tendendo a emergente |
| `potencial_de_ruptura` | alto |
| `o_que_rompe` | (a) a arquitetura de produto — o vídeo deixa de ser arquivo e vira serviço; (b) o custo marginal, que passa de banda para GPU por espectador; (c) a forma dominante de interação, porque "assistir" ganha uma alça; (d) a própria categoria jurídica de obra, que pressupõe conteúdo fixo |
| `por_que_agora` | VAR mostrou em 2024 que autoregressivo podia bater difusão em imagem. Em vídeo, a difusão de sequência completa impede exibir quadros conforme são produzidos; a destilação causal resolveu a qualidade (Causal Forcing, ICML 2026) e a velocidade (0,56 → 31,54 FPS, jul/2026) no mesmo ano |
| `o_que_falta` | Memória de longo horizonte e responsividade à ação — os dois primeiros problemas em aberto listados pelo survey de mai/2026. E um modelo econômico: custo que cresce com o uso não fecha com assinatura plana |
| `evidencias` | VAR (2404.02905); Causal Forcing (2602.02214, ICML 2026); AlayaRenderer-Flash (2607.18703); survey 2606.01164 |
| `veredito` | **aceita.** É a candidata de evidência mais recente e menor lastro de uso real — a confiança dos seus efeitos é declarada mais baixa por isso |

### D3 — A entrega deixa de ser pixels e vira descrição executável

| campo | conteúdo |
|---|---|
| `candidato` | A peça de movimento distribuída como artefato *stateful* — máquina de estados, grafo, regra, semente — resolvido no dispositivo no momento do consumo, em vez de arquivo linear renderizado na origem |
| `maturidade` | emergente **como formato de mídia**; maduro como componente de interface |
| `potencial_de_ruptura` | alto |
| `o_que_rompe` | (a) a arquitetura de produto: o entregável é o comportamento, não a gravação dele; (b) o *handoff* designer→engenheiro, que deixa de ser etapa; (c) a fronteira entre vídeo e interface; (d) a reprodutibilidade como cláusula, já que um grafo é um objeto auditável e um render não é |
| `por_que_agora` | O runtime provou escala em produto de massa — Duolingo reconstruiu seus personagens com Rive, ganhando arquivo menor e *lip sync* em escala — e a geração começa a caber dentro de um grafo como nó determinístico, em vez de ser uma caixa que devolve um resultado irrepetível |
| `o_que_falta` | Sair do repertório de micro-interação. Os trinta e poucos casos de uso listados pelo Rive são de interface; nenhum é narrativa longa. Faltam formato de intercâmbio entre ferramentas e acordo sobre quem é dono do grafo |
| `evidencias` | Rive — documentação de State Machine e página de casos de uso; EbSynth como precedente de propagação por quadro-chave; a lógica de grafo já dominante em pipelines de geração |
| `veredito` | **aceita, com ressalva registrada.** O produto Rive é maduro e por regra da própria skill um produto maduro não vira raiz. O que é emergente — e foi o que aceitei — é o **formato de entrega**, fora do nicho de interface. Ver a autocrítica na seção 8 |

---

**Um candidato forte que foi recusado como raiz:** a proveniência criptográfica obrigatória (C2PA + Art. 50 + TSE). Tem data, tem lei, tem infraestrutura e tem alto potencial de ruptura — mas não é raiz **deste** tema: ela é reação à mídia sintética barata, não sua causa. Entra como efeito de 1ª e 2ª ordem (e3, e3.1) e como sinal na seção 6. Rebaixar isso foi a decisão de classificação mais custosa deste mapa.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "D1 — O quadro deixa de ser resultado e vira superfície editável: direção in-context sobre material já existente"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "A pós-produção deixa de ser uma cadeia de especialidades sequenciais e passa a ser uma operação de direção sobre material já filmado."
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "O orçamento de uma produção deixa de ser dominado por horas-homem de execução técnica e passa a ser dominado por direitos, direção e supervisão."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "Contratos de elenco e de produção passam a precificar o direito de dirigir uma performance já gravada — luz, ângulo, idade aparente, idioma — como item separado do cachê."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "A entrada na profissão perde seus degraus, porque as tarefas que formavam o iniciante — rotoscopia, cleanup, in-between — são as primeiras a serem dirigidas por instrução."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Escolas de animação e cinema deslocam o currículo de treino de execução para treino de julgamento visual, e passam a avaliar o aluno pelo que ele recusa, não pelo que produz."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "O custo de uma variação cai muito mais que o custo da primeira versão, e peças de comunicação passam a ser produzidas como famílias de variantes em vez de obras únicas."
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "A pesquisa de audiência migra de pré-teste para teste contínuo: a peça vencedora é descoberta em veiculação, não em sala de grupo."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "A régua de qualidade na publicidade desloca-se de acabamento para desempenho medido, e o prêmio de festival deixa de funcionar como proxy de valor comercial."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "Plataformas de anúncio passam a exigir declaração de origem por variante, porque o volume de peças torna a revisão humana caso a caso inviável."
            sinal: medio
            prazo: 2030
            confianca: media
      - id: e3
        ordem: 1
        efeito: "O registro visual perde a presunção de autenticidade: um vídeo passa a valer pelo que se sabe da sua origem, não pelo que se vê nele."
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "A proveniência vira camada de infraestrutura exigida por lei em alguns mercados, com custo de conformidade recaindo sobre quem publica, não sobre quem gera."
            sinal: forte
            prazo: 2029
            confianca: alta
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Formam-se dois ecossistemas de mídia — um com proveniência exigida na entrada, outro sem — e produtores globais passam a manter duas versões de cada peça, por jurisdição."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "A perícia audiovisual muda de objeto: deixa de analisar o pixel em busca de artefato e passa a analisar registro de captura e cadeia de custódia."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "Tribunais passam a tratar vídeo sem proveniência como indício e não como prova, invertendo na prática o ônus para quem apresenta a peça."
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: "D2 — O vídeo passa a ser gerado enquanto é assistido: geração causal em tempo real"
    efeitos:
      - id: e4
        ordem: 1
        efeito: "O vídeo passa a ser produzido durante o consumo, e o espectador ganha uma alça sobre aquilo que está vendo."
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "O custo de distribuição deixa de ser banda e passa a ser computação por espectador-minuto, invertendo a economia de escala que sustenta o streaming."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Nesse formato, publicidade e microtransação voltam a ser o modelo dominante, porque assinatura plana não cobre custo marginal que cresce com o uso."
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "A distinção entre jogo e vídeo deixa de ser útil como categoria de produto, de direito autoral e de classificação indicativa."
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "Órgãos de classificação indicativa passam a classificar o modelo e os seus limites em vez da obra, porque a obra não tem conteúdo fixo a examinar."
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "A obra deixa de ser idêntica entre duas exibições, e a noção de versão canônica deixa de ter referente."
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "Arquivamento, crítica e citação perdem o objeto: não há cópia única a preservar, comparar ou apontar."
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Cinematecas e arquivos passam a preservar o gerador, os pesos e a semente em vez do arquivo, herdando uma dependência de infraestrutura computacional que não sabem manter por décadas."
                sinal: fraco
                prazo: 2033
                confianca: baixa
  - disrupcao: "D3 — A entrega deixa de ser pixels e vira descrição executável"
    efeitos:
      - id: e6
        ordem: 1
        efeito: "A peça de movimento passa a ser entregue como programa — estado, transição, regra — resolvido no dispositivo, e não como sequência de quadros gravada na origem."
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "O handoff entre quem desenha e quem implementa deixa de existir como etapa, porque o arquivo entregue é o comportamento e não a referência do comportamento."
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "A função de motion designer se parte em duas — quem desenha o repertório de estados e quem projeta a lógica de transição — e a segunda migra para dentro da engenharia de produto."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "Acessibilidade e desempenho deixam de ser ajustes de exportação e viram parâmetros do próprio artefato: reduzir movimento, trocar paleta ou degradar em aparelho fraco passa a ser decisão tomada no consumo."
            sinal: medio
            prazo: 2030
            confianca: media
      - id: e7
        ordem: 1
        efeito: "A geração passa a caber dentro de um grafo determinístico como um nó, em vez de ser uma caixa que devolve um resultado irrepetível."
        sinal: medio
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "Reprodutibilidade vira requisito contratual de entrega: o cliente compra o grafo e a semente, não apenas o render final."
            sinal: medio
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "Surgem disputas sobre a propriedade do pipeline: quem encomendou a peça passa a exigir o grafo, e estúdios perdem o ativo tácito que os tornava recontratáveis."
                sinal: fraco
                prazo: 2032
                confianca: baixa
```

**O que a estrutura não captura bem.** Três coisas, e vale nomeá-las porque a árvore esconde cada uma.

Primeiro, **a roda é uma árvore e o mundo é um grafo**. O efeito e3 (perda da presunção de autenticidade) é filho de D1 aqui, mas é igualmente filho de D2: mídia que nunca existiu como arquivo é ainda mais difícil de autenticar que mídia editada. Pendurei-o em D1 porque a edição in-context é a causa com evidência mais forte hoje, não porque a outra aresta não exista. O mesmo vale para e7, que é filho de D3 na árvore e é, em mecanismo, uma consequência conjunta de D1 e D3.

Segundo, **ordem não é data, e aqui isso aparece invertido de propósito**. O efeito e6.1 é de 2ª ordem e tem o prazo mais curto de toda a roda (2028), porque o *handoff* designer→engenheiro já está desaparecendo em produtos que usam Rive. Já e1.1.1, de 3ª ordem, tem prazo próximo. Distância causal e distância cronológica são eixos independentes, e este mapa não os alinha.

Terceiro, **a roda não representa realimentação negativa**. Nada nela mostra o efeito mais provável de todos: que a exigência de proveniência (e3.1) **desacelere** a adoção da geração controlável em contextos jornalísticos e jurídicos, atenuando e1 e e2 nesses nichos. Loops de amortecimento não cabem numa árvore de consequências, e a ausência deles enviesa o mapa na direção da aceleração. A seção 7 trata disso.

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — a animação que responde, não a que toca.** O Rive documenta a peça de movimento como "Graph, States, Transitions, and Layers". Isso é discreto porque parece ferramenta de UI e é, na prática, uma proposta de formato: mídia em movimento como programa. O sinal é fraco por delimitação, não por tamanho — o Duolingo reconstruiu todos os personagens nesse formato, mas nenhum dos trinta e poucos casos de uso listados pela própria empresa é narrativa. O dia em que a lista incluir um episódio, o sinal deixou de ser fraco.

**Sinal fraco 2 — condicionar em grandeza física, não em aparência.** O PhyParam (jul/2026) condiciona geração em força, massa e fricção de objeto. É um paper entre muitos, mas muda a natureza do controle: sair de "descreva o que quer ver" para "declare o que rege a cena" é a diferença entre pedir e especificar.

**Sinal fraco 3 — a fragilidade medida da marca d'água.** *Editing Away the Evidence* (mar/2026) mostra que edição semântica rotineira degrada a recuperabilidade da marca d'água robusta. É fraco porque é um paper técnico sem eco público; é importante porque a política pública que entra em vigor em agosto de 2026 depende exatamente dessa camada funcionar.

**Sinal fraco 4 — o volume de submissão a festivais de IA.** O Astana AI Film Festival recebeu **8.067 filmes de 6.047 realizadores em 125 países** para a edição de 1 a 3 de outubro de 2026, com fundo total de US$ 2 milhões. O Brasil aparece em 10º, com 163 filmes. É sinal fraco porque festival dedicado atrai quem já está dentro; mede oferta latente, não aceitação.

**Contrassinal, e este pesa.** O número que mais circula sobre deslocamento de emprego — 21,4% dos postos de cinema, TV e animação nos EUA, cerca de 118.500 vagas, afetados até 2026 — vem do estudo *Future Unscripted*, da CVL Economics, **encomendado pelo Animation Guild e por outras entidades de artistas**, com campo entre 17/nov e 22/dez/2023. É parte interessada, é previsão, e seu horizonte é agora: 2026 é o ano de verificar se aconteceu, e nenhuma fonte independente que abri o verifica. Usar esse número como evidência de futuro seria confundir projeção com medição.

**Wildcard — um longa dirigido por uma pessoa entra em competição oficial de festival de primeira linha (Cannes, Veneza, Berlim), não em mostra paralela nem em festival dedicado a IA.** Probabilidade baixa até 2031; impacto alto.

O que ele quebraria no mapa: **a ordem dos efeitos**. Hoje a roda supõe que a mudança entra pela produção comercial — publicidade, plataforma, pós-produção — e só depois atinge a legitimação artística (e2, e2.1.1). Um longa individual em competição principal inverteria o vetor: a legitimação viria primeiro e puxaria a adoção, tornando e1.2 (perda dos degraus de entrada) muito mais rápido, porque a justificativa profissional para manter a escada — "é assim que se aprende" — perde força quando uma pessoa sozinha ganha a Palma. Também tornaria e1.1.1 (direito de dirigir performance gravada) uma disputa imediata, não futura.

E o que **não** quebraria: nada disso afeta D2 nem D3. Um filme premiado continua sendo um arquivo linear. O wildcard testa a economia da produção, não a natureza do formato — e é útil justamente por separar as duas coisas.

## 7. Contra o próprio mapa

**1. Qual efeito é apenas extrapolação linear do presente?**
**e2** ("famílias de variantes em vez de obras únicas"). Publicidade já produz variantes hoje; barateamento do custo marginal produz mais variantes. Não há mecanismo novo, só uma curva de custo descendo. Mantive o efeito porque a magnitude importa, mas ele não é consequência de uma ruptura — é aritmética. **Rebaixado de estruturante a mero pano de fundo**: se e2 for o efeito mais visível de D1 em 2031, então D1 não era disrupção, era eficiência. Isso é um teste, não uma ressalva retórica.

**2. Qual efeito assume adoção rápida demais?**
**e4.1** (custo de distribuição migra de banda para GPU até 2030). O paralelo histórico desmente o prazo: a passagem de broadcast para streaming levou cerca de quinze anos entre viabilidade técnica e inversão de gasto, e foi puxada por custo **caindo**. Aqui o custo **sobe** com o uso — computação por espectador-minuto não tem economia de escala do lado da demanda. Um serviço de 10 milhões de espectadores simultâneos a 30 FPS em GPU dedicada não tem precedente de preço. Prazo mantido no YAML com confiança média, mas assumo aqui que ele é o mais frágil do mapa.

**3. Qual disrupção-raiz pode simplesmente não acontecer?**
**D2.** Toda a sua evidência é de 2026 e é de laboratório: Causal Forcing é paper de conferência, AlayaRenderer-Flash é preprint de julho, e o survey de maio lista memória de longo horizonte como problema **em aberto**. Não há produto de massa. É plausível que geração em tempo real fique confinada a jogos e simulação — onde já há motor, física e loop de interação — e nunca migre para o que hoje chamamos de vídeo. Nesse caso D2 não é disrupção de mídia; é otimização de renderização.

**4. O que quebra na roda se D2 falhar?**
Caem e4, e5 e toda a sua descendência: seis efeitos, um terço do mapa. Sobrevivem D1 e D3, e a tese central — "o controle é a disrupção" — permanece de pé, porque D1 é a perna mais bem evidenciada. Mas a tese **perde a parte interessante**: sem D2, a mídia sintética controlável é um ganho de produtividade dentro da indústria existente, não uma mudança de natureza do objeto. Vale registrar: um mapa que sobrevive perdendo um terço dos efeitos sem mudar de conclusão pode estar pouco articulado, não robusto.

**5. Que contrassinais existem?**
Três, todos citados na seção 3.3 e nenhum deles marginal. (a) O VBench-2.0 existe porque a métrica de aparência deixou de informar — e nele controlabilidade é dimensão separada justamente porque falha. (b) O PhyParam descreve o estado da arte como movimento "não governado confiavelmente por causas físicas explícitas": é a negação literal da palavra "controle". (c) A própria Adobe, que tem todo incentivo em vender geração, posiciona o Firefly para "preencher lacunas em produções reais" — quem vende não está prometendo o estúdio de uma pessoa. Um quarto contrassinal, metodológico: as estatísticas de adoção que mais circulam vêm de páginas comerciais de fornecedores (ver seção 8).

**6. Que barreiras foram subestimadas?**
**Jurídica**, e por larga margem. Getty v. Stability alega 12 milhões de imagens; Disney e Universal litigam contra a Midjourney nos EUA. Se a decisão sobre dados de treino for restritiva, o custo do modelo muda de patamar e a promessa de barateamento em e1 e e2 se desfaz — não porque a técnica pare, mas porque o acervo encarece. **Econômica**: nada neste mapa precifica GPU. **Institucional**: o contrato do Animation Guild com a AMPTP não permite ao trabalhador recusar a ferramenta nem impedir o treino com seu trabalho — a convenção coletiva absorveu a mudança em vez de barrá-la, o que acelera D1 e *não* está representado na roda. **Cultural**: preferência declarada de público por conteúdo não sintético é medida em surveys e raramente se sustenta no comportamento; não encontrei fonte que abri capaz de sustentar essa barreira, e por isso não a usei.

**7. Que ator teria incentivo para bloquear, capturar ou redirecionar?**
Bloquear: detentores de catálogo, via litígio — Disney e Universal já o fazem. Capturar: a **Adobe**, e o movimento já é visível. Ao agregar Runway, Luma, Kling, Veo e FLUX dentro do Firefly, ela transforma a disputa entre modelos em escolha de item dentro da sua interface: quem controla a camada de acesso fica indiferente a qual modelo vence. Redirecionar: os reguladores, ao tornarem a proveniência (e3.1) condição de circulação, empurram a adoção para dentro de plataformas capazes de arcar com conformidade — o que **concentra**, em vez de democratizar. O mapa supõe barreira de entrada caindo; e3.1 é a razão pela qual ela pode subir.

**8. Que viés entrou na seleção?**
Quatro, e o primeiro é o mais sério. (a) **O tema já vinha com a resposta**: a descrição da disciplina afirma que a disrupção é o controle, e eu fui buscar evidência disso — busquei e achei, mas buscar evidência de uma tese já dada é o mecanismo padrão de viés de confirmação. Só a seção 3.3 foi construída explicitamente contra a tese. (b) **Viés de fonte**: arXiv publica o que funciona; o paper que mostra controle falhando só existe quando alguém constrói um benchmark para medi-lo — e benchmarks são raros e recentes. (c) **Viés de recência**: dei peso alto a dois preprints de julho de 2026 que nenhuma replicação independente confirmou. (d) **Viés de idioma e geografia**: quase toda a evidência é anglófona; sobre o Brasil consegui abrir uma peça de imprensa setorial e duas fontes secundárias sobre regulação, e nenhum dado de produção. A nota sobre o Brasil na seção 3.4 é, por isso, mais frágil que o resto do documento.

**Efeitos cortados nesta revisão** (registro completo na seção 12): três arestas caíram no teste "se A, então B se torna mais provável porque ___". A pior era "vídeo barato → colapso do jornalismo em vídeo": não consegui preencher o mecanismo sem supor que o valor do jornalismo está no custo de produzir imagem, o que é falso — está na apuração. Virou e3.2, que é mais estreito e sustentável.

## 8. O que a máquina errou

Cinco erros detectados durante este trabalho. Todos foram corrigidos antes da entrega; registro-os porque o processo que os produziu continua ativo.

**1. Atribuição de fatos a uma fonte que não os contém.** O resumo de busca sobre deepfakes em tribunais apresentou, como se fossem do mesmo artigo, os casos *State of Washington v. Puloka* e *Huang v. Tesla* **e** o desfecho das regras federais propostas (FRE 707 e 901(c) não avançadas na reunião de maio de 2026). Ao abrir o artigo do Thomson Reuters Institute, ele é de **8 de maio de 2025** e **não menciona** FRE 707 nem 901(c). O material de 2026 vinha de outras páginas que não abri. Corrigido: cito apenas o que o artigo aberto sustenta, e retirei do mapa qualquer afirmação sobre o estado atual das regras federais.

**2. Estatística de fornecedor apresentada como dado de mercado.** A busca por taxas de adoção devolveu, nas primeiras posições, compilações do tipo "44 estatísticas de geração de vídeo por IA" hospedadas no site da **Luma Labs** — que vende geração de vídeo — e em blogs de outras ferramentas, com números como "41% das empresas usam IA para vídeo" e "86% de 16.000 criadores". Nenhum deles nomeia instrumento, amostra ou data de campo de forma rastreável. **Não usei nenhum** e não estão na seção 11. Isto é relevante para o critério de refutação que o solicitante declarou: ele pediu evidência de que a adoção passou da maioria inicial, e a evidência disponível para responder isso é, em sua maior parte, produzida por quem vende.

**3. Número sem origem verificável, propagado como se fosse de um paper.** Um resumo de busca afirmou que modelos falham "em cerca de 80% dos casos" em relações espaciais dinâmicas. Abri o VBench-2.0 e o survey de *interactive video world modeling*: **nenhum dos dois apresenta esse número**. Não localizei a fonte. O dado foi descartado — e a afirmação correspondente na seção 3.3 foi reescrita para usar só o que os papers abertos dizem, que é qualitativo.

**4. Produto maduro quase promovido a disrupção-raiz.** Rive é o sinal mais elegante do tema e a tentação de torná-lo raiz foi direta. Mas Rive roda em Duolingo, Figma e Spotify: é produto comercialmente utilizável, com ecossistema e problemas de engenharia conhecidos — **maduro**, pela régua da própria skill, que proíbe raiz madura. Reformulei D3 para a capacidade estrutural (entrega como descrição executável) e declarei explicitamente na ficha que a maturidade é dupla: madura em interface, emergente como formato de mídia. É uma correção parcial, não uma absolvição: quem discordar tem base para rebaixar D3 a tecnologia habilitadora, e o mapa perde dois efeitos de 1ª ordem.

**5. Previsão encomendada confundida com medição.** O número de 21,4% / 118.500 empregos apareceu em resultados de busca como se fosse constatação sobre 2026. É projeção da CVL Economics, encomendada por sindicatos e associações de artistas, com campo em nov–dez/2023 e horizonte "até 2026". Tratei como o que é — parte interessada, previsão a verificar — e coloquei na seção 6 como contrassinal metodológico, não como evidência de deslocamento.

**Quatro fontes não puderam ser abertas** e por isso não sustentam nada neste documento: VFX Voice, Animation World Network, o texto integral da Resolução TSE no site do TSE e a análise da agenda regulatória da ANCINE no Mattos Filho — todas devolveram HTTP 403. O conteúdo da Resolução TSE foi confirmado por duas fontes secundárias que abri, e está assim assinalado na seção 11. **Nenhuma afirmação deste mapa depende de fonte que eu não tenha aberto.**

## 9. Três cenários para 2031

### Provável — "O instrumento entrou; o estúdio continuou"

É 2031. O controle fino venceu como funcionalidade e perdeu como promessa de emancipação. Todo pacote de pós-produção tem edição por instrução sobre clipe filmado: remover, reacender, girar o ângulo. O trabalho que sumiu foi o de entrada — a escada de formação quebrou no primeiro degrau, e as escolas ainda não repuseram nada no lugar. Quem decide continua sendo quem decidia, com equipe menor e prazo mais curto.

A geração em tempo real ficou onde já havia motor e loop: jogos, simulação, treinamento. Nunca virou formato de vídeo. A camada de acesso concentrou-se em duas ou três plataformas que agregam modelos de terceiros — a disputa entre modelos foi decidida por quem vende o acesso, não por quem treina os pesos. A proveniência funciona onde a lei obriga e evapora no resto da internet, porque o *screenshot* continua sendo o formato mais compartilhado do mundo e nenhuma marca d'água sobreviveu a ele em escala.

O estúdio de uma pessoa existe, produz bem e não substituiu ninguém: virou fornecedor terceirizado dos mesmos clientes de sempre, com margem menor.

### Desejável — "O grafo como entregável"

É 2031. A mudança que pegou não foi a geração — foi a **reprodutibilidade**. Por volta de 2028, três clientes grandes de publicidade passaram a exigir, em contrato, o grafo e a semente junto com o render, porque precisavam refazer a peça sem refazer a negociação. A exigência pegou, e arrastou o resto: se o pipeline é entregável, ele é auditável; se é auditável, dá para saber que material entrou nele; se dá para saber isso, o licenciamento de acervo vira transação e não litígio.

Foi preciso construir três coisas que não existiam em 2026. Primeira, um **formato de intercâmbio** entre ferramentas de grafo — sem ele, "entregar o pipeline" significa entregar refém a um fornecedor. Segunda, um **acordo sobre a propriedade do grafo** que não transferisse ao cliente todo o ativo do estúdio; a solução foi separar repertório (do estúdio) de composição (do cliente), e ela saiu de negociação sindical, não de tecnologia. Terceira, **medição pública de controlabilidade** — os benchmarks de 2025-26 viraram exigência de compra, e fornecedor que não publica taxa de acerto por restrição não entra em concorrência.

O efeito colateral bom foi na formação: com pipeline auditável, dá para ensinar julgamento sem passar três anos em rotoscopia. O degrau de entrada foi reconstruído em outro material.

### Indesejável — "Duas internets e nenhuma prova"

É 2031. A proveniência foi implantada como obrigação e falhou como infraestrutura. A marcação legível por máquina sobrevive na jurisdição que a exige e é removida na primeira recompressão fora dela — exatamente o que o paper de março de 2026 já media e ninguém tratou como bloqueante. O resultado não foi mídia confiável: foi um selo que separa quem pode pagar conformidade de quem não pode. Produzir para o mercado regulado exige camada jurídica; produzir fora dele, não. Concentração, não confiança.

Do outro lado, a presunção de autenticidade do vídeo acabou sem que nada a substituísse. Peça de vídeo sem proveniência virou indício, e quem tem recurso para constituir cadeia de custódia — empresa, Estado, campanha grande — tem prova; quem filma com o celular na rua, não. A inversão do ônus atingiu justamente quem usava o vídeo como último recurso.

**O sinal precoce que teria antecipado isso — e que já estava visível em 2026:** a distância entre a data de aplicação da obrigação legal (2 de agosto de 2026) e o estado da tecnologia que deveria sustentá-la. No mesmo ano, a C2PA admitia na sua própria FAQ que o manifesto "pode ser separado" do arquivo, e um preprint de março mostrava que edição semântica rotineira degrada a recuperabilidade da marca d'água. A obrigação chegou antes da camada durável. Quem quisesse ver, viu — bastava ler a FAQ do padrão.

## 10. O experimento

### Prova de direção

**O que é.** Um teste pareado e cego que mede uma coisa só: **taxa de acerto de restrição**. Não "o vídeo ficou bom" — se a peça cumpriu, uma a uma, restrições nomeadas antes de qualquer geração.

Monta-se um *brief* de plano de 8 segundos com **seis restrições verificáveis e independentes**, escritas por um profissional que não participa da execução. Por exemplo: (1) a luz principal vem da esquerda alta; (2) o objeto X não aparece em nenhum quadro; (3) a câmera é a mesma cena vista 30° à direita; (4) um evento acontece entre 3,0 s e 3,5 s; (5) o efeito atinge só a região superior do quadro e nenhuma outra; (6) um adereço permanece idêntico do primeiro ao último quadro.

Dois braços, mesmo *brief*, mesmos executores em ordem contrabalançada:
- **Braço A (emergente):** pilha de geração controlável — edição in-context sobre material filmado, propagação por quadro-chave, condicionamento espacial.
- **Braço B (maduro):** NLE + composição manual, rotoscopia, máscara à mão.

**Pergunta de futuro que testa.** *A geração já é instrumento, ou ainda é loteria com mais botões?* É a pergunta de que depende D1, e por tabela todo o mapa: se a taxa de acerto por restrição não supera a execução manual, e sobretudo se ela **não se repete**, então "controle" é nome comercial e a disrupção-raiz D1 cai.

**Tecnologia emergente usada.** Edição de vídeo in-context por instrução e condicionamento espacial explícito — a capacidade que os benchmarks de 2025-26 dizem ainda falhar. É justamente o ponto de dúvida, e é onde o teste morde.

**Por que uma solução madura não responde à mesma pergunta.** O braço B é o controle experimental, não a resposta. Com máscara desenhada à mão, a taxa de acerto tende a 100% por construção: o artista *coloca* o pixel onde quer. O que a ferramenta madura não consegue responder é o que a pergunta exige — se é possível chegar lá **por especificação**, com custo e variância aceitáveis. Sem o braço A não há pergunta; sem o braço B não há régua.

**O que os participantes fazem.** De 8 a 12 profissionais de mídia em movimento, com prática declarada em ambas as pilhas. Cada um executa os dois braços com *briefs* equivalentes e ordem trocada, com teto de 90 minutos por braço. Registram-se: número de iterações até a primeira tomada aceita por eles mesmos, e o arquivo final. Três avaliadores independentes, que não sabem qual braço produziu o quê, marcam cada restrição como **cumprida / parcial / não cumprida** contra a lista escrita — nunca contra a impressão geral.

**Métrica.** Três números, e o terceiro é o que importa:
1. **Taxa de acerto por restrição** (0 a 6), por braço, com concordância entre avaliadores (Krippendorff α; abaixo de 0,67 o item é descartado por ambiguidade da redação, não do resultado).
2. **Custo até o primeiro aceite**: minutos e número de iterações.
3. **Índice de reprodutibilidade**: a mesma especificação, no braço A, executada 5 vezes pela mesma pessoa. Mede-se a dispersão da taxa de acerto entre as cinco. É este número que separa instrumento de loteria — uma média alta com variância alta descreve uma ferramenta que *às vezes* obedece, e ninguém dirige com isso.

**O que me faria mudar de ideia — nas duas direções, declarado antes de rodar.**

*Falsifica D1 (e derruba a tese central deste mapa):* se o braço A não superar o B em taxa de acerto **e** o índice de reprodutibilidade mostrar dispersão maior que 1,5 restrição entre repetições da mesma especificação, então em 2026 não há instrumento — há amostragem com interface melhor. D1 deve ser rebaixada a tecnologia habilitadora, e os efeitos e1, e2 e e3 perdem a raiz.

*Confirma D1 e ainda assim me obriga a rever o mapa:* se o braço A superar o B **e** a vantagem se concentrar nas restrições 1 e 3 (luz e ângulo) mas não nas 4, 5 e 6 (tempo, região, continuidade), então o controle que existe é sobre **aparência**, não sobre **estrutura** — e a roda está errada no lugar onde supõe substituição de trabalho técnico fino (e1.2). Nesse caso a disrupção é real e menor do que este documento afirma.

*Limite honesto do desenho:* com 8 a 12 participantes, isto não é evidência estatística — é sonda. Serve para decidir se vale montar o estudo maior, e para expor a redação das restrições, que é onde um teste como este costuma falhar primeiro.

## 11. Fontes

Somente fontes efetivamente abertas e lidas nesta rodada. Quatro tentativas retornaram HTTP 403 e não sustentam nada no documento — estão registradas na seção 12.

1. **ControlNet — "Adding Conditional Control to Text-to-Image Diffusion Models"** (Zhang, Rao, Agrawala; 10/fev/2023) — `https://arxiv.org/abs/2302.05543` — sustenta a raiz técnica do condicionamento espacial (*edges, depth, segmentation, human pose*), as *zero convolutions* e a robustez com datasets pequenos. **Alta**: paper primário, amplamente replicado.
2. **VAR — "Visual Autoregressive Modeling: Scalable Image Generation via Next-Scale Prediction"** (abr/2024; rev. jun/2024) — `https://arxiv.org/abs/2404.02905` — sustenta FID 18,65→1,73, IS 80,4→350,2, ~20× mais rápido, e o fato de um AR superar difusão em imagem. **Alta**: melhor artigo do NeurIPS 2024.
3. **"Controllable Video Generation: A Survey"** (Ma et al.; v1 jul/2025, v3 jan/2026) — `https://arxiv.org/abs/2507.16869` — sustenta a taxonomia (condição única, múltipla, universal) e o diagnóstico de insuficiência do prompt textual. **Média-alta**: survey, não peer review confirmado.
4. **VBench-2.0** (Zheng et al.; mar–ago/2025) — `https://arxiv.org/abs/2503.21755` — sustenta as cinco dimensões, com controlabilidade separada, e a conclusão sobre plausibilidade visual × realismo. **Alta**: benchmark com validação por anotação humana.
5. **"Causal Forcing"** (Zhu, Zhao, He, Su, Li, Zhu — THU-ML; fev/2026, rev. jun/2026; ICML 2026) — `https://arxiv.org/abs/2602.02214` — sustenta o *gap* arquitetural difusão bidirecional × atenção causal e os ganhos de +19,3% / +8,7% / +16,7%. **Alta**: aceito em conferência de primeira linha.
6. **"Generative World Renderer at the Speed of Play"** (Lin et al.; 21/jul/2026) — `https://arxiv.org/abs/2607.18703` — sustenta 0,56 → 31,54 FPS e o mundo jogável a 30 FPS. **Média**: preprint recente, sem replicação independente; o próprio texto não declara limitações.
7. **"Towards Interactive Video World Modeling"** (Liu, Pollefeys, Tomizuka, Tewari et al.; 31/mai/2026) — `https://arxiv.org/abs/2606.01164` — sustenta os três problemas em aberto: controlabilidade condicionada a ação, memória de longo horizonte, responsividade. **Média-alta**: survey com autoria reconhecida.
8. **PhyParam** (Li, Wen, Song et al.; 21/jul/2026) — `https://arxiv.org/abs/2607.18924` — sustenta o condicionamento em força, massa e fricção e o diagnóstico de movimento plausível não governado por causas físicas explícitas. **Média**: preprint recente.
9. **"Editing Away the Evidence"** (Qi, Tang, Lee, Davis, Carter; 13/mar/2026) — `https://arxiv.org/abs/2603.12949` — sustenta a degradação da marca d'água robusta sob edição semântica rotineira. **Média**: preprint; não reporta números no resumo público.
10. **"Stylizing Video by Example"** (Jamriška, Sochorová, Texler, Sýkora, Lukáč, Fišer, Lu, Shechtman; SIGGRAPH 2019, ACM TOG 38(4)) — `https://dcgi.fel.cvut.cz/home/sykorad/ebsynth.html` — sustenta a propagação por quadro-chave e o *blending* temporal. **Alta**: paper em conferência de referência.
11. **EbSynth — site do produto** — `https://ebsynth.com/` — sustenta a disponibilidade atual, o fluxo "pinte os quadros-chave" e o plano gratuito sem limitação funcional. **Média**: fonte do fabricante, parte interessada; usada só para disponibilidade.
12. **Runway — "Introducing Runway Aleph"** (25/jul/2025) — `https://runway.com/research/introducing-runway-aleph` — sustenta as operações declaradas: adicionar/remover/transformar objetos, gerar qualquer ângulo, modificar estilo e iluminação. **Baixa-média como evidência de capacidade**: alegação do próprio fabricante, sem avaliação independente. Triangulada com as fontes 3, 4 e 8, que medem os limites.
13. **Rive — documentação de State Machine** — `https://rive.app/docs/editor/state-machine/state-machine` — sustenta a anatomia Graph / States / Transitions / Layers. **Alta para o que sustenta**: documentação primária do formato.
14. **Rive — casos de uso** — `https://rive.app/use-cases` — sustenta os clientes nomeados (Duolingo, Figma, Struck), a reconstrução dos personagens do Duolingo e o fato de os 30+ casos listados serem de interface. **Média**: material comercial; usado também como contrassinal contra a própria tese.
15. **Kling AI — Wikipédia** — `https://en.wikipedia.org/wiki/Kling_AI` — sustenta a cronologia de versões até a 3.0 (07/fev/2026). **Média**: terciária; usada só para datas. A página **não** confirma recursos de *motion control*, e por isso não os afirmei.
16. **CineD — "Adobe Firefly at NAB 2026"** (Alexandra Thompson, 25/abr/2026) — `https://www.cined.com/adobe-firefly-at-nab-2026-from-location-scout-to-premiere-timeline-with-ai/` — sustenta o posicionamento declarado da Adobe ("preencher lacunas em produções reais") e os recursos anunciados. **Média**: imprensa especializada, usada para contexto e posicionamento, não para capacidade técnica.
17. **Comissão Europeia — FAQ: obrigações de transparência do Artigo 50 do AI Act** — `https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act` — sustenta marcação legível por máquina, rotulagem de deepfake, exceções artística e editorial, aplicação em 02/ago/2026 e transição até 02/dez/2026. **Alta**: fonte oficial do regulador.
18. **C2PA — FAQ** — `https://c2pa.org/faqs/` — sustenta as limitações admitidas: manifestos podem ser separados do ativo; a especificação central não faz atribuição a pessoas ou organizações. **Alta para limitações**: é o próprio padrão declarando o que não garante.
19. **Content Authenticity Initiative — "The State of Content Authenticity in 2026"** (18/jan/2026) — `https://contentauthenticity.org/blog/the-state-of-content-authenticity-in-2026` — sustenta >6.000 membros, Google Pixel 10, Sony PXW-Z300, CAWG 1.2. **Baixa-média**: material institucional de parte interessada, sem métricas de penetração real; o próprio texto é reflexivo, não quantitativo.
20. **Thomson Reuters Institute — "Deepfakes on trial"** (08/mai/2025) — `https://www.thomsonreuters.com/en-us/posts/ai-in-courts/deepfakes-evidence-authentication/` — sustenta *State of Washington v. Puloka* (exclusão de vídeo "melhorado" por IA) e *Huang v. Tesla*, e o funcionamento das FRE 901(b), 104(a) e 104(b). **Média-alta**. ⚠️ **Não** sustenta nada sobre FRE 707 ou 901(c) — ver seção 8, erro 1.
21. **Jones Walker — "Two Major Lawsuits…"** (Andrew R. Lee, 18/jun/2025) — `https://www.joneswalker.com/en/insights/blogs/ai-law-blog/two-major-lawsuits-aim-to-answer-a-multi-billion-dollar-question-can-ai-train-on.html?id=102kgkx` — sustenta Getty v. Stability (12 milhões de imagens alegadas, High Court de Londres) e Disney/Universal v. Midjourney. **Média**: análise de escritório de advocacia, de junho de 2025; o estado atual dos processos em 2026 **não** está coberto por esta fonte e não foi afirmado.
22. **The Animation Guild — "AI and Animation"** — `https://animationguild.org/ai-and-animation/` — sustenta a citação literal do estudo CVL Economics (21,4%; ~118.500 empregos; Califórnia 39.500; Nova York 15.100; campo 17/nov–22/dez/2023). **Baixa como evidência de futuro**: estudo encomendado pela própria entidade e por associações de artistas — parte interessada. Usado explicitamente como contrassinal metodológico, não como dado.
23. **TELA VIVA — "Quatro tendências para a produção audiovisual em 2026"** (Mariana Toledo, 08/jan/2026) — `https://telaviva.com.br/08/01/2026/quatro-tendencias-para-a-producao-audiovisual-em-2026/` — sustenta a IA entre as quatro tendências do audiovisual brasileiro e o caso Coração da Selva. **Média**: imprensa setorial brasileira; o caso é relato da própria produtora.
24. **IDS — "TSE aprova resolução que disciplina o uso de IA e proíbe deepfake"** (18/mar/2024) — `https://ids.org.br/noticia/tse-aprova-resolucao-que-disciplina-o-uso-de-ia-e-proibe-deepfake-durante-as-eleicoes/` — sustenta os Arts. 9º-B, 9º-C, 9º-E e 23-A da Resolução TSE 23.732/2024. **Média**: secundária. ⚠️ O texto integral no site do TSE retornou 403; o conteúdo foi confirmado pela fonte 25.
25. **Resemble AI — "Brazil AI Bill 2338/2023 and TSE Resolution 23.732/2024"** — `https://www.resemble.ai/laws-and-regulations/brazil-ai-bill-23382023-and-tse-resolution-237322024/` — confirma independentemente a rotulagem obrigatória e a proibição de deepfake na Resolução TSE, e o status do PL 2338 (Senado dez/2024, pendente na Câmara). **Baixa-média**: empresa do setor, material de conformidade; usada apenas como triangulação da fonte 24.

## 12. Anexo — o levantamento bruto

### 12.1 Contrato da rodada (registrado antes da pesquisa)

Objetivo: mapa de futuro para 2031 sobre mídia sintética dirigível (vídeo e imagem), com 2 a 4 disrupções-raiz e três ordens de efeitos. Critério de pronto: formato da seção 11 da skill validado item a item. Não entra: história gerada (tema 8), som e voz (tema 13), design procedural sem IA (tema 14), e tudo que já é comum em produto de massa. Viés: neutro. Rodada não interativa — parâmetros fixados pelo protocolo, sem interlocutor para perguntas de seguimento; isto é uma limitação metodológica real e está declarada na seção 2.

### 12.2 Candidatos gerados e o veredito de cada um

| # | Candidato | Maturidade | Ruptura | Veredito |
|---|---|---|---|---|
| 1 | Direção in-context sobre material filmado (região, ângulo, luz, física) | emergente | alto | **D1 — aceito** |
| 2 | Geração causal autoregressiva em tempo real | experimental | alto | **D2 — aceito** |
| 3 | Entrega como descrição executável (estado, grafo, regra) | emergente como formato; maduro em UI | alto | **D3 — aceito com ressalva** |
| 4 | Proveniência criptográfica obrigatória (C2PA + Art. 50 + TSE) | emergente | alto | **rebaixado a efeito** (e3, e3.1): é reação à mídia sintética barata, não sua causa. Não é raiz *deste* tema |
| 5 | Geração de vídeo por prompt (texto→vídeo) | maduro | médio | **antecedente**. Régua da disciplina: já é comum em produto de massa |
| 6 | Propagação por quadro-chave (EbSynth) | maduro | médio | **antecedente**. SIGGRAPH 2019, produto disponível com plano gratuito |
| 7 | Condicionamento espacial de difusão (ControlNet) | maduro | alto historicamente | **tecnologia habilitadora**. É a raiz de D1, não a disrupção |
| 8 | Upscaling e restauração (Magnific, Topaz) | maduro | baixo | **descartado**. Melhora o que existe; não altera nenhuma das dimensões de ruptura |
| 9 | Acervo licenciado como diferencial (Firefly) | emergente comercialmente | médio | **descartado como raiz**; entra como barreira jurídica na seção 7. É posicionamento de mercado, não capacidade nova |
| 10 | Motion design procedural por regra (Cavalry, nós) | maduro no nicho | médio | **descartado**. É tema 14 da disciplina (procedural sem IA); fora do recorte |
| 11 | Vídeo programático em código (Remotion, satori) | maduro | médio | **absorvido em D3** como instância, não como raiz separada. Não encontrei fonte primária aberta para sustentá-lo isoladamente |

### 12.3 Caminhos causais cortados

- **"Vídeo barato → colapso do jornalismo em vídeo".** Cortado. O teste "se A, então B porque ___" exigiria supor que o valor do jornalismo está no custo de produzir imagem. Está na apuração. Substituído por e3.2 (mudança de objeto da perícia), mais estreito e com mecanismo.
- **"Controle fino → fim da produtora como empresa".** Cortado. Confunde queda de custo de execução com desaparecimento de função de coordenação, distribuição e responsabilidade contratual. O mecanismo não fecha: quem responde juridicamente pela peça continua precisando existir.
- **"Tempo real → fim do roteiro".** Cortado. Interatividade não elimina estrutura narrativa — jogos têm roteiro. Sobreviveu a parte defensável, que é e5 (perda da versão canônica).
- **"Proveniência → fim da desinformação em vídeo".** Cortado e substituído pelo seu contrário mais provável, no cenário indesejável: proveniência que separa quem paga conformidade de quem não paga, sem produzir confiança.
- **Aresta D2 → e3 (mídia nunca-arquivo agrava o problema de autenticação).** Reconhecida como válida e **não representada na árvore**, porque e3 já está pendurado em D1 e a estrutura não admite dois pais. Registrado na prosa da seção 5.

### 12.4 Buscas e tentativas sem resultado utilizável

- **HTTP 403, não abertas, não citadas:** VFX Voice (panorama VFX/animação 2026); Animation World Network (ratificação do contrato do Animation Guild); texto integral da Resolução TSE 23.732/2024 no `tse.jus.br`; Mattos Filho (Agenda Regulatória ANCINE 2026/2027). O conteúdo da Resolução TSE foi obtido por duas secundárias; os outros três não sustentam nada aqui.
- **Busca por taxa de adoção profissional com instrumento rastreável:** sem resultado utilizável. As primeiras dez posições são compilações de estatísticas hospedadas por fornecedores (Luma Labs, Pictory, Zebracat, entre outros). **Isto tem consequência direta**: o critério de refutação declarado pelo solicitante — evidência de que a adoção passou da maioria inicial de Rogers — **não pôde ser testado com fonte independente**. O mapa, portanto, não pode afirmar nem negar que a adoção passou da maioria inicial.
- **Busca pelo número "80% de falha em relações espaciais dinâmicas":** não localizado em nenhum paper aberto. Descartado.
- **Busca por dados de produção audiovisual brasileira com IA (ANCINE, volume, emprego):** sem fonte primária aberta. A nota sobre o Brasil apoia-se em regulação e em um caso de produtora, e é declaradamente a parte mais frágil do documento.
- **Busca por crítica profissional comparativa de ferramentas de controle (Pika, EbSynth, Kling motion control) em fluxo real:** sem fonte utilizável. O que aparece é conteúdo de comparação otimizado para busca, sem metodologia. É uma lacuna real: **não há, nas fontes que abri, avaliação independente de controlabilidade em uso profissional** — que é exatamente o vazio que o experimento da seção 10 tenta preencher.

### 12.5 Contrassinais registrados

1. VBench-2.0 trata controlabilidade como dimensão que precisa ser medida separadamente — porque falha.
2. PhyParam (jul/2026): movimento plausível "não governado confiavelmente por causas físicas explícitas".
3. Survey de mai/2026 lista controlabilidade condicionada a ação, memória de longo horizonte e responsividade como problemas **em aberto**.
4. A Adobe, com todo o incentivo comercial em prometer mais, posiciona o Firefly para "preencher lacunas em produções reais".
5. C2PA admite na própria FAQ que o manifesto pode ser separado do ativo e que a especificação central não atribui autoria.
6. O contrato Animation Guild/AMPTP absorve a GenAI em vez de barrá-la — contrassinal invertido: acelera D1 e não está representado na roda.
7. Das fontes deste mapa, as que afirmam **capacidade** são majoritariamente de fabricantes; as que **medem** são de benchmark acadêmico, e discordam entre si sobre o quanto o controle funciona.

### 12.6 Hipóteses alternativas que não entraram no mapa

- **"A disrupção não é o controle, é o custo."** Se o efeito dominante em 2031 for e2 (variantes) e não e1 (mudança da cadeia de pós-produção), então o tema deveria ter sido formulado como economia de produção, não como controle. Esta hipótese é a principal rival da tese central e o cenário Provável é, em boa parte, a descrição dela vencendo.
- **"A disrupção é a captura da camada de acesso."** Quem agrega modelos (Adobe hoje) fica indiferente a qual modelo vence e captura o valor. Não virou raiz porque é movimento de mercado, não capacidade nova — mas se esta hipótese estiver certa, todos os efeitos de barateamento e democratização do mapa estão com o sinal trocado.
- **"O autoregressivo não substitui a difusão; hibridiza."** É o que a literatura de 2026 sugere — modelos AR ganham interatividade, difusão mantém qualidade, e a combinação é o estado da arte. Se for assim, D2 não é ruptura de paradigma técnico, e sim absorção; seus efeitos permanecem, com confiança ainda menor que a declarada.
- **"O gargalo é energia e GPU, não algoritmo."** Nenhuma fonte aberta nesta rodada precifica computação. Se o custo por espectador-minuto não cair, D2 fica confinada a jogos, e4.1 se inverte e o mapa perde um terço dos efeitos. É a lacuna de evidência mais grave deste documento, e está declarada como tal.

### 12.7 Observações de processo

A rodada correu com 24 páginas efetivamente abertas e lidas, 4 bloqueadas por 403 e cerca de 14 buscas. A regra de não citar fonte não aberta foi aplicada de forma estrita, inclusive contra o próprio interesse do mapa: três afirmações atraentes — o estado atual das regras federais de prova nos EUA, a taxa de adoção profissional e o número de falha de 80% — foram removidas por falta de fonte lida. O documento é mais pobre por isso, e mais verificável.
