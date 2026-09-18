---
tema: "Máquinas que veem qualquer coisa: visão de vocabulário aberto"
slug: maquinas-que-veem-qualquer-coisa-visao-de-vocabulario-aberto
autor_login: jgpt
zona_de_interesse: "Percepção e mídia sintética"
data: 2026-09-18
horizonte: 2031
publico: "quem projeta mídia e interação"
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 8
efeitos_ordem_2: 12
efeitos_ordem_3: 12
tecnologias_citadas: [SAM 3, SAM 3.1, DINOv3, Grounding DINO, YOLO-World, DeepSeek-OCR 2, Donut, Qwen-VL, PaliGemma, EdgeTAM, PicoSAM2, Be My Eyes, Ray-Ban Meta, Skyvern, Roboflow, CVAT, Label Studio, supervision]
fontes: 6
confianca: media
experimento: "Um 'campo de busca' apontado para o mundo: protótipo que recebe uma frase nominal e devolve, ao vivo, tudo o que corresponde no vídeo da câmera — e registra quem perguntou o quê."
skill_usada: futurizacao-jgpt
publico_ok: false
---

## 1. Resumo

Durante trinta anos, um sistema de visão só reconhecia aquilo que alguém tinha rotulado antes: a lista de classes era decidida no treino e congelada no produto. Essa restrição caiu. Modelos de segmentação por conceito aceitam uma frase nominal — "guarda-chuva vermelho listrado" — e devolvem todas as ocorrências, em imagem e em vídeo, sem treino específico; modelos de documento leem contrato e nota fiscal como imagem, sem pipeline de OCR; e versões enxutas já rodam em celular e em sensor, não em servidor. O que muda não é a precisão: é **quem especifica o que a máquina procura**. A especificação migra do engenheiro que treina para quem escreve o pedido, em tempo de uso. Este mapa parte de três disrupções-raiz — vocabulário aberto, documento-como-imagem e percepção aberta na borda — e segue os efeitos até 2031. As consequências mais duras não estão na visão computacional: estão na rotulagem como profissão, no formulário como instrumento, na regulação (que fiscaliza finalidade declarada e passa a ter de fiscalizar consulta) e na norma social de estar em público perto de alguém cujos óculos indexam o ambiente.

## 2. O tema

Visão de vocabulário aberto é a capacidade de detectar, segmentar e descrever conceitos visuais especificados em linguagem (ou por exemplo visual) no momento do uso, sem lista fixa de classes e sem treino dedicado. O contraste é com a visão fechada: classificação em N categorias, detecção com rótulos pré-definidos, OCR que transcreve caractere e entrega texto sem estrutura.

Encosta em mídia e interação em três pontos. **Primeiro**, a interface: quando o sistema entende "o objeto que a pessoa está segurando", o desenvolvedor deixa de ter de enumerar antecipadamente os objetos manipuláveis de uma tela ou de uma cena — manipulação direta passa a valer sobre o mundo, não sobre uma lista. **Segundo**, o acervo: vídeo e imagem deixam de ser opacos para busca e viram material consultável por conceito, o que muda arquivo, edição, métrica de audiência e negociação de direitos. **Terceiro**, a captura: a câmera deixa de ser instrumento de registro e vira instrumento de leitura contínua.

Merece um mapa de futuro, e não um estado-da-arte, porque a parte tecnicamente resolvida já está resolvida — o que está em aberto é institucional. Não sabemos que profissão encolhe, que regra é escrita, que norma social se forma quando qualquer imagem é, por padrão, dado estruturado. Um estado-da-arte responderia "quão bom está o modelo". A pergunta que interessa é "o que se reorganiza em volta dele".

## 3. Onde isso está hoje

**O que já existe e funciona.** O SAM 3, da Meta, faz *promptable concept segmentation*: recebe frase nominal curta ou exemplar de imagem e retorna todas as instâncias do conceito, com identidade mantida ao longo do vídeo. A própria Meta reporta cerca de **30 ms para uma imagem com mais de 100 objetos detectados em uma GPU H200**, ganho de **2× em cgF1** sobre sistemas anteriores no benchmark SA-Co, e a atualização SAM 3.1 subindo de **16 para 32 quadros por segundo em uma H100**. E — dado que importa mais que os números — o modelo já está em produto de massa: efeitos no app Edits do Instagram, "View in Room" no Marketplace, Meta AI ([1]). Segundo a leitura do Roboflow, o modelo tem ~840M de parâmetros e ~3,4 GB, é estado da arte em LVIS e SA-Co, e a recomendação prática de uso é **rotular dados para treinar um modelo menor** — isto é, o vendor posiciona a coisa como assistente de anotação com humano no circuito, não como substituto ([4]).

Na camada de baixo, o DINOv3 (agosto de 2025) mostra que aprendizado auto-supervisionado em escala — até 7B de parâmetros, com a técnica de *Gram anchoring* contra a degradação de features densas em treinos longos — supera o estado da arte especializado **sem fine-tuning**, com backbone congelado, incluindo imagem aérea ([2]). É a base que torna barato construir percepção sobre domínios onde ninguém rotulou nada.

Na borda, a coisa saiu do servidor: o EdgeTAM roda segmentação e rastreamento em vídeo a **16 FPS num iPhone 15 Pro Max**, ~22× mais rápido que o SAM 2, e o PicoSAM2 executa **in-sensor** em 14,3 ms com 1,3M de parâmetros. *(Dados de resultado de busca, não abri as páginas — ver §8.)*

Em documento, a leitura sem OCR saiu do laboratório: o DeepSeek-OCR 2, aberto em janeiro de 2026, é um VLM de 3B que marca **91,09% no OmniDocBench v1.5** e comprime a página inteira em poucos "tokens visuais", o que muda a economia de contexto. *(Também de busca — ver §8.)*

Em acessibilidade, a integração Be My Eyes + Ray-Ban Meta entrega descrição de ambiente sob comando de voz, e em 2026 ganhou "respostas detalhadas" durante sessões de IA ao vivo. *(De busca.)*

**O que existe e não funciona (ou funciona mal).** Duas coisas. (a) O reconhecimento facial em escala urbana: no Smart Sampa, em São Paulo, entre 21/11/2024 e 21/05/2025, **23 pessoas foram conduzidas a distritos policiais e liberadas por inconsistência do reconhecimento facial** — de um total de 82 conduções por inconsistências variadas —, número que só veio à luz por nota técnica de Lapin, Instituto Peregum e Rede Liberdade cruzando o relatório de transparência da prefeitura com pedidos de LAI ([5]). Não é visão de vocabulário aberto, mas é o precedente institucional de como esta família de tecnologia é adotada e auditada. (b) A transferência de competência entre gerações: há trabalho argumentando que a expertise em prompt espacial do SAM 2 **não transfere** para o paradigma conceitual do SAM 3 — ruptura de arquitetura, de dado, de treino e até de métrica de avaliação (de IoU geométrico para avaliação semântica aberta) ([3]). Quem investiu em fluxo baseado em ponto-e-caixa não herda vantagem.

**Quem está construindo.** Meta FAIR (SAM, DINO), IDEA Research (Grounding DINO), Google (PaliGemma), Alibaba (Qwen-VL), NAVER (Donut), DeepSeek (OCR), e a camada de ferramenta aberta — Roboflow, `supervision`, Voxel51, CVAT, Label Studio.

**Diagnóstico de hype.** Aplicando a heurística do Hype Cycle só como diagnóstico, e não como previsão: SAM 3 já é **cobertura de adoção**, não de demonstração (está em app de consumo com milhões de usuários). Documento sem OCR está no meio — benchmark forte, adoção corporativa reportada por vendor. Óculos com percepção contínua ainda é majoritariamente cobertura de demonstração. A curva não autoriza estimar prazo; serve só para separar o que já roda do que ainda é vitrine.

## 4. As disrupções-raiz

### 4.1 Vocabulário aberto: o que a máquina procura passa a ser dito, não treinado

**O que rompe.** A restrição removida é a **lista fechada de classes**. Até aqui, toda capacidade nova de percepção exigia um ciclo: definir classe, coletar imagem, rotular, treinar, avaliar, implantar — semanas e um custo por classe. Com segmentação por conceito, a capacidade nova é uma frase digitada por quem usa, em tempo de execução.

**Por que agora e não há cinco anos.** O limiar concreto é duplo: qualidade e latência simultâneas. Em 2021 havia CLIP (alinhamento imagem-texto), mas não máscara de instância por frase em tempo útil; em 2023, Grounding DINO e SAM 1 fizeram a ponte por composição, com dois modelos em cascata. O que muda em 2025-2026 é um modelo único que dobra o cgF1 em benchmark aberto e entrega **>100 objetos em 30 ms** ([1]) — e, crucialmente, uma cabeça de presença que decide se o conceito **existe** na cena antes de tentar localizar, o que ataca o falso positivo em negativo difícil, o erro que impedia uso não supervisionado.

**O que falta.** Frase composicional com raciocínio ("a terceira caixa a partir da esquerda que está aberta") ainda falha; o modelo é bom em sintagma nominal simples ([1]). Falta também custo: 840M de parâmetros não cabem em qualquer lugar ([4]). E falta governança: não há prática estabelecida de registrar **que conceito foi consultado**.

### 4.2 Documento entendido como imagem, sem OCR

**O que rompe.** A restrição removida é a **cadeia OCR → layout → parser → esquema**, que obrigava o documento a ser previsível para ser processável. Um VLM lê a página como imagem e devolve estrutura — inclusive de um documento que ninguém antecipou.

**Por que agora.** O limiar é de custo de contexto e de qualidade: a compressão óptica coloca a página inteira em poucos tokens visuais, e um modelo de 3B (rodável localmente, sem enviar documento para nuvem — o ponto que destrava setor público e jurídico) marca 91% em benchmark de documento. Há cinco anos, o Donut já propunha "OCR-free", mas exigia fine-tuning por domínio; agora o zero-shot é aceitável.

**O que falta.** Auditabilidade. O OCR errava caractere, e caractere errado é visível; o VLM erra **interpretação**, e interpretação errada é plausível. Falta também responsabilidade jurídica definida sobre leitura automática de documento com efeito legal.

### 4.3 Percepção aberta em tempo real na borda e no corpo

**O que rompe.** A restrição removida é **latência, energia e dependência de nuvem**. Percepção aberta deixa de ser chamada de API e vira função contínua de um dispositivo que a pessoa veste.

**Por que agora.** Limiar numérico: 16 FPS de segmentação e rastreamento em iPhone, ~22× o SAM 2; 14,3 ms in-sensor no PicoSAM2; e chipsets de classe wearable anunciados por Qualcomm e MediaTek para 2026 com visão on-device. Abaixo de ~100 ms o rótulo acompanha o olhar; acima, não.

**O que falta.** Bateria e térmica em uso contínuo — hoje a descrição é sob comando de voz, não permanente. E falta a norma social: não existe convenção sobre estar perto de alguém cujo dispositivo lê o ambiente sem parar.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "Vocabulário aberto: o que a máquina procura passa a ser dito, não treinado"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "A especificação do que a máquina deve ver migra do engenheiro que treina para quem escreve o pedido, em tempo de uso."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "O trabalho de rotulagem deixa de produzir massa e passa a arbitrar exceção, casos-limite e auditoria de saída."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "O dataset rotulado perde o papel de ativo defensável de empresa de visão; o ativo passa a ser a ontologia de conceitos e o acervo de casos onde o modelo erra."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "O custo marginal de fazer um sistema procurar mais uma coisa cai a quase zero, e câmeras instaladas para uma finalidade passam a ter escopo aberto por padrão."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "A regulação deixa de conseguir regular por finalidade declarada no momento da instalação e passa a ter de regular a consulta: o registro de qual conceito foi pedido, por quem e quando."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "Todo acervo audiovisual ganha um campo de busca por conceito, sem indexação prévia."
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Arquivo e edição mudam de fluxo: decupagem deixa de ser etapa de trabalho humano e vira consulta feita no momento da montagem."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Direitos de imagem passam a ser negociados por conceito — todas as cenas em que aparece determinado objeto, marca ou pessoa — e não por peça audiovisual."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "A métrica de mídia passa a medir o que de fato apareceu no quadro, e não o que foi declarado no plano de mídia."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "Contratos de publicidade e de brand safety passam a ser escritos sobre presença visual verificada por máquina, com disputa sobre qual modelo faz a verificação."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "O que conta como objeto manipulável numa interface deixa de ser enumerado pelo desenvolvedor e passa a ser qualquer coisa que o usuário consiga descrever ou apontar."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "Aplicativos de câmera oferecem manipulação direta de elementos arbitrários da cena — recortar, seguir, medir, substituir — sem preparo prévio do conteúdo."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "A rotoscopia deixa de ser barreira técnica na edição amadora e a estética de vídeo popular incorpora composição por camadas como recurso corriqueiro."
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "Documento entendido como imagem, sem OCR"
    efeitos:
      - id: e4
        ordem: 1
        efeito: "O formulário deixa de ser o instrumento que garante captura estruturada: qualquer papel, tela ou foto vira dado estruturado na entrada."
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "O trabalho de digitação e conferência encolhe para tratamento de exceção e assunção de responsabilidade jurídica pelo que foi lido."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "O erro muda de natureza e fica mais difícil de auditar: some o caractere trocado, visível, e entra a interpretação equivocada, plausível e silenciosa."
                sinal: medio
                prazo: 2030
                confianca: media
          - id: e4.2
            ordem: 2
            efeito: "Sistemas internos passam a aceitar entrada em qualquer formato, e a pressão por padronização documental perde urgência."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "Formatos abertos e estruturados perdem apoio político justamente por terem virado dispensáveis, e a interoperabilidade regride para dependência do modelo que lê."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "A imagem passa a ser o portador barato de contexto para modelos de linguagem, e não mais a forma cara de guardar informação."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "Interfaces passam a enviar a tela inteira ao modelo em vez de extrair e enviar texto, porque sai mais barato e preserva o layout."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "O registro do que o sistema viu passa a ser um acervo de imagens de tela, e a política de retenção e privacidade passa a lidar com captura visual contínua em vez de log textual."
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "Percepção aberta em tempo real na borda e no corpo"
    efeitos:
      - id: e6
        ordem: 1
        efeito: "Descrição contínua do ambiente vira função do dispositivo vestível, e não aplicativo que se abre para uma consulta pontual."
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "Pessoas cegas e com baixa visão deixam de depender de um terceiro humano na maior parte das tarefas cotidianas de leitura de ambiente."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "O custo social percebido da inacessibilidade cai e a exigência de acessibilidade estrutural em espaços e interfaces afrouxa, transferindo o ônus para o dispositivo da própria pessoa."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "A convenção de estar em público muda: passa a ser razoável presumir que alguém por perto está indexando continuamente o ambiente."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "Surgem espaços declarados sem leitura de máquina, com sinalização própria, repetindo o percurso histórico da proibição de fotografar."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: "Inspeção, contagem e triagem visual passam a ser configuradas por frase, sem projeto de aprendizado de máquina e sem integrador."
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "Operações pequenas — agricultura familiar, oficina, comércio de bairro — adotam visão computacional sem contratar ninguém para treinar modelo."
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "O mercado de integração de visão industrial se reorganiza em torno de garantia de desempenho e responsabilidade por falha, e não mais em torno de construir o modelo."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: "Agentes que operam interfaces olhando a tela tornam automatizável qualquer software, com ou sem API."
        sinal: medio
        prazo: 2027
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "A API deixa de ser a fronteira do que é integrável, e a fronteira real passa a ser contratual e antibot."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: "Interfaces passam a ser projetadas com intenção explícita sobre legibilidade por máquina, e aparece design adversarial feito para confundir percepção automática sem prejudicar a humana."
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

**O que o bloco não diz sozinho.** Três coisas.

A primeira é que as três raízes **não são independentes** — elas se somam no mesmo dispositivo. Óculos que segmenta por conceito (4.3 + 4.1) e lê o cardápio como documento (4.2) é um só produto, e os efeitos e6.2 e e5.1.1 se reforçam: a norma social muda mais rápido se o registro do que foi visto for guardado como imagem.

A segunda é que há uma **assimetria de velocidade** entre os ramos. Os efeitos de vocabulário aberto sobre trabalho técnico (e1.1, e7) andam na velocidade de quem compra software; os efeitos sobre norma e direito (e1.2.1, e6.2) andam na velocidade de legislatura. Na prática, isso significa alguns anos de vale, em que a capacidade existe e a regra ainda é a antiga — e é nesse vale que se define o precedente. O Smart Sampa mostra como esse vale costuma ser ocupado no Brasil: primeiro se instala, depois se descobre o número por LAI ([5]).

A terceira é que **e4.2/e4.2.1 é o único ramo francamente contraintuitivo** do mapa, e vale sinalizar: ele diz que tornar o documento legível por máquina pode enfraquecer, não fortalecer, o dado estruturado aberto. É um efeito perverso, e é o que mais me interessaria falsear.

**Nota sobre o Brasil.** Dois recortes locais atravessam o mapa. (a) O marco legal — o PL 2338/2023 foi aprovado no Senado em dezembro de 2024 e seguia em tramitação na Câmara ao longo de 2026, sem votação final; enquanto isso a adoção corre solta, e o vale descrito acima é aqui mais largo que na Europa. (b) O precedente de vigilância: Smart Sampa em São Paulo, com as 23 conduções indevidas documentadas por LAI ([5]). Se a linha que separa o legítimo do abusivo, no caso do rosto, levou uma nota técnica de três organizações para ficar visível, a linha equivalente para vocabulário aberto — onde não há lista de classes para auditar — será mais difícil de traçar.

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — a avaliação muda antes do produto.** A ruptura entre SAM 2 e SAM 3 inclui a métrica: sai o IoU geométrico, entra avaliação semântica aberta ([3]). Quando a régua muda, quem media bem pelo critério antigo perde a evidência de que é bom. Isso tende a produzir um período de comparações incomparáveis entre fornecedores — e comprador sem régua compra narrativa.

**Sinal fraco 2 — o vendor freando o próprio discurso.** A recomendação prática do Roboflow para o SAM 3 é usá-lo para **rotular dados e treinar um modelo menor**, com humano no circuito ([4]). Quem vende a ferramenta não está afirmando o fim da anotação. Isso é evidência contra a versão forte do efeito e1.1 — e está aqui, não na §7, porque é sinal de para onde o mercado se ajeita: da produção de rótulo para a verificação de rótulo.

**Sinal fraco 3 — percepção de reação, não de objeto.** A extensão `ORTHOS`, trazida pela turma, aplica modelo visual à *resposta emocional* a manchetes. É a fronteira entre ver e inferir estado interno — e é justamente a categoria que a regulação europeia trata com mais severidade (reconhecimento de emoção aparece explicitamente entre os usos de alto risco ([6])). Se essa fronteira for atravessada dentro de dispositivo de consumo, o mapa inteiro fica mais rápido e mais litigioso.

**Candidata emergente rejeitada como raiz — percepção corporificada em robô.** Vizinha do tema 9. Rejeitada por dois motivos: não passa no teste "por que agora e não há cinco anos" com limiar concreto de custo ou latência no lado da percepção (o gargalo está na atuação e no dado de manipulação, não em ver), e o desdobramento pertence a outro tema da disciplina.

**Candidata emergente rejeitada — reconstrução 3D aberta.** Tema 10. Mesma razão de fronteira.

**Wildcard (baixa probabilidade, alto impacto): a plataforma decide o vocabulário.** Se a percepção aberta em óculos chegar a escala de consumo dentro de um dispositivo controlado por uma plataforma, a lista de conceitos que o dispositivo **se recusa a procurar** — rostos, marcas concorrentes, placas, símbolos religiosos, corpos — vira uma política editorial privada sobre a percepção de milhões de pessoas, escrita sem qualquer processo público. Não é censura de conteúdo: é censura de *olhar*. Prazo plausível 2029-2031, probabilidade baixa, impacto alto. O sinal precoce é banal e já observável: a primeira lista pública de prompts recusados por um produto de visão.

**Wildcard menor:** vazamento inverso — um modelo aberto de vocabulário aberto suficientemente bom rodando local derruba o custo de vigilância privada a ponto de condomínios, empregadores e escolas montarem reconhecimento de conceito sem fornecedor e sem contrato, fora de qualquer cadeia auditável.

## 7. Contra o próprio mapa

**Extrapolação linear.** Os efeitos e2 e e2.1 (busca por conceito em acervo, decupagem virando consulta) são, em boa medida, "o presente, só que mais": busca semântica em vídeo já existe há anos em plataforma grande, e o que muda é qualidade e granularidade, não a natureza do gesto. Não há descontinuidade real ali — por isso `e2` fica em `confianca: media` e não `alta`, apesar de `sinal: forte`. Da mesma forma, e8 (agentes operando interface pela imagem) descreve algo que já está em produto desde 2024-2025; ele entrou no mapa porque o efeito de segunda ordem (a fronteira migrar de API para contrato) ainda não aconteceu, mas o efeito de primeira ordem é continuidade, não ruptura.

**Velocidade de adoção nunca vista.** O ramo mais exposto é e7 → e7.1: pequenas operações adotando visão sem integrador até 2030. O caso comparável que contradiz o prazo é o próprio histórico da visão industrial — leitura de código de barras e inspeção por câmera são tecnologias de décadas, baratas há muito tempo, e ainda assim a difusão em operação pequena foi lenta, não por custo de modelo, mas por instalação, iluminação, manutenção e ausência de quem opere. O gargalo nunca foi o algoritmo. Por isso e7.1 está em `confianca: baixa` — foi rebaixado nesta etapa. O mesmo argumento enfraquece e7.1.1.

Segundo caso: e6.1 pressupõe substituição de assistência humana em "boa parte das tarefas" até 2029. A revisão de usuários com baixa visão e a própria evolução do produto mostram adoção real, mas a função ainda é sob comando de voz e o dispositivo ainda depende de bateria e de conexão. Mantido em `media`, não em `alta`.

**Se a disrupção não vingar.**

*Se 4.1 (vocabulário aberto) não vingar* — cenário concreto: a qualidade em domínio específico continua abaixo do aceitável para uso não supervisionado, e o zero-shot vira sempre um primeiro passo que precisa de fine-tuning. Nesse caso **e1.1 se inverte**: a rotulagem não encolhe, muda de forma (rotula-se menos e melhor, para ajustar modelo grande), e e1.1.1 cai inteiro — o dataset continua sendo ativo. e1.2 sobrevive parcialmente, porque o escopo aberto por padrão depende só de custo marginal, não de perfeição. E a subárvore de e2/e3 fica: busca por conceito tolera erro, montagem não é decisão de alto risco.

*Se 4.2 (documento sem OCR) não vingar* — o ponto de falha mais provável não é qualidade, é responsabilidade: basta uma decisão judicial ou uma regra setorial exigindo rastreabilidade caractere-a-caractere para que a cadeia OCR volte como requisito de conformidade, mesmo tecnicamente inferior. Aí e4.1, e4.2 e e4.2.1 caem, e o VLM vira camada de conferência sobre o OCR, não substituto. e5 sobrevive por outro caminho (contexto barato não depende de documento).

*Se 4.3 (borda/corpo) não vingar* — o ponto de falha é térmico e de bateria, não de modelo. Se percepção contínua não couber no orçamento energético de um óculos até 2029, tudo vira consulta pontual sob comando, e e6.2, e6.2.1 e e6.1.1 caem: a norma social não muda quando o dispositivo só olha quando mandado. Sobra e6.1, em versão mais fraca. Esse é o ramo mais frágil do mapa inteiro.

**Viés do autor.** A skill manda perguntar ao autor se ele escolheu o tema por gostar dele e se isso infla o otimismo. **Não houve autor disponível para responder nesta rodada** — a execução foi automática, com viés declarado neutro e sem disrupção suspeita informada. Registro isso como lacuna, e não como resposta. O que consigo fazer no lugar é declarar o viés observável do próprio processo: as fontes de maior peso deste mapa são de quem constrói a tecnologia (Meta, Roboflow), e a literatura crítica lida é fina — uma única fonte brasileira de sociedade civil, obtida por LAI. Isso desloca o mapa para o lado otimista por composição de evidência, não por convicção. O contrapeso está em §7 e nos efeitos perversos e6.1.1 e e4.2.1, deliberadamente incluídos.

## 8. O que a máquina errou

**O erro específico, e como apareceu.** Ao montar a §3, escrevi na primeira passada que o SAM 3 "elimina a anotação manual" e que ferramentas como CVAT e Label Studio tenderiam a ser dispensadas — apoiando-me no enunciado da própria disciplina, que diz que o vocabulário aberto "tende a dispensar" as ferramentas de anotação. Ao abrir a análise do Roboflow, o texto recomenda exatamente o oposto: usar o SAM 3 **para rotular dados e treinar um modelo menor**, mantendo humano no circuito ([4]). E a pesquisa de mercado que puxei aponta o setor de anotação crescendo, não encolhendo. A afirmação forte era plausível, bem escrita e falsa: confundi "a anotação ficou barata" com "a anotação acabou". O efeito e1.1 foi reescrito por causa disso — de "a rotulagem desaparece" para "a rotulagem migra de produzir massa para arbitrar exceção" — e e1.1.1 nasceu já com `confianca: baixa`.

**Segundo erro, de data.** Assumi que o SAM 3 e o SAM 3.1 eram o mesmo anúncio. A página da Meta que li é de 27/03/2026 e trata do **SAM 3.1**; o SAM 3 é anterior ([1]). Os números de 30 ms e de 2× em cgF1 vêm dessa página e valem para a linhagem; o 16→32 FPS é especificamente do 3.1. Corrigido no texto.

**Fontes citadas sem verificação de fato — declaro explicitamente.** Os seguintes dados aparecem no documento a partir de **resultado de busca, sem que eu tenha aberto a página**, e precisam de conferência antes de qualquer uso: (a) EdgeTAM a 16 FPS em iPhone 15 Pro Max e 22× sobre o SAM 2; (b) PicoSAM2 com 1,3M de parâmetros e 14,3 ms in-sensor; (c) DeepSeek-OCR 2 com 91,09% em OmniDocBench v1.5, 3B de parâmetros, aberto em 27/01/2026; (d) integração Be My Eyes + Ray-Ban Meta e o recurso de "respostas detalhadas" em 2026; (e) status de tramitação do PL 2338/2023 na Câmara em 2026; (f) chipsets de classe wearable de Qualcomm e MediaTek para 2026. Nenhum deles entra na lista numerada da §11. São exatamente o material do DUVIDAS.md.

**Números redondos demais.** "Custo marginal cai a quase zero" (e1.2) é retórica, não medida — não tenho número de custo por conceito adicional em produção. Fica registrado como alegação sem suporte quantitativo.

## 9. Três cenários para 2031

**Provável.** Em 2031, vocabulário aberto tinha virado piso, e ninguém mais chamava aquilo de tecnologia de visão — era só "a câmera". Quase todo software que lidava com imagem ganhou um campo onde se descreve o que procurar, e a maior parte das pessoas usava isso sem saber que estava usando. A rotulagem não acabou: encolheu, encareceu por hora e mudou de nome, virou verificação — quem sobrou não desenhava caixa, decidia se o modelo tinha razão e assinava embaixo. O documento sem OCR ganhou o mercado corporativo, mas em toda operação com efeito legal permaneceu uma camada humana de conferência, mais por seguro e responsabilidade do que por qualidade. Óculos com descrição contínua existiam e funcionavam, sem ter virado item universal: eram transformadores para quem não enxerga e acessório para o resto. E a regulação continuou correndo atrás: fiscalizava-se o sistema instalado, não a pergunta feita a ele, e o registro de consultas — que teria sido a peça-chave — seguia voluntário quase em todo lugar.

**Desejável.** Em 2031, a pergunta virou o objeto de governança. Consolidou-se a ideia simples de que um sistema de percepção aberta precisa registrar **qual conceito foi consultado, por quem e quando**, e que esse registro é auditável por fora — o equivalente, para a visão, do que a nota fiscal foi para a transação. Isso não brotou sozinho: veio de três coisas feitas por gente concreta. Primeiro, organizações de sociedade civil repetiram, para vocabulário aberto, o trabalho que Lapin, Peregum e Rede Liberdade fizeram para o reconhecimento facial em São Paulo — pedir por LAI o que não foi publicado e obrigar o número a existir. Segundo, o marco legal brasileiro foi aprovado e tratou percepção por conceito como categoria própria, e não como subcaso de biometria. Terceiro, quem projeta produto passou a tratar log de consulta como requisito de arquitetura, do mesmo jeito que passou a tratar criptografia em trânsito. O ganho foi assimétrico e justo: acessibilidade, inspeção e busca em acervo ficaram melhores sem que o escopo aberto virasse vigilância silenciosa por inércia.

**Indesejável.** Em 2031, a câmera instalada para contar caixas contava também pessoas, e não havia diferença técnica entre as duas coisas — só uma frase digitada, que ninguém guardava. Como a capacidade era genérica, a autorização também virou genérica: aprovava-se o sistema, não o uso, e o uso mudava toda semana sem passar por ninguém. O erro migrou para onde é mais difícil de ver — não mais o rosto trocado, que ao menos deixava rastro em delegacia, mas a categoria atribuída em silêncio a uma pessoa na calçada, que ela nunca saberia ter recebido. A acessibilidade foi usada como argumento para não consertar o espaço físico: quem precisa que descrevam, que compre óculos. E o documento, agora legível por máquina em qualquer formato, deixou de ser padronizado — cada instituição lia do seu jeito, com o seu modelo, e a interoperabilidade que levou vinte anos para ser conquistada se dissolveu numa camada de inferência que ninguém audita. **O sinal precoce disso já estava visível em 2026:** a autorização por finalidade declarada no momento da instalação, sem nenhum registro do que foi efetivamente perguntado depois — e a normalidade com que um sistema de câmeras urbano publicou um relatório de transparência em que os números que importavam só apareceram quando terceiros pediram por LAI ([5]).

## 10. O experimento

**O que é.** Um "campo de busca apontado para o mundo": uma página web que abre a câmera do celular, recebe uma frase nominal digitada ("mochila", "pessoa de jaleco", "garrafa vazia", "crachá") e desenha ao vivo a máscara de tudo o que corresponde — com um segundo painel, sempre visível, que mostra o **log de consultas**: cada frase perguntada, por quem, a que horas, e por quanto tempo ficou ativa. O log não é enfeite: é o objeto do experimento. Construível hoje com SAM 3 (ou Grounding DINO + SAM 2, se o peso for proibitivo) atrás de um endpoint, e EdgeTAM/PicoSAM2 na variante local para comparar latência.

**Que pergunta sobre o futuro ele responde.** Se o que a máquina vê passa a ser definido por uma frase digitada em tempo de uso, o registro dessa frase é suficiente para governar o sistema? Concretamente: olhando só o log, um terceiro consegue dizer se aquele dispositivo estava contando estoque ou vigiando gente? É o teste direto de e1.2.1 — e, se a resposta for não, o cenário Indesejável fica muito mais provável, porque significa que nem a governança que estou propondo como desejável funcionaria.

**Por que não dá com tecnologia madura.** Com detecção de classes fixas, o experimento é vazio: a lista de conceitos é o próprio sistema, está no binário, e qualquer um a audita lendo a documentação — não há "consulta" a registrar. O experimento só existe porque o vocabulário é aberto. É o que separa esta tecnologia da anterior, transformado em demonstração.

**O que a turma faria em sala.** Três rodadas, 40 minutos. (1) Cada pessoa digita cinco frases que ache úteis e cinco que ache abusivas, com a câmera apontada para a sala. (2) Os logs são trocados entre duplas, sem as pessoas: cada dupla tenta classificar o log alheio em "uso legítimo" ou "vigilância" só pela lista de frases. (3) Conta-se o acerto. A aposta é que o acerto é baixo, porque "pessoa de camisa azul" serve para inventário e para perseguição, e a frase não distingue. Se a turma acertar muito, minha hipótese cai — e isso é o que quero.

**O que mudaria a opinião do autor.** Duas evidências. Primeira: se o acerto da rodada (3) for alto, e1.2.1 está errado no sentido oposto ao que escrevi — o log basta, e a governança é mais fácil do que o mapa supõe. Segunda: se a variante local (EdgeTAM/PicoSAM2 no aparelho) não conseguir latência utilizável para rotulagem contínua no telefone da turma, a disrupção 4.3 não está onde eu disse que está, e toda a subárvore e6 precisa recuar de prazo — inclusive a parte de norma social, que é a que mais me preocupa.

## 11. Fontes

Somente o que foi de fato aberto e lido nesta sessão. O material obtido apenas por resultado de busca está listado na §8 e no anexo, e não aqui.

1. **Meta AI — "SAM 3.1: Faster and More Accessible Real-Time Video Detection and Tracking"** — `https://ai.meta.com/blog/segment-anything-model-3/` — sustenta os números de latência (30 ms para >100 objetos em H200), o ganho de 2× em cgF1 no SA-Co, o salto de 16 para 32 FPS em H100, a natureza do prompt (sintagma nominal aberto e exemplar de imagem), a limitação com frases que exigem raciocínio, e a integração em produto (Edits/Instagram, Marketplace, Meta AI). *Confiabilidade:* fonte primária do fabricante — autoritativa sobre o que o modelo faz, interessada sobre o quão bem faz. Números de benchmark próprio devem ser lidos como alegação do vendor.
2. **Oquab et al. (Meta AI) — "DINOv3", arXiv:2508.10104 (13/08/2025)** — `https://arxiv.org/abs/2508.10104` — sustenta a afirmação de que backbone auto-supervisionado congelado supera o estado da arte especializado sem fine-tuning, a escala (até 7B), o *Gram anchoring* contra degradação de features densas e a suíte de modelos para diferentes orçamentos. *Confiabilidade:* preprint de laboratório industrial, não revisado por pares; li o resumo e as alegações centrais, não a avaliação completa.
3. **"The SAM2-to-SAM3 Gap in the Segment Anything Model Family", arXiv:2512.06032** — `https://arxiv.org/abs/2512.06032` — sustenta a ruptura entre paradigmas (prompt espacial × conceito multimodal) em arquitetura, dado, treino e **métrica de avaliação**, usada na §6. *Confiabilidade:* preprint analítico, sem resultados numéricos próprios no resumo — é argumento estrutural, não medição. Usado só como argumento.
4. **Roboflow — "SAM 3: Segment Anything with Concepts"** — `https://blog.roboflow.com/what-is-sam3/` — sustenta o tamanho do modelo (~840M parâmetros, ~3,4 GB), o desempenho em LVIS/SA-Co e Roboflow100-VL, a licença customizada da Meta, e — o item que mudou o mapa — a recomendação de usar o SAM 3 **para rotular dados e treinar um modelo menor**, com humano no circuito. *Confiabilidade:* fornecedor de ferramentas de visão, interessado em que a anotação continue existindo; justamente por isso, o fato de recomendar humano no circuito é evidência contra o próprio interesse do argumento de que a anotação acabou... e a favor do interesse comercial dele. Ler com essa dupla ressalva.
5. **Brasil de Fato — "Smart Sampa: mais de 80 pessoas foram levadas para delegacias por inconsistência do reconhecimento facial" (04/02/2026)** — `https://www.brasildefato.com.br/2026/02/04/smart-sampa-mais-de-80-pessoas-foram-levadas-para-delegacias-por-inconsistencia-do-reconhecimento-facial/` — sustenta os números do recorte brasileiro: 23 pessoas conduzidas e liberadas por inconsistência de reconhecimento facial entre 21/11/2024 e 21/05/2025, num total de 82 conduções por inconsistências variadas; origem dos dados em relatório de transparência da prefeitura somado a pedidos de LAI; autoria da nota técnica (Lapin, Instituto Peregum e Rede Liberdade). *Confiabilidade:* veículo com posição editorial declarada; os números, porém, são atribuídos a documento oficial e a nota técnica nomeada, verificáveis na origem — o que não fiz nesta sessão.
6. **Comissão Europeia — "AI Act / Regulatory framework for AI"** — `https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai` — sustenta a proibição de identificação biométrica remota em tempo real para fins de aplicação da lei em espaço público (vigente desde fevereiro de 2025), a classificação de identificação biométrica remota, **reconhecimento de emoção** e categorização biométrica como alto risco, e o calendário escalonado, com dezembro de 2027 para o bloco de biometria. *Confiabilidade:* fonte oficial do regulador — autoritativa. Atenção: o calendário mudou com o Digital Omnibus, e datas de segunda mão sobre "agosto de 2026" circulando em blogs não conferem com o que a página oficial diz.

## 12. Anexo — o levantamento bruto

### 12.1 Condições desta rodada

Execução automática, sem usuário disponível. A Etapa 0 (entrevista bloqueante) **não foi conduzida como diálogo**: as respostas vieram pré-fornecidas no despacho da rodada. Registro isso como limitação do documento, conforme a própria skill manda registrar quando uma etapa não acontece como especificada. Respostas usadas, verbatim do despacho:

- Tema: "Máquinas que veem qualquer coisa: visão de vocabulário aberto" (tema 11 de 19; família "Percepção e mídia sintética").
- Horizonte: 2031. Público: quem projeta mídia e interação. Recorte: global, com nota sobre o Brasil.
- Descartado de início: o que já é comum em produto de massa (régua da disciplina). Nenhuma outra exclusão.
- Disrupção suspeita: nenhuma — descobrir. Viés: neutro. Ideias óbvias a excluir: as que servem para qualquer tema.
- O que faria mudar de ideia: evidência de que a adoção já passou da maioria inicial (Rogers), ou de que a tecnologia não rompe nada (só melhora o que existe).
- Profundidade: três ordens. Modo: a partir de uma inovação/tema, não de um setor.
- Zona de interesse: "Percepção e mídia sintética". Autor: jgpt. Skill: futurizacao-jgpt.

Consequência direta: a pergunta obrigatória da Etapa 4 item 4 (viés do autor) **ficou sem resposta**, e está declarada como lacuna na §7, não fabricada.

Tensão entre duas instruções, e como foi resolvida: o despacho diz "descartado de início: o que já é comum em produto de massa", e a fonte [1] mostra o SAM 3 já embarcado em Instagram Edits e Marketplace — ou seja, a disrupção-raiz 4.1 **já é** produto de massa por um critério estrito. Resolvi mantendo-a como raiz, pelo seguinte argumento: o que está em produto de massa é o *recurso* (um efeito de câmera), não a *capacidade generalizada de especificar percepção por linguagem*, que é o que rompe. Se a régua da disciplina for aplicada ao pé da letra, este mapa perde sua primeira raiz e sobram duas. Fica registrado para arbitragem do professor.

### 12.2 Buscas realizadas

1. `SAM 3 Segment Anything with Concepts Meta open vocabulary segmentation` — 9 resultados; abertos: ai.meta.com (fonte 1), blog.roboflow.com (fonte 4), arXiv 2512.06032 (fonte 3). Não abertos: docs.ultralytics.com/models/sam-3; voxel51.com; pyimagesearch.com (26/01/2026); vizuara.substack.com; arXiv 2511.16719 (o paper do SAM 3 — **a fonte primária que eu deveria ter aberto e não abri**); arXiv 2605.20385 (ConceptSeg-R1, meta-RL para segmentação de conceito — pista não seguida).
2. `DINOv3 Meta vision foundation model release 2025` — aberto: arXiv 2508.10104 (fonte 2). Não abertos: ai.meta.com/research/dinov3, blog.roboflow.com/train-dinov3, lightly.ai, opencv.org, aipapersacademy.
3. `OCR-free document understanding VLM 2026 DeepSeek-OCR dots.ocr` — **nenhuma página aberta**. Dados de busca: DeepSeek-OCR 2 aberto em 27/01/2026, 3B de parâmetros, 91,09% em OmniDocBench v1.5 (+3,73% sobre o antecessor), encoder trocado do CLIP para Qwen2-0.5B, "Visual Causal Flow", operação local sem transferência para nuvem. Fontes candidatas não abertas: github.com/deepseek-ai/DeepSeek-OCR, huggingface.co/deepseek-ai/DeepSeek-OCR, marktechpost (30/01/2026), eweek. **Pendência prioritária do DUVIDAS.md** — é a base factual da disrupção 4.2 inteira.
4. `EU AI Act biometric ban timeline August 2026` — aberto: página oficial da Comissão (fonte 6). Achado colateral relevante: blogs afirmando "agosto de 2026" para obrigações de alto risco em biometria **divergem** da página oficial, que dá dezembro de 2027 para o bloco de biometria após o Digital Omnibus. Exemplo de por que a regra "só conta fonte aberta" existe.
5. `Brasil PL 2338 marco legal IA 2026 reconhecimento facial Câmara` — **nenhuma aberta**. De busca: aprovado por unanimidade no plenário do Senado em 10/12/2024; em tramitação na Câmara ao longo de 2026; votação empurrada, sem conclusão; abordagem baseada em risco. Fontes candidatas: senado.leg.br (matéria 157233), camara.leg.br, desinformante.com.br. **Pendência: conferir direto no site do Senado/Câmara** — é a única fonte que não depende de intermediário.
6. `Meta Ray-Ban Display 2026 acessibilidade Be My Eyes` — **nenhuma aberta**. De busca: integração Be My Eyes desde 2024; "Hey Meta, Be My Eyes"; chamada para pessoa de confiança; atendentes treinados de Tesco, Sony, Amtrak, Hilton; "respostas detalhadas" em sessões de IA ao vivo em 2026. Candidatas: about.fb.com (05/2026), meta.com/ai-glasses/accessibility, afb.org (review independente — **a mais valiosa das três, por ser de fora**).
7. `zero-shot auto-labeling substituindo anotação manual 2026` — **nenhuma aberta**. De busca: Voxel51 alegando redução de custo de anotação "em 100.000×"; Towards Data Science, "o gargalo da anotação está finalmente quebrando"; e, em sentido oposto, projeções de mercado de rotulagem crescendo a ~29% ao ano até 2033. Contradição frontal entre as duas leituras, **não resolvida** — e foi ela que derrubou minha primeira versão de e1.1 (§8). Candidatas: twimlai (podcast com Jason Corso), voxel51.com, arXiv 2506.07850 (SAM2Auto), arXiv 2411.11285.
8. `on-device open-vocabulary segmentation smart glasses EdgeTAM PicoSAM2` — **nenhuma aberta**. De busca: EdgeTAM em CVPR 2025, 16 FPS em iPhone 15 Pro Max, 22× sobre SAM 2, <100 ms na borda, disponível no Qualcomm AI Hub; PicoSAM2 com 1,3M de parâmetros, 336M MACs, 14,3 ms quantizado no IMX500; chipsets wearable de Qualcomm e MediaTek anunciados para 2026. Candidatas: arXiv 2506.18807, arXiv 2312.06660 (EdgeSAM), aihub.qualcomm.com.
9. `agentes visuais GUI computer use 2026 Skyvern` — **nenhuma aberta**. De busca: Skyvern usa screenshot + VLM em vez de DOM, ~22,7k estrelas no GitHub em 07/2026, 30 mil usuários (alegação do próprio vendor); Browser Use com 89% no WebVoyager; leitura recorrente de que abordagem visual é mais robusta a mudança de UI e mais cara que DOM. Sustenta e8/e8.1 de forma **apenas indiciária**.

### 12.3 Efeitos gerados e cortados

- **"Câmeras de trânsito passam a multar comportamento descrito em texto"** — cortado da roda: é aplicação, não efeito estrutural; e cai como caso particular de e1.2.
- **"O CAPTCHA morre"** — cortado por ser extrapolação linear (já estava morrendo antes disto) e por servir a qualquer tema de IA, que o despacho manda excluir explicitamente.
- **"Museus e galerias tornam-se navegáveis por conceito"** — cortado por ser instância de e2.1, sem mecanismo próprio.
- **4ª ordem que ficou puxando fio, e não foi gerada** (teto de três níveis do formato): a partir de e1.2.1, "o registro de consulta vira ativo comercial e é vendido/vazado, revelando o que empresas procuram no espaço público" — o mecanismo é rastreável e o efeito é forte. Vai aqui, e não na roda, por causa do teto. É a melhor candidata a virar raiz de um mapa próprio.
- A partir de e4.2.1, na mesma situação: "arquivo público e ciência de dados perdem série histórica comparável, porque cada instituição passa a produzir estrutura por inferência, com modelos diferentes e versões diferentes".

### 12.4 O que o enunciado da disciplina trouxe e este mapa não usou

`LAVIS`, `PaddleOCR`, `EasyOCR`, `LaTeX-OCR`, `insightface`, `face-alignment`, `SlowFast`, `rf-detr`, `YOLOX`, `react-visual-annotator`, `ml-classifier`, `llama.cpp-ts`. Ficaram de fora porque nenhum deles altera o argumento — são instâncias da mesma capacidade ou ferramentas maduras. `ORTHOS` foi usado (§6). `donut` e `cvat`/`label-studio` entraram por contraste.

### 12.5 Verificação de formato

```bash
grep -c "^## " /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/jgpt/11-maquinas-que-veem-qualquer-coisa-visao-de-vocabulario-aberto/tendencia-maquinas-que-veem-qualquer-coisa-visao-de-vocabulario-aberto.md
```

Resultado esperado: `12`. Contagens declaradas no frontmatter: 3 disrupções-raiz, 8 efeitos de 1ª ordem (e1–e8), 12 de 2ª, 12 de 3ª. Todo efeito com `sinal`, `prazo` e `confianca` preenchidos; nenhum nulo; nenhum efeito escrito como pergunta; profundidade exata de três níveis.
