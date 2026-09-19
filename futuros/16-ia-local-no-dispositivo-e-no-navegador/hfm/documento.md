---
tema: "IA local: no dispositivo e no navegador"
slug: ia-local-no-dispositivo-e-no-navegador
autor_login: hfm
zona_de_interesse: Criação e plataforma
data: 2026-09-18
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 13
efeitos_ordem_3: 17
tecnologias_citadas: [BitNet b1.58, bitnet.cpp, llama.cpp, Ollama, LM Studio, GGUF, WebGPU, WebAssembly, WebLLM, MLC-LLM, Transformers.js, Gemini Nano, AICore, ML Kit GenAI APIs, Chrome Built-in AI APIs, Prompt API, Apple Foundation Models framework, AFM 3 Core, AFM 3 Core Advanced, Gemma 3n, Gemma 4 E2B, Gemma 4 E4B, LiteRT-LM, Google AI Edge Gallery, Qualcomm Snapdragon X Elite, Qualcomm AI Hub, NPU, ONNX Runtime, Microsoft Foundry Local, OpenVINO, quantização, quantization-aware training, modelos esparsos]
fontes: 18
confianca: media
experimento: "Sala sem nuvem — peça de mídia interativa que roda o modelo na própria aba por WebGPU e exibe ao vivo o orçamento de inferência (MB baixados, tokens/s, queda de bateria) em três classes de aparelho"
skill_usada: futurizacao-hfm
publico_ok: false
---

## 1. Resumo

A inferência está descendo da nuvem para o aparelho, e o que mudou não foi o desejo — foi o
orçamento. Modelos ternários de 1,58 bit, treino com consciência de quantização e arquiteturas
esparsas puseram capacidade útil dentro de alguns gigabytes: o Gemma 4 E2B declara rodar em menos
de 1,5 GB com contexto de 128 mil tokens, o modelo local da Apple de terceira geração tem uma
variante de 20 bilhões de parâmetros que ativa de 1 a 4 por vez, e o bitnet.cpp relata de 2,37× a
6,17× de aceleração em CPU x86 com até 82,2% menos energia. Ao mesmo tempo, o modelo deixou de ser
escolha do aplicativo: Android o entrega como serviço do sistema (AICore), Apple como framework do
Swift, Chrome como API do navegador. Daí saem três rupturas — o custo marginal da interação cai a
zero depois do download, o fabricante do sistema vira o intermediário entre o app e a inteligência,
e o peso do modelo vira uma dependência de software baixável, forkável e atacável (são 204.655
modelos GGUF no Hugging Face). O mapa é moderadamente confiante porque a evidência contrária é
forte: as NPUs anunciadas quase não são usadas pelos runtimes populares, o Chrome exige 22 GB de
disco livre e 4 GB de VRAM e não funciona em Android nem iOS, e o WebGPU está em 87,35% de suporte
global com Firefox de fora. A promessa de democratização esbarra no aparelho — e no Brasil, onde
51% de quem ganha até um salário mínimo usa celular abaixo de mil reais, isso não é detalhe.

## 2. O tema

O tema é a **inferência no dispositivo do usuário final** — celular, laptop comum, aba do
navegador —, não o modelo pequeno rodando no servidor de alguém. A distinção é o eixo inteiro do
mapa: chamar API de nuvem é maduro, hospedar um modelo próprio é maduro, e rodar o modelo no
aparelho de quem consome a mídia é o que ainda está em formação.

Onde isso encosta em mídia e interação: em três lugares, e todos os três são de projeto, não de
infraestrutura.

**No orçamento da peça.** Quem projeta uma experiência interativa hoje raciocina com uma cota: cada
geração custa, então a interação é racionada, enfileirada, escondida atrás de um botão. Se a
inferência acontece no aparelho, o custo marginal some depois do download — e o que era racionado
pode virar contínuo. Isso muda o que se pode desenhar, não só o que se pode pagar.

**Na cadeia de responsabilidade.** Uma peça que chama a API sabe qual modelo respondeu. Uma peça que
usa o modelo do sistema operacional não sabe: recebe o que o fabricante tiver instalado naquele dia,
com os filtros que o fabricante decidiu. O editor perde a versão do seu próprio produto.

**Na desigualdade.** Enquanto a inteligência morava na nuvem, a diferença entre um aparelho caro e
um barato era a tela. Se ela mora no aparelho, a diferença passa a ser quanta inteligência cabe —
e a curva de exclusão muda de forma.

**Por que merece um mapa de futuro e não um estado da arte.** Porque o estado da arte, aqui, é
enganoso nos dois sentidos. Para cima: as demonstrações de 2026 são impressionantes e fáceis de
extrapolar para uma "IA de graça para todos" que a evidência não sustenta. Para baixo: os
obstáculos atuais — NPU ociosa, WebGPU parcial, 22 GB de disco — parecem definitivos e provavelmente
não são. Um levantamento de estado da arte fotografa esse empate; um mapa causal tem de dizer o que
acontece com *papéis, preços e responsabilidades* dos dois lados dele.

**Fronteiras deste mapa.** Dado e conta local-first (tema 17) ficam de fora: aqui o que fica local é
o *modelo*, não o dado nem a identidade. Voz gerativa (tema 13) e o navegador como console 3D
(tema 15) aparecem só como consumidores da mesma inferência. O objeto é a inferência no
dispositivo — quem paga por ela, quem a controla e quem responde por ela.

## 3. Onde isso está hoje

### 3.1 O modelo encolheu o suficiente — e isso é fato medido

A linhagem de baixíssima precisão saiu do artigo e virou software. O `BitNet b1.58 2B4T` é descrito
pelos autores (Shuming Ma, Hongyu Wang, Shaohan Huang e outros, arXiv:2504.12285, abril de 2025)
como o primeiro LLM nativo de 1 bit em escala de 2 bilhões de parâmetros, treinado em 4 trilhões de
tokens, com desempenho "on par" com modelos abertos de precisão total de tamanho semelhante — e o
próprio relatório está marcado como *work in progress*, o que é uma ressalva que o hype costuma
esquecer. A implementação de referência, `bitnet.cpp`, publica números por arquitetura: **1,37× a
5,07×** de aceleração em CPUs ARM com **55,4% a 70,0%** de redução de energia, e **2,37× a 6,17×**
em x86 com **71,9% a 82,2%** de economia. O repositório registra atualizações recentes: modelos de
embedding de 1 bit em 20/07/2026 e o VibeASR.cpp em 23/07/2026, e declara suporte a NPU como "coming
next" — ou seja, ainda não existe.

Não é só a via ternária. A Apple descreve sua terceira geração de modelos de fundação com duas
variantes locais: o **AFM 3 Core**, denso de 3 bilhões de parâmetros, e o **AFM 3 Core Advanced**,
de 20 bilhões com arquitetura esparsa que "ativa apenas de 1 a 4 bilhões de parâmetros por vez",
comprimidos por *Quantization Aware Training*, com suporte declarado a mais de vinte idiomas
incluindo português. O Google, no anúncio do **Gemma 4** (02/04/2026), publica o E2B rodando "com
menos de 1,5 GB de memória", contexto de 128 mil tokens, chamada de ferramentas estruturada, e
números de borda: **133 tokens/s de prefill e 7,6 tokens/s de decodificação num Raspberry Pi 5**,
e 3.700 / 31 tokens/s num Qualcomm Dragonwing IQ8.

Isto é o achado central do presente: **a capacidade deixou de ser o gargalo antes que a distribuição
deixasse de ser.**

### 3.2 O modelo virou serviço do sistema operacional

Três entregas independentes, com a mesma forma.

No Android, o Gemini Nano roda dentro do **AICore**, um serviço do sistema que distribui e atualiza
o modelo, acelera a inferência no hardware, isola as requisições (não guarda entrada nem saída) e só
acessa a internet indiretamente via *Private Compute Services*. As **ML Kit GenAI APIs** expõem
sete capacidades — prompt, sumarização, revisão, reescrita, descrição de imagem e reconhecimento de
fala —, e o ponto de projeto é este: **todo app usa a mesma cópia do modelo já presente no
aparelho**, sem baixar nada e sem ocupar armazenamento próprio.

Na Apple, o Foundation Models framework dá acesso Swift ao modelo local, com *guided generation* por
macro `@Generable` — isto é, saída estruturada garantida, que é exatamente o que uma peça de mídia
precisa para não quebrar de layout.

No Chrome, as APIs embutidas (Proofreader, Writer, Rewriter, Translator, Language Detector,
Summarizer e Prompt) estão em *origin trial* e não em disponibilidade geral. E aqui os requisitos
publicados são brutais e decisivos: **ao menos 22 GB livres** no volume do perfil (o modelo é
removido se sobrarem menos de 10 GB), **mais de 4 GB de VRAM**, mínimo de **16 GB de RAM e 4
núcleos**, Windows 10/11, macOS 13+, Linux ou ChromeOS em Chromebook Plus — e a declaração explícita
de que **não funcionam em Chrome para Android, iOS ou ChromeOS comum**.

### 3.3 A aba do navegador virou runtime — com asterisco

O artigo do **WebLLM** (arXiv:2412.15803) descreve a arquitetura em três peças — motor de frente
leve, motor de fundo em *web worker* e kernels WebGPU pré-compilados por MLC-LLM e Apache TVM — e
mede a perda contra o nativo num MacBook Pro M3 Max: **Llama-3.1-8B a 41,1 tok/s contra 57,7
nativos (71,2%)** e **Phi-3.5-mini a 71,1 contra 89,3 (79,6%)**. Reter ~80% da vazão nativa dentro
de uma aba é um número melhor do que se esperaria.

O asterisco é o suporte. O `caniuse` registra WebGPU em **87,35%** de suporte global, mas com
**Firefox sem suporte oficial em todas as versões até a 159**, Safari só com suporte parcial a
partir da 26.0 (desabilitado por padrão da 17.4 à 18.7) e Chrome Android a partir da versão 152. O
README do WebLLM não documenta requisitos de memória — silêncio que, em produto, vira suporte
técnico.

Do lado do que dá para publicar: Transformers.js roda ONNX no navegador via WebGPU e WebAssembly;
o `LiteRT-LM` do Google se apresenta como runtime de borda pronto para produção, com alvos em
Android, iOS, macOS, web, desktop e IoT (Raspberry Pi), rodando Gemma, Llama, Phi-4 e Qwen — na
versão 0.16.0, com APIs Swift e JavaScript em *early preview*, o que é a definição de emergente.

### 3.4 O ecossistema de pesos é grande e desgovernado

O Hugging Face lista, na consulta feita para este documento, **204.655 modelos compatíveis com a
biblioteca GGUF**. É um número de ecossistema, não de laboratório: significa que o peso do modelo
já se comporta como pacote de software — versionado, baixado, forkado, republicado.

E, como todo pacote, atacável. O estudo de larga escala de Casey, Santos e Mirakhorli
(arXiv:2410.04490, outubro de 2024) investiga serialização insegura em modelos do Hugging Face e a
capacidade da própria plataforma de sinalizar repositórios vulneráveis, concluindo que a plataforma
"abriga uma gama ampla de modelos potencialmente vulneráveis". O varredor da plataforma marca como
"unsafe" mas não bloqueia o download.

### 3.5 O que existe e não funciona: a NPU

Este é o contrapeso mais importante do mapa, e vem de uma medição de agosto de 2026: os runtimes
locais populares **não usam a NPU**. Ollama não tem backend de NPU (pedido aberto para Snapdragon
desde junho de 2024); llama.cpp tem PR Hexagon da Qualcomm em rascunho e OpenVINO da Intel em
prévia; LM Studio não suporta. Todos caem em CPU ou GPU integrada. A própria documentação da
Qualcomm para rodar llama.cpp no Snapdragon X oferece binários de **CPU e de GPU (OpenCL/Adreno)**
— e nenhuma menção a NPU —, exigindo 16 GB de RAM com mais de 7 GB livres para um Llama-3-8B
Q4_K_M.

Os números de vazão que sobram são modestos: ~10 tok/s em 7–8B no Snapdragon X Elite, 18–20 tok/s
no Intel Lunar Lake. O gargalo é banda de memória: 135 GB/s compartilhados no Snapdragon X Elite
contra 273 GB/s do Apple M4 Pro e 1.008 GB/s de uma RTX 4090. Caminhos de NPU existem — Qualcomm AI
Hub com mais de 175 modelos ONNX pré-otimizados, Microsoft Foundry Local escolhendo a variante QNN
—, mas só por conversão manual e, no ferramental comum, até cerca de 4B de parâmetros.

Tradução para quem projeta: **os TOPS anunciados na caixa não são os TOPS que a sua peça vai usar.**

### 3.6 O caso que já aconteceu: quem responde pelo que o modelo local diz

Em janeiro de 2025 a Apple suspendeu os resumos de notificação de notícias do Apple Intelligence
depois de a BBC reclamar (dezembro de 2024) de manchetes falsas atribuídas à sua marca — entre elas
a de que Luigi Mangione teria atirado em si mesmo, a de que Luke Littler teria vencido o mundial de
dardos horas antes do evento e a de que Rafael Nadal teria se declarado gay. O New York Times também
registrou erros; a Repórteres Sem Fronteiras e o sindicato de jornalistas britânico pediram a
desativação.

O que esse caso prova, para este mapa, não é que o modelo errou. É que **o resumo aparecia sob a
marca de quem não o escreveu, gerado num aparelho que nem o editor nem o leitor controlavam, e a
correção teve de vir por atualização de sistema operacional.** É o efeito de segunda ordem inteiro,
já observado, três anos antes do horizonte.

### 3.7 O contorno regulatório

Na União Europeia, o AI Act isenta modelos sob licença livre e aberta da documentação técnica e das
informações para integradores (artigos 53.1a-b), mas **não** das políticas de direito autoral nem
da divulgação de dados de treino; modelos com risco sistêmico não recebem isenção alguma; e as
obrigações de alto risco valem a partir de **2 de agosto de 2026**. A leitura corrente é que quem
integra um modelo num produto é *deployer*, e quem o modifica substancialmente pode ser
reclassificado como *provider*, com obrigações bem mais pesadas — uma assimetria que aponta
diretamente para quem embarca modelo em app de mídia.

### 3.8 A nota sobre o Brasil

A Pesquisa de Conectividade Significativa da Anatel (divulgada em 02/09/2025, com campo entre agosto
de 2023 e junho de 2024) traz o dado que este mapa não pode ignorar: entre quem ganha até um salário
mínimo, **51% têm aparelho que custou menos de mil reais**; **47,3%** de quem não tem computador
aponta o custo como motivo principal; **35%** dos que ganham até um salário mínimo passaram sete
dias ou mais sem acesso à internet móvel nos 30 dias anteriores, e **11,6%** passaram mais de quinze
dias — quase seis vezes a taxa de quem ganha acima de três salários (2,2%).

Esse último número corta nos dois sentidos, e é por isso que ele importa: a intermitência é o melhor
argumento a favor da IA local no Brasil, e o preço do aparelho é o melhor argumento contra.

### 3.9 Classificação dos achados

| Achado | Classe | Justificativa |
|---|---|---|
| Chamar API de modelo na nuvem | maduro | adoção estabilizada, efeitos observáveis |
| Rodar modelo pequeno em servidor próprio | maduro | idem |
| Quantização agressiva / GGUF como formato de distribuição | maduro | 204.655 modelos listados; ferramental estável |
| Modelo ternário de 1,58 bit em produção | emergente | relatório técnico em *work in progress*; sem NPU |
| Modelo como serviço do SO (AICore, Foundation Models) | emergente e disruptivo | rompe a relação app↔fornecedor de modelo |
| Inferência na aba por WebGPU | emergente | 87,35% de suporte, Firefox fora, requisitos altos |
| APIs embutidas do Chrome | emergente | *origin trial*, ausentes em mobile |
| Aceleração por NPU em runtime popular | emergente e ainda não entregue | Ollama/llama.cpp/LM Studio não usam |
| Peso de modelo como dependência de software | emergente e disruptivo | rompe atualização, procedência e responsabilidade |
| Cadeia de suprimentos de modelos como vetor de ataque | emergente | evidência acadêmica; sem prática de mitigação difundida |

## 4. As disrupções-raiz

### D1 — A inferência de qualidade útil passa a caber no orçamento de um aparelho comum

**O que rompe.** A relação entre qualidade de resposta e custo por resposta. Enquanto a inferência
morava na nuvem, toda interação gerativa tinha preço unitário, e o projeto de mídia era, na prática,
projeto de racionamento: cota, fila, botão. Se o modelo cabe no aparelho, o preço unitário some
depois do download e o racionamento deixa de ter razão técnica.

**Por que agora e não há cinco anos.** Porque três coisas independentes convergiram. Primeiro, a
quantização deixou de ser perda aceitável e virou objetivo de treino — *quantization aware
training* na Apple, ternário nativo no BitNet. Segundo, a esparsidade separou tamanho de custo: o
AFM 3 Core Advanced tem 20B mas ativa de 1 a 4B. Terceiro, o runtime de borda amadureceu como
produto e não como demo: bitnet.cpp com números por arquitetura, LiteRT-LM com alvo de produção em
seis plataformas. O marcador mais concreto é o Gemma 4 E2B em menos de 1,5 GB com 128 mil tokens de
contexto e chamada de ferramentas — capacidade de agente, em memória de aparelho mediano, com
licença Apache 2.0.

**O que ainda falta.** Falta o caminho de aceleração. Hoje a vazão vem de CPU e GPU integrada, e o
teto é banda de memória, não cálculo — 135 GB/s no Snapdragon X Elite contra 1.008 GB/s de uma placa
dedicada. Enquanto Ollama, llama.cpp e LM Studio não falarem com a NPU, a promessa de "roda em
qualquer coisa" vale para texto curto e não vale para agente contínuo, visão e voz ao mesmo tempo.
Falta também evidência independente: os números de energia e velocidade citados são, em sua maioria,
do próprio fabricante do runtime.

### D2 — O modelo deixa de ser escolha do aplicativo e passa a ser recurso do sistema

**O que rompe.** A cadeia de fornecimento da inteligência. No arranjo de nuvem, quem faz a peça
escolhe o modelo, fixa a versão, lê os termos e responde pelo resultado. No arranjo de sistema, o
modelo é um recurso compartilhado do aparelho: uma cópia só, atualizada pelo fabricante, com filtros
do fabricante, e o app apenas pede. É desintermediação do vendedor de API e reintermediação pelo
dono do sistema operacional — troca de guardião, não ausência de guardião.

**Por que agora.** Porque as três plataformas fizeram o mesmo movimento em pouco mais de um ano, com
argumentos de engenharia difíceis de recusar: o AICore evita que cada app baixe seu próprio modelo e
economiza armazenamento; a Apple entrega saída estruturada garantida em Swift; o Chrome resolve a
distribuição do peso. Para quem projeta, a tentação é óbvia — inferência sem chave, sem conta e sem
custo.

**O que ainda falta.** Falta cobertura: as APIs do Chrome não existem em Android nem iOS e exigem
22 GB de disco e 4 GB de VRAM; o AICore depende de plataformas específicas (MediaTek Dimensity,
Snapdragon, Tensor). E falta uma resposta para a pergunta que o episódio da BBC já formulou: quando
o modelo do sistema erra dentro do seu produto, o erro é de quem? Enquanto essa pergunta não tiver
resposta contratual, a adoção fica em funções decorativas e não no miolo do produto.

### D3 — O peso do modelo vira dependência de software: baixável, forkável, atacável e sobrevivente

**O que rompe.** O modo de existência do modelo. Um endpoint é um serviço: tem dono, versão viva,
termos, e pode ser desligado. Um arquivo de pesos é um artefato: é copiado, versionado, guardado,
modificado e republicado — e não pode ser desligado. Isso rompe três coisas ao mesmo tempo: o
controle do fornecedor sobre o uso, o canal de atualização (não há um) e a procedência (não há
verificação obrigatória).

**Por que agora.** Porque a escala virou de ecossistema: 204.655 modelos GGUF listados, formato
único, ferramental convergente. E porque o arquivo passou a ser pequeno o bastante para viajar como
dependência comum — 1,5 GB é ordem de grandeza de biblioteca de jogo, não de datacenter.

**O que ainda falta.** Falta a higiene que o resto da cadeia de software levou vinte anos para
construir: assinatura, procedência, *bill of materials*, varredura obrigatória. O estudo de Casey,
Santos e Mirakhorli mostra a plataforma abrigando modelos potencialmente vulneráveis por
serialização insegura, e o modelo marcado como inseguro continua baixável. Falta também
jurisprudência: o AI Act isenta o open source de parte da documentação mas não do resto, e empurra
obrigação para quem integra — desenho que ainda não foi testado num caso concreto de mídia.

### O que foi recusado como raiz

- **Quantização em si.** É madura e é o *insumo* das três raízes, não uma ruptura própria.
- **"IA de graça".** Não é disrupção, é consequência de D1 — e falsa como enunciado: o custo migra
  para o aparelho, a bateria e o download.
- **NPU.** Seria uma quarta raiz se estivesse entregue. Como os runtimes populares não a usam, ela
  entra como sinal fraco e como wildcard, não como raiz. Registrado no anexo.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A inferência de qualidade útil passa a caber no orçamento de um aparelho comum
    efeitos:
      - id: e1
        ordem: 1
        efeito: O custo marginal de uma interação gerativa cai a zero depois do download, e o orçamento do produto deixa de ser por chamada e passa a ser por aparelho
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Peças de mídia passam a embutir geração contínua em vez de racioná-la atrás de um botão
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A régua cultural do que se considera interativo sobe, e resposta gerada na hora vira expectativa mínima e não recurso
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: Funcionar sem rede entra nos critérios de acessibilidade digital ao lado de contraste e leitor de tela
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Quem vende IA por assinatura desloca a cobrança da inferência para sincronização, contexto e garantia de resultado
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: O valor econômico da IA migra do modelo para o acervo privado que o alimenta
                sinal: medio
                prazo: 2032
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O aparelho, e não a conta, passa a ser o teto de qualidade da experiência
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O projeto de interface volta a ter de degradar graciosamente entre classes de aparelho, como na virada do responsivo
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Surge uma disciplina de orçamento de inferência no projeto de produto, análoga ao orçamento de performance web
                sinal: medio
                prazo: 2031
                confianca: media
              - id: e2.1.2
                ordem: 3
                efeito: Em mercados de aparelho barato, a IA local aprofunda a exclusão que prometia resolver
                sinal: medio
                prazo: 2032
                confianca: media
          - id: e2.2
            ordem: 2
            efeito: Fabricantes passam a vender capacidade de inferência como antes vendiam câmera, e o ciclo de troca de aparelho encurta
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Quanto de IA cabe no aparelho entra na régua de compra do consumidor comum
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: O modelo deixa de ser escolha do aplicativo e passa a ser recurso do sistema operacional e do navegador
    efeitos:
      - id: e3
        ordem: 1
        efeito: O aplicativo passa a pedir inteligência ao sistema em vez de contratá-la, usando uma única cópia compartilhada do modelo
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: O fabricante do sistema ganha poder de curadoria sobre o que qualquer aplicativo pode gerar
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A moderação de conteúdo desce da plataforma de publicação para o sistema operacional, fora do alcance do editor
                sinal: medio
                prazo: 2031
                confianca: media
              - id: e3.1.2
                ordem: 3
                efeito: Jurisdições passam a exigir modelo alternativo instalável no aparelho, como já se exigiu loja e navegador alternativos
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Quem publica mídia perde controle sobre qual versão do modelo roda dentro do produto já entregue
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Reprodutibilidade de saída vira cláusula contratual em produção de mídia comissionada
                sinal: medio
                prazo: 2031
                confianca: baixa
          - id: e3.3
            ordem: 2
            efeito: Uma classe de aplicativos sem servidor nenhum se torna barata de publicar e de manter
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e3.3.1
                ordem: 3
                efeito: A distinção entre software e mídia se estreita, porque o arquivo entregue passa a conter quem o interpreta
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: O navegador vira runtime de inferência em desktop, mas permanece indisponível no celular
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Nasce uma classe de peça interativa publicável como página, sem backend e sem conta
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Preservar uma peça de mídia generativa passa a exigir arquivar o modelo junto com o código
                sinal: medio
                prazo: 2032
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: O custo da IA na web migra para o primeiro acesso, e baixar o modelo vira o novo tempo de carregamento
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: As métricas de experiência web passam a contabilizar o download do modelo, e a régua de página rápida se reescreve
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: O peso do modelo vira dependência de software — baixável, forkável, atacável e sobrevivente ao fabricante
    efeitos:
      - id: e5
        ordem: 1
        efeito: O modelo passa a ser tratado como pacote versionado dentro do projeto, e não como serviço contratado
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A cadeia de suprimentos de modelos vira superfície de ataque de produto de mídia
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Assinatura e procedência de modelo passam a ser exigidas por loja de aplicativos ou por regulador
                sinal: medio
                prazo: 2031
                confianca: media
          - id: e5.2
            ordem: 2
            efeito: Comunidades mantêm vivas derivações de modelos que o fornecedor original descontinuou
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Desligar o serviço deixa de ser instrumento de controle, porque o modelo sobrevive ao seu fabricante
                sinal: medio
                prazo: 2032
                confianca: baixa
              - id: e5.2.2
                ordem: 3
                efeito: A preservação digital ganha um objeto novo, e o peso do modelo entra no acervo como obra
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: A responsabilidade pelo que o modelo diz fica ambígua quando ele roda fora do alcance de quem o publicou
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Reguladores concentram a obrigação em quem integra o modelo no produto, e não em quem o treinou
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Publicar mídia com modelo embarcado passa a exigir declaração de qual modelo e qual versão, como rótulo de composição
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Empresas de mídia adotam o local como forma de não guardar dado nenhum e transferir o risco ao usuário
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Nada sai do aparelho vira alegação de marketing que o usuário comum não tem como verificar
                sinal: medio
                prazo: 2031
                confianca: media
```

### O que o bloco não consegue dizer

**A roda esconde que D1 e D2 puxam em sentidos opostos.** D1 é uma história de autonomia: o modelo
cabe no meu aparelho, logo ninguém me cobra e ninguém me desliga. D2 é uma história de captura: o
modelo cabe no meu aparelho *porque o fabricante do aparelho o pôs lá*, com os filtros dele e a
versão dele. Os efeitos `e1` e `e3` parecem convergir — os dois falam de inferência sem custo — mas
descrevem futuros que competem entre si. Qual vence depende de uma variável que este mapa não sabe
prever: se baixar um modelo próprio continuará sendo tão fácil quanto é hoje, ou se as plataformas
tornarão o modelo do sistema o único caminho tolerado dentro da loja.

**A roda não representa a hibridez, que é o estado provável.** Nenhum efeito diz "o produto roda o
fácil no aparelho e manda o difícil para a nuvem", que é o arranjo que a maioria dos produtos vai
adotar. Ele ficou de fora porque não é ruptura — é a acomodação das duas. Mas é ele que vai
decidir, na prática, quanto de `e1` realmente se realiza.

**A roda achata a geografia.** `e2.1.2` carrega sozinho o recorte brasileiro, e isso é pouco. A
mesma disrupção produz, em parques de aparelho diferentes, efeitos de sinal contrário: onde a rede
falha quinze dias por mês, a IA local é inclusão; onde o aparelho custa menos de mil reais, é
exclusão. As duas coisas são verdadeiras no mesmo país, para pessoas diferentes.

**Os prazos são ordenação, não datas.** Tratar 2029 como ano é erro de leitura. O que a coluna
sustenta é que `e5` vem antes de `e5.1`, que vem antes de `e5.1.1`.

## 6. Sinais fracos e wildcards

### Sinais fracos

**O computador pessoal virando servidor de IA pessoal.** Ferramentas que controlam o agente da
própria máquina a partir do celular, com criptografia de ponta a ponta, apontam para um arranjo que
não é nem nuvem nem dispositivo: é **casa**. Se pegar, o "local" deixa de significar "neste
aparelho" e passa a significar "no meu perímetro" — e boa parte do argumento de limitação de memória
do celular evapora, porque o celular vira tela de uma inferência que roda a dez metros dali. É sinal
fraco porque exige rede doméstica confiável, máquina ligada e uma noção de administração de sistema
que quase ninguém tem.

**O agente pequeno com chamada de ferramentas.** Gemma 4 E2B em menos de 1,5 GB com chamada
estruturada de ferramentas e 128 mil tokens de contexto é, tecnicamente, um agente completo em
memória de celular mediano. O sinal é fraco porque o que se vê em produto ainda é sumarização e
reescrita, não ação autônoma. Se virar, `e1.1` acelera muito.

**A migração silenciosa por cota.** O sinal mais próximo é de processo, não de produto: equipes
escolhendo o modelo local não por privacidade nem por custo, mas porque a cota gratuita da API
prometida não se materializa. Adoção por frustração não aparece em pesquisa de intenção e é péssima
de prever — mas é como muita infraestrutura foi adotada antes.

**O 1 bit chegando ao embedding.** Modelos de embedding de 1 bit publicados em julho de 2026 (1,42×
a 2,28× de aceleração) são sinal fraco de que a busca semântica local — não só a geração — cabe no
aparelho. Isso importa para mídia mais do que parece: significa acervo pessoal pesquisável sem
servidor.

**A NPU como promessa repetidamente adiada.** O bitnet.cpp registra suporte a NPU como "coming
next"; o PR da Qualcomm em llama.cpp está em rascunho; o pedido no Ollama está aberto desde junho de
2024. Um sinal fraco pode ser a *ausência* insistente de algo anunciado — e aqui a ausência é
sistemática.

### Wildcards

**W1 — Um modelo ternário atinge qualidade de fronteira num celular de entrada.** Baixa
probabilidade, impacto alto. Se um modelo de 1,58 bit em poucos gigabytes empatar com o melhor
modelo de nuvem do ano em tarefas de linguagem, D1 deixa de ser gradual e vira degrau: o mercado de
inferência por assinatura perde a razão de existir para a maior parte dos usos de mídia, `e1.2`
acontece em meses e não em anos, e a discussão de controle (D2) passa a ser a única que importa.
**Não é previsão** — a evidência atual mostra paridade com modelos abertos de *tamanho semelhante*,
não com a fronteira, e o próprio relatório se declara em andamento.

**W2 — Um incidente de modelo envenenado em escala de consumo.** Baixa probabilidade, impacto alto.
Um peso popular, baixado por milhões, carregando execução maliciosa e detectado tarde. O estudo de
serialização insegura já descreve a superfície; falta o evento. Se acontecer, `e5.1.1` salta de 2031
para dois anos depois do incidente, lojas passam a exigir assinatura de modelo, e a facilidade de
"baixe e rode" — que é o que torna D3 uma disrupção — é a primeira coisa a ser regulada.

**W3 — Uma plataforma proíbe modelo de terceiro no aparelho.** Baixa probabilidade, impacto alto.
Por argumento de segurança, uma loja de aplicativos passa a barrar apps que embarquem pesos
próprios, obrigando ao modelo do sistema. D1 sobrevive, D3 morre no consumo de massa e sobrevive só
no desktop, e `e3.1` deixa de ser tendência e vira regra.

**W4 — Um modelo local vira prova em processo judicial.** Baixa probabilidade, impacto alto. Se o
conteúdo gerado no aparelho de alguém, offline, for tratado como registro pessoal — diário, e não
publicação —, abre-se a pergunta de `e5.2.1` pelo lado jurídico: um modelo que aprendeu com uma
pessoa é apreensível? É herdável? Nada na evidência atual aponta para isso; é aqui como
possibilidade de fronteira, não como projeção.

## 7. Contra o próprio mapa

### O efeito que é extrapolação linear do presente

**`e1` — custo marginal zero.** É a extrapolação mais confortável e a mais frágil. O custo não some,
muda de bolso: vira bateria, calor, memória, download e vida útil do aparelho. Nenhum desses
aparece na roda com peso próprio, e todos são limites reais — 7,6 tokens/s de decodificação num
Raspberry Pi 5 é um número de demonstração, não de conversa fluida. **Correção aplicada:** mantido
com `confianca: alta` apenas para a afirmação de que o orçamento *muda de natureza* (de chamada para
aparelho), que é o que a evidência sustenta; a leitura "IA fica de graça" está explicitamente
recusada no texto da seção 4.

**`e1.1` — geração contínua.** Assume que, removido o custo, o projeto naturalmente vira contínuo.
Mas a fila e o botão também existem por razões de atenção e de interface, não só de preço. Rebaixado
de `forte` para `medio` na revisão.

### O efeito que assume velocidade de adoção sem caso comparável

**`e3` — o modelo como recurso do sistema, forte já em 2028.** Aqui há um caso comparável, e ele não
ajuda: requisitos como 22 GB de disco livre e 4 GB de VRAM excluem a maior parte do parque instalado,
e as APIs do Chrome não existem em celular. A adoção de um recurso de plataforma que depende de
renovação de hardware historicamente leva de cinco a dez anos, não dois. **Correção aplicada:**
`e3` mantido em `alta` por já estar entregue nos três sistemas, mas `e3.1` e `e3.2` rebaixados para
`confianca: media`, e a prosa da seção 5 passou a dizer que o prazo é ordenação e não data.

**`e2.2` — encurtamento do ciclo de troca.** Supõe que a IA venda aparelho. Câmera vendeu; 3D não
vendeu; 5G vendeu pouco. Não há evidência nas fontes abertas de que capacidade de inferência mova
compra hoje. Mantido em `medio`/`media` por ser plausível, com a ressalva registrada.

### A disrupção que pode simplesmente não se concretizar

**D1 é a candidata.** Se a NPU não chegar aos runtimes populares — e o quadro de agosto de 2026 é
que não chegou em dois anos de pedidos abertos —, a IA local fica presa na faixa de 3 a 4 bilhões de
parâmetros úteis em aparelho comum, com 10 a 20 tokens por segundo, limitada por banda de memória
que não melhora na velocidade da computação. Nesse mundo, o local serve para reescrever notificação,
traduzir e transcrever, e todo o resto continua na nuvem.

**O que sobra do mapa se D1 cair.** Sobra bastante, e é isto que o torna útil: D2 e D3 não dependem
de o modelo local ser bom, só de ele existir e estar embutido. O guardião do sistema operacional
(`e3.1`), a perda de controle de versão (`e3.2`), a cadeia de suprimentos (`e5.1`) e a ambiguidade
de responsabilidade (`e6`) valem igualmente para um modelo medíocre — o caso da BBC aconteceu com um
modelo medíocre. O que morre são `e1.1`, `e1.2` e `e2.2`; o que fica é o poder.

**D3 tem o risco oposto:** não o de não acontecer, mas o de ser revertido. W3 é exatamente isso.

### O viés que entrou aqui

**Viés de fonte, que é o mais grave.** Quase todos os números de desempenho e energia vêm de quem
vende o runtime ou o modelo: Microsoft sobre bitnet.cpp, Google sobre Gemma 4, Apple sobre AFM 3.
Não há, nas fontes abertas para este documento, uma medição independente e comparável dos três. A
única fonte estruturalmente adversarial usada — a auditoria de NPU de agosto de 2026 — é um blog
técnico assinado, não um estudo revisado, e foi ela que produziu o achado mais desconfortável do
mapa. Isso deveria ser invertido, e não foi. **É a limitação número um deste documento.**

**Viés de tema.** O recorte foi entregue pela disciplina com uma disrupção-raiz já enunciada ("a
inteligência sai da nuvem"). Aceitar esse enunciado e depois procurar evidência para ele é confirmar,
não investigar. A mitigação foi buscar deliberadamente a evidência contrária (NPU, WebGPU, requisitos
do Chrome, parque brasileiro) — e ela apareceu em volume suficiente para que a confiança geral do
mapa ficasse em `media` e não em `alta`. Mas a pergunta "e se a nuvem simplesmente ganhar por
economia de escala?" não foi investigada com o mesmo empenho, porque não havia fonte à mão.

**Viés de fonte contemporânea.** Metade das buscas devolveu conteúdo de SEO datado de 2026 repetindo
os mesmos números de fabricante. Foram descartadas por não serem fonte, mas a sua abundância
provavelmente enviesou o que os buscadores mostraram primeiro.

**Viés de horizonte.** 2031 é curto para efeitos de terceira ordem normativos (`e3.1.2`, `e5.2.2`,
`e6.1.1`), que estão datados de 2032 e 2033 — isto é, além do horizonte declarado. Isso é honesto
quanto ao prazo e desonesto quanto ao escopo: são efeitos que o mapa afirma sem se comprometer com a
janela. Registrado, não corrigido.

## 8. O que a máquina errou

**1. Inventou uma pesquisa brasileira sob medida.** Ao pedir dados sobre o parque de celulares no
Brasil, a primeira resposta trouxe um resumo genérico de "recursos importantes em 2026" — 5G, NFC,
Wi-Fi — vindo de guia de compra de site de tecnologia, apresentado com a mesma naturalidade de um
dado da Anatel. O sinal de desconfiança foi o mais simples: **nenhum número tinha denominador.**
"5G deixou de ser diferencial" não é medida de nada. Só ao abrir a nota do Idec sobre a Pesquisa de
Conectividade Significativa apareceram números com base — 51%, 47,3%, 35%, 11,6% — e, junto com
eles, a data que muda a leitura: campo entre agosto de 2023 e junho de 2024, publicação em setembro
de 2025. Ou seja, o dado que este mapa usa para falar do Brasil de 2026 descreve o Brasil de 2024.
Isso está declarado na seção 3.8 e é uma limitação real.

**2. Confundiu formato com ecossistema.** Numa das buscas, a máquina apresentou "204.401 modelos
GGUF" e, duas linhas adiante, explicou que Transformers.js usa ONNX e é incompatível com GGUF —
sem notar que o número que acabara de citar, portanto, não descreve o que roda no navegador. A
desconfiança veio da precisão do número: 204.401 é preciso demais para vir de memória. Ao abrir a
página de filtro do Hugging Face, o valor exibido era **204.655** — diferente, porque é um contador
vivo. O número entrou no documento com a data da consulta e com a ressalva de que GGUF é o
ecossistema de desktop, não o do navegador.

**3. Reportou paridade de fronteira onde o artigo diz outra coisa.** O resumo automático do BitNet
b1.58 2B4T chegou como "desempenho equivalente a LLMs de precisão total". A frase do próprio resumo
é "on par with leading open-weight, full-precision LLMs **of similar size**" — e o artigo está
marcado como *work in progress*. A diferença entre "empata com os grandes" e "empata com os abertos
do mesmo tamanho, em trabalho ainda em andamento" é toda a diferença entre o wildcard W1 e o
presente. Foi corrigido na seção 3.1 e é a razão de W1 ser wildcard e não efeito.

**4. Deu a NPU como resolvida.** As primeiras respostas sobre Snapdragon e IA local descreviam NPUs,
TOPS e aceleração como se fossem o caminho em uso. Foi preciso perguntar especificamente por
"reality check" para aparecer o quadro medido — Ollama sem backend, PR em rascunho, LM Studio sem
suporte, a documentação da própria Qualcomm oferecendo só binários de CPU e GPU. **A máquina repetiu
o material de marketing do fabricante como se fosse estado da prática**, e o erro só apareceu porque
a busca foi refeita com uma palavra adversarial. Isso é o achado metodológico deste trabalho: a
pergunta neutra devolve o folheto.

**5. Duas fontes citadas não abriram.** CNBC e Axios, sobre o caso Apple/BBC, devolveram HTTP 403.
Não entraram na lista de fontes. O fato foi mantido porque uma terceira fonte, que abriu, sustenta
os mesmos detalhes — mas a tentação de citar um link que a busca mostrou e a máquina resumiu, sem
que ele tenha respondido, é exatamente o mecanismo que produz bibliografia falsa.

**6. Fez plural de um caso.** Ao descrever o episódio dos resumos de notificação, a saída inicial
falava em "erros recorrentes do Apple Intelligence". As fontes descrevem quatro manchetes erradas em
um recurso específico, suspenso em uma categoria específica, em janeiro de 2025. Um caso com quatro
exemplos não é um padrão; é um caso. O texto foi reescrito para dizer o que aconteceu.

## 9. Três cenários para 2031

**Provável.** A inferência local virou infraestrutura invisível e chata, que é o destino de toda
tecnologia que dá certo. Todo sistema operacional entrega um modelo, e ninguém mais escolhe qual:
reescrever uma mensagem, resumir uma notificação, transcrever um áudio e traduzir uma legenda
acontecem no aparelho, de graça, e ninguém chama isso de IA. O que é difícil continua na nuvem, e a
arquitetura que venceu é híbrida — o produto decide em tempo de execução onde rodar, e a decisão é
invisível para quem usa. As NPUs finalmente entraram nos runtimes comuns, mas tarde e por caminhos
incompatíveis, então portar entre Qualcomm, Apple e Intel dá o mesmo trabalho que portar entre
consoles nos anos 1990. O navegador roda modelo em desktop e não roda em celular, e por isso quase
ninguém publica peça de mídia que dependa disso. No Brasil, a IA local chegou primeiro aos aparelhos
caros, e a diferença entre o que um celular de dois mil reais e um de novecentos conseguem fazer
ficou maior do que era em 2026 — não menor. E existem agora dois tipos de produto no mercado: os que
explicam onde a inferência acontece e os que não explicam, sendo os segundos a maioria.

**Desejável.** Chegamos a 2031 com a inferência local funcionando como uma camada aberta, e não como
um privilégio de plataforma. Isso exigiu três coisas concretas, e todas foram decisões e não
acidentes. Primeiro, **procedência de modelo virou norma antes do incidente**: pesos assinados,
inventário declarado, varredura obrigatória nas lojas — feito por escolha, não em pânico depois de
um envenenamento em massa. Segundo, **o direito de instalar outro modelo foi preservado**, seja por
regulação análoga à que abriu lojas e navegadores, seja por pressão de mercado: o modelo do sistema é
o padrão, nunca o único, e por isso `e3.1` não virou censura. Terceiro, e é o que mais importa para
mídia, **"funciona sem rede" entrou na régua de acessibilidade**: uma peça que exige conexão passou a
ser tratada como uma que exige mouse — utilizável por muitos, excludente para alguns. No Brasil, isso
se traduziu no único uso em que a IA local é inequivocamente inclusão: a pessoa que fica quinze dias
sem dados móveis por mês continua tendo tradução, transcrição e leitura assistida funcionando. O
preço de chegar aqui foi lentidão deliberada — padrões antes de produtos.

**Indesejável.** A inferência local virou o argumento perfeito para transferir risco. Empresas de
mídia descobriram que "processamos tudo no seu aparelho" resolve conformidade sem resolver nada:
não guardam dado, não respondem por saída, não precisam auditar, e o usuário não tem como verificar
nenhuma dessas afirmações — `e6.2.1`. Ao mesmo tempo, os filtros do modelo do sistema viraram a
camada de moderação de fato de toda a mídia digital, decidida por três empresas, sem processo de
apelação e sem visibilidade para o editor, que descobre que sua peça foi recusada sem saber por
quê. Um modelo popular envenenado circulou por meses antes de ser detectado, e a reação foi fechar o
que estava aberto: lojas passaram a proibir pesos de terceiros, e a IA local de verdade recuou para o
desktop de quem sabe compilar. E a promessa de democratização terminou invertida — o aparelho virou o
teto, o teto virou dinheiro, e a diferença entre quem tem e quem não tem inteligência disponível
passou a ser hardware, que é mais difícil de subsidiar do que acesso. **O sinal precoce deste
cenário é linguístico e já dá para vigiar hoje:** o dia em que "roda no seu dispositivo" aparecer na
seção de *privacidade* de um termo de uso em vez de na seção de *funcionalidades*, a transferência
de risco já aconteceu.

## 10. O experimento

### O que é

**Sala sem nuvem** — uma peça de mídia interativa que roda inteiramente na aba do navegador, por
WebGPU, e que **mostra o próprio custo enquanto funciona**. Na tela, dois planos: na frente, a peça
(um diálogo com um personagem, uma legenda gerada ao vivo, um texto que se reescreve conforme o
leitor); atrás, sempre visível, o **painel de orçamento** — megabytes baixados, tempo até a primeira
resposta, tokens por segundo, memória de GPU ocupada, queda percentual de bateria por minuto e um
marcador de quando o aparelho começou a limitar por temperatura.

A peça é a mesma para todo mundo; o painel é diferente para cada aparelho. É esse o ponto.

Três perfis carregáveis, para forçar a comparação: **generoso** (modelo maior, contexto longo),
**médio** e **mínimo** (o menor modelo que ainda sustenta a peça). O visitante pode trocar de perfil
durante o uso e ver a peça degradar — ou travar.

### Que pergunta sobre o futuro ele ajuda a responder

A pergunta de `e2` e `e2.1`: **o aparelho vira o teto da experiência?** E, junto com ela, a que
decide se `e4` acontece: quanto custa, em atenção e em bateria, a primeira visita a uma página que
precisa baixar um modelo antes de existir?

O mapa afirma que o projeto de interface vai ter de voltar a degradar graciosamente entre classes de
aparelho, como na virada do responsivo. Essa é uma hipótese testável numa tarde, com a turma na
sala, sem pedir permissão a ninguém: é só medir a mesma peça em quinze aparelhos diferentes.

### Que tecnologia emergente ele usa, e por que não dá com tecnologia madura

Usa **WebGPU** e um runtime de inferência em navegador (WebLLM ou Transformers.js), com um modelo
quantizado pequeno servido como arquivo estático.

Não dá para fazer com tecnologia madura porque **a tecnologia madura esconde exatamente o que o
experimento quer medir**. Uma versão por API de nuvem tem o mesmo desempenho em todos os aparelhos —
o custo está no servidor de alguém e é invisível. O painel de orçamento ficaria vazio, e a peça
funcionaria igualmente bem no melhor e no pior celular da sala. A assimetria entre aparelhos só
aparece quando a conta é paga pelo aparelho. É o caso raro em que a tecnologia emergente não é usada
por ser melhor, e sim por ser **a única que torna o fenômeno observável**.

### O que a turma vai fazer quando testar isso em sala

1. **Censo de aparelhos.** Cada pessoa abre a peça no que tem na mão. Anota-se marca, ano, navegador,
   sistema e se o WebGPU existe ali. A primeira coluna da tabela é binária e já responde muito: em
   quantos aparelhos a peça sequer **abriu**?
2. **Corrida do primeiro token.** Todo mundo carrega ao mesmo tempo, na mesma rede. Mede-se o tempo
   até a primeira resposta. Espera-se dispersão grande e bimodal — desktop de um lado, celular do
   outro, e um grupo que não chega.
3. **Degradação dirigida.** Quem conseguiu rodar no perfil generoso desce para o médio e o mínimo e
   descreve, em uma frase, **o que se perdeu na peça** — não no benchmark. É aqui que a discussão
   deixa de ser de engenharia e vira de projeto.
4. **Prova do avião.** Desliga-se o Wi-Fi e os dados no meio do uso. O que continua funcionando? Esta
   é a medição do único argumento pró-IA-local que o Brasil torna urgente: os 35% que passam sete dias
   ou mais sem internet móvel por mês.
5. **Teste de bateria.** Um aparelho fica dez minutos gerando continuamente. Anota-se a queda de
   bateria e a temperatura. Este é o custo que `e1` diz ter desaparecido.
6. **Fechamento.** Cada pessoa escreve uma frase respondendo: *"para quem eu não posso publicar esta
   peça?"* As respostas viram a lista de requisitos de acessibilidade de `e1.1.2`.

### O que seria um resultado que me faria mudar de ideia

**Mudaria o mapa na direção otimista** se a peça abrir e rodar de forma utilizável em mais de 70% dos
aparelhos da sala, incluindo celulares intermediários, com primeiro token abaixo de dez segundos numa
rede comum. Isso significaria que `e4` está subestimado e que `e2.1` — a necessidade de degradar
entre classes de aparelho — é problema menor do que este documento afirma. Eu elevaria `e4` de
`medio` para `forte` e reescreveria `e2.1.2`.

**Mudaria na direção pessimista** — e esta é a que eu espero — se a taxa de aparelhos em que a peça
simplesmente **não abre** ficar acima de 50%, concentrada em celular. Nesse caso `e4` deve cair para
`confianca: baixa` e o navegador deixa de ser um caminho sério de IA local para mídia de consumo até
que Safari e Firefox mudem de posição. A peça seria uma demonstração de desktop, não uma peça de web.

**Mudaria a raiz, e não só um efeito**, se o custo de bateria for tão alto que o uso contínuo seja
inviável mesmo onde a peça roda bem. Aí `e1` está errado no que tem de mais central: o custo marginal
não caiu a zero, ele mudou de moeda — e a moeda nova é mais escassa que a antiga, porque dinheiro se
recarrega e paciência de bateria, num aparelho de mil reais, não.

## 11. Fontes

Todas as fontes abaixo foram abertas durante a produção deste documento, entre 17 e 18 de setembro de
2026. Fontes que apareceram em busca mas não responderam, ou que não foram abertas, estão listadas na
seção 12 e **não** são citadas no corpo do texto.

1. **Microsoft — repositório oficial do bitnet.cpp** — `https://github.com/microsoft/BitNet`
   Sustenta: os números de aceleração (1,37×–5,07× em ARM; 2,37×–6,17× em x86) e de energia
   (55,4%–70,0%; 71,9%–82,2%), a lista de modelos suportados, o estado do suporte a NPU ("coming
   next") e as datas das atualizações de 2026. Confiabilidade: alta como registro primário do que o
   projeto entrega; **baixa como medição independente** — são números do próprio fabricante do
   runtime, sem replicação de terceiro nas fontes deste documento.

2. **Ma, Wang, Huang et al. — BitNet b1.58 2B4T Technical Report** — `https://arxiv.org/abs/2504.12285`
   Sustenta: 2 bilhões de parâmetros, 4 trilhões de tokens de treino, a formulação exata da alegação
   de paridade ("of similar size") e o estado de *work in progress*. Confiabilidade: alta para a
   descrição do modelo; é *preprint* não revisado por pares e de autoria dos próprios criadores, o
   que pesa contra a alegação de desempenho.

3. **Google — Gemini Nano, documentação para desenvolvedores Android** —
   `https://developer.android.com/ai/gemini-nano`
   Sustenta: o papel do AICore (distribuição, atualização, isolamento de requisições, acesso indireto
   à internet via Private Compute Services), a lista das capacidades das ML Kit GenAI APIs e a
   partilha de uma única cópia do modelo entre aplicativos. Confiabilidade: alta como documentação
   primária de plataforma; não é fonte neutra sobre limitações.

4. **WebLLM: A High-Performance In-Browser LLM Inference Engine** —
   `https://arxiv.org/html/2412.15803v2`
   Sustenta: a arquitetura em três componentes e os números de retenção de vazão contra o nativo
   (41,1 vs 57,7 tok/s; 71,1 vs 89,3 tok/s num M3 Max). Confiabilidade: alta para a medição, que é
   detalhada e reproduzível; a comparação é feita pelos autores do próprio sistema, e num único
   aparelho de alto padrão.

5. **Google Chrome — APIs de IA embutida, visão geral** — `https://developer.chrome.com/docs/ai/built-in`
   Sustenta: a lista das sete APIs e o estado de *origin trial*. Confiabilidade: alta; documentação
   primária.

6. **Google Chrome — requisitos de hardware das APIs embutidas** —
   `https://developer.chrome.com/docs/ai/get-started`
   Sustenta: 22 GB de espaço livre, remoção do modelo abaixo de 10 GB, mais de 4 GB de VRAM, mínimo
   de 16 GB de RAM e 4 núcleos, os sistemas suportados e a ausência em Android, iOS e ChromeOS comum.
   Confiabilidade: alta; é a fonte mais importante deste documento contra a tese do navegador como
   caminho universal, e vem do próprio fabricante.

7. **Apple Machine Learning Research — Introducing the Third Generation of Apple's Foundation Models**
   — `https://machinelearning.apple.com/research/introducing-third-generation-of-apple-foundation-models`
   Sustenta: AFM 3 Core (3B denso) e AFM 3 Core Advanced (20B esparso, ativando 1–4B), quantização
   por QAT, a lista de idiomas incluindo português, e a ressalva da própria Apple de que as avaliações
   refletem modelos em desenvolvimento. Confiabilidade: alta para as especificações; as preferências
   de usuário relatadas (44,7% a 17,6%) são medição interna.

8. **Umapathy A. — NPU Reality Check: What Your Local AI Stack Actually Uses (18/08/2026)** —
   `https://www.buildmvpfast.com/blog/npu-local-ai-development-reality-check-2026`
   Sustenta: Ollama sem backend de NPU com pedido aberto desde junho de 2024; PR Hexagon em rascunho
   no llama.cpp; LM Studio sem suporte; vazões de ~10 tok/s (Snapdragon X Elite) e 18–20 tok/s (Intel
   Lunar Lake) em 7–8B; banda de memória de 135 / 273 / 1.008 GB/s; limite prático de 3–4B na
   ferramenta comum. Confiabilidade: **média** — é blog técnico assinado, com data e tabela por
   runtime, não é fonte revisada. Foi mantido porque é a única fonte adversarial encontrada e porque
   suas afirmações verificáveis batem com a fonte 9. É a fonte mais influente e a mais frágil deste
   mapa, e a seção 7 diz isso.

9. **Qualcomm — Run llama.cpp, Windows on Snapdragon** —
   `https://docs.qualcomm.com/doc/80-62010-1/topic/run-llama-cpp.html`
   Sustenta: a própria Qualcomm oferece binários de CPU e de GPU (OpenCL/Adreno) e **não** de NPU;
   requisito de 16 GB de RAM com mais de 7 GB livres para Llama-3-8B Q4_K_M. Confiabilidade: alta;
   documentação primária do fabricante do chip, e corrobora a fonte 8 no ponto decisivo.

10. **Can I Use — WebGPU** — `https://caniuse.com/webgpu`
    Sustenta: 87,35% de suporte global (85,72% + 1,63%), Firefox sem suporte oficial até a versão 159,
    Safari parcial a partir da 26.0, Chrome Android a partir da 152. Confiabilidade: alta; é a
    referência de fato para suporte de navegador, com metodologia pública.

11. **Hugging Face — modelos compatíveis com a biblioteca GGUF** —
    `https://huggingface.co/models?library=gguf`
    Sustenta: 204.655 modelos listados na consulta de 18/09/2026. Confiabilidade: alta como contagem
    do próprio índice; é contador vivo, então o número tem validade datada.

12. **MLC AI — repositório do WebLLM** — `https://github.com/mlc-ai/web-llm`
    Sustenta: as famílias de modelos suportadas (Llama, Phi, Gemma, Mistral, Qwen), a dependência de
    WebGPU e WebAssembly, *function calling* ainda em desenvolvimento, e a **ausência** de requisitos
    de memória documentados. Confiabilidade: alta como registro do projeto; a ausência é ela própria
    um achado.

13. **Google AI Edge — repositório do LiteRT-LM** — `https://github.com/google-ai-edge/LiteRT-LM`
    Sustenta: runtime de borda com alvos em Android, iOS, macOS, web, desktop e IoT; modelos Gemma,
    Llama, Phi-4 e Qwen; versão 0.16.0 com APIs Swift e JavaScript em *early preview*.
    Confiabilidade: alta; o número de versão e o estado de prévia sustentam a classificação
    "emergente".

14. **Google Developers Blog — Bring state-of-the-art agentic skills to the edge with Gemma 4
    (02/04/2026)** —
    `https://developers.googleblog.com/bring-state-of-the-art-agentic-skills-to-the-edge-with-gemma-4/`
    Sustenta: E2B em menos de 1,5 GB de memória, contexto de 128 mil tokens, chamada de ferramentas,
    licença Apache 2.0, mais de 140 idiomas, e as vazões em Raspberry Pi 5 (133 / 7,6 tok/s) e
    Dragonwing IQ8 (3.700 / 31 tok/s). Confiabilidade: alta para as especificações; é anúncio de
    produto, e os números de desempenho são do fabricante em hardware escolhido por ele.

15. **Silicon UK — Apple Suspends AI-Generated News Notifications After Errors** —
    `https://www.silicon.co.uk/cloud/ai/apple-suspends-ai-generated-news-notifications-after-errors-596038`
    Sustenta: a suspensão dos resumos para a categoria de notícias e entretenimento em janeiro de
    2025, a reclamação da BBC de dezembro de 2024, os quatro exemplos de manchete falsa, e as
    manifestações do New York Times, da Repórteres Sem Fronteiras e do sindicato de jornalistas
    britânico. Confiabilidade: média-alta; jornalismo especializado citando o Guardian e declarações
    públicas. Foi usada porque CNBC e Axios, que cobriram o mesmo fato, não abriram.

16. **Idec — Anatel divulga Pesquisa de Conectividade Significativa (02/09/2025)** —
    `https://idec.org.br/release/anatel-divulga-pesquisa-de-conectividade-significativa-com-foco-em-dispositivos-habilidades`
    Sustenta: 51% de aparelhos abaixo de mil reais entre quem ganha até um salário mínimo; 47,3%
    apontando custo como motivo para não ter computador; 35% com sete dias ou mais sem internet móvel
    em 30 dias; 11,6% com mais de quinze dias contra 2,2% acima de três salários; nota média
    autoatribuída de 8,2 em habilidades digitais. Confiabilidade: alta quanto à origem (pesquisa da
    agência reguladora, divulgada por entidade de defesa do consumidor); **desatualizada** — campo
    entre agosto de 2023 e junho de 2024.

17. **Linux Foundation Europe — What Open Source Developers Need to Know about the EU AI Act** —
    `https://linuxfoundation.eu/newsroom/ai-act-explainer`
    Sustenta: a isenção de documentação técnica e informação a integradores para licenças livres
    (artigos 53.1a-b), a não isenção quanto a direito autoral e dados de treino, a ausência de
    isenção para modelos de risco sistêmico, a isenção do artigo 25.4 para integradores, e as datas
    (02/08/2025 para GPAI; 02/08/2026 para alto risco). Confiabilidade: alta como leitura organizada
    por entidade com interesse declarado em open source — interesse que deve ser considerado.

18. **Casey, Santos e Mirakhorli — A Large-Scale Exploit Instrumentation Study of AI/ML Supply Chain
    Attacks in Hugging Face Models** — `https://arxiv.org/abs/2410.04490`
    Sustenta: serialização insegura como vetor de injeção de objeto, a presença ampla de modelos
    potencialmente vulneráveis no Hugging Face, e a limitação da detecção da própria plataforma.
    Confiabilidade: alta para o método e o achado qualitativo; é de outubro de 2024, e o ecossistema
    mudou desde então.

## 12. Anexo — o levantamento bruto

### 12.1 A entrevista

A skill exige entrevista antes de pesquisar, com oito campos confirmados e repetição dos valores
para confirmação explícita. **Esta rodada foi executada sem interlocutor humano disponível**: os
valores chegaram por escrito no despacho da tarefa, com instrução expressa de não fazer perguntas de
volta e de assumir e declarar o que não estivesse definido. O contrato da skill foi cumprido no
conteúdo (todos os campos estão preenchidos) e não no procedimento (não houve rodada de perguntas
nem confirmação recebida). Isto é declarado aqui, e não escondido, porque afeta a qualidade do
recorte: um interlocutor teria podido recusar premissas que aqui foram aceitas.

| Campo | Valor confirmado | Origem |
|---|---|---|
| tema | IA local: no dispositivo e no navegador | fornecido |
| recorte | a inferência no aparelho do usuário final; exclui dado e identidade local-first (tema 17), voz (13) e navegador 3D (15) | fornecido + descrição da disciplina |
| horizonte | 2031 | fornecido |
| público | quem projeta mídia e interação | fornecido |
| região | global, com nota sobre o Brasil | fornecido |
| objetivo | mapa de futuro com disrupções-raiz e três ordens de efeito, para discussão em aula e para derivar um experimento | fornecido |
| exclusões | o que já é comum em produto de massa (régua da disciplina); ideias genéricas que serviriam a qualquer tema; nenhuma outra | fornecido |
| viés desejado | neutro / equilibrado | fornecido |
| profundidade | três ordens | fornecido |
| modo | a partir de uma inovação, não de um setor | fornecido |
| critério de mudança de ideia | evidência de adoção além da maioria inicial (Rogers), ou de que a tecnologia só melhora o que existe sem romper nada | fornecido |

**Assunções declaradas por falta de interlocutor:**
- "Quem projeta mídia e interação" foi lido como incluindo desenvolvedor de produto, designer de
  interação, editor e artista — não como pesquisador de ML.
- "Nota sobre o Brasil" foi lida como um recorte de acesso e parque de aparelhos, não de regulação;
  a regulação brasileira entrou apenas como contexto de busca e não foi usada no corpo por não ter
  fonte primária aberta.
- "Confiança do próprio mapa" foi fixada em `media` por decisão deste agente, com base na assimetria
  entre evidência de fabricante e evidência independente.

### 12.2 Consultas realizadas

Buscas (WebSearch):
1. `BitNet 1-bit LLM microsoft bitnet.cpp inference CPU 2026`
2. `Gemini Nano on-device Android AICore ML Kit GenAI API 2026`
3. `WebGPU inference browser WebLLM Chrome built-in Prompt API window.ai 2026 status`
4. `Apple Foundation Models framework on-device 3 billion parameters WWDC developer access limits`
5. `Ollama llama.cpp local LLM adoption 2026 r/LocalLLaMA NPU Qualcomm Snapdragon inference`
6. `Brasil smartphones perfil parque celular RAM entrada 2026 Anatel conectividade dados móveis`
7. `EU AI Act open source models on-device deployer obligations 2026 liability who is provider`
8. `Apple Intelligence notification summaries BBC complaint paused news summaries error`
9. `transformers.js WebGPU Hugging Face in-browser models 2026 number of GGUF models`
10. `"local-first" AI app business model subscription collapse on-device inference free after download 2026 analysis`
11. `Google AI Edge Gallery LiteRT-LM on-device Android app 2026 Gemma 3n`
12. `malicious model files security GGUF pickle supply chain Hugging Face 2026 scanning`
13. `LGPD ANPD processamento local no dispositivo IA privacidade 2026 Brasil PL 2338`

Páginas efetivamente abertas (WebFetch): as dezoito da seção 11.

Páginas que retornaram HTTP 403 e por isso **não** entraram: `cnbc.com` (Apple desativa resumos),
`axios.com` (mesma cobertura), `socket.dev` (varredura experimental de malware no Hugging Face — o
que teria dado números de formatos varridos, incluindo GGUF e Llamafile, e a estatística de arquivos
não sinalizados).

### 12.3 Fontes descartadas e por quê

- **Blogs de SEO datados de 2026** sobre "on-device AI news", "local vs cloud AI 2026", "the great
  escape", "WebGPU 2026", "browser-native agents guide 2026": repetem números de fabricante sem
  atribuição, sem autor e sem método. Nenhum entrou. Eram a maioria dos resultados das buscas 3, 10 e
  11 — o que é, por si, uma observação sobre o campo: o tema está saturado de conteúdo derivado.
- **Guias de compra de celular brasileiros** (busca 6): não trazem denominador nem amostra. A
  primeira resposta da máquina usou um deles como se fosse dado de mercado; ver seção 8, item 1.
- **Consultorias de conformidade brasileiras** (busca 13, sobre ANPD/LGPD/PL 2338): material
  promocional de escritório, com afirmações fortes ("zero risco LGPD by design") e sem fonte
  primária. A regulação brasileira ficou **fora** do corpo do documento por não ter sido possível
  abrir fonte primária — é uma lacuna conhecida deste mapa, e o lugar óbvio para ampliá-lo.
- **Notícias sobre WWDC 2026 em dev.to e agregadores** afirmando que a Apple abriu o Foundation
  Models framework a qualquer provedor de LLM: alegação relevante para D2 e que mudaria `e3.1`, mas
  não foi possível confirmá-la em fonte primária da Apple dentro do tempo desta rodada. **Não foi
  usada.** É a verificação pendente mais importante deste documento: se for verdade, o poder de
  curadoria do fabricante (`e3.1`) é bem menor do que o mapa afirma.
- **Wikipedia (Ollama, GGUF, Telecommunications in Brazil)**: apareceram nas buscas, não foram
  abertas, não foram citadas.

### 12.4 Separação entre fato, inferência e hipótese

A skill exige que toda afirmação seja separada em três camadas. A tabela abaixo faz isso para os
pontos que sustentam o mapa.

**Fatos observados e apoiados por fonte aberta:**
- bitnet.cpp publica 1,37×–5,07× (ARM) e 2,37×–6,17× (x86), com 55,4%–70,0% e 71,9%–82,2% de
  redução de energia. [1]
- BitNet b1.58 2B4T: 2B parâmetros, 4T tokens, paridade alegada com abertos **de tamanho similar**,
  *work in progress*. [2]
- AICore distribui e atualiza o Gemini Nano; uma cópia é compartilhada entre apps. [3]
- WebLLM retém 71,2% e 79,6% da vazão nativa nos dois modelos medidos num M3 Max. [4]
- Chrome exige 22 GB livres, >4 GB VRAM, 16 GB RAM, 4 núcleos; não funciona em Android nem iOS. [6]
- AFM 3 Core Advanced tem 20B com ativação de 1–4B. [7]
- Ollama, llama.cpp e LM Studio não usam NPU; Qualcomm distribui binários de CPU e GPU. [8][9]
- WebGPU em 87,35%; Firefox sem suporte oficial até a 159. [10]
- 204.655 modelos GGUF listados em 18/09/2026. [11]
- Gemma 4 E2B em <1,5 GB, 128K de contexto, 7,6 tok/s de decodificação num Raspberry Pi 5. [14]
- Apple suspendeu resumos de notícias em jan/2025 após reclamação da BBC de dez/2024. [15]
- 51% dos que ganham até 1 salário mínimo têm aparelho abaixo de mil reais; 35% ficaram 7+ dias sem
  internet móvel em 30 dias. [16]
- AI Act: isenção parcial para licença livre; alto risco a partir de 02/08/2026. [17]
- Serialização insegura é vetor real; a detecção da plataforma é parcial. [18]

**Inferências causais argumentadas (não são fato, e o argumento está no texto):**
- Que a convergência de quantização-no-treino + esparsidade + runtime de produção é o que explica
  "por que agora" em D1 (seção 4). O argumento é de coincidência temporal de três linhas
  independentes; não há fonte que faça essa síntese.
- Que a partilha de uma cópia única do modelo pelo sistema transfere poder de curadoria ao
  fabricante (`e3.1`). A inferência é estrutural — quem controla a única cópia controla a saída — e é
  corroborada, mas não provada, pelo caso [15].
- Que 204.655 pesos distribuíveis fazem do modelo uma dependência de software com os problemas de
  cadeia de suprimentos conhecidos (D3). A analogia com pacotes de software é forte mas é analogia.
- Que a intermitência de conexão no Brasil favorece IA local **e** o preço do aparelho a desfavorece,
  ao mesmo tempo e para as mesmas pessoas (seção 3.8).

**Hipóteses prospectivas (toda a seção 5, com confiança graduada):**
- Toda a roda. Nenhum efeito é fato. Os de terceira ordem, em particular, são hipótese com confiança
  `baixa` por construção — e isso é a resposta esperada, não uma falha.

**Regra respeitada:** evidência de que uma ferramenta **existe** não foi convertida em evidência de
que ela **funciona em escala**. É por isso que o Gemma 4 E2B aparece como "cabe na memória" e não
como "está em uso"; e é por isso que LiteRT-LM, com APIs em *early preview*, foi classificado como
emergente e não como infraestrutura.

### 12.5 Efeitos gerados e depois removidos

A primeira rodada produziu 22 efeitos de segunda ordem e 24 de terceira. Foram removidos:

- **"A educação se reorganiza em torno de IA local"** — removido por ser genérico: serviria
  identicamente a qualquer um dos dezenove temas da disciplina, que é exatamente a exclusão pedida no
  recorte.
- **"O emprego de engenheiro de prompt desaparece"** — removido: não deriva desta disrupção, deriva
  de qualquer melhora de modelo.
- **"A nuvem deixa de ser negócio"** — removido por ser falso na direção afirmada. A pergunta de
  primeira ordem da disciplina ("o que acontece com o negócio de nuvem?") foi respondida, mas de
  forma mais modesta e defensável, em `e1.2`: a cobrança migra de inferência para sincronização,
  contexto e garantia. Treinar continua na nuvem; o que se desloca é a inferência barata.
- **"Modelos locais aprendem com o usuário e viram bem pessoal herdável"** — removido da roda por
  falta de qualquer sinal observável: o ajuste fino contínuo no aparelho não aparece em nenhuma das
  dezoito fontes. A pergunta de terceira ordem da disciplina é boa, mas hoje é **hipótese sem
  sinal**. Foi rebaixada a wildcard (W4), que é o lugar honesto dela.
- **"NPUs destravam agentes multimodais contínuos no celular até 2029"** — removido como efeito e
  rebaixado a sinal fraco, por contradição direta com [8] e [9]. Era o efeito mais atraente do
  rascunho e o menos sustentado.
- **"Peças de mídia passam a ser distribuídas com o modelo embutido no pacote"** — fundido em
  `e3.3.1` e `e4.1.1`, que dizem a mesma coisa por dois caminhos (publicação e preservação).
- **Uma quarta disrupção-raiz, "a NPU como nova unidade de mídia"** — descartada inteira. Não há
  ruptura entregue; há promessa adiada há dois anos. Virou W-adjacente e sinal fraco.

**Cadeias interrompidas por falta de evidência,** conforme a skill exige registrar:
- `e1.2.1` (valor migra para o acervo privado) **não tem terceira ordem**. A continuação natural
  seria sobre mercados de dados pessoais, e isso é o tema 17, não este.
- `e3.2.1` (reprodutibilidade contratual) não foi ramificada: não há caso, contrato ou norma que
  sustente o passo seguinte.
- `e4.2.1` (métricas web incorporam o download) não foi ramificada por prudência — depende de uma
  decisão de um consórcio, e prever comitê é pior do que prever tecnologia.

### 12.6 Efeitos cuja confiança foi rebaixada na contestação

| Efeito | Antes | Depois | Motivo |
|---|---|---|---|
| `e1.1` | sinal forte | sinal medio | fila e botão também existem por razões de atenção, não só de custo |
| `e3.1` | confianca alta | confianca media | depende de renovação de parque; e a possível abertura do framework da Apple a terceiros (não confirmada) contradiria |
| `e3.2` | confianca alta | confianca media | idem |
| `e4` | sinal forte | sinal medio | ausência em mobile e Firefox fora reduzem o alcance |
| `e6` | confianca alta | confianca media | a atribuição regulatória ainda não foi testada em caso concreto |
| `e2.2.1` | confianca media | confianca baixa | não há evidência de que capacidade de inferência mova compra |

### 12.7 Limitações declaradas desta rodada

1. **Assimetria de fonte.** Quinze das dezoito fontes são do fabricante do que descrevem, ou dos
   autores do sistema que medem. A única fonte estruturalmente adversarial é um blog técnico. Este é
   o defeito central do documento.
2. **Sem medição própria.** Nada foi verificado em hardware. Todo número de desempenho é relatado.
   O experimento da seção 10 existe precisamente para começar a corrigir isso.
3. **Dado brasileiro defasado.** A pesquisa da Anatel tem campo de 2023–2024 e é usada para falar de
   2026. O sentido geral (aparelho barato, conexão intermitente) é provavelmente estável; os
   percentuais, não.
4. **Regulação brasileira ausente do corpo.** Não foi possível abrir fonte primária sobre ANPD, LGPD
   e PL 2338 aplicados a processamento local. Lacuna conhecida.
5. **Verificação pendente sobre a Apple.** A alegação de que o Foundation Models framework teria sido
   aberto a provedores de LLM de terceiros em 2026 não foi confirmada e não foi usada. Se for
   verdadeira, `e3.1` e `e3.1.2` precisam ser reescritos.
6. **Sem evidência quantitativa de adoção.** O critério de mudança de ideia fornecido no recorte —
   "adoção já passou da maioria inicial (Rogers)" — **não pôde ser testado**: nenhuma das fontes
   abertas traz percentual de usuários ou de aplicativos usando inferência local. O que existe são
   proxies fracos (500 mil downloads do Google AI Edge Gallery em dois meses, 204.655 pesos GGUF
   listados), e proxy de disponibilidade não é medida de adoção. Portanto, **este mapa não pode
   afirmar que o tema é emergente por medida de adoção** — afirma-o por estado de forma: APIs em
   *origin trial*, runtime em versão 0.16.0, aceleração prometida e não entregue. É uma justificativa
   mais fraca do que a pedida, e está declarada.
7. **Sem busca em r/LocalLLaMA ou Hacker News.** O termômetro social sugerido na descrição do tema
   não foi consultado. Ficaria como próximo passo natural: é onde a adoção por frustração com cota
   apareceria primeiro.
8. **Horizonte transbordado.** Seis efeitos de terceira ordem têm prazo de 2032 e 2033, além do
   horizonte declarado de 2031. Mantidos por serem consequências causais necessárias, com a data
   honesta em vez de comprimida.
9. **Autoria não verificada em uma fonte.** O artigo do WebLLM [4] é citado sem nomes de autores
   porque a página aberta não os expôs na extração e não houve segunda checagem. Preferiu-se omitir a
   autoria a arriscar atribuí-la errado — ver seção 8, sobre o mesmo tipo de risco em [15].
