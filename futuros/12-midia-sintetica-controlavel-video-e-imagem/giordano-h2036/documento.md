---
tema: "Mídia sintética controlável: vídeo e imagem"
slug: midia-sintetica-controlavel-video-e-imagem
autor_login: grec
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-22
horizonte: 2036
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 15
efeitos_ordem_2: 20
efeitos_ordem_3: 15
tecnologias_citadas: [Runway Gen-4.5, Runway Aleph, Kling 3.0, Kling Elements, Veo 3.1, Sora 2, Pika, Luma Dream Machine, EbSynth, Cavalry, Rive, Lottie, Remotion, Remotion Agent Skills, ComfyUI, Weavy, Canva, Affinity, Figma, Adobe Firefly, Magnific, VAR, Infinity, MotionStream, Matrix-Game 3.0, Wan-Streamer, Genie 3, In-Video Instructions, VideoPainter, SketchKeyAnime, C2PA, Content Credentials, Stable Diffusion, Midjourney, Meta Advantage+, Critterz, Flash]
fontes: 35
confianca: media
experimento: "Três graus de controle e um vídeo verdadeiro — medir quantas iterações cada forma de dirigir exige para cumprir a mesma especificação, e se a turma distingue, a olho, a região editada num vídeo real"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Gerar vídeo a partir de uma frase deixou de ser novidade em 2025; o que muda até 2036 é que a
imagem em movimento sintética passa a ser **dirigida** em vez de sorteada. Este mapa parte de
quatro rupturas. A primeira é de **operação**: com quadro-chave, trajetória pintada, máscara de
região e grafo de nós, gerar e editar viram a mesma coisa, e a unidade de produção deixa de ser o
plano filmado para virar um pacote de restrições — o que desloca orçamento de set para direção
de grafo e tira do ofício de animação a sua porta de entrada, o intervalo. A segunda é de
**objeto**: a peça deixa de ser arquivo que toca e vira programa que responde — máquina de estados
(Rive), vídeo como código (Remotion), template alimentado por dado (anúncios gerados por variante)
—, e com isso aprovar, medir e lembrar "a peça" perde sentido. A terceira é de **tempo**:
arquiteturas causais e autoregressivas fazem o vídeo sair em fluxo, a 25–40 quadros por segundo em
laboratório, e o ciclo gerar-esperar-escolher vira dirigir enquanto roda; a mesma economia de GPU
que viabiliza isso já encerrou um produto de consumo (a Sora, em 2026), e tende a concentrar a
geração em quem tem receita de atenção. A quarta é de **prova**: quando a edição é regional e
localizada sobre vídeo verdadeiro, a autenticidade não se infere mais do conteúdo — passa a ser
atributo assinado na captura, e quem não tem câmera assinada vira testemunha de segunda classe. A
retroação mais forte está em R4: a rotulagem obrigatória de tudo que a IA "alterou
substancialmente" tende a rotular quase todo vídeo profissional e a perder poder informativo,
empurrando a regulação, depois de 2036, de rotular o sintético para certificar o não editado.

## 2. O tema

**O que é.** Mídia sintética controlável é a imagem — parada ou em movimento — produzida ou
alterada por modelos generativos sob **sinais de controle explícitos** além do texto: um quadro
pintado à mão que se propaga pelo vídeo, uma trajetória desenhada sobre o objeto, um movimento de
câmera parametrizado, uma região mascarada onde só ali o efeito se aplica, um grafo de nós que
encadeia modelos, uma máquina de estados que decide qual animação toca em resposta a um evento. O
levantamento de referência do campo diz isso com uma frase: o prompt de texto sozinho "é
frequentemente insuficiente para expressar requisitos complexos, multimodais e de granularidade
fina" [4].

**Onde encosta em mídia e interação.** Em três lugares. No **ofício** — animação, motion design,
publicidade, VFX, pós-produção —, onde o controle transforma a geração de brinquedo em ferramenta
de trabalho. Na **interface**, porque uma animação que responde a estado (o modelo do Rive) e um
vídeo gerado em tempo real a partir de comando (os modelos de mundo interativos) desmancham a
fronteira entre vídeo e UI. E na **prova**, porque a edição regional de vídeo real é o caso mais
difícil para detecção e o mais fácil para quem quer alterar um registro.

**Por que merece mapa de futuro e não levantamento de estado da arte.** Porque o problema mudou de
natureza. Até 2024 a pergunta era "consegue gerar?". Em 2026 a pergunta é "consegue dirigir?", e a
resposta está sendo dada por produtos (Runway, Kling), por ferramentas abertas (ComfyUI, 4 milhões
de usuários declarados [14]), por aquisições (Canva comprou o Cavalry [13]; a Figma comprou a
Weavy [14]) e por uma disputa de arquitetura ainda aberta (o VAR, melhor artigo do NeurIPS 2024,
foi o primeiro modelo autoregressivo a superar a difusão em geração de imagem [2][3]). O que
decorre disso — para indústria audiovisual, publicidade, ensino de animação, jornalismo e
tribunais — não está escrito em nenhum levantamento, e é o objeto deste mapa.

**Fronteiras com os vizinhos (enunciado da disciplina).** A história gerada é o tema 8; som e voz
são o tema 13; design procedural sem IA é o tema 14; o companheiro afetivo é o tema 19. Aqui o
objeto é **a imagem em movimento como mídia sintética dirigível**. Onde um efeito encosta num
vizinho (o personagem conversacional em vídeo, e10, encosta no 19; a animação por regras, R2,
encosta no 14), o efeito está aqui pela parte **visual e de controle** e o texto diz isso.

**Premissas da rodada (briefing).** Horizonte 2036. Público: quem projeta mídia e interação.
Recorte global, com nota sobre o Brasil (3.5). Descartado de início: o que já é comum em produto
de massa. Viés: neutro. Falseadores declarados pelo autor, usados no §6: (a) evidência de que a
adoção já passou da maioria inicial; (b) evidência de que a tecnologia não rompe nada, só melhora
o que existe. Rodada não interativa; o briefing completo substitui a entrevista, e o que ele não
cobria está em 12.2.

## 3. Onde isso está hoje

Âncora feita com acesso à web em 22/09/2026: 27 buscas (português e inglês), 35 fontes abertas e
lidas. Tudo o que está nesta seção tem fonte na seção 11; o que só apareceu em resumo de busca está
marcado e listado em 12.6.

### 3.1 O que já existe e funciona

**Controle espacial e temporal em produto comercial.**

- **Runway Gen-4.5** (01/12/2025): anunciado com os modos "Image to Video, Keyframes, Video to
  Video" e 1.247 pontos Elo no ranking texto-para-vídeo da Artificial Analysis, à frente de Veo 3
  (1.226), Kling 2.5 (1.225) e Sora 2 Pro (1.206), em 30/11/2025 [1]. A própria Runway publica três
  limitações que interessam a este mapa: efeitos que precedem causas ("a porta abre antes de a
  maçaneta ser apertada"), objetos que somem ou aparecem, e "viés de sucesso" (o chute mal mirado
  ainda vira gol) [1]. Isto é: o controle de *enquadramento* chegou antes do controle de *causa*.
- **Kling (Kuaishou)**: a página da empresa descreve o "AI Director" com até seis planos numa
  passada e transição automática entre plano aberto e fechado, o "Elements 3.0" que aceita vídeo de
  referência (não só foto) para manter consistência de personagem, sincronia labial nativa em cinco
  línguas e renderização legível de texto [29]. A página não dá a data de lançamento do Kling 3.0;
  por isso este documento não afirma a data.
- **Kling como negócio**: receita acima de RMB 850 milhões no segundo trimestre de 2026, com
  crescimento acima de 200% sobre o ano anterior [32]. É o número de adoção mais sólido deste mapa,
  e está em receita, não em usuários.
- **EbSynth**: pinta-se um quadro e o estilo se propaga seguindo o movimento. O ponto que a página
  faz questão de dizer é o que mais importa para o argumento: **a propagação não usa IA** — é
  síntese de textura que usa só o vídeo e os quadros-chave [27]. Preço: grátis (720p), US$ 20/mês,
  US$ 200/mês por assento no aplicativo local [27]. O instrumento mais controlável da amostra da
  turma é, portanto, anterior à onda generativa e continua competitivo por previsibilidade.

**Geração como grafo.**

- **ComfyUI**: rodada de US$ 30 milhões a US$ 500 milhões de avaliação em 24/04/2026, liderada pela
  Craft Ventures; 4 milhões de usuários declarados; vagas que pedem "ComfyUI artist or engineer";
  concorrente citada, a Weavy, comprada pela Figma em 2025 [14]. O CEO, Yoland Yan, dá a formulação
  mais útil deste mapa: ferramentas por prompt chegam a "60% – 80%" do que se quer, e ajustar o
  resto é como "jogar num cassino", porque uma mudança pequena no prompt desfaz o que estava
  certo [14].

**A peça como programa.**

- **Rive**: a máquina de estados é "uma forma visual de conectar animações e definir a lógica que
  dirige as transições", com estados, transições, entradas ligadas a dado e *listeners* de
  ponteiro; o argumento declarado é acabar com o fluxo em que o design "é documentado, entregue a um
  desenvolvedor e reconstruído em código" [12].
- **Cavalry**: motion design procedural ("o poder e a flexibilidade do 3D com a facilidade do 2D":
  instanciação, espalhamento, *rigging*), **comprado pela Canva em 25/02/2026**, com a promessa de
  que "tudo que é grátis no Cavalry hoje continua grátis" e a descrição da compra como a peça que
  faltava para uma suíte profissional com Affinity [13].
- **Remotion**: vídeo como árvore de componentes React renderizada quadro a quadro; mantém um
  pacote de *Agent Skills* para Claude Code, Codex, Kimi Code e Cursor, instalável por
  `npx skills add remotion-dev/skills` [26]. É o caminho em que um agente de código produz vídeo
  sem linha do tempo.
- **Anúncios gerados por variante (Meta)**: na teleconferência do quarto trimestre de 2025, a Meta
  disse que "a receita anualizada combinada das ferramentas de geração de vídeo atingiu US$ 10
  bilhões no Q4, com crescimento trimestral quase 3× maior que o da receita total de anúncios" [33].
  Ler com cuidado: é a receita de anúncios que passam por essas ferramentas, não venda de
  ferramenta (ver 8.2).

**Arquiteturas que disputam a difusão.**

- **VAR** (Tian et al., ByteDance/PKU, 03/04/2024): troca "próximo token" por "próxima escala"; no
  ImageNet 256×256 leva o FID do baseline autoregressivo de 18,65 para 1,73 e o IS de 80,4 para
  350,2, com cerca de 20× mais velocidade de inferência, leis de escala com correlação perto de
  −0,998 e generalização sem treino para *inpainting*, *outpainting* e edição [3]. É um dos dois
  melhores artigos da trilha principal do NeurIPS 2024 [2].
- **Infinity** (ByteDance, 12/2024): VAR com tokenização bit a bit; GenEval de 0,62 para 0,73 e
  imagem 1024×1024 em 0,8 s, 2,6× mais rápido que o SD3-Medium, com 66% de vitória contra ele [8].
- **Busca na inferência**: um modelo autoregressivo de 2B supera um de difusão de 12B com *beam
  search*, porque o espaço discreto permite poda antecipada e reuso; os autores concluem que "a
  arquitetura, não só a escala, é crítica" [7].

### 3.2 O que existe e ainda não funciona (laboratório e demo)

- **Controle interativo em tempo real**: MotionStream (ICLR 2026) gera em fluxo com latência abaixo
  de um segundo, até 29 FPS numa GPU, duas ordens de magnitude mais rápido que o anterior, com
  trajetória pintada, câmera e transferência de movimento; diagnostica o problema anterior como
  "latência proibitiva (minutos por vídeo)" e "processamento não causal" [5].
- **Modelos de mundo interativos**: Matrix-Game 3.0 (04/2026) declara 720p a até 40 FPS com
  memória consistente "por sequências de um minuto", controlado por vídeo, pose, ação e prompt [6].
- **Vídeo conversacional de ponta a ponta**: Wan-Streamer v0.1 (06/2026) modela texto, áudio e
  vídeo como entrada e saída num único Transformer, a 25 FPS, com ~200 ms de resposta do modelo e
  ~550 ms de latência total incluída a rede [9].
- **Instrução dentro do quadro**: texto sobreposto, setas e trajetórias desenhados no próprio vídeo
  como sinal de controle, testados em Veo 3.1, Kling 2.5 e Wan 2.2; os autores relatam execução
  confiável em cenas com vários objetos [10]. Preprint sem reprodução independente encontrada.
- **Detecção de deepfake no mundo real**: avaliação de detectores acadêmicos, governamentais e
  comerciais contra deepfakes políticos reais que circularam desde 2018 — todos falharam em
  generalizar; os pagos foram melhores que os gratuitos, e o vídeo foi o caso mais difícil,
  vulnerável a manipulações simples [11]. É a razão técnica de R4.
- **Causalidade física**: as limitações declaradas do Gen-4.5 (causa depois do efeito,
  permanência de objeto) [1] continuam em aberto no produto líder.

### 3.3 Quem constrói

| Ator | O quê | Onde aparece |
|---|---|---|
| Runway, Kuaishou (Kling), Google (Veo) | modelos fechados com controle de quadro-chave, câmera, referência | [1][29][32] |
| Comfy Org (ComfyUI), comunidade aberta | geração como grafo de nós, local e aberta | [14] |
| Canva (Cavalry, Affinity), Figma (Weavy) | suítes de massa absorvendo a camada de controle | [13][14] |
| Rive, Remotion | a peça como programa: estado e código | [12][26] |
| ByteDance, laboratórios acadêmicos (Adobe Research, CMU, MIT nos autores de MotionStream) | arquiteturas autoregressivas e causais | [3][5][7][8] |
| C2PA (Adobe, BBC, Google, Meta, Microsoft, OpenAI, Sony, TikTok…) | proveniência assinada | [34] |
| Reguladores: Comissão Europeia, TSE | rotulagem e marcação | [19][17][18] |

### 3.4 Números de adoção

- ComfyUI: 4 milhões de usuários (declaração da empresa, via reportagem) [14].
- Kling: receita trimestral acima de RMB 850 milhões, Q2 2026 [32].
- Meta: US$ 10 bilhões de receita anualizada passando por ferramentas de geração de vídeo, Q4
  2025 [33].
- Código de prática europeu de marcação e rotulagem: cerca de 190 signatários no fim de julho de
  2026 [19].
- **Quanto do vídeo online é sintético: sem número encontrado.** Os números que aparecem em
  agregadores de estatística não declaram método e não entram (12.5).
- **Quantos profissionais usam controle fino (quadro-chave, máscara, grafo) versus só prompt: sem
  número encontrado.** É a lacuna que o experimento da seção 10 tenta cobrir em escala de sala.

**Leitura contra o falseador (a).** Os números de adoção são de **geração** (anúncio, receita de
modelo), não de **controle**. A geração por prompt está em maioria nos anunciantes das grandes
plataformas — por isso está recusada como raiz (4, "Candidatos recusados"). O controle fino está
entre produto de nicho e adoção precoce; nenhuma evidência encontrada coloca o controle
explícito além dos 10% de quem produz mídia profissionalmente.

### 3.5 Nota Brasil

- **Eleições de 2026 como primeiro teste de R4.** Em 01/09/2026, por 5 a 2, o TSE fixou que
  deepfake é o conteúdo sintético com realismo suficiente para simular imagem, voz ou manifestação
  de pessoa **e** que funcione como propaganda eleitoral; ficam fora sátira, caricatura, avatar
  estilizado e ajuste técnico que não se passe por registro autêntico; toda propaganda criada ou
  "substancialmente alterada" por IA tem de dizer que é sintética e qual tecnologia usou; e fica
  vedado publicar, republicar e impulsionar conteúdo sintético com imagem ou voz de candidato entre
  72 horas antes e 24 horas depois da votação, **mesmo rotulado** [17]. Plataformas com mais de 5
  milhões de usuários ativos mensais no Brasil têm de apresentar planos de conformidade [17]. A
  regra de março já previa que a Justiça Eleitoral pode firmar parceria com universidades para
  autenticar conteúdo e que, em alguns casos, o ônus da prova passa a quem publica [18].
- **Televisão aberta.** Em 02/09/2026 a Globo tirou das redes um comercial em que Marcos Mion,
  Luciano Huck e Nathalia Dill apareciam, por IA, como Tom Cruise, Hulk e ao lado dos Caça-
  Fantasmas, depois de notificação extrajudicial de um estúdio de Hollywood [30]. Em 2024 a mesma
  emissora usou IA para dublar entrevistas de uma série documental recriando a voz dos próprios
  entrevistados; o movimento Dublagem Viva estimou cerca de 50 profissionais sem trabalho nesse
  projeto e chamou isso de brecha no acordo [31].
- **Regulação geral.** O PL 2338/2023 prevê remuneração ao titular quando obra protegida é usada no
  desenvolvimento comercial de IA e restringe o uso livre a pesquisa, jornalismo, museus, arquivos,
  bibliotecas e educação sem fim comercial [35]. A fonte aberta é de março de 2025; o estado atual
  da tramitação na Câmara veio só de resumo de busca e não é afirmado aqui (12.6).
- **O que falta:** número de adoção brasileira de controle fino; posição da ANCINE aberta em página
  (não encontrada nesta rodada).

## 4. As disrupções-raiz

Quatro raízes. Cada uma passou pelas quatro perguntas do critério de maturidade (§2 da skill). O
que foi recusado está no fim da seção, com o registro da recusa.

### R1 — Gerar e editar viram a mesma operação sobre uma estrutura dirigível: o controle explícito substitui o prompt como interface primária

1. **O que rompe.** A separação entre produção e pós-produção, e o modo "gerar e escolher" (a
   loteria de 60–80% [14]). Quando quadro-chave, trajetória, região e grafo são entradas do mesmo
   modelo, filmar, animar, compor e corrigir passam a ser a mesma ação sobre um pacote de
   restrições. Rompe também a porta de entrada do ofício de animação: o intervalo, que o
   quadro-chave propagado faz.
2. **Por que agora.** Porque a qualidade de geração passou do limiar em que o problema é dirigir, e
   não produzir: o produto líder publica ranking de qualidade e, ao lado, limitações que são todas
   de controle e causa [1]; o levantamento do campo ganhou três versões em seis meses [4]; o grafo
   aberto virou empresa de meio bilhão de dólares [14]. Há cinco anos não havia gerador bom o
   bastante para que valesse a pena controlá-lo.
3. **Onde está na difusão.** Entre `produto de nicho` e `adoção precoce (<10%)`: está em todos os
   produtos profissionais, mas o uso de massa (anúncios gerados a partir de fotos [33]) é por
   prompt e template, não por controle fino.
4. **O que falta.** Controle de causa física (hoje ausente, [1]); persistência de identidade entre
   planos longos; formato de intercâmbio do "pacote de controle" entre ferramentas; clareza
   jurídica sobre quem é autor de uma saída dirigida.

### R2 — A peça deixa de ser arquivo que toca e passa a ser programa que responde: máquina de estados, código e template

1. **O que rompe.** A suposição de que uma peça audiovisual é um objeto fixo, igual para todos,
   aprovado uma vez e medido como unidade. Com a máquina de estados [12], o vídeo como código [26]
   e o anúncio montado por variante [33], não há "a peça": há o gerador e as instâncias. Rompe
   também o *handoff* designer → desenvolvedor na microinteração [12].
2. **Por que agora.** Runtimes leves e multiplataforma (web, iOS, Android, Unity [12]); agentes de
   código que escrevem vídeo [26]; a aquisição do motion procedural por uma plataforma de massa com
   promessa de gratuidade [13]; e a receita de anúncios passando por geração em escala [33]. Há
   cinco anos o Lottie tocava animações; não havia estado nem agente.
3. **Onde está na difusão.** `adoção precoce` na microinteração de app e no anúncio de performance;
   `produto de nicho` no motion design procedural.
4. **O que falta.** Runtime nativo nas plataformas móveis (sem ele, é dependência de fornecedor);
   linguagem de aprovação e auditoria para geradores (quem aprova o quê); métrica de audiência que
   faça sentido para variantes.

### R3 — O vídeo deixa de ser lote que se espera e passa a ser fluxo que se dirige: arquiteturas causais e autoregressivas reabrem a disputa com a difusão

1. **O que rompe.** A economia da fila de render e a distinção entre vídeo gravado e ambiente
   interativo. Quando o vídeo sai a 25–40 FPS de forma causal [5][6][9], o operador dirige durante
   a geração, e o que era vídeo passa a se comportar como jogo ou como interlocutor. Rompe também a
   suposição de que qualidade de geração visual é função só de escala de treino: com busca na
   inferência, 2B vence 12B [7].
2. **Por que agora.** VAR mostrou em 2024 que o autoregressivo por escala supera a difusão em imagem
   [3][2]; em 2025–2026 as formulações causais e destiladas levaram o vídeo a tempo real em uma GPU
   [5][6]. A pré-condição é arquitetural e recente.
3. **Onde está na difusão.** `laboratório` a `demo pública`. Especulativo: **toda a cadeia de R3 sai
   com `confianca` no máximo `media` na 1ª ordem e `baixa` da 2ª em diante**, como manda a skill.
4. **O que falta.** Custo por minuto compatível com produto de consumo (a Sora foi encerrada em
   2026 com custo operacional relatado de cerca de US$ 1 milhão por dia [16]); memória longa além de
   um minuto [6]; causalidade física; ferramentas de direção em tempo real para quem não é
   pesquisador.

### R4 — A autenticidade deixa de ser inferida do conteúdo e passa a ser atributo assinado: a edição regional de vídeo verdadeiro dissolve a presunção de registro

1. **O que rompe.** A presunção, jornalística e processual, de que um vídeo é registro até prova em
   contrário. O ponto específico do controle — e não da geração em geral — é a **edição regional**:
   alterar uma área de um vídeo verdadeiro, com o resto do quadro autêntico, é o caso em que a
   detecção por conteúdo falha mais [11], e é exatamente o que as ferramentas de controle tornam
   barato (máscara, região, vídeo-para-vídeo [1]).
2. **Por que agora.** Detectores não generalizam para o mundo real [11]; câmeras e redações passaram
   a assinar na captura e C2PA virou "item de mesa" nas redações [28][34]; a obrigação europeia de
   marcação legível por máquina vale desde 02/08/2026 [19]; o TSE definiu deepfake em 01/09/2026
   [17]; e o comitê de regras de prova federal dos EUA devolveu, em junho de 2026, a proposta de
   regra para prova gerada por máquina junto com a questão dos deepfakes [20].
3. **Onde está na difusão.** `adoção precoce` nas redações; `laboratório/norma em redação` nos
   tribunais; `maioria` na **rotulagem** das grandes plataformas (que não é a raiz, é contexto).
4. **O que falta.** Credencial que sobreviva a captura de tela e a mensageiro (hoje não sobrevive
   [28]); assinatura em câmera barata e em celular de entrada; norma processual assentada; resolver
   a contradição entre rotular o sintético e certificar o não editado (e15.1).

### Candidatos recusados como raiz

- **Vídeo e imagem por prompt simples.** Recusado: adoção em maioria entre anunciantes das grandes
  plataformas desde 2025 (US$ 10 bilhões anualizados passando por ferramentas de geração na Meta
  [33]). Tratado como contexto em 3.1. É exatamente o que o briefing descarta.
- **Upscaling e realce (Magnific e similares).** Recusado: melhoria sustentadora — faz o mesmo,
  melhor. Pode aparecer como insumo de efeito, não como raiz.
- **A arquitetura autoregressiva (VAR) sozinha.** Recusada como raiz isolada: à pergunta "o que ela
  rompe?", sozinha, a resposta é "gera imagem com a mesma qualidade, mais rápido" — sustentadora.
  O que rompe é o que ela habilita: fluxo causal e controle por busca. Por isso entra **dentro de
  R3**, e não como R5.
- **Rotulagem de conteúdo sintético.** Recusada como raiz: é resposta regulatória em maioria nas
  plataformas grandes; entra como efeito (e15) de R4.
- **"Todo vídeo vira interativo".** Recusado: não passa no teste de especificidade nem no de
  mecanismo; sobreviveu como efeitos específicos (e5, e10) e o resto foi para 12.3.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "R1 — Gerar e editar viram a mesma operação sobre uma estrutura dirigível (quadro-chave, trajetória, região, grafo)"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "Produtoras de publicidade e casas de VFX passam a entregar pacotes de controle (quadros-chave, trajetórias, máscaras e o grafo) em vez de takes, e o plano filmado deixa de ser a unidade de produção"
        sinal: forte
        prazo: 2030
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "O orçamento do filme publicitário migra de diária de set para horas de direção de grafo, e a produtora média perde a faixa intermediária do mercado, espremida entre o anúncio automático e a direção de grafo de alto padrão"
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "O set físico passa a ser contratado para capturar âncoras licenciadas (rosto, gesto, produto) que alimentam a geração, e o cachê do ator se divide em diária mais licença de âncora por uso"
                sinal: fraco
                prazo: 2037
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "O grafo de geração vira ativo versionado e vendido como look proprietário de estúdio e agência, com repositório, revisão e licença próprios"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "A disputa de autoria migra da imagem para o grafo, e o que estúdios tentam proteger em juízo passa a ser a sequência de controle, não a saída"
                sinal: fraco
                prazo: 2039
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "O intervalo (in-between) e a rotoscopia deixam de ser a porta de entrada do ofício de animação, porque o quadro-chave propagado faz o trabalho do intervalador"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Estúdios de animação perdem o mecanismo de formação no trabalho, e a falta de animadores-chave seniores aparece cerca de uma geração de carreira depois"
            sinal: fraco
            prazo: 2034
            confianca: baixa
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Estúdios mantêm linhas de aprendiz subsidiadas, com produção deliberadamente feita à mão para formar animadores, como ateliês de restauro mantêm técnicas que o mercado não paga"
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "A consistência de identidade entre planos (personagem, produto, cenário como elementos reutilizáveis) substitui a qualidade do quadro isolado como o eixo da competição entre fornecedores de vídeo"
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "Marcas passam a manter um gêmeo de produto e um elenco sintético licenciado como ativo de marca, com contrato de manutenção pago à agência"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Grandes donos de propriedade intelectual operam geração fechada sobre o próprio catálogo em vez de licenciar personagens a um provedor geral"
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "O controle fino barateia a imitação precisa de personagem e rosto alheios, e a disputa de propriedade intelectual migra do treino para a saída, com notificação extrajudicial por peça como rotina"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "Filtros de semelhança na saída viram exigência contratual das plataformas de distribuição e bloqueiam paródia e sátira por falso positivo"
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: "Suítes de massa (Canva, Figma e congêneres) absorvem o grafo de controle como camada escondida, e a ferramenta aberta de nós perde o usuário intermediário"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "O acesso ao grafo, e não à geração, passa a separar o profissional do amador, e o controle fino vira recurso de plano caro enquanto o modo de massa volta a ser prompt"
            sinal: fraco
            prazo: 2031
            confianca: baixa
  - disrupcao: "R2 — A peça deixa de ser arquivo que toca e passa a ser programa que responde (máquina de estados, código, template)"
    efeitos:
      - id: e5
        ordem: 1
        efeito: "Designers de interface passam a entregar a microinteração como arquivo com lógica de estado embutida, e o handoff em que o desenvolvedor reconstrói a animação em código deixa de existir nesse nível"
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "O animador interativo absorve parte do trabalho de front-end de estados de interface, e equipes de produto contratam por domínio de runtime de animação"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Sistemas de design passam a versionar comportamento animado como token ligado a dado, e a auditoria de acessibilidade passa a testar estados e transições, não telas"
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: "O vídeo publicitário vira template parametrizado alimentado por dado, e cada espectador recebe uma variante, de modo que a peça deixa de existir como objeto único"
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "Cliente e regulador deixam de aprovar a peça por inspeção do arquivo final e passam a aprovar o gerador, suas restrições e seus limites"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "Agências passam a entregar dossiê de gerador (grafo, restrições, amostra estatística de variantes) a plataformas e a órgãos de autorregulação, que auditam por amostragem"
                sinal: fraco
                prazo: 2037
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "A métrica de audiência de campanha perde a unidade que media, porque ninguém viu a mesma peça, e o comercial lembrado por todos deixa de ser produzido"
            sinal: fraco
            prazo: 2035
            confianca: baixa
      - id: e7
        ordem: 1
        efeito: "Agentes de código passam a produzir vídeo explicativo, relatório e documentação em vídeo escrevendo componentes, sem linha do tempo"
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "O vídeo explicativo vira artefato derivado e regenerável de uma fonte (código, dado, documento), e vídeo desatualizado passa a ser defeito rastreável"
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "Plataformas de ensino e documentação passam a publicar e indexar a fonte do vídeo junto com os pixels, como o repositório publica o código junto do binário"
                sinal: fraco
                prazo: 2037
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: "Custo de runtime em celular de entrada e fragmentação de runtimes freiam a animação como programa fora dos apps de grande escala"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "As plataformas móveis incorporam um runtime de animação de estado ao sistema, e o formato independente vira dependência do dono da plataforma"
            sinal: fraco
            prazo: 2033
            confianca: baixa
  - disrupcao: "R3 — O vídeo deixa de ser lote que se espera e passa a ser fluxo que se dirige (arquiteturas causais e autoregressivas)"
    efeitos:
      - id: e9
        ordem: 1
        efeito: "Diretores e animadores passam a ajustar trajetória e câmera com o vídeo em execução, e o ciclo gerar-esperar-escolher vira dirigir enquanto roda"
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: "A produção virtual em painel de LED passa a usar fundo gerado ao vivo e responsivo à câmera, e o custo de construir cenário 3D para o painel cai"
            sinal: fraco
            prazo: 2033
            confianca: baixa
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: "O departamento de arte virtual (modeladores de ambiente para motor de jogo) encolhe e vira curadoria de mundos gerados, e estúdios de LED abertos no início da década de 2020 se reposicionam"
                sinal: fraco
                prazo: 2037
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: "Personagens de vídeo gerados em tempo real e em diálogo substituem o avatar pré-renderizado em atendimento, ensino e entretenimento"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: "O vídeo institucional gravado (treinamento, aula) perde para a sessão gerada sob demanda, e o acervo de videoaula vira roteiro mais personagem licenciado"
            sinal: fraco
            prazo: 2033
            confianca: baixa
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: "Professores e apresentadores passam a licenciar a própria figura por contrato de uso sintético limitado no tempo, e sindicatos negociam cláusula de réplica como os dubladores fizeram"
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: "A vantagem em qualidade dirigida se desloca de quem treina o maior modelo para quem busca melhor na inferência, com modelos autoregressivos pequenos vencendo difusão grande"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: "O controle passa a ser feito por busca contra verificador, com a restrição do diretor virando função de pontuação durante a geração, e laboratórios menores competem sem escala de fronteira"
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: "Fornecedores passam a cobrar por orçamento de busca (quanto se paga para satisfazer a restrição), e o grau de controle vira custo variável explícito no orçamento de produção"
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: "O custo de computação por minuto encerra produtos de vídeo generativo de consumo e restringe a geração em tempo real a nicho profissional e a quem integra verticalmente anúncio e jogo"
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: "A geração de vídeo se consolida dentro de quem já tem receita de atenção (plataformas de anúncio e vídeo curto), e o produto independente de vídeo generativo depende de ser comprado"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: "A estética da mídia sintética se concentra nas casas dos integrados verticais, e o grafo aberto vira o reduto da estética divergente, no papel que o cinema independente teve diante dos estúdios"
                sinal: fraco
                prazo: 2040
                confianca: baixa
  - disrupcao: "R4 — A autenticidade deixa de ser inferida do conteúdo e passa a ser atributo assinado (edição regional de vídeo verdadeiro)"
    efeitos:
      - id: e13
        ordem: 1
        efeito: "Redações e agências de notícia passam a publicar vídeo de terceiros só com credencial de captura ou cadeia de custódia documentada, e o vídeo que circula sem origem perde valor editorial"
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: "A testemunha sem câmera assinada (celular de entrada, aparelho antigo, periferia) vira prova de segunda classe, e o vídeo do cidadão comum perde peso diante do institucional"
            sinal: fraco
            prazo: 2031
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: "Movimentos sociais e de direitos humanos passam a depender de intermediários de custódia com aplicativo de captura assinada para que o registro valha, e esses intermediários viram porteiros da prova"
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e13.2
            ordem: 2
            efeito: "A quebra da credencial por captura de tela e por mensageiro mantém o circuito de massa sem proveniência, e a proveniência vira atributo do circuito institucional, não do conteúdo"
            sinal: medio
            prazo: 2030
            confianca: media
      - id: e14
        ordem: 1
        efeito: "Tribunais deixam de presumir a autenticidade de vídeo contestado e passam a exigir laudo ou cadeia de custódia para admiti-lo"
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: "A perícia audiovisual vira gargalo do judiciário, e a parte acusada ganha incentivo para contestar como sintético o vídeo verdadeiro, encarecendo a prova do real"
            sinal: fraco
            prazo: 2033
            confianca: baixa
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: "Polícias e prefeituras trocam câmeras corporais e de vigilância por equipamentos com assinatura de dispositivo, e a proveniência vira item de edital de compra"
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e15
        ordem: 1
        efeito: "Provedores de geração embutem marca legível por máquina e credencial por padrão na saída, porque a rotulagem passou a ser obrigação legal na União Europeia e regra eleitoral no Brasil"
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: "A rotulagem de tudo que a IA alterou substancialmente passa a cobrir quase todo vídeo profissional, porque o controle fino edita tudo um pouco, e o rótulo perde poder informativo como o aviso de cookies"
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: "A regulação migra de rotular o sintético para certificar o não editado, com selo auditado de registro inalterado usado em jornalismo, eleição e seguro"
                sinal: fraco
                prazo: 2039
                confianca: baixa
          - id: e15.2
            ordem: 2
            efeito: "O critério de grau de realismo que separa sátira permitida de deepfake proibido passa a ser litigado peça a peça, porque a mesma ferramenta de controle leva a caricatura ao realismo que se quiser"
            sinal: medio
            prazo: 2030
            confianca: media
```

### 5.1 Os mecanismos que o bloco não carrega

A skill exige, para cada efeito, `porque <pai> faz <mecanismo>`, o sinal justificado por
artefato verificável (0 = fraco, 1–2 = médio, 3+ = forte) e a classe de referência do prazo.
Vai tudo aqui, efeito por efeito.

#### R1

**e1 — o pacote de controle substitui o take.** *Porque* R1 faz a geração aceitar quadro-chave,
trajetória e região como entrada, o que se contrata de quem produz deixa de ser o registro de um
plano e passa a ser o conjunto de restrições que o gera. Sinal **forte**: três artefatos — os modos
Keyframes e Video to Video no Gen-4.5 [1], o "AI Director" multiplano e o Elements com vídeo de
referência no Kling [29], e vagas que pedem "ComfyUI artist or engineer" [14]. Prazo **2030**.
Classe de referência: edição não linear digital — do Avid (1989) a padrão nas emissoras de TV
levou cerca de dez anos; contando das primeiras interfaces de quadro-chave em produto comercial
(2024–2025), a entrega por pacote de controle vira prática corrente em publicidade e VFX por volta
de 2030. Confiança **média**: o mecanismo é direto, mas depende do controle de causa que ainda
falta [1].

**e1.1 — o orçamento migra do set para o grafo.** *Porque* e1 torna o plano filmado opcional para
boa parte das peças, a diária de set deixa de ser o item dominante do orçamento, e a produtora que
vivia dela perde a faixa intermediária: embaixo, o anúncio montado automaticamente a partir de
fotos [33]; em cima, a direção de grafo de alto padrão. **Quem perde:** a produtora média e a
equipe de set (elétrica, maquinária, locação). Sinal **médio**: dois artefatos — a escala da
geração em anúncio na Meta [33] e a expectativa de rotina declarada pelo ComfyUI [14]; nenhum caso
de produtora média fechando por isso foi aberto nesta rodada. Prazo **2033**. Referência:
editoração eletrônica — do PageMaker (1985) ao colapso das casas de fotocomposição, cerca de dez
anos; a partir de 2024–2025, 2033–2035; fica em 2033 porque o anúncio automatizado já está em
escala [33].

**e1.1.1 — âncora licenciada e cachê dividido.** *Porque* e1.1 reduz o set ao que o gerador não
consegue inventar com segurança jurídica — o rosto de quem consente, o gesto de marca, o produto
real —, o set físico passa a ser contratado para capturar âncoras, e o ator recebe diária mais
licença por uso. Teste da causa solta: sem R1 (só prompt), a âncora não serve de nada, porque não
há onde prendê-la; o efeito depende do controle por referência (e3). Sinal **fraco** (inferência;
o precedente de réplica digital em contrato sindical não foi aberto nesta rodada). Prazo **2037**,
**fora da janela do mapa**. Referência: licenciamento de *sample* na música — da prática difundida
(meados dos anos 1980) à liberação de *sample* como rotina contratual passaram-se de cinco a quinze
anos; contando de e1.1 (2033), 2037 é o lado curto da faixa. Confiança **baixa**.

**e1.2 — o grafo vira ativo.** *Porque* R1 põe a qualidade no encadeamento (o grafo) e não na
frase, o encadeamento é o que se reaproveita entre clientes, e passa a ser versionado e vendido
como "look" de casa. Sinal **médio**: um artefato forte — a própria tese de mercado da rodada do
ComfyUI e a vaga especializada [14]. Prazo **2030**. Referência: *presets* e LUTs de cor viraram
produto vendido em cerca de cinco anos depois da popularização da correção de cor digital; o grafo
aberto existe desde 2023 [14]. Confiança **média**.

**e1.2.1 — autoria migra para o grafo.** *Porque* e1.2 concentra o valor no grafo, e porque a
jurisprudência que existe trata do modelo e não da saída — o tribunal inglês decidiu em 04/11/2025
que os pesos do Stable Diffusion "não são cópia infratora" das obras de treino [21] —, a proteção
que os estúdios vão buscar é a do encadeamento de controle. Sinal **fraco**. Prazo **2039**, **fora
da janela**. Referência: proteção de software por direito autoral — da difusão da planilha
(1979–1983) ao litígio que decidiu se a *interface* era protegível (meados dos anos 1990),
cerca de doze anos; de 2030 (e1.2) mais nove a doze, 2039–2042. Confiança **baixa**.

**e2 — o intervalo deixa de ser porta de entrada.** *Porque* R1 propaga um quadro-chave pelo
movimento (EbSynth faz isso até sem IA [27]; o SIGGRAPH 2026 tem trabalho específico de
*in-betweening* sobre animação por quadro-chave, visto só em resultado de busca), a tarefa do
intervalador e do rotoscopista, que era onde o júnior aprendia, vira operação automatizada. Sinal
**médio**: dois artefatos — EbSynth [27] e o levantamento sindical que apontou os cargos de entrada
como os mais expostos [23]. Prazo **2030**. Referência: CGI em longa de animação — de *Toy Story*
(1995) ao abandono do 2D nos grandes estúdios de animação, cerca de dez anos; a automação do
intervalo começa em escala por volta de 2025. Confiança **média**.

**e2.1 — some a formação no trabalho.** *Porque* e2 elimina o degrau em que o júnior praticava
movimento durante anos antes de virar animador-chave, a escassez de seniores aparece com atraso
de uma geração de carreira. Teste da causa solta: sem R1, a terceirização de intervalo para outros
países já tirava esse degrau de alguns estúdios — mas não do ofício inteiro; o efeito continua
específico. Sinal **fraco**. Prazo **2034** (sete a dez anos depois de e2 começar). Confiança
**baixa**.

**e2.1.1 — linhas de aprendiz subsidiadas.** *Porque* e2.1 cria escassez que o mercado não repõe,
estúdios que dependem de animação-chave de qualidade passam a pagar para formar à mão. Sinal
**fraco**. Prazo **2038**, **fora da janela**: a reação institucional vem depois da escassez
visível (2034) e leva ao menos um ciclo de contratação de quatro anos. Confiança **baixa**.

**e3 — a identidade vira o eixo da competição.** *Porque* R1 muda o critério de compra do
profissional — ele já não escolhe o melhor quadro, escolhe o personagem que se mantém entre planos
—, os fornecedores passam a competir em elementos persistentes. Sinal **forte**: três artefatos — o
Elements com vídeo de referência e o AI Director multiplano [29], a referência de personagem e
quadro-chave no Runway [1], e a limitação de "permanência de objeto" que o próprio líder declara
[1]. Prazo **2028**. Referência: a transição de "megapixels" para "qualidade de sistema" nas
câmeras digitais levou cerca de três anos. Confiança **média** (rebaixada na bateria, 7.9).

**e3.1 — gêmeo de produto e elenco sintético.** *Porque* e3 torna o personagem e o produto
reaproveitáveis, eles viram ativo de marca que exige manutenção. Sinal **médio**: um artefato — a
licença de mais de 200 personagens da Disney para a Sora em dezembro de 2025 [16], que durou três
meses. Prazo **2030**. Confiança **média**.

**e3.1.1 — o dono da propriedade opera a própria geração.** *Porque* e3.1 dá valor ao catálogo como
entrada e porque a licença a um provedor geral mostrou risco de contraparte — a Sora foi encerrada
em 24/03/2026 e o acordo com a Disney acabou junto [16][15] —, os donos de catálogo grande passam a
gerar sobre ele por conta própria. Sinal **fraco**. Prazo **2034**. Referência: do licenciamento
de catálogo a um distribuidor de *streaming* (fim dos anos 2000) à retirada do catálogo para
plataforma própria (fim dos anos 2010) passaram-se cerca de dez anos; contando das primeiras
licenças de geração (2025), 2034–2035. Confiança **baixa**.

**e3.2 — a disputa migra do treino para a saída.** *Porque* e3 e o controle por referência fazem a
imitação de rosto e personagem alheio ficar precisa e barata, a queixa deixa de ser "treinaram com
minha obra" e passa a ser "esta peça reproduz meu personagem". Sinal **médio**: dois artefatos — a
notificação à Globo em 09/2026 [30] e o processo de Disney, Universal e Warner contra a Midjourney,
em que a Midjourney tenta obter como os próprios estúdios usam IA [22]. Prazo **2029**. Confiança
**média**.

**e3.2.1 — filtro de semelhança bloqueia paródia.** *Porque* e3.2 transfere o risco para quem
distribui, as plataformas exigem filtro de semelhança na saída; filtro automático não distingue
paródia (que o TSE excluiu do enquadramento [17]) de imitação. Referência: sistemas automáticos de
identificação de direito autoral em vídeo — da implantação a bloqueios documentados de uso
legítimo, de três a cinco anos. Prazo **2032**. Sinal **fraco**. Confiança **baixa**. **Retroação**:
o controle reduz o próprio espaço expressivo da sátira.

**e4 — a suíte de massa captura o grafo (quem captura).** *Porque* R1 põe valor no grafo e o grafo
aberto exige habilidade, plataformas de massa compram a camada de controle e a escondem na
interface: Canva comprou o Cavalry prometendo gratuidade [13]; a Figma comprou a Weavy [14]. Este é
o **ator com incentivo para capturar** a disrupção de R1. Sinal **médio** (dois artefatos). Prazo
**2029**. Referência: a absorção do design gráfico amador por Canva levou de cinco a sete anos
desde o lançamento. Confiança **média**.

**e4.1 — o grafo separa profissional e amador.** *Porque* e4 esconde o grafo na interface de massa
e o expõe só em planos caros, o modo de massa volta a ser prompt e a fronteira de classe do ofício
passa a ser o acesso ao controle. Sinal **fraco**. Prazo **2031**. Confiança **baixa**. Regra de
parada: o filho natural seria "profissional ganha mais" — é o mesmo efeito amadurecendo, não há
troca de ator; parou aqui.

#### R2

**e5 — a microinteração sai com a lógica embutida.** *Porque* R2 põe a máquina de estados dentro do
arquivo [12], o que se entrega do design ao produto é comportamento e não especificação. Sinal
**forte**: três artefatos — o modelo de estados do Rive com runtimes para web, iOS, Android, Flutter,
React Native e Unity [12], o motion procedural do Cavalry com exportação para produção [13], e o
vídeo como código do Remotion [26]. Prazo **2028**. Referência: Lottie — de lançado (2017) a padrão
em apps de grande escala em cerca de quatro anos; a máquina de estados do Rive tem esse perfil a
partir de 2021–2022. Confiança **média** (rebaixada, 7.9: a afirmação original era "o handoff
deixa de existir", forte demais).

**e5.1 — o animador interativo absorve front-end de estado.** *Porque* e5 desloca a lógica de
transição do código para o arquivo, a pessoa que domina o runtime faz o que antes era trabalho de
front-end. Sinal **médio** (um artefato: a própria proposta declarada do Rive [12]). Prazo **2031**.
Confiança **média**.

**e5.1.1 — token de comportamento e acessibilidade de estado.** *Porque* e5.1 faz do estado animado
parte do produto, o sistema de design passa a versioná-lo e a acessibilidade passa a testar
transições. Sinal **fraco** (a entrada de semântica de acessibilidade no runtime do Rive apareceu
só em resumo de busca, 12.6). Prazo **2035**. Referência: *design tokens* — da proposta (meados
dos anos 2010) a especificação estável, cerca de dez anos; contando de 2026, 2035–2036. Confiança
**baixa**.

**e6 — o anúncio vira template e a peça deixa de ser única.** *Porque* R2 transforma a peça em
gerador parametrizado e as plataformas de anúncio têm o dado de cada espectador, cada um recebe uma
variante. Sinal **forte**: a receita de US$ 10 bilhões anualizados passando por ferramentas de
geração de vídeo na Meta [33], o Remotion para lote e personalização [26], e o Kling em receita
[32]. Prazo **2028**. Referência: mídia programática — de 2010 a maioria da compra digital em cerca
de cinco anos; o criativo gerado segue a mesma infraestrutura. Confiança **alta** — é o único
efeito de 1ª ordem de R2 que o §6 manteve alto, porque a infraestrutura de distribuição já existe.

**e6.1 — aprova-se o gerador, não a peça.** *Porque* e6 elimina o arquivo final único, a aprovação
do cliente e do regulador só pode recair sobre o gerador e seus limites. Sinal **médio**: a regra do
TSE que exige de plataformas com mais de 5 milhões de usuários um plano de conformidade — isto é,
aprova o sistema, não o conteúdo [17]. Prazo **2031**. Confiança **média**.

**e6.1.1 — dossiê de gerador.** *Porque* e6.1 desloca a aprovação para o sistema, surge o documento
que o descreve e a auditoria por amostragem. Não é "regulador cria categoria nova" genérico: o ator
nomeado é o órgão de autorregulação publicitária (o CONAR, no Brasil) e as plataformas, e o
mecanismo é a impossibilidade física de revisar todas as variantes. Sinal **fraco**. Prazo **2037**,
**fora da janela**. Referência: da compra programática (2010) à verificação independente de
*brand safety* como exigência padrão, seis a sete anos; de e6.1 (2031), 2037. Confiança **baixa**.

**e6.2 — some o comercial que todos lembram (quem perde).** *Porque* e6 dá a cada um uma variante, a
métrica de campanha que supõe exposição comum perde a unidade, e a memória publicitária
compartilhada encolhe. Quem perde: institutos de pesquisa de *recall*, e o repertório cultural
comum. Sinal **fraco**. Prazo **2035**. Referência: fragmentação da audiência — da recomendação
personalizada em escala (2012) à ausência de "sucesso comum" percebida (fim da década), cerca de
oito anos; a partir de 2028, 2035–2036. Confiança **baixa**. Parada: não há troca de ator depois.

**e7 — o agente de código faz vídeo.** *Porque* R2 põe o vídeo em código e os agentes de código já
têm habilidades instaladas para isso [26], vídeo explicativo passa a ser produzido sem linha do
tempo. Sinal **médio** (um artefato forte). Prazo **2028**. Confiança **média**.

**e7.1 — o vídeo regenerável.** *Porque* e7 deriva o vídeo de uma fonte, quando a fonte muda o vídeo
é renderizado de novo, e vídeo desatualizado vira defeito como teste quebrado. Sinal **fraco**.
Prazo **2031**. Confiança **baixa**.

**e7.1.1 — publica-se a fonte do vídeo.** *Porque* e7.1 faz a fonte valer mais que os pixels,
plataformas de ensino passam a indexá-la. Referência: de ferramentas de caderno computacional
(meados dos anos 2010) a exigência de código junto do artigo em várias revistas, cerca de seis
anos. Prazo **2037**, **fora da janela**. Sinal **fraco**. Confiança **baixa**.

**e8 — retroação: o runtime custa.** *Porque* R2 transfere a renderização para o dispositivo do
espectador, celular de entrada e bateria impõem teto, e runtimes proprietários concorrentes
fragmentam. O Flash é o precedente: runtime de animação dominante que a plataforma removeu (a
recusa no iPhone em 2010, o fim em 2020). Sinal **médio** (um artefato: a própria lista de runtimes
que o Rive precisa manter [12]). Prazo **2030**. Confiança **média**. **Quem bloqueia**: os donos
de plataforma móvel.

**e8.1 — a plataforma absorve o runtime.** *Porque* e8 dá ao dono da plataforma incentivo para
oferecer o seu, o formato independente vira dependência. Sinal **fraco**. Prazo **2033**.
Referência: dez anos do Flash entre auge e remoção. Confiança **baixa**.

#### R3

**e9 — dirigir enquanto roda.** *Porque* R3 gera causalmente em fluxo a 29–40 FPS [5][6], o
operador pode alterar trajetória e câmera no meio da geração. Sinal **médio**: os artefatos são de
laboratório (MotionStream [5], Matrix-Game 3.0 [6]); nenhum caso de diretor usando isso em
produção. Prazo **2031** (empurrado de 2029 na bateria, 7.9). Referência: motor de jogo em
produção de cinema — da maturidade do motor para renderização fotorreal em tempo real (meados da
década de 2010) ao uso em série de TV (2019), cerca de quatro anos; mas o *streaming* de jogos em
nuvem, que é a referência de custo, está há mais de quinze anos abaixo de 10%. Confiança **média**.

**e9.1 — painel de LED com fundo gerado ao vivo.** *Porque* e9 permite gerar fundo que responde à
câmera, a produção virtual troca o cenário 3D modelado por geração. Sinal **fraco**. Prazo **2033**.
Confiança **baixa**.

**e9.1.1 — o departamento de arte virtual encolhe.** *Porque* e9.1 dispensa parte da modelagem de
ambiente, esse ofício vira curadoria, e os estúdios de LED abertos entre 2020 e 2023 se
reposicionam quando o equipamento completa o ciclo de depreciação (cerca de dez anos). Prazo
**2037**, **fora da janela**. Sinal **fraco**. Confiança **baixa**.

**e10 — o personagem de vídeo em diálogo.** *Porque* R3 produz vídeo e áudio num único modelo com
~200 ms de resposta [9], o rosto que responde vira interface. Fronteira: o vínculo afetivo é tema
19; aqui entra a substituição do **vídeo pré-renderizado** por vídeo gerado em diálogo. Sinal
**médio** (rebaixado de forte, 7.9: só um artefato aberto, [9]). Prazo **2029**. Confiança **média**.

**e10.1 — a videoaula gravada perde para a sessão gerada.** *Porque* e10 dá ao vídeo capacidade de
responder, o vídeo institucional gravado perde a vantagem. Sinal **fraco**. Prazo **2033**.
Confiança **baixa**.

**e10.1.1 — cláusula de réplica.** *Porque* e10.1 faz da figura do professor e do apresentador um
insumo reaproveitável, a figura passa a ser licenciada, e categorias negociam limites. Ator
nomeado: no Brasil, o precedente é o movimento Dublagem Viva contra a dublagem por IA na Globo
[31]. Prazo **2034**. Referência: dos primeiros deepfakes populares (2017–2018) a cláusulas de
réplica digital em contrato sindical de atores nos EUA (2023), cerca de cinco anos; de e10.1 menos
o que já está negociado, 2034. Sinal **fraco**. Confiança **baixa**.

**e11 — busca na inferência vence escala.** *Porque* R3 reabre a arquitetura e o espaço discreto do
autoregressivo permite poda e reuso [7], a qualidade dirigida passa a depender de quanto se busca,
não só de quanto se treinou. Sinal **médio**: VAR [3], Infinity [8], o resultado 2B × 12B [7] — três
artigos, mas nenhum produto: médio. Prazo **2029**. Confiança **média**.

**e11.1 — controle por busca contra verificador.** *Porque* e11 permite pontuar candidatos durante a
geração, a restrição do diretor ("o carro sai pela esquerda no quadro 40") vira função de
pontuação, e quem não tem escala de fronteira compete. Sinal **fraco**. Prazo **2031**. Confiança
**baixa**.

**e11.1.1 — preço por orçamento de busca.** *Porque* e11.1 torna o grau de satisfação da restrição
função do cômputo gasto, o fornecedor cobra por esse orçamento. Referência: a cobrança por
"esforço de raciocínio" em modelos de linguagem apareceu cerca de um a dois anos depois da técnica
de cômputo na inferência. Prazo **2033**. Sinal **fraco**. Confiança **baixa**.

**e12 — retroação: o custo encerra produtos.** *Porque* R3 exige cômputo por minuto que o
consumidor não paga, produtos de consumo fecham: a Sora teve app encerrado em 26/04/2026 e API em
24/09/2026, sem substituto indicado [15], com custo operacional relatado de cerca de US$ 1 milhão
por dia e usuários caindo de cerca de um milhão para menos de 500 mil [16]. Sinal **médio** (dois
artefatos, um primário [15], um secundário [16]). Prazo **2028**. Confiança **média**.

**e12.1 — consolidação em quem tem receita de atenção.** *Porque* e12 filtra quem aguenta o custo,
sobrevive quem já tem receita de anúncio ou de vídeo curto: Kling dentro do Kuaishou [32], a
geração dentro da Meta [33]. Sinal **médio**. Prazo **2030**. Confiança **média**.

**e12.1.1 — a estética se concentra.** *Porque* e12.1 põe a maior parte da produção em poucos
modelos com poucas "casas" estéticas, o grafo aberto vira o reduto da divergência. Referência: da
concentração dos estúdios nos anos 1960–70 ao circuito independente institucionalizado (anos 1980),
cerca de quinze anos; de 2030, depois de 2040. Prazo **2040**, **fora da janela**. Sinal **fraco**.
Confiança **baixa**.

#### R4

**e13 — redação só publica o que tem origem.** *Porque* R4 tira da redação a possibilidade de
inferir autenticidade pelo conteúdo (os detectores falham no mundo real [11]), resta a origem
documentada. Sinal **forte**: redações como BBC, Reuters, AP, NYT assinam conteúdo [28]; câmeras de
Leica, Sony, Nikon, Canon e Samsung assinam na captura [28]; e a coalizão C2PA reúne Adobe, BBC,
Google, Meta, Microsoft, OpenAI, Sony e TikTok no comitê diretor [34]. Prazo **2029**. Referência:
cadeado HTTPS — de opcional a maioria das páginas levou cerca de dois anos depois que ficou grátis
e padrão (2015–2017), e mais de vinte antes disso; a assinatura em câmera está na fase cara.
Confiança **média** (rebaixada de alta, 7.9).

**e13.1 — a testemunha sem câmera assinada (quem perde).** *Porque* e13 faz da credencial a porta de
entrada editorial, quem filma com aparelho que não assina perde peso. No Brasil, onde o celular de
entrada é a câmera da maioria, isso atinge primeiro a periferia. Sinal **fraco**. Prazo **2031**.
Confiança **média** — o mecanismo é direto; o que falta é caso.

**e13.1.1 — porteiros da prova.** *Porque* e13.1 exige credencial que o cidadão não tem,
organizações com aplicativo de captura assinada viram intermediárias obrigatórias. Prazo **2035**.
Sinal **fraco**. Confiança **baixa**.

**e13.2 — retroação: a massa fica sem proveniência.** *Porque* mensageiros e captura de tela
removem a credencial [28], o circuito de massa (onde circula a desinformação) continua sem ela, e
proveniência vira atributo do circuito institucional. Sinal **médio** (um artefato). Prazo
**2030**. Confiança **média**. Parada: o filho seria "desinformação continua no WhatsApp" — é o
mesmo efeito.

**e14 — tribunais param de presumir.** *Porque* R4 põe em dúvida qualquer vídeo contestado,
tribunais passam a exigir laudo ou custódia. Sinal **médio**: nos EUA a proposta de regra para prova
gerada por máquina foi devolvida em 06/2026 "junto com a questão dos deepfakes" [20]; no Brasil, a
regra eleitoral prevê parceria com universidade para autenticar e inversão do ônus da prova em
alguns casos [18]. Prazo **2032**. Referência: da difusão do Photoshop (1990) a padrões forenses de
autenticação de imagem digital em uso corrente, de dez a quinze anos; contando dos deepfakes
populares (2017–2018), 2030–2033. Confiança **média**.

**e14.1 — a perícia vira gargalo.** *Porque* e14 exige laudo, e a contestação de vídeo verdadeiro
fica barata, o custo de provar o real sobe. Sinal **fraco** (rebaixado de médio, 7.9: nenhuma fonte
aberta mostra caso). Prazo **2033**. Confiança **baixa**.

**e14.1.1 — proveniência em edital.** *Porque* e14.1 torna caro provar vídeo sem assinatura, quem
compra câmera de vigilância e corporal passa a exigi-la. Referência: câmeras corporais nos EUA —
de gatilho público (2014) a maioria das grandes polícias, dois a quatro anos; no Brasil, compra
pública mais lenta. Prazo **2038**, **fora da janela**. Sinal **fraco**. Confiança **baixa**.

**e15 — marcação por padrão.** *Porque* R4 e a regulação tornam obrigatório marcar a saída — o
Artigo 50 vale desde 02/08/2026, com código de prática final em 10/06/2026 e cerca de 190
signatários [19]; o TSE exige rótulo explícito [17] —, provedores embutem marca e credencial por
padrão. Sinal **forte** (três artefatos). Prazo **2027**. Confiança **alta**.

**e15.1 — contradição: o rótulo perde informação.** *Porque* R1 faz o controle fino editar tudo um
pouco, e a regra rotula o que foi "substancialmente alterado" [17], quase todo vídeo profissional
recebe rótulo, e o rótulo deixa de distinguir. Sinal **fraco**. Prazo **2030**. Confiança **média**.
É convergência de R1 com R4 (5.3).

**e15.1.1 — certificar o não editado.** *Porque* e15.1 esvazia o rótulo do sintético, a informação
que resta útil é o inverso: o que não foi editado. Referência: certificação orgânica — da norma
escrita à segmentação corrente de prateleira, cerca de doze anos; de 2030, 2039–2042. Prazo
**2039**, **fora da janela**. Sinal **fraco**. Confiança **baixa**.

**e15.2 — o grau de realismo em litígio.** *Porque* o TSE separou sátira de deepfake pelo "grau de
realismo" [17] e o controle fino leva a caricatura a qualquer grau, a fronteira vira objeto de
disputa caso a caso. Sinal **médio** (um artefato: a própria tese, decidida por 5 a 2 [17]). Prazo
**2030** (primeiros casos já na eleição de 2026; jurisprudência consolidada nos ciclos de 2028 e
2030). Confiança **média**.

### 5.2 Cobertura: STEEP e quem perde

| Categoria | Efeitos de 1ª ordem |
|---|---|
| Social | e2 (porta de entrada do ofício), e10, e13 |
| Tecnológico | e3, e5, e7, e9, e11 |
| Econômico | e1, e4, e6, e12 |
| Ecológico | **vazio** — o custo energético aparece como mecanismo de e12 (cômputo por minuto), mas nenhum efeito ecológico específico do *controle* passou no teste de especificidade. Registrado, não forçado. |
| Político | e14, e15 |

**Quem perde, nomeado:** produtora média e equipe de set (e1.1); intervalador, rotoscopista e,
depois, o estúdio que precisa de animador-chave (e2, e2.1); a sátira (e3.2.1); o usuário
intermediário do grafo aberto (e4); o instituto de medição de campanha e o repertório comum (e6.2);
o produto independente de vídeo generativo (e12.1); o departamento de arte virtual (e9.1.1); o
cidadão sem câmera assinada (e13.1); quem precisa provar que um vídeo verdadeiro é verdadeiro
(e14.1).

### 5.3 Cruzamentos (§4 da skill)

**Convergência 1 — R1 e R4 chegam ao mesmo ponto: o rótulo que não distingue (e15.1).** O controle
fino faz a edição ser parcial e ubíqua; a regra rotula o "substancialmente alterado". Os dois ramos
juntos esvaziam a categoria "feito com IA". É o achado mais consequente do mapa, porque aponta para
depois de 2036 (e15.1.1): a categoria jurídica relevante passa a ser "registro", não "IA".

**Convergência 2 — R2 e R4 chegam ao mesmo ponto: aprovar o sistema, não o conteúdo.** e6.1 (aprova-
se o gerador, porque não há peça única) e e14/e13 (autentica-se pela origem, porque o conteúdo não
basta) são o mesmo deslocamento: do objeto para o processo que o produziu. O plano de conformidade
exigido pelo TSE de plataformas grandes [17] é a primeira instância das duas convergências ao
mesmo tempo.

**Convergência 3 — R1 e R3 chegam à consolidação (e4 e e12.1).** A suíte de massa captura o grafo
(e4) e quem tem receita de atenção captura a geração (e12.1). Os dois ramos juntos deixam o grafo
aberto como reduto (e12.1.1).

**Retroalimentação — o controle alimenta a desconfiança que alimenta o controle.** e3.2 (imitação
precisa) e e15.1 (rótulo ubíquo) aumentam a desconfiança; a desconfiança exige âncoras licenciadas e
capturadas (e1.1.1) e credencial na captura (e13); âncora e credencial são, elas mesmas, entradas
de controle de R1. O ciclo **reforça** R1 no circuito profissional e **enfraquece** a mídia
sintética no circuito de massa sem proveniência (e13.2).

**Contradição — e6 × e8.** e6 supõe que a peça por variante se generaliza; e8 supõe que o custo de
runtime freia a peça como programa no dispositivo. Os dois coexistem só se a variante for
renderizada no servidor (vídeo pronto por espectador) e não no cliente. O que decide: o custo de
renderização por variante no servidor contra o custo de runtime no cliente. Não resolvido.

**Contradição — e10 × e12.** e10 supõe personagem em tempo real em atendimento e ensino; e12 supõe
que o custo por minuto restringe tempo real a nicho. O que decide: o preço por minuto de vídeo
interativo. Se cair uma ordem de magnitude até 2030, e10 vence; se não, e12.

### 5.4 A regra de parada, aplicada

Parou-se na 2ª ordem em e4.1, e6.2, e8.1, e13.2, e15.2: em cada um, o filho candidato era o pai
"mais adiante", sem troca de ator ou de mecanismo (anotado no mecanismo de cada um). Nenhum ramo foi
estendido para preencher a tabela.

## 6. Sinais fracos e wildcards

### Sinais fracos

**6.1 A instrução desenhada dentro do quadro.** Setas, texto e trajetórias desenhados no próprio
vídeo como sinal de controle, executados por Veo 3.1, Kling 2.5 e Wan 2.2 [10]. Se crescer, a
interface de controle deixa de ser um painel ao lado do vídeo e passa a ser o próprio quadro — o
vocabulário do storyboard vira linguagem de máquina, e R1 fica acessível a quem sabe desenhar e não
sabe usar grafo (enfraquece e4.1). **Sinal observável:** um produto comercial documentar a
instrução no quadro como modo de uso, ou o método aparecer num artigo de conferência de primeira
linha com reprodução independente.

**6.2 Busca na inferência para imagem.** 2B vencendo 12B com busca [7]. Se crescer, a economia da
geração muda de treino para inferência, e laboratórios menores voltam a competir (e11.1).
**Sinal observável:** um modelo aberto pequeno com busca na inferência chegar ao topo de um ranking
público de imagem, ou um fornecedor cobrar explicitamente por "orçamento de busca".

**6.3 Vídeo e voz num modelo só, em diálogo.** Wan-Streamer: 25 FPS, ~550 ms de ponta a ponta [9].
Se crescer, o personagem de vídeo vira interface corrente (e10) e o vídeo institucional gravado
perde (e10.1). **Sinal observável:** uso em atendimento de uma empresa grande com vídeo gerado, não
avatar pré-renderizado.

**6.4 O dono da propriedade processado pede o que o réu faz com IA.** A Midjourney tenta obter dos
estúdios que a processam como eles próprios usam IA; o pedido foi negado em junho de 2026 e está em
revisão [22]. Se for concedido, a disputa de saída (e3.2) ganha um argumento de simetria que muda o
peso dos filtros (e3.2.1). **Sinal observável:** decisão sobre o recurso.

**6.5 A notificação por peça na TV aberta brasileira.** A retirada do comercial da Globo depois de
notificação [30] é o primeiro caso visto nesta rodada de disputa de saída no Brasil. **Sinal
observável:** segunda ocorrência com outra emissora ou agência, ou manifestação do CONAR sobre peça
com imitação sintética de pessoa real.

### Wildcards

**W1 — Um longa de uma pessoa, na competição de um festival de primeira linha.** *Mecanismo:* R1
leva o controle ao ponto em que uma pessoa dirige o que exigia uma equipe; um festival seleciona a
obra pela obra. *Por que é improvável até 2036:* o caso mais próximo aberto nesta rodada, *Critterz*
— orçamento abaixo de US$ 30 milhões, nove meses de produção, equipe reduzida com IA fazendo "boa
parte da animação e do design" [24] —, foi mostrado **aos compradores no mercado de Cannes, não na
seleção oficial** [25]; e ele tem equipe, roteiristas e estúdio, não uma pessoa. *O que faria com o
mapa:* aceleraria e1.1 e e2.1 em dois a três anos e daria a R1 o marco cultural que falta.
*Sinal precoce:* um curta feito por uma pessoa com controle generativo em competição oficial em
Annecy, Clermont-Ferrand ou Sundance.

**W2 — A credencial é quebrada.** *Mecanismo:* uma chave de assinatura de fabricante de câmera ou
de plataforma vaza ou é forjada, e credenciais válidas passam a acompanhar conteúdo falso. *Por que
é improvável em escala:* a arquitetura prevê revogação; o caso de revogação de certificado de uma
câmera que aparece nos resultados de busca não foi aberto nesta rodada (12.6). *O que faria com o
mapa:* R4 perderia o pé técnico, e13 e e14.1.1 cairiam, e a autenticação voltaria a depender de
perícia (e14.1 sobe de ordem). *Sinal precoce:* aviso de revogação em massa da própria C2PA ou de
um fabricante.

**W3 — Um tribunal superior declara inadmissível por padrão o vídeo sem assinatura.** *Mecanismo:*
um caso de alta visibilidade em que vídeo verdadeiro é derrubado como sintético (ou o contrário)
leva uma corte superior a exigir assinatura de dispositivo. *Por que é improvável:* a exclusão
generalizada atingiria todo o acervo de vídeo existente; cortes preferem avaliar caso a caso, como
mostra a devolução da regra americana [20]. *O que faria:* anteciparia e14.1.1 em cerca de cinco anos
e aprofundaria e13.1. *Sinal precoce:* uma decisão isolada de instância inferior com essa tese
sendo citada em outros tribunais.

**W4 — Os pesos abertos fecham.** *Mecanismo:* obrigação legal de responsabilidade pela saída leva
os laboratórios que publicam pesos abertos a parar. *O que faria:* o reduto do grafo aberto
(e12.1.1) não se forma, e4.1 se agrava. *Sinal precoce:* retirada de um modelo de vídeo aberto por
ordem judicial ou regulatória.

## 7. Contra o próprio mapa

A bateria do §6 da skill foi feita sobre a roda já pronta, e alterou a roda. O registro auditável
está em 7.9.

### 7.1 Pré-mortem — é 2036 e este mapa se mostrou errado

1. **O controle não foi o gargalo — a causa foi.** Os produtos ganharam quadro-chave, trajetória e
   região, mas a limitação que a Runway declara [1] (causa antes do efeito, permanência de objeto)
   não foi resolvida, e o profissional continuou filmando o que precisava de física crível. Nesse
   caso, e1 e e1.1 são superestimados e e2 acontece só na animação estilizada. **Ação:** e1.1
   mantido em `media`, mas com a nota; e3 rebaixado de `alta` para `media` porque identidade entre
   planos depende do mesmo problema.
2. **O controle foi absorvido e ninguém percebeu.** A suíte de massa escondeu o grafo (e4), e o que
   a maioria viu foi "o prompt ficou melhor". Isso seria o falseador (b) do autor: a tecnologia não
   rompeu, só melhorou. **Ação:** e4 mantido como captura, e4.1 mantido em `baixa`; declarado em 7.4
   o que sobra se R1 for absorvida.
3. **Proveniência não pegou fora das redações.** O circuito de massa seguiu sem credencial (e13.2),
   e os tribunais seguiram avaliando caso a caso. **Ação:** e13 rebaixado de `alta` para `media`;
   e14.1 rebaixado de sinal `medio` para `fraco`.

### 7.2 Extrapolação linear

- **e6 ("a peça vira template")** é, em parte, extrapolação da mídia programática. O mecanismo não
  linear que o sustenta é a mudança de **unidade**: não é "mais anúncios personalizados", é "não há
  peça única para aprovar" — e daí e6.1 e e6.2, que não existiriam na extrapolação. Mantido.
- **e7 ("agente faz vídeo")** era, na primeira versão, "mais vídeo feito por código" — linear.
  Ganhou o mecanismo de regeneração (e7.1: o vídeo vira derivado de uma fonte). Mantido com
  confiança `media` na 1ª e `baixa` depois.
- **"Todo vídeo vira interativo"** — extrapolação pura de Rive + tempo real. **Removido** (12.3).
- **e12 ("custo encerra produtos")** é o presente projetado (a Sora fechou). O que o salva de ser
  linear é o filho e12.1 (consolidação em quem tem receita de atenção), que é troca de ator.

### 7.3 Velocidade de adoção

- **e9** estava em 2029. A referência que pesa é o jogo em nuvem, abaixo de 10% há mais de quinze
  anos, porque a economia de cômputo por minuto é a mesma. **Empurrado para 2031 (+2 anos).**
- **e5** estava em 2027 com a referência Lottie (quatro anos); contando do Rive com estado em
  2021–2022, o marco de quatro anos já passou sem que o handoff tenha acabado. **Empurrado para 2028
  e rebaixado** (7.9).
- **e10** exige adoção em atendimento em três anos a partir de laboratório (2026); não há
  precedente de interface nova nessa velocidade fora do celular. Mantido em 2029, mas com sinal
  rebaixado e a contradição com e12 declarada (5.3).
- **e15** (2027) exige adoção rápida, mas é obrigação legal já em vigor [19] — velocidade de
  compliance, não de mercado. Mantido.

### 7.4 E se a raiz não se concretizar

- **Sem R1** (o controle fica escondido e o prompt melhora): caem e1, e1.1, e1.2, e2, e4.1.
  Sobrevivem e3 (identidade vira eixo mesmo por prompt) e e3.2 (imitação precisa). R2, R3 e R4
  continuam de pé — R4 apenas perde o mecanismo específico da edição regional e fica com o geral.
- **Sem R2** (o arquivo que toca continua a norma): caem e5–e8. Sobrevivem as convergências de R4.
- **Sem R3** (o tempo real não sai do laboratório): caem e9, e10, e11. e12 **fica mais forte**, não
  mais fraco, porque o custo é o que impede R3. R1 continua por difusão em lote.
- **Sem R4** (a proveniência assinada não pega): caem e13, e14. e15 continua (é lei), e e15.1 fica
  mais forte (o rótulo vira a única informação e perde valor).

Nenhuma raiz derruba o mapa inteiro sozinha: não é uma raiz disfarçada em quatro. A dependência
mais forte é de R4 em relação a R1 (a edição regional), declarada em R4.

### 7.5 Suposição escondida

1. **Cômputo barato o bastante para o profissional, não para o consumidor.** Se cair uma ordem de
   magnitude, e12 cai e e10 vence; se subir (energia, GPU), R3 inteira fica no laboratório.
2. **Modelo aberto continua aberto.** O grafo aberto depende de pesos publicados; W4 é a quebra.
3. **Jurisprudência estável sobre treino.** O mapa assume que a disputa vai para a saída (e3.2)
   porque o treino foi decidido a favor dos provedores no Reino Unido [21]; uma decisão contrária
   nos EUA (Midjourney [22]) inverteria isso.
4. **Plataformas continuam removendo metadados.** e13.2 depende disso; se os mensageiros passarem a
   preservar credenciais, e13.2 cai e e13.1 fica menos grave.
5. **O mercado de publicidade continua a financiar a geração.** A consolidação de e12.1 supõe
   que a receita de anúncio é o que paga o cômputo [33].

### 7.6 Viés do autor

O autor pesquisa computação musical e mídia interativa, e gosta da ideia de animação que responde
— e5 e e5.1 estão aqui, em parte, por isso. Também há simpatia pelo grafo aberto como reduto
(e12.1.1), que é o efeito mais "romântico" do mapa e um dos de menor sinal. As duas foram mantidas, com
confiança `baixa` nos filhos, e ficam nomeadas aqui para quem confrontar o mapa.

### 7.7 Conferência de teto (TMI-0080 · TMI-0081 · TMI-0086)

Horizonte 2036. Faixa do teto: `[2034, 2036]`. Efeitos terminais (sem filhos): 20 — os 15 de 3ª
ordem e cinco de 2ª (e4.1, e6.2, e8.1, e13.2, e15.2).

**Primeira versão (antes da conferência):**

| Faixa | Terminais |
|---|---|
| até 2033 | 5 |
| **2034–2036** | **13** |
| 2037 em diante | 2 |

Treze de vinte no teto — mais da metade, muito acima do gatilho de um quarto da TMI-0086. Re-derivados pela referência
de cada ramo (os valores e as referências estão nos mecanismos em 5.1):

| id | antes | depois | referência |
|---|---|---|---|
| e1.1.1 | 2036 | 2037 | licenciamento de *sample*, 5–15 anos a partir de e1.1 (2033) |
| e5.1.1 | 2034 | 2035 | *design tokens*, ~10 anos da proposta à especificação estável |
| e6.1.1 | 2035 | 2037 | verificação de *brand safety*, 6–7 anos a partir de e6.1 (2031) |
| e7.1.1 | 2035 | 2037 | código junto do artigo, ~6 anos a partir de e7.1 (2031) |
| e9.1.1 | 2036 | 2037 | ciclo de depreciação de estúdio de LED, ~10 anos |
| e11.1.1 | 2034 | 2033 | cobrança por esforço de inferência, 1–2 anos depois da técnica (**antecipado**) |
| e12.1.1 | 2035 | 2040 | concentração de estúdios → circuito independente, ~15 anos |
| e14.1.1 | 2036 | 2038 | câmera corporal, 2–4 anos depois do gatilho, mais compra pública brasileira |
| e15.1.1 | 2036 | 2039 | certificação orgânica, ~12 anos |

Confirmados na faixa: e3.1.1 (2034), e10.1.1 (2034), e6.2 (2035), e13.1.1 (2035) — os quatro têm
referência que cai ali. e5.1.1 saiu de 2034 para 2035 e continua na faixa.

**Depois da conferência:**

| Faixa | Terminais |
|---|---|
| até 2033 | 6 |
| **2034–2036** | **5** |
| 2037 em diante | 9 |

Cinco de vinte: exatamente um quarto, no limite do gatilho. Nove efeitos de 3ª ordem ficam fora
da janela (e1.1.1, e1.2.1, e2.1.1, e6.1.1, e7.1.1, e9.1.1, e12.1.1, e14.1.1, e15.1.1), cada um
declarado no seu mecanismo. O mecanismo do erro foi o mesmo registrado na TMI-0086: o prazo do
filho tinha sido posto "logo antes do horizonte" em vez de somado à data do pai. Um prazo foi
antecipado (e11.1.1), o que mostra que a conferência não é dispositivo para empurrar datas.

### 7.8 Calibração

| Ordem | alta | media | baixa |
|---|---|---|---|
| 1 | 2 | 13 | 0 |
| 2 | 0 | 11 | 9 |
| 3 | 0 | 0 | 15 |

Cai com a ordem. Nenhum efeito de 3ª ordem com confiança alta. Os dois `alta` de 1ª ordem (e6,
e15) têm infraestrutura ou obrigação legal já em vigor.

**Contra os falseadores do autor.** (a) Adoção além da maioria inicial: vale para geração por
prompt (recusada como raiz) e para rotulagem nas plataformas grandes (tratada como efeito, e15);
não vale para nenhuma das quatro raízes. (b) A tecnologia não rompe nada: é o risco real de R1,
declarado em 7.1 (razão 2) e 7.4; a resposta do mapa é que o que rompe não é a qualidade, é a
unidade de trabalho (e1), a porta do ofício (e2) e a presunção de registro (R4).

### 7.9 Registro de alterações

Da bateria (7.1–7.6):

- **e3**: confianca alta → media, porque identidade entre planos depende do controle de causa que
  a própria Runway declara ausente [1] (pré-mortem, razão 1).
- **e5**: texto "o handoff designer-dev deixa de existir" → "deixa de existir nesse nível
  (microinteração)"; confianca alta → media; prazo 2027 → 2028 (velocidade de adoção).
- **e9**: prazo 2029 → 2031, porque a referência de custo (jogo em nuvem) nunca passou de 10% em
  quinze anos.
- **e10**: sinal forte → medio, porque só um artefato foi aberto [9].
- **e13**: confianca alta → media (pré-mortem, razão 3).
- **e14.1**: sinal medio → fraco, porque nenhuma fonte aberta mostra caso real de contestação de
  vídeo verdadeiro como sintético; confianca media → baixa.
- **e7**: ganhou o filho e7.1 como mecanismo de não linearidade (extrapolação linear).
- **removido**: "todo vídeo vira interativo" (R2, 1ª ordem) — extrapolação linear, vai para 12.3.
- **removido**: "surge a profissão de diretor de grafo" (R1, 2ª ordem) — efeito proibido sem ator
  e mecanismo específicos; a parte com mecanismo virou e1.2 (o grafo como ativo). Vai para 12.3.
- **removido**: "detectores de deepfake melhoram e resolvem o problema" (R4, 1ª ordem) — contradiz a
  fonte aberta [11]. Vai para 12.3.
- **removido**: "o custo de energia da geração vira pauta ambiental da publicidade" (R3, 1ª ordem)
  — falha no teste da causa solta: aconteceria com qualquer geração, controlável ou não. 12.3.

Da conferência de teto (7.7), conforme TMI-0080/0081/0086: e1.1.1 2036 → 2037; e5.1.1 2034 → 2035;
e6.1.1 2035 → 2037; e7.1.1 2035 → 2037; e9.1.1 2036 → 2037; e11.1.1 2034 → 2033; e12.1.1 2035 →
2040; e14.1.1 2036 → 2038; e15.1.1 2036 → 2039.

Cota por raiz: R1 (e3 rebaixado; um removido), R2 (e5 rebaixado; um removido), R3 (e9 empurrado,
e10 rebaixado; um removido), R4 (e13 e e14.1 rebaixados; um removido). Cumprida.

## 8. O que a máquina errou

Eu sou a máquina. O que segue é sobre o meu trabalho nesta rodada, com o motivo da desconfiança
e o que foi feito.

1. **Prêmio que eu ia aceitar de um blog.** A primeira página que afirmava "VAR, melhor artigo do
   NeurIPS 2024" era um texto no Medium. O enunciado do tema também afirma isso, mas o enunciado
   não é fonte. Abri o blog oficial do NeurIPS [2], que confirma: é um dos dois melhores artigos
   da trilha principal. Sem essa abertura, a afirmação teria entrado apoiada em fonte secundária.
2. **Um número de receita lido como coisa que não é.** O resumo de busca dizia que as ferramentas
   de vídeo da Meta "faturavam US$ 10 bilhões". Baixei a transcrição da teleconferência [33] e a
   frase é "a receita anualizada combinada das ferramentas de geração de vídeo". A leitura mais
   provável é receita de anúncio que passa por essas ferramentas, não venda de ferramenta — e o
   texto (3.1) diz isso. Quase escrevi que a Meta "vende US$ 10 bilhões de vídeo gerado".
3. **Estreia em Cannes que não aconteceu.** Três resultados de busca diziam que *Critterz*
   "estrearia em Cannes". A página aberta [25] diz que ele foi mostrado a compradores no mercado,
   com agente de vendas internacional. O wildcard W1 foi reescrito com isso; antes, o rascunho o
   tratava como "quase aconteceu".
4. **Uma fonte que eu deixei de usar por um detalhe.** O rastreador de adoção de C2PA [28] afirma
   que a Apple anunciou assinatura no "iOS 20" para o outono de 2026. A Apple mudou a numeração do
   sistema para o ano (iOS 26) em 2025 — "iOS 20" não é um nome plausível. Usei a página só para o
   que ela diz sobre mensageiros, captura de tela e redações, e **não usei nada que ela diz sobre
   Apple e Pixel**. A confiabilidade da página inteira fica rebaixada na seção 11.
5. **Números que vieram só da busca e quase entraram.** "ARR do Kling perto de US$ 500 milhões",
   "Rive levantou US$ 14 milhões e tem 75 funcionários", "4 milhões de anunciantes usam as
   ferramentas generativas da Meta", "Remotion Skills com 126 mil instalações", "Kling 3.0 lançado
   em março de 2026". Nenhum desses está em página que eu abri e li. Estão em 12.6, fora do corpo
   (TMI-0114).
6. **A data de "antes" da conferência de teto.** Os valores "antes" da tabela de 7.7 são os do meu
   rascunho de planejamento, que não foi gravado em disco antes da conferência. São o que eu de
   fato tinha escrito, mas não há arquivo que prove. Registro para que ninguém tome a tabela
   por auditoria de versão salva.
7. **Duas regras do TSE que eu estava fundindo.** A matéria do Senado [18] é de março de 2026
   (regras gerais de IA na campanha); a decisão sobre o que é deepfake é de 01/09/2026 [17]. O
   primeiro rascunho da nota Brasil atribuía à decisão de setembro a inversão do ônus da prova, que
   está na regra de março. Separado em 3.5.
8. **Projeção lida como medida.** O "204 mil empregos disrompidos" do estudo da Animation Guild
   [23] é **projeção** de 300 gestores entrevistados no fim de 2023, não contagem de empregos
   perdidos. Usei o estudo só para a exposição relativa dos cargos de entrada, e digo isso em e2.
9. **O mapa anterior do mesmo tema.** Antes de pesquisar, li a lista de fontes do mapa deste tema
   em horizonte 2031 (outra rodada da mesma bateria), como pista de onde procurar. Pela TMI-0017,
   nenhum número migrou de lá: todo número deste documento vem de página reaberta nesta rodada e
   está na seção 11. O risco que fica é de **enquadramento** herdado — as raízes R1–R3 se parecem
   com as de lá. A diferença deliberada está em R4 e em 12.10.
10. **Plausível com mecanismo fraco.** e11.1.1 ("preço por orçamento de busca") soa bem e tem
    mecanismo razoável, mas a referência (cobrança por esforço de raciocínio em modelo de
    linguagem) é analogia entre mercados diferentes, não caso comparável. Fica com `confianca:
    baixa` e é o candidato mais provável a sair numa revisão.

## 9. Três cenários para 2036

### Provável — "dirigido no estúdio, sorteado no feed"

Em 2036 quem produz mídia profissionalmente trabalha sobre pacotes de controle: um diretor de
publicidade entrega quadros-chave, trajetórias e um grafo, e o set físico é chamado para capturar o
rosto licenciado e o produto real. A animação estilizada abandonou o intervalo feito à mão, e os
estúdios começam a sentir falta de animadores-chave. As suítes de massa esconderam o grafo atrás de
botões; o grafo aberto continua existindo, usado por quem precisa de controle fino e aceita o risco
jurídico. O vídeo em tempo real é corrente em jogo e em alguns atendimentos, mas caro demais para
virar consumo de massa; a geração se concentrou em quem vende anúncio. Redações só publicam vídeo
de terceiros com origem documentada; mensageiros seguem sem credencial, e é lá que circula o que
engana. Quase todo vídeo profissional carrega o rótulo "feito com IA", e o rótulo já não informa
nada. **Sinal precoce de que estamos entrando nele:** até 2029, as vagas que pedem domínio de grafo
de geração crescem mais rápido que as vagas de operação de câmera em produtoras de publicidade, e
um mensageiro de massa segue removendo credenciais.

### Desejável — "a origem é de quem filmou"

Em 2036 a assinatura na captura chegou ao celular de entrada, e a credencial sobrevive ao
mensageiro. O cidadão que filma na periferia tem o mesmo peso de prova que a emissora. A regulação
passou a distinguir "registro não editado" de "edição dirigida", e o rótulo voltou a informar. O
grafo aberto continua aberto, e a formação em animação trocou o intervalo por direção de
quadro-chave e de movimento, mantendo linhas de aprendiz em que se anima à mão. A âncora
licenciada paga o ator por uso, com prazo. **O que teria de ser feito:** exigir, na compra pública
e no padrão de mensageiro, preservação de credencial; financiar assinatura em hardware de entrada;
escrever a regra de "registro inalterado" antes da de "tudo que a IA tocou". **Sinal precoce:** um
mensageiro de massa anunciar preservação de credencial C2PA, ou um fabricante de celular de
entrada vendido no Brasil assinar na captura.

### Indesejável — "indistinguível e sem porteiro"

Em 2036 a edição regional de vídeo verdadeiro é trivial, a assinatura ficou restrita a câmeras
caras e a redações, e os tribunais, sem norma, aceitam ou recusam vídeo pelo prestígio de quem o
apresenta. O vídeo do cidadão comum não vale como prova; o vídeo institucional vale mesmo quando
editado. A sátira política foi bloqueada por filtros de semelhança nas plataformas, e a decisão
sobre "grau de realismo" virou arma de campanha. A geração ficou em três ou quatro empresas, e a
estética da imagem em movimento ficou parecida em todo lugar. **Sinal precoce:** nas eleições de
2026 ou 2028, um vídeo verdadeiro de candidato ser derrubado como deepfake sem perícia, ou uma
chave de assinatura de fabricante ser forjada (W2).

## 10. O experimento

### O que é

**Três graus de controle e um vídeo verdadeiro.** Duas partes, montáveis em sala com ferramentas
de 2026.

**Parte A — o custo de dirigir.** A turma recebe uma especificação fechada de um plano de oito
segundos de uma peça publicitária fictícia, com dez restrições verificáveis (ex.: "o objeto entra
pela esquerda no primeiro segundo", "a câmera faz *dolly in* e para no quinto", "a cor do produto
não muda", "o logotipo é legível no último quadro"). Três grupos tentam cumprir a mesma
especificação por três caminhos:

1. **Só prompt** num gerador comercial (o caso maduro, controle).
2. **Controle explícito**: quadro inicial e final, trajetória pintada e máscara de região — num
   gerador comercial com esses modos ou num grafo do ComfyUI com um modelo aberto que aceite
   quadro-chave.
3. **Peça como programa**: a mesma especificação em Remotion (código escrito por um agente, com as
   *Agent Skills* [26]) ou numa máquina de estados do Rive [12], sem geração por difusão.

Mede-se: número de iterações até cumprir as dez restrições (ou desistir em 30 iterações), tempo de
relógio, quantas restrições cada caminho cumpriu, e quantas vezes uma iteração **desfez** uma
restrição que já estava cumprida (a "roleta" de que fala o ComfyUI [14]).

**Parte B — a região editada.** Um grupo filma, com celular, doze clipes curtos verdadeiros do
próprio campus. Em seis deles, uma região é alterada com uma ferramenta de edição regional de
vídeo (máscara + vídeo-para-vídeo): um objeto trocado, um texto mudado numa placa, uma pessoa
retirada. O resto da turma assiste aos doze, na ordem sorteada, e marca (a) se houve edição e (b)
onde. Um dos clipes editados é refilmado com uma câmera ou aplicativo que assine na captura, e
discute-se o que a credencial prova e o que não prova.

### Que pergunta sobre o futuro ele responde

A Parte A testa **R1**: se o controle explícito reduz de fato o custo de dirigir, ou se a
limitação está em outro lugar (causa, física). A Parte B testa o mecanismo específico de **R4**: se
a edição regional em vídeo verdadeiro é detectável a olho por quem sabe que pode haver edição.

### Que tecnologia emergente usa, e por que não dá com a madura

Quadro-chave, trajetória e máscara em geração (R1), vídeo como código com agente (R2) e edição
regional de vídeo real (R4) estão entre produto de nicho e adoção precoce. O caminho maduro — prompt
simples — é o grupo de controle, e existe no experimento justamente para ser comparado. Sem os
caminhos 2 e 3, a pergunta "o controle muda o trabalho?" não tem com o que ser respondida.

### O que a turma faz quando testar

Na aula de teste, cada grupo mostra suas iterações lado a lado (não só o resultado final),
e a turma preenche a planilha de restrições cumpridas de cada grupo sem saber qual caminho gerou
qual clipe. Depois, a Parte B é aplicada à turma inteira, e o resultado é discutido contra e13,
e13.1 e e15.1.

### O resultado que me faria mudar de ideia

- Se o caminho 2 **não reduzir em pelo menos um terço** o número de iterações do caminho 1, ou se
  a maior parte das restrições não cumpridas for de causa e física em todos os caminhos, R1 está
  superestimada: o gargalo não é o controle, é a causa (pré-mortem, razão 1), e e1, e1.1 e e2 caem
  uma ordem de confiança.
- Se a turma **acertar a região editada em mais de 80%** dos clipes editados, o mecanismo
  específico de R4 (a edição regional como o caso indetectável) é fraco nesta escala, e R4 fica
  apoiada só na geração em geral — o que a aproxima de uma tendência antiga com nome novo.
- Se o caminho 3 cumprir a especificação com menos iterações que o 2, R2 é mais forte do que o
  mapa diz, e e5–e7 sobem de confiança.

## 11. Fontes

Trinta e cinco fontes, todas abertas e lidas em 22/09/2026. Todas responderam 200 ao método do
verificador em teste prévio (duas tentativas cada), por isso nenhuma foi deslocada para o anexo.
As páginas que tentei abrir e não abriram estão em 12.5 e não entram aqui.

### Produto, ferramenta e mercado

1. `https://runway.com/research/introducing-runway-gen-4.5` — anúncio do Gen-4.5 (01/12/2025).
   Sustenta os modos Keyframes e Video to Video, os 1.247 Elo e os concorrentes, e as três
   limitações declaradas (causa, permanência, viés de sucesso). **Confiabilidade:** alta para a
   especificação e para as limitações (a empresa admite o que falta); baixa para o ranking como
   comparação, que é escolha da empresa.
2. `https://blog.neurips.cc/2024/12/10/announcing-the-neurips-2024-best-paper-awards/` — blog
   oficial da conferência. Sustenta que o VAR é um dos dois melhores artigos da trilha principal do
   NeurIPS 2024. **Confiabilidade:** alta — fonte primária do prêmio.
12. `https://rive.app/blog/how-state-machines-work-in-rive` — blog do Rive (26/06/2025). Sustenta a
    definição de máquina de estados, as entradas, os *listeners* e o argumento contra o handoff.
    **Confiabilidade:** alta para o funcionamento; é texto da empresa sobre o próprio produto.
13. `https://www.cgchannel.com/2026/02/canva-acquires-next-gen-motion-graphics-tool-cavalry/` —
    compra do Cavalry pela Canva (25/02/2026). Sustenta a data, a promessa de gratuidade, o preço do
    Pro, a descrição procedural e a relação com Affinity. **Confiabilidade:** alta — imprensa
    técnica especializada citando a empresa.
14. `https://techcrunch.com/2026/04/24/comfyui-hits-500m-valuation-as-creators-seek-more-control-over-ai-generated-media/`
    — rodada do ComfyUI. Sustenta US$ 30 milhões a US$ 500 milhões, os investidores, os 4 milhões de
    usuários (declarados), as vagas "ComfyUI artist or engineer", a Weavy comprada pela Figma e as
    frases do CEO sobre "60% – 80%" e o "cassino". **Confiabilidade:** alta para a rodada; média
    para o número de usuários, que é declaração da empresa.
15. `https://developers.openai.com/api/docs/deprecations` — depreciações da OpenAI. Sustenta
    notificação em 24/03/2026, fim em 24/09/2026, os modelos afetados e a ausência de substituto.
    **Confiabilidade:** alta — registro do fornecedor.
16. `https://en.wikipedia.org/wiki/Sora_%28text-to-video_model%29` — verbete da Sora (parênteses do
    endereço codificados como `%28`/`%29`, porque o verificador corta a URL no parêntese; é a mesma página). Sustenta a
    cronologia (Sora 2 em 30/09/2025; acordo Disney em 12/2025; encerramento anunciado em
    24/03/2026; app até 26/04/2026) e os números relatados de custo (~US$ 1 milhão/dia) e de usuários
    (~1 milhão para <500 mil). **Confiabilidade:** média — enciclopédia colaborativa; os números são
    relato de imprensa reproduzido, e as páginas de Variety e Deadline que os trariam não abriram
    (12.5).
26. `https://www.remotion.dev/docs/ai/skills` — documentação do Remotion. Sustenta as *Agent Skills*,
    o comando de instalação e os agentes compatíveis. **Confiabilidade:** alta para o que o produto
    faz.
27. `https://ebsynth.com/` — página do EbSynth. Sustenta que a propagação é síntese de textura e não
    IA, e os preços. **Confiabilidade:** alta para o método e o preço; média para os créditos
    exibidos (vitrine, sem vínculo formal).
29. `https://kling.ai/blog/best-ai-video-generator-2026-kling-ai` — blog do Kling. Sustenta o "AI
    Director" com seis planos, o Elements 3.0 com vídeo de referência, a sincronia labial em cinco
    línguas e a renderização de texto. **Confiabilidade:** média — marketing do fabricante; usado só
    para a descrição de recursos, não para comparação.
32. `https://kr-asia.com/pulses/163696` — resultado do Kuaishou no Q2 2026. Sustenta a receita do
    Kling acima de RMB 850 milhões e o crescimento acima de 200%. **Confiabilidade:** média-alta —
    imprensa de negócios reproduzindo o comunicado trimestral; o comunicado oficial não abriu
    (12.5).
33. `https://s21.q4cdn.com/399680738/files/doc_financials/2025/q4/META-Q4-2025-Earnings-Call-Transcript.pdf`
    — transcrição oficial da teleconferência da Meta, Q4 2025. Sustenta a frase sobre US$ 10 bilhões
    de receita anualizada combinada das ferramentas de geração de vídeo e o crescimento quase 3×
    maior que o total de anúncios. **Confiabilidade:** alta — documento primário da empresa;
    interpretação da frase discutida em 8.2.

### Pesquisa — controle, arquitetura, tempo real, detecção

3. `https://arxiv.org/abs/2404.02905` — VAR (Tian et al., 03/04/2024). Sustenta FID 18,65 → 1,73,
   IS 80,4 → 350,2, ~20× mais rápido, correlação ~−0,998 e generalização sem treino para edição.
   **Confiabilidade:** alta — artigo premiado, código aberto.
4. `https://arxiv.org/abs/2507.16869` — *Controllable Video Generation: A Survey* (Ma et al., v1
   22/07/2025, v3 19/01/2026). Sustenta a insuficiência do prompt e a taxonomia de condições.
   **Confiabilidade:** alta — levantamento do campo feito pelo campo.
5. `https://arxiv.org/abs/2511.01266` — MotionStream (Shin et al., ICLR 2026). Sustenta latência
   abaixo de 1 s, até 29 FPS em uma GPU, duas ordens de magnitude, trajetória, câmera e transferência
   de movimento, e o diagnóstico do problema anterior. **Confiabilidade:** alta — aceito em
   conferência de primeira linha.
6. `https://arxiv.org/abs/2604.08995` — Matrix-Game 3.0 (04/2026). Sustenta 720p a até 40 FPS,
   memória em sequências de um minuto, controle por vídeo, pose, ação e prompt. **Confiabilidade:**
   média-alta — preprint recente, números dos autores.
7. `https://arxiv.org/abs/2510.16751` — *Visual Autoregressive Models Beat Diffusion Models on
   Inference Time Scaling* (Riise, Kaya, Papadopoulos, 10/2025). Sustenta 2B AR > 12B difusão com
   *beam search* e a explicação pelo espaço discreto. **Confiabilidade:** média-alta — preprint.
8. `https://arxiv.org/abs/2412.04431` — Infinity (Han et al., ByteDance). Sustenta GenEval 0,62 →
   0,73, 0,8 s por imagem 1024², 2,6× mais rápido que SD3-Medium, 66% de vitória. **Confiabilidade:**
   média-alta — números dos autores.
9. `https://arxiv.org/abs/2606.25041` — Wan-Streamer v0.1 (06/2026). Sustenta 25 FPS, ~200 ms de
   resposta, ~550 ms de ponta a ponta e o modelo único para texto, áudio e vídeo.
   **Confiabilidade:** média — preprint muito recente, sem reprodução independente.
10. `https://arxiv.org/abs/2511.19401` — *In-Video Instructions* (Fang, Ma, Wang, 24/11/2025).
    Sustenta a instrução desenhada no quadro, testada em Veo 3.1, Kling 2.5 e Wan 2.2.
    **Confiabilidade:** média — preprint de três autores.
11. `https://arxiv.org/abs/2510.16556` — *Fit for Purpose? Deepfake Detection in the Real World*
    (Lin et al., 10/2025). Sustenta a falha de generalização de detectores acadêmicos,
    governamentais e comerciais sobre deepfakes políticos reais, e a vulnerabilidade do vídeo.
    **Confiabilidade:** média-alta — preprint com avaliação sobre dado real.

### Proveniência, regulação e prova

17. `https://www.em.com.br/mundo-corporativo/2026/09/7502136-tse-esclarece-regras-sobre-deepfake-nas-eleicoes-de-2026.html`
    — cobertura da decisão do TSE de 01/09/2026. Sustenta o placar de 5 a 2, a definição, as
    exclusões, a regra de 72 h/24 h mesmo com rótulo, o rótulo com a tecnologia usada e os planos
    de conformidade de plataformas com mais de 5 milhões de usuários. **Confiabilidade:** média-alta —
    a página do próprio TSE devolveu 403 (12.5), e esta cobertura entra por ela, como manda a
    TMI-0115; está a um passo da fonte primária.
18. `https://www12.senado.leg.br/verifica/materias-especiais/2026/inteligencia-artificial-nas-eleicoes-veja-o-que-ficou-decidido-pelo-tse`
    — Senado Verifica (06/03/2026). Sustenta as regras gerais de IA na campanha: rótulo, proibição
    de 72 h/24 h, parceria com universidades para autenticar, inversão do ônus da prova em alguns
    casos. **Confiabilidade:** alta — órgão público resumindo resolução.
19. `https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content` —
    Comissão Europeia. Sustenta as datas dos rascunhos (17/12/2025, 03/03/2026), o código final
    (10/06/2026), a aplicação do Artigo 50 em 02/08/2026, a estrutura em duas seções e os ~190
    signatários. **Confiabilidade:** alta — fonte primária.
20. `https://www.proskauer.com/blog/machine-generated-evidence-challenges-the-federal-rules-inside-the-contested-proposed-federal-rule-of-evidence-707`
    — escritório de advocacia sobre a proposta de Regra 707. Sustenta o conteúdo da proposta, o
    período de comentários e a devolução pelo comitê em 03–04/06/2026 "junto com a questão dos
    deepfakes". **Confiabilidade:** média-alta — análise jurídica de escritório, com datas
    verificáveis.
21. `https://www.lw.com/en/insights/getty-images-v-stability-ai-english-high-court-rejects-secondary-copyright-claim`
    — Latham & Watkins sobre Getty v. Stability (04/11/2025). Sustenta que os pesos "não são cópia
    infratora" e o que foi abandonado pela Getty. **Confiabilidade:** média-alta — escritório de
    advocacia; decisão verificável.
22. `https://www.theartnewspaper.com/2026/07/09/midjourney-demands-hollywood-AI-secrets` — processo
    de Disney, Universal e Warner contra a Midjourney; pedido de revelação do uso de IA dos estúdios,
    negado em junho e em revisão. **Confiabilidade:** média-alta — imprensa especializada.
28. `https://editorsweblog.org/2026/04/12/c2pa-adoption-tracker-platforms-content-credentials-2026`
    — rastreador de adoção de C2PA. Sustenta que mensageiros e e-mail removem a credencial, o
    problema da captura de tela, redações que assinam e câmeras que assinam. **Confiabilidade:**
    **baixa-média** — contém uma afirmação implausível sobre a Apple (8.4); usada só para o que é
    corroborado pelo comitê diretor da C2PA [34] ou é observação de funcionamento.
34. `https://c2pa.org/` — coalizão C2PA. Sustenta a definição, os membros do comitê diretor e a
    versão 2.3 da especificação. **Confiabilidade:** alta — fonte primária.

### Trabalho, cinema e Brasil

23. `https://www.cartoonbrew.com/tech/union-study-says-generative-ai-will-disrupt-204000-jobs-three-years-237495.html`
    — estudo encomendado pela Animation Guild e outros (CVL Economics, 300 gestores, 11–12/2023).
    Sustenta as projeções e a exposição relativa dos cargos. **Confiabilidade:** média — projeção de
    gestores, não medida (8.8).
24. `https://www.cartoonbrew.com/feature-film/critterz-ai-feature-openai-cannes-254237.html` —
    *Critterz*. Sustenta orçamento abaixo de US$ 30 milhões, nove meses, produtoras e a divisão de
    trabalho humano e IA. **Confiabilidade:** média-alta — imprensa especializada em animação, com
    posição crítica declarada.
25. `https://nerdbot.com/2026/05/04/critterz-an-ai-animated-film-at-cannes/` — *Critterz* no mercado
    de Cannes, com agente de vendas. Sustenta que foi mercado, não seleção. **Confiabilidade:**
    média — site de entretenimento; a cobertura da Deadline não abriu (12.5).
30. `https://rollingstone.com.br/entretenimento/globo-recebe-notificacao-extrajudicial-apos-comercial-com-imagens-de-atores-de-hollywood-geradas-por-ia/`
    — comercial da Globo retirado (02/09/2026). Sustenta os apresentadores, os personagens, a
    notificação e a retirada. **Confiabilidade:** média — a revista cita outro veículo para a
    notificação; a Globo não comentou.
31. `https://www.terra.com.br/diversao/entre-telas/series/globo-usa-ia-em-vozes-de-serie-e-gera-protesto-de-dubladores,29ab19da2ceae9ed9b24a9db595959c0q60flv1e.html`
    — dublagem por IA em série documental (2024) e o protesto do Dublagem Viva. **Confiabilidade:**
    média-alta — portal de notícias, com a posição das duas partes.
35. `https://www.camara.leg.br/noticias/1140392-camara-comeca-a-discutir-projeto-que-regulamenta-a-inteligencia-artificial-no-brasil/`
    — Agência Câmara (14/03/2025). Sustenta o conteúdo do PL 2338 sobre remuneração e usos livres.
    **Confiabilidade:** alta para o conteúdo do texto; **desatualizada** para o estado da tramitação.

## 12. Anexo — o levantamento bruto

### 12.1 Saída do verificador

Rodado sobre o documento final, com `--links`. Saída colada inteira abaixo.

Comando: `python3 futurizacao-giordano/references/verificar.py rodadas/giordano-h2036/12-midia-sintetica-controlavel-video-e-imagem/tendencia-midia-sintetica-controlavel-video-e-imagem.md --links`, em 22/09/2026.

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 15 (frontmatter diz 15)
efeitos ordem 2: 20 (frontmatter diz 20)
efeitos ordem 3: 15 (frontmatter diz 15)
prazo > horizonte (2036) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 9 [('e1.1.1', 2037), ('e1.2.1', 2039), ('e2.1.1', 2038), ('e6.1.1', 2037), ('e7.1.1', 2037), ('e9.1.1', 2037), ('e12.1.1', 2040), ('e14.1.1', 2038), ('e15.1.1', 2039)]
confiança ordem 1: alta 2 · media 13 · baixa 0
confiança ordem 2: alta 0 · media 11 · baixa 9
confiança ordem 3: alta 0 · media 0 · baixa 15
links da seção 11: 35/35 respondem (frontmatter diz fontes: 35)
RESULTADO: ok
```

**A primeira execução com `--links` fechou em `1 problema(s)`**, com `34/35` e a linha `link não responde: https://en.wikipedia.org/wiki/Sora_(text-to-video_model` — o verificador corta a URL no parêntese de fechamento (a classe de caracteres exclui `)`), e a URL truncada dá 404. Não era link morto: a página respondia 200. A correção foi codificar os parênteses (`%28`/`%29`) na fonte 16, o que aponta para a mesma página; nenhuma fonte foi retirada nem trocada. A saída acima é a da segunda execução, sobre o documento final.

**Duas conferências que o verificador não faz** (TMI-0125): a declaração de horizonte 2031 está em 12.10, e a conferência de teto em 7.7. **Os nove efeitos de 3ª ordem fora da janela** estão declarados, um a um, nos mecanismos de 5.1 e listados em 7.7.

### 12.2 Premissas assumidas (o que o briefing não cobria)

- **Data de referência** do "hoje": 22/09/2026, do relógio da máquina.
- **"Comum em produto de massa"** foi lido como: disponível por prompt simples nas plataformas de
  anúncio e vídeo curto de maior audiência. Por isso a geração por prompt foi recusada e o controle
  fino não.
- **Público "quem projeta mídia e interação"** foi lido como incluindo publicidade, animação,
  motion design, interface e jornalismo visual — e excluindo produção musical (tema 13).
- **Fronteira com o tema 19**: o personagem de vídeo em diálogo (e10) entra pela troca do vídeo
  pré-renderizado, não pelo vínculo.
- **Nota Brasil**: tratada como subseção de 3 e como mecanismo em e13.1, e10.1.1, e15.2 — não como
  recorte separado da roda.
- **Profundidade de três ordens** foi respeitada; cinco ramos param na 2ª por regra de parada.

### 12.3 Efeitos cortados na bateria da §7

1. **"Todo vídeo vira interativo"** (R2, 1ª ordem). Extrapolação linear de Rive + tempo real; não
   passa no teste de especificidade. Sobrou como e5 (microinteração) e e10 (personagem em diálogo).
2. **"Surge a profissão de diretor de grafo"** (R1, 2ª ordem). Efeito da lista proibida ("surge uma
   nova profissão") sem ator e sem mecanismo específicos. A parte que tinha mecanismo virou e1.2.
3. **"Detectores de deepfake melhoram e resolvem o problema"** (R4, 1ª ordem). Contradiz a única
   avaliação sobre dado real aberta [11]. Removido; é o oposto do mecanismo de R4.
4. **"O custo energético da geração vira pauta ambiental da publicidade"** (R3, 1ª ordem). Falha
   no teste da causa solta: aconteceria com geração não controlável. Deixa a categoria Ecológica
   vazia, declarada em 5.2.
5. **"Cursos de animação reorganizam o currículo"** (R1, 2ª ordem, rascunho). Efeito proibido sem
   ator; substituído por e2 (a porta de entrada do ofício) e e2.1 (formação no trabalho).
6. **"A publicidade perde empregos"** (R1, 1ª ordem, rascunho). Genérico ("mudanças no mercado de
   trabalho"); substituído por e1.1, com o ator (produtora média, equipe de set) e o mecanismo
   (a faixa intermediária espremida).
7. **"Vídeo sintético barato inunda as redes"** (R3, 1ª ordem, rascunho). Não deriva do controle
   (teste da causa solta) e já é o presente; não entrou.

### 12.4 Candidatos a raiz recusados, com o registro da recusa

- *Candidato "vídeo e imagem por prompt" recusado como raiz: adoção em maioria entre anunciantes
  das grandes plataformas desde 2025; tratado como contexto na seção 3.*
- *Candidato "upscaling e realce" recusado como raiz: melhoria sustentadora (Christensen).*
- *Candidato "arquitetura autoregressiva (VAR) isolada" recusado como raiz: sozinha, faz o mesmo
  mais rápido; absorvida em R3 pelo que habilita (fluxo causal, busca na inferência).*
- *Candidato "rotulagem de conteúdo sintético" recusado como raiz: resposta regulatória em
  maioria nas plataformas grandes; tratada como efeito e15.*
- *Candidato "todo vídeo vira interativo" recusado como raiz: sem mecanismo nem especificidade.*
- *Candidato "C2PA" como produto recusado como raiz* — raiz é ruptura, não produto: a ruptura é a
  autenticidade passar a ser atributo assinado (R4); C2PA é um dos meios.

### 12.5 Buscas que não deram em nada e páginas que não abriram

- **TSE (página da notícia de 01/09/2026)**: 403 no WebFetch. Substituída pela cobertura do Estado
  de Minas [17], que traz os mesmos dados (TMI-0115).
- **Variety e Deadline** (Sora/Disney; *Critterz* em Cannes): redirecionam para um domínio de
  pedágio de robôs (`tollbit`); não abertas. Substituídas pelo verbete da Sora [16] e pela
  página da Nerdbot [25].
- **MM+M** (fim do acordo Disney–OpenAI): 403.
- **Comunicado trimestral do Kuaishou** (`ir.kuaishou.com`): tempo esgotado no WebFetch e no curl.
  Substituído pela cobertura da KrASIA [32].
- **Página da Adobe sobre Firefly e treino licenciado**: tempo esgotado. Por isso nenhuma
  afirmação sobre Firefly (acervo licenciado, indenização, modelos parceiros) está no corpo: Firefly
  aparece só em `tecnologias_citadas`, porque está no enunciado do tema.
- **Quanto do vídeo online é sintético**: a busca devolveu números de agregadores sem método; não
  entraram. "Sem número encontrado" em 3.4.
- **Adoção de controle fino versus prompt entre profissionais**: nenhuma pesquisa encontrada.
- **Posição da ANCINE sobre IA**: não encontrada em página aberta nesta rodada.
- **Festival de primeira linha com regra sobre obra gerada**: não procurado a fundo nesta rodada;
  W1 usa só o caso *Critterz*.

### 12.6 Números e fatos que ficaram fora do corpo (só vieram de resumo de busca)

Pela TMI-0114, entram aqui marcados e **não** são fonte listada:

- ARR do Kling "perto de US$ 500 milhões" em março de 2026 e previsão de US$ 1 bilhão de um banco
  (resumo de busca, BigGo Finance).
- Kling 3.0 "lançado globalmente em março de 2026", com clipes de até 15 s, 4K nativo e controle
  de câmera em seis eixos (resumo de busca, podcast ocdevel). A página do Kling aberta [29] não dá
  a data.
- Runway Aleph 2.0 "com entradas de 2 a 30 s e até cinco quadros-chave" (mesmo resumo).
- Rive "levantou cerca de US$ 14 milhões" e "tem cerca de 75 funcionários"; "Rive para Unreal
  Engine como plugin gratuito"; "semântica de acessibilidade no Android" (resumos de busca). A
  última é o sinal de e5.1.1, e por isso esse efeito tem sinal fraco.
- Meta: "mais de 4 milhões de anunciantes usam as ferramentas generativas", "meta de anúncio
  totalmente automatizado até o fim de 2026", "ferramenta que transforma até 20 fotos de produto em
  vídeo" (resumos de busca de blogs de marketing). O único número da Meta no corpo é o da
  transcrição [33].
- Remotion Skills "com mais de 126 mil instalações" (resumo de busca).
- Revogação dos certificados C2PA de uma câmera Nikon depois de uma vulnerabilidade (resumo de
  busca, SoftwareSeni). Citada em W2 como não aberta.
- Estado atual do PL 2338 na Câmara em 2026 (resumo de busca). A fonte aberta [35] é de 2025.
- SIGGRAPH 2026 com trabalhos de controle de câmera e de *in-betweening* sobre quadro-chave (lista
  de artigos vista só em resultado de busca). Citado em e2 como tal.

### 12.7 Caminhos abandonados

- **Uma quinta raiz "controle por busca na inferência"** — tentada como R5 e fundida em R3 (e11),
  porque o teste "a raiz que não acontece" mostrava que sem R3 ela também não acontecia.
- **Tratar R4 como efeito de R1** — considerado; mantida como raiz porque o que ela rompe
  (presunção de registro) tem atores próprios (redação, tribunal, regulador eleitoral) e porque
  sobrevive à queda de R1 (7.4).
- **Um ramo sobre ensino formal de animação** — a lista proibida exigia nomear o curso e o
  mecanismo; sem fonte aberta sobre um curso específico, o ramo foi reescrito como formação no
  trabalho (e2.1), que tem mecanismo sem precisar de nome de curso.

### 12.8 O enunciado do tema × o que este mapa fez com ele

| Pergunta do enunciado | Onde está |
|---|---|
| Estúdio de uma pessoa × indústria audiovisual, publicidade, ensino de animação | e1, e1.1, e2, e2.1; W1 |
| Prova em vídeo, jornalismo, "autenticidade certificada" | R4 inteira; e15.1.1 |
| Animação como máquina de estados, vídeo × interface | R2 (e5, e5.1); e10 |
| Sinal fraco Rive | e5 (virou efeito de 1ª ordem, não sinal fraco — o sinal já é forte) |
| Sinal técnico VAR | R3, e11; 6.2 |
| Wildcard do longa de uma pessoa | W1, com o dado de que *Critterz* foi a mercado, não a seleção |

### 12.9 Registro das buscas

Vinte e sete buscas, nesta ordem: controle de vídeo e quadro-chave 2026; VAR melhor artigo
NeurIPS 2024; adoção C2PA 2026; TSE deepfake 2026; Rive máquina de estados 2026; vídeo interativo em
tempo real e modelos de mundo; *Critterz* em Cannes; Regra 707; Artigo 50 e código de prática;
Animation Guild e emprego; ComfyUI rodada; Sora encerramento; Disney × Midjourney; Getty ×
Stability; publicidade com IA no Brasil; acordo Disney–OpenAI; fim do acordo Disney–OpenAI; Canva e
Cavalry; autoregressivo por escala 2026; SIGGRAPH 2026 controle; anúncios gerados na Meta; Globo e
IA; Remotion e agentes; Firefly treino licenciado; receita do Kling no Kuaishou; transcrição da Meta
no Q4 2025; PL 2338 na Câmara.

### 12.10 O que este mapa faria diferente com horizonte de 2031

Com horizonte de 2031, **sobreviveriam três raízes** das quatro: R1, R2 e R4. R3 sairia como raiz
e voltaria a ser sinal fraco (6.2/6.3), porque está em laboratório e a referência de custo (jogo em
nuvem, mais de quinze anos abaixo de 10%) não a leva a produto em cinco anos; e12 (o custo encerra
produtos) sobreviveria como retroação de R1.

**Efeitos que mudariam de ordem ou sairiam.** Toda a 3ª ordem atual sairia da janela — a mais cedo,
e3.2.1, é de 2032 —, isto é, com 2031 **não haveria 3ª ordem dentro da janela**, e os efeitos
de 2ª ordem com prazo até 2031 (e1.2, e3.1, e3.2, e4.1, e6.1, e7.1, e12.1, e13.1, e13.2, e15.1,
e15.2) virariam o nível terminal. e2.1 (formação no trabalho, 2034) e e14 (tribunais, 2032)
ficariam fora; R4 ficaria só com redação e rotulagem, sem o pé processual.

**Teto de confiança no horizonte padrão.** `alta` continuaria possível só em e6 e e15, que já estão
em vigor; nada de 2ª ordem passaria de `media`.

**O que 2036 compra, medido neste documento:** a entrada do pé processual de R4 (e14), a porta de
entrada do ofício (e2.1) e a convergência R1 × R4 no rótulo que não distingue (e15.1), que só se
completa depois da janela (e15.1.1, 2039). **O que custa:** nove dos quinze efeitos de 3ª ordem
ficam fora da janela, e o cenário provável de 2036 (seção 9) tem de ser escrito com base na 2ª
ordem — que é onde está, honestamente, o que se consegue dizer sobre dez anos.
