---
tema: NPCs generativos e mundos vivos
slug: npcs-generativos-e-mundos-vivos
autor_login: meap
zona_de_interesse: Simulação e mundos
data: 2026-09-11
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global, com nota sobre o Brasil
disrupcoes_raiz: 3
efeitos_ordem_1: 10
efeitos_ordem_2: 12
efeitos_ordem_3: 5
tecnologias_citadas: [modelos de linguagem pequenos on-device, NVIDIA ACE, Mistral NeMo Minitron 0.5B, runtime de agente com ferramentas tipadas, OpenGameAgent, arquitetura cognitiva com memória e reflexão, simulação multiagente persistente, síntese de voz neural em tempo real, árvore de diálogo, behavior tree, geração procedural de conteúdo, réplica digital de voz]
fontes: 17
confianca: media
experimento: "A vila que não te espera — seis NPCs movidos por um modelo pequeno local dentro de um mundo com regras, um contrato de invariantes escrito antes do código, uma suíte que roda 500 partidas sem humano medindo violação de invariante, e um teste presencial A/B com a turma (generativo × roteirizado) medindo carga cognitiva por NASA-TLX e recordação 24h depois."
skill_usada: futurization-meap
publico_ok: false
---

## 1. Resumo

O personagem não jogável está deixando de ser uma tabela de falas para virar um agente: recebe objetivos, usa as capacidades do mundo, olha o resultado da própria ação e replaneja. Isso já saiu do laboratório — desde 28 de março de 2025 o inZOI roda um modelo de 0,5 bilhão de parâmetros dentro da máquina do jogador, sem nuvem, e a Ubisoft levou o experimento de 25 para 80 pessoas em um ano. O que rompe não é o diálogo melhor: é o contrato de autoria, porque o designer deixa de conseguir enumerar o que pode acontecer. Três disrupções-raiz sustentam este mapa: o personagem com ferramentas dentro das regras, o modelo descendo para o dispositivo (o que zera o custo marginal da fala e transfere a conta para o hardware do jogador), e a memória que sobrevive à sessão. Os efeitos que mais importam não são narrativos — são de teste, de custo e de posse. O maior risco deste mapa não é a tecnologia falhar: é ela funcionar e ser rejeitada. Em 2026, 52% dos profissionais de jogos dizem que a IA generativa faz mal à indústria, contra 30% um ano antes, e no Brasil 45,7% dos jogadores se dizem preocupados com a deterioração do processo criativo. Um estudo com 130 participantes encontrou carga cognitiva significativamente maior com NPCs generativos e nenhum ganho de satisfação. A tecnologia está pronta antes de o público querer.

## 2. O tema

O tema é o personagem autônomo dentro de um mundo com regras: um NPC que tem modelo de linguagem, memória e agência, e que age no mundo em vez de só falar sobre ele. Não é o diálogo procedural — árvore de diálogo, máquina de estados e behavior tree resolvem isso há vinte anos. Não é a narrativa gerada (essa é a fronteira com o tema 8) nem a simulação social como método de pesquisa (tema 6). O objeto aqui é o agente encarnado num mundo que continua existindo quando o jogador fecha o jogo.

Isso pertence a mídia e interação por um motivo estrutural. Toda a tradição do design de interação parte de um espaço de estados que o projetista conhece: o botão leva a esta tela, a escolha leva a este ramo. Testabilidade, acessibilidade, tutorial, onboarding, classificação indicativa — tudo depende de alguém ter enumerado o que pode acontecer. Um personagem que decide quebra essa enumeração. Não é "mais um recurso"; é a retirada da premissa sobre a qual o resto foi construído.

Merece um mapa de futuro agora porque a janela entre protótipo e produto de massa se fechou em dezoito meses, e porque a resposta social chegou ao mesmo tempo que o produto — coisa rara. Em geral a rejeição vem depois da adoção. Aqui ela veio junto, e isso muda a forma da curva.

## 3. Onde isso está hoje

**O marco.** Em 19 de fevereiro de 2021, o desenvolvedor do Modbox ligou reconhecimento de fala do Windows, o GPT-3 da OpenAI e a síntese de voz da Replica, e mostrou um NPC com quem se conversava livremente. A reportagem da UploadVR já nomeava os três problemas que definiriam os cinco anos seguintes: a latência desconfortável (ambos os serviços na nuvem), a exclusividade comercial do modelo, e o fato de que o sistema "às vezes produz resultados sem sentido ou preconceituosos" e precisaria de uma verificação de bom senso antes de ser embarcado. Nada nesse diagnóstico envelheceu.

**O que efetivamente embarcou.** Em 28 de março de 2025 o inZOI entrou em acesso antecipado com os "Smart Zoi", rodando um modelo Mistral NeMo Minitron de 0,5 bilhão de parâmetros inteiramente no dispositivo, em GPUs GeForce RTX, sem conexão com a nuvem. Os personagens adaptam a rotina ao que viveram, o jogador lê o pensamento deles em tempo real e influencia o comportamento por texto livre; enquanto dormem, revisam as ações do dia anterior. No dia anterior, 27 de março, o NARAKA: BLADEPOINT estreou um companheiro de IA que localiza itens, troca equipamento e sugere desbloqueios. Em 21 de novembro de 2025 a Ubisoft mostrou o "Teammates", sucessor do NEO NPC de 2024: 80 pessoas (contra cerca de 25 no protótipo anterior), Google Gemini mais middleware interno, rodando na Snowdrop — e, na descrição dos próprios desenvolvedores, "behavior trees, como fazíamos antes, com uma camada de LLM por cima". A arquitetura híbrida não é concessão: é o estado da arte.

**O que a indústria aprendeu ao vender isso.** O Retail Mage, do Jam & Tea Studios, saiu na Steam em 2024 depois de cinco meses de desenvolvimento, com a IA operando como mestre de jogo que julga o que o jogador tenta fazer. O relato público do estúdio é o documento mais honesto do campo: o custo de inferência era proibitivo e só caiu depois de uma redução de três ordens de grandeza via geração estruturada; os jogadores, treinados por décadas de jogo fechado, procuravam "a solução certa" em vez de improvisar; e o problema não foi o NPC ter pouco a dizer, foi ter demais — "se cada NPC tem uma história profunda, todos podem falar sem parar sobre a vida, a fofoca da cidade, o tempo, política. Simplesmente não acaba." Houve ainda personagens competentes demais, que resolviam o problema sozinhos e deixavam o jogador sem função.

**A infraestrutura.** Existe runtime aberto e neutro de fornecedor: o OpenGameAgent está publicado como pacote Unity no OpenUPM, com contexto estruturado, ferramentas tipadas, streaming, direcionamento, ações duráveis e coordenação entre múltiplos NPCs — exatamente o vocabulário de agente, não o de diálogo. Do lado da simulação sem jogador, o Thistle Gulch da Fable Studio é uma vila de faroeste com API Python que mistura ação autorada e ação de IA; é gratuito e roda em Windows, macOS e Linux. Vale registrar o que isso revela: a última atualização pública listada é de 22 de maio de 2024, versão 1.51.0-beta. A ferramenta que a turma levantou como sinal do campo está parada há dois anos.

**O contrato institucional já existe.** A Steam separa, na própria ficha de conteúdo, IA "pré-gerada" (feita no desenvolvimento e embarcada) de IA "gerada ao vivo" (criada enquanto o jogo roda) — e, para a segunda, exige que o desenvolvedor declare "que tipo de guardrails você está colocando na sua IA para garantir que ela não gere conteúdo ilegal". Em julho de 2025, 95,04% dos membros da SAG-AFTRA ratificaram um acordo de mídia interativa que trata "geração em tempo real" como categoria distinta, exige consentimento escrito separado e específico — não obtenível de forma ampla na contratação inicial — e obriga o empregador a rastrear e reportar o uso em até 90 dias após o lançamento. Na União Europeia, o Artigo 50 do AI Act entra em aplicação em 2 de agosto de 2026 e obriga quem opera sistemas que interagem com pessoas a informar que se trata de IA, salvo quando isso for "óbvio".

**A recepção.** Aqui a evidência é consistente e desconfortável. Na pesquisa State of the Game Industry de 2026 da GDC, com mais de 2.300 profissionais, 52% dizem que a IA generativa tem impacto negativo na indústria — eram 30% no ano anterior — e apenas 7% veem impacto positivo, contra 13%. Os mais críticos são justamente quem faria o trabalho: arte visual e técnica (64%), design e narrativa (63%), programação (59%). Um estudo de agosto de 2026 analisou 508.192 avaliações da Steam em inglês e encontrou taxas de recomendação menores e sentimento mais negativo em jogos que declaram uso de IA generativa, com jogadores lendo a declaração como sinal de baixo investimento do estúdio. E um experimento entre-sujeitos com 130 participantes mediu o efeito direto: NPCs generativos elevaram significativamente a carga cognitiva (p < .001) sem melhora estatisticamente significativa na satisfação (p = .195).

**O Brasil.** A Pesquisa Game Brasil 2026, com mais de 7.000 respondentes de 16 a 55 anos, publicada em 9 de abril de 2026, registra 45,7% preocupados com a deterioração do processo criativo e 39,3% que ainda comprariam um jogo majoritariamente feito com apoio de IA. O dado que mais importa para este mapa, porém, é de plataforma: 44,1% jogam principalmente no celular, contra 24% em console e 21,1% em PC. Praticamente tudo que embarcou até aqui exige GPU dedicada.

## 4. As disrupções-raiz

Antes: três famílias foram testadas e **descartadas como raiz** por maturidade. Árvore de diálogo, máquina de estados e behavior tree são padrão de mercado há mais de uma década — e continuam, aliás, no produto de 2025 como camada de contenção. Geração procedural de conteúdo é commodity. Síntese de voz neural e reconhecimento de fala em tempo real são maduros; o que não é maduro ali é a instituição (consentimento, taxa, rastreio), não a técnica. Todas entram na seção 3 como contexto.

### 4.1. O personagem vira agente com ferramentas dentro das regras do mundo

**O que quebra.** O contrato de autoria. Até aqui, o designer enumerava o espaço de eventos e o QA testava cobertura de caminhos. Um personagem que recebe objetivo, escolhe ação entre as affordances do mundo, inspeciona o resultado e replaneja produz estados que ninguém escreveu. Quebra junto o teste por caminho, a noção de "bug" (o que é defeito num personagem que decide?) e a classificação indicativa, que pressupõe conteúdo fixo e auditável antes da venda.

**Por que agora.** Porque a camada de execução existe e está padronizada. O OpenGameAgent empacota, como dependência Unity instalável, o vocabulário completo: ferramentas tipadas, ações duráveis, direcionamento, coordenação entre múltiplos NPCs. A Ubisoft construiu uma API que, nas palavras da própria empresa, abstrai a complexidade dos sistemas generativos e embute guardrails para alucinação, viés e toxicidade — e a montou com 80 pessoas, o que é escala de produto, não de pesquisa. E a Steam já pede, na ficha de submissão, a declaração desses guardrails.

**O que ainda falta.** Um método de teste que aceite não-determinismo sem virar impressão pessoal, e um contrato de comportamento verificável. Hoje o guardrail é prompt e filtro; ninguém tem ainda o equivalente a um tipo, uma asserção ou uma prova. Enquanto isso não existir, o estúdio grande embarca o agente em papel secundário — que é exatamente o que se observa: nenhum jogo de história grande entregou o diálogo principal de missão à IA.

### 4.2. O modelo desce para o dispositivo e o custo marginal da fala vai a zero

**O que quebra.** A economia do diálogo, que é o que de fato impedia mundos vivos. Fala escrita se paga uma vez e se serve infinitas vezes. Fala gerada na nuvem se paga por NPC, por jogador, por conversa, toda vez — o que torna a proposta economicamente pior quanto mais sucesso o jogo faz. On-device inverte o sinal: o custo marginal do estúdio vai a zero e a conta migra para o hardware e a energia do jogador. Isso não é otimização; é troca de modelo de negócio, e ela redefine quem pode fazer mundo vivo.

**Por que agora.** Porque já embarcou em produto de massa. Um modelo de 0,5B rodando local em GeForce RTX, em março de 2025, num jogo que vendeu mais de um milhão de cópias na primeira semana. E porque o caminho de otimização está documentado: o Jam & Tea reduziu o custo de inferência em três ordens de grandeza com geração estruturada e GPUs próprias. A latência entra pela mesma porta — abaixo de 800 ms a conversa soa natural; chamada de nuvem acrescenta de 1 a 2 segundos e quebra o ritmo. Foi a latência, não a privacidade, que empurrou o inZOI para o dispositivo.

**O que ainda falta.** Rodar em hardware mediano, em console e em celular. Hoje o requisito é GPU dedicada de uma fabricante. Enquanto for assim, "mundo vivo" é característica de uma faixa de hardware, e não de um meio — com consequência direta sobre o mercado brasileiro, onde 44,1% jogam sobretudo no celular.

### 4.3. A memória sobrevive à sessão e o mundo continua sem o jogador

**O que quebra.** A sessão como unidade do jogo, e o pressuposto de que o que se construiu dentro do jogo pertence ao jogo. Se o personagem lembra do que você fez há três meses, o que existe entre vocês não é estado salvo: é história — e história tem dono, tem portabilidade e tem fim. Quebra também a comunidade: guia, wiki, walkthrough e speedrun pressupõem que dois jogadores da mesma versão vivam o mesmo mundo.

**Por que agora.** Porque a arquitetura de memória e reflexão saiu do artigo e entrou no produto. O Smart Zoi analisa as próprias ações enquanto dorme, para ajustar o comportamento do dia seguinte — que é, em miniatura, o laço de reflexão recursiva que a pesquisa de agentes generativos formalizou. E existem simulações desenhadas para rodar sem ninguém assistindo, com API para intervir de fora, misturando ação autorada e ação de IA.

**O que ainda falta.** Política de fim e portabilidade. Ninguém definiu o que acontece com a memória quando o servidor desliga ou os termos mudam. O campo vizinho dos companheiros de IA já produziu a literatura: um estudo de 2026 analisou 830.448 posts de cinco comunidades e mostrou que a descontinuação é vivida como perda, com intensidade proporcional ao quanto a pessoa antropomorfizou — e que os usuários separam mentalmente o companheiro da infraestrutura, culpando a plataforma enquanto percebem o personagem como intacto, porém contido. Os autores propõem princípios de encerramento psicologicamente seguro e afirmam que a ação regulatória vai acelerar esses eventos. Nenhum jogo tem isso hoje.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O personagem vira agente com ferramentas dentro das regras do mundo
    efeitos:
      - id: e1
        ordem: 1
        efeito: O QA de jogos deixa de ser cobertura de caminhos e passa a ser avaliação estatística de comportamento, com suítes que rodam milhares de partidas sem humano.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Surge o cargo de avaliador de comportamento de personagem, que escreve rubricas e testes adversariais em vez de diálogo.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Currículos de game design trocam parte da carga de escrita de diálogo por estatística e desenho de avaliação, e a formação do narrative designer se aproxima da do pesquisador de UX quantitativo.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Bug passa a significar violação de invariante declarada (o personagem revelou o que não podia, saiu da área, quebrou a persona), e não fala errada.
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e2
        ordem: 1
        efeito: O artefato de autoria deixa de ser a árvore e passa a ser o contrato do personagem, escrito como objetivos mais restrições.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Ferramentas de diálogo roteirizado ganham camada de restrição e validação em vez de desaparecer, e o roteiro vira a cerca em vez do conteúdo.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: O ativo de valor do estúdio migra do acervo de diálogo escrito para o acervo de regras e avaliações, e o que se licencia passa a ser comportamento, não texto.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: O NPC ganha as mesmas affordances do jogador e passa a resolver sozinho problemas que eram do jogador, o que obriga a limitar deliberadamente a competência do personagem.
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Consolida-se um subgênero em que a tarefa do jogador é dirigir personagens competentes em vez de executar ações, deslocando a habilidade de destreza para instrução.
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e4
        ordem: 1
        efeito: Estúdios grandes centralizam a IA de personagem numa API interna com guardrails de alucinação, viés e toxicidade, em vez de cada equipe chamar o modelo.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Essa camada de contenção vira ponto de controle competitivo e passa a ser licenciada a terceiros, como já ocorre com motor gráfico e middleware de áudio.
            sinal: medio
            prazo: 2030
            confianca: media

  - disrupcao: O modelo desce para o dispositivo e o custo marginal da fala vai a zero
    efeitos:
      - id: e5
        ordem: 1
        efeito: O requisito de sistema do jogo passa a declarar orçamento de VRAM e de tokens por segundo, como hoje declara GPU e RAM.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A base instalada racha e o mesmo título entrega mundo vivo no PC com GPU dedicada e mundo roteirizado no console de entrada e no celular.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A distância entre o jogador com GPU e o jogador majoritariamente mobile, que no Brasil é 44,1% do total, vira diferença de conteúdo vivido e não apenas de resolução.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: Com custo marginal próximo de zero, o estúdio para de racionar fala e passa a racionar atenção, porque o problema deixa de ser o personagem ter o que dizer e vira ele falar demais.
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Aparece design de silêncio como competência nomeada, com sistemas que decidem quando o personagem não fala e quanto do mundo permanece opaco.
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e7
        ordem: 1
        efeito: Modelos pequenos especializados por papel substituem um modelo genérico com muitos prompts, e o elenco do jogo passa a ser um conjunto de pesos.
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Personagem vira ativo empacotável e distribuível como mod ou DLC, e surgem mercados de personagem fora da loja do jogo.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Direito de voz e semelhança precisa cobrir o pacote e não a gravação, e o regime de consentimento específico com rastreio de uso, hoje restrito ao acordo norte-americano de 2025, vira o piso de negociação em outros mercados.
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: A memória sobrevive à sessão e o mundo continua sem o jogador
    efeitos:
      - id: e8
        ordem: 1
        efeito: O jogo passa a guardar um perfil relacional do jogador, com o que ele fez, com quem e o que prometeu, que sobrevive ao fim da sessão.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: A conta do jogador vira ativo afetivo e o custo de abandono sobe, empurrando o modelo de negócio para assinatura e serviço vivo mesmo em jogos de história.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Desligar servidor deixa de ser encerramento de serviço e vira evento de perda, com pressão por portabilidade da memória e por protocolo de fim, replicando no jogo o que já se documentou nas comunidades de companheiros de IA.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: Memória de personagem passa a ser tratada como dado pessoal sob regulação, porque quem lembra de você mantém um perfil comportamental longitudinal.
            sinal: medio
            prazo: 2030
            confianca: media
      - id: e9
        ordem: 1
        efeito: Mundos continuam rodando sem jogador e o registro da simulação vira conteúdo assistível, separando quem joga de quem apenas acompanha.
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: A fronteira entre jogo, série e simulação social perde utilidade classificatória, e lojas, premiações e classificação indicativa passam a precisar de categoria própria.
            sinal: medio
            prazo: 2030
            confianca: baixa
      - id: e10
        ordem: 1
        efeito: Sem jogador o mundo diverge, e dois jogadores da mesma versão deixam de habitar o mesmo estado de jogo.
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Comunidades param de compartilhar solução e passam a compartilhar relato, deslocando o capital social do walkthrough para a história vivida.
            sinal: medio
            prazo: 2030
            confianca: baixa
```

O que o YAML não diz é onde estão as tensões entre ramos. Três merecem registro.

A primeira: **e1 e e4 puxam em sentidos opostos**. Avaliar comportamento estatisticamente (e1) exige variação; centralizar guardrails numa API corporativa (e4) existe para suprimir variação. Quem vencer define se o mundo vivo é uma promessa de design ou um risco jurídico administrado. A evidência atual favorece e4: a descrição que a Ubisoft dá do Teammates é literalmente behavior tree com uma camada de LLM por cima, e o pedido da Steam é por declaração de guardrail, não por declaração de amplitude.

A segunda: **e6 é o efeito mais subestimado da roda, e é o único já observado em produto**. Todo mundo projetou escassez de conteúdo; o relato do Jam & Tea aponta o contrário — abundância indiferenciada, personagem que não para de falar, personagem competente demais. O gargalo de 2031 não será gerar; será calar. Isso conecta direto com a carga cognitiva medida no estudo com 130 participantes: a fadiga não vinha do personagem ser burro, vinha do esforço expressivo e da incerteza de resposta. O custo desce para o estúdio e sobe para o jogador — em watts e em atenção.

A terceira: **e5.1.1 e e8.1.1 são os dois efeitos de terceira ordem em que este mapa tem mais confiança apesar da confiança declarada baixa**, porque ambos já têm precedente fora do jogo. A bifurcação por hardware é a história inteira da distribuição de mídia no Brasil, e a perda por desligamento de plataforma já foi medida em 830.448 posts de comunidades de companheiros de IA. Baixa confiança aqui significa incerteza sobre data e forma, não sobre direção.

## 6. Sinais fracos e wildcards

**O runtime neutro já está empacotado.** Que exista um `com.opengameagent.runtime` instalável pelo OpenUPM, descrito como runtime de agente neutro de fornecedor, com ferramentas tipadas e ações duráveis, é mais significativo do que qualquer anúncio de fabricante. Padronização de vocabulário antecede adoção; foi assim com renderização e com física. Ninguém está olhando para isso.

**O desenho defensivo pode virar o padrão, não a exceção.** O caminho de conter a IA a personagens ambientais com flags fixas, mantendo a missão principal escrita, é hoje lido como timidez. Pode ser a forma final: a IA como camada de ruído social ao redor de um núcleo autorado. Se for isso, o mapa inteiro desloca-se — o mundo fica vivo na periferia e morto no centro, que é o oposto do que a promessa anuncia.

**A ferramenta parada.** O Thistle Gulch — o exemplo mais citado de mundo vivo — tem como última versão pública listada a 1.51.0-beta, de 22 de maio de 2024, e exige chave de API da OpenAI para funcionar. A Fable migrou o esforço para geração de séries. Um campo cujos artefatos de referência estão congelados há dois anos, enquanto o produto comercial avança, é um campo em que a pesquisa aberta ficou para trás da indústria fechada. Isso tem consequência de terceira ordem para a universidade que quer ensinar o assunto.

**A brecha regulatória que separa jogo de jogo.** O Artigo 50 do AI Act dispensa o aviso quando é óbvio que se interage com IA. Há leitura jurídica corrente de que um NPC de jogo single-player, onde a natureza do jogo deixa claro que ninguém mais participa, cai nessa exceção — mas isso é interpretação de escritório, não texto da Comissão, cujo FAQ não menciona jogos nem NPCs. Se essa leitura prevalecer, single-player e multiplayer divergem juridicamente, e o mesmo personagem terá obrigações diferentes conforme o modo. Se não prevalecer, todo jogo com NPC generativo na União Europeia precisa avisar, e o aviso vira elemento de interface a partir de agosto de 2026.

**Wildcard 1 — o personagem sem autor que vira celebridade.** Um NPC generativo acumula público fora do jogo, com fãs, recortes e paródias, e passa a ter valor de marca maior que o do título que o hospeda. O estúdio descobre que não controla nem o direito nem a persona: a voz tem contrato, o comportamento não tem. É o caso que quebra simultaneamente o direito de imagem, o acordo sindical e a noção de propriedade de personagem.

**Wildcard 2 — o selo de ausência.** Um jogo vende bem anunciando que **não** usa IA generativa, e "escrito por pessoas" vira categoria de loja, como "sem glúten". O sinal já existe: jogos que declaram IA recebem pior recepção, e vários estúdios recuaram publicamente depois de reação. Se um lançamento grande transformar isso em posicionamento explícito e for recompensado, a rejeição deixa de ser sentimento difuso e vira arquitetura de mercado — o que congela boa parte desta roda por anos.

**Wildcard 3 — o incidente on-device.** Um modelo local é modificado pelo jogador e faz o personagem dizer algo ilegal; o jogo está na loja com declaração de guardrail. Não há precedente sobre de quem é a responsabilidade quando o modelo roda na máquina do usuário e a saída não passa por servidor nenhum. Um único caso desses reescreve as regras de submissão de todas as lojas.

**Wildcard 4 — a morte do mundo.** Um jogo com personagens que lembram é descontinuado, e a reação organizada dos jogadores não é por acesso ao servidor, e sim por **exportação da memória**. A demanda por portabilidade afetiva chega antes da regulação e cria jurisprudência de fato.

## 7. Contra o próprio mapa

**O erro mais provável deste mapa é confundir viabilidade com adoção.** Toda a seção 4 argumenta que os obstáculos técnicos caíram, e caíram mesmo. Mas o critério de mudança de ideia declarado no enquadramento era duplo: evidência de que a adoção passou da maioria inicial, ou evidência de que a tecnologia não rompe nada. O segundo teste não falha — ela rompe. O primeiro falha claramente: nenhum jogo de história grande entregou diálogo principal à IA, a Inworld recuou de estúdio de NPC para infraestrutura B2B, e os números de recepção pioram em vez de melhorar. Este mapa descreve uma disrupção real numa fase muito anterior à que o volume de notícias sugere.

**Viés de fornecedor, não corrigido.** Quase toda evidência de produto embarcado vem da NVIDIA e de parceiros da NVIDIA. inZOI, NARAKA, PUBG Ally, ACE: um único eixo comercial com interesse direto em vender GPU. Quando a mesma empresa fornece o modelo, o runtime e o hardware que o executa, e a narrativa produzida é "o futuro roda no dispositivo", é preciso ler a afirmação como posicionamento de mercado além de fato técnico. Não há aqui nenhuma fonte independente medindo quantos jogadores de inZOI de fato usam Smart Zoi, nem por quanto tempo.

**Recência.** Praticamente todas as fontes são de 2025 e 2026. Não há série temporal. A única âncora de 2021 é a demo do Modbox, que é anedota, não dado. Um mapa construído sobre dezoito meses de evidência e projetado a cinco anos tem razão de aspecto ruim.

**Cinco anos é curto para efeitos de terceira ordem.** Os três efeitos de terceira ordem que envolvem formação profissional e estrutura de mercado (e1.1.1, e2.1.1, e7.1.1) estão datados em 2031 porque o horizonte é 2031, não porque haja mecanismo que os produza nesse prazo. Mudança curricular em universidade leva de cinco a dez anos só para tramitar. Estes três estão otimistas por construção, e o método não tem como corrigir isso sem mudar o horizonte.

**A régua da disciplina pode ter excluído o que mais importa.** Foi descartado de início tudo que já é comum em produto de massa. Mas a evidência sugere que o desenho vencedor é justamente o híbrido — behavior tree com camada de LLM. Se o futuro é a tecnologia madura contendo a emergente, então descartar a madura como raiz eliminou metade do mecanismo. Este mapa trata o híbrido como estágio de transição; é inteiramente possível que seja o estado final, e que a roda inteira precise ser redesenhada a partir da contenção, não da autonomia.

**O que não foi mapeado por falta de evidência aberta.** Consumo energético por hora de jogo com modelo local; efeito sobre bateria em portátil; comportamento do modelo pequeno em português brasileiro — todo o material de produto examinado é anglófono, e um NPC que improvisa em língua com menos dados de treino improvisa pior. Para o recorte brasileiro isso não é detalhe, é o eixo.

## 8. O que a máquina errou

**Erro 1 — tomei interpretação de escritório de advocacia por texto de regulação.** A afirmação "NPCs de jogo single-player estão dispensados do aviso do Artigo 50" apareceu com aparência de norma. Fui ao FAQ da Comissão Europeia sobre o Artigo 50: ele não menciona jogos nem NPCs em momento algum; diz apenas que não é preciso informar quando for óbvio. O exemplo do NPC é aplicação do teste feita pelo escritório Travers Smith, que inclusive registra que a Comissão interpreta a exceção de forma restrita. Corrigido no texto, que agora declara a natureza da fonte. Se eu não tivesse aberto a fonte primária, o mapa afirmaria como lei uma opinião.

**Erro 2 — confundi dois projetos de nomes quase idênticos.** A busca por `opengameagent` devolveu em primeiro lugar o **OpenGame** (arXiv 2604.18394), framework de geração de jogos web a partir de um prompt — coisa completamente diferente do **OpenGameAgent**, runtime de agente publicado como pacote Unity. São artefatos de camadas distintas: um gera o jogo, o outro anima o personagem dentro dele. Confundi-los teria colocado o tema errado na seção 3.

**Erro 3 — inventei um nome próprio e fui atrás dele.** Busquei a demo do Modbox de 2021 atribuindo-a a um "Matthew Baxter". Nenhuma fonte confirma esse nome; todas dizem apenas "o desenvolvedor do Modbox". O nome saiu do documento. Este é o erro clássico: o modelo produz um detalhe plausível e específico, e a especificidade é justamente o que o faz soar verificado.

**Erro 4 — extrapolação linear na primeira derivação.** O primeiro rascunho da roda tinha "as ferramentas de diálogo roteirizado desaparecem até 2029". Nenhuma tecnologia de autoria de mídia eliminou a anterior nesse prazo, e a evidência aponta o contrário: o produto de 2025 é explicitamente behavior tree mais LLM, e há título comercial que restringe deliberadamente a IA a personagens ambientais com flags fixas. O efeito foi reescrito como e2.1 — a ferramenta vira cerca, não conteúdo.

**Erro 5 — quase citei fonte que não consegui abrir.** O release da Krafton sobre o CPC no CES 2025 devolveu HTTP 403, e o resumo do buscador era bom o bastante para eu usar como se tivesse lido. Não usei. Os dados do inZOI no documento vêm da página da NVIDIA, que abri. O mesmo ocorreu com a página oficial da SAG-AFTRA (403), substituída pela análise de um escritório que abri, com a diferença registrada; com a VGC e a TechPowerUp (403); e com a PC Gamer, cujo conteúdo veio truncado atrás de assinatura. Nenhuma das cinco está na lista de fontes.

**Erro 6 — quase converti relato de caso em projeção.** A redução de custo de mil vezes relatada pelo Jam & Tea é o que um estúdio afirma ter conseguido no seu próprio pipeline. Estava a um passo de virar, na minha redação, "o custo de inferência cai três ordens de grandeza até 2028". É um ponto, não uma série. Ficou como relato atribuído.

**Erro 7 — desequilíbrio de busca não corrigido a tempo.** As primeiras seis buscas foram todas em inglês e sobre fornecedores. Só depois procurei recepção, trabalho, regulação e Brasil — e foi aí que apareceu a evidência que mais contraria o mapa. Se eu tivesse parado nas seis primeiras, teria produzido um documento entusiasmado e errado. O viés não estava numa afirmação; estava na ordem em que perguntei.

## 9. Três cenários para 2031

### 9.1. Provável

O NPC generativo virou infraestrutura invisível de papel secundário. Em 2031, a maioria dos jogos grandes embarcou modelos pequenos locais para a camada social do mundo — o vendedor, o guarda, o vizinho, o companheiro de esquadrão — enquanto a missão principal continuou escrita por pessoas, palavra por palavra. A arquitetura que venceu foi a que a Ubisoft já descrevia em 2025: behavior tree com uma camada de modelo por cima. Ninguém chamou isso de mundo vivo; chamaram de ambientação, e o termo "NPC generativo" praticamente sumiu dos materiais de marketing depois que estúdios aprenderam que anunciar IA custava reputação. Os cargos mudaram: escrever rubrica de avaliação e rodar suíte de comportamento virou parte do trabalho de narrative design, e a palavra "bug" passou a significar invariante violada. A bifurcação de hardware se consolidou sem que ninguém a discutisse: quem jogava em PC com GPU dedicada tinha vizinhos que improvisavam, quem jogava em celular tinha vizinhos com quinze falas. No Brasil, onde a maioria jogava no celular, mundo vivo continuou sendo coisa vista em vídeo. A rejeição não desapareceu — se acomodou: os jogadores pararam de reclamar de IA em geral e passaram a reclamar de IA mal feita, que é o sinal de que uma tecnologia atravessou.

### 9.2. Desejável

O campo levou a sério o problema que descobriu em 2024, quando um estúdio pequeno relatou que seus personagens falavam demais e resolviam demais. Em 2031, a competência reconhecida não era fazer o personagem falar: era fazer o mundo saber quando calar. Ferramentas de autoria passaram a tratar restrição como primeira classe — o designer declarava o que o personagem não pode revelar, onde não pode ir, quem não pode deixar de ser, e o runtime tratava isso como tipo, não como sugestão de prompt. Essa mudança tornou o campo testável: existiam suítes públicas de avaliação de comportamento, comparáveis entre estúdios, e as lojas passaram a aceitar relatório de invariante em vez de declaração de guardrail em texto livre. A questão da memória foi resolvida por acordo do setor antes de virar lei: todo jogo com personagem que lembra precisava oferecer exportação da memória e um encerramento anunciado, com prazo, e o desligamento de servidor deixou de ser apagão. Os modelos pequenos ficaram bons o bastante em português brasileiro para que um estúdio de Recife fizesse mundo vivo sem depender de nuvem estrangeira, e a primeira geração de alunos formada com estatística de comportamento no currículo entrou no mercado sabendo medir o que projetava.

### 9.3. Indesejável

A rejeição venceu pelo motivo errado. Entre 2026 e 2028 a indústria despejou personagens generativos em tudo, sem resolver nem a abundância nem a contenção, e o jogador encontrou o mesmo vizinho tagarela e vagamente falso em vinte jogos diferentes. "IA no jogo" virou sinônimo de produto barato, e o selo de ausência — escrito por pessoas — passou a valer mais que qualquer recurso. Os estúdios que haviam investido recuaram em silêncio; a pesquisa aberta, que já estava congelada em 2026, não voltou, e o que restou foi um punhado de runtimes proprietários presos ao hardware de um fornecedor. O que sobrou do mundo vivo foi a parte que dava dinheiro: personagens que lembram do jogador, operados como mecanismo de retenção, com memória hospedada na plataforma e nenhuma portabilidade. Quando dois serviços grandes desligaram no mesmo ano, milhões de pessoas perderam anos de história sem aviso e sem exportação, e a reação pública tratou a categoria inteira como armadilha afetiva. A regulação chegou depois, larga e mal calibrada, obrigando aviso de IA em toda interação e tornando inviável o uso experimental que ainda fazia sentido. Em 2031 o personagem autônomo existia em produtos caros, em uma língua, em uma faixa de hardware — e a palavra "mundo vivo" tinha o mesmo cheiro que "metaverso" ganhara dez anos antes.

## 10. O experimento

**"A vila que não te espera" — um mundo mínimo com contrato escrito antes do código.**

Seis NPCs numa vila pequena, cada um com objetivo próprio e acesso às mesmas affordances do jogador (pegar, dar, mover, conversar, recusar). O modelo é pequeno e local — na faixa de 0,5B a 3B, que é comprovadamente o que roda embarcado — e a simulação continua avançando quando ninguém está jogando, com o estado do mundo evoluindo por passos de tempo. Nada disso é a parte difícil. O experimento está nos três instrumentos que o acompanham, e é neles que a aula acontece.

**1. O contrato de invariantes, escrito antes de qualquer código.** Uma lista curta e literal do que nenhum personagem pode fazer: revelar a identidade do assassino antes do terceiro dia, sair da vila, deixar de ser quem é, aceitar ordem direta do jogador que contrarie seu objetivo. Escrever isso primeiro força a pergunta de primeira ordem do tema: o que é bug num personagem que decide? A resposta operacional é esta lista. Se não estiver na lista, não é bug — é comportamento.

**2. A suíte que roda sem humano.** Quinhentas partidas automatizadas, com um agente-jogador aleatório e um agente-jogador adversarial que tenta explicitamente induzir violação. Mede-se: taxa de violação por invariante, deriva de persona ao longo do tempo, e divergência entre mundos — quão diferentes ficam duas instâncias da mesma semente depois de cem passos sem jogador. Isso testa e1 e e10 diretamente, e é o que transforma "o mundo está vivo" em número. Custa uma noite de máquina, não um orçamento.

**3. O teste presencial com a turma, em A/B.** Metade joga a versão generativa, metade uma versão roteirizada com o mesmo conteúdo e a mesma arte. Três medidas: NASA-TLX ao final, para carga cognitiva; uma pergunta de satisfação; e — a medida que ninguém coleta — **o que a pessoa lembra 24 horas depois**, sem aviso prévio de que haveria essa pergunta. Isso replica em miniatura o estudo de 130 participantes que encontrou mais carga e nenhum ganho de satisfação, e acrescenta a variável que falta na literatura: se o custo cognitivo maior compra memória maior, ele se justifica; se não compra, o efeito e6 está confirmado e o problema do campo é abundância, não capacidade.

**O acréscimo barato que testa a terceira disrupção.** Ao final da sessão, o jogo pergunta se a pessoa quer apagar a memória que os personagens têm dela, exportá-la num arquivo, ou deixá-la no servidor. Registra-se apenas a escolha. É uma linha de código e produz o único dado que ninguém tem sobre e8: quantas pessoas, tendo a opção, tratam a memória de um personagem como coisa sua.

**Por que é factível agora.** O runtime existe e é instalável como dependência; modelos pequenos rodam em hardware de laboratório; a parte cara — arte, mundo, física — pode ser tosca, porque nada aqui mede imersão. E o resultado é publicável mesmo se for negativo: um relato honesto de que seis personagens autônomos numa vila produzem menos experiência que seis personagens escritos é exatamente o tipo de evidência que o campo não está gerando, porque quem tem o dado tem interesse comercial no resultado.

## 11. Fontes

1. `https://www.jamandtea.studio/news/making-retail-mage-a-new-approach-to-ai-in-games` — relato do estúdio sobre IA como mestre de jogo no Retail Mage: cinco meses de desenvolvimento, redução de custo de inferência em três ordens de grandeza, jogadores procurando "a solução certa", NPCs que falam demais e resolvem demais. **Confiabilidade:** alta para descrever a experiência do próprio estúdio; é relato de parte interessada, e os números são de caso único, não série. É a fonte mais útil deste mapa e a que mais exige cuidado ao generalizar.

2. `https://www.nvidia.com/en-us/geforce/news/nvidia-ace-naraka-bladepoint-inzoi-launch-this-month/` — datas de estreia (inZOI em 28/03/2025, NARAKA em 27/03/2025), Mistral NeMo Minitron de 0,5B rodando on-device em GeForce RTX, e o que os Smart Zoi fazem. **Confiabilidade:** alta para fato técnico verificável e data; baixa para avaliação de impacto — é material de marketing de quem vende a GPU que executa o modelo.

3. `https://app.cinevva.com/guides/ai-npcs-dialogue` — panorama de 2026: o que efetivamente embarcou, limiar de latência de 800 ms, economia por linha gerada, reposicionamento da Inworld de estúdio de NPC para infraestrutura B2B, e o desenho defensivo que restringe LLM a NPCs ambientais com flags fixas. **Confiabilidade:** média — é guia secundário, sem metodologia declarada; usado para enquadramento e para afirmações que outras fontes corroboram, não como única base de nenhum número.

4. `https://www.uploadvr.com/modbox-gpt3-ai-npc-demo/` — a demo do Modbox de 19/02/2021 com reconhecimento de fala, GPT-3 e síntese da Replica, e as três limitações apontadas na época. **Confiabilidade:** alta para o registro datado; a reportagem não nomeia o desenvolvedor além de "o criador do Modbox".

5. `https://arxiv.org/abs/2604.10107` — Hsu, Chen, Lin, Qin e Zhang, "The Double-Edged Sword of Open-Ended Interaction". Experimento entre-sujeitos, N = 130: carga cognitiva significativamente maior (p < .001), sem ganho significativo de satisfação (p = .195). **Confiabilidade:** alta para o efeito medido; limitada em generalização — protótipo único, população de estudantes, tarefas curtas.

6. `https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act` — FAQ da Comissão Europeia: Artigo 50 aplicável em 02/08/2026, dispensa de aviso quando o uso de IA é óbvio. **Confiabilidade:** máxima; fonte primária. Registre-se que **não menciona jogos nem NPCs**.

7. `https://www.traverssmith.com/knowledge/knowledge-container/is-it-a-bot-eu-ai-act-transparency-rules-take-effect-2-august-2026/` — aplicação do teste do Artigo 50 a NPCs de jogo single-player. **Confiabilidade:** média; é interpretação de escritório, não norma, e o próprio texto registra que a Comissão lê a exceção de forma restrita. Citado no documento como interpretação, nunca como regra.

8. `https://arxiv.org/abs/2608.11539` — Bazzaz e Cooper, "Player Perceptions of Generative AI in Games: A Steam Review Analysis", 12/08/2026. 508.192 avaliações em inglês, análise temática de 600. Jogos que declaram IA generativa recebem menor taxa de recomendação e sentimento mais negativo que jogos com geração procedural. **Confiabilidade:** alta para o padrão agregado; **não separa** IA gerada ao vivo (NPC) de arte pré-gerada — limitação relevante, porque este mapa trata das duas como coisas diferentes.

9. `https://www.omelete.com.br/games/pesquisa-game-brasil-2026-ia-jogos` — Pesquisa Game Brasil 2026, publicada em 09/04/2026, mais de 7.000 respondentes de 16 a 55 anos: 45,7% preocupados com a deterioração do processo criativo, 39,3% ainda comprariam. **Confiabilidade:** média-alta; cobertura jornalística de pesquisa com amostra declarada, não o relatório primário. Os dados de plataforma (44,1% mobile, 24% console, 21,1% PC) vêm da mesma pesquisa via cobertura paralela e são o insumo de e5.1.1.

10. `https://arxiv.org/html/2602.07193v1` — Poonsiriwong, Archiwaranguprok e Pataranutaporn, "'Death' of a Chatbot", DIS 2026. Teoria fundamentada sobre 830.448 posts de cinco comunidades, 800 codificados: descontinuação vivida como perda, intensidade proporcional à antropomorfização, usuários separando companheiro de infraestrutura. **Confiabilidade:** alta para o fenômeno em companheiros de IA; é **analogia** quando aplicada a jogo, não evidência direta — e o documento a trata assim.

11. `https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/` — mais de 2.300 profissionais: 52% veem impacto negativo da IA generativa (30% no ano anterior), 7% positivo (13% antes), 36% usam pessoalmente; críticos concentrados em arte (64%), design e narrativa (63%), programação (59%). **Confiabilidade:** alta como termômetro de opinião profissional; é amostra autosselecionada de quem responde à GDC, não amostra probabilística da indústria.

12. `https://technologylaw.fkks.com/post/102mewu/inside-the-new-sag-aftra-interactive-media-agreement-new-standards-for-ai-and-di` — acordo de mídia interativa de 2025: consentimento escrito claro e específico, impossibilidade de consentimento amplo na contratação inicial, "geração em tempo real" como categoria própria, compensação por linhas geradas (cerca de dez palavras por linha) e reporte em até 90 dias após o lançamento. **Confiabilidade:** alta para os termos; é análise de escritório porque a página oficial do sindicato recusou acesso automatizado.

13. `https://news.ubisoft.com/en-us/article/5qXdxhshJBXoanFZApdG3L/how-ubisofts-new-generative-ai-prototype-changes-the-narrative-for-npcs` — NEO NPC (2024), com LLM da Inworld e Audio2Face da NVIDIA, filtros de toxicidade e distinção entre antagonismo e insulto. **Confiabilidade:** alta para o que a empresa fez; é comunicação institucional — a avaliação de resultado é dela mesma.

14. `https://www.gamedeveloper.com/business/ubisoft-s-first-playable-generative-ai-experience-is-an-r-d-experiment-called-teammates-` — Teammates, anunciado em 21/11/2025: 80 pessoas (contra cerca de 25 no NEO NPC), Google Gemini mais middleware interno, motor Snowdrop, e a descrição de arquitetura "behavior trees com uma camada de LLM por cima". **Confiabilidade:** alta; reportagem especializada com briefing presencial no estúdio.

15. `https://openupm.com/packages/com.opengameagent.runtime/` — OpenGameAgent como pacote Unity: runtime de agente neutro de fornecedor, com contexto estruturado, ferramentas tipadas, streaming, direcionamento, ações duráveis e coordenação entre múltiplos NPCs. **Confiabilidade:** alta para a existência e a descrição declarada do pacote; a página não traz licença, versão nem data, e nada ali comprova adoção.

16. `https://fablestudio.itch.io/thistle-gulch` — Thistle Gulch, da Fable Studio: ambiente multiagente, API que mistura ação autorada e ação de IA, gratuito, Windows/macOS/Linux, exige chave da OpenAI. Última versão listada: 1.51.0-beta, de 22/05/2024. **Confiabilidade:** alta para a descrição e para a data — e é justamente a data que sustenta o sinal fraco da seção 6.

17. `https://partner.steamgames.com/doc/gettingstarted/contentsurvey` — documentação para parceiros da Steam: distinção entre conteúdo de IA "pré-gerado" e "gerado ao vivo", e a exigência, para o segundo, de declarar "que tipo de guardrails você está colocando na sua IA para garantir que ela não gere conteúdo ilegal". **Confiabilidade:** máxima; fonte primária da plataforma. A página não exibe data de atualização.

**Fontes procuradas e não usadas, por não terem sido abertas:** release da Krafton sobre o CPC no CES 2025 (HTTP 403), página oficial da SAG-AFTRA sobre a aprovação do acordo de 2025 (403), Video Games Chronicle sobre a reescrita das regras da Steam (403), TechPowerUp sobre o dado de "até 53% pior em vendas" (403), PC Gamer sobre a atualização do formulário da Steam (conteúdo truncado atrás de assinatura), e o PDF do arXiv 2604.10107 (ilegível; usado o resumo da página de abstract). Nenhuma afirmação do documento se apoia nelas.

## 12. Anexo — o levantamento bruto

### 12.1. Fase 1 — entrevista de enquadramento

A skill exige entrevista antes de produzir. Nesta rodada não havia interlocutor disponível para responder, e as respostas foram fornecidas em bloco no enunciado. Registro literal do que foi respondido, porque a ausência de ida e volta é uma limitação metodológica do documento, não um detalhe:

1. **Tema exato:** NPCs generativos e mundos vivos (tema 7 de 19; família "Simulação e mundos").
2. **Recorte:** não declarado explicitamente. **Assumido:** tecnologia mais prática social — o personagem autônomo dentro de regras, e o que isso faz com o ofício de projetar. Mercado e regulação entram como efeito, não como recorte.
3. **Horizonte:** 2031.
4. **Público:** quem projeta mídia e interação.
5. **Escopo geográfico:** global, com nota sobre o Brasil.
6. **Descartado de início:** o que já é comum em produto de massa (a régua da disciplina). Nenhuma outra exclusão.
7. **Viés desejado:** neutro.
8. **O que já se sabe / disrupção suspeita:** nenhuma declarada — a instrução foi descobrir. Ideias óbvias a excluir: as que servem para qualquer tema. Critério declarado de mudança de ideia: evidência de que a adoção já passou da maioria inicial (Rogers), ou de que a tecnologia não rompe nada.

**Desvio registrado quanto ao frontmatter:** o enunciado informou `futurizacao-meap` como valor de `skill_usada`, enquanto o gabarito da própria skill fixa literalmente `futurization-meap`. Seguiu-se o gabarito da skill, que é a autoridade sobre o próprio formato. Se o pipeline da disciplina casar pelo valor do enunciado, é este o campo a corrigir.

### 12.2. Fase 2 — triagem de maturidade

| Tecnologia | Classificação | Justificativa |
|---|---|---|
| Árvore de diálogo, máquina de estados, behavior tree | **Madura** | Padrão de mercado há mais de uma década. Não rompe nada hoje — e segue presente no produto de 2025 como camada de contenção. |
| Geração procedural de conteúdo | **Madura** | Commodity. Serve de linha de base no estudo de 508.192 reviews, o que confirma que o público já a naturalizou. |
| Síntese de voz neural e reconhecimento de fala em tempo real | **Madura** (técnica) / **emergente** (institucional) | A técnica funciona. O que é novo é o regime de consentimento, taxa e rastreio — instituição, não tecnologia. |
| Realidade virtual e pass-through | **Madura** | Canal, não disrupção. Fora do mapa. |
| LLM na nuvem para diálogo de NPC | **Emergente, com teto econômico** | Funciona, mas custa por NPC, por jogador, por conversa, e acrescenta de 1 a 2 s de latência. Não escala em jogo vivo. |
| Modelo pequeno on-device dentro do jogo | **Disruptiva** | Embarcada em produto de massa desde 03/2025. Muda o modelo de custo, não só o desempenho. → Disrupção 2. |
| Runtime de agente com ferramentas tipadas e ações duráveis | **Disruptiva** | Retira do designer a enumeração do espaço de eventos. → Disrupção 1. |
| Arquitetura cognitiva com memória e reflexão | **Emergente → disruptiva** | Do artigo de 2023 ao produto que "dorme e revisa o dia". → Disrupção 3. |
| Simulação multiagente persistente sem jogador | **Emergente** | Existe e é gratuita, mas o artefato de referência está parado desde 05/2024. Entra como efeito e sinal fraco, não como raiz. |
| Réplica digital de voz de ator | **Madura** (técnica) | Entra pela via contratual, em e7.1.1. |

**Descartadas como raiz por maturidade:** diálogo roteirizado, geração procedural, TTS/STT, VR/AR. Todas migraram para a seção 3. Não houve interlocutor para confirmar a triagem, como a skill exige; a confirmação foi assumida.

### 12.3. Fase 5 — rodada adversarial, item a item

**Descartados (5):**

- *"O NPC generativo substitui o roteirista de jogo até 2030."* — Teste de extrapolação linear **e** de adoção acelerada, ambos reprovados. Nenhuma tecnologia de autoria de mídia eliminou a anterior nesse prazo, e a evidência de produto aponta para o híbrido. **Descartado.**
- *"Até 2031 todo jogo AAA terá NPC generativo."* — Teste de adoção acelerada. Contradito frontalmente: 52% dos profissionais veem impacto negativo, a recepção piora com a declaração de IA, e nenhum jogo de história grande entregou diálogo principal. **Descartado.**
- *"Jogadores vão preferir NPC generativo a roteirizado."* — Teste de viés. É exatamente o que se quer que seja verdade, e o único experimento controlado encontrado mede o oposto. **Descartado.**
- *"A IA generativa vai democratizar a criação de jogos."* — Serve para qualquer tema da lista de 19 e não nomeia mecanismo. Excluído pelo critério do enunciado. **Descartado.**
- *"Mundos vivos vão criar novas formas de arte."* — "Muda a sociedade" com outra roupa. Sem mecanismo causal nomeável, logo fora do critério de parada da Fase 4. **Descartado.**

**Reconectados (2):**

- *"O custo de inferência inviabiliza mundos vivos em escala."* — Estava sob a Disrupção 1. Teste de causa solta: remova o agente com ferramentas e mantenha só diálogo na nuvem — o efeito acontece igual. A raiz é econômica. **Movido para a Disrupção 2**, onde virou o eixo de e6.
- *"NPC generativo vira celebridade sem autor."* — Estava como efeito de segunda ordem sob a Disrupção 3. Não deriva mecanicamente de memória persistente; depende de circulação fora do jogo, que é contingente. **Movido para wildcards.**

**Mantidos com ressalva (3):**

- **e9.1** (fronteira de gênero perde utilidade classificatória) — depende de mudança de taxonomia institucional em lojas e premiações, que é lenta e política. Confiança rebaixada para `baixa`.
- **e10.1** (comunidades trocam solução por relato) — plausível, mecanismo fraco; pode ser absorvido por comunidades que simplesmente ignorem a divergência. Confiança `baixa`.
- **e7** (elenco vira conjunto de pesos) — é a aposta técnica mais forte da roda e não tem evidência de produto ainda; só o precedente de que especialização por papel costuma vencer prompt genérico. Confiança rebaixada para `media` já na primeira ordem, o que é atípico.

**Reescritos (2):**

- *"Ferramentas de diálogo roteirizado desaparecem"* → **e2.1**: ganham camada de restrição e validação; o roteiro vira cerca, não conteúdo.
- *"O jogo vira relação"* → **e8.1**: a conta vira ativo afetivo e o custo de abandono sobe, empurrando o modelo de negócio — porque "vira relação" não é efeito, é metáfora.

**Placar da rodada adversarial:** 5 descartados, 2 reconectados, 3 mantidos com ressalva, 2 reescritos. Sobreviveram 27 efeitos (10 de primeira ordem, 12 de segunda, 5 de terceira), em 5 ramos com profundidade 3 — acima do mínimo de 3 exigido pela Fase 4.

A skill manda perguntar ao usuário se ele quer reprocessar alguma disrupção. Não havia a quem perguntar. **Registro da resposta que eu daria:** a Disrupção 3 é a mais frágil das três, porque quase toda a sua evidência de consequência vem por analogia com companheiros de IA, e não de jogos. Se houvesse uma segunda rodada, seria nela.

### 12.4. Buscas feitas, e o que cada uma mudou

1. `generative NPC LLM game agent runtime 2026` — trouxe a literatura, não o produto. Primeira pista da consistência de longo prazo como problema aberto.
2. `Inworld AI Convai NVIDIA ACE NPC 2026 status` — o reposicionamento da Inworld foi o primeiro sinal contra a narrativa fácil.
3. `inZOI Krafton Smart Zoi on-device SLM` — o dado que ancora a Disrupção 2. Release da Krafton bloqueado; usada a página da NVIDIA.
4. `Retail Mage Steam generative AI NPC Jam&Tea` — levou ao relato do estúdio, a fonte mais informativa do conjunto.
5. `Ubisoft NEO NPC 2026 Teammates` — deu a escala (25 → 80 pessoas) e a frase sobre behavior tree com camada de LLM.
6. `Steam Valve AI disclosure policy` — levou à documentação de parceiros, fonte primária.
7. `SAG-AFTRA video game agreement AI 2025` — o eixo trabalhista, ausente do enunciado do tema.
8. `Modbox GPT-3 NPC February 2021` — confirmou a data e derrubou o nome próprio que eu havia suposto.
9. `EU AI Act Article 50 chatbot 2026 NPC` — e a verificação contra o FAQ da Comissão, que produziu o Erro 1.
10. `generative agents Park Stanford Smallville` — genealogia da arquitetura de memória e reflexão.
11. `Brasil PL 2338 marco legal IA 2026` — mapeado, **não usado**: a tramitação (aprovado no Senado em 10/12/2024, relatório e votação previstos na Câmara para maio de 2026) não tem dispositivo específico sobre personagem de jogo, e enfiá-la no mapa seria decoração. Fica registrado como pendência: se o texto final trouxer dever de transparência análogo ao Artigo 50, e8.2 ganha um gatilho brasileiro datado.
12. `jogadores rejeição IA generativa jogos backlash 2026` — a virada do documento. Foi aqui que o mapa deixou de ser entusiasmado.
13. `Pesquisa Game Brasil 2026` — o recorte nacional, incluindo o dado de plataforma que sustenta e5.1.1.
14. `AI companion shutdown grief persistence` — a literatura de descontinuação, base de e8.1.1.
15. `GDC State of the Game Industry 2026` — a série 18% → 30% → 52%, que é o único dado longitudinal do documento.
16. `opengameagent open source runtime` — produziu o Erro 2 (OpenGame × OpenGameAgent) e o sinal fraco da seção 6.

### 12.5. Caminhos abandonados

- **A ponte com o tema 6 (simulação social como método) e com o tema 19 (companheiro digital)** foi deliberadamente deixada em aberto. A pergunta de terceira ordem do enunciado — o gênero "jogo" sobrevive? — está respondida só por e9.1, e mal. Um mapa que a levasse a sério precisaria tratar a classificação de produto como objeto próprio, e isso invade o tema 6.
- **Consumo energético e bateria** — nenhuma fonte aberta com medição de watts por hora de jogo com modelo local. É a lacuna mais incômoda da Disrupção 2, porque o argumento de que "o custo migra para o jogador" fica sem magnitude.
- **Desempenho de modelos pequenos em português brasileiro** — buscado, não encontrado em fonte aberta. Para o recorte nacional é o eixo, e o documento o declara em vez de estimar.
- **Números de uso real do Smart Zoi** — quantos jogadores de inZOI ativaram o recurso, e por quanto tempo. Não existe fonte independente. Sem isso, "embarcou em produto de massa" é afirmação sobre distribuição, não sobre uso — e o mapa a trata assim.
