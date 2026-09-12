---
tema: IA local — no dispositivo e no navegador
slug: ia-local-no-dispositivo-e-no-navegador
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
tecnologias_citadas: [BitNet b1.58, quantização ternária, bitnet.cpp, Apple Foundation Models framework, AFM 3 Core Advanced, Instruction-Following Pruning, Gemini Nano, Chrome Prompt API, AICore, Gemma 4 E2B/E4B, LiteRT-LM, WebGPU, WebLLM, LlamaWeb, llama.cpp, GGUF, NPU móvel, quantização INT4/INT3]
fontes: 14
confianca: media
experimento: A turma abre a mesma página de inferência local nos próprios aparelhos e mede quantos rodam, quantos degradam sob carga sustentada e quantos não rodam de jeito nenhum.
skill_usada: futurizacao-kvv
publico_ok: false
---

## 1. Resumo

A inteligência está saindo da nuvem, mas não pela porta que a narrativa anuncia. Em 2026 três coisas ficaram verdadeiras ao mesmo tempo: um modelo ternário de 2 bilhões de parâmetros cabe em 0,4 GB e decodifica em 29 ms de CPU gastando 0,028 J por token; Apple e Google passaram a distribuir o modelo como recurso do sistema, com a Apple dizendo, na própria sala de imprensa, que a inferência é "free of cost"; e o navegador ganhou um motor de inferência de qualidade de llama.cpp sobre WebGPU. E, ao mesmo tempo, a API local do Chrome exige 22 GB de disco livre e **não roda em Android nem iOS**; um iPhone 16 Pro cai de 40,5 para 23,7 tokens por segundo em três iterações de carga sustentada; e a NPU consome de 2 a 4 vezes mais energia que a CPU na fase de decodificação. Este mapa trata isso como três rupturas incompletas — a aritmética ternária, a inferência como recurso de plataforma (que já se bifurcou), e a transferência do custo da fatura do fornecedor para a bateria e o disco do usuário — e rastreia efeitos de primeira, segunda e terceira ordem até 2031, com um teste adversarial contra o próprio raciocínio e um experimento mensurável em uma aula.

## 2. O tema

"IA local" nomeia uma mudança de **lugar da inferência**, e mudança de lugar reorganiza custo, responsabilidade e controle — não só latência. Até aqui, usar um modelo significava três coisas encadeadas: uma chave de API, uma fatura por token e um pacote de dados saindo do aparelho. Quando o modelo roda no celular, no laptop ou na aba, as três se desfazem de uma vez. O que sobra no lugar delas não é "o mesmo produto mais barato": é um arranjo diferente, em que o fabricante do aparelho vira intermediário obrigatório, o usuário vira pagador invisível (em bateria, disco e calor) e o desenvolvedor perde a capacidade de saber que modelo, em que versão, respondeu ao seu usuário.

Os pontos de contato com mídia e interação são três, e nenhum é cosmético. **(a) O que se pode construir muda de categoria:** interação que depende de resposta imediata, contínua e sem rede — legenda ao vivo, tradução em conversa, agente que lê a tela, personagem que responde dentro do jogo offline — deixa de ser inviável economicamente, porque não há mais custo marginal por interação. **(b) O que se pode prometer muda de natureza:** "nada sai do seu aparelho" passa a ser uma alegação de produto verificável e, por consequência, regulável. **(c) O que se pode assumir sobre o usuário quebra:** hoje o projetista assume que a inteligência é uniforme porque vem do mesmo servidor para todo mundo; com inferência local, dois usuários do mesmo aplicativo passam a ter modelos diferentes, versões diferentes e tetos térmicos diferentes, e o projetista não enxerga isso em nenhuma métrica que já usa.

Por que isto exige **mapa prospectivo** e não levantamento de estado da arte: o estado da arte aqui é publicamente conhecido, fácil de listar — e, sozinho, mente. Listar que "Apple, Google e Microsoft embutiram modelos nos sistemas" é verdade e é inútil, porque o que interessa a quem projeta não é se a API existe, e sim o que acontece com o resto do arranjo quando ela existir de fato no parque instalado: com o modelo de assinatura de quem vende IA, com a loja de aplicativos, com a responsabilidade civil por uma resposta errada, com quem consegue rodar isso num aparelho de mil reais. Essas são perguntas de segunda e terceira ordem. Pior: neste tema os sinais fortes e os sinais fracos apontam em direções opostas — a plataforma anuncia disponibilidade universal enquanto a documentação da mesma plataforma exclui o celular, e a literatura de medição mostra que o ganho de eficiência se dissolve sob carga sustentada. Mapa de futuro é exatamente o instrumento para segurar duas evidências contrárias ao mesmo tempo sem escolher a mais confortável.

## 3. Onde isso está hoje

**O que funciona — e com número.** A evidência mais dura de que a aritmética mudou está na ficha técnica do `microsoft/bitnet-b1.58-2B-4T`: 0,4 GB de memória não-embedding, 29 ms de latência de decodificação em CPU e 0,028 J estimados por token, contra 2 GB / 48 ms / 0,258 J do LLaMA 3.2 1B tomado como linha de base [5]. O repositório do bitnet.cpp reporta ganhos de 2,37× a 6,17× em CPUs x86 com redução de energia de 71,9% a 82,2%, e de 1,37× a 5,07× em ARM com 55,4% a 70,0% [4]. E o projeto não parou no modelo de texto: em 15/01/2026 saíram kernels de CPU com 1,15× a 2,1× de ganho adicional; em 20/07/2026, modelos de *embedding* de 0,6B e 270M; em 23/07/2026, o VibeASR.cpp, reconhecimento de fala multilíngue em tempo real com quantização I2_S rodando com "RTF < 1" com poucas threads em AVX2 e NEON [4].

**O modelo virou recurso do sistema, e isso está em produção.** A Apple abriu o modelo do Apple Intelligence a terceiros no iOS 26 com o Foundation Models framework e afirmou, textualmente, "AI inference that is free of cost", com recursos que "protect users' privacy and are available offline"; a nota de 29/09/2025 nomeia aplicativos reais já em produção — SmartGym, Stoic, CellWalk, OmniFocus 4, Signeasy, entre outros [2]. Em 08/06/2026, a Apple publicou a terceira geração: o AFM 3 Core segue com 3 bilhões de parâmetros e ganhou preferência humana em 45,6% dos prompts contra 23,3% da linha de base de 2025; ao lado dele entrou o **AFM 3 Core Advanced**, de 20 bilhões de parâmetros com ativação esparsa (1 a 4 bilhões ativos por requisição, via *Instruction-Following Pruning*), nativamente multimodal em áudio e imagem, cobrindo 28 localidades [1]. No Google, o LiteRT-LM é o runtime que já entrega Gemini Nano em Chrome, Chromebook Plus e **Pixel Watch** — com clonagem de sessão abaixo de 10 ms no relógio — com suporte a CPU, GPU e NPU [10]; e em 02/04/2026 o Gemma 4 entrou no AICore Developer Preview em duas variantes, E4B (mais raciocínio) e E2B (3× mais rápida), base do futuro Gemini Nano 4 [11].

**O navegador ganhou motor sério.** O WebLLM roda modelos inteiros na aba sobre WebGPU, "no server support", com API compatível com a da OpenAI [12]. E em 20/05/2026 o LlamaWeb (UC Santa Cruz + Microsoft Research) publicou um backend WebGPU para o llama.cpp com 23 formatos de quantização, medindo: mais de 100 tok/s em GPUs de topo, 30–80 tok/s em GPUs medianas, **4–17 tok/s em GPUs móveis**, com 29–33% menos memória que os concorrentes (49% melhor que o WebLLM, 41% melhor que o Transformers.js) [6].

**O que falha — e falha em quatro lugares diferentes.** *Primeiro, o portão da plataforma.* A documentação oficial da Prompt API do Chrome exige pelo menos 22 GB livres no volume do perfil, GPU com mais de 4 GB de VRAM **ou** 16 GB de RAM com 4+ núcleos, e declara: "Chrome for Android, iOS, and ChromeOS on non-Chromebook Plus devices are not yet supported" [3]. Ou seja: a promessa de "IA no dispositivo" está, no navegador, indisponível justamente na classe de aparelho em que quase todo mundo consome mídia. No Android, o Gemma 4 só roda com aceleradores Google/MediaTek/Qualcomm; em aparelhos sem AICore, a execução cai para CPU e é explicitamente "not representative of final production performance" [11]. *Segundo, o teto térmico.* Medindo Qwen 2.5 1.5B em 4 bits sob carga sustentada, o iPhone 16 Pro sai de 40,49 tok/s no pico para 23,67 tok/s no estado quente — perde cerca de 40% do pico em três iterações; o Galaxy S24 Ultra estabiliza em 10,38 tok/s; a conclusão do trabalho é que "thermal management supersedes peak compute" no celular [7]. *Terceiro, a NPU não é o atalho que parece.* Dissecando inferência móvel, Cai et al. acham 15× de diferença entre implementações no mesmo silício (1.463,7 tok/s de prefill no GENIE contra 115,1 no llama.cpp), queda de 20–24% de decodificação quando o contexto vai de 16 para 4.096 tokens, e — o dado contraintuitivo — consumo de 2 a 4× **mais** energia que a CPU na decodificação, até 4,3×10⁵ μJ/token [8]. *Quarto, a economia de quantizar não é o que a conta sugere:* modelos quantizados em INT4/INT3 mantêm acurácia mas geram cadeias de raciocínio mais longas, e a inflação de tokens come o ganho por token [9]. Some-se o alerta da própria ficha do BitNet: sem o `bitnet.cpp`, usando a `transformers` padrão, "do NOT expect performance efficiency gains" — o único benefício que sobra é a memória [5].

**Quem está construindo.** Microsoft (BitNet, kernels de CPU e GPU, e a virada do Build 2026 de "só NPU" para NPU+GPU+CPU); Apple (Foundation Models framework, AFM 3, silício próprio); Google (Gemini Nano, AICore, Gemma 4, LiteRT-LM, Prompt API no Chrome); Qualcomm e MediaTek no silício que habilita o AICore; e, fora das plataformas, a camada aberta — llama.cpp, GGUF, Ollama, LM Studio, MLC/WebLLM — que é a única via pela qual o desenvolvedor escolhe o próprio modelo em vez de pedir emprestado o da plataforma.

## 4. As disrupções-raiz

**Antes: o que foi recusado, e por quê.** O filtro anti-tecnologia madura desta skill exige recusar formalmente o que já é melhoria incremental. Foram descartados como **maduros ou incrementais**, e não como disrupções: (i) *chamar API de modelo na nuvem* e *rodar modelo pequeno em servidor próprio* — a régua da própria disciplina os coloca como maduros, e nenhum dos dois muda o lugar da inferência; (ii) *quantização em 4 bits com GGUF rodando no laptop via llama.cpp/Ollama* — real, útil, amplamente adotado desde 2023, e portanto estado da arte, não ruptura: o comportamento que ela habilita (entusiasta roda modelo no próprio PC) já existe em escala e não reorganiza nenhum ecossistema; (iii) *"IA no celular" como recurso de consumo* (resumo de notificação, borracha mágica, assistente no botão lateral) — é produto de massa embarcado, e melhorar a qualidade de um resumo não rompe com a lógica atual de nada; (iv) *a existência do WebGPU* — é infraestrutura já entregue em todos os navegadores e objeto do tema 15; aqui ela é condição, não disrupção; (v) *a presença de NPU no chip* — hardware instalado não é ruptura por si, e a evidência de 2026 mostra que ele nem sequer é o caminho mais eficiente na decodificação [8]. O que segue são as três quebras que ainda **não** se concretizaram por completo.

### Disrupção-raiz 1 — A aritmética ternária: o modelo deixa de ser um arquivo de pesos e vira um circuito

**O que rompe.** Rompe o acoplamento entre qualidade de modelo e largura de banda de memória. Em ponto flutuante, rodar um modelo é mover bilhões de números de 16 bits da RAM para a unidade de multiplicação; é essa mudança de dados, não a conta, que domina custo e energia. Com pesos ternários (-1, 0, +1), a multiplicação vira soma e subtração e o peso ocupa menos de dois bits. O que isso rompe não é "o modelo fica menor": é que **a inferência deixa de ser um problema de memória e vira um problema de aritmética inteira** — a classe de hardware que pode rodá-la muda, e passa a incluir o processador comum que o aparelho barato já tem. Rompe, de quebra, a suposição de que IA local exige acelerador dedicado.

**Por que agora, e não há cinco anos.** Porque até 2025 não havia modelo ternário **treinado nativamente em escala** — havia experimentos de quantização pós-treino, que degradam. O `bitnet-b1.58-2B-4T`, de abril de 2025, é o primeiro com 4 trilhões de tokens de treino em 1,58 bit, e a ficha traz o par medido que antes só existia como promessa: 0,4 GB e 0,028 J/token contra 2 GB e 0,258 J do LLaMA 3.2 1B [5]. E porque 2026 foi o ano em que a linhagem virou família de ferramentas em vez de um modelo isolado: kernels paralelos de CPU em janeiro, *embeddings* ternários em julho, ASR em tempo real em julho [4]. Cinco anos atrás faltavam as duas coisas: o treino nativo e o kernel.

**O que ainda falta.** Três coisas concretas. (1) **Hardware.** Não existe silício comercial que faça aritmética ternária nativamente; o ganho hoje é obtido com kernels que emulam ternário sobre instruções SIMD de inteiros, e a própria ficha do modelo avisa que fora do `bitnet.cpp` o ganho desaparece [5] — é uma disrupção presa a uma única implementação. (2) **Cobertura.** Os modelos de *embedding* lançados em julho de 2026 não têm suporte ARM, isto é, não rodam no celular [4]; a família ainda não é portátil onde mais importa. (3) **Escala.** Não há modelo ternário em qualidade de fronteira — o maior oficial tem 2,4B. Enquanto o topo da linhagem for um modelo de 2B, o ternário serve para tarefa fechada (extrair, classificar, resumir, transcrever) e não para o agente que a narrativa promete.

### Disrupção-raiz 2 — A inferência vira recurso de plataforma — e se bifurca no mesmo movimento

**O que rompe.** Rompe a relação econômica e contratual entre quem faz o produto e quem faz o modelo. No arranjo de nuvem, o desenvolvedor tem chave, fatura, escolha de modelo, versão fixada e um contrato com o fornecedor. Quando o modelo vira recurso do sistema operacional ou do navegador, as cinco coisas somem de uma vez: não há chave, não há fatura ("free of cost" [2]), não há escolha de modelo, não há fixar versão e não há contrato — há uma chamada de sistema. A inferência deixa de ser um **insumo comprado** e vira uma **capacidade emprestada**. E, no mesmo movimento, o campo se bifurca: ou você usa o modelo que a plataforma empresta (grátis, curado, atualizado por ela, com as recusas dela) ou você carrega o seu próprio via WebGPU (seu peso, sua versão, seus gigabytes baixados pelo usuário). Não existe meio-termo, e as duas pontas têm donos diferentes.

**Por que agora.** Porque as duas pontas ficaram prontas em 2025–2026, não antes. Do lado emprestado: Foundation Models framework em produção com aplicativos nomeados desde setembro de 2025 [2], terceira geração em junho de 2026 já com modelo esparso de 20B e multimodalidade nativa no aparelho [1], Prompt API estável no Chrome com Gemini Nano baixado pelo navegador e nenhum dado indo ao Google [3], AICore com Gemma 4 em preview em abril de 2026 [11], e o LiteRT-LM provando que o mesmo runtime desce até o relógio de pulso [10]. Do lado carregado: o WebLLM já rodava modelo inteiro na aba [12], e em maio de 2026 o LlamaWeb trouxe qualidade de llama.cpp para o navegador com 23 formatos de quantização e 29–33% menos memória [6]. Há cinco anos nenhuma das duas pontas existia: não havia API de modelo no sistema nem WebGPU nos navegadores.

**O que ainda falta.** (1) **O portão.** A ponta emprestada é a que tem alcance — e é a que exclui. A documentação do Chrome exige 22 GB livres e não suporta Android nem iOS [3]; o AICore depende de acelerador de três fabricantes e, fora deles, "not representative of final production performance" [11]. Enquanto isso valer, "recurso de plataforma" quer dizer recurso de plataforma **cara**. (2) **A governança.** Ninguém definiu quem responde quando o modelo que a Apple ou o Google emprestou diz algo errado dentro do aplicativo de um terceiro — e a Diretiva de Responsabilidade por Produto (UE) 2024/2853, com transposição até 09/12/2026, trata software autônomo como produto, considera a falta de atualização de segurança um defeito e transforma quem "modifica substancialmente" um produto em fabricante [13]. Isso ainda não foi testado numa API de inferência embutida. (3) **A portabilidade.** A ponta carregada ainda não tem cache de pesos compartilhado entre origens, o que faz cada site pedir os mesmos gigabytes de novo; e o próprio LlamaWeb registra limites duros de memória por aba e ausência de portabilidade de desempenho entre fabricantes [6].

### Disrupção-raiz 3 — O custo não desaparece: ele muda de dono, e o novo dono não o enxerga

**O que rompe.** Rompe a contabilidade do setor. A frase que organiza a narrativa desta tendência — "grátis depois de baixado" — é literalmente verdadeira para quem publica o produto e literalmente falsa para o sistema. O que acontece é uma **transferência**: o custo sai da fatura do fornecedor, onde era medido, cobrado e otimizado, e entra na bateria, no disco, no plano de dados e no ciclo térmico do usuário, onde não é medido por ninguém e não aparece em nenhuma métrica de produto. É a mesma estrutura da externalidade ambiental, aplicada à computação pessoal: o ganho é privado e contabilizado; o custo é distribuído e invisível. E ela rompe uma suposição de projeto que nunca precisou ser dita — a de que a capacidade computacional do usuário é irrelevante para a experiência, porque a inteligência vinha do servidor.

**Por que agora.** Porque só em 2026 apareceu medição de carga **sustentada** em vez de benchmark de pico, e ela desmonta a conta. O iPhone 16 Pro perde cerca de 40% do pico em três iterações, indo de 40,49 a 23,67 tok/s; o Galaxy S24 Ultra estabiliza em 10,38 tok/s; e a conclusão publicada é que a restrição dominante é térmica, não de computação de pico [7]. A NPU, o componente vendido como a solução de eficiência, consome de 2 a 4× mais energia que a CPU na decodificação, e o CPU hospedeiro chega a 30% da energia total do sistema só coordenando a NPU [8]. E a quantização agressiva, que deveria pagar a conta, infla a cadeia de raciocínio e devolve parte do ganho em tokens a mais [9]. Há cinco anos não havia nada disso para medir, porque não havia carga real.

**O que ainda falta.** (1) **Instrumentação.** Não existe métrica padrão de "joule por tarefa" em relatório de produto, nem loja de aplicativos publicando consumo energético como publica tamanho — sem isso, o custo transferido permanece literalmente invisível. (2) **Régua de parque instalado.** Falta o dado que decide tudo no Brasil: quantos aparelhos em uso hoje atendem ao piso de disco, RAM e acelerador. O celular mais barato que a Samsung prepara para o Brasil em 2026 traz MediaTek Helio G99, tela 720p e até 8 GB de RAM na casa dos R$ 1.000 [14] — nem o artigo nem a ficha mencionam IA local, e um Helio G99 não está na lista de aceleradores do AICore. (3) **Norma.** Nenhum regime de ecodesign ou de defesa do consumidor alcança hoje o software que consome a bateria do aparelho de outro; enquanto não alcançar, não há incentivo para medir.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "A aritmética ternária: o modelo deixa de ser um arquivo de pesos e vira um circuito"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "O piso de hardware para rodar um modelo útil cai para o processador comum que o aparelho já tem, sem GPU nem NPU dedicada"
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "O ciclo de troca de aparelho deixa de ser empurrado pelo argumento de IA, e o parque instalado antigo volta a ser mercado endereçável"
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "Fabricante de chip passa a vender eficiência por watt em vez de TOPS de pico, e o número de TOPS some do material de marketing"
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: "Programa público de inclusão digital passa a especificar 'roda modelo local' como requisito de compra, em vez de marca de chip ou geração de processador"
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "O kernel dedicado vira o gargalo real: sem a implementação certa o ganho desaparece, e a cadeia de ferramentas concentra mais poder que o modelo"
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Forma-se uma camada de compiladores e kernels ternários disputada como o FFmpeg foi no vídeo: infraestrutura invisível, crítica e mantida por poucos"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "Silício com suporte nativo a aritmética ternária sai da pesquisa e entra em roadmap de fabricante de chip móvel"
        sinal: fraco
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Duas classes de modelo se separam de vez: precisão cheia na nuvem e ternário no bolso, com formatos, avaliações e ferramentas incompatíveis entre si"
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Avaliar um modelo passa a exigir declarar bits, kernel e aparelho; benchmark que não declara os três perde valor de citação"
                sinal: medio
                prazo: 2031
                confianca: media
          - id: e2.2
            ordem: 2
            efeito: "Modelos ternários chegam ao relógio e ao fone de ouvido, classes de aparelho onde nunca coube um modelo de linguagem"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "A interface por voz sem rede vira o padrão do vestível, e a tela do relógio perde função em vez de ganhar"
                sinal: fraco
                prazo: 2032
                confianca: baixa
              - id: e2.2.2
                ordem: 3
                efeito: "Dado contínuo de saúde passa a ser interpretado sem nunca sair do corpo, e o objeto do consentimento muda de 'meus dados' para 'meu modelo'"
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: "A inferência vira recurso de plataforma — e se bifurca entre modelo emprestado e modelo carregado"
    efeitos:
      - id: e3
        ordem: 1
        efeito: "Chamar um modelo vira chamada de sistema: o aplicativo não tem chave, não tem fatura e não escolhe qual modelo respondeu"
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "A camada de produto que apenas embrulhava API de nuvem com uma interface perde razão de existir e desaparece por baixo"
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Preço de software volta a ser cobrado por função e não por consumo, e a metáfora de 'crédito' some da interface de produtos de IA"
                sinal: medio
                prazo: 2030
                confianca: media
              - id: e3.1.2
                ordem: 3
                efeito: "Quem vendia assinatura de inteligência migra para vender memória, sincronização entre aparelhos e responsabilidade contratual — não mais o modelo"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "O fabricante do sistema passa a decidir o que o modelo do usuário se recusa a fazer, dentro de aplicativos de terceiros, sem instância de recurso"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "A recusa de um modelo local vira questão de concorrência e de defesa do consumidor, não mais de política de uso privada"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: "Consolida-se a bifurcação: modelo emprestado pela plataforma de um lado, modelo carregado pelo desenvolvedor via WebGPU do outro, sem meio-termo"
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "Publicar um modelo vira publicar um arquivo, e o primeiro acesso passa a custar gigabytes de download ao usuário final"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Cache de pesos compartilhado entre origens vira infraestrutura pública disputada, como a CDN de fonte e de biblioteca foi na década anterior"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "Aplicação passa a declarar um 'grau de localidade' na interface, como hoje declara política de cookie e de rastreamento"
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "O rótulo 'processado no seu aparelho' vira alegação regulada e auditável, sujeita a enquadramento por propaganda enganosa quando falsa"
                sinal: medio
                prazo: 2031
                confianca: media
              - id: e4.2.2
                ordem: 3
                efeito: "Compra pública, saúde e educação passam a exigir prova técnica de que nada saiu do aparelho, e não apenas declaração do fornecedor"
                sinal: fraco
                prazo: 2032
                confianca: baixa

  - disrupcao: "O custo não desaparece: ele muda de dono, e o novo dono não o enxerga"
    efeitos:
      - id: e5
        ordem: 1
        efeito: "O orçamento de energia entra no projeto de interação, como o peso da página entrou no projeto de web na década de 2010"
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "A interface passa a negociar explicitamente com o usuário quanto de bateria uma resposta vai custar, oferecendo respostas mais baratas"
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Surge a métrica de joule por tarefa concluída ao lado de tempo de resposta em relatório de produto e em teste de usabilidade"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "Aparelho quente vira sintoma reconhecível de produto mal projetado, e reclamação de bateria passa a ser lida como reclamação de IA"
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "Loja de aplicativos passa a publicar consumo energético estimado do aplicativo, como já publica tamanho de instalação"
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e5.2.2
                ordem: 3
                efeito: "Regulação de ecodesign alcança o software embarcado, e não apenas o aparelho e sua reparabilidade"
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: "A desigualdade de aparelho vira desigualdade de inteligência disponível — e é invisível para quem projeta, porque não aparece em nenhuma métrica em uso"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "Produto feito para o Brasil precisa de dois caminhos simultâneos: inferência local no topo do parque e nuvem barata na base, com a mesma funcionalidade"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "O 'grátis depois de baixado' não alcança quem tem pouco disco e dado caro, e a economia prometida fica com quem já tinha aparelho bom"
                sinal: medio
                prazo: 2031
                confianca: media
              - id: e6.1.2
                ordem: 3
                efeito: "Pesquisa de campo sobre adoção de IA passa a medir parque instalado de aparelhos, e não capacidade de modelo"
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "Testar em aparelho de entrada vira etapa obrigatória de projeto, como o teste em rede lenta virou na década anterior"
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "Laboratório de aparelhos reais e fazenda de dispositivos viram serviço pago padrão em equipe de mídia, não luxo de grande empresa"
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

**O que o bloco não exprime sozinho.** Três coisas.

*Primeira: os três galhos não são independentes — eles se cancelam parcialmente.* A disrupção 1 (aritmética ternária) existe para resolver a disrupção 3 (o custo transferido): se o modelo ternário cumprir a promessa em ARM, o efeito `e6` perde força, porque a desigualdade de aparelho deixa de determinar a inteligência disponível. A leitura ingênua da roda soma os três galhos; a leitura correta é que `e1` é o antídoto de `e6`, e a pergunta que decide o mapa inteiro é **qual dos dois chega primeiro ao aparelho de mil reais**. O bloco YAML não tem sintaxe para "este efeito é o remédio daquele"; uma Matriz de Impacto Cruzado teria, e é por isso que a prosa precisa dizê-lo.

*Segunda: há um único efeito de sinal forte e confiança alta na roda inteira — o `e3`.* Isso é deliberado e é o dado mais importante da calibração. O que já está acontecendo, com produto em produção e documentação oficial, é apenas que a chamada de modelo virou chamada de sistema [1][2][3][10][11]. Tudo o mais neste mapa é inferência sobre consequência. Um mapa que distribuísse "forte" e "alta" pelos seis efeitos de primeira ordem estaria confundindo o que está posto com o que é plausível.

*Terceira: cinco efeitos de terceira ordem estouram o horizonte de 2031* — `e1.1.2` (2032), `e2.2.1` (2032), `e4.2.2` (2032), `e5.2.2` (2033) e `e6.1.2` (2032). Estão declarados de propósito: são exatamente os efeitos institucionais (compra pública, ecodesign, metodologia de pesquisa) cujo ciclo é mais lento que o tecnológico. Cortá-los para caber em 2031 seria falsificar o prazo para agradar o recorte.

## 6. Sinais fracos e wildcards

**Sinais fracos — cada um com o que ele indicaria se crescer.**

1. **O relógio de pulso rodando Gemini Nano com clonagem de sessão abaixo de 10 ms** [10]. Ninguém está olhando para o Pixel Watch como plataforma de IA, e é justamente ali que a restrição é mais dura. Se o runtime desce até o relógio, o piso de hardware caiu mais do que o discurso admite — e o limite deixa de ser computação e passa a ser exclusivamente térmico e de bateria.
2. **A NPU gastar mais energia que a CPU na decodificação** [8]. É um resultado que contradiz a razão de existir da NPU e que quase não circula fora da literatura. Se se confirmar em mais silício, o argumento comercial do "AI PC" e do celular com TOPS se inverte, e a disputa volta para kernel e software.
3. **O AFM 3 Core Advanced: 20 bilhões de parâmetros com 1 a 4 bilhões ativos por requisição, no aparelho** [1]. Esparsidade ativada por instrução é uma rota alternativa à quantização agressiva, e quase toda a conversa pública sobre IA local ignora essa rota. Se ela ganhar, o futuro local não é de modelos pequenos — é de modelos grandes usados em pedaços.
4. **A Microsoft ter deixado de tratar a NPU como requisito e voltado a apostar em GPU e CPU no Build 2026.** É um recuo silencioso de uma plataforma inteira sobre a própria tese de hardware, e reorganiza quem consegue rodar IA local no Windows.
5. **Modelos ternários de *embedding* e de reconhecimento de fala** [4]. Embedding local significa busca semântica e memória pessoal sem servidor; ASL local significa interface por voz sem rede. Os dois juntos são a base técnica de um agente pessoal offline — e chegaram como notas de rodapé de um repositório, não como lançamento.
6. **A Diretiva (UE) 2024/2853 tratar falta de atualização de segurança como defeito de produto** [13]. É o sinal jurídico que ninguém no campo técnico está lendo: um modelo embarcado que envelhece no aparelho é, por essa régua, um produto que se torna defeituoso com o tempo.

**Wildcard (baixa probabilidade, alto impacto).** *Um modelo ternário de qualidade de fronteira roda num celular de entrada, em ARM, sem acelerador dedicado, com kernel aberto.* Hoje faltam as três pernas ao mesmo tempo — não há ternário em escala de fronteira, os *embeddings* ternários sequer suportam ARM, e o ganho depende de uma implementação única [4][5]. Se as três se resolverem juntas, o mapa inteiro se reescreve: a disrupção 3 (custo transferido) desaparece porque o custo cai abaixo do limiar de percepção; a disrupção 2 (plataforma) perde o portão, porque não há mais requisito de aparelho para a plataforma administrar; e a pergunta de terceira ordem da disciplina — a inteligência vira bem pessoal, herdável, confiscável? — deixa de ser especulação e vira questão prática de direito de família e de apreensão de aparelho. É o único evento neste mapa que anula dois dos três galhos de uma vez.

**Contra-wildcard, igualmente possível e menos comentado:** *uma plataforma dominante torna a inferência local um recurso condicionado à conta.* Nada no arranjo atual impede que o modelo embarcado exija sessão iniciada, verificação periódica ou assinatura do sistema para permanecer habilitado. Se isso acontecer, "IA local" vira a mesma dependência de antes com latência menor — e a promessa de "ninguém pode desligar" cai sem que uma linha de código do modelo mude.

## 7. Contra o próprio mapa (teste adversarial)

**Extrapolação linear.** O mapa assume que a curva de eficiência dos modelos pequenos continua descendo no ritmo de 2024–2026. Isso é extrapolação, e há motivo específico para duvidar: o ganho do BitNet vem de uma mudança de representação que só pode ser feita uma vez — de 16 bits para ~1,58 não há um segundo salto da mesma ordem disponível; abaixo de ternário resta o binário puro, que a literatura já mostrou degradar mais. O mapa também extrapola que a qualidade dos modelos de 2–4B continuará subindo o suficiente para sustentar agentes; a evidência de que a quantização infla a cadeia de raciocínio [9] sugere o contrário — que parte do ganho aparente é contabilidade. **Correção honesta:** os efeitos `e1` e `e2` deveriam ter prazo mais longo do que a intuição sugere, e por isso estão em 2028 e 2030 com confiança media e baixa, não em 2027 com alta.

**Velocidade de adoção irreal.** Este é o erro mais provável do mapa. A régua correta não é a data em que a API existe, é a data em que o parque instalado atende ao requisito. A Prompt API do Chrome está estável desde a versão 138 [3] — e continua sem rodar em Android e iOS, que é onde está a mídia. O AICore exige acelerador de três fabricantes [11]. O celular mais barato da Samsung para o Brasil em 2026 sai com Helio G99 a cerca de R$ 1.000 [14]. Entre "a plataforma lançou" e "o usuário mediano tem" há um intervalo que, em ciclos anteriores de troca de aparelho, foi de quatro a seis anos — o que empurra boa parte deste mapa para depois de 2031. Se eu estiver errado em alguma coisa, a aposta mais segura é que estou otimista nos prazos de primeira ordem.

**Falha da disrupção.** Cada uma das três pode simplesmente não acontecer, e por motivos diferentes. *A disrupção 1 falha* se o ternário ficar preso a um kernel único e a fabricante nenhuma colocar aritmética ternária em silício: o BitNet vira curiosidade acadêmica com um ótimo repositório, como aconteceu com outras rotas de compressão. *A disrupção 2 falha* por cima, não por baixo: se o modelo emprestado pela plataforma continuar bom só para resumir, extrair e classificar — que é exatamente o que a Apple diz que ele serve para fazer — e todo caso de uso interessante seguir precisando de nuvem, então o recurso de plataforma é uma conveniência, não uma ruptura, e o mundo continua híbrido com a nuvem no comando. *A disrupção 3 falha* se o silício resolver o problema térmico antes de o problema virar cultura de projeto: se o aparelho de 2029 rodar inferência sustentada sem esquentar, ninguém jamais precisará de orçamento de energia na interface, e todo o galho `e5` evapora.

**Viés pessoal do autor.** Dois, e ambos empurram na mesma direção. *Primeiro, viés de quem já roda modelo local.* A própria disciplina registra que três alunos rodaram o julgamento das suas 500 fontes em modelo local depois de esbarrar em cota de API — a tendência aconteceu dentro da atividade. Essa é uma experiência memorável e persuasiva, e é exatamente o tipo de evidência que faz superestimar adoção: quem roda Ollama num laptop com 16 GB está numa fatia minúscula e atípica do mundo, e projeta a própria facilidade sobre um parque que não se parece com o dele. *Segundo, viés de simpatia ideológica.* "Nada sai do aparelho, ninguém pode desligar, não custa por chamada" é uma promessa que agrada a qualquer pessoa que já se irritou com cota de API — e um mapa escrito por quem torce pelo desfecho tende a tratar obstáculos como atrasos. Foi para compensar isso que o contra-wildcard da seção 6 (inferência local condicionada à conta) entrou no documento: ele é o desfecho que a torcida não quer ver, e é tecnicamente trivial de implementar.

## 8. O que a máquina errou

1. **Estabilização da Prompt API com versão errada.** Um resultado de busca afirmava que "o Chrome 148 (Q2 2026) estabiliza a Prompt API para páginas web". A afirmação entrou no rascunho. **Como foi percebido:** ao abrir a documentação oficial, que diz "Stable: Chrome 138+" e coloca em *origin trial* na 148 apenas os parâmetros de amostragem [3]. **Correção:** o texto passou a citar a estabilidade em 138 e a fonte primária; o blog secundário foi descartado da lista.
2. **Números de cobertura de WebGPU citados sem abrir a fonte.** Dois resultados de busca traziam "82,7%" e "cerca de 85% dos usuários finais segundo o caniuse". São números plausíveis e convenientes para o argumento. **Como foi percebido:** ao checar a lista do que efetivamente havia sido aberto, o caniuse não estava lá — e nenhuma das duas páginas que citavam o número era fonte primária. **Correção:** ambos os números foram cortados do documento inteiro, e a seção 3 passou a sustentar a afirmação sobre navegador com o LlamaWeb e o WebLLM, que foram lidos [6][12].
3. **Escala de ganho inventada por arredondamento.** O primeiro rascunho da disrupção 1 dizia que o modelo de 1 bit "roda cerca de 10× mais rápido gastando cerca de 1/10 da energia" — um par redondo, simétrico e falso. **Como foi percebido:** ao abrir a ficha do modelo, os números medidos são 29 ms contra 48 ms (1,66×) em latência e 0,028 J contra 0,258 J (9,2×) em energia, contra um único modelo de base nomeado [5]. Velocidade e energia não andam juntas, e a simetria era invenção. **Correção:** o texto passou a citar o par medido com a linha de base explícita.
4. **Citação de um relatório técnico que não foi lido.** Tentei abrir o relatório do BitNet b1.58 2B4T em PDF no arXiv (2504.12285) e o conteúdo voltou ilegível. **Como foi percebido:** na hora, pela própria resposta da ferramenta. **Correção:** o relatório **não** entrou na lista de fontes, e as afirmações que dependeriam dele foram reancoradas na ficha do modelo no Hugging Face, que foi efetivamente lida [5]. É um caso em que a tentação de citar "arXiv:2504.12285" pela plausibilidade era grande.
5. **Métricas de adoção agradáveis e sem origem verificável.** Resultados de busca ofereciam "52 milhões de downloads mensais do Ollama no 1º trimestre de 2026, alta de 520×" e "135 mil modelos GGUF no Hugging Face, contra 200 há três anos". São exatamente o tipo de número que um mapa de tendência adora. **Como foi percebido:** as duas origens eram um post em blog de desenvolvedor e um blog de loja de hardware; nenhuma foi aberta como fonte primária. **Correção:** cortados. O mapa não afirma tamanho de adoção da camada aberta em lugar nenhum — e a ausência disso é uma lacuna declarada, não um esquecimento.
6. **Erro de nomenclatura repetido da própria narrativa do campo.** O rascunho chamava o BitNet de "modelo de 1 bit" ao descrever a aritmética. A família se chama assim, mas a representação é **ternária, de 1,58 bit** (-1, 0, +1) — a diferença importa porque o zero é o que permite esparsidade e o que distingue o BitNet do binário puro. **Correção:** o texto passou a distinguir o nome da família da aritmética real.
7. **Confusão entre a Prompt API do Chrome e a do Chrome para Android.** Em um momento intermediário o mapa tratou "Gemini Nano no navegador" e "Gemini Nano no Android via AICore" como a mesma coisa. São caminhos distintos, com requisitos distintos e uma exclusão explícita entre eles [3][11]. **Correção:** separados na seção 3 e na disrupção 2, e a exclusão do Android virou um dos argumentos centrais do mapa.

## 9. Três cenários para 2031

**Provável.** A inferência local venceu na tarefa fechada e perdeu no resto. Todo sistema operacional oferece um modelo embarcado gratuito, e nenhum desenvolvedor de produto sério paga por API para resumir, extrair, classificar, transcrever, traduzir ou completar texto — essas seis coisas são chamadas de sistema, como abrir a câmera. O resto continua na nuvem, e o padrão dominante é híbrido e invisível: o aplicativo decide no ato, sem perguntar, se responde no aparelho ou no servidor, e quase nenhum usuário sabe qual aconteceu. O portão de hardware não caiu — ele se moveu: o modelo local de 2031 pressupõe um aparelho de 2029 ou mais novo, e por isso convive com uma base grande de aparelhos que só têm o caminho de nuvem. No Brasil, isso significa que a mesma marca entrega dois produtos diferentes com o mesmo nome. A economia de "grátis depois de baixado" se concretizou para quem publica e se dissolveu em bateria e disco para quem usa, sem que ninguém tenha medido. O ternário é real e importa — mas onde quase ninguém olha: relógios, fones, câmeras, carros, brinquedos.

**Desejável.** A inferência local virou um direito verificável, não um argumento de venda. Existe um rótulo padronizado de grau de localidade que qualquer aplicativo é obrigado a exibir e que pode ser auditado por terceiros, e dizer "processado no seu aparelho" quando não é configura publicidade enganosa. As lojas publicam consumo energético estimado como publicam tamanho, e "joule por tarefa" entrou no relatório de produto ao lado de tempo de resposta — o custo transferido voltou a ser visível para quem o transfere. A camada de modelo carregado pelo desenvolvedor sobreviveu ao lado da camada emprestada pela plataforma, com cache de pesos compartilhado entre origens, de modo que escolher o próprio modelo não custa gigabytes ao usuário nem depende da curadoria de uma empresa. O ternário chegou ao ARM com kernel aberto e mais de uma implementação, e o aparelho de entrada roda inferência útil — o que fez da IA local a primeira tecnologia de ponta desta década a chegar antes na base do parque do que no topo. Modelo pessoal que aprende com a pessoa existe, é exportável, e a lei já reconhece que apreender um aparelho é apreender uma memória.

**Indesejável.** "Local" virou um selo sem lastro. O modelo roda no aparelho, mas exige conta iniciada, verificação periódica e assinatura do fabricante para continuar habilitado — a dependência é idêntica à anterior, com latência menor e uma promessa de soberania na embalagem. Como o fabricante do sistema é o único que atualiza o modelo, é ele quem decide, dentro de aplicativos de terceiros, o que a inteligência do usuário se recusa a fazer, sem instância de recurso e sem publicar o critério. Quando uma resposta errada causa dano, ninguém responde: o desenvolvedor alega que não escolheu o modelo, o fabricante alega que não escreveu o aplicativo, e o caso morre na complexidade técnica. A promessa de economia se cumpriu na direção errada — os aparelhos esquentam, duram menos, são trocados mais cedo, e a conta de energia que saiu do balanço das empresas de nuvem reapareceu, distribuída e invisível, nos bolsos de bilhões de pessoas. E a desigualdade se institucionalizou: quem tem aparelho novo tem inteligência instantânea, privada e gratuita; quem não tem continua enviando tudo para servidores alheios e pagando por dado móvel para isso.

## 10. O experimento

**O que é.** *O teto de vidro do bolso* — uma página web única, sem instalação e sem back-end, aberta pela turma inteira ao mesmo tempo, nos aparelhos que cada pessoa já tem. A página faz quatro coisas, nesta ordem: (1) detecta e registra se há WebGPU, se a API de modelo do navegador está disponível e qual o aparelho, sistema e memória reportados; (2) carrega um modelo pequeno pelo WebLLM e cronometra o download e o primeiro token; (3) roda o **mesmo** prompt vinte vezes seguidas, sem pausa, registrando tokens por segundo de cada iteração; (4) registra a bateria no começo e no fim e pede à pessoa que classifique a temperatura do aparelho em três níveis ao tocar nele. O resultado de cada aparelho vai para uma planilha compartilhada com uma linha por pessoa. Um aluno com celular que não roda nada **também** produz um dado — o mais importante deles.

**Pergunta sobre o futuro.** *A IA local é uma capacidade do parque instalado ou um privilégio de quem tem aparelho caro — e a degradação sob uso contínuo é detalhe de engenharia ou limite de projeto?* O mapa inteiro depende dessa resposta: se a maioria da turma roda com queda pequena, a disrupção 3 enfraquece e os prazos de `e6` estão pessimistas; se a maioria não roda ou derrete, o mapa está otimista e "IA local" é, por ora, nome de um recurso de aparelho premium.

**Tecnologia emergente usada.** WebGPU como runtime de inferência na aba; WebLLM (ou LlamaWeb) carregando um modelo quantizado; a API de modelo embutida do navegador como comparação de disponibilidade. Nada disso exige servidor, chave, conta ou verba — que é precisamente a tese em teste.

**Atividade da turma (uma aula, ~50 min).** 10 min: a página é aberta por todos simultaneamente e a coleta roda sozinha. 10 min: monta-se o gráfico ao vivo — eixo x, os aparelhos ordenados por preço estimado; eixo y, tokens por segundo sustentados na iteração 20, com uma barra cinza para "não rodou". 15 min: a turma se divide e cada metade defende uma leitura do mesmo gráfico (a otimista: "é questão de tempo, o parque se renova"; a pessimista: "esta curva é a desigualdade, e ela não se renova"). 15 min: comparação do gráfico da turma com os números publicados — 40,49 → 23,67 tok/s do iPhone 16 Pro e 10,38 tok/s do Galaxy S24 Ultra sob carga sustentada [7], e 4–17 tok/s em GPU móvel no navegador [6]. A pergunta final é metodológica: por que quase toda a comunicação de produto usa o número de pico?

**Resultado que mudaria de ideia.** Critérios declarados antes da coleta, para não haver ajuste depois: **(a)** se **mais de 70%** dos aparelhos da turma rodarem o modelo e a queda mediana entre a 1ª e a 20ª iteração for **menor que 15%**, a disrupção 3 está superdimensionada neste mapa e os prazos de `e5` e `e6` devem ser adiados ou rebaixados a sinal fraco; **(b)** se **menos de 40%** rodarem, os efeitos `e3` e `e4` estão cedo demais — porque não existe recurso de plataforma sem plataforma no bolso das pessoas — e o mapa deve puxar tudo para depois de 2031; **(c)** se a queda mediana passar de **35%**, a formulação da disrupção 3 se confirma como restrição de projeto e não de engenharia, e o orçamento de energia deixa de ser especulação para virar requisito. Em qualquer um dos três casos o mapa é editado antes de ser apresentado, e a edição é registrada.

## 11. Fontes

1. **Apple Machine Learning Research — "Introducing the Third Generation of Apple's Foundation Models" (08/06/2026).** `https://machinelearning.apple.com/research/introducing-third-generation-of-apple-foundation-models` — sustenta: AFM 3 Core com 3B de parâmetros e preferência de 45,6% contra 23,3% da linha de base de 2025; AFM 3 Core Advanced com 20B esparsos (1–4B ativos) via *Instruction-Following Pruning*, multimodal em áudio e imagem; 28+ localidades. Usado nas seções 3, 4 (disrupção 2) e 6 (sinal fraco 3). Confiabilidade: **alta** (primária, do fabricante; não divulga bits de quantização nem latência).
2. **Apple Newsroom — "Apple's Foundation Models framework unlocks new intelligent app experiences" (29/09/2025).** `https://www.apple.com/newsroom/2025/09/apples-foundation-models-framework-unlocks-new-intelligent-app-experiences/` — sustenta: a formulação literal "AI inference that is free of cost", disponibilidade offline, e a lista de aplicativos de terceiros já em produção. Base da disrupção 2. Confiabilidade: **alta** (primária; é material de comunicação, logo a alegação de custo é declaração do fornecedor).
3. **Chrome for Developers — "The Prompt API" (documentação oficial).** `https://developer.chrome.com/docs/ai/prompt-api` — sustenta: estável no Chrome 138+; exigência de 22 GB livres, >4 GB de VRAM ou 16 GB de RAM com 4+ núcleos; **Android, iOS e ChromeOS fora de Chromebook Plus não suportados**; modelo Gemini Nano baixado pelo navegador, sem envio de dados ao Google. Base do argumento do portão. Confiabilidade: **alta** (primária).
4. **Microsoft — repositório oficial do BitNet / bitnet.cpp.** `https://github.com/microsoft/BitNet` — sustenta: ganhos de 2,37×–6,17× em x86 com 71,9%–82,2% menos energia, 1,37×–5,07× em ARM com 55,4%–70,0%; cronologia de 2026 (kernels de CPU em 15/01, *embeddings* de 0,6B e 270M em 20/07, VibeASR.cpp em 23/07); ausência de suporte ARM nos *embeddings*. Confiabilidade: **alta** (primária, do fabricante; os ganhos são autorrelatados).
5. **Hugging Face — ficha do modelo `microsoft/bitnet-b1.58-2B-4T`.** `https://huggingface.co/microsoft/bitnet-b1.58-2B-4T` — sustenta: 0,4 GB não-embedding, 29 ms de decodificação em CPU, 0,028 J estimados, contra 2 GB / 48 ms / 0,258 J do LLaMA 3.2 1B; e o alerta de que sem o `bitnet.cpp` não há ganho de eficiência. Confiabilidade: **alta** (primária; comparação contra uma única linha de base escolhida pelo próprio autor).
6. **arXiv:2605.20706 — Levine, Sharma, Jain, Ramesh, Chen, Abbas, Contini e Sorensen (UC Santa Cruz e Microsoft Research), "Llamas on the Web: Memory-Efficient, Performance-Portable, and Multi-Precision LLM Inference with WebGPU" (20/05/2026).** `https://arxiv.org/html/2605.20706v1` — sustenta: >100 tok/s em GPU de topo, 30–80 em GPU mediana, **4–17 tok/s em GPU móvel**; 29–33% menos memória (49% sobre WebLLM, 41% sobre Transformers.js); 1,5–2,5× mais lento que nativo na decodificação; limites de memória por aba e ausência de portabilidade de desempenho. Confiabilidade: **alta** (preprint com medição detalhada e afiliação institucional verificável; não revisado por pares).
7. **arXiv:2603.23640 — Tummalapalli, Arayakandy, Pal e Kundan (Conscious Engines), "LLM Inference at the Edge: Mobile, NPU, and GPU Performance Efficiency Trade-offs Under Sustained Load" (07/06/2026).** `https://arxiv.org/html/2603.23640v2` — sustenta: iPhone 16 Pro de 40,49 para 23,67 tok/s; Galaxy S24 Ultra estabilizando em 10,38 tok/s; Raspberry Pi 5 + Hailo-10H em 6,914 tok/s com variação quase nula; conclusão de que a gestão térmica supera a computação de pico. Base da disrupção 3 e do experimento. Confiabilidade: **média** (preprint, laboratório pequeno, quatro aparelhos, um único modelo — amostra estreita para a força da conclusão).
8. **arXiv:2607.05475 — Cai et al., "Is Your NPU Ready for LLMs? Dissecting the Hidden Efficiency Bottlenecks in Mobile LLM Inference" (07/2026).** `https://arxiv.org/html/2607.05475v1` — sustenta: 15× entre implementações no mesmo silício (GENIE 1.463,7 tok/s × llama.cpp 115,1 no prefill); queda de 20–24% na decodificação com contexto de 16 → 4.096; NPU consumindo 2–4× mais energia que a CPU na decodificação (até 4,3×10⁵ μJ/token); CPU hospedeiro em até 30% da energia do sistema. Confiabilidade: **média** (preprint não revisado; resultado contraintuitivo que ainda não foi replicado por terceiros).
9. **arXiv:2606.25519 — "Quantization Inflates Reasoning: Token Inflation as a Hidden Cost of Low-Bit Reasoning Models" (v2, 2026).** `https://arxiv.org/abs/2606.25519v2` — sustenta: quantização INT4/INT3 mantém acurácia mas alonga a cadeia de raciocínio, anulando parte do ganho por token; recomendação de reportar uso de tokens de raciocínio junto com acurácia. Usado no teste adversarial e na disrupção 3. Confiabilidade: **média** (preprint).
10. **Google Developers Blog — "On-device GenAI in Chrome, Chromebook Plus, and Pixel Watch with LiteRT-LM" (24/09/2025).** `https://developers.googleblog.com/on-device-genai-in-chrome-chromebook-plus-and-pixel-watch-with-litert-lm/` — sustenta: LiteRT-LM como runtime de Gemini Nano em Chrome, Chromebook Plus e Pixel Watch; suporte a CPU, GPU e NPU; clonagem de sessão <10 ms no relógio. Confiabilidade: **alta** (primária; não publica métricas de desempenho, o que é em si um dado).
11. **Android Developers Blog — "Announcing Gemma 4 in the AICore Developer Preview" (02/04/2026).** `https://android-developers.googleblog.com/2026/04/AI-Core-Developer-Preview.html` — sustenta: variantes E4B e E2B (3× mais rápida), base do Gemini Nano 4; execução restrita a aparelhos com aceleradores Google/MediaTek/Qualcomm; fora deles, CPU "not representative of final production performance". Confiabilidade: **alta** (primária).
12. **MLC — repositório do WebLLM.** `https://github.com/mlc-ai/web-llm` — sustenta: inferência integralmente no navegador sobre WebGPU, "no server support", API compatível com a da OpenAI, e o custo alto do primeiro carregamento sem cache. Confiabilidade: **alta** (primária; sem benchmarks publicados no README, o que limita o que dá para afirmar).
13. **Gibson Dunn — "EU Product Liability Directive: Responding to Software, AI and Complex Supply Chains" (23/03/2026).** `https://www.gibsondunn.com/eu-product-liability-directive-responding-to-software-ai-and-complex-supply-chains/` — sustenta: Diretiva (UE) 2024/2853 com transposição até 09/12/2026; cobertura de software autônomo e elementos digitais; falta de atualização de segurança como defeito; quem modifica substancialmente vira fabricante; presunções a favor do autor da ação diante de complexidade técnica. Confiabilidade: **média** (análise de escritório de advocacia, secundária em relação ao texto legal, mas especializada e datada).
14. **Canaltech — "Samsung prepara celular mais barato de 2026 no Brasil; Anatel liberou" (20/08/2026).** `https://canaltech.com.br/smartphone/samsung-prepara-celular-mais-barato-de-2026-no-brasil-anatel-liberou/` — sustenta a nota sobre o Brasil: Galaxy A08 4G homologado na Anatel, MediaTek Helio G99, tela 720p, até 8 GB de RAM, faixa de R$ 1.000, sem menção a IA. Confiabilidade: **média** (imprensa de tecnologia, sobre aparelho ainda não lançado; o preço é expectativa, não valor praticado).

**Lacunas declaradas (o que eu não consegui ancorar e por isso não afirmei).** (i) Nenhum dado aberto e confiável sobre tamanho de adoção da camada aberta (Ollama, GGUF, LM Studio) — os números que circulam vêm de blogs secundários e foram descartados. (ii) Nenhuma fonte primária sobre a distribuição do parque instalado brasileiro por RAM, disco livre e presença de acelerador — que é exatamente o dado de que o galho `e6` precisaria. (iii) Nenhuma medição independente que replique o resultado de energia da NPU [8]. (iv) Nenhum caso jurídico já decidido sobre responsabilidade por saída de modelo embarcado.

## 12. Anexo — o levantamento bruto

### 12.1 Respostas da entrevista de recorte (Etapa 1), coladas sem edição

> - Tema: "IA local: no dispositivo e no navegador" (tema 16 de 19 da disciplina; família "Criação e plataforma").
> - Horizonte: 2031. Público: quem projeta mídia e interação. Recorte: global, com uma nota sobre o Brasil.
> - Descartado de início: o que já é comum em produto de massa (a régua da disciplina); nenhuma outra exclusão.
> - Disrupção suspeita: nenhuma — descubra. Viés: neutro. Ideias óbvias a excluir: as que servem para qualquer tema.
> - O que me faria mudar de ideia: evidência de que a adoção já passou da maioria inicial (Rogers) ou de que a tecnologia não rompe nada (só melhora o que existe).
> - Profundidade: três ordens. Modo: a partir de uma inovação/tema, não de um setor.
> - Zona de interesse do autor: "Criação e plataforma". Login do autor: kvv. Skill usada: futurizacao-kvv.
> - Busca na web: use WebSearch e WebFetch de verdade; só cite o que abriu. Não invente fontes.
> - Não faça perguntas de volta. Não pare para pedir confirmação. Se algo não estiver definido, assuma e declare.

**Observação sobre a Etapa 1.** A skill manda interromper a execução e aguardar as respostas do usuário ("BLOQUEIO ABSOLUTO"). Nesta rodada não havia usuário disponível para responder, e as seis respostas foram fornecidas de antemão pelo enunciado da rodada. O bloqueio foi, portanto, satisfeito por antecipação e não por espera — registrado aqui porque é um desvio de execução do método, ainda que autorizado.

**Pressupostos assumidos e declarados (o que o enunciado não definiu):**
- *Público* interpretado como "quem projeta mídia e interação", incluindo designers de produto, desenvolvedores de front-end e criadores de conteúdo interativo — não reguladores, não executivos.
- *"Nota sobre o Brasil"* interpretada como uma linha argumentativa presente na seção 3 (parque instalado), na disrupção 3, no galho `e6` e nos três cenários — e não como uma seção separada.
- *Vetores tecnológicos de interesse* (pergunta 6 da entrevista) não foram informados; assumidos a partir da lista "Para a sua IA" do enunciado do tema, sem acrescentar nenhum vetor externo.
- *"Só cite o que abriu"* aplicado de forma estrita: apenas páginas efetivamente carregadas por WebFetch entraram na seção 11. Resultados de busca que não foram abertos serviram para localizar fontes, jamais para sustentar afirmação.

### 12.2 Log das buscas (o que foi procurado, nesta ordem)

1. `BitNet b1.58 1-bit LLM Microsoft bitnet.cpp 2026`
2. `Apple Foundation Models framework on-device 3 billion parameters developer`
3. `Chrome built-in AI Prompt API Gemini Nano stable 2026 web platform`
4. `WebLLM WebGPU browser inference 2026 MLC transformers.js local model`
5. `Google AI Edge LiteRT-LM Gemini Nano Android AICore developer on-device 2026`
6. `NPU Copilot+ PC 40 TOPS adoption 2026 developers actually using NPU`
7. `r/LocalLLaMA 2026 local model adoption survey Ollama downloads growth`
8. `quantization degrades reasoning small models limits arXiv 2026 "on-device" evaluation gap`
9. `Brasil smartphone entrada 4GB RAM 2026 IA no dispositivo Anatel mercado celulares venda`
10. `EU AI Act on-device model provider liability who is responsible model update device manufacturer 2026`
11. `on-device LLM battery thermal throttling energy cost smartphone inference measurement study 2026`
12. `local AI agent personal computer server privacy 2026 "local-first" AI product market shift subscription`

**Páginas efetivamente abertas (14 bem-sucedidas, 1 falha):** Apple ML Research (AFM 3); Apple Newsroom (Foundation Models framework); Chrome for Developers (Prompt API); GitHub microsoft/BitNet; Hugging Face (bitnet-b1.58-2B-4T); arXiv 2605.20706 (LlamaWeb); arXiv 2603.23640v2 (carga sustentada); arXiv 2607.05475v1 (NPU); arXiv 2606.25519v2 (inflação de tokens); Google Developers Blog (LiteRT-LM); Android Developers Blog (Gemma 4 / AICore); GitHub mlc-ai/web-llm; Gibson Dunn (PLD 2024/2853); Canaltech (Galaxy A08 4G). **Falha:** `https://arxiv.org/pdf/2504.12285` (relatório técnico do BitNet b1.58 2B4T) retornou conteúdo ilegível — não citado.

### 12.3 Etapa 2 — candidatas a disrupção-raiz avaliadas, e o destino de cada uma

| # | Candidata | Veredito | Motivo |
|---|---|---|---|
| 1 | Aritmética ternária (1,58 bit) treinada nativamente | **ACEITA** (disrupção 1) | Rompe o acoplamento qualidade × largura de banda de memória; muda a classe de hardware elegível; incompleta (sem silício, sem ARM nos *embeddings*, sem escala de fronteira) |
| 2 | Inferência como recurso de SO/navegador, com bifurcação emprestado × carregado | **ACEITA** (disrupção 2) | Dissolve chave, fatura, escolha de modelo, versão e contrato de uma vez; cria ecossistema novo; incompleta (portão de hardware, governança indefinida, sem cache compartilhado) |
| 3 | Transferência do custo de inferência para bateria, disco e silício do usuário | **ACEITA** (disrupção 3) | Rompe a contabilidade do setor e uma suposição de projeto nunca explicitada; incompleta (sem instrumentação, sem régua de parque, sem norma) |
| 4 | Chamar API de modelo na nuvem | **RECUSADA** | Madura pela régua da própria disciplina; não muda o lugar da inferência |
| 5 | Rodar modelo pequeno em servidor próprio | **RECUSADA** | Madura; é mudança de fornecedor, não de camada |
| 6 | Quantização 4 bits + GGUF + llama.cpp/Ollama no laptop | **RECUSADA** | Amplamente adotada desde 2023; é estado da arte, e o comportamento que habilita já existe em escala sem reorganizar ecossistema |
| 7 | "IA no celular" como recurso de consumo (resumo, borracha mágica, botão do assistente) | **RECUSADA** | Produto de massa embarcado; melhoria incremental de recurso existente |
| 8 | Existência do WebGPU nos navegadores | **RECUSADA** | Infraestrutura já entregue; objeto do tema 15; aqui é condição de contorno, não ruptura |
| 9 | Presença de NPU no chip | **RECUSADA** | Hardware instalado não é ruptura por si — e a evidência de 2026 mostra que nem é o caminho mais eficiente na decodificação [8] |
| 10 | Agente pessoal offline que aprende com o usuário | **RECUSADA como raiz, mantida como efeito** | É consequência de 1 + 2, não causa; aparece em `e2.2.2` e no wildcard |
| 11 | Computador pessoal como servidor de IA pessoal (linhagem do `Termly`) | **RECUSADA como raiz, mantida como sinal fraco** | Ainda é nicho de entusiasta; não tem massa para ser raiz, mas é o vetor do wildcard |
| 12 | Aprendizado federado / treino no aparelho | **RECUSADA** | Fora do recorte: o tema é **inferência** no dispositivo, não treino; e não houve fonte aberta que sustentasse a maturidade |

### 12.4 Efeitos cortados da roda (rodadas descartadas)

- *"Modelos locais matam o mercado de API"* — cortado por ser a conclusão óbvia que serve a qualquer tema de descentralização, e por contradizer a evidência de que o modelo embarcado é bom para tarefa fechada e não para o resto [1]. Reescrito, mais estreito, como `e3.1`.
- *"Privacidade vira o principal argumento de venda de software"* — cortado por genericidade: vale para qualquer tema de dados e não decorre especificamente da inferência local. A parte verificável sobreviveu como `e4.2.1` (o rótulo auditável).
- *"O Brasil fica para trás"* — cortado por ser juízo, não efeito. Substituído pela formulação operacional de `e6.1` (dois caminhos simultâneos) e `e6.1.1` (a quem a economia efetivamente chega).
- *"Surgem lojas de modelos como surgiram lojas de aplicativos"* — cortado: nenhuma fonte aberta sustenta o movimento, e o Hugging Face já cumpre essa função sem ser loja. O que sobrou de defensável virou `e4.1.1` (cache de pesos como infraestrutura).
- *"A IA local resolve alucinação porque o modelo é do usuário"* — cortado por ser falso: nada na literatura aberta liga localidade a veracidade, e a evidência aponta o contrário para modelos pequenos e quantizados [9].
- *"Empresas abandonam a nuvem"* — cortado por extrapolação; o padrão que as próprias fontes descrevem é híbrido, e isso foi para o cenário provável.
- *Quarto nível de efeitos* (`e3.1.1.1`: "o contrato de trabalho de quem projeta passa a incluir cláusula de responsabilidade por resposta de modelo") — cortado por disciplina do método: a skill e o ESTUDO.md do autor fixam três níveis, porque a incerteza cresce exponencialmente a partir do terceiro e o quarto vira especulação sem lastro.

### 12.5 Log das iterações do documento

- **Iteração 1.** Rascunho com quatro disrupções-raiz: ternário, plataforma, WebGPU portátil e custo transferido. Cortada para três, conforme o formato exige. A disrupção "WebGPU portátil" foi absorvida pela disrupção 2 como a segunda perna da bifurcação — decisão tomada porque ela só existe **em oposição** ao modelo emprestado; separá-las produziria dois galhos redundantes.
- **Iteração 2.** Auditoria de números contra a lista do que foi efetivamente aberto. Removidos os percentuais de cobertura de WebGPU, as métricas de download do Ollama e a contagem de modelos GGUF (ver seção 8, itens 2 e 5).
- **Iteração 3.** Correção do par velocidade/energia da disrupção 1, que estava arredondado para "10× e 1/10" (seção 8, item 3).
- **Iteração 4.** Calibração da roda. Contagem verificada: 3 raízes, 6 efeitos de 1ª ordem, 12 de 2ª, 18 de 3ª. Distribuição de confiança conferida: 1ª ordem — alta 1, média 4, baixa 1; 2ª ordem — alta 0, média 7, baixa 5; 3ª ordem — alta 0, média 4, baixa 14. Cinco efeitos de 3ª ordem com prazo além de 2031, declarados no comentário da seção 5.
- **Iteração 5.** Teste adversarial escrito **depois** da roda e não antes, de propósito, para que atacasse o mapa que existe e não o mapa imaginado. Consequência direta: o contra-wildcard (inferência local condicionada à conta) foi acrescentado à seção 6, porque o teste expôs que o mapa só imaginava desfechos em que a localidade aumenta a autonomia.
- **Iteração 6.** Critérios de falseamento do experimento (70%/15%, 40%, 35%) fixados **antes** de qualquer coleta e escritos no documento, para impedir ajuste posterior ao resultado.

### 12.6 Nota de método

O mapa segue a Roda dos Futuros de Glenn com parada no terceiro nível, pelo motivo registrado no `ESTUDO.md` deste autor: a incerteza cresce de forma exponencial à medida que a análise se afasta do evento central. O comentário em prosa da seção 5 aponta explicitamente o que a roda **não** consegue representar — a relação de antídoto entre `e1` e `e6` — e indica a Matriz de Impacto Cruzado como o instrumento que a representaria. Nenhum posicionamento em Hype Cycle foi usado: o modelo não tem validação empírica nem critério quantitativo público, e usá-lo aqui daria aparência de precisão temporal a uma leitura que é qualitativa.
