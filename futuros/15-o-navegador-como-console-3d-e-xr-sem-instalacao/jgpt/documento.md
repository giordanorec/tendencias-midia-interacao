---
tema: "O navegador como console: 3D e XR sem instalação"
slug: o-navegador-como-console-3d-e-xr-sem-instalacao
autor_login: jgpt
zona_de_interesse: "Criação e plataforma"
data: 2026-09-18
horizonte: 2031
publico: "quem projeta mídia e interação"
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 8
efeitos_ordem_2: 16
efeitos_ordem_3: 16
tecnologias_citadas: [WebGPU, WGSL, WebXR Device API, WebGPU compute, three.js WebGPURenderer, PlayCanvas, SuperSplat, Babylon.js, Immersive Web SDK, WebLLM, WebAssembly, Vulkan, Metal, elemento HTML model, USDZ, Gaussian splatting, PWA]
fontes: 12
confianca: media
experimento: "Uma mesma cena 3D publicada como link único, medida em seis dispositivos da turma, para descobrir onde a promessa do 'sem instalação' quebra na prática."
skill_usada: futurizacao-jgpt
publico_ok: false
---

## 1. Resumo

O navegador deixou de ser um lugar onde gráfico 3D é concessão e virou alvo de publicação de primeira classe. Em 2026 o WebGPU está ligado por padrão em Chrome, Edge, Safari 26 (macOS, iOS, iPadOS e visionOS) e Firefox no Windows e no macOS Apple Silicon; a WebXR Device API é Candidate Recommendation no W3C desde junho de 2026; e a Meta publicou um SDK próprio para WebXR construído sobre three.js, argumentando que o navegador está deixando de ser uma janela 2D. Pela mesma porta passa outra coisa: modelos de linguagem rodando na GPU do usuário, com desempenho medido entre 71% e 80% de um runtime nativo. A consequência mais direta é econômica, não técnica — uma experiência imersiva que é um link não passa por loja, não paga comissão de loja e não é curada por plataforma. A consequência mais incômoda é de acesso: a exigência sai de "ter internet" e passa a incluir "ter GPU com driver moderno". O mapa aposta que até 2031 a distribuição de XR se parte em dois regimes — catálogo curado e link aberto — e que a disputa de verdade não será de desempenho, mas de quem controla o botão "entrar em modo imersivo".

## 2. O tema

O objeto aqui é estreito de propósito: **a web como plataforma de execução de 3D e XR**, não a captura de cenas em 3D (tema 10) nem a IA local no dispositivo em geral (tema 16). O que se mapeia é a combinação de duas APIs — WebGPU, que dá acesso à GPU para render e para computação genérica, e WebXR, que dá acesso ao óculos — e o que essa combinação faz com a cadeia de distribuição de mídia interativa.

Isso encosta em mídia e interação em três pontos. Primeiro, no **formato**: o que era "aplicativo" vira URL, e URL é compartilhável, incorporável, indexável e efêmero — propriedades que app de loja não tem. Segundo, na **autoria**: editores que rodam no próprio navegador (SuperSplat é o caso já em produção) encurtam a distância entre fazer e publicar, e com isso mudam quem pode fazer. Terceiro, no **controle**: a loja de aplicativos é hoje o ponto onde se cobra comissão, se aprova conteúdo e se define o que existe; o link não passa por lá.

Merece mapa de futuro, e não estado-da-arte, porque o fato técnico já aconteceu e está datado — e o interessante é o que ele destrava depois. Um estado-da-arte responderia "o WebGPU está pronto?". A pergunta que importa é outra: se a experiência imersiva é um link, quem fica sem função na cadeia — e o que essa gente faz a respeito.

## 3. Onde isso está hoje

**O que existe e funciona.**

O WebGPU está enviado por padrão nos quatro motores relevantes, com um histórico de datas que desmente a impressão de "coisa nova": Chrome/Edge desde a versão 113 em Mac, Windows e ChromeOS; Chrome em Android ARM/Qualcomm/Intel desde a 121; Firefox no Windows desde a 141 (15/07/2025) e no macOS Apple Silicon desde a 145; Safari 26 em macOS, iOS, iPadOS e visionOS [1]. A Apple havia colocado a API em teste no Safari Technology Preview 185 em 21/12/2023 — quase dois anos antes do envio [4]. O caniuse.com registra suporte global de 85,72% + 1,63% (parcial) = 87,35% [2].

A WebXR Device API é **Candidate Recommendation Draft** no W3C, documento de 09/06/2026 [5] — o estágio em que a especificação é considerada estável o bastante para colher experiência de implementação. No hardware, a Meta documenta para o navegador do Quest realidade mista com passthrough, hand tracking, WebXR Layers e teclado do sistema, e recomenda explicitamente detecção de recurso em tempo de execução em vez de inferência por user-agent [6] — o que é, em si, um sintoma: a superfície varia por dispositivo.

Quem está construindo: a **Meta** anunciou em 07/10/2025 o Immersive Web SDK, construído sobre three.js com um Entity Component System próprio, e sustenta publicamente que "o navegador está evoluindo de uma janela 2D de informação para uma plataforma imersiva de experiências espaciais" [7]. A **Apple** foi por outro caminho no visionOS 26: além do WebGPU, ampliou mídia imersiva (vídeo espacial, Apple Immersive Video, 180°/360°) e introduziu o elemento HTML `<model>`, que embute modelo 3D interativo em página usando USDZ [3] — 3D declarativo, sem WebXR no meio. A **PlayCanvas** mantém o SuperSplat, editor de Gaussian splats cujo README diz, com todas as letras, que "roda no navegador, então não há nada para baixar ou instalar", com WebGL e WebGPU entre os tópicos do repositório [9]. E a **MLC** publicou o WebLLM, motor de inferência de LLM no navegador: em MacBook Pro M3 Max com quantização de 4 bits, 41,1 tok/s contra 57,7 do runtime nativo no Llama-3.1-8B (71,2%) e 71,1 contra 89,3 no Phi-3.5-mini (79,6%) [8].

**O que existe e não funciona bem.**

A cobertura é desigual onde mais importa para escala. O Firefox no **Android** segue atrás de flag e no **Linux** em Nightly, com a Mozilla esperando enviar em 2026 [1] — e o caniuse ainda classifica o Firefox como desabilitado por padrão no conjunto das versões [2], divergência que trato na seção 8. No Android, a API de baixo nível por baixo é o Vulkan, e a página oficial do Android sobre WebGPU não publica requisito mínimo de versão de Android, de driver ou de GPU [12]: quem quer saber se roda no aparelho da maioria brasileira não encontra a resposta na documentação do fornecedor. E o módulo de **realidade aumentada** do WebXR não está habilitado no Safari do visionOS — o Safari 26 documenta mídia imersiva e `<model>`, não sessão WebXR AR [3].

Do lado regulatório, a promessa de "a web como rota de fuga da loja" é parcial. A Open Web Advocacy sustenta que, mesmo sob o DMA, nenhum navegador portou efetivamente seu motor para o iOS — entre os obstáculos, a exigência (desde junho de 2024) de criar um app inteiramente novo, abandonando a base de usuários da UE, e a ausência de meio para desenvolvedor web testar navegador concorrente no iOS [11]. A Apple, por sua vez, documenta as rotas alternativas na UE com preço: Core Technology Commission de 5% para marketplaces alternativos e distribuição via web, comissões de App Store de 26%/20%/15% conforme o caminho de pagamento, e termos unificados entrando em vigor em 01/10/2026 [10].

**Diagnóstico de maturidade (heurística, não previsão).** A cobertura do WebGPU hoje é majoritariamente **cobertura de adoção** — versões enviadas, números de caniuse, motores migrados —, não cobertura de demonstração. A do WebXR ainda é mista: especificação estável e SDK de fabricante, mas os relatos de "adoção saltou X%" que apareceram na busca vêm de sites de baixa confiabilidade e não entraram neste documento. Uso o Hype Cycle só para separar demo de uso; ele não é validado como padrão universal de adoção e não sustenta prazo.

## 4. As disrupções-raiz

### D1 — WebGPU como alvo primário de publicação, não como plano B

**O que rompe.** Remove a restrição de *desempenho aceitável sem instalação*. Enquanto o WebGL era uma API de 2011 mapeada com folga sobre hardware moderno, o WebGPU expõe o modelo de GPU atual — inclusive **compute**, que o WebGL não tinha —, mapeando melhor sobre Metal, Vulkan e D3D12. O uso novo não é "o mesmo jogo mais rápido": é classe de carga que antes exigia binário instalado (simulação, inferência, processamento de nuvem de pontos) passando a caber num link.

**Por que agora e não há cinco anos.** O limiar é datado e verificável: em 2021 a API não existia enviada em nenhum navegador; em 2026 está ligada por padrão nos quatro motores, com Safari 26 fechando a última grande lacuna e o caniuse em 87,35% [1][2]. E o ecossistema seguiu: a Meta escolheu three.js como base do seu SDK de XR [7], e o editor de splats da PlayCanvas já é produto de navegador [9].

**O que ainda falta.** Android fora do Chrome; Linux no Firefox; requisito mínimo de hardware publicado com clareza [1][12]; e ausência de bibliotecas de kernel aceleradas equivalentes a CUDA, apontada pelos autores do WebLLM como restrição estrutural do ecossistema web [8].

### D2 — WebXR como cidadã de primeira classe do hardware, e não como modo degradado

**O que rompe.** Remove a restrição de *acesso ao sensor imersivo sem passar pela loja do fabricante*. Até aqui, entrar em VR/MR significava publicar um binário aprovado pela dona do sistema. Com WebXR estável e implementado no navegador do dispositivo, a sessão imersiva — com passthrough, mãos e âncoras — é aberta a partir de uma URL. O uso qualitativamente novo é a **experiência imersiva efêmera e compartilhável**: a que se manda num chat e se abre sem decidir instalar nada.

**Por que agora e não há cinco anos.** Dois limiares. O normativo: WebXR chegou a Candidate Recommendation em 09/06/2026 [5]. O industrial: em 07/10/2025 a Meta — dona de loja — publicou SDK aberto para a web, dizendo que o navegador está virando plataforma espacial [7], e documenta MR, mãos e Layers no seu navegador [6]. Em 2021, WebXR era rascunho com implementação de um fornecedor e nenhum incentivo do dono do hardware.

**O que ainda falta.** O módulo AR não habilitado no Safari do visionOS [3]; superfície de recurso desigual o bastante para a própria Meta exigir detecção em tempo de execução [6]; e nenhuma garantia de que o botão "entrar em imersivo" permaneça acessível ao navegador de terceiros — no iOS, o motor alternativo segue, na prática, inviabilizado [11].

### D3 — A mesma porta gráfica virou porta de inferência: o navegador como console de IA

**O que rompe.** Remove a restrição de *rodar modelo sem servidor e sem instalação*. O compute do WebGPU não distingue render de inferência; com isso, um modelo de linguagem inteiro carrega e roda na GPU do usuário, sem requisição de rede por token. Isso não é "mais barato": muda o que é possível dizer sobre privacidade, custo marginal e funcionamento offline de uma peça de mídia interativa.

**Por que agora e não há cinco anos.** O limiar é numérico e publicado: 71,2% e 79,6% do desempenho de um runtime nativo em modelos de 8B e 3,8B quantizados em 4 bits, no mesmo hardware [8]. Em 2021 não havia compute na web (WebGL não tem) nem modelo quantizado dessa qualidade nesse tamanho.

**O que ainda falta.** Memória de GPU no aparelho mediano; ausência de kernels acelerados equivalentes a CUDA [8]; e o custo de download do modelo, que transfere o problema de latência para o primeiro acesso.

*(Candidata rejeitada como raiz: **WebGL**. Madura pelo critério da Etapa 2 — está em escala, já é piso, e o que muda hoje não é a existência dela. Rejeitada também **Unity/Unreal exportando para web**: é o mesmo jogo, mais barato.)*

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "WebGPU como alvo primário de publicação"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "Motores 3D passam a tratar o backend WebGPU como padrão e o WebGL como caminho de compatibilidade."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "O custo de manter dois caminhos de render empurra estúdios pequenos a abandonar o fallback e exigir hardware recente."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "Surge uma faixa de conteúdo imersivo inacessível a aparelhos de entrada, criando uma web 3D de duas velocidades."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "Linguagens de shader de alto nível sobre WGSL viram a camada em que designers escrevem material, não código gráfico."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "A autoria de aparência visual migra de ferramenta proprietária de motor para texto versionável em repositório, e vira objeto de revisão de código."
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "Ferramentas de autoria 3D pesadas passam a ser publicadas como editor de navegador, sem instalador."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "A distância entre editar e publicar cai a um clique, e o arquivo de projeto deixa de ser a unidade de troca: a URL é."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Portfólio e entrega de trabalho em mídia passam a ser links executáveis, e a avaliação de competência em 3D deixa de depender de arquivo aberto em software específico."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "Licenças perpétuas de software 3D perdem terreno para assinatura hospedada, porque o editor roda no servidor de páginas do fornecedor."
            sinal: medio
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "Instituições de ensino sem verba de assinatura recorrem a editores abertos de navegador, e o currículo de 3D se reorganiza em torno de ferramenta gratuita e efêmera."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "Computação de propósito geral na GPU do visitante vira recurso normal de página, não experimento."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "Sites passam a consumir bateria e GPU de forma perceptível, e navegadores respondem com orçamento explícito de recurso por aba."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Consentimento de uso de GPU vira um pedido de permissão visível, como câmera e microfone, e entra no repertório de design de interface."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "Abuso de compute no navegador (mineração, fingerprinting de GPU) reaparece como problema de segurança em escala."
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "Bloqueadores de conteúdo passam a filtrar por comportamento de GPU, e páginas 3D legítimas sofrem falso positivo."
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "WebXR como cidadã de primeira classe do hardware"
    efeitos:
      - id: e4
        ordem: 1
        efeito: "Experiências imersivas passam a circular como link em mensageiro e rede social, sem passar por loja."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "A curadoria da loja deixa de ser o filtro que define o que existe em XR, e a descoberta migra para busca e compartilhamento social."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Moderação de conteúdo imersivo deixa de ser aprovação prévia e vira remoção posterior, com todos os problemas de escala que a web 2D já tem."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "Campanhas publicitárias e peças jornalísticas imersivas tornam-se viáveis para prazos curtos, porque não dependem de ciclo de aprovação."
            sinal: medio
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "O imersivo perde o estatuto de peça especial de orçamento alto e entra na rotina de produção, com a qualidade média caindo junto."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "Fabricantes de óculos passam a tratar o navegador embutido como superfície estratégica, controlando quais recursos WebXR ele expõe."
        sinal: medio
        prazo: 2027
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "A superfície de recurso varia tanto entre dispositivos que detecção em tempo de execução vira requisito de projeto, não otimização."
            sinal: forte
            prazo: 2027
            confianca: alta
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Surgem camadas de compatibilidade de terceiros que escondem a diferença entre dispositivos, repetindo o papel histórico do jQuery na web 2D."
                sinal: fraco
                prazo: 2029
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "Recursos de maior valor (AR com reconhecimento de cena, olhos, rosto) ficam disponíveis primeiro no SDK nativo e depois — ou nunca — na web."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "Forma-se uma divisão estável de repertório: a web fica com o imersivo compartilhável e raso, o nativo com o sensorialmente profundo."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: "A disputa regulatória sobre lojas e motores de navegador se estende explicitamente ao acesso a sensores imersivos."
        sinal: fraco
        prazo: 2029
        confianca: baixa
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "Reguladores passam a exigir paridade de acesso a XR entre o navegador do fabricante e navegadores de terceiros."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "A paridade formal é concedida sem viabilidade comercial, e o acesso permanece concentrado em quem já é dono do hardware."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "Empresas usam a rota web para escapar de comissão de loja em mercados onde a regulação já abriu distribuição alternativa."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "Plataformas respondem cobrando pela tecnologia de base e não pela venda, deslocando a taxa para um ponto que o link não contorna."
                sinal: medio
                prazo: 2030
                confianca: media
  - disrupcao: "O navegador como console de IA pela mesma porta gráfica"
    efeitos:
      - id: e7
        ordem: 1
        efeito: "Páginas passam a embutir modelos que rodam localmente, sem requisição de rede por resposta."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "O primeiro acesso a uma página inteligente passa a custar centenas de megabytes de download, e o cache do modelo vira decisão de projeto."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "Formam-se repositórios compartilhados de pesos com cache entre sites, e a disputa passa a ser sobre quem hospeda o modelo padrão da web."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: "Aplicações sensíveis a privacidade (saúde, jurídico, escolar) adotam a web local como argumento de conformidade."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: "Auditar o que uma página faz com o dado passa a exigir inspeção de execução local, e não mais análise de tráfego de rede."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: "Personagens e cenas 3D no navegador passam a ser movidos por modelo carregado na mesma página, sem serviço externo."
        sinal: fraco
        prazo: 2029
        confianca: baixa
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "Peças interativas com comportamento generativo tornam-se distribuíveis como arquivo único autocontido, sem custo de servidor."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: "Arte e jogo autoral generativo voltam a poder ser arquivados e preservados, porque não dependem de uma API que pode ser desligada."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: "A GPU vira recurso disputado dentro da mesma aba entre render e inferência, e o orçamento de quadro passa a ser negociado."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: "Design de interação imersiva incorpora latência variável de resposta como material expressivo, e não só como defeito a esconder."
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

**O que o bloco não diz sozinho.**

Primeiro: as três subárvores não são independentes. D3 só é interessante porque D1 aconteceu — sem compute na GPU pela porta da web, não há inferência local; e e8.2 (render disputando GPU com inferência) é o ponto onde D1 e D3 colidem no mesmo quadro de 16 milissegundos. Um mapa que tratasse os três eixos como paralelos erraria exatamente aí.

Segundo: o efeito com **sinal forte e confiança alta** mais adiantado no tempo não é nenhum dos glamourosos — é e5.1, "detecção em tempo de execução vira requisito de projeto". Isso já está escrito na documentação da Meta como recomendação [6]. Quando o conselho do fabricante é "não confie no user-agent, pergunte ao dispositivo", o que se está admitindo é que a plataforma não é uma só. Para quem projeta, essa é a consequência prática mais imediata de todo o mapa, e ela é chata: nada de assumir capacidade.

Terceiro: e6.2.1 é o efeito que mais mexe na narrativa fácil de "o link escapa da taxa". A Apple já documenta uma Core Technology Commission de 5% incidente sobre distribuição via web na UE [10] — ou seja, a cobrança já se deslocou da venda na loja para o uso da tecnologia de base. Quem lê a roda esperando que o navegador dissolva a economia de plataforma não encontra isso aqui.

Quarto: os prazos são grosseiros de propósito. Não há, nas fontes lidas, base para estimar velocidade de adoção; o que há são datas de envio de versão. Qualquer ano após 2028 neste bloco deve ser lido como ordenação relativa, não como data.

## 6. Sinais fracos e wildcards

**O elemento `<model>` como caminho paralelo (sinal fraco, alto impacto silencioso).** A Apple introduziu no visionOS 26 uma tag HTML que embute modelo 3D interativo via USDZ [3]. Isso é 3D declarativo — sem WebGPU, sem WebXR, sem JavaScript de render. Se o caminho declarativo pegar, a maior parte do 3D na web não vai passar pela pilha que este mapa tratou como central, e o WebGPU fica sendo a infraestrutura de quem faz coisa difícil, não a interface de quem publica. Isso não invalida a roda, mas rebaixa o alcance de D1 na cultura de produção.

**Candidatas classificadas como emergentes e mantidas fora das raízes.** (a) *WebNN*, a API de rede neural declarativa: citada no enunciado do tema, mas não encontrei nas fontes lidas nenhuma evidência de envio por padrão em navegador — fica no radar, não na raiz. (b) *Gaussian splatting como formato nativo de web*: o editor existe e roda no navegador [9], mas não há sinal, nas fontes lidas, de que o formato tenha virado alvo de publicação padrão. (c) *WebGPU no Firefox Android*: ainda atrás de flag [1]; se enviar, muda o denominador de acesso mais do que qualquer efeito de 2ª ordem deste mapa.

**Wildcard 1 — uma fabricante de óculos desliga WebXR por padrão.** Baixa probabilidade, impacto alto e imediato: bastaria uma decisão de produto justificada por segurança ou conforto para que toda a subárvore de e4 pare. Não é implausível — no iOS, a barreira equivalente para motores alternativos persiste anos depois do DMA [11]. O sinal precoce seria um recurso WebXR novo aparecendo primeiro sob flag de desenvolvedor e permanecendo lá por mais de um ciclo de sistema.

**Wildcard 2 — um incidente de segurança grave via compute na GPU.** Um vazamento de memória entre processos explorado por página comum levaria navegadores a restringir compute por padrão, exigindo permissão explícita. Derrubaria e3 e amputaria D3 na base. Sinal precoce: navegadores introduzindo limites de alocação de GPU sem alarde em notas de versão.

**Wildcard 3 — o oposto: um console doméstico envia navegador com WebXR completo.** Baixa probabilidade; mas colocaria dezenas de milhões de aparelhos com GPU boa e tela grande dentro do denominador, e transformaria "publicar em 3D" em algo com alcance de TV.

## 7. Contra o próprio mapa

**Extrapolação linear.** e1 ("motores adotam WebGPU como padrão e WebGL como compatibilidade") é o presente, só que mais. Não há descontinuidade: é a continuação de uma migração já em curso e documentada. Mantive a confiança alta porque a afirmação é modesta, mas registro que ela não é previsão — é descrição com data futura. O mesmo vale, em menor grau, para e2: editor de navegador já é produto entregue [9], não desdobramento.

**Velocidade de adoção nunca vista.** e4 ("experiências imersivas circulam como link, sem loja") assume, para 2028, uma mudança de hábito de distribuição que não tem caso comparável favorável. O comparável que contradiz é o próprio **PWA**: instalável, sem loja, disponível desde meados da década de 2010, e que em dez anos não deslocou a loja de aplicativos como canal principal em nenhum mercado grande — apesar de vantagem econômica óbvia. Rebaixei e4 para `confianca: media` e e4.2 para `baixa` por causa disso. Um segundo comparável, mais duro: sob o DMA, com obrigação legal, nenhum navegador conseguiu portar motor para o iOS em quinze meses [11]. Mudança de canal é lenta mesmo quando a lei empurra.

**Se D1 não vingar.** Cenário: o WebGPU fica preso como camada de infraestrutura de motores, o caminho declarativo (`<model>`) come o caso de uso comum, e o Android de entrada nunca alcança cobertura. A subárvore de e1 sobrevive (motores migram de qualquer jeito), mas e3 inteira cai — sem compute normalizado em página comum, não há orçamento de GPU por aba, nem permissão de GPU, nem abuso em escala. E D3 cai junto, porque é filha do compute.

**Se D2 não vingar.** Cenário mais provável do que parece: o WebXR fica como vitrine e demonstração, e todo o consumo real de XR continua em binário de loja. Nesse caso e4, e5 e e6 viram nota de rodapé — e o que resta do mapa é um mapa sobre gráficos na web, não sobre XR. É a subárvore mais frágil das três, e não por falha técnica: por economia de distribuição.

**Se D3 não vingar.** Se o custo de download de pesos e a memória de GPU no aparelho mediano não cederem, inferência no navegador fica restrita a demonstração e a nicho de privacidade. e7.2 sobrevive (o argumento de conformidade não depende de escala); e7.1.1 e toda a e8 caem.

**Viés do autor.** A skill manda perguntar ao usuário se ele escolheu o tema por gostar dele e se isso infla o otimismo. **Não houve usuário para responder nesta rodada** — a execução foi automática, com respostas pré-fornecidas que declaram viés "neutro" e nenhuma disrupção suspeita a priori. Registro isso como limitação, não como resposta: a pergunta de viés continua aberta e deve ser feita ao autor antes de o documento ser usado como se fosse dele. O que dá para dizer sem ele: a zona de interesse declarada é "Criação e plataforma", e um mapa escrito de dentro dessa zona tende a superestimar o peso das ferramentas de autoria — o que provavelmente inflou e2 e sua subárvore. Além disso, tratei o "sem instalação" como valor positivo ao longo do documento sem nunca defender que ele seja; para o público de quem projeta mídia, atrito de instalação às vezes é filtro desejável, e nenhum efeito da roda explora essa leitura.

## 8. O que a máquina errou

**O erro específico, e como foi pego.** Ao montar a seção 3, eu tinha em mãos duas afirmações que pareciam compatíveis e não são: o wiki de implementação do grupo de trabalho registra o Firefox 141 no Windows como **enviado** desde 15/07/2025 [1], enquanto o caniuse.com classifica o Firefox como **desabilitado por padrão** em todas as versões até a 159 [2]. Meu primeiro rascunho da seção 3 dizia "ligado por padrão nos quatro motores" e citava as duas fontes na mesma frase, como se se somassem. Elas não se somam: uma delas está errada, ou as duas descrevem coisas diferentes (envio por plataforma × agregação por versão do navegador). Percebi ao tentar escrever o número de cobertura e notar que 87,35% é alto demais para um mundo em que o Firefox inteiro está fora, e baixo demais para um mundo em que ele está dentro no Windows. Corrigi para uma formulação que nomeia as plataformas — e mantenho a divergência **em aberto** aqui em vez de escondê-la, porque ela afeta o denominador de acesso, que é a premissa de e1.1.1.

**Fonte plausível que não foi usada.** As buscas devolveram, com alta posição, artigos com números atraentes — "adoção de WebXR saltou 40%", "Interop 2026 torna WebXR padrão cross-browser", "85% de suporte", em domínios como vr.org, testmuai.com e webo360solutions.com. São exatamente o tipo de material que passaria por fonte sem levantar suspeita: formato de notícia, número redondo, linguagem de analista. Não abri nenhum deles e nenhum entrou na seção 11. Se este documento fosse escrito só com busca e sem verificação, o "salto de 40%" estaria na abertura do resumo.

**Número redondo demais que quase entrou.** A comissão de 30% da loja de aplicativos, citada na pergunta de 1ª ordem do enunciado do tema, é a cifra que todo mundo repete. A página da própria Apple, para a UE, não traz 30% em lugar nenhum: traz 26%, 20%, 15%, 10% e uma Core Technology Commission de 5% [10]. O mapa teria ficado mais retórico e menos verdadeiro com o número folclórico.

**Limitação de método.** A Etapa 4 da skill exige perguntar ao autor sobre viés; não havia autor na sessão. A Etapa 1 exige marcar fonte não verificada; nenhuma fonte não verificada entrou, mas isso foi obtido descartando material, não verificando-o — o levantamento, portanto, é mais estreito do que a busca produziu. E um alvo que eu quis abrir, `threejs.org/manual/en/webgpurenderer.html`, devolveu 404: a afirmação sobre o three.js neste documento se limita ao que a Meta declara publicamente [7], não a um changelog lido.

## 9. Três cenários para 2031

**Provável.** Em 2031 o WebGPU virou piso invisível: nenhum motor documenta mais "backend WebGPU" como recurso, do mesmo jeito que ninguém anuncia suporte a CSS. O 3D na web ficou comum e a maior parte dele é declarativo e raso — visualizador de produto, cena de fundo, modelo girando na página —, com a pilha pesada reservada a quem faz jogo e ferramenta. O XR pela web existiu e cresceu, mas não deslocou o catálogo: o que roda no óculos por tempo longo continua vindo da loja do fabricante, e o link virou o formato do imersivo curto, promocional e compartilhável. A cobrança de plataforma não sumiu; migrou da venda para a tecnologia de base, e quem publica fora da loja paga mesmo assim. A desigualdade prevista se confirmou parcialmente: aparelhos de entrada rodam a web 3D, mas com um recorte de recursos tão diferente que projetar para eles virou especialidade.

**Desejável.** Em 2031, publicar uma experiência imersiva se tornou tão banal quanto publicar um vídeo, e essa banalidade foi construída de propósito. Houve três decisões que sustentaram isso: os fabricantes de óculos mantiveram a paridade de recurso entre o navegador próprio e os de terceiros, incluindo o acesso a AR; o requisito mínimo de hardware para WebGPU passou a ser publicado com clareza, permitindo que quem projeta saiba de antemão quem fica de fora; e a comunidade de motores manteve o caminho de compatibilidade vivo em vez de descartá-lo pelo custo. No Brasil, o efeito prático foi que uma escola pública com aparelho Android de entrada conseguiu abrir a mesma peça que um estúdio abre no óculos — em qualidade menor, mas abrindo. Nada disso veio da tecnologia: veio de escolha de quem manteve o piso baixo quando era mais barato levantá-lo.

**Indesejável.** Em 2031 a web 3D se partiu em duas. O caminho de compatibilidade foi abandonado por custo em 2028 e o conteúdo imersivo passou a exigir hardware de menos de cinco anos; quem tem aparelho de entrada vê página quebrada, não versão simples. No óculos, o navegador foi mantido vivo mas subalimentado — os recursos que valem ficaram no SDK nativo, e o "aberto" virou a versão pobre do fechado, o que serviu de argumento para dizer que a web não dá conta. A taxa que se quis contornar voltou como cobrança sobre tecnologia de base, e publicar fora da loja ficou legal e economicamente inviável ao mesmo tempo. O sinal precoce disso é observável agora, e é mundano: **o dia em que um motor 3D popular anunciar a remoção do fallback para WebGL** — não com alarde, mas numa nota de versão, como limpeza de código.

## 10. O experimento

**O que é.** Uma única cena 3D publicada como um único link, instrumentada para relatar o que encontrou: se obteve adaptador WebGPU ou caiu em WebGL, qual o limite de memória e de tamanho de buffer do dispositivo, se `navigator.xr` existe e quais modos de sessão imersiva ele aceita, quantos quadros por segundo sustenta em três níveis de carga, e — num quarto nível — se consegue carregar e rodar um modelo pequeno de linguagem pela mesma porta de compute. Nada de servidor: a página coleta e mostra o relatório na tela, e a turma copia o resultado para uma planilha comum.

**Que pergunta sobre o futuro ele responde.** Não "o WebGPU é rápido?", que já está respondido. A pergunta é: **onde exatamente a promessa do "sem instalação" quebra, no parque de aparelhos de uma sala de aula brasileira real?** É a premissa empírica de e1.1.1 e o denominador de todo o mapa. Se em seis aparelhos da turma cinco rodarem, a subárvore da desigualdade enfraquece; se dois rodarem, ela é o efeito central deste mapa e eu escrevi o documento com a ênfase errada.

**Que tecnologia emergente usa, e por que não dá com tecnologia madura.** Usa WebGPU (inclusive compute) e WebXR. Com tecnologia madura — WebGL 2 — o experimento não responde nada: o WebGL roda em tudo, não expõe limites de compute e não diz nada sobre inferência local. É precisamente a heterogeneidade do WebGPU, ainda em rampa, que faz o teste ter informação.

**O que a turma faria em sala.** Cada pessoa abre o link no próprio celular e, quando houver, no notebook; quinze minutos. Depois, dois testes de campo: (a) abrir o mesmo link no óculos disponível e registrar quais recursos WebXR aparecem — e quais aparecem no SDK nativo e não ali; (b) desligar o Wi-Fi depois do primeiro carregamento e verificar o que continua funcionando. A discussão que isso gera é a que interessa: quem, na sala, ficou de fora — e se a peça que cada um pretende fazer teria deixado essa pessoa de fora.

**O que mudaria a opinião do autor.** Duas evidências, declaradas de antemão. Uma: se a adoção já tiver passado da maioria inicial — isto é, se a maior parte dos aparelhos da turma rodar tudo sem fallback —, então o tema não é disrupção emergente e sim infraestrutura absorvida, e o mapa deveria ser rebaixado a estado-da-arte. Outra: se ficar claro que o WebGPU não rompe restrição nenhuma, só melhora o que o WebGL já fazia, D1 perde o estatuto de raiz pelo próprio critério da Etapa 2 e a roda tem de ser refeita a partir de D2 e D3.

## 11. Fontes

Todas as fontes abaixo foram abertas e tiveram o conteúdo verificado nesta sessão (18/09/2026). Nenhuma fonte não verificada foi citada no documento.

1. **gpuweb/gpuweb — Implementation Status (wiki do grupo de trabalho W3C)** — `https://github.com/gpuweb/gpuweb/wiki/Implementation-Status` — Sustenta todas as datas e versões de envio do WebGPU por navegador e plataforma (Chrome 113/121/139/144/147, Firefox 141 em 15/07/2025 e 145, Safari 26), e o estado de Android/Linux no Firefox. Confiabilidade alta: é mantido pelo próprio grupo que especifica a API. Diverge do caniuse quanto ao Firefox — ver seção 8.
2. **caniuse.com — WebGPU** — `https://caniuse.com/webgpu` — Sustenta o número de cobertura global (85,72% + 1,63% = 87,35%) e a tabela por navegador. Confiabilidade média-alta: é a referência de fato do mercado, mas agrega por versão de navegador e por isso trata o Firefox de modo diferente do wiki acima.
3. **WebKit — "WebKit in Safari 26.0"** — `https://webkit.org/blog/17333/webkit-in-safari-26-0/` — Sustenta o envio de WebGPU em macOS, iOS, iPadOS e visionOS, a expansão de mídia imersiva no visionOS 26 e a introdução do elemento `<model>` com USDZ. Confiabilidade alta: é o fornecedor anunciando o próprio envio. Ausência notável: não menciona WebXR.
4. **WebKit — "WebGPU now available for testing in Safari Technology Preview"** — `https://webkit.org/blog/17280/webgpu-now-available-for-testing-in-safari-technology-preview/` — Sustenta a data de 21/12/2023 para o início dos testes, usada para medir o intervalo teste→envio. Confiabilidade alta, mesma razão.
5. **W3C — WebXR Device API (Candidate Recommendation Draft)** — `https://www.w3.org/TR/webxr/` — Sustenta o estágio normativo e a data de 09/06/2026. Confiabilidade alta: é o documento normativo.
6. **Meta Horizon OS Developers — WebXR overview** — `https://developers.meta.com/horizon/documentation/web/webxr-overview/` — Sustenta os recursos documentados no navegador do Quest (MR/passthrough, hand tracking, Layers, teclado do sistema) e a recomendação explícita de detecção em tempo de execução. Confiabilidade alta para o que a Meta suporta; é material de fornecedor, então não serve para afirmar adoção.
7. **Meta — "Meet Immersive Web SDK: A New Era for Spatial Web Development" (07/10/2025)** — `https://developers.meta.com/horizon/blog/immersive-web-sdk-new-era-spatial-web-development/` — Sustenta o SDK construído sobre three.js com ECS e a posição pública da Meta sobre o navegador virando plataforma espacial. Confiabilidade alta para a existência e a posição; é peça de comunicação, logo não sustenta alegação de resultado.
8. **arXiv:2412.15803v2 — "WebLLM: A High-Performance In-Browser LLM Inference Engine"** — `https://arxiv.org/html/2412.15803v2` — Sustenta os números de desempenho relativo (71,2% em Llama-3.1-8B, 79,6% em Phi-3.5-mini) e a limitação de ausência de kernels acelerados equivalentes a CUDA. Confiabilidade média-alta: é preprint dos próprios autores do sistema, medindo o próprio sistema em uma máquina; os números são autorreportados.
9. **playcanvas/supersplat (GitHub)** — `https://github.com/playcanvas/supersplat` — Sustenta o editor de Gaussian splats que roda no navegador sem instalação, com WebGL e WebGPU entre os tópicos. Confiabilidade alta para a existência e a natureza do produto.
10. **Apple Developer — "Changes for apps in the European Union"** — `https://developer.apple.com/support/dma-and-apps-in-the-eu/` — Sustenta as rotas de distribuição alternativa e os percentuais (CTC de 5%; comissões de 26%/20%/15%/10%) e as datas de 18/08/2026 e 01/10/2026. Confiabilidade alta: é o texto do próprio agente econômico sobre os próprios termos.
11. **Open Web Advocacy — "Apple's Browser Engine Ban Persists, Even Under the DMA"** — `https://open-web-advocacy.org/blog/apples-browser-engine-ban-persists-even-under-the-dma/` — Sustenta os obstáculos concretos a motores alternativos no iOS e o fato de nenhum navegador ter portado motor efetivamente. Confiabilidade média: é organização de advocacy com posição declarada; usada aqui para alegação factual sobre obstáculos, não para juízo.
12. **Android Developers — WebGPU** — `https://developer.android.com/develop/ui/views/graphics/webgpu` — Usada por **ausência**: sustenta a afirmação de que a documentação oficial não publica requisito mínimo de Android, driver ou GPU. Confiabilidade alta para o que está (e não está) escrito ali.

## 12. Anexo — o levantamento bruto

**Condições de execução desta rodada.** Documento produzido em 18/09/2026, madrugada, em execução automática, sem usuário disponível para responder à entrevista da Etapa 0 e à pergunta de viés da Etapa 4. As respostas de entrevista foram fornecidas de antemão pelo operador da rodada, e estão reproduzidas na íntegra abaixo. Isso é uma violação parcial do desenho da skill, registrada na seção 8 e aqui.

**Respostas de entrevista recebidas (Etapa 0), verbatim do enunciado da rodada:**
- Tema: "O navegador como console: 3D e XR sem instalação" (tema 15 de 19; família "Criação e plataforma").
- Horizonte: 2031. Público: quem projeta mídia e interação. Recorte: global, com uma nota sobre o Brasil.
- Descartado de início: o que já é comum em produto de massa (a régua da disciplina); nenhuma outra exclusão.
- Disrupção suspeita: nenhuma — descobrir. Viés: neutro. Ideias óbvias a excluir: as que servem para qualquer tema.
- O que faria mudar de ideia: evidência de que a adoção já passou da maioria inicial (Rogers), ou de que a tecnologia não rompe nada (só melhora o que existe).
- Profundidade: três ordens. Modo: a partir de uma inovação/tema, não de um setor.
- Zona de interesse: "Criação e plataforma". Login: jgpt. Skill: futurizacao-jgpt.
- `publico_ok` mantido em `false`: não houve autorização explícita para nome em galeria pública.

**Defaults assumidos em silêncio pela ausência do usuário, agora declarados:**
- `confianca` global do mapa: `media`. Justificativa: a camada de fato técnico é sólida e datada, mas a camada econômica (D2) e a de escala (D3) repousam sobre comparáveis históricos desfavoráveis.
- "Nota sobre o Brasil" foi entregue dentro dos cenários (Desejável) e do experimento, e não como seção própria — o formato de 12 seções não tem lugar para recorte geográfico separado, e inventar uma seção violaria a Etapa 5.
- A régua "descartar o que já é comum em produto de massa" foi aplicada como rejeição explícita de WebGL e de exportação de motor para web como raízes (seção 4).

**Buscas realizadas e o que deram.**
1. `WebGPU Safari Firefox shipped 2026 browser support status` — devolveu wiki gpuweb, Wikipedia, web.dev e três domínios de baixa confiabilidade (webgpu.com/news, webo360solutions, abratabia). Só o wiki foi aberto.
2. `WebXR device API support visionOS Safari Meta Quest Browser 2026` — devolveu majoritariamente vr.org, testmuai.com, threejsresources.com e verbetes de Wikipedia. **Nenhum aberto.** Foi daqui que vieram as alegações de "adoção saltou 40%" e "Interop 2026", descartadas por falta de fonte primária (seção 8).
3. `three.js WebGPURenderer default release r18x 2026 WebGL fallback` — devolveu utsubo.com, buildmvpfast.com e duas issues do repositório three.js. Tentei abrir o manual oficial (`threejs.org/manual/en/webgpurenderer.html`): **HTTP 404**. Nenhuma afirmação sobre versões do three.js (r171, r184) entrou no documento, embora tenham aparecido na busca — são secundárias e não foram verificadas.
4. `Digital Markets Act Apple browser engine sideloading web apps 2026 alternative distribution` — devolveu 9to5Mac, Runway, TechTarget, OWA, Brookings, Apple Developer, Apple Newsroom, The Register, e a página da Comissão Europeia. Abertas: Apple Developer e OWA.
5. `"Gestalt Village" browser WebGPU LLM in-browser` — **sem resultado para o termo**. O projeto citado no enunciado do tema como sinal fraco central ("modelo de linguagem inteiro carregado no navegador via WebGPU") não foi localizável por busca. Substituí por WebLLM, que é verificável e traz números. Registro: o wildcard do enunciado perde a âncora empírica; se o projeto existir, está fora do alcance da busca web nesta sessão.
6. `Brasil smartphones Android entrada GPU WebGPU suporte 2026 base instalada Opensignal` — **falhou no objetivo**. Devolveu verbetes de aparelhos na Wikipedia e relatórios de velocidade de rede da Opensignal, nenhum tratando de capacidade de GPU da base instalada. Não há, neste documento, nenhum número sobre o parque de aparelhos brasileiro — é justamente por isso que o experimento da seção 10 mede em vez de afirmar.
7. `Meta "Immersive Web SDK" WebXR announcement 2025 2026` — devolveu roadtovr, vr.org e as páginas da própria Meta. Aberta só a da Meta.

**Fontes abertas e descartadas do documento final.**
- `developer.android.com/develop/ui/views/graphics/webgpu` — aberta, mantida, mas só como evidência de ausência (fonte 12). Não sustenta nenhuma afirmação positiva.
- `superspl.at/editor` — aberta; a página é uma aplicação e devolveu só o título, sem conteúdo textual. Substituída pelo README do repositório (fonte 9).
- `threejs.org/manual/en/webgpurenderer.html` — 404, ver acima.

**Efeitos cortados da roda antes de fechar.**
- *"A loja de aplicativos deixa de existir como intermediário econômico em XR"* — cortado por ser exatamente o tipo de efeito genérico que o enunciado pediu para excluir, e por ser desmentido pela existência de cobrança sobre tecnologia de base (fonte 10). Sobreviveu na forma rebaixada de e6.2 + e6.2.1.
- *"Todo dispositivo passa a ter GPU capaz"* — cortado: é afirmação sobre o mundo físico sem nenhuma fonte, e a busca 6 falhou exatamente aí.
- *"O sistema operacional perde relevância como camada de aplicação"* — a pergunta de 3ª ordem do enunciado. Cortado como efeito: não consegui identificar mecanismo causal rastreável entre qualquer efeito de 2ª ordem deste mapa e o enfraquecimento do SO, e a skill manda parar quando o mecanismo some. Ficou como matéria de cenário (seção 9), não de roda.
- *"Servidores de render remoto desaparecem"* — cortado: mistura o tema com streaming de jogo, que é outro objeto e não está nas fontes.
- Um quarto nível chegou a ser esboçado sob e1.1.1 (estratificação de acesso → política pública de compra de dispositivo escolar). Não foi escrito: o formato fixa três níveis. Fica registrado aqui como desdobramento potencial.

**Aplicação do teste da Etapa 2, verbatim do raciocínio.**
- *WebGL* → maduro. "Se sumisse amanhã, o campo voltaria ao que era há 5 anos?" Não — é piso substituível. Rejeitado como raiz.
- *Unity/Unreal para web* → maduro na função. Mesmo jogo, mais barato. Rejeitado.
- *WebNN* → emergente. Sem evidência de envio por padrão nas fontes lidas. Radar (seção 6).
- *Gaussian splatting na web* → emergente. Produto existe [9], mas não forçou mudança estrutural em quem publica. Radar.
- *Elemento `<model>`* → emergente, e potencialmente concorrente do próprio mapa. Radar, com nota de que pode rebaixar D1.
- *WebGPU* → disruptivo. Limiar: de zero navegadores enviando (2021) a quatro motores enviando por padrão (2026) [1][2], e compute onde não havia. Aceito.
- *WebXR* → disruptivo, com ressalva. Limiar normativo (CR em 09/06/2026 [5]) e industrial (SDK aberto de fabricante de loja, 07/10/2025 [7]). Aceito, mas é a raiz mais frágil — ver seção 7.
- *LLM no navegador* → disruptivo. Limiar numérico: 71%–80% do nativo [8]. Aceito, mas dependente de D1.

**Checagem executada antes da entrega.** `grep -c "^## "` sobre este arquivo deve retornar exatamente 12; frontmatter e bloco `roda:` conferidos como YAML válido; contagem de efeitos por ordem conferida contra os campos do frontmatter (8 / 16 / 16); nenhum efeito escrito em forma de pergunta; todos os efeitos com `sinal`, `prazo` e `confianca` preenchidos.
