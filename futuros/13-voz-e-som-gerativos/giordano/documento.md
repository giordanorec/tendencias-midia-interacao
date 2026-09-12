---
tema: Voz e som gerativos
slug: voz-e-som-gerativos
autor_login: grec
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-11
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 16
efeitos_ordem_2: 30
efeitos_ordem_3: 16
tecnologias_citadas: [Suno v6, Udio, Stable Audio 3, aria (runtime quantizado), Moshi, Mimi, MLX, Kokoro, kokoro-js, WebGPU, Transformers.js, Whisper, ElevenLabs, GPT-Realtime, Gemini Live 3.1, ECAPA-TDNN, GPT-SoVITS, Bert-VITS2, RVC, AudioSeal, WavMark, SilentCipher, AudioMarkNet, HarmonicAttack, LambdaMark, C2PA, DDEX, Full-Duplex-Bench-v3]
fontes: 27
confianca: media
experimento: A marca que não sobrevive — bancada que mede quanto da procedência de um áudio gerado resiste ao caminho real (WhatsApp, Instagram, reencode) por onde ele de fato anda no Brasil
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Em setembro de 2026 a pergunta sobre voz e som gerativos deixou de ser "a máquina consegue?" e passou a ser **quem controla a saída**. Três medições sustentam o mapa. Primeira: a música gerada é abundante e não é escutada — o Deezer recebe 90 mil faixas geradas por dia, mais de metade de tudo o que entra, e elas valem de 1% a 3% da escuta, com até 85% desses streams classificados como fraudulentos. Segunda: o limite técnico que a disciplina apontou como sinal fraco — "não entrega os canais separados" — **caiu em junho de 2026**, quando o Suno passou a separar quase cem tipos de instrumento; e o que ocupou o lugar do limite técnico foi um limite contratual, porque o Udio, licenciado pela Universal, desligou o download de áudio, vídeo e stems por inteiro. Terceira: a assimetria entre gerar e detectar é medida e é grande — um detector de fala sintética cai de 0,83% para 24,84% de EER fora do domínio de treino, uma degradação de trinta vezes, e um ataque publicado remove 100% das marcas d'água de um corpus musical sem conhecer o algoritmo que as pôs. Deste presente derivo quatro rupturas — a fala sem turno e sem nuvem, a saída gerada que deixa de ser um arquivo, a assimetria permanente entre gerar e detectar, e a procedência obrigatória com data no calendário (2 de agosto de 2026, Artigo 50) — e as persigo até 2031. O achado que não estava no roteiro é um ciclo: **a exigência legal de procedência é um subsídio ao jardim murado**, porque só a plataforma fechada garante que a marca chegue ao ouvido de quem escuta. Para quem projeta mídia e interação, a variável de projeto em 2031 não é qualidade de áudio: é latência sob fala real, direito de exportar, e prova de origem.

## 2. O tema

**Voz e som gerativos** é a família de sistemas que **produz** áudio — fala, música, efeito, ambiente — em vez de reproduzir uma gravação. Inclui síntese de fala, clonagem e conversão de voz, diálogo falado fala-a-fala, geração de música e de efeitos sonoros, e as camadas de procedência (marca d'água, metadado, declaração) que passaram a acompanhá-los.

**Onde encosta em mídia e interação.** O som é o único canal da interface que funciona com os olhos ocupados, e por isso é onde a geração em tempo real muda mais: um botão gerado na hora não serve para nada; um ambiente sonoro gerado na hora, sim. Encosta em jogo, em acessibilidade, em interface conversacional, em produção audiovisual e em segurança — a voz vinha sendo usada como prova de identidade e deixou de servir.

**Por que merece mapa de futuro e não levantamento de estado da arte.** Porque o estado da arte, medido, já responde à pergunta técnica. Num teste cego encomendado à Ipsos, **97% não distinguiram** música gerada de música humana — e o desenho da amostra (9.000 pessoas em oito países, incluindo o Brasil) consta do comunicado original do Deezer, que é inacessível a cliente automatizado e está registrado em 12.4.1. A qualidade parou de ser a variável. O que está em disputa — e é isso que um mapa serve para explorar — é a **estrutura**: quem pode exportar o que gerou, o que conta como prova de origem, e o que acontece com a voz quando ela deixa de identificar quem fala. Essas três perguntas têm dono, têm data e têm alternativas em aberto. É onde o futuro ainda não está decidido.

### 2.1 O briefing desta rodada (premissas declaradas)

Esta rodada foi executada em **modo não interativo**, a partir de um bloco `briefing:` completo. Não houve entrevista; o briefing a substitui sem rebaixamento de confiança, e o que ele não cobriu está declarado aqui como premissa assumida.

| Item | Valor | Origem |
|---|---|---|
| Modo | MAPA | briefing |
| Horizonte | 2031 | briefing |
| Público | quem projeta mídia e interação | briefing |
| Recorte | global, com nota sobre o Brasil | briefing |
| Descartado de início | o que já é comum em produto de massa | briefing (é a régua da disciplina) |
| Disrupção suspeita pelo autor | nenhuma — descobrir | briefing |
| Viés | neutro | briefing |
| Falseador declarado | adoção já passada da maioria inicial (Rogers), ou tecnologia que não rompe nada | briefing |
| Zona de interesse | Percepção e mídia sintética | briefing |
| Profundidade | três ordens | briefing |
| Busca na web | sim, e só cita o que abriu | briefing |
| **Premissa assumida 1** | o mapa trata som e voz **gerados**; imagem em movimento (tema 12) e IA no dispositivo em geral (tema 16) só entram quando o objeto for áudio | fronteira dada pela disciplina, aplicada por mim |
| **Premissa assumida 2** | "adoção" é medida por artefato público verificável (produto no ar, número divulgado, lei em vigor), não por projeção de mercado | minha, para poder aplicar a régua do §2 |
| **Premissa assumida 3** | quando duas fontes abertas divergem num número, registro as duas e não escolho | minha, ver seção 8 |

## 3. Onde isso está hoje

*Âncora feita **com** acesso à web em 11/09/2026. Vinte e sete fontes abertas e lidas; as que não abriram estão na seção 12.4 e não foram usadas. Nenhum rebaixamento de confiança por falta de busca.*

### 3.1 O que já existe e funciona

**Música gerada inteira, em escala de produto de massa.** O Suno levantou US$ 400 milhões em 4 de junho de 2026, liderado pela Bond Capital, a uma avaliação de **US$ 5,4 bilhões** — mais que o dobro dos US$ 2,45 bi de novembro de 2025 —, com **mais de 100 milhões de pessoas** já tendo usado a plataforma e o primeiro lugar na categoria Música da App Store "em dezenas de países", nas palavras do CEO Mikey Shulman. Em **10 de setembro de 2026** — um dia antes desta rodada — o Suno lançou os modelos **v6**, treinados, segundo o diretor de produto Jack Brody, "from the ground up on licensed data provided to us by our partners", a Warner Music Group. No mesmo mês a empresa **adicionou marca d'água** ao áudio e **teto mensal de download**.

**Os canais separados, que eram o limite.** O Suno separa hoje em três modos: *Auto Split* ("Suno analyzes the track and divides it into up to 12 stems", 50 créditos), *Split from Mix* (um elemento mais o resto, 10 créditos), e *Advanced Split*, em que "Premier users can choose from **nearly 100 instrument types** for more targeted custom extraction". O guia é explícito quanto ao que não se resolveu: *"More specific does not mean artifact-free; source density and overlap still matter"* — sobra vazamento entre canais, artefato metálico, mudança de fase e instabilidade de grave. A atualização veio em **junho de 2026**, junto do Studio 2.0.

**A licença como forma de fechar a saída.** A Universal anunciou acordo com o Udio em **29 de outubro de 2025**: fim do litígio, licenças de fonograma e de edição, e uma plataforma nova "will be launched in 2026, will be powered by new cutting-edge generative AI technology that will be trained on authorized and licensed music". No dia seguinte, a central de ajuda do próprio Udio registrou a mudança em uma frase: **"downloading of audio, video, and stems has been disabled"** — compensada por crédito extra (1.000 créditos não expiráveis; assinatura padrão de 1.200 para 2.400 mensais).

**Fala local, sem chave de API e sem nuvem.** O **Moshi**, da Kyutai, é modelo de fundação fala-texto com diálogo *full-duplex* sobre o codec neural de streaming Mimi; código sob MIT e Apache 2.0, pesos sob CC-BY 4.0, e uma implementação **MLX com quantização int4/int8 "for on-device inference on iPhone and Mac"**. A latência declarada é **160 ms teóricos** (80 ms de quadro do Mimi + 80 ms de atraso acústico) e **"as low as 200ms"** na prática. No navegador, o **Kokoro** (82 M de parâmetros) roda com WebGPU num *space* público mantido pela webml-community.

**Geração de música no dispositivo, medida.** O runtime **aria** (Spanio e Rodà, arXiv 2607.08526, 10/07/2026) roda o Stable Audio 3 em duas configurações — *small-music* (20 blocos DiT, d=1024) e *medium* (1,2 B de parâmetros) — com quantização q8, W8A8 e q4. Em CPU pura com 20 threads, dez segundos de áudio saem em **2,5 s** (small) e **9,8 s** (medium); num Raspberry Pi 5 de 8 GB o modelo médio em 4 bits leva cerca de **200 s** para os mesmos dez segundos, com 0,9 GB residentes e 3,6 GB de pico, e o decodificador em streaming é **3,1× mais rápido por bloco**. A conclusão dos autores é a que interessa: "a state-of-the-art latent-diffusion music model can be deployed without a datacenter-oriented serving stack".

**Voz como negócio, em números.** A ElevenLabs fechou Série D de **US$ 500 milhões liderada pela Sequoia a US$ 11 bilhões**, em fevereiro de 2026; a receita recorrente saiu de US$ 330 M no fim de 2025 para cerca de US$ 450 M no primeiro trimestre e **US$ 600 M em junho de 2026**, alta de 175% em doze meses, com mistura de autosserviço e corporativo "approaching a 50/50 split" e 41% das empresas da Fortune 500 na base.

**Procedência: já é lei, com data.** As obrigações de transparência do **Artigo 50 do Regulamento europeu de IA aplicam-se desde 2 de agosto de 2026**. Quem provê sistema generativo tem de marcar a saída em formato legível por máquina — metadado, marca d'água ou impressão digital — e quem implanta um sistema que gera *deepfake* tem de divulgar que aquilo foi gerado; para áudio, a orientação sugere "audible warnings". Sistemas já no mercado antes daquela data têm até **2 de dezembro de 2026**. O Código de Conduta sobre marcação e rotulagem teve primeira minuta em **17 de dezembro de 2025**, segunda prevista para meados de março de 2026 e versão final para junho de 2026.

### 3.2 O que existe e ainda não funciona

**A plataforma licenciada do Udio.** Prometida para 2026 na nota de 29/10/2025, não estava no ar quando esta rodada foi feita; o que está no ar é a supressão do download. O acordo com a Universal, lido na íntegra, **não diz** se haverá opt-in por artista nem se o usuário poderá exportar — a nota é omissa nos dois pontos.

**A marca d'água.** O **HarmonicAttack** (Li, Hu, Grishchenko e Lie; arXiv 2511.21577, submetido em 26/11/2025 e revisto em 19/05/2026) remove marcas sem acesso ao algoritmo que as pôs, precisando apenas de pares de amostras: **92% de sucesso contra o AudioMarkNet no VCTK** e **100% contra todas as marcas testadas no FMA**, preservando a qualidade percebida, contra AudioSeal, WavMark, SilentCipher e AudioMarkNet. A resposta em curso é mudar de família — marca *semântica* em vez de psicoacústica (LambdaMark) —, e é resposta, não solução.

**A detecção de fala sintética.** Em avaliação com verificador ECAPA-TDNN treinado no VoxCeleb a 0,01% de taxa de falsa aceitação, três sistemas de clonagem passaram: **Bert-VITS2 em 82,7%**, **GPT-SoVITS em 56,2%** e **RVC em 43,1%** das tentativas. O detector de *deepfake* que acerta com **0,83% de EER** dentro do domínio vai a **24,84% fora** — "30× performance degradation".

**O tempo real conversacional.** O **Full-Duplex-Bench-v3** (Lin, Chen, Chen e Lee; arXiv 2604.04847, 06/04/2026) mediu seis sistemas em tarefas com chamada encadeada de ferramenta, usando fala humana com cinco categorias de disfluência. O melhor acerto foi do GPT-Realtime, com **Pass@1 de 0,600** e 13,5% de interrupções indevidas; a menor latência foi do Gemini Live 3.1, com **4,25 s** — e taxa de tomada de turno de 78,0%; a linha de base em cascata (Whisper → GPT-4o → TTS) manteve turno perfeito com **10,12 s**. Os modos de falha consistentes são autocorreção e raciocínio em vários passos. Ou seja: os 200 ms do Moshi são de *primeira sílaba*; a conversa útil ainda leva segundos.

**A regra brasileira.** O PL 2338/2023 foi **aprovado no Plenário do Senado em 10 de dezembro de 2024** e **remetido à Câmara em 17 de março de 2025** (Ofício SF nº 235). Buscas em 11/09/2026 não encontraram registro de aprovação em plenário na Câmara. O Brasil chega ao horizonte deste mapa sem regra própria em vigor.

### 3.3 Quem constrói

| Ator | O que constrói | Posição |
|---|---|---|
| **Suno** | geração de música completa, separação em stems, v6 licenciado | US$ 5,4 bi; 100 M de usuários; acordo com a WMG; litígio aberto com UMG e Sony |
| **Udio + UMG** | plataforma licenciada, jardim murado | download desligado desde 30/10/2025 |
| **ElevenLabs** | voz como serviço corporativo | US$ 600 M de ARR; US$ 11 bi |
| **Kyutai** | Moshi/Mimi, pesos abertos, MLX no iPhone | laboratório sem fins lucrativos; contrapeso aberto |
| **Stability + academia (Padova)** | Stable Audio 3 e o runtime aria quantizado | prova que música cabe em CPU e em Raspberry Pi |
| **Deezer e Spotify** | detecção, rotulagem, filtro de fraude | interessados: vendem confiança no catálogo |
| **Meta, Google** | AudioSeal, SynthID | marca d'água que os ataques de 2026 atravessam |
| **Comissão Europeia** | Artigo 50 e o Código de marcação | o único ator com data no calendário |

### 3.4 Os números da adoção, hoje

| Número | Valor | Data | Fonte |
|---|---|---|---|
| Faixas geradas entregues ao Deezer, por dia | 10.000 → 30.000 → 50.000 → 60.000 → 75.000 → **90.000** | jan/2025 · set/2025 · nov/2025 · jan/2026 · abr/2026 · **jun/2026** | Deezer, via TechCrunch |
| Fatia dos uploads diários | 10% → 28% → 34% → 39% → 44% → **mais de 50%** | mesma série | Deezer, via TechCrunch |
| Fatia da **escuta** | **1% a 3%** | 2026 | Deezer |
| Streams de faixas 100% geradas classificados como fraudulentos | **até 85%** | 2025 | Deezer |
| Faixas geradas detectadas e marcadas | **13,4 milhões** | 2025 | Deezer |
| Faixas de spam removidas pelo Spotify em 12 meses | **mais de 75 milhões** | set/2025 | MBW |
| Pessoas que não distinguiram IA de humano em teste cego | **97%** | nov/2025 | Ipsos p/ Deezer, via TechCrunch (amostra de 9.000 em 8 países: só no comunicado, ver 12.4.1) |
| Querem rotulagem clara | **80%** | nov/2025 | Ipsos p/ Deezer, via TechCrunch |
| Acham que música de IA não devia entrar nas paradas principais | **52%** | nov/2025 | Ipsos p/ Deezer, via TechCrunch |
| Usuários do Suno | **mais de 100 milhões** | jun/2026 | Music Ally |
| ARR da ElevenLabs | **US$ 600 M** (+175% a/a) | jun/2026 | Sacra |
| Tentativas de fraude no Brasil, 1º sem/2025 | **6.937.832** — uma a cada 2,3 s; 53,7% contra bancos | fev/2026 | Serasa Experian, via Tribuna do Sertão |
| Volume Pix 2024 | **R$ 27,3 trilhões** em 63,7 bilhões de operações | fev/2026 | Febraban, via Tribuna do Sertão |

A série importa mais que o número final: **dezoito meses para ir de 10% a mais de 50% dos uploads**, em linha reta, sem inflexão. É a curva mais rápida deste mapa, e é de oferta — não de demanda.

**A leitura destes números em uma frase:** som gerado é abundante; som gerado que alguém escolhe ouvir, não. A distância entre 50% dos uploads e 1–3% da escuta é o dado mais importante do presente, e é ele que impede o mapa de virar propaganda de substituição.

## 4. As disrupções-raiz

Quatro raízes passaram no critério. Três candidatos foram **recusados** por maturidade, e a recusa está registrada em 4.5 — inclusive a do sinal fraco que a própria disciplina apontou, e que caiu.

### 4.1 R1 — A fala sem turno e sem nuvem

*Fala conversacional gerada em tempo real, com sobreposição, rodando no dispositivo do usuário.*

- **O que rompe.** Duas coisas. A arquitetura: desde 2011 a fala do usuário viaja para um servidor, é transcrita lá e volta — e com ela viaja o registro do que foi dito. E a **unidade de interação**: o *turno* (eu falo, você responde) é convenção de desenho imposta pelo custo de manter dois fluxos de áudio simultâneos, não propriedade da conversa humana. Um modelo que modela "sua própria fala e a do usuário em fluxos paralelos", como o Moshi, dissolve o turno. Não é "o mesmo, mais barato": um sistema que pode falar enquanto você fala exige que alguém **decida quando ele cala** — e isso é objeto de projeto novo.
- **Por que agora, e não há cinco anos.** Codec neural de streaming com quadro de 80 ms (Mimi); quantização int4/int8 em runtime de dispositivo (MLX) e W8A8 em runtime nativo (aria); WebGPU em navegador de mercado. Em 2021 nada disso existia junto: o TTS de qualidade exigia GPU de servidor, e não havia formato de quantização que preservasse qualidade de áudio.
- **Onde está na difusão.** **Produto de nicho → adoção precoce.** Há pesos abertos (Moshi, CC-BY 4.0), há runtime de celular (MLX), há modelo de 82 M no navegador (Kokoro) — e não há produto de massa cujo diálogo falado rode inteiramente local.
- **O que ainda falta acontecer.** (i) Multilíngue: o Moshi é praticamente só inglês. (ii) Latência útil: os 4,25 s do melhor sistema sob disfluência real, medidos pelo Full-Duplex-Bench-v3, e não os 200 ms de primeira sílaba. (iii) Autocorreção — o modo de falha que o mesmo benchmark aponta como consistente. (iv) Orçamento de bateria para escuta contínua.
- **Quem bloqueia, e com que incentivo.** Quem fatura por minuto de áudio. A ElevenLabs, a US$ 600 M de ARR e com 41% da Fortune 500, não tem interesse em que a inferência saia da nuvem, e o instrumento de bloqueio não é jurídico — é a fronteira de qualidade: o modelo melhor continua fechado. Efeito gerado: `e2.3`.

### 4.2 R2 — A saída gerada deixa de ser um arquivo

*O resultado de gerar música passa a ser um estado dentro de uma plataforma, não um artefato exportável.*

- **O que rompe.** O artefato. Desde o fonógrafo, o produto do trabalho musical é uma coisa que se entrega: um disco, uma fita, um WAV. A licença que tornou a geração legal exige o controle da saída, e a primeira consequência foi literal — *"downloading of audio, video, and stems has been disabled"*. Isso rompe a cadeia inteira de quem trabalha com som aplicado: não se entrega trilha ao cliente, não se leva stem para a DAW, não se arquiva mestre.
- **Por que agora, e não há cinco anos.** Porque só em 2025–2026 os acordos existiram. Antes, geradores operavam fora da licença e por isso podiam ser generosos com a exportação; a passagem para dentro da licença é o que cria a restrição. É a mesma inversão que aconteceu na música em nuvem, mas por outro caminho: aqui é o **gerador** que vira distribuidor.
- **Onde está na difusão.** **Produto de nicho → adoção precoce.** Um dos dois grandes já suprimiu a saída por inteiro; o outro pôs teto mensal em setembro de 2026.
- **O que ainda falta acontecer.** (i) O Suno ainda permite download com teto — se o teto virar zero, a raiz se completa. (ii) UMG e Sony ainda litigam contra o Suno; o desfecho decide se o jardim é regra ou é caso. (iii) Nenhuma plataforma licenciada entregou ainda o produto prometido.
- **Quem bloqueia, e com que incentivo.** O próprio usuário pagante. Quando o Udio desligou o download, a reação forçou uma janela de 48 horas para salvar bibliotecas. O bloqueio funciona pelo cancelamento de assinatura, e o resultado observável é a solução intermediária — **teto em vez de proibição**. Efeito gerado: `e5.2`.

### 4.3 R3 — A assimetria permanente entre gerar e detectar

*Gerar melhora mais rápido do que detectar generaliza — e a diferença deixou de ser conjuntural.*

- **O que rompe.** A suposição, embutida em produto e em direito, de que a voz identifica quem fala. Rompe autenticação por voz em banco, rompe o áudio como prova entre pessoas, e rompe a economia da moderação: um detector é um produto que expira quando sai o gerador seguinte. Não é melhoria: é a **inversão do ônus** — quem afirma "é ele" passa a ter de provar, e não tem como.
- **Por que agora, e não há cinco anos.** Porque a assimetria virou **medida**, e não impressão: 82,7% de passagem contra um verificador comercial calibrado a 0,01% de falsa aceitação; degradação de trinta vezes na detecção fora do domínio; 100% de remoção de marca em corpus musical sem conhecer o algoritmo. Em 2021 clonar exigia minutos de áudio limpo e produzia artefato audível.
- **Onde está na difusão.** **Adoção precoce**, e é preciso separar duas coisas: o *ataque* já é corrente (uma tentativa de fraude a cada 2,3 s no Brasil, segundo a Serasa, embora só uma parte seja de voz), mas a *consequência estrutural* — aposentar a voz como fator — não é maioria em lugar nenhum.
- **O que ainda falta acontecer.** (i) Um caso grande o bastante para mover regulação bancária. (ii) Padrão de "liveness" que generalize — hoje não há. (iii) Alguma norma que trate voz como dado sensível; no Brasil, é exatamente o que a dublagem pede.
- **Quem bloqueia, e com que incentivo.** A indústria de detecção e biometria, que vive de vender a camada seguinte: admitir que a voz não serve destrói o produto. O resultado observável é empilhamento — voiceprint mais deepfake score mais liveness mais sinal comportamental — em vez de aposentadoria. Efeito gerado: `e9.2`.

### 4.4 R4 — Procedência obrigatória, com data no calendário

*A marcação legível por máquina deixa de ser boa prática e passa a ser condição de circulação legal do áudio na União Europeia.*

- **O que rompe.** O pipeline. Todo exportador de áudio ganha uma etapa que não existia, e ela é irredutível: não dá para "fazer depois". Rompe também o desenho sonoro, porque a divulgação de *deepfake* em áudio, se for audível, entra na peça. E rompe a jurisdição do produto: o gerador que atende a Europa marca; o que não atende, não.
- **Por que agora, e não há cinco anos.** Porque há data: **2 de agosto de 2026**, com prazo de 2 de dezembro de 2026 para o que já estava no mercado. Regra com data é diferente de regra em discussão — o Brasil está do outro lado dessa diferença, com o PL 2338 parado na Câmara desde março de 2025.
- **Onde está na difusão.** **Adoção precoce.** Em vigor há cinco semanas quando esta rodada foi feita; o Código de Conduta que diria *como* marcar áudio teve minuta em dezembro de 2025 e versão final prevista para junho de 2026, e o símbolo europeu único ainda não existe (usa-se ícone interino "AI"/"KI"/"IA").
- **O que ainda falta acontecer.** (i) O padrão técnico para áudio. (ii) Alguma fiscalização real — nenhuma multa conhecida. (iii) Resolver a contradição com R3: a lei exige marca; o ataque publicado remove 100% delas.
- **Quem bloqueia, e com que incentivo.** As plataformas de distribuição, que transcodificam todo áudio que recebem e, ao fazê-lo, destroem metadado e degradam marca — sem intenção e sem responsabilidade atribuída. Efeito gerado: `e13.1`.

### 4.5 O que foi recusado como raiz, e por quê

- **Candidato recusado: "música completa gerada a partir de uma descrição".** Recusado por maturidade. Mais de 100 milhões de usuários, primeiro lugar na categoria Música da App Store em dezenas de países, camada gratuita. Pela régua da disciplina — *se dá para fazer com o que já é comum em produto de massa, é maduro* — isto é maduro. Tratado como contexto na seção 3. Esta é a recusa que mais muda o mapa: a disciplina o apresenta como uma das duas rupturas-raiz, e em setembro de 2026 ele já não rompe nada — o que rompe é o que se pode **fazer com** o que se gerou.
- **Candidato recusado: "fala sintética de qualidade humana (TTS)".** Recusado por maturidade. Um modelo de 82 M de parâmetros roda no navegador com WebGPU; a maior empresa do ramo faz US$ 600 M de ARR com 41% da Fortune 500. Entra no mapa como contexto e como efeito, não como raiz.
- **Candidato recusado: "assistente de voz em nuvem".** Recusado por maturidade, em base qualitativa: é a interface de voz padrão de três sistemas operacionais de massa há mais de uma década. Não usei número de mercado porque as fontes que os traziam não foram abertas (ver 12.4).
- **Sinal fraco declarado pela disciplina e falseado nesta rodada: "não entrega os canais separados".** A disciplina apontou isto como *o* sinal a observar, e registrou que "o dia em que for [editável] muda o jogo de novo". **O dia foi junho de 2026.** O Suno separa até 12 canais no modo automático e quase cem tipos de instrumento no modo avançado. O jogo mudou, e mudou na direção oposta à esperada: não para "música gerada é editável, logo entra na produção profissional", mas para **"música gerada é editável onde não é licenciada, e não é exportável onde é"**. É por isso que R2 existe.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A fala sem turno e sem nuvem — diálogo falado full-duplex rodando no dispositivo
    efeitos:
      - id: e1
        ordem: 1
        efeito: Interfaces de voz passam a ser projetadas com interrupção como estado normal, e não como exceção
        sinal: medio
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O roteiro de diálogo deixa de ser árvore de turnos e vira política de interrupção versionada
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O mapa de sobreposição entra no design system como artefato versionado ao lado do mapa de estados
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Times de produto passam a medir latência sob fala disfluente real em vez de fala limpa de laboratório
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Contratos de nível de serviço de agentes de voz passam a citar percentil de latência com disfluência, não média
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Aplicativos de voz passam a funcionar sem chave de API e sem conta, e com isso somem os registros centrais do que foi dito
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O preço por minuto de áudio perde a faixa de baixo valor e concentra-se no que exige nuvem — memória longa, ferramenta e conformidade
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Provedores de voz reprecificam por sessão com ferramenta em vez de por minuto sintetizado
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: A pesquisa de experiência em voz perde seu instrumento principal, porque o log de servidor deixa de existir
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Times de produto voltam a pesquisa qualitativa presencial de voz por falta de telemetria
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.3
            ordem: 2
            efeito: A melhor voz permanece na nuvem porque quem financia a fronteira cobra por ela, e o local fica um degrau atrás de forma estável
            sinal: medio
            prazo: 2028
            confianca: media
      - id: e3
        ordem: 1
        efeito: Acessibilidade deixa de depender do catálogo de vozes do sistema operacional e passa a usar modelo embarcado escolhido pela pessoa
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Línguas sem mercado ganham voz sintética por esforço comunitário, porque treinar ficou mais barato que convencer uma empresa
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A disputa se desloca para dentro do português — a variedade documentada ganha voz e a não documentada não
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: O microfone permanentemente aberto vira permissão explícita, e a recusa passa a ser um estado de projeto de primeira classe
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: O modo sem voz deixa de ser acessibilidade e vira requisito de contexto — transporte, escritório aberto, casa compartilhada
            sinal: fraco
            prazo: 2029
            confianca: media
          - id: e4.2
            ordem: 2
            efeito: Quem não pode falar passa de excluído a caso central, porque o mesmo modelo que gera voz reconstrói fala a partir de entrada parcial
            sinal: fraco
            prazo: 2030
            confianca: baixa
  - disrupcao: A saída gerada deixa de ser um arquivo — a licença fecha a exportação
    efeitos:
      - id: e5
        ordem: 1
        efeito: O entregável do trabalho musical deixa de ser um arquivo e passa a ser um direito de reprodução dentro de uma plataforma
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Produtoras e agências passam a exigir cláusula de exportação no contrato da ferramenta, como já exigem fonte licenciada
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Surge seguro de cadeia de título para trilha gerada, porque o cliente não consegue provar de onde ela veio
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: A reação de quem paga força teto de download em vez de proibição, e o download vira item vendido à parte
            sinal: medio
            prazo: 2027
            confianca: media
          - id: e5.3
            ordem: 2
            efeito: Modelos abertos e locais herdam o público que quer o arquivo, e o campo parte-se em licenciado-sem-saída contra livre-com-saída
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e6
        ordem: 1
        efeito: A separação em canais deixa de ser limite técnico e vira item de assinatura
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: A produção migra de gravar-e-mixar para gerar-separar-e-reparar, porque o material chega com artefato conhecido
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Fabricantes de plug-in passam a vender restauração de canal separado como categoria, ao lado de redução de ruído
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: A trilha genérica por encomenda perde preço enquanto a peça de identidade de marca não perde — a substituição é por tipo de peça, não por ofício
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Bibliotecas de música de produção reposicionam-se como vendedoras de garantia de cadeia de título em vez de acervos
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: O litígio individual deixa de ser caminho e vira moeda de entrada, encerrando-se em acordo confidencial antes de produzir prova pública
        sinal: medio
        prazo: 2027
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O artista independente perde o instrumento de descoberta pública sobre o que havia no conjunto de treino
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A informação sobre o conteúdo do treino passa a circular por vazamento e engenharia reversa em vez de instrução processual
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: Gravadoras preferem a licença ao processo porque a licença entrega o controle da saída que a sentença não entregaria
            sinal: forte
            prazo: 2027
            confianca: alta
      - id: e8
        ordem: 1
        efeito: O consentimento vocal do artista vira produto configurável, com chave por nome, imagem, voz e composição
        sinal: fraco
        prazo: 2029
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Abre-se a assimetria entre quem tem catálogo negociável e quem não tem — o artista sem gravadora não tem a quem dar consentimento
            sinal: fraco
            prazo: 2030
            confianca: baixa
  - disrupcao: A assimetria permanente entre gerar e detectar
    efeitos:
      - id: e9
        ordem: 1
        efeito: A voz sai da lista de fatores de autenticação em transação de risco e volta apenas como sinal de risco
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: O atendimento por telefone incorpora fricção nova e o tempo de atendimento sobe — o custo da fraude vira custo de experiência
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: A ligação telefônica perde função decisória e passa a servir para conversar, não para autorizar
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: O mercado de detecção empilha camadas sobre a voz em vez de aposentá-la, porque aposentá-la extingue o próprio produto
            sinal: medio
            prazo: 2028
            confianca: media
      - id: e10
        ordem: 1
        efeito: O áudio deixa de convencer entre pessoas, e o recado de voz pedindo dinheiro perde força probatória no cotidiano
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Forma-se um hábito doméstico de verificação fora da banda, sem produto, sem norma e sem quem ensine
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: Aplicativos de mensagem e bancos embutem verificação fora da banda dentro da própria conversa
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: O custo da desconfiança recai sobre quem depende do áudio por não escrever — idoso, baixa escolaridade, deficiência visual
            sinal: fraco
            prazo: 2029
            confianca: media
      - id: e11
        ordem: 1
        efeito: Detector treinado num gerador para de servir no gerador seguinte, e a detecção vira assinatura contínua em vez de software comprado
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: Plataformas preferem sinal de comportamento a sinal acústico, porque o comportamento generaliza e o acústico não
            sinal: medio
            prazo: 2028
            confianca: media
          - id: e11.2
            ordem: 2
            efeito: A pesquisa em marca d'água migra de imperceptibilidade para semântica, porque a psicoacústica é exatamente o que o ataque explora
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e12
        ordem: 1
        efeito: A dublagem brasileira disputa no plano da lei o que perdeu no plano do custo, tratando a voz como dado pessoal sensível
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: O contrato de dublagem separa prestação de serviço de cessão de voz, e a segunda passa a ter preço próprio
            sinal: fraco
            prazo: 2030
            confianca: baixa
  - disrupcao: Procedência obrigatória com data no calendário — o Artigo 50 em vigor
    efeitos:
      - id: e13
        ordem: 1
        efeito: Todo exportador de áudio que atende a Europa embute marca legível por máquina, e o pipeline de produção ganha uma etapa nova
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: A marca não sobrevive ao reencode das plataformas, e a conformidade vira marcado-na-origem e perdido-no-caminho
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: A responsabilidade migra do gerador para o distribuidor, porque é ele quem destrói a marca ao transcodificar
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e13.2
            ordem: 2
            efeito: O aviso audível é recusado por quem projeta som porque estraga a peça, e a divulgação recua para o metadado que ninguém lê
            sinal: fraco
            prazo: 2028
            confianca: baixa
            efeitos:
              - id: e13.2.1
                ordem: 3
                efeito: Surge um vocabulário sonoro curto de procedência, como surgiu o obturador falso da câmera de celular
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e14
        ordem: 1
        efeito: A exigência de procedência favorece o jardim murado, porque só a plataforma fechada garante que a marca chegue a quem escuta
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: O modelo aberto rodando local vira o ponto cego da regra, porque não há a quem obrigar num binário dentro de um notebook
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: A resposta regulatória desloca-se do modelo para o dispositivo, exigindo marcação no sistema operacional
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e14.2
            ordem: 2
            efeito: Empresas de mídia passam a pagar mais pela voz que vem com papelada auditável, e o preço da procedência separa-se do preço do áudio
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e15
        ordem: 1
        efeito: Serviços de streaming separam catálogo por origem declarada, e as paradas principais viram espaço curado por procedência
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: A declaração de uso de IA vira metadado comercial disputado — declarar de menos vira risco e declarar de mais vira perda de alcance
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: Distribuidores passam a vender otimização de declaração como serviço, ao lado da otimização de metadado
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e15.2
            ordem: 2
            efeito: O artista sintético com nome e rosto deixa de ser escândalo e vira categoria de catálogo com regra própria
            sinal: medio
            prazo: 2028
            confianca: media
      - id: e16
        ordem: 1
        efeito: O Brasil chega ao horizonte sem regra própria e importa a régua europeia por via contratual, via quem exporta mídia
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e16.1
            ordem: 2
            efeito: Forma-se uma assimetria interna — a mídia brasileira de exportação é rotulada e a de consumo interno não
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e16.1.1
                ordem: 3
                efeito: O rótulo inverte de sinal e passa a marcar exportabilidade e conformidade em vez de alerta
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### 5.1 Os mecanismos, um a um

O bloco acima diz *o quê*. Aqui está o *porque* — e o teste de especificidade, aplicado.

**R1 → e1.** Porque um modelo que gera a própria fala e escuta a do usuário em fluxos paralelos (Mimi/Moshi) torna a sobreposição barata, e o que era impossível vira decisão de produto: alguém tem de escrever quando o sistema cala. *Especificidade:* troque a raiz por "modelos maiores" e a frase deixa de valer — modelo maior não dissolve o turno; arquitetura de dois fluxos, sim. *Sinal medio:* três artefatos verificáveis — Moshi, o Full-Duplex-Bench-v3 e os sistemas que ele mede (GPT-Realtime, Gemini Live 3.1). *Prazo 2028, classe de referência:* o barge-in em URA telefônica levou cerca de quatro anos do lançamento à presença corrente; aqui o software já existe e falta o padrão de projeto, então quatro anos a partir de 2024 é o piso.

**e1 → e1.1 → e1.1.1.** Porque, se a interrupção é normal, o roteiro deixa de ser sequência e passa a ser política — e política se versiona. O neto muda de ator (do redator para o design system) e de mecanismo (de decisão para artefato compartilhado): passa na regra de parada.

**e1 → e1.2 → e1.2.1.** Porque o benchmark aberto mostrou 4,25 s no melhor caso sob disfluência real contra latências de laboratório em centenas de milissegundos; quem projeta descobre a diferença ao entregar. Classe de referência para o SLA: o percentil 95 de latência entrou nos contratos de API web cerca de cinco anos depois de a métrica existir.

**R1 → e2.** Porque o modelo cabe: 82 M no navegador, int4 no iPhone, W8A8 numa CPU de 20 threads gerando dez segundos de música em 2,5 s. Sem chamada de rede não há registro central — e é este o efeito que muda projeto, não a economia de custo. *Especificidade:* "aplicativos ficam mais baratos" serviria para qualquer raiz; "some o log" só decorre de a inferência sair do servidor.

**e2 → e2.1 → e2.1.1.** Porque quem cobra por minuto perde o minuto que agora é grátis, e sobra o que exige estado — memória, ferramenta, auditoria. Classe de referência: a mesma erosão aconteceu com OCR e com tradução automática, ambas de US$/página para grátis-no-dispositivo em cerca de seis anos.

**e2 → e2.2 → e2.2.1.** Porque o log de servidor é a matéria-prima da pesquisa de voz. Sem ele, resta telemetria consentida — que é menos e é enviesada. **Este é um efeito de quem perde:** o time de pesquisa.

**e2 → e2.3.** *Retroação de R1.* Porque a fronteira de qualidade é financiada por quem cobra: US$ 600 M de ARR e 41% da Fortune 500 compram muita GPU. O local não alcança, e a diferença é o que segura a raiz.

**R1 → e3 → e3.1 → e3.1.1.** Porque escolher a voz deixa de depender de a Apple, a Google ou a Microsoft acharem que vale a pena embalar aquele idioma. O neto é o incômodo: o mesmo mecanismo que liberta a língua sem mercado seleciona *variedades* dentro do português — o viés de seleção de variedade descrito por Freitag (2024), em que a variante documentada é padronizada porque tem dado, e a não documentada some. *Prazo 2030–2031:* classe de referência é o Common Voice, que levou seis anos para produzir corpus utilizável em línguas de baixo recurso.

**R1 → e4 → e4.1 / e4.2.** Porque o full-duplex exige escuta contínua, e escuta contínua é uma permissão que hoje quase nenhum produto pede. Em e4.1, o mecanismo é o contexto físico, não a preferência: transporte lotado e escritório aberto não deixam falar, e isso independe de gosto. Em e4.2 o mecanismo é técnico e vira ganho: o modelo que reconstrói fala a partir de entrada parcial serve exatamente a quem tem disfluência ou afasia. **STEEP social**, e é o único efeito claramente positivo desta raiz.

**R2 → e5.** Porque a licença que legaliza a geração exige controle da saída, e o instrumento de controle é desligar a exportação — literalmente, em uma linha de central de ajuda. *Sinal forte:* três artefatos — a supressão no Udio, o teto mensal no Suno v6, e a janela de 48 h que provou que a supressão é política, não bug. *Prazo 2028, classe de referência:* o vídeo em rede social levou cerca de três anos para que "publicar" passasse a significar "existir só dentro do aplicativo".

**e5 → e5.1 → e5.1.1.** Porque quem contrata trilha precisa entregar mestre ao cliente e arquivar. Sem exportação, o contrato quebra — logo o contrato muda antes do produto. O neto (seguro de cadeia de título) tem classe de referência clara: o seguro de erros e omissões em produção audiovisual levou cerca de oito anos para virar exigência padrão de distribuidor.

**e5 → e5.2.** *Retroação de R2.* Porque quem paga cancela. O Udio reabriu por 48 horas; o Suno preferiu teto a proibição. O freio tem dono e tem preço.

**e5 → e5.3.** Porque a demanda por arquivo não some quando a oferta licenciada some — ela migra. **Convergência com R1:** o mesmo modelo local que resolve a fala resolve o arquivo.

**R2 → e6 → e6.1 → e6.1.1.** Porque a separação existe e é vendida por crédito, mas sai com artefato declarado pelo próprio fornecedor (vazamento, metálico, fase, grave). O trabalho que resta não é mixar: é reparar. Classe de referência para o neto: a categoria de plug-ins de redução de ruído e de reverberação levou cerca de cinco anos do primeiro produto à prateleira padrão.

**e6 → e6.2 → e6.2.1.** Porque a substituição é seletiva. O que cai é a peça sem identidade — e há um número, ainda que de parte interessada: o processo da Poseidon Wave alega queda de quase 80% na receita de sync desde o lançamento do Suno, sobre 236 obras. **Quem perde:** o compositor de biblioteca. O neto inverte o produto da biblioteca: ela deixa de vender faixa e passa a vender a certeza de quem é o dono.

**R2 → e7 → e7.1 → e7.1.1 / e7.2.** Porque o processo de 12 de maio de 2026 foi retirado **com prejuízo** em agosto de 2026, sem explicação nos autos — e retirada com prejuízo, sem sentença, é o formato do acordo confidencial. O efeito de segunda ordem é a perda de um bem público: a instrução processual era o único caminho pelo qual o conteúdo do treino se tornaria conhecido. *Sinal forte em e7.2:* três acordos verificados (UMG-Udio, WMG-Suno, e o v6 que dele nasceu).

**R2 → e8 → e8.1.** Porque o acordo WMG-Suno prevê controle de artista sobre nome, imagem, voz e composição, e o remix "will include only artists who explicitly agree". *Sinal fraco, e é deliberado:* a WMG **não revelou** se houve opt-out no treino. **Quem perde:** o artista sem gravadora, que não tem interlocutor a quem dar ou negar consentimento.

**R3 → e9 → e9.1 → e9.1.1 / e9.2.** Porque 82,7% de passagem contra um verificador calibrado a 0,01% de falsa aceitação não é margem de erro: é o fim do fator. O mecanismo de e9.1 é econômico — a fricção que substitui a voz custa tempo de atendente. *Prazo 2028–2029, classe de referência:* a depreciação do SMS como segundo fator foi recomendada em 2016 e **ainda não terminou** em 2026; segurança se aposenta devagar, e por isso e9 não recebeu confiança alta.

**R3 → e10 → e10.1 → e10.1.1 / e10.2.** Porque o áudio curto pedindo dinheiro é o vetor de maior alcance no Brasil, onde o Pix moveu R$ 27,3 trilhões em 2024 e a Serasa contou uma tentativa de fraude a cada 2,3 segundos. **Quem perde, em e10.2:** quem usa áudio por não escrever. O mecanismo é direto — a defesa recomendada (verificar por outro canal) pressupõe outro canal. *Prazo empurrado para 2029* (ver seção 7): a desconfiança do e-mail levou cerca de quinze anos para virar hábito doméstico.

**R3 → e11 → e11.1 / e11.2.** Porque 0,83% → 24,84% de EER fora do domínio significa que o detector envelhece a cada lançamento. Em e11.1 o mecanismo é a escolha racional da plataforma: o Spotify removeu 75 milhões de faixas com filtro que olha **comportamento** — upload em massa, título duplicado, faixa de menos de 30 segundos —, não timbre. Em e11.2, a migração para marca semântica é resposta direta ao HarmonicAttack, que ataca justamente o mascaramento psicoacústico.

**R3 → e12 → e12.1.** Porque o setor de dublagem já pediu isto por escrito, em audiência na Câmara, e o pedido é específico: voz como dado sensível na LGPD e uso de IA só para ajuste técnico com supervisão humana. O Ministério da Cultura, na mesma audiência, descreveu o problema como "renúncia dos direitos de autor e transferência definitiva do direito de personalidade, ou seja, do direito sobre a própria voz". **É o efeito com nome, regulador e projeto identificados** — sem isso não entraria, por ser da família proibida "reguladores criam categoria nova".

**R4 → e13 → e13.1 → e13.1.1 / e13.2 → e13.2.1.** Porque a obrigação está em vigor desde 2 de agosto de 2026 e o legado tem até 2 de dezembro. O mecanismo de e13.1 é banal e decisivo: plataforma de distribuição transcodifica tudo o que recebe. Em e13.2, o mecanismo é profissional — quem desenha som recusa um aviso audível dentro da peça, e a norma cede para o metadado. O neto tem classe de referência forte: o som falso de obturador em câmera de celular nasceu de exigência regulatória japonesa e virou convenção sonora mundial em cerca de cinco anos.

**R4 → e14 → e14.1 → e14.1.1 / e14.2.** **É o ciclo central do mapa.** Porque só quem controla a reprodução pode garantir que a marca chegue ao ouvinte; logo a forma mais barata de cumprir o Artigo 50 é fechar o jardim — o que R2 já estava fazendo por motivo comercial. Em e14.1 o mecanismo é jurisdicional: não há destinatário de obrigação num binário CC-BY 4.0 rodando num notebook. O neto (marcação no sistema operacional) tem prazo 2032, **fora da janela deste mapa**, e está declarado.

**R4 → e15 → e15.1 → e15.1.1 / e15.2.** Porque há demanda medida — 80% querem rótulo, 52% não querem IA nas paradas principais — e há infraestrutura de declaração (o padrão DDEX adotado pelo Spotify, que afirma não rebaixar por declarar). O mecanismo de e15.1 é o incentivo torto que nasce daí: se declarar não penaliza mas rotular segrega, a declaração vira jogo. Em e15.2, o artefato é a Xania Monet — #3 em Hot Gospel Songs, #20 em Hot R&B Songs, contrato de US$ 3 milhões com a Hallwood Media em setembro de 2025.

**R4 → e16 → e16.1 → e16.1.1.** Porque o PL 2338 está na Câmara desde 17 de março de 2025 sem votação em plenário, e enquanto isso a régua que vale para produto brasileiro exportado é a europeia. O neto é a inversão de significado: rótulo que nasce como alerta acaba como selo — a mesma trajetória do "produto orgânico certificado".

### 5.2 Cobertura STEEP e quem perde

| Dimensão | Onde aparece | Observação |
|---|---|---|
| **Social** | e4.1, e4.2, e10.1, e10.2, e3.1.1 | é onde o mapa é mais rico e menos verificável |
| **Tecnológico** | e1, e2, e6, e11, e13 | é onde há mais artefato aberto |
| **Econômico** | e2.1, e5, e6.2, e7, e14.2, e15.1 | dominante, e este é um viés declarado na seção 7 |
| **Ecológico** | — **vazio** | não forcei. A geração de áudio no dispositivo tem efeito energético real, mas não achei número aberto que o dimensionasse; registro a lacuna em 12.5 |
| **Político/jurídico** | e7.1, e12, e13, e14.1, e16 | a única dimensão com data no calendário |

**Quem perde, nomeadamente:** o compositor de biblioteca (e6.2); o time de pesquisa de voz (e2.2); o artista sem gravadora (e8.1); quem depende de áudio por não escrever (e10.2); o artista independente que perde a via judicial de descoberta (e7.1); quem fala variedade não documentada do português (e3.1.1); a plataforma de distribuição, que herda responsabilidade sem ter causado o problema (e13.1.1).

### 5.3 Cruzamentos

**Convergência — o achado.** `e2` (fala sem log, no dispositivo) e `e5.3` (arquivo migra para o modelo aberto) chegam ao mesmo efeito de segunda ordem por raízes diferentes: **o áudio deixa de existir como arquivo controlável — na fala porque é sintetizado no momento do consumo e nunca é gravado, na música porque a licença proíbe exportar.** Duas causas opostas (liberdade técnica de um lado, restrição contratual do outro) produzindo a mesma perda: não há objeto para inspecionar, arquivar ou rotular. Quem projeta mídia e interação deveria estar mais preocupado com isso do que com qualidade de síntese.

**Retroalimentação — o ciclo que se fecha.** `e14` reforça R2, que por sua vez torna R4 mais fácil de cumprir, que reforça `e14` outra vez. Escrito: a lei exige procedência → só o jardim murado garante procedência → o jardim murado cresce → a regra passa a ser desenhada para o mundo em que o jardim é a norma → o modelo aberto e local (R1) fica cada vez mais difícil de acomodar. **A regulação de transparência, sem contramedida, concentra o mercado.** É o ciclo mais importante deste mapa e não estava no roteiro.

**Contradição — não resolvida.** `e13` (todo áudio é marcado) contra `e11`/`e11.2` (a marca é removível: 100% de sucesso do HarmonicAttack no FMA, sem acesso ao algoritmo). Os dois efeitos estão no mapa e não podem coexistir em regime estável. **O que decide entre eles** é uma coisa só: se marca semântica — do tipo LambdaMark — resistir a ataque adaptativo em avaliação independente até 2028. Se resistir, `e13` vale e `e14` fica mais forte. Se não resistir, `e13` vira teatro de conformidade e o Artigo 50 protege menos do que promete. **É exatamente isto que o experimento da seção 10 mede.**

**Segunda contradição, menor.** `e5.2` (teto em vez de proibição, porque o usuário reage) contra `e5` (o entregável deixa de ser arquivo). Decide-se pelo desfecho do litígio UMG/Sony contra o Suno: se o Suno perder, o teto vira zero.

## 6. Sinais fracos e wildcards

### 6.1 Sinais fracos

**SF1 — Marca d'água semântica.** *Onde:* a linha de pesquisa que responde ao HarmonicAttack propondo marca ligada ao conteúdo, e não ao mascaramento psicoacústico. *O que mudaria:* resolve a contradição central do mapa e torna o Artigo 50 executável. *Sinal observável de crescimento:* uma avaliação **independente** (não do proponente) mostrando resistência a ataque adaptativo com queda de qualidade menor que a de um reencode comum.

**SF2 — O aviso audível como convenção estética.** *Onde:* a orientação europeia sugere "audible warnings" para áudio, e não existe símbolo sonoro padrão. *O que mudaria:* um som curto de procedência entraria em toda peça de mídia, como o obturador falso entrou em toda câmera. *Sinal observável:* a versão final do Código de Conduta trazendo especificação **sonora**, e não só de metadado.

**SF3 — Geração de áudio em computador de trinta dólares.** *Onde:* o runtime aria rodando o Stable Audio 3 num Raspberry Pi 5, com o modelo pequeno em 8 bits ocupando dezenas de megabytes. *O que mudaria:* som gerado dentro de brinquedo, eletrodoméstico, instalação e placa de sinalização — sem rede, sem conta, sem log e sem quem marcar. *Sinal observável:* o primeiro produto de prateleira com geração de áudio embarcada anunciada como característica.

**SF4 — A voz sem catálogo.** *Onde:* Moshi só em inglês, Kokoro em poucas línguas, e a advertência de Freitag (2024) sobre o viés de seleção de variedade. *O que mudaria:* se a comunidade brasileira produzir voz sintética de variedades regionais, o mapa ganha um ramo positivo; se não produzir, o português sintético converge para uma variedade só. *Sinal observável:* um conjunto de dados público de fala em variedade não hegemônica do português com licença permissiva e mais de cem horas.

**SF5 — Recusa de exportação como padrão de assinatura.** *Onde:* a frase única na central de ajuda do Udio; o teto mensal do Suno v6. *O que mudaria:* se um terceiro grande adotar, "gerar sem poder baixar" vira norma do setor em vez de consequência de um acordo. *Sinal observável:* uma ferramenta de áudio **fora** da música — voz, efeito, ambiente — desligando o download por motivo de licença.

**SF6 — A retirada silenciosa do processo.** *Onde:* duas ações contra o Suno encerradas em agosto de 2026, uma com prejuízo e outra sem, nenhuma com explicação nos autos. *O que mudaria:* se virar padrão, o conteúdo dos conjuntos de treino nunca se tornará público por via judicial. *Sinal observável:* três retiradas com prejuízo em doze meses sem sentença de mérito em nenhuma delas.

### 6.2 Wildcards

**W1 — O ataque que mata a marca por dentro (probabilidade baixa, impacto alto).** *Mecanismo:* alguém publica, com pesos abertos, um removedor de marca de áudio que roda em tempo real no dispositivo, generaliza para famílias não vistas e degrada menos que um reencode em Opus. Não é ficção: o caminho é o do HarmonicAttack — treinar sobre pares limpo/marcado, sem acesso ao algoritmo — reduzido a rodar em CPU. *Por que é improvável:* exige generalização entre famílias, que hoje é justamente o que falha em detecção; e o custo reputacional de publicar é alto. *O que faria com o mapa:* `e13`, `e13.1` e `e14` caem juntos; o Artigo 50 perde eficácia e a resposta política vira proibição de modelo aberto — o cenário indesejável da seção 9. *Sinal precoce:* um removedor de marca aparecendo como opção de um só clique em ferramenta popular de edição de áudio.

**W2 — O artista sintético em número um (probabilidade baixa, impacto alto).** *Mecanismo:* a rampa já existe — Xania Monet chegou a #3 em Hot Gospel Songs e #20 em Hot R&B Songs, com contrato de US$ 3 milhões. Basta uma peça sintética alcançar a parada principal, e não uma parada de gênero. *Por que é improvável no horizonte:* a fatia de escuta é de 1% a 3%, e 52% do público pesquisado é contra a presença nas paradas principais. *O que faria com o mapa:* `e15` e `e15.2` saltam de 2028–2029 para imediato, e a pressão por segregação de catálogo vira decisão de plataforma em meses, não em anos. *Sinal precoce:* um serviço de streaming anunciando parada separada por origem declarada — a segregação precede o pico, não o contrário.

**W3 — A voz é declarada dado sensível no Brasil antes de a regra geral existir (probabilidade baixa, impacto médio-alto).** *Mecanismo:* a LGPD é alterada por projeto específico de dublagem, e não pelo marco geral de IA, que está parado desde março de 2025. Uma lei setorial pode andar mais rápido que uma lei geral — e o setor já tem mobilização, audiência pública e ideia legislativa com apoio suficiente para virar sugestão. *Por que é improvável:* projetos setoriais de cultura raramente furam fila de pauta. *O que faria com o mapa:* `e12` e `e12.1` antecipam-se, o Brasil deixa de ser importador de régua (`e16` cai) e passa a ter, num ponto específico, regra mais estrita que a europeia. *Sinal precoce:* aprovação em comissão de mérito, com parecer favorável, de qualquer projeto que inclua voz no artigo 5º da LGPD.

**W4 — Um grande fabricante embarca fala full-duplex local por padrão (probabilidade média-baixa, impacto alto).** *Mecanismo:* já há implementação MLX de diálogo full-duplex "for on-device inference on iPhone and Mac" com pesos CC-BY. Falta a decisão comercial de um fabricante de sistema operacional. *Por que é improvável no horizonte:* o relato disponível sobre a reconstrução dos assistentes em 2026 aponta na direção oposta — mais nuvem, não menos. *O que faria com o mapa:* R1 salta de adoção precoce para maioria em dois anos; `e2` e `e2.3` invertem-se; e o ponto cego de `e14.1` deixa de ser marginal e vira o caso principal, forçando `e14.1.1` para dentro da janela. *Sinal precoce:* uma API pública de sistema operacional que exponha diálogo falado contínuo local, sem chave e sem cota.

## 7. Contra o próprio mapa

Esta seção é o relato da bateria aplicada **sobre o mapa já pronto**, e o bloco YAML da seção 5 já está na versão pós-bateria. O registro de alterações está em 7.8, com valor antes e depois.

### 7.1 Pré-mortem: é 2031 e este mapa se mostrou errado. Por quê?

**Razão 1 — porque a licença virou generosidade, e não muro.** Uma plataforma licenciada descobriu que a exportação com procedência embutida vende mais assinatura do que a exportação proibida, e o jardim murado nunca se fechou. Nesse mundo, R2 estava errada na direção: a licença não fecha, ela *rotula*. Aponta para `e5` e `e5.2` — e a existência de `e5.2` no mapa é a admissão de que essa razão é plausível. **Ação:** `e5.1` rebaixado de media para baixa; a cláusula de exportação só vira exigência se o muro existir.

**Razão 2 — porque a latência caiu e o mapa envelheceu no ponto errado.** Os 4,25 s do Full-Duplex-Bench-v3 são de abril de 2026 e podem ser um retrato de sistemas em transição. Se em 2028 a conversa útil estiver em um segundo, `e1.2` e `e1.2.1` viram irrelevantes — ninguém instrumenta o que não dói. **Ação:** ambos mantidos, mas `e1.2` explicitamente marcado como o efeito mais frágil desta raiz.

**Razão 3 — porque a Europa recuou.** O Artigo 50 é a única peça deste mapa com data, e é também a mais sujeita a adiamento: o próprio Código de Conduta já escorregou uma vez, e há precedente recente de flexibilização de prazos na aplicação do Regulamento. Se houver moratória para áudio, R4 inteira perde a data — e sem data ela deixa de ser raiz e vira contexto. **Ação:** `e13` rebaixado de confiança **alta para media** e prazo de 2027 para 2028.

### 7.2 Extrapolação linear — o que é só "mais do mesmo, maior"

Três candidatos.

- **`e6.1` (produção migra para gerar-separar-reparar)** é a extrapolação mais óbvia: "a ferramenta melhora, o ofício se ajusta". Ganha não-linearidade por um mecanismo específico e verificável: o material chega com **um catálogo conhecido de artefatos** declarado pelo próprio fornecedor, o que cria uma categoria de trabalho que não existe hoje (diagnóstico de artefato de separação) em vez de apenas deslocar a existente. Mantido.
- **`e9.1` (fricção sobe no atendimento)** é linear: "mais fraude, mais checagem". Ganha não-linearidade porque o custo não recai onde a fraude ocorre — recai no tempo médio de atendimento de **todas** as chamadas, inclusive as legítimas. É um imposto sobre o canal inteiro, e isso é diferente em espécie, não em grau. Mantido.
- **`e15` (streaming separa catálogo por origem)** é linear e não ganhou mecanismo próprio: é "a plataforma responde à demanda medida". **Rebaixado de prazo 2028 para 2029.**

### 7.3 Velocidade de adoção — confronto com a classe de referência

| Efeito | Prazo original | Classe de referência usada | Veredito |
|---|---|---|---|
| `e10` (o áudio deixa de convencer entre pessoas) | 2028 | desconfiança do e-mail: phishing existe desde 1996, checagem de remetente virou hábito doméstico ~15 anos depois | **empurrado para 2029.** Hábito social não muda em dois anos, mesmo com fraude corrente |
| `e9` (voz sai do fator de autenticação) | 2028 | depreciação do SMS como segundo fator: recomendada em 2016, inconclusa em 2026 | mantido em 2028 **porque é decisão de risco de instituição**, não hábito de população — mas confiança fica em media, nunca alta |
| `e13` (todo exportador marca) | 2027 | C2PA em imagem: especificação de 2021, adoção ainda baixa em 2026 — cinco anos sem universalização | **empurrado para 2028**, e confiança rebaixada |
| `e5` (entregável deixa de ser arquivo) | 2028 | vídeo em rede social: ~3 anos para "publicar" significar "existe só no app" | mantido |
| `e14.1.1` (regulação desce ao sistema operacional) | 2031 | obrigação de rádio digital em receptor: ~8 anos da regra ao aparelho | **empurrado para 2032**, declarado fora da janela |

### 7.4 A raiz que não acontece

- **Se R1 não acontecer** (a fala local nunca sai do nicho, tudo continua em nuvem): caem `e2`, `e2.1`, `e2.2` e `e2.3`; `e1` sobrevive, porque full-duplex em nuvem já existe e já é medido; `e3` sobrevive parcialmente. **Sobra mais de metade do ramo.** R1 não é dispensável, mas parte dela é redundante com o que a nuvem já faz — e isso está registrado.
- **Se R2 não acontecer** (a exportação continua livre): caem `e5`, `e5.1`, `e5.2`, `e5.3` e `e8`; sobrevivem `e6`, `e6.1`, `e6.2` (a separação em canais e o efeito sobre trilha genérica não dependem do muro) e `e7` (o litígio segue seu curso). **Sobra cerca de metade.**
- **Se R3 não acontecer** (detecção alcança geração): cai o ramo quase inteiro — `e9`, `e10`, `e11` e seus filhos — e, junto, cai a contradição central. `e12` sobrevive, porque a dublagem disputa custo, não detecção. **É a raiz mais carregada e a de queda mais limpa.**
- **Se R4 não acontecer** (Artigo 50 adiado ou não aplicado a áudio): caem `e13`, `e14`, `e16` e filhos; `e15` sobrevive por demanda de público. **Sobra pouco** — mas o que sobra é justamente o que não depende de lei.

**O teste passou:** nenhuma raiz é as outras disfarçada. Elas se cruzam (`e14` liga R4 a R2; `e5.3` liga R2 a R1; a contradição liga R3 a R4), mas nenhuma delas é condição de existência das outras.

### 7.5 Suposições escondidas

Sete, listadas porque cada uma é um wildcard esperando.

1. **Os pesos abertos continuam abertos.** Moshi é CC-BY 4.0 hoje. Se a próxima geração fechar — ou se uma regra de procedência exigir registro de proveniência do modelo —, `e2`, `e5.3` e `e14.1` perdem o suporte.
2. **A plataforma continua permitindo.** Todo o ramo de `e11.1` supõe que Spotify e Deezer continuam podendo filtrar por comportamento. Uma decisão antitruste ou uma regra de "não discriminação algorítmica" muda isso.
3. **A energia e o silício continuam viáveis no dispositivo.** O runtime aria mede 3,6 GB de pico para o modelo médio; a suposição de que o celular de 2029 tem folga para isso *e* para o resto do sistema não foi verificada.
4. **A régua europeia continua sendo a régua.** Se a China ou os Estados Unidos publicarem padrão de procedência de áudio incompatível, `e16` inverte-se: o Brasil não importa uma régua, escolhe entre duas.
5. **A fraude por voz continua crescendo.** Os números que sustentam R3 são de 2025 e do primeiro semestre; uma queda por saturação de defesa muda o ramo inteiro.
6. **Litígio permanece o mecanismo de disputa.** Se um regulador de concorrência entrar no lugar do tribunal de direito autoral, `e7` e `e7.1` mudam de forma.
7. **Existe alguém do lado de quem projeta interessado em procedência.** O mapa supõe que designers vão implementar rótulo. `e13.2` é o efeito que diz o contrário, e ele pode ser maior do que está no mapa.

### 7.6 O viés do autor

Este mapa foi escrito por quem pesquisa computação musical, e isso aparece de três formas.

**Primeira: o ramo da música está mais desenvolvido que o ramo do jogo.** R2 tem quatro efeitos de primeira ordem sobre indústria fonográfica, sync e litígio, e o áudio interativo — que é onde a geração em tempo real tem mais a dizer para quem projeta interação — aparece só de raspão, em `e6.1`. Isto é desequilíbrio de interesse, não de importância, e um mapa feito por alguém de jogos teria a proporção invertida. **Registro sem corrigir**, porque corrigir na marra produziria efeitos sem fonte.

**Segunda: a tese "abundância não é demanda" me agrada demais.** Ela é elegante, é contraintuitiva e tem número bonito (50% dos uploads contra 1–3% da escuta). Mas os dois números vêm do **mesmo interessado** — o Deezer vende detecção e tem incentivo em mostrar que a música gerada é lixo pouco ouvido. Não achei o mesmo par de números em fonte independente. **Ação:** não removi nenhum efeito, mas nenhum efeito deste mapa recebeu confiança alta *por causa* desses números; `e15` apoia-se neles e está em media.

**Terceira: escolhi "o arquivo desaparece" como raiz e isso é, em parte, apego.** Quem trabalhou com áudio guarda mestres. Há uma leitura em que R2 é irrelevante para quem nasceu depois do streaming: se você nunca teve arquivo, não perde nada. Deixo a leitura registrada aqui e não a incorporei ao mapa — o que talvez seja o próprio viés operando.

### 7.7 Calibração

| Ordem | alta | media | baixa | Total |
|---|---|---|---|---|
| 1ª | 3 | 13 | 0 | 16 |
| 2ª | 1 | 22 | 7 | 30 |
| 3ª | 0 | 0 | 16 | 16 |

A confiança cai com a ordem, como exigido, e a terceira ordem é inteiramente baixa. Não é modéstia de fachada: nenhum efeito de terceira ordem deste mapa tem artefato observável hoje, e o `sinal` de todos eles é fraco por essa razão, não pela posição na árvore.

### 7.8 Registro de alterações — o que a bateria derrubou

Cota mínima cumprida: **pelo menos um efeito rebaixado ou removido por raiz.**

**R1 — fala sem turno e sem nuvem**
- `e2`: confianca **alta → media**, porque `e2.3` (a melhor voz fica na nuvem) é do mesmo mapa e contradiz parcialmente a premissa de que o modelo embarcado será bom o bastante para o caso principal.
- `e4.1.1` (*"Interfaces passam a ter paridade obrigatória voz-texto por política de compra corporativa"*): **removido**, pelo teste da causa solta — a paridade voz-texto já é empurrada por norma de acessibilidade independentemente de fala local; e o efeito é da família proibida "comprador institucional exige categoria nova" sem nome de comprador. Texto integral em 12.2.

**R2 — a saída deixa de ser arquivo**
- `e5.1`: confianca **media → baixa**, pela razão 1 do pré-mortem: cláusula de exportação só vira exigência contratual se o muro se consolidar, e o próprio `e5.2` diz que pode não se consolidar.
- `e8`: sinal **medio → fraco**, porque o único artefato é o anúncio do acordo WMG-Suno, e a WMG **não revelou** se havia opt-out no treino — um anúncio de intenção não é um artefato de funcionamento.
- `e5.3.1` (*"O acervo de música gerada localmente cresce sem catálogo, sem metadado e sem procedência, e é ele que abastece o treino seguinte"*): **removido**, pelo teste da causa solta — o treino já é abastecido por raspagem em escala, com ou sem jardim murado. Texto integral em 12.2.

**R3 — assimetria entre gerar e detectar**
- `e10`: prazo **2028 → 2029**, pela classe de referência da desconfiança do e-mail (~15 anos até virar hábito doméstico).
- `e11.1.1` (*"Quem produz pouco e devagar passa a ser tratado como sinal de autenticidade, e o volume vira estigma"*): **removido**, pelo teste da causa solta — o estigma do volume já vem do spam de streaming, que precede a assimetria detector/gerador e aconteceria sem ela. Texto integral em 12.2.

**R4 — procedência com data**
- `e13`: confianca **alta → media** e prazo **2027 → 2028**, pela razão 3 do pré-mortem (risco de adiamento) e pela classe de referência do C2PA em imagem (cinco anos sem universalização).
- `e15`: prazo **2028 → 2029**, por ser extrapolação linear sem mecanismo próprio de não-linearidade.
- `e14.1.1`: prazo **2031 → 2032**, e declarado fora da janela do mapa na prosa de 5.1.

**Efeitos que a bateria examinou e manteve, com o motivo:** `e6.1` (ganhou mecanismo de não-linearidade), `e9.1` (o custo recai fora de onde a fraude ocorre — diferença de espécie), `e9` (prazo mantido porque é decisão institucional, não hábito social), `e5` (classe de referência confirma três anos), `e12` (tem regulador, projeto e pedido escrito nomeados).

A bateria **derrubou três efeitos e rebaixou cinco**. Contagem antes: 16 / 30 / 19. Contagem depois: **16 / 30 / 16**.

## 8. O que a máquina errou

Sou eu, a máquina. Oito itens desta rodada, específicos.

**1. Atribuí ao Raspberry Pi um número que era da GPU.** A leitura do artigo do runtime aria devolveu "Raspberry Pi 5 (8GB): Small model: 0,13 s warm, ≤ 84 MB peak memory" — e 0,13 s é, no mesmo artigo, o tempo do modelo pequeno **numa RTX 3070**. Percebi ao ver o mesmo 0,13 s repetido duas linhas abaixo, na seção de GPU, contra 0,146 s da implementação oficial. Na seção 3 usei apenas os números que a leitura atribuiu sem ambiguidade: 2,5 s e 9,8 s em CPU de 20 threads, e ~200 s no Pi 5 para o modelo médio em 4 bits.

**2. Duas fontes abertas divergem sobre a multa do Artigo 50 e eu não escolhi.** Uma diz "até €15 milhões ou 3% do faturamento mundial"; a outra, "até €7,5 milhões ou 1,5%". Não abri o texto do Regulamento para arbitrar. **Por isso a multa não aparece em nenhum efeito do mapa** — se aparecesse, eu estaria fabricando precisão. A divergência está registrada em 12.6.

**3. Quase usei uma data que a página não sustenta.** Um resultado de busca afirmava que o "Advanced Split" do Suno saiu em **11 de junho de 2026**. A página que efetivamente abri diz apenas "junho", ao lado do Studio 2.0. Usei "junho de 2026". Precisão que não se abriu é invenção com aparência de rigor.

**4. Não consegui separar a data do acordo da data dos "primeiros acordos estratégicos".** A nota da PRNewswire cujo título fala em "first strategic agreements" devolveu, na leitura, "Announcement Date: October 29, 2025" — que é a data do acordo original com a Universal. Não sei dizer se a nota é de 2025 ou se é uma nota de 2026 que repete a data anterior. **Usei apenas 29/10/2025**, que é a data que a própria página carrega, e não afirmei nada sobre 2026 com base nela.

**5. Deixei de fora números que teriam enfeitado o mapa porque não abri as páginas.** A adoção de agentes de voz em central de atendimento (dois terços das conversas na Klarna; 30% dos casos resolvidos por IA na Salesforce), a data da versão beta dos "AI Credits" do Spotify (16/04/2026), o crescimento de 830% de deepfake segundo a Polícia Federal e a presença de IA em 42,5% das fraudes financeiras no Brasil — **nada disso está no mapa**. Duas dessas páginas devolveram 403 e as outras eu não abri. Estão em 12.4 marcadas como não verificadas.

**6. Meu número mais forte vem de uma parte interessada.** O par "mais de 50% dos uploads / 1 a 3% da escuta" é do Deezer, que vende detecção de música gerada e tem interesse direto em que esse contraste seja gritante. É o número que mais sustenta a tese central deste mapa. Não achei confirmação independente e não removi a tese — mas nenhum efeito recebeu confiança alta por causa dele, e isto está dito na seção 7.6.

**7. Entreguei uma primeira versão apoiada em fonte que o verificador não alcança.** As duas páginas que sustentavam o número mais importante do mapa — a distância entre uploads e escuta — eram comunicados do próprio Deezer, que devolvem 403 a cliente automatizado em seis de seis tentativas. Só descobri ao rodar o verificador. A correção melhorou a evidência em vez de piorá-la: as substitutas do TechCrunch trazem a série mensal de dezoito meses que o comunicado não trazia. Mas o episódio mostra um viés meu de procedimento — **abri primeiro a fonte primária mais conveniente e só conferi a acessibilidade no fim**, quando conferir antes custaria segundos.

**8. Comecei a escrever a raiz errada.** No primeiro esboço, "música completa gerada a partir de uma descrição" era raiz — é o que o enunciado do tema sugere. Só ao aplicar o critério de maturidade do §2 é que a régua da própria disciplina a derrubou: 100 milhões de usuários e primeiro lugar de categoria na App Store é produto de massa. Se eu tivesse pulado o critério, o mapa inteiro estaria construído sobre uma tecnologia madura — que é o erro que o método existe para impedir.

## 9. Três cenários para 2031

**Provável — o jardim, a régua e o ponto cego.** Gerar som é grátis e onipresente; escolher som gerado, não. O catálogo de música das grandes plataformas está segregado por origem declarada, e a parada principal é curada por procedência — não porque o público exigiu, mas porque a declaração ficou barata e a segregação ficou defensável. Quem gera música num serviço licenciado não leva arquivo para casa: leva um direito de reprodução, e paga à parte para exportar. A produção de som aplicado gira em torno de reparar material gerado, e a categoria de plug-in que mais cresceu na década é a de restauração de canal separado. Em paralelo, no dispositivo, o som gerado localmente cresceu sem catálogo, sem marca e sem quem responda por ele — e é o ponto cego que ninguém no aparato regulatório sabe endereçar. A voz saiu das listas de autenticação de risco e o telefone virou canal de conversa, não de decisão. No Brasil, quem exporta mídia cumpre a régua europeia e quem produz para dentro não cumpre nada; o marco geral continua na fila. **Sinal precoce de que estamos aqui:** o primeiro serviço de streaming a anunciar parada separada por origem declarada.

**Desejável — a procedência que funciona e a exportação que sobrevive.** A marca semântica passou em avaliação independente contra ataque adaptativo em 2028, e a partir daí a procedência deixou de exigir jardim murado: o arquivo circula e leva consigo prova de origem que resiste ao reencode do WhatsApp e do Instagram. Com isso, a licença deixou de precisar fechar a saída — as plataformas licenciadas voltaram a exportar, com marca, e cobram por isso em vez de proibir. O rótulo virou selo de exportabilidade e não de suspeita. A fala local de qualidade chegou a mais de vinte línguas por esforço comunitário, incluindo variedades regionais do português, e é a acessibilidade que se beneficia primeiro: leitor de tela e audiodescrição com voz escolhida pela pessoa, sem conta e sem rede. **O que teve de ser feito para chegar aqui:** financiar avaliação **independente** de marca d'água — não de fornecedor —, e escrever no Código de Conduta uma especificação de áudio que resista ao caminho real, não ao caminho de laboratório.

**Indesejável — a marca que ninguém respeita e a lei que fecha o aberto.** O removedor de marca em tempo real apareceu em 2028 como opção de um clique numa ferramenta popular, e a procedência virou teatro: quem cumpre é quem já era honesto. A resposta política foi a que costuma vir depois de um escândalo — restringir o que se pode distribuir, e não o que se pode fazer. Modelo de áudio com pesos abertos passou a exigir registro, o que na prática o extinguiu fora das grandes empresas; a geração local sobreviveu na clandestinidade e sem qualidade. A voz deixou de ser aceita como prova entre pessoas, e o custo caiu sobre quem depende do áudio por não escrever: o idoso que mandava recado de voz agora não é atendido, e ninguém construiu a alternativa. A música gerada continua a valer poucos por cento da escuta, mas o compositor de biblioteca já não existe. **Sinal precoce:** a primeira proposta legislativa séria — em qualquer jurisdição — que condicione a distribuição de pesos abertos de modelo de áudio a registro prévio.

## 10. O experimento

### A marca que não sobrevive

**O que é.** Uma bancada que mede quanto da procedência de um áudio gerado resiste ao caminho real por onde o áudio de fato anda no Brasil. Gera-se um trecho com um sistema que marca (o Suno v6, que passou a marcar em setembro de 2026, e um marcador local de código aberto para ter controle), e leva-se o mesmo trecho por uma cadeia de etapas reais: exportar; enviar como áudio de WhatsApp; publicar como *story* no Instagram e recapturar; passar por reencode em Opus a 24 kbps; cortar em 8 segundos; mudar meio tom; gravar tocando no alto-falante e captando pelo microfone do celular. Em cada etapa, o detector correspondente é rodado e registra-se **detectou / não detectou**, com o áudio resultante arquivado. A saída é uma tabela de sobrevivência por canal, com o número de etapas até a marca sumir.

**Que pergunta sobre o futuro ele ajuda a responder.** A contradição central deste mapa, escrita em 5.3: o Artigo 50 exige marca legível por máquina desde 2 de agosto de 2026, e há ataque publicado que remove 100% das marcas de um corpus musical sem conhecer o algoritmo. A pergunta operacional é anterior ao ataque e mais barata de responder: **a marca sobrevive ao caminho normal, sem nenhum adversário?** Se não sobrevive à transcodificação de rotina do WhatsApp, a discussão sobre ataque adaptativo é acadêmica — a conformidade já morreu no primeiro reencode.

**Que tecnologia emergente ele usa, e por que não dá com a madura.** Usa marca d'água **no sinal** (AudioSeal e afins) e geradores que já marcam — as duas coisas de 2024–2026. Não dá com tecnologia madura porque o que é maduro em procedência é **metadado**: ID3, C2PA em contêiner, campo de arquivo. Sobre metadado já se sabe a resposta há uma década — some no primeiro reencode, e por isso o Artigo 50 fala em marca *detectável*, não em campo preenchido. O experimento só é interessante porque a marca no sinal promete sobreviver onde o metadado não sobrevive; medir essa promessa é o objeto.

**O que a turma faz quando testar isso em sala.** Cada aluno leva o mesmo áudio-semente pelo **seu próprio** caminho de aplicativos — o WhatsApp dele, a rede social dele, o aparelho dele, a operadora dele — e traz de volta o arquivo resultante e a leitura do detector. Em sala, monta-se a tabela coletiva: a variância entre aparelhos e operadoras é parte do resultado, não ruído. Depois inverte-se o papel: metade da turma tenta **quebrar** a marca com o que estiver ao alcance (equalização, compressão, adicionar ruído rosa, sobrepor música), e a outra metade tenta detectar às cegas. Fecha-se comparando com o que o Artigo 50 exige — e escrevendo, em uma página, o que um implementador brasileiro teria de fazer para cumprir a regra no caminho medido, e não no caminho ideal.

**O resultado que me faria mudar de ideia.** Se a marca sobreviver em **90% ou mais** das cadeias completas — incluindo WhatsApp e a recaptura por alto-falante e microfone —, então R3 está errada no ponto que mais importa: a assimetria entre gerar e detectar não é permanente no caso da procedência, e `e13`, `e14` e a contradição de 5.3 caem juntos. O Artigo 50 passa a ser executável, o jardim murado perde sua justificativa técnica, e o mapa precisa ser refeito com uma raiz a menos e um ciclo a menos. Se sobreviver entre 40% e 90%, o mapa fica como está e o interessante passa a ser **onde** ela morre. Se sobreviver em menos de 40%, `e13.1` sobe de segunda ordem para primeira: a conformidade nasce quebrada, e é isso que quem projeta precisa saber antes de escrever a especificação.

## 11. Fontes

Vinte e sete fontes, todas abertas e lidas em 11/09/2026. As que não abriram estão em 12.4 e não foram usadas em nenhum efeito.

1. `https://www.prnewswire.com/news-releases/universal-music-group-and-udio-announce-udios-first-strategic-agreements-for-new-licensed-ai-music-creation-platform-302599129.html` — nota conjunta UMG/Udio: fim do litígio, licenças, plataforma "will be launched in 2026" treinada em música licenciada. Sustenta R2 e `e7.2`. Confiabilidade: alta para o que as partes afirmam, nula para o que omitem (não diz nada sobre exportação nem sobre opt-in) — e a data que a página carrega é 29/10/2025, ver seção 8, item 4.
2. `https://help.udio.com/en/articles/12683565-changes-associated-with-the-universal-music-group-umg-partnership` — central de ajuda do Udio: *"downloading of audio, video, and stems has been disabled"*, com a compensação em créditos. Sustenta R2 e `e5`. Confiabilidade: máxima — é o próprio fornecedor descrevendo o próprio produto.
3. `https://suno.com/hub/best-stem-separation-software` — página do Suno sobre separação: modo de 2 canais e até 12 canais nomeados. Sustenta `e6`. Confiabilidade: é material de marketing do fornecedor; usei só a descrição de funcionalidade, não as afirmações de superioridade.
4. `https://jackrighteous.com/en-us/blogs/guides-using-suno-ai-music-creation/suno-stem-separation-auto-split-split-from-mix-advanced-split` — guia de terceiros: os três modos, custo em créditos, "nearly 100 instrument types" no Advanced Split, junho junto do Studio 2.0, e a lista de artefatos ("More specific does not mean artifact-free"). Sustenta `e6` e `e6.1`. Confiabilidade: média-alta — é blog comercial, mas descreve limitações contra o próprio interesse, o que é sinal de honestidade.
5. `https://au.rollingstone.com/music/music-news/suno-new-model-v6-warner-music-group-100836` — Suno v6 em 10/09/2026, treinado em dado licenciado da WMG, citações de Jack Brody, marca d'água e teto mensal de download em setembro, e o registro de que a WMG não revelou se houve opt-out. Sustenta `e5`, `e7.2`, `e8` e `e13`. Confiabilidade: alta — imprensa especializada com citação nominal.
6. `https://musically.com/2026/06/04/suno-raises-400m-funding-and-teases-its-first-licensed-model/` — US$ 400 mi a US$ 5,4 bi em 04/06/2026, mais de 100 milhões de usuários, primeiro lugar na App Store. Sustenta a recusa de maturidade em 4.5. Confiabilidade: alta — publicação de referência do setor.
7. `https://techcrunch.com/2026/07/21/music-streamer-deezer-says-more-than-50-of-daily-uploads-are-ai-generated/` — 21/07/2026: 90 mil faixas geradas por dia e mais de 50% dos uploads em junho de 2026, com a série mensal completa desde janeiro de 2025 (10 mil/dia e 10%) até junho de 2026, e a citação de Alexis Lanternier. Sustenta a seção 3 e `e15`. Confiabilidade: alta — imprensa independente reproduzindo dado de plataforma; a série de dezoito meses é mais informativa que o número isolado. **Substitui, por 403 determinístico, o comunicado do próprio Deezer** — ver 12.4.
8. `https://techcrunch.com/2026/04/20/deezer-says-44-of-songs-uploaded-to-its-platform-daily-are-ai-generated/` — 20/04/2026: 75 mil/dia, 44% dos uploads, 1–3% da escuta, 85% dos streams de música gerada detectados como fraudulentos; e a pesquisa Ipsos de novembro de 2025 — 97% não distinguiram, 80% querem rótulo claro, 52% contra IA nas paradas principais. Sustenta as seções 2 e 3 e `e15`. Confiabilidade: alta para o relato; a pesquisa continua sendo de parte interessada (ver 7.6), e o tamanho da amostra e os países **não** constam desta página — vêm do comunicado original, citado em 12.4. **Substitui, por 403 determinístico, o comunicado do próprio Deezer.**
9. `https://www.musicbusinessworldwide.com/spotify-has-deleted-75m-spammy-tracks-as-it-unveils-new-ai-music-policies/` — 25/09/2025: mais de 75 milhões de faixas removidas em 12 meses, os três pilares (personificação, filtro de spam comportamental, divulgação por DDEX) e as citações de Sam Duboff e Charlie Hellman. Sustenta `e11.1` e `e15.1`. Confiabilidade: alta.
10. `https://www.musicbusinessworldwide.com/suno-sued-by-poseidon-wave-media-an-entity-behind-indie-duo-the-american-dollar-claiming-it-nearly-eliminated-their-licensing-revenue/` — ação de 12/05/2026 no Distrito Sul de Nova York, 236 obras em 164 registros, alegação de queda de ~80% na receita de licenciamento. Sustenta `e6.2` e `e7`. Confiabilidade: alta para o conteúdo da petição; a alegação é da parte e não foi julgada.
11. `https://www.aimusicpreneur.com/ai-music-news/jamendo-american-dollar-drop-suno-copyright-lawsuits-dismissal/` — as duas retiradas de agosto de 2026: American Dollar **com** prejuízo, Jamendo **sem**; nenhuma explicação nos autos. Sustenta `e7` e `e7.1`. Confiabilidade: média-alta — publicação de nicho, mas o fato processual é verificável e a interpretação do silêncio está declarada como interpretação.
12. `https://en.wikipedia.org/wiki/Xania_Monet` — criada por Telisha "Nikki" Jones com letras próprias e música gerada no Suno; #3 em Hot Gospel Songs, #20 em Hot R&B Songs, #30 em Adult R&B Airplay; US$ 3 milhões com a Hallwood Media em setembro de 2025; a crítica de Kehlani. Sustenta `e15.2` e W2. Confiabilidade: média — enciclopédia colaborativa; usei só posições de parada e o valor do contrato, que são amplamente noticiados.
13. `https://artificialintelligenceact.eu/transparency-rules-article-50/` — o que o Artigo 50 exige para áudio, as isenções (função assistiva, edição padrão), a data de 02/08/2026, o prazo de 02/12/2026 para o legado, e o Código de Conduta previsto para junho de 2026. Sustenta R4 inteira. Confiabilidade: alta — é o portal de referência sobre o Regulamento, mas é interpretação, não o texto legal.
14. `https://www.resemble.ai/laws-and-regulations/eu-ai-act-article-50` — leitura do Artigo 50 do ponto de vista de quem faz voz sintética: marcação por metadado, marca d'água ou impressão digital; rótulo visível com ícone interino "AI"/"KI"/"IA". Sustenta `e13` e `e13.2`. Confiabilidade: média — é fornecedor do setor; diverge da anterior no valor da multa, e por isso a multa não entrou no mapa.
15. `https://digital-strategy.ec.europa.eu/en/news/commission-publishes-first-draft-code-practice-marking-and-labelling-ai-generated-content` — primeira minuta do Código em 17/12/2025, segunda para meados de março de 2026, final para junho de 2026. Sustenta 4.4 e SF2. Confiabilidade: máxima — é a própria Comissão.
16. `https://arxiv.org/abs/2604.04847` — *Full-Duplex-Bench-v3*, Lin, Chen, Chen e Lee, 06/04/2026: GPT-Realtime com Pass@1 de 0,600 e 13,5% de interrupção indevida; Gemini Live 3.1 a 4,25 s e 78,0% de tomada de turno; cascata a 10,12 s. Sustenta 3.2, R1 e `e1.2`. Confiabilidade: alta — preprint com benchmark público e sistemas nomeados.
17. `https://arxiv.org/abs/2511.21577` — *HarmonicAttack*, Li, Hu, Grishchenko e Lie, 26/11/2025 revisto em 19/05/2026: 92% de sucesso contra o AudioMarkNet no VCTK e 100% contra todas as marcas no FMA, sem acesso ao algoritmo. Sustenta R3, `e11.2` e a contradição de 5.3. Confiabilidade: alta para o método; os números são do próprio grupo e não vi replicação independente.
18. `https://arxiv.org/html/2607.08526v1` — *aria*, Spanio e Rodà, 10/07/2026: Stable Audio 3 pequeno e médio quantizados; 2,5 s e 9,8 s por clipe de 10 s em CPU de 20 threads; ~200 s no Raspberry Pi 5 para o médio em 4 bits, com 3,6 GB de pico; decodificador em streaming 3,1× mais rápido por bloco. Sustenta R1, `e2` e SF3. Confiabilidade: alta — mede e publica configuração; ver a ressalva do item 1 da seção 8.
19. `https://arxiv.org/html/2601.02914v1` — vulnerabilidade de autenticação biométrica por voz: contra ECAPA-TDNN a 0,01% de falsa aceitação, Bert-VITS2 passa em 82,7%, GPT-SoVITS em 56,2%, RVC em 43,1%; detecção de 0,83% de EER no domínio contra 24,84% fora, degradação de 30×. Sustenta R3, `e9` e `e11`. Confiabilidade: alta — sistemas e limiares declarados.
20. `https://arxiv.org/abs/2411.01259` — Freitag, *Diversidade linguística e inclusão digital: desafios para uma IA brasileira*, 02/11/2024, LAAI-Ethics: o viés de seleção de variedade, em que a variante documentada é padronizada porque tem dado e a não documentada se marginaliza. Sustenta `e3.1.1` e SF4. Confiabilidade: alta para o argumento sociolinguístico; não traz medida de tecnologia de fala.
21. `https://github.com/kyutai-labs/moshi` — Moshi e o codec Mimi: MIT e Apache 2.0 no código, CC-BY 4.0 nos pesos, MLX int4/int8 "for on-device inference on iPhone and Mac", latência teórica de 160 ms e prática "as low as 200ms". Sustenta R1, `e2` e `e14.1`. Confiabilidade: máxima para licença e implementação; a latência é declarada pelo autor.
22. `https://huggingface.co/spaces/webml-community/kokoro-webgpu` — demonstração pública do Kokoro rodando com WebGPU no navegador. Sustenta `e2` e `e3`. Confiabilidade: baixa como documento — a página abriu mas trouxe pouca descrição; usei apenas o fato de a demonstração existir e ser pública, não números.
23. `https://sacra.com/c/elevenlabs/` — ElevenLabs: US$ 330 M de ARR no fim de 2025, ~US$ 450 M no 1º trimestre de 2026, US$ 600 M em junho de 2026 (+175% a/a); Série D de US$ 500 M liderada pela Sequoia a US$ 11 bi em fevereiro de 2026; mistura autosserviço/corporativo perto de 50/50; 41% da Fortune 500. Sustenta 3.1, `e2.3` e a recusa de maturidade do TTS. Confiabilidade: média-alta — casa de análise de mercado, números não auditados.
24. `https://www.tribunadosertao.com.br/geral/2026/02/25/862930-golpes-por-voz-clonada-deixam-bancos-brasileiros-em-alerta-uma-fraude-a-cada-23-segundos` — 25/02/2026: 6.937.832 tentativas de fraude no 1º semestre de 2025 (Serasa Experian), uma a cada 2,3 s, 53,7% contra bancos; Pix de R$ 27,3 trilhões em 63,7 bilhões de operações em 2024 (Febraban). Sustenta `e10` e a nota sobre o Brasil. Confiabilidade: média — imprensa regional citando fontes primárias identificáveis; os números são de fraude em geral, **não** especificamente de voz clonada, e o mapa não os usa como se fossem.
25. `https://www.camara.leg.br/noticias/1092791-segmento-de-dublagem-pede-protecao-legal-contra-uso-de-voz-gerada-por-inteligencia-artificial/` — audiência pública de 29/08/2024: PL 1376/22 e PL 2338/23, o pedido de reconhecimento da dublagem como patrimônio imaterial, e o Ministério da Cultura sobre "transferência definitiva do direito de personalidade, ou seja, do direito sobre a própria voz". Sustenta `e12` e `e12.1`. Confiabilidade: máxima — é o registro oficial da Casa.
26. `https://www25.senado.leg.br/web/atividade/materias/-/materia/157233` — ficha do PL 2338/2023: aprovado no Plenário do Senado em 10/12/2024, remetido à Câmara em 17/03/2025 pelo Ofício SF nº 235, 244 emendas processadas. Sustenta `e16` e 3.2. Confiabilidade: máxima — é o sistema oficial de tramitação.
27. `https://schjodt.com/news/owning-the-self-denmarks-copyright-turn-against-deepfakes` — a emenda dinamarquesa que dá à pessoa direito de tipo autoral sobre a própria voz, proposta em 26/06/2025, com alcance para todas as pessoas e não só figuras públicas, e a ressalva sobre infração originada fora da Dinamarca. Sustenta o contexto de `e12` e W3. Confiabilidade: média-alta — escritório de advocacia nórdico comentando norma do próprio país; a data de entrada em vigor **não** ficou estabelecida na leitura, e por isso não a afirmo.

## 12. Anexo — o levantamento bruto

### 12.1 Como esta rodada foi conduzida

Modo MAPA, não interativo, a partir de `briefing:` completo. Ordem de trabalho: (a) leitura do formato da disciplina e do verificador **antes** de escrever qualquer coisa; (b) inspeção da pasta de destino, onde havia uma versão anterior arquivada como `13-voz-e-som-gerativos.anterior-0911-1547` — li apenas o frontmatter e o resumo dela, para não anexar o mapa novo ao antigo, e o resto da pesquisa foi feito do zero; (c) dezesseis buscas na web, em português e em inglês; (d) trinta e três tentativas de abertura de página, das quais vinte e nove devolveram conteúdo — duas delas foram depois deslocadas para 12.4.1 por bloqueio determinístico e substituídas, deixando 27 na seção 11; (e) aplicação do critério de maturidade, que derrubou três candidatos a raiz; (f) montagem da roda; (g) bateria do §6, que derrubou três efeitos e rebaixou cinco; (h) verificador, com a saída colada em 12.9.

**Divergência declarada em relação à versão anterior.** A rodada arquivada usava `zona_de_interesse: Áudio e computação musical`; o briefing desta rodada diz **Percepção e mídia sintética**, e segui o briefing. As duas rodadas também divergem no conjunto de raízes: a anterior tinha "identidade vocal como ativo licenciável" e "diálogo falado sem turno"; esta recusa a geração de música como raiz por maturidade e põe em seu lugar "a saída deixa de ser um arquivo". A convergência entre as duas — em procedência obrigatória e em fala local — foi obtida às cegas e vale como sinal; a divergência é matéria para a aula.

### 12.2 Os efeitos removidos pela bateria do §6, na íntegra

Três efeitos foram escritos, entraram na roda e saíram. O texto integral fica aqui porque corte silencioso é o que este anexo existe para impedir.

**`e4.1.1` — removido de R1, terceira ordem, filho de `e4.1`.**
> *Efeito:* "Interfaces passam a ter paridade obrigatória voz-texto por política de compra corporativa." · *sinal:* fraco · *prazo:* 2031 · *confianca:* baixa.
> *Motivo da remoção:* falha em dois testes. No teste da causa solta, a paridade voz-texto já é empurrada por norma de acessibilidade — a WCAG e, no Brasil, a ABNT NBR 17225 — independentemente de a fala ser local ou de haver full-duplex; removida a raiz, o efeito acontece igual. E na regra dos efeitos proibidos: "comprador institucional exige categoria nova" sem nomear o comprador é da mesma família de "reguladores criam categoria nova". Não achei um programa de compras nomeável que sustentasse a frase.

**`e5.3.1` — removido de R2, terceira ordem, filho de `e5.3`.**
> *Efeito:* "O acervo de música gerada localmente cresce sem catálogo, sem metadado e sem procedência, e é ele que abastece o treino seguinte." · *sinal:* fraco · *prazo:* 2031 · *confianca:* baixa.
> *Motivo da remoção:* teste da causa solta. O treino da geração seguinte já é abastecido por raspagem em escala — é literalmente o objeto dos processos de 2024–2026 —, com ou sem jardim murado e com ou sem acervo local. A frase é verdadeira e não deriva desta raiz. **Observação:** a *primeira* metade da ideia (o acervo local crescer sem procedência) sobreviveu, dentro de `e14.1`, onde tem o mecanismo certo — a impossibilidade de obrigar um binário local a marcar.

**`e11.1.1` — removido de R3, terceira ordem, filho de `e11.1`.**
> *Efeito:* "Quem produz pouco e devagar passa a ser tratado como sinal de autenticidade, e o volume vira estigma, inclusive para humanos prolíficos." · *sinal:* fraco · *prazo:* 2031 · *confianca:* baixa.
> *Motivo da remoção:* teste da causa solta. O estigma do volume nasceu do spam de streaming e das fazendas de faixa curta — o filtro do Spotify que removeu 75 milhões de faixas mira upload em massa e faixa de menos de 30 segundos, e é anterior à assimetria entre detector e gerador. O efeito aconteceria por outro motivo. **Foi o corte de que mais gostei e por isso o mais suspeito de eu ter mantido por gosto** — cortei.

### 12.3 Os efeitos que ficaram na fronteira e sobreviveram, com o motivo

Aplicar o teste da causa solta aos 46 efeitos de segunda e terceira ordem deixou três na fronteira. Ficam registrados para que a próxima rodada possa discordar.

- **`e2.2` (a pesquisa de voz perde o log).** Aconteceria de todo modo, por regulação de privacidade? Em parte — mas regulação de privacidade produz *log consentido*, e a inferência local produz *ausência de log*. São coisas diferentes, e a segunda deriva desta raiz. Mantido.
- **`e9.1.1` (o telefone perde função decisória).** Aconteceria pelo declínio geral da chamada de voz? O declínio é real e independente — mas o mecanismo aqui é específico: a chamada continua existindo e perde **uma função** (autorizar), não uso. Mantido, com a ressalva de que é o efeito mais próximo do corte em R3.
- **`e16.1.1` (o rótulo inverte de sinal).** Aconteceria por dinâmica genérica de selo? Provavelmente sim — a trajetória "alerta vira selo" é comum. Mantido porque o mecanismo específico é a assimetria interna de `e16.1`, que só existe se o Brasil ficar sem regra própria; se o PL 2338 passar, o efeito não tem de onde nascer.

### 12.4 Fontes deslocadas por bloqueio determinístico, e páginas que não abriram

#### 12.4.1 Deslocadas da seção 11 por serem inacessíveis a cliente automatizado (TMI-0033 e TMI-0034)

Duas fontes foram **abertas e lidas** nesta rodada e mesmo assim saíram da lista numerada, porque são **inacessíveis a cliente automatizado** de forma determinística. Antes de deslocá-las, medi seis vezes com o mesmo método do verificador (`urllib` com agente `Mozilla/5.0`), como manda a TMI-0034:

| URL | 6 tentativas com o método do verificador | `curl` com agente de navegador | Veredito |
|---|---|---|---|
| `https://newsroom-deezer.com/2026/04/ai-generated-tracks-represent-44-of-new-uploaded-music/` | **403 · 403 · 403 · 403 · 403 · 403** | **200** | determinístico — gestão de bots |
| `https://newsroom-deezer.com/2026/07/ai-music-exceeds-50-percent-daily-uploads-deezer/` | **403 · 403 · 403 · 403 · 403 · 403** | **200** | determinístico — gestão de bots |

Não é intermitência de servidor lento (o caso que a TMI-0034 manda **não** deslocar): é 403 em seis de seis, contra 200 no navegador. Aplicada a TMI-0033.

**O que estas páginas sustentavam, e que foi preservado.** Do comunicado de julho: 90 mil faixas/dia, mais de 50% dos uploads em junho de 2026, 1–3% da escuta, até 85% dos streams de faixas 100% geradas classificados como fraudulentos em 2025, **13,4 milhões de faixas detectadas e marcadas em 2025**, detector próprio lançado em janeiro de 2025 com 99,8% de acerto e duas patentes depositadas em dezembro de 2024. Do comunicado de abril: os mesmos 75 mil/dia e 44%, mais **o desenho da pesquisa Ipsos — 9.000 respondentes em oito países (EUA, Canadá, Brasil, Reino Unido, França, Países Baixos, Alemanha e Japão)** — e o dado de que 73% dos assinantes querem saber se o serviço recomenda faixa gerada.

**As substitutas, que respondem 200 ao verificador**, são as reportagens do TechCrunch de 21/07/2026 e 20/04/2026, itens 7 e 8 da seção 11. Elas cobrem os números centrais — e a de julho traz, a mais, a série mensal de dezoito meses, que o comunicado não trazia.

**O que ficou sem link que responde, e por isso está declarado aqui em vez de afirmado no corpo:** as 13,4 milhões de faixas marcadas em 2025, os 99,8% de acerto do detector, as duas patentes, o tamanho e a composição da amostra Ipsos, e os 73% sobre recomendação. Destes, o único que aparecia no corpo do texto era o desenho da amostra Ipsos, na seção 2 e na tabela 3.4 — mantido com atribuição explícita a esta subseção, e não a uma fonte da lista numerada.

#### 12.4.2 Páginas que não abriram

Nenhum número destas páginas está em qualquer efeito do mapa.

| URL | Erro | O que teria sustentado |
|---|---|---|
| `https://www.cnbc.com/2026/02/04/nvidia-backed-ai-startup-elevenlabs-11-billion-valuation.html` | HTTP 403 | a Série D da ElevenLabs em fonte de imprensa geral — suprido pelo item 23 das fontes |
| `https://diariodegoias.com.br/golpe-com-voz-clonada-por-ia-e-falso-familiar-avanca-em-2026-especialista-faz-alerta/541603/` | HTTP 403 | os números atribuídos à Polícia Federal (crescimento de 830% de deepfake entre 2024 e 2025; IA presente em 42,5% das fraudes financeiras no Brasil). **Não usados** |
| `https://www.billboard.com/lists/ai-artists-on-billboard-charts/` | redirecionamento para `tollbit.billboard.com`, não seguido | a lista completa de artistas de IA que entraram em paradas da Billboard — suprido parcialmente pelo item 12 |
| `https://verfassungsblog.de/copyrighting-voice-and-image/` | conteúdo truncado | a análise constitucional da lei dinamarquesa — suprido parcialmente pelo item 27 |
| `https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-temporarias/especiais/57a-legislatura/comissao-especial-sobre-inteligencia-artificial-pl-2338-23` | HTTP 429 | o estado da comissão especial na Câmara — suprido pelo item 26, que dá a remessa mas não o andamento posterior |
| `https://www.npmjs.com/package/kokoro-js` | HTTP 403 | tamanho de arquivo, downloads semanais e data de publicação do Kokoro no navegador. **Não usados** |
| `https://arxiv.org/pdf/2411.01259` e `https://arxiv.org/pdf/2601.02914` | PDF ilegível na extração | supridos pelas versões `abs` e `html`, itens 20 e 19 |

**Afirmações que ficaram sem fonte aberta e por isso não entraram no mapa:** os dois terços de conversas resolvidas por IA na Klarna e os 30% de casos resolvidos por IA na Salesforce; a data de 16/04/2026 para a versão beta dos "AI Credits" do Spotify; a data de 11/06/2026 para o "Advanced Split"; a data de 31/03/2026 para a entrada em vigor da lei dinamarquesa; os ~157 milhões de usuários de assistente de voz nos Estados Unidos em 2026; a data de fevereiro de 2026 para a disponibilidade geral do Alexa+; os mais de 50 mil títulos com "Virtual Voice" na Audible; e a atribuição a uma projeção de que "IA responderá por 60% da receita de bibliotecas de música até 2028".

### 12.5 As buscas que não deram em nada

- **Síntese de voz para línguas indígenas brasileiras, 2026.** Dezenas de resultados sobre TTS em português brasileiro comercial e nada sobre língua indígena com dado de 2026. O que se achou foi o contexto — 23 línguas cooficializadas no país, 13 delas indígenas — sem nenhum projeto de síntese verificável. **A lacuna é o achado:** SF4 existe por causa dela.
- **Audiodescrição sintética e norma de acessibilidade no Brasil.** Os resultados foram material didático e listas de leitores de tela. Não achei norma, nem programa público, nem número de adoção que ligasse voz gerada a audiodescrição no Brasil. `e3` ficou sem âncora brasileira por isso.
- **Áudio generativo em jogo publicado.** Procurei um título comercial com síntese de som em tempo de execução creditada. Os resultados descrevem uso de geração **na produção** (rascunho de ambiência, variação de foley que depois entra num container aleatório do Wwise), não em tempo de execução. É a razão de o ramo de jogo estar sub-representado, e está declarado como viés em 7.6.
- **Consumo energético de geração de áudio no dispositivo.** Nada com número. É a razão de a linha ecológica do STEEP estar vazia em 5.2 — declarada vazia, não preenchida à força.
- **Efeito da geração de música sobre a receita de streaming por artista.** Achei projeções de consultoria e nenhuma medição. Não entrou.

### 12.6 Divergências entre fontes, não arbitradas

1. **Multa do Artigo 50.** Uma fonte aberta indica até €15 milhões ou 3% do faturamento mundial; outra, até €7,5 milhões ou 1,5%. Não abri o texto do Regulamento. **Nenhum valor de multa aparece no mapa.**
2. **Data da nota UMG/Udio.** A página cujo título fala em "first strategic agreements" carrega a data de 29/10/2025, que é a do acordo original. Não sei se é a mesma nota ou uma posterior. Usei só a data que a página traz.
3. **Faixas/dia no Deezer.** ~75 mil em abril e 90 mil em junho de 2026, do mesmo emissor. Não é contradição, é crescimento — mas registro que o número mais citado por terceiros (75 mil) já estava desatualizado quando o citaram.
4. **Latência do diálogo falado.** 160–200 ms declarados pelo autor do Moshi contra 4,25 s medidos por benchmark independente no melhor sistema comercial. **Não é contradição: são coisas diferentes** — primeira sílaba contra tarefa concluída sob disfluência. O mapa usa a segunda, e é isso que sustenta `e1.2`.

### 12.7 Alternativa de experimento, descartada

**"O turno que não existe" — bancada de latência conversacional em português.** Reproduzir o desenho do Full-Duplex-Bench-v3 em pt-BR: falantes reais com disfluência (hesitação, autocorreção, repetição), medindo latência até resposta útil, taxa de interrupção indevida e tomada de turno, comparando um sistema em nuvem com o Moshi rodando local. **Por que não foi escolhido:** o Moshi é praticamente monolíngue em inglês, então a comparação mediria o vão de idioma e não o vão de arquitetura — e produziria a conclusão errada ("local é pior") por motivo errado. Fica registrado porque, se aparecer um full-duplex aberto em português até 2028, este vira o melhor experimento do tema, e é também o sinal precoce de W4.

**"O rótulo audível que ninguém tolera" — teste de aceitação.** Produzir a mesma peça de 30 segundos em cinco variantes de divulgação sonora (nenhuma, marca falada no início, marca falada no fim, timbre curto, redução de nível periódica) e medir preferência e percepção de credibilidade. **Por que não foi escolhido:** mede gosto, e gosto sem norma não decide nada. Volta a ser interessante se o Código de Conduta trouxer especificação sonora — o sinal observável de SF2.

### 12.8 Contagens, conferidas à mão antes do verificador

- Raízes: **4** (R1 fala sem turno e sem nuvem; R2 a saída deixa de ser arquivo; R3 assimetria gerar/detectar; R4 procedência com data).
- Primeira ordem: **16** — e1–e4 em R1, e5–e8 em R2, e9–e12 em R3, e13–e16 em R4. Quatro por raiz, dentro da faixa de 3 a 6.
- Segunda ordem: **30** — 8 em R1, 8 em R2, 7 em R3, 7 em R4.
- Terceira ordem: **16** — 5 em R1, 4 em R2, 2 em R3, 5 em R4.
- Efeitos de retroação, um por raiz no mínimo: `e2.3` (R1), `e5.2` (R2), `e9.2` (R3), `e13.2` (R4).
- Ator com incentivo para bloquear, um por raiz: fornecedores de voz em nuvem (R1); o assinante que cancela (R2); a indústria de detecção e biometria (R3); a plataforma que transcodifica (R4).
- Prazos fora do horizonte: **um**, `e14.1.1` em 2032, terceira ordem, declarado na prosa de 5.1 e na tabela de 7.3.

### 12.9 Saída do verificador

Comando:

```
python3 /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/futurizacao-giordano/references/verificar.py /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/giordano/13-voz-e-som-gerativos/tendencia-voz-e-som-gerativos.md --links
```

**Sobre a checagem de links.** A primeira execução do verificador fechou com `1 problema(s)` e `links da seção 11: 25/27 respondem`: as duas fontes que não respondiam eram os comunicados do *newsroom* do Deezer, abertos e lidos nesta rodada. Segui a **TMI-0034** e medi antes de agir — seis tentativas com o método do verificador devolveram **403 em seis de seis**, contra **200** no `curl` com agente de navegador. Bloqueio determinístico de gestão de bots, e não link morto nem servidor lento. Aplicada então a **TMI-0033**: as duas saíram da lista numerada, foram para **12.4.1** com a citação, os códigos HTTP e o que sustentavam, e foram substituídas pelas reportagens do TechCrunch de 20/04/2026 e 21/07/2026, que respondem 200 e cobrem os mesmos números — com a série mensal de dezoito meses a mais. O contador `fontes:` continua em 27 porque a troca foi de duas por duas.

**Sobre o conflito de decisões, que continua aberto.** A `TMI-0014` (10/09) manda o oposto: manter a fonte na seção 11 e entregar com `1 problema(s)`. Ela, a `TMI-0015`, a `TMI-0016` e a `TMI-0033` estão todas `vigente`, e a `TMI-0034` já registrou o conflito sem resolvê-lo. Segui a `TMI-0033` pelo mesmo motivo que a rodada 02 seguiu: é a mais recente e foi escrita explicitamente como regra permanente para as rodadas restantes. **Fica repetido o pedido de arbitragem:** ou a `TMI-0014` é marcada como substituída pela `TMI-0033`, ou a `TMI-0033` é revista. Não fiz nem uma coisa nem outra por conta própria.

**Sobre a linha do prazo fora do horizonte.** `e14.1.1` em 2032 é o único, é de terceira ordem — o que o formato permite — e está declarado em três lugares: na prosa de 5.1, na tabela de 7.3 e em 12.8.

Saída da execução final, depois de aplicadas a TMI-0034 e a TMI-0033:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 16 (frontmatter diz 16)
efeitos ordem 2: 30 (frontmatter diz 30)
efeitos ordem 3: 16 (frontmatter diz 16)
prazo > horizonte (2031) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 1 [('e14.1.1', 2032)]
confiança ordem 1: alta 3 · media 13 · baixa 0
confiança ordem 2: alta 1 · media 22 · baixa 7
confiança ordem 3: alta 0 · media 0 · baixa 16
links da seção 11: 27/27 respondem (frontmatter diz fontes: 27)
RESULTADO: ok
```
