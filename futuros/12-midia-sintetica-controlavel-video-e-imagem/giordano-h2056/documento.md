---
tema: "Mídia sintética controlável: vídeo e imagem"
slug: midia-sintetica-controlavel-video-e-imagem
autor_login: grec
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-22
horizonte: 2056
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 14
efeitos_ordem_2: 22
efeitos_ordem_3: 22
tecnologias_citadas: [Runway Aleph 2.0, Figma Weave, Luma Ray3.2, ComfyUI, EbSynth 2, Kling, Sora, VAR, Wan-Streamer, Causal Forcing++, Matrix-Game 3.0, Genie 3, Project Genie, Rive, Remotion, Higgsfield AI, Meta Advantage+ Creative, C2PA, Content Credentials, Apple Reference Image, Pixel 10, Pixel 11, Galaxy S26, Adobe Firefly, Midjourney, Cavalry, Magnific, Veo 3.1, Wan 2.7, CogVideoX, Stable Diffusion 3, LoRA, ControlNet]
fontes: 28
confianca: baixa
experimento: "Réplica com contrato: medir se o controle por quadro-chave muda o que as pessoas consentem que se faça com a própria imagem, e quanto tempo ele economiza frente ao prompt"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Gerar vídeo por prompt já é produto de massa (o Kling passou de 60 milhões de usuários no fim de 2025). Este mapa, com horizonte em 2056, parte de quatro rupturas que vêm depois disso. (1) **Direção fina sobre a geração**: quadro-chave, região, referência e grafo aplicados a um plano já filmado; o take deixa de ser definitivo e a refilmagem vira edição. (2) **Imagem em movimento como estado gerado em tempo real**: modelos causais e de *streaming* fazem o vídeo responder a quem assiste; ele deixa de ser arquivo, e o custo passa a crescer por espectador. (3) **Procedência assinada na captura**, somada à obrigação legal de marcar o gerado: o valor de prova sai da aparência e vai para a cadeia de custódia. (4) **A semelhança como direito licenciável**: rosto, corpo e performance se separam da presença física e viram licença, inclusive depois da morte. A convergência mais forte está no meio do mapa: quando qualquer plano pode ser reeditado sem rastro, o que dá valor a uma imagem é quem a assinou e quem autorizou o rosto nela. Quem perde: técnicos de set, estúdios de VFX vendidos por hora, testemunhas com aparelho que não assina, estreantes que disputam papel com réplicas. A raiz 2 está em laboratório e toda a sua cadeia tem confiança baixa; a confiança cai com a ordem em todo o mapa.

## 2. O tema

**O que é.** Imagem em movimento (e imagem fixa, como caso particular) gerada ou alterada por modelos, **quando quem dirige controla o resultado com precisão**. Nas palavras da disciplina, a mídia sintética "está deixando de ser loteria e virando instrumento". Controlar significa poder dizer *onde* o quadro muda (máscara, região), *quando* (quadro-chave), *como se move* (trajetória, câmera, esqueleto), *com que aparência e identidade* (referência, rosto) e *em que ordem de operações* (grafo de nós), e alterar um plano existente sem gerar outro do zero.

**Onde encosta em mídia e interação.** Em quatro pontos: na **produção** (set, pós, VFX, animação, publicidade); na **interface** (animação que responde a evento, como a máquina de estados do Rive, e vídeo gerado quadro a quadro em resposta à entrada); na **confiança** (a imagem como registro — jornalismo, prova, eleição); e na **pessoa retratada** (a quem pertence um rosto que pode ser dirigido sem que a pessoa esteja lá).

**Por que um mapa de futuro, e não estado da arte.** O estado da arte muda a cada trimestre (entre maio e junho de 2026 saíram Aleph 2.0 e Ray3.2). O que interessa a quem projeta mídia em 2056 é o que acontece com ofícios, contratos, provas e interfaces quando o controle deixa de ser o gargalo. Com trinta anos de horizonte, o mapa trabalha com classes de referência longas: cor na TV, edição não linear, projeção digital, HTTPS, Flash.

**Premissas do briefing (assumidas, não perguntadas).** Horizonte 2056; público: quem projeta mídia e interação; recorte global com nota sobre o Brasil; descartado de início o que já é comum em produto de massa; nenhuma raiz suspeita; viés neutro, com cenário de cada lado; falseador do autor: evidência de que a adoção já passou da maioria inicial (Rogers) ou de que a tecnologia só melhora o que existe. Profundidade: três ordens. Fronteiras: história gerada é o tema 8, som e voz são o tema 13, design procedural sem IA é o tema 14.

## 3. Onde isso está hoje

*Âncora feita com acesso à web em 22/09/2026: 16 buscas e 34 tentativas de abertura, 28 fontes abertas e usadas (lista na seção 11, buscas na seção 12).*

### 3.1 O que já existe e funciona

- **Edição em contexto sobre plano filmado.** O Runway Aleph 2.0 (lançado em 21/05/2026; API em 02/06) edita um vídeo de até 30 segundos a partir de um quadro-chave editado, um prompt e referências, e propaga a mudança "onde ela for relevante", preservando o resto. Em 18/06/2026 entrou como nó no Figma Weave, com a promessa de "mudar o ângulo de câmera, introduzir um personagem ou transformar o ambiente sem refilmar" [4].
- **Quadro-chave como controle profissional.** O Luma Ray3.2 (09/06/2026) aceita até 16 quadros-chave por clipe, gera até 20 s em 1080p com HDR e exportação EXR de 16 bits, preserva postura esquelética, gestos e expressão de até oito rostos, e abriu a API pela primeira vez [3].
- **Propagação sem IA gerativa.** O EbSynth 2 (10/2025) propaga a edição de um quadro para os demais por síntese de textura, cerca de 10× mais rápido que a versão anterior, no navegador; gratuito até 720p, US$ 20/mês para 4K [20].
- **Geração como grafo.** O ComfyUI chegou a US$ 500 milhões de avaliação (04/2026), diz ter mais de 4 milhões de usuários, e anúncios de emprego pedem "ComfyUI artist or engineer"; o CEO compara o prompt a "jogar num cassino" porque um pedido pequeno reescreve o que já estava certo [10].
- **Vídeo programático escrito por agente.** O Remotion publica *skills* para que agentes de código escrevam vídeo em React [25].
- **Animação que responde.** O Rive monta máquinas de estados com estados, transições, *listeners* e *data binding*; a animação reage a clique, ponteiro e dados vivos, e o mesmo arquivo roda em vários *runtimes* [19].
- **Criativo publicitário gerado pela plataforma.** O Meta Advantage+ Creative gera fundo, expande imagem, anima imagem e gera variações de anúncio em imagem, vídeo e carrossel dentro do Ads Manager [24].
- **Assinatura na captura.** Pixel 10 e 11 assinam toda foto com C2PA por padrão; Galaxy S25/S26 só marcam imagem editada por IA; o iPhone 18 Pro lançou o "Apple Reference Image", opcional e ilegível para validadores C2PA [12]. Mais de 200 membros da Content Authenticity Initiative assinam conteúdo (BBC, NYT, Reuters, AFP, NHK) [13].
- **Obrigação de marcar.** O Art. 50 do AI Act vale desde 02/08/2026; sistemas já no mercado têm até 02/12/2026 para marcar a saída em formato legível por máquina; obras "evidentemente artísticas" têm obrigação reduzida [14]. No Brasil, o TSE definiu em 01/09/2026, por 5 a 2, que *deepfake* exige realismo suficiente e contexto de propaganda [15].
- **Réplica digital em contrato.** O acordo de mídia interativa do SAG-AFTRA exige consentimento "claro e conspícuo" por projeto, descrição da réplica (inclusive geração em tempo real) e pagamento separado [17].

### 3.2 O que existe e ainda não funciona

- **Tempo real ainda curto.** O Project Genie (Genie 3, 720p, 24 fps) abriu em 30/01/2026 só nos EUA, para assinantes Ultra, com sessões de 60 segundos, controle de personagem impreciso e resposta atrasada [8]. O Matrix-Game 3.0 chega a 40 fps em 720p com memória de "minuto" [7]; o Causal Forcing++ gera quadro a quadro em 1–2 passos [6]; o Wan-Streamer promete interação audiovisual *full-duplex* com ~200 ms de latência do modelo [5]. Tudo preprint ou prévia.
- **Controle ainda com lacunas abertas.** A revisão de Ma et al. lista como não resolvidos: plausibilidade física, oclusões, múltiplos sujeitos sem troca de atributos, consistência 3D durante movimento de câmera e consistência longa [1].
- **Procedência que não chega ao espectador.** Plataformas e mensageiros despem os manifestos; o "problema do *screenshot*" quebra a cadeia [13][12].
- **Autoregressivo contra difusão.** O VAR (NeurIPS 2024) superou transformadores de difusão em ImageNet 256 (FID 1,73), com lei de escala e edição sem ajuste [2]; em vídeo de produção, a difusão ainda domina.
- **Produto sem retenção.** A OpenAI encerrou o app do Sora em 26/04/2026 e encerra a API em 24/09/2026; downloads caíram 32% em dezembro de 2025 e 45% em janeiro de 2026; o acordo de US$ 1 bilhão com a Disney não foi fechado [11].

### 3.3 Quem constrói

Runway, Luma, Kuaishou (Kling), Google DeepMind (Veo, Genie), Alibaba (Wan), Comfy (grafo aberto), Rive (animação por estado), Adobe (Firefly e C2PA), e a comunidade de pesquisa chinesa em modelos causais de *streaming* [5][6][7]. No Brasil, a Globo mantém um AI Content Lab nos Estúdios Globo; fez uma ficção de 30 minutos com mais de 35 ferramentas e decidiu não exibi-la, por não querer "humanos sintéticos num horizonte visível" [27].

### 3.4 Números de adoção

- Kling: receita de US$ 150 milhões em 2025, mais de 60 milhões de usuários e 600 milhões de vídeos até o fim de 2025; *run rate* acima de US$ 300 milhões em janeiro de 2026 [9].
- ComfyUI: mais de 4 milhões de usuários declarados [10].
- Energia: um clipe de 5 s no CogVideoX consumiu cerca de 3,4 MJ, mais de 700 vezes uma imagem de alta qualidade [22]; dobrar a duração pode quadruplicar a energia [23].
- Longa gerado: *Hell Grind*, feito com ferramentas da Higgsfield AI por equipe de 15 pessoas em duas semanas, US$ 500 mil (80% em computação), exibido em evento de mercado em Cannes em 16/05/2026, fora da seleção oficial [26].
- Trabalho: estudo de 2024 encomendado pelo Animation Guild e parceiros estimou 118.500 empregos de cinema, TV e animação "significativamente afetados" em três anos, com compositores (25%) e modeladores 3D (33%) mais expostos — com base em opinião de 300 executivos [21].
- Réplica: sem número encontrado de contratos de réplica visual firmados.
- Controle fino (quadro-chave, região, grafo): sem número de usuários separado do de geração por prompt.

## 4. As disrupções-raiz

### Candidatos recusados como raiz

- **Vídeo e imagem por prompt simples.** Recusado: adoção em maioria desde 2025 entre quem produz para rede social e publicidade (Kling 60 milhões de usuários [9]; variações geradas dentro do Ads Manager [24]). Tratado como contexto.
- **Upscaling e restauração (Magnific e similares).** Recusado: faz o mesmo, melhor; melhoria sustentadora.
- **Arquitetura autoregressiva visual (VAR) como raiz própria.** Recusado como raiz: por si só não rompe prática; entra como pré-condição técnica da raiz 2 (geração causal quadro a quadro).
- **Motion design procedural (Cavalry, Remotion) sem IA.** Fora do recorte: tema 14.
- **Animação por máquina de estados (Rive).** Recusado como raiz: produto de nicho maduro em interface; entra como sinal fraco e antecedente da raiz 2.
- **Longa-metragem feito por uma pessoa.** Não é raiz; é wildcard (seção 6).

### R1 — Direção fina sobre a geração: quadro-chave, região, referência e grafo sobre o plano filmado

1. **O que rompe.** A ideia de que o plano filmado é definitivo; a refilmagem como correção; a rotoscopia, composição e limpeza vendidas por hora; o arquivo de projeto de edição como formato de troca.
2. **Por que agora.** A geração ficou boa o bastante para que o problema passasse a ser dirigir; em 2026 surgiram, com semanas de diferença, edição em contexto de até 30 s com quadro-chave [4] e 16 quadros-chave com preservação de performance e EXR [3]. Há cinco anos não havia modelo que preservasse o que não se pediu para mudar.
3. **Onde está.** Produto de nicho → adoção precoce entre profissionais de pós e publicidade.
4. **O que falta.** Consistência longa (acima de 30 s) e multi-plano; controle físico confiável [1]; integração com pipeline de cor e composição; resolução da disputa sobre dados de treino [28]; contratos que digam quem autoriza alterar um take.

### R2 — Imagem em movimento como estado gerado em tempo real

1. **O que rompe.** O vídeo como arquivo igual para todos; a economia de distribuição em que o custo marginal por espectador tende a zero; a separação entre vídeo (toca) e interface (responde).
2. **Por que agora.** Destilação para 1–2 passos e atenção causal [6], memória de minuto a 40 fps [7], interação *full-duplex* a ~200 ms [5]; o VAR mostrou que previsão sequencial pode vencer difusão em imagem [2].
3. **Onde está.** Laboratório / demo pública (Project Genie com sessões de 60 s [8]). **Toda a cadeia sai com `confianca: baixa`.**
4. **O que falta.** Consistência além de minutos; custo de computação por sessão compatível com massa (hoje o vídeo gerado é caro e o custo cresce mais que linearmente com a duração [22][23]); ferramentas de autoria para escrever regras em vez de sequências.

### R3 — Procedência assinada na captura, com obrigação legal de marcar o gerado

1. **O que rompe.** A prova pela aparência ("vi, logo aconteceu"); a perícia baseada em artefato de pixel; o furo jornalístico por vídeo viral sem custódia.
2. **Por que agora.** Primeiro celular de massa com assinatura por padrão e chave em hardware (Pixel 10, 2025) [12]; AI Act Art. 50 em vigor desde 02/08/2026 [14]; regras eleitorais brasileiras com critério definido [15].
3. **Onde está.** Produto de nicho (câmeras de redação, dois modelos de celular por padrão, 200 organizações que assinam [13]).
4. **O que falta.** Preservação do manifesto em plataformas e mensageiros; adesão da Apple ao padrão comum (hoje ela lançou um formato próprio [12]); assinatura em aparelhos de entrada; jurisprudência que dê peso à custódia.

### R4 — A semelhança como direito licenciável, separada da presença

1. **O que rompe.** O vínculo entre atuar e estar presente; o cachê como pagamento por dias de trabalho; a imagem de uma pessoa comum como algo que ela não "possui" juridicamente; a morte como fim da carreira comercial de um rosto.
2. **Por que agora.** O controle de identidade (ID control [1]) e de performance [3] tornou a réplica dirigível; em 2025–2026 apareceram o *rider* de réplica do SAG-AFTRA e o acordo de mídia interativa [17], a emenda dinamarquesa de 50 anos após a morte [18], e o NO FAKES Act de 2026 (reintroduzido em 20/05/2026, direito licenciável, com contranotificação) [16].
3. **Onde está.** Produto de nicho: há contrato-padrão e lei proposta, sem número conhecido de réplicas visuais licenciadas.
4. **O que falta.** Lei federal aprovada nos EUA; vigência da lei dinamarquesa (atrasada por eleição [18]); mecanismo de detecção por semelhança em plataformas; preço de mercado para uso de réplica.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "Direção fina sobre a geração: quadro-chave, região, referência e grafo aplicados ao plano filmado"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "A pós-produção absorve decisões que eram de set, e a refilmagem passa a ser feita como edição do plano existente"
        sinal: forte
        prazo: 2032
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "Contratos de ator e diretor passam a precificar o direito de alterar um take depois da filmagem, com veto e pagamento por versão"
            sinal: medio
            prazo: 2036
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "O corte final deixa de ser objeto único e a obra circula em variantes autorizadas por território e plataforma, cada uma com assinatura própria"
                sinal: fraco
                prazo: 2045
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "As diárias de set encolhem e a filmagem passa a capturar material-fonte de performance e luz em vez de planos finais"
            sinal: medio
            prazo: 2038
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Polos regionais de produção deixam de disputar filmagem por incentivo fiscal e passam a disputar capacidade de computação e acervo de performance"
                sinal: fraco
                prazo: 2046
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "Rotoscopia, composição e limpeza de plano deixam de ser vendidas por hora e quadro e passam a ser vendidas por resultado entregue"
        sinal: forte
        prazo: 2032
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Estúdios de VFX terceirizados cuja vantagem era o custo por hora perdem essa vantagem, e a disputa passa a ser por quem mantém o grafo e o modelo ajustado do cliente"
            sinal: medio
            prazo: 2038
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Estúdios de VFX passam a manter modelos de franquia ajustados por personagem e mundo, licenciados por décadas como parte do catálogo"
                sinal: fraco
                prazo: 2048
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "O Animation Guild e sindicatos de pós negociam piso por plano entregue e pagamento pelo uso de quadros-chave pintados como referência de propagação"
            sinal: medio
            prazo: 2036
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "Artistas cujos quadros pintados guiam a propagação recebem royalty por plano propagado, rastreado pelo registro do grafo"
                sinal: fraco
                prazo: 2050
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "O grafo de geração vira o formato de troca entre departamentos, no lugar do arquivo de projeto de edição"
        sinal: forte
        prazo: 2034
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "A admissão em escolas de animação e motion design por portfólio passa a pedir o grafo reproduzível que gera o reel, e não só o reel"
            sinal: medio
            prazo: 2036
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "A animação feita à mão passa a ser certificada como processo e sustenta um nicho de preço mais alto, como o rótulo de feito à mão em outros ofícios"
                sinal: fraco
                prazo: 2045
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "Fornecedores de modelo fechado restringem os controles intermediários expostos por API, e a portabilidade do grafo entre modelos vira disputa comercial"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "Produções longas passam a exigir por contrato modelos com pesos locais, para não perder o modelo no meio do projeto"
                sinal: medio
                prazo: 2035
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: "Produtoras de filme publicitário de orçamento médio perdem mercado para variações geradas dentro da plataforma de mídia com o produto preservado exatamente"
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "O anúncio deixa de ser uma peça e vira um conjunto de variações por impressão, e a autoria criativa mensurável passa das agências para a plataforma"
            sinal: medio
            prazo: 2036
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "CONAR e ASA passam a julgar o sistema de variações e não a peça, exigindo registro das versões efetivamente exibidas"
                sinal: fraco
                prazo: 2045
                confianca: baixa
  - disrupcao: "Imagem em movimento como estado gerado em tempo real por modelos causais e de streaming"
    efeitos:
      - id: e5
        ordem: 1
        efeito: "Parte do entretenimento em vídeo deixa de ser arquivo e passa a ser sessão gerada para cada espectador"
        sinal: medio
        prazo: 2040
        confianca: baixa
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "O custo de distribuição passa a crescer com cada espectador, e plataformas passam a cobrar por minuto gerado"
            sinal: medio
            prazo: 2042
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "O vídeo gerado ao vivo fica restrito a camadas pagas e a regiões de energia barata, e o arquivo pré-renderizado continua sendo o padrão de massa"
                sinal: fraco
                prazo: 2050
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "Roteiristas e diretores passam a escrever regras de mundo e estados em vez de sequências, e a bíblia da série vira especificação executável"
            sinal: medio
            prazo: 2042
            confianca: baixa
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "Festivais passam a exibir sessões de referência gravadas de obras que nenhum espectador vê igual"
                sinal: fraco
                prazo: 2050
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: "A animação de interface deixa de ser arquivo tocado e passa a ser gerada a partir do estado do aplicativo"
        sinal: medio
        prazo: 2040
        confianca: baixa
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "O motion designer de produto passa a definir restrições de marca e movimento que o gerador não pode violar, em vez de desenhar cada animação"
            sinal: fraco
            prazo: 2044
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "Diretrizes de acessibilidade como as WCAG ganham critérios para movimento gerado, porque ele não pode ser auditado antes de existir"
                sinal: fraco
                prazo: 2050
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: "Avatares em vídeo que conversam em tempo real substituem o vídeo gravado em atendimento, ensino e boletim de serviço"
        sinal: medio
        prazo: 2038
        confianca: baixa
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "A videochamada perde valor como prova de identidade, e bancos e seleções remotas passam a exigir verificação por dispositivo assinado"
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "Cartórios, bancos e processos seletivos reintroduzem uma etapa presencial como garantia, invertendo parte da digitalização"
                sinal: fraco
                prazo: 2045
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: "Donos de motores de jogo e de catálogo empurram um arranjo híbrido em que o motor guarda o estado e a rede só pinta o quadro"
        sinal: medio
        prazo: 2036
        confianca: baixa
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "A renderização neural condicionada por geometria mínima vira padrão, e o controle fino da raiz 1 é o que liga as duas camadas"
            sinal: fraco
            prazo: 2042
            confianca: baixa
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: "A arte técnica de jogos passa a projetar a geometria-guia e os condicionantes, e o modelador de detalhe perde espaço"
                sinal: fraco
                prazo: 2048
                confianca: baixa
  - disrupcao: "Procedência assinada na captura, com obrigação legal de marcar o conteúdo gerado"
    efeitos:
      - id: e9
        ordem: 1
        efeito: "O valor de prova de uma imagem migra da aparência para a cadeia de custódia assinada desde o sensor"
        sinal: forte
        prazo: 2034
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: "Tribunais passam a tratar imagem sem manifesto como indício fraco, e a perícia se desloca da análise de pixel para a auditoria de chaves e dispositivos"
            sinal: medio
            prazo: 2040
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: "O registro de abuso feito com celular de entrada, que não assina, passa a valer menos em juízo do que o feito com aparelho caro"
                sinal: fraco
                prazo: 2045
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: "Fabricantes fragmentam o padrão com formatos próprios, e a procedência vira ecossistema fechado por marca"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e9.2.1
                ordem: 3
                efeito: "Quem controla a raiz de confiança no chip e no sistema operacional vira árbitro da autenticidade visual, e governos passam a exigir chaves nacionais"
                sinal: fraco
                prazo: 2046
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: "Agências e redações passam a vender verificação assinada como produto, não só a notícia"
        sinal: medio
        prazo: 2034
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: "Vídeo de cidadão só entra no noticiário depois de ingestão com custódia pela redação, e o furo por vídeo viral perde valor"
            sinal: medio
            prazo: 2038
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: "Arquivos audiovisuais como a Cinemateca Brasileira certificam retroativamente o acervo anterior à geração, que vira ativo raro"
                sinal: fraco
                prazo: 2050
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: "A obrigação de marcar o gerado divide a mídia em duas camadas, marcada e não marcada, e empurra o controle fino para a exceção artística"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: "A fronteira entre obra evidentemente artística e conteúdo verossímil passa a ser decidida caso a caso, e produtores estilizam o visual de propósito para escapar do rótulo"
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: "Uma estética não fotorrealista por conformidade vira a linguagem dominante da propaganda política e da publicidade sensível"
                sinal: fraco
                prazo: 2042
                confianca: baixa
          - id: e11.2
            ordem: 2
            efeito: "A marca do gerado é removida pela própria reedição, e o ônus se inverte, passando a ser preciso provar o real em vez de marcar o falso"
            sinal: medio
            prazo: 2036
            confianca: media
            efeitos:
              - id: e11.2.1
                ordem: 3
                efeito: "Conteúdo não assinado passa a ser presumido falso nas plataformas, e denúncia anônima precisa de credenciais que assinem sem identificar"
                sinal: fraco
                prazo: 2046
                confianca: baixa
  - disrupcao: "A semelhança como direito licenciável, separada da presença física"
    efeitos:
      - id: e12
        ordem: 1
        efeito: "Atores e atrizes passam a licenciar a réplica visual separadamente da performance, com consentimento e pagamento por uso"
        sinal: forte
        prazo: 2032
        confianca: alta
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: "O elenco passa a ser escalado por licença disponível e não por agenda, e o cachê se divide entre presença e uso da réplica"
            sinal: medio
            prazo: 2038
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: "Poucas réplicas famosas concentram papéis e sindicatos negociam cotas mínimas de performance presencial por produção"
                sinal: fraco
                prazo: 2046
                confianca: baixa
          - id: e12.2
            ordem: 2
            efeito: "Espólios passam a operar como estúdios de réplica post-mortem licenciável"
            sinal: medio
            prazo: 2040
            confianca: media
            efeitos:
              - id: e12.2.1
                ordem: 3
                efeito: "Testamentos passam a incluir cláusula de aposentadoria digital, e a disputa pública se desloca para o direito do morto de não trabalhar"
                sinal: fraco
                prazo: 2052
                confianca: baixa
      - id: e13
        ordem: 1
        efeito: "Pessoas comuns ganham direito de propriedade sobre a própria imagem, e plataformas passam a operar remoção por semelhança"
        sinal: medio
        prazo: 2034
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: "Plataformas montam registros biométricos de rosto para detectar réplicas, criando um banco privado de rostos"
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: "O choque com LGPD e GDPR, que tratam biometria como dado sensível, leva o registro de rosto para operadores terceiros certificados"
                sinal: fraco
                prazo: 2044
                confianca: baixa
          - id: e13.2
            ordem: 2
            efeito: "As exceções de sátira e paródia viram o principal campo de disputa, usadas como escudo para réplicas políticas"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e13.2.1
                ordem: 3
                efeito: "Humoristas e chargistas passam a buscar parecer jurídico antes de vídeo satírico realista em eleição, e o gênero migra para a estilização"
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e14
        ordem: 1
        efeito: "Donos de catálogo usam direito autoral e direito de imagem para reservar a geração de personagens e rostos a modelos licenciados"
        sinal: medio
        prazo: 2034
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: "Seguradoras de produção passam a exigir modelos treinados em acervo licenciado, e independentes sem acesso a acervo pagam prêmio maior"
            sinal: fraco
            prazo: 2038
            confianca: baixa
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: "Acervos de emissoras como Globo e BBC passam a valer mais como dado de treino do que como catálogo para exibição"
                sinal: fraco
                prazo: 2045
                confianca: baixa
```

### 5.1 Mecanismos, raiz 1

- **e1** porque edição em contexto que preserva o que não se pediu para mudar [4] e reenquadramento que mantém a luz original [3] fazem uma correção de set custar uma operação de pós. *Sinal forte*: Aleph 2.0, Ray3.2, EbSynth 2 (três artefatos). *Classe de referência para o prazo*: edição não linear (Avid, 1989) levou cerca de 11 anos para dominar a montagem profissional; conta-se a partir de 2025 com aceleração parcial porque a ferramenta entra por API em software já instalado → 2032.
- **e1.1** porque se o take pode ser alterado depois, a pergunta de quem autoriza a alteração passa a ter valor. O acordo de mídia interativa já exige consentimento por projeto e descrição do uso da réplica [17]; o passo seguinte é estender isso à alteração do take, não só à réplica. *Teste da causa solta*: sem R1, a cláusula não teria objeto.
- **e1.1.1** porque variantes autorizadas custam quase nada e cada uma precisa de identificação; liga-se a R3 (assinatura por variante). Fora do cotidiano até perto de 2045.
- **e1.2** porque, se luz, fundo e enquadramento se ajustam depois [3], o set precisa capturar só o que não se sintetiza bem: performance e referência. *Referência*: produção virtual com painéis de LED ficou em nicho por mais de cinco anos após 2019; daí 2038, não antes. A Globo mostra a cautela: fez uma ficção inteira com IA e não a exibiu [27].
- **e1.2.1** porque o insumo escasso muda de locação para computação e acervo. Troca de ator (prefeituras e comissões de filmagem) e de mecanismo (fiscal → infraestrutura).
- **e2** porque a propagação por quadro-chave [20][4] faz o trabalho por quadro colapsar; cobrar por hora perde sentido quando a hora encolhe dez vezes. É o efeito que mais parece "mais barato" — ganhou mecanismo não linear na §7: muda a unidade de preço, não só o preço. Os mais expostos, segundo executivos consultados, são compositores e modeladores [21].
- **e2.1** porque a vantagem da mão de obra barata por hora some quando o insumo é o grafo; troca de ator (cliente → fornecedor offshore).
- **e2.1.1** porque o modelo ajustado de um personagem mantém o estilo por anos e passa a ter valor de ativo; derivado de e2.1, com troca de mecanismo (serviço → licença).
- **e2.2** porque o sindicato que encomendou o estudo de exposição [21] tem incentivo e canal para negociar; esta é a **retroação** da raiz 1. *Quem bloqueia*: o Animation Guild e o IATSE, com efeito de desacelerar a adoção em produções sindicalizadas.
- **e2.2.1** porque o grafo registra quais quadros guiaram a propagação, tornando o royalty rastreável.
- **e3** porque o ComfyUI já é requisito de vaga [10] e o Aleph 2.0 entrou como nó num canvas de design [4]; a API do Ray3.2 expõe "todo o controle" para software de estúdio [3]. *Sinal forte* (três artefatos). *Referência*: formatos de troca (EDL, depois OMF/AAF) levaram mais de uma década para estabilizar → 2034.
- **e3.1** porque o grafo é reproduzível e o reel não prova processo. Troca de ator (estúdio → escola). Não é "cursos reorganizam currículo": é a regra de admissão por portfólio.
- **e3.1.1** porque quando o gerado é o padrão, o feito à mão vira distinção; mecanismo de raridade.
- **e3.2** porque o fornecedor fechado ganha ao manter o cliente preso. O caso Sora mostra o risco de depender de um modelo que é descontinuado [11]; **retroação** com dono.
- **e3.2.1** porque projetos de anos não suportam perder o modelo no meio; sinal médio pelo caso Sora e pela existência de alternativas com pesos abertos citadas na busca (não abertas nesta rodada).
- **e4** porque manter a embalagem e o produto exatos numa variação gerada exige controle regional e de identidade; sem isso, a marca não aprova. A plataforma já gera variações dentro do Ads Manager [24]. *Quem perde*: produtoras de orçamento médio.
- **e4.1** porque a variação por impressão só é medida por quem entrega a impressão.
- **e4.1.1** porque uma peça que ninguém viu igual não pode ser julgada como peça; mecanismo de auditoria, órgãos nomeados.

### 5.2 Mecanismos, raiz 2 (toda a cadeia com confiança baixa)

- **e5** porque geração causal de 1–2 passos [6] e memória de minuto [7] tornam possível gerar o próximo quadro em resposta à entrada. *Sinal médio*: o Project Genie tem usuários, mas as sessões são de 60 s [8]. *Referência*: da demo do Flash à ubiquidade em animação web foram ~9 anos; mundos 3D navegáveis de consumo (VR) passaram de 10 anos e seguem abaixo de 10% — o prazo 2040 assume algo entre as duas.
- **e5.1** porque cada sessão exige computação própria e o custo do vídeo gerado cresce mais que linearmente com a duração [22][23]; inverte a lógica do *broadcast*.
- **e5.1.1** **retroação ecológica e econômica**: o custo freia a própria raiz. Fora da janela de massa.
- **e5.2** porque a obra passa a ser o sistema que gera, não a sequência gerada; a máquina de estados do Rive já é a forma embrionária disso [19].
- **e5.2.1** porque crítica e júri precisam de um objeto comum.
- **e6** porque o *data binding* do Rive já faz a animação seguir dados vivos [19]; substituir o arquivo de animação por um gerador condicionado ao estado é o passo seguinte. Responde à pergunta de 3ª ordem da disciplina: a fronteira entre vídeo e interface se dissolve primeiro na interface, não no cinema.
- **e6.1** porque o que não se desenha tem de ser restringido.
- **e6.1.1** porque animação gerada não pode ser revisada antes de existir; as WCAG têm critério sobre movimento, mas pressupõem conteúdo fixo.
- **e7** porque interação *full-duplex* a ~200 ms do modelo [5] cruza o limiar de conversa. *Referência*: chatbots de atendimento em texto levaram ~10 anos da onda de 2016 até o uso amplo.
- **e7.1** porque o que convence numa chamada passa a poder ser gerado; converge com R3.
- **e7.1.1** porque a presença física é a garantia que não se sintetiza.
- **e8** *quem bloqueia*: donos de motor de jogo e de catálogo, porque a geração neural não guarda regra nem estado confiável (as limitações do Genie estão documentadas [8]); o efeito é redirecionar a raiz para um arranjo híbrido.
- **e8.1** convergência com R1: o controle por esqueleto, profundidade e quadro-chave [1][3] é o que conecta a geometria mínima ao quadro pintado.
- **e8.1.1** porque o detalhe passa a ser gerado; troca de ator (modelador → artista técnico).

### 5.3 Mecanismos, raiz 3

- **e9** porque quando a edição não deixa rastro (R1), só a assinatura desde o sensor distingue; o Pixel assina tudo por padrão com chave em hardware [12], câmeras de redação assinam, e 200 organizações assinam o que publicam [13]. *Referência*: HTTPS — do protocolo (1994) a mais de metade das páginas carregadas levou cerca de 23 anos, e acelerou quando navegadores passaram a marcar o não seguro. Daí 2034 para o deslocamento do valor de prova em redações e perícia, não para o público em geral.
- **e9.1** porque a custódia é auditável e o pixel deixou de ser. O TSE, em 2026, usou critério de realismo e contexto, não de custódia [15] — sinal de que a mudança jurídica é lenta.
- **e9.1.1** *quem perde*: quem registra com celular de entrada, que não assina [12].
- **e9.2** **retroação**: a Apple lançou formato próprio ilegível para C2PA [12]; *quem bloqueia/captura* é o fabricante com ecossistema fechado.
- **e9.2.1** porque a raiz de confiança fica no hardware; troca de ator (fabricante → Estado).
- **e10** porque com a imagem sem valor intrínseco, o que vale é o carimbo de quem verificou [13].
- **e10.1** porque o manifesto se perde nas plataformas [13] e só a redação pode reconstituir a custódia.
- **e10.1.1** porque o material anterior à geração é verificável por outra via (proveniência física, arquivo), e fica escasso.
- **e11** porque o AI Act exige marca legível por máquina e reduz a obrigação para obra artística [14]; o TSE isenta caricatura e exige realismo [15]; o incentivo é estilizar ou alegar arte.
- **e11.1** porque os dois critérios são interpretativos (o TSE decidiu por 5 a 2 [15]).
- **e11.1.1** porque a conformidade premia o não verossímil; mecanismo estético.
- **e11.2** **retroação**: a reedição fina (R1) remove a marca; manifestos se perdem em plataforma [13]; o ônus migra.
- **e11.2.1** porque o padrão presumido muda; troca de ator (plataforma → ativistas e fontes anônimas).

### 5.4 Mecanismos, raiz 4

- **e12** porque o *rider* de réplica exige consentimento específico e pagamento separado [17] e o NO FAKES torna a semelhança um direito licenciável, não cedível em vida [16]. *Sinal forte*: rider do SAG-AFTRA, acordo de mídia interativa, NO FAKES aprovado em comissão, lei dinamarquesa. *Confiança alta*: o contrato já existe; o que falta é volume. *Referência*: direitos conexos de intérprete na música levaram décadas, mas aqui o contrato-padrão já está pronto → 2032.
- **e12.1** porque a réplica não tem agenda; o acordo de mídia interativa já paga réplica vocal por linha gerada [17].
- **e12.1.1** *quem perde*: estreantes; retroação sindical.
- **e12.2** porque o direito não expira com a morte no NO FAKES [16] e dura 50 anos na Dinamarca [18].
- **e12.2.1** porque com réplica perpétua a questão deixa de ser uso indevido e passa a ser consentimento póstumo. Fora do cotidiano, perto do horizonte.
- **e13** porque a emenda dinamarquesa protege qualquer pessoa (§73a) [18] e o NO FAKES cria notificação e contranotificação [16].
- **e13.1** porque remover por semelhança exige comparar rostos.
- **e13.1.1** porque a LGPD e o GDPR tratam biometria como dado sensível; troca de ator.
- **e13.2** **retroação**: a Dinamarca excetua caricatura, sátira e paródia [18]; o TSE excetua caricatura e montagem satírica [15].
- **e13.2.1** converge com e11.1.1.
- **e14** *quem bloqueia/captura*: Disney, Universal e WBD processam a Midjourney; a descoberta termina em 09/2026 e o julgamento pode ir a 2027 [28]; o acordo Disney–Sora não se fechou [11]. O efeito é concentrar a geração profissional em modelos de acervo licenciado.
- **e14.1** porque a seguradora precifica o risco jurídico do modelo.
- **e14.1.1** porque o acervo vira insumo escasso; a Globo já opera um laboratório próprio [27].

### 5.5 Cobertura STEEP e quem perde

- **Social**: e7.1.1, e9.1.1, e12.1.1, e13.2. **Tecnológico**: e3, e5, e6, e8. **Econômico**: e2, e4, e5.1, e14.1. **Ecológico**: e5.1.1 (custo energético do vídeo gerado por sessão) — a única entrada ecológica; não forcei outra. **Político**: e9.2.1, e11, e13.2.1.
- **Quem perde**: técnicos de set (e1.2), estúdios de VFX por hora (e2.1), produtoras de publicidade média (e4), testemunhas com aparelho barato (e9.1.1), fontes anônimas (e11.2.1), estreantes (e12.1.1), independentes sem acervo (e14.1).

### 5.6 Cruzamentos

- **Convergência 1 (a principal).** e1 (reedição sem rastro) + e11.2 (marca removida) + e7.1 (videochamada sem valor de prova) chegam ao mesmo lugar: **o valor da imagem sai da imagem e vai para quem a assinou**. Três raízes diferentes, mesmo efeito de 2ª ordem.
- **Convergência 2.** e11.1.1 (estética não fotorrealista por conformidade) e e13.2.1 (sátira migra para estilização): regulação de marca e direito de imagem empurram a mesma linguagem visual.
- **Convergência 3.** e8.1 e R1: o controle fino é a peça que torna viável o tempo real híbrido.
- **Retroalimentação.** e12 (réplica licenciada) aumenta a demanda por controle de identidade (R1), que aumenta o risco de réplica não autorizada, que reforça e13. Ciclo de reforço.
- **Retroalimentação negativa.** e5.1.1 freia R2 pelo custo.
- **Contradição.** e11.2.1 (não assinado presumido falso) e e9.1.1 (quem não assina é desfavorecido) versus a exceção artística do e11: não podem valer juntas sem uma terceira categoria (assinado como ficção). O que decide: se a C2PA ou a lei criam um tipo "gerado e assinado pelo autor" com peso próprio.

### 5.7 Regra de parada aplicada

Não derivei 4ª ordem. Candidatos como "a variante autorizada vira produto colecionável" (depois de e1.1.1) eram o pai "mais adiante", sem troca de ator nem de mecanismo.

## 6. Sinais fracos e wildcards

### Sinais fracos

1. **Rive como antecessor do vídeo que responde.** Visto em [19]. Se crescer, a fronteira vídeo/interface se dissolve pela interface (e6) antes do cinema (e5). *Sinal observável*: *runtime* de animação por estado aceitando entrada de um modelo gerativo em vez de *timelines*.
2. **Grafo dentro da ferramenta de design.** Aleph 2.0 como nó do Figma Weave [4]. Se crescer, o formato de troca (e3) sai do nicho do ComfyUI. *Observável*: nós de geração com controle por quadro-chave na ferramenta de design dominante e em software de edição.
3. **Descontinuação de modelos.** Sora encerrado [11]. Se virar padrão, e3.2.1 (exigência de pesos locais) sobe de ordem. *Observável*: segunda descontinuação de modelo de vídeo de grande laboratório.
4. **Apple fora da C2PA.** [12]. Se durar, e9.2 vira regra. *Observável*: validadores C2PA lendo (ou não) o Apple Reference Image até 2028.
5. **TSE dividido.** 5 a 2 sobre o que é *deepfake* [15]. *Observável*: número de decisões que classificam conteúdo estilizado como fora da regra nas eleições de 2028.

### Wildcards

1. **Longa feito por uma pessoa em seleção oficial de festival de primeira linha.** *Mecanismo*: R1 maduro permite a um autor dirigir cada plano sem equipe. *Por que improvável*: festivais de primeira linha selecionam por autoria reconhecida; em 2026, o longa gerado mais visível (*Hell Grind*, 15 pessoas) passou em evento de mercado, fora da seleção [26]. *O que faria com o mapa*: anteciparia e1.2 e e2 em anos e legitimaria a estética gerada. *Sinal precoce*: filme com IA em mostra paralela oficial (Quinzaine, Orizzonti).
2. **Decisão de que treinar em obra protegida não é *fair use*.** *Mecanismo*: [28] chega a julgamento e perde. *Improvável* no curto prazo pela indefinição e pelo tempo. *Efeito*: e14 vira dominante; modelos de acervo licenciado viram os únicos profissionais; R1 fica cara. *Sinal*: resultado da moção de julgamento sumário (prevista para 11/2026).
3. **Quebra de uma raiz de confiança de hardware.** *Mecanismo*: chave extraída de um chip que assina (tipo Titan M2) permite assinar falso. *Improvável* por ser hardware certificado. *Efeito*: R3 recua anos; e9 cai. *Sinal*: revogação em massa de certificados de aparelho.
4. **Energia barata e abundante para inferência.** *Mecanismo*: custo por quadro cai ordens de grandeza. *Efeito*: remove a retroação e5.1.1 e acelera e5. *Sinal*: preço por minuto de vídeo gerado cair 100× em cinco anos.

## 7. Contra o próprio mapa

### 7.1 Pré-mortem: "É 2056 e este mapa se mostrou errado. Por quê?"

1. **O controle fino virou recurso comum e nada rompeu.** Quadro-chave e região viraram botões de editor de massa até 2030, e a prática só ficou mais barata. *Aponta para* e1 e e2 (seriam sustentadores). Ação: mantive e1 e e2 porque a unidade de preço muda (hora → resultado), mas rebaixei e1.2 no prazo e registrei o falseador na 7.8.
2. **O tempo real nunca ficou barato.** O custo por sessão manteve o vídeo como arquivo. *Aponta para* toda a R2. Ação: R2 inteira com confiança baixa; e5.1.1 entra como retroação e o prazo de e5 foi empurrado.
3. **A procedência nunca chegou ao público.** Plataformas continuaram despindo manifestos, e a prova seguiu por testemunho e contexto, como na decisão do TSE [15]. *Aponta para* e9.1 e e11.2.1. Ação: e9.1 rebaixado.

### 7.2 Extrapolação linear

- **e2** era "rotoscopia mais barata". Ganhou mecanismo não linear: muda a unidade de venda.
- **e4** era "publicidade mais barata". Ganhou o mecanismo do produto preservado (exige controle regional), sem o qual cairia no teste da causa solta.
- **e5.1** era "mais computação". Ganhou a inversão de custo marginal, que é não linear na economia de distribuição.
- **e7** permanece próximo de "o vídeo gravado vira ao vivo". Mantido por causa da troca de ator em e7.1 (prova de identidade), mas com confiança baixa.

### 7.3 Velocidade de adoção

- **e1.2**: prazo 2034 → 2038, porque produção virtual com LED ficou em nicho por mais de cinco anos e a Globo, com laboratório próprio, optou por não exibir humanos sintéticos [27].
- **e5**: prazo 2036 → 2040; referência VR de consumo (>10 anos sem chegar a 10%).
- **e10**: prazo 2030 → 2034; referência HTTPS (~23 anos até a maioria; aceleração só depois que navegadores marcaram o não seguro).
- **e12.2.1**: prazo 2048 → 2052; a mudança em testamentos depende de lei vigente, e nenhuma das citadas está vigente de fato [16][18].

### 7.4 A raiz que não acontece

- **Sem R1**: e1–e4 caem, mas R3 continua (a assinatura na captura se justifica pela geração por prompt) e R4 continua (réplica gerada por prompt com controle de identidade). Sobra metade do mapa.
- **Sem R2**: sobram R1, R3 e R4 intactas; a pergunta "todo vídeo vira interativo?" fica sem resposta, e e6 continua possível via Rive sem geração.
- **Sem R3**: a convergência 1 fica sem saída institucional; a confiança volta ao testemunho. R1, R2 e R4 continuam.
- **Sem R4**: R1 perde a disputa sobre quem autoriza alterar um take (e1.1 se enfraquece), mas o resto fica. Nenhuma raiz é disfarce de outra, embora R1 e R4 compartilhem o controle de identidade como pré-condição.

### 7.5 Suposições escondidas

1. Modelos com pesos abertos continuam disponíveis (e3.2.1, experimento). Quebrada → e3.2 dominante.
2. Plataformas continuam permitindo geração de rostos reais com consentimento. Quebrada → R4 vira só proibição.
3. Energia para inferência não é racionada (e5). Quebrada → wildcard 4 invertido.
4. Estados não impõem chave de assinatura (e9.2.1 assume que tentam, não que conseguem).
5. Direito dos EUA e da UE continuam sendo os que definem o padrão global; no Brasil o TSE regula eleições, mas não há lei de réplica equivalente ao NO FAKES — hoje o recorte brasileiro depende de importação de padrão.

### 7.6 Viés do autor

O tema foi escolhido pelo interesse em percepção e mídia sintética, e a raiz 2 (vídeo que responde) está aqui mais pelo interesse do autor em interação do que pela evidência — é a raiz com menos base. e6.1.1 (WCAG) também reflete interesse do autor em interface, com mecanismo razoável e sinal nulo.

### 7.7 Calibração

Contagem final: ordem 1 — alta 1, média 9, baixa 4; ordem 2 — alta 0, média 16, baixa 6; ordem 3 — alta 0, média 0, baixa 22. Cai com a ordem. Nenhum efeito de 3ª ordem com confiança alta.

### 7.8 Falseadores do autor aplicados

- **(a) Adoção além da maioria inicial.** Para geração por prompt, sim (Kling, Meta) — por isso foi recusada como raiz. Para controle fino, não há número separado; se aparecer evidência de que quadro-chave e região já estão em mais de 16% dos editores de vídeo em 2028, R1 vira contexto e e1–e4 perdem uma ordem.
- **(b) Só melhora o que existe.** Aplicado a e2 e e4 (ver 7.2). R3 e R4 passam: mudam a prova e a propriedade, não o custo.

### 7.9 Registro de alterações

- e1.2: prazo 2034 → 2038, porque a referência produção virtual/LED e a decisão da Globo [27].
- e2: mecanismo reescrito (de "mais barato" para "muda a unidade de preço"); valores mantidos.
- e3.2.1: confianca media → baixa, porque 3ª ordem com um só artefato (Sora [11]).
- e4: sinal forte → medio, porque o número de "2,3 bilhões de variantes" e a meta de automação total vinham de blogs de terceiros não abertos; só a página da Meta foi aberta [24].
- e5: sinal forte → medio e prazo 2036 → 2040, porque os três artefatos (Genie, Matrix-Game, Causal Forcing++) demonstram a técnica, não o efeito (entretenimento como sessão).
- e7.1: confianca media → baixa, porque a raiz é de laboratório e não abri fonte sobre fraude por vídeo em KYC.
- e8.2 ("jogos deixam de ter arte feita à mão"): **removido** (vai para a seção 12), porque falha no teste de especificidade — decorre de qualquer geração de imagem, não do tempo real.
- e9: confianca alta → media, porque o valor probatório por custódia ainda não aparece em decisão judicial aberta nesta rodada; a assinatura existe, o deslocamento do valor de prova não.
- e9.1: confianca alta → media, porque o TSE decidiu por realismo e contexto, não por custódia [15].
- e10: prazo 2030 → 2034 (referência HTTPS).
- e11.1.1: confianca media → baixa (3ª ordem, sem artefato).
- e12: confianca media → alta (subida, não descida), porque o contrato-padrão e duas legislações já existem [16][17][18]; o efeito é descrição do presente em expansão.
- e12.2.1: prazo 2048 → 2052.
- e13.1: sinal medio → fraco, porque a ferramenta de detecção por semelhança de uma plataforma de vídeo apareceu só em resultado de busca, sem ser aberta.
- e14.1: confianca media → baixa, porque não há fonte aberta sobre exigência de seguradoras.

Cota mínima por raiz cumprida: R1 (e1.2, e3.2.1, e4), R2 (e5, e7.1, e8.2 removido), R3 (e9.1, e10, e11.1.1), R4 (e12.2.1, e13.1, e14.1).

## 8. O que a máquina errou

1. **Número de terceiro quase entrou como fato.** A busca devolveu "2,3 bilhões de variantes de anúncio" e "18% mais engajamento" atribuídos à Meta; a origem era um blog de marketing que não abri. Tirei do texto e rebaixei e4.
2. **Fonte que não confirmou o que a busca prometia.** O resumo de busca sobre o TSE falava de uma janela de 72 horas antes e 24 depois da votação; a fonte que abri (INPD) não menciona isso. Não usei a janela no mapa. A página oficial do TSE respondeu 403.
3. **Dependência de resumos gerados.** Todas as páginas foram lidas por um resumidor automático; números como "FID 18,65 → 1,73" e "~200 ms" vieram desse resumo, não da leitura do PDF. Os do VAR conferem com a leitura da rodada anterior; os do Wan-Streamer não foram conferidos no PDF.
4. **Classe de referência de memória.** "HTTPS levou ~23 anos até a maioria", "Avid ~11 anos", "produção virtual em nicho por cinco anos", "Flash ~9 anos" — todos de memória, sem fonte aberta nesta rodada. São aproximações, e os prazos dependem delas.
5. **Mecanismo fraco que soa plausível.** e6.1.1 (WCAG ganhar critérios para movimento gerado) tem mecanismo lógico, mas nenhum sinal; ficou por gosto do autor (7.6).
6. **Contagem de Sora.** A fonte sobre o encerramento do Sora é um site de negócios menor; o encerramento da API está marcado para 24/09/2026, dois dias depois desta rodada — o fato pode mudar.
7. **Fato de resumo de busca usado com ressalva.** Que o direito do NO FAKES "não expira com a morte" veio do resumo de busca do Congress.gov, não de página aberta; a Manatt [16] não trata do prazo pós-morte. Mantive em e12.2 porque a lei dinamarquesa [18] sustenta o mecanismo por outra via.
8. **Contagem de buscas.** O primeiro rascunho dizia "30 buscas"; foram 16. Corrigi a seção 3 e a 12.3.
9. **Critterz.** A notícia de que o filme perdeu a estreia em Cannes por causa do fim do Sora veio de um título da Bloomberg que respondeu 403; não usei como fonte.

## 9. Três cenários para 2056

**Provável.** Em 2056, dirigir imagem gerada é parte comum da pós: quadro-chave, região e grafo estão em todo editor, e refilmar virou exceção cara. Sets menores capturam performance e referência; os técnicos de set e os estúdios de VFX por hora encolheram, e quem sobreviveu mantém modelos de franquia. A procedência assinada vale em redações e tribunais dos países que a adotaram, mas o público comum ainda recebe a maior parte das imagens sem manifesto; a presunção de falso recai sobre o que não tem assinatura, e quem tem celular barato está em desvantagem. Atores licenciam réplicas; espólios exploram rostos do século XX. Vídeo gerado ao vivo existe em camadas pagas e em interfaces, mas o filme e a série ainda são arquivos. *Sinal precoce*: segunda geração de editores de massa com quadro-chave nativo até 2030, e redações exigindo manifesto para material de terceiros.

**Desejável.** O controle fino baixou a barreira de produção sem apagar o ofício: sindicatos e estúdios chegaram a pisos por plano e royalties por quadro-chave de referência, rastreados pelo grafo. A assinatura na captura chegou a aparelhos baratos por padrão, com credenciais que assinam sem identificar, e mensageiros preservam o manifesto. O direito de imagem vale para qualquer pessoa, com remoção rápida e exceção de sátira bem delimitada. No Brasil, a Cinemateca e os acervos públicos certificaram o material anterior à geração. *O que teria que ser feito*: exigir assinatura em aparelhos de entrada por norma técnica; tornar a preservação de manifesto obrigação de plataforma; legislar réplica com prazo post-mortem limitado. *Sinal precoce*: um celular de entrada assinando por padrão até 2032.

**Indesejável.** Três fabricantes controlam a raiz de confiança e não se falam; governos exigiram chaves nacionais. Imagem sem assinatura é descartada, e quem registra abuso com aparelho barato não é ouvido. Poucos acervos licenciados concentram a geração profissional; modelos abertos ficaram juridicamente arriscados. Poucas réplicas famosas ocupam a maioria dos papéis. A propaganda política adotou uma estética estilizada que escapa do rótulo e continua enganando. *Sinal precoce*: decisão judicial de que treinar em obra protegida não é *fair use*, seguida de um segundo fabricante lançando formato de procedência próprio.

## 10. O experimento

**O que é.** "Réplica com contrato." Cada participante grava 20 s de si mesmo e preenche um contrato de réplica de uma página, no molde do *rider* do SAG-AFTRA [17]: o que pode ser alterado (roupa, fundo, luz, expressão, fala), em que região do quadro, e para qual uso. Em seguida, uma dupla tenta produzir três alterações pedidas: (a) só com prompt num gerador de vídeo; (b) com propagação por quadro-chave no EbSynth 2 (gratuito até 720p [20]) e, se houver máquina, com um grafo no ComfyUI [10]. Mede-se o tempo e o número de tentativas até a alteração pedida, e se algo fora do contrato mudou. No fim, o retratado vê as versões e diz se reconsidera o que consentiu.

**Que pergunta responde.** Duas, ligadas a R1 e R4: o controle fino reduz de fato o esforço de dirigir uma alteração (e1, e2)? E a granularidade do controle muda o que as pessoas aceitam consentir sobre a própria imagem (e12, e13)?

**Que tecnologia emergente usa, e por que não dá com a madura.** Propagação por quadro-chave e grafo de geração. Com rotoscopia manual, a mesma alteração custa horas por segundo; com prompt puro, não há como garantir que só a região contratada mude — é exatamente o problema de "cassino" descrito em [10].

**O que a turma faz em sala.** Em duplas: grava, preenche o contrato, executa as três alterações pelos dois caminhos, cronometra, e registra numa planilha comum; depois o retratado revisa o consentimento. Discussão final: quais cláusulas o grupo acrescentaria.

**O resultado que faria mudar de ideia.** Se o caminho por quadro-chave não economizar tempo nem tentativas frente ao prompt (ou mudar coisas fora do contrato tanto quanto ele), R1 perde força como ruptura. Se ninguém mudar o consentimento depois de ver o que o controle fino permite, a premissa de R4 — de que a dirigibilidade altera a negociação da imagem — fica fraca.

## 11. Fontes

1. Ma, Y. et al. *Controllable Video Generation: A Survey*, arXiv 2507.16869v3 (01/2026) — https://arxiv.org/html/2507.16869v3 — Taxonomia do controle (estrutura, identidade, imagem, tempo) e problemas abertos (3.2; R1; R4 "por que agora"). *Confiabilidade*: preprint de revisão; bom mapa do campo, sem revisão por pares confirmada.
2. Tian, K. et al. *Visual Autoregressive Modeling*, NeurIPS 2024 — https://proceedings.neurips.cc/paper_files/paper/2024/hash/9a24e284b187f662681440ba15c416fb-Abstract-Conference.html — FID 1,73, ~20× mais rápido, lei de escala, edição sem ajuste (3.2; R2). *Confiabilidade*: alta; anais revisados.
3. Luma, "Introducing Ray3.2" (09/06/2026) — https://lumalabs.ai/news/introducing-ray-3-2 — 16 quadros-chave, HDR/EXR, 20 s, preservação de performance, API (3.1; e1, e1.2, e3, e8.1). *Confiabilidade*: média; anúncio do fabricante.
4. Figma, "Direct every frame with Runway Aleph 2.0, now in Figma Weave" (18/06/2026) — https://www.figma.com/blog/direct-every-frame-with-runway-aleph-2/ — Edição em contexto de até 30 s, propagação de quadro-chave, nó no Weave, "sem refilmar" (3.1; e1, e3; sinal fraco 2). *Confiabilidade*: média; blog de parceiro comercial.
5. Huang, L. et al. *Wan-Streamer v0.1*, arXiv 2606.25041 (06/2026) — https://arxiv.org/abs/2606.25041 — Interação audiovisual *full-duplex*, ~200 ms do modelo, 25 fps (R2; e7). *Confiabilidade*: média; preprint, números não conferidos no PDF.
6. Zhao, M. et al. *Causal Forcing++*, arXiv 2605.15141 (05/2026) — https://arxiv.org/abs/2605.15141 — Autoregressão quadro a quadro em 1–2 passos, latência do primeiro quadro −50% (R2; e5). *Confiabilidade*: média; preprint.
7. Wang, Z. et al. *Matrix-Game 3.0*, arXiv 2604.08995 (04/2026) — https://arxiv.org/abs/2604.08995 — 40 fps em 720p, memória de minuto (R2; e5). *Confiabilidade*: média; preprint.
8. heise online, "Project Genie: Google opens experimental AI world model to users" (30/01/2026) — https://www.heise.de/en/news/Project-Genie-Google-opens-experimental-AI-world-model-to-users-11160043.html — Acesso restrito, sessões de 60 s, limitações (3.2; R2; e5, e8). *Confiabilidade*: alta; imprensa técnica estabelecida.
9. Caixin Global, "Kuaishou ramps up AI commercialization as Kling revenue hits $150 million" (25/03/2026) — https://www.caixinglobal.com/2026-03-25/kuaishou-ramps-up-ai-commercialization-as-kling-revenue-hits-150-million-102427380.html — Receita, usuários, vídeos do Kling (3.4; recusa da raiz por prompt). *Confiabilidade*: alta; imprensa econômica com dados de balanço.
10. TechCrunch, "ComfyUI hits $500M valuation…" (24/04/2026) — https://techcrunch.com/2026/04/24/comfyui-hits-500m-valuation-as-creators-seek-more-control-over-ai-generated-media/ — Avaliação, 4 milhões de usuários, vaga "ComfyUI artist", metáfora do cassino (3.1; e3; experimento). *Confiabilidade*: média-alta; números declarados pela empresa.
11. Startup Fortune, "OpenAI shuts down Sora's API this week…" — https://startupfortune.com/openai-shuts-down-soras-api-this-week-ending-its-billion-dollar-disney-deal/ — Datas de encerramento, queda de downloads, acordo Disney não fechado (3.2; e3.2, e3.2.1, e14; sinal fraco 3). *Confiabilidade*: média; imprensa de negócios menor.
12. Lumethic, "Which phones sign photos with Content Credentials in 2026" (atualizado 16/09/2026) — https://www.lumethic.com/en/articles/smartphones-c2pa-content-credentials — Pixel 10/11 por padrão, Samsung só IA, Apple Reference Image fora da C2PA (3.1; R3; e9, e9.2, e9.1.1). *Confiabilidade*: média; empresa do setor, com interesse comercial.
13. Editors Weblog, "C2PA Adoption Tracker…" (12/04/2026) — https://editorsweblog.org/2026/04/12/c2pa-adoption-tracker-platforms-content-credentials-2026 — Quem preserva e quem despe o manifesto, 200 membros da CAI, problema do *screenshot* (3.1–3.2; e9, e10, e11.2). *Confiabilidade*: média; blog da WAN-IFRA.
14. artificialintelligenceact.eu, "The EU AI Act's transparency rules: Article 50" — https://artificialintelligenceact.eu/transparency-rules-article-50/ — Marca legível por máquina, exceção artística, datas (3.1; R3; e11). *Confiabilidade*: média-alta; site de referência não oficial.
15. INPD, "TSE define critérios para caracterizar deepfakes nas Eleições 2026" — https://www.inpd.com.br/post/tse-define-crit%C3%A9rios-para-caracterizar-deepfakes-nas-elei%C3%A7%C3%B5es-2026 — Decisão de 01/09/2026, 5 a 2, realismo e contexto de propaganda (3.1; e9.1, e11, e11.1, e13.2; nota Brasil). *Confiabilidade*: média; instituto de proteção de dados resumindo decisão pública.
16. Manatt, "Congress reintroduces the NO FAKES Act: what's new in the 2026 bill" — https://www.manatt.com/insights/newsletters/client-alert/congress-reintroduces-the-no-fakes-act-what-s-new-in-the-2026-bill — Reintrodução em 20/05/2026, direito licenciável, contranotificação (R4; e12, e12.2, e13). *Confiabilidade*: média-alta; escritório de advocacia. (Pós-morte "não expira" veio do resumo de busca do Congress.gov, não aberto — ver seção 12.)
17. Frankfurt Kurnit (FKKS), "Inside the new SAG-AFTRA Interactive Media Agreement…" — https://technologylaw.fkks.com/post/102mewu/inside-the-new-sag-aftra-interactive-media-agreement-new-standards-for-ai-and-di — Consentimento por projeto, pagamento de réplica vocal por linha e visual por conteúdo, relatório de uso (3.1; R4; e1.1, e12, e12.1; experimento). *Confiabilidade*: média-alta; escritório especializado.
18. Dennemeyer, "A new sense of self: Denmark's copyright amendment against deepfakes" — https://www.dennemeyer.com/blog/posts/a-new-sense-of-self-denmark-s-copyright-amendment-against-deepfakes — §65a, §73a, 50 anos pós-morte, exceção de sátira, atraso na vigência (R4; e12.2, e13, e13.2). *Confiabilidade*: média-alta; escritório de PI.
19. Rive, "A beginner's guide to the Rive State Machine" — https://rive.app/blog/how-state-machines-work-in-rive — Estados, transições, *listeners*, *data binding* (3.1; e5.2, e6; sinal fraco 1). *Confiabilidade*: média; documentação do fabricante.
20. CG Channel, "EbSynth 2 can turn video into animation without using AI" (10/2025) — https://www.cgchannel.com/2025/10/ebsynth-2-can-turn-video-into-animation-without-using-ai/ — Propagação por síntese de textura, preços, navegador (3.1; e1, e2; experimento). *Confiabilidade*: alta para fatos de produto.
21. Cartoon Brew, "Union study says generative AI will disrupt 204,000 jobs in three years" — https://www.cartoonbrew.com/artist-rights/union-study-says-generative-ai-will-disrupt-204000-jobs-three-years-237495.html — Números do estudo CVL Economics, funções expostas, método (3.4; e2, e2.2). *Confiabilidade*: média; estudo encomendado por sindicato, baseado em opinião de executivos.
22. MIT Technology Review, "We did the math on AI's energy footprint" (20/05/2025) — https://www.technologyreview.com/2025/05/20/1116327/ai-energy-usage-climate-footprint-big-tech/ — 3,4 MJ por clipe de 5 s, 700× uma imagem (3.4; R2; e5.1). *Confiabilidade*: alta; reportagem com medição própria em modelos abertos.
23. Dataconomy, "Hugging Face: AI video energy use scales non-linearly" (26/09/2025) — https://dataconomy.com/2025/09/26/hugging-face-ai-video-energy-use-scales-non-linearly/ — Dobrar a duração quadruplica a energia (3.4; e5.1, e5.1.1). *Confiabilidade*: média; resumo de estudo, sem autores nomeados.
24. Meta for Business, "Meta Advantage+ creative" — https://www.facebook.com/business/ads/meta-advantage-plus/creative — Geração de fundo, expansão, animação, variações (3.1; e4, recusa da raiz por prompt). *Confiabilidade*: média; página do fabricante.
25. Remotion, "Agent Skills" — https://www.remotion.dev/docs/ai/skills — Vídeo escrito por agente em React (3.1). *Confiabilidade*: alta para o fato.
26. Wikipedia, "Hell Grind" — https://en.wikipedia.org/wiki/Hell_Grind — Longa gerado com Higgsfield, 15 pessoas, duas semanas, US$ 500 mil, evento em Cannes fora da seleção (3.4; wildcard 1). *Confiabilidade*: média; enciclopédia colaborativa sobre fato recente.
27. Mobile Time, "Globo monta laboratório de criação para conteúdo feito com IA" (10/12/2025) — https://www.mobiletime.com.br/noticias/10/12/2025/globo-laboratorio-de-ia/ — AI Content Lab, ficção de 30 min não exibida (3.3; e1.2, e14.1.1; nota Brasil). *Confiabilidade*: média-alta; imprensa setorial brasileira.
28. The Art Newspaper, "Midjourney strikes back…" (09/07/2026) — https://www.theartnewspaper.com/2026/07/09/midjourney-demands-hollywood-AI-secrets — Estado do processo dos estúdios contra a Midjourney (R1 "o que falta"; e14; wildcard 2). *Confiabilidade*: alta; baseada em peças processuais.

## 12. Anexo — o levantamento bruto

### 12.1 Saída do verificador

Comando: `python3 futurizacao-giordano/references/verificar.py tendencia-midia-sintetica-controlavel-video-e-imagem.md --links`, em 22/09/2026.

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 14 (frontmatter diz 14)
efeitos ordem 2: 22 (frontmatter diz 22)
efeitos ordem 3: 22 (frontmatter diz 22)
prazo > horizonte (2056) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 1 · media 9 · baixa 4
confiança ordem 2: alta 0 · media 16 · baixa 6
confiança ordem 3: alta 0 · media 0 · baixa 22
links da seção 11: 28/28 respondem (frontmatter diz fontes: 28)
RESULTADO: ok
```

### 12.2 Premissas assumidas que o briefing não cobria

- A nota sobre o Brasil ficou distribuída (TSE, Globo, Cinemateca, CONAR, LGPD) em vez de subseção própria.
- "Imagem" tratada como caso particular do vídeo; não mapeei impressão, fotografia de estúdio nem arte digital estática.
- O público "quem projeta mídia e interação" levou a pesar mais produção e interface do que política pública.
- Sem restrição de custo para o experimento: assumi só ferramentas gratuitas ou de camada gratuita.

### 12.3 Buscas feitas (16) e o que deram

1. "controllable video generation 2026 keyframe region editing model release" → Ray3.2, Aleph 2.0, Wan 2.7, Veo 3.1, PREX (arXiv); usei Ray3.2 e Aleph.
2. "real-time interactive video generation world model 2026 autoregressive streaming" → Wan-Streamer, Matrix-Game 3.0, Causal Forcing++, RELIC, AlayaWorld, DreamForge-World; abri três.
3. "C2PA content credentials adoption 2026 cameras smartphones" → Lumethic, Editors Weblog, SoftwareSeni, AttestTrail; abri dois.
4. "Rive state machine funding 2026 users" → US$ 14 milhões em duas rodadas (Tracxn, não aberto), ~75 funcionários, Duolingo como usuário (não aberto; não usado).
5. Luma Ray3.2 → página oficial aberta.
6. Runway Aleph 2.0 → blog da Figma aberto; página da Runway não aberta.
7. SAG-AFTRA réplica digital → FKKS aberto; carta de 16 mil assinaturas pelo NO FAKES (não aberto, não usado).
8. NO FAKES Act 2026 → Manatt aberto; Byte Back Law 403; Congress.gov não aberto. O resumo de busca dizia que o direito "não expira com a morte" e que a comissão do Senado aprovou por unanimidade em 22/06/2026 — **não confirmado em fonte aberta**; usei a frase sobre pós-morte em e12.2 citando [16] com ressalva na seção 11.
9. TSE deepfake 2026 → página do TSE 403; INPD aberto; janela de 72 h não confirmada (seção 8).
10. Longa gerado em festival 2026 → *Hell Grind* (Wikipedia, aberta); festivais de filme com IA em Veneza e Cannes (não abertos).
11. Critterz → Bloomberg 403; Deadline redirecionou para *paywall*; não usado.
12. Globo IA novela → Mobile Time aberto; notícias sobre "Êta Mundo Melhor" usando IA para o burro Policarpo (Terra, não aberto).
13. Disney/Universal x Midjourney → The Art Newspaper aberto.
14. Energia do vídeo gerado → MIT TR e Dataconomy abertos.
15. Meta anúncios gerados → página da Meta aberta; números de blogs de terceiros descartados.
16. Genie 3 / Project Genie → heise aberto.
Aberturas diretas, sem busca própria, a partir de URLs conhecidas ou de resultados acima: VAR (NeurIPS), revisão de Ma et al., TechCrunch sobre ComfyUI, Startup Fortune sobre Sora, Cartoon Brew sobre o estudo do Animation Guild, blog do Rive, CG Channel sobre EbSynth 2, Dennemeyer sobre a Dinamarca, AI Act Art. 50, Caixin sobre Kling, documentação do Remotion. Quatro aberturas falharam (TSE 403, Byte Back Law 403, Bloomberg 403, Deadline com redirecionamento para *paywall*).

### 12.4 Efeitos cortados no §6 (com o motivo)

- **e8.2 "Jogos deixam de ter arte feita à mão"** — removido: falha no teste de especificidade; decorre de qualquer geração de imagem.
- **"Surge a profissão de diretor de IA"** — cortado no rascunho: efeito proibido sem ator e mecanismo; substituído por e3.1 (admissão por grafo).
- **"Cursos de animação reorganizam o currículo"** — cortado: genérico; substituído por e3.1.
- **"Deepfakes afetam eleições"** — cortado: vale para geração por prompt, não depende do controle; falha no teste da causa solta para R1. A parte específica ficou em e11.1 e e13.2.
- **"O streaming acaba"** — cortado como extrapolação sem mecanismo; a versão com mecanismo é e5.1.1, que diz o contrário.

### 12.5 Rodada descartada: raiz "vídeo como código escrito por agente"

Considerei Remotion + agentes [25] como quinta raiz. Descartada: o objeto é o design procedural (tema 14), e o que rompe (animação feita à mão) já está em R1. Ficou como contexto em 3.1.

### 12.6 Caminhos abandonados

- Buscar número de réplicas visuais licenciadas: nenhum encontrado.
- Buscar fraude por vídeo em KYC (para e7.1): não abri fonte; efeito rebaixado.
- Buscar adoção de quadro-chave entre editores (falseador a): nenhum número separado de geração por prompt.

### 12.7 Contagem de confiança do rascunho, antes do §6

Ordem 1: alta 1 (e9), média 9, baixa 4. Ordem 2: alta 1 (e9.1), média 17, baixa 4. Ordem 3: alta 0, média 2, baixa 20. Depois do §6: ordem 1 alta 1 (troca de e9 por e12), ordem 2 alta 0, ordem 3 média 0.
