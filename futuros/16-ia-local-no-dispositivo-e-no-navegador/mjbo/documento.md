---
tema: "IA local: no dispositivo e no navegador"
slug: ia-local-no-dispositivo-e-no-navegador
autor_login: mjbo
zona_de_interesse: Criação e plataforma
data: 2026-09-17
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 10
efeitos_ordem_3: 10
tecnologias_citadas: [BitNet b1.58, bitnet.cpp, quantização ternária, Prompt API do Chrome, Gemini Nano, ML Kit GenAI, AICore, Apple Foundation Models framework, WebGPU, WebLLM, MLC-LLM, llama.cpp, GGUF, Ollama, Snapdragon Hexagon NPU, MoE, Private Cloud Compute, MLX, Heretic]
fontes: 16
confianca: media
experimento: O mesmo produto em três cérebros
skill_usada: futurizacao-mjbo
publico_ok: false
---

## 1. Resumo

A inferência de modelo de linguagem deixou de exigir um terceiro. Em 2026 o navegador passou a
expor um modelo local por API pública sem chave (Prompt API com Gemini Nano, estável no Chrome
148), o WebGPU virou base disponível nos três motores, a Apple abriu o Foundation Models como
protocolo Swift único para modelo local, de servidor e de terceiros, e o Android entrega Gemini
Nano por ML Kit em cima do AICore. No andar de baixo, a quantização ternária (BitNet b1.58,
bitnet.cpp) promete tirar a IA da dependência de acelerador — com evidência dividida: ganha de
1,37× a 6,17× em velocidade e corta de 55% a 82% de energia, mas pesquisa de 2026 mostra que
2 bits quebram a estrutura do raciocínio, não só a nota. Este mapa sustenta três rupturas: a
inferência como recurso de sistema operacional e de navegador, sem custo por chamada; a
quantização extrema como via de acesso ao parque instalado (emergente, não consumada); e o
agente pessoal local, que lê o que nenhum contrato permite enviar para fora. Os efeitos que ele
deriva não são de abundância, e sim de escassez deslocada: o gargalo sai da cota de API e vai
para a memória do aparelho — justamente o insumo que a corrida de IA na nuvem encareceu em 2026,
empurrando o celular de entrada de volta para 4 GB de RAM. Até 2031, a aposta central é que a IA
local vence como infraestrutura invisível e perde como promessa de democratização.

## 2. O tema

IA local é a inferência que acontece no aparelho de quem usa — celular, laptop comum, aba do
navegador — em vez de num servidor com o qual alguém tem contrato. Não é "IA mais barata": é IA
sem intermediário obrigatório. Três coisas mudam de natureza ao mesmo tempo. A economia: depois
que o modelo está baixado, cada chamada custa bateria, não dinheiro, e portanto não existe mais
um teto de uso a ser projetado. A privacidade: o dado não sai, o que torna legalmente possível
apontar um assistente para material que hoje nenhum time jurídico libera. E a dependência:
ninguém pode desligar, encarecer ou descontinuar o que já está no disco.

Onde isso encosta em mídia e interação é direto e é imediato. Toda decisão de projeto de
interface hoje tem, embutida, uma conta de custo por usuário: quantas chamadas de modelo esta
tela pode fazer sem inviabilizar o produto. Essa conta é o que impede reescrever um rótulo,
adaptar um texto ao leitor, legendar um áudio no scroll ou descrever uma imagem para leitor de
tela a cada renderização. Quando o custo marginal vai a zero, some a restrição — e o que sai do
lugar não é o back-end, é a gramática da interface. Ao mesmo tempo entra uma restrição nova, que
designers já sabem manejar em outro contexto: a mesma página passa a se comportar de modos
diferentes conforme o hardware de quem abre, como já acontece com banda e tamanho de tela. A
diferença é que agora a variável não é quanto o conteúdo demora — é quanto o produto consegue
*pensar* na máquina do outro.

Por que isso merece mapa de futuro e não levantamento de estado da arte: o estado da arte aqui é
fácil de descrever e já está descrito na Seção 3 — as APIs existem, as versões estão nomeadas,
os números de desempenho estão publicados. O que não está resolvido, e o que só um mapa consegue
tratar, são as consequências de segunda e terceira ordem de uma inversão de arquitetura: quem
responde pelo que o modelo diz quando ele mora no aparelho, quem atualiza, quem pode desligar,
quem fica de fora, e o que acontece com a memória acumulada por um agente que nunca mandou nada
para lugar nenhum. Nenhuma dessas perguntas é respondida por um comparativo de frameworks.

## 3. Onde isso está hoje

### O que já existe e funciona em produção

**No navegador.** A Prompt API do Chrome expõe o Gemini Nano a qualquer origem, sem chave e sem
chamada de rede após o download do modelo. A documentação oficial exige Chrome 138+, Windows 10/11,
macOS 13+, Linux ou ChromeOS em dispositivos Chromebook Plus — e registra explicitamente que
Chrome para Android, iOS e ChromeOS comum **não são suportados**. O requisito de hardware é o
detalhe que o entusiasmo costuma pular: 22 GB livres no volume do perfil, GPU com mais de 4 GB de
VRAM *ou* 16 GB de RAM com 4 ou mais núcleos, e remoção automática do modelo se o espaço livre
cair abaixo de 10 GB ([Prompt API, Chrome for Developers][2]). A página guarda-chuva de Built-in
AI lista a família de APIs (Prompt, Summarizer, Translator, Language Detector como base, e
Writer, Rewriter e Proofreader em origin trial) mas não consolida requisitos ([Built-in AI][3]).

**WebGPU deixou de ser condicional.** Segundo o status oficial do grupo de trabalho, o WebGPU
está em produção no Chrome desde a versão 113 em Mac, Windows e ChromeOS (Linux Intel Gen12+ só
a partir da 144, NVIDIA/Wayland a partir da 147), no Safari 26 em macOS, iOS, iPadOS e visionOS,
e no Firefox a partir da 141 no Windows, 145 em Apple Silicon e 147 em todos os Macs. Android no
Firefox e Windows ARM64 no Chrome seguem em desenvolvimento ([gpuweb Implementation Status][10]).
Isto é o "por que agora" mais concreto do tema: a camada de aceleração parou de ser um flag.

**Nos sistemas operacionais.** No Android, o Gemini Nano roda dentro do serviço de sistema AICore,
que cuida de aceleração por hardware e da atualização do modelo; os aplicativos chegam nele pelas
GenAI APIs do ML Kit — Prompt, Summarization, Proofreading, Rewriting, Image Description e Speech
Recognition ([Gemini Nano, Android Developers][9]). Na Apple, o Foundation Models framework dá
acesso em Swift ao modelo que roda no aparelho; a terceira geração do modelo tem 3 bilhões de
parâmetros no AFM 3 Core e uma variante esparsa de 20 bilhões que ativa de 1 a 4 bilhões por vez,
com treino consciente de quantização — a Apple não publica, nesse texto, nem o número de bits,
nem pegada de memória, nem latência ([Apple Machine Learning Research][4]).

**Na base aberta.** O formato GGUF e o llama.cpp são o padrão de fato da inferência local, e em
20 de fevereiro de 2026 Georgi Gerganov e o núcleo da ggml.ai passaram a trabalhar em tempo
integral na Hugging Face — juntando, na mesma casa, a camada de distribuição de modelos e a
camada de execução local ([Enclave AI][15]). Vale registrar o que esse movimento significa de
concentração, e não só de conveniência.

### O que existe como protótipo, paper ou demo e não está em produção de massa

**Quantização de 1,58 bit.** O bitnet.cpp é o framework oficial de inferência para modelos de
1 bit e reporta ganho de 1,37× a 5,07× em CPUs ARM e de 2,37× a 6,17× em x86, com redução de
energia de 55,4% a 70,0% e de 71,9% a 82,2% respectivamente, além de rodar um modelo de 100B numa
única CPU a 5–7 tokens por segundo — velocidade de leitura humana. Os modelos oficiais publicados
são pequenos: BitNet-b1.58-2B-4T (2,4B) e dois modelos de embedding, de 0,6B e 270M, lançados em
julho de 2026. O kernel de GPU saiu em maio de 2025 ([microsoft/BitNet][1]). Ou seja: a promessa
está publicada e a linha de produtos ainda não existe.

**Inferência no navegador com modelo próprio.** O WebLLM compila kernels WebGPU via MLC-LLM e
Apache TVM e retém de 71% a 80% da vazão de decodificação do runtime nativo na mesma máquina —
41,1 tok/s contra 57,7 no Llama-3.1-8B, e 71,1 contra 89,3 no Phi-3.5-mini, medidos num MacBook
Pro M3 Max com quantização de 4 bits ([WebLLM, arXiv 2412.15803][7]). Um MacBook Pro M3 Max não é
o aparelho mediano de ninguém, e o próprio artigo não sistematiza os limites de memória e de
download do navegador.

**Agente pequeno no lugar do modelo grande.** Belcak e colegas, da NVIDIA, sustentam em artigo de
posição que modelos pequenos são "suficientemente capazes, inerentemente mais adequados e
necessariamente mais econômicos" para boa parte das invocações de um sistema agêntico, e propõem
um algoritmo de conversão de agente de LLM para SLM ([arXiv 2506.02153][8]). É posição
argumentada, não resultado experimental fechado — e é a peça teórica que sustenta a ideia de
agente local.

**O silício que ainda não chegou.** A Qualcomm afirma que a próxima geração do NPU Hexagon
suportará modelos MoE de até 30 bilhões de parâmetros no aparelho, com 50% mais desempenho de
pre-fill em INT4, decodificação especulativa e memória compartilhada maior para segurar KV-cache
sem depender da RAM principal. O anúncio detalhado estava marcado para 22 de setembro de 2026
([Android Authority, 10/09/2026][16]). É promessa de fabricante, com a data ainda à frente.

### O que existe e não funciona como se anuncia

A evidência mais dura contra o otimismo do tema é de 1º de junho de 2026. Alimaskina, Rudas,
Shveykin, Molodtsov, Vasiliev e Beznosikov testaram quantização só de pesos em W4A16 e W2A16
contra FP16 em modelos de raciocínio Qwen3 de 8B e 32B. Em 2 bits, o Qwen3-32B cai de 93,0% para
65,0% no MATH-500; o Qwen3-8B despenca a 17,2% e só volta a 74,2% com uma intervenção específica
de resgate de loop. E a degradação não é uniforme: aparecem modos de falha estruturais — falha de
busca de caminho e falha de compromisso, com looping e esgotamento de orçamento de tokens. Os
autores concluem que a substituição direta por 2 bits não entrega ganho de ponta a ponta sem
fallback seletivo em precisão cheia ([arXiv 2606.02011][6]). Traduzindo para o tema: a versão
barata do modelo não é "a mesma coisa um pouco pior" — ela erra de outro jeito.

O segundo desmentido é de mercado. A Counterpoint Research projeta que aparelhos capazes de GenAI
cheguem a 45% das remessas globais em 2026, contra 36% em 2025, com o recurso virando padrão
acima de US$ 400 no atacado — e registra, na mesma análise, que os consumidores ainda não veem
recursos práticos suficientes de IA para justificar a troca, e que o aumento de custo da memória
atinge primeiro o segmento de entrada ([ElectronicsForYou / Counterpoint][11]). Capacidade
instalada não é uso.

O terceiro é de insumo, e é o que mais importa para o recorte brasileiro. A demanda de DRAM dos
data centers de IA desviou a oferta da eletrônica de consumo: chips DDR4x de 4 GB saltaram de
cerca de US$ 7 para mais de US$ 30 no atacado, e a projeção é que o celular de entrada volte ao
padrão de 4 GB de RAM em 2026, com preço igual ou maior. Mercados sensíveis a preço, com o Brasil
nomeado, absorvem o impacto primeiro ([TargetHD][12]). O mesmo boom que promete IA local está
retirando do aparelho popular o recurso de que a IA local depende.

### Quem está construindo

Microsoft (BitNet, bitnet.cpp, linhagem Phi), Google (Gemini Nano, AICore, ML Kit GenAI, Chrome
Built-in AI), Apple (Foundation Models framework, AFM 3, Private Cloud Compute, Core AI, MLX),
Qualcomm e MediaTek (NPU), a comunidade ggml/llama.cpp agora dentro da Hugging Face, o projeto
MLC (WebLLM, MLC-LLM), e a camada de ferramenta de usuário — Ollama, LM Studio, Jan, GPT4All. Do
lado do risco, existe também quem constrói o desfazimento: o utilitário Heretic remove
alinhamento de segurança de modelos de peso aberto em menos de dez minutos num laptop comum,
atingindo Llama 3.3, Gemma 3 e 4, modelos abertos da Mistral e milhares de derivados no Hub — e
um artigo do ICLR 2026 reporta até 99% de taxa de contorno ([Akerman][14]).

### Um movimento que borra a fronteira deste mapa

Na WWDC 2026 a Apple apresentou o Foundation Models framework como protocolo único: o mesmo
`LanguageModel` serve o modelo do aparelho, o Private Cloud Compute, modelos abertos via MLX e —
por pacotes Swift anunciados — Claude, da Anthropic, e Gemini, do Google ([WWDC26, sessão 339][5]).
O framework chamado de "local" vira um roteador. Isso é bom para quem desenvolve e péssimo para a
nitidez da distinção que este mapa trata: a partir daí, "usa IA local" deixa de ser uma
propriedade observável do aplicativo.

## 4. As disrupções-raiz

As três abaixo passaram pelo teste de três perguntas descrito na skill. O registro completo do
teste, incluindo os candidatos reprovados, está na Seção 12.

### D1 — A inferência vira recurso do sistema operacional e do navegador, sem chave e sem custo por chamada

**O que rompe.** Rompe a premissa de que usar um modelo exige um terceiro com quem se tem
contrato. Uma página web ou um aplicativo passa a invocar um LLM sem conta, sem chave, sem
servidor, sem custo marginal e sem que o dado saia do aparelho. O que isso invalida é nomeável e
está em uso hoje: o modelo de negócio de venda de inferência por token na faixa de tarefas
pequenas; a prática dominante de produto que consiste em embrulhar uma API de terceiro; a figura
do custo por usuário como restrição de projeto de interface; e a cota de API como o fator que
decide o que um projeto pequeno pode ou não fazer.

**Por que agora e não há cinco anos.** Porque em 2026 três camadas fecharam ao mesmo tempo, e
nenhuma das três existia em 2021: a Prompt API estabilizada no Chrome com modelo embutido e sem
chave ([2]); o WebGPU disponível nos três motores, com Safari 26 e Firefox 147 fechando a conta
([10]); e as GenAI APIs do ML Kit, no Android, entregando prompt, sumarização, descrição de imagem
e reconhecimento de fala por cima do AICore ([9]). Somado a isso, a Apple transformou o acesso ao
modelo do aparelho numa API de sistema em Swift ([4], [5]).

**O que falta para se concretizar.** Falta o mais banal: o celular. A Prompt API não roda em
Chrome para Android nem para iOS, e exige 22 GB livres e 16 GB de RAM ou 4 GB de VRAM no desktop
([2]). Enquanto a superfície web ficar restrita ao laptop bem equipado, isto é uma disrupção com
alcance de nicho — e é exatamente por essa fresta que o efeito e2, do degrau de hardware, entra
no mapa.

### D2 — Quantização extrema como via de acesso ao parque instalado *(emergente, com ressalva)*

**O que rompe, e por que a ressalva.** Torna possível o que não era: rodar um modelo de escala
útil em CPU comum, sem GPU e sem NPU — 100B a velocidade de leitura humana numa CPU única ([1]).
Isso passa na primeira pergunta do teste com folga. Na segunda, não passa inteiro: dá para nomear
o que *ameaçaria* (a premissa de que IA exige acelerador, o valor da barreira de capital em
hardware, o mercado de acelerador dedicado na borda), mas nada disso foi rompido ainda. Não há
produto de massa rodando BitNet; os modelos oficiais publicados param em 2,4B, mais dois modelos
de embedding ([1]). Pelo critério da skill, isso é **emergente**: entra na Seção 4 declarada como
aposta, não como rompimento consumado.

**Por que agora.** Porque a escassez mudou de lugar. Enquanto o recurso escasso era computação, a
quantização era otimização de custo; quando o recurso escasso passa a ser memória — DDR4x de 4 GB
saindo de US$ 7 para mais de US$ 30 no atacado, celular de entrada voltando a 4 GB ([12]) — a
quantização deixa de ser economia e vira condição de existência. E a base técnica amadureceu numa
sequência datada: modelo de 2B em abril de 2025, kernel de GPU em maio de 2025, otimização de CPU
em janeiro de 2026, modelos de embedding em julho de 2026 ([1]).

**O que falta.** Falta a evidência de qualidade que nenhuma das fontes abertas aqui fornece. O
único dado experimental independente que este mapa conseguiu abrir sobre precisão extrema aponta
na direção contrária: 2 bits desorganizam o raciocínio, e não apenas baixam a nota ([6]). E falta
o passo mais caro: treinar em 1,58 bit exige treino do zero — o custo é de quem treina, não de
quem quantiza depois. Depende de um laboratório decidir gastar uma corrida inteira nisso.

### D3 — O agente pessoal local: o aparelho como servidor de inferência com memória privada e contínua

**O que rompe.** Rompe a arquitetura do assistente como SaaS. Um agente que roda no aparelho pode
ler o que hoje nenhum contrato permite enviar para fora — mensagens, arquivos de trabalho, tela,
dado de saúde — porque nada sai. Isso invalida, de forma nomeável: o assistente cujo diferencial é
guardar o seu contexto no servidor dele; a assinatura de copiloto cujo valor é acesso ao modelo; e
a posição do provedor de nuvem como intermediário obrigatório do contexto pessoal. O deslocamento
de valor é do modelo para a memória — e a memória, aqui, é bem pessoal, não conta de serviço.

**Por que agora.** Porque três condições se encontraram. A tese de que modelos pequenos bastam
para a maior parte das invocações de um agente ganhou formulação explícita e um algoritmo de
conversão ([8]). As APIs de sistema passaram a oferecer o que um agente precisa e um chat não —
saída estruturada, prompt multimodal, cache de prefixo — via ML Kit ([9]). E o silício anunciado
mira exatamente o loop de agente: MoE de até 30B no NPU, pre-fill 50% mais rápido em INT4, memória
compartilhada para KV-cache ([16]).

**O que falta.** Falta responder quem responde. A Apple documenta que o framework roteia para
Private Cloud Compute e para modelos de terceiros sob o mesmo protocolo ([5]); o Google documenta
que alterar restrições do pacote de sistema do AICore exige atualização OTA completa do Android
([9]). Traduzindo: a cadeia de atualização e de responsabilidade do modelo que roda no seu bolso
é do fabricante, não sua — e é isso que o ramo e6.2 persegue. Falta também o caso jurídico que
ainda não aconteceu: nenhum tribunal decidiu, até aqui, quem paga quando um agente local causa
dano.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A inferência vira recurso do sistema operacional e do navegador, sem chave e sem custo por chamada
    efeitos:
      - id: e1
        ordem: 1
        efeito: O custo marginal de IA em produto de mídia cai a zero e a IA deixa de ser recurso premium para virar comportamento padrão da interface
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Interfaces passam a gastar inferência em tarefas que jamais justificariam uma chamada paga, como reescrever rótulo, adaptar texto ao leitor e descrever imagem a cada renderização
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A noção de conteúdo publicado se dissolve, porque cada leitor recebe uma versão gerada na própria máquina e não existe mais um artefato canônico a arquivar
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O negócio de IA por assinatura se desloca do acesso ao modelo para a sincronização, a memória e o modelo grande de exceção
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: A nuvem de IA se reposiciona como serviço de treino, atualização e auditoria de modelos, e não de inferência de varejo
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Abre-se um degrau visível de qualidade entre quem tem hardware e quem não tem, e a mesma página entrega experiências diferentes conforme o aparelho
        sinal: medio
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Projeto de produto passa a exigir degradação graciosa de inteligência, como já se faz com banda e tamanho de tela
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Exigir NPU para usar um serviço vira questão de discriminação de acesso e entra na mesma pauta regulatória da acessibilidade
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: Cota e chave de API deixam de ser a restrição que organiza projetos pequenos e o gargalo migra para memória e bateria do usuário
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: O orçamento de memória do aparelho vira recurso disputado entre aplicativos e o sistema operacional passa a arbitrar quem pode carregar modelo
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: O modelo compartilhado do sistema se firma como padrão de fato e o modelo próprio de aplicativo vira exceção cara, reservada a quem tem motivo para pagar por ela
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: Quantização extrema abre o parque instalado de hardware comum à inferência de modelos úteis
    efeitos:
      - id: e4
        ordem: 1
        efeito: Modelos úteis passam a rodar em hardware sem acelerador, incluindo aparelhos de entrada e máquinas antigas
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: O parque instalado vira a plataforma de IA relevante e o ciclo de troca de aparelho deixa de ser a porta de entrada da tecnologia
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Regiões de renda baixa e base de aparelhos antigos deixam de ser mercado exclusivo de nuvem e passam a ter IA offline por padrão
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Qualidade de modelo deixa de ser um número único e vira perfil de capacidade, com o mesmo produto raciocinando pior e resumindo igual
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Surge rotulagem pública de capacidade local, equivalente ao selo de eficiência energética, para o usuário saber o que o próprio aparelho consegue fazer
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: A memória, e não o processamento, vira o recurso escasso que define o que a IA local consegue fazer
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Fabricantes passam a vender memória como diferencial de IA e o preço do aparelho de entrada descola do poder de compra em mercados sensíveis a preço
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Brasil e mercados semelhantes chegam a 2031 com IA local concentrada no topo da pirâmide e nuvem para o restante, invertendo a promessa de democratização
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: O agente pessoal local transforma o aparelho em servidor de inferência com memória privada e contínua
    efeitos:
      - id: e6
        ordem: 1
        efeito: Assistentes passam a ler material que hoje nenhum contrato permite enviar para fora, como mensagens, arquivos de trabalho, tela e dado de saúde
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O valor do assistente passa a vir da memória acumulada nele, e trocar de assistente vira perda em vez de migração
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A memória do agente entra em inventário de herança, partilha de divórcio e apreensão judicial, como já ocorre com o conteúdo do celular
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: A responsabilidade pelo que o modelo diz se desloca para quem o embarca, isto é, o fabricante do aparelho, do navegador ou do aplicativo
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: O fabricante de sistema operacional vira guardião de última instância do que a IA pessoal pode dizer, e a disputa por modelo sem trava sai da borda técnica para a arena política
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: O computador pessoal volta a ser servidor e o celular vira terminal de um agente que roda em casa
        sinal: fraco
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Controle remoto criptografado de agente local vira categoria de produto com nome próprio
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Forma-se um mercado de hospedagem doméstica de IA, vendida como eletrodoméstico, no lugar que o NAS ocupou para arquivos
                sinal: fraco
                prazo: 2033
                confianca: baixa
```

### O que o bloco não diz

Três coisas ficam de fora da estrutura, e são as que mais importam.

**A primeira é que os ramos são dependentes entre si, e o YAML os apresenta como paralelos.** O
ramo e4–e4.1–e4.1.1 só existe se D2 se concretizar; se a quantização extrema não entregar
qualidade, esse ramo inteiro some e o mapa encolhe para "IA local existe, mas só em aparelho
caro". O ramo e5, ao contrário, é *independente* de D2 dar certo — a escassez de memória acontece
de qualquer forma, e é justamente ela que torna D2 necessária. Há, portanto, um cruzamento
implícito que o formato não comporta: e5 aumenta a pressão por D2 ao mesmo tempo em que reduz a
chance de e4.1. Este é exatamente o tipo de dependência que a Análise de Impacto Cruzado formaliza
e que a roda, sozinha, não formaliza.

**A segunda é que e1 e e5 puxam em direções opostas.** e1 diz que o custo marginal vai a zero;
e5 diz que o custo fixo — memória embarcada — sobe. Os dois estão marcados com sinal forte porque
os dois já são observáveis hoje. O saldo não é dado pelo mapa: depende de quem paga o custo fixo.
Se o custo fixo cai sobre o usuário no preço do aparelho, e1 é uma vitória para quem desenvolve e
uma conta para quem compra.

**A terceira é o que o bloco não tem: nenhum efeito de 1ª ordem descreve o cenário em que a IA
local simplesmente não pega.** Não porque a tecnologia falhe, mas porque o usuário não percebe
diferença — que é literalmente o que a Counterpoint registra em 2026, com 45% dos aparelhos
capazes e consumidores sem razão para trocar ([11]). A ausência desse ramo é um defeito do mapa, e
está tratada na Seção 7.

## 6. Sinais fracos e wildcards

### Sinais fracos

**A distribuição e a execução no mesmo dono.** A ida do núcleo da ggml.ai para a Hugging Face, em
fevereiro de 2026, junta a loja de modelos e o motor que os roda ([15]). Hoje isso se lê como
conveniência — menos atraso entre o lançamento de um modelo e sua disponibilidade local. Lido como
sinal, é outra coisa: se o Hub vira a loja de aplicativos da IA local, quem controla o Hub decide
o que roda na sua máquina — e a independência que a IA local promete some pela porta da
distribuição, não pela da inferência.

**O framework "local" virando roteador.** A Apple expôs um protocolo único em que o mesmo código
chama o modelo do aparelho, o Private Cloud Compute, um modelo MLX da comunidade, ou o Claude e o
Gemini por pacote Swift ([5]). O efeito de segunda ordem é de vocabulário, e por isso é fácil de
não ver: "este aplicativo usa IA local" deixa de ser uma afirmação verificável pelo usuário. A
fronteira que este mapa inteiro trata pode se apagar por dentro da API, sem nenhuma derrota
técnica.

**O alinhamento como propriedade do canal, e não do modelo.** O Heretic remove alinhamento de
segurança em menos de dez minutos num laptop comum, atingindo Llama 3.3, Gemma 3 e 4 e milhares de
derivados, e um artigo do ICLR 2026 reporta até 99% de contorno ([14]). Isso significa que
guardrail em modelo de peso aberto não é uma propriedade do artefato: é uma propriedade de quem
distribui e de quem audita. Todo o ramo e6.2 depende disso — e a consequência incômoda é que a
única forma eficaz de manter trava num modelo local é controlar o canal, o que é exatamente o
poder que a IA local prometia dissolver.

**O contra-sinal de insumo.** A IA na nuvem está encarecendo a memória do celular, que é o insumo
da IA local ([12]). Este é o sinal mais forte contra o próprio tema, e aparece disfarçado de
notícia de mercado de componentes, não de notícia de IA.

### Wildcards

**Wildcard 1 — um modelo ternário de qualidade de fronteira num aparelho de entrada de 4 GB até
2029.** Impacto altíssimo: reescreveria e4, e5 e todo o recorte brasileiro, e transformaria D2 de
emergente em disrupção consumada da noite para o dia. A probabilidade é baixa por três razões
concretas, e não por pessimismo genérico. Primeira: a evidência disponível de 2026 vai na direção
oposta — 2 bits quebram a estrutura do raciocínio, não só a pontuação, e a recuperação depende de
fallback em precisão cheia ([6]). Segunda: os modelos BitNet oficialmente publicados param em
2,4B, mais dois de embedding ([1]); não existe nada de escala de fronteira treinado assim.
Terceira, e a mais decisiva: treinar em 1,58 bit exige treino do zero, então o custo recai sobre
quem treina e não sobre quem quantiza — depende de um laboratório decidir queimar uma corrida
inteira de treinamento numa aposta de precisão.

**Wildcard 2 — a primeira condenação de um fabricante de aparelho por dano causado por agente
local.** Hoje não existe caso. Se existir, e se a responsabilidade recair sobre quem embarcou o
modelo — e não sobre quem escreveu o aplicativo —, o incentivo racional do fabricante passa a ser
entregar o modelo local desligado por padrão, ou travado a um catálogo de tarefas aprovadas. O
mapa inverte: e6.2.1 deixa de ser efeito de 3ª ordem em 2031 e vira efeito de 1ª ordem em dois
anos. A probabilidade é baixa porque exige o encontro de um dano relevante, um litígio bem
financiado e um tribunal disposto a inovar em imputação — mas a discussão já está formada: o
Heretic já provocou, segundo análise jurídica, a pergunta sobre tratar peso aberto como
tecnologia de uso dual sujeita a controle de distribuição ([14]).

**Wildcard 3 — regulação que exija que a IA sensível rode localmente.** O oposto do wildcard 2.
Basta uma autoridade decidir que certos tratamentos de dado pessoal não podem sair do dispositivo
para que a IA local deixe de ser escolha de arquitetura e vire requisito de conformidade. No
Brasil o vetor existe e está parado: o PL 2338/2023 foi aprovado pelo Senado e remetido à Câmara
em 17 de março de 2025, onde segue sem votação ([13]); a ANPD, por sua vez, já coloca IA entre
seus eixos prioritários. Probabilidade baixa no horizonte porque depende de uma tramitação que já
está há mais de um ano parada — mas o impacto seria imediato e tornaria e6 um efeito de prazo
muito mais curto.

## 7. Contra o próprio mapa

### 1. O efeito que é só extrapolação linear do presente: e1

**e1 — "o custo marginal de IA cai a zero e a IA vira comportamento padrão da interface"** é o
efeito mais bem classificado da roda (sinal forte, confiança alta) e é o menos interessante dela.
Ele descreve a curva que armazenamento, banda e CDN já percorreram: um recurso computacional
caro fica barato, e o que era premium vira padrão. Isso é "mais do mesmo, mais barato" — não é
mudança de natureza. A prova está em e1.1, que é onde o efeito tentaria se tornar qualitativo e
não consegue: reescrever rótulo, adaptar texto, descrever imagem são tarefas que *já são feitas
hoje* com chamada de nuvem em produtos que podem pagar por elas. O que e1 realmente prevê é que
mais gente poderá fazer o que a Netflix e o Google já fazem. É uma mudança de distribuição de
acesso, não de gramática de interface — e o texto da Seção 2 exagera ao chamá-la de gramática.

### 2. O efeito que assume velocidade de adoção nunca vista: e4.1

**e4.1 — "o parque instalado vira a plataforma de IA relevante" até 2030.** O caso comparável
está dentro deste próprio documento e é o WebGPU. A especificação começou a ser trabalhada em
2017, a primeira implementação estável saiu no Chrome 113 em abril de 2023, o Safari só entregou
na versão 26 em 2025, o Firefox fechou o Mac na 147, e Android no Firefox e Windows ARM64 no
Chrome continuavam em desenvolvimento em 2026 ([10]). São oito a nove anos entre início e
disponibilidade nos três motores — para uma camada gráfica que não exige baixar gigabytes nem
gerenciar memória de modelo. Supor que um runtime de precisão extrema percorra o parque instalado
de aparelhos reais em quatro anos assume uma velocidade que a própria camada de base, mais
simples e mais leve, não teve. O prazo honesto para e4.1 não é 2030; é depois de 2033, e eu o
mantive em 2030 por otimismo sobre o ritmo do open source.

### 3. A disrupção que pode simplesmente não se concretizar: D2

**D2, a quantização extrema.** Ela já entra no mapa com a ressalva de emergente, e a evidência
contrária é direta e datada: Qwen3-32B cai de 93,0% para 65,0% no MATH-500 em 2 bits, o Qwen3-8B
vai a 17,2%, e a degradação é estrutural — looping e não-comprometimento —, com recuperação
dependente de fallback em precisão cheia ([6]). Se D2 cair, cai o ramo e4 inteiro e cai a
justificativa técnica de e4.1 e e4.1.1. Sobra do mapa: D1 e D3, que não dependem dela — mas ambos
passam a valer apenas para hardware de faixa alta, e e5.1.1 (Brasil com IA local no topo da
pirâmide) deixa de ser efeito de 3ª ordem com confiança baixa e vira praticamente descrição do
presente. Em outras palavras: sem D2, este mapa não é sobre democratização de IA — é sobre um novo
recurso de aparelho caro. Vale registrar que essa é a leitura mais provável, não a menos.

### 4. O viés que entrou aqui

O viés pedido foi neutro, e a origem do tema não é neutra. Ele vem de uma varredura feita por
alunos e de uma experiência concreta de sala de aula: três alunos rodaram o julgamento das suas
500 entradas em modelo local depois de esbarrar em cota de API. Isso produz um viés específico, e
não genérico — **viés de quem apanhou da cota**. Quem apanha de limite de API superestima o quanto
o limite de API organiza o mundo.

Onde exatamente isso inflou o mapa: **e3** ("cota e chave de API deixam de ser a restrição que
organiza projetos pequenos") está classificado com sinal forte, prazo 2027 e confiança alta — e a
base empírica dessa classificação é uma atividade de disciplina, não um dado de mercado. Para a
maior parte de quem projeta mídia e interação em escala, cota de API nunca foi a restrição
principal; custo por usuário em produção é outra coisa, e continua existindo do lado do suporte,
da avaliação e da atualização do modelo. Uma classificação honesta de e3 seria sinal médio e
confiança média.

Há um segundo viés, visível na forma da roda: **a assimetria denuncia o que eu quis que fosse
verdade**. D1 recebeu três ramos, D3 recebeu dois, D2 recebeu dois — e nenhum dos sete efeitos de
1ª ordem descreve o desfecho mais chato e mais provável de todos, que é a IA local existir, estar
instalada, e o usuário não ligar. Esse desfecho tem evidência de 2026 ([11]) e não tem nó no
mapa. A omissão não é acidental: um mapa cujo efeito de 1ª ordem principal fosse "ninguém percebe"
não renderia roda nenhuma — o que é precisamente a tentação que o método não protege contra.

## 8. O que a máquina errou

Cinco erros concretos, todos ocorridos durante esta rodada.

**1. Quase escrevi de memória o número de qualidade do BitNet.** Tentei abrir o relatório técnico
do BitNet b1.58 2B4T (arXiv 2504.12285) para citar a comparação com modelos de precisão cheia de
tamanho equivalente. O PDF voltou ilegível pelo leitor. O reflexo foi completar a frase com o que
"se sabe" sobre o modelo — que ele iguala modelos densos de mesma escala. Não entrou. O que entrou
foi só o que o repositório oficial de fato afirma, que é velocidade e energia ([1]), e a
qualidade do BitNet ficou declarada como não verificada neste documento. Como percebi: a frase que
eu ia escrever era mais específica do que qualquer fonte que eu tinha aberto.

**2. Números de adoção do Ollama, redondos e sem metodologia.** A busca devolveu "52 milhões de
downloads mensais no primeiro trimestre de 2026", "8,9 milhões de desenvolvedores", "crescimento
de 300% segundo o JetBrains AI Pulse" e "38% dos praticantes segundo pesquisa da Hugging Face de
2025". Nenhum desses números apareceu em fonte primária: todos vinham de blogs comerciais e
agregadores de conteúdo, sem link para a metodologia, e vários se contradiziam entre si sobre a
mesma métrica. É o mesmo padrão que o `DUVIDAS.md` do autor descreve no caso da estatística de
digital twins. Foram todos cortados. A evidência de ecossistema ficou com o que dá para verificar:
a mudança do time ggml para a Hugging Face, com data e nomes ([15]).

**3. "Vantagem de eficiência de 10.000×".** Uma das buscas sobre energia devolveu a afirmação de
que processadores ARM consomem 100 microwatts por inferência contra 1 watt na nuvem, numa
vantagem de dez mil vezes. Número redondo, sem unidade de trabalho comparável — inferência de
quê, com qual modelo, medida como? Descartado inteiro. O argumento de energia neste documento
ficou apenas com o que o próprio bitnet.cpp mede e publica contra baselines nomeados: 55,4% a
70,0% em ARM e 71,9% a 82,2% em x86 ([1]).

**4. Duas fontes que eu ia citar sem ter conseguido abrir.** O estudo de pegada ambiental
nuvem × borda no ACM SIGMETRICS e o release da IDC sobre remessas de smartphones GenAI
devolveram HTTP 403. Ambos apareciam resumidos no buscador, com números atraentes e citáveis. Não
entraram na Seção 11 — estão registrados como falha na Seção 12, e o dado de participação de
mercado usado no documento é o da Counterpoint, que abriu ([11]). A tentação aqui é específica e
vale nomear: o resumo do buscador *parece* leitura.

**5. Erro de categoria quase cometido: capacidade tratada como uso.** Em duas passagens da Seção 3
eu tinha escrito que "45% dos aparelhos usarão IA local em 2026". A fonte não diz isso: diz que
45% das remessas serão de aparelhos *capazes* de GenAI, e registra na mesma frase que o consumidor
não vê recurso prático que justifique a troca ([11]). Confundir as duas coisas teria transformado
o dado que mais contesta o mapa no dado que mais o sustenta. Como percebi: ao reler a citação para
conferir o número, o adjetivo "capable" estava lá e a minha paráfrase o tinha perdido. Este é o
erro mais grave dos cinco, porque não era um fato errado — era o mesmo fato com o sentido
invertido.

## 9. Três cenários para 2031

**Provável.** Em 2031 a IA local venceu como infraestrutura e perdeu como produto. Ela está em
praticamente todo aparelho vendido acima da faixa média, é invocada por milhares de sites e
aplicativos por dia sem que ninguém perceba, e deixou de ser chamada de IA: virou corretor,
tradutor, legendador e resumidor — funções de sistema, como o corretor ortográfico virou em 2005.
A economia mudou de lugar mas não de dono: o dinheiro saiu da chamada por token e foi para a
assinatura de sincronização, memória e modelo grande de exceção, cobrada pelas mesmas empresas que
antes vendiam a chamada. Na base da pirâmide, a crise de memória de 2026 deixou cicatriz: o
aparelho de entrada chega a 2031 com capacidade para transcrever e traduzir, não para sustentar um
agente com contexto longo — e a diferença entre os dois é justamente a diferença entre executar
tarefa e ter assistente. O Brasil está desse lado da linha, e a promessa de que a IA local
democratizaria o acesso se realizou ao contrário: ela tornou o hardware o novo gargalo de acesso,
e hardware, ao contrário de cota de API, não tem plano gratuito.

**Desejável.** Em 2031 o degrau de hardware virou requisito declarado de projeto, e não surpresa
de uso. Produtos anunciam o que fazem sem NPU do mesmo jeito que anunciam o que fazem sem conexão,
e existe um rótulo público de capacidade local — legível por quem compra, no padrão do selo de
eficiência energética — que diz o que aquele aparelho consegue rodar. O modelo do sistema é de
fato compartilhado: um modelo por aparelho, usado por qualquer aplicativo pela API pública, em vez
de cada aplicativo baixando o seu e disputando os mesmos gigabytes. Quem roda modelo local tem um
canal auditável de atualização, com trava e sem que a trava seja privilégio de um único fabricante.
Para chegar aqui foi preciso o que não é técnico: padronizar o rótulo entre fabricantes, tratar um
piso de memória em aparelho popular como política industrial em mercados sensíveis a preço, e
resolver em lei — e não em termo de uso — quem responde pelo que o modelo embarcado diz. Nada disso
depende de avanço de modelo; depende de decisão.

**Indesejável.** Em 2031 a IA local virou o argumento de venda do aparelho caro e a justificativa
para descartar o barato. O fabricante do sistema operacional decide o que o modelo pessoal de cada
um pode dizer, com atualização que chega junto com o sistema e sem opção de recusa; e a única
alternativa a isso é um ecossistema paralelo de modelos com a trava removida, distribuído por
canais que ninguém audita e usados exatamente por quem não deveria. As duas pontas ruins ao mesmo
tempo: censura de fábrica de um lado, nada do outro. O sinal precoce disso já está visível hoje e é
mensurável: a Prompt API do Chrome exige 22 GB livres, 16 GB de RAM ou 4 GB de VRAM e não roda em
Android nem iOS ([2]); o celular de entrada volta a 4 GB de RAM em 2026 ([12]); alterar a trava do
modelo do Android exige atualização OTA completa do sistema ([9]); e remover a trava de um modelo
aberto leva menos de dez minutos num laptop ([14]). Os quatro fatos são de 2026 e nenhum deles é
previsão.

## 10. O experimento

### O que é

**"O mesmo produto em três cérebros".** Uma única página web, que qualquer pessoa abre no próprio
aparelho, executando exatamente a mesma tarefa de mídia — reescrever uma legenda, descrever uma
imagem e resumir um parágrafo — por três caminhos diferentes na mesma máquina:

1. **Modelo do navegador**, pela Prompt API com Gemini Nano, sem chave e sem download feito por nós.
2. **Modelo próprio no navegador**, por WebLLM sobre WebGPU, com o peso baixado na hora.
3. **API de nuvem**, como linha de base.

A página mede, para cada caminho: tempo até o primeiro token, tempo total, tamanho do download,
pico de memória reportado pelo navegador, e — o dado que de fato interessa — **se o caminho
completou ou falhou, e por qual motivo** (API ausente, hardware insuficiente, espaço em disco,
WebGPU indisponível, download interrompido). Cada execução envia ao painel da turma apenas o
resultado e a descrição do aparelho. Nenhum conteúdo sai.

### Que pergunta sobre o futuro ele responde

**Em 2026, que fração dos aparelhos que a turma realmente tem consegue rodar a via local com
qualidade aceitável?** Essa pergunta testa diretamente dois efeitos do mapa: **e2** (o degrau de
hardware existe e é visível) e **e4** (o parque instalado é ou não plataforma). E testa uma
afirmação da Seção 3 que ninguém deveria aceitar sem medir: os números públicos de desempenho de
inferência no navegador foram obtidos num MacBook Pro M3 Max ([7]) — este experimento substitui
esse aparelho pelo parque real de uma turma de graduação no Recife.

### Que tecnologia emergente usa, e por que não dá com tecnologia madura

Usa a Prompt API estabilizada no Chrome com modelo embutido ([2]) e o WebGPU, que só virou base
nos três motores entre 2025 e 2026 ([10]). Não dá para fazer com tecnologia madura porque o objeto
medido *é* a inferência local: com API de nuvem, o experimento vira um benchmark de latência de
rede, que é exatamente a medição que a tecnologia madura já sabe fazer e que não responde nada
sobre este mapa. A terceira via, de nuvem, está no experimento como régua — não como objeto.

### O que a turma faz quando testar isso em sala

Cada pessoa abre a página no próprio laptop e, quando o aparelho permitir, no próprio celular —
sem padronizar máquina, que é o ponto. O painel agrega em tempo real e projeta a tabela: uma
linha por aparelho, três colunas de resultado. A discussão não é sobre a média; é sobre a
**dispersão** e sobre quem ficou de fora. A pergunta para a roda, em sala: se este fosse o seu
produto, o que a pessoa da última linha da tabela veria na tela?

### O que seria um resultado que me faria mudar de ideia

Dois resultados, em direções opostas, e ambos declarados antes de rodar:

- **Se a via local completar com qualidade aceitável em 80% ou mais dos aparelhos da turma**, e2
  perde força, o degrau de hardware é menor do que este mapa supõe, e o ramo de desigualdade
  (e5.1, e5.1.1) está superdimensionado. O mapa seria pessimista demais, e a nota sobre o Brasil
  precisaria ser reescrita.
- **Se 20% ou menos conseguirem sequer baixar e iniciar o modelo**, D1 não é disrupção em 2026 — é
  promessa de plataforma. Nesse caso o horizonte inteiro deste documento está adiantado, e um mapa
  honesto teria alvo em 2036, não em 2031.

## 11. Fontes

Dezesseis fontes, todas abertas e lidas nesta rodada. As duas que não abriram estão registradas na
Seção 12, e não são citadas em nenhuma afirmação do texto.

1. **Microsoft — repositório oficial do BitNet** · `https://github.com/microsoft/BitNet`
   Sustenta: os números de aceleração (1,37×–5,07× em ARM; 2,37×–6,17× em x86), de redução de
   energia (55,4%–70,0% e 71,9%–82,2%), o caso do modelo de 100B a 5–7 tokens/s em CPU única, e a
   lista real de modelos publicados (2,4B + embeddings de 0,6B e 270M), com as datas de julho de
   2026, janeiro de 2026 e maio de 2025. *Confiabilidade:* alta para o que a própria Microsoft
   mede e publica; é fonte do fabricante e não substitui avaliação independente de qualidade —
   razão pela qual a qualidade do BitNet não é afirmada neste documento.

2. **Chrome for Developers — The Prompt API** · `https://developer.chrome.com/docs/ai/prompt-api`
   Sustenta: requisitos de hardware e sistema (22 GB livres, >4 GB VRAM ou 16 GB RAM com 4+
   núcleos, remoção do modelo abaixo de 10 GB livres), versões do Chrome, e a ausência de suporte
   em Android, iOS e ChromeOS comum. *Confiabilidade:* alta — documentação normativa do fornecedor
   sobre o próprio produto.

3. **Chrome for Developers — Built-in AI** · `https://developer.chrome.com/docs/ai/built-in`
   Sustenta: a existência da família de APIs embutidas. *Confiabilidade:* alta quanto ao escopo,
   mas a página é um índice: não consolida estabilidade nem requisitos, e por isso foi usada só
   como referência de existência.

4. **Apple Machine Learning Research — Introducing the Third Generation of Apple's Foundation
   Models** · `https://machinelearning.apple.com/research/introducing-third-generation-of-apple-foundation-models`
   Sustenta: 3 bilhões de parâmetros no AFM 3 Core; variante esparsa de 20B ativando de 1 a 4B;
   uso de treino consciente de quantização. *Confiabilidade:* alta para arquitetura; a própria
   página **não** informa número de bits, pegada de memória nem latência — ausência registrada no
   texto em vez de preenchida por suposição.

5. **Apple — WWDC26, sessão 339: Bring an LLM provider to the Foundation Models framework** ·
   `https://developer.apple.com/videos/play/wwdc2026/339/`
   Sustenta: o protocolo `LanguageModel` único cobrindo modelo do aparelho, Private Cloud Compute,
   MLX e pacotes Swift de Anthropic e Google. *Confiabilidade:* alta como declaração de intenção e
   de API; os pacotes de terceiros são anunciados como "em breve", e o texto trata assim.

6. **Alimaskina, Rudas, Shveykin, Molodtsov, Vasiliev, Beznosikov — Extreme Low-Bit Inference in
   Reasoning Models: Failure Modes and Targeted Recovery** (01/06/2026) ·
   `https://arxiv.org/html/2606.02011`
   Sustenta: a evidência central contra D2 — W2A16 derrubando Qwen3-32B de 93,0% para 65,0% no
   MATH-500, Qwen3-8B a 17,2%, modos de falha estruturais e necessidade de fallback em precisão
   cheia. *Confiabilidade:* média-alta — preprint não revisado por pares, mas com método,
   modelos e benchmarks nomeados e resultados reproduzíveis em princípio. É a fonte mais
   importante da Seção 7.

7. **Ruan et al. — WebLLM: A High-Performance In-Browser LLM Inference Engine** ·
   `https://arxiv.org/html/2412.15803v2`
   Sustenta: retenção de 71%–80% da vazão nativa (41,1 vs 57,7 tok/s no Llama-3.1-8B; 71,1 vs 89,3
   no Phi-3.5-mini), em MacBook Pro M3 Max com 4 bits. *Confiabilidade:* média-alta — dados
   claros, mas medidos em hardware de topo e sem enumeração sistemática dos limites de navegador,
   como o próprio texto reconhece.

8. **Belcak, Heinrich, Diao, Fu et al. (NVIDIA) — Small Language Models are the Future of Agentic
   AI** (06/2025, rev. 09/2025) · `https://arxiv.org/abs/2506.02153`
   Sustenta: a base teórica de D3 — modelos pequenos como suficientes, mais adequados e mais
   econômicos para invocações agênticas, com algoritmo de conversão proposto. *Confiabilidade:*
   média — é explicitamente um artigo de posição, de autores com interesse no ecossistema de
   hardware; usado como argumento, não como evidência.

9. **Android Developers — Gemini Nano** · `https://developer.android.com/ai/gemini-nano`
   Sustenta: arquitetura AICore, as seis GenAI APIs do ML Kit, e o fato decisivo para e6.2 — que
   alterar restrições do pacote de sistema exige atualização OTA completa do Android.
   *Confiabilidade:* alta; documentação do fornecedor. Não especifica lista de chipsets suportados.

10. **W3C GPU for the Web — Implementation Status** ·
    `https://github.com/gpuweb/gpuweb/wiki/Implementation-Status`
    Sustenta: o cronograma real do WebGPU por motor e plataforma, usado tanto como "por que agora"
    de D1 quanto como caso comparável de velocidade de adoção na Seção 7. *Confiabilidade:* alta —
    é o registro mantido pelo próprio grupo de trabalho.

11. **ElectronicsForYou, a partir de Counterpoint Research — GenAI Smartphones to Hit 45% Share of
    Global Shipments in 2026** ·
    `https://www.electronicsforyou.biz/industry-buzz/genai-smartphones-to-hit-45-share-of-global-shipments-in-2026/`
    Sustenta: 45% das remessas em 2026 contra 36% em 2025; corte de preço em US$ 400 no atacado; e
    a ressalva de que o consumidor não vê recurso prático que justifique a troca. *Confiabilidade:*
    média — é veículo secundário reportando análise de casa de pesquisa paga, sem acesso à
    metodologia. Usada porque o release primário da IDC não abriu, e tratada no texto sempre como
    **capacidade**, nunca como uso.

12. **TargetHD — Por que os smartphones de entrada entram 2026 "sob pressão"** ·
    `https://www.targethd.net/por-que-os-smartphones-de-entrada-entram-2026-sob-pressao/`
    Sustenta: DDR4x de 4 GB saindo de ~US$ 7 para mais de US$ 30 no atacado; retorno do padrão de
    4 GB de RAM no aparelho de entrada em 2026; Brasil nomeado entre os mercados mais atingidos.
    *Confiabilidade:* média — veículo de tecnologia reportando análise de mercado de componentes; o
    sentido do movimento é corroborado por várias outras matérias vistas na mesma busca, o valor
    exato do chip não foi verificado em fonte primária.

13. **Senado Federal — Projeto de Lei nº 2338, de 2023** ·
    `https://www25.senado.leg.br/web/atividade/materias/-/materia/157233`
    Sustenta: aprovação no Plenário do Senado e remessa à Câmara dos Deputados em 17/03/2025 (Ofício
    SF nº 235), sem votação posterior. *Confiabilidade:* alta — registro oficial de tramitação.

14. **Akerman LLP — Open-Weight AI Models: Safety Guardrails Can Be Removed in Minutes Using Free,
    Publicly Available Tools** ·
    `https://www.akerman.com/en/perspectives/open-weight-ai-models-safety-guardrails-can-be-removed-in-minutes-using-free-publicly-available-tools.html`
    Sustenta: o utilitário Heretic removendo alinhamento em menos de dez minutos em laptop comum;
    modelos atingidos (Llama 3.3, Gemma 3 e 4, abertos da Mistral e derivados); até 99% de contorno
    em artigo do ICLR 2026; e a discussão sobre tratar peso aberto como tecnologia de uso dual.
    *Confiabilidade:* média-alta — análise de escritório de advocacia, com fontes citadas
    (Financial Times, Nature Communications, ICLR 2026) que não foram abertas individualmente aqui.

15. **Enclave AI — llama.cpp Joins Hugging Face: What It Means for Local AI** (21/02/2026) ·
    `https://enclaveai.app/blog/2026/02/21/llama-cpp-joins-hugging-face-local-ai/`
    Sustenta: a entrada de Georgi Gerganov, Xuan-Son Nguyen e Aleksander Grygier na Hugging Face em
    20/02/2026, unindo distribuição e execução local. *Confiabilidade:* média — blog de empresa do
    setor (que vende produto de IA local, portanto com interesse na narrativa); o fato em si é
    público e datado, a leitura de "significado estratégico" no texto é minha, não da fonte.

16. **Android Authority — Qualcomm's next Snapdragon flagship chip wants your AI agents to stay
    on-device** (10/09/2026) ·
    `https://www.androidauthority.com/snapdragon-qualcomm-snapdragon-8-elite-gen-6-npu-3709726/`
    Sustenta: MoE de até 30B no NPU Hexagon, 50% mais pre-fill em INT4, decodificação especulativa,
    memória compartilhada maior para KV-cache; anúncio previsto para 22/09/2026.
    *Confiabilidade:* média — reportagem sobre material de pré-anúncio do fabricante; são alegações
    de vendor sobre produto não lançado, e o texto as trata explicitamente como promessa.

## 12. Anexo — o levantamento bruto

### 12.1. Etapa 1 — entrevista, respostas recebidas

Esta rodada foi executada sem interlocutor disponível; as respostas obrigatórias vieram
pré-definidas no despacho. Registradas literalmente:

- **Horizonte:** 2031.
- **Público:** quem projeta mídia e interação.
- **Recorte geográfico:** global, com uma nota sobre o Brasil.
- **Já descartado:** o que já é comum em produto de massa (a régua da disciplina). Nenhuma outra
  exclusão — confirmado explicitamente, conforme a skill exige quando a resposta é "nada".
- **Viés desejado:** neutro.
- **Zona de interesse:** Criação e plataforma.
- **Disrupção suspeita pelo autor:** nenhuma; instrução de descobrir.
- **Ideias óbvias a excluir:** as que servem para qualquer tema.
- **O que faria o autor mudar de ideia:** evidência de que a adoção já passou da maioria inicial
  (Rogers), ou de que a tecnologia não rompe nada e só melhora o que existe.
- **Profundidade:** três ordens. **Modo:** a partir de uma inovação, não de um setor.
- **`publico_ok`:** mantido `false` — não houve confirmação explícita de autorização, e a skill
  proíbe assumir.

**Observação sobre o critério de mudança de ideia.** O autor declarou que evidência de adoção
além da maioria inicial derrubaria o tema. A evidência encontrada é ambígua e merece registro
aqui, porque decide a legitimidade do mapa inteiro: 45% das remessas de 2026 são de aparelhos
capazes de GenAI ([11]) — o que, se lido como adoção, colocaria o tema já dentro da maioria
inicial e o desqualificaria pela régua da disciplina. Mas a mesma fonte registra que o consumidor
não vê recurso prático que justifique a troca, e o recurso é padrão apenas acima de US$ 400 no
atacado. Capacidade instalada não é adoção de uso. Somado ao fato de que a superfície web não roda
em celular nenhum ([2]), a decisão foi manter o tema como emergente. É uma decisão de julgamento,
e alguém aplicando o mesmo critério poderia decidir o contrário.

### 12.2. Etapa 3 — teste de disrupção aplicado, incluindo os reprovados

**Aprovados** (detalhados na Seção 4): D1 — inferência como recurso de sistema/navegador;
D2 — quantização extrema (emergente, com ressalva); D3 — agente pessoal local.

**Reprovados, com o motivo:**

- **Chamada de API de modelo na nuvem.** Reprovado na pergunta 1: não torna possível nada novo em
  2026. É o estado do mundo. A própria descrição do tema pela disciplina já o coloca como maduro.
  Aparece na Seção 3 como linha de base.
- **Quantização de 4 bits / ecossistema GGUF.** Reprovado na pergunta 1 por maturidade: é
  otimização de commodity, com mais de 178 mil modelos quantizados circulando e ferramenta de
  usuário final consolidada. Não torna possível o que não era; barateia o que já era. Entra na
  Seção 3, não na 4. *(O número de 178 mil apareceu em fonte secundária que não foi aberta e
  portanto não é citado no corpo do documento — ver 12.5.)*
- **NPU no celular.** Reprovado na pergunta 1. Acelera o que o software já fazia mais devagar; não
  habilita categoria nova por si. É condição de possibilidade de D1 e D3, não disrupção autônoma.
  Aparece na Seção 3 e como "por que agora" de D3 ([16]).
- **WebGPU.** Reprovado na pergunta 2: não invalida nenhuma prática, papel ou negócio por si só —
  é camada habilitadora. Foi promovido a "por que agora" de D1, e reaproveitado na Seção 7 como
  caso comparável de velocidade de adoção ([10]).
- **"Modelo de 1 bit com qualidade de fronteira em celular de entrada".** Reprovado como
  disrupção-raiz por não ter ocorrido; reclassificado como **wildcard 1** na Seção 6, conforme a
  regra de parada da Etapa 4 (exigiria encadear duas suposições não testadas: que a qualidade
  chegue, e que chegue a esse hardware).
- **"O framework local vira roteador local/nuvem".** Não é disrupção; é um movimento de produto
  observado ([5]) que *apaga* a fronteira do tema. Reclassificado como **sinal fraco** na Seção 6,
  porque o efeito dele é sobre a legibilidade do fenômeno, não sobre a tecnologia.

### 12.3. Etapa 4 — efeitos cortados da roda e o motivo do corte

Aplicada a regra de parada de derivação da skill: corta-se quando o efeito exige encadear duas ou
mais suposições independentes e não testadas.

- **"Modelos locais treinam continuamente com o usuário e viram bem pessoal herdável"** — cortado
  como efeito e reduzido. Exigia duas suposições empilhadas: que o treino contínuo no aparelho
  seja viável em 2031 (não há evidência aberta aqui) *e* que ele produza divergência persistente
  entre modelos. Sobrou apenas a parte rastreável, que é a **memória** acumulada — e1.1 do ramo
  D3, que virou e6.1 e e6.1.1. A pergunta de 3ª ordem proposta pela disciplina ("a inteligência
  vira bem pessoal como o diário? Herdável? Confiscável?") está no mapa, mas ancorada em memória,
  não em pesos, porque memória é o que de fato se acumula localmente hoje.
- **"A nuvem como negócio entra em declínio"** — cortado. Pula da inferência de varejo para o
  agregado do setor, ignorando treino, hospedagem, dado e tudo o mais. Sobrou a forma rastreável:
  e1.2.1, reposicionamento da nuvem em treino, atualização e auditoria.
- **"Modelos locais fragmentam a esfera pública porque cada um vê uma versão da notícia"** —
  cortado da roda por exigir suposições sobre economia de mídia que este mapa não levantou. O
  fragmento rastreável sobreviveu como e1.1.1 (dissolução do artefato canônico), que é uma
  afirmação sobre arquivo e cânone, não sobre opinião pública.
- **"Modelo de 1 bit viabiliza IA em dispositivo sem tela (vestível, brinquedo, eletrodoméstico)"**
  — cortado por sair do recorte de mídia e interação declarado na Etapa 1, e por depender
  inteiramente de D2. Registrado aqui porque pode interessar a quem cruzar este mapa com o tema 9
  (agentes corporificados).
- **"Herança de agente vira produto financeiro / seguro de memória digital"** — cortado como 4ª
  ordem disfarçada de 3ª. Depende de e6.1.1 já ter acontecido *e* de um mercado se formar.

### 12.4. Etapa 5 — contestação, notas de trabalho que não couberam na Seção 7

- A Seção 7 aponta quatro itens, como a skill exige. Um quinto, mais difuso, não entrou por não
  ser atribuível a um efeito específico: **o mapa inteiro assume que "local" é um estado estável**.
  A sessão 339 da WWDC26 ([5]) sugere o contrário — que local vira um dos modos de um roteador
  único. Se essa for a forma dominante em 2031, a pergunta "isto roda local?" deixa de ter resposta
  observável pelo usuário, e todo o eixo de privacidade do mapa (D3, e6) fica sem verificação
  possível. Isso não invalida nenhum efeito individualmente; corrói a capacidade de checar todos.
- **Contagem de confiança, como autoauditoria:** dos 27 efeitos, 4 são `alta` (e1, e2, e3, e5),
  13 são `media` ou `baixa` na 1ª e 2ª ordens, e os 10 de 3ª ordem são todos `baixa`. A skill
  avisa que 3ª ordem majoritariamente `baixa` é o resultado esperado; foi o que ocorreu. Já os
  quatro `alta` concentram-se todos em efeitos de 1ª ordem observáveis hoje — o que é
  metodologicamente correto e retoricamente conveniente, e por isso e3 foi contestado nominalmente
  na Seção 7.

### 12.5. Buscas que não deram em nada, ou que deram em coisa descartada

- **Relatório técnico do BitNet b1.58 2B4T (arXiv 2504.12285).** Aberto, ilegível pelo leitor de
  PDF (conteúdo veio como fluxo comprimido). Nenhuma alegação de qualidade do BitNet entrou no
  documento por conta disso.
- **ACM SIGMETRICS — "A Case Study of Environmental Footprints for Generative AI Inference: Cloud
  versus Edge"** (`https://dl.acm.org/doi/10.1145/3764944.3764950`). HTTP 403. Seria a fonte ideal
  para o eixo de energia; não citada.
- **IDC / BusinessWire — release sobre remessas de smartphones GenAI.** HTTP 403. Substituída, para
  o dado de mercado, pela Counterpoint via ElectronicsForYou ([11]), com a ressalva de
  confiabilidade registrada.
- **Números de adoção do Ollama.** "52 milhões de downloads mensais no 1º trimestre de 2026",
  "169 mil estrelas no GitHub", "2,5 bilhões de downloads de modelos", "8,9 milhões de
  desenvolvedores em agosto de 2026", "5,0 milhões de usuários ativos e 1.200 modelos no registro
  em maio de 2026", "crescimento de 300% segundo JetBrains AI Pulse", "38% dos praticantes
  segundo pesquisa Hugging Face 2025". Todos oriundos de blogs comerciais e agregadores, nenhum
  com metodologia linkada, vários mutuamente inconsistentes. **Todos descartados.** Registro aqui
  porque são exatamente os números que um mapa apressado usaria para "provar" a adoção da IA local
  — e nenhum deles resiste a olhar de onde veio.
- **Contagem de modelos GGUF na Hugging Face.** "Mais de 178 mil em maio de 2026" apareceu em
  fonte secundária (blog LocalMode) que não foi aberta; a página de filtro do próprio Hub não foi
  consultada. Número citado apenas aqui, no anexo, e não no corpo.
- **"Vantagem de eficiência de 10.000× da borda sobre a nuvem", "100 microwatts por inferência".**
  Descartado por falta de unidade de trabalho comparável (ver Seção 8, item 3).
- **"Emissões de dispositivos de borda podem superar as dos data centers globais até 2028".**
  Afirmação atraente e contraintuitiva, encontrada em resumo de busca sem fonte primária aberta.
  Não usada — apesar de ser, se verdadeira, o contra-argumento ambiental mais forte contra o
  entusiasmo com IA local. Fica registrada como pista para quem continuar este mapa.
- **Busca por dado brasileiro específico de base instalada de smartphones com NPU.** Não retornou
  nenhuma fonte primária (nem Anatel, nem IDC Brasil, nem operadora). A nota sobre o Brasil neste
  documento apoia-se, portanto, em um mecanismo — o preço da memória e o retorno ao padrão de 4 GB
  em mercados sensíveis a preço ([12]) — e não em uma medição do parque brasileiro. Esta é a
  lacuna mais séria do levantamento.
- **Busca por decisão judicial sobre responsabilidade por dano causado por agente local.** Nada
  encontrado. Registrado como ausência que sustenta o wildcard 2.

### 12.6. Checagem final executada

Registro do que foi conferido antes de considerar o arquivo pronto, conforme a condição de parada
da Etapa 8: contagem de seções `## ` (esperado: 12); presença de todos os campos do frontmatter,
sem omissão, com `null` onde não se aplica; validade YAML do frontmatter e do bloco `roda:`;
profundidade de exatamente três níveis no bloco `roda:` e presença de `sinal`, `prazo` e
`confianca` em todos os 27 nós; conferência de que as contagens declaradas no frontmatter (3
disrupções, 7 / 10 / 10 efeitos) batem com o bloco; e conferência de que toda fonte listada na
Seção 11 corresponde a uma URL de fato aberta nesta rodada. Os resultados numéricos dessa checagem
— e não apenas um "passou" — estão descritos ao final desta rodada, seguindo a lição do item 3 do
`DUVIDAS.md` do autor: uma checagem que só diz "OK" pode estar processando menos do que devia.

**Resultado numérico da checagem, executado em 17/09/2026:**

```
seções "## " encontradas: 12 (esperado 12) — títulos conferidos um a um, literais
frontmatter: FALTAM: nada  (18 campos exigidos, 18 presentes)
disrupções no bloco roda: 3   | declarado no frontmatter: 3
efeitos de 1ª ordem:      7   | declarado: 7
efeitos de 2ª ordem:     10   | declarado: 10
efeitos de 3ª ordem:     10   | declarado: 10
níveis de profundidade do bloco roda: [1, 2, 3] — nem menos, nem mais
nós sem sinal/prazo/confianca/id/ordem: nenhum (27 nós conferidos)
confiança na 3ª ordem: {baixa} — todos os 10, como a skill prevê
efeitos redigidos como pergunta: nenhum
fontes numeradas na Seção 11: 16 | declarado no frontmatter: 16
links HTTP: 16 de 16 responderam 200 nas fontes da Seção 11.
  O único 403 do documento é o da ACM SIGMETRICS, que aparece somente no item 12.5,
  registrado como falha de acesso — e não sustenta nenhuma afirmação do texto.
```

Os números acima são o resultado impresso da checagem, não um "passou". A diferença importa: uma
verificação que só reporta sucesso pode estar processando menos conteúdo do que devia — foi
exatamente esse o terceiro erro registrado no `DUVIDAS.md` do autor desta skill.
