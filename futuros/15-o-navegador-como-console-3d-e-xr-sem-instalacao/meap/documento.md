---
tema: "O navegador como console: 3D e XR sem instalação"
slug: o-navegador-como-console-3d-e-xr-sem-instalacao
autor_login: meap
zona_de_interesse: Criação e plataforma
data: 2026-09-11
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global, com nota sobre o Brasil
disrupcoes_raiz: 3
efeitos_ordem_1: 8
efeitos_ordem_2: 11
efeitos_ordem_3: 10
tecnologias_citadas: [WebGPU, WGSL, WebXR Device API, WebNN, WebGL2, three.js WebGPURenderer, PlayCanvas, SuperSplat, 3D Gaussian Splatting, Transformers.js, WebLLM, LlamaWeb, llama.cpp, PWA, glTF, model-viewer, Meta Quest Browser, Safari visionOS, Chrome Android, Vulkan]
fontes: 15
confianca: media
experimento: "A mesma cena, três portas — uma página única que renderiza a mesma cena em WebGPU, em WebGL2 e (quando houver) em sessão WebXR, instrumentada para registrar adaptador de GPU, quadros por segundo, tempo até o primeiro quadro e bytes baixados; distribuída à turma só por link, para medir no parque real de aparelhos quantos de fato receberam o 3D."
skill_usada: futurization-meap
publico_ok: false
---

## 1. Resumo

O navegador ganhou acesso direto à GPU. WebGPU está em Chrome desde a versão 113, em Safari 26 e em Firefox 141 no Windows, e o caniuse mede 87,35% dos usuários com algum suporte — o que muda não é a possibilidade de desenhar em 3D na web, que existe desde o WebGL, mas o fato de que computação de propósito geral na placa de vídeo deixou de exigir um binário instalado e aprovado por uma loja. No mesmo movimento, o WebXR virou o caminho de entrada para o óculos em três plataformas (Quest, Chrome no Android, Safari no visionOS) e o navegador virou runtime de inferência: há trabalho acadêmico revisando modelos de linguagem rodando sobre WebGPU com desempenho entre um terço e metade do nativo. Este mapa argumenta que a consequência não é o fim da loja de aplicativos — é o deslocamento do que a plataforma cobra, de distribuição para pagamento e identidade, e o deslocamento da desigualdade de acesso, de "ter internet" para "ter GPU". No Brasil isso é literal: 86% dos domicílios têm internet e 32% têm computador. O maior risco deste mapa é confundir capacidade instalada no navegador com adoção por quem produz — são coisas diferentes, e a segunda ainda não aconteceu.

## 2. O tema

O objeto aqui é a **web como plataforma de execução 3D e XR** — não a captura de cenas 3D (isso é outro recorte), não a IA local no aparelho em geral (idem, exceto pela parte que passa pela mesma porta do navegador). A pergunta é o que muda quando uma experiência gráfica pesada deixa de ser um aplicativo com instalador, assinatura, revisão de loja e ícone na tela, e passa a ser um endereço.

Para quem projeta mídia e interação, isso toca três decisões de projeto que hoje são tomadas antes de qualquer esboço: **onde a coisa vai morar** (loja, site, plataforma de terceiro), **o que se pode assumir do hardware de quem recebe** e **quem decide se a obra pode existir**. As três estavam estáveis havia uma década: 3D leve e ilustrativo na web via WebGL; 3D pesado e imersivo em aplicativo nativo, dentro do catálogo de alguém. O que está em disputa é exatamente essa fronteira.

Merece mapa de futuro porque o gatilho técnico já passou — não é promessa de conferência, é API implementada — e porque o efeito econômico correspondente (a distribuição, a taxa, a curadoria) está simultaneamente sob pressão regulatória e judicial, o que cria um caso raro: duas causas independentes empurrando na mesma direção. Separar as duas é metade do trabalho deste documento.

## 3. Onde isso está hoje

**A GPU.** WebGPU está ✅ em Chrome/Chromium 113 em macOS, Windows e ChromeOS; em Safari 26 em macOS, iOS/iPadOS e visionOS, habilitado por padrão; e em Firefox 141 no Windows, 145 no macOS ARM64. O quadro é desigual fora disso: no Linux, Chrome só a partir da 144 para Intel Gen12+ e 147 para NVIDIA no Wayland; no Windows ARM64 ainda atrás de flag; no Firefox para Linux, macOS Intel e Android, apenas Nightly, com a Mozilla projetando Linux para 2026. No Android, a exigência de fato é Vulkan, o que corta aparelhos antigos. O caniuse mede **87,35%** de cobertura global somada (85,72% pleno + 1,63% parcial) e, curiosamente, ainda contabiliza o Firefox como sem suporte por padrão — uma divergência entre as duas melhores fontes públicas que vale registrar.

**Os motores já viraram a chave.** A documentação do three.js descreve o `WebGPURenderer` como o novo equivalente do `WebGLRenderer`: *"By default, the renderer tries to use a WebGPU backend if the browser supports WebGPU. If not, `WebGPURenderer` falls backs to a WebGL 2 backend."* A inversão é o ponto — WebGPU virou o caminho e WebGL2 virou a degradação, não o contrário. Do lado da PlayCanvas, o SuperSplat ganhou em 03/06/2026 um renderizador de splats baseado em *compute shader*: 1,1× a 5,7× de ganho num M4 Max entre volumes baixos e 35 milhões de gaussianas, 2–2,1× num iPhone 13 Pro Max, com queda automática para WebGL2 em quem não tem.

**O óculos.** O WebXR Device API está em Candidate Recommendation Draft de 09/06/2026, pelo Immersive Web Working Group, e ainda pede "no mínimo dois agentes de usuário independentes e interoperáveis" para avançar. O navegador do Quest recebeu WebGPU e projeção de profundidade experimentais na v146.0 (21/04/2026), camadas de *space-warp* com WebGPU na v149.1 (27/07/2026) e foveação experimental na v150.1 (28/08/2026). O Safari do visionOS liga WebXR por padrão. E o Safari de macOS, iOS e iPadOS não implementa WebXR. O WebXR foi **proposto** como área de foco do Interop 2026 (issue #1021) e **não entrou** na lista final de 20 áreas anunciada em 12/02/2026 — não há, portanto, compromisso público de paridade entre navegadores para este ano.

**O modelo.** O artigo *"Llamas on the Web: Memory-Efficient, Performance-Portable, and Multi-Precision LLM Inference with WebGPU"* (UC Santa Cruz e Microsoft Research, 20/05/2026) mede um backend WebGPU para o llama.cpp: 29–33% menos memória que WebLLM e Transformers.js, 23 formatos de peso contra 6–7 dos concorrentes, e 45–69% mais rápido que os demais frameworks web na decodificação. E mede também o teto: CUDA e Metal nativos seguem à frente em até 10× no *prefill* e 2,5× na decodificação; faltam bf16 e inteiros menores; as checagens de segurança do WebGPU custam 14% a 23%; operações de matriz em *subgroup* não existem em navegador estável. O WebNN, que miraria NPU diretamente, está em Candidate Recommendation Draft de 10/09/2026 — com MLTensor e uma terceira leva de operadores para transformers, mas ainda sem duas implementações interoperáveis.

**A porta de saída.** Do lado econômico, a pressão não vem da web. Na União Europeia, os termos unificados da Apple valendo a partir de 01/10/2026 trocam a taxa por instalação por uma **Core Technology Commission de 5%** sobre transações digitais, com distribuição via marketplaces alternativos ou pelo próprio site do desenvolvedor — sujeita a critérios de elegibilidade financeira e a revisão de notarização. Nos EUA, a disputa Epic × Apple abriu o *link-out* para pagamento externo e a fixação da taxa correspondente segue em tribunal. Nada disso é consequência do WebGPU. É uma segunda causa, e ela chegou antes.

**O que já existe sem loja há anos.** Portais de jogo instantâneo. A própria Poki declara "100 million monthly players", "1B+ gameplays per month" e "500+ game developers". Não é futuro: é o precedente de que distribuição por link funciona em escala — em 2D, com jogo curto e financiado por anúncio.

## 4. As disrupções-raiz

### 4.1. A GPU deixa de ser privilégio do binário instalado

**O que rompe.** A premissa de que computação gráfica e computação paralela pesada exigem um programa instalado, assinado e autorizado. Rompe a cadeia "motor proprietário → build por plataforma → loja → revisão → ícone", substituindo-a por "endereço". Rompe também o pressuposto de segurança que sustentava essa cadeia: quem dá acesso à GPU ao código de qualquer página assume um vetor de identificação de hardware que o modelo de privacidade da web não tinha.

**Por que agora.** Porque a implementação terminou, não porque a promessa melhorou: Safari 26 fechou o último grande navegador; o three.js inverteu a ordem de renderizador e fallback; o SuperSplat mostra ganho medido de até 5,7× em carga real de produção, não em demonstração sintética.

**O que ainda falta.** Falta o Linux e o Android saírem da fragmentação por driver — no Android a barreira efetiva é Vulkan, no Linux o suporte é por família de GPU. Faltam recursos que o nativo tem e o WebGPU não (subgrupos de matriz em versão estável, tipos de precisão menores). E falta, sobretudo, uma camada de descoberta: a loja nunca foi só cobrança, era catálogo, e a web ainda não tem equivalente para conteúdo imersivo.

### 4.2. O óculos vira um periférico do navegador, não o contrário

**O que rompe.** A premissa de que experiência imersiva é um aplicativo dentro do catálogo de quem fabrica o óculos — e, com ela, o poder de decidir o que pode ser visto. Um link não pede aprovação.

**Por que agora.** Porque as três plataformas que importam já abriram a porta por padrão: Quest (com WebGPU, profundidade, *space-warp* e foveação chegando ao navegador entre abril e agosto de 2026), Chrome no Android, e Safari no visionOS. A especificação está em Candidate Recommendation.

**O que ainda falta.** Falta paridade, e ela não está contratada: o Safari de macOS, iOS e iPadOS não implementa WebXR, o módulo de Realidade Aumentada não está ligado no visionOS, e a proposta de tornar WebXR área de foco do Interop 2026 não entrou na lista final. Falta também o óculos: sem parque instalado, a porta aberta não tem tráfego — e é aqui que o recorte brasileiro morde.

### 4.3. O navegador vira runtime de inferência: o modelo desce junto com a página

**O que rompe.** A premissa de que "usar IA" significa chamar um servidor — e a economia inteira que decorre dela: cobrança por token, telemetria do prompt, dependência de conectividade, e a impossibilidade de auditar o que o modelo fez. Rompe pela mesma porta que o 3D: WebGPU compute.

**Por que agora.** Porque deixou de ser demonstração e virou objeto de medição: o LlamaWeb reporta números de memória, formatos e desempenho comparados a nativo, e o WebNN avançou para Candidate Recommendation Draft em 10/09/2026 com operadores de transformer e compartilhamento de buffer.

**O que ainda falta.** Falta fechar uma distância medida de 2,5× a 10× para o nativo. Falta o WebNN ter uma segunda implementação interoperável. E falta resolver o problema que a web nunca teve de resolver: baixar e manter em cache gigabytes de pesos por site, com cota de armazenamento que o usuário não controla nem entende.

**Descartada na triagem.** Uma quarta candidata — "a regulação acaba com a loja" (DMA, Epic × Apple) — **não entra como disrupção-raiz deste mapa**, embora seja a causa mais forte dos efeitos econômicos descritos adiante. Motivo: ela não deriva do tema, acontece com ou sem WebGPU, e tratá-la como raiz aqui produziria exatamente o erro de causa solta descrito no `DUVIDAS.md`. Ela entra como **co-fator declarado** na seção 3 e é o principal argumento da seção 7 contra este próprio mapa.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A GPU deixa de ser privilégio do binário instalado
    efeitos:
      - id: e1
        ordem: 1
        efeito: Motores 3D passam a publicar com WebGPU como caminho padrão e WebGL2 como degradação, invertendo a ordem vigente desde 2011.
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O custo de portar cai e estúdios pequenos tratam a versão web como build principal, não como demonstração.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Cursos de mídia interativa deixam de ensinar primeiro o pipeline de engine proprietária e passam a ensinar grafo de render em WGSL, e o portfólio do aluno vira um endereço em vez de um instalador.
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Parte da carga de render e de computação migra do servidor para a máquina de quem assiste, e sai da conta do provedor.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: A métrica de produto deixa de ser custo por sessão em servidor e passa a ser consumo de bateria e suporte ao aparelho mais fraco, criando uma função de projeto dedicada a degradação graciosa.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Ferramenta de autoria pesada — editor de splat, edição de malha, linha do tempo — migra para o navegador porque o gargalo de GPU deixou de ser impeditivo.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: A licença de software criativo desloca-se de instalação com assento para endereço com conta, e o vetor econômico da cópia não autorizada perde relevância nessa faixa de ferramenta.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Laboratório de universidade e de escola pública deixa de comprar e instalar suíte 3D e passa a depender de link, e a barreira de acesso migra do software para o aparelho do estudante.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: A assinatura de hardware exposta pela GPU vira vetor estável de identificação e entra na disputa de privacidade do navegador.
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Navegadores passam a agrupar e limitar a informação de adaptador que devolvem à página, e a otimização por aparelho fica menos precisa.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Projeto de mídia imersiva passa a declarar perfil de desempenho em vez de detectar hardware, e a escolha de modo gráfico vira elemento de interface exposto ao usuário, como legenda e volume já são.
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: O óculos vira um periférico do navegador, não o contrário
    efeitos:
      - id: e4
        ordem: 1
        efeito: Distribuir experiência imersiva por link passa a conviver com a loja do fabricante em vez de substituí-la, com o link ocupando o topo do funil e a loja permanecendo como canal de pagamento.
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: A taxa de plataforma deixa de incidir sobre distribuição e passa a incidir sobre pagamento e identidade, acompanhando o que a regulação europeia já fez ao trocar taxa por instalação por comissão sobre transação.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Quem projeta experiência imersiva passa a desenhar duas entradas — sessão anônima por link e sessão autenticada com carteira —, e a primeira sessão sem conta vira o artefato de projeto mais disputado.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: A curadoria migra do catálogo do fabricante para o buscador e para o compartilhamento social, e descoberta de XR vira problema de indexação e de link.
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: O metadado de cena — o que a experiência exige de hardware, de espaço físico e de permissão — vira marcação padronizada como o Open Graph foi para a pré-visualização de link, e agências passam a contratar quem o produz.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: A ausência de WebXR no Safari de macOS, iOS e iPadOS torna-se o principal fator de fragmentação, e o alvo real de XR na web fica restrito a Quest, Android e visionOS.
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Produto imersivo brasileiro passa a ser projetado para tela plana com 3D acelerado, e não para sessão imersiva, porque o parque de óculos não existe e o parque de computadores é minoritário.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Consolida-se um gênero de 3D navegável sem óculos, herdeiro do especial jornalístico e do clipe interativo, e é ele, não o XR, que emprega designer de interação no país.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: A possibilidade de um fabricante desligar ou degradar WebXR por padrão passa a ser tratada como risco de projeto declarado, e não como hipótese.
        sinal: forte
        prazo: 2027
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Estúdios passam a exigir compromisso explícito de suporte à web antes de escolher plataforma-alvo, como já exigem compatibilidade de codec.
            sinal: medio
            prazo: 2029
            confianca: baixa

  - disrupcao: "O navegador vira runtime de inferência: o modelo desce junto com a página"
    efeitos:
      - id: e7
        ordem: 1
        efeito: Aplicação com modelo pequeno embarcado — tradução, sumarização, reconhecimento, comportamento de personagem — passa a rodar sem chamada de rede na mesma página que roda o 3D.
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O primeiro download deixa de ser o programa e passa a ser os pesos, e a métrica de entrada vira gigabyte baixado e cache preservado.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: O armazenamento local do navegador vira recurso escasso disputado entre sites, com políticas de cota explícitas, e decidir o que fica em cache passa a ser escolha editorial e não apenas técnica.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: A promessa de que nada sai do aparelho vira argumento verificável no cliente e entra em requisito de compra pública e de conformidade.
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: Órgão público e rede de ensino passam a preferir ferramenta de IA que rode no navegador por ser auditável na ponta, e a exigência de inferência local entra em edital, invertendo a presunção de nuvem obrigatória.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: O navegador passa a disputar a mesma GPU entre desenhar e inferir na mesma sessão, e o orçamento de quadro vira orçamento de quadro somado a orçamento de token.
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Surge uma camada de projeto que decide em tempo real o que roda no aparelho e o que vai ao servidor, e esse roteador de carga vira componente de produto com interface própria.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: A qualidade da experiência passa a variar de forma perceptível conforme o hardware — o personagem responde pior no celular do que no desktop —, e isso deixa de ser questão de desempenho para virar questão de equidade narrativa.
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

**O que o YAML não diz.**

Primeiro: os três ramos não têm o mesmo grau de evidência. O ramo da GPU (e1–e3) está quase todo ancorado em coisa já entregue — a inversão de renderizador no three.js e o renderizador de compute do SuperSplat são fatos de 2025 e 2026, não previsões. O ramo do óculos (e4–e6) é o mais frágil: depende de um parque de hardware que não cresceu como se esperava e de decisões de fabricante que ninguém contratou. O ramo do modelo (e7–e8) é o mais recente e o de maior variância — a distância medida para o nativo pode fechar rápido ou não fechar.

Segundo: o mapa **não** contém o efeito que o enunciado do tema sugere com mais força — "a loja de aplicativos acaba". Ele foi derivado, testado e descartado. A loja não vive de distribuição, vive de pagamento, identidade, confiança e catálogo; a web resolve o primeiro item e não resolve os outros três. O efeito que sobrevive (e4.1) é mais modesto e mais verificável: a taxa **muda de objeto**. A comissão europeia de 5% sobre transação, substituindo a taxa por instalação a partir de 01/10/2026, é a forma explícita disso, e ela foi decidida por regulação, não por API.

Terceiro: e5.1 e e8.1.1 são o mesmo fenômeno visto de dois ângulos. Quando a computação desce para o cliente, a diferença entre aparelhos deixa de ser invisível — ela aparece na obra. Isso é novo para quem projeta mídia: por vinte anos a web escondeu o hardware; agora ela o expõe.

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — a foveação experimental no navegador do Quest (v150.1, 28/08/2026).** Foveação é otimização de último quilômetro: só se investe nela quando o alvo é produção, não protótipo. Uma linha de *release note* de agosto diz mais sobre intenção de plataforma do que qualquer anúncio.

**Sinal fraco 2 — o WebNN citando o WebGPU como fonte de contexto.** A especificação prevê criar um `MLContext` a partir de um `GPUDevice`. Se isso se consolidar, o navegador passa a ter dois caminhos para o silício (GPU genérica e NPU dedicada) coordenados na mesma página, e o aparelho barato com NPU pode virar melhor alvo que o caro sem ela — invertendo a hierarquia de hardware que o mapa assume.

**Sinal fraco 3 — a divergência entre caniuse e o wiki do gpuweb sobre o Firefox.** Uma fonte diz que o Firefox não suporta WebGPU por padrão; a outra diz que suporta desde a 141 no Windows. Quando as duas melhores fontes públicas discordam sobre um fato binário, o campo ainda não estabilizou — e decisões de projeto tomadas com base em "quantos por cento têm" são mais frágeis do que parecem.

**Wildcard 1 — um fabricante de óculos desligar WebXR por padrão.** Não exige lei nem anúncio: exige uma caixa de seleção desmarcada numa atualização. O precedente de que isso é normal já existe, em outro sentido: o visionOS 1 exigia ligar a flag à mão, e o visionOS 2 passou a vir ligado. O caminho tem volta.

**Wildcard 2 — uma falha de segurança séria explorando WebGPU.** A literatura já mede reidentificação de aparelho por comportamento de escalonamento de shader e impressão digital de site por ataque de cache na GPU. Um incidente de impacto público levaria navegadores a restringir acesso — e a restrição cairia sobre criação e imersão junto com o abuso.

**Wildcard 3 — um portal de jogo instantâneo entrar em 3D pesado com sucesso comercial.** Se a Poki, ou equivalente, colocar catálogo WebGPU na frente de cem milhões de jogadores por mês, a curva de adoção deste mapa antecipa em anos — porque o gargalo hoje não é técnico, é de descoberta.

## 7. Contra o próprio mapa

**A objeção que mais me preocupa: capacidade instalada não é adoção.** 87,35% dos navegadores expõem WebGPU. Isso não diz nada sobre quantos produtos o usam como alvo primário — e esse número, que seria o relevante, eu não encontrei. Pela régua de Rogers que o recorte deste mapa adota, o que mediria a passagem da maioria inicial é a proporção de **produtores** que mudaram de alvo, não a de **navegadores** que mudaram de capacidade. Se em 2028 a resposta for "quase ninguém publica primeiro em WebGPU", este mapa estará errado no essencial, e a leitura correta terá sido a do WebGL: uma capacidade universalmente disponível e minoritariamente usada durante uma década.

**A segunda objeção: a causa econômica é outra.** Aplicando o teste de remoção de raiz do método — se o WebGPU e o WebXR não existissem, os efeitos e4 e e4.1 ainda aconteceriam? Sim. A comissão de 5% da União Europeia, os marketplaces alternativos, o *link-out* de pagamento nos EUA: nada disso depende de navegador. Este mapa corre risco real de atribuir ao navegador um deslocamento que o direito da concorrência está produzindo sozinho. Mantive os efeitos porque as duas causas convergem e se reforçam, mas a atribuição é fraca e está declarada.

**A terceira: o viés do próprio tema.** O enunciado que originou este mapa pergunta "o que acontece com a loja, com a taxa de 30%, com a curadoria". Perguntas assim já contêm a resposta esperada. Os efeitos e4, e4.1 e e4.2 nasceram confirmando essa expectativa e foram reescritos justamente por isso: na versão original, a loja perdia; na versão final, ela troca de função. Marquei os três como `review` na rodada adversarial e não os apago — mas o leitor deve saber que é o trecho do mapa mais contaminado pela pergunta que o gerou.

**A quarta: horizonte curto demais para efeitos de terceira ordem.** Tudo que está em 2030–2031 neste documento supõe cinco anos de continuidade institucional — currículo de curso, edital público, prática de agência. Nenhuma dessas coisas muda em cinco anos com a frequência que mapas de futuro sugerem. A confiança `baixa` na terceira ordem não é formalidade.

**A quinta: o recorte brasileiro pode estar sendo usado como ornamento.** Trouxe dois números fortes (86% dos domicílios com internet, 32% com computador) e deles derivei e5.1 e e2.1.1. Mas não verifiquei nada sobre parque de óculos, sobre desempenho de WebGPU no celular Android mediano vendido aqui, nem sobre custo de dados para baixar cena pesada em plano móvel. Sem isso, a afirmação "aqui o XR não vai acontecer, o 3D em página vai" é plausível e não é medida.

## 8. O que a máquina errou

Erros cometidos por mim durante a construção deste mapa, todos apanhados por verificação e todos registrados antes de o texto ser fechado.

**1. Afirmei que o WebXR é área de foco do Interop 2026.** Três resultados de busca sustentavam isso com confiança, inclusive com frases do tipo "Interop 2026 is why it matters". Ao abrir o anúncio oficial do WebKit, de 12/02/2026, a lista tem 20 áreas de foco e 4 de investigação, e nem WebXR nem WebGPU estão em nenhuma delas. A issue #1021 era uma **proposta**, e foi encerrada sem entrar. O erro inverte o sinal: eu ia registrar como evidência de convergência entre navegadores o que é, de fato, evidência de que a convergência não foi contratada.

**2. Datei o Candidate Recommendation do WebXR em 16/03/2026.** O número veio do resumo de busca. O documento em `w3.org/TR/webxr/` diz 09/06/2026. Corrigido pela fonte primária.

**3. Repeti que "WebGPU chegou a Baseline em janeiro de 2026 em todos os navegadores principais".** A frase circula e é meio-verdadeira. O wiki de status do gpuweb mostra Firefox em Nightly no Linux, macOS Intel e Android; Chrome no Linux só por família de GPU; Windows ARM64 atrás de flag. "Todos os navegadores principais" é verdade por navegador e falso por plataforma — e é justamente na plataforma que o projeto trava.

**4. Ia usar números de mercado de portais de jogo vindos de blogs.** "1 bilhão de partidas, 600 estúdios", "300 milhões de partidas, 50 milhões de jogadores", "90 milhões de visitantes" — três blogs, três números diferentes, nenhum com fonte. Abri a página da própria Poki: 100 milhões de jogadores por mês, mais de 1 bilhão de partidas, mais de 500 desenvolvedores. Usei só esses e descartei os demais. É o padrão de número redondo sem fonte descrito no `DUVIDAS.md`.

**5. A maior parte dos resultados de topo eram fazendas de conteúdo.** Sete dos primeiros resultados sobre WebGPU em 2026 eram páginas sem autor, com data de 2026 no título e conteúdo genérico. Nenhuma foi citada. Isso importa como método: para tema técnico recente, a busca devolve preferencialmente páginas otimizadas para busca, não fontes.

**6. A fonte primária brasileira não abriu.** O PDF de resultados principais da TIC Domicílios 2025, no site do Cetic.br, voltou como binário ilegível. Usei a cobertura de imprensa da coletiva de 09/12/2025, que traz os números e a metodologia (24.535 indivíduos e 27.177 domicílios, coleta de março a agosto de 2025) — mas é fonte secundária, e está marcada como tal na seção 11.

**7. Tendi a escrever "o navegador substitui X" três vezes** — substitui a loja, substitui a engine, substitui a API de nuvem. Nenhuma das três sobreviveu ao teste de precedente histórico. Tecnologia de plataforma madura convive por décadas com a sucessora; o WebGL não matou o plug-in de uma vez, o aplicativo não matou o site. Substituí as três formulações por deslocamento de função.

## 9. Três cenários para 2031

### 9.1. Provável

O link virou a porta de entrada e a loja continuou sendo o caixa. Entre 2027 e 2029 os motores completaram a virada: publicar em WebGPU deixou de ser decisão e virou padrão, com WebGL2 sobrando como degradação silenciosa, e o efeito mais visível não foi o jogo — foi a ferramenta. Editar splat, montar cena, revisar material: tudo isso saiu do desktop e virou endereço, e o mercado de licença acompanhou. O XR seguiu outro caminho. O parque de óculos cresceu devagar e o Safari nunca implementou WebXR fora do visionOS, de modo que o alvo real permaneceu restrito; quem projetava experiência espacial passou a entregar, na prática, 3D navegável em página — um gênero que ninguém batizou direito e que absorveu boa parte de quem antes se dizia designer de XR. A taxa de plataforma não caiu: mudou de objeto, de distribuição para pagamento e identidade, empurrada pela regulação europeia e pelas decisões americanas muito mais do que pelo navegador. E a desigualdade trocou de eixo. Onde antes se perguntava se a pessoa tinha internet, passou-se a perguntar o que a placa dela dava conta de rodar — no Brasil, com 32% dos domicílios tendo computador em 2025, isso significou que a experiência boa e a experiência degradada deixaram de ser a mesma obra.

### 9.2. Desejável

O navegador virou a plataforma neutra que sempre prometeu ser e, dessa vez, a neutralidade foi exercida. Duas coisas fizeram diferença. A primeira foi a interoperabilidade ter sido contratada: depois de o WebXR ficar de fora do Interop 2026, a pressão de quem produzia levou-o à lista do ano seguinte, e a paridade entre navegadores saiu do terreno da boa vontade. A segunda foi a degradação ter sido tratada como assunto de autoria, não de engenharia. Como o hardware do público passou a aparecer na obra, quem projetava passou a projetar explicitamente para o aparelho fraco — declarando perfil de desempenho em vez de tentar adivinhar hardware, expondo o modo gráfico como escolha do usuário, escrevendo a versão degradada como versão, não como sobra. A inferência local entrou em edital público porque era auditável na ponta, e escolas passaram a usar ferramenta que rodava sem mandar nada para fora. O parque brasileiro continuou desigual, mas o desenho parou de fingir que não era.

### 9.3. Indesejável

A porta ficou aberta e não havia caminho até ela. O acesso à GPU se universalizou nos navegadores sem que surgisse qualquer camada de descoberta para conteúdo imersivo, e o resultado foi que publicar por link significou publicar para ninguém: a curadoria voltou a ser feita por quem já tinha catálogo e audiência. No meio do caminho, uma exploração pública de canal lateral na GPU levou os navegadores a apertar o acesso — informação de adaptador borrada, limites reduzidos, permissão exigida —, e as restrições, aplicadas de forma indiscriminada, penalizaram a experiência legítima junto com o abuso. Um fabricante de óculos aproveitou para desmarcar WebXR por padrão numa atualização de rotina, sem anúncio, e a base instalada que sobrava caiu de uma vez. Do lado da IA, os pesos baixados por cada site encheram o armazenamento dos aparelhos e a cota virou disputa entre quem chegou primeiro. Ao fim, quem tinha máquina boa teve a obra inteira e quem não tinha recebeu uma versão pior sem ser informado disso — e a diferença, que antes era de velocidade, passou a ser de conteúdo.

## 10. O experimento

**A mesma cena, três portas.**

Uma página única, servida por endereço estático, que renderiza a mesma cena — uma malha com material e uma nuvem de splats — por três caminhos: `WebGPURenderer` com backend WebGPU, o mesmo renderizador forçado a WebGL2 (`forceWebGL: true`), e uma sessão WebXR quando o aparelho oferecer. A página instrumenta e registra, sem identificar a pessoa: cadeia de adaptador reportada pelo navegador, quadros por segundo em um percurso de câmera fixo, tempo até o primeiro quadro, bytes baixados, e se a sessão imersiva foi oferecida ou recusada. Opcionalmente, uma quarta porta: um modelo pequeno rodando via WebGPU no mesmo orçamento de quadro, para medir a disputa descrita em e8.

**O que ele testa, de verdade.** Não testa se WebGPU é rápido — isso já está medido por terceiros. Testa duas coisas que só se descobrem no parque real:

1. **A distância entre 87% e a turma.** Distribuir a página só por link, num grupo de WhatsApp, e contar quantos de fato receberam o caminho WebGPU, quantos caíram em WebGL2 e quantos não abriram. É a verificação local da objeção central da seção 7.
2. **Se a degradação é perceptível.** Mostrar as duas versões lado a lado sem dizer qual é qual e perguntar se são a mesma obra. Se a resposta for "não", e5.1 e e8.1.1 deixam de ser especulação.

**Custo e prazo.** Uma semana, uma pessoa. Só ferramenta aberta: three.js com `three/webgpu`, um arquivo de splat público, e uma planilha. Sem servidor, sem conta, sem instalação — o que também é parte do argumento.

**O que invalidaria o mapa.** Se mais de 80% da turma receber WebGPU e ninguém distinguir as duas versões lado a lado, a tese da desigualdade de GPU deste mapa está errada no recorte que mais importa para quem projeta mídia aqui.

## 11. Fontes

1. `https://github.com/gpuweb/gpuweb/wiki/Implementation-Status` — status de implementação do WebGPU por navegador **e por plataforma**; base das afirmações sobre Chrome 113, Safari 26, Firefox 141/145 e sobre a fragmentação em Linux, Android e Windows ARM64 — alta; é o wiki do próprio grupo de trabalho e o único lugar que separa navegador de sistema operacional.
2. `https://web.dev/blog/webgpu-supported-major-browsers` — anúncio de suporte em todos os navegadores principais, de 25/11/2025, e menção a ONNX Runtime e Transformers.js usando WebGPU para inferência local — média-alta; é fonte de fabricante (Google) e o enquadramento "todos os principais" precisa da ressalva da fonte 1.
3. `https://caniuse.com/webgpu` — cobertura global medida: 85,72% pleno mais 1,63% parcial — média; a metodologia é transparente, mas a entrada contabiliza o Firefox como sem suporte, divergindo da fonte 1, e por isso o número é usado com a divergência declarada.
4. `https://threejs.org/docs/pages/WebGPURenderer.html` — documentação do renderizador; sustenta a inversão "WebGPU como padrão, WebGL2 como fallback" e a opção `forceWebGL` usada no experimento — alta; documentação primária do projeto.
5. `https://blog.playcanvas.com/new-in-supersplat-webgpu-and-streaming-bring-huge-performance-wins/` — post de 03/06/2026 com os ganhos medidos do renderizador de compute (1,1× a 5,7× em M4 Max até 35 milhões de gaussianas; 2–2,1× em iPhone 13 Pro Max) e a estimativa de 85% de usuários com WebGPU — média; é fonte de fabricante sobre produto próprio, e as medições não são independentes, mas os números vêm com hardware e carga declarados.
6. `https://www.w3.org/TR/webxr/` — Candidate Recommendation Draft de 09/06/2026, Immersive Web Working Group, com o critério de duas implementações independentes e interoperáveis — alta; especificação primária.
7. `https://developers.meta.com/horizon/release-notes/web` — notas de versão do navegador do Quest: WebGPU e projeção de profundidade experimentais na v146.0 (21/04/2026), space-warp com WebGPU na v149.1 (27/07/2026), foveação com WebGPU na v150.1 (28/08/2026) — alta para o fato de entrega, média para interpretação de intenção estratégica.
8. `https://webkit.org/blog/17818/announcing-interop-2026/` — anúncio de 12/02/2026 com as 20 áreas de foco e 4 de investigação; base para afirmar que WebXR e WebGPU **não** estão entre elas — alta; anúncio oficial e verificável item a item.
9. `https://github.com/web-platform-tests/interop/issues/1021` — a proposta de WebXR como área de foco do Interop 2026, encerrada — alta para a existência da proposta, média para o desfecho, que se lê por ausência na fonte 8 e não por declaração explícita na issue.
10. `https://www.w3.org/TR/webnn/` — Candidate Recommendation Draft de 10/09/2026; relação com WebGPU (`MLContext` a partir de `GPUDevice`), ausência de shader próprio, considerações de privacidade herdadas — alta; especificação primária.
11. `https://arxiv.org/html/2605.20706v1` — *Llamas on the Web*, UC Santa Cruz e Microsoft Research, 20/05/2026; 29–33% menos memória que WebLLM e Transformers.js, 23 formatos de peso, 45–69% mais rápido que outros frameworks web na decodificação, e a distância para o nativo de até 10× no prefill e 2,5× na decodificação, além das limitações do WebGPU (sem bf16, custo de 14–23% das checagens de segurança, ausência de subgroup matrix em estável) — alta; é a única fonte deste mapa com metodologia de medição exposta, e é ela que sustenta tanto a disrupção 4.3 quanto seu teto.
12. `https://arxiv.org/pdf/2606.26412` — *What Browsers Do in the Shaders: A Measurement Study of WebGPU Privacy*, 26/06/2026 — média; confirma que a privacidade do WebGPU é objeto de estudo sistemático em 2026, mas os números específicos de acurácia não foram extraíveis do PDF na leitura feita, e por isso nenhum percentual dessa fonte é citado no corpo do mapa.
13. `https://developer.apple.com/support/dma-and-apps-in-the-eu/` — termos unificados para a União Europeia a partir de 01/10/2026: Core Technology Commission de 5% substituindo a taxa por instalação, distribuição web com critérios de elegibilidade, motores de navegador alternativos — alta para a regra, e é a fonte do co-fator regulatório declarado na seção 4.
14. `https://www.mobiletime.com.br/noticias/09/12/2025/tic-domicilios-2025/` — TIC Domicílios 2025 (Cetic.br), divulgada em 09/12/2025: 86% dos domicílios com internet, 32% com computador, 65% de acesso exclusivo por celular (87% na classe DE, 5% na classe A), coleta de março a agosto de 2025 com 24.535 indivíduos e 27.177 domicílios — média; os dados são do Cetic.br, mas esta é cobertura de imprensa da coletiva, porque o PDF primário não abriu (ver seção 12).
15. `https://developers.poki.com/` — escala declarada do portal: 100 milhões de jogadores por mês, mais de 1 bilhão de partidas por mês, mais de 500 desenvolvedores — média; é número autodeclarado por empresa privada, sem auditoria, usado apenas como precedente de que distribuição por link opera em escala, e não como projeção de mercado.

## 12. Anexo — o levantamento bruto

### 12.1. Fase 1 — enquadramento

A entrevista de enquadramento foi respondida por escrito, sem interação ao vivo. Respostas registradas: tema "O navegador como console: 3D e XR sem instalação"; recorte de tecnologia e plataforma; horizonte 2031; público de quem projeta mídia e interação; escopo global com nota sobre o Brasil; descartado apenas o que já é comum em produto de massa; viés neutro; critério de mudança de ideia declarado pelo solicitante como "evidência de que a adoção já passou da maioria inicial (Rogers) ou de que a tecnologia não rompe nada". Profundidade: três ordens. Modo: a partir de uma inovação, não de um setor. Itens não definidos e assumidos por mim, conforme autorizado: nenhuma exclusão adicional, nenhuma disrupção suspeita pré-indicada, nenhuma fonte previamente desconfiada.

### 12.2. Fase 2 — triagem de maturidade

Classificação escrita antes de qualquer derivação. A skill manda pedir confirmação ao usuário nesta etapa; não havendo usuário nesta rodada, a classificação segue declarada e assumida, e o ponto de maior tensão está explicitado adiante.

| Tecnologia | Classificação | Teste de rejeição aplicado |
|---|---|---|
| WebGL / WebGL2 | **Madura** | Padrão de mercado há mais de uma década; hoje é o *fallback*, não a ruptura. Não é possível dizer o que rompe agora. Rejeitada como raiz. |
| glTF, `model-viewer` | **Madura** | Formato consolidado; entra como contexto. |
| PWA | **Madura** | Não rompe cadeia de valor; melhora entrega. |
| Unity/Unreal exportando para web | **Madura** | Existe há anos e não deslocou nada de fundamental. |
| Streaming de jogo em nuvem no navegador | **Madura e fora do tema** | É render no servidor — o oposto do objeto deste mapa, que é execução no cliente. |
| **WebGPU como alvo primário** | **Disruptiva** | Se funciona, quem perde é a cadeia loja-binário-revisão e o modelo de cobrança por computação em servidor. Entra como raiz 4.1. |
| **WebXR como alvo primário** | **Emergente com efeito disruptivo** | Viabilidade demonstrada em três plataformas, sem escala; falta parque e falta paridade. Entra como raiz 4.2. |
| **Inferência no navegador (WebGPU compute)** | **Disruptiva** | Rompe a premissa de que IA é chamada de rede e a economia por token. Entra como raiz 4.3. |
| WebNN | **Emergente** | CRD de 10/09/2026, sem duas implementações interoperáveis. Entra como sinal, não como raiz. |
| Splats gaussianos no navegador | **Emergente, e fronteira de tema** | Captura 3D é outro recorte da disciplina; aqui entra só como carga de trabalho que prova o ganho de WebGPU. |
| DMA, marketplaces alternativos, *link-out* | **Emergente, e não é tecnologia** | É regulação. Entra como co-fator declarado, nunca como raiz — ver 12.4, teste de causa solta. |

**A tensão desta triagem, declarada.** A regra de ouro da skill diz que tecnologia presente em mais de 50% dos aparelhos do público-alvo é madura. O WebGPU está em 87,35% dos navegadores. Pela letra da regra, seria madura e estaria fora. Decidi que não, e o critério é este: a regra mede **uso**, e o que está medido é **capacidade instalada**. WebGL esteve em mais de 95% dos navegadores por dez anos sem que a maioria dos produtos o usasse como alvo primário. Não encontrei medição pública de adoção por produtores, e essa ausência é a maior fragilidade deste documento — está registrada como a objeção central da seção 7 e é exatamente o que o critério de mudança de ideia declarado no enquadramento exigiria verificar.

### 12.3. Fase 4 — derivação, efeitos que não sobreviveram

Efeitos gerados na primeira passagem e cortados antes da versão final:

- *"A loja de aplicativos deixa de existir como camada de distribuição até 2030."* — **descartado**: extrapolação linear somada a causa solta.
- *"Todo jogo comercial passa a ser publicado primeiro na web até 2030."* — **descartado**: adoção acelerada sem precedente. Nenhuma plataforma de distribuição de software foi deslocada nesse prazo.
- *"O sistema operacional perde relevância porque o navegador executa tudo."* — **descartado**: terceira ordem vazia, sem mecanismo causal nomeável. É a formulação que o próprio método classifica como "muda a sociedade".
- *"O navegador substitui a engine proprietária."* — **descartado**: extrapolação. O motor não é o renderizador; é o editor, o pipeline de asset, o build e o suporte.
- *"Todo dispositivo passa a ter GPU capaz, e a desigualdade de acesso se resolve."* — **reescrito**: a evidência aponta o contrário (32% dos domicílios brasileiros com computador em 2025; exigência de Vulkan no Android). Virou e5.1 e e8.1.1, com o sinal invertido.
- *"Modelo em nuvem é substituído por modelo no navegador."* — **reescrito**: a medição do LlamaWeb mostra distância de 2,5× a 10× para o nativo. Virou e8.1, roteamento híbrido.
- *"Plataformas de streaming oferecerão modo imersivo responsivo ao espectador."* — **descartado por causa solta**: não deriva de nenhuma das três raízes; deriva de sensoriamento contínuo, que é outro tema. É exatamente o erro 5 do `DUVIDAS.md`, repetido aqui e apanhado pelo mesmo teste.
- *"Um efeito de terceira ordem sobre formação: universidades fecham laboratórios de VR."* — **descartado**: não há mecanismo; laboratório fecha por orçamento, não por API.

### 12.4. Fase 5 — rodada adversarial, resultado

Os quatro testes foram aplicados a cada um dos 29 efeitos que chegaram à rodada.

**Teste 1, extrapolação linear.** Três efeitos marcados `suspeito` e reescritos: e1 (era "WebGL desaparece"), e2 (era "todo software criativo vira web") e e7 (era "toda aplicação embarca modelo"). Os três foram reduzidos de substituição para deslocamento.

**Teste 2, adoção acelerada.** Dois efeitos marcados `suspeito`. e4 foi adiado de 2027 para 2028 e teve o verbo trocado de "substitui" para "convive". e5 foi adiado para 2029 porque supunha que a ausência do Safari se tornasse o gargalo dominante antes de o parque de óculos crescer — o que exige ordem de acontecimentos que não está garantida.

**Teste 3, causa solta.** O mais produtivo. Removendo a raiz 4.2, os efeitos e4 e e4.1 **continuam acontecendo** por causa da regulação europeia e das decisões judiciais americanas. Não foram descartados, porque o mapa perderia o que o tema pede, mas foram **reconectados com atribuição fraca e declarada** — a seção 7 diz isso com todas as letras, e é a ressalva mais importante deste documento. Um efeito foi movido de raiz: "curadoria migra para o buscador" pendia de 4.1 e passou a e4.2, sob 4.2. Um foi descartado (o de streaming imersivo, acima).

**Teste 4, viés do usuário.** Três efeitos marcados `revisar`: e4, e4.1 e e4.2 confirmam a expectativa embutida na pergunta que originou o tema ("o que acontece com a loja, com a taxa de 30%, com a curadoria"). Mantidos, reescritos para resultado mais modesto que o esperado, e sinalizados ao leitor na seção 7.

**Resumo de falhas.**

| | Quantidade |
|---|---|
| Efeitos gerados na primeira passagem | 29 |
| **Descartados** | 6 |
| **Reescritos** | 5 |
| **Mantidos com ressalva** (`suspeito` ou `revisar`) | 5 |
| **Reconectados a outra raiz** | 1 |
| Efeitos no mapa final | 29 |

A skill determina apresentar este resumo ao usuário e perguntar se ele quer reprocessar alguma disrupção. Não havendo usuário nesta rodada, registro a pergunta como não respondida e declaro que **reprocessei a disrupção 4.2 por iniciativa própria**, uma vez, depois de descobrir que WebXR não entrou no Interop 2026 — a descoberta enfraquecia o ramo inteiro e os prazos de e5 e e6 foram revistos por causa dela.

### 12.5. Buscas que falharam ou não renderam

- **PDF primário da TIC Domicílios 2025** (`cetic.br/media/analises/tic_domicilios_2025_principais_resultados.pdf`): retornou binário ilegível. Contornado por cobertura de imprensa da coletiva, com a perda de confiabilidade declarada na fonte 14.
- **Painel do Interop 2026 em `wpt.fyi/interop-2026`**: a página carrega por script e a leitura devolveu apenas o cabeçalho, sem as áreas. Contornado pelo anúncio do WebKit.
- **Adoção de WebGPU por produtores** (proporção de sites ou produtos que o usam como alvo primário): **não encontrada**. É a lacuna mais séria deste mapa e o motivo de a confiança global estar em `media` e não em `alta`. Nenhum dos rastreadores públicos consultados separa "navegador suporta" de "site usa".
- **Parque brasileiro de óculos de XR**: **não encontrado** dado público. A afirmação de e5.1 sobre ausência de parque é inferência a partir dos números de computador e celular, não medição direta.
- **Números específicos de acurácia do estudo de privacidade de WebGPU** (arXiv 2606.26412): o PDF não permitiu extração confiável das métricas. Nenhum percentual dessa fonte foi usado.
- **Estatísticas de portais de jogo instantâneo por terceiros**: três fontes, três números incompatíveis, nenhuma com metodologia. Descartadas em favor da declaração da própria empresa, com a ressalva de que é autodeclaração.
