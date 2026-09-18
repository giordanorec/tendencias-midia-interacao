---
tema: "Máquinas que veem qualquer coisa: visão de vocabulário aberto"
slug: maquinas-que-veem-qualquer-coisa-visao-de-vocabulario-aberto
autor_login: mjbo
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-17
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global, com nota sobre o Brasil
disrupcoes_raiz: 4
efeitos_ordem_1: 6
efeitos_ordem_2: 14
efeitos_ordem_3: 17
tecnologias_citadas: [SAM 3, SAM 3.1, SA-Co, Promptable Concept Segmentation, DINOv3, Grounding DINO, YOLO-World, NanoOWL, NanoSAM, EfficientViT-SAM, Qwen3-VL, Florence-2, CLIP, Donut, DeepSeek-OCR, PaddleOCR-VL, dots.ocr, GOT-OCR 2.0, Granite-Docling, RF-DETR, CVAT, Label Studio, Jetson AGX Orin, GAP9, Prophesee GENX320, Meta Ray-Ban Display, Be My Eyes, Smart Sampa, ORTHOS]
fontes: 13
confianca: media
experimento: A câmera que só vê o que se pede — banca de prompts ao vivo
skill_usada: futurizacao-mjbo
publico_ok: false
---

## 1. Resumo

Por décadas, um sistema de visão só reconhecia o que tinha sido treinado para reconhecer, e
cada classe nova custava um ciclo inteiro de dataset, anotação e treino. Isso acabou: o SAM 3
segmenta **todas** as instâncias de um conceito nomeado em texto livre, atingindo 65,0 CGF1 no
SA-Co/Gold — cerca de 88% do limite inferior humano estimado — e o DINOv3 entrega tarefas
densas em domínios que nunca tiveram rótulo. Em paralelo, modelos de documento sem OCR
dissolvem a cadeia binarização→layout→caractere num único passe. Este mapa deriva, até 2031,
quatro rupturas: percepção por conceito, documento sem OCR, backbone sem rótulo e — com
ressalva explícita — percepção aberta em tempo real na borda. O efeito mais estrutural não é a
vigilância ubíqua: é que **o que uma câmera faz deixa de estar na sua especificação técnica e
passa a estar no prompt em vigor naquele dia**, o que quebra ao mesmo tempo a auditoria de
produto e a moldura regulatória, escrita para biometria e não para descrição em linguagem. O
risco central deste mapa é o oposto do alarme fácil: a evidência de mercado levantada aqui
contradiz a tese de que o trabalho de dados desaparece.

## 2. O tema

Visão de vocabulário aberto é a capacidade de um sistema de visão aceitar como entrada uma
**descrição em linguagem** — "a mochila preta", "o umbrela listrado vermelho", "pessoa
carregando algo" — e devolver a localização, o recorte e o rastreamento de tudo aquilo que
corresponde, sem que nenhuma dessas categorias existisse no treino como rótulo. O termo
técnico que a Meta adota para isso é *Promptable Concept Segmentation*: prompts de texto ou
de exemplo visual no lugar de um conjunto fixo de classes.

A distinção que organiza o tema é essa e não outra: **a máquina passou a ver o que se pede, não
o que se ensinou.** Ao lado dela, dois ramos que compartilham o mesmo mecanismo — a fusão
visão-linguagem: compreender documento como imagem, sem cadeia de OCR; e aprender
representação visual densa sem rótulo nenhum, o que dá percepção a domínios que nunca tiveram
um ImageNet próprio.

Onde isso encosta em mídia e interação, para quem projeta: a câmera deixa de ser um sensor com
função fixa e vira uma **superfície de consulta**. Isso muda três coisas de projeto de uma vez.
Primeiro, a unidade de trabalho: em vez de "treinar um detector de X", escreve-se "X" — o que
põe percepção nas mãos de quem desenha interação, e não só de quem faz ML. Segundo, a
interface: descrever passa a ser modo de busca em acervo de imagem e vídeo, e a metadata manual
perde função. Terceiro, e mais difícil: o comportamento do sistema deixa de ser inspecionável
pela sua especificação. Duas câmeras idênticas podem fazer coisas completamente diferentes
porque alguém digitou frases diferentes.

Isto merece mapa de futuro, e não levantamento de estado da arte, por um motivo específico: as
consequências relevantes **não são técnicas**. A técnica já está publicada, com peso aberto e
número de benchmark. O que está em aberto é quem escreve o prompt, quem audita o que foi
perguntado, o que resta de "privado" numa foto quando tudo nela é legível por máquina, e se a
régua jurídica que separa biométrico de não-biométrico sobrevive a um sistema que aceita
qualquer substantivo. Nada disso se responde olhando o *leaderboard*.

## 3. Onde isso está hoje

### O que já existe e funciona

**Segmentação por conceito.** O SAM 3 foi publicado pela Meta em 19 de novembro de 2025 e
introduz a *Promptable Concept Segmentation*: detectar, segmentar e rastrear **todas** as
instâncias de um conceito dado por frase nominal curta ou por exemplo visual, em imagem e em
vídeo, sem conjunto fixo de rótulos ([1], [3], [4]). O treino usa o SA-Co, com cerca de 5,2
milhões de imagens e 52,5 mil vídeos, mais de 4 milhões de frases nominais distintas e cerca de
1,4 bilhão de máscaras — o maior corpus de segmentação por conceito até hoje ([1]). O
desempenho declarado é 65,0 CGF1 em SA-Co/Gold, aproximadamente **88% do limite inferior humano
estimado** (humanos ~74,2 CGF1) e cerca de 2× o melhor sistema anterior; usuários preferiram a
saída do SAM 3 na proporção de cerca de três para um contra a linha de base mais forte ([1],
[4]). A velocidade: ~30 ms para uma imagem com mais de 100 objetos detectados numa GPU H200
([1], [3]). Em 27 de março de 2026 a Meta publicou o SAM 3.1, substituto direto, que dobra a
velocidade em vídeos de complexidade média — de 16 para 32 quadros por segundo numa H100 —
rastreando até 16 objetos num único passe ([1]).

**Backbone sem rótulo.** O DINOv3 foi publicado em 14 de agosto de 2025: aprendizado
auto-supervisionado sobre 1,7 bilhão de imagens, até 7 bilhões de parâmetros, com um *backbone
congelado* que entrega detecção, segmentação semântica, estimativa de profundidade relativa,
classificação e rastreamento em vídeo sem ajuste fino ([5]). Foi liberado sob licença comercial,
incluindo um backbone de satélite treinado com imagens MAXAR; o World Resources Institute e o
Jet Propulsion Laboratory da NASA já o aplicam em monitoramento ambiental, desmatamento e
estimativa de altura de dossel ([5]).

**Documento sem OCR.** A linhagem que começou no Donut e no Nougat — mapear pixel direto para
texto estruturado — virou produto. Em 2026 há um conjunto de modelos de peso aberto que
consolidam num único passe o que antes era cadeia sequencial de binarização, detecção de
layout, segmentação e classificação de caractere, eliminando o erro composto das etapas
intermediárias ([6]). O PaddleOCR-VL-1.6 reporta 96,33% no OmniDocBench com suporte a mais de
100 idiomas; o dots.ocr tem licença MIT em escala compacta (~1,7 B) e é forte em formulário
estruturado; o GOT-OCR 2.0 faz fórmula e equação com ~3 GB de VRAM; o DeepSeek-OCR reduz custo
por página em 30–40% via arquitetura de mistura de especialistas ([6]). O efeito econômico é
direto: auto-hospedagem sai a ~US$ 7,27 por 10 mil páginas contra ~US$ 15,00 do AWS Textract,
com ponto de equilíbrio entre 50 e 100 mil páginas mensais ([6]).

**Acessibilidade.** Isto já é produto de consumo, não pesquisa. Em maio de 2026 a Meta
documentou o conjunto de funções dos seus óculos com IA para pessoas cegas e de baixa visão:
chamada de vídeo sem as mãos com contatos ou com equipes de atendimento de marcas via Be My
Eyes, descrição do ambiente e leitura de texto por comando de voz, e aplicativos de terceiros
(OOrion) que localizam itens, leem texto e detectam obstáculos com orientação sonora em tempo
real; nos Ray-Ban Display há legenda ao vivo na lente ([11]).

**Vigilância em escala, no Brasil.** O Smart Sampa é descrito pela própria prefeitura de São
Paulo como o maior sistema de monitoramento de segurança da América Latina, operando
reconhecimento facial e leitura automática de placas, com um aplicativo (Smart Sampa Cidadão)
que transforma o celular do cidadão em leitor de placa integrado às bases ([10]). Registro
importante: a página pública oficial **não divulga** número de câmeras nem métricas — o painel
"PRISÔMETRO" aparece com traços no lugar dos números ([10]).

**A régua da disciplina, do outro lado.** Classificação de imagem, detecção de objeto com
classes fixas e OCR tradicional são maduros e não entram como disrupção neste mapa. Eles são o
baseline contra o qual se mede o que é de fato novo — e continuam sendo a recomendação de
produção: o padrão que a própria comunidade adota é usar o SAM 3 para rotular e depois treinar
um modelo supervisionado menor, como o RF-DETR, para servir em produção ([3]).

### O que existe como pesquisa ou protótipo, e não em produção

**Vocabulário aberto em tempo real na borda.** Há medição séria e recente. Num estudo
sistemático do compromisso acurácia-latência em NVIDIA Jetson AGX Orin 64 GB, a combinação
NanoOWL + EfficientViT-SAM atingiu 47,51 FPS, com as melhores configurações acima de 0,84 mIoU
(até 0,9186 em FP32); pipelines baseados em YOLO-World ficaram em ~26 FPS, cerca de 43% mais
lentos ([9]). Mas as ressalvas do próprio estudo são o que importa: o NanoOWL só aceita frases
nominais, o YOLO-World entende sentença complexa e por isso é mais lento, e algumas
configurações FP16 do EfficientViT-SAM produziram **falha total** de segmentação (mIoU perto de
zero) ([9]). Ou seja: rápido na borda é um modelo destilado e linguisticamente pobre, não o
SAM 3.

**Dentro de um óculos, mesmo, ainda não.** O OpenGlass, plataforma de óculos com visão por
evento, opera 11,8 horas com bateria de 200 mAh a ~65,6 mW médios (pico 96 mW), com latência
fim-a-fim de 33,9 ms e 83,94% de acurácia entre sujeitos em reconhecimento de gesto — rodando
modelos de **menos de um milhão de parâmetros** ([12]). O SAM 3 tem 3,45 GB e centenas de
milhões de parâmetros ([4]). A distância entre as duas coisas é de ordens de grandeza, e é
energética antes de ser algorítmica.

**Confiabilidade da própria percepção aberta.** O vocabulário aberto falha de forma desigual e
previsível: categorias comuns e de tamanho razoável são bem detectadas (Acc50 ≥ 70%), enquanto
categorias como "travessa", "botão", "gaveta" e "brinco" ficam praticamente indetectáveis
(Acc50 ≤ 20%), num padrão de confusão de vocabulário. A própria documentação do SAM 3 assume o
limite: ele é feito para frases nominais simples; expressões referenciais longas ou raciocínio
composto exigem acoplar um modelo multimodal maior, e conceitos raros ou ambíguos ("janela
pequena") degradam ([4]).

### Quem está construindo

Meta FAIR (SAM 3, SAM 3.1, DINOv3), IDEA Research (Grounding DINO), Roboflow (RF-DETR,
ferramental e documentação de vocabulário aberto), Voxel51 (avaliação de dados visuais), Google
(Florence-2, PaliGemma), Alibaba (Qwen3-VL, com avaliação em RefCOCO/+/g, ODinW-13 e
CountBench), NAVER (Donut), DeepSeek, Baidu (PaddleOCR-VL), IBM (Granite-Docling), NVIDIA
(NanoOWL, NanoSAM, TensorRT), e do lado da aplicação Be My Eyes + Meta em acessibilidade ([11])
e os integradores de videomonitoramento municipal, como o consórcio do Smart Sampa ([10]).

### O estado do enquadramento jurídico

A lei europeia proíbe identificação biométrica remota **em tempo real** em espaço acessível ao
público para fins de aplicação da lei, exigindo a presença simultânea de quatro critérios —
dado biométrico, tempo real, espaço público, finalidade policial — com três exceções estreitas
e autorização prévia ([8]). E há um achado que estrutura boa parte deste mapa: **a proibição
não alcança descrição não-biométrica.** A vedação é estritamente desenhada sobre dado
biométrico — características físicas ou comportamentais legíveis por máquina, como face, marcha
e voz; descrições de vocabulário aberto do tipo "pessoa de jaqueta vermelha" ficam inteiramente
fora do escopo ([8]).

No Brasil, a ANPD colocou IA e tecnologias emergentes como um dos quatro pilares de fiscalização
para 2026–2027, com foco declarado em reconhecimento facial e sistemas de recomendação,
sobretudo envolvendo dados de crianças; três empresas entraram no sandbox regulatório em
fevereiro de 2026, com resultados previstos para dezembro de 2026, e o PL 2338/2023 passou pelo
Senado em dezembro de 2024 e aguarda a Câmara sem data ([13]). Dado biométrico já é dado
sensível pela LGPD; o que ainda não existe é regra específica ([13]). A moldura brasileira,
como a europeia, está construída sobre **biometria** — e portanto herda o mesmo vazio.

## 4. As disrupções-raiz

Cada candidato abaixo passou pelo teste de três perguntas da Etapa 3 da skill. O candidato
reprovado, e o motivo, estão na Seção 12.

### 4.1 Segmentação e detecção por conceito (vocabulário aberto)

**O que rompe.** O pré-requisito de que exista um rótulo antes de existir uma capacidade. Até
aqui, pôr visão em produção significava: definir classes, montar dataset, anotar, treinar,
avaliar, servir. Cada classe nova reabria o ciclo inteiro. Com segmentação por conceito, a
classe nova é uma frase. Isso invalida uma prática (o ciclo de anotação como caminho
obrigatório), um ofício (o anotador que desenha máscara — de 9,7 segundos por máscara para
menos de 2, um ganho de cinco a seis vezes com pré-rotulagem assistida, [2]) e um produto (o
detector treinado sob medida vendido como diferencial).

**Por que agora e não há cinco anos.** Porque o dado e a arquitetura chegaram juntos, e é
datável: o SA-Co, com 4 milhões de frases nominais distintas e 1,4 bilhão de máscaras, só foi
publicado em novembro de 2025 ([1]). Não é "o modelo melhorou". É que o corpus que casa conceito
linguístico com máscara em escala não existia, e a fusão visão-linguagem que o consome também
não. O salto medido — 2× sobre o melhor sistema anterior, 88% do limite humano inferior ([1],
[4]) — é de degrau, não de rampa.

**O que ainda falta.** Três coisas concretas, todas nomeadas pelas próprias fontes. (a)
Expressão referencial longa e raciocínio composto: o SAM 3 é feito para frase nominal simples e
precisa de um modelo multimodal acoplado para mais que isso ([4]). (b) A cauda longa: categorias
como "gaveta" ou "brinco" ficam abaixo de 20% de Acc50. (c) O caminho de produção ainda é
híbrido — rotular com SAM 3 e servir com um modelo supervisionado menor ([3]) —, o que significa
que a ruptura hoje é na **construção**, não ainda no que roda em produção.

### 4.2 Compreensão de documento sem OCR

**O que rompe.** A premissa de que o documento precisa ser estruturado para ser lido por
máquina. A cadeia clássica exigia template, marcas de registro, campos em posição conhecida — e
qualquer papel fora do gabarito era exceção manual. O modelo fim-a-fim vai do pixel à estrutura
semântica num passe, sem etapa intermediária ([6]). Isso invalida a indústria de pipeline OCR +
template por formulário, o modelo de cobrança por página de API gerenciada (US$ 15,00 contra
US$ 7,27 por 10 mil páginas, [6]) e o trabalho de digitação e conferência como fluxo contínuo.

**Por que agora.** Compressão óptica de contexto e mistura de especialistas derrubaram o custo
do token visual, que era o gargalo real de página em alta resolução; e modelos de escala
compacta (~1,7 B) com licença MIT ou Apache 2.0 tornaram a auto-hospedagem viável para quem não
é laboratório ([6]). Há cinco anos, a LayoutLM ainda dependia de OCR externo — a diferença é
categórica, não de qualidade.

**O que ainda falta.** Cobertura de idioma e de manuscrito é irregular: apenas parte dos modelos
lida com anotação à mão de forma confiável, e a cobertura multilíngue varia de 20+ a 100+
idiomas conforme o modelo ([6]). E falta o mais difícil, que não é técnico: **responsabilidade
sobre o erro**. Sem etapas intermediárias, não há onde inspecionar por que uma extração errou.

### 4.3 Representação visual densa sem rótulo (DINOv3)

**O que rompe.** A ideia de que cada domínio precisa construir o próprio dado rotulado antes de
ter percepção. Um backbone congelado, treinado sem rótulo em 1,7 bilhão de imagens, entrega
detecção, segmentação, profundidade e rastreamento sem ajuste fino ([5]). Isso invalida a tese
competitiva mais repetida da década anterior — "nosso dataset rotulado proprietário é o fosso" —
em domínios como satélite, histologia e endoscopia, onde o rótulo era justamente o que não
existia e era caro demais para existir.

**Por que agora.** Escala auto-supervisionada estável: a técnica de *Gram anchoring* resolveu a
degradação dos mapas de característica densa em treinos longos, que era o que travava esse tipo
de modelo em 7 bilhões de parâmetros ([5]). Somado à liberação sob licença comercial com
backbone de satélite treinado em imagens MAXAR — o que muda quem pode usar, não só quem pode
treinar ([5]).

**O que ainda falta.** A adoção fora dos laboratórios que já a anunciaram (WRI, JPL) é
indocumentada nas fontes que abri — o que é o limite mais honesto desta subseção: sei que
funciona e que está liberado; não sei quanto está em uso.

### 4.4 Percepção aberta em tempo real na borda — **emergente, entra com ressalva**

**A ressalva, primeiro.** Este item **não passou integralmente no teste da Etapa 3** e está aqui
declarado como aposta, não como ruptura consumada. Ele passa nas perguntas 1 e 3, e a pergunta 2
é respondível — mas a evidência técnica levantada contradiz a premissa de que isso já acontece.

**O que tornaria possível.** Rotular continuamente o campo de visão de um dispositivo móvel por
descrição, sem enviar imagem para a nuvem. Isso ameaçaria duas coisas ao mesmo tempo: a
arquitetura "captura local, entende na nuvem" com o modelo de negócio de API por chamada; e a
premissa regulatória de que vigilância se combate proibindo biometria — porque descrição não
biométrica está fora do escopo da proibição ([8]).

**Por que agora.** Destilação e compilação (NanoOWL, NanoSAM, TensorRT) chegaram a 47,51 FPS com
mIoU acima de 0,84 em Jetson AGX Orin ([9]), e há óculos de pesquisa rodando inferência local a
65,6 mW por 11,8 horas ([12]).

**O que falta — e por que a ressalva é séria.** O que roda a 47,51 FPS é um detector destilado
limitado a frases nominais, não o SAM 3 — cuja própria documentação descreve o deploy em borda
como impraticável para tempo real ([3]) — e algumas quantizações do segmentador falham por
completo ([9]). O que de fato cabe num óculos hoje são modelos de menos de um milhão de
parâmetros ([12]), três a quatro ordens de grandeza abaixo. O intervalo é energético e térmico,
não algorítmico: não encolhe sozinho com a próxima geração de chip.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: Segmentação e detecção por conceito em vocabulário aberto
    efeitos:
      - id: e1
        ordem: 1
        efeito: A cadeia anotar-treinar-servir deixa de ser pré-requisito para pôr visão em produção, e a capacidade nova nasce de uma frase
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O gargalo do trabalho de dados migra de produzir máscara para decidir o que merece rótulo e revisar a saída da máquina
            sinal: forte
            prazo: 2027
            confianca: alta
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O anotador genérico desaparece como categoria de emprego e é substituído pelo especialista de domínio que audita percepção
                sinal: medio
                prazo: 2030
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: Ferramentas de anotação se reposicionam como consoles de verificação e de discordância, não de desenho de máscara
                sinal: fraco
                prazo: 2029
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Câmeras já instaladas ganham funções novas por atualização de texto, sem troca de hardware nem retreino
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: O que uma câmera faz deixa de ser auditável pela sua especificação técnica e passa a depender do prompt em vigor naquele dia
                sinal: fraco
                prazo: 2030
                confianca: baixa
              - id: e1.2.2
                ordem: 3
                efeito: Contratos de videomonitoramento passam a exigir registro versionado das consultas feitas, análogo a log de banco de dados
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.3
            ordem: 2
            efeito: A consulta visual por descrição vira interface de produto, e o usuário final busca em acervo de imagem e vídeo escrevendo o que quer achar
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.3.1
                ordem: 3
                efeito: O acervo audiovisual pessoal passa a ser navegado por descrição e a metadata manual perde função de organização
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: A distância entre descrever uma tarefa de visão e ter um protótipo funcionando cai de semanas para horas, e quem projeta interação deixa de precisar de equipe de ML
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Designers e pesquisadores de mídia passam a prototipar interação baseada em câmera sem intermediação de engenharia de visão
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Currículos de design e comunicação incorporam percepção por conceito como material de projeto, ao lado de som e imagem
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Prolifera aplicação de visão sem avaliação própria, porque o custo de construir caiu mais rápido que o custo de medir
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Incidentes públicos de percepção mal calibrada em varejo, segurança e saúde forçam exigência de relatório de desempenho por classe
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: Compreensão de documento sem OCR
    efeitos:
      - id: e2
        ordem: 1
        efeito: O formulário estruturado deixa de ser condição para extrair dado, e qualquer papel fotografado vira registro consultável
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O trabalho de digitação e conferência encolhe para tratamento de exceção e de disputa, em vez de fluxo contínuo
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: O ônus da prova em erro de extração se desloca para quem opera o sistema, criando a função de perito em extração documental
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: O design de formulário muda de propósito e volta a servir a quem preenche, em vez de servir ao leitor de máquina
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Interfaces de serviço público e privado migram do preenchimento campo a campo para conversa com anexo fotografado
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.3
            ordem: 2
            efeito: Arquivos históricos e acervos manuscritos que nunca justificaram digitação viram base consultável a custo marginal
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.3.1
                ordem: 3
                efeito: Pesquisa histórica e jornalística passa a operar sobre o acervo inteiro em vez de amostra, mudando o que conta como evidência documental
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: Imagem e dado estruturado deixam de ser categorias separadas no projeto de sistema, e toda imagem entra no banco como registro consultável
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O que é privado numa foto deixa de ser o rosto e passa a ser tudo o que a foto permite inferir, do endereço ao remédio na mesa
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: O consentimento para publicar imagem deixa de ser sobre aparecer e passa a ser sobre quais atributos podem ser extraídos dela
                sinal: fraco
                prazo: 2032
                confianca: baixa
              - id: e6.1.2
                ordem: 3
                efeito: Surgem filtros de publicação que degradam deliberadamente atributos legíveis por máquina sem degradar a leitura humana
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: Representação visual densa sem rótulo
    efeitos:
      - id: e3
        ordem: 1
        efeito: Domínios sem dataset rotulado, como satélite, histologia e endoscopia, ganham percepção de qualidade sem construir o rótulo antes
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Monitoramento ambiental e agrícola contínuo em escala planetária deixa de depender de campanha de rotulagem por região
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A fiscalização ambiental e de uso do solo no Brasil passa a ser contestada no detalhe do modelo, e não apenas no dado de satélite
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: A vantagem competitiva em visão migra do dado rotulado proprietário para o dado bruto de domínio e a capacidade de avaliar
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Empresas que sustentavam a tese do dataset rotulado como fosso perdem o argumento, e o fosso migra para a base de avaliação própria
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: Percepção aberta em tempo real na borda (emergente, com ressalva)
    efeitos:
      - id: e4
        ordem: 1
        efeito: Dispositivos vestíveis passam a rotular continuamente o campo de visão por descrição, sem enviar imagem para a nuvem
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Acessibilidade deixa de ser recurso acionado sob demanda e vira narração contínua e situada do ambiente
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A descrição do mundo para quem não vê passa a carregar a curadoria de quem escreveu o prompt, e essa curadoria vira objeto de disputa pública
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: A vigilância por descrição não biométrica escapa da moldura regulatória escrita para biometria, tanto na Europa quanto no Brasil
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Cria-se uma categoria jurídica de identificação por atributo distinta de biometria, ou o vazio permanece e a proibição biométrica perde efeito prático
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e4.3
            ordem: 2
            efeito: Processar localmente vira ao mesmo tempo argumento de privacidade e escudo contra auditoria, porque não sobra tráfego de rede que registre o que foi visto
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.3.1
                ordem: 3
                efeito: Passa-se a exigir registro obrigatório de inferência no próprio dispositivo, invertendo o argumento de que a borda é sempre mais privada
                sinal: fraco
                prazo: 2032
                confianca: baixa
```

### O que o bloco não consegue dizer

**Primeiro: os ramos não são independentes, e o YAML os desenha como se fossem.** O efeito e1.2
(câmera ganha função por texto) e o e4.2 (vigilância por descrição fora da moldura biométrica)
são, no mundo, o mesmo acontecimento visto de dois ângulos — um do lado do produto, outro do
lado da lei. Se um se concretiza, o outro é quase automático. A árvore hierárquica não tem como
representar essa amarração; um método de impacto cruzado teria, e é a razão de ele estar
registrado no meu ESTUDO.md como o método fora da lista.

**Segundo: o prazo é o campo mais fraco de todos.** Os anos aqui são estimativas de quando o
efeito fica *reconhecível*, não de quando ele se completa — e a Seção 7 mostra que pelo menos um
deles (e2, 2028) assume uma velocidade que o caso comparável não sustenta. Leia os prazos como
ordenação relativa, não como data.

**Terceiro: o sinal "forte" está concentrado em 2027, o que é suspeito de si mesmo.** Quatro dos
seis efeitos de primeira ordem estão marcados como forte e em 2027. Isso é, em parte, honesto —
eles já são visíveis hoje. Mas é também o formato empurrando: efeito de primeira ordem que já se
vê tende a receber confiança alta porque é fácil defendê-lo, e isso comprime a incerteza real
para os níveis mais fundos da árvore, onde ela fica mais confortável de declarar.

**Quarto: não há nenhum efeito negativo de primeira ordem no bloco.** Todos os efeitos de
primeira ordem são capacitantes; o desconforto só aparece na segunda e na terceira. Isso não é
uma descoberta sobre a tecnologia — é um artefato de derivar a partir de "o que isso torna
possível", que é a pergunta que a Etapa 3 faz. Uma roda derivada de "o que isso quebra" teria
outra forma.

## 6. Sinais fracos e wildcards

**ORTHOS e a fronteira entre ver e sentir.** Uma extensão de navegador que simula e visualiza
resposta emocional a manchetes, baseada em modelo da Meta, é um objeto marginal — mas aponta
para a extensão natural e desconfortável do vocabulário aberto: sair de "o que há na cena" para
"o que a cena provoca", e daí para "que estado interno esta pessoa aparenta". No momento em que
o prompt aceita qualquer substantivo, ele aceita também "pessoa ansiosa" e "pessoa hostil". A
lei europeia já proíbe inferência de emoção em contexto de trabalho e de ensino; um sistema de
segmentação por conceito não sabe que está fazendo isso — ele só recebeu uma frase nominal.

**O backbone de satélite.** O DINOv3 foi liberado com um backbone treinado em imagens MAXAR, já
em uso no WRI e no JPL para desmatamento e altura de dossel ([5]). Isso quase não aparece na
conversa pública sobre vocabulário aberto, que é dominada por cena urbana e por óculos. É,
porém, onde o Brasil tem mais a ganhar e mais a perder: percepção aberta aplicada ao território,
não à pessoa.

**Visão por evento.** Sensores que só reportam mudança (Prophesee GENX320, no OpenGlass) mudam o
denominador do problema energético: a captura contínua deixa de custar o que custa hoje ([12]).
Se o vocabulário aberto casar com sensor de evento, a barreira que hoje mantém o wildcard abaixo
improvável começa a ceder por um caminho que ninguém está olhando, porque não é o caminho da
GPU maior.

**Wildcard 1 — um modelo de conceito de qualidade comparável ao SAM 3 rodando inteiramente
dentro de óculos de consumo, até 2031, rotulando o campo de visão de forma contínua e sem
nuvem.** A probabilidade é baixa por um motivo mensurável, e não por ceticismo de estilo: o
intervalo é de centenas de milhões de parâmetros e 3,45 GB ([4]) para menos de um milhão de
parâmetros num orçamento de 65,6 mW ([12]) — três a quatro ordens de grandeza. E esse orçamento
não cresce, porque é limitado por conforto térmico no rosto e por peso aceitável, não por
litografia. O impacto seria alto porque é o único caminho em que a vigilância por descrição
escapa simultaneamente da lei (não é biométrica, [8]) e da auditoria (não há tráfego de rede
para registrar) — e nesse cenário o efeito e4.3.1 deixa de ser terceira ordem e vira urgência.

**Wildcard 2, na direção contrária — um caso judicial de grande repercussão em que a extração
sem OCR errou um documento e ninguém conseguiu reconstruir por quê.** A cadeia clássica de OCR
tem etapas intermediárias inspecionáveis; o modelo fim-a-fim, por construção, não tem ([6]).
Probabilidade baixa de acontecer em escala suficiente para mudar a regra até 2031 — mas o
impacto seria a reintrodução da exigência de pipeline auditável, o que mataria o efeito e2
inteiro e boa parte do ramo da disrupção 4.2.

## 7. Contra o próprio mapa

**1. O efeito que é só extrapolação linear do presente: e1.1.** "O gargalo migra de produzir
máscara para revisar saída de máquina" é literalmente a descrição do que já vem acontecendo
desde o SAM 1, em 2023 — a pré-rotulagem assistida já levou a máscara de 9,7 segundos para menos
de 2 ([2]). Não é uma mudança de natureza; é a mesma curva, mais rápida. E há mais: as fontes
que abri dizem explicitamente que **o SAM 3 não elimina o trabalho humano** — "ele não escolhe o
que rotular nem confirma que um rótulo está certo", e o gargalo real é que 36% dos times dizem
que menos da metade do que anotam chega à produção ([2]). Se o gargalo verdadeiro é decidir o
que merece rótulo, ele nunca foi o que a segmentação automatiza. O efeito está no mapa, mas está
mal classificado: é continuidade, não consequência.

**2. O efeito que assume velocidade de adoção nunca vista: e2, em 2028.** O caso comparável é a
própria OCR. Reconhecimento óptico de caractere comercial existe desde os anos 1950–1970, e o
formulário estruturado — com caixas, marcas de registro, campos em posição fixa — continuou
obrigatório por mais de quarenta anos depois disso. A barreira nunca foi puramente técnica: é
responsabilidade jurídica sobre o erro, e a estrutura do formulário é o que torna o erro
localizável. Assumir que dois anos bastam para dissolver o que quarenta anos de OCR não
dissolveram é o ponto mais frágil do mapa, e o prazo de e2 deveria provavelmente ser lido como
2033 ou além, com o efeito migrando para setores sem exposição jurídica (acervo histórico,
pesquisa) antes de chegar ao formulário de serviço.

**3. A disrupção que pode simplesmente não se concretizar: 4.4, a percepção aberta em tempo real
na borda.** A evidência contrária já está dentro das fontes que sustentam o mapa. A documentação
do SAM 3 descreve o deploy em borda como impraticável para tempo real ([3]); o que roda a 47,51
FPS num Jetson AGX Orin é o NanoOWL, destilado e limitado a frases nominais ([9]); algumas
quantizações FP16 do segmentador falham completamente ([9]); e o que de fato cabe num óculos
funcionando 11,8 horas são modelos de menos de um milhão de parâmetros ([12]). Se essa
disrupção não se concretizar, cai o ramo e4 inteiro — e4.1, e4.2, e4.3 e os três efeitos de
terceira ordem sob eles. O que sobra é um mapa sobre **trabalho**: anotação, documento, domínio
sem rótulo. Menos vistoso, consideravelmente mais sólido, e com a ironia de que a parte que
sobra é justamente aquela onde a evidência está mais dura.

**4. O viés que entrou aqui.** O recorte pedido era global e o viés, neutro — e é exatamente por
isso que o desvio é fácil de não perceber. O levantamento da Etapa 2 é quase inteiramente em
inglês e, mais grave, é quase inteiramente produzido por quem **vende** a tecnologia: Meta (que
publica SAM 3, SAM 3.1 e DINOv3 e descreve o próprio desempenho), Roboflow, Voxel51, Spheron,
herohunt. As duas únicas fontes com incentivo estruturalmente contrário — a Future of Privacy
Forum e a leitura da agenda da ANPD — são jurídicas, não técnicas. **Ninguém na minha lista tem
incentivo para dizer que o vocabulário aberto não funciona.** Onde isso inflou o mapa,
concretamente: em e3 e e3.2, a tese de que "o fosso do dado rotulado acabou" repousa sobre um
post de blog da Meta a respeito do modelo da própria Meta ([5]), sem nenhuma medição
independente de adoção. E a nota sobre o Brasil está sub-sustentada por construção: tenho o
Smart Sampa e a agenda regulatória da ANPD ([10], [13]), mas nenhum dado brasileiro sobre
vocabulário aberto especificamente — o e3.1.1 é, sendo honesto, uma inferência minha sobre o
Brasil a partir de evidência inteiramente estrangeira.

## 8. O que a máquina errou

**1. Dois PDFs do arXiv voltaram vazios, e o resumo do primeiro veio plausível mesmo assim.** As
tentativas de ler `arxiv.org/pdf/2510.18234` (DeepSeek-OCR) e `arxiv.org/pdf/2310.14374`
(OV-VG) devolveram estrutura binária do PDF, não texto. No primeiro caso, a resposta ainda assim
montou um parágrafo descrevendo o tema do artigo — a partir apenas do título e dos nomes dos
autores, e sem nenhum dos números que eu havia pedido. Se eu tivesse aceitado aquilo como
leitura, teria citado um artigo que não abri, com uma síntese que parecia legítima. Os números
de compressão do DeepSeek-OCR não entraram em lugar nenhum por causa disso; os números de OCR
que estão na Seção 3 vêm do comparativo da Spheron, que abriu de fato. Registro a ironia: o
artigo que não consegui extrair é justamente sobre extrair documento.

**2. Duas fontes abertas divergem sobre o tamanho do SAM 3, e o arredondamento esconderia
isso.** A documentação da Ultralytics diz 473,6 milhões de parâmetros e 3,45 GB ([4]); o
Roboflow diz 840 milhões de parâmetros e ~3,4 GB ([3]). O mesmo tamanho em disco com quase o
dobro de parâmetros não fecha — ou uma das duas está contando um conjunto diferente de pesos, ou
uma está errada. Mantive as duas com a divergência à vista em vez de escolher a que soa melhor.
É exatamente o tipo de número que, arredondado uma vez e repetido três, vira fato.

**3. Eu ia escrever o desaparecimento do trabalho de anotação como consequência confirmada.** Na
primeira passagem, o efeito e1.1.1 estava redigido como certeza. A busca de mercado devolveu o
oposto: vagas de "AI trainer" e anotação cresceram 281% entre 2021 e 2026, tornando-se o papel
de tecnologia autônomo que mais cresce, e a Mercor cruzou US$ 2 bilhões de receita anualizada em
junho de 2026 ([7]). O que muda não é o volume, é a natureza — de trabalho por clique para
julgamento especializado, com médicos e advogados no lugar de multidão genérica ([7]). O erro
aqui não foi um fato inventado: foi um efeito que eu teria escrito **sem procurar evidência
contrária**, porque ele soa como a consequência óbvia de auto-rotulagem. É o modo de falha mais
difícil de pegar, porque não deixa rastro de invenção.

**4. Eu ia classificar a percepção na borda como disrupção-raiz junto com as outras três.** O
teste da Etapa 3 segurou, mas por pouco: a pergunta "o que isso invalida" tinha uma resposta boa,
e isso quase bastou. O que impediu foi a pergunta 3, cruzada com a evidência técnica — o modelo
que atinge o desempenho não é o modelo que roda na borda. Ficou como emergente com ressalva. Se
a skill não exigisse escrever as três respostas antes do veredito, teria passado.

**5. Datas conflitantes sobre a vigência da proibição europeia.** Uma das buscas devolveu
simultaneamente "as proibições do Artigo 5 passaram a ser exigíveis em 2 de fevereiro de 2025" e
"a partir de agosto de 2026 os sistemas de risco inaceitável enfrentam proibição em todos os
Estados-membros", o que não pode ser as duas coisas do mesmo jeito. Preferi não datar a vigência
no corpo do documento e me ater ao que a análise da FPF, que abri, afirma sobre **escopo** —
quatro critérios cumulativos, três exceções, e o achado de que a descrição não biométrica está
fora ([8]). O escopo é o que sustenta o efeito e4.2; a data não era necessária, e teria entrado
errada.

## 9. Três cenários para 2031

**Provável.** Em 2031, a percepção por conceito venceu na construção e perdeu na produção. Todo
protótipo de visão nasce de um prompt — a turma de 2026 que levava três semanas para treinar um
detector hoje leva uma tarde —, mas o que roda em sistema crítico continua sendo um modelo
supervisionado pequeno, destilado a partir de rótulos que uma máquina gerou e um humano
conferiu. O ofício de anotar máscara acabou; o de auditar percepção cresceu e ficou mais caro,
ocupado por gente que entende do domínio e não de visão. Documento sem OCR tomou o acervo
histórico, a pesquisa e o back-office de baixo risco, e não tomou o formulário de serviço
público, que continua estruturado pelo mesmo motivo de sempre: alguém precisa responder pelo
erro. Vestível com descrição contínua e local continua sendo demonstração de feira; o que existe
em escala é o que já existia em 2026 — captura no rosto, entendimento na nuvem, e o modelo de
negócio da chamada de API intacto. A vigilância por descrição não biométrica é prática corrente
em varejo e em segurança privada, sem categoria jurídica própria, porque nenhum regulador achou
urgente criar uma.

**Desejável.** O mesmo cenário acima, com uma diferença que não é utópica e custa pouco: o
registro da consulta virou obrigatório. Sistemas de percepção instalados em espaço acessível ao
público mantêm um log versionado do que foi perguntado à câmera — não das imagens, mas dos
prompts —, auditável por quem circula naquele espaço. Isso resolve o problema que o efeito
e1.2.1 nomeia, que é a especificação técnica deixar de dizer o que o equipamento faz, e resolve
sem proibir a tecnologia. Para chegar aqui, três coisas precisariam ter acontecido até 2028: a
ANPD ter incluído "identificação por atributo" no escopo da regulação de biometria que anunciou
para 2026 em vez de tratar só do rosto ([13]); a União Europeia ter fechado, na revisão do
escopo, a lacuna que a FPF identificou entre biométrico e descritivo ([8]); e — a parte que cabe
a quem projeta, e é a única deste documento sob controle de quem o lê — o registro de prompt ter
virado prática de engenharia antes de virar exigência de lei, do mesmo modo que o log de acesso
a banco de dados virou.

**Indesejável.** Em 2031, a percepção aberta é infraestrutura invisível e ninguém sabe dizer o
que cada câmera procura. Os equipamentos são os mesmos de 2026 — foi só atualização de texto —,
o que significa que nenhuma licitação, nenhum contrato e nenhuma auditoria acompanhou a mudança
de função, porque do ponto de vista formal não houve mudança de função. A proibição de biometria
segue em vigor, íntegra e inútil: ninguém precisa reconhecer um rosto para seguir uma pessoa
pela cidade quando "homem de camisa azul com mochila preta" resolve, e nada disso é dado
biométrico ([8]). No Brasil, onde a discussão pública inteira foi construída em torno do
reconhecimento facial, o debate chega tarde e no lugar errado. **O sinal precoce desse cenário
já está visível hoje, e não é técnico:** é o vazio de escopo que a FPF descreveu em abril de
2026 ([8]) somado ao fato de que o painel público do maior sistema de monitoramento da América
Latina mostra traços no lugar dos números ([10]). Se em 2027 o debate regulatório brasileiro
ainda estiver falando exclusivamente de biometria, este cenário está ganhando.

## 10. O experimento

**O que é.** *A câmera que só vê o que se pede — banca de prompts ao vivo.* Uma câmera comum
ligada a um notebook com um modelo de segmentação por conceito (SAM 3 via Hugging Face, ou
Grounding DINO / YOLO-World se a GPU disponível for modesta), projetando a saída segmentada na
parede da sala em tempo quase real. A turma digita o que a câmera deve procurar. Duas rodadas,
com a mesma cena e a mesma iluminação: na primeira, só conceitos concretos e nomeáveis —
"mochila", "caneca vermelha", "celular na mão". Na segunda, conceitos carregados de julgamento
— "pessoa distraída", "alguém suspeito", "quem está prestando atenção na aula", "pessoa
apressada". Registra-se tudo: o prompt, a máscara, e a estabilidade da máscara entre quadros.

**Que pergunta responde.** Duas, encadeadas. A primeira é do mapa e é técnica: a fronteira entre
**descrever** e **julgar** é uma propriedade do modelo ou do prompt? O SAM 3 não tem categoria
para "suspeito" e não sabe que a frase é diferente de "mochila" — ele recebe uma frase nominal e
devolve máscara. Se a saída para conceitos carregados for tão estável quanto para conceitos
concretos, então o sistema é um classificador de pessoas por atributo e ninguém precisou
programá-lo para isso. A segunda é regulatória e decorre da primeira: a régua que separa
biométrico de não biométrico ([8]) sobrevive a um sistema que aceita qualquer substantivo?

**Que tecnologia emergente usa, e por quê não serve tecnologia madura.** Segmentação por
conceito (PCS). A impossibilidade de fazer isso com tecnologia madura é o próprio ponto do
experimento: **um detector de classes fixas simplesmente não aceita "alguém suspeito" como
entrada** — não há para onde digitar a frase. Que a frase possa ser digitada é exatamente o que
é novo, e é a razão de o experimento existir. Qualquer versão deste experimento feita com
detector treinado exigiria alguém rotular "suspeito" antes, o que já responderia a pergunta pelo
caminho errado: teria sido um humano, explicitamente, decidindo o que é suspeito.

**O que a turma faz em sala.** Cada aluno escreve um prompt em segredo e entrega ao operador. A
saída é projetada sem o prompt à vista, e a turma tenta adivinhar qual frase gerou aquela
máscara — o que transforma a aula numa medição informal de quanto a descrição e o recorte
coincidem. Depois, abre-se o prompt e discute-se, com a projeção ainda na parede: quais frases
produziram recorte estável, quais produziram recorte que muda a cada quadro, e quais produziram
recorte estável **e errado** — que é o caso interessante. Fecha-se com a pergunta que ninguém
responde em sala: se este notebook estivesse num poste, quem teria escrito o prompt?

**O que me faria mudar de ideia.** Se os prompts carregados de julgamento produzirem saída
instável a ponto de serem operacionalmente inúteis — máscaras que saltam entre pessoas a cada
quadro, sem consistência —, então o efeito e4.2 é alarmismo e eu deveria rebaixá-lo: a
tecnologia não sustenta a aplicação que o mapa teme, e o vazio regulatório que a FPF descreve é
um vazio sobre algo que não funciona. Isso é plausível: o próprio SAM 3 declara degradação em
conceitos ambíguos, e "janela pequena" é o exemplo que a documentação dá ([4]). Se, ao
contrário, "pessoa carregando mochila preta" for tão estável quanto "mochila" — e essa é minha
expectativa, porque é uma composição de frases nominais concretas, não um juízo —, o mapa está
certo e o vazio é real. Há um segundo resultado que também me faria mudar de ideia, em outra
direção: se a turma não conseguir pôr **nada** de pé numa aula — instalação, peso, GPU,
latência —, então o efeito e5 ("a distância entre descrever e prototipar cai para horas") é
falso no ponto que mais importa para esta disciplina, que é a mão de quem projeta e não a de
quem pesquisa.

## 11. Fontes

Todas as treze abaixo foram efetivamente abertas e lidas durante a Etapa 2. As que eu tentei
abrir e não consegui estão registradas na Seção 12, e nada delas foi citado.

1. **Meta AI — "SAM 3.1: Faster and More Accessible Real-Time Video Detection and Tracking with
   Multiplexing and Global Reasoning"** · `https://ai.meta.com/blog/segment-anything-model-3/`
   Sustenta: capacidades do SAM 3 e do SAM 3.1, datas (19/11/2025 e 27/03/2026), SA-Co, 65,0
   CGF1, ~30 ms/imagem em H200, 16→32 FPS em H100, multiplexação de até 16 objetos.
   *Confiabilidade:* fonte primária sobre o próprio modelo — autoritativa quanto ao que o modelo
   faz, e interessada quanto a quão bem ele faz. Todos os números de desempenho aqui são
   auto-reportados.

2. **Voxel51 — "What SAM 3 Means for Data Annotation"** · `https://voxel51.com/blog/what-sam-3-means-for-annotation`
   Sustenta: 9,7 s → menos de 2 s por máscara com pré-rotulagem; "o SAM 3 não escolhe o que
   rotular nem confirma que um rótulo está certo"; 36% dos times dizem que menos da metade do
   que anotam chega à produção.
   *Confiabilidade:* empresa de ferramentas de dados visuais, portanto com interesse em que o
   trabalho de dados continue existindo — o que torna a afirmação de que o gargalo apenas migra
   uma alegação interessada, mas também é a fonte que mais explicitamente contradiz o entusiasmo,
   o que a torna útil justamente por isso.

3. **Roboflow — "SAM 3: Segment Anything with Concepts"** · `https://blog.roboflow.com/what-is-sam3/`
   Sustenta: 840 M parâmetros / ~3,4 GB; deploy em borda impraticável para tempo real; padrão
   recomendado de rotular com SAM 3 e servir com RF-DETR.
   *Confiabilidade:* documentação técnica de fornecedor de ferramental, com histórico de rigor;
   divergente da fonte [4] na contagem de parâmetros, ver Seção 8.

4. **Ultralytics Docs — "SAM 3: Segment Anything with Concepts"** · `https://docs.ultralytics.com/models/sam-3`
   Sustenta: 473,6 M parâmetros / 3,45 GB; 65,0 CGF1 em SA-Co/Gold contra ~74,2 do limite
   inferior humano (~88%); limitações declaradas em frase nominal longa e conceito ambíguo.
   *Confiabilidade:* documentação de terceiro, secundária em relação ao artigo; divergente de [3]
   quanto a parâmetros.

5. **Meta AI — "DINOv3: Self-supervised learning for vision at unprecedented scale"** ·
   `https://ai.meta.com/blog/dinov3-self-supervised-vision-model/`
   Sustenta: data (14/08/2025), 1,7 bilhão de imagens, até 7 B de parâmetros, backbone congelado
   para tarefas densas, licença comercial, backbone de satélite MAXAR, uso por WRI e NASA JPL.
   *Confiabilidade:* fonte primária e interessada. É a base do efeito e3 e da fragilidade
   declarada no item 4 da Seção 7.

6. **Spheron — "Best Open-Source OCR and Document VLMs to Self-Host on GPU Cloud in 2026"** ·
   `https://www.spheron.network/blog/best-open-source-ocr-vlm-self-host-gpu-cloud-2026/`
   Sustenta: consolidação do pipeline clássico num passe único; PaddleOCR-VL-1.6 a 96,33% no
   OmniDocBench; DeepSeek-OCR com 30–40% de redução de custo; licenças MIT/Apache; US$ 7,27 vs
   US$ 15,00 por 10 mil páginas; limites em manuscrito e idioma.
   *Confiabilidade:* blog de provedor de GPU, com interesse direto em que auto-hospedagem pareça
   vantajosa — a comparação de custo deve ser lida com esse desconto. Os números de benchmark são
   de terceiros e verificáveis; o cálculo de custo é da casa.

7. **HeroHunt — "The Changing Landscape of AI Data Labeling Hiring (2026)"** ·
   `https://www.herohunt.ai/blog/the-changing-landscape-of-ai-data-labeling-hiring-2026/`
   Sustenta: mudança do anotador genérico para especialista de domínio; 80% das empresas
   apontando human-in-the-loop como essencial; Mercor acima de US$ 2 bi anualizados em jun/2026;
   ~50% de redução de esforço manual com rotulagem assistida.
   *Confiabilidade:* empresa de recrutamento escrevendo sobre o mercado que recruta — a mais
   interessada da lista em que haja demanda. Ainda assim é a fonte que **contradiz** a tese fácil
   do mapa, e por isso está citada exatamente onde contraria, na Seção 7.

8. **Future of Privacy Forum — "Red Lines under the EU AI Act: Restricting Real-time Remote
   Biometric Identification Systems for Law Enforcement Purposes"** ·
   `https://fpf.org/blog/red-lines-under-the-eu-ai-act-restricting-real-time-remote-biometric-identification-systems-for-law-enforcement-purposes/`
   Sustenta: os quatro critérios cumulativos, as três exceções, a exigência de autorização
   prévia, e o achado central de que a proibição **não** alcança descrição não biométrica.
   *Confiabilidade:* think tank de privacidade, com análise jurídica detalhada e incentivo
   contrário ao da maioria das fontes desta lista — é uma das duas únicas fontes aqui sem
   interesse comercial na tecnologia. Publicado em 07/04/2026.

9. **"Real-time open-vocabulary perception for mobile robots on edge devices: a systematic
   analysis of the accuracy-latency trade-off"** · `https://pmc.ncbi.nlm.nih.gov/articles/PMC12583037/`
   Sustenta: Jetson AGX Orin 64 GB; NanoOWL + EfficientViT-SAM a 47,51 FPS; mIoU acima de 0,84
   (até 0,9186 em FP32); YOLO-World ~26 FPS; NanoOWL limitado a frases nominais; falha total de
   segmentação em algumas configurações FP16.
   *Confiabilidade:* a melhor da lista — artigo revisado, com metodologia de medição explícita e
   sem produto a vender. É a base empírica da ressalva da disrupção 4.4.

10. **Prefeitura de São Paulo — Smart Sampa** · `https://smartsampa.prefeitura.sp.gov.br/`
    Sustenta: descrição oficial como maior sistema de monitoramento da América Latina;
    reconhecimento facial e leitura automática de placas; o app Smart Sampa Cidadão; **e a
    ausência de números no painel público**.
    *Confiabilidade:* fonte primária e institucional quanto ao que o sistema é, e omissa quanto a
    escala e resultado — a omissão foi tratada aqui como dado, não como falta de dado.

11. **Meta Newsroom — "Our AI Wearables Are 'Changing the Game' for Disabled People"** (18/05/2026)
    · `https://about.fb.com/news/2026/05/meta-ai-wearables-changing-the-game-for-disabled-people/`
    Sustenta: integração Be My Eyes nos Ray-Ban e Oakley Meta; OOrion para localizar itens, ler
    texto e detectar obstáculos; legenda ao vivo na lente do Ray-Ban Display; pesquisa de EMG com
    a Carnegie Mellon.
    *Confiabilidade:* comunicação institucional, com depoimentos escolhidos — sustenta bem a
    **existência** das funções e mal a sua **eficácia**. Nenhum número de adoção foi extraído
    daqui porque não há.

12. **"OpenGlass: Ultra-Low-Power On-Device AI Eyewear with Event-based Vision"** ·
    `https://arxiv.org/html/2606.07431v1`
    Sustenta: 11,8 h com bateria de 200 mAh; 65,6 mW médios e 96 mW de pico; 33,9 ms fim a fim;
    83,94% de acurácia entre sujeitos; modelos de menos de um milhão de parâmetros; câmera por
    evento Prophesee GENX320 e SoC GAP9.
    *Confiabilidade:* artigo com medição de hardware real e números reprodutíveis. É a base do
    cálculo de ordens de grandeza do Wildcard 1.

13. **Confidata — "ANPD e Regulação de IA no Brasil: Guia 2026-2027"** ·
    `https://confidata.com.br/blog/anpd-regulacao-ia-brasil-2026-2027`
    Sustenta: os quatro pilares de fiscalização da ANPD para 2026–2027; foco em reconhecimento
    facial e dados de crianças; três empresas no sandbox regulatório desde fev/2026 com
    resultados em dez/2026; PL 2338/2023 aprovado no Senado em dez/2024 e parado na Câmara.
    *Confiabilidade:* blog de consultoria de conformidade — secundária, e a mais fraca da lista
    em autoridade. Os fatos que sustenta são verificáveis em fonte oficial e não foram
    verificados aqui; é a razão de a nota sobre o Brasil ser declarada sub-sustentada na Seção 7.

## 12. Anexo — o levantamento bruto

### 12.1 Etapa 1 — a entrevista, e o que foi respondido

A skill exige entrevista bloqueante com seis itens, quatro obrigatórios (1, 3, 4, 5). Nesta
rodada não havia interlocutor disponível para responder ao vivo; as respostas vieram
pré-definidas com o pedido, e estão registradas abaixo literalmente como foram recebidas, para
que quem for corrigir saiba o que foi assumido e o que foi perguntado.

1. **Horizonte (obrigatório):** 2031.
2. **Público:** quem projeta mídia e interação.
3. **Recorte geográfico (obrigatório):** global, com uma nota sobre o Brasil.
4. **Descartado de início (obrigatório):** o que já é comum em produto de massa (a régua da
   disciplina). Nenhuma outra exclusão — e a confirmação explícita que a skill exige ("se a
   resposta for nada, confirme") veio junto: nenhuma outra.
5. **Viés (obrigatório):** neutro.
6. **Zona de interesse:** Percepção e mídia sintética.

Restrições adicionais recebidas fora das seis perguntas: não supor disrupção de partida
("descubra"); excluir ideias óbvias que serviriam a qualquer tema; e o critério declarado de
mudança de opinião — evidência de que a adoção já passou da maioria inicial (Rogers), ou de que
a tecnologia não rompe nada e só melhora o que existe. Este último virou, na prática, o teste
que reprovou o candidato E e rebaixou o candidato D, abaixo.

**Condição de parada:** os quatro obrigatórios respondidos → avançou para a Etapa 2.

### 12.2 Etapa 2 — buscas feitas, incluindo as que não deram em nada

Buscas executadas (WebSearch), em ordem:

1. `SAM 3 Segment Anything with Concepts Meta open vocabulary 2026` — produtiva; deu [1], [3],
   [4] e o caminho para [2].
2. `open-vocabulary detection segmentation 2026 state of the art vision foundation model` —
   parcialmente produtiva; deu contexto (Florence-2, X-Decoder, Sambor, CLIP como codificador de
   classe) mas nenhum número que eu tenha usado. Serviu para confirmar que o campo é maior que o
   SAM, e nada mais.
3. `DINOv3 Meta self-supervised vision backbone release 2025 2026` — produtiva; deu [5].
4. `EU AI Act real-time remote biometric identification ban August 2026 enforcement` —
   produtiva, mas com o conflito de datas descrito na Seção 8, item 5.
5. `OCR-free document understanding vision language model replacing OCR pipelines 2026
   DeepSeek-OCR dots.ocr` — produtiva; deu [6] e a linhagem Donut→Nougat→atual.
6. `Smart Sampa reconhecimento facial ANPD LGPD 2026 câmeras São Paulo` — produtiva em
   contexto, frustrante em dado. Resultados de imprensa citam 50 mil câmeras, 3 mil foragidos
   presos e 418 prisões em 2026, além de um caso relatado de prisão por engano num CAPS — **nada
   disso entrou no documento**, porque as páginas de imprensa não foram abertas uma a uma e a
   página oficial, que abri, não confirma número nenhum ([10]). Deixo os números aqui, no bruto,
   marcados como não verificados, porque a disciplina processa este anexo depois.
7. `Be My Eyes Meta Ray-Ban Display accessibility blind describe world 2026 visual interpreter` —
   produtiva; levou a [11]. A página da própria Be My Eyes devolveu HTTP 403 e não foi usada.
8. `data annotation market labeling jobs decline 2026 Scale AI foundation models auto-labeling` —
   **a busca mais útil da rodada, porque devolveu o contrário do que eu procurava.** Eu buscava
   evidência de declínio; vieram +281% em vagas entre 2021 e 2026 e um mercado indo de US$ 3,77 bi
   (2024) para US$ 17,1 bi (2030) a ~28% ao ano. Isso reescreveu o item 1 da Seção 7.
9. `on-device vision language model smart glasses real-time open vocabulary 2026 edge NPU
   latency` — produtiva; levou a [9] e [12]. Trouxe também um dado que não usei por não ter
   aberto a fonte: latência de tradução partindo de 700 ms e chegando a 1.400 ms após 90 minutos
   de operação contínua, por queda de throughput térmico do chip. É coerente com o argumento
   térmico do Wildcard 1, mas não está citado lá porque não abri a página.
10. `visual inspection manufacturing zero-shot VLM replacing trained defect detection models
    2026` — parcialmente produtiva. Trouxe 65,0% → 85,1% de acurácia em adaptação zero-shot a
    produto não visto, e o padrão de arquitetura híbrida (CNN como portão primário, VLM como
    camada secundária de raciocínio só nas peças sinalizadas). **Não entrou no documento** porque
    não abri nenhuma das páginas; teria sido a evidência mais forte para um efeito sobre inspeção
    industrial, que por isso ficou de fora da roda. É a lacuna mais evidente deste levantamento.
11. `Qwen3-VL open weights vision language model grounding 2026 benchmark` — pouco produtiva.
    Confirmou a existência de avaliação em RefCOCO/+/g, ODinW-13 e CountBench, e do Qwen3-VL-Seg,
    sem número que eu pudesse usar. Entrou só na lista de quem constrói.
12. `"visual grounding" hallucination open-vocabulary detection failure rate benchmark 2026
    limitations` — produtiva em textura, fraca em fonte. De onde vem o dado de que categorias
    como "travessa", "botão", "gaveta" e "brinco" ficam com Acc50 ≤ 20% (benchmark OV-VG). Tentei
    abrir o artigo e falhei (ver 12.4), então esse número está no corpo **sem numeração de
    fonte**, marcado apenas como observação de benchmark — e deveria ser tratado como o mais
    frágil da Seção 3.
13. `Brasil LGPD ANPD videomonitoramento inteligente 2026 regulamentação reconhecimento facial
    decisão` — produtiva; levou a [13]. Trouxe também que a ANPD declarou reconhecimento facial
    em área de acesso público como prioridade de fiscalização no ciclo 2024–2025, e que a consulta
    sobre biometria racha em consenso e em IA — não citado por não ter aberto as páginas.

**Condição de parada da Etapa 2:** treze fontes distintas efetivamente abertas, contra o mínimo
de oito da skill → avançou para a Etapa 3.

### 12.3 Etapa 3 — o teste de disrupção, incluindo o reprovado

**Candidato A — segmentação/detecção por conceito.**
(1) Torna possível encontrar e delimitar todas as instâncias de um conceito nomeado em texto
livre sem treinar detector para aquela classe — antes, classe nova significava dataset novo.
(2) Invalida o ciclo anotação→treino→deploy como caminho obrigatório, o ofício de desenhar
máscara, e o produto "detector sob medida". (3) Agora porque o SA-Co (nov/2025) não existia, e a
fusão visão-linguagem em escala tampouco. → **Passa nas três. Disrupção-raiz.**

**Candidato B — documento sem OCR.**
(1) Torna possível extrair estrutura de qualquer documento fotografado sem template e sem cadeia
de etapas. (2) Invalida a indústria de pipeline OCR + template, a cobrança por página de API
gerenciada e a digitação/conferência como fluxo. (3) Agora por compressão de token visual e por
modelos compactos com licença permissiva. → **Passa nas três. Disrupção-raiz.**

**Candidato C — representação densa sem rótulo (DINOv3).**
(1) Torna possível ter percepção em domínio que nunca teve rótulo. (2) Invalida a tese do dataset
rotulado proprietário como fosso. (3) Agora por Gram anchoring e escala auto-supervisionada
estável, mais liberação sob licença comercial. → **Passa nas três. Disrupção-raiz**, com a
observação de que se sobrepõe parcialmente ao candidato A: ambos atacam a dependência de rótulo.
A distinção que os mantém separados é que A substitui o rótulo por **linguagem** e C dispensa o
rótulo por **auto-supervisão** — são mecanismos diferentes com o mesmo alvo.

**Candidato D — percepção aberta em tempo real na borda.**
(1) Torna possível rotular continuamente o campo de visão sem nuvem. (2) Ameaça a arquitetura
"captura local, entende na nuvem" e a premissa regulatória centrada em biometria — nomeável, sim.
(3) Agora por destilação e compilação (NanoOWL, NanoSAM, TensorRT) e NPU móvel. Mas a evidência
levantada contradiz a premissa: o modelo que tem o desempenho não é o que roda na borda ([3],
[9]), e o que cabe num óculos é quatro ordens de grandeza menor ([12]). → **Emergente. Entra na
Seção 4 com ressalva explícita**, conforme a regra da skill. Registro que este candidato quase
entrou como disrupção-raiz, ver Seção 8, item 4.

**Candidato E — classificação de imagem, detecção com classes fixas e OCR tradicional.**
(1) Torna possível o quê que já não era possível? Nada. São mais baratos, mais rápidos e mais
precisos do que eram, e nada mais. → **Falha na pergunta 1. Tecnologia madura.** Não entra na
Seção 4; entra na Seção 3 como baseline de comparação. Esta é a régua da disciplina aplicada.

**Candidato F — ORTHOS (simulação de resposta emocional a manchete).**
Descartado como disrupção por outra razão, e a razão importa: **não é percepção de vocabulário
aberto.** É predição de estado afetivo a partir de texto, não segmentação por conceito a partir
de imagem. Entraria no mapa só por ser interessante, e "interessante" não é critério. Foi
realocado para a Seção 6 como sinal fraco, que é onde ele de fato pertence — porque aponta a
direção em que o vocabulário aberto pode se estender, sem ser um caso dele.

**Condição de parada:** três disrupções aprovadas, uma emergente com ressalva, duas rejeitadas
com justificativa → avançou para a Etapa 4.

### 12.4 Fontes que tentei abrir e não consegui — e o que não foi citado por causa disso

- `https://arxiv.org/pdf/2510.18234` (DeepSeek-OCR, *Contexts Optical Compression*) — extração
  devolveu estrutura binária do PDF. **Nenhum número deste artigo foi usado.** Ver Seção 8, item
  1, para o que quase aconteceu.
- `https://arxiv.org/pdf/2310.14374` (OV-VG, benchmark de *open-vocabulary visual grounding*) —
  mesma falha. Consequência: os números de Acc50 por categoria estão no corpo apenas como
  observação de busca, sem numeração de fonte, e devem ser tratados como o dado mais frágil do
  documento.
- `https://www.bemyeyes.com/news/be-my-eyes-and-meta-launch-new-accessibility-functions/` —
  HTTP 403. O conteúdo sobre a parceria Be My Eyes + Meta foi obtido de [11], que é a fonte da
  Meta, não da Be My Eyes. Consequência: a descrição da parceria neste documento tem apenas o
  ponto de vista de uma das partes.

### 12.5 Efeitos cortados na Etapa 4, e por quê

- **"Óculos com percepção contínua substituem o smartphone como interface primária até 2031."**
  Cortado: exige encadear duas suposições independentes e não testadas (o Wildcard 1 se
  concretizar **e** o abandono de outro dispositivo). Pela regra de parada da Etapa 4, isso é
  especulação de especulação. Ficou na Seção 6 como parte do Wildcard 1, sem a parte da
  substituição.
- **"O emprego de vigilância humana em CFTV desaparece."** Cortado por falta de caminho
  rastreável: não consigo narrar em uma frase por que ele decorre do vocabulário aberto e não da
  automação de videomonitoramento em geral, que já vinha antes e é outra coisa. Além disso
  colidiria com a evidência de [7], que mostra trabalho de supervisão crescendo, não sumindo.
- **"Inspeção industrial migra para zero-shot e elimina a engenharia de visão de fábrica."**
  Cortado por motivo de disciplina de fonte, e não de plausibilidade: a busca 10 trouxe evidência
  razoável (65,0% → 85,1% em adaptação a produto não visto; arquitetura híbrida com CNN como
  portão primário) e eu não abri nenhuma das páginas. Escrever o efeito com esse lastro seria
  citar o que não li. **Este é o buraco mais visível do mapa** — a automação de trabalho visual
  de inspeção, triagem e contagem era uma das perguntas de primeira ordem que a própria descrição
  do tema levanta, e ela está ausente da roda.
- **"A anotação desaparece."** Cortado e reescrito, não por regra de derivação, mas por evidência
  contrária — ver Seção 8, item 3. O que sobrou é e1.1.1, que fala de substituição de categoria
  profissional e está marcado com confiança baixa, que é o que a evidência sustenta.
- **"Toda imagem publicada passa a ser indexada por atributo por padrão pelas plataformas."**
  Cortado como efeito e realocado para dentro de e6.1: como efeito autônomo, exigia supor uma
  decisão comercial de plataforma que nenhuma fonte deste levantamento sustenta.

### 12.6 Etapa 5 — a contestação, na forma bruta em que foi escrita antes de virar Seção 7

1. Extrapolação linear → **e1.1**. Motivo: é a curva do SAM 1 e 2 desde 2023, medida em [2]
   (9,7 s → <2 s). E a mesma fonte diz que o modelo não escolhe o que rotular, que é o gargalo
   real (36% dos dados anotados não chegam à produção).
2. Velocidade sem caso comparável → **e2 em 2028**. Comparável: OCR comercial existe desde os
   anos 1950–1970 e o formulário estruturado sobreviveu mais de quarenta anos a ele, porque a
   barreira é responsabilidade jurídica, não reconhecimento de caractere.
3. Disrupção que pode cair → **4.4 (borda em tempo real)**. Evidência contrária dentro das
   próprias fontes: [3] (edge impraticável), [9] (o rápido é o destilado; FP16 falha de vez),
   [12] (o que cabe é sub-milhão de parâmetros). Cai e4, e4.1, e4.2, e4.3 e três efeitos de
   terceira ordem. Sobra um mapa sobre trabalho.
4. Viés → **fonte quase toda de quem vende**. Meta, Roboflow, Voxel51, Spheron, herohunt. As duas
   sem interesse comercial ([8] e, parcialmente, [9]) são jurídica e acadêmica. Inflou e3/e3.2,
   cuja tese principal vem de um post da Meta sobre o modelo da Meta. E o Brasil está
   sub-sustentado: [10] não dá números e [13] é consultoria.

**Condição de parada da Etapa 5:** um efeito concreto nomeado em cada um dos quatro itens →
avançou para a Etapa 6.

### 12.7 Checagem final da Etapa 8, com os números impressos

Executada antes da entrega, conforme a condição de parada final da skill — e com os números à
vista, e não com um "passou", pela razão registrada no DUVIDAS.md item 3.

- Seções `^## ` encontradas: **12** (esperado: 12).
- Títulos conferidos um a um contra a lista literal da Etapa 8b: **conferem**, incluindo o ano no
  título da Seção 9 ("Três cenários para 2031").
- Campos do frontmatter: **18** presentes, nenhum omitido. Registro do erro, porque ele é do
  mesmo tipo do item 3 do meu DUVIDAS.md: eu havia escrito **20** aqui, de cabeça, antes de
  rodar a contagem. A contagem deu 15 numa primeira passada, porque a expressão que usei para
  achar os campos não casava com nome contendo dígito — e os três `efeitos_ordem_N` ficaram de
  fora. Nem o número que escrevi nem o primeiro que o script imprimiu estavam certos; o
  correto é 18. Um "checagem OK" teria escondido as duas coisas; `publico` preenchido (não `null`),
  `publico_ok: false` mantido por padrão, já que não houve confirmação explícita de autorização.
- Bloco `roda:`: **4** disrupções; profundidade máxima **3** níveis, nem mais nem menos; todos os
  nós com `sinal`, `prazo` e `confianca`; ids hierárquicos únicos.
- Contagem de efeitos: ordem 1 = **6** (e1, e2, e3, e4, e5, e6); ordem 2 = **14**; ordem 3 =
  **17**. Confere com o frontmatter.
- Terceira ordem com `confianca: baixa`: **17 de 17** — o que a skill descreve como esperado, e
  não como falha.
- Itens da Seção 4 que falharam no teste da Etapa 3: **nenhum**; o único que não passou
  integralmente (4.4) está declarado como emergente com ressalva no primeiro parágrafo da própria
  subseção, conforme a regra.
- Seção 7 com os quatro itens nomeando efeito específico (e1.1, e2, disrupção 4.4, e3/e3.2):
  **sim**.
- Fontes da Seção 11 correspondendo a URL efetivamente aberta: **13 de 13**; as três tentativas
  falhas estão em 12.4 e não aparecem na Seção 11.
