---
tema: Voz e som gerativos
slug: voz-e-som-gerativos
autor_login: grec
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-22
horizonte: 2046
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 17
efeitos_ordem_2: 24
efeitos_ordem_3: 24
tecnologias_citadas: [Suno, Suno Studio, Suno Studio 2.0, Suno v6, Suno Advanced Split, Udio, Moshi, Mimi, Unmute, Kyutai TTS, gpt-realtime, OpenAI Realtime API, Apple SpeechAnalyzer, Kokoro-82M, Kokoro.js, Transformers.js, WebGPU, Magenta RealTime 2, Lyria RealTime, ElevenLabs Agents, ElevenLabs Iconic Marketplace, C2PA Content Credentials, DDEX, detector de música gerada da Deezer, neuroprótese de voz BrainGate2, SilentWear, Whisper, piper-tts-web, ChatTTS, Bark, expo-ai-kit, SIP]
fontes: 34
confianca: media
experimento: "Selo de voz: mensagens gravadas pela turma, parte clonada localmente e parte assinada na captura, ouvidas com e sem o selo de proveniência visível, para medir se a interface muda a confiança mais do que o ouvido"
skill_usada: futurizacao-giordano
publico_ok: false
---

# Voz e som gerativos — mapa de futuro até 2046

## 1. Resumo

Quatro rupturas sustentam este mapa de vinte anos. **(A)** A conversa falada de ponta a ponta, sem turnos, que começa a rodar no aparelho: a voz vira caminho principal de parte das interações, e a tela passa a servir de confirmação. **(B)** A música gerada inteira, que desde 2026 é editável canal a canal por regeneração e já existe em fluxo contínuo e local: a canção deixa de ser uma gravação e vira um material paramétrico. Com isso, o gargalo do músico sai da produção e vai para a audiência — no Deezer o gerado passa de metade das entregas diárias, mas tem 1–3% das escutas. **(C)** A voz clonável a partir de amostra curta: a voz deixa de provar quem fala. **(D)** A voz sintetizada a partir de sinal do corpo, por neuroprótese ou sensor muscular. Hoje é laboratório, mas desacopla a fala da vocalização e responde à pergunta de quem não pode falar, ou não pode falar em público. O achado central é uma convergência. Três raízes empurram para a **proveniência do áudio**, isto é, a prova verificável de onde veio um som, como infraestrutura que ainda falta. Há também um bloqueio com dono: gravadoras e sociedades de gestão coletiva, com jardins murados e litígio sobre memorização. O cenário provável para 2046 é um áudio abundante e desconfiado, em que o humano verificado vale mais e a voz se separa da identidade.

## 2. O tema

**O que é.** Som e voz produzidos por modelo, e não captados. Entram aqui: fala compreendida e sintetizada em tempo real; diálogo fala-para-fala sem turnos; música gerada completa a partir de descrição, inclusive em fluxo contínuo; clonagem de voz; e voz reconstruída a partir de sinal neural ou muscular. A imagem em movimento fica com o tema 12. A IA local em geral fica com o tema 16 — aqui só entra a parte de áudio e voz.

**Onde encosta em mídia e interação.** Em dois pontos. Na **interação**, porque a voz conversacional muda a unidade de projeto: sai a tela e entra a coreografia de fala (turno, interrupção, silêncio, sussurro). Com isso, quem não pode falar em voz alta vira um problema de projeto de primeira linha. Na **mídia**, porque música e voz gravadas deixam de ser o registro de um acontecimento e passam a ser a saída de um sistema. Isso atinge autoria, remuneração, trilha de jogo e publicidade, e a própria voz como identidade.

**Por que um mapa de futuro, e não estado da arte.** As consequências relevantes não estão nos modelos. Estão no que deixa de valer: a voz como senha, a gravação como prova, o *stream* como unidade de pagamento, o *master* como original, a vocalização como condição da fala. Essas mudanças atravessam atores que não conversam entre si — bancos, gravadoras, ECAD, dubladores, reguladores de dispositivo médico, projetistas de interface — e só aparecem quando se segue a cadeia causal. Um horizonte de vinte anos também pede uma raiz que ainda é laboratório (D), com confiança baixa declarada.

**Premissas deste mapa (do briefing).** Modo MAPA, não interativo. Horizonte 2046. Público: quem projeta mídia e interação. Recorte global, com nota sobre o Brasil (seção 3.7). Descartado de início: o que já é comum em produto de massa. Nenhuma raiz suspeita foi dada. Viés neutro, com um cenário de cada lado. Ficam fora as ideias óbvias que servem para qualquer tema. Falseadores declarados: (a) evidência de que a adoção já passou da maioria inicial (Rogers); (b) evidência de que a tecnologia só melhora o que existe, sem romper nada. Profundidade: três ordens. A busca na web foi feita com WebSearch e WebFetch. Como o briefing é completo, as confianças **não** foram rebaixadas por falta de entrevista. O que ele não cobre está na seção 12.2.

## 3. Onde isso está hoje

*Âncora feita com acesso à web em 22/09/2026: 18 buscas, 34 fontes abertas e citadas e 5 aberturas que falharam (seção 12.3). Nota de independência: antes de rodar, li o mapa do mesmo tema com horizonte 2041 (rodada `giordano-h2041`). Todas as fontes citadas aqui foram reabertas nesta rodada; a contaminação de estrutura está declarada na seção 8.*

### 3.1 O que já existe e funciona — voz

- **Moshi** (Kyutai, arXiv 2410.00037, 2024). Diálogo fala-para-fala em dois fluxos paralelos, o do usuário e o do sistema. Por isso dispensa a segmentação de turnos e aceita sobreposição e interrupção. Latência de 160 ms teóricos e 200 ms na prática [10]. Código em MIT/Apache e pesos em CC-BY 4.0. Roda em Mac com MLX (int4/int8) e em GPU de 24 GB. Codec Mimi a 1,1 kbps e 80 ms. As vozes publicadas (Moshika e Moshiko) são em inglês [11].
- **Unmute + Kyutai TTS** (aberto em 03/07/2025). Transforma qualquer modelo de texto em agente de voz (reconhecimento, modelo, síntese), sob licença MIT. Exige GPU CUDA de 16 GB e Linux, e o Mac não é suportado [16]. Entre junho de 2025 e fevereiro de 2026, o projeto de doação de voz recebeu 374 vozes, das quais 228 passaram na verificação. As contagens vêm do resumo de busca; o README [16] confirma o projeto, mas não os números.
- **gpt-realtime / Realtime API** (OpenAI). Fala-para-fala em disponibilidade geral, conectável por WebRTC, **SIP** e canal lateral. Sessões de até 60 minutos, janela de 32.768 tokens e temperatura fixa [12]. Roda na nuvem.
- **Apple SpeechAnalyzer** (WWDC25, iOS 26). Transcrição inteiramente no aparelho, fora da memória do app, com modelos atualizados pelo sistema. Já move Notas, Gravador e Diário, e alimenta o resumo de chamadas [13].
- **Kokoro-82M / Kokoro.js** (janeiro de 2025). Síntese de 82 milhões de parâmetros no navegador, via WebAssembly; quantizada, cai de 326 MB para 86 MB [14].
- **ElevenLabs**. Receita recorrente anual de US$ 350 milhões no fim de 2025, passando de US$ 500 milhões nos quatro primeiros meses de 2026. A empresa atribui o crescimento a agentes de voz em atendimento, vendas, recrutamento e marketing [15]. O **Iconic Marketplace** (12/11/2025) abriu com 28 vozes licenciadas, de vivos (Michael Caine, Liza Minnelli) e de mortos recriados de arquivo (Judy Garland, John Wayne, Alan Turing), com consentimento do detentor de direitos [32].

### 3.2 O que já existe e funciona — música

- **Suno.** v3 (mar/2024) → v4 (nov/2024) → v4.5 (mai/2025) → v5 e Studio (set/2025) → v5.5 com clonagem de voz e treino de modelo próprio (26/03/2026) → Studio 2.0 com edição MIDI (13/08/2026) → **v6 (09/09/2026)**, que aposenta todos os modelos anteriores [4].
- **Advanced Split** (Suno, 11/06/2026). Em vez de separar a mistura por máscara, **regenera** o canal pedido (cerca de 100 instrumentos; o Auto Split entrega até 12 grupos). Não há artefato de separação, mas também não há reconstrução 1:1, e o MIDI capta o ritmo "só aproximadamente". Só existe no plano Premier [5]. **O sinal da disciplina mudou de estado:** a música gerada "não entregava os canais separados"; agora entrega, por regeneração.
- **Magenta RealTime 2** (Google, Apache-2.0). Modelo aberto de **música ao vivo**: gera um fluxo contínuo guiado por texto, e a versão de 230M roda em tempo real em qualquer Mac com Apple Silicon (a de 2,4B exige chip Pro/Max) [17]. É a música gerada deixando de ser arquivo e virando processo.
- **Artistas sintéticos em parada.** Xania Monet (letras de Telisha Jones, música no Suno) foi a primeira canção de IA numa parada de execução em rádio da Billboard (#30 Adult R&B Airplay; #20 Hot R&B Songs; #3 Hot Gospel), e o projeto foi contratado pela Hallwood Media por US$ 3 milhões (set/2025) [26]. Breaking Rust chegou a #1 em Country Digital Song Sales (nov/2025) com cerca de 3.000 vendas, numa parada criticada por ser manipulável [27].

### 3.3 O que existe e ainda não funciona

- **Canais que não são os originais.** A regeneração é aproximada, e a edição fiel continua fora de alcance [5].
- **Consumo do gerado.** Entregas diárias de faixas geradas no Deezer: 10 mil (jan/2025, 10%) → 50 mil (nov/2025, 34%) → 75 mil (abr/2026, 44%) → 90 mil (jun/2026, mais de 50%) [6][7]. Mas o gerado tem só 1–3% das escutas, e 85% delas foram detectadas como fraude e desmonetizadas [7]. Em nov/2025 eram 0,5% das escutas [34].
- **Voz local conversacional fora do inglês.** Moshi publica vozes em inglês [11], e o Unmute não documenta línguas [16]. *Não encontrei número nem evidência de fala-para-fala local de qualidade humana em português.* Da amostra da turma (material da disciplina, não aberto): o Whisper "confunde nome próprio e sigla".
- **Fala silenciosa.** O SilentWear (colar têxtil de EMG, 14 canais, 20,5 mW, mais de 27 horas de bateria) reconhece **oito comandos**, com 77,5% de acerto na fala silenciosa na mesma sessão e 59,3% entre sessões [31]. Funciona, mas é um vocabulário de brinquedo.
- **Neuroprótese de voz.** UC Davis / BrainGate2: 256 eletrodos implantados, voz sintetizada em cerca de 25 ms, entonação, perguntas e melodias simples. Ouvintes entenderam cerca de 60% das palavras, contra 4% sem o sistema. Foi **um** participante com ELA, e os autores dizem que a técnica está "em fase inicial" [30].
- **Proveniência de áudio.** O C2PA suporta áudio, e a ElevenLabs e a Suno integraram credenciais em 2026. Mas o iOS só **valida**, não gera; nenhuma câmera passou no programa de conformidade; e houve quebras (certificados revogados da Nikon, falha no Android em 2026) [29].

### 3.4 Quem constrói

| Ator | Onde entra |
|---|---|
| Suno | música gerada completa, Studio, regeneração de canais, acordo com a Warner [1][4][5] |
| Udio + Universal Music | plataforma licenciada em jardim murado, sem exportação [3] |
| Google (Magenta / DeepMind) | música ao vivo, aberta e local [17] |
| Kyutai (laboratório aberto, França) | Moshi, Mimi, Unmute, doação de voz [10][11][16] |
| OpenAI | fala-para-fala em nuvem, com SIP [12] |
| Apple | escuta local como serviço do sistema [13] |
| ElevenLabs | síntese, agentes de voz, mercado de vozes licenciadas, C2PA [15][29][32] |
| Comunidade aberta (Hugging Face / Xenova) | TTS no navegador [14] |
| Deezer e Spotify | detecção, etiqueta DDEX, filtro de spam, proibição de clone não autorizado [6][7][28] |
| GEMA, majors e sociedades de gestão coletiva | litígio e licença sobre treino [1][2][3][9] |
| BrainGate2 / UC Davis | voz a partir de sinal neural [30] |
| Pesquisa em fala silenciosa (ETH e parceiros, SilentWear) | voz a partir de sinal muscular [31] |

### 3.5 Números de adoção hoje

- Deezer: série de entregas acima; 1–3% das escutas; 85% dessas escutas fraudulentas [6][7].
- Deezer/Ipsos (out/2025): 9.000 pessoas em 8 países, **incluindo o Brasil** [8]. 97% não distinguiram o gerado do humano num teste às cegas; 80% querem etiqueta; 52% se sentiram desconfortáveis [8]; 70% veem ameaça à renda dos músicos [34].
- ElevenLabs: mais de US$ 500 milhões de receita recorrente anual em 2026 [15].
- CrowdStrike, citada pelo FBI na cobertura do alerta de maio/2025: uso de clonagem de voz subiu 442% entre o 1º e o 2º semestre de 2024 [18].
- Classe de referência para voz como interface: alto-falante inteligente nos EUA, lançado em 2014 (de memória; seção 8), chegou a **24% dos adultos em 2019** [33] e não virou caminho principal de nada.
- Usuários do Suno, voz conversacional local em uso de massa, fala silenciosa em produto: *sem número encontrado*.

### 3.6 Regulação e litígio

- **Warner × Suno** (25/11/2025). Encerra o processo; artistas controlam nome, imagem, semelhança, voz e composição; modelos licenciados em 2026, com os atuais aposentados; download só no plano pago, com cota; a Suno compra o Songkick [1]. Universal e Sony continuam como autoras [4].
- **Universal × Udio** (29/10/2025). Acordo e plataforma licenciada em 2026, com as criações "controladas dentro de um jardim murado" [3]. A Universal defende o muro e a Suno defende "estúdios abertos" (fev/2026) [2].
- **GEMA × Suno** (Tribunal Regional de Munique I, 31/07/2026, 42 O 763/25). Liminar sobre seis composições. As obras estão "codificadas nos parâmetros" do modelo, o que configura reprodução permanente; a responsabilidade é do provedor, não do usuário. Não é definitiva [9].
- **AI Act, art. 50.** Áudio sintético marcado de forma legível por máquina a partir de 02/08/2026; sistemas já no mercado têm até 02/12/2026; modelos abertos não estão isentos; o código de prática prevê aviso audível [20].
- **NO FAKES Act de 2026** (EUA). Cria um direito federal, de tipo propriedade intelectual, sobre voz e semelhança diante de réplica digital não autorizada, com mecanismos de retirada. Foi aprovado por unanimidade na Comissão de Justiça do Senado em 18/06/2026 e ainda não passou no plenário nem na Câmara [22].
- **Dinamarca.** Proposta que dá a qualquer pessoa direito sobre corpo, rosto e **voz**, com exceção para paródia e sátira [21].
- **Spotify.** Etiqueta de IA via DDEX nos créditos, filtro de spam, e clone de voz não autorizado removido [28].

### 3.7 Nota sobre o Brasil

- Dubladores pediram na Câmara proteção contra voz gerada (29/08/2024). Estão em pauta o PL 1376/22 (dublagem por profissionais no país) e o PL 2338/23 (remuneração por uso de obra em treino) [23].
- Fraude de identidade: 1,5 milhão de tentativas em cadastros no 1º trimestre de 2026 (Serasa). A Febraban alerta para voz clonada em WhatsApp e promove a Carteira de Identidade Nacional na identificação digital [24]. Uma reportagem regional atribui a "golpes por voz clonada" o número de uma fraude a cada 2,3 segundos. O número, porém, é de tentativas de fraude em geral (Serasa, 1º semestre de 2025), não de voz — ver seção 8 [25].
- O Brasil entrou na amostra do estudo Deezer/Ipsos [8].
- Sem número aberto sobre o uso de áudio no WhatsApp no Brasil; a centralidade do áudio aqui é percepção declarada, não dado.

### 3.8 Recusados como raiz (maduros, tratados como contexto)

- *Assistente de voz em nuvem, por turno*: maioria em celular e alto-falante há anos (em 2019, 54% da população dos EUA já tinha usado comando de voz [33]). Recusado.
- *TTS de leitura e acessibilidade*: comum em produto de massa. Recusado.
- *Separação de fontes por máscara*: ferramenta madura de estúdio. O novo é a **regeneração**.
- *Sampler, DAW, síntese procedural*: maduros.
- *Transcrição em nuvem (legenda automática)*: madura. O que entra, na raiz A, é a escuta local contínua.

## 4. As disrupções-raiz

### 4.1 Raiz A — Conversa falada de ponta a ponta, sem turnos, rodando no aparelho

1. **O que rompe.** A suposição de que a interação é mediada por tela e por turnos. Com dois fluxos paralelos e 200 ms [10], a máquina pode ser interrompida e ouvir enquanto fala. O projeto sai da composição de telas e vai para a coreografia de conversa. Não é um assistente melhor: é o fim do turno como unidade.
2. **Por que agora.** Modelos fala-para-fala que dispensam a cadeia STT → texto → TTS [10][12]; codecs de baixíssima taxa [11]; escuta e síntese locais como serviço do sistema e do navegador [13][14]; e pilhas abertas completas [16].
3. **Onde está na difusão.** Em nuvem, **produto de nicho → adoção precoce** no atendimento [12][15]. Local e conversacional, **demo pública** [11][16]. É emergente em nuvem e especulativo em local.
4. **O que falta.** Qualidade humana fora do inglês no aparelho; energia para uso contínuo em fone e celular; convenções de interrupção; um modo equivalente para quem não fala; e solução para ruído e para o espaço público (é aqui que a raiz D encosta).

**Quem bloqueia.** Donos de sistema operacional (Apple, Google), que capturam a escuta como serviço do sistema e controlam o microfone sempre aberto — e4.

### 4.2 Raiz B — Música gerada inteira, editável por regeneração e em fluxo contínuo

1. **O que rompe.** A gravação como unidade da música e a produção como gargalo do músico. Uma canção sai de uma descrição; cada canal pode ser regenerado [5]; a música pode ser um fluxo contínuo gerado no aparelho [17]. Deixam de valer: a trilha de biblioteca barata, o *master* como original único, o pro-rata por stream quando metade da oferta é gerada [6][7], e a trilha de jogo como gravação.
2. **Por que agora.** 97% não distinguem às cegas [8]; há ferramentas de estúdio em cima dos modelos [4][5]; modelos abertos rodam ao vivo em laptop [17]; e os primeiros acordos com majors (2025–2026) tiraram parte do setor do litígio puro [1][3].
3. **Onde está na difusão.** Na produção, **adoção precoce** (metade das entregas [6]). No consumo, **<10%** (1–3% das escutas [7]). Na edição profissional e na geração ao vivo, **produto de nicho** [5][17]. É emergente. *Falseador aplicado:* a oferta passou de 50%, mas oferta não é uso. Se a escuta do gerado passar de ~16% (maioria inicial de Rogers), esta raiz vira contexto.
4. **O que falta.** Edição fiel; um regime de licença estável (Universal e Sony litigam [4]; Munique não é definitiva [9]); uma audiência que escolha o gerado, e não só o tolere; e geração ao vivo em aparelho barato.

**Quem bloqueia.** Majors e sociedades de gestão coletiva (Universal, GEMA), com jardim murado e litígio sobre memorização — e9.

### 4.3 Raiz C — Voz clonável a partir de amostra curta: a voz deixa de provar quem fala

1. **O que rompe.** A suposição de que ouvir a voz de alguém é evidência de que é essa pessoa. É ela que sustenta a autenticação bancária por voz [19], a confiança na ligação e no áudio de WhatsApp [24], a gravação como prova e o valor comercial da voz de um dublador [23][32].
2. **Por que agora.** Clonagem com 15 segundos de áudio anunciada desde 2024 [19]; quebra de autenticação bancária em demonstração pública [19]; alta de 442% no uso em fraude [18]; e clonagem como função de produto de massa (Suno v5.5 [4]).
3. **Onde está na difusão.** Como ferramenta, **adoção precoce**, legítima e criminosa. Como comportamento defensivo, **produto de nicho**. É emergente.
4. **O que falta.** Proveniência de ponta a ponta (a marcação europeia cobre o gerador honesto, não o golpista [20]; a assinatura na captura ainda é rara [29]); direito sobre a própria voz em lei (NO FAKES ainda não aprovado [22]; Dinamarca em proposta [21]); e protocolos sociais de verificação.

**Quem bloqueia/captura.** Fornecedores comerciais de síntese, que transformam consentimento e marca d'água em padrão de fato — e14.

### 4.4 Raiz D — Voz sintetizada a partir de sinal do corpo: a fala se desacopla da vocalização

1. **O que rompe.** A suposição de que falar exige vocalizar em voz alta e de que quem perdeu a voz perdeu a fala. Uma voz com a entonação da pessoa sai de sinal neural em 25 ms [30] ou de sinal muscular sem som audível [31]. Muda quem pode falar com máquinas e com gente, e onde se pode falar — o que alimenta a raiz A.
2. **Por que agora.** Decodificação neural com a latência da própria fala (2025) [30]; sensores de EMG têxteis de baixo consumo com inferência no dispositivo (2026) [31]; e síntese de voz pessoal de alta qualidade a partir de gravações antigas, já comercial [32].
3. **Onde está na difusão.** **Laboratório** no caso implantado (um participante [30]) e **laboratório/demo** no não invasivo (oito comandos [31]). É especulativo: **toda a cadeia sai com `confianca: baixa`**, por regra do §2.
4. **O que falta.** Replicação em mais pessoas e causas (AVC); vocabulário aberto na fala silenciosa; aprovação regulatória de implante; um sensor de consumo que não perca a calibração ao ser recolocado (o acerto cai de 77,5% para 59,3% entre sessões [31]); e cobertura por sistema de saúde.

**Quem bloqueia.** Reguladores de dispositivo médico (FDA, Anvisa), cujo mandato de segurança e cujo custo de ensaio mantêm o implante restrito a poucos centros — e17.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: Conversa falada de ponta a ponta, sem turnos, rodando no aparelho
    efeitos:
      - id: e1
        ordem: 1
        efeito: Apps de serviço passam a ter a conversa falada como caminho principal e a tela como confirmação do que foi dito
        sinal: medio
        prazo: 2034
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Designers de interação passam a especificar interrupção, silêncio e sobreposição de fala como artefato de projeto, com ferramentas próprias de prototipagem de conversa
            sinal: fraco
            prazo: 2033
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Marcas passam a registrar ritmo, entonação e jeito de interromper do seu agente como identidade de marca, como hoje registram logotipo e paleta
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Quem não pode ou não quer falar em voz alta perde o caminho rápido, e produtos passam a aceitar sussurro e fala silenciosa como entrada
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: O W3C passa a exigir nas diretrizes de acessibilidade um caminho equivalente sem fala para toda ação oferecida por voz
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O atendimento telefônico de bancos, varejo e operadoras passa a ser operado por agentes de voz de ponta a ponta ligados direto à rede telefônica
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Consumidores passam a mandar o próprio agente de voz ligar para o agente da empresa, e a chamada vira conversa entre duas máquinas que imitam gente
            sinal: fraco
            prazo: 2035
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Operadoras criam um canal de dados dentro da chamada para agentes negociarem sem áudio, e a voz sintética volta a ser só para humanos
                sinal: fraco
                prazo: 2042
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Procon e FTC passam a exigir o direito de falar com um humano, e o atendente humano vira canal de exceção com fila própria
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Bancos e marcas de alto padrão passam a vender atendimento por voz humana verificada como diferencial de preço
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: Fones, óculos e pingentes sem tela passam a ser o aparelho principal de uma minoria de usuários, porque a conversa roda neles sem nuvem
        sinal: fraco
        prazo: 2040
        confianca: baixa
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Editores de notícia e de manual passam a produzir conteúdo para ser interrogado em voz, com respostas curtas por pergunta, e não para ser lido
            sinal: fraco
            prazo: 2042
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A métrica de audiência migra de página vista para pergunta respondida, e a busca vira disputa por ser a única resposta falada
                sinal: fraco
                prazo: 2046
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
            prazo: 2032
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A permissão de microfone contínuo vira objeto de disputa concorrencial sob o DMA europeu entre donos de sistema e donos de navegador
                sinal: fraco
                prazo: 2040
                confianca: baixa
  - disrupcao: Música gerada inteira, editável canal a canal por regeneração e em fluxo contínuo
    efeitos:
      - id: e5
        ordem: 1
        efeito: A trilha de biblioteca de baixo orçamento para vídeo, publicidade e jogo independente passa a ser gerada sob medida a partir do briefing, e compositores de biblioteca perdem essa faixa de mercado
        sinal: medio
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Bibliotecas e editoras passam a vender o direito de gerar no estilo do catálogo em vez de vender a faixa
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Compositores passam a ser pagos por influência medida por métodos de atribuição de treino, e esses métodos viram prova pericial disputada em tribunal
                sinal: fraco
                prazo: 2042
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: Estúdios de jogo e de experiência imersiva passam a gerar a trilha em tempo de execução, em fluxo contínuo que reage ao estado da cena, em vez de tocar faixas gravadas
        sinal: medio
        prazo: 2036
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O compositor de jogo passa a entregar um sistema de regras musicais e timbres-assinatura licenciados por título, e não horas de música gravada
            sinal: fraco
            prazo: 2040
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Preservar um jogo passa a exigir arquivar os pesos do modelo musical, e acervos como bibliotecas e museus de jogos passam a guardar modelos em vez de fonogramas
                sinal: fraco
                prazo: 2046
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: A música funcional de sono, foco e fundo sai do streaming e passa a ser gerada no próprio aparelho, sem repertório e sem royalties
            sinal: fraco
            prazo: 2038
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: O ECAD e as sociedades de gestão coletiva disputam a cobrança de execução pública sobre música gerada localmente em lojas, academias e hotéis, que deixam de tocar repertório protegido
                sinal: fraco
                prazo: 2044
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: Plataformas de streaming passam a triar música por proveniência, etiquetando o gerado e tirando-o das recomendações, e a enxurrada gerada fica num porão de catálogo com fração mínima das escutas
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O pagamento pro-rata por stream perde legitimidade e as plataformas adotam limiares mínimos e pesos por artista verificado, porque a oferta gerada dilui o bolo e alimenta fraude
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A Billboard e as paradas nacionais passam a publicar listas separadas para música gerada, e a parada deixa de ser medida única de sucesso
                sinal: fraco
                prazo: 2036
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: Feito por humano vira selo certificado por credencial de proveniência assinada na captura, no modelo do selo de orgânico
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: O show ao vivo e a gravação com captura assinada ganham prêmio de preço e voltam a ser a principal fonte de legitimidade do músico
                sinal: fraco
                prazo: 2042
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: Pessoas sem formação musical passam a publicar canções completas com voz e arranjo, e o gargalo da música passa de produzir para ser ouvido
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Gravadoras passam a contratar projetos de letrista com persona sintética em vez de intérpretes
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: A persona sintética vira ativo de catálogo que sobrevive ao criador e é vendida ou herdada, e a autoria entre criador da persona e dono do modelo vai a tribunal
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: A voz cantada de artistas vira licença de adesão por plataforma, e cantores passam a receber pelo uso da própria voz em canções feitas por fãs
            sinal: forte
            prazo: 2032
            confianca: alta
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: A canção deixa de ter versão canônica para o fã, que ouve e compartilha a própria versão com a voz licenciada do ídolo
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: Majors e sociedades de gestão coletiva usam litígio e licença para impor jardins murados em que a música gerada não sai da plataforma
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: O mercado de geração musical se divide entre modelos licenciados de catálogo fechado e modelos abertos rodando no aparelho, fora do alcance da licença
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: A música gerada que circula nas redes passa a vir majoritariamente de modelos abertos locais, esvaziando o poder de barganha dos acordos das majors
                sinal: fraco
                prazo: 2042
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: Produtores passam a usar a faixa gerada como rascunho editável canal a canal dentro da estação de áudio, e a música gerada vira ponto de partida em vez de produto final
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Engenheiros de mixagem passam a corrigir pedindo nova versão de um canal em vez de processar o sinal, e o ofício migra de tratar áudio para dirigir regeneração
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: O master como gravação original perde valor jurídico, e o direito conexo de fonograma passa a ser disputado sobre versões que não têm original
                sinal: fraco
                prazo: 2045
                confianca: baixa
  - disrupcao: Voz clonável a partir de amostra curta, que deixa de provar quem fala
    efeitos:
      - id: e11
        ordem: 1
        efeito: Bancos abandonam a impressão de voz como fator de autenticação e passam a exigir fator de aparelho ou documento digital em todo atendimento telefônico
        sinal: medio
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: Chamadas e arquivos de áudio passam a carregar assinatura criptográfica de origem, e o áudio sem credencial passa a ser tratado como não verificado
            sinal: medio
            prazo: 2036
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: A fala anônima de denunciantes e fontes jornalísticas perde credibilidade, porque áudio não assinado é descartado como provável falso
                sinal: fraco
                prazo: 2042
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: Famílias e empresas adotam palavra-senha e rechamada por outro canal como protocolo contra golpes de voz clonada
        sinal: medio
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: No Brasil, o áudio de WhatsApp perde força como prova informal de que é a pessoa falando, e pedido de dinheiro por áudio passa a exigir confirmação em outro canal
            sinal: medio
            prazo: 2031
            confianca: alta
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: Idosos que dependem do áudio para se comunicar passam a ter pagamentos e contatos intermediados por familiares, trocando autonomia por proteção
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e12.2
            ordem: 2
            efeito: Tribunais passam a exigir perícia de proveniência para aceitar gravação de áudio como prova, e a gravação clandestina perde peso probatório
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e12.2.1
                ordem: 3
                efeito: Réus passam a alegar que gravações verdadeiras são sintéticas, e a defesa do deepfake vira estratégia de rotina em processos com prova de áudio
                sinal: fraco
                prazo: 2040
                confianca: media
      - id: e13
        ordem: 1
        efeito: A voz vira objeto de direito próprio da pessoa, com licença, retirada por notificação e indenização, fora do direito autoral de obra
        sinal: forte
        prazo: 2032
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: Dubladores e locutores passam a vender licença de voz sintetizável por obra, com pagamento por uso, em vez de hora de estúdio
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: A redublagem de catálogos antigos passa a usar vozes licenciadas de dubladores aposentados ou mortos, e herdeiros viram parte dos contratos de dublagem
                sinal: medio
                prazo: 2038
                confianca: media
          - id: e13.2
            ordem: 2
            efeito: Pessoas comuns passam a restringir a publicação da própria voz em vídeos e mensagens por medo de clonagem
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e13.2.1
                ordem: 3
                efeito: Criadores de conteúdo passam a publicar com voz sintética de fachada para não expor a própria, e a voz pública de alguém deixa de ser a voz dele
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e14
        ordem: 1
        efeito: Fornecedores comerciais de síntese transformam verificação de consentimento e marca d'água em padrão de fato, e o requisito vira barreira contra modelos abertos
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: Como modelos abertos seguem clonando localmente sem marca, a detecção se desloca do gerador para o receptor, e o telefone passa a analisar a voz de quem liga
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: Fabricantes de celular passam a exibir em toda chamada um grau de probabilidade de voz humana, e a chamada sem esse selo deixa de ser atendida
                sinal: fraco
                prazo: 2042
                confianca: baixa
  - disrupcao: Voz sintetizada a partir de sinal do corpo, que desacopla a fala da vocalização
    efeitos:
      - id: e15
        ordem: 1
        efeito: Pessoas com ELA, AVC ou laringe removida passam a conversar com a própria voz reconstruída por neuroprótese ou sensor muscular, com latência de conversa
        sinal: medio
        prazo: 2040
        confianca: baixa
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: Planos de saúde e o SUS passam a disputar a cobertura da voz reconstruída como prótese, e o banco de voz gravado antes da doença entra no prontuário
            sinal: fraco
            prazo: 2044
            confianca: baixa
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: Gravar e guardar a própria voz enquanto saudável vira cuidado preventivo, e o banco de voz pessoal vira alvo de roubo para clonagem
                sinal: fraco
                prazo: 2046
                confianca: baixa
      - id: e16
        ordem: 1
        efeito: Fones e colares com sensores musculares passam a permitir falar com o agente sem som audível, em escritório e transporte
        sinal: medio
        prazo: 2042
        confianca: baixa
        efeitos:
          - id: e16.1
            ordem: 2
            efeito: A fala silenciosa remove o constrangimento de falar em público e reabre a conversa com máquinas para lugares onde a voz alta era proibitiva
            sinal: fraco
            prazo: 2045
            confianca: baixa
            efeitos:
              - id: e16.1.1
                ordem: 3
                efeito: O sinal subvocal passa a ser tratado pela ANPD e pelo GDPR como dado sensível de categoria própria, porque revela o que a pessoa ia dizer antes de decidir dizer
                sinal: fraco
                prazo: 2050
                confianca: baixa
      - id: e17
        ordem: 1
        efeito: FDA e Anvisa mantêm a neuroprótese de voz como implante de classe de risco máxima, e ela fica restrita a poucos centros de pesquisa por décadas
        sinal: fraco
        prazo: 2040
        confianca: baixa
        efeitos:
          - id: e17.1
            ordem: 2
            efeito: A via não invasiva de sussurro e sensor muscular captura o mercado de consumo, e a voz reconstruída de alta fidelidade vira privilégio de quem mora perto de um centro de pesquisa
            sinal: fraco
            prazo: 2044
            confianca: baixa
            efeitos:
              - id: e17.1.1
                ordem: 3
                efeito: Associações de pacientes com ELA passam a financiar e operar bancos de voz e ensaios próprios para furar a fila dos centros
                sinal: fraco
                prazo: 2046
                confianca: baixa
```

### 5.1 Os mecanismos, efeito a efeito

**Raiz A — conversa sem turnos no aparelho.**

- **e1** — porque a conversa sem turnos [10][12] responde no ritmo da fala, tarefas de serviço (marcar, pedir, reclamar) ficam mais rápidas faladas do que navegadas; a tela sobra para o que precisa ser conferido. *Sinal médio*: dois artefatos do efeito, e não só da infraestrutura: agentes de voz em produção corporativa [15] e fala-para-fala ligada a canal de atendimento [12]. *Classe de referência*: alto-falante inteligente — lançado em 2014 (de memória), chegou a 24% dos adultos dos EUA em 2019 [33] e nunca virou caminho principal. Por isso o prazo é 2034, e não 2030.
- **e1.1** — porque, sem turno, é o comportamento de interrupção e silêncio que decide se a conversa funciona; então ele precisa ser especificado como hoje se especifica a navegação. *Troca de ator*: do fornecedor do modelo para o designer.
- **e1.1.1** — porque, quando a voz é o caminho principal, a diferenciação visual some da maior parte do uso e passa para a prosódia; a marca precisa proteger "como o agente fala". *Teste da causa solta*: sem a raiz A, a voz de marca continua restrita a jingle e locutor. Fica.
- **e1.2** — porque a voz como caminho principal pressupõe poder falar alto, quem não pode (surdez, gagueira, mudez, escritório aberto) perde velocidade. É *quem perde* explícito. Liga-se à raiz D (e16).
- **e1.2.1** — porque as WCAG são o instrumento institucional que já exige alternativa para cada modalidade; o W3C é o ator nomeado.
- **e2** — porque o fala-para-fala se liga por SIP à rede telefônica [12], a pilha aberta existe [16] e empresas já implantam agentes em atendimento [15], o telefone é o primeiro lugar onde a conversa de máquina substitui a de gente. *Sinal forte*: três artefatos. *Classe de referência*: URA por tom, que levou cerca de uma década para dominar o atendimento. Aqui a curva é mais curta porque o usuário não precisa mudar nada. Prazo 2030.
- **e2.1** — porque o consumidor também passa a ter agente, ele terceiriza espera e negociação. *Troca de ator*: da empresa para o consumidor.
- **e2.1.1** — porque o áudio é um canal caro e lento entre duas máquinas, a pressão é por um canal de dados. *Retroação* sobre e2.
- **e2.2** — *retroação da raiz A*: porque a substituição total gera casos sem saída, órgãos de defesa do consumidor têm incentivo e instrumento para exigir o humano. Nenhum caso regulatório foi aberto nesta rodada, daí o *sinal fraco*.
- **e2.2.1** — porque o humano vira exceção cara, ele vira diferencial de preço. Troca de ator: o marketing de marca.
- **e3** — porque a conversa roda sem nuvem e sem tela, o aparelho sem tela deixa de depender do celular. *Sinal fraco*: nenhum caso aberto de produto sem tela bem-sucedido. *Classe de referência*: VR de consumo (mais de 10 anos e ainda não chegou), e não o smartphone. Prazo 2040.
- **e3.1 / e3.1.1** — porque o usuário do fone não lê, quem publica precisa ser interrogável; e porque a resposta falada é uma só, a disputa por atenção se concentra num único resultado.
- **e4** — *quem bloqueia a raiz A*: o SpeechAnalyzer roda fora da memória do app e é atualizado pelo sistema [13], e isso põe a escuta sob controle de quem é dono do sistema operacional.
- **e4.1** — porque o sistema fecha a escuta, o navegador vira a saída, e a síntese já roda ali [14]. *Sinal médio*: Kokoro.js [14]; piper-tts-web (material da turma, não aberto).
- **e4.1.1** — porque sistema e navegador disputam a mesma permissão, e o DMA é o instrumento europeu que já trata interoperabilidade entre plataformas.

**Raiz B — música gerada, editável e contínua.**

- **e5** — porque uma descrição gera uma trilha sob medida [4] e a regeneração de canal permite ajustá-la [5], o comprador de trilha barata deixa de licenciar faixa de biblioteca. *Sinal médio*: dois artefatos; não abri dado de receita das bibliotecas. *Classe de referência*: banco de imagens diante da imagem gerada (tema 12), qualitativa. Prazo 2030. Confiança alta porque o mecanismo é direto e o horizonte é longo.
- **e5.1** — porque a faixa perde valor e o treino licenciado ganha valor (Warner-Suno [1]; Universal-Udio [3]), o ativo da biblioteca passa a ser o direito de estilo. Muda o mecanismo: da venda para a licença de treino.
- **e5.1.1** — porque pagar por estilo exige medir quanto do catálogo entrou num resultado, a atribuição de treino vira instrumento econômico e, por isso, prova disputada. O critério de memorização de Munique [9] é o primeiro passo dessa perícia.
- **e6** — porque existe modelo aberto que gera música em fluxo contínuo, guiada por texto, em tempo real num laptop [17], a trilha pode reagir à cena em vez de tocar em laço. *Sinal médio*: um artefato aberto [17] e a variante comercial (Lyria RealTime), citada no mesmo repositório. *Classe de referência*: áudio adaptativo por camadas (middleware de jogo), que levou mais de uma década para virar prática comum. Prazo 2036, porque hoje o tempo real exige Apple Silicon e a versão maior exige chip de topo [17].
- **e6.1** — porque a trilha é gerada, o que o compositor entrega passa a ser o sistema e o timbre. *Troca de ator e mecanismo*: de horas gravadas para licença de sistema.
- **e6.1.1** — porque o tema musical de um jogo passa a existir como modelo, e não como fonograma, preservar exige guardar pesos. Troca de ator: arquivistas e acervos.
- **e6.2** — porque a música funcional não depende de artista identificável e o fluxo contínuo roda no aparelho [17], ela é a primeira categoria que pode sair do streaming sem perda percebida.
- **e6.2.1** — porque o ECAD cobra execução pública de estabelecimentos que tocam repertório, a música gerada local sem repertório tira a base dessa cobrança, e a sociedade tem incentivo para disputá-la. *Ator nomeado; mecanismo específico do Brasil.*
- **e7** — *retroação da raiz B*: porque a oferta gerada passou de metade das entregas e 85% das escutas dela são fraude [6][7], a plataforma tem incentivo para triar. *Sinal forte*: Deezer (detector, etiqueta, exclusão de recomendação) [6][7], Spotify (DDEX, filtro de spam) [28], AI Act [20].
- **e7.1** — porque o pro-rata divide o bolo pelo número de escutas, e a fraude e o ruído gerado entram no divisor. *Sinal médio*: desmonetização de escutas fraudulentas [7]; 70% veem ameaça à renda dos músicos [34].
- **e7.1.1** — porque 52% dos entrevistados rejeitam o gerado nas paradas principais [7] e as paradas de venda digital já foram furadas com poucas vendas [27], os editores das paradas têm incentivo para separar.
- **e7.2** — porque o ouvinte não distingue às cegas (97%) mas quer saber (80%) [8], a informação tem de vir de fora do som. O C2PA já cobre áudio [29].
- **e7.2.1** — porque o selo precisa de prova, a prova mais forte é a captura assinada e o acontecimento presencial. *Convergência* com e11.1.
- **e8** — porque a canção sai de uma descrição, quem escreve letra passa a publicar (Xania Monet [26]; Breaking Rust [27]; 90 mil faixas por dia [6]). Com oferta ilimitada, a atenção fica escassa (1–3% das escutas [7]). *Sinal forte*.
- **e8.1** — porque o projeto sintético custa pouco e já entrou em parada [26], a gravadora contrata o projeto, e não o intérprete. Um contrato aberto [26] → *sinal médio*.
- **e8.1.1** — porque a persona não envelhece, ela vira ativo transferível; e, como o som depende do modelo, a autoria fica partida.
- **e8.2** — porque o acordo Warner-Suno põe a voz sob controle do artista, com adesão [1], a Spotify remove clone não autorizado [28] e já existe um mercado de vozes licenciadas [32], a voz cantada vira item de licença. *Sinal forte*: três artefatos; confiança alta.
- **e8.2.1** — porque cada fã pode gerar a sua versão com voz licenciada, a gravação canônica perde centralidade no consumo de fã.
- **e9** — *quem bloqueia a raiz B*: porque o gerado compete com o catálogo, majors e GEMA usam jardim murado [2][3] e litígio [9]. *Sinal forte*: três artefatos.
- **e9.1** — porque o muro impede a exportação e Munique encarece o treino não licenciado [9], enquanto modelos abertos rodam em laptop [17], o mercado se divide em dois regimes.
- **e9.1.1** — porque o gerador aberto roda local e o licenciado não exporta, a circulação tende ao aberto. É uma retroalimentação que enfraquece o bloqueio (5.3).
- **e10** — porque a regeneração de canal [5] e a edição MIDI do Studio 2.0 [4] entregam material editável, o produtor usa o gerado como rascunho. É o sinal dos "canais separados" mudando de estado.
- **e10.1** — porque pedir outra versão de um canal é mais rápido que processá-lo, a correção vira direção.
- **e10.1.1** — porque não há original quando cada canal é regenerado, o direito conexo — que protege uma fixação específica — perde o objeto.

**Raiz C — a voz não prova mais.**

- **e11** — porque a clonagem quebra a autenticação por voz em demonstração [19] e a Febraban já desloca a identificação para vários sinais e para a Carteira de Identidade Nacional [24], os bancos trocam o fator. *Sinal médio*: dois artefatos. *Classe de referência*: SMS como segundo fator — anos entre o alerta e a troca. Prazo 2030.
- **e11.1** — porque a voz não prova mais, a prova tem que vir do canal: credencial assinada na captura [29]. *Sinal médio*: C2PA com áudio e integração da ElevenLabs e da Suno [29]; o iOS só valida [29]. Prazo 2036, porque a assinatura na captura ainda nem chegou aos celulares de topo.
- **e11.1.1** — porque o áudio sem assinatura vira suspeito, quem precisa falar sem se identificar perde credibilidade. É *quem perde*.
- **e12** — porque o golpe usa a voz de alguém próximo, e a orientação a bancos e usuários já é validar por outro canal e combinar palavras-código fora das redes [25], o protocolo se difunde. O FBI orienta não presumir autenticidade [18]. *Sinal médio*.
- **e12.1** — porque o áudio de WhatsApp é o vetor citado pela Febraban [24] e 63% dos consumidores não identificam golpe com IA (número de busca, não aberto; seção 8), a confirmação cruzada vira norma. Confiança alta: o mecanismo é direto e já há orientação institucional.
- **e12.1.1** — porque o protocolo de verificação exige competência digital, quem não a tem passa a depender de intermediário. É *quem perde*: a autonomia de idosos.
- **e12.2** — porque qualquer gravação pode ser sintética, o juiz precisa de perícia. **e12.2.1** — porque a dúvida existe, ela vira recurso de defesa (o "dividendo do mentiroso", conceito conhecido e não aberto). Confiança média na 3ª ordem porque o mecanismo não depende de adoção de tecnologia nova, só da existência de clonagem convincente, que já existe.
- **e13** — porque a voz é copiável, ela passa a precisar de proteção própria: NO FAKES aprovado em comissão [22], proposta dinamarquesa [21], pedido dos dubladores [23]. *Sinal forte* (três jurisdições); confiança média porque nenhuma virou lei.
- **e13.1** — porque há direito sobre a voz, ela pode ser licenciada; o mercado de vozes licenciadas já opera [32]. Muda o mecanismo: de hora para uso.
- **e13.1.1** — porque o mercado já licencia vozes de mortos recriadas de arquivo com os detentores de direito [32], estender isso a dubladores é questão de contrato. *Sinal médio*; confiança média.
- **e13.2** — *retroação da raiz C*: porque qualquer amostra pública alimenta clonagem, pessoas reduzem a voz pública. Confiança baixa: comportamento defensivo costuma ser fraco (ninguém parou de postar foto por medo de reconhecimento facial).
- **e13.2.1** — porque expor a voz passa a custar, a voz de fachada vira saída.
- **e14** — *quem captura a raiz C*: porque o AI Act exige marca e não isenta modelos abertos [20], e os grandes fornecedores já têm consentimento e credencial [29][32], a conformidade pesa mais sobre o modelo aberto.
- **e14.1** — porque a marca só existe no gerador honesto, a defesa eficaz fica no receptor.
- **e14.1.1** — porque o receptor que detecta pode exibir e filtrar, a chamada ganha um "grau de humanidade".

**Raiz D — voz a partir do corpo. Toda a cadeia com confiança baixa (§2).**

- **e15** — porque a decodificação neural chegou a 25 ms, com entonação [30], e o sensor muscular já roda com inferência local [31], a voz reconstruída pode ter o tempo de conversa. *Sinal médio*: dois artefatos. *Classe de referência*: implante coclear, de décadas entre a primeira aprovação e a oferta ampla (de memória; seção 8). Prazo 2040.
- **e15.1** — porque a voz vira prótese, quem paga prótese (planos, SUS) entra em disputa de cobertura; e porque a reconstrução usa a voz de antes da doença [30], a gravação prévia vira dado clínico.
- **e15.1.1** — porque a voz gravada é, ao mesmo tempo, material de prótese e material de clonagem, guardá-la vira cuidado e risco. *Convergência* com a raiz C.
- **e16** — porque o EMG têxtil funciona com baixo consumo por mais de 27 horas [31], um fone ou um colar pode captar fala não vocalizada. *Sinal médio*: SilentWear [31]; a versão em fone apareceu só em resultado de busca (seção 12). Prazo 2042, porque hoje são oito comandos.
- **e16.1** — porque a fala silenciosa não expõe o conteúdo, ela remove o obstáculo que o pré-mortem aponta para a raiz A (5.3).
- **e16.1.1** — porque o sinal subvocal é captado antes da vocalização, ele revela intenção. As autoridades de dados (ANPD, GDPR) são os atores com o instrumento. **Prazo 2050: fora da janela do mapa**, mantido como horizonte de regulação.
- **e17** — *quem bloqueia a raiz D*: a neuroprótese é implante cerebral; o regulador tem o mandato e o custo de ensaio para manter a oferta restrita. O resultado vem de um participante [30].
- **e17.1** — porque o implante fica restrito e o não invasivo é mais barato, a via de consumo vence e a alta fidelidade vira desigualdade geográfica.
- **e17.1.1** — porque a fila é longa, as associações de pacientes têm incentivo para operar bancos de voz próprios. O projeto aberto de doação de voz [16] mostra que a coleta comunitária é viável (374 vozes, 228 aprovadas). *Troca de ator.*

**Regra de parada.** Parei na 3ª ordem em todos os ramos, que é o limite do formato. Três ramos já estavam no limite da troca de ator: e3.1.1 (troca o mecanismo de leitura para resposta única), e8.2.1 e e13.2.1 (ambos com confiança baixa por isso).

**Cobertura STEEP e quem perde (1ª ordem).** Social: e1, e3, e8, e12, e13, e15, e16. Tecnológico: e1, e4, e6, e10, e14, e16. Econômico: e2, e5, e7, e8, e9. **Ecológico: quase vazio.** O único ponto específico está em e6.2 (música de fundo gerada no aparelho substitui streaming contínuo), e o saldo energético não foi medido. O consumo de inferência contínua em geral é genérico de IA (seção 12). Político: e4, e9, e13, e14, e17. **Quem perde**: atendentes de central telefônica (e2), compositores de biblioteca (e5), artistas no pro-rata (e7.1), quem não pode falar alto (e1.2), idosos (e12.1.1), fontes anônimas (e11.1.1), modelos abertos (e14), intérpretes contratáveis (e8.1), o ECAD (e6.2.1) e pacientes longe de centros de pesquisa (e17.1).

### 5.2 Convergência

- **Proveniência do áudio.** Três raízes chegam ao mesmo efeito de 2ª ordem por caminhos independentes: e7.2 (selo de feito por humano, raiz B), e11.1 (assinatura de chamada e arquivo, raiz C) e e14.1 (detecção no receptor, raiz C). A raiz D se junta pela porta dos fundos, em e15.1.1 (o banco de voz clínico também precisa de cadeia de custódia). Com e12.2 (perícia em tribunal), são cinco ramos pedindo **uma cadeia verificável da captura até a escuta**. É o achado principal e é onde quem projeta mídia e interação tem trabalho concreto: como se mostra, na interface, que um som é humano, sintético ou não verificado. O C2PA existe, mas hoje o iOS só valida [29]. É o objeto do experimento (seção 10).
- **Humano verificado como bem de luxo.** e2.2.1 (atendente humano), e7.2.1 (show e captura assinada) e e13.1 (voz licenciada) convergem: a abundância do sintético transforma o humano comprovado em mercadoria premium.
- **A fala sem voz alta.** e1.2 (raiz A: quem não pode falar alto perde) e e16 (raiz D: fala silenciosa) chegam ao mesmo lugar. A acessibilidade e o espaço público são o mesmo problema de projeto.

### 5.3 Retroalimentação

- **Jardim murado → modelos abertos locais → esvaziamento do muro** (e9 → e9.1 → e9.1.1). Quanto mais o licenciado fecha, mais o aberto ocupa a circulação.
- **Conversa de máquina → desconfiança da voz → humano premium** (e2 → e11/e12 → e2.2.1). A difusão de agentes normaliza a voz sintética e alimenta a raiz C, que freia a raiz A nos serviços de alto valor.
- **Enxurrada → triagem → porão** (e8 → e7). A oferta ilimitada provoca a triagem que a torna invisível.
- **Fala silenciosa → reforço da raiz A** (e16 → e16.1 → e1). O maior freio da voz como interface (falar em público) é removido pela raiz D, se ela se concretizar. É o único laço em que uma raiz especulativa acelera uma emergente.

### 5.4 Contradições (registradas, não resolvidas)

- **e1 × e13.2.** e1 supõe que as pessoas falam mais com máquinas; e13.2, que expõem menos a própria voz. O que decide: se a fala com o agente fica no aparelho sem ser exportada, as duas coexistem; se exige nuvem, e13.2 freia e1.
- **e7.2 × e9.1.1.** O selo de humano supõe uma audiência que se importa com proveniência; a circulação dominada por modelos abertos supõe uma audiência que não se importa. O que decide: a distância entre os 80% que dizem querer etiqueta [8] e a escuta medida.
- **e15.1.1 × e13.2.** Guardar a própria voz como cuidado (D) e esconder a própria voz como defesa (C) puxam em sentidos opostos. O que decide: se o banco de voz clínico ganha a proteção de dado de saúde.

## 6. Sinais fracos e wildcards

### 6.1 Sinais fracos

1. **Regeneração em vez de separação** (Advanced Split, 11/06/2026 [5]). Os canais vêm, mas não são os originais. *O que mudaria*: se a regeneração ficar indistinguível do original, o *master* (e10.1.1) cai antes. *Sinal observável*: o recurso sair do plano mais caro [5]; um lançamento comercial declarando canal regenerado.
2. **Memorização como critério jurídico** (Munique, 31/07/2026 [9]). *O que mudaria*: se pegar fora da Alemanha, a quantidade memorizada vira métrica legal e surgem modelos "antimemorização" como produto. *Sinal observável*: decisão de 2ª instância; citação do critério em outro país.
3. **Música como processo, não arquivo** (Magenta RealTime 2 [17]). *O que mudaria*: se a geração ao vivo chegar ao celular barato, e6 e e6.2 antecipam em cinco a dez anos, e a música funcional sai do streaming antes de 2035. *Sinal observável*: modelo de música ao vivo embutido num sistema operacional ou motor de jogo.
4. **Voz de conversa a partir do cérebro, em 25 ms** [30]. *O que mudaria*: com replicação em dezenas de pessoas, a raiz D sai do especulativo e e15 vira de confiança média. *Sinal observável*: estudo com mais de dez participantes; aprovação de dispositivo pela FDA.
5. **Doação de voz como bem comum** (374 vozes, 228 aprovadas [16]). *O que mudaria*: um banco aberto de vozes consentidas é a alternativa ao mercado de vozes licenciadas [32], e muda quem controla a matéria-prima. *Sinal observável*: projetos de doação em outras línguas, incluindo o português.
6. **Oferta × escuta** (0,5% das escutas em nov/2025 [34] para 1–3% em 2026 [7], com a oferta de 34% para mais de 50%). *Sinal observável*: escuta do gerado acima de 10%. Seria o falseador do briefing disparando.

### 6.2 Wildcards

- **W1 — Um artista sintético chega ao topo da Hot 100.** *Mecanismo*: persona sintética com marketing de major, somando escuta real (Breaking Rust já passou de 3 milhões de reproduções numa faixa [27]). *Por que improvável*: plataformas tiram o gerado da recomendação [7], e 52% rejeitam o gerado nas paradas principais [7]. *O que faria*: invalida e7 como freio e acelera e8.1. *Sinal precoce*: uma persona sintética no top 40 geral.
- **W2 — Golpe de voz clonada em massa numa eleição.** *Mecanismo*: SIP + fala-para-fala + clonagem [12][18]. *Por que improvável em escala*: operadoras detectam o volume. *O que faria*: antecipa e11.1 e e14.1.1 em uma década e freia e2 por desconfiança. *Sinal precoce*: alerta de autoridade eleitoral sobre ligação sintética em massa — no Brasil, o TSE.
- **W3 — Pesos de modelo de áudio viram responsabilidade de quem distribui**, estendendo a memorização [9] ao arquivo de pesos. *O que faria*: e9.1, e9.1.1 e e14.1 perdem o motor, e os jardins murados vencem. *Sinal precoce*: ordem judicial de remoção de repositório de pesos de áudio.
- **W4 — Fala silenciosa de vocabulário aberto num fone de consumo antes de 2035.** *Mecanismo*: o sensor muscular do SilentWear [31] com um modelo de linguagem que completa o que o sinal não resolve. *Por que improvável*: de oito comandos para vocabulário aberto é um salto de ordens de grandeza, e o acerto cai com a recolocação do sensor [31]. *O que faria*: tira a raiz D do laboratório e remove o maior freio da raiz A; a voz como interface chega ao espaço público dez anos antes. *Sinal precoce*: um fabricante de fone anunciando entrada por fala silenciosa.

## 7. Contra o próprio mapa

### 7.1 Pré-mortem — "é 2046 e este mapa estava errado. Por quê?"

1. **A voz não virou caminho principal.** Falar com máquina continuou constrangedor e lento de conferir, e a tela ganhou, como aconteceu com os alto-falantes inteligentes [33]. → Aponta para **e1** e **e3**. *Ação*: e1 com prazo 2031 → 2034; e3 com prazo 2034 → 2040 e confiança média → baixa.
2. **A música gerada ficou no porão.** A triagem funcionou e a audiência nunca preferiu o gerado; o efeito real ficou restrito à trilha barata. → Aponta para **e8.1** e **e6**. *Ação*: e8.1 alta → média (um contrato, e o caso Breaking Rust é de parada manipulável [27]); e6 com prazo 2032 → 2036.
3. **A raiz D ficou no laboratório.** Vinte anos não bastaram para passar de um participante a uma oferta; o implante coclear sugere décadas. → Aponta para **e15** e **e16**. *Ação*: e15 com prazo 2036 → 2040; e16 com prazo 2038 → 2042; toda a raiz com confiança baixa.

### 7.2 Extrapolação linear

- **e8** ("mais gente publica") é mais do mesmo em relação ao presente [6]. A não linearidade está na segunda metade da frase: o gargalo muda de lugar. Sem ela, seria contexto. Mantido.
- **e2** é extrapolação do crescimento de agentes [15]. A não linearidade está em e2.1 (máquina liga para máquina). Mantido.
- **e1.3** ("o teclado físico desaparece dos laptops") era a raiz A "mais adiante", sem troca de ator. **Removido** (seção 12).
- **e16.2** ("o teclado do celular é substituído pela fala silenciosa") repetia e16, maior. **Removido**.

### 7.3 Velocidade de adoção

- **e3**: a referência honesta é VR (mais de 10 anos e ainda não), e não o smartphone. Prazo +6 anos.
- **e5**: sem dado de receita aberto, de 2028 para 2030.
- **e11**: a referência SMS → app mostra anos entre alerta e troca; de 2028 para 2030, e o sinal de forte para médio (não abri caso de banco que tenha abandonado a impressão de voz).
- **e15**: a referência do implante coclear (décadas, de memória) exigiria um prazo além de 2046. Mantido em 2040 com confiança baixa, e com a observação de que o prazo supõe velocidade maior que a da referência — é a hipótese mais frágil do mapa.
- **e10.1.1**: mudança de direito conexo é lenta; de 2040 para 2045.

### 7.4 A raiz que não acontece

- **Sem A**: sobram B, C e D. e2 continua (é nuvem); caem e1, e3 e e4; D perde o reforço de e16.1, mas e15 continua como prótese. O mapa perde a interface, mas não colapsa.
- **Sem B**: sobram A, C e D. A convergência de proveniência perde e7.2, mas mantém e11.1, e12.2 e e14.1.
- **Sem C**: B sustenta sozinha o humano premium (e7.2.1). A convergência enfraquece, mas sobrevive.
- **Sem D**: o mapa até 2046 fica praticamente igual — é a raiz de menor peso, e isso é uma escolha consciente: entra para cobrir a pergunta de 2ª ordem da disciplina sobre quem não pode falar. As quatro raízes são distintas. A dependência técnica comum (áudio neural de alta qualidade) é a suposição S1.

### 7.5 Suposições escondidas

- **S1** — Modelos de áudio seguem melhorando e barateando. Se quebrar, o mapa inteiro atrasa.
- **S2** — Modelos abertos continuam distribuíveis. Se quebrar → **W3**.
- **S3** — Plataformas continuam dispostas a triar (Deezer e Spotify fazem [7][28]; outras, não abertas). Se quebrar, e7 enfraquece e W1 fica provável.
- **S4** — Há energia no aparelho para inferência contínua de voz e música. Se quebrar, A e o fluxo contínuo de B viram nuvem, e o bloqueio de e4 passa das lojas para os provedores de nuvem.
- **S5** — As regras de marcação (AI Act [20]) são cumpridas pelos grandes. Se quebrar, e14 perde o mecanismo.
- **S6** — A proveniência criptográfica não é quebrada de forma sistemática. Já houve quebras [29]; se quebrar, a convergência de 5.2 vira ilusão de segurança, e cai e11.1 → rebaixado de alta para média (registro abaixo).

### 7.6 Viés do autor

O autor tem trajetória em computação musical (o acervo inclui a skill `harmin`, de transição harmônica). Por isso a raiz B tem seis efeitos contra quatro de A e C. **e6** (trilha gerada em execução), **e6.1.1** (arquivar pesos) e **e10.1** (engenheiro de mixagem como diretor de regeneração) estão aqui mais por interesse do que por evidência. Há também um viés de quem projeta interface em e1.1 e e1.1.1: supor que a conversa vira objeto de projeto como a tela foi. E há um viés de horizonte longo na raiz D: incluí-la dá ao mapa um ar de visão, mas o sinal é de um participante.

### 7.7 Calibração

Depois da bateria: 1ª ordem — alta 7, média 6, baixa 4; 2ª ordem — alta 2, média 14, baixa 8; 3ª ordem — alta 0, média 2, baixa 22. A confiança cai com a ordem. As duas médias na 3ª ordem (e12.2.1 e e13.1.1) estão justificadas por mecanismo que não depende de adoção nova. A 2ª ordem ainda concentra "média" (14 de 24), e esse é o ponto fraco da discriminação. Os números exatos estão na saída do verificador (seção 12).

### 7.8 Registro de alterações

| id | antes | depois | por quê |
|---|---|---|---|
| e1 | prazo 2031 | prazo 2034 | pré-mortem 1; referência do alto-falante inteligente [33] |
| e3 | prazo 2034, confianca media | prazo 2040, confianca baixa | referência VR |
| e3.1 | prazo 2038 | prazo 2042 | acompanha e3 |
| e1.3 | "o teclado físico desaparece dos laptops" | **removido** (seção 12) | extrapolação linear, sem troca de ator |
| e2.1 | confianca alta | confianca media | nenhum caso aberto de agente do consumidor ligando |
| e5 | prazo 2028 | prazo 2030 | sem dado de receita aberto |
| e6 | prazo 2032 | prazo 2036 | tempo real hoje só em Apple Silicon [17] |
| e8.1 | confianca alta | confianca media | um contrato só [26]; Breaking Rust em parada manipulável [27] |
| e10.1 | confianca media | confianca baixa | viés do autor (7.6) |
| e10.1.1 | prazo 2040 | prazo 2045 | ritmo de mudança em direito conexo |
| e7.3 | "plataformas criam o gênero 'música de IA'" | **removido** (seção 12) | falhou no teste de especificidade: é etiqueta (e7), não efeito novo |
| e11 | sinal forte, prazo 2028 | sinal medio, prazo 2030 | abandono de voiceprint não confirmado em fonte aberta; referência SMS |
| e11.1 | confianca alta | confianca media | S6: quebras de C2PA já registradas [29] |
| e13 | confianca alta | confianca media | NO FAKES ainda não é lei [22]; Dinamarca em proposta [21] |
| e14.1.1 | confianca media | confianca baixa | detecção no receptor sem artefato aberto |
| e13.3 | "seguradoras criam apólice contra clonagem de voz" | **removido** (seção 12) | teste da causa solta: seguro cibernético genérico já cobriria |
| e15 | prazo 2036 | prazo 2040 | pré-mortem 3; um participante [30] |
| e16 | prazo 2038 | prazo 2042 | oito comandos e queda entre sessões [31] |
| e16.2 | "o teclado do celular é substituído pela fala silenciosa" | **removido** (seção 12) | extrapolação de e16 |

Cota por raiz cumprida: A (e1, e3, e1.3 removido, e2.1), B (e8.1, e10.1, e7.3 removido), C (e11, e11.1, e13, e13.3 removido), D (e15, e16, e16.2 removido).

## 8. O que a máquina errou

1. **Número atribuído ao objeto errado.** A reportagem da Tribuna do Sertão [25] tem como título "Golpes por voz clonada… uma fraude a cada 2,3 segundos". Aberta, a fonte mostra que o número é de **tentativas de fraude em geral** (Serasa, 1º semestre de 2025). Quase entrou na seção 3 como número de golpe de voz. Ficou com a ressalva explícita em 3.7.
2. **Fonte herdada que não sustentava o que dizia.** O mapa de 2041 atribuía o "Brasil incluído" na pesquisa Deezer/Ipsos à matéria da Music Business Worldwide. Reaberta nesta rodada, a matéria **não cita o Brasil**. O dado está no comunicado da Deezer (aberto, mas bloqueia checagem automática; seção 12.3) e na DJ Mag [8], que é a citada aqui.
3. **Resumo do leitor automático com número suspeito.** Ao abrir a matéria do TechCrunch de julho/2026 [6], o resumo trouxe "a IA já representa mais de 50% dos downloads". A série da própria matéria é de **entregas**, não de downloads nem de escutas. Usei só a série de entregas. Todos os números deste documento passaram por um modelo pequeno que resume a página; erros desse tipo são possíveis em qualquer linha.
4. **Fonte primária não aberta.** O artigo da Nature sobre a neuroprótese [30] redirecionou para login, e o PubMed pediu cookie. Os números (25 ms, 60% × 4%) vêm do comunicado da UC Davis no ScienceDaily. Não é o artigo.
5. **Classes de referência de memória.** O lançamento do alto-falante inteligente em 2014, a URA "cerca de uma década", o implante coclear "décadas" e o middleware de áudio adaptativo são de memória, sem fonte aberta. Os prazos que dependem delas (e1, e2, e6, e15) herdam essa fragilidade.
6. **Número de busca não aberto.** "63% dos consumidores brasileiros não conseguem identificar golpes feitos com IA" apareceu só no resumo da busca, não em página aberta. Está em e12.1 como indício, sem número na seção 3.
7. **Afirmação sobre C2PA vinda da Wikipedia.** Que ElevenLabs e Suno integraram C2PA em meados de 2026 vem da Wikipedia [29], não dos anúncios das empresas. É uma afirmação de terceiro.
8. **Contaminação de estrutura.** Li o mapa de 2041 do mesmo tema antes de rodar. As raízes A, B e C e boa parte dos efeitos repetem aquele mapa. A independência é parcial: a convergência "proveniência" não é uma descoberta nova desta rodada, e sim uma reconfirmação com fontes reabertas. O que é novo aqui: a raiz D, o fluxo contínuo em B (e6, e6.1.1, e6.2.1), e7.1.1, e1.1.1, e13.1.1 com evidência do mercado de vozes, e as correções dos itens 1 e 2.
9. **Mecanismo plausível e fraco.** e6.1.1 (arquivar pesos para preservar jogos) e e1.1.1 (prosódia como marca) soam bem, mas não têm nenhum artefato hoje. Estão lá porque passam no teste da troca de ator, não porque haja sinal.

## 9. Três cenários para 2046

**Provável.** É 2046 e o áudio é abundante e desconfiado. O atendimento telefônico é feito por máquinas desde o começo da década de 2030; falar com um humano custa espera ou dinheiro. A voz é o caminho principal em serviços simples, mas a tela continua onde é preciso conferir. Aparelhos sem tela são nicho. Música gerada é a maior parte do que se publica e uma fração pequena do que se escuta. Trilha de biblioteca, música de fundo e trilha de jogo independente são geradas, e o ECAD disputa a cobrança da música gerada no próprio estabelecimento. Bancos não usam a voz como prova há quinze anos. Famílias têm palavra-senha. Chamadas e áudios de celulares novos carregam credencial de origem, mas metade do tráfego não carrega, e "não verificado" é o estado padrão. A neuroprótese de voz existe em poucos centros; fones com fala silenciosa reconhecem comandos, não conversa. *Sinal precoce*: a escuta de música gerada estabilizando abaixo de 5% enquanto a oferta passa de 70%.

**Desejável.** A proveniência chegou à interface de um jeito que as pessoas entendem: todo som mostra, sem esforço, se é captura assinada, síntese declarada ou não verificado, e a voz de cada pessoa é direito dela, com licença e remoção (o NO FAKES e a lei dinamarquesa viraram modelo, e o Brasil aprovou regra própria com participação dos dubladores). Bancos abertos de vozes doadas, inclusive em português, fazem a síntese de qualidade não depender de um mercado de licenças. Quem perdeu a voz fala com a própria voz reconstruída, pelo SUS. A música gerada virou instrumento, e o músico cobra pela direção, pelo timbre e pelo show. *O que teria de ser feito*: assinatura na captura como padrão de sistema operacional antes de 2035; a voz tratada como dado pessoal com proteção própria; financiamento público de ensaios de neuroprótese. *Sinal precoce*: um grande fabricante de celular gerando credencial de áudio por padrão, e não só validando [29].

**Indesejável.** A proveniência falhou: credenciais foram quebradas repetidas vezes [29], a detecção no receptor errou demais e foi desligada, e a desconfiança virou regra, com a gravação verdadeira descartada tão facilmente quanto a falsa. Os jardins murados das majors perderam para modelos abertos locais sem regra, e o músico de nível médio desapareceu entre a enxurrada e as poucas estrelas licenciadas. Idosos perderam autonomia no telefone. A voz reconstruída de alta fidelidade é privilégio de quem mora perto de um centro de pesquisa, e o sinal subvocal de fones de consumo é coletado sem proteção. *Sinal precoce*: uma eleição com ligação sintética em massa (W2) sem que as operadoras consigam atestar a origem.

## 10. O experimento

**O que é.** *Selo de voz.* A turma grava mensagens curtas de voz no estilo de áudio de WhatsApp (pedido, aviso, convite), com consentimento escrito e só entre os presentes. Parte das mensagens é clonada **localmente**, num computador da sala, com modelo aberto de clonagem (a escolher na montagem; nenhum foi avaliado nesta rodada). Nada vai para serviço de terceiro. Outra parte é gravada num aplicativo de navegador que **assina a captura** no momento da gravação (chave gerada pelo navegador, com credencial no espírito do C2PA [29]). Os ouvintes recebem os áudios numa interface de mensagens em três condições: sem selo; com selo visível ("gravado neste aparelho, assinado" / "sem credencial"); e com selo mas sem explicação. Para cada áudio, dizem se confiariam num pedido de dinheiro.

**Que pergunta responde.** A convergência central do mapa (5.2) aposta que a confiança no áudio vai migrar do ouvido para a credencial. O experimento pergunta se um selo na interface muda a decisão de confiar mais do que o ouvido e o conteúdo mudam. Testa e7.2, e11.1, e12.1 e e14.1.

**Que tecnologia emergente usa, e por que não dá com a madura.** A clonagem local de qualidade a partir de amostra curta (raiz C) e a assinatura de áudio na captura. Os celulares de massa não geram credencial de áudio: o iOS só valida [29], e o áudio de WhatsApp não carrega credencial nenhuma. Com a tecnologia madura, não há o que comparar.

**O que a turma faz ao testar em sala.** Metade grava e clona; a outra metade ouve e decide, sem saber qual é qual; depois trocam. Em seguida, a mesma rodada em pares de pessoas que se conhecem, para medir se conhecer a voz ajuda ou atrapalha. Ao fim, a turma projeta a própria versão do selo (ícone, frase, som), porque a forma de mostrar a proveniência é o problema de projeto que o mapa aponta.

**O resultado que faria o autor mudar de ideia.** Se o selo visível **não** mudar a decisão — se os ouvintes confiarem ou desconfiarem igual, com ou sem selo, guiados pelo conteúdo e pela voz conhecida —, a convergência de proveniência vale como infraestrutura, mas não como solução de interface. Nesse caso, e7.2, e11.1 e e14.1.1 perdem uma ordem de confiança, e o mapa passa a apostar nos protocolos sociais (e12: palavra-senha, rechamada) como a resposta dominante até 2046.

## 11. Fontes

1. Music Business Worldwide — "Warner Music Group strikes 'landmark' deal with Suno" (25/11/2025). `https://www.musicbusinessworldwide.com/warner-music-group-settles-with-suno-strikes-first-of-its-kind-deal-with-ai-song-generator/` — Sustenta: termos do acordo, controle de voz e semelhança, modelos licenciados, limites de download, Songkick (e5.1, e8.2, e9). Confiabilidade: imprensa especializada, boa para os termos anunciados.
2. Music Business Worldwide — "Universal and Suno are in a PR battle over 'walled gardens' in AI music" (03/02/2026). `https://www.musicbusinessworldwide.com/universal-and-suno-are-in-a-pr-battle-over-walled-gardens-in-ai-music/` — Sustenta: posições de Universal e Suno (e9, e9.1). Confiabilidade: alta para as declarações citadas.
3. Music Business Worldwide — "Universal Music settles Udio lawsuit, strikes deal for licensed AI music platform" (29/10/2025). `https://www.musicbusinessworldwide.com/universal-music-settles-udio-lawsuit-strikes-deal-for-licensed-ai-music-platform/` — Sustenta: acordo Universal-Udio, jardim murado, plataforma em 2026 (e5.1, e9). Confiabilidade: alta como relato; valores não divulgados.
4. Wikipedia — "Suno (platform)". `https://en.wikipedia.org/wiki/Suno_%28platform%29` — Sustenta: cronologia até a v6, Studio 2.0, clonagem na v5.5, litígios em curso (3.2, e8, e10). Confiabilidade: média; usada para cronologia.
5. Peak-Studios — "Suno Advanced Split". `https://www.peak-studios.de/en/suno-advanced-split/` — Sustenta: regeneração em vez de separação, 12 grupos, ~100 instrumentos, limites, plano Premier (e10, sinal fraco 1). Confiabilidade: média; estúdio que testou, não documentação oficial.
6. TechCrunch — "Music streamer Deezer says more than 50% of daily uploads are AI-generated" (21/07/2026). `https://techcrunch.com/2026/07/21/music-streamer-deezer-says-more-than-50-of-daily-uploads-are-ai-generated/` — Sustenta: série de entregas diárias de jan/2025 a jun/2026 (e7, e8). Confiabilidade: alta como relato; números da empresa.
7. TechCrunch — "Deezer says 44% of songs uploaded to its platform daily are AI-generated" (20/04/2026). `https://techcrunch.com/2026/04/20/deezer-says-44-of-songs-uploaded-to-its-platform-daily-are-ai-generated/` — Sustenta: 1–3% das escutas, 85% de fraude, exclusão da recomendação, 52% contra o gerado nas paradas (e7, e7.1, e7.1.1, W1). Confiabilidade: alta como relato; números da empresa.
8. DJ Mag — "97% of people can't differentiate between AI-generated and human music, study reveals" (13/11/2025). `https://djmag.com/news/97-of-people-cant-differentiate-between-ai-generated-and-human-music-study-reveals` — Sustenta: pesquisa Deezer/Ipsos com 9.000 pessoas em 8 países, incluindo o Brasil; 97%, 80%, 52% (e7.2, 3.5, 3.7). Confiabilidade: imprensa musical relatando pesquisa encomendada por parte interessada (a Deezer vende detecção); o teste às cegas usou três faixas por pessoa.
9. KPW — "GEMA also wins against Suno" (31/07/2026). `https://kpw.law/en/gema-also-wins-against-suno/` — Sustenta: decisão de Munique, memorização, responsabilidade do provedor, não definitiva (e5.1.1, e9, W3). Confiabilidade: escritório de advocacia; bom para o conteúdo da decisão.
10. arXiv 2410.00037 — Défossez et al., "Moshi: a speech-text foundation model for real-time dialogue". `https://arxiv.org/abs/2410.00037` — Sustenta: fala-para-fala em dois fluxos, 160/200 ms (raiz A). Confiabilidade: pré-publicação com código e pesos públicos.
11. GitHub — kyutai-labs/moshi. `https://github.com/kyutai-labs/moshi` — Sustenta: licenças, execução em MLX, Mimi a 1,1 kbps, vozes em inglês (raiz A, 3.3). Confiabilidade: alta; repositório oficial.
12. OpenAI Developers — "Developer notes on the Realtime API". `https://developers.openai.com/blog/realtime-api` — Sustenta: gpt-realtime em disponibilidade geral, SIP, limites de sessão (e2, W2). Confiabilidade: documentação do fornecedor.
13. Apple Developer — WWDC25 sessão 277, SpeechAnalyzer. `https://developer.apple.com/videos/play/wwdc2025/277/` — Sustenta: transcrição local, fora do app, atualizada pelo sistema (e4). Confiabilidade: documentação oficial.
14. Hugging Face — Xenova, "Introducing Kokoro.js". `https://huggingface.co/posts/Xenova/503648859052804` — Sustenta: TTS de 82M no navegador, 326 → 86 MB (e4.1). Confiabilidade: anúncio do autor da biblioteca.
15. ElevenLabs — "ElevenLabs crosses $500M ARR" (05/05/2026). `https://elevenlabs.io/blog/500m-arr-and-new-investors` — Sustenta: US$ 350M → US$ 500M+, crescimento por agentes de voz (e1, e2). Confiabilidade: número da própria empresa, não auditado.
16. GitHub — kyutai-labs/unmute. `https://github.com/kyutai-labs/unmute` — Sustenta: agente de voz aberto (MIT), requisitos de hardware, projeto de doação de voz (e2, e17.1.1, sinal fraco 5). Confiabilidade: alta; repositório oficial. As contagens de doação (374/228) vêm do resumo de busca, compatível com o README.
17. GitHub — magenta/magenta-realtime. `https://github.com/magenta/magenta-realtime` — Sustenta: música ao vivo aberta (Apache-2.0), 230M e 2,4B, tempo real em Apple Silicon (e6, e6.2, e9.1, sinal fraco 3). Confiabilidade: alta; repositório oficial.
18. Cybersecurity Dive — "FBI warns senior US officials are being impersonated using texts, AI-based voice cloning" (16/05/2025). `https://www.cybersecuritydive.com/news/fbi-us-officials-impersonated-text-ai-voice/748334/` — Sustenta: alerta do FBI, 442% (CrowdStrike) (raiz C, e12, W2). Confiabilidade: boa como relato; o percentual é de empresa de segurança.
19. BankInfoSecurity — "Cloned Voice Tech Is Coming for Bank Accounts" (2024). `https://www.bankinfosecurity.com/cloned-voice-tech-coming-for-bank-accounts-a-24850` — Sustenta: Chase, Wells Fargo e Barclays com voz como fator; quebra em demonstração; 15 segundos de áudio (e11, raiz C). Confiabilidade: imprensa especializada; 2024.
20. artificialintelligenceact.eu — "Article 50: A Practical Guide". `https://artificialintelligenceact.eu/transparency-rules-article-50/` — Sustenta: marcação de áudio sintético a partir de 02/08/2026, sem isenção para abertos, aviso audível (e7, e14, S5). Confiabilidade: site de referência independente; não é o texto oficial.
21. Schjødt — "Owning the Self: Denmark's Copyright Turn Against Deepfakes". `https://schjodt.com/news/owning-the-self-denmarks-copyright-turn-against-deepfakes` — Sustenta: proposta dinamarquesa sobre voz, exceções, alcance territorial (e13). Confiabilidade: escritório de advocacia; bom para o conteúdo da proposta.
22. Kaufman & Canoles — "The NO FAKES Act Moves Forward: How AI Voice and Likeness Rights Could Reshape Entertainment Deals" (2026). `https://www.kaufcan.com/newsroom/news/the-no-fakes-act-moves-forward-how-ai-voice-and-likeness-rights-could-reshape-entertainment-deals` — Sustenta: aprovação unânime na Comissão de Justiça do Senado em 18/06/2026, direito federal sobre voz e semelhança, ainda não é lei (e13, e13.1). Confiabilidade: escritório de advocacia; bom para o estado do projeto.
23. Câmara dos Deputados — "Segmento de dublagem pede proteção legal contra uso de voz gerada por inteligência artificial" (29/08/2024). `https://www.camara.leg.br/noticias/1092791-segmento-de-dublagem-pede-protecao-legal-contra-uso-de-voz-gerada-por-inteligencia-artificial/` — Sustenta: pleito dos dubladores, PL 1376/22 e PL 2338/23 (e13, e13.1, 3.7). Confiabilidade: fonte oficial; 2024.
24. Exame — "Clonagem de voz e identidade: como os golpes com IA mudaram no Brasil" (19/09/2026). `https://exame.com/inteligencia-artificial/clonagem-de-voz-e-identidade-como-os-golpes-com-ia-mudaram-no-brasil/` — Sustenta: 1,5 milhão de tentativas de fraude no 1º tri/2026 (Serasa), alerta da Febraban, Carteira de Identidade Nacional (e11, e12.1, 3.7). Confiabilidade: boa; números de terceiros (Serasa).
25. Tribuna do Sertão — "Golpes por voz clonada deixam bancos brasileiros em alerta" (25/02/2026). `https://www.tribunadosertao.com.br/geral/2026/02/25/862930-golpes-por-voz-clonada-deixam-bancos-brasileiros-em-alerta-uma-fraude-a-cada-23-segundos` — Sustenta: recomendações (validação multicanal, palavra-código) (e12); o número do título é de fraude em geral (seção 8). Confiabilidade: baixa; veículo regional, título que não bate com o dado.
26. Wikipedia — "Xania Monet". `https://en.wikipedia.org/wiki/Xania_Monet` — Sustenta: criadora, Suno, posições Billboard, contrato de US$ 3 milhões (e8, e8.1). Confiabilidade: média.
27. The Register — "AI country artist hits #1 on Billboard digital songs chart" (10/11/2025). `https://www.theregister.com/2025/11/10/ai_country_artist_hits_number_one/` — Sustenta: Breaking Rust em #1 com ~3.000 vendas, 3 milhões de reproduções, dúvida sobre o criador (e8, e7.1.1, W1). Confiabilidade: boa como relato; tom crítico declarado.
28. TechCrunch — "Spotify updates AI policy to label tracks, cut down on spam" (25/09/2025). `https://techcrunch.com/2025/09/25/spotify-updates-ai-policy-to-label-tracks-cut-down-on-spam/` — Sustenta: DDEX, filtro de spam, remoção de clone de voz não autorizado (e7, e8.2). Confiabilidade: alta como relato do anúncio.
29. Wikipedia — "Content Credentials". `https://en.wikipedia.org/wiki/Content_Credentials` — Sustenta: C2PA, suporte a áudio, ElevenLabs e Suno integrados, iOS só valida, quebras registradas (e7.2, e11.1, S6, experimento). Confiabilidade: média; enciclopédia colaborativa sobre tema em movimento (seção 8, item 7).
30. ScienceDaily / UC Davis Health — "Brain-computer interface restores real-time speech in ALS patient" (12/06/2025). `https://www.sciencedaily.com/releases/2025/06/250612081317.htm` — Sustenta: BrainGate2, 25 ms, 60% × 4%, entonação e canto, um participante (raiz D, e15, e17). Confiabilidade: comunicado institucional do artigo da Nature (DOI 10.1038/s41586-025-09127-3), que não foi aberto.
31. arXiv 2603.02847 — "SilentWear: an Ultra-Low Power Wearable System for EMG-based Silent Speech Recognition". `https://arxiv.org/abs/2603.02847` — Sustenta: 14 canais, 20,5 mW, 27 h, oito comandos, 77,5% / 59,3% (raiz D, e16, W4). Confiabilidade: pré-publicação acadêmica.
32. The Decoder — "ElevenLabs opens a marketplace for iconic AI voices" (12/11/2025). `https://the-decoder.com/elevenlabs-opens-a-marketplace-for-iconic-ai-voices/` — Sustenta: 28 vozes licenciadas, vivos e mortos, consentimento do detentor (e8.2, e13.1, e13.1.1). Confiabilidade: imprensa de tecnologia; relato do anúncio.
33. National Public Media — "Smart Audio Report: 60M U.S. Adults Own A Smart Speaker" (2019). `https://www.nationalpublicmedia.com/insights/articles/smart-audio-report-60m-u-s-adults-own-a-smart-speaker/` — Sustenta: 24% dos adultos dos EUA com alto-falante inteligente em 2019; 54% já tinham usado comando de voz (classe de referência de e1, pré-mortem 1). Confiabilidade: boa; pesquisa NPR/Edison, com metodologia publicada.

34. Music Business Worldwide — "50,000 AI tracks flood Deezer daily – as study shows 97% of listeners can't tell the difference" (nov/2025). `https://www.musicbusinessworldwide.com/50000-ai-tracks-flood-deezer-daily-as-study-shows-97-of-listeners-cant-tell-the-difference-between-human-made-vs-fully-ai-generated-music/` — Sustenta: 70% veem ameaça à renda de músicos; 0,5% das escutas e 34% das entregas em nov/2025 (3.3, e7.1, sinal fraco 6). Confiabilidade: imprensa especializada; números da Deezer. Não cita os países da pesquisa (seção 8, item 2).

## 12. Anexo — o levantamento bruto

### 12.1 Procedimento da rodada

Skill `futurizacao-giordano` v1.2.0, modo MAPA, não interativo, com briefing completo. Ordem de trabalho: leitura do formato e do verificador → leitura do mapa do mesmo tema com horizonte 2041 (contaminação declarada na seção 8, item 8) → 18 buscas → cerca de 40 aberturas de página: 34 citadas na seção 11, as demais abertas sem uso ou falhas (12.3) → roda → bateria do §6 → verificador.

### 12.2 Premissas assumidas que o briefing não cobre

- **Recorte de "comum em produto de massa"**: considerei maduros o assistente de voz por turno, o TTS de leitura, a transcrição em nuvem, a separação por máscara e a DAW (3.8).
- **Inclusão da raiz D**: o tema da disciplina não cita neuroprótese nem fala silenciosa. Incluí porque a pergunta de 2ª ordem ("com quem não pode falar — ou não pode falar em público?") pede uma raiz, e porque o objeto é voz gerada. É fronteira com o tema 16 (IA no dispositivo) e com saúde, e foi mantida no recorte "voz gerada a partir de sinal".
- **Português**: presumi que a qualidade em português chega depois do inglês. Não abri evidência.
- **Energia**: presumi que o aparelho aguenta inferência contínua (S4).
- **Brasil**: sem dado aberto sobre o volume de áudio no WhatsApp; tratado como percepção.

### 12.3 Buscas e aberturas

Buscas (18): neuroprótese de síntese de voz instantânea (Nature 2025); NO FAKES Act 2026; política de IA da Spotify, DDEX e filtro de spam; Kyutai Unmute; C2PA em áudio e assinatura no microfone; golpe de voz clonada no Brasil (Febraban, WhatsApp); ElevenLabs Iconic Marketplace; interface de fala silenciosa por EMG em fone; Magenta RealTime / Lyria RealTime; países da pesquisa Deezer/Ipsos; alto-falante inteligente no Smart Audio Report; jardim murado Universal-Udio; Breaking Rust na Billboard. Mais as reaberturas diretas das fontes-âncora (Warner-Suno, Deezer ×2, GEMA, Advanced Split, Suno, Moshi ×2, Realtime API, SpeechAnalyzer, Kokoro.js, ElevenLabs, AI Act, Dinamarca, Câmara, FBI, BankInfoSecurity, Xania Monet).

Aberturas que falharam ou não serviram:
- `https://www.nature.com/articles/s41586-025-09127-3` — redirecionou para login.
- `https://pubmed.ncbi.nlm.nih.gov/40506548/` — página pediu cookies; sem resumo.
- `https://www.npr.org/about-npr/1105579648/...` (35% de adultos com alto-falante em 2022) — tempo esgotado. O número de 2022 aparece só no resumo de busca e **não** foi usado.
- `https://kyutai.org/blog/2025-07-03-tts-unmute-open-source/` — abriu, mas o texto extraído não trazia os detalhes; substituída pelo repositório [16].
- Music Business Worldwide sobre a pesquisa Deezer/Ipsos [34] — abriu, mas não sustenta "Brasil incluído"; os países vêm da DJ Mag [8] (seção 8, item 2).
- `https://newsroom-deezer.com/2025/11/deezer-ipsos-survey-ai-music/` — abriu pelo WebFetch (trazia também 69% a favor de pagar menos ao gerado e 65% contra treinar com obra protegida), mas responde 403 à checagem automática de links. Saiu da seção 11, e os dois números saíram do texto.
- `https://www.hklaw.com/en/insights/publications/2026/06/senate-judiciary-committee-advances-legislation-to-protect-name` — abriu pelo WebFetch (retirada por notificação no modelo do DMCA, contranotificação de 14 dias, preempção que preserva o ELVIS Act), mas responde 403 à checagem. Substituída por [22]; os detalhes ficam só aqui.

Vistos só em resultado de busca, **não usados como fonte**: fone com EMG têxtil com 96% em 10 palavras (arXiv 2504.13921); MerkleSpeech (arXiv 2602.10166, proveniência de fala por Merkle); guia de implantação do C2PA de 08/07/2026; Lyria RealTime como API; "15 segundos de áudio bastam" (reportagens brasileiras); "63% dos brasileiros não identificam golpe com IA"; ELVIS Act do Tennessee (citado na preempção do NO FAKES [22], não aberto).

### 12.4 Efeitos cortados (com o motivo)

- **e1.3** — "o teclado físico desaparece dos laptops": extrapolação linear da raiz A, sem troca de ator (7.2).
- **e2.3** (herdado do mapa de 2041, não reinserido) — "centrais de atendimento nas Filipinas e na Índia fecham": teste da causa solta, porque automação por texto já faria isso.
- **e7.3** — "plataformas criam o gênero 'música de IA'": é a própria etiqueta de e7, sem mecanismo novo.
- **e13.3** — "seguradoras criam apólice contra clonagem de voz": teste da causa solta (seguro cibernético genérico).
- **e16.2** — "o teclado do celular é substituído pela fala silenciosa": extrapolação de e16.
- **Candidato a efeito ecológico** — "a inferência contínua de voz aumenta o consumo de energia dos aparelhos": genérico de qualquer IA local; falha no teste de especificidade.
- **Candidato a raiz** — "áudio espacial gerado": fica com o tema 12/15 (cena imersiva) e não passou no §2 com as fontes abertas; sem artefato aberto nesta rodada.
- **Candidato a raiz** — "tradução falada simultânea preservando a voz do falante": seria forte para dublagem, mas não abri artefato de 2026 que o sustente; entra implícito em e13.1 (licença de voz por obra). Anotado como caminho para a próxima rodada.

### 12.5 Caminhos abandonados

- Tentei derivar uma quinta raiz, "o áudio como prova": ela é a convergência de B e C, não uma ruptura separada. Mantida como convergência em 5.2.
- Pensei em pôr o ECAD como "quem bloqueia" da raiz B. Troquei pelas majors e pela GEMA, que têm litígio aberto [9]; o ECAD ficou como ator de 3ª ordem (e6.2.1), onde o mecanismo é específico.

### 12.6 Material da turma citado sem abertura

Do texto do tema, que não é fonte: a avaliação do Suno pela amostra do professor ("convincente na primeira escuta, revela costura na segunda; não entrega os canais separados"); Whisper "confunde nome próprio e sigla"; piper-tts-web, expo-ai-kit, ChatTTS, Bark, 1BITDRAGON, signalflow, Hacklily, pydub, espnet, PastPort. Nenhum foi aberto nesta rodada.

### 12.7 Saída do verificador

Comando: `python3 /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/futurizacao-giordano/references/verificar.py tendencia-voz-e-som-gerativos.md --links`, rodado em 22/09/2026.

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 17 (frontmatter diz 17)
efeitos ordem 2: 24 (frontmatter diz 24)
efeitos ordem 3: 24 (frontmatter diz 24)
prazo > horizonte (2046) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 1 [('e16.1.1', 2050)]
confiança ordem 1: alta 7 · media 6 · baixa 4
confiança ordem 2: alta 2 · media 14 · baixa 8
confiança ordem 3: alta 0 · media 2 · baixa 22
links da seção 11: 34/34 respondem (frontmatter diz fontes: 34)
RESULTADO: ok
```

O único prazo além do horizonte (e16.1.1, 2050) é de 3ª ordem e está declarado fora da janela na seção 5.1.
