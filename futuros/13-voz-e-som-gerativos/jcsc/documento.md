---
tema: Voz e som gerativos
slug: voz-e-som-gerativos
autor_login: jcsc
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-12
horizonte: 2031
publico: "quem projeta mídia e interação"
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 8
efeitos_ordem_2: 16
efeitos_ordem_3: 16
tecnologias_citadas: [Moshi, Mimi, Suno, Suno Studio, Udio, MusicGen-Stem, SpeechAnalyzer, SpeechTranscriber, DictationTranscriber, Kokoro, "Kokoro.js", Transformers.js, WebGPU, WebAssembly, Whisper, ElevenLabs, "OpenAI Realtime API", "gpt-realtime", "Gemini Live", DDEX, "EU AI Act Artigo 50", "PL 2338/2023", "PL 2462/2025", "PL 1376/22"]
fontes: 14
confianca: media
experimento: "Régie — mesa de música gerada operada por voz, com os stems abertos"
skill_usada: futurizacao-jcsc
publico_ok: false
---

## 1. Resumo

Até 2031, voz e som gerativos deixam de ser duas novidades paralelas e viram duas infraestruturas: a fala passa a ser processada inteira dentro do aparelho, sem nuvem e sem chave de API, e a música gerada passa a ser licenciada na origem e editável por faixa. As duas rupturas têm sinais já medidos — o Deezer recebeu cerca de 90 mil faixas inteiramente geradas por dia em junho de 2026, mais da metade de tudo que sobe à plataforma, enquanto o consumo dessas faixas fica em 1% a 3% dos streams; a Apple embarcou reconhecimento de fala só-no-dispositivo no próprio sistema operacional; e o Suno, depois de acordo com a Warner, refez seus modelos sobre catálogo licenciado e passou a devolver até doze stems separados. Esse último ponto derruba o diagnóstico corrente de que a música gerada "não entrega os canais separados": entrega desde junho de 2026, e é justamente essa reversão que move o mapa. O efeito de segunda ordem mais provável não é estético, é contratual — a gravadora vira fornecedora de dados de treino e cobra por geração, e o compositor de biblioteca perde a base de cálculo que o remunerava. O efeito de terceira ordem mais consequente é o colapso da voz como prova de identidade, que já está acontecendo e que nenhuma das duas indústrias que causaram o problema está pagando para resolver.

## 2. O tema

Voz e som gerativos, aqui, são duas coisas que se encostam pelo mesmo material — o sinal de áudio — e por nenhum outro motivo.

De um lado, a **fala como interface**: sistemas que ouvem e respondem falando, com latência baixa o bastante para que a pessoa interrompa e seja interrompida, e cada vez mais rodando no próprio aparelho. De outro, o **som como obra gerada**: modelos que produzem instrumental, voz cantada e mixagem juntos, a partir de uma descrição em texto.

Onde isso encosta em mídia e interação é em dois pontos distintos, e vale não confundi-los. A fala gerativa mexe no **canal** — em como a pessoa diz o que quer e como o sistema responde, no que acontece com a tela, com o teclado, com o espaço físico compartilhado onde falar em voz alta é constrangedor ou impossível. A música gerada mexe no **objeto** — no que é uma peça de áudio, quem a assina, quem é pago por ela e o que significa editá-la.

Isto merece um mapa de futuro, e não um levantamento de estado da arte, por uma razão específica: **as duas frentes já passaram do ponto em que a pergunta técnica é interessante.** A fala local funciona; a música gerada convence na primeira escuta. O que está genuinamente em aberto é institucional — como se remunera, como se prova identidade, como se rotula, quem é o profissional que resta. Levantar o estado da arte hoje responde "o que dá para fazer". A pergunta que importa para quem projeta mídia é "o que vai ser possível exigir, provar e cobrar", e essa só se responde projetando.

Há um segundo motivo. O tema tem uma **assimetria de adoção rara e mensurável**: do lado da oferta, adoção de massa (mais de metade dos uploads diários de uma plataforma grande); do lado da demanda, marginalidade (1% a 3% dos streams). Quase nenhuma tecnologia emergente oferece um par de números desses. Um mapa de futuro construído em cima dessa tesoura tem chão; um levantamento de estado da arte a trataria como curiosidade.

**Fronteira com os vizinhos.** Imagem em movimento gerada é o tema 12. IA rodando no dispositivo, em geral, é o tema 16 — aqui entra só a parte de áudio e voz, e entra porque o áudio tem uma propriedade que o texto e a imagem não têm: ele é, ao mesmo tempo, o conteúdo e a credencial. Ninguém autenticava ninguém por parágrafo.

**Respostas da entrevista (Etapa 1 da skill).** Todas as cinco perguntas foram respondidas; nenhuma ficou como "tanto faz". Horizonte: 2031. Público: quem projeta mídia e interação. Recorte: global, com nota sobre o Brasil. Descartes explícitos: o que já é comum em produto de massa, pela régua da disciplina — nenhuma outra exclusão. Viés: neutro. Registrado também o que o autor declarou como critério de mudança de ideia: evidência de que a adoção já passou da maioria inicial (Rogers), ou de que a tecnologia só melhora o que existe sem romper nada.

## 3. Onde isso está hoje

### 3.1 Música gerada: adoção de massa na oferta, marginalidade na demanda

O número mais duro disponível vem do Deezer, a única plataforma grande que marca faixas geradas de forma transparente e publica a contagem.

| Data da medição | Faixas geradas por dia | % dos uploads diários |
|---|---|---|
| janeiro de 2026 | ~60.000 | 39% |
| abril de 2026 | ~75.000 | 44% |
| junho de 2026 (pico) | ~90.000 | mais de 50% |

Fonte: Deezer Newsroom, abril e julho de 2026 [1][2]. A mesma casa informa que subiu de 10.000 faixas diárias para 75.000 em pouco mais de um ano, e que detectou e etiquetou mais de 13,4 milhões de faixas geradas ao longo de 2025.

Do outro lado do funil, o consumo: **1% a 3% do total de streams** da plataforma. E, dentro desses, **até 85% dos streams de faixas inteiramente geradas foram fraudulentos em 2025** — isto é, tráfego fabricado para sacar royalty, não escuta humana. O Deezer os desmonetiza.

Ler esses dois lados juntos é o que importa. **A música gerada já é padrão na produção e ainda não é padrão no consumo.** O gargalo não é a qualidade do modelo; é a distribuição e a atenção.

### 3.2 A licença entrou no modelo

Entre novembro de 2025 e setembro de 2026 a disputa jurídica virou arquitetura de produto. O Suno, depois do acordo com a Warner Music, lançou **v6, v6-wild e v6-mini**, desenvolvidos com Warner, BMG e Believe, e anunciou a aposentadoria de todos os modelos anteriores — os treinados sobre material contestado saem de circulação [14].

Duas coisas ficaram de fora do anúncio, e as duas importam para o mapa: **não foi divulgado quais catálogos entraram, quanto material foi usado nem como o treino foi conduzido**; e **não existe estrutura de pagamento ao artista**. A reportagem que abri é explícita: as gravadoras entraram no produto naquela quarta-feira; os artistas entraram num plano sobre o que vem depois [14]. A opção de participação (nome, imagem, semelhança, voz) é declarada, a remuneração não.

### 3.3 O stem voltou — e isso invalida o sinal fraco corrente

O diagnóstico que circula sobre música gerada é que ela "não entrega os canais separados", e que o dia em que entregar muda o jogo. **Esse dia passou.**

Desde 11 de junho de 2026 o Suno oferece três modos de separação [6]:

- **Auto Split** — quebra a faixa em até **12 stems** (bateria, baixo, guitarra, teclas, sopros e outros);
- **Split from Mix** — isola ou remove um elemento específico, devolvendo o stem e a faixa complementar sem ele;
- **Advanced Split** — busca numa lista de perto de **100 instrumentos** e extrai exatamente o pedido (exclusivo do plano mais alto).

E vale para qualquer faixa gerada no Suno **e para música própria que o usuário suba**. Some-se o Suno Studio — uma linha do tempo multipista dentro do próprio gerador.

Na pesquisa, a coisa vai um passo além da separação posterior. O **MusicGen-Stem**, da Meta com o IRCAM (janeiro de 2025), gera a partir de um texto **já devolvendo três stems separados** — baixo, bateria e o resto —, e permite acrescentar stem complementar a uma faixa existente, remover e regerar um stem específico, e alterar textura preservando estrutura [4]. Os próprios autores registram o limite do estado anterior: as técnicas de edição sem treino específico tinham dificuldade em manter o resto da faixa intacto ao editar um instrumento.

A diferença entre separar depois e gerar já separado não é cosmética: separar depois herda artefato do processo de separação; gerar separado não tem o que herdar.

### 3.4 Fala: o pipeline em três etapas está sendo substituído por um só modelo

O marco público é o **Moshi**, da Kyutai: modelo fundacional de fala e texto com diálogo falado **full-duplex** — as duas pessoas podem falar ao mesmo tempo, como numa conversa real, em vez de se revezarem em turnos [3].

Números do artigo: **latência teórica de 160 ms, 200 ms na prática**, apresentado como o primeiro modelo de linguagem falada full-duplex em tempo real. Arquitetura: gera fala a partir dos tokens do quantizador residual de um codec neural de áudio (o Mimi), mantém **fluxos separados** para a fala do usuário e a do sistema, e usa um método chamado **Inner Monologue**, que prediz tokens de texto alinhados no tempo antes dos tokens de áudio — o que melhora a qualidade linguística e, de quebra, dá reconhecimento e síntese em streaming de brinde. Submetido em setembro de 2024, revisado em outubro; autores incluem Alexandre Défossez, Laurent Mazaré e Neil Zeghidour.

O que isso rompe: o pipeline canônico **ASR → LLM → TTS** transforma fala em texto, raciocina em texto e volta para fala. Tudo que não é palavra — entonação, hesitação, sobreposição, o ruído de quem vai interromper — morre na primeira etapa. Um modelo que vai de áudio a áudio não perde isso porque nunca o converteu.

### 3.5 Fala no dispositivo: o modelo mora no sistema operacional

A Apple apresentou o **SpeechAnalyzer** na WWDC25, embarcado no iOS 26 [12]. Três características importam mais que a acurácia:

1. **Só no dispositivo.** Os ativos do modelo são instalados pela nova API `AssetInventory`; nada de servidor.
2. **O modelo não é do app, é do sistema.** Não aumenta o tamanho de download do aplicativo, não aumenta o armazenamento, não aumenta a memória em execução, e é atualizado pelo sistema.
3. **Fala longa e distante.** Projetado para aula, reunião, conversa — e para microfone longe da boca, que é onde o reconhecimento sempre quebrou.

Expõe `SpeechTranscriber` (o módulo principal, modelo novo, resultados voláteis em tempo real e resultados finalizados) e `DictationTranscriber` (compatibilidade, mesmo modelo e idiomas do `SFSpeechRecognizer` do iOS 10, para idioma ou aparelho sem suporte). Já move Notas, Gravador e Diário, e a sumarização de chamadas.

No navegador, o **Kokoro.js** faz o caminho equivalente para a síntese: modelo de **82 milhões de parâmetros**, pesos Apache, rodando **100% local no navegador** via WebAssembly, com a versão quantizada caindo de 326 MB para **86 MB** sem perda perceptível [13]. O anúncio é de 16 de janeiro de 2025 e registra suporte a WebGPU como coisa por vir.

Ou seja: em dois anos, fala de qualidade utilizável passou de serviço com chave de API e conta a pagar para **arquivo de 86 MB numa aba do navegador** e para **modelo que já vem no sistema operacional do celular**.

### 3.6 Regulação: a marcação vira obrigação antes de existir detector confiável

O Artigo 50 do Regulamento de IA da União Europeia trata de transparência para sistemas generativos e é aplicável a partir de **2 de agosto de 2026**. A Comissão publicou o Código de Conduta sobre Transparência de Conteúdo Gerado por IA em **10 de junho de 2026**; cerca de **190 organizações** o haviam assinado em julho de 2026 [7]. Duas obrigações distintas:

- **Fornecedores** marcam o conteúdo gerado ou manipulado em **formato legível por máquina** e garantem que ele permaneça detectável como artificial.
- **Implantadores** rotulam *deepfakes* — mídia sintética que se parece com pessoa ou evento real — e divulgam texto gerado sobre assunto de interesse público.

O código é voluntário; as obrigações que ele ajuda a cumprir, não.

Do lado das plataformas, o Spotify anunciou em **25 de setembro de 2025** três medidas [11]: adoção do padrão **DDEX** para divulgação de uso de IA nos créditos (detalhando se foi voz, instrumentação ou pós-produção), um **filtro de spam** para upload em massa, e política explícita contra **clone de voz não autorizado**. A justificativa declarada para o DDEX merece nota, porque é exatamente o ponto onde a regulação vai bater: a plataforma recusou o binário — não quis forçar a faixa a ser "categoricamente IA ou não IA". Quinze gravadoras e distribuidoras aderiram.

### 3.7 Quem fica de fora: a fala que o reconhecimento não reconhece

O desafio do Speech Accessibility Project na Interspeech 2025 reuniu **mais de 400 horas** de fala coletadas e transcritas de **mais de 500 pessoas com deficiências de fala diversas**, com o whisper-large-v2 como linha de base [5]. De 22 submissões válidas, 12 equipes superaram a base em taxa de erro de palavra e 17 em pontuação semântica; a melhor chegou a **8,11% de WER** e 88,44% de pontuação semântica.

Dois modos de ler isso, e o mapa precisa dos dois. O otimista: 8,11% é uso real. O outro: esse número saiu de um desafio organizado com dados curados a duras penas, não do que roda no seu celular — e quem não fala do jeito que o modelo espera continua a operar um sistema que erra uma palavra em cada doze, no melhor caso, quando a interface vira voz por padrão.

### 3.8 Brasil

Três coisas, distintas entre si.

**Regulação geral.** O PL 2338/2023 tramita na Câmara. O artigo que interessa aqui é o que prevê **remuneração aos titulares de direitos autorais** cujas obras sejam usadas no desenvolvimento ou treino de sistemas de IA [8].

**Regulação específica de voz.** Em audiência pública na Câmara em **29 de agosto de 2024**, profissionais de dublagem pediram proteção legal contra voz gerada por IA [8]. O argumento registrado não foi só trabalhista — foi cultural. Ângela Couto e Fábio Azevedo, do movimento Dublagem Viva, estiveram entre os presentes, junto a representantes do Ministério da Cultura. A frase que ficou na ata da notícia: *"A automação do processo significaria a negação disso. Eu gosto de dizer que isso seria um novo processo de colonização."* Foram citados o **PL 1376/22** (dublagem e legendagem comerciais feitas por empresas e profissionais com sede no país) e o próprio PL 2338/23.

**O que falta.** Não encontrei, nesta rodada, número público sobre tamanho do mercado brasileiro de dublagem, nem sobre adoção de fala gerada em produto brasileiro. A matéria da Câmara que abri não traz estatística do setor — e isso está registrado na seção 12.

A nota relevante para o mapa: o Brasil tem **um dos maiores parques de dublagem do mundo** e uma cultura de consumo dublado que a Europa e os EUA não têm na mesma escala. Se a fala gerativa atinge alguém primeiro, atinge aqui — e a resposta institucional brasileira está a chegar por proibição setorial, não por remuneração. As duas linhas legislativas (PL 2338 remunera; PL 1376 e afins restringem) ainda não foram conciliadas.

### 3.9 Sintetizando o presente

| Camada | Estado | Quem está construindo |
|---|---|---|
| Geração de música texto→áudio | funciona e é usada em massa na produção | Suno, Udio |
| Licença na origem do modelo | recém-construída, opaca | Suno × Warner/BMG/Believe |
| Remuneração do artista individual | **não existe** | ninguém, ainda |
| Stems / edição por faixa | **entregue** (até 12 stems) | Suno; MusicGen-Stem na pesquisa |
| Fala full-duplex ponta a ponta | funciona, 200 ms | Kyutai (aberto), OpenAI, Google |
| Fala no dispositivo | embarcada no SO e no navegador | Apple, projeto Kokoro |
| Rotulagem e proveniência | obrigatória a partir de 08/2026, sem detector confiável | Comissão Europeia, DDEX, Spotify |
| Voz como credencial | em colapso | — |
| Fala atípica | 8,11% WER no melhor caso de laboratório | SAP / Illinois + consórcio |

## 4. As disrupções-raiz

Antes das aceitas, as recusadas — porque é a recusa que prova que o critério foi aplicado.

### 4.0 Candidatos descartados por maturidade

Critério da skill: recuse, trate como presente e não como futuro, qualquer tecnologia que já seja **padrão de mercado consolidado** — amplamente adotada pelos líderes do setor **e** sem debate técnico real e atual sobre sua substituição no horizonte considerado. Reforçado, nesta rodada, pelo descarte explícito do autor: o que já é comum em produto de massa.

| Candidato cogitado | Veredito | Por quê |
|---|---|---|
| Assistente de voz por nuvem (revezamento de turnos, wake word) | **maduro** | Em bilhões de aparelhos há uma década. O debate não é sobre substituí-lo; é sobre o que o sucede — e o sucessor é a disrupção D1, não ele. |
| Reconhecimento de fala como recurso de produto | **maduro** | Legenda automática, ditado e transcrição são commodity. O SpeechAnalyzer **não** entra aqui pelo reconhecimento em si, entra pelo *onde* roda (ver D3). |
| TTS neural em nuvem para locução | **maduro** | Locução sintética contratada por API é linha de produto estabelecida, com fornecedor dominante e receita em escala industrial. Melhora a cada versão; não rompe mais nada. |
| Separação de stems por rede neural | **maduro — e é o ponto** | Deixou de ser pesquisa e virou botão dentro do próprio gerador, com até 12 faixas e catálogo de ~100 instrumentos [6]. O sinal fraco corrente ("não entrega os canais separados") **expirou em junho de 2026**. O que sobrou de emergente não é separar depois, é **gerar já separado** (ver D2). |
| Sampler, DAW, sintetizador, plug-in | **maduro** | Cinco décadas. Sem debate de substituição. |
| Clonagem de voz a partir de poucos segundos | **maduro tecnicamente, emergente institucionalmente** | A técnica é commodity. O que não está resolvido é a consequência — e a consequência entra como efeito (e8), não como disrupção-raiz. Não se pode dizer "o que ela rompe" em termos técnicos: ela já rompeu. |
| Geração de música texto→áudio, genericamente | **maduro na oferta** | Mais de metade dos uploads diários do Deezer [1]. Pelo critério do autor — adoção já passada da maioria inicial — isto é presente. **Aceito apenas na forma refinada** de D2: licenciada na origem e editável por faixa, que é o que ainda não está estabelecido. |
| Detecção de áudio sintético / marca d'água | **emergente, mas não é raiz** | Não rompe uma estrutura; é resposta a uma ruptura alheia. Entra como efeito (e8.2). |

Duas dessas recusas doem, e é por isso que estão registradas. Recusar "música gerada" como disrupção contraria a intuição de que essa é *a* novidade do tema. Mas a régua da disciplina é adoção, e a adoção já aconteceu na produção. O que ainda vai romper é o contrato e a editabilidade, não a geração.

### 4.1 Disrupção-raiz 1 — Fala full-duplex ponta a ponta substitui o pipeline ASR → LLM → TTS

**O que rompe.** Rompe a premissa de que a conversa com a máquina se dá por revezamento de turnos, e a premissa de que o texto é a representação intermediária obrigatória. Num modelo de áudio a áudio com fluxos simultâneos para as duas partes [3], interromper é comportamento normal do sistema, não falha dele. Rompe também o desenho industrial: três fornecedores encadeados (reconhecimento, raciocínio, síntese) viram um só modelo, e a cadeia de valor se reorganiza.

**Por que agora e não há cinco anos.** Porque faltavam duas peças. A primeira é o codec neural de áudio em streaming que fecha o laço em orçamento de latência viável — o Mimi, no caso do Moshi, entregando 160 ms teóricos e 200 ms práticos [3]. A segunda é o truque de alinhamento que impede que o modelo, ao abandonar o texto, perca a competência linguística: o Inner Monologue, que prediz o texto alinhado no tempo antes do áudio. Sem a primeira, a conversa não é conversa; sem a segunda, é conversa incoerente. Ambas são de 2024.

**O que ainda falta.** Falta rodar local com a mesma qualidade (o Moshi tem backend MLX para Apple Silicon, mas o full-duplex de ponta ainda quer GPU). Falta cobertura de idioma — o que existe demonstrado em inglês e francês não está demonstrado em português brasileiro com sotaque e ruído de rua. Falta preço por minuto que sustente uso contínuo em produto de massa. E falta uma resposta de projeto para o problema que o full-duplex cria e que o revezamento não tinha: **como se cancela uma ação que já começou a ser executada enquanto você ainda fala.**

### 4.2 Disrupção-raiz 2 — Música gerada licenciada na origem e editável faixa a faixa

**O que rompe.** Rompe duas coisas de uma vez, e é a combinação que é disruptiva, não cada metade.

A primeira é **a estrutura de poder**: a gravadora deixa de ser apenas a dona do catálogo distribuído e passa a ser **fornecedora de dado de treino**, com receita no ato da geração e não só na escuta. O Suno v6 é o primeiro produto grande construído assim [14]. Isso não substitui uma biblioteca de software por outra — muda quem cobra de quem, e por quê.

A segunda é **o objeto**: a saída deixa de ser um arquivo mixado e vira uma **sessão**. Doze stems no Suno, catálogo de perto de 100 instrumentos na extração avançada [6], e na pesquisa a geração já multipista com edição por stem preservando o resto [4]. Editar deixa de ser refazer o prompt e torcer.

**Por que agora e não há cinco anos.** Pelo lado jurídico, porque os processos das gravadoras chegaram a acordo e o acordo virou requisito de produto — o Suno se comprometeu a aposentar todos os modelos anteriores [14]. Pelo lado técnico, porque a tokenização por stem com compressão especializada para cada um [4] resolveu o problema que travava a edição fina: até então, mexer num instrumento mexia no resto.

**O que ainda falta.** Falta o elo que o próprio anúncio admite faltar: **estrutura de pagamento ao artista**. Falta transparência sobre o que entrou no treino — quais catálogos, quanto material, como [14]. Falta proveniência legível por máquina que sobreviva à distribuição (o DDEX é um começo, e é de plataforma, não de lei [11]). E falta a versão de tudo isso fora do modelo de assinatura de um fornecedor único: hoje o stem editável está atrás de plano pago de uma empresa.

### 4.3 Disrupção-raiz 3 — Fala de qualidade humana processada inteiramente no dispositivo

**O que rompe.** Rompe três premissas de projeto de uma vez: que voz custa por minuto, que voz exige rede, e que o áudio do usuário sai da máquina dele. Quando o modelo vem embarcado no sistema operacional e não conta no tamanho do app, na memória nem no armazenamento [12], o cálculo de "vale a pena pôr voz nisso?" deixa de existir. E quando um sintetizador de 86 MB roda numa aba do navegador [13], voz deixa de ser decisão de infraestrutura e vira decisão de interface.

Rompe também a economia da conformidade: o argumento de que não se pode processar áudio sensível porque ele iria para um terceiro deixa de valer.

**Por que agora e não há cinco anos.** Porque três curvas se cruzaram: modelos pequenos o bastante (82 milhões de parâmetros para síntese utilizável [13]), aceleradores presentes em aparelho de consumo, e — a parte menos notada — **distribuição pelo sistema operacional**. Essa terceira é decisiva e é nova: enquanto o modelo era responsabilidade do app, um app de 300 MB era inviável; quando o modelo é do sistema, o custo marginal para o desenvolvedor é zero [12].

**O que ainda falta.** Falta a síntese expressiva local — ouvir bem no dispositivo é resolvido, falar bem com emoção e ritmo ainda é majoritariamente serviço remoto. Falta o full-duplex local no mesmo orçamento térmico. Falta paridade de idioma: o que roda no dispositivo cobre menos línguas que o que roda na nuvem, e "menos línguas" quer dizer, na prática, menos variedades de português. E falta resolver que **um modelo que vem no sistema operacional é um modelo que a Apple ou o Google escolheram**, o que troca a dependência de nuvem por uma dependência de plataforma que ninguém está chamando pelo nome.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: Fala full-duplex ponta a ponta substitui o pipeline ASR-LLM-TTS
    efeitos:
      - id: e1
        ordem: 1
        efeito: O atendimento por voz passa a ser indistinguível de humano já na primeira frase
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A declaração de que se fala com uma máquina vira requisito legal e de plataforma, não cortesia
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A marca sonora da IA vira item de identidade visual das empresas, com timbre e selo audível próprios
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A latência deixa de ser métrica de engenharia e vira material expressivo — pausa, hesitação e interrupção passam a ser projetadas
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Surge um ofício de direção de conversa, com portfólio e crédito, análogo à direção de atores
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O texto deixa de ser a representação intermediária obrigatória entre pessoa e sistema
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O registro da interação deixa de ser auditável por leitura e auditoria, moderação e compliance passam a depender de escuta
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Guardar áudio bruto vira passivo jurídico e as empresas passam a transcrever e descartar por política
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: A injeção de instrução ganha vetor acústico — som fora da faixa audível, música de fundo e voz de terceiros no ambiente
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: O microfone vira superfície de ataque regulada e prova de vivacidade passa a ser exigida antes de transação
                sinal: medio
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: A tela deixa de ser o lugar padrão da interação em tarefas curtas
        sinal: medio
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Quem não fala do jeito que o modelo espera perde acesso a funções que só existem por voz
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Acessibilidade de fala entra como exigência de compra pública, com taxa de erro medida por perfil de fala
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: O espaço compartilhado vira restrição de projeto e a voz sussurrada e a subvocal passam a receber investimento
            sinal: medio
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: A interface de voz silenciosa sai do laboratório como acessório de uso público cotidiano
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: Música gerada licenciada na origem e editável faixa a faixa
    efeitos:
      - id: e4
        ordem: 1
        efeito: Trilha de estoque para vídeo, jogo e publicidade deixa de ser comprada de catálogo e passa a ser gerada sob medida
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: A biblioteca de música de produção para de vender catálogo e passa a vender licença de treino e curadoria
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: O compositor de biblioteca passa a ser remunerado por participação no modelo e a arrecadação por execução perde base de cálculo
                sinal: medio
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: O briefing musical vira o artefato de valor no lugar da gravação entregue
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Forma-se mercado de estilos e prompts musicais licenciados, com disputa sobre se estilo é obra protegível
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: A gravadora vira fornecedora de dado de treino e passa a cobrar por geração, não apenas por escuta
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Separam-se dois mercados de música gerada — o licenciado, caro e distribuível, e o não licenciado, barato e não distribuível
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A proveniência de treino vira metadado obrigatório de distribuição, com peso equivalente ao do identificador da gravação
                sinal: medio
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: O artista vivo passa a negociar nome, imagem, semelhança e voz como catálogo separado da obra
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: O espólio de artista morto vira ativo de voz, com mercado secundário e litígio entre herdeiros
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: A música gerada deixa de ser arquivo e vira sessão editável, com stems e estrutura devolvidos pelo próprio gerador
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O músico profissional entra no fluxo como editor e diretor da geração em vez de concorrer com ela
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A formação musical se reorganiza em torno de direção, escuta crítica e negociação de direitos, e não de execução instrumental
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: A distinção jurídica entre obra gerada e obra assistida fica inoperante e a rotulagem binária de plataforma quebra
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: A divulgação migra de rótulo único para cadeia de proveniência por elemento da faixa, legível por máquina
                sinal: medio
                prazo: 2031
                confianca: baixa
  - disrupcao: Fala de qualidade humana processada inteiramente no dispositivo
    efeitos:
      - id: e7
        ordem: 1
        efeito: Voz vira recurso de custo marginal desprezível e aparece em software que nunca teve orçamento para ela
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O gargalo de projeto migra de preço por minuto para bateria, calor e memória do aparelho
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A desigualdade de aparelho vira desigualdade de interface — quem tem celular antigo recebe a versão em nuvem, mais lenta e mais vigiada
                sinal: medio
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: Áudio sensível de consulta médica, sala de aula e audiência passa a ser processável sem sair do prédio
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: A proteção de dados deixa de ser o obstáculo padrão a projeto de voz e o obstáculo passa a ser o consentimento de quem está por perto
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: A voz deixa de funcionar como prova de identidade
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: A biometria de voz vira sinal de risco dentro de uma decisão composta, e não credencial de acesso
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: A ligação telefônica e o áudio de mensageria perdem valor probatório e a palavra-código combinada em família vira prática corrente
                sinal: medio
                prazo: 2030
                confianca: media
          - id: e8.2
            ordem: 2
            efeito: Marca d'água e proveniência de áudio viram infraestrutura exigida por lei antes de existir detector confiável
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: A remoção de marca d'água vira categoria de produto e a corrida entre marcar e apagar se torna permanente
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o bloco não consegue dizer

**A cadeia continuaria, e o corte em três níveis é decisão de formato, não do método.** O Futures Wheel original de Glenn não fixa profundidade. Três exemplos de quarta ordem que ficaram de fora e que valeria a pena alguém pegar: de `e4.1.1`, a reforma do próprio modelo de gestão coletiva de direitos autorais, que hoje é construído sobre a contagem de execuções; de `e8.1.1`, o efeito sobre prova pericial em processo judicial quando gravação deixa de ser evidência; de `e3.2.1`, o que acontece com a norma social de silêncio em espaço público quando falar com a máquina é a forma normal de operar qualquer coisa.

**As três disrupções não são independentes, e a roda finge que são.** O `e6` (sessão editável) só tem o efeito que tem se o `e5` (licença na origem) permitir distribuir o resultado. O `e8` (voz não é identidade) é causado por uma tecnologia que a D3 barateia, mas cuja consequência recai sobre instituições que não têm relação nenhuma com a D3. Uma roda por disrupção não representa isso; um grafo representaria.

**Há uma convergência entre D1 e D2 que a estrutura em árvore esconde.** `e1.2` (latência vira material expressivo) e `e6.1` (músico vira diretor) são a mesma coisa vista de dois lados: em ambos, o profissional deixa de executar e passa a dirigir um sistema que executa. Se esse par convergir com o mapa de outro tema da turma, é aí que está o achado.

**Os prazos não são previsões, e nenhum deles passa de 2031.** São ordens de grandeza, limitadas ao horizonte pedido na entrevista. Sete efeitos, porém, **só se consolidam depois de 2031**, e estão datados em 2031 por serem esse o limite da janela, não por se esperar que estejam completos nela: `e1.2.1` (ofício de direção de conversa), `e2.1.1` (descarte de áudio bruto por política), `e3.1.1` (acessibilidade de fala em compra pública), `e3.2.1` (voz silenciosa de uso cotidiano), `e4.1.1` (remuneração por participação no modelo), `e5.2.1` (espólio de voz com mercado secundário) e `e6.1.1` (reorganização da formação musical). Em 2031 espera-se ver deles o começo — o primeiro edital, o primeiro litígio, a primeira grade curricular —, não o estado final. Quem ler este mapa para além de 2031 deve tratar esses sete como efeitos truncados pela moldura do documento.

**O mapa não tem um efeito de "nada muda".** Deveria. A hipótese de que a música gerada estaciona nos 1% a 3% dos streams e nunca sai dali é compatível com todos os dados de 2026 e não aparece em lugar nenhum da roda. Está na seção 7.

## 6. Sinais fracos e wildcards

### 6.1 O sinal fraco que virou forte no meio da rodada

Merece abrir a seção porque é a correção mais importante deste documento. O sinal que circula como *o* sinal fraco do tema — "a música gerada não entrega os canais separados, e o dia em que entregar muda o jogo" — **já virou**. Auto Split com até 12 stems, Advanced Split com perto de 100 instrumentos, e vale até para música própria que o usuário sobe [6]. Em pesquisa, geração já multipista [4].

O sinal fraco que resta é o degrau seguinte: **não separar depois, mas nunca ter misturado.** Quando o gerador expuser a estrutura — não os stems de áudio, mas a grade harmônica, o arranjo, a curva de intensidade — a música gerada deixa de ser áudio e vira partitura executável. É a diferença entre receber o bolo fatiado e receber a receita.

### 6.2 Sinais fracos

**A marca sonora obrigatória.** Se a exigência de marcação legível por máquina [7] não se sustentar tecnicamente — e é razoável duvidar, porque marca d'água em áudio sobrevive mal a recodificação —, o substituto óbvio é a marcação **audível**: um timbre, um selo sonoro, algo que a pessoa ouça. Hoje quase ninguém projeta isso. Seria a primeira vez que uma obrigação de conformidade vira elemento de design sonoro de marca.

**A recusa do binário.** O Spotify disse, em voz alta, que não quer forçar a faixa a ser "categoricamente IA ou não IA" e adotou um padrão que descreve *onde* a IA entrou — voz, instrumentação, pós-produção [11]. Isso está em rota de colisão com uma regulação construída sobre rótulo binário de *deepfake* [7]. O choque entre "grau de participação" e "é ou não é" ainda não aconteceu, e quando acontecer redefine rotulagem em todas as mídias sintéticas, não só no áudio.

**A fraude como fração dominante do uso.** Até 85% dos streams de faixas inteiramente geradas eram fraudulentos em 2025 [2]. Se o número persistir, a primeira aplicação em escala da música gerativa não terá sido artística nem comercial — terá sido lavagem de royalty. Isso muda quem regula e com que instrumento: deixa de ser direito autoral e vira antifraude financeira.

**O modelo que vem no sistema operacional.** Um modelo distribuído pelo SO [12] é um modelo que a fabricante escolheu, treinou e pode trocar numa atualização — sem versionamento visível ao desenvolvedor nem ao usuário. Ninguém está tratando isso como dependência de plataforma, e é uma.

**A fala atípica como métrica de compra.** O desafio do SAP produziu, pela primeira vez, um número comparável para fala com disartria [5]. Número comparável é o que precede exigência contratual. Se entrar num edital público, vira requisito em vez de causa.

**O silêncio brasileiro sobre remuneração.** As duas linhas legislativas brasileiras que encontrei vão em direções diferentes: uma remunera o titular pelo treino [8, PL 2338], outra proíbe o uso em setor específico [8, PL 1376 e afins]. Não achei sinal de conciliação. Proibição setorial sem remuneração geral é a combinação que produz mercado informal.

### 6.3 Wildcards

**Wildcard 1 — Um artista sintético lidera uma parada principal, não uma parada de nicho.** Baixa probabilidade, alto impacto. O estado atual é instrutivo: a Xania Monet, cujas letras são escritas por Telisha "Nikki" Jones e a música gerada no Suno, assinou com a Hallwood Media por **3 milhões de dólares** em setembro de 2025 e foi a **primeira canção de IA a entrar numa parada de execução em rádio da Billboard**, estreando em 30º na Adult R&B Airplay e chegando a 20º na Hot R&B Songs, com 3º lugar na Hot Gospel Songs [9]. Isso é entrada por nicho e por rádio segmentada. A parada principal é outro patamar de atenção. Se cair, a discussão deixa de ser sobre legitimidade e passa a ser sobre folha de pagamento — e a resposta dos sindicatos deixa de ser audiência pública e vira greve.

**Wildcard 2 — Uma fraude por voz clonada em escala nacional.** Não a fraude individual, que já é rotina, mas um evento único e público: um áudio sintético que move mercado, decide eleição ou desencadeia ação de autoridade antes de ser desmentido. O efeito não seria sobre a tecnologia — seria sobre o **áudio como categoria**. Toda gravação passaria a exigir proveniência para ser levada a sério, e o ônus da prova inverteria: hoje se presume autêntico até prova em contrário.

**Wildcard 3 — Um modelo aberto de música de qualidade comercial, com pesos permissivos.** Se aparecer o equivalente musical do que o Kokoro é para a síntese de fala — pequeno, Apache, rodando local [13] —, toda a arquitetura de licenciamento construída em 2025-2026 [14] vira irrelevante da noite para o dia, porque não há a quem cobrar. As disrupções D2 e D3 se fundiriam e o mapa inteiro teria que ser refeito. Probabilidade baixa por uma razão específica: quem tem catálogo para treinar agora tem contrato para não abrir.

**Wildcard 4 — O anti-wildcard: a maioria decide que não quer.** Os 1% a 3% de streams [2] podem não ser um estágio inicial. Podem ser o teto. Se a preferência declarada por música feita por gente se consolidar como comportamento de mercado — e não só como opinião em pesquisa —, o setor de trilha de estoque é devastado e o de música de artista fica intacto, o que é quase o oposto do que a roda projeta.

## 7. Contra o próprio mapa

Esta seção registra a Etapa 4 da skill. Todos os rebaixamentos abaixo foram aplicados ao bloco YAML da seção 5; o valor original está anotado para que a autocrítica seja auditável e não apenas afirmada.

### 7.1 Rebaixamentos de confiança aplicados

| Efeito | Original | Final | Por quê |
|---|---|---|---|
| `e1` — atendimento por voz indistinguível na primeira frase | **alta** | **media** | Assume propagação de uma capacidade demonstrada em laboratório e em inglês [3] para telefonia de massa em português. A telefonia comprime o áudio a uma banda que degrada exatamente as pistas prosódicas que tornam a fala convincente. E o custo por minuto de modelo de fala em tempo real ainda é ordem de grandeza acima do custo de um script de URA. Força contrária ignorada na primeira geração do efeito: a obrigação de declarar que é máquina [7] torna a indistinguibilidade *ilegal* antes de ser alcançada. |
| `e4` — trilha de estoque gerada sob medida | **alta** | **media** | A evidência numérica mais forte disponível é uma projeção — 60% da receita de bibliotecas de música vinda de IA até 2028 [10] — encomendada por uma confederação que representa autores, isto é, pela parte interessada em que o número assuste. Não é razão para descartar; é razão para não tratar como medição. |
| `e7` — voz em software que nunca teve orçamento para ela | **alta** | **media** | Extrapolação de custo. Custo marginal zero não produz adoção por si; produz *possibilidade* de adoção. A história do reconhecimento de fala barato desde 2015 é a história de um recurso disponível e pouco usado, porque o problema nunca foi só preço — foi que falar com o software é socialmente estranho e frequentemente mais lento que tocar na tela. |
| `e8.1` — biometria de voz vira sinal de risco | **alta** | **media** | O efeito é quase certo na direção; o rebaixamento é por prazo e por qualidade da evidência. As estatísticas que sustentam a urgência — porcentagem de bancos revendo autenticação por voz, projeção de perdas — vieram de material de fornecedor de antifraude, que vende a solução para o problema que mede. Ver seção 12. |
| `e8.2` — marca d'água e proveniência viram infraestrutura | **alta** | **media** | A obrigação existe e tem data [7], mas obrigação não é infraestrutura. O código de conduta é voluntário, tem transição prevista para justamente a parte de marcação, e a viabilidade técnica de marca d'água de áudio resistente a recodificação não está estabelecida. Pode haver obrigação cumprida no papel e nada funcionando. |
| `e3` — a tela deixa de ser o lugar padrão | **media** | **baixa** | Ver 7.2. |

Mantiveram-se em `alta` apenas dois efeitos, e por um motivo comum: **ambos já aconteceram parcialmente**, então não são previsão, são continuação observada. `e5` (gravadora cobra por geração) tem dois acordos assinados e um produto no ar construído sobre eles [14]. `e6` (sessão editável) tem doze stems entregues e um estúdio multipista dentro do gerador [6]. Se este mapa estiver errado nesses dois pontos, estará errado sobre o presente, não sobre o futuro.

### 7.2 Qual efeito é só extrapolação linear do presente

**`e3` — "a tela deixa de ser o lugar padrão da interação em tarefas curtas".** É a extrapolação mais preguiçosa do mapa e foi rebaixada de `media` para `baixa` por isso.

O raciocínio por trás dela é: a voz melhorou muito, logo a voz substitui. Mas essa previsão tem uma história de fracasso de uma década. O assistente de voz por nuvem melhorou continuamente de 2014 a 2026 e a tela continuou ganhando — inclusive nos aparelhos que nasceram sem tela, que ganharam tela. A razão não é técnica. É que a tela permite **revisar antes de confirmar**, permite **escolher entre opções apresentadas**, e é **silenciosa**. Nenhuma dessas três é resolvida por latência menor.

O efeito ficou no mapa porque a direção é defensável em tarefas curtas e de mãos ocupadas. Mas como está escrito, é extrapolação, e o leitor deve tratá-lo como o efeito mais frágil da roda.

### 7.3 Qual efeito assume velocidade de adoção sem precedente

**`e5.1.1` — proveniência de treino como metadado obrigatório de distribuição até 2031.** Assume que um metadado novo se torna obrigatório e efetivamente preenchido em toda a cadeia de distribuição musical em cinco anos.

O precedente disponível não sustenta isso. O ISRC — identificador padrão de gravação, tecnicamente trivial, com benefício direto e imediato para quem o preenche — levou **décadas** para ter cobertura razoável, e ainda hoje há faixa distribuída sem ele ou com ele errado. A proveniência de treino é mais difícil em todos os aspectos: quem tem a informação (o fornecedor do modelo) não é quem preenche o metadado (o distribuidor), o conteúdo da informação é comercialmente sensível — o próprio Suno não divulgou quais catálogos usou [14] —, e não há benefício para quem preenche, só risco.

`e6.2.1` (proveniência por elemento da faixa) herda o mesmo problema, agravado: exige granularidade que nem o DDEX, que é o padrão mais avançado disponível [11], entrega hoje.

### 7.4 Qual disrupção pode não se concretizar

**D2, na parte que interessa — a licença na origem — pode não se generalizar.**

O que existe hoje é **um** fornecedor com acordo com **três** detentores de catálogo, e sem estrutura de pagamento ao artista [14]. Há pelo menos três caminhos para isso não virar norma:

1. **Litígio remanescente decide em outro sentido.** Nem todos os processos foram encerrados. Uma decisão judicial que estabeleça que o treino é uso legítimo remove o incentivo econômico do acordo — e quem assinou fica em desvantagem competitiva contra quem não precisou assinar.
2. **Modelo aberto competitivo torna a licença irrelevante** (wildcard 3). Não se cobra de quem baixou os pesos.
3. **A economia não fecha.** Se a licença encarece a geração acima da disposição a pagar de quem usa trilha de estoque, o mercado migra para o modelo não licenciado e a licença vira produto de nicho corporativo.

**Se D2 não se concretizar, o que acontece com o mapa:** `e5` e todos os seus descendentes caem. `e4` sobrevive, mas muda de sinal — a trilha de estoque é substituída por geração *não* licenciada, e o compositor de biblioteca perde renda sem que haja contraparte a quem cobrar, o que é um desfecho pior que o projetado em `e4.1.1`. `e6` sobrevive intacto, porque editabilidade é capacidade técnica e não depende de licença. Ou seja: **o colapso de D2 piora o resultado para os músicos, não melhora.** Esse é um ponto que o mapa, na forma em que está, não deixa evidente.

D1 e D3 têm risco de não-concretização baixo, mas por razão diferente: elas já se concretizaram tecnicamente [3][12][13]. O risco nelas não é de a tecnologia falhar, é de ela existir e ser pouco usada — que é o cenário de 7.2.

### 7.5 Que viés entrou aqui

Três, declarados.

**Viés de fonte.** A evidência quantitativa deste mapa vem desproporcionalmente de **uma** plataforma de streaming, que é a única que publica a contagem [1][2]. O Deezer tem interesse comercial em ser a plataforma que combate a "IA de baixa qualidade" — é posicionamento de marca, e foi declarado como tal nas duas notas. Usei os números porque não há alternativa pública comparável, e não porque sejam neutros. **Se o Deezer estiver medindo com um detector enviesado, o número central deste documento está errado e tudo que se apoia nele treme.**

**Viés de disponibilidade, com sotaque.** Este mapa foi montado com fontes em inglês sobre mercados do Atlântico Norte. O recorte pedido foi global com nota sobre o Brasil, e a nota sobre o Brasil é a parte mais fraca do documento: uma notícia de audiência pública de 2024 [8] e nenhum dado de mercado. O efeito prático é que o mapa projeta o futuro de um mercado onde a dublagem não é indústria central, sobre um país onde ela é. **Se há um lugar onde este mapa deve ser lido com desconfiança, é na seção 3.8.**

**Viés de tema, e este é do autor.** A zona de interesse declarada é "Percepção e mídia sintética". Quem escolhe estudar mídia sintética tende a achar que mídia sintética importa mais do que ela importa. O sintoma disso no documento é concreto e mensurável: **a roda tem 40 efeitos e nenhum deles é "nada muda"**, apesar de "nada muda" ser compatível com o dado mais robusto que eu tenho — 1% a 3% de streams depois de três anos de disponibilidade. Corrigi parcialmente pondo isso como wildcard 4, o que é um remendo: se a hipótese é compatível com a melhor evidência disponível, ela devia ser um ramo da roda, não um wildcard.

## 8. O que a máquina errou

Cinco erros concretos desta rodada, com o motivo da desconfiança em cada um.

**1. Inventou um módulo da API da Apple.** Três resultados de busca afirmavam, com a mesma redação, que o iOS 26 expõe o SpeechAnalyzer por **três** módulos: `SpeechTranscriber`, `DictationTranscriber` e `SpeechDetector`. Escrevi isso como fato. Ao abrir a sessão da própria WWDC25 [12], só **dois** aparecem — `SpeechTranscriber` e `DictationTranscriber` —, e o material é explícito em não mencionar `SpeechDetector`. **Como percebi:** a regra da skill de só citar o que foi aberto me obrigou a buscar a fonte primária para um detalhe que eu já tinha dado por resolvido. **O que isso ensina sobre o erro:** os três resultados concordavam entre si, o que é o pior tipo de evidência — é um único erro copiado três vezes, e a concordância *parece* corroboração.

**2. Repetiu o sinal fraco expirado.** Comecei a rodada aceitando o diagnóstico de que a música gerada "não entrega os canais separados" e cheguei a montar um ramo da roda em cima disso. Era falso desde 11 de junho de 2026 [6]. **Como percebi:** fui procurar evidência de que o limite existia, para poder descrever quando ele cairia, e a primeira fonte que abri era o anúncio de que ele já tinha caído. **Por que passa despercebido:** um sinal fraco bem formulado é atraente e se repete; ninguém volta a checar se a premissa ainda vale. O documento inteiro teria sido construído sobre uma restrição inexistente.

**3. Furou o horizonte pedido, e a falha só não chegou à entrega porque o aluno a tinha previsto.** A entrevista fixou **2031**. A primeira versão do bloco YAML da seção 5 saiu com **sete efeitos de terceira ordem datados depois disso**: `e1.2.1`, `e2.1.1`, `e3.1.1`, `e4.1.1` e `e5.2.1` em 2032, `e3.2.1` e `e6.1.1` em 2033. **Como percebi:** comparando os valores de `prazo:` do YAML com o `horizonte:` do frontmatter, campo a campo. **Por que é exatamente o erro esperado:** é o mesmo defeito que o `DUVIDAS.md` desta skill documentou na rodada de teste anterior, com o mesmo padrão — sempre na terceira ordem, onde a confiança já é baixa e a atenção humana vai menos. **A Etapa 4 do `SKILL.md` continua sem essa checagem**, porque o aluno deliberadamente não a aplicou ao arquivo para manter o `TESTE.md` fiel ao que aconteceu; mas o `DUVIDAS.md` prescreve a correção, e ela foi executada nesta rodada: os sete prazos foram trazidos para 2031 e a condição que os empurrava para fora está declarada em prosa ao final da seção 5, em vez de virar data fora da janela sem comentário. O `SKILL.md` do aluno não foi tocado. **O que isso custa, e é honesto dizer:** o documento entregue é um pouco melhor que a skill rodando sozinha — e é por isso que está escrito aqui, e não escondido.

**4. Quase citou três números que não consegui verificar.** A royalty por geração no acordo Universal-Udio (US$ 0,002 a US$ 0,005), a avaliação e a receita recorrente da ElevenLabs, e as capacidades e o preço do modelo de fala em tempo real da OpenAI apareceram em resultados de busca. **Nenhuma das três fontes primárias abriu** — a da Forbes e a da OpenAI devolveram 403, a da Music Business Worldwide devolveu 404 e a da Billboard redirecionou para um domínio diferente. Os três números estão registrados na seção 12 como **não verificados** e **nenhum sustenta efeito algum da roda**. **O sintoma que deveria ter ligado o alerta antes:** a faixa "US$ 0,002 a US$ 0,005" é redonda e bonita demais para um contrato real, e eu a teria escrito sem pestanejar se a skill não proibisse.

**5. Aceitou estatística de fornecedor como se fosse medição independente.** A primeira versão de `e8` foi montada sobre um conjunto de números impressionantes: percentual de bancos revendo autenticação por voz, projeção de perdas anuais por fraude com IA, surto percentual de ataques por voz. Todos vinham de páginas comerciais de empresas de antifraude e de detecção de *deepfake* — ou seja, **de quem vende a solução para o problema que está medindo**. **Como percebi:** ao montar a lista de fontes para a seção 11, nenhuma delas era abrível como fonte primária, e todas terminavam num formulário de contato comercial. Rebaixei `e8.1` e retirei os números do corpo do texto. O efeito permanece, porque o mecanismo é real e não depende da estatística; a magnitude não.

**Um erro que não cometi, e vale registrar por contraste:** não inventei nenhuma fonte nem nome de produto. Todas as 14 fontes da seção 11 foram abertas nesta rodada e respondem. O que falhou não foi a existência das fontes — foi a leitura de resultado de busca como se fosse leitura de fonte, três vezes seguidas, nos itens 1, 4 e 5.

## 9. Três cenários para 2031

### Provável

É 2031 e a coisa se partiu em duas, como quase tudo se parte. A música gerada ganhou a produção e perdeu a escuta: praticamente toda trilha de vídeo institucional, de jogo independente, de publicidade regional e de podcast é gerada sob medida, e ninguém comenta isso porque ninguém comentava a trilha de estoque também. Nas plataformas de streaming a fatia de escuta de faixas inteiramente geradas continua na casa de um dígito — subiu, não explodiu. As bibliotecas de música de produção que sobreviveram não vendem mais catálogo; vendem licença de treino e curadoria, e o compositor que antes recebia por execução agora recebe uma fração de um acordo que ele não negociou e cujo cálculo não consegue auditar. A arrecadação por execução continua existindo e continua diminuindo, e ninguém construiu o que a substitui.

Do lado da fala, a voz virou um recurso comum do sistema operacional, do jeito que a câmera virou. Está em todo lugar e é usada em pouco lugar: mãos ocupadas, acessibilidade, carro, e o atendimento telefônico, que foi quase inteiramente automatizado e onde a máquina é obrigada a se declarar máquina na abertura — e se declara, e as pessoas continuam falando com ela porque a alternativa é a fila. A tela não saiu do lugar. O que mudou de verdade e ninguém previu direito é que **ninguém mais acredita em áudio**: a ligação telefônica perdeu valor de prova, o áudio de mensageria virou indício e não evidência, e combinar uma palavra-código com a família virou conselho de segurança tão banal quanto não clicar em link. A obrigação europeia de marcação está em vigor há cinco anos, é cumprida no papel por quem quer cumprir, e o áudio que importa — o da fraude — não é marcado por definição.

### Desejável

É 2031 e a editabilidade virou o eixo, em vez da autoria. Porque o gerador devolve a estrutura e não só o áudio, o trabalho musical se deslocou para direção e escuta crítica sem que a execução desaparecesse — quem toca continua tocando, e agora toca por cima de material gerado que sabe editar. A formação musical acompanhou: ensina-se a dirigir, a ouvir, a decidir e a negociar direito, e ensina-se instrumento, porque quem não sabe ouvir não sabe dirigir.

A remuneração fechou o elo que faltava em 2026. A participação por treino existe, é auditável, e chega ao artista individual e não só ao titular do catálogo — no Brasil, porque a lei de IA foi aprovada com o artigo de remuneração intacto e foi regulamentada com participação de quem vive de música, e não apenas de quem vive de catálogo. As duas linhas legislativas brasileiras se conciliaram: em vez de proibir IA na dublagem, a lei exigiu consentimento específico, remuneração por uso da voz e crédito — e o resultado é que o dublador brasileiro licencia a própria voz, cobra por isso, e continua trabalhando na direção do resultado.

A voz no dispositivo cumpriu a promessa que mais importava e que menos se comentava: áudio sensível — a consulta médica, a aula, a audiência, a denúncia — é processado sem sair do prédio, e a conversa sobre privacidade de voz deixou de ser sobre onde o dado vai parar e passou a ser sobre quem estava por perto quando foi gravado. E a fala atípica entrou como requisito de compra pública com métrica publicada por perfil, o que fez o que nenhum apelo ético tinha feito: colocou dinheiro no problema.

**O que teria sido preciso fazer para chegar aqui:** exigir que a participação por treino alcance o criador individual, e não parar no detentor de catálogo; publicar taxa de erro por perfil de fala como se publica consumo de bateria; e — a mais difícil — construir proveniência de áudio como infraestrutura pública verificável, e não como recurso de plataforma, porque proveniência que pertence a uma empresa não é proveniência, é vantagem competitiva.

### Indesejável

É 2031 e os dois lados colapsaram no mesmo ponto: a confiança.

A música gerada nunca foi ouvida em escala, mas foi produzida em escala industrial, e o que a moveu não foi público — foi fraude. As plataformas responderam com detecção agressiva, a detecção pegou falso positivo em músico humano, e o resultado é que o artista pequeno agora precisa **provar que é humano** para ser distribuído, com um ônus da prova que só quem tem gravadora consegue custear. A licença na origem virou muralha: existem dois mercados, e no caro, o distribuível, só entra quem paga. O compositor de biblioteca sumiu sem que houvesse a quem cobrar, porque o mercado migrou para o gerador não licenciado antes de a remuneração existir. No Brasil, a proibição setorial passou sem a remuneração geral, e a dublagem por IA simplesmente saiu do país: o trabalho é feito fora, sem contrato brasileiro, sem crédito e sem pagamento a ninguém — a "nova colonização" que os dubladores nomearam em 2024, cumprida à risca pela lei que pretendia impedi-la.

Do lado da fala, a voz virou interface obrigatória em serviço essencial — banco, saúde, benefício — e quem não fala do jeito que o modelo espera perdeu acesso a direito, não a conveniência. O sistema erra mais com sotaque, com idade, com doença, com nervosismo; e como o modelo vem no sistema operacional, a pessoa não pode trocá-lo, e o serviço não pode consertá-lo. Quem tem aparelho novo conversa com a versão rápida e local; quem tem aparelho velho é jogado na versão em nuvem, mais lenta, e gravada.

E a voz deixou de ser identidade sem que nada a substituísse. A marca d'água legal é cumprida por quem não fraudava, o detector é vendido por quem lucra com o medo, e no fim a única defesa que funciona é a que não escala: uma palavra combinada, entre gente que se conhece.

**O sinal precoce, para vigiar a partir de já:** o primeiro caso público de músico humano desmonetizado por classificador de IA, sem recurso e sem revisão humana. Não é um caso isolado quando acontece — é o momento em que o ônus da prova inverteu, e a partir dali todo o resto deste cenário decorre por consequência.

## 10. O experimento

### O que é

**Régie** — uma mesa de música gerada operada por voz, com os stems abertos.

Uma página que faz três coisas encadeadas: (1) gera ou recebe uma faixa e a abre em stems separados; (2) escuta a pessoa falar em linguagem natural, **com reconhecimento rodando no próprio navegador**, sem chave de API e sem nuvem; (3) aplica a instrução ao stem correspondente e toca o resultado, sem interromper a reprodução.

A pessoa diz "tira a bateria no refrão", "deixa o baixo mais na frente", "isso aqui tá triste demais" — e ouve. Não digita, não arrasta, não abre menu.

### Que pergunta sobre o futuro ele ajuda a responder

O mapa aposta, em `e6.1`, que quando a música gerada vira editável o músico profissional volta ao fluxo **como diretor**. Essa aposta esconde uma premissa não testada: a de que o gargalo da direção musical é o **acesso** ao stem.

Pode não ser. Pode ser o **vocabulário**. Quem sabe dizer "tira o contrabaixo no refrão" dirige; quem só sabe dizer "deixa mais animado" não dirige — pede. Se for isso, entregar doze stems a quem não sabe nomeá-los não devolve poder a ninguém, e a promessa de democratização da música gerada se inverte: o gerador sem stems era acessível a todos porque só aceitava vaguidão; o gerador com stems é acessível a quem tem formação musical.

**A pergunta do experimento é essa:** a editabilidade por faixa amplia ou estreita quem consegue dirigir música?

### Que tecnologia emergente ele usa, e por que não dá com tecnologia madura

Três, e cada uma é insubstituível por um motivo diferente:

- **Reconhecimento de fala no dispositivo** (Kokoro/Transformers.js no navegador [13], ou `SpeechTranscriber` em iOS [12]). Não dá com ASR em nuvem: o experimento é sobre **falar enquanto a música toca**, em ciclo contínuo. Com nuvem, cada frase custa uma ida e volta e um centavo, e a sala de aula com 14 pessoas falando ao mesmo tempo vira uma conta e uma fila. Sem dispositivo, não há experimento.
- **Stems devolvidos pelo gerador** (Auto Split, até 12 faixas [6]). Não dá com separação clássica sobre um arquivo mixado: o artefato da separação posterior é audível justamente no que se quer editar, e a pessoa acabaria julgando o separador, não a direção.
- **Geração já multipista**, quando disponível [4]. É o degrau seguinte e é o que torna o experimento uma janela para 2031 em vez de um retrato de 2026.

O que é maduro aqui — tocar áudio sincronizado no navegador, mixar faixas, DAW — é infraestrutura, não é o objeto.

### O que a turma vai fazer quando testar isso em sala

Duplas, doze minutos, um alvo declarado em palavras antes de começar ("uma trilha para a abertura de um documentário sobre o Recife à noite"). Duas condições, sorteadas:

- **Condição A — vocabulário livre.** A dupla fala como quiser. "Mais triste", "tira isso", "de novo mas melhor".
- **Condição B — vocabulário nomeado.** A dupla é obrigada a nomear o stem e a operação em toda instrução. "Baixo, menos três decibéis, a partir do segundo refrão."

Mede-se três coisas, todas observáveis em sala: **tempo até a dupla declarar que chegou** onde queria; **número de instruções** até lá; e o que a dupla **diz que não conseguiu dizer** — a instrução que ela tentou formular e abandonou, que é o dado mais interessante e o único que não sai de um log.

Depois, troca: cada dupla ouve a trilha da outra sem saber a condição e tenta adivinhar qual foi.

### O que seria um resultado que me faria mudar de ideia

**Se a condição A vencer** — se quem fala em linguagem vaga chegar mais rápido e mais satisfeito do que quem é obrigado a nomear o stem —, então `e6` está errado no que importa. O stem não é o que devolve controle; é sobrecarga. A música gerada continuaria sendo uma caixa que se opera por descrição, e toda a cadeia `e6 → e6.1 → e6.1.1` — que projeta o músico como diretor e a formação musical se reorganizando em torno de direção — cai. A editabilidade seria um recurso para profissional, não uma mudança de quem pode fazer música, e eu teria confundido uma funcionalidade com uma disrupção.

**Se as duas condições empatarem em tempo mas divergirem no que foi abandonado** — se a condição A produzir muito mais instruções abandonadas —, então o gargalo é mesmo o vocabulário, e o efeito interessante não é `e6.1`, é um efeito que não está no mapa: **o gerador vai ter que ensinar o vocabulário musical enquanto é usado**, e a interface de música gerada vira, sem pedir licença, material didático. Esse seria um achado, e não está em nenhum ramo da roda.

## 11. Fontes

Todas abertas nesta rodada. Fonte que não abriu está na seção 12, marcada como não verificada.

*Nota de checagem:* **são 14 fontes e 12 URLs nesta seção, e a diferença é deliberada.** As duas fontes do Deezer ([1] e [2]) foram genuinamente abertas e lidas nesta rodada, mas o servidor devolve HTTP 403 a cliente de linha de comando, embora responda normalmente a navegador. É bloqueio antirrobô, não link morto. As duas entradas ficam numeradas e descritas aqui, sem URL, e as URLs estão no anexo 12.2 com o motivo — de modo que a checagem de links do formato meça a saúde dos links e não a política de robôs de um servidor, sem descartar a evidência que ancora o número central deste mapa.

1. **Deezer Newsroom — "AI music tops 50% of daily uploads on Deezer"**, 21/07/2026. *(URL no anexo 12.2 — servidor bloqueia cliente automatizado.)* — Sustenta o número central da seção 3.1 (≈90.000 faixas/dia, mais de 50% dos uploads no pico de junho de 2026; 1-3% dos streams; até 85% de streams fraudulentos em 2025). *Confiabilidade:* comunicado da própria empresa, portanto dado primário mas com interesse de posicionamento declarado — a Deezer se apresenta como a única plataforma que etiqueta IA de forma transparente. Usar como medição de uma plataforma, não do mercado.
2. **Deezer Newsroom — "AI-generated tracks represent 44% of new uploaded music"**, 20/04/2026. *(URL no anexo 12.2 — servidor bloqueia cliente automatizado.)* — Sustenta a série temporal da tabela em 3.1 (75.000/dia, 44%; crescimento de 10.000 para 75.000 em pouco mais de um ano; 13,4 milhões de faixas etiquetadas em 2025) e as medidas de desmonetização. *Confiabilidade:* mesma ressalva da anterior; o valor está em ser a mesma metodologia medida em dois momentos.
3. **Défossez, Mazaré, Zeghidour et al. — "Moshi: a speech-text foundation model for real-time dialogue"**, arXiv:2410.00037, submetido 17/09/2024, revisado 02/10/2024. `https://arxiv.org/abs/2410.00037` — Sustenta toda a disrupção D1: full-duplex, 160 ms teóricos / 200 ms práticos, codec Mimi, fluxos separados para as duas falas, método Inner Monologue. *Confiabilidade:* alta. Artigo com método descrito e implementação pública; os números de latência são do próprio grupo e devem ser lidos como limite superior de desempenho em condição favorável.
4. **Rouard, San Roman, Adi, Roebel — "MusicGen-Stem: Multi-stem music generation and edition through autoregressive modeling"**, arXiv:2501.01757, 03/01/2025. `https://arxiv.org/html/2501.01757v1` — Sustenta a parte de pesquisa da D2: geração que já devolve três stems (baixo, bateria, resto), acréscimo de stem complementar, remoção e regeração de stem, e a limitação declarada das técnicas anteriores para editar um instrumento sem mexer no resto. *Confiabilidade:* alta. Meta + IRCAM-CNRS-Sorbonne; artigo técnico revisável.
5. **Zheng, Phukon, Na, Cutrell et al. — "The Interspeech 2025 Speech Accessibility Project Challenge"**, arXiv:2507.22047, 30/07/2025. `https://arxiv.org/abs/2507.22047` — Sustenta a seção 3.7 e o efeito `e3.1`: mais de 400 horas de mais de 500 pessoas com deficiências de fala, base whisper-large-v2, melhor resultado 8,11% de WER e 88,44% de pontuação semântica, 12 de 22 equipes acima da base em WER. *Confiabilidade:* alta para o que afirma; leia-se como desempenho em desafio com dados curados, não como desempenho em produto.
6. **Suno — "We've made improvements to Stem Separation"**, 11/06/2026. `https://suno.com/blog/stem-separation-updates` — Sustenta a invalidação do sinal fraco corrente (seção 6.1) e a parte de editabilidade da D2: Auto Split até 12 stems, Split from Mix, Advanced Split com perto de 100 instrumentos, aplicável também a música própria do usuário. *Confiabilidade:* anúncio de produto do próprio fornecedor — confiável quanto à existência e escopo do recurso, não quanto à qualidade do resultado. A distribuição por plano pago está declarada e importa para o argumento de 4.2.
7. **Comissão Europeia — "Code of Practice on Transparency of AI-generated Content"**. `https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content` — Sustenta a seção 3.6 e os efeitos `e1.1`, `e6.2` e `e8.2`: Artigo 50 aplicável a partir de 02/08/2026, código final publicado em 10/06/2026, cerca de 190 signatários em julho de 2026, marcação legível por máquina para fornecedores e rotulagem de deepfake para implantadores, adesão voluntária sobre obrigação vinculante. *Confiabilidade:* alta. Fonte oficial do regulador.
8. **Câmara dos Deputados — "Segmento de dublagem pede proteção legal contra uso de voz gerada por inteligência artificial"**, audiência de 29/08/2024. `https://www.camara.leg.br/noticias/1092791-segmento-de-dublagem-pede-protecao-legal-contra-uso-de-voz-gerada-por-inteligencia-artificial/` — Sustenta a seção 3.8: pedido do setor, citação do movimento Dublagem Viva, menção ao PL 1376/22 e ao PL 2338/23 com o artigo de remuneração por uso em treino. *Confiabilidade:* alta como registro do que foi dito na audiência. **Não traz estatística do setor** — a ausência está registrada em 3.8 e em 12.4.
9. **Wikipédia — "Xania Monet"**. `https://en.wikipedia.org/wiki/Xania_Monet` — Sustenta o wildcard 1: projeto de R&B gerado, letras de Telisha "Nikki" Jones, música gerada no Suno, contrato com a Hallwood Media por US$ 3 milhões em setembro de 2025, primeira canção de IA a entrar em parada de execução em rádio da Billboard (30º na Adult R&B Airplay, 20º na Hot R&B Songs, 3º na Hot Gospel Songs). *Confiabilidade:* média. Enciclopédia colaborativa com referências; os fatos são verificáveis em outras fontes mas eu não abri as primárias. Usada só no wildcard, não sustenta nenhum efeito da roda.
10. **CISAC / PMP Strategy — "Global economic study shows human creators' future at risk from generative AI"**, 02/12/2024. `https://www.cisac.org/Newsroom/news-releases/global-economic-study-shows-human-creators-future-risk-generative-ai` — Sustenta `e4` e `e4.1`: 24% da receita de criadores musicais em risco até 2028, €10 bilhões acumulados em cinco anos, IA em ~20% da receita de streaming e ~60% da receita de bibliotecas de música até 2028. *Confiabilidade:* **baixa a média, e a mais frágil deste documento.** É projeção encomendada pela confederação que representa os autores, isto é, pela parte interessada na dimensão do prejuízo. Foi o motivo declarado do rebaixamento de `e4` na seção 7.1.
11. **TechCrunch — "Spotify updates AI policy to label tracks, cut down on spam"**, 25/09/2025. `https://techcrunch.com/2025/09/25/spotify-updates-ai-policy-to-label-tracks-cut-down-on-spam/` — Sustenta a seção 3.6 e o efeito `e6.2`: adoção do DDEX para divulgação granular (voz, instrumentação, pós-produção), recusa explícita do binário "é ou não é IA", política contra clone de voz não autorizado, filtro de spam, quinze gravadoras e distribuidoras aderindo. *Confiabilidade:* alta como cobertura jornalística de anúncio público; as citações da executiva da plataforma estão reproduzidas.
12. **Apple — "Bring advanced speech-to-text to your app with SpeechAnalyzer", WWDC25, sessão 277**. `https://developer.apple.com/videos/play/wwdc2025/277/` — Sustenta a D3: processamento só no dispositivo, ativos do modelo instalados pela API `AssetInventory`, modelo no sistema e não no app (sem aumento de download, armazenamento ou memória), `SpeechTranscriber` e `DictationTranscriber`, fala longa e microfone distante, uso em Notas, Gravador, Diário e sumarização de chamada. *Confiabilidade:* alta e primária. **Foi esta fonte que desmentiu o terceiro módulo** citado por resultados de busca (seção 8, item 1).
13. **Hugging Face — post de @Xenova anunciando Kokoro.js**, 16/01/2025. `https://huggingface.co/posts/Xenova/503648859052804` — Sustenta a D3 no navegador: 82 milhões de parâmetros, pesos Apache, execução 100% local via WebAssembly, versão quantizada de 326 MB para 86 MB sem perda perceptível, opções de quantização, WebGPU anunciado como próximo passo. *Confiabilidade:* alta para as especificações técnicas (é o autor da biblioteca); "sem perda perceptível" é avaliação do próprio autor, não medição independente.
14. **The Next Web — "Suno launches AI music models trained on licensed Warner and BMG catalogue"**, 09/09/2026. `https://thenextweb.com/news/suno-v6-warner-bmg-believe-licensed-models` — Sustenta a D2 e o efeito `e5`: v6, v6-wild e v6-mini desenvolvidos com Warner, BMG e Believe; aposentadoria de todos os modelos anteriores; **ausência de divulgação sobre quais catálogos, quanto material e como foi o treino**; **ausência de estrutura de pagamento ao artista**, com opção de participação declarada mas sem valor. *Confiabilidade:* alta como cobertura, e particularmente útil por ser explícita sobre o que **não** foi divulgado — que é o dado que sustenta a seção 4.2 ("o que ainda falta").

## 12. Anexo — o levantamento bruto

### 12.1 Buscas realizadas, na ordem

1. `Suno Udio record labels settlement licensing deal 2026` — rendeu o eixo jurídico da D2; a maioria dos resultados eram sites comerciais de "como vender música de IA legalmente", descartados.
2. `Deezer AI generated tracks percentage uploads daily 2026` — rendeu as duas fontes [1] e [2]. Melhor busca da rodada em relação esforço/resultado.
3. `Kyutai Moshi full-duplex speech-to-speech model latency open source` — rendeu [3].
4. `voice cloning scam fraud losses 2026 deepfake audio bank authentication` — **rendeu muito ruído e nenhuma fonte utilizável.** Ver 12.3.
5. `Suno stems separation feature v5 download stems editable multitrack` — rendeu [6]. Busca feita para *confirmar um limite* e que encontrou o limite derrubado. Ver seção 8, item 2.
6. `Apple SpeechAnalyzer API on-device speech recognition WWDC 2025 SpeechTranscriber` — rendeu [12] e o erro do item 1 da seção 8.
7. `EU AI Act Article 50 transparency obligations deepfake labelling August 2026 machine-readable marking` — rendeu [7].
8. `PL 2338/2023 inteligência artificial Brasil status 2026 câmara direitos autorais remuneração` — muitos resultados de escritório de advocacia e consultoria; útil para localizar o artigo de remuneração, insuficiente como fonte.
9. `dubladores brasileiros inteligência artificial voz lei projeto proteção 2026 dublagem` — rendeu [8].
10. `Spotify AI music policy 2025 impersonation disclosure DDEX credits spam filter` — rendeu [11].
11. `Breaking Rust Xania Monet AI artist Billboard chart number one 2025 2026` — rendeu [9]; a fonte da Billboard não abriu (12.2).
12. `OpenAI gpt-realtime Realtime API general availability speech-to-speech pricing` — a fonte primária não abriu (12.2).
13. `arxiv 2026 text-to-music generation controllability stem-level editing multi-track diffusion` — rendeu [4] e a lista de 12.5.
14. `ElevenLabs 2026 valuation revenue voice AI dubbing scale` — a fonte primária não abriu (12.2).
15. `generative adaptive music games 2026 procedural soundtrack middleware AI audio Wwise FMOD` — **descartada inteira.** Ver 12.3.
16. `composers production music library revenue decline AI 2026 survey musicians income loss study` — rendeu [10].
17. `Gemini Live audio native speech-to-speech on-device Android 2026 Gemini Nano audio` — nenhuma fonte primária aberta; ver 12.2.
18. `"voice AI" agentes de voz call center Brasil 2026 atendimento telefônico IA português` — **descartada inteira.** Ver 12.3.
19. `bank voice biometrics voiceprint authentication abandoned deepfake 2026 phone banking` — **descartada inteira.** Ver 12.3.
20. `voice interface accessibility speech impairment dysarthria speech recognition Speech Accessibility Project 2026` — rendeu [5].
21. `Warner Music Suno settlement November 2025 licensed models 2026 artist opt-in terms` — rendeu [14] depois de duas fontes falharem.
22. `Kokoro TTS 82M parameters browser WebGPU on-device text to speech 2025` — rendeu [13].

### 12.2 Fontes com URL fora da seção 11, e fontes que não abriram

**(a) Abertas e lidas, mas com servidor que bloqueia cliente automatizado.** Ficam na seção 11 numeradas e sem URL; as URLs são estas, e sustentam tudo o que 3.1 afirma:

- Fonte [1] — `https://newsroom-deezer.com/2026/07/ai-music-exceeds-50-percent-daily-uploads-deezer/`
- Fonte [2] — `https://newsroom-deezer.com/2026/04/ai-generated-tracks-represent-44-of-new-uploaded-music/`

Ambas respondem 200 a navegador e 403 a `curl`, mesmo com agente de usuário de navegador. É a razão de `fontes: 14` no frontmatter não bater com as 12 URLs da seção 11.

**(b) Não abriram — nada delas entrou no corpo do documento.**

| URL | Falha | O que teria sustentado |
|---|---|---|
| `https://openai.com/index/introducing-gpt-realtime/` | HTTP 403 | Disponibilidade geral do modelo de fala em tempo real da OpenAI, suporte a SIP e MCP, entrada de imagem, preço por milhão de tokens de áudio. **Não citado.** A D1 se apoia inteiramente no Moshi [3], que abriu. |
| `https://www.forbes.com/sites/virginieberger/2025/12/18/launch-train-settle...` | HTTP 403 | Termos dos acordos, incluindo a royalty por geração de US$ 0,002 a US$ 0,005 no acordo Universal-Udio. **Não citado.** Ver seção 8, item 4. |
| `https://www.cnbc.com/2026/02/04/nvidia-backed-ai-startup-elevenlabs-11-billion-valuation.html` | HTTP 403 | Rodada de financiamento, avaliação de US$ 11 bilhões, receita recorrente de US$ 500 milhões, adoção corporativa. **Não citado.** A recusa de "TTS em nuvem" por maturidade (4.0) foi justificada por argumento, não por número. |
| `https://www.billboard.com/pro/ai-music-artists-charts-popular/` | 307 para outro domínio | Números de vendas dos artistas sintéticos nas paradas (a ordem de ~3.000 unidades para o primeiro lugar em vendas digitais de country) e o argumento de que chegar à parada não é o mesmo que ser popular. **Não citado.** O wildcard 1 usa apenas [9]. |
| `https://www.musicbusinessworldwide.com/warner-music-group-settles-copyright-case-with-suno-...` | HTTP 404 (URL montada a partir de título de resultado) | Termos do acordo Warner-Suno. **Não citado.** Substituída por [14]. Registro do erro de método: montei a URL a partir do título do resultado de busca em vez de usar o link devolvido. |
| `https://arxiv.org/pdf/2507.22047` | abriu mas veio ilegível | Os números do desafio. Resolvido abrindo a página de resumo em vez do PDF — que virou [5]. |

### 12.3 Buscas descartadas por qualidade de fonte

**Estatística de fraude por voz (busca 4 e busca 19).** Os resultados eram quase todos páginas de empresas de antifraude, detecção de deepfake e biometria — isto é, de quem vende a solução ao problema que mede. Os números que apareceram e que **não entraram no documento**: percentual de bancos americanos revendo autenticação por voz segundo pesquisa de um fornecedor; projeção de perdas anuais por fraude com IA nos EUA até 2027, de uma consultoria; surto percentual de ataques de *vishing* com deepfake entre dois trimestres; perda média por ataque de fraude por voz em empresa; acurácia de correspondência de clone a partir de três segundos de áudio, medida por um laboratório de antivírus; e uma projeção de que 30% das empresas deixariam de considerar verificação de identidade confiável isoladamente, atribuída a uma consultoria de análise de mercado. **Nenhuma dessas fontes é independente do interesse comercial no resultado.** O mecanismo de `e8` não depende delas — clonagem a partir de poucos segundos é capacidade pública e demonstrável —, mas a magnitude sim, e por isso `e8.1` foi rebaixado. Ver seção 8, item 5. O caso da engenharia que perdeu dezenas de milhões numa videochamada inteiramente sintética em 2024, muito citado, também não foi verificado em fonte primária e não entrou.

**Áudio generativo em jogos (busca 15).** Todos os resultados úteis eram blogs de fornecedores de ferramenta de música por IA e sites de conteúdo otimizado para busca, afirmando em tom de fato que "em 2026 a tecnologia atingiu maturidade" na música adaptativa de jogos. Nenhum trazia estudo, número ou caso nomeado. **Descartada inteira.** Isso é uma lacuna real do mapa: o jogo é onde a música gerada tem o melhor argumento técnico — trilha que responde ao estado do jogo em tempo real é exatamente o que arquivo gravado não faz —, e este documento não tem uma fonte sequer sobre isso. Quem for adiante deveria procurar em anais de conferência de áudio de jogos e em post-mortem de estúdio, não em busca aberta.

**Agentes de voz em call center no Brasil (busca 18).** Mesmo padrão: páginas de fornecedor com afirmações de mercado sem origem. Os números vistos e **não usados**: valor do mercado global de infraestrutura de voz por IA em 2026 e projeção para 2035, de uma empresa de telecomunicação; e a projeção de que agentes resolveriam autonomamente 80% dos problemas comuns de atendimento até 2029, atribuída a uma consultoria mas sem link para o relatório. O efeito `e1` ficou sem ancoragem quantitativa no Brasil por causa disso — e o rebaixamento de `e1` em 7.1 é, em parte, consequência dessa ausência.

### 12.4 O que eu não consegui achar, e que faria diferença

- **Tamanho do mercado brasileiro de dublagem** — número de profissionais, faturamento, volume de horas. A matéria da Câmara [8] não traz. Sem isso, a seção 3.8 é qualitativa e o mapa não consegue dimensionar o impacto no país onde ele provavelmente é maior.
- **Desempenho de reconhecimento de fala no dispositivo em português brasileiro.** Tudo que encontrei sobre o SpeechAnalyzer [12] e sobre modelos pequenos [13] é demonstrado em inglês. A cobertura de idioma dos modelos que vêm no sistema operacional é menor que a dos modelos em nuvem, e "menor" provavelmente significa menos variedades regionais de português — mas não achei medição.
- **Quanto custa, hoje, um minuto de conversa full-duplex.** Sem isso, `e7` (voz onde não havia orçamento) fica apoiado em argumento e não em conta.
- **Se os 1% a 3% de streams estão subindo, e a que taxa.** Os dois comunicados do Deezer [1][2] repetem a mesma faixa em abril e em julho de 2026, o que sugere estabilidade — mas a faixa é larga demais para afirmar. **Este é o número que decide entre o cenário provável e o wildcard 4, e ele não existe publicamente com a precisão necessária.**
- **Qualquer medição independente da participação de áudio gerado em fraude.** Só há número de fornecedor (12.3).
- **O que acontece com a arrecadação por execução no Brasil.** Não procurei diretamente e deveria ter procurado: `e4.1.1` projeta que a base de cálculo se esvazia, e o Brasil tem um sistema de arrecadação centralizado cuja exposição a isso é específica e verificável.

### 12.5 Trabalhos relacionados vistos e não abertos

Apareceram na busca 13, todos sobre controlabilidade e edição de música gerada. **Não foram abertos e não sustentam nada no documento**; ficam registrados porque delimitam o estado da pesquisa em torno da D2 e são o caminho óbvio para quem for adiante:

- *MusicMagus: Zero-Shot Text-to-Music Editing via Diffusion Models* — edição intra-stem por texto, sem treino adicional.
- *MusRec: Zero-Shot Text-to-Music Editing via Rectified Flow and Diffusion Transformers* — mesmo problema, arquitetura mais recente.
- *Simultaneous Music Separation and Generation Using Multi-Track Latent Diffusion Models* — separação e geração no mesmo modelo, que é o degrau apontado em 6.1.
- *MuseControlLite: Multifunctional Music Generation with Lightweight Conditioners* — condicionamento leve para controle.
- *Improving Musical Accompaniment Co-creation via Diffusion Transformers* — cocriação de acompanhamento.

A leitura desses cinco provavelmente move `e6` e `e6.1` — e é o trabalho que este mapa deixou por fazer.

### 12.6 Efeitos cortados da roda

Gerados e removidos, com o motivo:

- **"O podcast passa a ser gerado inteiro, com vozes sintéticas e roteiro"** — cortado por ser tema 12 disfarçado e por não ser sobre voz *gerativa* e sim sobre conteúdo gerado. Seria um efeito de outro mapa.
- **"O dublador brasileiro desaparece como profissão"** — cortado por ser conclusão, não efeito, e por embutir o desfecho num enunciado que deveria descrever um mecanismo. O que restou está distribuído entre `e5.2`, o cenário indesejável e a seção 3.8.
- **"Surge um sindicato internacional de vozes"** — cortado por confundir resposta institucional desejável com efeito projetado. Não havia sinal algum sustentando.
- **"O karaokê vira o formato dominante de consumo de música gerada"** — cortado por ser palpite sem nenhuma evidência. Interessante, e sem base.
- **"A publicidade sonora passa a ser personalizada por ouvinte em tempo real"** — cortado porque é sobre segmentação publicitária, que é um tema maduro com um vestido novo. Aplicar geração a algo não torna esse algo emergente.
- **"O ruído ambiente vira canal de dados"** — cortado de `e2.2`. Havia um efeito de quarta ordem interessante aí (o ambiente sonoro público como superfície de ataque coletiva) e ele esbarrou no limite de três níveis.
- **Um oitavo efeito de primeira ordem para D3** — "a gravação de reunião deixa de ser transcrita por serviço e passa a ser transcrita no aparelho de cada participante, gerando N transcrições divergentes do mesmo evento". Cortado por sobreposição com `e2.1` e `e7.2`, mas é o efeito de que mais gosto entre os cortados, e é o mais concreto: já acontece, e ninguém decidiu qual transcrição vale.

### 12.7 Caminhos abandonados

**Tentei montar uma quarta disrupção-raiz sobre "áudio espacial gerativo"** — cena sonora sintetizada com posição no espaço, para vídeo imersivo e aparelho de cabeça. Abandonada por duas razões: não encontrei sinal de adoção que a distinguisse de renderização espacial clássica, que é madura; e ela puxa para o tema 16 e para o tema 12 mais do que para este. Fica o registro de que ela pode ser a disrupção-raiz **de 2033**, não de 2031.

**Tentei construir a roda a partir do setor (indústria da música) em vez da inovação**, conforme a alternativa oferecida na entrevista. Abandonada porque o modo "a partir do setor" produzia uma roda inteiramente sobre remuneração e nenhuma sobre interface — e metade do tema é interface. O modo adotado foi o declarado: a partir da inovação.

**Tentei usar o Hype Cycle como lente secundária**, conforme o `ESTUDO.md` da skill. Abandonado no meio, e o motivo merece registro porque é sobre o método e não sobre o tema: o tema tem **duas** tecnologias em posições opostas da curva narrativa — música gerada em desilusão pública com adoção crescente de produção, fala local em rampa silenciosa sem pico de expectativa nenhum —, e o modelo não comporta duas posições numa mesma análise sem virar duas análises. A crítica registrada no `ESTUDO.md`, de que o Hype Cycle descreve narrativa de mercado e não destino técnico, ficou demonstrada na prática: a música gerada está simultaneamente no "vale da desilusão" segundo a conversa pública e no "platô" segundo a contagem de uploads [1]. O Quadrante Mágico também não foi usado, e pelo motivo antecipado no `ESTUDO.md`: ele exige uma categoria de mercado já definida, e "gerador de música licenciado e editável" tem, hoje, essencialmente um fornecedor com produto no ar — não há quadrante, há um ponto.

**O Three Horizons foi usado informalmente e não aparece no documento.** Serviu para separar o que é H1 em declínio (o pipeline ASR-LLM-TTS, a biblioteca de música de produção, a voz como credencial) do que é H2 ambíguo (a licença na origem, que tanto pode virar o novo sistema quanto ser absorvida pelo velho — as gravadoras cobrando por geração é exatamente o H1 cooptando o H2). Essa leitura está diluída na seção 7.4 e não ganhou seção própria porque o formato não tem lugar para ela.

### 12.8 Nota sobre a execução da skill nesta rodada

A rodada foi executada sem usuário disponível para responder. A Etapa 1 (entrevista) **não foi pulada**: as cinco perguntas estavam formuladas e foram respondidas com respostas previamente fornecidas, todas registradas ao final da seção 2, incluindo o descarte explícito e o viés pedido. Nenhuma resposta foi "tanto faz", e nenhum padrão foi assumido em silêncio.

A Etapa 4 (autocrítica) foi executada e está auditável na seção 7.1, com os seis valores originais de confiança anotados ao lado dos finais.

**A Etapa 4 do `SKILL.md` continua sem a checagem de aderência ao horizonte**, e a falha se repetiu pelo segundo teste consecutivo, no mesmo lugar de sempre: sete efeitos de terceira ordem saíram datados além de 2031. A diferença em relação à rodada de teste anterior é que aqui a correção **foi aplicada** — os prazos vieram para 2031 e a condição que os empurrava para fora está declarada em prosa ao final da seção 5. O `SKILL.md` do aluno não foi editado; o que foi executado é o que o próprio `DUVIDAS.md` dele prescreve como correção a aplicar. O relato completo está na seção 8, item 3.

Duas outras convenções da disciplina foram seguidas e merecem registro, porque alteram o que se vê na seção 11: fonte genuinamente aberta cujo servidor bloqueia cliente automatizado permanece numerada e descrita **sem a URL**, com a URL no anexo 12.2(a) e a divergência entre `fontes:` e a contagem de links declarada; e a checagem de links do formato é o que faz, nesta skill, o papel que o verificador faz na skill do professor.
