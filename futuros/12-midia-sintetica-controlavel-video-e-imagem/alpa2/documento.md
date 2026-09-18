---
tema: Mídia sintética controlável: vídeo e imagem
slug: midia-sintetica-controlavel-video-e-imagem
autor_login: alpa2
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-18
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 11
efeitos_ordem_3: 11
tecnologias_citadas: [VAR (Visual Autoregressive Modeling), Seedance 2.0, Kling 3.0 Motion Control, Runway Gen-4.5, Luma Dream Machine, Veo 3.1, FLUX, ComfyUI, ControlNet, EbSynth, Rive, Cavalry, Remotion, C2PA Content Credentials, world models interativos em tempo real]
fontes: 8
confianca: media
experimento: Um "diretor de um take só" — peça curta de 20 s produzida três vezes (prompt puro, keyframe propagado, grafo de nós) medindo quantas iterações cada caminho exige até a intenção original aparecer na tela.
skill_usada: futurizacao-alpa2
publico_ok: false
---

## 1. Resumo

A geração de imagem e vídeo por IA deixou de ter como gargalo a **qualidade** e passou a ter
como gargalo a **direção**. Isso desloca a disputa: o que está emergindo não é "vídeo por
prompt" — isso é maduro —, é a camada de controle que transforma a geração em instrumento
dirigível (região do quadro, quadro-chave propagado, transferência de movimento, regra
procedural, grafo de nós, estado que responde a evento). Três disrupções-raiz passaram no teste
do Passo 2: (1) o **controle fino e composicional** sobre mídia gerada; (2) a **arquitetura
autoregressiva visual**, que reabre a disputa técnica contra a difusão e, no vídeo, empurra a
geração para tempo real; (3) a **mídia sintética gerada em tempo de execução e condicionada a
estado**, que é onde vídeo e interface param de ser coisas diferentes.

O mapa até 2031 aponta para: colapso do custo marginal de produção audiovisual sem colapso
equivalente do custo de *direção*; deslocamento do valor do artefato para o **arquivo de
controle** (o grafo, a máquina de estados, o conjunto de quadros-chave); e uma crise de prova
audiovisual que a proveniência criptográfica (C2PA) hoje **não** está resolvendo — menos de 1%
das imagens noticiosas publicadas carregam o metadado, segundo levantamento do Reuters
Institute citado na análise de adoção que consultei. A confiança do mapa é média na 1ª ordem e
baixa na 3ª, o que é o resultado esperado, não um defeito.

**Suposições declaradas** (o Passo 1 foi respondido por escrito, sem interação ao vivo — ver
seção 7): horizonte 2031; público de quem projeta mídia e interação; recorte global com nota
sobre o Brasil; descarte único: o que já é comum em produto de massa; viés neutro; sem palpite
prévio de disrupção central.

## 2. O tema

O objeto aqui é a **imagem em movimento como mídia sintética dirigível** — não a história
gerada (tema 8), não o som e a voz (tema 13), não o design procedural sem IA (tema 14).

A formulação que organiza o resto do documento: *vídeo por prompt é loteria; mídia sintética
controlável é instrumento.* A diferença entre as duas não é de grau de qualidade, é de natureza
de operação. Numa loteria, você repete a jogada até sair o que você queria e não sabia
descrever. Num instrumento, você **especifica** — e a especificação é reaproveitável,
versionável, dirigível por outra pessoa e auditável depois.

Essa passagem tem um paralelo histórico útil: a fotografia não virou profissão quando a
emulsão ficou boa, virou quando apareceram diafragma, obturador e fotômetro — isto é, quando
o operador ganhou eixos independentes de controle sobre um processo que antes era tudo-ou-nada.
O que está acontecendo entre 2024 e 2026 com vídeo sintético é a construção desses eixos.

Três perguntas guiam a análise, nas três ordens pedidas pela disciplina:
- Se um estúdio de uma pessoa entrega o que exigia trinta, o que acontece com a indústria, com
  a publicidade e com o ensino de animação?
- Se o vídeo é barato e controlável, o que acontece com a prova em vídeo e com o jornalismo?
- Se a animação vira máquina de estados que responde a evento, a fronteira entre vídeo e
  interface desaparece?

## 3. Onde isso está hoje

### 3.1 O que já existe e funciona (maduro — não entra como disrupção-raiz)

- **Geração de vídeo por prompt de texto, com qualidade comercial.** Runway, Kling, Luma, Veo,
  Sora e Seedance operam como produto pago desde 2024-2025. Pelo critério do Passo 2, isso é
  **maduro**: a resposta a "o que ainda falta?" é "nada, está em produção e em uso comum".
- **Geração de imagem por prompt simples.** Idem. FLUX, Firefly, Midjourney, Stable Diffusion.
- **Controles de primeiro nível já embarcados no produto.** A página do Kling 3.0 no Runway que
  abri descreve *start and end frame control*, um modelo companheiro de **Motion Control** que
  transfere movimento de corpo, gesto de mão e expressão facial de um vídeo de performance para
  uma imagem parada, áudio e fala nativos, e sequências multi-plano com consistência de
  personagem entre cortes. Isso já é produto — e é exatamente por já ser produto que ele entra
  **aqui**, e não na seção 4.
- **Motion graphics à mão e edição de vídeo tradicional.** After Effects, Premiere, DaVinci.
  Maduros por qualquer leitura.
- **Animação como máquina de estados, no escopo de interface.** O **Rive** está em produção: a
  documentação que li descreve estados (timelines), transições e um grafo visual que substitui a
  timeline quando a máquina de estados é selecionada. Botão com *Idle / Hovered / Clicked* é o
  exemplo canônico da própria documentação. Isso **funciona hoje** — e por isso é estado atual,
  não disrupção. (Esse foi o ponto onde quase repeti o erro documentado no `DUVIDAS.md`; ver
  seção 8.)
- **Grafos de geração.** ComfyUI se consolidou como ambiente de trabalho para quem opera geração
  a sério — nó de modelo, nó de prompt, nó de LoRA, nó de ControlNet, nó de composição — com
  workflows reprodutíveis e compartilháveis. Pelas fontes de mercado que li em resultado de
  busca (não abri as páginas), estúdios de VFX já o usam para concept, ambiente e textura.

### 3.2 O que existe e não pegou (ou pegou torto)

- **Proveniência criptográfica de mídia.** O C2PA tem hardware (Leica M11-P, Nikon Z9/Z8, Sony
  PXW-Z300 como primeiro camcorder com assinatura nativa, Pixel 10 assinando por padrão via
  chip Titan M2) e tem plataforma (TikTok rotulando em escala, LinkedIn exibindo o ícone,
  Cloudflare como primeiro CDN grande). E mesmo assim: **menos de 1%** das imagens e vídeos
  noticiosos publicados globalmente carregam o metadado. Plataformas removem o manifesto no
  upload e na transcodificação. O Nikon Z6 III teve o recurso adicionado por firmware e depois
  **suspenso** por vulnerabilidade de assinatura, com revogação de certificados. O ecossistema
  existe; o uso rotineiro não.
- **Rotoscopia estilizada por propagação (EbSynth).** Continua sendo a saída mais controlável
  para o caso "pinte um quadro, propague o estilo" — e continua nicho, sem ter virado camada de
  pipeline. Isso é informativo: **controlabilidade sozinha não gera adoção**; ela precisa
  ser integrada ao fluxo de quem já trabalha.
- **Regra jurídica para vídeo sintético como prova.** Nos EUA, as propostas de Rule 901(c) e
  Rule 707 tramitaram; pelo que apurei em resultados de busca (página não aberta), em maio de
  2026 o comitê federal de evidência concluiu que a mudança de regra ainda não se justificava e
  manteve o tema em estudo. Ou seja: a capacidade técnica de falsificar avançou; a regra
  processual, não.

### 3.3 Quem está construindo

| Camada | Quem |
|---|---|
| Modelos de vídeo com controle embarcado | Runway, Kuaishou (Kling), Luma, Google (Veo), OpenAI (Sora), ByteDance (Seedance) |
| Modelos de imagem e pesos abertos | Black Forest Labs (FLUX), Stability, Adobe (Firefly) |
| Ambiente de composição / grafo | ComfyUI, InvokeAI, Graphite, Pixel Composer |
| Animação como estado / runtime | Rive |
| Motion design procedural | Cavalry |
| Vídeo programático | Remotion, satori |
| Arquitetura alternativa à difusão | linha do VAR (next-scale prediction) e derivados; laboratórios de world model interativo |
| Proveniência | C2PA / CAI, Google (SynthID), TikTok, Cloudflare |

## 4. As disrupções-raiz

Cada candidata abaixo passou pelos três testes do Passo 2, **respondidos por escrito**. Três
candidatas fortes foram **rejeitadas** e estão registradas na seção 12.

---

### D1 — O controle fino e composicional sobre mídia gerada

**O que rompe.** Rompe a divisão entre quem *dirige* e quem *executa*. Enquanto a geração era
por prompt, o operador era um solicitante: pedia e torcia. Com região do quadro, quadro-chave
propagado, transferência de movimento e grafo de nós, ele passa a ser um **operador de
parâmetros independentes** — e a intenção sobrevive da cabeça até a tela sem precisar de uma
equipe intermediando. Isso muda *quem pode fazer*: não "mais rápido e mais barato", mas
"possível para quem não tem equipe e não sabe animar".

**Por que agora, e não há cinco anos.** Três limiares cruzaram quase juntos: (a) a qualidade
base ficou boa o bastante para que o erro percebido deixasse de ser "isso parece falso" e
passasse a ser "isso não é o que eu queria" — o problema virou de direção; (b) os produtos
passaram a expor eixos de controle separados (2025-2026: *start/end frame*, motion transfer,
consistência multi-plano); (c) o grafo (ComfyUI) deu ao controle uma forma **reproduzível e
compartilhável**, que prompt nunca teve.

**O que ainda falta para se concretizar.** Falta o controle ser **portável**: hoje cada eixo é
propriedade de um produto, e não existe um formato intermediário de "partitura de direção" que
migre entre modelos. Falta consistência de identidade entre planos longos sem retreino. Falta o
controle sobreviver à iteração — mudar um parâmetro ainda costuma refazer o plano inteiro em vez
de refazer só o que depende dele. Nada disso está em produção em escala. **Aceita.**

---

### D2 — A arquitetura autoregressiva visual, e a geração em tempo real que ela viabiliza

**O que rompe.** Rompe a premissa de que imagem sintética se produz por *denoising* de um lote
inteiro. O VAR (melhor artigo do NeurIPS 2024) reformulou geração autoregressiva de imagem como
**previsão da próxima escala**, e não do próximo token em varredura: o transformer prevê o mapa
de tokens da resolução seguinte condicionado a todas as escalas anteriores. Os números do artigo
que abri: FID de 18,65 → 1,73, IS de 80,4 → 350,2 no ImageNet 256×256, com inferência ~20×
mais rápida, superando o Diffusion Transformer — a primeira vez que um AR estilo GPT ganhou da
difusão em geração de imagem. E exibe leis de escala com correlação próxima de −0,998.

O que isso rompe de verdade não é o placar de benchmark, é a **temporalidade da geração**.
Difusão produz um bloco pronto. Autoregressão produz **em sequência, condicionada ao que já
saiu** — e é isso que permite gerar enquanto se assiste, reagindo a entrada. A safra de 2026
de world models interativos vai exatamente por aí: o DreamX-World 1.0, cujo resumo abri, é um
modelo interativo texto/imagem-para-vídeo de longo horizonte com navegação de câmera,
reencontro de regiões já observadas e instruções de evento, rodando a até 16 FPS em oito
RTX 5090.

**Por que agora, e não há cinco anos.** Porque a difusão resolveu primeiro o problema de
qualidade, e só depois de resolvido é que o custo de amostragem e a impossibilidade de
interação viraram o gargalo visível. E porque a escala do lado autoregressivo herdou, de graça,
todo o ferramental de escalonamento de LLM — o que o VAR demonstra empiricamente ao exibir leis
de potência.

**O que ainda falta.** Nenhum modelo autoregressivo domina a produção comercial de vídeo hoje;
a difusão segue ganhando em qualidade de plano isolado. 16 FPS em oito GPUs de topo não é
produto. Falta qualidade de longo horizonte sem deriva, e falta custo por minuto compatível com
uso de massa. **Aceita.**

---

### D3 — Mídia sintética gerada em tempo de execução e condicionada a estado

**O que rompe.** Rompe a distinção entre **vídeo** e **interface**. Hoje há dois mundos
separados: de um lado a animação que *responde* (Rive: estados, transições, entradas, o mesmo
arquivo rodando em web, iOS, Android e Unity) — mas cujo conteúdo foi desenhado à mão, quadro a
quadro; do outro, a mídia *gerada* — mas que toca linearmente, igual para todo mundo, decidida
antes de o espectador chegar. A disrupção é a **fusão dos dois**: conteúdo sintetizado no
momento da exibição, com a máquina de estados decidindo *o que gerar*, não apenas *qual clipe
tocar*.

Repare que isso não é "Rive", e não é "vídeo generativo". É a interseção — e é justamente a
interseção que ainda não existe em produto.

**Por que agora.** Porque D2 dá a peça que faltava: geração sequencial, condicionada e barata o
bastante para caber dentro do laço de interação. E porque D1 dá a outra: sem controle fino, uma
mídia que responde produziria resultado imprevisível a cada execução — e imprevisível não se
publica.

**O que ainda falta.** Falta custo: gerar por espectador é economicamente proibitivo fora de
nicho. Falta determinismo suficiente para que a peça seja aprovável por um cliente antes de
existir. Falta um formato: hoje não há como *entregar* uma mídia assim (o que se versiona? o
que se aprova? o que se arquiva?). Falta latência. **Aceita.**

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "D1 — Controle fino e composicional sobre mídia gerada (região, quadro-chave propagado, transferência de movimento, grafo de nós)"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "O custo marginal de produzir um plano audiovisual de qualidade comercial cai a quase zero, enquanto o custo de decidir qual plano fazer permanece intacto."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "A escassez que organiza o mercado audiovisual migra da capacidade de execução para a capacidade de julgamento, e o portfólio deixa de provar competência porque qualquer um consegue um portfólio bonito."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "O ensino de animação se reorganiza em torno de direção, crítica e leitura de movimento, e a formação técnica em execução quadro a quadro vira disciplina histórica dentro do currículo."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "A publicidade passa a produzir variantes por segmento em vez de peças únicas, e o briefing deixa de descrever um filme para descrever um espaço de filmes possíveis."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "A métrica de qualidade publicitária se desloca de artefato para sistema, e a função de diretor de arte se aproxima da de curador de restrições."
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "O arquivo de controle — grafo, conjunto de quadros-chave, conjunto de regras — vira o ativo de valor, e o vídeo renderizado vira subproduto descartável dele."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Surge um mercado de compra, venda e licenciamento de workflows de direção, do mesmo modo que hoje existe mercado de preset e de LUT."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "A disputa autoral do audiovisual sintético se desloca do resultado para o método, e a pergunta jurídica passa a ser se um grafo de direção é obra protegível."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "A ausência de um formato intermediário portável entre modelos cria aprisionamento de fornecedor no nível da própria intenção criativa, e não apenas no nível do arquivo."
            sinal: medio
            prazo: 2027
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "Um consórcio de estúdios e fabricantes propõe um formato aberto de partitura de direção audiovisual, análogo ao que o MIDI fez pela música."
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "A produção audiovisual de faixa média — o comercial regional, o vídeo institucional, a vinheta — é absorvida por equipes de uma a três pessoas, e a estrutura de estúdio intermediário perde razão econômica."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "O emprego audiovisual se polariza entre poucos projetos de altíssimo orçamento e muitos operadores autônomos, esvaziando a faixa salarial intermediária onde hoje estão animadores e artistas de VFX."
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Os sindicatos do setor passam a negociar não o uso da ferramenta, mas a titularidade do arquivo de controle produzido pelo trabalhador durante o expediente."
                sinal: fraco
                prazo: 2030
                confianca: baixa

  - disrupcao: "D2 — Arquitetura autoregressiva visual (previsão por escala) e a geração sequencial em tempo real que ela viabiliza"
    efeitos:
      - id: e4
        ordem: 1
        efeito: "A geração de vídeo deixa de ser uma operação em lote e passa a ser um fluxo contínuo que aceita intervenção enquanto acontece."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "A direção audiovisual sintética passa a ser exercida ao vivo, por gesto e correção contínua, em vez de por ciclos de pedido e espera."
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Aparece uma prática de performance audiovisual generativa ao vivo, com um repertório próprio de gestos de direção que não deriva nem do cinema nem do VJing."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "O custo por espectador substitui o custo por produção como unidade econômica do audiovisual sintético, invertendo a lógica de escala da indústria."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "A publicação de mídia sintética migra do modelo editorial (publicar e distribuir) para o modelo de infraestrutura (manter um serviço rodando), e quem não sustenta custo de inferência sai do ar."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "A difusão perde o monopólio arquitetural e a pesquisa de geração visual volta a ser disputada entre famílias de modelos com propriedades operacionais diferentes."
        sinal: medio
        prazo: 2027
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "A escolha de modelo passa a ser decisão de projeto orientada por propriedade — latência, controlabilidade, edição local — e não por ranking de qualidade."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Entra no currículo de quem projeta mídia uma alfabetização de arquitetura generativa, análoga à alfabetização de codec que a década de 2000 exigiu."
                sinal: fraco
                prazo: 2030
                confianca: baixa

  - disrupcao: "D3 — Mídia sintética gerada em tempo de execução e condicionada a estado (a fusão entre máquina de estados e síntese)"
    efeitos:
      - id: e6
        ordem: 1
        efeito: "A fronteira entre vídeo e interface se dissolve no nível do arquivo, e a peça entregue passa a ser um programa que decide o que exibir, não uma sequência fixa de quadros."
        sinal: fraco
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "As ferramentas de motion design e as de desenvolvimento de interface convergem para um mesmo ambiente, e a distinção profissional entre motion designer e designer de interação perde nitidez."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "O vocabulário de aprovação de trabalho criativo muda de peça para comportamento, e contratos de produção passam a descrever regras e limites em vez de descrever entregáveis."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "Duas pessoas deixam de ter assistido ao mesmo vídeo, e a experiência audiovisual perde a propriedade de ser referência compartilhável."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "A crítica e o arquivamento audiovisual passam a operar sobre o sistema gerador e sobre execuções amostradas, porque não existe mais uma obra única a ser preservada."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: "O registro em vídeo deixa de funcionar como evidência por si só, porque produzir um registro falso convincente e dirigido deixa de exigir recurso escasso."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "A proveniência criptográfica no ato da captura passa de diferencial de produto a requisito de operação para jornalismo, perícia e seguro."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "Forma-se um mercado de autenticidade certificada como serviço, e o custo de provar que algo aconteceu passa a recair sobre quem filma, invertendo o ônus que vigorou durante todo o século da imagem fotográfica."
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o YAML não diz

**A tensão principal do mapa é entre e1 e e3.1.** O mesmo movimento que torna a produção
acessível a uma pessoa é o que esvazia a faixa intermediária de emprego — e as duas coisas são
celebradas e lamentadas pelas mesmas fontes, muitas vezes no mesmo parágrafo. Não são efeitos
opostos: são o mesmo efeito visto de dois lugares diferentes da cadeia. Quem projeta mídia
tende a ler e1; quem vive de executar mídia lê e3.1. O mapa não resolve essa tensão e não
deveria: ela é o conteúdo do período, não um erro de análise.

**e7 é o efeito de maior confiança de todo o documento e o de pior solução.** A capacidade de
falsificar já cruzou o limiar; a resposta institucional, não. O C2PA tem hardware, tem
plataforma, tem norma — e tem menos de 1% de penetração em imagem noticiosa. Pior: a análise
que li aponta que o maior obstáculo não é técnico, é a **apatia pública** — ceticismo aprendido,
gente que não clica no selo. Um selo que ninguém olha não resolve prova; ele resolve
responsabilidade. É provável que e7.1.1 se materialize primeiro em contextos onde alguém tem
dinheiro em risco (seguro, perícia, contencioso) e só muito depois — se — no consumo cotidiano
de notícia.

**D3 é, deliberadamente, a raiz de menor sinal e maior consequência.** Todos os seus efeitos
saíram com confiança baixa, e isso é honesto: não há produto demonstrando a fusão. O que
sustenta a raiz não é evidência de que está acontecendo, é o fato de que as duas metades
existem separadamente e funcionam, e que D2 fornece exatamente a propriedade (geração
sequencial condicionada) que faltava para juntá-las. É uma aposta de composição, não de
extrapolação — e deve ser lida como tal.

**Uma assimetria de prazo que vale notar:** as consequências econômicas (e1, e3) chegam antes
das consequências de forma (e6). Isso é o inverso do que a conversa pública sugere, que fala
muito de "novas linguagens" e pouco de estrutura de emprego. Reorganizar quem ganha dinheiro é
rápido; reorganizar o que uma peça audiovisual **é** leva uma geração.

## 6. Sinais fracos e wildcards

**Sinais fracos (já existem, quase ninguém está olhando):**

1. **O EbSynth continua sendo a saída mais controlável para rotoscopia estilizada — e continua
   nicho.** Isso é um sinal fraco *negativo*, e é o mais útil do documento: prova que
   controlabilidade não converte automaticamente em adoção. O que converte é integração ao
   fluxo de quem já trabalha. Qualquer previsão que assuma "ficou controlável, logo será
   adotado" está ignorando um contraexemplo de quase dez anos.
2. **A suspensão do C2PA no Nikon Z6 III por vulnerabilidade de assinatura, com revogação de
   certificados.** Infraestrutura de proveniência tem superfície de ataque, e uma única falha
   revoga confiança retroativamente. Sistemas de autenticidade podem falhar *para trás* — uma
   propriedade que quase nenhuma análise sobre C2PA discute.
3. **O grafo como interface dominante para quem opera geração a sério (ComfyUI).** O sinal não é
   a ferramenta, é o fato de que profissionais escolheram **programar** a geração em vez de
   conversar com ela — contrariando a hipótese de que linguagem natural seria a interface final.
4. **A mesma peça rodando em web, iOS, Android e Unity a partir de um único arquivo com
   estados** (Rive). O sinal não é técnico, é conceitual: a peça já não é um arquivo de mídia,
   é um pequeno programa — e ninguém ainda tratou isso como mudança de categoria.
5. **World models interativos a 16 FPS em oito GPUs de topo.** O número é ruim. O que importa é
   a **derivada**: é a mesma posição em que estava a geração de imagem por difusão em 2021.

**Wildcards (baixa probabilidade, alto impacto):**

- **Um formato aberto de "partitura de direção" é adotado por um consórcio e vence.** Se o
  controle virar portável entre modelos, o poder migra dos donos de modelo para os donos de
  método, e boa parte da economia desenhada em e2.2 se inverte. Improvável porque nenhum
  incumbente tem incentivo — foi assim com o MIDI, que nasceu justamente de fabricantes
  concluindo que o mercado inteiro era maior que a fatia de cada um.
- **Uma decisão judicial de grande repercussão declara inadmissível um vídeo autêntico**, por
  não ser possível afastar razoavelmente a hipótese de geração. O impacto não é sobre vídeo
  falso; é sobre **vídeo verdadeiro**, que passa a precisar provar-se. Isso aceleraria e7.1 em
  anos e criaria o mercado de e7.1.1 de um golpe.
- **O gargalo volta a ser qualidade.** Um salto de expectativa perceptual — resolução,
  estereoscopia, taxa de quadros alta como padrão — pode recolocar o problema em "produzir" e
  não em "dirigir", suspendendo D1 por alguns anos. É o wildcard que mais desorganizaria o mapa
  porque ele contradiz a premissa, não uma conclusão.
- **Um longa-metragem feito por uma pessoa é selecionado para a competição oficial de um
  festival de primeira linha.** O wildcard sugerido pela disciplina — e o mais próximo de
  acontecer. Em 2026 o material sintético circulou em Cannes pelo **Marché du Film**, o mercado,
  e não pela competição, de onde a IA generativa foi banida; o *Hell Grind*, apresentado como
  primeiro longa inteiramente gerado por IA, estreou num festival **adjacente** a Cannes, feito
  em duas semanas com menos de US$ 500 mil e recepção artística mediana. A distância entre
  "circulou no mercado ao lado" e "está na competição" é exatamente a distância entre
  viabilidade técnica e legitimação — e é ela que o wildcard cobraria.

## 7. Contra o próprio mapa

**1. Que efeito é só extrapolação linear do presente?**

**e1.2** (publicidade produzindo variantes por segmento em vez de peças únicas) é o caso mais
claro. Ele pega a curva de personalização que já existe em mídia programática e simplesmente a
estica para o vídeo. A curva pode não continuar: personalização publicitária vem apanhando de
regulação de dados e de fadiga do público desde 2023, e nada garante que "mais variantes" seja
percebido como melhor em vez de como ruído. **Revisado:** baixei a confiança de e1.2 de alta
para média e reescrevi o efeito para incluir a mudança de briefing — que é a parte estrutural —,
em vez de afirmar apenas o aumento do número de peças, que é a parte linear.

**e3.1** (polarização do emprego) também é extrapolação, mas de uma curva com precedente sólido
em outras indústrias criativas digitalizadas, e por isso mantive a confiança em média.

**2. Que efeito assume velocidade de adoção sem precedente comparável?**

**e7.1** — proveniência criptográfica virando requisito de operação até 2029. O comparável mais
próximo é o HTTPS: saiu de minoria para padrão de fato em cerca de uma década, e só andou
quando um navegador dominante passou a **punir** quem não adotasse. O C2PA não tem, hoje, o
equivalente a essa punição: nenhuma plataforma grande degrada alcance de conteúdo não assinado.
Sem esse mecanismo, 2029 é otimista. **Revisado:** empurrei e7.1 de 2028 para 2029, e o
e7.1.1 dependente para 2031, no limite do horizonte.

**e4.1** (direção ao vivo por gesto) assume que uma prática profissional inteiramente nova se
estabelece em três anos. **Não encontrei precedente comparável** de prática criativa nova
consolidada nesse prazo — VJing levou mais de uma década, edição não-linear levou cerca de
quinze anos. Mantive o efeito por haver base técnica, mas ele é o candidato mais provável a
estar simplesmente errado no prazo.

**3. Que disrupção-raiz pode não se concretizar, e o que sobra?**

**D3 é a mais frágil.** Ela depende de custo de inferência por espectador cair a um nível que
hoje não existe, e de determinismo suficiente para aprovação comercial — duas condições
independentes. Se D3 não se concretizar, o ramo e6 inteiro cai (quatro efeitos), mas **e7
sobrevive**: a crise de prova audiovisual não depende de mídia que responde, depende só de
falsificação barata e dirigida, que é D1. O mapa perde a parte mais especulativa e mantém a
espinha.

**D2 pode se concretizar só pela metade** — o mais provável é que arquiteturas híbridas
(destilação autoregressiva de difusão, que é o que boa parte da safra de 2026 faz) capturem o
benefício de latência sem que exista uma "vitória do autoregressivo". Nesse caso e5 se
enfraquece (não haveria disputa entre famílias, haveria convergência), mas e4 se mantém, porque
o que importa para e4 é a propriedade operacional — geração sequencial — e não qual família
arquitetural a entrega.

**D1 é a mais robusta.** Ela já está acontecendo em produto, e o que falta é generalização, não
invenção. Se D1 não andar, o mapa inteiro cai — mas essa é a hipótese menos provável do
documento.

**4. Que viés entrou aqui?**

- **Viés declarado pelo usuário:** neutro, sem preferência. Tentei honrar isso mantendo e1
  (democratização) e e3.1 (desemprego) com o mesmo peso e o mesmo nível de detalhe, em vez de
  desenvolver um e mencionar o outro.
- **Suposições assumidas por falta de interação ao vivo** (a rodada foi executada sem
  interlocutor): horizonte 2031, público de quem projeta mídia e interação, recorte global com
  nota sobre o Brasil, descarte único do "já comum em produto de massa", levantamento da
  disrupção central do zero. Todas essas foram fornecidas por escrito no despacho da rodada, não
  inventadas por mim; o que **não** houve foi a possibilidade de repergunta quando a resposta
  abriu uma bifurcação — e ela abriu pelo menos uma, registrada na seção 12.
- **Viés da minha própria posição de observação:** eu tenho acesso privilegiado a documentação
  de produto e a artigo científico, e acesso ruim a prática de estúdio. Isso enviesa o mapa para
  o que é **anunciado** e para o que é **publicado**, e contra o que é efetivamente usado no dia
  a dia. Concretamente: é provável que eu esteja superestimando a penetração real do controle
  fino em produção profissional, porque changelog de produto e artigo de conferência são
  otimistas por construção.
- **Viés do enunciado do tema.** A descrição da disciplina já afirma que "a disrupção em curso é
  o controle". Eu a tratei como contexto, não como fonte, e cheguei à mesma conclusão por
  caminho próprio — mas seria desonesto dizer que ela não ancorou a leitura. Um analista que
  chegasse sem essa frase talvez tivesse escolhido "vídeo em tempo real" como raiz única.
- **Viés de recência.** O corpo de evidência que consultei é quase todo de 2024-2026, o que
  favorece tratar o momento atual como inflexão. Toda análise de tendência sofre disso; a
  contramedida que apliquei foi buscar deliberadamente um contraexemplo antigo (o EbSynth
  controlável e nicho desde antes do boom).

## 8. O que a máquina errou

**1. Quase repeti exatamente o erro documentado no `DUVIDAS.md`, com o Rive.** Na primeira
passagem, listei "animação como máquina de estados que responde a evento" como disrupção-raiz —
citando o Rive como evidência. Era plausível: é conceitualmente novo para quem vem de vídeo,
tem a documentação como fonte real e verificável, e "a fronteira entre vídeo e interface
desaparece" soa como uma tese de futuro. Mas ao responder por escrito o terceiro teste do Passo
2 — *o que ainda falta para se concretizar?* — a resposta honesta foi **"nada"**: o Rive está em
produção, tem editor, tem runtime multiplataforma, tem base instalada, e a documentação que abri
descreve estados e transições como recurso corrente, não como pesquisa. Pelo critério da própria
skill, isso é **maduro**. A correção foi mover o Rive para a seção 3 e reformular a raiz como a
**fusão** entre estado e síntese — que é o que de fato não existe. Registro o motivo da
desconfiança, e não só o fato: desconfiei porque o `DUVIDAS.md` descreve este erro exato — fato
correto, classificação errada — e porque "é novo para mim" e "é emergente" não são a mesma coisa.

**2. Uma segunda quase-repetição, com o Motion Control do Kling.** Pela mesma razão: transferir
performance de um vídeo para uma imagem parada parece capacidade nova. Mas está na página de
produto que abri, como recurso vendido. **Maduro.** A raiz não é o recurso; é o fato de que
recursos assim estão se acumulando em eixos independentes e ainda não portáveis.

**3. Um número que estive perto de arredondar errado.** O estudo sindical mais citado sobre
empregos é frequentemente resumido como "204 mil empregos ameaçados pela IA". Ao abrir a fonte,
os números são mais específicos e a leitura correta é **"significativamente afetados"**, não
"eliminados": 204 mil no total, dos quais 118,5 mil em cinema, TV e animação (21,4% de 555 mil)
e 52,4 mil em jogos. E há um detalhe que muda a interpretação: o estudo é da **CVL Economics**,
co-encomendado pelo Animation Guild e outras entidades — parte interessada, portanto — e a
pesquisa de campo foi feita entre **novembro e dezembro de 2023**, com publicação em janeiro de
2024. É uma pesquisa de percepção com 300 executivos, anterior à geração de vídeo controlável
que este documento discute. Usei-o como âncora de ordem de grandeza e de *direção* do efeito
(e3.1), nunca como previsão. Desconfiei porque o número redondo circulava sem metodologia
colada, e número redondo sem metodologia é o formato padrão de um dado deformado na
retransmissão.

**4. Uma afirmação que escrevi e depois não consegui sustentar.** Cheguei a redigir, para a
seção 3, que "a maioria dos grandes estúdios de VFX já tem ComfyUI no pipeline de produção".
Não abri nenhuma fonte primária que sustente isso — o que tenho são blogs de mercado
aparecendo em resultado de busca, gênero notoriamente otimista e comercialmente interessado.
Reescrevi para atribuir explicitamente a afirmação a resultados de busca não abertos, e não a
conhecimento verificado.

**5. Uma armadilha de data que evitei por pouco.** Vários resultados de busca sobre "o primeiro
longa de IA em Cannes" são ambíguos entre *competição oficial*, *Marché du Film* e *festival
adjacente* — e um deles afirma explicitamente que nenhum longa gerado por IA estreou em Cannes.
Ao abrir a matéria, a distinção ficou clara e é decisiva para o wildcard: circular no mercado
não é ser selecionado. Se eu tivesse ficado no resumo de busca, teria escrito que o wildcard já
aconteceu. Ele não aconteceu.

## 9. Três cenários para 2031

### Provável — "o instrumento existe, a partitura não é portável"

Em 2031, dirigir mídia sintética é uma competência profissional reconhecida, com vocabulário
próprio e formação informal consolidada. Peças de faixa média — institucional, comercial
regional, vinheta, material didático — são produzidas por uma a três pessoas como rotina, e a
faixa intermediária de emprego em animação e VFX encolheu de forma visível, sem desaparecer:
sobreviveu quem migrou para direção e supervisão.

O controle é bom e é **preso**. Cada plataforma tem seus eixos, e migrar de fornecedor significa
refazer o trabalho de direção do zero, porque não existe formato intermediário. Estúdios
mantêm equipes inteiras dedicadas a reconstruir workflows quando um modelo é descontinuado — um
custo que ninguém previu em 2026 e que se tornou uma linha própria de orçamento.

O vídeo já não funciona como prova em nenhum contexto informal. Na perícia e no seguro, a
proveniência criptográfica virou requisito; no consumo cotidiano de notícia, ninguém clica no
selo. A convivência estável é com uma desconfiança difusa e barata: as pessoas não verificam,
simplesmente acreditam menos em tudo. A geração em tempo real existe e roda em nicho — jogos,
instalação, experimento — e não substituiu o vídeo linear como forma dominante.

### Desejável — "o controle virou portável, e a autenticidade virou padrão de captura"

Mesma base econômica do provável, com duas diferenças que mudam tudo.

Primeira: existe um **formato aberto de partitura de direção**. A intenção criativa — como a
câmera se move, quais quadros-chave ancoram a ação, que regras governam a animação — é
declarada num arquivo legível que roda em qualquer motor. O valor migrou do modelo para o
método, o que significa que profissionais acumulam patrimônio próprio ao longo da carreira em
vez de alugá-lo de uma plataforma.

**O que teria que acontecer para chegar lá:** um consórcio de fabricantes e estúdios concluindo
que o mercado total é maior que a fatia cativa de cada um — a decisão que produziu o MIDI. O
gatilho realista seria uma descontinuação traumática de modelo que custasse caro a muita gente
ao mesmo tempo.

Segunda: assinatura no ato da captura é **padrão silencioso** de todo sensor vendido, sem
opção de desligar e sem pedir atenção do usuário — a verificação acontece na plataforma, não no
olho de quem assiste. Isso preserva o que importa da prova audiovisual sem exigir do público um
comportamento que ele demonstradamente não tem.

**O que teria que acontecer:** uma plataforma dominante passar a degradar alcance de conteúdo
não assinado. Foi assim que o HTTPS venceu — por punição, não por convencimento.

### Indesejável — "controle total nas mãos de poucos, e prova nenhuma nas mãos de todos"

Em 2031 o controle fino é excelente e existe em três plataformas fechadas, caras, com termos de
uso que reivindicam direitos sobre o que passa por elas. O arquivo de controle não é exportável.
Quem não paga tem geração por prompt, que virou o degrau inferior de um mercado de dois níveis.
O "estúdio de uma pessoa" existe, mas é inquilino: sua capacidade produtiva inteira depende de
uma assinatura que pode mudar de preço ou de política sem aviso.

Do outro lado, a proveniência fracassou por indiferença — não por ataque técnico. Menos de 1% em
2026 virou menos de 5% em 2031, os selos existem e ninguém olha. O resultado não é um mundo
enganado; é um mundo que parou de tentar distinguir. Vídeo de acontecimento público vale o
quanto vale a confiança prévia em quem publicou, e não o quanto mostra. Quem tinha reputação
acumulada ganha; quem denuncia sem instituição por trás perde a única ferramenta que tinha.

**Sinal precoce deste cenário** (o que observar a partir de agora, e é observável já em 2027):
o fim das APIs abertas e dos pesos abertos na ponta de qualidade do controle fino. Se os eixos
de controle mais finos passarem a existir **apenas** dentro de interface proprietária, sem API e
sem exportação do grafo, o cenário indesejável está em curso. O segundo sinal é a verificação de
proveniência sendo **removida** de plataformas grandes por baixo engajamento — o momento em que
a indústria admite que ninguém clica.

## 10. O experimento

### "O diretor de um take só"

**O que é.** Uma peça audiovisual curtíssima — 20 segundos, um plano, uma ação específica e
descrita antes de começar — produzida **três vezes**, por três caminhos diferentes:

1. **Prompt puro:** descrever e gerar, iterando só pelo texto.
2. **Quadro-chave propagado:** produzir ou escolher um quadro à mão, definir início e fim, e
   propagar (EbSynth para estilo; controle de *start/end frame* num modelo de vídeo para
   movimento).
3. **Grafo de controle:** montar em ComfyUI um fluxo com ControlNet de profundidade ou pose, em
   que o movimento vem de uma referência e a aparência de outra.

A ação a ser produzida precisa ser **escrita e fechada antes** de qualquer geração, e precisa
conter pelo menos uma exigência espacial difícil de obter por sorte (por exemplo: "a mão entra
pela borda direita do quadro e a sombra dela cai sobre o objeto à esquerda").

**O que se mede** — e essa é a parte que faz disso experimento e não demonstração:
- **Número de iterações até a intenção original aparecer na tela**, por caminho.
- **Quantas vezes a intenção foi silenciosamente rebaixada** para caber no que o caminho
  entregava. Este é o dado mais importante e o menos visível: registrar toda vez que se pensou
  "está bom assim" em vez de "é isso que eu queria". Prompt puro faz isso o tempo todo e não
  avisa.
- **Custo de mudar de ideia:** depois de pronto, alterar um único parâmetro (a cor do objeto).
  Quanto se perde?
- **Reprodutibilidade por terceiro:** entregar a outra pessoa só o artefato de controle, sem
  conversa. O que sai parecido?

**Que pergunta sobre o futuro ele ajuda a responder.** A premissa central deste mapa é que o
gargalo migrou de *produzir* para *dirigir*. O experimento testa isso diretamente, e é
**falseável**: se o prompt puro chegar à intenção em número de iterações comparável ao do grafo,
a premissa está errada e D1 não é disrupção-raiz, é conforto de quem gosta de controlar. Ele
também mede a hipótese de e2 — se o artefato de controle é reprodutível por terceiro, ele é um
ativo; se não é, é só uma sessão de trabalho que não se transfere, e o mercado de e2.1 não
nasce.

**Que tecnologia emergente ele usa, e por que a madura não serve.** Usa as camadas de controle
composicional: ControlNet e grafo de nós, propagação por quadro-chave, controle de quadro
inicial e final. A tecnologia madura — geração por prompt — **é um dos braços do experimento,
como controle negativo**, e não serviria sozinha justamente porque não permite especificar a
exigência espacial: ela só permite pedir e torcer, que é exatamente a hipótese sob teste.
Animação à mão também não serviria: ela tem controle total por construção e, por isso, não
mede nada sobre a controlabilidade do que é gerado.

**O que faria quem testar mudar de ideia sobre o mapa.**
- Se o **grafo custar mais tempo total** que o prompt puro para chegar ao mesmo resultado, D1
  está superestimada: o controle existe mas não paga, e e1 se desloca vários anos à frente.
- Se o artefato de controle **não for reproduzível por outra pessoa**, e2 cai inteiro e com ele
  o ramo do mercado de workflows e da disputa autoral sobre método.
- Se a exigência espacial difícil **sair por prompt puro em duas ou três tentativas**, a
  premissa do documento inteiro precisa ser reescrita — o gargalo não migrou, só ficou mais
  barato errar.
- E se, ao entregar a três pessoas diferentes o mesmo grafo, saírem três peças
  **indistinguíveis**, então o controle fino já não é diferencial de direção e virou execução —
  isto é, amadureceu, e o tema desta análise mudou de seção 4 para seção 3.

## 11. Fontes

**Abertas e lidas integralmente** (oito):

1. `https://arxiv.org/abs/2404.02905` — *Visual Autoregressive Modeling: Scalable Image
   Generation via Next-Scale Prediction*. Sustenta a disrupção-raiz D2 e os números de
   FID/IS/velocidade e as leis de escala citados na seção 4. **Confiabilidade:** alta —
   artigo premiado no NeurIPS 2024, com números do próprio resumo. Ressalva: são números de
   benchmark de **imagem**, e eu os uso para argumentar sobre **vídeo**, o que é extrapolação
   minha, não do artigo.
2. `https://arxiv.org/abs/2606.16993` — *DreamX-World 1.0: A General-Purpose Interactive World
   Model*. Sustenta a existência de geração interativa em tempo real (16 FPS em oito RTX 5090,
   controle de câmera, instrução de evento) e o efeito e4. **Confiabilidade:** média — preprint
   recente (junho de 2026), sem revisão por pares confirmada, com números auto-reportados.
3. `https://rive.app/docs/editor/state-machine` — documentação da State Machine do Rive.
   Sustenta a seção 3 e a reformulação de D3. **Confiabilidade:** alta para o que a ferramenta
   faz, nula para adoção de mercado — é documentação de fabricante.
4. `https://runway.com/product/models/kling-3.0` — página do Kling 3.0 no Runway. Sustenta os
   controles já em produto (start/end frame, motion control, multi-shot, áudio nativo) na seção
   3.1. **Confiabilidade:** alta para o que é oferecido, baixa para desempenho real — é material
   comercial.
5. `https://www.cartoonbrew.com/artist-rights/union-study-says-generative-ai-will-disrupt-204000-jobs-three-years-237495.html`
   — cobertura do estudo da CVL Economics. Sustenta a ordem de grandeza do efeito e3.1.
   **Confiabilidade:** média, com duas ressalvas declaradas na seção 8 — o estudo foi
   co-encomendado por sindicato e associações (parte interessada) e o campo é de
   novembro-dezembro de 2023, anterior à geração de vídeo controlável.
6. `https://www.tubefilter.com/2026/05/26/cannes-film-festival-generative-ai-bytedance-seedance-hell-grind/`
   — Cannes 2026, Seedance 2.0 no Marché du Film, *Hell Grind* (Higgsfield AI, duas semanas,
   menos de US$ 500 mil). Sustenta o wildcard do longa por uma pessoa e a distinção entre
   mercado e competição. **Confiabilidade:** média — imprensa especializada de nicho,
   confirmando fatos verificáveis, mas números de orçamento vêm da produtora.
7. `https://www.softwareseni.com/c2pa-adoption-in-2026-hardware-platforms-and-verification-reality/`
   — estado da adoção do C2PA em 2026. Sustenta a seção 3.2, o sinal fraco nº 2 e o efeito e7.1.
   **Confiabilidade:** média — análise secundária de blog corporativo; o dado decisivo (menos de
   1% das imagens noticiosas) é atribuído por ela ao Reuters Institute, fonte **que eu não abri**
   e cuja verificação fica pendente. Tratar como indício forte, não como dado confirmado.
8. `https://www.camara.leg.br/proposicoesWeb/fichadetramitacao?idProposicao=2487262` — ficha de
   tramitação do PL 2338/2023 na Câmara dos Deputados. Sustenta a nota sobre o Brasil abaixo.
   **Confiabilidade:** alta — fonte primária oficial.

**Consultado apenas em resultado de busca, sem abrir a página** (usado com ressalva explícita no
corpo do texto, nunca como dado duro):
- Estado das propostas de Rule 901(c) e Rule 707 nas regras federais de evidência dos EUA
  (seção 3.2) — apurado em resumo de busca; a informação de que o comitê decidiu em maio de 2026
  não alterar as regras **não foi verificada em fonte primária**.
- Adoção de ComfyUI em estúdios de VFX (seção 3.1) — blogs de mercado, gênero comercialmente
  interessado.
- Ação de acionistas contra a Adobe questionando as alegações de "commercially safe" do Firefly
  (junho de 2026) — apareceu em busca, página não aberta; **não usei essa informação em nenhum
  efeito do mapa**, registro apenas porque toquei o assunto da disputa jurídica embutida no
  acervo licenciado.
- A lista de preprints de 2026 sobre vídeo autoregressivo em tempo real (Causal Forcing,
  MotionStream, Matrix-Game 3.0, minWM, entre outros) — abri apenas um deles (fonte 2); os
  demais sustentam a afirmação de que **existe uma safra**, não qualquer resultado específico.

**Especulação declarada da própria skill, sem fonte:** toda a seção 5 a partir da 2ª ordem; as
três disrupções-raiz enquanto **recorte** (os fatos que as sustentam têm fonte; a decisão de
agrupá-los assim é minha); os três cenários da seção 9; o paralelo com o MIDI e com o HTTPS; e o
paralelo histórico com diafragma e obturador na seção 2.

### Nota sobre o Brasil

O recorte deste mapa é global, com uma ressalva local que muda prazos, não direção.

O PL 2338/2023 — verificado na ficha oficial da Câmara — está **aguardando parecer do relator em
Comissão Especial**, em regime de prioridade, com **37 projetos apensados**, vários deles sobre
identificação de conteúdo sintético e direitos autorais de obra gerada por IA. Isto é: no
Brasil, a rotulagem de mídia sintética não é uma regra em vigor cuja adoção se possa observar;
é um texto em disputa, e a forma final dele decidirá se e7.1 chega aqui por obrigação legal ou
por pressão de plataforma estrangeira.

Duas consequências práticas para quem projeta mídia no Brasil e trabalha com horizonte 2031:

1. **Descasamento de calendário.** É provável que a obrigação de rotular chegue a produtos
   brasileiros **antes** de a infraestrutura de proveniência no ato da captura existir aqui de
   forma acessível. O resultado é rótulo declaratório — alguém marcando uma caixa — e não
   assinatura criptográfica. Rótulo declaratório resolve conformidade e não resolve prova, o que
   empurra o Brasil para a versão fraca de e7.1.
2. **A disputa de emprego de e3.1 é mais aguda aqui**, porque a produção audiovisual brasileira
   é proporcionalmente mais concentrada justamente na faixa média que o mapa aponta como a
   primeira a ser absorvida — institucional, publicidade regional, conteúdo para plataforma.
   A faixa de altíssimo orçamento, que no cenário provável sobrevive, é pequena no país.

Ambos os pontos são **inferência minha** a partir da ficha de tramitação e da estrutura do
mapa, não achados de fonte. Não abri fonte brasileira sobre estrutura do mercado audiovisual.

## 12. Anexo — o levantamento bruto

### 12.1 Entrevista do Passo 1 — como foi resolvida

A rodada foi executada sem interlocutor ao vivo. As cinco perguntas obrigatórias vieram
respondidas por escrito no despacho:

| # | Pergunta | Resposta recebida |
|---|---|---|
| 1 | Horizonte | 2031 |
| 2 | Recorte | Quem projeta mídia e interação; global, com nota sobre o Brasil |
| 3 | Descartado | O que já é comum em produto de massa (a régua da disciplina); nada além |
| 4 | Viés | Neutro |
| 5 | Palpite de disrupção | Nenhum — levantar do zero |

Extras fornecidos: profundidade de três ordens; modo "a partir de uma inovação/tema, não de um
setor"; e o critério de mudança de ideia — *evidência de que a adoção já passou da maioria
inicial (Rogers), ou de que a tecnologia só melhora o que existe sem romper nada*.

A condição de saída da entrevista (itens 1 e 2 respondidos) foi satisfeita. **A bifurcação que
não pude repreguntar:** o item 3 descarta "o que já é comum em produto de massa", o que colide
parcialmente com o item 5 ("levantar do zero"), porque várias das capacidades mais interessantes
— motion control, start/end frame — *já* são produto de massa. Resolvi pelo critério do Passo 2,
que é mais específico: elas foram para a seção 3 como estado atual, e a raiz foi formulada no
nível do que ainda falta (portabilidade, composicionalidade, iteração barata). Um interlocutor
poderia ter preferido o contrário.

### 12.2 Candidatas a disrupção-raiz REJEITADAS

**R1 — "Vídeo por prompt de texto".** Teste 1: o que rompe? Torna mais rápido e barato o que já
se fazia com equipe. Teste 3: o que falta? Nada — está em produção, pago, em uso comum.
**Rejeitada por maturidade.** Foi para 3.1.

**R2 — "Animação como máquina de estados (Rive)".** Aceita na primeira passagem, **rejeitada na
revisão**. Teste 3 respondido por escrito: nada falta, é produto com runtime multiplataforma e
base instalada. Reformulada como D3 (a fusão com síntese, que não existe). Documentado na
seção 8.

**R3 — "Motion Control / transferência de performance".** Rejeitada pelo mesmo teste 3: está na
página de produto que abri. Recurso, não raiz.

**R4 — "Proveniência criptográfica (C2PA) como infraestrutura".** Passa nos três testes — rompe
o ônus da prova audiovisual; agora porque hardware e plataforma chegaram; falta penetração real.
**Rejeitada como raiz por outro motivo:** ela é causalmente **consequência** da facilidade de
falsificar, não causa independente. Mantê-la como raiz duplicaria o ramo e7. Vive no mapa como
e7.1, com o peso que merece.

**R5 — "Geração procedural pura (Cavalry, Graphite, nós sem IA)".** Rejeitada por **fronteira de
tema**: é o tema 14 da disciplina. Aparece aqui só quando o procedural condiciona geração.

**R6 — "Modelos de pesos abertos (FLUX, ecossistema local)".** Rejeitada no teste 1: muda quem
paga e onde roda, não o que é possível. É condição de acesso, não disrupção. Merece nota: ela é
o que decide entre o cenário provável e o indesejável da seção 9 — por isso virou **sinal de
observação** no cenário indesejável, e não efeito.

### 12.3 Efeitos cortados ou revisados

- **CORTADO** — "A IA vai transformar toda a indústria criativa." Não é efeito, é ausência de
  análise. Cortado pela regra do Passo 5 sobre parar de ramificar quando o efeito deixa de ser
  específico.
- **CORTADO** — "Surgem novas profissões." Vago no mesmo sentido. Substituído por afirmações
  específicas e falseáveis: e1.1.1 (currículo de animação) e e5.1.1 (alfabetização de
  arquitetura generativa).
- **CORTADO** — "Os festivais terão categorias separadas para obra gerada por IA." Provável
  demais e pequeno demais para ocupar um nó; virou uma linha no wildcard de Cannes.
- **CORTADO (3ª ordem em excesso)** — quatro efeitos de terceira ordem que eram reformulações da
  segunda com palavras mais grandiosas ("a cultura visual se transforma", "a sociedade
  renegocia o real"). Se um efeito de 3ª ordem não nomeia **o que exatamente** se reorganiza —
  qual profissão, qual regra, qual formação —, ele é enfeite.
- **REVISADO** — e1.2: confiança de alta para média; reescrito para carregar a mudança de
  briefing, não só o aumento de variantes. Motivo na seção 7, item 1.
- **REVISADO** — e7.1: prazo de 2028 para 2029, e e7.1.1 para 2031. Motivo: falta o mecanismo de
  punição que fez o HTTPS andar. Seção 7, item 2.
- **REVISADO** — e6 e todo o seu ramo: confiança rebaixada para baixa em todos os nós, depois de
  reconhecer que D3 é aposta de composição e não extrapolação de evidência.

### 12.4 Buscas que não deram em nada de aproveitável

- Busca por **dado de penetração real do controle fino em produção profissional** (que
  porcentagem de peças comerciais usa ControlNet, grafo ou quadro-chave propagado): nada. Só
  material de fornecedor e blog de mercado. **Este é o maior buraco do documento** — é a
  evidência que decidiria se D1 já passou da maioria inicial de Rogers, que é exatamente o
  critério de mudança de ideia declarado no Passo 1. Não consegui responder a essa pergunta.
- Busca por **dados brasileiros de estrutura do mercado audiovisual** frente à automação: não
  perseguida até o fim; a nota sobre o Brasil ficou apoiada na ficha de tramitação legislativa e
  em inferência declarada.
- Busca por **preço de inferência por minuto de vídeo gerado** ao longo do tempo: resultados
  desencontrados e desatualizados. Sem isso, os efeitos e4.2 e todo o custo de D3 ficam sem
  ancoragem numérica — declarado como confiança baixa.
- Busca por **jurisprudência concreta** em que vídeo autêntico foi rejeitado por suspeita de
  geração: só literatura jurídica discutindo a possibilidade, nenhum caso. Por isso esse cenário
  ficou como **wildcard**, e não como efeito do mapa.
- Tentativa de confirmar em fonte primária (Reuters Institute) o número de "menos de 1% das
  imagens noticiosas com C2PA": **não feita**. O número entra no documento com atribuição
  indireta e ressalva na seção 11.

### 12.5 Verificação do checklist final da skill

- [x] Entrevista feita e registrada (12.1), com as suposições declaradas na seção 7.
- [x] Nenhuma disrupção-raiz é tecnologia madura — seis candidatas rejeitadas em 12.2, duas
      delas por falharem especificamente o teste 3.
- [x] Todo efeito tem `id`, `ordem`, `sinal`, `prazo`, `confianca`, e é frase afirmativa.
- [x] Efeitos descartados e revisados existem e estão documentados (12.3): quatro cortes de
      conteúdo, um corte em bloco de 3ª ordem, três revisões.
- [x] As 12 seções estão presentes com os títulos literais.
- [x] Nenhuma fonte inventada; o que é especulação está marcado como especulação, e o que veio
      de resumo de busca sem abertura de página está marcado como tal.
