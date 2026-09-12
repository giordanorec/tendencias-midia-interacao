---
tema: "Mídia sintética controlável: vídeo e imagem"
slug: midia-sintetica-controlavel-video-e-imagem
autor_login: grec
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-11
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 16
efeitos_ordem_2: 27
efeitos_ordem_3: 22
tecnologias_citadas: [ComfyUI, FLUX.2, FLUX.2 dev, FLUX.2 klein, FLUX.2 pro, FLUX.2 flex, FLUX.1 Kontext, Nano Banana Pro, Gemini 3 Pro Image, SynthID, Runway Gen-4.5, Motion Brush, Act-Two, Act-One, Luma Dream Machine, Ray3, Ray3.2, Kling 3.0, Kling 2.5, Veo 3.1, Sora 2, Sora 2 Pro, Wan 2.2, Wan 2.2 Fun Control, Wan 2.5, HunyuanVideo 1.5, LTX-Video 2, VAR, VideoAR, MotionStream, LiveEdit, VideoPainter, In-Video Instructions, ControlNet, EbSynth, Rive, Cavalry, Remotion, Lottie, Adobe Firefly, Firefly Video Model, Generative Extend, Premiere Pro, C2PA, Content Credentials, SAM 3, Magnific]
fontes: 39
confianca: media
experimento: "O registro da intervenção — a mesma peça de seis segundos feita por quatro caminhos de controle, e o dossiê de autoria que cada caminho consegue provar"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

A geração de imagem e vídeo por descrição em texto deixou de ser a fronteira: é produto de massa,
e este mapa a recusa como disrupção-raiz. A fronteira é o **controle** — região do quadro,
máscara, trajetória, referência, quadro-chave propagado, regra, grafo, máquina de estados — e o
que este mapa encontrou é que o controle não é conforto de produção. É o que converte geração em
três coisas que o prompt não produz: **propriedade**, porque o Escritório de Direitos Autorais
dos EUA exige autoria humana e a Suprema Corte negou certiorari em *Thaler v. Perlmutter* em
02/03/2026, deixando de pé a regra de que prompt não é autoria; **isenção legal**, porque o
Artigo 50 do AI Act, em vigor desde 02/08/2026, dispensa de marcação a IA que cumpre "função
assistiva de edição padrão" e não dispensa a geração substancial — e a fronteira entre as duas é
exatamente onde o controle fino opera; e **reprodutibilidade**, porque o grafo de nós é um arquivo
versionável e o prompt não é. Quatro rupturas sustentam o mapa: o controle espacial explícito
substituindo o prompt como interface primária, com geração e edição na mesma arquitetura (FLUX.2,
32B, até dez referências, edição a 4 MP; ComfyUI a US$ 500 milhões em abr/2026 com 4 milhões de
usuários e 132,5 mil estrelas); a animação virando máquina de estados que responde a evento, com
um runtime só para web, iOS, Android, Flutter, Unity e Unreal (Rive, com Spotify, Duolingo,
Disney, Google, ESPN e LinkedIn na lista de clientes); a disputa arquitetural reaberta pelo
autoregressivo por escala, que em jan/2026 chegou ao vídeo (VideoAR: FVD 99,5 → 88,6 no UCF-101,
VBench 81,74, mais de 10× menos passos) e que faz 2B superar 12B com busca em tempo de inferência;
e a geração deixando de ser lote e virando fluxo dirigido ao vivo (MotionStream: até 29 FPS numa
GPU só, latência abaixo de um segundo, comprimento infinito). Contra a leitura fácil, o mapa
registra duas coisas: o mercado de "autenticidade certificada" não chega no prazo — a primeira
análise independente por métodos formais do C2PA, em abr/2026, conclui que as especificações
falham em atingir os próprios objetivos de segurança e recomenda não usá-las para prova jurídica;
e o desligamento da Sora (anúncio em 24/03/2026, API encerrada em 24/09/2026) mostra que o produto
de vídeo por prompt não sustentou negócio nem para quem o inventou. Até 2031 o objeto disputado
não é a imagem: é **o registro da intervenção humana sobre ela**.

## 2. O tema

**O objeto.** A imagem em movimento como mídia sintética **dirigível**: geração de imagem e vídeo
em que o operador não pede e espera, mas especifica *onde*, *o quê* e *sob que regra* — região,
máscara, trajetória, referência de identidade, quadro-chave que se propaga, grafo de nós,
máquina de estados. Inclui a arquitetura que faz a geração (difusão × autoregressivo por escala),
porque ela determina latência e, por consequência, o que é possível dirigir.

**A fronteira com os vizinhos, declarada.** A *história* gerada é o tema 8 e não entra: aqui a
pergunta nunca é "o que acontece na cena", é "como se dirige o quadro". O *som* e a *voz* são o
tema 13, e por isso a geração de áudio nativa do Veo 3.1 e do Kling 3.0 aparece só como contexto
de mercado. O *design procedural puro*, sem IA, é o tema 14 — mas Rive e Cavalry entram aqui,
deliberadamente, porque o objeto deste mapa é a imagem em movimento dirigível e a regra
procedural é um dos instrumentos de direção; onde a fronteira é tensa, digo que é. A
*reconstrução do espaço em três dimensões* é o tema 10. O *robô que usa a visão para agir* é o
tema 9, e o *mundo jogável* é o tema 7: o vídeo gerado em tempo real encosta nos dois, e o recorte
que adotei é que aqui o sistema **mostra**, não simula um mundo persistente.

**Onde encosta em mídia e interação.** Em quatro lugares concretos, e nenhum deles é "a imagem
fica mais bonita".

1. **A interface da criação.** Se a unidade de trabalho deixa de ser a tentativa e passa a ser a
   edição, o que o profissional entrega muda de artefato: de quadro para sistema. O co-fundador
   do ComfyUI descreve o problema exatamente assim: o prompt chega a "60% – 80%" do que se quer, e
   "para mudar os 20% restantes, você tem que tentar essa máquina caça-níqueis".
2. **A fronteira entre vídeo e interface.** Uma animação que é máquina de estados não toca: ela
   responde. O mesmo arquivo roda em web, iOS, Android e Unity. Quando a peça carrega a própria
   lógica, "vídeo" e "componente de UI" deixam de ser categorias distintas do ponto de vista de
   quem produz.
3. **A prova.** Se a edição de imagem passa a ser causal, quadro a quadro, a 12,66 FPS dentro de
   um fluxo ao vivo, "o que a câmera mostrou" deixa de descrever o que aconteceu — e o
   instrumento construído para resolver isso (a marca criptográfica de origem) acabou de receber
   um parecer técnico independente negativo.
4. **O direito.** Autoria humana é requisito de proteção nos EUA; marcação é obrigação de quem
   gera na UE desde 02/08/2026. As duas regras dependem de um juízo sobre **quanto** de humano
   houve na peça — e quem controla a região do quadro tem o que mostrar, quem escreveu a frase não.

**Por que merece mapa de futuro, e não levantamento de estado da arte.** Porque o levantamento
já existe e é volumoso — há survey de geração controlável de vídeo com 23 autores e três versões
em dezoito meses, e há tabela comparativa de produto em qualquer blog. O que não existe é o
encadeamento: se o controle fino é o que produz autoria, isenção e reprodutibilidade, então a
disputa dos próximos cinco anos não é sobre qualidade de imagem — é sobre **quem detém o registro
do que fez**, quem é obrigado a declarar, e o que sobra de uma peça quando o modelo que a gerou é
desligado. Essa pergunta não se responde comparando produtos; responde-se derivando efeitos.

## 3. Onde isso está hoje

*Âncora fechada em 11/09/2026, com 21 buscas (português e inglês) e 39 fontes abertas. Nenhum
número deste documento vem de memória: o que não abriu não está aqui, e o que abriu mas é
autopromoção do fornecedor está marcado como tal.*

### 3.1 O que já existe e funciona

**Geração e edição na mesma arquitetura.** O FLUX.2, da Black Forest Labs, saiu em 25/11/2025
combinando geração e edição num só modelo, em quatro variantes: `pro` e `flex` fechadas por API,
`dev` de peso aberto com 32B de parâmetros, e `klein` distilada sob Apache 2.0. Os controles são
explícitos e nada têm de conversacional: **até dez imagens de referência simultâneas**, edição
até **4 megapixels**, número de passos ajustável na variante `flex` (troca qualidade por
latência), aderência a instrução estruturada. A arquitetura acopla o modelo de visão-linguagem
Mistral-3 de 24B a um *rectified flow transformer*. Do lado fechado, o Gemini 3 Pro Image ("Nano
Banana Pro") entrou em disponibilidade geral em jun/2026 aplicando **edição localizada — luz,
foco, ângulo de câmera — sem regenerar a imagem inteira**, com marca SynthID obrigatória no pixel.

**Controle de movimento em produto — e uma contracorrente que este mapa não esperava.** O Luma
Ray3.2 aceita **até 16 quadros-chave** por sequência e exporta 1080p nativo, upscale 4K, HDR e
EXR; a página que sustenta isso é material de marketing da própria Luma (28/07/2026), e a trato
como tal. Já a Runway, que a amostra da turma cita justamente pelo *motion brush*, publica na
própria página de recurso de *inpainting* de vídeo o oposto: o modelo **Aleph 2.0 elimina máscara
e rastreamento manuais** — "descreva o que remover, 'remova a lixeira', por exemplo, e o modelo
detecta, rastreia e reconstrói o quadro automaticamente" —, e contrasta isso explicitamente com o
fluxo de três passos dos concorrentes (pintar a região no primeiro quadro, seguir a máscara,
gerar). **O único controle discutido naquela página é o prompt de texto**; não há um mecanismo
granular sequer, e a própria Runway admite que "a consistência temporal é o gargalo de verdade".
Isto é evidência direta contra a Razão 1 do pré-mortem não ter acontecido ainda: há um grande
fornecedor de controle **vendendo a remoção do controle explícito** como benefício. Registro em
7.1 e 7.2. *(O motion brush, o sistema de referência e o Act-Two do Gen-4.5 estão no enunciado do
tema e em resenhas secundárias; a página de documentação da Runway que os descreve devolveu 403 em
duas tentativas, e por isso eles não entram como fato verificado deste mapa — ver 8.9.)* O Kling
3.0 (04/02/2026) trouxe modo storyboard multiplano a cerca de US$ 0,10 por segundo, também por
fonte secundária que não abri, e por isso fica como contexto de mercado, não como número deste
mapa.

**O grafo como interface profissional.** O ComfyUI levantou **US$ 30 milhões a US$ 500 milhões de
avaliação em 24/04/2026** (Craft Ventures na liderança, com Pace Capital, Chemistry e TruArrow),
depois de US$ 19 milhões em 2024. Declara **4 milhões de usuários**; o repositório tem **132,5 mil
estrelas** e licença GPL-3.0, e se descreve como "um grafo visual de nós para construir e reusar
fluxos de imagem, vídeo, áudio, 3D e texto sem código". A lista de modelos suportados é o mapa do
campo num arquivo: FLUX.1 e FLUX.2, Qwen Image, Wan 2.1/2.2, LTX-Video 2/2.3, HunyuanVideo 1.5,
SAM 3/3.1. Há vaga de emprego com o título "ComfyUI artist or engineer". O concorrente direto,
Weavy, foi comprado pela Figma em 2025.

**Peso aberto de vídeo, com controle.** O Wan2.2 (Alibaba) está sob **Apache 2.0**, com T2V-A14B e
I2V-A14B de 27B parâmetros (14B ativos por passo, MoE), TI2V-5B denso que roda em 24 GB — uma RTX
4090 —, S2V-14B guiado por áudio e Animate-14B para animação e substituição de personagem; 17,5
mil estrelas. A variante Fun Control aceita Canny, profundidade, OpenPose e MLSD. **O topo da
linha, porém, fechou:** o Wan 2.5 (set/2025) só existe por API da Alibaba Cloud, sem pesos
públicos.

**Propagação de quadro-chave, sem IA.** O EbSynth continua sendo a saída mais controlável para
rotoscopia estilizada, e por um motivo que convém não esquecer: **a propagação não é IA**, é
síntese de textura que usa apenas o vídeo e os quadros-chave pintados. Grátis para 720p, US$ 20/mês
no Pro, US$ 200/mês por assento no Studio com processamento local. A página credita Disney,
*Doctor Who*, *Wednesday*, Apollo, Joel Haver e Corridor Crew.

**Animação como máquina de estados, em produção real.** A Rive se apresenta como "motor de
experiência interativa", com runtimes para web, iOS, macOS, Android, Flutter, React, React Native,
Framer, Webflow, Wix Studio, C++, Defold, **Unity e Unreal**. Clientes nomeados: Spotify, Duolingo,
Disney, Google, ESPN, LinkedIn, Intercom, Dropbox, CARS24. Os números da página são da empresa —
"mais de 2 bilhões de usuários" alcançados pelos produtos que a usam, arquivos até 90% menores,
produção 4× mais rápida — e servem como declaração de escala, não como medição independente. A
empresa tinha **76 funcionários em 31/07/2026** e levantou algo entre US$ 14 e US$ 22,5 milhões
(as bases de dados divergem).

**Motion design procedural em plataforma de massa.** O Cavalry está **gratuito, sem restrição para
uso individual**, nas versões 2.6.1/2.7 — e passou a ser **desenvolvido pela Canva**, com edição
empresarial via Canva Enterprise. A frase que a própria página usa resume o paradigma: "ajuste um
único valor, veja sistemas inteiros responderem". Importa dado de planilha e exporta Lottie.

**Vídeo como código, escrito por agente.** O Remotion (vídeo programático em React) tem cerca de
**60 mil downloads semanais** e, desde **jan/2026**, integração com Agent Skills, o que permite
gerar, alterar e renderizar vídeo por linguagem natural em vez de escrever o componente à mão.

**A obrigação legal já está em vigor.** O **Artigo 50 do AI Act aplica-se desde 02/08/2026**:
provedor tem de aplicar marca **legível por máquina** em conteúdo sintético e torná-lo detectável;
*deployer* tem de rotular deepfake "no momento da primeira exposição". A marcação de sistemas já
no mercado antes de 02/08/2026 foi prorrogada para **02/12/2026**. A isenção que mais importa aqui
é literal: não se aplica quando a IA "cumpre apenas função assistiva de edição padrão" ou não
"altera substancialmente" os dados de entrada. A Comissão publicou diretrizes em **08/05/2026** —
e nelas, obra "manifestamente artística, criativa, satírica ou ficcional" não fica isenta, só
tem obrigação reduzida; revisão editorial não conta se for "correção ortográfica ou gramatical
apenas, nem aval editorial superficial". O Código de Prática sobre Transparência foi finalizado em
**10/06/2026** e tinha **cerca de 190 organizações signatárias em 31/07/2026**. Multa até **€ 15
milhões ou 3% do faturamento mundial**.

**No Brasil, a assimetria.** O PL 2338/2023 foi **aprovado no plenário do Senado em 10/12/2024** e
**remetido à Câmara em 17/03/2025**; a tramitação no Senado está encerrada e não há lei. Enquanto
isso, o CONAR publicou novo Guia de Publicidade por Influenciadores em **12/05/2026**, com efeitos
desde **01/06/2026**, que aplica o CBAP integralmente a conteúdo "produzido, editado ou segmentado"
com IA e estabelece responsabilidade solidária entre anunciante, agência e influenciador — mas
**não exige declaração de uso de IA**. Ou seja: no Brasil, hoje, a peça sintética responde pelo
que afirma e não precisa dizer que é sintética.

**Autoria.** A Suprema Corte dos EUA **negou certiorari em *Thaler v. Perlmutter* em 02/03/2026**,
deixando de pé o entendimento do Circuito do Distrito de Columbia de que a lei "protege apenas
obras de criação humana". O Escritório de Direitos Autorais publicou a Parte 2 do relatório sobre
IA em **29/01/2025**, tratando da protegibilidade de saídas generativas, e sua orientação de
registro para obras com material gerado por IA é de **16/03/2023**: o requerente tem de identificar
o que foi gerado por máquina e descrever a contribuição humana — e só esta é protegida.

### 3.2 O que existe e ainda não funciona

**O autoregressivo por escala em vídeo.** O VAR (03/04/2024) reformulou a geração autoregressiva
como predição da **próxima escala** e foi o primeiro transformer AR a superar o transformer de
difusão: no ImageNet 256×256, FID de **18,65 para 1,73**, IS de **80,4 para 350,2**, cerca de
**20× mais rápido**, com leis de escala de coeficiente de correlação perto de **−0,998**. Em
19/10/2025 veio o argumento econômico: no espaço **discreto** a busca funciona, e *beam search*
faz um modelo AR de **2B superar um modelo de difusão de 12B** — "arquitetura, não apenas escala,
é crítica". E em **09/01/2026** o paradigma chegou ao vídeo com o VideoAR, o primeiro VAR de larga
escala para vídeo: FVD no UCF-101 de **99,5 para 88,6**, VBench **81,74**, **mais de 10× menos
passos de inferência**. Nada disso é produto. Todo o ferramental de controle instalado —
ControlNet, LoRA, os nós do ComfyUI — é de difusão.

**O fluxo em tempo real.** O MotionStream destila um professor bidirecional num modelo causal e
entrega **latência abaixo de um segundo, até 29 FPS numa única GPU, duas ordens de magnitude mais
rápido**, com comprimento infinito — o operador pinta trajetória, controla câmera ou transfere
movimento e vê o resultado correndo. O LiveEdit, aceito no **ECCV 2026**, faz **edição causal
quadro a quadro em streaming a 12,66 FPS**. São artigos com página e código, não produtos: nenhum
produto comercial de vídeo generativo em set/2026 vende direção ao vivo.

**A edição de região em vídeo longo.** O VideoPainter propõe um encoder de contexto com **apenas
6% dos parâmetros do backbone**, plugável em qualquer DiT de vídeo pré-treinado, com técnica de
reamostragem de ID para *inpainting* de qualquer duração, e liberou o VPData com **mais de 390 mil
clipes** — o maior conjunto de dados e referência do tipo. O problema que a própria literatura
aponta continua aberto: quando a máscara se move, o que estava atrás dela aparece, e o modelo não
sabe o que havia ali — a consistência temporal quebra.

**A instrução desenhada dentro do quadro.** O In-Video Instructions (24/11/2025) testa uma ideia
estranha e barata: escrever a instrução **no próprio quadro** — texto sobreposto, setas,
trajetórias — e deixar o modelo de vídeo ler. Foi testado no Veo 3.1, Kling 2.5 e Wan 2.2, e os
autores relatam execução confiável "particularmente em cenários complexos com múltiplos objetos".
O repositório tem 46 estrelas.

**A marca de origem.** Este é o item que mais se cita como resolvido e menos funciona. O C2PA está
na versão **2.4 (21/04/2026)**, é projeto da Linux Foundation e tem suporte declarado por LinkedIn,
TikTok, YouTube, OpenAI, Google, Microsoft e Anthropic. E ainda assim: **nenhuma implementação em
câmera atingiu conformidade** no Programa de Conformidade até meados de 2026 — Leica, Nikon e Canon
construíram sobre a versão 1.4, que não participa do programa; a **Nikon revogou os certificados do
Z6III** dias depois do firmware, porque uma vulnerabilidade permitia combinar imagem inautêntica
com foto autêntica mantendo assinatura válida; e em **ago/2026** o pesquisador David Buchanan
mostrou que, com acesso root no Android, é possível fazer o sistema assinar dado arbitrário e gerar
imagem fabricada com assinatura válida — o Google classificou como **"Won't fix (infeasible)"**.
Em **27/04/2026** saiu a primeira análise independente por métodos formais das especificações, de
onze autores, com a conclusão explícita: "as especificações atuais do C2PA falham em atingir seus
objetivos de segurança declarados", e a recomendação de **não usá-las para jornalismo, divulgação
financeira ou prova jurídica** até que sejam corrigidas. Somem-se a isso os intermediários de
distribuição, que continuam removendo metadado embutido.

**O que foi desligado.** Em **24/03/2026** a OpenAI notificou a depreciação da Videos API e dos
modelos `sora-2`, `sora-2-pro` e respectivos *snapshots*, com remoção em **24/09/2026**; o
aplicativo e a versão web da Sora encerraram em **26/04/2026**. Nenhum substituto foi indicado. A
razão relatada é redirecionamento de computação para ferramentas de código e clientes corporativos,
com a Sora seguindo como iniciativa de pesquisa em modelos de mundo. **Não é falha técnica; é
falha de negócio** — e é o fato mais desconfortável deste mapa para quem projeta em cima de
plataforma fechada.

### 3.3 Quem constrói

| Ator | O que traz | Posição |
|---|---|---|
| **Comfy Org** | grafo de nós como pipeline; 4M de usuários, GPL-3.0 | a camada de controle de fato, e agora capitalizada |
| **Black Forest Labs** | FLUX.2; geração e edição na mesma arquitetura; peso aberto de 32B | fornece o motor que os outros orquestram |
| **Alibaba (Wan) / Tencent (Hunyuan) / Lightricks (LTX)** | vídeo de peso aberto sob Apache 2.0 | a base do que é reprodutível — com o topo fechando |
| **Runway / Luma / Kuaishou (Kling) / Google (Veo)** | controle em produto: motion brush, quadros-chave, referência | vendem direção, não mais geração |
| **Adobe** | Firefly treinado só em conteúdo licenciado, indenização comercial, Generative Extend no Premiere em 4K | vende risco jurídico baixo, não qualidade máxima |
| **Rive / Canva (Cavalry) / Remotion** | mídia que carrega lógica: máquina de estados, regra, código | a fronteira vídeo↔interface |
| **Academia (VAR, VideoAR, MotionStream, LiveEdit, VideoPainter)** | arquitetura e latência | onde a próxima disputa está sendo decidida |
| **Comissão Europeia / CONAR / US Copyright Office** | marcação obrigatória, responsabilidade solidária, autoria humana | definem o que o controle vale juridicamente |
| **The Animation Guild (IATSE 839)** | o lado que perde, organizado | força de bloqueio com dono |

### 3.4 Que número descreve a adoção hoje

O que encontrei com fonte que abri:

- **83% dos executivos de publicidade** dizem que a empresa já implantou IA no processo criativo,
  contra 60% em 2024 (IAB com Sonata Insights, 15/01/2026; n = 104 executivos de empresas com mais
  de US$ 1 milhão de mídia/ano, e 505 consumidores Gen Z e millennials). **86% dos compradores**
  usam ou planejam usar IA generativa para criativo de vídeo. E o dado mais útil do relatório é a
  discrepância: **45% dos consumidores** se dizem positivos sobre anúncios com IA, mas **82% dos
  executivos acreditam que eles são positivos** — 37 pontos de erro de leitura.
- **4 milhões de usuários** declarados do ComfyUI; **132,5 mil estrelas**; **17,5 mil** no Wan2.2;
  **60 mil downloads semanais** do Remotion; **46 estrelas** no In-Video Instructions. É a escala
  real do ferramental de controle: profissional, não de massa.
- **~190 organizações** signatárias do Código de Prática de Transparência da UE em 31/07/2026.
- **Mais de 6 mil obras** humano+IA registradas no Escritório de Direitos Autorais dos EUA até
  abr/2026, protegidas apenas nos elementos humanos.
- **Nenhuma câmera** conforme ao Programa de Conformidade do C2PA em meados de 2026.

**O que eu não encontrei com número confiável, e por isso não uso:** a fração de vídeo online que é
sintética. As estimativas que circulam — 10%, 38%, 90% — vêm de sites agregadores de SEO, divergem
por uma ordem de magnitude e não citam método. **Sem número encontrado.** O mesmo vale para a
redução de custo de produção de animação: a matéria que a reporta (29/06/2026) atribui "até 90%" a
"animadores e diretores" não nomeados, sem estúdio e sem produção — é alegação sobre alegação.

### 3.5 Contexto que este mapa recusa como raiz (§2)

**Candidato recusado: vídeo e imagem por prompt.** Adoção em maioria. Está dentro do Gemini, do
Photoshop, do Canva e de qualquer celular. Pela régua da disciplina — se dá para fazer com o que já
é comum em produto de massa, é maduro — está fora. Tratado como contexto nesta seção.

**Candidato recusado: aumento de resolução e restauração (Magnific, Topaz).** Faz o mesmo, melhor:
melhoria sustentadora no sentido de Christensen. Pode entrar como efeito, não como raiz.

**Candidato recusado: os cortes de emprego em animação.** Este merece explicação, porque é o fato
mais citado. O estudo que a Animation Guild encomendou à CVL Economics (300 líderes do setor,
17/11 a 22/12/2023) projeta **21,4% dos postos de cinema, TV e animação nos EUA — cerca de 118.500
— com tarefas suficientemente afetadas para serem consolidados, substituídos ou eliminados até
2026**, sendo 39.500 na Califórnia e 15.100 em Nova York; **75% dos executivos** relataram que a
IA generativa já apoiou eliminação, redução ou consolidação de posto. A Disney cortou cerca de
**1.000 pessoas em 15/04/2026**, incluindo várias centenas na Pixar, e o condado de Los Angeles
perdeu **6.700 postos** no setor de cinema e gravação de som no ano até maio/2026 (dado do EDD da
Califórnia). A Netflix montou o **INKubator**, descrito como "estúdio de animação nativo em IA
generativa, liderado pela criação", para curtas e especiais, com plano de escalar para formato
longo (reportado em 15/05/2026, sem anúncio formal). **E ainda assim não entra como efeito desta
raiz**, pelo teste da causa solta (§3, regra 10): a contração tem causa múltipla — retração pós-
greve, corte de encomenda de streaming, deslocamento de produção para fora da Califórnia — e
aconteceria em boa parte sem nenhum controle fino de geração. Entra aqui, como contexto, e volta no
mapa apenas onde consigo nomear o mecanismo específico: a supressão do **posto de entrada**, que é
exatamente a tarefa repetitiva que a propagação de quadro-chave e o *inpainting* de região
absorvem.

## 4. As disrupções-raiz

Quatro, que é o teto da faixa recomendada. Escolhi quatro porque os atores são distintos — quem
edita região, quem entrega runtime, quem treina arquitetura e quem serve fluxo não são as mesmas
pessoas, não compram as mesmas ferramentas e não respondem aos mesmos incentivos. Com três, R4
teria sido absorvida por R1 e o efeito sobre custo por espectador desapareceria.

Cada uma responde, em uma linha, às quatro perguntas do critério de maturidade, e cada uma nomeia
**quem tem incentivo para bloquear**.

### R1 — O controle espacial explícito substitui o prompt como interface primária: geração e edição passam a ser a mesma operação

**O que rompe.** Rompe a unidade de trabalho. Com prompt, a unidade é a **tentativa**: gera-se,
avalia-se, descarta-se, repete. Com região, máscara, referência e quadro-chave, a unidade é a
**edição**: altera-se uma parte e o resto permanece. Isso rompe três coisas de uma vez: o ofício de
escrever frase (que não é autoria, juridicamente — *Thaler*, 02/03/2026), a economia de "gerar
cinquenta e escolher um" (que é onde está a receita por crédito das plataformas fechadas), e o
entregável (que deixa de ser o quadro aprovado e passa a ser o sistema que produz os outros mil).
Não é "faz o mesmo, melhor": faz outra coisa, com outro artefato de saída.

**Por que agora, e não há cinco anos.** Porque a edição e a geração passaram a ser o mesmo modelo.
Em 2021 editar exigia máscara e um segundo modelo de *inpainting* com costura visível; o FLUX.2
(25/11/2025) faz as duas na mesma arquitetura, com até dez referências e edição a 4 MP, e o Nano
Banana Pro (GA jun/2026) aplica alteração de luz, foco e ângulo **sem regenerar a imagem**. Do lado
de vídeo, o encoder de contexto plugável do VideoPainter, com 6% dos parâmetros do backbone,
mostrou que dá para acoplar controle a modelo pré-treinado sem retreiná-lo. E do lado econômico, a
rodada do ComfyUI (US$ 30 milhões a US$ 500 milhões, 24/04/2026) é a primeira vez que o mercado de
capital precifica **a camada de controle** em vez do modelo.

**Onde está na difusão.** Entre **produto de nicho e adoção precoce (<10%)**. Quatro milhões de
usuários e vaga de emprego com o nome da ferramenta é nicho profissional consolidado, não maioria.
Confiança média na cadeia.

**O que ainda falta acontecer.** (a) Consistência de identidade por minutos, não por segundos — o
Act-Two e o sistema de referência do Gen-4.5 resolvem plano, não filme. (b) *Inpainting* de região
em vídeo longo com oclusão: quando a máscara se move, o que estava atrás precisa ser conhecido, e
não é. (c) Um formato de troca do grafo entre ferramentas — hoje o grafo do ComfyUI não abre em
outro lugar. (d) Preço que não puna controle: plataforma que cobra por geração perde receita quando
o profissional gera menos.

**Quem bloqueia, e com que efeito.** As **plataformas fechadas de geração**, cuja receita é crédito
por saída. Controle fino reduz o número de saídas por peça entregue; logo, o incentivo racional é
oferecer controle suficiente para retenção e insuficiente para reprodutibilidade — sem exportar o
grafo, sem fixar a semente, sem garantir que o modelo de hoje exista amanhã. O desligamento da Sora
é a prova de que esse risco não é hipotético.

### R2 — A animação deixa de ser arquivo a tocar e passa a ser máquina de estados a consultar: a peça carrega a própria lógica de resposta

**O que rompe.** Rompe a fronteira entre mídia e software, e com ela o *handoff*. Um vídeo é um
arquivo que se reproduz; uma máquina de estados é um runtime que se consulta. Quando o designer
entrega estados, transições e entradas em vez de quadros, o que ele entrega é **contrato de
interface** — e passa a responder por comportamento em produção. Rompe também o "renderizar e
exportar" como fim do pipeline: não há master.

**Por que agora, e não há cinco anos.** Porque o runtime único existe e está em produto grande. A
Rive roda o mesmo arquivo em web, iOS, macOS, Android, Flutter, React, React Native, Framer,
Webflow, Wix Studio, C++, Defold, **Unity e Unreal**, e a lista de clientes (Spotify, Duolingo,
Disney, Google, ESPN, LinkedIn) mostra que o argumento de "construir a animação duas vezes, uma
para cada plataforma" morreu. Em paralelo, o motion procedural desceu de preço até zero: o Cavalry
está gratuito para uso individual e **passou a ser desenvolvido pela Canva**. E o vídeo
programático ganhou autor de máquina: o Remotion integrou Agent Skills em **jan/2026**, e um agente
passa a escrever o componente React que renderiza o vídeo.

**Onde está na difusão.** **Produto de nicho.** Uma empresa de 76 pessoas com 8 investidores e algo
entre US$ 14 e 22,5 milhões levantados não é maioria, por mais que os produtos que a usam somem
bilhões de usuários finais — e a distinção entre "usuários do Rive" e "usuários de produtos que
usam Rive" é exatamente o tipo de número que a autopromoção embaralha.

**O que ainda falta acontecer.** (a) Um formato de troca aberto com máquina de estados: o Rive é
proprietário e o Lottie não tem equivalente. (b) Um lugar de distribuição que execute lógica — o
feed de rede social roda H.264, não runtime. (c) Ferramenta de teste: máquina de estados em
produção sem teste automatizado é bug esperando. (d) Uma resposta de acessibilidade: movimento que
responde a evento é mais difícil de desligar que movimento que toca.

**Quem bloqueia, e com que efeito.** As **plataformas de distribuição**. Quem controla o feed decide
se mídia pode responder, e a resposta atual é não: o que circula é vídeo achatado. O efeito é que a
mídia interativa se concentra em quem tem produto próprio (Duolingo, Spotify) e não chega a quem
publica na casa de outro — o que **aprofunda a diferença entre quem tem app e quem tem página**.

### R3 — A arquitetura da geração visual volta a ser disputada: o autoregressivo por escala reabre a competição com a difusão

**O que rompe.** Rompe duas suposições que organizaram o campo desde 2022. A primeira é "melhor
imagem = mais passos de difusão": o VAR entrega qualidade superior com predição de próxima escala e
cerca de 20× menos tempo, e o VideoAR reduz passos em mais de 10× em vídeo. A segunda, mais
importante, é "quem tem mais parâmetros ganha": no espaço **discreto** de tokens, busca em tempo de
inferência funciona — poda antecipada e reuso de computação —, e um modelo de **2B com beam search
supera um de 12B por difusão**. Se isso se confirmar em produto, o ativo deixa de ser o modelo e
passa a ser **o verificador**: quem define a função que avalia candidatos define o que a busca
encontra.

**Por que agora, e não há cinco anos.** Porque o resultado em **vídeo** é de 09/01/2026. O VAR é de
abr/2024 e ficou dois anos restrito a imagem; o argumento de inferência é de out/2025; o VideoAR é
o primeiro VAR de larga escala para vídeo, com FVD no UCF-101 de 99,5 para 88,6 e VBench 81,74,
competitivo com modelos de difusão uma ordem de magnitude maiores. Antes disso não havia o que
disputar.

**Onde está na difusão.** **Laboratório e demonstração pública.** Nenhum produto comercial de
geração visual em set/2026 é autoregressivo por escala. Pela regra da skill, isto obriga
`confianca: baixa` ou `media` em toda a cadeia derivada, e é o ramo mais frágil deste mapa.

**O que ainda falta acontecer.** (a) Um produto. (b) Um tokenizador que não perca detalhe fino —
tipografia e pele são onde a quantização aparece. (c) **Todo o ferramental de controle reconstruído
para o paradigma novo**: ControlNet, LoRA e os nós comunitários são de difusão, e o controle é
justamente o objeto deste mapa. (d) Um verificador que valha ser treinado, o que é um problema de
dado de preferência, não de arquitetura.

**Quem bloqueia, e com que efeito.** O **próprio ecossistema aberto de controle**. Milhares de nós,
pesos, LoRAs, cursos e contratos de API são capital afundado em difusão; o custo de troca é alto e
recai sobre quem menos pode pagá-lo. O efeito previsível é a vitória do **híbrido** (AR para
estrutura, difusão para textura) sobre o puro — não porque seja melhor, mas porque preserva o
ferramental.

### R4 — A geração de imagem em movimento deixa de ser lote que se espera e passa a ser fluxo que se dirige durante a execução

**O que rompe.** Rompe o ciclo que define o ofício hoje — pedir, esperar, avaliar — e com ele três
coisas: a distinção entre *render* e *play* (não há arquivo final num fluxo infinito), a
precificação por geração (não existe "uma geração" num fluxo), e a divisão entre pré-visualização e
direção (se o previz corre em tempo real, o previz **é** o plano). Rompe também "o que a câmera
mostrou": edição causal a 12,66 FPS entra dentro de uma chamada de vídeo ao vivo.

**Por que agora, e não há cinco anos.** Porque a destilação causal de modelos bidirecionais passou
a funcionar. O MotionStream entrega latência abaixo de um segundo e até **29 FPS numa única GPU**,
**duas ordens de magnitude** mais rápido que os métodos condicionados a movimento anteriores, com
comprimento infinito; o LiveEdit, no ECCV 2026, faz edição em streaming a **12,66 FPS**. Há três
anos o piso era minutos por clipe, e o problema declarado da literatura era "processamento
não-causal que impede interação em tempo real" — exatamente o que foi removido.

**Onde está na difusão.** **Laboratório e demonstração pública.** Confiança baixa ou média em toda
a cadeia.

**O que ainda falta acontecer.** (a) Qualidade sustentada além de segundos sem deriva — os próprios
artigos gastam metade das contribuições em correção de erro acumulado. (b) O custo: fluxo
personalizado é **uma GPU por espectador** e não cacheia em CDN. (c) Uma linguagem de direção ao
vivo: hoje é arrastar trajetória com o mouse, o que é o equivalente a dirigir cinema com o
*joystick*. (d) Um lugar onde isso seja consumido — a distribuição de mídia foi construída para
arquivo, não para sessão.

**Quem bloqueia, e com que efeito.** **Quem paga a GPU.** Fluxo é servido, não distribuído, e a
economia de escala da mídia digital sempre foi o reuso: um arquivo, milhões de espectadores. O
fluxo elimina o reuso. O efeito é que a mídia sintética interativa fica confinada a contexto de
alto valor por sessão (treinamento corporativo, saúde, venda consultiva) e **não chega ao
entretenimento de massa dentro do horizonte** — e, de passagem, aumenta o consumo energético por
peça entregue, apesar de cada quadro ficar mais barato.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "O controle espacial explícito substitui o prompt como interface primária: geração e edição passam a ser a mesma operação"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "O estúdio de publicidade passa a entregar a família de variantes, não a peça: um sistema com regiões travadas e regiões variáveis"
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A remuneração da produção audiovisual publicitária migra de diária de equipe para licença de uso do sistema entregue
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Os sindicatos de técnicos de cinema publicitário no Brasil passam a negociar cláusula de uso derivado, e não só cachê de diária
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A agência perde a última milha criativa para o anunciante, que passa a trocar referência e destravar região sem intermediário
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Cresce dentro do anunciante a função de definir o que não pode variar, porque a variação ficou barata e o erro de marca ficou caro
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O compositor de VFX deixa de rotoscopar e passa a especificar máscara, referência e trajetória
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O posto de entrada da pós-produção desaparece antes do posto sênior, porque a tarefa repetitiva pela qual se aprendia o ofício é a que a máquina absorve
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "A contratação em animação e VFX passa a exigir portfólio de sistema — grafo, rig, máquina de estados — em vez de portfólio de quadros"
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Os acervos de imagem e vídeo de arquivo passam a ser vendidos como bancos de referência, por direito de condicionamento, e não por clipe
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Abre-se disputa contratual sobre quem detém o direito da referência de personagem — o intérprete, o estúdio ou o detentor do acervo
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: O grafo de nós, e não o prompt, vira o artefato versionado e revisável da produção visual
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "Estúdios passam a exigir reprodutibilidade como cláusula de entrega: semente, versão de modelo e grafo acompanham o master"
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: O pipeline visual passa a ser auditado como cadeia de suprimento de software, com licença de nó e proveniência de peso
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Modelo de peso aberto passa a ser requisito de produção, e não preferência ideológica, porque grafo reprodutível não sobrevive a modelo desligado
            sinal: forte
            prazo: 2027
            confianca: alta
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: O estúdio passa a arquivar o peso do modelo junto do master do projeto, porque o master sem o modelo deixou de ser refazível
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: A obrigação europeia de marca legível por máquina freia a adoção do controle fino na cadeia profissional, porque a isenção depende de a alteração ser apenas assistiva
        sinal: medio
        prazo: 2027
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Aparece a função de declarar, peça por peça, se a alteração foi assistiva ou substancial, porque ninguém media grau de alteração antes
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A régua de alteração substancial passa a ser fixada por litígio, e não por norma, porque o Código de Prática é voluntário e não traz limiar
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: As ferramentas de controle fino passam a registrar a própria intervenção — que região, que referência, que passo — porque provar isenção exige log
            sinal: fraco
            prazo: 2029
            confianca: media
      - id: e5
        ordem: 1
        efeito: A prática de gerar cinquenta e escolher uma perde valor econômico, e o custo se desloca da inferência para a especificação
        sinal: fraco
        prazo: 2029
        confianca: baixa
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: O preço das plataformas de geração migra de crédito por saída para assinatura por assento, porque a saída deixou de medir o trabalho
            sinal: fraco
            prazo: 2029
            confianca: baixa
  - disrupcao: "A animação deixa de ser arquivo a tocar e passa a ser máquina de estados a consultar: a peça carrega a própria lógica de resposta"
    efeitos:
      - id: e6
        ordem: 1
        efeito: A peça de motion design entregue a um produto deixa de ser arquivo de vídeo e passa a ser runtime com contrato de entradas
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O repasse do designer ao desenvolvedor deixa de ser etapa e vira revisão de interface, porque a lógica de transição passou para dentro do arquivo do designer
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: O designer de movimento passa a ser responsabilizado por falha de produto, porque a máquina de estados que ele desenhou roda em produção
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: A redução de movimento por preferência de acessibilidade vira um estado da própria animação, e não uma configuração do aplicativo
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: As peças passam a ser distribuídas com a variante sem movimento embutida como estado, porque manter duas peças separadas custa mais que um estado a mais
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: O vídeo programático passa a ser escrito por agente, e a peça personalizada por destinatário perde custo marginal relevante
        sinal: fraco
        prazo: 2028
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O onboarding de software e a comunicação transacional passam a embutir vídeo único por usuário, porque renderizar em pipeline de integração custa menos que desenhar um template
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A métrica de audiência perde sentido para peça de tiragem um, porque não existe a peça contra a qual comparar
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: A separação entre criativo e dado desaparece no pipeline de mídia, porque a mesma planilha alimenta a animação e o disparo
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e8
        ordem: 1
        efeito: O motion design procedural desce para plataforma de massa e deixa de ser diferencial de ofício
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: O valor do profissional de movimento migra da execução para a definição da regra, porque a execução virou botão de plataforma
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: O portfólio deixa de mostrar peças e passa a mostrar sistemas com os controles expostos, porque só o sistema distingue quem escreveu a regra de quem usou o preset
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: O feed das plataformas de distribuição não executa runtime e trava a mídia interativa na borda do produto
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: A mídia que responde se concentra em quem controla o próprio aplicativo e não chega a quem publica em plataforma alheia
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: O anunciante passa a comprar unidade interativa dentro do aplicativo da plataforma, e o formato da peça volta a ser ditado pelo intermediário
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "A arquitetura da geração visual volta a ser disputada: o autoregressivo por escala reabre a competição com a difusão"
    efeitos:
      - id: e10
        ordem: 1
        efeito: A latência, e não a qualidade, passa a ser a variável de escolha de modelo em produção
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: A busca em tempo de inferência com verificador vira etapa paga do pipeline visual, porque no espaço discreto ela funciona
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: O verificador, e não o gerador, passa a ser o ativo disputado, porque quem define a função de avaliação define o que a busca encontra
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: O ferramental de controle acumulado em difusão perde parte do valor, e o custo de troca de paradigma vira argumento comercial
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e10.2.1
                ordem: 3
                efeito: A comunidade aberta se divide em dois ecossistemas de controle incompatíveis, e o grafo deixa de ser portável entre paradigmas
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: Grupos pequenos e laboratórios acadêmicos voltam a definir o estado da arte em geração visual, porque arquitetura passou a decidir mais que tamanho
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: A técnica de controle passa a chegar ao grafo comunitário antes de chegar a qualquer produto, e o artigo vira changelog de quem produz mídia
            sinal: forte
            prazo: 2027
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: O tempo entre artigo e uso em produção cai abaixo do ciclo de homologação de software corporativo, e o departamento de compras deixa de conseguir aprovar ferramenta
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: O capital afundado em difusão financia a resistência ao paradigma novo, e a transição fica presa em comparação de benchmark
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: Modelos híbridos vencem os puros — autoregressivo para estrutura, difusão para textura — porque preservam o ferramental de controle existente
            sinal: fraco
            prazo: 2030
            confianca: baixa
  - disrupcao: A geração de imagem em movimento deixa de ser lote que se espera e passa a ser fluxo que se dirige durante a execução
    efeitos:
      - id: e13
        ordem: 1
        efeito: A direção de imagem em movimento passa a ser feita ao vivo, com a mão no controle e o resultado correndo
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: A pré-visualização deixa de ser etapa separada e se funde à direção, porque o previz em tempo real é o próprio plano
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: O roteiro técnico perde função de comunicação e vira registro posterior, porque a decisão passou a ser tomada com o resultado à vista
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e13.2
            ordem: 2
            efeito: O operador de câmera, e não o artista de pós-produção, herda o controle do fluxo generativo, porque a habilidade exigida é enquadrar em tempo real
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e13.2.1
                ordem: 3
                efeito: O sindicato de técnicos disputa a classificação do posto entre câmera e pós-produção, porque dela dependem piso salarial e crédito
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e14
        ordem: 1
        efeito: O custo da mídia sintética migra de geração por peça para serviço por espectador e por segundo, porque fluxo personalizado não se armazena em cache
        sinal: fraco
        prazo: 2029
        confianca: baixa
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: A mídia generativa interativa fica restrita a contextos de alto valor por sessão e não chega ao entretenimento de massa
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: A desigualdade de acesso se inverte em relação à geração por lote, porque gerar fica barato e dirigir ao vivo fica caro
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e14.2
            ordem: 2
            efeito: O consumo energético por peça entregue cresce apesar de cada quadro ficar mais barato, porque o fluxo elimina o reuso
            sinal: fraco
            prazo: 2030
            confianca: baixa
      - id: e15
        ordem: 1
        efeito: A edição em streaming entra na chamada de vídeo e na transmissão ao vivo, e o que a câmera mostra deixa de descrever o que aconteceu
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: A prova em vídeo perde o status de evidência autoevidente sem que uma regra nova a substitua
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: O ônus prático da autenticação migra para a cadeia de custódia do dispositivo, porque analisar o pixel deixou de decidir
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e15.2
            ordem: 2
            efeito: O mercado de autenticidade certificada por assinatura criptográfica não se realiza no prazo deste mapa
            sinal: forte
            prazo: 2027
            confianca: alta
            efeitos:
              - id: e15.2.1
                ordem: 3
                efeito: A verificação se desloca da criptografia para o contexto — quem publicou, com que histórico, corroborado por quê — porque a assinatura não sobrevive à distribuição
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e16
        ordem: 1
        efeito: A rejeição pública à mídia visivelmente sintética freia o uso aberto mesmo onde o custo já caiu
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e16.1
            ordem: 2
            efeito: A mídia sintética de alto orçamento passa a ser deliberadamente indistinguível e não declarada onde a lei não obriga
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e16.1.1
                ordem: 3
                efeito: A declaração de uso de IA vira sinal de posicionamento de marca entre artesanal e industrial, e não informação ao consumidor
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e16.2
            ordem: 2
            efeito: As produções passam a exibir o processo humano como prova de valor, porque o traço do trabalho virou o que diferencia
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e16.2.1
                ordem: 3
                efeito: O controle fino vira argumento de autoria e não de eficiência, porque quem pintou o quadro-chave assina e quem escreveu a frase não
                sinal: fraco
                prazo: 2030
                confianca: baixa
```

### 5.1 Os mecanismos que o bloco não carrega

O YAML diz *o quê*. Aqui vai o *porque*, ramo por ramo, com a classe de referência que sustenta
cada ano — prazo sem classe de referência é chute, e onde não tenho classe eu digo.

**As cinco classes de referência que usei em todo o mapa.**

| Classe | Do "funciona em demo" a uso profissional corrente | Usei em |
|---|---|---|
| ControlNet (fev/2023) → padrão de controle no ComfyUI | ~18 meses | e1, e2, e3, e11.1 |
| Difusão latente (ago/2022) → paradigma dominante de produto | ~24 meses | e10, e11, e12 |
| Lottie (2017) → padrão de animação em aplicativo | ~48 meses | e6, e8 |
| C2PA (spec dez/2021) → **nenhuma câmera conforme em meados de 2026** | **>54 meses, não chegou** | e15.2, e4.1.1 |
| VR de consumo (>10 anos, não chegou à massa) | não chegou | e14, e14.1 |

A última linha é a mais importante e a mais ignorada: **a infraestrutura de confiança é a coisa
mais lenta desta lista**, e qualquer efeito que dependa dela precisa de prazo longo ou de
`confianca: baixa`. Foi assim que calibrei todo o ramo de proveniência.

**R1, o ramo do controle.** O mecanismo de e1 é comercial, não técnico: quando travar região custa
menos do que refilmar, a peça deixa de ser o entregável porque o cliente pede a segunda versão — e
a segunda versão é grátis. O sinal é forte porque o artefato já existe: 83% dos executivos com IA
no processo criativo e 86% dos compradores usando ou planejando IA generativa para criativo de
vídeo (IAB, jan/2026). O prazo 2027 usa a classe ControlNet: dezoito meses de uma capacidade
demonstrada até prática corrente numa indústria que já tem o orçamento dentro. De e1 saem dois
filhos com **atores diferentes**, que é a regra de parada: e1.1 é sobre *como se paga* (sindicato,
produtora), e1.2 é sobre *quem decide* (agência, anunciante). Se fossem o mesmo ator, seriam o
mesmo efeito amadurecendo, e eu teria parado.

Em e2 o mecanismo é o encoder de contexto plugável: 6% dos parâmetros do backbone reconstroem
fundo que antes exigia quadro a quadro. E aqui está o único lugar em que uso a supressão de posto
como efeito **desta** raiz, e não como contexto: e2.1 não diz "há demissões em animação" — diz que
a tarefa que a máquina absorve é **exatamente** a tarefa pela qual se aprendia o ofício, e que por
isso o júnior desaparece antes do sênior. Essa frase não serve para qualquer outra causa, o que é o
teste de especificidade. O sinal é forte (75% dos executivos relatando eliminação, redução ou
consolidação de posto; 21,4% dos postos projetados no estudo da CVL Economics), mas a confiança é
**média**, não alta, porque a atribuição causal à raiz é parcial — e isso está declarado.

Em e3 o mecanismo é o mais simples do mapa e o mais consequente: **um grafo é um arquivo de texto,
um prompt é uma frase**. Arquivo de texto entra em controle de versão, em revisão por par, em
auditoria de dependência. Frase não. É por isso que e3 tem confiança alta e por isso e3.2 — peso
aberto como requisito — também: não é posição ideológica, é a consequência aritmética de a Sora ter
sido desligada. Se a reprodutibilidade é cláusula de entrega (e3.1) e o modelo é de terceiro, a
cláusula é inexequível. O e3.2.1 leva isso ao limite: arquivar o **peso** junto do master, o que
transforma um estúdio em repositório de modelos — 32B de FLUX.2 por projeto.

O e4 é a **retroação de R1**, e é a mais contraintuitiva do mapa. O Artigo 50(2) do AI Act isenta
IA que cumpra "apenas função assistiva de edição padrão" ou que não altere "substancialmente" a
entrada. Controle fino vive precisamente nessa zona: mudar a cor de uma parede numa região é
assistivo; trocar o rosto na mesma região não é. Como ninguém definiu o limiar — a Comissão
publicou diretrizes em 08/05/2026 e o Código de Prática em 10/06/2026, ambos sem número —, a
consequência racional de um estúdio europeu é **ser conservador**, ou seja, adotar menos controle,
não mais. O e4.2 é o ganho colateral: ferramentas que registram a própria intervenção, o que é
exatamente o registro de que a tese deste mapa depende.

O e5 é o efeito de que menos gosto e que mantive rebaixado: exige que plataformas mudem a
precificação contra o próprio interesse. Sinal fraco, confiança baixa, e assim fica.

**R2, o ramo da mídia que responde.** O mecanismo de e6 é o runtime único: quando o mesmo arquivo
executa em web, iOS, Android, Flutter, Unity e Unreal, o custo de entregar comportamento cai abaixo
do custo de descrevê-lo em especificação — e a especificação é justamente o *handoff*. O prazo 2028
usa a classe Lottie: quatro anos de uma capacidade demonstrada a padrão de aplicativo. O e6.1.1 é o
efeito com maior peso moral do mapa: se a animação é código em produção, o designer de movimento
entra na rotação de plantão. Ninguém está se preparando para isso.

Em e7 o mecanismo é a combinação de duas coisas que se encaixam sem que ninguém tenha planejado:
vídeo como componente React e agente que escreve componente React. A partir de jan/2026 o Remotion
tem integração com Agent Skills, e o custo de uma peça deixa de ser o design e passa a ser o
prompt de um agente que escreve código — que é reprodutível, ao contrário de prompt que gera pixel.
Rebaixei o sinal de e7 para **fraco** e o prazo para 2028: sessenta mil downloads semanais é nicho
de desenvolvedor, não indústria de mídia.

O e8 é o efeito mais duro deste ramo para quem vive de motion design e o mais fácil de verificar:
o Cavalry está **gratuito** e agora é **desenvolvido pela Canva**. Quando a ferramenta procedural
é grátis e mora na plataforma que 100 milhões de pessoas já abrem, a regra deixa de ser diferencial
de ofício. O e8.1 é para onde o valor migra, e o e8.1.1 é como isso aparece no mercado de trabalho:
o portfólio deixa de ser um rolo de peças e passa a ser um sistema com os controles expostos — que
é, aliás, exatamente o que este mapa propõe como experimento na seção 10.

O e9 é a **retroação de R2** e o freio mais forte de todo o documento. Vale dizer sem rodeio: a
terceira pergunta da disciplina — "se a animação vira máquina de estados, todo vídeo vira
interativo?" — tem, neste mapa, resposta **não**. Não porque a tecnologia não permita, mas porque
quem distribui não executa runtime. O efeito de segunda ordem (e9.1) é distributivo e desagradável:
mídia que responde se concentra em quem tem produto próprio, e quem publica na casa de outro
continua entregando vídeo achatado. O e9.1.1 fecha o ciclo histórico: o formato volta a ser ditado
pelo intermediário, como foi com o banner.

**R3, o ramo da arquitetura.** Este é o ramo especulativo, e eu o declaro como tal: `laboratório e
demonstração pública`, nenhum produto, confiança média ou baixa em toda a cadeia. O mecanismo de
e10 é que a difusão paga passos e o autoregressivo paga tokens — e token discreto permite poda
antecipada e reuso, o que é a razão pela qual 2B com beam search supera 12B. O prazo 2029 usa a
classe difusão latente: dois anos de paper a produto dominante, contados de jan/2026 (VideoAR, o
primeiro resultado em vídeo), mais um ano de margem porque **o ferramental de controle não existe
ainda** para o paradigma novo.

O e10.1.1 é o efeito de terceira ordem de que tenho mais dúvida e mais interesse: se a busca em
tempo de inferência funcionar, o ativo disputado deixa de ser o gerador e passa a ser **o
verificador** — a função que diz qual candidato é melhor. Quem define essa função define o gosto.
Prazo 2032, fora do horizonte, e declarado como tal.

O e12 é a **retroação de R3**: o capital afundado em difusão — nós, LoRAs, cursos, contratos —
paga para que a transição não aconteça, e o resultado provável é o híbrido (e12.1), que é o
desfecho menos elegante e mais frequente na história de infraestrutura.

**R4, o ramo do fluxo.** Mecanismo de e13: destilação causal remove o processamento
não-causal, e sem ele a latência cai de minutos para menos de um segundo. Isso não melhora a
geração — muda **quem decide**, porque decidir com o resultado à vista é outro ato. O e13.2 é onde
tomei o maior cuidado: a skill proíbe "surge uma nova profissão", e a versão original deste efeito
era exatamente isso. Reescrevi como **realocação de um cargo existente** — o operador de câmera
herda o controle, não o artista de pós —, o que é específico, tem perdedor nomeado e é falseável.

O e14 é o contrapeso econômico, e sustenta a única contradição deliberada do mapa: a mídia sintética
fica mais barata por quadro **e** mais cara por espectador, porque o fluxo elimina o reuso. O e14.2
é o único efeito ecológico do mapa e vai contra a intuição: eficiência por quadro não reduz consumo
total quando a unidade de entrega deixa de ser compartilhável.

O e15 é o ramo da prova, e é onde o mapa se separa da leitura corrente. A leitura corrente diz:
vídeo fica barato → prova em vídeo perde valor → **nasce um mercado de autenticidade certificada**.
Os dois primeiros passos estão no mapa (e15, e15.1). O terceiro, não: **e15.2 diz que não nasce no
prazo**, com sinal forte e confiança alta, e os artefatos são quatro — a análise por métodos
formais de 27/04/2026 concluindo que as especificações do C2PA falham em atingir os próprios
objetivos de segurança e recomendando não usá-las para prova jurídica; nenhuma câmera conforme ao
programa em meados de 2026; a revogação de certificados do Nikon Z6III; e o "Won't fix
(infeasible)" do Google para a assinatura arbitrária com root no Android. Some-se o comitê federal
de regras de evidência dos EUA, que examinou emenda à Rule 901 em 02/05/2025 e **decidiu não
emendar**. O que sobra é e15.2.1: a verificação migra da criptografia para o contexto.

O e16 é a **retroação de R4** e a mais visível no Brasil. A abertura de *Coração Acelerado*
(Globo, 12/01/2026) foi criticada em massa não por ser ruim, mas por **parecer feita com IA** — e
esse é o mecanismo: a penalidade é estética e reputacional, não legal. Daí saem dois filhos que se
opõem: e16.1 (esconder melhor, porque no Brasil não há obrigação de declarar) e e16.2 (exibir o
processo humano, porque o traço virou o diferencial). Os dois estão acontecendo ao mesmo tempo, em
faixas de orçamento diferentes, e eu não resolvo — registro.

### 5.2 Cobertura: STEEP e quem perde

| Eixo | Efeitos de 1ª ordem | Observação |
|---|---|---|
| **Social** | e2, e8, e16 | supressão do posto de entrada, desqualificação do ofício, rejeição pública |
| **Tecnológico** | e3, e6, e10, e11, e13, e15 | grafo, runtime, arquitetura, fluxo, edição ao vivo |
| **Econômico** | e1, e5, e7, e12, e14 | entregável, precificação, custo marginal, capital afundado |
| **Ecológico** | e14 (e o filho e14.2) | **eixo quase vazio**, e declaro: só um efeito, de sinal fraco |
| **Político/regulatório** | e4, e9 | marcação obrigatória na UE; poder de formato do intermediário |

O eixo **ecológico** ficou quase vazio, e prefiro registrar isso a forçá-lo. A razão é que não
encontrei nenhuma fonte aberta com número de consumo energético por peça de vídeo gerado — e o
único efeito que consegui escrever com mecanismo (o fluxo elimina o reuso) é inferência, não
medição. É uma lacuna real deste mapa.

**Quem perde, nomeadamente** — porque roda que só lista quem ganha está incompleta:

1. **O assistente de pós-produção e o inbetweener.** e2.1: o posto de entrada é o que a máquina
   absorve primeiro. Perdem duas vezes: o emprego e a via de aprendizado.
2. **A agência de publicidade, na última milha.** e1.2: quem trava região e troca referência não
   precisa de agência para a variante número 47.
3. **O motion designer que vive de execução.** e8: a regra procedural é grátis e está na Canva.
4. **O licenciador de imagem de arquivo por clipe.** e2.2: o valor migrou do plano para a
   referência, e o contrato dele é por plano.
5. **Quem publica em plataforma alheia.** e9.1: fica com vídeo achatado enquanto quem tem app
   entrega mídia que responde.
6. **Quem apostou em proveniência criptográfica como produto.** e15.2: o instrumento recebeu
   parecer técnico independente negativo antes de virar mercado.
7. **A comunidade aberta de controle em difusão.** e10.2: se o paradigma virar, o capital dela é o
   que se deprecia.
8. **O espectador, na prova.** e15.1: perde a evidência autoevidente sem ganhar substituto.

### 5.3 Cruzamentos

**Convergência 1 — o fim do master, e é o achado mais valioso do mapa.** Dois ramos de raízes
diferentes chegam ao mesmo lugar por caminhos que não se conhecem. Em R1, e3.1 e e3.2.1 dizem que o
entregável passa a ser grafo + semente + **peso do modelo**, porque sem o modelo o master não é
refazível. Em R2, e6 diz que o entregável é **runtime**, porque a peça carrega a lógica. Em R4, e14
diz que a peça é **sessão**, porque o fluxo não se armazena. Os três convergem em: **deixa de
existir um arquivo que seja "a obra"**. Isso tem consequência jurídica direta, e é onde o mapa
encosta no direito: registro de direito autoral pressupõe um depósito. Se não há artefato fixo,
o que se deposita — o grafo? o runtime? o peso? Nenhuma das três coisas é obra no sentido da lei, e
nenhuma fonte que abri trata do problema.

**Convergência 2 — o controle é o que produz autoria.** Em R1, e4.2 diz que a ferramenta passa a
registrar a intervenção (para provar isenção de marcação). Em R4, e16.2.1 diz que quem pintou o
quadro-chave assina e quem escreveu a frase não. As duas convergem no requisito de autoria humana
que a Suprema Corte deixou de pé em 02/03/2026 e na orientação do Escritório de Direitos Autorais
de 16/03/2023 — declarar o que a máquina fez e descrever a contribuição humana, protegendo só esta.
**Convergência independente por três caminhos — europeu regulatório, americano autoral e estético —
é sinal forte**, e é o que sustenta a tese do resumo: o objeto disputado é o registro da
intervenção.

**Retroalimentação positiva.** e16 (rejeição ao que parece feito por IA) **reforça R1**: quem
controla região, referência e quadro-chave produz peça que não denuncia a origem. A retroação
estética, portanto, não freia o controle fino — acelera. Este é o único ciclo virtuoso do mapa, e é
virtuoso apenas para quem já tem ferramental; para quem só tem prompt, é punição.

**Retroalimentação negativa.** e4 (isenção europeia dependente de a alteração ser assistiva)
**freia R1** na cadeia profissional europeia, porque o incentivo é ficar do lado assistivo da
fronteira, e o lado assistivo é justamente o menos ambicioso do controle.

**Contradição 1, e não resolvo.** e5 diz que o custo por peça cai (menos gerações, mais
especificação); e14.2 diz que o consumo energético por peça cresce (fluxo elimina o reuso). Os dois
podem ser verdade em faixas diferentes: cai no lote, cresce no fluxo. **O que decide entre eles** é
se o fluxo em tempo real sai do laboratório — e é a mesma pergunta que decide R4.

**Contradição 2, e também não resolvo.** e6 diz que a peça vira runtime que roda em todo lugar; e9
diz que o feed não executa runtime e trava a mídia interativa dentro do produto. **O que decide** é
uma decisão de plataforma, não técnica: se um feed grande passar a executar runtime — e um único
anúncio resolveria —, e9 cai e e6.1 acelera três anos.

**Contradição 3.** e16.1 (esconder melhor) e e16.2 (exibir o processo humano) são estratégias
opostas derivadas do mesmo efeito pai. **O que decide** é o orçamento: quem tem dinheiro para
indistinguibilidade esconde; quem não tem transforma o traço em argumento.

### 5.4 A regra de parada, aplicada

Parei em três lugares e registro por quê, porque a regra da skill é derivar só enquanto houver
troca de ator ou de mecanismo.

- **e5.1 não tem filho.** O filho natural seria "o mercado de plataformas de geração se consolida
  em poucos fornecedores por pressão de margem" — que é o mesmo efeito amadurecendo, com o mesmo
  ator, e não outra ordem.
- **e7.2 não tem filho.** O filho seria "o marketing passa a ser feito por engenharia de dados",
  que é genérico e serve a qualquer tema.
- **e12.1 não tem filho.** O filho seria "o híbrido vira padrão", que é o mesmo efeito no tempo.

## 6. Sinais fracos e wildcards

Sinal fraco, no sentido de Hiltunen, é o que quase não aparece hoje e mudaria o mapa se crescesse.
Para cada um: onde foi visto, o que mudaria, e **o sinal observável** que diria que está crescendo.

### 6.1 A instrução desenhada dentro do quadro

**Onde foi visto.** In-Video Instructions, 24/11/2025, três autores, **46 estrelas no GitHub**.
A ideia: em vez de descrever a ação em texto, você **desenha** no quadro de entrada — seta, texto
sobreposto, trajetória — e o modelo de vídeo lê o desenho como instrução. Testado no Veo 3.1,
Kling 2.5 e Wan 2.2, sem treino adicional.

**O que mudaria.** Tudo, no nível da interface. Se o modelo lê o quadro anotado, então o
instrumento de direção não é nem prompt nem máscara: é **rabisco**, que é o gesto mais antigo de
direção de arte que existe. E, crucialmente, o rabisco é um artefato **do humano**, datado,
versionável e exibível — exatamente o tipo de registro que e4.2 e e16.2.1 pedem.

**Sinal observável.** A ferramenta de anotação virar recurso de interface num produto comercial de
vídeo — um botão de seta ao lado do campo de texto. Custa pouco para a Runway ou a Luma testar; se
uma delas fizer, a coisa é real. Se em doze meses continuar em 46 estrelas, não é.

### 6.2 O motion procedural absorvido por plataforma de massa

**Onde foi visto.** O Cavalry está gratuito para uso individual, nas versões 2.6.1 e 2.7, e
**passou a ser desenvolvido pela Canva**, com edição empresarial via Canva Enterprise e Canva
Education. A frase da própria página — "ajuste um único valor, veja sistemas inteiros responderem" —
é a definição de design procedural, escrita numa página de produto gratuito.

**O que mudaria.** Aceleraria e8 e e8.1 em dois ou três anos. Se a Canva expuser controle de regra
na própria interface, "definir comportamento" deixa de ser habilidade de ofício e passa a ser
recurso de planilha — e o valor do motion designer migra para a definição de regra antes de 2029.

**Sinal observável.** A aparição de controle procedural (duplicador, falloff, dinâmica) na interface
principal do Canva, e não num aplicativo separado. Também serve: uma vaga de emprego na Canva com
"procedural motion" no título.

### 6.3 O topo da linha aberta fechando

**Onde foi visto.** O Wan 2.2 está sob Apache 2.0, com pesos no GitHub e no Hugging Face. O **Wan
2.5**, com áudio-vídeo nativo, existe **só por API da Alibaba Cloud, sem pesos públicos**.

**O que mudaria.** Derrubaria e3.2, que é um dos dois efeitos de segunda ordem com confiança alta
neste mapa. "Peso aberto como requisito de produção" pressupõe que o peso aberto continue
competitivo; se o aberto congelar uma geração atrás e o topo fechar, a reprodutibilidade deixa de
ser opção e o estúdio volta à dependência de plataforma — e o desligamento da Sora vira o
precedente, não a exceção.

**Sinal observável.** Wan 3, ou o próximo LTX-Video, sair sem pesos. Ou o inverso: FLUX.2 [klein]
sob Apache 2.0 efetivamente publicado e adotado em produção, o que confirmaria e3.2.

### 6.4 O produto de vídeo generativo que não sustentou negócio

**Onde foi visto.** Não é rumor: é a página de depreciações da OpenAI. Notificação em **24/03/2026**,
remoção da Videos API e dos modelos `sora-2`, `sora-2-pro` e *snapshots* em **24/09/2026**, com o
aplicativo e a web encerrados em **26/04/2026** e **nenhum substituto indicado**. A razão relatada é
redirecionamento de computação para código e clientes corporativos.

**O que mudaria.** Já mudou este mapa: é o artefato que sustenta e3.2 com confiança alta. O que
falta saber é se é caso isolado ou padrão. Se for padrão, a camada de controle (ComfyUI, Rive,
Remotion) ganha por sobrevivência, não por mérito — e a tese fica mais forte por um motivo triste.

**Sinal observável.** Um segundo grande desligar produto de vídeo generativo, ou uma plataforma
fechada passar a oferecer exportação de grafo e fixação de versão de modelo por contrato — que
seria a resposta racional ao medo que o desligamento criou.

### 6.5 O parecer técnico contra a proveniência criptográfica

**Onde foi visto.** Análise independente por métodos formais das especificações do C2PA, onze
autores, **27/04/2026**, com a conclusão de que "as especificações atuais do C2PA falham em atingir
seus objetivos de segurança declarados" e a recomendação explícita de não usá-las para jornalismo,
divulgação financeira ou prova jurídica. Ao lado disso: nenhuma câmera conforme ao programa em
meados de 2026; certificados do Nikon Z6III revogados; e o **"Won't fix (infeasible)"** do Google
para a assinatura arbitrária com acesso root no Android, em ago/2026.

**O que mudaria.** Isto não é sinal fraco de algo que vai crescer — é sinal forte de algo que **não
vai**, e está no mapa como e15.2. Está listado aqui porque quase ninguém no campo de mídia sabe
que existe, e porque a inércia da narrativa "o C2PA resolve" é enorme: a especificação está na
versão 2.4, tem LinkedIn, TikTok, YouTube, OpenAI, Google, Microsoft e Anthropic declarando suporte,
e quase cinco anos de idade.

**Sinal observável.** Uma redação grande abandonar publicamente o C2PA, ou o Programa de
Conformidade certificar a primeira câmera — o que inverteria o sinal. Vale acompanhar também se a
versão 2.5 responde aos achados por nome.

### 6.6 O filme inteiramente gerado, no festival de primeira linha — que já aconteceu

**Onde foi visto.** *Dreams of Violets*, de Ash Koosha, docudrama sobre o massacre de civis
iranianos em jan/2026, **inteiramente gerado por IA**, com orçamento declarado pelo diretor de
**cerca de US$ 2.000** ("o CGI teria custado milhões; eu gastei US$ 2.000", em entrevista ao
*Guardian* em jun/2026), **estreado no Tribeca Film Festival em 10/06/2026** como a primeira estreia
de um filme totalmente gerado por IA naquele festival.

**Por que está aqui e não nos wildcards.** Porque o wildcard proposto pelo enunciado da disciplina —
"um filme de longa-metragem feito por uma pessoa entrar num festival de primeira linha" — **deixou
de ser wildcard**. Aconteceu em junho de 2026, num festival fundado por Robert De Niro, com custo
de três dias de aluguel de equipamento. O que resta de improvável não é a estreia: é o **prêmio**.
E há um detalhe que ninguém comenta e que este mapa registra: pela regra de autoria humana, um
filme "inteiramente gerado" tem proteção autoral **duvidosa** nos EUA — o que significa que a via
barata de produção é também a via sem propriedade.

**Sinal observável.** Um filme com geração como técnica principal em competição oficial (não mostra
paralela) em Cannes, Berlim, Veneza ou Annecy — no Annecy 2026, de 21 a 27/06, os prêmios
principais foram todos para obra de animação convencional, e a página do festival que abri não
registra nem política sobre IA nem seleção de obra gerada.

### 6.7 Wildcard 1 — um tribunal descarta vídeo autêntico por impossibilidade de autenticação

**Mecanismo.** Encadeia três coisas que já existem separadamente. (a) A edição causal em streaming
funciona a 12,66 FPS, o que significa que uma transmissão ao vivo pode ser alterada **enquanto
acontece**, e não em pós. (b) A infraestrutura construída para resolver isso recebeu parecer
técnico independente dizendo que não atinge os próprios objetivos de segurança e não deve ser usada
como prova jurídica. (c) O comitê federal de regras de evidência dos EUA examinou emenda à Rule 901
em 02/05/2025 e **decidiu não emendar**, apostando na Rule 403 e no papel do juiz como filtro. Junte:
um juiz, invocando a Rule 403, exclui um vídeo **genuíno** porque o prejuízo de apresentá-lo ao júri
como autêntico supera o valor probatório, dado que ninguém consegue demonstrar autenticidade. O
"dividendo do mentiroso" se inverte: não é o culpado que alega deepfake — é o inocente que perde a
prova.

**Por que é improvável.** Porque tribunais são conservadores com admissibilidade e porque a
testemunha com conhecimento direto continua sendo caminho suficiente de autenticação. A exclusão
exigiria um caso sem testemunha e com contestação técnica competente.

**O que faria com o mapa.** e15.1 subiria de `media` para `alta` e antecipava para 2028, e
e15.1.1 (cadeia de custódia do dispositivo) deixaria de ser terceira ordem e viraria requisito
imediato de hardware — o que criaria, aí sim, o mercado que e15.2 diz que não nasce, mas por
obrigação judicial e não por adoção de padrão.

**Sinal precoce.** Uma decisão de tribunal de apelação, em qualquer jurisdição, que **cite
explicitamente a impossibilidade de autenticação** de vídeo como fundamento de exclusão. Vale
também: uma ordem judicial exigindo cadeia de custódia de dispositivo para admitir vídeo.

### 6.8 Wildcard 2 — um provedor de modelo fechado é obrigado judicialmente a entregar o peso

**Mecanismo.** Se e3.1 se concretizar — reprodutibilidade como cláusula de entrega —, então um
contrato de produção passa a exigir que a peça seja refazível. Quando o modelo é de terceiro e o
terceiro o desliga (o precedente é de 24/09/2026), a cláusula fica inexequível e o contratante
processa o estúdio; o estúdio chama o provedor à lide; e o tribunal se depara com um pedido de
**exibição de peso de modelo** como obrigação de fazer, sob segredo de justiça. Não é
inconcebível: exibição de código-fonte sob NDA já é rotina em disputa de software.

**Por que é improvável.** O valor comercial do peso é alto o bastante para que o provedor prefira
indenizar, e a indenização resolve o caso sem criar o precedente.

**O que faria com o mapa.** Transformaria e3.2 de requisito prático em requisito contratual com
força judicial, e tornaria o peso aberto o padrão da produção profissional antes de 2029 — não por
ideologia, por gestão de risco jurídico.

**Sinal precoce.** Uma cláusula de *model escrow* (custódia de peso por terceiro) aparecer em
contrato-padrão de produção audiovisual, do mesmo jeito que *source code escrow* aparece em
contrato de software.

## 7. Contra o próprio mapa

Esta é a bateria do §6 da skill, aplicada por escrito sobre o mapa já montado. **Ela derrubou
coisas** — o registro auditável de alterações está em 7.8, e a cota mínima de um rebaixamento ou
remoção por raiz foi cumprida nas quatro.

### 7.1 Pré-mortem: é 2031 e este mapa se mostrou errado. Por quê?

**Razão 1, a mais provável: o controle foi embutido e ficou invisível.** O modelo passou a
"entender" a intenção bem o bastante para que o operador voltasse a escrever frase — e o controle
explícito, que este mapa trata como interface, virou detalhe interno de implementação. **E esta
razão já tem artefato, não é especulação:** a Runway anuncia que o Aleph 2.0 **elimina máscara e
rastreamento manuais**, com o prompt de texto como único controle discutido, e vende isso como
vantagem sobre o fluxo de máscara dos concorrentes. Quem inventou o *motion brush* está vendendo
a ausência de pincel. Nesse mundo,
R1 não é ruptura: é melhoria sustentadora com interface diferente, e a tese do registro da
intervenção cai junto, porque não há registro de quem só descreveu. **O que fiz:** rebaixei e5
(sinal `medio` → `fraco`, confiança `media` → `baixa`, prazo 2028 → 2029), que era o efeito mais
dependente de o controle permanecer visível na interface e na precificação. Mantive e3 em alta
porque o grafo reprodutível resolve um problema — auditoria e refazibilidade — que "entender melhor
a intenção" não resolve.

**Razão 2: a arquitetura não trocou.** O autoregressivo por escala ficou em benchmark, o híbrido
venceu, e R3 inteira virou nota de rodapé. **O que fiz:** empurrei e10 de 2028 para 2029, mantive
todo o ramo com confiança média ou baixa, e **removi** o efeito de terceira ordem que era genérico
(ver 7.8). Registro também o teste da raiz que não acontece: se R3 não se concretizar, **o mapa
sobrevive** — e10.2, e11 e e12 caem, e as outras três raízes continuam de pé. Isso é sinal de que
as raízes não são uma só disfarçada em quatro.

**Razão 3: o fluxo em tempo real não saiu do laboratório, por custo de GPU por espectador.** É o
cenário mais fácil de imaginar, porque é a história do VR de consumo: demo impressionante,
economia impossível. **O que fiz:** empurrei e13 de 2028 para 2029, rebaixei a confiança de e14
para `baixa`, e deixei o ramo inteiro em sinal fraco. E **não** permiti que R4 sustentasse
sozinha nenhum efeito de segunda ordem importante: e15.1 (prova em vídeo) tem mecanismo
independente do tempo real — a edição de região por lote já basta para corroê-la.

### 7.2 Extrapolação linear: o que é só "mais do mesmo, maior"

Três efeitos passaram por este teste e dois não sobreviveram intactos.

- **e7 (vídeo programático por agente) era extrapolação.** "Mais automação de vídeo" é a forma
  genérica de qualquer tendência de 2026. O que o salvou foi a não-linearidade: quando o artefato
  é **código**, o agente pode revisá-lo, e a peça deixa de ser opaca. Mas rebaixei o sinal de
  `medio` para `fraco` e empurrei o prazo de 2027 para 2028, porque sessenta mil downloads semanais
  é população de desenvolvedor, não de indústria de mídia.
- **e5 (fim do gerar-cinquenta-e-escolher-um) era extrapolação pura** — "custos caem" — e perdeu
  força: sinal fraco, confiança baixa. Não virou contexto porque tem mecanismo próprio (a unidade
  de trabalho muda de tentativa para edição), mas ficou rebaixado.
- **e10 (latência vira a variável de escolha) tem não-linearidade legítima** e por isso ficou: não
  é "mais rápido", é uma **mudança de espaço** (discreto em vez de contínuo) que habilita busca —
  2B superando 12B é descontinuidade, não escala.

E um teste que o mapa **não** passou limpo, e que registro em vez de esconder: a tese de R1 é que o
controle explícito substitui o prompt, e há um fornecedor de primeira linha fazendo o caminho
inverso em produto, não em pesquisa — o Aleph 2.0 da Runway retira máscara e rastreamento e devolve
o comando ao texto. Não rebaixei R1 por isso, porque o argumento do mapa não é que o prompt
desaparece: é que **o registro da intervenção** passa a valer juridicamente, e "descreva o que
remover" não produz registro nenhum. Mas se em 2028 a interface dominante do controle fino for
descritiva e não espacial, e3 e e4.2 caem — e com eles metade da tese.

### 7.3 Velocidade de adoção: prazos confrontados com a classe de referência

Confrontei cada efeito de sinal fraco com a classe de referência da tabela de 5.1. Três prazos
exigiam adoção mais rápida do que qualquer caso comparável, e os três foram empurrados:

- **e13 (direção ao vivo): 2028 → 2029.** A classe é difusão latente, dois anos de paper a
  produto. O MotionStream é de nov/2025, revisado em mar/2026; dois anos daria 2028. Empurrei um
  ano porque, ao contrário da difusão, **não existe produto comercial nenhum** com direção ao vivo
  em set/2026 — a difusão, em 2022, já tinha o Midjourney.
- **e10 (latência como critério): 2028 → 2029.** Mesmo raciocínio, agravado: o resultado em vídeo é
  de jan/2026 e o ferramental de controle para o paradigma **não existe**.
- **e14.1 (restrição a alto valor por sessão): mantido em 2030 com confiança baixa.** A classe é VR
  de consumo, que em dez anos não chegou. Se eu fosse rigoroso com essa classe, o prazo sairia do
  horizonte; mantive 2030 porque o caso de uso corporativo tem orçamento por sessão que o VR nunca
  teve, e declaro que essa é a parte mais frágil do raciocínio.

Um prazo foi **antecipado** por confronto, e é justo registrar: **e15.2 (o mercado de autenticidade
não se realiza) ficou em 2027**, com confiança alta, porque o artefato que o sustenta já existe —
não é previsão de adoção, é leitura de um parecer publicado em abr/2026 e de um programa de
conformidade com zero câmeras em quase cinco anos.

### 7.4 A raiz que não acontece

- **Se R1 não acontecer** (o controle fica invisível): caem e1 a e5 e, com eles, a tese central.
  Sobrevivem R2 (mídia que responde não depende de como se gera o pixel), R4 (a prova em vídeo se
  corrói de todo jeito) e parte de R3. O mapa perderia a espinha, não o corpo.
- **Se R2 não acontecer** (a mídia interativa fica nos aplicativos e não se generaliza): caem e6 a
  e9. Note que **e9 é a própria hipótese de R2 não acontecer**, registrada como retroação — e por
  isso este ramo já contém o próprio desmentido. É deliberado.
- **Se R3 não acontecer**: caem e10 a e12, e o mapa fica **praticamente intacto**. Este é o ramo
  mais dispensável, e digo isso para que ninguém o leia como aposta.
- **Se R4 não acontecer**: caem e13 e e14 inteiros; e15 e e16 **sobrevivem**, porque a corrosão da
  prova em vídeo e a rejeição estética não precisam de tempo real — a edição de região por lote e
  a abertura de uma novela já bastam.

Conclusão do teste: as quatro raízes não são uma só disfarçada. R3 é a mais frágil e a mais
dispensável; R1 é a que carrega a tese.

### 7.5 Suposições escondidas que o mapa faz sem dizer

Cinco, e cada uma quebrada é um wildcard novo ou um efeito a remover.

1. **Que peso aberto continua saindo.** Todo o ramo de reprodutibilidade (e3.1, e3.2, e3.2.1)
   pressupõe isso, e 6.3 mostra que o topo da linha já fechou (Wan 2.5 só por API). Se o aberto
   congelar, e3.2 cai de `alta` para `baixa`.
2. **Que a computação continua acessível ao profissional individual.** TI2V-5B roda em 24 GB, mas
   os modelos A14B pedem 80 GB. Se o hardware de ponta ficar restrito a datacenter, o grafo
   reprodutível vira privilégio e e3 perde metade do alcance.
3. **Que a regulação europeia é estável.** O mapa usa 02/08/2026 e 02/12/2026 como âncoras, mas a
   proposta de *AI Omnibus* já mexeu no prazo de marcação uma vez. Regulação que muda de data é
   regulação que muda de conteúdo.
4. **Que as plataformas continuam permitindo.** e7 (vídeo personalizado por destinatário) e e9.1
   pressupõem políticas de plataforma que podem mudar por decisão unilateral em um comunicado.
5. **Que o Brasil segue a Europa.** O mapa assume que a obrigação de declarar chega ao Brasil por
   via legislativa (PL 2338) ou autorregulatória (CONAR), e o dado é o oposto: o guia do CONAR de
   12/05/2026 aplica o CBAP a conteúdo de IA e **não exige disclosure**. Se essa assimetria
   persistir, e16.1 (esconder melhor) vence e16.2 (exibir o processo) no mercado brasileiro — o que
   torna o Brasil um laboratório de mídia sintética não declarada.

### 7.6 O viés do autor

Três, nomeados.

**Primeiro, o viés de quem gosta de sistema.** Eu escolhi o eixo "controle é o que produz autoria,
isenção e reprodutibilidade" em parte porque é uma tese elegante e articulável. O contra-argumento
honesto é que a maior parte da mídia sintética do mundo em 2031 será feita sem nenhum registro, por
pessoas que não precisam de autoria nem de isenção, e que este mapa descreve a fatia
profissional — que é a minoria em volume. **O efeito que mais deve a esse viés é e3**, e o mantive
em confiança alta; se o mapa estiver errado em um lugar só, provavelmente é aí.

**Segundo, o viés da ferramenta aberta.** Escrevi três efeitos que favorecem peso aberto e grafo
versionável (e3.1, e3.2, e3.2.1), e isso coincide com a minha própria prática. Compensei colocando
6.3 (o topo fechando) como sinal fraco explícito e nomeando a suposição em 7.5.1 — mas não
compensei rebaixando a confiança, e é uma escolha discutível.

**Terceiro, a omissão por desconforto.** Não escrevi nenhum efeito sobre **uso não consentido de
imagem de pessoa real** — deepfake sexual, fraude com rosto de família, propaganda política com
rosto de candidato —, que é indiscutivelmente o uso de maior volume e maior dano do controle fino
sobre região do quadro. A razão declarada é de recorte: o enunciado do tema fala de mídia sintética
dirigível como instrumento profissional, e o dano a pessoa identificável está distribuído entre o
tema 13 (voz) e a agenda de segurança. A razão não declarada é que o ramo é desagradável de
escrever. **Registro a omissão como falha**, não como escolha metodológica, e um mapa completo teria
esse ramo com quatro efeitos e uma retroação legal.

### 7.7 Calibração

| Ordem | alta | media | baixa | total |
|---|---|---|---|---|
| 1ª | 6 | 8 | 2 | 16 |
| 2ª | 2 | 20 | 5 | 27 |
| 3ª | 0 | 0 | 22 | 22 |

A proporção de confiança alta cai de 37,5% para 7,4% para 0%. As duas de segunda ordem com
confiança alta são e3.2 (peso aberto como requisito, sustentada pelo desligamento da Sora, que é
fato consumado) e e15.2 (o mercado de autenticidade não se realiza, sustentada por um parecer
publicado e por zero câmeras conformes) — nas duas, o que sustenta a confiança é **um evento
passado**, não uma projeção. Toda a terceira ordem está em baixa, que é a resposta esperada.

### 7.8 Registro de alterações da bateria

Auditável, com `id`, valor **antes** e valor **depois**. Nenhuma raiz saiu ilesa.

**R1 (controle explícito)**
- `e5`: sinal `medio` → `fraco`; confiança `media` → `baixa`; prazo `2028` → `2029` — porque exige
  que plataformas mudem a precificação contra o próprio interesse, e porque a Razão 1 do pré-mortem
  (controle embutido e invisível) o atinge em cheio.
- `e5.1`: confiança `media` → `baixa` — herda o rebaixamento do pai.
- `e4`: **acrescentado depois da primeira rodada**, como retroação da raiz. A primeira versão de R1
  não tinha freio, o que a skill classifica como propaganda. A isenção do Artigo 50(2) é o freio, e
  é específico.

**R2 (mídia que responde)**
- `e7`: sinal `medio` → `fraco`; prazo `2027` → `2028` — sessenta mil downloads semanais é população
  de desenvolvedor; o teste de extrapolação linear (7.2) pegou a formulação original.
- **Removido:** *"Todo vídeo se torna interativo."* É a pergunta de terceira ordem do enunciado da
  disciplina escrita como se fosse efeito, sem ator e sem mecanismo. Partido em **e6** (acontece
  dentro do produto) e **e9** (não acontece na distribuição), que se contradizem de propósito — e a
  contradição está registrada em 5.3.

**R3 (arquitetura)**
- `e10`: prazo `2028` → `2029` — confronto com a classe de referência da difusão latente, agravado
  pela inexistência de ferramental de controle no paradigma novo.
- **Removido e substituído:** *"O profissional de mídia passa a ler arXiv como o de software lê
  changelog"* era o antigo `e11.1.1` — genérico, sem ator nomeado e sem consequência mensurável.
  Substituído pelo atual `e11.1.1` (o tempo entre artigo e produção cai abaixo do ciclo de
  homologação corporativa, e compras deixa de conseguir aprovar ferramenta), que tem ator — o
  departamento de compras — e consequência verificável.
- `e12.1`: confiança `media` → `baixa` — é especulação sobre desfecho de disputa arquitetural sem
  nenhum produto existente.

**R4 (fluxo em tempo real)**
- `e13`: prazo `2028` → `2029` — nenhum produto comercial com direção ao vivo em set/2026.
- `e14`: confiança `media` → `baixa` — a classe de referência aplicável é VR de consumo, que não
  chegou em dez anos.
- **Reescrito:** *"Surge a profissão de operador de fluxo generativo"* violava a proibição explícita
  da skill ("surge uma nova profissão"). Reescrito como `e13.2`: **realocação** de um cargo
  existente — o operador de câmera herda o controle, e não o artista de pós-produção —, com o
  mecanismo (a habilidade é enquadrar em tempo real) e o perdedor nomeados.

**Removidos por serem proibidos sem ator e mecanismo** (os dois estavam na primeira rodada e vão
para a seção 12):
- *"Cursos de animação reorganizam o currículo em torno de direção."*
- *"Reguladores criam uma categoria nova para mídia sintética."*

**Removidos pelo teste da causa solta** (§3, regra 10): dois, em 12.3.

## 8. O que a máquina errou

Eu sou a máquina. Doze itens específicos sobre esta rodada, com o motivo da desconfiança. Os itens 1 a 10 são da rodada que escreveu as seções 1 a 11; os itens 11 e 12 foram achados na retomada que fechou a seção 12, conferindo o que a primeira rodada tinha escrito (ver 12.1).

1. **Quase publiquei um número inventado por consenso de SEO.** Buscando a fração de vídeo online
   que é sintética, recebi, na mesma sessão, "10% de todo o vídeo digital em 2026", "38% do volume
   atual de vídeo digital", "37% dos anúncios de vídeo digital" e "90% de todo o conteúdo online" —
   quatro números incompatíveis, nenhum com método, todos de sites agregadores. Um deles apareceu
   num rascunho do resumo. **Corrigido para "sem número encontrado"** em 3.4, e é a lacuna mais
   importante deste mapa: a pergunta "quanto do que vejo é sintético" não tem resposta citável.
2. **A redução de 90% do custo de animação é alegação sobre alegação, e eu a tratei como dado.** A
   matéria (29/06/2026) atribui o número a "animadores e diretores" **sem nomear nenhum**, sem
   estúdio e sem produção. Só percebi ao abrir a página para extrair a atribuição. Ficou no
   documento apenas como o que é: uma alegação não atribuída.
3. **Assumi que a Sora 2 era o estado da arte corrente.** Meu treino carrega o lançamento e não o
   desligamento. Só descobri a depreciação — notificada em 24/03/2026, API removida em 24/09/2026 —
   porque busquei especificamente por ela. **Se eu tivesse escrito de memória, teria construído um
   mapa em cima de um produto que não existe mais** — que é o erro mais provável de qualquer IA
   neste tema, e o motivo de este documento verificar data de produto uma por uma.
4. **Não confirmei que o VAR foi melhor artigo do NeurIPS 2024.** O enunciado do tema afirma isso;
   a página do arXiv que abri (2404.02905) não menciona prêmio algum, e eu não abri o site da
   conferência. No documento, portanto, a afirmação **não aparece** como fato — só os números do
   artigo, que verifiquei. Registro para que ninguém a tome deste mapa como confirmada.
5. **Quase escrevi que a Rive tem 2 bilhões de usuários.** O número está na página da empresa e se
   refere aos **produtos que a usam** — Spotify, Duolingo, Disney, Google, ESPN, LinkedIn —, não à
   base da Rive, que tem 76 funcionários. É autopromoção legítima lida com descuido, e o tipo de
   confusão que infla um mapa inteiro. Corrigido em 3.1 com a distinção explícita.
6. **Citei um número que depois não encontrei na fonte que abri.** Um resumo de busca me deu "mais
   de 25 milhões de usuários registrados do Dream Machine". Ao abrir a página da Luma
   (lumalabs.ai/news/luma-vs-pika), **não achei o número** — achei os 16 quadros-chave do Ray3.2 e
   a data de 28/07/2026, e o texto é marketing da própria Luma. **O número de usuários não entrou
   no documento.** Esta é a diferença entre ler o resumo da busca e abrir a página, e ela me pegou.
7. **Risco de autoria trocada que registro por precaução.** Yue Ma é o primeiro dos 23 autores do
   survey de geração controlável de vídeo (2507.16869) e aparece também como último autor do
   LiveEdit (2606.26740). São a mesma pessoa em dois papéis; se eu tivesse resumido de memória,
   poderia ter atribuído um artigo ao grupo do outro. Cito os dois separadamente e de propósito.
8. **Busca negativa que preciso declarar, porque a ausência foi usada como argumento.** Procurei
   política de festival tradicional sobre obra gerada por IA e **não encontrei nenhuma**: a página
   do Annecy 2026 (21 a 27/06) que abri lista os prêmios e não menciona IA. Em 6.6 eu uso essa
   ausência ("nenhuma política registrada") como parte do sinal observável — e ausência em uma
   página de enciclopédia não é ausência no mundo. Também não consegui abrir três fontes que
   queria: a agenda regulatória da ANCINE 2026/2027 (403 em duas tentativas, em dois domínios
   diferentes), a mesa da Semana ABC 2026 sobre criar e produzir com IA (403), e a página da Adobe
   sobre o Generative Extend (403). O que sei da agenda da ANCINE — 23 ações, aprovadas em mar/2026,
   com item sobre uso de IA no setor — vem de resumo de busca, **não de página aberta**, e por isso
   não está nas seções 1 a 10 nem na lista de fontes: está aqui, marcado como não verificado.
9. **Escrevi o *motion brush* da Runway como fato antes de conseguir abrir a fonte, e tive de
   desfazer.** A primeira versão da seção 3.1 afirmava, com números e nomes de recurso, que o
   Gen-4.5 traz *motion brush*, sistema de referência e Act-Two — tudo vindo de resenhas
   secundárias que o resumo da busca me entregou. A página de documentação da própria Runway
   devolveu **403 em duas tentativas**. Ao abrir a única página da Runway que respondeu, o achado
   foi o **contrário** do que eu havia escrito: o Aleph 2.0 é vendido como quem **elimina** máscara
   e rastreamento, com prompt de texto como único controle discutido. Reescrevi a passagem, movi os
   recursos não verificados para uma nota entre parênteses e acrescentei a contracorrente ao
   pré-mortem (7.1) e ao teste de extrapolação (7.2). **Este é o erro mais instrutivo da rodada:**
   eu ia sustentar a tese central do mapa com um exemplo que, checado, a contradiz.
10. **O número de versão do C2PA divergiu entre duas fontes que abri**, e adotei a mais recente sem
   destacar a divergência num primeiro rascunho. A página inicial do c2pa.org, atualizada em
   08/01/2026, aponta a especificação **2.3**; o verbete enciclopédico registra **2.4, de
   21/04/2026**. Uso 2.4 e declaro aqui que o site do próprio consórcio estava atrasado em relação
   ao registro — o que, aliás, é coerente com o quadro de 3.2.

11. **Estiquei o que a Suprema Corte decidiu, e a conferência me pegou.** O resumo diz que a
   negativa de certiorari em *Thaler v. Perlmutter* deixou de pé "a regra de que prompt não é
   autoria". Ao reabrir a fonte na retomada, o que ela sustenta é o **requisito de autoria
   humana** — e é explícita em que *quanto* de intervenção humana basta, incluindo "prompting or
   post-generation editing", **permanece indefinido** e será fixado em litígio. Que prompt sozinho
   não basta vem da orientação do Escritório de Direitos Autorais, não do tribunal. É a formulação
   mais esticada do documento: duas fontes somadas sustentam a tese, uma sozinha não. Corrigida em
   12.7 e deixada visível no resumo de propósito, para que a diferença entre o que escrevi e o que
   apurei não desapareça.
12. **Errei a própria contagem de fontes e não percebi.** O frontmatter dizia `fontes: 35` e a
   seção 11 lista **39** fontes numeradas. Gravei o número antes de fechar a lista e nunca voltei
   para conferir. É o erro mais banal desta rodada e o mais fácil de escapar, porque nenhum leitor
   humano conta trinta e nove itens para checar um campo de metadado — só o verificador conta, e
   ele não compara esse campo. Corrigido para 39 no frontmatter e na abertura da seção 3.

## 9. Três cenários para 2031

Escritos no presente de 2031, como se o ano já tivesse chegado. O viés pedido no briefing é
**neutro**, e por isso os três têm o mesmo peso de detalhe e cada um traz o **sinal precoce** que
diria que estamos entrando nele.

### Provável — "o grafo e o achatado"

A produção visual profissional se organizou em torno do grafo. Um estúdio de publicidade entrega
ao cliente três arquivos: a peça, o grafo que a produziu e o peso do modelo que o grafo chama —
esse último item, que em 2026 parecia excesso de zelo, virou cláusula padrão depois que a segunda
grande plataforma desligou um modelo sem substituto. O cargo júnior de pós-produção praticamente
não existe: a tarefa pela qual se aprendia — rotoscopar, limpar, refazer fundo — é uma máscara e
uma referência, e quem contrata pede portfólio de sistema, não de quadro. A mídia que responde
ficou onde a distribuição permitiu: dentro dos aplicativos. Duolingo, Spotify e bancos entregam
animação que reage a evento com um arquivo só para todas as plataformas; quem publica no feed de
outro continua entregando vídeo achatado, e a diferença entre ter aplicativo e ter página virou
uma diferença de linguagem, não só de alcance. A direção ao vivo existe e é caríssima: roda em
treinamento corporativo, em demonstração de venda e em medicina, onde o valor por sessão paga a
GPU por espectador; no entretenimento de massa, não. A arquitetura não trocou: venceu o híbrido,
com estrutura autoregressiva e textura por difusão, e o ferramental de controle sobreviveu à
transição porque ninguém quis jogar dez anos de nós no lixo. Na Europa se declara o uso de IA por
obrigação, com uma zona cinzenta de "alteração substancial" que já produziu três decisões
divergentes; no Brasil não se declara, porque a lei não saiu e o CONAR nunca exigiu. E a
autenticidade certificada nunca virou mercado: a marca criptográfica continua sendo removida pelos
intermediários, nenhuma câmera passou a conformidade, e a verificação que as redações fazem é de
contexto — quem publicou, com que histórico, corroborado por quê.

**Sinal precoce de que é este:** uma segunda plataforma grande desligar um modelo de vídeo sem
substituto, e uma cláusula de custódia de peso (*model escrow*) aparecer em contrato-padrão de
produção. Se as duas coisas acontecerem antes de 2028, é este cenário.

### Desejável — "o registro vale, e é do autor"

O controle fino produziu, além de peças melhores, uma coisa que não estava no plano de ninguém: um
**registro auditável de autoria**. A ferramenta grava o que a pessoa fez — que região, que
referência, que quadro-chave pintado, que regra — num formato aberto e interoperável, e esse
registro passou a servir a três donos ao mesmo tempo. Serve ao autor, porque é com ele que se
registra direito sobre a contribuição humana num mundo em que prompt não é autoria. Serve ao
regulador, porque resolve a zona cinzenta do "assistivo × substancial" com dado em vez de
litígio. E serve ao leitor, porque um registro de intervenção é mais verificável que uma
assinatura criptográfica que a distribuição arranca. O formato nasceu onde formatos de mídia
sempre nascem — na comunidade que tinha o problema primeiro, a do grafo — e foi adotado porque a
alternativa era declarar tudo por precaução. O posto de entrada da pós-produção não voltou, mas o
que apareceu no lugar não é "curador de sistemas" genérico: é uma função com dono, que responde
por comportamento em produção, com salário de quem responde. E o motion designer que define regra
em vez de executar quadro ganha mais, não menos, porque a regra é o que a plataforma gratuita não
sabe escrever.

**O que teria de ser feito para chegar aqui, concretamente:** (a) o registro de intervenção ser
**aberto**, e não um recurso de retenção de plataforma — o que só acontece se a comunidade do
grafo o especificar antes de um fornecedor o patentear; (b) a Comissão Europeia aceitar o registro
como demonstração de conformidade, em vez de exigir marca no pixel, que é o que não funciona; e
(c) alguém resolver o conflito de interesse da plataforma que cobra por geração e portanto não
quer que você gere menos.

**Sinal precoce:** uma especificação aberta de registro de intervenção publicada por Comfy Org,
Blender Foundation, Linux Foundation ou consórcio equivalente — com pelo menos dois fornecedores
concorrentes implementando. Se em 2028 isso não existir, o cenário desejável não é este.

### Indesejável — "indistinguível e não declarado"

O controle fino ficou tão bom que a mídia sintética de orçamento alto deixou de ser reconhecível, e
por isso deixou de ser declarada em todo lugar onde a lei não obriga. O Brasil é um desses lugares:
o PL 2338 nunca virou lei, o CONAR continuou aplicando regras de veracidade sem exigir declaração,
e a consequência é que o consumidor brasileiro não tem como saber, e não tem a quem perguntar. A
retroação estética de 2026 — aquela em que o público metralhou a abertura de uma novela por parecer
feita com IA — produziu o efeito exatamente inverso ao que os críticos esperavam: em vez de menos
IA, mais disfarce. Na Europa se declara, o que criou um mercado de arbitragem de jurisdição: a peça
é produzida onde não se declara e distribuída onde se puder. A prova em vídeo perdeu o valor que
tinha sem ganhar substituto: nenhuma regra nova de evidência foi escrita, a marca criptográfica
continuou sem conformidade e com vulnerabilidade documentada, e o resultado prático é que a
gravação deixou de encerrar discussão — advogado contesta autenticidade por padrão, jornalista não
publica sem uma segunda fonte que não seja imagem, e o vídeo que mostra o abuso vale tanto quanto
o boato que o nega. O posto de entrada desapareceu sem que nada tomasse o lugar, e a formação em
animação ficou sem porta: quem entra não tem por onde. E o registro da intervenção, que poderia
resolver metade disso, existe — mas dentro da plataforma, proprietário, como recurso de retenção,
e não acompanha a peça quando ela sai.

**Sinal precoce, e é o mais fácil de observar de todos:** uma **decisão judicial de última
instância descartando vídeo autêntico** por impossibilidade de autenticação (o wildcard de 6.7).
O segundo sinal, mais cotidiano: a Câmara dos Deputados arquivar ou desidratar o capítulo de
transparência do PL 2338 enquanto a obrigação europeia segue em vigor — porque aí a assimetria
deixa de ser atraso e vira escolha.

## 10. O experimento

### O registro da intervenção — a mesma peça, quatro caminhos de controle, e o dossiê que cada um consegue provar

**O que é.** Quatro grupos produzem **a mesma peça de seis segundos** — especificação idêntica,
entregue por escrito: um objeto que entra em quadro, muda de cor numa região e sai, com o fundo
inalterado. Cada grupo usa um caminho de controle diferente:

- **Caminho A — prompt.** Um produto fechado de geração de vídeo, só com descrição em texto.
  Permitido iterar quantas vezes quiser.
- **Caminho B — grafo.** ComfyUI, com o grafo salvo, semente fixada, versão de modelo anotada e um
  nó de controle (ControlNet ou equivalente) fazendo o trabalho de região.
- **Caminho C — quadro-chave propagado.** O quadro pintado à mão e propagado por EbSynth, que **não
  usa IA na propagação** — é síntese de textura sobre o vídeo e os quadros-chave.
- **Caminho D — máquina de estados.** Rive: a peça não é renderizada, é um runtime com dois estados
  e uma transição, e o "objeto que sai" é uma transição disparada por entrada.

Terminada a peça, cada grupo entrega um segundo artefato, que é o verdadeiro objeto do experimento:
o **dossiê de autoria**, com três perguntas respondidas com evidência, não com opinião.

1. **O que, exatamente, uma pessoa decidiu nesta peça** — e com que artefato isso é demonstrável a
   um terceiro que não estava presente.
2. **Se esta peça fosse contestada** (num registro de direito autoral, numa auditoria de
   conformidade europeia, ou num processo), o que se apresenta?
3. **O que sobra desta peça se, amanhã, o modelo ou a ferramenta for desligada** — e quanto tempo
   custa refazê-la a partir do que foi guardado.

Depois, a turma cruza os quatro dossiês numa tabela só, e mede uma coisa: **qual caminho produz
registro e qual produz só resultado.**

**Que pergunta sobre o futuro ele ajuda a responder.** A tese central deste mapa é que o controle
fino não vale pela qualidade, e sim porque produz o registro da intervenção humana — e que esse
registro é o que converte geração em propriedade (autoria humana é requisito nos EUA), em isenção
(a marcação europeia dispensa alteração apenas assistiva) e em reprodutibilidade (grafo é arquivo,
prompt é frase). **O experimento testa exatamente isso, e é falseável.**

**Que tecnologia emergente usa, e por que não dá com a madura.** O caminho A **é** a tecnologia
madura, e está ali de propósito, como controle do experimento. Os outros três são o emergente e
nenhum deles é substituível por produto de massa: o grafo com semente e versão (ComfyUI, GPL-3.0,
4 milhões de usuários) não existe dentro de nenhuma ferramenta de massa, e é o único caminho que
produz um arquivo de texto auditável; a propagação de quadro-chave por síntese de textura (EbSynth,
grátis para 720p) é a única que produz um artefato **pintado por mão humana** e datado, o que é
precisamente o que o Escritório de Direitos Autorais pede; e a máquina de estados (Rive) é o único
caminho em que a peça entregue não é imagem nenhuma, e obriga a turma a responder o que significa
"autoria" quando o entregável é um comportamento. Com ferramenta madura só se produz o caminho A —
e a lição do experimento é o que falta nele.

**O que a turma vai fazer quando testar isso em sala.** Três coisas, em cerca de cinquenta minutos.
(a) Cada grupo apresenta a peça **sem dizer por qual caminho a fez**, e a turma tenta adivinhar —
essa parte mede se a diferença de controle aparece no resultado, e a hipótese deste mapa é que
**não aparece** em seis segundos. (b) Cada grupo apresenta o dossiê, e aí a diferença aparece
inteira. (c) A turma julga como banca: recebe as três perguntas do dossiê na posição de quem tem de
decidir — registrar, auditar, refazer — e vota qual caminho ela contrataria para uma campanha de
cinquenta variantes, e qual para uma peça única de autoral. A aposta é que a resposta seja
diferente nos dois casos, e que essa diferença seja o achado.

**O que seria um resultado que me faria mudar de ideia.** Dois resultados, e ambos são plausíveis.

1. **Se o caminho A produzir um dossiê tão defensável quanto B e C** — se a plataforma fechada
   entregar histórico de edições, versão de modelo e reprodutibilidade suficiente para refazer a
   peça —, então o controle explícito não é a fonte do registro, é só uma interface entre outras, e
   **a tese central deste mapa cai**. R1 vira melhoria sustentadora e a seção 5.3 perde a
   convergência 2.
2. **Se nenhum dos quatro caminhos produzir dossiê utilizável** — se as três perguntas forem
   inrespondíveis em todos, inclusive no grafo —, então o problema não é de ferramenta e sim de
   inexistência de formato, e o mapa estava otimista ao colocar e4.2 e e3.1 como efeitos de segunda
   ordem com confiança média. Nesse caso o cenário indesejável de 2031 é o mais provável dos três,
   e eu teria de reescrever a seção 9.

Uma advertência prática, porque é o tipo de coisa que estraga experimento de sala: o caminho D não
produz vídeo, e vai haver a tentação de exportar a peça do Rive como MP4 para "comparar em
igualdade de condições". **Não exporte.** A impossibilidade de comparar é o dado.

## 11. Fontes

Trinta e seis fontes abertas e lidas em 11/09/2026. Nenhuma citada de memória. O que eu tentei
abrir e não respondeu está declarado em 8.8 e não entra nesta lista.

### Produto e ferramenta

1. `https://techcrunch.com/2026/04/24/comfyui-hits-500m-valuation-as-creators-seek-more-control-over-ai-generated-media/`
   — reportagem da rodada do ComfyUI. Sustenta os US$ 30 milhões a US$ 500 milhões em 24/04/2026,
   os investidores (Craft Ventures, Pace Capital, Chemistry, TruArrow), a Série A de US$ 19 milhões
   em 2024, os 4 milhões de usuários declarados, as vagas de "ComfyUI artist or engineer", a compra
   da Weavy pela Figma em 2025 e as duas citações de Yoland Yan sobre os "60% – 80%" e a "máquina
   caça-níqueis". **Confiabilidade: alta** para os fatos da rodada; os 4 milhões de usuários são
   declaração da empresa reproduzida pelo veículo.
2. `https://github.com/comfyanonymous/ComfyUI` — o repositório. Sustenta as 132,5 mil estrelas, a
   licença GPL-3.0, a autodescrição ("grafo visual de nós… sem código") e a lista de modelos
   suportados, que uso como mapa do campo: FLUX.1, FLUX.2, Qwen Image, Wan 2.1/2.2, LTX-Video
   2/2.3, HunyuanVideo 1.5, SAM 3/3.1. **Confiabilidade: alta** — fonte primária verificável.
3. `https://bfl.ai/blog/flux-2` — anúncio do FLUX.2. Sustenta a data (25/11/2025), as quatro
   variantes, os 32B do `dev`, a Apache 2.0 do `klein`, as **dez referências simultâneas**, a
   edição a **4 megapixels**, o parâmetro de passos variável do `flex` e a arquitetura (Mistral-3
   de 24B acoplado a *rectified flow transformer*). **Confiabilidade: alta** para especificação,
   **baixa** para qualquer comparação de qualidade — é o fabricante.
4. `https://github.com/Wan-Video/Wan2.2` — repositório do Wan2.2. Sustenta a Apache 2.0, os 27B com
   14B ativos (MoE) no T2V-A14B e I2V-A14B, o TI2V-5B em 24 GB, o S2V-14B, o Animate-14B, as 17,5
   mil estrelas e as datas (28/07/2025, 26/08/2025, 19/09/2025). **Confiabilidade: alta**.
5. `https://ebsynth.com/` — página do EbSynth. Sustenta o ponto que mais importa: **a propagação
   não é IA**, é síntese de textura sobre o vídeo e os quadros-chave. Também os preços (US$ 0,
   US$ 20/mês, US$ 200/mês por assento) e os créditos exibidos (Disney, *Doctor Who*, *Wednesday*,
   Apollo, Joel Haver, Corridor Crew). **Confiabilidade: alta** para o método, **média** para os
   créditos, que são vitrine sem link para a produção.
6. `https://rive.app/` — página da Rive. Sustenta a lista de runtimes (incluindo Unity e Unreal), a
   lista de clientes (Spotify, Duolingo, Disney, Google, ESPN, LinkedIn, Intercom, Dropbox, CARS24)
   e a definição da máquina de estados como "fonte única de verdade que roda em todas as
   plataformas". **Confiabilidade: alta** para runtimes e clientes; **baixa** para os números —
   "mais de 2 bilhões de usuários", "90% menores", "4× mais rápido" são autopromoção, e o item 5 da
   seção 8 registra que quase os usei errado.
7. `https://cavalry.studio/` — página do Cavalry. Sustenta o fato mais consequente do ramo R2: está
   **gratuito, sem restrição para uso individual**, nas versões 2.6.1/2.7, e **passou a ser
   desenvolvido pela Canva**, com edição empresarial via Canva Enterprise e Canva Education.
   Sustenta também a formulação procedural ("ajuste um único valor, veja sistemas inteiros
   responderem"), a importação de planilha e a exportação Lottie. **Confiabilidade: alta**.
8. `https://runway.com/resources/ai-video-inpainting` — página de recurso da Runway. Sustenta a
   contracorrente de 3.1, 7.1 e 7.2: o **Aleph 2.0 elimina máscara e rastreamento manuais**, o
   prompt de texto é o único controle discutido, e a própria empresa admite que "a consistência
   temporal é o gargalo de verdade". **Confiabilidade: alta** para a posição comercial declarada
   (é a empresa dizendo o que vende), **baixa** para a comparação com concorrentes.
9. `https://lumalabs.ai/news/luma-vs-pika` — comparativo publicado pela própria Luma, assinado
   "By Luma team · 28/07/2026". Sustenta os **16 quadros-chave** do Ray3.2, a saída 1080p nativa
   com upscale 4K, HDR e EXR, e os clientes nomeados (Serviceplan, Dentsu, Publicis Groupe).
   **Confiabilidade: baixa como comparação** — é marketing de um dos comparados —, média para a
   especificação do próprio produto. O número de usuários que um resumo de busca me deu **não está
   nesta página**, e por isso não está no documento (item 6 da seção 8).
10. `https://developers.openai.com/api/docs/deprecations` — página de depreciações da OpenAI.
    Sustenta a notificação em **24/03/2026** e a remoção em **24/09/2026** da Videos API e dos
    modelos `sora-2`, `sora-2-pro`, `sora-2-2025-10-06`, `sora-2-2025-12-08`,
    `sora-2-pro-2025-10-06`, **sem substituto indicado**. **Confiabilidade: alta** — é o registro
    do próprio fornecedor.
11. `https://the-decoder.com/openai-sets-two-stage-sora-shutdown-with-app-closing-april-2026-and-api-following-in-september/`
    — reportagem sobre o desligamento em dois tempos. Sustenta o encerramento do aplicativo e da
    web em **26/04/2026** e a razão relatada (redirecionar computação para código e clientes
    corporativos, mantendo a Sora como pesquisa em modelos de mundo). **Confiabilidade: média-alta**
    — imprensa técnica especializada; a razão é relato, não declaração oficial citada.

### Pesquisa — controle, arquitetura, tempo real

12. `https://arxiv.org/abs/2507.16869` — *Controllable Video Generation: A Survey*, Yue Ma e outros
    22 autores, submetido em 22/07/2025, v3 em 19/01/2026. Sustenta a taxonomia por **sinal de
    controle** (condição única, múltipla, controlável universal), a insuficiência declarada do
    prompt de texto para requisito multimodal e de granularidade fina, e a lista de condições
    não-textuais (movimento de câmera, mapa de profundidade, pose humana). **Confiabilidade: alta**
    — é o mapa do campo feito pelo campo, e três versões em dezoito meses medem a velocidade da
    área.
13. `https://arxiv.org/abs/2404.02905` — VAR, Keyu Tian e outros, 03/04/2024. Sustenta FID
    18,65 → 1,73, IS 80,4 → 350,2, **~20× mais rápido**, coeficiente de correlação das leis de
    escala perto de **−0,998**, e a generalização sem treino para *inpainting*, *outpainting* e
    edição. **Confiabilidade: alta** para os números do artigo. **Registro que a página não menciona
    prêmio de melhor artigo do NeurIPS 2024** (item 4 da seção 8).
14. `https://arxiv.org/abs/2510.16751` — *Visual Autoregressive Models Beat Diffusion Models on
    Inference Time Scaling*, Riise, Kaya e Papadopoulos, 19/10/2025. Sustenta a frase que mais uso
    no ramo R3: *beam search* faz um modelo **AR de 2B superar um de difusão de 12B**, com a
    explicação (espaço discreto permite poda antecipada e reuso) e a conclusão de que "arquitetura,
    não apenas escala, é crítica". **Confiabilidade: média-alta** — preprint com ablações, sem
    revisão por pares declarada.
15. `https://arxiv.org/abs/2601.05966` — VideoAR, Longbin Ji e outros (grupo de sete autores),
    09/01/2026. Sustenta o primeiro VAR de larga escala para **vídeo**: FVD no UCF-101 de **99,5
    para 88,6**, VBench **81,74**, **mais de 10× menos passos**, e os três mecanismos contra
    acúmulo de erro (Multi-scale Temporal RoPE, Cross-Frame Error Correction, Random Frame Mask).
    **Confiabilidade: média-alta** — preprint recente, ainda sem reprodução independente que eu
    tenha encontrado.
16. `https://arxiv.org/abs/2511.01266` — MotionStream, Joonghyuk Shin e outros (com Jun-Yan Zhu e
    Eli Shechtman), 03/11/2025, v5 em 05/03/2026. Sustenta a base do ramo R4: latência **abaixo de
    um segundo**, **até 29 FPS numa única GPU**, **duas ordens de magnitude** mais rápido,
    comprimento infinito, e os controles (pintar trajetória, controlar câmera, transferir
    movimento). Sustenta também o diagnóstico do problema anterior: "latência proibitiva (minutos
    por vídeo) e processamento não-causal que impede interação em tempo real".
    **Confiabilidade: alta** — cinco versões em quatro meses e autores de peso na área.
17. `https://arxiv.org/abs/2606.26740` — LiveEdit, Xinyu Wang, Chongbo Zhao, Fangneng Zhan e Yue
    Ma, 25/06/2026, **aceito no ECCV 2026**. Sustenta os **12,66 FPS** de edição causal quadro a
    quadro em streaming, e o pipeline de destilação em três estágios de um modelo bidirecional para
    um editor unidirecional. **Confiabilidade: alta** — aceite em conferência de primeira linha é
    revisão por pares.
18. `https://arxiv.org/abs/2503.05639` — VideoPainter, Yuxuan Bian e outros, 07/03/2025. Sustenta o
    mecanismo central de e2: encoder de contexto com **apenas 6% dos parâmetros do backbone**,
    plugável em qualquer DiT de vídeo pré-treinado, com reamostragem de ID para qualquer duração, e
    o VPData com **mais de 390 mil clipes**. **Confiabilidade: alta**.
19. `https://arxiv.org/abs/2511.19401` — *In-Video Instructions*, Gongfan Fang, Xinyin Ma e Xinchao
    Wang, 24/11/2025. Sustenta o sinal fraco de 6.1: instrução codificada **no próprio quadro** —
    texto sobreposto, setas, trajetórias —, testada no Veo 3.1, Kling 2.5 e Wan 2.2, com execução
    relatada como confiável em cenas multiobjeto. **Confiabilidade: média** — preprint de três
    autores, sem reprodução independente.
20. `https://github.com/VainF/In-Video-Instructions` — o repositório correspondente. Sustenta as
    **46 estrelas**, que é o número que faz disto um sinal fraco e não um efeito. **Confiabilidade:
    alta** para a medida de atenção.
21. `https://arxiv.org/abs/2509.25161` — *Rolling Forcing: Autoregressive Long Video Diffusion in
    Real Time*, aberto para conferir se o resultado de tempo real do MotionStream é isolado ou
    linha de pesquisa. Sustenta, em 5.1 e 7.1, que **é linha de pesquisa** — há mais de um grupo
    atacando geração longa em tempo real por formulação autoregressiva. **Confiabilidade:
    média-alta** — preprint; usei só para densidade de evidência, não para número.

### Proveniência, marca e prova

22. `https://arxiv.org/abs/2604.24890` — *Verifying Provenance of Digital Media: Why the C2PA
    Specifications Fall Short*, Golaszewski, Krawetz, Sherman e outros oito, **27/04/2026**.
    Sustenta o efeito e15.2 e metade da seção 6.5: primeira análise independente por **métodos
    formais**, conclusão de que "as especificações atuais do C2PA falham em atingir seus objetivos
    de segurança declarados", e recomendação explícita de **não usar para jornalismo, divulgação
    financeira ou prova jurídica**. **Confiabilidade: alta** — análise formal, autoria acadêmica
    independente do consórcio, e é a fonte mais importante deste documento.
23. `https://en.wikipedia.org/wiki/Content_Credentials` — verbete sobre Content Credentials.
    Sustenta o histórico (primeira publicação 21/12/2021), a versão **2.4 de 21/04/2026**, o
    vínculo com a Linux Foundation, a adoção declarada (LinkedIn, TikTok, YouTube, OpenAI, Google,
    Microsoft, Anthropic), e os três fatos que mais uso: **nenhuma câmera conforme** ao Programa de
    Conformidade em meados de 2026 (Leica, Nikon e Canon sobre a versão 1.4, fora do programa), a
    **revogação dos certificados do Nikon Z6III** em ago-set/2025, e o ataque de assinatura
    arbitrária com root no Android demonstrado por David Buchanan em **ago/2026**, classificado pelo
    Google como **"Won't fix (infeasible)"**. **Confiabilidade: média-alta** — enciclopédia com
    citação densa; conferi a coerência contra as fontes 22 e 24.
24. `https://c2pa.org/` — página do consórcio, atualizada em 08/01/2026. Sustenta a composição do
    comitê diretor (Adobe, Amazon, BBC, Google, Meta, Microsoft, OpenAI, Publicis, Sony, TikTok,
    Truepic) e a autodescrição ("como um rótulo nutricional para conteúdo digital"). Sustenta
    também, por omissão, duas coisas que registro: **a página não menciona o programa de
    conformidade nem qualquer limitação ou modelo de ameaça**, e aponta a especificação **2.3**
    enquanto o verbete registra 2.4 — a divergência está no item 10 da seção 8.
    **Confiabilidade: alta** para composição, **baixa** como descrição das próprias limitações.
25. `https://digital-strategy.ec.europa.eu/en/policies/guidelines-ai-transparency-obligations` —
    página das diretrizes da Comissão Europeia, com atualização em 06/08/2026. Sustenta a
    aplicabilidade do Artigo 50 desde **02/08/2026**, a obrigação de marca legível por máquina, a
    obrigação do *deployer* de informar sobre deepfake, as definições de conteúdo sintético e
    deepfake, e a exceção de edição padrão. **Confiabilidade: alta** — fonte primária do regulador.
26. `https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content` — página
    do Código de Prática sobre Transparência de Conteúdo Gerado por IA. Sustenta a cronologia
    completa (redação iniciada em 05/11/2025, primeiro rascunho 17/12/2025, segundo 03/03/2026,
    diretrizes em consulta 08/05/2026, **código final 10/06/2026**), os **~190 signatários em
    31/07/2026**, o conjunto de ícones oferecido, e o caráter **voluntário**.
    **Confiabilidade: alta** — fonte primária.
27. `https://artificialintelligenceact.eu/transparency-rules-article-50/` — guia prático do Artigo
    50. Sustenta a redação das quatro obrigações, as duas datas (**02/08/2026** e **02/12/2026**), a
    isenção literal de "função assistiva de edição padrão" e de alteração não substancial, a
    obrigação **reduzida** (não isenção) para obra artística, criativa, satírica ou ficcional, e a
    exceção de texto de interesse público sob controle editorial com responsável identificável.
    **Confiabilidade: média-alta** — projeto de referência sobre o AI Act, não é o texto oficial;
    conferi as datas contra a fonte 25.
28. `https://www.gtlaw.com/en/insights/2026/6/deepfakes-chatbots-ai-generated-text-european-commission-details-transparency-obligations-under-the-ai-act`
    — análise jurídica das diretrizes da Comissão. Sustenta a data das diretrizes (**08/05/2026**),
    o esclarecimento de que **deepfake exige rótulo independentemente de intenção de enganar** (e
    que pessoa fictícia realista também conta, mas humano voando ou dragão não), o limiar da revisão
    editorial ("correção ortográfica ou gramatical apenas não basta, nem aval editorial
    superficial"), a prorrogação da marcação de 02/08 para **02/12/2026** pela proposta de
    *AI Omnibus*, e a multa de **€ 15 milhões ou 3% do faturamento mundial**. **Confiabilidade:
    média-alta** — escritório de advocacia lendo norma; o que é norma conferi contra 25 e 27.
    ⚠️ **Esta página recusa requisição automatizada (403) e por isso não conta no verificador de
    links; abri-a pela ferramenta de leitura da sessão.**
29. `https://www.copyright.gov/ai/` — página da iniciativa de IA do Escritório de Direitos Autorais
    dos EUA. Sustenta as três partes do relatório (digital replicas **31/07/2024**;
    protegibilidade de saídas generativas **29/01/2025**; treino, pré-publicação, **09/05/2025**), a
    orientação de registro para obras com material gerado por IA de **16/03/2023** com a exigência
    de identificar o gerado e descrever a contribuição humana, e a trilha processual de *Thaler*
    (decisão de apelação mantendo a recusa, negativa de rehearing e de rehearing en banc).
    **Confiabilidade: alta** — fonte primária do órgão.
30. `https://www.morganlewis.com/pubs/2026/03/us-supreme-court-declines-to-consider-whether-ai-alone-can-create-copyrighted-works`
    — análise da negativa de certiorari. Sustenta a data (**02/03/2026**), o nome do caso
    (*Thaler v. Perlmutter*), a recusa original de registro em 14/02/2022, e a formulação do
    Circuito do DC de que a lei "protege apenas obras de criação humana" e exige autoria humana em
    primeira instância. **Confiabilidade: alta** para os fatos processuais.
    ⚠️ **Também recusa requisição automatizada (403); aberta pela ferramenta de leitura da sessão.**

### Mercado, trabalho e Brasil

31. `https://www.iab.com/insights/the-ai-gap-widens/` — *The AI Ad Gap Widens*, IAB com Sonata
    Insights, **15/01/2026**, com metodologia declarada: 505 consumidores Gen Z e millennials e 104
    executivos de empresas com mais de US$ 1 milhão de mídia anual, coletados entre out/2025 e
    jan/2026. Sustenta os **83%** de executivos com IA implantada no processo criativo (contra 60%
    em 2024), os **86%** de compradores usando ou planejando usar IA generativa para criativo de
    vídeo, a distribuição por canal (social 85%, display 73%, TV 56%, áudio 42%), e o achado que
    mais uso: **45% dos consumidores positivos contra 82% dos executivos acreditando que são** — 37
    pontos de erro de leitura. **Confiabilidade: alta** — amostra e período declarados; associação
    setorial pesquisando o próprio setor, o que é viés a registrar.
32. `https://animationguild.org/ai-and-animation/` — página do The Animation Guild (IATSE 839) sobre
    IA. Sustenta o estudo encomendado à CVL Economics com Concept Art Association, Human Artistry
    Campaign e National Cartoonist Society Foundation, com 300 líderes do setor ouvidos entre
    **17/11 e 22/12/2023**, e os números: **21,4% dos postos de cinema, TV e animação nos EUA —
    cerca de 118.500 — até 2026**, 39.500 na Califórnia, 15.100 em Nova York, **75%** dos executivos
    relatando eliminação, redução ou consolidação de posto, mais de 90% prevendo papel maior da IA.
    **Confiabilidade: média-alta** — metodologia e período declarados, mas é pesquisa de opinião de
    executivos encomendada pela parte interessada, e a projeção "até 2026" foi feita em 2023.
33. `https://www.cartoonbrew.com/artificial-intelligence/netflix-inkubator-artificial-intelligence-animation-studio-260906.html`
    — reportagem sobre o INKubator da Netflix, 15/05/2026. Sustenta a descrição ("estúdio de
    animação nativo em IA generativa, liderado pela criação"), o escopo inicial (curtas e
    especiais) com plano de escalar para formato longo e múltiplas produções simultâneas, a
    aspiração a "conteúdo de qualidade de longa-metragem", e o fato de **não haver anúncio formal**
    — a apuração vem de vagas de emprego. **Confiabilidade: média** — veículo especializado sério,
    mas a fonte primária é anúncio de vaga, e a própria matéria diz que a Netflix não anunciou.
34. `https://finance.yahoo.com/technology/ai/articles/ai-cuts-animation-costs-90-210000466.html`
    — matéria de **29/06/2026** sobre custo de animação. Sustenta **apenas duas coisas**: os
    **6.700 postos** perdidos no setor de cinema e gravação de som no condado de Los Angeles no ano
    até maio/2026, com origem no EDD da Califórnia via relatório do Otis College; e o fato de que a
    redução de "até 90%" é atribuída a "animadores e diretores" **sem nomear nenhum**, sem estúdio e
    sem produção. **Confiabilidade: média** para o dado de emprego (tem origem rastreável),
    **baixa** para o número de custo — e está no documento como exemplo de alegação não atribuída
    (item 2 da seção 8).
35. `https://www.migalhas.com.br/depeso/456124/guia-conar-2026-o-que-todo-influenciador-precisa-saber-agora`
    — análise jurídica do novo Guia do CONAR. Sustenta a aprovação em **11/05/2026**, a publicação e
    vigência em **13/05/2026**, a aplicação do CBAP a conteúdo "produzido, editado ou segmentado"
    com IA, a responsabilidade solidária entre anunciante, agência e influenciador, e — o ponto que
    sustenta toda a assimetria brasileira do mapa — que o CONAR **não impõe dever de declarar** uso
    de IA, o que o próprio autor chama de assimetria regulatória a ser resolvida por legislação
    futura. **Confiabilidade: média-alta** — veículo jurídico especializado com autoria
    identificada, lendo documento público.
36. `https://www25.senado.leg.br/web/atividade/materias/-/materia/157233` — ficha de tramitação do
    PL 2338/2023 no Senado. Sustenta a apresentação em 03/05/2023 por Rodrigo Pacheco, as 244
    emendas, o relatório favorável de Eduardo Gomes em 10/12/2024, a **aprovação em plenário** e a
    **remessa à Câmara dos Deputados em 17/03/2025**, com a tramitação no Senado encerrada.
    **Confiabilidade: alta** — fonte primária do processo legislativo. *(Registro a divergência de
    data que encontrei: a ficha marca a aprovação plenária em 26/12/2024 e a análise jornalística e
    jurídica fala em 10/12/2024, que é a data do relatório favorável. Uso 10/12/2024 no texto por
    ser a data corrente na imprensa especializada, e declaro a divergência aqui.)*
37. `https://www.cnnbrasil.com.br/entretenimento/web-reage-a-coracao-acelerado-e-critica-abertura-feita-por-ia/`
    — reportagem de **12/01/2026** sobre a estreia de *Coração Acelerado*. Sustenta a data de
    estreia (12/01/2026, faixa das 19h, TV Globo), a crítica pública à abertura por "parecer feita
    com IA", e a **ausência de manifestação da Globo** na matéria. **Confiabilidade: média-alta**
    para o fato da reação; a repercussão é medida por seleção de comentários, não por pesquisa.
38. `https://en.wikipedia.org/wiki/Dreams_of_Violets` — verbete sobre *Dreams of Violets*. Sustenta
    o wildcard já realizado de 6.6: filme **inteiramente gerado por IA**, escrito, dirigido e
    produzido por Ash Koosha com Pooya Koosha pelo estúdio Fountain 0, orçamento de **cerca de
    US$ 2.000** com citação do diretor ao *Guardian* em jun/2026 ("o CGI teria custado milhões; eu
    gastei US$ 2.000"), e **estreia no Tribeca em 10/06/2026** como a primeira de um filme
    totalmente gerado por IA no festival. **Confiabilidade: média-alta** — enciclopédia citando
    imprensa; o orçamento é declaração do próprio diretor, não auditoria.
39. `https://en.wikipedia.org/wiki/2026_Annecy_International_Animation_Film_Festival` — verbete do
    Annecy 2026. Sustenta as datas (**21 a 27/06/2026**) e os prêmios principais (Cristal de longa
    para *The Violinist*; Contrechamp para *Blaise*; Cristal de curta para *Paper Trail*, de Don
    Hertzfeldt). Sustenta também, **por ausência**, o que digo em 6.6: nem política sobre IA nem
    seleção de obra gerada aparecem no verbete. **Confiabilidade: média** — e a ausência num verbete
    não é ausência no mundo, o que declaro no item 8 da seção 8.

## 12. Anexo — o levantamento bruto

Sem limite de tamanho e sem edição. Tudo o que foi levantado e não coube nas seções acima: o
que foi cortado na bateria da seção 7, as buscas que não deram em nada, as fontes que não
abriram, as divergências de contagem e a saída inteira do verificador.

### 12.1 Como este documento foi produzido — e a interrupção, declarada

Este mapa foi produzido em modo não interativo, a partir do bloco `briefing:` do pedido, pela
skill `futurizacao-giordano` v1.2. **A rodada que escreveu as seções 1 a 11 foi interrompida por
limite de sessão antes de escrever a seção 12** — o `log.txt` desta pasta registra três tentativas
barradas com "You've hit your session limit · resets 4:40am" em 02:35, 03:04 e 03:06 de 11/09/2026.
O anexo foi fechado depois, na retomada, sobre o documento já escrito.

Isto tem uma consequência que precisa ficar registrada, porque o leitor de 2031 não terá como
descobrir sozinho: **a retomada não tem acesso ao estado de trabalho da rodada que rodou a
bateria da seção 7**. O que a bateria derrubou e descreveu em 7.8 está recuperável, porque 7.8
cita o texto dos efeitos removidos; o que ela derrubou e apenas contou **não está**. O item 12.3
trata exatamente desse buraco, e não o preenche com invenção.

O que a retomada fez, e é auditável: reabriu quatro das fontes mais carregadas do mapa para
conferir se os números batiam (12.7), recontou as fontes e corrigiu o frontmatter (12.6), aplicou
por conta própria o teste da causa solta sobre a roda já montada (12.3), e rodou o verificador com
checagem de link (12.8).

### 12.2 O briefing, e as premissas assumidas onde ele não alcançou

O `briefing:` recebido cobre os sete itens da entrevista do §0 da skill — modo MAPA, tema,
horizonte 2031, público "quem projeta mídia e interação", recorte global com nota sobre o Brasil,
descartado "o que já é comum em produto de massa", raiz suspeita nenhuma, viés neutro, busca web
ligada, zona de interesse "Percepção e mídia sintética". Por isso **não houve rebaixamento de
confiança por ausência de entrevista** — a skill prevê que um briefing completo a substitui.

Três coisas o briefing não cobria, e foram assumidas:

1. **A fronteira com os temas vizinhos.** O enunciado da disciplina nomeia os vizinhos (8, 13, 14,
   10, 9, 7) mas não diz onde cortar quando o objeto encosta nos dois lados. Assumi o corte
   declarado em 2: aqui o sistema **mostra**, não simula mundo persistente; Rive e Cavalry entram
   apesar de o procedural puro ser o tema 14, porque a regra procedural é instrumento de direção.
2. **O que conta como "produto de massa"** para efeito da régua de recusa. Assumi: disponível em
   plataforma de consumo, sem conhecimento técnico, sem custo marginal relevante por peça. É por
   essa régua que geração de imagem e vídeo por prompt foi recusada como raiz (ver 12.4).
3. **O peso da nota sobre o Brasil.** O briefing pede "uma nota"; o mapa acabou com o Brasil em
   quatro lugares (e1.1.1, e13.2.1, 7.5.5, 3.5) porque a assimetria regulatória brasileira — CONAR
   sem dever de declarar, PL 2338 parado na Câmara desde 17/03/2025 — é o que torna o recorte
   interessante, e não um apêndice. Assumi que isso é fidelidade ao pedido, não excesso.

### 12.3 O teste da causa solta — o que se perdeu na interrupção, e o que foi refeito

A seção 7.8 termina com a linha: *"Removidos pelo teste da causa solta (§3, regra 10): dois, em
12.3."* **O texto desses dois efeitos não sobreviveu à interrupção.** Não os reconstruo: escrever
aqui dois efeitos plausíveis e dizer que foram os removidos seria fabricar registro de auditoria,
que é exatamente o que a seção 12 existe para impedir. Fica o buraco, nomeado.

O que dá para fazer, e foi feito: **aplicar o teste de novo, agora, sobre a roda como ela está.** A
regra é a do §3.10 da skill — remova a raiz e pergunte se o efeito aconteceria do mesmo jeito, por
outro motivo. Passei os 49 efeitos de 2ª e 3ª ordem. Três ficaram na fronteira, e nenhum foi
removido; registro os três com o motivo de terem sobrevivido, para que a próxima leitura discorde
se quiser.

- **`e1.1.1`** (sindicatos negociando cláusula de uso derivado). Sem R1, sindicatos negociariam
  cláusula sobre IA de todo jeito — as greves de 2023 já o fizeram para semelhança e voz. **O que o
  salva:** o objeto da cláusula aqui não é semelhança, é **uso derivado do sistema entregue**, que
  só existe se e1.1 existir. Se o efeito fosse "sindicatos negociam IA", cairia; como está, deriva.
  É o mais frágil dos três.
- **`e3.1.1`** (pipeline visual auditado como cadeia de suprimento de software). Regulação de SBOM
  e proveniência de dependência avança por conta própria. **O que o salva:** ela só alcança o
  pipeline visual se o pipeline visual **for** software versionado — que é precisamente o que e3
  estabelece. Sem e3 não há nó com licença nem peso com proveniência para auditar.
- **`e7.1.1`** (a métrica de audiência perde sentido para peça de tiragem um). Otimização dinâmica
  de criativo e e-mail transacional já corroem métrica agregada sem nenhum vídeo generativo.
  **O que o salva, por pouco:** a tiragem um em **vídeo**, com custo marginal irrelevante, é o que
  elimina a peça de comparação; a personalização por template mantém o template como referência.

**Conclusão do teste refeito:** a roda não tem efeito órfão de raiz. Isso não recupera os dois que
a rodada anterior removeu — apenas mostra que o que ficou passa no teste hoje.

### 12.4 Os candidatos a raiz que foram recusados

Quatro recusas, com o motivo, na forma que o §2 da skill exige.

1. **Geração de imagem e vídeo por descrição em texto — recusada como raiz: adoção em maioria.**
   É a recusa central deste mapa e está anunciada já no resumo. Está em produto de massa, sem
   conhecimento técnico e sem custo marginal relevante. Pela régua prática da skill ("se dá para
   fazer com o que já é comum em produto de massa, é maduro"), não entra. Tratada como contexto
   na seção 3.
2. **Edição de vídeo assistida por IA genérica** (corte automático, legenda, reenquadramento) —
   recusada: faz o mesmo, melhor e mais barato. É melhoria sustentadora no sentido de Christensen.
   Aparece como efeito, não como raiz.
3. **Upscaling e restauração** (o `Magnific` do enunciado) — recusada pelo mesmo motivo, com
   agravante: a pergunta "o que ela rompe?" não tem resposta que não seja "nada; a imagem fica
   maior". Citada em `tecnologias_citadas` porque aparece no tema, ausente da roda.
4. **Modelo de vídeo com áudio nativo** (Veo 3.1, Kling 3.0) — recusada por **fronteira de tema**,
   não por maturidade: som e voz são o tema 13. Entra na seção 3 como contexto de mercado.

### 12.5 Os efeitos cortados, reescritos e acrescentados na bateria da seção 7

Consolidado aqui o que 7.8 registra disperso, para que o corte não fique só na prosa.

**Removidos por serem proibidos sem ator e mecanismo específicos** (a lista explícita da skill,
que os classifica como efeitos que serviriam para qualquer tema):

- *"Cursos de animação reorganizam o currículo em torno de direção."* — sem nome de curso, sem
  mecanismo que o ligue ao pai. O que sobrou dele, com ator e artefato, é `e2.1.1`: a **contratação**
  passa a exigir portfólio de sistema. Currículo é consequência de contratação, não efeito solto.
- *"Reguladores criam uma categoria nova para mídia sintética."* — o regulador não é nomeado e o
  mecanismo é "porque é novo". O que sobrou, com norma datada e ator, está em `e4` e `e4.1.1`: a
  régua de alteração substancial fixada por **litígio**, porque o Código de Prática é voluntário e
  não traz limiar.

**Removido por ser a pergunta do enunciado escrita como efeito:**

- *"Todo vídeo se torna interativo."* — é a pergunta de 3ª ordem do enunciado da disciplina, sem
  ator e sem mecanismo. Partida em `e6` (acontece dentro do produto, onde há runtime) e `e9` (não
  acontece na distribuição, porque o feed não executa runtime). As duas se contradizem de
  propósito, e a contradição está registrada em 5.3 como Contradição 2.

**Removido e substituído por ser genérico:**

- Antigo `e11.1.1`: *"O profissional de mídia passa a ler arXiv como o de software lê changelog."*
  Sem ator nomeado e sem consequência mensurável. Substituído pelo `e11.1.1` atual — o tempo entre
  artigo e produção cai abaixo do ciclo de homologação corporativa e **o departamento de compras**
  deixa de conseguir aprovar ferramenta.

**Reescrito por violar proibição explícita da skill:**

- *"Surge a profissão de operador de fluxo generativo."* — "surge uma nova profissão" está na lista
  de efeitos proibidos. Reescrito como `e13.2`: **realocação** de cargo existente, com perdedor
  nomeado (o artista de pós-produção perde o controle para o operador de câmera) e mecanismo
  declarado (a habilidade exigida é enquadrar em tempo real).

**Acrescentado depois da primeira rodada:**

- `e4`, como retroação de R1. A primeira versão de R1 não tinha nenhum freio, o que a skill
  classifica como propaganda. A isenção do Artigo 50(2) é o freio, e é específico: o incentivo
  profissional passa a ser ficar do lado assistivo da fronteira.

**Rebaixamentos** (valor antes → depois, com motivo) estão em 7.8 e não se repetem aqui: `e5`
(sinal, confiança e prazo), `e5.1` (confiança), `e7` (sinal e prazo), `e10` (prazo), `e12.1`
(confiança), `e13` (prazo), `e14` (confiança).

### 12.6 As buscas que não deram em nada, e as fontes que não abriram

**A lacuna mais importante do mapa: quanto do vídeo online é sintético.** A busca devolveu quatro
números incompatíveis na mesma sessão — "10% de todo o vídeo digital em 2026", "38% do volume atual
de vídeo digital", "37% dos anúncios de vídeo digital", "90% de todo o conteúdo online" —, nenhum
com método declarado, todos de agregadores de estatística. Um deles chegou a entrar num rascunho do
resumo. A seção 3.4 registra **"sem número encontrado"**, que é a resposta honesta. Fica o aviso
para quem for refazer este mapa: a pergunta "quanto do que vejo é sintético" não tem, em set/2026,
resposta citável.

**Busca negativa usada como argumento, e por isso declarada duas vezes** (aqui e em 8.8): procurei
política de festival de cinema ou animação tradicional sobre obra gerada por IA e **não encontrei
nenhuma**. A página do Annecy 2026 que abri lista os prêmios e não menciona IA. Em 6.6 essa
ausência entra como parte do sinal observável — e **ausência num verbete de enciclopédia não é
ausência no mundo**. Quem retomar isto deve procurar nos regulamentos dos festivais, não nas
coberturas.

**Fontes que quis abrir e não abriram (403 em duas tentativas cada):**

- A agenda regulatória da ANCINE 2026/2027, em dois domínios diferentes. O que sei dela — 23 ações,
  aprovadas em mar/2026, com item sobre uso de IA no setor — vem de **resumo de busca, não de
  página aberta**, e por isso não está nas seções 1 a 10 nem na lista de fontes. Está aqui, marcado
  como não verificado. Era a fonte que faltava para dar ao recorte brasileiro um terceiro pé
  regulatório além de CONAR e PL 2338.
- A mesa da Semana ABC 2026 sobre criar e produzir com IA.
- A página da Adobe sobre o Generative Extend. O recurso aparece em `tecnologias_citadas` porque
  está no enunciado do tema, e **não sustenta nenhum número** deste mapa.
- A documentação da Runway sobre o Gen-4.5 (motion brush, sistema de referência, Act-Two). Esta é
  a mais consequente das quatro, e o item 8.9 conta o que aconteceu: a única página da Runway que
  respondeu dizia o **contrário** do que o rascunho afirmava.

**Dois links da seção 11 que o verificador marca como "não responde" e que respondem.** O
`verificar.py` usa `urllib` com um cabeçalho de navegador simples; `gtlaw.com` e `morganlewis.com`
bloqueiam esse cliente. Ambos foram reabertos na retomada por outro caminho e **devolveram o
conteúdo que o mapa cita** (ver 12.7). São bloqueio de robô, não link morto — mas o número na saída
do verificador fica como está, em 37/39, porque adulterar o texto para o script passar é
exatamente o que o §9 da skill proíbe.

**Qual regra foi seguida, já que há duas em vigor e elas brigam.** O contexto tem duas decisões
vigentes e explicitamente conflitantes sobre este caso exato, cada uma registrando a outra em
`conflita_com`, sem arbitragem até hoje: **TMI-0014** manda **manter** a fonte na seção 11 e
documentar o falso positivo na 12, aceitando que o verificador feche com `1 problema(s)`;
**TMI-0016** manda **tirá-la** da seção 11 para a 12, aceitando que o campo `fontes` fique menor
que o número real de fontes lidas. Este documento segue **TMI-0014**, por dois motivos: é a
decisão tomada dentro desta mesma série de rodadas (`rodada giordano 01`), e as duas fontes em
questão sustentam afirmações de que o mapa não abre mão — as datas do Artigo 50 (02/08/2026 e
02/12/2026) e a negativa de certiorari de 02/03/2026, que é o pé jurídico da tese central. Tirá-las
da seção 11 deixaria o resumo apoiado em fonte que a lista de fontes não mostra. **O conflito
continua aberto e é do Giordano arbitrar** — se a arbitragem for por TMI-0016, a correção neste
documento é mecânica: mover as fontes 28 e 30 para cá e baixar `fontes` de 39 para 37.

### 12.7 As quatro fontes reabertas na retomada, e o que a conferência mudou

Reabri, na retomada, as quatro fontes que carregam mais peso no mapa. **As quatro confirmaram o que
o documento afirma, inclusive nos números.** Registro o resultado porque conferência que confirma
também é registro.

| Fonte | O que o mapa afirma | Resultado |
|---|---|---|
| TechCrunch, 24/04/2026 | US$ 30 mi a US$ 500 mi de avaliação, Craft Ventures na liderança com Pace, Chemistry e TruArrow, 4 milhões de usuários, a frase dos "60% – 80%" e da "máquina caça-níqueis" | Confere, incluindo a citação literal e a atribuição a Yoland Yan |
| arXiv 2604.24890 | Primeira análise por métodos formais do C2PA, onze autores, conclusão de que as especificações falham nos próprios objetivos de segurança e recomendação de não usá-las como prova jurídica | Confere. São 11 autores; a submissão é de 27/04/2026; o texto é whitepaper não técnico resumindo estudo maior |
| arXiv 2601.05966 (VideoAR) | FVD 99,5 → 88,6 no UCF-101, VBench 81,74, mais de 10× menos passos | Confere. Submissão 09/01/2026, revisão 14/01/2026 |
| Morgan Lewis, 03/2026 | Certiorari negado em *Thaler v. Perlmutter* em 02/03/2026, mantendo o requisito de autoria humana | Confere na data e no efeito |

**Uma precisão que a conferência obriga, e que corrige o resumo por excesso.** A seção 1 diz que a
negativa de certiorari deixou de pé "a regra de que prompt não é autoria". O que a negativa deixa
de pé é o **requisito de autoria humana**; a fonte é explícita em que *quanto* de intervenção
humana — "prompting or post-generation editing" — basta para registrar **permanece indefinido** e
será fixado em litígio futuro. A afirmação de que prompt sozinho não basta vem da orientação do
Escritório de Direitos Autorais (fonte 29), não da Suprema Corte. As duas somadas sustentam a tese
do mapa; a Suprema Corte sozinha, não. **Esta é a formulação mais esticada do documento**, e fica
aqui corrigida em vez de reescrita no resumo, para que a diferença entre o que a rodada escreveu e
o que a conferência apurou continue visível.

**Uma segunda precisão, menor.** A análise do Greenberg Traurig (fonte 28) confirma as duas datas —
02/08/2026 para a aplicabilidade e 02/12/2026 como prazo revisto proposto pelo AI Omnibus para a
obrigação do Artigo 50(2) — mas **não** menciona a isenção de "função assistiva de edição padrão"
com essas palavras. Essa isenção vem do texto do próprio Artigo 50(2) (fonte 27). O mapa usa as
duas fontes para a mesma passagem; quem for checar deve procurar a isenção na fonte 27.

### 12.8 Divergências de contagem e de data, e as correções feitas

- **`fontes`: 35 → 39.** O frontmatter dizia 35 e a seção 11 lista 39 fontes numeradas, todas com
  descrição do que sustentam. A rodada interrompida gravou o frontmatter antes de fechar a lista. O
  §9 da skill manda corrigir o frontmatter, não o texto — foi o que fiz, na frente-matéria e na
  linha de abertura da seção 3, que também dizia 35.
- **Três efeitos de 3ª ordem com prazo além do horizonte**, o que a skill permite desde que se
  declare: `e1.1.1` (2032), `e10.1.1` (2032) e `e13.1.1` (2032). Apenas um estava declarado no corpo
  do documento. **Os três ficam declarados aqui:** estão fora da janela de 2031 deste mapa, e o ano
  neles é estimativa de quando o efeito ficaria visível, não compromisso.
- **Divergência de data no PL 2338**, já registrada na fonte 36: a ficha do Senado marca a aprovação
  plenária em 26/12/2024; a imprensa especializada fala em 10/12/2024, que é a data do relatório
  favorável. O texto usa 10/12/2024.
- **Divergência de versão do C2PA**, já registrada em 8.10: c2pa.org apontava 2.3 em 08/01/2026; o
  verbete registra 2.4 de 21/04/2026. O texto usa 2.4.
- **O prêmio do VAR no NeurIPS 2024 não foi confirmado** (8.4). O enunciado do tema afirma; a página
  do arXiv que a rodada abriu não menciona prêmio. A afirmação **não aparece** nas seções 1 a 11.

### 12.9 A saída do verificador

`python3 .../futurizacao-giordano/references/verificar.py tendencia-midia-sintetica-controlavel-video-e-imagem.md --links`, colada inteira, com os números e não com a palavra "passou":

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 16 (frontmatter diz 16)
efeitos ordem 2: 27 (frontmatter diz 27)
efeitos ordem 3: 22 (frontmatter diz 22)
prazo > horizonte (2031) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 3 [('e1.1.1', 2032), ('e10.1.1', 2032), ('e13.1.1', 2032)]
confiança ordem 1: alta 6 · media 8 · baixa 2
confiança ordem 2: alta 2 · media 20 · baixa 5
confiança ordem 3: alta 0 · media 0 · baixa 22
  link não responde: https://www.gtlaw.com/en/insights/2026/6/deepfakes-chatbots-ai-generated-text-european-commission-details-transparency-obligations-under-the-ai-act
  link não responde: https://www.morganlewis.com/pubs/2026/03/us-supreme-court-declines-to-consider-whether-ai-alone-can-create-copyrighted-works
links da seção 11: 37/39 respondem (frontmatter diz fontes: 39)
RESULTADO: 1 problema(s) — corrija antes de entregar
```

**Leitura da saída, item por item, sem esconder o que não fechou.**

- Frontmatter completo (18/18) e os doze títulos literais presentes.
- As contagens do frontmatter batem com as contagens reais: 4 raízes, 16 efeitos de 1ª ordem, 27 de
  2ª, 22 de 3ª.
- Nenhum efeito de 1ª ou 2ª ordem com prazo além de 2031. Três de 3ª ordem além, permitidos e
  declarados em 12.8.
- **Calibração:** a proporção de confiança alta cai de 37,5% (6/16) para 7,4% (2/27) para 0% (0/22).
  A terceira ordem inteira em confiança baixa é a resposta que a skill considera esperada.
- **O que não fecha, e fica assim de propósito:** 37 dos 39 links respondem ao script. Os dois que
  não — `gtlaw.com` e `morganlewis.com` — bloqueiam o cliente HTTP do verificador e foram reabertos
  na retomada, devolvendo o conteúdo citado (12.6 e 12.7). Por isso o verificador termina com um
  problema em aberto em vez de "ok". **A alternativa seria remover as duas fontes para o script
  passar, e isso seria piorar o documento para embelezar o relatório.**
