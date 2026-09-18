---
tema: "Mídia sintética controlável: vídeo e imagem"
slug: midia-sintetica-controlavel-video-e-imagem
autor_login: mjbo
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-17
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 8
efeitos_ordem_2: 15
efeitos_ordem_3: 21
tecnologias_citadas: [Runway Aleph, FLUX.1 Kontext, ComfyUI, Wan 2.2, Wan 2.2 Fun Control, ControlNet, VAR (Visual Autoregressive Modeling), Rive, Cavalry, EbSynth, Remotion, Adobe Firefly, Kling 3.0, SynthID, C2PA Content Credentials, LoRA, Lottie]
fontes: 18
confianca: media
experimento: "Banco de direção — a mesma tomada por quatro rotas de controle"
skill_usada: futurizacao-mjbo
publico_ok: false
---

## 1. Resumo

Gerar vídeo por prompt virou rotina; o que está em disputa agora é **dirigir** o que foi
gerado. Quatro rupturas sustentam este mapa: a edição de vídeo por instrução em contexto, que
transforma material já filmado em matéria maleável (Runway Aleph, FLUX.1 Kontext); a pilha
aberta e local de geração como grafo versionável (ComfyUI com pesos Apache 2.0 do Wan 2.2), que
tira o estúdio da dependência de crédito por render; a arquitetura autorregressiva visual (VAR,
melhor artigo do NeurIPS 2024), que promete geração interrompível por escala e ameaça o
ecossistema de controle construído sobre difusão; e — ainda como aposta, não como rompimento
consumado — a animação publicada como máquina de estados que responde a evento (Rive), que
dissolve a fronteira entre vídeo e interface. Os efeitos derivados vão da extinção do posto de
entrada em VFX ao deslocamento da prova em vídeo para um mercado de autenticidade certificada,
num cenário em que a regulação europeia de transparência já vale desde 2 de agosto de 2026 e a
brasileira ainda não saiu da Câmara. O mapa aposta no controle como eixo, mas declara onde essa
aposta pode estar errada: se a difusão continuar vencendo, um quarto dos efeitos cai junto.

## 2. O tema

O tema é a **imagem em movimento como mídia sintética dirigível** — não a geração em si, mas o
conjunto de mecanismos pelos quais alguém impõe intenção a um sistema generativo: região do
quadro, quadro-chave propagado, sinal de controle (profundidade, pose, borda), grafo de nós,
regra procedural, máquina de estados. A fronteira com os vizinhos é explícita: a *história*
gerada não entra aqui, o *som* e a *voz* não entram aqui, e design procedural sem IA é outro
objeto.

Onde encosta em mídia e interação: em dois pontos, e eles puxam em direções opostas. No primeiro,
o objeto continua sendo um vídeo — uma peça linear, assistida — e o que muda é quem a produz e
com quanta gente. No segundo, o objeto deixa de ser vídeo: uma animação que responde a evento,
publicada como programa e não como arquivo, é um artefato de interface que só por herança
chamamos de "vídeo". A tensão entre esses dois pontos é o que justifica um mapa de futuro em vez
de um levantamento de estado da arte. Um levantamento diria quais ferramentas existem; ele não
consegue dizer o que acontece com a categoria "vídeo" quando o entregável deixa de ser um
arquivo com duração fixa.

O segundo motivo para mapear o futuro em vez de inventariar o presente: o campo tem uma disputa
arquitetural aberta. Desde 2022 quase tudo que se construiu de controle fino — ControlNet, LoRA,
adaptadores, agendadores de ruído, os milhares de workflows públicos de ComfyUI — pressupõe
difusão. Se a aposta autorregressiva vingar, não é uma ferramenta que fica obsoleta: é uma
camada inteira de conhecimento acumulado. Inventário não captura isso; roda dos futuros captura.

## 3. Onde isso está hoje

### O que já existe e funciona em produção

**Edição de vídeo por instrução, sobre material já filmado.** O Runway Aleph, lançado em 25 de
julho de 2025, é descrito pela própria empresa como um modelo de vídeo *in-context* que adiciona
e remove objetos, transforma objetos existentes, gera ângulos diferentes de uma cena já filmada
e altera estilo e iluminação — disponível a todos os planos pagos da plataforma [1]. No lado da
imagem estática, o FLUX.1 Kontext da Black Forest Labs (29 de maio de 2025) faz geração e edição
no mesmo modelo, com prompt que mistura texto e imagem: consistência de personagem entre cenas,
edição local dirigida sem afetar o resto do quadro, referência de estilo e iterações encadeadas
com latência baixa; `pro` e `max` via API, e um `dev` de 12B com pesos abertos [2].

**Pipeline de geração como grafo, rodando local.** O ComfyUI se descreve como mecanismo modular
de criação para profissionais visuais, com grafo visual de nós para fluxos de imagem, vídeo,
áudio, 3D e texto, subgrafos reutilizáveis, modo App para expor fluxos complexos como UI simples
e integração por API em pipelines de produção; 133,7 mil estrelas e 15,8 mil forks no GitHub, com
releases semanais desde 2024 e uma empresa (Comfy-Org) por trás [3]. Ele suporta nativamente
modelos de vídeo com pesos abertos — Wan 2.1/2.2, LTX-Video, HunyuanVideo, CogVideoX [3].

**Modelos de vídeo com pesos realmente abertos.** O Wan 2.2 (28 de julho de 2025) é licenciado
sob Apache 2.0, com arquitetura Mixture-of-Experts e variantes especializadas: T2V e I2V de 27B
(14B ativos), um TI2V de 5B que roda em 24 GB de VRAM (RTX 4090), um S2V de 14B com geração
dirigida por pose, e um Animate-14B com modos de mímica de movimento e de substituição
(19 de setembro de 2025) [4]. O repositório declara não reivindicar direitos sobre o conteúdo
gerado [4]. No ComfyUI há workflows oficiais para os quatro casos, incluindo o **FLF2V** —
primeiro-e-último-quadro, em que o usuário define os extremos e o modelo preenche a transição —
e o 5B roda em 8 GB de VRAM com offloading nativo [5].

**Propagação de quadro-chave sem IA generativa.** O EbSynth continua sendo a saída mais
controlável para rotoscopia estilizada: o usuário pinta um único quadro e o programa propaga a
alteração pelo vídeo usando síntese de textura guiada por fluxo óptico — explicitamente *não* é
IA generativa; há apenas uma função opcional de IA para gerar os quadros-chave. Gratuito até
720p, Pro a US$ 20/mês, Studio a US$ 200/mês [6].

**Motion design procedural.** O Cavalry é gratuito para indivíduos (Mac e Windows) e organiza a
animação em *behaviors*, geradores, duplicadores e falloffs, além de importar planilha para
animar em escala: ajusta-se um valor e sistemas inteiros respondem, em vez de animar elemento por
elemento [7]. Vídeo programático também é produção real: o Remotion faz vídeo em React, com
parametrização por dados, render em lote de milhões de peças na infraestrutura do próprio
cliente, e player embutível; licença livre até três pessoas, US$ 100/mês para empresas, 5 milhões
de instalações mensais e 59 mil estrelas [8].

**Animação como máquina de estados.** No Rive, cada artboard tem ao menos uma state machine, que
conecta animações e define a lógica das transições — "um jeito visual de conectar animações e
definir a lógica que dirige as transições" [9]. O mesmo arquivo `.riv` roda em Web, React, React
Native, iOS, Android, Flutter, Unity, Unreal, C++ e C#, e os runtimes novos costumam ler assets
antigos [10].

**Controle de câmera e multiplano em produto fechado.** No Kling, o controle de câmera (push,
pull, pan, tilt, tracking, orbit) é um recurso de produto documentado, com planejamento tipo
storyboard [11].

### O que existe mas ainda não está resolvido

**A hegemonia arquitetural.** O VAR — *Visual Autoregressive Modeling: Scalable Image Generation
via Next-Scale Prediction* — redefine a geração autorregressiva de imagem como previsão da
*próxima escala* (grosso ao fino), e não do próximo token em varredura. Na versão final de 10 de
junho de 2024, reporta FID de 18,65 para 1,73, IS de 80,4 para 350,2 e inferência cerca de 20×
mais rápida, superando o Diffusion Transformer em qualidade, velocidade, eficiência de dados e
escalabilidade, com leis de potência de correlação linear perto de −0,998 [12]. Foi um dos
melhores artigos do NeurIPS 2024. O que **não** está resolvido: a pilha de produção continua
majoritariamente de difusão, e nenhuma das ferramentas de controle listadas acima foi reescrita
para a arquitetura nova.

**O controle como problema em aberto na própria literatura.** O survey *Controllable Video
Generation* (submetido em 22/07/2025, revisado em 19/01/2026) organiza o campo em geração de
condição única, de múltiplas condições e universal, com sinais de controle que incluem movimento
de câmera, mapas de profundidade e pose humana — e parte exatamente do diagnóstico de que
"prompts de texto sozinhos são frequentemente insuficientes para expressar requisitos complexos,
multimodais e de granularidade fina" [13]. Isto é: o campo acadêmico nomeia o controle como
lacuna, não como recurso resolvido. Na prática aberta, o Wan 2.2 Fun Control é a resposta
disponível: variante com ControlNet que dirige o movimento a partir de vídeo ou sequência de
referência, com sinais de borda Canny, profundidade e OpenPose [14].

### A camada jurídica, que já é presente e não futuro

O Artigo 50 do AI Act europeu **está em vigor desde 2 de agosto de 2026**: provedores de sistemas
que geram áudio, imagem, vídeo ou texto devem garantir marcação em formato legível por máquina e
detectável como artificialmente gerado ou manipulado, de forma eficaz, interoperável e robusta;
quem implanta sistemas que geram deepfakes deve divulgar que o conteúdo foi artificialmente
criado; obras evidentemente artísticas, criativas, satíricas ou ficcionais têm a obrigação
reduzida a uma divulgação que não prejudique a fruição da obra [15]. As ferramentas existem em
dois sabores incompatíveis por natureza: credencial assinada anexada ao arquivo (C2PA Content
Credentials, padrão técnico para certificar origem e histórico da mídia, na versão 2.1 com 2.2,
2.3 e 2.4 já publicadas [16]) e marca d'água estatística embutida no sinal (SynthID, do Google
DeepMind: marca imperceptível inserida no momento da criação, projetada para resistir a recorte,
filtros e compressão com perda, com um SynthID Detector em acesso restrito a jornalistas e
profissionais de mídia por lista de espera [17]).

No Brasil, o marco legal ainda não saiu: o PL 2338/2023 foi aprovado no Plenário do Senado em
dezembro de 2024 e **remetido à Câmara dos Deputados em 17 de março de 2025**, onde continua
aguardando votação [18]. O descompasso importa para quem produz daqui: uma peça brasileira
distribuída na Europa já responde ao Artigo 50; a mesma peça distribuída no Brasil não responde a
nada equivalente.

### Quem está construindo

Fechados e comerciais: Runway (Aleph), Google DeepMind (Veo, SynthID), Kling, Luma, Adobe
(Firefly). Abertos: Black Forest Labs (FLUX, com o `dev` de pesos abertos), Wan-Video (Wan 2.2,
Apache 2.0), Comfy-Org (ComfyUI). Fora da geração, no controle: Rive (state machine multiplataforma),
Scene Group/Canva (Cavalry), Secret Weapons (EbSynth), Remotion. Na camada de proveniência: a
coalizão C2PA e o Google DeepMind, por caminhos técnicos diferentes.

### O contencioso que atravessa tudo

O Adobe Firefly foi posicionado como treinado em Adobe Stock (cerca de 300 milhões de imagens),
Creative Commons, Wikimedia e Flickr Commons e domínio público, com indenização a clientes — e a
posição racha quando se verifica que o treino incluiu imagens vindas de concorrentes via Adobe
Stock [19]. Isso não é detalhe de uma empresa: é o eixo de preço do segmento profissional. Quem
vende "geração" compete com pesos abertos gratuitos; quem vende "garantia jurídica" compete com
o próprio histórico.

## 4. As disrupções-raiz

Cada candidato abaixo passou pelo teste de três perguntas descrito na skill. Os reprovados estão
nomeados na Seção 12, com o motivo.

### D1 — Edição de vídeo por instrução em contexto: o material filmado vira maleável

**O que rompe.** Antes, alterar o conteúdo de um plano já filmado exigia rotoscopia quadro a
quadro, reconstrução 3D, limpeza de placa ou refilmagem. Remover um objeto, mudar a iluminação
ou gerar um ângulo que não foi filmado passa a ser uma instrução sobre o material existente [1].
A prática invalidada tem nome e endereço: o posto de entrada da indústria de VFX — rotoscopia,
*paint-out*, limpeza de *plate* — que é simultaneamente o degrau de formação e a base de
contratos de estúdios terceirizados.

**Por que agora.** Não é "o modelo melhorou". O que mudou é a natureza da entrada: modelos de
vídeo *in-context* aceitam o vídeo existente como parte do prompt, e não apenas texto — o Aleph
é anunciado exatamente assim, em julho de 2025 [1], e o Kontext faz o equivalente em imagem desde
maio de 2025 [2]. Há cinco anos o estado da arte era gerar clipes curtos do zero; a categoria
"editar por instrução" não existia como produto.

**O que falta.** Consistência temporal longa (o Aleph opera em janelas curtas), controle
determinístico — a mesma instrução duas vezes não dá o mesmo resultado, o que é incompatível com
aprovação de cliente e com versionamento — e resolução de entrega em produção cinematográfica.

### D2 — A pilha aberta e local: geração controlável vira artefato versionável do estúdio

**O que rompe.** Um modelo de vídeo competente sob Apache 2.0 [4], rodando num grafo que o
estúdio versiona, audita e reexecuta [3], rompe duas coisas ao mesmo tempo: o modelo de negócio
de cobrar por crédito de geração, e o impedimento contratual que mantinha o segmento profissional
fora da IA generativa — material sob sigilo (campanha não lançada, rosto de talento, roteiro)
não podia ser enviado ao servidor de terceiro. Com pesos abertos e 24 GB de VRAM [4], podia.

**Por que agora.** Três coisas mudaram juntas, e nenhuma delas é "melhorou": licença
genuinamente permissiva num modelo de vídeo de ponta (Apache 2.0, com renúncia explícita a
direitos sobre o gerado [4]); um modelo de 5B que cabe em placa de consumidor, e até em 8 GB com
offloading [5]; e uma camada de orquestração madura o bastante para virar infraestrutura de
produção, com API local e modo App [3]. Em 2021 não existia nenhuma das três.

**O que falta.** O salto de qualidade entre o 5B que roda local e o 14B que exige 80 GB [4] ainda
é grande; a reprodutibilidade bit a bit do grafo entre máquinas não é garantida; e o custo de
GPU — especialmente fora dos Estados Unidos e da China — desloca a barreira em vez de derrubá-la.

### D3 — Autorregressão visual por escala: a disputa arquitetural reabre

**O que rompe.** O VAR troca "prever o próximo token em varredura" por "prever a próxima escala",
do grosso ao fino, e com isso alcança, nos números do artigo, FID de 1,73 contra 18,65, IS de
350,2 contra 80,4 e ~20× de aceleração, superando o Diffusion Transformer em quatro dimensões
e exibindo leis de potência como as dos LLMs [12]. O que isso invalida não é um produto: é um
investimento coletivo. Praticamente todo o controle fino de hoje — ControlNet, LoRA,
adaptadores, agendadores, os workflows públicos acumulados de ComfyUI [3][14] — pressupõe o
processo de difusão. Uma pilha autorregressiva não herda isso.

**Por que agora.** Porque a prova de escalabilidade existe e é recente (melhor artigo do NeurIPS
2024) e porque ela vem com um argumento econômico, não só estético: se geração visual e geração
de texto rodam sob a mesma arquitetura, elas passam a dividir a mesma infraestrutura de servir
modelos, o mesmo ferramental de quantização e as mesmas otimizações de inferência. Há cinco anos,
autorregressão em imagem era reconhecidamente inferior à difusão em qualidade.

**O que falta.** Quase tudo, no lado prático: um ecossistema de controle equivalente ao da
difusão, modelos de **vídeo** autorregressivos por escala em qualidade comparável aos de difusão,
e integração nas ferramentas que os profissionais já usam. Esta é a disrupção-raiz mais frágil do
mapa, e a Seção 7 trata dela explicitamente.

### D4 — Animação como máquina de estados que responde a evento *(emergente — entra com ressalva)*

**O que rompe (ou ameaça romper).** O entregável. Uma animação publicada como state machine
multiplataforma [9][10] não é um arquivo assistido: é um programa que reage a entrada, e o mesmo
`.riv` roda em web, mobile, Flutter, Unity e Unreal [10]. Se o conteúdo audiovisual gerado passa a
ser publicado assim, a categoria "vídeo" — coisa com duração fixa, que se assiste e se mede em
audiência — deixa de descrever o objeto.

**A ressalva, explícita.** Isto **não passou** na segunda pergunta do teste de disrupção. Não
consigo nomear uma prática, um papel ou um modelo de negócio que isto já tenha invalidado. O
Flash fazia animação interativa multiplataforma há vinte anos e a indústria de vídeo linear
seguiu inteira; o Lottie entregou animação vetorial em runtime há dez anos e o mercado de peça
publicitária em arquivo MP4 não encolheu por causa disso. Entra na Seção 4 como **aposta
declarada**, não como rompimento consumado — e é a primeira coisa que eu cortaria se o mapa
tivesse que perder uma disrupção.

**Por que agora, então.** O argumento honesto não é o Rive em si: é a conjunção dele com D2. Se o
conteúdo passa a ser gerado por um grafo parametrizável [3][8] em vez de renderizado uma vez,
publicar o parâmetro em vez do arquivo deixa de ser uma escolha estética e vira a saída natural
do pipeline. É essa conjunção que é nova, não a máquina de estados.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: Edição de vídeo por instrução em contexto (o material filmado vira maleável)
    efeitos:
      - id: e1
        ordem: 1
        efeito: O material bruto filmado deixa de ser registro fixo e passa a ser matéria editável por instrução
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A fase de captação encolhe e a pós-produção absorve decisões que eram tomadas no set
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O contrato de imagem do ator passa a precificar usos que não foram filmados
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: A formação em direção de fotografia se reorganiza em torno de decidir o que precisa ser real
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A rotoscopia e a limpeza de placa deixam de ser o posto de entrada da indústria de VFX
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: O caminho de formação do artista de VFX perde seu primeiro degrau e a senioridade vira gargalo
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e1.2.2
                ordem: 3
                efeito: Estúdios terceirizados de baixo custo perdem a base de contratos que os sustentava
                sinal: medio
                prazo: 2030
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O vídeo deixa de sustentar sozinho a asserção de que algo aconteceu
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Nasce um mercado de autenticidade certificada com custo cobrado por asserção verificada
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: A prova de origem vira linha de despesa recorrente de redação e de tribunal
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Plataformas passam a exibir a cadeia de proveniência como parte da interface, não como selo
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Conteúdo sem credencial passa a ser tratado como suspeito por padrão, e não como neutro
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e2.2.2
                ordem: 3
                efeito: Acervos históricos sem proveniência assinada perdem valor probatório
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: A pilha aberta e local de geração controlável como grafo versionável
    efeitos:
      - id: e3
        ordem: 1
        efeito: O pipeline de geração vira artefato versionável, auditável e reexecutável dentro do estúdio
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Surge o cargo de engenheiro de pipeline generativo entre o artista e o modelo
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A remuneração criativa se desloca da execução da peça para a autoria do sistema que a produz
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e3.1.2
                ordem: 3
                efeito: O portfólio profissional passa a ser o grafo entregue, e não a peça final entregue
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Material sob sigilo passa a ser processado sem sair da infraestrutura da empresa
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Contratos de produção passam a exigir geração local como condição de contratação
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: O modelo de negócio de cobrar por crédito de geração perde o segmento profissional de alto volume
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Provedores fechados migram para vender garantia jurídica e controle, não capacidade de gerar
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: O licenciamento do acervo de treino vira o principal diferencial de preço do mercado
                sinal: medio
                prazo: 2030
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: A assimetria de acesso a hardware substitui a assimetria de acesso ao modelo
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: No Brasil o custo de GPU importada vira o gargalo real da adoção profissional, não a licença
                sinal: medio
                prazo: 2030
                confianca: baixa
              - id: e4.2.2
                ordem: 3
                efeito: Cooperativas de produção e laboratórios universitários viram infraestrutura audiovisual de fato
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: Autorregressão visual por escala (VAR) reabre a disputa arquitetural com a difusão
    efeitos:
      - id: e5
        ordem: 1
        efeito: A geração passa a ser interrompível e dirigível no meio do percurso, do grosso ao fino
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A prévia barata em baixa escala vira o ponto de decisão antes do render caro
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A aprovação do cliente migra para dentro do processo generativo, em tempo real
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: O ecossistema de controle construído sobre difusão perde parte da sua base técnica
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Workflows públicos acumulados ficam órfãos e o conhecimento tácito da comunidade desvaloriza
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: Geração visual e geração de texto convergem para a mesma infraestrutura de servir modelos
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O custo marginal de vídeo controlável cai junto com o custo de inferência de modelos de linguagem
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Regenerar fica mais barato que arquivar, e o acervo deixa de ser tratado como ativo
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: A interface de criação vira conversa com estado persistente, não formulário de parâmetros
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: A competência profissional passa a ser vocabulário de direção, não domínio de ferramenta
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: Animação publicada como máquina de estados que responde a evento (aposta declarada)
    efeitos:
      - id: e7
        ordem: 1
        efeito: A peça animada deixa de ser arquivo renderizado e passa a ser programa que reage a entrada
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: A fronteira entre motion design e desenvolvimento de interface se dissolve dentro do mesmo entregável
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: O repasse do designer para o desenvolvedor deixa de existir como etapa do processo
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e7.1.2
                ordem: 3
                efeito: Ferramentas de prototipagem e de animação convergem num único produto
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: Conteúdo audiovisual passa a ser publicado como parâmetro e regra, não como arquivo final
        sinal: fraco
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: A peça publicitária vira instância única, montada no dispositivo de cada espectador
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: A métrica de audiência deixa de conseguir descrever qual vídeo foi efetivamente exibido
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: A regulação de transparência passa a ter de marcar algo que só existe no momento da exibição
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: A obrigação de rotular conteúdo sintético se desloca do arquivo para o runtime que o monta
                sinal: fraco
                prazo: 2032
                confianca: baixa
```

### O que o bloco não diz

**Primeiro: os quatro ramos não são independentes, e o bloco os desenha como se fossem.** É a
limitação que o formato impõe — uma árvore não representa dependência cruzada. Na prática, `e8`
(publicar parâmetro em vez de arquivo) só faz sentido *se* `e3` acontecer: sem pipeline
versionável e parametrizável, não há o que publicar como parâmetro. E `e6.1` (custo marginal cai)
depende de `e5` e de `e6` juntos, que dependem da mesma aposta arquitetural. Se eu tivesse que
nomear as dependências formalmente — como faz a Análise de Impacto Cruzado —, o desenho seria uma
matriz e não uma árvore. Fica registrado aqui em prosa porque é o que o formato permite.

**Segundo: dois efeitos aparecem em ramos diferentes com o mesmo destino.** `e1.2.2` (estúdios
terceirizados perdem contratos, vindo da edição por instrução) e `e4.2.1` (o gargalo brasileiro é
GPU, vindo da pilha aberta) convergem no mesmo lugar concreto: a posição de produção audiovisual
de países que vendiam mão de obra qualificada barata. Um efeito destrói a demanda, o outro impede
a substituição por capital. O bloco não consegue mostrar que os dois batem no mesmo ponto.

**Terceiro: a confiança declarada é sobre o efeito acontecer, não sobre o prazo.** Vários efeitos
com `confianca: media` têm prazo que eu defenderia mal — `e2.2` em 2029 é a data mais frágil do
mapa inteiro, e a Seção 7 explica por quê.

**Quarto: 21 dos 44 efeitos estão em `confianca: baixa`, e todos os 21 são de terceira ordem.**
Isso é o comportamento esperado, não defeito. O que mereceria desconfiança seria o contrário.

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — o workflow FLF2V.** Primeiro-e-último-quadro é um item discreto na lista de
templates do ComfyUI [5], mas é conceitualmente enorme: é o retorno do *pose to pose* da animação
tradicional para dentro da geração. O animador define os extremos e a máquina faz o intervalo —
que é exatamente a divisão de trabalho entre animador-chave e intervalista que a indústria
japonesa formalizou nos anos 60. Se a interface dominante de vídeo generativo virar essa, o
vocabulário profissional da animação volta a ser o vocabulário da ferramenta, e não o prompt.

**Sinal fraco 2 — o EbSynth não usa IA generativa.** Ele propaga por síntese de textura guiada
por fluxo óptico [6] e continua sendo a saída mais controlável para rotoscopia estilizada. É um
contraexemplo vivo à tese de que controle vem de modelo maior: aqui o controle vem de o
algoritmo ser *determinístico e explicável*. Se esse atributo virar requisito profissional —
"preciso do mesmo resultado nas duas execuções" —, uma parte do mercado pode andar na direção
oposta à do mapa.

**Sinal fraco 3 — o detector do SynthID está em lista de espera.** A marca d'água é anunciada como
robusta a recorte, filtro e compressão, mas o verificador é restrito a jornalistas e profissionais
de mídia por lista de espera [17]. Isso desenha uma assimetria que quase não é discutida: a
capacidade de *saber* se algo é sintético pode ser distribuída de forma bem menos democrática que
a capacidade de *gerar*.

**Sinal fraco 4 — o Cavalry é gratuito e exige conta Canva** [7]. Ferramenta profissional de
motion design procedural distribuída de graça dentro do ecossistema de uma plataforma de design
de massa é um movimento de aquisição de capacidade, não de produto. Sugere que a camada
procedural está sendo absorvida por quem já tem a distribuição.

**Wildcard 1 (baixa probabilidade, alto impacto) — um longa com equipe de uma a três pessoas
entra na competição principal de um festival de primeira linha.** O caso mais próximo hoje é o
*Critterz*, que vai a Cannes em 2026 com menos de US$ 30 milhões e nove meses de produção, contra
os vários anos e mais de US$ 100 milhões de um longa de estúdio [20]. Ele não é o wildcard — ele o
torna concebível: continua tendo elenco de voz, produtoras em Londres e Los Angeles e a OpenAI
fornecendo ferramentas e computação [20]. **Por que a probabilidade é baixa, explicitamente:** a
barreira que sobra não é técnica, é institucional. Seleção de competição principal depende de
curadoria, de circuito de distribuição e de legitimação entre pares — variáveis que se movem em
escala de década, não de ciclo de release. E há um contramovimento ativo: parte do campo trata
"democratização" como narrativa de fornecedor e contesta o uso de material de treino não
consentido [20].

**Wildcard 2 (baixa probabilidade, alto impacto) — uma decisão judicial de peso declara
inadmissível qualquer vídeo sem cadeia de proveniência assinada.** Isso inverteria o ônus da
prova de um dia para o outro e tornaria `e2.1` e `e2.2.1` imediatos em vez de graduais. **Por que
a probabilidade é baixa:** o direito processual trabalha com livre convencimento e perícia, não
com requisito formal de formato; e a adoção da credencial é desigual demais para que a exigência
não excluísse material legítimo de quem não tem câmera que assina.

**Wildcard 3 (baixa probabilidade, alto impacto) — um modelo autorregressivo por escala de vídeo
com pesos abertos e qualidade competitiva aparece antes de 2028.** Colapsaria D2 e D3 num único
evento. **Por que a probabilidade é baixa:** o VAR demonstrou escala em imagem, não em vídeo [12];
o salto para vídeo acrescenta a dimensão temporal, que é justamente onde a difusão acumulou mais
engenharia; e os grupos com pesos abertos de vídeo hoje têm pilha e dados construídos para
difusão [4].

## 7. Contra o próprio mapa

### 1. Qual efeito é só extrapolação linear do presente

**`e5.1` — "a prévia barata em baixa escala vira o ponto de decisão antes do render caro".** Isto
não é uma mudança de natureza: é a descrição do fluxo de trabalho de render offline desde os anos
90. Toda produção 3D já trabalha com *preview*, *playblast*, proxy em baixa resolução e render
final; a única coisa que o VAR muda é que a prévia passa a ser um estágio interno do próprio
processo generativo em vez de um artefato separado. Escrevi esse efeito com `sinal: medio` e
`confianca: media`, o que lhe dá uma aparência de achado — mas ele é "mais do mesmo, mais rápido",
e um mapa honesto deveria tê-lo marcado como maduro em vez de derivá-lo de uma disrupção.
Deixo-o no bloco, marcado aqui, em vez de apagá-lo: apagar esconderia o erro.

### 2. Qual efeito assume velocidade de adoção sem caso comparável

**`e2.2` — "plataformas exibem proveniência como parte da interface até 2029".** Esta é a data
mais indefensável do mapa. O caso comparável é o HTTPS: proposto em 1994, com toda a
infraestrutura de certificação existindo há décadas, com incentivo econômico direto (comércio
eletrônico) e com um ator dominante empurrando ativamente (a marcação de "não seguro" no Chrome),
levou **cerca de vinte anos** para passar da maioria do tráfego. A proveniência de mídia tem um
incentivo econômico *mais fraco* que o do comércio eletrônico e um custo de coordenação *maior*
(exige o assinante na origem, a preservação no meio e o verificador no fim). E há o dado que a
Seção 3 evita fingir que não existe: em 2026 o padrão C2PA está na versão 2.4 [16] e o
verificador do SynthID ainda é lista de espera [17] — ou seja, a camada de verificação sequer está
aberta. Nada no presente sustenta três anos para chegar onde o HTTPS levou vinte. Se eu tivesse
que corrigir um número neste mapa, corrigiria este para 2034 e rebaixaria a confiança.

### 3. Qual disrupção pode não se concretizar, e o que sobra

**D3 (autorregressão visual por escala) é a candidata óbvia.** O VAR provou escala em geração de
imagem [12], mas a pilha de produção inteira, aberta e fechada, continua de difusão [3][4][14], e
o custo de migrar não é treinar um modelo — é reconstruir ControlNet, adaptadores, LoRAs e anos
de workflows comunitários. A difusão pode simplesmente absorver as melhorias (destilação, poucos
passos, amostragem mais rápida) e tornar a vantagem de velocidade irrelevante sem mudar de
arquitetura, que é o padrão histórico de como uma tecnologia incumbente responde.

**O que cai junto:** os efeitos `e5`, `e6` e tudo abaixo deles — 2 de primeira ordem, 4 de segunda
e 6 de terceira, **12 dos 44 efeitos**, mais de um quarto do mapa. **O que sobra em pé:** D1 e D2
são independentes de qual arquitetura vence — a edição por instrução e o pipeline aberto
funcionam igual em difusão. D4 também sobrevive, porque nunca dependeu de arquitetura de geração.
Isto é, na verdade, uma boa notícia sobre a estrutura do mapa: a aposta mais frágil é a que está
mais isolada.

Há uma segunda candidata a não se concretizar, e ela é mais incômoda porque eu a declarei: **D4**.
Ela já entra com ressalva por não passar no teste (Seção 4), e seus 8 efeitos derivados herdam
essa fragilidade inteira. Se D3 **e** D4 caírem, sobram 24 dos 44 efeitos.

### 4. Que viés entrou aqui, e onde exatamente

O viés declarado na entrevista foi "neutro". Dois vieses entraram assim mesmo, e nenhum deles é o
genérico "escolhi o tema porque gosto".

**O primeiro é de fonte, e é o mais grave.** Das 18 fontes lidas, sete são páginas de fornecedor
descrevendo o próprio produto [1][2][3][6][7][8][11]. Fornecedor de ferramenta de mídia sintética
vende exatamente uma coisa hoje: **controle** — é o diferencial contra o concorrente que só gera.
Ou seja, a tese central deste mapa ("a disrupção agora é o controle") é literalmente a mensagem
de marketing do setor, e eu a validei com as páginas de marketing do setor. Onde isso
provavelmente inflou o mapa: em **`e3`**, que recebeu `sinal: forte` e `confianca: alta`. O que
sustenta esse grau é a descrição que o ComfyUI faz de si mesmo como infraestrutura de produção
profissional [3] mais um número de estrelas no GitHub — que mede interesse de desenvolvedor, não
adoção em estúdio. Não abri nenhuma fonte independente medindo quantos estúdios de fato versionam
grafos em produção. `e3` deveria ser `confianca: media`.

**O segundo é de enunciado.** O tema chegou a esta rodada já formulado com a conclusão dentro:
"a disrupção que está em curso é outra: o controle". Isso não é uma pergunta, é uma tese — e a
skill foi posta para confirmá-la. Tentei compensar aplicando o teste de disrupção também aos itens
da própria amostra que acompanhava o enunciado, e dois foram reprovados por ele (EbSynth e
Cavalry, ver Seção 12). Mas compensação parcial não é neutralidade: a estrutura de quatro
disrupções-raiz deste mapa nasceu do recorte que o enunciado já tinha feito, e um mapa construído
a partir da pergunta "o que está em disputa em mídia sintética?" — sem a resposta embutida —
provavelmente teria centrado em dados de treino e direito de imagem, que aqui aparecem só como
contencioso de fundo [19].

## 8. O que a máquina errou

Cinco itens concretos desta rodada. Nenhum é hipotético.

**1. Aceitei, na primeira busca, uma camada inteira de fontes de SEO — e quase escrevi a partir
delas.** A busca por geração controlável de vídeo em 2026 devolveu quase só blogs comerciais
comparando ferramentas, com afirmações fortes e mutuamente incompatíveis, incluindo uma de que a
OpenAI teria descontinuado o Sora em 26/04/2026 com desligamento da API em 24/09/2026. É o tipo de
fato datado que dá credibilidade a um parágrafo. **Como percebi:** não pelo conteúdo, pela
procedência — nenhuma dessas páginas linkava anúncio oficial, e o título de uma delas era "Sora 2
Is Dead". Não abri fonte primária que confirmasse; portanto **este documento não afirma nada
sobre o estado do Sora**, e o assunto não entra nas Seções 3, 4 ou 11. O risco real aqui não era
errar uma data: era escrever um mapa de mercado a partir de páginas otimizadas para busca.

**2. Ia citar a página errada do Rive para uma afirmação sobre plataformas.** Abri a documentação
da state machine com a intenção de sustentar "o mesmo arquivo roda em web, iOS, Android e Unity" —
frase que veio no enunciado do tema. A página **não diz isso** [9]; ela descreve estados e
transições e nada sobre runtimes. Só depois de abrir a página de runtimes a afirmação ficou
sustentada, e aí com a lista completa e correta [10]. **Como percebi:** o retorno da leitura disse
explicitamente que a informação de plataformas não estava ali. Se eu tivesse fetchado só para
confirmar o que já "sabia", teria anexado uma citação verdadeira a uma fonte que não a sustenta —
o tipo de erro que passa por qualquer revisão de superfície, porque tanto o fato quanto o link
existem.

**3. A afirmação sobre remoção de metadados C2PA não se sustentou na fonte primária.** Eu ia
escrever que a própria especificação reconhece o *stripping* de metadados no upload como ameaça
declarada. A página da spec 2.1 que abri traz a descrição do padrão e a lista de versões, mas não
a seção de considerações de segurança [16]. **Como percebi:** a leitura devolveu "não constam no
conteúdo fornecido" para exatamente a pergunta que eu tinha feito. Resultado: a limitação de
metadata stripping **não** entra na Seção 3 como fato atribuído à spec; o que entra é a natureza
do padrão, e o problema da fragilidade aparece na Seção 7 como argumento meu sobre custo de
coordenação, não como citação.

**4. Uma fonte planejada não existe como fonte.** A página do verificador Content Credentials
(`verify.contentauthenticity.org`) retornou conteúdo vazio de substância — só o título. Não entra
na Seção 11. Fica registrada na Seção 12 como caminho abandonado, porque "eu tentei e não deu" é
informação, e omitir isso faria as 18 fontes parecerem um percurso mais limpo do que foi.

**5. O número redondo que eu ia usar sem contexto.** O estudo encomendado pelo Animation Guild
projeta 204.000 empregos afetados e 118.500 em cinema, TV e animação (21,4%) [21] — números que
ilustrariam perfeitamente `e1.2`. **Como percebi:** a metodologia é uma pesquisa com 300
executivos entre 17/11 e 22/12/2023 [21]. Isso é **expectativa declarada de gestor sobre o
próprio setor**, coletada antes de todas as ferramentas discutidas neste mapa existirem — não é
medição de emprego. Além disso o próprio recorte é revelador na direção contrária à tese fácil:
animadores e ilustradores aparecem com 15%, abaixo de modeladores 3D (33%) e compositores (25%)
[21]. Usei como sinal de expectativa do setor, com a metodologia dita na cara, e não como projeção
de desemprego.

**O que *não* foi pego, e por isso merece desconfiança:** não verifiquei nenhum dos números de
desempenho do VAR de forma independente — eles vêm do abstract dos próprios autores [12], e
números de artigo comparando-se a baselines escolhidas por si mesmo são a coisa mais rotineiramente
otimista da literatura. O parágrafo de D3 está inteiro apoiado numa fonte interessada.

## 9. Três cenários para 2031

**Provável.** Em 2031, dirigir mídia sintética é um ofício com nome e o vocabulário dele é híbrido:
metade vem da animação tradicional (quadro-chave, extremo, propagação) e metade vem de
engenharia de software (grafo, versão, parâmetro, reexecução). Os estúdios grandes rodam pipelines
mistos — modelo fechado quando a garantia jurídica importa, pesos abertos em máquina própria
quando o material é sigiloso — e a pergunta "qual ferramenta?" foi substituída por "qual rota de
controle?". O posto de entrada em VFX não voltou, e a formação ainda não resolveu como produzir
sênior sem júnior. A difusão continua majoritária; a autorregressão por escala ganhou nicho onde
latência manda, sem virar padrão. A proveniência existe, é desigual e ninguém confia muito nela:
na Europa há marcação legível por máquina porque o Artigo 50 obriga desde 2026 [15]; no Brasil o
PL 2338 saiu da Câmara em alguma versão mais enxuta e a fiscalização é incipiente. O vídeo
continua sendo arquivo na esmagadora maioria dos casos — D4 não se concretizou como ruptura,
sobreviveu como nicho de interface.

**Desejável.** Em 2031, o controle fino é infraestrutura pública e não diferencial de produto. Os
modelos de vídeo com pesos abertos alcançaram qualidade profissional em hardware que um curso
técnico consegue comprar, e os grafos de produção circulam como software livre circula — com
licença, versão e histórico —, o que fez do ensino de audiovisual um lugar onde se estuda sistema
e não só peça. A cadeia de proveniência funciona porque três coisas aconteceram juntas: a
verificação foi aberta a qualquer pessoa em vez de ficar em lista de espera [17], as plataformas
pararam de destruir a credencial no upload, e a lei reconheceu que obra artística declarada não é
fraude [15]. **O que precisaria ser feito para chegar lá:** que a exigência de verificação aberta
entre no texto brasileiro **antes** da votação na Câmara [18] — depois de aprovado, o custo
político de reabrir é proibitivo; e que universidades e cooperativas tratem GPU como
infraestrutura audiovisual compartilhada, do mesmo jeito que trataram ilha de edição nos anos 90,
porque é o único caminho que não depende de o preço do hardware cair.

**Indesejável.** Em 2031, o controle fino virou justamente o diferencial que se vende, e a
assimetria mudou de lugar sem diminuir: pesos abertos existem e são gratuitos, mas rodar os
modelos que importam exige hardware que quase ninguém no Brasil compra, de forma que a "abertura"
democratizou o direito de usar e concentrou a capacidade de fazer. O mercado de autenticidade
certificada consolidou-se como pedágio — provar que um vídeo é autêntico custa dinheiro por
asserção, o que significa que redação grande prova e repórter independente não prova, e a
credibilidade passou a ser função do orçamento. **Qual é o sinal precoce disso, hoje:** o
verificador do SynthID em lista de espera para "jornalistas e profissionais de mídia" [17]. Não é
uma conspiração, é a ordem natural de um lançamento — mas é exatamente o formato que o cenário
ruim tem no começo: a capacidade de gerar distribuída para todos, a capacidade de verificar
distribuída por triagem.

## 10. O experimento

### Banco de direção — a mesma tomada por quatro rotas de controle

**O que é.** Um banco de provas, não uma peça. Define-se **antes** um alvo escrito por um
terceiro, específico o bastante para ser julgado sem ambiguidade — por exemplo: "neste plano de
8 segundos, o objeto sobre a mesa some, a luz vira contraluz de janela à esquerda, e o resto do
quadro permanece idêntico". Com **uma única tomada de partida** gravada por celular, tenta-se
atingir esse alvo por quatro rotas de controle diferentes:

1. **Instrução em contexto** — descrever a mudança em linguagem natural sobre o vídeo (Runway
   Aleph [1]; para o quadro estático, FLUX.1 Kontext [2]).
2. **Quadro-chave propagado** — pintar/editar um quadro à mão e propagar (EbSynth [6]).
3. **Grafo com sinal de controle** — montar o fluxo no ComfyUI com Wan 2.2 e ControlNet de
   profundidade/pose, ou o workflow FLF2V definindo primeiro e último quadro [3][5][14].
4. **Regra e estado** — reconstruir a mesma mudança como animação paramétrica que responde a
   entrada (Rive [9][10]) ou programática (Remotion [8]).

Registra-se, para cada rota: **quantas tentativas** até o alvo ser aceito por quem o escreveu,
**quanto tempo** de operação humana, **o que ficou impossível** naquela rota, e — o item que
ninguém mede — **se rodar a mesma coisa duas vezes dá o mesmo resultado**.

**Que pergunta sobre o futuro ele ajuda a responder.** A pergunta central deste mapa: *controle
fino é de fato o que mudou, ou é a promessa que o setor está vendendo?* A resposta cai de um dos
dois lados de forma verificável. Se um alvo escrito por terceiro for atingido em poucas tentativas
e com resultado reproduzível, o eixo do mapa está certo — mídia sintética virou instrumento. Se as
quatro rotas exigirem dezenas de tentativas, ou se a rota determinística (EbSynth) ganhar das
generativas justamente por ser previsível, então o que existe é loteria com interface melhor, e o
mapa inteiro precisa ser reescrito em torno de outra coisa. A comparação entre as rotas responde
uma pergunta secundária relevante para quem projeta: **qual rota é ensinável** — a que se explica
em sala e se reproduz na semana seguinte.

**Que tecnologia emergente usa, e por que não dá com tecnologia madura.** A rota 1 depende de
edição de vídeo *in-context*, que só existe como produto desde 2025 [1][2] — com tecnologia
madura, a mesma tarefa é rotoscopia manual, e aí o experimento vira uma aula de After Effects. A
rota 3 depende de pesos abertos de vídeo com sinal de controle rodando em máquina local
[4][5][14], que não existia em 2023. A rota 2 é deliberadamente a **madura** do conjunto [6] — ela
está lá como linha de base, que é a única forma honesta de saber se o emergente ganhou de alguma
coisa. Um experimento sem linha de base madura só consegue provar que o novo funciona, nunca que
ele é melhor.

**O que a turma faz quando testar em sala.** Três coisas, em sequência. Primeiro, **a turma
escreve o alvo** — em duplas, cada dupla escreve o alvo que outra dupla vai perseguir, o que
elimina o vício de perseguir um alvo que já se sabe atingível. Segundo, **cada dupla pega uma
rota** e tem tempo fixo — o tempo fixo é essencial, porque "consegui depois de duas horas" e
"consegui em cinco minutos" são resultados opostos e o relato costuma achatar isso. Terceiro, **a
sala julga em conjunto** se cada resultado atingiu o alvo, sem saber qual rota produziu qual — o
julgamento cego é o que impede que a rota mais trabalhosa ganhe por apego de quem trabalhou nela.
Fecha-se com a pergunta que interessa ao tema: *em qual das quatro rotas você conseguiria explicar
para outra pessoa como repetir o que você fez?*

**O que me faria mudar de ideia sobre o mapa.** Dois resultados, em direções opostas:

- **Se a rota 2 (EbSynth, determinística, sem IA generativa) vencer** em tentativas, tempo e
  reprodutibilidade, então "controle" não está vindo de modelos maiores — está vindo de algoritmo
  previsível, e o eixo do mapa está no lugar errado. As disrupções D1 e D3 perdem força, e o sinal
  fraco 2 da Seção 6 vira a tendência principal.
- **Se nenhuma das quatro rotas atingir um alvo escrito por terceiro dentro do tempo**, então a
  mídia sintética de 2026 ainda é loteria com interface melhor. Nesse caso `e1` (o material filmado
  vira matéria editável), que é o único efeito do mapa com `sinal: forte` e `confianca: alta` para
  2027, está errado em grau **e** em data, e com ele cai o ramo inteiro de D1 — que é o mais
  povoado do mapa.

## 11. Fontes

Só entram aqui páginas que foram efetivamente abertas e lidas nesta rodada.

1. **Runway — "Introducing Runway Aleph"** · `https://runway.com/research/introducing-runway-aleph`
   Sustenta a existência e as operações da edição de vídeo in-context (adicionar/remover objeto,
   gerar ângulo novo, mudar estilo e iluminação) e a data de 25/07/2025. *Confiabilidade:* fonte
   primária para o que o produto faz, **interessada** quanto a quão bem faz — descrição de
   fornecedor sobre o próprio produto.
2. **Black Forest Labs — "FLUX.1 Kontext"** · `https://bfl.ai/announcements/flux-1-kontext`
   Sustenta edição local dirigida, consistência de personagem, iterações encadeadas e o
   escalonamento pro/max/dev com pesos abertos; data 29/05/2025. *Confiabilidade:* primária e
   interessada, mesma ressalva.
3. **ComfyUI — repositório oficial** · `https://github.com/comfyanonymous/ComfyUI`
   Sustenta o modelo de grafo, a lista de modelos de vídeo suportados, a API local e os números de
   133,7k estrelas / 15,8k forks. *Confiabilidade:* alta para o que o software faz e para os
   números do GitHub; **as estrelas medem interesse de desenvolvedor, não adoção em estúdio** — e
   este documento usou esse número como se medisse mais do que mede (ver Seção 7).
4. **Wan-Video — repositório Wan 2.2** · `https://github.com/Wan-Video/Wan2.2`
   Sustenta a licença Apache 2.0, a renúncia a direitos sobre o gerado, os tamanhos de modelo e as
   exigências de VRAM (24 GB no 5B, 80 GB nos 14B), as variantes S2V/Animate e as datas.
   *Confiabilidade:* alta — licença e requisitos são verificáveis e falsificáveis.
5. **ComfyUI Docs — "Wan2.2 Video Generation Native Workflow"** ·
   `https://docs.comfy.org/tutorials/video/wan/wan2_2`
   Sustenta os quatro workflows oficiais, o FLF2V (primeiro-e-último-quadro) e o 5B em 8 GB com
   offloading. *Confiabilidade:* alta para o que existe como template; não mede qualidade de saída.
6. **EbSynth** · `https://ebsynth.com/`
   Sustenta a propagação de quadro-chave por síntese de textura guiada por fluxo óptico, a
   afirmação explícita de que **não** é IA generativa, e os preços. *Confiabilidade:* primária e
   interessada; a declaração de não usar IA generativa é forte porque é uma afirmação contra o
   interesse comercial do momento.
7. **Cavalry** · `https://cavalry.studio/`
   Sustenta o modelo procedural (behaviors, geradores, falloffs, import de planilha), a gratuidade
   para indivíduos e a exigência de conta Canva. *Confiabilidade:* primária e interessada.
8. **Remotion** · `https://www.remotion.dev/`
   Sustenta vídeo programático em React, parametrização por dados, render em lote e a estrutura de
   licença. *Confiabilidade:* primária e interessada; os 5M de instalações mensais são autorrelato.
9. **Rive Docs — State Machine** · `https://rive.app/docs/editor/state-machine/state-machine`
   Sustenta o que é a state machine e que todo artboard tem pelo menos uma. *Confiabilidade:* alta
   para isso; **não sustenta** nada sobre plataformas (ver Seção 8, item 2).
10. **Rive Docs — Runtimes** · `https://rive.app/docs/runtimes/getting-started`
    Sustenta a lista de runtimes (Web, React, React Native, iOS, Android, Flutter, Unity, Unreal,
    C++, C#) e a portabilidade do mesmo `.riv`. *Confiabilidade:* alta, documentação oficial.
11. **Kling — guias de camera control e motion control** · `https://kling.ai/blog/kling-ai-camera-control-video-guide`
    Sustenta que controle de câmera (push, pull, pan, tilt, tracking, orbit) e planejamento tipo
    storyboard são recurso documentado de produto. *Confiabilidade:* primária e interessada; foi
    lida via resultados de busca sobre as páginas do próprio fornecedor, e por isso é usada aqui
    apenas para a afirmação mínima "isto existe como recurso", nunca para comparação de qualidade.
12. **arXiv:2404.02905 — "Visual Autoregressive Modeling: Scalable Image Generation via Next-Scale
    Prediction"** · `https://arxiv.org/abs/2404.02905`
    Sustenta o mecanismo de next-scale prediction, FID 18,65→1,73, IS 80,4→350,2, ~20× de
    aceleração, superação do DiT e as leis de potência. *Confiabilidade:* artigo revisado por pares
    e premiado no NeurIPS 2024 — alta para o método; **os números são autorreportados pelos autores
    contra baselines escolhidas por eles**, o que é a norma e a limitação da literatura (Seção 8).
13. **arXiv:2507.16869 — "Controllable Video Generation: A Survey"** ·
    `https://arxiv.org/abs/2507.16869`
    Sustenta a taxonomia de sinais de controle (condição única, múltiplas, universal), a lista de
    sinais (câmera, profundidade, pose) e o diagnóstico de que prompt de texto é insuficiente para
    requisito fino. Submetido 22/07/2025, revisado 19/01/2026. *Confiabilidade:* alta; survey
    acadêmico, sem interesse comercial direto — é a fonte menos interessada do conjunto.
14. **ComfyUI Wiki — "Wan2.2 Fun Control"** ·
    `https://comfyui-wiki.com/en/tutorial/advanced/video/wan2.2/wan2-2-fun-control`
    Sustenta que existe variante com ControlNet dirigindo movimento por vídeo de referência, com
    Canny, profundidade, OpenPose e MLSD. *Confiabilidade:* média — wiki comunitária, não
    documentação oficial; usada só para a afirmação de existência do recurso.
15. **EU Artificial Intelligence Act — Artigo 50** · `https://artificialintelligenceact.eu/article/50/`
    Sustenta a obrigação de marcação legível por máquina, a divulgação de deepfake, a exceção para
    obra artística/satírica/ficcional e a aplicação desde 02/08/2026. *Confiabilidade:* alta —
    reprodução do texto legal; é um portal de consolidação, não o Jornal Oficial da UE.
16. **C2PA — Especificações, versão 2.1** · `https://spec.c2pa.org/specifications/specifications/2.1/index.html`
    Sustenta o que é o padrão (certificar origem e histórico da mídia) e que há versões 2.2, 2.3 e
    2.4 publicadas. *Confiabilidade:* alta para isso; **a página de índice não traz as
    considerações de segurança**, então nenhuma afirmação sobre limitações do padrão é atribuída a
    ela (Seção 8, item 3).
17. **Google DeepMind — SynthID** · `https://deepmind.google/science/synthid/`
    Sustenta a marca d'água imperceptível em imagem/vídeo/áudio/texto, a robustez declarada a
    recorte, filtro e compressão, e o detector em lista de espera restrita a jornalistas e
    profissionais de mídia. *Confiabilidade:* primária e interessada quanto à robustez (não há
    avaliação independente aqui); o dado do acesso restrito é factual e é o mais importante dos
    dois para este mapa.
18. **Senado Federal — PL 2338/2023** · `https://www25.senado.leg.br/web/atividade/materias/-/materia/157233`
    Sustenta a aprovação no Plenário do Senado em dezembro de 2024, as 244 emendas, a relatoria de
    Eduardo Gomes e a remessa à Câmara em 17/03/2025. *Confiabilidade:* alta — fonte oficial de
    tramitação.
19. **Wikipédia — Adobe Firefly** · `https://en.wikipedia.org/wiki/Adobe_Firefly`
    Sustenta a base de treino declarada (≈300M de imagens do Adobe Stock, Creative Commons,
    Wikimedia, Flickr Commons, domínio público), a indenização a clientes, a controvérsia sobre
    imagens de concorrentes e a linha do tempo até outubro de 2025. *Confiabilidade:* média —
    enciclopédia colaborativa; usada para o contorno da controvérsia, não para afirmação jurídica.
    Nenhuma alegação sobre processos judiciais em curso entrou neste documento a partir dela.
20. **Cartoon Brew — "Critterz"** · `https://www.cartoonbrew.com/feature-film/critterz-ai-feature-openai-cannes-254237.html`
    Sustenta o orçamento (< US$ 30 mi), o prazo (nove meses), a composição da produção (Vertigo
    Films, Native Foreign, OpenAI fornecendo ferramentas e computação) e o ceticismo do campo
    quanto à narrativa de democratização e ao material de treino. *Confiabilidade:* média-alta —
    veículo especializado com posição editorial declaradamente crítica à IA generativa, o que é uma
    lente e não um defeito, desde que dita.
21. **Cartoon Brew — estudo CVL Economics / Animation Guild** ·
    `https://www.cartoonbrew.com/tech/union-study-says-generative-ai-will-disrupt-204000-jobs-three-years-237495.html`
    Sustenta os 204.000 empregos, os 118.500 em cinema/TV/animação (21,4%), a distribuição por
    função (modeladores 3D 33%, compositores 25%, animadores 15%) e a metodologia (300 executivos,
    17/11–22/12/2023). *Confiabilidade:* **baixa como projeção, alta como registro de expectativa**
    — é pesquisa de opinião com gestores, encomendada por sindicatos, anterior às ferramentas
    discutidas aqui. Usada só nesse grau (Seção 8, item 5).

*(A contagem de `fontes: 18` no frontmatter refere-se às páginas abertas diretamente com
ferramenta de leitura. As entradas 11, 14 e 21 foram alcançadas por busca sobre as páginas
correspondentes e estão listadas com sua ressalva própria; foram mantidas na lista porque o
formato exige que toda afirmação tenha fonte nomeada, e omiti-las esconderia de onde as
afirmações vieram.)*

## 12. Anexo — o levantamento bruto

### A.1 — Entrevista (Etapa 1), respostas recebidas

Rodada não interativa: a skill fez as seis perguntas obrigatórias e recebeu as respostas abaixo no
enunciado, com instrução explícita de não perguntar de volta.

1. **Horizonte:** 2031.
2. **Público:** quem projeta mídia e interação.
3. **Recorte geográfico:** global, com nota sobre o Brasil.
4. **Descartado de início:** o que já é comum em produto de massa (a régua da disciplina).
   Nenhuma outra exclusão — confirmado explicitamente, como a skill exige.
5. **Viés:** neutro.
6. **Zona de interesse:** Percepção e mídia sintética.

Parâmetros extras recebidos fora das seis perguntas: profundidade de três ordens; modo "a partir
de uma inovação/tema, não de um setor"; disrupção suspeita — nenhuma, descobrir; ideias óbvias a
excluir — as que servem para qualquer tema; o que faria o autor mudar de ideia — evidência de que
a adoção já passou da maioria inicial (Rogers) ou de que a tecnologia só melhora o que existe.

**Condição de parada da Etapa 1:** itens 1, 3, 4 e 5 respondidos com clareza → avançou.

**Nota de processo, registrada porque afeta o resultado:** a skill, como escrita, é bloqueante na
Etapa 1 e não deve avançar sem resposta. Aqui as respostas vieram todas de uma vez, por escrito, e
não houve possibilidade de repergunta. Isso significa que **nenhuma ambiguidade foi negociada** —
por exemplo, "o que já é comum em produto de massa" foi interpretado por mim como excluindo
geração de imagem por prompt simples, edição de vídeo convencional e motion graphics manual, que é
a leitura que o enunciado do tema sugere. Outra leitura teria mudado o que entra na Seção 3.

### A.2 — Teste de disrupção (Etapa 3): os candidatos REPROVADOS

Sete candidatos foram testados. Quatro passaram (três limpos, um com ressalva) e estão na Seção 4.
Os três reprovados, com o motivo:

**EbSynth / propagação de quadro-chave — REPROVADO na pergunta 1.**
*O que torna possível que antes não era?* Nada que não fosse possível antes: propagação de estilo
por quadro-chave usando fluxo óptico é técnica estabelecida, o produto existe desde 2019, e ele
próprio declara não usar IA generativa [6]. É **madura**, e excelente — fica na Seção 3 como parte
do estado atual e reaparece na Seção 6 como sinal fraco (porque seu determinismo pode virar
requisito) e na Seção 10 como linha de base do experimento. Reprovar não é desmerecer: é o teste
funcionando. Ele veio na amostra do professor como exemplo de controle, e é — só que de controle
que já existe.

**Cavalry / motion design procedural — REPROVADO na pergunta 1.**
Definir regras em vez de animar elemento por elemento [7] é o modelo de trabalho do Houdini
(desde os anos 90) e das expressões de After Effects. O Cavalry torna isso mais acessível e mais
barato — literalmente gratuito —, o que é melhoria relevante e não ruptura. Some-se que design
procedural puro sem IA é explicitamente o tema 14 da disciplina, e não este. Fica na Seção 3.

**Regime de proveniência obrigatória (C2PA + SynthID + AI Act Art. 50) — REPROVADO na pergunta 1,
com o caso mais difícil do conjunto.**
Assinatura criptográfica e marca d'água são técnicas antigas; nada de tecnicamente novo é tornado
possível [16][17]. O que mudou é **jurídico**: a obrigação existe e vale desde 02/08/2026 [15].
Cheguei a considerar aprová-lo como disrupção-raiz por causa disso — uma obrigação legal rompe
prática estabelecida tanto quanto tecnologia rompe. Decidi **não** aprovar, por um motivo
explícito: o teste da skill pergunta o que a *tecnologia* torna possível, e forçar uma mudança
regulatória para dentro dele tornaria o critério elástico o bastante para caber qualquer coisa —
que é exatamente o que o critério existe para impedir. A regulação entra neste mapa como **força
externa que atravessa os quatro ramos**: ela aparece na Seção 3 como presente, no ramo `e2` como
condição dos efeitos de proveniência, e em `e8.2` como o ponto em que a obrigação colide com o
conteúdo que só existe no runtime. Registro aqui que esta é uma decisão de fronteira e que um
avaliador razoável poderia decidir o contrário.

**Candidatos aprovados, resumo do teste:**

| Candidato | P1 (torna possível?) | P2 (o que invalida?) | P3 (por que agora?) | Veredito |
|---|---|---|---|---|
| Edição in-context de vídeo | Sim — alterar plano filmado por instrução | Rotoscopia, limpeza de placa, posto de entrada do VFX | Modelo aceita vídeo como parte do prompt (2025) | **Disrupção-raiz** |
| Pilha aberta e local | Sim — pipeline sigiloso, versionável, sem terceiro | Cobrança por crédito; impedimento contratual de NDA | Apache 2.0 + 5B em 24 GB + orquestrador maduro | **Disrupção-raiz** |
| Autorregressão por escala | Sim — geração interrompível por escala, mesma infra dos LLMs | Ecossistema de controle inteiro construído sobre difusão | Prova de escalabilidade (NeurIPS 2024) | **Disrupção-raiz** (a mais frágil) |
| Animação como máquina de estados | Sim — peça que reage, mesmo arquivo em 10 runtimes | **Não consegui nomear** — Flash e Lottie não romperam | Conjunção com pipeline parametrizável, não a técnica em si | **Emergente, com ressalva** |

### A.3 — Efeitos CORTADOS na Etapa 4, com o motivo

A regra de parada usada: corta-se o efeito que exige encadear duas ou mais suposições independentes
e não testadas para chegar até a disrupção-raiz.

- **"O cinema como forma cultural perde centralidade para conteúdo interativo até 2031"** —
  cortado. Exige supor (a) que D4 se concretize, (b) que o público prefira interação a narrativa
  linear, e (c) que a economia de distribuição acompanhe. Três suposições empilhadas, nenhuma
  testada. É wildcard, não efeito — e nem como wildcard entrou, porque não consigo nomear o sinal
  precoce dele.
- **"Surge uma profissão de auditor de mídia sintética com registro profissional"** — cortado da
  terceira ordem. Plausível, mas o caminho de volta até a disrupção passa por uma decisão de
  conselho profissional, que é evento institucional e não consequência técnica. Virou parte do
  cenário indesejável, onde suposição institucional é legítima.
- **"Modelos de vídeo passam a ser treinados com material licenciado por padrão"** — cortado.
  Depende inteiramente de desfecho jurídico [19], não do que a tecnologia faz. Aparece na Seção 3
  como contencioso e em `e4.1` como pressão de mercado, que é até onde a cadeia causal se sustenta.
- **"O emprego em animação no Brasil cai X%"** — cortado por falta de base. A única evidência
  disponível é norte-americana, é expectativa de executivo e é anterior às ferramentas deste mapa
  [21]. Projetar isso para o Brasil seria inventar.
- **"Todo vídeo vira interativo"** — cortado, apesar de ser uma das perguntas do enunciado do tema.
  Como efeito afirmativo ele é insustentável: nada nos dados levantados sugere universalidade, e
  a evidência histórica (Flash, Lottie, vídeo interativo em plataformas de streaming) aponta para
  nicho persistente, não substituição. Entrou no mapa na forma defensável: `e8`, restrito ao
  conteúdo *parametrizado*, com `sinal: fraco` e `confianca: baixa`.

### A.4 — Buscas que não deram em nada, e becos

- **`verify.contentauthenticity.org`** — a página do verificador de Content Credentials retornou
  apenas o título, sem conteúdo utilizável. Era para ser a fonte primária sobre as limitações
  declaradas da verificação. Não entrou na Seção 11. A afirmação que dependia dela foi removida.
- **`lumalabs.ai/dream-machine`** — a página redireciona para um produto diferente (Luma Agents) e
  não descreve o Dream Machine, seus keyframes nem os controles de câmera. O Luma aparece no
  enunciado do tema como exemplo de movimento de câmera estável; **este documento não afirma nada
  sobre o Luma**, porque a fonte não sustentou.
- **`rive.app/docs/runtimes/overview/getting-started`** — 404. O caminho correto é
  `rive.app/docs/runtimes/getting-started` [10].
- **`c2pa.org/specifications/...`** e **`runwayml.com/...`** — ambos redirecionam (para
  `spec.c2pa.org` e `runway.com`). Registrado porque links antigos desses dois domínios circulam
  muito e podem aparecer em bibliografia de outros trabalhos como se fossem endereços vivos.
- **Busca por comparativos de geradores de vídeo em 2026** — devolveu quase exclusivamente blogs
  de SEO com afirmações fortes, datadas e mutuamente incompatíveis (ver Seção 8, item 1). Nenhum
  foi aberto, nenhum foi citado, e a consequência é uma lacuna real neste documento: **não há aqui
  comparação de qualidade entre Runway, Veo, Kling e Sora**, porque não encontrei fonte não
  interessada que a sustentasse. Preferi a lacuna declarada ao parágrafo confortável.
- **Busca por adoção de C2PA em 2026** — devolveu números atraentes (bilhões de vídeos rotulados
  numa plataforma, lista de câmeras que assinam na captura) vindos de páginas comerciais de
  produtos de verificação, que têm interesse direto em a adoção parecer grande. Não abri nem citei.
  Por isso a Seção 3 não afirma nada sobre o **tamanho** da adoção de proveniência — só sobre a
  existência do padrão [16] e da obrigação legal [15].

### A.5 — Aplicação da régua da disciplina (o que foi descartado por já ser comum)

Conforme a resposta 4 da entrevista, foi descartado de saída o que já é comum em produto de massa:
edição de vídeo convencional, motion graphics animado à mão, geração de imagem por prompt simples,
e os filtros de rosto em tempo real de redes sociais. Nenhum deles entrou em qualquer seção como
tendência; a edição convencional aparece apenas por contraste, em D1.

### A.6 — Contagens conferidas

Disrupções-raiz: 4 (3 aprovadas limpas + 1 emergente com ressalva). Efeitos de 1ª ordem: 8.
De 2ª ordem: 15. De 3ª ordem: 21. Total: 44 efeitos. Efeitos em `confianca: baixa`: 21 — todos de
3ª ordem, o que é o padrão que a skill descreve como esperado. Efeitos em `confianca: alta`: 2
(`e1` e `e3`); a Seção 7 argumenta que `e3` deveria ser `media` e a razão está registrada lá em
vez de corrigida no bloco, para que a discordância fique visível.

**Confiança geral declarada no frontmatter: `media`.** O motivo em uma frase: o presente está bem
ancorado e o teste de disrupção rejeitou candidatos de verdade, mas sete das fontes são páginas de
fornecedor sobre o próprio produto, e a tese central do mapa coincide com a mensagem comercial
desses fornecedores — o que está dito por extenso na Seção 7, item 4.
