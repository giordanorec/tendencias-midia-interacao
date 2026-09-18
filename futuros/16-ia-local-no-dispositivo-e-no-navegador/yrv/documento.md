---
tema: "IA local: no dispositivo e no navegador"
slug: ia-local-no-dispositivo-e-no-navegador
autor_login: yrv
zona_de_interesse: Criação e plataforma
data: 2026-09-17
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 13
efeitos_ordem_3: 13
tecnologias_citadas: [BitNet b1.58, bitnet.cpp, quantização ternária, QAT, Prompt API do Chrome, Gemini Nano, Gemma 4, Gemma 197M, LiteRT-LM, ML Kit GenAI, AICore, Apple Foundation Models, Core AI, MLX, Private Cloud Compute, Phi Silica, Windows AI Foundry, Foundry Local, WebGPU, WebLLM, llama.cpp, Ollama, LM Studio, Jan, NPU, Hailo-10H, LoRA, EdgeTune, MobileFineTuner, GGUF]
fontes: 25
confianca: media
experimento: "Três Andares — a mesma peça de mídia interativa rodando no modelo do navegador, num modelo baixado por WebGPU e numa API na nuvem, medindo ao vivo latência, bateria, falha e o que sai do aparelho"
skill_usada: futurizacao-yrv
publico_ok: false
---

## 1. Resumo

A inferência está descendo para o aparelho do usuário final por três caminhos distintos, e só
um deles é o que a manchete promete. O primeiro é a precisão baixíssima: pesos ternários e
quantização com treino (QAT) derrubaram a memória de um modelo útil para a faixa do gigabyte,
e com isso hardware comum voltou a ser alvo de desenvolvimento. O segundo é a inferência virar
serviço do sistema: Chrome, Android, iOS e Windows hoje expõem um modelo embutido por API
pública, sem chave, sem conta e sem custo por chamada — o que muda quem pode publicar um
produto com IA, não só quanto custa. O terceiro é a adaptação: frameworks de 2026 já fazem
ajuste fino com LoRA no próprio telefone, o que desloca a personalização da conta do provedor
para um arquivo no aparelho. O que este mapa sustenta é que os três avançam e que nenhum deles
tira a nuvem do caminho: o arranjo que está de fato sendo construído é um roteador controlado
pelo fabricante do sistema, em que o modelo local é o andar barato e o remoto é o andar de
cima. E o que ele sustenta com mais convicção é a restrição que quase não aparece na conversa:
o gargalo de 2026 não é FLOP, é memória, bateria e calor — a DRAM chegou a quase 60% do custo
de fabricação de um celular abaixo de US$ 400, o iPhone 16 Pro perde 41,5% da velocidade por
aquecimento em minutos, e a inferência local emite de 5 a 7 vezes mais CO₂ por token do que a
mesma inferência em lote no servidor. "Grátis depois de baixado" não é gratuidade: é a conta
mudando de endereço, do provedor para o bolso de quem compra o aparelho.

## 2. O tema

O objeto deste mapa é a **inferência no dispositivo do usuário final** — celular, laptop comum,
aba do navegador — com qualidade suficiente para agente, voz e visão. Não é o dado local nem a
identidade local (isso é o tema 17, e a distinção importa: aqui o que fica é o *modelo*, lá o
que fica é o *dado* e a *conta*). Não é voz gerativa (tema 13). Não é o navegador como
plataforma 3D (tema 15). E não é rodar modelo pequeno no servidor da própria empresa, que é
prática corrente e entra aqui apenas como substrato.

Onde encosta em mídia e interação: em três pontos concretos. **No custo de existir** — uma peça
interativa que chama um modelo hoje tem uma conta que cresce com o público, o que faz com que
experimento de mídia morra por sucesso; se a inferência é do aparelho, o custo marginal do
público é zero para quem publica e não-zero para quem consome. **Na latência e na
continuidade** — interação que depende de ida e volta à rede tem um piso de resposta e um modo
de falha (offline) que exclui gêneros inteiros; um modelo local muda o que se pode desenhar
como resposta contínua, ambiente ou acompanhamento. **Na autoridade** — quando o modelo vem
embutido no sistema operacional, quem decide o que ele recusa é o fabricante do aparelho, e
essa decisão vira comportamento padrão de todos os produtos que a usam.

Por que merece um mapa de futuro e não um levantamento de estado da arte: porque as três
rupturas listadas na seção 4 têm precondições nomeáveis e ainda não cumpridas, e porque a
direção do arranjo final está genuinamente em disputa. Um levantamento diria "há modelos
rodando no navegador desde 2023". Um mapa tem que responder a outra coisa: se a inferência
deixa de ser um serviço comprado e passa a ser uma capacidade do aparelho, **o que deixa de
ter valor** — e quem fica de fora. A resposta a essas duas perguntas não está no estado da
arte; está na interação entre custo de memória, regulação de plataforma e regime de
responsabilidade, que é onde este mapa trabalha.

## 3. Onde isso está hoje

### O que já existe e funciona

**O modelo embutido no navegador saiu do experimento.** A Prompt API do Chrome está
**estável desde o Chrome 138**, com um *origin trial* apenas para parâmetros de amostragem no
Chrome 148; a documentação da própria Google descreve entrada de texto, áudio e imagem, saída
em texto, e suporte a cinco idiomas — `en`, `ja`, `es`, `de`, `fr` [1]. O post da Google I/O
2026 registra o Chrome 148 com saída estruturada (JSON com esquema) e cita a **Trip.com**
gerando resumos de voo e roteiros inteiramente no cliente [3]. Há também um modelo de
propósito estreito, **Gemma 197M**, apresentado como caminho para alcançar mais aparelhos [3].

**O modelo embutido no sistema operacional virou API pública nos três grandes.** No Android, o
caminho recomendado é a ML Kit GenAI Prompt API sobre o AICore; a Google anunciou o **Gemma 4**
em 02/04/2026, com E2B e E4B para uso local, Gemini Nano 4 "até 4× mais rápido e usando até 60%
menos bateria", e Gemini Nano já em **mais de 140 milhões de aparelhos** [4]. O runtime
LiteRT-LM, em post de 19/05/2026, reporta 52 tok/s no Android (GPU/OpenCL), 56 tok/s no iOS
(Metal) e 76 tok/s na web (WebGPU, MacBook Pro M4 Max), rodando o Gemma 4 E2B — modelo de
~2,58 GB — com 607 MB em CPU móvel da Apple [12]. Na Apple, a sessão da WWDC26 sobre o
Foundation Models framework anuncia o framework **indo para código aberto**, um modelo local
reconstruído com melhor chamada de ferramenta, **entrada de imagem**, APIs para inspecionar
`contextSize` e contar tokens, ferramentas de sistema (OCR, código de barras e busca no
Spotlight para RAG local) e, sobretudo, um protocolo `LanguageModel` que permite trocar o
modelo por baixo da mesma sessão [18]. No Windows, a plataforma deixou de ser exclusiva de
NPU: a leitura de mercado registra o Windows AI Foundry cobrindo NPU, GPU e CPU e integrando
catálogos abertos, inclusive Ollama.

**A precisão baixíssima entregou artefato, não só paper.** O relatório técnico do BitNet b1.58
2B4T (arXiv 2504.12285, submetido em 16/04/2025) descreve um modelo nativo de 1 bit com 2 bilhões
de parâmetros treinado em 4 trilhões de tokens, com desempenho "em pé de igualdade" com modelos
abertos de precisão total de tamanho semelhante [8]. O cartão do modelo no Hugging Face dá os
números que interessam ao aparelho: **0,4 GB de memória não-embedding** contra 1,4–4,8 GB dos
comparáveis, **29 ms de latência de decodificação em CPU** contra 41–124 ms, e **0,028 J por
token** contra 0,186–0,649 J [19]. O repositório oficial registra atividade contínua em 2026:
otimização de inferência em CPU em **15/01/2026** (1,15× a 2,1× sobre a implementação original),
modelos de *embedding* BitNet em **20/07/2026** e um motor de ASR multilíngue em tempo real,
VibeASR.cpp, em **23/07/2026** [2].

**O caminho amador está pronto.** Ollama e LM Studio são instalação de um comando, com catálogo
e interface, e a leitura corrente do campo é que rodar modelo local deixou de ser demonstração
e virou rotina de quem trabalha com isso. Essa parte é **madura** — e é por isso que ela não
está na seção 4.

**A base gráfica da web chegou.** O caniuse, consultado em 17/09/2026, dá **87,35%** de suporte
global a WebGPU, com Chrome 113+, Edge, Opera, Chrome para Android 152+, Safari iOS 26+ e
Samsung Internet 24+ [11].

### O que existe e não funciona

**Confiabilidade de chamada de ferramenta abaixo de 2B é ruim, e a diferença entre modelos é
brutal.** Shahriar e Mastoi (University of the West of England), em 07/09/2026, testaram cinco
modelos abertos com menos de 2B em 100 prompts controlados e cinco ferramentas simuladas:
Qwen2.5-1.5B acerta 75% (guloso) e 79% (amostragem); Qwen2.5-0.5B acerta 72% no guloso e
despenca para 32% com amostragem; **Phi-1.5, Pythia-1.4B e TinyLlama-1.1B ficam em 0%, 3% e 7%**.
Só 5 das 1.000 respostas saíram como JSON válido sem mecanismo de recuperação, e 89,4% das 658
falhas foram de recuperação de JSON [13]. Na prática de quem usa, o retrato é o mesmo: em
18/04/2026, um praticante deu um fluxo agêntico real com ferramentas MCP a sete modelos locais
e relatou que **dois se sustentaram** — variantes densas do Gemma 4 —, enquanto arquiteturas MoE
e elásticas entraram em laço repetitivo e alguns modelos narraram sucesso sem ter escrito nada
em disco [14].

**Sustentar a inferência no celular é um problema térmico, não de pico.** Tummalapalli e
colegas (arXiv 2603.23640v2, 07/06/2026) mediram Qwen 2.5 1.5B em 4 bits em quatro plataformas:
o **iPhone 16 Pro cai de 40,5 para 23,7 tok/s (−41,5%)** sob carga sustentada; o S24 Ultra cai
15%; a RTX 4050 cai 5%; e a NPU dedicada Hailo-10H mantém 6,91 tok/s com **0,04% de degradação**
a 1,87 W [15]. A conclusão deles é a que importa para quem desenha interação: o teto da NPU
dedicada (6,9 tok/s) não serve para resposta interativa, e serve muito bem para trabalho
assíncrono e permanente.

**O balanço ambiental é contra o local.** Guégain e Coignion (arXiv 2609.11940, 10/07/2026)
mediram 18 configurações de três famílias em iPhone 14 e Pixel 8 contra uma A100: a inferência
no aparelho é em média **3× menos eficiente em energia** que a inferência em lote no servidor, e
emite **5 a 7 vezes mais CO₂ por token**, sendo **88–90% desse impacto carbono embutido do
aparelho**, não eletricidade. Nenhuma variação realista de matriz elétrica ou de vida útil de
bateria inverte o resultado [16].

**Os números bonitos da precisão baixíssima dependem do kernel certo.** O próprio cartão do
BitNet avisa, em destaque, para **não** esperar ganho algum de velocidade, latência ou energia
usando o modelo com a biblioteca `transformers` padrão — sem os kernels do bitnet.cpp, o
desempenho é comparável ou pior que precisão total [19].

**O requisito de hardware exclui quase todo mundo.** A Prompt API do Chrome exige
**16 GB de RAM, mais de 4 GB de VRAM e 22 GB livres** no volume do perfil, e **não existe em
Chrome para Android nem iOS** [1]. No Android, o Gemini Intelligence foi anunciado em 18/05/2026
com piso de **12 GB de RAM** e suporte a Gemini Nano v3 [6]. Para quem está abaixo disso, a
resposta da Google não é local: o **Gemini Go**, anunciado em 04/06/2026 para aparelhos de 2 GB
de RAM em mercados emergentes, incluindo o Brasil, é explicitamente **híbrido, com processamento
em nuvem** [5].

### Quem está construindo, e com que interesse

Microsoft (BitNet, Phi/Aion, Windows AI Foundry), Google (Gemini Nano, Gemma, AICore, LiteRT-LM,
Prompt API do Chrome), Apple (Foundation Models, Core AI, MLX, Private Cloud Compute), os
fabricantes de silício, e um ecossistema aberto (llama.cpp, Ollama, LM Studio, Jan, WebLLM/MLC,
Hugging Face/GGUF). O detalhe que mais informa o mapa é o desenho da Apple: junto com o modelo
local, a mesma API oferece o **Private Cloud Compute** com 32 mil tokens de contexto,
raciocínio com nível ajustável e **camada gratuita** para desenvolvedores abaixo de 2 milhões de
downloads — e pacotes Swift da Anthropic e da Google para modelos de fronteira, pelo mesmo
protocolo [18]. Ou seja: o framework "no dispositivo" chegou a 2026 como **um roteador de
modelos**, em que o local é o degrau inicial.

### O contexto regulatório que já está de pé

Em **16/07/2026** a Comissão Europeia emitiu duas decisões vinculantes sob o DMA ordenando ao
Google abrir ao Android a integração de nível de sistema hoje reservada ao Gemini: palavra de
ativação, contexto de tela, execução de tarefa entre apps e **recursos de hardware, com
prioridade de escalonamento e acesso a processamento neural em igualdade** — prazo de
implementação em julho de 2027 [10]. Do lado da responsabilidade, a Diretiva 2024/2853 trata
**software e sistemas de IA como produto** (art. 4(1) e considerando 13), aplica-se a produtos
colocados no mercado **a partir de 09/12/2026** (art. 2(1)), impede o fabricante de se eximir
alegando defeito posterior quando o problema está em atualização de software ou na **falta de
atualização necessária à segurança** (art. 11(2)), e **exclui do regime o software livre e
aberto fornecido fora de atividade comercial** (art. 2(2)) [23]. Sobre o AI Act, as orientações
da própria Comissão dizem que quem ajusta ou modifica um modelo **só vira provedor em
circunstâncias excepcionais — quando a modificação usa mais de um terço do compute de treino
original** —, e que a fiscalização plena, com multas, vale **a partir de 02/08/2026** [24].

### A nota sobre o Brasil

O TIC Domicílios 2025, divulgado em 09/12/2025 a partir de 24.535 entrevistas feitas entre março
e agosto de 2025, dá o recorte que desmonta a leitura otimista: **65% da população acessa a
internet exclusivamente pelo celular** (5 pontos acima de 2024), e o número varia de **5% na
classe A a 67% na C e 87% na DE**; **32% dos domicílios têm ao menos um computador** — 97% na
classe A, **10% na DE** [21][22]. Cruzando com [1]: a forma mais acessível de IA local hoje, o
modelo embutido no navegador, exige um computador com 16 GB de RAM e mais de 4 GB de VRAM, e
não roda em celular. No recorte brasileiro, "IA local" em 2026 não é a versão popular da IA —
é a versão cara.

E o preço vai na direção errada: memória chegou a **quase 60% do custo de fabricação de
celulares abaixo de US$ 400** no primeiro trimestre de 2026, ultrapassando **64%** nos aparelhos
abaixo de US$ 99, proporção que quase dobrou entre o terceiro trimestre de 2025 e o primeiro de
2026; a LPDDR4X subiu 70–75% em um único trimestre, e a projeção para os aparelhos abaixo de
US$ 400 é de queda de 22% nos embarques em 2026, enquanto os acima de US$ 400 crescem 5,7% [9].

## 4. As disrupções-raiz

Antes das três: o registro do que foi **recusado como maduro** está na seção 12, com o teste que
reprovou cada item. Em resumo: chamar API de modelo na nuvem, rodar modelo quantizado em 4 bits
num laptop via Ollama ou LM Studio, rodar modelo pequeno em servidor próprio e usar WebGPU como
API gráfica são todos maduros — entram neste mapa como substrato, na seção 3, e não como raiz.
Um item foi recusado por um motivo diferente e mais interessante: o **roteador híbrido
local↔nuvem** (Private Cloud Compute, Gemini Go) é inovação de verdade, mas é **H2−** — escora o
presente, faz a nuvem durar mais usando o local como degrau barato. Ele não é raiz; é a força
contrária mais forte deste mapa, e aparece dentro das rodas como efeito.

### Raiz 1 — A precisão baixíssima torna o hardware comum suficiente

**O que rompe.** Rompe o pressuposto de que rodar um modelo útil exige acelerador dedicado e
memória de placa de vídeo. Com pesos ternários e QAT, a unidade de conta deixa de ser o FLOP e
passa a ser o byte: 0,4 GB de memória não-embedding e 0,028 J por token num modelo de 2B [19].
A competência que perde valor é a de **dimensionar e operar servidor de inferência para carga
leve** — e, com ela, a cadeia de revenda de token para tarefas pequenas (resumir, classificar,
reescrever, extrair). A porta de entrada é dupla e clássica: pela **baixa do mercado**, máquinas
sem GPU e aparelhos que nenhum provedor de nuvem quer como cliente; e por **mercado novo**,
o trabalho assíncrono e permanente que nunca foi viável pagar por chamada — a NPU de 1,87 W que
mantém 6,9 tok/s indefinidamente [15] não compete com a nuvem, ela habilita um gênero que a
nuvem não atende.

**Por que agora e não há cinco anos.** Sinal datado: o cartão público do BitNet b1.58 2B4T com
números de memória, latência e energia medidos [19]; o relatório técnico de abril de 2025 [8]; e
três entregas do repositório oficial em 2026 — otimização de CPU em 15/01/2026, *embeddings*
ternários em 20/07/2026 e ASR em tempo real por I2_S em 23/07/2026 [2]. Do lado do modelo
pronto para telefone, o Gemma 4 E2B cabe em 607 MB numa CPU móvel da Apple [12]. Há cinco anos
não existia nem modelo nativo de baixíssima precisão treinado em escala nem kernel que
entregasse o ganho.

**O que ainda falta acontecer.** Falta o ganho existir **fora do runtime dedicado**: enquanto o
próprio cartão do modelo avisa que com `transformers` não há ganho nenhum [19], a precisão
baixíssima é uma ilha, não uma propriedade do ecossistema. E falta subir de tamanho: o artefato
demonstrado é 2B; o que mudaria o mapa é um modelo nativo ternário acima disso, treinado do
zero, com confiabilidade de ferramenta comparável à dos densos de 8B a 30B que hoje são os
únicos que se sustentam num fluxo agêntico [14].

### Raiz 2 — A inferência vira serviço do sistema operacional e do navegador

**O que rompe.** Rompe o pressuposto de que colocar IA num produto exige **backend, chave e
conta**. Quando o modelo é uma chamada do sistema, a competência que perde valor não é a de
treinar modelo — é a de **operar a infraestrutura entre o produto e o modelo**: gestão de
chave, cota, faturamento por uso, proxy, cache, e o próprio contrato com o provedor. Isso muda
quem pode publicar: uma página estática passa a poder ter IA. A porta de entrada é a **baixa do
mercado** — todo o software pequeno, experimental, de autor, institucional e educacional que
nunca teve orçamento de token e por isso simplesmente não existia com IA dentro.

**Por que agora e não há cinco anos.** Sinal datado: Prompt API **estável** no Chrome 138, com
multimodalidade e saída estruturada no 148 [1][3]; Gemma 4 e Gemini Nano 4 anunciados em
02/04/2026, com Nano já em mais de 140 milhões de aparelhos [4]; LiteRT-LM publicado em
19/05/2026 com números de throughput em Android, iOS e web [12]; e, na WWDC26, o Foundation
Models indo para código aberto, com visão, ferramentas de sistema e o protocolo `LanguageModel`
[18]. Uma marca com mais de 400 milhões de cadastros já usa o caminho em produção [3].

**O que ainda falta acontecer.** Falta cobertura, e falta contrato. Cobertura: enquanto o
requisito for 16 GB de RAM, mais de 4 GB de VRAM e nenhum suporte em celular [1], "IA no
navegador" é um recurso de estação de trabalho. Contrato: quem publica precisa saber **qual**
modelo vai encontrar no aparelho, e por quanto tempo — hoje o desenvolvedor escreve contra uma
capacidade que o fabricante troca por atualização, sem versionamento estável exposto ao produto.
Sem isso, o caminho serve para enfeite e não para função crítica.

### Raiz 3 — A adaptação sai do servidor: o modelo aprende no aparelho e o adaptador vira bem pessoal

**O que rompe.** Rompe o pressuposto de que **personalizar exige entregar o histórico**. Hoje o
que faz um assistente ser "o seu" mora na conta do provedor. Se o ajuste acontece no aparelho, o
que faz o modelo ser seu passa a ser um arquivo — um adaptador — que está com você, e a
competência que perde valor é a **retenção por acúmulo de contexto**: o fosso de quem guarda o
seu histórico. A porta de entrada é **mercado novo**: quem não pode enviar o dado (saúde,
jurídico, escola, órgão público sob LGPD) e quem não quer — dois grupos que hoje não são
clientes de personalização nenhuma.

**Por que agora e não há cinco anos.** Sinal datado: o MobileFineTuner (Geng, Zhao, Lu e Luo,
arXiv 2512.08211, 09/12/2025) faz ajuste fino completo e por LoRA **em telefone comum**,
implementado em C++, medido em Pixel 8, Pixel 7 Pro, Pixel 8 Pro e MacBook Air M2 [25]; e a
linha de trabalho sobre personalização contínua no dispositivo (EdgeTune, EAISS 2026) reporta
reduções de 70–80% em tempo e energia por passo — número que **não consegui apurar na fonte
primária**, porque a página da ACM devolveu 403, e por isso não o uso como âncora. Do lado
prático, a camada de arnês que torna modelo pequeno confiável já é objeto de pesquisa aplicada
[13][14].

**O que ainda falta acontecer.** Falta caber. O próprio MobileFineTuner registra que o **Pixel 8,
com 8 GB de RAM, não conseguiu acomodar o ajuste do Qwen2.5-0.5B** por causa da sobrecarga do
sistema, e que o pico de RSS vai de 3,7 GB a 25,4 GB conforme o modelo [25]. Enquanto o ajuste
de um modelo de meio bilhão de parâmetros não couber num aparelho de 8 GB, "cada um treina o
seu" é bancada, não produto. E falta formato: um adaptador que só serve para o modelo exato em
que foi treinado não é bem pessoal — é refém.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A precisão baixíssima (pesos ternários e QAT) torna o hardware comum suficiente para inferência útil
    efeitos:
      - id: e1
        ordem: 1
        efeito: O custo marginal de uma resposta deixa de ser linha de orçamento no software de consumo, e o preço do produto volta a ser dominado por distribuição e suporte
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Produtos de mídia passam a embutir o modelo no próprio binário e a cobrar uma vez, reabrindo a licença perpétua onde a assinatura existia para pagar a inferência
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A loja de aplicativos passa a tratar peso de modelo como conteúdo distribuível, com regra própria de tamanho, versão e revisão
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O fabricante de memória, e não o de acelerador, passa a ser o gargalo que decide quem tem IA local
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: IA no aparelho vira atributo de faixa de preço e entra na disputa sobre publicidade enganosa e obsolescência programada
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O parque instalado antigo volta a ser alvo de desenvolvimento, e máquina sem acelerador dedicado deixa de significar exclusão automática
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Escola e serviço público passam a especificar IA que roda no equipamento que já possuem, em vez de contratar nuvem por usuário
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Compra pública passa a exigir modelo auditável e executável offline como requisito de edital, e não como diferencial de proposta
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: A medida de qualidade de um modelo pequeno deixa de ser conhecimento geral e passa a ser confiabilidade de chamada de ferramenta
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Cresce uma camada de arnês — validação de esquema, repetição, recuperação de saída malformada — e é nela que passa a morar a engenharia do produto
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Quem projeta interação com IA passa a ser formado para desenhar o comportamento na falha, e não para escrever o texto do pedido
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A inferência vira serviço do sistema operacional e do navegador, sem chave, sem conta e sem custo por chamada
    efeitos:
      - id: e4
        ordem: 1
        efeito: Publicar um produto com IA deixa de exigir backend, chave e contrato, e o custo de entrada cai para o de uma página estática
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Volta o software pequeno e de autor com IA dentro, e a mídia interativa experimental deixa de depender de crédito de API para existir
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: O ensino de programação criativa passa a tratar o modelo como recurso disponível do navegador, como já trata áudio e canvas
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: O fabricante do sistema passa a decidir o que o modelo embutido recusa, e essa recusa vira o comportamento padrão de todos os produtos que a usam
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: A moderação de conteúdo desce da plataforma para o sistema operacional, e a disputa sobre o que pode ser dito muda de endereço, do serviço para o aparelho
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.3
            ordem: 2
            efeito: Quem escreve para a web passa a tratar o modelo como recurso de capacidade variável, e se firma um padrão de degradação graciosa do local para o remoto
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.3.1
                ordem: 3
                efeito: Acessibilidade e idioma passam a ser decididos no mesmo ponto em que se decide a IA, porque o modelo local cobre poucas línguas e a alternativa é o dado sair do aparelho
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: A nuvem não sai de cena, ela se reposiciona como o andar de cima de um roteador de modelos que o fabricante do sistema controla
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Quem vende modelo passa a disputar a posição de padrão do sistema operacional em vez de audiência própria, e a distribuição volta a ser o ativo decisivo
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: O regulador trata a escolha do modelo padrão como tratou o navegador padrão, com tela de escolha, interoperabilidade e acesso equivalente ao acelerador
                sinal: medio
                prazo: 2030
                confianca: media
          - id: e5.2
            ordem: 2
            efeito: O acesso à NPU vira recurso escasso e arbitrado, disputado entre aplicativos como se disputou a barra de endereços
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Surge uma cota de inferência local por aplicativo, com o sistema decidindo quem gasta bateria e calor com qual modelo
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A adaptação sai do servidor e o modelo passa a aprender no próprio aparelho, transformando o adaptador em bem pessoal
    efeitos:
      - id: e6
        ordem: 1
        efeito: A personalização deixa de morar na conta do provedor e passa a morar num arquivo guardado no aparelho
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Aparece um formato de adaptador portátil, e trocar de modelo sem perder a personalização entra na decisão de compra
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: O direito à portabilidade de dados passa a ser reivindicado sobre o adaptador, e não apenas sobre o histórico de conversas
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: O backup do telefone passa a conter um artefato que nenhuma categoria existente acomoda, nem dado pessoal nem software licenciado
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: O inventário de herança digital passa a separar o modelo adaptado, com valor econômico transmissível, do rastro pessoal que o treinou
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: Responder pelo que o modelo diz deixa de ser assunto de termos de uso e vira assunto de produto defeituoso, com quem embarcou respondendo
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Atualizar o modelo embarcado vira obrigação com prazo, e recall de modelo entra no vocabulário de quem publica aplicativo
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Aparelho que parou de receber atualização de modelo passa a ser tratado como aparelho sem suporte de segurança, com efeito sobre vida útil e sobre revenda
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: A IA local se parte em dois mundos com garantias opostas, o do software livre não comercial fora do regime de responsabilidade e o do modelo embarcado em produto sob responsabilidade objetiva
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: Publicar peso de modelo passa a exigir declarar se aquilo é produto, e a fronteira entre repositório aberto e catálogo comercial vira objeto de disputa
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o bloco não consegue dizer

**As raízes 1 e 2 se somam, mas as raízes 2 e 3 brigam.** A roda é uma árvore e soma galhos que
não somam. A raiz 2 põe o modelo sob controle do fabricante do sistema — é ele quem escolhe,
atualiza e limita. A raiz 3 põe a adaptação sob controle da pessoa. Quanto mais forte a raiz 2,
mais o modelo local é um *serviço embutido* que você não possui, e menos sentido faz um
adaptador pessoal portátil; quanto mais forte a raiz 3, mais o modelo local é um *objeto* seu, e
mais o fabricante perde o controle sobre o que o aparelho diz. O arranjo de 2031 depende de qual
das duas ganha, e o mapa não decide isso — registra que e6 e e4.2 apontam para lados opostos.

**Nota de convergência: os efeitos que precisam de duas raízes.** Três cruzamentos ficaram fora
da árvore porque só fazem sentido com duas raízes simultâneas, e são justamente os que
interessam quando os mapas da turma forem processados juntos:

- *Raiz 1 + raiz 2*: o aparelho de entrada com modelo ternário embutido pelo sistema — é isto,
  e não o topo de linha, que decidiria se IA local é popular ou premium. Precisa de kernel
  ternário adotado pelo runtime do sistema, coisa que hoje não existe.
- *Raiz 2 + raiz 3*: a personalização feita pelo sistema operacional sobre o modelo do sistema —
  tecnicamente o caminho mais provável, e o que menos entrega "posse" ao usuário, porque o
  adaptador nasce dentro do jardim.
- *Raiz 1 + raiz 3*: ajuste fino ternário no aparelho, que resolveria o limite de memória do
  MobileFineTuner [25]; não há sinal de que alguém esteja perto disso.

**A roda não representa a realimentação mais importante deste tema.** Quanto mais IA local, mais
demanda por memória; quanto mais demanda por memória, mais cara a memória; quanto mais cara a
memória, menos aparelhos conseguem IA local. É um laço negativo que a árvore não tem notação
para desenhar, e que está medido em [9]. Ele não aparece como nó; aparece aqui.

**A cota de humildade foi cumprida por sobra:** nenhum efeito de terceira ordem ficou com
confiança alta, contra o teto de um.

## 6. Sinais fracos e wildcards

**A NPU de consumo baixíssimo muda o gênero, não a velocidade.** O dado mais subestimado deste
levantamento é o Hailo-10H mantendo 6,91 tok/s com 0,04% de degradação a 1,87 W [15]. Isso é
lento demais para conversa e bom demais para qualquer coisa que rode o dia inteiro sem ser
notada: indexar o que você vê, escutar um ambiente, acompanhar uma tarefa longa. Se a IA local
se firmar por aí — e não pelo chat —, a interação que importa projetar não é pergunta e
resposta, é presença e interrupção. Quase ninguém está desenhando para isso.

**O computador pessoal como servidor de IA pessoal.** A varredura da turma trouxe `Termly` —
controlar a CLI de IA da própria máquina pelo celular, com criptografia de ponta a ponta. O
sinal é fraco (uma ferramenta), mas a forma resolve simultaneamente três restrições reais: a
memória está no laptop, o calor está no laptop, e a tela está na mão. Se isso pegar, "IA local"
deixa de significar "no aparelho em que você está" e passa a significar "num aparelho seu" — o
que preserva a propriedade e abandona a portabilidade.

**O adaptador como objeto de herança.** As Model Rules do European Law Institute sobre sucessão
e restos digitais, publicadas em 16/07/2026 sob relatoria que inclui Edina Harbinja, já separam
bens digitais com valor econômico, que se transmitem por sucessão ordinária, de restos digitais
pessoais, sujeitos a um direito de acesso temporário que não transfere propriedade [17]. Um
modelo adaptado aos seus dados é as duas coisas ao mesmo tempo, e nenhuma regra existente
resolve isso. É sinal fraco hoje e é a semente de e6.2.1.

**A moderação descendo para o sistema.** O Foundation Models da Apple fala em "guardrails
refinados, com menos falsos positivos" [18], e a Prompt API do Chrome cobre cinco idiomas [1].
Nenhum dos dois é anunciado como política de conteúdo — os dois são política de conteúdo.
Quando a recusa é do sistema, ela não é apelável no produto.

### Wildcards

**Um modelo ternário de qualidade de fronteira num aparelho de entrada.** É o wildcard que o
enunciado do tema propõe, e ele muda o mapa inteiro: torna e1.2 falso, torna e2 forte e
inverte a nota sobre o Brasil. Baixa probabilidade até 2031 por uma razão específica: o gargalo
demonstrado não é aritmética, é memória e calor [9][15], e precisão baixíssima ataca bem o
primeiro e só indiretamente o segundo.

**A escassez de memória durar até 2028 e transformar IA local em marcador de classe.** Alta
probabilidade relativa e impacto alto na direção oposta à da promessa: aparelhos abaixo de
US$ 400 com queda de 22% em embarques e memória a 60% do custo de fabricação [9] significam que
a década termina com IA local sendo a versão cara, e IA em nuvem sendo a versão pobre — exato
inverso da leitura corrente de que o local democratiza.

**O primeiro recall de modelo embarcado.** A Diretiva 2024/2853 vale para produtos colocados no
mercado a partir de 09/12/2026 e não deixa o fabricante se eximir pela falta de atualização
necessária à segurança [23]. Basta um caso de dano atribuído à saída de um modelo embutido num
produto de consumo para que "atualizar o modelo" deixe de ser decisão de roadmap e vire
obrigação com prazo. Probabilidade média, impacto alto sobre e7 e todo o seu galho.

**A precisão baixíssima morrer de sucesso alheio.** Se a queda de preço da inferência em nuvem
continuar no ritmo de 2026, a economia de rodar local desaparece para o uso leve — e a raiz 1
perde o argumento econômico, sobrando só privacidade e continuidade. É o wildcard que este mapa
tem mais medo de subestimar, e a fonte que sustenta a magnitude da queda é fraca [20].

## 7. Contra o próprio mapa

**O efeito que é só extrapolação linear.** e1 — "o custo marginal deixa de ser linha de
orçamento" — é a fronteira. Sobreviveu porque muda o ator (quem publica, não quem compra
inferência) e porque tem consequência estrutural em e1.1 e e1.2, mas é indiscutivelmente o
efeito mais próximo de "mais barato do mesmo". Foi rebaixado de alta para média por isso. Um
irmão dele, que dizia que o preço das assinaturas de IA cairia, foi eliminado na Fase 5 por
extrapolação pura: mesmo ator, mesmo mecanismo, outro volume — está registrado na seção 12 com
o id original.

**O efeito que assume velocidade de adoção sem caso comparável.** e4.1 — o software pequeno de
autor voltando com IA dentro em 2029. O caso histórico que eu usaria é a chegada da câmera ao
navegador por `getUserMedia`, que de fato tirou a captura de mídia do servidor. Mas a analogia
tem um furo que não consigo tapar: a câmera não exigia 22 GB livres e 16 GB de RAM. Se o
requisito de hardware não cair, e4.1 acontece num subconjunto de máquinas pequeno demais para
mover um gênero, e o prazo de 2029 está errado por anos, não por meses.

**A disrupção que pode não se concretizar, e o que aconteceria.** A raiz 3 é a mais frágil das
três. A precondição é dura e está medida: o Pixel 8, com 8 GB, não conseguiu acomodar o ajuste
de um modelo de 0,5B [25]. Se ela não se concretizar até 2031, caem e6, e6.1, e6.2, e6.1.1,
e6.2.1 — cinco efeitos, todo um terço do mapa — e sobra o arranjo em que a personalização
continua na conta do provedor, com o modelo local funcionando apenas como executor barato de
tarefa genérica. Esse é, hoje, o cenário mais provável, e está escrito assim na seção 9.

**A prova de precondição única.** As raízes 1, 2 e 3 dependem, todas, de uma coisa só: memória
disponível e barata no aparelho do usuário. Se o ciclo de escassez de DRAM se estender, doze
efeitos deste mapa perdem base simultaneamente, porque nenhum dos três caminhos tem rota que
não passe por RAM. Este mapa é, no fundo, um mapa sobre memória disfarçado de mapa sobre
modelos — e essa é a sua maior fragilidade estrutural.

**A camada (CLA), e o que ela achou.** Na **litania**, o tema se enuncia como "IA grátis, sem
chave, sem nuvem, ninguém pode desligar". Descendo para as **causas sistêmicas**, a gratuidade
não existe: ela é uma transferência de custo do provedor para o comprador do aparelho, e está
quantificada — memória a 60% do custo de fabricação de um celular barato [9], 3× menos eficiência
energética e 5 a 7× mais CO₂ por token que a inferência em lote, com 88–90% disso sendo carbono
embutido do aparelho [16]. "Grátis depois de baixado" é verdadeiro só na manchete; por baixo, é
um aparelho mais caro, uma bateria que dura menos e um telefone que morre mais cedo. Na **visão
de mundo**, este mapa supõe que privacidade e posse são valores que as pessoas querem pagar para
ter — suposição que a própria evidência contraria, já que quem está abaixo de 12 GB de RAM
recebe, em vez disso, um produto híbrido que manda tudo para a nuvem e que é aceito sem
protesto [5]. No **mito**, a história que se conta é a do computador pessoal contra o
mainframe, a autonomia contra o aluguel. É uma boa história e é a que me atraiu ao tema. A
história concorrente, que a evidência de 2026 sustenta melhor, é a do **eletrodoméstico**: o
modelo vem dentro, você não escolhe, não atualiza, não inspeciona, e ele faz o que o fabricante
programou. Se essa segunda metáfora for a certa, e4.2, e4.2.1, e5.1 e e5.2 ficam mais fortes, e
todo o galho da raiz 3 fica mais fraco.

**O viés que entrou aqui.** Escolhi este tema por preferência declarada: gosto da ideia de
software que continua funcionando quando o serviço acaba, e isso me faz ler um requisito de
hardware como obstáculo temporário e uma ordem regulatória como vitória. A correção que apliquei
foi mecânica, não virtuosa — busquei deliberadamente por energia, calor, preço de memória e
recorte de classe, que são as quatro áreas onde a tese que eu prefiro perde. Foi de lá que
vieram [9], [15], [16], [21] e [22], e é por isso que a seção 3 é mais pessimista que a
seção 1 de um mapa entusiasta seria. Um viés que **não** consegui corrigir: o recorte é global
com nota sobre o Brasil, e as fontes primárias abertas são quase todas de fabricantes do Norte
e de arXiv em inglês. Não abri nenhuma fonte primária brasileira sobre uso de modelo local em
produto — o TIC Domicílios fala de acesso, não de IA.

**A bateria de contestação cobrou preço.** Cinco efeitos foram eliminados (um por raiz, mais
dois) e três foram rebaixados de confiança. Todos estão na seção 12, com id original e a prova
que os matou.

## 8. O que a máquina errou

**O erro que teria virado nota de rodapé sólida.** Um resumo de busca afirmou, com a mesma
segurança de tudo o mais, que "quem ajusta um modelo aberto herda integralmente as obrigações de
provedor de GPAI, e a isenção evapora" — atribuído a análise de escritório de advocacia. Eu ia
usar isso como efeito de segunda ordem inteiro: "quem personaliza localmente vira provedor sem
saber". Abri a fonte primária, o FAQ de orientações da própria Comissão Europeia, e o texto diz
o contrário: quem modifica ou ajusta **não** está automaticamente sujeito às obrigações, e só
vira provedor em circunstâncias excepcionais, quando a modificação usa **mais de um terço do
compute de treino original** [24]. *Como percebi:* o resumo secundário dizia "no momento em que
um hospital ajusta", ou seja, um limiar de zero; a existência de um limiar tão conveniente para
o argumento do texto foi o que me fez desconfiar da forma antes do conteúdo. O efeito foi
eliminado e substituído por e7.2, que se apoia em artigo numerado da Diretiva 2024/2853 [23].

**A contradição que só apareceu porque havia dois registros.** Um resumo de busca afirmou que o
"Firefox tem WebGPU estável desde o terceiro trimestre de 2025" e que "o Firefox 147, lançado em
13 de janeiro, traz WebGPU habilitado no Windows e no macOS ARM64". O caniuse, aberto em
17/09/2026, lista o Firefox como **desabilitado por padrão** em todas as versões atuais [11]. As
duas afirmações não podem ser verdadeiras juntas. *Como percebi:* o mesmo resumo de busca
continha, a dois parágrafos de distância, "ships by default across Chrome, Firefox, Edge and
Safari" e "Firefox remains disabled by default" — um texto em contradição consigo mesmo. Não usei
nenhum dos dois números de cobertura vindos de blogs; usei o do caniuse, que é o único que abri.

**A fonte com aparência de dado e nomes que não existem.** A matéria sobre queda de preço de API
[20] traz uma tabela detalhada — GPT-4o caindo 60% entre janeiro e abril de 2026, "Claude 3.5
Opus lançado em meados de abril de 2026" a US$ 0,003 por mil tokens de entrada, "Qwen 3.6" a
US$ 0,0008. *Como percebi:* a nomenclatura. "Claude 3.5 Opus" não corresponde a nenhum
lançamento que eu conheça, e um lançamento de abril de 2026 com numeração de 2024 é o tipo de
detalhe que uma fonte real não erra. Mantive a fonte na lista, marcada como de baixa
confiabilidade, e **não** usei nenhum número dela como âncora — a afirmação de que o preço da
nuvem cai rápido aparece apenas como wildcard, explicitamente apoiada em fonte fraca.

**O número verdadeiro cuja condição de validade eu quase omiti.** Os números do BitNet — 0,4 GB,
29 ms, 0,028 J [19] — são reais e estão no cartão oficial. Mas o mesmo cartão traz um aviso em
destaque: com a biblioteca `transformers` padrão, o ganho **não existe**, e o desempenho pode
ser pior que o de precisão total. Escrever "um modelo de 2B roda em 0,4 GB" sem a condição é
tecnicamente verdadeiro e praticamente falso. *Como percebi:* fui ao cartão para copiar a
tabela, e o aviso estava acima dela.

**O que eu não consegui abrir, e o que fiz.** Três fontes recusaram leitura: o PDF de principais
resultados do TIC Domicílios 2025 no Cetic.br (devolveu binário ilegível), a página da ACM sobre
o EdgeTune (403) e a reportagem da CNBC sobre alta de preço de celulares (403), além de um fórum
sobre entrega versionada de modelo local no Windows (403). Nos dois primeiros casos, a
consequência está escrita no texto: os números do TIC vêm de duas matérias secundárias que
concordam entre si [21][22], e o número de redução de custo do EdgeTune **não é usado** — está
marcado como não apurado na seção 4. Registro isso porque a tentação, nos quatro casos, era
citar assim mesmo: eu tinha o número do resumo de busca.

**O erro que nenhuma releitura pegaria.** Os contadores do frontmatter foram escritos a partir do
rascunho, antes dos cortes da Fase 5. Depois dos cortes, foram recontados pelo script de
autochecagem, comparando o declarado com a árvore. É exatamente o erro documentado no
`DUVIDAS.md` desta skill, e ele reapareceu nesta rodada — o que sugere que a lição não se aprende,
se automatiza.

## 9. Três cenários para 2031

**Provável — o modelo virou o andar barato de um roteador que não é seu.** Em 2031, quase todo
aparelho vendido acima da faixa de entrada tem um modelo embutido, e quase todo produto de mídia
usa a API do sistema para a camada leve: resumir, reescrever, classificar, legendar, transcrever,
extrair. Ninguém mais paga token para isso, e ninguém mais escolhe qual modelo faz isso — o
fabricante escolhe, atualiza sem avisar, e recusa o que decidiu recusar. O trabalho pesado
continua subindo para servidores, agora por um caminho que o sistema operacional controla e que
o desenvolvedor nem enxerga como saída de dados. A personalização continuou no provedor:
o ajuste fino no aparelho existe em pesquisa e em nichos profissionais, e não virou prática de
consumo, porque memória não sobrou. A Europa forçou tela de escolha de assistente e acesso
igualitário à NPU, o que mudou quem está na lista, não a arquitetura. E a divisão que ficou não
é entre quem tem IA e quem não tem — é entre quem roda no próprio aparelho e quem manda tudo
para fora sem saber, e ela coincide com a divisão de renda: no Brasil, a IA que fica no
aparelho é da classe A, e a IA híbrida que envia tudo é de todo o resto.

**Desejável — a inferência virou infraestrutura pública do aparelho.** Em 2031, a capacidade de
inferência é tratada como a câmera e o microfone: recurso do aparelho, com permissão explícita,
indicador de uso visível, escolha de qual modelo atende cada aplicativo, e versão declarada
para quem programa. Um formato de adaptador pessoal portátil foi padronizado, e trocar de
telefone leva junto o que o seu modelo aprendeu, sem levar o histórico bruto. Compra pública de
escola e de saúde passou a exigir modelo auditável e executável offline, o que criou demanda
por modelos pequenos em português com avaliação publicada, e fez com que existisse ecossistema
fora dos três fabricantes. Para chegar aqui, três coisas tiveram que acontecer, nenhuma
automática: o requisito de hardware caiu a ponto de a camada leve rodar em aparelho de faixa
média — o que exigiu que o kernel de precisão baixíssima entrasse no runtime do sistema, e não
ficasse numa ilha [19]; o regulador estendeu ao modelo padrão o que aplicou ao assistente [10];
e alguém publicou o que hoje ninguém publica, um contrato de versão e de estabilidade do modelo
embutido, sem o qual nenhum produto sério depende dele.

**Indesejável — o eletrodoméstico que fala, e a conta que foi para a sua bateria.** Em 2031, a
escassez de memória não cedeu, e IA no aparelho virou selo de faixa de preço. Embaixo, o
aparelho de entrada roda um híbrido que manda tudo para a nuvem e é anunciado como "com IA".
Em cima, o modelo embutido é intocável: não se escolhe, não se inspeciona, não se desliga, e a
recusa dele — que é política de conteúdo do fabricante — vale para todos os aplicativos
instalados, sem apelação e sem registro. A promessa de gratuidade se cumpriu contabilmente e
falhou materialmente: o usuário paga em bateria, em calor, em aparelho trocado mais cedo, e o
custo de carbono por token ficou de 5 a 7 vezes o da inferência em lote [16], só que agora
distribuído por bilhões de aparelhos e invisível em qualquer balanço. **O sinal precoce disto
não é técnico, é comercial:** é o momento em que "IA no dispositivo" aparecer como linha de
especificação numa embalagem, ao lado de RAM e armazenamento, sem que nenhuma informação sobre
qual modelo, qual versão, qual duração de suporte e qual política de recusa acompanhe a
afirmação. Quando a IA local virar atributo de marketing antes de virar recurso documentado,
este é o cenário que está em curso.

## 10. O experimento

**Três Andares.**

**O que é.** Uma única peça de mídia interativa — uma página que faz uma tarefa concreta e
verificável, por exemplo transformar um trecho de texto numa cena descrita, ou legendar e
resumir um vídeo curto carregado pelo usuário — implementada uma vez e ligada a três motores
intercambiáveis: **(a)** o modelo embutido no navegador, pela Prompt API [1]; **(b)** um modelo
baixado e executado na página por WebGPU, com o peso vindo do Hugging Face; **(c)** uma API na
nuvem. A tela mostra, ao vivo e lado a lado, cinco medidas para cada andar: tempo até o primeiro
token, tokens por segundo ao longo de execuções repetidas (para expor a queda térmica), bytes
que saíram do aparelho, se a saída passou na validação de esquema, e o que aconteceu quando
falhou. Um botão de "modo avião" desliga a rede no meio da execução. Tudo roda no aparelho de
quem abre a página, sem servidor; a página recolhe, com consentimento, apenas a linha de
resultado — modelo do aparelho, RAM, resultado por andar — num arquivo que a pessoa escolhe
enviar ou não.

**Que pergunta sobre o futuro ele ajuda a responder.** A pergunta central deste mapa, que é a
precondição de quase tudo: **quantos aparelhos reais conseguem rodar isto, e com que
qualidade?** Este mapa afirma, com base em [1], [6], [9], [21] e [22], que a resposta é "poucos,
e os caros". O experimento mede em vez de afirmar. E mede também a segunda pergunta, que é de
projeto e não de infraestrutura: **como se desenha uma interação cuja capacidade varia por
aparelho?** — que é exatamente o efeito e4.3, e que hoje ninguém sabe fazer porque nunca foi
preciso.

**Que tecnologia emergente ele usa, e por que não dá com tecnologia madura.** Usa a Prompt API do
Chrome e a execução por WebGPU na página, que é o par emergente deste tema. Não dá para fazer
com tecnologia madura por definição do que se quer observar: se eu implementasse só o andar (c),
a chamada de API na nuvem, teria um produto que funciona e não teria dado nenhum — a variação
de capacidade entre aparelhos, a queda térmica, o comportamento offline e o custo em bateria
**só existem** quando o modelo roda no cliente. O andar (c) está lá como régua, não como
solução.

**O que a turma vai fazer quando testar isso em sala.** Cada pessoa abre a página no próprio
laptop e no próprio celular e roda a mesma tarefa três vezes seguidas, em cada andar que o
aparelho aceitar. Em quinze minutos a sala tem uma tabela real: quantos dos nossos aparelhos têm
o modelo do navegador disponível, quantos conseguem baixar e rodar um modelo por WebGPU, quanto
cada um degrada na terceira execução, quem ficou de fora e por quê. Depois, com o "modo avião",
cada um observa qual andar sobrevive. A discussão que isso abre não é sobre IA: é sobre para
quem a gente está projetando quando assume que o modelo está disponível.

**O que seria um resultado que me faria mudar de ideia.** Se **a maioria dos aparelhos da sala**
— incluindo celulares e laptops de faixa média — rodar o andar (a) ou o (b) com qualidade
suficiente para a tarefa e sem queda térmica que inviabilize o uso, então a precondição de
hardware que sustenta e1.2, e4.1 e toda a nota sobre o Brasil está errada, e o mapa precisa ser
refeito com adoção mais rápida e exclusão menor. É o falsificador declarado na Fase 1, traduzido
em medição de sala de aula: se a adoção já passou da maioria inicial dentro de um grupo de
estudantes de computação, ela passou.

## 11. Fontes

Todas foram abertas nesta sessão, em 17/09/2026. As quatro que **não** abriram estão registradas
na seção 12, e nenhuma afirmação deste documento se apoia nelas.

1. **Prompt API — documentação do Chrome para desenvolvedores.** `https://developer.chrome.com/docs/ai/prompt-api` — Sustenta o estado de estabilidade (Chrome 138+), as modalidades, os cinco idiomas e, sobretudo, os requisitos de hardware (16 GB de RAM, >4 GB de VRAM, 22 GB livres) e a ausência de suporte em Android e iOS. Fonte primária do fabricante; confiável para o que promete, e é o próprio fabricante quem declara a restrição, o que aumenta o peso dela.
2. **microsoft/BitNet — repositório oficial.** `https://github.com/microsoft/BitNet` — Sustenta as datas de 2026 (otimização de CPU em 15/01, embeddings em 20/07, VibeASR em 23/07) e os ganhos declarados em ARM e x86. Primária; números de desempenho são autodeclarados pelo fabricante e não replicados de forma independente aqui.
3. **15 updates from Google I/O 2026 — Chrome for Developers.** `https://developer.chrome.com/blog/chrome-at-io26` — Sustenta o Chrome 148 com multimodalidade e saída estruturada, o Gemma 197M e o caso da Trip.com em produção. Primária; é material de anúncio, e o caso de uso não vem com números de resultado.
4. **Gemma 4: the new standard for local agentic intelligence on Android.** `https://android-developers.googleblog.com/2026/04/gemma-4-new-standard-for-local-agentic-intelligence.html` — Sustenta a data (02/04/2026), os 140 milhões de aparelhos com Gemini Nano, e os ganhos declarados do Nano 4. Primária e promocional; "até 4× mais rápido" e "até 60% menos bateria" são tetos, não médias.
5. **Gemini Go leva IA para celulares com 2 GB de RAM — SempreUpdate.** `https://sempreupdate.com.br/gemini-go-celulares-2gb-ram/` — Sustenta que a resposta da Google para o aparelho de entrada é **híbrida com nuvem**, anunciada em 04/06/2026, com o Brasil citado. Secundária brasileira; o ponto que uso dela (é híbrido, não local) é o que a própria matéria cita textualmente do anúncio.
6. **Gemini Intelligence chega ao Android, mas os requisitos apertam o cerco — Android Geek.** `https://androidgeek.pt/gemini-intelligence-chega-ao-android-mas-os-requisitos-apertam-o-cerco` — Sustenta o piso de 12 GB de RAM e o requisito de Nano v3, em 18/05/2026. Secundária; a própria matéria adverte que a lista de aparelhos é não oficial, e eu não uso a lista, só o requisito.
7. **On-device AI after WWDC 2026: what changed — Callstack.** `https://www.callstack.com/blog/on-device-ai-after-wwdc-2026-whats-new` — Sustenta a leitura de que a Apple criou uma segunda fronteira de aparelho (modelo local mais capaz só no topo de linha) e introduziu o Core AI. Secundária, de quem mantém biblioteca sobre o assunto; sem números.
8. **BitNet b1.58 2B4T Technical Report — arXiv:2504.12285.** `https://arxiv.org/abs/2504.12285` — Sustenta escala (2B, 4T tokens) e a alegação de paridade com precisão total. Primária, preprint marcado como trabalho em andamento; a alegação de paridade é dos autores.
9. **Memory now costs 60% of a budget phone — Tech Times, 08/07/2026.** `https://www.techtimes.com/articles/319959/20260708/memory-now-costs-60-budget-phone-ai-just-killed-cheap-smartphone.htm` — Sustenta a restrição central deste mapa: memória a ~60% do BOM abaixo de US$ 400 e >64% abaixo de US$ 99, LPDDR4X +70–75% num trimestre, queda projetada de 22% nos embarques da faixa baixa. Secundária, mas cita Omdia, TrendForce (boletim de junho de 2026) e Jefferies nominalmente, o que permite rastrear.
10. **EU gives rival AI assistants system-level Android access — Tech Times, 16/07/2026.** `https://www.techtimes.com/articles/320760/20260716/eu-gives-rival-ai-assistants-system-level-android-access-google-reserved-gemini.htm` — Sustenta as duas decisões do DMA, os quatro tipos de acesso (incluindo prioridade de escalonamento e acesso a processamento neural) e os prazos de janeiro e julho de 2027. Secundária; descreve decisão pública e verificável, mas não é o texto da decisão.
11. **caniuse — WebGPU.** `https://caniuse.com/webgpu` — Sustenta 87,35% de suporte global e a situação por navegador, inclusive Firefox desabilitado por padrão. Agregador de dados de uso; é a melhor fonte aberta para isto e foi a que resolveu a contradição descrita na seção 8.
12. **Blazing fast on-device GenAI with LiteRT-LM — Google Developers Blog, 19/05/2026.** `https://developers.googleblog.com/blazing-fast-on-device-genai-with-litert-lm/` — Sustenta 52/56/76 tok/s em Android, iOS e web, e o Gemma 4 E2B em 607 MB de CPU móvel. Primária e promocional; números de melhor caso, em aparelhos de topo.
13. **Beyond Fluent Generation: A CPU Reliability Benchmark for MCP-Style Tool Calling in Sub-2B SLMs — arXiv:2609.07370, 07/09/2026.** `https://arxiv.org/html/2609.07370` — Sustenta a confiabilidade de chamada de ferramenta abaixo de 2B: 75–79% no melhor caso, 0–7% em três dos cinco modelos, 89,4% das falhas em recuperação de JSON. Preprint, amostra pequena (100 prompts, cinco ferramentas simuladas) e não testa aparelho nomeado — os autores dizem isso explicitamente, e por isso uso a ordem de grandeza, não os decimais.
14. **I gave seven local LLMs a real job. Two did it. — Thomas Landgraf, 18/04/2026.** `https://thomaslandgraf.substack.com/p/i-gave-seven-local-llms-a-real-job` — Sustenta o retrato prático: em fluxo agêntico real com MCP, só as variantes densas do Gemma 4 se sustentaram; MoE entrou em laço; houve "sucesso alucinado". Relato individual, não replicado; vale como sinal de campo, não como medida.
15. **LLM Inference at the Edge: Mobile, NPU and GPU Trade-offs Under Sustained Load — arXiv:2603.23640v2, 07/06/2026.** `https://arxiv.org/html/2603.23640v2` — Sustenta a restrição térmica: iPhone 16 Pro −41,5% sob carga sustentada, S24 Ultra −15%, RTX 4050 −5%, Hailo-10H −0,04% a 1,87 W. Preprint de empresa (Conscious Engines); metodologia descrita, medida de energia do S24 declarada como de menor confiança pelos próprios autores.
16. **The Battery Price of Edge AI — Guégain & Coignion, arXiv:2609.11940, 10/07/2026.** `https://arxiv.org/html/2609.11940` — Sustenta a contabilidade ambiental: 3× menos eficiência energética que servidor em lote, 5–7× mais CO₂e por token, 88–90% disso carbono embutido. Preprint; conclusão contraintuitiva e sustentada por análise de sensibilidade declarada, o que aumenta a confiança.
17. **New Model Rules mark meaningful step for digital inheritance — University of Birmingham, 16/07/2026.** `https://www.birmingham.ac.uk/news/2026/new-model-rules-mark-meaningful-step-towards-digital-inheritance-laws` — Sustenta a distinção entre bem digital econômico e resto digital pessoal nas Model Rules do European Law Institute, e o tratamento de representações por IA de pessoas falecidas. Comunicação institucional de universidade sobre trabalho de sua própria pesquisadora; descreve regras-modelo, que não são lei.
18. **What's new in the Foundation Models framework — WWDC26, sessão 241.** `https://developer.apple.com/videos/play/wwdc2026/241/` — Sustenta o conjunto mais informativo deste mapa: abertura do código, protocolo `LanguageModel`, entrada de imagem, ferramentas de sistema com RAG local pelo Spotlight, e — decisivo para a seção 4 — o Private Cloud Compute com 32 mil tokens, raciocínio e camada gratuita, além de pacotes Swift de terceiros. Primária.
19. **microsoft/bitnet-b1.58-2B-4T — cartão do modelo no Hugging Face.** `https://huggingface.co/microsoft/bitnet-b1.58-2B-4T` — Sustenta 0,4 GB não-embedding, 29 ms de latência em CPU, 0,028 J por token **e** o aviso de que nada disso vale fora do bitnet.cpp. Primária; o aviso é o que a torna especialmente útil.
20. **Cloud API pricing crashed 50% in April 2026 — CraftRigs, 26/04/2026.** `https://craftrigs.com/news/cloud-llm-pricing-down-50-percent-local-still-pays-off-2026/` — Usada apenas para registrar que existe uma narrativa de queda acelerada de preço na nuvem. **Baixa confiabilidade, e digo por quê:** cita "Claude 3.5 Opus lançado em meados de abril de 2026" e "Qwen 3.6", nomenclatura que não corresponde a lançamentos conhecidos. Nenhum número dela ancora afirmação deste mapa.
21. **TIC Domicílios 2025 — Mobile Time, 09/12/2025.** `https://www.mobiletime.com.br/noticias/09/12/2025/tic-domicilios-2025/` — Sustenta 65% de acesso exclusivo por celular, 5% na classe A e 87% na DE, 32% de domicílios com computador, e a amostra (24.535 indivíduos, março a agosto de 2025). Secundária especializada; concorda em todos os números com [22].
22. **TIC Domicílios: desigualdade no acesso cai, mas lacuna entre classes é gritante — Convergência Digital, 09/12/2025.** `https://convergenciadigital.com.br/mercado/tic-domicilios-desigualdade-no-acesso-a-internet-cai-mas-lacunas-entre-as-classes-e-gritante/` — Acrescenta os 67% da classe C e os 97%/10% de posse de computador em A e DE. Secundária; usada como segunda leitura porque o PDF primário do Cetic.br não abriu.
23. **Diretiva (UE) 2024/2853 — Product Liability Directive, EUR-Lex.** `https://eur-lex.europa.eu/eli/dir/2024/2853/oj/eng` — Sustenta que software e sistemas de IA são produto (art. 4(1), considerando 13), a aplicação a partir de 09/12/2026 (art. 2(1)), a impossibilidade de se eximir por falta de atualização de segurança (art. 11(2)) e a exclusão do software livre não comercial (art. 2(2)). Fonte legal primária.
24. **Guidelines on obligations for General-Purpose AI providers — Comissão Europeia.** `https://digital-strategy.ec.europa.eu/en/faqs/guidelines-obligations-general-purpose-ai-providers` — Sustenta as datas (obrigações desde 02/08/2025, fiscalização plena com multas desde 02/08/2026, modelos anteriores até 02/08/2027) e o limiar de um terço do compute para quem ajusta virar provedor. Primária do regulador; é ela que derruba o efeito descrito na seção 8.
25. **MobileFineTuner — Geng, Zhao, Lu & Luo, arXiv:2512.08211, 09/12/2025.** `https://arxiv.org/html/2512.08211v1` — Sustenta que ajuste fino em telefone comum existe e funciona (Pixel 8, 7 Pro, 8 Pro, MacBook Air M2; GPT-2, Qwen2.5-0.5B, Gemma3) **e** o limite que o torna ainda impraticável: o Pixel 8 de 8 GB não acomodou o Qwen2.5-0.5B, com pico de RSS entre 3,7 e 25,4 GB. Preprint; os autores publicam o framework, o que permite verificação.

## 12. Anexo — o levantamento bruto

### 12.1 Fase 1 — a entrevista, como aconteceu nesta rodada

**Condição desta rodada, declarada antes de tudo:** não havia interlocutor humano. O operador
entregou o brief pré-fechado e instruiu a não fazer perguntas de volta. A skill exige entrevista
bloqueante com echo-back e **confirmação explícita**, e proíbe aceitar silêncio como
confirmação. O que fiz, e que é um desvio consciente da skill: emiti o bloco de nove perguntas e
o `RECORTE FECHADO` para registro, tratei o brief do operador como as respostas, e **registro
aqui que a confirmação não foi dada por ninguém** — foi assumida. Quem for auditar esta rodada
deve contar isso como uma das fragilidades dela.

As nove perguntas, com a resposta que veio do brief:

1. **TEMA E FRONTEIRA** — "IA local: no dispositivo e no navegador", tema 16 de 19, família
   "Criação e plataforma". Fronteira tirada do bloco do tema e do enunciado da disciplina: **não
   é** dado e identidade local (tema 17 — lá fica o dado e a conta, aqui fica o modelo); **não é**
   voz gerativa (tema 13); **não é** navegador como plataforma 3D e XR (tema 15); **não é** rodar
   modelo em servidor próprio. O objeto é a inferência no dispositivo do usuário final.
2. **HORIZONTE** — 2031.
3. **RECORTE GEOGRÁFICO** — global, com uma nota sobre o Brasil.
4. **PARA QUEM** — quem projeta mídia e interação.
5. **O QUE JÁ ESTÁ DESCARTADO** — o que já é comum em produto de massa, pela régua da
   disciplina. Nenhuma outra exclusão.
6. **VIÉS** — neutro.
7. **O QUE ME FARIA MUDAR DE IDEIA** — evidência de que a adoção já passou da maioria inicial
   (Rogers), ou de que a tecnologia não rompe nada e só melhora o que existe.
8. **QUANTAS DISRUPÇÕES-RAIZ** — *não respondida no brief*. **Suposição minha: 3.** Motivo: o
   brief pede três ordens e profundidade, e o enunciado do tema mistura três mecanismos
   distintos (precisão, plataforma, adaptação) que não se reduzem um ao outro. Com 2, eu teria
   que fundir plataforma e adaptação, que é justamente onde está a tensão mais interessante
   deste mapa.
9. **EU POSSO NAVEGAR?** — sim, com instrução explícita de só citar o que abrir. A Regra F3 não
   se aplica.

**Perguntas condicionais.** Nenhuma das quatro condições se aplicou de forma a exigir segunda
rodada. A fronteira encosta em três vizinhos, mas o próprio enunciado do tema já arbitra o lado
("aqui o objeto é a inferência no dispositivo"), e usei esse arbitramento. O horizonte de 2031
para um tema que depende de ciclo de hardware é curto, mas não incoerente: cinco anos é entre um
e dois ciclos de troca de aparelho, o que é a unidade certa para este tema.

```
RECORTE FECHADO — confirme antes de eu rodar
  tema ................ A inferência de modelos de IA rodando no dispositivo do usuário final —
                        celular, laptop comum, aba do navegador — com qualidade suficiente para
                        agente, voz e visão
  não é ............... dado e identidade local (tema 17); voz gerativa (tema 13); navegador
                        como plataforma 3D/XR (tema 15); modelo em servidor próprio
  horizonte ........... 2031
  região .............. global, com nota sobre o Brasil
  público ............. quem projeta mídia e interação
  descartado .......... o que já é comum em produto de massa (régua da disciplina)
  viés ................ neutro
  falsificador ........ adoção já além da maioria inicial (Rogers), ou ausência de ruptura real
  raízes .............. 3
  navegação ........... sim
  SUPOSIÇÕES MINHAS ... (a) o número de raízes (3) — não veio no brief;
                        (b) a confirmação deste bloco — não houve interlocutor para dá-la
Confirma, ou corrige algum campo?
```

### 12.2 Fase 2 — a triagem de maturidade, item por item

Cada candidata passou pelos cinco testes na ordem. Uma reprovação em T1 ou uma aprovação em T5
encerra.

| Candidata | Veredito | Teste decisivo |
|---|---|---|
| Chamar API de modelo na nuvem | **MADURO** | T5: instalação padrão, preço estável e público, modos de falha documentados, contratação como rotina |
| Modelo quantizado em 4 bits num laptop, via Ollama ou LM Studio | **MADURO** | T5: um comando de instalação, catálogo, interface, comportamento conhecido. A leitura corrente do campo descreve isso como rotina, não como novidade |
| Modelo pequeno em servidor próprio | **MADURO** | T2: sem ele, um time competente aceita mais custo e prazo, não muda de objetivo |
| WebGPU como API gráfica | **MADURO** | T5: 87,35% de suporte global [11], entrega padrão em quatro navegadores. Entra como substrato |
| Roteador híbrido local↔nuvem (Private Cloud Compute, Gemini Go) | **H2−, não é raiz** | T1: não muda o que é possível, muda quem paga e onde. É a inovação que **escora** a nuvem — exatamente o padrão que o Three Horizons nomeia como H2− |
| Precisão baixíssima nativa (ternário, BitNet, QAT) | **EMERGENTE E DISRUPTIVA** | T1 passa (muda o que cabe num aparelho); T3 passa (três entregas datadas em 2026 [2]); T4 passa (falta o ganho existir fora do kernel dedicado); incumbente nomeado: operação de inferência para carga leve; entrada por baixa do mercado e mercado novo |
| Inferência como serviço do SO e do navegador | **EMERGENTE E DISRUPTIVA** | T1 passa (produto com IA sem backend); T3 passa (Chrome 138/148, Gemma 4, LiteRT-LM, WWDC26); T4 passa (falta cobertura de aparelho e contrato de versão); incumbente: a camada de operação entre produto e modelo; entrada pela baixa do mercado |
| Adaptação local (LoRA no aparelho, adaptador pessoal) | **EMERGENTE E DISRUPTIVA** | T1 passa (personalizar sem entregar o histórico); T3 passa (MobileFineTuner, 09/12/2025 [25]); T4 passa, e com folga (não cabe em 8 GB); incumbente: a retenção por acúmulo de contexto na conta do provedor; entrada por mercado novo |
| NPU dedicada de baixíssimo consumo | **EMERGENTE, não promovida a raiz** | Passa T1, T3 e T4, mas o que ela habilita já está descrito dentro da raiz 1 (mercado novo: trabalho assíncrono permanente). Promovê-la a raiz produziria dois galhos com o mesmo mecanismo. Registrada na seção 6 como sinal fraco |

**Não houve recusa integral do tema.** O bloco `RECUSA PARCIAL` da skill não foi emitido porque o
tema, na fronteira dada, não é majoritariamente maduro — três candidatas passaram nos cinco
testes com incumbente e porta de entrada nomeados. O que foi recusado foram quatro tecnologias
específicas, que aparecem na seção 3 como substrato, e uma quinta pelo motivo mais interessante
(H2−).

### 12.3 Fase 5 — os efeitos que morreram, com o id original e a prova que os matou

| id original | Efeito, como estava escrito | Prova | Por quê |
|---|---|---|---|
| `e1.3` | "O preço das assinaturas de IA cai, e a cobrança por uso desaparece do software de consumo" | **P1 — extrapolação linear** | Mesmo ator (quem vende assinatura), mesmo mecanismo (preço), outro volume. É o presente medido diferente, não efeito novo. Fundido com e1 |
| `e2.2` | "Cresce o mercado de recondicionados, porque máquina antiga volta a servir para IA" | **P4 — força contrária** | A força contrária é decisiva e está medida: o gargalo é memória, e a memória subiu 172% ao ano [9]. Máquina antiga tem pouca RAM, e é exatamente RAM que falta. O efeito supõe que o recurso escasso é processamento |
| `e4.4` | "O navegador se torna a principal plataforma de IA para o usuário final" | **P3 + P4 — já acontece e o que impede** | Já acontece, em desktops caros (Chrome 138 estável desde antes desta rodada), e não pode generalizar: exige 16 GB de RAM, >4 GB de VRAM, 22 GB livres, e não existe em celular [1]. No Brasil, 65% só acessam por celular e 32% dos domicílios têm computador [21][22]. É estado da arte num nicho, não efeito futuro |
| `e5.3` | "A nuvem de inferência encolhe como negócio à medida que o local absorve a demanda" | **P4 + P2 — força contrária e velocidade** | A Apple embutiu Private Cloud Compute com 32 mil tokens, raciocínio e camada gratuita na mesma API do modelo local [18], e a resposta da Google ao aparelho de entrada é híbrida [5]. O incumbente não está sendo deslocado: está roteando. Substituído por e5, que diz o oposto |
| `e6.3` | "Cada pessoa passa a treinar o próprio modelo do zero, a partir da sua própria vida" | **P5 — precondição única** | Depende de uma aposta só (treino viável no aparelho), e se ela falha morrem quatro efeitos juntos. Além disso reprova em P2: não há caso histórico de adoção em massa de uma prática que exige recurso computacional que o aparelho não tem. Rebaixado a sinal fraco na seção 6, sem entrar na árvore |
| `e7.2` (versão descartada) | "Quem faz ajuste fino local sobre peso aberto vira provedor de GPAI sem saber, e a conveniência traz obrigação regulatória junto" | **Evidência primária** | Falso na fonte que o sustentaria: as orientações da Comissão dizem que quem ajusta só vira provedor quando usa mais de um terço do compute de treino original [24]. Reescrito como e7.2, sobre a assimetria da Diretiva 2024/2853 [23] |

**Rebaixamentos de confiança** (o efeito sobreviveu, a confiança não):

- `e1` — de **alta** para **média**, por P1 e por P6. A prova de camada mostrou que "custo marginal
  zero" é litania: o custo foi transferido para memória, bateria e carbono embutido [9][16], não
  eliminado.
- `e4.2` — de **alta** para **média**, por P2. Não achei caso histórico comparável de moderação
  descendo para a camada de sistema operacional num prazo de três anos; o comparável mais
  próximo (filtro de conteúdo em sistema operacional móvel) levou muito mais tempo e nunca
  virou padrão universal.
- `e6` — de **alta** para **média**, por P4. A força contrária é física e está medida: o ajuste de
  um modelo de 0,5B não coube num Pixel 8 de 8 GB [25].

**Prova P6 aplicada ao mapa inteiro** — o resultado está escrito na seção 7 e é o achado mais
importante desta rodada: o mapa repousa sobre a visão de mundo de que **posse e privacidade são
valores pelos quais as pessoas pagam**, e a evidência de 2026 mostra o contrário no segmento que
mais cresce — aparelho de entrada recebe produto híbrido que envia tudo para a nuvem, anunciado
como avanço e aceito sem atrito [5]. Se a métrica de sucesso for continuidade e qualidade em vez
de posse, os efeitos e6, e6.1, e6.2 e todos os seus filhos trocam de sinal sem que nenhum fato
técnico mude.

### 12.4 As buscas que não deram em nada, e as fontes que não abriram

**Não abriram (403 ou conteúdo ilegível), e o que deixei de afirmar por causa disso:**

- `https://cetic.br/media/analises/tic_domicilios_2025_principais_resultados.pdf` — PDF devolvido
  como binário ilegível. Consequência: os números do TIC Domicílios neste documento vêm de duas
  matérias secundárias que concordam entre si [21][22], e não da fonte primária. Não afirmo nada
  do TIC que não esteja nas duas.
- `https://dl.acm.org/doi/full/10.1145/3774906.3802769` (EdgeTune, EAISS 2026) — 403.
  Consequência: a redução de 70–80% em tempo e energia por passo de personalização **não é
  usada** como âncora em lugar nenhum; está marcada como não apurada na seção 4.
- `https://www.cnbc.com/2025/12/16/smartphone-prices-to-rise-in-2026-due-to-ai-fueled-chip-shortage.html`
  — 403. Consequência: a projeção de alta de 6,9% no preço médio de venda de celulares em 2026
  ficou de fora; o argumento de memória se apoia só em [9].
- `https://windowsforum.com/threads/kb5096573-phi-silica-update-local-ai-gets-versioned-delivery-for-copilot-pcs.419797/`
  — 403. Consequência: a "entrega versionada" de modelo local no Windows, que seria o sinal
  datado mais direto para e7.1 (atualização de modelo embarcado virando obrigação com prazo),
  ficou sem fonte aberta. Por isso e7.1 está com sinal **fraco** e não médio.

**Buscas que não produziram fonte utilizável:**

- Estatísticas de download ou de base instalada de Ollama e LM Studio: só encontrei números de
  estrelas no GitHub em textos secundários, com valores divergentes entre si (85 mil e 100 mil na
  mesma busca, para o mesmo período). Não usei nenhum.
- Incidente concreto de dano causado por saída de modelo embarcado em produto de consumo: a busca
  devolveu quase só literatura de dispositivo médico regulado pela FDA, que é outro regime. Por
  isso o "primeiro recall de modelo" está na seção 6 como wildcard, e não na roda como efeito.
- Sinal social quantificado (r/LocalLLaMA, Hacker News): não consegui número de assinantes ou de
  volume com fonte aberta e datada. O único sinal de campo que uso é um relato individual [14],
  e ele está rotulado como tal.
- Uso de modelo local dentro de produto brasileiro de mídia ou interação: nada. Encontrei
  material de consultoria sobre IA local e LGPD em empresa, sem caso verificável. A nota sobre
  o Brasil, portanto, é sobre **capacidade de aparelho**, não sobre **adoção em produto** — e
  essa limitação está declarada na seção 7.

### 12.5 Caminhos abandonados na construção do mapa

- **Uma quarta raiz sobre NPU e silício heterogêneo.** Abandonada porque produziria efeitos
  idênticos aos da raiz 1 com outro nome. O conteúdo dela virou o sinal fraco mais forte da
  seção 6 (a NPU de 1,87 W que muda o gênero de interação, não a velocidade).
- **Um galho inteiro sobre modelos locais de imagem e vídeo.** Abandonado por fronteira: mídia
  sintética controlável é o tema 12, e o recorte deste mapa é a inferência, não o gênero de
  saída. O que restou disso está em e4 e e4.3, sobre capacidade variável.
- **Um galho sobre agentes locais controlados remotamente** (`Termly`, `mecha-factory`).
  Abandonado como efeito porque depende de duas raízes simultâneas e de uma terceira coisa que
  não está em nenhuma delas (a rede doméstica). Virou sinal fraco na seção 6.
- **Tratar "cota gratuita de API instável" como sinal datado da Fase 2.** A observação é da
  varredura da própria turma — "a documentação promete 1.500 requisições por dia, a conta recebe
  20" — e três alunos de fato migraram para Ollama por causa disso. É evidência real e boa, mas
  é evidência de **processo interno da disciplina**, não fonte pública verificável, e T3 pede
  sinal datado e verificável. Não entrou como sinal da triagem; entra aqui, no anexo, como o que
  é: a tendência tendo acontecido dentro da própria atividade que a estudava.
- **Usar o Hype Cycle para posicionar o tema.** Descartado por método, não por preguiça: o
  `ESTUDO.md` desta skill registra que a curva não é validada empiricamente (Steinert & Leifer,
  2010; Dedehayir & Steinert, 2016; Mullany, 2016, com mais de 200 tecnologias revisadas), e que
  ela não serve para prazo. Como a única coisa que eu quereria dela aqui era prazo, não usei.

### 12.6 Autochecagem — saída bruta dos scripts

*Colada na seção 12.8, exatamente como saiu.*

### 12.7 As quatro perguntas do teste cruzado, respondidas sobre esta rodada

1. **Fez perguntas antes de rodar?** Sim — Fase 1, seção 12.1, com as nove perguntas emitidas e o
   bloco `RECORTE FECHADO` registrado. **Com uma ressalva que conta contra esta rodada:** não
   houve interlocutor, e a confirmação foi assumida, não obtida. Está declarado em 12.1.
2. **Separou novidade de comum, e recusou o comum?** Sim — Fase 2, seção 12.2, com o teste que
   reprovou cada item nomeado: quatro tecnologias recusadas como maduras (três por T5, uma por
   T2), uma classificada como H2− e por isso não promovida a raiz, e uma emergente não promovida
   por redundância de mecanismo.
3. **Duvidou do próprio resultado?** Sim — Fase 5, seção 12.3: seis efeitos eliminados (pelo menos
   um por raiz, com a prova que os matou) e três rebaixados de confiança. Um deles morreu por
   evidência primária que contrariava a fonte secundária que o sustentava, e isso está contado na
   seção 8. A prova P6 mudou a leitura do mapa inteiro, e está na seção 7.
4. **Saiu no formato?** Sim — 12 títulos `##`, frontmatter com todos os campos, bloco `roda:` com
   três níveis, ids hierárquicos, `sinal`/`prazo`/`confianca` em todo efeito e nenhuma frase
   interrogativa. A saída dos scripts está em 12.8.

### 12.8 Saída bruta da autochecagem

Rodada em 17/09/2026, no arquivo final, depois dos cortes da Fase 5.

```
$ grep -c "^## " tendencia-ia-local-no-dispositivo-e-no-navegador.md
12

$ grep -n "^## " tendencia-ia-local-no-dispositivo-e-no-navegador.md
22:## 1. Resumo
42:## 2. O tema
70:## 3. Onde isso está hoje
204:## 4. As disrupções-raiz
293:## 5. A roda dos futuros
554:## 6. Sinais fracos e wildcards
607:## 7. Contra o próprio mapa
669:## 8. O que a máquina errou
723:## 9. Três cenários para 2031
768:## 10. O experimento
817:## 11. Fontes
848:## 12. Anexo — o levantamento bruto
```

```
$ python3 (script de checagem da skill, seção 6.2)
faltam: nada
disrupcoes na roda: 3 | declarado: 3
efeitos por ordem: {1: 7, 2: 13, 3: 13}
ordem 3 com confianca alta: 0 (cota: no maximo 1)
contadores batem: True
ordem 1 ate o horizonte: True
```

O script verifica, além dos campos do frontmatter: que `ordem` bate com o nível na árvore, que
nenhum `efeito` termina em ponto de interrogação, que `sinal` e `confianca` estão no domínio
permitido, e que `prazo` é monotônico ao longo de cada galho. Nenhuma asserção falhou.

Conferência dos links da seção 11, com `curl -L --max-time 15`:

```
links unicos na secao 11: 25
200 https://android-developers.googleblog.com/2026/04/gemma-4-new-standard-for-local-agentic-intelligence.html
200 https://androidgeek.pt/gemini-intelligence-chega-ao-android-mas-os-requisitos-apertam-o-cerco
200 https://arxiv.org/abs/2504.12285
200 https://arxiv.org/html/2512.08211v1
200 https://arxiv.org/html/2603.23640v2
200 https://arxiv.org/html/2609.07370
200 https://arxiv.org/html/2609.11940
200 https://caniuse.com/webgpu
200 https://convergenciadigital.com.br/mercado/tic-domicilios-desigualdade-no-acesso-a-internet-cai-mas-lacunas-entre-as-classes-e-gritante/
200 https://craftrigs.com/news/cloud-llm-pricing-down-50-percent-local-still-pays-off-2026/
200 https://developer.apple.com/videos/play/wwdc2026/241/
200 https://developer.chrome.com/blog/chrome-at-io26
200 https://developer.chrome.com/docs/ai/prompt-api
200 https://developers.googleblog.com/blazing-fast-on-device-genai-with-litert-lm/
200 https://digital-strategy.ec.europa.eu/en/faqs/guidelines-obligations-general-purpose-ai-providers
200 https://eur-lex.europa.eu/eli/dir/2024/2853/oj/eng
200 https://github.com/microsoft/BitNet
200 https://huggingface.co/microsoft/bitnet-b1.58-2B-4T
200 https://sempreupdate.com.br/gemini-go-celulares-2gb-ram/
200 https://thomaslandgraf.substack.com/p/i-gave-seven-local-llms-a-real-job
200 https://www.birmingham.ac.uk/news/2026/new-model-rules-mark-meaningful-step-towards-digital-inheritance-laws
200 https://www.callstack.com/blog/on-device-ai-after-wwdc-2026-whats-new
200 https://www.mobiletime.com.br/noticias/09/12/2025/tic-domicilios-2025/
200 https://www.techtimes.com/articles/319959/20260708/memory-now-costs-60-budget-phone-ai-just-killed-cheap-smartphone.htm
200 https://www.techtimes.com/articles/320760/20260716/eu-gives-rival-ai-assistants-system-level-android-access-google-reserved-gemini.htm
```

25 links, 25 respostas 200, e `fontes: 25` no frontmatter — o número declarado é o número de
fontes efetivamente abertas nesta sessão. As quatro que não abriram estão em 12.4 e não entram
na contagem.

**O que o script não pega, e conferi à mão:** que todo link da seção 11 foi de fato **aberto e
lido** nesta sessão, e não apenas encontrado em resultado de busca. Foi — cada uma das 25 foi
lida por requisição direta, e as afirmações que dependem delas citam o número da fonte. As
afirmações que vieram só de resumo de busca, sem leitura da fonte, ou não entraram, ou estão
declaradas como não apuradas: o caso do EdgeTune (seção 4 e 12.4) e o da alta do preço médio de
celulares (12.4).
