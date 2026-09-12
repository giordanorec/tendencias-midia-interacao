---
tema: Narrativa gerativa e coautoria
slug: narrativa-gerativa-e-coautoria
autor_login: kvv
zona_de_interesse: Simulação e mundos
data: 2026-09-15
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 12
efeitos_ordem_3: 18
tecnologias_citadas: [geradores de novela visual por prompt (MangoBox), runtimes narrativos (Inworld Runtime), benchmarks de narrativa interativa (NARRA-Gym, NCP-Bench), tradução sobreposta em tempo real (LunaTranslator), síntese de voz gerativa (ChatTTS, Bark), script-to-video (Pika, Luma), plataformas de episódio gerado (Showrunner), proveniência de conteúdo (C2PA)]
fontes: 15
confianca: media
experimento: Duas metades da turma jogam a MESMA obra gerativa com sementes diferentes e depois tentam discutir "o livro" — medindo onde a conversa quebra.
skill_usada: futurizacao-kvv
publico_ok: false
---

## Seção 1 — Resumo

Este mapa trata a narrativa gerativa não como um conjunto de ferramentas que escrevem mais rápido, mas como a dissolução de três pressupostos que sustentam a mídia narrativa: que a obra é um artefato fixo, que ela tem uma língua de origem, e que a autoria se prova pelo texto. Nenhuma dessas rupturas está consumada em 2026 — cada uma depende de algo que ainda falta. A coerência de longo horizonte continua ruim de forma mensurável (no NCP-Bench, o melhor modelo sobrevive a 20 turnos em 42% dos casos e cumpre menos de 14% dos compromissos que a própria história assumiu). A tradução em runtime já funciona em nicho, mas sem responsabilidade definida por erro. E a doutrina de autoria (USCO, 2025) declarou que prompt não basta, sem dizer o que basta. O horizonte é 2031, o público é quem projeta mídia e interação, e o documento aplica a Roda dos Futuros em três ordens, submete o próprio raciocínio a teste adversarial e propõe um experimento de sala que pode derrubá-lo.

## Seção 2 — O tema

"Narrativa gerativa" é a produção do artefato narrativo inteiro — elenco, cenas, arte, diálogo, voz, às vezes vídeo — a partir de uma intenção curta, dentro de um pipeline único. "Coautoria" é o modo de trabalho que isso normaliza: o humano deixa de produzir as sentenças e passa a produzir restrições, seleções e vetos sobre um material que já vem pronto. Os dois termos são inseparáveis, e é isso que distingue este tema do vizinho: o tema 7 pergunta como um personagem age dentro de um mundo; o tema 12 pergunta como se controla a imagem gerada; o tema 14 pergunta como regras produzem espaço. Aqui a pergunta é o que acontece com **a história como coisa** quando contar custa quase nada.

Os pontos de contato com mídia e interação são três e todos estruturais. Primeiro, o artefato: uma novela visual gerada por prompt não é um arquivo que se distribui, é um programa que se executa — e produtos como o MangoBox já vendem exatamente isso, "descreva a situação e receba uma novela visual jogável". Segundo, a leitura: se o sistema adapta a história ao leitor, dois leitores não leram a mesma obra, e a discussão pública sobre obras — que é a forma como a cultura funciona — perde o objeto comum. Terceiro, a atribuição: quando o texto não distingue quem o produziu, o crédito precisa migrar do texto para o rastro, e rastro é infraestrutura, não estética.

Exige mapa prospectivo, e não levantamento de estado da arte, porque o estado da arte aqui mede a coisa errada. Um levantamento diria "os modelos melhoraram X% em fluência" e concluiria que a tecnologia está quase lá. O que os dois benchmarks sérios de 2026 mostram é o contrário: fluência subiu, consistência não acompanhou, e o gargalo é de **compromisso narrativo** — o sistema esquece o que a própria história prometeu. Isso não é um número que se extrapola; é uma bifurcação. Se for resolvido, a obra vira executável; se não for, a narrativa gerativa fica presa ao formato curto e o resto é ferramenta de produção. Um mapa de futuro serve para descrever as duas saídas sem escolher a que soa melhor.

**Nota sobre o Brasil.** O recorte é global, mas o Brasil ocupa uma posição incomum neste tema: é um dos maiores mercados consumidores de obra traduzida e dublada do mundo, com uma indústria de dublagem organizada o bastante para ter criado um movimento próprio ("Dublagem Viva", 2023) e levado a pauta à Câmara dos Deputados. Se a camada de tradução migra para o runtime do leitor (Disrupção 2), o Brasil é onde o efeito aparece primeiro e mais forte — não como país produtor de narrativa gerativa, mas como país cuja mediação linguística inteira é o que está sendo automatizado. O PL 2338/2023, aprovado no Senado em dezembro de 2024 e parado na Câmara desde 2025, é a moldura onde isso vai ou não ser resolvido.

## Seção 3 — Onde isso está hoje

**O que funciona.** Três coisas, e só três. (1) O formato curto: gerar uma cena, um capítulo, um quadrinho, um trailer. O ciclo texto → imagem → som → vídeo está fechado num pipeline só, e produtos de consumo já o empacotam. (2) A assistência no processo de escrita humana — e há um marco cultural datado: em janeiro de 2024 Rie Kudan ganhou o Akutagawa, principal prêmio literário japonês para autor emergente, com *Tokyo-to Dojo-to*, e declarou na cerimônia que cerca de 5% do livro eram frases do ChatGPT sem edição; o comitê, que chamou a obra de "praticamente impecável", não viu problema. (3) A tradução em runtime: o LunaTranslator extrai o texto de um jogo por hook de memória ou OCR e devolve tradução sobreposta, com TTS e segmentação de japonês — é software de nicho, gratuito, e já entrega a experiência final de consumir uma obra sem que ninguém a tenha localizado.

**O que falha.** A obra longa. O NCP-Bench (arXiv:2608.08160, agosto de 2026) mede exatamente o que a narrativa gerativa precisa e ninguém entregava: preservação de compromisso ao longo da interação. O melhor modelo testado sobrevive a 20 turnos sem conflito explícito em 42% dos casos; o modo de falha dominante é conflito de fato (40% a 68% conforme o modelo); menos de 14% dos compromissos que a história assumiu chegam a ser cumpridos; e apenas 3,5% de 600 execuções chegaram ao limite de 100 turnos sem contradição. O NARRA-Gym (arXiv:2605.08503, maio de 2026), testando nove modelos de fronteira em oito personas, aponta um segundo gargalo, mais sutil: os sistemas não falham na fluência, falham na "personalização sensível à resistência" — não percebem o que o leitor está recusando enquanto empurram a história adiante. Traduzindo para quem projeta: a máquina conta bem e escuta mal.

**Quem está construindo.** Camadas distintas, com incentivos distintos. Na ponta do consumidor, MangoBox (novela visual por prompt, distribuída inclusive via itch.io) e a Fable Studio com o Showrunner, que vende episódio gerado e personalizado de série — e anunciou para 2026 um longa "jogável". Na camada de runtime, a Inworld saiu explicitamente do nicho de NPC para se posicionar como infraestrutura de tempo real; junto com Convai e NVIDIA ACE, resolve o que acontece *durante*, não o que a história é. Na camada de plataforma, a Valve: a Steam exige declaração de conteúdo gerado desde janeiro de 2024, separando pré-gerado de gerado ao vivo — e o censo de 53.597 lançamentos compilado por Sulka Haro mostra a curva: 10,9% dos lançamentos com declaração em 2024, 19,9% em 2025, 30,8% em 2026 até julho, com projeção de cruzar metade em 2027-2028. O dado mais útil desse censo não é a curva, é a dissociação: os títulos declarados capturam de 10% a 27% das vendas estimadas, e os que dão certo usam IA onde ela não aparece — voz (24% contra 8%) e localização (18% contra 6%) —, não na imagem.

Na camada normativa, dois textos já valem. O U.S. Copyright Office publicou a Parte 2 do relatório *Copyright and Artificial Intelligence* em 29 de janeiro de 2025: a saída só é protegida onde um humano determinou elementos expressivos suficientes, e prompt sozinho não dá controle bastante para fundar autoria — o que se protege é a seleção, coordenação, arranjo ou modificação criativa. E o MBA 2026 da WGA, acordado em 4 de abril de 2026: empresa não pode exigir que o roteirista use IA, tem de informar se o material entregue a ele é gerado, o que a IA generativa produz não conta como material literário, e — novidade de 2026 — a empresa precisa notificar o sindicato por escrito se licenciar o trabalho do roteirista para treinar um sistema comercial, com direito do sindicato a discutir remuneração.

## Seção 4 — As disrupções-raiz

**Antes: o que foi recusado, e por quê.** O recorte do pedido descartou "o que já é comum em produto de massa", e a Etapa 2 desta skill obriga a formalizar a recusa. Ficaram de fora, por serem melhoria incremental e não ruptura:

- *LLM escrevendo rascunho de diálogo ramificado.* É aceleração de uma tarefa que já existia com a mesma estrutura (Twine, YarnSpinner, Ink). Muda o custo, não a lógica: continua havendo um autor decidindo os ramos antes da leitura.
- *Texto-para-imagem gerando arte de personagem e cenário.* Maduro e amplamente adotado; o dado da Steam mostra inclusive que é o uso *menos* correlacionado com sucesso comercial. É substituição de fornecedor de asset, não mudança do que é a obra.
- *Tradução automática de legenda e de string de jogo.* A ruptura não está em traduzir por máquina — isso é indústria consolidada, e o mercado de localização de jogos cresceu de US$ 1,706 bi (2021) para US$ 2,354 bi (2025) *com* automação dentro. A ruptura está em **onde** a tradução acontece (ver Disrupção 2).
- *Síntese de voz para diálogo.* ChatTTS, Bark e congêneres são hoje produção barata de áudio. Vira ruptura só quando acoplada ao runtime do leitor, e aí é a Disrupção 2 de novo.

As três que passam no filtro são as que ainda não se concretizaram e que, se concretizadas, tornam a lógica atual do tema inaplicável.

### Disrupção 1 — A obra deixa de ser arquivo e vira executável

**O que rompe.** A identidade numérica da obra. Toda a infraestrutura cultural da narrativa — catálogo, crítica, citação, sala de aula, prêmio, direito autoral por fixação, até a conversa de mesa de bar — pressupõe que duas pessoas possam apontar para a mesma coisa. Se o que se distribui é semente + motor + política de coerência, e cada execução produz um artefato distinto, o objeto comum desaparece. Não é "a obra tem variantes" (isso existe desde a ficção interativa dos anos 1970, com ramos finitos e autorados); é a obra não ter enumeração possível.

**Por que agora e não há 5 anos.** Em 2021 o pipeline era desmontado: texto num lugar, imagem noutro, voz noutro, e nenhum deles conversava dentro de uma sessão. Três coisas mudaram. Primeiro, o pipeline fechou — modelos multimodais entregam texto, imagem, som e vídeo sob a mesma intenção, e há produto de consumidor vivendo disso (MangoBox, Showrunner). Segundo, apareceu a camada de runtime como categoria de negócio: a Inworld deixou explicitamente de se vender como "NPC" para se vender como infraestrutura de tempo real, o que só faz sentido se alguém espera executar narrativa, não entregá-la. Terceiro — e é o sinal mais forte porque é o mais chato — a área ganhou benchmark. NARRA-Gym e NCP-Bench, ambos de 2026, transformaram "a história ficou boa?" em métrica reproduzível. Campo com benchmark é campo que virou problema de engenharia, e problema de engenharia tem curva.

**O que falta para se concretizar.** (a) Coerência de longo horizonte: enquanto o melhor modelo cumprir menos de 14% dos compromissos que a própria história assumiu, a obra executável só funciona no formato curto ou sob trilhos humanos tão apertados que ela volta a ser autorada. (b) Custo de inferência por sessão compatível com preço de mídia — hoje quem gera paga por leitor, o que inverte a economia de escala que sustentou a mídia inteira. (c) Uma resposta institucional para "o que é a obra": alguma convenção de semente canônica, de execução de referência, ou a aceitação explícita de que não há. Nada disso é tecnológico.

### Disrupção 2 — A tradução migra do texto para o runtime do leitor, e a obra perde língua de origem

**O que rompe.** A localização como etapa de produção, e com ela a noção de original e de tradução. Hoje a obra é traduzida uma vez, por alguém, sob contrato, e o resultado é um artefato creditado e responsabilizável. Se a tradução acontece no dispositivo de quem lê, sobreposta e em tempo real, a obra chega ao leitor numa língua que nenhum humano escolheu — e não existe versão em português, existe uma execução em português que ninguém guardou. Isso rompe quatro coisas de uma vez: a indústria de localização e dublagem, o direito conexo do tradutor, a cadeia de responsabilidade por erro (quem responde por uma tradução que difama, que censura, que inverte o sentido de uma cena?), e a ideia de que uma obra pertence a uma cultura de origem.

**Por que agora e não há 5 anos.** Porque a peça que faltava não era qualidade de tradução — era latência e captura. LunaTranslator é a prova de conceito: extrai texto de jogo por hook de memória ou OCR, traduz com o motor que o usuário quiser (inclusive LLM local), e devolve sobreposto, com voz. Existe, é gratuito, roda hoje. Há cinco anos o mesmo circuito significava três segundos de espera por balão e tradução de qualidade de máquina de busca. E há um sinal de mercado que confirma a direção: no censo da Steam, entre os títulos declarados que efetivamente vendem, os usos campeões são voz (24%) e localização (18%) — ou seja, o mercado já descobriu que a IA compensa exatamente na camada de mediação, onde o público não a vê.

**O que falta para se concretizar.** (a) Registro e estilo, não só sentido: tradução em runtime ainda entrega significado e perde voz autoral, e é justamente a voz que faz a obra ser obra. (b) Um regime de responsabilidade: sem isso, nenhuma plataforma grande liga o recurso por padrão. (c) Resolução política. No Brasil isso tem endereço: o movimento Dublagem Viva (2023), ligado à United Voice Artists, pede regulação do uso de IA em audiovisual; o PL 1376/22 exige que dublagem e legendagem comercializadas no país sejam feitas por profissionais residentes no Brasil; e o PL 2338/2023 — aprovado no Senado em 10/12/2024, na Câmara desde março de 2025 — carrega o capítulo de direitos intelectuais que o próprio setor cultural teme ver removido. Se a camada de tradução vira runtime, essas três frentes se tornam incompatíveis com a tecnologia ao mesmo tempo.

### Disrupção 3 — A autoria migra do texto para o rastro de decisão

**O que rompe.** O critério de prova. Durante toda a história da escrita, autoria se demonstrou pelo próprio texto: estilo, manuscrito, testemunho, e no limite a fixação. A narrativa gerativa torna o texto mudo — ele não mais distingue quem o produziu, nem quanto. A consequência não é "acabou a autoria"; é que a autoria passa a depender de uma infraestrutura de proveniência que registra o processo: o que foi selecionado, o que foi vetado, o que foi modificado, em que ordem, por quem. Isso desloca a autoria de uma propriedade estética para uma propriedade de log — auditável, falsificável, exigível por contrato e por plataforma.

**Por que agora e não há 5 anos.** Porque três instituições diferentes, sem coordenação entre si, convergiram para a mesma exigência em dezoito meses. O USCO, em 29/01/2025, disse que prompt não funda autoria e que o protegido é a seleção, coordenação, arranjo e modificação criativa — isto é: o processo, não a saída. A Valve, desde janeiro de 2024, obriga declaração e separa pré-gerado de gerado ao vivo, exigindo do desenvolvedor que descreva as salvaguardas do runtime. E o MBA 2026 da WGA (4/4/2026) instituiu notificação por escrito para licenciamento de roteiro a treino de IA comercial, mais o dever de a empresa informar ao roteirista se o material entregue a ele é gerado. Nenhum desses três é lei do que a obra é; os três, somados, criam a obrigação prática de manter rastro.

**O que falta para se concretizar.** (a) Infraestrutura: proveniência hoje é razoavelmente sólida para imagem (C2PA) e frágil para texto e para artefato executável. (b) Jurisprudência: o USCO disse o que não basta e prometeu caso a caso — quem projeta precisa de uma linha, e caso a caso não é linha. (c) Norma de crédito: nada define hoje se "coautoria com IA" é uma menção, uma percentagem, um campo de metadado ou uma confissão. Os 5% declarados por Rie Kudan foram um gesto voluntário numa cerimônia; não há nada que torne esse gesto comparável entre duas obras.

## Seção 5 — A roda dos futuros

```yaml
roda_dos_futuros:
  - id: e1
    efeito: "O valor econômico desloca-se do artefato narrativo para a semente, o motor e a curadoria"
    sinal: moderado
    prazo: "2027-2030"
    confianca: media
    filhos:
      - id: e1.1
        efeito: "Excesso de oferta colapsa o preço de obra narrativa curta a quase zero"
        sinal: forte
        prazo: "2026-2029"
        confianca: alta
        filhos:
          - id: e1.1.1
            efeito: "Lojas digitais passam a cobrar taxa de submissão para conter volume"
            sinal: fraco
            prazo: "2028-2031"
            confianca: media
          - id: e1.1.2
            efeito: "Descoberta vira o produto, e curadoria humana assinada vira bem escasso pago"
            sinal: moderado
            prazo: "2028-2031"
            confianca: media
      - id: e1.2
        efeito: "Escritor de jogo é recontratado como projetista de restrição, não de texto"
        sinal: moderado
        prazo: "2027-2030"
        confianca: media
        filhos:
          - id: e1.2.1
            efeito: "Surge o cargo de 'engenheiro de coerência narrativa', com métricas de compromisso"
            sinal: fraco
            prazo: "2029-2031"
            confianca: baixa

  - id: e2
    efeito: "A obra passa a ser distribuída como executável (semente + motor + política), não como arquivo"
    sinal: fraco
    prazo: "2029-2032"
    confianca: baixa
    filhos:
      - id: e2.1
        efeito: "Preservação digital quebra: não há o que arquivar além do gerador"
        sinal: fraco
        prazo: "2029-2032"
        confianca: media
        filhos:
          - id: e2.1.1
            efeito: "Bibliotecas e acervos passam a arquivar sementes e pesos, não obras"
            sinal: fraco
            prazo: "2030-2033"
            confianca: baixa
          - id: e2.1.2
            efeito: "Obras gerativas tornam-se inacessíveis ao desligar-se o modelo que as executava"
            sinal: moderado
            prazo: "2029-2032"
            confianca: media
      - id: e2.2
        efeito: "Custo de inferência por leitor inverte a economia de escala da mídia"
        sinal: moderado
        prazo: "2027-2030"
        confianca: media
        filhos:
          - id: e2.2.1
            efeito: "Assinaturas com teto de geração substituem preço unitário por obra"
            sinal: moderado
            prazo: "2027-2030"
            confianca: media

  - id: e3
    efeito: "A camada de tradução desloca-se para o dispositivo de quem lê"
    sinal: moderado
    prazo: "2027-2030"
    confianca: media
    filhos:
      - id: e3.1
        efeito: "Obras passam a circular globalmente sem nunca terem sido localizadas"
        sinal: moderado
        prazo: "2027-2030"
        confianca: media
        filhos:
          - id: e3.1.1
            efeito: "Mercados de nicho linguístico (japonês, coreano, mandarim) abrem-se sem intermediário"
            sinal: forte
            prazo: "2026-2029"
            confianca: alta
          - id: e3.1.2
            efeito: "Autor perde controle sobre como sua obra soa em outra língua"
            sinal: moderado
            prazo: "2028-2031"
            confianca: media
      - id: e3.2
        efeito: "Localização e dublagem reorganizam-se como supervisão de saída, não como produção"
        sinal: forte
        prazo: "2026-2029"
        confianca: alta
        filhos:
          - id: e3.2.1
            efeito: "Emprego de tradução cai onde a adoção é alta, mesmo com o mercado crescendo em valor"
            sinal: forte
            prazo: "2026-2030"
            confianca: media

  - id: e4
    efeito: "A 'língua de origem' deixa de ser atributo da obra e vira preferência de execução"
    sinal: fraco
    prazo: "2030-2033"
    confianca: baixa
    filhos:
      - id: e4.1
        efeito: "Disputa jurídica sobre responsabilidade por tradução em runtime (erro, censura, difamação)"
        sinal: fraco
        prazo: "2028-2031"
        confianca: media
        filhos:
          - id: e4.1.1
            efeito: "Plataformas exigem que o motor de tradução seja declarado e versionado"
            sinal: fraco
            prazo: "2029-2032"
            confianca: baixa
          - id: e4.1.2
            efeito: "Surgem 'traduções assinadas' como selo de qualidade pago, ao lado da gratuita automática"
            sinal: fraco
            prazo: "2029-2032"
            confianca: media
      - id: e4.2
        efeito: "Políticas nacionais de proteção linguística e de dublagem colidem com o runtime"
        sinal: moderado
        prazo: "2027-2031"
        confianca: media
        filhos:
          - id: e4.2.1
            efeito: "Brasil torna-se caso-teste: exigência de dublagem local encontra tradução no dispositivo"
            sinal: moderado
            prazo: "2027-2031"
            confianca: media

  - id: e5
    efeito: "Autoria passa a ser provada por rastro de processo, não pelo texto"
    sinal: moderado
    prazo: "2027-2031"
    confianca: media
    filhos:
      - id: e5.1
        efeito: "Declaração de uso de IA vira padrão de plataforma em todas as mídias, não só jogos"
        sinal: forte
        prazo: "2026-2029"
        confianca: alta
        filhos:
          - id: e5.1.1
            efeito: "Declarar IA deixa de ser estigma e vira ruído: o público para de usar o rótulo como filtro"
            sinal: moderado
            prazo: "2028-2031"
            confianca: media
          - id: e5.1.2
            efeito: "Emerge mercado de auditoria de proveniência narrativa, como auditoria contábil"
            sinal: fraco
            prazo: "2029-2032"
            confianca: baixa
      - id: e5.2
        efeito: "Contratos e prêmios passam a exigir declaração de participação da máquina"
        sinal: moderado
        prazo: "2027-2030"
        confianca: media
        filhos:
          - id: e5.2.1
            efeito: "Prêmios dividem-se entre categorias assistidas e não assistidas, e a divisão não se sustenta"
            sinal: fraco
            prazo: "2028-2032"
            confianca: baixa

  - id: e6
    efeito: "A leitura deixa de ser experiência compartilhável: some o objeto comum da conversa cultural"
    sinal: fraco
    prazo: "2029-2033"
    confianca: baixa
    filhos:
      - id: e6.1
        efeito: "Crítica e ensino migram do juízo sobre a obra para o juízo sobre o espaço de possibilidades"
        sinal: fraco
        prazo: "2029-2032"
        confianca: baixa
        filhos:
          - id: e6.1.1
            efeito: "Surgem ferramentas de visualização do espaço narrativo como instrumento de crítica"
            sinal: fraco
            prazo: "2028-2031"
            confianca: media
          - id: e6.1.2
            efeito: "Sala de aula adota 'execução canônica' para poder discutir a obra com a turma inteira"
            sinal: fraco
            prazo: "2029-2032"
            confianca: media
      - id: e6.2
        efeito: "Contra-movimento de obra fixa e assinada ganha valor simbólico e preço"
        sinal: moderado
        prazo: "2028-2031"
        confianca: media
        filhos:
          - id: e6.2.1
            efeito: "'Escrito por humano' vira selo comercial, com fiscalização e fraude associadas"
            sinal: moderado
            prazo: "2027-2030"
            confianca: media
```

**O que o bloco não exprime.** Três coisas.

Primeiro, o YAML sugere independência entre os ramos, e não há. O ramo e2 (obra como executável) é condicional ao gargalo de coerência do NCP-Bench: se os 14% de compromissos cumpridos virarem 80%, e2 acontece e arrasta e6 junto; se ficarem onde estão, e2 não acontece e o mapa inteiro encolhe para e1, e3 e e5 — ou seja, para efeitos de *produção* e de *mediação*, sem efeito sobre o que a obra é. O leitor deste mapa deve tratar e2 e e6 como um bloco que vive ou morre junto, não como seis efeitos separados.

Segundo, os prazos são intervalos de plausibilidade, não previsões, e estão sistematicamente enviesados para cedo nos ramos regulatórios. O caso brasileiro (e4.2.1) é o exemplo: o PL 2338 está parado na Câmara desde março de 2025, num ano eleitoral, e a estimativa de 2027-2031 supõe uma velocidade legislativa que o histórico do próprio projeto desmente.

Terceiro, e é o mais importante para quem projeta: o bloco não mostra que os efeitos de primeira ordem já estão acontecendo em velocidades muito diferentes. e3.2 (localização virando supervisão) tem sinal forte e confiança alta — está acontecendo agora, com emprego caindo onde a adoção é alta. e5.1 (declaração como padrão) também: a curva da Steam de 10,9% para 30,8% em dois anos é a coisa mais rápida deste mapa inteiro. Já e6 é quase todo especulativo. Um mapa que trata os três com o mesmo peso visual engana; a prosa existe para desfazer isso.

## Seção 6 — Sinais fracos e wildcards

**Sinais fracos.**

1. *A dissociação entre volume e receita na Steam.* 30,8% dos lançamentos declaram IA, mas capturam 10% a 27% das vendas. O sinal fraco não é "IA vende mal" — é que a régua de sucesso está se separando da régua de produção, e os títulos que vencem usam IA onde ela é invisível (voz, localização). Sinal de que o mercado está aprendendo a distinguir camada de mediação de camada de expressão.
2. *O benchmark como gênero.* NARRA-Gym e NCP-Bench aparecerem em 2026 é sinal fraco de institucionalização: antes de um campo virar indústria, ele vira métrica. E a métrica que escolheram — compromisso preservado, resistência do usuário percebida — indica que a comunidade já sabe que o problema não é fluência.
3. *O LunaTranslator.* Pequeno e enorme ao mesmo tempo, como a descrição do tema observou: software gratuito de nicho que entrega o resultado final de uma indústria de US$ 2,3 bilhões sem participar dela. Sinais fracos vivem aí — na ferramenta de hobby que já faz o que a estrutura formal ainda discute.
4. *Os 5% de Rie Kudan.* Não pelo número, mas por ter sido dito em voz alta, numa cerimônia, e aceito. É o primeiro precedente público de declaração voluntária de percentual de coautoria com máquina em obra premiada — e ninguém instituiu nada parecido desde então, o que torna o gesto mais interessante, não menos.
5. *A Inworld saindo de "NPC" para "infraestrutura".* Quando uma empresa bem capitalizada abandona o nicho que a definiu para se vender como camada de runtime, ela está apostando que o valor está em executar, não em gerar. É aposta de dinheiro contra a tese do artefato.
6. *O medo do setor cultural brasileiro de que o capítulo de direitos intelectuais seja removido do PL 2338.* Sinal fraco de que a regulação pode chegar sem tratar do que este mapa considera central — e um mapa que supõe regulação como freio precisa considerar a hipótese de ela não ser freio nenhum.

**Wildcards.**

*Wildcard principal — uma obra gerativa é premiada e depois desqualificada por não ser reproduzível.* Não "a obra usou IA" (isso já aconteceu e foi aceito, em 2024, no Akutagawa). O wildcard é o júri ler uma execução, premiar, e a obra não poder ser reproduzida para o público — porque a semente se perdeu, o modelo mudou de versão, ou porque cada leitor recebe outra coisa. A crise não seria de autoria, seria de **existência do objeto premiado**, e resolveria de uma vez a pergunta de e6: se instituições passarem a exigir execução canônica reproduzível como condição de elegibilidade, a obra executável nasce já domesticada, e todo o ramo e2/e6 deste mapa se fecha em dois anos. Probabilidade baixa; impacto total.

*Wildcard secundário — um modelo de fronteira é desligado e leva obras junto.* Uma linha de produtos narrativos que dependia de um modelo específico se torna inexecutável quando o provedor o aposenta. Impacto: transforma preservação digital de assunto de arquivista em risco de negócio, e torna e2.1.2 um fato antes de e2 ter acontecido — a mídia descobre a fragilidade da obra-executável sem nunca ter tido a obra-executável.

*Wildcard reverso — a coerência de longo horizonte é resolvida cedo e barato.* Se uma técnica de memória narrativa levar o NCP-Bench de <14% para >70% até 2028, a curva deste mapa inteiro se antecipa em três anos e a Seção 9 (cenário provável) fica errada por conservadorismo. Registrado aqui porque um mapa que só admite wildcards pessimistas é um mapa enviesado.

## Seção 7 — Contra o próprio mapa (teste adversarial)

**Extrapolação linear.** O mapa comete a extrapolação mais óbvia no ramo e5.1: pega 10,9% → 19,9% → 30,8% de declarações na Steam e trata a continuidade como quase certa (confiança alta). Três problemas. A série tem três pontos. A métrica é *declaração*, não *uso* — pode estar medindo normalização da honestidade, não crescimento da tecnologia. E há saturação óbvia à frente: o percentual não passa de 100%, e provavelmente estabiliza bem antes, quando declarar virar trivial e a categoria perder sentido. A projeção de "metade em 2027-2028" é da fonte, não minha, mas eu a adotei sem desconto. Um crítico honesto diria: essa curva pode achatar em 40% e o mapa não tem nada a dizer sobre isso.

**Velocidade de adoção irreal.** Dois pontos frágeis. O primeiro é regulatório: coloquei efeitos jurídicos em 2027-2031 apoiado num PL que está parado há mais de um ano em ano eleitoral — se o PL 2338 não sair até 2028, e4.2 simplesmente não ocorre no horizonte e o Brasil vira nota de rodapé em vez de caso-teste. O segundo é econômico e mais grave: e2.2 supõe que custo de inferência por leitor caia o bastante para sustentar mídia de massa até 2030. Não tenho nenhuma fonte consultada que sustente essa curva de custo — assumi a queda porque ela é a narrativa dominante do setor, que é exatamente o tipo de premissa que este método deveria recusar. Declaro: **e2.2 é a afirmação menos sustentada do mapa.**

**Falha da disrupção.** O cenário em que cada uma não acontece. *Disrupção 1 falha* se a coerência de longo horizonte for problema de arquitetura, não de escala — os dados do NCP-Bench são compatíveis com isso, já que o modo dominante de falha é conflito de fato, que é memória e não fluência. Nesse caso a narrativa gerativa se fixa em formato curto, vira mais uma ferramenta de produção, e 2031 se parece muito com 2026 com melhor acabamento. *Disrupção 2 falha* se a responsabilidade jurídica travar a adoção por plataformas grandes: o recurso continua existindo como software de nicho (LunaTranslator já é isso há anos, sem virar padrão), e a indústria de localização se reorganiza em torno da IA sem perder a função de mediação — que é, aliás, exatamente o que as fontes de mercado descrevem hoje. *Disrupção 3 falha* se proveniência de texto não for tecnicamente viável: sem rastro auditável, "autoria por processo" vira declaração autodeclarada, o rótulo perde valor (e5.1.1), e o campo volta ao critério anterior — quem assina, responde — sem nenhuma ruptura.

**Viés pessoal do autor.** Três, e são específicos. (1) *Viés de zona de interesse*: a zona declarada é "Simulação e mundos", o que me predispõe a ver narrativa como sistema executável — que é precisamente a tese da Disrupção 1. Um autor vindo de literatura provavelmente escreveria um mapa em que a Disrupção 3 (autoria) é a raiz e as outras duas são consequências. (2) *Viés de fonte acessível*: as evidências mais duras que consegui abrir são de jogos (Steam, benchmarks de agente, ferramentas de VN), e por isso o mapa fala de jogos com muito mais confiança do que de literatura, cinema ou quadrinho — onde só tenho um caso (Kudan) e um contrato (WGA). O mapa é mais sobre narrativa *jogável* do que admite no título. (3) *Viés de ruptura*: a skill me obriga a produzir três disrupções e a recusar o incremental, o que cria pressão estrutural para inflar como ruptura o que pode ser melhoria. A Disrupção 2 é a que mais sofre disso: "tradução migra para o runtime" pode ser, honestamente, apenas localização mais barata com uma camada a menos.

## Seção 8 — O que a máquina errou

1. **Confirmação de fonte que a própria fonte não deu.** Afirmei, em rascunho, que "o USCO determinou que prompt não basta" citando `copyright.gov/ai/` como sustentação. Ao abrir a página, ela confirma apenas a existência e as datas das três partes do relatório (Parte 1 em 31/07/2024, Parte 2 em 29/01/2025, Parte 3 em pré-publicação em 09/05/2025) — a conclusão sobre prompts está no PDF do relatório, que não abri; o que li foram sumários de escritórios de advocacia (Jones Day, Crowell & Moring, Mintz) via busca. Corrigido: a afirmação permanece, mas a Seção 11 declara o modo de acesso e rebaixa a confiabilidade da atribuição direta.

2. **Número de mercado adotado sem abrir a fonte primária.** Usei "US$ 1,706 bi (2021) → US$ 2,354 bi (2025) → US$ 4,48 bi (2033)" para o mercado de localização de jogos. Esse número veio de um agregador comercial citado em resultado de busca, sem relatório identificável por trás. Mantive os dois primeiros valores no texto por serem consistentes com a direção da tese *contrária* à minha (o mercado cresce, não encolhe) — usar dado hostil à própria tese é o uso menos arriscado de um número frágil — e **descartei a projeção de 2033**, que era o pedaço puramente especulativo. Registrado como confiabilidade baixa.

3. **Estatística atraente descartada por não ter origem rastreável.** Um resultado de busca afirmava que "62% dos novos RPGs e jogos de aventura em 2026 têm NPCs com IA, contra 8% em 2024". Seria a estatística mais forte da Seção 3. Descartada: origem em blog agregador de ferramentas, sem metodologia, sem amostra, e com salto grande demais entre dois anos para um número não auditado. Não entrou no documento.

4. **Preenchimento de um fato que a página não continha.** Na primeira redação da Seção 3 descrevi o pipeline do MangoBox ("gera elenco, cenas, arte e conversa a partir de uma frase") como se viesse da página institucional. A página `mangobox.ai/about`, quando aberta, diz apenas "uma plataforma para criar e compartilhar histórias interativas", sem descrever pipeline, limites ou preço. O detalhamento vinha de material promocional de terceiros (itch.io, diretórios de ferramentas). Corrigido: o produto é citado como alegação de fornecedor, com confiabilidade baixa, e a descrição funcional foi atribuída ao material de divulgação, não à empresa.

5. **Extrapolação apresentada como constatação.** O rascunho da Seção 3 dizia que os títulos com IA "vão ultrapassar metade dos lançamentos em 2027-2028" em tom afirmativo. Isso é uma projeção do próprio censo, não um dado. Corrigido no texto ("com projeção de cruzar metade") e novamente na Seção 7, onde a projeção é atacada por só ter três pontos de série.

6. **Uma fonte que abri e não pude usar.** O artigo da PC Gamer sobre a curva de declarações na Steam foi aberto e retornou truncado — só o título. Não o usei como sustentação de nenhum número; os percentuais vêm do censo compilado por Sulka Haro, acessado por outra via. Consta na Seção 11 com essa ressalva, em vez de ser silenciosamente removido, porque uma fonte aberta e inútil também é resultado de levantamento.

## Seção 9 — Três cenários para 2031

**Provável.** Em 2031 a narrativa gerativa venceu na produção e na mediação, e empatou na obra. Declarar uso de IA é rotina em todas as lojas e ninguém mais usa o rótulo para escolher o que consumir — virou o aviso de cookies da mídia. A localização não morreu: encolheu como ofício de tradução e cresceu como ofício de supervisão, com equipes menores respondendo por volumes muito maiores, e o mercado brasileiro de dublagem sobrevive por força de contrato e de lei, não de custo. A obra executável existe, mas confinada: episódios curtos, novelas visuais de sessão única, experiências de plataforma. Ninguém resolveu a coerência de longo horizonte o bastante para que uma obra gerativa de dez horas seja confiável, e os estúdios grandes usam o pipeline gerativo com trilhos humanos tão apertados que o resultado volta a ser, na prática, obra autorada e fixa. A pergunta "quem é o autor" não foi respondida; foi contratualizada — cada plataforma, sindicato e prêmio tem sua regra, elas não conversam entre si, e a prática profissional é declarar o processo e torcer para que a declaração baste.

**Desejável.** Em 2031 a coautoria é uma prática nomeada, com vocabulário próprio e crédito verificável. A infraestrutura de proveniência funciona para texto e para artefato executável, e por isso "coautoria com IA" deixou de ser confissão e virou descrição: obras trazem um registro legível de onde o humano decidiu, e esse registro é o que se discute em sala de aula e na crítica, ao lado da obra. A tradução em runtime existe e é boa, mas veio acompanhada de responsabilidade — motor declarado, versionado, e uma camada de tradução assinada por humanos disponível para quem quiser, paga, e valorizada justamente por isso. A economia de escala não desabou porque plataformas aprenderam a custear a geração sem cobrar por leitor. E há convenção institucional para o objeto comum: obras gerativas publicam uma execução de referência, o que devolve à cultura a possibilidade de duas pessoas discutirem a mesma coisa sem abrir mão da adaptação. O ganho central deste cenário não é tecnológico: é que a profissão de escrever sobreviveu mudando de objeto — de produzir sentenças para projetar restrições — e essa mudança foi remunerada.

**Indesejável.** Em 2031 contar custa zero e ouvir custa tudo. O volume de obra narrativa tornou a descoberta impossível sem plataforma, e as plataformas cobram para ser encontrado, o que transferiu a renda da autoria para o acesso à atenção. A tradução acontece no dispositivo, gratuita e invisível, e ninguém responde por ela: obras chegam ao Brasil em português que nenhum humano escolheu, com sentido preservado e voz apagada, e a indústria de dublagem foi desmontada antes de qualquer regulação chegar — o PL 2338 saiu sem o capítulo de direitos intelectuais e o PL 1376 virou letra morta, porque não há empresa estrangeira a quem aplicá-lo quando a tradução é do leitor. A coerência de longo horizonte não foi resolvida, mas o mercado deixou de se importar: o público se acostumou a histórias que se contradizem, do mesmo jeito que se acostumou a recomendação algorítmica, e a contradição virou estética. E como cada pessoa leu uma execução diferente, a conversa cultural sobre obras se fragmentou: continua havendo público, deixou de haver plateia.

## Seção 10 — O experimento

**O que é.** *A mesma obra, duas turmas* — um teste de objeto comum. Monta-se uma única obra narrativa gerativa curta (15 a 20 minutos de leitura/jogo) numa ferramenta de novela visual por prompt, disponível hoje e sem custo relevante: o MangoBox serve, e Ren'Py + um LLM local serve igualmente se a turma preferir controlar o pipeline. A obra é definida por uma semente comum — mesma premissa, mesmo elenco, mesmo conflito, mesma extensão — e roda em duas configurações: metade da turma joga com adaptação ao leitor ligada (a história responde às escolhas e ao tom das respostas), metade joga com a adaptação desligada, numa execução fixa e idêntica para todos. Ninguém sabe em que metade está. Depois de jogar, as duas metades são misturadas em grupos de quatro e recebem uma tarefa banal: **discutir a obra e chegar a uma interpretação comum sobre o que o final significa**, em 20 minutos, por escrito.

**Pergunta sobre o futuro.** A pergunta de segunda ordem do tema, testável em escala de sala: *quando a história se adapta a cada leitor, em que ponto exatamente a conversa sobre ela quebra?* Não "duas pessoas podem discutir um livro que leram diferente" — isso é abstrato demais para responder. A versão operacional é: quanto de divergência a discussão absorve antes de virar duas conversas paralelas, e qual tipo de divergência quebra primeiro — fato (o que aconteceu), personagem (quem é essa pessoa) ou sentido (o que isso significa). A hipótese do mapa, derivada do NCP-Bench, é que divergência de **fato** quebra a conversa rapidamente enquanto divergência de **sentido** é absorvida sem esforço — porque o segundo tipo é o que a crítica literária sempre fez.

**Tecnologia emergente usada.** Geração de novela visual a partir de prompt, com adaptação ao leitor em runtime (MangoBox ou pipeline próprio). Opcionalmente, e é um bom acréscimo se houver tempo: uma terceira condição com tradução sobreposta em tempo real — a obra gerada em inglês, jogada em português via LunaTranslator ou equivalente — para testar se a mediação linguística em runtime adiciona um quarto tipo de divergência. Nenhuma das peças exige orçamento nem infraestrutura própria.

**Atividade da turma.** Quatro etapas, numa aula. (1) Jogar, 20 min, individualmente, com registro obrigatório de três fatos da história em uma frase cada, antes de qualquer conversa. (2) Discussão em grupos mistos, 20 min, com a tarefa de produzir uma interpretação comum. Um observador por grupo — papel rotativo, não um aluno passivo — anota o **minuto exato** em que aparece a primeira contradição factual e o que o grupo faz com ela: ignora, negocia, ou para. (3) Confronto, 15 min: revela-se quem estava em qual condição e comparam-se os registros da etapa 1. (4) Fechamento, 15 min: a turma tenta redigir, em conjunto, a regra mínima que uma plataforma teria de adotar para que a discussão coletiva de uma obra adaptativa continuasse possível — e verifica se essa regra não reintroduz, por outro nome, a obra fixa.

**Resultado de mudança de ideia.** O experimento tem de poder derrubar o mapa, e derruba assim: **se os grupos mistos chegarem a interpretação comum com a mesma facilidade dos grupos homogêneos**, e as contradições factuais forem negociadas sem travar a discussão, então o efeito e6 deste mapa ("some o objeto comum da conversa cultural") está errado — a cultura absorve divergência de execução do mesmo modo que sempre absorveu leituras divergentes, e a Disrupção 1 perde sua consequência mais grave, virando problema de catálogo e não de cultura. Nesse caso, o mapa precisa ser reescrito com a obra executável como mudança *administrativa* (preservação, direito, crédito), não como ruptura da experiência. Se, ao contrário, os grupos mistos gastarem a maior parte do tempo reconciliando fatos e não chegarem a interpretação comum, o ramo e6 se confirma — e o achado interessante passa a ser o inverso: quanto de trilho fixo uma obra adaptativa precisa manter para continuar discutível, que é uma especificação de design, entregável, e diretamente útil para quem projeta.

## Seção 11 — Fontes

Declaração de método de acesso: **[F]** = página aberta e lida na íntegra nesta sessão; **[B]** = conhecida por sumário de resultado de busca, não aberta. A distinção é registrada porque a Seção 8 depende dela.

1. **[F] NCP-Bench — "Can LLM Agents Stick to the Script? A Benchmark for Long-Horizon Consistency in Interactive Narratives"** — `https://arxiv.org/html/2608.08160` — Ma, Yan, Shi et al., 08/08/2026. Sustenta o gargalo central do mapa: 42% de sobrevivência a 20 turnos no melhor modelo, conflito de fato como falha dominante (40–68%), menos de 14% de compromissos cumpridos, 3,5% de 600 execuções chegando a 100 turnos sem conflito. Base da Disrupção 1 e do critério de falha na Seção 7. — **Confiabilidade: alta** (preprint, não revisado por pares; método e números explícitos).
2. **[F] NARRA-Gym for Evaluating Interactive Narrative Agents** — `https://arxiv.org/html/2605.08503` — Huang, Ma, Ye et al. (Notre Dame, LMU Munich, UCSB), 08/05/2026. Sustenta o segundo gargalo: falha em "personalização sensível à resistência", não em fluência; nove modelos, oito personas, 12 avaliadores humanos. — **Confiabilidade: alta** (preprint).
3. **[F] Censo de declarações de IA na Steam (Sulka Haro, 53.597 lançamentos), via análise da Cinevva** — `https://app.cinevva.com/news/2026-07-20-steam-ai-disclosure-study` — 20/07/2026. Sustenta toda a Seção 3 quantitativa: 10,9% (2024) → 19,9% (2025) → 30,8% (2026 até julho); receita dos títulos declarados em 10–27%; usos vencedores em voz (24% vs 8%) e localização (18% vs 6%). — **Confiabilidade: média** (análise secundária de censo de terceiro; o censo original não foi aberto).
4. **[F, truncada] PC Gamer — "more than half of new Steam games will have an AI-disclosure by 2027-2028"** — `https://www.pcgamer.com/gaming-industry/steam-week-in-review-take-cover-because-it-looks-like-more-than-half-of-steam-games-will-have-an-ai-disclosure-by-2027-2028/`. Aberta, retornou apenas a manchete. **Não sustenta nenhum número deste documento**; consta como corroboração independente da existência da projeção. — **Confiabilidade: baixa** (conteúdo inacessível).
5. **[F] U.S. Copyright Office — Copyright and Artificial Intelligence (página do programa)** — `https://www.copyright.gov/ai/`. Sustenta as datas: Parte 1 em 31/07/2024 (réplicas digitais), Parte 2 em 29/01/2025 (copyrightability), Parte 3 em pré-publicação em 09/05/2025 (treino). — **Confiabilidade: alta** (fonte primária).
6. **[B] USCO, Parte 2 — Copyrightability (conclusões)** — `https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf`, conhecida por sumários de Jones Day, Crowell & Moring e Mintz. Sustenta: prompt sozinho não funda autoria; protege-se seleção, coordenação, arranjo e modificação criativa; análise caso a caso. Base da Disrupção 3. — **Confiabilidade: média** (fonte primária existe e é pública; a leitura foi indireta).
7. **[F] WGA — Summary of the 2026 WGA MBA** — `https://www.wga.org/contracts/contracts/mba/summary-of-the-2026-wga-mba`. Sustenta: notificação escrita ao sindicato em caso de licenciamento de roteiro para treino de IA comercial, com direito a discutir remuneração; vigência a partir de 02/05/2026. — **Confiabilidade: alta** (fonte primária sindical).
8. **[B] WGA — Know Your Rights: Artificial Intelligence** — `https://www.wga.org/contracts/know-your-rights/artificial-intelligence`. Sustenta as proteções de 2023 preservadas em 2026: empresa não pode exigir uso de IA; dever de informar material gerado; IA generativa não é escritora e sua saída não é material literário. — **Confiabilidade: média** (fonte primária, lida por sumário).
9. **[F] Smithsonian Magazine — romance premiado escrito em parte por ChatGPT** — `https://www.smithsonianmag.com/smart-news/this-award-winning-japanese-novel-was-written-partly-by-chatgpt-180983641/`, 01/2024. Sustenta o caso Rie Kudan: *Tokyo-to Dojo-to*, Prêmio Akutagawa, ~5% de frases do ChatGPT sem edição, comitê chamando a obra de "praticamente impecável". — **Confiabilidade: alta** (veículo estabelecido; declaração pública da autora).
10. **[B] LunaTranslator (HIllya51) — repositório e documentação** — `https://github.com/HIllya51/LunaTranslator`. Sustenta a existência e o escopo da tradução sobreposta em runtime: hook de memória, OCR embutido, múltiplos motores incluindo LLM offline, TTS, segmentação de japonês. Base factual da Disrupção 2. — **Confiabilidade: alta** (código público e verificável, ainda que não auditado aqui).
11. **[F, pobre] MangoBox — página institucional** — `https://www.mangobox.ai/about`. Aberta: confirma apenas "plataforma para criar e compartilhar histórias interativas", seções CREATE/STORIES e contato. **Não** confirma pipeline, limites nem preço. O detalhamento funcional (até cinco personagens com personalidade e estilo de arte, geração de retratos e cenas) vem de material de divulgação de terceiros, inclusive `https://mangoboxai.itch.io`. — **Confiabilidade: baixa** (alegação de fornecedor).
12. **[B] Fable Studio / Showrunner — cobertura (Hollywood Reporter, CineD)** — `https://www.hollywoodreporter.com/business/business-news/fables-streamer-ai-generated-content-showcases-hollywood-fear-around-tech-1235911861/`. Sustenta a existência de plataforma comercial de episódio gerado e personalizado, com controle de diálogo, personagem e plano, e o anúncio de um longa "jogável". — **Confiabilidade: média** (cobertura de imprensa sobre anúncio de empresa; promessas de produto não verificadas).
13. **[B] Inworld AI — reposicionamento para infraestrutura de tempo real** — `https://inworld.ai/blog/new-ai-infrastructure-scaling-games-media-characters`. Sustenta o sinal fraco 5: saída do nicho de NPC para camada de runtime. — **Confiabilidade: média** (comunicação institucional da própria empresa).
14. **[B] Washington Post — efeito da IA sobre tradutores** — `https://www.washingtonpost.com/business/2025/09/26/ai-translation-jobs/`, 26/09/2025; com CEPR sobre queda de emprego de tradução onde a adoção é alta (`https://cepr.org/voxeu/columns/lost-translation-ais-impact-translators-and-foreign-language-skills`). Sustentam e3.2.1. Os valores de mercado de localização de jogos (US$ 1,706 bi em 2021 → US$ 2,354 bi em 2025) vêm de agregador comercial sem relatório identificável; a projeção para 2033 foi **descartada**. — **Confiabilidade: média** para o efeito sobre emprego; **baixa** para os valores de mercado.
15. **[B] Brasil — Dublagem Viva e PL 2338/2023** — manifesto em `https://dublagemviva.com.br/index.php/manifesto/`; Câmara dos Deputados em `https://www.camara.leg.br/noticias/1092791-segmento-de-dublagem-pede-protecao-legal-contra-uso-de-voz-gerada-por-inteligencia-artificial/`; tramitação em `https://www25.senado.leg.br/web/atividade/materias/-/materia/157233`. Sustentam a nota sobre o Brasil e e4.2.1: movimento criado em 2023 ligado à United Voice Artists; PL 1376/22 sobre dublagem e legendagem por profissionais residentes no país; PL 2338 aprovado no Senado em 10/12/2024, na Câmara desde março de 2025, com temor do setor cultural quanto à remoção do capítulo de direitos intelectuais. — **Confiabilidade: média** (fontes primárias existem; leitura indireta, e o estado de tramitação pode ter mudado após setembro de 2026).

## Seção 12 — Anexo: o levantamento bruto

### 12.1 Entrevista de recorte (Etapa 1) — perguntas e respostas recebidas

A skill exige bloqueio absoluto na Etapa 1 até receber as respostas. Nesta execução não havia interlocutor humano disponível; as respostas foram fornecidas integralmente pelo operador da rodada, antes do início, e estão transcritas abaixo sem edição. Nenhuma resposta foi presumida pela máquina.

```
- Tema: "Narrativa gerativa e coautoria" (tema 8 de 19 da disciplina; família "Simulação e mundos").
- Horizonte: 2031. Público: quem projeta mídia e interação. Recorte: global, com uma nota sobre o Brasil.
- Descartado de início: o que já é comum em produto de massa (a régua da disciplina); nenhuma outra exclusão.
- Disrupção suspeita: nenhuma — descubra. Viés: neutro. Ideias óbvias a excluir: as que servem para qualquer tema.
- O que me faria mudar de ideia: evidência de que a adoção já passou da maioria inicial (Rogers) ou de que a
  tecnologia não rompe nada (só melhora o que existe).
- Profundidade: três ordens. Modo: a partir de uma inovação/tema, não de um setor.
- Zona de interesse do autor: "Simulação e mundos". Login do autor: kvv. Skill usada: futurizacao-kvv.
- Busca na web: use WebSearch e WebFetch de verdade; só cite o que abriu. Não invente fontes.
- Não faça perguntas de volta. Não pare para pedir confirmação. Se algo não estiver definido, assuma e declare.
```

**Assunções declaradas** (itens não definidos pela entrevista, decididos pela máquina e registrados como manda a instrução):
- `recorte_geografico` gravado como `global` no frontmatter, por ser o enum previsto no modelo da skill; a nota sobre o Brasil entrou na Seção 2 e no ramo e4.2 da roda.
- `data` mantida em 2026-09-15 conforme o modelo da skill, embora a execução seja de 12/09/2026.
- `confianca: media` no frontmatter, coerente com o fato de os dois ramos mais especulativos do mapa (e2, e6) terem confiança baixa item a item.
- `publico` redigido como "Quem projeta mídia e interação", literal da entrevista, em vez de traduzido para um cargo.

**Sobre o critério de mudança de ideia declarado pelo operador** ("adoção já passou da maioria inicial, ou a tecnologia não rompe nada"): aplicado explicitamente na Etapa 2. A declaração de IA na Steam (30,8% dos lançamentos em 2026) está no limiar da maioria inicial de Rogers (34%) — por isso *declarar uso de IA* foi tratado como fenômeno em curso, não como disrupção, e entrou como efeito (e5.1) e não como raiz. Geração de imagem e tradução automática de string foram recusadas pelo segundo critério: melhoram o existente sem romper a lógica.

### 12.2 Etapa 2 — filtro anti-tecnologia madura: candidatos considerados e veredito

| Candidato | Veredito | Motivo |
|---|---|---|
| LLM escrevendo diálogo ramificado | **Recusado** | Acelera tarefa preexistente (Twine, Ink, YarnSpinner). Ramos continuam decididos antes da leitura. |
| Texto-para-imagem para arte de personagem/cenário | **Recusado** | Maduro e amplamente adotado; dado da Steam mostra ser o uso menos correlacionado com sucesso. Troca de fornecedor de asset. |
| Tradução automática de legenda e string | **Recusado como tal** | Indústria consolidada. Reformulado: a ruptura é o *lugar* da tradução (runtime do leitor) → virou Disrupção 2. |
| Síntese de voz gerativa (ChatTTS, Bark) | **Recusado isolado** | Produção barata de áudio. Só rompe acoplada ao runtime → absorvida pela Disrupção 2. |
| Script-to-video (Pika, Luma) | **Recusado aqui** | É ruptura, mas de *mídia visual* — fronteira explícita com o tema 12. Citado como tecnologia, não como raiz. |
| NPC que age no mundo | **Recusado aqui** | Fronteira com o tema 7, declarada na Seção 2. |
| Geração procedural de mundo/mapa | **Recusado aqui** | Fronteira com o tema 14 (regras, não histórias). |
| Declaração obrigatória de IA em plataforma | **Recusado como raiz** | Em curso e acelerando; pelo critério de Rogers do operador, é adoção, não ruptura. Virou efeito e5.1. |
| Obra como executável (semente + motor + política) | **Aceito → D1** | Rompe a identidade numérica da obra; não consumado (gargalo NCP-Bench). |
| Tradução no runtime do leitor | **Aceito → D2** | Rompe localização, língua de origem e cadeia de responsabilidade; não consumado (nicho, sem responsabilização). |
| Autoria provada por rastro de processo | **Aceito → D3** | Rompe o critério de prova da autoria; não consumado (proveniência de texto imatura). |

### 12.3 Rodadas de busca executadas (log)

```
WebSearch  "mangobox.ai AI visual novel generator"                                  → 10 links; itch.io, site oficial, diretórios
WebSearch  "US Copyright Office AI copyrightability report part 2 human authorship" → 10 links; copyright.gov + 6 escritórios
WebSearch  "Rie Kudan Akutagawa Prize ChatGPT Tokyo-to Dojo-to"                     → 9 links; Smithsonian, Vice, Euronews, Wikipedia
WebSearch  "LunaTranslator game real-time translation overlay OCR github"           → 8 links; repo HIllya51 + concorrentes
WebSearch  "Steam AI disclosure policy generative AI games percentage 2025 2026"    → 7 links; PC Gamer, Cinevva, agregadores
WebSearch  "game localization industry AI machine translation impact 2025"          → 6 links; WaPo, CEPR, Gridly, blogs de setor
WebSearch  "dublagem brasileira IA Dublagem Viva lei vozes sintéticas"              → 7 links; IDS, Câmara, manifesto oficial
WebSearch  "arXiv 2026 generative interactive narrative LLM evaluation coherence"   → 7 links; NARRA-Gym, NCP-Bench, Elsewise, 1001 Nights
WebSearch  "PL 2338 regulamentação IA Brasil status 2026 direitos autorais"         → 15 links (2 rodadas); Senado, Migalhas, Agência Pública
WebSearch  "Inworld AI Character.AI narrative games 2026 pivot runtime"             → 7 links; blog Inworld + agregadores
WebSearch  "WGA contract AI 2026 screenwriters generative AI provisions"            → 9 links; wga.org, Authors Guild, CDT
WebSearch  "Showrunner Fable Studio AI generated episodes 2026"                     → 7 links; Hollywood Reporter, CineD, Wikipedia
WebFetch   pcgamer.com/.../steam-week-in-review-...                                 → TRUNCADA, só manchete. Descartada como sustentação.
WebFetch   app.cinevva.com/news/2026-07-20-steam-ai-disclosure-study                → OK. Percentuais, censo Haro, dissociação receita.
WebFetch   arxiv.org/html/2608.08160                                                → OK. NCP-Bench, autores, números.
WebFetch   arxiv.org/html/2605.08503                                                → OK. NARRA-Gym, autores, achados.
WebFetch   copyright.gov/ai/                                                        → OK, mas só datas das três partes. Conclusão de mérito NÃO confirmada.
WebFetch   smithsonianmag.com/.../japanese-novel-chatgpt                            → OK. 5%, prêmio, data, fala do comitê.
WebFetch   wga.org/contracts/contracts/mba/summary-of-the-2026-wga-mba              → OK. Licenciamento p/ treino, notificação, vigência.
WebFetch   mangobox.ai/about                                                        → POBRE. Só "plataforma para criar e compartilhar histórias interativas".
```

### 12.4 Efeitos cortados da roda (não entraram no bloco YAML)

Cortados por serem genéricos — servem para qualquer tema de IA e, pelo critério da entrevista ("ideias óbvias a excluir: as que servem para qualquer tema"), poluem o mapa:

- "Aumenta a produtividade de equipes criativas."
- "Surgem novos empregos que ainda não sabemos nomear."
- "Crescem preocupações éticas com viés e representatividade."
- "Escolas precisam repensar o ensino."
- "Há concentração de poder em poucas empresas de modelo."
- "A desinformação aumenta."

Cortados por pertencerem a temas vizinhos, com fronteira declarada na Seção 2:

- "NPCs lembram do jogador entre sessões e formam relações" → tema 7.
- "Vídeo gerado atinge qualidade indistinguível e a fotografia perde valor probatório" → tema 12.
- "Mundos gerados proceduralmente ganham história emergente sem autor" → tema 14.

Cortados por redundância com efeito já presente:

- "Fóruns de ficção interativa se dividem entre puristas e adeptos" → absorvido por e6.2.
- "Editoras criam selos de literatura assistida" → absorvido por e5.2.1.
- "Tradutores viram revisores de saída de máquina" → é a mesma proposição de e3.2, com outras palavras.

### 12.5 Rodada descartada do desenho das disrupções

A primeira formulação das três raízes foi: (1) geração de obra completa a partir de prompt; (2) adaptação da obra ao leitor; (3) tradução instantânea. Descartada inteira por falha de método: (1) e (2) são a mesma ruptura vista de dois ângulos — se a obra é gerada na execução, ela é adaptável por construção, e separá-las inflaria artificialmente o mapa para chegar ao número três exigido pela skill. Além disso, nenhuma das três tratava a pergunta que o próprio tema coloca no centro ("quem é o autor"), que ficaria como efeito de segunda ordem de uma raiz que não a explica. A segunda formulação, adotada, organiza as três por **aquilo que cada uma destrói**: a identidade da obra (D1), a língua da obra (D2), a prova da autoria (D3) — três objetos distintos, cada um com seu próprio gargalo verificável e seu próprio cenário de falha na Seção 7.

### 12.6 Números considerados e não usados

- "62% dos novos RPGs e jogos de aventura em 2026 têm NPCs com IA, contra 8% em 2024" — descartado (blog agregador, sem metodologia nem amostra; salto implausível sem auditoria).
- "AI translation usage exploded by 533% last year" — descartado (sem base, sem definição do que é "uso", sem denominador).
- Projeção "US$ 4,48 bi até 2033" para localização de jogos — descartada (projeção de agregador comercial; os valores históricos de 2021 e 2025 foram mantidos com ressalva por serem hostis à tese do documento).
- "Inworld levantou US$ 125 milhões a uma avaliação de US$ 500 milhões" — não usado no corpo do texto; número plausível e amplamente repetido, mas obtido só por resultado de busca, sem fonte primária aberta, e não sustenta nenhuma afirmação necessária ao mapa.
