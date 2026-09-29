---
tema: "Gerar geradores: design procedural e creative coding com IA"
slug: "gerar-geradores"
autor_login: "kvv"
zona_de_interesse: "Storytelling, mundos virtuais e criação procedural"
data: 2026-09-28
horizonte: 2031
publico: "Professor e alunos de CIN0055 — Tendências em Mídia e Interação (CIn/UFPE)"
recorte_geografico: "global, com lente Brasil"
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 12
efeitos_ordem_3: 18
tecnologias_citadas: ["síntese de programa gráfico com LLM", "reconstrução imagem-para-código (img2threejs)", "laço render-crítica com modelo de visão", "MCP em ferramentas de criação digital (Houdini 22, Blender, Unreal)", "geração de CAD paramétrico por LLM", "shaders GLSL gerados por LLM", "animação programática (Manim, Code2Video)", "verificação geométrica simbólica", "WebGPU", "IA local", "sandboxing WebAssembly", "geração procedural por regras (Infinigen, ProcFunc)"]
fontes: 27
confianca: "media"
experimento: "Bolo ou receita? — em duplas, metade pede à IA uma imagem e metade pede um código p5.js da mesma cena, e a turma compara quem atende com mais controle a três pedidos de mudança."
skill_usada: "futurizacao-kvv"
publico_ok: false
---

# Gerar geradores: design procedural e creative coding com IA

## 1. Resumo

Durante décadas, gerar por regra (procedural) e gerar por dado (pixel, malha, amostra) foram caminhos separados, e a IA generativa de 2022 a 2025 apostou quase tudo no segundo. Este mapa sustenta que, até 2031, a IA passa a ser sobretudo **autora de geradores**: ela reconstrói objetos como código que se pode ler e versionar, opera Houdini, Blender e Unreal por protocolo (MCP) e escreve o gerador no momento em que o conteúdo é pedido. As três disrupções-raiz (*o código como formato de ativo*, *a ferramenta de criação operada por agente* e *o gerador escrito em tempo de uso*) deslocam o valor do artefato para a regra, o trabalho do designer da execução para a especificação e a revisão, e a disputa de autoria da obra para o gerador. Para o Brasil, a janela é dupla: estúdios pequenos ganham acesso a pipelines procedurais antes restritos a grandes casas de efeitos visuais, mas crescem também o risco de "dívida procedural" e a dependência de poucos fornecedores de contexto para agentes.

## 2. O tema

**Conceito.** "Gerar geradores" é a passagem de *produzir o artefato* para *produzir a regra que produz o artefato*, com a IA escrevendo essa regra. O design procedural (L-systems, ruído de Perlin, Wave Function Collapse, geometry nodes, Houdini) existe há décadas e é maduro; o creative coding (Processing, p5.js, shaders) também [1]. O que é novo é o **autor** do gerador: um modelo de linguagem, muitas vezes guiado por um modelo de visão que olha o resultado renderizado e aponta o que corrigir, num laço fechado [2].

**Pontos de contato com mídia e interação.**
- *3D e jogos*: objetos e mundos entregues como programas pequenos, parametrizáveis e animáveis, em vez de malhas pesadas [2][3].
- *Motion e animação*: Manim, Remotion, Cavalry e Rive, a animação como programa ou máquina de estados, agora escrita por agentes [1][21].
- *Interfaces de ferramentas criativas*: o grafo de nós e o editor deixam de ser a única porta; a intenção em linguagem natural entra por protocolo [4][7].
- *Educação*: explicações visuais geradas como código verificável [20][21][24].
- *Autoria e direito*: se o prompt sozinho não confere autoria [19], o gerador editado por pessoas pode virar o novo objeto de proteção.

**Por que exige mapa prospectivo e não estado da arte.** O estado da arte responde "o que as ferramentas fazem hoje" e envelhece em meses. A pergunta decisiva do tema é de consequência: *se a representação editável e leve (programa) vencer a representação densa e opaca (pixel, malha, splat) em certos domínios, o que muda no ofício, no mercado de ativos, no direito e no ensino?* Isso depende de efeitos encadeados (quem revisa geradores? de quem é um gerador reconstruído a partir da foto de um produto?) que um levantamento de ferramentas não captura. Além disso, o tema faz fronteira com os temas 10 (captura de realidade, dado) e 12 (mídia sintética, pixel) [1]: o mapa precisa decidir **onde** a regra vence o dado, e não presumir que vence sempre.

## 3. Onde isso esta hoje

**O que funciona.**
- *Reconstrução por código a partir de uma imagem.* O img2threejs, que a turma trouxe como destaque [1], recebe uma única imagem de referência e produz uma especificação JSON e uma função TypeScript que devolve um `THREE.Group`. O processo passa por oito etapas (do bloqueio de formas à otimização), com validação determinística entre elas, e funciona com Claude Code, Codex ou OpenCode [2]. A galeria pública mostra que cada objeto é construído por código revisável, sem malhas importadas nem pacotes de arte baixados [3].
- *CAD paramétrico e formas 3D como programa.* CAD-Llama traduz sequências de comandos de CAD para um formato de código estruturado e ajusta LLMs para gerá-lo [8]; um levantamento sistemático mapeia as aplicações de LLMs em fluxos de CAD [9]; ShapeLib usa LLMs para descobrir bibliotecas reutilizáveis de funções de modelagem procedural [10]; MeshCoder converte nuvens de pontos em scripts Python executáveis no Blender [11].
- *Shaders e creative coding.* No AI Co-Artist, um LLM faz evoluir shaders GLSL a partir das escolhas visuais do usuário; no estudo com usuários, iniciantes produziram cerca de sete vezes mais shaders do que com ferramentas tradicionais [12]. O ShadAR gera shaders por linguagem natural para alterar a visão em óculos de realidade aumentada, em tempo real [13]. O shader-spec-eval, protótipo declarado, testa se o shader gerado cumpre propriedades visuais mensuráveis [14].
- *Animação explicativa como programa.* O TheoremExplainAgent gera vídeos longos que explicam teoremas com animações Manim [20]; o Code2Video usa três agentes (planejador, codificador e crítico) para transformar um tema de aula em código Python executável [21]; o SGA acrescenta uma camada de verificação geométrica que detecta sobreposições no código Manim gerado e reporta ganho relativo de 16,1% numa métrica de qualidade visual [22]; o LLM2Manim propõe um pipeline com humano no circuito, com foco pedagógico [24].
- *Ferramentas de criação abrindo-se a agentes.* No SIGGRAPH 2026, em julho, NVIDIA e fabricantes como Adobe, Affinity, Blender, Boris FX, Foundry, SideFX e Epic anunciaram conexões MCP para que agentes operem dentro das ferramentas [4][7]. A SideFX levou MCP ao Houdini 22 pelo APEX Script, para gerar e refinar código de rigging procedural; o Unreal Editor ganhou conexão MCP; o Blender oferece um servidor MCP leve pelo Blender Lab [4][6]. Antes disso, servidores MCP comunitários para Blender já circulavam [26].
- *Geradores procedurais puros em grande escala.* O Infinigen (Princeton) gera mundos fotorrealistas por geração procedural, inclusive interiores [15], e é descrito como "só regras matemáticas, zero IA" [16]; a mesma equipe publicou o ProcFunc, com API de primitivas, transpilador e rastreador [17], exatamente o tipo de camada que um agente consegue ler e escrever.

**O que falha.**
- *Fidelidade orgânica.* Reconstrução por primitivas funciona melhor com objetos manufaturados do que com rostos, tecidos e formas orgânicas; a galeria do img2threejs é dominada por objetos fabricados [3].
- *Executar não é ficar bom.* Um estudo de 2026 sobre geração de animações Manim mostra que a correlação entre métricas de código e métricas visuais enfraquece quando se usam estratégias agênticas na inferência [23]; o SGA existe justamente porque o código gerado sai com textos sobrepostos e objetos desalinhados [22].
- *Maturidade da camada agêntica nas ferramentas.* O MCP do Houdini 22 é uma prévia destinada ao SideFX Labs, "ainda não uma ferramenta de produção acabada", e restrita ao rigging em APEX Script [5].
- *Autoria.* O Copyright Office dos EUA concluiu que prompts, sozinhos, não conferem autoria; a proteção depende de elementos expressivos determinados por uma pessoa, como seleção, arranjo e modificação [19]. Não há doutrina específica para *geradores* escritos por IA e editados por pessoas.

**Quem está construindo.** Laboratórios acadêmicos (Princeton VL e grupos de formas como programa e CAD) [8][10][11][15][17], comunidades open source (img2threejs, servidores MCP para Blender) [2][26], fabricantes de ferramentas (SideFX, Blender, Epic, Adobe) e a NVIDIA como fornecedora de infraestrutura [4][6][18]. No Brasil, a programação criativa aparece sobretudo como prática comunitária, com o p5.js como porta de entrada e comunidades como a Compoética [25]; não encontrei, nas buscas desta sessão, um grupo brasileiro publicando síntese de programas gráficos com LLM (lacuna, não prova de ausência).

## 4. As disrupcoes-raiz

> Filtro aplicado: recusei como disrupção (a) "gerar shader a partir de prompt" isoladamente, porque automatiza uma tarefa que já existia (acelera, não rompe); (b) texturas e imagens por difusão, que pertencem ao tema 12; (c) Gaussian splatting, tema 10; (d) a narrativa "a IA vai substituir designers", descartada na entrevista.

### D1 — O código como formato de ativo

**O que rompe.** A divisão histórica entre *ativo* (arquivo binário: .fbx, .png, .ply) e *regra* (script, grafo). Quando a IA converte uma imagem, uma nuvem de pontos ou uma descrição num programa curto que reproduz o objeto e continua editável e animável [2][11], o ativo deixa de ser dado congelado e vira fonte versionável. Rompe também a economia de peso: o que era arquivo pesado vira texto.

**Por que agora.** Há cinco anos os modelos de código não sustentavam programas gráficos longos que compilassem, e faltava o laço *renderizar → olhar → corrigir*, que exige um modelo de visão capaz de criticar o resultado. Esse laço aparece agora em toda parte: img2threejs, Code2Video e AI Co-Artist [2][21][12]. Somam-se os agentes de código com sessões longas e ferramentas (tema 1), que transformaram "gerar código" em "iterar até passar num portão de qualidade" [1][2].

**O que falta para se concretizar.** (1) Fidelidade aceitável em formas orgânicas; (2) bibliotecas compartilhadas de abstrações, na direção do ShapeLib [10], para que os programas sejam curtos *e* expressivos; (3) métricas de qualidade que não dependam só de "outra IA achou bonito", como o shader-spec-eval e o SGA ensaiam [14][22]; (4) um formato de troca: hoje cada gerador é código de uma biblioteca específica (Three.js, bpy, CadQuery), sem um equivalente procedural do glTF.

### D2 — A ferramenta de criação operada por agente

**O que rompe.** A premissa de que dominar Houdini, Geometry Nodes ou Unreal exige anos de conhecimento tácito de nós, VEX e convenções de pipeline. Com MCP, o agente lê o estado da cena, consulta documentação curada e monta ou explica o grafo; a pessoa especifica, restringe e revisa [4][5]. O grafo de nós deixa de ser a interface principal e passa a ser o *código-objeto* da intenção.

**Por que agora.** Três coisas convergiram em 2025 e 2026: o MCP virou padrão de fato (tema 4) [1]; os agentes ficaram bons o bastante para operar APIs grandes, como mostram os servidores comunitários para Blender [26]; e os fabricantes decidiram abrir a porta em vez de construir IA própria isolada, num anúncio coordenado no SIGGRAPH 2026 [4][7]. Há cinco anos o caminho dominante era o plugin gerativo proprietário que entregava uma malha ao lado do pipeline, e não dentro dele.

**O que falta para se concretizar.** Sair da fase de prévia para produção [5]; rastreabilidade (quem mudou o quê na cena, e por quê, ponte com o tema 3); controle de custo e desempenho de agentes em cenas pesadas; e a confiança dos diretores técnicos no código gerado, que em ferramentas procedurais importa tanto quanto a velocidade [5].

### D3 — O gerador escrito em tempo de uso

**O que rompe.** A lógica de distribuição da mídia interativa: produzir → empacotar → baixar. Se um agente, na nuvem ou no aparelho, escreve o gerador no momento em que a pessoa chega (um objeto, uma fase, uma animação sobre *a dúvida daquele aluno*), o que se distribui é a capacidade de gerar, e não o conteúdo. A obra deixa de ser um estado fixo e vira uma família de estados. É o wildcard da ficha do tema ("motor de jogo em que o conteúdo é gerado como código quando o jogador chega") promovido a disrupção [1].

**Por que agora.** Agentes já geram vídeos explicativos longos a partir de código [20][21]; shaders gerados por linguagem natural já são aplicados em tempo real em óculos de RA [13]; WebGPU e IA local (temas 15 e 16) tornam plausível gerar e executar no próprio aparelho [1]. Há cinco anos o custo e a latência de gerar código confiável a cada pedido inviabilizavam a ideia.

**O que falta para se concretizar.** (1) Execução segura de código gerado no cliente (sandbox, linguagens restritas, ponte com o tema 2); (2) reprodutibilidade (semente mais versão do modelo) para que duas pessoas possam falar da "mesma" obra; (3) verificação automática de propriedades, já que testar todas as variações é impossível [14][22]; (4) modelos locais capazes o bastante. É a disrupção menos madura das três e, por isso, a de menor confiança no mapa.

## 5. A roda dos futuros

```yaml
roda:
  - id: "e1"
    titulo: "O código como formato de ativo"
    sinal: "img2threejs reconstrói objetos como fábricas TypeScript sem malhas importadas [2][3]"
    prazo: "2026-2030"
    confianca: "media"
    efeitos:
      - id: "e1.1"
        titulo: "Ativos 2D e 3D passam a ser entregues e versionados como código-fonte, não como binários"
        sinal: "especificação JSON mais fábrica TypeScript como saída do img2threejs [2]"
        prazo: "2027-2029"
        confianca: "media"
        efeitos:
          - id: "e1.1.1"
            titulo: "Revisão de arte migra para o fluxo de código: o diretor de arte aprova mudanças de parâmetros"
            sinal: "galeria com contribuição por pull request e código revisável [3]"
            prazo: "2028-2030"
            confianca: "media"
            efeitos:
              - id: "e1.1.1.1"
                titulo: "Surge a função de revisor de geradores, e o portfólio do designer vira repositório com histórico"
                sinal: "inferência a partir de e1.1.1; sem sinal direto"
                prazo: "2029-2031"
                confianca: "baixa"
              - id: "e1.1.1.2"
                titulo: "Comparar o render de antes e depois de cada versão vira rotina em estúdios e cursos"
                sinal: "comparação lado a lado a cada etapa no pipeline img2threejs [2]"
                prazo: "2028-2030"
                confianca: "media"
          - id: "e1.1.2"
            titulo: "Custo de armazenamento e transmissão de ativos cai de megabytes para kilobytes em objetos manufaturados"
            sinal: "img2threejs se apresenta como image-to-3D econômico em tokens [2]"
            prazo: "2027-2029"
            confianca: "media"
            efeitos:
              - id: "e1.1.2.1"
                titulo: "Lojas de ativos passam a vender geradores parametrizáveis, com licença por variação, e não arquivos"
                sinal: "inferência; geradores procedurais vendidos hoje são nicho"
                prazo: "2029-2031"
                confianca: "baixa"
      - id: "e1.2"
        titulo: "Qualquer objeto fotografado pode virar programa editável, e apropriar-se de um design fica trivial"
        sinal: "galeria reconstrói produtos comerciais identificáveis a partir de uma imagem [3]"
        prazo: "2027-2029"
        confianca: "media"
        efeitos:
          - id: "e1.2.1"
            titulo: "Conflito de propriedade: o gerador reconstruído a partir da foto de um produto é cópia?"
            sinal: "prompt sozinho não confere autoria, segundo o Copyright Office [19]"
            prazo: "2027-2030"
            confianca: "media"
            efeitos:
              - id: "e1.2.1.1"
                titulo: "Marcas exigem filtros contra reconstrução por código e cláusulas contratuais contra conversão de produto em gerador"
                sinal: "inferência a partir de e1.2.1"
                prazo: "2029-2031"
                confianca: "baixa"
              - id: "e1.2.1.2"
                titulo: "Designers documentam a trilha de edição humana do gerador para reivindicar autoria"
                sinal: "proteção de seleção, arranjo e modificação feitos por pessoas [19]"
                prazo: "2029-2031"
                confianca: "baixa"
          - id: "e1.2.2"
            titulo: "Ler o gerador de objetos reais vira forma de aprender forma e composição"
            sinal: "código-fonte legível de cada estudo na galeria [3]; animação programática no ensino [21][24]"
            prazo: "2027-2029"
            confianca: "media"
            efeitos:
              - id: "e1.2.2.1"
                titulo: "Currículos de design trocam parte da modelagem à mão por leitura e crítica de geradores"
                sinal: "a ficha do tema pergunta se o ensino de design vira ensino de sistemas [1]"
                prazo: "2029-2031"
                confianca: "baixa"
  - id: "e2"
    titulo: "A ferramenta de criação operada por agente"
    sinal: "conexões MCP anunciadas por sete fabricantes no SIGGRAPH 2026 [4][7]"
    prazo: "2026-2030"
    confianca: "media"
    efeitos:
      - id: "e2.1"
        titulo: "O grafo de nós deixa de ser a interface principal: o designer especifica a intenção e o agente monta e explica o grafo"
        sinal: "Houdini 22 com MCP gerando e refinando APEX Script [4][5]"
        prazo: "2027-2030"
        confianca: "media"
        efeitos:
          - id: "e2.1.1"
            titulo: "A barreira de entrada de Houdini e Geometry Nodes cai, e estúdios pequenos criam ferramentas procedurais próprias"
            sinal: "MCP como interface em linguagem natural para quem tem pouca experiência em 3D [6]"
            prazo: "2028-2030"
            confianca: "media"
            efeitos:
              - id: "e2.1.1.1"
                titulo: "Estúdios pequenos, inclusive no Brasil, competem com pipelines antes restritos a grandes casas de efeitos visuais"
                sinal: "inferência; Blender gratuito com servidor MCP do Blender Lab [4][6]"
                prazo: "2029-2031"
                confianca: "baixa"
              - id: "e2.1.1.2"
                titulo: "Dívida procedural: proliferam geradores que ninguém na equipe entende nem sabe manter"
                sinal: "análogo à dívida técnica de código gerado por agente, tema 1 [1]"
                prazo: "2029-2031"
                confianca: "media"
          - id: "e2.1.2"
            titulo: "O conhecimento tácito do diretor técnico vira documentação curada para agentes, e ganha valor de ativo"
            sinal: "pacote curado de sintaxe, funções, documentação e exemplos de APEX Script para o agente [5]"
            prazo: "2027-2029"
            confianca: "media"
            efeitos:
              - id: "e2.1.2.1"
                titulo: "Fabricantes competem pela qualidade do contexto para agentes, e a dependência migra da interface para esse contexto"
                sinal: "inferência a partir de e2.1.2"
                prazo: "2029-2031"
                confianca: "baixa"
      - id: "e2.2"
        titulo: "Ferramentas passam a conversar por um protocolo comum, sem plugins sob medida"
        sinal: "NVIDIA promove MCP para evitar uma teia de plugins entre ferramentas [6]"
        prazo: "2027-2030"
        confianca: "media"
        efeitos:
          - id: "e2.2.1"
            titulo: "A linha de produção vira uma orquestra de agentes"
            sinal: "inspeção de texturas, validação de cor, variantes de exportação e validação de shot citadas como alvo [7]"
            prazo: "2028-2030"
            confianca: "media"
            efeitos:
              - id: "e2.2.1.1"
                titulo: "Estúdios passam a medir produtividade por geradores reutilizáveis mantidos, e não por ativos entregues"
                sinal: "inferência"
                prazo: "2030-2031"
                confianca: "baixa"
              - id: "e2.2.1.2"
                titulo: "Incidentes de agentes alterando cenas sem rastro levam a exigir trilha de auditoria nas ferramentas"
                sinal: "ponte com o tema 3, observabilidade de agentes [1]"
                prazo: "2028-2030"
                confianca: "media"
          - id: "e2.2.2"
            titulo: "Ferramentas abertas como o Blender ganham vantagem por terem API e comunidade de servidores MCP"
            sinal: "servidores MCP comunitários desde 2025 [26] e servidor do Blender Lab [4]"
            prazo: "2028-2030"
            confianca: "baixa"
            efeitos:
              - id: "e2.2.2.1"
                titulo: "Em mercados com licenças cotadas em dólar, como o Brasil, o Blender vira o centro agêntico de estúdios e escolas"
                sinal: "inferência com lente Brasil"
                prazo: "2030-2031"
                confianca: "baixa"
  - id: "e3"
    titulo: "O gerador escrito em tempo de uso"
    sinal: "shaders gerados por LLM aplicados em tempo real em óculos de RA [13]; vídeos explicativos gerados como código [20][21]"
    prazo: "2027-2031"
    confianca: "baixa"
    efeitos:
      - id: "e3.1"
        titulo: "Jogos e experiências distribuem geradores e sementes em vez de conteúdo, e parte do mundo é escrita quando o usuário chega"
        sinal: "wildcard da ficha do tema [1]; ShadAR [13]"
        prazo: "2029-2031"
        confianca: "baixa"
        efeitos:
          - id: "e3.1.1"
            titulo: "Cada jogador vê um mundo diferente, e comunidades passam a trocar sementes e geradores"
            sinal: "inferência"
            prazo: "2030-2031"
            confianca: "baixa"
            efeitos:
              - id: "e3.1.1.1"
                titulo: "Crítica e curadoria migram da obra para o sistema que a gera"
                sinal: "a ficha do tema pergunta se a obra vira o código [1]"
                prazo: "2030-2031"
                confianca: "baixa"
              - id: "e3.1.1.2"
                titulo: "Testar todas as variações fica impossível, e verificar propriedades vira requisito de publicação"
                sinal: "avaliação por propriedades mensuráveis no shader-spec-eval [14]"
                prazo: "2030-2031"
                confianca: "baixa"
          - id: "e3.1.2"
            titulo: "Executar código gerado no aparelho do usuário abre uma nova porta para ataques"
            sinal: "ponte com o tema 2, contenção de agentes [1]"
            prazo: "2028-2030"
            confianca: "media"
            efeitos:
              - id: "e3.1.2.1"
                titulo: "Ganham espaço linguagens de geração deliberadamente limitadas e sandboxes WebAssembly para código gerado"
                sinal: "isolamento em WebAssembly já trazido pela turma no tema 2 [1]"
                prazo: "2029-2031"
                confianca: "media"
      - id: "e3.2"
        titulo: "Mídia explicativa é gerada como programa sob demanda, e cada estudante recebe a animação da sua dúvida"
        sinal: "TheoremExplainAgent e Code2Video [20][21]"
        prazo: "2027-2029"
        confianca: "media"
        efeitos:
          - id: "e3.2.1"
            titulo: "Professores viram curadores de bibliotecas de geradores didáticos, em vez de produtores de vídeo fixo"
            sinal: "LLM2Manim com humano no circuito e foco pedagógico [24]"
            prazo: "2028-2030"
            confianca: "media"
            efeitos:
              - id: "e3.2.1.1"
                titulo: "Nova desigualdade: redes com curadoria usam geradores confiáveis, e as demais ficam com vídeo genérico"
                sinal: "inferência com lente Brasil"
                prazo: "2030-2031"
                confianca: "baixa"
              - id: "e3.2.1.2"
                titulo: "Erros sutis de geometria e layout gerados em escala tornam verificadores simbólicos um padrão"
                sinal: "SGA detecta e corrige conflitos espaciais em Manim gerado [22]"
                prazo: "2028-2030"
                confianca: "media"
          - id: "e3.2.2"
            titulo: "O mesmo gerador produz a explicação em outras formas: alto contraste, versão tátil, descrição em áudio"
            sinal: "inferência: o código carrega a estrutura da cena que o pixel não carrega [22]"
            prazo: "2029-2031"
            confianca: "baixa"
            efeitos:
              - id: "e3.2.2.1"
                titulo: "Normas de acessibilidade passam a exigir a fonte gerativa da mídia educacional pública"
                sinal: "inferência"
                prazo: "2030-2031"
                confianca: "baixa"
```

**O que o bloco não exprime sozinho.**
- *As disrupções não são independentes.* A e2 é o canal por onde a e1 entra na produção profissional (o gerador reconstruído precisa de uma ferramenta para ser mantido), e a e3 depende de a e1 resolver fidelidade e verificação. Se a e1 estagnar nas formas orgânicas, a e3 fica restrita a nichos estilizados (low-poly, explicativo, interface).
- *Assimetria de domínio.* O mapa não prevê que "programa vence pixel" em geral. A aposta é territorial: o programa vence onde se exige edição, animação, leveza, explicabilidade ou verificação (objetos manufaturados, CAD, interface animada, didática, estilizado); pixel, splat e difusão continuam vencendo no fotorrealismo orgânico e na captura (temas 10 e 12). A fronteira entre os territórios é a variável mais importante que o YAML não mostra.
- *Ramos que se cruzam.* A e1.2.1 (propriedade do gerador reconstruído) e a e2.1.2 (conhecimento curado vira ativo) tratam da mesma pergunta por lados opostos: quem é dono do saber embutido num gerador. A e3.1.2 (ataques) e a e2.2.1.2 (trilha de auditoria) também convergem para uma infraestrutura comum de rastreio de código gerado.
- *A confiança cai com a ordem, mas não de modo uniforme.* Os efeitos de verificação (e1.1.1.2, e3.2.1.2, e3.1.2.1) têm confiança média mesmo na 3ª ordem, porque já há sinais técnicos; os efeitos econômicos e culturais (e1.1.2.1, e2.2.1.1, e3.1.1.1) são inferência pura.
- *Lacuna.* A lente Brasil aparece em poucos nós (e2.1.1.1, e2.2.2.1, e3.2.1.1) porque os sinais brasileiros encontrados são de comunidade, e não de indústria ou pesquisa em síntese de programas.

## 6. Sinais fracos e wildcards

**Sinais fracos.**
- *"Econômico em tokens" como argumento de venda* de um gerador 3D [2]: a métrica de custo da mídia sai de bytes e polígonos e entra em tokens.
- *Portões de qualidade embutidos na própria ferramenta de IA*: o img2threejs valida cada etapa com scripts determinísticos e deixa o julgamento do modelo só para a comparação visual [2]. O controle de qualidade passa a morar dentro do gerador de geradores.
- *Verificação sem juiz-IA*: o shader-spec-eval dispensa o "LLM como juiz" [14] e o SGA troca a crítica visual por análise geométrica determinística [22]. É sinal de desconfiança crescente no modelo que avalia a si mesmo, e de que a próxima camada de valor é a verificação.
- *O Houdini 22 começa pelo rigging* [5], e não pela modelagem: o agente entra pelo trabalho procedural mais tedioso e mais bem delimitado, um padrão provável para outras ferramentas.
- *O ProcFunc converte árvores de nós do Blender em código Python* [17]: geradores procedurais sendo reescritos numa forma que agentes leem e escrevem com mais facilidade.
- *Programação criativa como porta de entrada no Brasil* [25]: comunidades apresentam p5.js como hobby e forma de aprender; é aí, e não na indústria, que o "gerar geradores" tende a chegar primeiro por aqui.

**Wildcards (baixa probabilidade, alto impacto).**
- **W1 — O tradutor universal.** Surge um modelo que converte automaticamente qualquer splat, malha ou vídeo gerado num programa compacto, com fidelidade quase total. A disputa pixel contra programa acaba: tudo é capturado ou gerado como dado e *compilado* para código na saída. A e1 vira commodity e o mapa inteiro se desloca para verificação e autoria.
- **W2 — O shader-bomba.** Um shader ou programa WebGPU escrito por IA em tempo de uso é usado num ataque em larga escala (rastreamento, travamento de GPU, vazamento de dados), e os navegadores passam a bloquear por padrão código gráfico gerado. A e3 recua cinco anos.
- **W3 — O gerador tem dono.** Um tribunal ou escritório de registro relevante reconhece proteção autoral para um gerador cuja trilha de edição entre pessoa e agente está documentada, contrariando na prática a leitura de que "a IA escreveu, ninguém é autor". Geradores viram patrimônio jurídico e o mercado da e1.1.2.1 dispara.

## 7. Contra o proprio mapa

**Extrapolação linear.** O mapa parte de um conjunto pequeno de demos e artigos (img2threejs, Code2Video, CAD-Llama) para prever uma mudança de formato de ativo. A pesquisa de formas como programa é anterior aos LLMs e nunca saiu do nicho; o argumento "agora é diferente porque há LLMs" é plausível, mas é o argumento que toda onda anterior usou. Teste honesto: se em 2028 os repositórios de ativos mais usados ainda forem quase todos binários, a e1 falhou como disrupção e virou só uma técnica.

**Velocidade de adoção irreal.** Pipelines de efeitos visuais e de jogos são conservadores por razões econômicas (prazo, responsabilidade, retrabalho). O próprio recurso do Houdini 22 é uma prévia estreita no Labs [5]. Prever que o grafo de nós deixa de ser a interface principal até 2030 (e2.1) pode estar dois ou três anos adiantado; ferramentas de estúdio levam cerca de uma década para trocar de paradigma.

**Falha da disrupção.** O cenário de falha mais provável não é a IA não conseguir escrever geradores, e sim *a difusão e os splats ficarem editáveis*, com controle por região, por parâmetro e por estado (o tema 12 mostra isso acontecendo) [1]. Isso esvaziaria a vantagem de editabilidade do programa. Se o pixel ganhar controle fino e leveza ao mesmo tempo, "gerar geradores" volta a ser o que era: um ofício de nicho de artistas técnicos, agora com um copiloto.

**Viés pessoal do autor.** O mapa foi feito para uma disciplina de Ciência da Computação, por alguém com formação em programação e com a ajuda de um agente de código. Há um viés estrutural a favor de "código é melhor que dado": legibilidade, diff e verificação são valores de programador, não necessariamente de artista. Um designer de personagens ou um fotógrafo daria mais peso à fidelidade e à expressividade e menos à editabilidade. A lente Brasil também é otimista (e2.1.1.1) e se apoia em inferência, e não em dados de mercado.

## 8. O que a maquina errou

1. **Fontes citadas sem abrir a página.** Na primeira versão deste mapa, 26 URLs foram citadas a partir de trechos de resultados de busca, sem abrir cada página. A versão atualizada da skill exige que toda URL tenha sido aberta na sessão. Abri uma a uma: duas não responderam com conteúdo (o artigo de arXiv sobre escalonamento em tempo de teste para CAD e a página do FILE 2026) e saíram do texto, junto com as afirmações que só elas sustentavam (ver Seção 12).
2. **Enquadramento inflado do Houdini.** Na primeira formulação da D2, "agentes no Houdini" foi tratado como capacidade de produção. A reportagem da JPR mostrou que é uma prévia no SideFX Labs, restrita ao rigging em APEX Script [5]. O texto foi corrigido e os prazos e a confiança de e2.1 foram rebaixados.
3. **Fonte velha quase usada como sinal atual.** A busca por creative coding no Brasil trouxe o festival Multiverso como "o primeiro festival de arte generativa do país", mas a matéria é de 2018. Foi descartado como sinal de 2026.
4. **Artigos citados lendo só as referências.** Para MeshCoder e ShapeLib, a primeira versão usou apenas listas de referências vistas na busca. Nesta versão abri os resumos no arXiv [10][11] e ajustei as descrições ao que eles de fato dizem (por exemplo, o MeshCoder gera scripts Python para o Blender).
5. **Afirmação contraditória sobre o Infinigen.** Um texto no Medium dizia que o Infinigen combina regras com aprendizado de máquina; a CG Channel registra "só regras matemáticas, zero IA" [16]. A afirmação do Medium foi descartada.
6. **Número redondo sem base.** Um rascunho do Resumo dizia que ativos procedurais seriam "mil vezes mais leves". Não há medida que sustente esse fator; ficou "de megabytes para kilobytes em objetos manufaturados", como hipótese testável.
7. **Afirmação de desempenho não verificada.** A primeira versão dizia que a geração de vídeo explicativo por código "já tem taxas altas de sucesso em benchmarks". Nesta sessão só verifiquei os resumos, que não trazem esse número, e a frase virou "agentes já geram vídeos explicativos longos a partir de código" [20][21].
8. **Formato fora do padrão.** A primeira versão tinha frontmatter com YAML inválido (a linha `experimento` misturava aspas e texto, erro descoberto ao gerar o PDF), títulos com acentos diferentes dos literais exigidos e uma roda de três níveis. Todos foram refeitos no formato da skill atualizada e conferidos pelas checagens da Etapa 5.

## 9. Tres cenarios para 2031

**Provável.** Em 2031, objetos manufaturados, interfaces animadas, diagramas e material didático são entregues rotineiramente como geradores escritos por agentes e revisados por pessoas; o fotorrealismo orgânico continua com splats e difusão, e os dois mundos convivem em pipelines híbridos. Houdini, Blender e Unreal têm camadas agênticas maduras, e o grafo de nós virou algo que se *lê* para auditar mais do que algo que se monta à mão. A função de artista técnico se dividiu entre quem especifica e quem verifica geradores. Nos cursos de design e computação, inclusive no CIn, "ler e criticar um gerador" é exercício comum, mas a modelagem à mão não morreu: virou disciplina de base, como o desenho à mão. A questão autoral segue indefinida, e os estúdios documentam trilhas de edição por precaução.

**Desejável.** Em 2031, o gerador é o formato aberto da criatividade digital: um objeto, uma cena ou uma explicação vêm com a própria "receita" legível, verificável e remixável, e isso barateou radicalmente a produção para estúdios pequenos do Recife a Belém, que competem por ideias e não por orçamento de pipeline. Professores mantêm bibliotecas compartilhadas de geradores didáticos verificados, e cada estudante recebe a explicação da sua dúvida, inclusive em versões táteis e de alto contraste geradas pelo mesmo programa. A autoria foi resolvida de forma sensata: protege-se a contribuição humana documentada no gerador, e o código gerado circula com licenças claras.

**Indesejável.** Em 2031, "gerar geradores" virou fábrica de dívida procedural: estúdios acumulam milhares de geradores escritos por agentes que ninguém entende, e a manutenção depende inteiramente da camada agêntica proprietária de dois ou três fornecedores, que detêm o contexto curado de cada ferramenta. Qualquer produto fotografado vira gerador editável em minutos, e as marcas respondem com filtros e processos que atingem também o uso legítimo em ensino e arte. Depois de incidentes com código gráfico gerado em tempo de uso, os navegadores restringiram sua execução, e a mídia gerada sob medida ficou presa a plataformas fechadas. Redes de ensino sem curadoria recebem vídeo genérico, com erros sutis que ninguém verifica.

## 10. O experimento

**O que é.** "Bolo ou receita?", a versão rápida do Pixel vs. Programa: cerca de 30 minutos, só com um chat de IA gratuito e o navegador. A turma se divide em duplas. Metade é o **time Bolo**, que pede a uma IA que gera imagens "um sol sobre o mar, com raios, em estilo de pôster". A outra metade é o **time Receita**, que pede à IA um código em p5.js da mesma cena e cola no editor web gratuito do p5.js [27] (não é preciso saber programar). Em seguida, o professor anuncia três pedidos de mudança, um de cada vez, com 3 minutos para cada: (1) colocar 12 raios no sol; (2) virar noite, trocando o sol pela lua e mudando as cores; (3) fazer as ondas se mexerem.

**Pergunta sobre o futuro.** Em 2031, quando o critério é conseguir mudar o trabalho, e não só entregá-lo, a representação editável (a receita, o código) supera a representação densa (o bolo, a imagem)?

**Tecnologia emergente usada.** IA que escreve o gerador (código p5.js) a partir de linguagem natural, comparada à geração direta de imagem por IA. É a disrupção e1 ("o código como formato de ativo") na sua forma mais acessível.

**Atividade da turma.** A cada rodada, cada dupla anota quantos pedidos fez à IA, se a mudança deu certo e se alguma outra coisa estragou no caminho (por exemplo, o desenho mudou inteiro quando só se pediram mais raios). No fechamento, cada time mostra a primeira e a última versão, e a turma vota em qual time teve mais controle sobre o próprio trabalho.

**Resultado de mudança de ideia.** Se a imagem mudar demais a cada pedido e o código só mudar o que foi pedido, a e1 se fortalece e a confiança de e1.1 e e1.1.1 sobe. Se os dois times forem igualmente capazes de fazer as mudanças, a e1 perde força e o teste adversarial da Seção 7 ("a difusão fica editável") ganha peso. Se nenhum dos dois conseguir a rodada 3 (animar as ondas), o gargalo real da tendência está na animação, o que explicaria por que a SideFX começou justamente pelo rigging.

## 11. Fontes

1. [Temas de tendência — 2026.2 (CIN0055, CIn/UFPE)](https://tendencias-midia-interacao.vercel.app/materiais/temas-tendencias-2026-2) — sustenta: definição do tema 14, régua maduro/emergente, ferramentas trazidas pela turma, fronteiras com os temas vizinhos e o wildcard da ficha — confiabilidade: alta
2. [img2threejs (GitHub)](https://github.com/img2threejs/img2threejs) — sustenta: reconstrução de uma imagem em fábrica TypeScript de Three.js, pipeline de oito etapas com validação determinística, agentes suportados e economia de tokens — confiabilidade: alta
3. [img2threejs-showcase (GitHub)](https://github.com/img2threejs/img2threejs-showcase) — sustenta: galeria de objetos construídos só por código, sem malhas importadas, com contribuição por pull request — confiabilidade: alta
4. [At SIGGRAPH, NVIDIA Advances Graphics and Simulation With Agentic and Physical AI (NVIDIA Blog)](https://blogs.nvidia.com/blog/siggraph-news-2026/) — sustenta: conexões MCP em Adobe, Affinity, Blender, Boris FX, Foundry, Houdini 22 e Unreal — confiabilidade: media
5. [SideFX and Nvidia bring MCP-powered AI agents to Houdini 22's rigging workflow at Siggraph 2026 (Jon Peddie Research)](https://www.jonpeddie.com/news/sidefx-and-nvidia-bring-mcp-powered-ai-agents-to-houdini-22s-rigging-workflow-at-siggraph-2026/) — sustenta: o MCP do Houdini 22 é prévia no SideFX Labs, restrito ao rigging em APEX Script, com pacote curado de documentação — confiabilidade: alta
6. [Nvidia backs hybrid AI to reshape computer graphics (AEC Magazine)](https://aecmag.com/news/nvidia-backs-hybrid-ai-to-reshape-computer-graphics/) — sustenta: MCP como alternativa a uma teia de plugins e servidor MCP do Blender Lab como interface em linguagem natural — confiabilidade: media
7. [AI Agents Move Into Houdini, Unreal, and Adobe as NVIDIA Rallies Creative Apps Around MCP (VP Land)](https://www.vp-land.com/stories/ai-agents-move-into-houdini-unreal-and-adobe-as-nvidia-rallies-creative-apps-around-mcp) — sustenta: lista de sete fabricantes e tarefas de pipeline visadas por agentes — confiabilidade: media
8. [CAD-Llama: Leveraging Large Language Models for Computer-Aided Design Parametric 3D Model Generation (arXiv)](https://arxiv.org/abs/2505.04481) — sustenta: geração de CAD paramétrico como código estruturado por LLM — confiabilidade: alta
9. [Large Language Models for Computer-Aided Design: A Survey (arXiv)](https://arxiv.org/abs/2505.08137) — sustenta: mapeamento sistemático das aplicações de LLMs em CAD — confiabilidade: media
10. [ShapeLib: Designing a library of programmatic 3D shape abstractions with Large Language Models (arXiv)](https://arxiv.org/abs/2502.08884) — sustenta: LLMs descobrindo bibliotecas reutilizáveis de funções de modelagem procedural — confiabilidade: media
11. [MeshCoder: LLM-Powered Structured Mesh Code Generation from Point Clouds (arXiv)](https://arxiv.org/abs/2508.14879) — sustenta: conversão de nuvens de pontos em scripts Python executáveis no Blender — confiabilidade: media
12. [AI Co-Artist: A LLM-Powered Framework for Interactive GLSL Shader Animation Evolution (arXiv)](https://arxiv.org/abs/2512.08951) — sustenta: evolução de shaders por LLM e ganho de produção de iniciantes no estudo com usuários — confiabilidade: media
13. [ShadAR: LLM-driven shader generation to transform visual perception in Augmented Reality (arXiv)](https://arxiv.org/abs/2602.17481) — sustenta: shaders gerados por linguagem natural aplicados em tempo real em óculos de RA — confiabilidade: media
14. [shader-spec-eval (GitHub)](https://github.com/Husienvora/shader-spec-eval) — sustenta: avaliação de shaders gerados por propriedades mensuráveis, sem juiz-IA, declarada como protótipo — confiabilidade: baixa
15. [Infinigen (GitHub, Princeton VL)](https://github.com/princeton-vl/infinigen) — sustenta: geração procedural de mundos fotorrealistas, inclusive interiores — confiabilidade: alta
16. [Open-source tool Infinigen Indoors generates procedural 3D interiors (CG Channel)](https://www.cgchannel.com/2025/06/open-source-tool-infinigen-indoors-generates-procedural-3d-interiors/) — sustenta: Infinigen baseado só em regras matemáticas, sem IA — confiabilidade: alta
17. [ProcFunc (GitHub, Princeton VL)](https://github.com/princeton-vl/procfunc) — sustenta: abstrações funcionais para geração procedural 3D em Python, com transpilador de nós do Blender e rastreador — confiabilidade: media
18. [Machine Learning & AI (SideFX)](https://www.sidefx.com/products/houdini/pipeline-ai/machine-learning-ai/) — sustenta: posicionamento do Houdini em aprendizado de máquina e dados sintéticos — confiabilidade: alta
19. [Copyright Office Releases Part 2 of Artificial Intelligence Report (Library of Congress)](https://newsroom.loc.gov/news/copyright-office-releases-part-2-of-artificial-intelligence-report/s/f3959c36-d616-498d-b8f9-67641fd18bab) — sustenta: prompts sozinhos não conferem autoria; protege-se a contribuição expressiva humana — confiabilidade: alta
20. [TheoremExplainAgent: Towards Multimodal Explanations for LLM Theorem Understanding (arXiv)](https://arxiv.org/abs/2502.19400) — sustenta: agente que gera vídeos longos explicando teoremas com animações — confiabilidade: alta
21. [Code2Video: A Code-Centric Paradigm for Educational Video Generation (arXiv)](https://arxiv.org/abs/2510.01174) — sustenta: três agentes (planejador, codificador, crítico) convertendo temas de aula em código executável — confiabilidade: alta
22. [SGA: Plug&Play Geometric Verification for Educational Video Synthesis (arXiv)](https://arxiv.org/html/2607.18116v1) — sustenta: verificação geométrica determinística de código Manim gerado e ganho relativo de 16,1% em qualidade visual — confiabilidade: media
23. [Training and Agentic Inference Strategies for LLM-based Manim Animation Generation (arXiv)](https://arxiv.org/abs/2604.18364) — sustenta: correlação entre métricas de código e visuais enfraquece com estratégias agênticas na inferência — confiabilidade: media
24. [LLM2Manim: Pedagogy-Aware AI Generation of STEM Animations (arXiv)](https://arxiv.org/abs/2604.05266) — sustenta: pipeline com humano no circuito e foco pedagógico para animações geradas — confiabilidade: media
25. [Programação Criativa: Vamos desenhar com código? (DEV Community)](https://dev.to/he4rt/programacao-criativa-vamos-desenhar-com-codigo-4a1) — sustenta: p5.js como porta de entrada e comunidades brasileiras de programação criativa (Compoética, Telegram) — confiabilidade: baixa
26. [Show HN: MCP server for Blender that builds 3D scenes via natural language (Hacker News)](https://news.ycombinator.com/item?id=44622374) — sustenta: servidores MCP comunitários para Blender antes dos anúncios oficiais — confiabilidade: baixa
27. [p5.js Web Editor](https://editor.p5js.org/) — sustenta: editor web gratuito usado no experimento da Seção 10 — confiabilidade: alta

## 12. Anexo — o levantamento bruto

### 12.1 Entrevista de recorte (Etapa 1)

Pergunta: tema da análise. Resposta: "Gerar geradores: design procedural e creative coding com IA" (tema 14 da lista 2026.2), indicado pelo usuário por link para o site da disciplina.

Pergunta: horizonte temporal. Resposta: não especificado; adotado o padrão sugerido, 2031.

Pergunta: para quem é esta análise? Resposta: "Professor e alunos da matéria de tendências em mídia e interação."

Pergunta: recorte geográfico. Resposta: "Global, com lente Brasil."

Pergunta: premissas óbvias a descartar. Resposta: "IA vai substituir designers." (Opções oferecidas e não marcadas: "é só p5.js com autocomplete", "procedural sempre vence pixel", "prompt-to-shader é a disrupção".)

Pergunta: vetores tecnológicos obrigatórios. Resposta: "Não." (Opções oferecidas e não marcadas: síntese de programa e neurossimbólico; agentes via MCP em ferramentas de criação; geração em tempo de uso e WebGPU; proveniência e autoria de regras. Três delas entraram por mérito da evidência, não por imposição.)

Pedidos posteriores do usuário na mesma sessão: gerar PDF do documento; gerar uma apresentação em PDF com linguagem fácil; retirar da apresentação os slides de Fontes e de "Como o mapa foi feito"; trocar o experimento pela versão rápida "Bolo ou receita?"; regerar os arquivos com a versão atualizada da skill.

### 12.2 Ficha de origem (site da disciplina)

- Disrupção-raiz da ficha: produzir a regra em vez do artefato; a IA passa a escrever o gerador.
- Linha maduro/emergente da ficha: procedural em jogos, shaders e Processing/p5 são maduros; IA como autora do gerador é emergente.
- Ferramentas da turma: img2threejs, WaveFunctionCollapse, Fantasy-Map-Generator, noise-rs, Graphite, Pixel Composer, material-maker, nannou, css-doodle, glisp, curv, SHADERed, rust-gpu, manim, manim-web-mcp, triangula, msdfgen, Cavalry, pixelgen, satori, Remotion.
- Perguntas da ficha usadas como provocação: o designer vira quem especifica regras? 3D procedural contra splat na web, no jogo e no óculos? A obra vira o código? Direito autoral de regra?
- Wildcard da ficha (promovido a D3): motor de jogo que gera conteúdo como código quando o jogador chega.
- Fronteiras: tema 10 (captura, dado) e tema 12 (vídeo e imagem como mídia).
- Observação: a página de formato do documento no site da disciplina descreve a roda com três níveis (e1, e1.1, e1.1.1). Esta versão segue a skill atualizada, que pede quatro níveis (disrupção mais três ordens de efeito), e os contadores 3/6/12/18 do frontmatter continuam valendo nos dois formatos.

### 12.3 Log de buscas (primeira rodada)

1. `img2threejs procedural three.js from image github`: repositório oficial, galeria, fork hoainho, organização. Usados repositório e galeria.
2. `Blender MCP server LLM agent 3D modeling`: vários servidores MCP comunitários (pranav-deshmukh, poly-mcp, CSM.ai, blender-llm-mcp), FlowHunt, Show HN. Usado só o Show HN.
3. `LLM program synthesis 3D shapes code arXiv 2025 CAD code generation`: MeshCoder, CADEvolve, levantamento LLM-CAD, ShapeCraft, escalonamento em tempo de teste para CAD, ShapeLib, CAD com solver (CGF 2025), CAD-Llama. Usados MeshCoder, levantamento, ShapeLib, CAD-Llama.
4. `LLM shader generation GLSL benchmark arXiv`: AI Co-Artist, ShadAR, shader-spec-eval, microeval da Artificial Analysis, benchmarks de kernels de GPU (fora do escopo). Usados os três primeiros.
5. `Houdini SideFX AI machine learning 2026 announcement`: JPR sobre Houdini 22, Equinox 2026 (ONNX), parceria com Endava (dados sintéticos), página de ML da SideFX. Usados JPR e página de ML.
6. `Infinigen procedural generation Princeton open source`: repositório, CG Channel (Indoors), ProcFunc, Medium (descartado), notícia de Princeton. Usados repositório, CG Channel e ProcFunc.
7. `SIGGRAPH 2026 Nvidia AI agents inside DCC applications Blender Unreal MCP`: blog da NVIDIA, página de eventos da NVIDIA, JPR, AEC Magazine, daily.dev, GamesBeat, VP Land. Usados blog da NVIDIA, AEC e VP Land.
8. `US Copyright Office report AI generated works copyrightability part 2 prompts`: Library of Congress, Reed Smith, Authors Guild, Mintz, Copyright Alliance, Skadden. Usado o comunicado oficial.
9. `creative coding Brasil festival arte generativa 2026`: FILE 2026, Multiverso (2018, descartado), Rio2C 2026, Festival Imagina, DEV Community, CC Fest (EUA). Usado DEV; FILE não pôde ser verificado (ver 12.6).
10. `LLM agent generates Manim code educational video arXiv TheoremExplainAgent Code2Video`: ManimTrainer/ManimAgent, SGA, TheoremExplainAgent, Code2Video, LLM2Manim, OmniManim. Usados todos exceto OmniManim.

### 12.4 Verificação de fontes (Etapa 3)

Todas as 27 fontes da Seção 11 foram abertas por WebFetch nesta sessão e responderam com conteúdo. Para os artigos do arXiv, foi aberta a página de resumo (abs); no caso do SGA, a página de resumo veio vazia e foi usada a versão HTML (v1), que respondeu com título, resumo e resultados. O editor do p5.js foi aberto para confirmar título e finalidade antes de entrar no experimento.

### 12.5 Candidatas a disrupção descartadas (rodada 1)

- **"Prompt-to-shader"**: recusada porque automatiza uma tarefa existente (escrever GLSL); acelera sem romper. Reaproveitada como sinal dentro da e3.
- **"Texturas procedurais por difusão"**: recusada; pertence ao tema 12 e é geração de pixel, não de regra.
- **"Gaussian splatting com procedural"**: recusada; é tema 10 e aparece só como contraponto (dado contra programa).
- **"IA vai substituir designers"**: descartada na entrevista.
- **"Neurossimbólico como paradigma geral de IA"**: recusada por amplitude excessiva; o recorte útil (síntese de programa gráfico verificada) foi absorvido na e1.
- **"Mercado de geradores / NFT generativo"**: recusada; arte generativa em blockchain é de 2021, madura ou em declínio. O efeito de mercado reaparece só em e1.1.2.1.

### 12.6 Efeitos cortados e fontes que não puderam ser verificadas

Efeitos cortados na poda:
- "Fim da profissão de modelador 3D": cortado por colidir com a premissa descartada e por falta de sinal; substituído por e1.2.2.1 (mudança de currículo) e e1.1.1.1 (nova função).
- "Geradores como moeda em jogos online": cortado por especulação sem sinal.
- "Óculos de RA carregando mundos inteiros como código": cortado por sobreposição com o tema 15; fica implícito em e3.1.
- "Impressão 3D direta de geradores CAD em casa": cortado por se afastar de mídia e interação; resíduo em e3.2.2 (versão tátil de explicações).
- "Agentes treinando outros agentes em mundos procedurais (Infinigen como currículo)": cortado porque pertence ao tema 9.
- "Regulação obrigatória de marca d'água em código gerado": cortado por baixa plausibilidade técnica até 2031.

Fontes que não puderam ser verificadas (tentativas registradas, não citadas):
- Artigo "Test-Time Scaling for CAD Generation via Verifier-Free Consensus Selection" (arXiv 2608.09706): a página de resumo veio sem texto legível. Saiu da Seção 3 a afirmação de que a geração de CAD por programa já tem trabalhos em ICML e ICLR 2026.
- Página "FILE 2026 — Inter-Criatividade" (file.org.br): duas tentativas falharam por tempo esgotado ao buscar o robots.txt do site. Saíram as menções ao FILE 2026 nas Seções 3 e 6; a lente Brasil passou a se apoiar na fonte [25].
- Página do festival Multiverso: não verificada porque o sinal já tinha sido descartado por ser de 2018.
- Texto do Medium sobre o Infinigen: não verificado porque a afirmação foi descartada em favor de [16].

### 12.7 Log das iterações

- **v0:** e1 = "IA escreve shaders"; e2 = "Houdini com IA"; e3 = "mundos infinitos". Rejeitada: e1 incremental, e2 com enquadramento exagerado (ver Seção 8, item 2), e3 vaga.
- **v1:** e1 reformulada como "código como formato de ativo" depois da leitura do img2threejs e da literatura de CAD; e2 reformulada como "ferramenta de criação operada por agente via protocolo" depois da cobertura do SIGGRAPH 2026; e3 reformulada como "gerador escrito em tempo de uso", incluindo mídia explicativa para não depender só de jogos.
- **v2:** distribuição 2/4/6 efeitos por disrupção; confianças recalibradas depois do teste adversarial; lente Brasil explícita em três nós; "mil vezes mais leve" trocado por uma ordem de grandeza plausível.
- **v2.1:** experimento trocado de "Pixel vs. Programa" (cinco rodadas, reconstrução 3D) para a versão rápida "Bolo ou receita?", a pedido do usuário.
- **v3 (esta versão, skill atualizada):** todas as fontes reabertas por WebFetch (27 verificadas, 2 removidas); frontmatter com todos os textos entre aspas; títulos das 12 seções nos literais exigidos; roda refeita com quatro níveis e IDs e1 a e3.2.2.1; rótulos das Seções 4 e 10 ajustados aos exigidos ("O que falta para se concretizar", "Resultado de mudança de ideia"); URLs só na Seção 11.

### 12.8 Autochecagem (Etapa 5)

- **Checagem 1 (frontmatter):** passou na primeira rodada desta versão: YAML válido, todos os 18 campos presentes, `fontes: 27` igual ao número de itens da Seção 11. Na versão anterior do arquivo ela teria falhado, porque a linha `experimento` não era YAML válido (erro corrigido nesta versão).
- **Checagem 2 (títulos de nível 2):** passou: exatamente 12 linhas começando com `## `, com os textos literais. Na versão anterior teria falhado por causa dos acentos nos títulos das Seções 3, 4, 7, 8 e 9.
- **Checagem 3 (roda):** passou: YAML válido, contagem 3/6/12/18, 39 IDs únicos, todos com id, titulo, sinal, prazo e confianca.
- **Checagem extra (URLs só na Seção 11):** passou: nenhuma URL fora da Seção 11. A URL da fonte [1] foi trocada pela URL final após redirecionamento (sem a barra final).
- **Checagem 4 (links):** o `curl` retornou 000 para 22 URLs e 403 para as 5 do GitHub, porque o proxy do ambiente recusa conexões para esses domínios por política de rede, e não porque os links estejam quebrados. Conforme a skill, a checagem foi feita por WebFetch: as 27 URLs foram abertas nesta sessão e responderam com conteúdo (ver 12.4).
