---
tema: Voz e som gerativos
slug: voz-e-som-gerativos
autor_login: grec
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-12
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 15
efeitos_ordem_2: 16
efeitos_ordem_3: 15
tecnologias_citadas: [Suno, Suno Studio, Udio, ElevenLabs, OpenAI Realtime API, Google Gemini Live API, Kyutai Moshi, Kyutai Pocket TTS, Sesame CSM, Apple SpeechAnalyzer, Whisper, Piper TTS, ChatTTS, Meta Audiobox, Stable Audio 3.0, Google Lyria 3 Pro, NotebookLM Audio Overviews, MusicGen-Stem, STEMPHONIC, C2PA]
fontes: 30
confianca: media
experimento: Rádio pessoal local — agente de voz no dispositivo que entrevista o ouvinte e gera a trilha sonora na hora
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Duas rupturas convergem no mesmo objeto — o som que não foi gravado. A primeira é a voz: modelos de fala pequenos o bastante para rodar no celular e no navegador (Apple SpeechAnalyzer, Piper, Moshi) tiram a conversa com a máquina da nuvem, do custo por minuto e da tela como porta de entrada. A segunda é a música: geradores como Suno já produzem faixa completa e convincente (97% dos ouvintes não distinguem, segundo teste cego Deezer/Ipsos), e desde setembro de 2025 exportam stems e MIDI — o limite "não entrega os canais separados", que a disciplina registrou como sinal, já caiu. A terceira ruptura é derivada das duas: com clone de voz a partir de 3 segundos de áudio e humanos incapazes de detectar deepfake acima do acaso, a voz deixa de funcionar como prova de identidade — e telefone, áudio de WhatsApp e biometria vocal perdem o estatuto de credencial. O mapa deriva 46 efeitos em três ordens: o mercado de trilha e stock music perde o fundo do funil e vira matéria-prima de treino licenciado; o streaming é inundado (mais de 50% dos uploads novos no Deezer já são IA) e responde com cercas de rotulagem; e a confiança no áudio migra da biometria para a criptografia de captura. Wildcard: um artista sintético liderar a parada geral e virar atração de palco. Confiança geral: média — os sinais de 1ª ordem são fortes, mas a velocidade depende de acordos de licenciamento e regulação que estão em curso agora.

## 2. O tema

**O que é.** Voz e som gerativos é a produção de áudio por modelos, sem gravação: síntese de fala conversacional (speech-to-speech, TTS expressivo, clonagem), geração de música completa (instrumental, voz e mixagem a partir de descrição) e a infraestrutura que nasce em volta (detecção, watermark, licenciamento, autenticação). Encosta em mídia e interação nos dois lados: a voz é **interface** (como se comanda e se recebe resposta) e a música é **conteúdo** (o que se produz, distribui e remunera).

**Por que mapa e não estado da arte.** Porque o objeto se moveu durante a própria elaboração deste documento: o sinal fraco que a disciplina registrou — "a música gerada não entrega os canais separados" — deixou de ser verdade em setembro de 2025, quando o Suno Studio passou a gerar e exportar stems e MIDI. Um levantamento de estado da arte capturaria o produto; o que interessa aqui são as consequências de segunda e terceira ordem — o que acontece com trilha sonora, streaming, direito autoral, biometria de voz e a confiança no áudio quando a geração é barata, local e indistinguível.

**Premissas assumidas nesta rodada (briefing completo fornecido; o que ele não cobria, assumi e declaro):** modo MAPA; horizonte 2031; público "quem projeta mídia e interação"; recorte global com nota sobre o Brasil; descartado de início o que já é comum em produto de massa; nenhuma disrupção suspeita de antemão; viés neutro, com um cenário de cada lado na seção 9; falseador declarado pelo autor: "evidência de que a adoção já passou da maioria inicial (Rogers) ou de que a tecnologia só melhora o que existe"; ideias óbvias excluídas: as que servem para qualquer tema. Assumi sem perguntar: profundidade de três ordens; `publico_ok: false` por padrão; a descrição do tema pela disciplina foi tratada como contexto, não como fonte.

## 3. Onde isso está hoje

Âncora feita **com** acesso à web em 12/09/2026: 24 buscas (inglês e português) e 40 páginas abertas e lidas, por dois agentes de pesquisa. Só entra aqui o que foi aberto de fato.

### O que já existe e funciona

**Música gerada completa.** Suno v5 (23/09/2025) gera faixas de até 8 minutos; a empresa afirmava ~12 milhões de usuários em set/2025 e — segundo pitch deck obtido pela Billboard — gera **7 milhões de músicas por dia**. Receita alegada de US$ 300 milhões/ano e 2 milhões de assinantes pagos (MBW, mai/2026). Rodadas: Série C de US$ 250 mi a US$ 2,45 bi (nov/2025) e Série D a **US$ 5,4 bi** (jun/2026). **Suno Studio** (25/09/2025) é uma estação de trabalho generativa: gera stems individuais, tem timeline multitrack e **exporta áudio e MIDI** — o limite histórico "não entrega os canais separados" está superado no produto e na pesquisa (MusicGen-Stem, arXiv jan/2025; STEMPHONIC, MIT/Adobe, fev/2026, gera conjunto variável de stems sincronizados em uma passada). Stability AI lançou o **Stable Audio 3.0** (20/05/2026) com três modelos de pesos abertos treinados só com dados licenciados (806 mil arquivos da biblioteca AudioSparx + Freesound). Google lançou **Lyria 3 Pro** (mar/2026).

**Fala local e conversacional.** **Apple SpeechAnalyzer** (WWDC 2025, iOS 26/macOS 26): reconhecimento de fala 100% on-device, sem custo por chamada, ~2,2× mais rápido que Whisper Large V3 Turbo em teste independente. **Kyutai Moshi**: diálogo speech-native full-duplex (ouve e fala ao mesmo tempo), pesos abertos, roda num MacBook; o laboratório abriu ainda o **Pocket TTS** (100M parâmetros, mais rápido que tempo real em CPU). **Piper TTS** roda em tempo real até em Raspberry Pi e é o TTS padrão do Home Assistant. **Sesame CSM** abriu a variante de 1B parâmetros (mar/2025). **ChatTTS** é TTS open para diálogo com controle de risadas e pausas (inglês/chinês). Na nuvem, **OpenAI Realtime API** e **Gemini Live API** fazem speech-to-speech nativo com interrupção (barge-in) — mas cobram por minuto (saída de áudio US$ 0,24/min na OpenAI; Google ~57% mais barato).

**Voz sintética e seus efeitos.** ElevenLabs: Eleven v3 com 70+ idiomas, Flash v2.5 com latência declarada de ~75 ms, clone instantâneo com 1–2 min de áudio, e watermark em áudio introduzido em 2026. Pesquisa McAfee (9 países, incluindo Brasil): 1 em 4 pessoas já vivenciou ou conhece vítima de golpe de voz clonada; bastam 3 segundos para um clone com 85% de similaridade. Pesquisa Veriff/Kantar (fev/2026, EUA, Reino Unido e Brasil): humanos detectam deepfake só marginalmente acima do acaso. Golpes documentados: Arup/Hong Kong, US$ 25 milhões numa videochamada em que todos os participantes eram deepfakes (2024); fraude global com deepfake acima de US$ 1,5 bilhão em jan–set/2025; FBI IC3 criou em 2025 a categoria própria de fraude "relacionada a IA" (22.364 reclamações, US$ 893 milhões). No Brasil: ataques com deepfake +126% em 2025 (BioCatch, citado pelo Itaú) e golpe do áudio clonado no WhatsApp já reportado pela polícia do Paraná (jan/2026). Regulação em vigor: EU AI Act art. 50 (rotulagem de conteúdo sintético, ago/2025, multas de até 7% do faturamento global) e TSE Res. 23.755/2026 (rótulo explícito de conteúdo sintético na propaganda eleitoral, silêncio de IA 72h antes do pleito, multa de R$ 5–30 mil).

### O que existe e ainda não funciona

- **Diálogo full-duplex local em hardware intermediário.** Moshi roda em MacBook M3 Pro; não há demonstração pública de qualidade equivalente num celular de entrada, e as variantes fortes de voz expressiva (Sesame Medium 8B, Eleven v3) dependem de GPU ou nuvem.
- **Voz expressiva local em português.** ChatTTS é inglês/chinês; Sesame 1B é de fato só inglês; Piper tem vozes PT mas sem expressividade conversacional. O português on-device de qualidade humana é promessa, não produto.
- **Meta Audiobox:** demo oficial descontinuado ("no longer available" desde fev/2026) — a página diz isso explicitamente.
- **Udio como gerador aberto:** após os acordos com UMG (out/2025) e Warner (nov/2025), suspendeu downloads e pivota para plataforma de fãs ("Starstruck") com catálogo licenciado — o "gerar qualquer música" virou jardim murado.
- **Detecção confiável de áudio sintético:** a Deezer detecta para moderar uploads, mas humanos estão no nível do acaso e não há padrão de proveniência (C2PA de áudio) adotado ponta a ponta.

### Quem constrói

Suno e Udio (música completa); ElevenLabs e Sesame (voz); OpenAI e Google (voz em tempo real na nuvem); Kyutai, Open Home Foundation/Piper, comunidade ChatTTS (aberto e local); Apple (fala no SO); Stability AI (áudio aberto e licenciado). Na defesa: Deezer (detecção), Pindrop/BioCatch (antifraude de voz), Reality Defender (compliance).

### Números de adoção

- Deezer: uploads de música 100% IA escalaram de 10 mil/dia (jan/2025) para **~90 mil/dia — mais de 50% dos uploads novos — em jun/2026**; 13,4 milhões de faixas IA detectadas em 2025. Consumo, porém, é mínimo: **1–3% dos streams**, e ~85% deles fraudulentos. Teste cego Deezer/Ipsos (9 mil pessoas, 8 países): **97% não distinguem** música IA de humana.
- Artistas sintéticos já charteiam: Breaking Rust ficou 2 semanas em nº 1 no Country Digital Song Sales da Billboard (nov/2025); Xania Monet foi a primeira artista de IA num chart de rádio da Billboard e assinou contrato reportado de ~US$ 3 mi com a Hallwood Media.
- CISAC/PMP e Unesco (fev/2026): ~24–25% das receitas de criadores de música em risco até 2028.
- WhatsApp no Brasil: brasileiros enviam **4× mais mensagens de voz que qualquer outra população** (Meta, 2024); 80% preferem mandar áudio (Opinion Box, 2025).
- Sem número encontrado: usuários do NotebookLM Audio Overviews; demissões em bibliotecas de stock music; adoção de biometria de voz em bancos brasileiros.

## 4. As disrupções-raiz

Candidatos recusados como raiz, pelo critério de maturidade: **assistente de voz por nuvem** (Alexa/Siri/Google Assistant — adoção em maioria em mercados-chave há anos; é contexto, seção 3); **TTS robótico de leitura de tela** (maduro); **sampler e DAW** (maduros — "se dá para fazer com o que já é comum em produto de massa, é maduro"); **transcrição em nuvem** (madura). **Música gerada como brinquedo de massa** passou perto da recusa — Suno já é produto de massa —, mas o que entra como raiz não é "gerar uma música", e sim **a faixa completa, editável e licenciada como insumo de produção**, que está em adoção precoce entre quem produz (consumo de 1–3% dos streams mostra que o público ainda não migrou).

### Raiz A — Fala conversacional de qualidade humana rodando no dispositivo, sem nuvem

1. **O que rompe.** O pedágio da nuvem sobre a conversa: hoje, cada minuto de voz sintética custa (US$ 0,24/min de saída na Realtime API), depende de rede, e expõe o áudio íntimo a um servidor alheio. Com fala de qualidade humana no SO e no navegador, o custo marginal da interação falada vai a zero, funciona offline e o áudio não sai do aparelho — o que muda a arquitetura de qualquer produto de interação.
2. **Por que agora.** Modelos pequenos o suficiente apareceram nos últimos 24 meses: SpeechAnalyzer embutido no iOS 26 (mais rápido que Whisper Turbo), Piper em CPU de Raspberry Pi, Moshi (7B) em laptop, Pocket TTS de 100M parâmetros. Há cinco anos, STT/TTS local decente não existia fora de datacenter.
3. **Onde está na difusão.** Entre produto de nicho e adoção precoce: STT local já embarca em centenas de milhões de iPhones, mas o **loop conversacional completo e local** (ouvir, pensar, falar, com interrupção) é demo e nicho open-source.
4. **O que falta.** Full-duplex local em celular intermediário; voz expressiva local fora do inglês; padrões de UX para interação falada (interrupção, confirmação, erro); resposta do mercado de nuvem.

### Raiz B — Música completa gerada a partir de descrição, agora editável

1. **O que rompe.** A cadeia compositor → estúdio → mixagem para o fundo do funil (trilha de vídeo, jogo indie, publicidade local, stock music): quando a faixa sai em segundos, editável em stems e MIDI, e 97% dos ouvintes não a distinguem, o ofício de produzir trilha sob encomenda de baixo orçamento deixa de ter preço. Rompe também a distribuição: quem gera 7 milhões de músicas por dia precisa despejá-las em algum lugar.
2. **Por que agora.** Convencimento na primeira escuta (teste cego Deezer/Ipsos, nov/2025) + editabilidade (Suno Studio, set/2025; STEMPHONIC, fev/2026) + capital (US$ 5,4 bi de avaliação) + os primeiros acordos de licenciamento (Warner–Suno, UMG/Warner–Udio, fim de 2025).
3. **Onde está na difusão.** Adoção precoce: 2 milhões de assinantes pagos, uploads IA majoritários no Deezer, mas consumo de 1–3% dos streams — criador migrando, público ainda não.
4. **O que falta.** Modelo 100% licenciado em produção (Suno/Warner prometem para 2026); fim dos processos de UMG e Sony contra a Suno e da Sony contra o Udio; monetização legítima de música IA no streaming; padrão de rotulagem interoperável.

### Raiz C — Voz sintética indistinguível apaga a voz como prova de identidade

1. **O que rompe.** A suposição de que ouvir a voz de alguém prova que é ela: ligação do banco, áudio de WhatsApp do filho, biometria vocal, prova de vida. Com clone a partir de 3 segundos e detecção humana no nível do acaso, a voz vira conteúdo, não credencial.
2. **Por que agora.** Clonagem instantânea de consumo (ElevenLabs: 1–2 min de áudio; McAfee: 3 s), fraude industrializada em 2024–2025 (Arup; US$ 1,5 bi em 2025) e regulação reagindo em 2025–2026 (EU AI Act, TSE) — os três lados do triângulo apareceram juntos.
3. **Onde está na difusão.** Adoção precoce do **ataque**; a defesa (detecção, assinatura de captura, autenticação alternativa) está entre laboratório e produto de nicho.
4. **O que falta.** Assinatura criptográfica de áudio no hardware de captura; rotulagem de voz sintética interoperável e fiscalizada; migração dos serviços essenciais para autenticação fora da voz; seguro e jurisprudência consolidados.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: Fala conversacional de qualidade humana rodando no dispositivo, sem nuvem
    efeitos:
      - id: e1
        ordem: 1
        efeito: A interação por voz passa a funcionar offline e sem custo por minuto, tirando da nuvem o pedágio sobre a conversa
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Agentes de voz locais assumem a triagem de atendimento em setores regulados porque o áudio íntimo não sai do aparelho
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A unidade de concorrência em atendimento deixa de ser o app e passa a ser o modelo de voz embutido no sistema operacional
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A tela deixa de ser o ponto de partida de fluxos inteiros em contextos de mãos e olhos ocupados
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Teclado e formulário encolhem em apps de trabalho de campo e a entrada estruturada vira fala transcrita localmente
            sinal: fraco
            prazo: 2030
            confianca: media
          - id: e2.2
            ordem: 2
            efeito: Quem não pode falar ou não pode falar em público é excluído dos fluxos voz-primeiro e pressiona por paridade de texto
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: O W3C passa a tratar equivalência entre voz e texto como requisito de acessibilidade em serviços essenciais
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: Processamento local de voz vira argumento de marketing de privacidade em saúde, finanças e produtos para crianças
        sinal: medio
        prazo: 2027
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Pessoas com ELA e afasia ganham voz sintética pessoal rodando no próprio aparelho em vez de depender da nuvem de um fornecedor
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A voz sintética pessoal vira um ativo portátil entre dispositivos e desligado de qualquer fornecedor
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Interfaces de voz passam a aceitar interrupção e sobreposição em vez de turnos rígidos de fala e escuta
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: O design de conversação vira disciplina de produto com métricas próprias separada do design visual
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Métricas de prosódia e de interrupção bem-sucedida entram na avaliação rotineira de pesquisa de UX
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: A qualidade da fala local se fragmenta por idioma e sotaque e o português fica para trás, freando a adoção fora do inglês
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Provedores de voz em nuvem respondem com corte de preço e modelos menores, comoditizando a voz como serviço
            sinal: medio
            prazo: 2027
            confianca: alta
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A diferenciação em voz migra do preço para dados de treino licenciados e sotaques locais
                sinal: fraco
                prazo: 2030
                confianca: baixa
  - disrupcao: Música completa gerada a partir de descrição, agora editável em stems e MIDI
    efeitos:
      - id: e6
        ordem: 1
        efeito: O mercado de trilha sob encomenda e stock music perde o fundo do funil de baixo orçamento
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O catálogo de stock music migra de licença de uso para licença de treino e vira matéria-prima dos geradores
            sinal: forte
            prazo: 2027
            confianca: alta
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A trilha sob medida passa a ser gerada dentro do próprio editor de vídeo e da engine de jogo em vez de comprada
                sinal: fraco
                prazo: 2030
                confianca: media
      - id: e7
        ordem: 1
        efeito: O streaming é inundado por faixas geradas e a maioria dos uploads novos passa a ser sintética
        sinal: forte
        prazo: 2026
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Detecção e watermark de áudio viram camada obrigatória do pipeline de distribuição
            sinal: forte
            prazo: 2027
            confianca: alta
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A prova de proveniência de áudio vira requisito de seguro e de contrato coletivo e não só de plataforma
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: A remuneração pro-rata por stream se dilui com o volume sintético e achata a receita da cauda longa humana
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: Plataformas passam a testar remuneração user-centric ou piso por faixa humana verificada
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: Artistas sintéticos entram em paradas e assinam contratos com gravadoras e investidores
        sinal: forte
        prazo: 2026
        confianca: alta
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: A curadoria humana se valoriza e o selo de música humana garantida vira argumento de marketing
            sinal: medio
            prazo: 2027
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: O artista humano ao vivo vira produto premium análogo ao feito à mão e a apresentação presencial ganha valor relativo
                sinal: fraco
                prazo: 2030
                confianca: media
      - id: e9
        ordem: 1
        efeito: Os processos judiciais contra geradores se convertem em acordos de licenciamento e modelos treinados só com material autorizado
        sinal: forte
        prazo: 2026
        confianca: alta
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: Sindicatos de músicos litigam contra as próprias gravadoras por licenciar gravações sem compensar os intérpretes
            sinal: forte
            prazo: 2026
            confianca: alta
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: Contratos coletivos passam a incluir cláusulas explícitas de licenciamento para treino de modelos
                sinal: medio
                prazo: 2028
                confianca: media
      - id: e10
        ordem: 1
        efeito: Plataformas e emissoras criam cercas contra música sintética e a rotulagem vira infraestrutura de mercado
        sinal: forte
        prazo: 2026
        confianca: alta
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: O rótulo de conteúdo gerado passa a decidir distribuição e monetização e cria mercado para auditoria de catálogo
            sinal: medio
            prazo: 2028
            confianca: media
  - disrupcao: Voz sintética indistinguível apaga a voz como prova de identidade
    efeitos:
      - id: e11
        ordem: 1
        efeito: A ligação telefônica deixa de ser canal de confirmação para transações sensíveis
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: Bancos e call centers adotam detecção de voz sintética em tempo real como camada padrão antifraude
            sinal: forte
            prazo: 2027
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: A prova de identidade migra da biometria para a assinatura criptográfica do dispositivo e a voz sai do modelo de autenticação
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: O golpe do parente com voz clonada se industrializa no WhatsApp e o Brasil vira terreno privilegiado pela cultura do áudio
        sinal: forte
        prazo: 2026
        confianca: alta
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: Plataformas de mensagem passam a assinar a captura de áudio no cliente ou são reguladas para isso
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: O áudio de mensagem não assinado passa a ser tratado como não confiável por padrão e perde o estatuto de evidência informal
                sinal: fraco
                prazo: 2031
                confianca: media
      - id: e13
        ordem: 1
        efeito: A verificação fora de banda vira norma social e famílias adotam palavras-código contra golpes de voz
        sinal: medio
        prazo: 2026
        confianca: alta
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: Serviços essenciais criam rituais de autenticação para o canal de voz legítimo e o telefone fica mais caro e mais lento
            sinal: fraco
            prazo: 2028
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: A desconfiança crônica no áudio reduz o próprio uso de voz entre pessoas e freia a adoção da voz como interface
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e14
        ordem: 1
        efeito: Reguladores impõem rotulagem obrigatória de voz sintética com multa e janelas de silêncio
        sinal: forte
        prazo: 2026
        confianca: alta
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: Rotulagem, watermark e auditoria de mídia sintética viram linha de custo obrigatória de compliance
            sinal: forte
            prazo: 2026
            confianca: alta
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: A jurisprudência consolida a voz como bem licenciável separado do direito autoral e pessoas passam a licenciar a própria voz
                sinal: fraco
                prazo: 2030
                confianca: media
      - id: e15
        ordem: 1
        efeito: A biometria de voz como fator único de autenticação é abandonada por bancos e governos
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: Seguradoras criam cobertura específica contra fraude por voz clonada
            sinal: fraco
            prazo: 2031
            confianca: baixa
```

**Comentários sobre o que o bloco não diz.**

*Mecanismos.* e1 existe porque o SpeechAnalyzer elimina a chamada de API: quando o custo por minuto some, todo produto que antes não podia pagar voz passa a poder. e5.1 existe porque a nuvem não vai ceder o mercado sem briga — o Gemini Live já custa ~57% menos que a Realtime API, e o movimento natural é o preço cair até a diferenciação migrar para o dado de treino (e5.1.1). e6.1 existe porque a Stability já pagou pela AudioSparx: o ativo das bibliotecas deixa de ser a licença de sincronização e passa a ser o arquivo master para treino. e9.1 existe porque o acordo Warner–Suno foi bilateral: licenciou a gravação sem passar pelo intérprete — e o sindicato AFM processou UMG e Warner exatamente por isso (jun–jul/2026). e12 existe porque o Brasil combina 4× mais áudio de WhatsApp, 80% de preferência por mandar áudio e clone de 3 segundos: o vetor do golpe é nativo da plataforma dominante.

*Classes de referência dos prazos.* Para voz como interface (e1, e2, e4): o assistente de voz em nuvem (Alexa, 2014) levou ~4 anos da demo ao ~10% dos lares americanos; como a fala local chega embutida num SO já instalado, o canal de distribuição é mais curto — daí 2027–2029, não 2031+. Para música gerada (e6–e10): o streaming levou ~6 anos do lançamento do Spotify (2008) a ~10% da receita gravada dos EUA (2014); a produção migra mais rápido que o consumo, porque quem produz tem incentivo de custo direto — daí e6 em 2027 com sinal forte, mas e7.2 (diluição da remuneração) só em 2030, porque depende de consumo que hoje é de 1–3%. Para fraude de voz (e11–e15): o deepfake de vídeo foi de demo (2017) a fraude industrial (2023–2024) em ~6 anos; a fraude de voz já está na fase industrial em 2025–2026, então os efeitos de defesa (e11.1) vêm em 2027, mas a migração completa do modelo de autenticação (e11.1.1) é mais lenta — 2031 e além.

*Retroações com dono (quem bloqueia).* Raiz A: os provedores de nuvem (OpenAI, Google), que respondem com preço e comoditização (e5.1), e a própria defasagem de idiomas (e5) que freia a adoção fora do inglês. Raiz B: as plataformas de streaming e emissoras (Deezer, TIDAL, iHeart "Guaranteed Human"), que cercam a música sintética (e10), e os sindicatos, que litigam contra os acordos (e9.1). Raiz C: os reguladores (UE, TSE) com rotulagem e multa (e14), e os bancos, que ao abandonar a biometria vocal (e15) reduzem a superfície de ataque — e, com isso, a própria urgência da ruptura.

*STEEP e quem perde.* Social: e12, e13, e2.2. Tecnológico: e1, e4, e7.1. Econômico: e6, e7.2, e10.1. Político: e14, e14.1. Ecológico: ficou vazio — computação local poderia reduzir energia de datacenter de voz, mas não encontrei número que sustente um efeito; registro a ausência em vez de forçar a categoria. Quem perde: compositores de stock e trilha de baixo orçamento (e6), a cauda longa humana do streaming (e7.2), dubladores e intérpretes não compensados nos acordos (e9.1), vítimas do golpe da voz (e12), quem não pode falar (e2.2), e os idiomas fora do inglês (e5).

*Cruzamentos.* **Convergência:** watermark e proveniência aparecem em duas raízes independentes — e7.1 (distribuição de música) e e14.1 (compliance de voz) convergem para a mesma camada de infraestrutura de autenticação de áudio; é o achado mais sólido do mapa. **Retroalimentação entre raízes:** e13.1.1 — a desconfiança no áudio criada pela Raiz C freia a adoção da interface de voz da Raiz A; quanto mais o golpe da voz clonada vira senso comum, mais as pessoas relutam em falar com máquinas e em atender vozes. **Contradição:** e8.1.1 (humano vira premium) e e7 (inundação sintética) apontam para futuros de valor opostos — um em que a autenticidade cobra mais, outro em que ela se torna irrelevante porque ninguém distingue. Não resolvo: o que decide entre eles é se o rótulo (e10.1) chega ao ouvinte final ou fica só na infraestrutura.

## 6. Sinais fracos e wildcards

**Sinais fracos.**

1. **Geração nativa de stems variáveis.** Visto em: STEMPHONIC (MIT CSAIL/Adobe, arXiv fev/2026) e MusicGen-Stem (Meta/IRCAM, jan/2025). Quase não aparece hoje — o Suno Studio gera stems, mas de arquitetura fechada. Se crescer, a música gerada deixa de ser "faixa pronta editável" e vira "sessão de estúdio completa gerada", apagando o que restava da fronteira entre gerador e DAW. Sinal observável de crescimento: um modelo de pesos abertos com stems variáveis entrando no top do Hugging Face, ou uma DAW comercial (Ableton, Logic) integrando geração multitrack.
2. **Voz local em português com qualidade humana.** Visto em: a lacuna documentada — ChatTTS é inglês/chinês, Sesame 1B é inglês, Piper não é expressivo. Se crescer, destrava a Raiz A no Brasil de uma vez (o país já fala por áudio: 4× a média global). Sinal observável: benchmark público de SpeechAnalyzer ou similar em PT-BR, ou um Piper/ChatTTS em português com adoção na comunidade open.
3. **Cláusula de treino em contrato coletivo.** Visto em: a ação do AFM contra UMG/Warner citando o Artigo 21 do SRLA (jun–jul/2026). Hoje é um processo; se virar cláusula padrão, muda o objeto da negociação trabalhista na música inteira. Sinal observável: texto de cláusula de treino em qualquer convenção coletiva assinada (AFM, SAG-AFTRA, ou sindicato brasileiro de músicos).

**Wildcard — o artista sintético que vira atração de palco.** Um projeto 100% sintético não apenas lidera a parada geral (Breaking Rust já foi nº 1 num chart setorial; Xania Monet já tocou no rádio) como é anunciado como *headliner* de festival, com avatar e banda de apoio humano. Mecanismo: os contratos já existem (Hallwood/Xania Monet), a aceitação cega já existe (97% não distinguem) e o show ao vivo é a última margem que o humano ainda detém — capturá-la fecha o circuito econômico. É improvável porque a reação cultural está organizada (iHeart tirou Xania Monet do ar com o "Guaranteed Human") e porque festival vive de presença, o bem que o sintético não entrega. Se acontecer, e8.1.1 inverte: em vez de o humano virar premium, o sintético absorve também o ao vivo, e o mapa inteiro da Raiz B acelera uma ordem. Sinal precoce: um artista sintético anunciado em lineup de festival de médio porte, ou turnê virtual com ingresso pago fora da Ásia.

## 7. Contra o próprio mapa

**Pré-mortem — é 2031 e este mapa estava errado. Três razões mais prováveis:**

1. **O licenciamento funcionou bem demais.** Warner–Suno e UMG–Udio viraram template, todos os geradores passaram a treinar só com material pago, e a ruptura autoral virou uma renegociação de contrato — a Raiz B, nesse cenário, descreve uma migração de fornecedor, não uma ruptura. Aponta para e9 e e6: se o licenciamento absorve o choque, o fundo do funil do stock music não "se perde", é recomprado como dado de treino (e6.1 já captura parte disso, mas e6 pode estar superestimado).
2. **A voz local não saiu do inglês.** SpeechAnalyzer e afins continuaram bons em inglês e medíocres no resto; fora dos EUA a tela seguiu soberana e a "interface primária" nunca aconteceu. Aponta para e2 e e4: prazos de 2028–2029 assumem difusão global que a referência (Alexa) só valida em mercado anglófono.
3. **A rotulagem estabilizou a confiança.** EU AI Act + TSE + assinatura de captura funcionaram, o golpe da voz virou crime comum com defesa conhecida, e a Raiz C descreveu um pico de pânico, não uma transição. Aponta para e11.1.1: a migração da identidade para criptografia de dispositivo pode nunca completar se a voz autenticada continuar boa o bastante.

**Extrapolação linear.** e7.2 (diluição pro-rata) é "mais uploads, menos dinheiro por faixa" — é linear, mas o mecanismo de não-linearidade existe (o bolo pro-rata é finito e o volume cresceu 9× em 18 meses, de 10 mil a 90 mil/dia), então mantenho o efeito e empurro o prazo (ver registro). e13 (palavra-código familiar) é quase linear do presente — mantido porque já é comportamento observável, é o efeito com menor distância do presente no mapa inteiro.

**Velocidade de adoção.** e2 (tela deixa de ser ponto de partida, 2029) e e4 (full-duplex, 2028) com sinal médio exigiriam adoção global mais rápida que a referência Alexa (~4 anos, mercado único). Empurro e2 de 2028 para 2029 e mantenho e4 em 2028 só porque o full-duplex não exige mudança de hábito do usuário, só de produto. e7.2 com sinal médio pedia adoção de consumo que hoje é 1–3%: de 2028 para 2030.

**A raiz que não acontece.** Se a Raiz A não se concretizar, restam B e C intactos — o mapa não é uma raiz disfarçada. Se a Raiz B não se concretizar (licenciamento mata o produto aberto, como o Udio mostra), sobra C com força e A intacta; os efeitos e6–e10 colapsariam para "música generativa vira feature de gravadora", o que ainda é um mapa, mas menor. Se a Raiz C não se concretizar (defesa vence), ela deixa os efeitos mais fortes já observáveis (e12, e14) e perde os de 3ª ordem — metade do ramo, não o mapa.

**Suposições escondidas.** (1) A Apple continua abrindo a fala local de graça no SO — se ela enclausurar o SpeechAnalyzer atrás de assinatura de serviço, e1 muda de cara. (2) Os pesos abertos (Moshi, Stable Audio, CSM) continuam abertos. (3) O WhatsApp continua sem assinar captura de áudio. (4) Energia e GPUs seguem baratas o bastante para 90 mil faixas/dia. (5) O modelo pro-rata de streaming sobrevive — se ele cair por outra causa, e7.2 vira efeito de outra raiz.

**Viés do autor.** A zona de interesse do autor é "Percepção e mídia sintética" — o mapa pode superestimar a importância da indistinguibilidade (97% no teste cego) porque é o achado mais vistoso da pesquisa, e subestimar o cenário em que o público simplesmente não se importa com a origem da música, caso em que e8.1 e e8.1.1 (humano premium) são projeção de gosto, não de mercado.

**Calibração.** Antes da bateria, a 1ª ordem tinha alta demais e a 3ª tinha média demais. Depois: 1ª ordem — 10 alta, 4 média, 1 baixa; 2ª ordem — 4 alta, 10 média, 2 baixa; 3ª ordem — 0 alta, 5 média, 10 baixa. A distribuição cai com a ordem.

**Registro de alterações (antes → depois):**

- e2: prazo 2028 → 2029, porque a referência Alexa levou ~4 anos num mercado único e e2 exige difusão global com sinal só médio (item 2 do pré-mortem).
- e4.1: confianca media → baixa, porque o mecanismo ("full-duplex exige design de conversa") é plausível mas o artefato hoje é fraco — disciplina ainda não tem métrica consolidada.
- e6: confianca permanece alta mas a prosa passou a registrar a hipótese contrária (o licenciamento reabsorve o choque — item 1 do pré-mortem).
- e7.2: prazo 2028 → 2030, porque consumo de música IA é hoje 1–3% dos streams e a diluição exige adoção de público mais rápida que a referência Spotify.
- e11.1.1: prazo 2030 → 2031 e confianca media → baixa, porque a rotulagem pode estabilizar a confiança sem trocar o modelo de autenticação (item 3 do pré-mortem).
- e14.1.1: sinal medio → fraco, porque não há caso decidido consolidando voz como bem licenciável separado do autoral — só contratos e processos em curso.
- Removidos (para a seção 12): efeito "dublagem automática reorganiza o mercado audiovisual" (ficou sem mecanismo próprio separado de e6); efeito "ensino de música migra para curadoria" (proibido pelo critério — genérico, sem curso nomeado); candidato a 4ª raiz "áudio 3D/espacial generativo" (recusado: pertence ao tema 12 e não passa no teste do que rompe hoje).

## 8. O que a máquina errou

A máquina desta rodada fui eu (Kimi), mais dois agentes de pesquisa. Onde desconfio do meu próprio trabalho:

1. **Números auto-reportados tratados como fato.** Os "7 milhões de músicas por dia" da Suno vêm de um pitch deck obtido por um jornal — material de captação, feito para impressionar investidor. Os "90 mil uploads IA/dia" e o "97% não distinguem" vêm da Deezer (a segunda com a Ipsos), empresa que vende seu detector de IA — há incentivo direto para os dois números serem grandes. Mantive-os porque são os únicos existentes, mas eles sustentam e7 e a âncora da seção 3, e se estiverem inflados a velocidade da Raiz B cai.
2. **Datas de 2026 vieram de fonte única.** A Série D da Suno a US$ 5,4 bi (jun/2026) e a ação do AFM contra UMG/Warner (jul/2026) foram lidas cada uma em um único veículo (Economic Times e MBW). Não triangulei; se uma das duas for imprecisa, e9 e e9.1 perdem parte da âncora temporal.
3. **Preço da Realtime API citado de blog, não da página oficial.** O US$ 0,24/min de saída foi lido num blog de terceiros que diz ter verificado contra a página da OpenAI em out/2025; eu não abri a página de preços da OpenAI nesta rodada. O número é plausível e o mecanismo de e1 não depende do valor exato, mas a citação é de segunda mão.
4. **Atribuição indireta como se fosse confissão.** O texto dá a entender que o robocall do Biden foi "da ElevenLabs"; o que existe são duas análises independentes (Pindrop, Berkeley) apontando as ferramentas dela — a empresa nunca confirmou. A nuance está na fonte, mas a prosa da seção 3 pode ser lida mais forte do que a evidência.
5. **Efeito plausível com mecanismo fraco que eu quase deixei passar.** e14.1.1 ("voz como bem licenciável") soa óbvio para quem acompanha o debate, mas não há jurisprudência decidida — o sinal foi rebaixado para fraco só na bateria do §6, não na primeira escrita. O mesmo quase aconteceu com e4.1.

## 9. Três cenários para 2031

**Provável.** Em 2031, falar com o dispositivo é trivial e local: o SO ouve e responde offline em inglês e bem o bastante em português, e a nuvem ficou para o raciocínio pesado. A trilha de vídeo, jogo indie e anúncio local é gerada por padrão — comprada como sessão editável, não como faixa — e as bibliotecas de stock sobrevivem vendendo arquivo de treino. O streaming convive com uma maioria de uploads sintéticos, rotulados e fora das recomendações humanas; o consumo segue majoritariamente humano, mas dois ou três artistas sintéticos são nomes estáveis de parada. Todo áudio comercial carrega marca de proveniência; nenhum banco autentica por voz; famílias têm palavra-código. Sinal precoce de que já estamos entrando nele: o modelo licenciado Warner–Suno chegar ao mercado em 2026 sem derrubar o preço do plano.

**Desejável.** Em 2031, a voz local destronou a tela nos contextos em que a tela atrapalhava — e o padrão de acessibilidade obriga paridade com texto, então quem não fala não ficou de fora. A pessoa com ELA tem sua voz, portátil, dela, sem fornecedor. A música gerada paga o dado de treino: o compositor de stock virou licenciante de catálogo com participação, e o ouvinte que quer humano acha humano porque o rótulo chegou à interface. O golpe da voz clonada encolheu porque a captura assinada tornou o áudio falso visível no WhatsApp. Para chegar aqui foi preciso: cláusula de treino nos contratos coletivos (o processo do AFM), C2PA de áudio no hardware e o W3C tratando voz/texto como equivalência. Sinal precoce: uma convenção coletiva assinada com cláusula de treino explícita antes de 2028.

**Indesejável.** Em 2031, a inundação venceu: 90% do que se ouve em fundo é sintético não rotulado, a remuneração por stream virou resíduo e o compositor de fundo de funil desapareceu sem transição. A voz nunca virou interface fora do inglês — virou mais uma camada de exclusão. E a confiança no áudio colapsou sem reconstrução: o áudio de WhatsApp não vale nada, o telefone é canal de golpe por padrão, e a resposta foi cada um se fechar em vídeo ao vivo — que o tema 12 mostra que também não é prova. Sinal precoce: um fork de modelo de voz aberto sem nenhum watermark chegar a adoção ampla antes de qualquer padrão de assinatura de captura.

## 10. O experimento

**O que é.** "Rádio pessoal local": um agente que roda inteiro no dispositivo — escuta (Whisper ou SpeechAnalyzer), conversa (LLM local pequeno), fala (Piper ou ChatTTS) — e que, a partir da conversa, gera na hora a trilha sonora do episódio com um modelo aberto (Stable Audio Small ou MusicGen local). A turma produz, em duplas, um "episódio de rádio de 3 minutos sobre a manhã do próprio ouvinte", entrevistado ao vivo pela máquina, com música gerada durante a entrevista.

**Que pergunta sobre o futuro ele ajuda a responder.** Duas, uma por raiz: (A) quando a voz local funciona de graça e sem nuvem, as pessoas preferem falar com ela ou voltam para a tela assim que podem? (B) uma trilha gerada sob medida em segundos é percebida como "minha" ou como elevador?

**Que tecnologia emergente usa — e por que não dá com a madura.** Usa STT/TTS on-device e geração de música local de pesos abertos. Com tecnologia madura (TTS de nuvem + stock music) não dá: o custo por minuto proíbe a conversa aberta em sala, a latência quebra o full-duplex, e a trilha pré-gravada não pode reagir ao conteúdo da entrevista — que é exatamente o que está sendo testado.

**O que a turma vai fazer quando testar.** Cada dupla é entrevistada pelo agente sem roteiro, depois ouve o episódio alheio sem saber qual trilha é gerada e qual é stock; vota em "quero ouvir o resto" e em "isto é meu". Espera-se que tentem quebrar o agente (interromper, falar gíria, sussurrar) — o que mede o e4 na prática — e que descubram o preconceito ou a indiferença sobre a origem da música.

**O que me faria mudar de ideia.** Se, com voz local perfeita e trilha gerada sob medida, a maioria da turma ainda preferir texto e playlist pronta — evidência de que a tecnologia não rompe nada, só melhora o que existe, e as Raízes A e B caem para melhoria sustentadora. Ou se ninguém notar diferença alguma mas ninguém quiser continuar usando — adoção que não passa da curiosidade inicial (Rogers), o falseador declarado no briefing. Qualquer um dos dois resultados derruba metade dos prazos do mapa.

## 11. Fontes

Só o que foi aberto nesta rodada (40 páginas abertas; as 30 abaixo sustentam afirmações específicas do documento).

1. https://www.musicbusinessworldwide.com/90000-ai-tracks-flood-deezer-daily-passing-half-of-new-music-uploads-for-the-first-time/ — Deezer: 90 mil uploads IA/dia, >50% dos uploads, 1–3% dos streams, 85% fraude, teste cego 97%, CISAC ~25% em risco. Trade press especializada citando releases da Deezer; números são da própria Deezer, interessada no tema — tratar como auto-reportado.
2. https://www.billboard.com/lists/biggest-ai-music-stories-2025-suno-udio-charts-more/ — Retro 2025: Série C da Suno, 7 mi de músicas/dia, acordos Warner–Suno/UMG–Udio, Breaking Rust, Xania Monet, "Guaranteed Human", processos. Fonte de referência da indústria; alta confiabilidade factual.
3. https://www.billboard.com/pro/ai-music-company-suno-launches-daw-rival-logic-ableton/ — Suno Studio (25/09/2025): stems, timeline, exporta áudio e MIDI; alegação de stream-ripping nos processos. Idem.
4. https://mixmag.asia/read/suno-expands-ai-music-production-tools-v5-generative-daw-suno-studio-tech — Suno v5 (23/09/2025), ~12 mi de usuários. Imprensa de nicho; confiável para fatos de lançamento.
5. https://www.hollywoodreporter.com/music/music-industry-news/ai-music-suno-secures-250-million-funding-round-1236431144/ — Série C US$ 250 mi a US$ 2,45 bi. Veículo de indústria estabelecido.
6. https://m.economictimes.com/tech/funding/ai-music-startup-suno-raises-funding-at-5-4-billion-valuation/articleshow/131488561.cms — Série D a US$ 5,4 bi (jun/2026) e modelo licenciado Warner. Fonte única para o fato; confiabilidade média-alta, não triangulada.
7. https://www.musicbusinessworldwide.com/us-musicians-union-files-amended-lawsuit-against-universal-and-warner-over-suno-and-udio-ai-deals/ — AFM processa UMG e Warner (2026); Udio "Starstruck". MBW citando a petição; confiável.
8. https://www.musicbusinessworldwide.com/stability-ai-launches-new-audio-models-that-can-generate-6-minute-music-tracks/ — Stable Audio 3.0 (mai/2026), 806 mil arquivos AudioSparx licenciados, receita alegada da Suno (US$ 300 mi, 2 mi de assinantes), Lyria 3 Pro. Confiável para lançamentos; números de receita são alegados.
9. https://audiobox.metademolab.com/ — Página oficial: demo do Audiobox descontinuado em fev/2026. Fonte primária.
10. https://arxiv.org/abs/2501.01757 — MusicGen-Stem (Meta/IRCAM, 2025): geração multi-stem autoregressiva. Fonte primária (paper).
11. https://arxiv.org/pdf/2602.09891 — STEMPHONIC (MIT/Adobe, 2026): stems variáveis sincronizados numa passada. Fonte primária (paper, PDF lido).
12. https://agenciabrasil.ebc.com.br/economia/noticia/2026-02/unesco-ia-pode-levar-industria-musical-perder-ate-24-de-receitas — Unesco (fev/2026): até 24% de perda de receita de criadores de música até 2028. Agência pública citando relatório; confiável.
13. https://convergenciadigital.com.br/inovacao/deezer-44-das-musicas-novas-sao-geradas-por-ia-mas-consumo-nao-passa-de-3/ — Versão PT-BR dos números da Deezer de abr/2026. Imprensa setorial brasileira; dados da Deezer.
14. https://kyutai.org — Moshi (open, full-duplex), Pocket TTS (100M), Invincible Voice. Fonte primária do laboratório.
15. https://analyticsindiamag.com/ai-origins-evolution/kyutai-releases-moshi-an-open-source-voice-model-ahead-of-openai/ — Moshi: arquitetura Helium 7B + Mimi, roda em MacBook, lançado antes do Advanced Voice Mode. Imprensa técnica; confiável.
16. https://github.com/SesameAILabs/csm — Sesame CSM 1B open-sourced (mar/2025), restrições e hardware. Fonte primária (repo).
17. https://www.sesame.com/blog/crossing-the-uncanny-valley-of-voice — CSM: tokens RVQ/Mimi, ~1 mi de horas de treino, tamanhos 1B/3B/8B. Fonte primária (blog técnico).
18. https://blakecrosley.com/blog/speech-framework-vs-sfspeechrecognizer — SpeechAnalyzer on-device (iOS 26), módulos, 2,2× mais rápido que Whisper Turbo (teste MacStories citado). Blog técnico competente; o benchmark é de terceiro.
19. https://www.promptquorum.com/power-local-llm/piper-tts-review — Piper: tempo real em CPU/Raspberry Pi, migração para Open Home Foundation, GPL-3.0, sem clonagem. Review técnico; média confiabilidade.
20. https://github.com/chat-tts/ChatTTS-base — ChatTTS: diálogo, inglês/chinês, ruído anti-uso-criminoso na versão aberta. Fonte primária (repo).
21. https://www.mcafee.com/ai/news/ai-voice-scam/ — Pesquisa 9 países: 1 em 4 conhece golpe de voz, 3 s para clone de 85%. Pesquisa encomendada por empresa de segurança; direções plausíveis, margens questionáveis.
22. https://www.wired.com/story/biden-robocall-deepfake-elevenlabs/ — Robocall Biden atribuído a ferramentas ElevenLabs por análises independentes; política de clonagem da época. Jornalismo investigativo sólido; atribuição indireta.
23. https://www.creativemotions.it/elevenlabs-recensione-ai-voice-generator/ — ElevenLabs: v3 70+ idiomas, Flash v2.5 ~75 ms, watermark em 2026, requisitos de clonagem. Review técnico detalhado; média confiabilidade, specs da empresa.
24. https://www.americanbar.org/groups/senior_lawyers/resources/voice-of-experience/2025-september/ai-cloned-voice-scam/ — Caso Sharon Brightwell (US$ 15 mil); US$ 200 mi em perdas no 1º tri/2025. ABA compilando relatos; confiável como registro.
25. https://www.veriff.com/pt-br/fraude/custo-fraude-deepfake-2026 — Deepfake: US$ 1,5 bi jan–set/2025; FBI IC3 2025 (22.364 queixas, US$ 893 mi); humanos no nível do acaso (Veriff/Kantar 2026, EUA/UK/Brasil). Empresa de verificação vendendo solução; números citados de terceiros são verificáveis.
26. https://www.realitydefender.com/insights/which-companies-must-comply-with-the-eu-ai-acts-deepfake-requirements — EU AI Act art. 50: rotulagem desde ago/2025, multas até 7% do faturamento. Empresa de compliance; o fato legal é verificável.
27. https://www.tse.jus.br/comunicacao/noticias/2026/Abril/por-dentro-das-eleicoes-conheca-as-regras-sobre-uso-de-ia-na-campanha-eleitoral-de-2026 — TSE Res. 23.755/2026: rótulo de conteúdo sintético, silêncio de IA 72h antes do pleito, multa R$ 5–30 mil. Fonte primária oficial.
28. https://www.itau.com.br/relacoes-com-investidores/noticias/itau-unibanco-alerta-para-golpes-com-deepfakes-e-reforca-orientacoes-de-seguranca-digital/?lang — Itaú (jun/2026): deepfake +126% no Brasil em 2025 (BioCatch), 89% dos brasileiros temem clonagem. Comunicação corporativa citando BioCatch; interessada, mas dados nomeados.
29. https://www.cnnbrasil.com.br/tecnologia/brasileiros-sao-os-que-mais-enviam-audios-e-figurinhas-no-whatsapp-diz-mark-zuckerberg/ — Brasil envia 4× mais áudios no WhatsApp (Meta, 2024). Veículo consolidado citando fala pública.
30. https://g1.globo.com/pr/oeste-sudoeste/noticia/2026/01/29/golpistas-simulam-voz-de-mae-de-vitima-por-inteligencia-artificial-no-pr.ghtml — Golpe do áudio clonado no WhatsApp, Cascavel PR, jan/2026. Jornalismo local com caso policial; confiável.

Fontes abertas mas não usadas acima (não sustentam afirmação específica ou são redundantes): dynamoi (blog sobre downloads do Udio), sunowatermark (blog comercial sobre artistas IA), skywork (preço Realtime API), fastgptplus (preço Gemini Live), sumsub (caso Arup), securitybrief.com.au (Austrália AUD 25,8 mi), blog.opinionbox.com (WhatsApp Brasil 2025), blog.google (NotebookLM Audio Overviews 2024 e 50 idiomas 2025), alspathways.ca (Bridging Voice + ElevenLabs para ELA), pubmed.ncbi.nlm.nih.gov/39779800 (voice banking ELA, Scientific Reports 2025).

## 12. Anexo — o levantamento bruto

### 12.1 Saída do verificador

```
<<INSERIR SAÍDA DO VERIFICAR.PY AQUI>>
```

### 12.2 Premissas assumidas sem entrevista

Rodada não interativa com `briefing:` completo; sem rebaixamento de confiança por pular entrevista (regra da skill), mas o que o briefing não cobre ficou assumido e é declarado aqui: modo MAPA (dado); profundidade de três ordens (assumida); `publico_ok: false` (padrão do formato, não perguntado); a descrição do tema vinda da disciplina foi usada como contexto e nunca como fonte; "nota sobre o Brasil" foi distribuída nas seções 3, 5 (e12) e fontes 27–30 em vez de virar subseção própria.

### 12.3 Buscas e cobertura

24 buscas (14 sobre música, 10 sobre voz), em inglês e português, executadas por dois agentes de pesquisa; 40 URLs abertas com leitura real. Buscas sem resultado útil: "stock music library industry AI impact production music revenue layoffs" (só fóruns e blogs — sem número de demissões, registrado como "sem número encontrado" na seção 3); preços oficiais atuais do Suno (só blogs de terceiros — não citados); status do Google MusicFX (sem fonte aberta); usuários do NotebookLM Audio Overviews (só datas e idiomas — não citado como número); "Gemini Nano on-device audio" (a Live API é em nuvem — nada de áudio generativo on-device do Google encontrado); biometria de voz em bancos brasileiros (só indireto, via relatório do Itaú). Duas buscas falharam por rate-limit (429) e foram refeitas com sucesso.

### 12.4 Efeitos e candidatos cortados no §6

- **"Dublagem automática reorganiza o mercado audiovisual":** cortado. Plausível, mas o mecanismo não se separava de e6 (custo marginal zero na produção de áudio sob encomenda) — era o mesmo efeito em outro setor, violando a regra de parada. A dublagem aparece como contexto na seção 3 (ElevenLabs dubbing).
- **"Ensino de música migra para curadoria":** cortado pelo critério de efeitos proibidos — formação/currículo sem curso nomeado e sem mecanismo específico. Ficaria genérico.
- **Candidato a 4ª raiz "áudio espacial generativo":** recusado no §2 estendido — pertence à fronteira do tema 12 (imagem em movimento/espacial) e não passou na pergunta "o que rompe" hoje; pode reentrar em outro mapa.
- **Candidato "podcast gerado pessoal (NotebookLM) como mídia de massa":** cortado como raiz e como efeito — sem número de adoção encontrado e mecanismo idêntico a e7 (inundação de conteúdo gerado), só muda o formato. Registrado aqui para não virar corte silencioso.
- **Ecológico vazio no STEEP:** a hipótese "voz local economiza energia de datacenter" não achou número; a categoria ficou vazia de propósito, registrado na seção 5.

### 12.5 Ferramentas da turma citadas pela disciplina e não pesquisadas de novo

`1BITDRAGON`, `signalflow`, `pydub`, `Hacklily`, `espnet`, `PastPort`, `@pbji/piper-tts-web`, `@moxxy/plugin-tts-openai`, `@alfe.ai/openclaw-voice`, `expo-ai-kit`: trazidas pela descrição do tema (contexto da disciplina), não abertas nesta rodada — por isso não estão na seção 11 e nenhuma afirmação do documento depende delas além do que a própria disciplina registrou. Whisper aparece só como referência de benchmark citada pela fonte 18.
