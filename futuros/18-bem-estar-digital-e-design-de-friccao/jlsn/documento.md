---
tema: Bem-estar digital e design de fricção
slug: bem-estar-digital-e-design-de-friccao
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
tecnologias_citadas: ["design de fricção", "nudge e self-nudge", "bloqueadores e ferramentas de autocontrole digital", "verificação de idade (age assurance)", "NFC", "e-ink", "impressão sob demanda", "dumbphones e aparelhos de função única", "extensões de navegador que reescrevem interface alheia", "launchers minimalistas Android", "agentes de IA com limite de uso embutido", "modelos multimodais que leem tela para inferir intenção", "harness de agente de código com ganchos de bem-estar", "auditoria algorítmica de design"]
fontes: 14
confianca: media
experimento: Pedágio de Atenção
skill_usada: futurizacao-jlsn
publico_ok: false
---

## 1. Resumo
Depois de vinte anos otimizando engajamento, a fricção virou recurso de projeto — e, em 2026, deixou de ser escolha do usuário. No Brasil, o ECA Digital (Lei 15.211/2025) entrou em vigor em 17 de março e transformou design viciante em dever de prova; na União Europeia, o Digital Fairness Act está previsto para Q4 de 2026 com mira em dark patterns e design aditivo. Ao mesmo tempo, o bloqueador de app virou commodity — 439 repositórios só no tópico `digital-wellbeing` do GitHub — e a inovação migrou para o formato da intervenção: hardware, papel, ritual, humor. A terceira frente é a mais nova: o objeto da fricção está saindo da rede social e indo para o agente de IA, onde "menos tempo" pode significar menos capacidade, e não mais sossego. O mapa aposta em três rupturas — fricção como obrigação jurídica, fricção como objeto físico, fricção aplicada ao agente — e registra a evidência que as ameaça: a proibição australiana para menores de 16 anos falhou em três meses, com mais de 8 em cada 10 adolescentes ainda usando as plataformas.

## 2. O tema
Bem-estar digital, aqui, não é a aba de estatísticas do sistema operacional. É o campo de projeto que trata a interface como algo que pode ser desenhado para ser usado **menos** — e que, por isso, inverte o pressuposto padrão de mídia e interação, no qual retenção é sucesso e atrito é defeito. O objeto é reduzir, interromper e recuperar a atenção: capa que tampa a câmera, telefone impresso em papel, tag NFC que trava o aparelho, ícone falso que impõe pausa, extensão que deixa o site feio de propósito, desafio de matemática antes de abrir a rede.

Encosta em mídia e interação em três pontos duros. Primeiro, é design de interface no sentido estrito: a decisão sobre onde colocar o atrito é uma decisão de layout, de microinteração e de tempo. Segundo, é economia de mídia: a métrica que a fricção ataca — tempo de sessão — é a mesma que sustenta o modelo de receita de quase toda plataforma de conteúdo. Terceiro, é política de plataforma: quando a fricção deixa de ser instalada pelo usuário e passa a ser exigida por lei, o repertório de projeto de qualquer produto de mídia muda, inclusive para quem nunca pensou no assunto.

Merece um mapa porque o campo acabou de mudar de natureza. Até 2024, isso era um nicho de aplicativos de autocontrole com alta taxa de abandono. Em 2026, é obrigação legal em pelo menos uma jurisdição grande, é categoria de hardware com preço de prateleira, e é um problema aberto para uma tecnologia — o agente de IA — cuja intervenção de bem-estar ninguém sabe desenhar ainda.

## 3. Onde isso está hoje

**O que existe e funciona.** A fricção curta funciona no sentido estreito de reduzir aberturas automáticas. O padrão comercial é o `one sec`, que interpõe uma respiração e uma pergunta de deliberação antes de abrir o app-alvo; a empresa credita o efeito a interromper o automatismo e trocar a pergunta de "posso?" para "eu quero isso agora?", e declara colaboração com o Max Planck, Stanford, UCL e a autoridade de consumo dinamarquesa ([one-sec.app](https://one-sec.app/blog/friction-will-change-your-behavior/)). O lado acadêmico mais recente aponta para a reflexão estruturada, não para o corte: o WellScreen pede à pessoa que **estime** o próprio uso antes de ver o número real, e registra tanto o erro sistemático de percepção (subestima-se produtividade e rede social; superestima-se entretenimento) quanto um ganho de 10% em afeto positivo ([arXiv 2509.21860](https://arxiv.org/abs/2509.21860)). Do lado das plataformas, a fricção já é default para adolescente: desde novembro de 2025 o TikTok interrompe o feed de menores de 18 com meditação guiada às 22h, com um segundo aviso em tela cheia se a pessoa insistir, e afirma "dezenas de milhões" de usuários na função ([TikTok Newsroom](https://newsroom.tiktok.com/introducing-a-new-way-to-unwind-reset-and-recharge-on-tiktok2?lang=en)).

**O que existe e não funciona.** Fricção longa irrita e não sobrevive ao hábito. Num teste com 30 participantes, obrigar a reagir a cada post para liberar o próximo melhorou significativamente a lembrança do conteúdo — e a maioria achou a interface frustrante ([arXiv 2407.18803](https://arxiv.org/abs/2407.18803)). Fricção imposta de fora falha pior ainda: três meses depois de a Austrália proibir contas de menores de 16 anos, a própria eSafety mediu que mais de 8 em cada 10 continuavam usando; o uso diário caiu de 60% para 58%, e cerca de metade disse que a plataforma simplesmente nunca checou a idade ([Al Jazeera, 03/08/2026](https://www.aljazeera.com/news/2026/8/3/australias-under-16-social-media-ban-failing-study-shows-what-it-means)). E a intervenção curta genérica também não se sustenta sozinha: num estudo de 14 dias com 22 participantes, o que segurou o engajamento foi deixar a própria pessoa reescrever o prompt — personalização por coautoria, não a mensagem pronta ([arXiv 2605.29051](https://arxiv.org/abs/2605.29051)).

**Quem está construindo.** Três camadas, com densidades muito diferentes. A camada comunitária é longa e rasa: 439 repositórios no tópico `digital-wellbeing` do GitHub, liderados por launchers minimalistas (Olauncher, 3,8 mil estrelas), bloqueadores (Curbox, 1,3 mil) e clientes modificados que amputam a parte viciante de um produto alheio (FeurStagram, 907, que remove Reels e feed do Instagram e preserva as mensagens) ([GitHub Topics](https://github.com/topics/digital-wellbeing)). A camada de design autoral é curta e influente: o Paper Phone, feito pelo estúdio Special Projects para o programa Digital Wellbeing Experiments do Google, imprime num papel dobrável os contatos, mapas e compromissos do dia — código aberto, ainda no ar ([Experiments with Google](https://experiments.withgoogle.com/paper-phone)). A camada de hardware é a que ganhou preço: reportagem de mercado atribui ao Statista uma alta de 25% nas vendas de dumbphones em 2025 e projeta 10% do mercado global de aparelhos até meados de 2026, contra 5% em 2024 — número secundário, de veículo fraco, que este mapa usa como indício e não como medida ([WebProNews](https://www.webpronews.com/dumbphones-surge-in-2026-boosting-focus-amid-digital-overload/)).

**E o regulador.** É a novidade de 2026. No Brasil, o Estatuto Digital da Criança e do Adolescente (Lei 15.211/2025) entrou em vigor em 17 de março: exige privacidade desde a concepção e proteção por padrão, proíbe publicidade por perfilamento comportamental para menores, veda o uso de dados pessoais para manipular emoções ou estimular consumo por recompensas digitais e microtransações, derruba a autodeclaração de idade como prova suficiente e põe a ANPD como fiscal, com multa, suspensão e proibição de operar ([Fundação Abrinq](https://www.fadc.org.br/noticias/eca-digital-entenda-nova-lei)). Na União Europeia, o Digital Fairness Act está anunciado com data indicativa de Q4 de 2026 e mira explícita em dark patterns, design aditivo, personalização injusta e cancelamento de assinatura ([Parlamento Europeu — Legislative Train](https://www.europarl.europa.eu/legislative-train/theme-protecting-our-democracy-upholding-our-values/file-digital-fairness-act)).

**A nota sobre o Brasil.** O país não é espectador desse tema por dois motivos. O primeiro é de exposição: o Brasil aparece em segundo lugar mundial em tempo de tela, com cerca de 56,6% das horas acordadas diante de telas, atrás só da África do Sul ([Jornal da USP](https://jornal.usp.br/atualidades/brasileiros-passam-em-media-56-do-dia-em-frente-as-telas-de-smartfones-computadores/)). O segundo é de calendário: o ECA Digital entrou em vigor **antes** da proposta europeia ser sequer apresentada. Em design de fricção obrigatória, o Brasil não está importando norma — está, neste momento, escrevendo uma.

**A fronteira que já se abriu.** Em agosto de 2025 a OpenAI passou a exibir lembretes de pausa no ChatGPT — "Você está conversando há um tempo — é uma boa hora para uma pausa?" — depois de relatos de dependência emocional e de falha do modelo em reconhecer sinais de delírio ([Engadget](https://www.engadget.com/ai/chatgpt-will-now-remind-you-to-take-breaks-following-mental-health-concerns-180221008.html)). E a pesquisa já ensaia o passo seguinte: um assistente que lê capturas de tela, títulos de janela e URLs com um modelo de linguagem para julgar se a atividade bate com a intenção declarada pela pessoa, testado por três semanas com 22 participantes contra lembretes por regra e contra uma linha de base passiva ([arXiv 2510.14513](https://arxiv.org/abs/2510.14513)).

## 4. As disrupções-raiz

### D1 — A fricção deixa de ser vontade do usuário e vira obrigação do produto

**O que rompe.** Rompe a premissa de que retenção é uma métrica livre. Enquanto a fricção era um aplicativo que a pessoa instalava, o desenho da plataforma seguia intocado e o ônus era do usuário: se ele não conseguia parar, o problema era dele. O ECA Digital inverte isso ao tratar design viciante como algo que a empresa precisa **provar** que não faz — a partir de 17 de março de 2026, para o público infantojuvenil, a autodeclaração de idade não basta e a manipulação emocional por dados vira ilícito com fiscal, multa e possibilidade de suspensão. Isso destrói um mercado (o da otimização de engajamento sem limite para esse público) e cria outro (o da prova auditável de que a interface é sóbria).

**Por que agora e não há 5 anos.** Em 2021 havia diagnóstico e nenhuma norma com dente. Três coisas mudaram: o custo atencional virou pauta pública com consenso suficiente para produzir lei; a União Europeia já tinha o precedente de fiscalizar desenho de interface via DSA, o que tornou pensável o passo seguinte (o DFA, Q4/2026); e apareceu uma jurisdição grande disposta a legislar antes do bloco europeu — a brasileira.

**O que falta acontecer.** Falta a ANPD publicar o que conta como verificação de idade aceitável e o que conta como prova de que o desenho não é aditivo. Sem esse critério operacional, a lei vira risco jurídico difuso — e risco difuso, historicamente, produz mais aviso de consentimento do que mudança de interface.

### D2 — A intervenção sai do software e vira objeto, ritual e corpo

**O que rompe.** Rompe o pressuposto de que o remédio para a tela é outra tela. A geração anterior de bem-estar digital era um app contra apps — e perdia, porque disputava atenção com o mesmo meio e no mesmo dispositivo, com uma desvantagem de orçamento de mil para um. O que a varredura da turma mostra é a saída desse ringue: capa que se vira para tampar a câmera, papel impresso de manhã, tag NFC que trava o aparelho, caixa trancável, aparelho de função única. O atrito passa a morar no mundo físico, onde não há loop de notificação para vencê-lo.

**Por que agora e não há 5 anos.** Porque o software dessa categoria virou commodity: 439 repositórios no tópico do GitHub, quase todos fazendo a mesma coisa, é a assinatura de um mercado saturado onde o próximo clone não vale nada. Quando a função satura, o valor migra para o formato. E o formato ficou barato: NFC, e-ink e impressão sob demanda custam pouco, e a manufatura em pequena escala deixou de exigir uma fábrica.

**O que falta acontecer.** Falta sobreviver ao segundo mês. Todo objeto de desconexão tem excelente desempenho na semana da compra; nenhuma evidência pública mostra retenção de capa, caixa ou tag em janela longa. E falta preço: enquanto o gesto custar o preço de um aparelho premium, ele é ritual de quem já tem sossego — não intervenção de quem precisa dele.

### D3 — O objeto da fricção migra da rede social para o agente de IA

**O que rompe.** Rompe a própria métrica do campo. Toda a fricção clássica pressupõe que menos tempo é melhor — a tela é consumo, e cortar consumo é ganho. Com um agente que faz o trabalho por você, isso deixa de valer: tempo com o agente pode ser produção, e interromper pode custar entrega. O dano que se quer evitar muda de nome: não é distração, é dependência e atrofia de capacidade. Os primeiros sinais são desajeitados justamente por isso — o lembrete de pausa do ChatGPT é uma peça de desenho de rede social aplicada a uma ferramenta de trabalho, e não tem como medir se interrompeu um vício ou uma tarefa.

**Por que agora e não há 5 anos.** Porque há cinco anos não havia uso diário de agente com volume para produzir dano observável, nem relato clínico associado. Agora há os dois, e a resposta da indústria já saiu do laboratório: lembrete de pausa em produto de massa em agosto de 2025, e ganchos de bem-estar dentro do harness de agente de código aparecendo na varredura da turma (`breakwatch`, `workshop-wellbeing-hooks`, `Claudeholic`).

**O que falta acontecer.** Falta a métrica. Ninguém sabe medir dependência de agente como se mede tempo de tela — e o único instrumento plausível hoje é o próprio modelo observando o que a pessoa faz, o que põe o interruptor na mesma classe técnica do distrator: um sistema que lê a tela inteira para decidir o que você deveria estar fazendo.

## 5. A roda dos futuros
```yaml
roda:
  - disrupcao: A fricção deixa de ser vontade do usuário e vira obrigação do produto
    efeitos:
      - id: e1
        ordem: 1
        efeito: Plataformas passam a produzir prova auditável de que a interface não é aditiva, como hoje produzem relatório de privacidade
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Surge uma função de conformidade de design, e a auditoria de engajamento vira serviço contratado de terceiros
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A métrica contratual de sucesso de produto migra de tempo por sessão para tarefa concluída por sessão
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O padrão brasileiro vira referência regional e produtos globais ganham um desenho específico para a jurisdição
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: A interface se fragmenta por jurisdição, e o mesmo aplicativo passa a ter quatro desenhos incompatíveis entre si
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O modo calmo vira padrão obrigatório para menores e recurso opcional para adultos
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: A fricção entra no pacote pago, e quem não paga continua recebendo o produto otimizado para retenção
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: O sossego vira bem de consumo estratificado por renda, e a desigualdade atencional passa a ser mensurável
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Reguladores classificam a calma paga como prática desleal e exigem paridade de bem-estar entre planos
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Neutralidade atencional entra no vocabulário de política pública como entrou a neutralidade de rede
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A intervenção sai do software e vira objeto, ritual e corpo
    efeitos:
      - id: e3
        ordem: 1
        efeito: Consolida-se uma categoria de acessório de desconexão com preço, prateleira e concorrência
        sinal: medio
        prazo: 2027
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Fabricantes de celular absorvem o gesto de fábrica, com chave física, tampa de câmera e perfis de dispositivo
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: O aparelho de função única retorna como periférico do celular, não como substituto dele
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: O ritual vira serviço, e escolas, escritórios e hotéis passam a vender zona sem tela com infraestrutura própria
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Estar presente sem dispositivo vira sinal de status, e a exceção passa a ser quem precisa continuar conectado
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Feiura, lentidão e humor entram no repertório legítimo de projeto de interface
        sinal: fraco
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Surgem padrões documentados de antipadrão intencional, com bibliotecas prontas e vocabulário compartilhado
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A fricção é capturada como estética, vira tema visual vendável e perde o efeito comportamental que a originou
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: A extensão de navegador se firma como camada de contra-design instalada por terceiros sobre produto alheio
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Abre-se disputa jurídica entre o direito de modificar a interface recebida e os termos de serviço da plataforma
                sinal: fraco
                prazo: 2030
                confianca: baixa
  - disrupcao: O objeto da fricção migra da rede social para o agente de IA
    efeitos:
      - id: e5
        ordem: 1
        efeito: Limites e pausas passam a ser embutidos na própria ferramenta de IA, e não no sistema operacional
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A métrica de bem-estar em IA deixa de ser tempo de uso e passa a ser dependência e perda de capacidade
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Avaliação de competência profissional e escolar passa a medir o que a pessoa entrega sem o agente
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: O ambiente de trabalho com agente embute pausa, limite de sessão e detecção de exaustão
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: O registro de bem-estar gerado pelo ambiente de trabalho vira dado de gestão e troca de dono sem trocar de nome
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: A fricção passa a ser calculada pelo próprio modelo, que julga a atividade contra a intenção declarada
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O interruptor vira a mesma classe de sistema que o distrator, porque ambos precisam observar a tela inteira
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Vigilância de bem-estar e vigilância de produtividade tornam-se tecnicamente indistinguíveis, e a disputa migra para governança
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: A intenção declarada vira uma camada de interface, e escrever para que serve a sessão passa a ser gesto rotineiro
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: O histórico de intenções declaradas se torna um perfil mais íntimo que o histórico de navegação
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

O bloco acima esconde três coisas que precisam ser ditas em prosa.

A primeira é que os três ramos não são independentes: eles competem pelo mesmo espaço. Se D1 se realiza plenamente — a plataforma é obrigada por lei a se conter —, boa parte de D2 perde razão de existir, porque ninguém compra uma capa para tampar a câmera de um produto que já não abusa. A relação entre os ramos é de substituição parcial, não de soma. Uma roda de futuros desenhada como árvore não consegue mostrar isso.

A segunda é que os prazos de 2031 na terceira ordem não são previsões de data; são marcadores de que aquele efeito só faz sentido depois que os dois anteriores existirem. A confiança `baixa` em todos eles não é modéstia retórica: é a leitura honesta de que a cadeia inteira depende de elos que ainda não fecharam.

A terceira é a assimetria de sinal entre os ramos. D1 e D3 têm sinal forte na primeira ordem porque já aconteceram — a lei está em vigor, os lembretes de pausa estão no produto. D2 é o ramo mais frágil do mapa e, ao mesmo tempo, o mais citado pela varredura da turma: a quantidade de artefatos de hardware e ritual é grande, mas nenhum deles tem evidência pública de retenção. Popularidade de repositório não é adoção, e o mapa não deve tratá-la como tal.

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — a estimativa antes do número.** O achado do WellScreen é discreto e desloca o campo: o valor não estava em mostrar o dado, estava em pedir à pessoa que adivinhasse antes. Se isso se confirmar, a intervenção que vence não é a que bloqueia, é a que produz erro de previsão — e o desenho muda de "barreira" para "espelho".

**Sinal fraco 2 — a coautoria do prompt.** No estudo de 14 dias, o que sustentou o engajamento foi deixar a pessoa reescrever a mensagem da intervenção. É um sinal contra toda a indústria de fricção pronta: talvez não exista fricção boa, só fricção escrita por quem vai recebê-la.

**Sinal fraco 3 — o cliente modificado.** FeurStagram tem 907 estrelas e faz algo juridicamente delicado: amputa a parte viciante do produto de outra empresa e devolve o resto. Não é bloqueador nem detox; é edição não autorizada de interface alheia. Se esse formato crescer, a disputa deixa de ser sobre autocontrole e vira sobre quem tem o direito de decidir como um aplicativo aparece na sua tela.

**Sinal fraco 4 — bem-estar dentro do harness do agente.** `breakwatch` e `workshop-wellbeing-hooks` põem a intervenção no mesmo lugar onde o trabalho acontece, e não no sistema operacional. É o tema 18 encontrando o tema 1, e é onde o desenho de fricção terá de ser reinventado do zero, porque a métrica antiga não serve.

**Wildcard — uma plataforma grande adota fricção deliberada por padrão e cresce com isso.** Baixa probabilidade, alto impacto. Hoje o movimento corporativo é defensivo: o TikTok liga meditação para menores às 22h, a OpenAI sugere pausa. Nenhum deles reduz voluntariamente engajamento adulto, porque a receita depende dele. O wildcard é uma plataforma de porte tratar a contenção como diferencial competitivo — anunciar publicamente que otimiza tarefa concluída em vez de tempo de sessão — e ganhar usuários. Se isso funcionar uma vez, a cópia é imediata, D1 perde a necessidade de coerção e o mapa inteiro se reescreve em dois anos. Se falhar publicamente uma vez, o assunto fica congelado por uma década.

**Contra-wildcard.** O simétrico também existe e é mais provável do que parece: a fricção obrigatória ser cumprida na forma de mais um aviso descartável — o equivalente atencional do banner de cookies. Aí a lei se cumpre, o desenho não muda, e o campo perde a credibilidade que levou quinze anos para construir.

## 7. Contra o próprio mapa

**Qual efeito é apenas extrapolação linear do presente.** O ramo e3 inteiro — a categoria de acessório de desconexão virando prateleira, sendo absorvida pelos fabricantes e voltando como periférico. É a projeção mais confortável do mapa: pega uma curva de vendas de dumbphone que já sobe e desenha mais dela. E a base é fraca. O número de 25% de alta em 2025 e 10% de mercado em 2026 vem de uma reportagem que o atribui ao Statista, não de fonte primária aberta — e nenhuma das minhas fontes sustenta que a compra de um aparelho simples se converta em uso sustentado. Extrapolar venda como se fosse adoção é exatamente o erro que o Hype Cycle avisa, e eu o cometi neste ramo.

**Qual efeito assume velocidade de adoção irreal.** O e1, com prazo 2027. Ele supõe que uma lei em vigor produz mudança de interface em dois anos. A melhor evidência disponível diz o contrário: a Austrália proibiu contas de menores de 16, e três meses depois mais de 8 em cada 10 continuavam usando, com metade relatando que a plataforma nunca checou a idade — queda de uso diário de 60% para 58%. Se a proibição mais dura já aprovada produziu dois pontos percentuais, a hipótese de que o ECA Digital produza prova auditável de desenho sóbrio até 2027 é generosa. O prazo realista de e1 é 2029, e o mapa deveria ter escrito isso.

**Qual disrupção-raiz pode não se concretizar e derrubar o mapa inteiro.** D1. Ela é o eixo: os efeitos de e1 e e2 dependem dela diretamente, e D2 só ganha escala por contraste com plataformas que continuam abusivas. D1 falha por um caminho banal — a lei ser cumprida na forma, não no desenho. Se a ANPD aceitar como prova de conformidade um relatório de processo e uma tela de verificação de idade, nada na interface muda; o design viciante continua, com documentação. É o precedente do consentimento de cookies, e ele é o desfecho mais provável quando a norma exige "prova" sem definir o instrumento. Se D1 cai assim, o mapa perde quatro dos seis efeitos de primeira ordem e vira uma descrição de nicho de produto — o que, aliás, é o que o tema era em 2023.

**Qual foi o viés desta análise.** Três, e o pedido era neutro. O primeiro é regulatório: eu tratei a lei como motor porque a lei tem data e as outras forças não têm, e data é fácil de escrever num mapa. Isso superestima o Estado e subestima o mercado, que historicamente moveu esse campo mais rápido. O segundo é anglófono e institucional: minhas fontes abertas são europeias, australianas, norte-americanas e uma brasileira institucional; não abri nenhuma fonte da cultura de uso real — nem r/nosurf, nem fórum de praticante —, que é justamente onde o tema tem sinal social. O terceiro é o viés do próprio material da disciplina: a varredura da turma me entregou uma lista de artefatos autorais e engraçados, e eu deixei essa lista pautar a disrupção D2 sem contrapor a ela nenhuma medida de retenção, porque não achei nenhuma. Um mapa mais duro teria dito, na D2, que a ausência de evidência de retenção é o fato central — e não uma ressalva de rodapé.

## 8. O que a máquina errou

## 9. Três cenários para 2031

* **Provável:** A obrigação legal vinga para menores de idade e trava em conformidade formal para adultos. Verificação de idade fica onerosa e mal resolvida; o desenho adulto muda pouco. A fricção se firma como recurso de projeto reconhecido — existe vocabulário, existem padrões, existe quem saiba fazer — mas circula sobretudo como diferencial de produto pequeno e como pacote pago de produto grande. O hardware de desconexão vira nicho estável e caro, sem se tornar mercado de massa. A frente de IA absorve a parte inovadora do campo: as intervenções interessantes de 2031 são sobre dependência de agente, não sobre rolagem infinita. O tempo médio de tela não cai.

* **Desejável:** A fricção passa de intervenção para requisito de projeto, e o campo troca a pergunta "como te faço parar?" por "como te mostro o que você mesmo quis?". Para isso, três coisas precisam ser feitas por quem projeta. Primeiro, publicar medição de retenção longa: toda intervenção com mais de seis meses de dados, com a taxa de abandono à vista, para que o campo pare de confundir lançamento com efeito. Segundo, transformar a coautoria em padrão — a pessoa escreve a própria fricção, como indica o estudo de 14 dias — em vez de distribuir mensagem pronta. Terceiro, e mais difícil, publicar uma métrica alternativa a tempo de sessão que uma empresa consiga defender num relatório trimestral; sem isso, "otimizar por tarefa concluída" continua sendo slogan. Nesse cenário o ECA Digital vira referência porque a ANPD definiu instrumento de prova verificável, e não porque a lei é severa.

* **Indesejável:** A fricção obrigatória vira o novo banner de cookies — todo mundo clica, ninguém lê, e o desenho não muda. Pior: a infraestrutura construída para medir bem-estar (o modelo que lê a tela para saber se você está cumprindo a própria intenção) é reaproveitada, sem qualquer mudança técnica, como vigilância de produtividade no trabalho e como controle parental irrestrito. O sossego fica no plano pago; quem não paga recebe o produto otimizado para retenção; e a desigualdade atencional passa a ser uma linha de receita. **Sinal precoce, observável em 2027:** o primeiro produto grande que anunciar "modo foco" como benefício de assinatura para adultos enquanto mantém o desenho padrão inalterado para a base gratuita. O segundo sinal, ainda mais nítido, é um painel de bem-estar cujos dados o empregador consegue ver.

## 10. O experimento

**Pedágio de Atenção** — um teste comparativo de *formato* de fricção, não de eficácia de bloqueio.

**Que pergunta responde.** Todas as quatro famílias de intervenção que a varredura encontrou fazem a mesma coisa — atrasar o acesso — e diferem só no formato: pausa temporizada, custo cognitivo, degradação estética e ritual físico. A pergunta é: **com o mesmo atraso, o formato muda o resultado?** E a pergunta que interessa mais, porque quase nunca é feita: **qual formato ainda funciona na segunda semana?**

**Que tecnologia usa.** Nada exótico, e por isso cabe na disciplina. Uma extensão de navegador (Manifest V3, JavaScript, cerca de 200 linhas) que intercepta a abertura de dois domínios escolhidos por cada participante e aplica, em rodízio, uma de quatro condições com o mesmo custo nominal de 20 segundos: (A) pausa temporizada com respiração, no padrão `one sec`; (B) custo cognitivo — uma conta de três parcelas para prosseguir, no padrão `PlugBrain`; (C) degradação estética — a página abre em escala de cinza, sem imagens, com serifa grande, no padrão `Reravel`; (D) ritual físico — a página só destrava depois de encostar o celular numa tag NFC deixada em outro cômodo, no padrão `paperweight`. Registro local: tentativa, condição, se desistiu, latência até a desistência, e uma pergunta única ao fechar a aba ("isso te ajudou ou te irritou?", escala de 1 a 5). Nada sai do navegador do participante sem exportação explícita.

**O que a turma faria para testar em sala.** Duas aulas, com dez dias entre elas. Na primeira, instalação, escolha dos dois domínios por pessoa e sorteio da ordem das condições — cada participante passa pelas quatro, dois dias em cada, em ordem diferente, para separar efeito de formato de efeito de novidade. Na segunda aula, cada um exporta o próprio CSV, a turma agrega e compara duas coisas na mesma tela: taxa de desistência por condição e **a inclinação da taxa ao longo dos dois dias**. Discussão fechada sobre uma pergunta só: qual condição envelheceu pior. A condição D funciona como controle de honestidade do experimento — é a única com custo físico real, e serve para medir quanto do efeito das outras três é só a surpresa da primeira vez.

**Qual resultado mudaria minha ideia.** Se as quatro condições produzirem taxa de desistência estatisticamente parecida, cai a tese central de D2: o formato não importa, só o atraso importa, e todo o mercado de hardware e ritual é embalagem — o mapa teria de ser reescrito com D2 rebaixada a sinal fraco. Se a condição C (degradação estética) se sustentar melhor que A (pausa temporizada) na segunda semana, isso reforça a leitura de que o campo está migrando de barreira para desenho, e aumenta a confiança em e4. E se **todas** decaírem juntas até perto de zero em dez dias — o desfecho que eu considero mais provável —, então o achado do experimento é o mais útil dos três: a fricção pontual não é a intervenção, é o gatilho; o que sustenta comportamento é reflexão estruturada, como sugere o WellScreen, e a disciplina deveria estar projetando espelhos, não pedágios.

## 11. Fontes
1. https://www.fadc.org.br/noticias/eca-digital-entenda-nova-lei — Fundação Abrinq: conteúdo e data de vigência do ECA Digital (Lei 15.211/2025, em vigor desde 17/03/2026), vedação de perfilamento e de recompensas digitais para menores, fim da autodeclaração de idade e papel fiscalizador da ANPD. Fonte institucional de organização especializada em direitos da criança; secundária em relação ao texto legal, alta confiabilidade quanto ao conteúdo da norma.
2. https://www.europarl.europa.eu/legislative-train/theme-protecting-our-democracy-upholding-our-values/file-digital-fairness-act — Parlamento Europeu, Legislative Train: status ("announced"), data indicativa (Q4/2026) e escopo do Digital Fairness Act, incluindo dark patterns e design aditivo. Fonte primária institucional, alta confiabilidade.
3. https://www.aljazeera.com/news/2026/8/3/australias-under-16-social-media-ban-failing-study-shows-what-it-means — cobertura do estudo da eSafety (ago/2026) sobre a proibição australiana para menores de 16: mais de 8 em 10 continuam usando, uso diário de 60% para 58%, ~81% mantiveram ou criaram contas, metade relata que a plataforma nunca checou idade. Jornalismo internacional relatando fonte regulatória primária; confiabilidade alta para os números, que são do regulador.
4. https://newsroom.tiktok.com/introducing-a-new-way-to-unwind-reset-and-recharge-on-tiktok2?lang=en — TikTok Newsroom (26/11/2025): meditação guiada ligada por padrão para menores às 22h, segundo aviso em tela cheia, "dezenas de milhões" de usuários, parceiros de pesquisa citados. Fonte primária da empresa; alta confiabilidade quanto ao que foi lançado, baixa quanto ao efeito (número autorreportado, sem metodologia).
5. https://www.engadget.com/ai/chatgpt-will-now-remind-you-to-take-breaks-following-mental-health-concerns-180221008.html — Engadget (04/08/2025): lembretes de pausa no ChatGPT, texto exato do aviso e contexto de dependência emocional. Imprensa de tecnologia estabelecida, confiabilidade média-alta.
6. https://one-sec.app/blog/friction-will-change-your-behavior/ — one sec: a tese comercial da fricção curta e as parcerias de pesquisa declaradas (Max Planck, Stanford, UCL, autoridade dinamarquesa de consumo). Fonte de fornecedor — usada aqui como declaração de posição, não como evidência de eficácia; a própria página não publica número próprio.
7. https://arxiv.org/abs/2407.18803 — Ruiz, Molina León e Heuer (MUC '24): fricção por reação obrigatória a cada post, 30 participantes; melhora significativa de recall e frustração majoritária com a interface. Preprint de artigo publicado em conferência, confiabilidade média (amostra pequena).
8. https://arxiv.org/abs/2509.21860 — WellScreen: sonda leve de reflexão diária que pede estimativa antes do dado real; erro sistemático de autopercepção e ganho de 10% em afeto positivo. Preprint, confiabilidade média.
9. https://arxiv.org/abs/2510.14513 — assistente de IA que compara atividade (capturas de tela, títulos de janela, URLs) com intenção declarada; estudo de campo de três semanas, 22 participantes, desenho intra-sujeitos contra lembretes por regra e linha de base passiva. Preprint, confiabilidade média; é a melhor evidência aberta que achei do desenho de fricção mediado por modelo.
10. https://arxiv.org/abs/2605.29051 — intervenções de um minuto em três domínios, 14 dias, 22 participantes: o que sustentou o engajamento foi a coautoria do prompt pelo próprio participante. Preprint, confiabilidade média.
11. https://github.com/topics/digital-wellbeing — 439 repositórios no tópico, com os líderes e as contagens de estrela (Olauncher 3,8k; Curbox 1,3k; FeurStagram 907; Zenith 456; Reef 343) e atualizações recentes de setembro de 2026. Fonte primária de plataforma; alta confiabilidade para contagem, nenhuma para adoção real.
12. https://experiments.withgoogle.com/paper-phone — Paper Phone, do estúdio Special Projects para o Digital Wellbeing Experiments do Google (out/2019), aberto e ainda disponível. Fonte primária do projeto, alta confiabilidade quanto à existência e à natureza do artefato.
13. https://jornal.usp.br/atualidades/brasileiros-passam-em-media-56-do-dia-em-frente-as-telas-de-smartfones-computadores/ — Jornal da USP (29/06/2023): Brasil em 2º lugar mundial em tempo de tela, ~56,6% das horas acordadas, a partir do Digital 2023 Global Overview Report (DataReportal). Fonte universitária relatando levantamento de terceiro; confiabilidade média e **desatualizada** — é de 2023, e foi usada só para situar a exposição brasileira.
14. https://www.webpronews.com/dumbphones-surge-in-2026-boosting-focus-amid-digital-overload/ — alta de 25% em vendas de dumbphones em 2025 e projeção de 10% do mercado global em meados de 2026, atribuídas ao Statista. **Confiabilidade baixa**: veículo secundário, sem link para o dado primário, texto apoiado em depoimentos. Mantida na lista por ter sido efetivamente aberta e por ser o único número de mercado que consegui ler; o mapa a trata como indício, não como medida.

## 12. Anexo — o levantamento bruto

### A entrevista (etapa a)

A skill exige parar e perguntar antes de gerar qualquer coisa. Esta execução ocorreu em lote, sem interlocutor humano disponível para responder em tempo real; as cinco respostas abaixo vieram pré-fornecidas no enunciado da rodada e foram tratadas como se fossem as respostas do usuário à entrevista. Nenhuma pergunta adicional foi feita, conforme instrução explícita da rodada.

| # | Pergunta da skill | Resposta recebida |
|---|---|---|
| 1 | Horizonte de tempo | 2031 |
| 2 | Público-alvo | Quem projeta mídia e interação |
| 3 | Recorte geográfico | Global, com uma nota sobre o Brasil |
| 4 | O que está fora do escopo | O que já é comum em produto de massa (a régua da disciplina); nenhuma outra exclusão |
| 5 | Viés desejado | Neutro |

Complementos que vieram junto e não constam das cinco perguntas da skill: profundidade em três ordens; modo de partida a partir de uma inovação/tema, e não de um setor; nenhuma disrupção suspeita pré-indicada ("descubra"); excluir ideias óbvias que serviriam para qualquer tema; e o critério declarado de mudança de ideia — evidência de que a adoção já passou da maioria inicial de Rogers, ou de que a tecnologia só melhora o que existe sem romper nada.

### Divergência de metadado, declarada

O enunciado desta rodada informa `zona_de_interesse: "Pessoas e dados"`. O formato de saída obrigatório da `futurizacao-jlsn` fixa o literal `zona_de_interesse: Sistemas de Informação`, sem campo variável entre colchetes. Obedeci ao literal da skill e registro aqui a divergência, para que o cabeçalho não seja lido como descuido. A instrução da rodada é executar a skill como o aluno a escreveu, sem corrigi-la.

### O filtro de maturidade (etapa b) e o quase-veto

A skill manda **recusar** o tema se ele for maduro ou apenas incremental. Apliquei o critério de verdade, e o tema quase foi recusado.

**Evidência que sustentaria a recusa.** (i) A régua da disciplina exclui o que já é comum em produto de massa — e contador de tempo de tela, bloqueador de app e modo "não perturbe" estão embarcados em iOS e Android há anos, com infraestrutura consolidada; é a definição de tecnologia madura no critério da própria skill. (ii) A intervenção já é default em plataforma de massa: o TikTok liga meditação para adolescentes às 22h desde novembro de 2025, e a OpenAI exibe lembrete de pausa desde agosto de 2025 — quando o incumbente já embarcou a função, o argumento de emergência enfraquece. (iii) Os 439 repositórios do tópico `digital-wellbeing` no GitHub são, em maioria, variações do mesmo bloqueador: cauda longa de clone é sinal de saturação, não de fronteira. (iv) Pelo critério de Rogers que o enunciado pediu, a fricção *como função* já passou da maioria inicial; ela vem pré-instalada.

**Evidência que sustenta prosseguir.** O que rompe paradigma não é a função, é o **estatuto** dela. Enquanto a fricção era opcional e instalada pelo usuário, o modelo mental "engajamento é métrica livre" permanecia intacto. O ECA Digital, em vigor desde 17/03/2026, converte design viciante em dever de prova da empresa, com fiscal e sanção — isso destrói um mercado existente (otimização irrestrita de retenção para o público infantojuvenil) e cria outro (conformidade auditável de desenho), que é exatamente a definição de disruptivo no critério da skill. Some-se a isso a migração do objeto para o agente de IA, onde a métrica tradicional do campo (tempo) deixa de valer, e há recorte defensável ainda emergente.

**Veredito: prosseguir**, com a ressalva registrada. A decisão é do executor e é discutível. A evidência que quase vetou o tema não foi descartada: ela virou o eixo da Seção 7 — em especial a leitura de que D1 pode se cumprir na forma sem mudar o desenho, que é o mesmo destino da fricção madura já embarcada.

### A autocrítica (etapa c)

Rodada antes da formatação, com as três perguntas obrigatórias da skill. As respostas estão na Seção 7. Registro aqui o que foi descartado no caminho: uma quarta acusação — a de que o mapa confunde *disponibilidade de artefato* com *adoção* — acabou incorporada às três respostas em vez de virar item próprio, porque aparece em todas elas.

### Afirmações não verificadas, nominalmente

Conforme a regra da rodada de citar apenas o que foi efetivamente aberto, as afirmações abaixo apareceram na varredura mas **não** estão na lista de fontes, porque as páginas não abriram. Nenhuma delas sustenta conclusão do mapa; ficam como pista de onde cavar.

- **CHI 2024, "A Longitudinal In-the-Wild Investigation of Design Frictions to Prevent Smartphone Overuse"** (Haliburton et al.): a formulação de que frições curtas reduzem tentativas de abertura e tornam as aberturas mais intencionais ao longo do tempo veio de resumo de busca. `dl.acm.org` devolveu HTTP 403 e o PDF do servidor da LMU não foi parseável. É provavelmente a melhor evidência longitudinal do campo e não consegui lê-la.
- **PNAS 2023, "Directing smartphone use through the self-nudge app one sec"** (Grüning et al.): os números de 1.039 usuários e média de 13,4 semanas vieram de resumo de busca; `pnas.org` devolveu 403 e o PubMed exigiu cookies. Por isso a Seção 3 cita o `one sec` pela página da própria empresa, e não por este artigo.
- **JMIR Formative Research 2026, e85349, "Restoring Engagement in Digital Self-Control Tools"**: o título indica exatamente o problema de abandono que este mapa atribui à categoria, mas nenhuma das três variantes de URL retornou conteúdo legível. A afirmação sobre alta taxa de abandono de ferramentas de autocontrole está sustentada, no corpo, apenas pelos dois preprints que abri.
- **Preço do Light Phone III (US$ 699)**: apareceu em resumo de busca; a loja do fabricante renderizou só o título. O número não foi usado no corpo.
- **eSafety Commissioner (página institucional)**: deu timeout. Os números australianos no corpo vêm da cobertura do Al Jazeera sobre o relatório do regulador, não da fonte primária.
- **Bain & Company, 9h32 de uso diário no Brasil**: resumo de busca, sem página aberta. Não usado; a Seção 3 usa o dado do Jornal da USP, que é de 2023 e está sinalizado como desatualizado na lista de fontes.

### Caminhos abandonados

- **Entrar pelo ângulo clínico** (vício comportamental, CID, tratamento). Descartado: o público definido é quem projeta mídia e interação, e o debate clínico deslocaria o mapa para saúde pública, onde eu teria de arbitrar uma controvérsia científica que não domino.
- **Fazer de "proibição para menores" uma disrupção-raiz autônoma.** Descartado depois de ler o dado australiano: proibição sem verificação de idade eficaz não rompe paradigma nenhum: em três meses moveu dois pontos percentuais. Virou evidência de contestação da velocidade de D1, na Seção 7, que é onde rende mais.
- **Tratar `dopa-mean` e `scroll-scold` (o ícone falso, a repreensão verbal) como ramo próprio de "fricção por humor e sátira".** Descartado por falta de qualquer evidência de efeito: são peças de crítica, e absorvê-las como disrupção seria confundir comentário com tendência. Sobraram dentro do e4, como repertório estético.
- **Usar r/nosurf e r/digitalminimalism como sinal social**, sugerido pelo material da disciplina. Não executado nesta rodada por limite de escopo da busca — e isso está declarado como viés na Seção 7, porque é justamente a camada de uso real que ficou de fora.
