---
tema: "Máquinas que veem qualquer coisa: visão de vocabulário aberto"
slug: maquinas-que-veem-qualquer-coisa-visao-de-vocabulario-aberto
autor_login: grec
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-22
horizonte: 2046
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 11
efeitos_ordem_2: 17
efeitos_ordem_3: 17
tecnologias_citadas: [SAM 3, SAM 3.1, SAM 2, Segment Anything, DINOv3, DINOv2, Grounding DINO, Grounding DINO 1.5, Donut, SynthDoG, olmOCR, olmOCR 2, Qwen3-VL, Qwen2-VL, Roboflow Auto Label, Roboflow Workflows, Autodistill, CVAT, Label Studio, Skyvern, Playwright, Be My AI, Meta Ray-Ban Display, Meta Neural Band, Android XR, Gemini, Google Lens, Smart Sampa, I-XRAY, TRIBE v2, ORTHOS, PaddleOCR, EasyOCR, LaTeX-OCR, OmniDocBench]
fontes: 18
confianca: media
experimento: "Contador por frase: a turma escreve, em português, o que a câmera da sala deve encontrar e confronta a máquina com a contagem humana"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Até 2023, um sistema de visão só enxergava a lista de classes com que foi treinado; mudar o que ele vê exigia coletar, anotar e treinar de novo. Modelos como SAM 3 (Meta, nov/2025), Grounding DINO e os modelos visão-linguagem (Qwen3-VL) trocaram a lista por uma **consulta em linguagem**: "conte os bezerros", "segmente toda mochila vermelha", "extraia o CNPJ desta nota". Este mapa, com horizonte em 2046, parte de três rupturas — a especificação da visão vira frase; o documento passa a ser lido como imagem, sem OCR em pipeline; e o olhar em primeira pessoa (óculos com câmera) vira consulta contínua a esse tipo de sistema. Os achados mais fortes: a anotação de imagem terceirizada encolhe para "casos difíceis", que viram ativo; a vigilância sai da lista de alvos para a consulta retroativa por descrição, que escapa da categoria jurídica "biometria"; o formulário perde a razão de existir; e a pessoa filmada perde a presunção de que o olhar alheio é efêmero. As retroações que freiam tudo: erro confiante em conceitos finos, documento adversarial e reação social ao óculos com câmera. Confiança geral média; toda a 3ª ordem é baixa.

## 2. O tema

**O que é.** Visão de vocabulário aberto é a capacidade de detectar, segmentar, rastrear e entender numa imagem, vídeo ou documento **aquilo que se pede em linguagem** (ou por exemplo visual), sem que o conceito tenha estado numa lista fixa de treino. Inclui: segmentação por conceito (SAM 3), detecção por descrição (Grounding DINO), características visuais aprendidas sem rótulo (DINOv3) que servem de base para qualquer tarefa, e compreensão de documento como imagem (Donut, olmOCR, Qwen3-VL).

**Onde encosta em mídia e interação.** Em três lugares: (a) a câmera deixa de ser sensor de um propósito e vira interface consultável — o que muda o projeto de qualquer sistema que filma; (b) o documento e a tela, que eram feitos para humanos lerem e máquinas processarem por template, passam a ser lidos pela máquina como o humano lê; (c) o campo de visão de quem usa óculos passa a ser rotulável, o que muda a relação entre quem olha e quem é olhado — matéria-prima de interação, de arte e de conflito.

**Por que um mapa de futuro, e não estado da arte.** Porque a parte técnica é visível (benchmarks, repositórios), mas o que ela rompe — o contrato de "para que serve esta câmera", o ofício de digitação e anotação, o formulário, a privacidade do olhar — ainda não aconteceu em escala e depende de decisões de regulação, custo e aceitação social. A régua da disciplina recusa o que já é comum em produto de massa; boa parte da "busca visual" já é, e fica como contexto.

**Premissas assumidas (briefing não interativo).** Horizonte 2046; público: quem projeta mídia e interação; recorte global com nota sobre o Brasil; descartado de início: o que já é comum em produto de massa; nenhuma raiz suspeita; viés neutro, com um cenário de cada lado; ideias óbvias excluídas: as que serviriam a qualquer tema; o que faria mudar de ideia: evidência de que a adoção já passou da maioria inicial (Rogers) ou de que a tecnologia só melhora o que existe. Profundidade: três ordens; modo: a partir de tema, não de setor. Tudo isso veio do briefing; nada foi suposto além do declarado na seção 12.2.

**Fronteiras.** Reconstrução 3D é o tema 10; o robô que usa visão para agir é o tema 9; agentes na web são o tema 4. Aqui o objeto é a **percepção aberta**. O caso Skyvern (agente que opera sites pela imagem da tela) aparece só como sinal de que a tela vira "documento lido como imagem".

## 3. Onde isso está hoje

Âncora feita com acesso à web em 22/09/2026: 20 buscas e 22 aberturas de página (duas falharam: 403 e redirecionamento refeito), 18 fontes abertas e citadas (seção 11). O que não abriu está listado na seção 12.

### 3.1 O que já existe e funciona

- **Segmentação por conceito.** SAM 3 ("Segment Anything with Concepts"), Meta, submetido ao arXiv em 20/11/2025 (v2 em 28/03/2026): detecta, segmenta e rastreia **todas as instâncias** de um conceito dado por frase curta ("yellow school bus"), por exemplo visual ou pelos dois; o artigo relata dobrar a acurácia dos sistemas anteriores em segmentação por conceito em imagem e vídeo, com um motor de dados de 4 milhões de rótulos de conceito únicos [1]. SAM 3.1 (27/03/2026) chega a 16–32 quadros por segundo numa única H100 rastreando até 16 objetos; 30 ms por imagem com mais de 100 objetos numa H200 [2]. Já está em produto: efeitos do app Edits (Instagram), "View in Room" do Facebook Marketplace, Vibes no app Meta AI [2]. Uso em conservação: conjunto SA-FARI com mais de 10 mil vídeos de armadilha fotográfica e mais de 100 espécies [2].
- **Detecção por descrição.** Grounding DINO (IDEA Research, mar/2023): 52,5 AP em COCO sem nenhum dado de treino do COCO; recorde no ODinW zero-shot (26,1 AP médio) [4]. Há versões para borda (Grounding DINO 1.5 Edge) — vistas só em resultado de busca.
- **Visão sem rótulo.** DINOv3 (Meta, 14/08/2025): 7 bilhões de parâmetros, 1,7 bilhão de imagens, treino autossupervisionado; licença comercial; WRI reduziu o erro de altura de copa de árvore no Quênia de 4,1 m para 1,2 m; NASA JPL usa para robôs de exploração [3].
- **Documento sem OCR.** Donut (NAVER CLOVA, nov/2021, ECCV 2022) inaugurou a leitura de documento ponta a ponta, sem motor de OCR, com gerador sintético SynthDoG para outros idiomas [5]. olmOCR (Ai2, 25/02/2025), sobre Qwen2-VL-7B: tabelas, equações, manuscrito e ordem de leitura em colunas, ~US$ 190 por milhão de páginas, 1/32 do custo do GPT-4o em lote [6]. Qwen3-VL (Alibaba, 26/11/2025): 2B a 235B parâmetros, contexto de 256 mil tokens intercalados, 7 milhões de PDFs no treino de parsing [7].
- **Rotulagem por linguagem como ferramenta de trabalho.** Roboflow oferece Auto Label com SAM 3 ou Gemini: "digite 'safety boots' e o modelo desenha as caixas" [8].
- **Acessibilidade.** Be My Eyes: mais de 10 milhões de voluntários e 1 milhão de pessoas cegas ou com baixa visão; Be My AI (mar/2023, GPT-4) teve 1 milhão de sessões em semanas; integração com óculos Ray-Ban Meta em 2024; pilotos com Hilton e Tesco [10].
- **Óculos com câmera e assistente.** Meta Ray-Ban Display à venda nos EUA desde 30/09/2025, US$ 799 com a pulseira Neural Band, 69 g, visor monocular; "Meta AI on glasses" responde com visuais [18]. Google anunciou na I/O (19/05/2026) óculos com Gemini, com Samsung, Qualcomm, Gentle Monster e Warby Parker; os de áudio saem no outono de 2026 [14].
- **Agente que lê a tela como imagem.** Skyvern: 23,1 mil estrelas no GitHub, AGPL-3.0, 64,4% no WebBench; automatiza formulários de governo, cotações, faturas sem seletor de DOM [9].

### 3.2 O que existe e ainda não funciona

- **Conceito fino.** A própria Meta registra que SAM 3 tem dificuldade com conceitos de domínio fino (terminologia médica) e com descrições compostas sem um modelo de linguagem junto; o custo de vídeo cresce linearmente com o número de objetos [2]. A Roboflow diz para voltar à anotação manual em "objetos minúsculos, defeitos raros ou qualquer coisa difícil de descrever em palavras" [8].
- **Tempo real no dispositivo.** Os 16–32 fps do SAM 3.1 são numa H100 [2]; não encontrei número de segmentação aberta rodando dentro de óculos de consumo.
- **Agentes por visão.** 64,4% de acerto no WebBench [9] é alto para demo e baixo para operação sem supervisão.

### 3.3 Quem constrói

Meta FAIR (SAM, DINO, TRIBE) [1][2][3][17]; IDEA Research (Grounding DINO) [4]; Alibaba/Qwen (Qwen-VL) [7]; Ai2 (olmOCR, aberto de ponta a ponta) [6]; NAVER CLOVA (Donut) [5]; Roboflow (plataforma de uso) [8]; Google (Gemini, óculos Android XR, Lens) [14][15]. Comunidade aberta: Skyvern [9] e o catálogo levantado pela turma (supervision, rf-detr, PaddleOCR, EasyOCR, LaTeX-OCR, CVAT, Label Studio).

### 3.4 Números de adoção

- Google Lens: "quase 20 bilhões de buscas visuais por mês", segundo o próprio Google em 03/10/2024, com maior uso entre 18 e 24 anos e 20% das buscas ligadas a compras [15]; séries de 3 bilhões (2021) e 10 bilhões (2023) circulam em veículos setoriais (seção 12). **Isto é maioria**: busca visual por foto é contexto, não raiz.
- Be My Eyes: 1 milhão de usuários cegos ou com baixa visão [10].
- Skyvern: 23,1 mil estrelas [9].
- Adoção de SAM 3: a Meta fala em "adoção incrível" **sem número** [2]. Um resultado de busca atribui à Roboflow "mais de 1 milhão de engenheiros"; a página aberta não traz esse número [8] — tratado como **sem número encontrado**.
- Smart Sampa (São Paulo): 31 mil câmeras (20 mil próprias, 11 mil privadas integradas), 1.001 foragidos presos por reconhecimento facial no 1º semestre de 2025, 1.322 desde out/2024, "92% de similaridade" [13]. É reconhecimento facial de **lista fechada** — maduro como prática, e é a infraestrutura sobre a qual a consulta aberta pousaria.
- Trabalho de anotação: uma página de empregos queniana relata que a Sama anunciou 1.108 demissões em Nairóbi em abril de 2026, após o fim de um contrato com a Meta [16]. Fonte fraca e causa não é automação declarada; uso só como sinal.

### 3.5 Nota sobre o Brasil

O Brasil tem a maior central de videomonitoramento da América Latina em operação municipal [13], um back-office documental gigantesco (cartórios, bancos, INSS, Receita) e uma população com deficiência visual que usa Be My Eyes em português. Os três ramos do mapa pousam aqui cedo em infraestrutura e tarde em regulação: não abri texto de lei brasileira sobre IA nesta rodada (seção 12).

## 4. As disrupções-raiz

### 4.1 Raiz A — A especificação de um sistema de visão vira consulta em linguagem

1. **O que rompe.** A lista de classes como artefato de projeto e o ciclo coleta → anotação → treino → implantação que definia *o que* uma câmera vê antes de ela ser ligada. Rompe também a suposição jurídica de que uma câmera tem um propósito declarado fixo: com consulta aberta, o propósito é decidido depois, sobre o acervo.
2. **Por que agora.** Combinação que só existe desde 2023–2025: detectores ancorados em linguagem com desempenho zero-shot útil [4]; espinhas dorsais autossupervisionadas em escala de bilhões de imagens [3]; e o SAM 3, que juntou detecção, segmentação e rastreamento por conceito num único modelo aberto com 4 milhões de conceitos [1], com velocidade de tempo real em GPU de datacenter [2].
3. **Onde está na difusão.** `produto de nicho` → `adoção precoce (<10%)`: em produto de consumo como efeito de edição [2], e em ferramenta profissional de rotulagem [8]. Emergente.
4. **O que falta.** Robustez em conceitos finos e defeitos raros [2][8]; rodar no dispositivo de borda; certificação em setores regulados; clareza jurídica sobre consulta retroativa a acervo de câmera.

### 4.2 Raiz B — O documento passa a ser lido como imagem, sem OCR em pipeline

1. **O que rompe.** A cadeia OCR → regras → template por tipo de documento, e com ela a razão de ser do **formulário padronizado**, que existia para que a máquina (ou o digitador) soubesse onde cada dado estava. Rompe o ofício de digitação e conferência como volume.
2. **Por que agora.** O paradigma ponta a ponta existe desde Donut (2021) [5], mas só virou barato e geral com modelos visão-linguagem abertos de 7B treinados em milhões de PDFs, a ~US$ 190 por milhão de páginas [6][7].
3. **Onde está na difusão.** `adoção precoce (<10%)` em processamento documental; OCR clássico é maduro e fica como contexto.
4. **O que falta.** Garantia de fidelidade auditável (o modelo "lê" o que não está escrito); defesa contra documento adversarial; aceitação jurídica de extração sem conferência humana.

### 4.3 Raiz C — O olhar em primeira pessoa vira consulta contínua a um sistema de visão aberta

1. **O que rompe.** A efemeridade do olhar: o que alguém vê na rua deixava de existir quando a pessoa olhava para outro lado; com óculos que filmam e respondem, o campo de visão vira registro consultável por conceito. Rompe a assimetria que protegia quem é olhado (não saber o que foi notado sobre si).
2. **Por que agora.** Óculos leves com câmera e assistente em varejo de massa (Meta Ray-Ban Display, set/2025, US$ 799 [18]; Google, outono de 2026 [14]), mais os modelos da Raiz A e VLMs capazes de descrever cena [10]. A demonstração I-XRAY (2024) mostrou que o encadeamento óculos + busca facial + bases públicas já identifica estranhos na rua [11].
3. **Onde está na difusão.** `produto de nicho`. Especulativo na forma "rotulagem contínua do campo de visão"; emergente na forma "pergunto sobre o que estou vendo".
4. **O que falta.** Bateria e processamento no dispositivo para percepção contínua; aceitação social; decisão regulatória sobre câmera vestível e identificação; hoje o Google não publicou política de retenção das imagens dos óculos (fonte de busca, não aberta; a página do Google aberta não trata disso [14]).

**Dependência declarada.** A Raiz C usa os modelos da Raiz A, mas não depende só deles: VLMs de descrição (Be My AI) e busca facial de lista fechada já bastam para parte dos efeitos. É por isso que ela fica como raiz separada (ver §7.4).

### 4.4 Candidatos recusados como raiz

- **Busca visual por foto (Google Lens):** recusado; adoção em maioria desde pelo menos 2022–2023 (quase 20 bilhões de buscas/mês em out/2024 [15]); tratado como contexto na seção 3.
- **Reconhecimento facial em CCTV com lista de alvos:** recusado; prática operacional estabelecida (Smart Sampa [13]); é contexto e infraestrutura para a Raiz A.
- **OCR tradicional, classificação de imagem, detecção de classes fixas:** recusados; maduros pela régua da disciplina.
- **Busca de fotos pessoais por texto na galeria do celular:** recusado; comum em produto de massa (de memória, sem fonte aberta — seção 8).
- **Agentes que operam a tela por visão (Skyvern):** recusado *aqui* por fronteira (tema 4), não por maturidade.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A especificação de um sistema de visão vira consulta em linguagem, não dataset rotulado
    efeitos:
      - id: e1
        ordem: 1
        efeito: Equipes de inspeção, triagem e contagem em fábrica, agro, logística e conservação passam a definir por frase e exemplo o que a câmera procura, sem ciclo de coleta, anotação e treino
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A anotação de imagem terceirizada em Nairóbi, Manila e Caracas encolhe para verificação de casos difíceis, com menos postos e exigência de especialista do domínio
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Acervos proprietários de casos difíceis (defeitos raros, lesões raras, pragas raras) viram o ativo negociado do setor, e quem os detém passa a ditar a qualidade da visão de todo um ramo
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: CVAT, Label Studio e similares deixam de ser ferramentas de desenhar caixas e passam a ser ferramentas de auditar a saída de consultas abertas
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Contratos de compra de sistema de visão passam a especificar desempenho por consulta e por lista de negativos difíceis, e a perícia judicial passa a reexecutar a consulta para contestar uma detecção
                sinal: fraco
                prazo: 2036
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A vigilância passa da lista de alvos definida antes para a consulta retroativa por descrição sobre vídeo já gravado
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: A busca de pessoas por atributo descrito (roupa, objeto carregado, trajeto) contorna a categoria jurídica de identificação biométrica, e o conflito regulatório migra do rosto para a descrição
            sinal: fraco
            prazo: 2033
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: A unidade regulada passa do dado biométrico para a consulta, com registro obrigatório e auditável de cada pergunta feita a acervo de câmera pública
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Prefeituras reduzem o tempo de retenção de vídeo público porque todo acervo guardado passa a ser consultável por qualquer descrição futura
            sinal: fraco
            prazo: 2034
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: O acervo consultável migra para condomínios, varejo e empresas de segurança privada, que guardam o que o poder público passou a apagar
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: A descrição do ambiente para pessoas cegas passa da legenda de uma foto para a consulta dirigida sobre a cena, como achar a porta, contar degraus ou seguir a faixa
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Sinalização de espaços públicos passa a ser projetada também para leitura confiável por modelo aberto, e não só por olho humano e tato
            sinal: fraco
            prazo: 2035
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Licitações de museus, estações e prédios públicos passam a exigir teste do projeto com modelos de visão aberta, e arquitetos passam a validar a planta perguntando ao modelo
                sinal: fraco
                prazo: 2042
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: A audiodescrição humana ao vivo recua para contextos de interpretação (arte, ironia, emoção), onde a consulta aberta erra ou empobrece
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: A audiodescrição passa a ser tratada como obra autoral assinada, encomendada por museus e festivais como camada de curadoria
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Erros confiantes em conceitos finos (variante de defeito, termo médico, espécie parecida) travam a adoção da consulta aberta em saúde, seguro e controle de qualidade
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Setores regulados adotam arquitetura em duas camadas, com consulta aberta para triagem e modelo fechado certificado para a decisão
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Agências como ANVISA e FDA passam a certificar o par consulta mais modelo, e o texto da consulta vira parte registrada do dispositivo médico
                sinal: fraco
                prazo: 2040
                confianca: baixa
  - disrupcao: O documento passa a ser lido como imagem, sem OCR em pipeline
    efeitos:
      - id: e5
        ordem: 1
        efeito: A extração de dados de nota fiscal, contrato, laudo e formulário escaneado sai do pipeline de OCR com regras e template e passa a um modelo único que devolve estrutura
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Postos de digitação e conferência em bancos, cartórios, seguradoras e RH encolhem para revisão de exceções amostradas
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: O conferente passa a assinar responsabilidade sobre a amostra auditada e não sobre cada documento, e a conferência vira função de auditoria estatística
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Órgãos e empresas passam a aceitar qualquer documento que comprove um fato em vez de exigir o formulário padronizado, porque a leitura estruturada fica do lado de quem recebe
            sinal: fraco
            prazo: 2035
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: O design de formulário cede lugar ao design de listas de prova aceitável, que dizem o que conta como evidência e não onde escrever cada dado
                sinal: fraco
                prazo: 2042
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: Acervos de PDF e digitalizações antigas viram texto estruturado a custo marginal de centenas de dólares por milhão de páginas
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Bibliotecas e arquivos públicos passam a negociar licença de leitura por máquina do acervo digitalizado com laboratórios de IA
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Acervos de cartórios e arquivos estaduais brasileiros entram em negociação com laboratórios estrangeiros, e a soberania sobre acervo documental vira pauta do Arquivo Nacional
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: Editoras e órgãos públicos param de produzir versão estruturada paralela de documento, porque o leitor por modelo recupera a estrutura do PDF
        sinal: fraco
        prazo: 2034
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Obrigações de acessibilidade de documento, como PDF marcado, perdem força política, e quem não tem acesso a leitor por modelo fica pior do que antes
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Organizações de pessoas com deficiência e publicadores entram em disputa judicial sobre se leitura por modelo cumpre a obrigação legal de acessibilidade
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: Documentos adversariais, com instrução ou texto invisível ao humano e lido pelo modelo, geram fraude em fluxos de leitura automática e forçam a volta de verificação
        sinal: fraco
        prazo: 2029
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Documento com valor legal passa a carregar prova de proveniência lida pela mesma máquina, e a imagem de documento sem proveniência perde valor de prova
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: A foto de documento deixa de valer como comprovante em cadastro bancário e em processo administrativo
                sinal: fraco
                prazo: 2044
                confianca: baixa
  - disrupcao: O olhar em primeira pessoa vira consulta contínua a um sistema de visão aberta
    efeitos:
      - id: e9
        ordem: 1
        efeito: Usuários de óculos com câmera e assistente passam a perguntar sobre o que estão vendo, e essa pergunta substitui a busca digitada em compra, manutenção e deslocamento
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: Embalagem, vitrine e cardápio passam a ser projetados para leitura por óculos, com informação que só aparece por consulta
            sinal: fraco
            prazo: 2037
            confianca: baixa
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: Fabricantes disputam com agências sanitárias o direito de mover informação obrigatória de rótulo para a camada consultável
                sinal: fraco
                prazo: 2044
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: O registro contínuo do dia vira memória pessoal pesquisável por conceito, como onde deixei as chaves ou o que o médico mostrou
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e9.2.1
                ordem: 3
                efeito: O arquivo visual pessoal vira objeto de intimação em processo trabalhista, criminal e de família
                sinal: fraco
                prazo: 2042
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: Quem aparece no campo de visão de alguém de óculos perde a presunção de que o olhar alheio é efêmero, e identificação e perfilamento na rua ficam possíveis sem infraestrutura
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Bares, clínicas, escolas e academias proíbem óculos com câmera e criam sinalização explícita de ambiente sem câmera
            sinal: fraco
            prazo: 2031
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: Fabricantes passam a vender percepção seletiva, óculos que se recusam a processar rostos e crianças, como argumento de venda e condição de entrada em ambientes
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: Roupas e acessórios que confundem segmentação e busca facial ganham mercado de nicho como camuflagem de conceito
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e10.2.1
                ordem: 3
                efeito: Cada nova geração de modelo invalida a coleção anterior, e a camuflagem anticâmera vira produto de assinatura atualizado como antivírus
                sinal: fraco
                prazo: 2044
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: Designers de interação passam a ancorar interfaces em objetos reconhecidos na hora pelo nome, em vez de marcadores impressos ou mapas escaneados antes
        sinal: medio
        prazo: 2034
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: Obras e experiências em museu, teatro e jogo de rua passam a responder ao vocabulário do visitante, que nomeia o que quer ver e a obra reage
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: A autoria de experiência passa a incluir o desenho da ontologia do que a obra reconhece, e curadores disputam quem define os conceitos
                sinal: fraco
                prazo: 2042
                confianca: baixa
```

### 5.1 Mecanismos, raiz A

- **e1** — porque a consulta aberta faz o custo de "ensinar" um conceito novo cair de semanas de coleta e anotação para uma frase, o gargalo de colocar uma câmera para contar algo passa a ser só instalar a câmera. Artefatos: SAM 3 em Auto Label [8], SA-FARI em conservação [2], efeitos de produto na Meta [2] → sinal forte. Classe de referência: bibliotecas de visão de propósito geral (OpenCV) levaram anos para chegar à indústria; aqui o canal já existe (plataformas como Roboflow). Prazo 2030 é conservador para 10% das novas implantações de inspeção.
- **e1.1** — porque e1 elimina a anotação de conceitos comuns, a demanda remanescente é exatamente o que o modelo não resolve: "objetos minúsculos, defeitos raros ou o que é difícil de dizer em palavras" [8]. Troca de ator: do engenheiro para o anotador. Sinal médio: a demissão da Sama [16] tem outra causa declarada — conta só como evidência de fragilidade do emprego, não de automação.
- **e1.1.1** — porque e1.1 concentra o valor nos casos que o modelo erra, quem guarda esses casos detém o insumo escasso. Troca de mecanismo: de trabalho para propriedade de dado.
- **e1.2** — porque a unidade de trabalho deixa de ser "desenhar a caixa" e passa a ser "aprovar ou corrigir a caixa que o modelo desenhou", como já faz a interface de revisão da Roboflow [8].
- **e1.2.1** — porque, sem lista de classes, "acurácia" deixa de ter denominador fixo; a métrica passa a ser por consulta, e uma detecção contestada em juízo passa a ser reproduzível só se a consulta e os negativos forem registrados. Ator novo: perito e comprador público.
- **e2** — porque a consulta aberta [1] roda sobre qualquer vídeo gravado, a pergunta pode ser feita depois do fato; a infraestrutura de câmeras já existe (31 mil em São Paulo [13]). Sinal médio: capacidade técnica e infraestrutura verificadas, produto de consulta retroativa por descrição em prefeitura **não** verificado nesta rodada.
- **e2.1** — porque o AI Act proíbe identificação biométrica remota em tempo real e categorização biométrica por atributos sensíveis [12], mas "mochila vermelha" não é dado biométrico, a descrição fica fora do texto da proibição. É inferência minha sobre o texto; sinal fraco.
- **e2.1.1** — porque o que produz o dano em e2.1 é a pergunta, não o dado, a regulação eficaz passa a mirar a consulta. Troca de ator: do fornecedor para o operador que pergunta.
- **e2.2** — retroação. Porque todo acervo guardado vira passivo consultável, quem responde por ele tem incentivo a guardar menos.
- **e2.2.1** — porque e2.2 apaga só o acervo público, e a mesma câmera privada não tem o mesmo incentivo, o acervo consultável muda de dono.
- **e3** — porque a consulta dirigida responde "onde está X" em vez de "o que há na foto", o uso passa de descrição para navegação. Artefatos: 1 milhão de usuários cegos no Be My Eyes, Be My AI com 1 milhão de sessões em semanas, integração com óculos [10], SAM 3 com rastreamento de conceito em vídeo [1] → forte.
- **e3.1** — porque sinalização que o modelo lê errado vira barreira nova para quem depende dele, quem projeta sinalização passa a ter dois leitores.
- **e3.1.1** — porque o Estado compra projeto por licitação, a exigência de e3.1 só vira regra ao entrar no edital. Ator novo: comprador público.
- **e3.2** — quem perde. Porque a consulta resolve o funcional (porta, degrau), a demanda humana residual é o interpretativo.
- **e3.2.1** — porque sobra ao humano o que é interpretação, a descrição passa a ser valorizada como autoria.
- **e4** — retroação. Porque SAM 3 declara dificuldade com conceitos finos de domínio [2] e a Roboflow desaconselha o uso para variantes de defeito [8], nos setores em que o erro custa caro a consulta aberta não substitui o modelo treinado.
- **e4.1** — porque e4 torna a consulta aberta boa para triagem e ruim para decisão, a arquitetura se divide.
- **e4.1.1** — porque o comportamento de um sistema de consulta aberta depende do texto da consulta, certificar só o modelo não certifica o sistema.

**Quem bloqueia (raiz A).** A Meta detém os pesos e a licença do SAM e do DINO [1][3]; tem incentivo a manter aberto enquanto isso gera ecossistema, e a fechar ou restringir se o uso em vigilância virar risco reputacional. Efeito: a raiz depende de uma decisão de licença de uma empresa (vira premissa escondida na seção 7).

### 5.2 Mecanismos, raiz B

- **e5** — porque um único modelo de 7B lê tabela, equação, manuscrito e ordem de leitura [6] e foi treinado em 7 milhões de PDFs [7], o custo de manter um template por tipo de documento deixa de compensar. Artefatos: Donut [5], olmOCR [6], Qwen3-VL [7] → forte. Referência: a troca de OCR por template para extração por aprendizado em "IDP" levou ~uma década; aqui o custo por página caiu uma ordem de grandeza de uma vez [6].
- **e5.1** — porque e5 faz o modelo extrair e o humano só conferir exceções, o volume de trabalho por documento cai. Troca de ator: do fornecedor de software para o trabalhador.
- **e5.1.1** — porque o humano deixa de ver todo documento, a responsabilidade que ele assina muda de objeto.
- **e5.2** — porque a estrutura passa a ser extraída por quem recebe, exigir que quem envia preencha um modelo fixo deixa de ser necessário. Troca de ator: do sistema para o órgão que define exigências.
- **e5.2.1** — porque e5.2 muda o que o cidadão precisa entregar, o objeto do design passa do campo para a evidência.
- **e6** — porque o custo é de ~US$ 190 por milhão de páginas [6], digitalizar e estruturar acervo inteiro fica abaixo do custo de catalogação manual. Forte.
- **e6.1** — porque acervo estruturado é insumo de treino, o acervo vira objeto de licença.
- **e6.1.1** — porque o custo baixo de e6 vale para qualquer acervo, os acervos brasileiros ficam acessíveis e disputáveis; soberania entra por esse mecanismo, não por discurso.
- **e7** — porque o leitor recupera a estrutura, produzir a versão estruturada deixa de ter justificativa de custo. Fraco (sem artefato aberto).
- **e7.1** — quem perde. Porque a versão estruturada era também a versão acessível, removê-la tira de quem usa leitor de tela clássico.
- **e7.1.1** — porque e7.1 opõe dois grupos com base legal, o conflito vai a juízo.
- **e8** — retroação. Porque o modelo lê o que o humano não vê, o documento vira vetor de instrução escondida. Sem artefato aberto nesta rodada → fraco; confiança média porque o mecanismo é conhecido em agentes (de memória, seção 8).
- **e8.1** — porque e8 torna o conteúdo visual não confiável, a confiança migra para a proveniência.
- **e8.1.1** — porque e8.1 separa prova de imagem, a foto do documento perde função.

**Quem bloqueia (raiz B).** Cartórios e fornecedores estabelecidos de OCR e captura documental: o modelo de negócio do cartório é a fé pública sobre a conferência. Efeito: pressão para que a extração por modelo não tenha valor legal sem conferência, o que sustenta e5.1 mais devagar e fortalece e8.1.

### 5.3 Mecanismos, raiz C

- **e9** — porque os óculos já respondem com visual ao que o usuário vê [18] e o Google lança os seus no outono de 2026 [14], a pergunta sobre o objeto em frente ganha um canal sem tirar o celular. O comportamento já existe em massa no celular (Lens [15]) — o novo é o canal contínuo. Referência de classe: smartphone levou ~4 anos de demo a 10%; óculos e VR levam mais de 10 e ainda não chegaram (classe da skill). Prazo 2032 assume trajetória mais próxima do relógio inteligente que do VR (de memória; seção 8).
- **e9.1** — porque o leitor passa a ser o óculos, quem projeta superfície física passa a ter dois leitores.
- **e9.1.1** — porque rótulo obrigatório é regra sanitária, mover informação para camada consultável esbarra em regulador. Ator novo.
- **e9.2** — porque a câmera vê o dia inteiro e a consulta aberta indexa por conceito, o dia vira arquivo pesquisável. Fraco.
- **e9.2.1** — porque arquivo existente é requisitável em juízo, e9.2 cria prova.
- **e10** — porque o encadeamento óculos + busca facial + bases públicas já identifica estranhos [11] e os óculos estão em varejo [18], identificar alguém na rua não exige mais câmera fixa nem operador. Médio: I-XRAY é demonstração, não produto.
- **e10.1** — retroação. Porque e10 torna o óculos uma ameaça percebida, estabelecimentos respondem com regra de casa. Fraco (sem artefato aberto).
- **e10.1.1** — porque e10.1 fecha portas ao usuário, o fabricante tem incentivo a vender a restrição.
- **e10.2** — porque a consulta aberta depende de padrões visuais, quem quer escapar investe em padrão que confunde.
- **e10.2.1** — porque o modelo é retreinado, a camuflagem envelhece; o modelo de negócio vira assinatura.
- **e11** — porque o objeto é reconhecido pelo nome na hora [1][2], o designer não precisa de marcador nem de mapa prévio. Médio: SAM 3.1 em tempo real só em GPU de datacenter [2].
- **e11.1** — porque o visitante pode nomear, a obra pode responder ao nome.
- **e11.1.1** — porque o que a obra reconhece é decidido por uma lista de conceitos, essa lista vira decisão de autoria.

**Quem bloqueia (raiz C).** Meta e Google capturam o fluxo visual e decidem o que o óculos processa; a própria política de retenção é decisão delas [14]. Também bloqueiam: estabelecimentos (e10.1) e reguladores europeus via art. 5 do AI Act [12].

### 5.4 Cruzamentos

- **Convergência 1 — a pergunta como unidade regulada.** e2.1.1 (a consulta a acervo público vira objeto de registro) e e1.2.1 (contrato e perícia reexecutam a consulta) chegam ao mesmo ponto a partir de ramos distintos da mesma raiz; e e4.1.1 (a consulta certificada como parte do dispositivo) chega lá pela saúde. Três caminhos para "a frase da consulta vira documento com efeito jurídico". É o achado mais valioso do mapa: quem projeta interação passa a projetar consultas que serão auditadas.
- **Convergência 2 — dois leitores para toda superfície.** e3.1 (sinalização legível por modelo), e9.1 (embalagem legível por óculos) e e7 (PDF que dispensa versão estruturada) — de raízes A, C e B — chegam a "toda superfície visual passa a ter um leitor humano e um leitor máquina". A contradição interna é que e7.1 mostra que o leitor-máquina pode piorar o acesso de quem não o tem.
- **Convergência 3 — a descrição substitui a identificação.** e2.1 (raiz A) e e10 (raiz C) chegam a perfilamento sem biometria formal: um por acervo público, outro por olhar privado.
- **Retroalimentação.** e1.1.1 (casos difíceis como ativo) reforça a raiz A só para quem tem o acervo: a consulta aberta fica boa onde há dados, e o setor sem dados fica preso ao genérico — ciclo que concentra.
- **Retroalimentação negativa.** e10.1 (proibição social de óculos com câmera) enfraquece a raiz C e, via e10.1.1, empurra fabricantes para percepção seletiva, que por sua vez reduz o valor de e9.2.
- **Contradição.** e2.2 (prefeituras apagam acervo) e e2.1.1 (registro obrigatório de consultas a acervo público) podem coexistir, mas e2.2.1 (acervo migra para o privado) contradiz a eficácia de e2.1.1. O que decide: se a regulação da consulta alcança operador privado ou só o Estado.

### 5.5 Cobertura STEEP e quem perde

Social: e3, e10, e9.2. Tecnológico: e1, e5, e11. Econômico: e1.1, e5.1, e6.1. Ecológico: **vazio como efeito próprio**; aparece só como caso de uso (SA-FARI, DINOv3 no WRI [2][3]) dentro de e1 — registro, não forço. Político: e2, e2.1, e6.1.1. Quem perde: anotadores (e1.1), digitadores e conferentes (e5.1), audiodescritores (e3.2), pessoas que dependem de documento acessível sem leitor por modelo (e7.1), pessoas filmadas (e10), setores sem acervo próprio (e1.1.1).

## 6. Sinais fracos e wildcards

### 6.1 Sinais fracos

1. **ORTHOS e a fronteira entre ver e sentir.** A turma trouxe ORTHOS, extensão que simularia a resposta emocional a manchetes com modelo da Meta. **Não encontrei o ORTHOS** na busca (seção 12). O modelo provável por trás é o TRIBE v2 (Meta, 26/03/2026), que prevê a resposta de fMRI a imagem, vídeo, áudio e texto, treinado com mais de 700 voluntários, licença não comercial [17]. O que mudaria o mapa: se "o que esta imagem provoca em quem vê" vira consulta como "o que há nesta imagem", a percepção aberta passa a incluir o efeito sobre o espectador — e colide com a proibição de reconhecimento de emoção em trabalho e escola do AI Act [12]. Sinal observável: um produto comercial usando previsão de resposta cerebral para ranquear mídia (a licença NC hoje impede o TRIBE v2).
2. **Auto Label por frase na ferramenta de anotação** [8]. Sinal de que a anotação vira auditoria (e1.2). Sinal observável: queda no número de horas de anotação contratadas por projeto de visão reportada por plataformas ou fornecedores.
3. **Agente que opera a tela como imagem** (Skyvern, 64,4% no WebBench [9]). Se a tela vira documento lido por máquina, a interface gráfica feita para humano passa a ser API de fato — e o design de interface ganha um usuário não humano. Sinal observável: sites de governo publicando regras para tráfego de agentes visuais.
4. **Busca facial em óculos** (I-XRAY [11]). Sinal observável: primeiro produto comercial de óculos com identificação de terceiros ou primeira decisão judicial sobre o tema.

### 6.2 Wildcards

- **W1 — Segmentação aberta em tempo real no óculos de consumo, com rotulagem contínua do campo de visão.** Mecanismo: destilação do SAM 3 para variantes pequenas (o DINOv3 já tem destilados para dispositivos restritos [3]) + NPU dedicado nos óculos. Improvável até ~2035 porque hoje o tempo real exige H100 [2] e a bateria do Meta Ray-Ban Display é de até seis horas de uso misto [18]. O que faria: acelera e9, e10, e11 em cinco a dez anos e antecipa e10.1. Sinal precoce: benchmark público de segmentação por conceito acima de 10 fps em chip móvel.
- **W2 — Fechamento dos pesos abertos de visão depois de um escândalo.** Mecanismo: um caso de identificação e perseguição via óculos ou via consulta a acervo público leva Meta (ou regulador) a retirar os pesos do SAM e do DINO de distribuição aberta. Improvável porque os pesos já circulam e a Meta ganha com o ecossistema. O que faria: congela a raiz A para quem não tem modelo próprio, concentra em grandes fornecedores e mata o experimento da seção 10 na forma atual. Sinal precoce: mudança na licença do SAM ou do DINO restringindo vigilância.
- **W3 — "Toda imagem publicada é dado pessoal estruturado".** Mecanismo: uma autoridade de proteção de dados (ANPD, ou uma autoridade europeia) decide que, como qualquer imagem é legível por conceito, publicar uma foto com pessoas equivale a publicar os dados extraíveis dela. Improvável pela extensão do efeito. O que faria: inverte e6 e e9.2, e cria mercado para publicação com "desfoque de conceito". Sinal precoce: decisão administrativa aplicando proteção de dados a atributos inferidos de foto pública.

## 7. Contra o próprio mapa

### 7.1 Pré-mortem

"É 2046 e este mapa se mostrou errado. Por quê?"

1. **A consulta aberta ficou boa em conceito comum e parou aí.** Se o teto em conceitos finos [2][8] não cair, a raiz A vira "um vocabulário fechado muito maior" — melhoria sustentadora, não ruptura. Aponta para e1.1.1 e e1.2.1, que dependem de a consulta aberta ser a regra. Ação: e1.2.1 já estava em baixa; empurro **e1.1 de 2030 para 2032** (confiança média mantida) e mantenho e4 como retroação forte.
2. **Óculos com câmera não passaram do nicho.** Referência VR: mais de uma década de demo sem chegar a 10%. Aponta para e9, e9.2, e11. Ação: e9 prazo 2030 → 2032; e11 prazo 2031 → 2034; e9.2 confianca media mantida mas sinal fraco explicitado.
3. **O documento adversarial matou a leitura sem conferência.** Se e8 for mais forte do que previsto, e5.1 e e5.2 não acontecem. Ação: e5.2 confianca alta → media; e5.1 prazo 2031 → 2033.

### 7.2 Extrapolação linear

- **e6** é "mais acervo digitalizado, mais barato" — extrapolação. Ganha não-linearidade só via e6.1 (acervo vira objeto de licença, com troca de ator). Mantido na 1ª ordem porque o custo caiu uma ordem de grandeza de uma vez [6], mas marcado.
- **e9** é "o Lens no rosto". A não-linearidade está em o canal ser contínuo, o que habilita e9.2 e e10; sem isso, seria só contexto. Mantido.
- **e1.2** (ferramentas de anotação viram auditoria) era, na primeira versão, filho "mais adiante" de e1 — passou no teste de troca de ator (quem opera a ferramenta muda de função), por pouco.

### 7.3 Velocidade de adoção

- **e2 (2031)**: exige que prefeituras adotem consulta retroativa aberta em cinco anos. Referência: Smart Sampa levou do anúncio à operação com reconhecimento facial ~2 anos (lançado ~2022–2023, facial desde out/nov/2024 [13]; início de memória). Plausível para capitais; global, não. Mantido 2031, mas a prosa restringe a grandes cidades.
- **e10.1 (2031)**: proibição em estabelecimentos exige que óculos com câmera sejam comuns o bastante para gerar reação; se e9 vai a 2032, e10.1 em 2031 só se sustenta porque a reação vem antes da massa (como vinha com Google Glass — de memória). Mantido, confiança média.
- **e3 (2029)**: base de 1 milhão de usuários já existe [10]; a migração para consulta dirigida é de produto, não de adoção. Mantido.
- **e5 (2028)**: modelos e custo já disponíveis [6][7]; a adoção em back-office regulado é mais lenta. Mantido 2028 como "visível para o público do mapa", não como maioria.

### 7.4 A raiz que não acontece

- **Sem a raiz A:** sobram a raiz B (independente: depende de VLMs, não de segmentação) e metade da raiz C (e10 se sustenta com busca facial de lista fechada, como no I-XRAY [11]; e3 com VLM de descrição [10]). O mapa perde e1, e2, e4 e e11. Não é "nada": as raízes não são uma só disfarçada.
- **Sem a raiz B:** o documento continua em OCR + template; perde-se e5–e8; A e C ficam.
- **Sem a raiz C:** óculos não pegam; sobra a consulta aberta em câmera fixa e celular; e9–e11 caem, e e3 volta para o celular.

### 7.5 Suposições escondidas

1. **Os pesos de visão continuam abertos.** O SAM e o DINO são da Meta [1][3]. Quebrada → W2.
2. **Energia e GPU seguem baratas o bastante** para rodar consulta sobre acervo de vídeo inteiro; o custo linear por objeto rastreado [2] é um limite real.
3. **O AI Act mantém o desenho de proibições por categoria** [12]; se ele passar a regular por uso, e2.1 perde o mecanismo.
4. **Plataformas de óculos permitem apps de terceiros com acesso à câmera.** Se não, e10 depende de hack (como o I-XRAY usou transmissão pelo Instagram [11]).
5. **O português é bem servido** pelas consultas; os benchmarks abertos que li são em inglês [1][4].

### 7.6 Viés do autor

A zona de interesse é "percepção e mídia sintética", e o público é quem projeta mídia: por isso e11 e e11.1 estão aqui — são os efeitos de que o autor gosta, com o sinal mais fraco do ramo C. Também o ramo de acessibilidade (e3) tende ao otimismo; o contrapeso é e7.1.

### 7.7 Calibração

Contagem final: 1ª ordem alta 4 · média 7 · baixa 0; 2ª ordem alta 0 · média 12 · baixa 5; 3ª ordem alta 0 · média 0 · baixa 17. Cai com a ordem.

### 7.8 Registro de alterações

- e1.1: prazo 2030 → 2032, porque o pré-mortem 1 mostra que casos difíceis sustentam a anotação por mais tempo.
- e5.2: confianca alta → media, porque o pré-mortem 3 (documento adversarial) ataca exatamente a leitura sem conferência.
- e5.1: prazo 2031 → 2033, pelo mesmo motivo e pelo bloqueio de cartórios (5.2).
- e9: prazo 2030 → 2032, porque a referência VR/óculos é mais lenta que a do smartphone.
- e11: prazo 2031 → 2034, porque tempo real hoje só em H100 [2].
- e2.1: confianca alta → media, porque o mecanismo é leitura minha do texto do art. 5 [12], sem caso real.
- e9.2: sinal medio → fraco, porque não abri nenhuma fonte sobre memória visual contínua em produto.
- e10.1: sinal medio → fraco, porque não abri artefato de proibição em estabelecimento.
- Efeito removido (vai para a seção 12): "e3.3 Pessoas cegas passam a navegar a cidade sem bengala" — removido por falhar no teste da causa solta (também decorreria de navegação por GPS/LiDAR) e por extrapolação sem mecanismo de adoção.
- Efeito removido (vai para a seção 12): "e6.2 A profissão de arquivista desaparece" — removido por ser efeito genérico proibido ("profissão some") sem mecanismo específico.
- Efeito removido (vai para a seção 12): "e11.2 Publicidade passa a comprar o conceito visto pelo usuário" — removido para evitar raiz duplicada com o tema de agentes/comércio; guardado como caminho.

Cota: cada raiz teve pelo menos um efeito rebaixado ou removido (A: e1.1, e2.1, e3.3; B: e5.1, e5.2, e6.2; C: e9, e9.2, e10.1, e11, e11.2).

## 8. O que a máquina errou

1. **Número da Roboflow sem abrir.** O resultado de busca dizia "mais de 1 milhão de engenheiros"; a página aberta não trazia o número [8]. Quase entrou na seção 3.4 como fato; ficou como "sem número encontrado".
2. **Sama e automação.** A demissão de 1.108 pessoas em Nairóbi [16] foi tentadora como evidência direta de e1.1, mas a fonte (página de empregos) atribui ao fim de um contrato com a Meta, não à automação. Rebaixei para sinal de fragilidade, e a fonte em si tem confiabilidade baixa.
3. **ORTHOS não encontrado.** A descrição da turma diz "baseada em modelo da Meta"; liguei ao TRIBE v2 [17] por inferência. Pode ser outro modelo (por exemplo um classificador de emoção em texto). A ligação é minha, não da fonte.
4. **Citações de memória, sem abrir:** a trajetória do Google Glass (reação social antes da massa), o prazo do smartphone (~4 anos até 10%, a classe da própria skill), a data de lançamento do Smart Sampa (~2022–2023), o fato de galerias de celular buscarem fotos por texto, e a existência de injeção de instrução em documentos lidos por agentes. Todos estão marcados na prosa; nenhum sustenta sozinho um efeito com confiança alta.
5. **Leitura jurídica.** e2.1 depende de eu estar lendo certo o art. 5 do AI Act [12]: que busca por atributo não biométrico não é "identificação biométrica". Não sou fonte jurídica; um parecer pode mostrar que a definição de dado biométrico alcança marcha ou silhueta, o que derruba o mecanismo.
6. **Fonte trocada na verificação.** Eu tinha citado o AR Insider para a série do Lens (3 → 8 → 10 bilhões/mês); abri a página, mas ela recusa acesso automatizado (403) e não passa na checagem de links. Troquei pela fonte primária do Google (quase 20 bilhões/mês, out/2024) [15]. O número de 20 bilhões também aparece em páginas de SEO que se citam entre si; usei só o do Google.
7. **Datas "futuras".** A ferramenta de leitura estranhou a data de 02/07/2026 do post da Roboflow; a data é coerente com hoje (22/09/2026). Registro para que ninguém descarte a fonte por isso.

## 9. Três cenários para 2046

**Provável.** Em 2046, câmeras de fábrica, fazenda, porto e prefeitura são configuradas por frase, e ninguém mais contrata anotação para conceitos comuns; os anotadores que sobraram são especialistas em casos difíceis, e esses acervos são a propriedade mais valiosa de cada setor. O documento chega em qualquer formato e é lido por quem recebe; o formulário sobrevive em poucos lugares, e cartórios assinam amostras, não documentos. Óculos com câmera são comuns entre profissionais e em parte do público urbano, com regras de casa que os proíbem em clínica, escola e bar; a percepção seletiva ("este óculos não processa rostos") é padrão de mercado. A regulação passou a mirar a consulta: grandes cidades mantêm registro de cada pergunta feita ao acervo de câmera pública. Sinal precoce: a primeira capital que publica um registro de consultas a vídeo público.

**Desejável.** Em 2046, a consulta aberta serve sobretudo a quem precisava de olhos: pessoas cegas navegam espaços públicos projetados e testados para leitura por modelo, e a audiodescrição humana virou arte assinada. Arquivos públicos brasileiros foram estruturados sob licença negociada pelo Estado, com retorno para pesquisa local. A consulta a acervo público exige mandado e deixa rastro; óculos vendidos no país não identificam terceiros por padrão. Para chegar aqui, seria preciso: regular a consulta (não só o rosto) antes de 2035, manter pesos de visão abertos e financiar acervos de casos difíceis como bem público (saúde, agro). Sinal precoce: edital público de acessibilidade que exige teste com modelo de visão aberta.

**Indesejável.** Em 2046, a vigilância por descrição é rotina: "homem de boné, mochila, andando rápido" é pergunta que polícia, condomínio e varejo fazem a acervos privados que nenhuma regra alcança, porque a lei protegeu o rosto e não a descrição. Os óculos das duas maiores plataformas registram tudo e o arquivo pessoal é intimado em processos; quem pode paga camuflagem por assinatura. A visão boa é das empresas com acervo próprio; o resto do mundo usa o genérico, que erra em conceito fino em português. O documento acessível sumiu porque "o leitor dá conta". Sinal precoce: primeiro contrato público de consulta retroativa por descrição sem registro de consulta, ou decisão que declare busca por atributo fora do conceito de biometria.

## 10. O experimento

**O que é.** "Contador por frase": uma página que recebe o vídeo de uma câmera apontada para uma cena combinada da sala (mesas, objetos, mochilas — **sem rostos**: a câmera enquadra de cima e os rostos são borrados antes de qualquer processamento, e ninguém é filmado sem aceitar) e responde a consultas escritas em português pela turma ("conte as garrafas", "segmente os cabos no chão", "marque a mochila que não está em cima de uma cadeira"). Por baixo, SAM 3 (via Roboflow ou Hugging Face) e Grounding DINO para comparação; um VLM (Qwen3-VL) traduz consultas compostas em conceitos.

**Que pergunta responde.** Onde está o limite entre "vocabulário aberto" e "vocabulário fechado muito grande"? Se consultas escritas por estudantes, em português, sobre conceitos da cena local (não do COCO), funcionam, a raiz A é ruptura; se só os conceitos comuns funcionam, é melhoria sustentadora.

**Tecnologia emergente, e por que não dá com a madura.** Um detector de classes fixas (YOLO treinado no COCO) só encontra as 80 classes com que foi treinado: "cabo no chão" ou "mochila que não está numa cadeira" exige coletar, anotar e treinar. A consulta aberta faz isso sem treino [1][4]. É exatamente o que a madura não faz.

**O que a turma faz em sala.** (1) Cada pessoa escreve cinco consultas: duas comuns, duas locais, uma composta. (2) Três pessoas contam à mão, independentemente. (3) A máquina responde; a turma registra acerto, erro e erro confiante. (4) Segunda rodada: a turma tenta **enganar** a consulta (objeto parecido, oclusão, roupa estampada) — é o ensaio de e10.2. (5) Terceira rodada, só com objetos: a turma faz uma consulta "retroativa" sobre os primeiros cinco minutos gravados — e discute quem deveria poder fazer essa pergunta (e2, e2.1.1).

**Resultado que faria o autor mudar de ideia.** Se, nas consultas locais e compostas em português, a máquina acertar a contagem humana em menos de metade dos casos, a raiz A está superestimada: rebaixo e1 para média e empurro todo o ramo em cinco anos. Se acertar em mais de 80%, inclusive nas compostas, e4 (erro confiante como freio) está superestimado e o prazo de e2 deve ser antecipado.

## 11. Fontes

1. SAM 3: Segment Anything with Concepts (arXiv 2511.16719) — https://arxiv.org/abs/2511.16719 — sustenta a capacidade de segmentar por conceito, 4 milhões de conceitos, ganho de 2×; datas. Confiável: artigo da equipe da Meta, com código aberto.
2. Meta AI, blog SAM 3 / SAM 3.1 — https://ai.meta.com/blog/segment-anything-model-3/ — velocidade (16–32 fps em H100), uso em produto (Edits, Marketplace, Vibes), SA-FARI, limitações em conceitos finos. Confiável para fatos técnicos; é fonte interessada para adoção.
3. Meta AI, blog DINOv3 — https://ai.meta.com/blog/dinov3-self-supervised-vision-model/ — 7B parâmetros, 1,7 bi imagens, licença comercial, casos WRI e NASA JPL. Fonte primária, interessada.
4. Grounding DINO (arXiv 2303.05499) — https://arxiv.org/abs/2303.05499 — detecção por descrição, 52,5 AP zero-shot no COCO. Confiável; publicado no ECCV 2024.
5. Donut, OCR-free Document Understanding Transformer (arXiv 2111.15664) — https://arxiv.org/abs/2111.15664 — origem da leitura de documento sem OCR (2021). Confiável; ECCV 2022.
6. Ai2, blog olmOCR — https://allenai.org/blog/olmocr — ~US$ 190 por milhão de páginas, base Qwen2-VL-7B, tabelas/equações/manuscrito. Confiável; projeto aberto de ponta a ponta; custo é autodeclarado.
7. Qwen3-VL Technical Report (arXiv 2511.21631) — https://arxiv.org/abs/2511.21631 — tamanhos, 256 mil tokens, parsing de documento. Confiável como relatório técnico; números de benchmark autodeclarados.
8. Roboflow, Natural Language Image Annotation — https://blog.roboflow.com/natural-language-image-annotation/ — rotulagem por frase; limites (minúsculo, defeito raro, difícil de dizer). Fonte de fornecedor; útil pelos limites que admite.
9. Skyvern (GitHub) — https://github.com/Skyvern-AI/skyvern — agente por visão; 23,1 mil estrelas; 64,4% WebBench. Repositório primário; benchmark autodeclarado.
10. Wikipedia, Be My Eyes — https://en.wikipedia.org/wiki/Be_My_Eyes — 10 milhões de voluntários, 1 milhão de usuários, Be My AI (2023), parcerias. Média: enciclopédia, números de origem da empresa.
11. WBUR Endless Thread, "Dox Glasses" — https://www.wbur.org/endlessthread/2025/01/10/dox-glasses — I-XRAY: identificação de estranhos com óculos Meta. Confiável: rádio pública, com entrevista aos autores.
12. EU AI Act, Artigo 5 — https://artificialintelligenceact.eu/article/5/ — proibições: identificação biométrica remota em tempo real, categorização biométrica, emoção em trabalho/escola, raspagem de rostos. Texto da lei em site de referência não oficial; confiável para o texto.
13. Prefeitura de São Paulo, Smart Sampa supera 1.000 foragidos presos em 2025 — https://prefeitura.sp.gov.br/web/seguranca_urbana/w/smart-sampa-supera-marca-de-1.000-criminosos-presos-em-2025 — 31 mil câmeras, 1.001 presos no semestre. Fonte oficial e interessada; sem dado de falso positivo.
14. Google, "Intelligent eyewear with Gemini is coming this fall" (I/O 2026) — https://blog.google/products-and-platforms/platforms/android/android-xr-io-2026/ — óculos com Gemini, parceiros, outono de 2026. Fonte primária de anúncio; sem política de dados.
15. Google, atualizações de Search e Lens (03/10/2024) — https://blog.google/products-and-platforms/products/search/google-search-lens-october-2024-updates/ — quase 20 bilhões de buscas visuais por mês; base da recusa da busca visual como raiz. Fonte primária e interessada; número autodeclarado.
16. Hustlelife, Best AI Training Jobs in Kenya (2026) — https://hustlelife.co.ke/best-ai-training-jobs-in-kenya/ — 1.108 demissões na Sama em abril de 2026. Baixa: página de guia de empregos, sem fonte primária citada.
17. Meta AI, blog TRIBE v2 — https://ai.meta.com/blog/tribe-v2-brain-predictive-foundation-model/ — previsão de resposta cerebral a mídia; 700+ voluntários; CC BY-NC. Fonte primária, interessada.
18. Meta, blog Meta Ray-Ban Display — https://www.meta.com/blog/meta-ray-ban-display-ai-glasses-connect-2025/ — lançamento em 30/09/2025, US$ 799, 69 g, até 6 h, IA com visual. Fonte primária de produto.

## 12. Anexo — o levantamento bruto

### 12.1 Saída do verificador

```
$ python3 futurizacao-giordano/references/verificar.py tendencia-maquinas-que-veem-qualquer-coisa-visao-de-vocabulario-aberto.md --links   # 22/09/2026
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 3 (frontmatter diz 3)
efeitos ordem 1: 11 (frontmatter diz 11)
efeitos ordem 2: 17 (frontmatter diz 17)
efeitos ordem 3: 17 (frontmatter diz 17)
prazo > horizonte (2046) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 4 · media 7 · baixa 0
confiança ordem 2: alta 0 · media 12 · baixa 5
confiança ordem 3: alta 0 · media 0 · baixa 17
links da seção 11: 18/18 respondem (frontmatter diz fontes: 18)
RESULTADO: ok
```

### 12.2 Premissas assumidas além do briefing

- A régua "o que já é comum em produto de massa" foi aplicada a busca visual (Lens), reconhecimento facial de lista fechada e OCR clássico; busca de fotos por texto em galeria foi julgada comum de memória.
- "Nota sobre o Brasil" foi atendida com Smart Sampa, acervos documentais e e6.1.1; não abri legislação brasileira de IA nem de proteção de dados nesta rodada.
- Horizonte de 20 anos: aceitei prazos de 2ª ordem até 2037 e de 3ª até 2044, todos dentro do horizonte.
- Assumi que o público "quem projeta mídia e interação" inclui designers de espaço, sinalização e embalagem (e3.1, e9.1).
- Interpretação de fronteira: agentes que operam a tela ficaram com o tema 4; robôs, com o tema 9; 3D, com o tema 10.

### 12.3 Buscas feitas (22/09/2026) e o que deram

1. "SAM 3 Segment Anything with Concepts Meta release…" → arXiv, blog Meta, Roboflow, Ultralytics; abertos [1][2].
2. "DINOv3 Meta self-supervised…" → blog Meta, arXiv 2508.10104; aberto [3].
3. "Be My Eyes Be My AI number of users" → Wikipedia aberta [10]; página oficial bemyeyes.com/bme-ai respondeu **403** (não entra como fonte).
4. "OCR-free document understanding VLM 2026 benchmark olmOCR Qwen2.5-VL" → resultados apontam olmOCR-2 (out/2025, 82,4 no olmOCR-Bench, sobre Qwen2.5-VL-7B), OmniDocBench (1.651 páginas, CVPR 2025), MosaicDoc, DocSLM, benchmark de PDF francês. Só snippets; não citados como fonte.
5. "Meta Ray-Ban Display glasses sales 2026 live AI" → blog Meta aberto [18]; sem número de vendas encontrado.
6. "I-XRAY Harvard students…" → WBUR aberto [11]; Forbes, Cybernews, CCN só em snippet.
7. "EU AI Act prohibited practices…" → artigo 5 aberto [12]; FPF, WilmerHale só em snippet. Snippet diz que as proibições valem desde 02/02/2025.
8. "Smart Sampa reconhecimento facial…" → página oficial de jun/2025 aberta [13]; outra página oficial citada em snippet fala em meta de 40 mil câmeras atingida em set/2025 e 1.918 foragidos presos — **não aberta**, não usada; Al Jazeera (2023) sobre risco de racismo — não aberta.
9. "Roboflow auto label SAM 3…" → blog aberto [8]; docs de changelog de nov/2025 só em snippet; número "1 milhão de engenheiros" só em snippet.
10. "Grounding DINO open-set…" → arXiv aberto [4]; DINO-X e Grounding DINO 1.5 só em snippet.
11. "Donut OCR-free…" → arXiv aberto [5].
12. "Skyvern browser automation…" → GitHub aberto [9].
13. "Google Lens visual searches per month 2025 billion" → AR Insider aberto (3 bi jun/2021, 8 bi mai/2022, 10 bi fev/2023), mas responde 403 a acesso automatizado e saiu da seção 11; nova busca "blog.google Lens billion" → blog do Google (out/2024) aberto [15]. Páginas de SEO com 12 e 20 bilhões não abertas.
14. "olmOCR 2 Allen AI cost per million pages" → blog Ai2 aberto [6] (via redirecionamento de olmocr.allenai.org/blog).
15. "Android XR glasses Gemini sees what you see 2026" → blog Google aberto [14]; TechTimes (snippet) diz que o Google não publicou política de retenção nem de treino com as imagens dos óculos — não aberta.
16. "ORTHOS browser extension emotional response headlines Meta model" → **nada sobre ORTHOS**; achou apenas um estudo do MIT (CSCW 2022) sobre extensão que deixa leitores reescrever manchetes — não relacionado.
17. "Meta TRIBE brain encoding model…" → blog TRIBE v2 aberto [17]; arXiv TRIBE (2507.22229, 1º lugar no Algonauts 2025) só em snippet.
18. "Qwen3-VL technical report grounding document parsing" → arXiv aberto [7]; snippets de GLM-OCR, MonkeyOCR v1.5, VAREX, "Unlimited OCR Works" (jun/2026) — não abertos; indicam que o campo de parsing de documento por VLM está muito ativo em 2026.
19. "data annotation workers jobs automated by foundation models…" → Hustlelife aberta [16]; Qhala (Medium) sobre exploração de anotadores no Sul Global — não aberta.

### 12.4 Efeitos cortados e caminhos abandonados

- **e3.3 (cortado)** "Pessoas cegas passam a navegar a cidade sem bengala." Falha no teste da causa solta (GPS, LiDAR e navegação por áudio produzem o mesmo) e é extrapolação sem mecanismo de adoção; bengala tem função física além da informação.
- **e6.2 (cortado)** "A profissão de arquivista desaparece." Efeito genérico proibido ("profissão some"); o mecanismo real está em e6.1 (licença de acervo), que muda o trabalho do arquivista em vez de eliminá-lo.
- **e11.2 (cortado)** "Publicidade passa a comprar o conceito visto pelo usuário do óculos (leilão do que está no campo de visão)." Plausível e com mecanismo, mas pertence ao cruzamento com comércio agêntico (tema 5); guardado como ponto de convergência entre temas.
- **Raiz candidata abandonada:** "Descrever substitui identificar" como raiz própria. Virou efeito (e2.1) e convergência (5.4, conv. 3), porque o que rompe é derivado da raiz A — não tem "por que agora" próprio.
- **Raiz candidata abandonada:** "A tela vira documento lido por máquina" (Skyvern). Fronteira com o tema 4; mantida só como sinal fraco (6.1, item 3).
- **Raiz candidata abandonada:** "Características visuais sem rótulo" (DINOv3) como raiz. É pré-condição técnica da raiz A (por que agora), não ruptura de prática; não passa na pergunta 1 do §2 sozinha.
- **Efeito considerado e não incluído:** inspeção ambiental por satélite com DINOv3 (caso WRI [3]). Seria o único efeito ecológico; não entrou porque é melhoria sustentadora (medir melhor o que já se media). Registro a categoria ecológica como vazia (5.5).
- **Efeito considerado e não incluído:** LaTeX-OCR / equação em imagem → LaTeX mudando a produção científica. Cabe em e5/e6; não abre ator novo.
- **Rodada de calibração:** na primeira versão, e1, e3, e5, e6 e e2.1 estavam em alta, e e5.2 também; a bateria do §6 rebaixou e2.1 e e5.2 (7.8).

### 12.5 Material da turma considerado

Catálogo trazido pela turma, conferido só pelo nome e pela linhagem (não abri cada repositório): segment-anything, sam2, SAM 3, Grounded-Segment-Anything, dinov2, rf-detr, YOLOX, supervision, LAVIS, PaddleOCR, EasyOCR, LaTeX-OCR, insightface, face-alignment, SlowFast, Skyvern (aberto [9]), cvat, label-studio, donut (artigo aberto [5]), react-visual-annotator, ml-classifier, llama.cpp-ts, ORTHOS (não encontrado).
