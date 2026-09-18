---
tema: "Voz e som gerativos"
slug: voz-e-som-gerativos
autor_login: yrv
zona_de_interesse: "Percepção e mídia sintética"
data: 2026-09-17
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 11
efeitos_ordem_3: 7
tecnologias_citadas: [Suno, "Suno v6", "Suno v6-wild", "Suno v6-mini", "Suno Studio 2.0", "Advanced Split", "Split from Mix", "Auto Split", WavTool, Udio, "Udio v4", ElevenLabs, ElevenMusic, "Eleven Music API", "Stable Audio 3", aria, MusicGen, "MusicGen-Stem", Stemphonic, "Instruct-MusicGen", Demucs, "iZotope RX 12", Ableton, "Logic Pro", "FL Studio", Wwise, FMOD, MetaSounds, Soundraw, "1BITDRAGON", signalflow, pydub, Hacklily, Moshi, Mimi, MoshiRAG, "Kyutai Unmute", "GPT-Live", "GPT-Live-1", "GPT-Live-1 mini", "OpenAI Realtime API", "Advanced Voice Mode", Whisper, "Whisper Small", "Whisper Tiny", ChatTTS, Bark, "piper-tts-web", Piper, Kokoro, "Kokoro-82M", "Picovoice Orca", "Supertonic TTS 2", "Pocket TTS", "Kitten TTS Nano", "Soprano TTS", "Chatterbox-TTS-Turbo", XTTS-v2, "Apple SpeechAnalyzer", SpeechTranscriber, SpeechDetector, SFSpeechRecognizer, "Apple Personal Voice", "Live Speech", "@react-native-ai/apple", "expo-ai-kit", espnet, "pytorch/audio", "Qwen3-Omni", "Qwen3-ASR", "Qwen3-ForcedAligner", Ollama, "llama.cpp", "Raspberry Pi 5", MLX, AudioSeal, SynthID, "Content Credentials", DDEX, Spotify, Deezer, Songkick, TuneCore, Believe, BMG, "Warner Music Group", "Universal Music Group", GEMA, RIAA, "NO FAKES Act", "ELVIS Act", "PL 2338/2023", "AI Act art. 50", "Landgericht München I", Hallwood Media, "Xania Monet", PastPort]
fontes: 27
confianca: media
experimento: "O teste do conserto — a turma recebe uma peça pronta (uma música gerada e um diálogo falado com um agente) e uma ORDEM DE DEFEITO específica ('tire o prato do refrão', 'você entendeu errado, era o outro endereço'), e tem de consertar por três rotas — recomeçar do zero, separar em canais e corrigir fora, ou gerar já em canais separados; mede-se quantas vezes foi preciso RECOMEÇAR, quantas vezes o conserto quebrou outra coisa, e quanto tempo até um terceiro que não participou aceitar o resultado"
skill_usada: futurizacao-yrv
publico_ok: false
---

## 1. Resumo

O limite que definia este tema caiu enquanto o tema estava sendo escrito. A frase de referência da
disciplina — a música gerada "**não entrega os canais separados**" — deixou de ser verdadeira em
**11 de junho de 2026**, quando a Suno publicou o *Advanced Split*, separação por escolha entre
"quase 100 instrumentos, da bateria ao didgeridoo", e terminou de cair em **13 de agosto de 2026**,
com o **Suno Studio 2.0**: gravação e edição de MIDI na linha do tempo, sintetizador wavetable
embutido, automação de faixa e exportação **multitrack e de stems em 32 bits / 48 kHz**. O gerente
de produto do Studio, Henry Phipps, enunciou a mudança sem rodeio: o texto do prompt "não
substitui" tocar um teclado MIDI ou gravar com um microfone. A música gerada virou **editável**, e
a pergunta que o mapa tem de responder deixou de ser *"o que acontece quando a música nasce
inteira?"* e passou a ser *"o que acontece quando ela nasce inteira e ainda assim pode ser
desmontada?"*.

Do lado da fala, a data é **8 de julho de 2026**: o GPT-Live substituiu o Advanced Voice Mode como
experiência padrão de voz para, segundo a OpenAI, **mais de 150 milhões de pessoas por semana**, e
o fez mudando a arquitetura, não a qualidade — o sistema passou a **ouvir e falar ao mesmo tempo**,
decidindo "muitas vezes por segundo" se fala, escuta, pausa ou apenas acusa recebimento. O modelo
de voz de 2023 tinha cerca de **1.700 ms** de ida e volta; o *full-duplex* elimina a própria
espera pelo silêncio como sinal de que chegou a sua vez. Na ponta aberta, o Moshi da Kyutai faz o
mesmo com **160 ms teóricos** (80 ms de quadro do codec Mimi + 80 ms de atraso acústico), pesos em
CC-BY 4.0, e uma implementação em MLX que roda **no iPhone e no Mac**.

Há um terceiro movimento, e é o que mais reorganiza o resto: **a voz e o catálogo viraram objeto de
contrato e de sentença.** Em **31 de julho de 2026** o Landgericht München I decidiu, em *GEMA v.
Suno*, que treinar em repertório protegido infringe direito autoral **mesmo quando o treino ocorre
em servidores nos Estados Unidos**, recusou a exceção de mineração de texto e dados, considerou a
Suno diretamente responsável **também pelas saídas** e mandou informar a extensão do uso para
quantificar danos. Em **9 de setembro de 2026** a Suno lançou o **v6** — três modelos treinados com
catálogos licenciados de Warner, BMG e Believe/TuneCore — e **aposentou no mesmo dia todos os
modelos anteriores**. Em **18 de junho de 2026**, o Comitê Judiciário do Senado dos EUA aprovou por
unanimidade o **NO FAKES Act** (S. 4591), que cria um direito federal de propriedade intelectual
sobre a própria voz e imagem.

Três disrupções-raiz saem daí, e nenhuma delas é "a IA melhorou":

1. **A fala deixa de ser comando e vira turno** — e o que se projeta deixa de ser um fluxo de
   diálogo com estados visíveis e passa a ser uma política de quando interromper, quando calar e
   quando confirmar. A porta de entrada é mercado novo (quem não usa tela) e a baixa do mercado
   (US$ 0,07–0,15 por minuto de agente de voz, contra US$ 29–42 por hora de atendente).
2. **A música gerada nasce em canais e entra na estação de trabalho** — o que rompe não é a
   composição, é a **produção de commodity** e o pressuposto de que material gerado é um bloco que
   não se conserta.
3. **A voz deixa de ser prova de quem fala e vira direito licenciado** — com catálogo, contrato,
   opt-in de artista e tribunal, de um lado; e, do outro, a biometria de voz perdendo função em um
   mundo onde clonar exige poucos segundos de áudio.

O que este mapa **não** encontrou, e é importante dizer: nenhuma evidência de que a voz esteja
substituindo a tela. O que os números mostram é adição, não substituição — 150 milhões de pessoas
usando voz *dentro* de um produto cuja interface principal continua sendo texto. E do lado da
música, a assimetria mais reveladora do ano inteiro: no Deezer, faixas totalmente geradas por IA
passaram de **mais de 50% das entregas diárias** em junho de 2026 (cerca de 90 mil por dia) e
continuam valendo **entre 1% e 3% das execuções**, das quais **até 85% são detectadas como
fraudulentas e desmonetizadas**. A oferta explodiu; a escuta não se mexeu. Quem projetar para 2031
supondo que uma coisa puxa a outra vai desenhar para um público que não existe.

A confiança geral deste mapa é **média**: o presente está bem ancorado (27 fontes abertas, quase
todas com data exata), a primeira ordem é defensável, e a terceira ordem é frágil por construção —
toda ela saiu com `confianca: baixa`, que é a resposta esperada num nível onde cada elo herda a
incerteza dos anteriores.

## 2. O tema

**O tema em uma frase.** O que acontece com a mídia e com a interação quando **a fala vira turno
conversacional rodando perto de quem fala** e **o som musical passa a ser gerado já estruturado,
editável e licenciado por contrato**.

**O que este mapa NÃO é** — a fronteira, que é a pergunta 1 da entrevista e o que impede o mapa de
inchar até virar "o futuro da tecnologia":

- **Não é imagem nem vídeo.** Mídia sintética visual é o tema 12. Quando um modelo gera áudio
  sincronizado junto com o vídeo, o fato entra aqui como estado da arte, não como raiz.
- **Não é IA no dispositivo em geral.** Isso é o tema 16. Aqui entra apenas a parte de **áudio e
  voz** — o que muda porque o som é contínuo, tem prazo de resposta humano e não admite espera.
- **Não é agente conversacional como arquitetura.** Memória, ferramentas, orquestração e avaliação
  de agentes são os temas 1 a 5. Aqui o objeto é o **canal sonoro**: o turno, a latência, o timbre,
  a mixagem, a prova de quem falou.
- **Não é acessibilidade como política pública.** Ela aparece como efeito, e aparece de propósito
  — mas o mapa não tenta avaliar programa de governo, só descrever o que a mudança técnica faz com
  a norma.

**Por que esta fronteira e não outra.** As duas rupturas do tema (interface e ofício musical)
tentam ser tratadas como uma só porque compartilham o substrato — modelos que produzem forma de
onda. Elas **não compartilham o incumbente**: quem perde na primeira é quem desenha tela e escreve
script de atendimento; quem perde na segunda é quem produz trilha de commodity. Tratá-las como uma
coisa só produziria efeitos genéricos ("a IA muda tudo"). Elas foram mantidas separadas até a
terceira raiz, que é onde de fato se encontram: **a voz** é ao mesmo tempo o canal da interface e o
instrumento da música, e é por isso que a regulação sobre voz atinge as duas ao mesmo tempo.

**Horizonte.** 2031. É o ano-alvo dos efeitos de primeira e segunda ordem. A terceira ordem
ultrapassa o horizonte em cinco dos sete casos, e isso está declarado efeito a efeito.

**Público.** Quem projeta mídia e interação: designer de interação, desenvolvedor, quem produz som
para produto, jogo e audiovisual, quem decide arquitetura de interface.

**Recorte.** Global, com uma nota sobre o Brasil sempre que o efeito muda de forma aqui — e ele
muda em pelo menos três pontos: o áudio de WhatsApp como formato social dominante, o PIX como
instrumento de transferência irreversível, e o marco legal de IA ainda não votado.

**Viés.** Neutro. Nenhum dos três cenários da seção 9 foi escrito para vencer.

**O falsificador declarado.** Este mapa cai se aparecer (a) evidência de que a adoção já passou da
maioria inicial na curva de Rogers — caso em que não é tendência, é mercado; ou (b) evidência de
que a tecnologia não rompe nada, só melhora o que já existia — caso em que a Fase 2 errou e o que
está aqui é H2−, inovação que faz o presente durar mais. Os dois testes são aplicados na seção 7,
efeito a efeito, e um deles derrubou parte do mapa.

## 3. Onde isso está hoje

Esta seção é o presente verificado. Tudo aqui tem data e fonte aberta nesta sessão; o que não pude
abrir está marcado como não apurado, aqui e na seção 12.

### 3.1 A fala: o turno passou a ser a unidade

- **8 de julho de 2026 — GPT-Live.** A OpenAI substituiu o Advanced Voice Mode pelo GPT-Live, que é
  *full-duplex*: processa entrada e gera saída ao mesmo tempo, decidindo muitas vezes por segundo
  entre falar, escutar, pausar e acusar recebimento, em vez de esperar o silêncio para identificar
  o fim do turno. A empresa declara **mais de 150 milhões de usuários semanais** de voz e ditado.
  Free recebe o `GPT-Live-1 mini`; Go, Plus e Pro recebem o `GPT-Live-1`. **Não** entrou no
  lançamento: API, contas Business/Enterprise/Edu, e voz com vídeo.
- **Moshi / Mimi (Kyutai).** Modelo de fala e texto full-duplex que modela **dois fluxos de áudio
  simultâneos** — o do sistema e o do usuário — e mantém um "monólogo interior" em texto.
  Latência teórica de **160 ms**, prática de até **200 ms** numa GPU L4; codec Mimi a **1,1 kbps**,
  **12,5 Hz** de taxa de quadro sobre áudio de 24 kHz. Código MIT/Apache-2.0, **pesos CC-BY 4.0**,
  e implementação MLX para **inferência no iPhone e no Mac**. Em **30 de abril de 2026** a Kyutai
  publicou o MoshiRAG, sobre recuperação assíncrona de conhecimento em modelos full-duplex — abri a
  página e ela traz título e data, mas não latência, tamanho nem licença.
- **Reconhecimento no dispositivo virou serviço do sistema operacional.** O `SpeechAnalyzer` da
  Apple, anunciado na WWDC25 e distribuído no iOS 26 / macOS Tahoe 26, roda inteiramente local. Em
  benchmark publicado em **14 de julho de 2026** pela equipe do Inscribe, sobre LibriSpeech:
  **2,12% de WER** em fala limpa e **4,56%** em fala difícil, contra **3,74% / 7,95%** do Whisper
  Small e **9,02% / 16,25%** do antigo `SFSpeechRecognizer` — e processando o áudio em cerca de um
  terço do tempo. Do lado de quem integra, o ponto não é a acurácia: os modelos ficam num catálogo
  de ativos **do sistema**, fora do pacote do aplicativo, e a transcrição acontece **sem chave de
  API e sem nuvem**. O teste foi só em inglês; resultado com sotaque, vários falantes ou microfone
  distante pode ser outro.
- **29 de janeiro de 2026 — Qwen3-ASR.** Modelos de **0,6 B e 1,7 B** parâmetros, **Apache-2.0**,
  30 idiomas (inclusive português), 22 dialetos chineses, inferência local e em streaming, 1,63% de
  WER no LibriSpeech limpo, e reconhecimento de **voz cantada**. Um reconhecedor de estado da arte
  aberto que cabe num telefone deixou de ser notícia em 2026.
- **Síntese de fala no dispositivo, medida.** O comparativo do Picovoice sobre dez motores locais
  mostra a faixa real: **106 ms** até a primeira fala e **7 MB** de modelo no extremo eficiente
  (Orca, comercial), **1.720 ms** e 2,6 GB de pico no Piper (GPLv3), e 48.281 ms e 7,5 GB no
  extremo pesado. Abaixo de 45 MB — o que cabe em web e embarcado — a lista praticamente se esvazia.
  Licenças abertas existem e são reais: Apache-2.0 (Kokoro, Pocket TTS), MIT (Soprano, Supertonic).
- **O que ainda NÃO existe, e é a precondição desta raiz:** full-duplex **inteiro** (escutar, falar
  e raciocinar ao mesmo tempo) rodando local num aparelho comum. O que é full-duplex hoje é de
  nuvem (GPT-Live); o que é local hoje é meio-duplex em cadeia — reconhecer, pensar, sintetizar —
  com 8 a 25 segundos de ida e volta num Raspberry Pi 5 com modelo de 1 a 4 B, segundo a literatura
  de montagem caseira que apareceu nas buscas e que **não abri em fonte primária**.

### 3.2 A música: o bloco virou sessão

- **11 de junho de 2026 — Advanced Split (Suno).** Três modos de separação: *Auto Split* (12
  categorias de stem), *Split from Mix* (um elemento e "todo o resto") e *Advanced Split*, que
  **reconstrói cada stem do zero com o modelo mais recente**, escolhendo entre quase 100
  instrumentos. Advanced Split é exclusivo do tier Premier.
- **13 de agosto de 2026 — Suno Studio 2.0.** MIDI (importar, gravar, editar na linha do tempo,
  tocar pelo teclado do computador), sintetizador wavetable, efeitos construídos pelo usuário,
  automação de faixa, barra de chat com contexto de sessão, e exportação **multitrack e de stems em
  32 bits / 48 kHz**. O Studio nasceu em setembro de 2025, depois da compra da WavTool — uma
  estação de trabalho de navegador. Studio 2.0 é **só Premier** (US$ 24–30/mês).
- **10 de fevereiro de 2026 — Stemphonic (ICASSP 2026).** Wu, Zhu, Caceres, Huang e Bryan: geração
  de um **conjunto variável de stems sincronizados em uma única passada de inferência**, com ruído
  inicial compartilhado e texto específico por stem, e **controle de atividade por stem** para
  orquestrar camadas no tempo. Acelera a geração do mix completo em **25 a 50%**. Isto é diferente
  de separar depois: aqui a música **nasce** em canais.
- **Janeiro de 2025 — MusicGen-Stem.** Rouard, San Roman, Adi e Roebel (ICASSP 2025): primeiro
  modelo multi-stem autorregressivo aberto capaz de gerar e **editar** baixo, bateria e "outros" em
  músicas existentes ou geradas.
- **9 de julho de 2026 — aria.** Spanio e Rodà põem o pipeline completo de texto-para-música do
  **Stable Audio 3** (1,2 bilhão de parâmetros) para rodar quantizado em **CPU comum e em Raspberry
  Pi 5** com 8 GB: 8 bits sem perda mensurável de qualidade, 4 bits com custo pequeno, velocidade
  igual ou superior à implementação oficial e inicialização cerca de **sete vezes** mais rápida. Um
  gerador de música deixou de exigir data center.
- **O que ainda NÃO existe, e é a precondição desta raiz:** o stem gerado ainda **não é fonte**. Ele
  é resultado de uma separação muito boa, e separação deixa vazamento — som de instrumento vizinho,
  qualidade metálica em material comprimido, necessidade de reparo espectral antes de servir para
  produção comercial. A cobertura técnica de 2026 é consistente nesse ponto, e eu **não a abri em
  fonte primária**; registro como não apurado, e é uma das coisas que o experimento da seção 10
  existe para medir em sala.

### 3.3 O mercado: a oferta explodiu e a escuta não se mexeu

- **Deezer, junho de 2026:** cerca de **90.000 faixas totalmente geradas por IA por dia**, **mais
  de 50%** de todas as entregas diárias no pico. Em abril de 2026 eram **75.000 por dia (44%)**;
  pouco mais de um ano antes, 10.000. Foram **13,4 milhões** de faixas detectadas e etiquetadas ao
  longo de 2025.
- **E, no mesmo lugar:** música gerada por IA vale **1% a 3% do total de execuções**, porque fica
  fora de recomendação algorítmica e de playlist editorial; **até 85%** dessas execuções foram
  identificadas como fraudulentas e desmonetizadas, contra **8%** de fraude no catálogo inteiro. A
  detecção declara 99,8% de acurácia — erra cerca de 2 em 1.000 faixas de IA e marca por engano
  menos de 1 em 10.000 faixas humanas.
- **O dado mais desconfortável da pesquisa de público** (Ipsos, 9.000 pessoas em 8 países, citada
  pela Deezer): **97% não distinguiram** música de IA de música humana em teste cego; **80%**
  querem que a música de IA seja rotulada; **52%** acham que ela não deveria aparecer nas paradas
  principais ao lado da música humana. Rotular é uma demanda de **procedência**, não de qualidade —
  as pessoas pedem etiqueta justamente porque não ouvem a diferença.
- **25 de setembro de 2025 — Spotify.** Três políticas de uma vez: proibição de clone de voz e
  falsificação sem autorização ("imitação vocal só é permitida quando o artista imitado autorizou o
  uso"); filtro de spam contra upload em massa, duplicata com metadado alterado, manipulação de SEO
  e faixa pouco acima de 30 segundos; e adoção do padrão **DDEX** de divulgação de IA nos créditos
  — voz, instrumentação, pós-produção —, recusando explicitamente "um falso binário onde a música
  tem de ser categoricamente de IA ou não". **75 milhões** de faixas de spam removidas em doze
  meses.

### 3.4 O direito: de processo a arquitetura

- **29 de outubro de 2025 — UMG × Udio.** Acordo compensatório, licenças de fonograma e edição, e
  uma plataforma licenciada para 2026 que junta criação, consumo e streaming. Durante a transição,
  o produto atual da Udio segue no ar dentro de um **jardim murado**, com fingerprinting e filtro.
- **25 de novembro de 2025 — WMG × Suno.** Acordo e fim do litígio. A Suno comprou a **Songkick**.
  Em 2026: modelos licenciados novos substituindo os antigos, download só em conta paga, teto
  mensal de download, e controle do artista sobre nome, imagem, semelhança, **voz** e composição.
- **3 de setembro de 2026 — os limites entraram em vigor.** Anunciados em 10 de agosto: **7
  downloads vitalícios** de teste no free, **20/mês** no Pro, **60/mês** no Premier, sem limite
  para quem exporta do Studio. A justificativa declarada: "limitar downloads torna mais difícil que
  agentes mal-intencionados exportem música em massa".
- **9 de setembro de 2026 — Suno v6.** Três modelos (v6, v6-wild, v6-mini) treinados com catálogos
  licenciados de Warner, BMG e Believe/TuneCore. **Todos os modelos anteriores foram aposentados no
  mesmo dia.** As músicas já feitas continuam tocando; as novas nascem no v6.
- **31 de julho de 2026 — GEMA v. Suno, Landgericht München I.** Quatro atos proibidos sobre seis
  composições: reprodução para treino **ainda que em servidores nos EUA**; reprodução por
  memorização nos pesos; comunicação ao público ao oferecer o modelo; e reprodução e comunicação
  **das saídas**. O tribunal afastou a exceção de mineração de texto e dados da Diretiva 2019/790,
  responsabilizou a Suno diretamente pelas saídas e determinou que informe a extensão do uso para
  quantificar danos. **Não transitou em julgado** — espera-se recurso ao Oberlandesgericht München.
- **18 de junho de 2026 — NO FAKES Act (S. 4591).** Aprovado por unanimidade no Comitê Judiciário
  do Senado. Cria direito federal de controle sobre réplicas digitais de voz e imagem para
  **qualquer pessoa**, com responsabilidade de plataforma que hospeda sabendo da falta de
  autorização e regime de notificação e retirada. Exceções de Primeira Emenda (jornalismo, paródia,
  crítica) e para pesquisa não comercial. Não revoga leis estaduais anteriores a 2 de janeiro de
  2025, como o ELVIS Act do Tennessee. Segue para o plenário; **ainda não é lei**.
- **Fevereiro de 2026 — ElevenLabs a US$ 11 bilhões** (Série D de US$ 500 milhões), com **US$ 500
  milhões de receita recorrente anual** em maio de 2026 — mais que o dobro do valuation da Suno
  (US$ 5,4 bi em junho de 2026). Em setembro de 2026 fechou com a UMG um acordo plurianual para uma
  plataforma de **co-criação de fã**: remix, mashup, "novas interpretações" e "experiências vocais
  personalizadas" com música de artistas participantes.
- **Brasil, situação em 17/09/2026:** o **PL 2338/2023** foi aprovado no Senado e continua na
  Câmara. A votação prevista para dezembro de 2025 foi adiada; a cobertura que abri aponta como
  pontos em disputa exatamente o uso de obras protegidas em treino — com o argumento de evitar que
  o desenvolvimento tecnológico justifique prática predatória na economia da cultura — além de
  reconhecimento facial e da retirada de salvaguardas trabalhistas durante a tramitação na Câmara.
  Cobertura secundária menciona relatório e votação em maio de 2026; **não consegui apurar** em
  fonte que eu tenha aberto se a votação em plenário ocorreu.

### 3.5 A fraude: o custo do ataque caiu antes de a defesa mudar

- **20 de março de 2026 — Canaltech.** Golpe de voz clonada por WhatsApp descrito como realidade
  corrente no Brasil: o criminoso liga, deixa a vítima falar, coleta o áudio e treina o clone —
  "quanto mais você responder aquela ligação e continuar falando, mais perfeita ficará a
  clonagem" (Giovanni La Porta, vortice.ai). O vetor é o **áudio de WhatsApp** se passando por
  familiar, e a matéria é explícita sobre por quê: mensagem de áudio levanta menos suspeita que
  texto.
- **O que eu não apurei, e não vou fingir que apurei.** Circulam nas buscas números fortes — 400%
  de crescimento de deepfake de voz no Brasil, salto de 0,1% para 6,5% das fraudes financeiras
  detectadas, US$ 3,7 bilhões de perda global documentada, três segundos de áudio bastando para um
  clone, US$ 600 mil de perda média por incidente. **Nenhum deles veio de fonte que eu tenha
  aberto.** Ficam registrados na seção 12 como alegação não verificada, e nenhum efeito deste mapa
  se apoia neles.
- **A contramedida existe e é frágil.** O AudioSeal (Meta, ICML 2024, licença MIT inclusive dos
  pesos) faz marca d'água localizada em fala, resiste a compressão, recodificação e ruído, e detecta
  **até duas ordens de magnitude mais rápido** que os anteriores — o que o torna viável em tempo
  real. A literatura de 2025–2026 que apareceu nas buscas relata vulnerabilidade a ataques
  específicos e adoção limitada entre plataformas geradoras; li os títulos e resumos nos resultados,
  **não abri os artigos**, e trato isso como sinal e não como fato estabelecido.

### 3.6 O que é estado da arte e por isso NÃO vira raiz

Registro aqui, de propósito, o que a Fase 2 recusou e que costuma ser confundido com tendência:
transcrição automática no dispositivo (virou serviço do sistema operacional), síntese de voz de
qualidade por API (preço estável, falha documentada, contratação de rotina), separação de fontes
como técnica (oito motores comparáveis no mercado, integrada em estação de trabalho comum),
geração de música por prompt a partir de texto (mais da metade das entregas diárias de uma
plataforma de massa), voz pessoal sintetizada para acessibilidade (Personal Voice: 150 frases
lidas, treino **no aparelho**, durante a noite, com o aparelho carregando e bloqueado; MOS 3,68
contra 3,85 do original, similaridade 3,8 de 5 — publicado em dezembro de 2023 e distribuído desde
o iOS 17). A justificativa teste a teste está em 4.0.

## 4. As disrupções-raiz

### 4.0 A triagem que precede esta seção

A Fase 2 da skill roda cinco testes, em ordem: **T1 régua** (muda o que é possível, ou só a
velocidade e o custo?), **T2 substituição** (sem isto, um time competente mudaria o **objetivo** ou
só aceitaria mais custo e prazo?), **T3 por que agora** (sinal datado e verificável dos últimos 24
meses), **T4 precondição faltante** (consigo nomear algo específico que ainda falta acontecer?) e
**T5 rotina** (caminho padrão de instalação, preço estável, falhas documentadas, contratação como
skill comum ⇒ **maduro**). Uma reprovação em T1, ou uma aprovação em T5, encerra.

**MADURO — recusado, com o teste que reprovou cada um:**

- **Transcrição de fala no dispositivo** — aprova **T5**. Está no caminho padrão de instalação:
  modelo no catálogo do sistema, fora do pacote do aplicativo, **sem chave de API e sem nuvem**,
  com WER melhor que o Whisper Small. Quando a capacidade vira chamada de sistema operacional, ela
  deixou de ser tendência e virou infraestrutura. Entra como **substrato**.
- **Síntese de voz por nuvem** — aprova **T5**: preço estável, integração documentada, US$ 500
  milhões de receita recorrente anual em um só fornecedor. É negócio consolidado, não emergente.
- **Assistente de voz por nuvem com palavra de ativação** — aprova **T5**, e reprova **T1**: o
  ciclo "acorda, comanda, responde" não mudou o que é possível; mudou quem atende.
- **Separação de fontes (stem separation) como técnica** — aprova **T5**. Existe desde o Demucs, há
  oito motores comparáveis no mercado em 2026, e está embutida em estação de trabalho comum. É
  **substrato** da raiz 2, não a raiz.
- **Geração de música por prompt a partir de texto** — aprova **T5**, e é exatamente o que a régua
  da disciplina manda descartar: **mais da metade das entregas diárias** de uma plataforma de massa.
  Preço de assinatura estável, tiers publicados, limites de download em vigor desde 3 de setembro
  de 2026. Deixou de ser novidade e virou produto.
- **Sampler, estação de trabalho e plugin** — reprovam **T1**. É o **H1** deste tema: o sistema
  dominante que perde aderência.
- **Voz pessoal sintetizada para acessibilidade (Personal Voice)** — reprova **T3**: o sinal é de
  maio/setembro de 2023 e a pesquisa é de dezembro de 2023. Fora da janela de 24 meses. Entra na
  seção 3 e reaparece como **efeito**, não como causa.
- **Áudio sincronizado gerado pelo mesmo modelo de vídeo** — reprova **T1 neste mapa**, por
  recorte: é o tema 12. Entra como fato do presente.
- **Marca d'água de áudio (AudioSeal, SynthID)** — passa T3, mas reprova **T2**: sem ela, ninguém
  muda o objetivo; aceita-se detectar por outro meio, ou não detectar. É **condição de contorno** e
  **força contrária**, não motor. Reaparece na seção 7.

**EMERGENTE que sobrou — passa T1, T3 e T4:**

- Conversa **full-duplex** (escutar e falar ao mesmo tempo, com interrupção e sobreposição).
- Pilha de fala **local** de qualidade — reconhecedor aberto de 0,6 B, sintetizador de 7 MB a 106
  ms, pesos abertos rodando em telefone.
- Música gerada **nativamente em canais** (Stemphonic, MusicGen-Stem) e geração **dentro** de uma
  estação de trabalho (Studio 2.0).
- Geração de música **no dispositivo** (aria/Stable Audio 3 quantizado em Raspberry Pi 5).
- **Licença como componente de arquitetura** — o catálogo que o modelo pode usar passa a definir o
  modelo (Suno v6; jardim murado da Udio; co-criação licenciada ElevenLabs/UMG).
- **Direito exclusivo sobre a própria voz** (NO FAKES; decisão de Munique; opt-in de artista).
- **Recuperação assíncrona em modelo full-duplex** (MoshiRAG) — passa T3, **reprova T4 por
  ignorância minha**: não consigo nomear o que falta porque a página que abri não traz números.
  Vai para a seção 6 como sinal fraco, não para a árvore.

**DISRUPTIVO — emergente, mais a competência que deixa de valer e a porta de entrada, nomeadas.**
São as três raízes abaixo. Todas em **H2+**: transição que abre caminho para o H3, e não inovação
que escora o presente. O melhor exemplo de **H2−** neste tema, e que por isso ficou de fora, é a
IA generativa embutida na estação de trabalho tradicional como assistente — ela faz o fluxo atual
durar mais, e se disfarça de tendência.

### 4.1 Raiz 1 — A fala deixa de ser comando e vira turno

**O que rompe.** Rompe o pressuposto de que **interação tem estado visível e botão de enviar** — e,
mais especificamente, a competência de projetar **fluxo de diálogo roteirizado**: a árvore de
decisão do atendimento eletrônico, o menu falado, o par pergunta-resposta com espera de silêncio. O
que deixa de valer não é "falar com máquina", que já era comum; é o **roteiro**. Numa conversa
full-duplex não existe o momento em que o sistema "recebe" o enunciado completo para então decidir:
ele decide muitas vezes por segundo, enquanto o outro ainda fala. Quem projetava o fluxo passa a
ter de projetar uma **política de turno** — quando interromper, quando calar, quando confirmar,
quando deixar passar. Nenhuma ferramenta de desenho de fluxo representa isso hoje.

**Por onde entra.** Por **mercado novo** e pela **baixa**, nesta ordem de força:
- *Mercado novo*: quem não usa a interface anterior — dirigindo, cozinhando, com as mãos ocupadas,
  com baixa fluência em texto, com visão reduzida, idoso. Não é cliente que o incumbente disputa; é
  não-cliente que vira cliente.
- *Baixa do mercado*: o atendimento que ninguém quer fazer. A faixa de preço citada na cobertura
  de mercado — cerca de **US$ 0,07 a 0,15 por minuto** de agente de voz contra **US$ 29 a 42 por
  hora** de atendente humano — é a assinatura clássica da entrada por baixo: serviço pior em várias
  dimensões, barato o bastante para atender quem não era atendido. **Não abri a fonte desses
  números**; eles ilustram o mecanismo, e nenhum efeito depende deles.

**Por que agora e não há cinco anos.** Quatro sinais datados:
- **8 de julho de 2026**: GPT-Live torna full-duplex o padrão para mais de 150 milhões de usuários
  semanais de voz. Deixou de ser demonstração.
- **Moshi**: 160 ms teóricos, dois fluxos simultâneos, **pesos CC-BY 4.0** e inferência MLX em
  iPhone e Mac. O full-duplex tem versão aberta.
- **14 de julho de 2026**: benchmark mostra reconhecimento **local** da Apple à frente do Whisper
  Small em acurácia e cerca de três vezes mais rápido — sem chave de API.
- **29 de janeiro de 2026**: Qwen3-ASR de 0,6 B em Apache-2.0, 30 idiomas, streaming, local.

Há cinco anos nenhuma dessas quatro coisas existia: latência de fala era de segundos, full-duplex
era pesquisa, e reconhecimento decente exigia nuvem.

**O que ainda falta acontecer.** Falta o **full-duplex inteiro rodando local num aparelho comum**.
Hoje o full-duplex é de nuvem e o local é meio-duplex em cadeia — reconhecer, pensar, sintetizar —
com ida e volta de segundos em hardware modesto. Enquanto essa precondição não cair, "voz local" e
"voz conversacional" são duas coisas diferentes, e boa parte do discurso do setor as trata como uma
só. **É desta precondição que sai a prova P5 da Fase 5**, e ela derrubou efeito.

### 4.2 Raiz 2 — A música gerada nasce em canais e entra na estação de trabalho

**O que rompe.** Rompe a competência de **produzir arranjo e mixagem de commodity sob encomenda** —
a trilha de fundo, o leito de ambiente, a cama sonora de vídeo institucional — e, junto com ela, o
pressuposto que sustentava a crítica mais afiada ao gerador de música: o de que **o material gerado
é um bloco que não se conserta**. Quando o resultado sai em 12 canais, em 32 bits, com MIDI
exportável e automação de faixa, o que morre não é a composição: é a etapa intermediária entre "ter
a ideia" e "ter a peça". E morre também a separação de fontes como serviço, porque a música que
nasce em canais não precisa ser desmontada.

**Por onde entra.** Por **mercado novo**, principalmente:
- *Mercado novo*: quem não é músico e nunca contratou um — o criador de conteúdo, o estudante de
  jogo, o professor. É o público do `1BITDRAGON` e afins: fazer música sem teoria musical.
- *Baixa do mercado*: a trilha genérica que nenhum compositor quer fazer, e que o cliente comprava
  de catálogo porque não tinha alternativa mais barata.

**Por que agora e não há cinco anos.** Quatro sinais datados:
- **11 de junho de 2026**: Advanced Split reconstrói cada stem com o modelo mais recente,
  escolhendo entre quase 100 instrumentos.
- **13 de agosto de 2026**: Studio 2.0 com MIDI, automação e exportação multitrack 32/48 —
  explicitamente enunciado pelo fabricante como reconhecimento de que o prompt "não substitui" um
  teclado e um microfone.
- **10 de fevereiro de 2026**: Stemphonic gera conjunto variável de stems sincronizados **numa
  passada**, com controle de atividade por stem, acelerando o mix completo em 25 a 50%.
- **9 de julho de 2026**: aria roda o Stable Audio 3 (1,2 B) quantizado em Raspberry Pi 5.

Há cinco anos, o estado da arte era gerar um trecho de áudio de qualidade duvidosa em um bloco só.

**O que ainda falta acontecer.** Falta o **stem gerado ser fonte, e não resultado de separação**.
O Stemphonic mostra o caminho em artigo; o produto de massa ainda entrega canais reconstruídos, com
vazamento e artefato reconhecíveis, e reserva o modo bom ao tier mais caro. Enquanto o stem for
derivado, "editável" quer dizer "corrigível com esforço", não "aberto". A segunda precondição é
comercial e igualmente decisiva: **o recurso está atrás do Premier**; a edição fina é do assinante
caro, e é isso que decide se a raiz atinge o mercado inteiro ou só o topo.

### 4.3 Raiz 3 — A voz deixa de ser prova de quem fala e vira direito licenciado

**O que rompe.** Rompe duas coisas de uma vez, em direções opostas, e é por isso que esta raiz é a
mais importante do mapa:
- Do lado da **verificação**: a voz deixa de funcionar como fator de autenticação e como prova
  informal de identidade. O que morre é a biometria de voz no atendimento bancário, e morre também
  o estatuto do **áudio recebido** como sinal de que a pessoa é quem diz ser — no Brasil, o áudio
  de WhatsApp.
- Do lado da **produção**: morre o modelo de negócio do gerador treinado sem licença. O que passa a
  definir o modelo não é a arquitetura: é **o catálogo que ele tem permissão de usar**. Licença
  virou componente, não cláusula.

**Por onde entra.** Por **mercado novo**, nos dois sentidos:
- O direito sobre a própria voz vira **ativo negociável** por qualquer pessoa, não só por celebridade
  — é literalmente o que o NO FAKES Act cria. Surge um mercado de consentimento que não existia.
- Do outro lado, a fraude entra por onde a verificação é mais barata: não ataca o cofre, ataca a
  ligação para a filha.

**Por que agora e não há cinco anos.** Quatro sinais datados:
- **29/10/2025 e 25/11/2025**: UMG×Udio e WMG×Suno transformam litígio em licença, com jardim
  murado, fingerprinting e controle do artista sobre **voz**.
- **31/07/2026**: Munique decide que treino em servidor nos EUA infringe direito alemão, recusa a
  exceção de TDM e responsabiliza a empresa **pelas saídas**. Primeira decisão europeia grande nesse
  sentido; **não transitou em julgado**.
- **18/06/2026**: NO FAKES Act aprovado por unanimidade no comitê, com regime de notificação e
  retirada para plataformas.
- **9/09/2026**: Suno v6 nasce licenciado e aposenta os modelos anteriores **no mesmo dia** — a
  licença reescreveu o produto, não o marketing.

**O que ainda falta acontecer.** Faltam duas coisas, e nenhuma é técnica: (a) uma **decisão final**
— a de Munique espera recurso, o NO FAKES não foi ao plenário, o PL 2338 não foi votado na Câmara; e
(b) um **método de verificação que sobreviva fora do arquivo**. A marca d'água resiste a compressão
e é rápida, mas é vulnerável a ataques específicos e tem adoção baixa entre geradores. Sem
verificação, o direito existe e não se exerce.

### 4.4 Uma nota sobre o que as três raízes NÃO dizem

As raízes 1 e 2 se **anulam parcialmente**, e a roda dos futuros não tem notação para isso — ela é
árvore, não grafo. A raiz 1 empurra a interação para longe da tela e para dentro do canal sonoro; a
raiz 2 devolve a música para dentro de uma **estação de trabalho visual**, com linha do tempo,
automação e MIDI. O mesmo tema, no mesmo ano, anda nas duas direções: a interface de consumo fica
menos visual e a interface de criação fica **mais**. Quem ler a árvore somando os galhos vai
concluir que tudo caminha para o som; não caminha.

## 5. A roda dos futuros

Método: **Futures Wheel** (Jerome C. Glenn, 1971; entrada na literatura em 1972). A regra de parada
não é de Glenn — a literatura não traz nenhuma — e é minha, declarada: **expando um nó apenas se o
filho mudar de ATOR ou de MECANISMO em relação ao pai**, e paro o galho na segunda ordem quando o
filho é o pai em outro volume, quando exige duas precondições não validadas ao mesmo tempo, quando
já é verdade hoje, ou quando só faz sentido com duas raízes. Os efeitos abaixo são os que
**sobreviveram** à Fase 5; os mortos estão na seção 12, com o `id` original e a prova que os matou —
e há lacunas de numeração aqui justamente por isso.

```yaml
roda:
  - disrupcao: A fala deixa de ser comando e vira turno, com conversa full-duplex e pilha de voz rodando perto de quem fala
    efeitos:
      - id: e1
        ordem: 1
        efeito: O atendimento por voz deixa de ser roteiro executado e vira política aplicada em tempo de execução, e o artefato que o time entrega deixa de ser um fluxograma de diálogo
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O desenho de interação por voz vira especialidade com ferramenta própria, porque nenhuma ferramenta de fluxo representa interrupção, sobreposição e recuo
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A formação em design de interação separa interface visível de interface por turno, e o portfólio passa a ser avaliado por gravação de sessão em vez de tela
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O silêncio, a pausa e a sobreposição viram parâmetros de produto ajustáveis, e a escuta contínua passa a ser o estado padrão do aparelho em vez da exceção acionada por palavra de ativação
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e2
        ordem: 1
        efeito: A voz vira a porta de entrada de quem a interface anterior não atendia, e o atendimento por texto deixa de ser o piso de acessibilidade de um serviço
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Atender em língua e sotaque locais fica mais barato do que manter uma tela traduzida e mantida, e serviços passam a nascer falados em vez de ganharem voz depois
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Falares regionais e línguas sem escrita padronizada entram nos sistemas por onde nunca entraram, e o registro do que foi dito vira acervo com valor e risco próprios
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Quem não pode falar, ou não pode falar em público, passa a ser excluído por padrão, e a alternativa silenciosa vira requisito de conformidade em vez de cortesia
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: A voz sintética pessoal sai do território da acessibilidade e vira configuração comum, e escolher com que voz se fala passa a ser um ato de identidade sujeito a etiqueta social
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: A música gerada nasce em canais separados e editáveis, e a geração entra na estação de trabalho
    efeitos:
      - id: e3
        ordem: 1
        efeito: O trecho gerado passa a ser corrigido em vez de descartado, e a unidade de trabalho deixa de ser a canção inteira e volta a ser o canal
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: A encomenda de trilha muda de objeto, e o cliente passa a comprar a sessão que produz a peça, com direito de alterá-la depois, em vez da peça fechada
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: O crédito musical desloca-se de quem tocou para quem decidiu, e a ficha técnica ganha uma linha de curadoria que hoje não existe em nenhum padrão de metadado
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Gerar música deixa de exigir rede, e a peça passa a nascer dentro do produto que a usa, no instante em que é usada
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Jogos e aplicativos passam a embarcar um gerador em vez de um acervo, e o tamanho do pacote deixa de crescer com a quantidade de música que a obra contém
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A trilha deixa de ser ativo entregue e vira comportamento do sistema, e o contrato de música em jogo migra de licença de faixa para licença de modelo
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: A música gerada localmente escapa da contagem porque não passa por plataforma, e o que o setor mede deixa de descrever o que as pessoas de fato ouvem
            sinal: fraco
            prazo: 2031
            confianca: baixa
  - disrupcao: A voz deixa de ser prova de quem fala e vira direito licenciado, com catálogo, contrato e tribunal
    efeitos:
      - id: e5
        ordem: 1
        efeito: A voz deixa de funcionar como fator de autenticação, e o que era prova de identidade passa a valer apenas como apresentação
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A verificação migra da voz para o canal, e passa-se a provar o aparelho, o número e o contrato em vez de provar quem está falando
            sinal: medio
            prazo: 2029
            confianca: media
          - id: e5.2
            ordem: 2
            efeito: O áudio deixa de ser o formato de confiança entre pessoas próximas, e combinações prévias de verificação entram na rotina doméstica como o cadeado do navegador entrou na compra online
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e6
        ordem: 1
        efeito: O gerador de som passa a ser definido pelo catálogo que tem permissão de usar, e a licença vira componente de arquitetura em vez de cláusula de rodapé
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O modelo não licenciado migra para pesos abertos e uso local, e a fiscalização perde o ponto único onde incidia
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A regulação desloca-se do gerador para a distribuição e para o pagamento, porque é ali que ainda existe um intermediário identificável
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: O artista passa a ter duas receitas distintas, a da obra e a do consentimento de treino e de voz, e a segunda é negociada por contrato em vez de arrecadada por execução
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: O acervo de quem nunca consentiu vira classe à parte no mercado de licenciamento, e obra anterior ao consentimento registrado passa a valer menos do que obra nascida com procedência
                sinal: fraco
                prazo: 2033
                confianca: baixa
```

### 5.1 Comentário em prosa — o que a árvore não representa

**Convergência 1 — o efeito que precisa de duas raízes: a voz sintética pessoal como credencial.**
Se a voz deixa de autenticar (raiz 3) e ao mesmo tempo a voz sintética pessoal fica trivial de
produzir no aparelho (raiz 1 + Personal Voice), aparece um objeto novo: uma voz que é *sua* por
contrato e por chave, não por biometria — assinada, revogável, portátil entre aplicativos. Isso não
está na árvore porque exige as duas raízes ao mesmo tempo, e a regra de parada manda tratá-lo aqui.
É, na minha leitura, o efeito de maior consequência do mapa inteiro, e o que eu observaria primeiro
para saber se este documento acertou.

**Convergência 2 — o stem como unidade de licença.** A raiz 2 produz canais; a raiz 3 produz
contrato. Junte: o objeto licenciado deixa de ser a faixa e passa a ser o **canal** — a linha de
baixo, a voz, o timbre. A infraestrutura de metadado do setor (DDEX, créditos) descreve obra e
papel, não canal. Se isso se confirmar, a primeira coisa a quebrar é o cadastro.

**A anulação parcial que já mencionei em 4.4.** As raízes 1 e 2 empurram em sentidos opostos quanto
ao papel da tela. A roda soma; a realidade não.

**Onde os prazos passam do horizonte.** Os sete efeitos de terceira ordem caem todos depois de
2031 — e1.1.1 em 2032, e2.1.1 em 2033, e2.2.1 em 2032, e3.1.1 em 2032, e4.1.1 em 2033, e6.1.1 em
2033 e e6.2.1 em 2033. Isso é permitido pelo formato e fica declarado: a primeira ordem cabe no
horizonte, a terceira o ultrapassa por natureza, e nenhum efeito de primeira ou segunda ordem
passa de 2031.

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — recuperação assíncrona dentro do turno (MoshiRAG, 30/04/2026).** Um modelo
full-duplex que busca conhecimento **sem parar de conversar** ataca o defeito mais visível do agente
de voz atual: o silêncio enquanto ele consulta. Abri a página; ela dá título e data e mais nada.
Se isso amadurecer, a diferença entre "assistente" e "interlocutor" some — e boa parte da primeira
ordem deste mapa acelera um ou dois anos.

**Sinal fraco 2 — o canal como objeto de primeira classe.** Stemphonic gera stems sincronizados
numa passada, com controle de atividade por stem. Se a indústria adotar, "editar música gerada"
deixa de significar separar e passar a significar **regerar um canal só**, com o resto congelado. É
a diferença entre remendar e reabrir a sessão.

**Sinal fraco 3 — geração de música em hardware de dezenas de dólares.** O aria põe o Stable Audio 3
num Raspberry Pi 5. O interessante não é o feito técnico, é a consequência de contagem: música que
nunca passa por servidor não aparece em estatística nenhuma. O setor inteiro se mede por execução.

**Sinal fraco 4 — o pedido de rótulo com 97% de indistinção.** 97% das pessoas não separaram IA de
humano em teste cego, e 80% querem rótulo assim mesmo. Isso não é demanda estética: é demanda de
**procedência**. Quem projeta interface de áudio em 2031 vai ter de exibir origem como hoje se
exibe cadeado.

**Sinal fraco 5 — a licença que reescreve o produto.** A Suno aposentou todos os modelos antigos no
dia em que lançou os licenciados. Um acordo comercial mudou o que o produto **é**, não o que ele
diz. Se virar padrão, "qual modelo você usa" passa a ser uma pergunta sobre catálogo.

**Sinal fraco 6 — o download como ponto de controle.** Limitar download a 20 ou 60 por mês
"para dificultar exportação em massa" transforma o gerador em algo mais próximo de serviço de
streaming do que de ferramenta. Quem gera passa a não possuir o que gerou.

**Wildcard A — um artista sintético lidera uma parada principal.** Já aconteceu em parte, o que
obriga a reformular o wildcard. Xania Monet — letras de Telisha "Nikki" Jones, música gerada na
Suno — foi, com "How Was I Supposed to Know?", **a primeira música gerada por IA a entrar em uma
parada de execução em rádio da Billboard**, estreando em 30º no Adult R&B Airplay, 20º no Hot R&B
Songs; "Let Go, Let God" chegou a 3º no Hot Gospel Songs; e o projeto assinou com a Hallwood Media
por **US$ 3 milhões** em setembro de 2025. O wildcard que **resta** é outro e mais forte: um artista
sintético em **número 1 da parada principal** (Hot 100 / Billboard 200), com 52% do público dizendo
que música de IA não deveria estar lá.

**Wildcard B — um tribunal manda desligar um modelo.** Munique proibiu atos e mandou informar danos.
O passo seguinte, tecnicamente disponível e ainda não dado, é ordem de **remoção de pesos** — apagar
a memorização. Se acontecer uma vez, o custo de treinar sem licença deixa de ser multa e passa a ser
perda do ativo.

**Wildcard C — uma fraude de voz em escala eleitoral ou bancária que force verificação obrigatória
de origem em telefonia.** O efeito e5.1 assume migração gradual da verificação. Um evento único
grande transforma gradual em compulsório, e antecipa em anos o que está em 2029.

**Wildcard D — o full-duplex local.** O dia em que um telefone comum sustentar conversa full-duplex
sem rede, as raízes 1 e 3 se fundem: a interface e a prova de identidade passam a viver no mesmo
lugar, e o aparelho vira a testemunha.

**Anti-wildcard — o que eu esperava encontrar e não encontrei.** Nenhuma evidência de substituição
da tela pela voz. Nenhuma evidência de que música gerada esteja tomando **escuta** (1% a 3%, com
85% de fraude dentro disso). E nenhuma evidência de queda documentada de emprego em atendimento
atribuída a agente de voz — a projeção mais citada nas buscas diz o contrário, que a maior parte da
interação continua humana até 2027, e **não abri essa fonte**.

## 7. Contra o próprio mapa

Esta seção é a Fase 5 aplicada, e ela cobrou preço: **cinco efeitos morreram** e **dois foram
rebaixados**. Os mortos estão na seção 12 com `id` e prova.

### 7.1 P1 — Extrapolação linear

Procurei efeito enunciável como "mais X" ou "menos X", sem ator novo.

- **e5.2 sobreviveu com ressalva.** "Combinação prévia de verificação na família" quase é "mais
  desconfiança". Sobreviveu porque muda o **mecanismo**: não é atitude, é protocolo — palavra
  combinada, devolução de chamada, canal alternativo. Se em 2028 isso ainda for atitude e não
  procedimento, o efeito estava errado.
- **e5.2.1 morreu por P1.** A terceira ordem que eu tinha escrito ("o protocolo doméstico vira
  norma social") é o pai em outro volume, com o mesmo ator e o mesmo mecanismo. Eliminado.
- **e1.2 passou raspando.** "Escuta contínua vira padrão" corre o risco de ser "mais escuta". Ficou
  porque o ator muda: quem decide deixa de ser o usuário (que apertava ou dizia a palavra de
  ativação) e passa a ser o sistema.

### 7.2 P2 — Velocidade de adoção

Procurei prazo que assume adoção mais rápida do que qualquer caso histórico comparável.

- **e2.1 rebaixado de `media` para `baixa`.** "Serviço nasce falado" em 2030 supõe velocidade de
  troca de canal em serviço público que nenhum caso comparável sustenta. O caso histórico que
  usei — a substituição do atendimento presencial pelo digital em serviço público brasileiro — levou
  mais de uma década e não se completou. Mantido no mapa, com confiança rebaixada.
- **e5.1.1 morreu por P2.** "O padrão passa a ser não atender ligação sem procedência" pressupõe
  adoção de verificação de origem em telefonia mais rápida do que o caso comparável disponível — a
  autenticação de chamada por assinatura criptográfica, que levou anos e não eliminou a chamada
  fraudulenta. Eliminado.
- **e6.2 sobreviveu.** Duas receitas distintas para o artista já têm precedente contratual em vigor
  (opt-in de artista nos acordos de 2025 e o acordo de co-criação de 2026). O prazo de 2030 é
  conservador em relação a isso.

### 7.3 P3 — Já aconteceu

Esta foi a prova mais destrutiva, e é a lição desta rodada: **o presente deste tema é mais rápido
que a descrição dele**.

- **e3.2 morreu por P3.** Eu havia escrito "o catálogo de trilha genérica perde a função de estoque".
  Isso já é verdade hoje: em maio de 2026 uma dupla de produção com 236 gravações e composições
  registradas processou a Suno alegando que as saídas desvalorizam e substituem música real — e o
  processo foi **desistido com prejuízo** em agosto de 2026, o que aliás enfraquece o argumento
  como evidência de dano, mas não altera o fato de que a substituição já está em curso. Eliminado,
  e o filho e3.2.1 morreu junto.
- **e1.2.1 morreu por P3.** "O selo de processamento local vira argumento de venda" já acontece: a
  pilha de fala da Apple é vendida como *sem chave de API e sem nuvem*, e é exatamente assim que a
  documentação para desenvolvedor a apresenta. Não é efeito futuro; é presente. Eliminado, e o fato
  foi para a seção 3.
- **A frase-âncora do próprio tema caiu por P3.** "Não entrega os canais separados" deixou de valer
  em junho e agosto de 2026. Não era efeito, era premissa — e por isso não está na seção 12: está
  reescrita na seção 1.
- **O wildcard caiu por P3 em parte.** "Artista sintético lidera uma parada" já aconteceu em parada
  secundária e em entrada de rádio. Reformulado na seção 6.

### 7.4 P4 — Força contrária

Para cada efeito, quem perde e o que essa pessoa pode fazer.

- **Contra a raiz 1**, perdem: a indústria de atendimento por script, os fornecedores de plataforma
  de fluxo de diálogo, e — silenciosamente — quem depende de **registro escrito**. Voz não deixa
  transcrição confiável por padrão, e a auditoria (bancária, jurídica, médica) exige texto. O
  contra-ataque é exigir transcrição gravada de tudo, o que reintroduz custo e risco de privacidade
  e freia a adoção onde ela pareceria mais fácil. **Este é o motivo real pelo qual e1 está em
  `media` e não em `alta`.**
- **Contra a raiz 2**, perdem: produtores de commodity e catálogos de trilha. O que podem fazer já
  estão fazendo — litigar. E a força contrária mais eficaz não é o processo: é o **preço**. O
  recurso que torna a música editável está no tier mais caro, e a plataforma acaba de **limitar
  download**. Um gerador que limita a saída não é substituto de estúdio; é assinatura. Foi isso que
  rebaixou e4.1 para `baixa`.
- **Contra a raiz 3**, perdem: fornecedores de biometria de voz e as empresas que a compraram. O que
  podem fazer é acrescentar prova de vivacidade e fatores adicionais — e conseguem, em parte. Por
  isso o efeito e5 não afirma que a voz desaparece da autenticação, e sim que deixa de **funcionar
  como fator**, virando apresentação.
- **e6.1 rebaixado de `media` para `baixa` por P4.** Eu supunha que o modelo não licenciado migraria
  para pesos abertos e escaparia. Mas a força contrária tem onde morder: pagamento, loja de
  aplicativo e distribuição. A decisão de Munique mostra que até o treino no exterior pode ser
  alcançado por regra de foro. A fuga para o aberto é menos livre do que parece.

### 7.5 P5 — Precondição única

Procurei galho inteiro pendurado numa só aposta.

- **A raiz 1 inteira depende de uma coisa: full-duplex útil.** Se o full-duplex se revelar
  incômodo — sistema que interrompe na hora errada, que "concorda" enquanto o usuário fala e o
  irrita —, e1, e1.1, e1.1.1, e1.2 e boa parte de e2 caem juntos. São cinco efeitos numa
  precondição, e o critério manda declarar isso alto: **este é o ponto mais frágil do mapa**.
  Mantive os efeitos porque a precondição é *testável agora* — é exatamente a metade da voz do
  experimento da seção 10.
- **e4.2 morreu por P5.** "A música gerada local escapa da contagem" pendurava num galho que exige
  que a geração local vire consumo relevante — precondição que o próprio mapa não sustenta (1% a 3%
  de execução, e nada indicando inversão). Eliminado, e o conteúdo virou sinal fraco 3.
- **A raiz 3 é a mais robusta**: não depende de uma aposta única, porque tem três apoios
  independentes (tribunal, legislativo, contrato comercial) e dois deles já produziram fato.

### 7.6 P6 — Camada (Causal Layered Analysis)

Passei os efeitos principais pelas quatro camadas de Inayatullah (1998).

- **Litania.** "90 mil músicas de IA por dia", "150 milhões de usuários de voz", "US$ 3 milhões para
  uma cantora que não existe". São manchetes verdadeiras e enganosas: a primeira descreve upload,
  não escuta; a segunda descreve disponibilidade, não preferência; a terceira descreve uma aposta de
  gravadora, não um mercado.
- **Causas sistêmicas.** Abaixo das manchetes há três mecanismos concretos: (a) o custo marginal de
  produzir áudio caiu para perto de zero enquanto o custo de **distribuir e ser ouvido** não caiu
  nada; (b) a remuneração por execução transforma volume em ataque econômico, e por isso 85% da
  execução de IA no Deezer é fraude — não é gosto, é arbitragem; (c) a licença virou barreira de
  entrada, o que favorece quem tem capital para contratar catálogo e empurra o resto para pesos
  abertos.
- **Visão de mundo.** O mapa inteiro repousa sobre duas crenças que hoje parecem naturais: **a de
  que a voz é identidade** e **a de que a música é obra de autor identificável**. Se a primeira
  cair — se voz virar apenas roupa, escolhida e trocada —, os efeitos e5, e5.1 e e5.2 mudam de
  sinal: não há perda a lamentar, há uma convenção sendo substituída. Se a segunda cair — se música
  funcional passar a ser tratada como utilidade, como a eletricidade —, então e3.1, e6.2 e e6.2.1
  descrevem a agonia de um regime e não o futuro de um mercado.
- **Mito e metáfora.** A metáfora que sustenta este tema é **a voz como assinatura**: algo que sai
  do corpo e prova que o corpo esteve ali. É uma metáfora recente e local — a identificação pela voz
  ao telefone tem cem anos, não mil. A metáfora concorrente, que já organiza a música sintética, é a
  **voz como instrumento**: timbre escolhido, afinado, trocado. Se a segunda vencer, "clonagem de
  voz" deixa de ser crime moral e vira licenciamento, e a seção 9 deste mapa aponta para o cenário
  desejável e não para o indesejável. Nenhum fato precisa mudar para isso acontecer.

### 7.7 Os dois falsificadores declarados na entrevista

- **"Se a adoção já passou da maioria inicial, não é tendência."** Aplicado, isto **matou parte do
  mapa**, e é por isso que a Fase 2 recusou tanta coisa: geração de música por prompt passou da
  maioria inicial (mais de 50% das entregas de uma plataforma de massa); transcrição local passou
  (virou API de sistema operacional); síntese por nuvem passou (meio bilhão de receita anual). O que
  sobrou está antes desse ponto: full-duplex local, stem nativo, licença como componente.
- **"Se a tecnologia não rompe nada, só melhora, então é H2−."** Aplicado, derrubou a IA generativa
  embutida em estação de trabalho tradicional como candidata a raiz, e derrubou a marca d'água. As
  três raízes sobreviveram porque em cada uma consigo nomear **a competência que deixa de valer** e
  **a porta de entrada**. Se um leitor discordar, é aí que tem de bater.

### 7.8 O que a bateria NÃO conseguiu derrubar

Nenhuma prova derrubou **e5** (a voz deixa de autenticar) nem **e6** (a licença vira componente de
arquitetura). São os dois efeitos mais bem ancorados do mapa: o primeiro tem sinal forte, força
contrária nomeada com razão para perder (o atacante precisa de segundos de áudio; o defensor precisa
de infraestrutura nova) e caso histórico comparável cuja velocidade sustenta o prazo — a pergunta de
segurança baseada em dado pessoal, que deixou de valer quando o dado pessoal virou commodity
vazada. Por isso **e5 é o único efeito com `confianca: alta` no mapa inteiro**.

## 8. O que a máquina errou

Registro dos erros desta rodada, na forma exigida: o que eu afirmei ou quase afirmei sem base, e o
atrito externo que pegou.

**1. Eu ia começar o mapa por uma premissa falsa, e ela estava no enunciado.** O tema afirma que a
música gerada "não entrega os canais separados", e trata isso como *o* sinal fraco a observar. A
primeira busca sobre stems mostrou que o recurso existe desde 11 de junho de 2026 e que em 13 de
agosto de 2026 virou estação de trabalho com MIDI. **O que pegou:** ter buscado o sinal fraco antes
de escrever a raiz — se eu tivesse escrito primeiro e buscado depois, teria produzido um mapa
inteiro sobre um limite que não existe mais. O enunciado não errou; ele envelheceu em três meses, e
isso é a informação mais útil que esta rodada produziu sobre o tema.

**2. Números fortes que não sustentei, e que por isso não entraram.** Nas buscas apareceram: 400% de
crescimento de deepfake de voz no Brasil; salto de 0,1% para 6,5% nas fraudes financeiras
detectadas; US$ 3,7 bilhões de perda global documentada; três segundos de áudio bastando para clonar;
US$ 600 mil de perda média por incidente; queda de 80% na receita de sync da dupla que processou a
Suno; US$ 35 milhões de pedido; 14% de interações totalmente atendidas por IA até 2027; 65% de
supervisores musicais usando IA. **Nenhum veio de página que eu tenha aberto.** Todos estão na seção
12 como alegação não verificada. **O que pegou:** a regra de que só entra na seção 11 o que eu abri
— sem ela, sete desses números estariam no corpo do texto com aparência de fato.

**3. Três fontes me recusaram, e isso mudou o que eu posso afirmar.** Billboard devolveu **402
Payment Required**; Variety e Forbes devolveram **403 Forbidden**; a matéria da MLQ sobre o v6
devolveu 403. Consequência concreta: os dados de parada da Xania Monet vêm da Wikipedia, não da
Billboard, e por isso **não afirmo** o primeiro lugar em *R&B Digital Song Sales* que aparecia nos
resultados de busca — afirmo só o que a página que abri sustenta. O mesmo com a decisão alemã: em
vez de Variety, usei uma análise jurídica que abri, e ela é mais precisa (traz os quatro atos, a
recusa de TDM e a pendência de recurso).

**4. Uma fonte que abri não continha o que o resultado de busca prometia.** A página do MoshiRAG na
Kyutai traz título e data, e nada de latência, tamanho ou licença — que era exatamente o que eu
queria dela. **O que pegou:** ter aberto em vez de citar pelo resumo. O resumo do buscador dava a
impressão de um artigo com números.

**5. Erro de classificação que eu quase cometi.** Classifiquei, no primeiro rascunho, "reconhecimento
de fala no dispositivo" como emergente — é o item mais citado em todo material de desenvolvimento
sobre o tema. Reprova em T5 sem discussão: está no catálogo de ativos do sistema operacional, sem
chave de API, com falha documentada e benchmark público. **O que pegou:** rodar T5 por último e em
ordem, em vez de decidir pela sensação de novidade. Emergente descreve o estado da tecnologia, não
o meu grau de familiaridade com ela.

**6. Um viés de recorte que declaro sem ter conseguido corrigir.** Quase toda a evidência de mercado
deste mapa vem de **uma** plataforma (Deezer) e **uma** empresa (Suno). São as que publicam números.
Isso significa que o presente descrito na seção 3 pode estar descrevendo a estratégia de comunicação
de duas empresas tanto quanto o estado do mundo. Não encontrei fonte independente com a mesma
granularidade, e registro isso como limitação, não como detalhe.

**7. O que eu não chequei e sei que não cheguei.** Não abri nenhum artigo do ISMIR, não abri
processo judicial em fonte primária (só análise secundária), não abri a página de resultados do
Congresso dos EUA (só análise de escritório de advocacia), e não testei nada em máquina — este mapa
é leitura, não medição. O experimento da seção 10 existe porque essa distinção importa.

## 9. Três cenários para 2031

### 9.1 Provável — a interface ganhou uma faixa, e a música ganhou um contrato

A voz não substituiu a tela: virou uma **faixa a mais**, dominante em contextos de mãos ocupadas e
de baixa fluência em texto, e secundária em todo o resto. A conversa full-duplex é padrão em
atendimento e em assistente; a pilha local resolve reconhecimento e síntese sem rede, e a parte que
pensa continua na nuvem na maioria dos aparelhos. O desenho de interação por voz virou especialidade
com ferramenta própria, e ninguém mais entrega fluxograma de diálogo.

Na música, o gerador virou estação de trabalho. Quem produz commodity migrou para curadoria e
especificação — descrever bem o que se quer virou a competência paga. O catálogo de trilha genérica
encolheu e não desapareceu, porque supervisão musical continua exigindo cadeia de titularidade que o
material gerado só tem quando nasce licenciado. O mercado se partiu em dois: geradores licenciados,
caros, com catálogo contratado e limite de exportação; e pesos abertos, locais, gratuitos e
juridicamente desamparados. Rotular origem virou obrigatório em pelo menos uma jurisdição grande.

A voz deixou de autenticar. Bancos migraram para verificação de canal e aparelho. O áudio entre
pessoas próximas continua sendo usado, mas com protocolo — e a piada de família sobre "manda áudio
falando a palavra" virou hábito.

### 9.2 Desejável — a procedência vira infraestrutura, e o canal vira unidade

O mesmo quadro acima, com três diferenças que dependem de decisão e não de tecnologia:

- **A procedência é do sistema, não do arquivo.** Origem de áudio é verificada como um certificado:
  registro externo consultável, exibido na interface de quem escuta, e não um metadado que a
  primeira recompressão apaga. Isso atende ao que 80% das pessoas pediram e resolve o problema que
  97% de indistinção cria.
- **O canal é a unidade de licença e de crédito.** O stem gerado nasce como fonte, com procedência
  e participação registradas por canal. O músico de sessão que emprestou timbre recebe por timbre,
  não por adivinhação. O padrão de metadado é estendido para isso — e esse é o trabalho chato que
  decide se o cenário acontece.
- **A alternativa silenciosa é requisito.** Todo produto com interface por voz tem caminho
  equivalente sem falar, por norma e não por bondade — porque a voz como padrão exclui quem não
  fala, quem não pode falar em público e quem não quer ser ouvido.

### 9.3 Indesejável — o mercado de duas camadas e a desconfiança como padrão

A edição fina permanece no tier caro. Quem paga tem canais, MIDI e exportação sem limite; quem não
paga tem um bloco que não se conserta e não pode baixar. A licença, que começou como proteção ao
artista, consolida-se como **barreira de entrada**: só quem tem capital para contratar catálogo pode
operar legalmente, e a pesquisa aberta é empurrada para a informalidade jurídica.

A voz vira interface padrão sem alternativa equivalente, e a exclusão muda de forma: não é mais
quem não sabe ler, é quem não pode falar. O escritório aberto, o transporte público e a casa
compartilhada tornam-se lugares onde metade das funções não está disponível.

E a desconfiança vira o padrão do canal sonoro: não se atende ligação, não se confia em áudio, e a
verificação prévia é exigida em toda interação com consequência. Ganha quem vende verificação; perde
a conversa. No Brasil, onde o áudio é o formato social dominante e o PIX é irreversível, este cenário
é o mais caro dos três — e é o que está mais perto de acontecer sozinho, porque não exige nenhuma
decisão de ninguém.

### 9.4 O que distingue os três

Nenhum dos três depende de a tecnologia melhorar. Todos os três são compatíveis com o estado técnico
de hoje mais três anos de refinamento previsível. O que os separa são **três decisões**: onde a
procedência é registrada, quem tem acesso à edição, e se existe caminho equivalente sem voz. As três
são decisões de projeto e de norma — e as três estão sendo tomadas agora, por quem escreve produto,
não por quem escreve manifesto.

## 10. O experimento

**Nome.** O teste do conserto.

**A pergunta que ele responde.** As duas raízes centrais deste mapa afirmam a mesma coisa em domínios
diferentes: que o material gerado deixou de ser um bloco e passou a ser **consertável**. Isso é
verificável em sala, em uma aula, sem orçamento. E é falsificável: se consertar custar mais do que
recomeçar, as raízes 1 e 2 estão erradas, e este mapa cai.

**A medida.** Não é qualidade, e não é tempo total. É **quantas vezes foi preciso RECOMEÇAR DO
ZERO** — e, em segundo lugar, quantas vezes o conserto quebrou outra coisa.

**Montagem — trilha A (música), 40 minutos.**

1. Cada participante gera **uma peça de 30 segundos** a partir de um mesmo briefing curto, escrito
   pelo professor e igual para todos (ex.: "abertura de podcast, 30 s, violão e bateria seca, termina
   com um acorde sustentado").
2. Recebe então uma **ordem de defeito** em envelope fechado, específica e pequena, que ele não
   escolheu: *"tire o prato do refrão"*, *"a voz entra meio compasso adiantada"*, *"o baixo está
   alto demais nos últimos 5 segundos"*.
3. Conserta por **três rotas**, na ordem sorteada, com cronômetro em cada uma:
   - **R1 — recomeçar**: mudar o prompt e gerar de novo até a ordem de defeito estar cumprida.
   - **R2 — separar e corrigir fora**: exportar stems, consertar em estação de trabalho.
   - **R3 — gerar já em canais**: usar geração multi-stem ou regeneração de canal único, com o resto
     congelado.
4. **Registra, por rota:** número de recomeços; número de vezes em que o conserto estragou algo que
   estava bom (o "efeito colateral"); tempo até um **terceiro que não participou da geração** dizer
   "está cumprido"; e um campo aberto: *em que momento a ferramenta parou de responder ao que eu
   pedi*.

**Montagem — trilha B (voz), 30 minutos.**

1. Cada dupla executa uma **tarefa com correção no meio**: reservar algo, informar um endereço,
   pedir um serviço — e, no meio da fala, **mudar de ideia** ("não, era o outro endereço").
2. Faz a mesma tarefa em duas condições: **turno a turno** (esperar o sistema terminar) e
   **full-duplex** (interromper enquanto ele fala).
3. **Registra:** número de vezes que precisou **recomeçar a tarefa inteira**; número de interrupções
   bem-sucedidas contra interrupções ignoradas; número de vezes em que o sistema falou por cima sem
   ser pedido; e o momento exato em que o participante desistiu de interromper e passou a esperar.
4. **Condição extra, se houver aparelho disponível:** a mesma tarefa com pilha **local** e sem rede,
   medindo só o tempo de ida e volta. É o teste direto da precondição declarada em 4.1.

**O que cada resultado significa para o mapa.**

- Se **R3 < R2 < R1** em número de recomeços, a raiz 2 está certa e a unidade de trabalho é mesmo o
  canal.
- Se **R2 ≈ R1**, então "editável" quer dizer "corrigível com esforço", e o efeito e3 deve ser
  rebaixado — o stem ainda é derivado, não fonte.
- Se na trilha B o full-duplex produzir **mais** recomeços de tarefa que o turno a turno, a
  precondição única da raiz 1 falhou, e cinco efeitos deste mapa caem juntos (é o que a prova P5
  previu).
- Se a condição local for inviável por latência, a fronteira entre "voz conversacional" e "voz
  local" está confirmada, e o mapa acertou ao mantê-las separadas.

**Por que este experimento e não uma avaliação de qualidade.** Porque qualidade já foi medida e o
resultado é conhecido e irrelevante para quem projeta: 97% das pessoas não distinguem em teste cego.
O que ninguém mediu é **o custo de dirigir** — e é isso que separa uma ferramenta de um brinquedo.

**O que ele NÃO mede, e é preciso dizer.** Não mede preferência, não mede valor artístico, não mede
efeito sobre emprego, e não tem amostra para generalizar. É uma prova de mecanismo com N pequeno,
feita para derrubar uma afirmação específica deste documento — não para descrever o mercado.

## 11. Fontes

Vinte e sete páginas, todas abertas por mim nesta sessão, em 17/09/2026. O que não abri está
declarado como não apurado nas seções 3, 6, 8 e 12, e nenhum efeito da roda se apoia nisso.

**Música: produto, recurso e data**

1. `https://suno.com/release-notes/advanced-stems` — Advanced Split, Split from Mix e Auto Split;
   quase 100 instrumentos; 11/06/2026; restrição ao tier Premier. Sustenta a queda da premissa do
   tema e a precondição da raiz 2.
2. `https://www.musicbusinessworldwide.com/suno-launches-studio-2-0-with-midi-support/` — Studio 2.0
   em 13/08/2026; MIDI, wavetable, automação, exportação multitrack 32 bits/48 kHz; citação de Henry
   Phipps; Studio 1 em setembro de 2025 após a compra da WavTool; preço Premier.
3. `https://suno.com/blog/suno-updates-tos` — anúncio em 10/08/2026, vigência em 03/09/2026; 7
   downloads vitalícios no free, 20/mês no Pro, 60/mês no Premier; justificativa declarada sobre
   exportação em massa.
4. `https://arxiv.org/abs/2602.09891` — Stemphonic (Wu, Zhu, Caceres, Huang, Bryan; ICASSP 2026;
   submetido em 10/02/2026): stems sincronizados em uma passada, controle por stem, 25–50% mais
   rápido no mix completo.
5. `https://arxiv.org/abs/2501.01757` — MusicGen-Stem (Rouard, San Roman, Adi, Roebel; ICASSP 2025):
   primeiro multi-stem autorregressivo aberto com edição por stem.
6. `https://arxiv.org/abs/2607.08526` — *aria* (Spanio e Rodà, 09/07/2026): Stable Audio 3 de 1,2 B
   quantizado rodando em CPU e Raspberry Pi 5; 8 bits sem perda mensurável; inicialização ~7× mais
   rápida.

**Mercado e plataforma**

7. `https://newsroom-deezer.com/2026/07/ai-music-exceeds-50-percent-daily-uploads-deezer/` — ~90.000
   faixas/dia e mais de 50% das entregas no pico de junho/2026; 1–3% das execuções; até 85% de fraude
   nessas execuções contra 8% no catálogo; 99,8% de acurácia da detecção; pesquisa Ipsos (9.000
   pessoas, 8 países): 80% querem rótulo, 52% não querem nas paradas principais.
8. `https://newsroom-deezer.com/2026/04/ai-generated-tracks-represent-44-of-new-uploaded-music/` —
   75.000/dia e 44% em abril/2026; 13,4 milhões etiquetadas em 2025; 97% não distinguiram em teste
   cego.
9. `https://www.musicbusinessworldwide.com/spotify-has-deleted-75m-spammy-tracks-as-it-unveils-new-ai-music-policies/`
   — 25/09/2025: 75 milhões de faixas removidas em 12 meses; proibição de imitação vocal sem
   autorização; filtro de spam; adoção do DDEX para divulgação de IA nos créditos.
10. `https://en.wikipedia.org/wiki/Xania_Monet` — Telisha "Nikki" Jones; uso da Suno; primeira música
    gerada por IA em parada de execução em rádio da Billboard; 30º em Adult R&B Airplay, 20º em Hot
    R&B Songs, 3º em Hot Gospel Songs; contrato de US$ 3 milhões com a Hallwood Media em setembro de
    2025; crítica de Kehlani.

**Licença, litígio e norma**

11. `https://www.musicbusinessworldwide.com/warner-music-group-settles-with-suno-strikes-first-of-its-kind-deal-with-ai-song-generator/`
    — 25/11/2025; modelos licenciados substituindo os antigos em 2026; download só em conta paga;
    controle do artista sobre nome, imagem, semelhança, **voz** e composição; compra da Songkick;
    declarações de Robert Kyncl e Mikey Shulman.
12. `https://www.musicbusinessworldwide.com/universal-music-settles-udio-lawsuit-strikes-deal-for-licensed-ai-music-platform/`
    — 29/10/2025; acordo compensatório mais licenças de fonograma e edição; plataforma licenciada
    para 2026; jardim murado com fingerprinting e filtro durante a transição.
13. `https://www.licentium.io/post/munich-district-court-gema-v-suno-ai-music-copyright-july-2026` —
    GEMA v. Suno, Landgericht München I, 31/07/2026: quatro atos proibidos sobre seis composições,
    incluindo treino em servidores nos EUA; recusa da exceção de TDM da Diretiva 2019/790;
    responsabilidade direta pelas saídas; dever de informar para quantificar danos; recurso esperado
    ao OLG München, decisão **não final**.
14. `https://www.digitalmusicnews.com/2026/08/14/suno-lawsuit-dismissals-jamendo-american-dollar/` —
    The American Dollar (via Poseidon Wave Media) e Jamendo desistem dos processos contra a Suno até
    14/08/2026; 236 gravações e composições alegadas; desistência **com prejuízo** no caso da dupla;
    menção à vitória da GEMA na Alemanha como fator possível.
15. `https://www.hklaw.com/en/insights/publications/2026/06/senate-judiciary-committee-advances-legislation-to-protect-name`
    — NO FAKES Act (S. 4591) aprovado por unanimidade no Comitê Judiciário do Senado em 18/06/2026;
    direito federal sobre réplica digital de voz e imagem; responsabilidade de plataforma com
    conhecimento; notificação e retirada; exceções de Primeira Emenda e pesquisa; preservação de leis
    estaduais anteriores a 02/01/2025 (ELVIS Act).
16. `https://www.musicbusinessworldwide.com/elevenlabss-11b-valuation-is-more-than-twice-the-size-of-sunos-its-just-struck-a-global-ai-music-deal-with-umg/`
    — ElevenLabs a US$ 11 bi (Série D de US$ 500 mi, fevereiro/2026); US$ 500 mi de receita
    recorrente anual em maio/2026; Suno a US$ 5,4 bi em junho/2026; acordo plurianual com a UMG para
    co-criação de fã (remix, mashup, experiências vocais personalizadas); ElevenMusic desde
    agosto/2025.
17. `https://desinformante.com.br/votacao-do-marco-da-ia-fica-para-2026-em-meio-a-impasses-politicos-e-criticas-ao-texto`
    — PL 2338/2023 aprovado no Senado e pendente na Câmara; adiamento da votação; disputa sobre uso
    de obras protegidas em treino e sobre economia da cultura; retirada de salvaguardas trabalhistas
    na tramitação.

**Fala: modelo, medida e pilha local**

18. `https://www.techtimes.com/articles/320041/20260710/chatgpt-voice-goes-full-duplex-gpt-live-ends-turn-based-ai-conversations.htm`
    — GPT-Live em 08/07/2026; full-duplex; decisão muitas vezes por segundo; mais de 150 milhões de
    usuários semanais de voz e ditado; ~1.700 ms de latência no modelo de 2023; tiers e ausências no
    lançamento (API, Business/Enterprise/Edu, vídeo).
19. `https://github.com/kyutai-labs/moshi` — Moshi: dois fluxos de áudio simultâneos e monólogo
    interior; 160 ms teóricos e ~200 ms práticos em L4; Mimi a 1,1 kbps e 12,5 Hz sobre 24 kHz;
    código MIT/Apache-2.0 e pesos CC-BY 4.0; MLX para iPhone e Mac.
20. `https://kyutai.org/blog/2026-04-30-moshi-rag/` — MoshiRAG, recuperação assíncrona de
    conhecimento em modelos full-duplex, 30/04/2026. **A página não traz latência, tamanho nem
    licença** — e é citada exatamente com esse limite.
21. `https://gigazine.net/gsc_news/en/20260714-apple-speech-analyzer-benchmark/` — benchmark de
    14/07/2026 (equipe Inscribe) sobre LibriSpeech: SpeechAnalyzer 2,12%/4,56% de WER contra Whisper
    Small 3,74%/7,95%, Base 5,42%/12,51%, Tiny 7,88%/17,04% e SFSpeechRecognizer 9,02%/16,25%; ~1/3
    do tempo de processamento; limitação declarada a inglês.
22. `https://www.callstack.com/blog/on-device-speech-transcription-with-apple-speechanalyzer` —
    transcrição inteiramente no dispositivo, **sem chave de API e sem nuvem**; modelos no catálogo de
    ativos do sistema, fora do pacote do aplicativo; 06/08/2025.
23. `https://github.com/QwenLM/Qwen3-ASR` — Qwen3-ASR 0,6 B e 1,7 B em Apache-2.0, 29/01/2026; 30
    idiomas (inclusive português) e 22 dialetos; execução local e em streaming; 1,63% de WER no
    LibriSpeech limpo; reconhecimento de voz cantada.
24. `https://picovoice.ai/blog/on-device-tts/` — comparativo de dez motores de TTS local: 106 ms e 7
    MB no extremo eficiente; Piper a 1.720 ms e 2,6 GB; extremo pesado a 48.281 ms e 7,5 GB; faixas
    de memória por classe de aparelho; licenças (Apache-2.0, MIT, GPLv3).
25. `https://machinelearning.apple.com/research/personal-voice` — Personal Voice: 150 frases lidas,
    treino no aparelho durante a noite com o aparelho carregando e bloqueado; MOS 3,68 contra 3,85 do
    original; similaridade 3,8/5; 44 falantes na avaliação; publicado em 18/12/2023; disponível desde
    o iOS 17.

**Procedência e fraude**

26. `https://github.com/facebookresearch/audioseal` — marca d'água localizada em fala; robustez a
    compressão, recodificação e ruído; detecção até duas ordens de magnitude mais rápida; licença MIT
    inclusive dos pesos; ICML 2024, streaming na 0.2 (dezembro/2024).
27. `https://www.canaltech.com.br/seguranca/golpe-de-voz-clonada-via-whatsapp-ja-e-realidade-alerta-especialista-em-ia/`
    — 20/03/2026; coleta de áudio em ligação silenciosa e clonagem; áudio de WhatsApp como vetor
    porque levanta menos suspeita que texto; citação de Giovanni La Porta (vortice.ai). **A matéria
    não traz números**, e é citada só pelo mecanismo.

## 12. Anexo — o levantamento bruto

Seção sem edição e sem limite, como o formato manda. É aqui que fica o que não coube, o que morreu e
o que não deu em nada.

### 12.1 A entrevista (Fase 1), como ela aconteceu

A skill é bloqueante: não produz nada antes de fechar a entrevista. Esta rodada foi executada **sem
interlocutor humano disponível** — as respostas vieram por escrito, junto com o pedido, e o
`RECORTE FECHADO` não pôde ser confirmado por eco. Registro isso como a maior anomalia de
procedimento desta rodada, e declaro o que preenchi sozinho.

As nove perguntas, e as respostas recebidas:

1. **TEMA E FRONTEIRA** — "Voz e som gerativos", tema 13 de 19, família "Percepção e mídia
   sintética". A fronteira **não veio pronta**; foi derivada por mim do bloco "Fronteira com os
   vizinhos" do enunciado da disciplina (imagem em movimento é o tema 12; IA no dispositivo em geral
   é o tema 16; aqui o objeto é som e voz gerados) e ampliada com dois cortes meus, declarados em 2:
   não é arquitetura de agente conversacional (temas 1 a 5) e não é acessibilidade como política
   pública. **Suposição minha, marcada.**
2. **HORIZONTE** — 2031.
3. **RECORTE GEOGRÁFICO** — global, com nota sobre o Brasil.
4. **PARA QUEM** — quem projeta mídia e interação.
5. **O QUE JÁ ESTÁ DESCARTADO** — o que já é comum em produto de massa (a régua da disciplina);
   nenhuma outra exclusão. Também: ideias óbvias que serviriam para qualquer tema.
6. **VIÉS DESEJADO** — neutro.
7. **O QUE TE FARIA MUDAR DE IDEIA** — evidência de que a adoção já passou da maioria inicial
   (Rogers), ou de que a tecnologia não rompe nada e só melhora o que existe. Aplicados na seção 7.7.
8. **QUANTAS DISRUPÇÕES-RAIZ** — **não respondida**. Assumi **3**, que é o meio da faixa permitida e
   o que o material comporta (a fala, a música, o direito). **Suposição minha, marcada.**
9. **EU POSSO NAVEGAR?** — sim, com instrução explícita de usar busca e leitura reais e de só citar
   o que eu abrisse. Por isso a Regra F3 (sem navegação) **não** se aplica, e a seção 11 traz 27
   páginas efetivamente abertas.

Recorte fechado, tal como teria sido devolvido para confirmação:

```
RECORTE FECHADO — confirme antes de eu rodar
  tema ................ o que acontece com mídia e interação quando a fala vira turno
                        conversacional local e a música passa a ser gerada já em canais,
                        editável e licenciada por contrato
  não é ............... imagem e vídeo (tema 12); IA no dispositivo em geral (tema 16);
                        arquitetura de agente (temas 1 a 5); acessibilidade como política
  horizonte ........... 2031
  região .............. global, com nota sobre o Brasil
  público ............. quem projeta mídia e interação
  descartado .......... o que já é comum em produto de massa (régua da disciplina)
  viés ................ neutro
  falsificador ........ adoção além da maioria inicial (Rogers), ou ausência de ruptura
  raízes .............. 3
  navegação ........... sim
  SUPOSIÇÕES MINHAS ... a fronteira (derivada do enunciado + dois cortes meus);
                        o número de raízes (3); a confirmação por eco, que não houve
Confirma, ou corrige algum campo?
```

**Perguntas condicionais (1.2) que eu teria feito, e as respondi sozinho:**

- *Colisão com vizinho.* O tema encosta em três: 12 (vídeo com áudio sincronizado), 16 (IA no
  dispositivo) e 7 (NPCs com voz). Resolvi pelo objeto: se o que muda é **o som**, entra; se o que
  muda é o que o som acompanha, sai.
- *Coerência do horizonte.* 2031 para software de consumo é folgado, e para norma e tribunal é
  apertado. Não é incoerente — é justamente a tensão da raiz 3, onde o produto anda em meses e a
  decisão judicial em anos. Registrado, não corrigido.
- *Contradição entre 5 e 1.* Há uma real: descartar "o que já é comum em produto de massa" elimina
  boa parte do que o enunciado do tema apresenta como o coração dele (geração de música por prompt;
  transcrição local). A Fase 2 seguiu a régua e recusou os dois. **Se essa recusa estiver errada,
  ela é o erro estrutural desta rodada, e fica assim declarada.**

### 12.2 A triagem completa (Fase 2), item a item

Candidatas avaliadas, com resultado e teste decisivo. As que entraram no corpo estão em 4.0; aqui
está a lista inteira, inclusive o que nem chegou lá.

| Candidata | Resultado | Teste decisivo |
|---|---|---|
| Transcrição de fala no dispositivo | MADURO | T5 — catálogo do sistema, sem chave de API |
| Síntese de voz por nuvem (API) | MADURO | T5 — preço estável, US$ 500 mi de ARR |
| Assistente de voz com palavra de ativação | MADURO | T5 e T1 |
| Separação de fontes como técnica | MADURO | T5 — oito motores comparáveis, embutida em DAW |
| Geração de música por prompt (texto→música) | MADURO | T5 — >50% das entregas diárias de plataforma de massa |
| Sampler, DAW, plugin | MADURO (H1) | T1 |
| Voz pessoal sintetizada (Personal Voice) | MADURO | T3 — sinal de 2023, fora da janela |
| Áudio sincronizado no modelo de vídeo | FORA por recorte | T1 neste mapa (é o tema 12) |
| Marca d'água de áudio (AudioSeal, SynthID) | EMERGENTE, não raiz | T2 — sem ela, ninguém muda o objetivo |
| Conversa full-duplex | **DISRUPTIVO** | passa T1/T3/T4; competência e porta nomeadas |
| Pilha de fala local de qualidade | EMERGENTE, entra na raiz 1 | T4 — falta full-duplex local |
| Música gerada nativamente em canais | **DISRUPTIVO** | passa T1/T3/T4 |
| Geração de música no dispositivo | EMERGENTE, entra na raiz 2 | T3 — aria, 09/07/2026 |
| Licença como componente de arquitetura | **DISRUPTIVO** | madura participando de disrupção: rompe o arranjo, não o artefato |
| Direito exclusivo sobre a própria voz | **DISRUPTIVO** (com a anterior) | T3 — NO FAKES 18/06/2026; Munique 31/07/2026 |
| Recuperação assíncrona em full-duplex (MoshiRAG) | EMERGENTE, vai para 6 | T4 — não consigo nomear o que falta |
| IA generativa embutida em DAW tradicional | **H2−**, recusado | T1 e T2 — faz o presente durar mais |
| Reconhecimento de voz cantada (Qwen3-ASR) | substrato | T1 — melhora, não rompe |
| Codec neural de baixa taxa (Mimi) | substrato | T1 — habilita, não rompe sozinho |
| Agente de voz para atendimento | EMERGENTE, é aplicação da raiz 1 | não é tecnologia, é mercado |

**Three Horizons, para separar o que escora do que substitui:**

- **H1** — DAW, sampler, biblioteca de trilha, atendimento por script, assistente com palavra de
  ativação, biometria de voz.
- **H2−** — IA generativa como assistente dentro do DAW; separação de fontes melhorada; TTS melhor
  no mesmo fluxo; detecção de IA como remendo de plataforma. Tudo isso faz o H1 durar mais, e é o
  que mais se confunde com tendência.
- **H2+** — as três raízes: full-duplex e pilha local; canais nativos e geração dentro da estação de
  trabalho; licença e direito de voz como arquitetura.
- **H3** — já visível em bolsões: gerador de música num Raspberry Pi; pesos abertos de fala
  conversacional rodando em telefone; voz pessoal assinada e revogável.

### 12.3 Os efeitos que morreram na Fase 5

Cinco eliminados, dois rebaixados. `id` original preservado — é por isso que a roda da seção 5 tem
lacunas de numeração.

**Eliminados:**

- **`e1.2.1`** (ordem 3) — *"A expectativa de privacidade migra do 'está gravando?' para 'onde isso é
  processado?', e o selo de processamento local vira argumento de venda comparável ao cadeado do
  HTTPS."* → **morto por P3 (já aconteceu)**. A documentação para desenvolvedor da pilha de fala
  local já vende exatamente isso: *sem chave de API, sem nuvem*, modelo no catálogo do sistema. Não
  é efeito de 2031; é argumento comercial de 2025. Migrou para a seção 3.
- **`e3.2`** (ordem 2) — *"O catálogo de library music genérico perde a função de estoque, porque
  gerar sob medida sai mais barato do que buscar."* → **morto por P3 (já aconteceu)**. Em maio de
  2026 uma dupla de produção com 236 gravações e composições registradas processou a Suno alegando
  que as saídas desvalorizam e substituem música real. O processo foi desistido **com prejuízo** em
  agosto de 2026 — o que enfraquece a peça como prova, mas não desfaz o fato de que a substituição
  já está em curso. Efeito que já é verdade não é efeito: é estado da arte.
- **`e3.2.1`** (ordem 3) — *"O compositor de trilha migra de produzir para especificar, e o briefing
  musical vira documento técnico."* → **morto junto com o pai**. Parte do conteúdo sobreviveu
  dentro de `e3.1` e do cenário provável (seção 9.1), onde "descrever bem o que se quer virou a
  competência paga".
- **`e4.2.1`** (ordem 3) — *"A remuneração por execução perde a base de medição em uma parte do
  consumo, e a arrecadação se desloca para o licenciamento do modelo."* → **morto por P5 (precondição
  única)**. Pendurava inteiramente na hipótese de que a geração local vire consumo relevante —
  hipótese que o próprio mapa desmente (1% a 3% das execuções, sem sinal de inversão). O pai `e4.2`
  sobreviveu com `sinal: fraco` e `confianca: baixa`; o filho, não.
- **`e5.1.1`** (ordem 3) — *"A ligação telefônica sem procedência verificável passa a ser tratada
  como correspondência anônima, e o padrão passa a ser não atender."* → **morto por P2 (velocidade
  de adoção)**. O caso histórico comparável é a autenticação criptográfica de chamada, que levou
  anos para ser implantada e não eliminou a chamada fraudulenta. O efeito assumia adoção mais rápida
  que o único precedente disponível. Parte dele sobrevive como **cenário indesejável** na seção 9.3,
  que é onde uma aposta rápida demais pode viver sem contaminar a roda.
- **`e5.2.1`** (ordem 3) — *"O protocolo doméstico de verificação vira norma social e entra na
  educação básica."* → **morto por P1 (extrapolação linear)**. É o pai em outro volume: mesmo ator,
  mesmo mecanismo, só mais. Fundido em `e5.2`.

**Rebaixados (permanecem no mapa, com confiança menor):**

- **`e2.1`**: `media` → **`baixa`**, por **P2**. Serviço público nascendo falado até 2030 supõe
  velocidade de migração de canal que nenhum caso comparável sustenta.
- **`e6.1`**: `media` → **`baixa`**, por **P4**. Eu supunha fuga fácil para pesos abertos; a força
  contrária tem onde morder — pagamento, loja de aplicativo, distribuição — e a decisão de Munique
  mostra que até o treino no exterior pode ser alcançado por regra de foro.

**Cota de dano, conferida raiz a raiz:** raiz 1 → `e1.2.1` eliminado e `e2.1` rebaixado. Raiz 2 →
`e3.2` e `e3.2.1` e `e4.2.1` eliminados. Raiz 3 → `e5.1.1` e `e5.2.1` eliminados e `e6.1` rebaixado.
**A cota foi cumprida nas três.** A bateria não foi frouxa: matou 5 de 23 efeitos rascunhados
(21,7%) e rebaixou outros 2.

### 12.4 Efeitos que foram considerados e nunca chegaram à roda

- *"O teclado desaparece."* — Recusado por P1 e por falta de evidência: nada nos dados sugere
  substituição, só adição. Virou a nota anti-wildcard da seção 6.
- *"A escola de música muda o currículo."* — Recusado por ser genérico: serve para qualquer tema
  desta lista. A entrevista pediu explicitamente para excluir ideias que servem para qualquer tema.
- *"Todo mundo terá uma voz sintética própria."* — Recusado por P3 parcial (Personal Voice existe
  desde 2023) e por extrapolação. Sobreviveu na forma precisa e menor de `e2.2.1`.
- *"O streaming acaba."* — Recusado: não há mecanismo. O que os dados mostram é o oposto, com o
  gerador adotando lógica de streaming (limite de download, biblioteca que fica na plataforma).
- *"A trilha se adapta em tempo real ao que o jogador faz."* — Recusado por **P3**: música adaptativa
  existe em middleware de jogo há mais de uma década. O que é novo é a **geração** em tempo de
  execução, e isso virou `e4.1`.
- *"O podcast deixa de ser gravado."* — Recusado por falta de sinal datado; encontrei entusiasmo,
  não artefato.
- *"O dublador desaparece."* — Recusado por P4: a força contrária é sindical, contratual e já
  organizada, e é justamente o que produziu o NO FAKES Act. O efeito real não é desaparecimento, é
  **licenciamento** — e está em `e6.2`.
- *"A voz vira senha melhor porque o modelo detecta clone."* — Recusado por P4 invertida: é aposta na
  defesa vencendo, e a evidência de robustez de marca d'água não sustenta.

### 12.5 Buscas que não deram em nada, e o que isso significa

- **Uso de voz como proporção de conversas.** Procurei a fração de interações que acontece por voz
  dentro de um produto de massa. Existe o número absoluto (150 milhões semanais) e **não existe** a
  proporção publicada. Sem isso, não dá para dizer se a voz está substituindo ou somando — e por
  isso o mapa afirma apenas o que sustenta: adição.
- **Emprego em atendimento.** Procurei queda documentada atribuída a agente de voz. Achei projeção
  de consultoria em sentido contrário (a maior parte das interações seguiria humana), em páginas de
  fornecedor que **não abri**. Nenhum efeito deste mapa afirma perda de emprego, e essa ausência é
  deliberada.
- **Brasil, números de fraude de voz.** Achei matéria descrevendo o mecanismo (aberta e citada) e
  números fortes em páginas agregadoras (não abertas). O mapa usa o mecanismo e descarta os números.
- **ISMIR 2026.** Não consegui abrir anais; a evidência acadêmica deste mapa vem de três páginas do
  arXiv (duas com aceite em ICASSP).
- **Latência real de pilha de voz local em telefone comum.** Só encontrei medições de montagem
  caseira em Raspberry Pi, em páginas que não abri. É por isso que a precondição da raiz 1 está
  declarada como precondição e não como fato — e é por isso que o experimento da seção 10 tem uma
  condição extra exatamente para medi-la.
- **Adoção de DDEX na prática.** Sei que o padrão foi adotado por uma plataforma grande em setembro
  de 2025 e que há distribuidores integrando; **não apurei** quantos discos declaram de fato. Isso
  importa porque o cenário desejável (9.2) depende disso.

### 12.6 Fontes que me recusaram, e como contornei

- **Billboard** (`/pro/ai-music-artist-xania-monet-...`) — HTTP **402 Payment Required**, com
  redirecionamento para domínio de pedágio. Contorno: Wikipedia, e afirmação restrita ao que ela
  sustenta.
- **Variety** (`/2026/digital/news/suno-loses-ai-lawsuit-gema-...`) — redirecionamento **307** para
  domínio de pedágio. Contorno: análise jurídica (Licentium), que aliás é mais precisa.
- **Forbes** (Xania Monet, 27/09/2025) — HTTP **403 Forbidden**.
- **MLQ News** (Suno v6) — HTTP **403 Forbidden**. As datas do v6 (09/09/2026) e dos limites de
  download (03/09/2026) foram confirmadas pela página da própria Suno, que abri.
- **Kyutai / MoshiRAG** — abriu, e não tinha o que prometia. Registrado como tal na seção 11.

Consequência de método, e não é pequena: **a cobertura especializada de música está atrás de
pedágio**, e a pesquisa de graça sobre este tema tende a se apoiar em blog de fornecedor, agregador
e página de SEO — exatamente o material com mais número redondo e menos data. Foi por isso que
sobrou tanto número na lista abaixo.

### 12.7 Alegações que encontrei, não abri, e por isso NÃO usei

Ficam registradas para quem quiser verificar. Nenhuma sustenta efeito deste mapa.

- Crescimento de 400% em deepfake de voz no Brasil em 2026; salto de 0,1% (março/2025) para 6,5%
  (2026) das fraudes financeiras detectadas.
- US$ 3,7 bilhões de perda global documentada com fraude habilitada por deepfake; 89% concentrados
  entre 2025 e o primeiro semestre de 2026.
- Três segundos de áudio bastando para um clone convincente (atribuído a estudo de fornecedor de
  segurança).
- US$ 600 mil de perda média por incidente de deepfake de voz em instituição financeira.
- Mais de 22.000 queixas de fraude com IA e US$ 893 milhões de perda no relatório do FBI de 2025.
- Queda de cerca de 80% na receita de sync da dupla que processou a Suno; pedido de US$ 35 milhões.
- Projeção de que apenas ~14% das interações de atendimento sejam totalmente atendidas por IA até
  2027; US$ 80 bilhões de economia agregada em 2026.
- US$ 0,07–0,15 por minuto de agente de voz contra US$ 29–42 por hora de atendente humano.
- 65% dos supervisores musicais usando ferramentas de IA em 2026.
- Latência de 8 a 25 segundos em pilha de voz local em Raspberry Pi 5.
- Vulnerabilidade específica do AudioSeal a determinados tokenizadores de áudio, com acurácia de
  detecção caindo para ~0,57; e ~95% de detecção do SynthID em arquivo não modificado contra 85–92%
  após compressão.
- Round Hill processando Suno e outra empresa por até US$ 1 bilhão cada.
- Votação do PL 2338/2023 em plenário da Câmara em maio de 2026.

### 12.8 Caminhos de estruturação abandonados

- **Duas raízes em vez de três** (fala e música), com o direito entrando como força contrária.
  Abandonado porque o direito **não está reagindo**: ele está definindo o produto. Modelos antigos
  aposentados no mesmo dia em que os licenciados nasceram não é reação, é arquitetura.
- **Quatro raízes**, separando "geração local" de "canais nativos". Abandonado por 4.3 da skill:
  mais raízes viram lista de tecnologias. As duas compartilham incumbente e porta de entrada.
- **Uma raiz única** ("o áudio virou material maleável"). Abandonado por ser verdadeiro demais para
  ser útil: com essa formulação, qualquer efeito cabe embaixo, e a árvore vira opinião organizada.
- **Organizar por setor** (música, jogo, atendimento, acessibilidade). Abandonado porque a entrevista
  pediu explicitamente o modo "a partir de uma inovação/tema, não de um setor". Os setores aparecem
  como efeitos, que é o lugar deles.
- **Roda com quatro níveis.** Não chegou a ser considerada: o formato fixa três.

### 12.9 As quatro perguntas do teste cruzado, respondidas sobre esta rodada

1. **Fez perguntas antes de rodar?** Sim — Fase 1, seção 12.1, com as nove perguntas, as três
   condicionais e o bloco `RECORTE FECHADO`. **Com uma falha declarada:** não houve confirmação por
   eco, porque não havia interlocutor. Os dois campos que preenchi sozinho (fronteira e número de
   raízes) estão marcados como suposição minha.
2. **Separou novidade de comum, e recusou o comum?** Sim — Fase 2, seções 4.0 e 12.2, com o teste
   que reprovou cada item nomeado. Sete candidatas foram recusadas como maduras, incluindo as duas
   que o enunciado do tema apresenta como centrais (geração de música por prompt e transcrição
   local), e uma foi recusada como H2−.
3. **Duvidou do próprio resultado?** Sim — Fase 5, seção 7, com as seis provas aplicadas por `id`; a
   cota de dano cumprida nas três raízes; cinco efeitos mortos e dois rebaixados, listados em 12.3
   com a prova que os matou. A prova P3 chegou a derrubar **a premissa do próprio enunciado do
   tema**, o que está dito na seção 1 e na 8.
4. **Saiu no formato?** Sim — Fase 6, com a autochecagem rodada e o resultado colado em 12.10.

### 12.10 Autochecagem (Fase 6)

O resultado dos dois comandos exigidos pela skill está colado em `verificacao-yrv.txt`, no mesmo
diretório deste documento — contagem de títulos `##`, campos obrigatórios do frontmatter, validade
do YAML da roda, ordem e unicidade dos `id`, ausência de pergunta em efeito, monotonicidade de
`prazo` ao longo de cada galho, contagem por ordem contra os contadores do frontmatter, e cota de
no máximo um efeito de ordem 3 com `confianca: alta`.

**Uma ressalva sobre a checagem de links.** O verificador da disciplina reportou três links da
seção 11 como "não respondem": as duas páginas da sala de imprensa do Deezer e a análise do NO FAKES
Act. As três **estão no ar** — abri cada uma nesta sessão, e uma requisição com agente de navegador
devolve HTTP 200 para as três. O que o script encontra é bloqueio por agente, não link morto.
Registro aqui para que a próxima leitura não trate isso como fonte quebrada.

**O que o script não pega, e conferi à mão:** que **todos os 27 links da seção 11 foram abertos por
mim nesta sessão** — foram, um a um, e três dos que eu queria abrir me recusaram e estão listados em
12.6 sem entrar na contagem; e que `fontes: 27` diz a verdade, que é o número de páginas abertas e
citadas, não o número de páginas consultadas (foram mais, em busca, e o que veio só de busca está em
12.7, fora do corpo do mapa).
