---
tema: "Máquinas que veem qualquer coisa: visão de vocabulário aberto"
slug: maquinas-que-veem-qualquer-coisa-visao-de-vocabulario-aberto
autor_login: meap
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-11
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global, com nota sobre o Brasil
disrupcoes_raiz: 3
efeitos_ordem_1: 9
efeitos_ordem_2: 13
efeitos_ordem_3: 10
tecnologias_citadas: [SAM 3, SAM 3.1, SAM 2, Grounding DINO, Grounded-SAM, DINOv2, DINOv3, OWLv2, YOLOX, RF-DETR, SlowFast, Donut, DeepSeek-OCR, PaddleOCR, EasyOCR, LaTeX-OCR, InsightFace, Qwen3-VL, PaliGemma, LAVIS, CVAT, Label Studio, Skyvern, ORTHOS, Ray-Ban Meta, Be My Eyes]
fontes: 13
confianca: media
experimento: "O glossário que vê — três pessoas escrevem vocabulários independentes para o mesmo acervo de imagens, rodam o mesmo detector de vocabulário aberto e mede-se o desacordo entre as leituras, não a acurácia contra um gabarito"
skill_usada: futurization-meap
publico_ok: false
---

# Máquinas que veem qualquer coisa: visão de vocabulário aberto

## 1. Resumo

Por décadas, um sistema de visão só reconhecia aquilo para o que tinha sido treinado: a lista de classes era decidida antes do treino e congelada no produto. Essa restrição está sendo removida. Modelos de segmentação por conceito (SAM 3, novembro de 2025; SAM 3.1, março de 2026), backbones auto-supervisionados que produzem características densas sem rótulo (DINOv3) e detectores de vocabulário aberto fizeram o vocabulário migrar do tempo de treino para o tempo de uso — quem escreve a frase define o que a máquina enxerga. No mesmo movimento, a leitura de documento deixou de passar por OCR: o modelo recebe a página como imagem e devolve estrutura. As consequências que este mapa persegue não são "mais visão computacional": são o deslocamento do erro (do dado para o termo), a mudança do que é um formulário, e o surgimento de uma vigilância por atributo que não é biometria e por isso escapa da norma escrita para biometria. O horizonte é 2031 e a confiança geral é média: a capacidade está demonstrada, mas as evidências abertas mostram queda acentuada fora do domínio de treino (F1 de 0,276 em imagem aérea) e dependência de prior linguístico na leitura de documento (queda de ~90% para ~20% sem apoio de linguagem). O mapa é de quem projeta mídia e interação — e para esse público a pergunta operativa não é o que o modelo acerta, é quem escreve o vocabulário.

## 2. O tema

Visão de vocabulário aberto é a capacidade de um sistema de visão localizar, segmentar e acompanhar qualquer conceito descrito em linguagem, sem que esse conceito tenha sido uma classe do treino. A formulação canônica atual é a *Promptable Concept Segmentation* proposta no SAM 3: a partir de "uma frase nominal curta (por exemplo, 'ônibus escolar amarelo'), exemplares em imagem, ou a combinação dos dois", o modelo "detecta, segmenta e acompanha objetos em imagens e vídeos" — todas as instâncias de uma vez, e não um objeto por prompt como nas versões anteriores.

Para mídia e interação isso importa por três razões que não se reduzem a desempenho.

**Primeira: a interface do sistema de percepção virou texto.** Definir o que um produto enxerga deixou de ser tarefa de engenharia de machine learning e virou tarefa de redação. Quem escreve o conceito ocupa uma posição de decisão que antes pertencia a quem montava o dataset — e é uma posição sem profissão, sem método e sem prestação de contas estabelecidos.

**Segunda: a assimetria entre imagem e texto está se fechando.** Texto sempre foi pesquisável; imagem só era pesquisável se alguém a tivesse catalogado. Quando qualquer imagem responde a uma consulta em linguagem, o acervo não catalogado — a câmera de rua, o arquivo de TV, a pasta de fotos — entra no mesmo regime do texto.

**Terceira: a linha jurídica está desenhada no lugar errado.** A regulação de imagem em espaço público foi escrita em torno de *dado biométrico*. Buscar "pessoa de casaco vermelho que entrou às 14h" não usa dado biométrico e localiza uma pessoa mesmo assim.

Merece mapa de futuro porque a capacidade já existe em código aberto, o custo de uso é baixo, e as três consequências acima não têm nem prática profissional nem norma correspondente.

## 3. Onde isso está hoje

O que está **maduro** e entra aqui como contexto, não como disrupção: classificação de imagem, detecção de objeto com classes fixas (YOLOX, RF-DETR), OCR tradicional (PaddleOCR, EasyOCR, LaTeX-OCR), reconhecimento facial (InsightFace), compreensão de vídeo com rótulos fixos (SlowFast) e as ferramentas de anotação manual (CVAT, Label Studio). Nenhuma dessas rompe uma cadeia de valor hoje — todas já são padrão de mercado.

O que está **em curso**, com data:

- **SAM 3** (arXiv 2511.16719) define a tarefa de segmentação por conceito e reporta "dobrar a acurácia dos sistemas existentes" em PCS de imagem e vídeo, sustentado por um motor de dados com "4 milhões de rótulos de conceito únicos, incluindo negativos difíceis". A arquitetura usa detector de imagem e rastreador de vídeo com memória compartilhando um mesmo backbone, mais uma *presence head*.
- **SAM 3.1** foi anunciado em 27 de março de 2026 como substituto direto do SAM 3, com multiplexação de objetos (até 16 objetos num único passe) e dobrando a velocidade em vídeos de contagem média — de 16 para 32 quadros por segundo numa única GPU H100.
- **Custo de operação**: a leitura prática da Roboflow situa o SAM 3 em ~840 milhões de parâmetros (≈3,4 GB), ~30 ms por imagem numa H200, cabendo em GPUs de 16 GB — e o classifica como "modelo de escala de servidor", inadequado para borda. A recomendação da própria plataforma é reveladora: usar o modelo de vocabulário aberto para **rotular** e então treinar um modelo menor e implantável.
- **Características sem rótulo**: o DINOv3 sustenta produzir "características densas de alta qualidade" e superar "o estado da arte especializado numa faixa ampla de cenários" sem ajuste fino, com a contribuição técnica do *Gram anchoring* contra a degradação de mapas densos em treinos longos.
- **Documento sem OCR**: fornecedores do setor afirmam que em 2026 os modelos visão-linguagem substituíram o OCR, com números de 98,5% a 99% de acurácia contra 60–75% do OCR tradicional em documentos complexos, e com a mudança principal não sendo acurácia, e sim o formato da saída (JSON estruturado em vez de texto a ser parseado).
- **O contraponto medido**: um estudo de 2026 sobre o DeepSeek-OCR conclui que, "sem apoio linguístico, o desempenho despenca de aproximadamente 90% para 20%" — isto é, boa parte do que parece leitura é predição de linguagem; e que pipelines tradicionais de OCR são mais robustos a perturbação semântica.
- **O outro contraponto medido**: em imagem aérea, cinco detectores de vocabulário aberto degradam de forma acentuada; o melhor (OWLv2) atinge 27,6% de F1 com 69% de falsos positivos no LAE-80C, variando de 0,53 no DIOR a 0,12 no FAIR1M. A causa apontada é confusão semântica, não localização visual — e reduzir o vocabulário de 80 para 3,2 classes rende 15× de melhoria.
- **No corpo**: os óculos da Meta oferecem descrição contextual de ambiente e conexão com voluntários do Be My Eyes por comando de voz, com o Be My Eyes disponível em 21 mercados. A revisão da American Foundation for the Blind registra o outro lado: a leitura de cardápio funciona, mas a direção do objeto saiu errada num teste simples (a luminária "à esquerda" estava à direita), e o sistema "não é capaz de fornecer direções de navegação confiáveis nem substituir a bengala".
- **No Brasil**: o Smart Sampa, entre 21/11/2024 e 21/05/2025, abordou 1.246 pessoas e prendeu 1.153; 82 foram levadas a delegacias e liberadas por inconsistência, sendo 23 delas por inconsistência do próprio reconhecimento facial, a um custo de R$ 9,8 milhões mensais. Enquanto isso, o PL 2338/2023 foi aprovado no Senado e remetido à Câmara em 17 de março de 2025, onde segue.
- **Na norma europeia**: o Artigo 5 do AI Act proíbe categorização biométrica que infira raça, opinião política, filiação sindical, crença, vida ou orientação sexual; proíbe identificação biométrica remota em tempo real em espaço público para fins de aplicação da lei, salvo exceções estritas com autorização judicial prévia; proíbe a raspagem não direcionada de imagens faciais da internet ou de CFTV; e proíbe inferência de emoções em trabalho e educação.

Resumo do presente: a capacidade é real e está aberta; o desempenho fora do domínio é frágil; a régua jurídica cobre biometria e emoção, não descrição.

## 4. As disrupções-raiz

### 4.1. O vocabulário sai do treino e entra no tempo de uso

**O que rompe.** A cadeia "definir classes → coletar → anotar → treinar → implantar", que é a estrutura econômica inteira da visão computacional aplicada, e com ela o mercado de anotação por commodity e o papel do dataset como ativo. Rompe também uma expectativa de produto: a de que o que o sistema enxerga é uma decisão de engenharia, tomada antes do lançamento e estável.

**Por que agora.** Porque a tarefa foi formulada e medida: o SAM 3 define a segmentação por conceito e reporta dobrar a acurácia dos sistemas anteriores; o SAM 3.1 tornou-a viável em vídeo a 32 fps numa H100; e o DINOv3 mostrou que características densas úteis podem ser aprendidas sem rótulo algum. Os três são de novembro de 2025 a março de 2026 — a janela em que a capacidade deixou de ser demonstração.

**O que ainda falta.** Falta o gatilho de robustez fora do domínio. Enquanto o melhor detector aberto entrega 27,6% de F1 em imagem aérea com 69% de falsos positivos, o vocabulário aberto entra em produção como ferramenta de rotulagem — que é exatamente o que a Roboflow recomenda — e não como percepção de produção. A disrupção se materializa quando a queda fora do domínio for da ordem da queda de um modelo supervisionado, ou quando existir um método barato de medir essa queda antes de implantar.

### 4.2. O documento deixa de ser texto e passa a ser imagem lida por modelo

**O que rompe.** O pipeline de OCR (detectar layout → reconhecer caractere → parsear campo), o formulário como instrumento de captura de dado, e o trabalho de digitação e conferência. Rompe também a premissa de arquitetura de informação segundo a qual é preciso produzir dado estruturado na origem para que ele seja utilizável depois.

**Por que agora.** Porque a saída mudou de forma, não só de qualidade: o modelo recebe a página e devolve estrutura num único passe, em JSON, sem etapa de parsing. A linhagem vem do Donut ("compreensão de documento sem OCR") e hoje passa por modelos dedicados como o DeepSeek-OCR e por VLMs generalistas.

**O que ainda falta.** Falta resolver o que o estudo crítico de 2026 expôs: se o desempenho cai de ~90% para ~20% quando se retira o apoio linguístico, então o sistema não está lendo, está completando. Para setor regulado, falta o mecanismo que amarre cada valor extraído à região da imagem de onde ele veio. Sem isso, o erro é invisível — plausível e errado ao mesmo tempo.

### 4.3. A percepção aberta vira fluxo contínuo em vez de consulta

**O que rompe.** A expectativa social de que ser filmado é diferente de ser catalogado, e a ancoragem jurídica da proteção no *tipo de dado* (biométrico). Rompe também a economia da vigilância: o gargalo deixa de ser quem assiste à gravação.

**Por que agora.** Porque a mesma frase que consulta uma imagem pode consultar um fluxo. O SAM 3.1 acompanha até 16 objetos num passe a 32 fps; os óculos com assistente visual já estão em mercado, com um caso de uso legítimo e forte (acessibilidade) que empurra a adoção; e o índice semântico de um vídeo é ordens de grandeza menor que o vídeo.

**O que ainda falta.** Falta a inferência aberta na borda. Hoje o modelo é "de escala de servidor" — 840M de parâmetros, GPU de 16 GB — o que mantém o fluxo contínuo dependente de conexão, custo e de um terceiro que processa. O gatilho é um modelo de vocabulário aberto que rode no dispositivo, em tempo real, com orçamento térmico de óculos. Enquanto não rodar, esta disrupção é a mais especulativa das três, e é a que mais se beneficia de ceticismo.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O vocabulário sai do treino e entra no tempo de uso
    efeitos:
      - id: e1
        ordem: 1
        efeito: Rotular dataset deixa de ser pré-requisito para colocar um detector no ar, e o custo de um protótipo de visão cai ao custo de escrever uma frase.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Ferramentas de anotação migram de desenhar caixa para corrigir e auditar a saída do modelo, e o trabalho do anotador vira revisão.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O mercado de anotação se parte em dois, a camada de commodity encolhe e o que sobra é perícia de domínio que arbitra casos difíceis e responde por eles.
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A lista de classes deixa de ser decisão de engenharia congelada no treino e vira parâmetro de produto, editável por quem não programa.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Surge a função de curador de vocabulário, que decide quais conceitos um sistema pode enxergar e responde por essa escolha como um editor responde pela pauta.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Sistemas de visão passam a errar por ambiguidade de linguagem e não por falta de exemplo, e o defeito migra do dado para o termo.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Times de produto passam a versionar prompts de percepção como versionam schema de banco, com teste de regressão por conceito a cada troca de modelo.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Auditoria de sistema de visão passa a pedir o glossário antes da matriz de confusão, ou seja, que palavras o sistema aceitou, com que sinônimos e quem as escreveu.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Fornecedores passam a vender vocabulário de domínio como produto, listas curadas de conceitos com evidência de desempenho, porque vocabulário grande derruba o acerto.
            sinal: medio
            prazo: 2029
            confianca: baixa
      - id: e3
        ordem: 1
        efeito: Interfaces de busca em acervo visual passam a aceitar descrição livre no lugar de etiqueta.
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Acervos que nunca foram catalogados, como arquivos de televisão, câmeras municipais e pastas pessoais, tornam-se pesquisáveis sem passar por catalogação humana.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: O valor do acervo desloca-se da catalogação para a posse do material bruto, e coleções mal documentadas voltam a ter preço de mercado.
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: O documento deixa de ser texto e passa a ser imagem lida por modelo
    efeitos:
      - id: e4
        ordem: 1
        efeito: A extração de dado de documento passa a ser feita por modelo que lê a página inteira como imagem e devolve JSON, sem etapa de parsing.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: O formulário deixa de ser instrumento de captura e vira instrumento de consentimento e prova, porque o que se pede da pessoa é o aceite e o documento que ela já tem.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: O desenho de serviço público e bancário reescreve a jornada em torno de mande o que você já tem, em vez de preencha o que eu preciso, e o campo obrigatório perde função.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Os postos de digitação e conferência encolhem sem desaparecer, e o trabalho migra para exceção e contestação, isto é, conferir o que o modelo leu errado.
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e5
        ordem: 1
        efeito: O erro de leitura muda de natureza, de caractere trocado para campo plausível inventado, porque o modelo completa com o provável quando o pixel é ruim.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Setores regulados passam a exigir prova de leitura, uma região da imagem associada a cada valor extraído, e não apenas o valor.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: O grounding vira requisito contratual e critério de compra de software documental, como o log de auditoria virou depois das leis de proteção de dados.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: Cai o incentivo para produzir dado estruturado na origem, porque quem consome consegue ler o formato feio.
        sinal: forte
        prazo: 2029
        confianca: media
  - disrupcao: A percepção aberta vira fluxo contínuo em vez de consulta
    efeitos:
      - id: e7
        ordem: 1
        efeito: Óculos e telefones passam a manter uma descrição corrente do campo de visão, em vez de responder a uma foto sob demanda.
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: A acessibilidade ganha descrição de ambiente sem pedido explícito, e a régua de qualidade passa a ser direção e distância, não nome do objeto.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Normas de acessibilidade passam a especificar latência e precisão espacial mínimas para descrição ambiental, como já especificam contraste e tamanho de fonte.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: A etiqueta social do registro muda de está me filmando para está me classificando, e o LED de gravação deixa de cobrir o que o aparelho está inferindo.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: Espaços com política de câmera, como escola, hospital, sala de reunião e palco, reescrevem a regra em termos de inferência permitida e não de gravação permitida.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: A busca por atributo, do tipo pessoa de mochila vermelha correndo, localiza alguém sem cadastrar rosto e sem usar dado biométrico.
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Reguladores precisam decidir se busca por descrição é identificação, porque as proibições do Artigo 5 do AI Act se ancoram em dado biométrico e em emoção, não em descrição de roupa e trajeto.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: A norma migra a âncora do tipo de dado para a finalidade, ou seja, localizar pessoa determinada passa a ser o ato regulado, independentemente do sinal usado.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: No Brasil a camada aberta chega antes da regra, porque o reconhecimento facial municipal já opera com erro medido enquanto o marco legal segue parado na Câmara, e a contestação vira judicial caso a caso.
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e9
        ordem: 1
        efeito: O custo de indexar semanticamente todo o vídeo gravado cai abaixo do custo de guardá-lo, e a retenção deixa de ser o gargalo da vigilância.
        sinal: forte
        prazo: 2030
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: Políticas de retenção de imagem em dias perdem função protetiva, porque o que sobrevive ao descarte não é o vídeo e sim o índice semântico dele.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: A proteção de dados passa a regular o índice e não a gravação, e apagar o vídeo deixa de ser remédio suficiente.
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

O que o YAML não diz.

**Os três troncos não têm o mesmo peso de evidência.** O primeiro (vocabulário no tempo de uso) é o mais sustentado: existe artigo, existe benchmark, existe modelo aberto, e a recomendação prática dos fornecedores já mudou. O segundo (documento como imagem) tem evidência forte de produto e evidência crítica igualmente forte contra — é o tronco onde o mapa mais pode estar errado por comprar número de fornecedor. O terceiro (fluxo contínuo) é especulativo por dependência de hardware: se a inferência aberta não descer para a borda até 2029, quase toda a metade de baixo dele atrasa em bloco.

**O efeito mais importante do mapa não é o mais espetacular.** É o e2: o defeito migra do dado para o termo. Ele é de primeira ordem, quase mecânico, e reorganiza silenciosamente quem é responsável quando o sistema erra. No regime antigo, errar era falha de amostragem, e a culpa era do dataset. No regime aberto, errar é falha de escrita, e a culpa é de quem redigiu o conceito — uma pessoa identificável, sem função definida e sem método de trabalho reconhecido. Os efeitos e1.2.1 e e2.1.1 são a consequência institucional disso.

**A régua do e8 é jurídica, não técnica.** O Artigo 5 do AI Act proíbe identificação biométrica remota em tempo real, categorização biométrica por atributos sensíveis, raspagem não direcionada de rostos e inferência de emoção em trabalho e educação. Nenhuma dessas quatro proibições alcança "encontre a pessoa de casaco vermelho que entrou às 14h e saiu às 14h20". A tecnologia não contorna a lei por astúcia; ela simplesmente ocupa um espaço que a lei, escrita para outra técnica, não descreve.

**O e6 é o mais contraintuitivo e o de menor confiança entre os de primeira ordem.** Vinte anos de política de dados abertos empurraram na direção de estruturar na origem. Se ler o formato feio fica barato, o argumento econômico para estruturar enfraquece — mas o argumento de auditabilidade permanece. Marquei confiança média por isso: a direção é plausível, a magnitude é incerta.

## 6. Sinais fracos e wildcards

**ORTHOS.** Extensão que simula e visualiza a resposta emocional a manchetes. É pequeno, é experimental, e é o único item do levantamento da turma que não trata de *reconhecer o que está na imagem*, e sim de *prever o que a imagem provoca*. Se essa linha se juntar à percepção aberta, o objeto da leitura deixa de ser a cena e passa a ser o espectador — e aí a norma que hoje proíbe inferência de emoção em trabalho e educação vira a norma central do campo, não uma cláusula lateral.

**A recomendação de usar o modelo grande só para rotular.** Parece detalhe de engenharia e é um sinal forte disfarçado: significa que o vocabulário aberto está entrando nas empresas pela porta dos fundos, como ferramenta interna de produção de dataset, e não como percepção de produção. Se ficar assim até 2031, o tronco 4.1 se realiza pela metade — muda a economia da anotação e não muda o produto.

**Modelos visão-linguagem pequenos, na faixa de 2 a 4 bilhões de parâmetros.** É a variável que decide o tronco 4.3 inteiro. Não é chamativa e é a mais determinante do mapa.

**Wildcard 1 — a decisão judicial que trata descrição como identificação.** Basta um caso, em qualquer jurisdição relevante, em que um tribunal entenda que localizar alguém por descrição de roupa e trajeto é identificação para efeitos de proteção de dados. Isso antecipa o e8.1.1 em anos e reorganiza o mercado de videomonitoramento antes de qualquer lei nova.

**Wildcard 2 — o vazamento de um índice semântico, não de um vídeo.** O primeiro incidente público em que o que vaza não são imagens, mas a descrição pesquisável do que as câmeras viram, muda a conversa sobre privacidade de imagem mais do que qualquer vazamento de vídeo já mudou. O dano é maior e a matéria-prima é menor.

**Wildcard 3 — a degradação silenciosa.** Um sistema de vocabulário aberto em produção não avisa quando o domínio muda; ele continua respondendo. Uma falha de grande escala causada por deriva de domínio, sem nenhum alarme disparado, é o cenário que faria a indústria inventar às pressas a medição que hoje não existe.

## 7. Contra o próprio mapa

**Onde o mapa provavelmente erra por otimismo de capacidade.** As evidências abertas contradizem a narrativa de "vê qualquer coisa". Em imagem aérea, o melhor detector aberto entrega 27,6% de F1 com 69% de falsos positivos, e o ganho de 15× ao reduzir o vocabulário de 80 para 3,2 classes diz o oposto do slogan: o sistema funciona melhor quanto *menos* aberto for o vocabulário. Se isso valer para outros domínios fora do natural — imagem médica, industrial, documento técnico — então o que se chama de vocabulário aberto é vocabulário fechado escolhido depois, e boa parte do tronco 4.1 é melhoria de fluxo de trabalho, não ruptura.

**Onde o mapa provavelmente erra por comprar número de fornecedor.** Os melhores números do tronco 4.2 (98,5%, 99%+) vêm de páginas comerciais, sem metodologia, sem conjunto de teste declarado. O número crítico independente aponta na direção contrária: sem apoio linguístico, o desempenho cai de ~90% para ~20%. Esse é o tipo de assimetria que deveria inverter o ônus da prova, e no texto acima ela só aparece como contraponto — a descrição do presente ainda cita os dois lados como se tivessem peso semelhante. Não têm.

**Onde o mapa confirma o viés de quem o encomendou.** O recorte dado — vigilância, acessibilidade, automação de trabalho visual — já continha metade das respostas. O tronco 4.3 inteiro, e em especial o e8 e seus filhos, é o que um pedido assim tende a produzir: a consequência socialmente dramática, escrita com confiança maior do que a evidência sustenta. Marquei os efeitos e8, e8.1 e e9 para revisão por esse motivo, e mantive a confiança em média mesmo onde a narrativa pedia alta.

**Onde o mapa extrapola adoção.** Os prazos de 2029 do tronco 4.3 pressupõem que a inferência aberta chegue à borda em três anos. Não há precedente confortável para isso: o modelo atual é de escala de servidor e nenhuma fonte aberta que consultei demonstra vocabulário aberto em tempo real num dispositivo vestível. Se esse gatilho falhar, e7, e8 e e9 deslizam para além de 2031 e o mapa perde o terço mais visível.

**Onde o mapa pode estar certo pelo motivo errado.** O e9 (índice mais barato que o vídeo) é aritmética, não previsão: descrição textual é ordens de grandeza menor que vídeo. Mas eu não verifiquei custo de indexação contínua em nenhuma fonte aberta — só o custo por imagem de um modelo específico numa GPU específica. A conclusão é provavelmente correta e a cadeia de evidência é fraca.

**O que me faria mudar de ideia.** Duas coisas, declaradas antes de escrever: evidência de que a adoção já passou da maioria inicial (o que tornaria o tema maduro, não emergente), ou evidência de que a técnica só melhora o que já existe sem romper nada. A segunda quase aconteceu: a recomendação de usar o modelo aberto apenas para rotular é exatamente "melhora o que existe". Foi o achado que mais quase derrubou o mapa, e é por isso que ele está na seção 6 como sinal e não como nota de rodapé.

## 8. O que a máquina errou

Registro do que eu, a máquina que montou este mapa, errei ou quase errei durante a construção. Todos os itens são de checagem feita nesta sessão.

**1. Números de resumo de busca que não estavam na fonte.** Os resultados de busca traziam, para o DINOv3, "1,7 bilhão de imagens" e "7 bilhões de parâmetros", e para o SAM 3 um conjunto SA-Co de "120 mil imagens, 1,7 mil vídeos e mais de 200 mil conceitos". Abri os dois resumos no arXiv: o do DINOv3 não traz nenhuma dessas cifras, e o do SAM 3 fala em "4 milhões de rótulos de conceito únicos" — outra grandeza, outra unidade. Removi todos esses números e mantive apenas o que li. Se eu os tivesse copiado, o documento pareceria mais preciso e seria menos verdadeiro.

**2. Fonte que eu não consegui abrir e quase citei mesmo assim.** O comunicado do Be My Eyes sobre a expansão com a Meta retornou 403. O resumo de busca mencionava anúncio na conferência CSUN de março de 2026 e distribuição gratuita de óculos a cerca de 130 mil veteranos cegos nos Estados Unidos. Como não abri, nada disso entrou. Recorri à página da própria Meta (que confirma Be My Eyes em 21 mercados) e à revisão da American Foundation for the Blind, que abri.

**3. PDF ilegível tratado como se fosse leitura.** A primeira tentativa de abrir o estudo sobre detectores de vocabulário aberto em imagem aérea trouxe o PDF em formato binário ilegível. O número 0,276 já estava no resumo da busca e eu poderia tê-lo usado ali. Abri a página de resumo do arXiv e só então os valores (27,6% de F1, 69% de falsos positivos, 0,53 no DIOR contra 0,12 no FAIR1M, ganho de 15× com redução de vocabulário) passaram a ser citáveis.

**4. Calendário regulatório afirmado sem fonte aberta.** Os resumos de busca afirmavam que as obrigações de alto risco do AI Act passam a ser exigíveis em 2 de agosto de 2026. Abri o Artigo 5 e ele trata das práticas proibidas, não do calendário. O documento cita apenas as proibições que li, e não afirma datas de exigibilidade.

**5. Efeito de terceira ordem vazio na primeira derivação.** A primeira versão do e1.1.1 dizia "a profissão de anotador desaparece". Não nomeia mecanismo e não tem precedente: nenhuma camada de trabalho de revisão desapareceu inteira em cinco anos. Reescrevi como partição de mercado, com a camada de commodity encolhendo e a perícia de domínio encarecendo — que é o que a evidência disponível, ainda que fraca, descreve.

**6. Causa solta herdada do enunciado do tema.** Derivei de início um efeito sobre plataformas de mídia adaptando conteúdo à reação emocional do espectador, ancorado no ORTHOS. Aplicando o teste de causa solta: retirando as três disrupções-raiz, o efeito continua acontecendo — ele deriva de sensoriamento de emoção, não de vocabulário aberto. Foi desconectado da roda e realocado para a seção 6, como sinal fraco.

**7. Assimetria de evidência tratada como equilíbrio.** Na primeira redação da seção 3, os números de fornecedor (98,5%) e o número crítico independente (queda de 90% para 20%) apareciam lado a lado, com o mesmo peso retórico. São coisas diferentes: um é alegação comercial sem método declarado, o outro é estudo com desenho descrito. Mantive os dois no texto por honestidade descritiva, mas registrei a assimetria na seção 7 e não usei o número de fornecedor como âncora de nenhum efeito.

## 9. Três cenários para 2031

### 9.1. Provável

O vocabulário aberto entrou por dentro e não por fora. Entre 2026 e 2029, quase todas as equipes que faziam visão computacional pararam de anotar do zero: o modelo grande pré-rotulava, a pessoa corrigia, e um modelo menor e barato ia para produção. A economia da anotação mudou de forma — a camada de commodity encolheu, e o que restou foi trabalho de perícia, mais caro e mais escasso — mas o produto final que o usuário viu continuou tendo uma lista de classes por trás, só que agora escolhida depois dos testes em vez de antes. O motivo foi medido e repetido em domínio após domínio: vocabulário grande derrubava o acerto, vocabulário pequeno o recuperava. A promessa de "ver qualquer coisa" ficou sendo verdade no laboratório e no fluxo de trabalho, e meia verdade no produto.

O que efetivamente mudou para quem projeta interação foi o documento. Formulário longo virou exceção em serviço financeiro e público; a jornada padrão passou a ser enviar o que já se tem e confirmar o que o sistema leu. Com isso apareceu a tela nova da década: a tela de conferência, em que o valor extraído aparece ao lado do recorte da imagem de onde veio. Ela nasceu de exigência regulatória em saúde e tributário depois que os primeiros casos de campo plausível inventado chegaram aos tribunais, e virou padrão de mercado por imitação.

A percepção contínua ficou onde a evidência de 2026 sugeria: forte na acessibilidade, parcial no resto. Os óculos descreviam ambiente de forma útil e continuavam falhando em direção e distância o suficiente para que ninguém responsável os recomendasse para travessia de rua. A vigilância por descrição existia, era usada, e seguia juridicamente indefinida — nem proibida, nem autorizada, nem medida.

### 9.2. Desejável

A mesma capacidade chegou, e o campo construiu junto as três coisas que faltavam em 2026.

A primeira foi o glossário como artefato público. Sistemas de percepção passaram a publicar o vocabulário que aceitam, quem o escreveu e com que desempenho medido em cada conceito — do mesmo jeito que software passou a publicar dependências. Isso tornou possível a pergunta que antes não tinha onde ser feita: por que este sistema enxerga "aglomeração" e não enxerga "fila"?

A segunda foi a prova de leitura. Nenhum dado extraído de documento circulou sem a região da imagem que o originou. O efeito colateral foi maior que o efeito pretendido: como a prova era barata de conferir, a contestação individual deixou de depender de advogado, e a taxa de erro de leitura passou a ser publicamente conhecida em vez de estimada.

A terceira foi a mudança de âncora da norma. A proteção deixou de perguntar "que tipo de dado foi usado" e passou a perguntar "o ato foi localizar uma pessoa determinada". Com isso, buscar alguém por roupa e trajeto passou a exigir o mesmo que buscar alguém por rosto, e o incentivo para inventar sinais que contornam a definição desapareceu — porque a definição deixou de ser sobre o sinal.

No Brasil, o marco legal saiu e trouxe a regra de finalidade junto. Os municípios que já operavam câmeras tiveram de publicar o vocabulário de busca e a taxa de engano, e o número de pessoas levadas a delegacia por inconsistência caiu porque passou a ser contado em público.

### 9.3. Indesejável

A capacidade se generalizou antes de qualquer medição, e o que se generalizou foi a confiança e não a acurácia.

A leitura de documento sem prova de origem virou padrão porque era barata. Como o modelo completava o ilegível com o provável, os erros deixaram de parecer erros: o campo vinha preenchido, plausível e coerente com o resto da página. Sistemas passaram a se alimentar uns dos outros, e a diferença entre o que estava escrito no papel e o que constava no banco deixou de ser verificável, porque o papel já não era consultado. O ônus de provar o engano caiu sobre quem foi lesado, que precisava demonstrar um negativo.

Na rua, a busca por descrição se consolidou justamente por não ser biometria. Não havia cadastro de rosto, então não havia dado biométrico, então não havia o que regular — e a mesma frase que localizava um foragido localizava quem frequentava determinado culto, ou quem esteve numa passeata, a partir de roupa, horário e trajeto. O índice semântico das gravações, pequeno e barato, sobreviveu a todas as políticas de retenção: apagava-se o vídeo em trinta dias e guardava-se para sempre a descrição do que ele mostrava. Quando o primeiro índice vazou, não havia o que apagar, porque o dano não estava numa imagem e sim numa lista pesquisável de pessoas por comportamento.

E a discussão pública ficou presa no lugar errado: continuou falando de reconhecimento facial, que era a técnica do problema anterior.

## 10. O experimento

**O glossário que vê — medir o desacordo entre vocabulários, não a acurácia.**

*Pergunta.* Se o que a máquina enxerga passou a ser função da frase que alguém escreveu, qual é a variação entre pessoas diferentes descrevendo a mesma cena para o mesmo modelo? O campo mede acurácia contra gabarito. Ninguém mede a dispersão introduzida por quem redige o conceito — que é exatamente a variável nova.

*Materiais, todos disponíveis hoje.* Um acervo de 200 a 300 imagens de um contexto único e não catalogado (por exemplo, fotos de um mesmo trecho de rua da cidade, ou frames de um acervo audiovisual local); um modelo de segmentação por conceito aberto, com SAM 3 ou SAM 3.1 via Hugging Face; alternativamente, um detector de vocabulário aberto para comparação; uma GPU de 16 GB, que é o suficiente segundo a documentação prática; e três pessoas.

*Protocolo.* (1) Define-se uma tarefa em linguagem natural, sem lista de classes: "encontre nestas imagens tudo que sinalize uso comercial da calçada". (2) Três pessoas escrevem, isoladas, o vocabulário que julgam necessário — cada uma entrega sua lista de frases nominais. (3) Roda-se o mesmo modelo, nas mesmas imagens, com os três vocabulários. (4) Registra-se, por imagem: quantas instâncias cada vocabulário encontrou, quanto as máscaras se sobrepõem entre vocabulários, e quais objetos foram vistos por um e por nenhum outro. (5) Só no fim as três pessoas veem os resultados umas das outras e tentam explicar as divergências.

*A medida.* A métrica principal é o desacordo: a fração de objetos detectados por exatamente um dos três vocabulários. A secundária é a sensibilidade ao tamanho da lista — repetir com a lista de cada pessoa truncada a três conceitos, que é o teste direto do achado de que reduzir o vocabulário melhora o desempenho de forma expressiva.

*Critério de falseamento.* Se o desacordo ficar abaixo de algo como 10%, a tese central deste mapa enfraquece muito: significaria que o conceito escrito importa pouco e que o modelo converge para a mesma leitura independentemente da redação, o que devolveria a decisão para a engenharia e esvaziaria os efeitos e1.2.1 e e2.1.1. Se ficar acima de 30%, o "curador de vocabulário" deixa de ser especulação de terceira ordem e vira um problema de projeto imediato.

*Por que cabe na disciplina.* Roda em uma semana, com três pessoas e uma máquina, não exige anotação prévia, e produz um dado que não encontrei publicado em nenhuma das fontes consultadas.

## 11. Fontes

1. `https://arxiv.org/abs/2511.16719` — SAM 3, define a tarefa de segmentação por conceito, o motor de dados com 4 milhões de rótulos de conceito únicos, a arquitetura com backbone compartilhado e presence head, e a alegação de dobrar a acurácia dos sistemas anteriores. Sustenta a disrupção 4.1. Confiabilidade alta para a definição da tarefa e a descrição do método; os números de desempenho são do próprio grupo autor, sem replicação independente que eu tenha aberto. Li o resumo, não o texto integral.
2. `https://ai.meta.com/blog/segment-anything-model-3/` — SAM 3.1, anunciado em 27/03/2026, multiplexação de até 16 objetos num passe, de 16 para 32 fps numa H100. Sustenta a viabilidade temporal do tronco 4.3. Confiabilidade média: é comunicação do fabricante, com números de engenharia verificáveis em princípio, mas não verificados por terceiro aqui.
3. `https://blog.roboflow.com/what-is-sam3/` — leitura prática: ~840M de parâmetros, ≈3,4 GB, ~30 ms por imagem numa H200, cabe em 16 GB, classificado como modelo de escala de servidor, e a recomendação de usá-lo para rotular e treinar um modelo menor. Sustenta "o que ainda falta" em 4.1 e 4.3, e o sinal fraco da seção 6. Confiabilidade média-alta: é fornecedor de plataforma de visão, com interesse comercial no fluxo que descreve, mas as cifras de hardware são específicas e checáveis.
4. `https://arxiv.org/abs/2508.10104` — DINOv3, características densas sem rótulo, Gram anchoring contra degradação em treinos longos, alegação de superar o estado da arte especializado sem ajuste fino. Sustenta o "por que agora" de 4.1. Confiabilidade alta para o método; o resumo não traz as cifras de escala que circulam em resumos de busca, e por isso elas não aparecem neste documento.
5. `https://arxiv.org/abs/2601.22164` — avaliação comparativa de cinco detectores de vocabulário aberto em imagem aérea: OWLv2 com 27,6% de F1 e 69% de falsos positivos no LAE-80C (3.592 imagens, 80 categorias), 0,53 no DIOR contra 0,12 no FAIR1M, confusão semântica como gargalo, ganho de 15× reduzindo o vocabulário de 80 para 3,2 classes, e falha da engenharia de prompt. É a principal evidência contra o próprio mapa. Confiabilidade alta como contraponto: estudo independente, desenho declarado; ressalva de que é um domínio só (imagem aérea) e generalizar dele para todos os domínios seria repetir o erro que ele denuncia.
6. `https://arxiv.org/abs/2601.03714` — análise crítica do DeepSeek-OCR: sem apoio linguístico o desempenho cai de aproximadamente 90% para 20%, e pipelines tradicionais de OCR são mais robustos a perturbação semântica. Sustenta o efeito e5 e a ressalva central da disrupção 4.2. Confiabilidade alta como contraponto, pelo mesmo motivo do item anterior.
7. `https://www.extend.ai/resources/ocr-and-ai-vision-language-models-replacing-text-recognition` — alegações de que VLMs substituíram o OCR em 2026, com 98,5% e 99%+ de acurácia contra 60–75% do OCR tradicional, e a tese de que a mudança principal é o formato da saída (JSON em vez de texto). Confiabilidade baixa para os números: página comercial de fornecedor, sem conjunto de teste, sem metodologia, sem cenário em que o OCR tradicional siga preferível. Usada apenas como descrição do discurso do setor, nunca como âncora de efeito.
8. `https://artificialintelligenceact.eu/article/5/` — texto das práticas proibidas do AI Act: categorização biométrica por atributos sensíveis, identificação biométrica remota em tempo real em espaço público para aplicação da lei com exceções estritas e autorização judicial prévia, raspagem não direcionada de imagens faciais, inferência de emoção em trabalho e educação. Sustenta os efeitos e8 e e8.1. Confiabilidade alta para o conteúdo das proibições; não verifiquei aqui o calendário de exigibilidade e por isso ele não é afirmado.
9. `https://www.brasildefato.com.br/2026/02/04/smart-sampa-mais-de-80-pessoas-foram-levadas-para-delegacias-por-inconsistencia-do-reconhecimento-facial/` — Smart Sampa entre 21/11/2024 e 21/05/2025: 1.246 pessoas abordadas, 1.153 conduzidas e presas, 82 levadas a delegacia e liberadas por inconsistência (53 por falta de baixa de mandado no banco nacional, 6 por inconsistência do cadastro do próprio sistema, 23 por inconsistência do reconhecimento facial), custo de R$ 9,8 milhões mensais. Fonte declarada: relatório de transparência da prefeitura de junho de 2025 e pedidos de Lei de Acesso à Informação. Sustenta o efeito e8.2. Confiabilidade média-alta: veículo com linha editorial marcada, mas os números têm origem documental declarada e verificável.
10. `https://www25.senado.leg.br/web/atividade/materias/-/materia/157233` — PL 2338/2023 aprovado em plenário no Senado e remetido à Câmara dos Deputados em 17/03/2025, onde tramita. Sustenta o e8.2. Confiabilidade alta: fonte primária oficial.
11. `https://www.meta.com/ai-glasses/blind-visually-impaired/` — descrição contextual de ambiente, acionamento do Be My Eyes por voz, conversa contínua com a assistente, Be My Eyes disponível em 21 mercados. Sustenta o e7 e o e7.1. Confiabilidade baixa a média: página de produto do fabricante, sem datas, sem lista de mercados, sem medida de desempenho.
12. `https://afb.org/aw/fall2025/meta-glasses-review` — avaliação dos óculos por usuário de baixa visão: leitura de cardápio eficaz, reconhecimento de objeto com distância aproximada, e falhas específicas — direção contraditória e errada para uma luminária, processamento não instantâneo nem preciso o bastante para travessia de rua, incapacidade de substituir a bengala. Sustenta a ressalva do e7.1 e o e7.1.1. Confiabilidade alta para o propósito: avaliação independente, de organização do campo, com exemplos concretos; é relato de uso, não estudo controlado.
13. `https://www.herohunt.ai/blog/the-changing-landscape-of-ai-data-labeling-hiring-2026/` — partição do mercado de anotação, com agentes automáticos cobrindo de 70% a 80% dos casos simples e valorização do trabalho especializado. Confiabilidade baixa: blog de empresa de recrutamento, e ao ser confrontado o próprio texto não apresenta fonte primária para nenhuma das cifras ("estudos encontraram", "um relatório do setor", "uma pesquisa de 2025"). Usado apenas como indício de direção para o e1.1.1, nunca como número.

## 12. Anexo — o levantamento bruto

### 12.1. Fase 1 — entrevista de enquadramento, como foi respondida

Esta rodada foi executada sem interlocutor disponível, com as respostas fornecidas de antemão pelo enunciado da rodada. Registro-as literalmente, porque a skill exige que a fase 1 seja respondida antes da fase 2 e porque qualquer leitor precisa saber o que foi decidido por mim e o que foi decidido pelo pedido.

1. **Tema exato:** "Máquinas que veem qualquer coisa: visão de vocabulário aberto" (tema 11 de 19 da disciplina, família "Percepção e mídia sintética").
2. **Recorte:** tecnologia, com desdobramento em prática social e regulação. *(Não foi especificado um único recorte; assumi tecnologia como eixo e mantive regulação e prática como consequências, não como raiz.)*
3. **Horizonte:** 2031.
4. **Para quem:** quem projeta mídia e interação.
5. **Recorte geográfico:** global, com uma nota sobre o Brasil.
6. **Já descartado:** o que já é comum em produto de massa (a régua da disciplina). Nenhuma outra exclusão.
7. **Viés desejado:** neutro.
8. **O que já se sabe / disrupção suspeita:** nenhuma indicada — pedido explícito de descobrir. Ideias óbvias a excluir: as que serviriam para qualquer tema. Critério declarado de mudança de ideia: evidência de que a adoção já passou da maioria inicial (Rogers), ou de que a tecnologia não rompe nada e só melhora o que existe.

Parâmetros adicionais recebidos: profundidade de três ordens; modo "a partir de uma inovação", não de um setor; busca na web obrigatória, citando apenas o que foi efetivamente aberto.

### 12.2. Fase 2 — triagem de maturidade, completa

| Tecnologia | Categoria | Justificativa e teste de rejeição |
|---|---|---|
| Classificação de imagem com classes fixas | Madura | Padrão de mercado há mais de uma década. Não quebra nada hoje. |
| Detecção de objeto com classes fixas (YOLOX, RF-DETR) | Madura | Commodity. Entra como contexto na seção 3. |
| OCR tradicional (PaddleOCR, EasyOCR, LaTeX-OCR) | Madura | Padrão há muito mais de 3 anos; 80 idiomas em biblioteca aberta. |
| Reconhecimento facial (InsightFace, face-alignment) | Madura | Em operação municipal com números públicos. É o problema anterior, não o emergente. |
| Anotação manual (CVAT, Label Studio) | Madura | Ferramenta padrão. Interessa aqui como o que a disrupção desloca, não como disrupção. |
| Compreensão de vídeo com rótulos fixos (SlowFast) | Madura | Estabelecida; vocabulário fechado. |
| SAM 1 e SAM 2 (segmentação promptável por geometria) | Madura na borda do emergente | SAM 1 é de 2023; a promptabilidade geométrica já é padrão em ferramenta de anotação. Rejeitada como raiz: o prompt é ponto e caixa, não conceito. |
| **SAM 3 / SAM 3.1 (segmentação promptável por conceito)** | **Disruptiva** | Quebra a cadeia anotar-treinar-implantar e o papel do dataset como ativo. Passa no teste: se funcionar, quem perde dinheiro é a camada de anotação por commodity e quem vende dataset rotulado. |
| Grounding DINO / Grounded-SAM (detecção de vocabulário aberto) | Emergente | Viabilidade demonstrada, escala não atingida; degradação medida fora do domínio natural. |
| **DINOv2 / DINOv3 (características sem rótulo)** | **Disruptiva em potencial** | Remove o rótulo do caminho crítico. Entra dentro da disrupção 4.1 como um dos dois motores, não como raiz separada — sozinha ela muda o treino, não o produto. |
| **Compreensão de documento sem OCR (Donut, DeepSeek-OCR, VLMs)** | **Disruptiva** | Quebra o pipeline de OCR e o formulário como instrumento de captura. Passa no teste: perde receita quem vende OCR, digitação e conferência. |
| VLMs generalistas (Qwen3-VL, PaliGemma, LAVIS) | Emergente como substrato de percepção | Maduros como conversa sobre imagem; emergentes como camada de percepção de produção. |
| VLM pequeno em dispositivo (llama.cpp, modelos de 2 a 4 bilhões de parâmetros) | Emergente | É o gatilho que falta para 4.3. Não achei demonstração aberta de vocabulário aberto em tempo real em vestível. |
| Óculos com assistente visual contínuo | Emergente | Em mercado, com caso de uso legítimo forte (acessibilidade) e falhas documentadas em direção e distância. |
| Automação de navegador por visão (Skyvern) | Emergente | Fora do escopo: o objeto aqui é a percepção aberta, não o agente que age. Vizinhança com o tema 9. |
| ORTHOS (resposta emocional simulada) | Emergente, sinal fraco | Não é reconhecer o que está na imagem; é prever o que ela provoca. Mantido na seção 6. |

Confirmação da triagem: a skill manda pedir confirmação ao usuário antes de prosseguir. Sem interlocutor, assumi a triagem acima e a declaro aqui inteira para que seja contestável item a item — em especial as duas classificações discutíveis: SAM 1/2 como madura, e DINOv3 como motor de 4.1 em vez de raiz própria.

### 12.3. Fase 5 — rodada adversarial, resultado numérico

Efeitos gerados na primeira derivação: **38**. Efeitos no documento final: **32**.

- **Descartados: 5.**
  - "Até 2029 a inspeção visual industrial está integralmente automatizada" — teste de adoção acelerada. Nenhum precedente de substituição integral de inspeção humana em três anos; e o próprio setor recomenda usar o modelo aberto para rotular, não para inspecionar.
  - "O PDF deixa de existir como formato até 2031" — extrapolação linear e total. Formatos maduros coexistem por décadas; nenhum formato de documento desapareceu por ter ficado legível.
  - "Todos os óculos vendidos em 2031 terão rotulagem contínua do campo de visão" — adoção acelerada, e sobre uma base instalada pequena. Descartado.
  - "As escolas de design deixam de ensinar taxonomia e passam a ensinar escrita de prompt" — sem mecanismo específico; é a versão vestida de "muda a formação".
  - "A visão de vocabulário aberto muda a relação da sociedade com a imagem" — vazio por definição. É o exemplo que a própria skill dá do que não é efeito de terceira ordem.
- **Reconectados: 1.** "Plataformas de mídia adaptam o conteúdo à reação emocional do espectador" — teste de causa solta: retirando as três raízes, o efeito ocorre assim mesmo, porque deriva de sensoriamento de emoção. Retirado da roda e realocado como sinal fraco na seção 6.
- **Reescritos: 4.** e1.1.1 (de "a profissão de anotador desaparece" para partição de mercado); e3.1.1 (de "a imagem vira dado estruturado" para deslocamento de valor da catalogação para a posse do bruto); e4.2 (de "a digitação acaba" para migração do trabalho para exceção e contestação); e7.1 (de "a acessibilidade é resolvida" para mudança da régua de qualidade para direção e distância, ancorada na avaliação independente).
- **Mantidos com ressalva: 7.** e2.2 e e6 (marcados como suspeitos de extrapolação linear: são "o que já acontece, só que mais", e por isso e6 ficou com confiança média apesar de ser de primeira ordem); e7 (suspeito de adoção acelerada — depende inteiramente de inferência aberta na borda até 2029); e8, e8.1 e e8.2 (marcados para revisão por viés: são exatamente o que o recorte pedido sugeria como resposta); e9 (suspeito de causa solta parcial — a queda de custo de armazenamento também empurraria nessa direção sem vocabulário aberto; mantido porque o que muda com a raiz é a *pesquisabilidade* do índice, não o custo de guardar).

A skill manda perguntar ao usuário se ele quer refazer alguma disrupção. Sem interlocutor: não refiz nenhuma, e registro que a candidata natural a refazimento é a 4.3, a de menor sustentação empírica e maior peso narrativo.

### 12.4. Buscas que falharam ou não foram usadas

- Comunicado do Be My Eyes sobre a expansão com a Meta: HTTP 403. Consequência: o anúncio na CSUN de março de 2026 e a cifra de cerca de 130 mil veteranos cegos que apareceram em resumo de busca ficaram de fora do documento.
- Estudo sobre detectores de vocabulário aberto em imagem aérea: a versão em PDF retornou binário ilegível; os números só entraram depois de abrir a página de resumo.
- Contagem de câmeras do Smart Sampa: os resumos de busca falavam em 50 mil câmeras, sendo 20 mil com reconhecimento facial, e em 3 mil foragidos presos desde setembro de 2024. A matéria que abri não traz contagem de câmeras. Nenhum desses números entrou.
- Calendário de exigibilidade do AI Act (2 de agosto de 2026): apareceu em resumo de busca, não estava na página do Artigo 5 que abri. Não afirmado.
- Busca por demonstração aberta de segmentação por conceito rodando em tempo real em dispositivo vestível: não encontrei nenhuma. Esse vazio é a base da ressalva central do tronco 4.3, e foi tratado como ausência de evidência, não como evidência de ausência.
- Escala do DINOv3 (imagens de treino, parâmetros): circulando em resumos de busca, ausente do resumo oficial que abri. Omitida.

### 12.5. Caminhos abandonados

- **Uma quarta disrupção-raiz, "a imagem vira dado estruturado por padrão".** Abandonada por ser consequência, não causa: é o que os efeitos e3.1, e9 e e9.1 descrevem juntos. Manter como raiz duplicaria a árvore.
- **Tratar acessibilidade como disrupção própria.** Abandonada pelo teste de causa: acessibilidade é o primeiro mercado da percepção contínua, não uma ruptura de cadeia de valor. Ficou como efeito e7.1, onde é mais útil, porque é lá que existe medição independente de falha.
- **Puxar o fio da vizinhança com reconstrução 3D (tema 10) e robótica (tema 9).** Deliberadamente não seguido: o objeto aqui é a percepção aberta, e efeitos que dependem de agir no mundo pertencem aos vizinhos.
- **Usar o Hype Cycle para posicionar o tema.** Descartado pelo que o próprio estudo da skill registra: a curva não é validada empiricamente e não serve para prever quando algo se materializa. Usei em seu lugar a triagem maduro/emergente/disruptivo e o critério de adoção declarado na entrevista.
