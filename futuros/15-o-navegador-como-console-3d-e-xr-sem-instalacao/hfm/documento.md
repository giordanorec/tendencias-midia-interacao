---
tema: O navegador como console — 3D e XR sem instalação
slug: o-navegador-como-console-3d-e-xr-sem-instalacao
autor_login: hfm
zona_de_interesse: Criação e plataforma
data: 2026-09-18
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 10
efeitos_ordem_3: 10
tecnologias_citadas: [WebGPU, WebXR, WGSL, WebNN, WebGL 2, three.js, PlayCanvas, Babylon.js, SuperSplat, model-viewer, Transformers.js, WebLLM, ONNX Runtime, Gaussian Splatting, transient-pointer, Meta Quest Browser, Safari visionOS]
fontes: 22
confianca: media
experimento: Uma mesma cena 3D publicada como URL única, instrumentada para medir em que faixa de hardware ela roda e o que ela consegue saber sobre a GPU de quem abriu
skill_usada: futurizacao-hfm
publico_ok: false
---

## 1. Resumo

Entre 2023 e 2026 o navegador deixou de ser um lugar onde gráficos pesados eram tolerados e
passou a ser um lugar onde eles são alvo de primeira classe: a especificação WebGPU está em
Candidate Recommendation Draft no W3C (15/09/2026) e roda por padrão em Chrome, Edge, Firefox e
Safari; a WebXR Device API está em Candidate Recommendation Draft (09/06/2026) e entrou como área
de foco do Interop 2026, ao lado do próprio WebGPU. O efeito-raiz não é desempenho — é
distribuição: uma experiência 3D ou imersiva passa a ser um link, e não um binário que precisa de
loja, revisão e aprovação. Três rupturas derivam disso e se cruzam: a GPU do usuário vira um
recurso endereçável por qualquer página aberta; o óculos vira um cliente de URL em vez de uma
plataforma de distribuição fechada; e a mesma porta de GPU que desenha também infere, permitindo
que um modelo de linguagem rode inteiro no navegador, sem requisição de rede. As consequências
mais prováveis até 2031 não estão no gráfico: estão no deslocamento do ponto de controle — da
política de loja para o default do navegador —, na troca do eixo de desigualdade de "ter banda"
para "ter GPU", e no fato de que a mesma interface que traz a GPU para a página traz também um
vetor novo de rastreamento, que já fez pelo menos um navegador esvaziar os descritores de
adaptador por padrão. O mapa é de confiança média: a camada técnica está bem documentada, a
camada econômica depende de regulação que está em curso e a camada de terceira ordem é
especulação graduada.

## 2. O tema

O objeto aqui é **a web como plataforma de execução 3D e XR** — não a captura de 3D (tema 10),
não a IA local no dispositivo em geral (tema 16). É a pergunta sobre o que muda quando a
experiência imersiva deixa de ser um artefato instalável e passa a ser um documento endereçável.

Isso encosta em mídia e interação em três pontos, e cada um deles é do ofício de quem projeta:

**Distribuição.** Todo raciocínio de produto em mídia interativa dos últimos quinze anos assumiu
um funil que começa em uma loja: descoberta curada, revisão, instalação, ícone na tela. Se a
experiência é um link, o funil não encurta — ele muda de natureza. Descoberta vira busca e
compartilhamento; instalação vira primeira sessão; retenção deixa de ter o ícone como âncora.

**Autoridade.** Quem decide o que pode ser visto num óculos hoje é quem opera a loja daquele
óculos. Se o óculos abre URL, essa decisão migra para outro lugar — o navegador embarcado, seus
defaults, suas permissões. Migra; não desaparece. Essa é a parte interessante.

**Material.** WebGPU não é só "WebGL mais rápido": ela expõe compute shaders, e é por essa porta
que um modelo de linguagem inteiro passa a caber numa página. Quem projeta interação ganha, no
mesmo runtime, renderização e inferência — e herda junto os limites do dispositivo de quem abriu.

Por que isto merece um mapa de futuro e não um levantamento de estado da arte: porque o estado da
arte já está resolvido e é público. WebGPU chegou. WebXR chegou. O que não está resolvido é o que
acontece com lojas, taxas, sistemas operacionais, desigualdade de acesso e privacidade quando a
camada de baixo muda de dono. Um levantamento descreveria as APIs. Um mapa tem que dizer quem
perde o quê.

## 3. Onde isso está hoje

### O que já existe e funciona

**WebGPU está disponível por padrão nos quatro motores principais.** A página do Chrome for
Developers e o blog do web.dev registram suporte em Chrome e Edge (desde a versão 113, com a
cobertura ampliada nas versões seguintes), Firefox 141 no Windows e 145 no macOS ARM64, e Safari
26 em macOS, iOS, iPadOS e visionOS. O wiki de status de implementação do próprio grupo gpuweb
detalha um quadro mais áspero e mais honesto que a manchete: Chromium no Android só a partir da
versão 121 e apenas em Android 12+, com Samsung Xclipse ainda pendente (previsão ~154); Linux
liberado apenas para Intel Gen12+ (versão 144) e NVIDIA com driver 535.183.01+ em Wayland (versões
147–148), o resto atrás de flag; Windows ARM64 atrás de flag; Firefox no Linux e no Android ainda
em nightly, com envio planejado para 2026. Ou seja: **"baseline" é verdadeiro no desktop e no
topo do Android, e ainda não é verdadeiro na cauda.**

**A especificação amadureceu no W3C.** WebGPU é um Candidate Recommendation Draft de 15 de
setembro de 2026, mantido pelo GPU for the Web Working Group; ela expõe "uma API para realizar
operações, como renderização e computação, em uma unidade de processamento gráfico", desenhada
para mapear em APIs nativas modernas, sem parentesco com WebGL/OpenGL ES.

**WebXR chegou junto e deixou de ser experimental.** A WebXR Device API é Candidate Recommendation
Draft de 9 de junho de 2026, mantida pelo Immersive Web Working Group, e descreve "support for
accessing virtual reality (VR) and augmented reality (AR) devices, including sensors and
head-mounted displays, on the Web".

**O Interop 2026 adotou as duas.** As propostas de área de foco para WebGPU (issue 1019) e WebXR
(issue 1021) no repositório web-platform-tests/interop estão fechadas e marcadas como *Done*. A
justificativa do WebGPU é explícita quanto ao problema: a API "já foi disponibilizada em diversos
navegadores", mas existem "lacunas de interoperabilidade que podem resultar em quebra de sites e
fricção para desenvolvedores", citando Babylon.js, Three.js e TensorFlow.js como beneficiários. A
do WebXR argumenta que o núcleo foi implementado em vários navegadores, mas inconsistências ainda
impedem experiências confiáveis entre plataformas. **Isto é o sinal institucional mais forte do
mapa:** as duas APIs deixaram de ser "coisas que cada navegador faz do seu jeito" e passaram a ser
placar público comparável.

**O hardware de XR trata a web como cidadã.** A Apple habilitou WebXR por padrão no Safari do
visionOS 2 e documenta o modo de entrada `transient-pointer` — "It lets you make the most of
natural input on visionOS, and allow your users to interact with a look and a pinch" — além de
hand tracking com pedido explícito de permissão no início da sessão. O modo nasceu de uma proposta
da própria Apple ao W3C (post do WebKit de 19/03/2024, Ada Rose Cannon e Brandel Zachernuk), com
um argumento que não é de desempenho e sim de privacidade: cada entrada é um único ponto rastreado
durante a pinça, exigindo "significativamente menos dados sobre o movimento do usuário". Do lado
da Meta, as notas de versão do Meta Quest Browser registram em 2026: "Experimental WebGPU and
WebXR depth projection support" (146.0, 21/04/2026), "added WebGPU support for space-warp layers"
(149.1, 27/07/2026) e "Experimental WebGPU foveation support" (150.1, 28/08/2026). Foveation e
space-warp são otimizações de *headset*, não de desktop — a Meta está portando para a web técnicas
que antes só existiam no caminho nativo.

**Os motores 3D adotaram.** A documentação do three.js descreve o `WebGPURenderer` como "the new
alternative of `WebGLRenderer`" e registra o comportamento que torna a migração barata: "By
default, the renderer tries to use a WebGPU backend if the browser supports WebGPU. If not,
`WebGPURenderer` falls backs to a WebGL 2 backend" — com `forceWebGL: true` para forçar o
contrário. A PlayCanvas se apresenta como "The open source engine and collaborative editor for 3D
that loads instantly, on any device" e se diz "one of the first production 3D engines with full
WebGPU support, including compute shaders, while maintaining WebGL2 compatibility".

**O "sem instalar nada" já é argumento de venda de ferramenta profissional, não de demo.** O
README do SuperSplat: "The SuperSplat Editor is a free and open source tool for inspecting,
editing, optimizing and publishing 3D Gaussian Splats. (...) It is built on web technologies and
runs in the browser, so there's nothing to download or install." Um editor de splats — trabalho
pesado de GPU — entregue como página. O `model-viewer` do Google faz o movimento simétrico pelo
outro extremo: reduz 3D interativo e AR a uma tag HTML customizada.

**A mesma porta já roda modelo.** A documentação do Transformers.js abre com "Run 🤗 Transformers
directly in your browser, with no need for a server!", usa ONNX Runtime, e aceita
`device: 'webgpu'` — advertindo, na própria página, que WebGPU "ainda é experimental em muitos
navegadores". O WebLLM é mais direto: "High-performance in-browser LLM inference engine that
brings language model inference directly onto web browsers", "accelerated with WebGPU",
"Everything runs inside the browser with no server support". E há uma terceira via em maturação: a
WebNN, Candidate Recommendation Draft de 10 de setembro de 2026, "a dedicated low-level API for
neural network inference hardware acceleration", complementar ao WebGPU (ela não suporta shader
customizado; é possível criar um `MLContext` a partir de um `GPUDevice`).

### O que existe e não funciona

**A cauda de hardware.** O quadro do gpuweb é o contraditório embutido do próprio otimismo: no
Android, WebGPU depende de Android 12+ e de GPU suportada; no Linux, a maior parte segue atrás de
flag. Um produto que assume WebGPU como requisito hoje exclui uma fatia da base que ninguém
mediu bem.

**A interoperabilidade real.** As duas propostas de Interop existem exatamente porque as
implementações divergem. "Está disponível" e "se comporta igual" são coisas diferentes, e o
placar de 2026 existe para medir a distância entre elas.

**A privacidade.** Aqui há evidência dos dois lados. O estudo de medição *What Browsers Do in the
Shaders* (arXiv 2606.26412, submetido em 24/06/2026) montou o framework WGPULens e separou
cenários controlados, testes com participantes e um rastreamento Tranco de páginas reais; o achado
principal aponta o estado persistente de compilação de pipeline como a superfície mais clara —
sondas frias e quentes revelam estado de compilação anterior por origem, perfil e posicionamento
do navegador. O mesmo estudo traz o dado que segura o alarme: no rastreamento de páginas reais,
WebGPU aparece sobretudo em sondagem de adaptador e código de suporte estático, **sem atividade
observável de shader durante o carregamento**. Ou seja, a capacidade de rastrear existe e está
documentada; o uso em escala, ainda não. Do lado da resposta, o Brave 1.93 (13/08/2026) esvaziou
os descritores de adaptador WebGPU — removendo `vendor`, `architecture` e `device` —, unificou as
strings de vendor/renderer do WebGL e passou a randomizar a lista de extensões por sessão, site e
área de armazenamento. Ativado por padrão, desktop e Android.

### Quem está construindo, e o terreno econômico

Do lado da especificação: W3C GPU for the Web Working Group e Immersive Web Working Group. Do lado
dos motores: three.js, PlayCanvas, Babylon.js, `model-viewer`. Do lado dos navegadores: Google,
Apple, Mozilla, Meta (Quest Browser), Brave. Do lado da inferência: Hugging Face (Transformers.js),
MLC (WebLLM), Microsoft (ONNX Runtime).

O terreno econômico sobre o qual esses efeitos vão cair está sendo reescrito em paralelo, e não
por causa da web. O DMA europeu está em vigor desde 1º de novembro de 2022 e aplicável desde 2 de
maio de 2023, e obriga gatekeepers a permitir que usuários de negócio promovam ofertas fora da
plataforma e que consumidores se conectem com negócios externos. No Brasil, o CADE homologou em
dezembro de 2025 um acordo com a Apple, com 105 dias para implementação; as mudanças chegaram com
o iOS 26.5 em junho de 2026, com prazo de 6 de julho de 2026 para os desenvolvedores aceitarem o
novo contrato, comissão padrão de 25% na App Store (10% em programas qualificados, mais 5% se usar
o pagamento da Apple) e multa de até US$ 27 milhões por descumprimento. A diferença que importa
para este mapa: **no Brasil não há distribuição direta pela web** — "Users cannot sideload apps
directly from the web. Apps distributed outside the App Store must still be offered through a
registered alternative marketplace". O canal web permanece, no Brasil, o único caminho que não
passa por marketplace registrado. Isso não é detalhe: é o que torna a web um caminho estruturalmente
distinto e não apenas um caminho a mais.

**Nota sobre o Brasil, do lado do acesso.** A TIC Domicílios 2025 (Cetic.br, divulgada em
09/12/2025) mede 65% da população acessando internet unicamente pelo celular — 5 pontos acima do
ano anterior —, 87% na classe DE, contra 95% da classe A acessando por múltiplos dispositivos; e
32% dos domicílios com ao menos um computador, sendo 97% na classe A e 10% na classe DE. Qualquer
efeito deste mapa que dependa de GPU de desktop, no Brasil, esbarra nesses números.

### Classificação dos achados

| Achado | Classe | Justificativa |
|---|---|---|
| WebGL 2 como base gráfica da web | maduro | disponibilidade ampla, efeitos estabilizados há anos |
| Unity/Unreal exportando para web | maduro | prática consolidada; não rompe relação de distribuição |
| App nativo de VR distribuído por loja | maduro | é o regime vigente, não a ruptura |
| WebGPU por padrão nos quatro motores | emergente → **disruptivo** | rompe o pressuposto de que gráfico pesado exige binário instalado |
| WebXR governado por Interop entre navegadores | emergente → **disruptivo** | rompe o papel do fabricante de óculos como porteiro técnico |
| Inferência de LLM no navegador via WebGPU | emergente → **disruptivo** (escopo estreito) | rompe a relação custo-por-inferência e a necessidade de servidor |
| WebNN em CR Draft | emergente | forma em consolidação; sem efeito observável ainda |
| Gaussian splats editados no navegador (SuperSplat) | emergente | adoção inicial, mas já em ferramenta de produção |
| Fingerprinting por GPU | emergente | capacidade documentada; uso em escala não observado |
| Foveation/space-warp via WebGPU no Quest | emergente | marcado como experimental nas notas de versão |

**Emergente não é automaticamente disruptivo**, e há dois casos aqui: WebNN é emergente e ainda não
rompeu nada observável; splats no navegador são emergentes mas melhoram um fluxo que já existia.
Ambos ficam fora da raiz.

## 4. As disrupções-raiz

### D1 — A GPU do dispositivo passa a ser alvo de primeira classe de um documento

**O que rompe.** O pressuposto de que renderização e computação pesadas exigem um artefato
instalado. Com WebGPU por padrão nos quatro motores e compute shaders disponíveis, a unidade de
distribuição de uma experiência gráfica deixa de ser um binário e passa a ser uma URL — sem loja,
sem revisão, sem plataforma dona no meio.

**Por que agora e não há cinco anos.** Em 2021 o caminho era WebGL 2, sem compute, com Safari
arrastando; a estratégia dominante era exportar de uma engine nativa para a web e aceitar a perda.
O que mudou é datável: Safari 26 (2026) fechou o último motor grande; o three.js passou a cair de
WebGPU para WebGL 2 sozinho, tornando a migração barata e reversível; e o Interop 2026 criou o
placar que pressiona pelo comportamento igual. Nenhum desses três existia em 2021.

**O que ainda falta.** Fechar a cauda: Android abaixo de 12, Samsung Xclipse, Linux fora de Intel
Gen12+/NVIDIA-Wayland, Windows ARM64, Firefox no Linux e no Android. E fechar as lacunas de
interoperabilidade que a própria proposta de Interop admite existirem.

### D2 — O óculos vira cliente de URL, e o porteiro muda de lugar

**O que rompe.** O papel do fabricante de óculos como controlador técnico do que se pode ver. Se
Safari no visionOS abre WebXR por padrão e o Quest Browser implementa foveation e space-warp pela
web, a loja do fabricante deixa de ser o único caminho até uma experiência imersiva.

**Por que agora.** Três coisas convergiram entre 2024 e 2026: WebXR habilitado por padrão no
visionOS 2 (em vez de atrás de flag, como no visionOS 1); um modelo de entrada da própria Apple
levado ao W3C e incorporado ao padrão (`transient-pointer`); e a adoção de WebXR como área de foco
do Interop 2026, que transforma "cada um implementa como quer" em placar público. Antes disso,
WebXR era uma promessa cross-platform sem métrica.

**O que ainda falta.** A parte que não é técnica: descoberta. Uma loja resolve, mal ou bem, o
problema de o usuário achar a coisa. Um link não resolve — e nenhuma das evidências levantadas
mostra um mecanismo de descoberta de XR na web funcionando em escala. **Esta é a lacuna mais
provável de matar D2.**

### D3 — A mesma porta de GPU que desenha também infere

**O que rompe.** A necessidade de servidor para IA em produto de mídia, e com ela o custo marginal
por inferência. Transformers.js e WebLLM rodam modelo na página pela mesma API que o three.js usa
para desenhar: "Everything runs inside the browser with no server support".

**Escopo, e a fronteira com o tema 16.** IA local no dispositivo em geral é outro tema. O que entra
aqui é estritamente a parte que compartilha a porta com o 3D: o navegador como runtime único de
renderização e inferência. É isso que faz de um LLM carregado inteiro numa página um sinal sobre a
web como plataforma de execução — e não sobre IA local em si.

**Por que agora.** Compute shader em WebGPU por padrão nos quatro motores, mais ONNX Runtime web e
WebLLM maduros o bastante para expor API compatível com a da OpenAI. O caminho anterior era WASM
em CPU, ordens de grandeza mais lento.

**O que ainda falta.** Três coisas concretas. Primeiro, o próprio Transformers.js ainda adverte na
documentação que WebGPU é experimental em muitos navegadores. Segundo, o custo migrou de inferência
para download: pesos de centenas de megabytes por primeira sessão. Terceiro, memória de GPU — a
mesma cauda de D1, agravada.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A GPU do dispositivo passa a ser alvo de primeira classe de um documento
    efeitos:
      - id: e1
        ordem: 1
        efeito: Experiencias graficas pesadas passam a ser distribuidas por URL, sem instalacao nem revisao de loja
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Equipes de produto passam a tratar o navegador como alvo primario e a build nativa como port
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A formacao em midia interativa desloca o eixo de engine mais loja para web mais link, e o portfolio do aluno vira URL
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A metrica de sucesso de um produto imersivo migra de instalacao para primeira sessao
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Formatos de midia paga se reescrevem em torno de experiencia jogavel sem download
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A GPU do usuario vira recurso computacional enderecavel por qualquer pagina que ele abra
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Navegadores passam a embotar limites e descritores de adaptador por padrao para conter rastreamento por GPU
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Capacidade de hardware passa a ser tratada como dado pessoal em regulacao de privacidade, e a web perde precisao de deteccao de capacidade
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Produtos passam a degradar em faixas de GPU, e nao apenas em faixas de banda
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: A desigualdade digital ganha um eixo de posse de GPU que se sobrepoe ao eixo de conectividade
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: O oculos vira cliente de URL, e o porteiro muda de lugar
    efeitos:
      - id: e3
        ordem: 1
        efeito: Uma experiencia imersiva passa a ser compartilhavel por link e abrivel em oculos de fabricantes diferentes
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: A loja do fabricante deixa de ser o unico caminho de descoberta de experiencia imersiva
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A taxa de plataforma perde a base tecnica que a sustentava e passa a ser disputada apenas em terreno regulatorio
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Museus, escolas e servicos publicos publicam XR sem passar por aprovacao de plataforma
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Acervo imersivo institucional passa a ser enderecavel e arquivavel como pagina, e nao como binario
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: O controle do fabricante sobre o que se pode ver migra da revisao de loja para o default do navegador embarcado
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Permissoes e flags do navegador embarcado viram o ponto de decisao sobre acesso a sensores e a rastreamento de maos
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Disputas sobre acesso a midia imersiva passam a ser travadas sobre configuracao padrao de navegador em vez de politica de loja
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A mesma porta de GPU que desenha tambem infere
    efeitos:
      - id: e5
        ordem: 1
        efeito: Uma pagina executa modelo localmente pela mesma API com que desenha, sem enviar dado ao servidor
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Produtos de midia com IA trocam custo por inferencia por custo de download inicial
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: O modelo de negocio de IA em midia bifurca entre assinatura de nuvem e software local sem telemetria
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Conformidade com protecao de dados passa a ser obtida por arquitetura, deslocando a discussao para a procedencia do modelo
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Instituicoes com dado sensivel adotam a web como plataforma de IA justamente por nao haver servidor no meio
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: O tamanho do download inicial substitui a latencia de rede como gargalo de experiencia
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Cache persistente e entrega de pesos viram infraestrutura de primeira classe do navegador
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A web deixa de ser percebida como ambiente sem estado e passa a ser cobrada como ambiente que guarda coisas
                sinal: fraco
                prazo: 2032
                confianca: baixa
```

### O que o bloco não consegue dizer

**A roda desenha três árvores separadas, e o achado está justamente onde elas se tocam.** `e2.1`
(navegadores embotando descritores de GPU) e `e6.1` (cache de pesos virando infraestrutura) puxam
em direções opostas sobre o mesmo recurso: um exige que a página saiba menos sobre a máquina, o
outro exige que a página guarde mais nela. Quem decide esse conflito não é nem o produto nem o
usuário — é o default do navegador, que é exatamente onde `e4.1` diz que o poder vai parar. As
três disrupções convergem para o mesmo ponto de controle.

**A ordem é causal, não cronológica, e isso aparece nos prazos.** `e4.1` tem o mesmo prazo de
`e4` (2029) porque a migração do controle e a resposta a ela são o mesmo movimento visto de dois
lados. `e3.1.1` está em 2031 não porque a taxa de plataforma vá cair, mas porque é quando a
justificativa técnica dela deixa de existir — a taxa pode perfeitamente sobreviver ao fim da
própria justificativa.

**Uma cadeia foi interrompida por falta de evidência.** Tentei derivar de `e3.1` um efeito de
descoberta ("mecanismos de busca passam a indexar experiências XR"). Não há fonte. Não escrevi.
O registro está na seção 12.

**`e1` tem confiança alta e prazo curto porque já aconteceu em parte.** SuperSplat e `model-viewer`
são a evidência: ferramenta profissional de GPU entregue como página, hoje, sem loja. O que o
efeito prevê é a generalização, não a existência.

## 6. Sinais fracos e wildcards

### Sinais fracos

**O estado persistente de compilação de pipeline.** É o achado mais desconfortável do estudo do
arXiv: o que identifica o usuário não é o que a página pergunta, é o que a máquina lembra de ter
compilado antes. É um sinal fraco porque quase ninguém fora da segurança está olhando para isso, e
mudaria o mapa inteiro porque desloca a discussão de privacidade de "quais dados a API expõe" —
que é resolvível embotando descritores, como o Brave fez — para "que rastro a execução deixa", que
não é.

**Foveation e space-warp chegando ao Quest Browser.** Duas linhas de notas de versão de julho e
agosto de 2026, marcadas como experimentais. São técnicas que existiam para justificar o caminho
nativo em XR. A Meta portá-las para a web é a fabricante removendo, por conta própria, um dos
argumentos técnicos contra a web no seu próprio hardware.

**A ausência de sondagem de shader no rastreamento Tranco.** O mesmo estudo que documenta a
capacidade de fingerprinting mostra que ela não está sendo usada em escala hoje: nas páginas
reais, WebGPU aparece em sondagem de adaptador e código de suporte estático. É um sinal fraco *ao
contrário* — o silêncio atual é o que torna qualquer mudança nesse padrão um alarme confiável.

**A assimetria brasileira do acordo com o CADE.** No Brasil, apps fora da App Store precisam
passar por marketplace registrado; distribuição direta pela web não foi liberada. O canal web fica
sendo, aqui, o único que não passa por marketplace nenhum — não por vitória, mas por omissão do
acordo. Uma assimetria regulatória acidental favorecendo a web é fraca porque é acidental, e
importa porque é a única.

**WebNN como segunda porta.** Candidate Recommendation Draft há oito dias no momento desta
redação. Se consolidar, parte de `e5` deixa de depender de WebGPU e passa a rodar em NPU — o que
enfraqueceria `e2.2` (degradação por faixa de GPU) sem enfraquecer `e5`.

### Wildcards

**Wildcard 1 — Uma fabricante de óculos desabilita WebXR por default.** Não é proibição, e é por
isso que é plausível: basta mover de "ligado" para "atrás de uma flag", como era no visionOS 1, com
justificativa de privacidade — que existe e é legítima, já que WebXR dá acesso a rastreamento de
mãos e a geometria do ambiente. Baixa probabilidade porque contraria o compromisso público do
Interop 2026 e o investimento da própria Meta em foveation na web. Alto impacto porque decapita D2
inteira, e com ela `e3`, `e3.1`, `e3.1.1`, `e3.2` e `e3.2.1` — e prova o ponto de `e4.1` ao mesmo
tempo em que o torna irrelevante. **Não é previsão.** É o cenário que explica por que `e4.1` está
marcado com sinal forte.

**Wildcard 2 — Um vazamento sério de fingerprinting por GPU força o embotamento como padrão em
todos os motores.** Se o que hoje é capacidade documentada virar incidente público documentado, o
caminho já está pavimentado pelo Brave e a resposta seria rápida. Impacto alto e contraintuitivo:
não mataria D1, mas quebraria a detecção de capacidade de que `e2.2` depende — sem saber em que
faixa de GPU está, o produto teria que assumir o pior caso, o que atrasaria toda a cadeia de D1 sem
tocar na disrupção-raiz. **Não é previsão.**

## 7. Contra o próprio mapa

**Qual efeito é só extrapolação linear do presente.** `e1.1` — "navegador como alvo primário,
nativo como port" — é a extrapolação mais nua do mapa. Ele projeta a curva de capacidade técnica
sobre a decisão de produto, como se a segunda seguisse a primeira. Não segue: WebGL 2 é capaz há
anos e a decisão de produto não migrou. **Rebaixei de confiança alta para média na revisão.** Foi
o que também me fez rebaixar `e6.1` de média para baixa: "cache de pesos vira infraestrutura de
primeira classe" é desejo de engenheiro escrito como tendência, sem nenhuma fonte de roadmap de
navegador que o sustente.

**Qual efeito assume velocidade de adoção sem caso comparável.** `e1.2`, a migração de instalação
para sessão como métrica, em 2029. Não conheço um caso em que uma indústria inteira trocou a
métrica-âncora em três anos por disponibilidade técnica. A comparação mais próxima — a web mobile
contra o app nativo, entre 2012 e 2018 — teve capacidade técnica suficiente e a migração não
aconteceu: os aplicativos ganharam. O contra-argumento a favor do efeito é que ali faltava o
gráfico pesado; o contra-argumento contra é que ali faltava, e continua faltando, a descoberta.

**Qual disrupção pode simplesmente não se concretizar.** **D2.** Ela depende de uma premissa que
nenhuma fonte aberta sustenta: a de que existe um caminho de descoberta para XR fora da loja. A
loja não é só um portão, é uma prateleira. Se a descoberta não aparecer, o link continua sendo o
melhor canal para quem *já sabe o que quer* e o pior para todo o resto — e D2 vira uma nota de
rodapé sobre demonstrações e material institucional. Nesse caso caem `e3`, `e3.1`, `e3.1.1`,
`e3.2`, `e3.2.1`; sobrevive `e4`, porque a migração do ponto de controle para o default do
navegador não depende de volume de uso. E D1 e D3 ficam inteiras, porque nenhuma delas depende de
óculos.

**Uma quarta fragilidade, que o roteiro não pede.** O mapa confunde, em `e3.1.1`, "perder a
justificativa técnica" com "perder poder". Taxas de plataforma sobrevivem ao fim de suas
justificativas o tempo todo. O acordo com o CADE é evidência disso e está no próprio documento: a
comissão caiu de 30% para 25% por *ação antitruste*, não por mudança técnica — e a distribuição
direta pela web, que seria a mudança técnica, foi justamente o que ficou de fora no Brasil.
`e3.1.1` está com confiança baixa por isso.

**Que viés entrou aqui.** Dois, e são diferentes. O primeiro é do tema: "o navegador como console"
é uma tese com torcida — a web como plataforma universal é uma narrativa bonita e velha, que já
perdeu uma vez para os aplicativos, em condições parecidas. Escrever este mapa sem reencenar a
torcida exigiu esforço, e o resultado é visível: os efeitos que dão vitória à web estão todos em
confiança média ou baixa, enquanto os que sobreviveriam à derrota (`e2.1`, `e4.1`) estão com sinal
mais forte. O segundo viés é de fonte: a maior parte do que li foi escrita por quem constrói essas
APIs — W3C, blogs de navegador, README de motor. Especificação e changelog são fontes primárias
excelentes para "o que existe" e fontes ruins para "quem vai usar". A única fonte adversarial do
conjunto é o estudo do arXiv, e ele é adversarial só quanto à privacidade. **Não há, neste mapa,
uma única fonte de alguém que tentou publicar um produto na web e desistiu.** É a maior lacuna do
levantamento.

## 8. O que a máquina errou

**Fonte inexistente apresentada com endereço plausível.** Pedi ao modelo a documentação do
`WebGPURenderer` no manual do three.js, e `https://threejs.org/manual/en/webgpurenderer.html`
voltou 404 — assim como `https://developer.apple.com/documentation/visionos/adding-webxr-support-in-visionos`,
para o WebXR no visionOS. Os dois endereços seguem exatamente o padrão de URL de cada site, o que é
o problema: eles são plausíveis *porque* são gerados por analogia, não por memória. Percebi porque
verifiquei antes de citar. Os fatos, no fim, existiam — mas em `threejs.org/docs/pages/` e no blog
do WebKit, não onde o modelo apontou. **Se eu tivesse citado sem abrir, teria escrito um documento
com fatos certos e fontes falsas**, que é o pior desfecho possível: inverificável e aparentemente
sólido.

**Manchete de terceiro apresentada como fato primário.** As buscas trouxeram, com destaque, textos
como "WebGPU Just Hit Baseline in Every Major Browser" e "WebXR Adoption Just Jumped 40%. The
Browser is Coming for Native Apps", de um portal de VR. A desconfiança veio do número: 40% de salto
em adoção, redondo, sem denominador, sem método e sem base declarada. Adoção *de quê* — páginas,
sessões, dispositivos? Não usei nenhum dos dois textos, e a checagem contra o wiki do gpuweb
mostrou que "baseline em todo navegador principal" é verdade no desktop e falso na cauda de
Android e Linux. **O modelo não inventou o número; ele repetiu a manchete de alguém sem marcar que
era manchete** — que é o modo mais comum de um erro entrar num documento bem-intencionado.

**Um efeito plausível que não se sustentou.** A primeira versão da roda tinha, sob `e3.1`, o
efeito "mecanismos de busca passam a indexar e pré-visualizar experiências XR". Ele é bonito,
encaixa perfeitamente na cadeia causal e resolveria sozinho o furo de descoberta que a seção 7
aponta como o risco fatal de D2. É exatamente por isso que ele é suspeito: **um efeito que
conserta o problema do mapa é um efeito que o mapa quer que exista.** Procurei fonte de indexação
de conteúdo WebXR por buscador e não achei nenhuma. Cortei. O registro está na seção 12.

**Um erro que eu cometi, não a máquina.** Comecei a montar o mapa tratando "WebGPU é baseline" como
premissa fechada, porque três fontes diferentes diziam isso. Só o wiki de implementação —
mantido por quem escreve a especificação, e portanto o único com incentivo para ser
desconfortável — trazia o quadro por plataforma que desmonta a generalização. A lição não é sobre
IA: é que a fonte mais precisa costuma ser a menos divulgada.

## 9. Três cenários para 2031

**Provável.** Em 2031 a web venceu no ordinário e não no espetacular. Configurador de produto,
visualizador de acervo, material didático, mapa 3D, apresentação de arquitetura, demonstração de
projeto — tudo isso é link, e ninguém mais discute. Jogo grande continua saindo em loja, e VR de
consumo também, porque descoberta continua sendo o que a web nunca resolveu: o `e3.1` não se
cumpriu e D2 ficou restrita a uso institucional, exatamente como a seção 7 avisou. O que se cumpriu
foi a parte que não dependia de volume: o ponto de controle migrou mesmo para o default do
navegador, e a briga sobre acesso a sensores em XR é uma briga sobre permissão, não sobre política
de loja. A GPU virou faixa de qualidade declarada em requisito de produto, ao lado da banda. No
Brasil, com 65% acessando só por celular e 32% dos domicílios com computador, "roda no navegador"
quer dizer, na prática, "roda no navegador do celular de topo" — e a versão degradada virou a
versão real, para a maioria.

**Desejável.** O mesmo quadro, com três diferenças que não vieram de graça. Primeira: o placar do
Interop virou compromisso público de conformidade em XR, e um óculos que desliga WebXR por default
paga um preço reputacional mensurável — o wildcard 1 continua possível, mas caro. Segunda: o
embotamento de descritores de GPU virou padrão nos quatro motores, e a detecção de capacidade foi
substituída por uma declaração honesta de faixa que o usuário controla; a web perdeu precisão e
ganhou o direito de não ser reconhecida pela placa de vídeo. Terceira, e a que mais custou: alguém
tratou a degradação para hardware modesto como requisito de projeto e não como resto de sprint —
com currículo, ferramenta e exemplo público. Para chegar aqui foi preciso que a pergunta "em que
faixa isso roda" entrasse na pauta de design junto com "como isso fica", e não depois dela.

**Indesejável.** A web ganhou o gráfico e perdeu a página. WebGPU virou requisito de fato para
sites comuns, não só para 3D; o rastreamento por GPU passou de capacidade documentada a prática
corrente, apoiado no estado persistente de compilação que o estudo do arXiv já apontava em 2026 e
que nenhum embotamento de descritor alcança; e o combate a isso produziu navegadores que
desabilitam a API inteira por default, fragmentando a plataforma em duas webs — a completa e a
segura. No XR, o wildcard 1 aconteceu discretamente: WebXR seguiu tecnicamente presente e
comercialmente irrelevante, atrás de uma flag que ninguém liga, e a loja do fabricante nunca
perdeu nada. **Os sinais precoces são três, e todos são observáveis antes de 2029:** aparecer no
rastreamento Tranco atividade de shader durante carregamento de página em sites sem 3D; um
navegador grande mover WebGPU de "ligado" para "atrás de flag"; e um fabricante de óculos publicar
release note que reclassifique WebXR de padrão para experimental.

## 10. O experimento

**O que é.** Uma mesma cena 3D — não trivial, com compute shader — publicada como uma única URL,
sem build nativa, e instrumentada para registrar duas coisas de quem abre: **em que faixa ela
efetivamente roda** (backend escolhido entre WebGPU e o fallback WebGL 2, taxa de quadros
sustentada, se degradou e como) e **o que a página consegue saber sobre aquela máquina** apenas
consultando o adaptador — vendor, arquitetura, device e os limites numéricos, exibidos na tela
para a própria pessoa que abriu. Os dados de hardware ficam visíveis ao usuário e não são enviados
a lugar nenhum; o que sai da máquina, se a pessoa clicar, é só a faixa de desempenho agregada.

**Que pergunta sobre o futuro ele ajuda a responder.** Duas, que são as duas pontas frágeis do
mapa. Primeira: `e2.2` — "produtos passam a degradar em faixas de GPU" — supõe que existam faixas
distinguíveis e que a página consiga identificá-las. Isso é testável numa sala de aula com vinte
máquinas diferentes, e o resultado é um número, não uma opinião. Segunda: `e2.1` supõe que o que a
página vê sobre a GPU seja identificador o bastante para virar problema. Mostrar a cada pessoa,
na tela, o que a página soube dela em um segundo é a diferença entre ler sobre fingerprinting e
ver o próprio.

**Que tecnologia emergente ele usa, e por que não dá com tecnologia madura.** WebGPU, pelo
`GPUAdapterInfo` e pelos limites — que não existem em WebGL, onde há apenas uma string de renderer
—, e por compute shader, que é o que torna a carga pesada o bastante para separar as faixas. Com
WebGL 2, tecnologia madura, o experimento responderia "roda ou não roda" e não responderia nenhuma
das duas perguntas: nem a granularidade de faixa, nem a superfície de identificação.

**O que a turma faz quando testar isso em sala.** Cada pessoa abre a URL no próprio aparelho —
celular incluído, e sobretudo celular, pelo dado da TIC Domicílios. Montamos na hora a distribuição
real da sala: quantos caíram para WebGL 2, quantos rodaram em WebGPU, em que faixa de quadros,
quantos aparelhos são indistinguíveis entre si pelos limites reportados e quantos são únicos na
sala. Duas perguntas para a discussão, e nenhuma delas é técnica: com essa distribuição, que
decisão de projeto você tomaria — e a pessoa cujo aparelho é único na sala aceitaria abrir aquela
página sabendo disso?

**O que me faria mudar de ideia.** Se os limites reportados forem indistinguíveis entre aparelhos
de faixas diferentes, `e2.2` cai — não haveria o que detectar, e a degradação por faixa de GPU
seria fantasia de engenheiro. Se forem distinguíveis mas *iguais entre pessoas diferentes*,
`e2.1.1` enfraquece: capacidade de hardware não seria dado pessoal, seria dado de modelo. E se
praticamente todos os aparelhos da sala caírem para o fallback WebGL 2, então a premissa do
documento inteiro — WebGPU como plataforma-alvo primária — é prematura para o público que a
disciplina tem diante de si, e este mapa deve ser lido como um mapa de 2034, não de 2031.

## 11. Fontes

1. **W3C — WebGPU (Candidate Recommendation Draft, 15/09/2026)** ·
   `https://www.w3.org/TR/webgpu/` · Sustenta o status normativo da especificação, o grupo
   responsável (GPU for the Web WG) e a definição da API. Fonte primária normativa; máxima
   confiabilidade para o que a norma diz, nenhuma para adoção.
2. **W3C — WebXR Device API (Candidate Recommendation Draft, 09/06/2026)** ·
   `https://www.w3.org/TR/webxr/` · Sustenta status, grupo (Immersive Web WG) e escopo da API.
   Fonte primária normativa.
3. **W3C — Web Neural Network API (Candidate Recommendation Draft, 10/09/2026)** ·
   `https://www.w3.org/TR/webnn/` · Sustenta o sinal fraco sobre WebNN e a relação de
   complementaridade com WebGPU (`MLContext` a partir de `GPUDevice`). Fonte primária normativa.
4. **gpuweb — Implementation Status (wiki)** ·
   `https://github.com/gpuweb/gpuweb/wiki/Implementation-Status` · **A fonte mais importante do
   documento.** Sustenta o quadro por navegador e plataforma, incluindo a cauda (Android 12+,
   Samsung Xclipse ~154, Linux por vendor, Windows ARM64, Firefox Linux/Android em nightly).
   Mantida pelo grupo de trabalho; é a única fonte aberta com incentivo a registrar o que ainda
   não funciona.
5. **web.dev — WebGPU is now supported in major browsers** ·
   `https://web.dev/blog/webgpu-supported-major-browsers` · Sustenta as versões por navegador e os
   três blocos de caso de uso (3D, ML, computação). Blog de navegador: confiável para versões,
   promocional quanto ao alcance.
6. **web-platform-tests/interop — issue 1019, WebGPU como focus area do Interop 2026** ·
   `https://github.com/web-platform-tests/interop/issues/1019` · Sustenta a adoção como área de
   foco (status *Done*) e, sobretudo, a admissão de lacunas de interoperabilidade que "podem
   resultar em quebra de sites". Fonte primária de processo.
7. **web-platform-tests/interop — issue 1021, WebXR como focus area do Interop 2026** ·
   `https://github.com/web-platform-tests/interop/issues/1021` · Mesma função para WebXR; sustenta
   D2 e a passagem de "cada um implementa como quer" para placar comparável. Fonte primária de
   processo; genérica quanto às lacunas específicas.
8. **three.js — WebGPURenderer (documentação)** ·
   `https://threejs.org/docs/pages/WebGPURenderer.html` · Sustenta a citação literal sobre o
   fallback automático para WebGL 2 e `forceWebGL`, e o enquadramento como "the new alternative of
   WebGLRenderer". Documentação oficial do motor; não declara recomendação explícita.
9. **PlayCanvas — site oficial** · `https://playcanvas.com/` · Sustenta a autodescrição ("loads
   instantly, on any device"), o suporte a WebGPU com compute shaders mantendo compatibilidade
   WebGL 2, e a menção a WebXR. Material de fornecedor: confiável para o que a empresa afirma
   fazer, não para comparação de mercado.
10. **playcanvas/supersplat — README** · `https://github.com/playcanvas/supersplat` · Sustenta a
    citação literal "runs in the browser, so there's nothing to download or install" e o stack
    (TypeScript, WebGL, WebGPU, PlayCanvas). Fonte primária do projeto.
11. **model-viewer (Google)** · `https://modelviewer.dev/` · Sustenta a redução de 3D interativo e
    AR a um elemento HTML customizado e o uso de WebXR. Documentação de fornecedor.
12. **Hugging Face — Transformers.js (documentação)** ·
    `https://huggingface.co/docs/transformers.js/en/index` · Sustenta "Run Transformers directly in
    your browser, with no need for a server!", o uso de ONNX Runtime, a opção `device: 'webgpu'` e
    — importante para a contestação — a advertência da própria documentação de que WebGPU segue
    experimental em muitos navegadores. Documentação oficial.
13. **mlc-ai/web-llm — README** · `https://github.com/mlc-ai/web-llm` · Sustenta as citações
    "accelerated with WebGPU" e "Everything runs inside the browser with no server support", base
    de D3. Fonte primária do projeto; alegação de desempenho não verificada aqui.
14. **Brave — Improving protections against GPU fingerprinting (v1.93, 13/08/2026)** ·
    `https://brave.com/privacy-updates/38-webgl-webgpu-fingerprinting-protections/` · Sustenta
    `e2.1` com um caso concreto e datado: descritores de adaptador WebGPU esvaziados
    (`vendor`, `architecture`, `device`), strings WebGL unificadas, extensões randomizadas por
    sessão/site/armazenamento, ligado por padrão. Fonte primária do navegador; parte interessada
    em posicionamento de privacidade.
15. **What Browsers Do in the Shaders — A Measurement Study of WebGPU Privacy (arXiv 2606.26412,
    24/06/2026)** · `https://arxiv.org/abs/2606.26412` · Sustenta o sinal fraco sobre estado
    persistente de compilação de pipeline **e** o contrapeso (rastreamento Tranco sem atividade de
    shader observável durante carregamento). Preprint acadêmico com metodologia declarada
    (framework WGPULens); não consta revisão por pares — a única fonte adversarial do conjunto.
16. **Meta Horizon OS — Browser Developer Release Notes** ·
    `https://developers.meta.com/horizon/documentation/web/browser-release-notes/` · Sustenta as
    três entradas de 2026 com data e versão (146.0, 149.1, 150.1) sobre WebGPU, WebXR depth
    projection, space-warp e foveation. Fonte primária do fabricante; o rótulo "experimental" é
    dela própria.
17. **WebKit — WebKit Features in Safari 18.0** · `https://webkit.org/blog/15865/webkit-features-in-safari-18-0/`
    · Sustenta as citações literais sobre `transient-pointer` e hand tracking com permissão no
    visionOS 2. Blog oficial do motor; não confirma explicitamente o "habilitado por padrão", que
    aparece em cobertura secundária e por isso não foi citado como literal.
18. **WebKit — Introducing Natural Input for WebXR in Apple Vision Pro (19/03/2024)** ·
    `https://webkit.org/blog/15162/introducing-natural-input-for-webxr-in-apple-vision-pro/` ·
    Sustenta a origem do `transient-pointer`, o argumento de privacidade ("significativamente menos
    dados sobre o movimento do usuário") e a colaboração no W3C. Fonte primária.
19. **WebKit — WebGPU now available for testing in Safari Technology Preview (21/12/2023)** ·
    `https://webkit.org/blog/17364/webgpu-now-available-for-testing-in-safari-technology-preview/` ·
    Sustenta o marco temporal do "antes": em dezembro de 2023, WebGPU no Safari exigia três feature
    flags. É a linha de base contra a qual o "por que agora" de D1 se mede. Fonte primária.
20. **Comissão Europeia — About the Digital Markets Act** ·
    `https://digital-markets-act.ec.europa.eu/about-dma_en` · Sustenta datas de vigência
    (01/11/2022) e aplicabilidade (02/05/2023) e as obrigações sobre lojas de aplicativos e
    promoção de ofertas fora da plataforma. Fonte institucional primária.
21. **TNW — Apple opens iOS to rival app stores in Brazil** ·
    `https://thenextweb.com/news/apple-brazil-cade-sideloading-alternative-app-stores` · Sustenta o
    acordo com o CADE (homologação em dezembro de 2025, 105 dias, iOS 26.5, prazo de 06/07/2026),
    a estrutura de comissão (25% / 10% / +5%), a multa de até US$ 27 milhões e — o dado decisivo
    para o mapa — que no Brasil não há distribuição direta pela web. Jornalismo especializado, não
    primário: os termos deveriam ser conferidos contra o despacho do CADE antes de qualquer uso
    que não seja ilustrativo.
22. **MobileTime — TIC Domicílios 2025 (Cetic.br, divulgação de 09/12/2025)** ·
    `https://www.mobiletime.com.br/noticias/09/12/2025/tic-domicilios-2025/` · Sustenta a nota
    sobre o Brasil: 65% acessando só por celular, 87% na classe DE, 32% dos domicílios com
    computador (97% na classe A, 10% na DE). Jornalismo especializado reportando pesquisa
    institucional; o PDF primário do Cetic.br foi tentado e não abriu em texto (ver seção 12).

## 12. Anexo — o levantamento bruto

### A entrevista

A skill exige entrevista antes de pesquisar. Esta rodada foi executada sem interlocutor humano
disponível, e os valores abaixo vieram pré-confirmados na abertura da tarefa. **Registro a
anomalia: não houve rodada de perguntas nem confirmação em diálogo.** Os campos foram tratados
como confirmados por delegação explícita, não por aceite em conversa.

| Campo | Valor |
|---|---|
| tema | O navegador como console — 3D e XR sem instalação (tema 15 de 19; família "Criação e plataforma") |
| recorte | A web como plataforma de execução 3D/XR; global, com nota sobre o Brasil |
| horizonte | 2031 |
| público | Quem projeta mídia e interação |
| região | global (+ nota Brasil) |
| objetivo | Mapa de futuro no formato da disciplina, com disrupções-raiz e três ordens de efeito |
| exclusões | O que já é comum em produto de massa (régua da disciplina). Nenhuma outra. |
| viés desejado | neutro |
| profundidade | três ordens |
| modo | a partir de uma inovação/tema, não de um setor |
| ideias óbvias a excluir | as que serviriam para qualquer tema |
| disrupção suspeita a priori | nenhuma declarada — a descoberta era parte da tarefa |
| o que faria mudar de ideia | evidência de que a adoção passou da maioria inicial (Rogers), ou de que a tecnologia só melhora o que existe sem romper nada |

Assunções declaradas por não estarem definidas: `confianca: media` para o mapa como um todo;
`publico_ok: false` (padrão da skill); `data: 2026-09-18` (relógio da máquina no momento da
execução).

### As consultas

**Buscas realizadas (WebSearch):**

1. `WebGPU browser support 2026 Safari Firefox Chrome availability`
2. `WebXR support visionOS Safari Meta Quest Browser 2026`
3. `Interop 2026 focus areas WebXR WebGPU`
4. `three.js WebGPURenderer default release 2026`
5. `CADE Apple anti-steering decisão Brasil 2026 lojas de aplicativos sideloading`
6. `WebGPU fingerprinting privacy concerns browser GPU adapter limits`
7. `TIC Domicílios 2025 cetic.br acesso à internet exclusivamente pelo celular Brasil percentual`
8. `Meta Quest Browser WebGPU support Horizon OS 2026`
9. `Apple WebXR Safari visionOS 2 enabled by default transient-pointer webkit.org`

**Páginas efetivamente abertas (WebFetch):** as 22 da seção 11, mais `https://webgpureport.org/`
(abriu; é um verificador de suporte no navegador de quem acessa e, por natureza, não sustenta
afirmação alguma a partir de um agente sem GPU — **descartada da lista de fontes**).

### Buscas e fetches que não deram em nada

- `https://threejs.org/manual/en/webgpurenderer.html` — **404.** URL plausível gerada por analogia.
  O conteúdo existe em `threejs.org/docs/pages/`. Ver seção 8.
- `https://developer.apple.com/documentation/visionos/adding-webxr-support-in-visionos` — **404.**
  Mesmo padrão de erro. Substituída por dois posts do blog do WebKit.
- `https://doc.babylonjs.com/setup/support/webGPU` — abriu, mas retornou apenas o título
  "Babylon.js docs" sem corpo utilizável (provável renderização por JavaScript). **Consequência:
  Babylon.js aparece no mapa apenas como entidade citada por terceiros (a proposta de Interop
  1019), nunca com afirmação própria.**
- `https://superspl.at/editor` — abriu, mas retornou só o título. Substituída, com sucesso, pelo
  README do repositório `playcanvas/supersplat`.
- `https://cetic.br/media/analises/tic_domicilios_2025_principais_resultados.pdf` — PDF não
  extraível em texto pelo fetch. **Tentativa de ir à fonte primária frustrada**; os números do
  Brasil vieram de cobertura especializada (MobileTime) e estão marcados como tal na seção 11.
  Esta é uma fragilidade real do documento, não uma formalidade.

### Fontes encontradas e deliberadamente descartadas

- **vr.org** — "WebGPU Just Hit Baseline in Every Major Browser…", "WebXR Adoption Just Jumped 40%.
  The Browser is Coming for Native Apps", "WebXR Is Finally Becoming a Real Cross-Browser
  Standard". Apareceram no topo de três buscas diferentes. Descartadas: número de adoção sem
  denominador nem método, e título que anuncia a conclusão que este mapa deveria testar. **Nota de
  método: o fato de a busca as devolver primeiro é exatamente o mecanismo pelo qual o viés de tema
  entra num documento.**
- **techbullion.com** — "The WebXR Revolution: Why 2026 is the Year Browsers Overtake Apps".
  Descartada pelo mesmo motivo, agravado.
- **utsubo.com** (três textos sobre three.js 2026), **svilenkovic.com**, **webo360solutions.com**,
  **testmuai.com**, **threejsresources.com**, **tobias-weiss.org** — conteúdo de blog e de agência
  sem fonte primária declarada. Onde diziam algo verificável (r171 em setembro de 2025 como marco
  do WebGPU pronto para produção no three.js; three.js estável r184 em 16/04/2026), **preferi não
  usar por não ter conferido contra o repositório** — o que significa que o documento está mais
  pobre em datas de motor do que poderia estar.
- **botbrowser.io, scrappey.com, blog.send.win, webbrowsertools.com** — material de fornecedores de
  antidetecção e automação de navegador. São, tecnicamente, praticantes do assunto e saberiam
  coisas úteis; descartados por conflito de interesse direto com a alegação em jogo.
- **Wikipédia** (WebGPU, Three.js, Meta Quest Browser, Meta Horizon OS) — terciária. Útil como
  mapa, não citada.
- **Cobertura secundária do visionOS 2** (uploadvr, roadtovr, 9to5mac, mkai, gadinsider) — todas
  convergem em "WebXR habilitado por padrão no visionOS 2, sem flag". Como o post oficial do WebKit
  não traz essa frase literal, **a afirmação entrou no documento em prosa** (seção 3) e **não como
  citação literal**, e nenhuma dessas páginas foi aberta ou listada como fonte. É uma distinção que
  o leitor precisa enxergar.
- **Fontes sobre o acordo Apple–CADE em português** (macmagazine, cnnbrasil, showmetech, techtudo,
  mixvale, targethd, overcentral, americanbar) — não abertas. Usei apenas a do TNW, e marquei na
  seção 11 que os termos deveriam ser conferidos contra o despacho do próprio CADE. **A fonte
  primária brasileira não foi consultada.**

### Efeitos removidos ou rebaixados na contestação adversarial

| Efeito | O que era | O que aconteceu | Motivo |
|---|---|---|---|
| `e3.1.x` (candidato) | "Mecanismos de busca passam a indexar e pré-visualizar experiências XR" | **Removido** | Zero fonte. Pior: consertava sozinho o furo de descoberta que é o risco fatal de D2 — um efeito que salva o mapa é um efeito suspeito. Ver seção 8. |
| `e1.1` | confiança **alta** | rebaixado para **media** | Extrapola capacidade técnica sobre decisão de produto. WebGL 2 é capaz há anos e a decisão não migrou. |
| `e6.1` | confiança **media** | rebaixada para **baixa** | Nenhum roadmap de navegador consultado menciona entrega de pesos como infraestrutura. É desejo de engenharia escrito como tendência. |
| `e3.1.1` | confiança **media** (rascunho) | mantido em **baixa** | Confunde perder justificativa técnica com perder poder. O contraexemplo está no próprio documento: a comissão caiu por antitruste, não por mudança técnica. |
| Candidato sob D1 | "Engines nativas perdem participação para motores web" | **Removido** | Alegação de mercado sem nenhuma fonte de mercado no levantamento. Teria sido inventar número. |
| Candidato sob D3 | "Modelos de fundação passam a ser distribuídos como assets de página" | **Removido** | Pertence ao tema 16 (IA local no dispositivo), não a este. Fronteira declarada pela disciplina. |
| `e4.1` | sinal **medio** (rascunho) | elevado para **forte** | É o único efeito que sobrevive tanto ao sucesso quanto ao fracasso de D2 — e o wildcard 1 o confirma pelos dois lados. |

### Cadeias interrompidas por falta de evidência

- **Descoberta de XR fora da loja** — nenhuma fonte aberta descreve um mecanismo funcionando. É a
  interrupção mais grave e está declarada em D2, na seção 7 e no cenário provável.
- **Efeito sobre sistemas operacionais** (a 3ª ordem sugerida no enunciado do tema: "se a web volta
  a ser a plataforma universal, o que acontece com os SOs?") — **não derivei nenhum efeito.** Não
  há, no levantamento, uma única evidência de que a distribuição por navegador tenha alterado o
  papel de um sistema operacional em qualquer caso comparável. Escrever esse efeito seria escrever
  ficção com aparência de cadeia causal. **Registro a lacuna em vez de preenchê-la.**
- **Preço e disponibilidade de GPU** — `e2.2` e `e2.2.1` dependem de como o hardware se distribui
  até 2031, e não levantei nenhuma fonte de mercado de hardware. Os dois efeitos estão apoiados
  apenas na TIC Domicílios, que mede acesso, não GPU.

### Limitações declaradas

1. **Nenhuma fonte de fracasso.** Não há no conjunto um só relato de quem tentou publicar produto
   na web e desistiu. O levantamento é, estruturalmente, otimista.
2. **Predomínio de fonte de construtor.** Especificação, changelog e README são ótimos para "o que
   existe" e ruins para "quem usa". A única exceção adversarial é o preprint do arXiv, e só quanto
   à privacidade.
3. **Sem dado de adoção.** Não há, neste documento, um único número de uso — quantas páginas usam
   WebGPU, quantas sessões de WebXR, qual a distribuição de GPU na base instalada. O critério de
   mudança de ideia declarado na entrevista (adoção já ter passado da maioria inicial, em Rogers)
   **não pôde ser testado com as fontes abertas**. Isso deveria reduzir a confiança de todo o mapa,
   e é a razão principal de `confianca: media` e não `alta`.
4. **Nota sobre o Brasil apoiada em fonte secundária**, por falha na extração do PDF do Cetic.br.
5. **Sem revisão por pares na única fonte adversarial** (preprint de junho de 2026).
6. **A entrevista não aconteceu em diálogo**, contrariando a §1 da própria skill; os campos vieram
   pré-confirmados por delegação.
7. **Terceira ordem é especulação graduada.** Todos os dez efeitos de terceira ordem estão em
   `confianca: baixa`, e isso não é modéstia retórica: é a resposta esperada nesse anel, e
   qualquer leitura que os trate como previsão está usando o documento errado.
