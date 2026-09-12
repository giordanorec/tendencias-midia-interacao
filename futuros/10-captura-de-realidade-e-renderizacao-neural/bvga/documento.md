---
tema: Captura de realidade e renderização neural
slug: captura-de-realidade-e-renderizacao-neural
autor_login: bvga
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-12
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 11
efeitos_ordem_3: 11
tecnologias_citadas: [3D Gaussian Splatting, NeRF, KHR_gaussian_splatting, SPZ, glTF, Depth Anything V2, Hunyuan3D 2.1, TRELLIS, img2threejs, SuperSplat, Scaniverse, VPS 2.0, MeTRAbs, 4DGCPro, RadioGS, Matterport]
fontes: 18
confianca: media
experimento: Varredura Cega
skill_usada: futurizacao-bvga
publico_ok: false
---

## 1. Resumo

O pipeline de criação 3D — modelar, texturizar, animar — está sendo deslocado na sua origem: em vez de construir o objeto, captura-se o objeto. O que mudou entre 2023 e 2026 não foi a qualidade da imagem, que já era alta com NeRF; foi a **velocidade de render** (Gaussian Splatting em ≥100 fps a 1080p, Kerbl et al., SIGGRAPH 2023) e, agora, a **interoperabilidade**: em 3 de fevereiro de 2026 o Khronos Group publicou o release candidate da extensão `KHR_gaussian_splatting`, que coloca campos de radiância dentro do glTF 2.0, com ratificação prevista para o segundo trimestre de 2026.

Três disrupções-raiz sobreviveram ao filtro deste mapa: (1) o campo de radiância como **formato de ativo interoperável**, e não como demonstração de aplicativo; (2) a reconstrução 3D a partir de **uma imagem só** — ou de nenhuma —, que desacopla o ativo do acesso ao objeto físico e introduz geometria *inventada* onde não havia observação; (3) a **pessoa capturável sem marcador**, por câmera comum, validada contra mocap de referência e já em litígio.

Fora do mapa, por decisão explícita: fotogrametria e escaneamento a laser (maduros), digital twins imobiliários no volume da Matterport (14 milhões de espaços em 177 países até fevereiro de 2025) e a **renderização** de splats em produto de consumo — Apple Maps, Scaniverse. Consumir splat já está virando massa; **originar, editar e licenciar** splat não está.

O mapa tem 7 efeitos de 1ª ordem, 11 de 2ª e 11 de 3ª. A confiança agregada é **média**: a evidência técnica é forte e primária, a evidência de adoção é fraca e majoritariamente corporativa, e o elo mais frágil de toda a cadeia é a suposição de que o padrão será ratificado *e* adotado sem fragmentação em compressões proprietárias.

## 2. O tema

**A entrevista, registrada antes da análise.** A skill exige parada antes de qualquer roda. Os seis parâmetros foram fixados assim, e confirmados sem contradição:

| Campo | Valor |
|---|---|
| `tema` | Captura de realidade e renderização neural — transformar realidade em ativo 3D |
| `horizonte` | 2031 |
| `publico` | quem projeta mídia e interação |
| `recorte_geografico` | global, com uma nota sobre o Brasil |
| `descartes` | o que já é comum em produto de massa (régua da disciplina); nenhuma outra exclusão |
| `vies_desejado` | neutro; três ordens de profundidade; modo "a partir de uma inovação", não de um setor |

Declarações adicionais registradas na entrevista: nenhuma disrupção suspeita foi indicada de antemão ("descubra"); ideias genéricas que serviriam a qualquer tema devem ser excluídas; e o que faria o pesquisador mudar de ideia é **evidência de que a adoção já passou da maioria inicial** (Rogers) ou de que a tecnologia **apenas melhora o que existe** sem romper nada.

Não houve interlocutor disponível para perguntas de seguimento nesta rodada. Onde faltou informação, a suposição está declarada no ponto em que foi usada, e a seção 12 lista as que não puderam ser resolvidas.

**O recorte, em uma frase.** O objeto aqui não é ver melhor (tema 11), nem distribuir 3D pelo navegador (tema 15), nem treinar robô em simulação (tema 9). É a passagem do mundo físico a **ativo digital manipulável** por sensor comum — e o que essa passagem faz com autoria, propriedade e consentimento.

## 3. Onde isso está hoje

**A capacidade de render está resolvida.** O trabalho de Kerbl, Kopanas, Leimkühler e Drettakis (SIGGRAPH 2023) entrega campos de radiância a **≥100 fps em 1080p**, sem o trade-off velocidade × qualidade que caracterizava os métodos rápidos anteriores [1]. Isso é fato primário, não expectativa: é o que a página do projeto do INRIA sustenta.

**O que estava faltando era formato.** Até 2025, um splat era um arquivo de aplicativo. Em 11 de agosto de 2025 o OGC anunciou trabalho conjunto com Khronos, Niantic Spatial, Cesium/Bentley e Esri para levar splats geoespaciais ao glTF, motivado por um problema concreto: estruturas finas, semitransparências, reflexos e feições lineares longas — antenas, cercas, linhas de transmissão, trilhos — que malha e fotogrametria representam mal [3]. Em 3 de fevereiro de 2026 saiu o release candidate da `KHR_gaussian_splatting`, que estende a primitiva de malha do glTF 2.0, prevê *fallback* para nuvem de pontos em visualizadores incompatíveis e tem ratificação prevista para o **Q2 de 2026**, com Autodesk, Cesium, Esri, Huawei, Niantic Spatial, NVIDIA e XGRIDS entre os contribuintes [2]. **Compressão ficou de fora do baseline**: SPZ (Niantic Spatial) e L-GSC (Qualcomm) são extensões separadas, ainda propostas [2][3].

**A ferramenta de edição já é web e aberta.** O SuperSplat, da PlayCanvas, inspeciona, edita, otimiza e publica splats **dentro do navegador**, sob licença MIT, com 10 mil estrelas e 748 commits no repositório [17]. A barreira de entrada para mexer num splat hoje é uma aba do navegador.

**Reconstrução a partir de pouca ou nenhuma observação amadureceu em paralelo.** Depth Anything V2 entrega profundidade monocular robusta em modelos de 25 M a 1,3 B de parâmetros, mais de 10× mais rápidos que os equivalentes baseados em difusão [18]. O Hunyuan3D 2.1 (Tencent, junho de 2025) é aberto e gera malha de alta resolução **com material PBR** a partir de imagem [6] — a alegação de "production-ready" está no título dos próprios autores e é, portanto, alegação interessada. E o `img2threejs` reconstrói o objeto de uma imagem de referência como **código procedural TypeScript**, não como malha: 15,8 mil estrelas, Apache 2.0, e uma declaração honesta de limite — "uma única imagem não revela lados ocultos", de modo que o que não se vê é **espelhado**, não adivinhado [14].

**O corpo humano entrou na conta.** Um estudo de validação com 51 participantes e 669 ensaios comparou estimativa de pose monocular (MeTRAbs, celular a 30 Hz) contra sistema multicâmera THEIA3D a 180 Hz: RMSE médio de posição 3D de 5,95 cm, erros angulares de 8,45°–10,98° em flexão de joelho, e ICC > 0,93 para amplitude de movimento. Os autores concluem que é ferramenta viável e escalável para reabilitação, telessaúde e monitoramento longitudinal — **não substituto** do multicâmera [9]. É exatamente a forma de evidência que a seção `DUVIDAS.md` do autor manda exigir antes de declarar maturidade: uso medido, não catálogo de produto.

**O que ainda não funciona.** Splats são modelo de **aparência**, não de geometria: não há malha editável, não participam de iluminação global (Lumen), colidem mal com física, e arquivos passam de 1 GB [11]. Relighting continua problema aberto de pesquisa: o RadioGS (2026) consegue relighting "em minutos" com render abaixo de 10 ms, mas atacando um problema que o próprio campo descreve como mal-posto — separar geometria, material e iluminação sob luz arbitrária [12]. Streaming de cena dinâmica ainda está em compressão hierárquica de laboratório (4DGCPro, 2025), sem números públicos de bitrate no resumo [7]. E nenhuma engine tem suporte nativo: Unreal e Unity dependem de plugins de terceiros [11].

**Do lado da demanda, há dois sinais desencontrados.** A captura em volume industrial já existe e é madura: 14 milhões de espaços, 50 bilhões de pés quadrados, 177 países, com rede de milhares de capturadores profissionais — números auto-declarados pela CoStar ao fechar a compra da Matterport em 28 de fevereiro de 2025 [15]. E a indústria que mais produziria 3D está hostil ao automatismo: no *State of the Game Industry 2026* do GDC, com mais de 2.300 respondentes, **52% consideram que a IA generativa tem impacto negativo** (eram 30% em 2025 e 18% em 2024), com o pico de rejeição justamente entre artistas visuais e técnicos (64%); só 36% usam as ferramentas pessoalmente, e o uso se concentra em pesquisa (81%) e código (47%), não em asset final [12].

**Três Horizontes, como cheque temporal.** H1 é o sistema dominante hoje: malha autorada, fotogrametria para casos específicos, mocap de estúdio, splat como demo. H2, onde estamos, é a transição: padrão em ratificação, compressão fora do baseline, plugins em vez de suporte nativo, editor no navegador, regulação de biometria em consulta. H3 seria a lógica nova: o lugar e a pessoa como ativos capturados, licenciados e versionados — com autoria deslocada para a composição entre o capturado e o decidido. A distância entre H2 e H3 é ocupada, quase inteiramente, por **governança**, não por FLOPs.

**Nota sobre o Brasil.** Não encontrei nenhum projeto brasileiro documentado de captura neural em patrimônio, mídia ou universidade dentro das buscas feitas (registro na seção 12). O que existe, e é sólido, é anterior: a UFRGS testou digitalização 3D "faça-você-mesmo" no Museu Júlio de Castilhos com custo de implantação de R$ 2.000–3.500, concluindo que fotogrametria era a alternativa acessível por causa da curva de aprendizado menor — trabalho de **2019** [10]. No plano regulatório, a ANPD abriu Tomada de Subsídios sobre dados biométricos de **2 de junho a 1º de agosto de 2025**, com 84 contribuições, cobrindo reconhecimento facial, biometria comportamental e aplicações emergentes, com previsão de material orientativo ou regulatório [5]. A consulta não menciona captura 3D de espaços nem reconstrução volumétrica de pessoas. É uma lacuna, não uma permissão.

## 4. As disrupções-raiz

Quinze candidatos foram gerados; três passaram. As fichas dos descartados estão na seção 12.

---

### D1 — O campo de radiância vira formato de ativo interoperável

- `candidato`: splat gaussiano como ativo de primeira classe dentro do glTF, editável no navegador e transportável entre engines, visualizadores e pipelines geoespaciais.
- `maturidade`: **emergente**. O render é maduro; o *formato* está em release candidate, sem compressão no baseline, sem suporte nativo de engine [2][3][11].
- `potencial_de_ruptura`: **alto**. Altera a cadeia de valor (originar cenário deixa de ser modelar), quem pode produzir (barreira cai para celular + navegador), a arquitetura de produto (cena capturada trafega como qualquer glTF) e a distribuição de poder (quem controla compressão e catálogo controla o tráfego).
- `o_que_rompe`: rompe o pressuposto de que ambiente 3D utilizável nasce de trabalho autoral especializado, e rompe o isolamento de cada capturador no seu próprio aplicativo.
- `por_que_agora`: RC publicado em 03/02/2026 com ratificação prevista para Q2/2026 e sete empresas relevantes assinando [2]; editor aberto e web já em uso [17]; consórcio geoespacial (OGC) empurrando por um problema técnico real de representação [3].
- `o_que_falta`: ratificação efetiva; **uma** compressão vencedora em vez de duas concorrentes; relighting e física utilizáveis [11][12]; suporte nativo em engine.
- `evidencias`: [1][2][3][11][12][17].
- `veredito`: **aceita**.

### D2 — Reconstrução a partir de uma imagem só: o 3D deixa de exigir o objeto

- `candidato`: geração de ativo 3D texturizado, com material PBR ou como código procedural, a partir de uma referência visual única.
- `maturidade`: **emergente, com perna experimental**. Modelos abertos existem e rodam [6][18]; a saída como código versionável é protótipo com tração de comunidade, não produto [14].
- `potencial_de_ruptura`: **alto**. Muda quem produz, o custo marginal do ativo (tende a zero), o papel do modelador e — o ponto menos discutido — a **relação indexical**: parte da geometria entregue nunca foi observada.
- `o_que_rompe`: rompe o vínculo entre ter o objeto e ter o ativo; e rompe a presunção, herdada da fotogrametria, de que um modelo 3D é registro de algo que existiu daquele jeito.
- `por_que_agora`: profundidade monocular robusta e 10× mais rápida que difusão [18]; geração aberta com PBR em um único passo [6]; reconstrução-como-código com 15,8 mil estrelas e licença permissiva [14].
- `o_que_falta`: fidelidade verificável (o próprio `img2threejs` admite espelhar o lado invisível [14]); avaliação independente — os benchmarks disponíveis são majoritariamente dos proponentes; e regime jurídico para geometria inventada que se parece com produto real de terceiro.
- `evidencias`: [6][14][18].
- `veredito`: **aceita**.

### D3 — A pessoa capturável sem marcador e sem estúdio

- `candidato`: aparência e movimento humanos reconstruídos a partir de câmera comum, em qualidade utilizável, sem marcador e sem cooperação necessária do capturado.
- `maturidade`: **emergente**. Há validação publicada contra padrão-ouro com erro conhecido e limite declarado [9]; não há prática consolidada nem regra.
- `potencial_de_ruptura`: **alto**. Altera normas sociais e privacidade, a cadeia de produção de animação e performance, e a distribuição de poder entre quem aparece e quem captura.
- `o_que_rompe`: rompe a equivalência "foto não é biometria" que sustenta boa parte da legislação atual, e rompe o contrato implícito de que ser visto em público não é ser reconstruído.
- `por_que_agora`: validação clínica de pose monocular publicada com n=51 e 669 ensaios [9]; litígio real em curso — Kilcher v. Cameron, maio de 2026, alegando extração de traços faciais e uso não autorizado de dado biométrico em personagem digital [16]; e um regulador brasileiro que abriu consulta sobre biometria sem ainda cobrir reconstrução 3D [5].
- `o_que_falta`: decisão judicial que trate um ativo volumétrico de pessoa como dado biométrico (e não como fotografia); mecanismo técnico de consentimento embutido no arquivo; qualidade rotacional ainda pior que a posicional nos sistemas monoculares [9].
- `evidencias`: [5][9][16].
- `veredito`: **aceita**.

---

**Rebaixados explicitamente.** Fotogrametria e escaneamento a laser: **antecedentes maduros**. Matterport/CoStar: **maduro**, e evidência de que o mercado de captura já existe em escala industrial [15] — o que reforça D1 como formato, não como novidade. Renderização de splat em produto de consumo (Apple Maps, Scaniverse): **excluída pela régua da disciplina**, com uma ressalva registrada na seção 8 — a atribuição da técnica ao anúncio da Apple é inferência de terceiros, não declaração oficial [13].

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "D1 — O campo de radiância vira formato de ativo interoperável"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "Originar um ambiente 3D utilizável passa a custar horas de captura em campo em vez de semanas de modelagem em estúdio"
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "Forma-se um mercado de bibliotecas de lugares capturados, licenciados por cena e por direito de uso, ao lado dos bancos de assets modelados"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "Quem controla o catálogo de lugares capturados passa a arbitrar quais partes do mundo são baratas de representar em mídia"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "Produções separam a camada capturada (aparência fixa) da camada autoral (malha, luz, física), e a autoria se desloca para a composição entre as duas"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Crítica e ensino de mídia passam a tratar 'o que foi capturado e o que foi decidido' como categoria estética explícita"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "Com splats dentro do glTF, distribuir cena capturada deixa de exigir aplicativo proprietário e passa a usar visualizador comum, com degradação para nuvem de pontos"
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Plataformas de imóveis, varejo e turismo adotam a cena navegável como unidade padrão de anúncio, no lugar do par foto-mais-vídeo"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "A ausência de cena capturada vira sinal negativo: anúncio sem varredura passa a ser lido como omissão deliberada"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "Surgem exigências de proveniência do ativo capturado — quando, com que sensor, sob que autorização — declaradas dentro do próprio arquivo"
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "Cena sem proveniência declarada é recusada por plataformas e por peritos em disputa, e a captura passa a precisar provar a data em que ocorreu"
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "A mesma varredura passa a servir a dois consumidores distintos: a mídia que a exibe e o modelo espacial que máquinas usam para se localizar"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "Quem captura para uso próprio contribui, sem que isso lhe seja evidente, para um modelo agregado do mundo controlado por um terceiro"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Municípios e proprietários passam a reivindicar controle sobre a representação de seus espaços, e a disputa vira 'de quem é a cópia do mundo'"
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: "D2 — Reconstrução a partir de uma imagem só: o 3D deixa de exigir o objeto"
    efeitos:
      - id: e4
        ordem: 1
        efeito: "Produzir um ativo 3D utilizável deixa de depender de acesso ao objeto físico e passa a depender apenas de uma referência visual qualquer"
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "O trabalho de 3D se reorganiza em torno de escolher referência, julgar resultado e corrigir erro, e não de construir geometria"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Portfólio de modelador passa a registrar julgamento — o que foi recusado e por quê — em vez de horas de malha entregue"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "Cresce a fatia de ativos cuja geometria foi inventada onde não houve observação, inclusive em reconstruções de objetos e marcas reais"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "Disputas de design e trade dress migram do produto físico para a reconstrução plausível, litigando semelhança e não cópia"
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "Reconstrução entregue como código procedural, e não como malha, torna o ativo legível, versionável e comparável por diferença de texto"
        sinal: fraco
        prazo: 2029
        confianca: baixa
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "Equipes passam a versionar cena e objeto em repositório, com revisão por diff, como já fazem com software"
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Pipelines de mídia absorvem prática de engenharia — integração contínua e teste de regressão visual — e o artista técnico se aproxima do desenvolvedor"
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "D3 — A pessoa capturável sem marcador e sem estúdio"
    efeitos:
      - id: e6
        ordem: 1
        efeito: "Registrar movimento e aparência de uma pessoa em qualidade utilizável deixa de exigir estúdio, marcador ou equipe"
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "Aparência e movimento de uma pessoa viram ativo licenciável, contratado à parte do trabalho que os originou"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "Contratos de trabalho e de imagem passam a discriminar captura como categoria própria, separada de uso e de reprodução"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "Reguladores passam a tratar a reconstrução volumétrica de uma pessoa como dado biométrico sensível, e não como fotografia"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "Plataformas de distribuição de 3D passam a exigir prova de consentimento para cena com pessoa identificável e a recusar o restante"
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: "O custo de capturar terceiros sem que percebam cai a quase zero, porque a captura é indistinguível de alguém filmando com o celular"
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "Espaços com público — loja, escola, consultório, transporte — passam a sinalizar e restringir varredura 3D como hoje restringem filmagem"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "O direito de não ser reconstruído entra no debate público como pauta distinta do direito de imagem"
                sinal: fraco
                prazo: 2032
                confianca: baixa
```

**O que a estrutura não captura bem.** Três coisas.

Primeiro, a roda **separa o que na prática é um só movimento**. D1, D2 e D3 competem pelo mesmo lugar na cadeia: a origem do ativo. Quando a reconstrução por uma imagem fica boa o bastante, ela *concorre* com a captura — e o efeito e4 corrói e1, em vez de somar. A árvore não sabe representar substituição entre ramos.

Segundo, ela não representa **realimentação**. e3.1 alimenta e3: quanto mais gente captura, melhor fica o modelo agregado, o que torna a captura mais útil, o que traz mais gente. É um laço, e a roda só desenha flechas que descem.

Terceiro, os **prazos são o elemento mais frágil de todo o documento**. Ordem mede distância causal, não data — e a atribuição de anos aqui é uma aposta calibrada em H2/H3, não uma previsão. Onde a confiança está "baixa", leia-se: o mecanismo é plausível e o momento é chute.

## 6. Sinais fracos e wildcards

**Sinais fracos** — pequenos, localizados ou ambíguos, e por isso mesmo interessantes:

1. **Reconstrução como programa, não como dado.** O `img2threejs` devolve uma função TypeScript que monta o objeto a partir de primitivas, com hierarquia de pivôs e soquetes prontos para animação, e não um `.glb` [14]. Se isso pegar, o ativo 3D entra no regime de código — revisável, diferenciável, testável — e a discussão sobre autoria muda de "quem modelou" para "quem escreveu o gerador". É o sinal que liga este tema ao 14.
2. **Compressão ficou fora do padrão.** O baseline do `KHR_gaussian_splatting` não comprime; SPZ e L-GSC concorrem como extensões [2]. A briga real não é pelo formato, é por quem controla a redução de banda — e essa briga ainda está aberta.
3. **O *fallback* para nuvem de pontos.** Detalhe técnico com consequência estética: visualizador incompatível mostra a cena degradada em vez de falhar [2]. Isso permite publicar cena capturada como padrão sem esperar o parque de dispositivos.
4. **Fusão de varreduras de múltiplas pessoas num modelo só.** O Scaniverse permite que vários usuários contribuam com varreduras do mesmo lugar, em tempos e aparelhos diferentes, fundidas na nuvem [4]. É colaboração — e é também agregação de contribuição individual em ativo de terceiro, sem que a página anuncie mecanismo de consentimento.
5. **Um regulador que nomeia biometria comportamental, mas não volumetria.** A consulta da ANPD lista impressão digital, face, íris, voz, digitação e movimento ocular [5]. Reconstrução 3D de corpo não aparece. A lacuna é o sinal.

**Wildcard 1 (baixa probabilidade, alto impacto).** Uma decisão judicial de alcance amplo declara que **um splat de pessoa identificável é dado biométrico**, não fotografia — com estatuto de dano presumido, como no modelo do BIPA. O gatilho plausível já está em curso: Kilcher v. Cameron alega exatamente extração de traços faciais e uso não autorizado de dado biométrico em personagem digital [16]. Se isso acontecer antes de 2029, e5/e6.2/e7.1 aceleram violentamente, e1 e e2 desaceleram (toda varredura de espaço com público vira passivo jurídico), e o mapa inteiro se reorganiza em torno de **proveniência** em vez de qualidade. É o único evento capaz de inverter a hierarquia de sinais deste documento.

**Wildcard 2.** A ratificação da extensão glTF **falha ou é esvaziada** por duas compressões incompatíveis que dividem o parque de visualizadores. Nesse caso D1 não morre, mas volta a ser o que era: splat preso ao aplicativo. e2 inteiro cai, e1 sobrevive apenas dentro de pipelines fechados, e o poder se concentra em quem já tem a base capturada — a Matterport do mundo dos splats.

## 7. Contra o próprio mapa

Assumo aqui o papel de quem quer derrubar a análise acima.

**1. Qual efeito é apenas extrapolação linear?** `e2.1` — "a cena navegável vira unidade padrão de anúncio". É a história do tour 360º e do vídeo vertical contada de novo. O precedente é ruim para a tese: a Matterport digitalizou 14 milhões de espaços desde 2011 [15] e a foto continua sendo a unidade de anúncio em praticamente todo lugar. Mantive o efeito, mas com confiança **média** e prazo empurrado para 2030, e `e2.1.1` rebaixado a fraco/baixa.

**2. Qual efeito assume adoção rápida demais?** `e1`. A minuta original marcava 2027 e confiança alta. O caso histórico contraria: fotogrametria ficou quinze anos disponível sem deslocar a modelagem autoral, porque o gargalo nunca foi capturar — foi **limpar, otimizar, iluminar e integrar** o que se capturou. Os limites de hoje são os mesmos: sem geometria editável, sem participação em iluminação global, sem física, com arquivos acima de 1 GB [11], e com relighting ainda em regime de artigo [12]. **Correção aplicada:** `e1` foi de 2027/alta para 2028/média.

**3. Qual disrupção-raiz pode simplesmente não acontecer?** D2, na forma forte. Que modelos gerem malha bonita a partir de uma imagem está demonstrado [6]; que isso entre em produção não está. O dado mais duro do documento vai contra: 52% dos profissionais de jogos veem impacto negativo da IA generativa, a rejeição é máxima entre artistas visuais (64%), e o uso real se concentra em pesquisa e código — **não em asset final** [12]. Se a resistência profissional e as regras de procedência de conteúdo segurarem, D2 vira ferramenta de rascunho, e4.1 perde força e e4.2 vira nicho.

**4. O que quebra na roda se D2 falhar?** Todo o ramo e4/e5 e seus seis descendentes — 8 dos 29 efeitos. D1 e D3 sobrevivem intactos, porque dependem de sensor e de direito, não de geração.

**5. Que contrassinais existem?**
- Nenhuma engine tem suporte nativo; tudo passa por plugin de terceiro [11].
- Compressão fora do baseline do padrão [2], o que é sinal de que não houve acordo.
- O uso mais citado do próprio anúncio da Niantic é **máquina**, não mídia: modelos "que máquinas possam entender" para robôs e drones [4]. Se o consumidor final do splat for o robô, quase toda a metade estética desta roda perde relevância.
- A validação de mocap monocular é explícita em dizer que **não substitui** multicâmera [9].
- A fonte brasileira mais próxima é de 2019 e conclui a favor de fotogrametria pela curva de aprendizado [10]: no recorte de custo baixo, a técnica madura ganhou.

**6. Que barreiras foram subestimadas?** Três. (a) **Armazenamento e banda** — cena de mais de 1 GB [11] é incompatível com anúncio em rede móvel brasileira sem a compressão que ainda não foi ratificada. (b) **Iluminação** — cena capturada carrega a luz do momento da captura; separar isso é problema mal-posto [12], e sem isso não se compõe capturado com autoral. (c) **Trabalho** — a rejeição medida no GDC [12] é barreira cultural real, não ruído; mudanças de pipeline passam por quem opera o pipeline.

**7. Quem tem incentivo para bloquear, capturar ou redirecionar?** Bloquear: sindicatos e associações de artistas, e proprietários de espaços com público. **Capturar**: os detentores de base já formada — Matterport/CoStar no imobiliário [15], Niantic Spatial no espaço geolocalizado [4] — para quem o padrão aberto é ótimo desde que a compressão e o catálogo sejam deles. Redirecionar: fabricantes de dispositivo, que preferem splat como recurso do sistema (render bonito no mapa) a splat como ativo exportável.

**8. Qual viés entrou aqui?** Três, declarados. (a) **Viés de fonte técnica**: as evidências fortes são de graphics e vision; as de adoção são corporativas ou de blog de integradora, e uma delas [11] é de empresa parceira de engine, portanto interessada — usei-a só para limitações operacionais, e triangulei com literatura [12]. (b) **Viés do tema**: a descrição da disciplina já sugeria as perguntas sobre privacidade e sobre a profissão de modelador; parte de D3 nasceu dessa moldura, e não de varredura independente. (c) **Viés de disponibilidade linguística**: busquei em português e inglês; ausência de caso brasileiro pode ser ausência de indexação, não ausência de prática.

**Efeitos cortados nesta revisão**, com motivo, preservados na seção 12: "escolas de arte 3D reduzem currículo de modelagem", "seguradoras exigem varredura em sinistro", "museus substituem visita presencial por navegação" e "o fotorrealismo vira padrão estético por inércia". Os quatro falharam no teste de mecanismo ou eram genéricos a ponto de servir a qualquer tema.

## 8. O que a máquina errou

Erros efetivamente detectados durante o processo, não hipotéticos.

1. **Número sem origem, corrigido contra a fonte primária.** Um resultado de busca afirmou que a Tomada de Subsídios da ANPD correu de 2 de junho a 2 de julho de 2025 e recebeu "mais de 1.500 contribuições". A página oficial do Participa + Brasil registra 2 de junho a **1º de agosto de 2025** e **84 contribuições** [5]. Prevaleceu a fonte oficial. O número inflado, se aceito, teria sustentado uma tese falsa sobre mobilização social em torno de biometria no Brasil.
2. **Inferência de terceiros apresentada como anúncio.** Várias fontes secundárias afirmam que a Apple "levou Gaussian Splatting ao Apple Maps" no WWDC 2026. A fonte especializada é explícita: *"Apple did not say Gaussian Splatting by name"* — a atribuição é inferência a partir de contratações e de recursos anteriores [13]. Corrigido: tratado como sinal de mercado, nunca como evidência de capacidade técnica, e o número "mais de 300 cidades e marcos" é descrição do alcance atual do Flyover, não promessa de cobertura em splats.
3. **Produto anunciado tratado como validação.** A primeira busca sobre mocap sem marcador foi atrás de validação publicada da **Move.ai**, citada na descrição do tema. Nenhuma foi encontrada nas buscas feitas. Em vez de citar o produto como se houvesse evidência, o mapa se apoia num estudo revisado por pares sobre MeTRAbs, com n, protocolo e erro declarados [9]. Nome de produto não é evidência.
4. **Alegação de fornecedor no título de um artigo.** "Production-Ready PBR Material" está no **título** do paper do Hunyuan3D 2.1, escrito pelos próprios proponentes [6]. Sinalizado no texto; não usado como prova de prontidão para produção.
5. **Risco de excesso de classificação, no mesmo padrão que o `DUVIDAS.md` do autor descreve.** A minuta inicial classificava o splat como "maduro para ambientes estáticos", apoiada em disponibilidade comercial e em existência de editor aberto. Disponibilidade e padronização **não são** evidência de maturidade operacional. A classificação foi corrigida para emergente, com a razão explícita: falta relighting utilizável, física, edição de geometria e suporte nativo em engine [11][12].
6. **Busca sem resultado que quase virou afirmação.** Procurei projeto brasileiro de captura neural em patrimônio ou mídia e não achei. A tentação era usar a fonte de 2019 da UFRGS [10] como se falasse de splats — ela fala de fotogrametria e laser. Registrado como lacuna na seção 3 e na 12.

Nenhuma fonte citada nesta análise foi gerada sem abertura: as 18 da seção 11 foram efetivamente carregadas, e as afirmações atribuídas a elas vieram da leitura, não da memória.

## 9. Três cenários para 2031

### Provável — o splat virou formato, e o formato virou infraestrutura de outra coisa

A extensão foi ratificada em 2026 e, depois de dois anos de briga, uma compressão se impôs de fato. Cena capturada trafega em visualizador comum e aparece com naturalidade em anúncio de imóvel, catálogo de varejo e material institucional. Mas o grande consumidor não é a mídia: é máquina. Varredura de celular alimenta os modelos espaciais que sustentam localização de robôs, drones e entrega — que era o uso declarado desde o começo [4]. Modelagem autoral não acabou; virou a camada que se põe **por cima** do capturado, porque o capturado continua sendo aparência sem geometria editável e com a luz do dia em que foi feito. O modelador não sumiu: mudou de função, de construir para compor e corrigir. Regulação avançou pouco e por fora: na Europa, por lei de imagem; no Brasil, por orientação da ANPD sobre biometria que menciona reconstrução volumétrica de passagem. Captura de terceiros em espaço público é rotina não discutida.

*Mecanismo dominante:* padronização técnica puxada por interesse geoespacial e robótico. *Ator decisivo:* consórcio de padrões e detentores de base. *Condição:* nenhuma decisão judicial ampla sobre volumetria de pessoas.

### Desejável — a proveniência chegou junto com o formato

O mesmo avanço técnico, com uma diferença construída de propósito: **o ativo carrega a sua origem**. Entre 2027 e 2029, a exigência de declarar sensor, data e base de autorização dentro do arquivo — pauta que hoje é sinal fraco (`e2.2`) — saiu de recomendação para requisito de publicação nas plataformas grandes, na esteira do primeiro litígio relevante sobre aparência capturada. As consequências não foram só defensivas: com proveniência, licenciar um lugar ou uma performance passou a ser operação limpa, e apareceu renda onde antes havia apropriação. Quem aparece numa cena tem meio de pedir remoção que funciona. Escolas passaram a ensinar a distinguir o que foi capturado do que foi inventado, porque o arquivo permite essa pergunta.

*O que precisou ser construído:* um esquema de metadados aceito por Khronos e OGC; capacidade de auditoria nas plataformas; e, no Brasil, uma resolução da ANPD que nomeasse reconstrução 3D de pessoa como dado biométrico — coisa que a consulta de 2025 não chegou a cobrir [5].

### Indesejável — a cópia do mundo ficou com quem já tinha a base

A ratificação saiu, mas a compressão fragmentou. Na prática, cena capturada só circula bem dentro de duas ou três plataformas, que são as mesmas que já tinham base acumulada de espaços e de rede de capturadores [4][15]. Captura individual continua fácil — e continua alimentando modelo alheio, porque publicar fora dessas plataformas dá cena pesada e degradada. Pessoas aparecem em varreduras de lojas, escolas e transporte sem qualquer mecanismo de recusa, e a distinção entre observado e inventado se perdeu: parte das cenas tem geometria preenchida por modelo generativo, sem marcação, e ninguém sabe qual parte. Litígio existe, mas só alcança quem tem advogado — o caso emblemático envolve uma atriz, não um passante [16]. O efeito sobre a mídia é estético: cenário fotorrealista barato por toda parte e uma monotonia visual que ninguém decidiu.

*Sinal precoce que teria antecipado:* duas extensões de compressão concorrentes disputando o mesmo baseline em 2026 [2][3], somadas à ausência, no anúncio de plataforma de captura em massa, de qualquer mecanismo de consentimento [4].

## 10. O experimento

**Nome:** Varredura Cega.

**O que é.** Uma sessão de campo com duas metades, executável hoje, em uma aula, com celular e navegador.

*Metade A — o que entra sem que ninguém decida.* Três duplas percorrem um espaço público do campus por 4 minutos cada, capturando o **lugar** com um aplicativo de varredura comum. Nada é combinado com quem passa. O splat resultante é aberto no SuperSplat, no navegador [17], e anotado por uma quarta dupla que nunca esteve no local: quantas pessoas identificáveis entraram na cena; quantos objetos de terceiros (cartaz, tela de notebook, crachá, placa de carro) ficaram legíveis; quanto tempo leva para isolar e exportar uma pessoa como ativo separado.

*Metade B — capturado ou inventado.* Doze objetos do mesmo espaço são produzidos em duas versões: varredura real e reconstrução a partir de **uma única fotografia** por modelo aberto de imagem-para-3D [6] ou pelo `img2threejs` [14]. Os 24 ativos são apresentados embaralhados, em tela, a um público de 30 pessoas que não participou da captura. Cada pessoa responde, por ativo: capturado ou inventado, e com que confiança.

**Pergunta de futuro que testa.** Duas, uma por metade. (A) A captura neural se difunde como mídia ambiente ou trava na exigência de consentimento? A resposta depende de uma quantidade que ninguém mede: **quantos terceiros entram por minuto de varredura casual**. (B) A distinção entre o que foi observado e o que foi inventado sobrevive à percepção comum — ou já acabou?

**Tecnologia emergente usada.** Splat gaussiano editável no navegador [17]; reconstrução monocular por modelo aberto [6][14]; profundidade monocular como controle [18].

**Por que uma solução madura não responderia.** Fotogrametria clássica responderia à metade B pela metade e à metade A de jeito nenhum: ela exige dezenas de fotos deliberadas, tempo parado e enquadramento controlado — o que torna a captura **visível e negociável**. O objeto do experimento é justamente a captura que não se anuncia, e essa condição só existe quando a varredura é indistinguível de alguém mexendo no celular. E nenhuma técnica madura produz geometria inventada onde não houve observação, que é o que a metade B testa.

**O que os participantes fazem.** Capturam (4 min), anotam cena alheia (20 min), julgam 24 ativos (15 min), e discutem os próprios resultados antes de ver a agregação.

**Métrica / observação.**
- A1: terceiros identificáveis por minuto de varredura (contagem, com definição de "identificável" fixada antes).
- A2: tempo até isolar e exportar uma pessoa a partir da cena (minutos).
- B1: taxa de acerto na discriminação capturado × inventado, contra a linha de base de 50%.
- B2: calibração — a confiança declarada acompanha o acerto, ou as pessoas erram com convicção?

**Qual resultado me faria mudar de ideia.** Se B1 ficar **acima de 80%** com boa calibração, a tese de que o inventado se confunde com o capturado enfraquece muito, e `e4.2`, `e4.2.1` e boa parte do cenário indesejável precisam ser rebaixados — a percepção humana seria, ela mesma, uma barreira. Se A1 ficar **abaixo de 0,5 terceiro por minuto** em espaço movimentado, a urgência de D3 cai: a captura casual pega menos gente do que o mapa supõe, e `e7`/`e7.1` viram nicho. Os dois resultados são plausíveis e mensuráveis nesta escala, e qualquer um deles contraria algo que está escrito acima — que é a condição para o experimento valer.

## 11. Fontes

Somente fontes efetivamente abertas e lidas nesta rodada (12/09/2026).

1. **3D Gaussian Splatting for Real-Time Radiance Field Rendering** — Kerbl, Kopanas, Leimkühler, Drettakis (INRIA/MPI), SIGGRAPH 2023. `https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/` — sustenta o desempenho de ≥100 fps a 1080p sem trade-off com qualidade, base técnica de tudo que vem depois. *Primária, revisada por pares: confiabilidade alta.*
2. **Khronos Announces glTF Gaussian Splatting Extension** — The Khronos Group, 03/02/2026. `https://www.khronos.org/news/press/gltf-gaussian-splatting-press-release` — sustenta o status de release candidate da `KHR_gaussian_splatting`, a ratificação prevista para Q2/2026, o *fallback* para nuvem de pontos, a ausência de compressão no baseline e a lista de contribuintes. *Primária de consórcio, mas interessada em anunciar consenso: alta para status formal, média para relevância de mercado.*
3. **OGC, Khronos and Geospatial Leaders Add 3D Gaussian Splats to the glTF Asset Standard** — Open Geospatial Consortium, 11/08/2025. `https://www.ogc.org/blog-article/ogc-khronos-and-geospatial-leaders-add-3d-gaussian-splats-to-the-gltf-asset-standard/` — sustenta a motivação geoespacial (feições finas e lineares), a existência de duas extensões e o detalhe do SPZ 2.0.0. *Primária de consórcio: confiabilidade média-alta.*
4. **Mapping the World For Machines with Scaniverse** — Niantic Spatial, 07/04/2026. `https://www.nianticspatial.com/en/blog/scaniverse` — sustenta a fusão de varreduras de múltiplos usuários, o propósito declarado de servir a máquinas e a ausência de qualquer menção a consentimento. *Corporativa e interessada: confiabilidade média; números de escala são auto-declarados e não verificáveis.*
5. **Tomada de Subsídios sobre Dados Biométricos** — Autoridade Nacional de Proteção de Dados (ANPD), plataforma Participa + Brasil. `https://www.gov.br/participamaisbrasil/ts-dados-biometricos` — sustenta as datas da consulta (02/06/2025 a 01/08/2025), as 84 contribuições, o escopo (biometria fisiológica e comportamental, reconhecimento facial, aplicações emergentes) e a ausência de qualquer menção a reconstrução 3D de pessoas ou de espaços. *Página oficial de governo: confiabilidade alta.*
6. **Hunyuan3D 2.1: From Images to High-Fidelity 3D Assets with Production-Ready PBR Material** — Tencent, arXiv:2506.15442, jun/2025. `https://arxiv.org/abs/2506.15442` — sustenta a existência de geração aberta de malha com material PBR a partir de imagem. *Acadêmica mas de autoria corporativa interessada; "production-ready" é alegação dos autores: confiabilidade média.*
7. **4DGCPro: Efficient Hierarchical 4D Gaussian Compression for Progressive Volumetric Streaming** — arXiv:2509.17513, set/2025. `https://arxiv.org/abs/2509.17513` — sustenta que streaming volumétrico progressivo em dispositivo móvel ainda é problema de pesquisa, sem números públicos no resumo. *Acadêmica, pré-publicação: confiabilidade média.*
8. **Radiometrically Consistent Gaussian Surfels for Inverse Rendering (RadioGS)** — arXiv:2603.01491, 2026. `https://arxiv.org/abs/2603.01491` — sustenta que relighting de cena capturada permanece problema mal-posto e ativo, com avanço recente (minutos para relightar, <10 ms de render). *Acadêmica, pré-publicação: confiabilidade média.*
9. **Validating Single-Camera Pose Estimation Against Multi-Camera Motion Capture for Accessible Biomechanical Assessment** — PMC13229575. `https://pmc.ncbi.nlm.nih.gov/articles/PMC13229575/` — sustenta os números de erro do mocap monocular (n=51, 669 ensaios, RMSE 5,95 cm, 8,45°–10,98° em joelho, ICC>0,93) e a ressalva de que não substitui multicâmera. *Acadêmica revisada: confiabilidade alta, com escopo clínico.*
10. **Ferramentas de digitalização 3D faça-você-mesmo na preservação do patrimônio cultural** — UFRGS, Museu Júlio de Castilhos, SciELO, 2019. `https://www.scielo.br/j/inter/a/JFxBx6R5srj7PL3Kt3f5ndP/` — sustenta o custo (R$ 2.000–3.500) e a conclusão pró-fotogrametria no contexto brasileiro de museu. *Acadêmica revisada: alta para o que afirma; datada para o estado atual.*
11. **Unreal Engine and Gaussian Splatting: What Production Teams Need to Know in 2026** — Derek Cicero, 4D Pipeline. `https://blog.4dpipeline.com/unreal-engine-and-gaussian-splatting-what-production-teams-need-to-know-in-2026` — sustenta as limitações operacionais: sem suporte nativo, splats fora do Lumen, sem geometria editável, arquivos acima de 1 GB. *Integradora parceira de engine, interessada: confiabilidade baixa; usada só para limitações — onde o viés do autor joga contra o próprio interesse — e triangulada com [12].*
12. **GDC 2026 State of the Game Industry** — Game Developers Conference. `https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/` — sustenta 2.300+ respondentes, 52% de percepção negativa sobre IA generativa (contra 30% e 18% nos dois anos anteriores), 64% entre artistas visuais/técnicos, 36% de uso pessoal e concentração do uso em pesquisa e código. *Survey de indústria com amostra autosselecionada: confiabilidade média-alta para sentimento, média para uso.*
13. **Apple Maps Flyover Is Getting a Gaussian Splatting Upgrade** — Radiance Fields, 2026. `https://radiancefields.com/apple-maps-flyover-is-getting-a-gaussian-splatting-upgrade` — sustenta o anúncio do Flyover para o outono de 2026, o alcance de 300+ cidades e marcos, e **explicitamente** que a Apple não nomeou a técnica. *Imprensa especializada: confiabilidade média; usada como sinal de mercado e como contraexemplo de atribuição indevida.*
14. **img2threejs** — repositório oficial, Apache 2.0. `https://github.com/img2threejs/img2threejs` — sustenta a saída como código procedural (não malha), a estrutura de animação, a limitação declarada sobre lados ocultos e a tração (15,8 mil estrelas, v2.0.0). *Primária de projeto: alta para o que o software faz; estrelas medem popularidade, não qualidade.*
15. **CoStar Group Completes Acquisition of Matterport** — Matterport/CoStar, 28/02/2025. `https://matterport.com/news/costar-group-completes-acquisition-of-matterport-ushering-in-a-new-era-of-3d` — sustenta 14 milhões de espaços, 50 bilhões de pés quadrados, 177 países. *Corporativa, números auto-declarados em contexto de fusão: confiabilidade média.*
16. **Actress Sues Over AI-Generated Likeness in 'Avatar' Films (Kilcher v. Cameron)** — OECD AI Incidents Monitor, mai/2026. `https://oecd.ai/en/incidents/2026-05-06-eb88` — sustenta a existência do litígio e as alegações de extração não consentida de traços faciais e uso não autorizado de dado biométrico. *Registro secundário de incidentes: confiabilidade média; alegação em processo, não fato julgado.*
17. **SuperSplat** — PlayCanvas, MIT. `https://github.com/playcanvas/supersplat` — sustenta a edição, otimização e publicação de splats no navegador, sem instalação, e o estado do projeto (10 mil estrelas, 748 commits). *Primária de projeto: alta.*
18. **Depth Anything V2** — arXiv:2406.09414. `https://arxiv.org/abs/2406.09414` — sustenta profundidade monocular robusta, faixa de 25 M a 1,3 B de parâmetros, mais de 10× mais rápido que equivalentes de difusão, e a ressalva dos autores sobre a baixa diversidade dos conjuntos de teste. *Acadêmica: confiabilidade alta.*

*Sobre a numeração:* as 18 entradas acima correspondem, uma a uma, às 18 páginas efetivamente abertas nesta rodada. Nenhuma fonte citada no corpo do texto está fora desta lista, e nenhuma entrada desta lista deixou de ser lida.

## 12. Anexo — o levantamento bruto

**Candidatos gerados e descartados, com motivo.**

| Candidato | Maturidade | Ruptura | Veredito |
|---|---|---|---|
| Fotogrametria clássica | madura | média | Antecedente. Quinze anos disponível sem deslocar modelagem autoral. |
| Escaneamento a laser / LiDAR profissional | madura | baixa | Antecedente caro; melhora precisão, não muda quem produz. |
| Digital twin imobiliário (Matterport) | madura | média | Antecedente [15]; prova que existe mercado de captura, não que há ruptura. |
| Render de splat em app de consumo (Apple Maps, Scaniverse) | emergindo para massa | média | **Excluído pela régua da disciplina.** Consumir splat está virando comum; originar não. |
| NeRF | madura como pesquisa | média | Habilitadora. Provou a tese em 2020; foi superada em velocidade pelo splat. |
| Compressão SPZ / L-GSC | emergente | média | Tecnologia habilitadora, e ponto de controle de poder — virou sinal fraco 2. |
| VPS / Large Geospatial Model | emergente | alta | Dobrado em D1 (efeito e3), para não duplicar a mesma cadeia causal. |
| Vídeo volumétrico 4D em produção | experimental | média | Rebaixado: depende de rig de 36–60 câmeras; é estúdio caro, não sensor comum [7]. |
| Relighting de cena capturada | experimental | média | Condição necessária de D1, não disrupção própria [12]. |
| Avatar codec / persona fotorrealista | emergente | alta | Dobrado em D3; sem fonte primária aberta o bastante nesta rodada. |
| Mocap sem marcador multicâmera | madura para laboratório | baixa | Antecedente; o emergente é o **monocular** [9]. |
| Splat em robótica / navegação | emergente | alta | **Fora de escopo:** é o tema 9 da disciplina. Citado só como consumidor concorrente. |
| Geração de mundo inteiro por vídeo-modelo | experimental | alta | Fora do recorte: aqui o objeto é transformar realidade em ativo, não inventar realidade. |
| Marca d'água / proveniência em splat | experimental | média | Virou efeito e2.2 em vez de raiz: é resposta, não causa. |
| Reconstrução como código procedural | experimental | média-alta | Dobrado em D2 (efeito e5) e mantido como sinal fraco 1 [14]. |

**Caminhos causais cortados, com o motivo do corte.**
- *"Escolas de arte 3D reduzem currículo de modelagem"* — cortado: serviria a qualquer tema de automação, e o mecanismo pressupõe reação curricular rápida, que não é o histórico do setor.
- *"Seguradoras passam a exigir varredura 3D em sinistro"* — cortado como efeito; sobrevive parcialmente dentro de e2.2.1, onde o mecanismo (prova de data) é explicitável.
- *"Museus substituem visita presencial por navegação"* — cortado: substituição não decorre de disponibilidade; nada na evidência sustenta o mecanismo, e os contraexemplos de duas décadas de tour virtual são muitos.
- *"Tudo vira fotorrealista por padrão"* — pergunta que a disciplina propõe, mantida no cenário indesejável como consequência estética, mas **não** como efeito da roda: não consegui formular mecanismo que não fosse "porque fica fácil".
- *"Captura substitui totalmente a modelagem"* — cortado por contradizer a evidência de limitação: sem geometria editável, física ou luz separável, o capturado precisa do autorado [11][12].

**Buscas sem resultado útil.**
- Validação independente e publicada de sistemas comerciais de mocap monocular (Move.ai nomeadamente): nada encontrado. Substituído por [9].
- Projeto brasileiro de captura neural (splat/NeRF) em patrimônio, museu ou universidade, 2025–2026: nada encontrado. Único achado brasileiro relevante é de 2019 e trata de fotogrametria [10].
- Números de adoção de splats em produção de jogos ou cinema (quantidade de títulos, participação em pipeline): não há dado público; só afirmações de blog de fornecedor.
- Decisão judicial concluída que trate ativo volumétrico como dado biométrico: nenhuma. Só litígio em curso [16].
- Cobertura de reconstrução 3D corporal nos documentos da consulta brasileira sobre biometria: ausente [5].

**Contrassinais registrados e não incorporados ao mapa.**
- O uso declarado pela própria plataforma de captura em massa é **máquina**, não mídia [4]. Se isso dominar, metade estética deste mapa perde relevância — está no cenário provável, mas não como efeito.
- 19% é a fatia de geração de asset entre quem usa IA generativa em jogos, segundo leitura secundária do survey do GDC; **não incorporei** porque não confirmei esse recorte na fonte aberta [12], que reporta pesquisa (81%), tarefas diárias (47%), código (47%) e prototipagem (35%).
- Duas compressões concorrentes num padrão recém-nascido é sinal histórico de fragmentação, não de convergência [2][3].

**Hipóteses alternativas que o mapa não adotou.**
- *Hipótese do canudo:* a captura neural não muda a mídia; muda só a logística de vistoria (obra, seguro, imóvel), e o efeito cultural é nulo. Compatível com [15] e com boa parte de [11].
- *Hipótese da captura de renda:* nada estrutural muda; os detentores de base absorvem o padrão aberto e o splat vira feature de assinatura. É o cenário indesejável em forma de tese.
- *Hipótese do teto perceptual:* se as pessoas distinguirem capturado de inventado com facilidade, o problema epistêmico se dissolve e sobra só o problema jurídico. O experimento da seção 10 testa exatamente isso.

**Classificações de maturidade, resumidas.** Maduro: fotogrametria, laser, digital twin imobiliário, mocap multicâmera de estúdio, render de splat em app de consumo. Emergente: splat como formato interoperável, geração de 3D por imagem única, mocap monocular, modelo espacial agregado. Experimental: relighting físico de cena capturada, streaming volumétrico 4D em dispositivo móvel, reconstrução como código procedural.

**Observações que não entraram no mapa.** (a) O detalhe de engenharia mais revelador encontrado foi a correção do SPZ 2.0.0 para codificar quaternions em inteiros de 10 bits por causa de artefatos em splats alongados [3]: precisão rotacional é o gargalo tanto do splat de cena quanto do mocap monocular [9] — pode não ser coincidência, mas não tenho fonte que ligue as duas coisas, e por isso a observação fica aqui e não no corpo. (b) O `img2threejs` espelhar o lado invisível em vez de adivinhar [14] é uma decisão de projeto com consequência epistemológica: é honestidade embutida no artefato. Nenhuma das ferramentas de splat examinadas faz declaração equivalente sobre o que preencheu.
