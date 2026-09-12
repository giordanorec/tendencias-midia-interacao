---
tema: "Gerar geradores: design procedural e creative coding com IA"
slug: gerar-geradores-design-procedural-e-creative-coding-com-ia
autor_login: bvga
zona_de_interesse: "Criação e plataforma"
data: 2026-09-12
horizonte: 2031
publico: "quem projeta mídia e interação"
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 12
efeitos_ordem_3: 13
tecnologias_citadas: [Three.js, Blender, Houdini, Manim, "p5.js", "KCL / Zoo Design Studio", "Model Context Protocol (MCP)", img2threejs, "3D Gaussian Splatting", "GLSL / shaders"]
fontes: 14
confianca: media
experimento: "A quinta variação"
skill_usada: futurizacao-bvga
publico_ok: false
---

## 1. Resumo

Design procedural — produzir a **regra** em vez do artefato — tem décadas e está maduro. O que mudou entre 2025 e 2026 é quem escreve a regra: sistemas baseados em modelos de linguagem passaram a escrever programas gráficos executáveis (scripts de Blender, fábricas Three.js, programas paramétricos de CAD, shaders) e a validá-los por execução. Há benchmark público para isso desde maio de 2026 ([3DCodeBench](https://arxiv.org/abs/2606.01057)), há sistemas multiagente que escrevem Python de Blender ([LL3M](https://arxiv.org/abs/2508.08228)), há reconstrução de nuvem de pontos para script editável ([MeshCoder](https://arxiv.org/abs/2508.14879)), há montagem paramétrica com verificação estrutural ([Procedura](https://arxiv.org/abs/2608.26238)) e há um fabricante de DCC expondo a própria linguagem a agentes por protocolo ([Houdini 22 / MCP, SIGGRAPH 2026](https://www.jonpeddie.com/news/sidefx-and-nvidia-bring-mcp-powered-ai-agents-to-houdini-22s-rigging-workflow-at-siggraph-2026/)).

Deste levantamento saem **três disrupções-raiz**, todas emergentes e nenhuma consolidada:

1. **Síntese de programa gráfico guiada por execução** — a IA escreve o gerador e um laço de compilar/renderizar/comparar decide se ele presta.
2. **O programa paramétrico como unidade de troca** — o que circula entre ferramentas, lojas e navegadores deixa de ser binário e passa a ser código-fonte curto mais runtime.
3. **A ferramenta de autoria dirigida por agente via protocolo** — o software criativo ganha uma segunda interface de primeira classe, a do agente.

A roda tem 32 efeitos (7 de 1ª ordem, 12 de 2ª, 13 de 3ª). A confiança geral é **média**, e a razão é explícita: quase toda a evidência técnica é de 2025–2026, vem de artigos e repositórios dos próprios proponentes, e o único benchmark independente que abri relata que as falhas predominantes ainda são triviais — chamada de API errada e componentes geométricos soltos ou flutuando. Existe um contrassinal cultural igualmente concreto: o projeto p5.js, referência do creative coding, escreve na política de contribuição que **não aceita contribuição inteiramente gerada por IA**.

A afirmação do enunciado de que o 3D procedural gerado por IA seria "mil vezes mais leve que o splat" **não foi sustentada** por nenhuma medição que eu tenha aberto; ela foi reformulada como disputa por orçamento de banda, não como fator de compressão. Ver seção 8.

## 2. O tema

**Recorte.** Não é "IA que gera imagem", nem "IA que gera 3D". É o caso específico em que o artefato produzido é **um programa que produz o artefato** — e em que quem escreve esse programa é um modelo. A mesma peça pode existir como malha (dado), como splat (dado) ou como função que a constrói (regra). O tema é a virada para a terceira forma e o que ela arrasta consigo.

**Parâmetros da entrevista, confirmados antes da análise:**

| Campo | Valor |
|---|---|
| Tema | Gerar geradores: design procedural e creative coding com IA |
| Horizonte | 2031 |
| Público | quem projeta mídia e interação |
| Recorte geográfico | global, com nota sobre o Brasil |
| Descartes | o que já é comum em produto de massa (régua da disciplina). Nenhuma outra exclusão |
| Viés desejado | neutro; nenhuma disrupção suspeita a priori |
| Profundidade | três ordens |
| Modo | a partir de uma inovação/tema, não de um setor |
| Critério de mudança de ideia | evidência de que a adoção já passou da maioria inicial (Rogers), ou de que a tecnologia só melhora o que existe sem romper nada |

**Duas ambiguidades resolvidas por decisão declarada, na ausência de interlocutor nesta rodada:**

- *"O que já é comum em produto de massa"* foi lido como: exclui a geração procedural clássica (jogos, Houdini, geometry nodes, Processing/p5) **e** exclui os geradores nativos de malha vendidos por crédito com plugin de engine. Os dois entram como antecedentes maduros, nunca como raiz.
- *"Global com nota sobre o Brasil"* foi lido como: a roda é global; o Brasil aparece onde há evidência brasileira aberta, e onde não há, o silêncio é declarado em vez de preenchido por analogia.

**Fronteiras com os temas vizinhos.** Captura de realidade em 3D (splat, renderização neural) é o tema 10 e aparece aqui apenas como termo de comparação. Geração de vídeo e imagem como mídia é o tema 12 e fica fora. O objeto aqui é a regra como artefato e a máquina escrevendo a regra.

## 3. Onde isso está hoje

### 3.1 Maduro — antecedente, não raiz

**Geração procedural e creative coding sem IA.** Houdini vende modelagem procedural como produto central há anos; Blender tem geometry nodes; Processing/p5.js sustentam uma comunidade de ensino com mais de 800 contribuidores e uma fundação com relatório de impacto anual; [manim](https://github.com/3b1b/manim) está em 93,8 mil estrelas com licença MIT. Nada disso depende de IA. É infraestrutura e repertório — e é a razão de o tema ter para onde ir.

**Geração de código por modelo de linguagem, em geral.** Repetível e comercial. Não é disrupção neste mapa: é a habilitadora.

**Geradores nativos de 3D (malha/splat).** Existem comercialmente, com preço por crédito, tempos de geração medidos em minutos e plugins de engine. Produzem **dado**, não regra. A Hunyuan3D publica versões sucessivas com PBR; a linha TRELLIS entrega imagem-para-3D. A limitação que importa para este tema é estrutural, não de qualidade: a saída é um objeto, não uma família.

**Captura por 3D Gaussian Splatting.** Madura como captura. O [guia de 15/01/2026 da Utsubo](https://www.utsubo.com/blog/gaussian-splatting-guide) dá os números que interessam: captura típica de 5 a 15 milhões de splats ocupando 200 a 500 MB sem compressão; alvo de 20 a 200 MB para carga inicial na web; 15 a 30 MB no celular; e 30 a 45 FPS num iPhone 14 com 200 mil splats. É contra esse orçamento que a cena programada vai competir — e é um orçamento apertado, não impossível.

### 3.2 Emergente — o terreno da análise

**O modelo escrevendo o programa gráfico.** Quatro evidências independentes, todas de 2025–2026:

- [LL3M](https://arxiv.org/abs/2508.08228) (11/08/2025) reformula a geração de forma como tarefa de escrita de código: agentes especializados planejam, recuperam, escrevem, depuram e refinam scripts Python de Blender, apoiados por uma base de recuperação da documentação da API. O resumo **não traz métrica quantitativa** — descreve categorias de forma e edições de estilo. Evidência média.
- [MeshCoder](https://arxiv.org/abs/2508.14879) (20/08/2025) faz o caminho inverso: reconstrói objeto 3D a partir de nuvem de pontos como script Python de Blender **editável**. Também sem número no resumo; o problema declarado é a escassez de DSL abrangente e de dado pareado em escala.
- [Procedura](https://arxiv.org/abs/2608.26238) (26/08/2026) monta o objeto como grafo de montagem de partes nomeadas unidas por restrições tipadas verificáveis por máquina ("mates"), validando cada componente por compilação, checagem de encaixe e de conectividade antes de aceitar. Reporta superar geradores nativos e agentes de código anteriores em P3D-Bench e MechBench-36, e entregar "as arestas mais nítidas". Sem limitações declaradas no resumo — o que por si é uma limitação da fonte.
- [Proc3D](https://arxiv.org/abs/2601.12234) (18/01/2026) representa o modelo como grafo procedural compacto e mede o que mais importa aqui: **mais de 400× de aceleração** sobre abordagens que precisam regerar tudo a cada modificação, e +28% em ULIP (alinhamento entre modelo e texto). É o número mais forte que encontrei a favor da tese "regra é mais barata que dado **na edição**".

**A prática fora da academia.** O [img2threejs](https://github.com/img2threejs/img2threejs) (Apache 2.0, v2.0.0, 15,9 mil estrelas e 1,3 mil forks no README que abri) reconstrói o objeto de uma imagem como fábrica TypeScript de `THREE.Group`, feita de primitivas e shaders procedurais, "sem arquivo de malha". O desenho do processo é o ponto: oito passes de escultura (blockout → estrutural → forma → material → superfície → iluminação → interação → otimização), cada um gerado, renderizado deterministicamente, revisado por visão contra a referência e **barrado por um portão que falha fechado**. O trabalho mecânico é empurrado para scripts Python determinísticos e o token do modelo é gasto só em julgamento visual. A limitação está escrita pelos próprios autores: *"uma única imagem não pode revelar os lados ocultos nem garantir a geometria exata"*.

**CAD como código, em produto.** A Zoo publicou em [20/05/2025](https://zoo.dev/research/introducing-kcl) a KCL, linguagem paramétrica em que *"o KCL **é** o modelo fundamental"* — não uma representação interna escondida atrás de uma GUI. O argumento declarado é de três pernas: texto é legível, colaborável e processável por máquina; código é intrinsecamente paramétrico; e representar geometria como texto permite reaproveitar o ecossistema de ferramentas de texto — LLMs, assistentes de código. É a tese deste tema formulada por um fornecedor, o que exige o desconto de fonte interessada.

**Shader por linguagem natural.** ShadAR (CHI 2026) e [AI Co-Artist](https://arxiv.org/abs/2512.08951) (27/11/2025) mostram usuário exprimindo intenção visual em linguagem e recebendo GLSL, com princípios evolutivos de refinamento. Continuam demonstração e estudo com usuário, não pipeline.

**Agente dentro da ferramenta, por protocolo.** No keynote do Houdini 22, em [22/06/2026, no SIGGRAPH em Londres](https://www.jonpeddie.com/news/sidefx-and-nvidia-bring-mcp-powered-ai-agents-to-houdini-22s-rigging-workflow-at-siggraph-2026/), a SideFX mostrou o Apex Script Comfort Package: extensão de VS Code, painel Python dentro do Houdini e **servidor MCP com validador de código**. A demonstração gerou mais de 300 linhas de código funcional de rig. Dois detalhes pesam mais que o número: foi apresentado explicitamente como *sneak peek* que "potencialmente" aparecerá no Labs, canal pré-produção — não é produto; e o argumento de venda é que o código gerado permanece um script comum de posse do artista, *"sem criar dependência contínua do LLM"*. No lado da comunidade, existem vários servidores MCP para manim, publicados por indivíduos.

### 3.3 Experimental

Verificação estrutural (mates tipados, conectividade) como critério de aceite de geometria gerada; interoperabilidade que carrega a derivação junto do resultado; sandbox para conteúdo executável. Há protótipo ou proposta, não solução confiável para uso amplo.

### 3.4 Cheque temporal (Three Horizons)

- **H1 — sistema dominante hoje:** o artefato é o entregável. Malha, textura, splat, vídeo. Loja de asset vende arquivo. Revisão de arte olha render. Pipeline procedural existe, mas concentrado em quem tem TD.
- **H2 — transição, onde estamos:** o código gerado entra no pipeline como andaime, sob desconfiança, com portão de verificação. Fabricantes de DCC abrem interface para agente em canal experimental. Comunidades escrevem as primeiras normas de aceite.
- **H3 — lógica possível:** a unidade de troca é o programa; o valor está na família e no critério de aceite, não na peça; e a ferramenta de autoria vale pelo validador, não pela interface.

### 3.5 Leitura de Hype Cycle — como heurística, não como lei

O conjunto "IA escreve gerador" está, em expectativa percebida, no trecho ascendente: muita demonstração impressionante, primeiro benchmark independente, nenhum produto de produção assumido como tal pelo fabricante. O sinal mais honesto de que ainda não é planalto é a própria SideFX chamando a integração de *sneak peek*. O sinal mais honesto de que não é só barulho é o 3DCodeBench existir e apontar gargalo de **dado**, não de entusiasmo.

### 3.6 Nota sobre o Brasil

Não encontrei evidência aberta de adoção de síntese de programa gráfico por IA em estúdio brasileiro. O que há de aberto e relevante é qualitativo: o estudo [*The Creatives of the Future*](https://reglab.com.br/en/the-creatives-of-the-future-ai-creative-industry/), do Reglab, publicado em 19/05/2026, com **sete** profissionais criativos entrevistados por amostragem de caso extremo (coleta entre setembro e novembro de 2025), e que declara explicitamente que os resultados **não são generalizáveis** para a indústria criativa. É um retrato de primeiros adotantes, não medida de adoção. Registro o vazio como vazio: a nota sobre o Brasil neste mapa é uma lacuna de evidência, não um diagnóstico.

## 4. As disrupções-raiz

### D1 — Síntese de programa gráfico guiada por execução

| Campo | Conteúdo |
|---|---|
| **candidato** | Um modelo escreve o programa que constrói o artefato visual, e um laço executável (compilar → renderizar → comparar com a referência → barrar) decide se o programa presta |
| **maturidade** | emergente |
| **potencial_de_ruptura** | alto |
| **o_que_rompe** | (a) *o que é o entregável*: sai o dado, entra a regra; (b) *o custo marginal da variação*: uma malha é um objeto, um programa é uma família; (c) *o papel do profissional*: quem faz passa a especificar e julgar; (d) *quem pode produzir*: pipeline procedural deixa de exigir TD dedicado |
| **por_que_agora** | Modelos de código capazes de escrever programa gráfico que executa; ambiente de execução que devolve feedback de alta fidelidade; e — o fato datado — benchmark independente publicado em 31/05/2026 (3DCodeBench) avaliando 12 VLMs nessa tarefa, o que só se faz quando há o que comparar |
| **o_que_falta** | Taxa de acerto. O 3DCodeBench diz que as falhas vêm sobretudo de **descasamento de API**, e que renders bem-sucedidos ainda sofrem de **componentes desconectados ou flutuando**. Falta também dado procedural de qualidade em escala — apontado como "necessidade crítica" pelo próprio benchmark — e ambiente de execução robusto que dê realimentação fiel |
| **evidencias** | 3DCodeBench (alta, independente); LL3M (média, dos proponentes, sem métrica no resumo); MeshCoder (média); Procedura (média); Proc3D, 400× em edição e +28% ULIP (média-alta em número, média em independência); img2threejs, portão em oito passes (média, repositório) |
| **veredito** | **aceita** |

### D2 — O programa paramétrico como unidade de troca

| Campo | Conteúdo |
|---|---|
| **candidato** | O que circula entre ferramentas, lojas, navegadores e clientes deixa de ser arquivo binário e passa a ser código-fonte curto mais runtime |
| **maturidade** | emergente |
| **potencial_de_ruptura** | alto |
| **o_que_rompe** | (a) *formato e interoperabilidade*: conversão de malha dá lugar a tradução de linguagem; (b) *cadeia de valor*: vende-se família e licença de regra, não arquivo; (c) *custo de acesso e banda*: cena programada entra num orçamento onde a capturada mal cabe; (d) *governança*: ver a cena passa a significar **executar** código de terceiro |
| **por_que_agora** | A KCL existe como produto em que o código **é** o modelo, com camada gratuita e API; o Proc3D mede o ganho onde ele de fato aparece (edição, 400×); o img2threejs entrega o resultado como fábrica TypeScript diferenciável em vez de binário; e o orçamento de banda do lado capturado está documentado e é apertado (15–30 MB no celular) |
| **o_que_falta** | Nenhum formato de troca amplamente adotado carrega hoje a derivação junto do resultado. Falta runtime comum, falta modelo de segurança para conteúdo executável, e falta demonstração de que o programa gerado é editável por **terceiro** — não só pelo autor |
| **evidencias** | Zoo/KCL (média-baixa: fonte do fornecedor, interessada, com triangulação apenas parcial); Proc3D (média); img2threejs (média); Utsubo sobre orçamento de 3DGS (média, imprensa técnica) |
| **veredito** | **aceita, com a evidência mais fraca das três** |

### D3 — A ferramenta de autoria dirigida por agente via protocolo

| Campo | Conteúdo |
|---|---|
| **candidato** | O software de criação passa a expor a própria linguagem interna a agentes por protocolo padronizado, com validador acoplado — o agente vira usuário de primeira classe |
| **maturidade** | experimental (subcategoria de emergente) |
| **potencial_de_ruptura** | alto |
| **o_que_rompe** | (a) *forma dominante de interação* com a ferramenta criativa; (b) *arquitetura do produto de software*: o valor migra da UI para API + documentação + validador; (c) *papel do intermediário*: o TD deixa de operar e passa a projetar e auditar o ambiente do agente; (d) *distribuição de poder*: quem tem documentação e corpus de exemplo tem vantagem que não se compra depois |
| **por_que_agora** | Um fabricante grande de DCC apresentou isso num keynote de SIGGRAPH em 22/06/2026, com validador de código no pacote e demonstração de 300+ linhas de rig funcional; existem servidores MCP comunitários para manim e para Houdini; e a arquitetura de recuperação sobre documentação de API já está publicada em pesquisa (BlenderRAG, no LL3M) |
| **o_que_falta** | Sair do canal experimental. É explicitamente *sneak peek* para o Labs, não produto. Faltam garantias de determinismo, política de responsabilidade sobre código gerado dentro da ferramenta, e evidência de uso repetido em produção |
| **evidencias** | Cobertura do keynote do Houdini 22 (média-alta, imprensa especializada, com o caveat de produto declarado na própria matéria); LL3M/BlenderRAG (média); ecossistema de servidores MCP de manim (baixa: repositórios individuais, sem adoção medida) |
| **veredito** | **aceita como experimental**; se em 2028 continuar só em canal de laboratório, rebaixa-se a sinal |

### Candidatos recusados

| Candidato | Classificação | Motivo da recusa |
|---|---|---|
| Geração procedural clássica (WFC, noise, geometry nodes, Houdini, p5) | maduro | Décadas de uso repetível. Antecedente e infraestrutura. Nenhuma depende de IA escrever a regra |
| Geradores nativos de malha e splat vendidos por crédito | maduro comercialmente | Produzem dado, não regra. E caem na régua de descarte: já são produto de massa por API |
| "IA escreve shader" como raiz separada | emergente, ruptura média | É a mesma capacidade estrutural de D1 aplicada a um domínio. Tratar produto/demonstração como disrupção é exatamente o erro que a skill proíbe. Rebaixado a **sinal** |
| Captura por 3DGS / renderização neural | maduro em captura | É o tema 10. Entra aqui só como termo de comparação de orçamento |
| "Vibe coding" genérico | maduro-emergente, ruptura média para este tema | Não é específico de gráficos nem da regra como artefato. Diluiria o recorte |
| Manim como ferramenta | maduro | 93,8 mil estrelas, MIT, uma década. O emergente é o agente dirigindo-a, o que já está em D3 |

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "D1 — Síntese de programa gráfico guiada por execução: a IA escreve o gerador e um laço executável de verificação visual decide se ele presta"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "O entregável de um pedido de modelagem passa a ser um programa parametrizado acompanhado de especificação, e não um arquivo de geometria"
        sinal: medio
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "Bibliotecas de geradores (famílias paramétricas) passam a valer mais, dentro de um estúdio, que bibliotecas de peças prontas"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "Parte do mercado de assets migra de venda de arquivo para licença de gerador com limite de uso declarado"
                sinal: fraco
                prazo: 2032
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: "Abre-se disputa prática sobre titularidade da regra: quem detém o parâmetro detém a família inteira, não uma peça"
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "A revisão de arte incorpora leitura de diff de código e de especificação, além do render"
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "A direção de arte absorve responsabilidade por especificação executável e passa a herdar dívida técnica visual"
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "O custo da enésima variação cai muito, enquanto o custo do primeiro acerto permanece alto porque o portão de qualidade é caro"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "O esforço criativo desloca-se de executar para especificar e julgar"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Cursos de design passam a avaliar a especificação e o critério de aceite do aluno, e não apenas o artefato entregue"
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "Projetos passam a ser orçados por família de resultado (o gerador e seu envelope) em vez de por peça"
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "Contratos de criação ganham cláusula de regeneração, definindo se e até quando o cliente pode re-rodar o gerador por conta própria"
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "Uma camada de verificação executável (compilar, renderizar, comparar, barrar) torna-se pré-requisito de qualquer pipeline que aceite código gráfico gerado"
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "Ferramentas de autoria passam a expor conformidade visual medida como dado de primeira classe, ao lado do render"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Conformidade visual automatizada vira exigência contratual em setores com norma gráfica dura (sinalização, embalagem, bula, interface médica)"
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "O gargalo desloca-se do modelo para a disponibilidade de dado procedural de qualidade e de ambientes de execução fiéis"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "Detentores de acervo procedural histórico (estúdios, fabricantes de DCC, arquivos de shader) ganham poder de barganha que não haviam buscado"
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: "D2 — O programa paramétrico como unidade de troca: o que circula deixa de ser binário e passa a ser código curto mais runtime"
    efeitos:
      - id: e4
        ordem: 1
        efeito: "Parte do conteúdo 3D que hoje viaja como binário passa a viajar como código-fonte curto executado no cliente"
        sinal: fraco
        prazo: 2030
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "Na web e em dispositivos leves, cena programada e cena capturada competem por orçamento de banda e memória, não por fidelidade"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Uma estética declaradamente programada volta a ser escolha de projeto assumida, e não sintoma de limitação técnica"
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "Exibir conteúdo de terceiro passa a significar executar código de terceiro, e vira problema de segurança de conteúdo"
            sinal: fraco
            prazo: 2031
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "Surgem sandbox, assinatura e permissão para conteúdo executável, no molde do que existe para extensão de navegador"
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "Formatos de troca passam a carregar a derivação (o programa que gerou) junto do resultado, e não apenas o resultado"
        sinal: fraco
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "Interoperabilidade deixa de ser conversão de malha e vira tradução entre linguagens de descrição — e passa a falhar de outro jeito, semanticamente"
            sinal: fraco
            prazo: 2032
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "O mercado consolida-se em poucos DSLs de fato, e a trava de fornecedor desloca-se do formato de arquivo para a linguagem"
                sinal: fraco
                prazo: 2033
                confianca: baixa
  - disrupcao: "D3 — A ferramenta de autoria dirigida por agente via protocolo: o software criativo expõe sua linguagem interna a agentes, com validador acoplado"
    efeitos:
      - id: e6
        ordem: 1
        efeito: "O software de criação passa a ter duas interfaces de primeira classe: a humana e a de agente"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "O valor competitivo do software desloca-se da interface para a qualidade da API, da documentação e do validador"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "Documentação e corpora de exemplo tornam-se ativo licenciado e negociado, em vez de cortesia pública"
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "O technical artist deixa de operar a ferramenta e passa a projetar e auditar o ambiente em que o agente opera"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "Equipes pequenas passam a sustentar pipelines procedurais antes restritos a estúdios com TD dedicado"
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: "Comunidades de creative coding dividem-se entre aceitar e recusar contribuição gerada, e escrevem a norma antes de qualquer regulação"
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "Formam-se duas trilhas de prática com públicos distintos: código como artesanato autoral e código como saída de máquina"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "Proveniência — quem escreveu a regra, e com que ajuda — passa a compor o valor da obra em arte generativa, como assinatura compõe o valor no mercado de arte"
                sinal: fraco
                prazo: 2032
                confianca: baixa
```

**Totais:** 3 disrupções, 7 efeitos de 1ª ordem, 12 de 2ª, 13 de 3ª — 32 efeitos.

### O que a estrutura não captura bem

**Realimentação.** A roda é uma árvore; o fenômeno não é. `e3.2` (o gargalo vira dado procedural) realimenta D1 diretamente: se o dado não aparecer, a raiz não se sustenta, e a árvore inteira que pende dela encolhe. A árvore não consegue desenhar essa seta de volta.

**Competição entre raízes.** D1, D2 e D3 aparecem lado a lado como se fossem independentes, e não são. D2 pode falhar sozinha — o programa vira andaime interno, roda uma vez, entrega malha e é descartado — sem que D1 seja afetada. Nesse caso a metade da roda que trata de formato, banda e segurança de conteúdo desaparece e o resto continua de pé. É o cenário alternativo mais plausível deste mapa, e a estrutura em árvore o esconde.

**Sinais opostos para públicos distintos.** `e6.2.1` ("equipes pequenas sustentam pipeline procedural") é oportunidade para o estúdio independente e ameaça direta para o TD sênior que vendia exatamente essa escassez. O campo `sinal` guarda um valor só e apaga essa ambivalência.

**Ordem não é data.** `e7` é efeito de 1ª ordem com prazo 2027 porque **já está acontecendo** — a política do p5.js existe. `e1.1.1` é de 3ª ordem com prazo 2032. Mas `e3` (1ª ordem, 2028) e `e4` (1ª ordem, 2030) mostram que a mesma ordem comporta distâncias temporais muito diferentes. A ordem mede distância causal à raiz, nada mais.

**Ausência de contrafactual no formato.** Não há campo para "o que este efeito exige que não está garantido". Os pré-requisitos ficaram na ficha de cada raiz (`o_que_falta`), separados dos efeitos que dependem deles.

## 6. Sinais fracos e wildcards

### Sinais fracos

1. **A SideFX expõe a própria linguagem a agentes e embute um validador — mas em canal de laboratório.** O Apex Script MCP veio com extensão de VS Code, painel Python e validador de código, e ainda assim foi apresentado como *sneak peek* rumo ao Labs. O sinal não é a capacidade; é o fabricante tratar o agente como usuário e, no mesmo gesto, recusar-se a chamar isso de produto. E o argumento de venda escolhido — o código continua sendo um script comum do artista, *sem dependência contínua do LLM* — indica que ele já ouviu a objeção do mercado antes de lançar.

2. **O p5.js escreve, na política de contribuição, que não aceita contribuição inteiramente gerada.** O texto é curto e categórico: *"This project does not accept fully AI-generated contributions. AI tools may be used assistively only"*, com a justificativa de que o contribuidor deve entender e responder pelo que muda no código. Norma comunitária nascendo antes de qualquer regulação, no projeto que forma boa parte de quem entra em creative coding. É o contrassinal mais concreto do mapa e, ao mesmo tempo, o sinal de que a disputa é cultural e já começou.

3. **A verificação migrando de perceptual para estrutural.** O Procedura não pergunta "parece certo?"; pergunta se compila, se os encaixes tipados batem e se o grafo está conectado. É uma mudança de critério: da aprovação por render para a aprovação por propriedade verificável. Se pegar, muda o que "pronto" significa.

4. **O benchmark declarando que o gargalo é dado, não modelo.** O 3DCodeBench encerra apontando "necessidade crítica de dado de codificação procedural de alta qualidade" e de ambiente de execução robusto com realimentação fiel. Quando o instrumento de medida aponta para fora do modelo, o problema deixou de ser de escala.

5. **Servidores MCP de manim publicados por indivíduos, em multiplicidade.** Vários repositórios independentes fazendo a mesma ponte — animação matemática programática dirigida por agente. Multiplicidade descoordenada é sinal de demanda real; a ausência de qualquer adoção medida é o que o mantém fraco.

### O que recusei chamar de sinal fraco

Hunyuan3D, TRELLIS e congêneres são líderes de um mercado formado, com preço por crédito e plugin de engine. Chamar isso de sinal fraco seria confundir tamanho com novidade. O manim, com 93,8 mil estrelas e uma década de história, é maturidade, não indício.

### Wildcard 1 — o conteúdo chega como código assinado e compila no cliente

Um motor em que o conteúdo de uma região não é baixado como pacote, mas entregue como programa curto e assinado, compilado no dispositivo no instante em que o jogador chega. Probabilidade baixa até 2031: exige determinismo entre plataformas, modelo de segurança que hoje não existe para conteúdo executável de terceiro, e um QA que ninguém sabe fazer para algo que não existe antes de ser pedido.

**Como quebraria o mapa:** colapsaria `e4` e `e5` num efeito só e traria `e4.2` (segurança de conteúdo executável) do terceiro anel para o centro da discussão. A ferramenta de autoria deixaria de ser o produto disputado — o produto passaria a ser o sandbox e o serviço de assinatura. Toda a metade da roda que hoje fala de formato e loja perderia sentido: não haveria loja de arquivo a converter em loja de gerador, porque não haveria arquivo.

### Wildcard 2 — o gerador é protegível e a saída não

Uma decisão administrativa ou judicial de peso consolida o par: o **programa** escrito com assistência substancial de humano é obra protegível; a **saída** gerada por sua execução, sozinha, não é. O terreno para isso existe — o [relatório do U.S. Copyright Office](https://www.copyright.gov/ai/) trata a copyrightabilidade de saídas de IA generativa na Parte 2, publicada em 29/01/2025 — mas a formulação exata dessa conclusão eu **não** verifiquei no documento (ver seção 8), e isto aqui é hipótese, não leitura.

**Como quebraria o mapa:** inverteria o incentivo econômico de uma vez. `e1.1.1` (licença de gerador) e `e1.1.2` (titularidade da regra) sairiam do terceiro anel para o primeiro, e a pergunta "quem escreveu a regra" deixaria de ser curiosidade de proveniência (`e7.1.1`) para virar questão contratual em todo projeto comercial.

## 7. Contra o próprio mapa

**1. Qual efeito é apenas extrapolação linear do presente?**
`e2.1` ("o esforço desloca-se de executar para especificar e julgar"). É a frase que toda análise de IA e trabalho criativo produz desde 2023, para qualquer tema, e por isso mesmo cai na exclusão declarada na entrevista: ideias que servem para qualquer tema devem sair. Mantive-a, mas rebaixada e amarrada a um mecanismo específico deste tema — o custo assimétrico entre o primeiro acerto e a enésima variação (`e2`) —, sem o qual ela seria genérica. Se o portão de qualidade barateasse junto com a variação, `e2.1` perderia a base e deveria cair.

**2. Qual efeito assume adoção rápida demais?**
`e4` e `e5`, a perna de formato. O caso histórico que serve de régua é desconfortável: formatos de troca em 3D levam **décadas** para se consolidar e conviver, não anos; e o exemplo mais próximo do que `e5` propõe — carregar a derivação junto do resultado — já existe como ideia em CAD paramétrico há muito tempo e nunca virou o padrão de troca entre fabricantes. Rebaixei `e5` para confiança baixa e `e5.1.1` para 2033. Se em 2031 o padrão de troca continuar carregando só o resultado, a raiz D2 falhou, e não parcialmente.

**3. Qual disrupção-raiz pode simplesmente não acontecer?**
**D2.** Ela depende de uma premissa que nenhuma fonte que abri sustenta: que o programa gerado seja **editável por terceiro**. A única evidência de editabilidade que vi é do autor editando o próprio código (Proc3D, LL3M, img2threejs). Editar código alheio, gerado por máquina, sem a especificação original, é um problema diferente e conhecidamente pior. Se ele não for resolvido, o programa vira andaime interno — gera-se, executa-se, exporta-se a malha, descarta-se o código — e o que circula continua sendo binário.

**4. O que quebra na roda se essa disrupção falhar?**
Caem `e4`, `e5` e todos os seus descendentes: seis efeitos, quase um quinto da roda. Sobrevivem D1 e D3 inteiras, porque elas operam **dentro** do estúdio e não dependem do que circula fora. É o desenho mais provável de meio-fracasso: a IA escreve o gerador, o gerador nunca sai de casa.

**5. Que contrassinais existem?**
Quatro, todos verificados:
- A política do p5.js recusando contribuição inteiramente gerada — a comunidade que este tema mais mobilizaria está resistindo.
- O 3DCodeBench relatando que as falhas predominantes são **descasamento de API** e **componentes flutuantes**. Não são falhas de gosto nem de ambição: são falhas básicas.
- A integração MCP do Houdini ser *sneak peek* para canal experimental, apresentada por quem tem todo o incentivo de anunciá-la como pronta.
- O mercado comercial de 3D gerado estar organizado em torno de **malha** com rigging e plugin de engine, não em torno de código. A cadeia de valor existente premia o arquivo. *(Este último veio de resultados de busca que não abri, e por isso não entra na seção 11 nem sustenta afirmação — fica como hipótese a verificar.)*

**6. Que barreiras foram subestimadas?**
- **Determinismo e reprodutibilidade.** Um programa que gera a cena tem de gerar a mesma cena, na mesma versão da ferramenta, no mesmo hardware. Toda a promessa de "revisão por diff" (`e1.2`) desaba se a saída variar.
- **Custo de token do portão.** O laço de verificação do img2threejs tem oito passes com revisão visual em cada um. `e2` afirma que a variação fica barata, mas o portão pode ter de rodar de novo a cada variação. Não achei medição disso.
- **Responsabilidade legal sobre código gerado dentro de ferramenta comercial.** Ninguém resolveu de quem é a falha quando o script escrito pelo agente do fabricante quebra a produção do cliente.
- **Segurança.** `e4.2` está no segundo anel, mas na prática é pré-condição de `e4`: nenhuma plataforma vai distribuir conteúdo executável de terceiro antes do sandbox, não depois.

**7. Que ator teria incentivo para bloquear, capturar ou redirecionar?**
- **Lojas de asset e marketplaces**, cujo modelo é venda de arquivo por unidade: uma família paramétrica destrói a contagem de unidades. Capturam redirecionando para licença por uso, o que é `e1.1.1` — e nesse caso o efeito não é sinal de ruptura, é sinal de captura.
- **Fabricantes de DCC**, que podem abraçar D3 e usá-la para aprofundar trava de fornecedor: quanto mais o agente é bom na *minha* linguagem, menos o cliente sai. `e5.1.1` descreve exatamente esse desfecho.
- **Provedores de modelo**, para quem "gerar pixel" custa mais token por resultado e portanto vale mais — têm incentivo tênue, mas real, contra a economia de "gerar programa curto".
- **Comunidades de prática**, que já estão exercendo bloqueio normativo (p5.js) e cuja legitimidade é alta justamente onde este tema precisa dela.

**8. Que viés meu e do modelo entrou aqui?**
Três, declarados:
- **Viés de fonte.** Todo o material forte deste mapa é arXiv e GitHub — meios em que quem propõe descreve o próprio trabalho e raramente publica o que não funcionou. Dos seis artigos que abri, **quatro não declaram limitação alguma no resumo**. Compensei parcialmente ancorando as afirmações negativas no único benchmark independente.
- **Viés de simetria narrativa.** "Gerar pixel × gerar programa" é uma oposição elegante, e eu a herdei do enunciado do tema. O desfecho mais provável, porém, é híbrido — estrutura por programa, superfície por dado neural — e a roda não tem nenhum efeito representando o híbrido. É uma lacuna consciente, registrada no anexo.
- **Viés de recência.** Praticamente nada aqui é anterior a 2025. Um campo cuja evidência inteira cabe em dezoito meses ainda não permite distinguir tendência de safra.

**O que foi cortado ou rebaixado após esta revisão:**
- **Cortado:** "escolas de design substituem o ensino de desenho pelo ensino de sistemas até 2031". Extrapolação sem mecanismo — currículo muda por processo institucional lento, e eu não tinha evidência nenhuma de movimento curricular. Substituído por `e2.1.1`, mais estreito e falsificável (critério de avaliação, não conteúdo do curso).
- **Cortado:** "a obra passa a ser o código e um mundo inteiro cabe num prompt", vindo das perguntas de 3ª ordem do enunciado. Não consegui completar o teste de causalidade: não há mecanismo que ligue "programas curtos descrevem visual" a "a obra passa a ser o código" sem passar por uma mudança normativa que eu não sei demonstrar. O que sobrou dele, verificável, é `e7.1.1` — proveniência compondo valor.
- **Rebaixado:** `e4.1` de confiança alta para média, e reescrito. A formulação original repetia a razão "mil vezes mais leve" do enunciado; nenhuma medição comparativa direta programa × splat foi encontrada. Ficou como disputa por orçamento de banda, que é o que a evidência sustenta.
- **Rebaixado:** `e1.1.1` de média para baixa, porque, como o item 7 mostra, ele é tão compatível com captura de mercado quanto com ruptura.
- **Rebaixado:** `e5` e toda a sua descendência, pelo argumento histórico do item 2.

## 8. O que a máquina errou

Seis erros efetivamente detectados durante o processo. Nenhum foi inventado para parecer crítico; e onde a verificação não foi possível, o limite está declarado em vez de contornado.

**1. Número herdado do enunciado tratado como fato medido.** O enunciado do tema afirma que "o 3D procedural gerado por IA é mil vezes mais leve que o splat". Eu comecei a construir um efeito de 2ª ordem em cima dessa razão. Não existe, em nada que abri, medição comparativa da mesma cena nas duas representações. O que existe é o orçamento de um dos lados: 200–500 MB sem compressão, 20–200 MB para web, 15–30 MB no celular. **Correção:** a razão foi descartada e `e4.1` reescrito em termos de orçamento, não de fator.

**2. Produto quase promovido a disrupção.** "IA escreve shader" chegou a figurar como quarta raiz, apoiada em ShadAR e AI Co-Artist. São demonstração e estudo com usuário, e a capacidade estrutural por trás é a mesma de D1 aplicada a um domínio. **Correção:** rebaixada a sinal. É exatamente o erro que a seção 2 da skill nomeia — confundir produto recente com disrupção.

**3. Benchmark citado de memória e não confirmado.** Procurei "ShaderEval" como se fosse benchmark estabelecido de geração de shader. Não confirmei sua existência em nenhuma fonte que eu tenha aberto; o que apareceu na busca foi um dataset de shaders do Shadertoy, que **não abri**. **Correção:** não citei nem um nem outro. Fica registrado no anexo como busca sem resultado.

**4. Número do enunciado desatualizado.** O briefing da disciplina afirma que o manim tem "92 mil estrelas". O repositório mostrava **93,8 mil** quando o abri, em 12/09/2026. A diferença é trivial e não muda nada — registro porque o número entrou no material como fato, e fatos com contador se movem.

**5. Contagens divergentes para o mesmo repositório em agregadores de terceiros.** Os resultados de busca sobre o img2threejs traziam 14,6 mil e 4,2 mil estrelas em dois agregadores distintos, enquanto o README do próprio repositório, que abri, informa 15,9 mil. **Correção:** usei só o README e registrei a divergência. Agregador de terceiro não é fonte de número primário.

**6. Conclusão jurídica que eu ia parafrasear sem ler.** Sobre direito autoral, abri a página do U.S. Copyright Office sobre IA e ela traz as datas e o escopo das três partes do relatório — Parte 1 em 31/07/2024, Parte 2 (Copyrightabilidade) em 29/01/2025, Parte 3 (pré-publicação) em 09/05/2025 — **mas não o texto das conclusões**. Eu tinha, de memória, a formulação sobre autoria humana e contribuição não-trivial. **Correção:** não sustentei essa formulação. O PDF da Parte 2 não foi aberto, e por isso o Wildcard 2 está declarado como hipótese, não como leitura da norma.

**Verificação adicional, sem erro encontrado:** conferi que nenhuma das treze afirmações numéricas ou de data que aparecem neste documento veio de fonte que eu não tenha aberto, e que nenhuma das seis fontes de arXiv teve autoria ou data invertida.

## 9. Três cenários para 2031

### Provável — o gerador que não sai de casa

Estamos em 2031 e a síntese de programa gráfico virou rotina **dentro** dos estúdios. Pedir "um poste de rua estilo anos 50" devolve um script parametrizado e uma especificação; o pipeline roda o portão de verificação automaticamente e barra o que não fecha. O ganho real apareceu onde o Proc3D já apontava em 2026: não na primeira entrega, mas na décima variação, e sobretudo na mudança de última hora.

Só que o que sai do estúdio continua sendo arquivo. O programa é andaime: gera, exporta, arquiva. A razão é prosaica — ninguém resolveu editar código gerado por outro, meses depois, sem a especificação original, e os formatos de troca continuam carregando resultado sem derivação. As lojas de asset absorveram a novidade da forma mais previsível: vendem "packs paramétricos" com um punhado de sliders expostos e o resto trancado, o que é licença de gerador pelo nome e venda de arquivo pela prática.

As ferramentas de autoria ganharam interface de agente — isso pegou. Quem sustenta pipeline procedural hoje são equipes menores do que em 2026, e o technical artist virou, na maioria dos lugares, quem projeta o ambiente e audita o que o agente fez. A comunidade de creative coding seguiu dividida, e a divisão estabilizou: dois públicos, duas trilhas, pouco diálogo.

### Desejável — a regra circula, e com procedência

Mesmo 2031, e o programa **circula**. Três coisas precisaram ser construídas, nenhuma delas automática.

A primeira foi a especificação viajar junto. Não bastou entregar código; foi preciso entregar a intenção em forma legível e testável — o que tornou possível a um terceiro pegar um gerador alheio e mexer nele sem arqueologia. A segunda foi a verificação executável virar bem comum: os portões de conformidade visual deixaram de ser vantagem proprietária de cada pipeline e viraram camada compartilhada, auditável, com métrica publicada. A terceira foi cultural e veio das comunidades, não dos fabricantes: proveniência declarada — quem escreveu a regra, com que assistência, sobre qual base — virou parte do que se entrega, do jeito que crédito de fotografia é parte do que se entrega.

O efeito mais visível não estava nos planos de ninguém: uma estética programada voltou a ser escolha assumida, reconhecível, defendida — não porque a máquina não desse conta do fotorrealismo, mas porque leveza, editabilidade e legibilidade viraram valores de projeto. Escolas de design passaram a avaliar especificação e critério de aceite ao lado do artefato, e a divisão entre artesanato e máquina virou repertório em vez de trincheira.

### Indesejável — a linguagem como cadeia

2031, e a promessa se cumpriu invertida. O programa virou mesmo a unidade de troca — mas cada fabricante consolidou a **sua** linguagem, com o agente afinado nela, a documentação fechada e o validador acoplado ao produto. Migrar deixou de ser exportar malha, que funcionava mal mas funcionava, e passou a ser traduzir linguagem, que falha de um jeito pior: silenciosamente, semanticamente, num parâmetro que não existe do outro lado e cujo valor padrão ninguém percebe estar errado até o render final.

A biblioteca de geradores de cada estúdio, que era o ativo novo, virou refém: só roda onde nasceu. Documentação e corpus de exemplo, que eram cortesia pública, viraram item de contrato. E porque o conteúdo agora executa no cliente sem que sandbox e assinatura tenham amadurecido junto, houve incidentes de segurança com conteúdo de terceiro, e a resposta das plataformas foi fechar: só código de fornecedor aprovado, o que expulsou exatamente os independentes que a tecnologia deveria ter habilitado.

**O sinal precoce que teria antecipado isto** estava visível em 2026 e passou por virtude: quando um fabricante de DCC embute o validador da própria linguagem no mesmo pacote em que abre o protocolo para o agente, ele está fazendo as duas coisas ao mesmo tempo — abrindo a porta e definindo quem passa. A frase de venda "o código continua sendo seu, sem dependência do LLM" era verdadeira quanto ao LLM e omissa quanto à linguagem.

## 10. O experimento

### "A quinta variação"

**O que é.** Um estúdio-experimento de duas semanas, com dois times recebendo o **mesmo briefing**: um objeto de cena, três variantes previstas desde o início, e uma quarta variante **não prevista**, entregue só no décimo dia. O time A trabalha do jeito de 2026: entrega arquivo (malha com material, por geração nativa ou modelagem assistida). O time B entrega **programa mais especificação**: um gerador parametrizado, produzido com síntese de programa gráfico sob portão de verificação executável.

No décimo segundo dia entra o terceiro ator, que é o ponto do experimento: uma pessoa que não participou de nada recebe **só o entregável** de cada time — sem o autor, sem conversa — e tenta executar uma quinta alteração, escrita num bilhete de três linhas.

**A pergunta de futuro que testa.** Duas, encadeadas. (a) Quando a IA escreve o gerador, o ganho está na primeira entrega ou na enésima variação? (b) O programa entregue é editável **por terceiro**, ou só por quem o gerou? A segunda é a premissa de que a disrupção D2 depende inteiramente e que nenhuma fonte deste mapa sustenta.

**Tecnologia emergente usada.** Síntese de programa gráfico com portão executável — no molde do img2threejs para peça em Three.js, do LL3M para Blender, ou da KCL/Zoo para peça rígida — combinada com verificação por execução e comparação visual contra referência.

**Por que uma solução madura não responderia à mesma pergunta.** Um gerador nativo de malha responde bem à primeira entrega e às três variantes previstas; em velocidade bruta, provavelmente vence. Mas ele não produz nada que o terceiro possa editar além da própria malha, e não tem como responder à variante não prevista senão gerando de novo do zero. É exatamente esse contraste — não a qualidade do primeiro resultado — que precisa ser medido, e é por isso que o time A **precisa** usar a solução madura: ele é o controle, não o adversário.

**O que os participantes farão.** Time A e time B trabalham em paralelo, registrando tempo por etapa. Nos dias 1 a 9, as três variantes previstas. No dia 10, o pedido não previsto, idêntico para os dois. No dia 12, o terceiro recebe os entregáveis anonimizados e tem duas horas por entregável. Um júri cego — que não sabe qual time produziu o quê — avalia aceite visual contra o briefing.

**Métricas e observações.**
1. Tempo até a variante não prevista, por time.
2. Tempo do terceiro até a quinta alteração aceita, por entregável — e quantos terceiros **desistiram**.
3. Taxa de aceite do júri cego, por variante.
4. Tamanho do entregável em bytes, e quanto disso é runtime compartilhado.
5. Número de rodadas do portão de verificação por variante (proxy do custo que `e2` assume constante e pode não ser).
6. Registro qualitativo do que o terceiro reclamou: falta de especificação, nome de parâmetro opaco, código ilegível, ou coisa nenhuma.

**O que me faria mudar de ideia.** Três resultados, cada um derrubando uma parte específica deste mapa:
- Se o time B gastar **mais** tempo na variante não prevista que o time A, cai `e2` — e com ela a premissa de custo assimétrico que sustenta metade de D1.
- Se o terceiro falhar mais em editar o programa do que em editar a malha, cai **D2 inteira**, e o cenário provável desta seção 9 vira o único cenário.
- Se o número de rodadas do portão crescer proporcionalmente ao número de variantes, cai a economia inteira da regra: o gerador não amortiza, e `e1.1` (biblioteca de geradores valer mais que biblioteca de peças) perde a base.

**Hipótese falsificável, em uma frase:** *entregar o gerador em vez do artefato reduz o tempo da variação não prevista em pelo menos 50% e é editável por um terceiro sem contato com o autor.* Qualquer uma das duas metades pode falhar sozinha — e a segunda é a que eu aposto que falha.

## 11. Fontes

Catorze fontes, todas efetivamente abertas e lidas entre 11 e 12/09/2026. Nenhuma afirmação com número ou data neste documento vem de fonte fora desta lista.

1. **3DCodeBench: Benchmarking Agentic Procedural 3D Modeling Via Code** — `https://arxiv.org/abs/2606.01057`
   Submetido em 31/05/2026. Avalia 12 VLMs traduzindo texto e imagem em código procedural para software 3D. Sustenta: existe benchmark independente para a tarefa central deste mapa; as falhas predominantes são descasamento de API e componentes desconectados/flutuantes; escalonamento em tempo de teste e refino multi-turno melhoram o resultado; há "necessidade crítica" de dado procedural de qualidade e de ambiente de execução com realimentação fiel. **Confiabilidade alta** — é a única fonte técnica aqui que não descreve o próprio produto e a única que publica modos de falha.

2. **Procedura: Agentic 3D Modeling with Procedural Control** — `https://arxiv.org/abs/2608.26238`
   Submetido em 26/08/2026. Sustenta: forma 3D como programa paramétrico editável, com partes nomeadas e restrições tipadas verificáveis por máquina, validadas por compilação, checagem de encaixe e conectividade; resultados em P3D-Bench e MechBench-36. **Confiabilidade média** — artigo dos proponentes, sem limitação declarada no resumo.

3. **Proc3D: Procedural 3D Generation and Parametric Editing of 3D Shapes with Large Language Models** — `https://arxiv.org/abs/2601.12234`
   Submetido em 18/01/2026. Sustenta o número mais forte do mapa a favor de "regra é mais barata na edição": mais de 400× de aceleração sobre abordagens que regeram tudo a cada modificação, e +28% em ULIP. **Confiabilidade média** — números dos proponentes, sem replicação independente que eu tenha encontrado.

4. **LL3M: Large Language 3D Modelers** — `https://arxiv.org/abs/2508.08228`
   Submetido em 11/08/2025. Sustenta: geração de forma reformulada como escrita de código Python de Blender por equipe de agentes (planejar, recuperar, escrever, depurar, refinar), com base de recuperação sobre a documentação da API (BlenderRAG). **Confiabilidade média-baixa para alegação de desempenho** — o resumo não traz métrica quantitativa nenhuma.

5. **MeshCoder: LLM-Powered Structured Mesh Code Generation from Point Clouds** — `https://arxiv.org/abs/2508.14879`
   Submetido em 20/08/2025, revisado em 22/08/2025. Sustenta o caminho inverso (dado → regra): reconstrução de nuvem de pontos em script Python de Blender editável; e declara o gargalo — DSLs limitadas e dado pareado em escala pequena. **Confiabilidade média**.

6. **AI Co-Artist: A LLM-Powered Framework for Interactive GLSL Shader Animation Evolution** — `https://arxiv.org/abs/2512.08951`
   Submetido em 27/11/2025. Sustenta que a geração de shader por linguagem natural está em estágio de estudo com usuário, com refino evolutivo guiado. **Confiabilidade baixa para adoção** — o resumo não traz os números do estudo; foi por isso que essa linha virou sinal e não raiz.

7. **img2threejs — README do repositório** — `https://github.com/img2threejs/img2threejs`
   Apache 2.0, v2.0.0, 15,9 mil estrelas, 1,3 mil forks na leitura de 12/09/2026. Sustenta: reconstrução por código em fábrica TypeScript de `THREE.Group` sem arquivo de malha; portão de qualidade em oito passes com revisão por visão e falha fechada; trabalho mecânico em scripts determinísticos para poupar token; e a limitação declarada pelos autores de que uma imagem só não revela lados ocultos nem garante geometria exata. **Confiabilidade média** — documentação do próprio projeto, mas com limitação explicitada, o que é incomum e conta a favor.

8. **manim — repositório 3b1b/manim** — `https://github.com/3b1b/manim`
   93,8 mil estrelas, MIT, na leitura de 12/09/2026. Sustenta a maturidade da animação matemática programática e a ressalva de compatibilidade entre versões. **Confiabilidade alta para o que sustenta** (fato de repositório).

9. **p5.js — política de contribuição** — `https://github.com/processing/p5.js/blob/main/CONTRIBUTING.md`
   Sustenta o contrassinal cultural central: *"This project does not accept fully AI-generated contributions. AI tools may be used assistively only"*, com a justificativa de responsabilidade do contribuidor pelo que muda. **Confiabilidade alta** — é a política, não um relato sobre ela.

10. **Zoo — Introducing KCL** — `https://zoo.dev/research/introducing-kcl`
    Publicado em 20/05/2025. Sustenta a tese "código é o modelo" formulada em produto, e o argumento de que representar geometria como texto permite reaproveitar o ecossistema de ferramentas de texto e LLMs. **Confiabilidade baixa como evidência de futuro, média como evidência de que a aposta existe em produto** — é o fornecedor defendendo a própria arquitetura. Sinalizo a limitação: não encontrei triangulação independente sobre a qualidade real do KCL gerado por IA.

11. **SideFX e Nvidia levam agentes com MCP ao rigging do Houdini 22 no SIGGRAPH 2026 — Jon Peddie Research** — `https://www.jonpeddie.com/news/sidefx-and-nvidia-bring-mcp-powered-ai-agents-to-houdini-22s-rigging-workflow-at-siggraph-2026/`
    Keynote de 22/06/2026, em Londres. Sustenta: Apex Script Comfort Package com extensão de VS Code, painel Python e servidor MCP com validador; demonstração de 300+ linhas de código de rig; e — decisivo para a classificação de maturidade — o enquadramento explícito como *sneak peek* rumo ao Labs, canal pré-produção, "não é uma ferramenta de produção acabada". **Confiabilidade média-alta** — imprensa especializada relatando keynote, e que preserva o caveat em vez de apagá-lo.

12. **3D Gaussian Splatting: Complete Guide to Services, Use Cases & Web Viewers (2026) — Utsubo** — `https://www.utsubo.com/blog/gaussian-splatting-guide`
    Publicado em 15/01/2026. Sustenta o orçamento do lado capturado: 5–15 milhões de splats a 200–500 MB sem compressão; 5–10× de redução por formatos comprimidos; alvo de 20–200 MB na web e 15–30 MB no celular; 30–45 FPS em iPhone 14 com 200 mil splats. **Confiabilidade média** — imprensa técnica/consultoria, útil para ordem de grandeza, não para medida controlada.

13. **Copyright and Artificial Intelligence — U.S. Copyright Office** — `https://www.copyright.gov/ai/`
    Sustenta apenas: a existência e as datas das três partes do relatório (Parte 1 em 31/07/2024; Parte 2, Copyrightabilidade, em 29/01/2025; Parte 3, pré-publicação, em 09/05/2025) e o escopo declarado de cada uma. **Confiabilidade alta para o que sustenta, e insuficiente para o que eu queria** — a página não traz o texto das conclusões, e o PDF da Parte 2 não foi aberto. Por isso nenhuma conclusão jurídica é afirmada neste documento.

14. **The Creatives of the Future: How Artificial Intelligence is Reshaping the Creative Industry in Brazil — Reglab** — `https://reglab.com.br/en/the-creatives-of-the-future-ai-creative-industry/`
    Publicado em 19/05/2026; coleta entre setembro e novembro de 2025; **sete** entrevistados por amostragem de caso extremo. Sustenta que existe estudo qualitativo brasileiro sobre adoção de IA no setor criativo e que ele **declara não ser generalizável**. **Confiabilidade média para o qualitativo, nula para adoção** — e é por isso que a nota sobre o Brasil, na seção 3.6, é declarada como lacuna.

## 12. Anexo — o levantamento bruto

### 12.1 Classificações de maturidade, inclusive as que não entraram

| Candidato | Maturidade | Ruptura | Destino |
|---|---|---|---|
| Síntese de programa gráfico guiada por execução | emergente | alto | **D1** |
| Programa paramétrico como unidade de troca | emergente | alto | **D2** (evidência mais fraca) |
| Ferramenta de autoria dirigida por agente via protocolo | experimental | alto | **D3** |
| Verificação estrutural (mates tipados, conectividade) como critério de aceite | experimental | médio | Sinal fraco 3 |
| Shader por linguagem natural | emergente | médio | Sinal; é D1 num domínio |
| Inverse procedural modeling (dado → regra) | emergente | médio | Absorvido em D1 (MeshCoder) |
| Materiais procedurais por síntese de programa (VLMaterial, MultiMat) | emergente | médio | Não aprofundado — ver 12.4 |
| Geração procedural clássica (WFC, noise, geometry nodes, Houdini) | maduro | — | Antecedente |
| Creative coding (Processing, p5, nannou, css-doodle, curv, glisp) | maduro | — | Antecedente e palco do contrassinal |
| Manim | maduro | — | Antecedente; o emergente é o agente que a dirige |
| Geradores nativos de malha/splat por API | maduro comercialmente | médio | Descartado pela régua de produto de massa |
| 3DGS / captura neural | maduro em captura | alto, mas é outro tema | Tema 10; aqui só como termo de comparação |
| "Vibe coding" genérico | maduro-emergente | médio | Fora do recorte |

**Sobre o ecossistema citado no enunciado da disciplina** — WaveFunctionCollapse, Fantasy-Map-Generator, noise-rs, Graphite, Pixel Composer, material-maker, nannou, css-doodle, glisp, curv, SHADERed, rust-gpu, triangula, msdfgen, Cavalry, Rive, satori, Remotion, pixelgen: **todos lidos como o ecossistema procedural maduro ou estável**, antecedente deste mapa. Nenhum depende de IA escrever a regra — é exatamente essa a linha que os separa das três raízes. Nenhum foi verificado individualmente nesta rodada, e por isso nenhum é citado como evidência.

### 12.2 Caminhos causais cortados

| Aresta proposta | Por que caiu |
|---|---|
| D1 → "escolas de design substituem o ensino de desenho pelo ensino de sistemas até 2031" | Sem mecanismo. Currículo muda por processo institucional lento e eu não tinha evidência nenhuma de movimento curricular. Substituída por `e2.1.1` |
| D2 → "a obra passa a ser o código; um mundo inteiro cabe num prompt" | O teste "se A, então B fica mais provável porque ___" não fecha sem uma mudança normativa que eu não sei demonstrar. Restou `e7.1.1` |
| D1 → "o custo total de produção visual cai drasticamente" | Confunde custo de variação com custo total. `e2` registra explicitamente a assimetria: o primeiro acerto continua caro por causa do portão |
| D3 → "os fabricantes de DCC perdem relevância para agentes genéricos" | Mecanismo invertido: o validador e a documentação **aumentam** a dependência do fabricante. O efeito real é `e6.1` e, no cenário ruim, `e5.1.1` |
| D1 → "artistas 3D perdem o emprego" | Efeito plausível e sem mecanismo demonstrável neste horizonte; e a evidência aponta para deslocamento de função (`e2.1`, `e6.2`), não para eliminação. Previsão confundida com receio |
| D2 → "3D procedural é mil vezes mais leve e vence na web" | Razão herdada do enunciado, sem medição. Ver seção 8, erro 1 |

### 12.3 Efeito que falta no mapa, e eu sei que falta

**O híbrido.** O desfecho mais provável, olhando a literatura de materiais procedurais, é que a estrutura venha por programa e a superfície por dado neural — e a roda não tem **nenhum** efeito representando isso. A oposição "gerar pixel × gerar programa", herdada do enunciado, é elegante demais para ser o que acontece. Registro a lacuna como lacuna: não inventei um efeito para tapá-la porque não tenho fonte aberta que a sustente.

### 12.4 Fontes que apareceram em busca e **não** foram abertas

Não sustentam nada neste documento; ficam listadas para quem retomar:

- *Don't Mesh with Me: Generating CSG Instead of Meshes by Fine-Tuning a Code-Generation LLM* (arXiv 2411.15279) — CSG por LLM afinado.
- *SceneCraft: An LLM Agent for Synthesizing 3D Scene as Blender Code* (arXiv 2403.01248) — antecedente de 2024 da linha do LL3M.
- *VLMaterial* (arXiv 2501.18623) e *MultiMat* (arXiv 2509.22151) — síntese de programa para materiais procedurais. É por aqui que se investiga o híbrido da 12.3.
- *ShadAR: LLM-driven shader generation to transform visual perception in AR* — CHI 2026 Extended Abstracts, DOI `10.1145/3772363.3799378`.
- *QuadGPT* (arXiv 2509.21420) — malha quadrilátera nativa; interessa como contra-tese (melhorar o **dado** em vez de trocá-lo por regra).
- Comparativos comerciais de geradores nativos de 3D (3DAI Studio, Meshy, Cinevva) — sustentariam o contrassinal de cadeia de valor do item 5 da seção 7, se abertos.
- Relatório de impacto 2025 da Processing Foundation.
- PDF da Parte 2 do relatório do U.S. Copyright Office — `https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf`. **É a lacuna mais relevante deste mapa**, dado o peso de `e1.1.2` e do Wildcard 2.

### 12.5 Buscas sem resultado útil

- **"ShaderEval"** como benchmark estabelecido de geração de shader: não confirmado em fonte aberta. Ver seção 8, erro 3.
- **Medição comparativa direta, em bytes, da mesma cena como programa procedural e como 3DGS**: não encontrada. É a medição que faltaria para sustentar a tese de leveza do enunciado, e seria um bom subproduto do experimento da seção 10.
- **Dado de adoção de síntese de programa gráfico por IA em estúdio brasileiro**: nada. A única fonte brasileira aberta é qualitativa, com sete entrevistados, e declara não ser generalizável.
- **Proporção de trabalhos no Shadertoy ou no OpenProcessing com código declaradamente gerado por IA**: não encontrada. Seria o melhor indicador único de onde está a adoção na comunidade — e sua ausência é, ela própria, informativa.
- **Custo em token do portão de verificação por variante**: não publicado por nenhum dos projetos. É a barreira subestimada nº 2 da seção 7.

### 12.6 Contrassinais registrados

1. Política do p5.js recusando contribuição inteiramente gerada (fonte aberta, alta confiabilidade).
2. 3DCodeBench: falhas predominantes por descasamento de API e componentes flutuantes (fonte aberta).
3. Houdini 22 / MCP como *sneak peek* para canal experimental, pelo próprio fabricante (fonte aberta).
4. Quatro dos seis artigos abertos não declaram limitação alguma no resumo — contrassinal sobre a **qualidade da evidência**, não sobre a tecnologia.
5. Mercado comercial de 3D gerado organizado em torno de malha com rigging e plugin de engine (busca não aberta; hipótese a verificar, não evidência).

### 12.7 Hipóteses alternativas ao mapa inteiro

- **H-alt 1 — O gerador nunca sai de casa.** D1 e D3 avançam, D2 falha. É o cenário provável da seção 9 e, na minha leitura, o mais bem sustentado pela evidência atual.
- **H-alt 2 — O programa é só andaime.** Gera-se código, executa-se uma vez, exporta-se malha, descarta-se o código. A "editabilidade" seria retórica de lançamento, e a metade direita da roda perderia a base. Distingue-se de H-alt 1 por um teste concreto: a métrica 2 do experimento da seção 10.
- **H-alt 3 — Híbrido.** Programa para estrutura, dado neural para superfície. Não representado na roda; ver 12.3.
- **H-alt 4 — Captura em vez de ruptura.** Tudo acontece como descrito, e os incumbentes absorvem: as lojas licenciam geradores, os fabricantes prendem pela linguagem, os provedores de modelo vendem o portão como serviço. Nesse caso a roda está tecnicamente certa e politicamente ingênua — e `e1.1.1`, `e5.1.1` e `e6.1.1` são os três efeitos que já apontam para lá.

### 12.8 Observações de processo que não entraram no mapa

- A evidência técnica deste tema cabe em dezoito meses (fev/2025 a ago/2026). Isso é pouco para separar tendência de safra, e é a principal razão da confiança **média** declarada no frontmatter.
- Há assimetria de gênero de fonte que vale registrar: o lado "isto funciona" vem de arXiv e GitHub dos proponentes; o lado "isto ainda não funciona" vem de **uma** fonte independente (3DCodeBench) e **uma** política de comunidade (p5.js). Um mapa apoiado em dois pés desse tamanho merece ser refeito quando houver um terceiro.
- Os três prazos mais frágeis do YAML são os de `e5` e descendentes. Se eu tivesse de apostar um efeito inteiro que não acontece até 2033, apostaria em `e5.1.1`.
