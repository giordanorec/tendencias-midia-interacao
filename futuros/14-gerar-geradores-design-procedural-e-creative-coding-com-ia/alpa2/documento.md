---
tema: "Gerar geradores: design procedural e creative coding com IA"
slug: gerar-geradores-design-procedural-e-creative-coding-com-ia
autor_login: alpa2
zona_de_interesse: Criação e plataforma
data: 2026-09-18
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 4
efeitos_ordem_2: 7
efeitos_ordem_3: 7
tecnologias_citadas: [Three.js, Blender Python, Blender geometry nodes, Houdini (SideFX), Apex Script, Model Context Protocol, GLSL, SVG, TikZ, Manim, p5.js, Processing, img2threejs, MeshCoder, 3DCodeBench, SGP-GenBench, 3D Gaussian Splatting, Cavalry, Graphite, WaveFunctionCollapse]
fontes: 10
confianca: media
experimento: "Pedir a três modelos que reconstruam o mesmo objeto como programa procedural e como malha, e medir peso, editabilidade e quantas rodadas de correção cada caminho exige."
skill_usada: futurizacao-alpa2
publico_ok: false
---

# Gerar geradores: design procedural e creative coding com IA

> **Nota de procedimento.** Esta rodada foi executada sem usuário presente. A entrevista do
> Passo 1 foi respondida por um conjunto de respostas pré-definidas fornecidas junto ao pedido;
> nada foi perguntado de volta. As suposições que a skill teve de adotar por conta própria estão
> declaradas na seção 7. Data de execução: 18/09/2026.

## 1. Resumo

A geração procedural não é novidade: Houdini, geometry nodes, shaders e creative coding em
Processing são tecnologia madura, com décadas de uso. O que mudou entre 2025 e 2026 é **quem
escreve a regra**. Modelos de código passaram a produzir programas gráficos que rodam —
scripts Blender, SVG, GLSL, TypeScript de Three.js — com taxas de executabilidade que saíram do
território da curiosidade. O `3DCodeBench` (maio/2026) mede 69,2% de executabilidade média em
turno único entre doze modelos de fronteira, e 97,4% quando o modelo recebe de volta o erro do
interpretador. Isso reposiciona o artefato: em vez de gerar o pixel ou a malha, gera-se **o
programa que produz o pixel ou a malha** — e o programa continua editável, versionável, leve e
legível.

O mapa a seguir trata de três disrupções-raiz: (1) a IA como autora do gerador; (2) a disputa
econômica entre mídia programada e mídia capturada/gerada como dado; e (3) o gerador entregue e
executado no cliente, em vez do arquivo. Deriva delas 18 efeitos em três ordens, com horizonte
2031, e depois ataca o próprio resultado. A conclusão que mais se sustenta é a de primeira
ordem — o entregável criativo vira um programa parametrizado, e a revisão criativa vira revisão
de código. A que menos se sustenta é a de terceira ordem sobre reorganização do ensino de
design: é plausível, mas não há precedente de currículo se reorganizando nesse prazo.

A confiança geral é **média**, e cai deliberadamente para **baixa** na terceira ordem. Isso é o
resultado esperado do método, não uma falha dele.

## 2. O tema

O tema é o **design procedural** — produzir a regra que produz o artefato, em vez de produzir o
artefato — no momento em que a IA passa a ser capaz de escrever essa regra.

Três recortes delimitam o objeto:

- **Não é** captura de realidade em 3D (fotogrametria, splats, renderização neural). Ali o
  artefato é *dado medido*, não regra. Esse é outro tema.
- **Não é** geração de vídeo e imagem como mídia final. Ali o artefato é o *pixel*, e ele não é
  editável senão por nova geração.
- **É** a regra como artefato, e a IA escrevendo a regra: o script Blender que reconstrói um
  objeto, o shader GLSL escrito a partir de uma frase, o grafo de nós montado por um agente, o
  SVG produzido como programa simbólico, a animação Manim dirigida por MCP.

A tensão de fundo é econômica e política ao mesmo tempo. **Econômica:** mídia gerada como dado
é pesada — uma cena de splatting passa de dezenas de megabytes mesmo comprimida, enquanto um
gerador procedural equivalente cabe em kilobytes de texto. **Política:** mídia gerada como dado
é opaca — não se sabe o que há dentro, não se edita um parâmetro, não se audita. Mídia
programada é inspecionável por construção: é código.

Horizonte adotado: **2031**. Público: quem projeta mídia e interação. Recorte: global, com uma
nota sobre o Brasil ao final da seção 3. Régua de corte da disciplina: o que já é comum em
produto de massa sai do mapa de disrupções e vai para o estado atual.

## 3. Onde isso está hoje

### O que já existe e funciona

**Procedural clássico, sem IA — maduro.** Houdini e os geometry nodes do Blender são padrão de
indústria; WaveFunctionCollapse e famílias de ruído são folclore resolvido de geração de mapas;
Processing e p5.js sustentam uma comunidade de creative coding com duas décadas; shaders são
infraestrutura. Nada disso entra como disrupção — está na régua do "comum em produto de massa".

**IA escrevendo código gráfico — emergente, com números.** É aqui que a fronteira se move:

- **`3DCodeBench`** (arXiv:2606.01057, 31/05/2026) avalia doze modelos de visão-linguagem
  gerando modelos 3D como código Blender Python: 212 categorias de objeto, 26 mil pares
  texto/imagem–código–objeto. Executabilidade média de **69,2%** em turno único; **97,4%** em
  múltiplos turnos com realimentação do erro. As falhas concentram-se em incompatibilidade de
  API; os sucessos ainda sofrem de "componentes geométricos desconectados ou flutuantes". Ou
  seja: o código roda, a geometria nem sempre fecha.
- **`MeshCoder`** (arXiv:2508.14879) treina um modelo multimodal para traduzir nuvem de pontos
  em script Blender editável, cobrindo 41 categorias de objeto. O argumento explícito é o da
  editabilidade: alterar a forma passa a ser alterar o código.
- **Symbolic Graphics Programming** (arXiv:2509.05208, aceito em TMLR em 08/2026) formaliza a
  tarefa "descrição em linguagem natural → programa gráfico simbólico (SVG)" e propõe o
  benchmark `SGP-GenBench`, com três eixos: fidelidade de objeto, fidelidade de cena e
  composicionalidade. O achado relevante para o mapa: modelos proprietários de fronteira
  dominam, e treino por RL com recompensa visual (SigLIP/DINO) leva um modelo aberto de 7B ao
  patamar deles — e induz **decomposição mais fina do objeto em primitivas controláveis**. Isto
  é: o treino melhora a *estrutura* do programa, não só o resultado.
- **Shaders por linguagem natural.** `ShadAR` (arXiv:2602.17481) gera shader em tempo real a
  partir de intenção falada, para transformar a percepção visual em realidade aumentada; o
  `AI Co-Artist` (EvoMUSART 2026) faz evolução interativa de animação GLSL sem que o usuário
  precise ler código.
- **`img2threejs`** — o projeto que a turma destacou. Reconstrói o objeto de uma imagem de
  referência como modelo Three.js **só código**: TypeScript que monta a geometria a partir de
  primitivas, shaders procedurais e hierarquia de animação (pivôs, sockets, colliders). Oito
  passes sequenciais (blockout → structural → form → material → surface → lighting →
  interaction → optimization), com portões determinísticos entre eles e comparação
  render-contra-referência por região. Licença Apache 2.0. Dois argumentos do projeto importam
  para este mapa: o de **peso** — emite TypeScript na casa dos KB, não binário na casa dos MB —
  e o de **token** — delega o trabalho mecânico (validação, PBR, JSON, gating) a scripts Python
  de stdlib, e gasta token do modelo só onde há julgamento.

**Agentes dentro das ferramentas — emergente, deliberadamente estreito.** No SIGGRAPH 2026, a
SideFX apresentou suporte a MCP no Houdini 22: um "Apex Script Comfort Package" que liga o
modelo a uma biblioteca curada de sintaxe, exemplos e documentação, para ajudar a escrever
código procedural de rigging. É *sneak peek* via SideFX Labs, escopo restrito a rigging, não
recurso de produção. O mesmo evento registrou Adobe, Blender, Boris FX, Foundry, SideFX e Epic
descrevendo o mesmo movimento arquitetural: o agente passa a morar *dentro* da aplicação, pelo
MCP, em vez de ao lado dela.

**Geração em runtime — existe, mas quase não embarca.** A leitura corrente da indústria de
jogos é que chamar o modelo durante a partida é lento, caro por sessão, inconsistente quando
duas coisas precisam combinar, e irreprodutível quando dá errado. O caminho que efetivamente
embarca em 2026 é o oposto: **a IA escreve o gerador; o gerador roda determinístico, offline,
por semente, com custo zero por sessão e a IA fora do loop.**

### O que existe e não pegou

- **Texto → 3D de qualidade de produção sem retrabalho.** Os geradores de malha por difusão
  entregam bloco, não peça de pipeline; a malha sai não-editável e o artista refaz.
- **Grafo de nós gerado por IA, ponta a ponta.** Anuncia-se há dois anos; o que existe de
  concreto em 2026 é assistência dentro de um recorte estreito (o caso Houdini/Apex), não
  montagem autônoma de grafo complexo.
- **Geração de conteúdo por LLM no runtime do jogo.** Discutida desde 2024 (há literatura de
  CHI/UIST sobre "runtime behavior generation"), praticamente ausente de jogo publicado.

### Quem está construindo

Laboratórios acadêmicos de gráficos e síntese de programas (os quatro papers acima, entre
arXiv cs.GR e TMLR); fornecedores de DCC convertendo suas APIs em superfície de agente (SideFX,
Blender, Adobe, Epic, Foundry); projetos de código aberto que tratam "objeto como programa"
como princípio (`img2threejs`, `Graphite`, `material-maker`, `nannou`, `curv`, `css-doodle`);
e a comunidade de creative coding, que é quem historicamente sustenta a cultura da regra como
obra (OpenProcessing, Shadertoy).

### Nota sobre o Brasil

O Brasil entra neste tema pelo lado da **cultura de creative coding**, não pelo da indústria de
ferramenta. Existe uma comunidade organizada — a **Compoética**, Encontro Brasileiro de
Programação Criativa, herdeira dos Processing Community Day Brasil de 2021–2023, com edição
presencial em São Paulo e transmissão on-line — e há pesquisa publicada sobre ensino de
programação criativa para estudantes de design em graduações brasileiras. É uma base de pessoas
que já pensa a obra como programa; é exatamente o público para quem "a IA escreve o gerador"
não é ameaça abstrata, mas mudança de ofício. Não encontrei, nesta rodada, evidência de
laboratório ou empresa brasileira construindo os modelos que escrevem esses geradores — o que
sugere um papel de **adoção e crítica**, não de fornecimento.

## 4. As disrupções-raiz

Cada candidata passou pelos três testes do Passo 2. O que foi rejeitado está na seção 12.

### D1 — A IA como autora do gerador

- **O que rompe.** Muda quem pode produzir um sistema gerativo. Até aqui, escrever um shader,
  um grafo procedural ou um script de geometria exigia formação técnica específica; a fronteira
  entre "quem desenha" e "quem programa o desenho" era real e cara de atravessar. Se o modelo
  escreve o gerador a partir de uma referência ou de uma frase, a barreira deixa de ser a
  sintaxe e passa a ser a **especificação**. Não é "mais rápido fazer o que já se fazia": é
  outra gente fazendo, e um artefato de natureza diferente (programa, não imagem) saindo na
  ponta.
- **Por que agora, e não há cinco anos.** Três limiares cruzados entre 2025 e 2026: modelos de
  código bons o bastante para produzir programas gráficos que *rodam* (69,2% em turno único,
  97,4% com realimentação, no `3DCodeBench`); realimentação verificável — o interpretador, o
  renderizador e o comparador visual dão sinal automático de acerto, o que permitiu treinar por
  RL (o caso SGP-GenBench com Qwen-2.5-7B); e um protocolo de conexão (MCP) que dá ao modelo
  acesso à API real da ferramenta, em vez de forçá-lo a adivinhar sintaxe.
- **O que ainda falta.** Geometria que fecha (os "componentes desconectados ou flutuantes" são
  a falha residual declarada); avaliação automática de qualidade que capture julgamento de
  direção de arte, não só similaridade perceptual; e escopo — os casos que funcionam hoje são
  objeto isolado, não cena, sistema ou identidade visual inteira.

### D2 — A regra disputa com o dado: mídia programada contra mídia capturada

- **O que rompe.** Muda o que é economicamente viável entregar. Splat e vídeo gerado carregam
  fidelidade num pacote pesado e opaco; programa carrega estrutura num pacote leve e
  inspecionável. Enquanto o programa não era gerável em escala, não havia disputa — o
  procedural ficava onde o artista procedural estava. Com D1, a disputa existe: para o mesmo
  briefing, há dois caminhos com perfis de custo, peso, editabilidade e auditabilidade
  radicalmente diferentes. Isso redefine *o que passa a ser possível* em plataformas restritas
  por banda, memória e bateria — web, móvel, óculos.
- **Por que agora.** A ordem de grandeza ficou explícita. Cena de splatting: dezenas de MB
  mesmo após compressão (a literatura de compressão de 2026 celebra chegar a ~4 MB como
  conquista, partindo de centenas). Gerador procedural equivalente: KB de texto. Fator de
  10² a 10³. Antes de D1, esse fator não estava disponível para quem não sabia escrever o
  gerador.
- **O que ainda falta.** Fotorrealismo — o procedural perde de longe onde o realismo é o
  produto; ferramenta de autoria que permita ao designer *dirigir* o gerador sem ler código; e
  algum caso público, medido, em que um produto real trocou splat por programa e ganhou.

### D3 — O gerador como entregável executável no cliente

- **O que rompe.** Muda o que trafega. Se o entregável é o programa, a aplicação baixa regra e
  semente em vez de asset, e reconstrói localmente. Isso rompe a lógica de CDN, de cache, de
  loja de assets e de licenciamento: passa-se a distribuir uma *família infinita de
  resultados*, não um arquivo. E rompe o modelo de segurança: código de terceiro executando no
  cliente é superfície de ataque, coisa que um `.glb` não é.
- **Por que agora.** É consequência direta de D1 + D2, e tem um precedente forte: é exatamente
  o que a web fez com tipografia (fonte variável no lugar de imagem de texto) e com ícone (SVG
  no lugar de PNG). A diferença é que agora o programa pode ser escrito sob demanda.
- **O que ainda falta.** Quase tudo: formato de troca para "objeto como programa"; sandbox e
  assinatura; um mercado. Esta é a mais especulativa das três, e o mapa a trata assim — todos
  os seus efeitos saem com sinal fraco e confiança baixa.

**Nota de corte.** A disrupção que a descrição do tema sugere como wildcard — "um motor de jogo
em que o conteúdo é gerado como código no momento em que o jogador chega" — **não** entrou como
disrupção-raiz. Ela é um caso particular de D3 e, no teste 3, esbarra numa objeção concreta e
documentada: a indústria já examinou geração em runtime e concluiu que latência, custo por
sessão, consistência e irreprodutibilidade a inviabilizam. Ela vai para a seção 6, como
wildcard, que é o lugar honesto dela.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "A IA como autora do gerador — de uma imagem ou de uma frase sai um programa procedural editável, não uma malha nem um pixel"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "O entregável de um estúdio de design deixa de ser o arquivo final e passa a ser um programa parametrizado que produz variações."
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "A revisão criativa migra para ferramentas de código: diff, branch, versão e teste substituem a aprovação de um render."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "A formação em design se reorganiza em torno de especificação de sistemas, e o portfólio deixa de ser uma coleção de imagens para ser uma coleção de geradores."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "As ferramentas de criação expõem seus grafos e APIs a agentes por protocolo aberto, e o grafo de nós vira a interface de negociação entre humano e modelo."
            sinal: forte
            prazo: 2027
            confianca: alta
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "O valor competitivo do software criativo desloca-se da interface gráfica para a qualidade da API que ele oferece a agentes."
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "O portão de qualidade automático — renderizar, comparar com a referência, reprovar e repetir — torna-se a peça central do pipeline, porque o modelo acerta o código e erra a geometria."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Benchmarks de grafismo executável passam a pesar na escolha de modelo por estúdios, como benchmarks de código pesam hoje na escolha por times de engenharia."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Forma-se uma engenharia de avaliação visual automática, e parte do julgamento do diretor de arte passa a existir como métrica explícita e disputável."
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: "A regra disputa com o dado — mídia programada (leve, inspecionável) contra mídia capturada ou gerada como dado (pesada, opaca)"
    efeitos:
      - id: e3
        ordem: 1
        efeito: "Em web, móvel e óculos, o conteúdo 3D procedural gerado por IA vence por banda, memória e bateria mesmo perdendo em fotorrealismo."
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "Retorna uma estética procedural assumida — paramétrica, estilizada, de superfície matemática — adotada como escolha de linguagem e não como limitação técnica."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Leveza e explicabilidade viram argumento de marca e critério de compra institucional, pelo mesmo caminho que acessibilidade percorreu na década anterior."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "Consolidam-se pipelines híbridos em que a captura vira referência de entrada e o programa vira o entregável, com o splat servindo de insumo para o gerador."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "A cadeia de direitos muda de objeto: a licença passa a incidir sobre a regra e sobre a faixa de parâmetros, não sobre o arquivo entregue."
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: "O gerador como entregável executável no cliente — trafega regra e semente, não arquivo"
    efeitos:
      - id: e4
        ordem: 1
        efeito: "Aplicações passam a transportar programas curtos em vez de ativos binários, e o cache deixa de ser de arquivo para ser de semente mais regra."
        sinal: fraco
        prazo: 2029
        confianca: baixa
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "Surge um formato de troca para objeto-como-programa, com sandbox e assinatura, porque código de terceiro executando no cliente é superfície de ataque."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "A curadoria de mídia incorpora revisão de segurança, e aparece a função de mantenedor de biblioteca de geradores como papel profissional reconhecido."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "Mercados de geradores parametrizados substituem lojas de ativos nos nichos em que customização vale mais que acabamento."
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "A disputa autoral desloca-se para a regra, e o direito precisa responder quem detém titularidade sobre uma família infinita de resultados possíveis."
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o YAML não diz

**A tensão entre `e1` e `e2` é a mais interessante do mapa, e ela é uma contradição.** `e1` diz
que o entregável vira programa — leve, editável, transparente. `e2` diz que o pipeline fica
dominado por um portão de qualidade que renderiza e compara imagens. Ou seja: para garantir que
a mídia programada esteja certa, é preciso gerar mídia-dado o tempo todo e olhar para ela. A
promessa de leveza é da *entrega*; o *processo* de chegar lá é caro em computação e em token.
Quem adotar isso esperando economia imediata vai se decepcionar: a economia está no ciclo de
vida do artefato (editar um parâmetro custa quase nada), não na produção inicial.

**`e1.2` é o efeito mais seguro do mapa e o menos discutido.** A adoção de MCP pelas DCCs é
observável agora, tem nomes e datas, e não depende de nenhuma outra coisa acontecer. Mas ele
carrega uma consequência que desagrada: se o agente conversa com a ferramenta pela API, a
**interface gráfica deixa de ser onde o produto se diferencia** (`e1.2.1`). Isso mexe com o
ativo mais caro de décadas de software criativo. É a razão pela qual suspeito que a adoção seja
mais lenta do que o anúncio sugere — a SideFX lançou o recurso como *sneak peek*, escopo
restrito a rigging, e essa cautela pode não ser só técnica.

**`e3` não é uma vitória, é uma partilha de terreno.** A formulação da pergunta da disciplina
("quem vence na web, no jogo, no óculos?") supõe um vencedor. O mais provável é `e3.2`: captura
para a referência, programa para o entregável. O fator de 10²–10³ em peso é real, mas só
importa onde a banda aperta; onde o realismo é o produto (arquitetura, patrimônio, treinamento
de robô), o dado continua ganhando, e ganha sozinho.

**A terceira ordem de D3 é quase toda jurídica, e isso não é coincidência.** Quando o artefato
vira regra, a pergunta "de quem é isto?" fica sem resposta pronta. O direito americano fechou
em março de 2026 a questão da máquina como autora — não é — mas não respondeu à pergunta que
`e4.2.1` levanta, que é outra: se um humano especifica uma regra que gera infinitos resultados,
sobre o que exatamente recai a titularidade? Sobre o código? Sobre cada saída? Sobre nenhum?
Não há jurisprudência; há analogia com software e com obra derivada, e as duas puxam para
lados diferentes.

**Por que nada passa da terceira ordem.** É regra do formato da disciplina. Mas vale registrar
onde a quarta ordem estaria se houvesse: na relação entre alfabetização em código e acesso à
expressão visual. Se a obra vira programa, saber ler programa vira condição de leitura crítica
da mídia — e isso é um problema educacional de escala, não um problema de design.

## 6. Sinais fracos e wildcards

**Sinais fracos observáveis hoje:**

1. **A economia da geração sendo recontada em token.** O `img2threejs` se mede em *eficiência
   de token*, e resolve isso de um jeito revelador: empurra tudo que é mecânico (validação,
   PBR, JSON, gating) para scripts de stdlib e gasta modelo só onde há julgamento. Isso é uma
   afirmação sobre o que a IA *deve* fazer, não sobre o que ela *pode*. Se virar padrão, o
   projeto de pipelines criativos passa a ser exercício de alocação: onde vale um modelo, onde
   vale um `if`.
2. **Treino por RL melhorando a estrutura do programa, não só a imagem.** No SGP-GenBench, o
   treino induziu "decomposição mais fina de objetos em primitivas controláveis". O modelo não
   aprendeu a desenhar melhor: aprendeu a **organizar melhor o código**. Se isso generalizar, a
   IA começa a produzir geradores mais legíveis e mais parametrizáveis com o tempo — e a
   editabilidade deixa de ser um subproduto feliz para virar objetivo de treino.
3. **A IA dirigindo a ferramenta pelo protocolo, não gerando o arquivo.** Os servidores MCP de
   Manim são o exemplo miniatura e didático: o modelo não gera vídeo, gera a instrução para a
   biblioteca que gera o vídeo. A camada de mídia sai do modelo e volta para a ferramenta.
4. **Um projeto de reconstrução procedural com tração de comunidade de código aberto**
   (`img2threejs`, Apache 2.0, ecossistema de plugins e forks). Tração em torno de um princípio
   — "só código" — é sinal de que há uma posição estética-política sendo formada, não só uma
   ferramenta sendo usada. Ressalva na seção 8 sobre o número de estrelas.

**Wildcards:**

- **Alto impacto, baixa probabilidade — o motor que escreve o mundo na chegada do jogador.**
  Conteúdo compilado sob demanda, no cliente, no instante em que é necessário. Hoje isso é
  barrado por latência, custo por sessão e inconsistência entre elementos que precisam combinar.
  Se um modelo pequeno, local, especializado em uma DSL gráfica restrita cruzar o limiar de
  latência aceitável (dezenas de milissegundos) rodando no dispositivo, as três objeções caem
  de uma vez, e `e4`, `e4.1` e `e4.2` antecipam-se em anos. Probabilidade até 2031: baixa.
  Impacto: refaz o mapa inteiro.
- **Wildcard reverso, quase nunca considerado — a IA reconstrói geradores *existentes* e
  descobre que eles são triviais.** Se modelos passam a ler um resultado visual e emitir o
  programa que o produz, uma consequência incômoda é que **estilos viram engenharia reversa
  barata**. A identidade visual de um estúdio, o *look* de um jogo, a assinatura de um artista
  generativo — coisas hoje protegidas pela dificuldade de reproduzir — passam a ser
  decompiláveis a partir de uma imagem. Não há remédio jurídico claro: estilo não é protegido,
  e o código resultante é original em sua expressão. Isso não destrói o mercado; move-o de
  "quem sabe fazer" para "quem chegou antes e tem público".
- **Wildcard institucional.** Uma norma pública de acessibilidade ou sustentabilidade digital
  que exija ativos abaixo de certo peso ou com estrutura auditável empurraria `e3.1.1` de
  argumento de marca para exigência de contrato. Seria o caminho mais rápido e mais chato para
  a mídia programada vencer: por regulação, não por mérito.

## 7. Contra o próprio mapa

### 7.1 Qual efeito é só extrapolação linear do presente

**`e3` é o pior caso.** Ele pega a curva "procedural é mais leve" e a estica até "vence na web,
no jogo e no óculos". Mas peso não é a única variável, e historicamente quase nunca foi a
decisiva: a web engordou de forma monotônica por trinta anos, apesar de cada geração ter um
argumento de leveza. O que decide adoção em plataforma restrita costuma ser *ferramenta
disponível e mão de obra treinada*, não bytes. **Revisado:** `e3` foi reescrito de "vence" para
"vence por banda, memória e bateria mesmo perdendo em fotorrealismo", e o efeito que carrega o
desfecho realista passou a ser `e3.2` (híbrido), não `e3.1` (estética procedural volta a
dominar). A pergunta original da disciplina — "a estética procedural volta a dominar?" — tem,
neste mapa, a resposta **provavelmente não**.

**`e2.1` também é linear demais**, mas de outro jeito: transporta para o design o hábito, muito
específico da engenharia de software, de escolher ferramenta por benchmark. Estúdio de design
não compra assim; compra por indicação, por portfólio e por quem já usa. Mantido, com confiança
média e não alta.

### 7.2 Qual efeito assume velocidade de adoção sem precedente

**`e1.1.1` — a reorganização do ensino de design até 2031 — é o mais frágil do mapa.**
Comparável mais próximo: a incorporação de UX e design de interação aos currículos de design
gráfico, que levou de dez a quinze anos entre a prática de mercado estabilizar e o currículo
mudar. Aqui, a prática de mercado nem estabilizou. Cinco anos para reorganizar formação é
otimista por um fator de dois a três. **Mantido no mapa**, porque a direção é defensável, mas
com confiança **baixa** e com esta ressalva registrada: o prazo 2031 marca *o início visível
do movimento em cursos de ponta*, não sua generalização.

**`e4.2` — mercados de geradores substituindo lojas de ativos — não tem precedente comparável
que eu tenha encontrado.** O análogo mais próximo seria a troca de bibliotecas de clip-art por
bibliotecas de ícone vetorial, que levou uma década e aconteceu num nicho muito mais simples.
Marcado como "não encontrei precedente comparável".

### 7.3 Qual disrupção-raiz pode não se concretizar, e o que sobra

**D3 é a candidata óbvia a não acontecer**, e o mapa já a trata como tal (sinal fraco e
confiança baixa em todos os seus efeitos). Se D3 não vier, o mapa **não desmorona**: D1 e D2
são independentes dela e sustentam catorze dos dezoito efeitos. O que se perde é a terceira
ordem jurídica e a figura do mantenedor de geradores.

**O cenário que derruba o mapa inteiro é outro, e é o cenário do meu próprio critério de
mudança de ideia:** se o gargalo não for a autoria do gerador, mas a **especificação**. Todo o
mapa assume que, removida a barreira da sintaxe, a intenção de design flui. Pode ser que
não — pode ser que escrever uma especificação boa o bastante para um gerador seja tão difícil
quanto escrever o gerador, e que a IA tenha automatizado a parte que já era fácil para quem
sabia. Nesse mundo, D1 é melhoria incremental e reprova no teste 1 do Passo 2 — e este
documento inteiro é sobre uma não-disrupção. Não tenho evidência que resolva isso; é a
incerteza central do mapa e está declarada aqui, não escondida.

**D2 tem uma forma específica de não acontecer:** compressão de splat melhorando rápido demais.
A literatura de 2026 já mostra cena completa em torno de 4 MB. Se cair mais uma ordem de
grandeza, o argumento de peso murcha e sobra só o de editabilidade — que é real, mas convence
menos gente.

### 7.4 Que viés entrou aqui

**Declarado no pedido:** neutro, sem preferência. **Efetivamente presente, apesar disso:**

1. **Viés de fonte.** Metade da evidência veio de arXiv em cs.GR e de um repositório que é ele
   próprio uma peça de advocacia pelo "só código". Papers relatam o que funciona; repositórios
   defendem sua tese. Não há, neste mapa, nenhuma fonte de estúdio que tenha *tentado e
   desistido* — e esse silêncio provavelmente infla o otimismo de D1.
2. **Viés do tema.** A descrição da disciplina já enuncia a disputa como "gerar pixel × gerar
   programa" e já valoriza o segundo termo ("leve, transparente" contra "pesada, opaca"). Rodei
   a análise dentro desse enquadramento. Um mapa feito a partir do enquadramento oposto — o do
   artista que quer o resultado e não quer manter código — chegaria a outros efeitos de segunda
   ordem.
3. **Suposições adotadas por ausência de usuário.** Que "quem projeta mídia e interação" inclui
   designers, desenvolvedores criativos e estudantes, não engenheiros de ferramenta; que o
   recorte global significa mercados com acesso a modelos de fronteira; que a régua "o que já é
   comum em produto de massa sai" se aplica a procedural clássico e a shaders — foi por essa
   régua que Houdini, geometry nodes e Processing ficaram na seção 3 e não na 4.
4. **Viés de recência.** Todas as fontes datam de 2025–2026. Um mapa que puxasse a história do
   procedural desde os anos 1980 provavelmente encontraria dois ou três ciclos anteriores de
   "agora o computador escreve a regra" que não se concretizaram — e seria mais cético.
5. **Efeito descartado por falta de especificidade** (registro obrigatório do Passo 6): havia
   um efeito de segunda ordem redigido como "o papel do designer se transforma
   profundamente". Foi cortado — é ausência de análise, não efeito. O que sobrou dele, já
   específico, está em `e1.1`.

## 8. O que a máquina errou

Registro do que desconfiei durante a execução, com o motivo da desconfiança — não só o fato da
correção.

1. **O número de estrelas do `img2threejs`.** A leitura da página do repositório devolveu
   "16,3 mil estrelas e 1,4 mil forks". Desconfio por três razões: a busca devolveu pelo menos
   quatro repositórios com *descrição idêntica* sob donos diferentes (`img2threejs/`, `rudyc/`,
   `AuroraRyan0301/`, `fraaalk/`), o que é padrão de fork, e um número dessa ordem é alto para
   uma ferramenta de nicho lançada há pouco. Não consegui separar o repositório canônico dos
   forks com confiança. **No documento, a contagem de estrelas não sustenta nenhuma afirmação**
   — uso o projeto pelo que ele *faz* e pelo que declara (oito passes, portões, Apache 2.0),
   não pela popularidade.
2. **Nomes de modelo no `3DCodeBench`.** O resumo da página lista modelos como "Gemini 3.5
   Flash", "Claude Opus 4.7" e "GPT-5.5". São plausíveis para maio de 2026, mas não verifiquei
   cada um contra o lançamento correspondente, e resumos automáticos de tabela são um lugar
   clássico de erro. **Cito os números agregados (69,2% e 97,4%), que são a alegação central do
   paper, e não construo nada sobre qual modelo específico ganhou.**
3. **Um comparativo direto splat × procedural que eu queria e não existe.** Busquei por medição
   lado a lado de peso entre cena de splatting e gerador procedural equivalente. **Não existe
   na literatura que consultei.** O fator de 10²–10³ que uso em D2 é uma composição minha de
   duas fontes independentes (tamanho de cena comprimida na literatura de compressão; ordem de
   grandeza declarada pelo `img2threejs` para seu próprio TypeScript) — **é estimativa da
   skill, não achado de fonte**, e está assim marcado na seção 11.
4. **A reação da comunidade de creative coding.** Procurei posição pública de Processing/p5.js
   sobre código gerado por IA e **não encontrei**. O que a busca devolveu foi uma plataforma
   comercial de p5 com IA e o contexto difuso de rejeição a "AI slop". **Não atribuí nenhuma
   posição a essas comunidades neste documento** — a tentação de escrever "a comunidade de
   creative coding está dividida" era grande, e não há fonte para isso.
5. **A fonte brasileira que não abriu.** O artigo sobre ensino de programação criativa em
   graduações de design (Blucher Design Proceedings) retornou HTTP 403. Sei que existe e do que
   trata pelo resultado de busca; **não li o texto**. A nota sobre o Brasil na seção 3 está
   calibrada por isso: afirma que existe pesquisa e comunidade, não o que a pesquisa concluiu.
6. **Um efeito que soou bem e não se sustentou.** Escrevi, na primeira passada, que "o custo de
   produção de mídia 3D cai uma ordem de grandeza". Soa ótimo e é provavelmente falso: o custo
   de *entrega* cai; o de *produção* sobe, porque o portão de qualidade renderiza e compara o
   tempo todo (é o próprio `e2`). Corrigido, e a contradição virou parágrafo explícito na prosa
   da seção 5, em vez de sumir.
7. **Sobre este mapa citar mais papers que produtos.** É sintoma, não escolha. A fronteira de
   "IA escreve o gerador" está em benchmark e protótipo — o que é, aliás, exatamente o que o
   teste 3 do Passo 2 pede para classificar algo como emergente. Mas significa que o mapa é
   mais frágil do que pareceria se eu tivesse encontrado estúdios usando isso em produção; não
   encontrei.

## 9. Três cenários para 2031

### Provável — "o gerador entrou pela porta dos fundos"

Em 2031, ninguém chama isso de revolução. Os agentes vivem dentro do Blender, do Houdini, do
Unreal e do navegador, conversando com as ferramentas por protocolo. O designer descreve o que
quer, o agente monta o grafo ou escreve o script, e o designer ajusta os nós — mais ou menos
como se ajusta hoje um texto que o modelo escreveu. O portão de qualidade renderiza e compara,
e roda no servidor do estúdio de madrugada.

O entregável virou híbrido e ninguém discute: captura para o que precisa ser real, programa
para o que precisa ser variável. Splat comprimiu bem e continua ganhando onde realismo é o
produto. A web e o óculos ficaram majoritariamente procedurais, sem manifesto — ficaram porque
carregava mais rápido.

O que não aconteceu: o mercado de geradores; a reorganização do ensino (começou em três ou
quatro cursos de ponta e é assunto de congresso, não de currículo); e a estética procedural
como movimento. O código-obra segue sendo cultura de nicho, com sua comunidade, seus encontros
e sua desconfiança em relação a modelos.

### Desejável — "a mídia voltou a ser legível"

Em 2031, o padrão de entrega em mídia interativa é o programa parametrizado, e isso teve uma
consequência que ninguém buscava: **a mídia voltou a ser auditável**. Dá para abrir um objeto e
ver a regra que o produz, do mesmo jeito que se abre o HTML de uma página. Pesquisa, ensino,
acessibilidade e patrimônio ganharam com isso mais do que a indústria criativa.

Para chegar aqui, três coisas tiveram de acontecer. **Primeira:** o treino por realimentação
visual continuou premiando estrutura, e os geradores gerados ficaram legíveis e parametrizáveis
por desenho de incentivo, não por acaso. **Segunda:** apareceu ferramenta de autoria que deixa
o designer dirigir o gerador sem ler código — o equivalente ao que a planilha fez pela
programação. **Terceira:** o direito respondeu à pergunta da regra em vez de fugir dela,
reconhecendo titularidade sobre a especificação quando há escolha criativa humana documentada,
e deixando o resto em domínio comum.

O efeito colateral bom: a comunidade de creative coding, que já pensava assim há vinte anos,
virou referência de método em vez de curiosidade — inclusive no Brasil, onde essa cultura é
mais forte que a indústria de ferramenta.

### Indesejável — "o gerador que ninguém entende"

Em 2031, tudo virou programa, e isso não resolveu nada. Os geradores que os modelos escrevem
são código que roda e que nenhum humano lê: mil linhas sem estrutura, constantes mágicas,
parâmetros que não correspondem a nada que se possa nomear. Trocou-se um artefato opaco (o
pixel) por outro (o programa ilegível), com a agravante de que este parece transparente.
Quando é preciso mudar alguma coisa, ninguém edita — pede-se ao modelo que gere de novo, e o
resultado muda inteiro.

A leveza se confirmou e virou argumento de venda de plataforma, mas a editabilidade — que era o
ponto — não. O estúdio que não paga assinatura de modelo de fronteira não consegue manter o
próprio acervo, porque manter virou regerar. A especificação, que seria o novo ofício do
designer, ficou concentrada em quem tem acesso aos modelos melhores.

**Sinal precoce deste cenário, observável desde agora:** medir a *legibilidade* do código
gerado, não só sua executabilidade. Se os benchmarks continuarem premiando apenas "roda" e
"parece com a referência", e nenhum deles medir "um humano consegue alterar um parâmetro e
prever o que muda", este é o desfecho padrão. Hoje, dos três benchmarks que este mapa
consultou, **nenhum mede isso** — o `SGP-GenBench` chega perto ao observar decomposição em
primitivas controláveis, mas como efeito do treino, não como métrica de avaliação. É o alarme
mais concreto que esta rodada encontrou.

## 10. O experimento

### O que é

**Duas rotas, um objeto, três rodadas — e a medição do que ninguém mede.**

Escolha cinco objetos de dificuldade crescente (um cubo de Rubik, uma cadeira, uma luminária
articulada, um capacete, um vaso de planta). Para cada um, com uma única foto de referência:

- **Rota A — programa.** Peça a três modelos diferentes que reconstruam o objeto como código
  procedural (Three.js ou Blender Python), com o método dos passes e portões do `img2threejs`.
- **Rota B — dado.** Gere o mesmo objeto como malha por um gerador de texto/imagem→3D.

Meça, para cada rota e objeto: **peso** do entregável em KB; **rodadas** até passar num portão
de qualidade fixo definido antes; **custo** em token e em tempo.

Depois vem a parte que importa. Dê o resultado da Rota A a **cinco pessoas que não escreveram
aquele código** e peça três edições especificadas em linguagem natural — "deixe o encosto 20%
mais alto", "troque o material do cabo por metal escovado", "faça o braço articular em dois
pontos em vez de um". Meça **quantas delas conseguem, em quanto tempo, e quantas desistem e
pedem ao modelo para gerar de novo**. Faça o mesmo pedido para a Rota B, onde a resposta
provável é "impossível sem remodelar".

### Que pergunta sobre o futuro ele ajuda a responder

A central deste mapa, e a que nenhum benchmark existente responde: **"editável" é uma
propriedade real do código gerado, ou só uma promessa da arquitetura?**

O mapa inteiro pende dessa resposta. Se as pessoas conseguem editar, `e1` se sustenta e o
cenário desejável é alcançável. Se elas pedem ao modelo para gerar de novo — se o programa é
descartável na prática, mesmo sendo legível em tese —, então a transparência é decorativa,
`e1.1` não acontece (não se versiona o que se joga fora), e o cenário indesejável é o
provável. Esta é, também, a operacionalização do meu próprio critério de mudança de ideia
declarado na seção 7.3: se especificar for tão difícil quanto programar, isso aparece aqui,
medido, como taxa de desistência.

O experimento também produz, de quebra, o comparativo de peso que a seção 8 admite não existir
na literatura.

### Que tecnologia emergente ele usa, e por que a madura não serve

Usa **modelos de fronteira gerando código gráfico executável** com **portões de qualidade
automáticos** — os dois elementos emergentes de D1. A tecnologia madura não serve por uma razão
simples: um artista procedural humano escrevendo o mesmo gerador em Houdini produziria código
*estruturado por um humano*, e a pergunta do experimento é precisamente sobre a estrutura que
*a máquina* produz. Trocar o autor do gerador anula o experimento. Do mesmo modo, um pipeline
de fotogrametria maduro responderia sobre fidelidade, que não é a pergunta.

### O que faria quem testar mudar de ideia sobre o mapa

- **Se a Rota A precisar de mais de cinco ou seis rodadas nos objetos simples**, os 69,2% do
  `3DCodeBench` não se traduzem em prática de estúdio, e D1 é menos madura do que este mapa
  supõe — todos os prazos escorregam dois ou três anos.
- **Se as cinco pessoas editarem com facilidade e preferirem editar a regerar**, `e1` e `e1.1`
  ficam mais fortes, e vale antecipar `e1.1.1` — porque saber editar um gerador alheio é
  exatamente a competência que o ensino teria de passar a formar.
- **Se a diferença de peso for menor que uma ordem de grandeza**, D2 perde seu principal
  argumento e o mapa passa a depender só da editabilidade — que, ironicamente, é o que a
  segunda metade do mesmo experimento está testando.
- **Se os três modelos produzirem estruturas de código radicalmente diferentes para o mesmo
  objeto**, a "estética procedural" de `e3.1` não é uma, são várias, e cada modelo carrega uma
  assinatura — o que abre uma pergunta que este mapa não fez: *o modelo tem estilo?*

## 11. Fontes

Lista apenas do que foi efetivamente consultado nesta rodada, em 18/09/2026. Onde só houve
resultado de busca sem abertura do texto integral, está dito.

**Abertas e lidas:**

1. `https://arxiv.org/html/2606.01057` — **3DCodeBench: Benchmarking Agentic Procedural 3D
   Modeling Via Code** (31/05/2026). Sustenta os números centrais da seção 3 e do teste "por que
   agora" de D1: 69,2% de executabilidade em turno único, 97,4% em multi-turno, 212 categorias,
   26 mil pares, e a natureza das falhas residuais (API incompatível; geometria desconectada).
   *Confiabilidade:* preprint de benchmark com metodologia declarada; alta para a alegação
   agregada, e ver a ressalva 2 da seção 8 sobre os nomes de modelo.
2. `https://arxiv.org/abs/2509.05208` — **Symbolic Graphics Programming with Large Language
   Models** (submissão 09/2025, versão final 08/2026, aceito em TMLR). Sustenta a formalização
   da tarefa, o benchmark SGP-GenBench e o achado de que o treino por RL induz decomposição em
   primitivas controláveis. *Confiabilidade:* alta — passou por revisão por pares em TMLR.
3. `https://github.com/img2threejs/img2threejs` — **img2threejs**. Sustenta a descrição do
   pipeline de oito passes, dos portões determinísticos, do argumento de token (stdlib para o
   mecânico, modelo para o julgamento), da ordem de grandeza KB vs MB e da licença Apache 2.0.
   *Confiabilidade:* média — é documentação do próprio projeto, portanto parte interessada; boa
   para o que o projeto *faz e afirma*, fraca para desempenho comparado. Ver ressalva 1 da
   seção 8.
4. `https://www.jonpeddie.com/news/sidefx-and-nvidia-bring-mcp-powered-ai-agents-to-houdini-22s-rigging-workflow-at-siggraph-2026/`
   — **SideFX e Nvidia levam agentes por MCP ao Houdini 22 no SIGGRAPH 2026**. Sustenta `e1.2`:
   o Apex Script Comfort Package, o caráter de *sneak peek* via SideFX Labs, o escopo restrito a
   rigging, e a lista de empresas (Adobe, Blender, Boris FX, Foundry, SideFX, Epic) descrevendo
   o mesmo movimento. *Confiabilidade:* média-alta — imprensa especializada de longa data em
   gráficos, com ceticismo explícito no próprio texto.
5. `https://www.morganlewis.com/pubs/2026/03/us-supreme-court-declines-to-consider-whether-ai-alone-can-create-copyrighted-works`
   — **Suprema Corte dos EUA recusa o caso de autoria por IA** (certiorari negado em
   02/03/2026, *Thaler v. Perlmutter*). Sustenta a afirmação, na prosa da seção 5, de que a
   questão "a máquina é autora?" está fechada nos EUA e a de `e4.2.1` continua aberta.
   *Confiabilidade:* alta para o fato processual — escritório de advocacia relatando decisão
   pública e datada.
6. `https://www.summerengine.com/blog/ai-procedural-generation-for-games` (06/06/2026) —
   sustenta a formulação "a IA escreve o gerador; o gerador roda determinístico, com a IA fora
   do loop" e as quatro objeções à geração em runtime (latência, custo por sessão,
   inconsistência, irreprodutibilidade). *Confiabilidade:* média — blog de fornecedor, sem
   números; usado pelo argumento, que é coerente com o consenso técnico, não como evidência
   quantitativa.

**Vistas em busca, não abertas na íntegra** (citadas como existência de linha de pesquisa, não
como fonte de número):

7. `https://arxiv.org/abs/2508.14879` — **MeshCoder: LLM-Powered Structured Mesh Code Generation
   from Point Clouds**. Nuvem de pontos → script Blender editável, 41 categorias.
   *Confiabilidade:* preprint; usado só para atestar que a linha existe e qual é seu argumento.
8. `https://arxiv.org/abs/2602.17481` — **ShadAR: LLM-driven shader generation to transform
   visual perception in Augmented Reality**. Usado só como evidência de que geração de shader
   por linguagem natural em tempo real é linha ativa de pesquisa.
9. `https://link.springer.com/chapter/10.1007/978-3-032-24350-8_13` — **AI Co-Artist: A
   LLM-Powered Framework for Interactive GLSL Shader Animation Evolution** (EvoMUSART 2026).
   Mesmo uso: existência da linha de evolução interativa de shader por IA.
10. Resultados de busca sobre **Compoética — Encontro Brasileiro de Programação Criativa**
    (herdeiro do Processing Community Day Brasil, 2021–2023; edição com atividades presenciais
    em São Paulo e transmissão on-line). Sustenta apenas a nota sobre o Brasil na seção 3:
    existe comunidade organizada. *Confiabilidade:* média — informação de divulgação, sem fonte
    primária aberta.

**Fonte que tentei e não consegui abrir:**

- `https://www.proceedings.blucher.com.br/article-details/ensino-de-programao-criativa-aplicado-prtica-do-estudante-de-design-38089`
  — artigo sobre ensino de programação criativa para estudantes de design no Brasil. **HTTP
  403.** Sei que existe e do que trata; não li. Nada neste documento repousa em suas conclusões.

**Marcado explicitamente como especulação da skill, sem fonte:**

- O fator **10²–10³** de diferença de peso entre cena por splatting e gerador procedural
  equivalente (D2). É composição de duas fontes independentes, não achado de nenhuma delas.
  Ver ressalva 3 da seção 8.
- Todos os **prazos** da roda. Nenhum vem de projeção publicada; são estimativas desta rodada,
  e a confiança declarada em cada efeito é a medida honesta do quanto valem.
- A afirmação de que **nenhum dos três benchmarks consultados mede legibilidade/editabilidade
  do código gerado** (seção 9, cenário indesejável). É uma ausência que observei nos textos que
  li, não uma afirmação verificada exaustivamente contra a literatura de benchmarks.

## 12. Anexo — o levantamento bruto

### Entrevista (Passo 1) — respostas recebidas, sem interação

- **Horizonte:** 2031.
- **Recorte:** quem projeta mídia e interação; global, com nota sobre o Brasil.
- **Já descartado:** o que já é comum em produto de massa (régua da disciplina). Nenhuma outra
  exclusão.
- **Viés desejado:** neutro.
- **Palpite do usuário sobre a disrupção:** nenhum — levantar do zero.
- **Critério declarado de mudança de ideia:** evidência de que a adoção já passou da maioria
  inicial (Rogers), ou de que a tecnologia não rompe nada (só melhora o que existe).
- **Profundidade:** três ordens. **Modo:** a partir de uma inovação/tema, não de um setor.
- Condição de saída satisfeita (itens 1 e 2 respondidos). Itens 3, 4 e 5 respondidos também.
  Nenhuma pergunta foi devolvida ao usuário, conforme instrução.

### Aplicação do critério do Passo 2 — candidatas testadas

| Candidata | T1: o que rompe? | T2: por que agora? | T3: o que falta? | Veredito |
|---|---|---|---|---|
| IA escreve o gerador (D1) | muda quem pode produzir sistema gerativo; muda a natureza do artefato | modelos de código que rodam; realimentação verificável; MCP | geometria que fecha; avaliação de arte; escala de cena | **aceita** |
| Regra × dado (D2) | muda o que é viável entregar em plataforma restrita | fator de peso 10²–10³ ficou disponível a quem não programa | fotorrealismo; autoria sem código; caso público medido | **aceita** |
| Gerador executável no cliente (D3) | muda o que trafega, o cache, a loja e a segurança | consequência de D1+D2; precedente da fonte variável e do SVG | formato, sandbox, assinatura, mercado — quase tudo | **aceita, com sinal fraco** |
| Geração procedural em jogos | nada: já é padrão há décadas | — | nada, está em produção | **rejeitada — madura (§3)** |
| Shaders e creative coding em Processing/p5 | nada: infraestrutura consolidada | — | nada | **rejeitada — madura (§3)** |
| Grafo de nós procedural (Houdini, geometry nodes) | nada por si; o que é novo é o agente que o monta | — | — | **rejeitada como raiz; virou `e1.2`** |
| Conteúdo gerado como código no runtime | mudaria muito | — | latência, custo/sessão, consistência, reprodutibilidade — objeções documentadas | **rejeitada como raiz; virou wildcard (§6)** |
| "IA mais rápida para fazer shader" | reprova no T1: torna mais rápido o que já se fazia | — | — | **rejeitada — melhoria incremental** |
| "Texto → 3D fica bom" | reprova no T1: mesmo artefato, menos esforço; não muda quem faz nem o que é possível | — | — | **rejeitada; foi para §3 como "o que não pegou"** |

### Efeitos cortados ou reescritos

- **"O papel do designer se transforma profundamente"** (2ª ordem) — **cortado**. Não é efeito,
  é ausência de análise; falha a regra do Passo 5 sobre parar de ramificar quando deixa de ser
  específico. O que havia de concreto virou `e1.1`.
- **"O custo de produção de mídia 3D cai uma ordem de grandeza"** (1ª ordem) — **cortado**.
  Falso ou, na melhor hipótese, invertido: o custo de *entrega* cai, o de *produção* sobe por
  causa do próprio portão de qualidade. A contradição virou parágrafo na prosa da seção 5.
- **`e3`** — **reescrito**. De "o procedural vence na web, no jogo e no óculos" para a versão
  atual, com a perda em fotorrealismo explícita, e com o desfecho realista transferido para
  `e3.2` (híbrido). Motivo em 7.1.
- **`e1.1.1`** — **mantido com prazo requalificado**. 2031 passa a significar "início visível em
  cursos de ponta", não generalização. Motivo em 7.2.
- **"Surge a profissão de especificador de sistemas visuais"** (3ª ordem) — **fundido** em
  `e1.1.1` e `e4.1.1`. Sozinho, era nomenclatura, não efeito.
- **"Modelos abertos alcançam os fechados nesta tarefa"** — **não entrou como efeito**. É
  alegação sobre o mercado de modelos, não sobre mídia e interação; e o dado que eu tinha (o
  Qwen-7B com RL chegando ao patamar de fronteira no SGP-GenBench) é de uma tarefa específica,
  SVG, e não generaliza.

### Buscas realizadas e o que cada uma rendeu

1. *LLM generating procedural 3D models code Three.js instead of mesh 2026* → achou
   3DCodeBench, MeshCoder, LL3M, "Don't Mesh with Me" (CSG por LLM ajustado). **Rendeu.**
2. *arXiv program synthesis for graphics LLM shader generation 2026* → achou SGP/2509.05208,
   ShadAR, AI Co-Artist, TikZero, síntese de gráficos científicos com RL de auto-consistência.
   **Rendeu.**
3. *img2threejs github…* → achou o repositório canônico e três a quatro forks com descrição
   idêntica. **Rendeu, com a ressalva das estrelas.**
4. *MeshCoder…* → confirmou escopo (41 categorias, API Blender própria, dataset pareado).
   **Rendeu pouco além do resumo.**
5. *3D Gaussian splatting file size megabytes vs procedural code web performance 2026* →
   **falhou no que eu queria.** Devolveu literatura de compressão de splat (SizeGS, MEGS²,
   KISS-GS a 3,94 MB, CodecSplat) e *nenhuma* comparação com procedural. Origem da ressalva 3
   da seção 8.
6. *manim-web-mcp…* → confirmou a existência de vários servidores MCP de Manim, incluindo
   pipeline multiagente e preview em navegador. **Rendeu como sinal fraco.**
7. *SideFX Houdini Blender geometry nodes AI assistant node graph 2026* → levou ao artigo do
   SIGGRAPH 2026, a melhor fonte datada do mapa para `e1.2`. **Rendeu.**
8. *copyright AI generated code procedural rule authorship 2026* → Thaler/Suprema Corte,
   02/03/2026. Resolve a pergunta da máquina-autora; **não resolve** a da titularidade sobre a
   regra, que é a de `e4.2.1`. **Rendeu parcialmente.**
9. *creative coding p5.js Processing community reaction AI 2026 debate* → **falhou.** Não achou
   posição de comunidade; achou plataforma comercial de p5 com IA e contexto difuso de rejeição
   a "AI slop". Origem da ressalva 4 da seção 8; nenhuma afirmação foi construída sobre isso.
10. *"creative coding" Brasil … ensino programação criativa* → achou o artigo da Blucher (403 na
    abertura) e referências à Compoética. **Rendeu só a nota da seção 3.**
11. *Compoética encontro brasileiro programação criativa 2026* → confirmou a linhagem
    (Processing Community Day Brasil 2021–2023) e a existência do encontro; **não achei
    confirmação de edição 2026** — por isso o texto não cita ano de edição.
12. *LLM generate game content at runtime code procedural on demand 2026* → AutoUE, Mage
    (avaliação multi-eixo de cenas executáveis geradas por LLM), "What's the Game, then?"
    (CHI/UIST sobre runtime behavior generation) e o argumento do summerengine. **Rendeu a
    decisão de rebaixar "runtime" de disrupção-raiz para wildcard.**

### Perguntas que ficaram abertas nesta rodada

- Existe algum estúdio, com nome, entregando gerador em vez de arquivo hoje? Não encontrei. É a
  lacuna mais séria do mapa, e provavelmente a razão do seu otimismo residual.
- O código que os modelos escrevem é editável **por terceiros**, ou só executável? Nenhum
  benchmark consultado mede isso. Virou o experimento da seção 10.
- Se três modelos escrevem três geradores diferentes para o mesmo objeto, há assinatura de
  modelo? Pergunta que este mapa não fez e que o experimento produz de graça.
- O procedural gerado por IA herda os vieses estéticos dos dados de treino de um jeito
  *estrutural* — nas primitivas que ele escolhe, na forma como decompõe um objeto? O achado do
  SGP-GenBench sobre decomposição sugere que sim, mas não achei quem tenha investigado.
