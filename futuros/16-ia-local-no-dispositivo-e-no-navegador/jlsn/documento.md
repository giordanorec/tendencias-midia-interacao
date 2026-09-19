---
tema: IA local — no dispositivo e no navegador
slug: ia-local-no-dispositivo-e-no-navegador
autor_login: jlsn
zona_de_interesse: Sistemas de Informação
data: 2026-09-18
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: Global, com nota sobre o Brasil
disrupcoes_raiz: 3
efeitos_ordem_1: 9
efeitos_ordem_2: 18
efeitos_ordem_3: 12
tecnologias_citadas: ["BitNet b1.58", "bitnet.cpp", "llama.cpp", "quantização ternária", "quantização de baixo bit", "WebGPU", "WebLLM", "Transformers.js", "Gemini Nano", "AICore", "ML Kit GenAI", "Apple Foundation Models", "AFM 3 Core", "LiteRT", "NPU", "Ollama", "LM Studio", "GGUF", "Phi", "Gemma", "Qwen"]
fontes: 9
confianca: media
experimento: Aba sem rede — o mesmo produto rodando local e na nuvem, lado a lado
skill_usada: futurizacao-jlsn
publico_ok: false
---

## 1. Resumo

A inferência está saindo do data center e entrando no aparelho de quem usa. Três coisas destravaram isso quase ao mesmo tempo: modelos ternários de 1,58 bit com kernels próprios de CPU, que a Microsoft mede entre 1,37× e 6,17× mais rápidos e com 55% a 82% menos energia; WebGPU disponível nos quatro navegadores principais desde 2025, o que faz da aba um host de modelo sem instalação; e o modelo embutido no sistema operacional — AICore no Android, Foundation Models na Apple —, distribuído e atualizado pelo fabricante. A consequência econômica é direta: depois do download, a chamada custa zero, e o custo por token deixa de ser o eixo que organiza o design de produto. A consequência política é menos confortável: se o modelo vem com o aparelho, quem escolhe o modelo é quem vende o aparelho, e a atualização silenciosa do sistema passa a alterar o comportamento de produtos de terceiros. Até 2031 o cenário mais provável não é a nuvem morrer, é a inferência virar decisão de arquitetura — local por padrão, nuvem por exceção declarada. O mapa inteiro depende de uma premissa falseável: a de que modelos pequenos e muito quantizados continuam melhorando. Há evidência publicada de que a quantização agressiva pode piorar exatamente nos modelos treinados com mais dados.

## 2. O tema

IA local é rodar o modelo no aparelho de quem usa — celular, laptop comum, aba do navegador — em vez de chamar uma API remota. Não é "modelo pequeno no meu servidor", que já é maduro e continua sendo nuvem do ponto de vista de quem interage. O objeto aqui é a inferência acontecendo do lado de cá: sem chave de API, sem custo por chamada, sem o dado saindo do dispositivo, sem ninguém podendo desligar.

Onde isso encosta em mídia e interação: em três lugares, todos de projeto, nenhum de infraestrutura.

O primeiro é a latência. Modelo local responde sem ida e volta de rede, o que torna viável interação contínua — texto que se reescreve enquanto a pessoa digita, legenda que acompanha a fala, visão computacional sobre a câmera em tempo real. Coisas que na nuvem são caras por chamada e lentas por natureza viram, localmente, loop de interface.

O segundo é o custo marginal zero. Interface desenhada para IA cara é econômica no uso do modelo: pede confirmação, agrupa pedidos, mostra spinner, cobra assinatura. Interface desenhada para IA gratuita pode chamar o modelo a cada tecla. A régua de design muda de "quantas chamadas isso gasta" para "quanto isso esquenta o aparelho e quanto de bateria consome" — que é uma régua física, não financeira.

O terceiro é a confiança. Produto que promete não enviar nada para fora pode finalmente cumprir a promessa de forma verificável — o usuário pode desligar a rede e o produto continua funcionando. Isso é um argumento de interface, não de compliance: "desligue o Wi-Fi e teste" é uma demonstração que nenhuma política de privacidade substitui.

Merece um mapa porque a mudança não é de desempenho, é de topologia. Quando o modelo muda de lugar, mudam junto o modelo de negócio, a cadeia de responsabilidade pela saída e a definição de quem é o dono da inteligência que a pessoa usa todo dia.

## 3. Onde isso está hoje

**O que existe e funciona.**

O `bitnet.cpp`, framework oficial da Microsoft para modelos de 1 bit, está publicado e ativo — a última atualização listada no repositório é de 23/07/2026, e a versão 1.0 saiu em 17/10/2024. Os números que ele reporta: aceleração de 1,37× a 5,07× em CPUs ARM com redução de energia de 55,4% a 70,0%; e de 2,37× a 6,17× em x86, com redução de 71,9% a 82,2%. Os modelos oficialmente suportados são o BitNet-b1.58-2B-4T (2,4 bilhões de parâmetros) e dois modelos de embedding, de 600M e 270M. É pouco, e é o ponto: o framework é real, o catálogo é estreito.

WebGPU deixou de ser experimento. Chrome e Edge lançaram suporte em abril de 2023, Safari em junho de 2025 (Safari 26) e Firefox em julho de 2025 (Firefox 141). Ou seja: desde o segundo semestre de 2025 existe uma API de computação em GPU disponível nos quatro navegadores principais. O WebLLM, da MLC, é o motor que se apoia nisso — "traz a inferência de modelos de linguagem diretamente aos navegadores com aceleração de hardware" — e roda famílias como Llama 3, Phi 3, Gemma, Mistral e Qwen dentro da aba, sem servidor.

Nos sistemas operacionais, o modelo virou serviço do sistema. No Android, o Gemini Nano roda dentro do AICore, que segundo a documentação do Google "serve como a interface entre o seu app e o modelo Gemini Nano, gerenciando atualizações do modelo e segurança enquanto aproveita o hardware do dispositivo", e que "é construído para isolar cada requisição e não armazena nenhum registro dos dados de entrada nem das saídas". As APIs ML Kit GenAI expõem seis capacidades fechadas: prompt, sumarização, revisão de texto, reescrita, descrição de imagem e transcrição de fala. Na Apple, a terceira geração dos Foundation Models (página atualizada em 09/09/2026) traz o AFM 3 Core, modelo denso de 3 bilhões de parâmetros, e o AFM 3 Core Advanced, de 20 bilhões com ativação esparsa — "ativando apenas 1 a 4 bilhões de parâmetros por vez" —, com treinamento consciente de quantização e avaliação em mais de vinte locales, incluindo o português.

**O que existe e não funciona bem.**

A qualidade do modelo local ainda é a qualidade de um modelo pequeno. O BitNet oficial tem 2,4B de parâmetros; o modelo da Apple, 3B. São modelos bons para sumarizar, reescrever, classificar e descrever — e frágeis para raciocínio longo, código extenso e qualquer coisa que dependa de conhecimento de cauda longa. Quem promete "agente autônomo local" hoje está prometendo além do que o catálogo entrega.

O desempenho é do aparelho, não do produto. A própria documentação do Google avisa: "embora isso remova a latência de rede, a velocidade de inferência depende do hardware do dispositivo". Isso reintroduz, em 2026, um problema que a web havia terceirizado para a nuvem há quinze anos — a variância de hardware do usuário final volta a ser variável de projeto.

E o WebGPU não é uniforme. Safari chegou depois e se comporta de forma diferente do Chrome em partes da API; bibliotecas como WebLLM e Transformers.js existem em parte para absorver isso. "Disponível nos quatro navegadores" não significa "idêntico nos quatro".

**Quem está construindo.**

Microsoft (BitNet, Phi, bitnet.cpp), Apple (AFM 3 / Foundation Models framework), Google (Gemini Nano, AICore, ML Kit GenAI, LiteRT), o ecossistema llama.cpp/GGUF e seus embrulhos de uso cotidiano (Ollama, LM Studio, Jan), e a MLC com WebLLM do lado do navegador. Do lado do hardware, o vetor é a NPU: a Counterpoint Research projeta, em relatório de título explícito, que os "AI Advanced PCs" ultrapassam metade dos embarques globais em 2026, com laptops com NPU tornando-se mainstream.

**Contrapeso importante, e é o mais interessante do levantamento.** A premissa técnica do mapa tem um artigo contra ela. "Low-Bit Quantization Favors Undertrained LLMs" (arXiv 2411.17691, aceito na ACL 2025) mede mais de 1.500 checkpoints quantizados e conclui que a degradação induzida por quantização é tolerável em modelos subtreinados, mas que "o desempenho sob quantização de baixo bit dos modelos futuros, que devem ser treinados com mais de 100 trilhões de tokens, pode NÃO ser desejável". Em português claro: a quantização agressiva funciona melhor justamente nos modelos que têm menos a perder. Se a indústria continuar treinando por mais tempo com mais dados, o truque do 1 bit pode estar operando na direção contrária da fronteira.

**Nota Brasil.** Aqui o gargalo não é o modelo, é a memória. A crise de DRAM de 2025-2026 encareceu componentes de 40% a 50% no fim de 2025, e estima-se aumento de 30 a 50 dólares no custo de produção de um smartphone apenas por causa de memória — com fabricantes voltando a cortar RAM em modelos de entrada. Num mercado em que a base instalada é dominada por aparelhos de entrada e intermediários, "IA local" e "aparelho barato" estão, por enquanto, empurrando em sentidos opostos. Isso torna o navegador — que roda no laptop de trabalho, no equipamento da escola, na lan house — um caminho mais provável para o Brasil do que o app nativo com modelo embutido.

## 4. As disrupções-raiz

### D1 — A inferência de qualidade útil passa a ter custo marginal zero no aparelho de quem usa

**O que rompe.** Rompe a equação que sustenta quase todo produto de IA desde 2023: cada interação custa dinheiro a quem oferece o produto, logo o produto precisa cobrar, racionar ou anunciar. Se o modelo roda no dispositivo, o custo é de download e de bateria, pago uma vez e pelo usuário. Desaparece a métrica que organiza preço, funil e desenho de interface.

**Por que agora e não há cinco anos.** Porque a combinação só fechou agora. Quantização ternária com kernels dedicados entregou, em medição da própria Microsoft, até 6,17× de aceleração e 82% menos energia em CPU comum — sem GPU. Em paralelo, a NPU deixou de ser diferencial de topo de linha e passou a ser item de catálogo, com projeção de mais da metade dos PCs embarcados em 2026. Em 2021 nada disso existia junto: havia modelo grande e havia dispositivo fraco, sem ponte.

**O que falta acontecer.** Falta catálogo. O framework de 1 bit tem hoje três modelos oficiais, o maior com 2,4B. Falta que uma família de modelos ternários acompanhe a fronteira em vez de ficar duas gerações atrás — e o artigo da ACL sobre quantização diz que isso pode não acontecer. Falta também resolver o custo de RAM, que é o que impede o aparelho barato de hospedar o modelo.

### D2 — O runtime deixa de exigir instalação: a aba do navegador vira host de modelo

**O que rompe.** Rompe a fronteira entre "site" e "aplicativo de IA". Até aqui, rodar modelo local exigia instalar algo — e instalar é, na prática, um filtro que elimina a maior parte do público. Com WebGPU nos quatro navegadores, um link passa a ser suficiente para alguém usar um modelo que roda inteiramente na máquina dele. Rompe também a premissa de que "web" significa "seus dados vão para um servidor".

**Por que agora e não há cinco anos.** Porque a data é verificável: Chrome e Edge em abril de 2023, Safari em junho de 2025, Firefox em julho de 2025. Antes disso, computação em GPU no navegador era WebGL torcido para fins que não eram os dele. O WebLLM já entrega, sobre essa base, Llama 3, Phi 3, Gemma, Mistral e Qwen dentro da aba.

**O que falta acontecer.** Falta resolver o download: alguns gigabytes por modelo, com cache que o navegador pode descartar, é uma experiência ruim em conexão instável — o que é exatamente o caso de boa parte do Brasil. Falta paridade real entre implementações de WebGPU. E falta uma convenção de distribuição: hoje cada site baixa o seu modelo, sem compartilhar o que o vizinho já trouxe.

### D3 — O modelo vira parte do sistema operacional, distribuído e governado por quem vende o aparelho

**O que rompe.** Rompe a relação direta entre quem faz o produto e o modelo que ele usa. Quando o desenvolvedor chama uma API do sistema — ML Kit GenAI no Android, Foundation Models na Apple —, ele não escolhe o modelo, não escolhe a versão e não controla a política de segurança aplicada. O Google descreve o AICore como quem "gerencia atualizações do modelo e segurança"; a Apple descreve a terceira geração como uma plataforma híbrida por trás de uma única API de sessão. O fabricante do aparelho vira o intermediário obrigatório entre o produto e a inteligência.

**Por que agora e não há cinco anos.** Porque o modelo cabe. Três bilhões de parâmetros com treinamento consciente de quantização rodam com folga em silício de celular de 2026; em 2021 não rodavam em nada que coubesse no bolso. E porque a distribuição foi resolvida do jeito que só fabricante de SO resolve: o modelo desce pelo sistema, não pelo app, e não pesa no orçamento de disco de cada aplicativo.

**O que falta acontecer.** Falta transparência de versão — hoje o produto não sabe, de forma estável, com qual modelo está falando amanhã. Falta jurisprudência sobre quem responde pela saída. E falta uma alternativa viável de igual conveniência fora do canal do fabricante: o ecossistema GGUF/llama.cpp existe, mas cobra do desenvolvedor exatamente o que o AICore lhe poupa.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: D1 — Inferência de qualidade útil com custo marginal zero no aparelho do usuário
    efeitos:
      - id: e1
        ordem: 1
        efeito: Produtos de mídia passam a chamar o modelo continuamente, e não sob demanda, porque cada chamada deixou de ter preço.
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A interface abandona o botão "gerar" e adota geração ambiente, que acontece enquanto a pessoa trabalha sem ela pedir.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Some a noção de "pedido à IA" como ato deliberado, e a autoria do que está na tela passa a ser indeterminável por inspeção.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Bateria e temperatura viram requisito de produto, com orçamento térmico negociado no design como hoje se negocia peso de página.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Surge uma métrica pública de consumo por interação, análoga ao selo de eficiência energética, cobrada por reguladores antes de por usuários.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A assinatura mensal deixa de se justificar por acesso ao modelo e passa a se justificar por dado, sincronização e curadoria.
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Fornecedores de IA migram a cobrança para o que não cabe no dispositivo — contexto longo, dado proprietário, garantia contratual de resultado.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: A nuvem de IA se reposiciona como cartório — vende prova, auditoria e responsabilidade, não capacidade de cálculo.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Aplicativos pagos de uso único reaparecem, porque um produto com custo marginal zero volta a poder ser vendido de uma vez.
            sinal: fraco
            prazo: 2029
            confianca: baixa
      - id: e3
        ordem: 1
        efeito: A capacidade do aparelho vira eixo de desigualdade de experiência mais forte do que a velocidade da conexão.
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Produtos passam a ter degradação graciosa por classe de hardware, com o mesmo aplicativo entregando funções diferentes em aparelhos diferentes.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: No Brasil e em mercados de aparelho de entrada, a nuvem volta a ser o caminho popular, invertendo o discurso de que local é o caminho democrático.
                sinal: medio
                prazo: 2030
                confianca: media
          - id: e3.2
            ordem: 2
            efeito: A alta do preço de memória atrasa a base instalada, e fabricantes cortam RAM em modelos de entrada enquanto anunciam IA no topo de linha.
            sinal: forte
            prazo: 2027
            confianca: alta

  - disrupcao: D2 — O navegador vira host de modelo, e rodar IA local deixa de exigir instalação
    efeitos:
      - id: e4
        ordem: 1
        efeito: Publicar um link passa a ser suficiente para distribuir um produto de IA que não envia nada para servidor nenhum.
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Ferramentas de autoria para jornalismo, saúde e jurídico migram para a aba, porque "não sai do seu computador" vira argumento demonstrável ao vivo.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Contratos de confidencialidade passam a exigir processamento local verificável, e o produto que só oferece nuvem é excluído da concorrência.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: A loja de aplicativos perde o monopólio de distribuição de IA, já que a aba entrega capacidade equivalente sem revisão nem comissão.
            sinal: fraco
            prazo: 2030
            confianca: baixa
      - id: e5
        ordem: 1
        efeito: O primeiro carregamento vira o novo gargalo de conversão, porque o usuário espera gigabytes antes de ver valor.
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Aparece uma camada compartilhada de cache de modelos entre sites, por CDN ou por API do navegador, para não baixar o mesmo peso duas vezes.
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Quem controla esse cache controla qual modelo está efetivamente disponível na web, e a neutralidade do navegador vira disputa regulatória.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: O design de espera é reinventado, com produtos entregando função degradada durante o download em vez de barra de progresso.
            sinal: medio
            prazo: 2028
            confianca: media
      - id: e6
        ordem: 1
        efeito: A aba passa a consumir GPU de forma sustentada, e o navegador precisa arbitrar entre abas que querem inferir ao mesmo tempo.
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Navegadores expõem permissão explícita de inferência, como já fazem com câmera e microfone, com indicador visível de uso.
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Surge abuso de inferência em segundo plano — publicidade e mineração de perfil rodando modelo na máquina do leitor sem que ele saiba.
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Métricas de web vitals ganham dimensão de custo computacional do cliente, e páginas passam a ser avaliadas pelo que gastam do usuário.
            sinal: fraco
            prazo: 2030
            confianca: baixa

  - disrupcao: D3 — O modelo vira parte do sistema operacional, governado por quem vende o aparelho
    efeitos:
      - id: e7
        ordem: 1
        efeito: Quem faz o produto deixa de escolher o modelo, e passa a programar contra uma API de sistema cuja versão o fabricante troca sozinho.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Atualização de sistema operacional vira evento de regressão de produto, com comportamento mudando sem uma linha de código ter sido alterada.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Equipes passam a manter suíte de avaliação própria contra o modelo do sistema, e teste de regressão de IA vira prática padrão de engenharia.
                sinal: medio
                prazo: 2030
                confianca: media
          - id: e7.2
            ordem: 2
            efeito: A política de segurança do fabricante vira política editorial de facto, definindo o que o produto de terceiros pode ou não gerar.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: Categorias inteiras de mídia — erótica, violenta, politicamente sensível — ficam inviáveis de produzir com o modelo do sistema, e migram para modelos avulsos.
                sinal: medio
                prazo: 2030
                confianca: media
      - id: e8
        ordem: 1
        efeito: A cadeia de responsabilidade pela saída fica ambígua entre fabricante do modelo, fabricante do aparelho e quem publicou o aplicativo.
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: A regulação resolve pelo lado de quem coloca no mercado, e quem publica o aplicativo responde mesmo sem ter treinado nem escolhido o modelo.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Pequenos estúdios evitam IA local justamente por medo de responsabilidade, e o resultado é concentração — o oposto da promessa de democratização.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: Produtos passam a declarar em interface qual modelo produziu cada saída e em que versão, como hoje se declara origem de dado pessoal.
            sinal: fraco
            prazo: 2030
            confianca: baixa
      - id: e9
        ordem: 1
        efeito: O modelo local acumula contexto pessoal que nunca sai do aparelho, e vira um ativo íntimo sem equivalente jurídico anterior.
        sinal: fraco
        prazo: 2029
        confianca: baixa
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: Trocar de aparelho passa a significar perder ou migrar uma memória adaptada à pessoa, e a portabilidade desse estado vira demanda de consumidor.
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: Disputas sobre herança, divórcio e apreensão passam a incluir o modelo pessoal, tratado ora como diário, ora como prova.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: O aparelho pessoal vira servidor de IA doméstico, acessado remotamente pelo dono a partir de outros dispositivos.
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e9.2.1
                ordem: 3
                efeito: A casa volta a ter um computador central, e a figura do administrador doméstico de sistemas reaparece trinta anos depois.
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

O bloco YAML organiza, mas esconde três coisas.

A primeira: os ramos não são independentes, eles brigam. D2 (navegador) e D3 (sistema operacional) apontam para lados opostos de governança. O caminho do navegador dispersa o controle — qualquer um publica um link com o modelo que quiser. O caminho do sistema operacional concentra — o fabricante define o catálogo, a versão e a política. A mesma disrupção-raiz técnica, inferência local, produz resultados políticos contrários dependendo de qual runtime vence. Um mapa que só somasse efeitos não mostraria isso.

A segunda: nem todo efeito de segunda ordem merecia um terceiro. Doze dos dezoito ramos de segunda ordem foram derivados até a terceira ordem; seis pararam. Isso é aplicação deliberada do critério de parada — quando o próximo passo deixa de ter âncora causal na disrupção central e vira especulação genérica sobre sociedade, a ramificação é interrompida em vez de preenchida. "Web vitals ganham dimensão de custo computacional do cliente" tem terceira ordem possível, mas a terceira ordem honesta ali seria sobre padrões web em geral, não sobre IA local.

A terceira: os prazos não são previsões, são apostas de ordenação. O que o mapa afirma com alguma segurança é a sequência — primeiro o fabricante assume o controle do modelo (e7, que já está acontecendo), depois a economia do produto se reorganiza (e2), e só então as consequências jurídicas e culturais aparecem (e8.1.1, e9.1.1). Ler o ano como data é usar a ferramenta para o que ela não serve.

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — o controle remoto do agente local.** Ferramentas que controlam, pelo celular e com criptografia de ponta a ponta, o agente que roda na máquina de casa. É pequeno hoje e sugere uma inversão grande: o computador pessoal deixando de ser onde se trabalha e virando onde a inteligência mora, acessada de fora. Se isso pegar, "IA local" deixa de significar "IA no aparelho que estou usando" e passa a significar "IA no meu aparelho, onde quer que eu esteja" — o que é uma definição bem diferente e muito mais confortável para quem tem celular fraco.

**Sinal fraco 2 — a cota gratuita instável como motor de adoção.** O gatilho documentado para pessoas migrarem para modelo local não foi privacidade nem custo: foi a cota de API prometida não bater com a cota entregue. Adoção que nasce de frustração operacional é mais aderente do que adoção que nasce de princípio, porque não depende de convicção. Vale observar se o padrão se repete em escala.

**Sinal fraco 3 — modelos de embedding minúsculos.** Os dois modelos de embedding do BitNet, de 600M e 270M, chamam menos atenção que o modelo generativo, mas busca semântica local sobre o acervo pessoal é provavelmente a primeira aplicação de IA local que a maioria das pessoas vai usar sem saber que está usando.

**Wildcard — um modelo ternário alcançar qualidade de fronteira num celular de entrada.** Probabilidade baixa, e a literatura empurra contra: o estudo da ACL 2025 sugere que quantização agressiva degrada mais justamente nos modelos mais bem treinados, que são os de fronteira. Mas se acontecer, o mapa inteiro acelera cinco anos de uma vez: a nuvem de inferência vira capacidade ociosa, a assinatura de IA vira produto sem lastro, e o eixo de disputa migra de quem tem cluster para quem tem canal de distribuição no aparelho. É o cenário em que D3 vence D2 de forma esmagadora, porque quem controla o aparelho passa a controlar tudo que importa.

**Contra-wildcard, igualmente raro e pouco comentado:** uma crise prolongada de memória encarecer o aparelho a ponto de a nuvem voltar a ser o caminho barato. A alta de 40% a 50% nos componentes no fim de 2025 e o retorno de modelos com menos RAM são o sinal precoce disso — e é um cenário em que a IA local vira, de novo, privilégio de quem tem equipamento caro.

## 7. Contra o próprio mapa

**Qual efeito é apenas extrapolação linear do presente.** O ramo e1 — "chamadas contínuas porque o custo é zero" — é a extrapolação mais preguiçosa do mapa. Ele pega uma restrição atual (custo por token), remove, e supõe que tudo que estava reprimido se solta. Mas custo de API nunca foi o único freio: há freio de atenção, de confiança, de utilidade marginal e de calor no aparelho. Produto que chama o modelo o tempo todo pode simplesmente ser irritante, e isso não tem nada a ver com preço. É plausível que a geração ambiente seja rejeitada por motivo de interface, não de economia — e o mapa não previu isso porque partiu do custo.

**Qual efeito assume velocidade de adoção irreal.** O e4.2 — a loja de aplicativos perdendo o monopólio de distribuição de IA para a aba até 2030. Isso subestima três coisas muito resistentes: o hábito, que não muda por capacidade técnica; o poder dos donos de plataforma, que já restringiram capacidade de navegador antes e podem fazer de novo; e o download de gigabytes, que na maior parte do mundo não é detalhe. A história da web como substituto do app nativo tem vinte anos de derrotas parciais. Marquei o efeito como sinal fraco e confiança baixa, mas mesmo assim ele provavelmente está otimista demais.

**Qual disrupção-raiz pode não se concretizar e derrubar o mapa inteiro.** D1, e há evidência publicada contra ela. Se o achado de que a quantização de baixo bit favorece modelos subtreinados se confirmar em escala, então a linhagem de 1 bit não acompanha a fronteira: ela fica presa a modelos pequenos, e a distância entre "o que roda no bolso" e "o que roda na nuvem" volta a crescer em vez de encolher. Nesse cenário, IA local sobrevive como camada de conveniência — sumarizar, transcrever, reescrever, buscar — e nada do que o mapa diz sobre modelo de negócio, censura de fabricante ou modelo pessoal herdável acontece, porque a nuvem continua sendo onde a inteligência que importa mora. D2 e D3 sobrevivem em versão reduzida; o resto cai.

**Qual foi o viés da análise.** Três, e vale nomeá-los. Primeiro, viés de fonte de fabricante: os números de desempenho mais fortes do mapa — 6,17×, 82% de economia de energia — são medições da Microsoft sobre a própria tecnologia, publicadas no repositório dela; não há aqui uma medição independente. Segundo, viés de disponibilidade: as evidências vieram de repositórios, documentação de fabricante e literatura de quantização, todas fontes de quem constrói a coisa, nenhuma de quem usa; não há dado de adoção real por usuário final neste mapa. Terceiro, viés de recorte: o pedido era global com nota sobre o Brasil, e a nota sobre o Brasil acabou sendo a parte mais pessimista do documento — o que provavelmente é correto, mas significa que a leitura "global" do mapa é, na prática, uma leitura de mercados com aparelho caro.

**Uma quarta autocrítica, fora do roteiro.** O mapa adota sem discutir a ideia de que rodar local é bom. Não é evidente: modelo que não recebe atualização é modelo que não recebe correção de vulnerabilidade nem de viés, e "ninguém pode desligar" também significa "ninguém pode consertar". Um modelo local desatualizado e enviesado, rodando offline no aparelho de milhões de pessoas, é um problema sem precedente e sem mecanismo de recall.

## 8. O que a máquina errou

*(seção a ser preenchida por quem ler)*

## 9. Três cenários para 2031

* **Provável:** A inferência vira decisão de arquitetura, não de fornecedor. Tarefa curta e sensível roda local; tarefa longa e difícil vai para a nuvem; o produto decide em tempo de execução e raramente avisa. Os modelos locais ficam entre 3B e 20B com ativação esparsa, bons para sumarizar, reescrever, transcrever, descrever imagem e buscar no acervo pessoal — e a fronteira continua na nuvem, com distância estável. Quem faz produto para celular programa contra a API do fabricante e aprende a conviver com regressão a cada atualização de sistema. A assinatura de IA não morre: ela deixa de vender acesso ao modelo e passa a vender dado, sincronização e garantia. No Brasil, o caminho principal é o navegador no laptop, porque o celular de entrada continua sem memória sobrando.

* **Desejável:** O mesmo cenário acima, com três coisas a mais, todas construíveis. Uma: o navegador expõe inferência como permissão visível e auditável, com cache de modelo compartilhado e neutro, de modo que rodar IA local na web seja tão banal e tão controlável quanto usar a câmera. Duas: existe uma família de modelos abertos e pequenos com avaliação pública independente e boa em português, o que tira do fabricante de aparelho o monopólio de decidir o que o produto de terceiros pode gerar. Três: existe mecanismo de atualização e de recall para modelo que já foi distribuído — porque "ninguém pode desligar" precisa vir acompanhado de "mas dá para consertar". Para chegar lá é preciso trabalho de padronização web, financiamento público de avaliação de modelos abertos em línguas que não são o inglês, e regra que obrigue a declarar versão de modelo na saída.

* **Indesejável:** A IA local acontece, mas inteiramente dentro do canal do fabricante. Dois ou três donos de sistema operacional definem qual modelo roda no bolso de todo mundo, com que política, em que versão — e mudam isso sem aviso, unilateralmente, com efeito imediato sobre milhares de produtos de terceiros. A promessa de independência se inverte: o dado não vai mais para a nuvem, mas a decisão sobre o que pode ser dito passou a ser tomada no firmware. Simultaneamente, o preço de memória mantém o aparelho capaz fora do alcance da maioria, e IA local vira um privilégio de quem tem equipamento caro, enquanto o resto usa a nuvem publicitária e paga com dado. **Sinal precoce:** quando um produto popular for retirado do ar ou tiver função amputada por mudança na política de segurança embutida do sistema, sem que o desenvolvedor tenha mudado nada e sem recurso possível. O dia em que isso virar notícia é o dia em que esse cenário deixou de ser hipótese.

## 10. O experimento

**O que dá para construir hoje: "Aba sem rede".** Uma única página web que executa a mesma tarefa de mídia por dois caminhos, lado a lado — o modelo rodando dentro da aba via WebGPU e o modelo rodando numa API de nuvem — e que, com um botão, desliga a rede e mostra o que sobrevive.

**Que pergunta responde.** Não "o modelo local é bom?", que é pergunta de benchmark e já tem resposta na literatura. A pergunta é de interação: **a partir de que ponto a diferença de qualidade deixa de ser percebida pela pessoa que está usando, e o que ela troca por essa diferença?** Latência, silêncio de rede, consumo de bateria, tempo do primeiro carregamento — tudo isso é experiência, não métrica de modelo.

**Que tecnologia usa.** WebLLM ou Transformers.js sobre WebGPU no lado local, com um modelo pequeno da família Qwen, Phi ou Gemma; qualquer API de nuvem no outro lado; e instrumentação simples medindo quatro coisas por execução: tempo até o primeiro token, tempo total, tamanho baixado na primeira visita e variação de bateria quando o navegador expõe essa informação. Tarefa sugerida: resumir um texto colado pela pessoa e reescrevê-lo em outro registro — tarefa curta, comum em produto de mídia, e dentro do que um modelo de 2B a 3B faz bem.

**O que a turma faria para testar em sala.** Teste cego e pareado, com três passos. Primeiro, cada pessoa roda a mesma tarefa nos dois caminhos sem saber qual é qual — a página sorteia qual painel é o local — e escolhe a saída que prefere. Segundo, repete a tarefa com o Wi-Fi desligado, e registra o que continuou funcionando. Terceiro, roda em aparelhos diferentes, deliberadamente: o laptop mais novo da sala e o mais velho, e um celular de entrada se algum navegador da turma aguentar. O produto do experimento é uma tabela: taxa de preferência pelo local, tempo até primeiro token em cada classe de hardware, e quantos aparelhos da sala simplesmente não conseguiram rodar. Esse último número é o mais informativo, e é o que nenhum artigo de fabricante publica.

**Qual resultado mudaria a minha ideia.** Dois resultados, em direções opostas.

Se a preferência cega pelo modelo local ficar acima de 40% na tarefa de resumir, e mais de dois terços dos aparelhos da sala conseguirem rodar, então o mapa está conservador: a qualidade local já é suficiente para a classe de tarefa que mais aparece em produto de mídia, e os prazos de e1 e e4 deveriam ser puxados para mais perto.

Se menos da metade dos aparelhos conseguir rodar, ou se o primeiro carregamento passar de dois minutos na rede da universidade, então D2 está superestimada neste documento: o navegador não é o caminho popular de IA local, é o caminho de quem tem máquina boa — e a nota sobre o Brasil deixa de ser nota de rodapé e vira a tese principal do mapa.

## 11. Fontes

1. https://github.com/microsoft/BitNet — Repositório oficial do framework de inferência de LLMs de 1 bit da Microsoft. Sustenta os números de aceleração (1,37×–5,07× em ARM; 2,37×–6,17× em x86), a redução de energia (55,4%–70,0% e 71,9%–82,2%), o catálogo de modelos oficialmente suportados (BitNet-b1.58-2B-4T, embeddings de 600M e 270M) e as datas de lançamento (1.0 em 17/10/2024; última atualização listada em 23/07/2026). Confiabilidade alta como registro do que existe, **baixa como medição independente** — é o fabricante medindo a própria tecnologia.
2. https://developer.android.com/ai/gemini-nano — Documentação oficial do Google. Sustenta o papel do AICore como serviço de sistema que "gerencia atualizações do modelo e segurança", o isolamento de requisições sem armazenamento de entradas e saídas, a lista fechada das seis APIs ML Kit GenAI e a ressalva de que a velocidade de inferência depende do hardware. Confiabilidade alta para descrição de arquitetura, com viés de fornecedor nas afirmações de privacidade.
3. https://machinelearning.apple.com/research/introducing-third-generation-of-apple-foundation-models — Página de pesquisa da Apple, atualizada em 09/09/2026. Sustenta o AFM 3 Core de 3 bilhões de parâmetros, o AFM 3 Core Advanced de 20 bilhões com ativação esparsa de 1 a 4 bilhões por vez, o uso de treinamento consciente de quantização e a avaliação em mais de vinte locales, incluindo português. Confiabilidade alta para especificação, com a ressalva de que profundidade de bits não é divulgada.
4. https://github.com/mlc-ai/web-llm — Motor de inferência em navegador da MLC. Sustenta a existência de inferência acelerada por WebGPU dentro da aba, sem servidor, e o catálogo de famílias suportadas (Llama, Phi, Gemma, Mistral, Qwen). Confiabilidade alta como evidência de que a capacidade existe e está publicada; o repositório não documenta limites de memória do navegador.
5. https://arxiv.org/abs/2411.17691 — "Low-Bit Quantization Favors Undertrained LLMs" (aceito na ACL 2025). É a fonte que sustenta a principal objeção ao mapa: a conclusão de que "o desempenho sob quantização de baixo bit dos modelos futuros, que devem ser treinados com mais de 100 trilhões de tokens, pode NÃO ser desejável". Confiabilidade alta — literatura revisada por pares, com metodologia declarada sobre mais de 1.500 checkpoints.
6. https://en.wikipedia.org/wiki/WebGPU — Sustenta as datas de disponibilidade por navegador: Chrome e Edge em abril de 2023, Safari em junho de 2025 (Safari 26), Firefox em julho de 2025 (Firefox 141). Confiabilidade média como fonte terciária, mas as datas são verificáveis nas notas de versão de cada navegador.
7. https://linuxfoundation.eu/newsroom/ai-act-explainer — Explicador da Linux Foundation Europe sobre o AI Act. Sustenta a definição de "provider" como quem desenvolve e coloca no mercado sob o próprio nome, a isenção parcial do Artigo 53(2) para modelos sob licença livre e aberta, e o alerta de que "as isenções de código aberto não são cheques em branco". Confiabilidade alta para interpretação jurídica de referência, com viés declarado a favor do ecossistema aberto.
8. https://www.mundoconectado.com.br/smartphones/memoria-ram-smartphones-precos-mais-altos-2026/ — Sustenta a nota sobre o Brasil: alta de 40% a 50% nos preços de componentes no fim de 2025, aumento estimado de 30 a 50 dólares no custo de produção de um smartphone por causa de memória, e corte de RAM em modelos de entrada como resposta dos fabricantes. Confiabilidade média — imprensa especializada de tecnologia, reportando estimativas de mercado, não medição própria.
9. https://counterpointresearch.com/en/reports/ai-advanced-pcs-to-surpass-half-of-global-shipments-in-2026 — Relatório da Counterpoint Research. Sustenta apenas a afirmação do próprio título: PCs "AI Advanced" ultrapassam metade dos embarques globais em 2026, com laptops com NPU tornando-se mainstream. Confiabilidade média e **uso limitado**: a página aberta só expõe o título e o resumo, com os números detalhados atrás do relatório pago, de modo que nenhum percentual específico foi citado a partir dela neste documento.

## 12. Anexo — o levantamento bruto

**Etapa (a) — a entrevista.** As cinco perguntas obrigatórias da skill foram feitas e respondidas assim, pelo enunciado da rodada, antes de qualquer geração:

| Pergunta | Resposta |
|---|---|
| 1. Horizonte de tempo | 2031 |
| 2. Público-alvo / stakeholder | Quem projeta mídia e interação |
| 3. Recorte geográfico | Global, com uma nota sobre o Brasil |
| 4. O que está descartado / fora do escopo | O que já é comum em produto de massa (a régua da disciplina); nenhuma outra exclusão |
| 5. Viés desejado | Neutro — o pedido foi explicitamente por ausência de viés direcionado |

Parâmetros adicionais recebidos junto com as respostas: tema "IA local: no dispositivo e no navegador" (tema 16 de 19, família "Criação e plataforma"); disrupção suspeita — nenhuma, a instrução foi descobrir; profundidade de três ordens; modo de análise a partir de uma inovação, não de um setor; ideias óbvias a excluir — as que serviriam para qualquer tema; e o critério declarado de mudança de ideia: evidência de que a adoção já passou da maioria inicial de Rogers, ou de que a tecnologia não rompe nada, só melhora o que existe.

**Etapa (b) — o filtro de maturidade, e por que a execução NÃO foi recusada.** A skill obriga a recusar tema maduro ou meramente incremental. O julgamento, explicitado:

- *Argumento para recusar:* rodar modelo pequeno em servidor próprio é maduro, e chamar API de modelo na nuvem é maduro e massificado. Se o tema fosse "LLM", seria recusa imediata.
- *Argumento para aceitar, que venceu:* o recorte não é "LLM", é **a inferência no aparelho do usuário final**. Isso rompe paradigma em dois pontos verificáveis. Primeiro, destrói o modelo mental de custo por chamada, sobre o qual está construído todo o mercado de IA desde 2023 — e destruir um mercado estabelecido é, pelo critério literal da skill, disrupção. Segundo, cria um mercado novo, o de distribuição de modelo pelo canal do fabricante de sistema operacional, que não existia em 2021.
- *Teste contra o critério declarado de mudança de ideia:* a adoção não passou da maioria inicial. O framework de 1 bit tem três modelos oficiais e o maior tem 2,4B; a inferência em navegador ficou disponível nos quatro navegadores apenas em 2025; e não há dado de uso por usuário final nas fontes consultadas. Está no lado inicial da curva, não no meio dela. **Conclusão: tema aceito, execução prossegue.**

**Etapa (c) — a autocrítica.** Gerada internamente antes da formatação e impressa integralmente na Seção 7, conforme a skill determina. As três perguntas obrigatórias foram respondidas (efeito linear: e1; velocidade irreal: e4.2; disrupção que pode falhar: D1), e uma quarta crítica, fora do roteiro, foi acrescentada: o mapa trata "local é bom" como premissa não examinada, quando modelo que não atualiza também é modelo que não se conserta.

**Caminhos abandonados.**

1. *Tratar "IA local" e "dados locais" como um só tema.* Abandonado por fronteira declarada no enunciado: local-first, E2E e passkeys são o tema 17. Aqui o objeto é o modelo; lá, o dado e a conta. A tentação era grande porque os dois compartilham o mesmo argumento de privacidade, mas são disrupções de naturezas diferentes.
2. *Fazer da NPU a quarta disrupção-raiz.* Abandonado por ser habilitador, não ruptura. A NPU torna D1 possível; não rompe paradigma nenhum por si só. Ficou como evidência dentro de D1.
3. *Usar os números de participação de mercado de PCs com IA da Counterpoint como dado central.* Abandonado por falha de verificação: a página abre, mas expõe só o título e o resumo; os percentuais circulam em fontes secundárias que não foram abertas. Foi preservada apenas a afirmação do título, e a limitação está declarada na fonte 9.
4. *Citar dados de crescimento do Ollama (downloads mensais, estrelas no GitHub) como medida de adoção.* Abandonado por não verificação: os números apareceram em blogs comerciais secundários e nenhuma fonte primária foi aberta. Fica registrado como lacuna — **o mapa não tem nenhum dado de adoção real por usuário final**, e essa é a sua maior fragilidade empírica, já declarada no viés da Seção 7.
5. *Derivar terceira ordem em todos os dezoito ramos de segunda ordem.* Abandonado por critério metodológico de parada: seis ramos foram interrompidos porque o próximo passo perdia âncora causal na disrupção central e virava especulação genérica. Daí a assimetria do cabeçalho — 9 / 18 / 12.

**Divergência de metadado, declarada.** O enunciado da rodada informa `zona de interesse: "Criação e plataforma"`. A skill `futurizacao-jlsn` fixa no seu formato de saída obrigatório o literal `zona_de_interesse: Sistemas de Informação`, sem campo variável. A instrução da rodada é executar a skill exatamente como ela manda, sem melhorá-la; por isso o cabeçalho traz o literal da skill, e não o valor do enunciado. O registro fica aqui para que a divergência não seja lida como descuido.

**Método de busca.** Todas as fontes da Seção 11 foram abertas e lidas com ferramenta de busca e leitura web durante a execução; as nove retornaram HTTP 200 em verificação feita em 18/09/2026. Afirmação que não sobreviveu à abertura da página foi removida do corpo do documento ou rebaixada a limitação declarada — casos das fontes 9 e do item 4 dos caminhos abandonados.
