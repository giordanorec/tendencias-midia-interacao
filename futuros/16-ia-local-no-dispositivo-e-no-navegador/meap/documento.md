---
tema: "IA local: no dispositivo e no navegador"
slug: ia-local-no-dispositivo-e-no-navegador
autor_login: meap
zona_de_interesse: "Criação e plataforma"
data: 2026-09-11
horizonte: 2031
publico: "quem projeta mídia e interação"
recorte_geografico: "global, com nota sobre o Brasil"
disrupcoes_raiz: 3
efeitos_ordem_1: 8
efeitos_ordem_2: 14
efeitos_ordem_3: 11
tecnologias_citadas: [BitNet b1.58, bitnet.cpp, quantização ternária, Apple Foundation Models, Gemini Nano v3, Android AICore, Chrome Prompt API, WebGPU, WebLLM, llama.cpp, Ollama, NPU, Hailo-10H, GGUF, LiteRT]
fontes: 10
confianca: media
experimento: "Sonda de piso de capacidade: uma página web que mede, nos aparelhos reais da turma, se há WebGPU, se há Prompt API, quanta VRAM e quanto disco livre, e então carrega um modelo pequeno e mede tokens/s da 1ª à 20ª iteração para levantar a curva de throttling. Saída: a matriz de compatibilidade da própria sala."
skill_usada: futurization-meap
publico_ok: false
---

# IA local: no dispositivo e no navegador

## 1. Resumo

A inferência está saindo da nuvem e virando função do sistema operacional e do navegador: Apple expõe um modelo de ~3 bilhões de parâmetros a qualquer app, o Chrome expõe o Gemini Nano a qualquer página, o Android expõe o AICore a qualquer desenvolvedor. Não há chave de API, não há custo por chamada, não há dado saindo do aparelho. Até aqui, a narrativa corrente — e ela está certa sobre o mecanismo.

O que a evidência desmente é a conclusão que costuma vir junto. IA local não está democratizando o acesso: está subindo o piso. O Gemini Intelligence exige 12 GB de RAM e SoC de topo, e exclui o Pixel 9; o Prompt API do Chrome exige 22 GB de disco livre, mais de 4 GB de VRAM, e não roda em celular nenhum. No mesmo ano, a crise global de memória empurra o aparelho de entrada brasileiro para baixo. E o teto do agente local não é compute: é térmico — um iPhone 16 Pro perde quase metade do throughput em duas iterações, e um Galaxy S24 Ultra tem a inferência encerrada pelo próprio sistema.

O mapa que se segue, portanto, não é sobre inteligência que fica grátis. É sobre inteligência que deixa de ser cobrada por chamada e passa a ser cobrada por aparelho, que deixa de ser escolhida pelo autor do produto e passa a ser escolhida pelo fabricante, e que deixa de ser conversa longa e vira rajada curta. Para quem projeta mídia e interação, o efeito prático é que o modelo deixa de ser serviço contratado e vira peso embarcado — com orçamento de bytes, matriz de compatibilidade e um estado "baixando" que alguém vai ter que desenhar.

## 2. O tema

**IA local** é a execução do modelo de linguagem — e, cada vez mais, de voz e visão — no aparelho do usuário final: celular, laptop comum, aba do navegador. Não é o mesmo que rodar modelo pequeno num servidor próprio, nem que chamar API de nuvem barata. O objeto aqui é a **inferência no dispositivo de quem usa**.

O recorte é deliberadamente estreito porque os vizinhos confundem. Dado e conta que não passam por terceiros (local-first, E2E, passkeys) é outro tema: lá o que fica local é o *dado*; aqui é o *modelo*. Voz local é outro tema. Navegador como plataforma 3D é outro tema. O que interessa neste mapa é o momento em que os pesos do modelo passam a residir no aparelho e a computação acontece ali.

**Por que merece mapa de futuro.** Porque muda três coisas ao mesmo tempo, e nas três a mudança é de natureza, não de grau. Muda a economia: o custo deixa de ser marginal por chamada e vira fixo por aparelho. Muda a privacidade: não há promessa contratual de não-retenção porque não há transmissão. E muda a dependência: ninguém desliga, ninguém muda o preço, ninguém deprecia o endpoint — mas, em troca, ninguém corrige e ninguém responde. Para quem projeta mídia e interação, é a primeira vez desde a chegada do LLM que a decisão relevante deixa de ser "qual modelo eu chamo" e passa a ser "qual capacidade eu embarco, para que fração do meu público, e o que acontece com o resto".

## 3. Onde isso está hoje

**O modelo virou API de plataforma — de verdade, e já em produção.**

A Apple documenta o modelo no dispositivo como tendo aproximadamente 3 bilhões de parâmetros, **2 bits por peso** obtidos por Quantization-Aware Training, tabela de embeddings em 4 bits, cache KV em 8 bits e janela de até **65 mil tokens**. A própria Apple declara o limite: o modelo "não foi projetado para ser um chatbot de conhecimento geral do mundo" — ele serve a sumarização, extração de entidades, refinamento de texto, diálogo curto e geração criativa curta. O framework oferece geração guiada por macros Swift e chamada de ferramenta.

No navegador, o **Prompt API do Chrome** está em estável (Chrome 138+ na web), com Summarizer, Translator, Language Detector, Writer e Rewriter em cima do mesmo Gemini Nano. E aqui aparece o número que quase nunca é citado junto: o requisito é **22 GB livres** no volume do perfil, **mais de 4 GB de VRAM**, ou 16 GB de RAM com 4+ núcleos — e a documentação diz textualmente que Chrome no Android, no iOS e no ChromeOS fora de Chromebook Plus **não é suportado**.

No Android, o Google detalhou em maio de 2026 os requisitos do Gemini Intelligence: **12 GB de RAM ou mais**, SoC de topo, e **Gemini Nano v3 ou superior**, além de compromisso de cinco atualizações de SO e seis anos de correções. A lista de aparelhos elegíveis é curta — Pixel 10, Galaxy S26, OnePlus 15, alguns modelos de Oppo, realme, Honor e Motorola. O Pixel 9, carro-chefe de 2025, **não qualifica**, porque saiu com Nano v2.

**A base técnica do "roda em qualquer coisa" existe, mas ainda é promessa parcial.**

O `bitnet.cpp`, framework oficial de inferência de LLMs de 1 bit da Microsoft, está na versão 1.0 e ativo — as entradas datadas mais recentes no repositório são de **julho de 2026**. Os ganhos declarados são reais e grandes: **2,37× a 6,17×** de aceleração em CPUs x86 e **1,37× a 5,07×** em ARM, com redução de energia de **71,9% a 82,2%** em x86 e **55,4% a 70,0%** em ARM. O modelo nativo de referência é o BitNet b1.58 2B4T, com 2,4 bilhões de parâmetros. Há kernel CUDA oficial; suporte a **NPU está marcado como "coming next"** — ou seja, ainda não existe.

**O navegador ganhou o substrato gráfico, mas não em todo lugar.**

WebGPU deixou de ser experimento: Chrome 113+ em macOS, Windows e ChromeOS; Android 121+; Safari 26 em macOS, iOS, iPadOS e visionOS; Firefox 141 no Windows e 145/147 no macOS. Os buracos são específicos e importam: **Firefox no Linux e no Android segue em Nightly ou atrás de flag**, e Windows ARM64 no Chrome também. Em cima disso, o WebLLM roda modelos inteiramente no navegador via WebGPU, com API compatível com a da OpenAI, cobrindo famílias Llama, Phi, Gemma, Mistral e Qwen.

**E o ecossistema local, do lado de quem desenvolve, é grande.** O repositório do Ollama tem **180,7 mil estrelas** no GitHub e instalação para macOS, Windows, Linux e Docker.

**Dois contrapontos que pertencem ao presente, não ao futuro.** Primeiro: a nuvem ficou barata. O preço por milhão de tokens caiu por volta de duas a três ordens de grandeza em três anos. Segundo: o teto do dispositivo é físico. Um estudo de 2026 mediu Qwen 2.5 1.5B em 4 bits em quatro plataformas e concluiu que **o gerenciamento térmico, não a capacidade de compute, domina as plataformas móveis** — o iPhone 16 Pro "perde quase metade do throughput em duas iterações" e o Galaxy S24 Ultra sofre "um piso de frequência de GPU imposto pelo SO que encerra a inferência por completo". Para comparação no mesmo estudo: um laptop com RTX 4050 sustenta 131,7 tokens/s a 34,1 W, e uma NPU Hailo-10H sustenta 6,9 tokens/s com menos de 2 W.

## 4. As disrupções-raiz

### 4.1. A inferência vira função do sistema operacional e do navegador

**O que rompe.** Rompe a cadeia de valor da chave de API. Durante três anos, "ter IA no produto" significou ter uma conta num fornecedor, uma chave, um backend que a guardasse, um medidor de consumo e uma fatura. Quando o modelo é exposto pelo SO ou pelo navegador, essa cadeia inteira some do meio do caminho: não há conta, não há chave, não há backend, não há medidor. E some junto a camada que vivia de embrulhar a chamada.

**Por que agora.** Porque os três donos de plataforma expuseram o modelo como API pública no mesmo intervalo: Apple pelo Foundation Models, Google pelo AICore no Android, Google de novo pelo Prompt API no Chrome estável. Não é anúncio de palco: é documentação de desenvolvedor com requisitos publicados.

**O que ainda falta.** Falta o modelo local atravessar a fronteira do genérico. A própria Apple declara que o modelo não serve a conhecimento geral. Enquanto a capacidade local for "resumir, extrair, reescrever, classificar", a chave de API continua necessária para tudo que é difícil — e o produto fica híbrido, não local.

### 4.2. O piso de hardware passa a decidir quem tem inteligência — e o piso subiu

**O que rompe.** Rompe a suposição que sustenta o ofício de quem projeta para a web e para mobile há vinte anos: a de que a capacidade é de software e, portanto, distribuível. Se a mesma página tem inteligência num aparelho e não tem em outro, a compatibilidade deixa de ser sobre navegador e passa a ser sobre classe de hardware — e, pior, sobre qual versão do modelo o fabricante embutiu no driver.

**Por que agora.** Porque os números do piso saíram do abstrato: 12 GB de RAM e Nano v3 no Android, com o carro-chefe do ano anterior excluído; 22 GB de disco e mais de 4 GB de VRAM no Chrome, com celular inteiramente fora. São requisitos publicados, não estimativas.

**O que ainda falta.** Falta saber se o piso desce. Ele desce se a linhagem ternária entregar (§4.3) ou se os fabricantes decidirem que IA local é diferencial de gama média. Sobe, ou pelo menos não desce, se a memória continuar cara — e em fevereiro de 2026 o diretor da Samsung Brasil afirmou publicamente que o aumento de custo "poderá ser mais perceptível nos modelos mais baratos, cujo público também é mais sensível a variações".

### 4.3. O treino nativo ternário desloca a economia de memória

**O que rompe.** Rompe a equação que hoje amarra qualidade a banda de memória e a hardware caro. Quantizar depois do treino é prática madura desde 2023 e não rompe nada. **Treinar nativamente em ternário** — pesos em −1, 0, +1 — é outra coisa: muda a operação dominante de multiplicação para adição, e é daí que vêm os 55% a 82% de energia a menos em CPU comum, sem GPU e sem NPU.

**Por que agora.** Porque saiu do artigo e virou framework mantido: `bitnet.cpp` em 1.0, com modelo nativo de 2,4 bilhões de parâmetros, kernels de CPU otimizados e atualizações datadas de julho de 2026.

**O que ainda falta.** Falta escala e falta NPU. Não existe modelo nativamente ternário em tamanho de fronteira, e o suporte a NPU no próprio `bitnet.cpp` está declarado como "coming next" — isto é, o caminho que tornaria o modelo local barato o bastante para ficar sempre ligado ainda não foi percorrido.

*(Uma quarta candidata foi levantada e descartada: "quantização agressiva / GGUF". Pela régua da Fase 2, é madura — padrão de mercado desde 2023, com dezenas de milhares de modelos publicados no formato. Entra como contexto na §3, não como raiz.)*

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A inferência vira função do sistema operacional e do navegador
    efeitos:
      - id: e1
        ordem: 1
        efeito: Chamar um modelo vira uma API de plataforma como câmera ou geolocalização — sem conta, sem chave, sem backend.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A camada de produto que apenas embrulhava uma chamada de nuvem perde razão de existir, e o valor migra para dado proprietário, distribuição e integração.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O portfólio de quem projeta mídia deixa de exibir "integrei um LLM" e passa a exibir o que só existe com modelo local — latência sem rede, funcionamento offline, dado que não pode sair do aparelho.
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A telemetria por chamada desaparece e o autor do produto deixa de ver o que o usuário pergunta.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: A avaliação de qualidade migra de log de produção para painel voluntário e teste sintético, e a régua de "o modelo está bom?" piora antes de melhorar.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O fabricante do SO e do navegador passa a escolher qual modelo roda, e em que versão, no aparelho de todo mundo.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Compatibilidade deixa de ser "qual navegador" e passa a ser "qual versão do modelo" — o requisito de Gemini Nano v3 já exclui carro-chefe de 2025.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Teste de capacidade em tempo de execução vira prática padrão de projeto, e a interface passa a ser desenhada desde o início em dois modos — com modelo e sem.
                sinal: fraco
                prazo: 2030
                confianca: media
          - id: e2.2
            ordem: 2
            efeito: Recusa e filtragem viram política de plataforma embutida no aparelho, sem termos de uso por trás e sem auditoria possível de fora.
            sinal: medio
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: A disputa regulatória se desloca de "o que a nuvem armazena" para "o que o aparelho se recusa a processar" — objeto que nenhuma lei de proteção de dados vigente descreve bem.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: O modelo embarcado vira artefato distribuído sem canal de recall — corrigir passa a ser reempacotar e esperar o usuário atualizar.
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Convive no mercado uma frota fragmentada de versões de modelo, e a mesma interface responde diferente em aparelhos diferentes sem que o autor controle qual.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: 'O comportamento do modelo entra no contrato de suporte do produto como hoje entra a versão mínima de SO, com matriz de compatibilidade publicada.'
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: O modelo no aparelho vira superfície de ataque extraível — pesos que podem ser lidos e manipulados por quem tem posse física do dispositivo.
            sinal: medio
            prazo: 2028
            confianca: media

  - disrupcao: O piso de hardware passa a decidir quem tem inteligência
    efeitos:
      - id: e4
        ordem: 1
        efeito: IA no dispositivo estreia como recurso de aparelho caro, não como recurso universal — 12 GB de RAM e SoC de topo no Android, 22 GB livres e mais de 4 GB de VRAM no Chrome desktop.
        sinal: forte
        prazo: 2026
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: A promessa de "grátis depois de baixado" se cumpre apenas para quem já pagou caro no aparelho — o custo sai da fatura de API e entra no preço do hardware.
            sinal: medio
            prazo: 2028
            confianca: alta
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A desigualdade de acesso à IA deixa de ser medida por assinatura e passa a ser medida por parque de aparelhos — indicador que nenhuma política pública brasileira coleta hoje.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: No Brasil, a crise de memória encarece justamente o aparelho de entrada no mesmo ano em que o piso exigido pelo modelo local sobe.
            sinal: medio
            prazo: 2027
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Produto brasileiro de mídia que dependa de modelo local nasce excludente por padrão, e o padrão de projeto que vinga aqui é o híbrido com degradação declarada, não o local puro.
                sinal: fraco
                prazo: 2030
                confianca: media
      - id: e5
        ordem: 1
        efeito: A web deixa de ser um piso comum — a mesma página tem ou não tem inteligência conforme a máquina que a abre.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Progressive enhancement volta ao centro do ofício de interface, agora com um recurso que custa gigabytes e minutos de download, não kilobytes.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: O download do modelo vira objeto de projeto de interação, com consentimento, medidor de progresso, custo de dado declarado e um estado "baixando" que precisa ser desenhado como tela de primeira classe.
                sinal: fraco
                prazo: 2029
                confianca: media
      - id: e6
        ordem: 1
        efeito: O teto real do agente local é térmico e de bateria, não de compute — o throughput despenca em poucas iterações e o sistema operacional chega a encerrar a inferência.
        sinal: forte
        prazo: 2026
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Agente local de execução contínua não fecha a conta em celular a bateria; o que fecha é a rajada curta — resumir, extrair, classificar, reescrever.
            sinal: medio
            prazo: 2028
            confianca: alta
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A gramática de interação do modelo local converge para o gesto curto sobre conteúdo selecionado, e não para a conversa longa que a nuvem ensinou entre 2023 e 2025.
                sinal: fraco
                prazo: 2030
                confianca: media
          - id: e6.2
            ordem: 2
            efeito: O computador pessoal ligado vira o lugar do agente contínuo, e o celular vira o controle remoto dele.
            sinal: medio
            prazo: 2029
            confianca: baixa

  - disrupcao: O treino nativo ternário desloca a economia de memória
    efeitos:
      - id: e7
        ordem: 1
        efeito: O modelo deixa de ser caro por banda de memória — pesos ternários cortam de 55% a 82% da energia e aceleram de 1,37× a 6,17× em CPU comum.
        sinal: forte
        prazo: 2027
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Inferência útil volta a caber em CPU sem GPU e sem NPU, e o parque de aparelhos considerados velhos reentra no jogo pelo caminho oposto ao do piso de hardware.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: O piso de 12 GB e SoC de topo passa a parecer política comercial e não limite físico, e vira objeto de disputa pública e de pressão regulatória.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: Kernels ternários em NPU — hoje declarados como "coming next" — tornam o modelo local barato em energia o bastante para ficar sempre ligado.
            sinal: medio
            prazo: 2029
            confianca: baixa
      - id: e8
        ordem: 1
        efeito: A escolha de modelo deixa de ser "o maior que couber" e passa a ser "o menor que resolve", com especialização vencendo escala em tarefa estreita.
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Produto de mídia passa a embarcar vários modelos pequenos e específicos em vez de um generalista — um para voz, um para visão, um para reescrita.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: O ofício de quem projeta mídia incorpora uma decisão que hoje não existe — qual capacidade merece virar peso embarcado no produto, com orçamento de bytes, como já se decide fonte e imagem.
                sinal: fraco
                prazo: 2031
                confianca: media
```

**O que o YAML não diz.**

A roda tem uma tensão interna que a árvore esconde, e ela é o achado principal deste mapa: **a disrupção 3 é o antídoto da disrupção 2.** O piso de hardware sobe (12 GB, SoC de topo, 22 GB de disco) exatamente enquanto a linhagem ternária promete derrubá-lo, devolvendo inferência a CPU comum. As duas correm ao mesmo tempo e em sentidos opostos, e qual vence define qual dos cenários da §9 acontece. Nada na roda resolve isso — é uma corrida, não uma dedução.

Segunda coisa que o YAML não carrega: **os prazos de D2 são passado e presente, não futuro.** Os efeitos e4 e e6 estão datados de 2026 porque já são mensuráveis hoje, em documentação de fabricante e em artigo revisado. Eles estão na roda não como previsão, mas como a fundação de pedra sobre a qual o resto se apoia — e é por isso que a confiança neles é alta enquanto a dos ramos de D3 é média e baixa.

Terceira: **e6.1.1 é o efeito que mais interessa a quem projeta interação, e é o de confiança mais frágil.** A afirmação de que a interação local converge para o gesto curto, e não para a conversa, decorre do limite térmico — mas nada impede que a indústria insista na conversa longa e simplesmente aceite a bateria acabando. O efeito é uma previsão de que o design vai seguir a física; a história do design de interfaces oferece precedentes nos dois sentidos.

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — o computador pessoal como servidor de IA pessoal.** A prática de controlar o agente da própria máquina pelo celular, com criptografia de ponta a ponta, resolve a contradição entre e6 (o celular não aguenta) e o desejo de agente contínuo. Se pegar, a topologia doméstica muda: a casa volta a ter um computador ligado, como teve nos anos 1990, e o celular vira terminal. É um sinal isolado, mas explica um problema real que a nuvem hoje resolve por padrão.

**Sinal fraco 2 — o modelo como peso de marca.** Se produtos passam a embarcar modelos próprios e pequenos (e8.1), o modelo embarcado começa a funcionar como fonte tipográfica: um ativo de identidade, licenciado, versionado, com peso em bytes e com uma "voz" reconhecível. Ninguém está tratando modelo assim hoje — mas a decisão de embarcar já é estética, não só técnica.

**Sinal fraco 3 — o piso como objeto político.** O requisito de Gemini Nano v3 ao nível de driver significa que a elegibilidade do aparelho é negociada entre a dona do SO e a fabricante do chip, sem participação de quem compra nem de quem desenvolve. É o tipo de arranjo que costuma atrair atenção regulatória depois, não antes.

**Wildcard 1 — um modelo ternário de qualidade de fronteira num aparelho de entrada.** Se a linhagem BitNet escalar e ganhar kernel de NPU, o mapa inteiro inverte: D2 evapora, o piso desce, e a questão deixa de ser quem tem acesso e passa a ser quem responde pelo que o modelo faz. Probabilidade baixa no horizonte, impacto total.

**Wildcard 2 — um incidente de extração de modelo em larga escala.** Pesos residentes no aparelho podem ser extraídos e manipulados; já foi demonstrado em um serviço de sistema Android. Um caso público em que o modelo local de uma plataforma grande seja adulterado em campo — e não haja como recolher — encerraria a fase ingênua de e3 de uma vez.

**Wildcard 3 — a nuvem ficar barata demais para valer a pena.** Já é o contrapeso mais forte contra todo este mapa, e não é hipótese: os preços por token caíram ordens de grandeza em três anos. Se continuarem caindo, o argumento econômico do local morre, e sobra só privacidade e disponibilidade offline — que são razões boas, porém de nicho muito menor.

## 7. Contra o próprio mapa

**Erro provável 1 — supervalorizar o limite térmico.** Os números de throttling vêm de um único estudo, com um único modelo (Qwen 2.5 1.5B em 4 bits) e quatro aparelhos. É evidência boa e revisada, mas é uma medida, não uma lei. Se os fabricantes projetarem NPUs que sustentem carga contínua, e6 inteiro perde força — e e6 sustenta três efeitos.

**Erro provável 2 — tratar o piso de hoje como piso de 2031.** Requisitos de estreia costumam cair. O de Apple Intelligence é 8 GB; o do Gemini Intelligence é 12 GB. Projetar que 12 GB continue sendo barreira em 2031 pode ser exatamente o erro de extrapolação linear que este método existe para pegar — e é possível que eu tenha errado nesse sentido justamente por ter encontrado uma evidência contra-intuitiva e gostado dela demais.

**Erro provável 3 — viés do enunciado, não do usuário.** O tema, como me foi entregue, afirma que a IA local "muda a economia (grátis depois de baixado), a privacidade (nada sai) e a dependência (ninguém pode desligar)". As três afirmações são sedutoras e duas delas não sobreviveram à verificação: não é grátis (o custo migrou para o hardware), e a dependência não sumiu — mudou de fornecedor de API para fabricante de aparelho, que é um credor pior, porque não tem termos de uso. Construir o mapa *contra* o enunciado é um viés tão real quanto construí-lo a favor; registro que o fiz conscientemente.

**Erro provável 4 — o Brasil aparece pouco e mal.** A nota brasileira se apoia em uma declaração de executivo e um preço de aparelho. Não encontrei série de dados sobre distribuição de RAM no parque brasileiro, e por isso e4.2 é o efeito mais fraco de toda a roda que ainda assim ficou. Deveria ser medido, não afirmado — e é exatamente isso que o experimento da §10 propõe.

**Erro provável 5 — três ordens podem ser ambiciosas demais aqui.** Vários efeitos de 3ª ordem descrevem mudança de prática profissional em cinco anos. O ofício de interface mudou nesse ritmo em alguns momentos (mobile-first, responsivo) e não mudou em outros. A confiança "baixa" atribuída a eles é honesta, não retórica.

## 8. O que a máquina errou

**Erro 1 — versão de estabilidade inflada por fonte secundária.** Resultados de busca afirmavam que o Prompt API "se tornou estável no Chrome 148 para sites". A documentação oficial diz outra coisa: estável a partir do Chrome 138 na web, com o Chrome 148 introduzindo *parâmetros de amostragem* via origin trial. Um blog transformou um detalhe de parâmetro em marco de lançamento. Corrigido contra `developer.chrome.com`.

**Erro 2 — números redondos de adoção sem fonte primária.** Um post de blog forneceu "52 milhões de downloads mensais", "8,9 milhões de desenvolvedores" e "US$ 88 milhões de aporte" para o Ollama. São números redondos, plausíveis e sem origem verificável — o padrão clássico de alucinação estatística. **Nenhum deles entrou no documento.** Ficou apenas o que abri e li na própria página do repositório: 180,7 mil estrelas.

**Erro 3 — a evidência brasileira não confirmou o que a busca prometia.** Os resultados sugeriam que "a participação de aparelhos com 12 GB de RAM pode cair até 40%" e que haveria retorno generalizado a 4–6 GB. Ao abrir o artigo, o que existe é a declaração do diretor da Samsung Brasil de que o aumento será mais perceptível nos modelos mais baratos, mais o dado de que a Samsung tem 50% das vendas no país e que o Galaxy A07 5G tem 4 GB de RAM. **O número de 40% foi descartado** e e4.2 foi reescrito para afirmar apenas o que a fonte sustenta.

**Erro 4 — confusão entre "1 bit" e 1 bit.** Quase tratei BitNet como pesos de um bit literal e Apple como "quantização agressiva" equivalente. São coisas distintas: BitNet b1.58 é **ternário** (−1, 0, +1), cerca de 1,58 bit, e é *treinado* assim; o modelo da Apple tem **2 bits por peso** via Quantization-Aware Training. A cobertura popular funde os dois sob "modelo de 1 bit", e a diferença importa — uma muda a operação aritmética dominante, a outra comprime pesos de um treino convencional.

**Erro 5 — quase inventei uma conclusão confortável.** A primeira derivação da roda produziu "o modelo de assinatura de IA colapsa até 2030" como efeito de 1ª ordem. Aplicado o teste de causa solta: o preço da nuvem já caiu ordens de grandeza sem que o mercado de assinatura encolhesse — logo o efeito não deriva desta raiz, se é que deriva de alguma. Descartado.

**Falha de busca registrada.** Procurei a participação de Copilot+ PCs no total de embarques de PC em 2026 e **não encontrei fonte primária** — só requisitos de 40 TOPS. Por isso não há nenhum número sobre NPU em PC neste mapa, embora ele fosse útil para e7.2.

## 9. Três cenários para 2031

### 9.1. Provável

A IA local venceu na tarefa curta e perdeu na longa. Em 2031, praticamente todo aparelho vendido acima da faixa média executava resumo, tradução, extração e reescrita sem tocar a rede — e quase ninguém chamava isso de IA, do mesmo modo como ninguém chamava de IA o corretor ortográfico. A conversa longa, o raciocínio difícil e o agente que trabalha sozinho por meia hora continuaram na nuvem, porque a bateria nunca deu conta e porque o preço do token caiu o bastante para que ninguém insistisse. O híbrido virou o padrão de projeto, e a pergunta que todo time de produto respondia no início de um projeto era qual fração do público ficava com a versão sem modelo. O piso desceu, mas devagar: chegou à gama média e parou ali. No Brasil, a faixa de entrada seguiu fora, e o assunto entrou na pauta de política digital sem sair dela.

### 9.2. Desejável

A linhagem ternária entregou o que prometia. Por volta de 2029, kernels de NPU para pesos ternários saíram do "coming next" e um modelo nativamente ternário de qualidade utilizável passou a rodar com folga em aparelhos de 4 GB de RAM e em CPUs de cinco anos de idade. O efeito foi o oposto do que se temia em 2026: o piso caiu em vez de subir, e o parque de aparelhos antigos — que no Brasil é a maior parte do parque — reentrou no jogo. Como consequência, a compatibilidade deixou de ser assunto de gama e virou assunto de versão, e quem projetava interface passou a tratar o modelo como trata fonte: um ativo embarcado, com orçamento de bytes declarado, escolhido pelo que faz e não pelo que promete. A telemetria por chamada morreu junto, e a avaliação de qualidade teve de ser reconstruída sobre consentimento explícito — pior no começo, mais honesta no fim.

### 9.3. Indesejável

A inteligência virou especificação de aparelho. O piso nunca desceu: a memória seguiu cara, a linhagem ternária não escalou, e a elegibilidade continuou sendo negociada entre a dona do sistema operacional e a fabricante do chip, ao nível do driver, sem que comprador ou desenvolvedor tivessem voz. Em 2031, ter IA no bolso era função direta do preço pago no aparelho, e a diferença entre quem tinha e quem não tinha deixou de ser assinatura cancelável para virar patrimônio. A dependência não acabou — trocou de dono e piorou: o fornecedor de API tinha termos de uso, tinha página de status e tinha para quem reclamar; o fabricante do aparelho tinha um modelo embutido que recusava o que recusava, sem explicar, sem registro e sem recurso. Quando um modelo em campo apresentou defeito grave, descobriu-se que não havia canal de recall: corrigir era publicar uma atualização e esperar. Parte da frota nunca atualizou.

## 10. O experimento

**Sonda de piso de capacidade — medir a sala em vez de afirmar sobre o mundo.**

A alegação mais contestável deste mapa é e4/e5: a de que o piso de hardware exclui gente de verdade. Ela está apoiada em requisitos publicados por fabricante, que são fonte boa mas descrevem o aparelho ideal, não o parque real. E o parque real mais relevante para esta disciplina está na própria sala.

**O que construir.** Uma única página web, estática, sem backend, que ao ser aberta num aparelho qualquer faça três coisas e reporte:

1. **Inventário de capacidade.** Detecta se há WebGPU (`navigator.gpu`), se o Prompt API existe (`LanguageModel` / `ai.*`), quanto de armazenamento o navegador concede (`navigator.storage.estimate()`), quantos núcleos há (`hardwareConcurrency`), e a memória que o navegador admite (`deviceMemory`). Registra SO, navegador e versão.
2. **Teste de carga real.** Se houver WebGPU, baixa um modelo pequeno via WebLLM e mede: tempo até o primeiro token, tokens/s na 1ª iteração e tokens/s da 2ª à 20ª, sempre com o mesmo prompt. O download é cronometrado e o tamanho, registrado.
3. **Curva de degradação.** Plota tokens/s por iteração. É exatamente a medida que sustenta e6 — e que o estudo publicado fez em quatro aparelhos. Aqui seriam os quatorze da turma, mais os de quem quiser rodar em casa.

**O que isso produz que ninguém tem.** Uma matriz de compatibilidade de um parque brasileiro concreto: quantos aparelhos da sala passam do piso, quantos rodam mas derretem, quantos não rodam nada. Três números que não existem em relatório nenhum e que testam diretamente as três afirmações mais frágeis do mapa (e4, e5, e6) — com a vantagem de que um resultado contrário **derruba o mapa**, que é o requisito de um experimento de verdade.

**Custo e prazo.** Uma página, sem servidor, sem custo de API — pela própria lógica do tema. Uma tarde para montar, quinze minutos de aula para coletar. O consentimento é trivial porque nenhum dado sai do aparelho: o participante lê o resultado na tela e decide se copia a linha para uma planilha compartilhada. Que a coleta seja voluntária e local é, ela mesma, uma demonstração do argumento de e1.2.

**O que mediria o erro.** Se a maioria dos aparelhos da sala passar no teste e sustentar throughput sem degradar, e4 e e6 estão errados e este mapa precisa ser refeito a partir da §4.2.

## 11. Fontes

1. `https://github.com/microsoft/BitNet` — sustenta §3 e §4.3: estado do `bitnet.cpp` v1.0, modelos suportados, ganhos de 2,37×–6,17× (x86) e 1,37×–5,07× (ARM), energia 71,9%–82,2% e 55,4%–70,0%, NPU como "coming next", entradas datadas de julho/2026. **Alta** — repositório oficial do fornecedor; os números são alegação do próprio autor da técnica e devem ser lidos como tal.
2. `https://developer.chrome.com/docs/ai/prompt-api` — sustenta §3, e4, e5: estabilidade em Chrome 138+, requisito de 22 GB livres, >4 GB de VRAM ou 16 GB de RAM com 4+ núcleos, e a exclusão explícita de Chrome no Android, iOS e ChromeOS fora de Chromebook Plus. **Alta** — documentação primária, com requisitos declarados.
3. `https://machinelearning.apple.com/research/apple-foundation-models-2025-updates` — sustenta §3 e §4.1: ~3B parâmetros, 2 bits por peso via QAT, embeddings em 4 bits, cache KV em 8 bits, contexto de 65 mil tokens, e a limitação declarada de não ser modelo de conhecimento geral. **Alta** — fonte primária do fabricante, e notável por declarar a própria limitação.
4. `https://github.com/gpuweb/gpuweb/wiki/Implementation-Status` — sustenta §3 e e5: status do WebGPU por navegador e plataforma, incluindo as lacunas em Firefox/Linux, Firefox/Android e Chrome em Windows ARM64. **Alta** — mantido pelo grupo de trabalho da especificação.
5. `https://arxiv.org/abs/2603.23640` — *LLM Inference at the Edge: Mobile, NPU, and GPU Performance Efficiency Trade-offs Under Sustained Load*, Tummalapalli, Arayakandy, Pal e Kundan, mar/2026 (rev. jun/2026). Sustenta e6 e todo o argumento térmico: Qwen 2.5 1.5B em 4 bits, perda de quase metade do throughput do iPhone 16 Pro em duas iterações, encerramento forçado no S24 Ultra, RTX 4050 a 131,7 tok/s sob 34,1 W, Hailo-10H a 6,9 tok/s sob 2 W. **Alta para o mecanismo, média para generalização** — quatro aparelhos e um modelo; preprint.
6. `https://arxiv.org/abs/2509.06371` — *Breaking SafetyCore: Exploring the Risks of On-Device AI Deployment*, Guyomard, Mauvisseau e Paindavoine, set/2025. Sustenta e3.2 e o wildcard 2: demonstração de que o modelo no dispositivo pode ser extraído e manipulado para burlar a detecção. **Alta para a demonstração técnica, baixa para as questões de consentimento e governança** — o resumo não as cobre, e não li o texto integral.
7. `https://www.thurrott.com/a-i/336209/google-details-strict-hardware-requirements-for-gemini-intelligence-on-android` — 18/05/2026. Sustenta §4.2, e2.1 e e4: 12 GB de RAM, SoC de topo, Gemini Nano v3 ou superior, cinco atualizações de SO, seis anos de correções, lista curta de aparelhos elegíveis. **Média** — veículo secundário, mas específico, datado e consistente com outras coberturas independentes; o ideal seria a documentação do Google, que não localizei em fonte primária aberta.
8. `https://github.com/ollama/ollama` — sustenta §3: 180,7 mil estrelas e suporte a macOS, Windows, Linux e Docker. **Alta para o que afirma** — leitura direta da página; serve como proxy de tração entre desenvolvedores, e apenas isso.
9. `https://github.com/mlc-ai/web-llm` — sustenta §3 e e5.1: inferência no navegador via WebGPU, sem servidor, com API compatível com a da OpenAI, cobrindo Llama, Phi, Gemma, Mistral e Qwen. **Alta para as capacidades, nenhuma para tamanhos de download** — a documentação aberta não declara requisitos de memória nem pesos em MB, ao contrário do que blogs afirmam.
10. `https://www.mundoconectado.com.br/smartphones/crise-memorias-preco-celulares-entrada/` — 06/02/2026. Sustenta e4.2: declaração de Rafael Aquino, diretor da Samsung Brasil, de que o aumento de custo será mais perceptível nos modelos mais baratos; Samsung com 50% das vendas no Brasil; Galaxy A07 4G abaixo de R$ 600; Galaxy A07 5G com 4 GB de RAM. **Média** — veículo de tecnologia, com declaração nominal e atribuída; a projeção de alta de 42% citada é extrapolação a partir do mercado indiano e **não foi usada** neste mapa.

## 12. Anexo — o levantamento bruto

### 12.1. Fase 1 — entrevista de enquadramento

A skill exige entrevista antes de qualquer produção. Esta rodada foi executada sem interlocutor disponível, com as respostas fornecidas no despacho. Registro pergunta e resposta, como o método manda, e sinalizo onde assumi.

| # | Pergunta | Resposta |
|---|---|---|
| 1 | Tema exato (3 a 7 palavras) | "IA local: no dispositivo e no navegador" — tema 16 de 19, família "Criação e plataforma" |
| 2 | Recorte | Tecnologia, com consequências de mercado e de prática profissional |
| 3 | Horizonte | 2031 |
| 4 | Para quem | Quem projeta mídia e interação |
| 5 | Escopo geográfico | Global, com nota sobre o Brasil |
| 6 | O que já está descartado | O que já é comum em produto de massa (régua da disciplina). Nenhuma outra exclusão |
| 7 | Viés desejado | Neutro |
| 8 | O que já se sabe / fontes confiáveis | Nenhuma disrupção suspeita declarada — "descubra". Ideias óbvias a excluir: as que serviriam a qualquer tema |

**Critério de refutação declarado pelo solicitante:** o mapa deve mudar se houver evidência de que a adoção já passou da maioria inicial (Rogers), ou de que a tecnologia não rompe nada e apenas melhora o que existe. **Avaliação ao fim do trabalho:** o primeiro critério não se cumpriu — os requisitos de 12 GB de RAM e SoC de topo, e a exclusão de todo o mobile no Chrome, colocam a adoção real bem antes da maioria inicial, apesar do volume de ruído. O segundo se cumpriu **parcialmente**, e isso está registrado na §7: no eixo *custo*, a IA local não rompe nada, porque a nuvem já despencou de preço. Ela rompe nos eixos de disponibilidade offline, privacidade por construção e — sobretudo — controle, que foi por onde o mapa foi construído.

**Assunções declaradas, por não haver quem confirmasse:** (a) "profundidade: três ordens" foi lida como três ordens completas, não como teto; (b) o modo escolhido foi "a partir de uma inovação", não de um setor, e por isso não há corte setorial; (c) na dúvida sobre idioma, o documento saiu em PT-BR com os títulos canônicos em português exigidos pelo pipeline da disciplina, conforme a nota da própria skill.

### 12.2. Fase 2 — triagem de maturidade

Classificação explícita, como o método exige, antes de qualquer identificação de raiz. A régua: commodity ou padrão de mercado há 3+ anos, ou presente em mais de 50% dos aparelhos do público-alvo, é **madura** e não entra como raiz.

| Tecnologia | Classificação | Justificativa |
|---|---|---|
| Chamada de API de modelo na nuvem | **Madura** | Padrão desde 2023; preço caiu ordens de grandeza. Não rompe nada hoje |
| Quantização pós-treino / GGUF | **Madura** | Prática padrão desde 2023; formato onipresente. É contexto, não ruptura |
| `llama.cpp` / Ollama como runtime de desktop | **Madura no segmento de quem desenvolve** | 180,7 mil estrelas; instalador para quatro plataformas. Emergente para o público geral |
| Modelo pequeno em servidor próprio | **Madura** | Explicitamente fora do recorte da disciplina |
| NPU existir em celular | **Madura** | Presente em aparelhos de topo há vários ciclos |
| WebGPU como API gráfica | **Madura como infraestrutura** | Chrome 113+, Safari 26, Firefox 141+. Mas **não madura como substrato de inferência móvel** — Firefox/Android atrás de flag |
| Treino nativo ternário (BitNet b1.58) | **Emergente → Disruptiva** | Framework 1.0 ativo, modelo nativo de 2,4B, mas sem escala de fronteira e sem NPU. Muda a operação aritmética dominante: é ruptura, não melhoria |
| Modelo do SO como API pública (Apple FM, AICore) | **Emergente → Disruptiva** | Em produção e documentado, mas restrito a aparelho de topo. Rompe a cadeia da chave de API |
| Prompt API no navegador | **Emergente → Disruptiva** | Estável no Chrome 138+, porém desktop apenas, com 22 GB de disco. Rompe a suposição de piso comum da web |
| Inferência de modelo geral no navegador (WebLLM) | **Emergente** | Funciona e está documentado; restrito por memória e por download |
| Agente local contínuo | **Emergente, com barreira física** | Bloqueado por térmica e bateria; não é questão de maturidade de software |
| Multimodal no dispositivo | **Emergente** | Há indícios de avanço em 2026; ver falha de verificação em 12.4 |

Três candidatas foram promovidas a raiz. A quantização agressiva, citada no enunciado do tema como parte da disrupção-raiz, **foi rejeitada** por maturidade e rebaixada a contexto na §3 — é a rejeição mais importante desta triagem, porque o enunciado a tratava como novidade.

### 12.3. Fase 5 — rodada adversarial, item a item

Os quatro testes destrutivos aplicados a cada efeito gerado.

**Descartados (5):**

| Efeito gerado | Teste que o derrubou | Motivo |
|---|---|---|
| "O modelo de assinatura de IA colapsa até 2030" | Causa solta + extrapolação linear | O preço da nuvem já caiu ordens de grandeza sem que a assinatura encolhesse. Não deriva desta raiz |
| "A nuvem como negócio encolhe" | Causa solta | A demanda de nuvem é puxada por treino e por inferência de fronteira, não pelas chamadas curtas que migram para o aparelho |
| "Cada pessoa terá um modelo próprio que aprende com ela" | Adoção acelerada | Não existe caminho de produto para aprendizado contínuo no dispositivo. Os adaptadores da Apple precisam ser retreinados a cada versão do modelo base. Rebaixado a wildcard |
| "O navegador substitui o app nativo para IA" | Contradito pela evidência | O Prompt API é desktop apenas e exige 22 GB livres. A evidência aponta o contrário |
| "IA local acaba com a censura de modelos" | Viés do usuário | Crença corrente em comunidades de modelo local. **Reescrito com conclusão oposta** — virou e2.2: o filtro deixa de ser termo de uso auditável e vira política de aparelho não-auditável |

**Mantidos com reserva (3):** e7.2 (kernels ternários em NPU — apoiado apenas em roadmap declarado do fornecedor); e6.2 (computador como servidor pessoal — sinal único e fraco); e2.2.1 (deslocamento regulatório — especulação sobre comportamento institucional, sem precedente citável).

**Reescritos (3):** e1.1 (de "o SaaS de IA morre" para o recorte estreito da camada que só embrulhava a chamada); e4.1 (de "a IA fica grátis" para "o custo migra da fatura de API para o preço do hardware"); e4.2 (de uma afirmação com o número de 40% para o que a fonte de fato sustenta — ver §8, erro 3).

**Placar da rodada adversarial: 5 descartados, 3 mantidos com reserva, 3 reescritos.** O método prevê perguntar ao solicitante se deseja reprocessar alguma disrupção. **Pergunta feita e não respondível nesta rodada** — não há interlocutor. Registro a recomendação: a disrupção 4.3 (ternária) é a que mais se beneficiaria de um reprocessamento, porque toda ela depende de um roadmap de fornecedor e de nenhuma medição independente.

### 12.4. Verificações que falharam ou ficaram pendentes

- **Participação de Copilot+ PCs nos embarques de PC em 2026:** procurada, não encontrada em fonte primária. Nenhum número sobre NPU em PC entrou no mapa por isso.
- **WWDC 2026 — abertura do Foundation Models a provedores externos e entrada de imagem:** apareceu em vários posts de blog, nenhum deles aberto nem confirmado contra fonte da Apple. **Não foi usado como evidência.** Se confirmado, reforça e8.1 e enfraquece e2 (o fabricante deixaria de ser o escolhedor único do modelo) — é a verificação pendente de maior impacto sobre este mapa.
- **Números finos do estudo térmico** (44% de queda, 78,3 °C, ~400 inferências por carga, 12% de bateria a cada 20 execuções): vistos em resumo do texto integral em HTML, não conferidos no PDF. O documento usa apenas as formulações confirmadas na página do resumo. Os números finos ficam aqui, no anexo, com essa ressalva.
- **`arXiv:2504.12285`** (relatório técnico do BitNet b1.58 2B4T) e **`arXiv:2606.22606`** (modelos sub-bilionários superando modelos de fronteira em extração de relações): apareceram nos resultados, **não foram abertos** e portanto não constam da §11, ainda que o segundo apoiasse e8.
- **Distribuição de RAM no parque de smartphones brasileiro:** procurada, não encontrada. É a lacuna que torna e4.2 o efeito mais frágil que permaneceu na roda, e é parte do que o experimento da §10 existe para medir.
