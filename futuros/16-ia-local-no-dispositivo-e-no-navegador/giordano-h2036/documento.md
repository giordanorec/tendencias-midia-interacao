---
tema: "IA local: no dispositivo e no navegador"
slug: ia-local-no-dispositivo-e-no-navegador
autor_login: grec
zona_de_interesse: Criação e plataforma
data: 2026-09-22
horizonte: 2036
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 14
efeitos_ordem_2: 21
efeitos_ordem_3: 21
tecnologias_citadas: [BitNet b1.58, bitnet.cpp, BitNet-embedding, VibeASR.cpp, llama.cpp, GGUF, Ollama, LM Studio, WebGPU, WebLLM, LlamaWeb, Transformers.js v4, Chrome Prompt API, Gemini Nano, Gemini Nano 4, Gemma 4 E2B/E4B, Gemma 3n, AICore, ML Kit GenAI Prompt API, Apple Foundation Models framework, LanguageModel protocol, Private Cloud Compute, CoreAILanguageModel, MLXLanguageModel, MLX, ExecuTorch, NPU, LoRA, MobileFineTuner, EdgeTune, Heretic, abliteração, NVIDIA ACE, Nemotron 3 Nano, Krita AI Diffusion, ComfyUI, exo, RDMA over Thunderbolt 5, Termly, quantização 4 bits]
fontes: 26
confianca: media
experimento: "O diário que pensa — um diário no navegador com modelo local (WebGPU) que responde enquanto se escreve, guarda a memória num arquivo que a pessoa pode exportar, entregar ou apagar, testado em notebook, celular de 4 GB e com fallback para a nuvem visível"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Até 2036, a inferência no aparelho do usuário deixa de ser curiosidade de desenvolvedor, mas não se espalha por igual e não chega sozinha. Quatro rupturas sustentam o mapa. A primeira: a chamada de IA deixa de custar para quem publica e passa a custar para quem usa — em memória, bateria e download —, o que permite interfaces que consultam o modelo a cada gesto; ela é freada pela escassez de memória que os próprios datacenters de IA provocaram, e o celular mais vendido no Brasil em 2026 tem 4 GB. A segunda: o modelo vira componente do sistema e do navegador, e quem escreve o software deixa de escolher o modelo e a política de conteúdo — o Chrome embarcou a Prompt API em maio de 2026 sobre objeção de Mozilla, WebKit, TAG e Microsoft, exigindo o aceite da política de usos proibidos do Google. A terceira, mais especulativa: o modelo vira objeto pessoal — arquivo no disco, destravável em minutos, com histórico recuperável por perícia e, no fim da janela, ajustado aos dados da pessoa. A quarta: o computador de casa vira o servidor de IA da pessoa, e o celular, o terminal dele. Para quem projeta mídia e interação, o que muda é onde mora a decisão: sai da conta de API e vai para a física do aparelho, para o fabricante do sistema e para o arquivo que a pessoa guarda.

## 2. O tema

**O que é.** IA local é inferência que acontece no aparelho de quem usa — celular, laptop comum, aba do navegador, ou a máquina da própria casa — sem chave de API, sem cobrança por chamada e sem que o dado saia. Não é modelo pequeno num servidor da empresa (maduro: só muda o endereço), nem chamada de API na nuvem (maduro). O objeto deste mapa é a **inferência no dispositivo do usuário final com qualidade suficiente para agente, voz e visão**.

**Onde encosta em mídia e interação.** Em quatro pontos:

1. **Latência e ritmo.** Com o modelo no aparelho, a resposta pode acompanhar o gesto em vez de esperar o envio. É a diferença entre conversar com uma ferramenta e tocar um instrumento.
2. **Peso e distribuição.** O modelo é um arquivo de centenas de megabytes a alguns gigabytes. A web e a loja de aplicativos voltam a ter um problema de peso que a mídia interativa tinha resolvido; o download do modelo vira uma cena da interface.
3. **Quem manda na peça.** Quando o modelo vem do sistema ou do navegador, a política de conteúdo do fabricante passa a valer dentro da obra, e o comportamento dela muda quando o fabricante atualiza o modelo.
4. **De quem é o modelo.** Quando o modelo vira arquivo — e, mais adiante, arquivo ajustado à pessoa —, a pergunta deixa de ser técnica e vira jurídica: copiável, herdável, apreensível.

**Por que um mapa de futuro, e não um estado da arte.** O estado da arte muda a cada trimestre (novo modelo, novo runtime). O que interessa ao horizonte de 2036 é quem passa a controlar o quê: se a inferência sai da nuvem, ela entra em algum outro lugar — no fabricante do chip, no do sistema, no do navegador, na casa da pessoa — e cada destino gera uma cadeia diferente de consequências.

**Premissas do briefing (modo não interativo).** Horizonte 2036; público: quem projeta mídia e interação; recorte global com nota sobre o Brasil; descartado: o que já é comum em produto de massa; nenhuma raiz suspeita; viés neutro; ideias óbvias excluídas: as que servem para qualquer tema; falseador declarado pelo autor: evidência de que a adoção já passou da maioria inicial (Rogers) ou de que a tecnologia só melhora o que existe. Modo: a partir de um tema. Profundidade: três ordens.

**Fronteira com os vizinhos.** Dado e conta sem terceiros é o tema 17; voz local é o tema 13; navegador como plataforma 3D é o tema 15; companheiro afetivo é o tema 19. Aqui o objeto é o **modelo** e a **inferência**. Onde um efeito toca um vizinho, está marcado na prosa.

## 3. Onde isso está hoje

Âncora feita com acesso à web em 22/09/2026. Vinte e seis fontes abertas; a lista está na seção 11 e as que não abriram estão na seção 12.

### O que já existe e funciona

- **Modelos pequenos úteis no celular.** A revisão de Chandra e Krishnamoorthi (Meta, 24/01/2026) situa os modelos práticos para celular entre 125 milhões e 3 bilhões de parâmetros, com quantização de 4 bits como padrão (4× menor, 1–3% de perda) e o BitNet b1.58 de 2B cabendo em cerca de 400 MB [1].
- **1 bit como linha de pesquisa com código.** O `bitnet.cpp` (Microsoft) mede de 2,37× a 6,17× de aceleração em x86 e de 1,37× a 5,07× em ARM, com redução de energia de 71,9–82,2% em x86; em 2026 vieram otimizações de CPU (janeiro) e os primeiros modelos de embedding de 1 bit, de 0,6B e 270M (julho). O repositório tem 40,3 mil estrelas [3].
- **WebGPU em todos os navegadores grandes.** Safari 26 embarcou WebGPU em macOS, iOS, iPadOS e visionOS; Firefox em Windows desde a 141 e em Mac com Apple Silicon desde a 145; Chrome em Android 12+ com hardware recente. Linux e Firefox Android ainda incompletos em dezembro de 2025 [6].
- **Inferência no navegador medida.** O *Llamas on the Web* (20/05/2026) testou 10 modelos em 16 dispositivos de 8 fabricantes, incluindo um transformer de 1 bit, com 29–33% menos memória e 45–69% mais vazão de decodificação que as alternativas [17]. O Transformers.js v4 (09/02/2026) roda modelos acima de 8B via WebGPU e mede ~60 tokens/s num GPT-OSS 20B num M4 Pro Max [22]. O WebLLM (19,2 mil estrelas) oferece API compatível com OpenAI dentro da aba [23].
- **IA do sistema operacional aberta a apps.** O Foundation Models framework da Apple (WWDC26) ganhou entrada de imagem, janela de 8.192 tokens no modelo do aparelho, ferramentas de sistema (OCR, código de barras, busca local no Spotlight), um protocolo `LanguageModel` que qualquer provedor pode implementar — Anthropic e Google publicaram pacotes —, implementações abertas para modelos locais (`CoreAILanguageModel`, `MLXLanguageModel`), um SDK Python e o plano de abrir o código; o Private Cloud Compute é gratuito para apps com menos de 2 milhões de downloads iniciais [5]. A nova geração da Apple Intelligence, de 14/09/2026, foi desenvolvida "em colaboração com o Google e os modelos Gemini", e a Siri em português do Brasil chega em outubro de 2026 [24].
- **Android.** O ML Kit GenAI Prompt API está em alfa desde 30/10/2025, sobre o Gemini Nano v3 (base Gemma 3n), com texto e imagem, melhor nos Pixel 10 [12]. O Gemini Nano 4 (sobre Gemma 4 E2B e E4B, 140+ idiomas, texto/imagem/áudio) foi anunciado em 02/04/2026 para "novos flagships Android ainda este ano", em preview no AICore [21].
- **Navegador.** O Chrome embarcou a Prompt API no Chrome 148, em 05/05/2026 [9]. A documentação pede Windows, macOS, Linux ou Chromebook Plus, 22 GB livres, GPU com mais de 4 GB de VRAM ou CPU com 16 GB de RAM; Android e iOS não são suportados; o modelo é baixado na primeira vez que uma origem usa a API e é removido se o disco cair abaixo de 10 GB [2].
- **Ferramentas de criação.** O Krita AI Diffusion (10,6 mil estrelas, GPL-3.0) roda geração, inpainting e pintura ao vivo sobre um ComfyUI local, com 6 GB de VRAM recomendados [25]. A NVIDIA levou o ACE para rodar no aparelho, com o Nemotron 3 Nano decidindo o comportamento de personagens, apresentado na GDC 2026 [15].
- **Servidor de casa.** O `exo` (47,6 mil estrelas, Apache 2.0) junta Macs e outros aparelhos num cluster, com RDMA sobre Thunderbolt 5 e ganho de 1,8× em 2 aparelhos e 3,2× em 4 [19]. O Termly espelha no celular agentes de terminal (Claude Code, Gemini CLI, OpenCode, Codex e outros) que rodam na máquina de casa, com AES-256-GCM e servidores que só retransmitem dado cifrado [7].

### O que existe e ainda não funciona

- **A Prompt API como padrão da web.** Mozilla (formalmente contra), WebKit (contra), TAG do W3C e Microsoft (preocupações). Jake Archibald, da Mozilla: a API tem "consequências negativas severas" para interoperabilidade, atualizabilidade e neutralidade, e exige aceitar a política de usos proibidos do Google, que vai além da lei. Nos testes citados, a taxa de falha em tarefas gerativas foi de ~24% no Edge e ~15% no Chrome; o Gemini Nano v3 ocupa ~4,27 GB [8].
- **Ajuste fino no celular.** O MobileFineTuner (09/12/2025) faz ajuste completo e LoRA em Pixel 7 Pro e Pixel 8, mas só com modelos de 124M a 1B, e tarefas falham quando o pico de memória passa do disponível — o Pixel 8, com 8 GB, não completou vários modelos [20]. Chandra lista a personalização no aparelho como direção de pesquisa, não como produto [1].
- **Modelo de 100B em CPU.** A Microsoft afirma que o `bitnet.cpp` roda um BitNet b1.58 de 100B numa CPU a 5–7 tokens/s [3]; não há modelo de 1 bit dessa escala publicado, e o maior aberto é de 2B.

### Quem constrói

Microsoft (BitNet, Phi); Apple (Foundation Models, MLX); Google (Gemini Nano, AICore, ML Kit, Chrome); NVIDIA (ACE, Nemotron); comunidade aberta (llama.cpp, Ollama, WebLLM, Transformers.js, exo, Krita AI Diffusion); e, como contrapeso, Mozilla e WebKit na padronização.

### Números de adoção

- Ollama: "quase 9 milhões de usuários" e US$ 65 milhões captados, julho de 2026 (TechCrunch via Wikipedia) [4]. Lançado em 08/07/2023.
- Memória: o IDC (18/12/2025) projeta contração de 2,9% a 5,2% nos smartphones e 4,9% a 8,9% nos PCs em 2026, com memória em 15–20% do custo de um celular intermediário; Copilot+ PCs exigem 16 GB [10].
- Brasil: os sete celulares mais vendidos em Amazon e Mercado Livre em abril de 2026 vão de 4 GB (Galaxy A07, R$ 598; Moto G06, G15, G35; Galaxy A17) a 8 GB (Galaxy A56, R$ 1.950) [16].
- Preço de API: o Epoch AI mede quedas de 9× a 900× por ano conforme o patamar de desempenho, com a ressalva de que as quedas mais rápidas são recentes [11].
- Salvaguardas: a ferramenta Heretic gerou mais de 3.500 modelos "descensurados" com 13 milhões de downloads [14].
- Sem número encontrado para: quantos apps usam a Prompt API do Chrome; quantos apps iOS usam o Foundation Models; quantos usuários ativos têm o Termly.

**Onde passa a linha.** Chamar API na nuvem é maduro; rodar modelo no servidor próprio é maduro; rodar modelo local para desenvolvedores é produto de nicho em crescimento (Ollama); o **modelo no aparelho do usuário final, dentro de apps e páginas comuns**, está entre produto de nicho e adoção precoce — e só em aparelhos caros.

## 4. As disrupções-raiz

Candidatos recusados como raiz, e por quê:

- *Chamar modelo por API na nuvem*: adoção em maioria entre desenvolvedores; é contexto (seção 3).
- *Modelo pequeno no servidor da empresa*: não rompe nada; só muda o endereço.
- *Recursos de IA do sistema já em uso (resumo de notificação, ferramentas de escrita)*: em produto de massa nos aparelhos compatíveis; tratados como contexto.
- *"IA mais barata"*: a queda de preço de API [11] é melhoria sustentadora e acontece também na nuvem; não entra como raiz. O que entra é a mudança de **quem paga** (d1).

### d1 — A inferência vira recurso local não medido: o custo sai da conta de quem publica e vai para a memória, a bateria e o download de quem usa

1. **O que rompe.** A suposição de que cada uso de IA numa interface é uma transação medida e racionada, e o modelo de negócio de cobrar por chamada na camada de tarefas pequenas.
2. **Por que agora.** WebGPU chegou ao Safari/iOS 26 [6]; quantização de 4 bits virou padrão e o 1 bit tem modelo de 2B em ~400 MB [1][3]; bibliotecas de navegador rodam modelos acima de 8B [22]; os sistemas expõem modelo embutido a apps [5][12].
3. **Onde está na difusão.** Entre produto de nicho e adoção precoce (<10%): Ollama com ~9 milhões de usuários [4]; APIs de sistema restritas a flagships e desktop [2][12].
4. **O que falta.** Memória suficiente nos aparelhos de entrada (vai no sentido contrário hoje [10][16]); modelo de 1 bit acima de 2B com qualidade; uma interface web comum a todos os navegadores.

### d2 — O modelo vira componente do sistema operacional e do navegador, e quem escreve o software deixa de escolher o modelo e a política de conteúdo

1. **O que rompe.** A neutralidade da plataforma web (uma API que exige aceitar a política de um fabricante [8]) e a escolha do modelo como decisão do autor da peça.
2. **Por que agora.** Chrome 148 embarcou a Prompt API em 05/05/2026 [9]; a Apple transformou o Foundation Models em balcão entre modelo local, nuvem própria e terceiros [5]; o Android expõe o Gemini Nano por ML Kit [12].
3. **Onde está na difusão.** Adoção precoce: disponível em desktop com Chrome e em iPhone/Android de ponta; a Prompt API não existe no Chrome para Android e iOS [9].
4. **O que falta.** Chegar ao celular (Chrome Android); resolver ou contornar a objeção de Mozilla e WebKit; o modelo do sistema ficar bom o bastante para que desenvolvedores prefiram não embarcar o próprio.

### d3 — O modelo vira objeto pessoal: arquivo no aparelho, modificável, apreensível e, no fim da janela, ajustado à pessoa

1. **O que rompe.** A suposição de que o modelo é um serviço igual para todos, protegido e governado pelo provedor, e de que o histórico da conversa mora num servidor com política de retenção.
2. **Por que agora.** O modelo aberto cabe no aparelho [1]; a remoção de salvaguardas foi automatizada — Heretic tira a recusa do Llama 3.3 em menos de dez minutos e a do Gemma 4 saiu em 90 minutos [14]; perícia já documenta histórico de prompt em JSON no disco [18]; o ajuste fino no celular tem framework, ainda que limitado [20].
3. **Onde está na difusão.** Dividida. Modelo-como-arquivo destravado: produto de nicho (3.500 variantes, 13 milhões de downloads [14]). Modelo ajustado no aparelho: laboratório — por isso `confianca: baixa` em toda a cadeia de `e11`.
4. **O que falta.** Memória para treinar no celular (hoje falha em 8 GB [20]); um formato de adaptador portável; uma resposta dos fabricantes de SO sobre modelo não atestado.

### d4 — O computador de casa vira servidor de inferência pessoal, e o celular vira terminal dele

1. **O que rompe.** A dicotomia "nuvem de empresa × este aparelho". "Local" passa a significar "minha rede", e a máquina pessoal volta a ser servidor.
2. **Por que agora.** Agentes de terminal que trabalham por horas; retransmissão cifrada do celular para a máquina de casa [7]; cluster doméstico com RDMA sobre Thunderbolt 5 [19]; runtime local com ~9 milhões de usuários [4].
3. **Onde está na difusão.** Produto de nicho: o público é quem já tem máquina potente e sabe instalar CLI.
4. **O que falta.** Instalação sem terminal; um aparelho doméstico vendido para isso; modelo aberto de qualidade suficiente para agente de longa duração em hardware de consumo.

**Teste da raiz que não acontece (resumo; detalhe na seção 7).** Se d3 não acontecer, d1, d2 e d4 continuam de pé; se d2 não acontecer (navegadores sem IA embutida), d1 segue por modelo embarcado (`e8.1`); se d1 for freada pela memória, d4 é o desvio (o modelo sai do celular e vai para casa). As quatro não são a mesma raiz disfarçada.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A inferência vira recurso local não medido, e o custo sai da conta de quem publica para a memória, a bateria e o download de quem usa
    efeitos:
      - id: e1
        ordem: 1
        efeito: Peças interativas passam a consultar o modelo a cada gesto, tecla ou quadro, em vez de a cada envio
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Ferramentas de criação trocam o padrão enviar-e-esperar pela resposta contínua durante o gesto
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A prática acumulada de um artista com um modelo específico vira ativo que se perde quando o modelo é trocado
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Estúdios pequenos lançam personagens conversáveis sem custo recorrente de servidor
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Dubladores e roteiristas de jogo vendem pacotes de personagem licenciados por cópia instalada, não por linha gravada
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Quem vende IA por assinatura separa a oferta em camada local gratuita e camada de nuvem cobrada pelo que o aparelho não faz
        sinal: forte
        prazo: 2030
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: A saída da pergunta do aparelho para a nuvem vira estado visível e obrigatório da interface
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Navegadores e sistemas adotam um sinal visual padronizado de que o dado saiu do aparelho, análogo ao cadeado do HTTPS
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Fabricantes de aparelho passam a anunciar qual modelo cabe como argumento principal de venda
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: A troca de aparelho de faixa média passa a ser ditada pelo modelo que deixou de caber
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: A escassez de memória puxada pelos datacenters de IA mantém o aparelho de entrada em 4 GB e freia a IA local fora dos flagships
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: A IA local se estratifica por renda, e o grátis depois de baixado vale só para quem pagou pelo aparelho caro
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: No Brasil, serviços digitais que dependerem de IA no aparelho excluem a maioria que usa celular de 4 GB
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Modelos de baixíssima precisão ganham prioridade de pesquisa e produto como resposta à memória cara
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Um modelo de 1 bit de 7 a 10 bilhões de parâmetros em cerca de 2 GB vira o piso do aparelho de entrada
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Serviços de geração por crédito perdem o criador que tem GPU e passa a gerar dentro da própria ferramenta
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: A IA volta a ser função de ferramenta tradicional de criação, como plugin local, em vez de aplicativo de destino
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Software livre de criação ganha peso contra suítes por assinatura por poder embutir modelo aberto sem política de terceiro
                sinal: fraco
                prazo: 2036
                confianca: baixa
  - disrupcao: O modelo vira componente do sistema operacional e do navegador, e quem escreve o software deixa de escolher o modelo e a política de conteúdo
    efeitos:
      - id: e5
        ordem: 1
        efeito: Autores de peças para a web aceitam a política de uso do fabricante do navegador como condição para usar a IA embutida
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A mesma peça web se comporta diferente em cada navegador por causa do modelo, e o teste de compatibilidade passa a incluir comportamento
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Obras web passam a embarcar o próprio modelo para escapar do modelo do navegador, repetindo a lógica dos plug-ins com centenas de megabytes
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Obras de arte e jornalismo sobre temas vetados pela política do fabricante perdem acesso à IA do navegador
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Festivais e acervos de arte digital passam a exigir na ficha técnica qual modelo e qual política regem a obra
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: O fabricante atualiza o modelo junto com o sistema, e o comportamento do app muda sem que o desenvolvedor publique versão nova
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Avaliação automática de comportamento do modelo entra no ciclo de publicação de todo app que usa IA do sistema
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Obras interativas que dependem do modelo do sistema ganham prazo de validade e viram problema de conservação para museus
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: O sistema operacional vira balcão entre modelo local, nuvem própria e modelos de terceiros, e o fabricante intermedeia toda chamada de IA do app
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Provedores de modelo negociam com o fabricante do sistema o lugar de modelo padrão, como buscadores negociavam o buscador padrão
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: O modelo padrão do sistema passa a ser examinado pelas autoridades de concorrência dos EUA e da União Europeia como foi o buscador padrão
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: A objeção de Mozilla, WebKit e TAG impede que a Prompt API vire padrão, e a web fica sem IA embutida interoperável
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Bibliotecas comunitárias de modelo embarcado viram o padrão de fato da IA na web, fora do W3C
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: O cache de modelo compartilhado entre sites vira vetor de rastreamento e disputa de privacidade nos navegadores
                sinal: fraco
                prazo: 2033
                confianca: baixa
  - disrupcao: O modelo vira objeto pessoal, um arquivo no aparelho que pode ser modificado, apreendido e ajustado à pessoa
    efeitos:
      - id: e9
        ordem: 1
        efeito: O histórico de conversa com IA sai do servidor do provedor e passa a morar em arquivo no disco de quem usa
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: A perícia digital passa a extrair o histórico do assistente local em processos criminais e de família, como hoje extrai mensagens
            sinal: fraco
            prazo: 2032
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: Assistentes locais oferecem modo sem rastro com memória cifrada e apagável, e isso vira disputa jurídica sobre obstrução
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: As salvaguardas de modelo aberto deixam de valer no aparelho, porque a remoção da recusa foi automatizada e leva minutos
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Fabricantes de sistema passam a exigir modelo assinado e atestado para dar acesso às APIs do aparelho
            sinal: fraco
            prazo: 2031
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: Modelos destravados passam a circular instalados por fora da loja, como o jailbreak de celular, e marcam uma subcultura
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: Empresas que hospedam modelos sem salvaguarda transformam a remoção em serviço vendido a equipes de segurança
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e10.2.1
                ordem: 3
                efeito: Laboratórios passam a publicar modelos pequenos com salvaguarda embutida no treinamento, e publicar peso aberto fica mais caro e mais raro
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: O modelo passa a ser ajustado no próprio aparelho com os dados da pessoa, e dois usuários do mesmo app ficam com modelos diferentes
        sinal: medio
        prazo: 2033
        confianca: baixa
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: O adaptador treinado com a pessoa prende o usuário ao fabricante, porque não roda sobre outro modelo-base
            sinal: fraco
            prazo: 2035
            confianca: baixa
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: Portabilidade do modelo pessoal entre fabricantes vira pauta de direito do consumidor, como foi a portabilidade de número
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e11.2
            ordem: 2
            efeito: Herdeiros disputam o modelo pessoal de quem morreu como hoje disputam fotos e contas
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e11.2.1
                ordem: 3
                efeito: Famílias decidem se o modelo de um falecido continua aprendendo, e o memorial passa a ter uma voz que muda
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: O modelo baixado envelhece sem saber do que aconteceu depois, e a pessoa recebe informação desatualizada sem aviso
        sinal: fraco
        prazo: 2029
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: A atualização obrigatória do modelo recentraliza o controle no canal de distribuição, e ninguém pode desligar vira alguém decide a versão
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: Comunidades mantêm acervos de versões antigas de modelos como arquivos de preservação de software abandonado
                sinal: fraco
                prazo: 2034
                confianca: baixa
  - disrupcao: O computador de casa vira servidor de inferência pessoal, e o celular vira terminal dele
    efeitos:
      - id: e13
        ordem: 1
        efeito: Quem tem máquina potente passa a rodar agentes em casa e controlá-los pelo celular por canal cifrado, e local passa a significar minha rede
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: Aparelhos domésticos dedicados à inferência viram categoria de produto, como o roteador
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: O consumo elétrico da inferência doméstica aparece na conta de luz e vira critério de compra
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e13.2
            ordem: 2
            efeito: Famílias e coletivos compartilham uma máquina de inferência comum e disputam acesso e registros como disputavam o computador da família
            sinal: fraco
            prazo: 2034
            confianca: baixa
            efeitos:
              - id: e13.2.1
                ordem: 3
                efeito: Escolas e associações de bairro rodam servidor de IA comunitário, e quem vê os registros vira questão de governança local
                sinal: fraco
                prazo: 2036
                confianca: baixa
      - id: e14
        ordem: 1
        efeito: Os fabricantes de sistema móvel limitam conexão direta e execução em segundo plano, e o celular-terminal depende de um relé de terceiro
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: O serviço de relé cifrado entre celular e máquina de casa vira o novo intermediário e o lugar onde se cobra
            sinal: fraco
            prazo: 2032
            confianca: baixa
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: Provedores de internet residencial passam a vender upload simétrico e endereço fixo como plano para IA doméstica
                sinal: fraco
                prazo: 2035
                confianca: baixa
```

### Os mecanismos, efeito a efeito

**d1 — o custo muda de lado.**

- `e1` — porque d1 elimina o custo marginal da chamada para quem publica, a chamada deixa de ser racionada e pode acontecer a cada gesto. A latência local, sem ida e volta de rede, é o que torna isso perceptível [1]. Sinal médio: pintura ao vivo do Krita AI Diffusion sobre ComfyUI local [25]; personagens do ACE decidindo no aparelho [15]. Classe de referência: WebGL 2, da especificação (jan/2017) ao suporte em todos os navegadores grandes (fev/2022), cinco anos [26]; aplicada a WebGPU, que chegou ao Safari 26 em 2025 [6], coloca o uso contínuo em peças comuns por volta de 2029–2030.
- `e1.1` — porque `e1` torna a chamada contínua possível, o padrão de interação "escrever, enviar, esperar" perde o motivo técnico nas ferramentas de criação. Troca de ator: do autor da peça para o fabricante da ferramenta.
- `e1.1.1` — porque `e1.1` transforma o modelo num instrumento tocado, a destreza do artista passa a depender daquele modelo; quando o fabricante troca o modelo (`e6`), a destreza não se transfere. Sinal fraco: inferência.
- `e1.2` — porque `e1` retira o custo por conversa, a conversa com personagem deixa de exigir orçamento de servidor proporcional ao número de jogadores. Sinal médio: ACE no aparelho e o modelo Nemotron 3 Nano [15]. Retroação cultural registrada na mesma fonte: 52% dos desenvolvedores veem IA gerativa negativamente, contra 30% um ano antes [15].
- `e1.2.1` — porque `e1.2` distribui o personagem como arquivo junto do jogo, a unidade de venda de quem cria o personagem passa a ser a cópia, não a sessão de gravação. Toca o tema 13 (voz).
- `e2` — porque d1 torna gratuitas as tarefas pequenas no aparelho, quem vende IA só consegue cobrar pelo que o aparelho não faz (contexto longo, raciocínio pesado, agentes de horas). Sinal forte: o Private Cloud Compute gratuito abaixo de 2 milhões de downloads e o protocolo que troca local por terceiro [5]; o Ollama, nascido local, somou modelos hospedados na nuvem [4]; a Prompt API gratuita no Chrome [2]. Confiança média: o desenho híbrido é visível, a divisão de receita não.
- `e2.1` — porque `e2` cria dois caminhos para a mesma pergunta, a interface precisa decidir e mostrar quando a pergunta saiu do aparelho, ou perde a promessa de privacidade que vendeu. A Apple já separa o que roda no aparelho do que vai ao PCC na própria comunicação [24].
- `e2.1.1` — porque `e2.1` repete-se em todos os apps, o sinal tende a ser padronizado pelos donos do navegador e do sistema, como foi o cadeado. Sinal fraco.
- `e2.2` — porque `e2` faz do modelo local o produto gratuito, o aparelho passa a ser vendido pelo modelo que roda. Sinal médio: os Copilot+ PCs exigem 16 GB e o topo sobe para 32 GB [10]; o Gemini Nano 4 foi anunciado para "novos flagships" [21].
- `e2.2.1` — porque `e2.2` amarra recurso a modelo, o aparelho que não recebe o modelo novo fica obsoleto por software, não por desgaste.
- `e3` (retroação) — porque os fabricantes de memória desviam capacidade para HBM de datacenter, a RAM de consumo encarece "no pior momento possível", quando o modelo local precisa dela [10]. No Brasil os sete mais vendidos têm de 4 a 8 GB, cinco deles com 4 GB [16], e a RAM de fato disponível para o modelo num celular de ponta é menor que 4 GB [1]. É a raiz sendo freada pela mesma indústria que a motiva.
- `e3.1` — porque `e3` mantém o aparelho de entrada sem memória, a IA local fica restrita a quem compra o topo de linha: Apple Intelligence a partir do iPhone 15 Pro [24], ML Kit melhor no Pixel 10 [12], Prompt API só com 16 GB ou GPU dedicada [2].
- `e3.1.1` — porque `e3.1` coincide com um mercado brasileiro dominado por 4 GB [16], qualquer serviço que assuma IA no aparelho exclui a maioria. Nota Brasil: a promessa "privado e grátis" chega aqui primeiro como atributo de classe.
- `e3.2` — porque `e3` torna memória o recurso escasso, a técnica que reduz memória sem esperar fábrica ganha prioridade. Sinal médio: a Microsoft publicou em 2026 otimização de CPU e embeddings de 1 bit [3].
- `e3.2.1` — porque `e3.2` concentra esforço em 1 bit, um modelo de 7–10B em ~2 GB é o patamar em que o celular de entrada volta a entrar. Hoje só existe o de 2B [3]; o prazo foi empurrado na seção 7.
- `e4` (quem perde) — porque d1 permite gerar na GPU própria sem custo por imagem, o criador com placa de vídeo deixa de pagar crédito. Sinal médio: Krita AI Diffusion com opção local ou nuvem, 10,6 mil estrelas [25].
- `e4.1` — porque `e4` leva a geração para dentro do editor, a IA vira função de camada, máscara e seleção, e não um site separado [25].
- `e4.1.1` — porque `e4.1` exige embutir o modelo, o software livre tem uma vantagem estrutural: pode embutir modelo aberto sem negociar a política de ninguém (contraste com `e5`). Prazo no limite do horizonte.

**d2 — o fabricante escolhe o modelo.**

- `e5` — porque d2 põe o modelo dentro do navegador, usar a IA embutida significa aceitar a política de usos proibidos do Google, que vai além da lei [8]. Já é fato em 2026 [9]; o prazo 2027 marca quando isso fica visível para quem projeta peças web.
- `e5.1` — porque `e5` faz cada navegador trazer o seu modelo, o prompt ajustado para um não funciona igual no outro — o argumento central da Mozilla, e a diferença de falha medida entre Edge (~24%) e Chrome (~15%) [8].
- `e5.1.1` — porque `e5.1` torna o modelo do navegador imprevisível, autores voltam a embarcar o próprio motor na página (WebLLM, LlamaWeb, Transformers.js [17][22][23]), com o custo de peso que isso traz.
- `e5.2` — porque `e5` impõe uma política de conteúdo além da lei, obras sobre violência, sexualidade ou drogas perdem a IA embutida. Sinal fraco: nenhum caso documentado encontrado; confiança média porque o mecanismo está escrito na própria condição de uso [8].
- `e5.2.1` — porque `e5.2` torna o modelo parte do sentido da obra, quem cura e preserva precisa registrar qual modelo e qual política estavam em vigor.
- `e6` — porque d2 põe o modelo sob controle do fabricante, ele é trocado por baixo do app: o Gemini Nano passou da v3 [12] para a 4 anunciada [21], o modelo da Apple foi "reconstruído" em 2026 [5], e o Chrome remove e rebaixa o modelo conforme o disco [2].
- `e6.1` — porque `e6` muda o comportamento sem aviso, avaliar o modelo vira parte do lançamento; a Apple lançou um framework de avaliações no mesmo pacote [5].
- `e6.1.1` — porque `e6.1` não alcança a obra depois de publicada, a obra que depende do modelo do sistema deixa de se comportar como foi feita. Troca de ator: do desenvolvedor para a instituição que preserva.
- `e7` — porque d2 abre o sistema a modelos de terceiros por um único protocolo [5], toda chamada passa pelo fabricante do sistema, e a própria Apple Intelligence foi feita com modelos Gemini [24]. Sinal forte (três artefatos: protocolo, pacotes de Anthropic e Google, parceria Apple–Google).
- `e7.1` — porque `e7` faz do sistema o ponto de escolha, o modelo que vem selecionado vale mais que o melhor modelo. A classe de referência é o acordo de buscador padrão; a comparação é minha, não da fonte.
- `e7.1.1` — porque `e7.1` repete a estrutura do acordo de buscador padrão, as mesmas autoridades (Departamento de Justiça dos EUA, Comissão Europeia) têm o mesmo motivo para olhar. Inferência sem fonte aberta nesta rodada.
- `e8` (retroação, quem bloqueia) — porque d2 exige padronização para valer na web, Mozilla e WebKit têm incentivo e poder de veto de fato: sem Safari e Firefox, a API é do Chrome, não da web [8][9]. O ator que bloqueia é nomeado; o efeito é a fragmentação.
- `e8.1` — porque `e8` deixa a web sem API comum, desenvolvedores que querem portabilidade adotam biblioteca embarcada sobre WebGPU, que já está em todos os navegadores [6][17][22][23].
- `e8.1.1` — porque `e8.1` faz cada site baixar gigabytes, surge pressão para cache compartilhado; e cache compartilhado entre origens é, na história dos navegadores, vetor de rastreamento. Sinal fraco; a analogia é minha.

**d3 — o modelo como coisa.**

- `e9` — porque d3 tira o modelo do servidor, o histórico também sai: Murtuza recupera histórico de prompt em texto puro em JSON e logs de uso de modelo de Ollama e LM Studio [18]. Toca o tema 17 (dado local).
- `e9.1` — porque `e9` põe a prova no aparelho, a perícia passa a procurá-la ali. Sinal fraco: o artigo aponta o "ponto cego" e dá o método, mas não cita caso judicial [18].
- `e9.1.1` — porque `e9.1` torna o histórico apreensível, os apps oferecem apagamento e cifragem, e a oferta vira objeto de disputa.
- `e10` — porque d3 entrega o peso ao usuário, a salvaguarda vira algo que se subtrai: Heretic tira a recusa do Llama 3.3 em menos de dez minutos, sem hardware especial; 3.500 variantes; 13 milhões de downloads; o Google reconhece "um desafio técnico conhecido de todos os modelos abertos" [14].
- `e10.1` — porque `e10` torna o modelo aberto destravável, o fabricante do sistema tem incentivo para só integrar modelo atestado. Sinal fraco: inferência; o protocolo da Apple já decide quem implementa o quê [5].
- `e10.1.1` — porque `e10.1` fecha a integração oficial, o modelo destravado vai para fora da loja.
- `e10.2` — porque `e10` barateia a remoção, ela vira produto: a Abliteration.ai hospeda o GLM-5.3 sem recusas, com clientes de *red teaming* e sem verificação de identidade além do cartão [13].
- `e10.2.1` (retroação) — porque `e10` e `e10.2` expõem os laboratórios, publicar modelo aberto pequeno passa a exigir salvaguarda que não se remove por subtração, o que encarece e reduz a publicação — freando d3 e d1.
- `e11` — porque d3 põe modelo e dado no mesmo aparelho, ajustar um ao outro deixa de exigir envio. Hoje: laboratório, até 1B, falha em 8 GB [20]; personalização como direção de pesquisa [1]. Classe de referência: do *demo* de ajuste no celular (2025) a produto, usei o intervalo de VR de consumo (>10 anos e ainda não) como teto e o do smartphone (~4 anos) como piso; com a memória contra (`e3`), fico no meio.
- `e11.1` — porque `e11` treina um adaptador sobre um modelo-base específico, o adaptador não migra; quem trocar de fabricante perde o "modelo que me conhece".
- `e11.1.1` — porque `e11.1` cria aprisionamento, a portabilidade vira pauta. Fora da janela do mapa (2038).
- `e11.2` — porque `e11` torna o modelo pessoal um bem que existe num aparelho, ele entra no inventário de quem morreu. Toca o tema 19.
- `e11.2.1` — porque `e11.2` põe o modelo sob decisão da família, surge a escolha de congelá-lo ou deixá-lo aprender. Fora da janela (2038).
- `e12` (retroação) — porque d3 transforma o modelo em arquivo congelado, ele não sabe o que aconteceu depois da data de corte, e a pessoa não é avisada. Sinal fraco: inferência.
- `e12.1` — porque `e12` obriga a atualizar, quem distribui a atualização (sistema, loja, navegador) recupera o controle que a promessa "ninguém pode desligar" dizia ter tirado. O Chrome já baixa e remove o modelo por conta própria [2].
- `e12.1.1` — porque `e12.1` descarta versões antigas, quem depende delas guarda cópias.

**d4 — a casa como servidor.**

- `e13` — porque d4 separa onde o modelo roda de onde a pessoa está, o celular vira janela para a máquina de casa. Sinal médio: Termly [7], exo [19], base de ~9 milhões de usuários do Ollama [4].
- `e13.1` — porque `e13` exige máquina ligada e potente em casa, surge espaço para um aparelho vendido para isso. O `exo` já trata Mac mini e Mac Studio como nós de cluster [19].
- `e13.1.1` — porque `e13.1` deixa a inferência ligada 24 horas, o custo aparece na conta de energia.
- `e13.2` — porque `e13.1` é caro para uma pessoa só, a máquina é dividida, e com ela os registros.
- `e13.2.1` — porque `e13.2` se estende a coletivos, escolas e associações precisam decidir quem administra e quem vê o que foi perguntado.
- `e14` (retroação, quem bloqueia) — porque d4 depende de o celular falar com a máquina de casa em segundo plano, os donos de iOS e Android controlam essa passagem; o Termly, por exemplo, depende de servidores próprios que retransmitem dado cifrado [7]. O ator que bloqueia é o fabricante do sistema móvel.
- `e14.1` — porque `e14` força um intermediário, o relé vira o lugar onde se cobra e onde se pode desligar.
- `e14.1.1` — porque `e14.1` e `e13` dependem de upload e endereço estável, o provedor de internet residencial ganha um produto novo.

### Regra de parada

Parei na terceira ordem em todos os ramos porque, em vários deles, o quarto nível seria o mesmo efeito "mais adiante" (ex.: `e3.1.1` → "a exclusão se aprofunda"), sem troca de ator ou mecanismo. Onde a terceira ordem já é o pai amadurecendo, registrei na seção 7.

### Cobertura STEEP e quem perde

- Social: `e3.1`, `e11.2`, `e13.2`. Tecnológico: `e1`, `e6`, `e8`. Econômico: `e2`, `e4`, `e7`. Político: `e5`, `e8`, `e10`, `e14`.
- **Ecológico**: só `e13.1.1` (energia da inferência doméstica). Não achei fonte que meça o saldo energético entre inferência local e na nuvem; o dado de energia do BitNet [3] é por operação, não por sistema. Categoria fraca, registrada como tal.
- **Quem perde**: serviços de geração por crédito (`e4`); autores web sem escolha de modelo (`e5`); aparelhos de entrada e quem os usa (`e3.1`, `e3.1.1`); dubladores e roteiristas em sessão (`e1.2.1`); museus e acervos (`e6.1.1`); laboratórios que publicam peso aberto (`e10.2.1`); quem troca de fabricante (`e11.1`).

### Cruzamentos

- **Convergência 1 — o fabricante volta ao centro.** `e6` (d2: atualiza o modelo por baixo), `e10.1` (d3: só modelo atestado) e `e12.1` (d3: a atualização recentraliza) chegam ao mesmo lugar: a promessa de que "ninguém pode desligar" é substituída por "o dono do sistema decide a versão". Três ramos de duas raízes diferentes; é o achado mais importante do mapa.
- **Convergência 2 — o modelo embarcado como saída.** `e5.1.1` (fugir do modelo do navegador) e `e8.1` (falta de padrão) levam ao mesmo efeito: páginas que carregam o próprio motor. As duas raízes (d1 e d2) empurram para a mesma prática, e ela esbarra em `e3` (memória).
- **Convergência 3 — a casa como desvio da memória.** `e3.1` (celular de entrada sem memória) e `e13` (máquina de casa) se encontram: se o celular não comporta o modelo, a inferência "local" vai para a casa — mas só para quem tem uma máquina capaz, o que reproduz a estratificação por renda.
- **Retroalimentação.** `e10.2.1` (peso aberto mais caro e mais raro) enfraquece d1 e d3, que dependem de modelo aberto pequeno. `e3.2.1` (1 bit de 7–10B em 2 GB), se acontecer, reforça d1 e desfaz `e3.1`.
- **Contradição.** `e5.1.1`/`e8.1` (cada página embarca o seu modelo) × `e7` (o sistema intermedeia todo modelo). Não podem ser dominantes ao mesmo tempo. O que decide: se a Prompt API chega ao Chrome Android e se o Safari adota algo equivalente. Sem isso, prevalece o embarcado na web e o do sistema nos apps nativos.

## 6. Sinais fracos e wildcards

### Sinais fracos

1. **O celular como terminal da máquina de casa.** Visto no Termly [7] e no `exo` [19]. Mudaria o mapa porque desloca d1 do celular para a casa e torna `e3` menos decisivo. Sinal observável: um fabricante de hardware de consumo (não de nicho) anunciando um aparelho doméstico de inferência, ou o Termly/equivalente publicando número de usuários na casa dos milhões.
2. **O navegador que apaga o modelo sozinho.** A documentação do Chrome diz que o modelo é removido se o disco cair abaixo de 10 GB e rebaixado de novo depois [2]. Mudaria a experiência de "grátis depois de baixado": o download volta. Sinal observável: relatos de desenvolvedores sobre modelo indisponível intermitente; métricas de disponibilidade da API nas próprias páginas.
3. **Embeddings de 1 bit.** A Microsoft publicou em julho de 2026 embeddings de 1 bit de 270M e 0,6B [3]. Se a busca semântica local ficar trivial em CPU, qualquer página pode ter memória semântica do próprio usuário sem GPU. Sinal observável: bibliotecas web (Transformers.js, WebLLM) suportando BitNet nativamente.
4. **O julgamento da turma em modelo local.** Três alunos da disciplina rodaram o julgamento das suas 500 entradas em Ollama com Qwen de 27B depois de esbarrar em cota de API (registro da disciplina, não fonte pública). A migração para local foi por instabilidade de cota, não por privacidade ou custo — o que sugere um motor de adoção que o mapa trata pouco: **previsibilidade**. Sinal observável: repetir a pergunta na próxima turma.
5. **Assistente de voz em português chegando ao iPhone em outubro de 2026, via nuvem** [24]. É sinal contrário: a experiência mais visível de IA "da Apple" no Brasil será de servidor, não local. Sinal observável: o que a Apple rodar no aparelho em português até 2028.

### Wildcards

1. **Um modelo de 1 bit com qualidade de fronteira num celular de entrada.** Mecanismo: treinamento nativo em 1,58 bit escalado a dezenas de bilhões de parâmetros, com a afirmação da Microsoft de 100B a 5–7 tokens/s em CPU [3] se confirmando também em ARM de baixo custo. Por que é improvável: o maior modelo público é de 2B; a qualidade de fronteira se move enquanto o 1 bit escala. O que faria: desfaz `e3` e `e3.1`, antecipa `e2` em anos, e torna `e4`, `e5.1.1` e `e13` secundários. Sinal precoce: um BitNet acima de 7B com resultados replicados por terceiros.
2. **Excesso de memória depois de uma correção no investimento em datacenters.** Mecanismo: se o investimento em IA de nuvem desacelerar, a capacidade de HBM e DRAM volta para o consumo, e a memória barata inunda o celular de entrada. Por que é improvável no horizonte curto: os próprios analistas descrevem a realocação como estrutural e lucrativa [10]. O que faria: remove o principal freio (`e3`) e acelera d1 no Brasil. Sinal precoce: queda de preço contratual de DRAM por dois trimestres seguidos e celulares de entrada com 8 GB.
3. **Um sistema operacional grande proíbe modelo não atestado.** Mecanismo: um incidente atribuído a modelo destravado (`e10`) leva Apple ou Google a exigir assinatura para qualquer modelo executado pelo aparelho, não só para acesso às APIs. O que faria: encerra d3 no celular e empurra o modelo livre para PCs e casas (d4). Sinal precoce: mudança de diretriz de loja citando "modelos modificados".

## 7. Contra o próprio mapa

### Pré-mortem: é 2036 e o mapa errou. Por quê?

1. **A nuvem ficou barata e boa demais para o local importar.** A queda de preço de API de 9× a 900× por ano [11], somada à gratuidade de nuvens como o PCC [5], pode tornar a diferença entre local e nuvem invisível para o usuário, que nunca pergunta onde roda. Aponta para `e2` e `e1`: se o custo da nuvem for zero para o usuário, d1 perde a vantagem de custo e fica só com latência e privacidade. **Alteração:** `e1` prazo 2028 → 2029; mantenho `e2` com confiança média (não alta) porque o desenho híbrido pode ser decisão da Apple e não tendência.
2. **A memória não voltou.** A escassez [10] pode durar a janela inteira. Aponta para `e3.2.1` e para toda a cadeia de d1 fora dos flagships. **Alteração:** `e3.2.1` prazo 2032 → 2034.
3. **O modelo pessoal ajustado nunca virou produto.** A personalização pode ter ficado inteira em memória de contexto (RAG local) sem treinar nada, o que é mais barato e já está nas ferramentas de sistema [5]. Aponta para `e11` e filhos. **Alteração:** `e11` confiança media → baixa, prazo 2030 → 2033.

### Extrapolação linear

- `e2.2` ("anunciar qual modelo cabe") é o que já se faz com TOPS e RAM, maior. O mecanismo de não-linearidade é `e2`: quando o modelo local é o produto gratuito, o aparelho passa a ser vendido por ele. Mantido, com essa ressalva.
- `e13.1` ("aparelho doméstico de inferência") pode ser só o cluster de entusiasta crescendo. Não achei não-linearidade forte além da analogia com o roteador. **Alteração:** `e13.1` prazo 2030 → 2032.
- `e3.1.1` é `e3.1` aplicada ao Brasil — perto de ser o mesmo efeito amadurecendo. Mantido como terceira ordem porque troca o ator (serviços digitais, incluindo públicos) e acrescenta o dado brasileiro [16].

### Velocidade de adoção

- `e11` (sinal médio, laboratório): a classe de referência de VR de consumo (>10 anos e ainda não) é mais honesta que a do smartphone (~4 anos) para algo que depende de memória que está ficando mais cara. Empurrado em três anos (acima).
- `e13` (Termly, exo): de nicho de entusiasta para um produto de consumo, a referência do Ollama — 100 mil a ~9 milhões de usuários em três anos [4] — ainda é público de desenvolvedor; 2030 exige que a instalação deixe de pedir terminal. **Alteração:** `e13` sinal forte → medio (nenhum dos três artefatos é de consumo geral).
- `e5.1` e `e8.1` (2029–2030) dependem de WebGPU estável, que em dezembro de 2025 ainda estava incompleto em Linux e Firefox Android [6]. A referência do WebGL 2 (cinco anos até universal [26]) sustenta 2030 para `e8.1`.

### A raiz que não acontece

- **Se d1 não acontece** (a IA contínua não vira prática porque a nuvem é grátis e rápida o bastante): sobram d2 (o fabricante escolhe o modelo, mesmo que pela nuvem, via `e7`), d3 (o arquivo destravado continua existindo) e d4 (menos). O mapa perde `e1`, `e2`, `e4`.
- **Se d2 não acontece** (a Prompt API morre e os sistemas recuam): `e8.1` vira dominante e d1 segue por modelo embarcado. A convergência 1 enfraquece, mas `e10.1` e `e12.1` a mantêm parcialmente.
- **Se d3 não acontece** (modelos abertos pequenos deixam de ser publicados, por `e10.2.1` ou regulação): d1 fica restrita ao modelo do sistema, e d2 ganha força — a IA local vira toda do fabricante.
- **Se d4 não acontece**: a convergência 3 perde o desvio, e a estratificação de `e3.1` fica sem saída.

Nenhuma raiz leva o mapa inteiro com ela; não é uma raiz disfarçada em quatro.

### Suposições escondidas

1. **Modelo aberto pequeno continua sendo publicado.** Se Meta, Google, Microsoft, Alibaba pararem, d1 e d3 dependem do modelo do sistema. Premissa quebrada vira o efeito `e10.2.1` e o wildcard 3.
2. **WebGPU continua exposto à página sem permissão explícita.** Se os navegadores passarem a pedir permissão para uso pesado de GPU (bateria, rastreamento), `e1` e `e8.1` atrasam.
3. **Energia doméstica barata o bastante para máquina ligada 24 h.** No Brasil, a tarifa residencial pode tornar d4 um fenômeno de renda alta. Vira restrição em `e13.1.1`.
4. **O fabricante do sistema continua deixando o app escolher modelo embarcado próprio.** Se não, `e5.1.1` e `e8.1` perdem a saída — é o wildcard 3.
5. **Português com qualidade em modelo pequeno.** O Gemini Nano 4 promete 140+ idiomas [21], mas não achei avaliação de português em modelo de 2–4B. Se a qualidade em português ficar abaixo do útil, a nota Brasil piora além de `e3.1.1`.

### Viés do autor

O tema é caro à zona de interesse "Criação e plataforma": `e1.1.1` (a destreza do artista presa ao modelo) e `e4.1.1` (software livre de criação ganhando peso) estão aqui em parte porque o autor gosta de ferramentas de criação e de software livre. Os dois têm sinal fraco e confiança baixa; ficaram, marcados. Há também um viés contra o fabricante de plataforma na leitura de `e5`–`e8`: a fonte principal é o lado que se opõe [8]; a documentação do Chrome [2] foi usada como contrapeso.

### Calibração

Confiança por ordem, depois das alterações (conferida pelo verificador na seção 12): ordem 1 — alta 3, média 10, baixa 1; ordem 2 — alta 0, média 17, baixa 4; ordem 3 — alta 0, média 0, baixa 21. Cai com a ordem.

### Registro de alterações

| id | antes | depois | por quê |
|---|---|---|---|
| e1 | prazo 2028 | prazo 2029 | pré-mortem 1; referência WebGL 2 (5 anos) contada a partir do Safari 26 |
| e2.3 | "Provedores de nuvem perdem a receita das chamadas pequenas e concentram preço em tarefas longas" | removido (seção 12) | teste da causa solta: a queda de preço na ponta baixa acontece sem d1 [11] |
| e3.2.1 | prazo 2032 | prazo 2034 | pré-mortem 2; o maior BitNet público é de 2B [3] |
| e6 | confianca alta | confianca media | a cadência de troca do modelo do sistema não é pública; só duas trocas documentadas |
| e7 | confianca alta | confianca media | um protocolo anunciado não mostra quanto tráfego passa por ele |
| e5.2 | confianca alta | confianca media | nenhum caso documentado de obra barrada; só o mecanismo |
| e9.1 | sinal medio | sinal fraco | a fonte [18] dá método pericial, não caso judicial |
| e11 | confianca media, prazo 2030 | confianca baixa, prazo 2033 | laboratório; falha em 8 GB [20]; referência VR |
| e13 | sinal forte | sinal medio | nenhum artefato é de consumo geral |
| e13.1 | prazo 2030 | prazo 2032 | extrapolação linear do cluster de entusiasta |
| e11.2 (ex-e11.3) | "O modelo pessoal vira bem confiscável pelo Estado em regimes autoritários" | removido (seção 12) | sem mecanismo específico além de `e9.1`; duplicava |

Cota por raiz: d1 — `e1`, `e3.2.1`, `e2.3` removido; d2 — `e6`, `e7`, `e5.2`; d3 — `e9.1`, `e11`, efeito removido; d4 — `e13`, `e13.1`. Cumprida.

## 8. O que a máquina errou

1. **Contradição de fonte que quase entrou como fato.** A página da Prompt API, lida por um resumidor automático, devolveu "estável no Chrome 138" para a web [2]; a imprensa diz Chrome 148, em 05/05/2026 [9], e a Register de 30/04 diz que ainda estava em teste [8]. Usei 148, que é consistente com as duas reportagens, e registrei a divergência na seção 12. O "138" provavelmente se refere a extensões — não confirmei.
2. **Números de adoção de fonte que não abri.** A busca devolveu "52 milhões de downloads mensais do Ollama no 1º trimestre de 2026" e "8,9 milhões de desenvolvedores", de um artigo do dev.to que não abri. Não usei; o número que entra (~9 milhões de usuários) vem da Wikipedia citando o TechCrunch [4], e é de segunda mão.
3. **Counterpoint citado de memória no mapa anterior.** O mapa de horizonte 2031 cita ~39% e ~59% de AI PCs; nesta rodada, a página da Counterpoint abriu só a capa, com o conteúdo atrás de assinatura. Não usei o número; a exigência de 16 GB dos Copilot+ vem do IDC [10].
4. **A data do Chrome com WebGPU.** Na prosa, pensei em escrever "WebGPU no Chrome desde 2023" — é memória minha, não está em nenhuma fonte aberta aqui. Tirei e usei só o Safari 26 [6].
5. **A analogia com o buscador padrão (`e7.1`, `e7.1.1`) e com o cache compartilhado (`e8.1.1`) são minhas.** Soam plausíveis; nenhuma fonte desta rodada as sustenta. Ficaram com sinal fraco e confiança baixa na terceira ordem, e média na segunda por causa da parceria Apple–Google [24].
6. **O dado brasileiro é de vitrine, não de mercado.** A lista de mais vendidos [16] vem de Amazon e Mercado Livre, não de participação de mercado medida. Uso para dizer que 4 GB domina a vitrine, não o parque instalado.
7. **Autoria de segunda mão.** A investigação do Heretic é do Financial Times com o grupo Alice; li a versão do Irish Times [14], não o FT. As citações de Google e de Kawin Ethayarajh são da reprodução.

## 9. Três cenários para 2036

**Provável.** Em 2036, todo celular de faixa média para cima e todo laptop vendido traz um modelo do sistema, atualizado pelo fabricante, que resume, reescreve, descreve imagem e conversa em português sem rede. A IA local é real, mas é do fabricante: Apple, Google e Microsoft decidem o modelo, a versão e o que ele recusa, e intermediam as chamadas para nuvens de terceiros quando o aparelho não dá conta. Na web, a Prompt API existe no Chrome e no Edge; o Safari e o Firefox oferecem outra coisa ou nada, e quem quer portabilidade embarca o próprio motor sobre WebGPU. Os aparelhos de entrada, que no Brasil ainda são a maioria, chamam a nuvem para quase tudo. Entusiastas e pequenos estúdios rodam modelos abertos em máquinas de casa e acessam pelo celular. Sinal precoce de que estamos entrando nele: a Prompt API chegando ao Chrome para Android até 2028 sem que o Safari adote equivalente.

**Desejável.** Em 2036, existe uma interface web para modelo local implementada por todos os navegadores, que permite ao usuário escolher o modelo (do fabricante, aberto, ou o seu), e a política de conteúdo é a da lei, não a do fornecedor. Modelos de 1 bit de 7–10B cabem em 2 GB e o celular de entrada roda IA útil em português. O histórico e a memória do assistente ficam num arquivo cifrado que a pessoa leva de um aparelho para outro. Para chegar lá: Mozilla e WebKit teriam de propor uma alternativa com escolha de modelo, em vez de só bloquear; laboratórios teriam de continuar publicando modelos pequenos abertos; o preço da memória teria de voltar. Sinal precoce: uma proposta de API com modelo escolhido pelo usuário ganhando apoio de dois motores de navegador.

**Indesejável.** Em 2036, a IA local significa três modelos, de três empresas, assinados, que só rodam em aparelho caro. Modelos abertos pequenos deixaram de ser publicados depois de incidentes com versões destravadas; os que existem circulam fora da loja. O histórico de conversa, guardado no aparelho sem cifragem, é peça comum em processos. No Brasil, a "IA privada" é recurso de quem tem iPhone ou Android de ponta; o resto conversa com servidores estrangeiros. Sinal precoce: um grande laboratório anunciando que deixará de publicar peso aberto de modelos pequenos citando remoção de salvaguardas, ou uma loja de aplicativos proibindo modelos modificados.

## 10. O experimento

**O que é.** *O diário que pensa.* Uma página web, sem servidor, em que a pessoa escreve um diário e um modelo local (WebGPU, via Transformers.js ou WebLLM) responde **enquanto** ela escreve — sugere, pergunta, lembra de entradas anteriores. A memória (as entradas e um índice semântico local) fica num arquivo que a interface mostra como objeto: dá para exportar, entregar a outra pessoa, abrir em outro aparelho, ou apagar. Há um botão que manda a mesma pergunta para uma nuvem, e a interface marca de forma visível quando isso acontece. A mesma página roda em três lugares: notebook com GPU, celular de ponta, celular de 4 GB.

**Que pergunta sobre o futuro responde.**
1. A resposta contínua (`e1`, `e1.1`) muda a experiência de criar, ou é indiferente comparada a enviar-e-esperar?
2. A pessoa percebe e se importa com a diferença entre local e nuvem quando ela é visível (`e2.1`)?
3. Quando a memória vira arquivo na mão (`e9`, `e11.2`), a pessoa a trata como diário (guarda, não entrega) ou como app (indiferente)?
4. O que acontece no celular de 4 GB (`e3.1`): funciona, degrada, ou cai para a nuvem?

**Que tecnologia emergente usa, e por que não dá com a madura.** Inferência por WebGPU num modelo de 0,5–2B quantizado, rodando na aba, e embeddings locais. Com API de nuvem (madura), a resposta a cada tecla custa por chamada e sai do aparelho — as duas coisas que o experimento quer testar deixam de existir. Com servidor próprio (maduro), a memória não é um arquivo da pessoa.

**O que a turma faz em sala.** Duplas. Cada pessoa escreve dez minutos no modo contínuo e dez no modo enviar-e-esperar, em ordem alternada. Depois, cada uma recebe o pedido de entregar o arquivo de memória ao colega; registra se entrega e por quê. Uma rodada no celular de 4 GB de alguém da turma, medindo tempo de carregamento, tokens por segundo e queda de desempenho após cinco minutos. Três perguntas curtas ao fim: notou quando foi para a nuvem? preferiu qual modo? entregaria o arquivo?

**O resultado que faria o autor mudar de ideia.** Se a maioria não distinguir o modo contínuo do enviar-e-esperar, `e1` e `e1.1` caem de confiança média para baixa — a latência local não é o que muda a interação. Se a maioria não notar ou não se importar com a saída para a nuvem, `e2.1` cai e o cenário provável fica mais provável. Se a maioria entregar o arquivo de memória sem hesitar, d3 perde força como ruptura cultural (o modelo-como-coisa é só técnico). Se o celular de 4 GB rodar bem um modelo útil, `e3.1` está errado e o freio é menor do que o mapa supõe.

## 11. Fontes

Vinte e seis fontes abertas e lidas em 22/09/2026. As que não abriram ou ficaram atrás de assinatura estão na seção 12.

1. https://v-chandra.github.io/on-device-llms/ — sustenta a faixa de 125M–3B para celular, quantização de 4 bits como padrão, BitNet de 2B em ~400 MB, RAM disponível abaixo de 4 GB, 50–90 GB/s de banda, TOPS dos NPUs e personalização no aparelho como direção de pesquisa. Vikas Chandra e Raghuraman Krishnamoorthi (Meta), 24/01/2026; revisão técnica de quem trabalha no tema, explícita sobre limites.
2. https://developer.chrome.com/docs/ai/prompt-api — sustenta requisitos (22 GB, 16 GB de RAM ou >4 GB de VRAM), ausência de Android e iOS, download por origem e remoção abaixo de 10 GB, entradas de áudio e imagem. Documentação oficial, atualizada em 26/08/2026; a indicação de "estável no 138" diverge da imprensa (seção 8).
3. https://github.com/microsoft/BitNet — sustenta a linha do tempo 2024–2026, os ganhos de velocidade e energia, a afirmação de 100B em CPU e os embeddings de 1 bit de julho de 2026. Repositório oficial: confiável para o que mede; interessado no resultado.
4. https://en.wikipedia.org/wiki/Ollama — sustenta a data de lançamento, a expansão para modelos em nuvem e os "quase 9 milhões de usuários" com US$ 65 milhões (julho de 2026, via TechCrunch). Enciclopédia colaborativa; número de segunda mão.
5. https://developer.apple.com/videos/play/wwdc2026/241/ — sustenta imagem no modelo do aparelho, contexto de 8.192 tokens, protocolo `LanguageModel`, pacotes de Anthropic e Google, PCC gratuito abaixo de 2 milhões de downloads, ferramentas de sistema, avaliações, SDK Python e plano de código aberto. Fonte primária do fabricante.
6. https://www.webgpu.com/news/webgpu-hits-critical-mass-all-major-browsers/ — sustenta o suporte a WebGPU por navegador e plataforma e as lacunas em Linux e Firefox Android. Site comunitário especializado, 01/12/2025; consistente com o anúncio do WebKit.
7. https://termly.dev/ — sustenta o funcionamento do Termly, as ferramentas suportadas, a cifragem e os servidores de retransmissão. Página do próprio produto; sem número de usuários.
8. https://www.theregister.com/2026/04/30/mozilla_pushes_back_against_googles/ — sustenta as objeções de Mozilla, a exigência de aceitar a política de usos proibidos do Google, as taxas de falha em Edge e Chrome e o tamanho do Gemini Nano v3. Imprensa técnica com citação direta; o argumento é do lado que se opõe.
9. https://www.techtimes.com/articles/316729/20260516/google-ships-chrome-prompt-api-over-objections-mozilla-apple-w3c-microsoft.htm — sustenta o lançamento no Chrome 148 em 05/05/2026, a lista de objeções e a ausência em Android e iOS. Imprensa de tecnologia, 16/05/2026; reproduz a síntese de Archibald.
10. https://www.idc.com/resource-center/blog/global-memory-shortage-crisis-market-analysis-and-the-potential-impact-on-the-smartphone-and-pc-markets-in-2026/ — sustenta a causa (desvio para HBM), os cenários de contração e alta de preço de 2026, o peso da memória no custo e a exigência de 16 GB dos Copilot+. Casa de análise, 18/12/2025: projeção, não medição.
11. https://epoch.ai/data-insights/llm-inference-price-trends — sustenta a queda de preço de 9× a 900× por ano e a ressalva sobre persistência. Instituto de pesquisa independente, 12/03/2025.
12. https://developer.android.com/blog/posts/ml-kit-s-prompt-api-unlock-custom-on-device-gemini-nano-experiences — sustenta o alfa do ML Kit Prompt API (30/10/2025), o Gemini Nano v3 sobre Gemma 3n, a entrada de imagem e o Pixel 10 como melhor alvo. Blog oficial.
13. https://techcrunch.com/2026/09/03/abliteration-ai-is-making-a-business-out-of-removing-ai-guardrails/ — sustenta o modelo de negócio da Abliteration.ai, o GLM-5.3 sem recusas e as reações. Imprensa de tecnologia, 03/09/2026.
14. https://www.irishtimes.com/business/2026/05/25/ai-guardrails-stripped-from-meta-and-google-models-in-minutes/ — sustenta a investigação FT/Alice sobre o Heretic, os tempos (Llama 3.3 em <10 min, Gemma 4 em 90 min), as 3.500 variantes e os 13 milhões de downloads, e as respostas de Google e GitHub. Reprodução da reportagem do FT.
15. https://blog.imseankim.com/gdc-2026-ai-game-development-npcs-procedural-content-voice-acting/ — sustenta o ACE no aparelho com Nemotron 3 Nano, as demonstrações da GDC 2026 e o dado de 52% de desenvolvedores com visão negativa (30% um ano antes). Blog pessoal que resume a pesquisa da GDC; secundário.
16. https://www.techtudo.com.br/listas/2026/04/celulares-mais-vendidos-em-2026-ate-agora-veja-se-valem-a-pena-edmobile.ghtml — sustenta que os sete celulares mais vendidos em Amazon e Mercado Livre em abril de 2026 têm de 4 a 8 GB, cinco com 4 GB. Imprensa brasileira; ranking de vitrine, não participação de mercado.
17. https://arxiv.org/abs/2605.20706 — sustenta o LlamaWeb: 16 dispositivos, 8 fabricantes, 10 modelos, 29–33% menos memória, 45–69% mais vazão. Preprint acadêmico (Levine et al., 20/05/2026).
18. https://arxiv.org/abs/2603.23996v1 — sustenta os artefatos periciais de Ollama, LM Studio e llama.cpp, com histórico de prompt em JSON. Preprint de autor único (Shariq Murtuza, 25/03/2026), sem revisão por pares, Windows e Linux.
19. https://github.com/exo-explore/exo — sustenta o cluster doméstico, RDMA sobre Thunderbolt 5, ganhos de paralelismo, APIs compatíveis e 47,6 mil estrelas. Repositório do projeto.
20. https://arxiv.org/html/2512.08211v1 — sustenta o MobileFineTuner: modelos de 124M a 1B, Pixel 7 Pro e 8, falhas por memória em 8 GB. Preprint acadêmico (Geng et al., 09/12/2025).
21. https://9to5google.com/2026/04/02/gemini-nano-4/ — sustenta as variantes do Gemini Nano 4 sobre Gemma 4 E2B/E4B, 140+ idiomas, multimodalidade e disponibilidade em flagships. Imprensa especializada sobre anúncio do fabricante.
22. https://huggingface.co/blog/transformersjs-v4 — sustenta o Transformers.js v4 (09/02/2026), o runtime WebGPU, modelos acima de 8B e ~60 tokens/s num M4 Pro Max. Blog oficial; números de melhor caso.
23. https://github.com/mlc-ai/web-llm — sustenta o WebLLM, a compatibilidade com a API da OpenAI e 19,2 mil estrelas. Repositório do projeto.
24. https://www.apple.com/br/newsroom/2026/09/the-next-generation-of-apple-intelligence-is-available-today/ — sustenta a nova Apple Intelligence (14/09/2026), a divisão aparelho × PCC, a colaboração com Google/Gemini, a Siri em português em outubro e os aparelhos compatíveis. Comunicado do fabricante.
25. https://github.com/Acly/krita-ai-diffusion — sustenta o plugin Krita AI Diffusion, execução local ou em nuvem, requisitos de GPU, licença e 10,6 mil estrelas. Repositório do projeto.
26. https://en.wikipedia.org/wiki/WebGL — sustenta a classe de referência do WebGL 2 (especificação em jan/2017, suporte em todos os navegadores grandes anunciado em fev/2022). Enciclopédia colaborativa; datas conferíveis.

## 12. Anexo — o levantamento bruto

### 12.1 Saída do verificador

Execução de `python3 futurizacao-giordano/references/verificar.py tendencia-ia-local-no-dispositivo-e-no-navegador.md --links` em 22/09/2026, saída integral:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 14 (frontmatter diz 14)
efeitos ordem 2: 21 (frontmatter diz 21)
efeitos ordem 3: 21 (frontmatter diz 21)
prazo > horizonte (2036) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 2 [('e11.1.1', 2038), ('e11.2.1', 2038)]
confiança ordem 1: alta 3 · media 10 · baixa 1
confiança ordem 2: alta 0 · media 17 · baixa 4
confiança ordem 3: alta 0 · media 0 · baixa 21
links da seção 11: 26/26 respondem (frontmatter diz fontes: 26)
RESULTADO: ok
```

Os dois efeitos de 3ª ordem com prazo 2038 (`e11.1.1`, `e11.2.1`) estão fora da janela do mapa e declarados assim na prosa da seção 5.

### 12.2 Premissas assumidas e o que o briefing não cobria

- O briefing era completo; sem rebaixamento de confiança pela ausência de entrevista.
- Assumido: "quem projeta mídia e interação" inclui designers de jogo, artistas digitais, desenvolvedores web e curadores — daí `e5.2.1` e `e6.1.1`.
- Assumido: o falseador do autor ("adoção já passou da maioria inicial") foi aplicado raiz a raiz na seção 4; nenhuma das quatro passou da adoção precoce. O segundo falseador ("só melhora o que existe") recusou "IA mais barata" como raiz.
- Existe um mapa do mesmo tema com horizonte 2031, feito pela mesma skill em 11/09/2026 (`rodadas/giordano/16-…`). Li o resumo, os títulos das raízes e a lista de fontes dele para não repetir, e reaproveitei como pista sete fontes (Chandra, BitNet, WWDC26, Register, Gemini Nano 4, Transformers.js, Murtuza), **reabertas nesta rodada**. As raízes d1–d3 têm parentesco com as de lá; d4 é nova, e o freio da memória (`e3`) também. Registro para a comparação entre horizontes.

### 12.3 Buscas feitas (22/09/2026)

1. "on-device LLM personalization fine-tuning on phone 2026" → MobileFineTuner, EdgeTune, Chandra.
2. "Chrome Prompt API stable 2026 Gemini Nano built-in AI" → documentação do Chrome; blogs.
3. "BitNet 1-bit LLM 2026 new model release" → repositório BitNet.
4. "Ollama downloads users 2026 local LLM adoption numbers" → Wikipedia; artigos de blog com números não verificados.
5. "WWDC 2026 Foundation Models framework third-party models on-device" → vídeo WWDC 241.
6. "Safari WebGPU iOS 26 shipped support all browsers WebGPU 2026" → webgpu.com, WebKit.
7. "Termly remote control AI coding CLI from phone end-to-end encryption" → termly.dev.
8. "Mozilla Prompt API objection interoperability Google usage policy The Register 2026" → Register, TechTimes.
9. "DRAM prices 2026 smartphone RAM shortage AI data centers" → IDC.
10. "Counterpoint AI PC share shipments 2026 NPU 40 TOPS" → Counterpoint (paywall).
11. "ML Kit GenAI Prompt API Android Gemini Nano AICore devices supported 2026" → blog Android.
12. "LLM API price decline per token Epoch AI" → Epoch.
13. "abliteration Heretic open-weight guardrails removed minutes Financial Times 2026" → Irish Times, TechCrunch.
14. "video game NPC on-device small language model shipped 2026" → GDC 2026 (blog).
15. "Brasil smartphones mais vendidos memória RAM 4GB 2026" → TechTudo.
16. "forensic analysis local LLM artifacts LM Studio Ollama arXiv 2026" → Murtuza.
17. "exo distributed inference home cluster Mac 2026" → repositório exo.
18. "Llamas on the Web browser LLM inference cross-device study" → arXiv 2605.20706.
19. "Apple Intelligence português Brasil disponível 2026 iPhone" → Apple Newsroom BR.
20. "EU AI Act open-weight general purpose model obligations August 2026" → ver 12.4.
21. "Krita AI diffusion local ComfyUI artists 2026" → repositório Krita AI Diffusion.

### 12.4 O que não abriu, ou abriu e não serviu

- **Counterpoint Research** (`counterpointresearch.com/en/reports/ai-advanced-pcs-to-surpass-half-of-global-shipments-in-2026`): abriu só a capa (08/09/2025); conteúdo atrás de assinatura. Número de ~59% de AI PCs em 2026 **não usado**.
- **Taylor Wessing** sobre as obrigações de GPAI da Lei de IA europeia a partir de 02/08/2026: HTTP 403. O resultado de busca dizia que modelos de código aberto ficam isentos da documentação (salvo risco sistêmico) e que quem ajusta um modelo com mais de um terço do cômputo original vira "provedor". **Não usado** no mapa por não ter sido aberto; seria a base de um efeito de retroação em d3 ("ajuste fino pesado no aparelho tornaria o usuário provedor" — improvável, porque o limiar de cômputo é alto). Para a próxima rodada: abrir `digital-strategy.ec.europa.eu/en/faqs/guidelines-obligations-general-purpose-ai-providers`.
- **SK Hynix "escassez além de 2030"**: apareceu em resultado de busca (tech-insider.org); não abri. Não usado; a seção 7 usa só o IDC.
- **"52 milhões de downloads mensais do Ollama"; "8,9 milhões de desenvolvedores"; "135 mil modelos GGUF no Hugging Face"**: vinham de artigos de blog (dev.to, promptquorum) não abertos. Não usados.
- **"Prompt API esperada estável no Chrome 145–150"**: de um artigo do dev.to não aberto; contradiz a data de 05/05/2026 no Chrome 148. Não usado.
- **Chrome "built-in AI" (`developer.chrome.com/docs/ai/built-in`)**: abriu, mas sem status por API. Não citado.

### 12.5 Efeitos cortados

- **e2.3** (removido no §6): "Provedores de nuvem perdem a receita das chamadas pequenas (resumo, classificação, reescrita) e concentram preço em tarefas longas." Falhou no teste da causa solta: a queda de preço na ponta baixa acontece pela competição entre provedores [11], com ou sem IA local.
- **ex-e11.3** (removido no §6): "O modelo pessoal vira bem confiscável pelo Estado em regimes autoritários." Sem mecanismo próprio além de `e9.1` (apreensão do histórico); duplicava.
- **Descartado antes do YAML — "surge a profissão de curador de modelo local"**: efeito da lista proibida sem ator e mecanismo específicos.
- **Descartado — "a nuvem como negócio encolhe"**: o próprio d1 é freado por `e3`, e a demanda de datacenter é a causa da escassez de memória; o efeito contraria a evidência disponível [10].
- **Descartado — "voz local substitui dublagem"**: é do tema 13; ficou só a ponte em `e1.2.1`.
- **Descartado — "local-first para dados pessoais"**: é do tema 17; ficou só a ponte em `e9`.

### 12.6 Raízes consideradas e não usadas

- **"NPU em todo aparelho"**: é o hardware; não rompe nada sozinho (é pré-condição de d1). Contexto.
- **"Modelos abertos"**: maduro como prática de publicação; entra como premissa (seção 7, suposição 1), não como raiz.
- **"Agentes locais"** (`hermes-agent`, `mecha-factory`): tratados dentro de d4 (`e13`), porque o agente de longa duração pede a máquina de casa, não o celular.

### 12.7 Material da turma usado como sinal (não como fonte)

`bitnet.cpp` (escolha nº 1 da varredura); `Termly` (sinal fraco 1); `llama.cpp-ts`, `expo-ai-kit`, `@pbji/piper-tts-web` como evidência de que desenvolvedores da turma já empacotam modelo local para Node, React Native e navegador; `Gestalt Village` (LLM no navegador via WebGPU) como exemplo de `e1`; `aura-on-device` e `SelfOS` como exemplo de `e9`/`e11` no bem-estar; os três alunos que rodaram o julgamento em Ollama/Qwen 27B como sinal fraco 4. Nenhum desses foi aberto nesta rodada; entram como registro da disciplina.
