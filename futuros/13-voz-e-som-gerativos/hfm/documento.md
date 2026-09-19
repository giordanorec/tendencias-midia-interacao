---
tema: "Voz e som gerativos"
slug: voz-e-som-gerativos
autor_login: hfm
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-18
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global, com nota sobre o Brasil
disrupcoes_raiz: 4
efeitos_ordem_1: 9
efeitos_ordem_2: 17
efeitos_ordem_3: 18
tecnologias_citadas: [Moshi, Mimi, Kyutai TTS, Kyutai Pocket TTS, OpenAI Realtime API, gpt-realtime, Whisper, whisper large-v3-turbo, Apple SpeechAnalyzer, Apple SpeechTranscriber, Apple Personal Voice, piper-tts-web, Piper, ONNX Runtime, WebAssembly, ElevenLabs Voice Library, Suno, Suno Advanced Split, Udio, AudioSeal, Full-Duplex-Bench, EU AI Act Artigo 50, PL 2338/2023, Deezer]
fontes: 19
confianca: media
experimento: "Bancada de turno — a mesma tarefa falada resolvida por três pilhas (cascata na nuvem, speech-to-speech na nuvem e modelo local no navegador), medindo latência, comportamento de interrupção e o que sobra em disco"
skill_usada: futurizacao-hfm
publico_ok: false
---

## 1. Resumo

O enunciado do tema apostava num sinal fraco: a música gerada não entregava os canais
separados, e o dia em que entregasse mudaria o jogo de novo. **Esse dia chegou em 11 de junho
de 2026.** A Suno lançou o Advanced Split, que não fatia a mixagem — regenera cada canal do
zero, a partir de uma lista de quase cem instrumentos, e entrega o resultado pronto para a
linha do tempo de um editor [5][6]. O artefato saiu de peça fechada e virou material. É a
primeira coisa que este mapa precisa registrar, porque desloca a pergunta: não é mais "a IA
compõe?", é "quem dirige o arranjo?".

Do lado da fala, a ruptura é outra e mais silenciosa. O caminho canônico da conversa com
máquina — transcrever, pensar em texto, sintetizar de volta — está sendo substituído por
modelos que vão de áudio a áudio sem passar por texto: o Moshi declara 160 ms de latência
teórica com um codec de 1,1 kbps a 12,5 Hz [1][3]; a OpenAI colocou o `gpt-realtime` em
disponibilidade geral justamente porque o pipeline em cascata perde prosódia e contexto entre
as etapas [15]. E o que mais importa para quem projeta: isso está encolhendo até caber onde não
havia orçamento de nuvem. O Kyutai Pocket TTS tem 100 milhões de parâmetros e roda em CPU em
tempo real [2]; o Piper compila fonemizador e inferência inteiros para WebAssembly e sintetiza
dentro do navegador, sem chave de API [16]; a Apple pôs transcrição de longa duração
inteiramente no dispositivo, fora do espaço de memória do aplicativo [9].

Em volta dessas duas rupturas técnicas, duas econômicas. A geração de música passou de produto
livre a serviço licenciado — a Warner encerrou o litígio com a Suno e fechou acordo, e o
download saiu do plano gratuito [4] — ao mesmo tempo em que o volume publicado explodiu:
90 mil faixas integralmente geradas por IA chegam ao Deezer por dia, mais de 50% dos uploads
novos, com 1 a 3% das escutas e até 85% desses streams classificados como fraudulentos [7]. E
a voz deixou de servir como prova de quem fala, num momento em que a resposta institucional
— marcação legível por máquina, obrigatória na Europa a partir de 2 de agosto de 2026 [8] —
chega junto com a tecnologia de marca d'água que a sustenta [11], mas antes de qualquer
demanda de usuário.

Daí saem quatro disrupções-raiz e 44 efeitos. Confiança do mapa: **média**. O que ele mais
arrisca não é a direção, é o prazo — e, em dois pontos, o sentido: o efeito mais provável da
fala local pode não ser emancipação, e sim a perda da instrumentação que hoje permite saber
se um produto funciona.

## 2. O tema

O objeto aqui é **som e voz gerados**: a fala como via de entrada e saída de sistemas, e a
música como coisa produzida por descrição. Não é a imagem em movimento (tema 12), não é a IA
no dispositivo em geral (tema 16) — aqui só a parte que é áudio. Não é o sampler, não é a DAW,
não é o assistente de voz por nuvem: essas três estão maduras e entram na seção 3 como chão,
não como raiz.

Por que isto merece mapa de futuro e não levantamento de estado da arte. Há três anos a
discussão sobre voz sintética era sobre **qualidade** — soa humano? — e essa pergunta foi
respondida e parou de ser interessante. A pergunta que substituiu ela é de **arquitetura**:
onde a computação acontece, e por qual formato a conversa passa. As duas respostas mudaram ao
mesmo tempo. A computação desceu para o aparelho. E o texto, que era o formato obrigatório
no meio do caminho, deixou de ser. Mudança de arquitetura reorganiza papéis, contratos,
formação e prova — que é exatamente o que uma roda dos futuros examina e um estado da arte não.

Do lado da música, a mudança é de **estatuto do artefato**. Enquanto a saída era um arquivo
achatado, a ferramenta era brinquedo: servia para escutar, não para trabalhar. No momento em
que ela devolve canais separados que entram numa sessão de edição, ela muda de categoria —
sai de "novidade" e entra em "instrumento de produção". Categoria nova cria mercado, cria
disputa jurídica e cria formação.

Onde isto encosta em mídia e interação, especificamente: (a) o ponto de contato deixa de
depender de tela e de rede, o que reabre espaços de projeto que estavam fechados por custo;
(b) a unidade de projeto da conversa deixa de ser o texto da resposta e passa a ser o
comportamento de turno — quando interromper, quando calar, quando sinalizar escuta; (c) a
voz, que era um índice de identidade tão forte que servia para autenticar em banco, deixa de
ser, e tudo que estava apoiado nela — a ligação telefônica, o áudio de WhatsApp, a prova
judicial — perde apoio ao mesmo tempo.

Uma nota sobre o Brasil, que atravessa o mapa inteiro sem constituir um recorte separado: o
país combina uma cultura de áudio assíncrono provavelmente sem paralelo em escala (o áudio de
WhatsApp como forma corrente de conversa, inclusive de trabalho), uma gestão coletiva de
direitos musicais forte e centralizada, e uma regulação de IA ainda em tramitação — o
PL 2338/2023 foi aprovado no Senado e está na Câmara, com um capítulo de direito autoral que
prevê remuneração pelo uso de obras protegidas no treino e é justamente o ponto mais
disputado do texto [18]. As três coisas juntas fazem do Brasil um lugar onde os efeitos de
segunda e terceira ordem deste mapa chegam mais cedo e mais forte do que a média global.

## 3. Onde isso está hoje

### Já existe, funciona e está em produto pago

**Fala que vai de áudio a áudio, sem texto no meio, em produção.** A OpenAI graduou a Realtime
API para disponibilidade geral com o modelo `gpt-realtime`, que processa áudio nativamente em
vez de converter para texto primeiro; a justificativa declarada é direta — o pipeline em
cascata acumula etapas de transformação que introduzem latência e perdem prosódia e contexto.
A versão GA acrescentou sessões de até 60 minutos, chamada de função assíncrona (a ferramenta
pode responder sem travar a conversa), entrada de imagem e conectividade SIP, isto é, ligação
telefônica direta, ao lado de WebRTC [15]. A remoção do controle de temperatura na versão GA é
um detalhe revelador: o modelo foi calibrado para qualidade de voz natural, não para saída
determinística.

**Transcrição de longa duração inteiramente no dispositivo, como serviço do sistema.** A Apple
apresentou no WWDC25 o `SpeechAnalyzer` com o módulo `SpeechTranscriber`, e as declarações
importam mais que o desempenho: o modelo fica no armazenamento do sistema e **não aumenta o
tamanho de download nem a memória de execução do aplicativo**, porque opera fora do espaço de
memória dele; a transcrição é inteiramente no dispositivo; e o usuário não precisa mais entrar
nos ajustes para ativar Siri ou ditado num idioma. O antecessor, `SFSpeechRecognizer`, servia
para ditado curto e dependia de servidores da Apple; o novo alvo declarado é áudio longo e
distante — palestra, reunião, conversa. Já é usado nos apps Notas, Gravador e Diário, e na
sumarização de chamadas [9].

**Síntese de voz dentro do navegador, sem servidor e sem chave.** O `piper-tts-web` empacota a
cadeia inteira do Piper — fonemizador e inferência ONNX — em WebAssembly e roda no cliente,
guardando os modelos de voz no sistema de arquivos privado da origem para funcionar offline.
É biblioteca de frente apenas, incompatível com Node; os modelos de voz do Rhasspy Piper são
MIT [16].

**Transcrição local aberta como padrão de fato.** O Whisper vai de 39 milhões de parâmetros
(~1 GB de VRAM) a 1,55 bilhão (~10 GB); o modelo `turbo`, versão otimizada do `large-v3`, roda
cerca de 8× mais rápido que o grande com degradação mínima declarada, a ~6 GB. Código e pesos
sob licença MIT. A própria documentação registra que o desempenho **varia muito por idioma** —
o que é a ressalva que importa para o português, e que o relato da turma capturou de outro
modo ao notar que ele confunde nome próprio e sigla [17].

**Música gerada com canais separados e editáveis.** A Suno publicou em 11 de junho de 2026 o
Advanced Split: em vez de fatiar a mixagem, o sistema **regenera cada canal do zero** com o
modelo mais recente, permitindo escolher exatamente o que extrair de uma lista de quase cem
instrumentos — "do kit de bateria ao didgeridoo" —, exclusivo do plano Premier. O Auto Split
anterior, que divide em até 12 canais, e o Split from Mix continuam, nos planos Pro e Premier.
A empresa declara que os canais saem "punchy, crisp, free of spill, and ready to drop straight
into your timeline" [5][6].

**Marketplace de consentimento de voz com pagamento.** A ElevenLabs declara mais de US$ 22
milhões pagos a criadores de voz — o dobro dos US$ 11 milhões de novembro de 2025, em seis
meses —, com mais de 10.400 criadores em 32 idiomas. O desenho importa tanto quanto o número:
o criador define os termos de licença, pode restringir casos de uso, pode retirar a voz do
mercado, e define o prazo de aviso da retirada, de até dois anos. Há revisão de segurança
contra uso de nome de celebridade, discurso de ódio e risco a crianças [14].

**Voz pessoal sintetizada no aparelho, para quem vai perder a fala.** O Personal Voice da Apple
treina no próprio dispositivo, à noite, com o aparelho carregando, bloqueado e no Wi-Fi, a
partir de 150 frases lidas pelo usuário. A arquitetura declarada é um modelo acústico derivado
do FastSpeech2 com camadas de convolução dilatada, vocoder WaveRNN, e uma cadeia de
aprimoramento da gravação com isolamento de voz. A avaliação declarada dá MOS 3,68 contra 3,85
da gravação original, e similaridade de voz 3,8. O público declarado é quem corre risco de
perder a fala, incluindo diagnóstico recente de ELA [10]. **Isto é acessibilidade e experiência
de uso, não tratamento**: nada aqui altera o curso de uma doença, e este mapa não faz nem
avalia alegação clínica.

### Existe na pesquisa e está entrando em produto

**O modelo de fala full-duplex como objeto de pesquisa consolidado.** O Moshi, de Défossez,
Mazaré, Orsini, Royer, Pérez, Jégou, Grave e Zeghidour, é descrito como modelo de fundação
fala-texto para diálogo em tempo real, com 160 ms de latência teórica e 200 ms na prática. A
arquitetura modela separadamente a fala própria e a do usuário em fluxos paralelos — é isto
que permite falar por cima — e usa um método chamado Inner Monologue, que gera tokens de texto
alinhados no tempo como prefixo dos tokens de áudio [1]. O codec Mimi opera a **1,1 kbps, 12,5
Hz de taxa de quadro e 80 ms de latência de streaming** sobre áudio de 24 kHz; o transformador
principal tem 7 bilhões de parâmetros e há variantes para PyTorch, MLX (isto é, Mac e iPhone) e
Rust; os pesos são CC-BY 4.0 e o código MIT/Apache [3]. A versão PyTorch pede 24 GB de GPU —
o que localiza honestamente onde a promessa "roda local" ainda não é a mesma coisa que "roda no
seu aparelho".

**A síntese encolhendo para caber na CPU.** O Kyutai TTS nasceu como ferramenta interna do
desenvolvimento do Moshi e foi aberto. A versão de julho de 2025 tinha 1,6 bilhão de
parâmetros e usava fluxos atrasados para começar a gerar áudio antes de o texto inteiro estar
disponível. O **Pocket TTS, de janeiro de 2026, tem 100 milhões de parâmetros**, roda em CPU em
tempo real, inclui clonagem de voz e cobre inglês, francês, alemão, espanhol, **português** e
italiano [2]. A queda de 1,6 bilhão para 100 milhões em seis meses é o número mais importante
desta seção: é ele que tira a voz do servidor.

**A avaliação do que ainda não funciona.** O Full-Duplex-Bench, de Guan-Ting Lin, Jiachen Lian,
Tingle Li, Qirui Wang, Gopala Anumanchipalli, Alexander H. Liu e Hung-yi Lee (março de 2025),
mede exatamente aquilo que a demonstração esconde: tempo de pausa, geração de sinais de escuta
("mm-hmm"), tratamento de interrupção e troca de turno. Avalia Moshi, Freeze-Omni,
SALMONN-Omni, MinMo, Nova-Sonic, VITA, Parrot e outros, e a conclusão declarada é que os
modelos atuais **têm dificuldade significativa com tomada de turno natural**, com lacuna
substancial em relação ao padrão humano [12]. O survey de Arora, Chang e colaboradores (abril
de 2025) organiza o campo e lista limitações abertas: padronização de avaliação, restrições de
streaming e baixa latência, robustez entre idiomas, alucinação, e **viés de desempenho por
demografia do falante** [13].

**Marca d'água em áudio como infraestrutura pronta.** O AudioSeal, do Meta, faz marcação
localizada — detecta a marca **no nível da amostra**, isto é, 1/16.000 de segundo — com
arquitetura gerador/detector treinada em conjunto com perda de localização e uma perda
perceptual inspirada em mascaramento auditivo. O detector é de passagem única e declara ser até
duas ordens de grandeza mais rápido que os anteriores, o que é o que viabiliza uso em escala e
em tempo real. Robustez declarada a compressão, recodificação e ruído. Licença MIT **inclusive
para os pesos**, desde abril de 2024, com suporte a streaming desde a versão 0.2 [11].

### Maduro, e por isso fora da raiz

Assistente de voz por nuvem com palavra de ativação; TTS de qualidade de leitura de tela;
sampler, DAW e plugin; transcrição de reunião como serviço; separação de canais por
fatiamento de frequência. Tudo isso funciona, está distribuído e tem efeitos estabilizados.
A régua da disciplina manda descartar da raiz o que já é comum em produto de massa, e é o que
se faz aqui. O que muda a categoria não é a existência dessas coisas — é o modelo caber no
aparelho, a conversa dispensar o texto, e o arranjo gerado voltar editável.

### O que está em disputa e ainda não assentou

O regime jurídico. A Warner encerrou o litígio com a Suno e fechou parceria, e encerrou também
com a Udio; a Universal acertou com a Udio. Mas a Universal e a Sony seguem litigando contra a
Suno, sem data de julgamento, e há uma ação nova de mais de US$ 3 bilhões [4]. No Brasil, o
PL 2338/2023 prevê que o titular de obra protegida usada em desenvolvimento comercial de IA
tenha direito a compensação financeira, e que instituições de pesquisa, jornalismo, museus,
arquivos, bibliotecas e organizações educacionais possam usar conteúdo protegido sem fins
comerciais; o texto foi aprovado no Senado e está na Câmara [18]. O capítulo de direito autoral
é o ponto mais disputado — mas a íntegra da carta das entidades de gestão coletiva pedindo sua
manutenção **não foi aberta** nesta pesquisa (o servidor recusou o acesso) e por isso não
sustenta nenhum efeito deste mapa; fica registrada no anexo.

## 4. As disrupções-raiz

### R1 — A fala deixa de passar por texto e deixa de sair do aparelho

**Sinal observável.** Modelo de 100 milhões de parâmetros sintetizando voz em CPU em tempo
real, em seis idiomas incluindo português [2]. Cadeia completa de TTS compilada para
WebAssembly e rodando no navegador sem chave de API [16]. Transcrição de longa duração como
serviço do sistema operacional, fora do espaço de memória do aplicativo [9]. Modelo
comercial de áudio-para-áudio em disponibilidade geral, com a justificativa explícita de que
o pipeline em cascata perde prosódia [15]. Codec a 1,1 kbps e 12,5 Hz com 80 ms de latência
de streaming [3].

**A ruptura.** Não é qualidade de voz: é que **o texto deixa de ser o formato obrigatório do
meio do caminho** e a nuvem deixa de ser o lugar obrigatório do processamento. As duas coisas
juntas mudam o que se pode projetar. Prosódia, hesitação, sobreposição e ritmo de turno deixam
de ser ruído descartado na transcrição e passam a ser material de entrada. E o custo marginal
de uma conversa com máquina deixa de ser cobrado por token de áudio — os US$ 32 por milhão de
tokens de entrada e US$ 64 de saída do `gpt-realtime` [15] são o preço de uma arquitetura que
a outra dispensa.

**Condição não resolvida.** Tomada de turno. O Full-Duplex-Bench mostra que os modelos ainda
falham em pausa, sinal de escuta e interrupção [12], e o survey lista streaming e baixa
latência entre as limitações abertas [13]. Rodar local também não é uniforme: o Moshi em
PyTorch pede 24 GB de GPU [3]. A promessa está montada; a conversa ainda não está boa.

### R2 — A música gerada deixa de ser bloco fechado e volta a ser material

**Sinal observável.** Advanced Split, 11 de junho de 2026: canais **regenerados do zero**, não
fatiados, a partir de uma lista de quase cem instrumentos, prontos para a linha do tempo de um
editor [5][6].

**A ruptura.** É a queda exata da trava que o próprio enunciado do tema apontava como sinal
fraco. Enquanto a saída era um arquivo achatado, a ferramenta competia com um banco de música:
você escolhia entre resultados. Com canais separados, ela passa a competir com um músico de
sessão: você dirige um resultado. Muda o verbo — de *escolher* para *corrigir* — e muda o
artefato — de faixa para sessão.

**Condição não resolvida.** O canal regenerado **soa como fonte sem ser fonte**. Não é o
instrumento que estava lá: é uma reconstrução plausível dele, feita pelo mesmo modelo que fez
a mixagem. Para produção isso é indiferente. Para arquivo, restauração, perícia e musicologia,
é um problema novo, e ninguém declarou ainda como se distingue, num arquivo de áudio, o que
foi captado do que foi reconstruído.

### R3 — A geração vira serviço licenciado ao mesmo tempo em que a distribuição satura

**Sinal observável.** Warner e Suno encerram litígio e fecham parceria; o download sai do plano
gratuito e passa a ter teto mensal no plano pago; artistas e compositores ganham controle
declarado sobre uso de nome, imagem, semelhança, voz e composição nos modelos novos; os modelos
atuais serão descontinuados quando os licenciados entrarem [4]. Do outro lado: 90 mil faixas
integralmente geradas por IA por dia no Deezer, mais de 50% dos uploads novos no pico de junho
de 2026, contra 1 a 3% das escutas — e até 85% desses streams classificados como fraudulentos
em 2025, com uma ferramenta de detecção que a empresa declara ter 99,8% de precisão e
conseguir identificar qual modelo gerou o áudio [7].

**A ruptura.** O gargalo do mercado muda de lugar. Produzir deixa de ser escasso; **ser ouvido**
passa a ser o único recurso escasso. E a detecção de origem, que era questão editorial, vira
infraestrutura de pagamento: quem não detecta, paga fraude.

**Condição não resolvida.** Ninguém sabe o que acontece com a remuneração por reprodução quando
a oferta é infinita e a demanda não cresce. Os acordos de licenciamento resolvem a disputa
sobre o **treino**; não resolvem a diluição do bolo na **distribuição**.

### R4 — A voz deixa de provar quem fala

**Sinal observável.** Clonagem de voz disponível num modelo de 100 milhões de parâmetros que
roda em CPU [2] e dentro do navegador [16]. Marca d'água em áudio, robusta e com detecção no
nível da amostra, aberta sob MIT inclusive nos pesos [11]. Artigo 50 do AI Act europeu exigindo
marcação legível por máquina e revelação de deepfake de áudio a partir de **2 de agosto de
2026**, com prazo até 2 de dezembro de 2026 para sistemas generativos já no mercado [8].
Mercado de consentimento de voz com US$ 22 milhões pagos e prazo de retirada de até dois anos
[14]. Voz pessoal sintetizada no aparelho a partir de 150 frases [10].

**A ruptura.** A voz era um índice de identidade barato, contínuo e difícil de falsificar — e
por isso servia para autenticar em banco, para reconhecer um parente no telefone e para dar
peso a um áudio de WhatsApp. Ela deixa de ser as três coisas ao mesmo tempo. E, diferente da
imagem, **não há hábito cultural de desconfiar de áudio**: a foto já passou por trinta anos de
letramento sobre montagem; o áudio não passou por nenhum.

**Condição não resolvida.** A marcação chega por obrigação regulatória de uma jurisdição, não
por demanda de usuário nem por padrão global. Um áudio sem marca não diz nada sobre ser
autêntico — diz, no máximo, que não foi produzido sob regra europeia. Isso é um sinal que
informa muito menos do que parece.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A fala deixa de passar por texto e deixa de sair do aparelho
    efeitos:
      - id: e1
        ordem: 1
        efeito: A interação por fala deixa de exigir rede e o custo marginal de uma conversa com máquina cai a quase zero
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Produtos passam a embutir voz onde nunca houve orçamento de nuvem, como eletrodoméstico, brinquedo, quiosque e aplicativo offline
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A tela deixa de ser o único ponto de contato de marca e a identidade sonora vira ativo de design tão disputado quanto o logotipo
                sinal: fraco
                prazo: 2032
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: Regiões com rede cara ou instável, inclusive o interior do Brasil, passam a ter interface avançada sem depender de banda
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O registro da interação deixa de existir no servidor e a telemetria de produto perde sua matéria-prima
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: A avaliação de uso se reorganiza em torno de consentimento explícito para coletar, e não de instrumentação por padrão
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O texto deixa de ser o formato canônico da conversa com máquina, e prosódia, pausa e sobreposição viram matéria de projeto
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Surge o papel de quem projeta comportamento de turno — quando interromper, quando calar, quando sinalizar escuta — separado de quem escreve o que o sistema diz
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: O ensino de interação passa a tratar tomada de turno como matéria própria, com a densidade que hoje se dá a hierarquia visual
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: A métrica de qualidade migra de acerto de transcrição para adequação de turno, e os testes herdados de texto deixam de descrever o produto
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Contratos de fornecimento de voz passam a especificar latência e comportamento de interrupção, e não apenas precisão de reconhecimento
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: A fala vira via de acesso para quem não lê, não enxerga ou não digita, e a barreira de entrada de um serviço digital muda de lugar
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Serviços públicos e bancários passam a ter caminho falado completo, e não apenas menu telefônico com opções numeradas
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Quem não pode falar em voz alta, por deficiência, por trabalho ou por morar em casa cheia, vira público projetado fora, e o modo silencioso passa a ser exigência de acessibilidade
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: A voz sintetizada pessoal sai do nicho assistivo e vira item de configuração de sistema, disponível a quem não tem perda de fala
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Perder a fala deixa de significar perder a assinatura sonora própria, e a questão se desloca para quem fica autorizado a usá-la depois
                sinal: fraco
                prazo: 2033
                confianca: baixa
  - disrupcao: A música gerada deixa de ser bloco fechado e volta a ser material editável
    efeitos:
      - id: e4
        ordem: 1
        efeito: O resultado gerado entra no fluxo de produção como material e o custo de refazer um arranjo desaba
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: O trabalho musical desloca-se de tocar e gravar para dirigir, escolher e corrigir, e o portfólio passa a ser a sessão, não a faixa
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A formação musical se reorganiza em torno de crítica e direção de arranjo, e a execução instrumental vira especialidade em vez de requisito
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: A trilha de baixo orçamento para jogo independente, vídeo institucional e publicidade regional deixa de ser comprada em banco de música e passa a ser gerada e ajustada dentro da casa
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: O mercado de música de biblioteca encolhe para os nichos em que a garantia jurídica da origem vale mais que a economia de custo
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: O canal regenerado passa a existir como objeto que soa como fonte sem ser fonte, e a diferença entre gravar e reconstruir some dentro do arquivo
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Restauração e remixagem de acervo passam a produzir versões plausíveis de gravações que nunca existiram naquele formato
            sinal: medio
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Arquivos sonoros passam a ter de declarar o que é captação e o que é reconstrução, e a musicologia herda um problema de procedência que a fotografia já tem há décadas
                sinal: fraco
                prazo: 2033
                confianca: baixa
  - disrupcao: A geração vira serviço licenciado ao mesmo tempo em que a distribuição satura
    efeitos:
      - id: e6
        ordem: 1
        efeito: Gerar música deixa de ser gratuito e irrestrito e passa a ser serviço licenciado, com teto de download e controle declarado sobre uso de nome e voz
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Forma-se um mercado de catálogo para treino, e um acervo passa a valer por ser treinável, não apenas por ser tocado
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A gestão coletiva brasileira precisa decidir se treino é uso que gera arrecadação, e passa a administrar um ato que não é execução pública nem reprodução
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Ferramenta aberta e ferramenta licenciada se separam em dois mercados com riscos jurídicos distintos, e escolher ferramenta vira decisão de conformidade
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Publicar passa a exigir declarar a origem do modelo, do mesmo modo que hoje se declara licença de fonte tipográfica
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: O gargalo do mercado sai de produzir e vai para ser ouvido, porque o volume publicado excede qualquer capacidade humana de escuta
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Plataformas passam a detectar origem sintética e a desmonetizar por padrão, e a detecção vira infraestrutura de pagamento em vez de questão editorial
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A remuneração por reprodução perde sustentação e migra para modelos que pagam por vínculo demonstrado com público
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: Curadoria humana e procedência declarada viram diferencial comercial, e o selo de feito por gente passa a ter preço
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: A música ao vivo absorve o valor que a gravação perde, e a economia da carreira musical se reancora na presença física
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: A voz deixa de provar quem fala
    efeitos:
      - id: e8
        ordem: 1
        efeito: A voz deixa de servir como prova de identidade e qualquer autenticação por voz passa a ser tratada como quebrada
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Bancos, centrais de atendimento e famílias adotam palavra combinada e retorno por outro canal, e o áudio recebido passa a exigir confirmação externa
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: O áudio de WhatsApp perde o estatuto de gesto íntimo e vira mensagem que só vale com contexto, com custo social concentrado em quem não tem letramento de verificação
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: Marca d'água em áudio e marcação legível por máquina entram nos produtos por obrigação regulatória, antes de existir demanda de usuário
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: Forma-se uma assimetria global em que o conteúdo produzido sob regra europeia é marcado e o resto não, e a marcação passa a sinalizar jurisdição em vez de veracidade
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: O consentimento para uso da própria voz vira ativo negociável, com preço, prazo e revogação
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: Locução deixa de ser trabalho pago por hora e vira licenciamento de ativo, concentrando renda em quem tem voz procurada
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: A carreira de locução se bifurca entre poucos licenciadores de catálogo e muitos operadores que dirigem voz alheia
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: Herdeiros e espólios passam a administrar voz como patrimônio, e a morte deixa de encerrar a carreira vocal
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e9.2.1
                ordem: 3
                efeito: O direito da personalidade precisa fixar por quanto tempo depois da morte a voz continua protegida, e a resposta passa a variar por país, criando arbitragem de jurisdição
                sinal: fraco
                prazo: 2033
                confianca: baixa
```

### Como ler a roda

A ordem é causal, não cronológica. Há efeitos de terceira ordem datados antes de efeitos de
segunda ordem de outro ramo — isso é correto: o que os separa é a distância causal em relação
à raiz, não o calendário. Quatorze dos dezoito efeitos de terceira ordem têm prazo posterior a
2031, o horizonte declarado; estão registrados assim de propósito, porque o efeito sistêmico de
uma mudança de 2029 não aparece dentro do mesmo horizonte que a mudança.

Duas cadeias foram **interrompidas por falta de evidência** e não aparecem acima. Estão
registradas na seção 12: a cadeia que ligaria fala local a redesenho de hardware de aparelho
(não achei evidência aberta de restrição térmica ou de bateria que sustentasse o passo), e a
cadeia que ligaria música gerada editável a mudança em interface de DAW (há produto, não há
evidência de mudança de interface).

## 6. Sinais fracos e wildcards

### Sinal fraco 1 — o número que ninguém está lendo como sinal: 1,6 bilhão vira 100 milhões em seis meses

Entre julho de 2025 e janeiro de 2026 o modelo de síntese de voz do Kyutai encolheu de 1,6
bilhão para 100 milhões de parâmetros, mantendo tempo real — agora em CPU, sem GPU — e
mantendo clonagem de voz e seis idiomas, português incluído [2]. A leitura habitual desse tipo
de número é "ficou mais barato". A leitura que interessa aqui é outra: **um fator de dezesseis
em seis meses não é otimização, é mudança de patamar**, e o que ela diz é que a voz sintética
deixou de ter piso de hardware. Se o piso sumiu, sumiu também a suposição sobre a qual todo o
mercado de voz como serviço está montado — a de que alguém precisa pagar por inferência. Este é
o sinal mais fraco e mais consequente do mapa, e sustenta o ramo e1 inteiro.

### Sinal fraco 2 — a detecção de origem já sabe dizer qual modelo gerou

O Deezer declara que sua ferramenta identifica artefatos deixados pelos modelos generativos,
geralmente inaudíveis para humanos, com 99,8% de precisão, e que **consegue identificar qual
modelo de IA foi usado** [7]. O segundo dado é muito mais forte que o primeiro e quase não é
comentado: se a assinatura do modelo sobrevive na saída, então a saída é rastreável até a
ferramenta mesmo sem marca d'água cooperativa. Isso muda a discussão sobre o Artigo 50, que
supõe marcação voluntária do provedor [8]. Se o áudio é forense sem cooperação, a obrigação
regulatória vira redundante para quem sabe medir — e a marcação passa a servir menos para
detectar e mais para provar diligência.

**Contra-argumento que este mapa registra e não resolve:** 99,8% de precisão declarada pela
própria empresa, sem avaliação externa aberta, é um número que não suporta o peso que eu
gostaria de pôr nele. O survey de modelos falados lista generalização e viés como limitações
abertas do campo [13], e a literatura de detecção de deepfake de áudio tem histórico de queda
brusca fora do conjunto de treino. Por isso o efeito e7.1 ficou com confiança média, e não alta.

### Sinal fraco 3 — a sessão sobrevive ao arquivo

A Suno descreve o Advanced Split como restrito ao plano mais caro [5][6]. O detalhe comercial
esconde um detalhe de produto: a empresa está tratando **editabilidade como o item premium**,
não a geração. Se isso se confirmar como padrão de mercado, o valor da ferramenta generativa
migra do que ela produz para o que ela deixa você desfazer — e o eixo de competição entre
produtos de mídia sintética passa a ser reversibilidade, não fidelidade.

### Sinal fraco 4 — o prazo de dois anos para retirar a voz

A ElevenLabs permite ao dono da voz definir um prazo de aviso para retirada, de **até dois
anos** [14]. Um prazo de retirada é a confissão de que a voz licenciada entra em produtos que
não conseguem removê-la depressa. Isso é a forma contratual de um fato técnico: voz sintética
embutida em produto é infraestrutura, não mídia. Sustenta o ramo e9.

### Wildcard — uma voz sintética vira testemunha inadmissível por regra geral, e derruba o áudio como prova

**Não é previsão.** Cenário de baixa probabilidade e alto impacto: um tribunal superior de
jurisdição grande — ou uma emenda processual — estabelece que gravação de áudio não
autenticada criptograficamente na origem não é admissível como prova, sem exceção. O efeito
imediato não é sobre deepfake: é sobre os **milhões de gravações legítimas** que existem sem
qualquer assinatura — áudio de WhatsApp, gravação de reunião, ligação de central de
atendimento. Num país onde o áudio assíncrono é forma corrente de acordo comercial informal, a
consequência seria a perda retroativa de valor probatório de um acervo inteiro. A infraestrutura
que tornaria isso pensável já existe e é aberta [11]; o que falta é o gesto institucional. Peso
de evidência: baixo. Registrado para ampliar o campo de atenção, não para compor cenário.

### Wildcard — o artista sintético lidera uma parada principal, e a regra de elegibilidade muda antes da segunda vez

O enunciado do tema propôs este wildcard. Ele **já aconteceu parcialmente**, o que o desqualifica
como wildcard e o requalifica como fato: Xania Monet, projeto de Telisha "Nikki" Jones que
escreve as letras e usa a Suno para gerar a música, entrou nas paradas da Billboard, chegou a
número 3 em Hot Gospel Songs, foi a primeira música de IA a entrar numa parada de execução em
rádio (número 30 em Adult R&B Airplay, número 20 em Hot R&B Songs) e assinou contrato de US$ 3
milhões com a Hallwood Media em setembro de 2025 [19]. O wildcard que **resta** é o de segunda
ordem: liderar uma parada **principal** — não de nicho, não de artistas emergentes — e provocar,
como resposta, uma mudança de regra de elegibilidade das paradas que crie a categoria formal de
"obra sem intérprete humano". A mudança de regra é o evento interessante, não a música.

## 7. Contra o próprio mapa

A skill manda tentar derrubar o mapa depois de construí-lo. Segue a tentativa, item por item
do checklist, com o que sobreviveu e o que foi rebaixado ou removido.

### Qual efeito é extrapolação linear do presente

**e1 e todo o ramo da fala local.** O raciocínio "modelo encolheu de 1,6 bilhão para 100
milhões, logo vai continuar encolhendo e a voz vira gratuita" é exatamente extrapolação linear
de dois pontos. Não há lei que garanta a continuidade, e a compressão de modelos costuma ter
retornos decrescentes bruscos. **O que sobreviveu:** e1 não depende de continuar encolhendo —
o que já existe hoje (100 milhões em CPU, WebAssembly no navegador) já basta para a afirmação,
e é por isso que ele mantém confiança alta. **O que caiu:** um efeito que eu tinha escrito
sobre voz sintética de qualidade de estúdio rodando em relógio e óculos até 2029 foi removido;
não havia nada nas fontes sobre requisito térmico ou de bateria.

**e7 e a saturação.** A curva do Deezer — 28% em setembro de 2025, 34% em novembro, 39% em
janeiro de 2026, 44% em abril, mais de 50% em junho [7] — é ascendente e pareceria autorizar
extrapolar até a totalidade. Não autoriza: a fração de uploads sintéticos é limitada por cima
pelo custo de publicar, não pelo de gerar, e nada garante que o custo de publicar permaneça
irrelevante. O efeito foi reescrito para falar do **gargalo de escuta**, que já é verdadeiro
com os números atuais, e não de uma proporção futura.

### Qual pressupõe velocidade de adoção sem caso comparável

**e3.1 — serviço público e bancário com caminho falado completo até 2031.** Não tenho caso
comparável de reforma de canal de atendimento nessa velocidade; a migração de atendimento
telefônico para autoatendimento levou mais de uma década. Rebaixei o prazo de 2029 para 2031 e
mantive confiança média apenas porque a substituição aqui é de um sistema (URA) por outro, não
a criação de um canal novo.

**e6.1 — mercado de catálogo para treino.** Tem caso comparável forte e recente: os acordos
Warner-Suno, Warner-Udio e Universal-Udio [4] são exatamente isso acontecendo. Mantido.

**e8.1 — adoção de palavra combinada e canal de retorno até 2029.** Aqui a evidência forte
que eu queria usar — as estatísticas de crescimento de fraude por voz clonada e de perdas
bancárias — **veio de agregadores de estatística que não abri e cujas fontes primárias não
localizei**. Removi todos os números de fraude do documento. O efeito foi mantido porque não
depende deles: a capacidade de clonar voz com modelo aberto de 100 milhões de parâmetros é
suficiente para que a autenticação por voz seja considerada quebrada, independentemente de
quanto já se perdeu. Mas a confiança caiu de alta para média.

### Qual depende de uma disrupção que pode não acontecer

**Todo o ramo e5 (canal regenerado, procedência sonora)** depende de que a regeneração de
canais se torne o método padrão, e não um recurso de um produto. Um único produto declarando
que regenera em vez de fatiar [5][6] não é um padrão de indústria. Confiança de e5 mantida em
média; e5.1 rebaixado para baixa.

**e8.2 e a marcação obrigatória.** Depende de o Artigo 50 ser efetivamente aplicado a áudio, e
a própria fonte registra que o símbolo europeu comum ainda está em elaboração e que o rótulo
para áudio puro é questão aberta [8]. O efeito está escrito como entrada por obrigação
regulatória, o que é fiel à fonte; mas se a aplicação for adiada, ele atrasa em bloco, e com
ele e8.2.1.

**A cadeia que eu não escrevi.** Considerei um ramo ligando fala local a "morte da tela". Não
escrevi. Voz é ruim para escolher entre muitas opções, para reler, para conferir e para usar
em público; nada nas fontes sugere que isso mude. A tela não morre — ela deixa de ser o único
ponto de entrada, que é o que e1.1.1 afirma, e só isso.

### Que fonte, número ou autoria pode estar errado

- **99,8% de precisão da detecção do Deezer** [7]: número da própria empresa interessada, sem
  verificação externa aberta. Tratado como alegação, não como fato, e por isso e7.1 tem
  confiança média.
- **Latência de 160 ms do Moshi** [1]: é declarada como teórica, com 200 ms na prática. Usei os
  dois números juntos no texto; usar só o primeiro seria enganoso.
- **"Roda local" do Moshi** [3]: a mesma página que oferece variantes MLX para Mac e iPhone
  declara que a versão PyTorch pede 24 GB de GPU. As duas coisas são verdadeiras sobre coisas
  diferentes, e o mapa registra as duas.
- **US$ 22 milhões da ElevenLabs** [14]: número da empresa, sem auditoria. A taxa de US$ 0,03
  por mil caracteres apareceu em página de ajuda que **não abri** e foi removida do documento.
- **Apple Personal Voice** [10]: o MOS 3,68 contra 3,85 é avaliação da própria Apple. O número
  não sustenta nenhum efeito do mapa — está no documento como descrição de estado, não como
  prova.
- **PL 2338/2023** [18]: a notícia aberta é de 15 de maio de 2025 e descreve o estado de
  tramitação naquela data. Toda afirmação sobre o estado do projeto em 2026 que eu tinha
  escrito a partir de resultados de busca foi removida; o documento afirma apenas o que a
  fonte aberta sustenta.
- **Xania Monet** [19]: verbete de enciclopédia, não fonte primária. As posições de parada e o
  valor do contrato batem com o que o material de imprensa reportou, mas não abri a Billboard.
  Por isso o caso está na seção de wildcards como fato de contexto, e não sustenta efeito.

### Que viés favoreceu o tema

Três, e o terceiro é o pior.

**Viés de disponibilidade de fonte aberta.** Moshi, Kyutai, Piper, Whisper e AudioSeal publicam
tudo; ElevenLabs, Suno e Apple publicam o que convém. O mapa tem mais densidade técnica no
lado aberto e mais densidade comercial no lado fechado, e isso pode fazer a fala local parecer
mais madura do que o mercado a trata.

**Viés do enunciado.** O tema chegou dizendo que a música gerada não entrega canais separados e
que o dia em que entregar muda o jogo. Encontrei exatamente esse dia. Isso é confirmação
perigosa: eu estava procurando, e achei. Mitigação: abri a nota de versão e o blog da empresa
[5][6] em vez de aceitar o resumo de busca, e escrevi na seção 4 a condição não resolvida — o
canal regenerado não é a fonte — que o enunciado não previa.

**Viés de que toda descentralização é boa.** Escrevi o primeiro rascunho do ramo e1 inteiro
como emancipação: sem nuvem, sem custo, sem vigilância. Está errado por omissão. Modelo no
aparelho também significa **fim da telemetria que permite saber se o produto funciona para
quem não é a média** — e o survey lista viés de desempenho por demografia do falante como
limitação aberta do campo [13]. Se a medição some junto com o servidor, o viés não some: fica
invisível. Por isso e1.2 e e1.2.1 existem, e foram escritos depois, contra o próprio rascunho.

## 8. O que a máquina errou

Registro dos erros cometidos na produção deste mapa, porque a skill exige rastro e porque o
erro é informação sobre o método.

**1. Tratei o enunciado do tema como se fosse fonte.** O texto da disciplina afirma que a Suno
"não entrega os canais separados". Isso era verdade quando foi escrito e deixou de ser em 11 de
junho de 2026 [5][6]. Se eu tivesse aceitado o enunciado, o mapa inteiro estaria construído em
cima de uma trava que já caiu — e o sinal fraco que ele apontava teria sido apresentado como
futuro quando já é presente. O enunciado é contexto; a verificação é obrigatória mesmo quando
o contexto vem de quem sabe mais.

**2. Confundi resultado de busca com fonte aberta, e escrevi um bloco inteiro sobre isso.** O
primeiro rascunho da seção 3 tinha um parágrafo sobre fraude por voz clonada com cinco números
precisos — aumento percentual de vishing, perdas bancárias, segundos de áudio necessários para
clonar. Todos vinham de páginas agregadoras de estatística que eu **não abri**, citando fontes
primárias que eu não localizei. Removi o parágrafo inteiro. O efeito e8.1 teve a confiança
rebaixada de alta para média em consequência.

**3. Tentei abrir a carta do ECAD e das entidades de gestão coletiva e o servidor recusou
(HTTP 403).** O mesmo aconteceu com o anúncio da OpenAI sobre o `gpt-realtime`. Nos dois casos
eu tinha resumo de busca com conteúdo utilizável e não usei: no caso da OpenAI, achei uma
fonte alternativa que **abriu** (as notas de desenvolvedor [15]); no caso do ECAD, não achei, e
por isso o documento não afirma nada sobre a posição das entidades brasileiras além do que a
notícia da Câmara sustenta [18]. A afirmação mais interessante que eu queria fazer — a de que
a gestão coletiva brasileira está pressionando especificamente pelo capítulo de direito autoral
— ficou de fora por falta de fonte aberta.

**4. Escrevi o ramo da fala local como se descentralização fosse só ganho.** Corrigido na
contestação, com o ramo e1.2 escrito depois e contra o rascunho. O erro é típico e vale
registrar: a narrativa "sai da nuvem, escapa da vigilância" é confortável e parcialmente falsa,
porque o mesmo servidor que vigia é o que mede se o produto funciona para quem não é a média.

**5. Datei o efeito e3.1 em 2029 na primeira versão.** Não havia caso comparável de reforma de
canal de atendimento público nessa velocidade. Movido para 2031.

**6. Quase misturei acessibilidade com alegação clínica.** O Personal Voice serve a pessoas com
ELA [10] e é tentador escrever que a tecnologia "ajuda" no sentido terapêutico. Não ajuda, e
este mapa não afirma isso: o que ela faz é preservar uma assinatura sonora e sustentar
comunicação. A separação entre experiência de uso e efeito clínico é exigência da skill e está
mantida em e3.2 e e3.2.1, que falam de identidade e autorização, não de saúde.

## 9. Três cenários para 2031

Os três partem do mesmo conjunto de fatos da seção 3. O que os separa é qual condição não
resolvida se resolve primeiro.

### Cenário A — A camada invisível (mais provável)

A tomada de turno melhora o suficiente para a fala virar um modo entre outros, não o principal.
A voz está em todo lugar onde havia botão físico e em lugar nenhum onde havia lista. O
processamento é majoritariamente local, e o efeito mais sentido por quem projeta não é a
interação nova: é a perda da instrumentação. Ninguém sabe mais direito como o produto está
sendo usado, porque o log não existe. A música gerada editável é rotina em produção de baixo e
médio orçamento, e o mercado de biblioteca encolheu sem desaparecer. As paradas e o streaming
sobrevivem com detecção de origem embutida no fluxo de pagamento. A voz não autentica mais nada
e ninguém estranha, do mesmo jeito que ninguém estranha que uma foto não prove nada.

**O que o sustenta:** e1, e1.2, e4.2, e7.1, e8.1 — os efeitos com sinal forte e confiança mais
alta do mapa.

### Cenário B — A conversa que não engata

A tomada de turno não melhora o bastante. O Full-Duplex-Bench continua mostrando o que mostra
[12], e o resultado prático é que falar com sistema permanece cansativo: ele interrompe errado,
não sabe quando calar, não devolve sinal de escuta. A fala local vira commodity de
transcrição e de leitura em voz alta — muito útil, nada disruptivo — e a interface principal
segue sendo texto e toque, agora com ditado bom. O lado musical segue o caminho A, porque não
depende de turno. Neste cenário a raiz R1 se revela **emergente, não disruptiva**: melhorou o
que existia e não rompeu nada.

**O que o sustenta:** a condição não resolvida declarada em R1, e o critério que a skill manda
aplicar — emergente não implica disruptivo. Este é o cenário que o próprio pedido desta análise
nomeou como aquilo que faria mudar de ideia, e ele é plausível.

### Cenário C — A fratura de procedência

A marcação obrigatória entra em vigor na Europa e não vira padrão global [8]. Áudio marcado e
áudio não marcado passam a circular lado a lado, e a marca sinaliza jurisdição de produção, não
veracidade. Simultaneamente, a detecção forense por assinatura de modelo amadurece [7] e
estabelece um mercado privado de atestação de origem, acessível a instituições e inacessível a
pessoas. O resultado é regressivo: quem tem contrato com um serviço de verificação consegue
provar o que disse; quem não tem, não consegue — e no Brasil, onde o áudio assíncrono é forma
corrente de acordo informal, a assimetria pesa exatamente sobre quem menos pode carregá-la.

**O que o sustenta:** e8.2, e8.2.1, e8.1.1 — os efeitos de confiança mais baixa do mapa, o que
é honesto: este é o cenário menos apoiado em evidência e o mais consequente socialmente.

## 10. O experimento

**Bancada de turno.** Uma sessão de aula, 50 minutos, executável com equipamento da turma e sem
chave de API paga obrigatória.

**A pergunta.** A fala local já é boa o bastante para ser interface, ou ainda é só transcrição
com voz? O mapa afirma que a arquitetura mudou (R1) mas que a conversa ainda não está boa
(condição não resolvida). O experimento testa as duas afirmações na mesma tarde.

**O desenho.** A mesma tarefa falada — pedir, corrigir no meio da frase, mudar de ideia, e
interromper o sistema enquanto ele responde — resolvida por três pilhas:

1. **Cascata na nuvem:** Whisper para transcrever [17], qualquer modelo de texto, e um TTS de
   serviço. É o desenho de referência, o que todo produto faz hoje.
2. **Fala a fala na nuvem:** Realtime API com `gpt-realtime` [15]. Mesma tarefa, sem texto no
   meio do caminho.
3. **Local no navegador:** `piper-tts-web` para a saída [16] e transcrição no dispositivo para a
   entrada — no Mac, via `SpeechAnalyzer` [9]; onde não houver, Whisper local. Sem rede depois
   de carregado.

**O que se mede** — e é aqui que o experimento vale a pena, porque estas três coisas não são o
que os testes de produto medem hoje:

- **Latência até a primeira sílaba**, não até a resposta completa. É o que decide se a conversa
  soa viva.
- **Comportamento de interrupção:** quando você fala por cima, o sistema para? Retoma de onde
  parou ou do começo? Fica falando? Os eixos vêm do Full-Duplex-Bench — pausa, sinal de escuta,
  interrupção, troca de turno [12] — e podem ser anotados à mão numa planilha de quatro colunas.
- **O que sobra em disco e o que sai pela rede.** Abrir o inspetor de rede e registrar,
  literalmente, quantos bytes de áudio saíram do aparelho em cada pilha. É a medição que torna
  o efeito e1.2 concreto: na pilha 3 não sai nada — e portanto não há nada para analisar depois.

**Critério de decisão.** Se a pilha 3 empatar com a 1 em latência e perder feio em interrupção,
o cenário B ganha força. Se empatar nas duas, o cenário A ganha. Se a turma não conseguir
anotar interrupção de forma consistente entre observadores, isso também é resultado: significa
que a métrica que o campo diz ser central ainda não é operacionalizável em sala, o que é um
dado sobre o estado do campo.

**Variação de 10 minutos, para o lado musical.** Gerar uma peça curta, separar os canais e
**substituir um deles** por gravação própria de celular. A pergunta que fica: o que soa errado —
o canal humano no meio dos sintéticos, ou o contrário? A resposta é a matéria de e5.

## 11. Fontes

Todas abertas e lidas. Fonte que não foi aberta não entra nesta lista — está na seção 12.

**[1] Moshi: a speech-text foundation model for real-time dialogue** — arXiv:2410.00037.
Défossez, Mazaré, Orsini, Royer, Pérez, Jégou, Grave, Zeghidour. Submetido 17/09/2024, v2 em
02/10/2024.
`https://arxiv.org/abs/2410.00037`
*Sustenta:* latência de 160 ms teórica e 200 ms prática; arquitetura de fluxos paralelos para
fala própria e do usuário; método Inner Monologue com tokens de texto alinhados como prefixo
do áudio. *Confiabilidade:* alta — pesquisa primária com autoria declarada.

**[2] Kyutai TTS** — página oficial do laboratório.
`https://kyutai.org/tts/`
*Sustenta:* Pocket TTS com 100 milhões de parâmetros, janeiro de 2026, tempo real em CPU, com
clonagem de voz, em inglês, francês, alemão, espanhol, português e italiano; versão anterior de
1,6 bilhão em julho de 2025 com fluxos atrasados. *Confiabilidade:* alta para os fatos de
produto, média para desempenho — é declaração do próprio laboratório.

**[3] kyutai-labs/moshi** — repositório oficial.
`https://github.com/kyutai-labs/moshi`
*Sustenta:* codec Mimi a 1,1 kbps, 12,5 Hz, 80 ms de latência de streaming sobre 24 kHz;
transformador de 7 bilhões de parâmetros; variantes PyTorch, MLX e Rust; pesos CC-BY 4.0 e
código MIT/Apache; requisito de 24 GB de GPU na versão PyTorch. *Confiabilidade:* alta —
documentação técnica verificável.

**[4] Warner Music Group strikes 'landmark' deal with Suno; settles copyright lawsuit** —
Music Business Worldwide.
`https://www.musicbusinessworldwide.com/warner-music-group-settles-with-suno-strikes-first-of-its-kind-deal-with-ai-song-generator/`
*Sustenta:* encerramento do litígio Warner-Suno e parceria; descontinuação dos modelos atuais
quando os licenciados entrarem; download fora do plano gratuito e com teto no plano pago;
controle declarado de artistas sobre nome, imagem, semelhança, voz e composição; acordo Warner-
Udio. *Confiabilidade:* média-alta — jornalismo especializado do setor, não fonte primária.

**[5] Suno — Stem Separation improvements (notas de versão)**.
`https://suno.com/release-notes/advanced-stems`
*Sustenta:* Advanced Split em 11/06/2026, lista de quase cem instrumentos, exclusivo do plano
Premier, com Auto Split e Split from Mix mantidos. *Confiabilidade:* alta para o fato do
lançamento, média para qualidade — é comunicação de produto.

**[6] Suno — We've made improvements to Stem Separation (blog)**.
`https://blog.suno.com/blog/stem-separation-updates`
*Sustenta:* até 12 canais no Auto Split; regeneração de cada canal do zero em vez de
fatiamento da mixagem; distribuição por plano. *Confiabilidade:* média — declaração do
fabricante sobre o próprio método, sem verificação independente.

**[7] Deezer — AI music exceeds 50% of daily uploads** — sala de imprensa oficial, 21/07/2026.
`https://newsroom-deezer.com/2026/07/ai-music-exceeds-50-percent-daily-uploads-deezer/`
*Sustenta:* 90 mil faixas integralmente geradas por IA por dia, mais de 50% dos uploads novos
no pico de junho de 2026; 1 a 3% da escuta total; até 85% desses streams fraudulentos em 2025;
detecção por artefatos inaudíveis com 99,8% de precisão declarada e identificação do modelo
gerador; declaração do CEO Alexis Lanternier. *Confiabilidade:* alta para volume de upload
(a empresa mede o próprio sistema), média para a precisão da detecção (alegação interessada).

**[8] The EU AI Act's Transparency Rules: A Practical Guide to Article 50** —
artificialintelligenceact.eu.
`https://artificialintelligenceact.eu/transparency-rules-article-50/`
*Sustenta:* obrigação de marcação legível por máquina para provedores e de revelação de
deepfake de áudio para implantadores; aplicação a partir de 02/08/2026, com prazo até
02/12/2026 para sistemas já no mercado; rótulo europeu comum ainda em elaboração via Código de
Prática esperado para junho de 2026; exceções declaradas. *Confiabilidade:* média-alta —
compilação de referência amplamente usada, não o texto legal em si.

**[9] Bring advanced speech-to-text to your app with SpeechAnalyzer** — WWDC25, sessão 277,
Apple Developer.
`https://developer.apple.com/videos/play/wwdc2025/277/`
*Sustenta:* transcrição inteiramente no dispositivo; modelo no armazenamento do sistema, fora do
espaço de memória do aplicativo, sem aumentar download nem memória de execução; alvo de áudio
longo e distante contra o ditado curto do `SFSpeechRecognizer`; dispensa de ativar Siri ou
ditado; uso em Notas, Gravador, Diário e sumarização de chamadas; `DictationTranscriber` como
alternativa para idiomas não cobertos. *Confiabilidade:* alta para o desenho da API, média para
comparações de desempenho.

**[10] Advancing Speech Accessibility with Personal Voice** — Apple Machine Learning Research.
`https://machinelearning.apple.com/research/personal-voice`
*Sustenta:* 150 frases lidas; treino no dispositivo à noite, carregando, bloqueado e no Wi-Fi;
modelo acústico derivado de FastSpeech2 com convolução dilatada, vocoder WaveRNN, cadeia de
aprimoramento com isolamento de voz; MOS 3,68 contra 3,85 da gravação original; similaridade
3,8; público de pessoas em risco de perder a fala, incluindo ELA. *Confiabilidade:* alta para
arquitetura, média para avaliação — é medição da própria empresa.

**[11] facebookresearch/audioseal** — repositório oficial do AudioSeal.
`https://github.com/facebookresearch/audioseal`
*Sustenta:* marcação localizada com detecção no nível da amostra; detector de passagem única
até duas ordens de grandeza mais rápido; robustez declarada a compressão, recodificação e
ruído; licença MIT inclusive dos pesos desde abril de 2024; suporte a streaming desde a versão
0.2. *Confiabilidade:* alta — código e pesos verificáveis; as alegações de robustez são do
próprio grupo.

**[12] Full-Duplex-Bench: A Benchmark to Evaluate Full-duplex Spoken Dialogue Models** —
arXiv:2503.04721. Lin, Lian, Li, Wang, Anumanchipalli, Liu, Lee. Março de 2025.
`https://arxiv.org/pdf/2503.04721`
*Sustenta:* eixos de avaliação (pausa, sinal de escuta, interrupção, troca de turno); modelos
avaliados, incluindo Moshi, Freeze-Omni, SALMONN-Omni, MinMo e Nova-Sonic; conclusão de que os
modelos têm dificuldade significativa com tomada de turno natural. *Confiabilidade:* alta —
benchmark acadêmico com autoria e método declarados.

**[13] On The Landscape of Spoken Language Models: A Comprehensive Survey** — arXiv:2504.08528.
Arora, Chang e colaboradores. Abril de 2025.
`https://arxiv.org/pdf/2504.08528`
*Sustenta:* distinção entre fala a fala e pipeline em cascata; limitações abertas declaradas —
padronização de avaliação, streaming e baixa latência, robustez entre idiomas, alucinação e
viés de desempenho por demografia do falante. *Confiabilidade:* alta — revisão sistemática.

**[14] $22M earned by voice creators, doubling in 6 months** — blog da ElevenLabs.
`https://elevenlabs.io/blog/22-million-earned-by-voice-creators-on-elevenlabs`
*Sustenta:* mais de US$ 22 milhões pagos, contra US$ 11 milhões em novembro de 2025; mais de
10.400 criadores; 32 idiomas; controle de termos de licença, restrição de uso, retirada do
mercado e prazo de aviso de até dois anos; revisão de segurança. *Confiabilidade:* média —
números da empresa, sem auditoria externa.

**[15] Developer notes on the Realtime API** — OpenAI Developers.
`https://developers.openai.com/blog/realtime-api`
*Sustenta:* disponibilidade geral do `gpt-realtime`; processamento nativo de áudio sem conversão
prévia para texto; justificativa de que o pipeline em cascata acumula etapas, perdendo prosódia
e contexto; sessões de até 60 minutos; chamada de função assíncrona; entrada de imagem;
conectividade SIP ao lado de WebRTC; remoção do controle de temperatura. *Confiabilidade:*
alta para o que o produto faz, média para as afirmações comparativas.

**[16] Mintplex-Labs/piper-tts-web** — repositório.
`https://github.com/Mintplex-Labs/piper-tts-web/`
*Sustenta:* síntese no navegador com ONNX Runtime; armazenamento dos modelos de voz no sistema
de arquivos privado da origem para uso offline; caminhos locais de WASM; incompatibilidade com
Node; modelos do Rhasspy Piper sob MIT. *Confiabilidade:* alta — código verificável.

**[17] openai/whisper** — repositório oficial.
`https://github.com/openai/whisper`
*Sustenta:* seis variantes de 39 milhões (~1 GB de VRAM) a 1,55 bilhão (~10 GB); `turbo` como
versão otimizada do `large-v3`, cerca de 8× mais rápido a ~6 GB, com degradação mínima
declarada e limitação na tarefa de tradução; código e pesos sob MIT; desempenho declaradamente
variável por idioma. *Confiabilidade:* alta.

**[18] Projeto regulamenta uso da inteligência artificial no Brasil** — Portal da Câmara dos
Deputados, 15/05/2025.
`https://www.camara.leg.br/noticias/1159193-projeto-que-regulamenta-uso-da-inteligencia-artificial-no-brasil`
*Sustenta:* PL 2338/2023 aprovado no Senado e em análise na Câmara em comissão especial;
compensação financeira ao titular quando conteúdo protegido é usado em desenvolvimento
comercial de IA; uso livre restrito a pesquisa, jornalismo, museus, arquivos, bibliotecas e
organizações educacionais sem fins comerciais. *Confiabilidade:* alta para o conteúdo do
projeto na data; **a data é de maio de 2025 e o estado da tramitação pode ter mudado**.

**[19] Xania Monet** — Wikipédia.
`https://en.wikipedia.org/wiki/Xania_Monet`
*Sustenta:* projeto de Telisha "Nikki" Jones, letras próprias e música gerada com Suno; número 3
em Hot Gospel Songs; primeira música de IA numa parada de execução em rádio, número 30 em Adult
R&B Airplay e número 20 em Hot R&B Songs; contrato de US$ 3 milhões com a Hallwood Media em
setembro de 2025; discografia com três álbuns entre agosto de 2025 e janeiro de 2026.
*Confiabilidade:* média — enciclopédia colaborativa, não fonte primária. Usado apenas como
contexto na seção 6; não sustenta efeito do mapa.

## 12. Anexo — o levantamento bruto

### 12.1 A entrevista

A skill exige entrevista antes de pesquisar, com rodadas até confirmação. **Nesta execução não
havia interlocutor disponível para responder**, e os parâmetros vieram pré-definidos na
instrução da rodada. Registro isso como desvio do procedimento: não houve rodada de perguntas
nem confirmação explícita, e o resumo abaixo é o que foi assumido, não o que foi confirmado
por alguém.

| Campo | Valor | Origem |
|---|---|---|
| tema | Voz e som gerativos | pré-definido |
| recorte | Fala local e conversacional + música gerada completa; exclui assistente por nuvem, TTS robótico, sampler e DAW | pré-definido (régua da disciplina) |
| horizonte | 2031 | pré-definido |
| público | Quem projeta mídia e interação | pré-definido |
| região | Global, com nota sobre o Brasil | pré-definido |
| objetivo | Mapa de futuro por roda dos futuros, três ordens, a partir do tema e não de um setor | pré-definido |
| exclusões | O que já é comum em produto de massa; ideias genéricas que serviriam a qualquer tema | pré-definido |
| viés | Neutro | pré-definido |
| critério de mudança de ideia | Evidência de adoção além da maioria inicial (Rogers), ou de que a tecnologia só melhora o que existe sem romper nada | pré-definido |

**O que eu teria perguntado, se houvesse a quem.** Primeiro: o recorte inclui áudio que não é
fala nem música — design sonoro de interface, som ambiente de jogo, efeito? Assumi que **não**,
porque o enunciado nomeia voz e música, e porque o design procedural é o tema 14. Segundo: o
horizonte de 2031 é para a ocorrência do efeito ou para ele estar consolidado? Assumi
**ocorrência observável**, o que explica os efeitos de terceira ordem datados além do horizonte.
Terceiro: "neutro" quer dizer sem preferência pelo desfecho, ou peso igual para cenário bom e
ruim? Assumi o primeiro, e é por isso que o cenário B — a tecnologia não rompe nada — recebeu o
mesmo tratamento sério que os outros dois, em vez de figurar como ressalva.

### 12.2 Consultas feitas

Buscas (WebSearch), na ordem: acordo e litígio Suno/Udio com gravadoras em 2026; modelo de fala
a fala local e Moshi/Kyutai; separação de canais em música gerada; fraude por clonagem de voz;
faixas geradas por IA no Deezer; Artigo 50 do AI Act para áudio; Apple SpeechAnalyzer;
AudioSeal; PL 2338 e direito autoral no Brasil; Realtime API da OpenAI; Piper TTS no navegador;
survey de modelos de linguagem falada e benchmark full-duplex; ElevenLabs e pagamento a dubladores;
artista de IA em parada da Billboard; banco de voz assistivo; taxa de erro do Whisper em português.

Páginas abertas com sucesso (WebFetch): as 19 da seção 11.

### 12.3 Fontes descartadas, e por quê

**Recusadas pelo servidor (HTTP 403), não usadas:**
- `https://www4.ecad.org.br/noticias/ecad-associacoes-da-gestao-coletiva-da-musica-e-entidades-da-cultura-entregam-carta-a-camara-pedindo-protecao-de-direitos-autorais-no-pl-da-inteligencia-artificial/`
  — era a fonte que sustentaria a posição da gestão coletiva brasileira. Sem ela, o documento
  só afirma o que a notícia da Câmara [18] sustenta.
- `https://openai.com/index/introducing-gpt-realtime/` — substituída pelas notas de
  desenvolvedor [15], que abriram.

**Descartadas por serem agregadores de estatística sem fonte primária localizável:** páginas de
estatística sobre deepfake e clonagem de voz com números de crescimento de vishing, perdas
bancárias, segundos necessários para clonar uma voz e tamanho de mercado de detecção. Nenhuma
aberta; nenhuma usada. Esta foi a maior perda de conteúdo do trabalho, e ela é deliberada: o
ramo e8 ficaria muito mais vistoso com esses números e não ficaria mais verdadeiro.

**Descartadas por serem conteúdo comercial de terceiros sobre produto alheio:** blogs de
otimização de busca sobre stems da Suno, guias de "como extrair stems", páginas de preço de
API reempacotada. O fato do Advanced Split foi confirmado nas duas fontes da própria empresa
[5][6].

**Usada só como contexto, não como sustentação:** o verbete de Xania Monet [19].

**Dado que apareceu em resultado de busca e NÃO está sustentado por página aberta:** a
progressão mensal dos uploads de IA no Deezer (28% em setembro de 2025, 34% em novembro, 39% em
janeiro de 2026, 44% em abril). A página oficial que abri [7] traz apenas o número de junho de
2026 e os dados de escuta e fraude. A progressão aparece na seção 7 como objeto da crítica
sobre extrapolação — e fica aqui declarada como não verificada em fonte aberta. Nenhum efeito
do mapa depende dela.

**Termo do enunciado que não encontrei evidência para tratar:** dos itens listados pela turma,
não abri fonte sobre `1BITDRAGON`, `signalflow`, `Hacklily`, `ChatTTS`, `Bark`, `espnet`,
`pydub`, `PastPort`, `expo-ai-kit`, `@moxxy/plugin-tts-openai` nem `@alfe.ai/openclaw-voice`.
Eles aparecem no frontmatter apenas quando citados no corpo; os demais ficaram de fora
deliberadamente, porque citar ferramenta que não se abriu é inventar cobertura.

### 12.4 Inferências, separadas do que é fato

**Fatos observados e apoiados por fonte.** Tudo que está na seção 3 com marcador numérico. Em
particular: os números do Mimi [3], a existência e a data do Advanced Split [5][6], os volumes
do Deezer [7], as datas do Artigo 50 [8], as declarações de arquitetura da Apple [9][10], as
propriedades do AudioSeal [11], as conclusões do Full-Duplex-Bench [12] e as limitações abertas
do survey [13].

**Inferências causais, argumentadas e não observadas.** (a) Que a queda de 1,6 bilhão para 100
milhões de parâmetros em seis meses [2] implica desaparecimento do piso de hardware para voz
sintética — é leitura minha de dois pontos, não afirmação da fonte. (b) Que canais regenerados
[6] deslocam o trabalho musical de executar para dirigir — plausível, não medido. (c) Que a
detecção com assinatura de modelo [7] torna a marcação regulatória [8] parcialmente redundante
— é raciocínio meu cruzando duas fontes que não se citam. (d) Que a perda de log no dispositivo
[9] compromete a detecção de viés demográfico declarada como limitação aberta [13] — cruzamento
meu, e a inferência mais importante do documento, porque contradiz a narrativa confortável
sobre computação local.

**Hipóteses prospectivas.** Todos os efeitos da seção 5. Confiança graduada em cada um; nenhum
efeito de terceira ordem tem confiança acima de baixa, por decisão de método.

### 12.5 Efeitos removidos ou rebaixados na contestação

| Efeito | O que aconteceu | Motivo |
|---|---|---|
| Voz de qualidade de estúdio em relógio e óculos até 2029 | **Removido** | Nenhuma fonte sobre restrição térmica ou de bateria; era extrapolação de dois pontos |
| "A tela morre" como efeito de primeira ordem | **Removido** | Voz é ruim para escolher entre muitas opções, reler, conferir e usar em público; nada nas fontes sugere mudança |
| Redesenho de hardware de aparelho por causa de fala local | **Cadeia interrompida** | Falta de evidência; registrado aqui e citado ao final da seção 5 |
| Mudança de interface de DAW por causa de música editável | **Cadeia interrompida** | Há produto, não há evidência de mudança de interface |
| e8.1 (palavra combinada e canal de retorno) | Confiança **alta → média** | Os números de fraude que a sustentariam vieram de agregadores não abertos e foram removidos |
| e3.1 (caminho falado completo em serviço público) | Prazo **2029 → 2031** | Sem caso comparável de reforma de canal de atendimento nessa velocidade |
| e5.1 (restauração e remixagem de acervo) | Confiança **média → baixa** | Depende de a regeneração virar padrão de indústria, e há um único produto |
| e7 (saturação) | **Reescrito** | Versão original projetava proporção futura de uploads; reescrito para o gargalo de escuta, que já é verdadeiro com os números atuais |
| Parágrafo sobre fraude por voz clonada na seção 3 | **Removido inteiro** | Cinco números precisos, nenhuma fonte primária aberta |

### 12.6 Limitações declaradas

1. **Não houve entrevista real.** Os parâmetros foram assumidos, não confirmados. O
   procedimento da skill previa rodadas de pergunta; elas não ocorreram.
2. **Dezenove fontes é pouco para quatro raízes.** Os ramos e6 e e7 — licenciamento e saturação
   — se apoiam em três fontes cada, e uma delas é jornalismo de setor [4] e outra é comunicação
   corporativa [7]. Nenhum documento judicial foi aberto, apesar de o enunciado apontar
   processos como fonte relevante do tema.
3. **Não há fonte acadêmica sobre geração musical.** O lado da música se apoia inteiramente em
   comunicação de produto e jornalismo; não abri nada do ISMIR nem de cs.SD sobre avaliação de
   música gerada. É a assimetria mais séria do mapa: o lado da fala tem benchmark e survey
   [12][13], o lado da música não tem nada equivalente aqui.
4. **A nota sobre o Brasil se apoia numa única fonte, de maio de 2025** [18]. Todo o
   raciocínio sobre gestão coletiva e treino (e6.1.1) é inferência sobre um projeto de lei que
   pode ter mudado de texto desde então.
5. **Nenhuma medição própria.** O experimento da seção 10 é proposta, não resultado. As
   afirmações sobre latência e tomada de turno vêm de declaração de fabricante e de benchmark
   de terceiros, não de teste feito aqui.
6. **Viés de idioma nas fontes.** Dezoito das dezenove fontes são em inglês. Afirmações sobre
   desempenho em português — o Pocket TTS cobre o idioma [2], o Whisper varia por idioma [17] —
   não foram verificadas em nenhuma avaliação específica para português, e não deveriam ser
   lidas como se tivessem sido.
7. **O documento não faz e não avalia alegação clínica.** Onde o tema toca perda de fala,
   deficiência ou ELA [10], a discussão é de acessibilidade, identidade e autorização de uso —
   nunca de eficácia terapêutica.
8. **`publico_ok: false`.** Este é o levantamento bruto e exaustivo; o processamento para uso
   público — corte, hierarquia e edição — vem depois e não foi feito.
