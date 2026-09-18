---
tema: NPCs generativos e mundos vivos
slug: npcs-generativos-e-mundos-vivos
autor_login: alpa2
zona_de_interesse: Simulação e mundos
data: 2026-09-17
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 9
efeitos_ordem_2: 15
efeitos_ordem_3: 15
tecnologias_citadas: [modelos de linguagem pequenos em dispositivo, runtimes de agente para jogos (OpenGameAgent, SAGA), NVIDIA ACE, arquitetura PIANO de muitos agentes, geração estruturada com esquema, memória de longo prazo com recuperação, ReAct e uso de ferramenta, avaliação automatizada de comportamento, guardrails e detecção de injeção de prompt]
fontes: 7
confianca: media
experimento: Uma vila de dez agentes que roda 72 horas sem jogador, com orçamento fixo de tokens e um painel que mostra quanto custou cada decisão e quantas ficaram fora de personagem.
skill_usada: futurizacao-alpa2
publico_ok: false
---

## 1. Resumo

Mapa de futuro do tema **NPCs generativos e mundos vivos**, horizonte **2031**, para quem projeta
mídia e interação, recorte global com uma nota sobre o Brasil.

**Suposições adotadas no lugar de entrevista ao vivo** (esta rodada correu sem usuário disponível;
o Passo 1 da skill exige o registro por escrito): horizonte 2031 e público "quem projeta mídia e
interação" foram dados; descarte declarado = apenas a régua da disciplina (o que já é comum em
produto de massa fica fora das disrupções-raiz); viés = neutro; palpite de disrupção central = nenhum,
levantar do zero. Nenhuma outra suposição foi necessária. Ver seção 7.

A conclusão que organiza o mapa: **o NPC que conversa não é a disrupção — é a melhoria**. Diálogo
generativo torna mais barato e mais variado algo que a árvore de diálogo já fazia, e por isso foi
reprovado no primeiro teste do Passo 2 e mandado para a seção 3. O que rompe o contrato do design é
o personagem que **age** sobre o estado do mundo, **paga** por pensar, **continua** existindo sem o
jogador e **lembra** dele entre sessões. Essas quatro coisas são tecnicamente separáveis, têm curvas
de custo diferentes, e cada uma quebra uma coisa distinta: respectivamente, o controle do designer
sobre o espaço de eventos; a economia de um jogo vendido uma vez; a ideia de obra fechada; e a
fronteira entre jogo e relação.

O estado de 2026 é de contradição declarada, não de rampa: 52% dos profissionais de jogos dizem que
a IA generativa faz mal à indústria (contra 30% em 2025 e 18% em 2024), enquanto 36% a usam
[GDC 2026]. Entre os demos do Steam Next Fest de junho de 2026, 26,5% declararam IA — mas a fatia
declarada em **escrita e diálogo** é baixa e a de **conteúdo gerado ao vivo** é rara
[Llama & Griffin]. Ou seja: a indústria adotou IA na produção de arte e tradução, e **não** adotou o
personagem que pensa em tempo de execução. Isso é o oposto do que a cobertura de 2023–2024 previa, e
é o dado mais importante deste mapa.

Confiança geral: **média**. Alta na leitura do presente, média na primeira ordem, baixa na terceira —
como o método prevê.

## 2. O tema

O personagem não jogável tradicional é um roteiro: árvore de diálogo, máquina de estados, behavior
tree. Tudo o que ele pode dizer ou fazer foi enumerado por alguém antes de o jogo sair. O tema aqui é
o personagem que deixa de ser enumerado e passa a ser **um agente dentro das regras do mundo**:
recebe um objetivo, usa as ferramentas que o jogo expõe, olha o resultado da própria ação e revisa o
plano.

Isso importa para quem projeta mídia e interação por uma razão que não é técnica: rompe o contrato
implícito de que **o designer controla o espaço do que pode acontecer**. Todo o ferramental de
autoria de jogo — do roteiro à certificação etária, do teste de regressão ao balanceamento — pressupõe
esse controle. Se ele cai, cai junto a definição de bug, o método de teste, o modelo de custo e a
noção de obra acabada.

A fronteira com os vizinhos do programa: simulação social como método é outro tema; a *história*
gerada é outro tema. Aqui o objeto é o **personagem autônomo dentro de um mundo com regras** — e,
como consequência dele, o mundo que não para quando o jogador sai.

## 3. Onde isso está hoje

### O que já existe e funciona

- **Diálogo generativo em produto comercial.** *Retail Mage* (Jam & Tea Studios, 2024, Steam) usa IA
  generativa em tempo de execução para interpretar a intenção do jogador e mediar interações com
  clientes e objetos, com **geração estruturada** para conter a saída sem voltar ao roteiro rígido.
  O estúdio afirma explicitamente que **não** usou IA para a arte nem para as motivações,
  personalidades e missões dos clientes. Relatam dois achados que valem mais que a demo: no começo,
  cada sessão custava "um ingresso da Disneylândia", e eles derrubaram o custo em **três ordens de
  grandeza** operando GPU própria; e a alucinação virou recurso — personagem que erra uma lembrança
  improvisa bem.
- **Modelo pequeno rodando na máquina do jogador.** O *Smart Zoi* de *inZOI* (KRAFTON) roda um
  SLM **on-device** de ~0,5 B (Mistral NeMo Minitron) construído com NVIDIA ACE: o personagem decide
  ações sozinho, dá a razão declarada de cada uma e, enquanto "dorme", revisa o próprio comportamento
  do dia anterior. *NARAKA: BLADEPOINT* e *PUBG* têm iniciativas equivalentes de "co-playable
  character".
- **Runtime aberto de agente dentro do motor.** `OpenGameAgent` é um runtime C# de código aberto
  (Godot 4.7, Unity 6, Unreal 5.8, servidores .NET) com contexto estruturado, ReAct, uso de ferramenta
  e replanejamento — e com uma regra de arquitetura que é a peça central do tema: **o jogo continua
  autoritativo em toda fronteira de mutação**; a ferramenta valida antes de executar. Está em
  **alpha (0.3.0-alpha.4)**, ~50 estrelas, 84 commits. É protótipo de comunidade, não infraestrutura
  consolidada.
- **Simulação de muitos agentes como pesquisa.** *Generative Agents / Smallville* (Park et al., 2023,
  arXiv:2304.03442): 25 agentes com fluxo de memória, reflexão e planejamento; a partir de uma única
  instrução ("quero dar uma festa"), espalharam convites, marcaram encontros e apareceram na hora
  certa. *Project Sid* (Altera, 2024, arXiv:2411.00114): de 10 a mais de 1.000 agentes em Minecraft
  com a arquitetura PIANO, desenvolvendo papéis, moeda comum, regras coletivas e difusão cultural.
- **Ambiente aberto de personagens autônomos.** *Thistle Gulch* (Fable Studio) — vila de faroeste com
  mais de 15 personagens de história própria sobre o framework **SAGA**, aberto, com intervenção
  externa por API.
- **Protótipo de grande estúdio.** Ubisoft: *NEO NPC* (GDC 2024, com Inworld e NVIDIA) e depois
  *Teammates*, primeira experiência jogável em teste fechado, com comando por voz em tempo real.
  Protótipo e teste fechado — não produto.

### O que existe e não pegou

Esta é a parte que a maioria dos mapas de tendência omite.

- **Nenhum jogo de massa é jogado por causa dos seus NPCs de IA.** O diagnóstico de 2026 da Frisson
  Labs é direto: a economia é hostil (quanto mais o jogador conversa, mais o estúdio paga — árvore de
  diálogo escrita à mão é mais barata, mais controlável e mais fácil de testar); a novidade não
  retém (integraram companheiros de IA no Minecraft, a reação inicial foi boa, os usuários não
  voltaram); e o personagem continua estranho — prestativo demais, sabe demais, não se surpreende, não
  cresce, não interrompe, não persegue objetivo próprio.
- **Sentimento profissional em queda livre.** GDC 2026, mais de 2.300 respondentes: **52%** consideram
  o impacto da IA generativa negativo (30% em 2025, 18% em 2024); apenas **7%** positivo (13% em
  2025). Pior entre arte visual/técnica (64%), design e narrativa (63%) e programação (59%). O uso
  declarado é de 36%, concentrado em pesquisa/brainstorming (81%) e apoio a código (47%).
- **A adoção declarada não é de personagem.** No Steam Next Fest de junho de 2026, 1.163 de 4.382
  demos declararam IA (**26,5%**); no evento inteiro, ~1.700 de 8.682 (~20%). A distribuição:
  ~60% em ativos visuais, parcela menor em áudio, tradução comum, **escrita e diálogo em baixa
  frequência** e **conteúdo gerado ao vivo raro**. E apenas 1 dos 10 demos mais jogados tinha
  declaração de IA — subdesempenho de mais de 2,5× em relação à presença no conjunto.
- **A regra mudou de foco.** A Valve reescreveu o formulário de declaração em **16 de janeiro de
  2026**: declara-se a IA que **chega ao jogador**, não a que ajudou a construir. Isso desloca o peso
  regulatório exatamente para o objeto deste mapa.

### Onde passa a linha (aplicação da régua da disciplina)

Maduros, portanto fora das disrupções-raiz: árvore de diálogo, máquina de estados, behavior tree,
navegação e pathfinding, síntese de voz. **Diálogo generativo de NPC também fica aqui** — não porque
seja comum em produto de massa (não é), mas porque falha no primeiro teste do Passo 2: torna mais
barato, mais variado e mais multilíngue um diálogo que já se fazia. É melhoria, não ruptura. Ver
seção 8, item 1.

### Quem está construindo

Inworld AI, Convai, NVIDIA (ACE), KRAFTON, Ubisoft (La Forge), Jam & Tea Studios, Fable Studio
(SAGA/Thistle Gulch), Altera (PIANO), e a camada de comunidade aberta (OpenGameAgent, jams de itch.io).

### Nota sobre o Brasil

A Pesquisa Game Brasil 2026 (13ª edição, 7.115 respondentes de 16 a 55 anos, campo de 5 a 13 de março
de 2026) mostra um público que não rejeita a IA em bloco e também não a aceita de graça: **45,7%**
temem perda de emprego e degradação do processo criativo, **39,6%** temem uso não autorizado de obra
alheia, **38,4%** temem que o jogo perca "alma"; ao mesmo tempo, **39,3%** comprariam um jogo sabendo
que arte, voz e texto foram feitos por IA e **40,9%** talvez comprassem. O dado estrutural que muda o
mapa aqui é outro: **44,1% jogam principalmente em celular** (PC 21,1%, console 24%). Num mercado
majoritariamente móvel, a disrupção que depende de inferência local no dispositivo chega mais tarde e
mais rasa — é a assimetria registrada no efeito `e4.1.1`.

## 4. As disrupções-raiz

Quatro candidatas passaram nos três testes do Passo 2. Uma quinta (diálogo generativo) foi reprovada
e está na seção 3.

### D1 — O personagem age sobre o estado do mundo, com o jogo como autoridade

- **O que rompe.** Rompe a premissa de que o conjunto de eventos possíveis é enumerável pelo designer.
  Quando o personagem chama ferramentas do jogo, lê o resultado e replaneja, o autor deixa de escrever
  o que acontece e passa a escrever **o que é permitido acontecer**. Muda quem pode fazer o quê: o
  espaço de design migra do roteiro para o contrato de ferramenta.
- **Por que agora, e não há cinco anos.** Porque só agora existe o padrão arquitetural que torna isso
  seguro: runtimes que mantêm o **jogo autoritativo na fronteira de mutação**, com validação de
  permissão antes da execução (OpenGameAgent), e frameworks que geram e pontuam ações em vez de texto
  (SAGA). Em 2021, quando um NPC no Modbox ouviu, pensou com GPT-3 e falou, havia fala; não havia
  fronteira de ação verificável.
- **O que falta.** Custo por decisão ainda em cima do orçamento; ausência de método de teste para
  comportamento não determinístico; nenhum título de massa em que a **ação** (não a fala) seja dirigida
  por agente. Confirmado pelos números da Next Fest: conteúdo gerado ao vivo é raro.

### D2 — Cognição dentro do frame: inferência local, sem rede e sem fatura por token

- **O que rompe.** Rompe a economia que mata o NPC generativo. Hoje, quanto mais o jogador interage,
  mais o estúdio paga — o produto pune o engajamento. Um modelo pequeno rodando na máquina do jogador
  inverte isso e, de quebra, desliga a dependência de servidor.
- **Por que agora.** O *Smart Zoi* de *inZOI* mostrou um SLM de ~0,5 B decidindo ações em dispositivo;
  a Jam & Tea derrubou o custo de inferência em três ordens de grandeza com infraestrutura própria.
  As duas coisas juntas — destilação e controle de infraestrutura — não existiam em 2021.
- **O que falta.** A 0,5 B, a personagem é rasa; o orçamento de memória disputa com renderização;
  hardware mediano e celular ficam de fora; não há middleware maduro de "modelo de personagem".

### D3 — O mundo continua existindo sem o jogador

- **O que rompe.** Rompe a ideia de obra fechada e de mundo instanciado em torno do jogador. Se
  centenas de agentes seguem agindo, o jogo passa a ter **história que o designer não escreveu** e à
  qual o jogador chega atrasado.
- **Por que agora.** Arquiteturas de muitos agentes deixaram de ser demonstração de duas dezenas
  (Smallville, 25) e chegaram a mais de mil (PIANO), com papéis, moeda e regras emergindo sem roteiro.
- **O que falta.** Custo de simular o que ninguém está olhando; coerência em horizonte longo; e um
  problema de produto ainda não resolvido — como se conta ao jogador o que ele perdeu. Nenhum título
  comercial mantém isso de forma persistente.

### D4 — A personagem lembra: memória que atravessa sessões

- **O que rompe.** Rompe a fronteira entre jogo e relação. Um personagem que se refere ao que você fez
  há três semanas transforma a compra de uma obra em manutenção de um vínculo — com tudo o que isso
  arrasta: dado pessoal, dependência, luto no desligamento, e regras de idade.
- **Por que agora.** Porque o precedente regulatório já chegou no vizinho: em outubro de 2025 a
  Character.AI anunciou o fim da conversa aberta para menores de 18, em vigor desde 25 de novembro de
  2025, depois de processos e mortes associadas ao uso prolongado. A pergunta deixou de ser hipotética
  e virou requisito de conformidade — e jogos com personagem aberto estão do mesmo lado da linha.
- **O que falta.** Não há padrão de portabilidade nem de exclusão de memória de personagem; a
  classificação etária ainda avalia conteúdo declarado, não capacidade de improvisar; e nenhum estúdio
  de jogo assumiu publicamente a operação de memória de longo prazo em escala.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: D1 — O personagem age sobre o estado do mundo, com o jogo como autoridade
    efeitos:
      - id: e1
        ordem: 1
        efeito: O escopo do jogo deixa de ser enumerável e o designer passa a declarar regras e ferramentas em vez de listar eventos possíveis.
        sinal: medio
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O teste de jogo troca a pergunta "este caminho funciona" pela pergunta "que fração das partidas fica dentro do aceitável", com suítes estatísticas e agentes-jogadores.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Surge nos estúdios a função de engenheiro de avaliação de comportamento, com carreira separada do QA tradicional.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A camada de ferramentas do jogo vira o documento de design de fato, porque é ela que delimita o que o personagem pode fazer.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: A formação em design de jogos passa a ensinar desenho de espaço de ação e contrato de ferramenta antes de ensinar roteiro.
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O bug deixa de ser estado inválido e passa a ser comportamento fora de personagem, medido por julgamento e não por asserção.
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Estúdios publicam política de conduta de personagem e canal de denúncia de fala de NPC, como já fazem com chat entre jogadores.
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: A responsabilidade pelo que a personagem diz migra do roteirista para o estúdio como operador de serviço e passa a constar de contrato e de apólice.
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: O jogador passa a atacar o personagem por texto, como hoje explora física e colisão, e a injeção de prompt vira metajogo.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Speedrun e exploit se reorganizam em torno de persuadir o sistema em vez de burlar a física, mudando o que a comunidade reconhece como habilidade.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: O custo variável por sessão entra na planilha de design e o projeto passa a orçar cognição como orça memória de vídeo.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: A hierarquia de cognição — poucos personagens caros e muitos baratos — se firma como padrão de arquitetura, análoga ao nível de detalhe gráfico.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Cognição vira opção no menu de configuração, como resolução e sombra, e a experiência narrativa passa a depender do hardware do jogador.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Modelos de assinatura e de sessão limitada reaparecem em jogos de um jogador só, porque o custo do estúdio não termina na venda.
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: A expectativa de comprar um jogo e mantê-lo para sempre se erode também fora do multijogador, e a preservação de obra vira pauta legislativa.
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: D2 — Cognição dentro do frame, no dispositivo, sem rede e sem fatura por token
    efeitos:
      - id: e4
        ordem: 1
        efeito: Personagens com cognição própria passam a rodar offline e o mundo vivo deixa de depender de servidor.
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: O teto de qualidade do personagem passa a ser o hardware do jogador, criando duas experiências distintas do mesmo jogo.
            sinal: medio
            prazo: 2029
            confianca: alta
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Mercados majoritariamente móveis, como o brasileiro, recebem versões com personagens rasos, e a assimetria vira pauta de acesso cultural.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Modelos pequenos especializados em personagem, e não em conhecimento geral, viram insumo de mercado vendido como middleware.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Poucos fornecedores de modelo de personagem passam a definir como as ficções soam, do mesmo modo que poucos motores definem hoje como os jogos se movem.
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: Trocar o cérebro de um NPC fica tão fácil quanto trocar uma textura, e o modding de personalidade se torna trivial.
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Comunidades distribuem personalidades como pacotes, inclusive as que o estúdio proibiu.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A disputa sobre quem responde pela fala de um personagem modificado chega às lojas e aos tribunais, e assinatura de cérebro vira requisito de publicação.
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: D3 — O mundo continua existindo sem o jogador
    efeitos:
      - id: e6
        ordem: 1
        efeito: O jogo passa a ter história que o designer não escreveu, produzida na ausência do jogador.
        sinal: fraco
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Voltar ao jogo deixa de ser continuar e passa a ser se atualizar, e surge a interface de notícia do mundo.
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Acompanhar um mundo passa a competir com jogá-lo, e o consumo de jogo se aproxima do consumo de série e de rede social.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Estúdios precisam de curadoria contínua do mundo, uma vigilância editorial que não existia em jogo de um jogador só.
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: A distinção comercial entre jogo e serviço de simulação perde sentido, e a classificação etária passa a avaliar processo em vez de conteúdo.
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: Pesquisa social e jogo passam a usar a mesma infraestrutura de agentes, e o mundo de jogo vira instrumento de estudo.
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Estúdios se tornam fonte de dado comportamental de interesse acadêmico e comercial sobre populações sintéticas.
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Comitês de ética passam a exigir protocolo para pesquisa em mundos sintéticos, definindo quem consente pelo agente e pelo jogador observado.
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: D4 — A personagem lembra, e a memória atravessa sessões
    efeitos:
      - id: e8
        ordem: 1
        efeito: O personagem se refere ao que o jogador fez em sessões anteriores, e o jogo passa a ser uma relação continuada.
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Desligar o servidor ou descontinuar o modelo passa a ser vivido como perda, e não como fim de suporte técnico.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Surge demanda por exportar e portar o personagem, e com ela a primeira disputa séria sobre a propriedade de um vínculo.
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: Regras de idade e de segurança escritas para companheiros digitais passam a alcançar jogos com personagem aberto.
            sinal: medio
            prazo: 2029
            confianca: alta
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: A certificação etária passa a avaliar a capacidade de improvisar do sistema, e não só o conteúdo declarado, reescrevendo o processo de aprovação.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: O histórico do jogador com a personagem vira dado pessoal sensível, sujeito a retenção, vazamento e pedido de exclusão.
        sinal: medio
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: Estúdios passam a operar políticas de dado e de exclusão no mesmo nível de uma plataforma social.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: A LGPD e equivalentes entram no pipeline de produção como requisito de design, e não como anexo jurídico ao final.
                sinal: fraco
                prazo: 2031
                confianca: media
```

### O que o YAML não diz

**As quatro disrupções brigam entre si, não se somam.** D2 (inferência local barata) é o que torna D3
(mundo persistente) economicamente pensável — mas D2 impõe um modelo pequeno, e modelo pequeno produz
personagem raso, que é exatamente o que mata a retenção segundo o diagnóstico da Frisson Labs.
Barateando, a tecnologia piora a qualidade do efeito que precisaria vender. Esse é o nó do tema, e
nenhum nó da roda sozinho o expressa.

**A tensão entre `e3` e `e3.2` é uma bifurcação, não uma cadeia.** Se o custo por decisão cair rápido,
o orçamento de cognição vira detalhe de engenharia e a assinatura no jogo de um jogador só nunca
acontece. Se cair devagar, `e3.2` acontece e é impopular. As duas rotas produzem 2031 muito
diferentes, e o mapa não escolhe entre elas — só registra que a segunda tem sinal fraco.

**`e2.2` (injeção de prompt como metajogo) é o único efeito com precedente cultural forte.** Toda
comunidade de jogo transforma o espaço de exploração técnica em esporte. A literatura de segurança
mostra que guardrails caem com modificações triviais — capitalização aleatória, espaçamento de
caracteres, embaralhamento —, com taxas de evasão que chegam a 100% em alguns sistemas testados. A
diferença é que, num jogo, isso não é incidente: é diversão. A consequência para o design é que o
guardrail não pode ser a última linha; a **fronteira de mutação autoritativa** do jogo é que precisa
ser, porque ela é determinística e o modelo não é.

**A terceira ordem de D4 é a mais frágil e a mais importante.** `e8.1.1` (propriedade de um vínculo) é
quase uma pergunta jurídica sem jurisprudência. Mantive com confiança baixa em vez de cortar, porque o
precedente da Character.AI mostra que essa classe de questão chega antes do que a indústria espera —
e chega por processo judicial, não por consulta pública.

**Onde parei de ramificar.** Cortei toda derivação que terminava em "muda a cultura" ou "a sociedade se
adapta": não é efeito, é ausência de análise. Ver seção 12.

## 6. Sinais fracos e wildcards

**Sinais fracos observáveis hoje:**

1. **A declaração de IA na Steam mudou de objeto em 16/01/2026** — passou a valer o que chega ao
   jogador. A regra está se reorganizando em torno do conteúdo gerado em tempo de execução antes de
   esse conteúdo existir em escala. Quando o regulador se move antes do mercado, costuma ser porque
   alguém já viu o protótipo.
2. **Personagem que revisa o próprio comportamento durante o "sono"** (Smart Zoi). É uma decisão de
   design minúscula com uma implicação enorme: o personagem tem um ciclo de melhoria fora da
   interação, ou seja, existe quando você não está lá. É D3 entrando por D2, num produto comercial.
3. **"Alucinação como recurso"** (Jam & Tea). Se o erro de memória do personagem for lido como
   improviso e não como defeito, toda a métrica de qualidade do campo está apontada para o lugar
   errado — e o vale de qualidade some por redefinição, não por progresso técnico.
4. **O runtime de agente de jogo com jogo autoritativo na fronteira de mutação** (OpenGameAgent,
   alpha, 50 estrelas). É pequeno demais para importar hoje; é exatamente o formato de coisa que, se
   um motor adotar, vira padrão em dois anos.
5. **Subdesempenho dos demos com IA declarada** (1 entre os 10 mais jogados, contra 26,5% do
   conjunto). Pode ser estigma, pode ser qualidade. Se for estigma, inverte quando um bom jogo sair;
   se for qualidade, não inverte.

**Wildcards (baixa probabilidade, alto impacto):**

- **Um NPC generativo vira celebridade sem autor.** Um personagem de um jogo pequeno ganha público
  fora do jogo — clipes, contas, fãs — e o estúdio descobre que não controla o que ele diz nem quem o
  hospeda. A pergunta de licenciamento ("quem é o titular dessa figura?") não tem resposta pronta e
  arrasta contrato de dublagem, direito de imagem e responsabilidade editorial de uma vez.
- **Um incidente sério com menor de idade dentro de um jogo com personagem aberto.** É o wildcard de
  maior impacto regulatório: replicaria em jogos, de uma vez, o que levou dois anos no mercado de
  companheiro digital, e provavelmente por decisão de loja, não de legislador — o que seria mais
  rápido e menos negociável.
- **Um motor grande embute runtime de agente por padrão.** Se Unreal ou Unity entregarem a camada de
  ferramenta e avaliação junto com a engine, a barreira de adoção some para todo mundo ao mesmo tempo
  e o mapa acelera três anos.
- **O caminho oposto: uma loja grande cria selo "sem IA em tempo de execução"** e ele vira sinal de
  qualidade. A tecnologia continua existindo e é empurrada para um nicho, como aconteceu com
  microtransação em jogo premium.

## 7. Contra o próprio mapa

**1. Qual efeito é só extrapolação linear do presente?**

`e3.1` (hierarquia de cognição como padrão) e `e3.1.1` (cognição no menu de configuração) são a curva
do "nível de detalhe gráfico" esticada para outro recurso. É elegante demais para ser confiável: supõe
que cognição se degrada suavemente como resolução se degrada, e ela não degrada assim — um personagem
com metade do orçamento não fica meio interessante, fica incoerente. **Revisado:** `e3.1.1` teve a
confiança rebaixada e o prazo empurrado para 2031; mantido no mapa porque a pressão de produto existe,
não porque a analogia funcione.

`e6.1` (interface de notícia do mundo) também é extrapolação: assume que o jogador quer saber o que
perdeu. O precedente de jogo como serviço sugere o contrário — o resumo de ausência costuma ser lido
como cobrança.

**2. Qual efeito assume velocidade de adoção sem precedente comparável?**

`e8.2` (regra de idade de companheiro alcançando jogos) assume, em três anos, um alinhamento
regulatório que no mercado de companheiro digital levou de 2023 a 2025 e só veio depois de mortes e
processos. Há precedente comparável, e ele é **mais rápido** do que o normal em regulação de jogo —
por isso mantive confiança alta, contra a minha intuição inicial de baixa.

Já `e1.1` (teste estatístico como norma) assume que a indústria adota um método de QA novo em três
anos. Não encontrei precedente comparável de mudança de método de teste nessa velocidade em jogos; a
adoção de teste automatizado levou mais de uma década. Mantive em confiança média e prazo 2029 no
sentido de "existe e é reconhecido", não de "é padrão".

**Efeito descartado.** Cortei um efeito de primeira ordem que havia escrito na primeira passagem: *"o
NPC generativo se torna padrão de mercado e a árvore de diálogo é abandonada até 2031"*. Ele
contradiz o único conjunto de dados sólidos que este mapa tem: 52% de rejeição profissional em alta,
escrita/diálogo em baixa frequência nas declarações da Steam, conteúdo gerado ao vivo raro, e nenhum
jogo de massa jogado por causa disso. Era o efeito que o tema "pede" e que os dados negam. Cortado, não
rebaixado.

Cortei também *"o custo de inferência cai a zero e a questão econômica desaparece"* — extrapolação
linear na direção oposta, com o mesmo defeito do efeito anterior.

**3. Qual disrupção-raiz pode simplesmente não se concretizar?**

**D3 é a mais frágil.** Simular o que ninguém está observando é puro custo sem retorno de
engajamento; a saída de engenharia óbvia é simular sob demanda e fabricar um passado plausível quando
o jogador chega — o que entrega o efeito narrativo sem a disrupção. Se D3 cair, `e6` e `e7` e suas
seis derivações caem junto. O mapa **não** desmorona: D1, D2 e D4 são independentes dela e sustentam
dois terços dos efeitos.

**D2 é a mais provável e a menos interessante sozinha.** Se só D2 acontecer, o resultado de 2031 é
personagem local, barato e raso — a tecnologia amadurece sem romper nada, que é justamente o critério
declarado como "o que me faria mudar de ideia".

**D1 é a que sustenta o mapa.** Se o personagem não ganhar agência sobre o estado do mundo, o tema
inteiro volta a ser uma melhoria de diálogo — e o documento certo seria um de três páginas dizendo
isso.

**4. Que viés entrou aqui?**

- **Viés declarado:** neutro, sem preferência por otimismo ou pessimismo.
- **Suposições adotadas por ausência de usuário nesta rodada** (a entrevista do Passo 1 não pôde ser
  feita ao vivo): descarte = apenas a régua da disciplina; palpite de disrupção central = nenhum;
  público e horizonte = dados no enunciado. Nenhuma pergunta ficou sem resposta substantiva, então o
  risco de adivinhação é menor do que o normal — mas ele existe, e o mapa não foi validado por
  ninguém que conheça o tema de dentro.
- **Viés da própria skill:** o Passo 2 é construído para **rejeitar** candidatos. Isso protege contra
  entusiasmo e cria o erro oposto — descartar uma tecnologia que está prestes a virar por não estar
  virada ainda. O diálogo generativo mandado para a seção 3 pode ser exatamente esse caso.
- **Viés das fontes.** Cinco das sete fontes lidas na íntegra são anglófonas e ligadas ao mercado de
  PC e console. A única fonte brasileira é de consumo, não de produção. O mapa enxerga melhor o que
  acontece na Steam do que o que acontece no celular — o que é sério, dado que o celular é 44,1% do
  mercado brasileiro.
- **Viés de recência.** O diagnóstico de 2026 que mais pesou neste mapa (Frisson Labs) é um post de
  blog de um praticante, não um estudo. Ele é coerente com os números de GDC e de Steam, e por isso
  foi usado — mas está fazendo trabalho de âncora acima do que a sua natureza sustenta.

## 8. O que a máquina errou

**1. Classifiquei a disrupção errada na primeira passagem.** Comecei com "NPC que conversa por modelo
de linguagem" como disrupção-raiz — é o que o tema sugere, o que a imprensa chama de disrupção e o que
qualquer leitura rápida aceitaria. Ao aplicar o teste 1 do Passo 2 por escrito ("o que isso rompe?"),
a resposta honesta foi: torna o diálogo mais barato, mais variado e mais multilíngue — coisas que a
árvore de diálogo já fazia pior. Isso é melhoria incremental, e pela regra da própria skill vai para a
seção 3. **Desconfiei porque a resposta veio fácil demais**: quando o "o que rompe" pode ser escrito
com três adjetivos comparativos, não há ruptura.

**2. Contradição entre fontes sobre o Retail Mage, resolvida contra o agregador.** Resumos de
imprensa descreviam o jogo como tendo "clientes movidos por IA generativa com pedidos improváveis",
sugerindo motivações e missões geradas. O texto do próprio estúdio afirma o oposto: **não** usaram IA
para arte, nem para motivações, personalidades ou missões dos clientes — a IA opera como mestre de
jogo interpretando a intenção do jogador, com geração estruturada. Prevaleceu a fonte primária. O erro
importa porque a versão do agregador tornaria o jogo uma prova de D3, e ele não é.

**3. Errei a data na minha própria busca.** Procurei pela restrição da Character.AI a menores como
sendo de "outubro de 2026". O anúncio é de **outubro de 2025**, com vigência desde **25 de novembro de
2025**. Se eu tivesse aceitado a data que eu mesmo digitei, teria datado `e8.2` um ano à frente e a
cadeia inteira de D4 sairia deslocada. Desconfiei porque a matéria devolvida era de 2025 e a busca era
de 2026 — divergência entre a data pedida e a data do material é sinal de que o errado é o pedido.

**4. Descartei números de mercado que caíram redondos demais.** Apareceu, num agregador de SEO, "mercado
global de IA generativa em jogos de US$ 1,79 bilhão em 2026, 36% de adoção pelos estúdios, CAGR de
23,2%". Nenhum método, nenhuma amostra, nenhuma casa de pesquisa citada. Não usei nada disso. O
detalhe suspeito é o "36% de adoção" coincidir com o 36% de uso individual da pesquisa da GDC — cheira
a número reciclado com outro rótulo.

**5. Tinha dois números concorrentes para a adoção na Steam e escolhi pelo método, não pelo tamanho.**
Circulam "20% do catálogo", "40% dos lançamentos de uma semana de junho" e "4.300 jogos". Adotei os do
relatório que declara denominador e recorte (1.163 de 4.382 demos = 26,5% no Next Fest de junho de
2026; ~1.700 de 8.682 no evento) e tratei os demais como ordem de grandeza. A tentação era usar os 40%
porque é o número mais impressionante.

**6. Não consegui abrir a fonte primária da Pesquisa Game Brasil.** O site da Adrenaline devolveu HTTP
403. Os percentuais brasileiros vêm de uma cobertura secundária (PSX Brasil) que declara amostra
(7.115) e campo (5 a 13/03/2026). Registro como leitura de segunda mão: os números não foram
conferidos contra o relatório da PGB.

**7. Inflei a terceira ordem antes de rebaixá-la.** Na primeira passagem, `e1.1.1`, `e2.1.1` e
`e6.2.1` saíram com confiança média. Não havia razão para isso além de o texto soar melhor. Rebaixados
para baixa, que é a resposta esperada na terceira ordem.

## 9. Três cenários para 2031

### Provável — "a camada fina"

O personagem generativo está em todo lugar e não é o motivo de nada. A inferência local resolveu o
custo, e por isso o que roda na máquina do jogador é pequeno: o NPC improvisa a fala, responde fora do
script, fala a língua do jogador — e continua sem perseguir objetivo próprio. Os estúdios adotaram a
arquitetura de hierarquia de cognição: dois ou três personagens com agência de verdade por jogo, e o
resto com uma camada de conversa por cima do mesmo behavior tree de sempre. A palavra "NPC de IA"
sumiu do marketing, como sumiu "física realista" — virou infraestrutura sem nome.

O que mudou de fato foi o pipeline: existe um time de avaliação de comportamento em todo estúdio médio
para cima, a declaração de IA em loja virou rotina, e a camada de ferramenta é onde o design mora. A
promessa de mundo vivo continua em demo. O jogador brasileiro, no celular, joga a versão com o
personagem raso.

### Desejável — "a autoria se desloca, não desaparece"

A mesma base técnica, com uma diferença de método: a indústria tratou o problema como **design de
restrição**, não como capacidade de modelo. O que foi construído entre 2027 e 2030 foi o ferramental
que faltava — bancada de avaliação de comportamento aberta, contratos de ferramenta padronizados por
motor, memória de personagem exportável pelo jogador, e um vocabulário compartilhado para "fora de
personagem" que permite comparar jogos.

O resultado não é um NPC mais inteligente: é um autor que consegue escrever *o espaço* em vez da
*sequência*, e testar o que escreveu. O mundo persistente existe em alguns jogos e é uma escolha
estética entre outras, não a promessa do campo. A memória entre sessões é do jogador, portável, e
apagável — o que desarmou boa parte da questão regulatória antes de ela virar crise.

**O que teria que acontecer:** um motor grande liberar a camada de avaliação junto com o runtime
(sem isso, cada estúdio reinventa e só os grandes conseguem); e alguém fazer um jogo bom o suficiente
para que o atributo deixe de ser estigma — porque hoje ele é, e o subdesempenho dos demos com
declaração de IA é a medida disso.

### Indesejável — "o vale sem fundo"

Um incidente sério com um menor dentro de um jogo com personagem aberto, ou um vazamento de histórico
íntimo de conversa com personagem, chega antes de existirem padrão e ferramenta. A resposta vem das
lojas, não do legislador: regra dura, rápida e mal desenhada — algo como proibir geração em tempo de
execução em qualquer título abaixo de determinada faixa etária. O custo de conformidade fica alto
demais para o estúdio pequeno, e a tecnologia se concentra em três ou quatro fornecedores que podem
pagar auditoria. O modding de personalidade é empurrado para fora das lojas e prospera sem nenhum
freio.

Em paralelo, os estúdios que já tinham investido cobram a conta: assinatura no jogo de um jogador só,
cognição como nível de serviço, personagem que "esquece" no plano barato. A ideia inteira fica
associada a extração, e a parte interessante — o personagem que age dentro das regras de um mundo —
morre junto com a parte tóxica.

**Sinal precoce:** uma loja grande criar regra de IA em tempo de execução por faixa etária **antes**
de existir qualquer padrão público de avaliação de comportamento. Se a regra vier antes da métrica, é
este cenário.

## 10. O experimento

**A vila de 72 horas com hodômetro.**

**O que é.** Dez agentes numa vila pequena — pode ser o `Thistle Gulch` (aberto, com API de
intervenção) ou um mundo mínimo em Godot com `OpenGameAgent`. Cada agente tem objetivo próprio,
memória e um conjunto declarado de ferramentas validadas pelo mundo. A simulação roda **72 horas
seguidas sem nenhum jogador**. Três instrumentos em cima:

1. **Hodômetro de cognição:** custo por decisão, decisões por hora, custo acumulado, em tempo real.
2. **Painel de fora-de-personagem:** um segundo modelo, barato, julga uma amostra das ações contra a
   ficha do personagem e marca as que não fecham. Só amostra — julgar tudo custa mais que simular.
3. **Diário do mundo:** o que aconteceu, gerado automaticamente, para ser lido por alguém que não
   estava lá.

No fim das 72 horas, um jogador entra pela primeira vez e é entrevistado: o que ele entende do que
perdeu, e se isso o faz querer ficar.

**Que pergunta sobre o futuro ele ajuda a responder.** Três, e as três são as que o mapa não resolve:
(a) **D3 é pagável?** — o hodômetro responde com número, não com opinião; (b) **a coerência aguenta o
horizonte longo?** — a taxa de fora-de-personagem ao longo de 72 horas mostra se ela é estável ou se
degrada, e degradação é o que separa mundo vivo de ruído; (c) **um mundo com história que ninguém
escreveu é interessante para quem chega depois?** — a entrevista final é o teste que a Frisson Labs
diz que ninguém passou.

**Que tecnologia emergente ele usa, e por que a madura não serve.** Runtime de agente com uso de
ferramenta validada pelo mundo e replanejamento a partir do resultado observado; memória persistente
com recuperação; avaliação por modelo-juiz. Uma behavior tree produziria as mesmas 72 horas de
atividade por um custo próximo de zero — e é exatamente por isso que não serve: ela não tem o
comportamento que se quer medir (a decisão fora do que foi enumerado) nem o custo que se quer medir
(o preço por decisão). O experimento existe para medir as duas coisas que a tecnologia madura, por
definição, não tem.

**O que faria a pessoa que testar mudar de ideia sobre o mapa.**

- Se as 72 horas custarem pouco e a taxa de fora-de-personagem ficar **estável**: D3 é mais próxima do
  que este mapa diz, `e6` merece prazo mais curto e sinal mais forte.
- Se o custo for aceitável mas a coerência **degradar** com o tempo: a disrupção não é de custo, é de
  arquitetura de memória — e o mapa inteiro deveria ter uma quinta raiz sobre consolidação de memória.
- Se o jogador que chega no fim **não se importar** com nada do que aconteceu: D3 não é disrupção de
  produto, é curiosidade de pesquisa, e a seção 4 tem uma raiz a menos.
- Se o hodômetro mostrar que a maior parte do custo está em agentes que ninguém observa: confirma que
  a saída de engenharia é fabricar o passado sob demanda — o que mata D3 por elegância, não por preço.

## 11. Fontes

**Lidas na íntegra (7).**

1. `https://www.frisson-labs.com/ai-npcs-2026` — "It's 2026… where are all the AI NPCs?". Sustenta o
   diagnóstico central da seção 3 (economia hostil, ausência de retenção, vale da estranheza) e o
   corte do efeito "NPC generativo vira padrão até 2031" na seção 7. **Confiabilidade:** post de blog
   de praticante, com experiência própria relatada (companheiros de IA em Minecraft) mas sem método
   nem dado público. Usado como leitura de campo, não como evidência — e é a fonte que mais pesa acima
   do que a sua natureza sustenta (registrado na seção 7).
2. `https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/`
   — State of the Game Industry 2026. Sustenta os percentuais de sentimento e uso (52% negativo, 7%
   positivo, 36% de uso, recorte por disciplina, +2.300 respondentes). **Confiabilidade:** alta para
   sentimento declarado; é survey voluntário com viés de autosseleção conhecido, e série histórica de
   três anos comparável.
3. `https://www.llamagriffin.com/Data/SteamNextFestJune2026/part-2.html` — relatório de declaração de
   IA no Steam Next Fest de junho de 2026. Sustenta 1.163/4.382 demos (26,5%), ~1.700/8.682 no evento,
   a distribuição por tipo de uso (visual ~60%, escrita/diálogo baixa, conteúdo ao vivo raro) e o
   subdesempenho (1 dos 10 mais jogados). **Confiabilidade:** alta em método — declara denominador,
   recorte e limitação; é análise independente de dado público de loja.
4. `https://www.jamandtea.studio/news/making-retail-mage-a-new-approach-to-ai-in-games` — texto do
   próprio estúdio sobre o *Retail Mage*. Sustenta: IA como mestre de jogo em tempo de execução,
   geração estruturada, recusa de gerar arte/motivações/missões, custo inicial altíssimo e redução de
   ~1000×, alucinação como recurso. **Confiabilidade:** fonte primária e a melhor disponível sobre o
   caso, com o viés esperado de quem defende a própria decisão de produto.
5. `https://arxiv.org/abs/2304.03442` — Park et al., *Generative Agents: Interactive Simulacra of
   Human Behavior* (abril de 2023). Sustenta a linha de base de simulação de agentes (25 agentes,
   memória, reflexão, planejamento, a festa de Dia dos Namorados). **Confiabilidade:** alta; artigo
   revisado e amplamente replicado, e é o marco metodológico do campo.
6. `https://github.com/EricSun0218/OpenGameAgent` — runtime C# aberto de agente para jogos. Sustenta a
   descrição de D1 (jogo autoritativo na fronteira de mutação, ReAct, replanejamento) e o estado de
   maturidade (alpha 0.3.0-alpha.4, ~50 estrelas, 84 commits). **Confiabilidade:** alta para o que é
   verificável no repositório; é projeto de uma pessoa, e as métricas sociais servem justamente para
   dimensionar isso.
7. `https://psxbrasil.com.br/pesquisa-game-brasil-2026/` — cobertura da Pesquisa Game Brasil 2026.
   Sustenta os percentuais brasileiros (45,7% / 39,6% / 38,4% / 39,3% / 40,9%), a amostra (7.115), o
   campo (5 a 13/03/2026) e a divisão por plataforma (móvel 44,1%). **Confiabilidade:** média —
   cobertura secundária; a fonte primária (relatório da PGB) não foi aberta, e o site da Adrenaline
   devolveu HTTP 403. Ver seção 8, item 6.

**Consultadas apenas pelo resumo de busca, não abertas (marcadas como tais, não citadas como prova).**
Usadas para localizar fatos que aparecem no texto em nível de existência, não de número:
`press.krafton.com` e `nvidia.com/geforce` (Smart Zoi, CPC, SLM de ~0,5 B Mistral NeMo Minitron via
NVIDIA ACE); `arxiv.org/abs/2411.00114` e `github.com/altera-al/project-sid` (Project Sid, PIANO,
10 a 1.000+ agentes); `github.com/fablestudio/thistle-gulch` e `blog.fabledev.com` (SAGA, vila com
mais de 15 personagens); `news.ubisoft.com` e o PDF de imprensa da Ubisoft (NEO NPC, *Teammates*);
`blog.character.ai/u18-chat-announcement/` e cobertura associada (fim da conversa aberta para menores,
anúncio de outubro de 2025, vigência em 25/11/2025); `techpowerup.com` (mudança do formulário da Valve
em 16/01/2026); `arxiv.org/abs/2504.11168` (evasão de guardrails por modificações triviais).

**Afirmações sem fonte, que são especulação da skill** — não atribuídas a ninguém: toda a seção 5 a
partir da segunda ordem; os três cenários da seção 9; todos os wildcards da seção 6; e a leitura de
que a fronteira de mutação autoritativa, e não o guardrail, é a linha de defesa correta num jogo
(seção 5) — é inferência minha a partir da arquitetura do OpenGameAgent somada à literatura de evasão,
não uma recomendação que alguma dessas fontes faça.

**Não foi encontrada fonte para:** qualquer dado sobre estúdios brasileiros usando IA em tempo de
execução (o número "metade dos estúdios usa IA" apareceu em resumo de busca sem fonte primária
localizável e foi descartado); custo médio por sessão de um NPC generativo em produção fora do relato
da Jam & Tea; e qualquer avaliação pública de coerência de agente em horizonte superior a algumas
horas — que é exatamente a lacuna que o experimento da seção 10 ataca.

## 12. Anexo — o levantamento bruto

### Buscas realizadas, em ordem

1. `generative NPC LLM game 2026 Inworld Convai state of adoption` — devolveu majoritariamente
   conteúdo de SEO (aivexify, solidaitech, tech-insider, loreweaver). Uma coisa útil: o post da
   Frisson Labs. Descartei o resto por ausência de método.
2. `"Retail Mage" Steam AI NPC generative game` — localizou o texto do estúdio. Aqui apareceu a
   contradição da seção 8, item 2.
3. `Steam AI content disclosure policy generative AI games percentage 2026` — três números
   concorrentes (20%, 40%, 4.300 jogos). Levou ao relatório do Llama & Griffin, que é o único com
   denominador.
4. `inZOI Smart Zoi on-device small language model NVIDIA ACE CPC krafton` — confirmou o SLM de 0,5 B
   e o detalhe do "sono" que virou sinal fraco nº 2.
5. `Ubisoft NEO NPC prototype generative AI characters outcome 2026` — confirmou a evolução NEO NPC →
   *Teammates*, ainda em teste fechado. Mantido como protótipo, não como produto.
6. `Altera "Project Sid" 1000 agents Minecraft civilization simulation paper` — PIANO, mercado com
   gemas, constituição votada, difusão de pastafarianismo. Espetacular e pouco útil como evidência de
   produto; usado só para dimensionar a escala técnica de D3.
7. `Fable "Thistle Gulch" SAGA simulation AI characters developer` — SAGA aberto, runtime livre no
   itch.io. Virou a base do experimento da seção 10.
8. `Character.AI minors ban open-ended chat October 2026 ...` — a busca com a data errada (ver seção
   8, item 3).
9. `Brasil jogos indie IA generativa NPC 2026 mercado desenvolvedores pesquisa` — PGB 2026. Também
   devolveu "1.042 desenvolvedoras ativas, 13 mil profissionais, 60% MEI/ME, 5% com venture capital" —
   números interessantes mas de fonte não identificada no resumo; **não usados no corpo do
   documento**, registrados aqui para quem quiser rastrear.
10. `GDC State of the Game Industry 2026 survey generative AI percentage developers negative` — a
    fonte mais sólida do conjunto.
11. `testing QA non-deterministic LLM NPC guardrails game jailbreak prompt injection player` —
    literatura de segurança. Sustentou `e2.2` e a prosa da seção 5; nenhum desses artigos trata de
    jogos, o que é uma lacuna do campo digna de nota.

### Buscas que não deram em nada

- Adrenaline (PGB): HTTP 403, duas tentativas. Contornado por cobertura secundária.
- Não encontrei nenhum estudo sobre **retenção** em jogos com NPC generativo. Todo o argumento de "não
  retém" do mapa repousa num relato anedótico de um único time (Frisson Labs). É a fraqueza mais séria
  da evidência deste documento.
- Não encontrei nenhuma métrica pública de "fora de personagem" ou benchmark de coerência de NPC ao
  longo do tempo. Se existisse, seria a métrica que organiza o campo — a ausência dela é o que torna o
  experimento da seção 10 valer a pena.
- Não encontrei nada sobre estúdio brasileiro usando agente em tempo de execução.

### Rodadas descartadas

**Primeira lista de disrupções-raiz (descartada quase inteira):**

- "NPC conversacional por LLM" — reprovada no teste 1. Movida para a seção 3. Esta é a repetição exata
  do erro documentado no `DUVIDAS.md` desta skill (o caso do monitor contínuo de glicose): fato
  correto, classificação errada, e só o teste por escrito pega.
- "Voz sintética de NPC em tempo real" — reprovada no teste 3: já está em produção e em uso comum.
- "Tradução e dublagem geradas" — reprovada no teste 1 e no teste 3. É o uso mais declarado na Steam,
  ou seja, maduro pela régua da disciplina.
- "Geração procedural de missão" — reprovada no teste 2: existe desde os anos 1980 e a versão com
  modelo de linguagem não cruzou limiar identificável. Ficou fora sem menção no corpo.

**Efeitos cortados durante a derivação:**

- "O NPC generativo vira padrão de mercado até 2031" (1ª ordem) — cortado na seção 7, contra os dados.
- "O custo de inferência cai a zero e a questão econômica desaparece" (2ª ordem) — extrapolação
  linear invertida.
- "A profissão de roteirista de jogos desaparece" (3ª ordem) — não é efeito, é manchete. O efeito
  específico e defensável é `e1.2.1` (a formação muda de ordem), que é mais modesto e mais provável.
- "Tudo vira simulação e o gênero jogo deixa de existir" (3ª ordem) — cortado por ser genérico demais,
  exatamente a regra de parada do Passo 5. A pergunta permanece interessante para a roda de discussão;
  não é uma afirmação.
- "A IA generativa reduz o custo de produção de jogos" (1ª ordem) — verdadeiro e irrelevante: vale
  para qualquer tema com IA, e o enunciado pediu para excluir as ideias que servem para qualquer tema.
- "Jogadores vão preferir NPCs de IA" (1ª ordem) — sem evidência, e o único dado disponível aponta na
  direção contrária (subdesempenho dos demos com declaração).

**Ajustes de confiança feitos na segunda passagem:** `e1.1.1`, `e2.1.1`, `e6.2.1` rebaixados de média
para baixa; `e3.1.1` rebaixado e adiado para 2031; `e3.2` rebaixado de médio/média para fraco/baixa
após a crítica da seção 7; `e8.2` **elevado** para confiança alta, contra a intuição inicial, por
haver precedente comparável e mais rápido que o normal.

**Nota de método.** Este documento foi produzido sem entrevista ao vivo: as cinco respostas do Passo 1
vieram por escrito no enunciado da rodada. A skill exige o registro dessa condição, e ela está na
seção 1 e na seção 7. O que não foi possível fazer — e que mudaria o mapa — é a segunda pergunta que
uma entrevista real permite: perguntar de volta, depois de ver a primeira versão.
