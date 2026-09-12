---
tema: "IA local: no dispositivo e no navegador"
slug: ia-local-no-dispositivo-e-no-navegador
autor_login: jcsc
zona_de_interesse: Criação e plataforma
data: 2026-09-12
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 10
efeitos_ordem_2: 20
efeitos_ordem_3: 29
tecnologias_citadas: [BitNet b1.58, bitnet.cpp, "BitNet b1.58 2B4T", quantização ternária, "quantização de 4 bits", GGUF, llama.cpp, Ollama, LM Studio, Gemini Nano, AICore, "ML Kit GenAI APIs", LiteRT, "Gemma 197M", "Chrome Built-in AI", "Prompt API", "Summarizer API", "Translator API", "Language Detector API", WebGPU, WebNN, WebAssembly, WebLLM, MLC-LLM, LlamaWeb, "transformers.js", "ONNX Runtime Web", "Apple Foundation Models framework", "AFM 3 Core", "AFM 3 Core Advanced", "Neural Engine", "Apple Intelligence", "Phi Silica", "Aion Instruct", "Aion-1.0-Instruct", "Phi-4-mini", "Windows AI Foundry", "Foundry Local", "Copilot+ PC", NPU, "Snapdragon 8 Elite", "Dimensity 9400+", "A19 Pro", "speculative decoding", "quantization aware training", "Web Speech API", WebMCP]
fontes: 24
confianca: media
experimento: "Três portas para o mesmo prompt — uma página que tenta o modelo do navegador, o modelo baixado por WebGPU e a nuvem, e registra qual porta cada aparelho da turma abre, quanto baixou, quanto demorou e o que o modelo se recusou a responder"
skill_usada: futurizacao-jcsc
publico_ok: false
---

## 1. Resumo

A inferência local deixou de ser promessa: o Prompt API do Chrome é estável desde a versão 138,
todo aparelho com Apple Intelligence carrega um modelo de 3 bilhões de parâmetros exposto a
qualquer app, o Windows entrega um modelo local por API de sistema, e o Hugging Face lista
203.308 modelos em formato GGUF. A leitura fácil desse quadro é "a IA ficou grátis e privada".
Este mapa sustenta que a leitura fácil erra em três pontos verificáveis. Primeiro, o custo não
desapareceu — mudou de pagador: o Chrome exige mais de 4 GB de VRAM ou 16 GB de RAM, 22 GB de
disco livre, e **não roda em Android nem em iOS**; o que era despesa de quem publica virou
requisito de hardware de quem assiste. Segundo, "local" não é sinônimo de "seu": o modelo da
Apple tem guardrail que não se desliga e janela de 4.096 tokens, o Phi Silica é um recurso de
acesso limitado que exige token de desbloqueio, não existe na China e **será removido em
novembro de 2026** para dar lugar ao Aion Instruct — o fabricante do aparelho decide qual
inteligência roda na sua máquina, quando ela é trocada e o que ela se recusa a dizer. Terceiro,
no Brasil, onde 65% das pessoas acessam a internet exclusivamente pelo celular e 87% nas classes
DE, a IA local chega primeiro para quem já tinha vantagem. O futuro que este mapa desenha para
2031 não é a nuvem morrendo: é a troca de uma dependência tarifada e portátil (a API, que se
troca com uma chave) por uma dependência gratuita e presa ao aparelho (o modelo do sistema, que
só se troca comprando outro aparelho) — e, ao lado dela, uma segunda IA local, de pesos abertos,
que devolve o controle e junto com ele a responsabilidade por tudo o que o modelo disser.

## 2. O tema

### 2.1 A entrevista (Etapa 1 da skill)

A skill `futurizacao-jcsc` proíbe gerar conteúdo antes da entrevista de cinco perguntas. Esta
rodada foi executada sem interlocutor humano disponível: as respostas vieram pré-fixadas na
configuração da rodada, e estão registradas aqui na íntegra, como manda a Etapa 1, para que
qualquer leitor possa julgar o mapa contra o que foi pedido.

| # | Pergunta | Resposta recebida |
|---|---|---|
| 1 | Horizonte temporal | **2031** |
| 2 | Público-alvo | **Quem projeta mídia e interação** |
| 3 | Recorte geográfico | **Global, com uma nota sobre o Brasil** |
| 4 | Descartes explícitos | **O que já é comum em produto de massa** (a régua da disciplina). Nenhuma outra exclusão. Excluir também ideias óbvias que serviriam para qualquer tema. |
| 5 | Viés desejado | **Neutro** |

Três respostas adicionais foram dadas fora do roteiro das cinco perguntas e valem registro
porque mudaram o resultado: **profundidade de três ordens**; **modo "a partir de uma
inovação/tema", não a partir de um setor**; e um critério de falseamento declarado pelo
solicitante — *"o que me faria mudar de ideia: evidência de que a adoção já passou da maioria
inicial (Rogers) ou de que a tecnologia não rompe nada, só melhora o que existe"*. Esse último
item foi tratado como teste obrigatório de cada disrupção candidata na Etapa 2, e é o motivo de
uma delas ter sido recusada (seção 4.5).

**Duas ressalvas de honestidade.** (a) Não houve interlocutor para contestar respostas vagas,
que é parte do valor da entrevista; onde faltou definição, este documento assume e declara.
(b) O solicitante disse "disrupção suspeita: nenhuma — descubra", ou seja, não havia hipótese
prévia a confirmar. A hipótese apresentada na seção 1 foi construída durante o levantamento e
não estava dada.

### 2.2 O que é o tema

O objeto é estreito e convém delimitá-lo: **a execução do modelo no aparelho do usuário final** —
celular, laptop comum, aba do navegador. Não é "modelo pequeno em servidor próprio", que é
prática madura de infraestrutura. Não é "dado e conta sem terceiros" (tema 17 da disciplina),
onde o que fica local é o *dado*, não o *modelo*. Não é voz local (tema 13) nem 3D no navegador
(tema 15), embora os três compartilhem a mesma porta técnica. Aqui o objeto é **a inferência**:
o momento em que o cálculo que produz a resposta acontece dentro da máquina de quem usa.

Ele encosta em mídia e interação em quatro frentes.

Na **economia da obra**: se cada resposta do modelo custa zero depois do download, deixa de
existir a fronteira que hoje separa a interação que "vale a chamada" da que não vale. Uma peça
interativa pode consultar o modelo a cada tecla, a cada movimento, continuamente — algo que
ninguém desenha quando cada consulta tem preço.

Na **política do acesso**: o modelo embutido é gratuito para quem tem o aparelho que o carrega.
O requisito mínimo de hardware, que a web havia praticamente abolido, volta — e volta como
condição para participar da camada de inteligência do meio.

Na **autoridade sobre o que se pode dizer**: quando o modelo é serviço, a política de conteúdo é
do fornecedor e se troca trocando de fornecedor. Quando o modelo é do sistema operacional, a
política vira propriedade do aparelho.

Na **reprodutibilidade da experiência**: um filme roda igual em qualquer sala. Um app que fala
com um modelo do sistema não roda igual nem no mesmo aparelho depois de uma atualização.

### 2.3 Por que isto merece mapa de futuro, e não levantamento de estado da arte

Porque o estado da arte já está decidido e é entediante de descrever: o modelo cabe no aparelho,
os quatro grandes sistemas operacionais já o embarcam, e o navegador executa. Se a pergunta
fosse "dá para rodar IA localmente?", a resposta seria "sim, desde 2025, e a documentação está
publicada". O que está aberto não é a capacidade técnica: é **de quem é o modelo que roda na sua
máquina**, quem paga por ele, quem o atualiza, quem responde pelo que ele diz, e quem fica de
fora. Nenhuma dessas perguntas se responde medindo tokens por segundo.

## 3. Onde isso está hoje

### 3.1 O modelo já está no sistema operacional — nos quatro

**Apple.** A terceira geração dos modelos de fundação, anunciada em 2026, tem no dispositivo o
**AFM 3 Core**, denso, de 3 bilhões de parâmetros, e o **AFM 3 Core Advanced**, de 20 bilhões com
ativação esparsa que aciona "de 1 a 4 bilhões de parâmetros por vez". A Apple declara ter usado
*quantization aware training* para comprimir os modelos, mas **não divulga a largura de bits** —
esse número não pôde ser verificado. O `Foundation Models framework` expõe esse modelo a
qualquer app, sem chave e sem cobrança. Três limites documentados importam para quem projeta:
a janela de contexto de uma sessão é de **4.096 tokens**; o guardrail padrão é **sempre aplicado
e não pode ser desligado**; e há **limitação de taxa** quando o processo roda em segundo plano
com o aparelho na bateria — um engenheiro da Apple confirmou isso em fórum público, num caso em
que uma extensão do Safari batia no limite **após quatro requisições espaçadas de 30 segundos**,
e o desenvolvedor respondeu que o mesmo acontecia com o aparelho na tomada.

**Google, no Android.** O Gemini Nano roda dentro do serviço de sistema **AICore**, que
"gerencia a distribuição do modelo e cuida das atualizações futuras" — o modelo é do sistema
operacional, não do app. O acesso recomendado são as **ML Kit GenAI APIs** (resumo, revisão,
reescrita, descrição de imagem, prompt, reconhecimento de fala), disponíveis em plataformas
MediaTek Dimensity, Qualcomm Snapdragon e Google Tensor. O Google publica o argumento de forma
explícita: "entrada, inferência e saída são processadas localmente", funciona sem conexão, e
"nenhum custo adicional é gerado por chamada de API". O número concreto de desempenho que a
própria empresa publicou, num Pixel 9 Pro: **510 tokens/s de entrada e 11 tokens/s de geração**.

**Microsoft, no Windows.** O **Phi Silica** é o modelo local exposto pelo Windows App SDK, com
*speculative decoding* em NPU nos Copilot+ PC e, desde junho de 2026, execução em GPU (NVIDIA RTX
30+ ou AMD RX 9060+, ambos com 6 GB de VRAM ou mais). Quatro fatos dessa documentação valem mais
que a capacidade do modelo: (1) as APIs do Phi Silica são um **Limited Access Feature** — é
preciso pedir um token de desbloqueio à Microsoft para usá-las; (2) **não estão disponíveis na
China**; (3) a API traz **filtro de conteúdo embutido** (`ContentFilterOptions`) como parâmetro
de primeira classe; (4) o modelo **será substituído pelo Aion Instruct**: pacote de teste em
outubro de 2026, distribuição a aparelhos de varejo em novembro de 2026, e nessa data "o Phi
Silica é removido". Em GPU o modelo não vem pré-instalado — são "vários gigabytes" baixados sob
demanda por Windows Update, e a Microsoft recomenda que o app peça consentimento antes.

**Google e Microsoft, no navegador.** O Chrome tem sete APIs de IA embutida — Prompt,
Summarizer, Writer, Rewriter, Proofreader, Translator, Language Detector — servidas pelo Gemini
Nano. O Prompt API está **estável desde o Chrome 138**; o Chrome 148 acrescentou entrada
multimodal e saída estruturada, e o I/O 2026 anunciou o **Gemma 197M** como modelo especialista
ultraeficiente para as APIs de tarefa. O Edge segue o mesmo caminho com **Phi-4-mini** (4 bilhões
de parâmetros) e o menor **Aion-1.0-Instruct**, este com inferência em CPU para aparelhos sem
GPU, além de Language Detector e Translator com mais de 145 pares de idiomas no Edge 148 e
reconhecimento de fala local via Web Speech API.

### 3.2 O requisito de hardware que quase ninguém cita junto

Este é o dado mais importante desta seção, e é o que a narrativa de "IA grátis para todos"
costuma omitir. A documentação do Prompt API do Chrome exige, textualmente:

- Windows 10/11, macOS 13+, Linux, ou ChromeOS em aparelhos Chromebook Plus;
- **pelo menos 22 GB de espaço livre em disco**;
- **mais de 4 GB de VRAM** na GPU, ou, na rota de CPU (que chegou no Chrome 140, em outubro de
  2025), **16 GB de RAM e 4 núcleos ou mais**;
- e a frase que decide o mapa: *"Chrome for Android, iOS, and ChromeOS on non-Chromebook Plus
  devices are not yet supported by the APIs which use foundation models."*

Ou seja: em setembro de 2026, a IA local do navegador é uma tecnologia de computador de mesa e
laptop com folga de memória. O Phi Silica em GPU exige 6 GB de VRAM e o driver mais recente
instalado direto do fabricante — não o que vem pelo Windows Update. No Android, o caminho existe,
mas amarrado a SoC de topo de linha via AICore.

### 3.3 O navegador como runtime: o que já mede

O WebGPU tem **87,35% de cobertura global** segundo o caniuse, com suporte pleno no Safari do iOS
a partir da versão 26 — a porta de bolso, aqui, está aberta, ao contrário do que acontece com o
WebXR. O **WebNN**, que é a única API web capaz de endereçar NPU diretamente, é **Candidate
Recommendation Draft do W3C com data de 10 de setembro de 2026**, e o próprio documento condiciona
o avanço a "duas implementações independentes e interoperáveis" — ou seja, não é base de produção.

O trabalho acadêmico mais recente sobre isso é *"Llamas on the Web: Memory-Efficient,
Performance-Portable, and Multi-Precision LLM Inference with WebGPU"* (UC Santa Cruz e Microsoft
Research), que construiu o **LlamaWeb**, um backend WebGPU para o llama.cpp: 8.470 linhas de C++
e 11.338 linhas de shader, com suporte a 23 formatos de dado. Os números dele são o antídoto ao
entusiasmo: no *prefill*, o CUDA nativo é **até 10× mais rápido** e o Metal **2×**; no *decode*,
os backends nativos são **2,5× mais rápidos**; as verificações de segurança do WebGPU custam
**até 42% de desempenho** no prefill; e faltam à especificação *push constants* e tipos nativos
de 4 bits e bf16. Do lado do ecossistema, o `transformers.js` roda sobre ONNX Runtime com
backends WASM, WebGPU (declarado experimental) e WebNN, cobrindo texto, visão, áudio e
multimodal, com quantização selecionável até `q4`.

### 3.4 A IA local que não é do fabricante

Em paralelo à rota do sistema operacional, existe a rota dos pesos abertos, e ela é grande: o
Hugging Face lista **203.308 modelos** compatíveis com a biblioteca **GGUF**, e o repositório do
**Ollama** tem **180,7 mil estrelas** no GitHub, com clientes para macOS, Windows, Linux e Docker
e integração declarada com Claude Code, Codex e Copilot CLI. Essa rota não tem guardrail
obrigatório, não tem token de acesso limitado, não é removida por atualização do sistema — e não
tem ninguém do outro lado quando algo dá errado.

### 3.5 A baixa precisão: onde ela está de fato

O **BitNet b1.58 2B4T** da Microsoft é o modelo nativo de 1,58 bit (pesos ternários: −1, 0, +1)
com números publicados: ~2 bilhões de parâmetros, 4 trilhões de tokens de treino, contexto de
4.096 tokens, **0,4 GB de memória não-embedding** contra 1,4–4,8 GB dos pares, **29 ms** de
latência de decodificação em CPU contra 41–124 ms, **0,028 J** de energia estimada contra
0,186–0,649 J, e média de **54,19%** em 16 benchmarks contra 55,23% do Qwen2.5 1.5B. O
`bitnet.cpp` declara ganhos de 1,37× a 5,07× em CPU ARM (55,4% a 70,0% menos energia) e 2,37× a
6,17× em x86 (71,9% a 82,2% menos energia), com uma otimização adicional de 1,15× a 2,1× em
janeiro de 2026 e um kernel de GPU desde maio de 2025.

Há dois avisos que mudam a leitura. O primeiro está no próprio cartão do modelo: *"NÃO espere
ganhos de eficiência ao usar este modelo com a biblioteca transformers padrão"* — a vantagem
existe só no runtime dedicado. O segundo está no README do bitnet.cpp: suporte a **NPU** aparece
como *"coming next"*. E o terceiro dado é de contexto: para Vikas Chandra (Meta), no balanço
*On-Device LLMs: State of the Union, 2026*, **a quantização de 4 bits é o padrão de fato**, e o
BitNet é citado como alternativa emergente que "exige treinar do zero".

### 3.6 O gargalo que nenhum dos anúncios menciona

Ainda no mesmo balanço: as NPUs móveis entregam compute de sobra — A19 Pro ~35 TOPS, Snapdragon 8
Elite ~60 TOPS, Dimensity 9400+ ~50 TOPS —, mas a **banda de memória** dos aparelhos móveis fica
em 50–90 GB/s contra 2–3 TB/s de uma GPU de data center: uma diferença de **30 a 50×**. Como a
decodificação é limitada por memória (todo peso é lido a cada token gerado), o compute fica
ocioso esperando. Há literatura dedicada a dissecar exatamente isso — *"Is Your NPU Ready for
LLMs? Dissecting the Hidden Efficiency Bottlenecks in Mobile LLM Inference"*, arXiv 2607.05475,
de julho de 2026. O que funciona hoje, segundo o mesmo balanço: modelos de 1B a 3B, decodificação
especulativa (2 a 3,6× de ganho), poda estruturada e otimização de cache KV. O que não funciona:
raciocínio em cadeia longa, conhecimento de mundo amplo e conversa multi-turno estendida.

### 3.7 A pressão que empurra: a cota de nuvem não é estável

A documentação de limites do Gemini API traz a frase que resume o problema de quem constrói em
cima de cota gratuita: *"Specified rate limits are not guaranteed and actual capacity may vary"*
— e os limites vigentes nem sequer são publicados numa tabela na página, remetendo ao painel da
conta. Isso corresponde exatamente ao que a turma relatou nas varreduras: a documentação promete
um número e a conta recebe outro. Não é anomalia; é a política declarada.

### 3.8 A nota sobre o Brasil

A TIC Domicílios 2025 (Cetic.br/NIC.br, campo de março a agosto de 2025, 24.535 respondentes,
divulgada em 9 de dezembro de 2025) mede 157 milhões de usuários de internet, e a proporção que
acessa **exclusivamente pelo celular subiu de 60% para 65%**. Na classe A, 95% acessam por vários
dispositivos; **nas classes DE, 87% acessam só pelo celular**. Cruzando com a seção 3.2: a IA
local do navegador não roda em celular, e a IA local do Android exige topo de linha. Para dois
terços do país, "IA local" em 2026 não é uma opção disponível — é uma característica de outro
segmento de mercado.

## 4. As disrupções-raiz

Antes das quatro aceitas, o critério. A skill manda recusar — tratar como presente, não como
futuro — toda tecnologia que já seja padrão de mercado consolidado: amplamente adotada pelos
líderes **e** sem debate técnico real e atual sobre sua substituição no horizonte. A régua da
disciplina acrescenta: o que já é comum em produto de massa não entra. E o solicitante
acrescentou um teste de falseamento: se a tecnologia só melhora o que existe sem romper nada,
não é disrupção.

### 4.1 D1 — O modelo de linguagem embutido no sistema operacional, oferecido como API de plataforma

**O que rompe.** Rompe a categoria "fornecedor de IA". Até aqui, inteligência era um serviço que
se contrata, se compara e se troca: uma chave, um contrato, um preço por token, e a possibilidade
de migrar. Quando o modelo passa a ser um recurso do sistema operacional — como o sistema de
arquivos ou a pilha de rede — deixa de haver contrato, preço e, principalmente, **troca**. Não se
troca o modelo do iPhone sem trocar de iPhone.

**Por que agora e não há cinco anos.** Porque três condições se juntaram entre 2025 e 2026 e
nenhuma existia em 2021: modelos de 2 a 4 bilhões de parâmetros ficaram úteis o bastante para
tarefa de produto; NPUs com dezenas de TOPS viraram item padrão de SoC; e os quatro sistemas
publicaram API pública e estável — `Foundation Models framework`, ML Kit GenAI/AICore, Windows
App SDK/Phi Silica, e as sete APIs de IA embutida do Chrome.

**O que ainda falta acontecer.** Falta o alcance: no Chrome, Android e iOS estão fora; no
Android, o AICore depende de SoC de topo. Falta previsibilidade: a substituição do Phi Silica
pelo Aion Instruct em novembro de 2026 é o primeiro caso público de um modelo de sistema sendo
**removido** sob os apps que dependiam dele. E falta clareza sobre governança: o Phi Silica é
Limited Access Feature com token, o guardrail da Apple não se desliga, e nada disso está
padronizado.

**Teste de falseamento.** Isto melhora o que existe ou rompe? Rompe: muda quem é o fornecedor,
não só a técnica. Passou da maioria inicial? Não — a base elegível é limitada por hardware, e
metade dos caminhos ainda é experimental ou de acesso restrito.

### 4.2 D2 — Precisão extremamente baixa treinada de origem: pesos ternários e a quebra da relação entre memória e capacidade

**O que rompe.** Rompe a equação que governa toda a economia de IA local: capacidade ∝ memória.
Um modelo ternário de 2 bilhões ocupa 0,4 GB de memória não-embedding e gasta 0,028 J por
inferência estimada. Se essa curva continuar subindo em tamanho sem perder a razão de compressão,
o teto de "o que cabe num aparelho comum" sobe junto — e o aparelho comum deixa de ser o gargalo.

**Por que agora.** Porque a diferença entre 2024 e 2026 não é quantização mais agressiva: é
**treinar em baixa precisão desde o início**, em vez de comprimir depois. O BitNet b1.58 2B4T é o
primeiro modelo nativo aberto nessa escala com relatório técnico e kernels publicados, e o
bitnet.cpp já tem kernel de GPU e otimização de CPU de janeiro de 2026.

**O que ainda falta.** Falta escala: o maior modelo nativo aberto é de 2 bilhões, num ecossistema
onde 203.308 modelos GGUF usam a rota consolidada de 4 bits. Falta silício: NPU é "coming next".
E falta portabilidade: o próprio cartão do modelo avisa que sem o runtime dedicado não há ganho
nenhum — a vantagem é do par modelo+kernel, não do modelo.

**Teste de falseamento.** É rompimento ou melhoria? Está na fronteira, e este mapa registra a
dúvida: se a resposta for "4 bits já resolve e ternário não vale o custo de treinar do zero",
D2 vira melhoria incremental. É por isso que o efeito de primeira ordem correspondente teve a
confiança rebaixada na Etapa 4 (ver seção 7).

### 4.3 D3 — A aba do navegador como runtime de inferência

**O que rompe.** Rompe a distribuição. Um modelo deixa de ser algo que se instala ou se contrata
e passa a ser algo que se visita. Não há loja, não há revisão editorial, não há binário assinado
— há uma URL. Para mídia e interação isso é grande, porque a unidade de publicação de uma obra
com inteligência embutida passa a ser a mesma unidade de publicação de um texto.

**Por que agora.** WebGPU em 87,35% de cobertura global, incluindo Safari do iOS 26; WebNN em
Candidate Recommendation Draft de setembro de 2026; pilhas de execução maduras o bastante para
terem literatura própria (LlamaWeb, WebLLM, transformers.js); e APIs de modelo embutido no
próprio navegador, que dispensam até o download pelo autor.

**O que ainda falta.** Falta o celular: as APIs de modelo embutido do Chrome não existem em
Android nem iOS. Falta desempenho: prefill nativo é até 10× mais rápido, e 42% do custo é a
própria checagem de segurança do WebGPU. Falta NPU: o WebNN não é base de produção e exige duas
implementações interoperáveis para avançar. E falta resolver o download: o "sem instalação" é uma
instalação transferida para o cache.

**Teste de falseamento.** Rompe: muda o ato de publicar. Não passou da maioria inicial: metade da
pilha é experimental por declaração dos próprios fornecedores.

### 4.4 D4 — A máquina pessoal como servidor de inferência do próprio dono

**O que rompe.** Rompe a arquitetura cliente-nuvem em favor de uma arquitetura cliente-casa. O
computador da pessoa deixa de ser um cliente de inteligência e passa a ser um **provedor** dela,
para os outros aparelhos dela — e passa a acumular, junto, um acervo pessoal (correio, agenda,
arquivos, histórico) que nunca sai. Isso rompe menos o mercado de infraestrutura e mais o de
**identidade**: a inteligência vira um bem pessoal com localização física.

**Por que agora.** Porque a camada de operação amadureceu: Ollama com 180,7 mil estrelas e
clientes para todas as plataformas, 203.308 modelos GGUF, integração com ferramentas de agente,
e a evidência de processo trazida pela própria turma — três alunos rodaram o julgamento das suas
500 fontes em modelo local depois de esbarrar em cota de API.

**O que ainda falta.** Falta a operação deixar de exigir competência técnica. Falta um modelo de
responsabilidade: sem provedor, não há indenização nem contrato quando a saída é incorreta,
ofensiva ou infratora. E falta resolver a energia: uma máquina ligada em casa tem conta.

**Teste de falseamento.** Este é o candidato mais frágil dos quatro quanto à adoção — não há
precedente de massa para infraestrutura doméstica autogerida (o NAS nunca atravessou o abismo).
O rompimento é real, a adoção é duvidosa; isso está registrado no rebaixamento de confiança de
`e9.1` na seção 7.

### 4.5 O que foi cogitado e recusado por maturidade

Registro exigido pela Etapa 2 da skill — é a evidência de que o critério foi aplicado e não
apenas citado.

| Candidato cogitado | Veredito | Por quê |
|---|---|---|
| **Quantização pós-treino de 4 bits (INT4, GGUF Q4_K_M)** | **Recusado — maduro** | É o *baseline* declarado da área ("4-bit PTQ preserva a maior parte da qualidade com 4× de redução de memória; é padrão"), com 203.308 modelos no Hugging Face. Amplamente adotada pelos líderes e sem debate real sobre substituição até 2031. É o presente da IA local, não o futuro dela. |
| **Chamada de API de modelo em nuvem** | **Recusado — maduro** | A régua da disciplina já o coloca do lado maduro, e nada no levantamento contradiz. |
| **Modelo pequeno rodando em servidor próprio** | **Recusado — maduro** | Prática consolidada de infraestrutura; não é o objeto (o objeto é o aparelho do usuário final). |
| **WebAssembly como runtime de inferência no navegador** | **Recusado — maduro** | É o backend *padrão* do transformers.js desde antes do WebGPU. O que é emergente ali é o WebGPU e o WebNN, não o WASM. |
| **NPU em laptop e celular como hardware** | **Recusado — pré-condição, não disrupção** | O silício já embarcou (35–60 TOPS em SoC de linha). Hardware presente não é ruptura futura; e a literatura mostra que o gargalo não é compute, é banda de memória. Entra no mapa como condição, não como raiz. |
| **Reconhecimento de fala local (Whisper e sucessores)** | **Recusado — maduro e fora do recorte** | Já embarcado no Edge via Web Speech API e nas ML Kit GenAI APIs; além disso é o tema 13 da disciplina. |
| **Ajuste fino local (LoRA no aparelho)** | **Recusado — não se sustenta no horizonte** | A documentação da Microsoft é explícita: adaptadores LoRA **precisam ser treinados na nuvem**; só a inferência é local. O treino local em aparelho de usuário não tem base para virar raiz até 2031. |

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O modelo de linguagem embutido no sistema operacional, oferecido como API de plataforma
    efeitos:
      - id: e1
        ordem: 1
        efeito: A inferência sai da planilha de custo do produto e vira recurso do aparelho, disponível sem chave e sem cobrança por chamada
        sinal: forte
        prazo: 2027
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Aparece uma faixa de função de IA que ninguém teria pago para rodar na nuvem, como reescrever e descrever imagem em qualquer campo de texto
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A escrita assistida deixa de ser produto e vira propriedade do campo de texto, como o corretor ortográfico
                sinal: medio
                prazo: 2030
                confianca: media
              - id: e1.1.2
                ordem: 3
                efeito: O diferencial de um produto de mídia migra da capacidade do modelo para o desenho da interação construída em cima dele
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Quem vende assinatura de uma função que o sistema passou a dar de graça perde a razão de existir e migra para acervo, sincronia ou público
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: O preço de software de criação se descola da IA embutida e volta a se ancorar em biblioteca, colaboração e formato de arquivo
                sinal: medio
                prazo: 2030
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O fabricante do sistema passa a decidir qual modelo executa no aparelho, quando ele é trocado e o que ele se recusa a responder
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O comportamento de um produto muda sem que o autor publique versão nova, e a regressão por atualização do sistema vira categoria própria de defeito
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Equipes mantêm caminho duplo, modelo do sistema e modelo próprio empacotado, só para conseguir reproduzir a experiência que projetaram
                sinal: medio
                prazo: 2030
                confianca: media
              - id: e2.1.2
                ordem: 3
                efeito: Contrato de software passa a declarar modelo de sistema mínimo, como hoje declara versão mínima de sistema operacional
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: A política de conteúdo desce para o aparelho e deixa de ser negociável por quem publica a obra
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Obra de mídia que trata de tema sensível perde acesso ao modelo do sistema e volta para modelo próprio ou para a nuvem
                sinal: medio
                prazo: 2030
                confianca: media
              - id: e2.2.2
                ordem: 3
                efeito: A mesma obra passa a responder de forma diferente conforme o país em que o aparelho foi vendido
                sinal: medio
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: O estado de energia do aparelho substitui a cota de API como limite prático de uso da inteligência
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Surgem padrões de projeto para inferência oportunista, em que o trabalho pesado espera a tomada e a rede sem tarifa
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A interface passa a declarar o custo energético da ação, como hoje declara consumo de dados
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: A experiência de IA contínua, que observa e antecipa o tempo todo, esbarra na bateria antes de esbarrar na qualidade do modelo
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: O desenho de interação passa a tratar a atenção do modelo como recurso escasso, e não a inteligência dele
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: Precisão extremamente baixa treinada de origem, com pesos ternários quebrando a relação entre memória e capacidade
    efeitos:
      - id: e4
        ordem: 1
        efeito: O piso de hardware para um modelo útil desce, e a base de aparelhos elegíveis a IA local cresce por baixo em vez de por cima
        sinal: medio
        prazo: 2029
        confianca: baixa
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Projeto de mídia passa a poder assumir modelo local como linha de base, e não como recurso de aparelho premium
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A desigualdade de acesso deixa de ser ter ou não ter IA e passa a ser que tamanho de modelo o seu aparelho carrega
                sinal: medio
                prazo: 2031
                confianca: baixa
              - id: e4.1.2
                ordem: 3
                efeito: Aparelho de entrada vira alvo de projeto de IA, e não sobra do projeto feito para o topo de linha
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Computador antigo e aparelho fora de suporte voltam à vida como máquina de inferência, e o descarte desacelera
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: O argumento ambiental da IA se divide entre menos energia por token e mais aparelhos ligados por mais tempo
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: A vantagem da baixa precisão só se realiza com kernel e silício dedicados, então o formato do peso passa a amarrar a obra a uma pilha
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A escolha de modelo vira escolha de runtime, e portar uma obra de uma pilha para outra custa mais do que trocar de modelo
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: O formato de peso vira formato de arquivo de mídia, com o mesmo problema de preservação de longo prazo
                sinal: medio
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Fabricantes de silício expõem operação ternária nativa, e quem não expõe perde a vantagem prometida no papel
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: O ciclo de troca de aparelho volta a ser puxado por capacidade de inferência, como já foi puxado por câmera
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A aba do navegador como runtime de inferência, com WebGPU e WebNN e o modelo que chega por URL
    efeitos:
      - id: e6
        ordem: 1
        efeito: Um modelo passa a ser distribuído como endereço, sem loja e sem binário, e o sem instalação vira instalação transferida para o cache
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O consentimento de download vira parte da interface, e a primeira visita passa a ter preço declarado em megabytes
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A obra web passa a negociar capacidade, oferecendo na mesma URL o modelo do navegador, o modelo baixado e a nuvem
                sinal: medio
                prazo: 2030
                confianca: media
          - id: e6.2
            ordem: 2
            efeito: A GPU de quem assiste vira material da obra, e o requisito mínimo de hardware volta à web depois de décadas ausente
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Métrica de audiência passa a incluir a fração do público que não consegue executar a obra
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e6.2.2
                ordem: 3
                efeito: Ferramenta de autoria web ganha modo de degradação obrigatório, como ganhou layout responsivo
                sinal: medio
                prazo: 2031
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: A web se parte em duas, com uma IA local de computador de mesa e uma IA de bolso que continua dependendo da nuvem
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Projeto que assumiu rodar em qualquer aba descobre que a aba do celular é outra plataforma, com outro modelo e outro custo
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Publicar experiência de IA na web passa a exigir duas versões, como exigiu quando o toque conviveu com o mouse
                sinal: medio
                prazo: 2030
                confianca: media
          - id: e7.2
            ordem: 2
            efeito: Onde a maioria só tem celular, e no Brasil isso é a maioria, a IA popular continua sendo a da nuvem e a IA local vira vantagem de quem já tinha vantagem
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: A promessa de privacidade da IA local chega estratificada, porque quem tem aparelho caro não manda dado para fora e quem não tem manda
                sinal: medio
                prazo: 2031
                confianca: baixa
              - id: e7.2.2
                ordem: 3
                efeito: Política pública de inclusão digital passa a discutir capacidade de inferência do aparelho, e não só franquia de dados
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: A API de IA embutida no navegador vira recurso de plataforma, e o autor deixa de saber qual modelo está respondendo
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: A autoria migra de escolher o modelo para projetar uma faixa de comportamento aceitável sob modelo desconhecido
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Avaliação de qualidade deixa de testar o modelo e passa a testar a experiência contra variação de modelo
                sinal: medio
                prazo: 2031
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: A superfície comum entre navegadores desloca a disputa do modelo para quem escreve a especificação
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: Comportamento de modelo passa a ser descrito em especificação da web, e a recusa vira item de conformidade
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A máquina pessoal como servidor de inferência do próprio dono, com pesos abertos, agente local e acervo que não sai
    efeitos:
      - id: e9
        ordem: 1
        efeito: A inferência vira infraestrutura doméstica, com uma máquina em casa atendendo todos os aparelhos da pessoa
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: O celular deixa de precisar rodar o modelo e passa a ser o controle remoto do modelo que mora na casa
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: A diferença entre nuvem e casa desaparece para quem usa, e o que resta é a pergunta de quem é o dono da máquina
                sinal: medio
                prazo: 2031
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: O modelo passa a acumular acervo pessoal que nunca sai, incluindo correio, agenda, arquivos e histórico de conversa
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e9.2.1
                ordem: 3
                efeito: O valor migra do modelo para o acervo acoplado a ele, e trocar de modelo passa a ser mais fácil do que trocar de acervo
                sinal: medio
                prazo: 2031
                confianca: media
              - id: e9.2.2
                ordem: 3
                efeito: Aparece a pergunta jurídica de a quem pertence esse acervo, quem o herda e quem pode apreendê-lo
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: Sem provedor no meio, não sobra quem responda pelo que o modelo diz
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: A responsabilidade migra para quem publicou a obra que embarca o modelo, sem indenização de fornecedor por trás
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: Publicar obra com modelo embarcado passa a exigir proveniência de pesos, como já se exige proveniência de trilha e de imagem
                sinal: medio
                prazo: 2031
                confianca: media
              - id: e10.1.2
                ordem: 3
                efeito: Estúdio pequeno evita pesos abertos por causa do risco e volta ao modelo do fabricante, fechando o círculo de dependência
                sinal: medio
                prazo: 2031
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: Como o modelo já está instalado no aparelho, exigir que ele inspecione o que a pessoa escreve deixa de custar infraestrutura nova
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e10.2.1
                ordem: 3
                efeito: A disputa sobre varredura no dispositivo desloca-se da criptografia para o modelo que já está ali instalado
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e10.2.2
                ordem: 3
                efeito: Local deixa de significar privado no vocabulário técnico, e passa a ser preciso um termo novo para o que a promessa queria dizer
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o bloco não consegue dizer

**A roda tem duas metades que se odeiam, e o YAML não mostra isso.** D1 e D4 descrevem a mesma
frase — "o modelo roda na sua máquina" — significando coisas opostas. Em D1, o modelo é do
fabricante: grátis, invisível, atualizado sem aviso, com recusa embutida, e indisponível em
certos países. Em D4, o modelo é do dono da máquina: sem recusa, sem token, sem atualização
forçada, e sem ninguém para responder. Todo efeito de D1 tem um contra-efeito em D4, e o mapa
inteiro pode ser lido como a disputa por qual das duas ganha o nome "IA local". A leitura mais
útil deste documento é essa: **não existe "IA local" no singular.**

**As cadeias se cruzam, e o formato de árvore esconde os cruzamentos.** Três exemplos que
importam. (1) `e2.2` (a política de conteúdo desce para o aparelho) é exatamente a força que
empurra para `e10.1` (a responsabilidade migra para quem publica): quem não aceita a recusa do
fabricante vai para pesos abertos e herda a responsabilidade. (2) `e7.2` (no Brasil a IA popular
continua na nuvem) neutraliza boa parte de `e1` (custo zero) para dois terços do país. (3) `e4`
(o piso de hardware desce) é o único efeito capaz de desarmar `e7` (a web partida em duas) — se
D2 se concretizar em escala, o ramo inteiro de D3 muda de sentido.

**A cadeia continuaria além do terceiro nível, e foi cortada ali.** O corte é decisão de
engenharia da skill, não do método: Glenn não fixou profundidade na Futures Wheel original. Dois
lugares onde ela claramente seguiria: de `e9.2.2` (a quem pertence o acervo) sairia uma quarta
ordem sobre regime sucessório e sobre penhora de bem digital; e de `e10.2.2` (local não é
privado) sairia uma quarta ordem sobre rotulagem obrigatória, no estilo do que se fez com
ingredientes. Ambas foram deixadas de fora por respeito ao limite, não por falta de plausibilidade.

**Nenhum efeito ultrapassa o horizonte pedido.** Todos os 59 efeitos têm `prazo` menor ou igual a
2031. Isso foi conferido campo a campo, e não por impressão — é a correção do erro registrado no
`DUVIDAS.md` desta skill, onde quatro efeitos de terceira ordem de uma rodada anterior receberam
prazo além do horizonte sem aviso. Dois efeitos, porém, estão datados em 2031 mais por serem o
teto do que por convicção de que se consolidam até lá: `e2.1.2` (cláusula contratual de modelo
mínimo) e `e7.2.2` (política pública tratando de capacidade de inferência). Ambos provavelmente
só amadurecem depois do horizonte, e isso está dito aqui em prosa em vez de escondido numa data.

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — o modelo do sistema sendo removido.** Em novembro de 2026 a Microsoft remove o
Phi Silica e coloca o Aion Instruct no lugar. Não é depreciação com período de convivência: a
documentação diz "Phi Silica is removed". É o primeiro caso público de uma inteligência de
sistema sendo trocada por baixo dos aplicativos que dependiam dela, e o precedente vale mais que
o caso: estabelece que o modelo é do fabricante, não do app.

**Sinal fraco 2 — o token de desbloqueio.** O Phi Silica é *Limited Access Feature*: para usá-lo,
o desenvolvedor pede autorização à Microsoft por formulário. Passou quase despercebido, mas é a
prova de que "IA local grátis no seu sistema" e "IA local aberta a qualquer um" são coisas
diferentes. Vale observar que o anúncio do Aion Instruct diz explicitamente que ele **não**
exigirá token — sinal de que a própria Microsoft leu isso como atrito.

**Sinal fraco 3 — a bateria como cota.** O limite de taxa do modelo da Apple quando o processo
roda em segundo plano com o aparelho na bateria é hoje uma reclamação de fórum, não uma política
anunciada. Se virar padrão nos quatro sistemas, muda o desenho de qualquer experiência contínua:
o recurso escasso deixa de ser o token e passa a ser o miliampère.

**Sinal fraco 4 — o modelo de 197 milhões de parâmetros.** O Gemma 197M, anunciado no I/O 2026
para servir APIs de tarefa, aponta para o oposto do que a discussão pública acompanha: não
modelos grandes espremidos em aparelho pequeno, mas modelos especialistas minúsculos, um por
tarefa. Se essa for a rota vencedora, "o modelo" no singular deixa de existir no aparelho, e o
que existe é um enxame de especialistas — o que muda a pergunta sobre atualização, sobre recusa
e sobre auditoria.

**Sinal fraco 5 — WebMCP.** O ensaio de origem começa no Chrome 149: uma página expõe funções e
formulários como ferramentas para agentes que rodam no navegador. Se essa peça encontrar a IA
embutida, o navegador vira, ao mesmo tempo, o modelo, o ambiente de execução e o catálogo de
ferramentas — a arquitetura completa de um agente, sem servidor. É o sinal mais consequente da
lista e o menos discutido.

**Wildcard A — um modelo ternário de qualidade de fronteira num aparelho de entrada.** Baixa
probabilidade, impacto máximo. Se um modelo nativo de 1,58 bit atingir, em 2 a 4 bilhões de
parâmetros, qualidade equivalente à de um modelo de fronteira de hoje, e couber com folga num
celular de 4 GB de RAM, o mapa inteiro se reescreve: `e7` (web partida em duas) desaparece, `e1`
(custo zero) passa a valer para o mundo inteiro em vez de para um segmento, e o argumento
comercial da nuvem para tarefa comum evapora. O que torna isso improvável até 2031 não é o
modelo — é a banda de memória, que cresce devagar e não é resolvida por compressão de pesos.

**Wildcard B — obrigação legal de varredura no dispositivo.** Se uma jurisdição grande exigir
inspeção de conteúdo antes da criptografia, o modelo já instalado no aparelho é a infraestrutura
pronta para cumprir a exigência. A negociação europeia sobre CSAM segue em trílogo desde
dezembro de 2025, com o Conselho admitindo detecção pelos provedores e o Parlamento excluindo os
serviços criptografados — o desfecho não está dado. Se sair a versão que autoriza varredura no
dispositivo, "IA local" muda de significado num único dia: de garantia de privacidade para
mecanismo de vigilância que já estava dentro de casa.

**Wildcard C — um recall de modelo.** Um modelo de sistema instalado em centenas de milhões de
aparelhos apresenta uma falha grave — um viés, um vazamento de dado de treino, uma instrução
maliciosa embutida. O fabricante precisa recolhê-lo por atualização forçada. Nunca aconteceu, e
quando acontecer vai definir juridicamente o que é um modelo: produto com garantia, serviço, ou
componente. A infraestrutura para isso já existe e está descrita na documentação (o AICore
"gerencia a distribuição e cuida das atualizações futuras").

## 7. Contra o próprio mapa

Esta seção é a Etapa 4 da skill. A regra que a skill impõe é que a autocrítica seja **auditável**:
cada rebaixamento aparece com o valor original ao lado do valor final, para que se possa conferir
que a crítica mudou o documento em vez de apenas ser afirmada.

### 7.1 Rebaixamentos aplicados

| id | Campo | Original | Final | Motivo |
|---|---|---|---|---|
| `e1` | confiança | **alta** | **media** | O efeito diz que a inferência sai da planilha de custo. Sai — mas só para o produto que roda em aparelho elegível. O custo não desaparece: migra para 22 GB de disco, 16 GB de RAM ou 4 GB de VRAM, e para a fatura de energia de quem assiste. Além disso, o precedente do Limited Access Feature mostra que o fabricante **pode** tarifar ou gatear o acesso quando quiser. "Custo zero" só é verdadeiro dentro de um recorte de hardware que o efeito não declarava. |
| `e4` | confiança | **media** | **baixa** | O efeito assume que a precisão ternária derruba o piso de hardware. Existe uma força contrária forte e documentada: a quantização de 4 bits é o padrão de fato, com 203.308 modelos disponíveis, e o BitNet exige treinar do zero, o que quase ninguém faz. O maior modelo nativo aberto tem 2 bilhões de parâmetros e o suporte a NPU é declarado como "coming next". O caminho existe; a inércia do ecossistema é maior que ele. |
| `e8.1` | confiança | **media** | **baixa** | O efeito assume que autores aceitam não saber qual modelo responde. Produção profissional de mídia tem incentivo oposto e histórico oposto: fixa versão, congela dependência, testa contra alvo estável. É mais provável que estúdios empacotem o próprio modelo — o que é o efeito `e2.1.1`, não este. |
| `e9.1` | confiança | **media** | **baixa** | O efeito assume adoção doméstica de um servidor de inferência. Não há precedente observável de infraestrutura doméstica autogerida atravessando a maioria: o NAS não atravessou, o servidor de mídia em casa não atravessou, o e-mail auto-hospedado não atravessou. A capacidade técnica existe hoje e mesmo assim a adoção é de nicho — o que sugere que o gargalo não é técnico. |

Três efeitos foram testados e **mantidos** com confiança alta, e convém dizer por quê, para que a
autocrítica não pareça um imposto pago em qualquer item:

- `e2` (**alta**, mantida): não é extrapolação. É descrição do que já está documentado — modelo
  gerenciado pelo AICore, guardrail que não se desliga, recurso de acesso limitado por token,
  indisponibilidade na China, remoção anunciada com data.
- `e7` (**alta**, mantida): a frase "Chrome for Android, iOS... are not yet supported" está na
  documentação oficial. O efeito é presente, não previsão; o que se projeta é apenas a duração.
- `e2.1` (**média**, mantida): a substituição do Phi Silica pelo Aion Instruct tem data marcada.
  O que resta incerto é a frequência com que isso vai se repetir, não se vai acontecer.

### 7.2 Qual efeito é só extrapolação linear do presente

`e1.1` — "aparece uma faixa de função de IA que ninguém teria pago para rodar na nuvem". É a
extrapolação mais linear do mapa: pega uma tendência já em curso (resumir, reescrever, descrever)
e projeta mais do mesmo, mais barato. Não pressupõe ruptura nenhuma. Foi mantido no mapa porque
é o efeito de maior consequência prática para quem projeta interação, mas quem for usar este
documento para decidir alguma coisa deve tratá-lo como cenário-base, não como achado.

Menção honrosa: `e1.1.1` ("a escrita assistida vira propriedade do campo de texto") é a mesma
extrapolação com um passo a mais. Ambos podem estar certos e ainda assim não ensinarem nada.

### 7.3 Qual efeito assume uma velocidade de adoção sem precedente comparável

`e9` e toda a sua cadeia — a máquina de casa como servidor de inferência da pessoa. Já rebaixado
em `e9.1`, mas o problema é do ramo inteiro: ele supõe que, em cinco anos, uma prática que hoje
exige linha de comando, escolha de quantização e gerência de memória se torne infraestrutura
doméstica comum. Não há caso comparável de sucesso; há três casos comparáveis de fracasso (NAS,
servidor de mídia, e-mail próprio). A adoção plausível até 2031 é a de nicho profissional —
quem já tem motivo de confidencialidade ou de custo para operar assim.

O segundo suspeito é `e6.2.2` ("ferramenta de autoria ganha modo de degradação obrigatório").
O responsivo levou cerca de uma década para virar obrigatório em ferramenta de autoria; supor o
mesmo em cinco anos para um problema mais difícil é otimista.

### 7.4 Qual disrupção pode simplesmente não se concretizar

**D2, a precisão ternária.** É a mais frágil das quatro e a que mais mudaria o mapa se caísse.
O cenário de fracasso é mundano: a quantização de 4 bits continua boa o bastante, o custo de
treinar do zero em ternário não se paga, os fabricantes de silício não expõem a operação nativa,
e o BitNet permanece uma linha de pesquisa respeitada com pouca base instalada. Nesse caso, o
ramo D2 inteiro (`e4`, `e5` e seus nove descendentes) sai do mapa, e a consequência é grave:
**sem D2, `e7` não se resolve**. A web permanece partida entre IA local de desktop e IA de nuvem
no celular, a nota sobre o Brasil deixa de ser transitória e vira estrutural, e o mapa fica
consideravelmente mais pessimista do que está.

A segunda candidata a não se concretizar é o ramo D4 pelo lado da adoção, já discutido em 7.3.
D1 e D3 não têm cenário plausível de não-concretização: já aconteceram; o que se projeta é o
alcance e as consequências.

### 7.5 Que viés entrou aqui

**Primeiro, o viés da fonte.** Praticamente toda a evidência de estado da arte deste mapa vem de
documentação de fabricante — Apple, Google, Microsoft — que é confiável quanto a requisitos e
datas e enviesada quanto a virtude. Nenhuma dessas páginas diz "e por isso nós passamos a
controlar qual inteligência roda no seu aparelho". A leitura crítica dessas páginas é minha, não
delas, e outro leitor com os mesmos documentos poderia concluir apenas "as plataformas
facilitaram o acesso à IA". Não há, neste documento, uma única fonte independente de fabricante
sobre governança de modelo embutido — é a maior lacuna do levantamento.

**Segundo, o viés do achado bonito.** A descoberta de que o Chrome exige 22 GB de disco e não
roda em celular é vistosa, e há risco real de ela ter puxado o mapa inteiro para a tese da
exclusão. Ela é um fato de setembro de 2026 sobre uma API que tem três anos de vida; tratá-la
como característica estrutural até 2031 é uma escolha, não uma dedução. O contra-argumento
honesto: requisitos de plataforma costumam cair rápido, e o Chrome já baixou o seu uma vez
(suporte a CPU no Chrome 140, outubro de 2025).

**Terceiro, o viés de quem escreve.** Este mapa foi produzido por um modelo de linguagem que roda
em nuvem, sobre o tema "modelos de linguagem que não rodam em nuvem". O documento pende
sistematicamente para o lado dos limites da execução local — banda de memória, requisito de
hardware, guardrail, responsabilidade. Um mapa feito por quem opera modelos locais todo dia
provavelmente pesaria diferente: veria o guardrail como problema resolvido (basta trocar de
modelo) e o requisito de hardware como problema em queda.

**Quarto, o viés do tema escolhido.** A pergunta padrão desta seção do formato é "você escolheu
este tema por gostar dele". Aqui não houve escolha: o tema foi atribuído pela rodada. O viés
correspondente é outro e vale declarar — o texto de apresentação do tema, escrito pela
disciplina, já continha uma tese ("a inteligência sai da nuvem") e três perguntas-guia. Este mapa
concorda com duas delas e discorda em parte da primeira: não vejo o modelo de negócio de quem
vende IA por assinatura ruindo até 2031; vejo a assinatura se deslocando para acervo, sincronia e
público, que é o efeito `e1.2`.

## 8. O que a máquina errou

Quatro erros concretos ocorreram nesta rodada. Estão descritos com o motivo da desconfiança, como
pede o formato.

**1. Confundiu a versão em que o Prompt API ficou estável.** Um resumo de busca afirmou que
"Chrome 148 estabiliza o Gemini Nano no dispositivo: Prompt API, Summarizer, Translator sem
tokens". A documentação oficial do Chrome, aberta em seguida, diz que o Prompt API é **estável
desde o Chrome 138**, e que o 148 acrescentou entrada multimodal e saída estruturada. A
desconfiança veio de o resumo empacotar três APIs diferentes numa mesma data — coisas que
estabilizam juntas são raras. Corrigido pela fonte primária; a versão errada não entrou no
documento.

**2. Leu errado a tabela do caniuse sobre o Firefox.** A leitura automática da página do WebGPU
devolveu "Firefox: desabilitado por padrão até a versão 158", o que contradiz o registro de que o
Firefox 141 ativou WebGPU por padrão no Windows em julho de 2025, o 145 no macOS Apple Silicon e
o 147 trouxe melhorias em janeiro de 2026. Não consegui reconciliar as duas leituras — pode ser
erro do resumo ao ler a tabela de versões futuras, pode ser recorte por plataforma. **Resolução:
retirei o Firefox do corpo do documento** e mantive apenas o número global (87,35%) e o suporte no
Safari do iOS 26, que aparecem de forma inequívoca. Registro aqui para que ninguém use este
documento como fonte sobre WebGPU no Firefox.

**3. Produziu uma leitura genérica de um artigo e a apresentou como extração.** Ao abrir o PDF de
*"Is Your NPU Ready for LLMs?"* (arXiv 2607.05475), o resumo automático devolveu afirmações
plausíveis sobre subutilização de NPU e movimentação de dados, e ao mesmo tempo admitiu que "os
resultados numéricos específicos não estão claramente visíveis". Isso é o padrão de um resumo
inferido do título, não lido do texto. **Resolução: o artigo é citado neste documento apenas por
existir e pelo que o seu título afirma**, e todos os números sobre banda de memória e TOPS vêm de
outra fonte, o balanço de Vikas Chandra. Se este mapa for usado para decidir algo, esse artigo
precisa ser lido na íntegra por uma pessoa.

**4. Repetiu números de adoção que não se sustentaram.** Um conjunto de resultados de busca
afirmava "52 milhões de downloads mensais do Ollama no primeiro trimestre de 2026, aumento de
520× sobre 100 mil em 2023" e "165 mil estrelas no GitHub". A combinação de um múltiplo redondo
(520×) com uma base redonda (100 mil) já era suspeita; a verificação direta no repositório
mostrou **180,7 mil estrelas**, não 165 mil. **Resolução: descartei o número de downloads
inteiro** — não é verificável a partir de fonte primária — e usei apenas a contagem de estrelas
lida no próprio GitHub, que também não é medida de uso, apenas de atenção.

**Um erro de origem que este documento evitou de propósito.** O `DUVIDAS.md` desta skill registra
que, numa rodada anterior, quatro efeitos de terceira ordem receberam prazos além do horizonte
pedido, sem aviso. Aqui os 59 efeitos foram conferidos campo a campo contra `horizonte: 2031`, e
os dois casos em que a data é otimista estão declarados em prosa no fim da seção 5, em vez de
escondidos numa data confortável.

**O que não consegui verificar.** A largura de bits usada pela Apple na quantização dos modelos
no dispositivo: a página oficial menciona *quantization aware training* e não divulga o número.
Vi valores circulando em textos secundários e não os incluí. Também não consegui a tabela de
limites do plano gratuito do Gemini API a partir da documentação oficial — a página remete ao
painel da conta e declara que os limites "não são garantidos". Os números que circulam em blogs
(1.500 requisições/dia, cortes de 50–80% em dezembro de 2025) não foram usados; usei apenas a
frase da documentação, que já basta para o argumento.

## 9. Três cenários para 2031

**Provável.** Em 2031, quase todo aparelho vendido nos últimos cinco anos tem um modelo de
sistema, e quase ninguém sabe o nome dele. A IA embutida virou infraestrutura invisível, como o
corretor ortográfico: resume, reescreve, descreve imagem, traduz, e ninguém chama isso de IA. A
nuvem não morreu — ficou com o que o aparelho não faz, que é raciocínio longo, conhecimento amplo
e conversa extensa, exatamente a fronteira que já se enxergava em 2026. Quem projeta mídia e
interação aprendeu a escrever para duas plataformas: a do modelo do sistema, mais barata, mais
limitada e sujeita a recusa, e a do modelo próprio, mais cara e reproduzível. O navegador virou
uma plataforma de IA razoável no desktop e continua sendo uma plataforma de nuvem no celular. No
Brasil, a maior parte das pessoas usa IA todos os dias e quase nunca localmente, porque o
aparelho não carrega o modelo — e a distância entre a promessa de privacidade e o que se recebe
de fato virou um problema de política pública que ainda ninguém enfrentou. Duas notícias
periódicas se tornaram rotina: um fabricante trocou o modelo do sistema e quebrou aplicativos, e
um modelo local se recusou a fazer algo que a obra precisava.

**Desejável.** O mesmo quadro, com três diferenças conquistadas. Primeira: a API de modelo
embutido é padronizada de verdade, com uma superfície comum aos navegadores e aos sistemas, e o
autor pode declarar qual modelo quer e receber um aviso quando ele mudar — o que resolve `e2.1`
por convenção, e não por cada equipe manter caminho duplo. Segunda: o piso de hardware caiu, por
precisão ternária ou por especialistas minúsculos, e o modelo local passou a rodar no aparelho de
entrada, o que faz a promessa de privacidade parar de ser estratificada. Terceira: existe uma
declaração legível do que o modelo do sistema se recusa a fazer, publicada e versionada, do mesmo
jeito que se declara conformidade de acessibilidade. Para chegar lá, três coisas teriam de ser
feitas a partir de agora: um grupo de padronização precisaria tratar recusa e troca de modelo
como parte da especificação, e não como detalhe de implementação; os fabricantes de silício
precisariam expor operações de baixíssima precisão de forma nativa e comum; e quem compra
tecnologia — governo, escola, empresa — precisaria começar a exigir capacidade de inferência
local nas suas compras de aparelho, como já exige acessibilidade.

**Indesejável.** Em 2031, "IA local" quer dizer "a IA que o fabricante do seu aparelho instalou e
que você não pode desligar, trocar nem auditar". O modelo do sistema é o único caminho viável
porque embarcar pesos abertos virou risco jurídico inaceitável para quem publica — sem provedor,
sem indenização, sem defesa. A recusa do modelo é a norma editorial de fato do que se pode
produzir num aparelho, e ela varia por país. E o passo final já foi dado: como o modelo estava
mesmo ali, exigir que ele inspecione o que a pessoa escreve antes de a mensagem sair custou zero
de infraestrutura, e a varredura no dispositivo passou a ser cumprimento de lei em pelo menos uma
jurisdição grande. "Local" deixou de significar privado. **O sinal precoce disso é observável
hoje e não exige esperar:** é a frequência com que um recurso de IA de sistema é gateado — token
de acesso limitado, indisponibilidade por país, guardrail que não se desliga, remoção do modelo
por atualização. Cada um desses fatos já ocorreu ao menos uma vez em 2026. O indicador a
acompanhar não é a qualidade dos modelos: é quantas dessas quatro coisas acontecem por ano.

## 10. O experimento

**Três portas para o mesmo prompt.**

**O que é.** Uma página web de arquivo único, sem servidor, que tenta responder ao mesmo pedido
por três caminhos, na ordem, e registra o que aconteceu em cada um:

1. **Porta A — o modelo do navegador.** Chama o Prompt API embutido, se ele existir.
2. **Porta B — o modelo baixado.** Se A falhar, carrega um modelo pequeno por WebGPU
   (transformers.js ou WebLLM), medindo quantos megabytes foram baixados e quanto tempo levou até
   o primeiro token.
3. **Porta C — a nuvem.** Se B falhar ou for lento demais, usa uma API remota — e diz isso na
   tela, sem esconder.

A página emite, ao final, um cartão com: qual porta abriu, o que o aparelho declarou de si
(memória aproximada, GPU, sistema), megabytes baixados, tempo até o primeiro token, tokens por
segundo, e — a parte que interessa mais — **o registro das recusas**: quais dos prompts de teste
o modelo se negou a responder em cada porta.

**Que pergunta sobre o futuro ele ajuda a responder.** Duas, e as duas são do mapa. A primeira é
`e7`: a web está mesmo partida em duas? A turma tem entre 14 e 15 aparelhos entre celulares e
laptops; a distribuição de portas abertas é uma medida direta, na população que importa (a de
quem projeta), do tamanho real da exclusão de hardware. A segunda é `e2.2`: a política de conteúdo
desceu para o aparelho? Rodar o mesmo conjunto de prompts sensíveis nas três portas e comparar as
recusas mostra, com evidência própria, se o modelo do sistema recusa mais, menos ou coisas
diferentes do que o modelo baixado e o da nuvem.

**Que tecnologia emergente ele usa, e por que não dá com tecnologia madura.** Usa Prompt API
embutido (estável há pouco e ausente em celular), WebGPU (87% de cobertura, ainda com diferenças
grandes de desempenho entre fabricantes) e um modelo quantizado carregado no cliente. Não dá para
fazer com tecnologia madura porque a coisa medida **é** a fronteira: com API de nuvem, todas as
portas abrem em todos os aparelhos e o experimento não mede nada. O objeto do experimento é
justamente a falha — quem não consegue.

**O que a turma faz quando testar isso em sala.** Cada pessoa abre a mesma URL no celular e no
computador, roda o conjunto de prompts, e cola o cartão numa planilha compartilhada. Em vinte
minutos existe uma tabela real, com nomes de aparelho, do que a turma consegue e não consegue
executar localmente — e uma segunda tabela, das recusas, comparando as três portas prompt a
prompt. A discussão que segue tem duas perguntas: (a) se a turma toda de um curso de computação
não abre a porta A no celular, para quem exatamente a IA local está disponível hoje? (b) quando a
porta A e a porta C recusam coisas diferentes, quem decidiu isso, e onde está escrito?

**O que seria um resultado que me faria mudar de ideia.** Três resultados, cada um derrubando uma
parte do mapa:

- **Se mais de metade dos celulares da turma abrir a porta A ou a porta B com desempenho usável**,
  `e7` está errado e a partição da web é bem menos severa do que este documento sustenta. A nota
  sobre o Brasil vira transitória.
- **Se as recusas forem praticamente iguais nas três portas**, `e2.2` perde força: a política de
  conteúdo não desceu para o aparelho, apenas acompanhou o modelo, e o argumento sobre o
  fabricante como guardião fica sem base empírica.
- **Se o download da porta B for irrelevante na prática** — poucas dezenas de megabytes, alguns
  segundos, cache confiável entre sessões — então `e6.1` está superdimensionado, e "sem
  instalação" era literal o tempo todo.

## 11. Fontes

Vinte e quatro fontes, todas abertas e lidas nesta rodada. Resultados de busca que não foram
abertos **não** entram nesta lista; onde um número veio apenas de resumo de busca, ele foi
descartado (ver seção 8, item 4). Confiabilidade declarada em uma linha por fonte.

1. `https://developer.chrome.com/docs/ai/prompt-api` — Sustenta o requisito de hardware do Chrome
   (22 GB livres, >4 GB de VRAM ou 16 GB de RAM e 4 núcleos), a estabilidade desde o Chrome 138, o
   suporte multimodal e, sobretudo, a ausência de suporte em Android e iOS. **Alta**: documentação
   primária do fornecedor sobre a sua própria API; é o tipo de informação que um fabricante não
   tem incentivo para exagerar para baixo.
2. `https://developer.chrome.com/docs/ai/built-in` — Sustenta a lista das sete APIs de IA embutida
   e o modelo que as serve. **Alta**, mesma razão; não traz requisitos, que ficam na página de
   cada API.
3. `https://developer.chrome.com/blog/gemini-nano-cpu-support` — Sustenta a chegada da inferência
   em CPU no Chrome 140, em 1º de outubro de 2025, e o reconhecimento de que a GPU é mais rápida.
   **Alta** para o fato, **média** para o alcance: o texto não quantifica quantos aparelhos passam
   a ser cobertos.
4. `https://developer.chrome.com/blog/chrome-at-io26` — Sustenta o Chrome 148 com multimodal e
   saída estruturada, o Gemma 197M e o ensaio de origem do WebMCP no Chrome 149. **Alta** como
   anúncio oficial, **média** como previsão: anúncio de conferência descreve intenção, e datas de
   ensaio de origem escorregam.
5. `https://machinelearning.apple.com/research/introducing-third-generation-of-apple-foundation-models`
   — Sustenta AFM 3 Core (3 bilhões, denso) e AFM 3 Core Advanced (20 bilhões esparso, 1 a 4
   bilhões ativos) e o uso de *quantization aware training*. **Alta** para arquitetura, **baixa
   para comparação**: as avaliações publicadas são humanas e internas, sem benchmark público.
   A largura de bits não é divulgada.
6. `https://developer.apple.com/forums/thread/789788` — Sustenta o limite de taxa do
   `Foundation Models framework` em processo de segundo plano com o aparelho na bateria, com
   resposta de engenheiro da Apple e número de bug interno. **Média-alta**: é fórum, mas a resposta
   é de funcionário identificado no papel de engenheiro de frameworks; o desenvolvedor contesta o
   escopo, e a contestação está registrada no mesmo tópico.
7. `https://www.createwithswift.com/exploring-the-foundation-models-framework/` — Sustenta que o
   guardrail padrão é sempre aplicado e não pode ser desligado, e os estados de disponibilidade do
   modelo. **Média**: fonte secundária de qualidade, de agosto de 2025, escrita durante o período
   beta; parte pode ter mudado.
8. `https://developer.android.com/ai/gemini-nano` — Sustenta que o Gemini Nano roda no serviço de
   sistema AICore e que "o AICore gerencia a distribuição do modelo e cuida das atualizações
   futuras". **Alta** para o mecanismo, **baixa para requisitos**: a página não lista aparelhos
   nem exige RAM mínima explicitamente.
9. `https://android-developers.googleblog.com/2025/05/on-device-gen-ai-apis-ml-kit-gemini-nano.html`
   — Sustenta as ML Kit GenAI APIs, os três fabricantes de SoC suportados, o argumento de custo
   zero por chamada, e o número do Pixel 9 Pro (510 tokens/s de entrada, 11 tokens/s de geração).
   **Alta** para o fato, **média** para o número: é medida do fabricante em aparelho de topo, sem
   metodologia publicada.
10. `https://learn.microsoft.com/en-us/windows/ai/apis/phi-silica` — A fonte mais densa deste mapa.
    Sustenta o Limited Access Feature com token, a indisponibilidade na China, o filtro de conteúdo
    na API, os requisitos de GPU (6 GB de VRAM, driver do fabricante), o download sob demanda de
    "vários gigabytes", e o calendário de substituição pelo Aion Instruct com remoção do Phi Silica
    em novembro de 2026. **Alta**: documentação primária, atualizada em 24 de julho de 2026, com
    datas explícitas.
11. `https://blogs.windows.com/msedgedev/2026/06/02/expanding-on-device-ai-in-microsoft-edge-new-models-and-apis-for-the-web/`
    — Sustenta Phi-4-mini (4 bilhões) e Aion-1.0-Instruct no Edge, inferência em CPU, 145+ pares de
    idiomas no Edge 148 e reconhecimento de fala local. **Alta** como anúncio oficial, **média**
    quanto a prazos (canais Canary e Dev).
12. `https://github.com/microsoft/BitNet` — Sustenta os ganhos do bitnet.cpp (1,37–5,07× em ARM,
    2,37–6,17× em x86, com as respectivas reduções de energia), o histórico de atualizações
    (kernel de GPU em maio de 2025, otimização de CPU em janeiro de 2026) e o fato de o suporte a
    NPU ser "coming next". **Média-alta**: repositório oficial, mas os números são autorrelatados
    e sem replicação independente aberta.
13. `https://huggingface.co/microsoft/bitnet-b1.58-2B-4T` — Sustenta 2 bilhões de parâmetros,
    4 trilhões de tokens, contexto de 4.096, 0,4 GB de memória não-embedding, 29 ms de latência,
    0,028 J, média de 54,19% em 16 benchmarks, e o aviso de que não há ganho com a biblioteca
    transformers padrão. **Alta** para as especificações, **média** para os benchmarks
    (autorrelatados); o aviso explícito sobre o runtime aumenta a credibilidade do resto.
14. `https://v-chandra.github.io/on-device-llms/` — Sustenta que a quantização de 4 bits é o padrão
    de fato, os TOPS das NPUs móveis (A19 Pro ~35, Snapdragon 8 Elite ~60, Dimensity 9400+ ~50), a
    diferença de 30 a 50× em banda de memória, o ganho de 2 a 3,6× da decodificação especulativa,
    e a lista do que ainda não funciona no dispositivo. **Média-alta**: balanço assinado por diretor
    sênior de IA da Meta, de 24 de janeiro de 2026, mas é página pessoal sem revisão por pares, e o
    autor tem interesse profissional no assunto.
15. `https://arxiv.org/html/2605.20706v1` — *Llamas on the Web* (UC Santa Cruz e Microsoft
    Research). Sustenta o LlamaWeb, as limitações do WebGPU (falta de push constants e de tipos de
    4 bits e bf16, 42% de custo em verificação de segurança) e a comparação com nativo (prefill até
    10× em CUDA, 2× em Metal; decode 2,5×). **Alta** para os limites técnicos, **média** para os
    números de desempenho: é preprint, sem revisão por pares confirmada.
16. `https://arxiv.org/pdf/2607.05475` — *Is Your NPU Ready for LLMs?*, julho de 2026. Citado
    **apenas** pela existência e pelo enunciado do título, pelo motivo descrito na seção 8, item 3.
    **Não usado como fonte de número neste documento.**
17. `https://www.w3.org/TR/webnn/` — Sustenta que o WebNN é Candidate Recommendation Draft de 10 de
    setembro de 2026 e que o avanço depende de duas implementações interoperáveis. **Alta**:
    documento normativo, com data no cabeçalho.
18. `https://caniuse.com/webgpu` — Sustenta a cobertura global de 87,35% do WebGPU e o suporte no
    Safari do iOS 26. **Média**: dado agregado e amplamente usado, mas a leitura automática desta
    página produziu, nesta rodada, uma linha sobre o Firefox que não se sustenta (seção 8, item 2).
19. `https://huggingface.co/docs/transformers.js/index` — Sustenta os backends (WASM, WebGPU
    declarado experimental, WebNN), as modalidades cobertas e a quantização selecionável até `q4`.
    **Alta** como documentação da própria biblioteca.
20. `https://huggingface.co/models?library=gguf` — Sustenta a contagem de 203.308 modelos GGUF.
    **Alta** para o número (lido na própria plataforma, em 12 de setembro de 2026), **baixa** como
    medida de uso: contagem de artefatos publicados, não de uso real, e inclui muitas variantes do
    mesmo modelo-base.
21. `https://github.com/ollama/ollama` — Sustenta 180,7 mil estrelas e as plataformas suportadas.
    **Alta** para o número, **baixa** como proxy de adoção: estrela mede atenção, não uso.
22. `https://ai.google.dev/gemini-api/docs/rate-limits` — Sustenta a frase "specified rate limits
    are not guaranteed and actual capacity may vary" e o fato de a página não publicar tabela de
    limites do plano gratuito. **Alta**: é a documentação do próprio fornecedor declarando a
    própria instabilidade, que é exatamente o ponto.
23. `https://www.mobiletime.com.br/noticias/09/12/2025/tic-domicilios-2025/` — Sustenta os números
    da TIC Domicílios 2025: 157 milhões de usuários, 65% de acesso exclusivo por celular, 87% nas
    classes DE, campo de março a agosto de 2025, 24.535 respondentes. **Média-alta**: veículo
    especializado relatando pesquisa do Cetic.br/NIC.br; o ideal seria a tabela primária do
    Cetic.br, e quem for usar estes números em trabalho formal deve buscá-la.
24. `https://www.patrick-breyer.de/en/posts/chat-control/` — Sustenta a cronologia da regulação
    europeia sobre varredura de conteúdo, incluindo a expiração do regime provisório em 4 de abril
    de 2026, o trílogo desde dezembro de 2025 e a divergência entre Parlamento (exclui serviços
    criptografados) e Conselho (admite detecção a critério do provedor). **Baixa-média para tom,
    média-alta para cronologia**: o autor é ativista declarado contra a proposta e ex-parlamentar
    europeu; as datas e posições são verificáveis e conferem com o noticiário, mas a moldura é
    militante e o documento não deve ser lido como neutro. Usada aqui apenas para datas e posições
    negociais.

## 12. Anexo — o levantamento bruto

### 12.1 Registro de execução da skill, etapa a etapa

**Etapa 1 — Entrevista.** Executada sem interlocutor humano. As cinco respostas estão na seção
2.1. A skill manda repetir o pedido de entrevista mesmo quando o usuário pede para "ir direto ao
resultado"; aqui não houve pedido desse tipo, mas houve instrução explícita de não fazer perguntas
de volta. O conflito foi resolvido registrando a entrevista como recebida, e não como dispensada.
Diferença que importa para quem corrige: **este documento não tem entrevista viva**, tem entrevista
transcrita de uma configuração. Uma entrevista real teria produzido perguntas de acompanhamento —
a mais óbvia seria "quando você diz 'quem projeta mídia e interação', você quer o ponto de vista
de quem publica, de quem encomenda, ou de quem estuda?", porque as três respostas mudariam a
seção 10.

**Etapa 2 — Levantamento e filtro.** Doze buscas na web, vinte e quatro páginas abertas e lidas.
Sete candidatos a disrupção-raiz foram recusados por maturidade (tabela 4.5) e quatro aceitos.
Nenhum nome de tecnologia, empresa ou produto neste documento foi escrito sem fonte aberta.

**Etapa 3 — Roda.** Quatro raízes, dez efeitos de primeira ordem, vinte de segunda, vinte e nove
de terceira. Total: 59. Profundidade máxima de três níveis, com o corte declarado em prosa no fim
da seção 5.

**Etapa 4 — Autocrítica.** Quatro rebaixamentos de confiança, todos com valor original registrado
(tabela 7.1); três manutenções justificadas; um efeito identificado como extrapolação linear pura
e mantido com o rótulo; um ramo inteiro identificado como frágil quanto à adoção; uma disrupção
identificada como candidata a não se concretizar, com a consequência descrita.

**Etapa 5 — Saída.** Este documento.

### 12.2 As buscas feitas, e o que cada uma rendeu

| Busca | Rendeu |
|---|---|
| BitNet b1.58 / bitnet.cpp status 2026 | Repositório oficial e cartão do modelo. Base de D2. |
| Chrome built-in AI Prompt API Gemini Nano 2026 | A descoberta central do mapa (requisitos e ausência em celular) e o erro nº 1 da seção 8. |
| Apple Foundation Models 3B adoção 2026 | Página oficial da terceira geração; a maior parte dos textos de retorno era secundária, de blogs de desenvolvedor. |
| WebLLM / MLC / WebGPU benchmark 2026 | Achou o preprint *Llamas on the Web*, que virou a melhor fonte técnica sobre limites do navegador. Números soltos de tokens/s em blogs foram descartados por falta de metodologia. |
| Android AICore / ML Kit GenAI / LiteRT 2026 | Documentação oficial e o número do Pixel 9 Pro. Um resultado afirmava "Gemini Nano 4 exige 12 GB de RAM e SoC de topo"; não foi confirmado em fonte primária e **não entrou no documento**. |
| EU AI Act e modelos de pesos abertos | Estabeleceu o ponto sobre ausência de indenização contratual em implantação de pesos abertos, que sustenta `e10.1`. Fontes eram de escritório de advocacia e agregadores; nenhuma foi citada, e o efeito ficou com confiança média por isso. |
| r/LocalLLaMA / Ollama / GGUF estatísticas | Rendeu o erro nº 4 da seção 8. Só sobreviveram os dois números lidos direto nas plataformas. |
| Gargalo de banda de memória / NPU móvel | O balanço de Vikas Chandra e o artigo do arXiv. Base da seção 3.6. |
| Windows AI Foundry / Phi Silica / Copilot+ | A fonte mais rica do levantamento. Base de metade dos efeitos de D1. |
| TIC Domicílios / Brasil / celular único acesso | A nota sobre o Brasil. Base de `e7.2`. |
| Client-side scanning / Chat Control 2026 | Base do wildcard B e de `e10.2`. Os resultados divergiam entre si sobre o estado exato do trílogo em setembro de 2026; usei apenas a cronologia que aparece na fonte aberta, e evitei afirmar desfecho. |
| WebNN / W3C status 2026 | Documento normativo com data. Base da ressalva sobre NPU no navegador. |
| Modelo pequeno de qualidade 2026 | Buscava evidência de que a distância entre modelo pequeno e de fronteira encolheu. **Não deu em nada citável**: todos os resultados eram comparativos de blog com números sem procedência. O efeito que dependeria disso (`e4.1`) ficou com confiança média por falta de base, e não por convicção. |

### 12.3 Efeitos gerados e cortados

Cortados por serem genéricos demais — serviriam para qualquer tema, o que o solicitante pediu
explicitamente para excluir:

- "Surgem novas profissões ligadas a IA local." Serve para qualquer tecnologia; não diz nada.
- "As empresas precisam se adaptar." Idem.
- "Questões éticas ganham relevância." Idem.
- "A educação precisa formar profissionais para essa realidade." Idem.
- "Aumenta a demanda por profissionais de segurança." Idem.

Cortados por serem execução, não efeito:

- "Desenvolvedores adotam bibliotecas de inferência local." É como a coisa acontece, não uma
  consequência dela.
- "Aparecem tutoriais e cursos sobre Ollama." Sintoma, não efeito de sistema.

Cortados por já serem presente:

- "Modelos passam a ser distribuídos em formato quantizado." Já são: 203.308 no Hugging Face.
- "Ferramentas de linha de comando facilitam rodar modelos localmente." Já existem e são maduras.
- "O navegador passa a acessar a GPU para computação." Já acessa; WebGPU está em 87% da base.

Cortados por pertencerem a temas vizinhos da disciplina:

- Toda a cadeia sobre síntese de voz local — é o tema 13.
- Toda a cadeia sobre dado e identidade local-first — é o tema 17.
- Toda a cadeia sobre renderização 3D no navegador — é o tema 15. Sobrou aqui apenas a
  observação de que os dois usam a mesma porta (WebGPU) e vão disputar a mesma memória de vídeo,
  que é uma tensão real e ficou fora do mapa por estar na fronteira dos dois temas.

Cortado por ser bom demais para o formato de árvore:

- "A IA local e a IA de nuvem convergem para uma arquitetura híbrida em que o aparelho decide,
  a cada pedido, onde executar." Isto não é efeito de uma raiz — é efeito de todas as quatro
  simultaneamente, e a estrutura da roda não sabe representar convergência. Fica registrado aqui
  porque é, provavelmente, o que de fato vai acontecer, e nenhum dos 59 efeitos o diz sozinho.

### 12.4 Caminhos abandonados

**A comparação de custo em números.** Tentei montar uma comparação entre o custo de mil chamadas
na nuvem e o custo equivalente em energia local. Abandonei: exigiria número confiável de energia
por token no aparelho (só existe estimativa do BitNet, para um modelo específico) e preço de
tarifa, e o resultado seria uma conta com três suposições sustentando uma quarta. A conta
apareceria precisa e não seria.

**O mercado de assinaturas de IA.** `e1.2` afirma que assinaturas de função que o sistema passou
a dar de graça perdem razão de existir. Procurei evidência de cancelamento ou reposicionamento
real e não encontrei nada citável em fonte primária. O efeito ficou no mapa porque a lógica é
direta, mas sem base empírica — quem for usá-lo deve tratá-lo como raciocínio, não como achado.

**A cadeia de suprimentos de silício.** Havia um ramo sobre NPU, fabricantes e disputa de
mercado. Abandonei porque é o objeto de outra disciplina e porque a evidência disponível é toda
de relatório de mercado pago, que não posso abrir e não devo citar.

**A comparação com o passado.** Houve uma tentativa de estruturar o mapa pela analogia com a
descentralização de outras eras — o PC contra o mainframe, o MP3 contra a gravadora. Abandonei:
a analogia é sedutora e explicaria demais. O detalhe que a quebra é justamente o que este mapa
achou de mais interessante — no PC contra o mainframe, quem passou a ter a máquina passou a ter
o controle dela; aqui, quem passa a ter o modelo na máquina frequentemente **não** passa a ter o
controle dele. É uma descentralização de execução sem descentralização de governo, e não conheço
analogia histórica que sirva.

### 12.5 O que uma pessoa deveria conferir antes de usar este documento

1. O artigo do arXiv 2607.05475, na íntegra, pelo motivo da seção 8, item 3.
2. A tabela primária do Cetic.br para os números da TIC Domicílios 2025, em vez do veículo
   secundário usado aqui.
3. O estado do WebGPU no Firefox, que este documento deliberadamente não afirma.
4. A largura de bits da quantização da Apple, que não está publicada e que este documento não
   inventou.
5. O estado do trílogo europeu sobre varredura de conteúdo em setembro de 2026, a partir de fonte
   institucional, e não do sítio de um ativista — mesmo que a cronologia dele confira.
