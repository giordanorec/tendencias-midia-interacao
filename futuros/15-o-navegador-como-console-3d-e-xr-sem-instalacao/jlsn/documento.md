---
tema: "O navegador como console: 3D e XR sem instalação"
slug: o-navegador-como-console-3d-e-xr-sem-instalacao
autor_login: jlsn
zona_de_interesse: Sistemas de Informação
data: 2026-09-18
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: Global, com nota sobre o Brasil
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 10
efeitos_ordem_3: 10
tecnologias_citadas: ["WebGPU", "WebXR", "WGSL", "WebNN", "WebAssembly", "Three.js WebGPURenderer", "PlayCanvas", "Babylon.js", "SuperSplat", "3D Gaussian Splatting", "Progressive Web App", "Trusted Web Activity / Bubblewrap", "Digital Goods API", "Transformers.js", "WebLLM", "ONNX Runtime Web", "model-viewer", "WebGL 2"]
fontes: 12
confianca: media
experimento: "Link contra loja — a mesma cena por três portas"
skill_usada: futurizacao-jlsn
publico_ok: false
---

## 1. Resumo

O navegador deixou de ser um lugar onde o 3D é tolerado e virou uma plataforma de GPU de primeira classe. WebGPU está em Candidate Recommendation Draft no W3C e disponível em Chrome, Edge, Opera, Samsung Internet e Safari 26 (macOS, iOS, iPadOS e visionOS), com cobertura medida perto de 87% dos usuários no caniuse; o Safari 26.2 passou a permitir WebXR renderizado por WebGPU no visionOS, fechando o circuito entre óculos e web. A consequência imediata é de distribuição, não de pixel: experiência imersiva vira URL, e URL não passa por aprovação de loja nem paga comissão. A mesma porta que desenha também calcula — WebGPU compute e a WebNN, em CR desde janeiro de 2026, colocam inferência de modelo dentro da aba. Se isso se sustentar, o gargalo do acesso migra de "ter internet" para "ter GPU decente", e o poder de curadoria migra da loja para quem controla o motor do navegador e o que o óculos deixa a web tocar. O mapa aposta que a disputa de 2031 não é técnica: é sobre quem tem direito de bloquear um link.

## 2. O tema

O objeto aqui é a web como **plataforma de execução** de 3D e XR — não como vitrine de conteúdo 3D. A diferença importa: exportar um jogo Unity para WebGL é usar a web como saída; escrever contra WebGPU e WebXR como alvo primário é tratar o navegador como console, com a GPU do usuário acessível diretamente e o óculos como periférico padrão.

Onde encosta em mídia e interação: no ponto exato em que a *fricção de acesso* deixa de existir. Toda a gramática de produto imersivo dos últimos dez anos foi desenhada em torno de um custo — instalar, esperar, dar permissão, aceitar 2 GB. Quando a experiência abre em três segundos a partir de um link em mensagem, muda o formato (peças curtas, descartáveis, encadeáveis), muda a métrica (não há "instalação"), muda a autoria (quem publica não pede licença) e muda a cadeia de valor (não há intermediário obrigatório entre criador e público).

Merece um mapa porque o efeito interessante não está na camada gráfica, que é incremental, mas nas camadas que ela derruba por tabela: loja, sistema operacional, e a própria definição de "aplicativo".

## 3. Onde isso está hoje

**O que existe e funciona.** WebGPU é Candidate Recommendation Draft do W3C, com snapshot de 15 de setembro de 2026, e expõe rendering e compute sobre GPUs modernas em vez de emular o modelo OpenGL ES do WebGL. A tabela do caniuse registra suporte em Chrome 113+, Edge, Opera 99+, Chrome for Android, Samsung Internet 24+ e Safari/iOS 26+, somando cerca de 87% dos usuários — com Firefox ainda atrás de flag por padrão na medição consultada. Do lado dos motores, o `WebGPURenderer` do three.js já é o caminho documentado: tenta WebGPU e cai sozinho para WebGL 2 quando não há suporte, com `forceWebGL` disponível para forçar o contrário. Isso é o detalhe decisivo — a migração deixou de exigir aposta, porque o fallback é automático.

No XR, o marco recente é o WebKit: o Safari 26.2 no visionOS passou a suportar **WebXR sobre WebGPU**, depois de a sessão WebXR ter nascido no Safari 18 usando WebGL. O Vision Pro já habilitava WebXR por padrão desde o visionOS 2, com entrada por olhar e pinça. No Horizon OS da Meta, a documentação oficial trata PWA como "uma opção de distribuição, não uma categoria de conteúdo à parte": o site continua acessível pela URL, e o empacotamento via Bubblewrap/Trusted Web Activity serve para quem quiser também estar na loja — com compras dentro do app liberadas para PWAs WebXR imersivos desde junho de 2025, via Digital Goods API.

**O que existe e ainda não funciona bem.** O módulo de Realidade Aumentada do WebXR não está habilitado no visionOS, o que trava o caso AR justamente na plataforma que mais vende o discurso espacial. A inferência no navegador anda mais rápido que a especificação: a WebNN teve Candidate Recommendation atualizada em 22 de janeiro de 2026 e segue em CRD em setembro, isto é, ainda sem duas implementações independentes passando a suíte de testes — na prática, quem roda modelo hoje usa WebGPU compute por baixo (ONNX Runtime Web, Transformers.js, WebLLM), e a própria documentação do Transformers.js avisa que o caminho é experimental fora do Chromium. E o desempenho é real, mas assimétrico: o estudo *Llamas on the Web* (UC Santa Cruz e Microsoft Research, maio de 2026), avaliando 10 modelos em 16 dispositivos de 8 fabricantes, mostra ganho de 54–69% de throughput de decode sobre WebLLM e Transformers.js e redução de 29–33% de pico de memória — mas perde de 21–51% no prefill e apanha 10× de um backend CUDA nativo na mesma etapa. Ou seja: a aba já conversa; a aba ainda demora a ler.

**Quem está construindo.** Khronos/W3C GPU for the Web e o grupo Immersive Web escrevem as regras; Google (Chrome), Apple (WebKit/Safari), Meta (Quest Browser) e Samsung implementam; three.js, Babylon.js e PlayCanvas fornecem a camada de autoria. O sinal mais concreto de que a web já é ambiente de *produção*, e não só de consumo, é o SuperSplat, da PlayCanvas: editor de Gaussian Splats sob MIT que roda inteiramente no navegador, com histórico de undo, formato LOD em streaming para cenas acima de dez milhões de gaussianas e nada enviado ao servidor até o usuário publicar.

## 4. As disrupções-raiz

### 4.1 WebGPU vira alvo primário, e o 3D pesado perde o requisito de instalação

**O que rompe.** Quebra o pressuposto de que experiência gráfica séria exige binário local. Não é "a web ficou mais rápida": é que o modelo de custo do 3D deixou de incluir a etapa de aquisição. O paradigma derrubado é o do *aplicativo como unidade de distribuição de mídia interativa*.

**Por que agora e não há cinco anos.** Em 2021 WebGL era a única porta, presa a um modelo de GPU de 2007, sem compute shader de propósito geral, e cada motor tratava a web como alvo secundário. O que mudou: a especificação estabilizou em CRD, o suporte cruzou os quatro navegadores principais — incluindo Safari em macOS, iOS e visionOS —, e o three.js passou a oferecer troca de renderizador com fallback automático, o que remove o risco de adotar. Adoção sem risco é o que faz base instalada virar plataforma.

**O que falta acontecer.** Firefox habilitado por padrão em todas as plataformas; um caso de sucesso comercial grande o suficiente para virar referência de vendas (o equivalente ao que *Fortnite* foi para o Unreal); e ferramentas de depuração de GPU no navegador no nível do que existe em engine nativa.

### 4.2 O óculos passa a tratar a web como cidadã de primeira classe

**O que rompe.** Quebra o controle da fabricante de hardware sobre o catálogo. Enquanto o único caminho para um headset era a loja da fabricante, ela decidia o que existia. Com WebXR renderizado por WebGPU no Safari do visionOS, e com a Meta documentando explicitamente que o PWA é opcional e o site permanece acessível pela URL, o catálogo do óculos passa a ser, por construção, a web inteira.

**Por que agora.** A sequência é curta e datada: WebXR por padrão no visionOS 2; WebXR nascendo em WebGL no Safari 18; e, no Safari 26.2, WebXR podendo usar WebGPU. O terceiro passo é o que importa, porque antes dele a web no óculos era uma versão pior do nativo — a mesma cena, com metade do orçamento gráfico. Paridade de pipeline é o que transforma "dá para fazer" em "vale a pena fazer".

**O que falta acontecer.** O módulo AR do WebXR habilitado no visionOS; acesso web a rastreamento de mão, âncoras e passthrough sem divergência entre fabricantes; e alguma garantia — regulatória ou contratual — de que a fabricante não pode desligar isso por decisão de produto.

### 4.3 A mesma porta que desenha também calcula: o navegador como console de IA

**O que rompe.** Quebra a premissa de que inferência mora no servidor e o cliente é terminal. Se um modelo carrega e responde dentro da aba, a requisição de rede some — e com ela some o log, a cobrança por token e o ponto onde se aplica política de uso.

**Por que agora.** WebGPU compute deu acesso genérico à GPU pela primeira vez na web; a WebNN chegou a Candidate Recommendation em janeiro de 2026 com operadores de transformer, API de compartilhamento de buffer (MLTensor) e modelo abstrato de seleção de dispositivo, mirando NPU além de GPU; e a literatura já mede o resultado em dispositivos reais, não em demo — o *Llamas on the Web* cobre 16 aparelhos de 8 fabricantes e declara suporte a 177.691 modelos compatíveis contra 400 do WebLLM.

**O que falta acontecer.** WebNN com duas implementações independentes passando a suíte, para sair de CR; resolver o prefill, que é onde a web ainda apanha de 10× para CUDA; e um formato de distribuição de pesos com cache que não force baixar gigabytes por aba.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: WebGPU vira alvo primário e o 3D pesado perde o requisito de instalação
    efeitos:
      - id: e1
        ordem: 1
        efeito: Experiência imersiva passa a ser publicada como URL, não como pacote, e o tempo entre descobrir e usar cai para segundos
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A loja de aplicativos deixa de ser porta obrigatória e vira canal opcional de descoberta e cobrança
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A comissão de 30% deixa de ser preço de acesso e passa a ser preço de serviço, e precisa se justificar contra o link gratuito
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Surge um formato curto de mídia imersiva, descartável e encadeável, desenhado para durar menos que uma instalação
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: A métrica de sucesso em XR abandona o download e adota tempo de permanência e reenvio, alinhando XR à economia de atenção da web
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A produção 3D migra para ferramentas que rodam no próprio navegador, sem estação de trabalho dedicada
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O ensino de mídia interativa deixa de depender de laboratório com máquina instalada e passa a depender só de link e conta
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Cursos de 3D em países sem parque de máquinas instalado deixam de ser inviáveis por infraestrutura e passam a ser limitados por banda e GPU do aluno
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: O requisito de hardware do usuário sobe: a aba passa a exigir GPU capaz, não só conexão
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: A exclusão digital ganha um segundo eixo — quem tem link mas não tem GPU vê a versão degradada da mesma URL
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Acessibilidade gráfica entra na pauta regulatória e de compra pública como requisito, ao lado de leitor de tela e legenda
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: O óculos passa a tratar a web como cidadã de primeira classe
    efeitos:
      - id: e4
        ordem: 1
        efeito: O catálogo acessível de um headset deixa de ser a loja da fabricante e passa a ser, por construção, a web inteira
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: A curadoria de plataforma perde poder de veto e se converte em recomendação, que pode ser ignorada por quem chega pelo link
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A moderação de conteúdo imersivo se desloca da aprovação prévia da loja para a remoção posterior por hospedagem e busca, com o mesmo regime da web
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: A fabricante de hardware descobre que o navegador embarcado é sua alavanca de controle restante e passa a tratá-lo como decisão estratégica
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Reguladores estendem a disputa sobre motores de navegador do celular para o headset, tratando o óculos como gargalo de acesso
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: O custo de publicar em XR cai a ponto de campanha, portfólio e material didático imersivo virarem rotina, não projeto
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: O volume de conteúdo XR cresce muito mais rápido que o número de headsets, e a maior parte passa a ser consumida em tela plana
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: XR deixa de ser um meio e vira um modo de exibição opcional da mesma peça, como o modo escuro — projeta-se uma vez, entrega-se em dois estados
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A mesma porta que desenha também calcula — o navegador como console de IA
    efeitos:
      - id: e6
        ordem: 1
        efeito: Aplicações passam a rodar modelo dentro da aba, sem requisição de rede e sem custo por token para quem publica
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O log de uso desaparece: quem publica deixa de saber o que foi perguntado, e quem regula deixa de ter onde auditar
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A política de uso de IA migra do servidor para o cliente e vira, na prática, inaplicável sem cooperação do fabricante do navegador
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: Mundo 3D e agente generativo passam a compartilhar a mesma GPU, o mesmo processo e o mesmo orçamento de memória
        sinal: fraco
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O design de experiência imersiva vira alocação explícita de orçamento entre renderizar e pensar, e essa escolha aparece na tela
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Emerge uma disciplina de projeto que trata desempenho como matéria expressiva — o que a peça deixa de desenhar para poder responder
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: O navegador passa a expor perfil de hardware fino o bastante para identificar máquina, e vira superfície de rastreamento
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: Fabricantes de navegador limitam deliberadamente a informação de adaptador e o desempenho fica menos previsível para quem projeta
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

O bloco YAML exagera a limpeza. Três coisas ele não consegue dizer.

A primeira é que os três ramos não são independentes: o efeito e3 (exigir GPU) corrói o efeito e1 (acesso por link). São a mesma disrupção puxando em sentidos opostos — a web ganha alcance ao dispensar instalação e perde alcance ao exigir silício. O saldo depende de qual curva anda mais rápido, e nenhuma das duas é controlada por quem projeta.

A segunda é que os prazos carregam confianças muito diferentes. Onde escrevi 2027 e 2028 há especificação publicada e implementação medida. Onde escrevi 2031 há apenas plausibilidade sistêmica — em particular todo o ramo institucional (e1.1.1, e4.1.1, e4.2.1) depende de decisões humanas discretas, do tipo que não se extrapola de tendência.

A terceira é que a roda foi desenhada a partir da web vencendo. A assimetria do ramo e7 — memória e GPU disputadas entre desenhar e pensar — é o único lugar onde a limitação física aparece, e ela é subestimada: uma cena densa e um modelo de 4 GB não cabem juntos no orçamento de um celular de 2031 sem alguém ceder.

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — o descompasso entre especificação e uso.** A WebNN está em CR, sem duas implementações completas, enquanto Transformers.js, WebLLM e ONNX Runtime Web já rodam modelo em produção via WebGPU compute. Quando o uso corre à frente da norma, o que se padroniza depois tende a ratificar o improviso. Vale observar se a WebNN será adotada ou contornada.

**Sinal fraco 2 — o editor antes do player.** O SuperSplat não é uma peça de consumo: é ferramenta de autoria com undo, LOD em streaming e processamento local. Ferramenta profissional migrando para a aba é sinal mais forte que demo bonita, porque profissional só troca de ambiente quando o novo é melhor, não quando é possível.

**Sinal fraco 3 — a loja abraçando o rival.** A Meta documentando PWA como "opção de distribuição" e liberando compra dentro do app por Digital Goods API é uma loja aceitando web como conteúdo de primeira classe. Isso pode ser abertura ou captura: se o caminho com pagamento for o empacotado, a URL vira demo e a loja continua onde estava.

**Sinal fraco 4 — a regulação chegando por fora.** A obrigação de abrir o iOS a motores alternativos de navegador, na União Europeia e no Reino Unido, é uma disputa sobre celular — mas fixa o precedente de que controlar o motor é controlar o acesso. O headset é o próximo objeto natural dessa mesma regra.

**Wildcard (baixa probabilidade, alto impacto).** Uma fabricante de headset desliga o WebXR por padrão, justificando com segurança, conforto ou proteção de menores — sessão imersiva pela web passa a exigir ativação manual em menu escondido, ou some. Isso não é ilegal em lugar nenhum hoje, é reversível por atualização de firmware, e derruba de uma vez todo o ramo da disrupção 4.2. O sinal precoce não seria um anúncio: seria uma nota de release marcando WebXR como "experimental" de novo, ou uma limitação de taxa de quadros para sessões web que não existe para o nativo.

**Segundo wildcard, de sinal contrário.** Um título de grande público nasce exclusivamente como URL, sem versão nativa, e funciona. Se isso acontecer antes de 2029, o mapa acelera dois anos de uma vez, porque o argumento comercial deixa de precisar ser feito.

## 7. Contra o próprio mapa

**Qual efeito é apenas extrapolação linear do presente.** O e5 — "publicar em XR vira rotina" — é a extrapolação mais preguiçosa aqui. É o mesmo raciocínio que previu que a barateamento do vídeo faria toda empresa produzir vídeo: o custo de produção caiu e o gargalo simplesmente mudou de lugar, para talento, distribuição e atenção. Não há evidência nas fontes consultadas de que a queda do custo de publicação em XR produza demanda; há evidência de que ela produz oferta. O efeito derivado e5.1 (conteúdo XR consumido em tela plana) é, na verdade, o reconhecimento disfarçado de que esse ramo pode ser só inflação de catálogo.

**Qual efeito assume velocidade de adoção irreal.** O ramo e6/e6.1 — modelo na aba, sem log, sem custo por token — assume até 2030 uma coisa que o próprio estudo que citei desmente parcialmente: o prefill em WebGPU apanha 10× de um backend CUDA nativo, e a distribuição de pesos ainda exige baixar gigabytes. Além disso, "custo zero para quem publica" é contabilidade enviesada: o custo não sumiu, foi transferido para a bateria e o silício do usuário, que é exatamente o tipo de transferência que o usuário percebe e rejeita. Colocar 2028 no e6 é otimista; 2030 seria mais honesto, e mesmo assim para nichos.

**Qual disrupção-raiz pode não se concretizar e derrubar o mapa inteiro.** A 4.2 — o óculos tratando a web como cidadã de primeira classe. Ela é a mais frágil das três, e não por razão técnica: tecnicamente já aconteceu. É frágil porque depende inteiramente de uma decisão de produto que pode ser revertida por atualização, e porque o incentivo econômico da fabricante aponta na direção contrária. Note ainda que a disrupção já vem capenga: o módulo AR do WebXR não está habilitado no visionOS, ou seja, a plataforma mais barulhenta sobre computação espacial mantém o caso de uso mais valioso fora do alcance da web. Se a 4.2 cair, sobra um mapa sobre 3D no navegador — real, mas bem menos interessante, porque perde justamente a camada onde há um dono para destronar.

**Qual foi o viés da análise.** Três, declarados. Primeiro, viés de plataforma aberta: o mapa trata "web vence loja" como desfecho desejável e por isso enxerga as evidências a favor com mais nitidez que as contrárias — o caso simétrico, em que a loja absorve a web via PWA empacotado e a URL vira folheto, está subexplorado. Segundo, viés de fonte: boa parte da evidência vem de quem implementa (WebKit, three.js, PlayCanvas, Meta) ou especifica (W3C), atores com interesse direto em declarar a plataforma pronta; não encontrei dado independente de adoção por desenvolvedor ou por usuário final, e a lacuna está refletida na confiança "media" do documento. Terceiro, viés geográfico: o recorte é global e a nota sobre o Brasil abaixo é assumida, não medida — busquei os indicadores do TIC Domicílios no Cetic.br e a página consultada lista as séries sem expor os números, então declaro a inferência como inferência.

**Nota sobre o Brasil, declarada como assunção.** O ponto que o mapa sugere para o Brasil é o eixo e3: um parque de dispositivos concentrado em celulares intermediários, onde o navegador é frequentemente a única porta de software instalada. Isso torna o "sem instalação" desproporcionalmente valioso aqui — e o "precisa de GPU" desproporcionalmente excludente. Os dois efeitos incidem sobre a mesma população, e qual prevalece é questão empírica que este documento não resolve.

## 8. O que a máquina errou

## 9. Três cenários para 2031

* **Provável:** a web ganha a camada de acesso e perde a camada de monetização. Publicar 3D e XR por URL é o padrão para peça curta, campanha, portfólio, material didático e ferramenta de autoria; a loja continua sendo onde está o dinheiro e onde ficam os títulos longos, agora cobrando pelo pagamento e pela descoberta em vez de cobrar pela permissão. A maior parte do conteúdo XR produzido é consumida em tela plana. O modelo na aba existe, funciona para tarefas pequenas e não substituiu o servidor.

* **Desejável:** a paridade técnica se mantém e vira garantia, não cortesia. Para chegar lá é preciso: o módulo AR do WebXR habilitado em todas as plataformas de headset; regra explícita — regulatória ou de consórcio — de que a fabricante não pode degradar ou desabilitar a sessão web por decisão unilateral, estendendo ao óculos o que já se discute para o motor de navegador no celular; e uma disciplina de projeto que trate o fallback para WebGL 2 como entrega de primeira classe, não como consolação, para que o eixo GPU não substitua o eixo banda como nova linha de exclusão.

* **Indesejável:** a web vira demo. O caminho com pagamento, desempenho pleno e recursos completos é o PWA empacotado na loja; a URL entrega uma versão limitada, marcada como experimental e com quadros capados. Formalmente a web está aberta; na prática, quem quer ser visto empacota. O sinal precoce disso não é um anúncio de bloqueio — é uma nota de release que rebaixa WebXR a "experimental" depois de tê-lo entregue estável, ou um limite de desempenho aplicado a sessões web e não às nativas. Quem projeta deve monitorar changelog de firmware de headset, não sala de imprensa.

## 10. O experimento

**Nome:** Link contra loja — a mesma cena por três portas.

**A pergunta que responde.** O "sem instalação" é vantagem real de experiência ou só vantagem de discurso? E onde exatamente a web perde: no carregamento, no desempenho, ou na permissão?

**O que construir.** Uma única cena — sugestão: um splat capturado pela própria turma, editado no SuperSplat, que já roda no navegador e não exige instalar nada — publicada em três portas: (1) URL simples, servida estaticamente, com `WebGPURenderer` do three.js e fallback automático para WebGL 2; (2) a mesma URL empacotada como PWA via Bubblewrap e instalada no headset; (3) uma versão nativa mínima de comparação, ou, se não houver tempo, o registro do processo de submissão como custo medido em horas. Instrumentar as três com os mesmos carimbos: tempo do clique ao primeiro quadro, quadros por segundo sustentados, pico de memória, número de permissões pedidas e número de toques até estar dentro da experiência.

**Tecnologia.** WebGPU com fallback WebGL 2, WebXR, three.js ou PlayCanvas, SuperSplat para a captura, Bubblewrap para o empacotamento, e `performance.now()` mais a API de memória do navegador para a telemetria. Nada disso exige licença paga.

**Como a turma testa em sala.** Cada pessoa abre as três portas no próprio aparelho — celular, notebook e, para quem alcançar, o headset — e anota duas coisas: o tempo até estar dentro, e onde desistiria se não estivesse sendo obrigada. O dado interessante não é a média, é a dispersão: quantos aparelhos caíram para WebGL 2 sem que a pessoa percebesse, e quantos perceberam.

**Qual resultado mudaria minha ideia.** Se a URL simples entregar desempenho comparável ao empacotado na maioria dos aparelhos e o tempo até o primeiro quadro ficar abaixo de cinco segundos, o mapa se confirma e o cenário desejável ganha tração. Mas se a dispersão for grande — se um terço da turma cair silenciosamente para a versão degradada —, então o efeito e3 é mais forte que o e1, o eixo GPU já é uma linha de exclusão hoje, e a tese central deste documento precisa ser reescrita do ponto de vista de quem tem o aparelho pior, não de quem publica.

## 11. Fontes

1. https://www.w3.org/TR/webgpu/ — Especificação WebGPU do W3C, Candidate Recommendation Draft de 15/09/2026. Sustenta o estado normativo da API e a diferença de modelo em relação ao WebGL. Fonte primária, máxima confiabilidade.
2. https://caniuse.com/webgpu — Tabela de compatibilidade: Chrome 113+, Edge, Opera 99+, Samsung Internet 24+, Safari/iOS 26+, cobertura somada de 87,35%; Firefox desabilitado por padrão. Sustenta a alegação de suporte cruzado. Agregador amplamente usado, confiabilidade alta com margem de medição.
3. https://webkit.org/blog/17640/webkit-features-for-safari-26-2/ — Blog oficial do WebKit: "Now with Safari 26.2 on visionOS, WebXR supports WebGPU". Sustenta a disrupção 4.2 e a cronologia Safari 18 → 26.2. Fonte primária do implementador.
4. https://threejs.org/docs/pages/WebGPURenderer.html — Documentação do `WebGPURenderer`: tenta WebGPU, cai para WebGL 2, com `forceWebGL` disponível. Sustenta o argumento de adoção sem risco. Fonte primária do motor.
5. https://www.uploadvr.com/visionos-2-apple-vision-pro-webxr/ — WebXR habilitado por padrão no visionOS 2 com entrada por olhar e pinça. Sustenta a cronologia do Vision Pro. Veículo especializado, confiabilidade média-alta.
6. https://developers.meta.com/horizon/documentation/web/pwa-overview/ — Documentação oficial da Meta: PWA como "opção de distribuição, não categoria de conteúdo à parte", modos 2D e imersivo, Bubblewrap e Trusted Web Activity. Sustenta o argumento sobre loja e URL. Fonte primária da plataforma.
7. https://www.uploadvr.com/webxr-apps-on-quest-meta-horizon-store-can-now-use-in-app-payments/ — 26/06/2025: PWAs WebXR na Horizon Store passam a usar compra dentro do app via Digital Goods API; a matéria não informa o percentual de comissão. Sustenta o sinal fraco 3 e delimita o que não se sabe. Veículo especializado.
8. https://www.w3.org/TR/webnn/ — Web Neural Network API, Candidate Recommendation Draft de 10/09/2026, inferência acelerada em CPU, GPU e hardware de ML dentro do sandbox do navegador. Sustenta a disrupção 4.3. Fonte primária.
9. https://arxiv.org/html/2605.20706v1 — Levine et al. (UC Santa Cruz e Microsoft Research), "Llamas on the Web", 20/05/2026: 16 dispositivos, 8 fabricantes, 10 modelos; +54–69% de decode sobre WebLLM e Transformers.js, −29–33% de pico de memória, −21–51% no prefill, 10× atrás de CUDA no prefill. Sustenta tanto a viabilidade quanto a crítica de velocidade na Seção 7. Preprint revisável, confiabilidade média-alta pela amplitude do dado.
10. https://huggingface.co/docs/transformers.js/en/guides/webgpu — Guia oficial: `device: 'webgpu'` sobre ONNX Runtime Web, com aviso explícito de natureza experimental fora do Chromium e necessidade de flags em Firefox e Safari. Sustenta a ressalva de imaturidade. Fonte primária da biblioteca.
11. https://github.com/playcanvas/supersplat — SuperSplat, editor de Gaussian Splats sob licença MIT que roda no navegador. Sustenta o sinal fraco 2, ferramenta de autoria migrando para a aba. Código-fonte público, confiabilidade alta.
12. https://cetic.br/pt/pesquisa/domicilios/indicadores/ — Página de indicadores do TIC Domicílios (Cetic.br/NIC.br). Consultada para a nota sobre o Brasil; a página lista as séries sem expor os números, razão pela qual a nota está declarada como assunção e não como dado. Fonte oficial, mas não utilizada quantitativamente aqui.

## 12. Anexo — o levantamento bruto

**A entrevista (Etapa a).** Esta rodada foi executada em modo desassistido: não havia interlocutor disponível para responder em tempo real, e as respostas às cinco perguntas obrigatórias foram fornecidas antecipadamente junto ao pedido. Registro-as como foram recebidas, sem edição.

1. *Horizonte de tempo:* 2031.
2. *Público-alvo:* quem projeta mídia e interação.
3. *Recorte geográfico:* global, com uma nota sobre o Brasil.
4. *Fora do escopo:* o que já é comum em produto de massa (a régua da disciplina). Nenhuma outra exclusão. Registro à parte: por vizinhança de tema, IA local no dispositivo em geral pertence ao tema 16 e entra aqui só na fatia "no navegador"; captura 3D pertence ao tema 10.
5. *Viés desejado:* neutro. Nenhuma disrupção suspeita informada — instrução explícita de descobrir. Ideias óbvias a excluir: as que serviriam a qualquer tema.

Informações adicionais recebidas: profundidade de três ordens; modo de análise a partir de uma inovação, não de um setor; zona de interesse do autor "Criação e plataforma"; critério declarado de mudança de ideia — evidência de que a adoção já passou da maioria inicial na curva de Rogers, ou de que a tecnologia apenas melhora o que existe sem romper nada.

**O filtro de maturidade (Etapa b) — o julgamento e a dúvida.** O tema passou, mas não por unanimidade interna, e a fronteira merece registro porque quase o reprovou.

*O argumento pela recusa.* WebGL existe desde 2011. Unity exporta para web há anos. Aplicativo nativo de VR é mercado estabelecido. Pelo critério do ESTUDO.md, "o ganho de escala de uma tecnologia madura não é uma disrupção, é apenas a otimização do presente" — e uma leitura defensável de WebGPU é: mesma coisa que WebGL, mais rápido. Isso seria incremental, e a resposta correta seria recusar.

*Por que aceitei mesmo assim.* Porque o que rompe não é a camada gráfica, é a camada de distribuição. O paradigma quebrado não é "3D no navegador" — é "aplicativo como unidade obrigatória de distribuição de mídia interativa", com tudo que vem junto: aprovação prévia, comissão, curadoria, plataforma dona. Isso se encaixa na definição do ESTUDO.md de disrupção que "marginaliza players dominantes", e o player marginalizado é identificável: a loja de aplicativos do headset. O gatilho datável que separa 2026 de 2021 é o Safari 26.2 permitindo WebXR sobre WebGPU no visionOS — o momento em que a web deixa de ser a versão pior do nativo no óculos. Sem esse fato, eu teria recusado.

*Contra o meu próprio critério de mudança de ideia.* O autor declarou que mudaria de ideia diante de evidência de que a adoção passou a maioria inicial. Os 87% do caniuse medem *capacidade instalada*, não adoção por quem produz — são coisas diferentes, e confundi-las seria erro grosseiro. Não encontrei dado de adoção por desenvolvedor. Portanto o critério não foi acionado, mas também não foi testado: essa é uma lacuna real deste documento, e está declarada na Seção 7.

**Caminhos abandonados.**

- *Fazer do "modelo de IA no navegador" uma quarta disrupção-raiz autônoma.* Descartado por fronteira de tema: IA local no dispositivo é o tema 16. Mantive apenas a fatia que passa pela mesma porta WebGPU, que é o que pertence legitimamente a este mapa.
- *Puxar um ramo sobre Gaussian Splatting e captura de realidade.* Descartado pela mesma razão — é o tema 10. O SuperSplat entrou como evidência de que a autoria migrou para a aba, não como objeto.
- *Um ramo sobre desemprego de desenvolvedores de engine nativa.* Descartado por ser exatamente o tipo de efeito que serve a qualquer tema, o que a instrução mandava excluir.
- *Um ramo sobre "o metaverso volta".* Descartado por não se sustentar em nenhuma fonte consultada e por ser conclusão em busca de evidência.
- *Usar dados do TIC Domicílios para quantificar a nota sobre o Brasil.* Tentado, não concluído: a página de indicadores do Cetic.br consultada lista as séries sem expor os números, e não localizei os valores por busca. Em vez de inventar um número plausível, a nota foi rebaixada a assunção declarada.
- *Citar agregadores e blogs secundários que apareceram bem posicionados nas buscas* (vr.org, webo360solutions, testmuai, utsubo, buildmvpfast e similares). Descartados por não serem fonte primária e por reproduzirem números divergentes entre si para a mesma métrica — vi "83%", "87%" e "95%" de cobertura WebGPU em três páginas no mesmo dia. Mantive apenas o caniuse, que é a origem do número, e a especificação, que é a origem do fato.

**Registro de honestidade.** Cada link da Seção 11 foi aberto durante a execução e verificado como respondendo HTTP 200 em 18/09/2026. Nenhuma fonte foi citada a partir de memória. Onde não encontrei dado, escrevi que não encontrei.
