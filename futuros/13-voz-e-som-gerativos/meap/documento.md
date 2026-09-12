---
tema: Voz e som gerativos
slug: voz-e-som-gerativos
autor_login: meap
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-11
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global, com nota sobre o Brasil
disrupcoes_raiz: 3
efeitos_ordem_1: 10
efeitos_ordem_2: 14
efeitos_ordem_3: 11
tecnologias_citadas: [Moshi, Kyutai Pocket TTS, Apple SpeechAnalyzer, Whisper, Bark, ChatTTS, piper-tts-web, espnet, Suno, Suno Studio, Udio, ElevenLabs, Stable Audio, Meta Audiobox, OpenAI Realtime API, Demucs, biometria de voz, AudioSeal, C2PA para áudio]
fontes: 11
confianca: media
experimento: "Roda de voz local — página única que roda transcrição e síntese no próprio navegador/celular, sem chave de API, medindo latência de ida e volta e contando interrupções; e um segundo modo que pede à turma julgar se um áudio curto é humano ou sintético, registrando o acerto."
skill_usada: futurization-meap
publico_ok: false
---

# Mapa de futuro — Voz e som gerativos

## 1. Resumo

Duas rupturas correm juntas e são frequentemente confundidas. Na primeira, a fala deixa de
ser um serviço de nuvem cobrado por minuto e passa a ser uma capacidade do aparelho: modelos
de diálogo falado full-duplex com latência prática de cerca de 200 ms e sintetizadores de 100
milhões de parâmetros que rodam em CPU tornaram a conversa de qualidade humana algo que não
depende de rede nem de fornecedor. Na segunda, a música deixa de ser produzida e passa a ser
gerada inteira — e, desde 2026, gerada de forma editável: a exportação de stems e MIDI
derrubou o limite técnico que a ementa da disciplina apontava como o sinal a vigiar. O sinal
já disparou. As consequências dessas duas rupturas se encontram num terceiro ponto, que é o
mais consequente para quem projeta interação: se qualquer voz pode ser sintetizada em tempo
real, a voz deixa de valer como prova de identidade — e com ela cai um conjunto de práticas
que nunca foram projetadas, apenas herdadas, do telefonema ao áudio de aplicativo de
mensagem. Este mapa trabalha com horizonte 2031, três disrupções-raiz, 35 efeitos derivados
e uma rodada adversarial que descartou 6 efeitos e reescreveu 4. A confiança declarada é
média: as ordens 1 e 2 se apoiam em medição publicada; a ordem 3 é raciocínio causal com
mecanismo nomeado, não previsão.

## 2. O tema

Voz e som gerativos é o campo em que fala e música deixam de ser *capturadas* e passam a ser
*geradas* — e em que a geração acontece perto do usuário, não num servidor. O tema se
distingue dos vizinhos por três cortes: a imagem em movimento fica de fora (tema 12); a IA no
dispositivo em geral fica de fora (tema 16); aqui o objeto é som e voz.

Por que isso pertence a mídia e interação, e não a processamento de sinais: a voz é a única
modalidade que é, ao mesmo tempo, **canal de entrada**, **canal de saída** e **credencial**.
Uma tecnologia que muda as três ao mesmo tempo não muda um componente da interface — muda a
gramática dela. O teclado nunca provou quem era você. O rosto prova, mas não conversa. A voz
faz as três coisas, e é por isso que a mesma ruptura técnica aparece três vezes neste mapa,
com consequências que não se parecem entre si.

Por que merece mapa de futuro agora, e não há três anos: até 2024 a fala sintética convincente
era cara, remota e lenta o bastante para que a espera funcionasse como aviso. As três
propriedades caíram juntas entre 2024 e 2026. Quando o custo, a distância e a latência de uma
tecnologia caem simultaneamente, o que muda não é o produto — é quem pode fazer produto.

## 3. Onde isso está hoje

**Fala no dispositivo.** O modelo Moshi, da Kyutai, descrito em artigo de outubro de 2024,
trata diálogo falado como geração fala-a-fala em fluxo contínuo, sem passar por texto como
etapa obrigatória, com latência teórica de 160 ms e prática de cerca de 200 ms, e é
full-duplex — lida com sobreposição e interrupção em vez de esperar a vez. Em janeiro de 2026
a mesma equipe publicou o Kyutai Pocket TTS, com 100 milhões de parâmetros, leve o bastante
para rodar em CPU em tempo real, com clonagem de voz e código aberto. Do lado das
plataformas, a Apple embarcou no iOS 26 a API `SpeechAnalyzer`, cujo módulo
`SpeechTranscriber` roda inteiramente no aparelho, com modelo baixado e gerido pelo sistema,
sem chamada de rede no caminho da transcrição, e com suporte a áudio longo e distante.

**Música gerada.** A ementa da disciplina registrava que o Suno "não entrega os canais
separados". Em 2026 isso deixou de ser verdade: o Suno Studio separa a peça em até 12 stems
(vocais, vocais de apoio, bateria, baixo, guitarra, teclas, cordas, metais, madeiras,
percussão, sintetizador e efeitos) e exporta arquivos alinhados no tempo para uso em DAW, com
exportação de MIDI anunciada em julho de 2026. O limite que marcava a fronteira caiu dentro
do próprio semestre em que a fronteira foi descrita.

**Escala e mercado.** A Deezer publica medição própria: em janeiro de 2026, 60 mil faixas
inteiramente geradas por IA entravam por dia (39% dos envios); em abril, 75 mil (44%); em
junho, cerca de 90 mil, ultrapassando pela primeira vez metade de todos os envios diários. O
mesmo relatório mostra o outro lado do número: essas faixas respondem por 1% a 3% das
execuções, e até 85% das execuções das faixas totalmente sintéticas foram consideradas
fraudulentas e desmonetizadas. Um estudo Ipsos encomendado pela Deezer com 9 mil pessoas em
oito países registrou que 97% não distinguiram música gerada de música humana em teste cego, e
que 80% acham que ela deveria ser rotulada. Do lado jurídico, os processos de 2024 viraram
contratos: a Warner acertou com a Suno e a Universal com a Udio ao longo de 2025, com royalty
por geração na faixa relatada de US$ 0,002 a US$ 0,005.

**Voz como credencial.** No Brasil, a Serasa Experian registrou 6.937.832 tentativas de fraude
no primeiro semestre de 2025 — uma a cada 2,3 segundos —, das quais 53,7% dirigidas a bancos
e emissores de cartão, num ambiente em que o Pix movimentou R$ 27,3 trilhões em 63,7 bilhões
de operações em 2024. Trabalhos acadêmicos recentes sobre verificação de locutor concluem que
os sistemas biométricos de áudio implantados são vulneráveis à síntese atual e precisam de
endurecimento substancial.

**Regulação.** As obrigações de transparência do art. 50 do AI Act europeu passaram a valer em
2 de agosto de 2026: o provedor precisa marcar a saída de áudio em formato legível por
máquina e detectável como gerada por IA; o implantador precisa revelar o uso quando cria
*deepfake* — definido incluindo áudio que se pareça com pessoa existente e pareça autêntico —,
com orientação de aviso audível para áudio. Há prazo estendido, até 2 de dezembro de 2026,
para sistemas já no mercado. **Nota Brasil:** o PL 2338/2023 foi aprovado no plenário do
Senado em 26 de dezembro de 2024 e remetido à Câmara em 17 de março de 2025, onde segue sem
deliberação conclusiva — ou seja, no horizonte mais próximo o Brasil tem o problema em escala
maior que a europeia e o instrumento jurídico em estágio anterior.

**Trabalho.** O SAG-AFTRA firmou em novembro de 2024 o *Independent Interactive Localization
Agreement*, estendendo proteções contra uso de réplica de voz por IA a dubladores de
localização de jogos — o primeiro recorte em que consentimento e pagamento por voz sintética
entraram em acordo coletivo, e não em termo de uso.

## 4. As disrupções-raiz

Antes das três que ficaram, a triagem de maturidade (seção 12) descartou duas candidatas:
**agente de voz conversacional em atendimento** e **separação de fontes (stem separation)
como ferramenta isolada**. As duas são maduras pelo critério adotado — a primeira já está em
produção na maioria das grandes operações de atendimento; a segunda é padrão de mercado desde
2019. Elas entram nesta seção 3 como contexto, nunca como raiz.

### 4.1. Fala local e full-duplex — a conversa deixa de ser um serviço

**O que rompe.** Rompe três coisas ao mesmo tempo: o modelo de cobrança por minuto de fala; o
turno como unidade de interação (pergunta, espera, resposta); e a mediação por fornecedor —
falar com qualidade humana deixa de exigir chave de API. O assistente de voz por nuvem
funcionava porque a inferência era cara e remota; as duas premissas caíram.

**Por que agora.** Moshi demonstrou fala-a-fala full-duplex com ~200 ms de latência prática e
pesos abertos; o Pocket TTS trouxe síntese com clonagem para 100 M de parâmetros em CPU
(janeiro de 2026); a Apple embarcou transcrição integralmente local numa API de sistema
(iOS 26), o que torna "sem nuvem" o caminho padrão, não o caminho difícil.

**O que ainda falta.** (a) O raciocínio local ainda não acompanha a fala local — o modelo que
conversa bem no aparelho ainda consulta a nuvem para saber alguma coisa; (b) multilíngue:
Moshi seguia só em inglês em meados de 2026, e português brasileiro é caso de uso, não de
demonstração; (c) bateria e aquecimento em uso contínuo; (d) não existe ainda uma gramática de
projeto para o duplex — ninguém sabe, por convenção, quando a máquina deve interromper.

### 4.2. Música gerada inteira — e, desde 2026, editável

**O que rompe.** Rompe a economia da música funcional (leito para vídeo institucional,
reality, anúncio de baixo orçamento, cama de podcast), cujo custo marginal vai a quase zero; e
rompe a própria condição de "peça fechada" que separava o gerador do estúdio. Com stems e MIDI
saindo da geração, o artefato gerado entra no fluxo de produção como matéria-prima, não como
resultado.

**Por que agora.** O limite técnico que a própria disciplina apontou como sinal — não entregar
os canais separados — caiu em 2026 com o Suno Studio (até 12 stems alinhados, exportação de
MIDI). Ao mesmo tempo, os acordos Warner–Suno e Universal–Udio converteram litígio em cano
licenciado com royalty por geração, o que estabiliza o negócio o suficiente para investimento
industrial. E há demanda medida: mais de metade dos envios diários de um serviço de streaming.

**O que ainda falta.** (a) O stem exportado é separação de áudio, não estrutura musical
endereçável de ponta a ponta — editar o arranjo ainda é editar o resultado, não a decisão; (b)
procedência que sobreviva à passagem pela DAW: hoje, ao reexportar um mixdown, a marca de
origem some; (c) um regime de direitos para o catálogo usado em treino que não dependa de
acordo privado entre gravadora e plataforma.

### 4.3. A voz deixa de ser prova de identidade

**O que rompe.** Rompe a biometria de voz como fator de autenticação e, mais fundo, rompe o
uso informal da voz como prova interpessoal: o telefonema do parente, o áudio de aplicativo de
mensagem, a autorização verbal. Nenhuma dessas práticas foi projetada; todas foram herdadas
de um século em que forjar voz custava caro.

**Por que agora.** A clonagem convincente passou a exigir segundos de áudio e a rodar
localmente e de graça — a mesma queda de custo da disrupção 4.1, vista pelo outro lado. Em
paralelo, a escala de fraude no Brasil (uma tentativa a cada 2,3 segundos no primeiro semestre
de 2025, 53,7% contra bancos) e a literatura sobre vulnerabilidade de verificação de locutor
indicam que o atacante chegou antes do verificador. E a regulação entrou em vigor no mesmo
ano: art. 50 do AI Act desde 2 de agosto de 2026.

**O que ainda falta.** (a) Marcação que sobreviva à regravação analógica — tocar o áudio num
alto-falante e capturar com outro microfone apaga marca d'água e metadado; (b) verificação no
ponto de escuta: a obrigação recai sobre quem gera, e quem ouve não tem instrumento; (c) no
Brasil, instrumento jurídico — o PL 2338 está na Câmara sem deliberação.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: Fala local e full-duplex — a conversa deixa de ser um serviço
    efeitos:
      - id: e1
        ordem: 1
        efeito: O custo marginal de uma conversa falada cai a praticamente zero quando o modelo roda no aparelho, e a fala deixa de ser item de fatura por minuto.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Produtos passam a manter a escuta aberta por padrão, porque escutar continuamente deixou de custar dinheiro por minuto.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A fiscalização de privacidade troca a pergunta "o áudio foi enviado?" pela exigência de prova de que o modelo local não retém nem deriva perfil, o que exige perícia em dispositivo e não em tráfego de rede.
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A unidade de interação deixa de ser o turno e passa a ser o fluxo simultâneo, em que sistema e pessoa podem falar ao mesmo tempo.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Forma-se um ofício de projeto de interrupção — decidir quando a máquina cala, hesita, insiste ou cede a vez —, hoje ausente dos currículos de design de interação.
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Com latência prática abaixo de 200 ms, a espera deixa de funcionar como o aviso perceptual de que o interlocutor é uma máquina.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Interfaces sem tela — fone, alto-falante, óculos, brinquedo — ganham autonomia funcional, porque a conversa não depende mais de conexão.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: O celular deixa de ser o único ponto de entrada de serviço e passa a ser um entre vários, o que corrói o pedágio das lojas de aplicativo sobre a descoberta de serviço.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: Rodar local significa rodar sem chave de API, e o acesso à fala de qualidade humana deixa de ser concedido por um fornecedor.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: O eixo de diferenciação de produto sai do modelo, que é aberto e comum a todos, e vai para o dado de contexto e para a latência percebida.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A camada paga do mercado de voz se reorganiza em torno de verificação e responsabilidade — quem assina que aquela voz é lícita — e não mais em torno de síntese.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Quem não pode falar — por deficiência, por estar em público, por ruído, por não ter privacidade em casa — passa a ser excluído por padrão à medida que a fala vira o caminho mais curto.
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Volta a pressão regulatória e de mercado por entrada silenciosa (digitação, gesto, subvocalização) como requisito de acessibilidade, e não como alternativa secundária.
            sinal: medio
            prazo: 2029
            confianca: media

  - disrupcao: Música gerada inteira — e, desde 2026, editável
    efeitos:
      - id: e5
        ordem: 1
        efeito: A música funcional passa a ser gerada sob demanda a custo marginal quase nulo, e deixa de ser comprada de catálogo.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A biblioteca de trilha deixa de vender catálogo e passa a vender curadoria, exclusividade e garantia jurídica contra reivindicação de terceiros.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A formação em composição para mídia desloca-se de escrever a peça para dirigir e auditar a peça, e o portfólio do compositor passa a incluir a prova de origem do que ele assina.
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: A remuneração por execução se dilui, porque o denominador do rateio proporcional cresce mais rápido que a receita quando entram dezenas de milhares de faixas por dia.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Os serviços trocam o rateio proporcional por modelos que exigem prova de audiência humana, e a detecção de origem vira infraestrutura de pagamento, não de moderação.
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: Com stems e MIDI exportáveis, a peça gerada deixa de ser um monólito e entra no fluxo de produção como matéria-prima editável.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: A disputa sai de "a máquina compõe?" para "de quem é o arranjo que saiu do stem", porque a contribuição humana passa a ser mensurável por camada.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Cadastro de obra e repartição de direitos passam a exigir trilha de edição por camada, e o formato de entrega da indústria deixa de ser a mixagem final.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: A fronteira entre gerador e estação de trabalho de áudio desaparece, e o software de produção musical passa a ser vendido como assinatura de geração.
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e7
        ordem: 1
        efeito: Os acordos de licenciamento com royalty por geração convertem o litígio em cano comercial, e gerar uma peça passa a pagar centavos ao catálogo usado no treino.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O acordo privado entre gravadora e plataforma vira o padrão de fato sem passar por legislação, e quem não está representado por gravadora fica fora da repartição.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Surge um mercado de consentimento individual, com o artista licenciando o próprio timbre e estilo a preço público por geração, à margem das gravadoras.
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: A voz deixa de ser prova de identidade
    efeitos:
      - id: e8
        ordem: 1
        efeito: A biometria de voz perde valor como fator de autenticação, porque o custo de forjar caiu abaixo do custo de verificar.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Bancos e centrais de atendimento recuam da voz para fatores de posse e de canal, e a ligação telefônica deixa de ser via de autorização de transação.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: O telefone perde a função de canal de decisão que exerceu por um século e fica restrito a conversa sem consequência patrimonial, o que reorganiza o desenho de atendimento em torno de aplicativo e não de linha.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: O áudio curto de aplicativo de mensagem deixa de funcionar como prova informal de que alguém disse alguma coisa.
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: "A confiança se desloca do conteúdo para o vínculo: passa a valer quem está do outro lado de um canal verificado, não o que a voz diz."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: Firma-se no uso cotidiano um segredo combinado fora de banda — palavra de família, pergunta acertada de antemão — como costume social novo nascido de uma falha técnica.
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: Aplicativos de mensagem passam a sinalizar áudio sintético no ponto de escuta, e a marcação vira função de plataforma, não de gerador.
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e10
        ordem: 1
        efeito: A obrigação de marcação legível por máquina recai sobre quem gera dentro da lei, e é apagada pela regravação analógica de quem gera fora dela.
        sinal: forte
        prazo: 2026
        confianca: alta
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Forma-se uma assimetria estável — o mercado legal marca, o mercado de fraude não —, e a ausência de marca deixa de significar autenticidade.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: "A prova pericial de áudio inverte o ônus: deixa de perguntar se o arquivo é falso e passa a exigir cadeia de custódia desde a captura, o que desqualifica o áudio avulso como evidência."
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

**O que o YAML não diz.**

*Primeiro:* as três disrupções compartilham um único habilitador — síntese de fala de alta
fidelidade ficou barata e local. Separá-las é uma decisão de leitura, não um fato do mundo, e
está discutida na seção 7. O que justifica a separação é que as cadeias divergem cedo: a
mesma queda de custo produz, num ramo, uma interface nova; no outro, a perda de uma
credencial. Um mapa que as fundisse esconderia que a segunda consequência é tratada por
instituições que nem sabem que estão no mesmo assunto.

*Segundo:* há uma assimetria de prazo entre os ramos que o campo `prazo` sozinho não revela. O
ramo da música já aconteceu em boa parte — e5, e6 e e7 têm evidência publicada em 2026, não
projeção. O ramo da fala local tem demonstração técnica e API de sistema, mas ainda não tem
produto de massa. O ramo da identidade tem o dano medido e a defesa ausente. São três
velocidades diferentes sob a mesma família técnica, e planejar as três no mesmo ritmo é o erro
mais provável de quem usar este mapa.

*Terceiro:* o efeito `e4` é o único de primeira ordem que é uma perda, não um ganho, e é
também o menos citado nas fontes abertas — as buscas sobre adoção de voz retornam
produtividade e custo por chamada, quase nada sobre quem fica de fora. Isso não significa que
o efeito seja fraco; significa que ninguém está medindo. Registro isso como lacuna de
evidência, não como incerteza do efeito.

*Quarto:* o único efeito com prazo no passado, `e10` (2026), está aí de propósito. Ele já
ocorreu — o art. 50 está em vigor desde 2 de agosto de 2026 — e serve de âncora: os efeitos
de segunda e terceira ordem abaixo dele são os únicos do mapa cuja raiz não precisa ser
prevista.

## 6. Sinais fracos e wildcards

**O sinal que já disparou.** A ementa da disciplina apontou "não entrega os canais separados"
como o sinal a vigiar, com a leitura de que, no dia em que caísse, mudaria o jogo. Caiu em
2026. O que o mapa acrescenta é que a queda não fez a música gerada virar instrumento de
músico — fez o gerador virar DAW, que é outra coisa: o deslocamento não é de capacidade
criativa, é de para onde vai a assinatura mensal.

**Sinais fracos que ainda não disparam.**

1. **Fala local em português de qualidade conversacional.** Moshi seguia só em inglês em
   meados de 2026. O dia em que existir um modelo full-duplex aberto em pt-BR é o dia em que
   o ramo da fala local vira assunto brasileiro, e não importado.
2. **Marcação que sobreviva ao "buraco analógico".** Hoje, tocar e regravar apaga a marca. Uma
   técnica robusta a isso transformaria `e10.1` — a assimetria entre mercado legal e mercado
   de fraude — no seu contrário.
3. **Verificação no ponto de escuta.** A regulação obriga quem gera. Nenhuma obrigação recai
   sobre quem transmite. O primeiro aplicativo de mensagem que sinalizar áudio sintético ao
   destinatário muda a economia inteira do golpe de voz — e nenhum tem incentivo para ser o
   primeiro.
4. **Modelo de música que exponha decisão musical, e não áudio separado.** Stems são
   separação; o passo seguinte é geração cuja saída já seja estrutura (harmonia, forma,
   instrumentação endereçáveis). Isso muda a natureza do ofício, não só o custo dele.
5. **Preço público de licença de timbre individual.** Existe em acordo coletivo (SAG-AFTRA) e
   em contrato privado (Warner, Universal). Não existe como tabela pública. Quando existir, o
   estilo vira ativo negociável por qualquer um, não só por quem tem advogado.

**Wildcards.**

- *Artista sintético no topo de uma parada principal.* O dado da Deezer explica por que ainda
  não aconteceu: metade dos envios, 1% a 3% das execuções. Se a curva de execução descolar da
  curva de envio, a conclusão comum de que "ninguém ouve" perde validade da noite para o dia.
- *Uma decisão judicial de mérito contrária à alegação de uso justo no treino de música*,
  depois de os acordos privados já terem estabelecido o mercado. Regularizaria o passado de
  alguns e criaria passivo para outros, no mesmo despacho.
- *Incidente de grande porte com voz sintética em decisão pública* — autorização, depoimento,
  comunicação oficial — que force verificação obrigatória de canal antes de qualquer
  cronograma regulatório previsto.
- *Proibição de escuta contínua em dispositivo, mesmo local*, por autoridade de proteção de
  dados que trate captura como tratamento independentemente de envio. Inverteria `e1.1`.

## 7. Contra o próprio mapa

**A separação em três raízes é uma escolha discutível.** As disrupções 4.1 e 4.3 têm o mesmo
habilitador técnico. Um crítico razoável diria que 4.3 é um efeito de segunda ordem de 4.1, e
que o mapa inflou a contagem de raízes. A defesa é que o teste de causa solta funciona nos dois
sentidos: se a fala local não existisse, mas a clonagem em nuvem continuasse barata, a perda da
voz como credencial aconteceria assim mesmo. Logo, não deriva de 4.1. Mas registro que isso é
argumento, não medição.

**O mapa é curto no ganho e longo na perda.** Dos 35 efeitos, a maioria descreve deslocamento
de valor, fraude, exclusão ou disputa. Quase nada descreve capacidade nova para quem hoje não
tem nenhuma — alfabetização por voz, acesso a serviço por quem não lê, criação musical por
quem não teve formação. Isso é viés do material disponível (processos, medições de fraude,
relatórios de plataforma são mais citáveis que ganho difuso), e é também o viés confortável de
quem escreve mapa: catástrofe soa mais analítica que benefício. Foi declarado neutro no
enquadramento e não saiu neutro.

**A extrapolação mais provável está em `e8.1.1`.** "O telefone perde a função de canal de
decisão" é exatamente o tipo de efeito que a história das interfaces desmente: tecnologias
maduras coexistem por décadas em vez de desaparecer. Mantive o efeito porque o mecanismo
nomeado não é substituição de interface, é retirada de uma atribuição específica (autorizar
transação) por decisão de quem assume o risco — o banco. Ainda assim, é o efeito que eu
apostaria estar errado.

**O recorte global com nota sobre o Brasil favorece o ramo da identidade.** A evidência
brasileira que encontrei é quase toda de fraude; a evidência de fala local e de música gerada
é quase toda de fora. Isso torna o mapa mais alarmante no Brasil do que ele talvez seja, e
mais tecnológico fora do Brasil do que ele talvez seja. É limite de fonte, não de mundo.

**A régua da disciplina — descartar o que já é comum em produto de massa — pode ter recortado
demais.** O agente de voz em atendimento foi descartado por maturidade, mas é justamente onde a
população encontra fala sintética todo dia. Um mapa que o excluísse por completo perderia o
canal principal de exposição do público ao tema. Por isso ele permanece na seção 3.

## 8. O que a máquina errou

Registro dos erros cometidos por mim (o modelo) durante a construção, no espírito do
`DUVIDAS.md`.

1. **Repetir a premissa da ementa sem checar.** Na primeira passagem, tratei "o Suno não
   entrega os canais separados" como estado do mundo, porque estava no enunciado. A busca
   mostrou que o Suno Studio exporta até 12 stems e MIDI em 2026. O erro é o mais perigoso do
   conjunto porque a fonte era confiável — apenas estava desatualizada em meses, e a disrupção
   era exatamente essa.
2. **Um resumo automático de página trocou a versão do sistema operacional.** Ao abrir a sessão
   da Apple sobre `SpeechAnalyzer`, o sumarizador devolveu "introduzido no iOS 18 (referido
   como iOS 26 no vídeo)". A sessão é da WWDC25 e a API estreia no iOS 26. Mantive iOS 26 e
   registro o erro porque ele ilustra o risco de citar por intermediário: a camada que resume
   também alucina.
3. **Números redondos de mercado.** Na primeira derivação escrevi que "o mercado de voz
   sintética chegará a dezenas de bilhões até 2034". O número apareceu em listagens de busca
   de páginas comerciais que eu não abri. Cortei: projeção de mercado sem relatório nomeado,
   ano e metodologia é o erro clássico descrito no `DUVIDAS.md`, item 4.
4. **Efeito ligado à raiz errada.** Derivei inicialmente "a verificação de interlocutor migra do
   ouvido para o canal" como neta de `e2` (latência), na disrupção da fala local. O teste de
   causa solta reprovou: o efeito acontece por causa da clonagem barata, não da latência baixa.
   Religuei o conteúdo ao ramo `e9.1`, na disrupção 4.3.
5. **Extração falha apresentada como leitura.** Abri o artigo arXiv 2601.02914 sobre
   vulnerabilidade de biometria de áudio esperando números; o extrator devolveu descrição da
   estrutura do trabalho sem as métricas. Cito a conclusão qualitativa e declaro na seção 11
   que os valores experimentais não foram lidos por mim. Não transcrevi as taxas que apareceram
   em páginas agregadoras de estatística, porque não abri as fontes primárias delas.
6. **Confusão entre envio e escuta.** Na primeira redação escrevi que "mais da metade da música
   ouvida já é gerada". É falso: mais da metade dos *envios diários* a um serviço é gerada; as
   *execuções* são de 1% a 3%. A distinção inverte a conclusão sobre o mercado e foi corrigida
   em todo o documento.

## 9. Três cenários para 2031

### 9.1. Provável

Em 2031, falar com o aparelho virou o atalho, não o padrão. A fala local entrou primeiro onde a
tela sempre atrapalhou — carro, cozinha, fone, oficina, criança pequena — e conviveu com
teclado e toque sem substituir nenhum dos dois, como toda tecnologia de entrada anterior. O
duplex funcionou, e o problema que sobrou foi de projeto: levou anos até se firmar a convenção
de quando a máquina interrompe, e os primeiros produtos foram insuportáveis por falar demais.
A música funcional migrou quase inteira para geração; a biblioteca de trilha sobreviveu
vendendo o que a geração não dá — exclusividade e garantia contra reivindicação. Compositor de
mídia não desapareceu, mudou de tarefa: dirigiu e auditou, e o portfólio passou a carregar
prova de origem. A remuneração por execução continuou caindo e nenhuma reforma de rateio se
firmou; os serviços passaram a exigir sinal de audiência humana antes de pagar. E a voz deixou
de autenticar: bancos brasileiros tiraram a voz da autorização por volta de 2028, o áudio de
aplicativo virou coisa que se confirma por outro canal, e uma geração inteira aprendeu a
combinar uma palavra com a família — um costume social novo, herdado de uma falha técnica.

### 9.2. Desejável

Em 2031, a fala local cumpriu a promessa que o assistente de nuvem não cumpriu: processar no
aparelho tornou barato oferecer voz a quem não lê, a quem enxerga pouco, a quem não tem plano
de dados. Os modelos abertos em português tornaram desnecessário pedir licença a um fornecedor
estrangeiro para construir serviço falado no Brasil, e escola pública e posto de saúde
construíram os seus. A entrada silenciosa foi tratada como requisito desde o começo, e não como
adaptação posterior, de modo que a voz somou um caminho em vez de estreitar os existentes. Do
lado da música, o stem editável fez o gerador virar instrumento: a peça saiu da máquina como
material, e o trabalho humano ficou visível camada a camada — o que tornou possível repartir
direito por contribuição medida, e não por presunção. O licenciamento individual de timbre
tornou-se tabela pública, e artista sem gravadora pôde cobrar. E a verificação chegou ao ponto
de escuta: o aplicativo passou a dizer ao destinatário que aquele áudio era sintético, o que
não acabou com o golpe, mas fez o custo do golpe voltar a subir pela primeira vez desde 2024.

### 9.3. Indesejável

Em 2031, a escuta contínua tornou-se padrão porque deixou de custar, e a discussão pública
ficou presa na pergunta errada — se o áudio era enviado —, enquanto o perfil derivado
localmente nunca precisou sair do aparelho para ser vendido. A fala virou o caminho mais curto
e, por isso, o único mantido: serviços aposentaram seus fluxos escritos por custo, e quem não
podia falar — por deficiência, por não ter privacidade em casa, por estar num ônibus — passou a
depender de canal degradado. A música funcional evaporou como ocupação de entrada, e com ela o
degrau pelo qual compositor jovem entrava na profissão; a repartição de direitos consolidou-se
em acordos privados entre catálogos grandes e plataformas, e quem não estava representado
simplesmente não foi pago. E a voz deixou de valer como prova sem que nada tomasse o seu
lugar: a marcação obrigatória só atingiu quem já cumpria a lei, a regravação analógica apagou
o resto, a ausência de marca perdeu significado, e o áudio avulso — que no Brasil era a forma
mais comum de comunicação com a família — virou material sem valor probatório, num país em que
a fraude já era medida em segundos entre tentativas.

## 10. O experimento

**Roda de voz local — uma página, dois modos, nenhuma chave de API.**

O que se constrói hoje, com o que já existe e roda em navegador ou celular:

*Modo A — a conversa sem nuvem.* Uma página única que carrega um modelo de transcrição no
navegador e um sintetizador leve (linha `piper-tts-web`, `ChatTTS`, `Whisper` em WebGPU;
`SpeechAnalyzer` se for aplicativo iOS) e sustenta um diálogo curto inteiramente no aparelho.
O que se mede: latência de ida e volta, do fim da fala da pessoa ao início da fala da máquina;
número de interrupções por minuto e quantas o sistema respeitou; e a taxa de erro de
transcrição em português, com atenção a nome próprio e sigla — o defeito que a própria ementa
registra no Whisper. A pergunta que o experimento responde: **em que valor de latência a turma
para de esperar a vez e passa a falar por cima?** Esse é o limiar que separa interface de turno
de interface de fluxo, e ele é mensurável numa sala de aula em 20 minutos.

*Modo B — a voz como prova.* A mesma página toca dez áudios curtos de 6 a 10 segundos, metade
gravados por colegas, metade sintetizados a partir de amostras curtas da voz deles, com
consentimento explícito e apagamento ao final da sessão. Cada pessoa marca humano ou sintético.
O que se mede: taxa de acerto do grupo, e a diferença entre acertar a voz de um desconhecido e
acertar a voz de alguém próximo. A pergunta: **conhecer a pessoa ainda ajuda?** Se não ajudar,
o efeito `e9` deixou de ser projeção e virou medição feita pela própria turma.

*Por que este experimento e não outro.* Ele testa exatamente os dois elos mais frágeis do mapa
— `e1.2` (o turno deixa de ser a unidade) e `e9` (o áudio deixa de ser prova) — com
instrumentação de uma tarde, sem servidor, sem custo de API e sem enviar voz de ninguém para
fora do aparelho, o que é um requisito ético e, convenientemente, uma demonstração da própria
tese.

*Cuidados.* Consentimento por escrito para clonagem, amostras apagadas na frente de quem as
cedeu, nenhuma voz de pessoa ausente, nenhum áudio armazenado após a aula.

## 11. Fontes

Todas as fontes abaixo foram abertas durante a construção deste mapa. Onde a leitura foi
parcial ou intermediada, isso está dito.

1. `https://arxiv.org/abs/2410.00037` — Moshi, modelo fala-texto full-duplex: latência teórica
   de 160 ms e prática de ~200 ms, fluxos paralelos, codec Mimi, pesos públicos sob
   CC-BY-NC-SA. Sustenta a disrupção 4.1 e os efeitos `e1`, `e1.2`, `e2`. **Confiabilidade
   alta** para a descrição técnica (artigo dos próprios autores, revisado pela comunidade da
   área); baixa para inferir adoção — artigo não é mercado.
2. `https://kyutai.org/tts/` — Kyutai Pocket TTS, 100 M de parâmetros, janeiro de 2026, tempo
   real em CPU, clonagem de voz, código aberto; e Kyutai TTS 1.6B, julho de 2025. Sustenta
   "síntese deixou de exigir servidor". **Confiabilidade média-alta**: é página do próprio
   laboratório, portanto interessada, mas com código e relatório públicos que permitem
   conferência independente.
3. `https://developer.apple.com/videos/play/wwdc2025/277/` — `SpeechAnalyzer` e
   `SpeechTranscriber`: execução integralmente no dispositivo, sem chamada de rede no caminho
   da transcrição, modelo gerido pelo sistema, suporte a áudio longo e distante, ausente no
   watchOS. Sustenta a maturação da transcrição local. **Confiabilidade alta** para a descrição
   da API (fonte primária do fabricante), com a ressalva do item 2 da seção 8: o resumo
   automático que li trocou a versão do sistema.
4. `https://newsroom-deezer.com/2026/07/ai-music-exceeds-50-percent-daily-uploads-deezer/` —
   ultrapassagem de 50% dos envios diários, ~90 mil faixas/dia (pico de junho de 2026), 1% a 3%
   das execuções, até 85% de execução fraudulenta em 2025, 13,4 milhões de faixas detectadas,
   detecção desde janeiro de 2025, rotulagem ao ouvinte desde junho de 2026, acurácia declarada
   de 99,8%. Sustenta `e5`, `e5.2` e a leitura da seção 6. **Confiabilidade média**: é a única
   medição sistemática pública que encontrei, mas é autorrelatada por uma empresa que vende a
   própria ferramenta de detecção — inclusive a acurácia de 99,8% não tem auditoria
   independente citada.
5. `https://newsroom-deezer.com/2026/04/ai-generated-tracks-represent-44-of-new-uploaded-music/`
   — série temporal (39% em janeiro, 44% em abril de 2026) e estudo Ipsos com 9 mil pessoas em
   oito países: 97% não distinguiram em teste cego, 80% querem rotulagem. **Confiabilidade
   média** pelo mesmo motivo do item 4; o estudo Ipsos foi encomendado pela própria Deezer e não
   abri a metodologia dele.
6. `https://suno.com/hub/best-stem-separation-software` — Suno Studio separando até 12 stems e
   permitindo rearranjo e exportação para uso externo; página atualizada em julho de 2026.
   Sustenta a disrupção 4.2 e o efeito `e6`, e é a fonte que derruba a premissa da ementa.
   **Confiabilidade baixa-média**: é material do próprio fornecedor, em página de conteúdo de
   marketing. A capacidade é verificável por qualquer pessoa com assinatura; a extensão dela
   (12 stems, MIDI) não foi confirmada por terceiro independente. A exportação de MIDI aparece
   em listagens de busca referentes a um anúncio de 26 de julho de 2026 que **não abri**.
7. `https://artificialintelligenceact.eu/transparency-rules-article-50/` — art. 50 do AI Act:
   marcação legível por máquina pelo provedor, revelação de deepfake pelo implantador, aviso
   audível para áudio, vigência em 2 de agosto de 2026 e prazo estendido até 2 de dezembro de
   2026 para sistemas já no mercado, exceção para obra artística e satírica. Sustenta `e10`.
   **Confiabilidade alta** para o conteúdo normativo (o portal reproduz e comenta o texto
   oficial); média para a interpretação prática, que ainda depende do código de conduta.
8. `https://www25.senado.leg.br/web/atividade/materias/-/materia/157233` — PL 2338/2023:
   aprovado no plenário do Senado em 26 de dezembro de 2024, remetido à Câmara em 17 de março
   de 2025. Sustenta a nota sobre o Brasil. **Confiabilidade alta**: fonte oficial de
   tramitação.
9. `https://www.tribunadosertao.com.br/geral/2026/02/25/862930-golpes-por-voz-clonada-deixam-bancos-brasileiros-em-alerta-uma-fraude-a-cada-23-segundos`
   — 6.937.832 tentativas de fraude no 1º semestre de 2025 (Serasa Experian), uma a cada 2,3
   segundos, 53,7% contra bancos e emissores; Pix com R$ 27,3 trilhões em 63,7 bilhões de
   operações em 2024 (Febraban). Sustenta a disrupção 4.3. **Confiabilidade média**: é jornal
   regional citando fontes primárias que eu **não abri** (Serasa e Febraban). Os números são
   atribuídos, não originais; quem for usar deve buscar o relatório da Serasa diretamente.
10. `https://arxiv.org/pdf/2601.02914` — vulnerabilidade de sistemas de autenticação biométrica
    por áudio diante de síntese de fala; testa síntese neural e conversão de voz, e conclui que
    os sistemas implantados exigem endurecimento substancial. **Confiabilidade média**: o artigo
    é acadêmico e específico, mas a extração devolveu a estrutura sem as métricas — **não li os
    valores experimentais**, e por isso não cito nenhum número dele.
11. `https://www.gamedeveloper.com/business/sag-aftra-s-newest-agreement-secures-protections-for-video-game-dub-actors`
    — *Independent Interactive Localization Agreement* (SAG-AFTRA, novembro de 2024): proteções
    contra uso de réplica de voz por IA e opções ampliadas de *voiceprint* para dubladores de
    localização, com valores de sessão. Sustenta `e7.1.1` e o fecho da seção 3.
    **Confiabilidade média-alta**: publicação especializada do setor, relatando documento
    sindical público.

## 12. Anexo — o levantamento bruto

### 12.1. Fase 1 — entrevista de enquadramento (respostas recebidas)

A skill exige parar e perguntar antes de produzir. As perguntas foram feitas e respondidas na
abertura da rodada. Registro literal do que foi fixado:

| # | Pergunta | Resposta |
|---|---|---|
| 1 | Tema exato (3 a 7 palavras) | "Voz e som gerativos" — tema 13 de 19, família "Percepção e mídia sintética" |
| 2 | Corte | Tecnologia, com desdobramento em mercado e regulação |
| 3 | Horizonte | 2031 |
| 4 | Para quem | Quem projeta mídia e interação |
| 5 | Recorte geográfico | Global, com nota sobre o Brasil |
| 6 | O que já está descartado | O que já é comum em produto de massa (régua da disciplina). Nenhuma outra exclusão |
| 7 | Viés desejado | Neutro |
| 8 | O que já se sabe / leituras | Nenhuma disrupção suspeita indicada. Critério declarado para mudar de ideia: evidência de que a adoção já passou da maioria inicial (Rogers), ou de que a tecnologia só melhora o que existe sem romper nada |

Itens adicionais fixados fora do questionário mínimo: profundidade de três ordens; modo de
partida por inovação/tema (não por setor); ideias genéricas, que serviriam a qualquer tema,
devem ser excluídas; busca na web obrigatória, citando apenas o que foi efetivamente aberto.

**Não houve interlocutor disponível para as rodadas de confirmação previstas nas fases 2 e 5.**
Onde a skill manda pedir confirmação, a instrução da rodada foi assumir e declarar. As duas
decisões que teriam ido a confirmação estão marcadas abaixo com ⚠.

### 12.2. Fase 2 — triagem de maturidade

Critério aplicado (do `ESTUDO.md` e da skill): é madura a tecnologia que é commodity ou padrão
de mercado há 3 anos ou mais, ou que aparece em mais de 50% dos dispositivos/serviços do
público-alvo, ou que é tema de palco há mais de 5 anos sem ter mudado nada de fundamental.

| Tecnologia | Classificação | Justificativa | Destino |
|---|---|---|---|
| Assistente de voz por nuvem (linha Alexa/Siri/Assistant) | Madura | Padrão de mercado há mais de uma década; não rompe nada hoje | Seção 3 |
| TTS robótico concatenativo/paramétrico | Madura | Commodity; substituído, não rompedor | Seção 3 |
| Sampler, DAW, plug-in de efeito | Madura | Padrão desde os anos 1990 | Seção 3 |
| `Whisper` (transcrição, inclusive local) | Madura | Aberto desde 2022, commodity de fato; o defeito citado (nome próprio e sigla) é de qualidade, não de ruptura | Seção 3 e experimento |
| Separação de fontes (`Demucs`, `spleeter`) como ferramenta isolada | Madura | Padrão de mercado desde 2019 | **Descartada como raiz** |
| Agente de voz conversacional em atendimento | Madura ⚠ | Levantamentos de mercado indicam operação em produção na maioria das grandes empresas; a régua de >50% do público-alvo a reprova como raiz. ⚠ Classificação assumida sem confirmação, e com a ressalva de que os levantamentos são de páginas comerciais que não abri | **Descartada como raiz**; permanece na seção 3 e é discutida na seção 7 |
| Biometria de voz | Madura | Implantada há mais de uma década em bancos — e é justamente a maturidade dela que torna o ataque consequente | Seção 3; é o *objeto* da disrupção 4.3, não a disrupção |
| Clonagem de voz comercial (linha `ElevenLabs`) | Madura como produto, **disruptiva no efeito** | Vende há mais de 3 anos, mas o efeito é ruptura de cadeia (identidade), não melhoria incremental | Entra em 4.3 |
| `Moshi` / diálogo falado full-duplex | Emergente | Demonstração técnica sólida, pesos abertos; ainda sem produto de massa; só inglês em meados de 2026 | **Raiz 4.1** |
| `Kyutai Pocket TTS` (100 M, CPU) | Emergente | Janeiro de 2026; viabilidade demonstrada, escala não atingida | **Raiz 4.1** |
| `Apple SpeechAnalyzer` | Madura como infraestrutura ⚠ | API de sistema embarcada no iOS 26 — em 12 meses estará na maioria dos aparelhos do público-alvo. ⚠ Pelo critério, é infraestrutura madura, não raiz | Seção 3; habilitador de 4.1 |
| `Suno` / `Udio` (texto-para-música) | **Disruptiva** | Quebra a cadeia de valor da música funcional e cria lógica nova de uso; a ruptura está em curso, não encerrada | **Raiz 4.2** |
| `Suno Studio` (stems + MIDI na geração) | Emergente | 2026, restrito a assinatura paga; é o gatilho que faltava e que já disparou | **Raiz 4.2** |
| Marca d'água e procedência de áudio (linha `AudioSeal`, `C2PA`) | Emergente | Existe tecnicamente; não sobrevive à regravação analógica; sem adoção no ponto de escuta | Sinal fraco (seção 6) |
| `Bark`, `ChatTTS`, `piper-tts-web`, `espnet`, `pydub`, `Hacklily`, `1BITDRAGON`, `signalflow`, `PastPort` | Ferramental | Instrumentos que materializam as raízes; nenhum rompe cadeia sozinho | Experimento (seção 10) |

### 12.3. Fase 3 — raízes descartadas, com motivo

- **"Agente de voz em atendimento substitui o atendimento humano"** — descartada por maturidade.
  Não é futuro: é presente em produção. Entra como contexto.
- **"Separação de stems muda a produção musical"** — descartada por maturidade. Existe desde
  2019 como ferramenta. O que é novo não é separar: é a *geração* já sair separada, e isso está
  dentro de 4.2.
- **"Streaming muda o rateio por causa da IA"** — descartada como raiz por ser efeito, não
  ruptura. Reposicionada como `e5.2`.
- **"Áudio espacial e imersivo"** — descartada por estar fora do recorte do tema: é mídia
  sonora, mas não é som *gerado*. Fronteira com o tema 16.

### 12.4. Fase 5 — rodada adversarial, item a item

Quatro testes aplicados a cada efeito: extrapolação linear; adoção acelerada sem precedente;
causa solta (remover a raiz e ver se o efeito sobrevive); confirmação de crença prévia.

**Descartados — 6:**

1. *"O teclado desaparece como entrada até 2030."* Reprovado em adoção acelerada e em
   precedente histórico: nenhuma tecnologia de entrada madura desapareceu em menos de 15 a 20
   anos. É o erro 3 do `DUVIDAS.md`, repetido aqui pela máquina e cortado.
2. *"A tela some dos dispositivos pessoais."* Mesma reprovação; convertido no efeito muito mais
   modesto `e2.1` (interfaces sem tela ganham autonomia funcional).
3. *"O mercado de voz sintética chega a dezenas de bilhões até 2034."* Número sem relatório
   nomeado, tirado de listagem de busca comercial não aberta. Cortado.
4. *"A música humana volta a valorizar-se por escassez."* Reprovado em causa solta: é tese sobre
   gosto, não consequência da raiz, e aconteceria (ou não) por razões de mercado independentes.
5. *"Escolas de música fecham."* Reprovado por vacuidade — não nomeia mecanismo. Substituído por
   `e5.1.1`, que nomeia: deslocamento de "escrever a peça" para "dirigir e auditar a peça".
6. *"Todo mundo terá um assistente com a voz de quem quiser."* Reprovado em confirmação de
   crença: é a imagem que o tema já evoca, serve a qualquer tecnologia de voz e não distingue
   nada.

**Mantidos com reserva — 4:**

- `e8.1.1` (o telefone deixa de ser canal de decisão): risco de extrapolação declarado na
  seção 7. Mantido porque o mecanismo é decisão de quem assume o risco, não substituição de
  interface.
- `e2.1.1` (erosão do pedágio das lojas de aplicativo): terceira ordem com cadeia longa e
  muitos fatores concorrentes. Confiança baixa registrada.
- `e7.1.1` (mercado de consentimento individual com preço público): há precedente parcial em
  acordo coletivo e em contrato privado, mas nenhuma tabela pública existe. Especulativo.
- `e1.1` (escuta aberta por padrão): passa no teste de custo, mas pode ser anulado por decisão
  regulatória — está listado como wildcard invertido na seção 6.

**Reescritos — 4:**

- `e9` foi reescrito de "áudios de WhatsApp deixam de ser confiáveis" para "deixa de funcionar
  como prova informal de que alguém disse algo", para nomear a função perdida em vez do
  sentimento.
- `e5` foi reescrito depois da correção envio × execução (erro 6 da seção 8).
- O efeito "a verificação migra do ouvido para o canal" foi **religado** de `e2` para `e9.1` por
  reprovação no teste de causa solta.
- `e10` foi reescrito para incluir, na própria formulação, a assimetria que o torna
  consequente — a marcação obriga quem cumpre a lei e é apagada por quem não cumpre.

**Reexecução de disrupção:** a skill manda perguntar ao usuário se ele quer reprocessar alguma
raiz. Sem interlocutor, a pergunta fica registrada e não respondida. A candidata a reprocessar,
se houvesse resposta, seria a 4.3, para testar a hipótese alternativa de que ela é efeito de
segunda ordem de 4.1 (discussão na seção 7).

### 12.5. Buscas feitas, e o que falhou

**Buscas realizadas** (termos, em ordem): processos e acordos Suno/Udio; modelo fala-a-fala no
dispositivo e Moshi/Kyutai; exportação de stems e MIDI no Suno; proporção de faixas geradas na
Deezer; fraude por clonagem de voz e autenticação bancária; art. 50 do AI Act e rotulagem de
áudio; PL 2338 e deepfake no Brasil; `SpeechAnalyzer` da Apple; acordo SAG-AFTRA para dublagem
e localização; adoção de agentes de voz em atendimento; golpe de áudio por WhatsApp no Brasil;
música de biblioteca e licenciamento de sincronização diante da IA; literatura de modelos
falados full-duplex em arXiv.

**O que não foi encontrado ou não foi aberto:**

- **Nenhuma medição de exclusão por voz.** Buscas sobre adoção de voz devolvem produtividade,
  custo por chamada e receita. Não achei estudo sobre quem deixa de ser atendido por não poder
  falar. O efeito `e4` é, portanto, derivado por mecanismo e não sustentado por fonte.
- **Nenhum modelo full-duplex aberto em português brasileiro.** Registrado como sinal fraco.
- **Métricas do artigo de biometria (arXiv 2601.02914)** não foram extraídas; ver seção 8,
  item 5.
- **Números de fraude de origem primária** (relatório da Serasa Experian; relatório da Febraban;
  pesquisa Mastercard sobre o temor de clonagem) apareceram sempre citados por intermediários.
  Não abri os originais e, por isso, nenhum número fora do que consta na fonte 9 foi usado no
  corpo do documento.
- **Estatísticas de adoção de agentes de voz em empresa** vieram de páginas comerciais
  (fornecedores de agentes de voz vendendo o próprio produto). Usei-as **apenas** para a
  triagem de maturidade, que é uma decisão de recorte, e **não** como evidência de efeito. Por
  isso não estão na seção 11.
- **O anúncio oficial do Suno sobre exportação de MIDI (26/07/2026)** apareceu em listagem de
  busca e não foi aberto; está citado como tal na fonte 6.
- **Documentos judiciais dos processos** (petições, decisões) não foram abertos. Tudo sobre
  acordos Warner–Suno e Universal–Udio, inclusive a faixa de royalty de US$ 0,002 a 0,005,
  vem de listagem de busca de imprensa setorial, e por isso aparece no corpo como relato
  atribuído e **não** compõe a lista de fontes.

### 12.6. Contagem final

- Disrupções-raiz: 3 (de 6 candidatas; 3 descartadas por maturidade ou recorte, 1 rebaixada a
  efeito).
- Efeitos de 1ª ordem: 10 (4 + 3 + 3).
- Efeitos de 2ª ordem: 14 (5 + 5 + 4).
- Efeitos de 3ª ordem: 11 (4 + 4 + 3).
- Total no mapa: 35 efeitos.
- Efeitos descartados na rodada adversarial: 6. Mantidos com reserva: 4. Reescritos: 4
  (um deles por religação de raiz).
- Fontes abertas e citadas: 11. Fontes vistas em listagem de busca e não abertas: registradas
  em 12.5, não citadas como evidência.
- Perguntas da skill que ficaram sem resposta por ausência de interlocutor: confirmação da
  triagem de maturidade (fase 2) e reexecução de disrupção (fase 5). Assumidas e declaradas.
