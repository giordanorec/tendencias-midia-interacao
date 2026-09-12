---
tema: "Mídia sintética controlável: vídeo e imagem"
slug: midia-sintetica-controlavel-video-e-imagem
autor_login: jcsc
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-12
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 7
efeitos_ordem_2: 13
efeitos_ordem_3: 13
tecnologias_citadas: [Runway Aleph, Runway Gen-4, FLUX.1 Kontext, FLUX.1 Kontext dev, Black Forest Labs, EbSynth, Pika, Luma Dream Machine, Kling, Sora, Veo, GPT Image 1, GPT Image 1.5, GPT Image 2, GPT Image 2.5, VAR, DiT, ControlNet, ComfyUI, Cavalry, Graphite, Pixel Composer, Rive, Rive State Machine, Lottie, dotLottie, dotLottie State Machines, Remotion, satori, InvokeAI, diffusers, Magnific, Adobe Firefly, C2PA, Content Credentials, SynthID, Genie 3, Project Genie, pix2pix, CycleGAN]
fontes: 16
confianca: media
experimento: "Mesa de controle — a mesma tomada regerada ao vivo sob quatro regimes de controle, contando quantas tentativas cada regime gasta até bater o plano descrito antes"
skill_usada: futurizacao-jcsc
publico_ok: false
---

## 1. Resumo

Gerar vídeo por prompt virou commodity; o que está em disputa é **dirigir**. Entre 2025 e 2026 a
mídia sintética ganhou quatro alças de controle que ela não tinha: sinal espacial explícito
(região, máscara, pose, profundidade, trajetória de câmera) injetado num modelo já treinado;
edição *in-context*, em que o modelo reescreve um trecho do material existente e preserva o que
não foi pedido (Runway Aleph, jul/2025; FLUX.1 Kontext, mai/2025); uma arquitetura fora da
difusão, com o autoregressivo por escala saindo do artigo premiado no NeurIPS 2024 e chegando a
produto (a família GPT Image, autoregressiva, de mar/2025 a set/2026); e a peça animada
publicada como **máquina de estados** em vez de arquivo que toca — o Rive desde sempre, e o
Lottie copiando o modelo com as state machines do dotLottie. Este mapa sustenta que a ruptura
não é a qualidade da imagem: é que a geração deixou de ser **amostragem** e virou **instrumento**
— e instrumento tem partitura, ensaio e reprodutibilidade. Até 2031 aparecem três efeitos
estruturais: o entregável de audiovisual deixa de ser o arquivo e passa a ser o grafo de
controles que o produz; a presunção de registro que o vídeo carregava se desfaz mais depressa na
opinião pública do que no tribunal, onde a evidência empírica de 2026 aponta na direção contrária
ao pânico; e a fronteira entre assistir e usar se dissolve primeiro no varejo e na educação, não
no entretenimento.

## 2. O tema

### O que é

**Mídia sintética controlável** é o conjunto de técnicas que transforma geração visual de um
sorteio condicionado por texto num processo *dirigível*: em que a pessoa que projeta consegue
dizer **onde**, **quando**, **em que quadro** e **sob que regra** a máquina deve mudar alguma
coisa — e obter a mesma coisa de novo amanhã.

Quatro alças distintas, que amadurecem em ritmos diferentes e que este mapa trata como
disrupções separadas:

1. **Condicionamento espacial-temporal.** Máscara de região, pose, mapa de profundidade,
   trajetória de câmera, pincel de movimento — sinais geométricos injetados num modelo
   pré-treinado. A linhagem técnica é a do ControlNet e, antes dele, a do `pix2pix`.
2. **Edição in-context.** O modelo recebe o material existente como contexto e reescreve apenas
   o pedido. Runway Aleph em vídeo; FLUX.1 Kontext em imagem.
3. **Arquitetura fora da difusão.** Geração por **passos de escala** (coarse-to-fine) em vez de
   por remoção iterativa de ruído. VAR no artigo, GPT Image no produto.
4. **A peça como programa.** Animação publicada como máquina de estados ou grafo de nós, que
   *responde* a evento em vez de tocar do começo ao fim: Rive, dotLottie, Cavalry, ComfyUI.

### Onde encosta em mídia e interação

Em três lugares, e nenhum deles é infraestrutura — os três são de projeto.

**Na especificação.** Quando a diferença entre um plano aprovado e um plano rejeitado passa a ser
uma máscara e um keyframe, e não um adjetivo no prompt, o briefing muda de natureza. Deixa de ser
descrição e vira **condição de entrada**. Isso é trabalho de quem projeta, não de quem opera.

**Na reprodutibilidade.** Um prompt que devolve uma peça bonita e nunca mais devolve aquela peça
não sustenta produção. O grafo de nós, a máquina de estados e o keyframe propagado existem porque
a produção precisa de determinismo parcial: *a mesma entrada, o mesmo resultado, com uma variável
solta de cada vez*. É por isso que a ferramenta profissional convergiu para grafo enquanto a
ferramenta de massa convergiu para caixa de texto.

**Na fronteira com interface.** Uma animação que é máquina de estados não é vídeo: é componente.
Roda em web, iOS, Android, Flutter, Unity e Unreal a partir do mesmo arquivo, recebe input
booleano, numérico e de gatilho, e responde. Quando o mesmo artefato pode ser assistido *ou* usado
dependendo de haver ou não um evento, a distinção entre peça audiovisual e elemento de UI para de
descrever alguma coisa.

### Por que merece mapa de futuro, e não levantamento de estado da arte

Porque o estado da arte já está resolvido para a pergunta errada. "Qual modelo gera o vídeo mais
bonito" tem resposta, muda de dono a cada trimestre e não decide nada de projeto. A pergunta que
não tem resposta é **quem dirige**: se a alça de controle vai morar no modelo (instrução composta
em linguagem), na ferramenta (grafo de nós), no arquivo (máquina de estados) ou no contrato
(proveniência assinada). Essas quatro respostas dão quatro indústrias diferentes em 2031, e a
escolha ainda está aberta. Levantamento de estado da arte registra o que existe; aqui o objeto é
uma bifurcação que ainda não fechou.

## 3. Onde isso está hoje

### O que já existe e funciona

**Edição in-context em vídeo, em produto pago.** O Runway Aleph foi anunciado em **25 de julho de
2025** como "um novo jeito de editar, transformar e gerar vídeo" — um *in-context video model*
para geração visual multitarefa. As operações que a própria Runway lista: adicionar, remover e
transformar objetos; gerar ângulos diferentes de uma cena já filmada; mudar estilo e iluminação.
Está disponível para todos os planos pagos da plataforma. Isto é a mudança de unidade de trabalho:
o objeto de entrada deixou de ser o prompt e passou a ser **o material que já existe**.
[F3]

**Edição in-context em imagem, com pesos abertos.** O FLUX.1 Kontext (Black Forest Labs,
mai/2025) unifica geração e edição por concatenação de sequência: entra texto **e** imagem,
extrai conceito visual, aplica edição local e mantém consistência de personagem entre cenas.
A variante `[dev]`, de 12B de parâmetros, saiu com pesos abertos. A BFL reivindica latência até
8× menor que a dos modelos líderes na época e edição iterativa "com latência mínima" — que é o que
transforma edição em conversa em vez de em lote. [F4]

**Propagação de keyframe sem IA generativa nenhuma.** O EbSynth continua sendo a saída mais
controlável para rotoscopia estilizada, e isso é um dado importante para calibrar a hype: ele usa
**síntese de textura**, não modelo generativo. Você pinta um quadro à mão e ele propaga a pintura
pela timeline seguindo o movimento. Tem plano gratuito sem limite de tempo (720p, MP4) e planos
pagos a US$ 20 e US$ 200/mês. Foi feito por Šárka Sochorová e Ondřej Jamriška, do estúdio Secret
Weapons. Um algoritmo determinístico de 2019 ainda ganha dos generativos onde o requisito é
*fidelidade ao traço do artista*. [F9]

**O grafo como interface profissional.** O ComfyUI virou o ambiente onde a geração é montada como
grafo acíclico dirigido — cada operação é um nó, e o pipeline inteiro é visível, versionável e
modificável. O que começou como front-end de Stable Diffusion hoje roda imagem, vídeo e áudio no
mesmo grafo. Não consegui verificar em fonte primária os números de adoção que circulam ("padrão
de facto", economia de 60-80% em gasto de API); trato isso como impressão de comunidade, não como
dado — ver §8.

**A animação como máquina de estados.** A State Machine do Rive define a lógica que controla
animações interativas dentro do próprio arquivo. Recebe três tipos de input — **boolean**,
**number** e **trigger** — e o mesmo `.riv` roda em Web, React Native, Flutter, Apple, Android,
Unity e Unreal. [F5] A Rive alega redução típica de 10-15× no tamanho do arquivo contra Lottie
(uma animação de 240 KB em Lottie refeita em 16 KB) e cita o Duolingo com 15× de redução; são
números **de fornecedor**, sobre o próprio produto, e devem ser lidos assim. [F6]

**E o concorrente copiou o modelo.** A partir da versão 2.4.0 dos players, o dotLottie passou a
suportar **state machines** com inputs numérico, string, booleano e de evento, definidas sem
código e embarcadas no mesmo arquivo `.lottie`, com runtime em Web, iOS e Android. Isto é o sinal
mais forte de que "animação que responde" deixou de ser aposta de um fornecedor e virou categoria:
quando o incumbente do formato declarativo adota a arquitetura do desafiante, a disputa mudou de
lugar.

**A geração de imagem saiu da difusão, em produto.** A família GPT Image é **autoregressiva** —
explicitamente ao contrário dos predecessores DALL-E 2 e DALL-E 3, que eram de difusão. A
cronologia: GPT Image 1 (25/03/2025), 1 Mini (06/10/2025), 1.5 (16/12/2025), GPT Image 2
(abr/2026, introduzindo raciocínio antes de gerar) e GPT Image 2.5 (08/09/2026 — quatro dias antes
desta redação). [F15] A tese "GPT vence difusão", que em 2024 era um artigo, hoje é a linha de
produto de imagem de um dos maiores fornecedores.

**A base teórica disso.** O VAR (*Visual Autoregressive Modeling*) redefiniu o aprendizado
autoregressivo em imagem como **next-scale prediction** — prever o próximo mapa de tokens em
resolução maior, condicionado a todos os anteriores — em vez do *next-token* em varredura raster.
No ImageNet 256×256 levou o FID de 18,65 para **1,73** e o IS de 80,4 para **350,2**, com
inferência cerca de **20× mais rápida**, e exibiu leis de escala com coeficiente de correlação
linear próximo de **−0,998**, além de generalização zero-shot para inpainting, outpainting e
edição. Foi melhor artigo do NeurIPS 2024. [F1]

### O que existe e não funciona

**Controle fino ainda é problema aberto na literatura.** O survey de referência sobre geração
controlável de vídeo (arXiv:2507.16869, submetido em 22/07/2025, v3 em 19/01/2026) parte
exatamente da constatação de que *"text prompts alone are often insufficient to express complex,
multi-modal, and fine-grained user requirements"*. A taxonomia proposta separa condição única,
multicondição e controle universal, sobre sinais como câmera, profundidade e pose humana. Que
alguém precise escrever esse survey em 2026 é a evidência de que a alça de controle **ainda não
existe de forma unificada** — cada modelo tem a sua, incompatível com a do vizinho. [F2]

**Vídeo interativo em tempo real está longe de produção.** O Genie 3, do Google DeepMind, gera e
explora mundos interativos a partir de texto, mas a própria DeepMind lista os limites: **720p**,
**20-24 fps**, poucos **minutos** de interação contínua, memória de mudanças por cerca de um
minuto, dificuldade com múltiplos agentes, impossibilidade de reproduzir lugares reais e falha em
gerar texto legível. [F13] O Project Genie abriu acesso em **janeiro de 2026**, restrito a
assinantes do Google AI Ultra nos EUA, maiores de 18 anos, com sessões de no máximo **60
segundos**. [F14] Isto é demonstração pública, não ferramenta.

**Proveniência: assinatura sem conformidade e sem carimbo de tempo.** O C2PA tem um programa de
conformidade "baseado em risco, transparente e imparcial", com a especificação na série **2.x**
(referência à 2.3) e uma lista pública de produtos conformes. [F8] O que os levantamentos de 2026
indicam — e aqui saio de fonte primária, então marco a incerteza — é que nenhuma implementação de
câmera havia alcançado conformidade sob esse programa até meados de 2026, que a maioria das
câmeras que assinam não grava carimbo de tempo, e que as plataformas preservam a cadeia de
credenciais de forma desigual. Uma assinatura sem conformidade verificada e sem "quando" resolve
menos do que o nome promete.

### Quem está construindo, e o que a disputa jurídica já produziu

**A regulação chegou antes da tecnologia se estabilizar.** O Artigo 50 do AI Act europeu se aplica
desde **2 de agosto de 2026**. Provedores de sistemas que geram áudio, imagem, vídeo ou texto
precisam marcar as saídas em **formato legível por máquina**; quem *implanta* um deepfake precisa
divulgar que o conteúdo é artificialmente gerado ou manipulado. Conteúdo generativo já no mercado
tem até **2 de dezembro de 2026** para atender à marcação. Há exceção relevante para este tema:
em obra evidentemente **artística, criativa, satírica ou ficcional**, a divulgação é reduzida a
informar de maneira que não prejudique a exibição ou a fruição da obra. [F10]

**A promessa de "seguro para uso comercial" está sob litígio.** O posicionamento do Adobe Firefly
— treino só em Adobe Stock licenciado e domínio público, com cobertura jurídica da Adobe em caso
de ação de terceiro — enfrentou em 2026 tanto uma ação coletiva de autores (Preston e Nazemian,
dez/2025, alegando uso do dataset Books3) quanto uma ação derivativa de acionistas (16/06/2026,
Distrito Norte da Califórnia, alegando uso do SlimPajama). A Adobe nega. Não abri as petições —
isto vem de resultado de busca, e está registrado como tal em §8 e §11. O que importa para o mapa
não é quem ganha: é que **"acervo licenciado" virou uma alegação contestável em juízo**, e não
mais um diferencial de produto pacífico.

**O tribunal não entrou em pânico.** Este é o achado que mais contraria a intuição do tema. O
Federal Judicial Center divulgou em **25 de março de 2026** uma pesquisa com **931 juízes**
federais respondentes (taxa de resposta de 45%): apenas **15 deles — cerca de 2%** — já tinham
encontrado um litigante contestando material audiovisual como deepfake, e dois terços desses
tinham visto uma única contestação. [F11] O Advisory Committee on Evidence Rules, que havia
encomendado o levantamento para informar uma eventual mudança na Regra 901, considerou em maio de
2026 uma Regra 901(c) que exigiria do **contestador** evidência suficiente de fabricação antes de
qualquer investigação judicial. As propostas de Regra 707 (prova gerada por máquina) e 901(c) não
foram levadas a aprovação final e seguem em estudo. A discussão de fundo — a de que o problema é
tanto a falsificação quanto o **"dividendo do mentiroso"**, a possibilidade de descartar prova
verdadeira alegando que é sintética — vem sendo conduzida por Paul Grimm e colegas. [F12]

### O Brasil

O uso está na etapa de **pré-produção e apoio**, não de peça final. A O2 Filmes usa IA para gerar
imagem de referência de storyboard e desenvolve um modelo próprio para análise técnica de roteiro
com vistas a orçamentação, além de experimentar troca de rosto e alteração de voz. A Endemol Shine
Brasil produziu para a Netflix espanhola *É amor ou falsidade*, reality cuja mecânica é
justamente confundir o participante misturando real e sintético. Paulo Barcellos, CEO da O2,
projeta ferramentas maduras de dublagem e sincronismo labial em 1-2 anos e dublês digitais em 3-4.
[F16] Não encontrei posição pública do CONAR especificamente sobre mídia sintética em publicidade
audiovisual, nem dado oficial de adoção no mercado publicitário brasileiro — os números que
circulam vêm de blogs de fornecedor e não entram aqui.

## 4. As disrupções-raiz

Antes das quatro aceitas, o registro do filtro. A régua desta rodada é a da disciplina — **o que
já é comum em produto de massa não entra** — combinada com o critério de recusa da Etapa 2 desta
skill: recuse como *presente* qualquer tecnologia amplamente adotada pelos líderes do setor **e**
sem debate técnico real e atual sobre sua substituição no horizonte.

### Candidatos descartados por maturidade

| Candidato | Por que foi cogitado | Por que foi recusado |
|---|---|---|
| **Texto-para-vídeo por prompt** (Sora, Veo, Kling, Luma) | É o rosto público do tema | Padrão de mercado consolidado, em produto de massa com assinatura de consumidor. Não há debate sobre substituí-lo — há debate sobre **dirigi-lo**, que é outra coisa e virou D1 |
| **Upscaling e restauração** (Magnific, e similares) | Aparece na amostra da turma | Melhoria de qualidade sem ruptura de estrutura. Não consigo dizer o que rompe |
| **Difusão latente como técnica** | Base de quase tudo | Madura desde 2022; é o incumbente que D3 questiona, não a novidade |
| **Motion graphics à mão e edição não-linear** | Ainda é o grosso do trabalho | Explicitamente maduro pela régua da disciplina |
| **Geração de imagem por prompt simples** | Idem | Idem. Está em teclado de celular |
| **C2PA / Content Credentials** | Muito citado, e regulado desde ago/2026 | **Não é disrupção-raiz: é reação.** Só existe porque D2 aconteceu. Entra no mapa como efeito de 2ª ordem (`e4.1`), que é o lugar correto dele |
| **Mundos jogáveis gerados em tempo real** (Genie 3) | Tentador como raiz | Ainda não rompe nada porque ainda não é usável: 720p, 60s, EUA, um plano de assinatura. Entra como **sinal fraco** (§6) e como efeito `e7` |
| **Remotion / satori** (vídeo e imagem programáticos) | Grafo e código como autoria | Absorvido por D4, que é o caso geral. Sozinhos são ferramenta, não ruptura |

### D1 — O controle deixa de ser adjetivo e vira sinal geométrico

**O que rompe.** Rompe a relação entre intenção e resultado. Enquanto o único canal de controle é
a linguagem, a geração é uma loteria condicionada: o mesmo prompt devolve coisas diferentes, e a
correção é reescrever o texto e sortear de novo. Quando o canal passa a ser **máscara, pose, mapa
de profundidade, trajetória de câmera, keyframe pintado**, a geração entra numa relação de causa
localizada: mudou aqui, mudou só aqui. Isso não melhora o processo — **muda quem manda nele**, do
modelo para quem projeta.

**Por que agora e não há cinco anos.** Porque em 2021 a qualidade era o gargalo e não fazia sentido
gastar interface com direção de algo que ainda não saía bom. A geração ficou boa o bastante para
que o problema deslocasse para dirigir. E porque a técnica de injetar condição em modelo
pré-treinado (linhagem ControlNet, sobre a raiz histórica do `pix2pix`) tornou possível adicionar
alça de controle **sem retreinar** o modelo — que é o que permite a alça existir num ecossistema em
que o modelo troca a cada trimestre.

**O que ainda falta.** Falta unificação. O survey de 2026 existe justamente porque cada família de
modelo tem um vocabulário de condição próprio e incompatível [F2]. Enquanto "máscara de região"
significar uma coisa no Runway e outra no ComfyUI, o controle não é transferível — e controle não
transferível não vira ofício.

### D2 — A geração passa a operar sobre o material existente e preserva o que não foi pedido

**O que rompe.** Rompe a fronteira entre **gerar** e **editar**. O modelo generativo era um
produtor de material novo; a edição era outra ferramenta, outro arquivo, outra pessoa. Na edição
in-context o material existente é o contexto, e a saída é o mesmo material com um trecho
reescrito — preservando look, movimento e continuidade do que não foi tocado [F3]. Isso quebra o
argumento de que mídia sintética não serve para produção séria, porque o problema de produção
nunca foi criar do zero: era **consertar o que foi filmado**.

**Por que agora.** Duas condições se juntaram. A técnica: unificar geração e edição numa mesma
arquitetura por concatenação de sequência, com consistência de personagem preservada ao longo de
várias rodadas de edição — que é o que o FLUX.1 Kontext entregou e o que os modelos anteriores
degradavam a cada iteração [F4]. E a latência: edição iterativa só é edição se responde em
segundos; a BFL reivindica até 8× de ganho sobre os líderes anteriores, e é essa ordem de grandeza
que converte lote em conversa.

**O que ainda falta.** Falta durar. O que se sabe publicamente dos limites operacionais aponta
para clipes curtos e resolução de entrega, não de masterização. E falta a integração com o
pipeline conservador: conformação, color, QC contratual e entrega broadcast não aceitam "o modelo
reescreveu esse pedaço" sem trilha de auditoria.

### D3 — A geração visual sai da difusão

**O que rompe.** Rompe o **monopólio arquitetural**. Entre 2022 e 2024, "IA generativa de imagem"
e "difusão" eram sinônimos práticos, e toda a ferramentaria — samplers, schedulers, LoRA, o
vocabulário inteiro do ComfyUI — foi construída sobre esse pressuposto. O VAR mostrou que um
transformer autoregressivo prevendo **a próxima escala** bate o Diffusion Transformer em
qualidade, velocidade, eficiência de dados e escalabilidade ao mesmo tempo, com ganho de ~20× em
inferência e leis de escala do tipo das dos LLMs [F1]. E a família GPT Image levou o
autoregressivo a produto de massa, em cinco versões entre março de 2025 e setembro de 2026 [F15].

**Por que agora.** Porque a difusão pagava um preço estrutural: dezenas de passos de negação de
ruído sobre a imagem inteira, sem estrutura espacial preservada quando se achata 2D em 1D. O
next-scale prediction resolve os dois — coarse-to-fine é a ordem natural de uma imagem, e é
paralelizável dentro de cada escala. E porque um backbone autoregressivo é **o mesmo substrato**
do modelo que raciocina sobre texto: o GPT Image 2 introduz raciocínio antes de gerar [F15], o que
só faz sentido se geração e raciocínio compartilham a máquina.

**O que ainda falta.** Falta a difusão perder em vídeo, e não só em imagem — os geradores de vídeo
de ponta seguem majoritariamente difusivos. E falta ecossistema: quase toda a ferramentaria aberta
de controle fino (ControlNet, adaptadores, o acervo de nós do ComfyUI) pressupõe difusão. Uma
arquitetura vencedora sem as alças de D1 é um retrocesso de controle disfarçado de avanço técnico
— e essa é uma tensão real deste mapa, não um detalhe.

### D4 — A peça animada deixa de ser um arquivo que toca e vira um programa que responde

**O que rompe.** Rompe a definição de **entregável**. O produto do motion design era um render: um
arquivo linear, aprovado, imutável, que toca igual sempre. Uma máquina de estados não tem "toca":
tem estado corrente, inputs (boolean, number, trigger) e transições [F5]. O mesmo arquivo é um
componente em sete runtimes diferentes. Isso não é uma melhoria de formato — é a **transferência
da peça audiovisual do domínio do arquivo para o domínio do software**, com tudo que vem junto:
versionamento, teste, revisão de lógica, regressão.

**Por que agora.** Porque parou de ser aposta de um fornecedor. O Rive defende essa arquitetura há
anos; o que muda em 2025-2026 é o **Lottie adotar o mesmo modelo**, com as state machines do
dotLottie a partir da versão 2.4.0 dos players, definidas sem código, com inputs numérico, string,
booleano e de evento, rodando em Web, iOS e Android. Quando o formato declarativo dominante
incorpora a máquina de estados do desafiante, a categoria deixou de estar em disputa.

**O que ainda falta.** Falta encontrar a mídia sintética. Hoje D4 e D1-D3 são mundos separados:
máquina de estados é vetor autoral, geração é pixel amostrado. O que ainda não existe em produção
é a peça cuja **superfície é gerada** e cujo **comportamento é máquina de estados** — vídeo
generativo que responde a evento com latência de interface. O Genie 3 é a primeira demonstração
pública dessa junção, e seus limites (720p, 24 fps, minutos, um agente) [F13] dizem exatamente
quanto falta.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O controle deixa de ser adjetivo em prompt e vira sinal geométrico injetado no modelo
    efeitos:
      - id: e1
        ordem: 1
        efeito: A direcao de arte volta a ser especificavel, porque o briefing vira condicao de entrada em vez de adjetivo
        sinal: forte
        prazo: 2027
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O cargo que cresce e o de quem monta e mantem o grafo de condicionamento, nao o de quem escreve prompt
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O ensino de animacao se reorganiza em torno de especificar restricao, com desenho e timing como alfabetizacao e nao como entrega
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O contrato de producao passa a descrever o entregavel como conjunto de controles reproduziveis, nao como arquivo final
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Surge disputa autoral sobre o grafo de controle em si, separada da disputa sobre o modelo e sobre o dataset
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O custo marginal de uma variacao cai perto de zero enquanto o custo da primeira versao continua alto
        sinal: forte
        prazo: 2027
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: A publicidade migra de peca unica para familia de pecas condicionadas por segmento, praca e horario
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: A metrica de midia deixa de comparar criativos e passa a comparar politicas de geracao
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: A produtora deixa de vender diaria de equipe e passa a vender manutencao de sistema de marca
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: O mercado brasileiro de producao publicitaria se bifurca entre poucas casas de sistema e muitos operadores avulsos
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A geracao passa a operar sobre o material existente e preserva o que nao foi pedido
    efeitos:
      - id: e3
        ordem: 1
        efeito: A pos-producao deixa de corrigir plano por plano e passa a reescrever trechos do material ja filmado
        sinal: forte
        prazo: 2027
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Filmagem e pos deixam de ser fases distintas porque se decide em set o que antes se decidia meses depois
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: O roteiro passa a ser escrito prevendo o que sera reescrito depois e a decupagem perde a funcao de compromisso irreversivel
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: O acervo de arquivo vira insumo generativo porque material antigo e reescrito em vez de refilmado
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Contratos de imagem de elenco passam a precificar reescrita futura e nao apenas reexibicao
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: O video deixa de carregar presuncao de registro na esfera publica mesmo quando e registro
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Um mercado de autenticidade certificada se organiza em torno de proveniencia criptografica assinada na captura
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Material jornalistico sem credencial de origem passa a ser tratado como fonte de segunda classe por plataformas e redacoes
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: O onus pratico de contestar um video em juizo se firma no contestador e nao em quem apresenta a prova
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: O dividendo do mentiroso se realiza na opiniao publica muito mais do que no tribunal
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A geracao visual sai da difusao e passa a ser autoregressiva por escala
    efeitos:
      - id: e5
        ordem: 1
        efeito: A geracao de imagem vira um modo do mesmo modelo que conversa e nao um servico separado
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A instrucao composta em linguagem substitui parte do grafo de nos para quem nao e especialista
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: O ferramental profissional se separa em duas camadas com linguagem para intencao e grafo para reprodutibilidade
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: A latencia cai o bastante para a imagem ser gerada dentro do laco de interacao e nao antes dele
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Interfaces passam a ter regioes sintetizadas por sessao e o design especifica faixa aceitavel em vez de pixel
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A peca animada deixa de ser arquivo que toca e vira programa que responde a evento
    efeitos:
      - id: e6
        ordem: 1
        efeito: A animacao de produto passa a ser publicada como maquina de estados com um arquivo por comportamento e nao um por plataforma
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O designer de movimento entrega logica versionada no repositorio em vez de render aprovado por e-mail
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A revisao de design incorpora teste automatizado de transicao de estado como ja ocorre com codigo
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: A fronteira entre assistir e usar se dissolve no varejo e na educacao antes de se dissolver no entretenimento
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Metrica de audiovisual e metrica de produto se fundem e retencao e conversao passam a ser lidas no mesmo painel
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: O video gerado em tempo real condicionado por acao do usuario sai do laboratorio para uso comercial com limites duros
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O primeiro uso comercial estavel e cenario de fundo e ambientacao e nao personagem nem narrativa
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A producao de ambientacao para jogo e para virtual production deixa de ser item de orcamento visivel
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o bloco não consegue dizer

**A cadeia continuaria, e o corte em três níveis é decisão de formato.** O critério de parada
desta skill é de engenharia, não do método — a Futures Wheel original de Glenn não fixa
profundidade. Dois ramos pediam um quarto nível com clareza: `e1.1.1` desdobraria em uma disputa
sobre o que um curso de animação certifica quando a execução deixa de ser o produto; `e4.2.1`
desdobraria em como um regime em que o tribunal resiste e a opinião pública não separa dois
regimes de verdade sobre o mesmo vídeo. Ficam registrados aqui em prosa, e não no YAML.

**Dois efeitos se contradizem de propósito, e isso é o achado.** `e4` diz que o vídeo perde
presunção de registro; `e4.2` diz que, na instituição que decide, o ônus vai para quem contesta.
Não é inconsistência: é a tese de que a erosão da confiança em vídeo é **assimétrica** — rápida
onde não há procedimento (rede social, conversa, campanha) e lenta onde há (tribunal, redação com
protocolo, perícia). O dado dos 931 juízes [F11] é o que sustenta o lado lento.

**A convergência mais provável com outros temas da turma.** `e5.2` e `e7` encostam no tema 10
(captura de realidade e renderização neural) e no 9 (modelos de mundo): três temas diferentes
chegam ao mesmo efeito de "imagem sintetizada dentro do laço de interação". `e4.1` encosta no tema
2 (identidade e contenção): proveniência de mídia e identidade de agente são o mesmo problema de
atestação com hardware, resolvido por comitês que não conversam.

**Os prazos foram conferidos contra o horizonte.** Nenhum `prazo` no bloco excede 2031. Onde a
cadeia causal só se consolidaria depois — o caso dos dois quartos níveis descritos acima — a
escolha foi dizer isto em prosa em vez de atribuir data fora do intervalo pedido.

## 6. Sinais fracos e wildcards

### Sinal fraco 1 — o incumbente copiou a arquitetura do desafiante

As state machines do dotLottie são o sinal mais sutil deste mapa, e o mais fácil de não ver. Um
número de versão de player (2.4.0) não parece notícia. Mas é o formato de animação declarativa
mais instalado do mundo adotando o modelo de execução do concorrente. Quem lê isso como
atualização de biblioteca perde a mudança de categoria: **animação que responde deixou de ser
diferencial e virou expectativa**.

### Sinal fraco 2 — um algoritmo de 2019, sem IA, ainda é a saída mais controlável

O EbSynth continua sendo a referência de rotoscopia estilizada usando síntese de textura, não
modelo generativo [F9]. Isso é um sinal fraco *contra* o mapa: sugere que o requisito real de
produção — fidelidade ao traço de um artista específico — pode ser melhor atendido por método
determinístico do que por modelo probabilístico, por mais que o modelo melhore. Se em 2031 a
rotoscopia estilizada ainda for EbSynth, D1 rendeu menos do que este mapa supõe.

### Sinal fraco 3 — raciocínio antes de gerar

O GPT Image 2 introduziu um modelo de raciocínio no caminho da geração [F15]. Isso é pequeno na
descrição e grande na consequência: significa que o sistema pode **planejar a composição** antes de
produzir o pixel — o que é, funcionalmente, uma alça de controle que não passa nem por máscara nem
por grafo. Se essa via vencer, D1 (controle como sinal geométrico) e D4 (controle como programa)
perdem espaço para controle como **deliberação em linguagem**, e boa parte de `e1.1` não acontece.

### Sinal fraco 4 — o circuito de festivais de IA é separado, e isso é informação

Existe hoje um circuito próprio e movimentado de festivais de filme feito com IA — edições em
Veneza, Cannes, Dubai, Marrakech, Los Angeles, Chicago, Bali, com premiação em dinheiro e
categorias exigindo obra 100% gerada. O que **não** encontrei foi um longa majoritariamente
generativo em seleção oficial de festival de primeira linha. A existência de um circuito paralelo
robusto é evidência de **segregação**, não de aceitação: a comunidade criou um lugar próprio
porque o lugar principal não abriu. Enquanto essa separação durar, o efeito `e3.1` (colapso da
fronteira entre set e pós no cinema de autor) é mais lento do que a técnica permite.

### Wildcard 1 — um longa dirigido por uma pessoa entra em seleção oficial de festival de primeira linha

Baixa probabilidade até 2031, impacto alto. Não pela obra em si, mas porque a seleção oficial é o
mecanismo que converte capacidade técnica em **legitimidade**. No dia em que isso acontecer, três
efeitos deste mapa aceleram de uma vez: `e2.2` (produtora vira casa de sistema), `e3.1` (set e pós
se fundem) e `e1.1.1` (o ensino se reorganiza). O sinal precoce a monitorar não é "saiu um filme
de IA": é um longa **híbrido** — filmado, com pós majoritariamente generativa não declarada como
tema da obra — entrando por competição regular, sem categoria especial.

### Wildcard 2 — uma decisão judicial de repercussão anula prova em vídeo autêntica por dúvida de deepfake

Baixa probabilidade, dado o que os 931 juízes reportaram [F11], e impacto muito alto. Bastaria um
caso de grande repercussão para inverter o ônus prático de `e4.2` e transformar `e4.1`
(autenticidade certificada) de nicho em obrigação de fato — não por lei, mas por prudência de
seguradora e de departamento jurídico. É o cenário em que o C2PA deixa de ser marketing de
fabricante de câmera e vira requisito de contrato.

### Wildcard 3 — vazamento de que um acervo "licenciado" não era licenciado

As ações contra a Adobe em 2026 são, por enquanto, alegações. Se em algum momento ficar
estabelecido que um acervo vendido como seguro para uso comercial não era, o efeito não é sobre
uma empresa: é sobre a **categoria de garantia**. Anunciante que compra mídia sintética compra,
sobretudo, indenidade. Sem essa garantia crível, a adoção corporativa de `e2.1` (família de peças
condicionadas) trava, mesmo com a técnica pronta.

### Wildcard 4 — controle unificado por padrão aberto

O simétrico dos anteriores: alguém publica, e a indústria adota, um formato comum de sinal de
controle — a "máscara de região, pose e trajetória de câmera" com semântica igual entre modelos e
ferramentas. Improvável, porque cada fornecedor ganha com o aprisionamento. Se acontecer, é o
único evento que faz `e1.1` (o ofício do grafo de condicionamento) virar profissão de verdade em
vez de especialidade de ferramenta.

## 7. Contra o próprio mapa

### As rebaixas de confiança da Etapa 4, com o valor original

A autocrítica desta skill exige derrubar os próprios efeitos e registrar a rebaixa de forma
auditável. Quatro efeitos foram rebaixados:

| Efeito | Era | Ficou | Por quê |
|---|---|---|---|
| `e1` — direção de arte volta a ser especificável | **alta** | média | Assume que condicionamento geométrico se difunde para a direção de arte média. Força contrária ignorada: o custo de interface de especificar máscara e pose é exatamente o que as ferramentas de massa eliminaram para crescer. O survey de 2026 [F2] mostra que o controle fino ainda é problema aberto e fragmentado por fornecedor |
| `e2` — custo marginal da variação cai a zero | **alta** | média | Falha no primeiro teste: é **extrapolação linear** de algo que já acontece, não pressuposição de ruptura. Alta confiança aqui superestimaria o valor preditivo de uma descrição do presente |
| `e3` — pós-produção reescreve trecho em vez de corrigir plano | **alta** | média | Assume taxa de adoção sem precedente observável em pipeline de finalização, que é conservador por contrato: conformação, color e QC de entrega não absorvem "o modelo reescreveu esse pedaço" sem trilha de auditoria. E os limites operacionais publicamente conhecidos apontam para clipe curto, não para masterização |
| `e4.1` — mercado de autenticidade certificada | **média** | baixa | Ignorava três forças contrárias somadas: nenhuma implementação de câmera conforme sob o programa do C2PA até meados de 2026, ausência de carimbo de tempo na maioria das câmeras que assinam, e preservação desigual da cadeia de credenciais no upload das plataformas. Sem essas três, "certificado" não certifica |

`e5` foi o único efeito que sobreviveu com confiança **alta** — e sobreviveu por um motivo
incômodo: porque já aconteceu. Geração de imagem como modo do modelo que conversa é o GPT Image
dentro do ChatGPT desde março de 2025 [F15]. Um efeito de alta confiança que descreve o presente é
um efeito que diz pouco sobre o futuro, e o leitor deve descontá-lo por isso.

### Qual efeito é só extrapolação linear do presente

`e2` inteiro, como acima. E `e6.1` (designer de movimento entregando lógica versionada) descreve
o que já é prática em times que usam Rive há anos; o que ele projeta é apenas o alargamento do
número de times. Nenhum dos dois pressupõe ruptura — ambos pressupõem continuação.

### Qual efeito assume velocidade de adoção sem precedente comparável

`e4.1`, já rebaixado. E, com mais gravidade, `e7` (vídeo gerado em tempo real chegando a uso
comercial em 2029). O caso comparável mais próximo é o *ray tracing* em tempo real: da
demonstração convincente ao uso comercial rotineiro foram mais de dez anos, com hardware dedicado
projetado para isso no meio do caminho. Genie 3 está em 720p, 24 fps, minutos, um agente, um país,
um plano de assinatura [F13][F14]. Chamar de "2029" pode ser otimismo de três a cinco anos, e é
onde este mapa está mais frágil.

### Qual disrupção pode simplesmente não se concretizar

**D3.** É a mais provável de não acontecer como descrita. O VAR venceu o DiT num benchmark
específico — ImageNet 256×256, geração condicionada a classe [F1] — que não é geração
texto-para-imagem aberta nem, muito menos, vídeo. Que a família GPT Image seja autoregressiva
[F15] é um dado forte, mas é **um** fornecedor; os geradores de vídeo de ponta seguem difusivos, e
a arquitetura pode muito bem convergir para híbridos que ninguém vai chamar de "vitória do
autoregressivo". Há inclusive literatura recente argumentando que o VAR por escala é
matematicamente uma difusão discreta disfarçada — não abri esse artigo, então registro como pista
e não como fato (§8).

**Se D3 cair, o mapa muda menos do que parece.** `e5.1` e `e5.2` sobrevivem por outro caminho
(destilação e cache reduzem latência de difusão sem trocar arquitetura), e `e5` já é presente. O
que se perde é o argumento de que a disputa arquitetural reabriu — e com ele, boa parte do
interesse do tema para 2031. Sem D3, este vira um mapa sobre interface de controle, não sobre
tecnologia de geração.

### Que viés entrou aqui

**Viés de ferramenta.** Este mapa foi escrito por quem acha grafo de nós e máquina de estados mais
interessantes que caixa de texto. Isso enviesa D1 e D4 para cima e joga o sinal fraco 3
(raciocínio antes de gerar) para o rodapé, quando ele pode ser a via vencedora — e uma via que
torna o grafo desnecessário para quase todo mundo. Se controle por deliberação em linguagem
vencer, `e1.1` e `e5.1.1` estão errados na direção, não só no prazo.

**Viés de sobrevivente na régua de maturidade.** Recusei texto-para-vídeo por prompt como "maduro"
usando a régua da disciplina. Mas maduro em produto de consumo americano e chinês não é maduro em
produção profissional brasileira, onde o uso documentado ainda é storyboard e referência [F16].
O corte "maduro/emergente" foi feito olhando o mercado global; num recorte só Brasil, D1 e D2
seriam quase todos futuro, e o mapa inteiro deslizaria de dois a três anos para a direita.

**Viés de fonte anglófona.** Quinze das dezesseis fontes que abri são em inglês e a maioria trata
de EUA e UE. O único ancoradouro brasileiro é uma matéria de imprensa especializada [F16]. A nota
sobre o Brasil neste mapa é mais fina do que deveria, e eu sei disso.

**Viés de escolha do tema.** Foi atribuído, não escolhido — mas a zona de interesse ("Percepção e
mídia sintética") é escolha do autor, e ela empurra a leitura para "o interessante é o que a
máquina consegue fazer" em vez de "o interessante é o que as pessoas param de fazer". A dimensão
de trabalho — os 118,5 mil postos que o estudo citado pelo Animation Guild projeta como afetados
nos EUA [F12v] — aparece neste mapa como consequência de segunda ordem, quando para quem trabalha
com isso ela é a primeira.

## 8. O que a máquina errou

Erros reais desta rodada, cada um com o motivo da desconfiança.

**1. Afirmei uma versão de produto que não consegui verificar em fonte primária.** Uma busca
devolveu, com detalhe convincente, um "Runway Aleph 2.0" anunciado em 21/05/2026 junto com um
"Edit Studio", com números específicos: até 30 segundos em 1080p, edição atravessando até 10
cortes, até 5 imagens-âncora de keyframe. Cheguei a montar parte de §3 sobre isso. O que me fez
desconfiar: **todas** as páginas com esses números eram de revendedores, agregadores de modelo e
blogs de SEO — `picsart.com`, `filmora`, `vidofy.ai`, `runwayaleph.com` (que não é domínio da
Runway) —, e nenhuma era da Runway. Fui à fonte da empresa e encontrei apenas o Aleph de
**25/07/2025**, sem números de duração ou de cortes [F3]. **Removi os números e a versão 2.0 do
documento.** Se o Aleph 2.0 existe, não consegui confirmar; o que está em §3 é só o que a Runway
publica.

**2. Números de adoção do ComfyUI que não sustentei.** "Padrão de facto da indústria", "estúdios
economizam 60-80% de gasto de API": aparecem repetidos em vários guias de 2026, sempre sem fonte
primária e sempre em páginas com link de afiliado. Estão em §3 marcados como impressão de
comunidade. Um número redondo que aparece igual em cinco sites e em nenhum relatório é um número
que nasceu em um site.

**3. Cadeia de citação para os dados de emprego.** A projeção de ~118.500 postos afetados nos EUA
(21,4% do setor), 39.500 na Califórnia, 15.100 em Nova York, e os 75% de respondentes que
relataram eliminação, redução ou consolidação de vagas, vêm do estudo da **CVL Economics** — mas
eu li isso **na página do Animation Guild** [F12v], que resume o estudo, não no estudo. Não abri o
relatório original. A atribuição correta é "segundo o Animation Guild, citando a CVL Economics", e
é assim que aparece.

**4. Confundi dois documentos jurídicos ao buscar o mesmo dado.** Fui atrás da pesquisa com juízes
federais na página da Duke Law que os resultados de busca associavam a ela; abri, e a matéria
tratava das propostas de regra do juiz Paul Grimm, **sem nenhum dado de pesquisa, sem contagem de
respondentes e sem a expressão "liar's dividend"** [F12]. Os números (931 respondentes, 45% de
taxa de resposta, 15 juízes, FJC, 25/03/2026) vieram de outra fonte, que abri em seguida [F11].
Se eu tivesse citado a Duke pelos números, teria fabricado uma atribuição — o tipo de erro que
sobrevive à revisão porque a fonte é prestigiosa e o número é verdadeiro.

**5. Três fontes que eu queria não abriram, e por isso não entram.** `martech.org` sobre o risco
jurídico dos usuários do Firefly devolveu HTTP 403; a documentação de state machines do dotLottie
em `developers.lottiefiles.com` devolveu 404 no caminho que eu tinha; `lottiefiles.com/state-machines`
devolveu 403. Os fatos sobre as state machines do dotLottie que ficaram no texto (existência,
versão 2.4.0, tipos de input, runtimes Web/iOS/Android, definição sem código) vêm de resultado de
busca sobre a documentação oficial, não de página aberta por mim — e por isso **não recebem número
de fonte** em §11. O mesmo vale para o processo do Firefly, para os números de conformidade do
C2PA em câmeras e para o circuito de festivais de IA: são resultados de busca, marcados como tal
no texto.

**6. Um argumento contra D3 que eu não verifiquei.** Nos resultados de busca apareceu um artigo
("Scale-Wise VAR is Secretly Discrete Diffusion") que, se estiver certo, enfraquece bastante a
tese da ruptura arquitetural. Não abri. Está em §7 como pista declarada, e não como fato — mas
registro aqui que é a evidência mais capaz de derrubar D3 e que eu passei por ela sem ler.

**7. O que a máquina *não* errou, e vale dizer.** A checagem que a rodada anterior desta skill
falhou — prazos no YAML ultrapassando o horizonte da entrevista — foi feita campo a campo desta
vez. Nenhum `prazo` excede 2031. Onde a cadeia causal só se consolidaria depois do horizonte, a
escolha foi dizer isso em prosa no comentário da §5, e não atribuir data fora do intervalo.

## 9. Três cenários para 2031

### Provável

É 2031 e o controle ganhou, mas ninguém chama de vitória — virou o normal. Nenhuma equipe de
motion design entrega arquivo final: entrega um grafo com as variáveis expostas, e o cliente troca
praça, oferta e locutor sem pedir nada. O ofício que mais cresceu não tem nome bonito — é quem
mantém o grafo funcionando quando o fornecedor troca o modelo, o que acontece duas vezes por ano e
quebra tudo, porque o padrão aberto de sinal de controle nunca saiu. Grandes anunciantes rodam
famílias de trezentas peças; produtoras médias sumiram, espremidas entre meia dúzia de casas que
vendem sistema e uma multidão de operadores avulsos. No audiovisual longo mudou menos: set e pós
continuam separados por contrato sindical e por seguro, embora todo mundo saiba que a técnica não
exige mais isso. O vídeo perdeu a presunção de verdade na conversa cotidiana e a manteve no
tribunal, e essas duas coisas convivem sem ninguém achar estranho. Marcação de conteúdo sintético
é obrigatória na Europa, cumprida por metadado que quase ninguém verifica, e a exceção de "obra
evidentemente artística" virou a rota que todo anúncio criativo usa. No Brasil, IA está em toda
pré-produção e em quase nenhuma peça final assumida.

### Desejável

É 2031 e existe um formato comum de sinal de controle — região, pose, câmera, keyframe — com a
mesma semântica em qualquer ferramenta e em qualquer modelo. Não veio de um fornecedor: veio de um
consórcio que se formou depois que três estúdios grandes perderam trabalho junto numa troca de
modelo, e o custo compartilhado convenceu quem o argumento não convencia. A consequência não foi a
que se esperava: o efeito maior não foi de eficiência, foi de **ensino**. Como o controle é
transferível, dá para ensinar direção de mídia sintética como se ensina enquadramento — uma
habilidade que sobrevive à troca de câmera. Escolas de animação pararam de correr atrás de
software e voltaram a ensinar desenho, timing e leitura de movimento, agora como alfabetização
para dirigir a máquina. A proveniência funcionou onde importava: câmera de jornalismo assina com
carimbo de tempo conforme, plataformas preservam a cadeia, e "sem credencial" virou um dado sobre
o material — não um veredito, um dado. Para chegar aqui foi preciso que o consórcio de controle e
o de proveniência conversassem, o que quase não aconteceu, e que a exceção artística do AI Act
fosse fechada para publicidade, o que foi brigado.

### Indesejável

É 2031 e cada modelo tem a sua alça de controle, incompatível com todas as outras, e o valor
profissional de uma pessoa é o grafo que ela mantém para **um** fornecedor. Trocar de fornecedor
custa uma equipe inteira reaprendendo, então ninguém troca, então o preço sobe. O acervo
licenciado que era o diferencial jurídico virou passivo: uma decisão estabeleceu que parte dele
não era licenciada, a indenidade evaporou, e desde então nenhum anunciante grande assume mídia
sintética em campanha — usa, não assume, e o mercado inteiro opera numa zona cinza que ninguém
audita. A marcação obrigatória virou ruído: tanta coisa é marcada que a marca não informa nada, e
o público aprendeu a ignorar. Aí veio o pior: um caso de grande repercussão em que um vídeo
autêntico foi descartado sob alegação de deepfake, e a partir dali o dividendo do mentiroso saiu
da opinião pública e entrou na instituição. O sinal precoce disto — o que dá para vigiar já em
2027 — é a **primeira absolvição amplamente noticiada em que a defesa alegou deepfake sem provar
fabricação e o juízo aceitou a dúvida**. É exatamente o que a Regra 901(c) proposta tentava
impedir, e que em maio de 2026 ficou sem regra.

## 10. O experimento

### O que é

**Mesa de controle** — uma bancada em que a mesma tomada de quatro segundos é regenerada ao vivo
sob quatro regimes de controle, contra um **plano-alvo descrito por escrito antes de a máquina
ligar**. Os quatro regimes:

1. **Prompt puro** — só linguagem.
2. **Prompt + região** — máscara desenhada sobre a área que deve mudar.
3. **Keyframe propagado** — um quadro pintado à mão e propagado pela timeline (EbSynth ou
   equivalente).
4. **Máquina de estados** — a mesma peça em Rive, em que o "movimento" é um estado que responde a
   um input, e não uma sequência gerada.

Duas medidas, e nada mais: **quantas tentativas até bater o plano-alvo** (com o alvo julgado por
um terceiro que não operou), e **quanta variância entre três execuções da mesma entrada**.

### Que pergunta sobre o futuro ele ajuda a responder

A pergunta central deste mapa: *controle fino é ganho real ou é a mesma loteria com mais botões?*
Se a contagem de tentativas cair de forma clara do regime 1 para o 3, D1 está certo e `e1` acontece
como escrito. Se não cair — se prompt puro empatar com máscara em número de tentativas — então o
que muda com o controle é a **sensação** de dirigir, e não a direção; e boa parte da roda desaba,
porque um ofício não se organiza em torno de uma alça que não muda o resultado.

A segunda medida é a que quase ninguém faz e é a mais decisiva para produção: **reprodutibilidade**.
Produção não precisa do melhor resultado; precisa do mesmo resultado amanhã. Se o regime 4 for o
único com variância zero, o experimento mostra que a fronteira entre mídia sintética e software
não é retórica.

### Que tecnologia emergente ele usa, e por que não dá com tecnologia madura

Usa condicionamento por região e edição in-context (Runway Aleph, FLUX.1 Kontext ou equivalente
aberto em ComfyUI), propagação de keyframe (EbSynth) e máquina de estados (Rive). Com tecnologia
madura o experimento não existe: **o regime 1 é a tecnologia madura**, e ele é o grupo de
controle. A comparação só faz sentido porque há três regimes emergentes para contrastar contra
ele. Um experimento equivalente feito só com edição não-linear e motion graphics à mão mediria a
habilidade do operador, não a alça da ferramenta.

### O que a turma vai fazer quando testar isso em sala

A turma **escreve o plano-alvo antes** — em uma frase, sem ambiguidade, projetada na parede —, e
depois se divide nos quatro regimes, com um grupo de julgamento que não opera nenhum. Cada grupo
conta as próprias tentativas em voz alta; o julgamento é público e imediato ("bateu / não bateu").
Ao final, cada grupo roda três vezes a **mesma** entrada final e a turma olha as três saídas lado
a lado. A discussão que interessa não é qual ficou mais bonito: é o que cada grupo descobriu que
**não conseguia dizer** para a máquina.

### O que seria um resultado que me faria mudar de ideia

Três resultados, cada um derrubando uma parte diferente do mapa:

- **Prompt puro empata com máscara na contagem de tentativas.** Derruba D1 e todo o ramo `e1`.
  O controle geométrico seria ergonomia, não poder.
- **A variância entre execuções é alta nos quatro regimes, inclusive no keyframe propagado.**
  Derruba a tese de "instrumento" inteira. Sem reprodutibilidade não há produção, e o tema volta a
  ser sobre ferramenta de ideação.
- **A turma descreve o regime 4 como "não é vídeo, é outra coisa" e recusa a comparação.** Este
  seria o resultado mais interessante, e derrubaria D4 pelo lado que este mapa não previu: se
  máquina de estados não é sentida como mídia pelas pessoas que a operam, a fronteira entre vídeo
  e interface não está se dissolvendo — está sendo redesenhada em outro lugar, e o mapa está
  olhando para o lado errado.

## 11. Fontes

Só o que eu abri. As afirmações do documento que vêm de resultado de busca sem página aberta estão
marcadas no próprio texto e listadas em §8 — **não recebem número aqui**.

1. **[F1]** `https://arxiv.org/abs/2404.02905` — *Visual Autoregressive Modeling: Scalable Image
   Generation via Next-Scale Prediction*. Sustenta: a definição de next-scale prediction, FID
   18,65→1,73, IS 80,4→350,2, ~20× de ganho de inferência, coeficiente de escala ≈ −0,998,
   generalização zero-shot. **Confiabilidade alta** — artigo primário, melhor artigo do NeurIPS
   2024. Ressalva: os números são de ImageNet 256×256 condicionado a classe, não de
   texto-para-imagem aberta.
2. **[F2]** `https://arxiv.org/abs/2507.16869` — *Controllable Video Generation: A Survey*
   (22/07/2025; v3 em 19/01/2026). Sustenta: que prompt de texto é insuficiente para requisito
   fino, a taxonomia condição única / multicondição / controle universal, e a fragmentação do
   campo. **Confiabilidade alta** para o mapeamento do campo; survey, não resultado experimental.
3. **[F3]** `https://runway.com/research/introducing-runway-aleph` — página de pesquisa da própria
   Runway. Sustenta: Aleph como *in-context video model*, data de 25/07/2025, as operações de
   edição, disponibilidade para planos pagos. **Confiabilidade alta para o fato de existir e para
   as datas; é material do fornecedor sobre o próprio produto** — as capacidades são alegação
   comercial, não medição independente. Não traz números de duração, resolução ou cortes.
4. **[F4]** `https://bfl.ai/blog/flux-1-kontext` — anúncio da Black Forest Labs. Sustenta: as três
   variantes (pro, max, dev de 12B com pesos abertos), edição local, consistência de personagem,
   iteração, e as alegações de latência (até 8× mais rápido, "uma ordem de magnitude"). **Mesma
   ressalva** — fornecedor sobre o próprio produto.
5. **[F5]** `https://rive.app/docs/runtimes/state-machines` — documentação do Rive. Sustenta: o que
   é a State Machine, os três tipos de input (boolean, number, trigger), e os sete runtimes.
   **Confiabilidade alta** — é documentação técnica verificável, não marketing.
6. **[F6]** `https://rive.app/blog/rive-as-a-lottie-alternative` — blog do Rive. Sustenta: 240 KB
   em Lottie contra 16 KB em Rive, 10-15× típico, Duolingo com 15×, lista de clientes.
   **Confiabilidade baixa como dado** — é comparação de fornecedor contra o concorrente, no
   material de vendas dele. Citado no texto explicitamente como tal.
7. **[F8]** `https://c2pa.org/conformance/` — programa de conformidade do C2PA. Sustenta: a
   existência do programa, a especificação na série 2.x (2.3), a lista pública de produtos
   conformes. **Confiabilidade alta** — fonte da própria organização. **Não** sustenta o número de
   entidades conformes, que a página não informa.
8. **[F9]** `https://ebsynth.com/` — site do EbSynth. Sustenta: síntese de textura e não IA
   generativa, propagação de keyframe pintado, plano gratuito 720p sem limite de tempo, planos a
   US$ 20 e US$ 200/mês, autoria de Šárka Sochorová e Ondřej Jamriška (Secret Weapons).
   **Confiabilidade alta** para o que o produto é e quanto custa. Não informa data de lançamento.
9. **[F10]** `https://artificialintelligenceact.eu/transparency-rules-article-50/` — guia do
   Artigo 50. Sustenta: aplicação em 02/08/2026, marcação legível por máquina para conteúdo
   sintético, divulgação para deepfake, prazo de 02/12/2026 para generativos já no mercado, a
   exceção artística/criativa/satírica/ficcional, o rótulo padronizado proposto.
   **Confiabilidade média-alta** — portal especializado que reproduz o texto legal, não é o
   Jornal Oficial. Para uso jurídico, ir ao Regulamento. Não confirmou os valores de multa.
10. **[F11]** `https://www.esquiresolutions.com/federal-judges-set-bar-for-deepfake-evidence-challenges/`
    — sobre a pesquisa do Federal Judicial Center. Sustenta: 931 juízes respondentes, 45% de taxa
    de resposta, 15 juízes (~2%) com contestação de deepfake, divulgação em 25/03/2026, encomenda
    pelo Advisory Committee on Evidence Rules, e a proposta de Regra 901(c) que põe o ônus no
    contestador. **Confiabilidade média** — publicação setorial jurídica reportando fonte
    primária. Os números são específicos e atribuídos ao FJC, o que é bom sinal; eu não abri o
    relatório do FJC.
11. **[F12]** `https://law.duke.edu/news/how-keep-deepfakes-out-court` (12/01/2026) — Duke Law.
    Sustenta: as propostas de regra probatória do juiz Paul W. Grimm e a preocupação institucional
    com conteúdo gerado por IA nos tribunais. **Confiabilidade alta** — faculdade de direito.
    **Explicitamente NÃO sustenta** os números da pesquisa nem o termo "liar's dividend": abri e
    conferi que não estão lá. Ver §8, item 4.
12. **[F12v]** `https://animationguild.org/ai-and-animation/` — Animation Guild (IATSE Local 839).
    Sustenta: o AI Task Force de abril/2023 e, **citando o estudo da CVL Economics**, os números
    de 75% de respondentes relatando eliminação/redução/consolidação de vagas, ~118.500 postos
    (21,4%) até 2026 nos EUA, 39.500 na Califórnia, 15.100 em Nova York, 90% prevendo mais uso e
    26% de força de trabalho preparada. **Confiabilidade média** — é parte interessada (sindicato)
    resumindo estudo de terceiro; eu não abri o estudo. A página **não** detalha as conquistas de
    linguagem contratual sobre IA, ao contrário do que resultados de busca sugeriam.
13. **[F13]** `https://deepmind.google/models/genie/` — Google DeepMind. Sustenta: Genie 3 como
    modelo de mundo em tempo real, 720p, 20-24 fps, poucos minutos de interação, memória de ~1
    minuto, e as cinco limitações declaradas (espaço de ação, múltiplos agentes, lugares reais,
    texto legível, duração). **Confiabilidade alta** — é o fabricante declarando os próprios
    limites, que é o tipo de alegação de fornecedor em que se pode confiar.
14. **[F14]** `https://9to5google.com/2026/01/29/google-project-genie/` (29/01/2026) — imprensa de
    tecnologia. Sustenta: abertura do Project Genie em janeiro de 2026, restrição a assinantes
    Google AI Ultra nos EUA maiores de 18 anos, sessões de até 60 segundos. **Confiabilidade
    média** — veículo especializado com bom histórico em produtos Google, reportando anúncio
    oficial.
15. **[F15]** `https://en.wikipedia.org/wiki/GPT_Image` — Wikipédia. Sustenta: a cronologia da
    família (1 em 25/03/2025; 1 Mini em 06/10/2025; 1.5 em 16/12/2025; 2 em abr/2026 com
    raciocínio; 2.5 em 08/09/2026) e a arquitetura autoregressiva, ao contrário de DALL-E 2/3.
    **Confiabilidade média** — enciclopédia colaborativa. É a fonte mais fraca da lista para datas
    tão recentes (a de 08/09/2026 tem quatro dias). Usada porque o fato central — a família ser
    autoregressiva — é público e consistente com o que a OpenAI comunica; as datas devem ser
    reconferidas antes de qualquer uso que dependa delas.
16. **[F16]** `https://www.meioemensagem.com.br/midia/ia-generativa-na-producao-de-filmes-e-series-no-brasil`
    — Meio & Mensagem. Sustenta: o uso da IA na O2 Filmes (storyboard, modelo próprio para análise
    de roteiro e orçamentação, experimentos de troca de rosto e voz), a produção da Endemol Shine
    Brasil para a Netflix espanhola, e as projeções de Paulo Barcellos. **Confiabilidade média** —
    imprensa especializada em comunicação, baseada em declaração de executivos: bom para saber o
    que as empresas dizem que fazem, fraco para dimensionar mercado. A matéria não tem data
    visível no que extraí, e isso é uma limitação real para um tema que muda a cada trimestre.

## 12. Anexo — o levantamento bruto

### 12.1 A entrevista da Etapa 1, na íntegra

A skill proíbe gerar qualquer conteúdo antes da entrevista, e proíbe assumir padrão em silêncio.
Esta rodada é automatizada e não teve interlocutor humano ao vivo; as respostas foram fornecidas
por escrito junto com a tarefa, e ficam aqui literais, com a marcação do que foi respondido e do
que teve de ser assumido.

| # | Pergunta da Etapa 1 | Resposta recebida |
|---|---|---|
| 1 | Horizonte temporal | **2031** |
| 2 | Público-alvo | **Quem projeta mídia e interação** |
| 3 | Recorte geográfico | **Global, com uma nota sobre o Brasil** |
| 4 | Descartes explícitos | **O que já é comum em produto de massa (a régua da disciplina). Nenhuma outra exclusão** |
| 5 | Viés desejado | **Neutro** |

Respostas adicionais fornecidas fora do roteiro das cinco perguntas, e que também condicionaram o
trabalho: disrupção suspeita — *nenhuma, descubra*; ideias óbvias a excluir — *as que servem para
qualquer tema*; o que faria mudar de ideia — *evidência de que a adoção já passou da maioria
inicial (Rogers) ou de que a tecnologia não rompe nada*; profundidade — *três ordens*; modo — *a
partir de uma inovação/tema, não de um setor*; zona de interesse — *Percepção e mídia sintética*.

**O que teve de ser assumido, e está declarado:** o recorte "global com nota sobre o Brasil" não
especifica quanto peso o Brasil deve ter. Assumi **uma subseção em §3 e uma linha de efeito na
roda** (`e2.2.1`), sem construir um ramo brasileiro paralelo. O viés "neutro" foi interpretado como
obrigação de registrar as evidências que contrariam a tese do mapa com o mesmo destaque das que a
apoiam — daí `e4.2` e o sinal fraco 2 existirem, ambos contra a narrativa fácil do tema.

**Nota sobre o critério de mudança de ideia.** A resposta 5-extra pede que eu abandone uma
disrupção se a adoção já passou da maioria inicial de Rogers. Não encontrei dado de difusão
confiável para nenhuma das quatro disrupções — não há survey de penetração de "condicionamento
espacial" ou de "edição in-context" em estúdios. Apliquei o critério por proxy: *está em produto
de assinatura de consumidor com uso de massa?* Foi por esse proxy que texto-para-vídeo e geração de
imagem por prompt caíram, e é um proxy pior que o pedido. Registro a substituição.

### 12.2 Todas as buscas feitas, e o que cada uma rendeu

| Busca | O que rendeu | Destino |
|---|---|---|
| `controllable video generation 2026 Runway Aleph in-context video editing` | Aleph 2.0 com números detalhados, tudo em revendedor/SEO | **Descartado** — ver §8 item 1 |
| `visual autoregressive modeling VAR next-scale prediction 2026 diffusion alternative` | Artigo VAR e derivados de 2026 (FVAR, DiverseVAR, LSRS, "Scale-Wise VAR is Secretly Discrete Diffusion") | [F1]; o "Secretly Discrete Diffusion" virou pista não verificada em §7 e §8 item 6 |
| `C2PA Content Credentials adoption 2026 cameras platforms provenance` | Leica M11-P, Nikon Z9/Z8, Samsung S25, Pixel 10; ausência de conformidade em câmeras; Google levando verificação a Search/Chrome | Só o que a página do C2PA confirma [F8]; o resto marcado como busca |
| `Rive state machine animation runtime 2026 interactive graphics` | Documentação e comparativos | [F5] |
| `EU AI Act Article 50 transparency deepfake labelling August 2026 obligations` | Aplicação 02/08/2026, prazo 02/12/2026, multas de até €15M ou 3%, Código de Prática | [F10]; as multas não confirmaram na página aberta e ficaram de fora |
| `FLUX.1 Kontext in-context image editing Black Forest Labs 2026` | Anúncio da BFL e paper arXiv 2506.15742 | [F4]; o paper não foi aberto |
| `real-time interactive generative video world model 2026 Genie Odyssey playable` | Genie 3, Project Genie, Odyssey (Agora-1, Starchild-1), Oasis, GameNGen, Matrix-Game | [F13][F14]; Odyssey **não** entrou por não ter sido verificado |
| `animation industry jobs AI 2026 advertising production studio impact data` | Números da CVL Economics; contra-argumento de que cargos expostos cresceram | [F12v]; o contra-argumento ficou registrado aqui, sem fonte aberta |
| `Brasil PL 2338/2023 marco legal IA 2026 rotulagem conteúdo sintético deepfake` | Aprovado no Senado em 10/12/2024, em tramitação na Câmara em 2026, apensados sobre marcação e proveniência | **Não citado no corpo** — não abri a tramitação. Registrado aqui: é a peça que falta para uma nota séria sobre o Brasil |
| `deepfake video evidence courts 2026 authentication rules judges liar's dividend` | Pesquisa do FJC, decisão do tribunal de NY de fev/2026, Regras 707 e 901(c) não avançadas em mai/2026 | [F11][F12]; a decisão de NY não foi aberta e não entrou |
| `ComfyUI 2026 nodes graph adoption professional pipeline studios workflow standard` | "Padrão de facto", economia de 60-80%, DAG, expansão para vídeo/áudio/3D | Só a descrição arquitetural entrou; números descartados (§8 item 2) |
| `Kling motion brush elements Veo 3 Sora 2 camera control keyframe 2026 director controls` | Motion brush, Director Mode, Kling 3.0 / Sora 2 Pro / Veo 3.1 em mar/2026, Runway Gen-4.5 | **Quase tudo descartado** — nenhuma fonte primária, todas comparativos de afiliado. Só a *categoria* "motion brush / controle de câmera existe nos produtos" sobreviveu, sem atribuir capacidade a modelo específico |
| `AI generated feature film festival 2026 Cannes Sundance Venice solo filmmaker` | Circuito paralelo (AI Film Awards Veneza 03/09/2026, Reply AI Film Festival com €8k/€5k/€2k, Neu Wave LA, Token Chicago, Bali) e **nenhum** longa de IA em seleção oficial de primeira linha | Virou o **sinal fraco 4** e o **wildcard 1**, com a ausência tratada como o dado |
| `Adobe Firefly commercially safe training data lawsuit 2026 copyright` | Ação de autores (Preston/Nazemian, dez/2025, Books3) e derivativa de acionistas (16/06/2026, N.D. Cal., SlimPajama) | Citado em §3 como resultado de busca; `martech.org` deu 403 |
| `arXiv survey controllable video generation 2026 control signals taxonomy` | O survey de referência | [F2] |
| `autoregressive image generation production model 2026 shipped GPT-image` | Cronologia da família GPT Image | [F15] |
| `Lottie dotLottie Rive adoption 2026 interactive animation market share` | dotLottie state machines na 2.4.0; Duolingo 15×; dotLottie 40-70% menor que JSON; `.riv` 50-80% menor | [F6] e o **sinal fraco 1**; a documentação do dotLottie deu 404/403 |
| `dotLottie state machines LottieFiles documentation interactivity release` | Confirmação da 2.4.0, inputs numérico/string/booleano/evento, runtimes Web/iOS/Android, definição sem código | Usado no corpo **sem número de fonte**, por não ter página aberta |

### 12.3 Efeitos gerados e cortados

Cortados por serem óbvios, genéricos ou aplicáveis a qualquer tema — o critério de exclusão pedido
na entrevista:

- "Cai o custo de produção de conteúdo." Serve para qualquer tema desta disciplina. Substituído
  por `e2`, que diz algo específico: cai o custo **da variação**, não o da primeira versão — e é
  essa assimetria que muda o formato do trabalho.
- "Aumenta a desinformação." Genérico e não falseável. Substituído por `e4` + `e4.2`, que separam
  esfera pública de instituição e produzem previsões que podem dar errado.
- "Surgem novas profissões." Vazio. Substituído por `e1.1`, que nomeia qual: manutenção do grafo de
  condicionamento — e diz o que a torna frágil (a falta de padrão aberto).
- "As pessoas vão desconfiar de tudo que veem." Não é efeito, é clichê. E é parcialmente
  contrariado pelos dados de tribunal [F11].
- "A IA vai substituir os animadores." Formulação que impede pensar. O ramo `e1.1` + `e1.1.1`
  tenta a formulação útil: o que a formação certifica quando a execução deixa de ser o produto.

Cortados por serem sobre outro tema, na fronteira declarada pela disciplina:

- Tudo sobre **história gerada** e coautoria narrativa → tema 8.
- Tudo sobre **voz, dublagem e trilha sintética** → tema 13, embora a matéria brasileira [F16] fale
  mais de dublagem que de imagem, o que foi tentador.
- **Design procedural sem IA** (regra pura) → tema 14. O Cavalry e o Graphite ficaram só como
  menção, não como disrupção.

Cortado por não caber em três níveis, e registrado por honestidade: um ramo inteiro sobre **quem
paga pela computação**. Se controle fino significa dezenas de tentativas por plano, o custo de
inferência por peça sobe justamente quando o custo de mão de obra cai, e há um cenário em que o
gargalo da produção audiovisual migra de talento para GPU alugada — com a consequência de que o
estúdio de uma pessoa é possível tecnicamente e inviável financeiramente. Não achei dado de custo
por segundo gerado que eu confiasse, e por isso o ramo não entrou no YAML.

### 12.4 Caminhos abandonados

**Tentei montar um Quadrante Mágico dos fornecedores de vídeo controlável e desisti.** O motivo
está no `ESTUDO.md` desta skill: o Quadrante pressupõe uma categoria de mercado já definida o
bastante para ter critério de avaliação. "Mídia sintética controlável" não tem — Runway, Rive,
ComfyUI e Black Forest Labs não competem entre si de forma comparável, e forçar os quatro num
plano cartesiano produziria uma imagem bonita e falsa. Registro a desistência porque a skill
menciona o método na descrição, e não usá-lo é uma decisão, não um esquecimento.

**Tentei posicionar as quatro disrupções no Hype Cycle e usei com ressalva.** Pela crítica de
validação empírica registrada no `ESTUDO.md` (Dedehayir & Steinert, 2016), o Hype Cycle é melhor
lido como retrato da narrativa de mercado do que como destino técnico. Se ele valesse: D2 estaria
no pico de expectativas infladas (é do que todo mundo fala), D1 subindo a rampa de esclarecimento
(quem usa sabe que funciona e sabe o preço), D3 no gatilho de inovação, e D4 no platô de
produtividade — o que é curioso, porque D4 é a que este mapa considera mais estrutural e é a que
menos gera hype. Não coloquei isso no corpo por não ter fundamento verificável; fica aqui como
leitura, não como achado.

**Usei o Three Horizons como lente de organização e não como conteúdo.** H1 = edição não-linear e
motion graphics à mão, ainda dominante e adequado; H2 = as quatro disrupções, das quais D2 é a mais
candidata a ser **absorvida** pelo H1 (edição in-context vira um botão dentro do Premiere e nada
estrutural muda) e D4 a mais candidata a virar H3 genuíno; H3 = mídia cuja superfície é gerada e
cujo comportamento é programa. Essa leitura é o que organizou a ordem das disrupções em §4.

**Não consegui responder a uma pergunta que o tema levanta e que eu queria ter respondido:** se um
estúdio de uma pessoa produz o que exigia trinta, para onde vão as outras vinte e nove. Os únicos
números que encontrei [F12v] são projeção de consultoria resumida por sindicato, com contra-dado
na mesma direção oposta (cargos expostos crescendo no mesmo período das perdas). Não dá para
sustentar nada. É a maior lacuna deste mapa, e é uma lacuna sobre pessoas, não sobre tecnologia.

### 12.5 Nota de método sobre esta rodada

Rodada executada sem interlocutor humano ao vivo, com as respostas de entrevista fornecidas por
escrito na tarefa. Dezoito buscas na web e dezenove tentativas de abrir página, das quais dezesseis
retornaram conteúdo e três falharam (403, 404, 403). Nenhuma fonte foi citada sem ter sido aberta.
Onde a informação vem de resultado de busca sem página aberta, o texto diz isso e a §11 não atribui
número. As quatro rebaixas de confiança da Etapa 4 estão na tabela de §7 com o valor original ao
lado, conforme a skill exige, e a §8 lista sete itens, dos quais seis são erros ou limitações
reais desta rodada.
