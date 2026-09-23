---
tema: "IA local: no dispositivo e no navegador"
slug: ia-local-no-dispositivo-e-no-navegador
autor_login: grec
zona_de_interesse: Criação e plataforma
data: 2026-09-22
horizonte: 2041
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 14
efeitos_ordem_2: 21
efeitos_ordem_3: 24
tecnologias_citadas: [BitNet b1.58, bitnet.cpp, VibeASR.cpp, Bonsai (PrismML), Gemini Nano, Gemini Nano 4, Gemma 4 E2B/E4B, AICore, ML Kit GenAI Prompt API, Chrome Prompt API, Summarizer API, Translator API, Apple Foundation Models, AFM 3 Core, Private Cloud Compute, LanguageModel protocol, Spotlight Search Tool, AppFunctions, Firebase AI Logic hybrid inference, WebGPU, WebLLM, LlamaWeb, llama.cpp, Transformers.js, Ollama, LM Studio, Termly, LoRA, Heretic (abliteration), Qwen 3.5, Phi-4-mini, NPU, LPDDR5X, HBM]
fontes: 24
confianca: media
experimento: "Aba sem nuvem: a mesma tarefa de mídia rodada em três caminhos locais (modelo do navegador, modelo baixado via WebGPU, modelo de 1 bit) nos aparelhos da própria turma"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Até 2041, o que muda não é que a IA "fica mais barata": é que o modelo deixa de ser um serviço que se chama e passa a ser um arquivo que se possui ou um recurso que o sistema empresta. Quatro rupturas sustentam o mapa: a inferência de 1 a 1,58 bit com silício dedicado, que leva modelo útil ao aparelho de entrada; o sistema operacional e o navegador distribuindo o modelo como recurso de plataforma, o que faz do fabricante o roteador e o guardião do que se gera; a adaptação contínua do modelo no aparelho, que transforma a inteligência em bem pessoal (herdável, apreensível, portátil ou não); e os pesos soltos, que tiram a moderação da camada de serviço. O achado central é uma contradição: a mesma tecnologia empurra para um guardião mais forte (o modelo do sistema, com a política do fabricante dentro da página web) e para guardião nenhum (pesos sem recusa, circulando fora dos repositórios). Quem projeta mídia e interação ganha custo marginal zero e obras que não morrem quando o servidor desliga. Perdem os celulares de 4 GB — a maioria dos mais vendidos no Brasil — e perde a ideia de que "no dispositivo" basta para garantir privacidade.

## 2. O tema

**O que é.** Inferência de modelos de linguagem, visão e voz executada no aparelho do usuário final — celular, laptop comum, aba do navegador — sem chamar servidor, sem chave de API e sem cobrança por chamada. O objeto deste mapa é a inferência no dispositivo. Dados e identidade sem terceiros ficam com o tema 17, voz local com o tema 13 e o navegador como plataforma 3D com o tema 15. Aqui o que fica local é o **modelo**.

**Onde encosta em mídia e interação.** Em quatro pontos. (1) A economia de quem publica: um app de mídia que gera texto, legenda ou imagem deixa de ter custo variável por usuário. (2) A durabilidade das obras: peça interativa que depende de API morre quando a API muda; peça com modelo embutido, não. (3) O desenho da interação: modelo que roda com pouca energia pode ficar sempre ligado, e a interação passa de "invocar" para "ambiente". (4) A liberdade de expressão: quem decide o que o modelo embutido se recusa a gerar passa a decidir o que uma página web pode gerar.

**Por que merece um mapa de futuro e não um levantamento.** Porque as partes estão prontas e a combinação, não. Há modelos de 1 bit que cabem em 240 MB, API estável no Chrome, framework da Apple aberto a qualquer modelo — mas o celular mais vendido no Brasil tem 4 GB de RAM, a API do Chrome só existe no desktop, e o silício que tornaria o 1 bit barato ainda está em artigo. Um horizonte de quinze anos cobre, pelas classes de referência usadas aqui, pelo menos duas trocas de parque de aparelhos e um ciclo completo de padronização web.

**Premissas da rodada (briefing, modo não interativo).** Horizonte 2041. Público: quem projeta mídia e interação. Recorte global, com nota sobre o Brasil. Descartado de início: o que já é comum em produto de massa. Nenhuma raiz suspeita. Viés neutro, com um cenário de cada lado. Ideias óbvias a excluir: as que servem para qualquer tema. Falseadores declarados pelo autor: (a) evidência de que a adoção já passou da maioria inicial de Rogers; (b) evidência de que a tecnologia não rompe nada e só melhora o que existe. Os dois foram aplicados no §2 (seção 4) e no §6 (seção 7). Profundidade: três ordens. Modo: a partir de um tema, não de um setor. Zona de interesse: Criação e plataforma. O briefing cobre todos os itens da entrevista; o que ele não cobre está na seção 12.2.

Repetindo o pedido em três linhas: mapear até 2041 o que decorre de a inferência sair da nuvem e ir para o aparelho e o navegador; para quem projeta mídia e interação, em escala global com nota sobre o Brasil; recusando o que já é comum em produto de massa e testando a hipótese de que isso é só uma melhoria.

## 3. Onde isso está hoje

Âncora feita com acesso à web em 22/09/2026: 21 buscas e 24 fontes abertas (lista na seção 11; buscas que não renderam na seção 12).

### 3.1 O que já existe e funciona

- **Modelos de 1 a 1,58 bit com código e pesos.** O repositório oficial `microsoft/BitNet` traz o bitnet.cpp desde 17/10/2024 e o modelo BitNet-b1.58-2B-4T desde 14/04/2025. Em 2026 vieram otimizações de CPU com ganho adicional de 1,15× a 2,1× (15/01), modelos de embedding de 1 bit com 0,6B e 270M parâmetros (20/07) e o VibeASR.cpp, reconhecimento de fala mais rápido que o tempo real em x86 e ARM (23/07). O repositório afirma ganhos de 1,37× a 5,07× e 55% a 70% menos energia em ARM, e diz rodar um modelo de 100B em uma CPU a 5–7 tokens/s. O suporte a NPU está como "coming next" [1].
- **Primeiro 1 bit com proposta comercial.** A PrismML, derivada do Caltech, publicou em 31/03/2026 a família Bonsai sob licença Apache 2.0. O Bonsai 8B ocupa 1,15 GB, contra cerca de 16 GB em 16 bits. A empresa mede 40–44 tokens/s num iPhone 17 Pro, 131 num M4 Pro e 368 numa RTX 4090, com eficiência energética 4–5× maior. A ressalva é da própria empresa: o ganho no hardware atual vem da memória, não da aritmética de 1 bit, e "hardware designed specifically for 1-bit inference" iria além [5]. Os tamanhos 4B (0,57 GB) e 1,7B (0,24 GB) aparecem num blog secundário [4]. A cobertura do The Register não traz validação independente e aponta que a métrica "intelligence density" foi criada pela própria empresa [24].
- **Modelo embutido no navegador, estável.** O Chrome 148 levou a Prompt API a páginas web, junto com as APIs de resumo, tradução e detecção de idioma. Os requisitos: 22 GB livres, 16 GB de RAM ou mais de 4 GB de VRAM, e só Windows, macOS, Linux e Chromebook Plus. **Não há** Chrome para Android nem iOS. O modelo é removido se o espaço livre cair abaixo de 10 GB. Aceita texto, imagem e áudio na entrada; a saída é só texto. Documentação atualizada em 26/08/2026 [2].
- **Modelo embutido no sistema, aberto a terceiros.** A Apple apresentou em 08/06/2026 a terceira geração dos seus modelos: o AFM 3 Core, com 3B parâmetros, e o AFM 3 Core Advanced, com 20B esparsos e 1–4B ativos. São multimodais, com uso de ferramentas e português entre os idiomas [3]. No framework Foundation Models, o modelo local tem contexto de 8.192 tokens e aceita imagem. O protocolo `LanguageModel` permite plugar qualquer modelo (MLX, Core AI), e Anthropic e Google publicam pacotes Swift. O Private Cloud Compute é gratuito para apps até 2 milhões de primeiros downloads. Há ferramentas de sistema como a Spotlight Search Tool, para RAG totalmente local, CLI `fm`, SDK Python e núcleo de código aberto [21].
- **Android.** O Gemma 4, de 02/04/2026 e sob licença Apache, é a base do Gemini Nano 4: "até 4× mais rápido" e "até 60% menos bateria" que a versão anterior, previsto para topos de linha no fim de 2026 [20]. No Google I/O 2026 vieram o ML Kit Prompt API com saída estruturada e cache de prefixo, AppFunctions (o app como servidor MCP para o sistema) e o Firebase AI Logic com roteamento híbrido `PREFER_ON_DEVICE` / `ONLY_CLOUD` [13].
- **Modelo baixado pela página, via WebGPU.** O WebLLM tem API compatível com a da OpenAI, 19,2 mil estrelas e cache configurável, inclusive "Cross-Origin Storage" [16]. O LlamaWeb, backend WebGPU do llama.cpp publicado em 20/05/2026, usou 29–33% menos memória e teve 45–69% mais vazão que os frameworks anteriores em 16 aparelhos de 8 fabricantes [12].
- **Ferramenta local de massa entre desenvolvedores.** O Ollama tem 8,9 milhões de desenvolvedores ativos por mês, está em 85% das Fortune 500 e captou US$ 65 milhões em julho de 2026. É também o sinal de retroação mais claro: a empresa passou a vender assinatura de modelos grandes **na nuvem própria** (de grátis a US$ 100/mês), porque são "grandes demais para o seu computador" [7].
- **Agente da máquina pessoal acessado pelo celular.** O Termly espelha no celular o Claude Code, o Gemini CLI, o OpenCode e outros agentes, com AES-256-GCM e troca de chaves Diffie-Hellman, e o servidor funciona como retransmissor que não lê o conteúdo. É gratuito e não divulga número de usuários [15].
- **Ajuste fino no aparelho.** A Qualcomm AI Research, em 17/06/2026, mostrou redução de até 26× e 28× no pico de memória para ajustar com LoRA o Llama-3.2 3B e o Qwen-2.5 3B em aparelhos de borda [14].

### 3.2 O que existe e ainda não funciona (ou funciona mal)

- **Qualidade e padronização do modelo do navegador.** Num relatório de fevereiro citado pelo The Register, o Chrome falhou em 15,17% das respostas gerativas e o Edge em 24,29%; em classificação, 23,93% e 29,58%. A Mozilla se opôs, por interoperabilidade, capacidade de atualização e neutralidade; WebKit e o TAG do W3C também, segundo cobertura vista só em resumo de busca (seção 12.6). O uso exige aceitar a política de usos proibidos de IA generativa do Google, que vai além da lei [6].
- **Silício para 1 bit.** Aceleradores ternários existem só em artigo e FPGA (TOM, VitaLLM, LUT) — ver a seção 12. A NPU segue "coming next" no BitNet desde 2024 [1].
- **Privacidade da inferência local.** A inferência local deixa rastro. Ollama, LM Studio e llama.cpp guardam o histórico de prompts em JSON em texto claro [18]. O estado de compilação de pipelines WebGPU identifica o usuário: AUROC de 0,986 na detecção de estado frio/quente, 7,1 bits de entropia a mais que o navegador e o SO, e conjuntos de anonimato unitários nos 1.095 registros de campo [11].
- **Governança de pesos abertos.** Uma investigação do FT com o grupo Alice, de 25/05/2026, removeu as salvaguardas do Llama 3.3 em menos de 10 minutos e as do Gemma 4 em 90 minutos após o lançamento. Contou 3.500 variantes feitas com o Heretic e 13 milhões de downloads [10]. A UE passou a aplicar as regras de GPAI em 02/08/2026. A isenção de código aberto é parcial e se perde com licenciamento comercial. O limiar de risco sistêmico é de 10²⁵ FLOPs [23].

### 3.3 Quem constrói

Microsoft Research (BitNet, bitnet.cpp); PrismML (Bonsai); Apple (AFM 3, Foundation Models, PCC); Google (Gemma 4, Gemini Nano, AICore, Chrome built-in AI); MLC e a comunidade do llama.cpp (WebLLM, LlamaWeb); Ollama (distribuição local e, agora, nuvem própria); Qualcomm AI Research (ajuste fino no aparelho). Do lado que freia: Mozilla e WebKit, na padronização; os fabricantes de memória, que priorizam HBM [8]; a Comissão Europeia, com a Lei de IA [23].

### 3.4 Que número descreve a adoção

- **Aparelhos capazes (hardware, não uso):** 36% das remessas globais de smartphones em 2025, 45% previstos em 2026 e mais de 50% em 2027. É o padrão acima de US$ 400 no atacado (Counterpoint, via reprodução) [9]. É remessa anual, não base instalada.
- **Mercado encolhendo pela memória:** −13,9% nas remessas de smartphones em 2026, para 1,08 bilhão, o nível mais baixo já registrado [9]. A IDC projetava −2,9% a −5,2% em volume e +3% a +8% no preço médio, com a memória pesando 15–20% do custo de um aparelho intermediário [8].
- **Desenvolvedores usando modelo local:** 8,9 milhões por mês no Ollama [7].
- **Uso de APIs de modelo embutido por apps de terceiros:** sem número encontrado.
- **Brasil:** cinco dos sete celulares mais vendidos em Amazon e Mercado Livre em abril de 2026 têm 4 GB de RAM (Galaxy A07, Moto G06, G15, G35, Galaxy A17); os outros dois têm 8 GB [19]. O Gemini Nano 4 pede ao menos 12 GB, segundo um guia secundário (seção 12). Hoje, o modelo do sistema não chega a quem compra o aparelho mais vendido.

### 3.5 Aplicação do falseador (a): a adoção já passou da maioria inicial?

**Em parte, sim, e o mapa trata isso como contexto.** Recursos de IA do sistema para o consumidor (resumo de notificação, edição de foto, ditado) já estão em cerca de metade das remessas novas. Por isso não entram como raiz. O que segue emergente: (i) apps de terceiros construídos sobre o modelo local; (ii) o modelo no navegador, só no desktop e só no Chrome; (iii) modelo útil no aparelho de entrada; (iv) adaptação do modelo no aparelho; (v) agentes que moram em casa. A seção 4 recusa explicitamente o que passou do limiar.

## 4. As disrupções-raiz

### 4.0 Candidatos recusados como raiz

- **Chamar API de modelo na nuvem**: recusado. Maduro, é a linha de base contra a qual o mapa mede. Tratado como contexto.
- **Rodar modelo pequeno em servidor próprio ou no laptop do desenvolvedor (Ollama, LM Studio)**: recusado. Com 8,9 milhões de desenvolvedores por mês e presença em 85% das Fortune 500 [7], é maioria entre desenvolvedores, que é o público dessa prática. Tratado como contexto na seção 3.
- **Recursos de IA do sistema para o consumidor (Apple Intelligence, Galaxy AI, Pixel)**: recusado. Já é o padrão acima de US$ 400 e está em cerca de 45% das remessas de 2026 [9]. É comum em produto de massa, a régua da disciplina.
- **WebGPU**: recusado como raiz. É infraestrutura já disponível nos navegadores grandes; entra como pré-condição da raiz 2.
- **"IA mais barata na nuvem"**: recusado. É melhoria sustentadora (Christensen): a queda de 9× a 900× ao ano no preço por desempenho [17] faz o mesmo, mais barato. Entra como força concorrente em §6.

### 4.1 Raiz 1 — Inferência de baixíssima precisão com silício dedicado leva modelo útil ao aparelho de entrada

1. **O que rompe.** A suposição de que inteligência útil exige data center e, portanto, custo por chamada. Com pesos ternários, o gargalo deixa de ser multiplicar números de ponto flutuante e passa a ser a memória. Um modelo de 8B em 1,15 GB [5] cabe onde hoje não cabe nenhum.
2. **Por que agora.** Três coisas apareceram entre 2024 e 2026: modelos treinados nativamente em 1,58 bit que não perdem para os de 16 bits em benchmark [1][5]; runtimes de CPU que exploram isso [1]; e, a partir de 2026, uma crise de memória que torna a economia de RAM decisiva, não opcional [8][9].
3. **Onde está na difusão.** Demo pública e produto de nicho: pesos disponíveis, nenhum produto de massa. É especulativo, e a cadeia inteira leva confiança limitada.
4. **O que falta.** Silício com aritmética ternária ou por tabela de consulta no SoC de entrada, hoje só em artigo; suporte a NPU nos runtimes; modelos de 1 bit acima de 8B com avaliação independente; ferramentas de ajuste fino em 1 bit. Nenhum item é impossível, então é raiz, não wildcard.

**Quem bloqueia.** Os fabricantes de memória, que vendem HBM com margem maior que LPDDR [8], e os laboratórios que vendem inferência. Os primeiros ditam o ritmo da RAM nos aparelhos; os segundos, o ritmo com que modelos de ponta ganham versão de 1 bit aberta. Efeito: e2.2.

### 4.2 Raiz 2 — O modelo vira recurso de plataforma: o sistema e o navegador distribuem, o app só chama

1. **O que rompe.** A relação comercial entre quem desenvolve e quem vende modelo. No lugar de contrato, chave e fatura, o modelo passa a ser um recurso como a câmera ou o GPS: o desenvolvedor não escolhe o modelo, não paga por ele e não controla quando ele muda. O fabricante passa a ser, ao mesmo tempo, distribuidor, roteador entre local e nuvem, e autor da política de uso dentro do app e da página [2][6][21].
2. **Por que agora.** Em 2026, três coisas coincidem pela primeira vez: API web estável [2], framework nativo aberto a modelos de terceiros com cota gratuita de nuvem confidencial [21], e roteamento híbrido oficial no Android [13]. Em 2021 não havia modelo pequeno com qualidade para justificar a API.
3. **Onde está na difusão.** Para quem desenvolve, está entre produto de nicho e adoção precoce: o Chrome só no desktop, o Android só em topos de linha, o iOS em aparelhos compatíveis. Emergente.
4. **O que falta.** Especificação interoperável (hoje há objeção formal de dois dos três motores [6]); disponibilidade no celular Android e no navegador móvel; garantia de comportamento entre versões; política de uso que não exceda a lei.

**Quem bloqueia.** A Mozilla e o WebKit, bloqueando a padronização [6]. E, no sentido inverso, o próprio Google, com incentivo para capturar a camada, porque quem distribui o modelo padrão distribui a política. Efeitos: e5.2 e e7.

### 4.3 Raiz 3 — O modelo pessoal: adaptação contínua no aparelho a partir da vida de quem usa

1. **O que rompe.** A suposição de que o modelo é o mesmo para todos e pertence ao fornecedor. Se o aparelho gera e guarda um adaptador treinado com correio, fotos e escrita da pessoa, o que a distingue passa a ser um arquivo dela — que se pode copiar, perder, herdar, apreender.
2. **Por que agora.** A redução de 26–28× no pico de memória para LoRA em modelos de 3B [14] põe o ajuste fino ao alcance de um aparelho de 2026. Busca local sobre dados pessoais virou ferramenta de sistema [21], e o app virou servidor de ferramentas para o agente do sistema [13].
3. **Onde está na difusão.** Laboratório (ajuste fino no aparelho) e demo (memória local de agentes). Especulativo; confiança limitada em toda a cadeia.
4. **O que falta.** Bateria e memória para ajuste fino recorrente; formato portátil de adaptador entre ecossistemas; uma decisão dos fabricantes de deixar o adaptador sair do aparelho; regra jurídica sobre de quem é o adaptador.

**Quem bloqueia.** Os fabricantes de SO, com incentivo a manter o adaptador preso ao ecossistema (como mantiveram o iMessage), e a nuvem confidencial como atalho que leva o "pessoal" de volta ao servidor [21]. Efeito: e11.1.

### 4.4 Raiz 4 — Pesos soltos: modelo capaz rodando sem guardião

1. **O que rompe.** A governança pela camada de serviço. Enquanto o modelo morava num servidor, recusa, registro e remoção eram possíveis e baratos. Com os pesos no aparelho, o controle só existe antes da distribuição (no laboratório), durante (no repositório) ou em cima do sistema (no SO). A remoção de salvaguardas em minutos [10] mostra que o controle "dentro do modelo" não se sustenta.
2. **Por que agora.** Ferramentas que automatizam a abliteração sem conhecimento especializado e em hardware comum [10], mais modelos abertos bons o bastante para produção [20], mais o início da aplicação da Lei de IA da UE em 02/08/2026 [23].
3. **Onde está na difusão.** Produto de nicho: 13 milhões de downloads de variantes sem recusa [10]. Emergente.
4. **O que falta**, para a ruptura se consolidar ou ser contida: uma decisão regulatória sobre distribuição de pesos como item de uso dual; e uma decisão dos fabricantes de SO sobre deixar pesos arbitrários usarem a aceleração.

**Quem bloqueia.** Reguladores dos EUA, da UE e do Reino Unido, que segundo a cobertura da investigação do FT devem rever se pesos abertos são tecnologia de uso dual [10]; os repositórios (GitHub, Hugging Face); e o fabricante de SO, se passar a exigir modelo assinado para acesso à NPU. Efeitos: e12.1, e13, e14.1.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: Inferência de baixíssima precisão (1 a 1,58 bit) com silício dedicado leva modelo útil ao aparelho de entrada
    efeitos:
      - id: e1
        ordem: 1
        efeito: Apps de mídia passam a embutir o modelo no próprio pacote em vez de chamar API, e o custo marginal de cada geração cai a zero para quem publica
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Estúdios pequenos voltam a vender ferramenta e jogo com IA por compra única, porque o custo por usuário ativo deixa de existir
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A assinatura dos laboratórios de fronteira se reposiciona como venda de capacidade além do aparelho, e o botão pensar mais na nuvem vira elemento explícito de interface com preço visível
                sinal: medio
                prazo: 2035
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: Lojas de aplicativos passam a cobrar por tamanho de download e armazenamento do modelo embutido, e o peso do modelo vira item de preço da distribuição
                sinal: fraco
                prazo: 2037
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Obras interativas com personagens e texto gerados no aparelho deixam de morrer quando o servidor do estúdio desliga ou a API muda de versão
            sinal: fraco
            prazo: 2035
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Arquivos e museus de mídia digital passam a preservar os pesos e o runtime como parte da obra, e a emulação de obra gerativa exige guardar o modelo exato
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Fabricantes de SoC passam a incluir aritmética ternária ou por tabela de consulta no chip de entrada, porque o gargalo da inferência passa de multiplicação para memória
        sinal: medio
        prazo: 2034
        confianca: baixa
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O celular de 4 a 6 GB deixa de estar fora da IA local, e a divisão passa de ter ou não ter IA para qual modelo o aparelho carrega
            sinal: fraco
            prazo: 2037
            confianca: baixa
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Redes públicas de educação e saúde no Brasil passam a distribuir modelos offline em pacote para uso sem franquia de dados, como antes distribuíam conteúdo em cartão de memória
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: A escassez de memória puxada pelos data centers encarece o aparelho e o ganho do 1 bit é gasto para segurar preço, não para ampliar capacidade
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Os fabricantes de memória passam a ditar o ritmo da IA local, e a RAM do aparelho de entrada fica parada por ciclos inteiros enquanto a HBM tiver margem maior
                sinal: medio
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: Ferramentas de criação passam a rodar transcrição, geração e edição no aparelho do criador, e o crédito por geração deixa de ser a unidade de preço da ferramenta criativa
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Plataformas de geração por crédito perdem o criador profissional, que passa a comprar modelos afinados e estilos licenciados vendidos como arquivo
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A licença de estilo passa a ser executada por marca embutida nos pesos e não por contrato de API, porque o uso offline não deixa registro em servidor
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Com energia por token quatro a cinco vezes menor, óculos, fones e relógios passam a manter um modelo sempre ativo, e a interação muda de invocar para ambiente
        sinal: medio
        prazo: 2035
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Processado localmente vira o argumento de aceitação social para aparelhos que veem e ouvem terceiros o tempo todo
            sinal: fraco
            prazo: 2037
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Escolas, consultórios e tribunais passam a exigir modo sem inferência verificável, e surge um indicador de hardware para inferência ativa como a luz da câmera
                sinal: fraco
                prazo: 2040
                confianca: baixa
  - disrupcao: O modelo vira recurso de plataforma — o sistema operacional e o navegador distribuem o modelo e o app só o chama
    efeitos:
      - id: e5
        ordem: 1
        efeito: Desenvolvedores web e mobile passam a usar o modelo embutido como usam câmera ou GPS, e a faixa baixa do mercado de API — resumo, tradução, classificação — migra para o aparelho
        sinal: forte
        prazo: 2030
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: O desenvolvedor passa a ajustar o prompt para o modelo de cada plataforma, e o funciona melhor no navegador X volta à web
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: O W3C passa a especificar comportamento mínimo do modelo embutido por suítes de avaliação, porque a interoperabilidade deixa de ser sintática e passa a ser semântica
                sinal: fraco
                prazo: 2037
                confianca: baixa
              - id: e5.1.2
                ordem: 3
                efeito: Bibliotecas de adaptação de prompt por modelo viram camada padrão do front-end, como os polyfills de CSS dos anos 2010
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: A política de uso do fabricante passa a valer dentro da página e do app, e o que o modelo embutido recusa gerar vira limite de expressão para quem publica
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Obras e ferramentas de nicho — arte transgressiva, redução de danos, educação sexual — passam a embarcar modelo próprio via WebGPU, e o modelo baixado vira o livre contra o embutido
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: O fabricante do aparelho vira o roteador entre modelo local e modelo na nuvem, e decide qual pedido sai do aparelho e para qual laboratório
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Laboratórios de fronteira passam a disputar o lugar de modelo de segundo nível dentro do sistema e a pagar ao fabricante por ele, como buscadores pagavam para ser padrão no navegador
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A Comissão Europeia passa a tratar o roteamento local-nuvem como o buscador padrão sob a DMA, com tela de escolha de modelo na configuração do aparelho
                sinal: fraco
                prazo: 2036
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: A troca do modelo do sistema junto com a atualização do SO quebra apps que dependiam de um comportamento, e os desenvolvedores passam a fixar versão ou trazer modelo próprio
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Surge o modelo de sistema com suporte longo, congelado por anos para aplicações de saúde e educação, e o SO passa a carregar mais de uma geração de modelo
                sinal: fraco
                prazo: 2036
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: Navegadores sem modelo próprio ficam sem paridade de API, e a divergência entre motores aumenta a dependência da web em relação ao Chromium
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Motores independentes respondem com traga seu modelo, e a escolha dos pesos passa do fabricante para o usuário ou para a página
            sinal: fraco
            prazo: 2034
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: O modelo padrão vira configuração do usuário como o buscador padrão, e sites passam a ser testados contra vários modelos antes de publicar
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: A inferência local deixa rastros que identificam — histórico de prompts em disco, estado de compilação da GPU — e no dispositivo deixa de equivaler a privado
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Navegadores passam a particionar por origem o cache de modelo e de shaders, e cada site volta a baixar gigabytes que outro site já baixou
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Surge um cache de pesos compartilhado e assinado entre sites, e a disputa passa a ser sobre quem assina quais pesos como confiáveis
                sinal: medio
                prazo: 2035
                confianca: baixa
  - disrupcao: O modelo pessoal — adaptação contínua no aparelho a partir da vida de quem o usa
    efeitos:
      - id: e9
        ordem: 1
        efeito: Assistentes e ferramentas criativas passam a gerar no aparelho um adaptador pessoal treinado com a escrita, as fotos e os hábitos de cada pessoa, e o mesmo modelo base responde diferente para cada uma
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: O adaptador pessoal vira arquivo com valor próprio — backup, migração, perda — e a portabilidade do eu treinado vira disputa entre ecossistemas
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: O adaptador de uma pessoa falecida entra em inventário, e família e fabricante disputam se ele pode continuar sendo executado
                sinal: fraco
                prazo: 2041
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: Criadores de mídia passam a capturar o próprio estilo num adaptador treinado localmente e a licenciá-lo sem entregá-lo a uma plataforma
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e9.2.1
                ordem: 3
                efeito: Contratos de trabalho criativo passam a ter cláusula sobre o adaptador treinado no aparelho da empresa, separando o estilo do empregado do estilo da casa
                sinal: fraco
                prazo: 2039
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: Agentes pessoais passam a indexar correio, agenda e arquivos dentro do aparelho, e o agente local sabe mais sobre a pessoa do que qualquer serviço na nuvem
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: O computador de casa vira servidor de IA pessoal acessado pelo celular com criptografia de ponta a ponta, e a nuvem pessoal deixa de ser metáfora
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: Provedores de banda larga passam a vender upload simétrico e endereço fixo residencial como produto para IA de casa, invertendo o desenho assimétrico da conexão doméstica
                sinal: fraco
                prazo: 2038
                confianca: baixa
              - id: e10.1.2
                ordem: 3
                efeito: Surge a caixa de IA doméstica como eletrodoméstico, vendida pela quantidade de memória e não pela tela
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: O aparelho com modelo e memória locais vira a prova mais completa sobre a pessoa, e a disputa de acesso policial passa do servidor para o aparelho
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e10.2.1
                ordem: 3
                efeito: A ANPD e o STF passam a tratar o modelo pessoal como extensão da intimidade, com regra própria de acesso separada da regra do celular
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: O ajuste fino no aparelho esbarra em memória e bateria, e os fabricantes restringem a personalização a janelas de carregamento noturno, em lotes lentos
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: Fabricantes oferecem a personalização na nuvem confidencial como atalho, e o modelo pessoal volta a morar em parte no servidor do fabricante
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: A distinção entre local e nuvem confidencial some da percepção do usuário, e no dispositivo perde valor como argumento de venda
                sinal: fraco
                prazo: 2037
                confianca: baixa
  - disrupcao: Pesos soltos — modelo capaz rodando sem guardião, e a moderação deixa a camada de serviço
    efeitos:
      - id: e12
        ordem: 1
        efeito: Variantes sem recusa de qualquer modelo aberto aparecem horas após o lançamento, e a moderação por API deixa de ser o controle efetivo sobre o que a IA gera
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: Repositórios de modelos passam a ser o ponto de controle — remoção, verificação de identidade para baixar — e a disputa se desloca do modelo para o repositório
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: Pesos passam a circular por redes par a par fora dos repositórios, como a mídia pirata, e a governança vira caça a arquivos
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e12.2
            ordem: 2
            efeito: Laboratórios que publicam pesos abertos passam a publicar só modelos abaixo do limiar de risco sistêmico da Lei de IA da UE, e o modelo local fica preso a uma faixa de capacidade por decisão, não por técnica
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e12.2.1
                ordem: 3
                efeito: Países fora dos blocos que treinam modelos grandes — o Brasil entre eles — passam a depender de pesos estrangeiros autorizados ou a treinar os próprios modelos pequenos
                sinal: fraco
                prazo: 2036
                confianca: baixa
      - id: e13
        ordem: 1
        efeito: Fabricantes de SO passam a exigir modelo assinado para acesso à NPU, e o modelo baixado roda sistematicamente mais lento que o embutido
        sinal: fraco
        prazo: 2032
        confianca: baixa
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: A comunidade responde com runtimes em CPU e WebGPU que contornam a NPU, e o modelo livre fica um degrau atrás do aprovado
            sinal: medio
            prazo: 2034
            confianca: baixa
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: Destravar a NPU vira prática como o root no Android, e a garantia do aparelho passa a depender de não ter destravado
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e14
        ordem: 1
        efeito: Criadores passam a usar modelos locais sem recusa para ficção, sátira e conteúdo adulto, e o que antes era limitado pela política da API volta a ser limitado só pela lei
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: Abuso gerado offline, sem registro em servidor, leva legisladores a mirar o aparelho, e a pressão regulatória volta contra a própria IA local
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: O SO passa a embutir um classificador sobre a saída de qualquer modelo local, e o guardião volta pela camada do sistema
                sinal: fraco
                prazo: 2036
                confianca: baixa
```

### 5.1 Os mecanismos, efeito por efeito

**Raiz 1 — baixíssima precisão**

- **e1** porque um modelo de 1,7B em 0,24 GB [4] ou um embedding de 270M [1] cabe no pacote de um app, o que faz o custo de gerar uma legenda ou um texto passar da fatura do publicador para a bateria do usuário. **Sinal médio**, com dois artefatos (Bonsai e embeddings BitNet) e nenhum app de massa. **Classe de referência:** WebGL, cuja especificação 1.0 saiu em 2011, com a 2.0 em 2017 e o suporte universal só em fevereiro de 2022 [22]. É o tempo de uma capacidade gráfica ir de "funciona em demo" a "dá para contar com ela": cerca de cinco anos. Contando de 2026, dá 2031.
- **e1.1** porque, sem custo variável, a assinatura perde sua justificativa contábil, o que faz o preço único voltar a caber — como no software antes da nuvem. Troca de ator (o estúdio pequeno) e de mecanismo (contabilidade de custo). **Sinal fraco**: nenhum caso encontrado. Prazo de três anos depois do e1, o tempo de uma geração de produto.
- **e1.1.1** porque a divisão já é oferecida como parâmetro de API (`reasoningLevel` e `.model(privateCloudCompute)` no framework da Apple [21], `PREFER_ON_DEVICE` no Firebase [13], assinaturas de nuvem do Ollama [7]), o que faz a escolha subir da API para a interface: alguém precisa mostrar ao usuário que "pensar mais" custa. **Sinal médio** (três artefatos de API, nenhum de interface).
- **e1.1.2** porque, se o modelo vai no pacote, o custo da distribuição passa a ser o tamanho, o que dá à loja de aplicativos um novo item a cobrar. **Sinal fraco**. É inferência.
- **e1.2** porque obra que depende de API morre quando a API muda ou a empresa fecha, e obra com pesos embutidos só depende do runtime. **Sinal fraco**. **Referência:** o tempo que jogos Flash levaram para ganhar emuladores depois do fim do plugin. Sem fonte aberta nesta rodada; declarado como referência de memória (seção 8).
- **e1.2.1** porque preservar a obra passa a exigir preservar pesos exatos, já que a mesma entrada dá outra saída em outro modelo. Troca de ator (o arquivo, o museu). Fora do ritmo comum de adoção de instituições de memória: confiança baixa.
- **e2** porque os ganhos atuais vêm só da memória [5], e artigos de 2026 propõem aceleradores ternários com ROM e tabela de consulta (seção 12), o que faz o chip dedicado ser o passo seguinte natural. **Sinal médio**: há artigos e FPGAs, não há silício comercial. **Referência:** do artigo ao SoC de celular, um ciclo de projeto de chip, aqui assumido em cinco a oito anos (sem fonte aberta; seção 12.2). Prazo: 2034.
- **e2.1** porque aritmética de 1 bit em silício barato mais pesos abaixo de 1 GB fazem o aparelho de 4 a 6 GB rodar um modelo que hoje exige 12 GB. **Sinal fraco**. **Referência:** troca do parque. Os aparelhos de entrada chegam três anos depois do chip de topo; prazo de 2037.
- **e2.1.1** porque, onde a franquia de dados é cara, modelo offline vale mais que acesso à nuvem, o que faz redes públicas tratarem o modelo como conteúdo distribuível. **Sinal fraco**. Específico da raiz: sem o 1 bit no aparelho de entrada, não há o que distribuir.
- **e2.2 (retroação)** porque 70% da DRAM de alto desempenho vai para data centers (dado de busca, não aberto; seção 12). A IDC projeta preço médio mais alto e remessas menores em 2026 [8], e a Counterpoint mede −13,9% [9]. Isso faz o fabricante usar a economia de memória do 1 bit para manter a margem do aparelho, e não para dar mais IA. **Sinal forte**: há três medições do lado da memória. **É a retroação da raiz 1.**
- **e2.2.1** porque quem aloca wafer entre HBM e LPDDR decide quanta RAM o aparelho de entrada terá [8]. Troca de ator (fabricante de memória). **Confiança baixa**: a crise pode terminar em 2027–2028.
- **e3** porque o reconhecimento de fala mais rápido que o tempo real já roda em CPU com 1 bit [1] e a Apple coloca geração e edição de imagem na família AFM 3 [3], o que faz o criador ter o recurso sem crédito. **Sinal médio.**
- **e3.1** porque, se gerar não custa, o que se vende é o modelo afinado, o que faz o valor ir para o arquivo de estilo. Troca de ator (plataforma de estoque e crédito) e de mecanismo (venda de arquivo, não de chamada). **Sinal fraco.**
- **e3.1.1** porque não há servidor onde registrar o uso, o que faz a execução da licença migrar para o próprio peso. **Sinal fraco**; mecanismo técnico incerto.
- **e4** porque 0,068 mWh por token no iPhone [5] e 55% a 82% menos energia [1] permitem manter um modelo acordado, o que faz o projeto de interação partir de "escutando sempre". **Sinal médio.** **Referência:** o relógio inteligente levou cerca de uma década para ganhar assistente sempre ativo. Sem fonte; prazo de 2035.
- **e4.1** porque, se nada sai do aparelho, o argumento contra gravar terceiros perde força, o que desloca a norma social. **Sinal fraco.**
- **e4.1.1** porque o argumento "processado localmente" não convence quem está do outro lado da lente, o que faz as instituições exigirem prova física de que não há inferência. É a retroação social da raiz 1. **Sinal fraco.**

**Raiz 2 — modelo como recurso de plataforma**

- **e5** porque a Prompt API, o Summarizer e o Translator são estáveis no Chrome 148 [2], o ML Kit Prompt API está em produção [13] e o modelo da Apple é gratuito, com PCC gratuito até 2 milhões de downloads [21], o que tira do desenvolvedor a razão de pagar por tarefas pequenas. **Sinal forte**: três plataformas. **Referência:** a API de geolocalização, que foi de recurso novo a ubíquo em poucos anos. Sem fonte; prazo conservador de 2030, porque falta o móvel no Chrome.
- **e5.1** porque o prompt é acoplado ao modelo, como argumentou a Mozilla [6], e as taxas de falha diferem entre Chrome e Edge [6], o que faz o ajuste por plataforma ser inevitável. **Sinal médio.**
- **e5.1.1** porque uma especificação web que não garante comportamento não é interoperável, o que força o W3C a especificar a semântica por avaliação — fato novo numa API. **Referência:** a padronização do WebGL 2, cerca de cinco anos até todos os motores [22]. Prazo de 2037, contando a objeção atual. **Confiança baixa.**
- **e5.1.2** porque, até existir o padrão, alguém precisa traduzir entre modelos, o que repete a história dos prefixos e polyfills. **Sinal fraco.**
- **e5.2** porque o uso da Prompt API exige aceitar a política de usos proibidos do Google, que vai além da lei [6], o que faz a política do fabricante valer dentro da página de terceiros. **Sinal forte**: fato documentado. É o efeito mais direto sobre o público do mapa.
- **e5.2.1** porque quem precisa gerar o que o modelo embutido recusa pode baixar outro via WebGPU [12][16], o que divide a web em "modelo padrão com política" e "modelo próprio com custo de download". **Sinal fraco.**
- **e6** porque o protocolo `LanguageModel` e os pacotes da Anthropic e do Google [21], e o roteamento híbrido do Firebase [13], põem a escolha local ou nuvem numa camada do sistema. **Sinal forte.**
- **e6.1** porque o lugar de "modelo de segundo nível" no sistema tem valor de distribuição, o que repete o acordo de buscador padrão. **Sinal médio**: os pacotes existem, o pagamento não é público.
- **e6.1.1** porque a Comissão Europeia já trata padrões de sistema de gatekeepers sob a DMA, o que faz o roteamento de modelo virar o próximo alvo. Ator nomeado e mecanismo explícito. **Sinal fraco.**
- **e6.2 (retroação)** porque o AICore "mantém o modelo atualizado" [13] e a Apple reconstruiu o modelo "do zero" em 2026 [3], o que faz o comportamento mudar sem que o desenvolvedor controle. A Mozilla levantou exatamente a "updatability" [6]. **Sinal médio.** **É a retroação da raiz 2.**
- **e6.2.1** porque setores regulados precisam de comportamento reprodutível, o que força versões congeladas. **Sinal fraco.**
- **e7** porque o Chrome lançou apesar das objeções [6], o que deixa Firefox e Safari sem a API. **Sinal médio.** **Quem perde:** motores independentes e desenvolvedores que precisam de compatibilidade.
- **e7.1** porque o motor que não tem modelo próprio pode oferecer escolha, o que transforma a fraqueza em diferencial. **Sinal fraco.**
- **e7.1.1** porque, se o usuário escolhe o modelo, o site não sabe qual vai rodar, o que exige testar contra vários. **Sinal fraco.**
- **e8** porque histórico de prompts em JSON em texto claro [18] e 7,1 bits de entropia de WebGPU [11] mostram que "o dado não sai" não é o mesmo que "o dado não fica" nem que "o usuário não é identificado". **Sinal médio**: dois artigos. Troca de mecanismo em relação ao discurso de venda.
- **e8.1** porque a mitigação proposta é separar por origem [11], o que faz o cache de modelo, de gigabytes [2], deixar de ser compartilhado. **Sinal médio.**
- **e8.1.1** porque o download duplicado de gigabytes é inviável, o que puxa um cache compartilhado — o WebLLM já lista "Cross-Origin Storage" como backend [16]. A disputa passa a ser quem assina. **Sinal médio**: um artefato.

**Raiz 3 — o modelo pessoal**

- **e9** porque o ajuste fino com LoRA em modelos de 3B cabe em borda com 26–28× menos pico de memória [14], o que torna possível um adaptador por pessoa. **Sinal médio**: há artigo com código, não há produto. **Referência:** do artigo ao recurso de sistema, o teclado preditivo com aprendizado federado levou anos. Sem fonte; prazo de 2033.
- **e9.1** porque um adaptador é um arquivo pequeno e separável do modelo base, o que lhe dá existência própria: pode ser copiado, perdido, migrado. **Sinal fraco.**
- **e9.1.1** porque um arquivo que responde como a pessoa é bem com valor afetivo e patrimonial, o que o põe no inventário. Está no limite do horizonte (2041). **Confiança baixa.** A pergunta de 3ª ordem do tema — herdável? apreensível? — aparece aqui e em e10.2.
- **e9.2** porque o estilo treinado no próprio aparelho não precisa passar por plataforma, o que dá ao criador um ativo licenciável. **Sinal fraco.**
- **e9.2.1** porque o adaptador treinado no expediente mistura o estilo pessoal com o da empresa, o que obriga a separar os dois em contrato. Ator nomeado: o contrato de trabalho criativo. **Sinal fraco.**
- **e10** porque a Spotlight Search Tool faz RAG totalmente local [21] e o AppFunctions expõe dados dos apps ao agente do sistema [13], o que junta num só lugar o que antes ficava espalhado em serviços. **Sinal médio**: dois artefatos de plataforma.
- **e10.1** porque o Termly já faz o celular controlar o agente do computador, com retransmissor que não lê o conteúdo [15], o que torna a máquina de casa o servidor. **Sinal médio.**
- **e10.1.1** porque servidor em casa precisa de upload e endereço estável, o que dá ao provedor um produto novo. **Sinal fraco.**
- **e10.1.2** porque a memória é o gargalo do modelo local [5][8], o que faz um aparelho dedicado ser vendido por RAM. **Sinal fraco.**
- **e10.2** porque ferramentas locais guardam histórico em texto claro, recuperável por perícia [18], o que faz o aparelho acumular o que antes ficava disperso em servidores. **Sinal médio.**
- **e10.2.1** porque, no Brasil, o acesso ao celular apreendido já é tema de disputa judicial, e o modelo pessoal adiciona uma camada mais íntima — o que ele "sabe" e infere. Atores nomeados (ANPD, STF), mecanismo de proteção da intimidade. **Sinal fraco.** Referência jurídica de memória, não aberta (seção 8).
- **e11 (retroação)** porque os modelos de 2026 só se ajustam no aparelho até cerca de 3B e com técnicas agressivas [14], o que faz o fabricante limitar a personalização para não esgotar bateria e memória. **Sinal médio.** **É a retroação da raiz 3.**
- **e11.1** porque o PCC já é oferecido como extensão gratuita do modelo local [21], o que o torna o atalho natural para personalizar. **Sinal médio.**
- **e11.1.1** porque o usuário não distingue onde o cálculo acontece quando a interface é a mesma, o que esvazia o argumento. **Sinal fraco.**

**Raiz 4 — pesos soltos**

- **e12** porque o Heretic tirou as salvaguardas do Gemma 4 em 90 minutos e produziu 3.500 variantes com 13 milhões de downloads [10], o que mostra que o controle embutido no modelo não sobrevive à distribuição. **Sinal forte**, com três medições. É o único efeito do mapa com confiança alta: já está acontecendo.
- **e12.1** porque o GitHub já teve de responder, distinguindo código "educacional" de conteúdo proibido [10], o que coloca o repositório como ponto de controle. **Sinal médio.**
- **e12.1.1** porque arquivo que se remove de um lugar reaparece em outro, o que repete a história da mídia pirata. **Sinal fraco.**
- **e12.2** porque a Lei de IA presume risco sistêmico a partir de 10²⁵ FLOPs e estreitou a isenção de código aberto [23], o que dá ao laboratório um incentivo a publicar só abaixo do limiar — e os modelos abertos de aparelho de 2026 já são pequenos (Gemma 4 E2B/E4B [20]). **Sinal médio.**
- **e12.2.1** porque, se o teto de capacidade aberta é decidido por política estrangeira, quem não treina fica com o que é autorizado. **Sinal fraco.**
- **e13 (quem bloqueia)** porque o fabricante já controla o modelo embutido e a política [2][6], o que torna a assinatura para acesso à NPU um passo técnico curto. **Sinal fraco**: nenhum artefato, só inferência.
- **e13.1** porque o bitnet.cpp roda em CPU [1] e o LlamaWeb em WebGPU [12], o que dá à comunidade um caminho que não depende da NPU. **Sinal médio.**
- **e13.1.1** porque o incentivo a destravar a aceleração é o mesmo que levou ao root, o que repete a dinâmica de garantia. **Sinal fraco.**
- **e14** porque as variantes sem recusa já são baixadas em volume [10], o que tira da API o papel de censor de fato para quem cria ficção e sátira. **Sinal forte.**
- **e14.1 (retroação)** porque abuso gerado offline não deixa log no servidor [10], o que desloca a pressão para o aparelho e para a própria ideia de IA local. **Sinal médio.** **É a retroação da raiz 4.**
- **e14.1.1** porque o único ponto que vê toda saída é o SO, o que o torna o candidato a filtro. Referência de memória: a proposta da Apple de 2021 de varrer fotos no aparelho, abandonada depois (não aberta; seção 8). **Sinal fraco.**

### 5.2 Classes de referência usadas (resumo)

| Classe | Número | Fonte | Usada em |
|---|---|---|---|
| WebGL 2: da especificação ao suporte universal | 2017 → 2022, cerca de 5 anos | [22] | e1, e5.1.1 |
| Aparelhos capazes de GenAI nas remessas | 36% (2025) → 45% (2026) → >50% (2027) | [9] | e5, falseador (a) |
| Queda do preço de inferência na nuvem | 9× a 900× ao ano | [17] | §6, retroação competitiva |
| NPU no BitNet: "coming next" | de 2024 a 2026 sem entrega | [1] | e2 |
| Do artigo ao SoC de celular | 5 a 8 anos (premissa sem fonte) | — | e2, e2.1 |
| Troca do parque de celulares | cerca de 3 anos (premissa sem fonte) | — | e2.1 |

### 5.3 Cobertura STEEP e quem perde

- **Social:** e4.1, e4.1.1, e9.1.1, e10.2.
- **Tecnológico:** e2, e6.2, e8, e13.1.
- **Econômico:** e1, e1.1, e2.2, e3.1, e6.1.
- **Ecológico:** e4, pela energia por token. Um efeito de 1ª ordem sobre o consumo dos data centers foi **cortado** (seção 12.3): falhou no teste da causa solta, porque a demanda de nuvem cresce por outros motivos.
- **Político:** e5.2, e6.1.1, e12.2, e14.1.

**Quem perde:**
- provedores de API da faixa baixa (e5);
- plataformas de crédito por geração (e3.1);
- motores de navegador sem modelo (e7);
- o usuário do aparelho de 4 GB (e2.1, que só se resolve em 2037);
- criadores que dependem do modelo embutido e esbarram na política (e5.2);
- quem confiava em "local = privado" (e8, e10.2).

### 5.4 Cruzamentos

**Convergência 1 — o guardião no sistema.** A raiz 2 (e5.2, a política do fabricante dentro da página) e a raiz 4 (e14.1.1, o classificador do SO sobre qualquer modelo local) chegam, por caminhos opostos, ao mesmo ponto: o sistema operacional como camada de controle do que se gera. Na raiz 2, o controle vem porque o fabricante distribui o modelo; na raiz 4, porque ele não distribui e precisa controlar o que roda. É o achado mais forte do mapa: **a IA local não elimina o guardião, muda o endereço dele** — do servidor do laboratório para o sistema do aparelho.

**Convergência 2 — de volta à nuvem, com outro nome.** A raiz 1 (e1.1.1, "pensar mais na nuvem") e a raiz 3 (e11.1, a personalização na nuvem confidencial) convergem para um modelo híbrido em que o "local" é o padrão e a nuvem é a extensão paga ou do fabricante. O Ollama mostra isso em pequena escala: começou local e em 2026 vende nuvem [7].

**Convergência 3 — o arquivo como ativo.** e1.2.1 (pesos preservados com a obra), e3.1 (estilos vendidos como arquivo), e9.1 (o adaptador pessoal) e e12.1.1 (pesos em redes par a par): nas raízes 1, 3 e 4, o modelo passa a ter o estatuto de **mídia** — arquivo que se guarda, vende, herda e pirateia. Para quem projeta mídia, é a mudança de categoria mais relevante.

**Retroalimentação.**
- **Positiva:** e8.1.1, o cache de pesos compartilhado, barateia o download e reforça a raiz 2 e a raiz 1.
- **Negativa:** e14.1, a pressão regulatória por abuso offline, pode travar a raiz 4 e, por tabela, a raiz 1, se o 1 bit for tratado como tecnologia de pesos soltos.
- **Negativa:** e2.2, a memória, freia a raiz 1 enquanto durar a crise.

**Contradição registrada, não resolvida.** e5.2 e e13 (mais guardião) contra e12, e14 e e5.2.1 (menos guardião). As duas coisas não prevalecem ao mesmo tempo para o mesmo usuário. **O que decide:** se os fabricantes de SO passarem a exigir modelo assinado para a NPU (e13) antes de o 1 bit tornar a CPU suficiente (e2), prevalece o guardião. Se o 1 bit chegar primeiro, a aceleração deixa de ser necessária e o guardião perde a alavanca. É uma corrida entre duas datas.

## 6. Sinais fracos e wildcards

### 6.1 Sinais fracos

1. **Termly e a máquina de casa como servidor** [15]. Um agente na própria máquina, controlado pelo celular, com retransmissor que não lê o conteúdo. **O que mudaria:** a IA local deixaria de exigir um aparelho potente no bolso, bastando um em casa, e a raiz 1 perderia peso para a raiz 3. **Sinal observável:** um fabricante de SO ou de roteador lançando "acesso remoto ao seu modelo" como recurso nativo.
2. **"Cross-Origin Storage" no WebLLM** [16]. Um backend de cache para pesos compartilhados entre sites. **O que mudaria:** resolveria o custo de download da raiz 2 fora do fabricante. **Sinal observável:** uma proposta de especificação no WICG ou no W3C com esse nome, com apoio de dois motores.
3. **O Ollama vendendo nuvem** [7]. **O que mudaria:** se a principal ferramenta local migrar o negócio para a nuvem, o "local" pode virar só a porta de entrada gratuita. **Sinal observável:** a participação da receita de nuvem do Ollama ou o lançamento de modelos exclusivos da nuvem própria.
4. **VibeASR.cpp em 1 bit** [1]. Reconhecimento de fala em CPU mais rápido que o tempo real. **O que mudaria:** a voz, tema 13, viraria o primeiro caso de massa de 1 bit, antes do texto. **Sinal observável:** um app de ditado ou legenda de massa anunciando motor de 1 bit.
5. **A fala da própria turma** (do enunciado do tema, não aberta como fonte): três alunos rodaram o julgamento em Qwen 27B local depois de esbarrar em cota. **O que mudaria:** mostra que a instabilidade da cota gratuita é motor de adoção, além do preço. **Sinal observável:** relatos de migração para modelo local motivada por cota, e não por privacidade, em fóruns de desenvolvedores.

### 6.2 Wildcards

- **W1 — Modelo de 1 bit com qualidade de fronteira num celular de entrada.**
  - **Mecanismo:** treino nativo ternário escalado a centenas de bilhões de parâmetros, mais esparsidade (como o AFM 3 Core Advanced, com 20B e 1–4B ativos [3]) e silício ternário barato.
  - **Por que é improvável:** fronteira em 2041 estará muito acima do que cabe em 4–8 GB, mesmo em 1 bit (100B a 1,58 bit ocupam em torno de 20 GB — estimativa aritmética, não medida).
  - **O que faria com o mapa:** a raiz 1 viraria o centro; e1.1.1 e e11.1 cairiam; o negócio de inferência na nuvem encolheria para treino.
  - **Sinal precoce:** um modelo de 1 bit, avaliado por terceiros, empatando com o modelo de fronteira do ano anterior.
- **W2 — A crise de memória se prolonga até 2032.**
  - **Mecanismo:** a demanda por HBM continua crescendo mais rápido que a capacidade das fábricas [8].
  - **Por que é improvável:** ciclos de memória historicamente se invertem em dois a três anos (premissa de memória, sem fonte).
  - **O que faria com o mapa:** empurraria e2, e2.1 e e9 em cinco anos, e o modelo pessoal nasceria na nuvem confidencial, não no aparelho.
  - **Sinal precoce:** preço de LPDDR ainda subindo em 2028.
- **W3 — Responsabilidade civil do fabricante pelo que o modelo local diz.**
  - **Mecanismo:** uma decisão judicial importante (UE ou EUA) atribui ao fabricante do SO a responsabilidade pela saída do modelo embutido.
  - **Por que é improvável:** os fabricantes lutariam para se posicionar como "distribuidores", não autores.
  - **O que faria com o mapa:** aceleraria e5.2 e e14.1.1 e empurraria criadores para pesos próprios (e5.2.1).
  - **Sinal precoce:** ação coletiva contra um fabricante por dano causado por resposta do modelo do sistema.
- **W4 — Proibição de distribuição de pesos acima de certa capacidade.**
  - **Mecanismo:** EUA ou UE tratam pesos abertos como tecnologia de uso dual e controlam a exportação [10][23].
  - **Por que é improvável:** conflita com o interesse industrial de Google e Meta em publicar.
  - **O que faria com o mapa:** e12.2 e e12.2.1 virariam fato; a raiz 4 iria para a clandestinidade (e12.1.1).
  - **Sinal precoce:** uma regra de exportação que mencione "model weights".

## 7. Contra o próprio mapa

### 7.1 Pré-mortem: é 2041 e este mapa estava errado. Por quê?

1. **A nuvem ficou barata demais para o local importar.** A queda de 9× a 900× ao ano [17], mesmo desacelerando, torna a inferência na nuvem quase gratuita para o consumidor. O local sobrevive para privacidade e offline, nichos, e a raiz 1 vira melhoria sustentadora. **Aponta para:** e1, e1.1, e3. **Ação:** e1.1 teve o prazo empurrado (2033 → 2034) e e3.1 teve a confiança rebaixada (media → baixa).
2. **O guardião venceu cedo.** A Apple e o Google fecharam a aceleração para modelos assinados antes de o 1 bit tornar a CPU suficiente, e o "local" virou sinônimo de "modelo do fabricante". **Aponta para:** e12, e14, e5.2.1. **Ação:** e14 teve a confiança rebaixada (alta → media), porque o criador usar variante sem recusa não garante que isso escale para além do nicho.
3. **O modelo pessoal nunca saiu do aparelho, nem de dentro do ecossistema.** Ninguém exportou adaptador; herança e licença de estilo não viraram questão, porque o adaptador morre com a conta. **Aponta para:** e9.1, e9.1.1, e9.2. **Ação:** e9.1 teve a confiança rebaixada (media → baixa) e e9.1.1 teve o prazo empurrado (2038 → 2041).

### 7.2 Extrapolação linear

- **e1** ("custo marginal zero") é, em parte, "mais do mesmo, mais barato". Mantém a 1ª ordem porque o mecanismo não linear é a mudança de quem paga (do publicador para a bateria do usuário), não o preço.
- **e5** (a faixa baixa da API migra) é extrapolação linear da API atual. Mantido, com a condição explícita de que depende do Chrome móvel.
- **e10** ("o agente sabe mais") é extrapolação do RAG atual. Mantido pelo mecanismo de concentração: dados antes dispersos em serviços passam a estar num só lugar.

### 7.3 Velocidade de adoção

- **e2**: artigo → SoC em 7 a 8 anos. O prazo inicial de 2032 exigia 6 anos, abaixo da referência assumida. Empurrado para 2034 (+2).
- **e2.1**: prazo inicial de 2034, antes do e2 corrigido mais a troca do parque. Empurrado para 2037 (+3).
- **e9**: prazo inicial de 2031. O artigo de 2026 [14] é de 3B com técnicas agressivas; a referência de artigo a recurso de sistema (anos) não sustenta 5 anos com bateria. Empurrado para 2033 (+2).
- **e4**: prazo inicial de 2033, com sinal médio. Empurrado para 2035 (+2) pela referência do relógio.
- **e1.2**: prazo inicial de 2034. Empurrado para 2035 (+1), porque depende de e1.

### 7.4 A raiz que não acontece

- **Se a raiz 1 não se concretizar** (o silício de 1 bit nunca chega ao aparelho de entrada): sobram as raízes 2, 3 e 4 no topo de linha e no desktop. O mapa perde e2.1 e e2.1.1, e o Brasil sai do mapa. O resto se mantém: a raiz 1 não é a mesma raiz disfarçada.
- **Se a raiz 2 não se concretizar** (sem padrão, com a Prompt API ficando só no Chrome desktop): os desenvolvedores embarcam o próprio modelo (e5.2.1 vira regra), e a raiz 1 ganha peso. O mapa perde e6.1 e e6.1.1.
- **Se a raiz 3 não se concretizar:** o modelo segue igual para todos, e a pergunta sobre herança desaparece. As raízes 1, 2 e 4 ficam intactas.
- **Se a raiz 4 for contida** (repositórios e SO fecham): sobra o guardião da raiz 2, e a contradição da seção 5.4 se resolve a favor dele.

Nenhuma raiz sustenta sozinha as outras três: o teste passa.

### 7.5 Suposições escondidas

1. **Os modelos abertos continuam abertos.** Se Google e Meta pararem de publicar pesos, as raízes 1 e 4 dependem da China ou de nada. Essa quebra vira o wildcard W4.
2. **A energia do aparelho é barata o bastante.** Assumida; nada no mapa depende de preço de energia doméstica.
3. **Os fabricantes de SO continuam deixando apps de terceiros rodarem runtimes próprios em GPU e WebGPU.** Se não deixarem, e13 vira realidade cedo. Não era um efeito, era uma premissa: promovida a efeito explícito (e13).
4. **A memória volta a ficar barata depois de 2028.** Explicitada como W2.
5. **O navegador segue sendo a plataforma aberta de distribuição.** Se ele virar só a casca do sistema, a raiz 2 funde com o SO.

### 7.6 Viés do autor

A zona de interesse do autor, "Criação e plataforma", puxa três efeitos que podem estar no mapa por gosto:
- **e1.2.1** (museus preservando pesos) é o efeito mais "de professor de mídia" do mapa. Mantido com confiança baixa e marcado aqui como viés.
- **e3.1.1** (licença de estilo embutida nos pesos) tem mecanismo técnico fraco.
- **e9.2.1** (cláusula do adaptador em contrato criativo).

Há também um viés pró-descentralização: a raiz 4 foi descrita no início como "libertação" e reescrita para dar o mesmo peso a e14.1.

### 7.7 Calibração

A contagem final está na saída do verificador, na seção 12.1:
- **1ª ordem:** alta 1 · media 11 · baixa 2
- **2ª ordem:** alta 0 · media 14 · baixa 7
- **3ª ordem:** alta 0 · media 0 · baixa 24

A confiança cai com a ordem. Nenhum efeito de 3ª ordem tem confiança alta.

### 7.8 Registro de alterações (auditável)

| id | antes | depois | por quê |
|---|---|---|---|
| e1.1 | prazo 2033 | prazo 2034 | pré-mortem 1: a nuvem barata compete |
| e2 | prazo 2032 · confianca media | prazo 2034 · confianca baixa | referência artigo → SoC de 7 a 8 anos; sem silício comercial hoje |
| e2.1 | prazo 2034 | prazo 2037 | segue e2 mais a troca do parque |
| e3.1 | confianca media | confianca baixa | pré-mortem 1 |
| e4 | prazo 2033 | prazo 2035 | referência do relógio |
| e1.2 | prazo 2034 | prazo 2035 | depende de e1 |
| e5 | confianca alta | confianca media | a API não existe no Chrome Android nem no iOS [2]; o sinal é forte, a confiança não |
| e5.1.2 | — | criado | faltava o efeito de transição antes do padrão |
| e9 | prazo 2031 | prazo 2033 | referência de artigo a recurso de sistema |
| e9.1 | confianca media | confianca baixa | pré-mortem 3 |
| e9.1.1 | prazo 2038 | prazo 2041 | pré-mortem 3; fica no limite do horizonte |
| e13 | sinal medio · confianca media | sinal fraco · confianca baixa | nenhum artefato encontrado; é inferência |
| e14 | confianca alta | confianca media | pré-mortem 2 |
| e4.2 | ordem 1, "modelos locais reduzem consumo dos data centers" | removido → seção 12.3 | teste da causa solta: a demanda de nuvem cresce por outros motivos, e isso não deriva da raiz |
| e10.3 | ordem 1, "operadoras perdem receita de dados" | removido → seção 12.3 | extrapolação linear e fraco: o tráfego de IA é pequeno perante vídeo |
| e12.3 | ordem 1, "surge a profissão de auditor de pesos" | removido → seção 12.3 | efeito proibido sem ator nem mecanismo específicos |

Cota cumprida: pelo menos um efeito rebaixado ou removido em cada raiz — raiz 1 (e2, e3.1, e4.2), raiz 2 (e5), raiz 3 (e9.1, e10.3), raiz 4 (e13, e14, e12.3).

## 8. O que a máquina errou

1. **Números do Bonsai divergentes entre fontes.** O blog secundário [4] dá 132 tokens/s para o 4B, 130 para o 1,7B no iPhone 17 Pro Max e data de 1º de abril. A página da PrismML [5] dá 131 tokens/s para o **8B** num M4 Pro, 40–44 no iPhone e data de 31 de março; um resultado de busca dava 4 de abril. Usei os números da fonte primária para o 8B e o secundário só para o tamanho do 4B e do 1,7B, que a primária não detalhou na parte lida. Os valores de velocidade do blog podem estar trocados de modelo.
2. **Tamanho do Gemini Nano.** Um blog visto na busca dava 2,7–4 GB; o The Register [6] dá 4,27 GB; a documentação do Chrome [2] não dá tamanho, só os 22 GB de espaço livre. No texto, usei só "gigabytes".
3. **A página da Counterpoint abriu sem conteúdo.** Os 36%, 45% e −13,9% vêm de uma reprodução [9], não da fonte original. A definição de "aparelho capaz de GenAI" (acima de US$ 400 no atacado) é da reprodução.
4. **Dados de busca não abertos, que eu quase usei.** "70% da DRAM de alto desempenho para data centers", "preço médio +14% para US$ 523" (a CNN devolveu 451) e "12 GB para o Gemini Nano 4" (guia secundário) vieram só de resumo de busca. O 70% aparece no mecanismo de e2.2 marcado como não aberto; os outros dois ficaram fora do texto principal.
5. **Referências de memória usadas como classe de referência.** A troca do parque em cerca de 3 anos, o ciclo de chip de 5 a 8 anos, o tempo do assistente sempre ativo no relógio, a emulação de Flash, a proposta de 2021 da Apple de varrer fotos e a disputa no STF sobre celular apreendido: nenhuma foi aberta nesta rodada. Estão marcadas no texto, mas os prazos de e2, e2.1, e4 e e9 dependem delas.
6. **Ancoragem num mapa anterior do mesmo tema.** Antes de pesquisar, li a lista de fontes do mapa deste tema com horizonte de 2036, no diretório vizinho. Isso pode ter direcionado as buscas (Mozilla, abliteração, forense, TechTudo). Abri todas as fontes que citei, mas a seleção não é independente. As contagens de 1ª e 2ª ordem ficaram iguais às daquele mapa (14 e 21): verifiquei que as raízes e os efeitos são outros, mas a coincidência é um sinal de que a estrutura pode ter sido imitada.
7. **Atribuição institucional.** Atribuí o artigo de 2606.19528 à "Qualcomm AI Research" pelos nomes dos autores (Louizos, Reisser), sem ter lido a afiliação na página. Pode estar errado.
8. **"Estimativa aritmética" no W1.** 100B parâmetros × 1,58 bit ≈ 20 GB é conta minha, sem contar ativações nem cache; é ordem de grandeza, não medida.

## 9. Três cenários para 2041

**Provável.** Em 2041, quase todo aparelho vendido acima da faixa de entrada carrega um modelo do fabricante, e a maioria dos apps de mídia chama esse modelo para resumir, traduzir, legendar e descrever imagens, sem pagar e sem saber exatamente qual versão responde. A nuvem continua a vender o que o aparelho não faz — raciocínio longo, geração de vídeo — e o botão "fazer melhor na nuvem" é um elemento comum de interface. Os modelos de 1 bit chegaram aos intermediários por volta de 2037; nos aparelhos mais baratos, só modelos pequenos de voz e texto. A política de uso do fabricante vale dentro de apps e páginas, e quem quer gerar o que ela recusa embarca modelo próprio, mais lento. O adaptador pessoal existe, mas preso ao ecossistema: troca de marca apaga o "você treinado". **Sinal precoce de que estamos entrando nele:** Prompt API estável no Chrome Android até 2028 sem que Firefox e Safari implementem.

**Desejável.** Em 2041, o modelo é mídia: arquivo que se escolhe, guarda, leva de um aparelho a outro e deixa para a família com regra clara. O W3C especificou um comportamento mínimo verificado por avaliação, e o usuário escolhe o modelo padrão do navegador como escolhe o buscador. O silício ternário chegou ao aparelho de 4 GB, e redes públicas no Brasil distribuem modelos offline para escolas sem franquia de dados. Obras interativas de 2030 ainda rodam, porque os pesos foram preservados com elas. Para chegar aqui, três coisas precisam acontecer: um formato portátil de adaptador aceito por dois fabricantes grandes; uma especificação de modelo embutido que não imponha política além da lei; e silício de 1 bit no SoC de entrada antes de 2035. **Sinal precoce:** uma proposta de API de modelo embutido com apoio de pelo menos dois motores e sem aceite de termos do fabricante.

**Indesejável.** Em 2041, "local" quer dizer "do fabricante". Só modelos assinados usam a aceleração; os pesos abertos circulam em redes par a par e são tratados como mídia ilegal depois de uma sequência de casos de abuso gerado offline. O SO roda um classificador sobre a saída de qualquer modelo, e a web tem o que o modelo embutido deixa gerar. O agente pessoal sabe tudo sobre a pessoa, e o aparelho apreendido entrega ao inquérito não só as mensagens, mas o que o modelo inferiu delas. Quem tem o celular de 4 GB continua pagando franquia de dados para usar IA na nuvem. **Sinal precoce:** um fabricante de SO anunciar, antes de 2030, que só modelos assinados terão acesso à NPU.

## 10. O experimento

**O que é.** "Aba sem nuvem": uma página web estática que executa a mesma tarefa de mídia — descrever uma imagem para acessibilidade (texto alternativo) e reescrever a descrição em três registros — por três caminhos locais, e registra o que acontece em cada aparelho da turma.
- **Caminho A:** modelo embutido do navegador (Prompt API do Chrome, Gemini Nano) [2].
- **Caminho B:** modelo aberto baixado pela página via WebGPU (WebLLM [16] ou LlamaWeb [12]; por exemplo, um Qwen pequeno em 4 bits).
- **Caminho C:** um modelo de 1 bit (Bonsai 1,7B em GGUF [5] via LlamaWeb, se o runtime aceitar o formato; se não aceitar, via bitnet.cpp num laptop, e o caminho C deixa de ser "no navegador" — o que já é um resultado).
- **Base de comparação:** a mesma tarefa num modelo na nuvem, feita pelo professor.

**Que pergunta responde.** Em 2026, para uma tarefa real de mídia e interação, (1) em que fração dos aparelhos de uma turma de graduação brasileira a IA local funciona, (2) quanto custa em download e tempo até a primeira resposta, e (3) se a qualidade basta, julgada às cegas contra a nuvem. As três respostas testam a raiz 1 (o aparelho de entrada está excluído?), a raiz 2 (o modelo embutido recusa ou erra mais?) e o falseador (b): se é só melhoria.

**Que tecnologia emergente usa, e por que não dá com a madura.** A Prompt API [2], a inferência WebGPU [12][16] e o 1 bit [5]. Com a tecnologia madura (API na nuvem), a pergunta não existe: a nuvem funciona em todo aparelho com rede. O experimento só faz sentido porque mede o que acontece quando a rede sai da equação.

**O que a turma faz ao testar.** Cada pessoa abre a página no próprio celular e no próprio laptop e registra: modelo do aparelho e RAM, se cada caminho rodou, os MB baixados, o tempo até a primeira resposta, e se houve recusa. Depois, a turma julga às cegas 20 pares de descrições (local × nuvem) numa escala de 1 a 5, sem saber a origem. Em sala, cruza-se a tabela de aparelhos com a de qualidade, e a discussão parte de e2.1, e5.2 e e8. A página também mostra o que ficou gravado no navegador (o cache de modelo), para tornar e8 visível.

**O resultado que me faria mudar de ideia.**
- Se **mais de 70% dos aparelhos da turma**, celulares incluídos, rodarem pelo menos um caminho local com resposta em menos de 10 segundos **e** os juízes não distinguirem local de nuvem (acerto próximo de 50%), a tese de exclusão do aparelho de entrada (e2.1, com prazo de 2037) está errada: a adoção está mais à frente do que o mapa diz, e o falseador (a) se aplica. O prazo de e2.1 cairia para antes de 2030.
- Se **menos de 20%** rodarem qualquer caminho, e o caminho C não rodar em nenhum celular, a raiz 1 é mais lenta do que o mapa assume, e e1 deve ir para depois de 2033.
- Se o caminho A recusar descrições de imagens que o caminho B descreve (por exemplo, obras com nudez artística), e5.2 ganha evidência de primeira mão.

## 11. Fontes

Vinte e quatro fontes abertas e lidas em 22/09/2026. As que não abriram ou vieram só de resumo de busca estão na seção 12.

1. https://github.com/microsoft/BitNet — sustenta a linha do tempo do bitnet.cpp (2024–2026), os ganhos de velocidade e energia em ARM e x86, os 100B em uma CPU a 5–7 tokens/s, os embeddings de 1 bit, o VibeASR.cpp e o suporte a NPU como "coming next". Repositório oficial da Microsoft: confiável para o que mede, interessado no resultado.
2. https://developer.chrome.com/docs/ai/prompt-api — sustenta o Chrome 148 estável, os requisitos (22 GB, 16 GB de RAM ou >4 GB de VRAM), a ausência de Android e iOS, a remoção abaixo de 10 GB e as entradas multimodais. Documentação oficial, atualizada em 26/08/2026.
3. https://machinelearning.apple.com/research/introducing-third-generation-of-apple-foundation-models — sustenta o AFM 3 Core (3B) e o Core Advanced (20B esparsos, 1–4B ativos), a multimodalidade, o português e o PCC. Fonte primária do fabricante, 08/06/2026; não detalha bits de quantização.
4. https://aistackinsights.ai/blog/1-bit-llms-bonsai-bitnet-on-device-ai-guide — sustenta só os tamanhos do Bonsai 4B (0,57 GB) e 1,7B (0,24 GB). Blog secundário; números de velocidade conflitam com a fonte primária (seção 8).
5. https://prismml.com/news/bonsai-8b — sustenta o Bonsai 8B (1,15 GB, Apache 2.0, 31/03/2026), as velocidades no iPhone, no M4 Pro e na RTX 4090, a energia por token e a ressalva de que o ganho vem da memória. Fonte primária da empresa: interessada, sem validação independente.
6. https://www.theregister.com/2026/04/30/mozilla_pushes_back_against_googles/ — sustenta as objeções da Mozilla (interoperabilidade, política, atualização), a exigência de aceitar a política de usos proibidos, as taxas de falha de Chrome e Edge e os 4,27 GB do Gemini Nano. Imprensa técnica com citação direta; o argumento central é de uma parte interessada.
7. https://techcrunch.com/2026/07/09/popular-open-source-ai-developer-tool-ollama-raises-65m-grows-to-nearly-9m-users/ — sustenta os 8,9 milhões de desenvolvedores por mês, os 85% das Fortune 500, os US$ 65 milhões e a nuvem própria do Ollama. Imprensa de tecnologia; números fornecidos pela empresa.
8. https://www.idc.com/resource-center/blog/global-memory-shortage-crisis-market-analysis-and-the-potential-impact-on-the-smartphone-and-pc-markets-in-2026/ — sustenta a causa (HBM contra LPDDR), os cenários de volume e preço de 2026, o peso da memória no custo e os 16 GB dos Copilot+. Casa de análise, 18/12/2025: projeção, não medição.
9. https://www.electronicsforyou.biz/industry-buzz/genai-smartphones-to-hit-45-share-of-global-shipments-in-2026/ — sustenta os 36% (2025), 45% (2026) e >50% (2027) de aparelhos capazes de GenAI, a faixa acima de US$ 400 e as remessas −13,9%. Reprodução de relatório da Counterpoint, 26/06/2026; secundária.
10. https://www.irishtimes.com/business/2026/05/25/ai-guardrails-stripped-from-meta-and-google-models-in-minutes/ — sustenta a investigação FT/Alice: Heretic, Llama 3.3 em <10 min, Gemma 4 em 90 min, 3.500 variantes, 13 milhões de downloads e as respostas de Google e GitHub. Reprodução de reportagem do FT; confiável.
11. https://arxiv.org/html/2606.26412 — sustenta o rastreamento por estado de pipeline WebGPU (AUROC 0,986; 7,1 bits; 1.095 registros) e a mitigação por separação de chave. Preprint de autor único, 24/06/2026, sem revisão por pares.
12. https://arxiv.org/abs/2605.20706 — sustenta o LlamaWeb: 16 aparelhos, 8 fabricantes, 29–33% menos memória, 45–69% mais vazão. Preprint acadêmico, 20/05/2026.
13. https://android-developers.googleblog.com/2026/05/android-ai-intelligence-system.html — sustenta o Gemini Nano 4 em preview, o ML Kit Prompt API com saída estruturada, o AppFunctions como MCP e o roteamento híbrido do Firebase. Blog oficial do Google.
14. https://arxiv.org/abs/2606.19528v1 — sustenta a redução de 26× e 28× no pico de memória para LoRA em Llama-3.2 3B e Qwen-2.5 3B. Preprint, 17/06/2026; afiliação atribuída por mim, não lida (seção 8).
15. https://termly.dev/ — sustenta o funcionamento do Termly, as ferramentas suportadas, AES-256-GCM com Diffie-Hellman e o retransmissor que não lê o conteúdo. Página do produto; sem número de usuários.
16. https://github.com/mlc-ai/web-llm — sustenta o WebLLM, a compatibilidade com a API da OpenAI, as 19,2 mil estrelas e o backend "Cross-Origin Storage". Repositório do projeto.
17. https://epoch.ai/data-insights/llm-inference-price-trends — sustenta a queda de 9× a 900× ao ano no preço por desempenho e a ressalva sobre persistência. Instituto independente, 12/03/2025.
18. https://arxiv.org/abs/2603.23996v1 — sustenta os artefatos periciais de Ollama, LM Studio e llama.cpp, com histórico de prompts em JSON em texto claro. Preprint de autor único, 25/03/2026, Windows e Linux.
19. https://www.techtudo.com.br/listas/2026/04/celulares-mais-vendidos-em-2026-ate-agora-veja-se-valem-a-pena-edmobile.ghtml — sustenta que cinco dos sete mais vendidos em Amazon e Mercado Livre (abril de 2026) têm 4 GB. Imprensa brasileira; ranking de vitrine, não participação de mercado.
20. https://android-developers.googleblog.com/2026/04/gemma-4-new-standard-for-local-agentic-intelligence.html — sustenta o Gemma 4 E2B/E4B como base do Gemini Nano 4, "até 4× mais rápido" e "60% menos bateria", e a licença Apache. Blog oficial, 02/04/2026.
21. https://developer.apple.com/videos/play/wwdc2026/241/ — sustenta o contexto de 8.192 tokens, a imagem no modelo local, o protocolo `LanguageModel`, os pacotes de Anthropic e Google, o PCC gratuito até 2 milhões de downloads, a Spotlight Search Tool, o CLI `fm`, o SDK Python e o código aberto. Fonte primária do fabricante.
22. https://en.wikipedia.org/wiki/WebGL — sustenta a classe de referência (WebGL 1.0 em 2011, 2.0 em 2017, suporte universal em fevereiro de 2022). Enciclopédia colaborativa; datas conferíveis.
23. https://artificialintelligenceact.eu/gpai-guidelines-overview/ — sustenta a isenção parcial de código aberto e sua perda por licenciamento comercial, o limiar de 10²⁵ FLOPs e as datas de 2025, 2026 e 2027. Site de acompanhamento da Lei de IA (Future of Life Institute); secundário sobre texto oficial.
24. https://www.theregister.com/2026/04/04/prismml_1bit_llm/ — sustenta a ausência de validação independente do Bonsai e a crítica à métrica "intelligence density". Imprensa técnica.

## 12. Anexo — o levantamento bruto

### 12.1 Saída do verificador

(colada abaixo, na íntegra, depois da execução)

```
$ python3 futurizacao-giordano/references/verificar.py tendencia-ia-local-no-dispositivo-e-no-navegador.md --links
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 14 (frontmatter diz 14)
efeitos ordem 2: 21 (frontmatter diz 21)
efeitos ordem 3: 24 (frontmatter diz 24)
prazo > horizonte (2041) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 1 · media 11 · baixa 2
confiança ordem 2: alta 0 · media 14 · baixa 7
confiança ordem 3: alta 0 · media 0 · baixa 24
links da seção 11: 24/24 respondem (frontmatter diz fontes: 24)
RESULTADO: ok
```

### 12.2 Premissas assumidas (o que o briefing não cobria)

- **Data do "hoje":** 22/09/2026, pelo relógio da máquina.
- **"Comum em produto de massa":** operacionalizado como "presente no padrão de aparelhos acima de US$ 400 ou usado pela maioria do público da prática" (seção 4.0).
- **Ciclo do artigo ao SoC de celular: 5 a 8 anos.** Sem fonte aberta; usado em e2.
- **Troca do parque de celulares: cerca de 3 anos.** Sem fonte aberta; usado em e2.1.
- **Ciclo de memória que se inverte em 2 a 3 anos.** Sem fonte aberta; usado em W2.
- **Nota sobre o Brasil:** feita com o ranking de vitrine do TechTudo [19], não com participação de mercado; a IDC e a Counterpoint no Brasil não foram abertas.
- **Modo de execução:** não interativo; nenhuma pergunta feita de volta; a entrevista foi substituída pelo briefing, sem rebaixamento de confiança (regra da skill para briefing completo).

### 12.3 Efeitos cortados

- **e4.2 (ordem 1, raiz 1) — "Modelos locais reduzem o consumo de energia dos data centers de inferência."** Cortado no teste da causa solta: a demanda de nuvem cresce por treino e por modelos grandes independentemente do local; e o sinal (IDC [8]) aponta o contrário no curto prazo. Filhos que tinha: "operadores de data center migram para treino" (2ª) e "metas de emissão de big techs passam a contar inferência no aparelho do usuário como fora do escopo" (3ª) — o último é interessante como efeito de contabilidade (a emissão sai do balanço da empresa e vai para o do usuário) e fica registrado aqui como candidato para um mapa com recorte ecológico.
- **e10.3 (ordem 1, raiz 3) — "Operadoras de telefonia perdem receita de dados com IA offline."** Cortado: extrapolação linear, e o tráfego de texto de IA é pequeno perante vídeo; sem mecanismo não linear.
- **e12.3 (ordem 1, raiz 4) — "Surge a profissão de auditor de pesos."** Cortado: efeito proibido pela skill sem ator e mecanismo específicos. Uma versão específica ("repositórios exigem atestado de avaliação de segurança assinado por terceiro para modelos acima de N parâmetros") foi considerada e absorvida em e12.1.
- **Candidato de raiz — "Agentes de programação locais (opencode, Localforge)."** Tratado como caso de e10/e10.1; é o tema 1 (programação agêntica) com modelo local, e a fronteira com o tema 1 manda deixar lá.
- **Candidato de raiz — "Voz local (Piper TTS no navegador, VibeASR)."** Fronteira com o tema 13; aparece só como sinal fraco 6.1.4.
- **Efeito considerado e não incluído — "O preço do celular passa a ser definido pelo modelo que ele roda, não pela câmera."** Parcialmente absorvido em e2.1 e e10.1.2; como efeito separado, falhava na especificidade (a memória sempre foi item de preço).
- **Rodada descartada de raiz 2:** a primeira formulação era "o navegador vira runtime de IA"; recusada porque WebGPU e WebLLM já existem e o que rompe não é o runtime, é **quem distribui o modelo e a política** — reescrita como está.

### 12.4 Buscas realizadas (21) e o que deram

1. "BitNet 1-bit LLM 2026 on-device" — repositório BitNet [1], blog do Bonsai [4], artigos Vec-LUT e Lever (não abertos).
2. "Chrome Prompt API Gemini Nano 2026 stable" — documentação [2]; blogs de terceiros com 2,7–4 GB para o Nano (não abertos).
3. "Apple Foundation Models framework WWDC 2026 on-device model" — AFM 3 [3], sessão 241 [21]; posts do DEV e Callstack (não abertos).
4. "IA local celular modelo no dispositivo Brasil 2026" — só blogs de vitrine e guias de compra; nenhum número de adoção brasileiro. **Deu em nada útil.**
5. "PrismML Bonsai 1-bit 8B model release" — página da PrismML [5], Register [24]; Forbes, HPCwire e Hugging Face (não abertos).
6. "Mozilla objection Chrome Prompt API web standard 2026" — Register [6]; CyberInsider, GIGAZINE e HN (não abertos). O resumo de busca dizia que WebKit e TAG também objetaram; o Register aberto não identifica outros objetores (divergência registrada: a menção a WebKit/TAG na seção 3.2 vem do resumo de busca e do mapa de 2036, não de fonte aberta nesta rodada — rebaixar essa afirmação a "segundo cobertura não aberta").
7. "DRAM shortage 2026 smartphone memory prices on-device AI RAM" — IDC [8]; CNN (451, não abriu); Android Authority, Register (não abertos).
8. "Ollama users 2026 funding local models" — TechCrunch [7]; Enterprise DNA com "5,0 milhões de usuários ativos em maio" (não aberto; conflito de métrica com os 8,9 milhões mensais).
9. "GenAI-capable smartphones share of shipments 2026 Counterpoint" — página da Counterpoint abriu sem corpo; reprodução [9].
10. "Heretic abliteration remove guardrails open models Financial Times 2026" — Irish Times [10]; Akerman, Futurism, Lexology (não abertos).
11. "WebLLM WebGPU in-browser LLM benchmark 2026 arXiv" — LlamaWeb [12], WebGPU privacy [11]; WebLLM paper e dispatch overhead (não abertos).
12. "Gemini Nano 4 Android AICore ML Kit Prompt API devices 2026" — blog do I/O [13], blog Gemma 4 [20]; guia com "12 GB de RAM" (não aberto).
13. "ternary 1-bit LLM ASIC accelerator chip hardware 2026" — só artigos (TOM 2602.20662, VitaLLM 2604.27396, LUT 2604.25183, TeLLMe 2504.16266, T-SAR 2511.13676); nenhum aberto; usados só como "existem artigos" em e2. **Sem silício comercial encontrado.**
14. "on-device fine-tuning personalization LoRA smartphone arXiv 2026" — 2606.19528 [14]; hipernetwork LoRA 2609.24979 e MeSP 2602.13069 (não abertos).
15–18. Aberturas diretas: Termly [15], WebLLM [16], Epoch [17], forense [18], TechTudo [19].
19. "open-weight models dual-use distribution controls policy 2026 EU AI Act GPAI open source exemption" — AI Act [23]; Taylor Wessing (403, não abriu).
20. "r/LocalLLaMA 2026 small model beats frontier phone Qwen 3.5 4B" — só guias de ranking; Qwen 3.5 small em 02/03/2026 e Phi-4-mini como melhor para 8 GB (não abertos). **Não achei sinal social de r/LocalLLaMA acessível.**
21. Abertura da sessão WWDC 241 [21] e da Wikipedia WebGL [22].

### 12.5 Fontes que não abriram

- https://www.cnn.com/2026/02/27/tech/ai-memory-chips-smartphones-intl-hnk — HTTP 451.
- https://www.taylorwessing.com/en/insights-and-events/insights/2026/08/gpai-obligations-under-the-eu-ai-act — HTTP 403.
- https://counterpointresearch.com/en/insights/genai-smartphone-share-to-rise-to-45-percent-of-global-shipments-in-2026 — abriu só o cabeçalho, sem o corpo do texto.

### 12.6 Correção posterior à escrita

A afirmação, na primeira escrita da seção 3.2, de que "WebKit e o TAG do W3C" objetaram vinha de resumo de busca, não do Register aberto [6], que só identifica a Mozilla. A seção 3.2 foi reescrita: Mozilla objetou (fonte aberta); WebKit e TAG, segundo cobertura não aberta nesta rodada. O efeito e7 não muda de valor por isso: a ausência de implementação em Firefox e Safari é o que conta, e a documentação do Chrome [2] confirma que a API é do Chrome.
