---
tema: "IA local: no dispositivo e no navegador"
slug: ia-local-no-dispositivo-e-no-navegador
autor_login: jgpt
zona_de_interesse: "Criação e plataforma"
data: 2026-09-18
horizonte: 2031
publico: "quem projeta mídia e interação"
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 14
efeitos_ordem_3: 22
tecnologias_citadas: [BitNet b1.58, bitnet.cpp, WebGPU, WebLLM, Prompt API do Chrome, Gemini Nano, AICore, Gemma 4, Apple Foundation Models framework, llama.cpp, Ollama, LiteRT, NPU, quantização ternária, WebMCP, MLX]
fontes: 10
confianca: media
experimento: "Medidor de Soberania — uma página web que roda o mesmo prompt por três caminhos (Prompt API local, WebLLM/WebGPU, API na nuvem) no aparelho de cada aluno e mede tokens/s, bateria, calor e qualidade às cegas."
skill_usada: futurizacao-jgpt
publico_ok: false
---

## 1. Resumo

A inferência deixou de precisar de servidor. Em setembro de 2026 três limiares já foram
cruzados: o navegador passou a trazer modelo embutido e API estável (Prompt API no Chrome 148,
com Gemini Nano), o sistema operacional virou distribuidor de modelo (AICore no Android,
Foundation Models na Apple — aberta a qualquer provedor desde a WWDC26), e a quantização
extrema derrubou o custo energético da geração (bitnet.cpp relata de 55% a 82% menos energia
e até 6,17× de aceleração em CPU). O efeito imediato é econômico: some o custo por chamada e
some a chave de API. O efeito que interessa a quem projeta mídia e interação é outro — a
inteligência passa a ser uma propriedade do aparelho, não do serviço. Isso muda quem
atualiza, quem responde pelo que o modelo diz, e quem pode desligá-lo. Este mapa aposta que
até 2031 o conflito central não será "local × nuvem", e sim quem controla o soquete onde o
modelo é plugado: hoje, Google, Apple e o fornecedor do navegador. E registra uma contrapartida
brasileira que quase todo mapa do tema ignora: a IA no dispositivo está encarecendo o aparelho
de entrada em até 25%, porque disputa a mesma memória dos data centers.

## 2. O tema

IA local é a inferência que acontece no aparelho de quem usa — celular, laptop comum, aba do
navegador — em vez de num servidor alugado. Não é o modelo pequeno rodando no servidor da
empresa (isso é maduro), nem a chamada de API barata (também maduro). É o modelo *dentro* do
cliente.

Onde isso encosta em mídia e interação: toda a gramática de interface construída desde 2022
pressupõe latência de rede, spinner, estado de carregamento, e um custo marginal por interação
que obriga a economizar chamadas. Modelo local inverte as três coisas. Latência de primeiro
token cai para dezenas de milissegundos; não há estado de rede para desenhar; e, sobretudo,
não há razão econômica para *não* chamar o modelo. Uma interface cujo custo por inferência é
zero pode chamar o modelo a cada tecla, a cada rolagem, a cada movimento de olho — o que é uma
mudança de design, não de infraestrutura. Interações que hoje são "peça e espere" podem virar
"o sistema já sabe", e o padrão de projeto que emerge disso ainda não tem nome.

Merece mapa de futuro e não estado-da-arte porque os efeitos interessantes não estão na
capacidade técnica (essa é razoavelmente previsível: modelos pequenos ficam melhores), e sim
nas cadeias de consequência institucional — responsabilidade, atualização, herança,
desigualdade de hardware. Nenhuma dessas é derivável de uma leitura do estado atual.

## 3. Onde isso está hoje

**O que já existe e funciona.**

O navegador virou runtime de modelo. A Prompt API é estável no Chrome 148, usando Gemini Nano,
com entrada multimodal e saída estruturada em JSON; o Chrome gerencia e compartilha os modelos
otimizados entre sites, de modo que a página não baixa o modelo, apenas o usa [1]. O material
do I/O 2026 diz explicitamente que a proposta é habilitar "funcionalidades personalizadas e
proativas que seriam proibitivas em custo no servidor" — ou seja, o argumento de venda é a
ausência de custo por token, não a privacidade [1]. A Trip.com aparece como caso em produção,
gerando resumos de viagem inteiramente no cliente [1].

A base gráfica que sustenta isso é o WebGPU, e aqui o dado é mais modesto do que a narrativa
corrente: o caniuse registra 87,35% de suporte global (85,72% pleno + 1,63% parcial), com
Chrome/Edge 113+, Safari iOS 26+, Samsung Internet 24+ — e **Firefox ainda desativado por
padrão** [2]. O Safari de desktop consta como suporte parcial. Quem projeta para navegador
hoje não pode assumir WebGPU sem fallback.

O sistema operacional virou distribuidor de modelo. No Android, o Gemini Nano roda dentro do
serviço de sistema AICore, que cuida da distribuição e das atualizações; o app não baixa nem
atualiza o modelo [3]. Em abril de 2026 o Google colocou o Gemma 4 no AICore Developer Preview,
com a alegação de ser "até 4× mais rápido que versões anteriores e usar até 60% menos bateria",
e a variante E2B 3× mais rápida que a E4B [4]. A Apple foi mais longe na WWDC26: o Foundation
Models framework, que até então só aceitava o modelo da própria Apple, ganhou um protocolo
público (`LanguageModel` / `LanguageModelExecutor`) que qualquer LLM pode implementar — local
ou de nuvem —, distribuído como pacote Swift, com integrações de Anthropic e Google anunciadas
como próximas [5].

A quantização extrema saiu do papel. O `bitnet.cpp`, framework oficial da Microsoft para LLMs
de 1 bit, relata acelerações de 1,37× a 5,07× em CPUs ARM e 2,37× a 6,17× em x86, com redução
de energia de 55,4%–70,0% (ARM) e 71,9%–82,2% (x86); e afirma rodar um modelo BitNet b1.58 de
100B numa única CPU a 5–7 tokens/s, velocidade de leitura humana [6]. O repositório lista
kernel de GPU já disponível (maio/2025) e suporte a NPU como "coming next" [6]. Há modelo
nativo em escala — o b1.58-2B-4T, de abril de 2025 — e modelos de embedding de 270M e 0,6B
lançados em julho de 2026 [6].

No navegador fora da API do fabricante, o WebLLM (MLC) segue como a implementação de
referência: motor de inferência in-browser sobre WebGPU, API compatível com OpenAI, suporte a
Llama 3, Phi-3, Gemma-2B, Mistral-7B e Qwen2 em 0,5B/1,5B/7B, com Web Worker e três backends
de cache (Cache API, IndexedDB, OPFS); 19,1 mil estrelas e 447 commits no main [7].

**O que existe e não funciona bem.**

O NPU — o acelerador que justificou a categoria "Copilot+ PC" — continua largamente ocioso
para LLM local: as varreduras indicam que llama.cpp, Ollama e LM Studio miraram CPU ou CUDA, e
não QNN, de modo que num Snapdragon X Elite tudo roda em CPU pelo CLI do Ollama. *(Este ponto
vem de cobertura secundária que não consegui abrir e verificar — ver seção 8.)* O próprio
`bitnet.cpp` confirma o lado do ecossistema: NPU "coming next" [6].

A governança embutida também é uma limitação, e das duras: a lista de pacotes autorizados a
falar com o AICore **só pode ser alterada numa atualização OTA completa do Android**, e o
AICore roteia todo pedido de internet pelo Private Compute Services [3]. Não existe, aqui,
"instalar o modelo que eu quiser": existe estar ou não na lista.

E há o custo que ninguém coloca no slide. No Brasil, a Counterpoint Research projeta aumento
de preço de até 25% nos aparelhos de entrada em 2026, contra ~15% nos intermediários e ~10%
nos premium, porque o smartphone passou a disputar a mesma LPDDR5X dos data centers de IA
generativa [8]. A IA que "roda de graça depois de baixada" está sendo paga na compra do
aparelho — e proporcionalmente mais por quem compra o mais barato.

**Quem está construindo.** Microsoft (BitNet/`bitnet.cpp`, Phi), Google (Gemini Nano, AICore,
Gemma 4, Prompt API no Chrome), Apple (Foundation Models framework e o protocolo aberto da
WWDC26), MLC (WebLLM), o ecossistema llama.cpp/Ollama/LM Studio/Jan, e os fornecedores de
acelerador (Qualcomm, MediaTek, Google) citados como habilitadores do AICore [4].

**Diagnóstico de maturidade (heurística, não previsão).** Aplicando a leitura de hype: a
cobertura de BitNet e de NPU ainda é majoritariamente *de demonstração* — benchmark, repositório,
preview. A cobertura da Prompt API e do AICore já é *de adoção* — versão estável, caso em
produção, termos de serviço, restrição de pacote. Isso não diz nada sobre velocidade; diz que
as duas coisas estão em estágios diferentes e não devem ser tratadas como um bloco só.

## 4. As disrupções-raiz

### D1 — A inferência no cliente vira serviço de plataforma, não projeto de nicho

**O que rompe.** Remove simultaneamente duas restrições: o custo marginal por interação e a
necessidade de credencial. Até aqui, chamar um modelo exigia chave, cota e fatura; por isso
toda interface com IA foi desenhada em torno de economizar chamadas. Com modelo servido pelo
navegador e pelo SO, chamar o modelo passa a custar o mesmo que chamar uma função.

**Por que agora e não há cinco anos.** Limiar datável: a Prompt API só ficou estável no Chrome
148, em 2026 [1]; o WebGPU só passou a existir de forma transversal recentemente e ainda está
em 87,35% [2]; o AICore só passou a distribuir e atualizar o modelo pelo sistema [3]. Em 2021
nenhuma das três peças existia — não havia nem API de modelo no SO nem aceleração gráfica
padronizada no navegador. É engenharia de plataforma, não capacidade de modelo.

**O que falta.** Fallback obrigatório enquanto WebGPU não fecha a cobertura; e o fato de que a
API do navegador entrega *o modelo do fabricante*, não um modelo escolhido pelo produto.

### D2 — Quantização extrema desacopla capacidade de hardware caro

**O que rompe.** A restrição removida é energética, não computacional. O limite prático de
rodar modelo em celular ou laptop fino nunca foi "não cabe na memória" apenas — foi o orçamento
térmico e de bateria. Reduzir de 55% a 82% a energia por token [6] muda a classe de aparelho
elegível, e com ela o denominador de quem pode usar.

**Por que agora e não há cinco anos.** Dois limiares concretos: existe um modelo nativamente
treinado em 1 bit em escala (b1.58-2B-4T, 4 trilhões de tokens, abril/2025) — antes só havia
quantização pós-treino, que degradava; e existe kernel oficial de referência para CPU, com
números publicados, de um fabricante de sistema operacional [6]. Rodar 100B numa CPU a 5–7
tok/s [6] é a fronteira que não existia.

**O que falta.** Suporte a NPU ainda listado como futuro [6]; catálogo de modelos ternários
ainda pequeno perto do catálogo GGUF convencional; e nenhuma evidência aberta de que a linhagem
1-bit alcance a fronteira de qualidade — a comparação honesta hoje é com modelos pequenos, não
com modelos de ponta.

### D3 — O guardião muda de endereço: quem autoriza o modelo é o dono do aparelho, não o dono da API

**O que rompe.** Inverte uma restrição de distribuição. Na era da API, quem controlava o acesso
à inteligência era quem operava o servidor — e o controle era contratual, revogável e visível
(cota, termo de uso, fatura). Com o modelo no aparelho, o controle passa a ser *de plataforma*,
e é técnico: a lista de pacotes autorizados a usar o AICore só muda em OTA completa do Android,
e todo tráfego do AICore passa pelo Private Compute Services [3]. Ao mesmo tempo, a
responsabilidade desce: os termos do ML Kit GenAI dizem que o desenvolvedor é "o único
responsável pela segurança do seu cliente de API e pela experiência do usuário do seu app" [3].

**Por que agora e não há cinco anos.** A capacidade jurídico-técnica é nova em duas pontas. De
um lado, a Apple transformou a camada de abstração em ponto de controle ao abri-la: qualquer
provedor pode implementar `LanguageModel`, o que significa que o protocolo — e não o modelo —
vira o padrão de fato [5]. Do outro, o regime regulatório passou a tratar modelo aberto de forma
distinta: sob o AI Act, o provedor de GPAI sob licença livre e aberta tem obrigações reduzidas
(direito autoral e resumo do conteúdo de treino), salvo risco sistêmico (≥10^25 FLOPs), com as
regras de GPAI valendo desde 2 de agosto de 2025 e a supervisão do AI Office e o Artigo 50
desde 2 de agosto de 2026 [9]. Ou seja: existe agora um caminho legal em que o modelo chega ao
aparelho com menos obrigação atrelada a ele do que teria um serviço.

**O que falta.** Jurisprudência. Nenhum caso conhecido definiu quem responde quando um modelo
que roda offline, sem log no servidor, produz dano — e a ausência de log é justamente a
promessa de privacidade.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "A inferência no cliente vira serviço de plataforma, não projeto de nicho"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "O custo por inferência deixa de ser variável de projeto e a interface passa a chamar o modelo continuamente, e não sob demanda explícita do usuário."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "O botão 'gerar' desaparece de boa parte das interfaces: o texto é reescrito, o áudio é transcrito e a imagem é descrita antes de qualquer pedido."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "Surge uma categoria de crítica de produto sobre inferência não solicitada, e sistemas operacionais passam a expor um controle de 'quanto o aparelho pode pensar sobre mim sem eu pedir'."
                sinal: fraco
                prazo: 2030
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: "Métricas de engajamento perdem sentido porque parte do que o usuário vê foi gerada localmente e nunca passou por um servidor que pudesse contá-la."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "A bateria vira a nova restrição de design de interação, ocupando o lugar que a latência de rede ocupava."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Aparecem orçamentos energéticos por sessão, análogos a budgets de performance web, e ferramentas de profiling passam a medir joules por interação."
                sinal: fraco
                prazo: 2030
                confianca: baixa
              - id: e1.2.2
                ordem: 3
                efeito: "Produtos passam a degradar funcionalidade conforme o nível de bateria, criando uma experiência que muda de qualidade ao longo do dia."
                sinal: fraco
                prazo: 2029
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "A cobrança por assinatura de IA deixa de se sustentar no acesso ao modelo e migra para o que continua sendo escasso: dado fresco, contexto compartilhado e responsabilidade contratual."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Empresas de IA reposicionam o produto como camada de sincronização e auditoria entre dispositivos, e não como provedor de inteligência."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "O contrato de IA corporativa passa a ser vendido pela garantia de log e pela assunção de responsabilidade, e não pela qualidade do modelo."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "A nuvem se especializa no que o aparelho não faz — janelas de contexto muito longas, treino e tarefas de raciocínio caro — e perde o volume das tarefas curtas."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "O preço por token de tarefas curtas na nuvem deixa de cair porque perdeu a escala que o barateava, e o local passa a ser mais barato também em termos absolutos."
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e2.2.2
                ordem: 3
                efeito: "Investimento em data center de inferência é revisado para baixo em algumas praças, enquanto o de treino segue crescendo — descolando duas curvas que hoje são lidas como uma só."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "A demanda de memória para IA no dispositivo colide com a demanda dos data centers e o aparelho de entrada encarece mais que o topo de linha."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "Abre-se uma divisão de capacidade dentro de um mesmo país: quem tem aparelho recente ganha IA gratuita e privada, quem tem aparelho de entrada continua dependendo de servidor e de conexão."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Produtos brasileiros passam a manter deliberadamente um caminho na nuvem como acessibilidade, e não como legado técnico."
                sinal: fraco
                prazo: 2029
                confianca: baixa
              - id: e3.1.2
                ordem: 3
                efeito: "Políticas públicas de inclusão digital passam a especificar memória mínima do aparelho, como antes especificavam franquia de dados."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "O mercado de aparelho usado e recondicionado se segmenta por capacidade de rodar modelo, criando uma faixa de preço nova acima do usado comum."
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "Surge um índice público de 'aparelho apto a IA local' usado por varejo e por operadora como argumento de venda e de financiamento."
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "Quantização extrema desacopla capacidade de hardware caro"
    efeitos:
      - id: e4
        ordem: 1
        efeito: "A métrica de escolha de modelo deixa de ser parâmetros e passa a ser energia por token útil, publicada junto com os benchmarks de qualidade."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "Repositórios de modelo passam a exibir consumo energético medido por classe de aparelho, e não só tamanho de arquivo e quantização."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Requisitos ambientais de compra pública passam a citar energia por token, transformando uma métrica de engenharia em critério de licitação."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "O desenho de agentes passa a rotear tarefa por orçamento energético, escolhendo modelo local ou remoto por passo, e não por produto."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "A decisão de onde a inferência acontece vira invisível para quem usa, e a pergunta 'meu dado saiu daqui?' deixa de ter resposta simples mesmo em produto que se vende como local."
                sinal: medio
                prazo: 2030
                confianca: baixa
              - id: e4.2.2
                ordem: 3
                efeito: "Aparecem selos e auditorias de 'rota de inferência' para provar, a terceiros, que determinada tarefa nunca deixou o aparelho."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "Categorias de aparelho sem GPU dedicada — TV, console portátil, carro, aparelho assistivo, eletrodoméstico — recebem modelo local por caber no orçamento térmico."
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "A interface por voz e por descrição de cena deixa de exigir conexão, e a acessibilidade passa a funcionar em lugares onde a rede não chega."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Normas de acessibilidade passam a exigir funcionamento offline de recursos assistivos, tornando o caminho na nuvem juridicamente insuficiente."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "Objetos com modelo embutido e sem atualização acumulam no mundo, e o parque instalado passa a rodar versões congeladas por anos."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "Uma falha descoberta num modelo popular exige recall físico ou campanha de firmware, e 'recall de modelo' entra no vocabulário regulatório."
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e5.2.2
                ordem: 3
                efeito: "Modelos desatualizados viram objeto de estudo cultural, como versões antigas de software de navegação, revelando o que cada época considerava aceitável dizer."
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "O guardião muda de endereço: quem autoriza o modelo é o dono do aparelho, não o dono da API"
    efeitos:
      - id: e6
        ordem: 1
        efeito: "O direito de usar o modelo do sistema vira permissão de plataforma, concedida por lista e alterável apenas em atualização do sistema."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "Desenvolvedores independentes passam a embarcar o próprio modelo no app para não depender da lista, e o tamanho do aplicativo cresce em uma ordem de grandeza."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "Lojas de aplicativo criam um formato de dependência de modelo compartilhado para conter o inchaço, e passam a arbitrar quais pesos podem ser distribuídos."
                sinal: fraco
                prazo: 2030
                confianca: baixa
              - id: e6.1.2
                ordem: 3
                efeito: "A disputa antitruste sobre IA muda de objeto: deixa de ser sobre acesso a computação de treino e passa a ser sobre acesso ao runtime do aparelho."
                sinal: medio
                prazo: 2030
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "O protocolo de abstração de modelo, e não o modelo, vira o padrão de fato pelo qual as empresas competem para estar dentro do aparelho."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "Um consórcio propõe um protocolo neutro de provedor de modelo, e a adesão dos fabricantes de aparelho vira a questão que decide se ele existe."
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: "A responsabilidade pelo que o modelo diz desce para quem publica o app, enquanto o log que provaria o que foi dito deixa de existir por design."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "Produtos que dependem de prova jurídica passam a gravar localmente um registro assinado da interação, reintroduzindo o log que a privacidade havia eliminado."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "Esse registro local vira alvo de intimação e de perícia, e o aparelho passa a ser apreendido pelo que o modelo dele gerou, não pelo que a pessoa escreveu."
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e7.1.2
                ordem: 3
                efeito: "Cria-se uma expectativa de sigilo sobre a conversa com o modelo pessoal, discutida por analogia com o diário e com a correspondência."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: "Seguradoras passam a oferecer cobertura para dano causado por inferência local, precificando o risco que nenhum contrato de API cobria."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: "O prêmio do seguro passa a variar conforme o modelo embarcado, criando um ranking de modelos por risco atuarial que compete com os rankings de qualidade."
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

**O que o bloco não diz sozinho.**

Primeiro: as três raízes não têm o mesmo grau de solidez, e a roda não deixa isso claro. D1
tem produto estável em produção; D2 tem benchmark e repositório; D3 tem documentação de
plataforma e regulamentação em vigor, mas nenhum caso concreto. As subárvores deveriam ser
lidas com pesos diferentes — a de D2 é a mais frágil.

Segundo: os ramos conversam entre si de um jeito que a árvore hierárquica esconde. O efeito
`e3.1` (divisão de capacidade por aparelho) e o `e6.1` (embarcar o próprio modelo para escapar
da lista) se agravam mutuamente: apps com modelo embarcado são pesados, e aparelho de entrada
é justamente o que não tem armazenamento sobrando. A exclusão se fecha por dois lados.

Terceiro: `e4.2.1` é o efeito que mais desestabiliza a promessa do tema. Se agentes roteiam
por passo entre local e remoto, "IA local" deixa de ser uma propriedade do produto e vira uma
propriedade de cada inferência — e a garantia de privacidade, que é o principal argumento do
campo, fica sem lugar onde ser afirmada.

Quarto: a roda foi construída num recorte global. O ramo `e3` é a única concessão explícita ao
Brasil, e é o ramo com a evidência mais direta [8].

## 6. Sinais fracos e wildcards

**Sinais fracos.**

- *Os embeddings locais, e não o chat.* O `bitnet.cpp` lançou modelos de embedding de 270M e
  0,6B em julho de 2026 [6]. Busca semântica local é menos vistosa que um chat offline e muito
  mais estruturante: é o que permite a um aparelho indexar o próprio conteúdo sem enviá-lo.
- *O WebMCP.* Origin trial experimental a partir do Chrome 149, expondo funções JavaScript e
  formulários HTML como ferramentas para agentes no navegador [1]. Se o modelo é local e as
  ferramentas são a própria página, o agente inteiro cabe dentro da aba — sem servidor em
  nenhuma ponta.
- *O modelo minúsculo especializado.* Gemma 197M, descrito como "modelo especialista
  ultraeficiente" para alimentar APIs de tarefa como o summarizer, escalando para um espectro
  maior de aparelhos [1]. A aposta implícita é que o caminho para o aparelho barato é muitos
  modelos pequenos e específicos, não um modelo geral encolhido.
- *A Apple aceitando provedor de terceiro.* Anthropic e Google anunciados como próximos a
  entregar pacotes Swift para o Foundation Models [5]. O sinal é de padronização, não de
  abertura: a Apple continua definindo o protocolo.

**Candidatas emergentes rejeitadas como raiz (Etapa 2).**

- *NPU como plataforma de LLM local.* A capacidade existe e a curva sobe, mas ainda não forçou
  mudança estrutural: o próprio `bitnet.cpp` lista NPU como "coming next" [6], e a cobertura
  secundária indica que as runtimes populares não a usam. Fica no radar, não é raiz.
- *Treino e fine-tune local.* Existe em nicho; não removeu nenhuma restrição do campo ainda.
- *Modelo local que aprende continuamente com quem o usa.* É a peça que faria a "inteligência
  virar bem pessoal", e não há evidência aberta de que funcione fora de laboratório. É wildcard,
  não raiz.

**Wildcards (baixa probabilidade, alto impacto).**

1. **Um modelo ternário de qualidade de fronteira num aparelho de entrada, até 2029.** Se a
   linhagem 1-bit alcançar a fronteira — e não apenas os modelos pequenos — o ramo `e3` se
   inverte inteiro: em vez de dividir o mundo por hardware, a IA local passa a ser o que
   *elimina* a vantagem de quem tem aparelho caro. É o único desdobramento que torna o tema
   redistributivo em vez de concentrador.
2. **Um incidente grave atribuído a um modelo offline, sem log, num aparelho vendido em massa.**
   O ponto não é o dano; é que a investigação não tem onde começar. Uma decisão judicial nesse
   caso pode obrigar, por precaução, o log de inferência local — e matar a premissa de
   privacidade que sustenta o campo.
3. **Um fabricante remover um modelo do parque instalado por atualização, contra a vontade dos
   donos.** Tecnicamente trivial pelo caminho do OTA [3]. Se acontecer uma vez de forma visível,
   a discussão sobre a inteligência como propriedade herdável e confiscável sai do plano
   filosófico e entra no plano do consumidor.

## 7. Contra o próprio mapa

**Extrapolação linear.** O efeito `e1` — chamar o modelo continuamente porque é grátis — é a
peça mais "presente, só que mais" do mapa. É a mesma curva que já levou o front-end a pré-carregar,
pré-buscar e pré-renderizar tudo, aplicada a um recurso novo. Não há descontinuidade real: é
economia de recurso abundante, coisa que o campo já sabe fazer. Mantive `confianca: alta` porque
o mecanismo é o mesmo já documentado — mas reconheço que o efeito é chato, não disruptivo. O
efeito interessante é o `e1.2` (bateria como restrição), que é a descontinuidade de verdade: pela
primeira vez o recurso abundante em software é escasso em hardware *na mão do usuário*, e não
no data center de outra pessoa. Rebaixei `e1.1` de alta para média por esse motivo.

**Velocidade de adoção nunca vista.** Três efeitos pressupõem velocidade suspeita.

`e2` (colapso da assinatura de IA até 2028) supõe que um modelo de negócio se reorganize em
dois anos por pressão de custo. O caso comparável que contradiz é o próprio software em nuvem:
a hospedagem ficou barata a ponto de ser quase gratuita ao longo dos anos 2010 e as assinaturas
de SaaS não caíram — migraram o valor para integração, suporte e responsabilidade, ao longo de
uma década, não de dois anos. Mantive `confianca: media` no efeito, mas os netos (`e2.2.1`,
`e2.2.2`) ficam em `baixa` e com prazo empurrado para 2031.

`e5` (modelo local em TV, carro, eletrodoméstico até 2029) supõe ciclo de renovação de parque
instalado mais rápido do que qualquer precedente. Televisores e carros trocam em 8 a 12 anos.
O efeito provavelmente vale só para o que sair de fábrica a partir de 2029, e a consequência
real é `e5.2` — o parque congelado —, que é o oposto do que o efeito otimista sugere.

`e6.1` (apps embarcando o próprio modelo, com crescimento de uma ordem de grandeza) esbarra em
limite de loja e em franquia de dados. Não rebaixei porque há precedente direto — jogos móveis
já ultrapassaram esse tamanho —, mas o efeito vale para uma minoria de apps, não para a média.

**E se a disrupção não vingar.**

*Se D1 não vingar* — se a Prompt API estagnar em origin trial permanente, se o WebGPU não fechar
a cobertura (Firefox segue desativado por padrão [2]) e se o Safari mantiver comportamento
divergente —, então `e1`, `e2` e `e3` caem juntos e a IA local fica confinada a aplicativos
nativos de fabricante. A subárvore inteira de 13 efeitos vira nota de rodapé, e o tema volta a
ser "assistente do sistema operacional", que é um assunto de produto, não de futuro. *Este é o
cenário de falha mais provável dos três.*

*Se D2 não vingar* — se a linhagem 1-bit não sair do nicho, se o suporte a NPU continuar
"coming next" indefinidamente e se os ganhos de energia não se sustentarem fora do benchmark —,
então `e4` e `e5` caem, e com eles a expansão para aparelhos baratos e para objetos sem GPU.
Sobra a IA local do aparelho caro: D1 continua valendo, mas `e3.1` (a divisão de capacidade)
piora, porque some a rota que barateava. Note-se o desconforto: **a falha de D2 não derruba o
mapa, ela o torna mais desigual.**

*Se D3 não vingar* — se os fabricantes abrirem o runtime, se a lista de pacotes deixar de ser
o mecanismo, ou se a regulação impuser interoperabilidade —, então `e6` e `e7` caem. Esta é a
subárvore que eu mais gostaria que caísse, e é precisamente por isso que deve ser lida com
desconfiança: o mapa a trata como quase certa com base em um parágrafo de documentação [3].

**Viés do autor.** A skill manda perguntar ao usuário, não presumir. Nesta rodada não há usuário
disponível para responder; as respostas de contexto declararam **viés neutro** e "nenhuma
disrupção suspeita — descubra". Registro então o que consigo observar sem ele: o tema foi
escolhido pela disciplina, não pelo autor, e chegou acompanhado de uma evidência de processo
favorável (três alunos rodaram o julgamento das suas 500 em modelo local depois de esbarrar em
cota de API). Essa evidência é sedutora e enviesa para o otimismo, porque mostra a tendência
funcionando *para quem já tem máquina boa e sabe instalar Ollama* — a população menos
representativa possível. Compensei puxando o ramo `e3` para dentro do mapa e mantendo o wildcard
1 explicitamente como improvável. **Isso não substitui a pergunta ao autor, que fica pendente.**

**Sobrou algo intacto?** Não: `e1.1` foi rebaixado, `e2.2.1`/`e2.2.2` tiveram prazo empurrado
para 2031, `e5` teve a leitura invertida em favor de `e5.2`, e `e6`/`e7` ficam marcados como
apoiados em base documental estreita. O ramo `e3` é o único que sai reforçado da contestação,
porque é o único com número de terceiro publicado [8].

## 8. O que a máquina errou

**O erro específico, e como apareceu.** Ao levantar o estado do WebGPU, eu aceitei de um
resultado de busca a afirmação de que o WebGPU "foi habilitado por padrão simultaneamente em
Chrome, Firefox, Edge e Safari em 25 de novembro de 2025", com "82,7% de cobertura global" e
"Firefox 141+ no Windows, 145+ em Macs Apple Silicon". Era uma frase redonda, datada e
específica — exatamente o tipo de material que passa por verificado. Ao abrir o caniuse, o
número é **87,35%** (85,72% pleno mais 1,63% parcial) e o Firefox consta como **desativado por
padrão em todas as versões listadas**, com o Safari de desktop em suporte parcial [2]. A
afirmação que eu tinha em mãos não estava só desatualizada: estava errada no fato que mais
importava para o mapa, porque um navegador desativado por padrão é um fallback obrigatório, e
isso muda o custo de qualquer produto que dependa de D1. O sintoma que deveria ter me alertado
antes é a data exata com quatro navegadores no mesmo dia — coordenação improvável demais para
ser verdade.

**O que não consegui verificar, e está marcado como tal.**

- A tese de que llama.cpp, Ollama e LM Studio não usam o NPU, e de que num Snapdragon X Elite
  tudo roda em CPU, vem de cobertura secundária que não abri. Está na seção 3 com ressalva. O
  único dado primário que tenho na mesma direção é o "NPU: coming next" do repositório do
  BitNet [6].
- Os números de qualidade de modelos pequenos (Phi-4 batendo GPT-4o em MATH e GPQA) apareceram
  em blogs agregadores, não no relatório técnico. **Deliberadamente não os usei** para sustentar
  nenhuma disrupção-raiz — se tivesse usado, D2 pareceria muito mais forte do que a evidência
  que consegui abrir permite.
- O paper "Less Is More: Engineering Challenges of On-Device Small Language Model Integration in
  a Mobile Application" (arXiv 2604.24636) é a fonte mais adequada para a seção "o que não
  funciona", e eu a abri — mas o extrator devolveu só metadados, sem as seções de resultado.
  Está listada em [10] como **lida parcialmente**, e nenhuma afirmação deste documento se apoia
  nela.
- A projeção da Counterpoint Research [8] chega por intermediário brasileiro que cita a
  consultoria sem link nem data. Usei porque é o único número de mercado com recorte de faixa
  de preço que encontrei, e porque o mecanismo (disputa por LPDDR5X) é verificável de forma
  independente — mas o percentual de 25% deve ser tratado como ordem de grandeza, não como
  medida.

**Limitação de processo.** A Etapa 4 da skill exige perguntar ao autor sobre viés, e esta rodada
correu sem usuário. A pergunta não foi feita; a compensação está declarada na seção 7.

## 9. Três cenários para 2031

**Provável.** Em 2031, a inferência local tinha virado infraestrutura silenciosa e ninguém mais
a chamava pelo nome. O navegador e o sistema operacional traziam modelo embutido, e a discussão
de projeto deixara de ser "usar IA ou não" para ser "quanto o aparelho pode processar sem pedir
permissão". A promessa de gratuidade tinha se cumprido pela metade: a inferência era de fato
grátis depois de baixada, mas o aparelho capaz de baixá-la ficara mais caro, e no Brasil a faixa
de entrada tinha absorvido o maior aumento. A maioria dos produtos rodava híbrido, decidindo a
cada passo se ia para o chip ou para o servidor, e quase nenhum conseguia dizer com honestidade
onde o dado tinha ido parar. As empresas de IA continuavam cobrando assinatura — não pelo
modelo, que qualquer um tinha, mas pelo registro do que o modelo fez. O controle não tinha
desaparecido: tinha mudado de contrato para lista de permissão.

**Desejável.** Em 2031, rodar um modelo próprio no próprio aparelho era um direito exercível,
não uma capacidade concedida. Isso não aconteceu sozinho — foi preciso que a interoperabilidade
do runtime virasse exigência regulatória, no mesmo movimento que abriu as lojas de aplicativo;
que um protocolo de provedor de modelo tivesse sido adotado por mais de um fabricante, de modo
que a escolha do modelo pertencesse a quem usava o aparelho; que os repositórios publicassem
energia por token medida por classe de aparelho, tornando comparável o que antes era propaganda;
e que houvesse um piso público de memória nos programas de inclusão digital, para que o ganho
não ficasse restrito a quem já tinha aparelho bom. Em 2031 uma pessoa podia trocar o modelo do
seu celular como trocava de navegador — e a conversa com esse modelo tinha o mesmo estatuto de
sigilo que um diário.

**Indesejável.** Em 2031 a inteligência tinha ficado dentro do aparelho e, por isso mesmo, fora
do alcance de qualquer um. Modelo local não gerava log, então não havia como auditar o que ele
dizia a cada pessoa; e como a lista de quem podia usar o modelo do sistema só mudava em
atualização de firmware, três empresas decidiam, sem precisar justificar, qual software tinha
direito a pensar. Objetos vendidos anos antes rodavam versões congeladas com falhas conhecidas,
e o recall de modelo se mostrou caro demais para ser feito de verdade. A promessa de privacidade
tinha se convertido no seu oposto: ninguém sabia o que o próprio aparelho estava inferindo a seu
respeito, e não havia servidor para intimar. **O sinal precoce disso já estava visível em 2026, e
ninguém tratou como sinal:** o fato de a lista de pacotes autorizados a falar com o modelo do
sistema só poder ser alterada numa atualização completa do sistema operacional [3], combinado com
os termos que já colocavam no desenvolvedor a responsabilidade pelo que o modelo dissesse [3].
Quem controlava a atualização controlava a inteligência; quem publicava o app respondia por ela.

## 10. O experimento

**O que é.** O **Medidor de Soberania**: uma página web única, sem servidor, que roda o mesmo
conjunto de tarefas por três caminhos no aparelho de cada aluno — (a) Prompt API do navegador,
com o modelo que o fabricante já colocou lá; (b) WebLLM sobre WebGPU, com um modelo pequeno
escolhido pela turma e baixado na hora; (c) uma API de nuvem, como linha de base. A página
registra, para cada caminho: tempo até o primeiro token, tokens por segundo, tamanho do download,
percentual de bateria consumido, temperatura reportada pelo aparelho, e se o caminho sequer
existia naquele navegador. Depois, a turma julga a qualidade das saídas **às cegas**, sem saber
qual veio de onde. Metade da bateria de testes roda em modo avião.

**Que pergunta sobre o futuro ele responde.** A pergunta que decide o ramo `e3` do mapa: *a
partir de que classe de aparelho a IA local deixa de ser desconforto?* O mapa afirma que a IA
local divide, e não redistribui. Uma sala de aula brasileira, com 14 aparelhos comprados em anos
e faixas de preço diferentes, é uma amostra pequena mas real da distribuição que o mapa supõe —
e é a única evidência que a turma pode produzir sem depender de consultoria.

**Que tecnologia emergente usa, e por que não dá com tecnologia madura.** Prompt API estável
(Chrome 148) e WebGPU. Não dá para fazer com tecnologia madura por uma razão exata: com API de
nuvem, o experimento mediria a rede da UFPE, não o aparelho do aluno. A variável independente do
experimento — o hardware na mão da pessoa — só vira variável quando a inferência acontece nele.
Há dois anos essa página não teria como ser escrita: a API do navegador não existia em versão
estável e o WebGPU não tinha cobertura.

**O que a turma faria testando em sala.** Cada pessoa abre a página no próprio celular e no
próprio laptop; a página coleta os números e devolve um gráfico da turma inteira, anônimo por
aparelho. Duas medições que o mapa precisa e ninguém publica: quantos aparelhos da sala **não
conseguem** rodar o caminho (b), e quanto de bateria custa uma sessão de 20 minutos no aparelho
mais fraco da sala. Em seguida, o julgamento às cegas: se a turma não distinguir a saída local
da saída de nuvem nas tarefas curtas, o efeito `e2` ganha força; se distinguir com facilidade,
`e2` deve ser rebaixado.

**O que mudaria a opinião do autor.** Duas coisas, declaradas antes de medir. Primeira: se
mais de dois terços dos aparelhos da sala rodarem o caminho (b) com qualidade aceitável, o ramo
`e3` está errado e o tema é redistributivo, não concentrador — e o wildcard 1 deixa de ser
wildcard. Segunda: se o caminho (a) — a Prompt API — estiver indisponível na maioria dos
navegadores da turma, D1 não cruzou o limiar que este mapa afirma que cruzou, e a roda inteira
precisa ser refeita com D1 rebaixada a emergente.

## 11. Fontes

Listadas apenas as que foram de fato abertas nesta sessão. Marcação explícita onde a leitura foi
parcial.

1. **Chrome for Developers — "15 updates from Google I/O 2026"** —
   `https://developer.chrome.com/blog/chrome-at-io26`
   Sustenta: Prompt API estável no Chrome 148 com Gemini Nano, multimodal e saída estruturada;
   gerenciamento e compartilhamento de modelos pelo Chrome; Gemma 197M; WebMCP em origin trial a
   partir do Chrome 149; caso Trip.com; e o argumento explícito de custo ("proibitivo no
   servidor"). Confiabilidade: alta — é o fabricante falando do próprio produto, o que é ótimo
   para o que ele *entrega* e ruim para o que ele *promete*.

2. **caniuse — WebGPU** — `https://caniuse.com/webgpu`
   Sustenta: 87,35% de cobertura global (85,72% pleno + 1,63% parcial); Chrome/Edge 113+, Safari
   iOS 26+, Samsung Internet 24+; Firefox desativado por padrão; Safari desktop parcial.
   Confiabilidade: alta para cobertura — dados agregados de uso, atualizados continuamente;
   é a fonte que corrigiu o erro descrito na seção 8.

3. **Android Developers — Gemini Nano** — `https://developer.android.com/ai/gemini-nano`
   Sustenta: distribuição e atualização do modelo pelo AICore, não pelo app; APIs do ML Kit
   GenAI; a responsabilidade de segurança atribuída ao desenvolvedor; a lista de pacotes
   autorizados alterável apenas em OTA completa; roteamento de internet pelo Private Compute
   Services. Confiabilidade: alta — documentação normativa de plataforma. É a espinha de D3.

4. **Android Developers Blog — "Announcing Gemma 4 in the AICore Developer Preview" (abr/2026)** —
   `https://android-developers.googleblog.com/2026/04/AI-Core-Developer-Preview.html`
   Sustenta: até 4× mais rápido e até 60% menos bateria; E2B 3× mais rápida que E4B;
   aceleradores de Google, MediaTek e Qualcomm; em aparelhos sem AICore roda em CPU e não é
   representativo. Confiabilidade: média-alta — número de fabricante, em preview, sem
   metodologia publicada.

5. **Apple Developer — WWDC26, sessão 339, "Bring an LLM provider to the Foundation Models
   framework"** — `https://developer.apple.com/videos/play/wwdc2026/339/`
   Sustenta: abertura do framework a qualquer LLM via protocolos `LanguageModel` e
   `LanguageModelExecutor`; distribuição por Swift Package Manager; iOS, macOS, visionOS,
   watchOS e Linux; integrações de Anthropic e Google anunciadas como próximas.
   Confiabilidade: alta — material técnico oficial.

6. **GitHub — microsoft/BitNet** — `https://github.com/microsoft/BitNet`
   Sustenta: 1,37×–5,07× em ARM e 2,37×–6,17× em x86; energia −55,4% a −70,0% (ARM) e −71,9% a
   −82,2% (x86); 100B numa CPU a 5–7 tok/s; b1.58-2B-4T (abr/2025); embeddings de 270M e 0,6B
   (jul/2026); kernel de GPU (mai/2025); NPU "coming next". Confiabilidade: média-alta — números
   do próprio projeto, reproduzíveis em princípio, mas sem validação independente que eu tenha
   aberto.

7. **GitHub — mlc-ai/web-llm** — `https://github.com/mlc-ai/web-llm`
   Sustenta: motor de inferência in-browser sobre WebGPU; API compatível com OpenAI; famílias
   Llama, Phi, Gemma, Mistral, Qwen; Web Worker e Service Worker; caches Cache API/IndexedDB/OPFS;
   19,1k estrelas, 447 commits. Confiabilidade: alta para o que existe; a página não traz datas
   de release, então não sustenta nenhuma afirmação temporal.

8. **SempreUpdate — "Preço dos smartphones em 2026 dispara com IA e memória RAM"** —
   `https://sempreupdate.com.br/preco-dos-smartphones-2026-ia-memoria-ram/`
   Sustenta: projeção da Counterpoint Research de até 25% de aumento na entrada, ~15% no
   intermediário e ~10% no premium; LPDDR5X disputada com data centers de IA. Confiabilidade:
   **baixa-média** — veículo secundário que cita a consultoria sem link nem data. Único número
   com recorte brasileiro que consegui abrir; usar como ordem de grandeza.

9. **EU Artificial Intelligence Act — High-level summary** —
   `https://artificialintelligenceact.eu/high-level-summary/`
   Sustenta: obrigações reduzidas para GPAI sob licença livre e aberta (direito autoral e resumo
   do conteúdo de treino), com exceção de risco sistêmico (≥10^25 FLOPs); obrigações de GPAI
   desde 02/08/2025; supervisão do AI Office e Artigo 50 desde 02/08/2026; alto risco em
   02/12/2027 e 02/08/2028. Confiabilidade: média-alta — resumo curado de terceiro, fiel ao
   texto legal, mas não é o texto legal.

10. **arXiv 2604.24636 — "Less Is More: Engineering Challenges of On-Device Small Language Model
    Integration in a Mobile Application"** — `https://arxiv.org/pdf/2604.24636`
    **LIDA PARCIALMENTE** — o extrator devolveu apenas metadados (autoria de William Oliveira,
    2026, v2), sem as seções de resultado. **Nenhuma afirmação deste documento se apoia nela.**
    Listada aqui porque é o caminho óbvio de aprofundamento para quem retomar este mapa.

## 12. Anexo — o levantamento bruto

### 12.1 Etapa 0 — a entrevista, como ela correu

A skill exige entrevista bloqueante. Nesta rodada não havia usuário para responder; as respostas
foram fornecidas em bloco pelo contexto de execução, e ficam registradas aqui na íntegra, como
se tivessem sido colhidas:

- **Tema e recorte:** "IA local: no dispositivo e no navegador" — tema 16 de 19 da disciplina,
  família "Criação e plataforma". Recorte não estreitado.
- **O que já está descartado:** o que já é comum em produto de massa (a régua da disciplina).
  Nenhuma outra exclusão.
- **Horizonte:** 2031.
- **Para quem:** quem projeta mídia e interação.
- **Recorte geográfico:** global, com nota sobre o Brasil.
- **Viés desejado:** neutro.
- **Disrupção suspeita:** nenhuma — descobrir.
- **Ideias óbvias a excluir:** as que serviriam para qualquer tema.
- **O que faria mudar de ideia:** evidência de que a adoção já passou da maioria inicial (Rogers),
  ou de que a tecnologia não rompe nada — só melhora o que existe.
- **Profundidade:** três ordens. **Modo:** a partir de uma inovação, não de um setor.
- **Zona de interesse:** Criação e plataforma. **Login:** jgpt. **Skill:** futurizacao-jgpt.
- **Autorização de nome em galeria pública:** não declarada → `publico_ok: false`.

**Defaults assumidos em silêncio? Nenhum, exceto:** (a) o tom da seção 9 foi calibrado para
neutro, conforme pedido; (b) `confianca` geral do mapa foi fixada em `media` por decisão minha,
já que a Etapa 0 não pergunta isso — justificativa: duas das três raízes têm base documental
estreita; (c) a data do documento é 2026-09-18, do relógio da máquina.

**Recusa registrada:** a skill manda recusar a geração sem entrevista. Como a entrevista veio
respondida, não houve o que recusar. A única exigência da skill que **não pôde ser cumprida** é
a pergunta de viés da Etapa 4, item 4, que exige resposta do autor e não pode ser inventada por
ele — está declarada como pendente na seção 7 e como limitação na seção 8.

### 12.2 Buscas realizadas, incluindo as que deram pouco

| Busca | Resultado |
|---|---|
| `BitNet 1-bit LLM Microsoft bitnet.cpp 2026 on-device inference` | Bom. Levou ao repositório oficial [6] e ao arXiv 2410.16144 e 2504.12285 (não abertos). |
| `Gemini Nano AICore on-device Android 2026 Apple Foundation Models framework` | Bom. Levou a [3], [4] e [5]. |
| `WebGPU WebLLM browser LLM inference 2026 Safari Chrome support Prompt API built-in AI` | **Enganoso.** Produziu a afirmação errada sobre Firefox e os 82,7% — ver seção 8. Salvou-se por levar a [7] e à pista do Chrome 148. |
| `Ollama llama.cpp local LLM adoption 2026 NPU Copilot+ PC Snapdragon on-device market share` | Só cobertura secundária (blogs, agregadores). **Nada abrível com qualidade.** A tese do NPU ocioso ficou marcada como não verificada. |
| `"EU AI Act" on-device open-weight model liability who is responsible deployer 2026` | Razoável. Levou a [9]. Os textos de escritório de advocacia (Cooley, DLA Piper) não foram abertos. |
| `IA local no Brasil 2026 celular entrada modelo no dispositivo custo smartphone RAM adoção` | **Achado inesperado e o melhor da rodada.** A busca era sobre adoção; devolveu preço. Levou a [8] e ao ramo `e3`, que não estava no plano inicial do mapa. |
| `small language model benchmark gap frontier 2026 on-device 4B model quality vs cloud` | Rico em números e **pobre em fonte**: quase tudo em blogs de conteúdo (`localaimaster`, `claude5.com`, `tinyweights.dev`, `practicallogix`). Descartado por decisão — ver seção 8. |
| `Chrome built-in AI Prompt API stable 2026 Gemini Nano web developers availability` | Bom. Confirmou Chrome 148 e levou a [1]. |

### 12.3 Aplicação do teste da Etapa 2, candidata por candidata

| Candidata | "O que rompe, e por que agora?" | Veredito |
|---|---|---|
| Chamar API de modelo na nuvem | Nada novo; barateamento dentro do mesmo jogo | **Maduro** — rejeitada (é a régua da disciplina) |
| Modelo pequeno no servidor próprio | Redução de custo, não de restrição | **Maduro** — rejeitada |
| Inferência no cliente como serviço de plataforma | Custo marginal e credencial; Chrome 148 e AICore | **Disruptiva** → D1 |
| Quantização extrema / 1-bit | Energia por token; kernel oficial + modelo nativo em escala | **Disruptiva** → D2 |
| Guardião do modelo migra para o aparelho | Distribuição e responsabilidade; lista de pacotes em OTA + protocolo aberto da Apple | **Disruptiva** → D3 |
| NPU como plataforma de LLM local | Capacidade sobe, mas nada mudou estruturalmente ainda | **Emergente** → seção 6 |
| Treino/fine-tune local | Nicho; nenhuma restrição removida | **Emergente** → seção 6 |
| Modelo pessoal que aprende continuamente | Sem evidência aberta de funcionamento | **Emergente** → wildcard |
| Voz local | Tema 13 da disciplina | **Fora do recorte** |
| Dados e identidade local-first | Tema 17 da disciplina | **Fora do recorte** |
| Navegador como plataforma 3D | Tema 15 da disciplina | **Fora do recorte** |

### 12.4 Efeitos cortados, e o motivo do corte

- *"Modelos locais eliminam a censura, porque ninguém controla o que roda na sua máquina."*
  Cortado: contradiz frontalmente a evidência de [3]. O controle não sumiu, mudou de camada.
  Seria exatamente o efeito bonito e falso que a Etapa 4 existe para pegar.
- *"O custo de nuvem despenca e provoca uma crise nos data centers."* Cortado como
  sobre-extrapolação: `e2.2.2` guarda a versão defensável (descolamento entre a curva de treino
  e a de inferência), sem afirmar crise.
- *"Cada pessoa terá um modelo herdável, transmitido como um diário."* Cortado como raiz e
  rebaixado: sobrou como `e7.1.2` (a *expectativa de sigilo* por analogia com o diário), que é
  a parte com mecanismo identificável. A herança em si não tem mecanismo — não há hoje formato
  de estado pessoal de modelo que sobreviva à troca de aparelho.
- *"IA local resolve a desigualdade porque é grátis."* Cortado — invertido em `e3` por [8].
- *"Quarto nível: o modelo pessoal vira credencial de identidade."* Não gerado. A skill fixa
  três níveis; fica registrado aqui como o fio mais promissor para quem puxar depois, e é
  também a fronteira com o tema 17.

### 12.5 Contagens, para conferência

- Disrupções-raiz: **3** (D1, D2, D3)
- Efeitos de 1ª ordem: **7** (e1, e2, e3, e4, e5, e6, e7)
- Efeitos de 2ª ordem: **14**
- Efeitos de 3ª ordem: **22**
- Fontes abertas: **10** (9 com conteúdo verificado, 1 parcial)
- Seções `## `: **12**

### 12.6 O que uma próxima rodada deveria fazer primeiro

1. Abrir o arXiv 2604.24636 por outro caminho (HTML do abstract, ou o v1) e preencher a seção 3
   com falhas de engenharia documentadas, que hoje estão fracas.
2. Buscar a fonte primária da Counterpoint Research para o número de 25%, ou substituí-lo.
3. Verificar a tese do NPU ocioso contra documentação da Qualcomm ou do QNN, não contra blog.
4. Abrir o relatório técnico do BitNet b1.58 2B4T (arXiv 2504.12285) para saber contra o que,
   exatamente, a linhagem 1-bit foi comparada — é o que decide se D2 é disrupção ou promessa.
5. Fazer ao autor a pergunta de viés da Etapa 4, que esta rodada não pôde fazer.
