---
tema: "IA local: no dispositivo e no navegador"
slug: ia-local-no-dispositivo-e-no-navegador
autor_login: vafs
zona_de_interesse: Criação e plataforma
data: 2026-09-11
horizonte: 2031
publico: "Quem projeta mídia e interação — para decidir onde a inferência de um produto vai morar nos próximos cinco anos, e o que isso obriga a assumir sobre aparelho, responsabilidade e preço"
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 12
efeitos_ordem_3: 21
tecnologias_citadas: [BitNet b1.58, bitnet.cpp, quantização ternária, Quantization-Aware Training, Apple Foundation Models framework, AFM 3 Core, AFM 3 Core Advanced, Instruction-Following Pruning, Gemini Nano, AICore, ML Kit GenAI, LiteRT-LM, Chrome Prompt API, WebGPU, WebLLM, MLC-LLM, LlamaWeb, WebNN, Transformers.js, ONNX Runtime Web, GGUF, Ollama, llama.cpp, Hexagon NPU, Mixture-of-Experts, abliteração]
fontes: 20
confianca: media
experimento: "O teto da sala — uma página só que mede, em cada aparelho da turma, qual das três portas de IA local abre, a que velocidade e a que preço em megabytes"
skill_usada: futurizacao-vafs
publico_ok: false
---

## 1. Resumo

Entre julho de 2025 e setembro de 2026 a inferência local deixou de ser exercício de entusiasta e
virou camada de sistema. A Apple publicou em 08/06/2026 a terceira geração das suas fundações —
AFM 3 Core, de 3 bilhões de parâmetros, e AFM 3 Core Advanced, de 20 bilhões esparsos que ativam
de 1 a 4 bilhões por vez, com o modelo inteiro guardado em NAND e os especialistas carregados sob
demanda. O Chrome estabilizou a Prompt API e o Gemini Nano na versão 148. O LiteRT-LM, que a
Google diz estar em "centenas de milhões de aparelhos", foi aberto. A Qualcomm anunciou em
10/09/2026 uma NPU que mira MoE de 30 bilhões de parâmetros no celular. E o Hugging Face mediu,
em 14/08/2026, crescimento de 464% nos repositórios que declaram GGUF entre janeiro e agosto,
contra 16% de transformers — o formato de rodar em casa cresceu vinte e nove vezes mais rápido
que o formato de rodar no servidor.

Deste estado derivam três rupturas, e nenhuma delas é "o modelo ficou pequeno". A primeira é que
chamar IA passa a ser uma chamada de sistema operacional, como pedir a câmera: sem chave, sem
conta, sem custo por chamada (D1). A segunda é que a aba do navegador vira runtime de inferência,
e uma ferramenta de IA passa a caber inteira num link (D2). A terceira, a mais desconfortável, é
que um peso baixado não pode mais ser atualizado, revogado nem desligado por quem o publicou —
o modelo deixa de ser serviço e vira posse (D3).

O mapa é neutro por pedido. A sua parte mais frágil é a que mais empolga: "IA local" é gratuita
depois de baixada, mas o download é medido em gigabytes e o requisito é medido em RAM. O Chrome
exige mais de 4 GB de VRAM ou 16 GB de RAM e 22 GB livres em disco, e não roda a Prompt API em
Chrome para Android nem para iOS. Num país onde 65% dos usuários de internet só acessam pelo
celular — 87% na classe DE —, a promessa de "ninguém pode desligar" chega primeiro a quem já
tinha máquina para não depender de ninguém.

Este documento também rejeita, com o critério escrito na seção 2, a candidata que a própria turma
elegeu em primeiro lugar: o modelo de 1 bit não entra como disrupção-raiz. Ele é o mecanismo que
pode acelerar as três — e o wildcard mais interessante do mapa — mas, pelo teste, é melhoria de
eficiência, não ruptura de categoria. O registro da rejeição está na seção 12.

## 2. O tema

O tema é **onde a inferência acontece**, e não o que o modelo sabe. É uma questão de arquitetura
de distribuição, não de capacidade: o mesmo texto gerado pelo mesmo modelo tem consequências
diferentes se foi produzido num datacenter alugado por chamada ou num chip dentro do bolso de
quem leu.

A linha que a disciplina desenhou é precisa e vale repetir porque ela é o que impede este mapa de
virar um mapa sobre "IA" em geral. Chamar API de modelo na nuvem: maduro. Rodar modelo pequeno no
servidor próprio: maduro. O objeto aqui é o modelo **no aparelho do usuário final** — celular,
laptop comum, aba do navegador — com qualidade suficiente para agente, voz e visão.

Onde isso encosta em mídia e interação, em três pontos:

Primeiro, no **custo unitário da interação**. Toda decisão de design de produto com IA feita entre
2023 e 2026 carrega uma premissa silenciosa: cada chamada custa alguma coisa, logo a interface
economiza chamadas. Botão "gerar", campo de prompt, limite de mensagens — são todos artefatos da
fatura. Se o custo marginal vai a zero, essa gramática inteira perde a razão de ser, e nada garante
que o que vem no lugar seja melhor.

Segundo, na **cadeia de responsabilidade**. Um modelo na nuvem pode ser corrigido numa quinta-feira
à tarde e todo mundo passa a usar a versão corrigida na sexta. Um modelo baixado por dez milhões
de pessoas não pode. Quem responde pelo que ele diz em 2029, depois de ter sido quantizado por um
terceiro e ter tido as guardas removidas por um quarto, é uma pergunta sem resposta institucional
hoje.

Terceiro, no **acesso**. O argumento a favor da IA local é de independência: ninguém pode desligar,
nada sai, não custa por uso. Todos os três são verdadeiros e todos os três pressupõem um aparelho
que já passou numa régua de hardware. A régua de exclusão não desaparece — ela se move de "ter
cartão de crédito internacional" para "ter NPU e RAM", e essas duas exclusões não pegam as mesmas
pessoas.

Por que isto merece um mapa de futuro e não um levantamento de estado da arte: porque o estado da
arte é quase todo verificável hoje e quase todo recente — dá para listar numa tarde qual sistema
expõe qual modelo, em que versão, desde que data, com que requisito de memória. O que não é
verificável é o que acontece com o negócio de vender IA por assinatura, com o papel do fabricante
de aparelho como curador do que a inteligência pode dizer, e com a ideia de "usuário de um serviço"
quando o serviço é um arquivo que a pessoa possui.

## 3. Onde isso está hoje

O que segue é estado verificado, não projeção. Cada número foi lido na fonte listada na seção 11.

**O modelo dentro do sistema operacional.** A Apple anunciou em 08/06/2026 uma família de cinco
modelos construída em colaboração com a Google, dois dos quais rodam no aparelho: o AFM 3 Core, a
nova geração do modelo denso de 3 bilhões de parâmetros, e o AFM 3 Core Advanced, um modelo de 20
bilhões com arquitetura esparsa que ativa de 1 a 4 bilhões por token, usando "Instruction-Following
Pruning" — o modelo completo mora na memória flash (NAND) e apenas os especialistas necessários
sobem para a DRAM. O relatório técnico de julho de 2025 já registrava, para a geração anterior,
treino com consciência de quantização em **2 bits** e compartilhamento de cache KV, e descrevia o
Foundation Models framework como uma API Swift com geração guiada, chamada de ferramenta restrita e
ajuste por adaptador LoRA. Em 08/06/2026 a Apple anunciou ainda entrada de imagem, acesso a modelos
de servidor pela mesma API, abertura do código do framework, e acesso sem custo de API ao Private
Cloud Compute para desenvolvedores do App Store Small Business Program (menos de 2 milhões de
downloads de primeira vez).

**No Android.** O Gemini Nano roda dentro do serviço de sistema AICore, e o caminho recomendado
para o desenvolvedor em 2026 são as ML Kit GenAI APIs — prompt, sumarização, revisão, reescrita,
descrição de imagem e reconhecimento de fala. A documentação oficial da Google é explícita sobre o
limite: "isso remove a latência de rede, mas a velocidade de inferência depende do hardware do
aparelho". A mesma página **não** publica a matriz de aparelhos compatíveis — o desenvolvedor tem
de descobrir em outro lugar quais modelos de celular alcançam o modelo.

**No navegador.** A Prompt API está estável no Chrome 148, com o Gemini Nano embutido. Os
requisitos publicados pela própria Google: Windows 10 ou 11, macOS 13 ou superior, Linux, ou
ChromeOS apenas em aparelhos Chromebook Plus (plataforma 16389.0.0+); **pelo menos 22 GB livres**
no volume do perfil do Chrome; mais de 4 GB de VRAM no caminho de GPU, ou 16 GB de RAM e 4 núcleos
no caminho de CPU; conexão sem limite de dados para o download inicial, depois funciona offline.
E a lista do que **não** é suportado: Chrome para Android, Chrome para iOS, e ChromeOS que não seja
Chromebook Plus.

**O caminho aberto, sem passar pelo fabricante.** O WebLLM roda modelos quantizados em 4 bits sobre
WebGPU e retém, segundo o próprio artigo (arXiv:2412.15803v2, versão de 13/04/2026, CMU/SJTU/NVIDIA),
até cerca de 80% da vazão de decodificação do MLC-LLM nativo no mesmo aparelho: 41,1 tokens/s contra
57,7 no Llama-3.1-8B, e 71,1 contra 89,3 no Phi-3.5-mini, medidos num MacBook Pro M3 Max. Um artigo
posterior, "Llamas on the Web" (20/05/2026), mediu 16 aparelhos de 8 fabricantes, 10 modelos e 4
formatos de peso, e reporta 29% a 33% menos memória e 45% a 69% mais vazão de decodificação que os
backends existentes em quatro GPUs de fabricantes distintos — e enuncia o problema real do alvo:
"memória limitada e hardware heterogêneo".

**A camada que ainda não chegou.** A WebNN, que é a única API da web que endereça a NPU
diretamente, está em Candidate Recommendation Draft do W3C de **10 de setembro de 2026** — ou seja,
anteontem, em relação à data deste documento. Enquanto ela não chega, o caminho real é a WebGPU — e
a documentação do Transformers.js, que roda sobre ONNX Runtime, ainda traz aviso explícito de que "a
API WebGPU é experimental em muitos navegadores", com CPU via WASM como padrão e quantização em q8
ou q4 recomendada para ambiente de recurso limitado. Os dois artigos de medição citados acima
avaliam WebGPU, não NPU. Isto é: a porta do navegador para o chip feito para inferência ainda não
abriu, e o que existe hoje passa pela GPU genérica.

**O silício.** A Qualcomm, em matéria de 10/09/2026, descreve a próxima Hexagon NPU mirando modelos
Mixture-of-Experts de até 30 bilhões de parâmetros ativando cerca de 3 bilhões por passo de geração,
com 50% mais memória compartilhada que a do Snapdragon 8 Elite Gen 5, aceleração de cache KV para
contextos de até 32 mil tokens, e até 50% de melhoria de pré-preenchimento em modelos INT4. A razão
declarada para o MoE é explícita e importa para todo o resto deste mapa: **largura de banda de
memória** é o gargalo de rodar LLM em celular, não capacidade de cálculo.

**A precisão baixíssima.** O bitnet.cpp, framework oficial de inferência de LLM de 1 bit da
Microsoft, reporta ganhos de 1,37× a 5,07× em CPU ARM com redução de energia de 55,4% a 70,0%, e
2,37× a 6,17× em x86 com 71,9% a 82,2%. O BitNet b1.58 2B4T, de 2 bilhões de parâmetros treinados
em 4 trilhões de tokens, aparece no cartão do modelo com 0,4 GB de memória fora dos embeddings,
29 ms de latência de decodificação em CPU e 0,028 J estimados por token, contra 1,4 GB e 41 ms do
Gemma-3 1B, com média de 54,19 nos benchmarks citados — acima do LLaMA 3.2 1B (44,90) e abaixo do
Qwen2.5 1.5B (55,23). O cartão traz um aviso que muda a leitura: **não espere nenhum ganho de
eficiência usando este modelo com a biblioteca transformers padrão**; é obrigatório o
bitnet.cpp. O repositório registra otimização de CPU em 15/01/2026 (1,15× a 2,1× adicionais),
modelos de embedding em 20/07/2026, e lista suporte a NPU como "coming next".

**A adoção medida.** O relatório "State of Open Models" do Hugging Face, de 14/08/2026: repositórios
que declaram a biblioteca GGUF cresceram **464%** entre janeiro e agosto de 2026, contra **16%** de
transformers e peft; modelos abaixo de 1 bilhão de parâmetros respondem por **83%** de todos os
downloads históricos, e acima de 100 bilhões por **1%**; em 2026, apenas 3% do volume vai a modelos
acima de 70 bilhões; existem **28.531** conversões GGUF de modelos Qwen no Hub, das quais a própria
Qwen publicou **54**; os downloads mensais de GGUF de Qwen chegaram a 39,6 milhões em julho de 2026.

**A adoção como fenômeno social.** O artigo "Open AI in the Wild: Adoption and Adaptation of Open
Models on r/LocalLLaMA" (Lee, Howison, Lee e Li, arXiv:2606.22211, 20/06/2026, aceito no FAccT'26)
faz análise temática das discussões da comunidade e nomeia as motivações: autonomia, experimentação
e **resistência à instabilidade de plataforma** — e os freios: curva de aprendizado íngreme e
distância de desempenho em relação aos sistemas fechados. É a formulação acadêmica da mesma coisa
que a turma desta disciplina viveu ao esbarrar em cota de API e migrar o julgamento das suas 500
para modelo local.

**O preço do que se quer substituir.** O índice de preços de token que abri registra a queda: o
GPT-4 em março de 2023 a US$ 30 por milhão de tokens de entrada; modelos de qualidade comparável
por volta de US$ 0,10 a US$ 0,15 por milhão em 2026, uma queda da ordem de 200 a 300 vezes em três
anos. Isto é contexto obrigatório e desconfortável para o tema: a IA local não compete com o preço
de 2023, compete com um preço que também está caindo.

**O Brasil, em uma nota.** A TIC Domicílios 2025, divulgada em 09/12/2025 com coleta entre março e
agosto de 2025 sobre 24.535 indivíduos e 27.177 domicílios: 157 milhões de usuários regulares de
internet (85% da população), 163 milhões contando quem usa aplicativos sem se identificar como
usuário; **65% da população acessa a internet exclusivamente pelo celular**, cinco pontos acima de
2024; na classe DE, **87%**; na classe A, 95% acessam por múltiplos dispositivos. Nenhum requisito
publicado nesta seção — 22 GB livres, 4 GB de VRAM, NPU recente — foi escrito pensando nesse
aparelho.

## 4. As disrupções-raiz

O teste da seção 2 da skill foi aplicado por escrito a cada candidata. As três que passaram estão
abaixo; as rejeitadas, com o motivo, estão na seção 12.

### D1 — O modelo vira função do sistema operacional

**Enunciado.** Chamar um modelo de linguagem deixa de ser uma integração com fornecedor externo e
passa a ser uma chamada de sistema, como abrir a câmera ou pedir a localização: sem chave, sem
conta, sem contrato, sem custo por chamada.

**Teste 1 (está madura?).** Três implantações em produção, em escala, existem e são citáveis: o
AICore no Android, o Foundation Models framework no iOS/macOS, e a Prompt API estável no Chrome 148
— e o LiteRT-LM, segundo a Google, em centenas de milhões de aparelhos. Mas a segunda pergunta do
teste separa duas coisas que é fácil confundir: o modelo embutido **já é** a opção padrão para as
funções do próprio fabricante (resumo de notificação, correção de texto do sistema) — nisso é
maduro. Para o **desenvolvedor de terceiro** como caminho padrão de construir produto, não é: a
Prompt API não existe em Chrome para Android nem iOS, o Gemini Nano depende de uma lista curada de
aparelhos que a própria documentação da Google não publica naquela página, e a Apple acabou de
abrir o código do framework em 2026. **Veredito:** a camada é madura; o fluxo de terceiro é
emergente. Entra, com essa distinção declarada.

**Teste 2 (é emergente?).** Sim — fora do laboratório, em uso crescente, curva de capacidade
subindo (AFM 3 Core Advanced de 20B esparso é de junho de 2026; MoE de 30B em NPU é anúncio de
setembro de 2026), adoção ainda de quem adota cedo.

**Teste 3 (é disruptiva?).** Sim, e o ator que perde a razão de existir é nomeável: a camada
intermediária que revende acesso a modelo para tarefa pequena — o wrapper, o SDK de IA por
assinatura, a linha "IA" separada no orçamento. Se resumir um texto é uma chamada de sistema que
não custa nada e não pede chave, não existe o que cobrar por resumir um texto. Isso não é "fica
mais barato": é a desaparição do objeto de cobrança.

### D2 — A aba do navegador vira runtime de inferência

**Enunciado.** Uma ferramenta de IA passa a caber inteira num endereço: o modelo é baixado e
executado pelo navegador do visitante, sem servidor de inferência, sem instalação e sem cadastro.

**Teste 1 (está madura?).** Não. A evidência mais forte contra a maturidade é a WebNN estar em
Candidate Recommendation Draft de 10/09/2026, sem suporte de navegador fora de build experimental —
e o runtime mais usado para LLM no navegador, o WebLLM, não alcançar a NPU. Nenhum fluxo de trabalho
em escala tem "rode o modelo na aba do usuário" como opção padrão hoje.

**Teste 2 (é emergente?).** Sim, com medição publicada: 71% a 80% da vazão nativa no WebLLM,
29% a 33% menos memória e 45% a 69% mais vazão no LlamaWeb sobre 16 aparelhos de 8 fabricantes.
Isso é engenharia comparável em revisão, não protótipo de demonstração.

**Teste 3 (é disruptiva?).** Sim. O que deixa de fazer sentido é o **servidor de inferência como
condição de existir** para uma classe inteira de ferramenta — transcrever, resumir, traduzir,
extrair, reescrever — e, junto com ele, a conta de usuário que existia para racionar esse servidor.
A categoria "pequeno SaaS de IA cujo valor é ter um servidor com GPU" perde a razão de ser.

### D3 — O peso baixado vira posse, não serviço

**Enunciado.** Um modelo que foi baixado não pode mais ser atualizado, revogado, corrigido ou
desligado por quem o publicou. Ele deixa de ser um serviço que alguém presta e vira um arquivo que
alguém tem.

**Teste 1 (está madura?).** A distribuição de peso é madura como prática. O que não é maduro é a
**consequência institucional** — e é ela a candidata, não a prática. Nenhum arranjo em escala de
responsabilidade, atualização ou auditoria de peso já distribuído é hoje a opção padrão de ninguém.

**Teste 2 (é emergente?).** Sim, e com indicadores duros: 28.531 conversões GGUF de Qwen contra 54
oficiais mostra que o objeto que circula não é o objeto que foi publicado. A abliteração — a
remoção da direção interna que o modelo usa para recusar — deixou de ser técnica de fórum: a
TechCrunch reportou em 03/09/2026 uma empresa constituída em março de 2026 hospedando versões de
modelos de peso aberto com as guardas removidas, incluindo o GLM-5.3 da Z.ai, acessíveis por
navegador e por API, com clientes entre startups de red team no Reino Unido e na Europa, e sem
capital de risco — financiada por receita.

**Teste 3 (é disruptiva?).** Sim. O que perde a razão de existir é o **contrato de serviço como
forma da relação entre a pessoa e a inteligência**, e com ele o desligamento remoto como mecanismo
de governança. Regulação, termos de uso, moderação e correção de erro são todos instrumentos que
pressupõem que alguém ainda tem a mão no interruptor. Aqui ninguém tem.

### O que amarra as três

As três compartilham um mecanismo e uma vulnerabilidade. O mecanismo é o mesmo: a inferência migra
para hardware que o usuário já possui. A vulnerabilidade também: todas dependem de o aparelho passar
numa régua. D1 precisa de NPU e do fabricante autorizar; D2 precisa de GPU, VRAM e disco; D3 precisa
de alguém disposto a baixar gigabytes. Se a régua não descer — e o gargalo declarado pela Qualcomm é
largura de banda de memória, que não obedece à mesma curva do transistor —, as três acontecem só na
metade de cima do parque de aparelhos, e o mapa inteiro descreve o futuro de quem já tinha máquina.

## 5. A roda dos futuros

Antes do bloco, a leitura em prosa do que a roda diz e do que a auditoria da fase 4 deixou marcado
nela. Isto não é resumo do YAML — é o que o YAML não consegue carregar.

**A roda tem um eixo econômico e um eixo institucional, e eles andam em velocidades diferentes.**
O eixo econômico (e1, e2, e3) é rápido e razoavelmente previsível: quando o custo marginal vai a
zero, quem cobrava pelo custo marginal precisa cobrar por outra coisa. O eixo institucional (e5, e6)
é lento e é onde está toda a incerteza: responsabilidade, herança, apreensão e auditoria são
categorias que se movem em décadas, não em ciclos de lançamento.

**Três efeitos merecem leitura em separado porque contrariam a expectativa do tema.**

O primeiro é **e2.1.2**: a hipótese natural é que IA local nivela pesquisa rica e pobre, porque
qualquer um passa a rodar modelo sem fatura. O efeito derivado é o contrário. Se inferência vira
grátis para todo mundo, o diferencial migra para o que continua caro — treinar e ajustar —, e a
distância entre laboratório rico e pobre aumenta em vez de diminuir. O dado que sustenta isso é o
do Hugging Face: 28.531 conversões GGUF de Qwen contra 54 oficiais mostra uma comunidade enorme
adaptando, e uma quantidade pequena de atores produzindo o que se adapta.

O segundo é **e4.1.2**: o argumento de conformidade a favor do local é que o dado não sai. A
consequência derivada é que, se o dado não sai, **o registro também não existe**. Auditar uso de IA
em setor regulado fica mais difícil, não mais fácil: não há log de servidor para pedir depois do
fato. O efeito ficou com confiança baixa porque não encontrei nenhum caso concreto de auditoria
frustrada por isso — é derivação, não observação.

O terceiro é **e6.2**: a promessa de "ninguém pode desligar" produz, pelo mesmo mecanismo, um custo
de troca de plataforma maior. Um modelo que aprendeu com você por três anos é uma coisa a mais que
não migra junto quando você troca de aparelho — e é, exatamente por isso, uma coisa a mais que o
fabricante pode oferecer sincronizar.

**O que a auditoria fez com esta roda.** Dois efeitos foram cortados inteiros e estão na seção 12
com o motivo: "a nuvem encolhe" (extrapolação linear pura) e "cada pessoa treina o seu próprio
modelo" (sem mecanismo narrável e fora do horizonte). O efeito e6 foi rebaixado de `sinal: medio`
para `sinal: fraco` porque o que existe hoje são protótipos de estudante e projeto de fim de semana,
não produto. O efeito e5.1.1 foi reescrito: na primeira versão dizia que "o sistema operacional vira
o guardião", sem o passo do meio; a versão que ficou nomeia o passo — a guarda migra do peso para o
aparelho **porque o peso já não é corrigível**, e o aparelho é o único ponto da cadeia que ainda
aceita atualização. E e1.2.1 carrega uma ressalva que está detalhada na seção 7: ele supõe
velocidade regulatória sem precedente claro.

**Sobre os prazos.** Nenhum efeito de 1ª ou 2ª ordem ultrapassa 2031. Os de 3ª ordem chegam a 2031
e param ali, por regra do método, não porque o assunto acabe em 2031.

```yaml
roda:
  - disrupcao: "D1 — O modelo vira função do sistema operacional: terceiros chamam IA sem chave, sem conta e sem custo por chamada"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "Usar um modelo de linguagem numa tarefa pequena deixa de exigir contrato com fornecedor: o desenvolvedor pede ao sistema operacional, como pede a câmera"
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "A camada que revendia acesso a modelo para tarefa pequena perde o objeto de cobrança, e a IA deixa de ser linha separada no preço do software para virar item incluído"
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "\"Tem IA\" deixa de ser atributo anunciável de produto e vira pressuposto de categoria, como corretor ortográfico"
                sinal: fraco
                prazo: 2030
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: "A disputa entre produtos de software desloca-se do modelo para o dado de contexto que só aquele produto tem, e integração vale mais que inteligência"
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "O fabricante do sistema passa a decidir qual modelo cada aplicativo alcança, e a lista de aparelhos compatíveis vira a nova régua de distribuição — sem loja, sem aprovação, mas com matriz de hardware"
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Autoridade de concorrência trata o modelo embutido como tratou o navegador embutido e exige que o usuário possa escolher qual modelo o sistema oferece aos aplicativos"
                sinal: fraco
                prazo: 2030
                confianca: baixa
              - id: e1.2.2
                ordem: 3
                efeito: "O aparelho de entrada, sem NPU e sem RAM, fica fora da IA do sistema, e a exclusão digital ganha uma camada que não existia: o acesso deixa de depender de rede e passa a depender de silício"
                sinal: medio
                prazo: 2030
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "A cota gratuita de API deixa de ser o teto de quem aprende e prototipa: o limite passa a ser o aparelho, que não muda de regra no meio do semestre"
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Ensino e pesquisa de baixo orçamento padronizam-se em modelo local, e \"reprodutível\" passa a exigir peso baixável em vez de endpoint que pode sumir"
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Revista e conferência passam a pedir o hash do peso usado como material suplementar obrigatório, do jeito que hoje pedem código"
                sinal: fraco
                prazo: 2030
                confianca: baixa
              - id: e2.1.2
                ordem: 3
                efeito: "A assimetria entre laboratório rico e pobre desloca-se de \"quem tem API\" para \"quem tem GPU para treinar\", e aumenta em vez de diminuir, porque inferência barata para todos não torna treino barato para ninguém"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "Custo por interação igual a zero entra como premissa de projeto, e nasce uma classe de produto que só faz sentido se cada chamada for grátis: inferência contínua, em segundo plano, sem botão de gerar"
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "A interface passa a inferir o tempo todo em vez de responder a pedidos, e o ato de \"pedir à IA\" se dissolve num acompanhamento que a pessoa não iniciou e não vê começar"
                sinal: medio
                prazo: 2030
                confianca: baixa
              - id: e2.2.2
                ordem: 3
                efeito: "A métrica de contenção de um produto deixa de ser chamadas por usuário e passa a ser bateria e temperatura, e quem projeta interação herda uma restrição que era do engenheiro de hardware"
                sinal: fraco
                prazo: 2030
                confianca: baixa
  - disrupcao: "D2 — A aba do navegador vira runtime de inferência: uma URL entrega IA sem servidor e sem instalação"
    efeitos:
      - id: e3
        ordem: 1
        efeito: "Uma ferramenta de IA passa a ser distribuível como link, sem servidor de inferência, sem cadastro e sem custo marginal por usuário atendido"
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "O SaaS pequeno cujo valor era ter um servidor com GPU perde o argumento e precisa cobrar por outra coisa — dado proprietário, integração, ou nada"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Software gratuito e sem conta volta a ser viável numa categoria onde tinha desaparecido, e \"faça login para continuar\" deixa de ser inevitável em ferramenta de uso único"
                sinal: fraco
                prazo: 2030
                confianca: baixa
              - id: e3.1.2
                ordem: 3
                efeito: "O financiamento da ferramenta web pequena migra de assinatura para doação, patrocínio ou embutimento, e o gênero se aproxima do utilitário de código aberto em vez do produto"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "A primeira visita passa a custar um download de gigabytes e uma compilação de shader, e a régua de \"a página carregou\" que a web usa há trinta anos deixa de descrever o que acontece"
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "Surge convenção de cache de peso compartilhado entre sites — o modelo como recurso do navegador e não da página — e com ela a disputa sobre quem decide qual peso ocupa o disco de quem visita"
                sinal: fraco
                prazo: 2030
                confianca: baixa
              - id: e3.2.2
                ordem: 3
                efeito: "O \"sem instalação\" da web é reescrito na prática: passa a haver instalação, só que invisível, negociada pelo navegador e sem momento em que alguém consinta"
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: "Dado sensível passa a poder ser processado por IA sem sair da máquina, e a frase \"nada sai daqui\" vira verificável pelo próprio usuário: basta desligar a rede e continuar funcionando"
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "Setores que proibiam IA por política de dados — saúde, jurídico, escola, recursos humanos — autorizam por padrão o que roda local, e a política de segurança passa a ser \"local sim, nuvem sob revisão\""
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "O consentimento informado em serviço digital muda de objeto: deixa de tratar do envio do dado e passa a tratar da execução de código de terceiro dentro do aparelho da pessoa"
                sinal: fraco
                prazo: 2030
                confianca: baixa
              - id: e4.1.2
                ordem: 3
                efeito: "Auditoria de uso de IA em setor regulado fica mais difícil e não mais fácil: sem log de servidor não há registro para pedir depois do fato, e a conformidade passa a depender de instrumentar o próprio aparelho"
                sinal: medio
                prazo: 2030
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "\"Roda local\" vira alegação de marketing sem forma prática de verificação, e aparece a demanda por um teste que distinga local de local-com-telemetria"
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "O navegador passa a expor \"esta aba não fez requisição de rede\" como indicador de primeira classe, do jeito que expõe o cadeado do certificado"
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "D3 — O peso baixado vira posse, não serviço: ninguém consegue mais atualizar, revogar ou desligar o que já foi distribuído"
    efeitos:
      - id: e5
        ordem: 1
        efeito: "O peso que já foi baixado deixa de ser atualizável, corrigível ou revogável por quem o publicou, e o que circula passa a ser uma família de derivados em vez do artefato original"
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "A responsabilidade pelo que o modelo diz se fragmenta em quatro atores distintos — quem publicou o peso, quem quantizou, quem removeu a guarda e quem embarcou no produto — e a regulação em vigor endereça com clareza apenas o primeiro e o último"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "A guarda de segurança migra do peso para o aparelho: como o peso já não é corrigível, o sistema operacional passa a mediar o que qualquer modelo local pode acionar — arquivo, rede, câmera, microfone — por ser o único ponto da cadeia que ainda aceita atualização"
                sinal: medio
                prazo: 2030
                confianca: baixa
              - id: e5.1.2
                ordem: 3
                efeito: "Forma-se jurisprudência tratando peso de modelo como produto e não como serviço, com as consequências de responsabilidade por defeito que essa classificação arrasta"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "Quantizar, podar e desalinhar peso alheio vira ofício remunerado com fornecedor, cliente e preço, e não mais prática de fórum"
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "A versão canônica de um modelo deixa de existir na prática, e a procedência do peso que roda em produção passa a ser desconhecida até de quem o embarcou"
                sinal: medio
                prazo: 2030
                confianca: baixa
              - id: e5.2.2
                ordem: 3
                efeito: "Benchmark público perde valor como referência de produto, porque o peso avaliado quase nunca é o peso executado, e a avaliação migra para dentro de quem embarca"
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: "Um modelo pessoal, que acumula histórico de uma única pessoa e não sincroniza com ninguém, passa a ser possível como artefato: um arquivo com o que ele aprendeu dela"
        sinal: fraco
        prazo: 2029
        confianca: baixa
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "Esse arquivo entra nas disputas que já existem sobre arquivo pessoal — herança, divórcio, apreensão, ordem de entrega em processo — sem que exista categoria jurídica pronta para ele"
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "O direito de não produzir prova contra si mesmo encontra um objeto novo: um artefato derivado da pessoa, que responde como ela e está guardado por ela"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "Trocar de aparelho passa a envolver migrar um modelo, e o custo de sair de uma plataforma sobe justamente por causa da tecnologia que prometia independência dela"
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "O fabricante que hoje cobra por sincronizar foto passa a cobrar por sincronizar modelo, e o \"nada sai daqui\" vira a opção padrão que se paga para desativar"
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — o formato de rodar em casa cresce vinte e nove vezes mais rápido que o de rodar
no servidor.** Os 464% de crescimento dos repositórios GGUF contra 16% de transformers, entre
janeiro e agosto de 2026, é um número sobre infraestrutura de publicação, não sobre uso — mas é
difícil explicá-lo sem supor que muita gente passou a empacotar para consumo local. O que o torna
fraco como sinal é não distinguir "local no meu servidor" de "local no aparelho do usuário", que é
a linha desta análise.

**Sinal fraco 2 — o que circula não é o que foi publicado.** 28.531 conversões GGUF de modelos
Qwen, das quais 54 publicadas pela Qwen. A proporção — cerca de 528 derivados comunitários para
cada oficial — é o sinal mais concreto de que o controle sobre o artefato já se perdeu na prática,
bem antes de qualquer discussão institucional sobre isso.

**Sinal fraco 3 — a guarda removida virou empresa.** Uma companhia constituída em março de 2026,
financiada por receita e não por capital de risco, hospedando modelos de peso aberto com as recusas
removidas e vendendo acesso por API a startups de red team na Europa. É fraco porque é uma empresa
só, e porque o uso declarado (red team) é legítimo. É relevante porque mostra que o passo de
"remover a guarda" deixou de exigir competência técnica e passou a ser comprável.

**Sinal fraco 4 — o gargalo declarado mudou de lugar.** A Qualcomm justifica a mudança para MoE
dizendo, com todas as letras, que o problema de rodar LLM no celular é largura de banda de memória.
É um sinal fraco sobre o futuro porque é uma frase de fabricante no lançamento de um produto — mas é
a primeira vez que o argumento público sai de TOPS e entra em banda, o que muda qual melhoria de
hardware importa nos próximos cinco anos.

**Sinal fraco 5 — a Apple passou a dar nuvem de graça para desenvolvedor pequeno.** O acesso sem
custo de API ao Private Cloud Compute para quem tem menos de 2 milhões de downloads é um movimento
contra a direção deste mapa: se a nuvem do fabricante é grátis para o desenvolvedor pequeno, o
incentivo de ir para o local enfraquece exatamente onde ele era mais forte. Vale a pena observar se
outros fabricantes copiam — seria o sinal mais claro de que D1 será absorvida pela nuvem em vez de
substituí-la.

**Wildcard 1 — um modelo ternário alcança qualidade de fronteira num celular de entrada.** É o
wildcard que o próprio tema propõe, e ele continua sendo o mais consequente: colapsa a régua de
hardware que sustenta a parte pessimista deste mapa inteiro (e1.2.2, e3.2) e torna D1, D2 e D3
simultâneas em vez de escalonadas. O que hoje impede é conhecido e específico: o BitNet b1.58 2B4T
tem média 54,19 nos benchmarks do cartão — competitivo na sua faixa de tamanho, não na fronteira —
e o ganho só existe com runtime dedicado, com suporte a NPU listado como "coming next".

**Wildcard 2 — uma falha grave e pública de um modelo que não pode ser corrigido.** Um peso
distribuído em escala com um defeito sério — viés, vazamento de dado de treino, instrução
maliciosa embutida — e nenhum mecanismo de recall. Não é um evento que se possa datar, mas é o tipo
de acontecimento que resolveria em seis meses a discussão de responsabilidade que e5.1 supõe levar
até 2029, e provavelmente na direção mais restritiva.

**Wildcard 3 — o navegador passa a distribuir o peso, e não a página.** Se um navegador decidir
embarcar um modelo de uso geral acessível a qualquer site — que é, no limite, o que o Chrome 148 já
faz com o Gemini Nano —, D2 deixa de depender de download por site e o custo de primeira visita
desaparece. Isso mataria e3.2 inteiro e transformaria D2 num caso particular de D1, com o navegador
no papel de sistema operacional.

**Wildcard 4 — regulação que exija capacidade de atualização remota.** Uma norma que condicione a
distribuição de peso à existência de um canal de correção inverteria a lógica de D3: o modelo
local voltaria a precisar de rede, e "ninguém pode desligar" viraria ilegal em vez de inevitável.
Nenhum sinal disso hoje; é wildcard justamente por não ter sinal.

## 7. Contra o próprio mapa

Esta seção é o resultado da auditoria da fase 4 da skill, item a item, e não um texto de ressalvas
escrito depois.

**Extrapolação linear — e1 e e2 são a curva de hoje, e não uma descoberta.** Os dois efeitos de 1ª
ordem com confiança alta na roda são, honestamente, projeções do que já está acontecendo: a Prompt
API já está estável, o framework da Apple já existe, os alunos desta disciplina já migraram para
modelo local por causa de cota. Eles estão na roda porque sustentam o resto, não porque sejam
achados. O leitor que procurar previsão neles vai encontrar descrição.

**Adoção sem precedente — e1.2.1 supõe velocidade regulatória que não tem caso comparável.** O
efeito prevê autoridade de concorrência exigindo escolha de modelo até 2030, por analogia com o
navegador embutido. O caso comparável real é ruim para a analogia: o processo dos Estados Unidos
contra a Microsoft foi aberto em 1998 e a tela de escolha de navegador na Europa só apareceu em
2010 — mais de uma década entre o problema e o remédio. Pedir o mesmo em quatro anos supõe uma
velocidade que o único precedente próximo não sustenta. O efeito ficou com confiança baixa e este
parágrafo é a razão.

**Elo causal que pulava etapa — e5.1.1 foi reescrito.** A primeira versão dizia que "o fabricante do
aparelho vira o guardião da inteligência", que é a formulação do próprio enunciado do tema e soa
bem, mas não narra o passo do meio. A versão que ficou nomeia o mecanismo: a guarda migra para o
aparelho porque o peso deixou de ser corrigível e o sistema operacional é o único ponto da cadeia
que ainda recebe atualização. Sem esse passo, o efeito era uma afirmação de posição, não uma
derivação.

**Efeitos derivados por analogia com outro setor.** e2.1.1 (hash do peso como material suplementar)
vem do padrão de exigir código e dado em publicação científica, aplicado a peso. e4.2.1 (o navegador
expor "esta aba não fez requisição") vem do cadeado do certificado. Nenhum dos dois tem sinal
próprio no domínio — são derivações plausíveis de padrões vistos em outro lugar, e ficaram com
sinal fraco por isso, não por dúvida sobre a lógica interna.

**A disrupção-raiz que pode simplesmente não se concretizar — D2.** Das três, é a mais frágil, e o
motivo é datável: a WebNN entrou em Candidate Recommendation Draft em 10/09/2026, e o runtime mais
usado para LLM no navegador não alcança NPU. Se o navegador continuar sendo o único alvo que não
fala com o chip feito para inferência, D2 fica presa em GPU discreta e laptop caro, e todos os
quatro efeitos de e3 e e4 caem junto — inclusive os que mais interessam a quem projeta mídia, que
são os de distribuição por link. O mapa sobrevive sem D2, mas fica bem menos interessante para a
zona de interesse deste documento.

**Uma segunda fragilidade de raiz — o custo que a IA local precisa bater está caindo.** D1 e D2
supõem que "grátis depois de baixado" é uma vantagem decisiva. Contra isso: o preço de token de API
caiu da ordem de 200 a 300 vezes em três anos, e a Apple acaba de oferecer nuvem sem custo de API
a desenvolvedor pequeno. Se o custo de nuvem tender a zero pelo lado da nuvem, o argumento econômico
da IA local se esvazia e sobra só o argumento de privacidade e de independência — que é real, mas
move muito menos gente.

**O viés de quem escolheu o tema.** A disciplina enquadrou o tema com a frase "a documentação promete
1.500 requisições por dia, a conta recebe 20", que é uma experiência de frustração legítima dos
alunos e é também um enquadramento que faz a IA local parecer solução de um problema universal. Não
é: é solução de um problema de quem prototipa com cota gratuita. Empresa que paga API não tem esse
problema, e usuário final nunca soube que ele existe. O tema foi escolhido, em parte, porque o autor
do enquadramento sentiu a dor — e isso empurra para cima a avaliação de D1 e de e2. Registro isso
porque é o viés mais provável deste documento, e o mais difícil de corrigir de dentro.

**O viés desta análise.** O viés pedido foi neutro. O que pode ter escapado dele: ao rejeitar o
modelo de 1 bit como disrupção-raiz, este documento contraria o resultado da varredura da própria
turma, que o elegeu em primeiro lugar. A rejeição segue o critério escrito e está registrada — mas
vale dizer que um critério que rejeita o item mais votado pela turma deveria ser olhado com
desconfiança pelo menos uma vez antes de ser aceito. O argumento a favor de reverter a rejeição
está na seção 12, escrito com a melhor força que consegui dar a ele.

## 8. O que a máquina errou

O que segue são divergências entre o que eu teria escrito de memória e o que a fonte aberta nesta
sessão efetivamente diz. Todas foram encontradas durante a redação, e todas mudaram o texto.

**1. Eu teria escrito que a Prompt API do Chrome já roda no celular. Ela não roda.** A premissa
inteira do tema — "o modelo roda no celular, no laptop e na aba do navegador" — me levou a supor que
a estabilização no Chrome 148 valia para Android. A documentação oficial lista explicitamente entre
as plataformas **não** suportadas: Chrome para Android, Chrome para iOS e ChromeOS que não seja
Chromebook Plus. Isso não é um detalhe: significa que, hoje, a porta "navegador" e a porta "celular"
não se cruzam, e a frase do tema descreve três caminhos separados, não um. Corrigi a seção 3 e usei
o fato como limite de D2.

**2. Eu teria escrito "3 bilhões de parâmetros em 4 bits", que é o número que circula. É 2 bits.**
O relatório técnico da Apple de julho de 2025 registra treino com consciência de quantização em
2 bits para o modelo de 3 bilhões. A diferença importa para este mapa porque é ela que explica como
o modelo cabe onde cabe — e porque "4 bits" é o valor correto para outro contexto (os modelos que o
WebLLM roda no navegador), o que torna a troca fácil de cometer e difícil de notar.

**3. Eu teria tratado a economia do BitNet como propriedade do modelo. É propriedade do runtime.**
O cartão do modelo avisa em maiúsculas que não se deve esperar nenhum ganho de velocidade, latência
ou energia usando o BitNet b1.58 2B4T com a biblioteca transformers padrão — e que o desempenho
pode ser igual ou pior que o de um modelo de precisão total. Os 0,4 GB e 29 ms só existem com o
bitnet.cpp. Esse aviso é parte do motivo de eu ter rejeitado o 1 bit como disrupção-raiz: a
eficiência ainda está presa a um caminho de execução específico, e não ao formato do peso.

**4. Eu teria datado o LiteRT-LM como lançamento de 2026. É de 24/09/2025.** O texto do tema o cita
junto de coisas de 2026 e eu segui a inércia. A data muda a leitura: não é um anúncio recente, é
infraestrutura com um ano de estrada, o que fortalece D1 em vez de enfraquecer.

**5. Um número que apareceu em busca e que eu não usei: "42% dos desenvolvedores rodam LLM
localmente em 2026".** Apareceu em resultado de busca, veio de blog comercial, e não consegui
rastrear até pesquisa primária com metodologia declarada. Não está no documento. Se estivesse, seria
o número mais citável dele — e é exatamente por isso que não está.

**6. Números sobre abliteração que apareceram em busca e que eu não usei: "3.500 modelos derivados"
e "13 milhões de downloads acumulados".** Abri a matéria da TechCrunch de 03/09/2026 justamente para
confirmá-los, e a matéria **não** traz nenhum desses números. Eles vieram de um agregado de
resultados de busca sem fonte primária identificável. O que ficou no documento é só o que a matéria
diz: a empresa, a data de constituição, o modelo hospedado, o perfil de cliente, o financiamento por
receita.

**7. A estatística brasileira não veio da fonte primária, e isso está declarado.** Tentei abrir o
PDF de principais resultados da TIC Domicílios 2025 no site do Cetic.br e o arquivo é imagem — não
foi possível extrair texto. Os 65%, os 87% da classe DE e o tamanho da amostra vieram da cobertura
do MobileTime sobre a divulgação de 09/12/2025. É imprensa especializada relatando coletiva, não o
relatório. Quem for usar o número num trabalho avaliado deve buscar o original.

**8. O que verifiquei e estava certo.** As atribuições que eu teria feito de memória sobre bitnet.cpp
(framework oficial da Microsoft para LLM de 1 bit), sobre o WebLLM reter cerca de 80% da vazão
nativa, e sobre o limiar de risco sistêmico do AI Act ser 10^25 FLOP bateram com as fontes. Isso não
significa que a memória seja confiável — significa que estas três estavam certas e as duas do item 1
e 2 estavam erradas, e que antes de checar não havia nenhuma diferença perceptível entre elas.

## 9. Três cenários para 2031

Os três partem do mesmo estado de setembro de 2026 e divergem numa variável só: **o que acontece com
a régua de hardware**. Não são previsões e não têm probabilidade atribuída — são leituras internamente
coerentes do mesmo mapa.

### Cenário A — "A função de sistema" (a régua desce devagar, e o fabricante fica no meio)

O modelo embutido no sistema operacional vira a forma normal de usar IA em tarefa pequena. Ninguém
mais escreve integração com fornecedor de modelo para resumir uma notificação. A camada que vendia
acesso desaparece sem barulho, absorvida pelo preço do software, e "tem IA" some dos materiais de
venda porque todo mundo tem.

O que se ganha: custo zero na borda, latência baixa, nada de dado saindo para tarefa trivial.

O que se perde: o fabricante do aparelho passa a ser quem decide qual inteligência cada aplicativo
alcança, e a matriz de compatibilidade vira uma forma de curadoria mais silenciosa que a loja de
aplicativos — porque não há revisão para recorrer, só um aparelho que não está na lista. Quem tem
celular de entrada usa o mesmo aplicativo sem as funções, e não fica sabendo por quê.

No Brasil, é o cenário em que os 65% que só acessam por celular ficam divididos por uma linha
invisível dentro do próprio celular.

### Cenário B — "A aba que pensa" (a régua desce rápido, e o navegador ganha a disputa)

A WebNN sai do Candidate Recommendation, os navegadores implementam, e a aba passa a alcançar a NPU.
O download de peso é resolvido por cache compartilhado — o modelo vira recurso do navegador, não da
página. Publicar uma ferramenta de IA volta a ser publicar um arquivo HTML.

O que se ganha: a distribuição por link, sem loja, sem conta, sem servidor. Para quem projeta mídia
e interação, é o cenário mais interessante dos três: uma obra interativa com comportamento
generativo passa a caber num endereço, e o custo de atender um milhão de visitantes é o mesmo de
atender um.

O que se perde: a web adquire uma instalação invisível. Gigabytes de peso ocupam o disco de quem
visitou, escolhidos por critério que o visitante não define e provavelmente não vê. A discussão de
consentimento sai do envio de dado e entra na execução de código, sem que exista vocabulário público
para isso.

Este cenário é o que mais depende de um evento datável e específico — a WebNN sair do estado em que
entrou em 10/09/2026 — e por isso é o mais fácil de acompanhar: dá para saber se está acontecendo
olhando uma página de status de especificação.

### Cenário C — "O peso solto" (a régua desce e ninguém organiza o que ficou para trás)

A parte que já está em movimento continua sem que nada a acompanhe. Centenas de milhares de pesos
derivados circulam sem procedência rastreável. Remover a guarda de um modelo é um serviço com preço
de tabela. Em algum momento entre 2027 e 2030, um peso com defeito sério está em uso em escala e não
existe mecanismo de recall.

A resposta institucional, quando vier, não vem sobre o peso — vem sobre o aparelho: o sistema
operacional passa a mediar o que qualquer modelo local pode acionar, porque é o único ponto que
ainda aceita atualização. O resultado é irônico e vale enunciar: o movimento que começou para tirar
a inteligência do controle de um intermediário termina entregando ao fabricante do aparelho um
controle mais fino do que o intermediário anterior tinha — sobre arquivo, rede, câmera e microfone,
e não sobre texto.

Este é o cenário que mais contraria a promessa do tema, e é também o que tem os sinais mais duros
hoje: 28.531 conversões contra 54 oficiais, e uma empresa vendendo remoção de guarda desde março
de 2026.

## 10. O experimento

**Nome.** O teto da sala.

**A pergunta.** Não "a IA local é possível?" — isso já está respondido. A pergunta é: **para quantas
pessoas desta sala, com os aparelhos que elas já têm no bolso e na mochila, ela é possível hoje?**
Este documento afirma, em vários pontos, que a régua de hardware é a variável que decide o mapa. O
experimento existe para transformar essa afirmação numa distribuição medida da própria turma, em
vez de uma frase.

**O que é.** Uma página única, servida por um endereço, que ao ser aberta executa três testes em
sequência e mostra o resultado na tela do próprio visitante:

1. **Porta do sistema.** Verifica se a API de modelo do navegador está disponível (`LanguageModel`
   e congêneres da Prompt API). Se estiver, mede o tempo até a primeira resposta de um prompt fixo
   e curto.
2. **Porta do WebGPU.** Verifica se há adaptador WebGPU e quanto de memória ele declara. Se houver,
   carrega o menor modelo viável via WebLLM, cronometra o download, cronometra a compilação de
   shader e mede tokens por segundo com o mesmo prompt fixo.
3. **Porta fechada.** Se nenhuma das duas abrir, registra por quê — sem WebGPU, sem memória, sistema
   não suportado, navegador não suportado.

Em todos os casos registra, sem identificar pessoa: categoria de aparelho (celular ou computador),
sistema, navegador e versão, memória declarada pelo adaptador, megabytes baixados, segundos até a
primeira resposta e tokens por segundo.

**O que se mede, e contra o que se compara.** A saída é um gráfico só, projetado na sala: cada
aparelho da turma como um ponto, eixo horizontal de tokens por segundo, eixo vertical de megabytes
que precisou baixar, e a cor indicando qual porta abriu. Ao lado, três linhas de referência tiradas
deste documento: os 41,1 tokens/s do WebLLM num MacBook Pro M3 Max, os requisitos publicados do
Chrome (mais de 4 GB de VRAM, ou 16 GB de RAM e 4 núcleos, e 22 GB livres), e a proporção nacional
de acesso exclusivo por celular (65%, e 87% na classe DE).

**Por que este experimento e não outro.** Porque ele é falsificável em dois sentidos opostos, e os
dois são informativos. Se a maioria da sala abrir pelo menos uma porta com desempenho utilizável, a
parte pessimista deste mapa — e1.2.2, e3.2, o Cenário A — está errada, e a régua já desceu mais do
que as fontes sugerem. Se a maioria não abrir nenhuma, ou abrir só no laptop e nunca no celular,
então a frase central do tema ("o modelo roda no celular, no laptop e na aba") descreve três
situações distintas, e o mapa deve ser lido com o Cenário A como leitura principal.

**O que ele não mede, e não deve fingir medir.** Não mede qualidade de resposta — o prompt é fixo
e curto de propósito, e nada do que sai dele diz se o modelo é bom. Não mede bateria nem
aquecimento, que e2.2.2 sugere serem a restrição real de uso continuado. Não é amostra de nada além
da própria turma, que é um recorte enviesado por definição: estudantes de computação de uma
universidade federal não são o parque de aparelhos do Brasil. O valor está em ser a régua **desta**
sala, medida por ela mesma, e não em generalizar.

**Custo e prazo.** Uma página estática, sem servidor de inferência, publicável em qualquer
hospedagem gratuita. O trabalho está em fazer os três testes degradarem sem travar num aparelho que
não os suporta — que é, aliás, exatamente o problema de engenharia que e3.2 descreve, vivido em
primeira pessoa.

## 11. Fontes

Vinte fontes, todas abertas e lidas nesta sessão em 11/09/2026. O que apareceu em resultado de busca
e não foi aberto não está aqui nem foi citado no documento (ver seção 8, itens 5 e 6).

**Modelos de precisão baixíssima**

1. Microsoft — repositório oficial do bitnet.cpp, framework de inferência de LLM de 1 bit.
   `https://github.com/microsoft/BitNet`
2. Ma, Wang et al. — *BitNet b1.58 2B4T Technical Report*, arXiv:2504.12285.
   `https://arxiv.org/abs/2504.12285`
3. Microsoft — cartão do modelo `bitnet-b1.58-2B-4T` no Hugging Face, com a tabela de memória,
   latência e energia e o aviso sobre a biblioteca transformers.
   `https://huggingface.co/microsoft/bitnet-b1.58-2B-4T`

**Modelo embutido no sistema operacional**

4. Apple Machine Learning Research — *Introducing the Third Generation of Apple's Foundation
   Models*, 08/06/2026.
   `https://machinelearning.apple.com/research/introducing-third-generation-of-apple-foundation-models`
5. Apple Machine Learning Research — *Apple Intelligence Foundation Language Models Tech Report
   2025*, julho de 2025.
   `https://machinelearning.apple.com/research/apple-foundation-models-tech-report-2025`
6. Apple Newsroom — *Apple aids app development with new intelligence frameworks and advanced
   tools*, 08/06/2026.
   `https://www.apple.com/newsroom/2026/06/apple-aids-app-development-with-new-intelligence-frameworks-and-advanced-tools/`
7. Android Developers — *Gemini Nano*, documentação oficial do AICore e das ML Kit GenAI APIs.
   `https://developer.android.com/ai/gemini-nano`
8. Google Developers Blog — *On-device GenAI in Chrome, Chromebook Plus, and Pixel Watch with
   LiteRT-LM*, 24/09/2025.
   `https://developers.googleblog.com/on-device-genai-in-chrome-chromebook-plus-and-pixel-watch-with-litert-lm/`
9. Chrome for Developers — *The Prompt API*, com requisitos de hardware e lista de plataformas não
   suportadas.
   `https://developer.chrome.com/docs/ai/prompt-api`

**Inferência no navegador**

10. Ruan, Qin, Parthasarathy et al. (CMU, SJTU, NVIDIA) — *WebLLM: A High-Performance In-Browser LLM
    Inference Engine*, arXiv:2412.15803v2, 13/04/2026.
    `https://arxiv.org/html/2412.15803v2`
11. Levine et al. — *Llamas on the Web: Memory-Efficient, Performance-Portable, and Multi-Precision
    LLM Inference with WebGPU*, arXiv:2605.20706, 20/05/2026.
    `https://arxiv.org/abs/2605.20706`
12. W3C — *Web Neural Network API*, Candidate Recommendation Draft de 10/09/2026.
    `https://www.w3.org/TR/webnn/`
13. Hugging Face — documentação do *Transformers.js*, com os backends suportados (ONNX Runtime,
    WASM como padrão de CPU, WebGPU), o aviso de que a API WebGPU ainda é experimental em muitos
    navegadores, e as opções de quantização (fp32, fp16, q8, q4).
    `https://huggingface.co/docs/transformers.js/en/index`

**Silício**

14. Computerworld — *Qualcomm's next Snapdragon mobile chip comes into focus with on-device AI*,
    10/09/2026.
    `https://www.computerworld.com/article/4220719/qualcomms-next-snapdragon-mobile-chip-comes-into-focus-with-on-device-ai.html`

**Adoção e comunidade**

15. Hugging Face — *State of Open Models: Summer 2026*, 14/08/2026.
    `https://huggingface.co/blog/state-of-open-models-summer-2026`
16. Lee, Howison, Lee e Li — *Open AI in the Wild: Adoption and Adaptation of Open Models on
    r/LocalLLaMA*, arXiv:2606.22211, 20/06/2026, aceito no FAccT'26.
    `https://arxiv.org/abs/2606.22211`

**Governança, responsabilidade e guardas**

17. EU Artificial Intelligence Act — *High-level summary*, com as obrigações de provedor de GPAI,
    a exceção de código aberto do artigo 53(2), o limiar de 10^25 FLOP e o calendário de aplicação.
    `https://artificialintelligenceact.eu/high-level-summary/`
18. TechCrunch — *Abliteration.ai is making a business out of removing AI guardrails*, 03/09/2026.
    `https://techcrunch.com/2026/09/03/abliteration-ai-is-making-a-business-out-of-removing-ai-guardrails/`

**Economia e recorte brasileiro**

19. TokenCost — *AI Price Index: LLM Costs Dropped 300x (2023-2026)*, com a série de preços por
    milhão de tokens desde março de 2023.
    `https://tokencost.app/blog/ai-price-index`
20. MobileTime — *TIC Domicílios 2025: 163 milhões de brasileiros acessaram a internet*, cobertura
    da divulgação de 09/12/2025 do CGI.br/Cetic.br.
    `https://www.mobiletime.com.br/noticias/09/12/2025/tic-domicilios-2025/`

## 12. Anexo — o levantamento bruto

### 12.1 A entrevista da fase 1 — o que foi respondido e por quem

Os seis pontos da fase 1 foram todos respondidos, e isso precisa de uma ressalva de honestidade: as
respostas não vieram de um solicitante presente na conversa. Esta rodada é uma execução automatizada
da skill, sem interlocutor humano disponível para responder no momento da entrevista; as respostas
foram entregues de antemão pelo operador da rodada, junto com a instrução de não parar para
perguntar. Elas são, portanto, respostas reais e completas — mas não houve possibilidade de
repergunta, que é parte do valor da fase 1. Registro isso aqui porque a skill exige que qualquer
coisa que falte na entrevista apareça por escrito, e "o solicitante não estava presente" é uma
informação desse tipo, mesmo com todos os campos preenchidos.

| Ponto da fase 1 | Resposta recebida |
|---|---|
| 1. Tema e recorte | "IA local: no dispositivo e no navegador" — tema 16 de 19 da disciplina, família "Criação e plataforma". Recorte: a inferência no aparelho do usuário final. |
| 2. Horizonte | 2031. |
| 3. Para quem | Quem projeta mídia e interação. |
| 4. Recorte geográfico | Global, com uma nota sobre o Brasil. |
| 5. Já descartado | O que já é comum em produto de massa (a régua da disciplina). Nenhuma outra exclusão. Ideias óbvias a excluir: as que serviriam para qualquer tema. |
| 6. Viés desejado | Neutro. Declarado no frontmatter e na seção 7. |

Dois pontos extras foram fornecidos e usados: nenhuma disrupção suspeita foi sugerida de antemão
("descubra"), e o critério de mudança de ideia declarado foi — evidência de que a adoção já passou
da maioria inicial na curva de Rogers, ou de que a tecnologia não rompe nada e só melhora o que
existe. Esse critério foi aplicado literalmente e é a razão da rejeição registrada em 12.2.

`confianca: media` no frontmatter, e não alta: a entrevista aconteceu, mas três das raízes se apoiam
parcialmente em anúncios de fabricante de 2026 cuja verificação independente ainda não existe (a NPU
da Qualcomm é anúncio de 10/09/2026, com detalhes prometidos para um evento que ainda não ocorreu;
o AFM 3 Core Advanced é descrito pela própria Apple). E não baixa, porque os números estruturais do
documento — requisitos do Chrome, medições do WebLLM e do LlamaWeb, contagens do Hugging Face,
TIC Domicílios — vêm de fonte aberta e verificável.

### 12.2 Tecnologias testadas e REJEITADAS, com o motivo

Esta é a seção que prova que o critério da fase 2 foi aplicado e não só declarado.

**Chamada de API de modelo na nuvem — rejeitada por MADURA.** Teste 1, primeira pergunta: três
implantações em produção em escala, sem apostar em nada? Sim, de sobra. Segunda pergunta: já é a
opção padrão em fluxo real, restando ficar mais barata? Sim — e o índice de preços que abri mostra a
queda de 200 a 300 vezes em três anos, que é exatamente "ficar mais barato sem mudar de natureza".
Entra na seção 3 como estado atual e como concorrente econômico de D1 e D2. Não entra na seção 4.

**Modelo pequeno rodando em servidor próprio (vLLM, Ollama em servidor, on-premises) — rejeitada
por MADURA.** Mesmo resultado. É a arquitetura padrão de quem tem exigência de residência de dado
e já resolve o problema de conformidade que e4.1 descreve, sem precisar de nada deste mapa. A
distinção que a disciplina desenhou — o aparelho do **usuário final** — é o que separa esta
rejeição de D1 e D2, e é uma distinção que se perde com facilidade em qualquer conversa sobre "IA
local".

**Modelo de 1 bit / quantização ternária (BitNet, bitnet.cpp) — rejeitada como DISRUPÇÃO-RAIZ,
mantida como mecanismo e wildcard.** Esta é a rejeição que precisa de explicação, porque contraria a
escolha número 1 da varredura da turma.

- *Teste 1:* não é madura. Três implantações em produção em escala, como opção padrão de algum
  fluxo? Não consegui citar nenhuma. O próprio repositório lista suporte a NPU como "coming next",
  e o cartão do modelo avisa que a eficiência só existe com o runtime dedicado.
- *Teste 2:* é emergente, sim. Existe fora do laboratório, com modelos publicados, otimizações
  datadas (15/01/2026, 20/07/2026) e números medidos.
- *Teste 3:* **falha.** A pergunta é o que deixa de fazer sentido se isto escalar. As respostas que
  consegui formular foram: fica mais rápido, fica mais barato, cabe em aparelho mais modesto, gasta
  menos energia. Todas são melhoria, e melhoria é exatamente o que o teste 3 exclui. A única
  resposta candidata a ruptura — "a NPU deixa de ser necessária, porque roda bem em CPU" — não se
  sustenta contra a evidência: a Qualcomm está investindo justamente em NPU com mais memória
  compartilhada, e o próprio bitnet.cpp lista NPU como próximo passo, o que indica complementaridade
  e não substituição.
- *Onde ficou:* como mecanismo dentro de D1 e D3 (é parte do como o modelo cabe no aparelho) e como
  wildcard 1 da seção 6 — o único evento capaz de colapsar a régua de hardware que sustenta a parte
  pessimista deste mapa.
- *O melhor argumento contra esta rejeição*, escrito com a força que ele merece: se o efeito de uma
  melhoria de eficiência é grande o bastante para mudar **quem** tem acesso — e não só quanto custa
  —, então ela deixa de ser melhoria e vira ruptura de categoria, porque a categoria "pessoa que não
  pode rodar IA" deixa de existir. É um argumento bom. Ele não venceu porque o teste 3 pede um ator
  ou prática **nomeável** que perca a razão de existir, e "a categoria dos excluídos" não é um ator
  com razão de existir. Mas quem discordar desta rejeição tem por onde discordar, e este parágrafo
  existe para isso.

**Private Cloud Compute da Apple — rejeitada por estar do outro lado da linha.** É nuvem, com
garantia criptográfica de privacidade. Não é IA local por nenhuma definição usada aqui. Ficou na
seção 6 como sinal fraco número 5, porque é o movimento mais claro no sentido **contrário** ao deste
mapa e merece ser observado.

**Modelo pessoal treinado do zero pelo usuário — rejeitada como ESPECULAÇÃO.** Não passa nem no
teste 2: não existe fora do laboratório em nenhuma forma que uma pessoa comum alcance. O que existe
é ajuste por adaptador (LoRA, exposto pelo framework da Apple) e memória externa, que é outra coisa.
O tema pergunta "se cada pessoa tem um modelo próprio, offline, que aprende com ela" — e2.2 e e6
respondem à versão que tem mecanismo hoje; a versão "treina o seu" não tem.

### 12.3 Efeitos CORTADOS pela auditoria da fase 4, com o motivo

**"A nuvem encolhe: a inferência local reduz a demanda por datacenter."** Cortado por extrapolação
linear e por contradizer a evidência disponível. É a conclusão que o tema convida a tirar na primeira
ordem, e não se sustenta: modelos que rodam no aparelho são os pequenos, e modelos pequenos
respondem por 83% dos downloads mas não pelo trabalho pesado; o treino continua na nuvem e cresce; e
a Apple está oferecendo nuvem de graça a desenvolvedor pequeno, o que é o oposto de retração. Não
encontrei mecanismo narrável que ligue "o resumo de notificação roda no celular" a "a demanda por
datacenter cai". Cortado inteiro.

**"Cada pessoa treina o seu próprio modelo, e a inteligência vira bem pessoal como o diário."**
Cortado por dois dos três critérios de parada simultaneamente: não há mecanismo narrável em uma
frase entre o estado de hoje e esse estado (falta o passo do treino acessível), e o efeito ultrapassa
o horizonte de 2031. A parte que **tem** mecanismo — um modelo que acumula histórico de uma pessoa
por ajuste e memória local, sem sincronizar — ficou como e6, com sinal fraco e confiança baixa, e é
dela que saem as consequências de herança e apreensão que o tema levanta na 3ª ordem.

**"A censura desaparece porque o modelo é local."** Cortado por elo causal invertido. A formulação
supunha que, sem intermediário, não há o que censurar. O que a evidência mostra é diferente e virou
e5.1.1: a guarda não some, migra de lugar — do peso, que não é mais corrigível, para o aparelho, que
ainda é. Manter a versão original seria manter uma afirmação que a própria fonte sobre abliteração
contradiz, já que o negócio de remover guarda só existe porque a guarda existe e é removível, não
porque ela tenha deixado de ser aplicada.

**"O desenvolvedor de back-end de IA perde o emprego."** Cortado por ser genérico: é um efeito que
se aplicaria a qualquer disrupção de infraestrutura, sem nada de específico a este tema. É o terceiro
critério de parada da fase 3.

### 12.4 Efeitos REBAIXADOS ou REESCRITOS, com o motivo

| Efeito | O que mudou | Por quê |
|---|---|---|
| e6 | `sinal: medio` → `sinal: fraco` | O que existe hoje são protótipos citados no enunciado do tema (aura-on-device, SelfOS, mecha-factory), não produto em uso. Protótipo interessante não é sinal de mercado. |
| e5.1.1 | reescrito | A versão original ("o fabricante do aparelho vira o guardião da inteligência") repetia a formulação do enunciado do tema sem narrar o passo intermediário. A versão final nomeia o mecanismo: a guarda migra porque o peso não é mais corrigível. |
| e1.2.1 | mantido, com ressalva na seção 7 | Supõe velocidade regulatória sem precedente: o caso comparável mais próximo levou mais de uma década entre processo e remédio. |
| e2.1.1, e4.2.1 | `sinal: fraco` | Derivados por analogia com outro domínio (exigência de código em publicação científica; cadeado de certificado), sem sinal próprio no domínio da IA local. |
| e4.1.2 | mantido com `confianca: baixa` | É derivação, não observação: não encontrei nenhum caso documentado de auditoria frustrada por ausência de log de inferência local. |

### 12.5 Buscas que não deram em nada, e fontes que não abriram

**Não abriram, e por isso não estão na seção 11 nem no contador de fontes:**

- `https://cetic.br/media/analises/tic_domicilios_2025_principais_resultados.pdf` — o PDF de
  principais resultados da TIC Domicílios 2025 é composto por imagens; não foi possível extrair
  texto. Os números brasileiros vieram da cobertura do MobileTime (fonte 20). Declarado na seção 8,
  item 7.
- `https://www.androidauthority.com/gemini-nano-features-devices-3490062/` — HTTP 403. Era a fonte
  que eu queria para a matriz de aparelhos compatíveis com Gemini Nano. Consequência: o documento
  **não** cita nenhum modelo específico de celular como compatível ou incompatível, embora essa
  lista seja central para e1.2.2. É a lacuna mais relevante deste levantamento.
- `https://www.androidauthority.com/snapdragon-qualcomm-snapdragon-8-elite-gen-6-npu-3709726/` —
  HTTP 403. Substituída pela Computerworld (fonte 14), que traz os mesmos números.
- `https://developer.apple.com/documentation/foundationmodels` — a página retornou apenas o título,
  sem conteúdo extraível. Os dados sobre o framework vieram do relatório técnico (fonte 5) e do
  anúncio do Newsroom (fonte 6).
- `https://www.intel.com/content/www/us/en/developer/articles/technical/web-developers-guide-to-in-browser-llms.html`
  — este caso é diferente dos anteriores e merece registro preciso: a página **foi lida** nesta
  sessão, e dela vinha a afirmação de que o WebLLM não alcança NPU enquanto Transformers.js e ONNX
  Runtime Web alcançam, via WebNN. Ela saiu da lista de fontes porque o servidor da Intel responde
  403 a verificação automatizada que se identifique como navegador (responde 200 sem identificação),
  e uma fonte que o conferidor da disciplina não consegue abrir não deve ser contada como aberta.
  A consequência no texto: a seção 3 deixou de afirmar qual runtime alcança NPU e passou a afirmar
  apenas o que as fontes 10, 11, 12 e 13 sustentam — que a WebNN é a única via para NPU na web, que
  ela está em Candidate Recommendation Draft, e que as medições publicadas são todas sobre WebGPU.
  A afirmação mais específica foi perdida; a conclusão de que D2 ainda não alcança a NPU não.

**Buscas que não produziram fonte utilizável:**

- Adoção medida de IA local por desenvolvedores, em percentual, com metodologia declarada. A busca
  devolveu números de blogs comerciais ("42% dos desenvolvedores em 2026") sem rastro até pesquisa
  primária. Nada foi usado. Seria o número mais útil deste documento e ele não existe em fonte que
  eu tenha conseguido verificar.
- Documentação de caso em que um modelo já distribuído precisou ser corrigido e não pôde — o cenário
  central do wildcard 2 e da raiz D3. Não encontrei nenhum. A busca por "on-device model security
  patch, stale model, cannot be recalled" devolveu boletins de segurança do Android, que tratam de
  vulnerabilidade de software e não de peso de modelo. A ausência é informativa: o problema que D3
  descreve ainda não produziu um caso público citável, o que é consistente com ele ser ruptura
  emergente e não estado atual.
- Números de adoção do Foundation Models framework por aplicativos de terceiros. A Apple divulga
  exemplos nominais (SmartGym, Stoic, VLLO) e incentivos, não contagem. Sem número, e1 se apoia em
  disponibilidade da plataforma e não em uso medido — o que está declarado na seção 7 como
  extrapolação.

### 12.6 O que o enunciado do tema trouxe e este documento não usou

O enunciado lista muitas ferramentas trazidas pelas varreduras da turma — `privateGPT`,
`hermes-agent`, `opencode`, `jan`, `gpt4all`, `llama.cpp-ts`, `expo-ai-kit`, `openvino-genai-node`,
`@pbji/piper-tts-web`, `unsloth`, `Localforge`, `Termly`, `mecha-factory`, `Gestalt Village`,
`aura-on-device`, `SelfOS`. Nenhuma delas foi aberta ou verificada nesta sessão, e por isso nenhuma
é citada como evidência de nada no corpo do documento — aparecem apenas onde o próprio enunciado é
referido, como no rebaixamento de e6 em 12.4. O enunciado é contexto da disciplina, não fonte; tratá-lo
como fonte seria importar para o documento uma camada de afirmação que ninguém checou. Quem for
desenvolver este mapa adiante tem aí uma lista pronta de dezesseis verificações que valeria a pena
fazer — em particular `Termly`, que o enunciado aponta como o sinal do computador pessoal virando
servidor de IA pessoal, e que é o único item da lista que tocaria diretamente em e6.2.
