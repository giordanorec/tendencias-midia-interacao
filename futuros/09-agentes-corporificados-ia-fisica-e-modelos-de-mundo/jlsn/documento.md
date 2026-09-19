---
tema: Agentes corporificados, IA física e modelos de mundo
slug: agentes-corporificados-ia-fisica-e-modelos-de-mundo
autor_login: jlsn
zona_de_interesse: Sistemas de Informação
data: 2026-09-18
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: Global, com nota sobre o Brasil
disrupcoes_raiz: 3
efeitos_ordem_1: 9
efeitos_ordem_2: 18
efeitos_ordem_3: 9
tecnologias_citadas: ["NVIDIA Cosmos 3", "NVIDIA Isaac Sim / IsaacLab", "Genie 3", "SIMA 2", "Gemini Robotics 1.5", "π0.7 (Physical Intelligence)", "MuJoCo", "Genesis", "habitat-sim", "MetaDrive", "AirSim", "Waymo World Model", "ROS 2 / MoveIt 2", "Unitree G1", "AGIBOT", "Figure 03"]
fontes: 9
confianca: media
experimento: O mundo que mente — auditoria de divergência entre simulador e realidade
skill_usada: futurizacao-jlsn
publico_ok: false
---

## 1. Resumo

A IA ganhou corpo, mas o que mudou de verdade não foi o corpo: foi o lugar onde ela aprende. Em 2026 o ambiente de treino deixou de ser escrito por engenheiros e passou a ser *gerado* por um modelo — Cosmos 3 e Genie 3 produzem mundos jogáveis a partir de texto, e agentes como SIMA 2 já melhoram sozinhos dentro deles. Ao mesmo tempo, políticas generalistas (π0.7, Gemini Robotics 1.5) transferem habilidade entre corpos diferentes sem retreino. Três rupturas saem daí: o mundo vira artefato gerado e auditável; a política de controle vira o ativo, e o corpo, commodity; e o agente atravessa jogo, simulador e fábrica como se fossem o mesmo tipo de lugar. Para quem projeta mídia e interação, a consequência é direta: projetar mundo passa a ser projetar currículo de treino, e a linguagem natural vira interface de máquina com consequência física. O contrapeso é numérico — 19.100 humanoides embarcados no 1º semestre de 2026, 97% deles chineses, é um mercado embrionário, não uma virada consumada.

## 2. O tema

Agentes corporificados são sistemas de IA que percebem e agem no mundo físico: robôs manipuladores, humanoides, drones, veículos. "IA física" é o rótulo comercial dessa família. O que torna o tema um objeto de mídia e interação, e não só de engenharia mecânica, são duas camadas recentes.

A primeira é o **modelo de mundo**: um modelo que *gera* o ambiente em vez de renderizá-lo a partir de geometria escrita à mão. Genie 3 produz ambientes interativos a 720p e 24 fps a partir de um prompt de texto, com consistência de alguns minutos. Cosmos 3 gera texto, imagem, vídeo, som ambiente e trajetórias de ação no mesmo modelo. Isso desloca a autoria de mundo do modelador para quem escreve a descrição — exatamente o movimento que a disciplina já viu em imagem e texto, agora aplicado ao espaço navegável.

A segunda é o **agente generalista de instrução**: SIMA 2 opera mundos 3D que nunca viu, sem acesso ao código do jogo, seguindo pedido em linguagem natural. π0.7 dobra roupa num corpo em que nunca treinou aquela tarefa. Quando o agente não precisa da API do ambiente, o ambiente vira interface — e interface é o objeto desta disciplina.

Merece mapa porque coloca três coisas em rota de colisão: o ofício de projetar mundos (jogo, cenário, arquitetura), a interface de linguagem natural e a responsabilidade por dano físico. Nenhuma das três estava preparada para as outras duas.

## 3. Onde isso está hoje

**O que existe e funciona.** Modelos de mundo abertos deixaram o laboratório. A NVIDIA lançou o Cosmos 3 em 31 de maio de 2026, descrito como modelo de fundação aberto para IA física, com arquitetura de mistura de transformers que acopla um transformer de raciocínio a um de geração, treinado em bilhões de amostras de texto, imagem, vídeo, som e trajetórias de ação, distribuído por Hugging Face e GitHub. A NVIDIA declara primeiro lugar entre modelos abertos em benchmarks como Physics-IQ, PAI-Bench e RoboArena — declaração de fornecedor, que registro como tal. Uma coalizão foi anunciada junto (Agile Robots, Black Forest Labs, Generalist, LTX, Runway, Skild AI), o que mostra a convergência entre casas de vídeo gerativo e casas de robótica.

Do lado do agente, SIMA 2 (novembro de 2025) roda em mundos recém-gerados pelo Genie 3 sem tê-los visto antes, orienta-se, entende instrução e age — e, mais relevante, melhora ao longo de gerações de treino sem nenhum dado humano de jogo. Gemini Robotics 1.5 (outubro de 2025) introduz "Motion Transfer" para aprender de dados heterogêneos de vários corpos, e raciocina em linguagem natural antes de agir. π0.7, da Physical Intelligence (abril de 2026), reivindica seguir instrução em ambientes não vistos, generalizar entre corpos e operar uma máquina de espresso "de fábrica" no nível de modelos especializados com RL.

**O que existe e não funciona.** A consistência dos mundos gerados ainda é curta: o próprio DeepMind lista limitações do Genie 3 — poucos minutos de interação contínua, ação do agente restrita, dificuldade com múltiplos agentes independentes, incapacidade de representar lugares reais com precisão, texto mal renderizado. SIMA 2 declara dificuldade em tarefas de horizonte longo e memória limitada. E o gargalo estrutural é o dado, não o modelo: teleoperação rende de 5 a 50 episódios por hora de operador, enquanto simulação rende milhares por hora por GPU — mas com desconto de fidelidade estimado em cerca de 8 amostras simuladas para o efeito de 1 teleoperada. Há 3,9 milhões de robôs industriais no mundo e o maior conjunto aberto de manipulação tem cerca de 1 milhão de episódios. Não existe "internet de dados sensório-motores".

**Quem está construindo, e em que escala.** No hardware, os números são modestos para o barulho: 19.100 humanoides embarcados no primeiro semestre de 2026, alta de 272% sobre os 5.100 do mesmo período de 2025, com AGIBOT em 8.400 unidades (44%) e Unitree em 5.900 (31%); fornecedores chineses respondem por mais de 97% dos embarques e a China por mais de 85% da demanda. A projeção para o ano fecha perto de 60 mil unidades e US$ 1,6 bilhão. É um mercado do tamanho de um nicho de eletrodoméstico.

**A moldura legal, que está atrás.** A literatura de política pública já sinaliza que as normas de robô industrial e de veículo autônomo são insuficientes para IA corporificada, e pede certificação obrigatória e clarificação de responsabilidade. A União Europeia foi na direção oposta em fevereiro de 2025, retirando a proposta de Diretiva de Responsabilidade em IA e deixando a vítima dependente da Diretiva de Produtos e do direito civil nacional — que em regra exige prova de culpa, difícil diante de opacidade técnica.

## 4. As disrupções-raiz

### D1 — O mundo de treino deixa de ser construído e passa a ser gerado

**O que rompe.** Quebra o pressuposto de que ambiente de simulação é engenharia: geometria, malha, material, script de física, tudo escrito por gente. Se um modelo gera o ambiente a partir de descrição, o custo marginal de um cenário novo cai para perto de zero e a escassez muda de lugar — não falta mundo, falta saber *qual* mundo o robô precisa ver.

**Por que agora e não há cinco anos.** Em 2021 havia vídeo gerativo de poucos segundos, sem controle e sem física. Três coisas mudaram: geração interativa em tempo real (720p/24 fps, com consistência de minutos), modelos que emitem trajetória de ação e não só pixel (Cosmos 3), e abertura de pesos, que tira a técnica do laboratório único.

**O que falta acontecer.** Consistência de horas, não de minutos. Fidelidade física verificável por terceiros — hoje os benchmarks de física são em boa parte publicados por quem vende o modelo. E procedência: nenhum registro público diz em que mundo uma política foi treinada.

### D2 — A política generalista descola a habilidade do corpo

**O que rompe.** Quebra o par fixo "um robô, um programa". Se a mesma política roda em corpos diferentes e executa tarefa que não viu, o ativo econômico deixa de ser a máquina e passa a ser o modelo. O robô vira periférico.

**Por que agora.** A ponte foi o VLA: modelos de visão-linguagem-ação treinados sobre dados heterogêneos de múltiplos corpos, com mecanismos explícitos de transferência de movimento (Gemini Robotics 1.5) e condicionamento por contexto multimodal, incluindo dados subótimos e falhas (π0.7). Há cinco anos o aprendizado por imitação exigia dado da tarefa, naquele corpo.

**O que falta acontecer.** Prova fora da demo. Quase todas as evidências públicas são vídeos e benchmarks dos próprios laboratórios; falta avaliação independente, em ambiente hostil, com taxa de falha publicada. E falta o dado: 8:1 de desconto sim-to-real é um imposto alto para tarefas de contato fino.

### D3 — O agente atravessa mundos sem acesso ao código deles

**O que rompe.** Quebra a distinção entre mundo de entretenimento, mundo de treino e mundo de trabalho. SIMA 2 age em jogo comercial e em mundo gerado pela mesma via que um humano usaria: pixels na entrada, controles na saída, instrução em linguagem natural. Se o agente não precisa de API, qualquer ambiente com affordance legível vira ambiente operável.

**Por que agora.** Antes, agente em jogo significava agente *daquele* jogo, com acesso a estado interno. A combinação de raciocínio de modelo de linguagem com percepção visual e auto-melhoria sem dado humano muda o regime: o agente generaliza entre mundos em vez de ser treinado por mundo.

**O que falta acontecer.** Horizonte longo e memória. E a travessia inversa — do mundo gerado para o chão de fábrica — ainda não tem evidência pública robusta; o que existe é a promessa arquitetural de World Action Models e o caso Waymo de gerar cenários raros de direção.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "O mundo de treino deixa de ser construído e passa a ser gerado"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "Estúdios e laboratórios param de modelar ambientes e passam a descrevê-los, e o custo marginal de um cenário de treino cai para perto de zero."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "O trabalho de quem projeta mundo migra de construir o que o agente vê para escolher o que ele deve ver."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "Consolida-se um ofício entre design de mundo e engenharia de aprendizado, cujo produto é o currículo de treino e não o cenário."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "O valor do dado de treino se concentra na cauda longa, nos eventos raros que ninguém consegue filmar em quantidade."
            sinal: medio
            prazo: 2028
            confianca: media
      - id: e2
        ordem: 1
        efeito: "Auditar um robô passa a exigir auditar o mundo que o treinou."
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "O gerador de mundo entra no escopo de segurança de produto, com laudo próprio ao lado do laudo do robô."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Um registro de procedência de mundo de treino (versão, semente, distribuição) vira condição de homologação em setores críticos."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "Seguradoras passam a precificar operação robótica pela procedência do mundo de treino, não só pelo histórico do equipamento."
            sinal: fraco
            prazo: 2030
            confianca: baixa
      - id: e3
        ordem: 1
        efeito: "Mídia sintética e dado de treino de robô convergem no mesmo pipeline de produção."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "A ferramenta de cinema e jogo e a ferramenta de robótica deixam de ser duas ferramentas."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Para quem cria, a distinção entre renderizar e simular deixa de existir: descrever o mundo é a única interface disponível."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "Quem já domina engine e direção de arte entra em robótica por cima, sem passar pela engenharia mecânica."
            sinal: medio
            prazo: 2028
            confianca: media

  - disrupcao: "A política generalista descola a habilidade do corpo"
    efeitos:
      - id: e4
        ordem: 1
        efeito: "O robô deixa de ser programado e passa a ser instruído, e a linguagem natural vira a interface primária de máquina física."
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "O design de interação ganha um objeto novo, o pedido ambíguo com consequência física irreversível."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Formam-se convenções de escrita para comando físico, equivalentes ao \"confirme antes de apagar\" que a interface gráfica levou décadas para fixar."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "Aparece uma camada de intérprete entre a fala do usuário e o atuador, com direito explícito de recusar o pedido."
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e5
        ordem: 1
        efeito: "O valor econômico migra do hardware para a política, e o corpo caminha para commodity."
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "Surge mercado de políticas, em que instalar uma habilidade num robô se parece com instalar um aplicativo."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Habilidade física passa a ser distribuída com curadoria e revogação remota, e recall de produto vira atualização de software."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "A cadeia se parte geograficamente, com corpos produzidos majoritariamente na China e políticas disputadas entre laboratórios ocidentais e chineses."
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e6
        ordem: 1
        efeito: "A fronteira do erro desloca-se da execução para a compreensão: o robô passa a falhar por ter entendido outra coisa, não por ter errado o movimento."
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "Investigar acidente passa a exigir reconstituição de intenção, não só leitura de telemetria."
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "Torna-se exigível uma caixa-preta semântica, com registro da instrução recebida, da interpretação adotada e das recusas emitidas."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "A responsabilidade se dilui entre quem falou, quem treinou a política, quem gerou o mundo e quem fabricou o corpo, e nenhum regime atual resolve a divisão."
            sinal: medio
            prazo: 2030
            confianca: media

  - disrupcao: "O agente atravessa mundos sem acesso ao código deles"
    efeitos:
      - id: e7
        ordem: 1
        efeito: "Jogo, simulador e fábrica viram o mesmo tipo de lugar para a IA, um espaço com affordances legíveis por visão."
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "Design de mundo passa a ser também design de currículo, e o level designer projeta aprendizado além de diversão."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "Mundos publicados passam a ser avaliados por quanto ensinam a agentes, e alguns passam a ser feitos exclusivamente para isso, sem jogador humano previsto."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: "Produtos de mídia interativa ganham modo agente e telemetria de agente, como hoje ganham camada de acessibilidade."
            sinal: medio
            prazo: 2030
            confianca: media
      - id: e8
        ordem: 1
        efeito: "Espaços físicos começam a ser projetados com legibilidade de máquina como requisito declarado."
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "Sinalização, iluminação e circulação ganham camada dupla, uma para a pessoa e outra para o agente."
            sinal: medio
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: "Instala-se disputa pública sobre a quem o espaço serve, quando o ambiente mais legível para o robô é o menos habitável para gente."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: "Cláusula de ambiente legível por agente começa a aparecer em contrato de logística e de locação industrial."
            sinal: fraco
            prazo: 2031
            confianca: baixa
      - id: e9
        ordem: 1
        efeito: "O humano no chão de fábrica deixa de operar máquina e passa a instruir e corrigir corpos."
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: "O trabalho físico se reorganiza em torno de demonstrar e corrigir, e a perícia manual do trabalhador vira insumo de treino."
            sinal: medio
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: "A demonstração humana vira ativo negociável, e abre-se disputa sobre quem é dono do gesto gravado."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: "Teleoperação deixa de ser controle contínuo e vira intervenção por exceção, com um operador cobrindo muitos corpos."
            sinal: medio
            prazo: 2030
            confianca: media
```

O bloco acima não consegue dizer três coisas.

A primeira é que os prazos não são independentes entre si. Quase tudo em D2 e D3 está atrás de um único gargalo — dado sensório-motor emparelhado com ação — e esse gargalo é compartilhado. Se ele ceder, meia dúzia de efeitos que datei em 2030 antecipa junto; se não ceder, todos atrasam juntos. A roda desenha ramos paralelos onde há, na prática, uma dependência única.

A segunda é que o sinal "forte" de e1 e e3 é forte por razão diferente do sinal "forte" de e4. Nos dois primeiros o sinal é de produção: a ferramenta já está publicada e em uso, e a convergência entre pipeline de mídia e pipeline de robótica é observável na composição da própria coalizão do Cosmos. Em e4 o sinal é de demonstração: os vídeos existem, a operação em escala não. Chamei os dois de forte e são coisas distintas.

A terceira é o que a roda estrutura mal por natureza: o efeito de realimentação. Mundo gerado treina agente, agente gera trajetória, trajetória vira dado, dado treina o gerador de mundo. É um laço, e um laço desenhado como árvore vira três ramos que na verdade são o mesmo. Onde isso mais dói é em e2 — auditar o mundo que treinou o robô fica muito mais difícil quando o mundo foi, em parte, escrito pelo próprio robô.

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — a coalizão mistura casas de vídeo com casas de robô.** A coalizão anunciada com o Cosmos 3 reúne Runway e Black Forest Labs (geração visual) ao lado de Skild AI, Agile Robots e Generalist (robótica). A fronteira entre "quem faz imagem" e "quem faz robô" está sendo apagada por dentro das alianças comerciais, antes de ser apagada nos produtos.

**Sinal fraco 2 — auto-melhoria sem humano no laço.** O item mais subestimado do SIMA 2 não é operar mundo desconhecido, é melhorar por gerações de treino sem nenhum dado humano de jogo. Se isso transferir para tarefa corporificada, a curva de dado deixa de ser limitada por hora de teleoperador — o número que hoje trava tudo.

**Sinal fraco 3 — a corporeidade entrando no raciocínio.** Sistemas que tratam restrição física como parte do modelo de execução, e não como camada de segurança embaixo, invertem a arquitetura: o corpo deixa de ser o que limita o plano e passa a ser o que informa o plano. É uma mudança de projeto, não de desempenho, e por isso passa despercebida em benchmark.

**Sinal fraco 4 — o vácuo regulatório é ativo, não passivo.** A retirada da proposta europeia de responsabilidade em IA, em fevereiro de 2025, não foi omissão: foi escolha declarada por competitividade. O sinal é que a janela de exigência de prova de segurança vai abrir tarde, provavelmente depois do primeiro dano de repercussão.

**Wildcard (baixa probabilidade, alto impacto) — o acidente cuja causa está no mundo, não no robô.** Um dano físico grave em que a perícia conclua que a política agiu corretamente segundo o que aprendeu, e que o defeito estava numa regularidade espúria do mundo gerado — uma física sutilmente errada, um objeto que nunca aparecia com aquela massa. O impacto não é o acidente: é que o réu passa a ser um modelo generativo, cujo "ambiente de treino" não existe como arquivo que se possa periciar. Bastaria um caso assim para inverter em dois anos tudo que descrevi como lento em e2 e e6 — e para impor procedência de mundo como requisito, em vez de boa prática. Probabilidade que atribuo até 2031: baixa, na casa de um dígito, porque a base instalada ainda é pequena demais; impacto, máximo.

**Contra-wildcard, igualmente possível — o platô do mundo gerado.** Consistência de poucos minutos pode não ser um estágio, e sim um teto: se manter coerência espaço-temporal por horas exigir estado explícito, o modelo de mundo volta a precisar de motor de física convencional embaixo e vira camada de aparência sobre o simulador de sempre. Nesse caso D1 encolhe para inovação incremental e derruba metade do mapa.

## 7. Contra o próprio mapa

**Qual efeito é apenas extrapolação linear do presente.** O ramo e5 — valor migra para a política, corpo vira commodity, surge loja de habilidades — é a história do PC e do smartphone recontada com robô no lugar. É sedutora porque já aconteceu duas vezes, e é frágil pela mesma razão: presume que o corpo se padronize, e não há sinal disso. Os dados de embarque mostram morfologias divergentes e integração vertical, não convergência para um padrão de barramento. Software desacoplou de hardware quando a interface entre os dois ficou estável; em robótica a interface é contato físico, e não há indício de estabilização. Marco de e5.1 assim: uma política treinada por um fabricante rodando em corpo de outro, em produção, com taxa de falha publicada por terceiro.

**Qual efeito assume velocidade de adoção irreal.** e4 em 2028 — linguagem natural como interface primária de máquina física — e todo o ramo e8, de espaço físico redesenhado para legibilidade de máquina. O primeiro contraria a base instalada: 19.100 unidades no semestre, contra 3,9 milhões de robôs industriais já operando com programação convencional e vida útil de uma década. O segundo ignora que edifício e galpão têm ciclo de renovação medido em décadas e passam por código de obras, norma técnica e aprovação municipal. Pus 2030–2031 em algo cujo ciclo mínimo de infraestrutura já é maior que o horizonte do mapa. É provável que e8 esteja errado não no conteúdo, mas em uma ordem de grandeza de tempo.

**Qual disrupção-raiz pode não se concretizar e derrubar o mapa inteiro.** D1. Todo o mapa repousa na hipótese de que o mundo gerado é um substituto de treino, e não um adereço visual. A evidência pública ainda não separa as duas leituras: o Genie 3 mantém consistência por minutos e admite não representar lugares reais com precisão; os benchmarks de acurácia física do Cosmos 3 são publicados por quem vende o modelo; e o desconto sim-to-real de cerca de 8:1 indica que dado simulado vale muito menos do que parece. Se a fidelidade física do mundo gerado estacionar no nível "convincente para o olho e insuficiente para o contato", D1 vira ferramenta de pré-visualização e os ramos e1, e2 e e3 caem inteiros, levando junto boa parte de D3 — que depende de haver mundo gerado bom o bastante para o agente aprender dentro. Sobraria D2, que não precisa de mundo gerado: precisa de dado real, teleoperação e escala industrial. Um mapa com uma disrupção só.

**Qual foi o viés da análise.** Três, que declaro.

*Viés de fornecedor.* Metade das fontes de capacidade é material de laboratório e de empresa — NVIDIA, DeepMind, Physical Intelligence — publicado para vender modelo ou levantar rodada. Tentei compensar com números de embarque de terceiro e com literatura de política pública, mas as afirmações sobre *o que o modelo consegue fazer* vêm quase todas de quem o fez. Não encontrei avaliação independente com taxa de falha em operação real.

*Viés anglófono e de publicação.* O recorte é global no nome e na prática é o que se publica em inglês, com a exceção do dado de embarque chinês, que chega já filtrado por analista de mercado. Como 97% dos embarques são de fornecedores chineses, o mapa descreve a fronteira técnica de um lado do mundo e a base instalada de outro, sem ver bem a ponte entre os dois.

*Viés de tela.* Escrevi para quem projeta mídia e interação, e isso puxou o mapa para interface, autoria e design de mundo. Um mapa da mesma disrupção escrito para segurança do trabalho, manutenção industrial ou direito do consumidor teria outro centro de gravidade — e provavelmente começaria pelos efeitos que aqui ficaram em terceira ordem.

**Nota sobre o Brasil.** O Brasil não disputa a fronteira de modelo nem de corpo, e não há evidência de que vá disputar até 2031. A posição plausível é de adotante em cadeias onde já é grande — agronegócio, mineração, logística, manufatura —, o que significa importar política e corpo e exportar dado de operação. Isso torna o ramo e2 (procedência do mundo de treino) e o e6.2 (diluição de responsabilidade) mais agudos aqui do que na origem: quem só opera não tem como auditar o que treinou. A régua jurídica também difere — a responsabilidade objetiva do Código de Defesa do Consumidor cobre parte do que, na Europa, ficou descoberto com a retirada da diretiva de responsabilidade em IA. É uma diferença a favor da vítima e contra a previsibilidade do fornecedor, e vale registrar que não a verifiquei com fonte primária de jurisprudência: é inferência a partir do desenho legal.

## 8. O que a máquina errou

*(a preencher pelo leitor)*

## 9. Três cenários para 2031

* **Provável:** O modelo de mundo se firma como ferramenta de dado — ótimo para gerar variação, cauda longa e caso raro, ruim para contato fino — e convive com simulador físico convencional embaixo. Políticas generalistas dominam manipulação de baixo risco em ambiente controlado (armazém, cozinha industrial, triagem) e não saem do ambiente controlado. Os embarques chegam a algumas centenas de milhares de unidades por ano, ainda com forte concentração chinesa. O ofício de projetar mundo se bifurca de fato: uma parte segue fazendo mundo para pessoa, outra faz mundo para treinar agente, com ferramentas comuns e critérios opostos. A regulação continua atrás, resolvida caso a caso por direito de produto. Nada disso é a virada anunciada, e tudo isso já basta para mudar o trabalho de quem projeta interação.

* **Desejável:** O mesmo cenário, com três coisas a mais. Procedência de mundo de treino vira prática corrente e verificável — versão, distribuição, o que foi e o que não foi mostrado ao agente — de modo que auditar um robô não dependa da boa vontade de quem o treinou. Avaliação independente de política corporificada existe, publica taxa de falha em ambiente hostil, e o mercado passa a comparar por ela em vez de por vídeo de demonstração. E o registro semântico do que foi pedido, entendido e recusado é padrão de projeto, não obrigação legal tardia. Para chegar lá é preciso trabalho que não depende de avanço de modelo: formato aberto de proveniência, um consórcio de avaliação que não venda modelo, e vocabulário de interação para comando físico irreversível — coisa que quem projeta interação pode começar a fazer agora, sem esperar ninguém.

* **Indesejável:** A capacidade cresce mais rápido que a auditoria, e o setor se acostuma a comprar política por demonstração. A primeira falha grave em ambiente compartilhado com público expõe que ninguém consegue reconstituir por que a máquina fez o que fez: telemetria existe, intenção não. A resposta vem em pânico — moratória ampla onde o risco era estreito, e certificação cara o bastante para eliminar todo mundo que não seja um dos três fornecedores grandes. Fecha-se o campo justamente onde ele mais precisaria de variedade. **Sinal precoce de que é este o caminho:** quando surgir um incidente relevante e a investigação não conseguir dizer qual dado, qual mundo ou qual instrução levou à ação — e o setor tratar isso como normal, e não como defeito de projeto.

## 10. O experimento

**O mundo que mente — auditoria de divergência entre simulador e realidade.**

**A pergunta.** Um agente treinado num mundo gerado aprende a física do mundo ou aprende as regularidades do gerador? E, quando erra por causa do mundo, dá para perceber *antes* de o erro sair no real?

**O que se constrói, com o que a turma tem.** Um simulador leve e aberto — MetaDrive para direção, ou MuJoCo se o recorte for manipulação — e uma tarefa mínima com critério objetivo de sucesso. Treina-se uma política simples nesse ambiente. Em seguida, e este é o ponto do experimento, **corrompe-se o mundo de um jeito plausível e invisível**: atrito 15% menor, latência de sensor de 80 ms, massa de um objeto sempre igual em vez de variar, iluminação sempre da mesma direção. Nada que o olho note num vídeo. Treina-se a segunda política no mundo corrompido. Depois avaliam-se as duas no mundo original e numa terceira variante que nenhuma viu.

**O que se mede.** Quanto do desempenho vem da tarefa e quanto vem de ter decorado a regularidade espúria. Se a política B for excelente no mundo B e desabar no mundo A, aprendeu o gerador. A pergunta de fundo é a seguinte: **existe alguma métrica calculável só a partir do comportamento do agente que denuncie a corrupção sem que a gente já saiba qual foi?** Essa é a versão de sala do problema real de auditoria de procedência.

**O que a turma faz em aula.** A dinâmica que funciona é a cega: um grupo corrompe o mundo e não conta o que fez; os outros recebem duas políticas e quinze minutos para descobrir qual foi treinada no mundo mentiroso, e em quê ele mente. Só podem olhar comportamento — trajetória, taxa de sucesso, onde falha, não o código. Vira um jogo de perícia, que é exatamente o trabalho que o cenário indesejável diz que ninguém vai saber fazer.

**Qual resultado mudaria minha ideia.** Se a turma detectar a corrupção com facilidade, por comportamento, em ambiente simples, então auditar procedência de mundo é mais tratável do que supus e os efeitos e2.1 e e2.1.1 devem ser antecipados e subir de confiança. Se ninguém conseguir nem num simulador de brinquedo, com corrupção conhecida por alguém da sala e tarefa de dois minutos, então o wildcard do acidente cuja causa está no mundo deixa de ser wildcard e vira o cenário provável de perícia — e o mapa inteiro precisa ser reescrito com a auditabilidade como disrupção-raiz, não como consequência.

## 11. Fontes

1. https://nvidianews.nvidia.com/news/nvidia-launches-cosmos-3-the-open-frontier-foundation-model-for-physical-ai — Lançamento do Cosmos 3 em 31/05/2026: arquitetura de mistura de transformers, geração de texto, imagem, vídeo, som e ação, abertura por Hugging Face e GitHub, composição da coalizão. Fonte primária do fabricante: confiável quanto ao que foi lançado e quando, não confiável quanto a desempenho comparado, que é autodeclarado.
2. https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/ — Genie 3: ambientes interativos a 720p e 24 fps a partir de prompt, consistência de poucos minutos, memória visual de cerca de um minuto, e lista explícita de limitações. Fonte primária de laboratório; o valor está justamente nas limitações declaradas pelos próprios autores.
3. https://deepmind.google/blog/sima-2-an-agent-that-plays-reasons-and-learns-with-you-in-virtual-3d-worlds/ — SIMA 2 (13/11/2025): agente Gemini que opera mundos 3D inéditos, inclusive gerados pelo Genie 3, e melhora por gerações de treino sem dado humano de jogo; limitações de horizonte longo e memória. Fonte primária de laboratório, com demonstração pública e sem avaliação de terceiros.
4. https://arxiv.org/abs/2604.15483 — π0.7, Physical Intelligence (abril de 2026): modelo de fundação robótico com condicionamento por contexto multimodal, generalização entre corpos e uso de dados subótimos e de falha. Preprint arXiv não revisado por pares, de laboratório com interesse comercial; as capacidades são autoavaliadas.
5. https://arxiv.org/abs/2510.03342 — Gemini Robotics 1.5 (outubro de 2025): VLA multi-corpo, mecanismo de Motion Transfer e raciocínio interno em linguagem natural antes da ação. Preprint arXiv com mais de 170 autores, CC BY 4.0; mesma ressalva de autoavaliação.
6. https://www.humanoidsdaily.com/news/global-humanoid-shipments-surge-272-in-1h-2026-as-agibot-overtakes-unitree — Embarques globais de humanoides no 1º semestre de 2026: 19.100 unidades, alta de 272%, AGIBOT com 8.400 e Unitree com 5.900, mais de 97% de fornecedores chineses, projeção de 60 mil unidades no ano. Veículo especializado citando relatório da Smart Analytics Global; é o contrapeso quantitativo ao discurso dos fabricantes, mas depende de uma consultoria única, não auditada.
7. https://www.shaip.com/blog/robot-training-data-strategy/ — Gargalo de dado: 5 a 50 episódios por hora de teleoperação contra milhares por hora por GPU em simulação, razão de cerca de 8 amostras simuladas para 1 teleoperada, 3,9 milhões de robôs industriais contra cerca de 1 milhão de episódios no maior conjunto aberto. Material de empresa de rotulagem de dados, portanto interessado; os números batem com a literatura de sim-to-real e foram usados como ordem de grandeza, não como medida.
8. https://arxiv.org/abs/2509.00117 — Perlo, Robey, Barez, Floridi e Mökander, "Embodied AI: Emerging Risks and Opportunities for Policy Action" (agosto de 2025): taxonomia de riscos físico, informacional, econômico e social, e argumento de que as normas de robô industrial e veículo autônomo são insuficientes. Preprint acadêmico de autores sem vínculo de fornecedor; sustenta o argumento regulatório do mapa.
9. https://www.migalhas.com.br/coluna/migalhas-de-responsabilidade-civil/442680/responsabilidade-civil-fora-do-ai-act-e-o-impacto-da-decisao-da-ue — Maranhão e Nogaroli (21/10/2025) sobre a retirada, em fevereiro de 2025, da proposta de Diretiva de Responsabilidade em IA, e o que sobra para a vítima: Diretiva de Produtos e direito civil nacional, em regra com exigência de prova de culpa. Coluna jurídica assinada por especialistas em veículo especializado brasileiro; é opinião fundamentada, não decisão nem norma.

## 12. Anexo — o levantamento bruto

**Registro da entrevista (Etapa a).** A skill exige parar e perguntar antes de gerar. Nesta execução não havia interlocutor disponível para responder em tempo real; as respostas foram fornecidas antecipadamente, por escrito, junto com o pedido, e são estas:

1. *Horizonte de tempo:* 2031.
2. *Público-alvo:* quem projeta mídia e interação.
3. *Recorte geográfico:* global, com uma nota sobre o Brasil.
4. *Fora de escopo:* o que já é comum em produto de massa (régua da disciplina). Nenhuma outra exclusão. Sem disrupção suspeita apontada de antemão — a instrução foi descobri-la. Ideias óbvias a excluir: as que serviriam para qualquer tema.
5. *Viés desejado:* neutro. Profundidade em três ordens; modo de análise a partir de uma inovação, não de um setor.

Critério de refutação declarado pelo solicitante: mudaria de ideia diante de evidência de que a adoção já passou da maioria inicial na curva de Rogers, ou de que a tecnologia não rompe nada e apenas melhora o que existe.

**Filtro de maturidade (Etapa b) — decisão: DISRUPTIVO, execução autorizada.** O tema foi avaliado em partes, e nem todas passam.

*Reprovado como maduro, e por isso mantido fora do mapa:* ROS e seu ecossistema, planejamento de trajetória (MoveIt 2, OMPL, pinocchio), SLAM e navegação visual-inercial (OpenVINS), sistemas operacionais de tempo real, MAVLink, e a simulação física escrita à mão (MuJoCo, PhysX, AirSim, habitat-sim, MetaDrive) enquanto ferramenta. Tudo isso tem infraestrutura consolidada, mercado estabelecido e serve de base para o que vem depois — é o chão, não a ruptura. Braço robótico industrial e veículo com piloto automático também ficaram de fora pela régua do "já comum em produto de massa".

*Aprovado como disruptivo:* o modelo de mundo gerativo, que troca o paradigma de construir ambiente pelo de gerá-lo, alterando quem é o autor do mundo e qual o custo marginal de um cenário; a política generalista transferível entre corpos, que desfaz o par fixo entre máquina e programa e desloca o ativo econômico do hardware para o modelo; e o agente que opera qualquer mundo 3D sem acesso ao código, que apaga a distinção entre ambiente de entretenimento, de treino e de trabalho. Os três atendem ao critério: não melhoram um processo existente, mudam o modelo mental de quem projeta mundo e de quem opera máquina.

*Ressalva registrada na decisão:* a aprovação de D1 depende de uma hipótese ainda não demonstrada publicamente — a de que o mundo gerado serve de substrato de treino, e não apenas de pré-visualização. Isso foi mantido, e está exposto na Seção 7 como o ponto único de falha do mapa.

**Caminhos abandonados, e por quê.**

- *Organizar por setor* (logística, saúde, agro, defesa). Descartado por instrução explícita de modo: a análise parte da inovação, não do setor. Rodar por setor produziria um mapa mais legível para executivo e menos revelador para quem projeta interação.
- *Fazer da IA física em geral a disrupção-raiz.* Descartado por ser grande demais para ser falseável. "IA ganha corpo" não é enunciado que se possa derrubar; foi decomposto em três rupturas com critério de falha próprio.
- *Enxame de drones como quarta disrupção* (o wildcard de resgate em incêndio trazido pela turma). Descartado por sobreposição: coordenação multiagente é outro objeto, e a parte dele que pertence a este tema — corpo, mundo e aprendizado — já está coberta por D2 e D3.
- *Efeitos sobre emprego como ramo próprio.* Descartado como ideia genérica: "a tecnologia muda o trabalho" serve para qualquer tema do catálogo e a instrução foi excluir exatamente isso. Foi mantido só no ponto em que é específico deste tema — e9, o trabalhador que passa a instruir corpos e cuja perícia manual vira insumo de treino, com a disputa sobre a propriedade do gesto gravado.
- *Simulação de sociedades, captura 3D do mundo real e segmentação visual.* Fora de fronteira: são os temas 6, 10 e 11 da disciplina. Citados apenas quando encostam.
- *Fontes buscadas e não usadas.* Material de consultoria de mercado sobre tamanho futuro do setor de humanoides e agregadores de notícia sem dado primário foram deixados de lado: projeção de mercado não sustenta afirmação sobre capacidade técnica. Ficou a lacuna admitida na Seção 7 — não encontrei, em busca aberta, nenhuma avaliação independente de política corporificada com taxa de falha publicada por terceiro em operação real. Se existe, não estava acessível; se não existe, é o dado mais importante que falta neste mapa.
