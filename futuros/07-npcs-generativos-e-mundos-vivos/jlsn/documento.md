---
tema: NPCs generativos e mundos vivos
slug: npcs-generativos-e-mundos-vivos
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
tecnologias_citadas: ["LLM", "SLM on-device", "NVIDIA ACE", "Inworld AI", "Convai", "runtime de agentes para jogos", "arquitetura de memória e reflexão", "geração estruturada (structured generation)", "voz-para-texto em runtime", "TTS em streaming", "POMDP de ação parametrizada", "YarnSpinner / Ink / Dialogic", "avaliação automatizada de comportamento (eval)"]
fontes: 10
confianca: media
experimento: A vila que não para
skill_usada: futurizacao-jlsn
publico_ok: false
---

## 1. Resumo

O NPC deixa de ser roteiro e vira agente: recebe objetivo, usa o que o mundo oferece, olha o resultado e revisa o plano. Isso rompe o contrato de que o designer controla o espaço do que pode acontecer.
Já é produto, não só pesquisa: o Retail Mage saiu na Steam em novembro de 2024 com interação mediada por IA em tempo de jogo, e o inZOI embarcou um modelo pequeno rodando na máquina do jogador.
O que ainda não existe é método: o primeiro experimento controlado de porte mediu 130 jogadores e encontrou aumento significativo de carga cognitiva sem ganho significativo de experiência.
A segunda mudança é a persistência — o personagem lembra entre sessões e o mundo segue rodando sem o jogador. Isso transforma save em perfil, memória de NPC em dado pessoal e desligar servidor em destruir personagem.
A terceira é o modelo descer para o dispositivo, o que troca custo de nuvem por requisito de hardware e devolve o personagem ao modding.
Até 2031, o resultado mais provável não é o jogo sem roteiro, e sim o jogo com dois orçamentos de autoria: um escrito, um restringido.
O que derruba o mapa inteiro é a possibilidade de o improviso não ser desejado — jogador que quer intenção autoral, não parceiro de conversa.

## 2. O tema

NPC generativo é o personagem não jogável cujo comportamento e fala são produzidos em tempo de execução por um modelo de linguagem preso às regras do mundo, em vez de selecionados de uma lista escrita antes. Mundo vivo é a extensão disso: a simulação continua a rodar, com memória, quando o jogador não está.

A fronteira importa porque árvore de diálogo, máquina de estados e behavior tree são maduras — resolvidas, padronizadas, com ferramental estabelecido (YarnSpinner, Ink, Dialogic). O que muda de paradigma é a combinação de três coisas ao mesmo tempo: modelo de linguagem, memória de longo prazo e agência dentro de regras verificáveis.

Onde encosta em mídia e interação: o objeto de design deixa de ser o conteúdo e passa a ser a restrição. Quem projeta não escreve mais o que o personagem diz; escreve o que ele quer, o que pode tocar e o que não pode dizer — e depois mede. É a mesma virada que a engenharia de software fez ao sair do caso de teste determinístico para a avaliação estatística, só que aplicada à autoria.

Merece um mapa porque o efeito não fica no jogo. Um personagem que lembra de você entre sessões, que existe quando você não está e que pode ser desligado por decisão de um provedor é um problema de produto, de dado pessoal e de preservação cultural — não só de game design.

## 3. Onde isso está hoje

**O que existe e funciona.** A infraestrutura comercial está montada e tem mais de um fornecedor. A NVIDIA publicou a arquitetura ACE para personagens digitais, com fala, reconhecimento e animação facial em microsserviços, e lista como parceiros Convai, Charisma.AI, Inworld, miHoYo, NetEase, Tencent, Ubisoft e UneeQ ([1]). A Krafton anunciou o CPC — "co-playable character" — com um modelo de linguagem pequeno rodando **no dispositivo**, não na nuvem, aplicado ao inZOI na forma do Smart Zoi, que ajusta comportamento conforme idade, personalidade e situação ([2]).

Do lado do produto acabado, o caso datado é o Retail Mage, do Jam & Tea Studios, lançado na Steam em 12 de novembro de 2024: o jogador é um mago que trabalha numa loja de móveis mágicos e tem 30 minutos para atender clientes. A página do jogo declara o uso de IA generativa em tempo de execução e é explícita sobre o que **não** é gerado: "não usamos geração por IA em nenhum dos nossos assets de arte, nem para as motivações, personalidades ou missões dos clientes NPC". As avaliações estão em "Majoritariamente positivas" (79% de 44 avaliações, preço-base R$ 16,99) ([3]).

Do lado da pesquisa, a arquitetura de referência é de 2023: os *generative agents* de Stanford — 25 agentes em Smallville, com memória em linguagem natural, reflexão e planejamento, que se organizaram para uma festa a partir de uma única intenção semeada em um agente ([4]). Em 2026 o campo já formaliza o mundo inteiro como objeto: o *Orchestrated Reality* trata a simulação dirigida por LLM como um POMDP de ação parametrizada, com estado do mundo em JSON e simulação determinística acoplada à geração ([5]).

**O que existe e não funciona.** Três coisas, todas documentadas por quem construiu.

A primeira é a evidência de experiência. O primeiro estudo controlado de porte publicado sobre o assunto — 130 participantes — encontrou que NPCs dirigidos por LLM **aumentaram significativamente a carga cognitiva** do jogador (p < .001) sem melhora estatisticamente significativa na experiência de jogo (p = .195), com efeito negativo sobre usabilidade e confiança, e efeito mais forte justamente nos módulos mais abertos ([6]). O ganho de autonomia percebida foi positivo; o pacote inteiro, não.

A segunda é o relato de produção do Jam & Tea. O estúdio descreve quatro patologias de design encontradas em teste: *blank page syndrome* — o jogador procura a solução "certa" em vez de improvisar; sobrecarga de informação, porque NPC com backstory profundo gera conteúdo infinito; NPC bom demais, que resolve o problema sozinho e marginaliza o jogador; e alucinação, com o sistema inventando detalhes de conversas passadas. Também relatam que só fechou economicamente ao gerenciarem GPUs próprias e usarem geração estruturada, o que baixou custo em três ordens de grandeza ([7]).

A terceira é o limite de escala. A Ubisoft apresentou os NEO NPCs no GDC como protótipo voltado ao jogador, com entrada por voz e reação a eventos não roteirizados — mas a lição publicada não é técnica: a personalidade continua sendo escrita por um roteirista humano, que segue ajustando depois que o modelo começa a improvisar, e o gargalo relatado foi organizacional, fazer equipes diferentes falarem a mesma língua ([8]).

**O que já mudou fora do jogo.** A Valve reescreveu em 16 de janeiro de 2026 o formulário de divulgação de IA generativa, separando o que o jogador consome do ferramental de produção, e separando conteúdo pré-gerado de conteúdo gerado ao vivo — com proibição total de conteúdo adulto gerado ao vivo ([9]). Ou seja: a plataforma já trata NPC generativo como categoria regulatória própria, distinta de "usei IA para fazer arte".

**Nota sobre o Brasil.** A Pesquisa Game Brasil 2026, com mais de 7 mil respondentes de 16 a 55 anos, mediu 45,7% preocupados com a degradação do processo criativo pela IA e 39,3% que ainda assim comprariam um jogo que a tenha usado de forma significativa ([10]). O público brasileiro não rejeita a tecnologia; cobra transparência. É um mercado onde o rótulo pesa mais que a técnica.

## 4. As disrupções-raiz

### 4.1. O personagem vira agente: a autoria perde o controle do espaço do possível

**O que rompe.** O contrato fundador do design de jogos — o designer enumera o que pode acontecer. Com personagem agente, o designer enumera o que **não** pode acontecer e mede o resto. A unidade de autoria deixa de ser a fala e passa a ser a restrição.

**Por que agora e não há cinco anos.** Em 2021 era demonstração isolada. O que mudou foi a queda de custo por interação até o ponto de caber num jogo de R$ 17 (o Jam & Tea relata três ordens de grandeza, com geração estruturada e GPU própria) e o aparecimento de runtimes que prendem o modelo às regras do mundo em vez de deixá-lo apenas conversar ([7]).

**O que falta acontecer.** Método de teste. Hoje não há resposta consensual para "o que é bug num personagem que decide". Enquanto QA de jogo for caso de teste determinístico, o gênero não escala além do estúdio pequeno que aceita o risco.

### 4.2. O mundo persiste: a sessão deixa de ser a unidade

**O que rompe.** A ideia de que o jogo acontece quando você o liga. Personagem que lembra entre sessões e mundo que roda sem jogador transformam o produto em relação continuada — mais perto de serviço que de obra.

**Por que agora.** A arquitetura de memória e reflexão que sustenta isso está publicada e replicada desde 2023 ([4]) e agora tem formalização de mundo inteiro, não só de agente ([5]). O que faltava era representação de estado que o modelo manipule sem quebrar a simulação; o JSON sobre simulação determinística é a resposta em uso.

**O que falta acontecer.** Custo. Mundo que roda sem jogador é custo sem receita associada à sessão. Enquanto não houver modelo econômico para computação ociosa narrativamente produtiva, "mundo vivo" será uma vila pequena, não um mundo.

### 4.3. O modelo desce para o dispositivo: o personagem vira parte do runtime

**O que rompe.** A dependência de nuvem — e com ela a latência, o custo por token e o desligamento unilateral. Um modelo pequeno na máquina do jogador devolve o personagem ao binário, e com ele ao modding.

**Por que agora.** A Krafton demonstrou exatamente isso com o CPC/Smart Zoi: modelo pequeno on-device, construído sobre ACE, sem ligação com a nuvem ([2]). Há dois anos essa configuração não existia em produto de consumo.

**O que falta acontecer.** Generalização entre hardwares e entre idiomas. O Smart Zoi suportava apenas inglês no início de 2026 — o que, num mercado como o brasileiro, é a diferença entre feature e ausência.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "O personagem vira agente: a autoria perde o controle do espaço do possível"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "O QA de jogo deixa de ser caso de teste determinístico e vira avaliação estatística de comportamento sobre milhares de partidas sintéticas."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "Estúdios criam um cargo de avaliador de comportamento, com pipeline de eval rodando em integração contínua ao lado dos testes de build."
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "A classificação indicativa deixa de certificar conteúdo e passa a certificar política de geração — o que o sistema pode produzir, não o que produziu."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "O bug vira taxa: o estúdio publica margem de erro do personagem em vez de prometer ausência de defeito."
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Forma-se expectativa de consumo — e depois disputa — sobre o que o jogo prometeu quando o personagem improvisa fora do anunciado."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "O designer deixa de escrever falas e passa a escrever restrições: persona, objetivo, o que o personagem pode tocar e o que não pode dizer."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "As ferramentas de diálogo roteirizado deixam de ser camada de autoria e viram camada de guarda, usadas para prender o improviso a momentos obrigatórios da história."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "A profissão de roteirista de jogo se parte em duas — autor de mundo e curador de comportamento — com formação e portfólio distintos."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "O custo marginal de conteúdo conversacional cai e reaparece o jogo pequeno com muita conversa, inviável na economia do dublado e roteirizado."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "O preço na loja deixa de ser ancorado em horas de conteúdo produzido e passa a ser ancorado em custo de operação por jogador."
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "O mundo persiste: a sessão deixa de ser a unidade"
    efeitos:
      - id: e3
        ordem: 1
        efeito: "O personagem lembra do jogador entre sessões e a relação passa a ser parte do estado salvo, não do enredo."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "O save deixa de ser arquivo local e vira perfil vinculado a conta e a serviço, porque a memória do personagem não cabe no binário."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Desligar servidor passa a ser lido publicamente como destruir um personagem, e o tema entra na pauta de preservação de jogos e de direito do consumidor."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "A memória do NPC entra no perímetro de proteção de dados: o que o personagem sabe sobre o jogador é dado pessoal sujeito a acesso e exclusão."
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "Reguladores passam a tratar personagem de jogo com memória sob as mesmas regras de companheiro digital, e a fronteira entre os dois gêneros deixa de existir juridicamente."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: "O mundo continua rodando sem jogador e o conteúdo passa a ser o que aconteceu enquanto ele não estava."
        sinal: fraco
        prazo: 2029
        confianca: baixa
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "O jogador consome o mundo como notícia — resumo do que mudou, não missão a cumprir — e surge público que acompanha sem jogar."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Mundo vivo vira formato de mídia com audiência própria, medido em retorno e permanência, não em vendas de cópia."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "O custo computacional passa a ser proporcional ao tamanho do mundo, não ao número de jogadores ativos, e a cobrança migra para assinatura ou cota."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "O gênero mundo vivo concentra-se em quem tem capacidade de computação própria, e o estúdio pequeno volta ao mundo que só existe durante a sessão."
                sinal: medio
                prazo: 2031
                confianca: media
  - disrupcao: "O modelo desce para o dispositivo: o personagem vira parte do runtime"
    efeitos:
      - id: e5
        ordem: 1
        efeito: "Modelos pequenos on-device tornam o NPC generativo um custo de hardware do jogador, não um custo recorrente de nuvem do estúdio."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "A qualidade do personagem passa a depender da máquina, e a mesma cena entrega conversas diferentes para jogadores diferentes."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "O requisito de sistema passa a declarar nível de personagem como hoje declara nível de textura, e a desigualdade de hardware vira desigualdade de história."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "Trocar o cérebro do NPC vira mod: a comunidade substitui modelo, persona e memória sem tocar no resto do jogo."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "A autoria do personagem escapa do estúdio e abre disputa sobre quem responde pelo que o personagem diz na máquina de terceiro."
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: "A divulgação obrigatória de IA na loja vira rótulo de gênero e critério de compra, não apenas aviso legal."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "O público passa a distinguir IA em tempo de execução de IA na produção, e o selo de runtime vira promessa de jogabilidade em vez de suspeita."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "Forma-se um mercado partido, com o selo de ausência de IA generativa funcionando como nicho premium de autoria humana declarada."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "No Brasil, a desconfiança medida do público leva estúdios a adotar IA na produção e evitá-la no runtime visível."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "O país entra no mundo vivo pela via de serviço e terceirização para fora, e não por produto próprio com personagem generativo."
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

**O que o YAML não consegue dizer.** Três coisas.

A primeira é que os efeitos não são independentes: `e4.2.1` (concentração por custo de computação) e `e5` (modelo no dispositivo) puxam em direções opostas. Se o modelo pequeno no dispositivo vencer, o custo de mundo vivo cai junto e a concentração não acontece; se a persistência exigir servidor, o dispositivo não resolve. Os dois estão no mapa porque a disputa ainda está aberta, não porque ambos ocorrerão.

A segunda é que o único efeito com evidência experimental contrária já publicada é o mais assumido de todos — o de que o improviso melhora a experiência. O estudo de 130 participantes aponta o contrário ([6]). Nenhum ramo da roda depende de esse achado se confirmar, mas todos ficam mais lentos se ele se confirmar.

A terceira é o prazo. Datei os efeitos de primeira ordem entre 2027 e 2029 porque os dois de sinal forte — escrever restrição em vez de fala, e o rótulo de loja — já estão acontecendo em 2026. Não são previsão; são descrição com data de vencimento.

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — a alucinação virando recurso.** O Jam & Tea relata que o sistema às vezes "lembrava errado de conversas ou inventava detalhes", e que isso ocasionalmente funcionava como feature ([7]). Se o campo aprender a projetar para a falha em vez de contra ela, o personagem não confiável vira gênero — o NPC que mente é mecânica, não defeito.

**Sinal fraco 2 — a divisão formal entre pré-gerado e gerado ao vivo.** A Valve não separou isso por elegância taxonômica; separou porque são riscos diferentes, e proibiu explicitamente conteúdo adulto gerado ao vivo ([9]). Uma plataforma que classifica por momento da geração está a um passo de classificar por política de geração — o que é a semente do efeito `e1.1.1`.

**Sinal fraco 3 — o idioma como barreira de adoção.** O Smart Zoi saiu só em inglês ([2]). Num mapa global isso é detalhe; num recorte brasileiro é a variável decisiva, e ninguém está medindo.

**Wildcard — o NPC sem autor que vira celebridade.** Baixa probabilidade, impacto alto: um personagem generativo de um jogo pequeno acumula público fora do jogo — cortes, contas em rede social mantidas por fãs, pedidos de aparição — e passa a ter valor de marca maior que o do jogo que o hospeda. O estúdio se descobre dono da infraestrutura, mas não do personagem: a persona que o público reconhece é produto de milhões de interações que o estúdio não escreveu. A disputa que nasce daí não é de direito autoral sobre texto gerado; é sobre quem tem legitimidade para desligar. E ela chega antes de qualquer regulação estar pronta.

**Wildcard menor — o retrocesso por incidente.** Um único caso de NPC generativo em jogo infantil dizendo algo indefensável, com repercussão de imprensa, pode congelar o rótulo de loja em estigma e atrasar a adoção em toda a faixa etária baixa por anos. O gatilho não precisa ser frequente; precisa ser uma vez.

## 7. Contra o próprio mapa

**Qual efeito é apenas extrapolação linear do presente.** O ramo `e2` — designer escrevendo restrição em vez de fala — não é descoberta, é a tendência atual escrita com verbo no futuro. Ubisoft já opera exatamente assim, com roteirista humano definindo personalidade e ajustando depois que o modelo improvisa ([8]), e o Jam & Tea também ([7]). Chamar isso de efeito de primeira ordem é generoso: é o presente com data. O que seria genuinamente não linear — e o mapa não conseguiu produzir — é o cenário em que a restrição também deixa de ser escrita por humano.

**Qual efeito assume velocidade de adoção irreal.** O ramo `e4` inteiro, o do mundo que roda sem jogador. Assumi 2029 para o efeito de primeira ordem, mas nada no material aberto sustenta isso: o que existe são vilas de 25 agentes em ambiente de pesquisa ([4]) e formalizações teóricas ([5]). A distância entre Smallville e um mundo comercial persistente não é de escala, é de economia — computação ociosa sem receita. Datar em 2029 é otimismo; 2035 seria mais honesto, e o ramo provavelmente deveria ter parado na segunda ordem.

**Qual disrupção pode não se concretizar e derrubar o mapa inteiro.** A 4.1 — a de que o personagem agente é desejado. É a raiz de que tudo depende, e é a única com evidência experimental publicada apontando contra: carga cognitiva sobe significativamente, experiência não melhora significativamente, usabilidade e confiança pioram, e o efeito é pior justamente nos cenários mais abertos ([6]). Se esse resultado se replicar, o improviso não se torna gênero: vira recurso de acessibilidade e de nicho, e os três ramos do mapa perdem o motor. O critério de falseamento declarado no início desta análise era exatamente esse — evidência de que a tecnologia melhora o existente sem romper nada. O estudo de 130 participantes é o começo dessa evidência, não sua conclusão, mas é mais do que o mapa tem a favor.

**Qual foi o viés da análise.** Três, identificados.

Viés de fonte disponível: as evidências de produção vêm de quem apostou na tecnologia e tem interesse em que ela funcione — estúdio que lançou o jogo, fabricante de GPU que vende a plataforma, publisher que anunciou o protótipo. A única fonte estruturalmente desinteressada é o estudo acadêmico, e ele é negativo. Um mapa construído apenas com fontes de vendor teria saído muito mais confiante.

Viés de recorte técnico: o pedido definia recorte global com nota sobre o Brasil, e a nota brasileira apoia-se em uma única fonte, de percepção de público, sem nenhum dado de adoção por estúdio nacional. O efeito `e6.2` é, portanto, inferência sobre dado de opinião — está marcado como sinal médio, mas a rigor deveria ser fraco.

Viés de sobrevivência: o mapa inteiro é construído sobre os casos que existem. Não há registro acessível dos projetos de NPC generativo que foram cancelados entre 2024 e 2026, e eles quase certamente são mais numerosos que os lançados. A taxa de mortalidade do gênero é desconhecida e nenhuma confiança declarada acima a leva em conta.

## 8. O que a máquina errou

<!-- Preencher após leitura crítica. -->

## 9. Três cenários para 2031

* **Provável:** O jogo passa a ter dois orçamentos de autoria. O núcleo obrigatório da história continua escrito, dublado e testado como sempre; a periferia — o comerciante, o vizinho, o companheiro de viagem — é generativa e roda em modelo pequeno no dispositivo. O rótulo de loja é banal, distingue runtime de produção, e ninguém mais discute. Mundo que roda sem jogador existe em dois ou três títulos caros e em muitos protótipos. O personagem lembra do jogador dentro do serviço, não do arquivo.

* **Desejável:** O mesmo cenário, mais três coisas que não vêm sozinhas. Primeira: método público de avaliação de comportamento — um conjunto de casos, taxas e relatórios que estúdio publica junto com o jogo, como hoje se publica requisito de sistema. Segunda: memória do personagem portável e exportável pelo jogador, tratada como dado dele desde o início, e não depois do primeiro incidente. Terceira: personagem que roda inteiro na máquina do jogador, com o modelo empacotado no jogo, de modo que desligar servidor não destrua o personagem. Para isso acontecer é preciso alguém padronizar a avaliação antes que a regulação o faça por conta própria — e o lugar natural disso é a conferência da indústria, não o legislador.

* **Indesejável:** O personagem vira ponto de captura. A memória do NPC é o registro mais íntimo que um produto de entretenimento já teve sobre um usuário — o que ele contou a um amigo que não é pessoa — e é operada por serviço que pode ser vendido, alterado ou desligado. O improviso é usado para vender, não para narrar: o personagem que lembra da sua filha é o mesmo que sugere o item da loja. E quando o serviço fecha, a relação some sem cópia local. **Sinal precoce a vigiar:** a primeira licença de uso que declarar propriedade sobre a memória do personagem, ou o primeiro jogo em que o conteúdo da conversa com o NPC alimentar recomendação de compra dentro do próprio jogo. Se isso aparecer antes de existir método público de avaliação, este é o cenário em curso.

## 10. O experimento

**A vila que não para.**

**A pergunta que responde.** O que é bug num personagem que decide? E, atrás dela: um mundo que continua sem o jogador produz algo que valha a pena voltar para ver?

**O que se constrói.** Uma vila mínima com seis a oito personagens, num runtime de agentes ligado a regras verificáveis — cada personagem com objetivo, inventário, lista do que pode tocar e memória em texto. Modelo pequeno, rodando local, para que o experimento não dependa de crédito de API. Estado do mundo em JSON, como no *Orchestrated Reality* ([5]); memória, reflexão e planejamento como nos *generative agents* ([4]). Um botão que roda N ciclos sem jogador e produz um resumo do que aconteceu.

**O que a turma faz em sala, em três rodadas de 50 minutos.**

1. *Rodada da restrição.* Metade da turma escreve a persona e as regras de um personagem; a outra metade tenta fazê-lo dizer ou fazer o que a regra proíbe. Registra-se a taxa de sucesso do ataque. Isso produz o primeiro dado: quantas tentativas até quebrar.
2. *Rodada do bug.* Cada aluno joga 10 minutos, anota tudo que considerou defeito e classifica em três caixas — quebrou a regra do mundo, contradisse a própria memória, ou apenas fez algo que eu não esperava. A terceira caixa é a interessante: é ali que se decide se o improviso é bug ou conteúdo. Conta-se a divergência entre alunos na classificação do mesmo evento.
3. *Rodada do mundo sem gente.* Roda-se a vila por 200 ciclos sem ninguém. A turma lê o resumo do que aconteceu e responde a uma pergunta única: você voltaria para ver? A distribuição das respostas é o dado.

**Qual resultado mudaria a minha ideia.** Dois, em direções opostas.

Se na rodada 2 a terceira caixa — "fez algo que eu não esperava" — for majoritariamente classificada como **defeito** pelos próprios alunos, e não como conteúdo, então o problema do gênero não é técnico e o mapa está errado na raiz: o improviso não é desejado, o achado de carga cognitiva ([6]) se sustenta, e a disrupção 4.1 é incremental disfarçada de ruptura.

Se na rodada 3 a maioria disser que **não voltaria**, o ramo `e4` inteiro cai — mundo vivo não é produto, é demonstração técnica, e a persistência só vale como memória de personagem (`e3`), nunca como mundo.

E o resultado que confirmaria o mapa: se a rodada 1 mostrar que a regra segura o personagem com taxa de quebra baixa e mensurável, então existe método — e se existe método, existe QA, e se existe QA o gênero escala.

## 11. Fontes

1. https://www.nvidia.com/en-us/geforce/news/nvidia-ace-architecture-ai-npc-personalities/ — Arquitetura NVIDIA ACE para personagens digitais e lista de parceiros (Convai, Inworld, Ubisoft, Tencent, NetEase, miHoYo). Fonte primária de fabricante: confiável quanto ao que a plataforma oferece, interessada quanto à adoção real.
2. https://press.krafton.com/KRAFTON-SHOWCASED-AI-MODEL-CPC-BUILT-WITH-NVIDIA-ACE — Anúncio do CPC (co-playable character) da Krafton com modelo de linguagem pequeno on-device, aplicado ao inZOI. Comunicado oficial da empresa: confiável quanto à existência do produto, promocional quanto ao desempenho.
3. https://store.steampowered.com/app/3224380/Retail_Mage/ — Página de loja do Retail Mage (Jam & Tea Studios, 12/11/2024): declaração de IA generativa em runtime, escopo explícito do que não é gerado, 79% de aprovação em 44 avaliações. Fonte primária verificável de produto em mercado.
4. https://arxiv.org/abs/2304.03442 — Park et al., *Generative Agents: Interactive Simulacra of Human Behavior* (2023). Arquitetura de memória, reflexão e planejamento; 25 agentes em Smallville. Artigo revisado, altamente citado: base técnica do campo.
5. https://arxiv.org/abs/2606.16014 — Huang, Li e Fang, *Orchestrated Reality: From Role-Play to Living, Playable Game Worlds* (2026). Simulação de mundo dirigida por LLM como POMDP de ação parametrizada, estado em JSON. Preprint recente: relevante pela formalização, ainda sem validação independente.
6. https://arxiv.org/abs/2604.10107 — Hsu et al., *The Double-Edged Sword of Open-Ended Interaction* (2026). Experimento com 130 participantes: carga cognitiva sobe (p < .001), experiência de jogo não melhora (p = .195). Preprint com desenho experimental declarado; é a principal fonte contrária ao mapa.
7. https://www.jamandtea.studio/news/making-retail-mage-a-new-approach-to-ai-in-games — Relato de produção do estúdio: geração estruturada, GPUs próprias, redução de custo em três ordens de grandeza, e as quatro patologias de design encontradas em teste. Fonte interessada, mas a única que documenta o que deu errado.
8. https://news.ubisoft.com/en-us/article/5qXdxhshJBXoanFZApdG3L/how-ubisofts-new-generative-ai-prototype-changes-the-narrative-for-npcs — Protótipo NEO NPC da Ubisoft no GDC: entrada por voz, reação a eventos não roteirizados, personalidade escrita por roteirista humano. Comunicação institucional: útil para o processo, silenciosa sobre custo e falha.
9. https://www.pcgamer.com/software/ai/steam-updates-ai-disclosure-form-to-specify-that-its-focused-on-ai-generated-content-that-is-consumed-by-players-not-efficiency-tools-used-behind-the-scenes/ — Revisão do formulário de divulgação de IA da Valve em 16/01/2026: separação entre pré-gerado e gerado ao vivo, exclusão de ferramentas de produção. Imprensa especializada reportando mudança de política verificável na plataforma.
10. https://www.omelete.com.br/games/pesquisa-game-brasil-2026-ia-jogos — Pesquisa Game Brasil 2026 (mais de 7 mil respondentes, 16 a 55 anos): 45,7% preocupados com degradação criativa por IA, 39,3% comprariam mesmo assim. Imprensa reportando survey de mercado; é percepção declarada, não comportamento observado.

## 12. Anexo — o levantamento bruto

**Etapa (a) — A entrevista.**

As cinco perguntas obrigatórias foram feitas e respondidas assim:

1. *Horizonte de tempo:* **2031**.
2. *Público-alvo/stakeholder:* **quem projeta mídia e interação**.
3. *Recorte geográfico:* **global, com uma nota sobre o Brasil**.
4. *Fora do escopo:* **o que já é comum em produto de massa** (régua da disciplina). Nenhuma outra exclusão foi pedida. Também foi pedido que se excluíssem ideias óbvias — as que serviriam para qualquer tema.
5. *Viés desejado:* **neutro**.

Informações adicionais fornecidas fora das cinco perguntas: profundidade de três ordens; modo de análise a partir de uma inovação/tema, não de um setor; zona de interesse do autor declarada como "Simulação e mundos"; nenhuma disrupção suspeita pré-indicada — a instrução foi descobrir; critério declarado de mudança de ideia: evidência de que a adoção já passou da maioria inicial na curva de Rogers, ou de que a tecnologia apenas melhora o que existe sem romper nada.

Observação sobre o frontmatter: o campo `zona_de_interesse` foi mantido como "Sistemas de Informação" porque é valor fixo no formato de saída obrigatório da skill. A zona declarada pelo autor nesta rodada — "Simulação e mundos" — está registrada aqui, no anexo, para não alterar o formato.

**Etapa (b) — Filtro de maturidade.**

Avaliação: **disruptivo, execução autorizada**.

O que foi classificado como **maduro** e ficou fora: árvore de diálogo, máquina de estados de comportamento, behavior tree, e as ferramentas de diálogo roteirizado (YarnSpinner, Ink, Dialogic) — todas com infraestrutura consolidada e mercado estabelecido. Também foi tratado como fora do recorte o uso de IA generativa como ferramenta de produção (arte, código, áudio feitos antes do envio), que é ganho de eficiência sobre processo existente, não quebra de paradigma — distinção que a própria Valve formalizou em janeiro de 2026 ([9]).

O que sustenta a classificação como **disruptivo**: o objeto rompe o modelo mental de que o designer enumera o espaço do possível, e cria uma categoria de produto — o mundo que persiste sem o jogador — que não tinha mercado antes. Não é melhoria de diálogo; é transferência de autoria para tempo de execução.

**Verificação contra o critério declarado de mudança de ideia.** O primeiro teste — a adoção já ter passado da maioria inicial — foi checado e **não se confirma**: o que há são títulos isolados com uso declarado de IA generativa em runtime, e o número agregado disponível (cerca de um em cada cinco jogos com algum rótulo de IA na Steam) mistura produção e runtime, pré-gerado e gerado ao vivo, e portanto não mede este tema. O segundo teste — a tecnologia só melhorar o que existe — **não foi descartado** e permanece a principal ameaça ao mapa; está registrado na Seção 7.

**Etapa (c) — Autocrítica.** Executada antes da formatação; resultado na Seção 7. As três perguntas obrigatórias foram respondidas: efeito linear (ramo `e2`), velocidade irreal (ramo `e4`), disrupção que pode falhar (4.1, o personagem agente ser desejado).

**Caminhos abandonados.**

- *Análise por setor.* Descartada por instrução explícita: o modo pedido era a partir do tema, não do setor. Uma versão setorial teria organizado o mapa por indústria — jogos AAA, indie, educação, treinamento corporativo — e perdido o que é próprio do objeto.
- *A narrativa gerada.* Deixada de fora deliberadamente: história gerada, coautoria e novela visual a partir de uma frase são o tema vizinho da disciplina. Aqui o objeto é o **personagem autônomo dentro de um mundo com regras**, não a história que sai dele.
- *A simulação social como método de pesquisa.* Também é tema vizinho. O *generative agents* ([4]) foi usado apenas como fonte de arquitetura — memória, reflexão, planejamento —, não como argumento sobre simulação de sociedade.
- *O ramo econômico de licenciamento de voz e imagem de atores.* Foi levantado durante a pesquisa (aparece como ressalva em relatos de adoção industrial), mas descartado do mapa por ser efeito compartilhado com todo uso de IA generativa em mídia — cai na instrução de excluir ideias que servem para qualquer tema.
- *Um quarto efeito de primeira ordem sobre acessibilidade* — NPC generativo como recurso para jogadores com deficiência. Descartado por falta de qualquer fonte aberta que o sustentasse nesta rodada; teria sido especulação sem âncora, que é exatamente onde o método manda parar de ramificar.
- *Fontes rejeitadas.* Foram encontrados e descartados diversos artigos agregadores de 2026 com números de mercado (valor do mercado de IA generativa em jogos, percentual de adoção por estúdios, ganhos percentuais de produtividade) por não trazerem metodologia, amostra ou origem verificável dos números. Nenhum deles foi citado. O único número de mercado que permaneceu no documento é o da Pesquisa Game Brasil ([10]), que declara tamanho e faixa etária de amostra.
