---
tema: Agentes corporificados, IA física e modelos de mundo
slug: agentes-corporificados-ia-fisica-e-modelos-de-mundo
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
tecnologias_citadas: [modelos de mundo gerativos (Genie 3, Project Genie, NVIDIA Cosmos 3), agentes generalistas em mundos 3D (SIMA 2), modelos visão-linguagem-ação (Gemini Robotics 1.5 com Motion Transfer, pi0.5, GR00T N1), simuladores multi-física acelerados por GPU (Genesis World 1.0, Isaac Lab, MuJoCo), bancadas unificadas sim-e-real (RoboDojo), randomização de domínio e co-treino sim-real, certificação de comportamento autoevolutivo (Regulamento UE 2023/1230)]
fontes: 14
confianca: media
experimento: A turma executa a MESMA tarefa num mundo gerado por modelo e no corredor real, e mede em que ponto exato o mundo mentiu — e de quem é a culpa.
skill_usada: futurizacao-kvv
publico_ok: false
---

# Agentes corporificados, IA física e modelos de mundo

## 1. Resumo

A IA está saindo da tela e ganhando corpo, mas a ruptura não está no corpo: está no lugar onde o comportamento é aprendido. Até aqui, o simulador era um artefato escrito — código, malha, física declarada — que alguém podia ler, versionar e auditar. Em 2026 ele começa a ser substituído por um modelo que *gera* o ambiente: Genie 3 sustenta mundos interativos a 720p e 24 quadros por segundo, Project Genie os abriu a assinantes pagantes nos EUA em janeiro, e o Cosmos 3 da NVIDIA saiu com pesos abertos prevendo vídeo, som e ação num mesmo modelo. Ao mesmo tempo a política deixou de ser escrita para virar peso transferível entre corpos diferentes. O que isso quebra é a cadeia de prova: a máquina se comporta como o mundo em que treinou, e esse mundo agora é amostrado, não autorado. Para quem projeta mídia e interação, a consequência é direta — desenhar ambiente vira desenhar currículo de treino, e o nível de jogo, a loja e a calçada passam a ser lidos por dois públicos ao mesmo tempo.

## 2. O tema

Agente corporificado é o sistema cuja ação tem consequência física irreversível: um braço, um humanoide, um drone, um carro. IA física é o conjunto de modelos que produzem essa ação. Modelo de mundo é a peça nova: um modelo generativo que produz o ambiente — quadro a quadro, respondendo a comando — em vez de renderizar uma cena previamente construída.

O ponto de contato com mídia e interação não é o robô. São três outros. **Primeiro**, a interface: instruir uma máquina física passou a ser escrever uma frase, e o raciocínio intermediário do modelo, verbalizado em linguagem natural antes de agir, virou superfície de interação que alguém precisa projetar — quanto mostrar, quando interromper, como discordar. **Segundo**, o ambiente: se o agente aprende num mundo, quem desenha mundos (level designers, arquitetos de espaço, designers de serviço) passa a desenhar dado de treino, queira ou não. **Terceiro**, a obra: um mundo gerado por modelo não é arquivo, é amostra — não se edita uma porta, se reprompta — e isso desmonta a prática de autoria espacial como ela é ensinada hoje.

Isso exige mapa prospectivo, e não levantamento de estado da arte, por uma razão específica: o estado da arte aqui mede a coisa errada. As demonstrações públicas são excelentes e as taxas de sucesso em bancada padronizada são de um dígito. Um levantamento capturaria a demonstração; só um mapa de futuro consegue perguntar o que acontece com responsabilidade, trabalho, cidade e autoria quando essa distância entre o que se vê e o que funciona se fechar — ou não se fechar.

## 3. Onde isso está hoje

**O que funciona.** A geração de mundo interativo virou produto. Genie 3, anunciado em agosto de 2025, gera ambientes navegáveis em tempo real a 720p e 24 fps, mantém memória visual de cerca de um minuto e aceita eventos por texto (mudar o clima, inserir um personagem). Em 29 de janeiro de 2026 o Project Genie levou isso a assinantes Google AI Ultra nos EUA, maiores de 18 anos, com geração limitada a 60 segundos. Do lado dos pesos abertos, a NVIDIA lançou o Cosmos 3 em 31 de maio de 2026: uma arquitetura de mistura de transformadores que junta raciocínio visual, geração de mundo e predição de ação num sistema só, com adotantes nomeados em robótica (Agile Robots, Doosan, LG, Samsung, Skild AI) e em veículo autônomo (Li Auto). A transferência entre corpos também funciona: o Gemini Robotics 1.5 aprende de dados heterogêneos de múltiplos corpos por um mecanismo de *Motion Transfer* e intercala ação com raciocínio interno em linguagem. E o agente generalista transfere para mundos que nunca viu: o SIMA 2, da DeepMind, opera mundos fotorrealistas gerados na hora pelo Genie 3, orientando-se e agindo em geometria e assets que não estavam no treino. Do lado do simulador escrito, o Genesis World 1.0 (maio de 2026, Apache 2.0) unificou rígido, FEM, MPM, partículas e acoplamento explícito numa cena só, com renderizador próprio.

**O que falha.** A confiabilidade. O RoboDojo, bancada unificada de simulação e mundo real publicada em julho de 2026, mede 42 tarefas em simulação e 18 no mundo físico: a melhor política, a π0.5, atinge **12,8% de sucesso geral** nas 18 tarefas reais. O mundo gerado também falha onde importa: o Genie 3 sustenta coerência por poucos minutos, tem espaço de ação restrito, não dá conta de múltiplos agentes independentes num ambiente compartilhado e não representa lugares reais com fidelidade geográfica; o Project Genie declara, no próprio material, que os mundos podem não aderir à física real. A revisão de Aljalbout e colegas sobre a lacuna de realidade, aceita para o Annual Review of Control, Robotics, and Autonomous Systems de 2026, é explícita: simulação é abstração e aproximação, e as quatro famílias de solução conhecidas — randomização de domínio, transferência real-para-sim, abstração de estado e ação, e co-treino sim-real — reduzem a lacuna sem fechá-la. Há ainda uma crítica conceitual de fundo: Xing, Deng e Hou argumentam que gerar vídeo plausível não é o mesmo que modelar as possibilidades acionáveis do mundo, e que confundir as duas coisas é um erro de projeto, não de escala.

**Quem está construindo.** NVIDIA (Cosmos, Isaac, GR00T) e a Cosmos Coalition (Agile Robots, Black Forest Labs, Generalist, LTX, Runway, Skild AI); Google DeepMind (Genie, SIMA, Gemini Robotics); Physical Intelligence (π0.5); o campo aberto de simulação (Genesis, Isaac Lab, MuJoCo). No corpo físico, a implantação verificada é modesta e concentrada: a Figure acumulou 1.250+ horas e 90 mil peças na planta da BMW em Spartanburg num piloto de 11 meses; a Agility tem Digit em nove instalações de clientes (GXO, Schaeffler, Toyota Canadá, Mercado Libre) com mais de 65 mil horas de operação; a Tesla nunca publicou contagem de produção do Optimus; a Unitree embarcou cerca de 5.500 unidades em 2025 com o G1 partindo de US$ 16 mil.

**Nota sobre o Brasil.** O Brasil não é espectador, mas a corporificação aqui está no campo, não no chão de fábrica. O levantamento *State of Robotics Brazil 2026* (março de 2026) aponta densidade nacional de 18 robôs por 10 mil trabalhadores da manufatura contra média global de 151 — e, ao mesmo tempo, cerca de 45 mil drones agrícolas em operação, atrás apenas da China, com automotivo em 350 robôs por 10 mil na cintura industrial paulista. O mesmo levantamento não trata de IA corporificada nem de simulação: o país aparece como comprador de hardware implantado, não como produtor de mundo de treino. É uma assimetria que importa para este mapa — quem gera o mundo e quem opera a máquina podem estar em hemisférios diferentes.

## 4. As disrupções-raiz

### Disrupção 1 — O ambiente deixa de ser artefato autorado e passa a ser amostra de um modelo

**O que rompe.** Rompe a separação entre motor e conteúdo, que é a base de como se produz mundo digital desde os anos 1990. Num simulador escrito, o ambiente é um objeto: tem arquivo, tem versão, tem diff, tem revisão. Num modelo de mundo, o ambiente é uma amostra condicionada a prompt, semente e versão de pesos. Some a unidade sobre a qual se exerce autoria — e, junto, somem reprodutibilidade, revisão por pares e auditoria, que são pressupostos silenciosos de toda a engenharia de simulação atual.

**Por que agora, e não há cinco anos.** Porque três coisas fecharam quase juntas: geração interativa em tempo real com memória de curto prazo utilizável (Genie 3, agosto de 2025, 720p/24 fps, ~1 minuto de memória visual); disponibilidade comercial fora do laboratório (Project Genie, janeiro de 2026); e pesos abertos com predição de ação nativa, não só de pixel (Cosmos 3, maio de 2026). Em 2021 havia geração de vídeo condicionada; não havia mundo em que um agente pudesse agir e o efeito da ação persistisse por tempo suficiente para treinar alguma coisa.

**O que falta acontecer.** Persistência de estado além de minutos — hoje não há estrutura de memória sob a geração, o que impede inventário, progressão e consequência de longo prazo. Falta multiagente confiável em ambiente compartilhado. Falta editabilidade dirigida: o designer precisa poder travar uma geometria e amostrar o resto, e esse híbrido ainda não é padrão de produção. E falta a evidência que ninguém mostrou: que política treinada em mundo amostrado transfere melhor para o real do que política treinada em simulador escrito com randomização de domínio.

### Disrupção 2 — A política deixa de ser programa e vira peso transferível entre corpos

**O que rompe.** Rompe o acoplamento histórico entre um robô e o seu programa. Por décadas, comportamento de máquina foi código: escrito para aquele corpo, lido por um engenheiro, depurado linha a linha. Com modelos visão-linguagem-ação treinados em dados de corpos heterogêneos, o comportamento vira peso, e o corpo vira parâmetro. A consequência estrutural é que o fabricante do hardware deixa de ser quem determina o que a máquina faz — e o valor econômico escorre do corpo para a política e para quem cura o catálogo de políticas.

**Por que agora.** Porque o mecanismo de transferência entre corpos saiu do artigo e entrou no modelo de produto: o Gemini Robotics 1.5 traz o *Motion Transfer* explicitamente para aprender de dados multi-corpo, e intercala ação com raciocínio interno em linguagem natural em vários níveis; o GR00T N1 formalizou a divisão entre raciocínio lento e reflexo rápido; a π0.5 chega por fluxo de difusão. E o agente generalista provou transferência para ambiente estruturalmente novo: o SIMA 2 age em mundos do Genie 3 sem ter visto aquela geometria, aqueles assets ou o código do jogo.

**O que falta acontecer.** Confiabilidade, e a régua para medi-la. Os 12,8% da melhor política nas 18 tarefas reais do RoboDojo são o número que separa a demonstração do produto. Falta também uma ficha pública de corpo — alcance, torque, latência, tolerância — que permita casar política e hardware sem tentativa e erro. E falta um caminho de certificação: comportamento que muda com atualização de pesos não cabe no modelo de conformidade que o setor usa hoje.

### Disrupção 3 — O mundo de treino vira artefato de projeto e elo da cadeia de responsabilidade

**O que rompe.** Rompe a ideia de que ambiente é cenário. Se o comportamento da máquina é aprendido, então quem desenhou o mundo onde ela aprendeu desenhou parte do comportamento — e responde por ele. Isso desloca duas coisas ao mesmo tempo: a prática de design de espaço, que passa a ter um segundo leitor (a máquina), e a cadeia jurídica de responsabilidade, que hoje vai do produto ao fabricante e passa a precisar de um elo para o fornecedor do mundo.

**Por que agora.** Porque a norma chegou antes do consenso técnico. O Regulamento (UE) 2023/1230 é plenamente aplicável em **20 de janeiro de 2027**, sem período de transição, e trata pela primeira vez de máquinas com comportamento total ou parcialmente autoevolutivo baseado em aprendizado de máquina: essas categorias exigem avaliação por organismo notificado, não bastando autodeclaração, e o fabricante deve proteger as funções de segurança por toda a vida útil, com atualizações por dez anos. A colisão é limpa: a certificação passa a exigir evidência sobre um comportamento aprendido, e o lugar onde ele foi aprendido virou, em 2026, um mundo gerado por um modelo de terceiro. O relato do painel do SAE World Congress 2026 diz a mesma coisa pelo lado da engenharia: IA corporificada é problema de sistema e de governança de ciclo de vida, não de algoritmo.

**O que falta acontecer.** Falta método de evidência aceito: não existe procedimento consolidado para auditar cobertura, viés e lacuna de um gerador de mundo, como existe para um plano de teste. Falta jurisprudência — nenhum acidente teve, publicamente, causa-raiz atribuída ao simulador e não ao robô. Falta vocabulário contratual para licenciar ambiente como dado de treino, distinto de licenciar a imagem. E falta alguém arbitrar o conflito, ainda hipotético, entre legibilidade para pessoas e legibilidade para máquinas no espaço construído.

## 5. A roda dos futuros

```yaml
roda:
  - id: d1
    disrupcao: "O ambiente deixa de ser artefato autorado e passa a ser amostra de um modelo de mundo"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "O ambiente de teste deixa de ser entregável versionável — times passam a distribuir prompt, semente e versão de pesos em vez de cena, e reproduzir um teste vira problema de engenharia aberto"
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "Relatório de avaliação passa a exigir proveniência de mundo: semente, versão do gerador, prompt e identificador do rollout viram metadado obrigatório"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "Pipelines de integração contínua em robótica passam a fixar a versão do modelo de mundo como se fixa a de uma biblioteca, e atualizar o gerador vira evento de risco que dispara reteste completo"
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: "O carimbo de proveniência usado hoje para conteúdo sintético se estende ao dado de treino, e passa a ser possível perguntar a uma máquina em que mundos ela aprendeu"
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "O controle fino do projetista desaparece — não se move uma porta, se reprompta — e o desenho de ambiente se parte entre quem escreve o mundo e quem cura amostras"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Surge a função de curador de mundo, cuja entrega é um conjunto de rollouts aceitos e rejeitados com justificativa, e não um mapa"
                sinal: fraco
                prazo: 2031
                confianca: media
              - id: e1.2.2
                ordem: 3
                efeito: "Motores tradicionais reagem expondo âncoras editáveis dentro da geração — geometria travada, evento amostrado — e o híbrido vira o padrão de produção em vez da geração pura"
                sinal: medio
                prazo: 2032
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "O custo marginal de um ambiente novo cai perto de zero e o gargalo migra da autoria do mundo para a avaliação: gerar mil mundos fica barato, saber qual deles importa não fica"
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Bancada de avaliação deixa de ser lista fixa de tarefas e vira gerador de tarefas, e comparar dois sistemas passa a exigir acordo sobre a distribuição, não sobre o cenário"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "A disputa de desempenho migra do resultado para a distribuição de teste, e publicar a receita do gerador vira condição de aceite em conferência da área"
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "A escassez deixa de ser de mundo e passa a ser de contato real: hora de robô em ambiente físico vira o insumo caro e disputado do setor"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "Frota física compartilhada por assinatura — hora de braço, hora de chão, hora de pista — aparece como mercado, com fila, preço por hora e corretagem"
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - id: d2
    disrupcao: "A política deixa de ser programa e vira peso transferível entre corpos"
    efeitos:
      - id: e3
        ordem: 1
        efeito: "O comportamento da máquina deixa de ser código lido e vira peso ajustado, e o fabricante do corpo já não é quem determina o que ela faz"
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "O corpo vira periférico: um mesmo modelo dirige braços, humanoides e drones de fornecedores diferentes, e a diferenciação comercial escorre do hardware para a política"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Fabricantes passam a publicar ficha de corpo — alcance, torque, latência, tolerância, modos de falha — como especificação legível por máquina, do jeito que se publica interface de dispositivo"
                sinal: fraco
                prazo: 2031
                confianca: media
              - id: e3.1.2
                ordem: 3
                efeito: "Aparece o catálogo de políticas certificadas por par corpo-tarefa, e o valor se concentra em quem cura o catálogo, não em quem fabrica o braço"
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "Instruir máquina física vira escrever uma frase, e o raciocínio intermediário verbalizado antes da ação vira a superfície onde o operador confere a intenção"
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "O pensamento em voz alta da máquina vira artefato de interface a ser projetado — quanto mostrar, quando interromper, como discordar — e não um registro de depuração exposto por acidente"
                sinal: medio
                prazo: 2031
                confianca: media
              - id: e3.2.2
                ordem: 3
                efeito: "Instrução ambígua vira risco físico documentado, e surge gramática restrita de comando para tarefa crítica, como a fraseologia padronizada da aviação"
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: "A demonstração descola da confiabilidade: vídeos impecáveis convivem com taxa de sucesso de um dígito em bancada padronizada, e a discussão pública passa a ser sobre a régua"
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "Comprador institucional passa a exigir avaliação de terceiro com protocolo publicado antes de autorizar piloto, e o vídeo de demonstração perde função comercial"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Contrato de robô como serviço migra de preço por unidade para preço por tarefa concluída, com desconto por intervenção humana registrada"
                sinal: medio
                prazo: 2031
                confianca: media
          - id: e4.2
            ordem: 2
            efeito: "A máquina que falha bem passa a valer mais que a que acerta com brilho: parar, pedir ajuda e narrar o que não entendeu vira requisito de produto, não cortesia"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "Forma-se um repertório de sinalização corporal de incerteza — hesitar, recuar, orientar a cabeça — tratado como linguagem de interface e testado com usuário, não como enfeite de animação"
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - id: d3
    disrupcao: "O mundo de treino vira artefato de projeto e elo da cadeia de responsabilidade"
    efeitos:
      - id: e5
        ordem: 1
        efeito: "A prova de segurança passa a se apoiar em evidência de simulação, e quem certifica precisa auditar um mundo que nenhum humano escreveu"
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "O ambiente de treino entra na documentação técnica obrigatória: descrever em que mundo o agente aprendeu passa a valer como o esquema elétrico vale hoje"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Auditoria de mundo aparece como serviço próprio — verificar cobertura, viés e lacuna do gerador em vez de testar o robô — com método ainda em disputa"
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e5.1.2
                ordem: 3
                efeito: "Seguradora passa a precificar apólice pelo gerador de mundo usado no treino, e o mercado de simulação se estratifica entre certificado e livre"
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "Acidente cuja causa-raiz está no simulador, e não no robô, entra em relatório oficial, e a cadeia de responsabilidade ganha um elo que não existia"
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "Investigação de acidente robótico passa a reproduzir o mundo de treino, como a aviação reproduz o voo, e guardar a semente vira obrigação legal"
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: "Projetar espaço vira projetar currículo: quem desenha loja, hospital, calçada ou nível de jogo passa a desenhar também o que as máquinas vão aprender ali"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "Ambiente construído começa a ser especificado em duas leituras — a humana e a de máquina — e a segunda ganha requisito próprio de marcação, contraste e geometria legível"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "Norma de acessibilidade e norma de legibilidade para máquina colidem em pontos concretos — piso tátil, sinalização, iluminação — e alguém precisa arbitrar a precedência"
                sinal: fraco
                prazo: 2032
                confianca: baixa
              - id: e6.1.2
                ordem: 3
                efeito: "Cidade fácil para máquina e difícil para pessoa vira pauta política local, com o mesmo vocabulário do debate entre carro e pedestre"
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "O mundo 3D feito para entreter vira insumo de treino sem ter sido projetado para isso, e a licença de uso do ambiente — distinta da licença da imagem — vira cláusula disputada"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "Estúdios passam a licenciar ambiente como dado, cobrando por hora de rollout ou por cobertura de situação rara, e abrem um conflito novo com quem produziu os assets"
                sinal: fraco
                prazo: 2033
                confianca: baixa
```

**O que o bloco não exprime sozinho.** Três coisas.

A primeira é que os três ramos não são independentes: `e2` (ambiente barato, avaliação cara) e `e4` (demonstração descolada da confiabilidade) são o mesmo fenômeno visto de dois lados, e reforçam um ao outro. Se a avaliação não acompanhar a geração, a distância entre vídeo e produto aumenta em vez de diminuir — o barateamento do mundo piora o problema que ele parecia resolver. A roda desenha isso como dois galhos; na prática é um laço.

A segunda é a assimetria de prazo dentro de um mesmo nível. `e4` está marcado em 2027 porque já está acontecendo — é quase descrição do presente, e recebeu confiança alta por isso. `e5.2`, o acidente com causa-raiz no simulador, está em 2031 com confiança baixa e sinal fraco: é o efeito de menor probabilidade de toda a primeira e segunda ordens, e é também o que reorganiza o mapa inteiro se ocorrer. Confiança baixa aqui não significa pouco importante; significa que não há evidência, e a skill exige que isso apareça no campo em vez de ser maquiado na prosa.

A terceira é que doze dos dezoito efeitos de terceira ordem têm prazo posterior a 2031 — declarado, e não acidental. Terceira ordem é reorganização institucional, e instituição se move em década, não em ciclo de produto. Foram mantidos no mapa porque a pergunta que este documento faz é o que o projetista de hoje precisa antecipar, e não o que estará pronto no ano-alvo. O leitor que quiser só o horizonte fechado deve ler as ordens 1 e 2; a ordem 3 é onde o mapa aposta.

## 6. Sinais fracos e wildcards

**Sinais fracos.**

1. **O corpo entrando no raciocínio, e não só na execução.** A varredura da turma trouxe o `ROSClaw`, que conecta o raciocínio do modelo a capacidades de robô reais mantendo consciência do corpo físico do agente. É pequeno e pouco citado, mas aponta para a inversão que interessa: restrição física deixando de ser um filtro aplicado depois do plano e virando parte do modelo de execução. O mesmo sinal aparece, maior, no *Motion Transfer* do Gemini Robotics 1.5 — corpo como parâmetro, não como destino.

2. **O agente que aprende sem humano.** O ciclo de auto-melhoria do SIMA 2, em que o Gemini propõe tarefas e estima recompensa alimentando um banco de experiência, permite melhorar em tarefas antes falhadas sem nenhuma jogada humana nem retorno humano. Se isso escalar do mundo virtual para o físico, o gargalo de dados de demonstração — que é o que trava a robótica hoje — deixa de existir, e todo o cronograma deste mapa antecipa.

3. **A limitação declarada como estratégia.** O Project Genie foi lançado dizendo, no próprio anúncio, que os mundos podem não aderir à física real, que o controle de personagem é pior e que a geração para em 60 segundos. Uma empresa que normalmente venderia a capacidade está calibrando expectativa para baixo. Isso é sinal de que o limite é estrutural, não de engenharia de lançamento.

4. **O mercado dizendo o contrário do vídeo.** Levantamentos de implantação de humanoides em 2026 registram que alegações amplamente repetidas de dezenas de milhares de unidades implantadas não sobrevivem ao confronto com documento de empresa, e que o uso industrial real existe mas está concentrado em um punhado de sítios nomeados. Quando o levantamento setorial passa a gastar parágrafos separando o verificado do alegado, o setor está no início da correção, não do arranque.

5. **O Brasil corporificado pelo campo.** Cerca de 45 mil drones agrícolas em operação e 18 robôs por 10 mil trabalhadores na manufatura, contra 151 de média global, desenham um país que adota IA física por fora da fábrica. Se o modelo de mundo se consolidar como insumo, o Brasil chega à mesa como gerador de dado agrícola raro — um ativo — e não como comprador de simulador.

**Wildcard.** Um acidente grave com robô treinado em mundo gerado, cuja investigação conclua que a causa-raiz está no gerador de mundo e não no robô nem no operador — por exemplo, uma classe inteira de situação ausente da distribuição amostrada. O impacto é assimétrico: não freia a tecnologia, reorganiza a cadeia. De um dia para o outro, mundo de treino vira produto regulado, semente vira registro obrigatório, gerador vira fornecedor certificável com responsabilidade solidária, e o mercado se parte entre modelos auditáveis e modelos livres. Todos os efeitos de terceira ordem do ramo `d3` antecipam de cinco a sete anos, e os efeitos `e1.1` e `e5.1` deixam de ser boa prática e viram exigência legal. Probabilidade baixa até 2031; impacto sobre este mapa, total.

**Contra-wildcard, de sinal oposto.** Uma demonstração pública e replicada de que política treinada exclusivamente em mundo gerado supera, no mundo real, política treinada em simulador escrito com randomização de domínio. Hoje essa evidência não existe. Se aparecer, a disrupção 1 deixa de ser aposta e vira fato consumado, e o ramo `d1` inteiro antecipa para dentro do horizonte.

## 7. Contra o próprio mapa (teste adversarial)

**Extrapolação linear.** O mapa assume que a curva das últimas dezoito semanas continua: Genie 3 em agosto de 2025, Project Genie em janeiro de 2026, Cosmos 3 em maio de 2026, Genesis 1.0 em maio de 2026. Extrapolar isso é exatamente o erro que a régua de Rogers existe para evitar. A memória de um minuto do Genie 3 pode não ser o começo de uma curva: pode ser o teto de uma arquitetura sem estrutura de estado — é o que sugere a análise de que os modelos geram quadros independentes sem memória subjacente, ao contrário do motor de jogo, que rastreia progresso e inventário. Se o problema for arquitetural e não de escala, nada em `e1` acontece no prazo marcado, e o simulador escrito segue sendo o lugar onde se treina até 2031.

**Velocidade de adoção irreal.** Coloquei `e1` em 2028 e `e3` em 2028 com confiança alta. É provavelmente cedo. Robótica industrial tem ciclos de requalificação de linha medidos em anos, contratos de manutenção de dez anos e uma cultura de segurança que trata mudança de comportamento como risco, não como recurso. O próprio Regulamento 2023/1230 empurra na direção contrária à velocidade: exigir organismo notificado para comportamento autoevolutivo é, na prática, um freio deliberado. É plausível que `e1` e `e3` só se manifestem em pesquisa e em pilotos até 2031, e cheguem à produção depois — o que faria deste mapa um documento sobre 2035 com data errada na capa.

**Falha da disrupção.** A disrupção 1 é a mais frágil das três, e vale dizer com clareza por quê: ela pode simplesmente não ser necessária. Simuladores escritos ficaram muito bons e muito rápidos — o Genesis unifica rígido, FEM, MPM e partículas numa cena só, sob licença Apache 2.0, rodando de laptop a datacenter. Se a randomização de domínio sobre física declarada continuar entregando transferência melhor que mundo amostrado, o modelo de mundo fica confinado a duas funções — gerar dado sintético de percepção e servir de ambiente de entretenimento — e nunca chega a ser o lugar onde a política aprende. Nesse cenário, `e1`, `e2` e todos os seus descendentes caem, e sobra um mapa de duas disrupções. A crítica de Xing, Deng e Hou aponta nessa direção: gerar vídeo plausível não é modelar possibilidade acionável.

**Viés pessoal do autor.** A zona de interesse declarada é "Simulação e mundos", e isso enviesa o mapa de duas maneiras que reconheço. Primeira: tratei o simulador como protagonista de uma história cujo protagonista real pode ser o dado de teleoperação humana — a maior parte do que funciona hoje em manipulação vem de demonstração humana, não de simulação, e este documento dá pouco espaço a isso. Segunda: escolhi o ângulo do projetista de mundo porque é o que a zona de interesse valoriza, e por isso a terceira ordem puxa para design de espaço e autoria, quando um mapa escrito por alguém da zona de trabalho e economia teria puxado para substituição de tarefa física, salário e sindicato — que são, honestamente, os efeitos de maior impacto agregado. O mapa é verdadeiro no que afirma e incompleto por escolha declarada.

## 8. O que a máquina errou

Erros cometidos por mim durante esta sessão, como foram detectados e o que foi feito.

1. **Número atribuído a uma fonte que não o continha.** O resumo de busca trouxe "12,8% de sucesso geral" associado ao RoboDojo. Ao abrir a página de resumo do artigo, o número não estava lá. Em vez de manter a citação apoiada no resumo de busca, abri o texto integral em HTML e só então encontrei a frase literal: a melhor política, π0.5, atinge 12,8% de sucesso geral e pontuação 22,9 nas 18 tarefas reais. **Regra aplicada:** resumo de mecanismo de busca não é fonte; o que vale é a página aberta.

2. **Números redondos demais sobre o Cosmos 3.** O primeiro rascunho da Seção 3 dizia que o Cosmos 3 foi treinado em "20 trilhões de tokens multimodais, quase um bilhão de imagens e 400 milhões de vídeos". Esses valores vieram de resumo agregado de busca. A sala de imprensa da NVIDIA, que eu abri, diz apenas "bilhões de amostras através de texto, imagem, vídeo, som e trajetórias de ação". Troquei pela formulação da fonte primária e perdi a precisão — corretamente. É o mesmo desvio que o meu `DUVIDAS.md` registra como "número redondo sem fonte".

3. **Métrica de simulador vinda de terceiro, não do projeto.** Cheguei a escrever que o Genesis é "10 a 80 vezes mais rápido que Isaac Gym e MuJoCo MJX, com até 43 milhões de FPS". Esses números aparecem em um blog comercial de nuvem e num repositório espelho de terceiro; o repositório oficial que abri não declara FPS. Removi a cifra e mantive apenas o que a fonte primária sustenta: multi-física unificada, renderizador próprio, Apache 2.0, versão 1.0 em maio de 2026.

4. **Divergência de data entre agregador e fonte primária.** Um portal noticioso datou o lançamento do Cosmos 3 em 1º de junho de 2026; a sala de imprensa da própria NVIDIA data em 31 de maio de 2026, no GTC Taipei. Adotei a fonte primária e registro a divergência aqui em vez de escolher em silêncio.

5. **Estatística de agente atribuída à fonte errada.** Escrevi, num rascunho, que o SIMA 2 "dobra a taxa de conclusão de 31% do SIMA 1". A página da DeepMind que abri descreve ganhos por gráfico e generalização para jogos não treinados, mas não afirma esses números no texto que li — eles vieram de cobertura de terceiro. Rebaixei a afirmação para qualitativa, do jeito que a fonte primária a sustenta.

6. **Fonte que não abriu e por isso não existe.** Tentei usar um levantamento de implantação de humanoides hospedado em um portal que devolveu erro 403. Não foi citado. Em seu lugar entrou outro levantamento que abriu e traz dados nomeados e verificáveis (Figure na BMW Spartanburg, Agility com Digit em nove instalações).

7. **Raciocínio fraco corrigido no meio do caminho.** A primeira versão da disrupção 3 era "a IA física fica barata e o trabalho físico muda" — que é verdadeiro, óbvio e serve para qualquer tema de automação dos últimos cinquenta anos. A entrevista de recorte pedia justamente excluir ideias que servem para qualquer tema. Substituí pelo recorte específico deste tema: o mundo de treino como artefato de projeto e como elo novo da cadeia de responsabilidade, ancorado numa data real — 20 de janeiro de 2027.

## 9. Três cenários para 2031

**Provável.** O mundo gerado ganhou o treino de percepção e perdeu o treino de controle. Equipes de robótica usam modelo de mundo para produzir variação visual barata — clima, iluminação, desordem, gente passando — e continuam treinando a política em simulador escrito, porque é lá que a física é declarada e auditável. Bancada padronizada virou requisito de compra: nenhum comprador institucional autoriza piloto sem avaliação de terceiro com protocolo publicado, e a taxa de sucesso subiu de um dígito para algo entre trinta e cinquenta por cento nas tarefas de manipulação em ambiente não estruturado — bom o bastante para logística e triagem, ruim o bastante para manter humano na alça. A certificação europeia por organismo notificado se tornou o padrão de fato global, e a documentação técnica de qualquer máquina com comportamento aprendido inclui uma descrição do ambiente de treino que ninguém sabe muito bem como auditar. No Brasil, o drone agrícola é a IA física de verdade, e começa a aparecer o primeiro ativo brasileiro no mercado: dado de campo raro, vendido por hora de cobertura.

**Desejável.** A régua chegou antes do produto, e isso mudou o que se constrói. Proveniência de mundo é metadado corriqueiro: todo relatório de avaliação traz semente, versão de pesos e prompt, e trocar a versão do gerador dispara reteste automático, como trocar a versão de uma biblioteca. A falha virou matéria de projeto — máquinas param, dizem em linguagem simples o que não entenderam e pedem ajuda, e existe um repertório testado de sinalização de incerteza que operadores leem sem treinamento. O raciocínio verbalizado antes da ação é interface desenhada, com decisões explícitas sobre quanto mostrar e quando interromper, e não registro de depuração vazando na tela. O ambiente construído ganhou sua segunda leitura sem perder a primeira: as normas de acessibilidade e de legibilidade para máquina foram harmonizadas com precedência clara para a pessoa, e o piso tátil continua servindo a quem ele sempre serviu. Estúdios licenciam mundo como dado com contrato que remunera quem fez os assets.

**Indesejável.** A confiabilidade não chegou e a implantação veio assim mesmo, empurrada por capital. Máquinas treinadas em mundos amostrados operam em espaço público com taxa de falha que ninguém publica, porque a avaliação continua sendo feita por quem vende. O acidente aconteceu, a investigação parou no operador, e a pergunta sobre o gerador de mundo nunca foi feita — o elo que faltava na cadeia de responsabilidade continua faltando, agora com jurisprudência a favor. Três empresas controlam os modelos de mundo que treinam quase tudo, com pesos fechados e distribuição não divulgada, e auditar um deles é tecnicamente impossível para qualquer regulador. O espaço construído foi silenciosamente reprojetado para legibilidade de máquina — marcação padronizada, geometria previsível, iluminação uniforme — e a calçada ficou mais fácil para o robô e pior para quem enxerga pouco. O Brasil entrou nessa economia exportando dado de campo bruto e importando a política que o transforma em comportamento, sem participar da decisão sobre o que aquelas máquinas aprendem a fazer.

## 10. O experimento

**O que é.** *O mundo mentiu* — uma bancada sim-to-real de bolso, construível numa aula com telefone, fita crepe e um corredor do CIn. A turma se divide em três papéis que não conversam entre si durante a execução: **quem faz o mundo**, **quem escreve a política** e **quem opera o corpo**.

Quem faz o mundo recebe uma tarefa física de trinta segundos (por exemplo: atravessar o corredor, pegar o copo azul sobre a mesa da direita e depositá-lo na caixa perto da porta) e produz o ambiente onde ela será aprendida — em Project Genie, se houver acesso, ou em qualquer gerador de mundo disponível, ou ainda numa versão degradada válida: um vídeo de percurso gerado por modelo, ou um MetaDrive/MuJoCo montado às pressas. Não pode visitar o corredor real.

Quem escreve a política observa **somente** aquele mundo e redige um procedimento fechado: uma lista numerada de instruções não ambíguas, sem condicional aberta, que deve bastar para completar a tarefa. Não pode visitar o corredor real.

Quem opera o corpo é uma pessoa vendada — o "robô" — guiada por um segundo aluno que lê o procedimento em voz alta, literalmente, sem improvisar, sem acrescentar informação e sem responder pergunta. Toda vez que o procedimento não cobre a situação, o par grita "falha", cronometra e registra a linha exata em que o mundo divergiu.

**Pergunta sobre o futuro.** Quando a máquina falha porque o mundo em que ela aprendeu era diferente do mundo real, de quem é a responsabilidade — de quem gerou o mundo, de quem derivou a política a partir dele, ou de quem a colocou para operar? E, antes disso: a falha é sequer atribuível, ou a causa se dissolve entre os três?

**Tecnologia emergente usada.** Modelo de mundo gerativo (Genie 3 via Project Genie, ou Cosmos 3 por pesos abertos, ou simulador leve como substituto declarado); a lógica visão-linguagem-ação reproduzida à mão, com o procedimento em linguagem natural fazendo o papel da política e o humano vendado fazendo o papel do corpo — que é exatamente a arquitetura de "pensar em linguagem, depois agir" do Gemini Robotics 1.5, executada sem GPU.

**Atividade da turma.** Quarenta minutos de execução e vinte de tribunal. Cada trio roda duas vezes: uma no corredor como ele está, outra com o corredor levemente alterado sem aviso — uma cadeira deslocada, uma porta fechada, uma luz apagada. Registra-se, por rodada, o tempo até a primeira falha, o número de falhas e, para cada falha, a atribuição votada pela turma: mundo, política ou corpo. No tribunal, cada papel apresenta sua defesa lendo o próprio artefato. A turma vota antes e depois das defesas, e a mudança de voto é o dado que interessa. Fecha-se com a comparação entre o veredito da sala e o que o Regulamento (UE) 2023/1230 exigiria a partir de 20 de janeiro de 2027 de um fabricante nessa situação.

**Resultado que mudaria de ideia.** Se a maioria das falhas for atribuída de forma estável e consensual — se a sala olhar o registro e disser sem hesitar "isto é culpa do mundo" ou "isto é culpa da política" —, então a cadeia de responsabilidade é atribuível com as ferramentas que já temos, o efeito `e5.2` perde força e a disrupção 3 vira uma questão de burocracia, não de estrutura. Se, ao contrário, as atribuições se dispersarem e os votos virarem depois das defesas, está demonstrado em sala que a falha se dissolve entre os três papéis — e a disrupção 3 é o que este mapa afirma ser: um elo faltando na cadeia, e não um formulário a preencher. Um segundo resultado mudaria de ideia sobre a disrupção 1: se a rodada com o corredor alterado produzir aproximadamente o mesmo número de falhas que a rodada não alterada, o mundo gerado capturou o que importava, e a minha objeção central à disrupção 1 — a de que a física amostrada não transfere — perde o principal apoio empírico que eu tenho.

## 11. Fontes

Apenas fontes efetivamente abertas durante esta sessão. Páginas que apareceram em resultado de busca e não foram abertas não estão listadas e não sustentam nenhuma afirmação do texto.

1. NVIDIA Newsroom — *NVIDIA Launches Cosmos 3, the Open Frontier Foundation Model for Physical AI*. `https://nvidianews.nvidia.com/news/nvidia-launches-cosmos-3-the-open-frontier-foundation-model-for-physical-ai` — Sustenta: data (31/05/2026, GTC Taipei), arquitetura de mistura de transformadores unindo raciocínio visual, geração de mundo e predição de ação; volume de treino em "bilhões de amostras"; Cosmos Coalition; adotantes nomeados; disponibilidade dos modelos Super e Nano. Confiabilidade: **média** (fonte primária, mas é material de lançamento do fabricante).
2. RoboDojo — *A Unified Sim-and-Real Benchmark for Comprehensive Evaluation of Generalist Robot Manipulation Policies*, arXiv, julho de 2026. `https://arxiv.org/html/2607.04434v1` — Sustenta: 42 tarefas em simulação e 18 no mundo real; a frase literal de que a melhor política, π0.5, atinge 12,8% de sucesso geral e pontuação 22,9 nas 18 tarefas reais; a ressalva dos próprios autores de que a bancada não foi desenhada como teste direto de transferência. Confiabilidade: **média** (preprint sem revisão por pares; número extraído do texto integral).
3. Aljalbout, Xing, Romero, Akinola, Garrett, Heiden, Gupta, Hermans, Narang, Fox, Scaramuzza, Ramos — *The Reality Gap in Robotics: Challenges, Solutions, and Best Practices*. `https://arxiv.org/abs/2510.20808` — Sustenta: simulação como abstração e aproximação; as quatro famílias de solução (randomização de domínio, real-para-sim, abstração de estado e ação, co-treino sim-real); cobertura em locomoção, navegação e manipulação. Confiabilidade: **alta** (aceito no Annual Review of Control, Robotics, and Autonomous Systems 2026).
4. Google DeepMind — *Gemini Robotics 1.5: Pushing the Frontier of Generalist Robots with Advanced Embodied Reasoning, Thinking, and Motion Transfer*. `https://arxiv.org/abs/2510.03342` — Sustenta: mecanismo de Motion Transfer para aprender de dados heterogêneos de múltiplos corpos; raciocínio interno em linguagem natural intercalado com ação; modelo ER de raciocínio corporificado. Confiabilidade: **média** (relatório técnico do próprio laboratório).
5. Google DeepMind — *SIMA 2: an agent that plays, reasons and learns with you in virtual 3D worlds*. `https://deepmind.google/blog/sima-2-an-agent-that-plays-reasons-and-learns-with-you-in-virtual-3d-worlds/` — Sustenta: generalização para jogos não treinados; ação em mundos gerados pelo Genie 3 sem exposição prévia; ciclo de auto-melhoria sem retorno humano; limitações declaradas (raciocínio de horizonte longo, memória de interação, controle fino); prévia de pesquisa limitada, 13/11/2025. Confiabilidade: **média**.
6. Google DeepMind — *Genie 3: A new frontier for world models*. `https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/` — Sustenta: 720p a 24 fps em tempo real; memória visual de cerca de um minuto e consistência por alguns minutos; eventos promptáveis; limitações (espaço de ação, multiagente, geografia real, renderização de texto); 05/08/2025. Confiabilidade: **média**.
7. Google — *Project Genie: AI world model now available for Ultra users in U.S.* `https://blog.google/innovation-and-ai/models-and-research/google-deepmind/project-genie/` — Sustenta: disponibilidade comercial em 29/01/2026 para assinantes Google AI Ultra nos EUA, maiores de 18; funções de esboçar, explorar e remixar mundo; limites declarados (aderência à física real, controle de personagem, latência, teto de 60 segundos). Confiabilidade: **média**.
8. Physical AI Safety — *2023/1230: what changes on 20 January 2027*. `https://physical-ai-safety.com/blog/eu-machinery-regulation-2027-primer` — Sustenta: aplicação plena em 20/01/2027 sem período de transição; cobertura explícita de comportamento autoevolutivo baseado em aprendizado de máquina; avaliação obrigatória por organismo notificado para as categorias de alto risco, com fim da autodeclaração; obrigação de atualização de segurança por dez anos. Confiabilidade: **média** (análise secundária de norma pública; a norma em si é a fonte primária e deve ser consultada antes de qualquer uso jurídico).
9. arXiv — *Embodied AI in Action: Insights from SAE World Congress 2026 on Safety, Trust, Robotics, and Real-World Deployment* (Li, Schmitt, Tong, Mohammed, Chalana, Kusari, Griffor), maio de 2026. `https://arxiv.org/abs/2605.10653` — Sustenta: a leitura de que IA corporificada é desafio de sistema e de governança de ciclo de vida, e não apenas de algoritmo; a transição de pesquisa para implantação. Confiabilidade: **média** (relato de painel, não estudo empírico).
10. Genesis-Embodied-AI — *genesis-world* (repositório oficial). `https://github.com/Genesis-Embodied-AI/genesis-world` — Sustenta: plataforma de simulação para IA física unificando motor multi-física (rígido, FEM, MPM, PBD/SPH, uipc, acoplador explícito, SAP), renderizador Nyx e compilador Quadrants; licença Apache 2.0; versão 1.0 em maio de 2026. Confiabilidade: **alta** para o que o projeto declara de si; **não** sustenta nenhuma comparação de velocidade, que o repositório não faz.
11. Xing, Deng, Hou — *Critique of World Model*. `https://arxiv.org/abs/2507.05169` — Sustenta: a objeção conceitual de que o propósito de um modelo de mundo é simular possibilidades acionáveis para raciocínio e ação, e de que abordagens existentes têm limitações de projeto nas cinco dimensões (dado, representação, arquitetura, objetivo de aprendizado, uso). Confiabilidade: **média** (preprint de posição).
12. humanoid.guide — *Humanoid deployments in 2026 favor Figure and Agility*. `https://humanoid.guide/humanoid-deployments-in-2026-favor-figure-and-agility/` — Sustenta: Figure 02 na BMW Spartanburg (piloto de 11 meses, 1.250+ horas, 90 mil+ peças, 30 mil+ veículos, 99% de acerto de colocação, ciclo de 84 s); Agility com Digit em nove instalações e 65 mil+ horas; Tesla sem contagem publicada de produção do Optimus; Unitree com ~5.500 unidades embarcadas em 2025 e G1 a partir de US$ 16 mil; e a distinção explícita entre dado verificado e alegação repetida. Confiabilidade: **média** (publicação setorial que cita fontes de empresa, mas sem revisão independente).
13. Robotics Center — *State of Robotics Brazil 2026*, março de 2026. `https://www.roboticscenter.ai/state-of-robotics-brazil-2026` — Sustenta: densidade de 18 robôs por 10 mil trabalhadores da manufatura no Brasil contra 151 de média global; 350 por 10 mil no automotivo; ~45 mil drones agrícolas em operação, atrás apenas da China; mercado de R$ 8,2 bilhões em 2026; ausência de tratamento de IA corporificada e simulação no levantamento. Confiabilidade: **baixa a média** (relatório de mercado sem metodologia auditável publicada; os números foram usados como ordem de grandeza, não como precisão).
14. Naavik — *Hello, World Models!* `https://naavik.co/deep-dives/hello-world-models-deep-dive/` — Sustenta: a objeção de statefulness (modelos geram quadros ou cenas independentes, sem estrutura de memória, ao contrário do motor que rastreia progresso e inventário); a dificuldade de design intencional sob geração procedural; a restrição de dado e computação que exclui a maioria dos estúdios; os exemplos de GameNGen e Oasis. Confiabilidade: **média** (análise setorial; a peça é de março de 2025 e por isso não cobre Genie 3 nem Project Genie, o que foi levado em conta ao usá-la apenas para o argumento estrutural).

## 12. Anexo — o levantamento bruto

Material sem edição, conforme a Etapa 3 da skill exige. Inclui o que foi cortado.

### 12.1 Etapa 1 — entrevista de recorte: perguntas feitas e respostas recebidas

A skill abre com bloqueio absoluto na Etapa 1. Nesta rodada não havia usuário disponível para responder; as respostas foram fornecidas de antemão pelo despacho da disciplina, e estão coladas aqui na forma em que chegaram. **Declaração obrigatória:** a entrevista não foi conduzida ao vivo, o bloqueio da Etapa 1 não foi exercido, e as seis perguntas foram consideradas respondidas pelo texto abaixo.

> - Tema: "Agentes corporificados, IA física e modelos de mundo" (tema 9 de 19 da disciplina; família "Simulação e mundos").
> - Horizonte: 2031. Público: quem projeta mídia e interação. Recorte: global, com uma nota sobre o Brasil.
> - Descartado de início: o que já é comum em produto de massa (a régua da disciplina); nenhuma outra exclusão.
> - Disrupção suspeita: nenhuma — descubra. Viés: neutro. Ideias óbvias a excluir: as que servem para qualquer tema.
> - O que me faria mudar de ideia: evidência de que a adoção já passou da maioria inicial (Rogers) ou de que a tecnologia não rompe nada (só melhora o que existe).
> - Profundidade: três ordens. Modo: a partir de uma inovação/tema, não de um setor.
> - Zona de interesse do autor: "Simulação e mundos". Login do autor: kvv. Skill usada: futurizacao-kvv.
> - Busca na web: use WebSearch e WebFetch de verdade; só cite o que abriu. Não invente fontes.
> - Não faça perguntas de volta. Não pare para pedir confirmação. Se algo não estiver definido, assuma e declare.

**Mapeamento pergunta a pergunta (Etapa 1 da skill):**

| # | Pergunta da skill | Resposta usada |
|---|---|---|
| 1 | Tema da análise | Agentes corporificados, IA física e modelos de mundo |
| 2 | Horizonte temporal | 2031 |
| 3 | Público-alvo | Quem projeta mídia e interação |
| 4 | Recorte geográfico | Global, com nota sobre o Brasil (`recorte_geografico: global`) |
| 5 | Premissas descartadas e viés | Descartar o que já é comum em produto de massa; descartar ideias que serviriam a qualquer tema; viés declarado neutro |
| 6 | Tecnologias/vetores de interesse | Nenhum imposto — "descubra". Os vetores do frontmatter foram escolhidos por mim a partir da busca |

**Assunções declaradas** (a instrução mandava assumir e declarar o que não estivesse definido): `data: 2026-09-15` seguiu o modelo da skill, não a data de execução (12/09/2026); `confianca: media` no frontmatter reflete o fato de que a disrupção 1 tem contra-evidência conceitual explícita; `publico_ok: false` porque nenhuma autorização de publicação foi dada.

### 12.2 Etapa 2 — filtro anti-tecnologia madura: candidatos e veredito

| Candidato | Veredito | Motivo formal |
|---|---|---|
| ROS / ROS 2, MoveIt 2, OMPL, pinocchio, Lanelet2 | **RECUSADO** | Maduro. Planejamento de trajetória e middleware robótico são infraestrutura consolidada há mais de uma década, com adoção industrial ampla. Não há ruptura de lógica: melhoram o que já se fazia. |
| SLAM e navegação visual-inercial (OpenVINS) | **RECUSADO** | Maduro. Problema bem posto, com soluções em produto de massa (aspirador robô, drone de consumo). Já passou a maioria inicial na régua de Rogers. |
| Simulador físico acelerado por GPU (Isaac Sim/Lab, MuJoCo, PhysX, newton) | **RECUSADO como disrupção-raiz** | Incremental de alto valor, não ruptura. Randomização de domínio sobre simulador escrito existe desde 2017; GPU acelera o mesmo procedimento. Entra no mapa como **vetor habilitante** e como principal **contrafactual** da disrupção 1, não como disrupção. |
| Genesis World 1.0 | **RECUSADO como disrupção-raiz** | Mesmo motivo acima, com uma ressalva registrada: unificar solvers heterogêneos numa cena só é qualitativamente novo para pesquisa, mas não muda a lógica de que o mundo é declarado por um humano. |
| IA generativa aplicada a instrução de robô ("chatbot que comanda o braço") | **RECUSADO** | É a "IA generativa básica que apenas acelera processo atual" que a Etapa 2 manda recusar. O que é disruptivo não é a linguagem na entrada, é a política transferível entre corpos — por isso a disrupção 2 foi formulada sobre o peso, e não sobre o prompt. |
| Teleoperação e aprendizado por demonstração humana | **RECUSADO** | Maduro e, ironicamente, o que mais funciona hoje. Registrado na Seção 7 como viés de omissão do autor. |
| Modelo de mundo gerativo como ambiente de aprendizado | **ACEITO — disrupção 1** | Rompe a separação motor/conteúdo e a auditabilidade do ambiente. |
| Modelo visão-linguagem-ação transferível entre corpos | **ACEITO — disrupção 2** | Rompe o acoplamento robô/programa e desloca o valor do hardware para a política. |
| Mundo de treino como artefato de projeto e elo de responsabilidade | **ACEITO — disrupção 3** | Rompe a cadeia de conformidade e transforma design de espaço em design de currículo. Ancorado em data real (20/01/2027). |
| "IA física barata muda o trabalho físico" | **RECUSADO** | Serve para qualquer tema de automação desde 1970. Excluído pela instrução explícita da entrevista. Era a formulação original da disrupção 3 e foi substituída (ver Seção 8, item 7). |
| Enxame de drones para resgate em incêndio (wildcard da turma) | **RECUSADO como disrupção, MANTIDO como contexto** | É aplicação, não ruptura de lógica. A coordenação multiagente em ambiente físico aparece no mapa pelo lado do limite técnico (`e6` e a limitação multiagente declarada do Genie 3). |

### 12.3 Rodadas de busca executadas (log)

Buscas (WebSearch): `NVIDIA Cosmos world foundation model physical AI 2026`; `vision-language-action model robot generalist 2026 pi0 Gemini Robotics GR00T`; `sim-to-real gap 2026 humanoid robot deployment reality check failure`; `Genesis simulation platform embodied AI Isaac Lab MetaDrive 2026 GPU physics`; `EU Machinery Regulation 2023/1230 January 2027 AI self-evolving behaviour robots safety component`; `DeepMind SIMA 2 generalist agent 3D worlds Genie world model 2026`; `IFR World Robotics 2026 robot density Brazil installations América Latina`; `world models game development 2026 Genie Odyssey playable neural world criticism "world model" limitations`; `humanoid robot deployment 2026 numbers Figure Agility factory units shipped reality`.

Páginas abertas com sucesso (WebFetch), 14: sala de imprensa do Cosmos 3; RoboDojo (resumo e texto integral); revisão da lacuna de realidade; Gemini Robotics 1.5; SIMA 2; Genie 3; Project Genie; primer do Regulamento 2023/1230; painel do SAE World Congress 2026; repositório do Genesis; *Critique of World Model*; humanoid.guide; State of Robotics Brazil 2026; Naavik.

Páginas que falharam ou foram descartadas: `technology.org/2026/07/18/humanoid-robots-in-2026-what-is-actually-deployed` → **HTTP 403**, não citada; `arxiv.org/pdf/2607.04434` → excedeu o limite de tamanho da ferramenta, refeita pela versão HTML; `ifr.org` (World Robotics 2026) → **não aberta**: a busca informou que o relatório só seria publicado em 24/09/2026, posterior a esta rodada, e por isso nenhum número do IFR foi usado; blog comercial com as métricas de FPS do Genesis → não aberto nem citado, por ser material de fornecedor de nuvem sobre software de terceiro.

### 12.4 Efeitos cortados da roda (não entraram no bloco YAML)

- *"Modelos de mundo permitem gerar dado sintético de treino para percepção em volume, reduzindo a dependência de rotulagem manual."* — Cortado por ser o efeito mais óbvio e o mais próximo de já estar acontecendo: é praticamente o argumento comercial da sala de imprensa do Cosmos 3. Não é futuro, é presente.
- *"O treino em simulação reduz o custo de desenvolvimento de robôs."* — Cortado: serve para qualquer tema de simulação desde os anos 1990.
- *"Empregos de operação logística são substituídos por humanoides."* — Cortado por duas razões: serve para qualquer tema de automação, e a evidência aberta contradiz o prazo (nove instalações da Agility e uma planta da Figure não são substituição de mercado de trabalho).
- *"Modelos de mundo geram conteúdo de entretenimento sob demanda."* — Cortado por pertencer aos temas vizinhos 7 (NPCs e mundos vivos) e 8 (narrativa gerativa), conforme a fronteira declarada pela disciplina. Sobrou aqui apenas o que toca o agente com corpo.
- *"A criança aprende com um robô tutor corporificado."* — Cortado por especulação sem sinal: nenhuma fonte aberta sustentou qualquer coisa nessa direção.
- *"Cai o preço do humanoide e ele entra na casa."* — Cortado apesar do dado real (G1 a partir de US$ 16 mil): preço de plataforma de pesquisa não é preço de produto doméstico, e a inferência exigiria um salto que nenhuma fonte aberta sustenta.
- *"Agentes generalistas fazem o mesmo trabalho em jogo e em fábrica, unificando as duas indústrias."* — Cortado na forma forte (unificação) e mantido na forma fraca: `e6.2` fala de licença de mundo, não de fusão de indústrias. A versão forte extrapolava muito além do que o SIMA 2 demonstra.

### 12.5 Rodada descartada do desenho das disrupções

A primeira tentativa de recorte montava as três disrupções assim: (1) modelo de mundo gerativo; (2) simulador acelerado por GPU; (3) barateamento da IA física e efeito sobre o trabalho. Foi descartada inteira na aplicação da Etapa 2: a (2) é incremental por critério explícito da skill e a (3) é a ideia que serve a qualquer tema, excluída pela entrevista. A segunda tentativa substituiu a (2) por "humanoides chegam à fábrica", também descartada — é adoção de produto, não ruptura de lógica, e a evidência aberta mostra concentração em poucos sítios nomeados. Só na terceira tentativa o eixo ficou coerente: **onde o comportamento é aprendido** (disrupção 1), **de que o comportamento é feito** (disrupção 2) e **quem responde pelo comportamento** (disrupção 3). As três compartilham o mesmo objeto — o par agente-mundo — e não se sobrepõem.

### 12.6 Números considerados e não usados

- "20 trilhões de tokens, ~1 bilhão de imagens, 400 milhões de vídeos" (treino do Cosmos 3): vindos de resumo agregado de busca; a página primária aberta traz apenas "bilhões de amostras". **Não usados.**
- "43 milhões de FPS" e "10 a 80× mais rápido que Isaac Gym/Sim/Lab e MuJoCo MJX" (Genesis): o repositório oficial aberto não declara métrica de velocidade. **Não usados.**
- "SIMA 2 dobra a taxa de 31% do SIMA 1" e "aproxima-se do desempenho humano": não localizados no texto da página oficial aberta. **Não usados**; substituídos por descrição qualitativa.
- Densidade de robôs por 10 mil trabalhadores na Europa Ocidental (267), América do Norte (204) e Ásia (131), e 54% das instalações mundiais na China: vieram de resumo de busca sobre material do IFR, cujo relatório de 2026 só sai em 24/09/2026. **Não usados** — o único par de números de densidade que entrou (18 no Brasil contra 151 globais) veio de fonte aberta e está marcado como confiabilidade baixa a média.
- Capacidades de produção anunciadas (BotQ até 12 mil/ano, RoboFab acima de 10 mil/ano, UBTECH 5 mil/ano): **não usados** no corpo do texto por serem capacidade instalada anunciada, e não implantação verificada — que é justamente a distinção que o efeito `e4` afirma existir.
- "1º de junho de 2026" como data do Cosmos 3: descartada em favor de 31/05/2026, da sala de imprensa da própria NVIDIA.

### 12.7 Contagens conferidas

Disrupções-raiz: 3. Efeitos de 1ª ordem: 6 (`e1`–`e6`). De 2ª ordem: 12. De 3ª ordem: 18. Efeitos de 3ª ordem com prazo posterior a 2031, declarados: 12 (`e1.1.2`, `e1.2.2`, `e2.1.1`, `e2.2.1`, `e3.1.2`, `e3.2.2`, `e4.2.1`, `e5.1.2`, `e5.2.1`, `e6.1.1`, `e6.1.2`, `e6.2.1`). Efeitos de 1ª e 2ª ordem com prazo posterior ao horizonte: nenhum. Distribuição de confiança: 1ª ordem — 3 alta, 3 média, 0 baixa; 2ª ordem — 0 alta, 11 média, 1 baixa; 3ª ordem — 0 alta, 4 média, 14 baixa. Fontes abertas e citadas: 14.
