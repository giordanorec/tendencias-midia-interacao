---
tema: Voz e som gerativos
slug: voz-e-som-gerativos
autor_login: grec
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-22
horizonte: 2041
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 13
efeitos_ordem_2: 20
efeitos_ordem_3: 20
tecnologias_citadas: [Suno, Suno Studio, Suno v6, Suno Advanced Split, Udio, Moshi, Mimi, gpt-realtime, OpenAI Realtime API, Apple SpeechAnalyzer, Kokoro-82M, Kokoro.js, Transformers.js, WebGPU, ElevenLabs Agents, Whisper, piper-tts-web, ChatTTS, Bark, expo-ai-kit, detector de música gerada da Deezer, SIP, STIR/SHAKEN]
fontes: 21
confianca: media
experimento: "Conversa sem tela no navegador: agente de voz local (STT + modelo + TTS em WebGPU) testado em sala contra a mesma tarefa na tela, em silêncio e em público"
skill_usada: futurizacao-giordano
publico_ok: false
---

# Voz e som gerativos — mapa de futuro até 2041

## 1. Resumo

Três rupturas sustentam este mapa. A primeira é a **conversa falada de ponta a ponta, sem turnos, que começa a rodar no próprio aparelho**: a voz passa a ser o caminho principal de parte das interações, e a tela vira confirmação. A segunda é a **música gerada inteira e, desde junho de 2026, editável canal a canal por regeneração**: a canção vira material paramétrico, não gravação, e o problema do músico passa de produzir para ser ouvido — no Deezer, mais de metade das entregas diárias já é gerada, mas o gerado tem 1–3% das escutas. A terceira é a **voz clonável a partir de amostra curta**: a voz deixa de provar quem fala, e a confiança no telefone e no áudio de WhatsApp precisa de outro fundamento. O mapa encontra uma convergência forte — as três raízes empurram para a **proveniência do áudio** (assinatura, etiqueta, prova de captura) como a infraestrutura que falta — e um bloqueio com dono: gravadoras e sociedades de gestão coletiva tentam manter a música gerada dentro de jardins murados. Até 2041 o provável é um mundo de áudio abundante e desconfiado, em que o humano verificado vira marcador de valor.

## 2. O tema

**O que é.** Som e voz produzidos por modelo, não captados: fala sintetizada e compreendida em tempo real, diálogo falado de ponta a ponta (*speech-to-speech*), música gerada completa a partir de descrição, clonagem de voz. A imagem em movimento fica com o tema 12; a IA local em geral, com o tema 16 — aqui só entra a parte de áudio e voz.

**Onde encosta em mídia e interação.** Em dois lugares ao mesmo tempo. Na **interação**, porque a voz conversacional muda o que é uma interface: turnos, interrupções, silêncio e quem pode ou não falar viram material de projeto. Na **mídia**, porque a música e a voz gravadas deixam de ser o registro de um acontecimento e passam a ser saída de um sistema — com consequência para autoria, remuneração, trilha de jogo e publicidade, e para a própria ideia de voz como identidade.

**Por que um mapa de futuro, e não estado da arte.** Porque as consequências relevantes não estão nos modelos, e sim no que deixa de valer: a voz como senha, a gravação como prova, o *stream* como unidade de pagamento, a trilha de biblioteca como mercado. Essas mudanças atravessam atores que não conversam entre si (bancos, gravadoras, dubladores, projetistas de interface) e só aparecem quando se segue a cadeia causal.

**Premissas deste mapa (do briefing).** Modo MAPA, não interativo. Horizonte 2041. Público: quem projeta mídia e interação. Recorte global, com nota sobre o Brasil. Descartado de início: o que já é comum em produto de massa. Nenhuma raiz suspeita dada. Viés neutro, com um cenário de cada lado. Ideias óbvias fora: as que servem para qualquer tema. Falseadores declarados pelo autor: (a) evidência de que a adoção já passou da maioria inicial (Rogers); (b) evidência de que a tecnologia só melhora o que existe, sem romper nada. Profundidade: três ordens. Busca na web: usada (WebSearch e WebFetch). O briefing é completo; por isso as confianças **não** foram rebaixadas por falta de entrevista. O que o briefing não cobre está declarado na seção 12.2.

## 3. Onde isso está hoje

*Âncora feita com acesso à web em 22/09/2026. 17 buscas; 21 fontes abertas e citadas; 7 aberturas falharam (listadas na seção 12).*

### 3.1 O que já existe e funciona

**Conversa falada de ponta a ponta.**
- **Moshi** (Kyutai, arXiv 2410.00037, setembro de 2024): modelo de fala e texto que trata o diálogo como geração fala-para-fala, com dois fluxos paralelos (o do usuário e o do sistema) e, por isso, sem turnos explícitos — acomoda sobreposição e interjeição. Latência teórica de 160 ms, 200 ms na prática [10]. Código MIT/Apache, pesos CC-BY 4.0; modelo de 7B, roda em Mac com MLX (testado em M3, quantizado em 4 e 8 bits) e em GPU de 24 GB; codec Mimi a 1,1 kbps e 80 ms [11]. É a prova de que a conversa sem turnos roda **fora da nuvem**, num laptop.
- **gpt-realtime / Realtime API** (OpenAI): modelo fala-para-fala em disponibilidade geral, com conexão por WebRTC, WebSocket e **SIP** — isto é, ligado direto à rede telefônica. Limites declarados: sessões de até 60 minutos, 28.672 tokens de entrada, sem controle de temperatura na versão GA [12]. Nuvem, não local.
- **Apple SpeechAnalyzer** (WWDC 2025, iOS 26): transcrição **inteiramente no aparelho**, fora da memória do app, sem aumentar o tamanho do app; otimizado para fala longa, distante e com vários falantes; já move Notes, Voice Memos e Journal [13]. É a camada de escuta local virando serviço do sistema operacional.
- **Kokoro-82M / Kokoro.js** (janeiro de 2025): síntese de fala de 82 milhões de parâmetros rodando 100% no navegador, via WASM e Transformers.js; a versão quantizada cai de 326 MB para 86 MB "sem diferença perceptível" [14]. A fala sintética de qualidade cabe numa aba.
- **ElevenLabs**: passou de US$ 350 milhões de receita recorrente anual (fim de 2025) para mais de US$ 500 milhões nos quatro primeiros meses de 2026, com crescimento atribuído a empresas implantando **agentes de voz** em atendimento, vendas, recrutamento e marketing [15].

**Música gerada.**
- **Suno**: v3 (mar/2024) → v4 (nov/2024) → v4.5 (mai/2025) → v5 (set/2025) → v5.5 (mar/2026) → **v6 (09/09/2026)**, que substitui todos os modelos anteriores [3]. **Suno Studio** (set/2025): estação de áudio no navegador com linha do tempo multipista, geração de canais e exportação MIDI; a versão 2.0 (ago/2026) acrescentou edição MIDI e efeitos [3].
- **Advanced Split** (Suno, 11/06/2026): em vez de separar a mistura por máscara de frequência, **regenera** o canal pedido (bateria, baixo, ~100 instrumentos) — sem artefato de separação, mas também sem reconstrução 1:1 do original; MIDI pega a altura das notas e "só aproximadamente o ritmo" [5]. Auto Split entrega até 12 grupos de canais [5]. **É o sinal do tema mudando de estado**: a amostra da disciplina registrava que a música gerada "não entrega os canais separados"; em 2026 ela entrega — por regeneração, não por separação.
- **Artistas sintéticos em parada**: Xania Monet (criada pela poeta Telisha Jones, que escreve as letras e gera a música no Suno) entrou em #30 no Adult R&B Airplay e #20 em Hot R&B Songs — primeira canção de IA numa parada de execução em rádio da Billboard — e chegou a #3 em Hot Gospel Songs; o projeto foi contratado pela Hallwood Media por US$ 3 milhões em setembro de 2025 [4].

### 3.2 O que existe e ainda não funciona (ou não se sustenta)

- **Canais "separados" que não são os originais.** A regeneração entrega canais limpos, mas não os canais que geraram a mistura; o ritmo no MIDI é aproximado e o resultado ainda pede mixagem e masterização profissionais [5]. Edição fina, portanto, continua limitada.
- **Consumo do gerado.** Deezer: de 10 mil faixas geradas por dia (jan/2025, 10% das entregas) para ~90 mil por dia (jun/2026, mais de 50%) [6]; mas o gerado tem só 1–3% das escutas e 85% dessas escutas são detectadas como fraude e desmonetizadas [7]. Muita oferta, pouca audiência.
- **Transcrição local em português** — a amostra da turma registrou que o Whisper "confunde nome próprio e sigla" (material da disciplina, não fonte aberta nesta rodada).
- **Voz local conversacional em português.** Moshi foi publicado com vozes em inglês [11]; não abri evidência de modelo fala-para-fala local de qualidade humana em português. *Sem número encontrado.*

### 3.3 Quem constrói

| Ator | Onde entra |
|---|---|
| Suno | música gerada completa; Studio; regeneração de canais; acordo com Warner, BMG e Believe [1][3] |
| Udio + Universal Music | plataforma licenciada em "jardim murado", sem exportação [2] |
| Kyutai (laboratório aberto, França) | Moshi, Mimi: conversa fala-para-fala aberta e local [10][11] |
| OpenAI | gpt-realtime, Realtime API com SIP [12] |
| Apple | SpeechAnalyzer: escuta local como serviço do sistema [13] |
| ElevenLabs | síntese, clonagem e agentes de voz para empresa [15] |
| Comunidade aberta (Hugging Face / Xenova, Kokoro) | TTS no navegador [14] |
| Deezer | detecção e etiquetagem de música gerada na distribuição [6][7][8] |
| GEMA e majors | litígio e licença sobre treino [1][2][9] |

### 3.4 Números de adoção hoje

- Deezer, jun/2026: ~90 mil faixas geradas por dia, >50% das entregas diárias [6]; 1–3% das escutas; 85% das escutas de faixas geradas detectadas como fraude [7]. Em nov/2025 o mesmo indicador de escuta era 0,5% [8].
- Deezer/Ipsos, out/2025, 9.000 pessoas em 8 países **incluindo o Brasil**: 97% não distinguiram música inteiramente gerada de música humana num teste às cegas; 80% querem etiqueta; 70% acham que ameaça a renda de músicos [8].
- ElevenLabs: >US$ 500 milhões de receita recorrente anual em 2026 [15].
- FBI, maio/2025: alerta sobre mensagens de voz geradas por IA imitando altos funcionários dos EUA; CrowdStrike, citado na matéria, mediu alta de 442% no uso de clonagem de voz entre o 1º e o 2º semestre de 2024 [16].
- Suno: número de usuários — *sem número encontrado* nas fontes abertas.
- Voz conversacional local em uso de massa — *sem número encontrado*.

### 3.5 Regulação e litígio (âncora do bloqueio)

- **Warner × Suno** (25/11/2025): acordo encerra o processo; artistas controlam uso de nome, imagem, semelhança e voz; modelos licenciados em 2026 com depreciação dos atuais; download só para conta paga, com cota mensal [1]. Universal e Sony continuavam como autoras contra a Suno em setembro de 2026 [3].
- **Universal × Suno, "jardim murado"** (fev/2026): a Universal defende que o gerado não saia da plataforma; a Suno defende "estúdios abertos" [2].
- **GEMA × Suno** (Tribunal Regional de Munique I, 31/07/2026, processo 42 O 763/25): liminar, obrigação de informar e responsabilidade por danos sobre seis composições; o tribunal entendeu que o modelo contém reproduções permanentes das obras por **memorização** [9].
- **União Europeia, AI Act art. 50**: a partir de 02/08/2026, provedores de sistemas que geram áudio sintético precisam marcá-lo de forma legível por máquina e detectável; sistemas já no mercado têm até 02/12/2026; modelos abertos não estão isentos; o código de prática prevê aviso audível para áudio [18].
- **Dinamarca**: proposta de emenda à lei de direito autoral (jun/2025) dando a toda pessoa direito sobre corpo, rosto e **voz** contra imitação digital, com exceção para paródia e sátira [19]; em abril de 2026 ainda sem aprovação final [20].
- **Brasil**: dubladores pediram na Câmara (29/08/2024) proteção contra voz gerada por IA; tramitam o PL 1376/22 (dublagem feita por profissionais brasileiros) e o PL 2338/23 (remuneração por uso de obra no treino) [21]. Bancos: voz como fator de autenticação em Chase, Wells Fargo e Barclays, e demonstrações de quebra com clonagem barata [17].

### 3.6 Recusados como raiz (maduros, tratados como contexto)

- *Assistente de voz em nuvem (comando e resposta por turno)*: adoção em maioria em alto-falantes e celulares há anos; recusado como raiz.
- *TTS de leitura (acessibilidade, audiolivro robótico)*: comum em produto de massa; recusado.
- *Separação de fontes por máscara (tipo Demucs)*: ferramenta madura de estúdio; tratada como contexto — o que é novo é a **regeneração** do canal.
- *Sampler, DAW, síntese procedural clássica*: maduros.

## 4. As disrupções-raiz

### 4.1 Raiz A — Conversa falada de ponta a ponta, sem turnos, rodando no aparelho

1. **O que rompe.** A suposição de que interação com computador é mediada por tela e por turnos (fala → espera → resposta). Com dois fluxos paralelos e 200 ms de latência [10], a máquina pode ser interrompida, fazer interjeição e ouvir enquanto fala — o que desloca o projeto de interface da composição de telas para a coreografia de conversa. Não é "o Siri melhor": é a eliminação do turno como unidade.
2. **Por que agora.** Três pré-condições apareceram entre 2024 e 2026: modelos fala-para-fala que dispensam a cadeia STT → texto → TTS [10][12]; codecs neurais de baixíssima taxa (Mimi, 1,1 kbps) [11]; e escuta e síntese locais como serviço do sistema e do navegador [13][14]. Há cinco anos, a cadeia em três etapas somava latência que tornava a interrupção inviável.
3. **Onde está na difusão.** Nuvem: **produto de nicho → adoção precoce** em atendimento corporativo [12][15]. Local e conversacional: **demo pública / laboratório** [11]. Classificação: emergente (nuvem) e especulativo (local). Os efeitos que dependem do "local" carregam confiança baixa.
4. **O que falta.** Qualidade humana em línguas além do inglês, no aparelho; consumo de energia compatível com uso contínuo em celular e fone; convenções de interrupção que não irritem; um modo equivalente para quem não pode falar; solução para ambiente ruidoso e público.

**Quem bloqueia.** Donos de sistema operacional (Apple, Google), que têm incentivo para capturar a escuta contínua como serviço do sistema e limitar o acesso de terceiros ao microfone sempre aberto — ver e4.

### 4.2 Raiz B — Música gerada inteira e editável por regeneração

1. **O que rompe.** A gravação como unidade da música e a produção como gargalo do músico. Uma canção com voz, arranjo e mistura passa a sair de uma descrição; e, desde junho de 2026, cada canal pode ser regenerado isoladamente [5]. O que deixa de valer: o mercado de trilha de biblioteca de baixo orçamento, a ideia de *master* como original único, e o *stream* pro-rata como forma justa de dividir receita quando metade da oferta é gerada [6][7].
2. **Por que agora.** Modelos que "convencem na primeira escuta" — 97% não distinguem às cegas [8]; ferramentas de estúdio em cima deles (Studio, regeneração de canais) [3][5]; e, em 2025–2026, os primeiros acordos de licença com majors, que tiram a música gerada da zona de litígio puro [1].
3. **Onde está na difusão.** Na produção: **adoção precoce** (metade das entregas no Deezer [6]). No consumo: **<10%** (1–3% das escutas [7]). Na edição profissional: **produto de nicho** (Advanced Split só no plano Premier [5]). Emergente. *Falseador do briefing aplicado*: a adoção de uploads passou de 50%, mas é oferta, não uso; o consumo está abaixo da maioria inicial. Se a escuta de gerado passar de ~16% (maioria inicial de Rogers), esta raiz vira contexto.
4. **O que falta.** Edição realmente fiel (canal original, não regenerado); regime de licença estável (Universal e Sony ainda litigam [3]; decisão de Munique ainda não é definitiva [9]); audiência que escolha o gerado, não só o tolere.

**Quem bloqueia.** Gravadoras majors e sociedades de gestão coletiva (Universal, GEMA), por litígio e pelo modelo de jardim murado — ver e8.

### 4.3 Raiz C — Voz clonável a partir de amostra curta: a voz deixa de provar quem fala

1. **O que rompe.** A suposição social e técnica de que ouvir a voz de alguém é evidência de que é essa pessoa falando. Isso sustenta a autenticação bancária por voz [17], a confiança na ligação e no áudio de WhatsApp, a gravação como prova e o valor comercial da voz de um dublador.
2. **Por que agora.** Clonagem barata ou gratuita, suficiente para quebrar autenticação bancária em demonstração [17]; alta de 442% no uso em fraude em 2024 e alerta do FBI em 2025 [16]; e síntese de qualidade humana em tempo real [12][15].
3. **Onde está na difusão.** Como ferramenta: **adoção precoce** (no uso legítimo e na fraude). Como mudança de comportamento defensivo: **produto de nicho**. Emergente.
4. **O que falta.** Proveniência de áudio que funcione de ponta a ponta (a marcação obrigatória europeia cobre o gerador honesto, não o golpista) [18]; regime jurídico de direito sobre a própria voz (Dinamarca ainda em proposta [19][20]); protocolos sociais de verificação.

**Quem bloqueia.** Fornecedores de síntese e clonagem, que têm incentivo para capturar a regulação oferecendo verificação de consentimento e marca d'água como padrão de fato — ver e13.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: Conversa falada de ponta a ponta, sem turnos, rodando no aparelho
    efeitos:
      - id: e1
        ordem: 1
        efeito: Apps de serviço passam a ter a conversa falada como caminho principal e a tela como confirmação do que foi dito
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Designers de interação passam a especificar interrupção, silêncio e sobreposição de fala como artefato de projeto, com ferramentas próprias de prototipagem de conversa
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O W3C passa a exigir paridade não falada nas diretrizes de acessibilidade, obrigando toda ação por voz a ter caminho equivalente sem fala
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Quem não pode falar em público, gagueja ou não fala vira usuário de segunda classe, e produtos passam a aceitar sussurro e fala silenciosa como modalidade de entrada
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Escritórios e transportes ganham zonas e cabines acústicas para falar com máquinas, e a etiqueta de falar com o aparelho em público vira norma escrita de convivência
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O atendimento telefônico de bancos, varejo e operadoras passa a ser operado por agentes de voz de ponta a ponta ligados direto à rede telefônica
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Consumidores passam a mandar o próprio agente de voz ligar para o agente da empresa, e a chamada vira conversa entre duas máquinas que imitam gente
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Operadoras e empresas criam um canal de dados dentro da chamada para agentes negociarem sem áudio, e a voz sintética volta a ser só para humanos
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Órgãos de defesa do consumidor, como o Procon e a FTC, passam a exigir o direito de falar com um humano, e o atendente humano vira canal de exceção com fila própria
            sinal: fraco
            prazo: 2033
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Bancos e marcas de alto padrão passam a vender atendimento por voz humana verificada como diferencial de preço, invertendo a hierarquia entre humano e máquina
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: Fones, óculos e pingentes sem tela passam a ser o dispositivo principal de uma minoria de usuários, porque a conversa roda neles sem nuvem
        sinal: fraco
        prazo: 2037
        confianca: baixa
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Editores de notícia e de manual passam a produzir conteúdo para ser interrogado em voz, não para ser lido, com respostas curtas por pergunta
            sinal: fraco
            prazo: 2039
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A métrica de audiência migra de página vista para pergunta respondida, e a busca vira disputa para ser a única resposta falada em vez de um de dez links
                sinal: fraco
                prazo: 2041
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Apple e Google capturam a escuta e a fala local como serviço do sistema operacional e restringem a apps de terceiros o microfone sempre aberto
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Desenvolvedores independentes de voz migram para o navegador, com modelos de fala em WebGPU, como território fora do controle das lojas de apps
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A permissão de microfone contínuo vira objeto de disputa concorrencial sob o DMA europeu entre donos de sistema e donos de navegador
                sinal: fraco
                prazo: 2038
                confianca: baixa
  - disrupcao: Música gerada inteira e editável canal a canal por regeneração
    efeitos:
      - id: e5
        ordem: 1
        efeito: A trilha de biblioteca de baixo orçamento para vídeo, publicidade e jogo passa a ser gerada sob medida a partir do briefing, e compositores de biblioteca perdem essa faixa de mercado
        sinal: medio
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Bibliotecas de música e editoras passam a vender o direito de gerar no estilo do catálogo em vez de vender a faixa
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Compositores passam a ser pagos por influência medida por métodos de atribuição de treino, e esses métodos viram prova pericial disputada em tribunal
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Estúdios de jogo passam a gerar a trilha em tempo de execução, camada por camada, reagindo ao estado do jogo em vez de tocar faixas pré-gravadas
            sinal: fraco
            prazo: 2035
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: O compositor de jogo passa a entregar sistemas de regras musicais e timbres-assinatura licenciados por título, e não horas de música gravada
                sinal: fraco
                prazo: 2039
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: Plataformas de streaming passam a triar música por proveniência, etiquetando e tirando o gerado das recomendações, e a enxurrada gerada fica num porão de catálogo com fração mínima das escutas
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O pagamento pro-rata por stream perde legitimidade e as plataformas adotam limiares mínimos e pesos por artista verificado, porque a oferta gerada dilui o bolo e alimenta fraude
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A música funcional de sono, foco e fundo sai do streaming e passa a ser gerada no aparelho sem royalties, encolhendo a receita de categorias inteiras
                sinal: fraco
                prazo: 2037
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Feito por humano vira selo certificado por terceiros, no modelo do selo de orgânico, com auditoria de sessão de gravação
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Gravação com prova de captura assinada no próprio microfone e o show ao vivo ganham prêmio de preço e voltam a ser a principal fonte de legitimidade do músico
                sinal: fraco
                prazo: 2039
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: Pessoas sem formação musical passam a publicar canções completas com voz e arranjo, e o gargalo da música passa de produzir para ser ouvido
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Gravadoras passam a contratar projetos de letrista com persona sintética em vez de intérpretes, como a Hallwood fez com Xania Monet
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A persona sintética vira ativo de catálogo que sobrevive ao criador e é vendida ou herdada, e a autoria entre criador da persona e dono do modelo vai a tribunal
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: A voz cantada de artistas vira licença de adesão por plataforma, e cantores passam a receber pelo uso da própria voz em canções feitas por fãs
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: A canção deixa de ter versão canônica para o fã, que ouve e compartilha a própria versão com a voz licenciada do ídolo
                sinal: fraco
                prazo: 2037
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: Majors e sociedades de gestão coletiva usam litígio e licença para impor jardins murados em que a música gerada não sai da plataforma
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: O mercado de geração musical se divide entre modelos licenciados de catálogo fechado e modelos abertos treinados sem licença, operados de jurisdições permissivas ou rodando no aparelho
            sinal: fraco
            prazo: 2032
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: A música gerada que circula nas redes passa a vir majoritariamente de modelos abertos locais fora do alcance da licença, esvaziando o acordo das majors
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: Produtores passam a usar a música gerada como material editável dentro da estação de áudio, e a faixa gerada vira ponto de partida em vez de produto final
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: Engenheiros de mixagem passam a corrigir pedindo nova versão de um canal em vez de processar o sinal, e o ofício migra de tratar áudio para dirigir regeneração
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: O master como gravação original perde valor jurídico, porque todo canal é regenerável, e o direito conexo de fonograma passa a ser disputado sobre versões sem original
                sinal: fraco
                prazo: 2041
                confianca: baixa
  - disrupcao: Voz clonável a partir de amostra curta, que deixa de provar quem fala
    efeitos:
      - id: e10
        ordem: 1
        efeito: Bancos abandonam a impressão de voz como fator de autenticação e passam a exigir fator de aparelho em todo atendimento telefônico
        sinal: medio
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Chamadas e áudios passam a carregar atestação criptográfica de origem, e áudio sem assinatura passa a ser tratado como suspeito por padrão
            sinal: fraco
            prazo: 2035
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: A fala anônima de denunciantes e fontes jornalísticas perde credibilidade, porque áudio não assinado é descartado como provável falso
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: Famílias e empresas adotam palavra-senha e rechamada por outro canal como protocolo contra golpes de voz clonada
        sinal: medio
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: O áudio de WhatsApp perde força como prova informal de que é a pessoa falando, e pedido de dinheiro por áudio passa a exigir confirmação em outro canal
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: No Brasil, idosos que dependem do áudio para se comunicar passam a ter pagamentos e contatos intermediados por familiares, trocando autonomia por proteção
                sinal: fraco
                prazo: 2036
                confianca: baixa
          - id: e11.2
            ordem: 2
            efeito: Tribunais passam a exigir perícia de proveniência para aceitar gravação de áudio como prova, e a gravação clandestina perde peso probatório
            sinal: fraco
            prazo: 2035
            confianca: media
            efeitos:
              - id: e11.2.1
                ordem: 3
                efeito: Réus passam a alegar que gravações verdadeiras são sintéticas, e a defesa do deepfake vira estratégia de rotina em processos com prova de áudio
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: A voz vira objeto de direito próprio da pessoa, com licença, remoção e indenização, como propõe a emenda dinamarquesa e pedem os dubladores brasileiros
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: Dubladores e locutores passam a vender licença de voz sintetizável por obra, com pagamento por uso, em vez de hora de estúdio
            sinal: fraco
            prazo: 2033
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: A redublagem de catálogo antigo passa a usar vozes licenciadas de dubladores aposentados ou mortos, e herdeiros viram parte dos contratos de dublagem
                sinal: fraco
                prazo: 2039
                confianca: baixa
          - id: e12.2
            ordem: 2
            efeito: Pessoas comuns passam a restringir a publicação da própria voz em vídeos e mensagens por medo de clonagem, reduzindo a voz pública disponível
            sinal: fraco
            prazo: 2033
            confianca: baixa
            efeitos:
              - id: e12.2.1
                ordem: 3
                efeito: Criadores de conteúdo passam a publicar com voz sintética de fachada para não expor a própria, e a voz pública de um criador deixa de ser a voz dele
                sinal: fraco
                prazo: 2037
                confianca: baixa
      - id: e13
        ordem: 1
        efeito: Fornecedores de síntese de voz transformam verificação de consentimento e marca d'água em padrão de fato, e o requisito vira barreira contra modelos abertos
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: Como modelos abertos seguem clonando localmente sem marca, a detecção se desloca do gerador para o receptor, e o telefone passa a analisar a voz de quem liga
            sinal: fraco
            prazo: 2035
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: Fabricantes de celular passam a exibir em toda chamada um grau de probabilidade de voz humana, e a chamada sem esse selo deixa de ser atendida
                sinal: fraco
                prazo: 2039
                confianca: baixa
```

### 5.1 Os mecanismos, efeito a efeito

**Raiz A — conversa sem turnos no aparelho.**

- **e1** — porque a conversa fala-para-fala sem turnos [10][12] faz a voz responder no ritmo da fala humana, tarefas de serviço (marcar, pedir, reclamar, perguntar) ficam mais rápidas faladas do que navegadas; a tela sobra para o que precisa ser conferido (valor, endereço, lista). *Sinal médio*: gpt-realtime com SIP [12], SpeechAnalyzer em apps do sistema [13], Moshi [11] — três artefatos, mas nenhum ainda como caminho principal de app de massa; conto como médio, não forte, porque os artefatos são de infraestrutura, não do efeito. *Classe de referência*: interface de toque — do iPhone (2007) a maioria dos celulares ~5–6 anos; usei a mais lenta, "alto-falante inteligente" (comando por turno), que chegou a produto de massa mas não virou caminho principal de app em uma década. Prazo 2033 = ~7 anos a partir de agora.
- **e1.1** — porque, sem turno, o comportamento de interrupção e silêncio passa a determinar se a conversa funciona, ele precisa ser especificado como hoje se especifica navegação; quem projeta precisa de ferramenta para prototipar isso (hoje prototipa-se tela). *Troca de ator*: do fornecedor do modelo para o designer.
- **e1.1.1** — porque interfaces de voz como caminho principal excluem quem não fala, o W3C (ator nomeado) tem o mecanismo institucional (WCAG) para exigir equivalência. *Teste da causa solta*: sem a raiz, voz como caminho principal não existe e a exigência não se colocaria. Fica.
- **e1.2** — porque a voz como caminho principal pressupõe poder falar em voz alta, quem não pode (surdez, gagueira, mudez, escritório aberto, transporte) perde o caminho rápido; o mercado responde com modalidades de baixo volume. *Quem perde* explícito.
- **e1.2.1** — porque falar com máquina em público gera ruído e exposição, espaços compartilhados ganham arquitetura e norma. *Troca de ator*: do produto para quem gerencia espaço.
- **e2** — porque o modelo fala-para-fala se liga direto à rede telefônica por SIP [12] e empresas já implantam agentes de voz em atendimento [15], o atendimento telefônico é o primeiro lugar em que a conversa de máquina substitui a de gente. *Sinal forte*: SIP em GA [12], crescimento de receita da ElevenLabs atribuído a agentes [15], e o fato de que o objeto aqui é a nuvem, não o local. *Classe de referência*: URA (menu por tom) — levou cerca de uma década para dominar o atendimento; a curva atual é mais rápida porque a troca não exige mudança do usuário. Prazo 2029.
- **e2.1** — porque o consumidor também tem agente, ele terceiriza a espera e a negociação; a chamada vira duas máquinas. *Troca de ator*: da empresa para o consumidor.
- **e2.1.1** — porque áudio é um canal caro e lento para duas máquinas, a pressão é criar canal de dados; a voz sintética perde sua função entre máquinas. *Retroação* sobre e2.
- **e2.2** — *retroação da raiz A*: porque a substituição total gera casos sem saída, órgãos de defesa do consumidor (Procon, FTC) têm incentivo e instrumento para exigir o humano. *Sinal fraco*: não abri caso regulatório nesta rodada.
- **e2.2.1** — porque o humano vira exceção cara (e2.2), ele vira diferencial de preço. Inversão de hierarquia; troca de ator (marketing de marca).
- **e3** — porque a conversa roda sem nuvem e sem tela, o aparelho sem tela deixa de depender do celular para funcionar. *Sinal fraco*: não abri caso de produto sem tela bem-sucedido; a referência de VR (>10 anos e ainda não) é a que se aplica, e por isso o prazo foi para 2037 (ver seção 7).
- **e3.1** — porque o usuário do fone não lê, quem publica texto precisa ser interrogável. *Troca de ator*: editor.
- **e3.1.1** — porque a resposta falada é uma só (não há lista de links em voz), a disputa por atenção se concentra num único resultado. Prazo no limite do horizonte.
- **e4** — *quem bloqueia a raiz A*: porque a escuta contínua é o ponto de entrada de toda interação por voz, quem controla o sistema operacional ganha poder ao oferecê-la como serviço (o SpeechAnalyzer roda fora da memória do app e é atualizado pelo sistema [13]) e ao restringir o microfone sempre aberto a terceiros.
- **e4.1** — porque o sistema fecha a escuta, desenvolvedores vão para o navegador, onde a síntese já roda local [14]. *Sinal médio*: Kokoro.js [14]; piper-tts-web e expo-ai-kit (material da turma, não aberto).
- **e4.1.1** — porque sistema e navegador disputam a mesma permissão, e o DMA é o instrumento europeu que já trata de interoperabilidade entre donos de plataforma, a disputa tende a ir para lá.

**Raiz B — música gerada e editável.**

- **e5** — porque uma descrição gera trilha sob medida [3] e a regeneração de canais permite ajustar [5], o comprador de trilha barata (vídeo corporativo, anúncio de rede social, jogo independente) deixa de licenciar faixa de biblioteca. *Sinal médio*: Suno Studio e v6 [3], Advanced Split [5]; não abri dado de receita de bibliotecas. *Classe de referência*: fotografia de banco de imagens diante da imagem gerada (tema 12) — sem número aberto; declaro como referência qualitativa. Prazo 2030.
- **e5.1** — porque a faixa perde valor e o treino licenciado ganha (acordo Warner-Suno [1]), o ativo da biblioteca passa a ser o direito de estilo. *Troca de ator e de mecanismo*: de venda de faixa para licença de treino.
- **e5.1.1** — porque pagar por estilo exige medir quanto do catálogo "entrou" num resultado, a atribuição de treino vira instrumento econômico e, portanto, prova disputada; o critério de memorização de Munique [9] é o primeiro passo dessa perícia.
- **e5.2** — porque cada canal pode ser regenerado isoladamente [5], a trilha pode variar por camada em tempo de execução. *Sinal fraco*: 1BITDRAGON (material da turma) não é geração em execução.
- **e5.2.1** — porque a trilha é gerada, o que o compositor entrega é o sistema e o timbre, licenciado por título. Ator nomeado: compositor de jogo; mecanismo: licença de sistema, não de horas.
- **e6** — *retroação da raiz B*: porque a oferta gerada passou de metade das entregas e 85% das escutas dela são fraude [6][7], a plataforma tem incentivo econômico para triar: etiqueta, exclusão de recomendação e de *playlist* editorial, remoção de faixa inativa [7]. *Sinal forte*: Deezer (detector, etiqueta, exclusão) [6][7], AI Act art. 50 [18], opinião pública a favor de etiqueta (80%) [8].
- **e6.1** — porque o pro-rata divide o bolo pelo número de escutas, e escutas fraudulentas e ruído gerado entram no divisor, o modelo perde legitimidade; limiares e pesos por artista verificado são a resposta. *Sinal médio*: desmonetização de escutas fraudulentas pela Deezer [7]; 69% dos entrevistados acham que gerado deve pagar menos [8].
- **e6.1.1** — porque a música funcional não depende de artista identificável, é a primeira a poder sair do streaming para a geração local contínua. *Troca de mecanismo*: do catálogo para o gerador.
- **e6.2** — porque o ouvinte não distingue às cegas (97%) [8] mas quer saber (80%) [8], a informação precisa vir de fora do som: selo, auditoria.
- **e6.2.1** — porque o selo precisa de prova, a prova mais forte é a captura assinada e o acontecimento presencial; o show recupera centralidade como prova de humanidade. *Convergência* com e10.1 (ver 5.2).
- **e7** — porque a canção sai de uma descrição, quem escreve letra mas não produz passa a publicar (Xania Monet [4]; ~90 mil faixas geradas por dia no Deezer [6]); com oferta ilimitada, o recurso escasso é a atenção (1–3% das escutas [7]). *Sinal forte*.
- **e7.1** — porque o projeto sintético tem custo baixo de produção e já demonstrou parada [4], gravadoras contratam o projeto, não o intérprete. *Um caso aberto* → sinal médio.
- **e7.1.1** — porque a persona não envelhece nem morre, ela vira ativo transferível; e como o som depende do modelo, a autoria fica dividida.
- **e7.2** — porque o acordo Warner-Suno põe nome, imagem, semelhança e voz sob controle do artista, com adesão [1], a voz cantada vira item de licença. *Troca de ator*: do fã para o artista-licenciante.
- **e7.2.1** — porque cada fã pode gerar a sua versão com a voz licenciada, a gravação canônica perde centralidade no consumo de fã.
- **e8** — *quem bloqueia a raiz B*: porque a música gerada compete com o catálogo, as majors e a GEMA usam litígio (Munique [9]) e licença com restrição de exportação (Udio-Universal [2]) para manter o gerado dentro de plataformas que controlam. *Sinal forte*: três artefatos [1][2][9].
- **e8.1** — porque o jardim murado impede exportação e a decisão de Munique encarece o treino não licenciado na Europa [9], o mercado se divide em dois regimes.
- **e8.1.1** — porque o gerador aberto roda local e o licenciado não exporta, a música gerada que circula nas redes tende a vir do aberto; retroalimentação que enfraquece o bloqueio (ver 5.3).
- **e9** — porque a regeneração de canal [5] e a exportação de canais e MIDI no Studio [3] entregam material editável, o produtor usa o gerado como rascunho dentro da estação de áudio. *É o sinal "canais separados" mudando de estado.* Sinal médio: dois artefatos [3][5].
- **e9.1** — porque é mais rápido pedir outra versão de um canal do que processá-lo, a correção vira direção. *Troca de mecanismo*: processamento de sinal → regeneração.
- **e9.1.1** — porque não há "original" quando cada canal é regenerado, o direito conexo de fonograma — que protege uma fixação específica — perde o objeto.

**Raiz C — a voz não prova mais.**

- **e10** — porque a clonagem barata quebra a autenticação por voz em demonstração [17] e o FBI já alerta para voz gerada em golpe [16], bancos têm incentivo para trocar o fator. *Sinal médio*: bancos que usavam [17], demonstração de quebra [17]; o abandono por Wells Fargo apareceu em resultado de busca mas não foi confirmado em fonte aberta (seção 8). *Classe de referência*: SMS como segundo fator — anos de alerta até troca por app; prazo 2029.
- **e10.1** — porque a voz não serve mais de prova, a prova tem que vir do canal: assinatura criptográfica da chamada e do arquivo. *Classe de referência*: STIR/SHAKEN nos EUA (atestação de número de origem) — da exigência à implantação levou alguns anos (de memória; seção 8). A marcação obrigatória europeia [18] vai no sentido oposto (marca o sintético, não o humano); a combinação dos dois é o que falta.
- **e10.1.1** — porque o áudio sem assinatura vira suspeito, quem precisa falar sem se identificar perde credibilidade. *Quem perde* explícito.
- **e11** — porque o golpe usa a voz de alguém próximo e a orientação oficial é não presumir autenticidade [16], o protocolo de verificação fora da voz se difunde. *Sinal médio*.
- **e11.1** — porque o áudio de WhatsApp é, no Brasil, forma dominante de mensagem pessoal (percepção; *sem número encontrado*), ele é o alvo mais óbvio; a confirmação cruzada vira norma.
- **e11.1.1** — porque o protocolo de verificação exige competência digital, quem não a tem passa a depender de intermediário. *Quem perde*: autonomia de idosos.
- **e11.2** — porque qualquer gravação pode ser sintética, o juiz precisa de perícia; a gravação sem cadeia de custódia perde peso.
- **e11.2.1** — porque a dúvida existe, ela vira recurso de defesa (o chamado "dividendo do mentiroso"; conceito conhecido, fonte não aberta nesta rodada).
- **e12** — porque a voz é copiável, ela passa a precisar de proteção jurídica própria, fora do direito autoral de obra: emenda dinamarquesa [19][20], pedido dos dubladores na Câmara [21], controle da semelhança no acordo Warner [1].
- **e12.1** — porque há direito sobre a voz, ela pode ser licenciada; o dublador vende uso, não hora. *Troca de mecanismo*.
- **e12.1.1** — porque a licença sobrevive ao titular, catálogos antigos podem ser redublados com vozes de quem não grava mais.
- **e12.2** — *retroação da raiz C*: porque qualquer amostra pública alimenta clonagem, pessoas reduzem a própria voz pública, o que reduz a matéria-prima de clonagem de pessoas comuns. *Confiança baixa*: é comportamento defensivo, historicamente fraco (ninguém parou de postar foto por medo de reconhecimento facial).
- **e12.2.1** — porque expor a voz passa a ter custo, a voz de fachada é a saída; a voz pública deixa de ser identidade.
- **e13** — *quem bloqueia/captura a raiz C*: porque o AI Act exige marca legível por máquina e não isenta modelos abertos [18], o fornecedor comercial que já tem infraestrutura de consentimento e marca vira o padrão, e o custo de conformidade pesa mais sobre o modelo aberto.
- **e13.1** — porque a marca só existe no gerador honesto, a defesa eficaz é no receptor.
- **e13.1.1** — porque o receptor que detecta pode exibir e filtrar, a chamada ganha um "grau de humanidade" — e a chamada sem selo é ignorada, como hoje o número desconhecido.

**Regra de parada.** Parei na 3ª ordem em todos os ramos (limite do formato). Em três ramos a 3ª ordem já estava no limite da troca de ator: e3.1.1 (é quase e3.1 "mais adiante" — mantido porque troca o mecanismo de leitura para disputa de resposta única), e7.2.1 e e12.2.1 (ambos ficaram com confiança baixa por isso).

**Cobertura STEEP e quem perde (1ª ordem).** Social: e1, e3, e7, e11, e12. Tecnológico: e1, e4, e9, e13. Econômico: e2, e5, e6, e7, e8. **Ecológico: vazio** — não encontrei efeito específico desta raiz (consumo energético de inferência contínua de voz é genérico de IA; registrado na seção 12). Político: e4, e8, e12, e13. **Quem perde**: atendentes de call center (e2), compositores de biblioteca (e5), artistas no pro-rata (e6.1), quem não pode falar (e1.2), idosos (e11.1.1), fontes anônimas (e10.1.1), modelos abertos (e13), intérpretes contratáveis (e7.1).

### 5.2 Convergência

- **Proveniência do áudio.** Três raízes chegam ao mesmo efeito de 2ª ordem por caminhos independentes: e6.2 (selo "feito por humano" na música), e10.1 (atestação criptográfica de chamada e áudio) e e13.1 (detecção no receptor). Com e11.2 (perícia em tribunal), são quatro ramos pedindo a mesma infraestrutura: **uma cadeia verificável da captura até a escuta**. É o achado mais valioso do mapa e é onde quem projeta mídia e interação tem trabalho concreto: como se mostra, na interface, que um som é humano, sintético ou não verificado.
- **Humano verificado como bem de luxo.** e2.2.1 (atendente humano como diferencial), e6.2.1 (show e captura assinada com prêmio) e e12.1 (voz licenciada) convergem: a abundância do sintético transforma o humano comprovado em mercadoria premium.

### 5.3 Retroalimentação

- **Jardim murado → modelos abertos → esvaziamento do muro** (e8 → e8.1 → e8.1.1): quanto mais o licenciado fecha, mais o aberto ocupa a circulação, o que enfraquece o poder de barganha que justificou o muro. Ciclo de enfraquecimento do bloqueio.
- **Conversa de máquina → desconfiança da voz → voz humana premium** (e2 → e10/e11 → e2.2.1): a própria difusão de agentes de voz alimenta a raiz C (mais voz sintética em circulação normaliza a dúvida), que por sua vez valoriza o humano e freia a raiz A em serviços de alto valor.
- **Enxurrada gerada → triagem → porão** (e7 → e6): a oferta ilimitada provoca a triagem que a torna invisível; reforça o gargalo "ser ouvido" de e7.

### 5.4 Contradições (registradas, não resolvidas)

- **e1 × e12.2**: e1 supõe que as pessoas passam a falar mais com máquinas; e12.2 supõe que passam a expor menos a própria voz. Decide entre elas: se a fala com o agente local fica no aparelho (sem gravação exportada), coexistem; se a interface de voz exige nuvem, e12.2 freia e1.
- **e6.2 × e8.1.1**: o selo "feito por humano" supõe audiência que se importa com proveniência; a circulação dominada por modelos abertos supõe audiência que não se importa. Decide: a diferença entre os 80% que *dizem* querer etiqueta [8] e o comportamento de escuta medido.

## 6. Sinais fracos e wildcards

### 6.1 Sinais fracos

1. **Regeneração em vez de separação** (Advanced Split, 11/06/2026 [5]). O sinal da disciplina ("não entrega os canais separados") mudou de estado, mas de um jeito que ninguém previa: os canais vêm, porém não são os originais. *O que mudaria*: se a regeneração ficar fiel ao ponto de o produtor não distinguir o canal regenerado do original, o conceito de *master* (e9.1.1) cai antes de 2041. *Sinal observável*: estúdios profissionais anunciando uso de canal regenerado em lançamento comercial; o Advanced Split sair do plano mais caro [5].
2. **Memorização como critério jurídico** (Munique, 31/07/2026 [9]). O tribunal não condenou o treino em si, e sim a reprodução permanente no modelo. *O que mudaria*: se o critério pegar em outras jurisdições, modelos passam a ser auditados por quanto memorizam — uma métrica técnica vira fronteira legal, e surgem modelos "antimemorização" como produto. *Sinal observável*: decisão de 2ª instância em Munique; citação do critério em tribunal fora da Alemanha.
3. **Queda da escuta relativa × alta da oferta** (0,5% das escutas em nov/2025 [8] para 1–3% em 2026 [7], com a oferta indo de 34% para >50% [6][8]). *O que mudaria*: se a escuta de gerado crescer mais rápido que a triagem, a raiz B passa da "enxurrada ignorada" para "preferência"; e o falseador do briefing dispara. *Sinal observável*: Deezer ou outra plataforma publicar escuta de gerado acima de 10%.
4. **SIP em modelo fala-para-fala** [12]: a conversa de máquina entra na rede telefônica sem intermediário. *Sinal observável*: operadoras oferecendo agente de voz como serviço de rede.
5. **Voz no direito dinamarquês** [19][20]: direito sobre a própria voz para qualquer pessoa, não só celebridades. *Sinal observável*: aprovação e primeira ação de remoção por pessoa comum.

### 6.2 Wildcards

- **W1 — Um artista sintético chega ao topo da Hot 100.** *Mecanismo*: persona sintética com equipe de marketing de major, somando escuta real e compra digital (Xania Monet já chegou a #3 em Hot Gospel [4]). *Por que improvável*: plataformas tiram o gerado das recomendações [7] e 52% se incomodam ao saber que foram enganados [8]. *O que faria com o mapa*: invalida e6 (triagem) como freio e acelera e7.1 e e7.1.1 em cinco anos. *Sinal precoce*: uma persona sintética em top 40 de parada geral; uma major lançando persona própria.
- **W2 — Um golpe de voz clonada de grande escala em eleição ou crise** (ligação em massa com a voz de uma autoridade orientando ação falsa). *Mecanismo*: SIP + fala-para-fala + clonagem [12][16]. *Por que improvável em escala*: operadoras e plataformas detectam volume. *O que faria*: antecipa e10.1 e e13.1.1 em uma década, por reação regulatória; e freia e2 (atendimento por máquina) por desconfiança geral. *Sinal precoce*: alerta de autoridade eleitoral sobre ligação sintética em massa.
- **W3 — Quebra da premissa "modelo aberto continua aberto"**: uma decisão ou lei que torne a distribuição de pesos de modelo de voz ou música responsabilidade do distribuidor (estendendo o raciocínio de memorização [9] ao arquivo de pesos). *O que faria*: e8.1.1 e e13.1 perdem o motor; os jardins murados vencem. *Sinal precoce*: pedido de remoção de repositório de pesos de modelo de áudio com base em decisão judicial.

## 7. Contra o próprio mapa

### 7.1 Pré-mortem — "é 2041 e este mapa estava errado. Por quê?"

1. **A voz não virou caminho principal.** Falar com máquina continuou sendo constrangedor em público e lento para conferir; a tela ganhou (o destino dos alto-falantes inteligentes). → Aponta para **e1** e **e3**. *Ação*: e3 rebaixado (prazo empurrado, confiança já baixa); e1 mantido em média, mas com prazo empurrado de 2031 para 2033.
2. **A música gerada ficou no porão.** A triagem funcionou, a audiência nunca preferiu o gerado, e o efeito real ficou restrito à trilha barata. → Aponta para **e7.1** e **e7.2**. *Ação*: e7.1 rebaixado de alta para média (um caso só [4]).
3. **A proveniência nunca chegou ao usuário.** Marca d'água e atestação ficaram nos bastidores, a detecção no receptor errou demais e foi desligada. → Aponta para **e10.1** e **e13.1.1**. *Ação*: e10.1 com prazo 2033 → 2035; e13.1.1 mantido com confiança baixa.

### 7.2 Extrapolação linear

- **e7** ("mais gente publica") é "mais do mesmo, maior" em relação ao que já está acontecendo [6]. Ganha mecanismo de não linearidade: o **gargalo muda de lugar** (produção → atenção), e é isso que o efeito afirma; sem essa segunda metade, seria contexto. Mantido com a frase reescrita.
- **e2** ("mais atendimento por máquina") é extrapolação do crescimento de agentes de voz [15]. A não linearidade está nos filhos (e2.1: máquina liga para máquina). Mantido.
- **e3.1.1** é e3.1 "mais adiante". Mantido por trocar de mecanismo (disputa de resposta única), mas marcado como fronteira da regra de parada.

### 7.3 Velocidade de adoção

- **e3** exigia difusão de aparelho sem tela em ~7 anos. A classe de referência honesta é VR de consumo (>10 anos e ainda não) — não o smartphone (~4 anos). Prazo 2033 → 2037.
- **e5** exigia que bibliotecas perdessem a faixa baixa até 2028; sem dado de receita aberto, empurrei para 2030 (+2 anos).
- **e10** (bancos) e **e11** (palavra-senha) tinham prazo 2028 e 2027; a referência do SMS como segundo fator mostra anos entre alerta e troca. e10: 2028 → 2029; e11: 2027 → 2028.
- **e9.1.1** exigia mudança jurídica em ~10 anos; mudanças de direito conexo levam mais (a referência é o tempo entre o MP3 e as leis de responsabilidade de plataforma). Prazo 2036 → 2041, no limite do horizonte.

### 7.4 A raiz que não acontece

- **Sem raiz A**: sobram B e C inteiras; e2 continua (é nuvem); caem e1, e3, e4. O mapa perde a parte de interface, mas não colapsa.
- **Sem raiz B**: sobram A e C; cai a parte de mercado de música; a convergência de proveniência perde e6.2, mas mantém e10.1, e11.2 e e13.1.
- **Sem raiz C**: é a raiz mais independente; sem ela, e2.2.1 e o luxo do humano ainda se sustentam por B (e6.2.1). A convergência de proveniência sobrevive por B. **As três raízes são distintas** — nenhuma é a outra disfarçada. Há, porém, uma dependência técnica comum (modelos de áudio neural de alta qualidade); é a suposição S1 abaixo.

### 7.5 Suposições escondidas

- **S1** — Modelos de áudio seguem melhorando e barateando. Quebra = mapa inteiro atrasa. Tratada no pré-mortem.
- **S2** — Modelos abertos continuam distribuíveis. Quebra = **W3** (novo wildcard).
- **S3** — Plataformas de streaming continuam dispostas a triar (Deezer é um caso; não abri política equivalente de Spotify). Quebra = e6 enfraquece; W1 fica mais provável.
- **S4** — Energia no aparelho suficiente para inferência contínua de voz. Quebra = a raiz A vira nuvem, e e4 muda de natureza (o bloqueio passa das lojas para os provedores de nuvem).
- **S5** — As leis de marca d'água (AI Act art. 50 [18]) são cumpridas pelos grandes provedores. Quebra = e13 perde o mecanismo.

### 7.6 Viés do autor

O autor tem trajetória em computação musical (a skill `harmin`, sobre transição harmônica, está no acervo dele). Por isso a raiz B tem mais efeitos (5) que A e C (4 cada), e **e5.2** (trilha de jogo gerada em execução) e **e9.1** (engenheiro de mixagem como diretor de regeneração) estão aqui mais por interesse do que por evidência — ambos com sinal fraco. Também há viés de quem projeta interface em e1.1: supor que a conversa vira objeto de projeto como a tela foi.

### 7.7 Calibração

Contagem após a bateria: 1ª ordem — alta 7, média 5, baixa 1; 2ª ordem — alta 0, média 17, baixa 3; 3ª ordem — alta 0, média 0, baixa 20. A confiança cai com a ordem. Ressalva: a 2ª ordem concentrada em "média" (17 de 20) indica pouca discriminação dentro do nível — é o ponto fraco da calibração. (Os números exatos estão na saída do verificador, seção 12.)

### 7.8 Registro de alterações

| id | antes | depois | por quê |
|---|---|---|---|
| e1 | prazo 2031 | prazo 2033 | pré-mortem 1; referência de alto-falante inteligente |
| e3 | prazo 2033, confianca media | prazo 2037, confianca baixa | referência VR (>10 anos), não smartphone |
| e3.1 | prazo 2036 | prazo 2039 | acompanha e3 |
| e5 | prazo 2028 | prazo 2030 | sem dado de receita aberto |
| e7.1 | confianca alta | confianca media | um caso só (Xania Monet) |
| e7.2.1 | confianca media | confianca baixa | limite da regra de parada |
| e9.1.1 | prazo 2036 | prazo 2041 | ritmo de mudança em direito conexo |
| e10 | sinal forte, prazo 2028 | sinal medio, prazo 2029 | abandono do voiceprint não confirmado em fonte aberta; referência SMS |
| e10.1 | prazo 2033 | prazo 2035 | pré-mortem 3 |
| e11 | prazo 2027 | prazo 2028 | referência SMS |
| e12.2 | confianca media | confianca baixa | comportamento defensivo historicamente fraco |
| e2.3 | "Centrais de atendimento nas Filipinas e na Índia fecham" | **removido** (seção 12) | teste da causa solta: automação por texto e agentes sem voz já fariam isso |
| e6.3 | "Plataformas criam categoria de gênero 'música de IA'" | **removido** (seção 12) | especificidade fraca; é o mesmo efeito que e6 |
| e11.3 | "Operadoras cobram tarifa por verificação de chamada" | **removido** (seção 12) | sem mecanismo distinto de e10.1 |

Cota por raiz: A (e1, e3 rebaixados; e2.3 removido), B (e5, e7.1, e9.1.1 rebaixados; e6.3 removido), C (e10, e12.2 rebaixados; e11.3 removido). A bateria alterou o mapa em todas as raízes.

## 8. O que a máquina errou

1. **Números da ElevenLabs divergentes.** O resultado de busca (TechCrunch, jan/2026) dizia US$ 330 milhões de receita recorrente anual no fim de 2025; o blog da própria ElevenLabs, aberto, diz US$ 350 milhões [15]. Outro resultado de busca falava em US$ 600 milhões em junho de 2026 e "51% da receita vindo de empresas", números que **não** abri em fonte primária. Usei só os do blog aberto. Desconfiei porque três agregadores davam três números.
2. **Wells Fargo e o voiceprint.** A síntese de busca afirmou que "Wells Fargo desativou o serviço de voiceprint"; a fonte que abri (BankInfoSecurity, abr/2024) diz o contrário — lista Wells Fargo como banco que **usa** verificação por voz [17]. A afirmação pode ser mais recente, mas não abri fonte que a sustente. Por isso e10 caiu de sinal forte para médio. É um caso típico de resumo de busca afirmando mais do que as fontes.
3. **Status da lei dinamarquesa.** Um resultado de busca afirmava que o novo direito "deveria entrar em vigor em 31/03/2026"; o Global Law Experts, aberto, diz que em abril de 2026 ainda não havia aprovação final [20]; o Schjødt [19] fala em aprovação possível "no fim de 2025 ou início de 2026". Não sei o status em setembro de 2026. Escrevi "proposta" em todo o documento.
4. **Data da etiqueta da Deezer.** A TechCrunch de abril/2026 diz que a etiquetagem de conteúdo gerado foi lançada em junho de 2025 [7]; a síntese do comunicado de julho/2026 da Deezer (aberto mas bloqueado para o verificador, por isso fora da seção 11) falava em "junho de 2026". Uma das duas está errada; não usei a data no texto.
5. **Classes de referência de memória.** URA levando "cerca de uma década", STIR/SHAKEN levando "alguns anos" entre exigência e implantação, iPhone → maioria em "~5–6 anos", MP3 → leis de responsabilidade de plataforma: todas de memória, sem fonte aberta nesta rodada. Servem como ordem de grandeza, não como número.
6. **"Dividendo do mentiroso"** (e11.2.1): conceito citado de memória, fonte não aberta.
7. **Hong Kong, US$ 26 milhões** (em [17]): o caso é conhecido como golpe por videoconferência com vários participantes falsos, não só voz; não usei como evidência da raiz C para não trocar o objeto.
8. **Mecanismos fracos que soam plausíveis.** e4.1.1 (DMA) e e13.1.1 ("grau de humanidade" na chamada) são inferências com mecanismo curto; mantidos com confiança baixa, mas é onde o mapa mais parece enredo.
9. **Português ausente da âncora.** Todas as evidências de fala local são em inglês; supus, sem fonte, que o português chega depois. Isso afeta a nota sobre o Brasil.

## 9. Três cenários para 2041

**Provável.** Em 2041, a maior parte do atendimento telefônico é feita por máquinas que falam como gente, e ligar para uma empresa significa, na prática, que o seu agente fala com o dela. A voz é um caminho comum, mas não o principal, para usar apps: fala-se em casa e no carro, toca-se na rua. A música gerada é a maior parte do que se publica e uma fração pequena do que se escuta; trilha de vídeo corporativo e de jogo independente é gerada sob medida, e o compositor de biblioteca de baixo orçamento mudou de ofício. As majors licenciam catálogo para modelos fechados; nas redes circula o que sai dos modelos abertos. Ninguém confia em áudio de WhatsApp pedindo dinheiro; famílias têm palavra-senha, bancos não usam voz como senha há mais de uma década. *Sinal precoce de que estamos entrando nele*: a escuta de música gerada estabilizando abaixo de 10% nas plataformas que publicam o número, e o atendimento por agente de voz virando padrão nos grandes bancos até 2030.

**Desejável.** Em 2041, existe uma cadeia de proveniência de áudio que o usuário vê: toda chamada e todo áudio mostram se a voz é humana verificada, sintética declarada ou não verificada, e o padrão é aberto, não de um fornecedor. A voz de cada pessoa é um direito dela, com licença e remoção, e dubladores e cantores recebem por uso. Interfaces de voz têm, por norma do W3C, equivalente sem fala; quem não pode falar em público não perdeu acesso. A remuneração da música saiu do pro-rata e paga artistas verificados. *O que teria que ser feito*: um padrão aberto de atestação de áudio adotado por operadoras e sistemas operacionais antes de 2032; lei de direito sobre a voz em grandes mercados (incluindo o Brasil); diretriz de acessibilidade para voz antes da massificação. *Sinal precoce*: operadoras de telefonia adotando atestação de conteúdo, não só de número.

**Indesejável.** Em 2041, a voz não vale nada como prova e ninguém construiu o substituto a tempo. Chamadas sem selo de humanidade proprietário do fabricante não são atendidas, e quem tem aparelho barato vive de chamadas perdidas. Idosos no Brasil não conversam mais por áudio sem um familiar intermediando. Gravações verdadeiras de abuso são descartadas em tribunal como "possivelmente sintéticas". A música virou fluxo gerado contínuo sem autoria, e os poucos artistas humanos visíveis são os que as majors certificam dentro de seus jardins. A interface de voz é o caminho principal e exclui quem gagueja, quem não fala e quem trabalha em escritório aberto. *Sinal precoce*: um golpe de voz em massa em eleição (W2) respondido com selo proprietário, e não com padrão aberto.

## 10. O experimento

**O que é.** *Conversa sem tela no navegador.* Um protótipo web, sem instalação, que roda um agente de voz **inteiramente local**: reconhecimento de fala e síntese no navegador (síntese com Kokoro.js em WASM/WebGPU [14]; reconhecimento com um modelo tipo Whisper em Transformers.js, a verificar), e um modelo de linguagem pequeno local ou um roteiro fixo. A mesma tarefa (por exemplo, marcar um horário de monitoria, pedir uma troca de sala, relatar um problema no laboratório) é oferecida em três versões: só voz, só tela, e voz com tela de confirmação. O protótipo registra tempo, erros, interrupções e a escolha espontânea do participante.

**Que pergunta sobre o futuro ele responde.** Se a conversa falada vira caminho principal (e1) ou fica como caminho alternativo, e **para quem** — em especial, em que situações as pessoas deixam de falar (e1.2): em público, com colegas ouvindo, com tema pessoal.

**Que tecnologia emergente usa, e por que não dá com a madura.** Síntese e reconhecimento locais no navegador, que só ficaram viáveis em 2025 [14]; com assistente de voz em nuvem (maduro), o teste mediria um produto por turnos e com envio do áudio para fora — que é justamente o que a raiz A diz que deixa de ser necessário, e mudaria o comportamento de privacidade do participante. A versão ideal usaria fala-para-fala sem turnos (Moshi [11]); como ele exige laptop com GPU ou Apple Silicon e fala só em inglês, fica como variante para quem tiver máquina.

**O que a turma faz ao testar em sala.** Três rodadas: (1) em silêncio, sozinho, com fone; (2) em voz alta, com a turma ouvindo; (3) com ruído de fundo. Em cada rodada, cada pessoa faz a tarefa na versão que quiser e depois nas outras duas. Ao final, discute-se onde a voz foi escolhida e onde foi evitada, e quem na turma não quis falar em nenhuma rodada — e por quê.

**O resultado que faria o autor mudar de ideia.** Se, mesmo sozinho e em silêncio (rodada 1), a maioria da turma escolher a tela em mais de 70% das tarefas, e a versão só voz for mais lenta que a tela apesar da latência local, **e1 cai de média para baixa e o prazo sai do horizonte**; a raiz A passaria a valer só para atendimento telefônico (e2). Se, ao contrário, a voz for escolhida também na rodada 2 (em público), e1.2 perde força e e1 sobe.

## 11. Fontes

1. Music Business Worldwide — "Warner Music Group strikes 'landmark' deal with Suno; settles copyright lawsuit" (25/11/2025). `https://www.musicbusinessworldwide.com/warner-music-group-settles-with-suno-strikes-first-of-its-kind-deal-with-ai-song-generator/` — Sustenta: termos do acordo Warner-Suno, controle de semelhança e voz, modelos licenciados em 2026, limites de download (e5.1, e7.2, e8, e12). Confiabilidade: imprensa especializada de indústria musical, com citação de executivos; boa para fatos do acordo, sem os números financeiros.
2. Music Business Worldwide — "Universal and Suno are in a PR battle over 'walled gardens' in AI music" (fev/2026). `https://www.musicbusinessworldwide.com/universal-and-suno-are-in-a-pr-battle-over-walled-gardens-in-ai-music/` — Sustenta: posições de Universal (jardim murado) e Suno (estúdio aberto) (e8, e8.1). Confiabilidade: alta para as declarações citadas.
3. Wikipedia — "Suno (platform)". `https://en.wikipedia.org/wiki/Suno_%28platform%29` — Sustenta: linha do tempo de versões até v6 (09/09/2026), Suno Studio e Studio 2.0, litígios, Universal e Sony ainda autoras (seções 3 e 4.2). Confiabilidade: média; enciclopédia colaborativa, usada para cronologia, não para números de negócio.
4. Wikipedia — "Xania Monet". `https://en.wikipedia.org/wiki/Xania_Monet` — Sustenta: criadora, uso do Suno, posições nas paradas Billboard, contrato de US$ 3 milhões (e7, e7.1, W1). Confiabilidade: média; os fatos de parada batem com o que os resultados de busca atribuíam à Billboard (a página da Billboard não abriu — seção 12).
5. Peak-Studios — "Suno Advanced Split: real stems from AI songs". `https://www.peak-studios.de/en/suno-advanced-split/` — Sustenta: data (11/06/2026), regeneração em vez de separação, 12 grupos, ~100 instrumentos, limitações (sinal fraco 1, e9, e5.2). Confiabilidade: média; estúdio que testou a função, não documentação oficial.
6. TechCrunch — "Music streamer Deezer says more than 50% of daily uploads are AI-generated" (21/07/2026). `https://techcrunch.com/2026/07/21/music-streamer-deezer-says-more-than-50-of-daily-uploads-are-ai-generated/` — Sustenta: série de entregas diárias de faixas geradas de jan/2025 a jun/2026 (e6, e7). Confiabilidade: alta como relato dos números divulgados pela Deezer; os números são da própria empresa.
7. TechCrunch — "Deezer says 44% of songs uploaded to its platform daily are AI-generated" (20/04/2026). `https://techcrunch.com/2026/04/20/deezer-says-44-of-songs-uploaded-to-its-platform-daily-are-ai-generated/` — Sustenta: 1–3% das escutas, 85% de fraude, exclusão de recomendação e playlist (e6, e6.1, e7). Confiabilidade: alta como relato; número da empresa.
8. Music Business Worldwide — "50,000 AI tracks flood Deezer daily – as study shows 97% of listeners can't tell the difference" (nov/2025). `https://www.musicbusinessworldwide.com/50000-ai-tracks-flood-deezer-daily-as-study-shows-97-of-listeners-cant-tell-the-difference-between-human-made-vs-fully-ai-generated-music/` — Sustenta: pesquisa Deezer/Ipsos (9.000 pessoas, 8 países; Brasil incluído conforme o comunicado da Deezer aberto nesta rodada), 97%, 80% querem etiqueta, 0,5% das escutas em nov/2025 (e6.2, W1, 4.2). Confiabilidade: pesquisa encomendada por parte interessada (a Deezer vende detecção); teste de três faixas por pessoa é curto.
9. KPW — "GEMA also wins against Suno" (31/07/2026). `https://kpw.law/en/gema-also-wins-against-suno/` — Sustenta: decisão de Munique (42 O 763/25), memorização, recurso da OpenAI no caso anterior (e8, e5.1.1, sinal fraco 2, W3). Confiabilidade: escritório de advocacia alemão; boa para o conteúdo da decisão.
10. arXiv 2410.00037 — Défossez et al., "Moshi: a speech-text foundation model for real-time dialogue" (2024). `https://arxiv.org/abs/2410.00037` — Sustenta: fala-para-fala full-duplex, dois fluxos, 160/200 ms (raiz A, e1). Confiabilidade: pré-publicação com código e pesos públicos; latência declarada pelos autores.
11. GitHub — kyutai-labs/moshi. `https://github.com/kyutai-labs/moshi` — Sustenta: licenças, 7B, execução em Mac/MLX e GPU de 24 GB, codec Mimi (raiz A, experimento). Confiabilidade: alta; repositório oficial.
12. OpenAI Developers — "Developer notes on the Realtime API". `https://developers.openai.com/blog/realtime-api` — Sustenta: gpt-realtime como fala-para-fala em GA, SIP, limites de sessão (e2, W2). Confiabilidade: documentação do fornecedor; alta para funcionalidades, nula para desempenho comparativo.
13. Apple Developer — WWDC25 sessão 277, "Bring advanced speech-to-text to your app with SpeechAnalyzer". `https://developer.apple.com/videos/play/wwdc2025/277/` — Sustenta: transcrição local, fora da memória do app, atualizada pelo sistema, usada em apps nativos (e4, raiz A). Confiabilidade: documentação oficial.
14. Hugging Face — post de Xenova, "Introducing Kokoro.js" (16/01/2025). `https://huggingface.co/posts/Xenova/503648859052804` — Sustenta: TTS de 82M no navegador, 326 → 86 MB (e4.1, experimento). Confiabilidade: anúncio do autor da biblioteca; alta para o que a biblioteca faz.
15. ElevenLabs — "ElevenLabs crosses $500M ARR and welcomes new investors" (mai/2026). `https://elevenlabs.io/blog/500m-arr-and-new-investors` — Sustenta: US$ 350M (fim de 2025) → >US$ 500M; crescimento por agentes de voz (e2). Confiabilidade: número da própria empresa, não auditado.
16. Cybersecurity Dive — "FBI warns senior US officials are being impersonated using texts, AI-based voice cloning" (16/05/2025). `https://www.cybersecuritydive.com/news/fbi-us-officials-impersonated-text-ai-voice/748334/` — Sustenta: alerta do FBI, 442% (CrowdStrike) (raiz C, e11, W2). Confiabilidade: boa como relato do alerta; o 442% é de empresa de segurança.
17. BankInfoSecurity — "Cloned Voice Tech Is Coming for Bank Accounts" (12/04/2024). `https://www.bankinfosecurity.com/cloned-voice-tech-coming-for-bank-accounts-a-24850` — Sustenta: bancos que usam voz como autenticação, demonstração de quebra, casos de fraude (e10). Confiabilidade: imprensa especializada; data de 2024, anterior à evolução mais recente.
18. artificialintelligenceact.eu — "The EU AI Act's Transparency Rules: A Practical Guide to Article 50". `https://artificialintelligenceact.eu/transparency-rules-article-50/` — Sustenta: marcação legível por máquina de áudio sintético a partir de 02/08/2026, prazo até 02/12/2026, sem isenção para abertos (e6, e10.1, e13). Confiabilidade: site de referência mantido por instituto independente; não é o texto oficial.
19. Schjødt — "Owning the Self: Denmark's Copyright Turn Against Deepfakes". `https://schjodt.com/news/owning-the-self-denmarks-copyright-turn-against-deepfakes` — Sustenta: proposta dinamarquesa sobre corpo, rosto e voz, exceções (e12). Confiabilidade: escritório de advocacia nórdico; bom para o conteúdo da proposta.
20. Global Law Experts — "Denmark Deepfake Law 2026". `https://globallawexperts.com/denmark-deepfake-law-2026/` — Sustenta: em abril/2026 ainda sem aprovação final (e12; seção 8 item 3). Confiabilidade: média; portal de conteúdo jurídico.
21. Câmara dos Deputados — "Segmento de dublagem pede proteção legal contra uso de voz gerada por inteligência artificial" (29/08/2024). `https://www.camara.leg.br/noticias/1092791-segmento-de-dublagem-pede-protecao-legal-contra-uso-de-voz-gerada-por-inteligencia-artificial/` — Sustenta: pleito dos dubladores, PL 1376/22 e PL 2338/23 (e12, e12.1, nota Brasil). Confiabilidade: fonte oficial; data de 2024.

## 12. Anexo — o levantamento bruto

### 12.1 Saída do verificador

```
$ python3 futurizacao-giordano/references/verificar.py rodadas/giordano-h2041/13-voz-e-som-gerativos/tendencia-voz-e-som-gerativos.md --links
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 3 (frontmatter diz 3)
efeitos ordem 1: 13 (frontmatter diz 13)
efeitos ordem 2: 20 (frontmatter diz 20)
efeitos ordem 3: 20 (frontmatter diz 20)
prazo > horizonte (2041) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 7 · media 5 · baixa 1
confiança ordem 2: alta 0 · media 17 · baixa 3
confiança ordem 3: alta 0 · media 0 · baixa 20
links da seção 11: 21/21 respondem (frontmatter diz fontes: 21)
RESULTADO: ok
```

### 12.2 Premissas assumidas que o briefing não cobria

- Data do documento: 22/09/2026 (relógio da máquina).
- Número de raízes: três (a skill permite duas a quatro).
- "Comum em produto de massa" foi aplicado assim: assistente de voz por turno, TTS de leitura, separação por máscara e DAW são maduros; música gerada, conversa sem turnos e clonagem não são, porque a adoção medida em consumo ou comportamento está abaixo de 10%.
- A nota sobre o Brasil ficou dispersa (4.2, 3.5, e11.1, e11.1.1, e12, cenário indesejável) em vez de uma subseção única.
- `publico_ok: false` (padrão do formato; o briefing não disse).
- O documento é independente dos mapas anteriores do mesmo tema na pasta `rodadas/` (giordano, giordano-h2036), que **não** foram lidos nesta rodada, para não contaminar o mapa.

### 12.3 Buscas feitas (17)

1. "Suno Warner Music settlement licensed models 2026" — deu em [1], [3].
2. "Kyutai Moshi full-duplex speech model paper" — deu em [10], [11].
3. "AI-generated artist Billboard chart 2025 Xania Monet OR Breaking Rust" — deu em [4]; a página da Billboard não abriu (402). Breaking Rust (#1 em Country Digital Song Sales, segundo o resumo da busca) não foi aberto e não entrou.
4. "Deezer AI-generated tracks per day percentage uploads 2026" — deu em [6], [7].
5. "Apple SpeechAnalyzer on-device speech-to-text API WWDC" — deu em [13]. O resumo dizia que o SpeechAnalyzer "empata com modelos Whisper intermediários" (blog da Argmax, não aberto) — não usado.
6. "voice cloning scam FBI warning AI voice impersonation 2025 2026" — deu em [16]; números de "US$ 893 milhões" e "400%" vieram de agregadores não abertos — não usados.
7. "AI music stem separation generation editable stems Suno Studio 2026" — deu em [5].
8. "ElevenLabs revenue ARR 2026 voice agents" — deu em [15]; divergências na seção 8.
9. "dubladores brasileiros inteligência artificial voz projeto de lei 2026" — deu em [21]; movimento Dublagem Viva mencionado, não aberto.
10. "GEMA Suno court ruling Munich 2026" — Bird & Bird e Variety bloquearam (402/redirect); deu em [9].
11. "Denmark copyright law likeness voice deepfake 2026 passed" — deu em [19], [20]; Verfassungsblog abriu truncado; PDF do Parlamento Europeu não foi legível.
12. "Kokoro TTS WebGPU browser 82M model" — deu em [14].
13. "banks drop voice authentication voiceprint AI cloning 2025" — deu em [17]; dig.watch (fala de Altman sobre voiceprint) deu 403.
14. "Udio Universal Music settlement walled garden downloads disabled" — deu em [2]; página da Billboard sobre a janela de 48 h redirecionou para paywall.
15. "EU AI Act article 50 transparency code of practice labelling AI-generated audio August 2026" — deu em [18].
16. "Deezer Ipsos survey 97% listeners cannot tell AI-generated music" — deu em [8]; o comunicado da Deezer abriu no WebFetch (confirmou Brasil entre os países) mas responde 403 para o verificador, por isso trocado por [8].
17. "OpenAI gpt-realtime speech-to-speech model general availability SIP phone" — página de anúncio da OpenAI deu 403; deu em [12].

### 12.4 Aberturas que falharam ou foram retiradas da seção 11

- `https://www.billboard.com/lists/ai-artists-on-billboard-charts/` — 402 (paywall de robôs).
- `https://www.cnbc.com/2025/05/15/fbi-ai-us-officials-deepfake.html` — 403.
- `https://www.twobirds.com/en/insights/2026/germany/munich-district-court-rules-on-ai-generated-music-gema-v-suno` — 402.
- `https://verfassungsblog.de/copyrighting-voice-and-image/` — conteúdo truncado.
- `https://www.europarl.europa.eu/RegData/etudes/ATAG/2026/782611/EPRS_ATA(2026)782611_EN.pdf` — PDF ilegível pela ferramenta.
- `https://dig.watch/updates/altman-warns-ai-voice-cloning-will-break-bank-security` — 403.
- `https://openai.com/index/introducing-gpt-realtime/` — 403.
- Comunicados da Deezer (`newsroom-deezer.com/2026/07/...` e `/2025/11/...`) — abriram no WebFetch, mas respondem 403 ao verificador; retirados da seção 11 e substituídos por [6], [7], [8]. Dados exclusivos deles (detector com 99,8% de acerto; 13,4 milhões de faixas geradas detectadas em 2025; remoção de faixa inativa por 6 meses) **não** foram usados no corpo.

### 12.5 Efeitos cortados na bateria do §6

- **e2.3** — "Centrais de atendimento nas Filipinas e na Índia fecham em massa." Cortado pelo teste da causa solta: agentes de texto e automação de processos já provocariam isso sem a raiz A; é efeito de IA em geral.
- **e6.3** — "Plataformas criam categoria de gênero 'música de IA'." Cortado por especificidade: é o mesmo efeito de e6 (triagem por proveniência), dito de outro jeito.
- **e11.3** — "Operadoras passam a cobrar tarifa por verificação de chamada." Cortado por não ter mecanismo distinto de e10.1.

### 12.6 Candidatos considerados e não usados

- **Raiz candidata: "licença de treino como novo mercado".** Não entrou como raiz: não rompe nada por si; é consequência da raiz B e do bloqueio (e5.1, e8). Tratada como efeito.
- **Raiz candidata: "tradução falada em tempo real com a voz do falante".** Considerada; ficou de fora por não ter fonte aberta nesta rodada e por sobrepor-se às raízes A e C. Anotada como lacuna: o efeito sobre dublagem (e12.1) seria ainda mais forte com ela.
- **Efeito ecológico.** Candidato: "inferência contínua de voz em bilhões de aparelhos pesa na demanda de energia". Descartado por ser genérico de IA (serve para qualquer tema). A categoria ecológica ficou vazia.
- **Wildcard descartado como enredo**: "a voz humana deixa de ser usada para comunicação entre pessoas". Sem mecanismo; não entrou.
- **Material da turma sem fonte aberta nesta rodada**: 1BITDRAGON, signalflow, pydub, Hacklily, ChatTTS, pytorch/audio, Whisper, Bark, @pbji/piper-tts-web, @moxxy/plugin-tts-openai, @alfe.ai/openclaw-voice, expo-ai-kit, espnet, PastPort. Mencionados só como contexto; nenhuma afirmação do mapa depende exclusivamente deles.

### 12.7 Dados levantados e não usados no corpo

- Deezer/Ipsos: 52% se sentem desconfortáveis ao não distinguir; 73% acham antiético usar material protegido sem aprovação; 65% se opõem ao treino em material protegido [8].
- Suno: vazamento de 2026 indicando raspagem de ~114 mil a 152 mil horas de fontes do YouTube Music (Wikipedia [3]; não verificado em fonte primária).
- Moshi: codec Mimi a 12,5 Hz de representação [11].
- Realtime API: sem controle de temperatura na GA; resposta de áudio não determinística [12].
- BankInfoSecurity: caso de 2021 nos Emirados, US$ 35 milhões transferidos após clonagem da voz de um diretor [17].
