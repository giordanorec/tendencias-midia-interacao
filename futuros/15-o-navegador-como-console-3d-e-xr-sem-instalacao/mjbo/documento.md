---
tema: "O navegador como console: 3D e XR sem instalação"
slug: o-navegador-como-console-3d-e-xr-sem-instalacao
autor_login: mjbo
zona_de_interesse: Criação e plataforma
data: 2026-09-17
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global, com nota sobre o Brasil
disrupcoes_raiz: 3
efeitos_ordem_1: 4
efeitos_ordem_2: 7
efeitos_ordem_3: 7
tecnologias_citadas: [WebGPU, WebXR, WGSL, WebGL2, WebNN, WebAssembly, Gaussian Splatting, three.js, Babylon.js, PlayCanvas, SuperSplat, Transformers.js, WebLLM, ONNX Runtime Web, model-viewer]
fontes: 19
confianca: media
experimento: A mesma cena, três portas
skill_usada: futurizacao-mjbo
publico_ok: false
---

## 1. Resumo

Entre junho e novembro de 2025, WebGPU passou a vir ligado por padrão nos quatro
navegadores principais, e com ele o navegador ganhou duas coisas que não tinha: acesso
moderno à GPU e *compute shader* de propósito geral. A consequência imediata não é gráfica
— é de distribuição: editor de Gaussian splat, motor de jogo e modelo de linguagem passam a
ser entregues por URL, sem instalador, sem loja, sem aprovação. Este mapa separa três
rupturas com maturidades muito diferentes: o acesso à GPU como capacidade padrão do
documento web (consumada), a página como runtime de inferência (em curso) e o WebXR como
canal primário de experiência imersiva — que é a parte do título mais frágil, porque a
Apple mantém o módulo `immersive-ar` não funcional em visionOS desde 2024 e WebXR ficou de
fora das vinte áreas de foco do Interop 2026. O mapa aposta que, até 2031, o gargalo do
acesso migra de "ter banda" para "ter GPU" — um problema que no Brasil já tem número: 65%
da população acessa a internet só pelo celular e apenas 32% dos domicílios têm computador.

## 2. O tema

O tema é a web como **plataforma de execução** de gráficos pesados e de experiência
imersiva — não a web como lugar onde se lê sobre 3D, e sim como o lugar onde o 3D roda. O
objeto não é o formato (glTF, splat), nem a captura (isso é tema vizinho), nem a IA local em
geral: é a porta de execução.

Onde encosta em mídia e interação: em quase tudo que envolve entrega. Um projeto de mídia
interativa tem duas decisões independentes — o que a experiência faz e como ela chega ao
usuário. Durante quinze anos a segunda decisão foi estruturalmente enviesada: se a
experiência era pesada, ela virava app, e virar app significava aceitar a loja, a revisão, a
taxa e o sistema operacional como intermediários. WebGPU e WebXR desacoplam as duas
decisões. Uma experiência pode ser pesada e ser um link.

Por que merece mapa de futuro, e não só uma nota técnica: porque a mudança relevante não é
de desempenho, é de **quem arbitra o acesso**. Quando a experiência imersiva é um link,
a pergunta "quem decide o que se pode ver neste óculos" muda de dono — sai do dono da loja e
vai, na melhor hipótese, para ninguém, e na pior, para o fabricante do dispositivo decidindo
por omissão qual módulo do padrão ele habilita. A tensão central deste mapa é essa: a
plataforma técnica abriu; o controle não necessariamente.

Uma ressalva de recorte, declarada porque não foi perguntada: tratei "modelo rodando no
navegador" como parte deste tema apenas enquanto ele usa **a mesma porta** (WebGPU) que o
3D usa. IA local no dispositivo em geral não está aqui.

## 3. Onde isso está hoje

### O que já existe e funciona em produção

**WebGPU está ligado por padrão nos quatro navegadores principais.** O Chrome e o Edge
enviaram na versão 113, em abril de 2023; o Safari em junho de 2025, na versão 26 (macOS
Tahoe 26, iOS 26, iPadOS 26 e visionOS 26); o Firefox em julho de 2025, na versão 141
(Windows), chegando ao macOS Apple Silicon na 145 e a todos os Macs na 147 [1][2]. A frase
"todos os navegadores" merece asterisco: no Firefox, Linux e Android ainda estavam apenas no
Nightly, com a Mozilla planejando ambos para 2026; no Chromium, o Linux só foi habilitado
progressivamente (Intel Gen12+ na v144, NVIDIA sobre Wayland na v147) e o Windows ARM64
seguia atrás de flag [2]. O "por padrão" é sólido no desktop e irregular no resto.

**Os motores adotaram.** O three.js oferece o `WebGPURenderer` — e, importante, a própria
documentação o descreve como "a nova alternativa do `WebGLRenderer`", não como padrão; ele
tenta o backend WebGPU e **cai para WebGL 2** quando não há suporte [5]. O Babylon.js
reescreveu os shaders do núcleo em WGSL nativo, eliminando a camada de conversão [16]. O
PlayCanvas se descreve como runtime "construído sobre WebGL, WebGPU, WebXR e glTF", com
suporte de primeira classe a Gaussian splats e lista de usuários que inclui Arm, BMW, Disney
e King [7].

**Ferramenta de autoria 3D já nasce como URL.** O SuperSplat, editor de Gaussian splats da
PlayCanvas, é MIT, "construído sobre tecnologias web e roda no navegador, não há nada para
baixar ou instalar" [11]. Não é um visualizador: é onde se limpa, corta, anima e publica a
captura.

**Modelo de linguagem inteiro roda na aba.** O WebLLM declara que "tudo roda dentro do
navegador, sem suporte de servidor, acelerado por WebGPU", com Llama, Phi, Gemma, Mistral e
Qwen [14]. O Transformers.js roda por ONNX Runtime, com CPU/WASM por padrão e WebGPU como
opção explícita (`device: 'webgpu'`), e recomenda quantização — `q4`, 4 bits — para caber no
navegador [8]. Vale registrar que a própria documentação do Transformers.js chama a API
WebGPU de "ainda experimental em muitos navegadores" [8].

**A economia da loja já se mexeu, por regulação e não por tecnologia.** A Apple anunciou, em
agosto de 2026, que a partir de 1º de outubro de 2026 a comissão na UE passa a depender do
caminho: 26% com compra in-app, 20% com processamento alternativo, 15% com link externo, e
**5% de Core Technology Commission** para distribuição fora da App Store, substituindo a
taxa por instalação [10]. Não é consequência do WebGPU; é o contexto em que o "link em vez
de app" deixa de ser retórica.

### O que existe como protótipo, spec ou demo, mas não está em produção

**WebXR é padrão vivo, mas não é padrão consolidado.** A WebXR Device API estava em
Candidate Recommendation Draft em 9 de junho de 2026 — ou seja, ainda não é Recomendação —
definindo `inline`, `immersive-vr` e `immersive-ar` [3]. E o dado mais duro deste
levantamento: **nem WebXR nem WebGPU aparecem entre as vinte áreas de foco, nem entre as
quatro investigações do Interop 2026** [4]. O esforço conjunto de Apple, Google, Igalia,
Microsoft e Mozilla para medir interoperabilidade em 2026 simplesmente não olha para essas
duas APIs.

**O módulo AR do WebXR não funciona na Apple.** Em resposta oficial no fórum de
desenvolvedores, um engenheiro do Vision Pro afirmou que "sessões WebXR `immersive-ar` não
são suportadas em visionOS ou iOS, esse recurso da API não está em estado testável, então
mesmo que o flag esteja lá ele é não funcional" — junho de 2024; a discussão seguia sem
resolução em outubro/novembro de 2025 [17]. O flag existe. Ele não faz nada.

**WebGPU e WebXR juntos ainda não são um alvo confiável.** A documentação do Babylon.js é
explícita: WebXR sobre WebGPU é experimental e exige checar
`WebXRSessionManager.IsWebGPUXRSupported` separadamente, porque "suporte a WebGPU sozinho
não implica suporte a WebGPU-XR" [16]. No three.js, o caminho XR com WebGPU passa por uma
opção `multiview` desligada por padrão [5].

**WebNN está a uma camada de distância.** A Web Neural Network API estava em Candidate
Recommendation Draft em 10 de setembro de 2026, propondo acesso de baixo nível a hardware de
inferência — NPU, não só GPU — mantendo o dado no dispositivo; ainda exige duas
implementações independentes e interoperáveis para avançar [9].

### Quem está construindo

W3C Immersive Web WG e GPU for the Web WG (as especificações [3][9]); Google/Chrome
(implementação Dawn, e o argumento de que WebGPU traz "mais de três vezes de melhoria em
inferência de modelos" [6]); Mozilla (wgpu, em Rust); Apple (WebKit, com adoção completa em
WebGPU e adoção parcial e deliberada em WebXR); PlayCanvas (engine MIT + SuperSplat) [7][11];
three.js e Babylon.js [5][16]; Hugging Face (Transformers.js) [8] e MLC (WebLLM) [14]; Meta,
cujo Quest Browser é documentado como alvo WebXR mas cuja página de visão geral recomenda
**detecção de recurso em tempo de execução** em vez de confiar na documentação [12] — um
detalhe pequeno que diz muito sobre o estado do terreno. O ecossistema de ferramentas do
WebXR se concentra em quatro nomes: A-Frame, Babylon.js, PlayCanvas e three.js [18].

### Nota sobre o Brasil

O TIC Domicílios 2025 (CGI.br/Cetic.br), divulgado em dezembro de 2025, mede 157 milhões de
usuários de internet, mas **65% da população acessa exclusivamente pelo celular** (alta de 5
pontos sobre 2024), e apenas **32% dos domicílios têm ao menos um computador** — 97% na
classe A contra 10% na classe DE, e 87% da classe DE acessando só por celular [15]. Isso
importa para este tema por um motivo específico: no Chromium, o WebGPU em Android depende do
fornecedor de GPU e da versão do sistema — ARM/Qualcomm/Intel a partir do Android 12 na
v121, Imagination só a partir do Android 16 na v139, Samsung Xclipse previsto para a v154
[2]. "Sem instalação" e "sem requisito" não são a mesma coisa.

### O que ficou de fora por ser maduro

A régua da disciplina descartou: WebGL e WebGL2 (universais há mais de uma década, e o
próprio alvo do *fallback* dos motores [5]); exportação de Unity para web; `<model-viewer>`
e o caminho AR por Quick Look/Scene Viewer [19]; e motor 3D em JavaScript como categoria —
o three.js é de 2010.

## 4. As disrupções-raiz

Três candidatos passaram no teste de três perguntas da Etapa 3. O registro completo do
teste, incluindo os reprovados, está na Seção 12.

### 4.1 O acesso à GPU vira capacidade padrão do documento web

**O que rompe.** Rompe a premissa de que software gráfico pesado exige instalação. Não é
"WebGL mais rápido": WebGL não tem *compute shader*, e portanto não permitia usar a GPU para
nada que não fosse desenhar. Com WebGPU, a página passa a poder programar a GPU para
computação geral [6]. O que isso invalida, nomeadamente: o instalador como pré-requisito de
ferramenta de autoria 3D (SuperSplat é a prova viva [11]), e o SDK nativo como único caminho
para desempenho gráfico sério.

**Por que agora, e não há cinco anos.** Porque a condição não era técnica, era de cobertura.
Em 2023 o WebGPU existia só no Chromium — publicar para ele era publicar para uma fatia.
Entre junho e novembro de 2025, Safari e Firefox enviaram [1][2], e só então "WebGPU" virou
alvo em vez de aposta.

**O que falta para se concretizar.** Fechar o rodapé da cobertura: Firefox em Linux e
Android, Chromium em Linux fora de Intel/NVIDIA e em Windows ARM64 [2]; e uma medição
confiável de quanto da web realmente tem WebGPU — hoje nem o caniuse acerta (Seção 6).

### 4.2 A página como runtime de inferência

**O que rompe.** Rompe a premissa de que inferência mora no servidor. Um documento web que
carrega um modelo quantizado e responde **sem nenhuma requisição de rede depois do
carregamento** [14] invalida, para uma classe inteira de tarefas — classificação, busca
semântica, transcrição, tradução, sumarização curta —, o modelo de negócio de cobrar por
token processado, e invalida também o argumento de que usar IA implica enviar o dado para
fora.

**Por que agora.** Três coisas mudaram juntas: WebGPU em todos os navegadores principais
[1]; quantização agressiva que cabe no navegador — o Transformers.js documenta `q4`, 4 bits,
como opção de primeira classe [8]; e modelos pequenos de qualidade utilizável (Phi, Gemma,
Qwen na lista do WebLLM [14]). Há cinco anos faltavam as três.

**O que falta.** Honestidade sobre o custo: a conta de inferência não desaparece, muda de
pagador — vai para a bateria e a memória de quem abre a aba. E a própria documentação do
Transformers.js chama o caminho WebGPU de experimental [8]. WebNN, se firmar, é o que
melhora esse custo [9].

### 4.3 WebXR como canal primário de experiência imersiva — **emergente, com ressalva**

**Por que entra com ressalva, e não como disrupção consumada.** Este candidato passa nas
perguntas 1 e 3 do teste, mas **falha na 2**: não consigo nomear uma prática ou modelo de
negócio que ele já tenha invalidado. A evidência vai no sentido contrário. O módulo
`immersive-ar` é não funcional na Apple desde 2024, com o flag presente e inerte [17]; WebXR
não está entre as vinte áreas de foco nem entre as quatro investigações do Interop 2026
[4]; a spec ainda é Candidate Recommendation Draft [3]; e WebGPU-XR é experimental nos dois
motores principais [16][5]. A própria Meta recomenda detecção em tempo de execução em vez de
confiar na documentação de suporte [12].

**O que torna possível que antes não era.** Entregar uma sessão imersiva por URL, sem
empacotamento, sem revisão e sem loja — algo que nenhum SDK nativo permite por construção.

**Por que agora.** Porque o `immersive-vr` passou a vir ligado por padrão no Safari do Vision
Pro e o Quest Browser expõe passthrough, mãos e âncoras — o hardware parou de tratar a web
como cidadã de segunda em pelo menos um dos dois modos.

**O que falta.** Exatamente o que está faltando: `immersive-ar` funcionando fora do
Android/Chrome, governança interoperacional (entrar no Interop), e WebGPU-XR saindo de
experimental. É por isso que este é o ramo do mapa com maior risco de simplesmente não
acontecer — e a Seção 7 leva isso a sério.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O acesso à GPU vira capacidade padrão do documento web
    efeitos:
      - id: e1
        ordem: 1
        efeito: Ferramenta de autoria 3D profissional passa a nascer como URL em vez de instalador, com o projeto vivendo no serviço
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O ciclo de distribuição de software criativo encurta para o ciclo de um site, com versão nova a cada deploy e sem revisão de loja no caminho
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O autor perde a capacidade de congelar a versão da ferramenta que usou, e projetos criativos passam a exigir arquivamento do runtime junto com o arquivo
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Experiências gráficas pesadas passam a ser entregues por link, contornando a loja de aplicativos como ponto de acesso
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: A taxa de plataforma deixa de incidir sobre o acesso e passa a incidir sobre o pagamento, migrando o gargalo econômico da distribuição para o processamento financeiro
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: A curadoria se separa da loja e vira produto vendido por terceiros, restando à loja descoberta e cobrança
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: O requisito de GPU capaz se torna a nova linha de corte de acesso, ocupando o lugar que o requisito de banda ocupava
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Produto web de grande alcance passa a ser projetado em dois andares, e o andar degradado sem GPU vira a experiência padrão real no Sul global
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A página como runtime de inferência, pela mesma porta gráfica
    efeitos:
      - id: e3
        ordem: 1
        efeito: Funções de IA de baixo custo como classificação, busca semântica, transcrição e tradução saem do servidor e passam a rodar na aba
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: O custo marginal de inferência dessas funções vai a zero para quem publica e passa a ser pago em bateria e memória por quem usa
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Surge disputa pública sobre consentimento de uso de recursos do dispositivo, em moldes semelhantes à reação contra mineração de criptomoeda em aba
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Aplicações que lidam com dado sensível passam a anunciar processamento local como atributo de produto, verificável por qualquer pessoa na aba de rede do navegador
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Autoridades de proteção de dados passam a tratar processamento estritamente local no navegador como categoria distinta, com obrigações de transferência menores
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: WebXR como canal primário de experiência imersiva (emergente, com ressalva)
    efeitos:
      - id: e4
        ordem: 1
        efeito: A experiência imersiva de baixo compromisso como demo, showroom, portfólio e aula migra para a web, enquanto a de alto compromisso permanece nativa
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: O fabricante do óculos arbitra o que a web pode fazer no dispositivo ao escolher quais módulos do WebXR habilita, sem precisar proibir nada explicitamente
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A web imersiva se fragmenta por fabricante e o desenvolvedor volta a testar dispositivo por dispositivo, como se fazia com navegadores nos anos 2000
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Camadas de compatibilidade nos motores escondem a fragmentação, e o motor volta a ser a plataforma efetiva de quem publica, no lugar do navegador
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: O ganho de não instalar se converte em dependência de três runtimes, e a promessa de plataforma universal se realiza na prática como oligopólio de motor
                sinal: fraco
                prazo: 2032
                confianca: baixa
```

O que o bloco não diz, e precisa ser dito em prosa:

**As três disrupções não têm o mesmo peso, e a estrutura da roda esconde isso.** Os ramos de
`e1` e `e2` descem de uma ruptura consumada; o ramo de `e4` desce de uma aposta. Um leitor
que olhe só o YAML vê quatro efeitos de primeira ordem lado a lado, com `sinal` e `prazo`
parecidos, e conclui que estão igualmente fundados. Não estão. Esse é o defeito do formato,
não do tema — e é a razão pela qual o ESTUDO.md desta skill registra a Análise de Impacto
Cruzado como o método que faltaria aqui: nomear que `e4.1`, `e4.1.1`, `e4.2` e `e4.2.1`
existem **condicionados** a 4.3 se concretizar, em vez de deixar a dependência implícita.

**`e4.1` é o único efeito de segunda ordem com sinal `forte`, e isso não é otimismo.** É o
contrário. O sinal é forte porque o efeito **já está acontecendo**: a Apple não precisou
proibir o WebXR AR, bastou deixar o flag presente e não funcional por dois anos [17]. O
mecanismo de controle que o mapa antecipa já está em operação, com nome e data.

**Cortei três candidatos a efeito por não sobreviverem à regra de parada da Etapa 4** — estão
listados na Seção 12, com o motivo.

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — a ausência no Interop 2026.** Que WebGPU e WebXR não estejam em nenhuma das
vinte áreas de foco nem nas quatro investigações [4] é um sinal quase invisível, porque é uma
ausência: não há notícia sobre coisa que não foi escolhida. Mas significa que a convergência
entre navegadores nessas duas APIs, em 2026, é voluntária e não medida por um placar público.
Se isso mudar em 2027, a confiança de todo o ramo `e4` sobe.

**Sinal fraco 2 — o ecossistema não sabe medir a si mesmo.** O caniuse reporta 87,35% de uso
global com suporte a WebGPU e, na mesma página, descreve o Firefox como tendo WebGPU
desativado por padrão [13] — o que contradiz o wiki do próprio grupo de trabalho, que
registra o envio na v141 [2]. Não é detalhe: se a infraestrutura de medição que toda equipe de
produto consulta está defasada, a decisão de "posso publicar em WebGPU?" está sendo tomada
com número errado, para menos. A adoção pode estar sendo subestimada pelo próprio mercado.

**Sinal fraco 3 — WebNN em Candidate Recommendation.** [9] Se firmar, o alvo deixa de ser a
GPU e passa a ser a NPU, e o custo de bateria que sustenta `e3.1` cai. É o sinal que, se
crescer, mais amortece o efeito mais politicamente explosivo deste mapa.

**Sinal fraco 4 — a detecção em tempo de execução como conselho oficial.** A documentação da
Meta recomenda checar recurso por recurso antes de oferecer sessão imersiva, em vez de
confiar na tabela de suporte [12]. Isso é a fragmentação de `e4.1.1` aparecendo já como
prática recomendada, seis anos antes do prazo que atribuí a ela.

**Wildcard — uma fabricante de óculos desabilita WebXR por padrão em um dispositivo novo,
alegando risco de privacidade do passthrough.** Impacto: alto — derruba 4.3 inteira e com ela
o ramo `e4`. Probabilidade: **baixa, e por um motivo específico que não é o esperado**. Não é
que as fabricantes não queiram; é que a versão forte do movimento é cara — atrai o DMA, que
já forçou a Apple a reestruturar comissões e abrir distribuição fora da loja [10] — enquanto
a versão fraca é gratuita e já está em uso: manter o flag presente e não funcional, sem nunca
anunciar bloqueio nenhum [17]. Um wildcard cuja versão diluída já se realizou tende a nunca
precisar da versão forte.

**Wildcard 2 — navegadores passam a exigir permissão explícita do usuário para acesso a
WebGPU, como fazem para câmera e microfone**, depois de um caso público de página drenando
bateria com inferência não consentida. Impacto: alto — atinge simultaneamente `e2` e `e3`,
porque transforma "sem instalação" em "com prompt", e prompt é atrito. Probabilidade: baixa,
porque a régua histórica dos navegadores para API de desempenho nunca foi o prompt — WebGL
nunca pediu permissão, e a resposta padrão a abuso de recurso tem sido *throttling* de aba em
segundo plano e telemetria, não consentimento explícito.

## 7. Contra o próprio mapa

**1. Qual efeito é só extrapolação linear do presente: `e1`.** "Ferramenta de autoria nasce
como URL" é a continuação de uma curva de quinze anos que o WebGPU não iniciou. Google Docs,
Figma, Canva e Photoshop web já haviam feito exatamente isso sem precisar de acesso moderno à
GPU. O que o WebGPU muda é o **teto de peso** da ferramenta que cabe nessa curva, não a
direção da curva. Chamar `e1` de consequência da disrupção é, em boa medida, atribuir a uma
API de 2025 um movimento que começou em 2010 — é "mais do mesmo, com mais polígonos", não
mudança de natureza. Mantive o efeito porque o SuperSplat é evidência real [11], mas ele
deveria ser lido com `confianca: alta` e **relevância baixa**, e o formato não tem campo para
isso.

**2. Qual efeito assume velocidade de adoção que nunca se viu: `e2`, com prazo 2028.** O caso
comparável é o WebGL, e ele é devastador para minha estimativa: WebGL chegou a todos os
navegadores principais entre 2011 e 2013 e, treze anos depois, o jogo de massa continua
nativo e continua na loja. Disponibilidade de API não produz migração de modelo de negócio na
mesma década — produz, no máximo, um nicho. O segundo comparável é ainda mais desfavorável: a
PWA foi anunciada em 2015 com a promessa literal de "app sem loja", teve suporte amplo, e não
deslocou a loja de aplicativos em onze anos. Se aplico a velocidade real desses dois casos,
`e2` não é 2028; é 2034 ou nunca, e o que acontece até 2031 é um nicho de experiências de
baixo compromisso — o que, aliás, é exatamente o que `e4` descreve. Deixei `e2` em 2028 com
`confianca: media`, e isso é provavelmente o erro mais defensável de apontar neste mapa.

**3. Qual disrupção pode simplesmente não se concretizar: a 4.3, o WebXR como canal
primário.** E note que a evidência contrária não é hipotética — ela já está no presente: dois
anos de `immersive-ar` não funcional na Apple [17], ausência do Interop 2026 [4], spec em
CR Draft [3], WebGPU-XR experimental nos dois motores principais [16][5]. **O que sobra do
mapa se ela cair:** sobra quase tudo. As disrupções 4.1 e 4.2 são independentes dela, e com
elas ficam `e1`, `e2`, `e3` e os seis efeitos que descem desses três — onze dos dezoito nós.
O que cai é o ramo `e4` inteiro, quatro nós. Ou seja: **o tema perde o "XR" do título e
continua de pé.** Isso é um resultado desconfortável, porque o título da disciplina põe 3D e
XR no mesmo fôlego, e o levantamento diz que eles estão em maturidades muito diferentes.

**4. Que viés entrou aqui, e onde exatamente.** O viés declarado foi "neutro", e neutro na
lente não protege de enviesado no corpus. O recorte do tema chegou a mim a partir de uma
varredura de repositórios — PlayCanvas, three.js, supersplat, lovr, gpu.js, model-viewer —
isto é, de projetos cuja existência **pressupõe** que a web é o alvo certo. Nenhum deles vai
publicar um README explicando por que a web não serve. Onde isso inflou o mapa: em `e1` e
`e2`, onde "sem instalação" aparece como virtude autoevidente, sem nenhuma fonte de quem
escolheu deliberadamente **não** ir para a web — nenhum estúdio de jogo, nenhuma equipe de
Unreal, nenhum time que tenha medido e desistido. Um corpus honesto teria pelo menos uma
fonte de recusa; o meu não tem nenhuma. E há um segundo viés, meu como skill: a Seção 4.3
existe com ressalva porque o teste da Etapa 3 me obrigou a escrevê-la; sem esse teste, a
tentação de listar as três disrupções lado a lado — porque fica mais bonito e mais simétrico
— era considerável.

## 8. O que a máquina errou

Três erros concretos, todos pegos durante esta rodada, e todos por confronto entre fontes —
não por desconfiança genérica.

**1. Aceitei, numa primeira passagem, a afirmação de que o `WebGPURenderer` já é o renderer
padrão do three.js.** A busca devolveu blogs secundários afirmando que o WebGPU virou padrão
nos motores em 2026, e a afirmação é atraente porque fecha a narrativa. A documentação oficial
do three.js diz o contrário, com todas as letras: o `WebGPURenderer` é "a nova alternativa do
`WebGLRenderer`" e cai para WebGL 2 quando não há suporte [5]. Se eu tivesse citado o blog em
vez de abrir a doc, o mapa teria afirmado uma consolidação que não existe — e a diferença
entre "alternativa com fallback" e "padrão" é justamente a diferença entre emergente e maduro,
que é o critério central desta skill.

**2. Ia tratar "WebGPU disponível" e "WebGPU+WebXR disponível" como a mesma cobertura.** A
frase-síntese do tema — "WebGPU dá acesso à GPU, WebXR liga o óculos" — sugere duas peças que
se encaixam. A documentação do Babylon.js desfaz o encaixe: "suporte a WebGPU sozinho não
implica suporte a WebGPU-XR", e é preciso checar `IsWebGPUXRSupported` separadamente [16]; no
three.js, o caminho multiview de XR vem desligado por padrão [5]. Era um erro de **categoria**,
não de fato: eu estava somando duas coberturas que não se somam, e isso teria inflado o ramo
`e4` inteiro.

**3. Citei um número de adoção antes de notar que ele se contradizia na própria página.** O
caniuse reporta 87,35% de uso global e, no mesmo documento, descreve o Firefox como tendo
WebGPU desativado por padrão [13] — enquanto o wiki do grupo de trabalho registra o envio na
v141 [2]. Percebi por divergência entre duas fontes que eu havia aberto, não por achar o
número estranho: 87,35% é um número perfeitamente plausível, e teria passado sozinho. Em vez
de descartá-lo ou usá-lo, movi-o para a Seção 6 como sinal fraco — porque a contradição diz
mais do que qualquer dos dois valores diria.

Um quarto ponto, de processo e não de conteúdo: **uma fonte primária falhou e eu quase a
substituí em silêncio.** O PDF de resultados do TIC Domicílios 2025 (cetic.br) voltou como
binário ilegível. A tentação era usar os números que a busca havia resumido, como se eu os
tivesse lido. Em vez disso, abri a cobertura do MobileTime [15] e cito **essa** fonte, com o
que ela é: reportagem sobre a pesquisa, não a pesquisa. A falha está registrada na Seção 12.

## 9. Três cenários para 2031

**Provável.** Em 2031, "o navegador como console" se realizou pela metade — e foi a metade
menos glamourosa. Praticamente toda ferramenta de autoria 3D de faixa média é uma URL; o
editor de splat, o configurador de produto, o visualizador de projeto e o simulador de ensino
não têm mais instalador, e ninguém estranha. Modelos pequenos rodando na aba viraram rotina
para busca, transcrição e tradução, e "não sai do seu navegador" virou selo de produto. O jogo
de massa, no entanto, continua nativo e continua na loja, porque a loja nunca foi só
distribuição — era descoberta, cobrança e confiança, e nada disso migrou. Em XR, a web ocupou
o degrau de baixo: a demo, o portfólio, o showroom, a aula. O degrau de cima segue nativo, e
segue assim menos por limite técnico do que porque cada fabricante habilita um subconjunto
diferente do WebXR e testar em todos custa mais do que publicar em duas lojas. E há uma
divisão que ninguém planejou: existe a web com GPU e a web sem GPU, e a segunda é a que a
maior parte do mundo usa.

**Desejável.** Em 2031, o mesmo cenário acima, com três diferenças que não exigiram milagre
nenhum. Primeira: WebGPU e WebXR entraram no Interop em algum ano entre 2027 e 2029, e existe
um placar público de interoperabilidade — o que não obriga ninguém, mas torna a omissão
visível e datada, que é o que o `immersive-ar` não teve. Segunda: o módulo AR do WebXR
funciona nos três principais fabricantes, porque a combinação de pressão regulatória e de
custo reputacional de manter um flag inerte por sete anos ficou maior que o benefício.
Terceira, e a que mais importa para quem projeta: a degradação graciosa virou prática
profissional normal, e não gambiarra — um projeto de mídia interativa nasce com dois andares
declarados desde o briefing, e o andar sem GPU é projetado, não sobrado. O que precisaria ser
feito para chegar lá: nada de tecnológico. Propor as duas APIs ao Interop (o processo é
aberto e público [4]), e, do lado de quem projeta, tratar "funciona sem GPU" como requisito de
acessibilidade e não como concessão.

**Indesejável.** Em 2031, "sem instalação" cumpriu-se ao pé da letra e não significou o que
prometia. A loja continua cobrando, só que na saída — a taxa migrou do acesso para o
pagamento, e quem publica por link paga uma comissão de plataforma sobre a transação sem
receber nem descoberta nem curadoria em troca. Em XR, cada fabricante habilita o subconjunto
que lhe convém e nenhum precisou proibir nada; publicar para a web imersiva passa
obrigatoriamente por um dos três motores que escondem a fragmentação, e "plataforma universal"
virou um oligopólio de runtime com a etiqueta de aberto. E a linha de corte se mudou para
dentro do dispositivo: quem tem GPU capaz vê a experiência; quem não tem vê a versão reduzida,
e como não há instalação, também não há mais o aviso honesto de "requisitos mínimos" que
existia na era do instalador — a exclusão virou silenciosa. **O sinal precoce disso, hoje:**
não é nenhum anúncio. É o flag de `immersive-ar` que existe e não funciona há dois anos, sem
nunca ter havido uma proibição para noticiar [17], somado ao fato de que ninguém está medindo
interoperabilidade dessas APIs [4]. Controle exercido por omissão não gera manchete — e por
isso é o que mais devemos vigiar.

## 10. O experimento

**O que é: "A mesma cena, três portas".** Publicar uma única URL contendo (a) uma cena 3D em
Gaussian splat renderizada por WebGPU com *fallback* declarado para WebGL 2, (b) um modelo
pequeno quantizado rodando por WebGPU via WebLLM ou Transformers.js, que responde perguntas
sobre a cena **sem nenhuma requisição de rede após o carregamento**, e (c) um botão de sessão
`immersive-vr` via WebXR. A página não é a experiência: a página é o instrumento. Ela registra,
em tabela pública e anônima, para cada dispositivo que a abre — obteve adaptador WebGPU ou caiu
para WebGL2; conseguiu ou não sessão imersiva, e qual módulo; tempo até o primeiro quadro;
tempo até a primeira resposta do modelo; memória pedida; e queda de bateria em cinco minutos.

**Que pergunta responde.** A pergunta central do efeito `e2.2`: *"sem instalação" é mesmo
universal, ou é universal apenas na classe de dispositivo de quem constrói?* É a pergunta que
o mapa faz e que nenhuma das dezenove fontes responde, porque nenhuma delas mede dispositivo
real — medem suporte declarado por navegador, que é outra coisa.

**Que tecnologia emergente usa, e por quê.** *Compute shader* via WebGPU para a inferência
local, e WebXR para a sessão. Não dá para fazer com tecnologia madura, e a razão é precisa:
WebGL não tem *compute shader*, então a parte (b) — o modelo respondendo sem rede — é
literalmente impossível no caminho maduro. A parte (c) tampouco: WebXR é a única porta para
sessão imersiva sem app.

**O que a turma faz em sala.** Cada pessoa abre a URL no próprio celular e no próprio
computador, e a tabela se preenche ao vivo no projetor — uma linha por dispositivo, com marca,
sistema e resultado. Quem tiver óculos, testa a sessão imersiva; quem não tiver, testa só as
duas primeiras portas. A discussão que interessa não é a média: é a **distribuição** e os
outliers. A aula termina com a turma escrevendo, junto, o requisito de "andar de baixo" que
um projeto de mídia interativa precisaria declarar para não excluir as linhas que falharam.

**O que me faria mudar de ideia sobre o mapa.** Se mais de 80% dos dispositivos da turma —
incluindo os celulares mais baratos presentes — obtiverem adaptador WebGPU e rodarem o modelo
em tempo tolerável, o efeito `e2.2` (GPU como nova linha de corte) perde base e deve sair da
roda ou cair para `sinal: fraco, confianca: baixa`; o mapa fica mais otimista e o cenário
indesejável perde seu terceiro parágrafo. Se, ao contrário, a maioria cair para WebGL2 e o
modelo só rodar nos aparelhos caros, então a disrupção 4.1 é real e a 4.2 é privilégio — e o
mapa inteiro precisa ser reescrito com a desigualdade de hardware no centro, e não como efeito
de segunda ordem. E um terceiro resultado, que eu não sei prever: se o tempo até o primeiro
quadro for **pior** no caminho WebGPU do que no WebGL2 em aparelhos médios — por custo de
compilação de shader —, então "sem instalação" tem um custo de partida que este mapa ignorou
inteiramente, e isso seria uma falha de levantamento, não de projeção.

## 11. Fontes

Dezenove fontes de fato abertas e lidas nesta rodada. Uma vigésima falhou e está registrada na
Seção 12.

1. **web.dev — "WebGPU is now supported in major browsers"** · `https://web.dev/blog/webgpu-supported-major-browsers` — Sustenta as datas e versões de envio do WebGPU em Chrome/Edge (113), Firefox (141/145) e Safari (26), e a lista de plataformas pendentes (Linux, Android no Firefox). Confiabilidade: alta como registro de envio (é o blog do próprio implementador Chrome), com viés esperado de otimismo sobre adoção.
2. **GPU for the Web WG — Implementation Status (wiki gpuweb)** · `https://github.com/gpuweb/gpuweb/wiki/Implementation-Status` — Sustenta o detalhe por plataforma e fornecedor de GPU, inclusive os recortes de Android por vendor (v121/v139/v154) e Linux por driver. Confiabilidade: alta; é a fonte mantida pelo grupo de trabalho e a mais granular disponível.
3. **W3C — WebXR Device API, Candidate Recommendation Draft, 9 jun. 2026** · `https://www.w3.org/TR/webxr/` — Sustenta o status normativo (CR Draft, não Recomendação) e os três modos de sessão. Confiabilidade: alta; é a norma.
4. **web-platform-tests/interop — 2026/README.md** · `https://github.com/web-platform-tests/interop/blob/main/2026/README.md` — Sustenta a lista completa das 20 áreas de foco e 4 investigações do Interop 2026, e portanto a ausência de WebGPU e WebXR. Confiabilidade: alta; é o repositório canônico do projeto conjunto dos cinco fornecedores.
5. **three.js — documentação do WebGPURenderer** · `https://threejs.org/docs/pages/WebGPURenderer.html` — Sustenta que o WebGPURenderer é alternativa e não padrão, o *fallback* automático para WebGL 2, e que o `multiview` para WebXR vem desligado. Confiabilidade: alta; documentação oficial do projeto.
6. **Chrome for Developers — Overview of WebGPU** · `https://developer.chrome.com/docs/web-platform/webgpu/overview` — Sustenta o argumento de compute/ML no navegador e a alegação de "mais de três vezes" em inferência. Confiabilidade: média-alta; é documentação técnica oficial, mas a alegação de desempenho é do fornecedor e não vem com metodologia.
7. **playcanvas/engine (GitHub)** · `https://github.com/playcanvas/engine` — Sustenta a descrição do runtime sobre WebGL/WebGPU/WebXR/glTF, o suporte de primeira classe a Gaussian splats, a licença MIT e a lista de usuários corporativos. Confiabilidade: média-alta para fatos técnicos; a lista de usuários é material promocional e não foi verificada caso a caso.
8. **Hugging Face — documentação do Transformers.js** · `https://huggingface.co/docs/transformers.js/index` — Sustenta a execução no navegador via ONNX Runtime, o WebGPU como opção explícita, a quantização `q4`, e a ressalva de que a API WebGPU é "ainda experimental em muitos navegadores". Confiabilidade: alta; documentação oficial que inclui as próprias ressalvas.
9. **W3C — Web Neural Network API, Candidate Recommendation Draft, 10 set. 2026** · `https://www.w3.org/TR/webnn/` — Sustenta o status, o propósito (inferência em hardware dedicado mantendo o dado no dispositivo) e os requisitos para avançar. Confiabilidade: alta; é a norma.
10. **Apple Newsroom — "Apple announces changes for apps in the European Union", ago. 2026** · `https://www.apple.com/newsroom/2026/08/apple-announces-changes-for-apps-in-the-european-union/` — Sustenta as comissões por caminho (26/20/15/10%) e a Core Technology Commission de 5% para distribuição web, vigentes a partir de 1º out. 2026. Confiabilidade: alta para o conteúdo da política (é o anunciante); baixa como interpretação do mercado.
11. **playcanvas/supersplat (GitHub)** · `https://github.com/playcanvas/supersplat` — Sustenta que um editor completo de Gaussian splat roda inteiramente no navegador, sob MIT, sem nada a baixar. Confiabilidade: alta; o código é público e a afirmação é verificável abrindo o editor.
12. **Meta Horizon — WebXR Overview** · `https://developers.meta.com/horizon/documentation/web/webxr-overview/` — Rendeu menos do que eu esperava: **não** enumera os recursos suportados, e recomenda detecção em tempo de execução em vez de confiar na documentação. Cito exatamente por isso. Confiabilidade: alta para o que de fato diz; inútil para a tabela de suporte que eu procurava.
13. **caniuse — WebGPU** · `https://caniuse.com/webgpu` — Usada como **sinal fraco de contradição**, não como dado: reporta 87,35% de uso global e descreve o Firefox como desativado por padrão, o que conflita com [2]. Confiabilidade: baixa nesta rodada, e é esse o ponto.
14. **mlc-ai/web-llm (GitHub)** · `https://github.com/mlc-ai/web-llm` — Sustenta que um LLM roda inteiramente no navegador, sem servidor, acelerado por WebGPU, e a lista de famílias de modelos. Confiabilidade: alta para a capacidade; **não** traz requisitos de hardware, e essa ausência é relevante para o efeito `e3.1`.
15. **MobileTime — "TIC Domicílios 2025: 163 milhões de brasileiros acessaram a internet"** · `https://www.mobiletime.com.br/noticias/09/12/2025/tic-domicilios-2025/` — Sustenta os números brasileiros: 65% acessando só por celular, 32% dos domicílios com computador, 97% na classe A contra 10% na DE. Confiabilidade: média — é **reportagem sobre** a pesquisa do CGI.br/Cetic.br, não a pesquisa; usada porque o PDF primário falhou (Seção 12).
16. **Babylon.js — documentação de suporte a WebGPU** · `https://github.com/BabylonJS/Documentation/blob/master/content/setup/support/webGPU.md` — Sustenta a reescrita dos shaders em WGSL nativo e, sobretudo, a advertência de que "suporte a WebGPU sozinho não implica suporte a WebGPU-XR". Confiabilidade: alta; documentação oficial, e a advertência contraria o interesse comercial de quem a escreve, o que a reforça.
17. **Apple Developer Forums, thread 756850 — "[WebXR] Support for AR module in VisionOS 2.x"** · `https://developer.apple.com/forums/thread/756850` — Sustenta a declaração de engenheiro da Apple (jun. 2024) de que `immersive-ar` é não funcional em visionOS e iOS mesmo com o flag presente, e que a questão seguia aberta em out./nov. 2025. Confiabilidade: alta para a declaração oficial; o restante da thread é relato de desenvolvedores e foi lido como tal.
18. **immersiveweb.dev** · `https://immersiveweb.dev/` — Sustenta que o ferramental de WebXR se concentra em A-Frame, Babylon.js, PlayCanvas e three.js. Confiabilidade: média-alta; é o site de divulgação do grupo Immersive Web, portanto parte interessada.
19. **google/model-viewer (GitHub)** · `https://github.com/google/model-viewer` — Aberta para checar se o caminho AR de `<model-viewer>` deveria entrar como maduro. Rendeu pouco: a página não detalha os backends de AR. Confirmou apenas a existência e o posicionamento do componente. Confiabilidade: alta para o que diz; insuficiente para o que eu queria.

## 12. Anexo — o levantamento bruto

### 12.1 Etapa 1 — respostas da entrevista, como recebidas

- Horizonte: 2031.
- Público: quem projeta mídia e interação.
- Recorte: global, com uma nota sobre o Brasil.
- Descartado de início: o que já é comum em produto de massa (a régua da disciplina); nenhuma outra exclusão. Confirmado explicitamente como "nenhuma outra".
- Disrupção suspeita: nenhuma — descobrir.
- Viés: neutro.
- Ideias óbvias a excluir: as que servem para qualquer tema.
- O que faria mudar de ideia: evidência de que a adoção já passou da maioria inicial (Rogers), ou de que a tecnologia não rompe nada (só melhora o que existe).
- Profundidade: três ordens. Modo: a partir de uma inovação/tema, não de um setor.
- Zona de interesse: Criação e plataforma. Login: mjbo.

Nota de processo: a Etapa 1 é bloqueante por desenho da skill. Nesta rodada não havia
interlocutor para perguntar; as respostas vieram integralmente no despacho, todos os itens
obrigatórios (1, 3, 4, 5) incluídos. Registro isto porque a condição de parada foi satisfeita
por fornecimento prévio, não por entrevista — e uma sessão futura precisa saber a diferença.

### 12.2 Etapa 2 — buscas realizadas

Buscas: "WebGPU browser support 2026 Safari Firefox Chrome status"; "WebXR support visionOS
Safari Meta Quest Browser 2026"; "Interop 2026 focus areas announcement web-platform-tests";
"three.js WebGPURenderer default release 2026 r1xx"; "Apple App Store commission Digital
Markets Act external purchase link 2026 web apps"; "SuperSplat playcanvas browser gaussian
splat editor open source"; "Babylon.js WebGPU engine production 8.0 release notes"; "Safari
visionOS 26 WebXR enabled by default feature flag immersive-ar support"; "TIC Domicílios 2025
acesso à internet exclusivamente pelo celular Brasil percentual cetic.br".

**Buscas que não deram no que eu procurava:**
- A busca sobre adoção de WebXR devolveu, em primeiro lugar, artigos (`vr.org`) afirmando
  salto de 40% na adoção e que "WebXR finalmente virou padrão cross-browser graças ao Interop
  2026". **Não usei nenhum deles.** Abri o README do Interop 2026 [4] e a afirmação é falsa:
  WebXR não está lá. Registro como caso de fonte secundária que teria sustentado o mapa na
  direção errada, com aparência de notícia técnica.
- A busca sobre three.js devolveu blogs (`utsubo.com`, `vr.org`) afirmando que o WebGPU virou
  padrão no three.js. A documentação oficial [5] diz "alternativa". Não usei os blogs.
- Não consegui fonte primária que medisse **dispositivos reais** com e sem WebGPU (em oposição
  a navegadores com suporte declarado). Essa ausência é o que motivou o experimento da Seção 10.
- Não busquei, e deveria ter buscado: fonte de quem avaliou publicar em WebGPU/WebXR e
  desistiu. Está declarado como viés no item 4 da Seção 7.

**Falha de extração registrada:** o PDF
`https://cetic.br/media/analises/tic_domicilios_2025_principais_resultados.pdf` — fonte
primária desejada para a nota sobre o Brasil — retornou binário ilegível. Em vez de citar os
números vindos do resumo de busca como se fossem lidos da pesquisa, usei a cobertura do
MobileTime [15] e declarei o que ela é. Os números brasileiros deste mapa, portanto, estão a
uma fonte de distância do dado primário.

### 12.3 Etapa 3 — o teste de disrupção aplicado, incluindo os reprovados

**Aprovado — acesso à GPU como capacidade padrão do documento web.**
(1) Torna possível *compute shader* no navegador, que o WebGL não tinha — inferência local e
GPGPU sem instalação. (2) Invalida: instalador como pré-requisito de ferramenta de autoria 3D;
SDK nativo como único caminho de desempenho. (3) Por que agora: cobertura, não capacidade —
Safari jun./2025, Firefox jul./2025 [1][2]. **Passa nas três. Disrupção-raiz.**

**Aprovado — a página como runtime de inferência.**
(1) Torna possível um documento que responde sem rede após o carregamento [14]. (2) Invalida:
cobrança por token para classificação/busca/transcrição; a premissa de que usar IA implica
enviar dado. (3) Por que agora: WebGPU universal + quantização de 4 bits [8] + modelos
pequenos utilizáveis. **Passa nas três. Disrupção-raiz.**

**Aprovado com ressalva — WebXR como canal primário.**
(1) Sim: sessão imersiva por URL, sem empacotamento. (2) **Não consigo nomear prática ou
modelo já invalidado** — evidência aponta o contrário [17][4][3][16]. (3) Sim: `immersive-vr`
por padrão no Vision Pro, Quest Browser com passthrough/mãos/âncoras. **Passa em 1 e 3, falha
em 2 → emergente, entra com ressalva explícita.**

**Reprovado — WebGL / WebGL2 como plataforma 3D.** Falha em (1): não torna possível nada que
antes não fosse; e é o alvo do *fallback* dos motores modernos [5]. Tecnologia madura. Fica na
Seção 3.

**Reprovado — exportação de Unity/Unreal para web.** Falha em (1) e em (3): existe há anos, e
o "por que agora" só produz "ficou melhor". Melhoria incremental.

**Reprovado — `<model-viewer>` e AR por Quick Look/Scene Viewer.** Falha em (1): é o caminho
maduro de AR na web, anterior e paralelo ao WebXR [19]. Madura.

**Reprovado — Gaussian Splatting como formato.** Não é deste tema (é o tema 10, captura 3D).
Entra aqui só como carga que o navegador passou a conseguir renderizar [7][11], não como
disrupção deste mapa.

**Caso limítrofe que quase entrou e não entrou — "o navegador substitui o sistema
operacional".** Falha na regra de parada da Etapa 4 antes mesmo do teste: exige encadear
suposições independentes (que XR consolide na web, que o modelo de segurança do navegador
absorva periféricos, que fabricantes não reajam). Está na Seção 6 como wildcard e na 12.4 como
efeito cortado.

### 12.4 Etapa 4 — efeitos cortados, e por quê

- **"Lojas de aplicativos deixam de existir até 2031."** Cortado: não é consequência
  rastreável de nenhuma das três disrupções; exige supor que descoberta e cobrança também
  migram, o que é uma segunda aposta independente. A versão sobrevivente e mais modesta é
  `e2.1.1` (a loja se reduz a descoberta e cobrança).
- **"O sistema operacional perde relevância como camada de distribuição."** Cortado pela mesma
  regra: duas suposições empilhadas (que XR consolide na web E que periféricos sejam absorvidos
  pelo modelo de segurança do navegador). A pergunta de 3ª ordem do enunciado do tema aponta
  para cá; o método manda deixá-la como wildcard, e é o que fiz.
- **"Todo dispositivo passa a ter GPU capaz até 2031."** Cortado: é previsão de mercado de
  hardware, não efeito derivável das disrupções. O que sobrevive é o inverso —
  `e2.2`, a desigualdade como efeito.
- **"O navegador vira o alvo primário de jogos AAA."** Cortado na Etapa 4 e sepultado na
  Etapa 5, item 2: contradiz treze anos de evidência do WebGL.
- **"A IA local no navegador mata a API de inferência paga."** Reduzido, não cortado: a versão
  larga é falsa (modelos grandes não cabem na aba); a versão que ficou, `e3`, é restrita a
  funções de baixo custo. A diferença entre as duas versões é a diferença entre um efeito e um
  slogan.

### 12.5 Contagens declaradas, conferidas à mão

Disrupções-raiz: 3 (duas plenas, uma emergente com ressalva). Efeitos de 1ª ordem: 4 — `e1`,
`e2`, `e3`, `e4`. Efeitos de 2ª ordem: 7 — `e1.1`, `e2.1`, `e2.2`, `e3.1`, `e3.2`, `e4.1`,
`e4.2`. Efeitos de 3ª ordem: 7 — `e1.1.1`, `e2.1.1`, `e2.2.1`, `e3.1.1`, `e3.2.1`, `e4.1.1`,
`e4.2.1`. Total de nós: 18. Todos os 7 efeitos de 3ª ordem estão em `confianca: baixa`, que é o
resultado esperado pela Etapa 4 da skill — e não um sinal de qualidade, apenas a ausência de um
sinal de alerta. Fontes abertas: 19; falhas de extração: 1 (PDF do Cetic.br).

Confiança declarada do mapa inteiro: **média**. O ramo de `e1`/`e2` tem chão documental sólido
mas prazo provavelmente otimista (Seção 7, item 2); o ramo de `e3` é o mais bem fundado e o
menos explorado; o ramo de `e4` é o mais frágil e é o que dá nome ao tema.
