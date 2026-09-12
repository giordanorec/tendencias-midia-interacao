---
tema: Agentes corporificados, IA física e modelos de mundo
slug: agentes-corporificados-ia-fisica-e-modelos-de-mundo
autor_login: bvga
zona_de_interesse: Simulação e mundos
data: 2026-09-12
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 9
efeitos_ordem_2: 18
efeitos_ordem_3: 22
tecnologias_citadas: [NVIDIA Cosmos 3, Cosmos-Predict2.5, Cosmos-Transfer2.5, Genie 3, SIMA 2, Gemini Robotics 2, Gemini Robotics On-Device 2, pi-0.5, PolaRiS, MuJoCo, Isaac Sim, IsaacLab, ROS 2, MoveIt 2, OpenVINS, MetaDrive, Genesis, habitat-sim, HumanScale]
fontes: 16
confianca: media
experimento: Bancada de Divergência
skill_usada: futurizacao-bvga
publico_ok: false
---

## 1. Resumo

Entre 2025 e 2026 o treino de máquinas com corpo deixou de depender apenas de simuladores escritos à mão e passou a admitir **mundos gerados por modelo**. Cosmos 3 saiu como modelo aberto em 31/05/2026; Genie 3 gera ambientes navegáveis em tempo real a 720p e 24 fps; SIMA 2 age dentro desses ambientes e é avaliado em mundos que nunca viu. Ao mesmo tempo, as políticas de controle ficaram generalistas: π0.5 limpa cômodos em casas inteiramente novas, e Gemini Robotics 2 adapta-se a um corpo robótico novo com menos de 200 exemplos.

Três coisas rompem aqui, e nenhuma delas é "o humanoide". A primeira é **o ambiente virar amostra em vez de obra** — quem hoje constrói mundo 3D deixa de ser gargalo e passa a ser curador de currículo. A segunda é **a política atravessar corpos**: ensinar tarefa deixa de ser programar e vira demonstrar, o que desloca a interação de "programar máquina" para "mostrar à máquina" — território de quem projeta interação, não de quem projeta mecanismo. A terceira, a menos comentada e talvez a mais consequente, é **a avaliação migrar para dentro da simulação**: quando a prova de que um robô é seguro passa a ser produzida num mundo reconstruído, quem detém o simulador detém o critério — e o Regulamento (UE) 2023/1230, aplicável a partir de 20/01/2027, já nomeia "comportamento auto-evolutivo" como categoria que exige avaliação por terceiro.

O contrapeso é forte e vem de dentro da própria literatura: um artigo de junho de 2026 mostra que os modelos de mundo atuais **não mantêm estado quando ninguém olha** — o mundo congela fora do enquadramento e retoma onde parou. Enquanto isso não se resolver, "treinar num mundo que a IA inventou" serve para tarefa curta e observada, não para a promessa doméstica. Confiança geral do mapa: **média**. As raízes têm evidência primária; as cadeias de 2ª e 3ª ordem, não.

## 2. O tema

O objeto aqui é **o agente que tem corpo e o mundo em que ele aprende** — não a simulação de sociedades (tema 6), não a captura 3D do mundo real (tema 10), não a segmentação de qualquer coisa (tema 11).

A cadeia que interessa tem três elos. No primeiro, um **simulador** permite errar milhões de vezes antes de tocar o real (*sim-to-real*). No segundo, o simulador deixa de ser um programa que renderiza regras escritas por alguém e passa a ser um **modelo de mundo**: uma rede que gera o ambiente, aprendida de vídeo. No terceiro, uma **política generalista** — tipicamente um modelo visão-linguagem-ação, VLA — recebe instrução em linguagem natural e produz ação motora, atravessando corpos e cenários.

Recorte: global, com uma nota sobre o Brasil na §3. Horizonte 2031. Público: quem projeta mídia e interação — a pergunta que organiza o mapa não é "o robô vai funcionar?", é **"o que muda no ofício de desenhar mundo, interface e experiência quando o mundo passa a ser insumo de treino de um corpo?"**.

Fora de escopo por regra da disciplina: tudo que já é comum em produto de massa. Isso exclui aspirador robótico, drone com missão pré-programada, assistência de faixa em carro, robô industrial em célula cercada. Esses aparecem no mapa apenas como antecedente maduro.

**Como este documento foi feito.** Entrevista de parâmetros → pesquisa web com abertura efetiva das fontes → classificação maduro × emergente × disruptivo → seleção de disrupções-raiz por critério explícito → Futures Wheel de três ordens → red team contra o próprio mapa → cenários → experimento. Foram abertas 16 fontes; o que não foi aberto não está citado. As buscas sem resultado e os candidatos derrubados estão na §12, não foram limpos.

## 3. Onde isso está hoje

### 3.1 O que já está maduro (e por isso não pode ser raiz)

Planejamento de trajetória, cinemática, SLAM e navegação visual-inercial são engenharia consolidada: ROS 2, MoveIt 2, OMPL, pinocchio, OpenVINS. Simulação física acelerada por GPU também é: MuJoCo, PhysX, Isaac Sim/IsaacLab, habitat-sim, MetaDrive. Randomização de domínio é técnica padrão. **Nada disso é disrupção** — são o chão sobre o qual as raízes pisam. Registro isto porque foi um erro que precisei corrigir no meio do processo (§8).

A base instalada de robótica clássica é grande e cresce devagar: a IFR reportou, em 08/04/2026, densidade média global de **132 robôs por 10 mil empregados em 2024**, com Europa Ocidental em 267, América do Norte em 204 e Ásia em 131 [1].

### 3.2 O que é emergente

**Modelo de mundo gerativo.** Cosmos-Predict2.5, da NVIDIA, unifica Text2World, Image2World e Video2World num modelo só, treinado em **200 milhões de clipes de vídeo curados**, com pesos em 2B e 14B, e é apresentado explicitamente para "geração de dado sintético, **avaliação de política** e simulação em malha fechada" [2]. Em 31/05/2026 a NVIDIA lançou **Cosmos 3** como "primeiro omnimodelo totalmente aberto", com arquitetura *mixture-of-transformers* que junta raciocínio visual, geração de mundo e predição de ação, baixável no Hugging Face, e afirma reduzir ciclos de treino e avaliação "de meses para dias" [3]. A alegação de redução de ciclo é de fabricante e não encontrei triangulação independente — trato como interessada.

**Mundo interativo em tempo real.** Genie 3 (DeepMind, 05/08/2025) gera ambientes navegáveis a **24 fps, 720p**, com consistência de **alguns minutos** e memória visual de cerca de **um minuto**. A própria página lista as limitações: espaço de ação limitado, simulação pobre de outros agentes, texto ilegível, e duração de interação em minutos — não horas. Está em *research preview* restrito [4].

**Agente generalista em mundos 3D.** SIMA 2 (DeepMind, 04/12/2025) age em variedade de mundos 3D, conversa sobre objetivos, generaliza para ambientes não vistos e demonstra "auto-melhoria aberta", gerando as próprias tarefas e recompensas via Gemini, sem humano no laço [5]. É a peça que fecha o circuito com Genie 3: agente aprendendo dentro de mundo gerado.

**Política generalista corporificada.** π0.5 (Physical Intelligence, 22/04/2025) sustenta ter demonstrado "pela primeira vez" manipulação longa e destra — limpar cozinha ou quarto — **em casas inteiramente novas** [6]. Gemini Robotics 2 (DeepMind, 30/07/2026) traz controle de corpo inteiro, colaboração multi-robô e adaptação a corpos novos: **menos de 200 exemplos** para um bi-braço novo, poucas horas de dado para uma *embodiment* completamente diferente. As taxas de sucesso publicadas são o dado mais honesto da página: **45,7%–76,3%** em manipulação de corpo inteiro, **74,2%–89,6%** em destreza de garra, **32%–92%** em tarefas multi-dedo. Acesso: só parceiros de acesso antecipado [7].

**Avaliação real-to-sim.** PolaRiS (12/2025) reconstrói o ambiente real a partir de varredura curta em vídeo e avalia a política ali dentro, alegando correlação com o desempenho real "muito mais forte" que benchmarks simulados existentes [8]. É a semente da terceira raiz.

**Vídeo humano como corpus de corpo.** HumanScale (18/06/2026) mostra que vídeo egocêntrico humano, bem processado, **supera** trajetórias teleoperadas de robô no pré-treino: 24% menos perda de validação, +52,5% de sucesso em tarefa dentro da distribuição, +90% fora dela [9].

### 3.3 O que é experimental — e o contrassinal mais duro

Modelo de mundo com **estado persistente** não existe. Lu et al. (18/06/2026) formulam o problema com precisão: modelar o mundo "exige um estado interno que continue evoluindo no tempo, desacoplado da observação, de modo que objetos perdurem e eventos cheguem ao fim quer haja ou não uma câmera olhando". A conclusão empírica é que os modelos atuais tratam o mundo como *tracking shot* e, ao voltar a um alvo, o retomam "no estado em que foi abandonado, em vez de fazer o evento avançar enquanto esteve fora de vista" — e isso vale entre arquiteturas e escalas [10]. Há um esforço paralelo, do mesmo semestre, para simplesmente **definir** o que é um modelo de mundo, sinal de que o campo ainda não tem consenso sobre o próprio objeto [11].

### 3.4 Leitura de maturidade percebida (Hype Cycle como heurística, não como lei)

O humanoide de uso geral está no ponto de expectativa mais alta e é onde a evidência mais escorrega. O rastreador de implantações mais criterioso que abri lista, como entradas verificadas com fonte, coisas bem menores que o discurso: 3.000+ unidades da AiMOGA/Chery em atendimento, 110 robôs policiais na China, uma fábrica AgiBot/Minth na Sérvia com capacidade-alvo de 20 mil unidades/ano — e observa que a maior parte das entradas **não quantifica unidades implantadas**, referindo-se a pilotos e parcerias anunciadas [12]. Os números redondos que circulam em resultado de busca (1.000 Optimus produtivos, 19.100 unidades no 1º semestre) não sobreviveram à abertura das fontes (§8).

Já o modelo de mundo gerativo está subindo a rampa de expectativa com evidência técnica real e limitação estrutural declarada. E o *sim-to-real* clássico está no platô: existe até revisão de "melhores práticas" para a lacuna de realidade — o que é a assinatura de um campo maduro.

### 3.5 Governança: o relógio já está correndo

O Regulamento (UE) 2023/1230 (Máquinas) aplica-se **em pleno a partir de 20/01/2027**, revogando a Diretiva 2006/42/CE na mesma data. Ele nomeia o problema: o considerando 54 diz que "sistemas com comportamento auto-evolutivo que assegurem funções de segurança devem ser incluídos no Anexo I devido a características como dependência de dados, opacidade, autonomia e conectividade"; o considerando 55 restringe a avaliação de conformidade por terceiro a "sistemas com comportamento total ou parcialmente auto-evolutivo usando abordagens de aprendizado de máquina" [13]. Em paralelo, a ISO 10218 foi revista em 2025 — a maior mudança em 14 anos — absorvendo a ISO/TS 15066 (aplicações colaborativas), criando classes de robô e **acrescentando requisitos de cibersegurança**; a matéria que abri não menciona controle baseado em aprendizado de máquina no escopo [14].

Ou seja: a lei já sabe que existe comportamento que evolui. Ela ainda não diz o que fazer com a prova produzida dentro de um mundo gerado.

### 3.6 Three Horizons

- **H1 (sistema dominante).** Robô em célula cercada, tarefa programada, simulador escrito à mão para verificação, integrador como intermediário obrigatório. Densidade de 132/10 mil e crescendo por percentuais de um dígito [1].
- **H2 (transição, onde estamos).** Política generalista com sucesso intermediário e acesso por parceria [7]; modelo de mundo aberto mas sem persistência [3][10]; avaliação real-to-sim aparecendo [8]; dado humano entrando na cadeia [9]; norma nova entrando em vigor em 2027 [13][14]. É a fase de conflito: o dado, a certificação e o acesso ainda não têm dono claro.
- **H3 (outra lógica possível).** O mundo é insumo, não obra: projeta-se o currículo em que um corpo aprende, avalia-se a política em ambiente reconstruído sob norma auditável, e o trabalho físico se reorganiza em torno de **intervenção humana** e não de substituição. Nada garante que H3 chegue; pode ser capturado por H1 (o simulador vira mais uma etapa de engenharia do integrador de sempre).

### 3.7 Nota sobre o Brasil

O Brasil chega a esta transição com base instalada rala em manufatura e densa em campo. Um relatório do Robotics Center of Silicon Valley (março de 2026), que cita IFR, ABIMAQ, ANAC, CONAB e USDA, dá **18 robôs por 10 mil trabalhadores da manufatura** no país, contra **350 por 10 mil no setor automotivo** — concentração extrema num setor só — e mercado de R$ 8,2 bilhões (~US$ 1,6 bi), o maior da América Latina [15]. É fonte secundária de consultoria e diverge da IFR na média global que usa como régua (§8); trato a ordem de grandeza como indicativa, não o número.

A leitura que me parece defensável: a densidade baixa é, ao mesmo tempo, atraso e ausência de legado. Não há um parque de robôs programados à moda antiga para defender, e há uma frente onde o país opera em escala — pulverização agrícola por drone. Não consegui, porém, confirmar número de frota em fonte primária: a página da ANAC sobre drones que abri **não traz dado numérico** de registros no SISANT [16]. Os números que circulam (177 mil drones registrados, 7,8 mil agrícolas) vieram só de resultado de busca e blog setorial, e por isso não entram como evidência. Fica registrado como lacuna, não como fato.

## 4. As disrupções-raiz

Foram avaliados 9 candidatos; 3 passaram. As fichas completas, inclusive as dos rejeitados, estão na §12.

---

### D1 — O ambiente de treino deixa de ser obra e passa a ser amostra

**Formulação estrutural.** A capacidade não é "existe o Cosmos" nem "existe o Genie". É: *tornou-se possível obter um ambiente 3D interativo por consulta a um modelo, em vez de construí-lo asset por asset* — e usar esse ambiente como lugar onde um agente aprende e é medido.

- **maturidade:** emergente
- **potencial de ruptura:** alto — altera pelo menos quatro dimensões: quem pode produzir mundo (barreira cai de estúdio para prompt), a cadeia de valor da produção 3D, o custo marginal de um cenário adicional, e a arquitetura do produto (o simulador vira modelo com pesos, não engine com código).
- **o que rompe:** rompe a equivalência entre "mundo" e "obra autoral construída". Rompe também a premissa de que o gargalo do treino corporificado é hardware: passa a ser *escolha de currículo*.
- **por que agora:** Cosmos 3 aberto e baixável em 31/05/2026 [3]; Cosmos-Predict2.5 treinado em 200M clipes com uso declarado de avaliação de política [2]; Genie 3 em tempo real a 24 fps [4]; SIMA 2 agindo e melhorando dentro de mundos gerados sem exemplo humano novo [5].
- **o que falta:** persistência de estado — hoje ausente e demonstrada ausente [10]; duração (minutos, quando o treino pede horas) [4]; e um consenso de o que sequer é um modelo de mundo [11].
- **evidências:** [2][3][4][5][10][11]
- **veredito:** **aceita.**

---

### D2 — A política corporificada atravessa corpos: ensinar deixa de ser programar

**Formulação estrutural.** *Uma mesma rede treinada em dados heterogêneos passa a controlar corpos diferentes, adquirindo tarefa nova por demonstração e instrução em linguagem, e não por programação de trajetória.*

- **maturidade:** emergente
- **potencial de ruptura:** alto — altera quem pode produzir (quem sabe demonstrar, não quem sabe programar), o papel do intermediário (o integrador perde a exclusividade sobre a tarefa), a arquitetura de produto (o corpo vira periférico do modelo) e a distribuição de poder (acesso por parceria, não por venda).
- **o que rompe:** rompe a unidade histórica entre *um robô, uma célula, um programa*. E rompe, para o público deste mapa, a fronteira entre desenhar interface e desenhar treino: a demonstração é uma interação, e interação mal desenhada vira política ruim.
- **por que agora:** π0.5 generalizando para casas novas [6]; Gemini Robotics 2 com corpo inteiro, adaptação a bi-braço novo com <200 exemplos e a corpos "drasticamente diferentes" com poucas horas [7]; versão on-device com inferência local [7].
- **o que falta:** as taxas de sucesso publicadas ainda são intermediárias (32%–92% conforme a tarefa) [7]; o acesso é restrito a parceiros [7]; e o dado continua caro e escasso — o achado de que vídeo humano supera dado de robô é de junho de 2026 e ainda não virou prática instalada [9].
- **evidências:** [6][7][9]
- **veredito:** **aceita.**

---

### D3 — A prova de que é seguro passa a ser produzida dentro da simulação

**Formulação estrutural.** *A avaliação — não o treino — migra para ambientes reconstruídos ou gerados, e o simulador passa de ferramenta de desenvolvimento a instrumento de evidência.*

- **maturidade:** experimental (subcategoria de emergente)
- **potencial de ruptura:** alto — altera governança e normas, distribuição de poder entre atores, a cadeia de valor da certificação e o papel do profissional que hoje assina laudo.
- **o que rompe:** rompe a premissa de que segurança de máquina se demonstra observando a máquina. Se a prova mora num mundo, o mundo entra no escopo da auditoria — e, com ele, o fornecedor do mundo entra na cadeia de responsabilidade.
- **por que agora:** PolaRiS mostra correlação sim×real materialmente melhor que benchmarks anteriores, com reconstrução a partir de vídeo curto [8]; a NVIDIA lista "policy evaluation" como uso de primeira classe do modelo de mundo [2]; e o Regulamento (UE) 2023/1230 passa a aplicar-se integralmente em **20/01/2027**, já nomeando comportamento auto-evolutivo como categoria de avaliação por terceiro [13], com a ISO 10218:2025 recém-revista como pano de fundo [14].
- **o que falta:** nenhum regulador que eu tenha conseguido documentar aceita hoje evidência simulada como prova de conformidade; e os benchmarks de consistência física dos próprios mundos gerados são recentes e contestados [10][11].
- **evidências:** [2][8][10][11][13][14]
- **veredito:** **aceita**, com a ressalva de que é a mais especulativa das três — e é justamente por isso que ela é interessante: é onde o mapa pode ser falseado cedo.

---

**Rejeitados como raiz (detalhe na §12):** humanoide de uso geral (produto, não capacidade; evidência de adoção inflada [12]); *sim-to-real* (maduro); simulação acelerada por GPU (madura); enxame de drones para resgate (sinal/wildcard, não raiz); robô doméstico (sem evidência de capacidade, apenas de demonstração).

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "D1 — O ambiente de treino deixa de ser obra e passa a ser amostra"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "Produzir um ambiente de treino deixa de ser projeto e vira consulta, derrubando o custo marginal do cenário adicional."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "Equipes de mídia passam a versionar descrições de mundo como hoje versionam assets."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "Abre-se disputa autoral sobre o mundo amostrado: reivindica-se direito sobre um cenário que ninguém desenhou."
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: "O portfólio de quem projeta mundo passa a ser julgado pelo currículo de treino que ele gera, não pela cena que entrega."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "O gargalo desloca-se de produzir mundo para decidir qual mundo vale treinar."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Consolida-se a função de curador de currículo: quem ordena mundos por dificuldade e mede o que cada um ensina."
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "A ausência de estado persistente nos modelos de mundo produz políticas que falham justamente em tarefas longas e fora de vista."
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Benchmarks passam a medir o que acontece com o mundo enquanto a câmera não está olhando."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Persistência de estado vira cláusula contratual na compra de simulador, como hoje se contrata latência."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "Projetos de agente doméstico recuam para tarefas curtas, observadas e reversíveis."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "A promessa pública é reescrita de 'o robô arruma a casa' para 'o robô arruma a bancada', e o marketing acompanha."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "Vídeo egocêntrico humano entra na cadeia de dado de robô como insumo de primeira linha, não como complemento."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "Captação em primeira pessoa passa a ser negociada como insumo industrial, com preço por hora útil, e não como conteúdo."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "O consentimento de gravação passa a distinguir 'ser visto' de 'ter o próprio gesto usado para treinar um corpo'."
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e3.1.2
                ordem: 3
                efeito: "Trabalhadores que gravam a própria rotina descobrem-se fornecedores do sistema que os automatiza, e passam a negociar esse papel."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "Dispositivos vestíveis de mídia passam a valer pela qualidade da anotação de ação, não pela qualidade da imagem."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "Especificação de câmera vestível passa a incluir sincronia com pose e força, deslocando o eixo de comparação do mercado."
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "D2 — A política corporificada atravessa corpos: ensinar deixa de ser programar"
    efeitos:
      - id: e4
        ordem: 1
        efeito: "Ensinar tarefa a uma máquina com corpo passa de escrever programa a produzir demonstração."
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "O integrador de automação perde a exclusividade sobre a tarefa e passa a disputar a posse do dado de demonstração."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Contratos de automação passam a estipular de quem é a política treinada com o dado do cliente."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "Interfaces de demonstração — teleoperação, luva, vídeo guiado — viram objeto de design de interação, com usabilidade medida."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "Aparece a ocupação de demonstrador: quem executa a tarefa de modo legível para a máquina aprender."
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e4.2.2
                ordem: 3
                efeito: "A qualidade de uma demonstração passa a ser avaliada com instrumentos de usabilidade, não de produtividade."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "A mesma política passa a operar corpos diferentes com poucas horas de dado de adaptação."
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "O corpo do robô vira decisão tardia de projeto, escolhida depois da política, e não antes dela."
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Fabricantes de hardware disputam ser o corpo de referência em que a política é treinada, como se disputa plataforma."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "Fornecedores de modelo controlam o acesso por parceria seletiva em vez de venda, e escolhem quem entra."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "Universidades e empresas fora das parcerias ficam restritas a modelos abertos defasados, ampliando a distância de capacidade."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: "Taxas de sucesso intermediárias empurram o projeto para o humano no laço em vez da autonomia plena."
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "O design de interação do trabalho físico vira desenho de intervenção: quando, como e com que antecedência a pessoa assume."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "A métrica de produto passa a ser intervenções por hora, como já se mede desengajamento em condução autônoma."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "Supervisão remota de frota corporificada vira turno de trabalho com ergonomia, escala e carga cognitiva próprias."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "A jornada do supervisor remoto entra em disputa trabalhista antes que o robô substitua alguém de fato."
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "D3 — A prova de que é seguro passa a ser produzida dentro da simulação"
    efeitos:
      - id: e7
        ordem: 1
        efeito: "A evidência de segurança passa a ser produzida em cenário reconstruído, e não apenas em pista, célula ou fábrica."
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "Reguladores precisam auditar o simulador, e não só a máquina, para saber o que a prova prova."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "Surge o organismo notificado que certifica ambiente sintético, com competência distinta de quem certifica máquina."
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e7.1.2
                ordem: 3
                efeito: "A responsabilidade por acidente passa a ser disputada entre fabricante do robô e fornecedor do mundo em que ele treinou."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: "Empresas passam a arquivar o mundo reconstruído como peça probatória, sob retenção longa."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: "O acervo de mundos vira ativo regulado, com custo de guarda e política de descarte próprios."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: "Quem detém o modelo de mundo passa a deter o critério do que conta como fisicamente aceitável."
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "Poucos fornecedores definem na prática o padrão de plausibilidade física usado por todo o setor."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: "Emerge a exigência de um simulador de referência público, como existe para unidade de medida e para benchmark."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: "Políticas passam a ser otimizadas para passar no simulador de avaliação, e não para funcionar no mundo."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: "Auditoria independente de discrepância entre simulado e medido vira serviço vendável, no molde do que ocorreu com emissões."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: "O ambiente físico começa a ser projetado para ser fácil de simular e de reconstruir."
        sinal: fraco
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: "Arquitetura e cenografia passam a entregar o gêmeo digital junto com a obra, como hoje se entrega as-built."
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: "Espaços legíveis para máquina ganham marcação visual deliberada, e essa marcação vira linguagem estética."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: "Lojas, hospitais e ruas passam a ser remedidos periodicamente, como se atualiza mapa."
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e9.2.1
                ordem: 3
                efeito: "A divergência entre gêmeo e realidade vira indicador de manutenção predial e urbana."
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

**O que a estrutura não captura bem.**

Primeiro, **a árvore separa o que na prática se realimenta**. e3 (vídeo humano vira dado) e e9 (o espaço passa a ser projetado para ser simulável) são o mesmo movimento visto de dois lados: o mundo sendo preparado para ser lido por máquina. A roda não tem como desenhar esse ciclo sem virar grafo — e virar grafo tornaria a auditoria causal impossível, que é o preço que aceitei.

Segundo, **a árvore força escolher um pai** onde há dois. e6.2 (supervisão remota vira turno de trabalho) decorre tanto da taxa de sucesso intermediária (e6) quanto do controle de acesso por parceria (e5.2), porque frota supervisionada é o modelo de negócio natural de quem não vende o modelo. Pendurei em e6 por ser o mecanismo mais direto; é uma perda de informação.

Terceiro, **ordem não é data e a leitura visual engana**. e2 é 1ª ordem com prazo 2028 e confiança alta porque a falha já está documentada [10]; e9.2.1 é 3ª ordem e pode aparecer antes disso em um shopping específico. A ordem mede distância causal da raiz, não cronologia — o campo `prazo` existe justamente porque a posição na árvore não carrega essa informação.

Quarto, **a roda não pondera magnitude**. e8.2 (otimizar para o simulador) e e3.2.1 (spec de câmera muda) ocupam o mesmo tipo de nó, mas um deles compromete a segurança de sistemas físicos e o outro reorganiza um mercado de acessório.

## 6. Sinais fracos e wildcards

### Sinais fracos

**S1 — Vídeo egocêntrico humano supera dado de robô no pré-treino.** É um resultado de junho de 2026, de um grupo acadêmico, com ganhos grandes fora da distribuição (+90%) [9]. Se sustentar, inverte a hierarquia de quem é fornecedor de dado da IA física: deixa de ser a frota teleoperada e passa a ser quem captura vida cotidiana em primeira pessoa. Para quem projeta mídia, é a notícia mais relevante do mapa e a menos comentada.

**S2 — A reconstrução do real como instrumento de medida.** PolaRiS não é sobre treinar melhor; é sobre **medir** melhor, transformando varredura de vídeo em bancada de avaliação [8]. Instrumentos de medida têm carreira própria: quando um vira padrão, ele passa a definir o que o campo persegue.

**S3 — A crítica vem de dentro.** O artigo sobre estado persistente [10] e o esforço de definir o que é um modelo de mundo [11] são do mesmo semestre em que o marketing do setor amadureceu. Campo que produz a própria crítica metodológica no auge do entusiasmo tende a corrigir mais rápido — e a decepcionar mais cedo.

**S4 — "Comportamento auto-evolutivo" já é categoria jurídica.** O considerando 54 do Regulamento (UE) 2023/1230 nomeia dependência de dados, opacidade, autonomia e conectividade como razões para colocar essas funções no Anexo I [13]. A lei chegou antes da tecnologia estar pronta, o que é raro e muda a ordem dos acontecimentos.

**Não são sinais fracos, embora sejam tratados como tais:** humanoide (é o produto mais divulgado do setor [12]) e Cosmos (é lançamento de líder de mercado com coalizão de parceiros [3]). Sinal fraco é indício pequeno e ambíguo, não anúncio de líder.

### Wildcards

**W1 (principal) — Um acidente com robô cuja causa técnica seja atribuída ao mundo em que ele treinou, e não ao robô.** Baixa probabilidade num horizonte curto, porque a base instalada de robôs treinados por modelo de mundo ainda é pequena. Alto impacto: um laudo que aponte o simulador transforma D3 de oportunidade comercial em obrigação legal e antecipa e7.1 e e7.1.2 para 2028. O efeito colateral é a demanda por acesso aos pesos do modelo de mundo numa investigação — o que colide de frente com o modelo de acesso por parceria (e5.2) e pode empurrar o setor para modelos abertos por razão forense, não ideológica. **Como quebra o mapa:** se o laudo for inconclusivo por impossibilidade técnica de auditar o modelo, o resultado inverso é igualmente possível — proibição categórica de evidência simulada, e D3 morre.

**W2 — Um modelo de mundo bom o bastante rodando em GPU de consumidor.** Inverteria e8.1: em vez de concentração, proliferação. Torna e1 muito mais rápido e e8.2 muito mais difícil de auditar, porque não haveria um simulador de referência a auditar — haveria milhares.

## 7. Contra o próprio mapa

Assumo aqui o papel de quem quer derrubar a análise acima.

**1. Qual efeito é apenas extrapolação linear do presente?**
e1 é o pior caso. "O custo cai, logo o cenário vira commodity" é a mesma frase dita sobre renderização, sobre modelagem procedural e sobre geração de imagem, e em nenhum dos três a produção de mundo deixou de ser trabalho. Custo de gerar não é custo de **usar**: um mundo gerado que não serve para treinar nada custa caro em tempo de avaliação. **Ação tomada:** rebaixei e1 de confiança alta para média e adiei o prazo de 2027 para 2028. Mantive porque há mecanismo específico ausente nos casos análogos — o consumidor do mundo aqui é uma política, não um olho humano, e política tolera artefato visual que espectador não tolera.

**2. Qual efeito assume adoção rápida demais?**
e4 ("ensinar vira demonstrar", prazo 2029). O caso histórico que uso contra mim mesmo é a programação por demonstração em robótica industrial, que existe há décadas e nunca deslocou a programação convencional em produção. E há um dado que ninguém deveria ignorar: as taxas de sucesso publicadas por quem está na fronteira vão de 32% a 92% conforme a tarefa [7]. Uma célula industrial não roda a 32%. **Ação:** e4 fica em confiança média, não alta, apesar do sinal forte — e é o efeito que mais gostaria de ver falseado.

**3. Qual disrupção-raiz pode simplesmente não acontecer?**
**D1.** O argumento contra é literal e publicado: se o modelo de mundo não mantém estado quando não é observado [10], ele não é um mundo, é um gerador de plano de fundo condicionado à ação. Nesse cenário, o modelo de mundo entra na cadeia como **aumentador de dado** — variação de textura, iluminação e ponto de vista sobre cenas de um simulador escrito à mão — e não como o lugar onde se aprende. Isso é útil e é negócio, mas não é ruptura: é randomização de domínio com outro nome, sobre infraestrutura madura.

**4. O que quebra na roda se D1 falhar?**
Cai e1 inteiro com seus cinco descendentes, e cai e2.1 e e2.2 como consequências relevantes (a falha vira detalhe de engenharia, não questão de projeto). Sobrevive e3, porque a demanda por vídeo humano decorre da escassez de dado, não da existência de modelo de mundo [9]. Sobrevive D2 inteira. Sobrevive D3 **parcialmente**: e7 muda de base, passando a apoiar-se em reconstrução real-to-sim [8] em vez de mundo gerado, o que aliás fortalece o argumento regulatório em vez de enfraquecê-lo — é mais fácil auditar uma reconstrução medida do que uma amostra de modelo. Em resumo: se D1 cair, o mapa perde um terço e ganha em plausibilidade.

**5. Que contrassinais existem?**
(a) Estado persistente ausente entre arquiteturas e escalas [10] — não é limitação de um produto, é do paradigma. (b) Genie 3 é de agosto de 2025 e continuava em *research preview* limitado, com interação de minutos [4]: um ano de fila sem abertura é sinal de dificuldade, não de contenção estratégica. (c) O campo ainda discute o que é um modelo de mundo [11]. (d) Acesso restrito a parceiros nos modelos de ação mais capazes [7] indica que nem os próprios laboratórios consideram a tecnologia pronta para uso amplo. (e) A base instalada cresce em percentuais de um dígito ao ano [1]: o mundo físico não muda na velocidade do anúncio. (f) O rastreador de implantações mais criterioso mostra que a maioria das entradas nem quantifica unidades [12].

**6. Que barreiras foram subestimadas?**
Regulatória: a partir de 20/01/2027 não há período de transição no Regulamento (UE) 2023/1230 [13], e função de segurança auto-evolutiva cai em avaliação por terceiro — o caminho mais provável do mercado não é "IA no laço de segurança", é **manter a IA fora da função de segurança** e cercá-la com camada clássica certificável, o que reduz o alcance real de D2 dentro da fábrica. Econômica: dado continua caro, e a única série de custos que encontrei é de um fornecedor que declara ser fornecedor [17] — não triangulei. Cultural: demonstração exige que trabalhador entregue o próprio gesto, e a §e3.1.2 trata disso como negociação; pode ser recusa. De infraestrutura, no Brasil: densidade de 18 robôs por 10 mil na manufatura [15] significa que grande parte do parque nem chegou a H1.

**7. Que ator teria incentivo para bloquear, capturar ou redirecionar?**
O integrador de automação, que perde a exclusividade sobre a tarefa (e4.1) e tem relação instalada com o cliente — o caminho de captura é oferecer a política como serviço e manter a posse do dado. O fornecedor de modelo de mundo, cujo incentivo é exatamente e8.1: tornar-se o padrão de fato do que é fisicamente aceitável, o que se faz melhor liberando o modelo de graça do que vendendo — e é literalmente o que se observa em [3]. E o comprador industrial, cujo incentivo é resistir a e7.2 (arquivar mundo como prova) pelo custo de guarda.

**8. Que viés meu e do modelo entrou aqui?**
Três, que consigo nomear. **(a) Viés de fonte:** a maior parte da evidência de fronteira é publicada por três laboratórios que também vendem — NVIDIA, DeepMind, Physical Intelligence. Ler o estado da arte nas fontes deles é ler o roadmap comercial deles. Compensei parcialmente com literatura crítica [10][11] e com norma [13], mas não elimina. **(b) Viés de recência:** o mapa dá peso desproporcional a papers de junho–julho de 2026 porque são os que a busca devolve primeiro; capacidades importantes de 2024 podem estar sub-representadas. **(c) Viés do público:** o recorte "quem projeta mídia e interação" me empurrou a valorizar efeitos sobre ofício criativo (e1.1.2, e3.2, e9.1.1) que talvez sejam marginais diante do que acontece em logística e manufatura. Declaro isso porque é o tipo de distorção que o leitor precisa poder descontar.

**Efeitos cortados nesta revisão** (registrados na §12, fora do YAML): "robô doméstico de uso geral vendido ao consumidor até 2031"; "queda de emprego mensurável em manufatura atribuível a agentes corporificados até 2031"; "cidades redesenhadas para robôs"; "modelo de mundo substitui motor de jogo na produção de entretenimento".

## 8. O que a máquina errou

Erros efetivamente detectados durante este processo, não erros hipotéticos.

**1. Números de treino do Cosmos 3 sem origem verificável.** O resultado de busca afirmava "20 trilhões de tokens multimodais, quase um bilhão de imagens, 400 milhões de vídeos reais e sintéticos". Ao abrir o comunicado oficial [3], o texto diz apenas "bilhões de amostras através de texto, imagem, vídeo, som e trajetórias de ação". Os números específicos não estão na fonte primária que abri. **Corrigido:** não foram usados. Usei, em seu lugar, os 200 milhões de clipes que constam do artigo técnico [2], onde é possível verificar.

**2. Divergência não resolvida na densidade média global de robôs.** A IFR, em comunicado de 08/04/2026, diz **132 por 10 mil empregados (2024)** [1]. O relatório sobre o Brasil, de consultoria, usa **151** como média global de referência [15]. Não consegui reconciliar — podem ser anos-base ou denominadores diferentes. **Corrigido:** adotei o número da IFR, que é a fonte primária do indicador, e sinalizei a divergência em vez de escolher em silêncio.

**3. Números de implantação de humanoides tratados como fato.** Os snippets de busca traziam "mais de 1.000 Optimus Gen 3 em operação", "1.250 horas na BMW Spartanburg", "19.100 unidades embarcadas no 1º semestre de 2026". Ao abrir o rastreador de implantações [12], as entradas com fonte citada são outras — AiMOGA/Chery com 3.000+ unidades em atendimento, 110 robôs policiais, fábrica AgiBot/Minth na Sérvia — e a maioria dos registros **não quantifica unidades implantadas**. **Corrigido:** nenhum daqueles números entrou no mapa. Este é exatamente o erro de "produto anunciado tratado como produto disponível" que a skill manda procurar.

**4. Erro meu de classificação de maturidade, corrigido a meio caminho.** Cheguei a classificar "simulação física acelerada por GPU" como emergente, contaminado pela proximidade com os modelos de mundo. É madura: tem múltiplos produtos, ecossistema estável e usos reais além de demonstração. Foi rebaixada a antecedente maduro (§3.1). O erro é o mesmo diagnosticado em `DUVIDAS.md` para hand tracking, invertido: lá, disponibilidade comercial foi lida como maturidade operacional; aqui, adjacência a algo novo foi lida como imaturidade.

**5. Data do Genie 3 quase lida como novidade de 2026.** É de **05/08/2025** [4]. Um ano depois seguia em preview limitado com interação de minutos. Ler a data corretamente muda a leitura de maturidade e virou contrassinal (§7.5b) em vez de evidência de aceleração.

**6. Tentativa frustrada de fonte primária brasileira.** Abri a página da ANAC sobre drones [16] procurando o número de aeronaves registradas no SISANT. **A página não traz dado numérico.** Os números que circulam (177 mil registros, 7,8 mil agrícolas) vieram só de blogs setoriais que não abri como evidência. **Corrigido:** o mapa não afirma frota de drones no Brasil. Fica declarado como lacuna na §3.7.

**7. Fonte de custo com parte interessada e sem triangulação.** A única série de custo de teleoperação que abri é de um fornecedor de dados que, para seu crédito, declara-se fornecedor e diz que os números são benchmarks próprios, não pesquisa externa [17]. Não encontrei fonte independente. **Consequência:** não usei número de custo em nenhuma afirmação do mapa; o argumento de escassez de dado apoia-se em [9], que é acadêmico.

Nenhum outro erro foi detectado após verificação. Não inventei erro para parecer crítico — os sete acima são rastreáveis nas fontes citadas.

## 9. Três cenários para 2031

Os três diferem em **mecanismo, atores e condições**, não em grau de otimismo.

### Provável — o mundo gerado virou aumentador de dado, e o robô virou periférico supervisionado

Em 2031, o modelo de mundo não venceu como mundo: venceu como **fábrica de variação**. A persistência de estado melhorou, mas não o bastante para tarefa longa fora de vista, então o padrão da indústria estabilizou num híbrido — simulador físico escrito à mão para a dinâmica, modelo gerativo por cima para variar textura, luz, clutter e ponto de vista. A tese de "o robô aprende num mundo que a IA inventou" sobreviveu como manchete e como sub-rotina.

A política generalista, essa sim, pegou. Não em casa: em logística, inspeção, agricultura e manufatura de série curta, sempre com supervisor humano de frota. As empresas medem intervenções por hora e contratam demonstradores. O integrador de automação não morreu — reposicionou-se como dono do dado do cliente, e o contrato de automação hoje tem cláusula sobre a propriedade da política.

A avaliação simulada entrou como etapa de engenharia, não como prova legal. Nenhum regulador aceita mundo gerado como evidência de conformidade; o Regulamento de Máquinas em vigor desde 2027 empurrou o setor a manter a IA **fora** da função de segurança, cercada por camada clássica certificável. Quem quis vender na Europa aprendeu a desenhar assim.

No Brasil, o país comprou pacote pronto. A densidade de robôs em manufatura subiu pouco e continua concentrada em automotivo; a frente que efetivamente escalou foi a de máquinas de campo, onde já havia operação, mercado e urgência — e onde a política generalista chegou embutida no equipamento importado, não desenvolvida aqui.

**Atores que decidiram:** fornecedores de modelo, integradores, compradores industriais. **Mecanismo:** limitação técnica não resolvida + norma conservadora = incorporação incremental.

### Desejável — a divergência virou coisa pública

Em 2031, o que mudou não foi a capacidade, foi **a obrigação de mostrar o erro**.

Entre 2027 e 2029, uma sequência de resultados ruins em campo, publicados por quem os sofreu, tornou insustentável relatar desempenho apenas em simulação. Formou-se a prática — primeiro voluntária, depois exigida em compra pública — de publicar, junto com qualquer alegação simulada, a **discrepância medida contra o real**, num protocolo pareado. A auditoria de divergência virou serviço, e virou disciplina de projeto.

Isso puxou duas coisas. Um **simulador de referência público**, mantido por consórcio com participação acadêmica, contra o qual se calibram os privados — não o melhor, o **comparável**. E a exigência de que persistência de estado seja declarada e medida, o que fez os fornecedores atacarem o problema em vez de contorná-lo com demonstração bonita.

O trabalho não desapareceu; foi reescrito. O desenho de intervenção virou especialidade reconhecida — quem projeta o momento em que a pessoa assume o controle, com quanta antecedência e com que informação. Demonstrar para a máquina virou trabalho pago, com padrão de qualidade próprio e, em alguns setores, negociação coletiva sobre uso do gesto gravado. O consentimento para captura egocêntrica passou a distinguir "ser visto" de "ser usado como treino de corpo", e isso valeu tanto para o operário quanto para o pedestre.

No Brasil, a ausência de legado foi usada como vantagem em uma frente específica: máquinas de campo, onde há escala real e um problema que ninguém no Norte global tem exatamente igual. A contribuição brasileira foi menos de modelo e mais de **ambiente de avaliação** — corpora de cenários agrícolas e urbanos periféricos que os simuladores do Norte não continham.

**Condições que precisaram ser construídas:** protocolo pareado sim×real com publicação obrigatória; financiamento estável de um simulador de referência; norma que trate o ambiente sintético como objeto auditável; e reconhecimento formal da demonstração como trabalho.

### Indesejável — o critério foi capturado, e a divergência ficou privada

Em 2031, a avaliação migrou para a simulação — e ninguém consegue auditá-la.

O caminho foi banal. Os benchmarks de plausibilidade física consolidaram-se em torno dos modelos de dois fornecedores, porque eram os únicos com escala. Passar no simulador virou requisito de compra. E, como acontece quando a métrica vira alvo, as políticas passaram a ser otimizadas para o simulador: bom desempenho nos regimes que o modelo de mundo representa bem, degradação silenciosa nos que ele representa mal — oclusão longa, evento fora de vista, exatamente onde a literatura de 2026 já dizia que o buraco estava, e ninguém mediu porque medir não era obrigatório.

O acidente veio em um contexto sem glamour: manuseio de material, um espaço remodelado que o gêmeo digital não acompanhou, uma tarefa longa em que o mundo mudou enquanto o agente não olhava. O laudo não pôde concluir: os pesos do modelo de mundo não estavam disponíveis para a perícia, e o fornecedor argumentou segredo comercial. Sem responsabilidade atribuível, o regulador fez o que se faz nesse caso — proibição ampla de evidência simulada para categorias inteiras, o que penalizou também quem fazia certo, e empurrou a operação para jurisdições com norma frouxa.

O trabalho ficou pior de um jeito que quase não apareceu em estatística de emprego: não houve substituição em massa, houve **supervisão em massa**. Turnos de monitoramento remoto de frota, carga cognitiva alta, salário baixo, responsabilidade legal difusa, e a intervenção humana contabilizada como falha do trabalhador e não como limite do sistema.

**Sinal precoce que teria antecipado isto:** o momento — situado entre 2027 e 2028 — em que resultados de política passaram a ser reportados majoritariamente em ambiente simulado **sem obrigação de publicar a diferença medida contra o real**. Esse é o sinal. Não o acidente: o acidente é o desfecho. O sinal é a divergência deixar de ser publicada.

## 10. O experimento

### Bancada de Divergência

**O que é.** Uma bancada mínima e reprodutível que roda a **mesma** tarefa em três lugares e mede a distância entre eles: (a) no mundo real, num espaço pequeno e controlado; (b) num mundo **reconstruído** desse espaço, gerado a partir de uma varredura curta em vídeo, no espírito de real-to-sim [8]; (c) num mundo **gerado por prompt**, com modelo de mundo aberto [3], sem varredura do espaço. Um mesmo agente simples e aberto — um braço de baixo custo ou um robô móvel barato, com política aberta ou até com um agente de linguagem emitindo ações discretas — executa o conjunto de tarefas nos três.

O conjunto de tarefas é desenhado com um eixo só, deliberadamente: **quanto do mundo sai de vista durante a execução**. Metade das tarefas mantém tudo enquadrado; a outra metade obriga o agente a virar-se, sair, e voltar a um objeto que, no intervalo, deveria ter mudado de estado (algo que escorre, tomba, esfria, ou que um segundo participante move).

**Pergunta de futuro que testa.** *Avaliação feita em mundo gerado pode servir como prova de desempenho — e, se não pode, a falha está onde a literatura diz que está: no que acontece fora do enquadramento?*

Isto testa diretamente D3 e o efeito e2. Se a divergência sim×real for pequena e **uniforme** entre tarefas com e sem oclusão, a tese de que a persistência de estado é o gargalo enfraquece muito, e e2 (hoje o único efeito de confiança alta do mapa) precisa ser rebaixado. Se a divergência for pequena nas tarefas enquadradas e grande nas de oclusão, a tese se confirma e o mapa ganha um critério operacional: mundo gerado serve para avaliar tarefa observada, não tarefa longa.

**Tecnologia emergente usada.** Modelo de mundo gerativo aberto [3]; reconstrução real-to-sim a partir de vídeo [8]; política corporificada aberta.

**Por que uma solução madura não responde à mesma pergunta.** Um simulador clássico — MuJoCo, Isaac Sim, MetaDrive — responde a uma pergunta diferente e mais fácil: *"o modelo físico que eu escrevi corresponde ao real?"*. Ali o estado é uma variável declarada por mim, e objetos fora de vista continuam existindo por construção — a pergunta sobre persistência **não pode nem ser formulada**. É preciso um mundo que ninguém escreveu para descobrir se ele mantém o que ninguém está olhando.

**O que os participantes fazem.** Três papéis. (i) **Duplas de operação cega**: uma pessoa conduz a sessão no real, outra na simulação, sem ver o resultado da outra, para que a expectativa não contamine a execução. (ii) **Um painel de projetistas** que assiste apenas ao mundo simulado e, antes de qualquer execução real, aponta por escrito onde acredita que o real vai divergir — mede-se a acurácia dessa previsão. (iii) **Um participante perturbador**, que altera o espaço real durante as tarefas de oclusão, produzindo exatamente o evento que o modelo de mundo precisaria ter feito avançar sem observar.

**Métrica e observação.**
- Δ primário: taxa de sucesso pareada real × reconstruído × gerado, por tarefa.
- Δ crítico: diferença entre o Δ das tarefas com oclusão e o Δ das tarefas sem oclusão. **É este número que responde à pergunta.**
- Acurácia de previsão dos projetistas: quantas divergências foram antecipadas por olho humano treinado — se for alta, a auditoria humana de simulador é viável; se for baixa, e8.2 fica muito mais perigoso.
- Registro qualitativo do modo de falha: o agente age como se o mundo tivesse congelado?

**O que faria o pesquisador mudar de ideia.** Se o Δ crítico for estatisticamente indistinguível de zero — isto é, se a oclusão não piorar a divergência —, a hipótese central de que a persistência de estado é o gargalo prático **cai**, e com ela e2, e2.1, e2.2 e o contra-argumento principal da §7.3. Nesse caso, D1 fica mais forte do que este mapa afirma, e eu estaria errado na direção conservadora. Se, ao contrário, o mundo **reconstruído** divergir tanto quanto o **gerado por prompt**, então o problema não é o modelo de mundo e sim a reconstrução em si, e D3 perde a sua base técnica — a prova simulada seria inviável por outra razão, mais banal e mais difícil de resolver.

## 11. Fontes

1. **IFR — "Robot Density Surges in Europe, Asia, and the Americas"**, 08/04/2026. `https://ifr.org/ifr-press-releases/news/robot-density-surges-in-europe-asia-and-americas` — sustenta a densidade média global de 132 robôs/10 mil empregados (2024) e os valores de Europa Ocidental (267), América do Norte (204) e Ásia (131). *Confiabilidade alta para o indicador: é a federação que produz a série, embora seja associação setorial.*

2. **NVIDIA — "World Simulation with Video Foundation Models for Physical AI"** (Cosmos-Predict2.5), arXiv:2511.00062, 28/10/2025, rev. 24/02/2026. `https://arxiv.org/abs/2511.00062` — sustenta os 200 milhões de clipes de treino, as escalas 2B/14B e o uso declarado para geração de dado sintético, **avaliação de política** e simulação em malha fechada. *Confiabilidade média-alta: artigo técnico detalhado, mas de autoria do fabricante e sem limitações declaradas.*

3. **NVIDIA Newsroom — "NVIDIA Launches Cosmos 3, the Open Frontier Foundation Model for Physical AI"**, 31/05/2026. `https://nvidianews.nvidia.com/news/nvidia-launches-cosmos-3-the-open-frontier-foundation-model-for-physical-ai` — sustenta a data de lançamento, a arquitetura *mixture-of-transformers*, a disponibilidade aberta no Hugging Face e a composição da coalizão. *Confiabilidade baixa-média: é comunicado corporativo; a alegação de "meses para dias" é interessada e não foi triangulada.*

4. **Google DeepMind — "Genie 3: A new frontier for world models"**, 05/08/2025. `https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/` — sustenta 24 fps, 720p, consistência de alguns minutos, memória visual de ~1 minuto, uso com o agente SIMA e a lista explícita de limitações. *Confiabilidade média: fabricante, mas declara limitações de forma incomum e verificável.*

5. **DeepMind — "SIMA 2: A Generalist Embodied Agent for Virtual Worlds"**, arXiv:2512.04797, 04/12/2025. `https://arxiv.org/abs/2512.04797` — sustenta a generalização para ambientes não vistos e a alegação de auto-melhoria aberta sem intervenção humana. *Confiabilidade média-alta: artigo com licença aberta; abstract não declara limitações.*

6. **Physical Intelligence — "π0.5: a Vision-Language-Action Model with Open-World Generalization"**, arXiv:2504.16054, 22/04/2025. `https://arxiv.org/abs/2504.16054` — sustenta a manipulação longa e destra em casas inteiramente novas. *Confiabilidade média: artigo de laboratório-empresa, 35 autores, sem seção de limitações no abstract.*

7. **Google DeepMind — "Gemini Robotics 2 brings whole body intelligence to robots"**, 30/07/2026. `https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/` — sustenta o controle de corpo inteiro, adaptação com <200 exemplos e poucas horas de dado, as taxas de sucesso 45,7–76,3% / 74,2–89,6% / 32–92%, o acesso restrito a parceiros e o benchmark de segurança ASIMOV-Agentic. *Confiabilidade média: fabricante, mas publica números de sucesso desfavoráveis, o que aumenta a credibilidade.*

8. **PolaRiS: Scalable Real-to-Sim Evaluations for Generalist Robot Policies**, arXiv:2512.16881, 18/12/2025. `https://arxiv.org/abs/2512.16881` — sustenta a reconstrução de ambientes a partir de varredura curta em vídeo e a alegação de correlação mais forte com o real que benchmarks simulados existentes. *Confiabilidade média-alta: consórcio acadêmico amplo; a correlação é afirmada qualitativamente no abstract, sem valor numérico.*

9. **HumanScale: Egocentric Human Video Can Outperform Real-Robot Data for Embodied Pretraining**, arXiv:2606.20521, 18/06/2026. `https://arxiv.org/abs/2606.20521` — sustenta 24% menos perda de validação, +52,5% em tarefa dentro da distribuição e +90% fora dela, para pré-treino com vídeo egocêntrico humano. *Confiabilidade média: preprint recente, sem revisão por pares confirmada; resultado forte que pede replicação.*

10. **Lu, J. et al. — "Current World Models Lack a Persistent State Core"**, arXiv:2606.20545, 18/06/2026. `https://arxiv.org/abs/2606.20545` — sustenta o contrassinal central deste mapa: modelos de mundo tratam o ambiente como *tracking shot* e retomam alvos no estado em que foram abandonados, entre arquiteturas e escalas. *Confiabilidade média-alta: preprint, mas é evidência crítica e desinteressada, do tipo mais raro no corpus.*

11. **A Definition and Roadmap for World Models**, arXiv:2607.06401, 07/07/2026. `https://arxiv.org/abs/2607.06401` — sustenta que não há consenso sobre o que é um modelo de mundo, o que ele deve prever e como construí-lo. *Confiabilidade média: artigo de perspectiva; usado apenas para demonstrar ausência de consenso, que é o que ele mesmo declara.*

12. **HumanoidApplications.com — Humanoid Robot Deployments Tracker**, última entrada 29/08/2026. `https://humanoidapplications.com/deployments/` — sustenta as implantações verificadas com fonte (AiMOGA/Chery 3.000+ e 110 policiais, via Reuters; AgiBot/Minth na Sérvia) e, sobretudo, sustenta que a **maioria das entradas não quantifica unidades implantadas**. *Confiabilidade média: agregador setorial, mas cita a fonte de cada entrada, o que permite descontar.*

13. **Regulamento (UE) 2023/1230 (Máquinas)** — EUR-Lex. `https://eur-lex.europa.eu/eli/reg/2023/1230/oj/eng` — sustenta os considerandos 54 e 55: inclusão no Anexo I de sistemas com comportamento auto-evolutivo que asseguram funções de segurança, e restrição da avaliação por terceiro a sistemas com comportamento total ou parcialmente auto-evolutivo por aprendizado de máquina. *Confiabilidade alta: texto legal primário. Ressalva: o documento que abri estava truncado e não continha o artigo com a data de aplicação nem o Anexo I integral — a data de 20/01/2027 vem de [14] e de resultados de busca convergentes, não do texto que li.*

14. **The Robot Report — "ISO 10218 industrial robot safety standard receives major overhaul"**, 18/02/2025. `https://www.therobotreport.com/iso-10218-industrial-robot-safety-standard-receives-major-overhaul/` — sustenta a revisão de 2025, a absorção da ISO/TS 15066, as novas classes de robô e a inclusão de requisitos de cibersegurança; registra que a matéria **não** menciona controle por aprendizado de máquina no escopo. *Confiabilidade média: imprensa especializada; a norma em si é paga e a página da ISO retornou 403.*

15. **Robotics Center of Silicon Valley — "State of Robotics Brazil 2026"**, março de 2026. `https://www.roboticscenter.ai/state-of-robotics-brazil-2026` — sustenta 18 robôs/10 mil trabalhadores na manufatura brasileira, 350/10 mil no automotivo e mercado de R$ 8,2 bi. Cita IFR, ABIMAQ, ANAC, CONAB e USDA. *Confiabilidade baixa-média: consultoria com interesse comercial no mercado que descreve, e diverge de [1] na média global que usa como régua. Ordem de grandeza, não número.*

16. **ANAC — página de Drones**, `https://www.gov.br/anac/pt-br/assuntos/drones` — aberta como tentativa de fonte primária para a frota registrada no SISANT. **Não traz dado numérico nem data de atualização.** Citada aqui como busca sem resultado, para que a lacuna fique registrada. *Confiabilidade alta como fonte, nula como evidência para o que eu procurava.*

17. **Dexset — "Teleoperation Data Collection: 2026 Guide, Rigs & Costs"**, 19/07/2026. `https://dexset.ai/blogs/teleoperation-data-collection-robot-learning-complete-2026/` — sustenta custo de US$ 28–60 por hora de teleoperação e 8–12 (novato) a 25–40 (treinado) episódios úteis por hora. *Confiabilidade baixa e declaradamente interessada: é um fornecedor de dado de robô, e o próprio texto diz "somos fornecedor, desconte nossa visão de acordo" e identifica os números como benchmarks internos, não pesquisa externa. Por isso nenhum número dele entrou em afirmação do mapa; aparece só na §7.6 como limitação.*

> Contagem declarada no frontmatter: **16 fontes**. As dezessete entradas acima incluem [16], que é uma busca sem resultado registrada por transparência e não sustenta nenhuma afirmação. Fontes que sustentam afirmações: 16.

## 12. Anexo — o levantamento bruto

### 12.1 Registro da entrevista (§0 da skill)

Os seis campos mínimos foram fornecidos antes de qualquer pesquisa: tema (agentes corporificados, IA física e modelos de mundo — tema 9 de 19, família "Simulação e mundos"); horizonte (2031); público (quem projeta mídia e interação); recorte (global, com nota sobre o Brasil); descartes (o que já é comum em produto de massa, régua da disciplina; nenhuma outra exclusão); viés (neutro). Parâmetros adicionais: profundidade três ordens; modo "a partir de uma inovação/tema", não de setor; sem disrupção suspeita a priori; ideias óbvias a excluir são as que serviriam a qualquer tema. Critério declarado de mudança de ideia: evidência de que a adoção já passou da maioria inicial (Rogers), ou de que a tecnologia só melhora o que existe sem romper nada. Nenhuma contradição entre campos; confirmação feita antes da §1.

Nesta rodada não houve interlocutor humano disponível para perguntas de seguimento. Onde faltou definição, assumi e declarei — o caso relevante foi a nota sobre o Brasil, cujo escopo não estava especificado e que tratei como §3.7 mais um parágrafo em cada cenário, não como recorte paralelo.

### 12.2 Fichas dos candidatos a disrupção-raiz

| # | Candidato | Maturidade | Ruptura | Veredito |
|---|---|---|---|---|
| C1 | Ambiente de treino como amostra de modelo, não como obra | emergente | alto | **aceito (D1)** |
| C2 | Política generalista atravessando corpos | emergente | alto | **aceito (D2)** |
| C3 | Avaliação/prova migrando para dentro da simulação | experimental | alto | **aceito (D3)** |
| C4 | Humanoide de uso geral | emergente | médio | rejeitado → sinal |
| C5 | *Sim-to-real* | maduro | médio | rejeitado → antecedente |
| C6 | Simulação física acelerada por GPU | maduro | baixo | rejeitado → antecedente |
| C7 | Enxame de drones autônomo para resgate | experimental | médio | rejeitado → wildcard adjacente |
| C8 | Robô doméstico de uso geral | experimental | alto | rejeitado → sem evidência |
| C9 | VLA rodando localmente no dispositivo (on-device) | emergente | médio | rejeitado → habilitador de D2 |

**C4 — humanoide de uso geral.** *O que rompe:* alega romper a necessidade de adaptar o ambiente à máquina. *Por que agora:* volume de anúncio e capital. *O que falta:* praticamente tudo que sustentaria a alegação. *Veredito:* rejeitado por duas razões independentes. Primeira, é **produto**, e a skill manda formular a capacidade estrutural por trás do produto — que é D2. Segunda, a evidência de adoção não sobrevive à abertura das fontes: o rastreador mais criterioso mostra que a maioria das entradas não quantifica unidades [12], e os números redondos de resultado de busca não foram confirmados (§8.3). Fica como **sinal de expectativa**, não como raiz.

**C5 — sim-to-real.** Rejeitado por maturidade. Existe literatura de revisão consolidando "melhores práticas" para a lacuna de realidade, e randomização de domínio é técnica padrão. Problemas conhecidos de engenharia, não incertezas fundamentais. Entra como antecedente (§3.1). Nota: não consegui abrir a revisão da Annual Reviews (403), então esta classificação apoia-se na existência do artigo e na presença da técnica em toda a literatura que li, não numa leitura da revisão em si.

**C6 — simulação em GPU.** Rejeitado por maturidade — e este foi um erro meu corrigido no meio do processo (§8.4).

**C7 — enxame de drones.** Interessante, e é o wildcard que a descrição do tema traz. Rejeitado como raiz porque não consegui evidência aberta de capacidade operacional; e porque, se acontecer, é *consequência* de D2 (política generalista) mais coordenação multiagente, não capacidade independente.

**C8 — robô doméstico.** Rejeitado apesar do potencial alto: π0.5 demonstra manipulação em casas novas [6], mas demonstração não é produto, e o contrassinal de estado persistente [10] atinge exatamente o caso doméstico, que é longo, desordenado e cheio de oclusão. Vira o efeito e2.2, não uma raiz.

**C9 — VLA on-device.** Real e relevante [7], mas é condição de viabilidade de D2 (latência, privacidade, operação sem rede), não ruptura autônoma. Absorvido em D2.

### 12.3 Caminhos causais cortados

Cortados por falha no teste "se A acontecer, B fica mais provável **porque** ____":

- **"Modelo de mundo substitui motor de jogo na produção de entretenimento."** Não completa o mecanismo: motor de jogo entrega determinismo, controle autoral fino e reprodutibilidade, que são requisitos de produção — e é justamente o que um modelo amostral não dá. A limitação de texto ilegível e a inconsistência multiagente declaradas em [4] atingem em cheio o uso de produção.
- **"Cidades redesenhadas para robôs até 2031."** Horizonte errado por ordens de magnitude. Sobreviveu uma versão fraca e local, e9.1/e9.2, e mesmo essa está em confiança baixa.
- **"Queda mensurável de emprego em manufatura atribuível a agentes corporificados até 2031."** Cortado por falta de mecanismo em escala: a base instalada cresce em percentuais de um dígito [1] e as taxas de sucesso publicadas não sustentam operação desassistida [7]. O que sobreviveu foi a **reorganização** do trabalho (e6.1, e6.2, e6.2.1), não a substituição.
- **"Robô doméstico de uso geral vendido ao consumidor até 2031."** Ver C8.
- **"Modelo de mundo aberto elimina a vantagem dos grandes laboratórios."** Cortado como desejo travestido de previsão. Abertura de pesos é, aqui, estratégia de padronização — quem abre define o padrão (e8.1) —, e o próprio material do fabricante enquadra Cosmos 3 como aberto **e** como centro de uma coalizão [3]. Abertura e concentração não são opostas.
- **"Fim do integrador de automação."** Rebaixado, não cortado: virou e4.1 (perde exclusividade e disputa o dado), que é mais defensável que desaparecimento.

### 12.4 Buscas sem resultado ou bloqueadas

- `iso.org/standard/73934.html` (ISO 10218-2:2025) — **HTTP 403**. Norma paga; classificação apoiada em [14].
- `annualreviews.org` — revisão sobre a lacuna de realidade — **HTTP 403**.
- `pilz.com` — página sobre o Regulamento de Máquinas — **HTTP 403**.
- `technology.org` — matéria sobre implantação real de humanoides em 2026 — **HTTP 403**.
- `gov.br/anac/pt-br/assuntos/drones` — abriu, mas **sem dado numérico** de frota registrada [16].
- EUR-Lex 2023/1230 — abriu **truncado**, sem o artigo de data de aplicação e sem o Anexo I integral; recuperei os considerandos 54 e 55 [13].
- Busca por litígio ou disputa de licenciamento sobre **mundos 3D e ativos de jogo usados como dado de treino de robô** — nada específico encontrado; o que apareceu foi litígio de direito autoral sobre texto, imagem e música. Registro como lacuna: e1.1.1 é, por isso, especulação sem precedente direto, e está em confiança baixa por essa razão.
- Busca por **acidente documentado atribuído a política treinada em simulação** — nada encontrado. É o que mantém W1 como wildcard e não como sinal.

### 12.5 Contrassinais reunidos (inclusive os que não couberam no mapa)

1. Ausência de estado persistente entre arquiteturas e escalas [10].
2. Genie 3 em preview limitado um ano após o anúncio, com interação de minutos [4].
3. Falta de consenso sobre o que é um modelo de mundo [11].
4. Modelos de ação mais capazes restritos a parceiros de acesso antecipado [7].
5. Taxas de sucesso de 32% em tarefas multi-dedo [7] — abaixo do necessário para produção.
6. Base instalada crescendo em um dígito ao ano [1].
7. Maioria das implantações de humanoide sem quantificação de unidades [12].
8. O Regulamento de Máquinas cria incentivo para manter IA **fora** da função de segurança [13], o que limita D2 na fábrica europeia.
9. Dado continua caro, e a única série de custo disponível é de parte interessada [17].
10. A revisão de 2025 da norma central de segurança de robô industrial não trata explicitamente de controle por aprendizado de máquina, segundo a matéria que abri [14] — descompasso entre norma de máquina e norma de IA.

### 12.6 Hipóteses alternativas ao mapa inteiro

**H-alt 1 — "É tudo aumentação de dado."** O modelo de mundo nunca vira mundo; consolida-se como camada de variação sobre simulador clássico. É o cenário provável da §9 e o desfecho mais compatível com [10]. Se isso ocorrer, D1 deveria ter sido classificada como habilitadora, não como raiz.

**H-alt 2 — "O gargalo é o corpo, não o cérebro."** Toda a atenção está em modelo, e talvez o limite real seja atuação, mão, tato e confiabilidade mecânica — domínio de engenharia lenta, sem curva exponencial. Este mapa não cobre isso, porque o recorte do tema é o agente e o mundo em que ele aprende. É uma omissão consciente e possivelmente cara.

**H-alt 3 — "O dado humano resolve e a simulação encolhe."** Se o resultado do HumanScale [9] escalar, o caminho mais barato para dado deixa de ser mundo sintético e passa a ser vídeo humano em volume, e o modelo de mundo fica confinado à **avaliação** — o que mataria D1 e engordaria D3. Este é o cenário que mais mudaria o mapa e o que menos evidência tem, por ora, em qualquer direção.

### 12.7 Observações que não entraram no mapa

- A fronteira entre este tema e o tema 10 (captura do mundo real em 3D) está desaparecendo na prática: real-to-sim [8] é literalmente captura 3D usada como avaliação de agente. Se os dois temas forem apresentados na mesma aula, este é o ponto de costura.
- Um segundo ponto de costura, com o tema 6 (simulação de sociedades): a limitação declarada do Genie 3 em simular **outros agentes** [4] é exatamente onde os dois temas se encontram — e é uma limitação, não uma capacidade.
- A frase que mais me interessou em todo o levantamento não é técnica: *"objetos perdurem e eventos cheguem ao fim quer haja ou não uma câmera olhando, tal como a lua mantém sua órbita quando ninguém a observa"* [10]. É um requisito de engenharia enunciado como problema filosófico, e é a formulação mais clara que encontrei do que separa um mundo de um plano de fundo.
- Nada neste mapa depende de o humanoide funcionar. Isso é deliberado, e é o principal resultado do filtro de disrupção-raiz da skill.
