---
tema: "Máquinas que veem qualquer coisa: visão de vocabulário aberto"
slug: maquinas-que-veem-qualquer-coisa-visao-de-vocabulario-aberto
autor_login: bvga
zona_de_interesse: "Percepção e mídia sintética"
data: 2026-09-12
horizonte: 2031
publico: "Quem projeta mídia e interação"
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 5
efeitos_ordem_2: 9
efeitos_ordem_3: 9
tecnologias_citadas: [SAM 3, SAM 3.1, SAM 3D, DINOv3, OWLv2, YOLO-World, YOLOE-26, YOLO26, NanoOWL, NanoSAM, EfficientViT-SAM, RF-DETR, Meta Ray-Ban Display, Meta Neural Band]
fontes: 14
confianca: media
experimento: "O Vocabulário"
skill_usada: futurizacao-bvga
publico_ok: false
---

# Máquinas que veem qualquer coisa: visão de vocabulário aberto

## 1. Resumo

Um sistema de visão computacional sempre teve um limite escrito no momento do treino: a lista de classes.
O que mudou é que essa lista saiu do treino e virou parâmetro de execução. Em SAM 3, a tarefa é definida
como segmentação promptável por conceito — uma frase nominal curta ("ônibus escolar amarelo") ou um
exemplar visual entram como prompt e saem máscaras com identidade para todas as instâncias
correspondentes. No benchmark dos próprios autores, o modelo atinge 54,1 cgF1 contra 24,6 do melhor
baseline comparado, e 48,8 de mask AP zero-shot em LVIS contra 38,5 do estado da arte anterior. O
desempenho humano estimado no mesmo conjunto é 72,8 cgF1 — a máquina está em cerca de três quartos do
humano, não acima dele.

Três disrupções-raiz sobrevivem ao filtro deste mapa: **(R1)** o rótulo deixar de ser artefato de treino e
virar consulta em tempo de execução; **(R2)** a compreensão de documento como imagem, sem OCR como etapa
separada; **(R3)** a percepção aberta contínua fora do datacenter, na borda. As três são emergentes, não
maduras. As três têm uma condição pendente identificável: a ambiguidade da linguagem como nova fonte de
erro (R1), a troca do erro de caractere pelo erro plausível (R2) e o envelope térmico e energético de um
dispositivo vestível (R3).

O que este mapa **não** sustenta: que a anotação de dados vá desaparecer, que o vocabulário aberto já
supere modelos fechados ajustados em domínio específico, e que a mudança em interface chegue por
substituição. A evidência aberta aponta para coexistência — o vocabulário aberto entra como etapa de
autoria e de partida, e o modelo fechado continua no ponto quente de latência.

Para quem projeta mídia e interação, o deslocamento concreto é este: **a unidade de trabalho deixa de
ser o traçado e passa a ser o nome**. Selecionar vira consultar. E quem escreve o nome assume a
responsabilidade que antes estava distribuída no dataset.

Confiança geral do mapa: **média**. A ancoragem de capacidade técnica é sólida e primária; a ancoragem de
adoção é fraca, e isso está declarado em cada efeito.

## 2. O tema

**Recorte.** Percepção visual aberta: segmentar, detectar e entender imagem por descrição em linguagem,
sem lista de classes fixada no treino. Inclui compreensão de documento como imagem. Exclui reconstrução
3D (tema vizinho) e o uso da visão para ação robótica (tema vizinho) — aqui o objeto é a percepção, não
o que se faz com ela.

**Horizonte.** 2031.

**Público.** Quem projeta mídia e interação: a pergunta que organiza o mapa não é "quanto melhora o mIoU",
é "o que muda na forma de pedir, selecionar, conferir e responder".

**Recorte geográfico.** Global, com uma nota sobre o Brasil na seção 3 e no cenário indesejável.

**Descartado de início.** O que já é comum em produto de massa, pela régua da disciplina: classificação de
imagem, detecção de objeto com classes fixas e OCR tradicional não entram como candidatos a disrupção.
Também foram descartadas ideias genéricas que serviriam a qualquer tema ("vai ficar mais barato", "vai
ter mais dado", "vai precisar de governança").

**Postura analítica.** Neutra por instrução: nenhuma disrupção foi dada de antemão. O viés que precisou
ser combatido ativamente está declarado na seção 7, item 8.

**O que faria este mapa mudar de ideia.** Duas coisas, ambas verificáveis: evidência de que a adoção já
passou da maioria inicial na curva de Rogers — o que rebaixaria R1 de emergente para madura e a
desqualificaria como raiz — ou evidência de que a capacidade só melhora o que já existia, sem romper
nenhuma das dimensões da seção 4.

## 3. Onde isso está hoje

**A capacidade central existe e é pública.** SAM 3 foi submetido em 20/11/2025 e revisado em 28/03/2026;
introduz a tarefa Promptable Concept Segmentation (PCS) e foi treinado com um motor de dados que produziu
4 milhões de rótulos de conceito únicos, incluindo negativos difíceis. Os números que consegui ler no
artigo: 54,1 cgF1 em SA-Co/Gold contra 24,6 do OWLv2; 48,8 mask AP zero-shot em LVIS contra 38,5
anteriores; 30 ms por imagem com mais de 100 objetos numa GPU H200; desempenho humano estimado em 72,8
cgF1. Em 27/03/2026 saiu o SAM 3.1, cuja mudança central é multiplexação de até 16 objetos num único
passe, dobrando o vídeo de 16 para 32 FPS numa H100.

**Já saiu do laboratório, e num sentido específico.** A Meta anunciou em novembro de 2025 que o SAM 3
alimentaria funções no app Edits, no Meta AI e no Facebook Marketplace, e abriu o Segment Anything
Playground, onde qualquer pessoa aplica prompt de texto sem saber programar — com modelos prontos para
pixelizar rostos e placas. No mesmo anúncio, a Roboflow aparece como parceira de anotação para ajuste
fino. Esse detalhe importa mais do que parece e volta na seção 6.

**A infraestrutura de baixo também mudou.** DINOv3 foi lançado em 14/08/2025, treinado com ~1,7 bilhão de
imagens e até 7 bilhões de parâmetros, sob licença comercial, com usos relatados no World Resources
Institute (erro de medição de altura de copa caindo de 4,1 m para 1,2 m numa região do Quênia) e no JPL
da NASA. É o que torna barato ter boas características visuais sem rótulo — antecedente, não raiz.

**E o vocabulário aberto está descendo para a borda.** Um estudo publicado em 21/10/2025 mediu, num
NVIDIA Jetson AGX Orin 64GB, a combinação NanoOWL + EfficientViT-SAM a 47,51 FPS com 84,64% de mIoU, e
YOLO-World + EfficientViT-SAM-L0 a 26,68 FPS. O mesmo estudo registra falhas catastróficas do
EfficientViT-SAM em FP16 para alguns modelos — a otimização que viabiliza a borda é também onde a coisa
quebra.

**O que ainda não é verdade.** Três contrassinais, todos de fonte independente:

- Em canteiro de obras, para detectar componentes elétricos e hidráulicos, modelos leves ajustados ao
  domínio ainda superam largamente os modelos de vocabulário aberto. A versatilidade não se converte em
  desempenho no domínio estreito.
- A própria documentação de quem vende a facilidade diz o contrário do slogan: a Roboflow registra que o
  ganho vem com perda de precisão, que SAM 3 funciona melhor com nomes comuns e fronteiras visuais
  claras, que mais classes no prompt custam mais tempo de inferência — e recomenda um modelo treinado
  (RF-DETR) quando as classes são fixas e a precisão importa.
- Em documento real, o benchmark CC-OCR V2 (16 subtarefas, 74 cenários, 7.093 amostras, 32 idiomas, 17
  modelos multimodais testados) encontra uma lacuna entre desempenho de benchmark e confiabilidade
  prática: modelos com acurácia geral parecida falham de formas fundamentalmente diferentes conforme
  iluminação, qualidade de imagem e método de captura.

**Three Horizons, como cheque temporal.** H1 é o sistema dominante hoje: pipeline de classes fixas,
dataset proprietário, OCR como etapa, anotação como indústria. H2 é o conflito já visível: o vocabulário
aberto entrando como camada de partida e de autoria enquanto o modelo fechado segura o ponto quente de
latência, com anotação virando correção. H3 é a lógica nova: o rótulo como consulta, a imagem como
superfície de pergunta, e a disputa se deslocando do dado para o nome. O mapa abaixo assume que 2031 está
em H2 avançado, não em H3 consolidado.

**Nota sobre o Brasil.** Os dois eixos que decidem o desfecho aqui estão indefinidos. No regulatório, o
PL 2338/2023 foi aprovado pelo Senado e segue na Câmara: consultada a ficha de tramitação em 12/09/2026,
o projeto está numa Comissão Especial, aguardando parecer do relator, com 37 proposições apensadas — e o
registro mais recente é de 02/09/2026, apensação de outro projeto. Não há marco legal em vigor. No
operacional, São Paulo já opera o Smart Sampa com 20 mil câmeras com biometria facial; numa audiência
pública na Câmara Municipal, pesquisadores e parlamentares registraram imprecisão, viés racial com erro
concentrado em mulheres negras, custo anual acima de R$ 100 milhões e prisões ilegais. O Brasil chega a
2031 com capacidade instalada de vigilância por imagem e sem a regra que a EU já escreveu — e o efeito
e5.2 deste mapa é especialmente perigoso nesse arranjo.

**Onde a regra já existe.** O Artigo 5 do EU AI Act proíbe três práticas que tocam este tema: a criação
ou ampliação de bases de reconhecimento facial por raspagem não direcionada de imagens da internet ou de
CFTV; a categorização biométrica que deduza raça, opinião política, filiação sindical, crença, vida ou
orientação sexual; e a identificação biométrica remota em tempo real em espaço público para fins
policiais, com três exceções. Note o que **não** está lá: descrever uma pessoa por atributo visível sem
identificá-la. Isso é o buraco que o efeito e5.2 atravessa.

## 4. As disrupções-raiz

Foram gerados nove candidatos e filtrados três. As fichas dos seis rejeitados estão na seção 12.

---

### R1 — O rótulo deixa de ser artefato de treino e vira consulta em tempo de execução

| campo | conteúdo |
|---|---|
| **candidato** | Segmentação e detecção promptável por conceito (vocabulário aberto) |
| **maturidade** | emergente |
| **potencial_de_ruptura** | alto |
| **o_que_rompe** | (a) a cadeia de valor da visão: coletar → rotular → treinar → implantar deixa de ser pré-requisito para existir um sistema; (b) quem pode produzir: define-se um detector escrevendo uma frase; (c) a forma dominante de interação com mídia: selecionar deixa de ser traçar e passa a ser nomear; (d) o papel do intermediário: a anotação deixa de ser produção e vira arbitragem |
| **por_que_agora** | A tarefa foi formalizada e medida (PCS/SA-Co, 2025-2026), o salto é grande contra o baseline (54,1 vs 24,6 cgF1; 48,8 vs 38,5 mask AP em LVIS), o modelo é aberto, e já foi anunciado dentro de produtos de massa da Meta (Edits, Meta AI, Marketplace) e num playground sem exigência técnica |
| **o_que_falta** | Fechar a distância para o humano (72,8 cgF1) e, sobretudo, resolver a ambiguidade: o próprio artigo trata polissemia, descritores subjetivos, casos de fronteira, oclusão e borrão como limitações declaradas. Falta também vencer o modelo ajustado no domínio estreito — hoje não vence |
| **evidencias** | arXiv 2511.16719 (primária, alta); ai.meta.com/blog SAM 3.1 (corporativa, média); about.fb.com anúncio (corporativa interessada, média); blog.roboflow.com (terceiro com incentivo em vender ajuste fino, média — e ainda assim declara os limites) |
| **veredito** | **ACEITA como disrupção-raiz** |

---

### R2 — O documento é entendido como imagem, sem OCR como etapa separada

| campo | conteúdo |
|---|---|
| **candidato** | Compreensão de documento sem OCR (OCR-free document understanding) |
| **maturidade** | emergente, com subcategoria experimental nos casos difíceis |
| **potencial_de_ruptura** | alto |
| **o_que_rompe** | (a) arquitetura de produto: some uma etapa inteira do pipeline e com ela o gabarito de campos; (b) papel profissional: digitação e conferência mudam de natureza, não de volume; (c) barreira de acesso: extrair de documento não estruturado deixa de exigir projeto; (d) forma de interação: extração vira pergunta em linguagem |
| **por_que_agora** | Os modelos multimodais passaram a ser avaliados diretamente em processamento documental de mundo real, e não só em leitura de texto — CC-OCR V2 mede 5 capacidades em 16 subtarefas, 74 cenários, 10 categorias de documento e 32 idiomas, com 17 modelos |
| **o_que_falta** | Confiabilidade sob condição real de captura. O achado central do CC-OCR V2 é que acurácia agregada parecida esconde padrões de falha fundamentalmente diferentes conforme fatores do documento. Falta ainda ancoragem visual verificável: apontar na imagem de onde saiu cada campo |
| **evidencias** | arXiv 2605.03903 (acadêmica, alta para a existência da lacuna; não mede adoção) |
| **veredito** | **ACEITA como disrupção-raiz**, com confiança menor que R1 — a evidência sustenta a capacidade e o problema, não a adoção |

---

### R3 — A percepção aberta sai do datacenter e vira contínua na borda

| campo | conteúdo |
|---|---|
| **candidato** | Percepção de vocabulário aberto em tempo real em dispositivo embarcado |
| **maturidade** | experimental |
| **potencial_de_ruptura** | alto |
| **o_que_rompe** | (a) normas sociais e privacidade: o dispositivo passa a procurar, não só a gravar; (b) distribuição de poder: vigiar por atributo fica mais barato do que vigiar por identidade, e cai fora do texto regulatório existente; (c) forma de interação: acessibilidade passa de "descreva isto" para "me avise quando" |
| **por_que_agora** | Três linhas convergiram e são mensuráveis: NanoOWL + EfficientViT-SAM a 47,51 FPS com 84,64% de mIoU num Jetson AGX Orin (10/2025); SAM 3.1 dobrando o vídeo para 32 FPS com multiplexação de 16 objetos (03/2026); e a re-parametrização do vocabulário aberto de volta num caminho YOLO padrão, que permite pagar o custo do vocabulário na autoria e não na inferência. E há óculos com IA em prateleira: o Meta Ray-Ban Display saiu em 30/09/2025 a partir de US$ 799, com até seis horas de bateria em uso misto |
| **o_que_falta** | O salto de plataforma. As medições que li são numa placa de desenvolvimento, não em silício de óculos; a própria fonte registra falhas catastróficas em FP16. E a autonomia anunciada é de uso misto — nada indica percepção aberta contínua dentro desse envelope |
| **evidencias** | PMC12583037 (acadêmica, alta, mas em plataforma de desenvolvimento); ai.meta.com/blog SAM 3.1 (corporativa, média); pyimagesearch YOLOE-26 (terceiro técnico, média); about.fb.com Ray-Ban Display (corporativa interessada, média — sustenta preço, data e bateria, não capacidade contínua) |
| **veredito** | **ACEITA como disrupção-raiz**, com a menor confiança das três. É a candidata que o red team mais ataca (seção 7, itens 2 e 3) |

---

### Rebaixados

- **DINOv3 e as características visuais sem rótulo** → tecnologia habilitadora. É o que barateia R1, não o que rompe. Já tem licença comercial, usos relatados em produção (WRI, JPL) e família destilada para deploy: é infraestrutura.
- **Detecção de vocabulário aberto em tempo real (YOLO-World, YOLOE-26)** → antecedente de R3. A própria documentação recomenda o modelo fechado quando as classes são fixas e a latência aperta; a capacidade se comporta como otimização, não como ruptura autônoma.
- **SAM 3D e o "View in Room" do Marketplace** → fora de escopo por decisão do recorte (reconstrução 3D é o tema vizinho).

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "R1 — O rótulo deixa de ser artefato de treino e vira consulta em tempo de execução"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "Pipelines de visão passam a ser especificados em texto, e a lista de classes vira parâmetro editável em produção"
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "A anotação deixa de ser produção de massa e vira arbitragem de caso difícil e de fronteira conceitual"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "Em auditoria de sistema de visão, o objeto de disputa migra do dataset para o prompt, e quem escreveu a frase responde pelo que a máquina viu"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "Ferramentas de mídia passam a oferecer edição por nomeação, e a seleção vira consulta em vez de traçado"
            sinal: forte
            prazo: 2029
            confianca: alta
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "A perícia em seleção precisa perde valor de mercado e o valor migra para decidir o que selecionar e por quê"
                sinal: medio
                prazo: 2031
                confianca: media
          - id: e1.3
            ordem: 2
            efeito: "A ambiguidade lexical vira modo de falha de produto, porque polissemia e descritor subjetivo produzem recortes divergentes sem erro visível na tela"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.3.1
                ordem: 3
                efeito: "Surgem vocabulários controlados de domínio, versionados como esquema de banco, para que o mesmo prompt signifique a mesma coisa entre equipes"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "O custo de começar um sistema de visão cai para perto de zero e a barreira migra de ter dados rotulados para saber nomear o que importa"
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Equipes pequenas e não especialistas passam a produzir visão de nicho sem ciclo de coleta, ainda que com precisão pior que a de um modelo ajustado"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "A vantagem competitiva em visão deixa de ser o dataset proprietário e passa a ser o acesso às câmeras e o direito de olhar"
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "R2 — O documento é entendido como imagem, sem OCR como etapa separada"
    efeitos:
      - id: e3
        ordem: 1
        efeito: "A extração de dados de documento passa a ser formulada como pergunta em linguagem, não como gabarito de campos e coordenadas"
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "O formulário deixa de ser desenhado em torno do que a máquina consegue ler e passa a ser desenhado em torno do que a pessoa consegue responder"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Interfaces de coleta voltam a aceitar entrada livre — foto, rascunho, áudio transcrito — porque a estruturação acontece depois da captura"
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "A conferência humana se desloca de ler tudo para auditar amostra e exceção, e o erro muda de forma: em vez de caractere trocado, valor plausível inventado"
            sinal: forte
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "Setores regulados passam a exigir que o sistema aponte a região da imagem que sustenta cada campo extraído, e a ancoragem visual vira requisito de conformidade"
                sinal: medio
                prazo: 2032
                confianca: media
      - id: e4
        ordem: 1
        efeito: "A tela passa a ser lida como documento, e agentes operam interfaces por pixel onde não existe API"
        sinal: medio
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "O design de interface ganha um segundo público, o agente que a lê, e legibilidade por máquina vira critério de projeto ao lado de acessibilidade"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Produtos passam a publicar affordances legíveis por agente — rótulos estáveis, estados explícitos, alvos de clique nomeados — como hoje publicam conformidade de acessibilidade"
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: "R3 — A percepção aberta sai do datacenter e vira contínua na borda"
    efeitos:
      - id: e5
        ordem: 1
        efeito: "O campo de visão de um dispositivo vestível vira um fluxo consultável por conceito, em vez de uma gravação a ser revista depois"
        sinal: medio
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "Acessibilidade deixa de ser descreva esta foto e vira me avise quando, com a descrição disparada por condição e não por pedido"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "A norma de consentimento em espaço público se reorganiza em torno do que o dispositivo procura, e não do que ele grava"
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "O custo de vigiar por atributo cai abaixo do custo de vigiar por identidade, porque descrever é mais barato e menos regulado do que reconhecer"
            sinal: forte
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "A regulação centrada em reconhecimento facial perde eficácia como instrumento, porque o alvo se desloca do rosto para a descrição"
                sinal: medio
                prazo: 2032
                confianca: media
```

**O que a estrutura não captura bem.**

A árvore força cada efeito a ter um pai único, e três dos nós aqui têm dois. O `e1.3` (ambiguidade como
modo de falha) é tão filho de R1 quanto de R2: o valor plausível inventado do `e3.2` é a mesma patologia
vista em documento. O `e4` (tela como documento) é filho de R2 na leitura que adotei, mas seria
igualmente defensável pendurá-lo em R1 — reconhecer um botão por descrição é detecção de vocabulário
aberto aplicada a pixels de interface. E o `e2.1.1` (acesso à câmera como vantagem) é o ponto onde R1 e
R3 se encontram: só faz sentido se a percepção contínua acontecer.

A roda também não representa **realimentação**. O caso mais importante: `e1.1` (anotação vira arbitragem)
alimenta de volta a própria R1, porque as máscaras corrigidas por humanos viram dado de ajuste fino — é
exatamente o fluxo que a Roboflow descreve e que a Meta referenciou no anúncio. Isso é um ciclo, não uma
cadeia, e uma Futures Wheel não sabe desenhar ciclo.

Por fim, a ordem mede distância causal, não data, e neste mapa isso aparece de forma incômoda: `e5.2`
(vigilância por atributo) é de 2ª ordem e tem sinal forte com prazo 2030, enquanto `e5` (o fluxo
consultável), que é o pai, tem confiança baixa. A leitura correta é que `e5.2` não depende de óculos —
depende apenas de câmera fixa com vocabulário aberto, que já existe. Ou seja: o filho é mais provável
que o pai. Isso é um sinal de que a árvore está mal enraizada ali, e está registrado como tal.

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — a Roboflow como parceira de ajuste fino no anúncio do SAM 3.**
A ferramenta de anotação não foi citada como vítima da capacidade que dispensa anotação; foi citada como
parceira dela. Se o vocabulário aberto realmente dispensasse rotulagem, essa frase não estaria no
anúncio. É pequeno, é ambíguo, e aponta para o `e1.1`: o trabalho não some, muda de posto — de produzir
para corrigir.

**Sinal fraco 2 — a re-parametrização do vocabulário aberto de volta num caminho fechado.**
O YOLOE-26 permite que o vocabulário aberto seja "re-parametrizado de volta num caminho YOLO padrão, de
modo que não se pague custo extra de inferência". Isso é discreto e muda a arquitetura do futuro: o
vocabulário aberto pode acabar não sendo um modo de execução, e sim **um modo de autoria** — usa-se a
linguagem para definir o detector, e o que vai para produção é um artefato fechado. Se este sinal
vencer, R3 fica muito mais fácil e R1 fica muito menos disruptiva no dia a dia da operação.

**Sinal fraco 3 — o placar público que não acompanha.**
A página primária do OSWorld que consultei em 12/09/2026 registra o melhor agente em 12,24% contra 72,36%
de humanos, e anota o lançamento do OSWorld 2.0 em 26/06/2026. Fontes secundárias afirmam números
dramaticamente maiores para 2026. Não consegui reconciliar (ver seção 8). Ambíguo por natureza — mas o
descolamento entre o placar oficial e o discurso é, ele próprio, um sinal sobre como a adoção deste tema
será narrada.

---

**Wildcard 1 — percepção aberta contínua chega ao envelope de um óculos de consumo antes de 2029.**
Baixa probabilidade: a medição que li, 47,51 FPS com 84,64% de mIoU, é numa placa de desenvolvimento
Jetson AGX Orin de 64 GB, não em silício de armação; e a autonomia anunciada dos óculos em prateleira é
de seis horas em **uso misto**, não em processamento contínuo. Alto impacto: se acontecer, `e5`, `e5.1` e
`e5.1.1` saltam de confiança baixa para média e antecipam em dois ou três anos, e a pergunta de
consentimento deixa de ser sobre gravação e passa a ser sobre busca — o que nenhuma regra existente
endereça. Quebraria a parte mais conservadora deste mapa.

**Wildcard 2 — um regulador ou tribunal decide que descrever por atributo é tratamento de dado
biométrico.**
Baixa probabilidade, porque o Artigo 5 do EU AI Act está redigido em torno de identificação e de
categorização por atributo protegido, e "pessoa de camisa vermelha correndo" não é nenhum dos dois. Alto
impacto e **na direção contrária** do wildcard 1: mataria `e5.2` e `e5.2.1`, que são os efeitos de sinal
mais forte de R3. Se ocorrer no Brasil primeiro — plausível, dado que o PL 2338 ainda está aberto na
Câmara com 37 apensados e pode incorporar o conceito — o mapa inverte regionalmente: o país com mais
câmeras instaladas e menos regra vira o mais restritivo por reação.

## 7. Contra o próprio mapa

**1. Qual efeito é apenas extrapolação linear do presente?**
`e2` ("o custo de começar cai para perto de zero") e `e2.1`. São a narrativa padrão de barateamento
aplicada a mais uma tecnologia — serviriam a qualquer tema e por isso caem na exclusão declarada na
entrevista. Mantive `e2` porque tem mecanismo específico e não genérico: o que cai não é preço, é a
**precedência** — não se precisa mais ter o dado antes de ter o sistema. Mas rebaixei tudo abaixo dele e
cortei o neto original (ver seção 12).

**2. Qual efeito assume adoção rápida demais?**
`e5` e toda R3. Comparação histórica pertinente: o Google Glass foi anunciado em 2012 e não chegou a
consumo; entre a demonstração de uma capacidade vestível e o produto que fica no rosto passaram-se mais
de dez anos, e o que chegou em 2025 foi um óculos com display lateral acionado sob demanda e seis horas
de bateria em uso misto — precisamente o oposto de percepção contínua. A distância entre 47 FPS numa
placa de desenvolvimento e percepção aberta num aro de acetato não é de engenharia incremental. Por isso
`e5` ficou com confiança **baixa**, e não média.

**3. Qual disrupção-raiz pode simplesmente não acontecer?**
R3, na forma em que está escrita. Há um caminho inteiramente plausível em que o vocabulário aberto nunca
roda continuamente na borda porque **não precisa**: o sinal fraco 2 mostra que a linguagem pode ficar na
autoria e o artefato de produção voltar a ser fechado e barato. Nesse mundo, R3 não falha — ela se
dissolve, porque a pergunta "o dispositivo entende qualquer coisa?" é substituída por "o dispositivo
entende as 40 coisas que alguém nomeou ontem", o que é muito menos disruptivo e muito mais provável.

**4. O que quebra na roda se essa disrupção falhar?**
Caem `e5`, `e5.1`, `e5.1.1`. **Não cai** `e5.2`: vigilância por atributo não precisa de borda nem de
óculos — precisa de câmera fixa e GPU no fim do cabo, e São Paulo já tem 20 mil câmeras com biometria
instaladas. Esse é o efeito que sobrevive à morte da própria raiz, o que confirma o problema de
enraizamento já admitido na seção 5.

**5. Que contrassinais existem?**
Três, todos citados na seção 3 e nenhum vindo de crítico: (a) modelos leves ajustados ao domínio ainda
superam largamente o vocabulário aberto em canteiro de obras; (b) a própria Roboflow declara perda de
precisão, dependência de nomes comuns e custo crescente de inferência por classe adicionada; (c) o
CC-OCR V2 encontra padrões de falha fundamentalmente diferentes sob variação de captura entre modelos de
acurácia agregada parecida. Acrescento um quarto: SAM 3 está em ~74% do desempenho humano estimado no
benchmark dos próprios autores. Em nenhum desses casos a fonte é um cético — são os próprios
proponentes e a literatura de avaliação.

**6. Que barreiras foram subestimadas?**
Energia e calor em R3, já tratados. E uma barreira econômica pouco discutida: **o custo de inferência
cresce com o tamanho do vocabulário**. Um sistema de classes fixas paga um preço constante; um sistema
aberto paga por conceito consultado. Isso sozinho pode manter o modelo fechado no ponto quente de
produção por toda a janela até 2031, e converte `e1` num efeito de **camada de autoria**, não de
operação. Também subestimei a barreira institucional em `e3`: setor regulado não troca pipeline auditado
por pipeline probabilístico sem exigir o que só aparece em `e3.2.1` — a ancoragem visual do campo
extraído —, e essa exigência pode chegar antes da adoção, travando-a.

**7. Que ator teria incentivo para bloquear, capturar ou redirecionar a mudança?**
Captura, não bloqueio, é o cenário provável. Quem tem o modelo aberto, o playground, o app de edição, o
marketplace e o óculos é o mesmo ator — a Meta, nas quatro pontas. Abrir o modelo é consistente com
capturar a camada acima: o vocabulário aberto vira commodity e o valor migra para quem tem distribuição.
E a indústria de anotação não é bloqueadora, é beneficiária: já se reposicionou como parceira de ajuste
fino no próprio anúncio da capacidade que supostamente a mataria.

**8. Que viés do pesquisador e do modelo entrou na seleção?**
Dois, e o segundo é o grave. **Primeiro, viés de fonte:** quatro das catorze fontes lidas são da Meta ou
sobre produtos da Meta, e SAM 3 é o eixo do mapa. Um tema chamado "visão de vocabulário aberto" tem
naturalmente um dono narrativo, e eu segui esse dono. Triangulei com a literatura de avaliação (CC-OCR
V2, MEP em canteiro, borda no Jetson), mas a assimetria permanece e está declarada. **Segundo, viés do
próprio método:** a instrução era descobrir a disrupção, não presumi-la — mas a skill pede de 2 a 4
raízes, e eu entreguei 3. Uma resposta honesta ao critério da seção 2.3 aceitaria R1 sem hesitar,
aceitaria R2 com ressalva e trataria R3 como **sinal forte**, não como raiz. Mantive R3 como raiz porque
é ali que mora o payload de interação para o público deste mapa — e essa é uma razão de interesse, não
de evidência. Fica registrado como a decisão mais contestável do documento.

## 8. O que a máquina errou

Erros efetivamente detectados durante a execução, com o que foi feito em cada caso.

**1. Número de LVIS divergente entre busca e artigo.** Os resultados de busca traziam 47,0 de mask AP
zero-shot em LVIS para o SAM 3. Ao abrir o HTML do artigo, o valor é **48,8** (contra 38,5 do estado da
arte anterior). Usei o valor do artigo lido e descartei o da busca. Um mapa construído sem abrir a fonte
teria propagado o número errado.

**2. Divergência não reconciliada no OSWorld.** Uma fonte secundária afirmava que agentes de uso de
computador saíram de 12% em abril de 2024 para 85% em junho de 2026. A página primária do benchmark, que
abri em 12/09/2026, registra **12,24%** como melhor resultado e 72,36% para humanos, e menciona o
lançamento do OSWorld 2.0 em 26/06/2026. As duas afirmações podem estar se referindo a recortes
diferentes — ou a página está desatualizada. **Não consegui verificar, e portanto não usei o número de
85% em lugar nenhum.** O efeito `e4` ficou com confiança baixa por causa disso.

**3. Capacidade anunciada tratada como capacidade disponível.** O anúncio da Meta de novembro de 2025 diz
que o SAM 3 alimentará funções no Edits e no Vibes "em breve" e que o SAM 3D já habilita o "View in Room"
no Marketplace. Na primeira redação da ficha de R1 eu havia escrito que o SAM 3 "já opera em produtos de
massa da Meta". Corrigi: o texto agora diz "já foi anunciado dentro de produtos", que é o que a fonte
sustenta.

**4. Números do Smart Sampa incoerentes entre si nos resultados de busca.** Uma fonte falava em 3 mil
foragidos presos; outra, em 418 em 2026; uma terceira, em 50 mil câmeras das quais 20 mil com biometria.
Não abri nenhuma delas. Usei apenas a página da Câmara Municipal de São Paulo, que abri: 20 mil câmeras
com biometria facial, custo anual acima de R$ 100 milhões, e as críticas registradas em audiência
pública. Nenhum número de prisões entrou neste documento.

**5. Sinal fraco citado pela disciplina e não encontrado.** O enunciado do tema aponta o `ORTHOS` —
extensão que simularia resposta emocional a manchetes — como sinal fraco e fronteira entre ver e sentir.
Busquei e **não encontrei nenhuma fonte** sobre esse projeto. Não entrou no mapa. Registrado também na
seção 12.

**6. Fontes que não abriram e cujos dados foram descartados.** Números de adoção do Be My Eyes (cerca de
1 milhão de usuários cegos e 10 milhões de voluntários) e a formação da Data Labelers Association no
Quênia apareceram em busca, ambos relevantes para `e5.1` e `e1.1`. As páginas devolveram 403. **Os dois
efeitos permaneceram no mapa, mas rebaixados e sem citar número algum**, apoiados apenas no mecanismo.

**7. Tentação de tratar mercado em crescimento como prova de contrassinal.** Resultados de busca indicam
que o mercado de anotação **cresce**, não encolhe, e que anotadores humanos migram para controle de
qualidade e casos de fronteira. Isso reforça o `e1.1` na forma corrigida. Mas as fontes são relatórios de
mercado comerciais, que não abri e que têm interesse em projetar crescimento. **Não citei nenhum número
de mercado**; o argumento aparece só como mecanismo qualitativo.

O que **não** encontrei: nenhuma citação inventada, nenhuma autoria trocada e nenhuma fonte inexistente
neste documento. Todas as catorze fontes da seção 11 foram abertas e lidas nesta execução.

## 9. Três cenários para 2031

### Provável — o vocabulário aberto virou a camada de partida, não a de produção

Em 2031, ninguém mais começa um sistema de visão coletando imagem. Começa-se escrevendo o que se quer
ver, olhando o resultado e corrigindo. O que vai para produção, porém, quase nunca é o modelo aberto: é
um artefato fechado, destilado a partir do que a linguagem definiu — o caminho que o YOLOE-26 já
apontava em 2026. O vocabulário aberto ficou onde o custo por conceito não dói: na autoria, na
prototipagem, na cauda longa.

Em mídia, a mudança é visível e banal. Selecionar por nome é o padrão nas ferramentas de edição de vídeo,
e a rotoscopia manual virou perícia de exceção, cara e reservada ao que a frase não alcança. A anotação
não morreu: virou revisão. Quem anotava produz menos massa e arbitra mais fronteira, com salário melhor
e em menor número.

Documento: o OCR não desapareceu, virou uma verificação cruzada. Os sistemas leem por pergunta e checam
por reconhecimento de caractere, porque o erro plausível assustou o suficiente para que ninguém rodasse
sem rede. A ancoragem visual — mostrar a região da imagem de onde saiu o número — é comum em serviço
financeiro e ainda não é lei.

Óculos continuam acionados sob demanda. O ator que decide o ritmo é o mesmo de 2026, e continua abrindo
o modelo e fechando a distribuição.

### Desejável — nomear virou uma prática com método, e a ancoragem virou requisito

O mesmo mundo técnico do cenário provável, com duas coisas construídas de propósito.

A primeira: **vocabulários controlados de domínio** deixaram de ser improviso. Saúde, seguro, inspeção
industrial e imprensa publicaram listas versionadas de frases nominais, com definição, exemplo,
contraexemplo e histórico de mudança — tratadas como esquema, não como texto livre. O efeito prático é
que "pessoa suspeita" não é um prompt aceitável em sistema público, porque não existe no vocabulário
publicado, e o que não está no vocabulário precisa ser justificado por escrito. A disputa sobre o que a
máquina vê virou uma disputa sobre um documento que se pode ler.

A segunda: **ancoragem visual virou requisito de conformidade** antes de virar escândalo. Todo campo
extraído de documento aponta para o pedaço de imagem que o sustenta, e a conferência humana passou a ser
sobre a âncora, não sobre o valor. Isso tornou a auditoria barata o bastante para que setores regulados
adotassem a leitura sem OCR sem perder rastreabilidade.

**O que precisou ser construído para chegar aqui:** um esforço de padronização que ninguém tinha
incentivo individual para fazer — foi preciso que compradores institucionais exigissem o vocabulário e a
âncora em contrato, antes de qualquer regra. E, em acessibilidade, que a descrição disparada por condição
fosse desenhada com quem usa, não para quem usa: "me avise quando" só é útil se a pessoa define o
"quando".

### Indesejável — a vigilância mudou de alvo e escapou da regra

O que fracassa aqui não é a tecnologia. É a regra.

Em 2031, as normas escritas contra reconhecimento facial continuam em vigor e continuam sendo obedecidas
— e são irrelevantes. Nenhum sistema precisa saber **quem** é a pessoa. Basta perguntar por atributo:
"pessoa correndo perto do portão", "grupo parado há mais de dez minutos", "alguém com o rosto coberto".
Não é identificação biométrica, não é categorização por atributo protegido, e portanto não cai nas
proibições do Artigo 5. Descrever ficou mais barato que reconhecer, e ficou fora do texto.

O Brasil é onde isso pesa mais, e por uma razão estrutural já visível em 2026: havia 20 mil câmeras com
biometria facial em operação só em São Paulo, com imprecisão e viés racial documentados em audiência
pública, custo anual acima de R$ 100 milhões — e o marco legal ainda parado numa comissão especial com 37
projetos apensados, sem parecer do relator. Chegou-se a 2031 com a capacidade instalada e sem a regra;
quando a regra veio, mirou o rosto, e o sistema já tinha mudado de alvo.

O efeito de segunda volta é o que dói em mídia e interação: **a imagem passa a ser tratada como
consultável por padrão**. Um arquivo de vídeo deixa de ser um arquivo e vira um índice que responde a
perguntas que ninguém previu quando gravou. O que sobra de privado numa foto não é o que ela mostra — é
o que ninguém ainda pensou em perguntar a ela.

**Sinal precoce que teria antecipado isto, e que já estava visível em 2026:** o Artigo 5 do EU AI Act
proibindo raspagem de rostos, categorização por atributo protegido e identificação remota em tempo real —
e, em nenhuma das três alíneas, uma palavra sobre descrição por atributo comum. O buraco estava no texto
desde o começo, à vista de quem lesse.

## 10. O experimento

### "O Vocabulário" — um estúdio de câmera em que ninguém treina nada

**O que é.** Uma sessão de duas horas com uma câmera apontada para um espaço real e compartilhado da
turma — uma bancada, um corredor, uma mesa de laboratório. Nenhum dataset, nenhum treino. Cada
participante recebe a **mesma intenção escrita em português corrente**, formulada de modo deliberadamente
operacional e não técnico — por exemplo: *"avise quando houver algo fora do lugar nesta bancada"* — e
precisa traduzi-la, sozinho e sem conversar com os outros, num conjunto de prompts de conceito para um
modelo de segmentação de vocabulário aberto. Os prompts são aplicados aos **mesmos quadros congelados**
para todos.

**Pergunta de futuro que testa.** Quando o rótulo deixa de ser decisão de treino e vira frase escrita em
produção, o desacordo humano sobre o que as coisas são vira erro de sistema — ou o modelo converge apesar
da variação linguística? É o teste direto do efeito `e1.3` e da necessidade do `e1.3.1`.

**Tecnologia emergente usada.** Segmentação promptável por conceito (SAM 3 / SAM 3.1, ou equivalente de
vocabulário aberto), acessível sem programar pelo playground público.

**Por que uma solução madura não responde a isto.** Um detector de classes fixas torna a pergunta
impossível de fazer: a lista de classes já é o acordo, fechado no treino por uma pessoa, meses antes. O
desacordo fica invisível porque não há onde ele se expressar. Só num sistema em que o rótulo é escrito em
tempo de execução o desentendimento entre humanos vira um artefato mensurável.

**O que os participantes fazem.** (1) Recebem a intenção e escrevem seus prompts em isolamento, com
tempo fixo. (2) Os prompts são aplicados em lote aos mesmos quadros. (3) Cada participante vê primeiro
apenas o próprio resultado e anota se considera que o sistema acertou. (4) Os resultados são sobrepostos
e a turma vê, junta, onde divergiu. (5) Uma segunda rodada, agora com um vocabulário negociado
coletivamente por quinze minutos.

**Métrica e observação.**

- **Principal:** IoU par a par entre as máscaras produzidas por redatores diferentes para a mesma
  intenção, no mesmo quadro. Reporta-se a **mediana** e, mais importante, a **cauda inferior** — o
  percentil 10.
- **Secundária:** taxa de divergência silenciosa — proporção de pares em que os dois participantes
  julgaram o próprio resultado correto **e** o IoU entre eles ficou abaixo de 0,5. É a medida do modo de
  falha que interessa: dois acertos que discordam.
- **Terceira:** variação do IoU mediano entre a rodada individual e a rodada com vocabulário negociado.
  Mede se negociar o nome resolve, e quanto.
- **Qualitativa:** registro de quais palavras produziram a maior dispersão.

**Qual resultado faria o pesquisador mudar de ideia.** Se o IoU mediano entre redatores independentes
ficar **acima de 0,8** e a divergência silenciosa ficar **abaixo de 10%**, então nomear não é o gargalo:
o modelo absorve a variação linguística, `e1.3` cai de confiança média para baixa, `e1.3.1` (vocabulários
controlados) perde sua justificativa e deve sair do mapa, e a tese de que a responsabilidade migra para
quem escreve o prompt (`e1.1.1`) enfraquece junto — porque não haveria o que disputar. Simetricamente, se
a divergência silenciosa passar de 30% **e** a rodada negociada não reduzi-la, o problema é mais grave do
que o mapa supõe: nem o vocabulário controlado resolve, e o `e1.3.1` precisa ser substituído por algo
mais duro — validação por exemplar visual em vez de por texto.

**Custo e viabilidade.** Uma câmera, um playground público gratuito, uma planilha e duas horas de aula.
O caro é o desenho da intenção: ela precisa ser operacional e ambígua ao mesmo tempo, como são as
intenções reais. Uma intenção mal escolhida — ambígua demais ou específica demais — invalida a medição, e
esse é o risco principal do experimento.

## 11. Fontes

Catorze fontes, todas abertas e lidas em 12/09/2026.

1. **SAM 3: Segment Anything with Concepts** — `https://arxiv.org/html/2511.16719v2`
   Sustenta: a definição da tarefa PCS; 54,1 cgF1 em SA-Co/Gold contra 24,6 do OWLv2; 48,8 mask AP
   zero-shot em LVIS contra 38,5 anteriores; 72,8 cgF1 de desempenho humano estimado; 30 ms por imagem
   com 100+ objetos em H200; a seção de limitações (polissemia, descritor subjetivo, oclusão, borrão);
   datas de submissão (20/11/2025) e revisão (28/03/2026).
   *Confiabilidade: alta para a capacidade técnica, com a ressalva de que o benchmark e o baseline de
   comparação foram escolhidos pelos próprios autores.*

2. **DINOv3: self-supervised learning for vision at unprecedented scale (Meta AI)** —
   `https://ai.meta.com/blog/dinov3-self-supervised-vision-model/`
   Sustenta: ~1,7 bilhão de imagens e 7 bilhões de parâmetros; licença comercial; usos no World Resources
   Institute (erro de altura de copa de 4,1 m para 1,2 m) e no JPL; lançamento em 14/08/2025.
   *Confiabilidade: média — fonte corporativa interessada; os números de escala são verificáveis no
   artigo, os de impacto em produção não foram triangulados.*

3. **SAM 3.1: Faster and More Accessible Real-Time Video Detection and Tracking (Meta AI)** —
   `https://ai.meta.com/blog/segment-anything-model-3/`
   Sustenta: multiplexação de até 16 objetos num passe; 16 → 32 FPS em H100; lançamento em 27/03/2026;
   código aberto no GitHub e Hugging Face.
   *Confiabilidade: média — corporativa; o mecanismo é técnico e verificável, o ganho é auto-reportado.*

4. **New Segment Anything Models Make it Easier to Detect Objects and Create 3D Reconstructions
   (Meta Newsroom)** — `https://about.fb.com/news/2025/11/new-sam-models-detect-objects-create-3d-reconstructions/`
   Sustenta: intenção de uso em Edits, Meta AI/Vibes e "View in Room" do Marketplace; o Segment Anything
   Playground com modelos prontos de pixelização de rosto e placa; parceria com a Roboflow para ajuste
   fino; novembro de 2025.
   *Confiabilidade: baixa a média — é anúncio. Sustenta intenção e parceria, não adoção efetiva. Foi
   usada apenas para isso.*

5. **Open Vocabulary Segmentation with SAM 3 (Roboflow)** —
   `https://blog.roboflow.com/open-vocabulary-segmentation/`
   Sustenta: o que a capacidade dispensa (dataset rotulado, lista de classes, treino) e o que cobra em
   troca — perda de precisão, dependência de nomes comuns e fronteiras claras, custo de inferência
   crescente com o número de classes no prompt; e a recomendação de usar modelo treinado (RF-DETR) para
   classes fixas com alta precisão.
   *Confiabilidade: média, e com um detalhe a favor — a fonte tem incentivo comercial em vender o
   caminho fácil e mesmo assim declara os limites, o que reforça o contrassinal.*

6. **YOLO26 Open-Vocabulary Object Detection with YOLOE-26 (PyImageSearch)** —
   `https://pyimagesearch.com/2026/08/24/yolo26-open-vocabulary-object-detection-with-yoloe-26/`
   Sustenta: os três modos de prompt (texto, visual, sem prompt); LVIS minival com 40,6 AP por texto,
   38,5 por prompt visual, 31,1 sem prompt; o trade-off declarado entre vocabulário aberto e modelo
   fechado ajustado; e a re-parametrização de volta a um caminho YOLO padrão sem custo extra de
   inferência — base do sinal fraco 2.
   *Confiabilidade: média — terceiro técnico, com números reportados e não reproduzidos por mim.*

7. **Are Open-Vocabulary Models Ready for Detection of MEP Elements on Construction Sites** —
   `https://arxiv.org/abs/2501.09267`
   Sustenta: em domínio específico (componentes elétricos e hidráulicos em canteiro, capturados por
   câmera em robô terrestre), modelos leves ajustados ainda superam largamente os de vocabulário aberto.
   Aceito no 42º ISARC.
   *Confiabilidade: alta como contrassinal pontual; baixa generalidade — um domínio, um dataset.*

8. **CC-OCR V2: Benchmarking Large Multimodal Models for Literacy in Real-world Document Processing** —
   `https://arxiv.org/abs/2605.03903`
   Sustenta: 5 capacidades, 16 subtarefas, 74 cenários, 7.093 amostras, 10 categorias de documento, 32
   idiomas, 17 modelos; e o achado central — modelos com acurácia agregada parecida falham de formas
   fundamentalmente diferentes conforme iluminação, qualidade e método de captura.
   *Confiabilidade: alta para a existência da lacuna entre benchmark e confiabilidade prática. Não mede
   adoção nem custo.*

9. **Real-time open-vocabulary perception for mobile robots on edge devices: a systematic analysis of the
   accuracy-latency trade-off** — `https://pmc.ncbi.nlm.nih.gov/articles/PMC12583037/`
   Sustenta: NanoOWL + EfficientViT-SAM a 47,51 FPS com 84,64% de mIoU num Jetson AGX Orin 64GB;
   YOLO-World + EfficientViT-SAM-L0 a 26,68 FPS; falhas catastróficas do EfficientViT-SAM em FP16 para
   alguns modelos; publicação em 21/10/2025.
   *Confiabilidade: alta e revisada por pares — com a ressalva decisiva de que a plataforma é uma placa
   de desenvolvimento, não silício de dispositivo vestível. É exatamente por isso que R3 tem confiança
   baixa.*

10. **OSWorld — Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments** —
    `http://osworld-v1.xlang.ai/`
    Sustenta: 369 tarefas; melhor agente em 12,24%; humanos acima de 72,36%; falhas concentradas em GUI
    grounding e conhecimento operacional; OSWorld 2.0 lançado em 26/06/2026.
    *Confiabilidade: alta como fonte primária do benchmark, com a divergência não resolvida relatada na
    seção 8, item 2 — pode estar desatualizada em relação ao leaderboard corrente.*

11. **EU AI Act, Artigo 5 — Prohibited AI Practices** — `https://artificialintelligenceact.eu/article/5/`
    Sustenta: a proibição de criar ou ampliar bases de reconhecimento facial por raspagem não
    direcionada; a proibição de categorização biométrica que infira raça, opinião política, filiação
    sindical, crença, vida ou orientação sexual; e a proibição de identificação biométrica remota em
    tempo real em espaço público para fins policiais, com três exceções. E, por ausência, a lacuna que
    sustenta `e5.2`.
    *Confiabilidade: alta — reprodução do texto legal. É uma compilação de terceiro, não o Jornal
    Oficial; para uso jurídico, conferir contra a versão oficial.*

12. **Ficha de tramitação — PL 2338/2023 e apensados (Câmara dos Deputados)** —
    `https://www.camara.leg.br/proposicoesWeb/fichadetramitacao?idProposicao=2487262`
    Sustenta: o projeto está em Comissão Especial, aguardando parecer do relator, com 37 proposições
    apensadas; movimentação mais recente em 02/09/2026. Não há marco legal de IA em vigor no Brasil.
    *Confiabilidade: alta — fonte oficial do Legislativo.*

13. **Pesquisadores e movimentos criticam implantação de sistema de reconhecimento facial em São Paulo
    (Câmara Municipal de São Paulo)** —
    `https://www.saopaulo.sp.leg.br/blog/pesquisadores-e-movimentos-criticam-implantacao-de-sistema-de-reconhecimento-facial-em-sao-paulo/`
    Sustenta: 20 mil câmeras com biometria facial no Smart Sampa; custo anual acima de R$ 100 milhões;
    registro em audiência pública (19/10/2023) de imprecisão, viés racial com erro concentrado em
    mulheres negras e alegação de prisões ilegais.
    *Confiabilidade: alta quanto ao que foi dito em audiência pública oficial; as alegações são de
    participantes (Mozilla Foundation, Alqualtune Lab, vereadores), não medições independentes
    auditadas. Nenhum número de prisões deste caso entrou no documento.*

14. **Meta Ray-Ban Display: AI Glasses With an EMG Wristband (Meta Newsroom)** —
    `https://about.fb.com/news/2025/09/meta-ray-ban-display-ai-glasses-emg-wristband/`
    Sustenta: lançamento em 30/09/2025 nos EUA a partir de US$ 799; até seis horas de bateria em uso
    misto e 30 h com o estojo; Neural Band com até 18 h; legendagem ao vivo e tradução; display lateral
    acionado sob demanda, não contínuo.
    *Confiabilidade: média — corporativa e interessada. Foi usada só para preço, data, autonomia e o
    fato de o display ser sob demanda, que são verificáveis e vão contra o interesse do anunciante.*

**Triangulação declarada.** As afirmações sobre **capacidade** de vocabulário aberto têm fonte corporativa
(1, 2, 3, 4) e foram confrontadas com avaliação independente (7, 8, 9) e com documentação de terceiro
com incentivo contrário (5, 6). As afirmações sobre **adoção** não têm fonte adequada neste mapa — não
localizei medição independente de penetração de vocabulário aberto em produção, e por isso nenhum efeito
de adoção recebeu confiança alta.

## 12. Anexo — o levantamento bruto

### Candidatos gerados e descartados

**C1 — Características visuais auto-supervisionadas em escala (DINOv2/DINOv3).**
Maturidade: emergente tendendo a madura como infraestrutura. Potencial: médio. Descartado como raiz e
**rebaixado a tecnologia habilitadora**. Motivo: tem licença comercial, família destilada para deploy em
hardware modesto e usos relatados em produção (WRI, JPL). Segundo o critério 2.3, cumpre "por que agora"
mas falha em "o que rompe" de forma autônoma — barateia R1, não a substitui.

**C2 — Detecção de vocabulário aberto em tempo real (YOLO-World, YOLOE-26).**
Maturidade: emergente. Potencial: médio. **Rebaixado a antecedente de R3.** Motivo: a documentação
recomenda explicitamente o modelo fechado quando classes são fixas e latência aperta, e permite
re-parametrizar o vocabulário de volta a um caminho fechado. Comporta-se como otimização de um pipeline
existente, não como ruptura.

**C3 — SAM 3D e reconstrução a partir de imagem única ("View in Room").**
**Descartado por escopo**, por decisão explícita do recorte: reconstrução 3D é o tema vizinho 10.
Registro aqui porque é a capacidade com evidência de produção mais concreta de todo o levantamento — está
numa função de comércio ao consumidor — e uma leitura menos disciplinada do recorte a teria promovido.

**C4 — Agentes que operam interface por pixel (computer use, GUI grounding).**
Maturidade: experimental. Potencial: alto. **Não promovido a raiz; incorporado como efeito `e4`.**
Motivo duplo: o enunciado do tema situa a questão do formulário e da interface como consequência da
leitura de documento, e a evidência primária que consegui abrir (12,24% contra 72,36% humano) não
sustenta uma raiz — sustenta um efeito de confiança baixa. Se o número de 85% que a busca reportou for
verdadeiro, esta decisão está errada e C4 deveria ser a quarta raiz deste mapa. Fica registrado como a
maior fragilidade de estrutura do documento.

**C5 — Anotação automática substituindo a indústria de rotulagem.**
**Descartado como raiz e como efeito na forma original.** Motivo: é consequência, não causa — e a forma
forte da afirmação ("a indústria de anotação desaparece") é contrariada pela evidência disponível. Virou
`e1.1` na forma fraca e defensável: a anotação muda de posto, de produção para arbitragem.

**C6 — Visão computacional aplicada a resposta emocional (`ORTHOS`, citado pelo enunciado do tema).**
**Descartado por ausência de fonte.** Busquei por extensão de navegador que simulasse e visualizasse
resposta emocional a manchetes com base em modelo da Meta; nada foi encontrado. Aparecem trabalhos
adjacentes (análise afetiva de manchetes com Gemma-3, uma extensão chamada Emotio), mas nada que
corresponda ao descrito. Não entrou no mapa, nem como sinal fraco — registrar uma fonte não encontrada
como sinal seria fabricar evidência.

### Caminhos causais cortados

**Cortado: `e2` → "a indústria de anotação de dados encolhe e desaparece até 2030".**
Teste de causalidade falhou na direção do efeito. O mecanismo proposto era "se rotular deixa de ser
necessário, quem rotula perde o emprego". Mas a rotulagem não deixa de ser necessária — muda de função,
e o próprio anúncio do SAM 3 traz a plataforma de anotação como **parceira** de ajuste fino. Indicações
de mercado apontam crescimento, não encolhimento, com o papel humano migrando para controle de qualidade
e caso de fronteira. Substituído por `e1.1`, reancorado em R1 em vez de `e2`.

**Cortado: `e3` → "o PDF deixa de existir como formato até 2031".**
Sem mecanismo. Nada na compreensão sem OCR remove o motivo de existir de um formato de página fixa — se
a máquina passa a ler qualquer layout, a pressão sobre o formato **diminui**, não aumenta. A afirmação
era chamativa e vazia.

**Cortado: `e1` → "modelos de classes fixas desaparecem".**
Contradito diretamente por três fontes lidas (5, 6, 7). O corte está refletido no cenário provável, que
assume coexistência com divisão de trabalho: aberto na autoria, fechado na produção.

**Cortado: `e5.1` → "leitores de tela são substituídos por descrição visual contínua".**
Recusado por falta de evidência de uso e por presumir preferência de quem eu não ouvi. O efeito ficou na
forma mais modesta — a descrição deixa de ser sob demanda e passa a ser disparada por condição — e mesmo
assim com confiança média, não alta.

**Enfraquecido, não cortado: `e5` (fluxo consultável em vestível).**
Sobreviveu com confiança baixa. A razão de não ter sido cortado é honesta e discutível: sem ele R3 não
tem efeito de primeira ordem próprio, e R3 estaria mais bem classificada como sinal forte. Ver seção 7,
item 8.

### Classificações de maturidade registradas

| Capacidade | Maturidade | Potencial | Destino |
|---|---|---|---|
| Segmentação promptável por conceito | emergente | alto | **raiz R1** |
| Compreensão de documento sem OCR | emergente/experimental | alto | **raiz R2** |
| Percepção aberta contínua na borda | experimental | alto | **raiz R3** (contestada) |
| Características visuais sem rótulo (DINOv3) | emergente→madura | médio | habilitadora |
| Detecção aberta em tempo real (YOLO-World/YOLOE) | emergente | médio | antecedente |
| Agentes de interface por pixel | experimental | alto | efeito `e4` |
| Classificação de imagem | madura | — | excluída pela régua |
| Detecção com classes fixas | madura | — | excluída pela régua |
| OCR tradicional | madura | — | excluída pela régua; reaparece como verificação cruzada no cenário provável |
| Reconhecimento facial em espaço público | madura | — | excluída como capacidade; entra como **contexto regulatório e brasileiro** |

### Contrassinais registrados

1. Modelos leves ajustados superam largamente o vocabulário aberto em canteiro de obras (fonte 7).
2. A documentação de quem vende a facilidade declara perda de precisão, dependência de nomes comuns e
   custo de inferência crescente por classe (fonte 5).
3. Padrões de falha fundamentalmente diferentes entre modelos de acurácia agregada parecida em documento
   real (fonte 8).
4. SAM 3 em ~74% do desempenho humano estimado no benchmark dos próprios autores (fonte 1).
5. O display dos óculos em prateleira é lateral e **sob demanda**, não contínuo, com seis horas em uso
   misto (fonte 14).
6. Falhas catastróficas em FP16 na borda — a otimização que viabiliza é onde quebra (fonte 9).
7. Indícios de que o mercado de anotação cresce e que o papel humano migra para controle de qualidade
   (só em resultados de busca, não citado com número — ver seção 8, item 7).

### Buscas sem resultado ou sem acesso

- **`ORTHOS`**: nenhuma fonte localizada. Ver C6.
- **Estudo de caso de vocabulário aberto em produção em varejo ou armazém**: busca específica não
  retornou nenhum caso de implantação em produção em 2026 — só pesquisa e relatório de mercado. **Este é
  o buraco de evidência mais importante deste mapa**: há ampla evidência de capacidade e nenhuma de
  penetração. É a razão de nenhum efeito de adoção ter confiança alta.
- **Be My Eyes** (`bemyeyes.com/bme-ai/` e página da fundação): HTTP 403 nas duas tentativas. Números de
  usuários e voluntários apareceram em busca e **não foram usados**.
- **Data Labelers Association do Quênia** (Computer Weekly): HTTP 403. Não usado.
- **Página de produto do Meta Ray-Ban Display** (`meta.com`): conteúdo truncado, sem os dados. Resolvido
  pela sala de imprensa (fonte 14).
- **Página original do OSWorld** (`os-world.github.io`): redirect 301 para `osworld-v1.xlang.ai`, seguido
  manualmente. A divergência de números resultante está na seção 8, item 2.

### Hipóteses alternativas consideradas

**H-alt 1 — "o vocabulário aberto é uma camada de autoria, não de execução".** Sustentada pelo sinal
fraco 2 e pelo custo de inferência por conceito. Se verdadeira, R1 continua sendo raiz mas seus efeitos
se concentram em quem **constrói** sistemas de visão, e quase nada muda para quem os **opera**. É a
hipótese mais provável depois da adotada, e o cenário provável já a incorpora parcialmente.

**H-alt 2 — "a ruptura não é a percepção, é a indexação".** Nesta leitura, o que muda de fato não é a
máquina ver por conceito, mas todo acervo de imagem virar consultável retroativamente por perguntas não
previstas na captura. Não virou raiz porque não achei evidência de capacidade nova de indexação em
escala — mas é a leitura que organiza o cenário indesejável, e é a que mais interessa a quem projeta
mídia. Se o mapa fosse refeito com horizonte 2035 em vez de 2031, provavelmente esta seria a raiz
principal.

**H-alt 3 — "nada disso rompe: é a mesma automação de trabalho visual de sempre, mais barata".** É a
hipótese que a instrução de entrevista pediu para testar explicitamente. Foi rejeitada por um critério
só, e é bom que seja o único: a precedência entre dado e sistema se inverteu. Em todo o arranjo anterior,
era preciso ter o dado rotulado **antes** de ter o sistema; agora é possível ter o sistema antes de ter
qualquer dado. Isso não é melhoria de grau. Se um leitor derrubar esse argumento, derruba o mapa inteiro.

### Observações que não entraram no mapa

- **O motor de dados é a notícia escondida.** O SAM 3 foi treinado com 4 milhões de rótulos de conceito
  únicos produzidos por um motor de dados escalável. A capacidade de dispensar rotulagem foi construída
  com uma operação de rotulagem sem precedentes. Não virou efeito porque não consegui derivar
  consequência com mecanismo claro, mas é a ironia estrutural do tema.
- **"Negativos difíceis" como categoria de projeto.** O que distingue o SAM 3 é, em boa medida, saber
  dizer **não** — que aquilo que se pediu não está na imagem. Para interface, isso é mais importante que
  a segmentação: um sistema que sempre encontra o que se pede é inútil. Não achei onde pendurar na roda.
- **Latência assimétrica como material de design.** 30 ms por imagem com 100 objetos, contra 32 FPS em
  vídeo com multiplexação de 16 — parado é muito mais barato que em movimento. Isso vai moldar quais
  interações são desenhadas, e não está representado em nenhum efeito.
- **Uma pergunta do enunciado que este mapa não respondeu.** "O que sobra de privado numa foto?" Está
  encostada no cenário indesejável, mas não tem efeito próprio na roda, porque eu não soube escrever o
  mecanismo sem cair em generalidade. Fica como dívida declarada.
