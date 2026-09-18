---
tema: Agentes corporificados, IA física e modelos de mundo
slug: agentes-corporificados-ia-fisica-e-modelos-de-mundo
autor_login: mjbo
zona_de_interesse: Simulação e mundos
data: 2026-09-17
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 15
efeitos_ordem_3: 16
tecnologias_citadas: [NVIDIA Cosmos 3, Genie 3, SIMA 2, Gemini Robotics 1.5, Gemini Robotics-ER 1.5, Isaac GR00T N1.7, Isaac Sim, Isaac Lab, Isaac ROS, Jetson AGX Thor, Unitree H2 Plus, pi0, pi0.5, pi*0.6, pi0.7, MetaDrive, MuJoCo, Genesis, habitat-sim, AirSim, drake, MAVLink, ROS 2, Waymo Driver, PhyWorldBench, WorldModelBench, VideoPhy-2, Hugging Face Diffusers, NVIDIA NIM]
fontes: 14
confianca: media
experimento: Banco de divergência — o mesmo cenário em dois mundos
skill_usada: futurizacao-mjbo
publico_ok: false
---

## 1. Resumo

A IA saiu da tela e ganhou corpo, mas o deslocamento que importa para quem projeta mídia e interação
não é o robô: é o lugar onde ele aprende. Em 2026 o ambiente de treino deixou de ser um cenário
autorado por alguém e passou a ser gerado por um modelo — Genie 3 sustenta um mundo navegável a 720p
e 24 fps a partir de texto, e o Cosmos 3 da NVIDIA saiu como omnimodelo aberto que gera vídeo, som e
trajetórias de ação. Ao mesmo tempo, políticas generalistas começaram a transferir habilidade entre
corpos diferentes sem retreino, e agentes como o SIMA 2 operam jogos que nunca viram usando apenas
pixels e teclado. Deste feixe derivam três rupturas: o cenário de treino vira artefato gerado e não
autorado; o comportamento do robô se desacopla do robô e vira assinatura de modelo; e o mundo 3D deixa
de ser só produto e passa a ser também ambiente de avaliação de máquinas. Contra tudo isso pesa um
dado incômodo: nos benchmarks de realismo físico, o melhor modelo de vídeo acerta cerca de 26% dos
casos, e realismo visual correlaciona pouco — às vezes negativamente — com compreensão de física.
O mapa aposta que a disputa de 2031 não será sobre robôs, e sim sobre quem responde pelo mundo em que
eles aprenderam.

## 2. O tema

Agente corporificado é a IA que age num corpo — braço, humanoide, drone, caminhão — e que, por isso,
erra contra a matéria e não contra um texto. "IA física" é o rótulo comercial que a indústria deu a
esse conjunto em 2025-2026. E "modelo de mundo" é a peça nova: um modelo que **gera** o ambiente em
vez de renderizá-lo a partir de uma cena que alguém modelou. O robô treina num mundo que a IA
inventou, e depois é solto no mundo que existe.

Isso encosta em mídia e interação por três costuras, e nenhuma delas é metáfora.

A primeira é a **ferramenta**. O mesmo artefato que gera ambiente de treino para um robô gera ambiente
jogável para uma pessoa — Genie 3 é descrito pelo próprio laboratório tanto como plataforma de treino
de agentes quanto como mundo navegável em tempo real. Quem projeta experiência interativa e quem
projeta currículo de treino de máquina passam a operar a mesma caixa, com as mesmas limitações de
memória, consistência e deriva.

A segunda é o **ofício**. Se o cenário de treino é gerado por prompt, a autoria de mundo deixa de ser
modelagem e vira especificação de distribuição: não "esta sala", mas "salas assim, nesta variedade,
com esta frequência de caso raro". Isso é uma competência de design, não de engenharia — e hoje não
existe formação para ela.

A terceira é a **interface**. Um agente generalista que segue instrução em linguagem natural dentro de
um mundo 3D, sem acesso ao código do mundo, é um usuário sintético do seu produto. Ele lê o que você
desenhou pelos pixels, como um humano — e falha onde a affordance é ambígua, também como um humano.
O design de mundo vira, de fato, objeto de avaliação por máquina.

Por que merece mapa de futuro e não levantamento de estado da arte: porque o estado da arte aqui muda
de trimestre em trimestre e envelhece antes de ser lido, enquanto as perguntas que ele abre — quem
responde por um erro cuja causa está no simulador, o que acontece com o trabalho físico quando o
comportamento se desacopla do corpo, o que sobra de "ambiente" quando ele é projetado para humanos e
máquinas ao mesmo tempo — têm prazo de validade longo e nenhuma resposta estabelecida.

## 3. Onde isso está hoje

### O que já existe e funciona em produção

**Condução autônoma é o único caso em escala real.** A Waymo informa 500 mil corridas pagas por semana
em dez cidades americanas em março de 2026, com meta de um milhão semanais até o fim do ano, e mais de
4 milhões de milhas autônomas por semana [6]. O ponto relevante para este mapa está no texto técnico da
própria empresa: a simulação de malha fechada — em que o tráfego ao redor reage ao que o carro faz — é
tratada como indispensável, e a simulação de malha aberta, que só reproduz gravação, é descartada como
"entrar num replay de vídeo". E a frase que o mapa inteiro tem de carregar: *"não há substituto para
milhas autônomas reais"* [6]. Quem mais depende de simulação no mundo é também quem mais explicitamente
diz que ela não basta.

**Mineração e indústria pesada operam autonomia há anos, em ambiente fechado.** No Brasil, a Vale
opera cerca de 20 caminhões autônomos Komatsu em Carajás Serra Norte desde 2021, começou em setembro
de 2026 a introduzir caminhões com tecnologia Caterpillar em Parauapebas, e projeta cerca de 90
veículos autônomos no Sistema Norte — 60 em Serra Norte, 30 em Serra Sul. Junto disso, treina cerca de
2 mil empregados até o fim de 2026 em operação, manutenção, planejamento e "controle da autonomia",
com papéis novos de controlador e técnico de pátio em centro de controle [8]. É o retrato mais honesto
de IA física em produção que encontrei: pouca máquina, muita gente reposicionada em volta dela.

**Simuladores físicos e o middleware são maduros.** ROS 2, MoveIt, OMPL, SLAM, Isaac Sim, MuJoCo,
MetaDrive, AirSim, habitat-sim, drake — nada disso é fronteira. É a camada sobre a qual a fronteira se
apoia, e foi por isso reprovada no teste de disrupção da Etapa 3 (ver Seção 4 e Anexo).

### O que existe como protótipo, demo ou modelo liberado, mas não está em produção

**Modelos de mundo gerativos.** O Genie 3 gera ambientes interativos a partir de texto, navegáveis em
tempo real a 720p e 24 fps, com consistência sustentada por "alguns minutos" e memória visual de até
um minuto para trás; aceita **eventos de mundo promptáveis** — mudar o clima, inserir um objeto ou um
personagem no meio da execução, o que é a máquina de contrafactual mais barata já construída. O próprio
laboratório lista limitações duras: espaço de ação do agente restrito, dificuldade com interação entre
múltiplos agentes independentes, ausência de precisão geográfica, renderização de texto ruim, e duração
em minutos e não em horas. Disponibilidade: prévia de pesquisa limitada [3].

**Cosmos 3 (NVIDIA), lançado em 31 de maio / 1º de junho de 2026**, é apresentado como o primeiro
omnimodelo totalmente aberto que entende e gera texto, imagem, vídeo, som ambiente e ações, sobre uma
arquitetura de mistura de transformers que junta um transformer de raciocínio a um de geração; pesos no
Hugging Face, código no GitHub, implantação como microserviço NIM. A promessa declarada é reduzir
ciclos de treino e avaliação de física "de meses para dias" e substituir coleta de dado real por
ambiente sintético; a coalizão anunciada inclui Agile Robots, Black Forest Labs, Generalist, LTX,
Runway e Skild AI, além de Doosan, LG, Samsung e Li Auto [1]. O artigo original da plataforma formula a
tese de forma limpa: *"a IA física precisa ser treinada digitalmente primeiro — precisa de um gêmeo
digital de si mesma, o modelo de política, e de um gêmeo digital do mundo, o modelo de mundo"* [10].

**Políticas generalistas com transferência entre corpos.** O Gemini Robotics 1.5 é um par: o ER 1.5
planeja, raciocina e chama ferramentas; o 1.5 executa mostrando o raciocínio em linguagem natural antes
de mover. O achado que interessa é a transferência entre corpos — tarefas treinadas no ALOHA 2
funcionaram no humanoide Apollo e no bi-braço Franka **sem retreino do modelo**. O ER 1.5 está aberto
a desenvolvedores via Gemini API e AI Studio; o 1.5 executor ficou restrito a parceiros selecionados [2].
Do lado da Physical Intelligence, a linha vai de π0 (outubro de 2024, aberto em fevereiro de 2025) a
π0.5 com generalização em ambiente aberto (abril de 2025), π*0.6 treinado com aprendizado por reforço a
partir da própria experiência (novembro de 2025) e π0.7, "modelo dirigível com capacidades emergentes"
(abril de 2026) [4].

**Agente generalista em mundo 3D.** O SIMA 2 joga por pixels e teclado, sem acesso ao estado interno do
jogo; conversa sobre os próprios objetivos, tem sucesso em jogos que nunca viu, como MineDojo e ASKA, e
se automelhora por tentativa e erro com feedback do Gemini, sem dado humano novo. Foi solto dentro de
mundos gerados pelo Genie 3 e funcionou em ambientes que não existiam antes do prompt. Limitações
declaradas: raciocínio longo em várias etapas, memória de interação curta por causa de latência, e
precisão baixa no controle de baixo nível [11].

**Humanoides.** A NVIDIA anunciou em 1º de junho de 2026, na GTC Taipei, um robô humanoide de referência
aberto: corpo Unitree H2 Plus (≈1,80 m, 68 kg, 31 graus de liberdade), mãos Sharpa Wave de cinco dedos
(22 graus de liberdade cada), computação embarcada Jetson AGX Thor T5000 com 128 GB de memória
unificada, ~3 horas de bateria, carga nominal de 7 kg; software Isaac Teleop, Isaac Sim/Lab, Isaac ROS e
o modelo VLA aberto Isaac GR00T N1.7. Entrega pela Unitree no fim de 2026; adotantes anunciados: Ai2,
ETH Zurich, Stanford Robotics Center e o laboratório de robótica avançada da UC San Diego [7].

### O que existe e **não** funciona

**Física.** O PhyWorldBench avaliou 12 modelos de geração de vídeo — cinco proprietários (Sora-Turbo,
Gen-3, Kling 1.6, Pika 2.0, Luma) e sete abertos (Hunyuan, Open-Sora, CogVideoX-1.5, Step-video-T2V,
Wanx-2.1, LTX-Video). O melhor resultado foi de cerca de **26%** de sucesso, com a maioria abaixo; em
cenários deliberadamente antifísicos, os modelos tendem a produzir a cena "razoável" em vez da violação
pedida, o que os autores leem como sinal de que reproduzem padrão de dado e não compreensão de física.
A conclusão é explícita: falta progresso substancial para que sirvam como simuladores de mundo [5].
Um achado correlato, recorrente nessa literatura, é que o modelo mais convincente visualmente não é o
mais correto fisicamente — realismo e entendimento físico correlacionam pouco, às vezes em sentido
contrário.

**Estado.** Um trabalho de 2026 argumenta que o problema dos modelos de mundo em pixels não é
resolução, é arquitetura: sem estado explícito, o mundo existe apenas como janela de observações
recentes, as regras viram correlação de pixels, cenas mudam silenciosamente ao sair do campo de visão, e
a mesma entrada expressa intenções diferentes conforme um estado que o modelo não representa. A proposta
é voltar ao laço ação-estado-observação dos motores de jogo convencionais [13]. Para quem projeta mídia
interativa, isso é a diferença entre um mundo bonito e um mundo em que uma porta trancada continua
trancada.

### Quem está construindo

NVIDIA (Cosmos, Isaac Sim/Lab, GR00T, Jetson Thor, coalizão de parceiros) e Google DeepMind (Genie,
SIMA, Gemini Robotics) ocupam as duas pontas — modelo de mundo e política — e são também as duas fontes
mais interessadas na tese deste mapa, o que anoto aqui e cobro de volta na Seção 7. Ao redor: Physical
Intelligence (π), Skild AI, Generalist, Agile Robots, Unitree como corpo padrão, Waymo em condução, e
um ecossistema aberto — MuJoCo, Genesis, MetaDrive, habitat-sim, AirSim, drake — que é a infraestrutura
real de quem não tem centro de dados.

### Regulação, já datada

O Regulamento de Máquinas da UE 2023/1230 passa a se aplicar em **20 de janeiro de 2027**. Ele nomeia
como alto risco os componentes de segurança com comportamento autoevolutivo por aprendizado de máquina,
o que retira a autocertificação e obriga avaliação por organismo notificado; torna a cibersegurança
requisito essencial; e mantém a regra da **modificação substancial** — quem modifica a máquina, física
ou digitalmente, de modo a criar risco novo, torna-se o fabricante dela, com o dever de conformidade e a
responsabilidade que isso carrega [9]. Essa última linha é o que transforma "atualizar a política do
robô por rede" em evento jurídico, e é a âncora mais dura do ramo e4.2 da roda.

## 4. As disrupções-raiz

As três abaixo passaram no teste escrito da Etapa 3 — o que torna possível o que antes não era, que
prática estabelecida ameaça invalidar, e por que agora e não há cinco anos. O que reprovou está no
Anexo, com o motivo.

### D1 — O ambiente de treino deixa de ser autorado e passa a ser gerado

**O que rompe.** Até aqui, treinar um agente num mundo sintético exigia que alguém construísse o mundo:
malha, material, física, script de evento. O gargalo do treino era autoral. Com Genie 3 e Cosmos 3, o
ambiente vira saída de modelo: descreve-se em texto, navega-se em tempo real, altera-se o clima no meio
da execução, e gera-se variação em volume. O que antes não era possível não é "cenário mais barato" — é
**contrafactual sob demanda**: a mesma cena com a chuva, com a criança atravessando, com o reflexo no
piso molhado, sem ninguém modelar nenhuma das três [1][3][10].

**O que invalida.** A cadeia de fornecimento do dado de robótica: as casas de teleoperação que coletam
demonstração humana e as equipes de modelagem 3D que constroem cenário de treino. Invalida também a
premissa de que o simulador é inspecionável — um motor físico é código que se lê; um modelo de mundo é
peso que se amostra.

**Por que agora.** Três coisas mudaram entre 2021 e 2026 e nenhuma é "a tecnologia melhorou":
geração interativa em tempo real com consistência de minutos, e não de segundos (Genie 2 sustentava
~10 s; Genie 3 sustenta minutos a 24 fps) [3]; pesos abertos com licença permissiva, o que tira a
capacidade das mãos de um único fornecedor de nuvem [1][10]; e a incorporação de **ação** como
modalidade nativa junto de texto, imagem, vídeo e som [1].

**O que falta para se concretizar.** Física. Nos benchmarks, o melhor modelo fica em torno de 26% de
adesão física, e realismo visual não prediz correção física [5]. Falta também horizonte: minutos não
treinam tarefa longa. E falta estado persistente — sem ele, o mundo gerado não sustenta regra, só
aparência [13].

### D2 — O comportamento se desacopla do corpo: política generalista transferível

**O que rompe.** Habilidade aprendida num robô rodando em outro, sem retreino, foi demonstrada
publicamente: treinado no ALOHA 2, executado no Apollo e no Franka [2]. Junte-se a isso o robô que
"pensa antes de agir", produzindo em linguagem natural o plano que vai executar, e que aprende da
própria experiência por reforço em vez de só imitar demonstração [2][4]. Antes, comportamento era
propriedade do par robô-tarefa; agora é um artefato que viaja.

**O que invalida.** A integração de robótica como se pratica: programar a célula, a trajetória, a
exceção — trabalho que é hoje a maior parte do custo de automatizar uma linha. Invalida também a ideia
de que comprar um robô é comprar o que ele faz; passa a ser comprar um corpo e assinar um
comportamento, com tudo que "assinatura" implica de dependência, atualização e revogação.

**Por que agora.** Modelos de visão-linguagem grandes o bastante para raciocinar sobre cena; conjuntos
de dados multi-robô que não existiam; disponibilidade aberta de modelos VLA (π0 aberto em 2025,
GR00T N1.7 aberto, ER 1.5 via API) [2][4][7]; e um corpo de referência padronizado que torna resultado
de laboratório comparável entre laboratórios [7].

**O que falta.** Confiabilidade sustentada fora de demonstração — as taxas de sucesso em tarefa longa
seguem abaixo do que uma linha de produção aceita; segurança certificável sob o regime de 2027 [9]; e
custo de corpo. O humanoide de referência tem ~3 horas de bateria e 7 kg de carga nominal [7]: não é um
trabalhador, é um laboratório com pernas.

### D3 — O mundo 3D vira ambiente de avaliação: o agente generalista sem acesso ao código *(emergente, com ressalva)*

**O que rompe.** Um agente que opera qualquer mundo 3D pelos pixels, com teclado e mouse, sem API e sem
acesso ao estado do jogo, e que se automelhora gerando as próprias tarefas em ambientes que nunca viu —
inclusive em mundos que não existiam antes de um prompt [11]. O que isso torna possível e antes não era:
o mesmo agente atravessar produtos diferentes sem que ninguém o instrumentalize para cada um.

**A ressalva, exigida pelo próprio teste.** Esta é a única das três que **não** passou com folga no item
2 do teste da Etapa 3: ainda não consigo nomear uma prática que ela já invalidou. O playtest humano não
foi substituído, o QA automatizado por script não morreu, e as limitações declaradas — raciocínio longo,
memória curta, controle impreciso [11] — são exatamente as que impediriam a substituição. Entra como
**emergente**: aposta com caminho plausível, não rompimento consumado. Os efeitos e6 e e7 herdam essa
fragilidade e devem ser lidos com ela.

**Por que agora.** A junção do raciocínio de um modelo grande com um laço de ação em pixels, e a
automelhoria sem dado humano novo — que é o que quebra o teto de custo da coleta [11].

**O que falta.** Precisão motora fina na interface de entrada, memória longa, e uma razão econômica para
alguém preferir isso a um agente instrumentado com acesso ao estado, que é mais barato e mais confiável
para quem controla o código.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O ambiente de treino deixa de ser autorado e passa a ser gerado por modelo de mundo
    efeitos:
      - id: e1
        ordem: 1
        efeito: A maior parte das horas de experiência de um agente físico passa a ser vivida em ambiente que ninguém autorou
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A autoria de cenário de treino migra de modelagem 3D para especificação de distribuição em linguagem
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O ofício de level design se parte em dois, entre quem desenha experiência para humano e quem desenha currículo para máquina
                sinal: fraco
                prazo: 2032
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: Licenciar o estilo visual de um acervo para geração de dado de treino vira item de contrato de artista e de estúdio
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A auditoria do simulador vira etapa formal de validação, porque o ambiente deixa de ser legível linha a linha
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Surge o papel de perito de simulação, chamado depois de um acidente para explicar o que o mundo sintético continha
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e1.3
            ordem: 2
            efeito: O custo marginal de um cenário raro cai perto de zero e o teste de borda vira rotina em vez de evento
            sinal: medio
            prazo: 2028
            confianca: alta
            efeitos:
              - id: e1.3.1
                ordem: 3
                efeito: Cobertura de teste deixa de ser lista de casos e passa a ser distribuição amostrada, virando objeto de disputa técnica e contratual
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A divergência entre o mundo gerado e o mundo real se torna a principal fonte nomeada de falha em sistemas físicos
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Contratos e apólices passam a exigir prova de validação em mundo real, e não apenas em simulação
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: A milha real vira gargalo econômico e concentra a operação em quem tem frota para rodá-la
                sinal: medio
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Benchmarks de fidelidade física viram critério declarado de compra de simulador, como benchmark de renderização foi para placa de vídeo
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Um índice público de fidelidade física passa a ser citado em edital, licitação e requisito de seguro
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: O mesmo modelo que gera mundo para treinar máquina passa a gerar mundo para consumo humano
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Do ponto de vista da ferramenta, a fronteira entre simulador e mídia interativa desaparece
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Times de jogo e times de robótica disputam as mesmas pessoas, e a formação em mundos virtuais se unifica em torno da ferramenta e não do produto
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: A mídia gerada perde continuidade de estado, e o design passa a tratar consistência como recurso escasso a ser orçado
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Consolida-se a arquitetura híbrida, com estado simbólico explícito por baixo e geração por cima, como padrão de projeto de mundo
                sinal: fraco
                prazo: 2031
                confianca: media
  - disrupcao: O comportamento se desacopla do corpo por meio de políticas generalistas transferíveis entre robôs
    efeitos:
      - id: e4
        ordem: 1
        efeito: Comprar um robô deixa de ser comprar um comportamento e passa a ser comprar um corpo mais uma assinatura de política
        sinal: fraco
        prazo: 2030
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: O integrador que programava célula por célula perde a maior parte do escopo e migra para instalação, segurança e curadoria de dado
            sinal: fraco
            prazo: 2031
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A margem da robótica industrial se desloca do hardware e da integração para quem fornece a política
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Atualizar a política de um robô em operação vira evento regulado, equiparado a modificação substancial de máquina
            sinal: medio
            prazo: 2028
            confianca: alta
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: O robô certificado passa a operar com versão congelada, e a melhoria contínua migra para um canal paralelo de homologação, como na aviação
                sinal: fraco
                prazo: 2031
                confianca: media
      - id: e5
        ordem: 1
        efeito: A interface de comando de máquina física passa a ser linguagem natural com confirmação, em vez de painel e sequência programada
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Projetar interação com robô vira projetar o que ele declara antes de agir, e não que botão ele expõe
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Convenções de sinalização de intenção corporal do robô se padronizam e entram em norma técnica de segurança
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: O operador vira supervisor de vários corpos ao mesmo tempo e o gargalo do sistema passa a ser a atenção humana
            sinal: medio
            prazo: 2029
            confianca: alta
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Carga de supervisão vira métrica contratual e objeto de negociação sindical, como jornada e pausa foram na operação de máquina pesada
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: Agentes generalistas operam qualquer mundo 3D pelos pixels, sem acesso ao código do mundo
    efeitos:
      - id: e6
        ordem: 1
        efeito: O playtest deixa de depender de agenda humana e passa a rodar continuamente durante a produção
        sinal: fraco
        prazo: 2030
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Dificuldade passa a ser medida também contra agente, e o design se ajusta a um jogador que não se cansa nem desiste
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Jogos passam a ser projetados com duas curvas de dificuldade, e a divergência entre a humana e a sintética vira instrumento de diagnóstico de design
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: A acessibilidade ganha uma via nova, em que o jogador descreve a intenção e o agente executa a manobra
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Descricao de intencao entra como categoria de entrada nas diretrizes de acessibilidade de jogo
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: O mundo 3D deixa de ser apenas produto final e passa a ser também ambiente de avaliação de agentes
        sinal: fraco
        prazo: 2030
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Estúdios licenciam seus mundos como banco de avaliação, e o acesso a eles vira ativo negociável
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Termos de uso passam a distinguir jogador humano de agente automatizado, com preço, limite e regra distintos
                sinal: fraco
                prazo: 2031
                confianca: media
          - id: e7.2
            ordem: 2
            efeito: A fabrica, o hospital e o jogo passam a ser descritos no mesmo formato de ambiente para consumo de maquina
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: Um formato comum de descricao de ambiente se consolida, e quem o controlar ocupa a posicao de dono de padrao de arquivo
                sinal: fraco
                prazo: 2033
                confianca: baixa
```

### O que o bloco não diz

**Os três ramos não têm o mesmo chão.** O ramo e4.2 — atualização de política como modificação
substancial — é o único com data marcada em lei: 20 de janeiro de 2027 [9]. Ele está no mapa como
previsão, mas é quase leitura de calendário. Já o ramo e7 inteiro é derivado de uma disrupção que a
própria Etapa 3 classificou como emergente com ressalva; se o SIMA 2 e seus sucessores não saírem do
laboratório, e6 e e7 caem juntos e o mapa perde um terço.

**O bloco esconde uma assimetria de tempo entre gerar e validar.** Gerar mundo ficou barato em 2026;
validar que o mundo estava certo continua caro e continua sendo feito no mundo real. Toda a metade
esquerda da roda (e1, e1.3) acelera, e a metade que a controla (e1.2, e2.1) não acelera junto. A tensão
entre as duas é a história deste mapa, e uma estrutura de árvore não mostra tensão — mostra derivação.

**Falta o eixo do custo de energia e de corpo.** Nenhum efeito acima foi derivado de preço de bateria,
de cadeia de suprimento de atuador ou de disponibilidade de GPU, e esses são os fatores que mais
provavelmente vão decidir se e4 acontece em 2030 ou em 2040. Cortei-os porque não encontrei fonte que
eu tivesse de fato aberto para sustentá-los, e inventar número de custo seria pior que omitir.

**E falta o efeito sobre o trabalho, que o briefing pedia em terceira ordem.** Ele aparece de lado, em
e5.2 e e4.1, e não como ramo próprio. A razão está na regra de parada da Etapa 4: "a IA física barata
esvazia o trabalho físico" exige encadear pelo menos três suposições independentes não testadas — que o
corpo fique barato, que a política fique confiável e que a regulação permita. Isso é especulação de
especulação. O único dado real que tenho aponta para o outro lado: 20 caminhões autônomos e 2 mil
pessoas sendo requalificadas em volta deles [8].

## 6. Sinais fracos e wildcards

### Sinais fracos

**O retorno do estado explícito.** Enquanto a narrativa pública celebra geração pura em pixels, aparece
em 2026 a defesa de que o modelo de mundo precisa recuperar o laço ação-estado-observação do motor de
jogo convencional, porque sem estado o mundo não sustenta regra [13]. Se esse movimento vencer, o futuro
não é "o modelo substitui a engine" e sim "a engine volta como camada de baixo, com o modelo por cima" —
e o efeito e3.2.1 deixa de ser terceira ordem e vira arquitetura dominante.

**A requalificação chega antes da substituição.** Em Carajás, 20 caminhões autônomos correspondem a
2 mil empregados em treinamento, com papéis novos de controle de autonomia [8]. É um sinal fraco
contrário à leitura corrente: na única implantação madura de IA física com número público no Brasil, a
autonomia produziu, na fase atual, mais trabalho de supervisão do que subtraiu de operação.

**O laboratório com corpo padronizado.** Um humanoide de referência aberto com stack comum [7] é, em si,
um sinal fraco de reprodutibilidade: pela primeira vez, dois laboratórios podem discordar sobre um
resultado de robótica com o mesmo corpo na mesa. Isso muda a velocidade com que erros são detectados —
e, portanto, a confiança que se pode depositar em política transferida.

**A distinção entre jogador humano e agente nos termos de uso.** Ainda quase não existe, mas é a
primeira coisa que um departamento jurídico faz quando percebe que um modelo treina dentro do produto.
É o sinal precoce de e7.1.1.

### Wildcards

**W1 — Um acidente cuja causa demonstrada esteja no mundo sintético, e não no robô.** Um sistema falha,
a perícia rastreia o comportamento a uma regularidade do ambiente gerado — uma física que só valia lá
dentro —, e o log de geração vira prova. Impacto: máximo; reescreveria e1.2, e2.1 e todo o ramo de
responsabilidade, e provavelmente antecipa uma exigência de rastreabilidade de dado sintético.
**Por que a probabilidade é baixa até 2031:** exige três coisas simultâneas que hoje não coexistem —
que o sistema tenha sido treinado predominantemente em mundo gerado (hoje os sistemas em produção não
são [6]), que exista rastreabilidade do dado gerado até a amostra (nenhum dos modelos abertos publica
isso como garantia [1]), e que haja perícia capaz de ler peso de modelo como se lê código. Cada uma é
plausível; as três juntas, na mesma ocorrência e antes de 2031, não.

**W2 — Um modelo de mundo aberto bom o bastante para substituir a engine em produto comercial.**
Impacto: mataria a distinção entre mídia e simulação de uma vez, e o e3.1 saltaria de 2030 para agora.
**Por que a probabilidade é baixa:** os limites declarados não são de escala, são estruturais — duração
em minutos, memória de um minuto, ausência de estado persistente, falha com múltiplos agentes
independentes [3][13]. Escalar computação resolve resolução; não resolve "a porta continua trancada".

**W3 — Proibição regulatória de treinar função de segurança apenas com dado sintético.** Um regulador
— o regime europeu de 2027 é o candidato natural [9] — exige proporção mínima de validação real para
componente de segurança autoevolutivo. Impacto: inverte o sentido econômico de D1 e transforma a milha
real em ativo escasso, disparando e2.1.1 com força. **Por que baixa:** não há hoje método aceito para
medir "quanto de real" basta, e regulador raramente proíbe aquilo que ainda não sabe medir.

**W4 — O caminho inverso: um modelo de mundo que rode dentro do corpo, e não no centro de dados.**
Cosmos 3 Edge foi anunciado como "em breve" [1] e o Jetson Thor embarca 128 GB de memória unificada [7].
Um agente que simula localmente o próximo segundo antes de mover muda a natureza do erro — de erro de
execução para erro de imaginação. **Por que baixa até 2031:** é o único wildcard aqui cuja barreira é
puramente de custo e eficiência, o que o torna o mais provável dos quatro; deixo-o como wildcard e não
como efeito porque não encontrei nenhuma demonstração pública funcionando em corpo real.

## 7. Contra o próprio mapa

**1. O efeito que é só extrapolação linear: e1.3.** "O custo marginal de um cenário raro cai perto de
zero e o teste de borda vira rotina" é a curva de custo de computação aplicada a um insumo novo — é
mais do mesmo, mais barato. Não há mudança de natureza: quem gerava mil cenários passa a gerar um
milhão. Dei a ele `confianca: alta` justamente porque é o efeito menos interessante do mapa: ele quase
não pode dar errado, e por isso quase não informa. O efeito de natureza diferente seria e1.1 — a
autoria migrando de geometria para distribuição —, e nesse eu tenho confiança média, não alta.

**2. O efeito com velocidade de adoção sem precedente comparável: e4.** "Comprar robô vira comprar
corpo mais assinatura de política" está datado em 2030, ou seja, quatro anos para inverter o modelo de
negócio de uma indústria de bens de capital. O comparável mais próximo, e mais desfavorável, é a própria
condução autônoma: a Waymo nasceu como projeto em 2009 e chegou a 500 mil corridas semanais em dez
cidades em 2026 [6] — dezessete anos para escalar um caso de uso em um país. O segundo comparável é o
ROS, lançado em 2007, que levou cerca de uma década para virar padrão de fato em pesquisa e mais tempo
ainda para chegar à indústria. Bens de capital com ciclo de vida de quinze anos não trocam de modelo
comercial em quatro. O prazo honesto de e4 é provavelmente 2035, e mantive 2030 — assumo aqui que este
é o ponto mais frágil do mapa inteiro.

**3. A disrupção que pode simplesmente não se concretizar: D1.** A evidência contrária é direta e vem do
benchmark, não de opinião: ~26% de adesão física no melhor modelo, e correlação baixa ou negativa entre
realismo visual e correção física [5]. Se isso não melhorar em ordem de grandeza, o modelo de mundo não
vira ambiente de treino — vira gerador de variação estética sobre um simulador clássico que continua
fazendo a física. **O que sobra do mapa se D1 cair:** sobra D2 quase inteiro, porque a transferência
entre corpos foi demonstrada em robô real e não depende de mundo gerado [2]; sobra e5 e e5.2, que são
sobre interface e supervisão; sobra o ramo regulatório e4.2, que já tem data [9]. Caem e1 e e2 inteiros,
cai e3.1 e, com ele, a tese central de que simulador e mídia convergem na mesma ferramenta. Sobreviveria
um mapa sobre políticas transferíveis — menor, mais seguro e menos interessante.

**4. O viés, nomeado e localizado.** Três, em camadas.

O primeiro é do recorte: este mapa foi escrito dentro da família "Simulação e mundos", e quem entra por
essa porta tende a concluir que a simulação é onde a coisa acontece. Isso inflou especificamente **e1**
— "a maior parte das horas de experiência passa a ser vivida em ambiente que ninguém autorou". A frase
mais contundente que encontrei na pesquisa contradiz isso e vem de quem mais roda simulação no mundo:
*"não há substituto para milhas autônomas reais"* [6]. Mantive e1 com sinal médio e confiança média, mas
ele é, dos sete efeitos de primeira ordem, o que mais deve ao recorte e menos à evidência.

O segundo é de fonte, e é meu, como skill: das 14 fontes que abri, cinco são material institucional de
NVIDIA e Google DeepMind [1][2][3][7][11] — isto é, de quem vende exatamente a tese que este mapa
adota. Compensei parcialmente com benchmark independente [5], crítica arquitetural [13] e o texto da
Waymo [6], mas a assimetria permanece e ela empurra todos os prazos para mais cedo.

O terceiro é de ausência: a instrução desta rodada mandou descartar "o que já é comum em produto de
massa". Isso é uma régua útil, mas ela seleciona sistematicamente contra o caso mais bem documentado do
tema — condução autônoma em escala — e a favor do humanoide, que é mais novo e muito pior documentado.
Parte da sensação de novidade deste mapa vem dessa régua, não do mundo.

## 8. O que a máquina errou

**Repeti números que não tinha aberto e tive de derrubá-los.** A busca sobre humanoides me devolveu
números atraentes e específicos — 1.250 horas de operação da Figure na BMW de Spartanburg, mais de
90 mil peças de chapa, 65 mil horas do Digit da Agility em nove clientes. Eu ia usá-los na Seção 3. Ao
tentar abrir a fonte primária, recebi HTTP 403 e não consegui ler a página. Como a regra desta rodada é
citar só o que se abriu, tirei todos esses números do corpo e os deixei no Anexo, marcados como não
verificados. A desconfiança específica que me travou: a mesma busca dizia que alegações de "10 mil
implantações da Figure" e "mais de mil Optimus em linha" **não vêm das empresas**, o que é exatamente o
tipo de contexto que some quando se copia o número e não a ressalva.

**Aceitei um resumo de busca como se fosse leitura da fonte, sobre a Physical Intelligence.** O resumo
afirmava que o π*0.6 "dobrou a taxa de conclusão" em tarefas como fazer espresso e dobrar roupa. Abri o
blog da empresa e o que consegui extrair foram títulos, datas e uma frase por post — nenhuma métrica.
Removi o "dobrou" e fiquei só com a cronologia π0 → π0.5 → π*0.6 → π0.7, que é o que a fonte sustenta [4].

**Usei uma fonte brasileira de 2021 como se fosse retrato de 2026.** Ao buscar IA física no Brasil,
abri uma matéria sobre robôs da Vale, Petrobras e Jacto e comecei a tratá-la como estado atual. Ela fala
em "quatro unidades operacionais até o fim de 2021". Percebi pelo tempo verbal, não pela data. Troquei
pelo material de setembro de 2026 sobre Carajás [8] e mantive a antiga apenas como referência histórica
de que o setor extrativo brasileiro já investia nisso antes da onda atual [12].

**Datei tudo em 2030.** A primeira versão da roda tinha nove efeitos de segunda ordem com `prazo: 2030`.
Número redondo demais e idêntico demais para nove processos distintos — é assinatura de chute, não de
estimativa. Reespalhei conforme a âncora de cada ramo: os que dependem do regulamento europeu foram para
2028, os que dependem de mudança de ofício para 2029-2031, os que dependem de norma técnica para 2032-2033.

**Duas fontes que eu queria não entraram, e isso enviesa a Seção 6.** O artigo do German Law Journal
sobre responsabilidade em acidentes com humanoides devolveu HTTP 429 e não foi lido; um benchmark de
estabilidade de longo horizonte de modelos de mundo interativos estourou o limite de tamanho no
download. Sem eles, a parte jurídica deste mapa se apoia num único texto sobre o regulamento europeu [9],
que é material de consultoria de certificação — parte interessada em que a regra pareça exigente.

**O que provavelmente errei e não peguei:** os prazos. Um mapa inteiro escrito a partir de material de
2026 tende a comprimir o futuro, porque a literatura de lançamento nunca descreve a década de integração
que vem depois do anúncio. Se este documento for lido em 2031 e um único tipo de erro for encontrado,
aposto que será este, e não uma tecnologia que faltou.

## 9. Três cenários para 2031

**Provável.** Em 2031, modelo de mundo é ferramenta consolidada de *aumento* — ninguém treina uma
política séria só nele, e ninguém deixa de usá-lo. O arranjo que venceu é o híbrido: motor determinístico
com estado explícito por baixo, geração por cima, e a variação estética e o caso raro vindos do modelo.
Condução autônoma segue como o único caso de IA física em escala de consumo, agora em algumas dezenas de
cidades; humanoides estão em centenas de plantas, não em milhares, fazendo poucas tarefas com cadência
inferior à do braço industrial que já estava lá. O que de fato mudou de ofício foi menor e mais
específico do que se previu em 2026: a especificação de ambiente de treino virou trabalho reconhecido,
com nome e vaga, em algum lugar entre design de nível e engenharia de dados; e a atualização de política
virou evento certificado, com versão congelada em máquina em operação, desde que o regime europeu de 2027
pegou. No Brasil, a autonomia continua concentrada em ambiente fechado e controlado — mineração,
agricultura, porto — e o número de pessoas requalificadas em volta de cada máquina segue maior que o
número de máquinas.

**Desejável.** Em 2031 existe uma prática estabelecida de **auditoria de mundo**: quando um sistema
físico falha, é possível perguntar em que ambiente ele aprendeu e obter resposta — quais distribuições,
quais vieses de geração, que fração da experiência foi sintética. Isso não surgiu de regulação genérica
de IA, mas do encontro do regime de máquinas de 2027 com um índice público de fidelidade física
comparável entre simuladores, mantido fora dos fornecedores. Para chegar aqui foi preciso: que os
benchmarks de física independentes ganhassem financiamento estável em vez de virarem *paper* isolado;
que os modelos abertos publicassem proveniência de dado sintético como publicam pesos; e que a formação
em design de mundos — nas escolas de jogo, inclusive — passasse a tratar especificação de distribuição e
auditoria de ambiente como conteúdo, e não como assunto de engenharia alheia. O ganho colateral foi para
a mídia: quem aprendeu a auditar mundo de treino aprendeu a auditar mundo gerado para consumo humano.

**Indesejável.** Em 2031, dois ou três modelos de mundo proprietários se tornaram o substrato em que
quase tudo é treinado, e ninguém fora deles consegue dizer o que há lá dentro. As falhas não são
espetaculares — são correlacionadas: sistemas de fabricantes diferentes erram do mesmo jeito, na mesma
situação, porque aprenderam a mesma regularidade falsa do mesmo mundo. A responsabilidade se dilui entre
quem gerou o ambiente, quem treinou a política e quem operou o corpo, e nenhum dos três responde. Do lado
da mídia, a convergência aconteceu na direção ruim: mundos interativos gerados sem estado persistente
viraram padrão de mercado por serem baratos, e a incoerência — a porta que destranca sozinha, o objeto
que some ao sair de quadro — passou a ser aceita como característica do meio, e não como defeito.
**O sinal precoce disso, hoje:** a ausência de qualquer exigência de proveniência para dado sintético
nos modelos de mundo abertos lançados em 2026, combinada à concentração da pilha inteira — simulador,
modelo de mundo, modelo de política, computação embarcada e corpo de referência — em um único fornecedor
[1][7]. Quando a mesma empresa fornece o mundo, o cérebro e o corpo, não existe segunda opinião para
consultar depois do acidente.

## 10. O experimento

**Banco de divergência — o mesmo cenário em dois mundos.**

**O que é.** Uma bancada que constrói o *mesmo* cenário duas vezes — uma num simulador determinístico e
inspecionável (MetaDrive para direção, ou MuJoCo para manipulação), outra num modelo de mundo gerativo
de pesos abertos (Cosmos, na variante que couber na máquina disponível) — roda as duas com a mesma
sequência de comandos e mede **onde elas divergem**. A saída não é um vídeo bonito: é um mapa de
divergência, cena a cena, com as categorias de falha já nomeadas pela literatura — violação de
conservação, interpenetração, objeto que muda de identidade ou de tamanho, cena que se altera ao sair do
campo de visão. Sobre isso, uma camada de interação: o participante vê os dois mundos lado a lado, sem
saber qual é qual, e aponta qual é o "real". Registra-se o acerto.

**Que pergunta do mapa ele ajuda a responder.** A pergunta de primeira ordem do briefing: *se o robô
aprende em mundo simulado, o que acontece quando o mundo real diverge?* — reduzida a algo mensurável em
sala: **a divergência é aleatória ou tem estrutura?** Se tiver estrutura — se o modelo errar sempre nos
mesmos lugares, com as mesmas classes de objeto —, então a divergência é auditável, e o efeito e1.2
("auditoria de simulador vira etapa formal") tem base material. Se for ruído sem padrão, não há o que
auditar, e todo o ramo de responsabilidade do mapa perde o chão. A camada de interação responde a uma
segunda pergunta, essa diretamente de mídia: **o erro de física é percebido?** Se as pessoas não
distinguem o mundo fisicamente correto do incorreto, então o modelo de mundo já é bom o bastante para
mídia enquanto continua ruim para treino — o que é exatamente a tese de e3.2 e a leitura mais perturbadora
deste mapa.

**Que tecnologia emergente usa, e por que não dá com tecnologia madura.** Usa modelo de mundo gerativo
de pesos abertos — a peça aprovada como disrupção-raiz D1. Com tecnologia madura o experimento não existe
por definição: um simulador clássico não *diverge* de si mesmo, ele executa a física que alguém escreveu.
A divergência só é um objeto de estudo quando um dos dois mundos é amostrado de um modelo em vez de
computado por uma regra. É a diferença entre testar um motor e testar uma memória.

**O que a turma faz em sala.** Três coisas, em cerca de uma hora. Primeiro, **aposta antes**: cada pessoa
escreve onde acha que os dois mundos vão divergir — e a lista coletiva de palpites é o instrumento mais
interessante do experimento, porque mede o modelo mental que projetistas de mídia têm da física gerada.
Segundo, **joga o teste cego** dos dois mundos lado a lado, e a taxa de acerto vai para o quadro.
Terceiro, **especifica**: em duplas, escreve o prompt de um cenário de borda — chuva, contraluz, objeto
translúcido, criança correndo — e roda; a comparação entre o que a dupla pediu e o que o mundo entregou é
o primeiro contato da turma com a competência de e1.1, especificar distribuição em vez de modelar
geometria. Sai daí o material da discussão: o que vocês conseguiram pedir, e o que o mundo devolveu no
lugar.

**O que me faria mudar de ideia.** Dois resultados, em direções opostas.

Se a divergência **não tiver estrutura** — se os erros forem dispersos, irreprodutíveis entre execuções,
sem classe dominante —, então a auditoria de mundo de treino é inviável em princípio, e não por
imaturidade. Caem e1.2, e1.2.1 e e2.1: não se audita ruído. O mapa perderia seu eixo de responsabilidade
e teria de ser reescrito em torno de mitigação estatística, não de prestação de contas.

Se os participantes **distinguirem com facilidade** o mundo gerado do simulado no teste cego — acerto
bem acima do acaso, sem treino prévio —, então a convergência entre simulador e mídia interativa (e3.1)
está muito mais distante do que este mapa a coloca, e a hipótese de que a mesma ferramenta serve aos dois
públicos cai. Nesse caso o mapa honesto de 2031 é sobre robótica, não sobre mídia — e eu teria escrito o
documento errado para o público errado.

## 11. Fontes

1. **NVIDIA — "NVIDIA Launches Cosmos 3, the Open Frontier Foundation Model for Physical AI"**,
   `https://nvidianews.nvidia.com/news/nvidia-launches-cosmos-3-the-open-frontier-foundation-model-for-physical-ai`
   Sustenta: existência, data (31/05-01/06/2026), arquitetura de mistura de transformers, natureza
   omnimodal com ação nativa, abertura de pesos no Hugging Face, composição da coalizão, e a alegação de
   redução de ciclos "de meses para dias". Confiabilidade: é material de imprensa do fabricante — os
   fatos de lançamento e composição são verificáveis e confiáveis; as alegações de desempenho são
   promessa comercial e foram tratadas como tal neste documento.

2. **Google DeepMind — "Gemini Robotics 1.5 brings AI agents into the physical world"**,
   `https://deepmind.google/blog/gemini-robotics-15-brings-ai-agents-into-the-physical-world/`
   Sustenta: a arquitetura ER 1.5 (planejador) + 1.5 (executor), o raciocínio explícito antes da ação, e
   o resultado central de D2 — transferência de habilidade de ALOHA 2 para Apollo e Franka sem retreino.
   Também a disponibilidade assimétrica (ER aberto via API, executor restrito a parceiros).
   Confiabilidade: blog do laboratório, parte interessada; o dado de transferência é específico e
   falseável, o que o torna mais confiável que as afirmações genéricas do mesmo texto.

3. **Google DeepMind — "Genie 3: A new frontier for world models"**,
   `https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/`
   Sustenta: 720p a 24 fps em tempo real, consistência de minutos, memória visual de ~1 minuto, eventos
   de mundo promptáveis, uso com o agente SIMA, e — o que mais usei — a lista de limitações declaradas.
   Confiabilidade: alta para as limitações (um laboratório não inventa fraquezas próprias), média para as
   capacidades, que não pude reproduzir por ser prévia de pesquisa fechada.

4. **Physical Intelligence — blog**, `https://www.pi.website/blog`
   Sustenta apenas a cronologia dos modelos: π0 (out/2024), abertura de π0 (fev/2025), π0.5 com
   generalização em mundo aberto (abr/2025), π*0.6 aprendendo da própria experiência por reforço
   (nov/2025), π0.7 dirigível (abr/2026). Confiabilidade: alta para datas e títulos; não obtive métricas
   ao abrir a página, e por isso nenhum número desta empresa entrou no documento.

5. **PhyWorldBench: A Comprehensive Evaluation of Physical Realism in Text-to-Video Models**, arXiv,
   `https://arxiv.org/html/2507.13428`
   Sustenta o contrapeso central do mapa: 12 modelos avaliados, melhor resultado ~26% de sucesso, faixa
   de 18-26% nos proprietários e 10-28% nos abertos, degradação em prompts antifísicos e a conclusão de
   que falta progresso substancial para servirem como simuladores de mundo. Confiabilidade: alta —
   benchmark independente, metodologia declarada, e é a fonte que mais contraria a tese que o mapa adota,
   o que a torna a mais valiosa do conjunto.

6. **Waymo — "10 AI Lessons from Driving 200+ Million Fully Autonomous Miles"**,
   `https://waymo.com/blog/2026/08/10ailessons/`
   Sustenta: a distinção entre simulação de malha aberta e fechada, o papel da reação do tráfego para
   aprendizado por reforço, e a afirmação de que não há substituto para milhas autônomas reais — usada na
   Seção 7 contra o próprio mapa. Confiabilidade: alta para a descrição de método; é blog de empresa, mas
   a afirmação que aproveitei vai contra o interesse comercial de quem a escreveu.

7. **NVIDIA — "NVIDIA Announces NVIDIA Isaac GR00T Reference Humanoid Robot for Academic Research"**,
   `https://nvidianews.nvidia.com/news/nvidia-open-humanoid-robot-reference-design`
   Sustenta: composição do humanoide de referência (Unitree H2 Plus, mãos Sharpa Wave, Jetson AGX Thor
   T5000, 128 GB unificados), autonomia de ~3 h, carga nominal de 7 kg, pilha Isaac, disponibilidade no
   fim de 2026 e as instituições adotantes. Confiabilidade: alta para especificação e adoção anunciada;
   o preço não foi divulgado, o que limita qualquer inferência de custo.

8. **"Vale, Caterpillar e Sotreq treinam 2 mil empregados para ampliar uso de caminhões autônomos em
   Carajás"**, 01/09/2026, `https://www.zedudu.com.br/vale-caterpillar-e-sotreq-treinam-2-mil-empregados-para-ampliar-uso-de-caminhoes-autonomos-em-carajas/`
   Sustenta a nota sobre o Brasil: ~20 caminhões autônomos Komatsu em Serra Norte, entrada de caminhões
   Caterpillar em Parauapebas em setembro de 2026, meta de ~90 veículos no Sistema Norte (60 + 30), 2 mil
   empregados em treinamento e os papéis novos de controle de autonomia. Confiabilidade: média — é
   veículo regional reproduzindo comunicação das empresas; os números são consistentes com outras
   reportagens que apareceram na busca, mas a fonte primária corporativa não foi aberta.

9. **Nemko Digital — "Guide to the 2027 EU Machinery Regulation"**,
   `https://digital.nemko.com/regulations/eu-machinery-regulation`
   Sustenta: data de aplicação (20/01/2027), classificação como alto risco de componentes de segurança
   com comportamento autoevolutivo por aprendizado de máquina, fim da autocertificação nesses casos,
   cibersegurança como requisito essencial, e a regra da modificação substancial que transfere a condição
   de fabricante a quem modifica. Confiabilidade: média-alta — é interpretação de consultoria de
   certificação, parte interessada em que a norma pareça exigente; o texto legal em si não foi lido, e
   essa é a maior lacuna documental deste mapa.

10. **Cosmos World Foundation Model Platform for Physical AI**, arXiv 2501.03575,
    `https://arxiv.org/abs/2501.03575`
    Sustenta a formulação conceitual que o mapa usa — gêmeo digital da política e gêmeo digital do mundo
    — e a natureza aberta dos pesos com licença permissiva. Confiabilidade: alta como registro da tese e
    da arquitetura; é artigo do fabricante, portanto não é avaliação independente do desempenho.

11. **Google DeepMind — "SIMA 2: an agent that plays, reasons and learns with you in virtual 3D worlds"**,
    `https://deepmind.google/blog/sima-2-an-agent-that-plays-reasons-and-learns-with-you-in-virtual-3d-worlds/`
    Sustenta D3: operação por pixels sem acesso ao código, sucesso em jogos não vistos (MineDojo, ASKA),
    automelhoria por tentativa e erro com feedback do próprio modelo sem dado humano, operação dentro de
    mundos gerados pelo Genie 3, e as limitações declaradas de raciocínio longo, memória e controle fino.
    Confiabilidade: média-alta; as limitações declaradas foram decisivas para classificar D3 como
    emergente em vez de disrupção consumada.

12. **"Vale, Petrobras e Jacto apostam em robôs para realizar tarefas arriscadas na operação"**,
    Mais Retorno, `https://maisretorno.com/portal/vale-petrobras-e-jacto-apostam-em-robos-para-realizar-tarefas-arriscadas-na-operacao`
    Sustenta apenas contexto histórico brasileiro: robô quadrúpede Anymal (~R$ 1 milhão) e EspeleoRobô do
    Instituto Tecnológico Vale com a UFMG, robôs de pintura e desobstrução de dutos da Petrobras
    (R$ 100 milhões em 15 projetos), e o pulverizador teleoperado Arbus 400 JAV da Jacto.
    Confiabilidade: baixa para o presente — o texto é de 2021 e fala de metas para aquele ano; mantido só
    como evidência de que o investimento brasileiro em robótica de campo antecede a onda de 2025-2026.

13. **From Pixels to States: Rethinking Interactive World Models as Game Engines**, arXiv,
    `https://arxiv.org/html/2607.14076v1`
    Sustenta a crítica arquitetural: sem estado explícito o mundo existe só como janela de observações
    recentes, regras viram correlação de pixels, cenas mudam ao sair do campo de visão e a mesma entrada
    expressa intenções diferentes. É a base de e3.2 e e3.2.1. Confiabilidade: alta como argumento de
    projeto, média como previsão — é posição defendida, não resultado medido.

14. **Realtime1 — "Da linha de montagem ao algoritmo: o impacto da robótica avançada no Brasil"**,
    17/02/2026, `https://realtime1.com.br/robotica-avancada-fabrica-autonoma-industria-brasileira/`
    Sustenta, com ressalva forte, o contexto de barreiras brasileiras: custo inicial, baixa capacitação
    técnica, complexidade tributária e infraestrutura energética irregular; e a pressão sobre a Zona
    Franca de Manaus. Confiabilidade: baixa — é texto opinativo, sem dado estatístico próprio. Não
    sustenta nenhum número neste documento, apenas a caracterização qualitativa das barreiras.

## 12. Anexo — o levantamento bruto

Tudo o que foi levantado e não coube acima, sem corte e sem edição de conveniência: as respostas
completas de cada etapa da skill, os candidatos reprovados, os efeitos cortados, as buscas que não
deram em nada e os números que não puderam ser usados.

### A. Etapa 1 — respostas da entrevista (rodada sem usuário presente)

A skill exige entrevista bloqueante com quatro itens obrigatórios. Nesta rodada não havia usuário para
responder; as respostas foram fornecidas de antemão pela instrução da rodada e estão registradas aqui
literalmente, porque elas condicionam tudo o que veio depois.

- **Horizonte (obrigatório):** 2031.
- **Público:** quem projeta mídia e interação.
- **Recorte geográfico (obrigatório):** global, com uma nota sobre o Brasil.
- **Já descartado (obrigatório):** o que já é comum em produto de massa — a régua da disciplina.
  Nenhuma outra exclusão. Confirmação explícita registrada: "nenhuma outra exclusão".
- **Viés desejado (obrigatório):** neutro.
- **Zona de interesse:** Simulação e mundos.
- **Suspeita de disrupção prévia:** nenhuma — instrução explícita de descobrir.
- **Ideias óbvias a excluir:** as que servem para qualquer tema.
- **O que faria mudar de ideia:** evidência de que a adoção já passou da maioria inicial (Rogers), ou de
  que a tecnologia não rompe nada, só melhora o que existe.
- **Profundidade:** três ordens. **Modo:** a partir de uma inovação/tema, não de um setor.
- **`publico_ok`:** ficou `false`, como manda a skill, por ausência de autorização explícita.

Observação metodológica que vale registrar: a régua "descartar o que é comum em produto de massa" é
consequente. Ela empurrou para fora do foco o caso mais documentado do tema — condução autônoma em
escala real — e para dentro o humanoide, que é mais novo e pior documentado. Está anotado como viés na
Seção 7, item 4.

### B. Etapa 2 — buscas realizadas, na ordem

Buscas (WebSearch):

1. `NVIDIA Cosmos world foundation model physical AI 2026`
2. `DeepMind Gemini Robotics vision-language-action model 2026`
3. `DeepMind Genie 3 interactive world model agent training SIMA 2`
4. `Physical Intelligence pi-0.6 robot foundation model deployment 2026`
5. `humanoid robot deployment reality check 2026 Figure Agility teleoperation how many units`
6. `world models physics violations evaluation benchmark video generation fails intuitive physics 2026`
7. `EU Machinery Regulation 2023/1230 apply January 2027 AI safety robots liability`
8. `Waymo rides per week 2026 autonomous miles simulation training`
9. `Brasil robótica IA física 2026 veículos autônomos regulamentação PL robôs indústria`
10. `NVIDIA Isaac GR00T N open humanoid robot foundation model Isaac Lab 2026`
11. `robot accident liability simulation validation "digital twin" evidence court 2026 who is responsible autonomous machine`
12. `"world model" game engine generative interactive media design 2026 Odyssey Decart real-time playable`
13. `Vale caminhões autônomos Carajás quantidade 2026 frota autônoma mineração`

Páginas efetivamente abertas e lidas: as 14 da Seção 11.

Páginas que tentei abrir e **falharam** (nada delas foi citado):

- `https://www.technology.org/2026/07/18/humanoid-robots-in-2026-what-is-actually-deployed/` — HTTP 403.
- `https://www.cambridge.org/core/journals/german-law-journal/article/reconstructing-liability-mechanism-for-humanoid-robot-accidents/...` — HTTP 429.
- `https://arxiv.org/pdf/2606.31672` (WorldRoamBench) — excedeu o limite de tamanho de download.

Buscas que **não deram em nada aproveitável**:

- A busca 12 foi atrás de modelos de mundo comerciais para mídia (citei "Odyssey" e "Decart" de memória,
  no prompt). O buscador não confirmou nenhum dos dois nomes e devolveu apenas literatura acadêmica.
  Como não abri fonte sobre eles, **nenhum dos dois aparece no documento** — é exatamente o tipo de nome
  que uma sessão descuidada citaria como se tivesse verificado.
- A busca 9, sobre regulamentação brasileira, devolveu menção ao PL 2.338/2023 e a impasses na Câmara,
  mas nenhuma fonte aberta com detalhe sobre robôs ou veículos autônomos. Por isso **não há afirmação
  regulatória sobre o Brasil neste mapa** — só a nota industrial.
- A busca 11 devolveu material de escritórios de advocacia sobre reconstrução digital de acidentes,
  conteúdo de marketing jurídico. Não abri nenhum; a única peça jurídica usada é a [9].

### C. Etapa 3 — o teste de disrupção aplicado a todos os candidatos, inclusive os reprovados

O teste tem três perguntas: (1) o que torna possível que antes não era; (2) que prática, papel ou
modelo de negócio invalida; (3) por que agora e não há cinco anos. Aprovados nas três → disrupção-raiz.
Aprovado em 1 e 3 mas não em 2 → emergente, entra com ressalva. Reprovado em 1 → tecnologia madura,
não entra na Seção 4.

**C1. Modelo de mundo gerativo como ambiente de treino.**
(1) Contrafactual sob demanda, com evento promptável em tempo de execução, sem que ninguém modele a
cena. Sim. (2) Invalida a cadeia de coleta de dado por teleoperação e a modelagem de cenário de treino;
invalida também a inspecionabilidade do simulador. Sim. (3) Consistência de minutos em vez de segundos,
ação como modalidade nativa, pesos abertos. Sim, concreto.
→ **Aprovado como D1.**

**C2. Política generalista transferível entre corpos.**
(1) Habilidade treinada num robô rodando em outro sem retreino. Sim, demonstrado. (2) Invalida a
programação de célula, que é hoje a maior parte do custo de automatizar. Sim. (3) VLMs grandes, dado
multi-robô, modelos VLA abertos, corpo de referência padronizado. Sim.
→ **Aprovado como D2.**

**C3. Agente generalista operando mundo 3D pelos pixels.**
(1) Atravessar produtos diferentes sem instrumentação por produto, e se automelhorar sem dado humano
novo. Sim. (2) **Não consigo nomear uma prática já invalidada.** Playtest humano segue; QA por script
segue. (3) Raciocínio de modelo grande acoplado a laço de ação em pixels; automelhoria. Sim.
→ **Aprovado como D3, com a ressalva de "emergente" escrita no corpo do documento.**

**C4. Robô humanoide de referência aberto (GR00T reference robot). REPROVADO.**
(1) O que torna possível que antes não era? Pesquisa reprodutível com corpo comum. Ao escrever a
resposta, ela se revelou como "mais barato, mais padronizado, mais comparável" — que é a definição de
melhoria de tecnologia madura dada pela própria skill. **Reprova no item 1.** Vai para a Seção 3 como
estado atual e reaparece na Seção 6 como sinal fraco de reprodutibilidade, que é seu papel legítimo.

**C5. Simulação física acelerada por GPU (Isaac Sim, MuJoCo, Genesis, PhysX, newton). REPROVADO.**
(1) Nada novo: simulação física existe há décadas; a GPU a torna mais rápida. Reprova no item 1.
É explicitamente a camada madura sobre a qual D1 se apoia. Fica na Seção 3.

**C6. ROS 2, MoveIt 2, OMPL, SLAM, pinocchio, Lanelet2, OpenVINS, MAVLink, RT-Thread. REPROVADOS em
bloco.** São infraestrutura madura. O próprio briefing do tema já os coloca do lado maduro da linha, e
o teste confirma: nenhum deles torna possível algo que antes não era.

**C7. "A responsabilidade se desloca para quem fez o simulador". REPROVADO por não ser tecnologia.**
Isso não é candidato a disrupção-raiz — é efeito de segunda ordem de D1, e foi para lá (e1.2, e1.2.1,
e2.1). Registro porque numa primeira passagem eu o tinha colocado na Seção 4, o que teria confundido
causa com consequência.

**C8. Enxame de drones para resgate (o wildcard trazido pelo briefing). REPROVADO como disrupção-raiz.**
(1) Coordenação multiagente em campo aberto é aplicação de D2 e de telemetria madura, não ruptura
própria. Não entrou nem como wildcard da Seção 6, porque os quatro selecionados têm impacto maior sobre
a estrutura do mapa. Fica registrado aqui como caminho não seguido.

### D. Etapa 4 — efeitos cortados, com o motivo

Aplicada a regra de parada: para de ramificar quando o efeito deixa de ser consequência mecanicamente
rastreável e passa a exigir o encadeamento de duas ou mais suposições independentes não testadas.

**Cortados por exigirem suposições encadeadas:**

- *"O trabalho físico de baixa qualificação é reprecificado globalmente."* Exige três suposições
  independentes: corpo barato, política confiável e permissão regulatória. É especulação de especulação.
  Além disso, o único dado que abri aponta no sentido contrário (2 mil requalificados para ~20 máquinas).
  **Cortado.** Sobrevive apenas a parte rastreável, em e4.1 e e5.2.
- *"A cidade passa a ser redesenhada para máquinas."* Exige adoção em massa + mandato de política urbana
  + ciclo de obra pública. Nenhuma das três tem sinal hoje. **Cortado.**
- *"Modelos de mundo geram ambientes de treino para profissões humanas, e a formação profissional migra
  para simulação gerada."* Plausível, mas depende da mesma fidelidade física que a Seção 7 coloca em
  dúvida, e de uma segunda suposição sobre aceitação institucional de formação simulada. **Cortado**;
  reconheço que é o efeito mais interessante que joguei fora.
- *"Seguradoras passam a precificar apólice a partir de log de simulação."* Dependia da fonte jurídica
  que devolveu HTTP 429. Sem ela, seria invenção com aparência de precisão. **Cortado.**
- *"Surge um mercado secundário de políticas de robô, como há de plugins."* Depende de e4 se
  concretizar **e** de interoperabilidade entre fornecedores, que hoje não existe. **Cortado.**

**Cortados por não terem caminho nomeável de volta à disrupção-raiz (condição de parada da Etapa 4):**

- *"A confiança pública em IA cai."* Não consigo narrar em uma frase por que isso decorre de um modelo
  de mundo em vez de qualquer outro fato do período. É o tipo de efeito que serve para qualquer tema —
  a instrução da rodada mandava excluir exatamente isso. **Cortado.**
- *"Aumenta a concentração de mercado em big tech."* Mesmo problema: serve para qualquer tema de IA.
  **Cortado como efeito**; sobrevive como conteúdo específico do cenário indesejável, ancorado na
  concentração vertical concreta de simulador + modelo + corpo num só fornecedor.

**Reclassificados de efeito para wildcard:** o acidente cuja causa esteja no simulador (era candidato a
e2.3; virou W1, porque exige três condições simultâneas e não decorre mecanicamente) e a substituição da
engine por modelo de mundo em produto comercial (era candidato a e3.1.2; virou W2).

**Rodada descartada da roda inteira:** a primeira versão organizava os efeitos por setor — indústria,
jogos, mobilidade, saúde. Foi descartada porque o modo escolhido na Etapa 1 foi "a partir de uma
inovação, não de um setor", e porque a versão por setor produzia os mesmos quatro efeitos genéricos em
cada ramo ("aumenta produtividade", "muda o perfil profissional", "exige regulação", "levanta questão
ética") — sintoma de mapa vazio. Nada dela foi aproveitado.

**Ajuste de prazos:** a primeira versão tinha nove efeitos de segunda ordem datados em 2030. Reespalhei
conforme a âncora: 2028 para o que depende do regime europeu, 2029-2031 para mudança de ofício,
2032-2033 para o que depende de norma técnica ou de formação. Registro porque o número redondo repetido
é assinatura de chute, e está anotado na Seção 8.

### E. Números levantados que **não** entraram no corpo por falta de fonte aberta

Os itens abaixo vieram de resumos de busca e **não** foram verificados abrindo a fonte. Ficam aqui, sem
nota de rodapé no corpo, e não devem ser citados como se tivessem sido lidos:

- Figure AI: mais de 1.250 horas de operação na BMW de Spartanburg, mais de 90 mil peças de chapa
  carregadas. *Não verificado* (a página devolveu 403).
- Agility Robotics: mais de 65 mil horas do Digit em nove instalações de clientes; clientes citados GXO,
  Schaeffler, Toyota Motor Manufacturing Canada e Mercado Libre; fábrica RoboFab em Salem, Oregon, com
  capacidade de projeto para até 10 mil unidades por ano. *Não verificado.*
- A ressalva, da mesma busca: alegações de "10 mil implantações da Figure" e de "mais de mil Optimus em
  linha de produção da Tesla" **não partem das empresas envolvidas**. Registro porque é a informação mais
  útil do lote e a que sumiria primeiro numa citação apressada.
- Waymo: 20 milhões de milhas de condução real e mais de 20 bilhões de milhas simuladas no treino;
  redução de 92% em colisões com ferimento grave ou fatal sobre 170 milhões de milhas. *Parcialmente
  verificado* — abri o texto da Waymo [6], que sustenta o método e a frase sobre milhas reais, mas o
  resumo dessas cifras específicas veio da busca e não do trecho que li. Por isso o corpo cita apenas
  500 mil corridas semanais e 4 milhões de milhas semanais.
- Physical Intelligence: π*0.6 teria dobrado a taxa de conclusão em tarefas como fazer espresso e dobrar
  roupa; primeiro produto comercial esperado entre 2026 e 2028. *Não verificado* — o blog aberto não
  trouxe métrica.
- Cosmos 3: 20 trilhões de tokens multimodais, ~1 bilhão de imagens, 400 milhões de vídeos reais e
  sintéticos. *Não verificado* — o release que abri fala em "bilhões de amostras" sem detalhar; os
  números granulares vieram do resumo de busca e por isso o corpo usa a formulação genérica.
- Brasil: "apenas 1% das propriedades rurais têm rede privada ou cobertura 4G" e "30 caminhões autônomos
  da Vale em Carajás, Brucutu e Capanema". *Não verificados*, e o segundo conflita com a fonte que abri
  [8], que fala em ~20 em Serra Norte. Divergência mantida à vista de propósito: é exemplo de por que a
  regra de abrir a fonte existe.
- SIMA 2 / Genie 3: menção a Goat Simulator 3, Matrix-game 3.0, Happy Oyster, Oasis, iWorld-Bench,
  WorldRoamBench, VideoPhy-2, WorldModelBench. Apareceram nas buscas 6 e 12, **nenhum foi aberto**.
  VideoPhy-2 e WorldModelBench aparecem em `tecnologias_citadas` apenas por terem sido mencionados como
  benchmarks existentes na discussão da Seção 3; o único benchmark de que li resultado é o PhyWorldBench.

### F. Etapa 5 — a contestação em rascunho, incluindo o que não sobreviveu

A Seção 7 traz quatro itens. Registro aqui dois ataques que rascunhei e descartei por serem genéricos
demais, que é exatamente o defeito que a skill manda evitar:

- *"O mapa pode estar errado porque prever o futuro é difícil."* Inútil. Descartado.
- *"Pode haver uma tecnologia que ainda não existe e muda tudo."* Verdadeiro e vazio. Descartado — o que
  sobreviveu dessa preocupação foi o W4, que é específico: modelo de mundo rodando no corpo, e não no
  centro de dados, com a âncora concreta do Cosmos 3 Edge anunciado e dos 128 GB do Jetson Thor.

Ataque que **sobreviveu e foi promovido ao corpo**: a régua da própria disciplina ("descartar o que é
comum em produto de massa") seleciona contra o caso mais bem documentado do tema. Não estava previsto no
roteiro da Etapa 5, e é o achado metodológico desta rodada.

### G. Verificação final (condição de parada da Etapa 8)

- 12 seções com títulos literais: conferido por `grep -c "^## "` → 12.
- Frontmatter com todos os campos do formato, nenhum omitido, `publico` preenchido e `publico_ok: false`.
- Bloco `roda:` com exatamente três níveis; todo nó com `sinal`, `prazo` e `confianca`; `id` hierárquico
  único; todo `efeito` em frase afirmativa.
- Contagens do frontmatter conferidas contra o bloco: 3 disrupções, 7 efeitos de 1ª ordem, 15 de 2ª, 16
  de 3ª.
- Nenhum item da Seção 4 reprovado no teste da Etapa 3 — os reprovados (C4 a C8) estão neste anexo, com
  motivo, e o único aprovado com ressalva (D3) traz a ressalva escrita no próprio corpo.
- Seção 7 com quatro itens nomeados e específicos, cada um apontando efeito ou disrupção pelo `id`.
- Seção 11 com 14 fontes, todas abertas e lidas; as três que falharam ao abrir estão listadas em B e não
  são citadas em lugar nenhum do corpo.
