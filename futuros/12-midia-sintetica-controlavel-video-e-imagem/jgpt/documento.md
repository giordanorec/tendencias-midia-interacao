---
tema: "Mídia sintética controlável: vídeo e imagem"
slug: midia-sintetica-controlavel-video-e-imagem
autor_login: jgpt
zona_de_interesse: "Percepção e mídia sintética"
data: 2026-09-18
horizonte: 2031
publico: "quem projeta mídia e interação"
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 11
efeitos_ordem_2: 21
efeitos_ordem_3: 21
tecnologias_citadas: [EbSynth, Runway Gen-4, ATI, MagicMotion, Pika, Luma Dream Machine, Kling, Veo, Sora, FLUX, ComfyUI, VAR, Rive, Cavalry, Adobe Firefly, Magnific, InvokeAI, diffusers, Graphite, Pixel Composer, Pixelmash, StabilityMatrix, pix2pix, CycleGAN, ControlNet, Remotion, satori, Genie 3, C2PA, Content Credentials]
fontes: 18
confianca: media
experimento: "Um mesmo plano de 8 segundos produzido por três regimes de controle — prompt, keyframe propagado e máquina de estados — medindo iterações até aprovação e o que cada regime torna impossível."
skill_usada: futurizacao-jgpt
publico_ok: false
---

## 1. Resumo

A mídia sintética deixou de ser um problema de qualidade e virou um problema de direção. Vídeo por prompt já funciona; o que mudou entre 2024 e 2026 é que a geração passou a aceitar endereço — uma região do quadro, um quadro-chave intermediário, uma trajetória de câmera, uma performance capturada, um grafo de nós, uma máquina de estados. Isso remove a restrição que mantinha a geração fora da produção profissional: não a qualidade do resultado, mas a impossibilidade de corrigir um resultado quase certo sem jogá-lo fora. Quatro limiares foram cruzados quase ao mesmo tempo: o controle virou parâmetro endereçável; uma arquitetura nova (geração autorregressiva por escala) reabriu a disputa com a difusão e trouxe edição como propriedade nativa; a geração cruzou o orçamento de latência de um quadro e virou superfície interativa; e a proveniência criptográfica saiu do voluntariado e virou obrigação legal com data marcada. Deste cruzamento sai um mapa até 2031 em que a produção audiovisual se reorganiza em torno de quem dirige e não de quem executa, em que o ônus da prova sobre um vídeo se inverte, e em que a fronteira entre o vídeo e a interface deixa de existir como categoria.

## 2. O tema

O objeto aqui é a **imagem em movimento como mídia sintética dirigível**: vídeo e imagem gerados por máquina, mas sob controle fino de quem os projeta. Não é a história gerada (tema 8), não é o som (tema 13), não é design procedural sem IA (tema 14), e não é a captura de realidade (tema 10) — embora as quatro fronteiras vazem, e este documento diz onde.

Encosta em mídia e interação por dois lados. Pelo lado da mídia, porque redefine o que é uma peça audiovisual: se o custo marginal de um plano tende a zero mas o custo de *aprovar* um plano não, toda a economia da produção se desloca da execução para a direção. Pelo lado da interação, porque a mesma tecnologia que gera um vídeo gera um quadro por vez em tempo real — e um vídeo que produz o próximo quadro em função do que o espectador acabou de fazer não é mais um vídeo, é uma interface.

Merece mapa de futuro e não estado da arte porque a pergunta interessante não é "qual modelo é melhor". É: quando dirigir mídia sintética fica barato e verificável, o que acontece com as profissões, com as provas e com a categoria "vídeo". Nenhuma dessas três respostas está no changelog de nenhum produto.

## 3. Onde isso está hoje

### O que já existe e funciona

**Controle por referência, já em produto.** A Runway anuncia no Gen-4 "consistência infinita de personagem a partir de uma única imagem de referência", geração do mesmo personagem sob qualquer iluminação, local ou tratamento, posicionamento de objeto em qualquer condição, e obtenção de "qualquer ângulo de qualquer cena" fornecendo imagens de referência mais descrição de composição — tudo sem fine-tuning ou treino adicional [F11]. É material do próprio fabricante, e a ressalva vale: são alegações de marketing sobre capacidade, não medições independentes. Mas a *forma* do controle é a informação relevante — a referência visual substituindo o prompt como instrumento de direção.

**Controle por trajetória, ainda na pesquisa.** O ATI (Any Trajectory Instruction) unifica num só mecanismo três coisas que antes exigiam módulos separados: deformação localizada, movimento de objeto inteiro e dinâmica de câmera virtual — o usuário especifica keypoints e seus caminhos de movimento, injetados no espaço latente de um modelo imagem-para-vídeo pré-treinado [F13]. O MagicMotion aceita máscaras, caixas delimitadoras e caixas esparsas como condições de trajetória, e declara explicitamente o que ainda não funciona no campo: aderência imprecisa à trajetória, consistência ruim de objeto e qualidade visual comprometida em movimento complexo e multi-objeto [F12].

**Uma lacuna que preciso declarar.** Recursos frequentemente citados como consolidados — pincel de movimento por região, quadro-chave intermediário, transferência de performance de corpo inteiro — **não puderam ser ancorados em documentação primária nesta sessão** (a central de ajuda da Runway devolveu HTTP 403). Eles não aparecem neste documento como fato, e nenhum efeito da roda depende deles. O que está ancorado é menos do que a cobertura do setor sugere: controle por referência em produto, controle por trajetória em artigo com benchmark próprio.

**Propagação a partir de um quadro pintado à mão.** O EbSynth continua sendo o caso mais limpo de controle: o artista edita um quadro e um algoritmo de síntese de textura propaga a edição pela linha do tempo, guiado pelo fluxo óptico do vídeo original, sem rastreamento manual. O próprio produto declara o limite: artefatos aparecem quando as formas do quadro-chave não se alinham ao vídeo-guia; o plano gratuito exporta a 720p; o processamento inteiramente offline custa US$ 200/mês [F8]. É uma tecnologia de 2019 que sobreviveu a duas gerações de difusão exatamente porque é a mais dirigível.

**Geração como grafo.** O ComfyUI se descreve como mecanismo modular com interface de grafo de nós visuais, subgrafos reutilizáveis, templates e modo de aplicativo; workflows são salvos e carregados como JSON e podem ser **recuperados integralmente a partir da mídia gerada, inclusive as seeds usadas**, com suporte a Stable Diffusion, SDXL, Flux, Qwen, Hunyuan, Wan, LTX-Video, CogVideoX e Mochi [F14]. A recuperabilidade é o ponto: um vídeo que carrega dentro de si o grafo que o produziu é um vídeo reeditável, e isso é controle. É a mesma forma de Cavalry, Graphite e Pixel Composer.

Não afirmo nada sobre escala de adoção do ComfyUI. Os números que circulam — milhões de usuários, uso interno em grandes estúdios nomeados — vêm de blogs de terceiros que não abri, e portanto saíram deste documento em vez de entrarem com ressalva.

**Animação que responde a evento.** O Rive trata animação como máquina de estados: estados são timelines, transições são lógica, e a montagem é um grafo visual que liga animações a condições [F3]. O mesmo arquivo roda em Web/JS, React, React Native, iOS, Android, Flutter, Unity, Unreal, C++ e C# [F4]. Isso é o sinal mais subestimado do tema: uma peça de animação que não toca, e sim reage.

**Geração em tempo real.** O Genie 3 da DeepMind gera mundos navegáveis em tempo real a 24 quadros por segundo, 720p, com memória visual de cerca de um minuto e "promptable world events" — alterações do mundo por texto, como mudar o clima ou inserir um objeto [F9]. Ficou publicamente acessível em 29/01/2026 para assinantes do Google AI Ultra, com sessões limitadas a 60 segundos por custo computacional [F10].

**Proveniência criptográfica.** O C2PA é um padrão técnico de certificação de origem e histórico de mídia, mantido sob a Joint Development Foundation, hoje na versão 2.x, com orientação específica para conteúdo de IA [F2]. A adoção tem datas: Leica M11-P em out/2023, Sony em mar/2024, Canon (EOS R1, R5 II) em jul/2025; Firefly em mar/2023, DALL·E/ChatGPT em fev/2024, Gemini em ago/2025; LinkedIn mai/2024, TikTok mai/2024, YouTube out/2024, Busca do Google nov/2024 [F5].

### O que existe e não funciona

**A cadeia de proveniência quebra.** A BBC Verify removeu manifestos C2PA ao republicar vídeos (mar/2024) — não por má-fé, por fluxo de trabalho. A Nikon anunciou suporte em ago/2025 e revogou certificados em setembro após uma vulnerabilidade na Z6III que permitia combinar imagem não-autêntica com foto autêntica mantendo assinatura válida. Em ago/2026, acesso root no Android permitia forjar assinaturas sobre dados arbitrários. Até meados de 2026 nenhuma câmera dedicada havia atingido conformidade formal no programa do C2PA [F5]. A crítica de fundo é a mais dura: a credencial atesta proveniência, não veracidade — uma imagem encenada com câmera certificada tem credencial impecável [F5].

**A promessa de "seguro para uso comercial" não sobreviveu ao escrutínio.** O Firefly, lançado em beta público em março de 2023, foi treinado em Creative Commons, Wikimedia Commons, Flickr Commons, cerca de 300 milhões de imagens e vídeos do Adobe Stock e domínio público, e a Adobe chamou o resultado de "commercially safe" por depender apenas de dados licenciados ou em domínio público. Reportagem posterior expôs que o Firefly também foi treinado em imagens do Midjourney e de outros concorrentes, o que pôs a alegação em xeque [F15]. Sobre a indenização de PI por plano — muito citada comercialmente — **não abri contrato nem fonte primária, e por isso não afirmo nada a respeito**. O ângulo jurídico embutido no tema é real e não está resolvido.

**A difusão não é o fim da história, mas a alternativa ainda não virou produto de vídeo.** O VAR provou o ponto em imagem estática; a transposição para vídeo em escala de produto não está demonstrada publicamente.

**O que o setor diz esperar.** O estudo "Future Unscripted", conduzido pela CVL Economics a pedido de The Animation Guild IATSE Local 839, Concept Art Association, Human Artistry Campaign e National Cartoonists Society Foundation, ouviu 300 líderes de seis setores de entretenimento entre 17/11 e 22/12/2023 e projetou 204.000 empregos significativamente afetados em três anos, sendo 118.500 em cinema, TV e animação — 21,4% de uma base de 555.000 — e 52.400 em games [F17]. Trato isso como declaração de expectativa de executivos, não como medição: quem encomendou tem interesse no resultado, a amostra é de percepção, e o horizonte de três anos declarado pelo estudo termina justamente agora. **Nenhum efeito da roda está ancorado nesse número.**

**Onde a prova em vídeo está hoje.** O padrão corrente de admissibilidade é permissivo: basta que uma parte forneça informação suficiente para que um júri razoável conclua que a prova é mais provavelmente autêntica do que não. Magistrados relatam que a dificuldade prática não é o material falso, e sim o dividendo do mentiroso — prova autêntica alegada como gerada por IA [F18]. É deste piso que D4 parte.

### Quem está construindo

Runway, Luma, Kuaishou (Kling), Google DeepMind (Veo, Genie), OpenAI (Sora), Black Forest Labs (FLUX), Adobe (Firefly), Pika, Rive, Cavalry, Secret Weapons (EbSynth), a comunidade do ComfyUI/diffusers/InvokeAI, e os laboratórios acadêmicos que produziram o VAR — cujo artigo foi Best Paper do NeurIPS 2024 [F1].

### Leitura de maturidade

Usando o Hype Cycle apenas como diagnóstico, e não como previsão: o controle espacial em vídeo é **cobertura de adoção** (está em documentação de produto, com preço por segundo e créditos), enquanto a geração interativa em tempo real ainda é majoritariamente **cobertura de demonstração** (acesso limitado, sessões de 60 segundos, limitações declaradas pelo próprio fabricante). A curva não autoriza estimar quando a segunda vira a primeira.

## 4. As disrupções-raiz

Quatro candidatas passaram no teste "o que isso rompe, e por que agora e não há cinco anos". As rejeitadas estão na seção 6 e no anexo.

### D1 — O controle virou parâmetro endereçável

**O que rompe.** Até 2023, dirigir geração significava reescrever o prompt e tirar de novo. A unidade de trabalho era a *tiragem*. Com região do quadro, quadro-chave intermediário, trajetória de câmera e performance transferida, a unidade passa a ser a *correção local*. Isso remove a restrição que mantinha a geração fora de qualquer pipeline profissional: a impossibilidade de aproveitar um resultado quase certo.

**Por que agora.** O limiar não é de qualidade, é de endereçamento — e ele aparece em duas camadas com maturidades diferentes. Em produto: a referência visual passou a governar identidade, ângulo e condição de cena sem fine-tuning [F11], o que em 2021 exigiria treinar um modelo por personagem. Em pesquisa: o controle deixou de ser um módulo por tipo de movimento e virou uma instrução única de trajetória que cobre deformação local, objeto e câmera ao mesmo tempo [F13], com máscara, caixa e caixa esparsa como condições intercambiáveis e benchmark próprio para medir aderência [F12]. O EbSynth já fazia propagação a partir de um quadro desde 2019, mas sem síntese — estiliza o que existe, não inventa o plano.

**Ressalva de força.** Esta é a raiz mais importante do mapa e é a que tenho *menos* ancorada em produto: a camada de produto que abri é vendor, e a camada medida é acadêmica. É a razão de a confiança de e1 ter sido rebaixada de alta para média na Etapa 4.

**O que falta.** Consistência de personagem entre planos sem retreino, e um formato de troca que carregue as decisões de direção entre ferramentas (hoje o grafo do ComfyUI não conversa com o keyframe da Runway).

### D2 — A geração visual autorregressiva por escala

**O que rompe.** O VAR redefine geração de imagem como predição da próxima *escala* — do grosso ao fino — em vez da próxima posição em varredura raster. Os números do artigo: FID de 18,65 para 1,73, Inception Score de 80,4 para 350,2, cerca de 20× mais rápido na inferência, superando Diffusion Transformers em qualidade, velocidade, eficiência de dados e escalabilidade. E, o que mais importa aqui, exibe leis de potência de escala como as de LLMs (correlação próxima de −0,998) e generaliza zero-shot para inpainting, outpainting e edição [F1].

**Por que agora.** O limiar é arquitetural e tem data: Best Paper do NeurIPS 2024. A consequência prática não é "mais bonito": é que a edição deixa de ser um acessório enxertado sobre um processo de denoising e vira propriedade do próprio processo generativo — gerar do grosso ao fino é gerar em etapas interrompíveis, e uma etapa interrompível é um ponto de controle.

**O que falta.** Demonstração pública em vídeo, em escala de produto, e a mesma economia de inferência com coerência temporal.

### D3 — A geração cruzou o orçamento de latência de um quadro

**O que rompe.** Quando um sistema produz o próximo quadro em pouco mais de 40 ms, geração e interação deixam de ser fases distintas. Não há mais "renderizar" e depois "reproduzir": há um laço. O Genie 3 entrega 24 fps a 720p com eventos de mundo acionáveis por texto [F9]; o Rive, por outro lado, entrega a mesma ideia sem IA, com a animação como máquina de estados portátil entre nove runtimes [F3][F4]. As duas pernas convergem no mesmo ponto: a peça audiovisual passa a ter *entradas*.

**Por que agora.** O limiar é numérico e público: 41 ms por quadro, e disponibilidade comercial (ainda que restrita) desde 29/01/2026 [F10]. A própria DeepMind declara os limites: espaço de ação restrito, dificuldade com múltiplos agentes, impossibilidade de simular locais reais com precisão, texto legível só quando fornecido no prompt inicial, e minutos — não horas — de interação contínua [F9].

**O que falta.** Persistência: um mundo que lembra de uma hora atrás, e não de um minuto. Sem isso, o laço serve a experiências curtas, não a mídia.

**Fronteira declarada.** Aqui o objeto é a *superfície de mídia que responde*, não o agente que habita o mundo (tema 7) nem o modelo de mundo como substrato de robótica (tema 9).

### D4 — A proveniência saiu do voluntariado e virou obrigação com data

**O que rompe.** Até 2025, marcar conteúdo sintético era decisão de produto. O Artigo 50 do AI Act europeu passa a exigir que saídas de sistemas geradores de áudio, imagem, vídeo e texto sejam marcadas em formato legível por máquina e detectáveis como artificialmente geradas ou manipuladas, com solução eficaz, interoperável e robusta; e que quem implanta sistemas de deep fake divulgue a manipulação — com regime aliviado para obra artística, satírica ou ficcional [F6]. Isso cria duas classes de arquivo: o que carrega procedência assinada e o que não carrega. A segunda classe não fica ilegal — fica *sem valor probatório*.

**Por que agora.** A data é o limiar: 2 de agosto de 2026, por força do Artigo 113 [F6]. No Brasil, o PL 2338/2023 — que dispõe sobre o uso da inteligência artificial — foi aprovado pelo Senado e remetido à Câmara dos Deputados em 17/03/2025, encerrando a tramitação no Senado [F7]. **O estado da tramitação na Câmara não consta da ficha oficial que abri, e por isso não afirmo nada sobre calendário de votação.** A nota sobre o Brasil deste documento é, portanto, mais estreita do que o recorte pedia: há um projeto aprovado numa casa, e não há data.

**O que falta.** Que a cadeia sobreviva ao upload, ao transcode e ao recorte — hoje não sobrevive [F5]. E que a assinatura no dispositivo resista a acesso privilegiado — em ago/2026 não resistia [F5].

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "D1 — O controle virou parâmetro endereçável"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "A unidade de trabalho audiovisual passa da tiragem para a correção local, e o número de iterações dirigidas substitui a duração como principal determinante de custo."
        sinal: forte
        prazo: 2027
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "Contratos de produção migram de diária e tamanho de equipe para preço por plano aprovado."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "A estimativa de prazo perde âncora empírica, e surgem seguros e cláusulas de teto de iteração para redistribuir o risco de um plano que não converge."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "O gargalo da produção desloca-se da execução para a aprovação, e o cliente que revisa vira o recurso escasso do pipeline."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Agências passam a vender capacidade de decisão — curadoria e direção de arte — em vez de capacidade de produção, e o briefing vira o entregável de maior margem."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "Surge uma função de direção de geração, cuja competência é descrever região, trajetória, quadro-chave e referência de performance, e não executar movimento quadro a quadro."
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "O ensino de animação se parte em dois currículos: fundamentos de movimento, que viram pré-requisito para dirigir, e operação de pipeline generativo."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "A escada de entrada da profissão quebra: sem tarefas de execução repetitiva, não há onde o iniciante adquirir o repertório de movimento que a direção pressupõe, e a formação passa a depender de exercício deliberado fora do trabalho."
                sinal: medio
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "Estúdios de uma a cinco pessoas passam a disputar contratos antes reservados a estruturas de trinta, em categorias onde o volume de planos é alto e a exigência de consistência é média."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "A publicidade audiovisual de médio porte se desagrega em uma malha de fornecedores individuais coordenados por plataforma, e a produtora deixa de ser a unidade econômica padrão do setor."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "A decisão de direção — máscara, keyframe, trajetória, grafo — vira o artefato de valor durável, enquanto o vídeo renderizado vira subproduto regenerável."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "Aparece disputa por um formato de intercâmbio de intenção de direção entre ferramentas, análogo ao que EDL e OpenTimelineIO fizeram pela edição."
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Quem controlar esse formato captura a posição de plataforma do setor, e os modelos generativos viram peças intercambiáveis abaixo dele."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "Acervos audiovisuais passam a ser arquivados como grafo de direção mais semente, e não como arquivo de vídeo final."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "A preservação audiovisual enfrenta um problema novo: o acervo só é legível enquanto o modelo que o gerou existir, e a obsolescência de modelo vira risco de perda patrimonial."
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: "D2 — A geração visual autorregressiva por escala"
    efeitos:
      - id: e4
        ordem: 1
        efeito: "A edição deixa de ser um acessório enxertado sobre o processo generativo e passa a ser propriedade nativa dele, porque gerar do grosso ao fino é gerar em etapas interrompíveis."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "Interfaces de geração adotam o modelo mental do zoom progressivo: o usuário aprova a composição grosseira antes que o custo do detalhe seja gasto."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "O custo por imagem deixa de ser um preço fixo e vira uma função do nível de detalhe aprovado, e o orçamento de uma peça passa a ser negociado em escalas, não em unidades."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "A geração visual herda a infraestrutura de serviço dos LLMs — streaming, cache de prefixo, interrupção — e converge com ela em operação e custo."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "Modelo de texto e modelo de imagem passam a ser servidos pelo mesmo runtime e pelo mesmo time de infraestrutura, e a especialidade 'engenheiro de difusão' se dissolve."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "As leis de potência de escala observadas no VAR tornam o desempenho de geração visual previsível a partir do orçamento de treino, como já era em linguagem."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "O investimento em geração visual passa a ser decidido por projeção de escala e não por demonstração qualitativa, o que concentra o treino de modelos de fronteira em poucos atores."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "A comunidade aberta desloca-se do treino para a camada de controle — nós, adaptadores, grafos —, e a inovação visível do campo passa a acontecer acima do modelo, não dentro dele."
                sinal: medio
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "Difusão e autorregressão deixam de competir e se especializam por tarefa, com autorregressão dominando o que exige edição e continuação, e difusão o que exige textura."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "A escolha de arquitetura vira decisão de pipeline exposta ao usuário final como um seletor de regime, do mesmo modo como codec é hoje."
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: "D3 — A geração cruzou o orçamento de latência de um quadro"
    efeitos:
      - id: e6
        ordem: 1
        efeito: "A peça audiovisual passa a ter entradas, e a distinção entre exibir um vídeo e executar uma interface deixa de ser uma distinção de categoria."
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "Formatos de entrega ganham um campo de estado, e a indústria precisa de uma noção de 'duração' que não seja tempo de reprodução."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "Métricas de audiência baseadas em tempo assistido perdem sentido e são substituídas por medidas de trajetória, o que reescreve a precificação de mídia."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "O design de interface e a direção de animação se fundem em uma disciplina só, porque a máquina de estados é simultaneamente o roteiro e o comportamento."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "A acessibilidade vira problema aberto de novo: legenda, audiodescrição e redução de movimento pressupõem uma peça com ordem fixa, que deixa de existir."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: "A animação portátil entre runtimes, hoje representada pelo Rive, absorve casos de uso que antes eram vídeo pré-renderizado em produto digital."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "O peso de banda de interfaces animadas cai por ordens de grandeza, e animação rica se torna viável em conexões e dispositivos onde vídeo não era."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "Mercados de primeira conexão móvel, incluindo grande parte do Brasil, recebem interfaces expressivas antes de receberem vídeo de alta definição, invertendo a ordem histórica de difusão de mídia rica."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: "Geração pesada migra para tempo de autoria e a execução em tempo real fica com a máquina de estados, consolidando um pipeline híbrido de gerar antes e reagir depois."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: "O custo energético por peça entregue cai, e o argumento ambiental contra mídia sintética perde força justamente quando o volume de peças cresce."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: "A limitação de memória dos mundos gerados — hoje na ordem de um minuto — torna-se o principal parâmetro de qualidade percebida, acima de resolução e realismo."
        sinal: fraco
        prazo: 2029
        confianca: baixa
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "A pesquisa desloca-se de fidelidade para persistência, e benchmarks passam a medir coerência ao longo de horas em vez de qualidade por quadro."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: "Arquiteturas híbridas com estado simbólico externo se impõem sobre a geração puramente neural, reabilitando técnicas procedurais clássicas como camada de memória."
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: "D4 — A proveniência saiu do voluntariado e virou obrigação com data"
    efeitos:
      - id: e9
        ordem: 1
        efeito: "O arquivo de mídia adquire estado jurídico, e passam a existir duas classes de vídeo: o que carrega procedência assinada e o que não carrega."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: "Nasce um mercado de autenticidade certificada, com custódia de cadeia de proveniência vendida como serviço a redações, tribunais e seguradoras."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: "A capacidade de provar autenticidade se estratifica por renda, e depoimentos em vídeo de quem usa aparelho barato valem menos em juízo do que os de quem usa aparelho certificado."
                sinal: medio
                prazo: 2031
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: "Plataformas que hoje removem metadados no upload passam a preservá-los por exigência regulatória, e transcode preservador de manifesto vira requisito de infraestrutura."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e9.2.1
                ordem: 3
                efeito: "A preservação obrigatória de manifesto cria um canal de rastreamento de autoria e dispositivo que colide com anonimato de fontes jornalísticas e de denunciantes."
                sinal: medio
                prazo: 2031
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: "O ônus da prova sobre um vídeo se inverte: a pergunta padrão deixa de ser se o material é falso e passa a ser se o material tem procedência demonstrável."
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: "O dividendo do mentiroso se amplifica no intervalo entre a obrigação legal existir e a cadeia técnica funcionar, porque a ausência de credencial vira argumento de defesa reutilizável."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: "Arquivos audiovisuais anteriores a 2026, que nunca puderam ser assinados na origem, tornam-se sistematicamente contestáveis, e a memória histórica em vídeo perde força probatória por vício de data."
                sinal: medio
                prazo: 2031
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: "Redações adotam política de dupla fonte para todo material audiovisual, e a verificação deixa de ser função de um núcleo especializado para virar etapa obrigatória de pauta."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e10.2.1
                ordem: 3
                efeito: "O custo unitário de publicar vídeo sobe no jornalismo justamente quando cai na produção comercial, e veículos pequenos abandonam o formato."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: "A obrigação de marcar conteúdo sintético torna a procedência do dado de treino um ativo comercial, e o acervo licenciado deixa de ser diferencial de marketing para virar requisito de contrato."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: "Indenização de propriedade intelectual vira item precificado explicitamente no contrato de ferramenta, com escopo e teto declarados por plano."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: "Surge um mercado secundário de licenciamento de acervo audiovisual para treino, e arquivos históricos de emissoras e agências passam a render mais como dado do que como imagem."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e11.2
            ordem: 2
            efeito: "Modelos de pesos abertos se dividem entre os que declaram proveniência de treino e os que não declaram, e a segunda categoria é excluída de uso corporativo."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e11.2.1
                ordem: 3
                efeito: "A fronteira de capacidade em geração visual passa a ser ocupada por modelos que uma empresa não pode usar legalmente, e a diferença entre o melhor tecnicamente e o melhor utilizável vira um custo de conformidade mensurável."
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

O bloco não consegue dizer três coisas que importam.

**Primeira: as quatro subárvores não são independentes.** D1 e D4 se cruzam no mesmo objeto — quanto mais dirigível a geração, mais indistinguível do registro, e mais necessária a credencial. O efeito e10 só é grave porque e1 aconteceu. Uma roda desenhada como árvore não representa esse acoplamento, e a leitura correta de e9 e e10 é a de que eles são a *resposta institucional* a D1, não um ramo paralelo.

**Segunda: os prazos de D4 são legais e os de D1 são técnicos, e eles não obedecem à mesma física.** Um prazo técnico pode antecipar; um prazo legal costuma atrasar. Quando escrevi `prazo: 2027` para e9, estou usando a data de vigência do Artigo 50 (02/08/2026) mais o intervalo típico entre vigência e primeira aplicação prática. Isso é uma suposição declarada, não uma medição.

**Terceira: o ramo de D3 é o mais frágil e o mais interessante.** É o único onde a confiança cai a baixa já no primeiro nível (e8), e é também o único cuja concretização mudaria a definição do objeto deste mapa. Se o vídeo vira interface, este documento estará mapeando a coisa errada em 2031 — e é por isso que ele fica.

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — o Rive é o mais subestimado do tema.** Não é IA, não aparece em ranking de modelo, e implementa exatamente a tese de 3ª ordem: animação que responde, portátil entre nove runtimes com um único arquivo [F3][F4]. Enquanto a atenção do campo está em quem gera o quadro mais bonito, a mudança de categoria está acontecendo do lado de fora da geração.

**Sinal fraco 2 — a limitação de memória declarada.** A DeepMind diz que o Genie 3 sustenta minutos, não horas, e que o texto legível só aparece se fornecido no prompt inicial [F9]. Ambas as limitações apontam para o mesmo buraco: falta estado simbólico. Isso sugere que o próximo avanço relevante pode vir da reabilitação de técnicas procedurais como camada de memória — o que recoloca o tema 14 dentro deste.

**Sinal fraco 3 — a vulnerabilidade da Nikon e o root no Android.** Duas falhas de 2025 e 2026 mostram que a assinatura na origem é tão forte quanto o elo mais fraco do dispositivo [F5]. Se a credencial for falsificável em escala, D4 inverte de sinal: em vez de criar confiança, cria uma falsa sensação de confiança, que é pior do que não ter nenhuma.

**Candidatas emergentes rejeitadas como raiz** (ver anexo para o teste completo): geração de imagem por prompt simples e upscaling (maduras); controle unificado por trajetória de keypoints, cobrindo deformação local, objeto e câmera num só mecanismo (emergente — tem artigo, dataset e benchmark próprios [F13][F12], mas ainda não é parâmetro documentado de produto, e o próprio artigo declara aderência imprecisa em movimento complexo); detecção automática de sintético (emergente e estruturalmente perdedora, pelo mesmo argumento do dividendo do mentiroso).

**Wildcard 1 — um longa-metragem feito por uma pessoa entra na competição principal de um festival de primeira linha e vence.** Baixa probabilidade, impacto alto. O efeito não seria econômico e sim simbólico: dissolveria o argumento de que a direção generativa produz apenas material de segunda, e antecipararia e2.2 e e1.1 em dois ou três anos de uma só vez.

**Wildcard 2 — um tribunal superior exclui, em decisão de repercussão, todo vídeo sem credencial válida de um tipo inteiro de processo.** Baixa probabilidade até 2031, impacto altíssimo. Transformaria e9.1.1 de efeito de terceira ordem em consequência imediata, e criaria da noite para o dia um mercado de autenticação retroativa — que é tecnicamente impossível e, portanto, seria preenchido por fraude.

**Wildcard 3 — um modelo autorregressivo de vídeo com pesos abertos iguala a fronteira comercial e é lançado sem declaração de proveniência de treino.** Colocaria e11.2.1 no presente: a melhor ferramenta do campo seria justamente a que nenhuma empresa poderia usar, e a fratura entre o uso profissional e o uso amador deixaria de ser de capacidade para ser de direito.

## 7. Contra o próprio mapa

### Extrapolação linear

O efeito **e1** é o mais suspeito de ser apenas o presente em maior quantidade. "O custo passa a ser dominado por iterações" descreve uma tendência que já estava em curso desde que existe pré-visualização digital — a produção audiovisual vem trocando execução por iteração há vinte anos. O que há de descontínuo é a magnitude, não a direção, e magnitude não é descontinuidade. **Rebaixei a confiança de e1 de `alta` para `media`**, por dois motivos somados: este, e o fato de a camada de produto de D1 estar ancorada apenas em material do próprio fabricante (ver a ressalva de força em D1).

O **e7.1** sofre do mesmo problema em menor grau. Interface animada leve versus vídeo pesado é uma disputa que já existia com Lottie e SVG; o Rive acrescenta reatividade, não leveza. O ganho de banda não é novo.

### Velocidade de adoção nunca vista

O ramo **e9 → e9.2** pressupõe que plataformas reescrevam pipelines de transcode para preservar manifesto em cerca de três anos, empurradas por regulação. O caso comparável contradiz o prazo: o GDPR entrou em vigor em 2018 e a conformidade real de gestão de consentimento levou de cinco a sete anos para estabilizar, num requisito tecnicamente mais simples do que preservar assinatura criptográfica através de recodificação com perda. Rebaixo a leitura de e9.2 — o prazo de 2029 no bloco deve ser lido como o início do movimento, não como conclusão dele, e a confiança `media` já é generosa.

O **e2.2** também assume velocidade improvável: estúdios minúsculos disputando contratos de médio porte até 2029 pressupõe que compradores corporativos mudem critérios de fornecedor em quatro anos. Compras corporativas de mídia mudam por ciclo de agência, tipicamente de três a cinco anos, e o critério de risco reputacional favorece fornecedores maiores exatamente quando a tecnologia é nova. Já registrei confiança `media`; ela deveria ser `baixa` se o recorte fosse só mercado corporativo.

E o **e6.1.1** — métricas de audiência sendo substituídas até 2031 — pressupõe que um setor inteiro abandone a moeda de troca que sustenta seus contratos publicitários. A televisão levou mais de uma década para incorporar medição digital ao mesmo painel. Confiança `baixa` está correta e não deve subir.

### Se cada disrupção não vingar

**Se D1 não vingar** — se o controle fino permanecer frágil, com consistência de personagem quebrando entre planos e o custo de correção convergindo para o custo de refazer — a subárvore e1–e3 inteira cai, e com ela a premissa econômica do mapa. Neste cenário a mídia sintética se estabiliza como ferramenta de *ideação* e de conteúdo de baixo risco (fundo, textura, variação publicitária), nunca de obra final. As profissões não se reorganizam; ganham uma ferramenta. É um desfecho perfeitamente plausível e o mapa o subestima.

**Se D2 não vingar** — se a autorregressão por escala não se transpuser para vídeo, ou se a difusão absorver as vantagens com melhorias incrementais — a subárvore e4–e5 cai quase inteira, exceto e5.1.1, que sobrevive por outro caminho (a comunidade aberta já está migrando para a camada de controle por razões de custo de treino, independentemente de arquitetura). É a subárvore mais dependente de um único artigo, e o artigo é sobre imagem estática.

**Se D3 não vingar** — se a persistência não avançar e mundos gerados ficarem restritos a minutos — e6, e7 e e8 caem como descritos, mas e7 sobrevive numa versão menor, sem IA: o Rive já funciona hoje e não depende de nada nesta lista. Vale notar que D3 é a única raiz cuja falha *não* devolve o campo ao estado anterior, porque a perna não-generativa dela já está em produção.

**Se D4 não vingar** — se a obrigação do Artigo 50 for aplicada de forma fraca, ou se a cadeia técnica continuar quebrando no upload a ponto de a exigência virar letra morta — e9, e10 e e11 caem, e o resultado não é neutro: é o cenário do dividendo do mentiroso sem contrapeso, em que qualquer vídeo é contestável e nenhum é demonstrável. O termo é de Bobby Chesney e Danielle Citron, e a tática já tem casos documentados em tribunal: advogados da Tesla argumentaram que declarações passadas de Elon Musk sobre segurança de carros autônomos não poderiam ser usadas em juízo por serem supostamente deepfakes, e a defesa de Guy Reffitt, no caso do 6 de janeiro, sustentou que a prova contra ele poderia ser gerada por IA [F16]. Este é o único caso em que a *falha* da disrupção é pior do que o sucesso dela.

### Viés do autor

A skill manda perguntar ao usuário se ele escolheu o tema por gostar dele. **Não houve usuário nesta rodada** — as respostas de entrevista vieram pré-fixadas pelo operador da execução, que declarou viés `neutro` e nenhuma disrupção suspeita. Portanto a pergunta não foi respondida por uma pessoa e **não deve ser lida como respondida**.

O que posso declarar é o viés que eu mesmo introduzi. Ele existe e tem direção: o tema foi apresentado com a tese "a mídia sintética está deixando de ser loteria e virando instrumento — e é isso que a torna profissional", e eu a aceitei como premissa em vez de testá-la. Um mapa honesto teria procurado ativamente evidência de que o controle fino *não* melhorou entre 2024 e 2026, ou de que ele melhorou sem que a adoção profissional acompanhasse. Não procurei. As buscas que fiz eram todas confirmatórias.

Segundo viés: o critério de exclusão da disciplina — "o que já é comum em produto de massa não entra" — empurra sistematicamente o mapa para o lado otimista, porque tudo que falhou e virou commodity é excluído por definição, enquanto tudo que ainda não falhou permanece elegível. Isto é um viés estrutural do método, não deste documento, e vale para os dezenove temas.

### O que sobreviveu à contestação

Rebaixei a confiança de e1 de `alta` para `media` no próprio bloco, rebaixei a leitura de e9.2 e e2.2, e cortei três efeitos (Anexo §C). O que sobreviveu intacto foi e9, ancorado numa data legal verificável (02/08/2026). Já **e2 não sobreviveu intacto**: eu havia escrito que a função de direção de geração é "já observável em anúncio de vaga" — não abri nenhum anúncio de vaga, não busquei nenhum, e a frase foi removida. É exatamente o tipo de corroboração inventada por conveniência retórica que esta seção existe para pegar. O efeito e2 fica, com a confiança que tinha, mas sustentado por inferência a partir de D1 e não por observação de mercado.

## 8. O que a máquina errou

**O erro específico, e como foi pego.** Na primeira montagem da seção 3, escrevi que o ComfyUI tem "mais de 4 milhões de usuários" e é "adotado internamente por Netflix, Tencent e Ubisoft", e escrevi isso como fato, em prosa afirmativa, com a naturalidade de quem leu um relatório. Não li. Esses números vieram de um resumo agregado de resultados de busca — de blogs de terceiros, sem que eu abrisse nenhum deles, sem fonte primária, sem comunicado da empresa e sem confirmação de nenhuma das três companhias citadas. Peguei ao rodar a checagem da Etapa 1, que manda listar quais URLs foram efetivamente abertas: o ComfyUI não estava na lista. Na primeira correção eu apenas *marquei* a alegação como não verificada e a mantive no texto; na segunda, removi os números e fui ao README do projeto, que sustenta algo melhor e diferente — a recuperabilidade integral do workflow a partir da mídia gerada.

Isso importa mais do que parece. Nomear três empresas reais confere autoridade barata a um argumento, e "Netflix usa" é exatamente o tipo de frase que um leitor não confere. A forma do erro é a perigosa: não foi uma alucinação bizarra, foi uma alegação plausível, específica, verossímil e do tamanho certo para passar.

**Segundo erro, de outra natureza.** Ao redigir a seção 4, atribuí à Runway a existência do Act-Two com detalhamento de funcionamento (face, mãos, corpo inteiro) a partir de resumo de busca — e a tentativa de abrir a documentação oficial retornou HTTP 403. O recurso muito provavelmente existe; a descrição dele é que não era minha para dar. Toda menção a Act-Two saiu do documento, e o que ficou no lugar é o que a página de pesquisa da própria Runway publica sobre o Gen-4, mais dois artigos de controle por trajetória que eu abri.

**Terceiro, um erro de método que não corrigi.** Todas as minhas buscas foram formuladas para encontrar evidência de que o controle avançou. Nenhuma foi formulada para encontrar evidência do contrário — algo como "por que estúdios abandonaram vídeo generativo" ou "controllable video generation failure production". A ausência de contraevidência neste documento é resultado de não ter procurado, e não de não existir. Registro isso como limitação conhecida, não como achado.

**Quarto, e o pior de todos, porque é o erro que gera os outros três.** Eu inventei um terceiro estado para a fonte que não abre: nem lida, nem removida, mas *citada com a ressalva de não verificada*. Escrevi quatro marcadores de "não verificado" no corpo do texto, cada um ao lado de um link, e achei que isso era rigor — é o contrário. A ressalva preserva a aparência de densidade de fontes, transfere o ônus para o leitor e não custa nada a quem escreve, enquanto verificar custa às vezes a afirmação inteira. A própria skill do aluno tem, na Etapa 1, a instrução de "marcar explicitamente como não verificado" — e foi obedecendo a ela ao pé da letra que produzi o problema. Na revisão, as quatro alegações foram tratadas uma a uma: as do ComfyUI e da indenização do Firefly **saíram**; as do controle em produto e do treino do Firefly foram **reancoradas** em primários efetivamente abertos [F11][F14][F15]; a do calendário do PL 2338 **saiu**, restando só o que a ficha do Senado sustenta. Um quinto caso: o preprint de Würzburg sobre o dividendo do mentiroso retornou PDF binário ilegível, e em vez de citá-lo com ressalva, reancorei o ponto em fonte que abri [F16] — o que, aliás, o melhorou, porque trouxe casos judiciais nomeados que o preprint não teria.

## 9. Três cenários para 2031

### Provável

Em 2031 o controle fino virou o normal e ninguém mais chama isso de IA generativa — chama de produção. O grafo substituiu a timeline como documento central em boa parte dos estúdios pequenos, e as ferramentas de direção (região, keyframe, trajetória, referência de performance) viraram itens de interface tão banais quanto uma curva de bezier. A economia do setor se reorganizou como e1 previu, mas mais devagar e de forma desigual: publicidade e conteúdo corporativo mudaram quase por completo, cinema e séries de alto orçamento mudaram nas etapas de pré-visualização e finalização e quase nada no resto. A escada de entrada da profissão quebrou de fato, e as escolas ainda não resolveram o problema — formam diretores que nunca executaram. Do lado da proveniência, a obrigação europeia existe, é cumprida no papel por quem gera e continua quebrando na cadeia de distribuição; a maior parte dos vídeos que circula não tem credencial legível, e a ausência de credencial não significa nada, porque é o caso comum. O dividendo do mentiroso engordou. O vídeo interativo existe, é nicho, e mora em publicidade e educação, não em narrativa.

### Desejável

Em 2031 a direção de mídia sintética virou uma competência ensinável e ensinada, com um vocabulário compartilhado entre ferramentas — porque, em algum momento entre 2027 e 2029, um consórcio com participação das comunidades abertas fixou um formato de intercâmbio de intenção de direção, e nenhuma empresa isolada capturou a posição de plataforma. As escolas resolveram o problema da escada de entrada invertendo a ordem: fundamentos de movimento e desenho viraram pré-requisito explícito para operar geração, e não o contrário, o que preservou a formação do repertório que a direção pressupõe. A cadeia de proveniência funciona ponta a ponta porque as plataformas foram obrigadas a preservar manifesto no transcode e porque a assinatura deixou de depender exclusivamente do dispositivo — há atestação em múltiplos pontos, e a ausência de credencial passou a ser informativa em vez de comum. Para chegar aqui foi preciso: um formato aberto de direção acordado cedo; obrigação regulatória de preservação de manifesto e não apenas de marcação na origem; proteção explícita de anonimato de fonte jornalística dentro do desenho da proveniência; e acordos sindicais que financiaram a formação da geração que perdeu os postos de execução. Nenhuma dessas quatro coisas acontece sozinha.

### Indesejável

Em 2031 a credencial de proveniência existe, é obrigatória, e é falsificável. A falsificação em escala foi demonstrada em 2028 e nunca foi plenamente corrigida, porque o elo fraco era o dispositivo e trocar o parque de dispositivos leva mais de uma década. O resultado é pior do que não ter nada: o público aprendeu a tratar "tem credencial" como sinônimo de verdadeiro, e material forjado com credencial válida circula com autoridade emprestada, enquanto registro autêntico feito em aparelho antigo é descartado. Tribunais estratificaram a prova por poder aquisitivo. Paralelamente, a reorganização produtiva aconteceu na versão ruim: a execução foi eliminada sem que a direção fosse formada, os postos de entrada sumiram, e a capacidade técnica do campo encolheu por falta de reposição geracional — há menos gente capaz de julgar se um movimento está certo do que havia em 2026, num campo que produz mil vezes mais movimento. **O sinal precoce deste cenário é específico e já observável: a primeira revogação em massa de certificados por vulnerabilidade de dispositivo depois da obrigação estar valendo.** A Nikon revogou em setembro de 2025, antes da obrigação, e o episódio passou sem consequência. Se isso se repetir *depois* de agosto de 2026 e também passar sem consequência regulatória, este é o cenário em curso.

## 10. O experimento

**O que é.** Um mesmo plano de oito segundos, com briefing fixo e critério de aprovação fixo, produzido três vezes, por três regimes de controle diferentes:

1. **Regime prompt** — geração texto-para-vídeo, sem controle espacial, só reescrita de prompt e nova tiragem.
2. **Regime quadro-chave propagado** — um quadro pintado ou composto à mão e propagado pela sequência (EbSynth, ou equivalente com controle de região e keyframe intermediário).
3. **Regime máquina de estados** — a mesma cena montada no Rive como estados e transições, reagindo a uma entrada.

Mede-se, em cada regime: número de iterações até aprovação por um avaliador que não sabe qual regime produziu o quê; tempo de relógio; e — o dado mais importante — o **registro do que cada regime tornou impossível**. Não o que ficou pior: o que não pôde sequer ser tentado.

**Que pergunta sobre o futuro ele responde.** A premissa central de D1 é que o controle endereçável muda a unidade de trabalho, e que a curva de iterações até aprovação é qualitativamente diferente entre dirigir e sortear. Isso é testável em uma tarde e em escala de sala. Se o regime 1 convergir em número de iterações comparável ao regime 2, a premissa econômica de e1 está errada, e boa parte da subárvore de D1 cai.

**Que tecnologia emergente usa, e por que não dá com tecnologia madura.** O regime 2 depende de propagação por síntese guiada por fluxo óptico e de quadro-chave intermediário em geração — coisas que não existiam como parâmetro em 2021. O regime 3 depende de runtime de máquina de estados portátil. Com tecnologia madura — edição em NLE e motion graphics à mão — o experimento não tem regime 1 nem regime 3, e vira uma comparação entre dois modos de animar, que já foi feita mil vezes.

**O que a turma faria testando em sala.** Cada grupo assume um regime e recebe o mesmo briefing e o mesmo critério de aprovação, escrito antes e não negociável. Uma pessoa por grupo fica encarregada apenas de anotar cada iteração e o motivo da rejeição — esse log é o dado, não o vídeo. No fim, os três vídeos são exibidos sem identificação de regime e a turma vota em qual aprovaria; depois compara-se o voto com o custo. A discussão interessante não é qual ganhou: é ler em voz alta a lista de impossibilidades de cada regime.

**O que mudaria a opinião do autor.** Duas coisas, declaradas antes do teste. Primeira: se o regime 1 convergir em número de iterações equivalente ao regime 2, o argumento de que "o controle é o que torna isso profissional" está errado, e o que torna profissional é só qualidade bruta — o que faria deste um tema de melhoria contínua, não de disrupção. Segunda: se o regime 3 produzir algo que a turma prefere sem que ninguém perceba que é interativo, então a fronteira entre vídeo e interface já caiu, e o prazo de e6 (2029) está tarde demais.

## 11. Fontes

Dezoito URLs abertas e lidas de fato nesta sessão. **Nenhuma entrada desta lista é de fonte não verificada**, e nenhuma alegação do corpo do documento se apoia em link que eu não tenha aberto: as que se apoiavam foram reancoradas ou removidas na revisão (ver seção 8). Duas tentativas falharam e estão registradas ao final, sem número — uma tentativa falha não vira fonte com ressalva.

1. **[F1]** `https://arxiv.org/abs/2404.02905` — "Visual Autoregressive Modeling: Scalable Image Generation via Next-Scale Prediction". Sustenta toda a D2: next-scale prediction, FID 18,65→1,73, IS 80,4→350,2, ~20× inferência, leis de potência com correlação ≈ −0,998, generalização zero-shot para inpainting/outpainting/edição. Confiabilidade alta: artigo primário, Best Paper do NeurIPS 2024.
2. **[F2]** `https://spec.c2pa.org/specifications/specifications/2.2/index.html` — Especificação C2PA 2.2. Sustenta a definição do padrão e a existência de orientação específica para IA/ML. Confiabilidade alta como primária, mas o conteúdo obtido é fino: o índice não detalha estrutura de manifesto, e não abri as subseções.
3. **[F3]** `https://rive.app/docs/editor/state-machine/state-machine` — Máquina de estados do Rive: estados como timelines, transições como lógica, grafo visual. Confiabilidade alta (documentação do fabricante). Ressalva: a página não explica o mecanismo de acionamento por evento — isso inferi dos exemplos "Hovered" e "Clicked".
4. **[F4]** `https://rive.app/docs/runtimes/getting-started` — Runtimes: Web/JS, React, React Native, iOS, Android, Flutter, Unity, Unreal, C++ e C#, licença MIT. Sustenta a portabilidade de e7. Confiabilidade alta.
5. **[F5]** `https://en.wikipedia.org/wiki/Content_Credentials` — Cronologia de adoção do C2PA (Leica out/2023, Sony mar/2024, Canon jul/2025, Nikon ago/2025 com revogação em setembro; Firefly, DALL·E, Gemini, LinkedIn, TikTok, YouTube, Busca), vulnerabilidades (Z6III; root no Android em ago/2026), remoção de manifesto pela BBC Verify em mar/2024, ausência de conformidade formal de câmeras até meados de 2026, e a crítica proveniência≠veracidade. Confiabilidade média-alta: densamente referenciada, mas terciária — cada data mereceria conferência no original antes de virar afirmação de aula.
6. **[F6]** `https://artificialintelligenceact.eu/article/50/` — Artigo 50 do AI Act: marcação legível por máquina de conteúdo sintético, divulgação de deep fake com regime aliviado para obra artística/satírica/ficcional, vigência em 02/08/2026 por força do Artigo 113. Sustenta toda a D4. Confiabilidade alta.
7. **[F7]** `https://www25.senado.leg.br/web/atividade/materias/-/materia/157233` — Ficha do PL 2338/2023: ementa e remessa à Câmara em 17/03/2025. Confiabilidade alta (oficial). Ressalva determinante: **não informa o estado da tramitação na Câmara**, e é por isso que a nota sobre o Brasil não tem calendário.
8. **[F8]** `https://ebsynth.com/` — Síntese de textura guiada por fluxo óptico, propagação a partir de quadro editado, limites declarados (artefato por desalinhamento de forma, 720p no plano gratuito, offline a US$ 200/mês). Confiabilidade alta para o que a ferramenta faz, com a ressalva de ser material do fabricante.
9. **[F9]** `https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/` — Genie 3: 24 fps, 720p, memória de cerca de um minuto, promptable world events, e cinco limitações declaradas pela própria DeepMind. Sustenta D3. Confiabilidade média-alta: comunicação do fabricante; as limitações declaradas, por serem desfavoráveis a quem as publica, são o trecho mais confiável.
10. **[F10]** `https://en.wikipedia.org/wiki/Genie_(world_model)` — Genie 1 (mar/2024, 2D, 1 fps), Genie 2 (dez/2024, 3D, 360p, 10–20 s), Genie 3 (ago/2025), Project Genie em 29/01/2026 para assinantes Google AI Ultra com sessões de 60 s. Confiabilidade média: terciária.
11. **[F11]** `https://runway.com/research/introducing-runway-gen-4` — Gen-4: consistência de personagem a partir de imagem de referência única, personagem sob qualquer iluminação/local/tratamento, objeto em qualquer posição, "qualquer ângulo de qualquer cena" por referência mais descrição de composição, sem fine-tuning. Sustenta a camada de produto de D1. **Confiabilidade baixa-média: é página de lançamento do próprio fornecedor, sem medição independente.** É a fraqueza declarada de D1.
12. **[F12]** `https://arxiv.org/abs/2503.16421` — MagicMotion: máscaras, caixas e caixas esparsas como condições de trajetória; declara os problemas correntes do campo (aderência imprecisa, consistência ruim de objeto, qualidade comprometida em movimento complexo e multi-objeto); introduz MagicData e MagicBench. Confiabilidade alta como primária; ressalva usual de artigo que propõe o próprio método e o próprio benchmark.
13. **[F13]** `https://arxiv.org/abs/2505.22944` — ATI (Any Trajectory Instruction): keypoints e caminhos de movimento injetados no espaço latente de modelo imagem-para-vídeo, unificando deformação local, movimento de objeto e dinâmica de câmera. Confiabilidade alta como primária, mesma ressalva.
14. **[F14]** `https://github.com/comfyanonymous/ComfyUI` — README: grafo de nós visuais, subgrafos reutilizáveis, workflows em JSON recuperáveis integralmente a partir da mídia gerada (inclusive seeds), suporte a SD/SDXL/Flux/Qwen/Hunyuan/Wan/LTX-Video/CogVideoX/Mochi. Confiabilidade alta para arquitetura e recursos; **nenhuma alegação de adoção foi extraída daqui, porque o README não é fonte de número de usuários**.
15. **[F15]** `https://en.wikipedia.org/wiki/Adobe_Firefly` — Treino em Creative Commons, Wikimedia Commons, Flickr Commons, ~300 milhões de itens do Adobe Stock e domínio público; alegação "commercially safe"; beta público em mar/2023; reportagem posterior expondo treino também em imagens do Midjourney e de concorrentes. Confiabilidade média: terciária. **Não sustenta nada sobre indenização de PI, que a página não trata** — e por isso o documento não afirma nada a respeito.
16. **[F16]** `https://en.wikipedia.org/wiki/Liar's_dividend` — Origem do termo (Bobby Chesney e Danielle Citron) e casos documentados: Eslováquia 2023 (áudio de Michal Šimečka; pesquisa YouGov com 85% "muito preocupados"), defesa da Tesla sobre declarações de Musk, defesa de Guy Reffitt no caso do 6 de janeiro, e a cobertura do NYT sobre vídeos gerados no conflito Israel-Irã em 2026, com material autêntico de Netanyahu tomado por falso. Confiabilidade média: terciária, mas os casos são nomeados e rastreáveis.
17. **[F17]** `https://www.cartoonbrew.com/tech/union-study-says-generative-ai-will-disrupt-204000-jobs-three-years-237495.html` — Estudo "Future Unscripted" (CVL Economics, encomendado por The Animation Guild IATSE Local 839, Concept Art Association, Human Artistry Campaign e National Cartoonists Society Foundation), campo entre 17/11 e 22/12/2023, 300 líderes: 204.000 empregos afetados em três anos, 118.500 em cinema/TV/animação (21,4% de 555.000), 52.400 em games, 62.000 na Califórnia. **Confiabilidade baixa-média, com conflito de interesse declarado:** encomendado por partes interessadas no resultado, amostra de percepção de executivos e não medição de emprego, horizonte terminando agora. Usado como contexto na seção 3; **nenhum efeito da roda ancorado nele**.
18. **[F18]** `https://www.thomsonreuters.com/en-us/posts/ai-in-courts/deepfakes-evidence-authentication/` — Padrão corrente de admissibilidade ("mais provável que não autêntico") e relato de magistrados sobre o dividendo do mentiroso. Confiabilidade média: material editorial de fornecedor jurídico. **Contradiz o que os resultados de busca lhe atribuíam:** a página não menciona a proposta de Rule 901(c) nem calendário de aprovação. Registro a divergência em vez de resolvê-la — e é por isso que nenhuma afirmação sobre Rule 901(c) entrou no documento, embora a busca a oferecesse pronta.

**Duas tentativas falhas, sem número e sem uso:**
- `https://help.runwayml.com/hc/en-us/articles/37327109429011-Creating-with-Gen-4-Video` — HTTP 403. Consequência: toda menção a Act-Two e a controles específicos de produto (pincel de movimento, quadro-chave intermediário) saiu do documento.
- `https://www.mcm.uni-wuerzburg.de/fileadmin/06110000/2026/Grohmann__Halle___Appel_2026__Preprint_.pdf` — PDF binário ilegível pela ferramenta. Consequência: a alegação de evidência experimental sobre o dividendo do mentiroso foi reancorada em [F16], com casos nomeados, em vez de citada com ressalva.


## 12. Anexo — o levantamento bruto

### A. Etapa 0 — a entrevista, e o fato de ela não ter acontecido

A skill exige entrevista bloqueante e proíbe assumir em silêncio. Nesta execução **não havia usuário**. As respostas abaixo foram fornecidas de antemão pelo operador da rodada e usadas verbatim; registro-as aqui porque o frontmatter deriva delas e porque uma delas não pôde ser respondida por ninguém.

- Tema: "Mídia sintética controlável: vídeo e imagem" (tema 12 de 19; família "Percepção e mídia sintética").
- Horizonte: 2031. Público: quem projeta mídia e interação. Recorte: global, com nota sobre o Brasil.
- Descartado de início: o que já é comum em produto de massa (régua da disciplina). Nenhuma outra exclusão.
- Disrupção suspeita: nenhuma — descobrir. Viés: neutro. Ideias óbvias a excluir: as que servem para qualquer tema.
- O que faria mudar de ideia: evidência de que a adoção já passou da maioria inicial (Rogers), ou de que a tecnologia não rompe nada e só melhora o existente.
- Profundidade: três ordens. Modo: a partir de uma inovação/tema, não de um setor.
- Zona de interesse: "Percepção e mídia sintética". Login: jgpt.

**A pergunta que ficou sem resposta.** A Etapa 4 da skill manda perguntar ao usuário — e proíbe inventar por ele — se ele escolheu o tema por gostar dele e se isso infla o otimismo. Sem usuário, a pergunta não foi feita nem respondida. A seção 7 declara isso e substitui pelo viés que eu mesmo posso auditar. Esta é a limitação metodológica mais séria do documento e não deve ser lida como cumprimento da etapa.

**Defaults assumidos por mim, não pelo operador:**
- `publico_ok: false`, por não haver autorização explícita.
- `confianca: media` para o mapa como um todo: D1 e D4 são bem ancoradas, D2 depende de um artigo sobre imagem estática, D3 é a mais frágil.
- Prazo de e9 em 2027 = vigência do Artigo 50 (02/08/2026) mais intervalo de primeira aplicação prática. Suposição, não medição.
- Tratamento da régua "nada que já seja comum em produto de massa": apliquei ao *uso*, não à *ferramenta*. Geração por prompt é comum, então saiu; o EbSynth é antigo mas o uso profissional de propagação dirigida não é massa, então ficou. Esta interpretação é discutível e outro executor poderia ter cortado o EbSynth.

### B. Etapa 2 — o teste aplicado a cada candidata, inclusive às rejeitadas

Teste: "O que isso rompe, e por que agora e não há cinco anos?" Sem limiar concreto, não entra como raiz.

| Candidata | Limiar concreto? | Veredito |
|---|---|---|
| Controle espacial/temporal endereçável (região, keyframe intermediário, câmera, performance) | Sim — virou argumento de API com preço por segundo | **Raiz (D1)** |
| Autorregressão visual por escala (VAR) | Sim — FID 1,73, ~20× inferência, leis de potência, NeurIPS 2024 | **Raiz (D2)** |
| Geração em tempo real (Genie 3, ~41 ms/quadro) + animação reativa portátil (Rive) | Sim — orçamento de um quadro cruzado; disponibilidade pública em 29/01/2026 | **Raiz (D3)** |
| Proveniência criptográfica obrigatória (C2PA + AI Act Art. 50) | Sim — 02/08/2026, data legal | **Raiz (D4)** |
| Geração de imagem por prompt simples | Não — só ficou mais barata e melhor dentro do mesmo jogo | Maduro, rejeitado |
| Upscaling / restauração (Magnific) | Não — melhora o existente | Maduro, rejeitado |
| Edição de vídeo em NLE, motion graphics à mão | Não | Maduro, rejeitado |
| Motion design procedural sem IA (Cavalry, Graphite, Pixel Composer) | Parcial — mas é o tema 14 | Fora de escopo; volta como camada de memória em e8.1.1 |
| Controle unificado por trajetória de keypoints (ATI, MagicMotion) | Sim em pesquisa, com benchmark próprio; não em produto documentado | Emergente — radar, seção 6 |
| Captura de performance de corpo inteiro | Fonte primária inacessível (403); sem primário, sem candidata | Removida do documento |
| Detecção automática de conteúdo sintético | Sim, mas o limiar aponta para baixo: o dividendo do mentiroso torna a detecção estruturalmente perdedora | Emergente e rejeitada; entra como contexto de e10 |
| Geração 3D / gaussian splatting | Sim, mas é o tema 10 | Fora de escopo |
| Modelos de mundo como substrato de agente | Sim, mas são os temas 7 e 9 | Fora de escopo; fronteira declarada em D3 |
| Grafo de nós como formato de autoria (ComfyUI) | Não isoladamente — é *forma* de D1, não limiar próprio | Absorvido por D1 e por e3.1 |
| Vídeo programático em código (Remotion, satori) | Não — determinístico, é software, não mídia sintética | Rejeitado |
| Acervo licenciado como diferencial (Firefly) | Não isoladamente — é consequência de D4 | Absorvido por D4, vira e11 |

### C. Efeitos cortados na Etapa 4

Três efeitos foram gerados e removidos, com o motivo:

1. *"A publicidade audiovisual desaparece como categoria e é substituída por geração personalizada por espectador em tempo de exibição."* — **Cortado.** Deriva de D1 e D3 combinados, mas o mecanismo causal ligando "controle barato" a "uma peça por espectador" salta uma etapa inteira (a economia da compra de mídia), e o efeito exigiria um quarto nível para ser rastreável. Não cabe em três ordens e não é sinal fraco — é outro mapa.
2. *"Festivais criam categoria separada para obra gerada, e depois a extinguem por indistinguibilidade."* — **Cortado** como efeito; **promovido** a wildcard 1 em versão mais nítida. Como efeito era especulação institucional sem mecanismo; como wildcard, funciona.
3. *"Modelos de linguagem passam a dirigir a geração visual diretamente, e o prompt volta a ser a interface, agora escrito por máquina."* — **Cortado.** É a negação de D1 disfarçada de desdobramento dela, e eu não conseguia decidir se era efeito ou contra-argumento. Registro a hesitação: se o agente que dirige for outra máquina, o argumento inteiro sobre "direção como competência humana ensinável" muda de sentido, e o mapa não trata disso. É a maior lacuna reconhecida do documento, e está relacionada ao tema 1 da disciplina.

### D. Buscas realizadas, incluindo as que não renderam

Buscas executadas (WebSearch): "controllable video generation 2026 keyframe control Runway Kling Veo"; "Visual Autoregressive Modeling VAR NeurIPS 2024 best paper scale prediction"; "content credentials C2PA adoption 2026 cameras platforms provenance news"; "ComfyUI adoption 2026 node graph workflow professional studios VFX pipeline"; "Animation Guild AI contract 2024 2026 animation jobs displacement generative video studios"; "Brasil PL 2338 inteligência artificial marco legal 2026 rotulagem conteúdo sintético deepfake eleitoral TSE"; "deepfake video evidence court admissibility rule 901 AI-generated 2026 judiciary"; "Runway Gen-4 motion brush camera control keyframes docs 2026 Act-Two"; "real-time interactive generative video world model playable Genie 3 2026 latency frames per second"; "liar's dividend deepfake 2026 research evidence denial authentic video"; "Adobe Firefly commercially safe licensed training data indemnification 2026 criticism".

Buscas acrescentadas na revisão de verificação: "arxiv survey controllable video generation 2025 2026 control signals camera motion trajectory taxonomy".

Páginas efetivamente abertas: as dezoito da seção 11, mais duas falhas — a ajuda da Runway (HTTP 403) e o preprint de Würzburg (PDF binário ilegível). Uma terceira, a especificação C2PA 2.2, redirecionou de `c2pa.org` para `spec.c2pa.org` e foi reaberta no destino. Seis das dezoito (Runway Gen-4, MagicMotion, ATI, README do ComfyUI, Adobe Firefly e liar's dividend) foram abertas **depois** da primeira montagem do documento, na revisão que eliminou os marcadores de "não verificado".

**Buscas que eu deveria ter feito e não fiz** (registrado como lacuna, não como achado): contraevidência de adoção ("estúdios abandonam vídeo generativo", "controllable video generation production failure"); dados de emprego medidos e não pesquisados por percepção; fonte primária sobre ComfyUI; changelog da Runway por caminho alternativo; qualquer fonte brasileira sobre produção audiovisual com IA além do texto legislativo; e o estado da tramitação do PL 2338 na Câmara.

### E. A revisão de verificação, e por que ela está no anexo

A primeira versão deste documento foi entregue com quatro alegações marcadas no corpo como "não
verificadas" e mantidas no texto: os números de adoção do ComfyUI, a descrição do Act-Two, a
indenização de PI do Firefly e o calendário de votação do PL 2338. A skill do aluno **manda fazer
exatamente isso** — a Etapa 1 diz, literalmente, para marcar como "não verificado — usuário precisa
confirmar antes de entregar" em vez de apresentar como checado.

Esse estado foi eliminado na revisão. Cada uma das quatro foi reancorada em primário aberto ou
removida, e as duas tentativas falhas saíram da lista numerada para uma nota sem número. O
resultado é um documento com mais fontes (18 contra 12) e **menos** afirmações fortes: o mapa
perdeu o pincel de movimento, o quadro-chave intermediário, a transferência de performance, os
números de adoção do ComfyUI, a corroboração por anúncio de vaga para e2 e o calendário brasileiro;
e a confiança de e1 caiu de `alta` para `media`.

Registro o conflito por inteiro, porque ele é uma informação sobre a skill avaliada e não um
defeito da rodada: **a Etapa 1 da `futurizacao-jgpt` autoriza um estado que a checagem da Etapa 5
da mesma skill proíbe** ("nenhum link na seção 11 é de fonte não verificada de fato"). As duas
instruções convivem no mesmo arquivo e apontam em direções opostas, e quem executa a skill decide
qual obedecer — o que, na prática, significa que a checagem final não checa nada, porque é o mesmo
agente que define o que conta como verificado. É o achado mais útil desta rodada sobre a skill em
si.

### F. Contagem para conferência

Disrupções-raiz: 4 (D1, D2, D3, D4). Efeitos de 1ª ordem: 11 (e1–e11). Efeitos de 2ª ordem: 21. Efeitos de 3ª ordem: 21. Profundidade: exatamente 3 níveis em todos os ramos. Todos os efeitos têm `sinal`, `prazo` e `confianca` preenchidos, e todos estão escritos como frase afirmativa.
