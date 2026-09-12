---
tema: "IA local: no dispositivo e no navegador"
slug: ia-local-no-dispositivo-e-no-navegador
autor_login: grec
zona_de_interesse: Criação e plataforma
data: 2026-09-11
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 13
efeitos_ordem_2: 23
efeitos_ordem_3: 19
tecnologias_citadas: [BitNet b1.58, bitnet.cpp, llama.cpp, Ollama, LM Studio, GGUF, WebGPU, WebLLM, Transformers.js v4, LlamaWeb, Chrome Prompt API, Gemini Nano 4, Gemma 4 E2B/E4B, AICore, LiteRT, LiteRT-LM, MediaPipe LLM Inference API, Apple Foundation Models framework, Private Cloud Compute, Core AI, Play for On-device AI, QNN, NeuroPilot, ENN, NPU, Heretic, abliteração, quantização Q4_K_M, Phi-4-mini]
fontes: 23
confianca: media
experimento: "Bancada da inferência local — a mesma peça interativa rodando em três lugares (nuvem, modelo embarcado na página via WebGPU, modelo do navegador via Prompt API), medindo latência, queda térmica, tamanho de download e recusa de conteúdo"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

A inteligência está saindo da nuvem, mas não pelo motivo que se anuncia. O argumento de custo, que era o mais forte em 2024, se desfez: o preço de API caiu cerca de 80% em doze meses, e "grátis depois de baixado" deixou de ser vantagem decisiva. O que sobrou é mais interessante e menos confortável. Rodar o modelo no aparelho do usuário troca uma dependência por outra: sai a chave de API, entra o fabricante do sistema operacional e do navegador, que decide qual modelo você chama, quando ele é atualizado e o que ele se recusa a dizer — o Chrome embarcou a Prompt API contra a objeção formal da Mozilla, do WebKit e do TAG do W3C, e usá-la exige aceitar a política de uso do Google. Ao mesmo tempo, o modelo deixa de ser serviço e vira arquivo: copiável, modificável em dez minutos por ferramenta pública, herdável e apreensível — e o histórico de conversa, que antes vivia num servidor com política de retenção, passa a viver em JSON com timestamp no disco do usuário. Para quem projeta mídia e interação, três coisas mudam de lugar até 2031: a física do aparelho (banda de memória e calor) vira restrição de design, não detalhe de engenharia; o download do modelo vira uma cena da interface; e a pergunta "de quem é este modelo?" passa a ter uma resposta jurídica, não técnica.

## 2. O tema

IA local é a inferência acontecendo no aparelho de quem usa — celular, laptop comum, aba do navegador — sem chamada de rede, sem chave de API e sem custo por token. Não é IA em servidor próprio (isso é maduro, e é só mudar o endereço do servidor), nem é chamar um modelo pequeno na nuvem (também maduro). O objeto aqui é a **inferência no dispositivo do usuário final**, com qualidade suficiente para agente, voz e visão.

Ele encosta em mídia e interação em quatro pontos concretos. Primeiro, a **latência**: um modelo local gera token em menos de 20ms, contra 200–500ms de ida e volta à nuvem, e essa diferença é a fronteira entre "responde depois que eu termino" e "responde enquanto eu faço" — ou seja, entre conversa e instrumento. Segundo, a **distribuição**: um modelo é um arquivo de centenas de megabytes, e isso reintroduz na web e na loja de aplicativos um problema que a mídia interativa tinha resolvido em 2010, o do peso. Terceiro, a **autoria**: uma obra que embarca o modelo não depende de ninguém continuar servindo uma API — e também não pode ser atualizada quando o modelo envelhece. Quarto, a **permissão**: quando o modelo vem do navegador ou do sistema, a política de conteúdo do fabricante passa a valer dentro da sua peça.

Merece mapa de futuro, e não levantamento de estado da arte, porque a parte tecnicamente difícil já está resolvida e a parte institucional não está. Dá para rodar um modelo de 2 bilhões de parâmetros num celular hoje; não se sabe quem responde pelo que ele diz, quem o atualiza, de quem ele é quando a pessoa morre, e o que acontece com um web standard cujo comportamento não é determinístico. É aí que as consequências de segunda e terceira ordem estão.

## 3. Onde isso está hoje

Âncora feita em 11/09/2026, com acesso à web. Vinte e três fontes abertas e lidas; as que não abriram estão registradas na seção 12.

### O que já existe e funciona

**A quantização extrema saiu do laboratório.** O `BitNet b1.58 2B4T` da Microsoft, publicado em abril de 2025 (arXiv:2504.12285), é o primeiro LLM de 1 bit nativo em escala de 2 bilhões de parâmetros, treinado em 4 trilhões de tokens. Os números do cartão do modelo no Hugging Face são específicos e verificáveis: **0,4 GB de memória não-embedding, 29ms de latência de decodificação em CPU e 0,028 J estimados por token** — contra 2 GB e 48ms do LLaMA 3.2 1B e 2,6 GB e 65ms do Qwen2.5 1.5B. O framework `bitnet.cpp` reporta até 6,17× de aceleração em x86 e 5,07× em ARM, com redução de energia de até 82,2%. O repositório continua vivo em 2026: otimização de kernel de CPU em 15/01/2026, modelos de embedding de 0,6B e 270M em 20/07/2026. O cartão do modelo traz também a ressalva honesta que quase nenhuma cobertura reproduz: **rodando no `transformers` padrão, a eficiência não aparece** — só o `bitnet.cpp` a entrega.

**Os sistemas operacionais embutiram o modelo.** No Android, o `AICore` gerencia download, atualização e roteamento para NPU; o `Gemini Nano 4`, anunciado em 02/04/2026, tem duas variantes construídas sobre o `Gemma 4` (E2B para velocidade, E4B para qualidade), com 140+ idiomas e multimodalidade. Por baixo, o `LiteRT-LM` é o runtime que, segundo o próprio Google, já alimentava Gemini Nano em Chrome, Chromebook Plus e Pixel Watch, alcançando "centenas de milhões de dispositivos". Na Apple, o `Foundation Models framework` ganhou na WWDC26 entrada de imagem, ferramentas de sistema (leitor de código de barras, OCR, RAG local via Spotlight), um protocolo `LanguageModel` que aceita modelos de terceiros, um SDK em Python, uma ferramenta de linha de comando (`fm chat`) e a promessa de código aberto.

**O navegador virou host de modelo.** O `Transformers.js v4`, lançado em 09/02/2026, reescreveu o runtime WebGPU em C++ e passou a rodar modelos acima de 8 bilhões de parâmetros — `GPT-OSS 20B` (q4f16) a ~60 tokens/s num M4 Pro Max. O `WebLLM` (arXiv:2412.15803, revisto em 13/04/2026) reporta reter até 80% do desempenho nativo no mesmo aparelho. O estudo *Llamas on the Web* (20/05/2026) é o maior levantamento cross-device de inferência em navegador até aqui — **10 modelos em 16 dispositivos de 8 fabricantes** — e mede tanto o que funciona (29–33% menos memória que os concorrentes, 23 formatos de peso suportados) quanto o que não funciona (CUDA e Vulkan ainda ganham do WebGPU por até 10× no prefill em GPUs NVIDIA).

**O hardware chegou.** A Counterpoint projeta que PCs com NPU passem de ~39% dos embarques globais em 2025 para **~59% em 2026**, puxados pelo fim do suporte ao Windows 10 em 14/10/2025. O limiar da Microsoft para o selo Copilot+ é ≥40 TOPS.

**A loja virou distribuidora de pesos.** O `Play for On-device AI`, em beta, entrega modelos `LiteRT` e `MediaPipe` como AI packs de até **1,5 GB cada**, com teto cumulativo de 4 GB por app, três modos de entrega (install-time, fast-follow, on-demand) e segmentação por RAM e por SoC. Downloads acima de 200 MB exigem consentimento do usuário fora do Wi-Fi.

**A criação já usa isso.** Na 16ª Bienal Internacional de Curitiba, em cartaz no Museu Oscar Niemeyer até 15/11/2026, a obra *RAGE — Reprodutor Autônomo Generalizado de Entropia*, de Juliana Berto e Thiago Martins de Melo, roda "uma inteligência artificial open source criada para operar localmente, sem recorrer a bancos de dados externos", alimentada com mais de 300 livros de espiritualidade e ocultismo; ela imprime um aforismo em papel térmico quando o visitante acena. É o caso mais nítido que encontrei de IA local usada como material de obra, e não como tema dela — e os artistas usam a alucinação deliberadamente, como oráculo.

### O que existe e ainda não funciona

**A física do aparelho não acompanhou.** O levantamento de Vikas Chandra e Raghuraman Krishnamoorthi (Meta), de 24/01/2026, dá a medida exata: a banda de memória de um celular é de **50–90 GB/s contra 2–3 TB/s de uma GPU de data center — um fosso de 30 a 50×** — e a decodificação é limitada por banda, não por cálculo. A consequência é térmica e foi medida: o **iPhone 16 Pro cai de 40,5 para 23,7 tokens/s em três iterações (−41,5%)**; o Galaxy S24 Ultra degrada 15%. Eles resumem sem eufemismo: a primeira resposta impressiona, depois a física aparece.

**O NPU está no aparelho e fora do alcance de terceiros.** Qualcomm usa QNN, MediaTek usa NeuroPilot, Samsung usa ENN, e não há camada comum. O `LiteRT` existe precisamente para tapar esse buraco — o Google anunciou em 28/01/2026 as primeiras integrações de produção com MediaTek e Qualcomm, reivindicando até 100× sobre CPU e 3× sobre GPU no prefill do Gemma 3 1B num Galaxy S25 Ultra. O preprint *Is Your NPU Ready for LLMs?* (08/07/2026, Cai et al.) vai no sentido contrário da propaganda e dissecta os gargalos escondidos que separam o TOPS anunciado do desempenho real.

**A Prompt API não tem consenso.** A documentação do Chrome lista seis APIs embutidas em estágios diferentes, e os requisitos de hardware para a Prompt API são altos para "web": **16 GB de RAM, 22 GB de disco livre, mais de 4 GB de VRAM, 4+ núcleos**. A Mozilla registrou posição **negativa** no repositório de standards-positions (issue #1213, rótulos "position: negative" e "concerns: interoperability"). Jake Archibald, da Mozilla, foi citado pelo *Register* em 30/04/2026: "continuamos a nos opor a esta API, e sentimos que ela tem consequências negativas severas para a interoperabilidade, a atualizabilidade e a neutralidade da plataforma web" — e acrescentou o ponto que menos aparece no debate técnico: usar a API exige aceitar a *Generative AI Prohibited Uses Policy* do Google, que restringe conteúdo além do que a lei exige. Domenic Denicola, do lado de quem projeta a API, reconhece a tensão de frente em ensaio de 13/08/2025: código escrito contra a API hoje precisa continuar funcionando indefinidamente, e "não é assim que a web deveria funcionar".

**O peso aberto não segura a guarda.** A investigação conjunta do *Financial Times* com o grupo Alice, de 25/05/2026, mostrou que a ferramenta pública `Heretic` remove as proteções de modelos de peso aberto em **menos de dez minutos em hardware de consumo**. O Gemma 4 teve a guarda retirada **90 minutos depois do lançamento público**. O autor da ferramenta reporta 3.500 variantes modificadas e 13 milhões de downloads acumulados.

**O rastro fica no disco.** O primeiro exame forense sistemático de runtimes locais (Shariq Murtuza, 25/03/2026) mapeia o que cada um deixa: o LM Studio grava histórico de conversa em JSON estruturado com timestamp e metadados de modelo, presets de configuração e cache de RAG com fragmentos de documento — inclusive rascunhos descartados; o Ollama grava manifests, blobs, histórico de CLI com prompts em texto puro e logs de servidor; o llama.cpp quase nada, exigindo perícia de memória.

### Quem constrói

Microsoft (BitNet, Phi, bitnet.cpp); Google (Gemini Nano, AICore, LiteRT/LiteRT-LM, Chrome Prompt API, Gemma); Apple (Foundation Models framework, Core AI, Private Cloud Compute); a comunidade aberta de runtimes (llama.cpp, Ollama, LM Studio, MLC/WebLLM); Hugging Face (GGUF, Transformers.js); os fabricantes de silício (Qualcomm, MediaTek, Samsung LSI) e, do outro lado da mesa, Mozilla e WebKit como freio institucional.

### O número que descreve a adoção

Hardware: **~59% dos PCs embarcados em 2026** com NPU (Counterpoint). Navegador: **10 modelos em 16 dispositivos de 8 fabricantes** rodaram em navegador no maior estudo cross-device publicado (arXiv:2605.20706). Modificação de pesos: **3.500 variantes sem guarda, 13 milhões de downloads** (FT/Alice via Akerman). Modelo de 1 bit: **21.324 downloads no último mês** do `bitnet-b1.58-2B-4T` no Hugging Face — número pequeno, e é justamente isso que ele diz.

Não encontrei número verificável de usuários ativos de runtime local. As buscas devolveram cifras muito citadas (52 milhões de downloads mensais do Ollama, 5 milhões de usuários ativos, 135 mil GGUFs no Hugging Face), mas **nenhuma das páginas que abri sustentava essas cifras** — ver seção 8. Registro como "sem número encontrado" em vez de repeti-las.

### Nota sobre o Brasil

O recorte deste mapa é global, com uma nota daqui. A ANPD virou agência reguladora independente (MP nº 1.317/2025, consolidada pela Lei nº 15.352/2026, de 25/02/2026) e publicou em dezembro de 2025 o Mapa de Temas Prioritários 2026-2027, no qual "IA e tecnologias emergentes no tratamento de dados pessoais" é um dos quatro eixos de fiscalização. Isso dá à IA local um argumento jurídico direto no Brasil: dado que não sai do aparelho não é transferido, não é compartilhado e não precisa de base legal para transferência internacional. O contrapeso é material — custo de dado móvel e base instalada de aparelhos de entrada sem NPU e com pouca RAM, o que faz do "grátis depois de baixado" uma frase que só vale para quem já pagou caro no hardware.

## 4. As disrupções-raiz

### Candidatos recusados, antes das raízes

- **Candidato "chamar API de modelo na nuvem" recusado como raiz:** adoção em maioria desde 2023; tratado como contexto na seção 3.
- **Candidato "rodar modelo pequeno em servidor próprio" recusado como raiz:** adoção em maioria; é mudança de endereço de servidor, não ruptura.
- **Candidato "NPU no aparelho" recusado como raiz:** é pré-condição de hardware, e ela já chegou (~59% dos PCs em 2026). Hardware presente não é ruptura; ruptura é o que se faz com ele. Entra na seção 3 e como efeito e8.
- **Candidato "arquitetura híbrida local + nuvem (roteador)" recusado como raiz:** é consequência das raízes A e do colapso de preço de API, não causa. Entra como e1.2.
- **Candidato "modelo de 1 bit" recusado como raiz isolada:** é uma técnica dentro da raiz A, não uma ruptura separada. Com 21 mil downloads mensais, ainda é laboratório com produto.

### Raiz A — A inferência vira recurso local não medido

**O que ela rompe.** Rompe a suposição de que uma chamada a modelo é uma transação: com um custo, um contador, um dono do contador e um limite. Quando o modelo está no aparelho, não há cota, não há chave, não há fatura e não há registro do lado de quem fez o software. Isso quebra o modelo de negócio de venda de inferência por token, quebra a telemetria como subproduto automático do serviço, e quebra a capacidade do desenvolvedor de saber o que aconteceu.

**Por que agora, e não há cinco anos.** Porque três coisas coincidiram em 18 meses: quantização em 1,58 bit deixou de custar qualidade (BitNet b1.58 com 0,4 GB não-embedding e paridade com modelos full-precision de mesmo porte); modelos pequenos ficaram úteis (Gemma 4 E2B/E4B, Phi-4-mini); e o NPU chegou à maioria dos aparelhos novos. Em 2021 nenhuma das três valia.

**Onde está na difusão.** *Adoção precoce.* O uso pelo próprio fabricante do sistema já é maioria (Gemini Nano em centenas de milhões de aparelhos); o uso por **terceiros**, que é o objeto aqui, está abaixo de 10% — basta ver que o NPU segue majoritariamente inacessível a quem não é o fabricante.

**O que ainda falta acontecer.** Falta uma camada de acesso ao NPU que não seja de um único fornecedor. Falta o comportamento térmico virar previsível o bastante para caber num contrato de produto. Falta um formato de distribuição de pesos que sobreviva à troca de aparelho. E falta — isto é o mais importante — algum motivo econômico que resista à queda do preço de API, porque o argumento "é grátis" já não decide nada sozinho.

**Quem bloqueia.** Os provedores de nuvem e de API, com o instrumento mais eficaz que existe: baixar o preço. A queda de ~80% em doze meses não é caridade, é a resposta correta a um substituto grátis. Quem opera data center tem incentivo direto para manter a inferência medida, e dinheiro para subsidiá-la.

### Raiz B — O modelo vira capacidade da plataforma, e quem escreve não escolhe mais o modelo

**O que ela rompe.** Rompe a relação entre o autor de um software e o componente que gera o conteúdo dele. Na web, rompe algo mais antigo: o princípio de que uma API padronizada tem comportamento especificável. Uma página que chama `Prompt API` não sabe qual modelo respondeu, não pode fixar a versão, não pode auditar a política de recusa, e aceita — em nome do usuário — os termos de uso de uma empresa. Rompe também o mercado de camada fina: quem vendia um invólucro em volta de uma API perde o produto quando o sistema operacional passa a oferecer o mesmo de graça.

**Por que agora, e não há cinco anos.** Porque em 2026 as duas maiores plataformas de cliente fizeram o mesmo movimento em sentidos opostos e ao mesmo tempo: o Google embarcou a Prompt API no Chrome apesar da objeção formal de Mozilla, WebKit, TAG do W3C e da própria Edge (que desabilitou o recurso rodando no mesmo motor); a Apple abriu o protocolo `LanguageModel` na WWDC26 para aceitar modelos de terceiros, mantendo a moldura, as ferramentas de sistema e as guardas sob seu controle. Há cinco anos não havia modelo pequeno bom o bastante para caber em qualquer uma das duas molduras.

**Onde está na difusão.** *Demo pública indo para produto de nicho.* A Prompt API está em Chrome com requisitos de hardware que excluem a maioria dos aparelhos (16 GB de RAM, 22 GB de disco); o framework da Apple exige iOS 26+. Isso é adoção precoce em cima de uma base pequena. Confiança rebaixada na cadeia que depende de padronização.

**O que ainda falta acontecer.** Falta consenso entre navegadores — sem Firefox e sem Safari, a API é otimização, não base. Falta semântica de versionamento: uma forma de uma página dizer "eu fui escrita contra este comportamento". Falta separar a política de conteúdo do fabricante da capacidade técnica. E falta descobrir o que significa "quebrar compatibilidade" quando a saída nunca foi determinística.

**Quem bloqueia.** Mozilla e WebKit, explicitamente e por escrito, e o TAG do W3C, que registrou falta de consenso. O instrumento deles não é jurídico, é de mercado: enquanto dois motores não implementarem, nenhum produto sério pode depender disso — e o efeito é manter a IA embutida no navegador como recurso opcional por anos.

### Raiz C — O modelo deixa de ser serviço e vira arquivo

**O que ela rompe.** Rompe a suposição de que o comportamento de um modelo é propriedade de quem o treinou. Um arquivo de pesos no disco de outra pessoa é copiável, modificável, versionável por ela, herdável, penhorável e apreensível. A guarda de segurança deixa de ser característica do produto e vira configuração removível: `Heretic` faz isso em menos de dez minutos, e fez com o Gemma 4 noventa minutos depois do lançamento. Rompe também a política de retenção de dados: o histórico que vivia num servidor com prazo de expurgo passa a viver em JSON com timestamp no disco de quem usou, para sempre, até alguém apreender o aparelho.

**Por que agora, e não há cinco anos.** Porque só em 2025-2026 os pesos abertos ficaram bons o bastante para valer a pena modificar, a ferramenta de modificação virou de um clique, e a distribuição virou trivial (13 milhões de downloads de variantes sem guarda). Em 2021 havia pesos abertos; não havia mercado para eles nem público que os rodasse.

**Onde está na difusão.** *Produto de nicho.* Treze milhões de downloads é muito para uma comunidade técnica e pouco para uma população. A perícia forense de runtime local acabou de virar objeto de artigo (março de 2026), o que é o sinal clássico de que a prática precede o método.

**O que ainda falta acontecer.** Falta jurisprudência: nenhum caso conhecido decidiu ainda de quem é a responsabilidade quando um modelo modificado localmente produz dano. Falta regra de espólio que trate pesos afinados em dados pessoais. Falta ferramenta de proveniência que sobreviva ao próprio arquivo (hash, versão, dados de treino) e que alguém exija. E falta a decisão política de tratar peso aberto como bem de uso dual — que está sendo cogitada nos EUA, UE e Reino Unido e ainda não foi tomada.

**Quem bloqueia.** Os próprios laboratórios que publicam pesos, que têm incentivo para parar de publicar quando a conta de reputação chegar; e os reguladores, que têm o instrumento do controle de distribuição. O bloqueio aqui não redireciona a mudança: ele a estrangula na fonte, e é por isso que é o mais perigoso dos três.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A inferência vira recurso local não medido no aparelho do usuário final
    efeitos:
      - id: e1
        ordem: 1
        efeito: Aplicativos de mídia passam a embarcar o modelo no próprio pacote e a cobrar uma vez, porque a inferência deixa de ser custo variável
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A loja de aplicativos vira distribuidora de pesos e sua política de tamanho passa a decidir que modelo cabe num produto
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Quem projeta interação passa a desenhar o momento do download, e a primeira execução do app vira uma cena de espera de centenas de megabytes
                sinal: fraco
                prazo: 2029
                confianca: media
              - id: e1.1.2
                ordem: 3
                efeito: O custo do dado móvel vira critério de design de produto no Brasil e apps passam a oferecer uma versão sem modelo para aparelho de entrada
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O padrão de arquitetura passa a ser roteador local com escalada para nuvem, e a escolha do modelo deixa de ser decisão de projeto para virar política de execução
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: A latência vira material de design, e o feedback contínuo durante a digitação passa a ser possível em peças interativas
                sinal: medio
                prazo: 2029
                confianca: media
          - id: e1.3
            ordem: 2
            efeito: O colapso do preço de API retira da IA local o argumento econômico e freia a migração para o dispositivo
            sinal: forte
            prazo: 2028
            confianca: alta
            efeitos:
              - id: e1.3.1
                ordem: 3
                efeito: A IA local se estreita a nichos onde privacidade, operação offline e latência apertada decidem, e deixa de disputar o caso geral
                sinal: medio
                prazo: 2030
                confianca: media
      - id: e2
        ordem: 1
        efeito: O ateliê de criação passa a rodar sem conta, e obra interativa com IA embarcada deixa de depender de chave de API para existir
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Conservação de museu passa a ter de preservar pesos, e não só código, porque a obra só roda se aquele modelo rodar
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Museus e bienais passam a exigir do artista o arquivo do modelo e a documentação de versão como condição de aquisição
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: O laboratório de creative coding troca chamar a API por carregar o modelo, porque a cota gratuita instável deixa de ser a barreira da aula
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: A entrega de trabalho de aluno passa a incluir o identificador do arquivo de pesos que rodou, porque sem ele o resultado não se reproduz
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: A banda de memória e o calor do aparelho viram a restrição de design da interação, no lugar do tamanho do modelo
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Nascem padrões de interface para esconder a queda térmica, e o produto passa a prometer menos no terceiro minuto do que no primeiro
            sinal: fraco
            prazo: 2029
            confianca: media
          - id: e3.2
            ordem: 2
            efeito: A régua de compra de celular passa de câmera para memória e banda, e o preço do aparelho capaz de rodar IA local sobe
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: No Brasil a IA local aprofunda a divisão entre quem tem aparelho com NPU e quem não tem, porque o grátis depois de baixado só vale para quem já pagou caro no hardware
                sinal: fraco
                prazo: 2030
                confianca: media
      - id: e4
        ordem: 1
        efeito: A conta de energia da inferência sai do data center e entra na bateria do usuário
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: O argumento ambiental muda de lado e rodar local vira alegação de sustentabilidade de produto, com a pegada deslocada para a fabricação do aparelho
            sinal: fraco
            prazo: 2029
            confianca: baixa
      - id: e5
        ordem: 1
        efeito: O suporte técnico deixa de conseguir reproduzir o erro, porque a resposta aconteceu numa máquina que a empresa não enxerga
        sinal: fraco
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A telemetria vira moeda de troca e o app passa a pedir a conversa de volta para melhorar o modelo, erodindo por dentro a promessa de que nada sai
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A frase roda no seu dispositivo perde valor de marketing por não ser verificável pelo usuário, e surge a exigência de prova por teste em modo avião
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: O modelo vira capacidade da plataforma, e quem escreve o software não escolhe mais o modelo
    efeitos:
      - id: e6
        ordem: 1
        efeito: O desenvolvedor web passa a chamar um modelo que não escolheu, não versiona e não pode auditar
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Volta a prática de detectar o motor por trás, agora para descobrir qual modelo respondeu, e o código passa a manter prompts alternativos por fabricante
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Um site passa a poder quebrar por atualização de modelo sem nenhuma mudança de código, e compatibilidade na web passa a incluir comportamento não determinístico
                sinal: fraco
                prazo: 2029
                confianca: media
          - id: e6.2
            ordem: 2
            efeito: A política de uso do fabricante do navegador passa a valer como norma de conteúdo dentro da página de terceiros
            sinal: forte
            prazo: 2027
            confianca: alta
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Peças de arte, ficção e jornalismo que tratam de violência passam a receber recusa do modelo do navegador, e o autor descobre a restrição sem saber de onde ela veio
                sinal: fraco
                prazo: 2029
                confianca: media
              - id: e6.2.2
                ordem: 3
                efeito: Projetos que precisam de liberdade de conteúdo voltam a embarcar o próprio modelo por WebGPU, e a web passa a ter dois caminhos de IA com custos e permissões diferentes
                sinal: medio
                prazo: 2029
                confianca: media
          - id: e6.3
            ordem: 2
            efeito: A falta de consenso entre motores mantém a IA embutida no navegador como caminho de otimização, obrigando toda página a funcionar sem ela
            sinal: forte
            prazo: 2027
            confianca: alta
      - id: e7
        ordem: 1
        efeito: O fabricante do aparelho vira o guardião da inteligência disponível e da que não está disponível
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: A atualização do modelo deixa de ser evento do desenvolvedor e vira evento do sistema operacional, mudando o comportamento do app sem que ninguém do app tenha mexido
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Fixar a versão do modelo vira requisito contratual de produto e a plataforma passa a cobrar por essa garantia
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: O nível gratuito da plataforma desloca a concorrência, e o preço de referência de uma chamada de IA dentro de um app passa a ser zero
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: Produtos que eram uma camada fina sobre API perdem razão de existir em mobile, porque o que vendiam já vem no sistema
                sinal: medio
                prazo: 2029
                confianca: media
      - id: e8
        ordem: 1
        efeito: O NPU segue sendo a peça mais anunciada e menos usada por terceiros, porque cada fabricante mantém seu próprio SDK
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: A camada de abstração vira o ponto real de poder, porque quem controla o compilador controla o que consegue rodar acelerado
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e9
        ordem: 1
        efeito: O navegador deixa de ser só cliente e vira hospedeiro de modelo, e a aba passa a ter orçamento de memória e de disco como um aplicativo instalado
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: Publicar mídia interativa na web passa a incluir decidir se o visitante baixa centenas de megabytes, e a web volta a ter requisitos de sistema
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: O link deixa de ser o degrau mais baixo de entrada em mídia interativa, e o sem instalação da web perde parte do sentido
                sinal: fraco
                prazo: 2030
                confianca: media
  - disrupcao: O modelo deixa de ser serviço e vira arquivo copiável, modificável, herdável e apreensível
    efeitos:
      - id: e10
        ordem: 1
        efeito: A guarda de segurança do modelo deixa de ser propriedade do produto e vira configuração removível por quem tem o arquivo
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: A responsabilidade pelo que o modelo diz migra para quem o distribui no produto final, e não para quem o treinou
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: Estúdios e agências passam a exigir atestado de proveniência do modelo em contrato de entrega de mídia, com hash, versão e origem dos dados
                sinal: fraco
                prazo: 2030
                confianca: media
          - id: e10.2
            ordem: 2
            efeito: O peso aberto passa a ser tratado como bem de uso dual e o custo regulatório de publicá-lo sobe, freando a própria disrupção
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e10.2.1
                ordem: 3
                efeito: O ecossistema se parte entre pesos de pesquisa com barreira de licença e pesos de consumo embutidos no sistema e não extraíveis, e o meio aberto encolhe
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: O disco do usuário vira o principal repositório de prova, porque o histórico de conversa com o modelo local é artefato forense recuperável
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: Nada sai do dispositivo passa a significar tudo fica no dispositivo, e o risco troca vazamento em trânsito por apreensão do aparelho
            sinal: medio
            prazo: 2028
            confianca: alta
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: Ferramentas de IA local passam a competir por não deixar rastro, e o modo efêmero vira recurso anunciado na caixa
                sinal: fraco
                prazo: 2030
                confianca: media
          - id: e11.2
            ordem: 2
            efeito: A escolha do runtime vira decisão de privacidade com consequência mensurável, e não preferência de ferramenta
            sinal: medio
            prazo: 2028
            confianca: media
      - id: e12
        ordem: 1
        efeito: O modelo afinado no histórico de uma pessoa vira um bem com dono, e não uma sessão de serviço
        sinal: fraco
        prazo: 2030
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: Espólio e herança passam a incluir pesos, e o direito de acesso a restos digitais esbarra num objeto que responde com a voz do morto
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: Famílias passam a conviver com réplicas locais e não comerciais de parentes mortos, fora do alcance de leis escritas contra exploração comercial de imagem e voz
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e12.2
            ordem: 2
            efeito: O seu modelo vira argumento de venda de aparelho, e trocar de celular passa a significar migrar uma memória, com o custo de saída que isso cria
            sinal: fraco
            prazo: 2030
            confianca: media
      - id: e13
        ordem: 1
        efeito: Quem vende acesso a modelo por assinatura perde o degrau de entrada, porque o concorrente é grátis e já vem instalado
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: O valor migra de acesso ao modelo para o que está em volta dele, e a assinatura passa a cobrar por dados, distribuição, avaliação e integração
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: A IA deixa de ser item de linha no orçamento de produto e vira infraestrutura invisível, como o corretor ortográfico
                sinal: fraco
                prazo: 2031
                confianca: media
```

### O que o bloco não consegue dizer

**Os mecanismos, um a um.** `e1` deriva da raiz A porque, sem custo por chamada, o custo marginal de servir um usuário a mais cai a zero e a precificação recorrente perde justificativa — mas só se o usuário aceitar o download, e é por isso que `e1.1` existe: o `Play for On-device AI` impõe 1,5 GB por pack, 4 GB cumulativos e consentimento explícito acima de 200 MB fora do Wi-Fi, e a Apple comprime modelos via Background Assets (SAM3 de ~3 GB para ~430 MB em int4). A política da loja passa a ser o limite superior do que um app pode pensar. `e1.1.1` é o efeito que mais interessa a esta disciplina e o que menos aparece nos mapas: alguém vai ter que **desenhar a espera**, e ninguém desenhou uma espera de 800 MB desde os jogos em DVD.

`e1.2` vem de `e1` por um mecanismo econômico simples: com a inferência local a custo zero e a de nuvem barata, a decisão racional deixa de ser escolher um modelo e passa a ser escrever uma regra de roteamento. `e1.2.1` é a consequência de interação: sob 20ms, o modelo pode responder *durante* o gesto, e não depois dele — a diferença entre um assistente e um instrumento musical. Classe de referência para `e1.2.1`: autocompletar de código no editor levou cerca de três anos do funciona-em-demo (GitHub Copilot em preview, 2021) até virar comportamento esperado (2024). Aplicando o mesmo intervalo a partir do Transformers.js v4 e do LiteRT-LM em produção (2026), chega-se a 2029.

`e1.3` é a **retroação da raiz A** e a mais forte do mapa. Ela freia a própria disrupção pelo caminho mais banal: preço. Enquanto o mapa inteiro assume que "grátis depois de baixado" vence, a nuvem responde ficando quase grátis também, sem exigir download, sem esquentar o aparelho e sem envelhecer. `e1.3.1` é o que sobra: privacidade, offline e latência. Note que são exatamente os três argumentos que **não** são econômicos — e é por isso que o mapa não colapsa quando o preço cai.

`e2` deriva da raiz A por um mecanismo de acesso, não de custo: a obra de Berto e Martins de Melo na Bienal de Curitiba não roda local para economizar, roda local porque a obra quer que a inteligência seja daquele corpo de resina e ferro, e não de um servidor. `e2.1` decorre disso mecanicamente: se a inteligência é do corpo, conservar a obra é conservar o arquivo. Classe de referência: a preservação de arte em software (Flash, Director) levou cerca de quinze anos entre o problema aparecer e existir prática institucional — por isso `e2.1.1` está em 2032, **fora do horizonte deste mapa**, e está declarado como tal.

`e2.2` é o efeito que a própria disciplina produziu como evidência: três alunos rodaram o julgamento das suas 500 fontes em modelo local depois de esbarrar em cota de API — a documentação prometia 1.500 requisições por dia e a conta recebia 20. Esse é o mecanismo, e ele é específico: não é "o currículo se reorganiza", é *a cota instável some como barreira de aula prática*. `e2.2.1` decorre porque, sem chave de API, o que identifica a execução deixa de ser a conta e passa a ser o arquivo.

`e3` não deriva de uma escolha de ninguém, deriva da física, e por isso tem sinal forte com três artefatos nomeados: a medição do iPhone 16 Pro (−41,5% em três iterações), a do S24 Ultra (−15%) e o fosso de banda de 30-50×. `e3.1` é o efeito de interface: se o sistema degrada previsivelmente, a interface tem que mentir bem ou avisar bem, e essa é uma decisão de design. `e3.2.1` é **quem perde** neste ramo, e é o efeito brasileiro do mapa.

`e4` tem apoio empírico razoável — estudos de 2026 comparando inferência generativa em nuvem e na borda reportam mais de 90% de economia de energia em tarefas de texto, imagem e OCR num Galaxy S24 contra um A100 — mas `e4.1` fica em confiança baixa porque a conta esquece a fabricação do aparelho, e a pegada embutida de um celular novo com 24 GB de RAM pode devorar a economia de operação. Registro como categoria STEEP ecológica coberta, com ressalva.

`e5` e `e5.1` formam a **retroação cultural**: a promessa de privacidade é comercialmente valiosa e tecnicamente incomprovável pelo usuário, o que cria incentivo para violá-la discretamente. `e5.1.1` é a resposta prevista: o teste do modo avião como forma leiga de auditoria.

**Raiz B.** `e6` tem sinal forte e confiança alta porque já aconteceu: a Prompt API está no Chrome, a Mozilla registrou posição negativa por escrito, o TAG registrou falta de consenso, e a Edge desabilitou o recurso rodando no mesmo motor. Três artefatos verificáveis. `e6.1` deriva pelo mecanismo que Archibald nomeou: prompts são acoplados a modelos, e desenvolvedores vão ajustar às idiossincrasias do Gemini Nano exatamente como ajustavam ao Internet Explorer. Classe de referência: o browser-sniffing do início dos anos 2000 levou cerca de quatro anos entre a primeira divergência séria e a prática generalizada — daí 2028.

`e6.2` é o efeito mais desconfortável do mapa para quem projeta mídia, e o menos discutido: **usar uma API da plataforma web passa a exigir aceitar a política de conteúdo de uma empresa**. Archibald aponta que ela restringe conteúdo "perturbador" além do que a lei exige. `e6.2.1` decorre diretamente: literatura, jornalismo e arte tratam de violência por ofício. `e6.2.2` é a válvula de escape e converge com `e9` — é a convergência mais importante deste mapa, e está discutida abaixo. `e6.3` é a **retroação da raiz B**, e é institucional: sem dois motores, a API é opcional, e o que é opcional não muda prática.

`e7` deriva da raiz B pelo controle do ciclo de vida: no Android, o AICore gerencia download e atualização do Nano; na Apple, o modelo vem com o sistema. `e7.1` é mecanicamente inevitável nesse arranjo, e é uma inversão completa da relação normal entre software e dependência. `e7.2` tem sinal forte com artefato específico — a Apple anunciou Private Cloud Compute sem custo de API para desenvolvedores abaixo de 2 milhões de downloads iniciais — e `e7.2.1` decorre por eliminação de margem. Classe de referência para `e7.2.1`: o Windows Defender foi empacotado de graça em 2009 e levou cerca de seis anos para deslocar a maioria do antivírus pago; aplicando o mesmo intervalo a partir de 2026 daria 2032, mas o ciclo mobile é mais rápido porque a substituição acontece na atualização do SO, e não na compra — por isso 2029, com confiança média e não alta.

`e8` é o contrapeso técnico da raiz B, com sinal forte: QNN, NeuroPilot e ENN sem camada comum, e o LiteRT existindo justamente por causa disso. Classe de referência: chips de IA em celular existem há cerca de oito anos e o acesso de terceiros ao NPU continua sendo exceção — é a melhor evidência disponível de que presença de hardware não produz uso por terceiros. `e8.1` é o efeito de poder: a camada de abstração é escrita por quem também vende o modelo.

`e9` deriva da raiz B pelo lado material: o Chrome pede 16 GB de RAM e 22 GB de disco livre, e o Transformers.js v4 roda modelos acima de 8 bilhões de parâmetros. Isso é um aplicativo, não uma página. `e9.1` e `e9.1.1` são o efeito direto para quem publica mídia interativa, e `e9.1.1` é o único efeito do mapa que **desfaz** um ganho histórico da web: o clique sem instalação. Classe de referência: WebGL foi especificado em 2011 e ficou utilizável em todo lugar por volta de 2014 — três anos; WebGPU embarcou no Chrome 113 em 2023 e cobria a grande maioria do tráfego de desktop em 2025-2026, também cerca de três anos. A capacidade chega rápido; o que demora é a prática editorial de usá-la, e é por isso que `e9.1.1` está em 2030 e não em 2028.

**Raiz C.** `e10` tem sinal forte e confiança alta porque a evidência é datada e específica: `Heretic`, abliteração em menos de dez minutos, Gemma 4 sem guarda 90 minutos após o lançamento, 3.500 variantes, 13 milhões de downloads. `e10.1` deriva porque o AI Act coloca o ônus em quem coloca o sistema no mercado, independentemente de o peso ser aberto; o efeito é mover a responsabilidade para o estúdio, a agência ou o artista que embarcou o arquivo. `e10.1.1` é a prática que decorre disso, e ela já tem forma conhecida: cadeia de custódia. `e10.2` é a **retroação da raiz C** e é a que pode matar o mapa — se publicar pesos virar caro, a raiz C desaparece e boa parte da raiz A perde o fornecimento.

`e11` vem do artigo forense de março de 2026, e o mecanismo é direto: o que não vai para o servidor fica no disco, e o disco é apreensível. `e11.1` inverte o slogan — "nada sai" é literalmente verdade, e é exatamente por isso que tudo fica. `e11.1.1` e `e11.2` são as respostas de mercado.

`e12` é o ramo mais especulativo do mapa e está com sinal fraco em toda a cadeia, honestamente. O mecanismo é: um modelo afinado localmente em anos de conversa é um objeto sem categoria jurídica, e objetos sem categoria jurídica acabam em inventário. `e12.1.1` está em **2032, fora do horizonte**, e está aqui porque o sinal precoce dele (regras-modelo europeias sobre sucessão de restos digitais) já existe. `e13` fecha o mapa pelo lado econômico e é o efeito que a queda de preço de API tanto causa quanto atrasa.

### Cobertura STEEP e quem perde

**Social:** e2, e5.1, e11.1, e12.1. **Tecnológico:** e3, e8, e9, e6.1. **Econômico:** e1, e7.2, e13, e1.3. **Ecológico:** e4, e4.1 — a categoria mais fraca deste mapa, coberta por um efeito e um filho, e com a ressalva da pegada de fabricação. **Político:** e6.2, e10.1, e10.2.

**Quem perde**, nomeado: quem vende inferência por token (e13); startups de camada fina sobre API em mobile (e7.2.1); o desenvolvedor web, que perde controle sobre o componente que gera o conteúdo (e6, e7.1); o usuário de aparelho de entrada, no Brasil e fora dele (e3.2.1); quem faz obra que trata de violência (e6.2.1); o suporte técnico (e5); quem publica pesos abertos, se e10.2 se concretizar; e o visitante de uma web que volta a ter requisitos de sistema (e9.1.1).

### Convergências, retroalimentações e contradições

**Convergência (o achado mais valioso).** `e6.2.2` e `e9.1` chegam ao mesmo lugar por caminhos opostos. Pelo ramo da censura: quem precisa de liberdade de conteúdo foge da API do navegador e embarca o próprio modelo. Pelo ramo do desempenho: quem precisa de qualidade acima do que o navegador oferece embarca o próprio modelo. Os dois desembocam na mesma coisa — **uma web com duas IAs: a leve, embutida, gratuita e censurada, e a pesada, baixada, cara em bytes e livre** — e essa bifurcação não estava em nenhuma das raízes. Quem projeta mídia interativa vai ter que escolher entre elas por peça, não por projeto.

**Segunda convergência.** `e1.1.1` (desenhar a cena de download) e `e9.1` (a web com requisitos de sistema) vêm de raízes diferentes e produzem o mesmo ofício novo: alguém que desenha o momento em que a inteligência chega. Isso não existe hoje.

**Retroalimentação negativa (freio).** `e10.2` → raiz C → raiz A. Se o peso aberto virar bem controlado, o fornecimento de modelos para rodar localmente seca, e a raiz A fica dependente exclusivamente do que Apple e Google entregam — o que reforça a raiz B. As três raízes não são independentes: **B se alimenta do estrangulamento de C**.

**Retroalimentação positiva.** `e11.1` → `e11.1.1` → reforça a raiz A: quanto mais a IA local for percebida como risco de apreensão, mais valor terá a ferramenta local que não grava nada — o que só faz sentido se ela for local.

**Contradição não resolvida.** `e1` diz que apps vão embarcar o modelo e cobrar uma vez; `e7.2` diz que a plataforma oferece inferência de graça, e `e1.3` diz que a nuvem fica quase de graça. Os três não podem ser todos verdade para o mesmo produto. O que decide entre eles é uma variável só: **quanto o usuário valoriza que o dado não saia**. Se valorizar muito, `e1` vence em nichos; se não valorizar, `e7.2` e `e1.3` vencem em quase tudo. Registro os três e não resolvo, porque essa é a pergunta empírica que o experimento da seção 10 tenta medir.

**Segunda contradição.** `e4` diz que a IA local economiza energia; `e3.2` diz que ela exige aparelhos maiores, que são fabricados mais caro em carbono. Não há dado aberto que feche essa conta hoje.

## 6. Sinais fracos e wildcards

### Sinais fracos

**1. O runtime que não deixa rastro como argumento de venda.** *Onde foi visto:* o artigo forense de Murtuza (25/03/2026) mostra que o llama.cpp deixa quase nada, enquanto o LM Studio grava até rascunhos descartados de configuração. *O que mudaria:* se "não grava" virar critério de escolha de ferramenta, a arquitetura dos produtos de IA local muda — memória vira opt-in, não padrão. *Sinal observável:* um runtime popular anunciar modo efêmero como recurso de primeira linha na página de produto, não como flag de linha de comando.

**2. O modelo como acervo de museu.** *Onde foi visto:* *RAGE*, na 16ª Bienal de Curitiba, roda IA open source local sem bancos externos. *O que mudaria:* obras de mídia passariam a ter requisito de conservação de pesos, e o campo de preservação de arte digital ganharia um objeto novo. *Sinal observável:* o primeiro edital de aquisição ou de residência que peça o arquivo do modelo e a sua documentação junto com a obra.

**3. O SDK de NPU aberto por quem não é o dono do modelo.** *Onde foi visto:* o LiteRT ganhou integrações de produção com MediaTek e Qualcomm em 28/01/2026 — mas quem escreve o compilador é o Google, que também vende o modelo. *O que mudaria:* se um consórcio neutro (ou um dos fabricantes de silício) publicar uma camada comum, `e8` cai e a raiz A acelera dois anos. *Sinal observável:* Qualcomm ou MediaTek publicando um backend que rode modelo de terceiros no NPU sem passar por runtime do Google ou da Apple.

**4. A cota como pedagogia.** *Onde foi visto:* dentro desta disciplina — três alunos migraram para modelo local depois de a cota gratuita prometida (1.500 requisições/dia) entregar 20. *O que mudaria:* se a instabilidade de cota gratuita for estrutural e não conjuntural, a formação em mídia interativa vira local por necessidade, não por escolha, e uma geração inteira aprende a projetar assumindo modelo próprio. *Sinal observável:* um curso de graduação exigir modelo local no enunciado da tarefa, e não apenas permitir.

**5. A prova de que nada saiu.** *Onde foi visto:* nada ainda — é inferência a partir de `e5.1`. *O que mudaria:* se alguém publicar uma forma leiga e confiável de provar que um app não mandou nada (atestado de sistema operacional, indicador de rede por app, selo verificável), a promessa de privacidade deixa de ser marketing e vira atributo. *Sinal observável:* Apple ou Google expondo, na interface do sistema, um indicador de "este app processou localmente" equivalente ao ponto verde da câmera.

### Wildcards

**Wildcard 1 — Um modelo de 1 bit atinge qualidade de fronteira num celular de entrada.** *Mecanismo:* a linhagem BitNet já mostra paridade com full-precision de mesmo porte a 0,4 GB e 0,028 J por token; se a escala de 1,58 bit se mantiver até a faixa de dezenas de bilhões de parâmetros com kernels que rodem em ARM sem NPU, some a exigência de hardware caro. *Por que é improvável:* o gargalo medido não é precisão, é banda de memória, e 1 bit reduz o volume a mover mas não muda a arquitetura de memória do aparelho; além disso, o próprio cartão do BitNet avisa que a eficiência só aparece no runtime dedicado. *O que faria com o mapa:* mataria `e3.2.1` (a divisão por hardware no Brasil), enfraqueceria `e7` (o fabricante deixa de ser guardião porque qualquer aparelho serve) e faria `e13` acontecer três anos antes. *Sinal precoce:* um modelo ternário acima de 7B rodando acima de 15 tokens/s sustentados — sustentados, não de pico — num aparelho abaixo de US$ 200.

**Wildcard 2 — Peso aberto vira bem de uso dual controlado.** *Mecanismo:* depois de um incidente de dano atribuído publicamente a um modelo abliterado, EUA, UE e Reino Unido tratam publicação de pesos como exportação controlada; Hugging Face passa a exigir verificação de identidade e destino. *Por que é improvável:* o controle é praticamente inexequível (os arquivos já estão espalhados) e a resistência acadêmica e industrial seria enorme. *O que faria com o mapa:* apagaria a raiz C, transferiria toda a raiz A para dentro da raiz B, e transformaria "IA local" em "IA do fabricante que roda no seu aparelho" — que é uma coisa completamente diferente e bem menos interessante. *Sinal precoce:* qualquer exigência de KYC para baixar pesos acima de certo porte numa plataforma grande.

**Wildcard 3 — A plataforma desliga o modelo embutido.** *Mecanismo:* custo de suporte, exposição jurídica por conteúdo gerado, ou uma decisão antitruste levam Google ou Apple a remover ou restringir severamente o acesso de terceiros ao modelo do sistema, depois de milhares de produtos já dependerem dele. *Por que é improvável:* seria uma quebra de compatibilidade de escala rara, e ambas as empresas investiram capital reputacional no movimento. *O que faria com o mapa:* provaria `e7` no pior sentido possível e empurraria todo mundo para `e6.2.2` — cada produto carregando seu próprio modelo, com o peso que isso tem. *Sinal precoce:* uma depreciação anunciada de qualquer uma das seis APIs embutidas do Chrome antes de duas delas chegarem a estável.

## 7. Contra o próprio mapa

### Pré-mortem — é 2031 e este mapa se mostrou errado

**Razão 1 (a mais provável): o preço de nuvem tornou a pergunta irrelevante.** Em 2031 a inferência remota custa tão pouco, responde tão rápido via redes melhores e não esquenta o aparelho, e a IA local ficou confinada a saúde, defesa, jurídico e alguns nichos de latência. O mapa inteiro terá sido uma descrição elaborada de um nicho. *Aponta para:* `e1`, `e13`. **Ação tomada:** `e1` rebaixado de confiança alta para média; `e13` teve o prazo empurrado de 2029 para 2030.

**Razão 2: a física venceu e a plataforma absorveu tudo.** O fosso de banda de 30-50× não fechou, o NPU continuou inacessível a terceiros, e "IA local" virou sinônimo de "os recursos que a Apple e o Google decidiram colocar no sistema". Não houve disrupção de plataforma nenhuma: houve mais uma funcionalidade de sistema operacional. *Aponta para:* a raiz A inteira e `e8`. **Ação tomada:** nenhuma remoção, porque `e8` já está no mapa com sinal forte prevendo exatamente isso — mas registro que, se a razão 2 valer, a raiz A se dissolve na raiz B e o mapa tem duas raízes, não três.

**Razão 3: a raiz C foi estrangulada por regulação.** Depois de um incidente, publicar pesos virou caro e arriscado; o ecossistema aberto encolheu; `e10`, `e11` e `e12` viraram nota de rodapé sobre um período de 2023 a 2027. *Aponta para:* toda a raiz C. **Ação tomada:** `e10.2` já é essa retroação, e o wildcard 2 a cobre; rebaixei `e12` e toda a sua cadeia para sinal fraco.

### Extrapolação linear

`e13.1` ("o valor migra para o que está em volta") é extrapolação linear pura: é a frase que se diz de qualquer commoditização, de qualquer tecnologia, em qualquer década. Ela só sobrevive no mapa porque tem um mecanismo específico atrelado — o nível gratuito de plataforma (`e7.2`) estabelece zero como preço de referência, e zero não é um preço baixo, é uma categoria diferente. Mantida com confiança média e uma anotação: se `e7.2` não se concretizar, `e13.1` cai junto.

`e3.2` ("a régua de compra passa de câmera para memória") também é "mais do mesmo, maior" — celular sempre teve mais RAM a cada ano. A não-linearidade que a salva é o consentimento: a RAM cresceu invisivelmente por uma década; o modelo local é a primeira razão pela qual **o comprador leigo vai ter que entender a especificação**. Mantida.

### Velocidade de adoção confrontada com classe de referência

`e2.2` ("o laboratório troca a API pelo modelo") estava em 2028 e exigia que uma mudança de prática de ensino acontecesse em dois anos. Classe de referência: a adoção de notebooks Jupyter no ensino de computação levou cerca de cinco anos entre a disponibilidade e a prática comum. **Prazo empurrado de 2028 para 2029**, e o filho `e2.2.1` de 2029 para 2030.

`e13` estava em 2029 e assumia deslocamento de mercado em três anos. Classe de referência: Windows Defender empacotado grátis em 2009, maioria do mercado por volta de 2015 — seis anos. Como o ciclo mobile é mais rápido (a substituição vem na atualização do sistema, não na compra), não apliquei os seis anos inteiros. **Prazo empurrado de 2029 para 2030.**

`e9.1.1` ("o link deixa de ser o degrau mais baixo") tem sinal fraco e prazo 2030. Classe de referência contrária: os Progressive Web Apps foram especificados em 2015 e, dez anos depois, não deslocaram a loja de aplicativos. Prazos que dependem de mudança de hábito de publicação na web erram sempre para menos. Mantido em 2030, com confiança média e esta ressalva escrita.

### A raiz que não acontece

**Se a raiz A não se concretizar** (a inferência local nunca fica boa o bastante fora do fabricante), sobram a raiz B quase inteira — a plataforma continua embutindo modelo, e o problema de quem manda continua — e a raiz C inteira, porque pesos abertos rodam em servidor também. O mapa perde os ramos `e1`–`e5`.

**Se a raiz B não se concretizar** (Chrome recua, Apple fecha o protocolo), sobram A e C, e o mapa fica *mais* limpo: a IA local vira escolha de quem constrói, não imposição de quem distribui. Perde-se `e6`–`e9`, que são justamente os efeitos mais desconfortáveis.

**Se a raiz C não se concretizar** (pesos param de ser publicados abertamente), a raiz A sobrevive apenas na forma que a raiz B permite. Ou seja: **A e C são separáveis, mas A depende de C para existir fora da plataforma.** Isso é uma dependência real entre raízes, e a declaro em vez de esconder — o mapa não tem três raízes independentes, tem duas independentes e uma condicionada.

### Suposições escondidas

1. **Que os pesos abertos continuam abertos.** Nada garante isso; é o wildcard 2.
2. **Que a energia do aparelho é de graça.** Não é: é bateria, e bateria é tempo de uso. O mapa trata `e4` como benefício ambiental e quase não trata como custo de experiência.
3. **Que a regulação de IA continua tratando o modelo como produto e não como conteúdo.** Se um regulador decidir que o modelo local é editor, `e10.1` muda de natureza.
4. **Que o fabricante continua permitindo.** Todo o ramo `e6.2.2`/`e9` assume que embarcar o próprio modelo via WebGPU continuará permitido pelo navegador e pela loja. É exatamente o tipo de porta que se fecha. Vira o wildcard 3.
5. **Que o aparelho de quem lê este mapa é o aparelho médio.** Não é. Quem escreve sobre IA local roda IA local; a base instalada global é muito mais pobre.
6. **Que "local" significa "privado".** O mapa usa os dois como sinônimos em `e11` e discute a diferença só depois. São coisas distintas: local e mal-implementado vaza igual.

### Viés do autor

Dois, nomeados. Primeiro, **viés de autonomia**: a ideia de que ninguém pode desligar o seu modelo é esteticamente atraente para quem ensina exploração de futuros, e isso fez a raiz C entrar mais forte do que a evidência sustenta — treze milhões de downloads é uma comunidade, não uma sociedade. Segundo, **viés de plataforma**: o ramo da Prompt API está desenvolvido demais em relação ao seu peso real, porque é um conflito documentado, datado e com nomes próprios — e conflitos documentados são mais fáceis de escrever do que difusões silenciosas. Se há um efeito superdimensionado neste mapa, é `e6.2`.

### Calibração

Ordem 1: 6 alta, 7 média, 0 baixa. Ordem 2: 4 alta, 17 média, 2 baixa. Ordem 3: 0 alta, 12 média, 7 baixa. A confiança cai com a ordem, e nenhum efeito de terceira ordem tem confiança alta.

### Registro de alterações

- `e1`: confianca **alta → media**, porque o efeito depende de o usuário aceitar um download de centenas de megabytes, e o Play exige consentimento explícito acima de 200 MB fora do Wi-Fi.
- `e2.2`: prazo **2028 → 2029**, porque a classe de referência (adoção de Jupyter no ensino) levou cerca de cinco anos, não dois.
- `e2.2.1`: prazo **2029 → 2030**, por arrasto do pai.
- `e2.3` ("festivais de mídia criam categoria de obra que roda offline"): **removido**, porque é o anti-padrão "surge uma categoria nova" sem ator nomeado nem mecanismo. Vai para a seção 12.
- `e7.2`: confianca **alta → media**, porque "o preço de referência passa a ser zero" extrapola de um anúncio de um fabricante para um mercado inteiro.
- `e8.2` ("reguladores passam a exigir rótulo de capacidade de IA no aparelho"): **removido**, porque é o anti-padrão "reguladores criam categoria nova" sem regulador nomeado. Vai para a seção 12.
- `e11`: confianca **alta → media**, porque a evidência é um preprint de autor único, sem revisão por pares, que mede três runtimes em Windows e Linux e não mede iOS nem Android — que é onde o público deste mapa está.
- `e12` e cadeia (`e12.1`, `e12.1.1`, `e12.2`): sinal **medio → fraco** em todos, porque não encontrei nenhum artefato de produto ou de mercado, só literatura jurídica antecipatória.
- `e12.3` ("surge a profissão de curador de modelo pessoal"): **removido**, anti-padrão "surge uma nova profissão". Vai para a seção 12.
- `e13`: prazo **2029 → 2030**, pela classe de referência do Windows Defender (seis anos entre empacotamento grátis e maioria de mercado), descontada pelo ciclo mais rápido do mobile.

Cota cumprida: raiz A teve `e1` rebaixado e `e2.3` removido; raiz B teve `e7.2` rebaixado e `e8.2` removido; raiz C teve `e11` e toda a cadeia `e12` rebaixados e `e12.3` removido.

## 8. O que a máquina errou

1. **Repeti números de adoção do Ollama que nenhuma página que abri sustenta.** As buscas devolveram, com ar de fato consolidado, "52 milhões de downloads mensais no Q1 2026", "5,0 milhões de usuários ativos em maio de 2026", "8,9 milhões de desenvolvedores", "US$ 88 milhões captados" e "135 mil GGUFs no Hugging Face". Abri duas das páginas apontadas como fonte (getpanto e Hostinger) e **nenhuma das duas continha esses números** — a Hostinger falava de "mais de 4.500 entradas curadas e da comunidade" num tracker não nomeado, o que é outra métrica. Uma terceira (dev.to) devolveu 404. Retirei todos esses números da seção 3 e escrevi "sem número encontrado". Este é o erro mais perigoso do trabalho, porque números de resumo de busca soam idênticos a números verificados.

2. **Atribuí WebGPU ao LiteRT-LM com base num resumo de busca, e o post original não diz isso.** O resumo afirmava que "powered by WebGPU, LiteRT-LM entrega roteamento client-side"; ao abrir o post do Google Developers Blog, a palavra WebGPU não aparece, e a data é 24/09/2025, não 2026. Corrigi no texto. Perceba-se o padrão: os resumos de busca fundem posts diferentes do mesmo blog.

3. **Confundi a data da posição da Mozilla.** O rastreador de standards-positions mostra a posição proposta em 28/04/2025; a cobertura jornalística e a declaração de Archibald que cito são de 30/04/2026. São dois momentos distintos de um processo de dois anos, e eu quase os apresentei como um só. No texto, cito as duas datas separadamente.

4. **Não consegui verificar o status de estabilidade da Prompt API e há contradição entre fontes.** A documentação oficial do Chrome que abri lista as APIs "em estágios diferentes" e não afirma que a Prompt API está em estável; a cobertura de imprensa afirma que ela embarcou no Chrome 148 em 05/05/2026. Não abri nada que confirmasse a versão e a data. Por isso o texto diz "está no Chrome" e não "está estável desde a versão 148".

5. **Duas fontes que eu queria citar não abriram e foram descartadas:** o estudo da ACM SIGMETRICS sobre pegada ambiental de nuvem versus borda devolveu 403, e a análise da Android Authority sobre oito anos de NPU subutilizado também devolveu 403. Usei os argumentos deles apenas onde outra fonte aberta os sustentava — e o número "mais de 90% de economia de energia" aparece no texto com a palavra "reportam", porque eu não abri o estudo primário.

6. **Um número que me parece redondo demais e que repito com ressalva:** "mais de 90% de economia de energia" e "até 100× mais rápido que CPU" (LiteRT). Ambos são de material de quem vende a tecnologia — o segundo é do próprio blog do Google — e ambos são o tipo de número que se mede na condição mais favorável. Sinalizo no texto de quem são.

7. **O prazo de `e1.2.1` usa uma classe de referência que eu não verifiquei com fonte:** "autocompletar de código levou cerca de três anos do preview do Copilot (2021) até virar comportamento esperado (2024)". Isso é conhecimento de memória, não fonte aberta nesta rodada. Fica declarado como estimativa, não como dado.

## 9. Três cenários para 2031

**Provável.** Em 2031, IA local é uma camada, não um lugar. Quase todo aplicativo de mídia roda um modelo pequeno no aparelho para as tarefas rápidas — classificação, correção, extração, previsão do próximo gesto — e escala para a nuvem para o que exige raciocínio longo, e ninguém chama isso de "IA local", chamam de "o app funciona". O modelo vem do sistema operacional em 80% dos casos; quem precisa de um modelo específico o embarca e paga em megabytes. O NPU continua sendo usado principalmente pelo fabricante. A promessa de privacidade sobreviveu como argumento de venda em saúde, jurídico e aplicativos infantis, e se diluiu no resto. O preço de API caiu tanto que a conversa sobre custo acabou. *Sinal precoce de que estamos aqui:* a segunda das seis APIs embutidas do Chrome chegar a estável sem que Firefox ou Safari a implementem, e produtos continuarem usando assim mesmo.

**Desejável.** Em 2031 existe uma camada comum de acesso a NPU que não pertence a quem vende modelos, e existe um jeito padronizado de uma página ou app declarar contra qual modelo foi escrita e verificar qual recebeu. Rodar local é uma escolha informada: a interface diz onde a inferência aconteceu com a mesma clareza com que hoje diz que a câmera está ligada, e mentir sobre isso é infração, não marketing. Pesos abertos continuam abertos, com proveniência rastreável por padrão, e a discussão sobre guarda de segurança migrou de "impedir a modificação" — que não funciona — para "responsabilizar a distribuição", que funciona. Museus conservam modelos. Para chegar aqui teria sido preciso que um consórcio neutro publicasse a camada de NPU antes de 2028, e que Apple ou Google expusesse o indicador de processamento local no sistema. *Sinal precoce:* Qualcomm ou MediaTek publicando backend de NPU aberto a modelos de terceiros sem intermediação.

**Indesejável.** Em 2031 "IA local" significa "a IA que o fabricante do seu aparelho instalou". O peso aberto virou bem controlado depois de um incidente, o Hugging Face pede identificação para baixar qualquer coisa acima de 3B, e rodar um modelo que você escolheu no seu próprio computador é tecnicamente possível e socialmente marginal. A Prompt API virou o caminho padrão da web, com a política de conteúdo de uma empresa valendo dentro de toda página, e um autor descobre que sua ficção não pode ser escrita ali sem que ninguém lhe diga por quê. O aparelho guarda anos de conversa em JSON com timestamp, e a apreensão do celular virou a forma mais eficiente de reconstruir o que alguém pensou. A promessa se cumpriu ao pé da letra e pelo avesso: nada saiu do dispositivo, e é justamente por isso que está tudo lá. *Sinal precoce:* qualquer exigência de verificação de identidade para baixar pesos numa plataforma grande, ou a primeira decisão judicial que aceite histórico de LM Studio como prova.

## 10. O experimento

**O que é.** *Bancada da inferência local* — a **mesma** peça interativa, mínima e bem definida, implementada em três caminhos e instrumentada para medir. A peça: um campo de texto que responde enquanto a pessoa digita (não depois de ela terminar), em três versões:

- **A — nuvem:** chamada a API de modelo remoto.
- **B — modelo embarcado na página:** WebGPU via Transformers.js v4 ou WebLLM, modelo de 0,5B a 3B em Q4, baixado na primeira visita.
- **C — modelo da plataforma:** Prompt API do Chrome, onde o modelo é o que o navegador decidiu dar.

Cada versão registra, para cada interação: tempo até o primeiro token, tokens por segundo **sustentados ao longo de cinco minutos** (não de pico), bytes baixados na primeira visita, temperatura ou proxy térmico disponível, queda de bateria, e — o item mais importante — **se houve recusa**, contra uma lista fixa de vinte prompts de conteúdo legítimo e difícil (violência em ficção, saúde, política, sexualidade em contexto artístico, linguagem ofensiva citada).

**Que pergunta sobre o futuro ele ajuda a responder.** Três, todas ligadas a contradições que a seção 5 registrou e não resolveu. (1) A que ponto de latência a interação muda de natureza — existe um limiar abaixo do qual o campo deixa de parecer um assistente e passa a parecer um instrumento? (2) Quanto custa, em bytes e em minutos de espera, a liberdade de escolher o próprio modelo — é o preço de `e6.2.2` e `e9.1`. (3) A censura da plataforma é perceptível por quem cria, ou é invisível? A lista de vinte prompts responde a `e6.2.1` com número, não com opinião.

**Que tecnologia emergente ele usa, e por que não dá com a madura.** Usa WebGPU com runtime de modelo no cliente e a API de modelo embutida do navegador. Não dá com tecnologia madura por uma razão simples: as versões B e C **não existiam** como opção viável até 2026, e são precisamente elas que produzem os dados. Fazer só a versão A é o que todo mundo já faz, e ela não responde a nenhuma das três perguntas — ela é o grupo de controle.

**O que a turma vai fazer quando testar isso em sala.** Cada pessoa roda as três versões no **seu próprio aparelho**, e não num aparelho do laboratório — porque a variância entre aparelhos é o achado, não o ruído. A sala produz uma tabela com uma linha por aparelho: modelo, RAM, se tem NPU, os três tempos até o primeiro token, os três valores de tokens/s sustentados, os bytes baixados, e quantos dos vinte prompts foram recusados em C e em B. Depois disso, a discussão tem material: quem tem aparelho de entrada descobre que a versão B não roda, e isso é `e3.2.1` acontecendo na mesa; quem tem Mac recente descobre que B é mais rápido que A, e isso é `e1.2.1`. A lista de recusas de C, lida em voz alta, é a aula inteira sobre `e6.2`.

**O que seria um resultado que me faria mudar de ideia.** Dois resultados, específicos. **Primeiro:** se a versão B rodar aceitavelmente (acima de 10 tokens/s sustentados) em mais de 70% dos aparelhos da turma, incluindo os de entrada, então `e3.2.1` está errado e a desigualdade de hardware não é a barreira que este mapa supõe — eu teria superestimado a física e subestimado a quantização. **Segundo:** se a versão C não recusar nenhum dos vinte prompts, então `e6.2` está superdimensionado, e eu teria confundido uma política escrita com uma prática efetiva — o que seria consistente com o viés que declarei na seção 7. Qualquer um dos dois me faria reescrever um terço deste mapa.

## 11. Fontes

Vinte e três fontes abertas e lidas em 11/09/2026. As que não abriram estão registradas na seção 12.

1. https://github.com/microsoft/BitNet — sustenta os números de aceleração (6,17× x86, 5,07× ARM), a redução de energia (82,2%) e o histórico de releases de 2025-2026 do `bitnet.cpp`. Repositório oficial do fabricante: confiável para o que ele mesmo mede, e é material de quem vende a técnica.
2. https://huggingface.co/microsoft/bitnet-b1.58-2B-4T — sustenta 0,4 GB não-embedding, 29ms de latência, 0,028 J por token, a comparação com LLaMA 3.2 1B e Qwen2.5 1.5B, os 21.324 downloads no último mês e a ressalva de que a eficiência não aparece no `transformers` padrão. Cartão de modelo oficial com a autocrítica incluída, o que aumenta a confiabilidade.
3. https://arxiv.org/abs/2504.12285 — sustenta que o BitNet b1.58 2B4T é o primeiro LLM de 1 bit nativo em escala de 2B, treinado em 4T tokens, com paridade contra full-precision de mesmo porte. Preprint do próprio fabricante: forte no método, interessado no resultado.
4. https://v-chandra.github.io/on-device-llms/ — sustenta o fosso de banda (50-90 GB/s contra 2-3 TB/s), a queda térmica medida do iPhone 16 Pro (−41,5%) e do S24 Ultra (−15%), a latência sub-20ms e o limite de RAM. Autores da Meta (Vikas Chandra, Raghuraman Krishnamoorthi), 24/01/2026: a fonte mais útil do levantamento, e explícita sobre os limites.
5. https://arxiv.org/html/2605.20706v1 — *Llamas on the Web*, 20/05/2026: sustenta o maior estudo cross-device de inferência em navegador (10 modelos, 16 dispositivos, 8 fabricantes), a vantagem nativa de até 10× no prefill e a economia de 29-33% de memória. Preprint acadêmico com metodologia declarada.
6. https://arxiv.org/abs/2412.15803 — WebLLM: sustenta a retenção de até 80% do desempenho nativo em navegador e a arquitetura WebGPU + WebAssembly + MLC/TVM. Preprint revisto em 13/04/2026, por quem constrói o framework.
7. https://huggingface.co/blog/transformersjs-v4 — sustenta a data (09/02/2026), o runtime WebGPU reescrito em C++, o suporte a modelos acima de 8B e os ~60 tokens/s do GPT-OSS 20B num M4 Pro Max. Blog oficial: números de melhor caso.
8. https://developer.chrome.com/docs/ai/get-started — sustenta as seis APIs embutidas, os estágios diferentes de maturidade e os requisitos de hardware (16 GB RAM, 22 GB disco, >4 GB VRAM, 4+ núcleos). Documentação oficial; não confirma a versão nem a data de estabilização.
9. https://domenic.me/builtin-ai-api-design/ — 13/08/2025: sustenta o reconhecimento, por quem projeta a API, de que o não-determinismo conflita com a promessa de compatibilidade da web. Fonte interessada, mas honesta sobre a tensão — é por isso que ela vale.
10. https://www.theregister.com/2026/04/30/mozilla_pushes_back_against_googles/ — sustenta as citações de Jake Archibald, a objeção de interoperabilidade, a exigência de aceitar a política de uso do Google, e o status de teste em Chrome e Edge em 30/04/2026. Imprensa técnica com citação direta; a atribuição de "restrições além da lei" é argumento da Mozilla, não fato verificado por mim.
11. https://github.com/mozilla/standards-positions/issues/1213 — sustenta a posição formal negativa e o rótulo "concerns: interoperability". Registro primário; a data que aparece (28/04/2025) é do início do processo.
12. https://developer.apple.com/videos/play/wwdc2026/241/ — sustenta a entrada de imagem, o protocolo `LanguageModel` para modelos de terceiros, as ferramentas de sistema (OCR, código de barras, RAG por Spotlight), o Private Cloud Compute sem custo abaixo de 2 milhões de downloads, o SDK Python, o `fm chat` e o plano de abrir o código. Fonte primária do fabricante; tudo que é promessa está marcado como promessa.
13. https://developer.android.com/google/play/on-device-ai — sustenta os limites de 1,5 GB por AI pack, 4 GB cumulativos, os três modos de entrega, a segmentação por RAM e SoC e o consentimento acima de 200 MB fora do Wi-Fi. Documentação oficial, em beta.
14. https://developers.googleblog.com/on-device-genai-in-chrome-chromebook-plus-and-pixel-watch-with-litert-lm/ — 24/09/2025: sustenta que o LiteRT-LM alimenta Gemini Nano em Chrome, Chromebook Plus e Pixel Watch, em "centenas de milhões de dispositivos". Blog oficial; **não** menciona WebGPU, ao contrário do que resumos de busca afirmam.
15. https://developers.googleblog.com/litert-the-universal-framework-for-on-device-ai/ — 28/01/2026: sustenta a fragmentação de SDKs de NPU, as integrações de produção com MediaTek e Qualcomm e os números de aceleração (até 100× sobre CPU, 3× sobre GPU no prefill do Gemma 3 1B num S25 Ultra). Material de quem vende a camada de abstração; números de melhor caso.
16. https://9to5google.com/2026/04/02/gemini-nano-4/ — 02/04/2026: sustenta as duas variantes do Gemini Nano 4 sobre Gemma 4 (E2B e E4B), 140+ idiomas, multimodalidade e a disponibilidade em preview via AICore. Imprensa especializada reportando anúncio do fabricante.
17. https://counterpointresearch.com/en/reports/ai-advanced-pcs-to-surpass-half-of-global-shipments-in-2026 — sustenta ~39% dos embarques em 2025 e ~59% em 2026, o gatilho do fim do Windows 10 e o limiar de 40 TOPS do Copilot+. Casa de análise de mercado: projeção, não medição.
18. https://arxiv.org/html/2603.23996v1 — Shariq Murtuza, 25/03/2026: sustenta o inventário forense de LM Studio (JSON com timestamp, presets, rascunhos, cache de RAG), Ollama (manifests, histórico de CLI em texto puro, logs) e llama.cpp (quase nada). Preprint de autor único, sem revisão por pares, restrito a Windows e Linux — a razão pela qual rebaixei `e11`.
19. https://www.akerman.com/en/perspectives/open-weight-ai-models-safety-guardrails-can-be-removed-in-minutes-using-free-publicly-available-tools.html — sustenta a investigação FT/Alice de 25/05/2026, o `Heretic`, a abliteração em menos de dez minutos, o Gemma 4 desprotegido em 90 minutos, as 3.500 variantes e os 13 milhões de downloads, e a discussão sobre tratar peso aberto como bem de uso dual. Análise de escritório de advocacia sobre reportagem de terceiro: confiável para o enquadramento jurídico, secundária para os números.
20. https://arxiv.org/pdf/2607.05475 — Cai et al., 08/07/2026: sustenta que os gargalos de eficiência do NPU móvel são maiores do que o TOPS anunciado sugere. Preprint acadêmico independente dos fabricantes, o que é raro neste assunto.
21. https://actaverum.com/ia-local-estado-da-arte/ — 15/06/2026, redação brasileira: sustenta o panorama de runtimes (Ollama, llama.cpp), o argumento de que a abertura virou argumento jurídico e o contexto de uso em português. Publicação editorial sem metodologia declarada — usada para enquadramento, não para número.
22. https://www.katiavelo.com.br/bienal-de-curitiba-transforma-visitantes-em-parte-das-obras-interativas/ — 21/08/2026: sustenta a obra *RAGE*, de Juliana Berto e Thiago Martins de Melo, com "inteligência artificial open source criada para operar localmente, sem recorrer a bancos de dados externos", os 300+ livros, a impressão do aforismo e a exposição no MON até 15/11/2026. Cobertura cultural; a descrição técnica é a dos artistas, não uma verificação.
23. https://www.airiskaware.com/pt/insights/brazil-lgpd-ai-governance-2026 — sustenta a ANPD como agência independente (MP nº 1.317/2025, Lei nº 15.352/2026 de 25/02/2026) e a IA como um dos quatro eixos prioritários de fiscalização em 2026-2027. Publicação de consultoria de conformidade: confiável para datas e instrumentos legais, interessada no tema.

## 12. Anexo — o levantamento bruto

### 12.1 Como esta rodada foi feita

Modo MAPA da skill `futurizacao-giordano` v1.2.0, em execução não interativa, com `briefing:` completo no pedido. Busca na web ativa. Vinte buscas (dez em inglês, seis em português, quatro mistas) e vinte e nove tentativas de abertura de página, das quais vinte e três abriram e foram lidas. Ordem de trabalho: formato e verificador lidos primeiro; âncora no presente (§1); critério de maturidade aplicado a seis candidatos (§2); roda; cruzamentos; bateria contra o próprio mapa (§6); cenários e experimento; verificação.

### 12.2 Premissas assumidas (o que o briefing não cobriu)

O `briefing:` do pedido cobriu tema, slug, autor, zona de interesse, horizonte, público, recorte, descartado, raiz suspeita, viés, busca e saída. Ficaram fora e foram assumidos, sem rebaixamento de confiança porque o briefing é completo no que a entrevista do §0 exige:

- **Profundidade:** três ordens, conforme o formato da disciplina.
- **Modo de entrada:** a partir do tema/inovação, não a partir de um setor.
- **Ideias óbvias a excluir:** as que serviriam a qualquer um dos 19 temas. Aplicado literalmente — ver os três efeitos removidos em 12.4.
- **Falseador:** evidência de adoção já em maioria (Rogers), ou de que a tecnologia só melhora o que existe sem romper nada. Esse critério virou a pergunta 3 do §2 e derrubou quatro candidatos a raiz.
- **Nota sobre o Brasil:** o briefing pede recorte global; a nota brasileira entrou como parágrafo próprio na seção 3 e como efeitos `e1.1.2` e `e3.2.1`.
- **`publico_ok`:** assumido `false`, o padrão do formato.
- **`confianca` do mapa inteiro:** `media`. A âncora no presente é forte e datada; a raiz C é a mais frágil; e o mapa tem uma dependência entre raízes (A depende de C fora da plataforma) que declaro em vez de esconder.

### 12.3 Candidatos a disrupção-raiz recusados, com o motivo

| Candidato | Veredito | Motivo |
|---|---|---|
| Chamar API de modelo na nuvem | recusado | Adoção em maioria desde 2023. Contexto, seção 3. |
| Modelo pequeno em servidor próprio | recusado | Adoção em maioria. É mudança de endereço, não ruptura. |
| NPU no aparelho | recusado | Pré-condição de hardware, já presente em ~59% dos PCs embarcados em 2026. Virou `e8`. |
| Arquitetura híbrida local + nuvem | recusado | Consequência da raiz A e do colapso de preço, não causa. Virou `e1.2`. |
| Modelo de 1 bit / BitNet | recusado como raiz isolada | É técnica dentro da raiz A. Virou evidência da seção 3 e o wildcard 1. |
| Fine-tuning local (unsloth e similares) | recusado | Absorvido pela raiz C: o que importa não é treinar local, é o modelo ser um arquivo com dono. |

### 12.4 Efeitos cortados no §6, na íntegra

- **`e2.3` — "Festivais de mídia criam uma categoria de obra que roda offline."** Removido. Anti-padrão explícito da skill: categoria nova sem festival nomeado e sem mecanismo que a ligue ao pai. Serviria a qualquer um dos 19 temas.
- **`e8.2` — "Reguladores passam a exigir rótulo de capacidade de IA no aparelho, como o selo Procel."** Removido. Anti-padrão "reguladores criam categoria nova". Sem regulador nomeado, sem instrumento e sem mecanismo. A analogia com o Procel era retórica, não causal.
- **`e12.3` — "Surge a profissão de curador de modelo pessoal."** Removido. Anti-padrão "surge uma nova profissão", o mais frequente em mapas de futuro e o menos informativo.
- **Efeito considerado e não escrito — "A escola reorganiza o currículo em torno de IA local."** Descartado antes de entrar. Substituído por `e2.2`, que nomeia o ator (laboratório de creative coding), o mecanismo (a cota gratuita instável deixa de ser barreira) e a evidência (a própria turma migrou para modelo local depois de a documentação prometer 1.500 requisições/dia e a conta entregar 20).
- **Efeito considerado e não escrito — "A IA local democratiza o acesso à inteligência."** Descartado por falhar no teste da causa solta: poderia decorrer de qualquer barateamento de IA, inclusive do oposto deste mapa (nuvem mais barata). Além disso, `e3.2.1` mostra que o efeito pode ser o inverso.
- **Efeito considerado e não escrito — "Agentes autônomos passam a rodar no dispositivo sem supervisão."** Descartado por invadir o tema 1 (programação agêntica) e o tema 2 (contenção de agentes). Fronteira respeitada.

### 12.5 Fronteira com os temas vizinhos, na prática

Três efeitos foram deliberadamente não desenvolvidos para não invadir tema alheio:

- **Tema 17 (soberania de dados, local-first, ponta a ponta):** `e11` e `e11.1` tocam privacidade, mas o objeto aqui é o **modelo** no disco, não o **dado** nem a **conta**. Toda a discussão de sincronização, chaves e passkeys fica lá.
- **Tema 13 (voz e som gerativos):** TTS no navegador (`@pbji/piper-tts-web`) e reconhecimento local apareceram nas buscas e no material da turma, e foram deixados fora. O que sobrou aqui é a inferência, não a síntese de voz.
- **Tema 15 (o navegador como console 3D e XR):** `e9` trata do navegador como hospedeiro de **modelo**; renderização, WebXR e o pipeline gráfico ficam no tema 15. O ponto de contato real é o WebGPU, que serve aos dois — e vale registrar que é a mesma API que sustenta as duas tendências.

### 12.6 Buscas que não deram em nada

- **"Ollama downloads users 2026 local LLM adoption statistics"** — devolveu números altos e específicos em vários agregadores, e nenhuma das páginas primárias que abri os continha. Registrado como erro 1 da seção 8. Não há, até onde consegui verificar, número público auditável de usuários ativos de runtime local.
- **"Hugging Face GGUF models count 2026"** — mesma situação: "135 mil" e "mais de 180 mil" aparecem em páginas de conteúdo secundário, nenhuma com fonte. Não usado.
- **"Brasil smartphone 4GB RAM base instalada 2026"** — não achei dado de base instalada brasileira por faixa de RAM ou por presença de NPU. Só material de varejo e previsão de preço. O efeito `e3.2.1` fica, por isso, com sinal fraco: ele é plausível e não é medido.
- **"modelo local rodando no navegador obra interativa arte generativa"** — em português, devolveu quase só material genérico sobre arte generativa. O único achado real foi a *RAGE*, e por caminho indireto (cobertura da Bienal, não catálogo de arte digital).
- **Estudo da ACM SIGMETRICS sobre pegada ambiental nuvem × borda** (`https://dl.acm.org/doi/10.1145/3764944.3764950`) — **403 Forbidden**. Os números de economia de energia (>90%) aparecem no texto atribuídos a "estudos de 2026 reportam", e não como dado verificado por mim.
- **Android Authority, "8 anos de chips de IA em celular"** (`https://www.androidauthority.com/do-phones-really-need-npu-3632115/`) — **403 Forbidden**. O argumento entrou como classe de referência em `e8`, declarado como estimativa.
- **Cobertura da Bienal em `bemparana.com.br`, `megustacuritiba.com.br` e `wherecuritiba.com.br`** — abriram na leitura, mas devolvem 403/406 a verificador automático. A fonte citada na seção 11 é a que responde (`katiavelo.com.br`), com o mesmo conteúdo.
- **`dev.to` sobre benchmarks do Ollama em 2026** — **404 Not Found**.
- **Estudo da FGV sobre conformidade de sete plataformas de IA com a LGPD** — apareceu em resumo de busca, e a página que eu abri sobre governança de IA no Brasil **não o menciona**. Não citado.

### 12.7 Material da disciplina usado como contexto (não como fonte)

Da varredura da turma: `bitnet.cpp` como escolha nº 1 de desenvolvimento; `privateGPT`, `hermes-agent`, `opencode`, `jan`, `gpt4all`, `llama.cpp-ts`, `expo-ai-kit`, `openvino-genai-node`, `@pbji/piper-tts-web`, `unsloth`, `Localforge`, `Termly`; da varredura sobre simulação, `mecha-factory` e `Gestalt Village`; da varredura sobre bem-estar, `aura-on-device` (Phi-3-mini) e `SelfOS`. Nenhum destes foi aberto ou verificado nesta rodada — entram como indicação de onde a turma olhou, não como evidência. O `Termly` (controlar o agente da própria máquina pelo celular, com criptografia de ponta a ponta) é o sinal fraco mais interessante do conjunto e sugere um efeito que **não** desenvolvi por falta de evidência aberta: o computador pessoal virando servidor de IA pessoal, com o celular como terminal. Se alguém da turma achar artefato verificável disso, é um `e14` legítimo.

### 12.8 Classes de referência usadas, reunidas

| Onde | Classe de referência | Intervalo | Fonte |
|---|---|---|---|
| `e9`, `e6` | WebGL: especificado 2011, utilizável em toda parte ~2014 | ~3 anos | conhecimento de domínio, não verificado nesta rodada |
| `e9`, `e6` | WebGPU: Chrome 113 em 2023, maioria do tráfego desktop em 2025-26 | ~3 anos | consistente com o levantamento cross-device de arXiv:2605.20706 |
| `e9.1.1` | PWA/Service Worker: 2015, não deslocou a loja em 10 anos | >10 anos, não ocorreu | conhecimento de domínio |
| `e13`, `e7.2.1` | Windows Defender: empacotado grátis 2009, maioria ~2015 | ~6 anos | conhecimento de domínio |
| `e2.2` | Jupyter no ensino de computação: disponível a prática comum | ~5 anos | conhecimento de domínio |
| `e1.2.1` | Autocompletar por modelo: preview do Copilot 2021, esperado 2024 | ~3 anos | estimativa declarada, não verificada |
| `e3` | Smartphone: demo a 10% de adoção | ~4 anos | régua da skill |
| `e8` | Chips de IA em celular: 8 anos e o NPU segue majoritariamente inacessível a terceiros | 8 anos, não ocorreu | Android Authority (403, não aberta) |
| `e2.1.1` | Preservação de arte em software (Flash, Director) | ~15 anos | conhecimento de domínio |

Quatro destas nove não têm fonte aberta nesta rodada, e estão marcadas. Isso é uma fraqueza real do mapa: metade dos prazos repousa em conhecimento de domínio, não em dado verificado.

### 12.9 Saída completa do verificador

Comando: `python3 .../futurizacao-giordano/references/verificar.py tendencia-ia-local-no-dispositivo-e-no-navegador.md --links`, rodado em 11/09/2026.

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 3 (frontmatter diz 3)
efeitos ordem 1: 13 (frontmatter diz 13)
efeitos ordem 2: 23 (frontmatter diz 23)
efeitos ordem 3: 19 (frontmatter diz 19)
prazo > horizonte (2031) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 2 [('e2.1.1', 2032), ('e12.1.1', 2032)]
confiança ordem 1: alta 6 · media 7 · baixa 0
confiança ordem 2: alta 4 · media 17 · baixa 2
confiança ordem 3: alta 0 · media 12 · baixa 7
links da seção 11: 23/23 respondem (frontmatter diz fontes: 23)
RESULTADO: ok
```

**Os dois prazos fora do horizonte, declarados.** `e2.1.1` (museus exigirem o arquivo do modelo na aquisição) está em **2032**, um ano além da janela deste mapa, porque a classe de referência — a preservação institucional de arte em software — levou cerca de quinze anos entre o problema aparecer e existir prática. `e12.1.1` (réplicas locais e não comerciais de parentes mortos) está em **2032** porque depende de `e12.1`, que já está em 2031, e de mudança jurídica que ainda não começou. Os dois ficam no mapa porque os sinais precoces deles já existem; ambos estão anotados na prosa da seção 5 como fora da janela.

**Calibração.** A confiança cai monotonicamente com a ordem: 46% de alta na primeira ordem, 17% na segunda, 0% na terceira. Isso é o que o método pede, e foi obtido pelos rebaixamentos registrados na seção 7, não por desenho inicial — a primeira versão tinha 8 de 13 efeitos de primeira ordem em confiança alta.
