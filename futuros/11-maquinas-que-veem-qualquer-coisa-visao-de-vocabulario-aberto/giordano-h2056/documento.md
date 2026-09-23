---
tema: "Máquinas que veem qualquer coisa: visão de vocabulário aberto"
slug: maquinas-que-veem-qualquer-coisa-visao-de-vocabulario-aberto
autor_login: grec
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-22
horizonte: 2056
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 15
efeitos_ordem_2: 23
efeitos_ordem_3: 19
tecnologias_citadas: [SAM, SAM 2, SAM 3, SAM 3.1, SA-Co, DINOv2, DINOv3, Grounding DINO, YOLO-World, Donut, olmOCR, Qwen2-VL, Qwen3-VL, PaddleOCR-VL, MinerU, GLM-OCR, EasyOCR, Florence-2, IndusAgent, Skyvern, VisionClaw, Meta Ray-Ban, NameTag, Be My AI, Google Lens, GeoSpy, CVAT, Label Studio, Roboflow Label Assist, Smart Sampa, ORTHOS, transformers.js]
fontes: 25
confianca: baixa
experimento: "Pergunte à câmera: um detector de vocabulário aberto no navegador, testado sobre fotos da própria sala, com o registro público do que cada pessoa pediu para a máquina encontrar"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Até meados da década de 2020, um sistema de visão reconhecia o que tinha sido treinado para
reconhecer. Modelos como SAM 3, Grounding DINO e DINOv3 inverteram o contrato: a máquina
passa a procurar o que se descreve em texto. Este mapa, com horizonte em 2056, parte de três
rupturas — **percepção por conceito** (detectar e segmentar o que se nomeia), **documento lido
como imagem** (o PDF, a foto e o manuscrito entram sem estrutura prévia) e **percepção contínua
em primeira pessoa** (óculos que anotam o campo de visão o tempo todo). As consequências mais
fortes não estão no ganho de precisão, e sim em quem deixa de ser necessário: o rotulador,
o digitador, o formulário e o sinal que avisava ao terceiro que ele estava sendo visto.
A vigilância muda de natureza — deixa de procurar um rosto de lista e passa a procurar uma
descrição —, e a regulação brasileira, que trata de reconhecimento facial, já nasce defasada.
Confiança geral baixa: trinta anos é mais que o dobro do intervalo entre o primeiro smartphone
e hoje.

## 2. O tema

**O que é.** Visão de vocabulário aberto é a família de sistemas que recebem, junto com a
imagem, uma descrição em linguagem — "todos os capacetes", "a pessoa de casaco verde", "o
campo 'valor total' desta nota" — e devolvem onde aquilo está, com caixa, máscara ou texto
estruturado, sem terem sido treinados para aquela categoria. Inclui segmentação por conceito
(SAM 3), detecção por descrição (Grounding DINO), características visuais aprendidas sem rótulo
(DINOv2/DINOv3) e compreensão de documento sem OCR em pipeline (Donut e a linhagem de modelos
de visão-linguagem que leem páginas).

**Onde encosta em mídia e interação.** Em três lugares. Na produção de mídia: edição de vídeo
por conceito, rotoscopia que deixa de ser manual, objetos de cena endereçáveis. Na interface: o
formulário, a tela e a sinalização física deixam de ser feitos para o olho humano e passam a
ser lidos por máquina. E no espaço social: a câmera vestível que vê "qualquer coisa" muda o que
significa estar num lugar com outras pessoas.

**Por que um mapa de futuro, e não um estado da arte.** Porque o interessante não é a métrica
do próximo modelo, mas o que deixa de valer quando o vocabulário deixa de ser fixo: o dataset
como ativo, o rotulador como ofício, o formulário como condição de leitura, a luz de gravação
como aviso. Isso só aparece derivando consequências.

**Premissas desta rodada (briefing).** Modo MAPA, não interativo. Horizonte 2056. Público: quem
projeta mídia e interação. Recorte global, com nota sobre o Brasil ao longo do texto (vigilância
urbana, PL 1828/2023, cartórios, LBI). Descartado de início: o que já é comum em produto de
massa. Disrupção suspeita: nenhuma. Viés: neutro, com um cenário de cada lado. Ideias óbvias
excluídas: as que servem para qualquer tema. Falseador pedido pelo autor: evidência de que a
adoção já passou da maioria inicial (Rogers) ou de que a tecnologia só melhora o que existe — os
dois entram como critério no §6 (seção 7). Profundidade: três ordens. Zona de interesse:
Percepção e mídia sintética.

**Fronteiras com os vizinhos.** Reconstrução 3D e renderização neural são o tema 10; o robô que
usa visão para agir é o tema 9; a internet usada por agentes é o tema 4. Onde este mapa encosta
nesses temas (agentes que veem a tela, e9), a fronteira está marcada.

**Leitura de "horizonte 2056".** Com trinta anos, a janela inclui efeitos de 3ª ordem dentro do
horizonte — nenhum prazo desta roda passa de 2056. Em compensação, a confiança de toda a cadeia
é rebaixada em relação a mapas de cinco anos: a classe de referência mais longa que usei
(óculos com câmera, de 2013 até hoje, ainda abaixo de 10%) cobre só treze anos.

## 3. Onde isso está hoje

Âncora feita com acesso à web em 22/09/2026: onze buscas (em português e inglês) e vinte e cinco páginas abertas
(lista na seção 11; buscas e fontes que não abriram na seção 12).

### 3.1 O que já existe e funciona

- **SAM 3** (Meta, arXiv 2511.16719, v1 de 20/11/2025, revisada em 28/03/2026): detecta,
  segmenta e rastreia **todas as instâncias** de um conceito dado por frase curta, exemplo
  visual ou ambos, em imagem e vídeo. Os autores relatam 4 milhões de rótulos de conceito no
  conjunto de treino e o dobro da acurácia dos sistemas anteriores no benchmark SA-Co. Pesos,
  código e benchmark abertos [1][2].
- **SAM 3.1** (27/03/2026): de 16 para 32 quadros por segundo numa H100 para vídeo com número
  médio de objetos; 30 ms por imagem com mais de 100 objetos numa H200. Já está em produto da
  Meta: Edits (efeitos em vídeo), Vibes, "View in Room" no Marketplace [1].
- **Roboflow** integrou SAM 3 no dia do lançamento (19/11/2025): Label Assist e rotulagem
  automática por frase, Workflows, inferência em nuvem e em borda [3].
- **Grounding DINO** (IDEA Research, arXiv 2303.05499): detector "de conjunto aberto" que acha
  objetos por nome de categoria ou expressão referencial; 52,5 AP em COCO sem nenhum dado de
  treino do COCO [4].
- **DINOv3** (Meta, 14/08/2025): 7 bilhões de parâmetros, 1,7 bilhão de imagens, aprendizado
  auto-supervisionado, licença comercial. Um backbone congelado supera soluções especializadas
  em detecção e segmentação. Caso citado: o World Resources Institute reduziu o erro médio de
  altura de copa de árvores no Quênia de 4,1 m para 1,2 m, usado em verificação de finanças
  climáticas [5].
- **Leitura de documento sem OCR em pipeline.** Donut (NAVER, ECCV 2022) nomeou os três
  problemas do OCR em cadeia: custo, rigidez para idiomas e tipos de documento, e propagação de
  erro [6]. Em 2025, o olmOCR (Ai2), sobre Qwen2-VL-7B, lê equações, tabelas e manuscrito em
  ordem de leitura por cerca de US$ 190 por milhão de páginas, com pesos, dados e código
  abertos [7]. Em agosto de 2026, no OmniDocBench v1.6, modelos dedicados de 0,9 bilhão de
  parâmetros lideram (PaddleOCR-VL-1.6 com 96,34%) contra 89,78% do Qwen3-VL-235B [8].
- **Automação por visão.** Skyvern automatiza navegador olhando a tela, sem seletores; 23,1 mil
  estrelas, AGPL-3.0, 64,4% no WebBench (autorrelatado) [9].
- **Acessibilidade.** Be My Eyes (2015) tem cerca de 1 milhão de usuários cegos ou com baixa
  visão e mais de 10 milhões de voluntários; o Be My AI (março de 2023, sobre GPT-4) teve 1
  milhão de sessões nas duas primeiras semanas; integração com os óculos Ray-Ban Meta em 2024,
  pilotos com Hilton e Tesco [10].
- **Óculos com câmera e IA.** A Meta vendeu 7 milhões de pares em 2025 [11]; a IDC estima 13,6
  milhões de óculos sem tela em 2026, 27,3 milhões em 2030, a Meta com 69,2% no 1º trimestre de
  2026 e preço médio caindo de US$ 376 para cerca de US$ 229 [12].
- **Vigilância urbana no Brasil.** Smart Sampa: 50 mil câmeras, 20 mil com reconhecimento
  facial, 3 mil foragidos presos desde setembro de 2024 (dado da prefeitura via Band, 14/04/2026)
  [13]. Nota técnica de Lapin, Instituto Peregum e Rede Liberdade: 82 pessoas levadas a
  delegacia indevidamente entre 21/11/2024 e 21/05/2025, 28% delas por inconsistência do
  reconhecimento facial; custo mensal de R$ 9,8 milhões [14].

### 3.2 O que existe e ainda não funciona

- **Conceito fino fora do domínio.** A própria Meta registra que SAM 3 falha em conceitos que
  exigem conhecimento de domínio ("plaqueta") e em frases longas e compostas sem acoplar um
  modelo multimodal; a latência em vídeo cresce com o número de objetos rastreados [1].
- **Inspeção industrial.** Modelos multimodais em detecção de anomalia de vocabulário aberto
  sofrem de "raciocínio desalinhado ao domínio" e "inferências estruturais alucinadas"; o
  IndusAgent (arXiv 2605.20682, 20/05/2026) tenta contornar com ferramentas e aprendizado por
  reforço, avaliado em cinco benchmarks (MVTec-AD, VisA, MPDD, DTD, SDD) [15].
- **Rotulagem automática não substitui toda a rotulagem.** Modelos treinados só com rótulos
  automáticos chegam a 90–95% da acurácia dos treinados com rótulo humano "em muitos casos", mas
  a distância cresce em conjuntos de cauda longa como o LVIS; a recomendação é manter 5–10% de
  rótulos manuais para classes raras [16].
- **Modelo grande não lê melhor documento que modelo dedicado** — ver o OmniDocBench acima [8].
- **Óculos sempre ligados** ainda são pesquisa: o VisionClaw (arXiv 2604.03486, abril de 2026)
  acopla percepção egocêntrica contínua a execução de tarefas nos Ray-Ban Meta, com estudo de
  laboratório de 12 pessoas e implantação longitudinal com 5 [17].

### 3.3 Quem constrói

Meta FAIR (SAM, DINO, óculos), IDEA Research (Grounding DINO), Alibaba (Qwen-VL) e Baidu
(PaddleOCR-VL), NAVER (Donut), Ai2 (olmOCR), Roboflow (integração e distribuição para
desenvolvedores), Skyvern (automação por visão), Be My Eyes (acessibilidade). Do lado de quem
restringe: Parlamento Europeu (AI Act), autoridades da Noruega e da CNIL francesa [11][18]; no
Brasil, a Câmara (PL 1828/2023) [19] e a sociedade civil (Data Privacy Brasil, Coalizão Direitos
na Rede) [20].

### 3.4 Números de adoção

- SAM 3 / SAM 3.1: **sem número de adoção encontrado** (a Meta não divulga) [1].
- Busca visual: o Google Lens já fazia "quase 20 bilhões de buscas visuais por mês" em outubro
  de 2024 [21]. É o número que recusa a busca visual como raiz (seção 4).
- Óculos: 7 milhões vendidos pela Meta em 2025 [11]; 13,6 milhões de unidades previstas para
  2026 [12] — abaixo de 1% da população adulta mundial, portanto "adoção precoce".
- Acessibilidade: ~1 milhão de usuários do Be My Eyes [10].
- Leitura de documento: sem número de páginas processadas por ano encontrado; há custo (US$ 190
  por milhão de páginas) [7].

### 3.5 Regulação em vigor

AI Act, art. 5, aplicável por inteiro desde agosto de 2026: proíbe inferir emoção em local de
trabalho e escola, categorização biométrica para deduzir raça, orientação sexual, religião etc.,
raspagem não direcionada de rostos da internet ou de CFTV, e limita a identificação biométrica
remota em tempo real pela polícia a três finalidades, com autorização prévia [18]. No Brasil, o
PL 1828/2023 (dep. Rodrigo Gambale) autoriza reconhecimento facial em estações, vagões, vias e
prédios públicos, "com intervenção humana", e foi pautado em 14/07/2026 [19]; a Data Privacy
Brasil argumenta que ele não delimita usos nem compartilhamento [20].

## 4. As disrupções-raiz

### 4.0 Candidatos recusados

- **Busca visual por foto (Google Lens e similares).** Recusado como raiz: quase 20 bilhões de
  buscas por mês em 2024 [21] — está na maioria. Tratado como contexto: é a prova de que o
  público já aceita apontar a câmera para perguntar.
- **Classificação de imagem e detecção com classes fixas.** Recusado: maduro, em produto de massa
  há mais de uma década.
- **OCR tradicional de texto impresso.** Recusado: maduro. A raiz R2 não é "OCR melhor"; é a
  dispensa da estrutura prévia (ver 4.2).
- **Reconhecimento facial 1:N pela polícia.** Recusado como raiz: é classe fixa (a lista de
  procurados) e já está implantado em escala urbana no Brasil [13]. Entra como contexto e como
  ponto de partida do efeito e4, que é o que muda nele.
- **Reconhecimento de emoção por rosto.** Recusado como raiz: não é vocabulário aberto, e o que
  ele rompe depende de uma validade científica que não verifiquei nesta rodada. Entra como sinal
  fraco (ORTHOS, seção 6).

### 4.1 R1 — Percepção por conceito: detectar, segmentar e rastrear o que se nomeia, sem treino por classe

1. **O que rompe.** O contrato "um modelo por classe, um dataset por modelo". Deixa de valer a
   suposição de que ensinar uma máquina a ver algo exige coletar e rotular exemplos daquilo — e
   com ela, o dataset rotulado como ativo competitivo e a rotulagem como ofício de volume.
2. **Por que agora.** Três pré-condições só apareceram juntas entre 2023 e 2025: backbones
   auto-supervisionados em escala de bilhões de imagens (DINOv2/v3) [5]; alinhamento visão-texto
   usado para ancorar frases em regiões (Grounding DINO, 2023) [4]; e um conjunto de milhões de
   conceitos rotulados com máscara (SA-Co, 4 milhões de rótulos) que tornou o treino possível
   [2]. Há cinco anos existia só uma das três.
3. **Onde está na difusão.** Produto de nicho → adoção precoce entre desenvolvedores de visão
   (Roboflow, pesos abertos) e dentro de produtos da Meta [1][3]. Emergente.
4. **O que falta.** Precisão em conceito fino e de domínio; custo por objeto em vídeo; rodar em
   dispositivo sem GPU de datacenter; benchmarks setoriais que digam quando é seguro usar.

### 4.2 R2 — Documento lido como imagem: a página entra sem estrutura prévia

1. **O que rompe.** A exigência de que a informação chegue estruturada para ser processada — o
   formulário de campos fixos, o "modelo oficial" de requerimento, o posto de digitação e
   conferência. Não é OCR melhor: é a leitura de layout, tabela, manuscrito e ordem de leitura
   numa etapa só, que torna desnecessário desenhar o documento para a máquina.
2. **Por que agora.** Modelos de visão-linguagem pequenos (0,9 bilhão de parâmetros) passaram os
   grandes em leitura de documento [8], e o custo caiu para centenas de dólares por milhão de
   páginas com pesos abertos [7]. Em 2021 o Donut provava a ideia [6]; o custo e a precisão de
   hoje não existiam.
3. **Onde está na difusão.** Produto de nicho (pipelines de ingestão para LLMs, back-office de
   algumas empresas). OCR clássico é maioria; leitura de página por VLM, não.
4. **O que falta.** Trilha de auditoria para cada campo extraído; aceitação legal em trâmite com
   fé pública; tratamento do erro silencioso (o modelo inventa um campo plausível).

### 4.3 R3 — Percepção contínua em primeira pessoa: a câmera vestível que anota o campo de visão

1. **O que rompe.** Duas suposições. A de que ver com máquina é um ato discreto e visível (tirar
   uma foto, apontar o celular). E a de que o terceiro sabe quando está sendo processado — a luz
   de gravação dos Ray-Ban Meta não acende quando a câmera é usada para consulta de IA [11].
2. **Por que agora.** Óculos com câmera passaram de fracasso de nicho a milhões de unidades por
   ano [12]; a visão aberta roda em tempo quase real [1]; e há protótipos de agente sempre
   ligado nos óculos [17]. Promovido a raiz (em mapas de horizonte curto ele é wildcard) porque
   em trinta anos a questão deixa de ser "se" e passa a ser "sob que regras".
3. **Onde está na difusão.** Adoção precoce (<10%) para os óculos; laboratório para o modo
   sempre ligado. Por isso toda a cadeia de R3 derivada do modo contínuo (e12) tem sinal fraco.
4. **O que falta.** Bateria e computação para processar continuamente; aceitação social;
   resolução do conflito legal com o terceiro (AI Act, BIPA nos EUA, LGPD).

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "R1 — Percepção por conceito: detectar, segmentar e rastrear o que se nomeia, sem treino por classe"
    efeitos:
      - id: e1
        ordem: 1
        efeito: Equipes de produto passam a especificar um detector escrevendo uma frase, e o protótipo de visão sai em horas em vez de meses de coleta e rotulagem
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A rotulagem de imagem de volume encolhe e o trabalho humano que resta é rotular a cauda longa e conferir as exceções do modelo
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Polos de anotação terceirizada no Quênia e nas Filipinas perdem a base de volume, e a renda da rotulagem migra para especialistas com credencial de domínio
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: CVAT, Label Studio e similares deixam de ser o centro do pipeline e viram painéis de auditoria dos erros do modelo fundacional
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: O dataset de treino deixa de ser o ativo das empresas de visão e o valor passa para conjuntos privados de avaliação que mostram onde o modelo falha
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Editores de vídeo passam a selecionar por conceito, e a máscara quadro a quadro deixa de ser trabalho manual
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: A rotoscopia deixa de ser o posto de entrada da pós-produção, e o iniciante passa a supervisionar a consistência de máscaras em planos longos
            sinal: medio
            prazo: 2035
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Estúdios de efeitos visuais perdem o degrau de aprendizado por repetição e passam a formar compositores revisando planos que o modelo errou
                sinal: fraco
                prazo: 2042
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Todo objeto em vídeo vira endereçável por nome, e tocar no que aparece em cena passa a ser gramática comum de streaming e publicidade
            sinal: medio
            prazo: 2036
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: O product placement passa a ser vendido por objeto segmentado e renegociado depois da publicação, trocando a marca em cena conforme o espectador
                sinal: fraco
                prazo: 2045
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: Inspeção, triagem e contagem visual passam a ser configuradas por descrição em pequenas fábricas, cooperativas e projetos ambientais que nunca teriam modelo sob medida
        sinal: medio
        prazo: 2036
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Auditorias de qualidade passam a exigir o registro da frase de inspeção usada em cada lote, porque o que não foi pedido não foi procurado
            sinal: fraco
            prazo: 2040
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Disputas de recall passam a girar em torno da descrição usada na inspeção, e a frase vira peça de responsabilidade civil
                sinal: fraco
                prazo: 2046
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: A medição por imagem de satélite e drone passa a sustentar contratos de crédito de carbono e desmatamento sem equipe de campo
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Comunidades e ONGs rodam os mesmos modelos abertos sobre as mesmas imagens para contestar a medição oficial, e a contraperícia por imagem vira prática de movimento social
                sinal: fraco
                prazo: 2042
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Câmeras urbanas passam de procurar rostos de uma lista para procurar descrições, e o alvo deixa de precisar estar num banco de dados
        sinal: medio
        prazo: 2034
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: O erro de abordagem passa a atingir quem se parece com a descrição, e o viés se desloca do rosto para a frase escrita pelo operador
            sinal: medio
            prazo: 2036
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Defensorias públicas passam a pedir em juízo a frase de busca que motivou a abordagem, e a descrição vira prova contestada
                sinal: fraco
                prazo: 2042
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Leis como o PL 1828/2023, escritas para reconhecimento facial, ficam sem alcance sobre busca por descrição de roupa, objeto ou comportamento
            sinal: medio
            prazo: 2032
            confianca: media
      - id: e5
        ordem: 1
        efeito: A falha confiante em conceito fino provoca erros de automação em uso crítico e leva compradores a exigir validação por domínio antes de implantar
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Quem mantém benchmarks setoriais de saúde e indústria vira porteiro da adoção, e funcionar na demo deixa de bastar para vender
            sinal: medio
            prazo: 2036
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Setores sem benchmark próprio, como patrimônio e artesanato, ficam fora da visão aberta confiável, e a raiz avança na velocidade dos benchmarks e não dos modelos
                sinal: fraco
                prazo: 2045
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: Com pesos abertos mas custo de GPU de datacenter, o uso real da visão aberta se concentra em APIs de poucas plataformas
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Rodar visão aberta no dispositivo vira ponto de disputa, porque a consulta local não deixa rastro e a consulta por API registra o que cada um pediu para ver
            sinal: fraco
            prazo: 2038
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: O histórico de consultas visuais passa a ser requisitado em processos judiciais como hoje é o histórico de busca
                sinal: fraco
                prazo: 2045
                confianca: baixa
  - disrupcao: "R2 — Documento lido como imagem: a página entra sem estrutura prévia"
    efeitos:
      - id: e7
        ordem: 1
        efeito: Empresas e órgãos públicos deixam de exigir que o documento chegue estruturado, e o PDF escaneado, a foto da nota e o manuscrito entram direto no sistema
        sinal: forte
        prazo: 2032
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O formulário de campos fixos deixa de ser interface de extração e sobrevive só onde serve para orientar a pessoa ou registrar consentimento
            sinal: medio
            prazo: 2038
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A interoperabilidade entre instituições deixa de morar no formato padronizado e passa a morar no modelo que lê, e quem controla o leitor controla a interoperabilidade
                sinal: fraco
                prazo: 2048
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: O posto de digitação e conferência em bancos, BPO de back-office e cartórios encolhe para supervisão de exceções
            sinal: medio
            prazo: 2036
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: A fé pública muda de objeto e o que se certifica deixa de ser a transcrição correta e passa a ser a leitura feita por um leitor auditado
                sinal: fraco
                prazo: 2046
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: Acervos inteiros de manuscritos, jornais e processos viram consultáveis em linguagem natural sem projeto de transcrição
        sinal: medio
        prazo: 2034
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Documentos que eram privados apenas por darem trabalho de ler, como prontuários e processos antigos escaneados, passam a ser minerados
            sinal: fraco
            prazo: 2040
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: A ANPD e os tribunais brasileiros passam a tratar a publicação de acervo escaneado como tratamento em massa de dado pessoal, com avaliação de impacto antes de digitalizar
                sinal: fraco
                prazo: 2044
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: Agentes que leem a tela preenchem sistemas legados sem API, e integrar dois sistemas deixa de exigir desenvolvimento
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: Portais de serviço público passam a receber a maior parte dos pedidos de robôs, e a verificação visual de que há um humano do outro lado perde a função
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: Governos passam a desenhar o portal para o leitor de máquina primeiro, e a tela para humanos vira camada secundária de acessibilidade
                sinal: fraco
                prazo: 2045
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: O erro silencioso de leitura, um valor trocado ou um campo inventado sem OCR intermediário para auditar, faz bancos e saúde manterem pipelines com etapa explícita de OCR
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Contratos de leitura documental passam a exigir que cada campo extraído venha com a região da imagem de onde saiu
            sinal: fraco
            prazo: 2036
            confianca: media
      - id: e11
        ordem: 1
        efeito: Fornecedores de captura documental, BPO de digitação e cartórios, que ganham por página ou por ato, defendem a exigência legal de conferência humana
        sinal: fraco
        prazo: 2034
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: No Brasil, atos com fé pública continuam exigindo conferência humana por lei enquanto o setor privado já dispensou, e o mesmo documento passa a ter dois regimes de leitura
            sinal: fraco
            prazo: 2040
            confianca: baixa
  - disrupcao: "R3 — Percepção contínua em primeira pessoa: a câmera vestível que anota o campo de visão"
    efeitos:
      - id: e12
        ordem: 1
        efeito: Ver com máquina deixa de ser um ato discreto e vira fluxo, com o assistente dos óculos anotando o campo de visão e o usuário consultando depois
        sinal: forte
        prazo: 2036
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: A memória do cotidiano passa a ser terceirizada a um registro visual indexado, e desacordos domésticos e de trabalho passam a ser resolvidos consultando o que os óculos viram
            sinal: fraco
            prazo: 2042
            confianca: baixa
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: O testemunho ocular perde peso diante do registro vestível, e tribunais passam a requisitar o log dos óculos de partes e testemunhas
                sinal: fraco
                prazo: 2050
                confianca: baixa
          - id: e12.2
            ordem: 2
            efeito: Sinalização, embalagem e vitrine passam a ser desenhadas para serem lidas pelo assistente do usuário, e não pelo olho
            sinal: fraco
            prazo: 2040
            confianca: media
            efeitos:
              - id: e12.2.1
                ordem: 3
                efeito: Espaços físicos se dividem em legíveis e opacos por projeto, com lojas e museus vendendo legibilidade e clínicas, templos e clubes cobrando opacidade
                sinal: fraco
                prazo: 2048
                confianca: baixa
      - id: e13
        ordem: 1
        efeito: Pessoas cegas e com baixa visão passam a ter descrição contínua do ambiente pelos óculos, em vez de foto pedida a cada vez
        sinal: forte
        prazo: 2034
        confianca: alta
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: Donos de hotéis, lojas e transporte passam a oferecer acessibilidade pelo dispositivo do usuário em vez de adaptar o espaço, deslocando a obrigação para quem usa e para o fabricante
            sinal: medio
            prazo: 2040
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: A Lei Brasileira de Inclusão passa a ser disputada sobre se o dispositivo do usuário cumpre a obrigação do espaço, com risco de retirada de adaptações físicas
                sinal: fraco
                prazo: 2048
                confianca: baixa
          - id: e13.2
            ordem: 2
            efeito: Quem desenha descritores contínuos precisa decidir o que calar sobre rostos, corpos e expressões de terceiros diante do usuário cego
            sinal: fraco
            prazo: 2036
            confianca: media
      - id: e14
        ordem: 1
        efeito: O terceiro no campo de visão perde o aviso de que está sendo processado, porque a consulta de IA pela câmera não acende a luz de gravação
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: Escolas, hospitais e repartições passam a barrar óculos com câmera na entrada, como já fizeram as escolas de Oslo e o ICE
            sinal: forte
            prazo: 2032
            confianca: media
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: Acessórios que confundem a visão aberta e aplicativos que detectam óculos por perto passam a ser item comum de quem circula na cidade
                sinal: medio
                prazo: 2045
                confianca: baixa
          - id: e14.2
            ordem: 2
            efeito: O consentimento de quem aparece na imagem passa a ser negociado entre dispositivos, com o celular de quem passa emitindo um pedido de exclusão que os óculos respeitam ou não
            sinal: fraco
            prazo: 2044
            confianca: baixa
            efeitos:
              - id: e14.2.1
                ordem: 3
                efeito: Quem não carrega aparelho não emite pedido de exclusão e fica mais exposto, e a privacidade na rua vira função de ter dispositivo
                sinal: fraco
                prazo: 2050
                confianca: baixa
      - id: e15
        ordem: 1
        efeito: A União Europeia pelo AI Act, a Noruega e a CNIL restringem identificação e inferência de emoção por câmera, e fabricantes passam a desligar funções por país
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: O mesmo par de óculos passa a ver coisas diferentes em cada jurisdição, e o vocabulário que se pode pedir à câmera vira parâmetro legal
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: Modelos locais sem restrição de vocabulário circulam em paralelo, e a regra passa a valer mais para empresas do que para indivíduos
                sinal: fraco
                prazo: 2044
                confianca: baixa
```

### 5.1 Os mecanismos, efeito por efeito

**R1 — percepção por conceito.**

- **e1** porque SAM 3 e Grounding DINO aceitam a categoria como texto [2][4], e a Roboflow já
  oferece rotulagem e pipeline por frase [3], o custo fixo de "começar um projeto de visão"
  deixa de ser a coleta e passa a ser escrever e testar frases. Sinal forte: três artefatos (SAM
  3 aberto, Grounding DINO, Roboflow Label Assist). Classe de referência: bibliotecas de visão
  que viram padrão de desenvolvedor em ~4–5 anos (a mesma ordem do smartphone, de 2007 a 35% dos
  adultos americanos em 2011 [22]); 2030 é quatro anos depois do SAM 3.
- **e1.1** porque e1 torna o pré-rótulo automático bom o bastante para 90–95% dos casos comuns
  [16], a hora de rotulador passa a ser comprada só para a cauda longa (onde a mesma fonte admite
  que o automático falha) e para conferência. Sinal médio: dois artefatos [3][16].
  - **e1.1.1** porque o volume era o que sustentava os polos terceirizados, a perda de volume
    desloca a renda para quem sabe rotular o raro — o médico, o agrônomo. Troca de ator (do
    comprador ao trabalhador de outro país), por isso é outra ordem. Sinal fraco: não abri fonte
    primária sobre demissões nesses polos nesta rodada (ver seção 12).
- **e1.2** porque o trabalho humano de e1.1 é conferir, a ferramenta que o apoia muda de função:
  de desenhar caixa para revisar erro. Sinal médio: Label Assist [3], e o fato de as próprias
  ferramentas de anotação terem integrado modelos fundacionais (a turma trouxe CVAT e Label
  Studio; não abri o changelog delas — seção 8).
  - **e1.2.1** porque se o rótulo sai de graça do modelo, o que é escasso é saber onde ele erra;
    o conjunto de avaliação fica com o valor que era do conjunto de treino.
- **e2** porque SAM 3 rastreia todas as instâncias de um conceito em vídeo e já está no Edits e
  no Vibes [1], a seleção por conceito substitui a máscara manual. Sinal forte: três produtos da
  Meta. Classe de referência: ferramentas de edição de consumo que viram padrão em 3–5 anos.
- **e2.1** porque a máscara era o trabalho repetitivo onde o iniciante aprendia, e2 tira o
  degrau. Sinal médio: produto existe [1]; não há dado de emprego.
  - **e2.1.1** porque o estúdio ainda precisa de compositores experientes, ele troca o método de
    formação. Ator muda (do profissional para o estúdio como formador).
- **e2.2** porque, com cada objeto segmentado por nome, o vídeo carrega uma camada de objetos
  que a interface pode tornar tocável; "View in Room" do Marketplace é o primeiro passo [1], e a
  busca visual de 20 bilhões por mês mostra que o gesto já é aceito [21].
  - **e2.2.1** porque o objeto segmentado pode ser substituído depois da publicação (isso é tema
    12, mídia sintética; aqui a causa é a segmentação endereçável), o espaço de marca em cena
    vira inventário vendável e reprecificável. Fora do limite de confiança: baixa.
- **e3** porque a inspeção sob medida exigia um projeto com dataset próprio, a descrição em
  texto a torna acessível a quem não tinha escala. Sinal médio: o caso WRI [5] e a pesquisa
  industrial [15]. Classe de referência: CLP e automação industrial em pequenas fábricas — levou
  décadas; por isso 2036, dez anos depois da demo.
- **e3.1** porque o vocabulário aberto só procura o que foi pedido, a frase vira parte do
  procedimento auditável. Sinal fraco: inferência minha, nenhum caso observado.
  - **e3.1.1** porque a frase registrada em e3.1 pode ser comparada ao defeito que escapou.
- **e3.2** porque o DINOv3 já reduziu o erro de medição de copa no Quênia de 4,1 m para 1,2 m em
  uso de verificação climática [5], a medição por imagem passa a ser a base do contrato.
  - **e3.2.1** porque os mesmos pesos são abertos [5], quem é medido pode medir de volta. Troca de
    ator (do pagador para a comunidade).
- **e4** porque a busca por descrição (Grounding DINO, SAM 3) dispensa o banco de rostos: "homem
  de mochila vermelha" funciona sem que ninguém esteja cadastrado. Sinal médio: Smart Sampa com
  20 mil câmeras de reconhecimento [13] e a tramitação do PL 1828 [19] mostram a infraestrutura
  pronta; não encontrei caso público de busca por descrição em câmera municipal brasileira
  (seção 12).
- **e4.1** porque a descrição é escrita por um operador e cobre muita gente, o falso positivo
  deixa de ser "rosto parecido" e passa a ser "roupa parecida". A base: já em reconhecimento
  facial, 28% das 82 conduções indevidas no Smart Sampa vieram do algoritmo [14], e o viés contra
  mulheres negras e pessoas trans é documentado por CESeC via Data Privacy Brasil [20].
  - **e4.1.1** porque a defesa precisa contestar a origem da abordagem, a frase vira prova.
- **e4.2** porque o PL 1828/2023 regula "reconhecimento facial e identificação biométrica" [19], a
  busca por roupa e objeto fica fora da letra da lei. Sem neto: o filho seria "a lei é
  emendada", que é o mesmo efeito amadurecendo — regra de parada.
- **e5** (retroação) porque a Meta admite a falha em conceito fino [1] e a pesquisa industrial
  documenta "inferências estruturais alucinadas" [15], o comprador que sofrer o primeiro erro
  exige validação. Freia R1 em uso crítico.
- **e5.1** porque a validação precisa de um padrão comum, quem mantém benchmark vira porteiro
  (o IndusAgent já se mede em cinco benchmarks industriais [15]).
  - **e5.1.1** porque benchmark custa caro, setores pequenos ficam sem.
- **e6** (quem bloqueia) porque SAM 3.1 foi medido em H100/H200 [1] e a Roboflow mantém um
  endpoint dedicado por ser "compute intensive" [3], a abertura dos pesos não impede que o uso se
  concentre em quem tem GPU. Ator com incentivo para capturar: as plataformas de nuvem e a
  própria Meta.
- **e6.1** porque a consulta por API registra o que se pediu, a execução local vira escolha de
  privacidade. Fronteira com o tema 16 (IA local): aqui o que muda é o registro do *olhar*.
  - **e6.1.1** porque registros de consulta de serviços online são requisitados em juízo (padrão
    conhecido para busca textual; não abri fonte sobre isso — seção 8).

**R2 — documento lido como imagem.**

- **e7** porque um modelo de 0,9 bilhão de parâmetros lê página complexa com 96% no
  OmniDocBench [8] e o custo está em US$ 190 por milhão de páginas [7], exigir estrutura na
  entrada deixa de compensar. Sinal forte: três artefatos [6][7][8]. Classe de referência:
  digitalização de back-office bancário (OCR de cheque) levou mais de uma década até ser padrão;
  por isso 2032 e não 2028.
- **e7.1** porque o formulário existia para tornar a informação legível por máquina, e7 retira
  essa razão; ele sobra onde orienta a pessoa (o que perguntar) ou registra consentimento. O
  Skyvern preenchendo formulários por visão [9] mostra o lado de saída do mesmo movimento.
  - **e7.1.1** porque sem formato comum a tradução entre instituições é feita pelo leitor, o
    dono do leitor ganha poder de padrão.
- **e7.2** porque a conferência humana era a correção do erro de OCR, e o erro cai [8]. Nota
  Brasil: cartórios e BPO bancário são grandes empregadores de conferência; não encontrei número.
  - **e7.2.1** porque se a leitura é do modelo, o que se certifica é o modelo.
- **e8** porque o olmOCR lê manuscrito e múltiplas colunas em ordem [7], acervos sem transcrição
  passam a ser pesquisáveis. Sinal médio: [6][7].
- **e8.1** porque a barreira de privacidade de muitos acervos era o custo de leitura, e8 a
  remove. Confiança média apesar do sinal fraco: o mecanismo é direto.
  - **e8.1.1** porque a ANPD pôs IA e reconhecimento entre os eixos de fiscalização de 2026–2027
    (visto só em resumo de busca, fonte não aberta — seção 12), o passo seguinte é tratar
    digitalização como tratamento. Confiança baixa.
- **e9** porque o Skyvern opera o navegador por visão com 64,4% no WebBench [9], a tela vira
  interface de integração. Fronteira com o tema 4.
- **e9.1** porque o robô preenche o portal, o teste visual de humanidade é superado pelo próprio
  leitor de tela.
  - **e9.1.1** porque o tráfego principal é de máquina, o projeto se inverte.
- **e10** (retroação) porque sem etapa de OCR não há texto intermediário para auditar, e o modelo
  pode produzir um campo plausível e errado; o próprio Donut apresentava a propagação de erro
  como problema do OCR [6] — sem OCR, o erro não some, fica invisível. A Roboflow registra que o
  modelo dedicado ainda ganha em extração pura [8]. Freia R2 em setores regulados.
- **e10.1** porque a auditoria precisa de âncora, o campo passa a vir com a região da imagem
  (grounding). Sem neto: regra de parada.
- **e11** (quem bloqueia) porque a receita desses atores é por página ou ato, eles têm incentivo
  para manter a conferência humana como exigência legal. Sinal fraco: nenhum artefato aberto.
- **e11.1** porque o regime de fé pública é legal e o privado é contratual, os dois se separam.

**R3 — percepção contínua em primeira pessoa.**

- **e12** porque os óculos já processam a câmera para consultas [11], o VisionClaw demonstrou o
  modo sempre ligado [17] e a patente de agosto de 2026 descreve pesos de "interesse" atribuídos
  a pessoas e momentos [23], o passo técnico para o fluxo contínuo está dado. Sinal forte (três
  artefatos), confiança média: bateria e aceitação são incertas. Classe de referência: óculos com
  câmera, de 2013 (Google Glass, de memória) até 7 milhões por ano em 2025 [11] — doze anos ainda
  abaixo de 10%. Por isso 2036.
- **e12.1** porque o registro indexado responde "o que aconteceu" melhor que a memória, as
  pessoas passam a consultá-lo em conflitos.
  - **e12.1.1** porque o registro existe e é mais preciso, o tribunal o requisita. 2050, dentro
    do horizonte.
- **e12.2** porque o usuário pergunta ao assistente e não olha, quem projeta a embalagem passa a
  projetar para o leitor. É consequência direta para o público deste mapa.
  - **e12.2.1** porque legibilidade vira valor, a opacidade também.
- **e13** porque o Be My AI já descreve fotos para ~1 milhão de pessoas e foi integrado aos
  óculos [10], a descrição contínua é o próximo passo. Sinal forte (Be My AI, Ray-Ban, pilotos
  Hilton/Tesco).
- **e13.1** porque Hilton e Tesco já usam o dispositivo do cliente como solução de acessibilidade
  [10], a obrigação tende a migrar. Troca de ator (do usuário para o dono do espaço).
  - **e13.1.1** porque a LBI (Lei 13.146/2015, citada de memória) obriga o espaço, o conflito vai
    para a interpretação. Risco de retrocesso nas adaptações físicas.
- **e13.2** porque o AI Act proíbe inferência de emoção em trabalho e escola [18] e o descritor
  cego descreveria exatamente isso, o projetista enfrenta a escolha. Sem neto: regra de parada.
- **e14** porque a luz dos Ray-Ban Meta não acende em consulta de IA [11], a pessoa ao lado não
  sabe. Sinal forte: FAQ do fabricante, EFF [24], ações na Justiça [11].
- **e14.1** porque o terceiro não tem aviso, instituições barram o aparelho: escolas de Oslo e o
  ICE já barraram [11]. Sinal forte, confiança média (não sei se vira regra geral).
  - **e14.1.1** porque o aplicativo ZuckOff, que detecta os óculos, já teve ~5 mil usuários [11],
    a autodefesa individual existe em germe. Sinal médio (um artefato).
- **e14.2** porque proibir não é possível em espaço público aberto, o consentimento tende a ser
  técnico, sinal de rádio contra sinal de rádio. Inferência.
  - **e14.2.1** porque só emite opt-out quem tem aparelho.
- **e15** (quem bloqueia/retroação) porque o AI Act art. 5 [18], a Noruega e a CNIL [11] já
  restringem, fabricantes regionalizam funções. Sinal forte; freia R3 na Europa.
- **e15.1** porque a proibição recai sobre o que se procura ("pessoa X", "emoção"), o vocabulário
  vira objeto da lei.
  - **e15.1.1** porque os pesos são abertos [2][5], quem roda local escapa.

### 5.2 Cobertura STEEP e quem perde

- **Social:** e4, e12, e13, e14. **Tecnológico:** e1, e2, e9. **Econômico:** e1.1, e7.2, e2.2,
  e6. **Ecológico:** e3.2 (medição de carbono/desmatamento) — único; não forcei outro.
  **Político:** e4.2, e15, e11.
- **Quem perde:** rotuladores de volume (e1.1.1), rotoscopistas iniciantes (e2.1), digitadores e
  conferentes (e7.2), fornecedores de captura e cartórios (e11), pessoas que se parecem com a
  descrição (e4.1), quem está no campo de visão (e14), quem não tem aparelho (e14.2.1), pessoas
  com deficiência se o espaço deixar de se adaptar (e13.1.1), setores sem benchmark (e5.1.1).

### 5.3 Cruzamentos

- **Convergência 1 — a imagem vira dado estruturado por padrão.** e2.2 (todo objeto de vídeo
  endereçável), e8.1 (acervo escaneado minerável) e e12 (campo de visão anotado) chegam ao mesmo
  lugar por raízes diferentes: toda imagem, a nova e a arquivada, passa a ter um inventário
  consultável. O geolocalizador GeoSpy, que acha onde uma foto foi tirada sem metadado [25],
  mostra que isso vale também para o *lugar*. É o achado central do mapa e responde à pergunta de
  3ª ordem da disciplina: o que sobra de privado numa foto é o que ninguém ainda pediu para
  procurar nela.
- **Convergência 2 — a frase como objeto de disputa.** e3.1.1 (frase de inspeção em recall),
  e4.1.1 (frase de busca policial em juízo), e6.1.1 (histórico de consultas visuais) e e15.1
  (vocabulário regulado) convergem: com vocabulário aberto, a *pergunta* feita à câmera passa a
  ser a coisa auditada, contestada e regulada. Em visão de classe fixa, a responsabilidade estava
  no modelo; aqui ela migra para quem escreveu a frase.
- **Retroalimentação.** e12 (fluxo contínuo) produz exatamente o dado egocêntrico que treina a
  geração seguinte — a EFF relata que vídeos dos óculos já vão para treino e revisão humana [24].
  Quanto mais óculos, melhor a visão aberta em primeira pessoa, mais útil o óculos (reforço). Em
  sentido contrário, e14 → e15 → banimentos reduzem a coleta na Europa (enfraquecimento local).
- **Contradição.** e13 (descrição contínua para pessoas cegas) e e14.1 (barrar óculos com câmera
  em escolas e hospitais) não coexistem sem exceção explícita. O que decide: se a regra for por
  função (proibir identificação, permitir descrição) ou por aparelho (proibir a câmera). A
  primeira exige fiscalizar software; a segunda é mais barata e prejudica a pessoa cega.

## 6. Sinais fracos e wildcards

### Sinais fracos

1. **ORTHOS — visão aplicada à reação emocional.** Trazido pela turma como extensão que simula a
   resposta emocional a manchetes com modelo da Meta. **Não consegui localizar o repositório**
   nesta rodada (seção 12), então o sinal fica registrado sem fonte. O que mudaria: se modelos de
   previsão de resposta afetiva a mídia se tornarem ferramenta de redação, o "ver" desliza para
   "prever o que o outro vai sentir ao ver". Sinal observável: um veículo de imprensa ou
   plataforma declarando uso de previsão de reação em edição de título ou miniatura.
2. **NameTag.** Sistema de reconhecimento facial não lançado encontrado dentro do app Meta AI
   (WIRED, junho de 2026), que convertia rostos capturados pelos óculos em assinatura biométrica
   comparada a uma base no aparelho; a Meta retirou a maior parte após a reportagem [23]. O que
   mudaria: e14 passaria de "a câmera processa sem aviso" para "a câmera identifica". Sinal
   observável: lançamento de identificação de pessoas em qualquer mercado grande.
3. **Geolocalização por pixel.** GeoSpy (renomeado Raven em abril de 2026) estima o local de uma
   foto sem metadado, por arquitetura, sol e vegetação, e foi testado por polícias [25]. O que
   mudaria: a Convergência 1 chega ao lugar, não só ao objeto — toda foto de rede social vira
   ponto num mapa. Sinal observável: a função embutida numa plataforma de massa.
4. **Detectores de óculos.** ZuckOff, ~5 mil usuários [11]. Sinal observável: fabricantes de
   celular incluindo detecção de câmeras vestíveis por padrão.

### Wildcards

- **W1 — Um índice público do mundo ao vivo.** Mecanismo: se uma plataforma agregar as anotações
  de milhões de óculos (e12), o resultado é um "Street View contínuo" em que se pergunta "onde
  há, agora, uma fila curta de farmácia" — ou "onde está esta pessoa". Por que é improvável:
  exige que os usuários aceitem enviar o campo de visão e que nenhuma grande jurisdição proíba;
  o AI Act já proíbe a raspagem de CFTV para bases de rostos [18]. O que faria com o mapa: R3
  deixaria de ser individual e viraria infraestrutura; e14.2 (consentimento entre dispositivos)
  seria insuficiente. Sinal precoce: um fabricante oferecendo desconto no aparelho em troca de
  "contribuir para o mapa".
- **W2 — Monocultura cega.** Mecanismo: como muita visão aberta deriva de poucos backbones
  (DINO, SAM) [2][5], uma perturbação adversarial barata e física (estampa, adesivo) que cegue
  todos ao mesmo tempo tornaria o vocabulário aberto não confiável em segurança e inspeção de uma
  vez. Por que é improvável: modelos se diversificam e a defesa adversarial avança. O que faria:
  e4 e e3 recuariam para sistemas fechados e auditados; e14.1.1 viraria moda. Sinal precoce: um
  paper mostrando transferência de ataque entre SAM, DINO e um VLM comercial ao mesmo tempo.
- **W3 — Proibição da pergunta sobre pessoas.** Mecanismo: um acordo internacional (ou a UE mais
  um mercado grande) proíbe que produtos de consumo aceitem consultas visuais cujo alvo seja uma
  pessoa. Por que é improvável: fiscalizar vocabulário é difícil e há usos legítimos
  (acessibilidade). O que faria: R3 ficaria restrita a objetos; e13 teria de pedir exceção.
  Sinal precoce: a Noruega aprovar a proibição anunciada de funções de identificação [11].

## 7. Contra o próprio mapa

### 7.1 Pré-mortem — "É 2056 e este mapa errou. Por quê?"

1. **A visão aberta foi absorvida como recurso invisível dentro de modelos multimodais gerais, e
   nada "rompeu" — só melhorou.** Este é o falseador do briefing. Se a busca visual já está na
   maioria [21], R1 pode ser apenas a próxima versão dela. Resposta no mapa: mantive R1 porque
   o que ela rompe (dataset por classe, rotulagem de volume) não é o que a busca visual rompeu;
   mas rebaixei e1.1 e e1.1.1, que dependem de uma queda de demanda por rótulo que eu não
   verifiquei com número.
2. **Os óculos com câmera não chegaram à maioria.** Doze anos de óculos com câmera e ainda
   abaixo de 10% [12]. R3 inteira depende disso. Resposta: empurrei e12 de 2032 para 2036 e
   baixei sua confiança para média.
3. **A regulação chegou antes da difusão.** AI Act, Noruega, CNIL, banimentos institucionais
   [11][18]. Se a regra for por aparelho, e12 e e13 recuam juntos. Resposta: e14.1 com confiança
   média (não alta), e a contradição e13 × e14.1 registrada.

### 7.2 Extrapolação linear

- **e7 ("documento entra sem estrutura")** é, em parte, "OCR melhor, maior". O mecanismo de
  não-linearidade que o mantém: quando o custo de leitura cai abaixo do custo de *desenhar* um
  formulário, a instituição deixa de desenhá-lo (e7.1). Sem esse degrau, e7 seria contexto.
- **e2 ("editar por conceito")** também é melhoria de ferramenta; o que o mantém em 1ª ordem é a
  perda do posto de entrada (e2.1). Mantido, mas é o candidato mais fraco a "ruptura".
- **e3.2 (medição por satélite)** removido um neto que dizia "toda floresta é medida
  continuamente" — era o pai maior (seção 12).

### 7.3 Velocidade de adoção

- **e12** exigia adoção de óculos mais rápida que a própria classe de referência (óculos com
  câmera): 2032 → 2036 (+4 anos).
- **e2.2** (objeto tocável em streaming) — a referência é a busca visual, que levou ~7 anos do
  lançamento do Lens (2017, de memória) a 20 bilhões/mês [21]; 2036 é compatível.
- **e8.1.1** 2040 → 2044: regulação de proteção de dados brasileira levou oito anos entre o
  Marco Civil (2014) e a ANPD em funcionamento (datas de memória; seção 8).
- **e14.2** 2038 → 2044: não há protocolo técnico de opt-out entre dispositivos nem em demo.

### 7.4 A raiz que não acontece

- **Sem R1:** R2 e R3 continuam — R2 depende de VLMs de documento, não de segmentação; R3
  depende de descrição de cena, que VLMs já fazem. Perde-se e1–e6 (rotulagem, VFX, vigilância
  por descrição). O mapa não é uma raiz só.
- **Sem R2:** R1 e R3 intactas. Perde-se a parte de formulário e fé pública.
- **Sem R3 (óculos não pegam):** e4 (câmeras fixas) segue sustentando a questão da vigilância; a
  Convergência 1 perde um de três ramos mas se mantém por e2.2 e e8.1. A questão do terceiro
  (e14) continua valendo para celular, com menos força.
- **Achado:** R1 e R3 compartilham a mesma base técnica (modelos abertos de visão-linguagem).
  Não são a mesma raiz — uma rompe a produção de modelos, a outra o espaço social —, mas uma
  falha técnica comum (W2) derrubaria as duas.

### 7.5 Suposições escondidas

1. **Os pesos continuam abertos.** SAM 3 e DINOv3 são abertos hoje [2][5]. Se a Meta fechar,
   e3.2.1 (contraperícia) e e15.1.1 (modelos locais) caem. Vira premissa declarada.
2. **Energia e GPU baratas o bastante para visão contínua.** Se não, e12 fica restrito a
   consultas pontuais — e é o que hoje acontece.
3. **Plataformas continuam permitindo acesso por visão às suas telas.** e9 (agentes que veem a
   tela) depende de os sites não bloquearem agentes; o Skyvern mantém medidas anti-bot só na
   versão paga [9], sinal de que a disputa já existe.
4. **O Brasil segue a trilha europeia com atraso.** e8.1.1 e e13.1.1 assumem isso; se o PL
   1828/2023 for aprovado na forma atual, a trilha é outra.

### 7.6 Viés do autor

- **e2 e e2.2** estão aqui porque o público do mapa é quem projeta mídia e porque edição de
  vídeo é o caso mais visível para a turma. São os efeitos com mais "brilho" e menos ruptura.
- **e12.2 / e12.2.1** (espaços legíveis e opacos) é o efeito de que mais gosto como designer;
  sinal fraco e confiança baixa no neto, de propósito.
- A seleção de fontes privilegiou a Meta (SAM, DINO, óculos): é quem mais publica, mas é fonte
  interessada em R1 e R3.

### 7.7 Calibração

Contagem final (ver verificador na seção 12): ordem 1 — alta 6, média 9, baixa 0; ordem 2 —
alta 0, média 18, baixa 5; ordem 3 — alta 0, média 0, baixa 19. Cai com a ordem. Na 3ª ordem
tudo é baixa: com trinta anos de horizonte, não achei nenhum neto com mecanismo e referência que
sustentasse média.

### 7.8 Registro de alterações

- e1.1: confianca alta → media, porque a queda de demanda por rotulagem não tem número aberto.
- e1.1.1: sinal medio → fraco, porque a fonte sobre demissões em polos de anotação (vista num
  mapa anterior) não foi aberta nesta rodada.
- e2.1.1: reescrito — a versão anterior dizia "cursos de VFX reorganizam o currículo", efeito
  proibido sem nome; agora o ator é o estúdio.
- e4: prazo 2030 → 2034, porque não achei nenhum caso público de busca por descrição em câmera
  municipal; o sinal foi mantido médio só pela infraestrutura.
- e4.2: neto "o Congresso emenda a lei" removido (regra de parada; seção 12).
- e3.2: neto "toda floresta passa a ser medida continuamente" removido (extrapolação linear;
  seção 12).
- e7.2: confianca alta → media, porque não achei número de emprego em conferência no Brasil.
- e8.1.1: prazo 2040 → 2044, pela referência Marco Civil → ANPD.
- e10.1: neto removido (regra de parada).
- e11: sinal medio → fraco, nenhum artefato aberto.
- e12: prazo 2032 → 2036; confianca alta → media (referência: óculos com câmera).
- e14.1: confianca alta → media (pré-mortem 3).
- e14.2: prazo 2038 → 2044.
- R2 removido um 1º ordem: "surge a profissão de engenheiro de prompt documental" (efeito
  proibido sem ator e mecanismo; seção 12).
- R3 removido um 1º ordem: "a foto privada deixa de existir" (extrapolação e não específico —
  serve a qualquer tecnologia de captura; absorvido pela Convergência 1).

Cota por raiz: R1 (e1.1, e1.1.1, e4, e4.2, e3.2), R2 (e7.2, e8.1.1, e10.1, e11, remoção), R3
(e12, e14.1, e14.2, remoção). Cumprida.

## 8. O que a máquina errou

1. **Data do SAM 3 trocada pelo leitor automático.** O resumo que obtive da página da Meta disse
   que o SAM 3 saiu "em novembro de 2024". O arXiv dá 20/11/2025 [2] e a Roboflow integrou em
   19/11/2025 [3]. Usei 2025. Se a página tivesse sido a única fonte, a âncora teria um ano de
   erro.
2. **Citações de memória, sem abrir.** Google Glass em 2013, lançamento do Google Lens em 2017,
   Lei Brasileira de Inclusão como Lei 13.146/2015, Marco Civil em 2014 e ANPD em funcionamento
   por volta de 2021–2022 — todos usados como classe de referência ou nome, nenhum aberto nesta
   rodada. Estão marcados "de memória" no texto.
3. **ORTHOS não encontrado.** A turma descreveu a extensão; a busca não achou o repositório.
   Mantive como sinal fraco declarado sem fonte, em vez de inventar um link.
4. **Números de busca não verificados na origem.** A busca retornou "20 bilhões de buscas Lens em
   2026, 12 bilhões um ano antes" e "vagas de rotulagem +281% entre 2021 e 2026", de sites de
   SEO e de recrutamento. Não usei: a fonte primária que abri [21] dá "quase 20 bilhões" em 2024,
   o que é inconsistente com "12 bilhões um ano antes de 2026".
5. **Mecanismo fraco em e9.1 e e14.2.** "Portais recebem mais robôs que pessoas" e "consentimento
   entre dispositivos" soam plausíveis, mas não têm nenhum artefato; são inferência encadeada.
6. **Latência "30 ms" pode ser enganosa.** O número da Meta é numa H200 com imagem única [1];
   usá-lo para sustentar e12 (óculos) seria transpor datacenter para vestível. Não usei como
   argumento de viabilidade no dispositivo.
7. **Autoria.** O Grounding DINO aparece nesta roda como "IDEA Research" pelo repositório; a
   página do arXiv não lista afiliação [4]. Mantive por ser como a comunidade o identifica.
8. **Dados do Smart Sampa com fontes de lados opostos.** Os 3 mil presos são número da
   prefeitura [13]; as 82 conduções indevidas vêm de nota da sociedade civil sobre um período
   diferente [14]. Não são comparáveis como taxa, e não calculei uma.

## 9. Três cenários para 2056

**Provável.** Em 2056, pedir para uma câmera "achar" algo é tão banal quanto buscar texto. Não se
monta mais dataset para projetos comuns; rotulagem humana é trabalho de especialista em cauda
longa. Documentos entram em qualquer formato em bancos e empresas, mas atos com fé pública no
Brasil ainda exigem conferência humana por lei, e o mesmo papel tem dois regimes de leitura.
Óculos com câmera são comuns entre profissionais e pessoas com deficiência visual, menos entre o
público em geral; escolas, hospitais e repartições os barram na porta. Na Europa o vocabulário
que se pode pedir à câmera é regulado; em outros lugares, não. Câmeras municipais buscam por
descrição, e a frase usada na busca é rotineiramente contestada pelas defensorias. **Sinal
precoce:** até 2030, um município grande anunciando busca por descrição de roupa nas suas
câmeras.

**Desejável.** Em 2056, a visão aberta roda no dispositivo, sem registro central do que cada um
pediu para ver. A regra geral é por função: é proibido identificar pessoas e inferir emoção de
terceiros, e é permitido descrever o mundo — de modo que a pessoa cega tem descrição contínua e a
escola não precisa barrar o aparelho. Toda leitura de documento em trâmite público traz a região
da imagem de onde cada campo saiu. Comunidades usam os mesmos modelos abertos para contestar
medições ambientais. Para chegar aqui: pesos continuarem abertos, a regra ser escrita por função
e não por aparelho, e a exigência de "leitura com evidência" entrar em compras públicas. **Sinal
precoce:** uma norma de compra pública (no Brasil, federal ou estadual) exigindo grounding por
campo em leitura documental.

**Indesejável.** Em 2056, a visão aberta é serviço de três plataformas, e cada consulta visual
fica registrada. Óculos anotam o campo de visão continuamente, as anotações alimentam um índice
consultável e a pessoa na rua só fica fora dele se carregar um aparelho que emita pedido de
exclusão. Câmeras urbanas buscam por descrição sem lei que as alcance, porque a lei de 2026
falava de rosto. Acessibilidade física foi retirada de muitos espaços "porque o usuário tem
óculos". **Sinal precoce:** um fabricante oferecendo desconto ou serviço em troca de contribuir
com o campo de visão para um mapa agregado (W1).

## 10. O experimento

**O que é.** *Pergunte à câmera.* Uma página web que roda um detector de vocabulário aberto
(OWLv2 ou Grounding DINO via transformers.js no navegador, ou SAM 3 num servidor da turma) sobre
fotos da própria sala de aula. Cada pessoa escreve frases livres ("mochilas", "quem está olhando
o celular", "a garrafa azul", "quem parece cansado") e vê o que a máquina marca. Toda frase fica
num **registro público da sessão**, visível para quem aparece nas fotos.

**Que pergunta responde.** Duas. (1) Técnica: em que tipo de frase a visão aberta falha com
confiança — conceito fino, relação, estado mental? (2) Social, a da Convergência 2: quando quem
aparece na foto vê a lista de frases que os colegas pediram para encontrar nela, o que muda na
disposição de ser fotografado? É o teste, em pequena escala, de e14 e da ideia de que a pergunta
é o objeto a regular.

**Que tecnologia emergente usa, e por que não dá com a madura.** Um detector de classes fixas só
responde às 80 classes do COCO; não aceita "quem está olhando o celular". O ponto do experimento
é justamente o vocabulário não previsto.

**O que a turma faz em sala.** Três rodadas de 10 minutos: (a) frases livres sobre objetos; (b)
frases sobre pessoas e estados; (c) todos leem o registro público e respondem, anonimamente, se
aceitariam a próxima foto. Contam-se acertos e falsos positivos por tipo de frase, e a variação
da disposição antes e depois de ler o registro.

**Resultado que me faria mudar de ideia.** Se a disposição de ser fotografado **não cair** depois
de ler o registro de frases, a Convergência 2 (a pergunta como objeto de disputa) é mais fraca do
que o mapa supõe, e e14.1 e e15.1 devem ser rebaixados. Se a taxa de acerto em frases sobre
estado ("parece cansado") for comparável à de objetos, e13.2 e o sinal ORTHOS sobem — e o mapa
precisaria de uma raiz sobre inferência afetiva por visão, que recusei.

## 11. Fontes

Vinte e cinco fontes, todas abertas em 22/09/2026.

1. **SAM 3.1: Faster and More Accessible Real-Time Video Detection and Tracking** — AI at Meta,
   27/03/2026. https://ai.meta.com/blog/segment-anything-model-3/ — *Sustenta:* 16 → 32 fps em
   H100, 30 ms por imagem em H200, produtos (Edits, Vibes, Marketplace), pesos abertos,
   limitações em conceito fino e frase longa, ausência de número de adoção. *Confiabilidade:*
   média; comunicação institucional de parte interessada.
2. **SAM 3: Segment Anything with Concepts** — Carion et al. (Meta), arXiv 2511.16719, v1
   20/11/2025, rev. 28/03/2026. https://arxiv.org/abs/2511.16719 — *Sustenta:* definição de
   segmentação por conceito, 4 milhões de rótulos, dobro da acurácia, SA-Co. *Confiabilidade:*
   alta; paper dos autores, com a ressalva de que definiram o benchmark.
3. **Launch: Use Segment Anything 3 (SAM 3) with Roboflow** — Roboflow, 19/11/2025.
   https://blog.roboflow.com/sam3/ — *Sustenta:* Label Assist, rotulagem por frase, Workflows,
   endpoint dedicado, afinar para produção. *Confiabilidade:* média; fornecedor.
4. **Grounding DINO** — Liu et al., arXiv 2303.05499. https://arxiv.org/abs/2303.05499 —
   *Sustenta:* detecção por nome ou expressão referencial, 52,5 AP zero-shot em COCO.
   *Confiabilidade:* alta.
5. **DINOv3** — AI at Meta, 14/08/2025.
   https://ai.meta.com/blog/dinov3-self-supervised-vision-model/ — *Sustenta:* 7B parâmetros,
   1,7B imagens, licença comercial, backbone congelado, caso WRI (4,1 → 1,2 m), NASA JPL.
   *Confiabilidade:* média-alta; laboratório, número do WRI não conferido na origem.
6. **OCR-free Document Understanding Transformer (Donut)** — Kim et al., arXiv 2111.15664, ECCV
   2022. https://arxiv.org/abs/2111.15664 — *Sustenta:* os três problemas do OCR em pipeline,
   origem de R2. *Confiabilidade:* alta; marco de origem, não estado da arte.
7. **olmOCR** — Ai2, 25/02/2025. https://allenai.org/blog/olmocr — *Sustenta:* US$ 190 por
   milhão de páginas, base Qwen2-VL-7B, equações, tabelas, manuscrito, abertura completa.
   *Confiabilidade:* alta para a abertura; custo autodeclarado.
8. **Best Open-Source OCR Models in 2026, Ranked by Benchmark** — Roboflow, 03/08/2026.
   https://blog.roboflow.com/best-open-source-ocr-models/ — *Sustenta:* PaddleOCR-VL-1.6 com
   96,34% no OmniDocBench v1.6 contra 89,78% do Qwen3-VL-235B; modelo dedicado vence em extração.
   *Confiabilidade:* média; fornecedor, mas sobre benchmark público.
9. **Skyvern** — GitHub. https://github.com/Skyvern-AI/skyvern — *Sustenta:* automação de
   navegador por visão, 23,1 mil estrelas, AGPL-3.0, anti-bot só na nuvem, 64,4% no WebBench.
   *Confiabilidade:* média; benchmark autorrelatado.
10. **Be My Eyes** — Wikipedia. https://en.wikipedia.org/wiki/Be_My_Eyes — *Sustenta:* 2015; ~1
    milhão de usuários e 10 milhões de voluntários; Be My AI (março de 2023, GPT-4) com 1 milhão
    de sessões em duas semanas; Meta, Microsoft, Hilton, Tesco. *Confiabilidade:* média;
    enciclopédia com números de origem da empresa.
11. **Meta's smart glasses privacy defense falters when AI can use camera without recording
    light** — Biometric Update, setembro de 2026.
    https://www.biometricupdate.com/202609/metas-smart-glasses-privacy-defense-falters-when-ai-can-use-camera-without-recording-light
    — *Sustenta:* LED não acende em consulta de IA; 7 milhões de pares vendidos em 2025; ações
    coletivas; Noruega, CNIL, escolas de Oslo, ICE; ZuckOff com ~5 mil usuários.
    *Confiabilidade:* média-alta; imprensa especializada, que cita o FAQ do fabricante.
12. **Smart Glasses Surge: The XR Market Is Rewriting Its Own Rules** — IDC, 15/06/2026.
    https://www.idc.com/resource-center/blog/smart-glasses-surge-the-xr-market-is-rewriting-its-own-rules/
    — *Sustenta:* 13,6 mi (2026), 27,3 mi (2030), Meta 69,2%, preço médio US$ 376 → ~229.
    *Confiabilidade:* alta para a ordem de grandeza.
13. **Smart Sampa atinge 3 mil foragidos presos com câmeras inteligentes** — Rádio Bandeirantes,
    14/04/2026.
    https://www.band.com.br/radio-bandeirantes/noticias/smart-sampa-atinge-3-mil-foragidos-presos-com-cameras-inteligentes-202604141155
    — *Sustenta:* 50 mil câmeras, 20 mil com reconhecimento facial, início em setembro de 2024.
    *Confiabilidade:* média; reproduz número oficial, sem dado de erro.
14. **Smart Sampa: mais de 80 pessoas foram levadas para delegacias por inconsistência do
    reconhecimento facial** — Brasil de Fato, 04/02/2026.
    https://www.brasildefato.com.br/2026/02/04/smart-sampa-mais-de-80-pessoas-foram-levadas-para-delegacias-por-inconsistencia-do-reconhecimento-facial/
    — *Sustenta:* 82 conduções indevidas em seis meses, 28% por reconhecimento facial; R$ 9,8 mi
    por mês; nota de Lapin, Peregum e Rede Liberdade. *Confiabilidade:* média; veículo com
    posição, dados de relatório da prefeitura via LAI.
15. **IndusAgent: Reinforcing Open-Vocabulary Industrial Anomaly Detection with Agentic Tools** —
    arXiv 2605.20682, 20/05/2026. https://arxiv.org/abs/2605.20682 — *Sustenta:* "raciocínio
    desalinhado ao domínio e inferências estruturais alucinadas"; cinco benchmarks.
    *Confiabilidade:* média-alta; preprint.
16. **The Complete Guide to Auto Labeling** — Voxel51, 16/06/2025.
    https://voxel51.com/blog/the-complete-guide-to-auto-labeling — *Sustenta:* 90–95% da
    acurácia de rótulo humano em muitos casos, lacuna maior em LVIS, 5–10% de rótulos manuais
    para classes raras. *Confiabilidade:* média; fornecedor, resumindo pesquisa própria.
17. **VisionClaw: Always-On AI Agents through Smart Glasses** — Liu et al., arXiv 2604.03486,
    abril de 2026. https://arxiv.org/abs/2604.03486 — *Sustenta:* agente sempre ligado nos
    Ray-Ban Meta, estudos com 12 e 5 participantes. *Confiabilidade:* média; preprint com
    amostra pequena.
18. **EU AI Act, Artigo 5** — artificialintelligenceact.eu.
    https://artificialintelligenceact.eu/article/5/ — *Sustenta:* proibições de emoção em
    trabalho/escola, categorização biométrica, raspagem de rostos, limites à identificação
    remota em tempo real. *Confiabilidade:* alta para o texto; site de referência não oficial.
19. **Câmara pode votar projeto que regulamenta uso de câmeras de reconhecimento facial** —
    Agência Câmara, julho de 2026.
    https://www.camara.leg.br/noticias/1290413-camara-pode-votar-projeto-que-regulamenta-uso-de-cameras-de-reconhecimento-facial/
    — *Sustenta:* PL 1828/2023, autor, locais, "intervenção humana", pauta de 14/07/2026.
    *Confiabilidade:* alta; fonte oficial.
20. **Câmara pode votar a qualquer momento projeto que transforma o Brasil em Estado de
    vigilância facial** — Data Privacy Brasil, 17/06/2026.
    https://www.dataprivacybr.org/camara-pode-votar-a-qualquer-momento-projeto-que-transforma-o-brasil-em-estado-de-vigilancia-facial/
    — *Sustenta:* críticas ao PL, viés documentado pelo CESeC, jurisprudência anterior.
    *Confiabilidade:* média; organização com posição declarada.
21. **Google Search updates: AI-Organized Search, Google Lens, and more** — Google, 03/10/2024.
    https://blog.google/products-and-platforms/products/search/google-search-lens-october-2024-updates/
    — *Sustenta:* "quase 20 bilhões de buscas visuais por mês"; recusa da busca visual como raiz.
    *Confiabilidade:* média; autodeclarado.
22. **Smartphone Adoption and Usage** — Pew Research Center, 11/07/2011.
    https://www.pewresearch.org/internet/2011/07/11/smartphone-adoption-and-usage/ —
    *Sustenta:* classe de referência — 35% dos adultos americanos com smartphone em 2011 (n =
    2.277). *Confiabilidade:* alta.
23. **Meta smart glasses patent reignites facial recognition debate** — Biometric Update, agosto
    de 2026.
    https://www.biometricupdate.com/202608/meta-smart-glasses-patent-reignites-facial-recognition-debate
    — *Sustenta:* patente US 2026/0238876 A1; pesos de "interesse" a pessoas; NameTag (WIRED,
    junho de 2026). *Confiabilidade:* média-alta; imprensa especializada citando documento
    público.
24. **Think Twice Before Buying or Using Meta's Ray-Bans** — EFF, 10/03/2026.
    https://www.eff.org/deeplinks/2026/03/think-twice-buying-or-using-metas-ray-bans — *Sustenta:*
    importação automática para o app, uso em treino, revisão humana, LED contornável.
    *Confiabilidade:* média-alta; organização de defesa com posição declarada.
25. **AI Photo Geo-location: A Dangerous Precedent for Public Privacy** — Redact, 18/08/2025.
    https://redact.dev/blog/ai-photo-geolocation-privacy-risk — *Sustenta:* GeoSpy localiza foto
    sem metadado; teste por polícias. *Confiabilidade:* baixa-média; blog de empresa que vende
    apagamento de conteúdo.

## 12. Anexo — o levantamento bruto

### 12.1 Buscas feitas (11) e aberturas

1. "SAM 3 segment anything with concepts open vocabulary 2026" — deu [1][2], Ultralytics,
   PyImageSearch, OpenReview, SAM3-I (não abertos).
2. "OCR-free document understanding vision language model benchmark 2026 OmniDocBench" — deu [8],
   OmniDocBench (GitHub, não aberto nesta rodada), DeepSeek-OCR 2, CC-OCR V2 (não abertos).
3. "smart glasses always-on visual AI privacy facial recognition 2026" — deu [11][17][23][24];
   VueBuds (arXiv 2603.29095, câmeras em fones de ouvido — não aberto; seria sinal fraco).
4. "reconhecimento facial câmeras Brasil 2026 regulação IA visão computacional" — deu [19][20];
   resumo sobre ANPD (mapa de temas prioritários 2026–2027) de um blog (Confidata) — **não aberto**,
   usado só como indício em e8.1.1 e rebaixado; Olho Vivo do Paraná (não aberto).
5. "Be My Eyes AI visual description blind users number 2026" — deu [10]; números de "95–98% de
   acurácia" de um site de listas (não usado).
6. "open-vocabulary detection industrial inspection zero-shot limitations anomaly detection
   2026" — deu [15]; outros cinco preprints industriais (não abertos).
7. "GeoSpy AI photo geolocation privacy police 2026" — deu [25]; a renomeação para Raven veio de
   um agregador (The Rundown), não aberto.
8. "ORTHOS browser extension emotional response headlines Meta model github" — **nada**. Nenhum
   resultado com o nome. Sinal registrado sem fonte.
9. "\"Smart Sampa\" câmeras reconhecimento facial 2026 números presos falso positivo" — deu
   [13][14]; o resumo da busca mencionava "211 pessoas conduzidas indevidamente entre novembro de
   2024 e novembro de 2025" — não abri a fonte desse número; usei só as 82 de [14].
10. "Google Lens visual searches per month 2025 2026 billion" — sites de SEO com "20 bilhões em
    2026, 12 bilhões um ano antes" e "20% de compras"; **não usados** (ver seção 8, item 4).
11. "data labeling annotation workers layoffs foundation model auto-labeling 2026 Scale AI Sama"
    — deu [16]; recrutadores (HeroHunt) com "+281% de vagas" (não usado); Scale AI demitiu 14% —
    da Wikipedia via resumo, não aberto.
Aberturas diretas (WebFetch): as 25 fontes da seção 11, todas nesta sessão. DINOv3, Grounding
DINO, Donut, olmOCR, IDC, Pew e AI Act foram abertas por endereço conhecido, sem busca prévia.

### 12.2 Premissas assumidas que o briefing não cobria

- Que "nota sobre o Brasil" pode ser distribuída ao longo do mapa (e4, e4.2, e7.2, e8.1.1, e11.1,
  e13.1.1) em vez de concentrada numa seção.
- Que a percepção contínua (sugerida como wildcard pela disciplina) pode ser raiz num horizonte de
  trinta anos — decisão minha, justificada em 4.3.
- Que 2056 permite efeitos de 3ª ordem dentro da janela; nenhum prazo passou do horizonte.
- Confiança geral do mapa: baixa, pelo horizonte; o briefing não fixava.

### 12.3 Efeitos cortados

- **(R1, era neto de e3.2)** "Toda floresta tropical passa a ser medida continuamente por imagem"
  — extrapolação linear do pai.
- **(R1, era neto de e4.2)** "O Congresso emenda o PL 1828 para incluir busca por descrição" —
  o pai amadurecendo, sem troca de ator (regra de parada).
- **(R1, 2ª ordem)** "Surge a profissão de curador de vocabulário visual" — efeito proibido sem
  ator, curso ou mecanismo.
- **(R2, 1ª ordem)** "Surge o engenheiro de prompt documental" — idem.
- **(R2, era neto de e10.1)** "Auditores passam a conferir a região citada em vez do texto" —
  o pai mais adiante.
- **(R3, 1ª ordem)** "A foto privada deixa de existir" — não passa no teste de especificidade
  (serve a qualquer tecnologia de captura); a ideia foi absorvida pela Convergência 1.
- **(R3, 2ª ordem)** "Óculos substituem o celular como aparelho principal" — é tema 15/16, e a
  causa não é visão aberta (teste da causa solta).
- **(R1, 2ª ordem)** "Deepfakes ficam mais fáceis porque a segmentação é trivial" — pertence ao
  tema 12; a causa principal é geração, não percepção (causa solta).

### 12.4 Caminhos abandonados

- Uma quarta raiz, "legibilidade retroativa de todo acervo de imagem", foi desenhada e
  descartada: seus efeitos eram todos netos de R1 ou R2; ficou como Convergência 1.
- Reconhecimento de emoção por visão como raiz: recusado (4.0).
- Tentei achar dado de emprego em digitação/conferência no Brasil (CBO/CAGED); não houve busca
  que retornasse fonte primária nesta rodada.

### 12.5 Saída do verificador

Execução de 22/09/2026, `verificar.py <arquivo> --links`, saída inteira:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 3 (frontmatter diz 3)
efeitos ordem 1: 15 (frontmatter diz 15)
efeitos ordem 2: 23 (frontmatter diz 23)
efeitos ordem 3: 19 (frontmatter diz 19)
prazo > horizonte (2056) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 6 · media 9 · baixa 0
confiança ordem 2: alta 0 · media 18 · baixa 5
confiança ordem 3: alta 0 · media 0 · baixa 19
links da seção 11: 25/25 respondem (frontmatter diz fontes: 25)
RESULTADO: ok
```
