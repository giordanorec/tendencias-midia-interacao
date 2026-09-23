---
tema: Voz e som gerativos
slug: voz-e-som-gerativos
autor_login: grec
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-22
horizonte: 2056
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 13
efeitos_ordem_2: 19
efeitos_ordem_3: 19
tecnologias_citadas: [Suno, Suno v6, Suno Studio 2.0, Udio, Moshi, moshi-swift, Mimi, Hibiki, Hibiki-M, Apple SpeechAnalyzer, Kokoro-82M, Kokoro.js, Transformers.js, WebGPU, ElevenLabs Agents, ElevenLabs Impact Program, AudioSeal, Project Euphonia, detector de música gerada da Deezer, Auto-Tune, sintetizador Moog, Whisper, piper-tts-web, ChatTTS, 1BITDRAGON, Hacklily]
fontes: 21
confianca: media
experimento: "Trilha que se desmonta: stems gerados por regeneração recombinados ao vivo por uma interação no navegador, testados em sala contra trilha de biblioteca em loop"
skill_usada: futurizacao-giordano
publico_ok: false
---

# Voz e som gerativos — mapa de futuro até 2056

## 1. Resumo

Três rupturas sustentam este mapa de trinta anos. A **conversa falada contínua e local** — o modelo escuta e fala ao mesmo tempo, no aparelho, sem esperar o turno — faz da voz a porta de entrada de serviços e da tela o recibo, e transforma o silêncio e a interrupção em material de projeto. A **música como material paramétrico** — gerada inteira e, desde agosto/setembro de 2026, editável por trecho, por stem e por MIDI — tira da gravação o estatuto de obra acabada: no Deezer mais da metade das entregas diárias já é gerada, mas o gerado tem 1–3% das escutas. A **voz separada do corpo** — clonável a partir de segundos, transferível entre línguas, recuperável por quem a perdeu — faz a voz deixar de provar quem fala. As três convergem num efeito de segunda ordem: a **proveniência do áudio** (quem captou, quem gerou, sob que licença) vira infraestrutura. O bloqueio tem dono: gravadoras e sociedades de gestão coletiva, que já ganharam em Munique e prendem a geração em jardins murados. O provável em 2056 é um mundo de som abundante em que o valor migra para a presença verificável e para quem controla o modelo.

## 2. O tema

**O que é.** Som e voz produzidos por modelo em vez de captados: fala compreendida e sintetizada em tempo real, diálogo falado de ponta a ponta (*speech-to-speech*, *full-duplex*), tradução falada com a voz do falante preservada, música gerada completa a partir de descrição e depois editada, clonagem de voz. Ficam de fora a imagem em movimento (tema 12) e a IA local em geral (tema 16); daqui só a parte de áudio e voz.

**Onde encosta em mídia e interação.** Em dois lugares. Na **interação**: se a voz é a porta principal, turnos, pausas, sobreposição de falas e o direito de não falar viram especificação de interface, e quem tem fala atípica passa a ser o caso de teste, não a exceção. Na **mídia**: música e voz deixam de ser o registro de um acontecimento e viram saída de um sistema — o que desloca autoria, remuneração, trilha de jogo e publicidade, dublagem e a própria ideia de voz como identidade.

**Por que mapa de futuro e não estado da arte.** Com horizonte de trinta anos, o que interessa não é qual modelo vence, e sim quais suposições deixam de valer: a gravação como obra, o stream como unidade de pagamento, a voz como senha, a língua como fronteira do mercado de áudio, a perda da voz como definitiva. Essas mudanças atravessam atores que não se falam (bancos, gravadoras, dubladores, associações de pacientes, projetistas de interface) e só aparecem seguindo a cadeia causal.

**Premissas deste mapa (do briefing, modo não interativo).** Modo MAPA. Horizonte 2056. Público: quem projeta mídia e interação. Recorte global, com nota sobre o Brasil (subseção 3.6 e efeitos marcados). Descartado de início: o que já é comum em produto de massa. Nenhuma raiz suspeita dada. Viés neutro. Ideias óbvias fora: as que servem para qualquer tema. Falseadores do autor: (a) evidência de que a adoção já passou da maioria inicial (Rogers); (b) evidência de que a tecnologia só melhora o que existe. Profundidade: três ordens. Busca na web usada (WebSearch e WebFetch). Briefing completo: confianças **não** rebaixadas por falta de entrevista. O que o briefing não cobre está na seção 12.2.

**Pedido repetido em três linhas.** Mapear, até 2056, o que muda para quem projeta mídia e interação quando voz e música passam a ser geradas. Recusar o que já é produto de massa. Entregar no formato da disciplina, com a bateria contra o próprio mapa aplicada e registrada.

## 3. Onde isso está hoje

*Âncora feita com acesso à web em 22/09/2026. 22 buscas e 27 aberturas; 21 fontes abertas e citadas na seção 11; aberturas que falharam ou que não passam no verificador estão na seção 12.4.*

### 3.1 O que já existe e funciona

- **Conversa falada de ponta a ponta, aberta, com versão para iPhone.** O Moshi (Kyutai) é um modelo de fala e texto *full-duplex* com o codec de áudio em fluxo Mimi; o repositório `moshi-swift` traz uma implementação em MLX Swift e um app iOS, que o próprio repositório chama de "prova de conceito" e "experimental", código MIT e pesos CC-BY 4.0 [8].
- **Tradução simultânea fala-para-fala preservando a voz.** O Hibiki (Kyutai) traduz em fluxo, pedaço a pedaço, francês → inglês, com transferência de voz regulável por um coeficiente de *classifier-free guidance*; a versão de 1B foi pensada para inferência no aparelho, inclusive smartphone (Hibiki-M) [12].
- **Transcrição local como serviço do sistema operacional.** O SpeechAnalyzer da Apple (WWDC25) transcreve inteiramente no aparelho, áudio longo e distante, com o modelo **fora da memória do app** e **atualizado pelo sistema**; já alimenta Notas, Gravador e Diário [14].
- **Síntese de voz no navegador.** Kokoro.js roda o Kokoro-82M 100% no navegador (WASM, depois WebGPU); o modelo quantizado cai de 326 MB para 86 MB [19]. A turma trouxe `@pbji/piper-tts-web` na mesma linha.
- **Agentes de voz como negócio.** A ElevenLabs declara ter fechado 2025 com US$ 350 milhões de receita recorrente anual e passado de US$ 500 milhões nos quatro primeiros meses de 2026, puxada por agentes de voz em atendimento, vendas e recrutamento [15].
- **Recuperação da própria voz.** O Impact Program da ElevenLabs dá acesso gratuito a clonagem para pessoas com ELA, atrofia de múltiplos sistemas e câncer de boca, com meta declarada de um milhão de pessoas [7]. O Project Euphonia (Google) reúne mais de 1,5 milhão de enunciados de ~3.000 falantes com fala atípica, e trabalhos anteriores do projeto mostraram reconhecimento personalizado superando transcritores humanos para essas pessoas [18].
- **Música gerada e agora editável.** O Suno lançou o Studio 2.0 em 13/08/2026 (DAW no navegador, MIDI, efeitos, sintetizador) e a família v6 em 09/09/2026, com edição de trechos, *mashup*, amostragem e isolamento de batida, e criação a partir de texto, áudio, imagem e vídeo; em 17/09/2026 passou a gerar stems a partir de clipes MIDI [2].
- **Marca d'água localizada para fala sintética.** AudioSeal (Meta, ICML 2024) detecta amostra a amostra se o trecho foi marcado, com detector até duas ordens de grandeza mais rápido que os anteriores [17].

### 3.2 O que existe e ainda não funciona

- **Full-duplex de verdade.** Um levantamento de junho/2026 (18 autores) conclui que o termo descreve capacidades muito diferentes e que, mesmo em sistemas que "suportam" duplex, o comportamento observado continua preso aos padrões de interação dos dados de treino e avaliação; os dados públicos são pequenos perto dos corpora industriais não divulgados [3].
- **Tradução com voz preservada em muitas línguas.** O Hibiki cobre um par (francês → inglês) [12]. Não achei par com português.
- **Fala atípica fora do inglês.** A expansão do Euphonia cobre espanhol (38 falantes), francês (14), japonês (76) e hindi (4); **o português não aparece**, e o conjunto de dados não é aberto a terceiros [18].
- **Música gerada editável por separação real.** Os stems do Suno são obtidos por regeneração/estimativa dos papéis musicais, não por gravação separada; a qualidade da recombinação não foi medida por fonte independente aberta nesta rodada (seção 12).
- **Marca d'água que o criminoso use.** A marcação existe para quem quer cumprir regra; nada obriga o uso criminoso a marcar (ver e13).

### 3.3 Quem constrói

Kyutai (laboratório aberto, Moshi, Hibiki); Apple (fala local como serviço do sistema); ElevenLabs (voz clonada, agentes, programa de acessibilidade); Suno e Udio (música gerada); Meta (AudioSeal); Google (Euphonia); comunidade aberta do navegador (Transformers.js, Kokoro.js, piper-tts-web). Do lado de quem regula e bloqueia: GEMA, Universal, União Europeia (AI Act), FCC, e no Brasil o movimento dos dubladores e o Senado.

### 3.4 Números de adoção

- **Deezer:** entregas diárias de faixas geradas passaram de 10 mil (10%) em jan/2025 a 90 mil por dia, mais de 50% das entregas, em jun/2026 [1]. O comunicado da Deezer (aberto nesta rodada, fora da seção 11 porque responde 403 ao verificador — seção 12.4) acrescenta: 1–3% das escutas, até 85% dessas escutas fraudulentas em 2025, exclusão de recomendação algorítmica e de playlist editorial, remoção de faixas sem escuta há seis meses, etiqueta visível para o ouvinte desde junho/2026, e uma pesquisa com 9.000 pessoas em oito países em que 97% não distinguiram música gerada de humana num teste cego e 80% querem etiqueta.
- **Paradas:** "Walk My Walk", do artista gerado Breaking Rust, chegou ao 1º lugar de Country Digital Song Sales da Billboard em nov/2025, com mais de três milhões de escutas no Spotify em menos de um mês [10]. É parada de nicho de vendas digitais, não a parada principal.
- **Projeção de mercado (não é medida):** o estudo da CISAC/PMP Strategy (dez/2024) projeta 24% da receita dos criadores de música em risco até 2028 e 60% da música de biblioteca B2B gerada até 2028 [9].
- **Voz conversacional no consumo:** sem número encontrado sobre a fração de usuários de assistentes que usam modo de voz (busca 16, seção 12.3).

**Leitura contra o falseador (a).** Nas *entregas* do Deezer o gerado passou de 50%, o que parece "maioria". Mas a adoção que importa para o público do mapa é a de **escuta** (1–3%) e a de **uso em projeto**; nas duas, o tema está abaixo de 10%. Registro: o falseador foi testado e não derrubou o tema, mas o dado de entregas mostra que a oferta já é massiva — a escassez passou a ser atenção, e o mapa foi escrito com isso.

### 3.5 Litígio e regra

- **GEMA × Suno** (LG München I, 42 O 763/25, 31/07/2026): o tribunal entendeu que o modelo **memorizou** obras completas — títulos e estilo como prompt bastavam para reproduzir obras reconhecíveis — e que guardar é reproduzir; proibiu treino, oferta e saídas com seis composições; cabe recurso [5].
- **Universal × Udio:** acordo com licenças de fonograma e edição, plataforma licenciada para 2026 em que o fã remixa canções de artistas que autorizaram, e o que é gerado **não sai da plataforma** ("jardim murado") [6].
- **AI Act, artigo 50:** áudio sintético marcado de forma legível por máquina a partir de 02/08/2026 (até 02/12/2026 para sistemas já no mercado), com aviso audível previsto no código de prática e dever de revelar deepfake de pessoa real [13].
- **FCC** (08/02/2024): voz gerada por IA em ligação conta como "voz artificial" do TCPA — exige consentimento prévio, identificação e opção de saída [16].
- **Voz como senha:** repórteres entraram na própria conta do Lloyds (2023) e do Santander e Halifax (2024) com voz clonada; três segundos de áudio dão ~85% de semelhança segundo pesquisadores da McAfee citados; o texto é de um executivo que declara construir IA de voz [4].

### 3.6 Nota sobre o Brasil

Os dubladores levaram ao Senado a SUG 7/2025 (Adriana Torres, 30 anos de ofício), que torna obrigatório dublador profissional em obra estrangeira exibida no Brasil e alcançou 20 mil apoios em 15/05/2025; está na CDH [11]. O PL 2338/2023 (marco de IA) é a outra frente citada pelo movimento Dublagem Viva (busca 11; página da Câmara não usada nesta rodada). O português **não** está na expansão do Euphonia [18] nem no Hibiki [12]. O Brasil entra na pesquisa da Deezer (comunicado, seção 12.4). E o áudio de WhatsApp é aqui um meio de comunicação central — o que torna a raiz C (voz separada do corpo) mais aguda no Brasil do que na média global (inferência minha, sem número aberto).

## 4. As disrupções-raiz

### 4.1 Raiz A — Conversa falada contínua e local

A voz deixa de ser comando por turno ("ok, fulano… pausa… resposta") e vira conversa em que o sistema escuta enquanto fala, é interrompido, sobrepõe, espera, e roda no aparelho.

1. **O que rompe.** A tela como porta principal de serviço; o turno como unidade de interação; a cabine de intérprete; o atendente humano como primeira voz; a suposição de que quem usa fala "normal".
2. **Por que agora.** Modelos *full-duplex* abertos com codec em fluxo (Moshi/Mimi) [8]; tradução simultânea com voz preservada que cabe em smartphone (Hibiki-M) [12]; transcrição local servida pelo sistema operacional [14]; TTS humano em 86 MB no navegador [19]. Há cinco anos o pipeline era ASR → texto → TTS na nuvem, com latência que impedia sobreposição.
3. **Onde está na difusão.** Assistente por turno é maduro (recusado como raiz). A conversa contínua local está entre **demo pública** e **produto de nicho**; os agentes de voz empresariais (nuvem) estão em **adoção precoce** [15]. Emergente.
4. **O que falta.** Dados públicos de conversa real (o levantamento aponta esse gargalo [3]); pares de língua além do francês → inglês; fala atípica fora do inglês; que o comportamento duplex saia do laboratório e aguente ruído e várias pessoas; um modelo de custo em que rodar local não dependa só do dono do sistema operacional.

*Candidato recusado:* "assistente de voz" (Siri/Alexa/Google): adoção em maioria há mais de uma década nos smartphones; tratado como contexto.

### 4.2 Raiz B — Música como material paramétrico

A canção deixa de ser gravação fixa e vira objeto gerado e regenerável: instrumental, voz e mixagem juntos, depois desmontados em trechos, stems e MIDI por regeneração.

1. **O que rompe.** A gravação como obra acabada; a trilha de biblioteca como catálogo; o stream como unidade neutra de pagamento; a execução instrumental como condição de ser músico; o registro de obra baseado em fonograma.
2. **Por que agora.** Modelos que convencem na primeira escuta (97% não distinguem no teste cego da Deezer, seção 3.4) e, desde 13/08 e 09/09/2026, edição por trecho, stem e MIDI dentro do gerador [2]. O "não entrega os canais separados", sinal fraco da amostra do professor, deixou de valer em parte em menos de um semestre.
3. **Onde está na difusão.** Na oferta, massiva (>50% das entregas no Deezer [1]); na escuta, **produto de nicho** (1–3%); no uso profissional em trilha, **adoção precoce** (sem número aberto). Emergente.
4. **O que falta.** Estabilidade jurídica (Munique [5] e o jardim murado [6] apontam para licença obrigatória); stems que se recombinem sem costura audível (não medido por fonte independente); um modelo de remuneração que não seja por stream; aceitação cultural fora de nicho (a parada de nicho já foi, a principal não [10]).

*Candidato recusado:* "DAW, sampler e separação de fontes por máscara": maduros há décadas; contexto.

### 4.3 Raiz C — Voz separada do corpo

A voz vira dado copiável, transferível entre línguas e preservável: segundos de amostra bastam para clonar, e a voz de uma pessoa pode falar o que ela não disse, na língua que ela não fala, depois que ela não puder mais falar.

1. **O que rompe.** A voz como prova de identidade e de presença (telefone, áudio de mensagem, autenticação bancária); a voz como propriedade exclusiva do corpo; a hora de estúdio como unidade de venda da dublagem; a perda da voz como definitiva.
2. **Por que agora.** Clone de ~3 s com ~85% de semelhança [4]; transferência de voz regulável na tradução [12]; clone a partir de ~10 min de gravação antiga para pacientes [7]. Há cinco anos o banco de voz exigia horas de frases gravadas.
3. **Onde está na difusão.** Entre criminosos e em fraude, **adoção precoce** documentada [4]; no uso legítimo de consumo (licença de voz, banco de voz pessoal), **produto de nicho**. Emergente.
4. **O que falta.** Direito de voz com contorno claro (no Brasil, voz isolada não está explícita na lei de direito autoral — busca 11); proveniência que funcione no sentido "prove que é humano", e não só "marque o sintético" [13][17]; banco de voz para línguas e sotaques fora do inglês.

*Candidato recusado como raiz separada:* "TTS robótico/leitor de tela": maduro; contexto.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: Conversa falada contínua e local (full-duplex, fala-para-fala, no aparelho)
    efeitos:
      - id: e1
        ordem: 1
        efeito: Bancos, operadoras e serviços públicos passam a ter a conversa falada com agente como porta principal de atendimento e a tela como recibo do que foi dito
        sinal: forte
        prazo: 2032
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Falar com um atendente humano deixa de ser a primeira etapa e vira escalada cobrada ou reservada a clientes de maior valor
            sinal: medio
            prazo: 2036
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: As normas de atendimento ao consumidor (no Brasil, as regras do SAC; nos EUA, o TCPA aplicado pela FCC) passam a fixar prazo máximo para chegar a uma voz humana
                sinal: fraco
                prazo: 2042
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Projetar interface passa a incluir especificar estados de conversa — escutar, falar, esperar, falar junto — e o que o agente faz quando é interrompido
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: O diagrama de estados de conversa vira entregável padrão de designer de interação, com ferramenta própria de protótipo e teste, como o wireframe foi para a tela
                sinal: fraco
                prazo: 2042
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A tradução simultânea com a voz do próprio falante sai da cabine de intérprete e passa a rodar no fone e no celular de quem ouve
        sinal: medio
        prazo: 2034
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Intérpretes de conferência e de tribunal deixam de traduzir em tempo real e passam a certificar terminologia e responder pelos erros da tradução sintética
            sinal: fraco
            prazo: 2040
            confianca: baixa
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Audiências e consultas passam a arquivar lado a lado o áudio original e a tradução sintética, com o nome de quem certificou cada trecho
                sinal: fraco
                prazo: 2046
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Podcast, aula e transmissão ao vivo passam a ser publicados uma vez e ouvidos em dezenas de línguas na voz do autor, e a língua deixa de segmentar o mercado de criadores de áudio
            sinal: medio
            prazo: 2038
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Criadores de áudio em português passam a competir no mesmo catálogo que os anglófonos, e o que os diferencia vira sotaque, referência local e presença, não a língua
                sinal: fraco
                prazo: 2045
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: Pessoas com fala atípica (disartria, ELA, gagueira) passam a ser entendidas por modelos ajustados à fala delas, em vez de terem de se ajustar ao reconhecedor padrão
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Quando a voz é a porta principal do serviço, reconhecer fala atípica deixa de ser recurso de acessibilidade e vira requisito de conformidade da interface
            sinal: fraco
            prazo: 2038
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Associações de pacientes passam a negociar o acesso aos conjuntos de fala atípica como bem coletivo, e línguas sem conjunto (o português entre elas) viram prioridade de política pública
                sinal: medio
                prazo: 2042
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Quem não pode ou não quer falar em voz alta — em escritório aberto, transporte, por surdez ou por privacidade — mantém texto e tela, e a voz primária divide as interfaces em duas pistas que precisam ser projetadas juntas
        sinal: fraco
        prazo: 2034
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Fala sussurrada e subvocal (sensor muscular, leitura labial por câmera) recebe investimento como resposta à exposição social de falar com a máquina em público
            sinal: fraco
            prazo: 2045
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Transporte e espaços públicos adotam zonas sem conversa com agente, como os vagões silenciosos para o celular
                sinal: fraco
                prazo: 2048
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: Os donos de sistema operacional capturam a fala local como serviço do sistema — modelo fora do app, atualizado por eles — e passam a controlar quem acessa o microfone inteligente
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Agentes de voz de terceiros ficam dependentes da API do sistema no celular, e o navegador com WebGPU vira a rota de fuga para voz independente
            sinal: medio
            prazo: 2036
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A Comissão Europeia, pelo Digital Markets Act, passa a tratar o acesso à escuta contínua do aparelho como o tratou o navegador padrão, com tela de escolha de agente de voz
                sinal: fraco
                prazo: 2042
                confianca: baixa
  - disrupcao: Música como material paramétrico (gerada inteira e editável por trecho, stem e MIDI)
    efeitos:
      - id: e6
        ordem: 1
        efeito: Trilha para vídeo, publicidade e jogo deixa de ser escolhida em biblioteca e passa a ser gerada sob medida para cada peça, na duração e no corte certos
        sinal: medio
        prazo: 2032
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Compositores de trilha deixam de vender faixas e passam a licenciar um estilo treinado com regras de variação, cobrado por uso
            sinal: medio
            prazo: 2038
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Sociedades de gestão coletiva (ECAD no Brasil, GEMA na Alemanha) passam a arrecadar por geração a partir de estilo e catálogo licenciado, não só por execução de obra
                sinal: medio
                prazo: 2046
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Música de jogo passa a ser regenerada em tempo real a partir do estado da partida, trocando stems e trechos em vez de alternar faixas gravadas
            sinal: medio
            prazo: 2036
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: A trilha de jogo deixa de existir como álbum fechado; o que se publica e se coleciona é o tema e o modelo que gera as variações
                sinal: fraco
                prazo: 2045
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: Plataformas de streaming separam o catálogo da enxurrada gerada — etiqueta, exclusão da recomendação, remoção por falta de escuta — e o stream deixa de ser unidade neutra de pagamento
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: A remuneração passa a privilegiar artista verificado como humano, e o selo de feito por pessoa ganha valor de mercado como o selo de orgânico
            sinal: medio
            prazo: 2036
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A apresentação ao vivo e a presença física voltam a ser a maior parte da renda do músico, porque é a parte que o gerado não entrega
                sinal: fraco
                prazo: 2044
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: Compor passa a significar especificar, escolher e editar material gerado, e tocar vira ofício de presença separado de compor
        sinal: medio
        prazo: 2034
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Músicos de sessão perdem o trabalho de demo, jingle e trilha de baixo orçamento, como aconteceu com o sintetizador nos anos 1960
            sinal: medio
            prazo: 2036
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Sindicatos de músicos (AFM nos EUA, OMB e sindicatos estaduais no Brasil) negociam cota de músico humano em publicidade e cinema, repetindo o acordo do AFM contra o sintetizador
                sinal: fraco
                prazo: 2042
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: O ouvinte passa a receber a canção e reescrevê-la — estilo, letra, andamento — dentro do aplicativo licenciado, e a versão do fã vira produto
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: A forma canônica de uma canção deixa de ser a gravação e passa a ser a obra paramétrica registrada — melodia, letra e regras —, parecida com a partitura antes do disco
                sinal: fraco
                prazo: 2050
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: Gravadoras e sociedades de gestão coletiva prendem a geração em plataformas licenciadas de onde o gerado não sai e processam os modelos abertos
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: Modelos de música treinados só com dado licenciado ou livre ficam atrás em qualidade, e a geração de alto nível se concentra em poucas empresas com catálogo
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: Gêneros regionais pouco presentes no catálogo das majors (brega-funk, forró, piseiro) ficam mal servidos, e selos e coletivos locais treinam modelos próprios com o seu repertório
                sinal: fraco
                prazo: 2044
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: A tese de Munique de que memorizar é reproduzir se espalha e obriga quem treina a documentar e auditar o conjunto de treino obra a obra
            sinal: medio
            prazo: 2035
            confianca: media
            efeitos:
              - id: e9.2.1
                ordem: 3
                efeito: O direito de o artista retirar sua obra de um modelo treinado vira cláusula de contrato, e a desaprendizagem certificada vira serviço técnico
                sinal: fraco
                prazo: 2045
                confianca: baixa
  - disrupcao: Voz separada do corpo (clonável a partir de segundos, transferível entre línguas, preservável)
    efeitos:
      - id: e10
        ordem: 1
        efeito: Bancos e operadoras deixam de aceitar a voz como fator de autenticação
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Ligação e áudio de mensagem perdem a presunção de autenticidade, e provar a origem do áudio (assinatura no aparelho que captou, marca d'água, marcação legal) vira camada da rede de telefonia e dos mensageiros
            sinal: medio
            prazo: 2038
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: No Brasil, áudio de WhatsApp sem proveniência passa a ser tratado como boato por padrão, e tribunais exigem cadeia de custódia para aceitá-lo como prova
                sinal: fraco
                prazo: 2045
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: Famílias e empresas adotam verificação fora da voz — palavra-código, retorno por outro canal — e a confiança migra do timbre para o procedimento
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e10.2.1
                ordem: 3
                efeito: Atender ligação de número desconhecido deixa de ser prática comum, e a chamada espontânea passa a vir só de contatos verificados
                sinal: fraco
                prazo: 2042
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: A voz vira ativo licenciável separado da pessoa — atores e cantores licenciam o timbre por uso, com contrato de semelhança e permissão por projeto
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: A dublagem brasileira troca hora de estúdio por licença de voz com direção, e a disputa sobre voz como direito de personalidade (SUG 7/2025, PL 2338/2023) decide quem fica com a renda
            sinal: medio
            prazo: 2036
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: A voz de um dublador sobrevive a ele — herdeiros administram o espólio vocal, e personagens mantêm a mesma voz por gerações
                sinal: fraco
                prazo: 2050
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: Perder a voz deixa de ser definitivo — pessoas com ELA e câncer de boca falam com a própria voz reconstruída de gravações antigas
        sinal: medio
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: Gravar a própria voz de forma deliberada vira cuidado preventivo, oferecido por serviços de saúde como a coleta de material para um banco
            sinal: fraco
            prazo: 2040
            confianca: baixa
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: Famílias passam a manter a voz de parentes mortos em agentes, e o uso da voz após a morte ganha regra em testamento e em lei de sucessão
                sinal: fraco
                prazo: 2045
                confianca: baixa
      - id: e13
        ordem: 1
        efeito: A marcação obrigatória de áudio sintético e a responsabilidade de quem o implanta tornam a voz clonada mais lenta e cara no uso legítimo, enquanto o uso criminoso segue sem marca
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: Como só quem cumpre a regra marca, a ausência de marca não prova nada, e a marca d'água passa a provar conformidade, não verdade
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: A estratégia se inverte de detectar o sintético para assinar o humano no momento da captura, e o áudio não assinado passa a carregar o ônus da dúvida
                sinal: fraco
                prazo: 2044
                confianca: baixa
```

### 5.1 Mecanismos — Raiz A (conversa falada contínua e local)

- **e1** — porque a conversa contínua elimina a latência e o turno rígido que tornavam o atendimento por voz pior que a tela, o custo por atendimento de um agente cai abaixo do humano e da URA; a tela passa a servir de comprovante. *Sinal forte:* receita de agentes de voz declarada pela ElevenLabs [15], regra da FCC que pressupõe ligações com voz gerada e já as regula [16], ataques e uso em bancos [4]. *Classe de referência:* a própria ElevenLabs foi de US$ 350 mi a US$ 500 mi em quatro meses; referência histórica, a URA de tons (memória, seção 8) levou cerca de uma década para virar padrão de SAC. Prazo 2032.
- **e1.1** — porque, quando o agente resolve a maior parte, o humano vira custo marginal a justificar, e a empresa o reserva a quem paga ou a quem vale mais. *Troca de ator:* do cliente/empresa para o atendente. Sinal médio (a escalada "falar com humano" existe nos agentes; artefato: [15]).
- **e1.1.1** — porque a escalada paga gera reclamação em massa, e as normas de SAC já fixam tempo de atendimento; o mecanismo é o regulador de consumo existente estendendo a regra que já tem. Nomeado: regras do SAC (Brasil, decreto de 2022 — citado de memória, seção 8) e TCPA/FCC [16]. Confiança baixa.
- **e1.2** — porque o levantamento de 2026 [3] já propõe os estados IDLE/LISTEN/SPEAK/WAIT/DUAL e mostra que o comportamento duplex depende do que é modelado; quem projeta passa a especificar esses estados. *Troca de mecanismo:* de técnica de modelo para prática de projeto. Sinal médio (o levantamento e o desafio HumDial do ICASSP 2026, visto na busca 3).
- **e1.2.1** — porque todo artefato de projeto que se repete ganha ferramenta; classe de referência: o wireframe de tela virou entregável padrão cerca de uma década depois da web comercial (memória). Confiança baixa.
- **e2** — porque o Hibiki mostra tradução em fluxo com voz preservada num modelo que cabe no celular [12]; o que falta é par de língua. *Classe de referência:* tradução automática de texto — do neural em produção (2016, memória) a presença em todo navegador levou uns cinco anos; aqui cada par depende de dado de fala paralela, mais escasso. Prazo empurrado para 2034 na bateria (seção 7).
- **e2.1** — porque, quando a tradução é barata e contínua, o gargalo vira responsabilidade: alguém tem de responder pelo termo jurídico ou clínico errado. Confiança rebaixada (seção 7).
- **e2.1.1** — porque, se há responsabilidade atribuída, há registro; o arquivo do processo passa a guardar os dois áudios.
- **e2.2** — porque a voz preservada tira da dublagem a perda de identidade do autor; o mesmo episódio vira catálogo em várias línguas. *Teste da causa solta:* sem a raiz A (tradução em fluxo na voz do autor), a dublagem por clonagem da raiz C já faria parte disso, offline; mantido na raiz A porque o recorte é o **ao vivo** (aula, transmissão).
- **e2.2.1** — porque sem barreira de língua a concorrência passa a ser global, e o diferencial desloca para o que não se traduz. Nota Brasil.
- **e3** — porque modelos personalizados de reconhecimento já superaram transcritores humanos para fala atípica no Euphonia [18], e a reconstrução de voz para pacientes está em programa gratuito [7]. Sinal médio (dois artefatos). Prazo 2032: referência é a própria progressão do Euphonia (2019 → conjunto de 3.000 falantes em 2025, seis anos, de memória para o início).
- **e3.1** — porque se a voz é a porta principal (e1), quem não é reconhecido fica fora do serviço, e a exclusão vira questão de conformidade (lei de acessibilidade) e não de boa vontade. *Convergência:* e1 × e3.
- **e3.1.1** — porque o conjunto de fala atípica é caro de coletar e o do Euphonia não é aberto [18]; quem tem o dado (as pessoas com a condição) passa a ter poder de negociação. Português ausente hoje. Sinal médio (um artefato: o conjunto fechado).
- **e4 (retroação)** — porque falar em público expõe conteúdo e pessoa; a voz primária freia a si mesma onde o contexto social não permite. *Troca de ator:* quem não fala. Sinal fraco (nenhum artefato aberto nesta rodada).
- **e4.1** — porque a demanda por "falar sem ser ouvido" cria mercado para entrada silenciosa; sem fonte aberta, sinal fraco, prazo 2045 (empurrado na bateria).
- **e4.1.1** — classe de referência: o vagão silencioso para celular (memória). Confiança baixa.
- **e5 (quem bloqueia/captura)** — porque o SpeechAnalyzer roda fora da memória do app e é atualizado pelo sistema [14], quem faz o sistema operacional decide qualidade, línguas e acesso da fala local. *Ator com incentivo:* Apple e Google.
- **e5.1** — porque apps nativos ficam presos ao que a API oferece, e o navegador com WebGPU já roda TTS de qualidade sem permissão do sistema [19]. Sinal médio (Kokoro.js; piper-tts-web da turma).
- **e5.1.1** — porque o DMA já tratou navegador e loja como pontos de controle; a escuta contínua é o próximo. Nomeado: Comissão Europeia/DMA. Confiança baixa.

**Regra de parada (raiz A).** Derivei "o teclado desaparece" como filho de e1 e parei: não havia troca de ator nem de mecanismo, era e1 "mais adiante" — e é extrapolação (seção 7).

### 5.2 Mecanismos — Raiz B (música como material paramétrico)

- **e6** — porque gerar uma trilha na duração e no corte da peça, e depois ajustar trecho e stem [2], custa menos que licenciar e editar faixa de biblioteca. A CISAC projeta 60% da biblioteca B2B gerada até 2028 [9] — projeção de parte interessada, não medida; por isso o sinal foi rebaixado de forte para médio na bateria. *Classe de referência:* a biblioteca digital substituiu a encomenda de trilha para vídeo corporativo em cerca de dez anos (memória). Prazo 2032.
- **e6.1** — porque, se a faixa não vale nada, o que vale é o estilo reconhecível e o direito de usá-lo; a plataforma Universal–Udio já pressupõe permissão do artista para o fã gerar a partir dele [6]. *Troca de ator:* de produtora para compositor.
- **e6.1.1** — porque a gestão coletiva arrecada pelo que é medível; se a execução de obra perde peso e a geração a partir de catálogo cresce, a base de arrecadação muda. GEMA já cobra pela via judicial [5]. Nomeado ECAD. Confiança baixa.
- **e6.2** — porque stems e trechos regeneráveis permitem trocar a música pelo estado do jogo sem compor todas as variações; a turma trouxe o 1BITDRAGON (música de jogo sem teoria) e o Suno já gera stems de MIDI [2]. Sinal médio.
- **e6.2.1** — porque, se a música é variação contínua, não há gravação única a publicar. Confiança baixa.
- **e7** — porque a oferta gerada (>50% das entregas [1]) é quase toda sem escuta e com muita fraude, a plataforma protege o pool de pagamento filtrando. Sinal forte: Deezer (etiqueta, exclusão, remoção [1]), Bandcamp (proibição), Tidal (desmonetização) — todos relatados em [1]. Prazo 2030.
- **e7.1** — porque filtrar exige saber o que é humano, e o que é escasso ganha preço; o selo "feito por pessoa" é a contrapartida da etiqueta de gerado. *Troca de mecanismo:* de moderação para prêmio.
- **e7.1.1** — porque presença física é o que o gerado não entrega; classe de referência: depois que a gravação perdeu valor com o compartilhamento de arquivos nos anos 2000, o ao vivo passou a pesar mais na renda dos músicos (memória, seção 8). Confiança baixa.
- **e8** — porque edição por trecho, stem e MIDI [2] transforma o ato de compor em escolher entre variações; *teste da especificidade:* troque a raiz por "DAW mais barata" e a frase não serve — a DAW exige tocar ou programar cada nota.
- **e8.1** — porque o trabalho de demo e jingle é o que a trilha gerada substitui primeiro; *classe de referência:* o sintetizador Moog (1964) levou o AFM a negociar restrições ao seu uso em trabalho comercial por medo de substituição [21]. Reescrito na bateria (era um efeito genérico sobre "cursos de música").
- **e8.1.1** — porque o precedente existe e o sindicato sabe usá-lo [21]. Confiança baixa.
- **e8.2** — porque a plataforma licenciada Universal–Udio foi desenhada para o fã remixar canções de artistas que autorizaram [6]; a versão do fã vira produto dentro do jardim murado.
- **e8.2.1** — porque, se toda gravação é uma instância, o que se registra é o que gera as instâncias; a turma trouxe o Hacklily (partitura como código). Prazo empurrado para 2050 na bateria.
- **e9 (quem bloqueia)** — porque o catálogo é o ativo das gravadoras e das sociedades, e o litígio funciona: Munique proibiu o Suno de usar seis obras e mandou apurar receita [5]; a Universal fechou com a Udio exigindo que nada saia da plataforma [6]. Sinal forte (GEMA × OpenAI 2025, GEMA × Suno 2026, Universal × Udio).
- **e9.1** — porque dado licenciado é menor e mais caro que a raspagem; rebaixado para confiança baixa na bateria (qualidade pode vir de outro lugar, como dado sintético).
- **e9.1.1** — porque o catálogo das majors sub-representa gêneros regionais do Brasil (inferência sem número), e quem tem esse repertório — selos e coletivos locais — ganha motivo para treinar o próprio modelo. Nota Brasil.
- **e9.2** — porque a tese da memorização [5] torna o conjunto de treino prova judicial; quem treina precisa saber obra a obra o que usou.
- **e9.2.1** — porque, com o conjunto documentado, retirar uma obra vira pedido executável.

**Teste da causa solta (raiz B).** e7.1 ("selo de humano") poderia vir só da raiz C (desconfiança da voz). Mantido na B porque o mecanismo de pagamento por stream é específico da música; a convergência com C está registrada em 5.4.

### 5.3 Mecanismos — Raiz C (voz separada do corpo)

- **e10** — porque três segundos de áudio bastam para um clone convincente e repórteres entraram nas próprias contas com voz clonada no Lloyds, Santander e Halifax [4]. Sinal forte (três casos nomeados). Prazo 2030: bancos trocam fator de autenticação em ciclos de poucos anos quando há perda (classe de referência: a troca de senha por token/SMS nos bancos, memória).
- **e10.1** — porque, se a voz não prova, algo tem de provar; o AI Act já exige marcação legível por máquina [13], a FCC já regula voz gerada em ligação [16], e há marca d'água localizada pronta [17]. *Troca de ator:* do banco para operadoras e mensageiros.
- **e10.1.1** — porque o áudio de WhatsApp tem peso social e judicial no Brasil maior que a média (inferência); sem proveniência, ele perde o peso. Confiança baixa.
- **e10.2** — porque a recomendação de segurança já é "voz nunca como chave única" [4]; a prática migra para dentro da família. Sinal médio.
- **e10.2.1** — porque, se ligação de desconhecido é presumida fraude, o hábito de atender some. *Teste da causa solta:* spam de telemarketing já empurrava nesse sentido; mantido porque a clonagem acrescenta o golpe com voz de parente, que o spam não tinha. Confiança baixa.
- **e11** — porque a voz clonável pode ser usada sem a pessoa; o contrato de semelhança transforma o risco em licença. A plataforma Universal–Udio exige permissão do artista [6].
- **e11.1** — porque a dublagem vende hora de estúdio e a voz clonada dispensa a hora; os dubladores já pedem proteção legal (SUG 7/2025) [11]. Nota Brasil.
- **e11.1.1** — porque, se a voz é licença, ela entra na herança. Prazo 2050. Confiança baixa.
- **e12** — porque dez minutos de gravação antiga bastam para reconstruir a voz, e há programa gratuito para ELA, atrofia de múltiplos sistemas e câncer de boca [7]. Sinal médio (dois artefatos: [7] e [18]). Prazo empurrado de 2028 para 2030 na bateria.
- **e12.1** — porque, se a reconstrução funciona melhor com amostra boa, gravar antes vira cuidado; confiança rebaixada na bateria.
- **e12.1.1** — porque a voz preservada não distingue paciente vivo de morto; a fronteira com o tema 19 (companheiros digitais) é aqui. Confiança baixa.
- **e13 (retroação)** — porque marcar custa e expõe quem cumpre a regra [13], enquanto quem frauda não marca. Freia o uso legítimo da raiz.
- **e13.1** — porque a regra só alcança quem já é cumpridor; a marca não separa verdadeiro de falso.
- **e13.1.1** — porque, se detectar o falso não funciona, resta assinar o verdadeiro; *convergência* com e10.1.

### 5.4 Cruzamentos

**Convergência 1 — proveniência como infraestrutura (a principal do mapa).** Três ramos chegam ao mesmo efeito de segunda ordem por mecanismos diferentes: e7.1 (a plataforma precisa saber o que é humano para pagar), e10.1 (a rede precisa saber a origem do áudio para confiar) e e13.1/e13.1.1 (a marca do sintético não prova, então é preciso assinar o humano). Música, telefonia e regulação exigem a mesma coisa: prova de origem na captura. Quem projeta mídia e interação vai desenhar a interface dessa prova (o selo, o aviso audível, a verificação).

**Convergência 2 — a voz primária torna a fala atípica um requisito.** e1 (voz como porta de serviço) × e3 (modelos ajustados à fala atípica) → e3.1.

**Convergência 3 — a obra vira licença.** e6.1 (estilo licenciado), e8.2 (canção reescrita pelo fã) e e11 (timbre licenciado) chegam ao mesmo lugar: o que se vende é o direito de gerar a partir de alguém, não o objeto gerado.

**Retroalimentação.** e9.2 → e9.2.1 → raiz B: a auditoria obra a obra e a desaprendizagem encarecem o treino e **enfraquecem** a raiz B aberta, reforçando a fechada (e9). E e13.1.1 (assinar o humano) **reforça** a raiz C ao dar ao áudio verificado um valor que o gerado não tem, o que aumenta o incentivo a falsificar a assinatura (wildcard W2).

**Contradição.** e2.2 (a língua deixa de segmentar o mercado de áudio) × e9.1.1 (gêneros regionais mal servidos pelos modelos licenciados). Um prevê homogeneização do mercado; o outro, fragmentação por catálogo. O que decide: se os modelos de voz e música forem treinados por poucas empresas com catálogo global (vale e2.2 com viés anglófono), ou se o dado regional virar ativo com dono local (vale e9.1.1).

**Cobertura STEEP e quem perde.** Social: e3, e4, e10.2, e12. Tecnológico: e1.2, e5, e13. Econômico: e1, e6, e7, e8. Ecológico: **vazio** — não achei efeito específico desta raiz (o custo energético de gerar música em massa é genérico a toda IA; seção 12). Político: e5.1.1, e9, e11.1. **Quem perde:** atendentes (e1.1), intérpretes (e2.1), compositores de biblioteca (e6), músicos de sessão (e8.1), dubladores (e11.1), quem não pode falar em público (e4), modelos abertos de música (e9.1), vítimas de golpe (e10).

## 6. Sinais fracos e wildcards

### Sinais fracos

1. **A música gerada ficou editável em menos de um semestre.** O "não entrega os canais separados" da amostra do professor era o limite revelador; em 13/08/2026 o Studio 2.0 trouxe MIDI e separação, em 09/09/2026 o v6 trouxe edição de trecho e isolamento de batida, e em 17/09/2026 stems a partir de MIDI [2]. *O que mudaria:* se os stems forem recombináveis sem costura, e6.2 e e8 antecipam em anos. *Sinal observável:* um produtor independente publicar teste de nulidade (soma dos stems contra a mixagem) com resíduo inaudível; ou a primeira trilha de jogo comercial feita com stems regenerados creditada como tal.
2. **O conjunto de fala atípica é fechado e não tem português.** Euphonia: 3.000 falantes, não disponível a terceiros, sem português na expansão [18]. *O que mudaria:* define quem pode fazer interface de voz acessível (e3.1.1). *Sinal observável:* uma associação de pacientes brasileira (ELA, AVC, paralisia cerebral) organizar coleta própria ou uma chamada pública de financiamento para fala atípica em português.
3. **A semelhança de voz virou um botão.** No Hibiki a fidelidade da voz transferida é regulada por um coeficiente, e demais fidelidade piora a tradução [12]. *O que mudaria:* a voz deixa de ser "sua ou não" e vira grau — a regulação da semelhança (e11) teria de lidar com escala contínua. *Sinal observável:* contrato ou lei que fixe grau de semelhança permitido em vez de proibir/permitir.
4. **O gerado serve mais à fraude que à escuta.** Até 85% das escutas de faixas geradas no Deezer foram fraudulentas em 2025 (comunicado da Deezer, seção 12.4). *O que mudaria:* a música gerada como veículo de fraude de pagamento, não como gosto, reforça e7 e enfraquece e8.2. *Sinal observável:* a fração de escuta legítima de gerado passar de 5% em alguma plataforma grande.

### Wildcards

- **W1 — Um artista sintético lidera a parada principal (Hot 100 ou equivalente global) por várias semanas.** *Mecanismo:* uma faixa gerada, com rosto e história inventados, viraliza em vídeo curto, como "Walk My Walk" já fez em nicho [10], e as regras de parada não excluem. *Por que é improvável:* 52% dos entrevistados da Deezer são contra gerado nas paradas principais (comunicado), e as plataformas o excluem da recomendação [1]. *O que faria com o mapa:* e7.1 (selo de humano) perde valor rápido; e8 e e8.2 antecipam. *Sinal precoce:* uma faixa gerada entrar no top 40 de uma parada principal sem que a Billboard mude a regra de elegibilidade.
- **W2 — A assinatura de captura humana é quebrada em escala.** *Mecanismo:* depois que a proveniência vira infraestrutura (convergência 1), a chave de assinatura de um fabricante de celular vaza ou é extraída, e áudio sintético passa a sair "assinado como humano". *Por que é improvável:* exige falha de segurança de hardware em escala e demora para ser descoberta. *O que faria com o mapa:* e10.1, e13.1.1 e e7.1 caem juntos — a raiz C volta ao ponto zero com a confiança da rede já transferida para a assinatura. *Sinal precoce:* primeiro caso judicial em que áudio "assinado" é provado sintético.
- **W3 — Treino declarado uso lícito amplo nos EUA e Munique reformada.** *Mecanismo:* tribunal superior americano decide que treinar é uso transformativo e o tribunal de apelação de Munique rejeita a tese da memorização [5]. *Por que é improvável neste formato duplo:* as duas coisas teriam de acontecer, e a Universal e a Warner já preferiram acordo. *O que faria com o mapa:* e9 enfraquece; e9.1 se inverte (modelo aberto alcança); e6.1.1 perde base. *Sinal precoce:* decisão do Oberlandesgericht München no recurso da OpenAI.

## 7. Contra o próprio mapa

### 7.1 Pré-mortem — "É 2056 e este mapa se mostrou errado. Por quê?"

1. **A voz não virou porta principal; virou só mais um canal.** As pessoas preferiram continuar digitando e olhando, e a conversa contínua ficou restrita a carro, cozinha e atendimento. Aponta para e1 e e1.2. *Alteração:* e1 mantido com confiança alta só para **atendimento** (há sinal forte), e a frase foi estreitada para "bancos, operadoras e serviços públicos" em vez de "interfaces em geral"; e1.2 mantido em média. Registro abaixo.
2. **A música gerada ficou como a biblioteca de hoje: barata, grande e irrelevante culturalmente.** O gerado dominou trilha de fundo e fraude, e a música que as pessoas escolhem ouvir continuou humana. Aponta para e8, e8.2 e e8.2.1. *Alteração:* e8.2.1 empurrado para 2050; e8 mantido em média; W1 mantido como wildcard, não como efeito.
3. **A proveniência nunca se consolidou.** Cada país e cada plataforma adotou uma marcação diferente, e ninguém verificou nada. Aponta para e10.1 e e13.1.1. *Alteração:* e13.1 rebaixado para baixa; e10.1 mantido em média porque há três artefatos regulatórios/técnicos, mas a prosa já nomeia W2 e a contradição.

### 7.2 Extrapolação linear

- **"O teclado desaparece"** (filho original de e1): só mais do mesmo, maior. **Removido** (seção 12.5).
- **e6** (trilha gerada sob medida) é em parte extrapolação da projeção da CISAC. Ganhou mecanismo não linear — ajuste por trecho e stem torna a trilha sob medida, não só barata — e perdeu o sinal forte.
- **e7.1.1** (ao vivo volta a pesar) repete um movimento dos anos 2000. Mantido em confiança baixa, com a classe de referência escrita.

### 7.3 Velocidade de adoção

- **e2** (tradução com voz no fone): prazo 2032 exigiria vários pares de língua em seis anos a partir de um par. Referência: tradução automática de texto levou ~5 anos da produção neural à presença geral, com muito mais dado. **Prazo 2032 → 2034.**
- **e12** (voz reconstruída para quem a perdeu): prazo 2028 exigiria alcance em dois anos a partir de programa de uma empresa. **Prazo 2028 → 2030.**
- **e4.1** (fala subvocal): prazo 2040 sem nenhum artefato aberto. Referência: interfaces de entrada novas de consumo (VR) passaram de dez anos sem chegar a 10%. **Prazo 2040 → 2045.**
- **e8.2.1**: **2046 → 2050**, pela referência do Auto-Tune — 1997 a 2009 para ficar ubíquo numa função muito mais estreita que redefinir o que é uma obra [20].

### 7.4 A raiz que não acontece

- **Sem a raiz A:** sobram B e C inteiras. Perde-se e1, e2, e3, e4, e5 e a convergência 2. A convergência 1 fica (vem de B e C). Não é raiz disfarçada.
- **Sem a raiz B:** sobram A e C. Perde-se a remuneração, o jardim murado e a convergência 3 parcial (sobra e11). Não é disfarçada.
- **Sem a raiz C:** perde-se a desconfiança da voz, mas e7.1 (selo de humano) e a proveniência na música continuam, pela raiz B. A convergência 1 enfraquece, não some. As três raízes são independentes o bastante.

### 7.5 Suposições escondidas

1. **Modelos abertos de fala continuam abertos** (Moshi, Hibiki, Kokoro são CC-BY/abertos hoje [8][12][19]). Se fecharem, e5.1 cai — a rota de fuga pelo navegador depende disso.
2. **O celular continua o aparelho pessoal central até 2056.** Trinta anos é mais que a vida do smartphone até aqui; se o aparelho mudar (óculos, fone com computação), e5 muda de dono.
3. **Energia para gerar música em massa continua barata.** Se não, e6 e e6.2 ficam caros para peças pequenas.
4. **A regulação da União Europeia continua sendo o padrão exportado.** O mapa usa o AI Act [13] como âncora; se os EUA ou a China impuserem outro padrão, e10.1 muda de forma.
5. **As plataformas continuam permitindo gerado.** Se Spotify/Apple seguirem a Bandcamp e proibirem [1], a raiz B vira produto de jardim murado apenas — isso está em e9, mas a proibição total é mais forte que o mapa supõe.

### 7.6 Viés do autor

O autor é professor de computação musical e pesquisou harmonia e música por computador; **e8.2.1** (a obra volta a ser partitura paramétrica) e **e6.2** (música de jogo regenerada) estão aqui em parte porque o tema agrada. Os dois estão com confiança baixa e média, respectivamente, e e8.2.1 foi empurrado para 2050. Também há viés de ofício de sala: **e1.2** (designer especifica estados de conversa) serve diretamente ao público da disciplina.

### 7.7 Calibração

Depois das alterações: 1ª ordem alta 6 · média 7 · baixa 0; 2ª ordem alta 0 · média 14 · baixa 5; 3ª ordem alta 0 · média 0 · baixa 19. Cai com a ordem. Nenhuma 3ª ordem em alta.

### 7.8 Registro de alterações (antes → depois)

- e1: frase "interfaces passam a ter a conversa falada como porta principal" → "bancos, operadoras e serviços públicos passam a…", porque o sinal forte só existe no atendimento (pré-mortem 1).
- e1.3 "o teclado desaparece dos aparelhos pessoais": **removido** (seção 12.5), extrapolação linear e sem troca de ator.
- e2: prazo 2032 → 2034, pela referência da tradução de texto.
- e2.1: confianca media → baixa, porque o mecanismo de responsabilidade depende de norma profissional sem sinal aberto.
- e4.1: prazo 2040 → 2045, pela referência de interfaces de entrada novas.
- e6: sinal forte → medio, porque um dos três artefatos era projeção (CISAC), não observação.
- e8.1: reescrito de "cursos de música reorganizam o currículo em torno de direção" (efeito proibido sem ator) para "músicos de sessão perdem demo e jingle", com a referência do AFM × Moog [21].
- e8.2.1: prazo 2046 → 2050, pela referência do Auto-Tune [20].
- e9.1: confianca media → baixa, porque qualidade pode vir de dado sintético ou de outra fonte.
- e10.2.1: reescrito de "a telefonia fixa acaba" (causa solta — aconteceria sem clonagem) para "atender número desconhecido deixa de ser prática comum", com o golpe de voz de parente como mecanismo.
- e12: prazo 2028 → 2030, pela velocidade de alcance.
- e12.1: confianca media → baixa, porque não há serviço de saúde oferecendo banco de voz preventivo encontrado.
- e13.1: confianca media → baixa (pré-mortem 3).
- Cota por raiz cumprida: A (e1.3 removido, e2.1 rebaixado), B (e6 e e9.1 rebaixados, e8.1 reescrito), C (e12.1 e e13.1 rebaixados, e10.2.1 reescrito).

## 8. O que a máquina errou

1. **Classes de referência de memória, sem fonte aberta.** O tempo da URA de tons para virar padrão, o do wireframe como entregável, o da tradução neural de texto (2016 → cinco anos), o da troca de senha por token nos bancos, o do vagão silencioso e o do "ao vivo pesando mais depois do compartilhamento de arquivos" foram escritos de memória. Só o Auto-Tune [20] e o Moog/AFM [21] foram abertos. Os prazos que se apoiam nos outros (e1, e1.2.1, e2, e10, e4.1.1, e7.1.1) devem ser lidos com isso em mente.
2. **O decreto do SAC citado em e1.1.1 ("decreto de 2022") é memória.** Não abri o texto; o ano pode estar errado.
3. **Números da Deezer que o verificador não alcança.** 1–3% das escutas, 85% de fraude, 97% no teste cego e 52% contra gerado nas paradas vêm do comunicado da Deezer, aberto via WebFetch mas que responde 403 ao script; a TechCrunch [1] confirma a série de entregas e as medidas, não todos esses números. Deixei o comunicado na seção 12.4 em vez de fingir que é fonte verificável.
4. **Resumo de busca que o texto aberto não confirmou.** A busca 4 dizia que o Moshi roda no "iPhone 15 Pro"; outra dizia "testado no iPhone 16 Pro". A página do `moshi-swift` aberta [8] não especifica aparelho e chama o app de "prova de conceito". Usei só o que a página diz.
5. **Título de fonte que exagera.** A página da FCC se chama "FCC Makes AI-Generated Voices in Robocalls Illegal" (vista no resultado de busca, 403 ao abrir); a Wiley [16] diz que a decisão aplica as regras do TCPA e **não** torna as ligações ilegais *per se*. Usei a leitura da Wiley. A Mayer Brown (aberta, mas 403 ao verificador) ligava a decisão ao robocall com voz de Biden em New Hampshire; a Wiley não menciona. Não afirmei a causa.
6. **Conflito de interesse em fonte usada para sinal forte.** O texto da Forbes [4] é de um executivo que declara construir IA de voz; os três casos nomeados (Lloyds, Santander, Halifax) são reportagens da Vice e da BBC que não abri. O sinal de e10 depende de fonte de segunda mão.
7. **Contaminação por mapa anterior.** Antes de buscar, li o resumo e a lista de fontes do mapa do mesmo tema com horizonte 2041 (`rodadas/giordano-h2041/`). As três raízes deste mapa têm formato parecido com as de lá. Todas as fontes daqui foram reabertas nesta rodada, mas a convergência 1 (proveniência) também aparece lá, e não posso afirmar que a encontrei sozinho.
8. **Inferências sobre o Brasil sem número.** "Áudio de WhatsApp tem peso maior no Brasil" (e10.1.1) e "gêneros regionais sub-representados no catálogo das majors" (e9.1.1) são inferências plausíveis sem dado aberto.

## 9. Três cenários para 2056

**Provável.** Em 2056 quase todo serviço atende por conversa falada, e a tela serve para conferir e assinar. Falar com uma pessoa é um direito com prazo, e muita gente paga por ele. A música que toca em vídeo, jogo, loja e publicidade é gerada para cada peça e não tem autor que se lembre; a que se escolhe ouvir ainda leva nome de gente, e o selo de humano é o que separa uma coisa da outra nas plataformas. As três majors, reunidas com as sociedades de gestão coletiva, licenciam o direito de gerar a partir do seu catálogo, e os modelos abertos de música ficaram para amadores. Ninguém confia em voz ao telefone: o áudio vale se vier assinado pelo aparelho que o gravou. Pessoas com ELA falam com a própria voz, e em algumas línguas — ainda não todas — quem tem fala atípica é entendido pela máquina. *Sinal precoce de que estamos entrando nele:* as plataformas grandes adotarem etiqueta de gerado e exclusão da recomendação, seguindo o Deezer, antes de 2030.

**Desejável.** Em 2056 a voz é uma porta entre outras, projetada junto com o texto e o silêncio, e ninguém é excluído de um serviço por falar diferente, porque os conjuntos de fala atípica foram coletados como bem público em dezenas de línguas, o português entre elas. A tradução com a própria voz tornou a aula e o podcast em português audíveis no mundo sem apagar o sotaque. Compositores licenciam o estilo e recebem por uso, selos locais treinaram modelos do seu repertório, e a gestão coletiva arrecada pela geração. A proveniência assina o humano na captura e é aberta, não de um fabricante. *O que teria que ser feito:* financiamento público para coleta de fala atípica e de repertório regional; regra de interoperabilidade da assinatura de captura; direito de voz como personalidade com licença por uso. *Sinal precoce:* uma chamada pública brasileira para conjunto de fala atípica em português, ou um selo regional com modelo próprio licenciado.

**Indesejável.** Em 2056 dois fabricantes de sistema operacional controlam o microfone que escuta tudo e decidem quais línguas e quais falas são entendidas; quem não cabe fica fora dos serviços. A música que circula é gerada dentro de três plataformas licenciadas, os gêneros regionais sumiram das recomendações, e o músico que não é verificado não recebe. A assinatura de captura foi quebrada uma vez e ninguém sabe mais qual áudio é real; no Brasil, áudio de WhatsApp não vale nada como prova e golpe com voz de parente é rotina. As vozes de dubladores mortos seguem trabalhando em contratos que os herdeiros não negociaram. *Sinal precoce:* a Apple ou o Google restringirem a escuta contínua a agentes próprios, ou uma plataforma grande proibir exportação de faixa gerada.

## 10. O experimento

**O que é.** *Trilha que se desmonta.* Um minijogo ou cena interativa no navegador cuja trilha é montada, em tempo real, a partir de stems gerados. Três versões: **A** — trilha de biblioteca humana em loop, alternando duas faixas; **B** — uma música gerada no Suno Studio, com stems exportados por regeneração, recombinados pelo estado da cena (tensão sobe → entram bateria e baixo; calma → só harmonia); **C** — stems de duas músicas geradas diferentes, recombinados livremente. Web Audio para a mixagem; nenhum servidor.

**Que pergunta sobre o futuro ele ajuda a responder.** A música gerada já é *editável* o bastante para virar sistema adaptativo (e6.2, e8), ou a costura aparece quando se recombina? É o sinal fraco 1 posto à prova, e o limite "não entrega os canais separados" da amostra da turma testado na sua nova forma.

**Que tecnologia emergente usa, e por que não dá com a madura.** Stems obtidos por regeneração dentro do gerador (Studio 2.0, v6, stems a partir de MIDI — agosto/setembro de 2026 [2]). Com a madura, a trilha adaptativa exige um compositor que grave cada camada separadamente, ou separação por máscara de uma mixagem pronta, que vaza entre faixas. O que se testa é justamente se a regeneração substitui a gravação separada.

**O que a turma faz em sala.** Cada pessoa joga as três versões, em ordem sorteada, sem saber qual é qual. Depois responde: (1) em que momento ouviu costura (marcar no tempo); (2) qual versão acompanhou melhor a cena; (3) qual achou que era humana. A turma conta as marcas de costura por versão e discute onde o gerado falhou — transição, timbre, andamento.

**O resultado que faria o autor mudar de ideia.** Se a versão B tiver mais marcas de costura que a A em mais da metade das pessoas, ou se C for indistinguível de B (sinal de que a coerência vem do acaso, não do stem), e6.2 perde confiança e o prazo de 2036 é empurrado — a música gerada continua não sendo material de sistema, só de faixa. Se B for escolhida como a que melhor acompanha a cena pela maioria **e** não for identificada como gerada, e6.2 sobe para confiança alta e o prazo antecipa.

## 11. Fontes

1. TechCrunch — "Music streamer Deezer says more than 50% of daily uploads are AI-generated" (21/07/2026). https://techcrunch.com/2026/07/21/music-streamer-deezer-says-more-than-50-of-daily-uploads-are-ai-generated/ — Sustenta: série de entregas diárias de faixas geradas (jan/2025 a jun/2026), remoção de faixas sem escuta e fraudulentas, Bandcamp, Tidal, Spotify e Apple Music (3.4, e7, W1). Confiabilidade: alta como relato; números da própria Deezer.
2. Suno — Release Notes. https://suno.com/release-notes — Sustenta: Studio 2.0 (13/08/2026), v6 (09/09/2026), stems a partir de MIDI (17/09/2026) (3.1, 4.2, e6, e6.2, e8, sinal fraco 1, experimento). Confiabilidade: documentação do fornecedor; boa para datas e funções, nula para qualidade.
3. arXiv 2606.19453 — Lu et al., "A Survey of Full-Duplex Spoken Dialogue Systems: Architectural Hierarchy, Interaction Ontology, and Decision State Machine" (17/06/2026). https://arxiv.org/abs/2606.19453 — Sustenta: confusão do termo *full-duplex*, estados de decisão, comportamento preso aos dados, escassez de dado público (3.2, 4.1, e1.2). Confiabilidade: pré-publicação, levantamento amplo; não revisado por pares.
4. Forbes Business Council — "Voice Authentication Is Broken, And Most Companies Haven't Noticed" (29/07/2026). https://www.forbes.com/councils/forbesbusinesscouncil/2026/07/29/voice-authentication-is-broken-and-most-companies-havent-noticed/ — Sustenta: clone com 3 s (~85%), casos Lloyds, Santander, Halifax, Arup (3.5, 4.3, e10, e10.2). Confiabilidade: média-baixa; texto de opinião de executivo do setor com conflito declarado; casos de segunda mão.
5. KPW — "GEMA also wins against Suno" (2026). https://kpw.law/en/gema-also-wins-against-suno/ — Sustenta: LG München I, 42 O 763/25, 31/07/2026, memorização, proibições, recurso da OpenAI no caso anterior (3.5, e9, e9.2, W3). Confiabilidade: escritório de advocacia alemão; boa para o conteúdo da decisão.
6. Music Business Worldwide — "Universal Music settles Udio lawsuit, strikes deal for licensed AI music platform". https://www.musicbusinessworldwide.com/universal-music-settles-udio-lawsuit-strikes-deal-for-licensed-ai-music-platform/ — Sustenta: acordo, plataforma licenciada em 2026, jardim murado, permissão do artista (3.5, e6.1, e8.2, e9, e11). Confiabilidade: imprensa especializada; alta para os termos declarados.
7. ElevenLabs — "On track to help 1 million people regain their voice" (Impact Program; publicado 21/02/2025, atualizado 22/09/2026). https://elevenlabs.io/blog/impact-program-v2 — Sustenta: acesso gratuito para ELA, AMS, câncer de boca; meta de um milhão (3.1, 4.3, e12). Confiabilidade: comunicado da empresa; sem número de pessoas efetivamente atendidas.
8. GitHub — kyutai-labs/moshi-swift. https://github.com/kyutai-labs/moshi-swift — Sustenta: Moshi e Hibiki em MLX Swift para iOS, "prova de conceito", licenças MIT/CC-BY (3.1, 4.1, 7.5). Confiabilidade: alta; repositório oficial.
9. Music Business Worldwide — "Market for Gen AI outputs to be worth over $16bn annually by 2028, but it could 'cannibalize' 24% of music creators' revenues, CISAC predicts" (dez/2024). https://www.musicbusinessworldwide.com/market-for-gen-ai-outputs-to-be-worth-over-16bn-annually-by-2028-but-it-could-cannibalize-24-of-music-creators-revenues-cisac-predicts/ — Sustenta: 24% da receita em risco, 60% da biblioteca B2B gerada até 2028 (3.4, e6). Confiabilidade: relato fiel de projeção encomendada por parte interessada (CISAC); não é medida.
10. NME — "AI-generated country track 'Walk My Walk' tops US Billboard chart" (16/11/2025). https://www.nme.com/news/music/ai-generated-country-track-walk-my-walk-tops-us-billboard-chart-3908829 — Sustenta: 1º lugar de Breaking Rust em Country Digital Song Sales, escutas no Spotify, criador anônimo (3.4, 4.2, W1). Confiabilidade: imprensa musical; bom para o fato de parada.
11. Senado Notícias — "CDH examina sugestão que protege dubladores contra a concorrência com a IA" (07/08/2025). https://www12.senado.leg.br/noticias/materias/2025/08/07/cdh-examina-sugestao-que-protege-dubladores-contra-a-concorrencia-com-a-ia — Sustenta: SUG 7/2025, autoria, 20 mil apoios, relatoria (3.6, e11.1). Confiabilidade: fonte oficial.
12. GitHub — kyutai-labs/hibiki. https://github.com/kyutai-labs/hibiki — Sustenta: tradução simultânea francês → inglês, transferência de voz por CFG, variante de 1B para aparelho (Hibiki-M), licenças (3.1, 3.2, e2, sinal fraco 3). Confiabilidade: alta; repositório oficial.
13. artificialintelligenceact.eu — "The EU AI Act's Transparency Rules: A Practical Guide to Article 50". https://artificialintelligenceact.eu/transparency-rules-article-50/ — Sustenta: marcação legível por máquina de áudio sintético, datas de 02/08 e 02/12/2026, aviso audível, dever de revelar deepfake (3.5, e10.1, e13). Confiabilidade: guia de site de referência independente; não é o texto oficial.
14. Apple Developer — WWDC25, "Bring advanced speech-to-text to your app with SpeechAnalyzer". https://developer.apple.com/videos/play/wwdc2025/277/ — Sustenta: transcrição local, modelo fora da memória do app, atualizado pelo sistema, apps que usam (3.1, 4.1, e5). Confiabilidade: documentação oficial.
15. ElevenLabs — "ElevenLabs crosses $500M ARR and welcomes new investors" (2026). https://elevenlabs.io/blog/500m-arr-and-new-investors — Sustenta: US$ 350 mi (fim de 2025) → >US$ 500 mi (abr/2026), agentes de voz como motor (3.1, 4.1, e1). Confiabilidade: número da própria empresa, não auditado.
16. Wiley — "FCC Extends Regulatory Reach Over AI: Announces TCPA Restrictions Cover AI-Generated Voices in Outbound Calls" (fev/2024). https://www.wiley.law/alert-FCC-Extends-Regulatory-Reach-Over-AI-Announces-TCPA-Restrictions-Cover-AI-Generated-Voices-in-Outbound-Calls — Sustenta: decisão declaratória de 08/02/2024, voz gerada como "artificial" no TCPA, não ilegal *per se* (3.5, e1, e1.1.1, e10.1). Confiabilidade: escritório de advocacia especializado; boa.
17. arXiv 2401.17264 — San Roman, Fernandez, Défossez, Furon, Tran, Elsahar, "Proactive Detection of Voice Cloning with Localized Watermarking" (ICML 2024). https://arxiv.org/abs/2401.17264 — Sustenta: marca d'água localizada amostra a amostra, robustez, detector rápido (3.1, 4.3, e10.1). Confiabilidade: alta; artigo revisado (ICML).
18. Frontiers in Language Sciences — "Project Euphonia: advancing inclusive speech recognition through expanded data collection and evaluation" (20/06/2025). https://www.frontiersin.org/journals/language-sciences/articles/10.3389/flang.2025.1569448/full — Sustenta: 1,5 mi de enunciados, ~3.000 falantes, línguas da expansão (sem português), conjunto fechado, reconhecimento personalizado superando transcritor humano (3.1, 3.2, 3.6, e3, e3.1.1, sinal fraco 2). Confiabilidade: revista revisada por pares, autores do próprio Google.
19. Hugging Face — Xenova, "Introducing Kokoro.js" (16/01/2025). https://huggingface.co/posts/Xenova/503648859052804 — Sustenta: TTS de 82M no navegador, 326 → 86 MB (3.1, 4.1, e5.1). Confiabilidade: anúncio do autor da biblioteca; alta para o que faz.
20. Wikipedia — "Auto-Tune". https://en.wikipedia.org/wiki/Auto-Tune — Sustenta: classe de referência (1997 lançamento, 1998 "Believe", ubíquo em 2009, reação de 2009) (7.3, e8.2.1). Confiabilidade: média; enciclopédia, usada só para cronologia.
21. Wikipedia — "Moog synthesizer". https://en.wikipedia.org/wiki/Moog_synthesizer — Sustenta: classe de referência (1964; adoção no pop no fim dos anos 1960; AFM negociando restrições por medo de substituição) (e8.1, e8.1.1). Confiabilidade: média; enciclopédia, usada para cronologia e para o precedente sindical.

## 12. Anexo — o levantamento bruto

### 12.1 Saída do verificador

```
$ python3 futurizacao-giordano/references/verificar.py rodadas/giordano-h2056/13-voz-e-som-gerativos/tendencia-voz-e-som-gerativos.md --links
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 3 (frontmatter diz 3)
efeitos ordem 1: 13 (frontmatter diz 13)
efeitos ordem 2: 19 (frontmatter diz 19)
efeitos ordem 3: 19 (frontmatter diz 19)
prazo > horizonte (2056) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 6 · media 7 · baixa 0
confiança ordem 2: alta 0 · media 14 · baixa 5
confiança ordem 3: alta 0 · media 0 · baixa 19
links da seção 11: 21/21 respondem (frontmatter diz fontes: 21)
RESULTADO: ok
```

A primeira execução falhou (`YAML inválido — mapping values are not allowed here`, linha do e11.1.1, por dois-pontos dentro da frase); corrigido trocando o dois-pontos por travessão, e a saída acima é da segunda execução.

### 12.2 Premissas assumidas que o briefing não cobria

- Data do documento: 22/09/2026 (relógio da máquina, 16:26 -03 no início da rodada).
- Número de raízes: três (a skill permite duas a quatro). Considerei uma quarta, "áudio espacial/sonificação gerativa", e descartei: não achei artefato aberto que mostrasse ruptura, e encosta no tema 15 (XR).
- "Comum em produto de massa" aplicado assim: assistente de voz por turno, TTS de leitura, leitor de tela, DAW, sampler, separação de fontes por máscara e Auto-Tune são maduros; conversa contínua local, música gerada editável e voz clonada não são, porque a adoção medida em escuta ou uso está abaixo de 10%.
- Horizonte de 30 anos: permiti prazos até 2050 em 3ª ordem; nenhum efeito passou de 2056.
- Nota sobre o Brasil: subseção 3.6 e efeitos e2.2.1, e3.1.1, e6.1.1, e9.1.1, e10.1.1, e11.1, e11.1.1.
- `publico_ok: false` (padrão do formato; o briefing não disse).
- Li, antes das buscas, o resumo e a lista de fontes do mapa do mesmo tema com horizonte 2041 (seção 8, item 7). Não li a roda de lá.

### 12.3 Buscas feitas (22)

1. "Suno v6 Studio stems 2026" — deu em [2]; resumos de blogs (roo.beehiiv, eesel, jackrighteous) não abertos.
2. "Deezer AI-generated music share of daily uploads 2026" — deu em [1] e no comunicado da Deezer (12.4).
3. "full-duplex speech-to-speech model on-device 2026" — deu em [3]; viu-se o HumDial Challenge do ICASSP 2026 (arXiv 2604.21406, não aberto) e o arXiv 2609.15759 (transcrição em fluxo em modelos duplex, não aberto).
4. "voice cloning fraud bank voice authentication abandoned 2026" — deu em [4]; pbxscience aberto (desmente boatos de "30 bancos" e de volta à assinatura física) mas responde 406 ao verificador (12.4).
5. "GEMA Suno Munich ruling 2026" — deu em [5]; Variety, Bird & Bird, Forbes, Reed Smith não abertos.
6. "Universal Music Udio settlement licensed platform 2026 launch" — deu em [6].
7. "voice banking ALS synthetic voice personal ElevenLabs impact program" — deu em [7]; Team Gleason não aberto.
8. "Kyutai Moshi github MLX iPhone" — deu em [8]; resumos divergentes sobre o aparelho (seção 8, item 4).
9. "CISAC study generative AI music creators revenue at risk 2028" — deu em [9].
10. "Kyutai Hibiki simultaneous speech translation voice preservation" — blog da Kyutai abriu vazio (só menu); deu em [12].
11. "dubladores inteligência artificial voz PL 2338 direitos de voz 2026" — deu em [11]; resumo indicou que a lei brasileira de direito autoral não protege explicitamente a voz isolada (direito de personalidade, Código Civil) — não verificado em texto legal.
12. "AI artist Billboard chart number one 2025 2026 Breaking Rust Xania Monet" — deu em [10]; Xania Monet (Hot Gospel nº 3, Adult R&B Airplay nº 30, contrato com a Hallwood) visto só no resumo, não usado.
13. "FCC declaratory ruling AI-generated voices robocalls TCPA February 2024" — fcc.gov 403; Mayer Brown aberta mas 403 ao verificador; deu em [16].
14. "AudioSeal localized watermarking speech Meta paper" — deu em [17].
15. "Project Euphonia non-standard speech recognition dysarthria open dataset 2025" — deu em [18].
16. "share of users using voice mode ChatGPT advanced voice usage statistics 2026" — **não deu em nada**: nenhum número de uso de modo de voz; só 900 mi de usuários semanais do ChatGPT (fev/2026), não usado.
17. "Kokoro TTS WebGPU browser Transformers.js 82M" — deu em [19].
18. Abertura direta de Wikipedia "Auto-Tune" — [20].
19. Abertura direta de Wikipedia "Moog synthesizer" — [21].
20. Abertura direta de ElevenLabs ARR — [15].
21. Abertura direta de WWDC25 sessão 277 — [14].
22. Abertura direta do guia do artigo 50 — [13].

### 12.4 Aberturas que falharam ou foram retiradas da seção 11

- `https://newsroom-deezer.com/2026/07/ai-music-exceeds-50-percent-daily-uploads-deezer/` — **aberta** via WebFetch (21/07/2026): 90 mil faixas/dia, >50% das entregas; 13,4 milhões de faixas geradas marcadas em 2025; 1–3% das escutas; até 85% dessas escutas fraudulentas em 2025 (8% no catálogo todo); exclusão de recomendação e playlist editorial; remoção de gerado usado em fraude e sem escuta há seis meses; primeira plataforma a etiquetar para o ouvinte (junho/2026); detecção com 99,8% de acerto; pesquisa de nov/2025 com 9.000 pessoas em oito países: 97% não distinguem, 80% querem etiqueta, 73% querem saber se a plataforma recomenda gerado, 52% contra gerado nas paradas principais. **Retirada da seção 11 porque responde 403 ao verificador.**
- `https://pbxscience.com/ai-voice-cloning-is-breaking-bank-security-here-is-what-the-evidence-actually-shows/` — aberta; responde 406 ao verificador. Útil por desmentir boatos virais (bancos que "voltaram à assinatura física").
- `https://www.mayerbrown.com/en/insights/publications/2024/02/fcc-declares-authority-and-intent-to-regulate-ai-generated-calls-under-the-tcpa` — aberta; 403 ao verificador. Liga a decisão da FCC à carta de 06/02/2024 contra o robocall com voz de Biden.
- `https://www.fcc.gov/document/fcc-makes-ai-generated-voices-robocalls-illegal` — 403.
- `https://kyutai.org/blog/2025-02-10-hibiki/` — abriu só o menu.

### 12.5 Efeitos cortados e rodadas descartadas

- **e1.3 (removido):** "O teclado desaparece dos aparelhos pessoais" — extrapolação linear de e1, sem troca de ator; contradiz e4 (quem não pode falar).
- **e8.1 (versão original, reescrita):** "Cursos de música reorganizam o currículo em torno de direção, não de execução" — efeito genérico proibido pela skill (curso sem nome, mecanismo que serve a qualquer raiz).
- **e10.2.1 (versão original, reescrita):** "A telefonia fixa acaba" — falha no teste da causa solta; aconteceria sem clonagem.
- **Ramo ecológico (vazio):** "Gerar música em massa aumenta o consumo de energia dos data centers" — serve a qualquer IA gerativa; descartado pelo teste de especificidade.
- **Raiz candidata descartada:** "Áudio espacial e sonificação gerativa" — sem artefato aberto; fronteira com o tema 15.
- **Efeito considerado e não incluído:** "Rádio vira stream gerado personalizado sem locutor" — é consequência de e6 + raiz A, mas não achei artefato; ficaria como filho de e6 com sinal fraco e mecanismo repetido (mesma troca de ator de e6).
- **Efeito considerado e não incluído:** "Artistas mortos lançam discos novos com voz clonada" — cabe em e11.1.1/e12.1.1; seria o mesmo efeito com outro ator (espólio de cantor), sem mecanismo novo.

### 12.6 Artefatos da turma mencionados no tema e como entraram

`Suno` e `Udio` (raiz B, e9); `1BITDRAGON` (e6.2); `signalflow`, `pydub`, `pytorch/audio` (ferramental; não entraram como efeito); `Hacklily` (e8.2.1); `ChatTTS`, `Bark`, `@pbji/piper-tts-web`, `@moxxy/plugin-tts-openai`, `@alfe.ai/openclaw-voice` (raiz A, e5.1 — contexto; não abertos nesta rodada); `Whisper` (contexto maduro de transcrição; a observação "confunde nome próprio e sigla" reforça 3.2); `expo-ai-kit` (paralelo do SpeechAnalyzer, e5); `espnet` (contexto); `PastPort` (fronteira com e12.1.1 e com o tema 19).
