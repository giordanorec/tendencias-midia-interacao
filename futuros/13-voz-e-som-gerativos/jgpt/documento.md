---
tema: Voz e som gerativos
slug: voz-e-som-gerativos
autor_login: jgpt
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-18
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 9
efeitos_ordem_2: 11
efeitos_ordem_3: 11
tecnologias_citadas: [Suno, Suno Studio, Udio, ElevenLabs, OpenAI Realtime API (gpt-realtime), Kyutai Moshi, Apple SpeechAnalyzer, Whisper, Bark, Piper (piper-tts-web), Kokoro TTS (WebGPU/Transformers.js), ChatTTS, ESPnet, Stable Audio, Meta Audiobox, Deezer AI detection, AudioShake, Moises, LALAL.AI, Songkick]
fontes: 7
confianca: media
experimento: "Teste de Turing telefônico em sala — dois pares de alunos, um humano e um agente de voz local, e uma palavra-código combinada de antemão, para medir quanto tempo a turma leva para distinguir e o que denuncia a máquina."
skill_usada: futurizacao-jgpt
publico_ok: false
---

## 1. Resumo

Duas rupturas correm juntas e são frequentemente confundidas. Na primeira, a fala virou
interface de verdade: modelos fala-a-fala sem texto intermediário respondem em frações de
segundo e já cabem no aparelho — a Apple embarcou transcrição só-local no sistema, e há
modelos de síntese de 82 milhões de parâmetros rodando dentro do navegador via WebGPU. Na
segunda, a música gerada deixou de ser um bloco fechado: em 11 de junho de 2026 a Suno passou
a exportar até doze faixas separadas e alinhadas, e o limite técnico que a disciplina apontava
("não entrega os canais separados") caiu antes de este mapa ser escrito. O efeito imediato não
é estético, é econômico e jurídico: 90 mil faixas geradas por dia na Deezer em junho de 2026,
mais de metade de todo o upload diário, com consumo real entre 1% e 3%; a Warner encerrou seu
processo contra a Suno em novembro de 2025 trocando litígio por licença e opt-in de artista; e
o Senado dos EUA moveu em 18 de junho de 2026 um direito federal sobre a própria voz. O mapa
até 2031 aposta que o conflito principal não será "IA versus músico", e sim quem controla a
identidade vocal e quem paga pela atenção que a abundância dilui.

## 2. O tema

Voz e som gerativos cobrem dois objetos que compartilham a mesma pilha técnica e quase nada
mais: a **fala** como canal de interação (ouvir, entender, responder falando, idealmente sem
sair do dispositivo) e o **som musical** gerado por descrição (instrumental, voz, mixagem).
Um é interface; o outro é obra.

Onde encosta em mídia e interação: a fala é o primeiro candidato sério a substituir a tela
como superfície primária desde o toque capacitivo, e faz isso num registro que a tela nunca
teve — o registro da conversa, com interrupção, sobreposição e prosódia. A música gerada, por
sua vez, ataca a camada de produção de mídia que menos se defendeu até agora: trilha de vídeo,
de jogo, de publicidade, de podcast.

Por que merece mapa de futuro e não estado-da-arte: porque o que está em disputa não é
qualidade de áudio — isso já foi resolvido o bastante — e sim três coisas que só se decidem
adiante: **a identidade vocal como propriedade**, **o preço da atenção num mercado com oferta
infinita** e **onde o processamento mora** (nuvem ou aparelho). São três questões abertas com
alternativas reais, não uma curva a extrapolar.

## 3. Onde isso está hoje

### O que já existe e funciona

- **Música gerada inteira, e agora editável.** As notas de versão públicas da Suno registram,
  em 11/06/2026, "Advanced Stem Separation" com três métodos (Advanced Split entre ~100
  instrumentos, Split from Mix, Auto Split em 12 categorias de stem); em 13/08/2026, o Studio
  2.0 com MIDI, efeitos e automação; a v5.5 é de 26/03/2026 [F4]. Isto derruba, no nível do
  fato, a premissa de que a música gerada "não entrega os canais separados".
- **Abundância medida.** A Deezer publica a série: 10 mil faixas/dia geradas por IA em
  janeiro de 2025 (10% do upload), 50 mil em novembro de 2025 (34%), 60 mil em janeiro de 2026
  (39%), 75 mil em abril (44%) e 90 mil em junho de 2026 — mais de 50% de todo upload diário
  [F1][F2]. Até 85% das reproduções dessas faixas foram classificadas como fraudulentas em
  2025; o consumo real fica entre 1% e 3% do total de streams [F1].
- **Detecção em produção.** A Deezer diz identificar faixas geradas por Suno e Udio, marcou
  13,4 milhões de faixas em 2025 e reporta 99,8% de acurácia [F1][F2]. É a primeira plataforma
  a rotular publicamente música gerada.
- **Fala local no sistema operacional.** A Apple substituiu o `SFSpeechRecognizer` por
  `SpeechAnalyzer` a partir do iOS 26 — framework só-de-dispositivo, sem caminho servidor.
  *(não verificado em fonte primária nesta sessão — ver seção 8.)*
- **Síntese dentro do navegador.** Kokoro (82M de parâmetros, 54 vozes, 9 grupos de idioma)
  roda via WebGPU/Transformers.js; Piper é a via CPU; Supertonic cobre 31 idiomas [F7]. A
  comparação lida recusa dar números de latência e adverte que o desempenho depende de
  dispositivo e pressão de memória [F7].

### O que existe e não funciona (ainda)

- **Música gerada não vira escuta.** O descompasso entre 50% do upload e 1–3% do consumo [F1]
  é o dado mais duro do tema: a oferta explodiu sem que a demanda a acompanhasse.
- **Artista sintético no topo é topo raso.** "Walk My Walk", do projeto Breaking Rust, chegou a
  nº 1 na Country Digital Song Sales da Billboard em novembro de 2025 com cerca de 3.000
  unidades — a cerca de US$1 por unidade, US$3.000 bastariam para comprar a posição, e a
  própria cobertura registra a crítica de manipulação [F6].
- **TTS no navegador em celular.** A comparação lida não garante suporte em todo aparelho e
  descreve pressão de memória como limite real [F7]; o caminho de borda no celular hoje passa
  pelo sistema operacional, não pela aba.

### Quem está construindo

Suno (com o Studio e, desde nov/2025, o Songkick, comprado da Warner no mesmo acordo [F3]),
Udio, ElevenLabs, OpenAI (Realtime API), Kyutai (Moshi, aberto), Apple (SpeechAnalyzer), Meta
(Audiobox), Stability (Stable Audio); no aberto, Whisper, Bark, ChatTTS, ESPnet, Piper, Kokoro;
em separação de faixas, AudioShake, Moises, LALAL.AI. Do lado da defesa: Deezer, gravadoras e
o Ecad no Brasil.

### Diagnóstico de maturidade (heurística de Hype Cycle, não previsão)

A cobertura de **fala local** é majoritariamente de *adoção* — API de sistema, framework
padrão, produto em call center —, o que sugere rampa, não pico. A de **música gerada** ainda é
de *demonstração e conflito*: manchete de gráfico, manchete de processo, e um número de
consumo que não acompanha. Uso a curva só para separar hype de uso; ela não autoriza estimar
prazo.

## 4. As disrupções-raiz

### D1 — Fala-a-fala em tempo real, sem texto intermediário e sem nuvem

**O que rompe.** A pilha clássica STT→LLM→TTS impunha três latências somadas, perda de
prosódia na conversão para texto e a obrigação de mandar áudio para um servidor. Modelos
fala-a-fala (Moshi, gpt-realtime) processam áudio para áudio direto, com full-duplex: dá para
interromper. E a transcrição virou serviço do sistema operacional, gratuita e local.

**Por que agora e não há cinco anos.** Limiar concreto e duplo: (a) o *turno* de conversa
desceu de segundos para a faixa de centenas de milissegundos, que é o patamar em que o
interlocutor humano deixa de perceber espera; (b) o custo marginal de reconhecer fala caiu a
zero quando virou API de plataforma sem chave e sem cobrança por chamada. Em 2021 nenhuma das
duas condições existia: o reconhecimento decente exigia servidor, e a resposta exigia esperar
o fim da frase.

**O que ainda falta.** Síntese *e* compreensão com a mesma qualidade fora do inglês — em
particular em português brasileiro, onde as ferramentas abertas confundem nome próprio e
sigla. E memória de contexto longa num modelo pequeno o bastante para o aparelho.

### D2 — Música gerada completa **e editável em faixas**

**O que rompe.** Enquanto a saída era um MP3 chapado, a música gerada era um produto final que
ninguém podia corrigir — servia para preencher, não para produzir. Com exportação de até doze
faixas alinhadas e uma estação de trabalho no navegador [F4], a geração entra no *workflow*
existente: o material gerado passa a ser matéria-prima de humano, e não só substituto dele.

**Por que agora e não há cinco anos.** A restrição removida não foi a de qualidade sonora, foi
a de **granularidade de controle**. O limiar é datável: 11/06/2026 nas notas de versão da Suno
[F4]. Antes disso a separação de faixas existia como serviço externo sobre a mixagem pronta
(AudioShake, Moises); agora vem do próprio gerador, o que muda o artefato de "arquivo" para
"sessão".

**O que ainda falta.** Licença que sobreviva a auditoria. O acordo Warner–Suno de 25/11/2025
obriga a depreciar modelos treinados em catálogo não licenciado e dá a artistas controle sobre
nome, imagem, voz e composição [F3] — mas não cobre Universal e Sony, que seguem litigando.
Sem isso, o uso profissional continua um risco contratual, não técnico.

### D3 — A voz deixa de ser credencial

**O que rompe.** Reconhecer alguém pela voz ao telefone foi, por um século, autenticação
barata e implícita — inclusive em banco. Com poucos segundos de áudio público bastando para
uma clonagem convincente, essa camada cai. A reação institucional já começou: o Comitê
Judiciário do Senado dos EUA aprovou por unanimidade, em 18/06/2026, o S. 4591 (NO FAKES Act),
criando um direito federal de propriedade intelectual sobre voz e semelhança visual em
réplicas digitais, com exceções para jornalismo, paródia, crítica e pesquisa sem fins
lucrativos [F5].

**Por que agora e não há cinco anos.** O limiar é de *amostra*: a clonagem passou de exigir
horas de estúdio a exigir segundos de um vídeo institucional. O que era ataque caro e dirigido
virou ataque barato e em escala.

**O que ainda falta.** Uma resposta do lado da verificação e não só do lado da punição:
procedência assinada no próprio áudio, palavra-código como norma social, e algo equivalente ao
cadeado do HTTPS para a chamada telefônica. Nada disso existe como padrão hoje.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: Fala-a-fala em tempo real, sem texto intermediário e sem nuvem
    efeitos:
      - id: e1
        ordem: 1
        efeito: "A conversa por voz vira modo de entrada padrão em aplicativos de campo, direção veicular e acessibilidade, competindo com o teclado em vez de complementá-lo."
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "Times de produto passam a projetar fluxos sem tela para tarefas curtas, e o design de interação incorpora turno, interrupção e reparo conversacional como primitivas."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "Surge um repertório profissional de padrões de voz comparável ao que o Material e o HIG fizeram pela tela, com métricas próprias de sucesso como taxa de reparo por turno."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "A exclusão se inverte de lugar: quem não pode falar, não quer falar em público ou fala uma variedade linguística mal modelada perde acesso a funções que migraram para a voz."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Reguladores de acessibilidade passam a exigir paridade funcional entre voz e texto, e a ausência de rota textual equivalente vira não conformidade auditável."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "O custo por minuto de atendimento falado cai a uma fração do custo humano e a triagem telefônica de massa passa a ser feita por agente sintético."
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "O emprego de call center se reorganiza em torno da exceção, e o operador humano vira escalonamento caro reservado a conflito, vulnerabilidade e venda complexa."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Países cuja exportação de serviços depende de atendimento por voz em escala perdem parte dessa base e disputam o nicho de supervisão humana certificada."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "Processar fala no próprio aparelho vira argumento de conformidade, e setores com dado sensível adotam voz onde antes a proibiam."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "A gravação silenciosa e contínua de ambiente deixa de ser cara e passa a ser um recurso comum de aplicativos de produtividade e saúde."
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "O consentimento de terceiros presentes no ambiente vira o ponto litigioso central da privacidade de áudio, deslocando o debate de onde o dado é enviado para quem foi captado sem pedir."
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: Música gerada completa e editável em faixas separadas
    efeitos:
      - id: e4
        ordem: 1
        efeito: "A música gerada entra na estação de trabalho como matéria-prima editável e deixa de ser apenas arquivo final descartável."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "A trilha de estoque para vídeo, jogo e publicidade perde a função de catálogo e vira geração sob medida no momento do uso."
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "O briefing musical substitui a busca por referência como habilidade central do diretor de áudio, e descrever passa a valer mais que garimpar."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "Cresce a categoria de músico que não toca nem programa e cuja competência é curar, cortar e remontar faixas geradas."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "Escolas de música disputam internamente se ensinam instrumento ou direção de geração, e os currículos se bifurcam em vez de convergir."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "O volume de faixas publicadas cresce muito mais rápido que a escuta, e a diluição de pagamento por reprodução vira o problema econômico central das plataformas."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "As plataformas abandonam o rateio proporcional puro e adotam modelos que privilegiam escuta declarada e catálogo verificado, rotulando origem sintética."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "A curadoria humana verificável vira produto pago à parte, e a assinatura se segmenta entre um plano barato de catálogo aberto e um plano caro de acervo auditado."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: "O licenciamento de catálogo para treino substitui o litígio como forma dominante de relação entre gravadora e gerador de música."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "O direito de participar do treino vira cláusula negociada em contrato de artista, com opt-in por nome, voz e composição separadamente."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "Artistas de catálogo passam a receber renda de licença de modelo sem lançar obra nova, e a carreira se descola da publicação recorrente."
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A voz deixa de ser credencial de identidade
    efeitos:
      - id: e7
        ordem: 1
        efeito: "Instituições financeiras retiram a voz da camada de autenticação e a tratam como canal não confiável por padrão."
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "A verificação migra para procedência criptográfica do áudio e para segredo combinado fora de banda, inclusive em uso doméstico."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "A palavra-código familiar se normaliza como prática cotidiana no Brasil, do mesmo modo que a confirmação de chave Pix, e passa a ser ensinada na escola."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: "A voz ganha estatuto jurídico próprio de bem licenciável, com direito federal nos EUA e cláusula equivalente em regulação de IA em outros países."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "Locutores, dubladores e apresentadores passam a licenciar a própria voz como ativo recorrente em vez de vender sessão de estúdio por hora."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: "Forma-se um mercado secundário de vozes de pessoas mortas, com herdeiros negociando direito post-mortem e conflito público sobre consentimento que ninguém pode mais dar."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: "O áudio curto deixa de ser prova social entre pessoas comuns e o áudio de mensageiro perde valor probatório informal."
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: "Mensageiros passam a assinar a captação na origem, marcando o áudio gravado no aparelho e sinalizando visualmente o que foi importado."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: "A ausência de marca de origem vira sinal de suspeita por si só, e conteúdo legítimo gravado fora do aplicativo perde circulação por falta de selo."
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o bloco não diz sozinho

Três coisas.

**Primeira: as três raízes não têm o mesmo relógio.** D1 e D3 já estão em rampa de adoção —
uma por API de plataforma, outra por incidente de fraude. D2 é a única cujo gargalo é de
*demanda*, e não de capacidade: os 90 mil uploads diários contra 1–3% de consumo [F1] dizem que
gerar deixou de ser o problema, e ouvir virou. Os prazos de e4 a e6 devem ser lidos com isso
em mente.

**Segunda: D1 e D3 são a mesma tecnologia vista de dois lados.** O que torna o agente de voz
agradável — prosódia crível, latência curta, timbre pessoal — é exatamente o que torna o golpe
eficaz. Nenhuma política pública consegue melhorar um sem melhorar o outro; é por isso que a
resposta realista está em procedência (e7.1), não em detecção.

**Terceira: a roda tem um efeito que já aconteceu.** e4 não é previsão: as faixas separadas
saíram em junho de 2026 [F4]. Mantive-o como efeito de 1ª ordem porque a *consequência de
workflow* ainda não se realizou, mas é honesto dizer que aqui o mapa começa com o pé já dentro
do futuro — o que rebaixa, e não eleva, o mérito preditivo desta subárvore.

## 6. Sinais fracos e wildcards

- **Sinal fraco 1 — o número que ninguém comenta.** A Deezer relata 99,8% de acurácia na
  detecção [F1]. Se isso se mantiver com geradores licenciados e pós-processados, a rotulagem
  de origem vira infraestrutura; se cair, todo o modelo de rateio por catálogo verificado (e5.1)
  desaba junto.
- **Sinal fraco 2 — a compra do Songkick pela Suno** dentro do acordo com a Warner [F3]. Um
  gerador de música adquirindo descoberta de shows sugere que a aposta de longo prazo não é
  vender faixa, é ocupar a camada de relação com público — o que colocaria a geração em rota
  de colisão com plataforma de streaming, e não com músico.
- **Sinal fraco 3 — fala local sem inglês.** A qualidade fora do inglês é o gargalo menos
  discutido e o que mais decide se D1 chega ao Brasil como interface primária ou como recurso
  de segunda classe.
- **Emergente rejeitada como raiz — música gerada adaptativa em tempo real em jogo.** Tem
  demonstração e biblioteca (1BITDRAGON, signalflow), mas não passou no teste do limiar: nada
  concreto caiu abaixo de um custo ou latência que impedisse isso antes. Fica no radar.
- **Emergente rejeitada como raiz — áudio espacial gerativo.** Capacidade subindo, sem
  mudança estrutural em quem produz ou consome. Radar.
- **Wildcard A (baixa probabilidade, alto impacto): um artista sintético sem operador humano
  identificável assume o topo de uma parada de streaming por escuta real, não por venda
  digital.** Breaking Rust chegou a nº 1 com ~3.000 unidades numa parada de vendas [F6] — o
  contrário de escuta real. O dia em que a posição vier de reprodução orgânica em plataforma
  grande, o argumento de que "o público não quer" perde sua base empírica e e5.1 muda de sinal.
- **Wildcard B: vazamento aberto de um modelo fala-a-fala multilíngue de qualidade comercial.**
  Zera o custo de golpe por voz em português e antecipa e7 e e9 em dois ou três anos, com a
  regulação (e8) chegando depois do estrago.
- **Wildcard C: uma decisão judicial americana de uso justo favorável ao treino** dissolveria o
  incentivo a licenciar e mataria e6 e sua subárvore inteira.

## 7. Contra o próprio mapa

### Extrapolação linear

**e5 é o presente, só que mais.** A série da Deezer (10% → 34% → 39% → 44% → >50% [F1][F2])
sobe e eu projetei que continua subindo. Mas a série é de upload numa plataforma que, no mesmo
período, passou a *rotular* e a *remover* — e uma curva que se aproxima de 100% não pode
continuar subindo pela definição do denominador. Rebaixei: **e5.1 vai de `alta` para `media`**,
porque o efeito interessante não é mais volume, é a mudança de modelo de rateio, e essa não é
extrapolação nenhuma.

**e2 também é linear.** Substituição de atendimento humano por automação é a mesma curva da
URA, do chatbot e do autoatendimento — três ondas anteriores que prometeram o mesmo e
entregaram parcialmente. Mantive `media`, não `alta`, por isso.

### Velocidade de adoção nunca vista

**e1 (voz como entrada padrão até 2028) é o efeito mais arriscado do mapa.** O caso comparável
que contradiz o prazo é o próprio assistente de voz doméstico: Alexa e Google Assistant
tiveram distribuição gratuita, base instalada de centenas de milhões e uma década, e não
deslocaram a tela nem para tarefas curtas. Se dez anos de assistente de voz com custo zero
para o usuário não bastaram, é otimista supor que três anos de latência menor bastem. Mantenho
`alta` apenas porque restringi o efeito a três nichos onde a mão está ocupada (campo, direção,
acessibilidade) — se o efeito fosse "voz substitui teclado em geral", seria `baixa`.

**e7 (bancos removendo voz da autenticação até 2028)** pressupõe velocidade regulatória
bancária que o histórico não sustenta; por outro lado, é o único efeito do mapa que uma única
fraude de grande porte pode antecipar em um ano. Mantido em `alta` por assimetria de risco, não
por inércia institucional.

### E se cada raiz não vingar?

- **Se D1 não vingar** — porque a latência real em rede ruim continua acima do limiar
  conversacional, ou porque a qualidade fora do inglês não chega —, e1, e2 e e3 caem juntos, e
  a voz permanece o que é hoje: atalho para tarefa curta. Nada em D2 ou D3 se abala; a
  clonagem não depende de conversa fluida.
- **Se D2 não vingar** — porque as decisões judiciais pendentes de Universal e Sony tornarem o
  uso comercial arriscado demais —, e4 a e6 viram um mercado de nicho licenciado e caro, o
  oposto da abundância. Repare que **o mapa fica mais interessante nesse ramo, não menos**:
  música gerada escassa e cara é um cenário que ninguém está desenhando.
- **Se D3 não vingar** — se procedência assinada se difundir rápido e a clonagem virar
  detectável na prática —, e7 a e9 encolhem para um susto de dois anos, e o tema volta a ser
  sobre criação, não sobre confiança.

### Viés do autor

A skill manda perguntar ao usuário; nesta rodada não há usuário para responder, e a instrução
de execução declara **viés neutro** e **nenhuma disrupção suspeitada de antemão**. Registro o
que consigo observar de fora: o recorte recebido ("Percepção e mídia sintética") e o material
de contexto da disciplina tratam a música gerada como a ruptura mais dramática, e eu **não**
segui essa inclinação — o mapa acabou dando a D2 os prazos mais conservadores, porque foi onde
o dado de consumo contradisse o entusiasmo. O viés que sobra, e que não consigo corrigir
sozinho, é o oposto: uma preferência por efeitos institucionais e jurídicos, que são os mais
fáceis de documentar com fonte, sobre efeitos estéticos, que são os mais difíceis. Se este mapa
erra sistematicamente, erra por subestimar mudança de gosto.

## 8. O que a máquina errou

**O erro específico, e o mais instrutivo: eu quase escrevi que a música gerada não entrega as
faixas separadas.** O enunciado do tema afirma isso de forma categórica e o apresenta como *o*
sinal fraco do tema ("o dia em que for editável muda o jogo de novo"). Era plausível,
convincente, vinha de quem conhece o campo, e eu tinha todo incentivo a repeti-lo — inclusive
porque rende um wildcard bonito. Ao abrir as notas de versão públicas da Suno, achei
"Advanced Stem Separation" datado de 11/06/2026, com 12 categorias de stem e exportação
alinhada [F4]. O sinal fraco já virou fato três meses antes desta rodada. **Foi a checagem da
fonte que pegou, não o raciocínio** — nenhum grau de plausibilidade interna teria detectado
isso, e é exatamente por isso que a Etapa 1 da skill manda ancorar no presente antes de
derivar.

Outros itens, menores:

1. **Fontes não abertas nesta sessão.** Apareceram em resultado de busca e **não** foram
   verificadas em fonte primária: a latência de ~160–200 ms do Moshi; os detalhes do
   `SpeechAnalyzer` da Apple (iOS 26, só-local, sem caminho servidor); o preço por minuto da
   Realtime API da OpenAI (a página oficial devolveu 403); a projeção de US$ 80 bi da Gartner
   para contact center; o crescimento de 400% em deepfake de voz no Brasil; e o estado de
   tramitação do PL 2338/2023 na Câmara. **Nada disso entrou na seção 11 nem sustenta efeito
   com confiança `alta`.** Precisam de confirmação antes de qualquer entrega pública.
2. **Número redondo demais.** "400% de crescimento de deepfake de voz no Brasil" circula em
   blogs de segurança sem metodologia declarada e sem denominador. Não usei.
3. **Efeito que não resistiu ao ataque e foi cortado:** "o podcast independente passa a ter
   trilha original em 2027". É consequência de e4, mas não de uma restrição removida — trilha
   barata para podcast já existia por biblioteca livre. Virou continuação de curva, não efeito
   de disrupção. Descartado (registro no anexo).
4. **Limitação estrutural desta rodada:** a Etapa 0 da skill é bloqueante e exige entrevista;
   não houve interlocutor. Os parâmetros vieram pré-definidos na instrução de execução e estão
   declarados no frontmatter, mas o item "viés do autor" da Etapa 4 ficou respondido por
   inferência, não por ele. É uma perda real de qualidade na seção 7.

## 9. Três cenários para 2031

### Provável

Em 2031 a voz não substituiu a tela — acomodou-se ao lado dela. Falar virou o gesto padrão
para tarefa curta com a mão ocupada e para acessibilidade, e a transcrição local ficou tão
banal quanto o corretor ortográfico. O atendimento telefônico de massa passou a ser sintético,
com humano reservado à exceção cara. Na música, o acordo Warner–Suno virou o formato da
indústria: quase todo gerador relevante opera licenciado, com opt-in de artista por nome, voz
e composição, e uma fatia da renda de catálogo passou a vir de licença de treino em vez de
lançamento. O upload gerado estabilizou perto da totalidade do catálogo novo, e as plataformas
abandonaram o rateio proporcional puro; rotular origem virou obrigação e o debate migrou de
"é IA?" para "é licenciado?". A voz saiu da autenticação bancária sem alarde, como a assinatura
manuscrita saiu antes dela. E a maior parte do que se ouve continua sendo feita por gente — não
por proibição, por gosto.

### Desejável

Em 2031 a procedência do áudio funciona: gravação feita no aparelho vem assinada na origem, o
receptor vê isso sem precisar entender de criptografia, e a palavra-código combinada em família
é assunto de aula de escola. A voz é um bem licenciável cujo controle está com a pessoa, viva
ou morta, com exceções firmes para crítica, paródia e jornalismo. Modelos de fala de qualidade
rodam localmente em português brasileiro, incluindo variedades regionais, e a paridade entre
rota falada e rota textual é requisito auditável de acessibilidade — ninguém perde função por
não poder falar. Na música, o material gerado é insumo editável de quem produz, a remuneração
por treino é recorrente e rastreável, e a escuta curada por humanos é um produto que se paga.
**O que teve de ser feito para chegar aqui:** padronizar procedência de áudio em corpo
internacional e embutir isso em sistema operacional e mensageiro, e não em aplicativo de nicho;
aprovar direito sobre a voz com exceções bem desenhadas, em vez de deixar para o caso a caso; e
financiar corpus aberto de fala em português para que a fronteira não fique só com quem tem
dado proprietário.

### Indesejável

Em 2031 a voz virou canal sob suspeita permanente. Nenhum áudio recebido vale nada sem
confirmação por outro meio, e o custo dessa desconfiança recai sobre quem tem menos recursos
para verificar — idoso, trabalhador informal, pequeno comércio. O direito sobre a voz existe,
mas foi capturado: na prática serve às grandes detentoras de catálogo e de imagem pública,
enquanto o dublador comum assinou cessão perpétua no primeiro contrato e concorre com a própria
voz. A música gerada não tomou o topo das paradas, tomou o rodapé: a trilha de encomenda de
baixo orçamento sumiu como profissão, sem que nada surgisse no lugar, e as plataformas
resolveram a diluição cobrando do artista para ser catalogado. **O sinal precoce disto:**
contrato de dublagem ou de artista que inclua cessão irrevogável de voz para treino como
cláusula padrão não negociável — se isso virar praxe antes de a lei fixar limite, o cenário
está em curso.

## 10. O experimento

**O que é.** *Alô, é você mesmo?* — um teste de Turing telefônico, ao vivo, em sala. Antes da
aula, quatro voluntários gravam 30 segundos de fala lida (material público, nada íntimo).
Monta-se, para dois deles, um agente de voz conversacional com timbre clonado, rodando o mais
localmente possível. Em sala, a turma recebe quatro chamadas curtas de 90 segundos, em ordem
sorteada: duas com a pessoa real, duas com o agente. Cada ouvinte aposta "humano" ou "máquina"
e, mais importante, **escreve em que segundo decidiu e o que denunciou**. Na segunda rodada,
quem atende pode fazer uma pergunta livre — e aí se mede o quanto uma pergunta bem escolhida
vale contra o timbre. Na terceira, entra a palavra-código combinada antes, e mede-se quanto
tempo a chamada dura.

**Que pergunta sobre o futuro ele responde.** e7 e e9 assumem que a voz deixa de funcionar como
prova de identidade. O experimento mede isso onde importa: não "a IA engana?" — já sabemos que
sim —, mas **quanto tempo de conversa uma pessoa atenta precisa, e qual pergunta é mais cara
de falsificar**. Se bastarem 15 segundos e uma pergunta sobre contexto compartilhado, a
subárvore de D3 desacelera. Se não bastarem, e7.1 vira urgência de produto.

**Que tecnologia emergente usa, e por que não dá com tecnologia madura.** Precisa de fala-a-fala
full-duplex de baixa latência com timbre clonado de amostra curta: se o sistema não puder ser
interrompido, ou se hesitar dois segundos, o teste vira trivial e não mede nada. TTS clássico
mais telefonia madura não serve — a máquina se denuncia pela cadência antes da primeira
pergunta, e é exatamente essa pista que desapareceu.

**O que a turma faria testando em sala.** Registra três números: tempo mediano até a decisão,
acurácia por rodada e a lista de pistas citadas (respiração, latência, resposta a interrupção,
conhecimento pessoal, prosódia emocional). A lista é o produto mais valioso — é um inventário
de sinais de autenticidade humana feito por observação, e vale como material para a discussão
de e9.

**Cuidados não negociáveis.** Só voz de quem consentiu por escrito, sabendo exatamente o uso;
nenhuma chamada sai da sala; os modelos e amostras são apagados ao fim da aula; nada é usado
para pedir qualquer coisa a ninguém. Um experimento sobre fraude por voz que dispensa
consentimento vira o próprio objeto de estudo.

**O que mudaria a opinião do autor.** Duas coisas, declaradas antes de rodar. (a) Se a turma
distinguir com mais de 90% de acerto em menos de 20 segundos **sem** pergunta de contexto, D3
é menos disruptiva do que este mapa supõe e e7 deve cair para `media`. (b) Se a palavra-código
se mostrar constrangedora ou inviável na prática entre pessoas próximas, e7.1.1 está errado, e
a solução terá de ser técnica e invisível — procedência no aparelho —, não social.

## 11. Fontes

1. **Deezer Newsroom — "AI Music Tops 50% of Daily Uploads on Deezer" (julho de 2026).**
   `https://newsroom-deezer.com/2026/07/ai-music-exceeds-50-percent-daily-uploads-deezer/`
   Sustenta: 90 mil faixas/dia, >50% do upload em junho de 2026, 85% de streams fraudulentos em
   2025, consumo de 1–3%, 13,4 milhões de faixas marcadas, 99,8% de acurácia. Confiabilidade:
   fonte primária, mas **é parte interessada** — a Deezer se posiciona como plataforma que
   combate fraude e tem incentivo a números expressivos; os dados de detecção não são
   auditáveis por terceiros. [F1]
2. **TechCrunch — "Music streamer Deezer says more than 50% of daily uploads are AI-generated"
   (21/07/2026).** `https://techcrunch.com/2026/07/21/music-streamer-deezer-says-more-than-50-of-daily-uploads-are-ai-generated/`
   Sustenta: a série histórica (10 mil/dia e 10% em jan/2025 → 90 mil/dia e >50% em jun/2026) e a
   política de remoção. Confiabilidade: imprensa especializada reputada, mas reporta números da
   própria Deezer — confirma a declaração, não o dado. [F2]
3. **Music Business Worldwide — acordo e acerto Warner Music Group × Suno (25/11/2025).**
   `https://www.musicbusinessworldwide.com/warner-music-group-settles-with-suno-strikes-first-of-its-kind-deal-with-ai-song-generator/`
   Sustenta: fim do litígio, modelos licenciados prometidos para 2026, depreciação dos modelos
   anteriores, opt-in de artista sobre nome/imagem/voz/composição, restrição de download no plano
   gratuito, compra do Songkick. Confiabilidade: veículo de referência do setor; o texto é
   fortemente ancorado no comunicado das partes, e não traz a versão de Universal e Sony. [F3]
4. **Suno — Release Notes (página oficial, consultada em 18/09/2026).**
   `https://suno.com/release-notes` Sustenta: Advanced Stem Separation em 11/06/2026 (Advanced
   Split entre ~100 instrumentos, Split from Mix, Auto Split em 12 stems); Studio 2.0 em
   13/08/2026; v5.5 em 26/03/2026; v5 em 23/09/2025. Confiabilidade: primária e datada para
   *existência* de recurso; é material de produto e não descreve limitações nem qualidade real
   da separação. [F4]
5. **Holland & Knight — "Senate Judiciary Committee Advances Legislation to Protect Name, Image,
   Likeness and Voice" (junho de 2026).**
   `https://www.hklaw.com/en/insights/publications/2026/06/senate-judiciary-committee-advances-legislation-to-protect-name`
   Sustenta: S. 4591 (NO FAKES Act of 2026) aprovado por unanimidade no Comitê Judiciário em
   18/06/2026; direito federal de propriedade sobre voz e semelhança em réplicas digitais;
   exceções de Primeira Emenda e para bibliotecas, arquivos e pesquisa sem fins lucrativos;
   segue para o plenário do Senado, com o projeto irmão parado na Câmara. Confiabilidade: alta
   para o fato processual (escritório de advocacia acompanhando tramitação); é análise, não texto
   legal — o texto do projeto não foi lido nesta sessão. [F5]
6. **Wikipédia — "Breaking Rust" (consultada em 18/09/2026).**
   `https://en.wikipedia.org/wiki/Breaking_Rust` Sustenta: projeto de country gerado por IA, nº 1
   na Country Digital Song Sales em novembro de 2025 com ~3.000 unidades, e a crítica de que a
   parada de vendas digitais é manipulável por cerca de US$ 3.000. Confiabilidade: média —
   enciclopédia colaborativa, mas as afirmações usadas são as referenciadas a Billboard e TIME;
   vale como indicação, não como dado de mercado. [F6]
7. **OfflineTTS — "Best Browser TTS 2026: Kokoro vs Piper vs Kitten" (consultada em 18/09/2026).**
   `https://offlinetts.com/tts/best-browser-tts/` Sustenta: Kokoro com 54 vozes e 9 grupos de
   idioma via WebGPU/WASM, Piper orientado a CPU, Supertonic com 31 idiomas, e a advertência
   explícita de que não há medida fixa de desempenho entre dispositivos. Confiabilidade: baixa a
   média — site de nicho, sem metodologia publicada; usado apenas para *existência e escopo* das
   opções no navegador, nunca para números. O parâmetro de 82M do Kokoro veio de resultado de
   busca e **não** foi confirmado em fonte primária. [F7]

**Não verificadas nesta sessão (não sustentam nada acima):** Kyutai/Moshi (latência); Apple
`SpeechAnalyzer` (documentação oficial não retornou conteúdo); OpenAI gpt-realtime (página
oficial devolveu HTTP 403); Gartner (contact center); estatísticas brasileiras de deepfake de
voz; tramitação do PL 2338/2023.

## 12. Anexo — o levantamento bruto

### A.1 Parâmetros recebidos (Etapa 0 — entrevista não realizada, respostas pré-fornecidas)

Não houve interlocutor nesta rodada. A instrução de execução forneceu, verbatim:

- Tema: "Voz e som gerativos" (tema 13 de 19; família "Percepção e mídia sintética").
- Horizonte: 2031. Público: quem projeta mídia e interação.
- Recorte: global, com nota sobre o Brasil.
- Descartado de início: o que já é comum em produto de massa (régua da disciplina). Nenhuma
  outra exclusão.
- Disrupção suspeita: nenhuma — descobrir. Viés: neutro.
- Ideias óbvias a excluir: as que servem para qualquer tema.
- O que faria mudar de ideia: evidência de que a adoção já passou da maioria inicial (Rogers),
  ou de que a tecnologia não rompe nada (só melhora o que existe).
- Profundidade: três ordens. Modo: a partir de uma inovação/tema, não de um setor.
- Login: jgpt. Skill: futurizacao-jgpt.

**Consequência registrada:** a Etapa 0 é declaradamente bloqueante na skill, e a Etapa 4 exige
perguntar ao autor sobre viés. Ambas foram cumpridas por parâmetro, não por diálogo. Isto está
registrado também na seção 8 como limitação conhecida do documento.

### A.2 Buscas realizadas

| # | Consulta | Resultado |
|---|---|---|
| 1 | Suno stems / processo / licenciamento 2026 | Acordo Warner (nov/2025), litígio Universal e Sony em curso, decisão de uso justo esperada em Massachusetts, ecossistema de separação (Moises, LALAL.AI, AudioShake, StemRoll) |
| 2 | Fala-a-fala local, Moshi/Kyutai, latência | Moshi full-duplex, ~160 ms teórico / ~200 ms prático, build MLX local; **não verificado em primária** |
| 3 | Deezer, % de upload gerado, fraude | Série completa de jan/2025 a jun/2026; verificado [F1][F2] |
| 4 | Golpe de clonagem de voz no Brasil | Cobertura abundante em blogs de segurança; números sem metodologia; **descartado por falta de fonte auditável** |
| 5 | Suno v5 stems / multitrack | Confirmado nas notas de versão oficiais [F4]; premissa do enunciado do tema refutada |
| 6 | NO FAKES Act / ELVIS Act / Dinamarca | S. 4591 avançou em 18/06/2026 [F5]; ELVIS Act (Tennessee) em vigor desde jul/2024, não verificado; sobre a Dinamarca a busca **não retornou resultado útil** |
| 7 | Apple SpeechAnalyzer iOS 26 | Framework só-local substituindo SFSpeechRecognizer; WWDC25 sessão 277; **primária não abriu** |
| 8 | Artista sintético em parada | Breaking Rust nº 1 em vendas digitais de country (nov/2025, ~3.000 unidades) [F6]; Xania Monet, primeira voz de IA em parada de airplay (Adult R&B, nº 30, nov/2025), **não verificado em primária** |
| 9 | PL 2338/2023, direitos de voz e remuneração | Aprovado no Senado em 10/12/2024, na Câmara em 2026; carta do Ecad e do setor em maio de 2026 pedindo remuneração por treino; **não verificado em primária** |
| 10 | Kokoro / Piper / TTS no navegador | Kokoro via WebGPU e Transformers.js, ~82M de parâmetros (não confirmado), limite de memória em celular [F7] |
| 11 | Agentes de voz em call center, preço da Realtime API | Números de mercado (Gartner, Forrester) e de preço por minuto; **página oficial da OpenAI devolveu HTTP 403**; tudo descartado do corpo do documento |

### A.3 Efeitos gerados e cortados

- **"Podcast independente com trilha original até 2027"** (derivaria de e4). Cortado: não há
  restrição removida — trilha barata já existia em biblioteca livre. É continuação de curva.
- **"Escolas de idioma substituem professor por tutor de voz"** (derivaria de e1). Cortado por
  ser o efeito que serve a qualquer tema de IA; a instrução pedia explicitamente excluir esse
  tipo.
- **"Rádio comercial gera locução local automaticamente"** (derivaria de e8). Cortado: já é
  produto de massa em alguns mercados — cai na régua de maturidade da disciplina.
- **"Karaokê e ensino de instrumento se reinventam com stems"** (derivaria de e4.1). Cortado
  como efeito de 2ª ordem por ser aplicação, não consequência estrutural; seria 4º nível na
  prática.
- **Quarto nível tentado e abandonado:** de e7.1.1 sairia "a identidade vocal vira credencial
  cadastrada em cartório digital". Excede o teto de três níveis do formato; registrado aqui.

### A.4 Candidatas a disrupção-raiz rejeitadas na Etapa 2

| Candidata | Classificação | Por quê |
|---|---|---|
| Assistente de voz por nuvem | **Madura** | Década de adoção, curva achatada; se sumisse, o campo não voltaria a 2021 |
| TTS de qualidade (sem clonagem) | **Madura** | Virou commodity de plataforma; muda preço, não restrição |
| Sampler, DAW, plug-in | **Madura** | Infraestrutura absorvida |
| Transcrição automática | **Madura** | Whisper e equivalentes; o que é novo é o *local*, coberto por D1 |
| Música adaptativa em tempo real em jogo | **Emergente** | Sem limiar datável; vai para a seção 6 |
| Áudio espacial gerativo | **Emergente** | Capacidade subindo, sem mudança estrutural |
| Separação de faixas como serviço externo | **Emergente→absorvida** | Entrou em D2 quando virou recurso do próprio gerador |
| Detecção automática de origem sintética | **Emergente** | Existe em uma plataforma só; é resposta, não raiz |

### A.5 O que este mapa não cobre, por fronteira de tema

Imagem em movimento é o tema 12. IA rodando no dispositivo em geral é o tema 16 — aqui só a
parte de áudio e voz. Ficam de fora, deliberadamente: geração de vídeo com áudio sincronizado,
modelos multimodais genéricos e hardware de inferência.
