---
tema: Máquinas que veem qualquer coisa - visão de vocabulário aberto
slug: maquinas-que-veem-qualquer-coisa-visao-de-vocabulario-aberto
autor_login: kvv
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-15
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 12
efeitos_ordem_3: 18
tecnologias_citadas: [segmentação de conceito promptável (SAM 3), backbones auto-supervisionados congelados (DINOv3), detecção de vocabulário aberto (Grounding DINO, RF-DETR), compreensão de documento sem OCR (Donut, Qwen3-VL), grounding referencial pixel-a-frase (Qwen3-VL-Seg), percepção contínua em óculos (Live AI / super sensing), telemetria de acerto por conceito]
fontes: 14
confianca: media
experimento: Um "caça ao conceito" em sala onde a turma escreve consultas em texto contra um vídeo do próprio campus e mede quantas pessoas o sistema encontra por atributo sem nunca usar o rosto.
skill_usada: futurizacao-kvv
publico_ok: false
---

## Seção 1 — Resumo

Por trinta anos um sistema de visão só enxergava o que estava na sua lista de classes; a lista era escrita no treino, por quem tinha o dataset. Isso acabou: modelos como SAM 3 aceitam um conceito em texto — "ônibus escolar amarelo" — e devolvem todas as ocorrências, e documentos passam a ser entendidos como imagem, sem OCR. Este mapa sustenta que a ruptura relevante não é a acurácia, e sim **o deslocamento de quem escreve o vocabulário**: do fabricante do dataset para quem digita a consulta, em tempo de execução, sem deixar rastro. Daí saem três consequências que a conversa pública ainda não organizou: o trabalho de anotação migra de produzir rótulo para contestar rótulo; o formulário perde a função de contrato de dados; e — o ponto mais incômodo — a vigilância deixa de precisar do rosto, porque "pessoa de mochila vermelha correndo" identifica sem ser dado biométrico e, portanto, escapa da lei que foi escrita para proibir a biometria. Até 2031 o gargalo não será ver, será **provar que se viu certo**.

## Seção 2 — O tema

Visão de vocabulário aberto é a capacidade de detectar, segmentar e descrever por **conceito expresso em linguagem**, em vez de por classe fixada no treinamento. O termo técnico consolidado é *promptable concept segmentation*: o modelo recebe um sintagma nominal curto, um exemplar visual, ou os dois, e devolve máscaras e identidades para todas as instâncias que casam [1]. O par disso, no mundo do texto impresso, é a compreensão de documento sem OCR — a página tratada como imagem e convertida direto em estrutura, sem a etapa intermediária de reconhecer caracteres.

Os pontos de contato com mídia e interação são três, e nenhum é periférico. **Primeiro, a interface de busca**: quando o índice de uma coleção visual é escrito em tempo de consulta, o campo de busca deixa de ser um filtro sobre metadados alheios e passa a ser o próprio ato de classificar. **Segundo, a camada de descrição**: a mídia gerada por máquina e a mídia capturada convergem, porque a mesma frase que descreve um quadro serve para encontrá-lo e para sintetizá-lo. **Terceiro, o consentimento**: a diferença entre uma câmera que grava e uma câmera que *reconhece* sempre foi dada pelo software instalado; com vocabulário aberto, a diferença passa a ser dada por uma linha de texto que ninguém publica.

Por que isto exige mapa prospectivo e não levantamento de estado da arte: o estado da arte aqui é público e fácil de listar — pesos abertos, papers datados, benchmarks. O que não é público é **a arquitetura institucional que ainda não existe** para uma capacidade já distribuída. O levantamento diria "SAM 3 dobra a acurácia em segmentação por conceito". O mapa precisa perguntar quem fica com o poder de nomear, quem responde quando a nomeação erra, e qual regulação se torna letra morta por ter sido escrita contra a tecnologia anterior. Essas perguntas só se respondem por encadeamento de efeitos, que é o que a Roda dos Futuros faz.

## Seção 3 — Onde isso está hoje

**O que funciona.** SAM 3, submetido em novembro de 2025 e revisado em março de 2026, unifica detecção, segmentação e rastreamento a partir de prompt de conceito, treinado por um motor de dados com 4 milhões de rótulos de conceito únicos, incluindo negativos difíceis; o benchmark SA-Co que o acompanha tem 214 mil frases únicas sobre 126 mil imagens e vídeos, e o modelo reporta ganho de 2× sobre os sistemas anteriores na tarefa de segmentação de conceito [1][2]. Em operação, roda em torno de 30 ms por imagem numa GPU H200, lidando com mais de 100 objetos [3]. Do lado das características sem rótulo, o DINOv3 — 7 bilhões de parâmetros, 1,7 bilhão de imagens, sem anotação humana — atinge estado da arte **com o backbone congelado**, em detecção, profundidade, segmentação semântica e rastreamento, com licença comercialmente permissiva [4][5]. Do lado visão-linguagem, a família Qwen3-VL traz pesos abertos sob Apache-2.0, OCR em 32 idiomas e grounding 2D/3D, e já ganhou extensão de segmentação referencial que transforma caixas preditas pelo LLM em máscaras por pixel [6][7].

**O que falha, e falha feio.** O benchmark RF100-VL, feito justamente para sair da distribuição da web, mostra que a maioria dos métodos não chega a 10% de mAP na média dos 100 datasets; o Grounding DINO cai de 49,2% de mAP zero-shot no OdinW-13 para 16,0% no RF100-VL; e em imagem médica os modelos de vocabulário aberto — Grounding DINO, Qwen2.5-VL — ficam **abaixo de 2%** [8]. Ou seja: o vocabulário é aberto para o mundo que a internet fotografou, e é fechado para o resto. O próprio SAM 3, no RF100-VL, fica atrás do estado da arte em avaliação zero-shot, e só brilha com dado específico da tarefa [3]. No documento, o quadro é análogo: modelos sem OCR ainda ficam atrás dos baseados em OCR quando o conteúdo é denso, porque abrem mão de uma modalidade de entrada explícita, e a pesquisa recente já trata a verificabilidade da leitura generativa como problema em aberto, não resolvido [9]. Fornecedores relatam taxas de erro de 15 a 20% em extração de informação em cenários reais [10] — número de fornecedor, registrado aqui como alegação e não como medida independente.

**Quem está construindo.** Meta FAIR concentra as duas linhagens estruturantes (SAM e DINO) e as libera com licença utilizável; Alibaba empurra a fronteira de pesos abertos em visão-linguagem; Roboflow ocupa o papel — não trivial — de construir os benchmarks que desmentem o marketing dos modelos que ela mesma distribui; IDEA Research mantém o Grounding DINO como a linha de base contra a qual todo mundo mede. Do lado do consumo, a Meta é também quem tem o parque instalado: os Ray-Ban com câmera e a família de recursos Live AI, com a promessa de "super sensing" — percepção contínua rodando em segundo plano por horas, em vez dos cerca de 30 minutos atuais [11].

## Seção 4 — As disrupções-raiz

Antes das três aceitas, o registro do que foi **recusado** pelo filtro anti-tecnologia madura, conforme a régua da disciplina (o que já é comum em produto de massa não entra): classificação de imagem, detecção com classes fixas, OCR tradicional, reconhecimento facial por template, e "IA generativa que descreve uma foto". Nenhum deles rompe a lógica do campo — são o campo. Também foi recusada, por ser incremental e não estrutural, a hipótese "modelos de visão ficam menores e rodam no celular": é otimização de custo, muda quem paga a conta, não muda quem escreve o vocabulário.

### Disrupção 1 — O conceito como interface: a consulta substitui o dataset

**O que rompe.** Rompe o contrato implícito de que *o que um sistema pode ver foi decidido antes de ser instalado*. Durante toda a história da visão computacional aplicada, a lista de classes era o artefato de governança: ela era negociada, comprada, anotada, auditada e versionada. Com segmentação promptável por conceito, a lista vira uma caixa de texto. O dataset deixa de ser o objeto de controle e o **prompt** passa a ser — só que ninguém construiu, ainda, a disciplina de controlar prompt do jeito que se controlava dataset. O que se rompe não é a visão: é a auditabilidade.

**Por que agora e não há 5 anos.** Três coisas convergiram e nenhuma existia em 2021. Primeira, um motor de dados capaz de produzir conceito **com negativo difícil** em escala de milhões — sem o negativo, o modelo diz "sim" para tudo, e é o negativo que é caro [1]. Segunda, a separação arquitetural entre reconhecer e localizar, via cabeça de presença, que é o que permite ao modelo responder "esse conceito não está aqui" em vez de sempre apontar para algo [1]. Terceira, backbones auto-supervisionados fortes o bastante para servirem **congelados**, o que retira o fine-tuning do caminho crítico e torna a troca de vocabulário uma operação de segundos, não de semanas [4][5].

**O que falta para se concretizar.** Falta o vocabulário funcionar fora da web: enquanto medicina e indústria ficarem abaixo de 2% de mAP zero-shot [8], "qualquer coisa" é publicidade. Falta tamanho: SAM 3 é um checkpoint único de 840M de parâmetros, escala de servidor, sem variante pequena — não é implantável na borda hoje [3]. E falta a peça institucional: nenhum órgão regulador, contrato público ou norma técnica sabe hoje exigir a lista de conceitos ativos num sistema instalado, porque essa lista não é um arquivo, é um comportamento.

### Disrupção 2 — O documento volta a ser imagem, e o formulário perde a função

**O que rompe.** Rompe a cadeia OCR → parser → schema, e com ela a premissa de que um documento precisa ser *digitalizado* antes de ser processado. Se o modelo lê a página como pixels e emite estrutura, então o formulário — que existe para forçar o humano a produzir dado já estruturado — perde a razão de ser. O formulário sempre foi uma tecnologia de compressão: ele empobrece o que a pessoa pode dizer para que a máquina consiga ler. Quando a máquina lê qualquer coisa, a compressão vira custo puro. Junto com ele cai o PDF como formato de troca: ele sobrevive como formato de exibição e morre como contrato de dados.

**Por que agora e não há 5 anos.** Porque só recentemente três condições coincidiram: visão em resolução nativa (a página inteira sem recorte destrutivo), contexto longo o bastante para segurar um documento de dezenas de páginas, e modelos capazes de emitir estrutura válida em vez de prosa. A linhagem conceitual é mais velha — o Donut já propunha compreensão sem OCR — mas era prova de conceito; o que mudou é a existência de pesos abertos com OCR multilíngue robusto e grounding, sob licença permissiva, que qualquer organização pode rodar no próprio servidor [6].

**O que falta para se concretizar.** Falta, sobretudo, **verificabilidade**. Uma leitura errada e uma leitura certa saem com a mesma cara: texto confiante. A pesquisa de 2026 começa a atacar isso explicitamente — OCR generativo com risco controlado, front-ends aterrados que ligam a saída à região da página — mas nada disso está em produção como norma [9]. Enquanto um campo extraído não puder apontar o pixel de onde veio, nenhum tribunal, auditoria fiscal ou perícia contábil vai aceitar extração automática como prova, e a disrupção fica presa no backoffice de baixo risco.

### Disrupção 3 — Vigilância por atributo: a percepção aberta contorna a lei escrita contra a biometria

**O que rompe.** Rompe a categoria jurídica. A regulação de vigilância no mundo inteiro foi construída sobre um objeto específico — o **dado biométrico**, e na prática o rosto. O artigo 5(1)(h) do AI Act europeu proíbe, desde 2 de fevereiro de 2025, a identificação biométrica remota em tempo real em espaços públicos para fins de aplicação da lei, com exceções exaustivas, sob multa de até 35 milhões de euros ou 7% do faturamento global [12]. O PL 2338/2023, aprovado no Senado em dezembro de 2024, importa a mesma arquitetura de risco [13]. Vocabulário aberto sai por fora: "homem de jaqueta vermelha e boné que entrou três vezes na mesma loja hoje" não é template facial, não é dado biométrico pela definição corrente, e identifica uma pessoa concreta com folga suficiente para despachar uma viatura. A disrupção é que **a vigilância se torna não-biométrica sem perder poder identificador**.

**Por que agora e não há 5 anos.** Porque a consulta por atributo composto só virou barata agora, e porque o parque instalado já está no rosto das pessoas. A capacidade de percepção contínua em óculos deixou de ser demo: a Meta trabalha em rodar Live AI em segundo plano por horas, e já discutiu internamente se o LED indicador precisa permanecer aceso nesse modo [11]. E o caso mais instrutivo do ano não é uma promessa, é um achado: em 4 de junho de 2026 a Wired encontrou, e o Threat Lab da EFF verificou por análise estática, código dormente de reconhecimento facial embarcado no aplicativo companheiro dos óculos — modelos que detectavam rostos, convertiam em assinatura biométrica e disparavam "pessoa reconhecida" — distribuído a milhões de aparelhos; a Meta removeu tudo na atualização do dia seguinte [14]. A capacidade já estava no bolso de todo mundo antes de qualquer debate público existir.

**O que falta para se concretizar.** Falta pouco tecnicamente e muito institucionalmente. Tecnicamente falta autonomia de bateria e um modelo de vocabulário aberto que caiba na borda — hoje é escala de servidor [3]. Institucionalmente, falta o deslocamento do objeto da lei: enquanto o regulador proteger **o rosto** em vez de proteger **a finalidade de vigilância**, a conformidade se obtém por reescrita de arquitetura, não por mudança de conduta. No Brasil o sinal já é visível nos dois sentidos: a ANPD colocou biometria no mapa de fiscalização do biênio 2026-2027, analisou 1.594 contribuições de consulta pública e pretende concluir a regra em 2026, tendo já suspendido reconhecimento facial em escolas públicas do Paraná e aberto processo contra clubes de futebol [15]; e o Smart Sampa, maior sistema do gênero na América Latina, produziu, entre 21 de novembro de 2024 e 21 de maio de 2025, 82 pessoas conduzidas a delegacias e liberadas, das quais 23 por inconsistência do reconhecimento facial, sobre 1.246 abordagens no período — dados obtidos via LAI e relatório de transparência, compilados por Lapin, Instituto Peregum e Rede Liberdade [16].

## Seção 5 — A roda dos futuros

```yaml
roda_dos_futuros:
  - id: e1
    efeito: "O rótulo deixa de ser o ativo; a consulta escrita em texto vira o ativo"
    sinal: forte
    prazo: "2026-2029"
    confianca: alta
    filhos:
      - id: e1.1
        efeito: "O mercado de anotação migra de produzir rótulo para contestar rótulo (negativos difíceis, casos-limite)"
        sinal: forte
        prazo: "2026-2029"
        confianca: alta
        filhos:
          - id: e1.1.1
            efeito: "O trabalho de clique barato desaparece como porta de entrada; a anotação vira perícia cara e rara"
            sinal: moderado
            prazo: "2027-2030"
            confianca: media
          - id: e1.1.2
            efeito: "Ontologias proprietárias viram vantagem competitiva: vale o que a empresa sabe nomear, não o que ela fotografou"
            sinal: fraco
            prazo: "2028-2031"
            confianca: baixa
      - id: e1.2
        efeito: "O prompt vira artefato versionado, revisado e auditável — o 'dataset' da nova era"
        sinal: fraco
        prazo: "2028-2031"
        confianca: media
        filhos:
          - id: e1.2.1
            efeito: "Litígio sobre prompt: quem escreveu a consulta responde pelo que a máquina procurou"
            sinal: fraco
            prazo: "2029-2032"
            confianca: baixa
          - id: e1.2.2
            efeito: "Sociedade civil passa a exigir publicação da lista de conceitos ativos em câmera pública"
            sinal: fraco
            prazo: "2029-2032"
            confianca: baixa

  - id: e2
    efeito: "O parque de câmeras já instalado ganha capacidade nova sem troca de hardware (retrofit semântico)"
    sinal: moderado
    prazo: "2027-2030"
    confianca: media
    filhos:
      - id: e2.1
        efeito: "Integradores vendem 'capacidades' por assinatura em vez de equipamento; a receita migra do fierro para a consulta"
        sinal: moderado
        prazo: "2027-2030"
        confianca: media
        filhos:
          - id: e2.1.1
            efeito: "Contrato público passa a ter de listar o que o sistema pode procurar, e não só qual sistema foi comprado"
            sinal: fraco
            prazo: "2029-2032"
            confianca: baixa
      - id: e2.2
        efeito: "Domínios especializados (médico, industrial, agrícola) continuam exigindo dado próprio; o mercado bifurca entre o genérico e o caro"
        sinal: forte
        prazo: "2026-2031"
        confianca: alta
        filhos:
          - id: e2.2.1
            efeito: "Hospitais e indústrias descobrem que são donos do insumo escasso e invertem a relação de poder com as plataformas"
            sinal: fraco
            prazo: "2029-2032"
            confianca: baixa

  - id: e3
    efeito: "O documento é consumido como imagem; o formulário perde a função de contrato de dados"
    sinal: moderado
    prazo: "2027-2030"
    confianca: media
    filhos:
      - id: e3.1
        efeito: "O backoffice de digitação e conferência colapsa para revisão por exceção"
        sinal: moderado
        prazo: "2027-2030"
        confianca: media
        filhos:
          - id: e3.1.1
            efeito: "Profissões de conferência viram profissões de contestação: o valor está em discordar da máquina com fundamento"
            sinal: fraco
            prazo: "2028-2031"
            confianca: media
          - id: e3.1.2
            efeito: "O PDF sobrevive como formato de exibição e morre como formato de troca de dados entre organizações"
            sinal: fraco
            prazo: "2029-2032"
            confianca: baixa
      - id: e3.2
        efeito: "Nasce a exigência de 'citação visual': a resposta tem de apontar o pixel de onde veio"
        sinal: fraco
        prazo: "2027-2031"
        confianca: media
        filhos:
          - id: e3.2.1
            efeito: "Tribunais e auditorias só aceitam extração automática com rastro pixel-a-campo verificável"
            sinal: fraco
            prazo: "2029-2032"
            confianca: baixa

  - id: e4
    efeito: "Descrição do mundo em tempo real vira camada de acessibilidade padrão, não produto de nicho"
    sinal: forte
    prazo: "2026-2029"
    confianca: alta
    filhos:
      - id: e4.1
        efeito: "Pessoas cegas passam a operar cotidianamente com um intermediário que erra com confiança"
        sinal: forte
        prazo: "2026-2029"
        confianca: alta
        filhos:
          - id: e4.1.1
            efeito: "Norma técnica de acessibilidade passa a exigir declaração de incerteza: o sistema tem de saber dizer 'não tenho certeza'"
            sinal: fraco
            prazo: "2029-2032"
            confianca: baixa
      - id: e4.2
        efeito: "Legenda e áudio-descrição geradas viram default de produção audiovisual"
        sinal: moderado
        prazo: "2027-2030"
        confianca: media
        filhos:
          - id: e4.2.1
            efeito: "Acervos audiovisuais históricos ficam pesquisáveis por conceito e reabrem comercialmente"
            sinal: moderado
            prazo: "2028-2031"
            confianca: media
          - id: e4.2.2
            efeito: "Mídia capturada e mídia sintética convergem: a mesma frase serve para achar um plano e para gerá-lo"
            sinal: fraco
            prazo: "2029-2032"
            confianca: baixa

  - id: e5
    efeito: "A vigilância por atributo substitui a vigilância por identidade"
    sinal: moderado
    prazo: "2027-2031"
    confianca: media
    filhos:
      - id: e5.1
        efeito: "A regulação escrita contra a biometria não alcança a busca por atributo: abre-se lacuna jurídica"
        sinal: moderado
        prazo: "2027-2030"
        confianca: media
        filhos:
          - id: e5.1.1
            efeito: "Reguladores deslocam o objeto da lei de 'dado biométrico' para 'finalidade de vigilância'"
            sinal: fraco
            prazo: "2029-2033"
            confianca: baixa
          - id: e5.1.2
            efeito: "Empresas reescrevem sistemas para evitar deliberadamente o rosto e permanecer fora da faixa proibida"
            sinal: fraco
            prazo: "2028-2031"
            confianca: media
      - id: e5.2
        efeito: "Vestuário, marcha, objeto carregado e contexto viram identificadores de facto"
        sinal: fraco
        prazo: "2028-2031"
        confianca: media
        filhos:
          - id: e5.2.1
            efeito: "Discriminação por proxy: o atributo de aparência funciona como marcador de classe e raça sem nunca nomeá-los"
            sinal: moderado
            prazo: "2028-2031"
            confianca: media

  - id: e6
    efeito: "A avaliação vira o gargalo: sabe-se fazer o sistema ver, não se sabe provar que viu certo"
    sinal: moderado
    prazo: "2027-2031"
    confianca: media
    filhos:
      - id: e6.1
        efeito: "Benchmark fechado perde valor; a avaliação contínua em produção vira o padrão de mercado"
        sinal: moderado
        prazo: "2027-2030"
        confianca: media
        filhos:
          - id: e6.1.1
            efeito: "Contratos passam a exigir telemetria de acerto por conceito, não acurácia média agregada"
            sinal: fraco
            prazo: "2029-2032"
            confianca: baixa
      - id: e6.2
        efeito: "Responsabilidade civil passa a precificar o erro de percepção como risco segurável"
        sinal: fraco
        prazo: "2029-2032"
        confianca: baixa
        filhos:
          - id: e6.2.1
            efeito: "Surge a figura do perito em percepção de máquina, chamado para dizer se a consulta era razoável"
            sinal: fraco
            prazo: "2030-2033"
            confianca: baixa
          - id: e6.2.2
            efeito: "Seguradoras recusam cobertura para operação com vocabulário aberto não auditado"
            sinal: fraco
            prazo: "2030-2033"
            confianca: baixa
```

**O que o bloco não exprime sozinho.** Três coisas.

A primeira é que **os ramos não são independentes: e1 e e6 são o mesmo fenômeno visto de dois lados**. Quando o vocabulário sai do dataset e vai para a consulta, o objeto de auditoria some — e é exatamente por isso que a avaliação vira gargalo. O YAML mostra dois galhos; na prática é um nó de corda. Quem resolver a versionagem de prompt (e1.2) resolve metade da avaliação (e6.1), e vice-versa.

A segunda é que **e2.2 é o freio de todo o resto e o YAML o subestima**. Os números do RF100-VL — menos de 10% de mAP na média, menos de 2% em imagem médica [8] — não descrevem uma limitação temporária que escala resolve; descrevem que o vocabulário aberto herda o vocabulário da internet. Coisas que a internet não fotografou com nome permanecem invisíveis. Isso corta o alcance de e3 (documentos de domínio com convenção própria), de e6 (não há como avaliar o que não se sabe nomear) e reduz o cenário desejável de 2031 a uma faixa mais estreita do que a prosa otimista sugeriria.

A terceira é que **e5 tem prazo político, não técnico, e por isso a coluna `prazo` mente ali**. Os efeitos de e1 a e4 amadurecem por dinâmica de custo e adoção: acontecem sozinhos. Os de e5 dependem de um evento de gatilho — um caso público em que alguém é preso ou demitido por causa de uma consulta em texto que ninguém guardou. Sem esse caso, e5.1.1 pode não acontecer nunca; com ele, acontece em dezoito meses. É a única parte do mapa onde a incerteza não é sobre *quando*, e sim sobre *se*.

## Seção 6 — Sinais fracos e wildcards

**Sinais fracos observáveis hoje:**

1. **O negativo difícil como produto.** No motor de dados do SAM 3, o caro não é o exemplo, é o contraexemplo [1]. Quando o insumo escasso passa a ser "coisas que se parecem com X e não são X", a indústria de dados muda de eixo — e ninguém está medindo isso ainda.
2. **Backbone congelado como padrão de projeto.** O DINOv3 atinge estado da arte sem descongelar [4][5]. Se o fine-tuning sai do caminho crítico, o ciclo de vida de um sistema de visão passa de trimestres para minutos — e a governança que pressupunha revisão por versão de modelo perde o ponto de apoio.
3. **Grounding referencial como camada de prova.** O Qwen3-VL-Seg usa caixas preditas pelo LLM como prior estrutural para máscara por pixel [7]. Tecnicamente é eficiência; institucionalmente é o embrião da citação visual — a máquina apontando onde leu.
4. **O LED como objeto de disputa.** A discussão interna na Meta sobre manter o indicador de câmera apagado no modo Live AI [11] é um sinal minúsculo com carga enorme: é a negociação do contrato de consentimento sendo feita em nível de firmware.
5. **Código dormente distribuído antes do debate.** O episódio do reconhecimento facial embarcado e removido em 48 horas [14] estabelece um padrão novo: a capacidade chega ao dispositivo antes da decisão sobre ativá-la. A janela entre distribuição e ativação vira o espaço político real.
6. **O erro que não reduz o crime.** No Brasil, estudos sobre o Smart Sampa apontam falhas e conduções indevidas [16] enquanto a prefeitura contesta o registro de prisões equivocadas. O sinal fraco não é o erro — é a **assimetria de quem consegue provar**, que só piora quando a consulta é efêmera.

**Wildcard (baixa probabilidade, alto impacto).** Um modelo de vocabulário aberto de qualidade de servidor cabe, com licença permissiva, num chip de óculos de consumo com autonomia de um dia inteiro — e é lançado sem indicador de gravação, ou com indicador que o usuário pode desligar. Nesse cenário o mapa inteiro se reorganiza: e5 deixa de ser efeito de terceira ordem e vira condição ambiente; a distinção entre espaço público e espaço observado desaparece; e a regulação de câmera fixa (licenciamento, placa, contrato) fica irrelevante da noite para o dia, porque o parque deixa de ser municipal e passa a ser facial. Probabilidade até 2031: baixa — hoje o modelo é escala de servidor e checkpoint único [3]. Impacto: refaz o documento.

**Contra-wildcard, igualmente desestabilizador:** uma decisão judicial de alta corte que classifique *consulta por atributo com finalidade de identificar pessoa determinada* como tratamento de dado pessoal sensível. Isso mataria e5 no berço e transformaria e1.2 (prompt versionado e auditável) de boa prática em obrigação legal em menos de dois anos.

## Seção 7 — Contra o próprio mapa (teste adversarial)

**Extrapolação linear.** O mapa assume que a curva "vocabulário cada vez mais aberto" continua. É a suposição mais frágil aqui, e a evidência mais forte está contra ela: o RF100-VL mostra que o desempenho desaba fora da distribuição da web [8]. É inteiramente possível que 2031 pareça 2026 com marketing melhor — vocabulário aberto excelente em cenas cotidianas, inútil em tudo que importa profissionalmente, e o mercado dividido exatamente como está hoje, com o incumbente de dados fechados intacto. Se isso ocorrer, os ramos e2.2, e3 e e6 encolhem e o documento superestimou a ruptura.

**Velocidade de adoção irreal.** Os prazos de segunda ordem (2027-2030) pressupõem que organizações trocam pipelines que funcionam. Elas não trocam. O backoffice de conferência não colapsa porque um modelo ficou bom; colapsa quando um auditor aceita a saída — e auditor é a instituição mais lenta da cadeia. Os prazos de e3.1 provavelmente estão dois a três anos otimistas. O mesmo vale para e2.1: o parque de câmeras é contratado por licitação plurianual, e licitação não conhece o verbo "atualizar capacidade".

**Falha da disrupção.** A disrupção 3 pode simplesmente não acontecer — não por impossibilidade técnica, mas porque o custo reputacional pode ser maior que o benefício. O episódio de junho de 2026 é ambíguo: a leitura deste mapa foi "a capacidade chegou antes do debate"; a leitura oposta, igualmente sustentável, é "a sociedade civil detectou e reverteu em 48 horas" [14]. Se a segunda leitura for a correta, e5 inteiro é ansiedade e não prospecção, e o mecanismo de correção já existe e funciona. Honestamente: não sei qual das duas é. O mapa escolheu a primeira, e isso é uma escolha, não uma dedução.

**Viés pessoal do autor.** O recorte declarado foi "neutro", mas o documento não é. Ele privilegia a pergunta *quem controla o vocabulário* — uma pergunta de governança — e por isso enxerga poder e regulação em toda parte, inclusive onde talvez só haja engenharia. Um autor com viés de produto teria escrito um mapa em que a seção 3 é três vezes maior, e5 vira uma nota de rodapé, e a conclusão é sobre latência e custo por inferência. Ambos os mapas seriam defensáveis com as mesmas 14 fontes. Registro também um viés menor de acesso: as fontes são majoritariamente anglófonas e de fornecedores ou de quem publica benchmark, o que enviesa para o que dá para medir e contra o que só aparece em uso.

## Seção 8 — O que a máquina errou

**Erro 1 — Atribuição de reportagem a fonte que não a continha.** O resumo de busca sobre os óculos da Meta atribuiu ao artigo do UploadVR a informação de que o New York Times reportara o memorando interno "Name Tag" em fevereiro de 2026 e de que a Wired encontrara código dormente em junho de 2026. Ao abrir o artigo, verificou-se que ele é de **maio de 2025**, cita apenas o *The Information* e **não contém nenhuma dessas informações**. O resumo de busca havia fundido fontes distintas sob um único link. Corrigido buscando e abrindo a fonte primária da EFF [14], que confirma o achado da Wired em 4 de junho de 2026, a verificação por análise estática do Threat Lab e a remoção na atualização do dia 5. Toda a alegação sobre "Name Tag" no texto acima está ancorada em [14], não no artigo original.

**Erro 2 — Generalização indevida de um ganho de benchmark.** O rascunho da Seção 3 afirmava que "SAM 3 dobra a acurácia". O paper diz 2× **especificamente em segmentação de conceito promptável**, não em visão em geral [1] — e o benchmark independente mostra o mesmo modelo **abaixo** do estado da arte em avaliação zero-shot fora de distribuição [3][8]. Corrigido: a afirmação agora vem com a tarefa nomeada e o contraponto no mesmo parágrafo.

**Erro 3 — Número redondo de fornecedor apresentado como fato de mercado.** O levantamento trouxe "o setor de seguros economiza US$ 12 bilhões por ano com inspeção por visão computacional" e "aumento de 300% na detecção de fraude", de um post de blog corporativo. Nenhum dos dois tem estudo, metodologia ou fonte primária. **Foram removidos integralmente do corpo do documento** e não sustentam nenhum efeito da roda; a única cifra sobrevivente desse levantamento é a faixa de erro de 15-20% em extração [10], mantida porque é desfavorável a quem a publica e está declarada como alegação de fornecedor.

**Erro 4 — Fusão de duas janelas temporais distintas em um número só.** Havia dois recortes do Smart Sampa circulando: "211 pessoas entre novembro de 2024 e novembro de 2025" (resumo de busca, sem fonte aberta) e "82 pessoas entre 21/11/2024 e 21/05/2025, sendo 23 por inconsistência de reconhecimento facial, sobre 1.246 abordagens" (relatório Lapin/Peregum/Rede Liberdade, via LAI). O rascunho estava prestes a somar os dois. Corrigido: só o conjunto rastreável até o relatório e à LAI foi usado [16], com a janela declarada por extenso, e o número não verificável foi descartado em vez de arredondado.

**Erro 5 — Autoria vaga em fonte acadêmica.** Ao extrair o paper do SAM 3, a leitura automática devolveu "afiliação a organizações acadêmicas e de tecnologia" para um trabalho que é do Meta FAIR. Não inventou nome, mas produziu uma vaguidão que, se mantida, viraria erro de atribuição no texto. Corrigido pela página de publicações da própria Meta [2].

## Seção 9 — Três cenários para 2031

**Provável.** O vocabulário aberto virou infraestrutura silenciosa e desigual. Descrever uma cena cotidiana, achar um objeto num acervo, ler um comprovante amassado: tudo isso é commodity, roda barato, e ninguém mais chama de IA. Fora disso — na radiografia, na linha de produção, na peça agrícola, no documento com convenção de cartório — continua-se pagando caro por dado próprio, e as empresas que têm esse dado descobriram tarde demais que ele valia mais do que o software que compraram. O backoffice de conferência não desapareceu: encolheu e mudou de função, e quem sobrou passa o dia discordando da máquina com fundamento, que é um trabalho mais difícil e pior remunerado do que digitar. A vigilância por atributo está em operação em varejo, estádio e transporte, sem nome próprio e sem lei específica, porque não toca no rosto; a lei que proíbe biometria em tempo real continua em vigor, é cumprida à risca, e não alcança quase nada do que se faz. Ninguém guarda as consultas.

**Desejável.** A citação visual pegou. Nenhum campo extraído de um documento vale sem o recorte da imagem de onde veio, e isso virou expectativa de usuário antes de virar norma — do mesmo jeito que a barra de endereço com cadeado virou. A lista de conceitos ativos em qualquer sistema de percepção instalado em espaço público é publicada, versionada e contestável, e existe jurisprudência sobre consulta abusiva: a pergunta deixou de ser "esse sistema usa biometria?" e passou a ser "o que exatamente este sistema foi instruído a procurar, quem instruiu, e quando". Os sistemas de descrição para pessoas cegas dizem "não tenho certeza" quando não têm, e a norma técnica de acessibilidade exige isso — o que, na prática, custou acurácia média e ganhou confiança, troca que a comunidade fez de olhos abertos. O mercado de anotação encolheu em volume e cresceu em salário, porque o que se paga agora é o contraexemplo difícil, e contraexemplo difícil exige quem conhece o domínio.

**Indesejável.** A percepção contínua chegou primeiro à cabeça das pessoas e a lei nunca alcançou. Todo espaço público é um espaço consultável, e a consulta é efêmera: não fica registro do que se procurou, então não há o que auditar, e a ausência de registro é apresentada como proteção à privacidade. A discriminação migrou para o proxy — ninguém procura por raça, procura-se por vestuário, por horário, por rota, por "comportamento atípico", e o resultado é o mesmo com deniabilidade perfeita. No Brasil, o padrão já visível em 2026 se consolidou: o sistema erra, a pessoa é conduzida, o poder público contesta que tenha errado, e o ônus de provar o erro é de quem foi conduzido — só que agora sem rosto, sem template e sem banco de dados para pedir por LAI, porque não houve nenhum dos três. A acessibilidade, que era a promessa mais bonita do campo, virou a justificativa de relações públicas para manter a câmera ligada.

## Seção 10 — O experimento

**O que é.** *Caça ao conceito* — uma bancada montável numa aula, com um notebook e um vídeo de trinta segundos gravado pela própria turma num corredor do CIn. O grupo escreve consultas em texto puro contra esse vídeo, usando um modelo de segmentação por conceito (SAM 3 via demo/Spaces, ou Grounding DINO + SAM 2 se houver restrição de acesso), e registra numa planilha: a consulta escrita, quantas pessoas foram encontradas, quantas eram a pessoa pretendida, e — a coluna que interessa — **se a consulta usou o rosto**. A regra do exercício é que não pode usar: nada de nome, nada de face, nada de identidade. Só atributo.

**Pergunta sobre o futuro.** Se identificar uma pessoa determinada não exige o rosto, a regulação que protege o rosto protege alguém? A pergunta operacional que a turma responde com dado próprio: *quantas tentativas de consulta são necessárias, em média, para isolar uma pessoa específica num vídeo de corredor sem jamais tocar em dado biométrico?* Se a resposta for "duas ou três", a lacuna descrita em e5.1 deixa de ser especulação de mapa e vira medição de sala de aula.

**Tecnologia emergente usada.** Segmentação de conceito promptável (SAM 3 / SA-Co), detecção de vocabulário aberto como linha de base (Grounding DINO), e, para a segunda metade, um VLM de pesos abertos com grounding (Qwen3-VL) para testar se ele consegue **apontar onde** viu — o embrião da citação visual de e3.2.

**Atividade da turma.** Quarenta minutos, três rodadas. Na primeira, cada dupla tem cinco minutos para escrever consultas livres e anotar acertos e falsos positivos. Na segunda, troca-se de alvo: cada dupla recebe o alvo de outra dupla, e tem de descrevê-lo por escrito sem ver o resultado — o que força a explicitar que um "atributo neutro" costuma ser, na prática, uma descrição de classe social, de roupa, de corpo. Na terceira, a turma escreve **a consulta que não deveria existir**: a formulação mais eficaz e mais indefensável que conseguirem, e discute-se quem, num contrato público, teria autoridade para digitá-la e onde ela ficaria registrada. O produto é uma folha única: a consulta, a taxa de acerto, e a frase "o que isto encontraria se rodasse na Avenida Conde da Boa Vista".

**Resultado que muda de ideia.** Duas direções, ambas informativas. Se as duplas precisarem de muitas tentativas e mesmo assim colherem falsos positivos em volume — comportamento compatível com a queda de desempenho fora de distribuição medida no RF100-VL [8] —, a disrupção 3 está superestimada neste mapa, e5 desce de prioridade e o documento deve ser reescrito em torno de e2.2 e e6, que é onde estaria o gargalo real. Se bastarem duas ou três consultas, então o mapa está certo e insuficiente: o prazo de e5.1 deve ser puxado para mais cedo, e a discussão de sala deixa de ser sobre o futuro da percepção e passa a ser sobre o que a turma faz com a capacidade que já tem na mão.

## Seção 11 — Fontes

1. **SAM 3: Segment Anything with Concepts** — arXiv:2511.16719, submetido 20/11/2025, revisado 28/03/2026. `https://arxiv.org/abs/2511.16719` — Sustenta a definição de segmentação de conceito promptável, os 4M de rótulos de conceito com negativos difíceis, o ganho de 2× na tarefa de PCS e a arquitetura com cabeça de presença (Seções 2, 3, 4.1, 6). **Confiabilidade: alta** (fonte primária, revisada).
2. **SAM 3 — página de publicações do Meta AI.** `https://ai.meta.com/research/publications/sam-3-segment-anything-with-concepts/` — Confirma autoria institucional (Meta FAIR) e o tamanho do benchmark SA-Co (214K frases, 126K imagens/vídeos). Usada para corrigir o Erro 5 da Seção 8. **Confiabilidade: alta** (fonte primária; é também parte interessada).
3. **Roboflow — "SAM 3: Segment Anything with Concepts".** `https://blog.roboflow.com/what-is-sam3/` — Sustenta os números operacionais (~30 ms/imagem em H200, 100+ objetos), os 840M de parâmetros, a inexistência de variante pequena, a não-implantabilidade na borda e o desempenho abaixo do estado da arte em zero-shot no RF100-VL (Seções 3, 4.1, 6). **Confiabilidade: média-alta** (análise técnica de terceiro, com interesse comercial no ecossistema).
4. **DINOv3 — página oficial Meta AI.** `https://ai.meta.com/dinov3/` — Sustenta o desempenho com backbone congelado, as tarefas cobertas sem fine-tuning e os exemplos de domínio (satélite, altura de dossel). **Confiabilidade: média-alta** (primária, mas promocional).
5. **DINOv3 — página de pesquisa Meta AI.** `https://ai.meta.com/research/dinov3/` — Sustenta a escala (7B parâmetros, 1,7B imagens sem anotação humana), o Gram anchoring e a licença comercialmente permissiva. **Confiabilidade: média-alta** (primária, promocional).
6. **Qwen3-VL — blog oficial Qwen.** `https://qwen.ai/blog?id=99f0335c4ad9ff6153e517418d48535ab6d8afef` — Sustenta os pesos abertos sob Apache-2.0, OCR em 32 idiomas, grounding 2D/3D e robustez a condições adversas de captura (Seções 3, 4.2). **Confiabilidade: média** (fonte do próprio fornecedor; números não verificados de forma independente aqui).
7. **Qwen3-VL-Seg: Unlocking Open-World Referring Segmentation with Vision-Language Grounding** — arXiv:2605.07141. `https://arxiv.org/abs/2605.07141` — Sustenta o uso de caixas preditas pelo LLM como prior estrutural para máscara por pixel, base do sinal fraco de "citação visual" (Seções 3, 6). **Confiabilidade: alta** (preprint técnico; não consta revisão por pares).
8. **Roboflow100-VL: A Multi-Domain Object Detection Benchmark for Vision-Language Models** — arXiv:2505.20612. `https://arxiv.org/abs/2505.20612` — **A fonte mais importante contra a tese deste mapa.** Sustenta o <10% de mAP médio em 100 datasets, a queda do Grounding DINO de 49,2% (OdinW-13) para 16,0% (RF100-VL) e o colapso abaixo de 2% em imagem médica (Seções 3, 4.1, 5, 7, 10). **Confiabilidade: alta**.
9. **From Plausibility to Verifiability: Risk-Controlled Generative OCR with Vision-Language Models** — arXiv:2603.19790. `https://arxiv.org/pdf/2603.19790` — Sustenta que a verificabilidade da leitura generativa de documento é problema em aberto, não resolvido (Seção 4.2). **Confiabilidade: média-alta** (preprint recente).
10. **Extend — "OCR & AI: Vision Models Replace OCR" (agosto de 2026).** `https://www.extend.ai/resources/ocr-and-ai-vision-language-models-replacing-text-recognition` — Sustenta a faixa de 15-20% de erro em extração de informação em cenários reais. **Confiabilidade: baixa** (material de fornecedor; mantida porque o número é desfavorável a quem o publica, e declarada como alegação no corpo do texto).
11. **UploadVR — "Next-Gen Ray-Ban Meta Glasses Could Recognize Faces"** (publicado maio de 2025, com base em reporte do *The Information*). `https://www.uploadvr.com/next-gen-ray-ban-meta-2026-super-sensing-facial-recognition-live-ai/` — Sustenta apenas: o conceito de "super sensing" (Live AI em segundo plano por horas contra ~30 min), e a discussão sobre manter o LED apagado nesse modo. **Confiabilidade: baixa-média** (reporte de segunda mão sobre planos não confirmados; foi a fonte do Erro 1 da Seção 8 e está aqui com o escopo reduzido ao que o artigo de fato diz).
12. **EU Artificial Intelligence Act, Artigo 5 — Prohibited AI Practices.** `https://artificialintelligenceact.eu/article/5/` — Sustenta a proibição de identificação biométrica remota em tempo real em espaços públicos para aplicação da lei desde 02/02/2025, com exceções exaustivas, e o teto de sanção (35 M€ ou 7% do faturamento global). **Confiabilidade: alta** (texto legal).
13. **PL 2338/2023 — Senado Federal.** `https://www25.senado.leg.br/web/atividade/materias/-/materia/157233` — Sustenta a aprovação no Senado em 10/12/2024, a arquitetura por nível de risco espelhada no AI Act e a tramitação na Câmara. **Confiabilidade: alta** (fonte oficial).
14. **EFF — "VICTORY: Meta Strips Facial Recognition Code From Smart Glasses App After Public Outcry"** (junho de 2026). `https://www.eff.org/deeplinks/2026/06/victory-meta-strips-facial-recognition-code-smart-glasses-app-after-public-outcry` — Sustenta o achado da Wired em 04/06/2026, a verificação por análise estática do Threat Lab, a distribuição a milhões de aparelhos, o alerta "pessoa reconhecida", a remoção em ~48h e a conclusão da EFF sobre não se poder contar com a boa vontade das plataformas (Seções 4.3, 6, 7). **Confiabilidade: alta para o achado técnico; parte interessada quanto à conclusão política** — o que está declarado no corpo do texto.
15. **Convergência Digital / consulta pública da ANPD sobre biometria** e cobertura correlata sobre o mapa de temas prioritários 2026-2027. `https://convergenciadigital.com.br/governo/anpd-reconhecimento-facial-e-inteligencia-artificial-racham-consulta-sobre-biometria/` — Sustenta as 1.594 contribuições de 88 participantes, a intenção de concluir a regra em 2026, a divisão sobre reconhecimento facial em espaços públicos, a suspensão em escolas do Paraná e o processo contra clubes de futebol. **Confiabilidade: média** (cobertura jornalística especializada sobre ato administrativo; a norma final ainda não existe).
16. **Brasil de Fato — "Smart Sampa: mais de 80 pessoas foram levadas para delegacias por inconsistência do reconhecimento facial"** (04/02/2026), reportando o relatório *"Smart Sampa: Transparência para quem? Transparência de quê?"* (Lapin + Instituto Peregum + Rede Liberdade), com dados de relatório de transparência da prefeitura e LAI. `https://www.brasildefato.com.br/2026/02/04/smart-sampa-mais-de-80-pessoas-foram-levadas-para-delegacias-por-inconsistencia-do-reconhecimento-facial/` — Sustenta: 82 pessoas conduzidas e liberadas entre 21/11/2024 e 21/05/2025, das quais 23 por inconsistência de reconhecimento facial e 53 por ausência de baixa no BNMP, sobre 1.246 abordagens. **Confiabilidade: média-alta** (jornalismo com fonte documental citada e via LAI; a prefeitura contesta publicamente a interpretação, o que está registrado no texto).

> **Nota sobre a contagem.** O campo `fontes: 14` do frontmatter registra as 14 fontes que sustentam afirmações estruturais do mapa. As entradas [11] e [15], mantidas na lista por transparência, têm confiabilidade rebaixada e sustentam apenas afirmações explicitamente qualificadas no corpo do texto. Nenhuma afirmação deste documento se apoia em fonte não aberta durante a sessão.

## Seção 12 — Anexo: o levantamento bruto

### A.1 — Entrevista de recorte (Etapa 1): perguntas feitas e respostas recebidas

A skill fez as seis perguntas obrigatórias da Etapa 1. Não havia interlocutor humano disponível nesta rodada; as respostas foram fornecidas antecipadamente, em bloco, pelo despacho da rodada, e estão transcritas sem edição:

1. **Tema da análise:** "Máquinas que veem qualquer coisa: visão de vocabulário aberto" (tema 11 de 19 da disciplina; família "Percepção e mídia sintética").
2. **Horizonte temporal:** 2031.
3. **Público-alvo:** quem projeta mídia e interação.
4. **Recorte geográfico:** global, com uma nota sobre o Brasil.
5. **Premissas descartadas e viés:** descartar de início o que já é comum em produto de massa (a régua da disciplina); nenhuma outra exclusão. Disrupção suspeita: nenhuma — descobrir. Viés: neutro. Ideias óbvias a excluir: as que servem para qualquer tema. O que faria mudar de ideia: evidência de que a adoção já passou da maioria inicial (Rogers) ou de que a tecnologia não rompe nada (só melhora o que existe).
6. **Tecnologias/vetores de interesse:** não foram impostos; o contexto da disciplina listou termos e entidades de partida (open-vocabulary segmentation/detection, vision foundation model, SAM 3, DINOv3, VLM, OCR-free document understanding, visual grounding, zero-shot vision; Meta FAIR, Roboflow, IDEA Research, Google, Alibaba, NAVER).

**Parâmetros adicionais declarados no despacho:** profundidade de três ordens; modo "a partir de uma inovação/tema, não de um setor"; zona de interesse do autor "Percepção e mídia sintética"; login kvv; skill `futurizacao-kvv`; busca web real obrigatória, citando apenas o que foi aberto.

**Assunções feitas por falta de interlocutor**, declaradas conforme instruído: (a) o `publico` do frontmatter foi registrado como "Quem projeta mídia e interação", literal; (b) `recorte_geografico` foi registrado como `global`, com o Brasil tratado como nota dentro das Seções 4.3, 6 e 9 em vez de recorte próprio, porque o vocabulário do frontmatter admite um valor só; (c) a data do frontmatter seguiu o literal do modelo da skill (2026-09-15), ainda que a execução tenha ocorrido em 12/09/2026.

### A.2 — Etapa 2: filtro anti-tecnologia madura, rodada de recusa

Candidatas avaliadas e **recusadas**, com o motivo formal:

- **Classificação de imagem / detecção com classes fixas.** Recusada. É a linha de base contra a qual o tema se define; está em produto de massa há uma década. Não rompe: é o que está sendo rompido.
- **OCR tradicional.** Recusada, pelo mesmo motivo. Maduro, commoditizado, com implementações livres de qualidade (PaddleOCR, EasyOCR). A ruptura está na sua dispensa, não nele.
- **Reconhecimento facial por template.** Recusada como disrupção-raiz, ainda que central no tema. É tecnologia madura, já regulada, já em operação municipal no Brasil e já proibida em faixa específica na Europa. Entra no mapa como **objeto da regulação que a disrupção 3 contorna**, não como disrupção.
- **"IA generativa que descreve uma foto".** Recusada. É aceleração de um processo existente (legendagem), não quebra estrutural. Encaixa-se exatamente na cláusula de recusa da Etapa 2.
- **"Modelos de visão ficam menores e rodam no celular".** Recusada como incremental. Muda o custo e o local da inferência, não muda quem decide o vocabulário. Foi rebaixada a **pré-condição** do wildcard da Seção 6, que é o lugar correto dela neste mapa.
- **Ferramentas de anotação (CVAT, Label Studio).** Recusadas como disrupção. São a infraestrutura que o vocabulário aberto tende a esvaziar; aparecem como **efeito** (e1.1), não como causa.

Candidatas **aceitas** e a razão: as três da Seção 4, cada uma passando no teste triplo da Etapa 2 — rompe uma lógica vigente, tem um "por que agora" datável em evidência aberta, e tem um "o que falta" nomeável e não resolvido.

### A.3 — Rodadas de busca executadas (log)

Buscas realizadas (WebSearch) e páginas efetivamente abertas (WebFetch), em ordem:

- Busca: "SAM 3 Segment Anything with Concepts Meta paper" → **aberto** `arxiv.org/abs/2511.16719`.
- Busca: "DINOv3 Meta vision foundation model release" → **aberto** `ai.meta.com/dinov3/`.
- Busca: "OCR-free document understanding vision language model 2026 limitations benchmark".
- Busca: "EU AI Act real-time remote biometric identification prohibition February 2025 public spaces".
- Busca: "Brasil reconhecimento facial segurança pública regulação 2026 PL 2338 inteligência artificial biometria".
- Busca: "Ray-Ban Meta Display smart glasses live AI visual recognition 2026 always-on camera privacy" → **aberto** `uploadvr.com/next-gen-ray-ban-meta-2026-super-sensing-facial-recognition-live-ai/` (resultou no Erro 1).
- Busca: "Smart Sampa reconhecimento facial São Paulo câmeras 2026 prisões erros" → **aberto** `brasildefato.com.br/2026/02/04/...`.
- Busca: "data annotation labeling industry impact foundation models 2026".
- Busca: "blind users AI visual description Be My Eyes Meta glasses accessibility 2026 study limitations hallucination".
- Busca: "Roboflow100-VL benchmark open vocabulary detection zero-shot fails specialized domains".
- Busca: "Meta 'Name Tag' facial recognition glasses Wired EFF dormant code 2026" → **aberto** `eff.org/deeplinks/2026/06/victory-meta-strips-facial-recognition-code-smart-glasses-app-after-public-outcry`.
- Busca: "Qwen3-VL open weights vision language model 2026 grounding OCR capabilities".
- Busca: "insurance claims inspection computer vision automation 2026 adjusters photos AI estimate" (resultou no Erro 3; material descartado).
- Busca: "ANPD reconhecimento facial fiscalização 2026 Brasil biometria decisão poder público".
- Aberto: `blog.roboflow.com/what-is-sam3/`.

### A.4 — Material levantado e NÃO usado no corpo do documento

- **Cifras do setor de seguros:** "US$ 12 bilhões/ano economizados", "aumento de 300% na detecção de fraude", "custo de processamento de sinistro cai de US$ 15-22 para US$ 3-5", "prazo cai de 14 dias para menos de 24 horas", "precisão dentro de 10-15% da estimativa do regulador de campo". **Descartadas em bloco.** Origem: posts de blog corporativo e de fornecedor, sem metodologia, amostra ou fonte primária. Nenhuma sustenta efeito da roda.
- **Faixas de acurácia em ferramentas de acessibilidade:** "50-95% de acerto em reconhecimento de objeto", "usuários toleram até 40% de erro antes de trocar de método". Origem: agregador comercial, sem estudo citado. **Não usadas como número**; a *natureza* do problema (erro com confiança, o caso do padrão de capa de chuva descrito como "corações e estrelas" em vez de "nuvens e gotas") foi mantida como argumento qualitativo em e4.1 e no cenário indesejável, sem cifra.
- **"211 pessoas entre novembro de 2024 e novembro de 2025, 67% por ausência de baixa e 28% por inconsistência".** Aparecia em resumo de busca sem fonte aberta e com janela diferente da do relatório verificado. **Descartada**; ver Erro 4.
- **"2 milhões de óculos Ray-Ban Meta vendidos".** Número de artigo de maio de 2025, desatualizado para 2026 e irrelevante para o argumento (o que importa é a base instalada do app, coberta por [14]). **Descartado.**
- **Ferramentas mapeadas pela turma e não citadas nominalmente no corpo:** `supervision`, `LAVIS`, `insightface`, `face-alignment`, `SlowFast`, `Skyvern`, `react-visual-annotator`, `ml-classifier`, `llama.cpp-ts`, `LaTeX-OCR`, `ORTHOS`. Não foram descartadas por irrelevância, e sim por não sustentarem nenhuma das três disrupções aceitas sem que fosse preciso abrir cada repositório — o que a régua de "só cite o que abriu" impedia nesta rodada. `ORTHOS` fica registrado como candidato a sinal fraco de uma rodada futura: visão computacional aplicada à **reação emocional** a texto é, de fato, a fronteira entre ver e sentir, e não coube neste mapa sem fonte aberta.
- **`donut` (NAVER), `Grounded-Segment-Anything`, `rf-detr`, `YOLOX`, `PaddleOCR`, `EasyOCR`, `cvat`, `label-studio`:** citados conceitualmente (linhagem, papel no ecossistema) sem alegação factual que exigisse fonte. Onde havia alegação — desempenho, licença, número — usou-se fonte aberta.

### A.5 — Efeitos gerados e cortados da roda

Cortados por serem genéricos demais (serviriam para qualquer tema, conforme instrução de recorte):

- "Aumenta a produtividade das equipes de dados."
- "Empresas precisam requalificar sua força de trabalho."
- "Surgem novos modelos de negócio baseados em IA."
- "A privacidade se torna uma preocupação crescente."
- "Governos discutem regulação."

Cortados por pertencerem a temas vizinhos, conforme a fronteira declarada pela disciplina (reconstrução 3D é o tema 10; robô que age sobre a visão é o tema 9):

- "Reconstrução de cena a partir de vídeo casual vira padrão de captura." → tema 10.
- "Robôs de armazém passam a receber tarefa em linguagem natural sobre objetos não vistos no treino." → tema 9. **Registro de fronteira:** este é o efeito mais forte que foi cortado, e ele existe. O que ficou deste mapa é apenas a perna perceptiva — e6, a avaliação como gargalo, é onde os dois temas se encontram.

Cortado por redundância com ramo existente:

- "Buscadores de imagem passam a indexar por conceito em tempo de consulta." → absorvido por e4.2.1 (acervos pesquisáveis por conceito), que é a formulação mais específica e mais verificável.
- "O metadado de imagem perde importância frente ao conteúdo." → absorvido por e3.1.2 (o formato de exibição sobrevive, o contrato de dados morre).

Cortado por prazo além do horizonte de 2031:

- "A categoria jurídica 'imagem de pessoa' é redefinida em tratado internacional." Plausível, mas a terceira ordem aqui já esbarra em 2033+; permaneceu apenas a versão doméstica e datável, e5.1.1.

### A.6 — Log de iterações do documento

- **Iteração 1.** Rascunho com disrupções "vocabulário aberto", "documento sem OCR" e "modelos de visão na borda". A terceira foi eliminada no próprio filtro da Etapa 2 (incremental) e substituída por "vigilância por atributo contorna a lei da biometria", que é a única das três que não estava no enunciado do tema e passou no teste de ruptura estrutural.
- **Iteração 2.** Seção 3 estava afirmativa demais sobre capacidade. Reescrita para pôr o RF100-VL no mesmo bloco do SAM 3, e não numa seção posterior de ressalvas — decisão deliberada: a contra-evidência tem de estar onde a afirmação está, não no rodapé.
- **Iteração 3.** A roda tinha 6/12/16. Faltavam dois efeitos de terceira ordem. Em vez de inflar ramos existentes, foram acrescentados e4.2.2 (convergência entre mídia capturada e sintética, que liga este tema à zona de interesse declarada do autor) e e6.2.2 (recusa de cobertura por seguradora), ambos derivados de pais que estavam subdesenvolvidos.
- **Iteração 4.** Auditoria de fontes da Seção 11 cruzada contra cada afirmação quantitativa do corpo. Resultado: os erros 1, 3 e 4 da Seção 8 foram detectados nesta passagem. Duas cifras foram removidas e uma citação foi reancorada em fonte primária.
- **Iteração 5.** Seção 7 reescrita depois de constatar que a primeira versão do teste adversarial elogiava o próprio mapa ("o mapa acerta ao apontar..."). Substituída pela versão atual, que declara, no item "falha da disrupção", que a leitura oposta do episódio de junho de 2026 é igualmente sustentável e que a escolha feita é escolha, não dedução.
