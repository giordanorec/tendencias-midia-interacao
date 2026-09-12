---
tema: "O navegador como console: 3D e XR sem instalação"
slug: o-navegador-como-console-3d-e-xr-sem-instalacao
autor_login: bvga
zona_de_interesse: Criação e plataforma
data: 2026-09-12
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 5
efeitos_ordem_2: 8
efeitos_ordem_3: 8
tecnologias_citadas: [WebGPU, WebXR, WGSL, WebGPU compute, WebNN, WebAssembly, WebGL 2, Gaussian splatting, three.js, PlayCanvas, SuperSplat, WebLLM, Prompt API, Gemini Nano, elemento model, OpenXR]
fontes: 20
confianca: media
experimento: Medidor de piso
skill_usada: futurizacao-bvga
publico_ok: false
---

## 1. Resumo

O navegador passou a expor a GPU (WebGPU) e o óculos (WebXR) como interfaces públicas da plataforma web. Isso é verificável: WebGPU está ligado por padrão nos quatro motores principais, e o WebXR chegou a Candidate Recommendation Draft em 9 de junho de 2026. A leitura fácil — "agora tudo roda no navegador, a loja de aplicativos acabou" — não sobrevive à evidência reunida aqui.

Três achados organizam este mapa. Primeiro: disponibilidade não é uso. Um levantamento acadêmico de junho de 2026 que rastreou páginas do Tranco encontrou WebGPU sendo usado quase só para *sondar o adaptador* — sem atividade observada de shader, pipeline ou fila no carregamento. A capacidade está no navegador; a web aberta ainda não a usa para desenhar. Segundo: a interoperabilidade do XR não foi contratada. O WebXR foi **proposto** e **não selecionado** entre os vinte focos do Interop 2026 — não há painel comum medindo quem implementa o quê, e o iPhone continua sem expor WebXR. Terceiro: a plataforma já começou a recapturar o que a web abriria. A Apple criou um Mini Apps Partner Program que cobra 15% sobre mini apps feitos em HTML5 e JavaScript distribuídos dentro de apps nativos, exigindo o sistema de compra dela. A taxa não morre com a tecnologia; ela muda de endereço.

Daí saem três disrupções-raiz, todas emergentes: **a GPU como API pública da web** (computação de propósito geral atrás de uma URL), **a sessão imersiva como endereço** (XR cross-vendor sem instalação) e **o navegador como runtime de modelo** (inferência local pela mesma porta gráfica). Elas geram 5 efeitos de 1ª ordem, 8 de 2ª e 8 de 3ª.

A consequência mais relevante para quem projeta mídia e interação não é a que a discussão pública enfatiza. Se a experiência deixa de precisar de instalação, o requisito que resta é o parque de GPU do público — e no Brasil, onde 60% dos usuários de Internet acessam apenas pelo celular (86% nas classes DE, segundo o Cetic.br), "sem instalar nada" não significa "sem barreira": significa que a barreira migrou da loja para o silício do aparelho. Confiança geral do mapa: **média**. As capacidades estão documentadas; a adoção real está fracamente evidenciada, e isso está declarado em cada efeito.

## 2. O tema

**Recorte.** A web como plataforma de execução de 3D e XR: WebGPU e WebXR como alvo primário de projeto, não como fallback ou porta de demonstração. Fica de fora a captura de realidade (tema 10) e a IA local no dispositivo em geral (tema 16) — esta última entra somente na parte que passa pela mesma porta do navegador.

**Parâmetros desta análise**, fixados antes da pesquisa, como manda a regra de parada da skill:

| Campo | Valor |
|---|---|
| tema | O navegador como console: 3D e XR sem instalação |
| horizonte | 2031 |
| publico | quem projeta mídia e interação |
| recorte_geografico | global, com nota sobre o Brasil |
| descartes | o que já é comum em produto de massa; ideias genéricas que serviriam a qualquer tema |
| vies_desejado | neutro; descobrir a disrupção em vez de supor uma |
| profundidade | três ordens |
| modo | a partir de uma inovação/tema, não de um setor |

**O que mudaria a conclusão**, declarado de antemão: evidência de que a adoção já passou da maioria inicial na curva de Rogers (aí isto é infraestrutura madura, não futuro), ou evidência de que a tecnologia apenas melhora o que existia (aí é otimização de WebGL, não ruptura). A pesquisa encontrou o oposto dos dois: adoção baixíssima na web aberta, e capacidade nova de fato — compute GPU e sessão imersiva — que WebGL não oferecia.

**Nota sobre a entrevista.** Esta rodada é não-interativa: os seis campos mínimos vieram do enunciado, não de um diálogo. Onde a skill exigiria uma pergunta de seguimento — por exemplo, se "quem projeta mídia e interação" inclui quem decide orçamento de plataforma —, assumi a leitura ampla (projeto e decisão de plataforma) e declaro a suposição aqui.

## 3. Onde isso está hoje

**A GPU.** WebGPU está habilitado por padrão nos quatro motores. O quadro de implementação do grupo GPU for the Web registra Chromium em Mac, Windows e ChromeOS desde a versão 113; Android 12+ desde a 121, com GPUs Imagination só a partir da 139 e Samsung Xclipse ainda em aberto ("probably 154"); Linux Intel Gen12+ na 144 e NVIDIA/Wayland na 147; Firefox no Windows desde a 141 e em Apple Silicon desde a 145; Safari na versão 26 em macOS, iOS, iPadOS e visionOS. O caniuse.com mede 87,35% de cobertura global (85,72% completa + 1,63% parcial). O Chromium usa o Dawn; o Firefox usa o wgpu — ou seja, duas implementações independentes de fato, não um motor único com vários rótulos.

**O uso real.** Aqui a história muda. O estudo *What Browsers Do in the Shaders* (Santos-Grueiro, arXiv, 24/06/2026) rastreou páginas do Tranco e relata que o WebGPU aparece predominantemente para **sondagem de adaptador e código estático de suporte**, sem atividade observada de shader, pipeline, fila ou mapeamento no carregamento da página. Traduzindo: no agregado da web, a API mais usada para saber *que placa você tem* do que para desenhar com ela. Nenhuma das buscas por títulos comerciais lançados em WebGPU devolveu evidência primária verificável (ver seção 12).

**Os motores.** O renderizador do PlayCanvas 2.19.0 trouxe renderização de splats gaussianos por *compute* em WebGPU, com ganhos medidos de 1× a 5,7× sobre WebGL 2 num M4 Max conforme a cena cresce de 1M a 35M gaussianas, e 2× a 2,1× num iPhone 13 Pro Max — com fallback automático para WebGL 2 "para todo o resto". O editor SuperSplat roda inteiro no navegador. Isto é o padrão da fase: WebGPU como caminho rápido, WebGL 2 como piso obrigatório.

**O óculos.** O WebXR Device API é Candidate Recommendation Draft de 9 de junho de 2026. No visionOS, o Safari 26.2 (12/12/2025) passou a permitir WebXR **com WebGPU** — "you can build experiences in WebXR with the full power of WebGPU". No WWDC26 (08/06/2026), a Apple levou o elemento `<model>` para iOS, iPadOS e macOS, e descreveu o caso de uso em suas próprias palavras: um site de ingressos onde se vê a vista do assento antes de comprar, "all built with standard web technology, no app required". O navegador do Quest ganhou, em 2026, WebGPU e projeção de profundidade em WebXR (146.0, 21/04), camadas *space-warp* com WebGPU (149.1, 27/07) e *foveation* experimental (150.1, 28/08).

**O contrassinal do XR.** O caniuse mede 77,15% de suporte a WebXR — **todo ele parcial**, nenhum completo — e marca Safari em iOS como "não suportado" da versão 3.2 à 26.6. E o WebXR, proposto como área de foco do Interop 2026, **não entrou** na lista final: os vinte focos anunciados pela WebKit em 12/02/2026 e registrados no repositório do web-platform-tests vão de *anchor positioning* a WebTransport, sem WebXR. Não há, portanto, painel público medindo convergência de implementações de XR em 2026.

**O modelo.** A documentação do Chrome para a Prompt API descreve a capacidade como estável a partir do Chrome 138+ em Windows, macOS 13+, Linux e ChromeOS em Chromebook Plus — e não em Android, iOS ou ChromeOS comum. Os requisitos são explícitos: **22 GB livres** no volume do perfil, **mais de 4 GB de VRAM**, **16 GB de RAM e 4 núcleos**. O WebNN, a via padronizada para NPU, está em Candidate Recommendation Draft de 10/09/2026, com posição positiva da Mozilla registrada, mas ainda exigindo duas implementações independentes e interoperáveis antes de avançar. O WebLLM roda modelos como Llama 3, Phi 3 e Qwen2 sobre WebGPU e não declara requisito mínimo de hardware no README.

**A economia.** O que a plataforma faz quando a web abre: o Mini Apps Partner Program da Apple define que mini apps "construídos com tecnologias web como HTML5 ou JavaScript e distribuídos dentro de um app nativo maior" ficam com **85% das vendas** — isto é, 15% de comissão — mediante uso do In-App Purchase da Apple, da Advanced Commerce API, da Declared Age Range API e conformidade com a diretriz 4.7. A 4.7.2 é explícita: o app "não pode estender ou expor APIs ou tecnologias nativas da plataforma ao software sem permissão prévia da Apple". Vale para mini app dentro de app nativo, não para o Safari — mas mostra o desenho de captura já pronto.

**O Brasil.** O indicador C16A da TIC Domicílios (Cetic.br, 2024) mede que **60%** dos usuários de Internet acessam apenas por telefone celular; nas classes DE, **86%**; na classe A, 18%. O Statcounter registra, em agosto de 2026, Android 16 com 25,14%, Android 15 com 22,29%, Android 13 com 15,39%, Android 14 com 14,65%, Android 12 com 7,77% e Android 11 com 6,15% no Brasil. Cruzando com o quadro de implementação: o piso de Android 12 do Chromium exclui a faixa mais antiga, e o recorte por família de GPU exclui outra — a cobertura de WebGPU no parque brasileiro é menor que a média global, e não é mensurável só pela versão do sistema.

## 4. As disrupções-raiz

Foram avaliados nove candidatos (fichas completas na seção 12). Três passaram na regra da seção 2.3 da skill; seis foram rebaixados a antecedente maduro, sinal ou tecnologia habilitadora.

### D1 — A GPU vira API pública da web: computação de propósito geral atrás de uma URL

- **maturidade:** emergente
- **potencial_de_ruptura:** alto
- **o_que_rompe:** a fronteira que definia software desde a loja de aplicativos — "programa instalado acessa o hardware, página não acessa". Rompe também a exigência de um binário por plataforma para qualquer trabalho pesado de gráfico ou cálculo, e o papel do instalador como ponto de controle.
- **por_que_agora:** os quatro motores ligaram WebGPU por padrão, com duas implementações independentes (Dawn e wgpu); o caniuse mede 87,35%; o PlayCanvas entregou um renderizador de splats **por compute**, não por desenho, com ganho medido de até 5,7×; o navegador do Quest incorporou WebGPU até em camadas de reprojeção.
- **o_que_falta:** Linux e Android amplos no Chromium; Linux, Android e Intel Mac no Firefox; evidência de que a web aberta usa a API para algo além de sondar o adaptador; e uma resposta ao dilema de *fingerprinting* que não quebre o caso de uso.
- **evidencias:** [1], [2], [8], [16], [10], [20]
- **veredito:** aceita. Falha em maturidade (não é madura: o crawl mostra uso quase nulo, a cobertura é irregular por GPU e sistema) e passa em potencial (altera barreira de acesso, cadeia de valor, arquitetura de produto e papel do intermediário).

### D2 — A sessão imersiva vira um endereço

- **maturidade:** emergente, com partes experimentais
- **potencial_de_ruptura:** alto
- **o_que_rompe:** o controle do fabricante de óculos sobre o catálogo do próprio dispositivo — aprovação prévia, build por loja, e o poder de decidir o que pode ser visto. Rompe também a equação de custo de mostrar XR: de "instale isto" para "abra este link".
- **por_que_agora:** WebXR em CRD de 09/06/2026; WebXR sobre WebGPU no visionOS desde o Safari 26.2; `<model>` element saindo do visionOS para iOS, iPadOS e macOS no WWDC26, com a própria Apple usando a expressão "no app required"; Quest Browser recebendo recursos de XR pesados (depth projection, space-warp) ao longo de 2026.
- **o_que_falta:** o iPhone — o caniuse registra Safari em iOS sem WebXR até a 26.6; um contrato de interoperabilidade, que o Interop 2026 não deu; e base instalada de óculos que justifique o investimento.
- **evidencias:** [3], [4], [5], [9], [10], [13], [14]
- **veredito:** aceita, com confiança menor que D1. O "por que agora" é forte em capacidade e fraco em mercado.

### D3 — O navegador como runtime de modelo: inferência local pela mesma porta gráfica

- **maturidade:** emergente/experimental
- **potencial_de_ruptura:** alto
- **o_que_rompe:** a economia de token por requisição e o pressuposto de que IA em produto exige servidor, conta e contrato. Rompe o modelo de privacidade por promessa contratual — substituindo-o por uma propriedade verificável no próprio navegador — e transfere o custo marginal do fornecedor para o aparelho do usuário.
- **por_que_agora:** a Prompt API com Gemini Nano documentada como estável no Chrome em desktop; WebNN em CRD de 10/09/2026 com posição positiva da Mozilla; WebLLM rodando famílias inteiras de modelos sobre WebGPU; e, do lado gráfico, a mesma GPU servindo aos dois usos pela mesma API.
- **o_que_falta:** WebNN sem as duas implementações independentes exigidas; nada disponível em Safari nem Firefox; requisitos de hardware que excluem a maior parte do parque (22 GB livres, >4 GB de VRAM, 16 GB de RAM); e ausência de suporte em Android e iOS, justamente onde está o público brasileiro.
- **evidencias:** [6], [7], [15], [17], [18], [19]
- **veredito:** aceita, com a ressalva de que é a mais experimental das três. Se a lista do "o que falta" não andar até 2029, D3 vira sinal, não disrupção.

**Rebaixados** (detalhe na seção 12): WebGL 2 e o pipeline Unity-para-web (maduros, antecedentes); `<model>` element (tecnologia habilitadora, não ruptura própria); lojas alternativas no iOS no Brasil (força externa regulatória, não capacidade técnica); *hand tracking* para seleção (a lição herdada de `DUVIDAS.md`: disponibilidade comercial e padronização não provam maturidade operacional — mantido sem classificação de maturidade estabelecida); WebAssembly (maduro).

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "D1 — A GPU vira API pública da web: computação de propósito geral atrás de uma URL"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "Ferramenta profissional de 3D passa a nascer como URL em vez de instalador, com WebGL 2 como piso obrigatório de compatibilidade."
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "A unidade de distribuição do software criativo deixa de ser a versão instalada e passa a ser a sessão, e a pergunta 'qual build você tem' some do suporte."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "O parque de GPU do público vira requisito declarado de projeto de mídia, negociado no briefing como hoje se negocia acessibilidade."
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "O teste de compatibilidade de mídia interativa deixa de ser matriz de navegador e vira matriz de GPU e driver, herdada do jogo nativo."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Produtos web passam a publicar perfil mínimo de hardware como rótulo visível, análogo ao requisito de sistema do jogo em loja."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "A identificação de hardware por página deixa de ser efeito colateral e vira problema central da web, porque o 3D pesado precisa saber que GPU tem do outro lado."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Navegadores passam a agrupar e arredondar por padrão o que revelam do adaptador, e a aplicação 3D tem de negociar desempenho sem saber com o quê está falando."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Surge uma prática de degradação declarativa — a aplicação descreve a intenção visual e o runtime escolhe o nível — deslocando decisão de arte do estúdio para o navegador."
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: "D2 — A sessão imersiva vira um endereço"
    efeitos:
      - id: e3
        ordem: 1
        efeito: "Portfólio, protótipo e peça de campanha imersiva migram para link antes dos produtos, porque cai a zero o custo de mostrar, não o de publicar."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "A loja do fabricante perde o monopólio da descoberta de experiência imersiva, e busca, mensagem e rede social passam a funcionar como vitrine."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "O fabricante responde no navegador — permissão, atrito de entrada, limite de sessão — e a disputa migra de aprovação de app para configuração de browser."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "O trabalho de XR se reaproxima do front-end, e a competência disputada passa a ser web mais gráficos, em vez de SDK de fabricante."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "Formação e portfólio em mídia e interação passam a exigir entrega que abre em URL, e o artefato avaliado vira o link, não o vídeo de captura."
                sinal: medio
                prazo: 2029
                confianca: media
      - id: e4
        ordem: 1
        efeito: "A fragmentação muda de endereço: sai de 'uma loja por fabricante' e entra em 'um conjunto de recursos por navegador', com profundidade, âncoras e mãos variando por dispositivo."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "Os motores open source absorvem a compatibilidade e passam a definir na prática o que conta como XR na web, como as bibliotecas de compatibilidade fizeram nos anos 2000."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Um motor aberto vira infraestrutura crítica de um setor sem governança correspondente, criando risco de captura ou de abandono de dependência única."
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: "D3 — O navegador como runtime de modelo: inferência local pela mesma porta gráfica"
    efeitos:
      - id: e5
        ordem: 1
        efeito: "A conta da inferência migra do provedor para o aparelho do usuário, e produto de mídia com IA passa a ser viável sem custo por requisição."
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "Aparece a categoria 'grátis porque roda em você', e a desigualdade de acesso deixa de ser medida em banda para ser medida em VRAM e espaço livre em disco."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "No Brasil, produtos passam a manter duas experiências permanentes — local e servidor — e o modo servidor vira o caro, cobrado de quem tem aparelho fraco, invertendo quem paga."
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "Privacidade vira atributo verificável de produto — ausência de requisição de rede, conferível no próprio navegador — e não mais promessa contratual."
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "Autoridades de proteção de dados passam a tratar processamento local e remoto de forma distinta na fiscalização, criando incentivo jurídico para empurrar computação ao cliente."
                sinal: fraco
                prazo: 2033
                confianca: baixa
```

**O que a estrutura não captura.** Três coisas, e vale dizê-las porque a roda, sozinha, engana.

A primeira é que as três disrupções **competem pelo mesmo recurso escasso**. D1 e D3 disputam a mesma GPU, a mesma memória e o mesmo orçamento térmico do mesmo aparelho. A roda desenha três árvores paralelas; na prática, um site que carrega um modelo local não renderiza uma cena pesada ao mesmo tempo. Existe um teto físico que a notação em árvore esconde.

A segunda é a **realimentação negativa**. e2.1 (navegadores escondendo o hardware por privacidade) enfraquece e1.2 e e1.1.1 (planejamento por perfil de GPU): quanto mais a plataforma protege o usuário, menos o estúdio consegue calibrar. A roda só tem setas para frente; este é um laço que puxa para trás, e é provavelmente a tensão mais importante do mapa.

A terceira é que **a ordem causal aqui não acompanha a cronologia**, e o caso mais claro é e3.2.1: um efeito de 3ª ordem com prazo 2029, anterior a vários de 2ª ordem. Currículo e portfólio mudam rápido porque dependem de decisão de poucas pessoas; cadeia de distribuição muda devagar porque depende de contrato. Distância causal e distância no tempo são eixos independentes.

## 6. Sinais fracos e wildcards

**Sinais fracos.**

1. **WebGPU usado para espiar, não para desenhar.** O crawl do Tranco encontrar sondagem de adaptador sem atividade de shader no carregamento é um sinal fraco *negativo*: a primeira função que a web deu à API foi identificar a máquina. Se isso se consolidar, WebGPU entra para a história da web mais como vetor de rastreamento do que como plataforma gráfica — e o efeito e2 deixa de ser lateral e vira o efeito principal.
2. **A Apple usando "no app required" como argumento de venda.** A frase é da própria empresa que criou a loja de aplicativos, num anúncio de WWDC, sobre o elemento `<model>`. É pequeno e localizado — uma frase de marketing —, mas indica que a narrativa "isto não precisa de app" já é aceitável dentro do fabricante que mais teria a perder.
3. **Camadas de reprojeção e foveation via WebGPU no navegador do Quest.** São recursos de otimização de última milha em XR, os que só se implementa quando se pretende rodar coisa séria. Um navegador ganhando *space-warp* é sinal de que o fabricante espera aplicações de XR completas, não demonstrações.
4. **O Mini Apps Partner Program.** Uma trilha comercial desenhada especificamente para software feito em HTML5 e JavaScript, com comissão de 15% e obrigação de usar a compra da plataforma. Sinal fraco de que o modelo econômico da loja está sendo portado para a tecnologia web, e não substituído por ela.
5. **WebXR fora do Interop 2026.** A ausência é o sinal. Sem foco compartilhado e sem painel público de aprovação em testes, a convergência entre implementações de XR fica sem prazo e sem placar.

**Wildcards.**

**W1 — Um exploit de driver via WGSL derruba WebGPU por meses.** Baixa probabilidade, impacto altíssimo. O estudo do arXiv já aponta estado compartilhado de GPU vazando informação sensível apesar das proteções de memória. Uma falha explorável em escala levaria navegadores a desabilitar ou restringir severamente WebGPU em listas de bloqueio de driver — exatamente como já se fez com WebGL. **O que quebraria:** D1 inteira e D3 junto, porque compartilham a porta. A roda voltaria a ter WebGL 2 como teto, e o efeito e1 se inverteria: a ferramenta profissional voltaria ao instalador, agora com o argumento de que a web é insegura. Este é o único evento do mapa capaz de reverter uma disrupção-raiz em vez de apenas atrasá-la.

**W2 — Um fabricante de óculos desliga WebXR por padrão.** Baixa probabilidade no Quest, cuja trajetória em 2026 é a oposta; probabilidade não desprezível em um entrante que venda catálogo curado. **O que quebraria:** D2 sem tocar em D1 nem D3 — e é isso que torna o wildcard interessante: mostra que a disrupção do XR depende de uma decisão de produto de poucas empresas, enquanto a da GPU depende de quatro motores independentes. D2 é estruturalmente mais frágil que D1, e o wildcard é o que revela.

## 7. Contra o próprio mapa

**1. Qual efeito é apenas extrapolação linear do presente?** e1 ("ferramenta profissional nasce como URL"). É a continuação direta de uma linha que vai do Figma ao SuperSplat, e não precisa de WebGPU para ser contada — o Figma é anterior. O que WebGPU acrescenta é faixa de peso, não direção. Mantive o efeito com sinal forte e confiança alta justamente porque é o mais seguro do mapa, mas ele é o menos informativo: quem já projetava assim não muda nada ao lê-lo.

**2. Qual efeito assume adoção rápida demais?** e5 e toda a subárvore de D3. O paralelo histórico é o próprio WebGL: especificação de 2011, ubiquidade nos motores ao longo da década, e ainda assim a web gráfica pesada permaneceu nicho por mais de dez anos. Assumir que inferência local no navegador chegue a produto de massa até 2029 é assumir uma curva mais rápida que a do WebGL sem justificativa — e com requisitos de hardware muito piores (22 GB livres, >4 GB de VRAM). Rebaixei e5 de confiança alta para média e mantive prazo 2029 apenas para a viabilidade técnica, não para adoção.

**3. Qual disrupção-raiz pode simplesmente não acontecer?** D2. A capacidade existe e está documentada; o mercado, não. O iPhone não expõe WebXR; o WebXR ficou fora do Interop 2026; a base instalada de óculos é pequena diante de qualquer plataforma de mídia. É perfeitamente possível que em 2031 WebXR seja uma boa API usada por poucas centenas de experiências e por nenhuma indústria.

**4. O que quebra na roda se D2 falhar?** Caem e3, e3.1, e3.1.1, e3.2 — quatro efeitos. Sobrevive e4 (fragmentação por recurso de navegador), porque ela já acontece hoje e não depende de sucesso, e sobrevive parcialmente e3.2.1 (entrega em URL como artefato avaliável), porque isso decorre de D1 — 3D em página comum — e não exige óculos. O mapa perde a pata do XR e continua de pé sobre a GPU.

**5. Que contrassinais existem?** Cinco, todos documentados: o crawl que não encontra uso de shader na web aberta; o WebXR fora do Interop 2026; o Safari em iOS sem WebXR; a diretriz 4.7.2 da Apple, que proíbe expor APIs nativas a software web dentro de apps sem permissão; e o Mini Apps Partner Program, que precifica em 15% exatamente a tecnologia que supostamente escaparia da taxa. Há ainda a divergência de medição entre o caniuse (Firefox "disabled by default through 158") e o quadro do grupo GPU for the Web (Firefox 141 no Windows) — ver seção 8.

**6. Que barreiras foram subestimadas?** A térmica e a de bateria, ausentes do mapa e decisivas em celular: uma cena WebGPU sustentada e um modelo local competem pelo mesmo envelope de energia, e nenhum efeito da roda captura isso. A de driver, também: no Android a cobertura não é função da versão do sistema, e sim da família de GPU — o quadro de implementação lista Imagination só a partir do Chrome 139 em Android 16+, e Samsung Xclipse ainda sem data. E a barreira econômica: publicar na web não tem taxa, mas também não tem financiamento, colocação em vitrine nem cobrança embutida. A loja cobra 15% a 30% e entrega distribuição; a web cobra 0% e entrega silêncio.

**7. Que ator teria incentivo para bloquear, capturar ou redirecionar?** A Apple é a resposta óbvia, e o desenho já está publicado: a captura não se dá proibindo a web, e sim criando a trilha de 15% para quem usar tecnologia web dentro de app nativo. O fabricante de óculos é a segunda: como quem controla o navegador embarcado controla a experiência, o bloqueio pode ser feito por atrito e por permissão, sem virar notícia. A terceira, menos citada, é o próprio time de privacidade dos navegadores: proteger o usuário do *fingerprinting* de GPU implica esconder do site aquilo que o site precisa saber para renderizar — e essa restrição, legítima, redireciona a trajetória sem que ninguém a esteja bloqueando por interesse.

**8. Que viés entrou na seleção?** Três, que reconheço. O primeiro é o viés da fonte: quase tudo que documenta capacidade aqui é publicado por quem vende a plataforma (Google, Apple, Meta, PlayCanvas), e o único levantamento independente encontrado — o do arXiv — contradiz frontalmente a leitura otimista. Triangulei onde deu; onde não deu, a alegação está marcada como corporativa. O segundo é o viés do enunciado: o tema me foi entregue com a tese "o que era app vira link" já formulada, o que predispõe a construir uma roda que a confirme; a seção 7 existe para compensar, e o efeito e4 (fragmentação migrando em vez de acabar) é a concessão explícita. O terceiro é meu viés de recência: prazos entre 2027 e 2033 foram atribuídos por plausibilidade, não por série histórica — nenhum deles é medida, e nenhum deveria ser lido como tal.

**Efeitos cortados após esta revisão** (registro completo na seção 12): a cadeia "a taxa de 30% desaparece", cortada pelo Mini Apps Partner Program; "sistemas operacionais perdem relevância para o navegador", cortada por falta de mecanismo — o navegador roda *sobre* o sistema e depende do driver dele; e "todo dispositivo passa a ter GPU adequada", que é desejo travestido de previsão.

## 8. O que a máquina errou

Quatro erros reais foram detectados durante este trabalho. Nenhum foi inventado para parecer crítico, e um deles é meu.

**1. Tratar proposta como decisão (erro detectado e corrigido).** A primeira busca devolveu, de fontes secundárias, a afirmação de que o WebXR "é agora uma área de foco proposta do Interop 2026, com o Safari se juntando ao Chrome e ao Quest Browser", com manchete sugerindo que o Interop 2026 seria a razão pela qual o WebXR viraria padrão real. Ao abrir a lista oficial — o README do repositório do web-platform-tests e o anúncio da WebKit de 12/02/2026 —, WebXR **não está entre as vinte áreas selecionadas**. A proposta existiu; a seleção não aconteceu. O mapa foi corrigido e o fato virou contrassinal central de D2. Este é exatamente o erro que a seção 2 da skill previne: anúncio tratado como disponibilidade.

**2. Divergência entre fontes, não resolvida.** Sobre o Firefox e WebGPU, o quadro de implementação do grupo GPU for the Web registra "✅ 141" no Windows e "✅ 145" em Apple Silicon; o caniuse.com marca Firefox como "disabled by default" até a versão 158. As duas foram abertas e lidas. Não tenho como arbitrar sem uma terceira fonte de teste independente, e por isso **não** afirmo em nenhum ponto deste documento que o Firefox tem WebGPU pleno — os números de cobertura citados são os do caniuse, que é a fonte mais conservadora das duas. Registro a divergência em vez de escolher a que convém à tese.

**3. Número de versão sem origem verificada.** Um resumo de busca afirmou que a Prompt API estabilizou no Chrome 148, em maio de 2026. A página de documentação do Chrome que efetivamente abri afirma estável no **Chrome 138+**. Como só uso o que abri, o documento cita 138+ e descarta 148. Não sei qual está certa; sei qual eu li.

**4. Fonte primária inexistente (meu erro de método).** Tentei apoiar a parte brasileira da economia de distribuição numa página da Apple sobre marketplaces alternativos no Brasil. O endereço que montei retornou 404 — a página não existe nesse caminho. O acordo entre Apple e CADE aparece apenas em imprensa nas buscas, e por isso **foi rebaixado a contexto** na seção 12 e não sustenta nenhum efeito da roda. A alternativa — citar a notícia como se fosse a decisão — é precisamente o que a seção 12 da skill proíbe.

Além destes, registro uma tentação que a evidência barrou: ao ler que WebGPU está nos quatro motores com 87% de cobertura, a conclusão natural seria classificá-lo como maduro e, portanto, como antecedente e não como raiz. O crawl do Tranco impediu: cobertura de API instalada não é uso repetível. A mesma correção que `DUVIDAS.md` aplicou ao *hand tracking* — disponibilidade comercial e padronização não são evidência suficiente de maturidade operacional — se aplica aqui, e é herdada explicitamente.

## 9. Três cenários para 2031

### Provável — "a web ganhou a demonstração e perdeu a distribuição"

É 2031. Praticamente todo navegador em uso tem WebGPU, e ninguém mais discute isso; virou tão visível quanto o suporte a vídeo. Toda ferramenta de autoria 3D de porte médio abre em aba — editar splat, montar cena, revisar modelo com o cliente — e o instalador sobrevive só onde há pipeline pesado de estúdio. O WebXR funciona bem no Quest e no visionOS, mal no resto, e nunca no iPhone; quem produz para XR escreve para web e testa em dois aparelhos, como se escrevia para dois navegadores em 2010.

A loja não morreu. Mudou de argumento: parou de vender acesso ao dispositivo — que a web agora dá — e passou a vender cobrança, descoberta e confiança. A comissão sobre mini apps se consolidou na faixa dos 10% a 15%, e o estúdio que publica só na web economiza a taxa e paga em invisibilidade. Inferência local existe, funciona bem em desktop caro e é oferecida como caminho premium; em celular brasileiro continua sendo o servidor que responde. O efeito e4 se confirmou: a fragmentação não acabou, mudou de camada.

**Mecanismo:** nenhum ator precisa decidir nada. Basta que a capacidade continue chegando pelos navegadores enquanto a distribuição continua nas mãos de quem já a tinha.

### Desejável — "a web virou o piso mínimo verificável"

É 2031. O WebXR entrou como foco de interoperabilidade em 2027, ganhou painel público de aprovação em testes, e a diferença entre plataformas caiu a ponto de uma sessão imersiva bem escrita rodar em três fabricantes sem código específico. A privacidade de GPU foi resolvida por negociação declarativa — o site diz o que quer fazer, o navegador responde em que nível dá para fazer, sem entregar a impressão digital do aparelho — e a prática de degradação declarada (e2.1.1) virou norma de projeto, não gambiarra.

A consequência importante é de acesso. Como toda experiência precisa declarar o piso de hardware e ter um caminho WebGL 2 funcional, "roda no celular mediano brasileiro" virou critério de entrega, e não boa intenção — do mesmo jeito que legenda e contraste viraram. Escola pública consegue usar material de XR sem comprar aparelho nem pedir instalação.

**Condições que precisaram ser construídas, e nenhuma é automática:** três fabricantes de navegador aceitaram gastar orçamento de engenharia em interoperabilidade de XR sem retorno comercial imediato; a comunidade de motores abertos padronizou o caminho de fallback em vez de competir por benchmark; e alguém — provavelmente compradores públicos — passou a exigir o piso mínimo em contrato. Sem o terceiro item, os dois primeiros não se sustentam.

### Indesejável — "a porta aberta virou o melhor sensor já instalado"

É 2031. WebGPU está em toda parte e a maior parte do seu uso na web aberta continua sendo o que o levantamento de 2026 já mostrava: identificar a máquina do outro lado. A combinação de dados de adaptador, limites de dispositivo e variação de ponto flutuante entre GPUs produz identificador estável que sobrevive à limpeza de cookies e à navegação anônima; o mercado de publicidade o adota; os navegadores reagem tarde e de forma desigual.

Quando a reação vem, é a tesoura: limites arredondados, recursos atrás de permissão, listas de bloqueio de driver largas. O 3D pesado na web fica com desempenho imprevisível, os estúdios voltam ao aplicativo nativo — onde o hardware é conhecido e a loja garante a cobrança — e a web fica com a demonstração leve. O XR segue o mesmo caminho, e o fabricante que exigia aprovação prévia sai fortalecido, agora com o argumento da segurança, que é o mais difícil de contestar.

**Sinal precoce que poderia ter antecipado:** já está publicado — a constatação, em junho de 2026, de que o WebGPU aparecia nas páginas para sondar adaptador e não para desenhar. Era mensurável dois anos antes de virar problema, e foi lido como curiosidade metodológica em vez de indicador de para que a capacidade estava sendo usada de fato.

## 10. O experimento

**Nome:** Medidor de piso.

**O que é.** Uma página única, publicada numa URL curta, que roda três provas em sequência no aparelho de quem abre e envia só números agregados, sem identificar ninguém: (a) tenta obter um adaptador WebGPU e registra sucesso ou falha, com motivo; (b) renderiza a mesma cena de splats gaussianos em três níveis de carga, medindo quadros por segundo sustentados por 20 segundos em cada nível, primeiro por WebGPU e depois forçando WebGL 2; (c) tenta iniciar o download de um modelo pequeno para inferência local e registra em que ponto falha — espaço em disco, memória, ausência de API — sem concluir o download. Distribuída por link em duas populações: a turma da disciplina e uma amostra de conveniência por WhatsApp com pedido explícito de repasse a quem tem aparelho antigo.

**Pergunta de futuro que testa.** Quando a experiência imersiva vira link, para quem ela vira link? Isto é: o gargalo de 2031 é distribuição (loja, aprovação, taxa) ou é hardware (GPU, memória, térmica)? A roda inteira, dos efeitos e1.1.1 a e5.1.1, depende de qual dos dois é o real.

**Hipótese falsificável.** *Em amostra brasileira de acesso predominantemente móvel, mais de 70% dos aparelhos obtêm adaptador WebGPU e sustentam 30 fps no nível médio de carga.* É formulada para poder falhar, e eu aposto que falha.

**Tecnologia emergente usada.** WebGPU com fallback WebGL 2 (PlayCanvas ou three.js), e a tentativa de inferência local por WebLLM ou pela Prompt API, conforme o que o aparelho expuser.

**Por que uma solução madura não responde à mesma pergunta.** Um teste só em WebGL 2 mediria o piso que já conhecemos e que já funciona em quase todo lugar — responderia "dá para desenhar", que não está em dúvida. A pergunta aqui é sobre a *nova* faixa de peso: compute, splat em volume, modelo carregado. Essa faixa é justamente a que WebGL 2 não alcança, e é por isso que só a capacidade emergente serve de instrumento. O resultado de um teste maduro seria bonito e inútil.

**O que os participantes fazem.** Abrem o link, esperam cerca de 90 segundos com a tela ligada, respondem duas perguntas (modelo do aparelho e ano aproximado de compra) e enviam. Sem cadastro, sem conta, sem coleta de identificador de hardware além do estritamente necessário para o experimento — o que, dada a seção 6, é ele próprio parte do objeto de estudo e precisa ser declarado na página.

**Métrica.** Três números por aparelho: obteve adaptador (sim/não), maior nível sustentado a 30 fps em cada caminho, e ponto de falha do carregamento do modelo. Um número por população: a fração que atravessa o nível médio. Um número derivado: a razão entre o desempenho por WebGPU e por WebGL 2 no mesmo aparelho — que é o que diz se a promessa da nova API se realiza fora da bancada.

**O que me faria mudar de ideia.** Se mais de 70% da amostra móvel brasileira obtiver WebGPU e sustentar o nível médio, eu estava errado sobre a barreira: o gargalo é mesmo a distribuição, os efeitos e1.1.1 e e5.1.1 perdem força, e a leitura original do tema — o link substituindo o app — fica mais defensável do que este mapa admite. Se a fração ficar abaixo de 30%, a conclusão inversa fica difícil de escapar: "sem instalação" descreve com precisão o que o desenvolvedor deixa de fazer, e quase nada do que o público passa a poder.

## 11. Fontes

1. **GPU for the Web / gpuweb — Implementation Status** — `https://github.com/gpuweb/gpuweb/wiki/Implementation-Status` — sustenta o quadro de disponibilidade por motor, versão, sistema e família de GPU (Chromium 113 em Mac/Windows/ChromeOS; Android 12+ na 121, Imagination na 139, Xclipse em aberto; Firefox 141 Windows e 145 Apple Silicon; Safari 26; Dawn e wgpu como implementações). *Confiabilidade alta: wiki do próprio grupo de trabalho responsável pela especificação; é fonte primária de status, não de adoção.*
2. **web.dev — "WebGPU is now supported in major browsers"** (Google, 25/11/2025) — `https://web.dev/blog/webgpu-supported-major-browsers` — sustenta o marco de suporte nos quatro motores e o que continuava faltando (Linux, Android, Macs Intel no Firefox). *Confiabilidade média: fonte corporativa interessada; usada só onde o quadro do gpuweb confirma.*
3. **W3C — WebXR Device API** — `https://www.w3.org/TR/webxr/` — sustenta o estágio de maturidade: "W3C Candidate Recommendation Draft, 9 June 2026". *Confiabilidade alta: fonte primária normativa.*
4. **web-platform-tests/interop — 2026/README.md** — `https://github.com/web-platform-tests/interop/blob/main/2026/README.md` — sustenta a lista das vinte áreas de foco do Interop 2026 e a **ausência** de WebXR. *Confiabilidade alta: registro oficial do projeto, mantido pelos quatro fornecedores.*
5. **WebKit — "Announcing Interop 2026"** (12/02/2026) — `https://webkit.org/blog/17818/announcing-interop-2026/` — confirma independentemente a mesma lista de vinte focos, sem WebXR. *Confiabilidade alta: triangulação com [4] por outro autor.*
6. **W3C — Web Neural Network API** — `https://www.w3.org/TR/webnn/` — sustenta "Candidate Recommendation Draft, 10 September 2026", a exigência de duas implementações independentes e as advertências de acesso de baixo nível, contexto seguro e *fingerprinting*. *Confiabilidade alta: fonte primária normativa.*
7. **Mozilla standards-positions #1215 (WebNN)** — `https://github.com/mozilla/standards-positions/issues/1215` — sustenta a posição rotulada como positiva e as questões abertas (privacidade, aprisionamento a frameworks nativos, esforço de implementação). *Confiabilidade alta para a posição; a página não traz justificativa consolidada.*
8. **caniuse.com — WebGPU** — `https://caniuse.com/webgpu` — sustenta 85,72% + 1,63% = **87,35%** de cobertura global e o detalhe por navegador. *Confiabilidade média-alta: agregador amplamente usado, com metodologia própria; diverge de [1] quanto ao Firefox — ver seção 8.*
9. **caniuse.com — WebXR Device API** — `https://caniuse.com/webxr` — sustenta **77,15%**, todo o suporte classificado como parcial, e Safari em iOS como não suportado da 3.2 à 26.6. *Confiabilidade média-alta, mesma ressalva.*
10. **Meta Horizon OS Developers — Browser release notes** — `https://developers.meta.com/horizon/release-notes/web/` — sustenta as entregas de 2026 do navegador do Quest: WebGPU e depth projection experimentais (146.0, 21/04), space-warp com WebGPU (149.1, 27/07), foveation experimental (150.1, 28/08), Chromium 144 em 02/03. *Confiabilidade alta para o fato de terem sido entregues; corporativa quanto à qualidade.*
11. **Apple — App Review Guidelines, diretriz 4.7** — `https://developer.apple.com/app-store/review/guidelines/` — sustenta o enquadramento de mini apps em HTML5 e JavaScript e a regra 4.7.2: o app "não pode estender ou expor APIs ou tecnologias nativas da plataforma ao software sem permissão prévia da Apple". *Confiabilidade alta: é o texto normativo do próprio ator.*
12. **Apple — Mini Apps Partner Program** — `https://www.developer.apple.com/programs/mini-apps-partner/` — sustenta a comissão (desenvolvedor fica com 85%), a definição de mini app como experiência web dentro de app nativo, e as exigências de In-App Purchase, Advanced Commerce API e Declared Age Range API. *Confiabilidade alta: termos do programa publicados pelo próprio ator.*
13. **WebKit — "WebKit Features for Safari 26.2"** (12/12/2025) — `https://webkit.org/blog/17640/webkit-features-for-safari-26-2/` — sustenta "Now with Safari 26.2 on visionOS, WebXR supports WebGPU". *Confiabilidade alta para a capacidade; corporativa.*
14. **WebKit — "News from WWDC26: WebKit in Safari 27 beta"** (08/06/2026) — `https://webkit.org/blog/17967/news-from-wwdc26-webkit-in-safari-27-beta/` — sustenta o elemento `<model>` chegando a iOS, iPadOS e macOS, `clip_distances` em WGSL, e a formulação "all built with standard web technology, no app required". *Confiabilidade alta para o anúncio; é anúncio, não medição de disponibilidade em campo.*
15. **Chrome for Developers — The Prompt API** — `https://developer.chrome.com/docs/ai/prompt-api` — sustenta os requisitos de hardware (22 GB livres, mais de 4 GB de VRAM, 16 GB de RAM e 4 núcleos), as plataformas suportadas e a ausência de Android e iOS. *Confiabilidade alta para requisitos declarados; corporativa quanto a desempenho.*
16. **PlayCanvas Blog — "New in SuperSplat: WebGPU and Streaming Bring Huge Performance Wins"** (03/06/2026) — `https://blog.playcanvas.com/new-in-supersplat-webgpu-and-streaming-bring-huge-performance-wins/` — sustenta o renderizador de splats por compute na engine 2.19.0, os ganhos de 1× a 5,7× (M4 Max, 1M a 35M gaussianas) e 2× a 2,1× (iPhone 13 Pro Max), o fallback automático para WebGL 2 e a citação de ~85% de usuários com WebGPU. *Confiabilidade média: benchmark do próprio fornecedor, sem replicação independente; usado como ordem de grandeza.*
17. **mlc-ai/web-llm** — `https://github.com/mlc-ai/web-llm` — sustenta a existência de um runtime de LLM no navegador sobre WebGPU e as famílias de modelos suportadas; o README **não** declara requisitos de hardware nem benchmarks. *Confiabilidade alta para a capacidade existir; nula para desempenho.*
18. **Cetic.br / CGI.br — TIC Domicílios, indicador C16A (2024)** — `https://cetic.br/pt/tics/domicilios/2024/individuos/C16A/` — sustenta a proporção de usuários que acessam a Internet apenas por telefone celular: total 60%; classe A 18%; B 25%; C 62%; DE 86%. *Confiabilidade alta: pesquisa amostral de referência nacional, metodologia pública.*
19. **Statcounter — Android version market share, Brasil (agosto/2026)** — `https://gs.statcounter.com/android-version-market-share/mobile-tablet/brazil` — sustenta a distribuição de versões (Android 16: 25,14%; 15: 22,29%; 13: 15,39%; 14: 14,65%; 12: 7,77%; 11: 6,15%). *Confiabilidade média: medição por tráfego, enviesada por uso, não por parque instalado; usada como indicação, não como censo.*
20. **Santos-Grueiro, I. — "What Browsers Do in the Shaders: A Measurement Study of WebGPU Privacy"** (arXiv, 24/06/2026) — `https://arxiv.org/abs/2606.26412` — sustenta os dois achados mais importantes deste mapa: o estado compartilhado de GPU como superfície de vazamento apesar da segurança de memória, e o crawl do Tranco encontrando WebGPU usado predominantemente para sondagem de adaptador, sem atividade observada de shader, pipeline, fila ou mapeamento no carregamento. *Confiabilidade alta em relação às demais: é a única fonte independente do mapa; ressalva declarada — li o resumo e a página de anúncio, não as 20 páginas do artigo, e os números de amostra e entropia não constam do que li.*

## 12. Anexo — o levantamento bruto

### Candidatos avaliados e vereditos

| # | Candidato | Maturidade | Ruptura | Veredito |
|---|---|---|---|---|
| 1 | WebGPU como alvo primário (compute + gráfico) | emergente | alto | **aceito — D1** |
| 2 | WebXR como sessão imersiva cross-vendor por URL | emergente/experimental | alto | **aceito — D2** |
| 3 | Inferência local no navegador pela mesma porta gráfica | experimental | alto | **aceito — D3** |
| 4 | WebGL 2 | maduro | médio | rebaixado a antecedente. É o piso que torna D1 publicável; sem ele o fallback não existe. |
| 5 | Unity/Unreal exportando para web | maduro | baixo | rebaixado a antecedente. Melhora o existente; não muda quem pode produzir. |
| 6 | Elemento `<model>` (conteúdo espacial declarativo) | emergente | médio | rebaixado a tecnologia habilitadora. Reduz o custo de mostrar 3D em página comum, mas não altera cadeia de valor nem barreira de acesso — falha no critério de duas dimensões. |
| 7 | Lojas alternativas no iOS no Brasil (acordo com o CADE) | — | alto | rebaixado a **contexto**, não a disrupção: é força regulatória, não capacidade técnica, e a fonte primária que tentei abrir não existe (ver seção 8, erro 4). |
| 8 | Hand tracking para seleção | **não classificada** | — | mantido sem classificação, seguindo a correção de `DUVIDAS.md`: disponibilidade comercial e padronização em OpenXR não são evidência suficiente de maturidade operacional. Não foi pesquisado a fundo nesta rodada e não sustenta nada no mapa. |
| 9 | WebAssembly | maduro | baixo (hoje) | rebaixado a infraestrutura. Viabiliza tudo acima e já não muda nada sozinho. |

### Caminhos causais cortados

- **"A taxa de 30% desaparece porque a experiência vira link."** Cortado. O mecanismo não fecha: o Mini Apps Partner Program precifica em 15% exatamente a tecnologia web usada como mini app, e a diretriz 4.7.2 mantém o controle sobre o acesso a APIs nativas. A taxa não depende do formato técnico; depende de quem controla a cobrança e a descoberta. O que sobrou no mapa é e3.1 (perda do monopólio da *descoberta*), com confiança baixa.
- **"Sistemas operacionais perdem relevância; o navegador vira a plataforma."** Cortado por ausência de mecanismo. O navegador roda sobre o sistema, depende do driver dele e é distribuído por ele; o próprio quadro de implementação mostra a cobertura sendo decidida por versão de sistema e família de GPU. Não consegui completar "se A acontecer, B se torna mais provável porque ___" sem apelar a retórica.
- **"Todo dispositivo passa a ter GPU adequada até 2031."** Cortado: é desejo formulado como previsão. O que entrou no lugar foi o inverso — e5.1, a desigualdade migrando de banda para VRAM.
- **"O óculos deixa de importar porque a experiência roda em qualquer lugar."** Cortado: confunde portabilidade de código com equivalência de experiência.
- **"A IA generativa no navegador substitui o motor de jogo."** Cortado: nenhuma evidência aberta nesta rodada sustenta o mecanismo; é mistura de dois temas (15 e 16) sem ponte causal.

### Buscas sem resultado utilizável

- **Títulos comerciais lançados em WebGPU.** Busca por jogos ou produtos comerciais publicados com WebGPU devolveu só blogs secundários e páginas de SEO (`vr.org`, `strayspark.studio`, `cinevva`, `impulsemediahub`), sem nenhuma confirmação primária de estúdio ou changelog. Nenhum foi aberto nem citado. **Consequência para o mapa:** a evidência de adoção comercial de D1 é fraca, e isso está refletido na confiança dos efeitos.
- **Telemetria oficial de uso de WebGPU** (chromestatus, porcentagem de carregamentos de página). Não localizada por busca. O substituto encontrado foi o crawl acadêmico [20], que é metodologicamente diferente e mais conservador.
- **Página da Apple sobre marketplaces alternativos no Brasil.** Endereço testado retornou 404.
- **PDF de resultados da TIC Domicílios 2025.** Baixado, mas ilegível pela ferramenta (imagem codificada). Usei o indicador tabulado de 2024, que é um ano mais antigo e verificável — preferi o dado mais velho e conferível ao mais novo e não lido.

### Contrassinais registrados

1. Uso real de WebGPU na web aberta restrito a sondagem de adaptador [20].
2. WebXR proposto e não selecionado no Interop 2026 [4][5].
3. Safari em iOS sem WebXR até a 26.6 [9]; nenhum suporte classificado como completo em nenhum navegador [9].
4. Diretriz 4.7.2 da Apple: sem permissão prévia, software web dentro de app não acessa API nativa [11].
5. Mini Apps Partner Program: 15% sobre mini app web, com IAP obrigatório [12].
6. Requisitos de hardware da inferência local que excluem a maior parte do parque, e ausência em Android e iOS [15].
7. Cobertura de WebGPU no Android decidida por família de GPU, não por versão do sistema [1].
8. WebNN ainda sem as duas implementações independentes exigidas para avançar [6].

### Divergências entre fontes, não resolvidas

- Firefox e WebGPU: [1] registra 141/145 como entregues; [8] marca desabilitado por padrão até a 158. Nenhuma afirmação deste documento depende de qual está certa.
- Versão de estabilização da Prompt API: documentação lida diz 138+ [15]; resumo de busca dizia 148. Usei o que li.
- Cobertura de WebGPU: [8] mede 87,35%, [16] cita "roughly 85%". Diferença compatível com datas e metodologias distintas; irrelevante para as conclusões.

### Hipóteses alternativas que continuam abertas

- **A hipótese do nicho durável.** Talvez 3D e XR na web nunca virem plataforma de massa e se estabilizem como camada de *pré-visualização* — ver o assento antes de comprar, girar o produto antes de escolher — enquanto a experiência longa continua nativa. Nesse caso D1 e D2 estão certas em capacidade e erradas em consequência: o navegador vira vitrine, não console. Nada na evidência reunida exclui esta leitura, e o cenário provável flerta com ela.
- **A hipótese da inversão do gargalo.** Se a barreira real for térmica e de bateria, e não de API nem de loja, então todo o mapa está organizado em torno do eixo errado, e o experimento da seção 10 detectaria isso — quadros por segundo caindo ao longo dos 20 segundos de cada nível, não na comparação entre níveis.

### Observações que não entraram no mapa

- O paralelo com o Flash foi deliberadamente evitado. É retoricamente atraente e causalmente vazio: o Flash era um plugin proprietário de um fornecedor, e WebGPU é especificação de grupo com duas implementações independentes. A analogia esconde mais do que explica.
- O Three Horizons foi usado como cheque temporal, sem virar seção: H1 é o app nativo com a loja cobrando e o navegador servindo de demonstração; H2 é o que a evidência de 2026 mostra — capacidade instalada em toda parte, uso concentrado em ferramentas e protótipos, plataforma desenhando a trilha de captura em paralelo; H3 seria a web como piso verificável do cenário desejável. A utilidade do método aqui foi impedir que efeitos de H3 fossem datados como se fossem de H2.
- O Hype Cycle serviu a uma única pergunta, também sem virar seção: a evidência encontrada é capacidade repetível ou anúncio? Em D1, capacidade com uso baixo. Em D2, capacidade com mercado incerto. Em D3, majoritariamente anúncio e requisito de hardware. Isso está refletido na ordem de confiança das três raízes.
- O Magic Quadrant não foi usado. Não há mercado formado de "plataforma web de XR" para comparar fornecedores, e usá-lo como instrumento de previsão é exatamente o que a skill proíbe.
