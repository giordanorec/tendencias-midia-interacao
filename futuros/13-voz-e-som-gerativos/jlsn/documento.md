---
tema: Voz e som gerativos
slug: voz-e-som-gerativos
autor_login: jlsn
zona_de_interesse: Sistemas de Informação
data: 2026-09-18
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: Global, com nota sobre o Brasil
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 12
efeitos_ordem_3: 12
tecnologias_citadas: ["Suno", "Suno Studio", "Udio", "Kyutai Moshi", "Kyutai Pocket TTS", "Mimi (codec neural)", "Apple SpeechAnalyzer", "Whisper", "ElevenLabs", "OpenAI Realtime API", "Piper TTS (navegador)", "Bark", "ChatTTS", "ESPnet", "Stable Audio", "LambdaMark (marca d'água de áudio)"]
fontes: 10
confianca: media
experimento: A Prova de Voz
skill_usada: futurizacao-jlsn
publico_ok: false
---

## 1. Resumo
Duas rupturas simultâneas no áudio. A primeira: a fala de qualidade humana passou a caber no aparelho — o Pocket TTS da Kyutai tem 100 milhões de parâmetros e roda em CPU em tempo real, e o SpeechAnalyzer da Apple transcreve sem chave de API e sem nuvem. A voz deixa de ser um serviço cobrado por minuto e vira recurso local de qualquer aplicação. A segunda: a música gerada inteira deixou de ser um bloco fechado. Em 2025 o limite técnico revelador era não entregar as faixas separadas; o Suno Studio hoje exporta até 12 stems alinhados e MIDI para qualquer DAW. Gerado e editável ao mesmo tempo é outro objeto. O efeito já é mensurável: mais de 50% dos uploads diários da Deezer são gerados por IA, e o setor fonográfico migrou do litígio para a licença. A terceira consequência é a mais cara e a menos discutida: se três segundos de áudio bastam para clonar uma voz, a voz deixa de autenticar quem fala — e a ligação telefônica, o áudio de WhatsApp e a prova sonora perdem valor probatório ao mesmo tempo.

## 2. O tema
Voz e som gerativos é o campo em que sistemas produzem fala e música completas a partir de descrição em texto ou de outra fala, sem gravação prévia do material entregue. Encosta em mídia e interação por dois lados opostos. Do lado da **interação**, a fala full-duplex — em que o sistema ouve e fala ao mesmo tempo, aceita interrupção e hesita — muda a gramática da interface: o turno rígido pergunta-resposta, herdado do chat, deixa de ser a única forma. Do lado da **mídia**, a música gerada muda o que é ser autor: a peça sai pronta, mixada e cantada, e agora também desmontável em faixas.

Merece um mapa porque as duas rupturas foram tratadas como assuntos separados — uma é "assistente de voz", a outra é "IA na música" — quando compartilham a mesma base técnica (modelos de áudio autorregressivos sobre codecs neurais) e produzem, juntas, um efeito de terceira ordem que nenhuma das duas produz sozinha: a dissolução da voz como credencial de identidade. Esse efeito não é sobre música nem sobre interface; é sobre confiança, e atinge instituições que não estão olhando para nenhuma das duas frentes.

## 3. Onde isso está hoje
**O que existe e funciona.** Na fala local: o Moshi, da Kyutai, é um modelo de fala-para-fala full-duplex que modela o áudio do usuário e o do sistema em fluxos paralelos, com latência teórica de 160 ms e cerca de 200 ms na prática, sobre o codec Mimi a 12,5 Hz e 1,1 kbps — publicado com código aberto. Em janeiro de 2026 a Kyutai lançou o **Pocket TTS**, com 100 milhões de parâmetros, leve o bastante para rodar em CPU em tempo real, com clonagem de voz e seis idiomas, incluindo português. Do lado da plataforma, o **SpeechAnalyzer** da Apple, no iOS 26, substitui o SFSpeechRecognizer por uma API que roda inteiramente no dispositivo, sem caminho servidor, sem limite de duração de sessão e sem custo por chamada.

Na música: o **Suno Studio**, lançado em setembro de 2025, exporta até 12 stems WAV alinhados no tempo — bateria, baixo, voz principal, backing, guitarra, piano, sintetizadores, cordas, metais, efeitos — mais exportação MIDI, prontos para Ableton, Logic ou FL Studio. Isto derruba o limite que definia a categoria um ano atrás.

**O que existe e não funciona.** A economia. Segundo a Deezer, em junho de 2026 as faixas totalmente geradas por IA passaram de 50% dos uploads diários de música nova — cerca de 90 mil faixas por dia — mas representam de 1% a 3% do total de streams, e até 85% dos streams gerados por essas faixas foram considerados fraudulentos em 2025. Ou seja: a geração de música resolveu o problema de produzir e não resolveu o de ser ouvida. O gargalo migrou da criação para a atenção e para a detecção de fraude.

**Quem está construindo.** Suno e Udio no lado da música; Kyutai, OpenAI (Realtime API), ElevenLabs e Apple no lado da fala; e, na base aberta, ESPnet, Whisper, Bark, ChatTTS e portes de TTS para navegador via Piper. O eixo jurídico moveu-se rápido: a Warner fechou acordo com a Suno em novembro de 2025, encerrando o litígio e prevendo modelos licenciados em 2026, descontinuação dos modelos atuais, download apenas para assinantes e controle de artistas sobre nome, imagem, voz e composição. A Universal fechou com a Udio em outubro de 2025. A Sony não fechou. Novas ações seguem em curso, e a questão dos artistas independentes — que não têm gravadora para negociar por eles — segue aberta.

**No Brasil.** O PL 2338/2023 foi aprovado no Senado em dezembro de 2024 e tramita na Câmara. O texto exige consentimento prévio para uso de voz e imagem e prevê remuneração ao titular quando obras protegidas forem usadas no desenvolvimento de sistemas comerciais. Enquanto não é lei, a proteção da voz no Brasil se apoia no direito de personalidade do Código Civil — que existe, mas foi escrito para um mundo em que imitar uma voz exigia um imitador.

## 4. As disrupções-raiz

### 4.1 A fala sai da nuvem e passa a ser full-duplex
**O que rompe.** Rompe o modelo de assistente de voz como serviço de plataforma. Enquanto reconhecer e sintetizar fala exigia servidor, quem tinha servidor tinha o assistente, e havia um preço por minuto. Com transcrição e síntese no aparelho, o custo marginal por minuto de voz tende a zero e a capacidade vira recurso de qualquer aplicativo — inclusive offline. Ao mesmo tempo, o full-duplex rompe o turno: interromper, sobrepor e hesitar são possíveis, e a conversa deixa de ser uma troca de mensagens lidas em voz alta.

**Por que agora e não há cinco anos.** Três coisas mudaram: codecs neurais que representam fala a taxas que um modelo de linguagem processa em tempo real (Mimi, 12,5 Hz); modelos pequenos o bastante para o aparelho (Pocket TTS, 100 M de parâmetros em CPU); e o sistema operacional expondo isso como API padrão e gratuita (SpeechAnalyzer no iOS 26, com taxa de erro de 2,12% contra 3,74% do Whisper Small em fala clara, segundo medição divulgada). Em 2021 nenhuma das três existia.

**O que falta acontecer.** Paridade em Android e no navegador; qualidade estável em português brasileiro com nome próprio e sigla — o ponto fraco conhecido do Whisper; e um repertório de design de interação por voz que não seja a transcrição do repertório de tela.

### 4.2 A música gerada vira editável
**O que rompe.** Rompe a distinção entre gerar e produzir. Enquanto o modelo entregava um arquivo fechado, o produto era um item de consumo: serve ou não serve. Com stems alinhados e MIDI, o gerado entra na linha de produção existente e é reescrito compasso a compasso. A geração deixa de competir com o músico e passa a ocupar o lugar da encomenda — do arranjador, do músico de sessão, da biblioteca de trilha.

**Por que agora e não há cinco anos.** Porque o problema mudou de natureza duas vezes. Primeiro, modelos que convencem na primeira escuta; depois, separação de fontes boa o bastante para produzir 12 faixas utilizáveis e alinhadas a partir de uma mixagem que nunca existiu em canais separados. A segunda parte é recente e é ela que muda o jogo.

**O que falta acontecer.** Procedência auditável do material de treino — sem a qual a peça não passa por um departamento jurídico de agência; e um modelo de remuneração que alcance o artista independente, que hoje não tem quem negocie por ele.

### 4.3 A voz deixa de autenticar quem fala
**O que rompe.** Rompe uma convenção de séculos: o reconhecimento da voz como prova informal de identidade — e, há duas décadas, como prova formal em biometria de call center. Três segundos de áudio bastam para clonar. Medições do setor de segurança apontam ataques de voz sintética crescendo de forma acentuada em bancos e seguradoras, com perda média elevada por incidente, e a capacidade humana de distinguir voz clonada de voz real caindo abaixo de 30% para sínteses de boa qualidade.

**Por que agora e não há cinco anos.** Porque a clonagem saiu do laboratório e virou recurso de produto — inclusive em modelos abertos que rodam localmente, o que elimina o ponto de controle que uma API centralizada oferecia.

**O que falta acontecer.** Marca d'água e proveniência que sobrevivam a recodificação e recorte — linha de pesquisa ativa, de que LambdaMark é exemplo de 2026 — e, sobretudo, a decisão institucional de tratar áudio sem proveniência como não-evidência. A tecnologia de detecção chega antes da norma que a torna obrigatória.

## 5. A roda dos futuros
```yaml
roda:
  - disrupcao: A fala sai da nuvem e passa a ser full-duplex
    efeitos:
      - id: e1
        ordem: 1
        efeito: Aplicativos passam a transcrever e responder por voz sem chave de API e sem enviar áudio a servidor.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O custo marginal do minuto de voz cai a zero e o assistente deixa de ser produto de plataforma para virar recurso de qualquer aplicativo.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O mercado de APIs de fala cobradas por minuto encolhe e o valor migra para vozes licenciadas e para o modelo de diálogo.
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Registro clínico, jurídico e escolar migra para ditado contínuo porque o áudio nunca sai do aparelho.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: A norma de proteção de dados passa a distinguir processamento local de remoto e "no dispositivo" vira categoria jurídica com efeito prático.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A interação full-duplex — interromper, sobrepor, hesitar — substitui o turno rígido de pergunta e resposta.
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O design de interação passa a especificar interrupção, latência e prosódia como requisitos, ao lado de layout.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Forma-se uma disciplina de design de voz com repertório próprio, como o design de tela se formou nos anos 2000.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: A tela deixa de ser o centro obrigatório da entrada e vira superfície de confirmação do que foi dito.
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Quem não pode falar — por deficiência, por estar em público, por constrangimento — passa a ser atendido por um caminho secundário e pior.
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: A música gerada inteira vira editável
    efeitos:
      - id: e3
        ordem: 1
        efeito: Trilha funcional para vídeo, jogo, publicidade e podcast passa a ser gerada sob demanda em vez de licenciada de catálogo.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: O mercado de production music encolhe e se reposiciona vendendo curadoria e garantia jurídica, não faixas.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Procedência comprovada passa a ser o produto vendido; a música vira o acessório da procedência.
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: O catálogo das plataformas de streaming é inundado e a descoberta passa a depender de filtro por origem declarada.
            sinal: forte
            prazo: 2027
            confianca: alta
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: A remuneração por stream é recalculada por modelos que pesam origem e engajamento humano verificado, não reprodução bruta.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: A saída em stems e MIDI devolve controle ao músico: o material gerado entra na DAW e é reescrito.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: O papel do músico desloca-se de executor para diretor e editor de material gerado.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A formação musical se bifurca entre quem aprende instrumento e quem aprende direção de material sintético.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Licença de treino e controle sobre voz e nome do artista viram cláusula padrão de contrato fonográfico.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Um cadastro de autorização por obra e por voz vira infraestrutura obrigatória do setor, como o ISRC.
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: A voz deixa de autenticar quem fala
    efeitos:
      - id: e5
        ordem: 1
        efeito: A biometria de voz é abandonada como fator único de autenticação em bancos e centrais de atendimento.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Instituições adotam palavra-código combinada e retorno por outro canal como padrão de verificação por telefone.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Ligar para alguém sem contexto prévio deixa de ser um gesto socialmente aceito.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Marca d'água e proveniência de áudio passam a ser exigidas por plataformas e por lei.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Áudio sem proveniência verificável passa a ser tratado como não-evidência em processo judicial.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: O áudio curto de mensageiro deixa de funcionar como prova informal de identidade entre conhecidos.
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Famílias e equipes adotam combinações privadas de verificação fora do canal onde a mensagem chegou.
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A confiança recua para o encontro presencial e para redes pequenas de vínculo verificado.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: A voz sintética de pessoa morta ou ausente vira produto de consumo — memorial, narração, personagem.
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: O direito de voz após a morte entra na legislação e passa a ser herdado, licenciado e negociado.
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

O bloco não consegue dizer três coisas.

A primeira é que as três disrupções **não são independentes**: a mesma capacidade que torna a fala local e barata (modelo pequeno, roda no aparelho, clona voz com poucos segundos) é a que retira o ponto de controle da clonagem. Não dá para ter e1 sem ter e5. Quem projeta interface por voz está, no mesmo movimento, contribuindo para a erosão da voz como credencial — e o YAML apresenta os dois ramos como se fossem escolhas separadas de mercado.

A segunda é a **assimetria de velocidade**. Os efeitos de primeira ordem da música chegam em meses, porque dependem só de produto e preço; os da voz como identidade chegam em anos, porque dependem de instituição — banco, tribunal, legislador. Essa defasagem é a janela de dano: a capacidade está distribuída e a defesa não.

A terceira é que o ramo e2.2.1 — o caminho pior para quem não pode falar — é o único efeito do mapa cujo sinal **não está crescendo**. Ele aparece por dedução, não por evidência. Ou seja, é o ponto onde uma decisão de projeto tomada agora ainda muda o resultado, e por isso merece mais atenção do que o sinal fraco sugere.

## 6. Sinais fracos e wildcards
**Sinal fraco 1 — o limite que caiu sem barulho.** Um ano atrás, "não entrega os canais separados" era a diferença entre música gerada e música produzida. O limite caiu em silêncio, dentro de um produto pago. Quando um limite definidor de categoria cai sem manchete, a discussão pública continua descrevendo a categoria antiga.

**Sinal fraco 2 — o desencontro entre volume e escuta.** Mais de metade dos uploads diários da Deezer é gerada por IA, e o conjunto responde por 1% a 3% dos streams. A saturação do catálogo não é o mesmo que a captura da atenção. Quem projetar produto para esse mercado deve olhar para o denominador, não para o numerador.

**Sinal fraco 3 — o modelo de 100 milhões de parâmetros.** O Pocket TTS é pequeno demais para chamar atenção e é exatamente por isso que importa: o que roda em CPU roda em relógio, em fone, em brinquedo e em eletrodoméstico, sem contrato de nuvem.

**Sinal fraco 4 — o litígio virou licença.** Warner com Suno, Universal com Udio, Sony fora. O desenlace não foi a proibição nem a liberação: foi a conversão da infração em linha de receita para quem tinha catálogo grande o bastante para negociar. O independente ficou de fora da mesa.

**Wildcard A — uma condenação penal por fraude de voz com tecnologia aberta.** Baixa probabilidade de ocorrer com repercussão suficiente; alto impacto. Se acontecer com um modelo aberto rodando localmente, o alvo regulatório passa a ser a distribuição do modelo, e não o uso — o que atingiria toda a frente de fala no dispositivo, inclusive a benigna.

**Wildcard B — um artista sintético liderar uma parada de sucesso relevante e ser desmascarado depois.** Baixa probabilidade; impacto alto e ambíguo — provaria que o público não distingue e, ao mesmo tempo, que se importa em ter sido enganado.

**Wildcard C — proveniência criptográfica no microfone.** Um fabricante de telefone passa a assinar o áudio no ato da captura, em hardware. Baixa probabilidade até 2031; se acontecer, inverte todo o ramo e5: em vez de detectar o falso, passa-se a exigir a assinatura do verdadeiro — com o custo de que áudio de aparelho antigo vira suspeito por padrão.

## 7. Contra o próprio mapa
**Qual efeito é apenas extrapolação linear do presente.** O ramo e3 inteiro — trilha funcional gerada sob demanda derrubando o mercado de production music. É a curva de hoje esticada até 2031. Ignora que o gargalo do mercado publicitário nunca foi produzir música, e sim licenciar com segurança jurídica; se o custo de compliance da música gerada continuar alto, a biblioteca tradicional não encolhe — ela fica mais cara e sobrevive melhor. A extrapolação é confortável porque confunde "ficou fácil de fazer" com "ficou fácil de usar em produção comercial".

**Qual efeito assume velocidade de adoção irreal.** O e2.2 — a tela deixando de ser o centro da entrada até 2030. Isto é a promessa de 2014 dos alto-falantes inteligentes, reeditada. O ciclo anterior falhou não por latência nem por qualidade de voz, mas porque a voz é ruim para revisar, comparar, escolher entre opções e trabalhar em público. Nenhuma dessas limitações é resolvida por full-duplex. Marquei sinal fraco e confiança baixa, e ainda assim suspeito que o prazo esteja otimista em uma década.

**Qual disrupção-raiz pode não se concretizar e derrubar o mapa inteiro.** A 4.1, a fala local. Ela depende de uma premissa econômica frágil: a de que as plataformas vão expor capacidade de voz de qualidade como API gratuita do sistema operacional. Nada obriga isso. Se Apple e Google passarem a condicionar o acesso à melhor qualidade a serviço pago de nuvem — o padrão histórico do setor —, a fala local fica presa na faixa "boa o suficiente para ditado, ruim para conversa", e2 não acontece, e1.1 não acontece, e o mapa perde um terço. A 4.3 sobrevive de qualquer forma, porque a clonagem já está distribuída em modelo aberto; a 4.2 sobrevive porque já aconteceu.

**Qual foi o viés da análise.** Três, assumidos. (i) **Viés de produto anglófono**: quase toda a evidência vem de produtos e litígios dos Estados Unidos e da Europa; a nota sobre o Brasil é uma camada legal aplicada por cima, não uma leitura de campo. (ii) **Viés de fonte secundária** nos números de fraude por voz sintética: vieram de relatórios de empresas que vendem detecção de fraude, que têm interesse comercial em números altos — tratei-os como ordem de grandeza, não como medida. (iii) **Viés de quem projeta**: o mapa privilegia consequências para desenvolvedores e designers, o público pedido, e trata de raspão o efeito sobre músicos de sessão, dubladores e locutores — que é onde a perda de renda acontece primeiro e de forma mais concentrada.

## 8. O que a máquina errou
_(A preencher pelo usuário.)_

## 9. Três cenários para 2031
* **Provável:** A voz local vira recurso banal de sistema operacional e a interface por voz se estabelece em nichos de mãos ocupadas — carro, cozinha, campo, registro clínico — sem substituir a tela no uso geral. A música gerada domina a trilha funcional de baixo orçamento e é adotada como ferramenta de produção por músicos profissionais, via stems. A autenticação por voz é abandonada como fator único; a fraude por clonagem estabiliza num patamar alto e incômodo, absorvida como custo operacional, sem que a prova sonora seja repensada em nenhum sistema judicial de porte.
* **Desejável:** O ganho de fala local é usado para acessibilidade e privacidade — transcrição no aparelho para quem não ouve, leitura em voz para quem não vê, registro clínico que não sai do consultório —, e cada interface por voz nasce com caminho equivalente por texto, não com um caminho degradado. Na música, um cadastro de autorização por obra e por voz, aberto e barato, permite que o artista independente participe da licença que hoje só a gravadora grande negocia. **O que precisa ser feito:** tratar paridade texto/voz como requisito de projeto e não como acessório; exigir proveniência de áudio antes que o incidente que a torne obrigatória aconteça; e construir o cadastro de autorização como infraestrutura pública, não como produto de plataforma.
* **Indesejável:** A capacidade de gerar voz fica concentrada em poucas plataformas, e a resposta à fraude é o registro de identidade vocal obrigatório — cada cidadão deposita sua voz para poder ser verificado, criando a base biométrica sonora mais completa já montada, agora com finalidade de segurança. A música gerada ocupa a trilha funcional sem que nenhum modelo de remuneração alcance o independente, e a mensuração de "engajamento humano verificado" vira mais uma camada de vigilância. **Sinal precoce:** a primeira proposta séria de cadastro nacional de voz apresentada como medida antifraude — e recebida sem debate sobre quem guarda o cadastro.

## 10. O experimento
**A Prova de Voz** — um teste de sala que mede, com a própria turma, se a voz ainda autentica.

**Que pergunta responde.** Duas, na mesma sessão: (1) quanto áudio é preciso para que um colega não reconheça que a voz de outro colega é sintética? (2) o que as pessoas fazem quando descobrem que não sabem distinguir — que procedimento inventam?

**Que tecnologia usa.** Kyutai Pocket TTS ou equivalente aberto com clonagem, rodando localmente em um notebook — sem nuvem, sem chave de API, deliberadamente, para que fique claro que a barreira de entrada é zero. Gravação das amostras no celular. Transcrição local com Whisper ou SpeechAnalyzer para preparar os textos. Todo o material fica na máquina e é apagado ao fim da aula; participação por consentimento explícito, e ninguém tem a voz clonada sem ter pedido.

**O que a turma faria.** Cada voluntário grava 15 segundos lendo um texto neutro. Fora da sala, geram-se três frases sintéticas por pessoa: uma banal, uma com um pedido de dinheiro e uma com um nome próprio e uma sigla — o ponto fraco conhecido dos modelos em português. Em seguida, cada participante ouve seis áudios — misturando reais e sintéticos, de colegas e de si mesmo — e marca real ou sintético, com confiança de 1 a 5. Mede-se acerto, confiança e o descompasso entre as duas. Na segunda metade, sem preparo, a turma tem 20 minutos para inventar um protocolo de verificação que funcione entre eles — e a aula seguinte tenta quebrá-lo.

**Que resultado mudaria minha ideia.** Se a turma acertar acima de 80% na identificação, inclusive nas frases com nome próprio e sigla, a disrupção 4.3 está superestimada no horizonte de 2031 para português brasileiro, e todo o ramo e5/e6 recua. Se, ao contrário, o acerto ficar próximo do acaso **e** a confiança declarada permanecer alta — as pessoas erram convictas —, o problema não é de detecção mas de calibração, e a resposta útil deixa de ser tecnológica e passa a ser de protocolo social: nenhuma marca d'água resolve alguém que não desconfia.

## 11. Fontes
1. https://kyutai.org/tts/ - Página oficial da Kyutai sobre seus modelos TTS; sustenta os dados do Pocket TTS (100 M de parâmetros, CPU em tempo real, seis idiomas com português, janeiro de 2026) e do TTS 1.6B. Fonte primária do desenvolvedor; alta confiabilidade quanto a especificação, a ser lida com reserva quanto a desempenho autodeclarado.
2. https://github.com/kyutai-labs/moshi - Repositório oficial do Moshi e do codec Mimi; sustenta a existência de fala-para-fala full-duplex em código aberto. Fonte primária verificável — o código está lá.
3. https://kyutai.org/Moshi.pdf - Artigo técnico do Moshi; sustenta os números de latência (160 ms teórica, ~200 ms prática) e a arquitetura de fluxos paralelos sobre Mimi a 12,5 Hz. Publicação técnica dos autores; confiabilidade alta para a descrição do método.
4. https://developer.apple.com/documentation/speech - Documentação oficial do framework Speech da Apple; sustenta o SpeechAnalyzer como API somente no dispositivo, sem caminho servidor. Fonte primária; máxima confiabilidade para o que a API faz e não faz.
5. https://www.callstack.com/blog/on-device-speech-transcription-with-apple-speechanalyzer - Relato técnico de terceiros sobre uso prático do SpeechAnalyzer; sustenta a leitura de que a transcrição local é viável sem chave de API nem custo por chamada. Fonte secundária de consultoria técnica; confiabilidade média-alta, com interesse comercial em React Native declarado.
6. https://techcrunch.com/2026/07/21/music-streamer-deezer-says-more-than-50-of-daily-uploads-are-ai-generated/ - Cobertura dos dados da Deezer de julho de 2026; sustenta os 50%+ de uploads diários, as ~90 mil faixas/dia, os 1% a 3% dos streams e os até 85% de streams fraudulentos. Fonte jornalística reportando dado de plataforma interessada — o número vem da Deezer, que vende detecção de IA; tratar como ordem de grandeza.
7. https://www.musicbusinessworldwide.com/warner-music-group-settles-with-suno-strikes-first-of-its-kind-deal-with-ai-song-generator/ - Cobertura do acordo Warner-Suno de novembro de 2025; sustenta a virada do litígio para licença, os modelos licenciados de 2026, a deprecação dos modelos anteriores e o controle de artistas sobre voz e nome. Veículo especializado no setor fonográfico; confiabilidade alta, viés editorial pró-indústria.
8. https://suno.com/l/stem-player - Página oficial do Suno sobre separação e edição por faixa; sustenta a queda do limite "não entrega os canais separados" — até 12 stems alinhados e exportação MIDI. Material do próprio fornecedor: sustenta a existência do recurso, não a sua qualidade.
9. https://arxiv.org/abs/2606.21365 - LambdaMark: marca d'água semântica de áudio para robustez e rastreabilidade (junho de 2026); sustenta que proveniência de áudio é problema de pesquisa aberto, não recurso disponível. Pré-publicação em arXiv, sem revisão por pares confirmada; confiabilidade média.
10. https://www25.senado.leg.br/web/atividade/materias/-/materia/157233 - Ficha de tramitação do PL 2338/2023 no Senado; sustenta a nota sobre o Brasil — aprovação no Senado, tramitação na Câmara, exigência de consentimento para uso de voz e remuneração por uso de obra protegida. Fonte oficial primária; máxima confiabilidade quanto ao estado da tramitação.

## 12. Anexo — o levantamento bruto

### Registro da entrevista (Etapa a)
A skill exige entrevista com cinco perguntas antes de qualquer geração. Esta rodada foi executada em modo não-interativo: não havia interlocutor disponível para responder, e as respostas foram fornecidas antecipadamente no despacho da tarefa. Registro literal do que foi perguntado e do que foi respondido:

1. **Horizonte de tempo?** → 2031.
2. **Público-alvo?** → Quem projeta mídia e interação.
3. **Recorte geográfico?** → Global, com uma nota sobre o Brasil.
4. **O que já está descartado?** → O que já é comum em produto de massa (a régua da disciplina). Nenhuma outra exclusão. Ideias óbvias que serviriam para qualquer tema também ficam fora.
5. **Viés desejado?** → Neutro. Sem disrupção suspeita pré-definida — a instrução foi descobrir.

Complementos fornecidos fora das cinco perguntas: profundidade de três ordens; modo de análise a partir da inovação, não do setor; zona de interesse do autor declarada como "Percepção e mídia sintética"; critério explícito de mudança de ideia — evidência de que a adoção já passou da maioria inicial (Rogers) ou de que a tecnologia apenas melhora o que existe.

**Desvio declarado:** a skill manda aguardar as respostas do usuário antes de avançar. Como não havia usuário, avancei com as respostas fornecidas no despacho. Nenhuma resposta foi inventada.

**Sobre o campo `zona_de_interesse`:** o formato obrigatório da skill fixa o valor literal "Sistemas de Informação" — é o único campo do frontmatter que não vem entre colchetes. Mantive o literal, como a skill manda, embora a zona declarada pelo autor nesta rodada seja "Percepção e mídia sintética". A divergência fica registrada aqui em vez de ser resolvida por conta própria no metadado.

### Filtro de maturidade (Etapa b) — veredito: DISRUPTIVO, prossegue
Aplicação do critério da skill, tecnologia por tecnologia:

| Tecnologia | Veredito | Justificativa |
|---|---|---|
| Assistente de voz por nuvem (Alexa, Siri clássica) | **Madura** — descartada | Infraestrutura consolidada, mercado estabelecido há mais de uma década. |
| TTS robótico de navegação telefônica | **Madura** — descartada | Idem; melhorias de naturalidade são incrementais. |
| Sampler, DAW, plugin de instrumento virtual | **Madura** — descartada | Mercado estabelecido desde os anos 1990. |
| Separação de fontes (stem separation) isolada | **Incremental** — descartada como raiz | Melhora um processo existente de produção musical. Entra no mapa apenas como habilitador da disrupção 4.2. |
| Transcrição por nuvem (Whisper via API) | **Incremental** — descartada como raiz | Melhor e mais barata, mas não rompe modelo; o que rompe é rodar sem servidor. |
| **Fala local, full-duplex, de qualidade humana** | **Disruptiva** — aceita | Destrói o modelo de assistente de voz como serviço de plataforma cobrado por minuto e cria a possibilidade de interface conversacional em qualquer aplicativo, offline. |
| **Música gerada inteira e editável em faixas** | **Disruptiva** — aceita | Marginaliza a cadeia de encomenda de trilha funcional e altera a cadeia de valor da produção musical; o gerado entra na linha de produção existente. |
| **Clonagem de voz a partir de segundos de áudio** | **Disruptiva** — aceita | Destrói um mercado inteiro (biometria de voz) e rompe uma convenção social anterior à tecnologia: reconhecer alguém pela voz. |

O tema passa no filtro por três caminhos independentes. A recusa prevista na skill não se aplica.

### Caminhos abandonados
- **Áudio espacial e som imersivo gerado.** Explorado e descartado: é ganho de qualidade sobre cadeia existente, não rompe modelo. Falharia no próprio filtro da Etapa (b).
- **"Fim do trabalho do músico".** Abandonado por ser ideia óbvia que serve a qualquer tema de IA generativa — a instrução de escopo excluía exatamente isto. O que sobrou no mapa é o deslocamento específico de papel (e4.1), ancorado no recurso de stems, e não a afirmação genérica.
- **Modelo de negócio de assinatura das plataformas de geração.** Abandonado: é dinâmica de preço de produto, não disrupção estrutural no horizonte pedido.
- **IA no dispositivo em geral.** Fora de escopo por decisão da disciplina — é o tema 16. Mantive apenas a parte de áudio e voz.
- **Vídeo e imagem sintéticos.** Fora de escopo — é o tema 12. O ramo e5/e6 trata de voz, e não de deepfake audiovisual, embora o efeito de confiança seja parente.
- **Busca por número de adoção pela curva de Rogers.** Tentada — era o critério declarado de mudança de ideia. Não encontrei medição confiável de penetração de fala local ou de música gerada por classe de adotante. Registro a lacuna em vez de estimar: o critério de refutação permanece, portanto, não testado, e é a principal fragilidade metodológica deste mapa.

### Fontes consultadas e não citadas
Buscas sobre estatísticas de fraude por clonagem de voz retornaram números expressivos (crescimento de ataques de voz sintética em bancos e seguradoras, perda média por incidente, queda da capacidade humana de distinguir). Todos vinham de relatórios de empresas que vendem detecção de fraude. Usei como ordem de grandeza no corpo do texto, com a ressalva explícita na Seção 7, e **não** os listei na Seção 11 — não sustentariam uma alegação numérica precisa.
