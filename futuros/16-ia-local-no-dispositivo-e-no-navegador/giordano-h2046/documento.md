---
tema: "IA local: no dispositivo e no navegador"
slug: ia-local-no-dispositivo-e-no-navegador
autor_login: grec
zona_de_interesse: Criação e plataforma
data: 2026-09-22
horizonte: 2046
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 14
efeitos_ordem_2: 22
efeitos_ordem_3: 22
tecnologias_citadas: [BitNet b1.58, bitnet.cpp, BitNet-embedding, VibeASR.cpp, Bonsai 8B (PrismML), Gemini Nano, Gemini Nano 4, Gemma 4, AICore, ML Kit GenAI Prompt API, AppFunctions, Firebase AI Logic, Chrome Prompt API, Summarizer API, Translator API, Apple Foundation Models, AFM 3 Core, AFM 3 Core Advanced, Private Cloud Compute, LanguageModel protocol, Dynamic Profiles, Spotlight Search Tool, fm CLI, CoreAILanguageModel, MLXLanguageModel, WebGPU, WebLLM, LlamaWeb, Transformers.js, Cross-Origin Storage, llama.cpp, GGUF, Ollama, LM Studio, Termly, Heretic, abliteration, Snapdragon 8 Elite Gen 6, Hexagon NPU, NPU, LPDDR5X, HBM, NAND flash, Mixture-of-Experts, quantização]
fontes: 25
confianca: media
experimento: "Obra sem servidor: uma peça de ficção interativa com o modelo dentro da página, testada no parque real de aparelhos da turma em três caminhos (modelo do navegador, modelo baixado por WebGPU, modelo de 1 bit servido pelo computador de casa)"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Em 2046, o modelo de linguagem deixou de ser só um serviço que se chama: é também um arquivo que se tem, um recurso que o sistema operacional empresta e um servidor que mora em casa. Quatro rupturas sustentam o mapa: a inferência de baixíssima precisão com memória dedicada na NPU, que leva modelo útil ao aparelho comum; o sistema operacional e o navegador distribuindo o modelo como recurso de plataforma, o que põe a política de conteúdo do fabricante dentro de qualquer app e página; o aparelho pessoal virando o servidor de IA da própria pessoa, com um modelo que aprende com ela e por isso vira bem herdável, apreensível e prova pericial; e os pesos soltos, que tiram a moderação da camada de serviço. O achado central é uma convergência: dois ramos independentes chegam ao mesmo efeito — a mídia generativa se divide em dois circuitos, o do modelo do sistema (moderado, atualizado, padronizado) e o do modelo-arquivo (solto, durável, sem guardião). O freio mais concreto não é regulatório, é físico: a memória, disputada com o data center, decide quem tem IA local; e a energia por token no celular é cerca de três vezes pior que a da nuvem em lote. Perde o aparelho de entrada — no Brasil, boa parte dos mais vendidos ainda tem 4 GB — e perde a ideia de que "local" garante privacidade ou sustentabilidade.

## 2. O tema

**O que é.** Inferência de modelos de linguagem, visão e voz executada no aparelho do usuário final — celular, laptop comum, aba do navegador — sem chamar servidor, sem chave de API e sem cobrança por chamada. O objeto é a **inferência no dispositivo**. Os vizinhos ficam de fora por recorte: dado e identidade sem terceiros (tema 17), voz gerativa local (tema 13), navegador como plataforma 3D (tema 15).

**Onde encosta em mídia e interação.** Em cinco pontos:

1. **Economia de quem publica.** Um app ou página que gera texto, descreve imagem ou transcreve fala deixa de ter custo variável por usuário.
2. **Durabilidade da obra.** Peça interativa que depende de API morre quando a API muda de preço, de versão ou fecha. Peça com o modelo dentro pode sobreviver ao estúdio.
3. **Forma da interação.** Modelo que roda com pouca energia pode ficar sempre ligado; a interação passa de "invocar" para "ambiente".
4. **Liberdade de expressão.** Quem decide o que o modelo embutido recusa passa a decidir o que qualquer página web pode gerar.
5. **Autoria e posse.** Um modelo que aprende com uma pessoa, no aparelho dela, é um objeto novo: não é conta, não é arquivo comum, não é serviço.

**Por que um mapa de futuro, e não um levantamento de estado da arte.** Porque as perguntas que importam para quem projeta mídia — quem responde pelo que o modelo diz, o que acontece com a assinatura quando a chamada não custa, se o modelo pessoal é herdável — não se respondem com benchmark. São consequências de segunda e terceira ordem, e o horizonte de 2046 (vinte anos) é longo o bastante para que elas se tornem visíveis e curto o bastante para que os atores de hoje ainda estejam em cena.

**Premissas do briefing (modo não interativo).** Horizonte 2046; público: quem projeta mídia e interação; recorte global, com nota sobre o Brasil; descartado: o que já é comum em produto de massa; nenhuma raiz suspeita; viés neutro, com um cenário de cada lado; zona de interesse "Criação e plataforma"; falseadores declarados pelo autor: (a) evidência de que a adoção já passou da maioria inicial, (b) evidência de que a tecnologia não rompe nada e só melhora o que existe. Os dois viram critérios no §6 (seção 7). Briefing completo: a entrevista foi substituída sem rebaixamento de confiança; o que ele não cobre está na seção 12.2.

**Repetição do pedido em três linhas.** Mapear, até 2046, as consequências de a inferência sair da nuvem e ir para o aparelho e o navegador, para quem projeta mídia e interação, em recorte global com nota brasileira. Recusar como raiz o que já é de massa. Três ordens de efeito, com mecanismo, classe de referência e uma bateria contra o próprio mapa.

## 3. Onde isso está hoje

Âncora feita com acesso à web em 22/09/2026 (14 buscas por palavra-chave e 28 páginas tentadas, das quais 25 abertas e lidas; lista na seção 12.4).

### 3.1 O que já existe e funciona

- **Modelos de 1 a 1,58 bit, com runtime aberto.** O `bitnet.cpp` (Microsoft) saiu em 17/10/2024; o modelo oficial BitNet b1.58 2B4T (2,4 bilhões de parâmetros) em 14/04/2025; kernel de GPU em 20/05/2025; otimização de CPU com kernels paralelos em 15/01/2026; modelos de *embedding* de 1 bit (0,6B e 270M) em 20/07/2026; e um motor de reconhecimento de fala multilíngue, VibeASR.cpp, em 23/07/2026. O repositório declara ganhos de 2,37× a 6,17× em x86 e 1,37× a 5,07× em ARM, com redução de energia de 71,9% a 82,2% e 55,4% a 70,0%, respectivamente, e um modelo de 100B rodando numa CPU a 5–7 tokens/s. NPU: "support coming next" [1].
- **Modelo de 1 bit comercial.** A PrismML anuncia o Bonsai 8B em 1,15 GB, Apache 2.0, rodando em iPhone via MLX; a imprensa técnica registra que as alegações ("14× menor, 8× mais rápido, 5× mais eficiente") não têm validação independente, e que o Qwen3 8B pontua mais alto em MMLU Redux, MuSR e GSM8K [25].
- **Modelo embutido no navegador, estável.** A Prompt API do Chrome é estável desde o Chrome 148; aceita áudio, imagem e quadro de vídeo como entrada; exige 22 GB livres, 16 GB de RAM (CPU) ou mais de 4 GB de VRAM, e 4 núcleos; **não roda em Chrome para Android, iOS nem ChromeOS fora da linha Chromebook Plus**; e o modelo é apagado se o espaço livre cair abaixo de 10 GB [2].
- **Modelo embutido no sistema, com API aberta a terceiros.** A terceira geração dos modelos da Apple (08/06/2026) traz o AFM 3 Core (3B denso) e o AFM 3 Core Advanced (20B esparsos, 1 a 4B ativos por vez, **com o modelo inteiro guardado no flash NAND**), treinados com quantização, com português entre as línguas avaliadas [3]. Na WWDC26: contexto de 8.192 tokens no aparelho, imagem como entrada, protocolo `LanguageModel` que aceita qualquer modelo (inclusive local, por `CoreAILanguageModel` e `MLXLanguageModel`), pacotes da Anthropic e do Google, ferramenta de busca local (Spotlight Search Tool, RAG no aparelho), roteamento declarativo para a nuvem privada da Apple (PCC, 32 mil tokens, raciocínio "light/deep"), PCC **sem custo para apps com menos de 2 milhões de primeiros downloads**, CLI `fm`, SDK Python e o framework aberto para rodar em Linux [12]. A Callstack resume o efeito prático: surge um "novo degrau de aparelho" — recurso inteiro em aparelho novo, parcial em outro, desviado para servidor quando falta capacidade local [7].
- **No Android.** Gemini Nano 4 em *preview* no AICore, com lançamento em aparelhos topo "ainda este ano"; ML Kit GenAI Prompt API com saída estruturada e cache de prefixo; AppFunctions, que transforma o app num servidor MCP no próprio aparelho; e Firebase AI Logic com modos explícitos `PREFER_ON_DEVICE`, `PREFER_CLOUD`, `ONLY_ON_DEVICE`, `ONLY_CLOUD` (26/05/2026) [16].
- **Modelo baixado e rodado na aba.** WebLLM: API compatível com a da OpenAI, WebGPU, *workers*, quatro opções de cache (Cache API, IndexedDB, OPFS e um experimento de "Cross-Origin Storage"), 19,2 mil estrelas [8]. LlamaWeb (UC Santa Cruz e Microsoft Research, 20/05/2026): testado em 16 aparelhos de 8 fabricantes de GPU, 29–33% menos memória e 45–69% mais vazão de decodificação que as alternativas, mas pré-preenchimento 21–51% mais lento; 23 formatos numéricos [5].
- **Chip de celular desenhado para agente local.** O Snapdragon 8 Elite Gen 6 (anunciado em 22/09/2026, hoje) traz mais memória compartilhada na NPU "para reduzir a dependência da RAM principal", um acelerador novo para *transformer*, 50% mais desempenho de pré-preenchimento e suporte a modelos Mixture-of-Experts de até 30B rodando localmente [19].
- **Runtimes locais de massa entre desenvolvedores.** O Ollama declara 8,9 milhões de desenvolvedores ativos por mês, 176 mil estrelas, presença em 85% das Fortune 500 e uma série B de US$ 65 milhões; o produto local segue grátis e a receita vem de uma nuvem própria cobrada por tempo de GPU (US$ 0–100/mês) [15]. No Hugging Face, o filtro "roda em llama.cpp" lista 197.371 modelos; o mais baixado tem 12,6 milhões de downloads [22].
- **O computador de casa comandado do celular.** Termly: CLI gratuita que espelha sessões de agentes de terminal (Claude Code, Gemini CLI, OpenCode, Qwen Code, Copilot e outros) no celular, com AES-256-GCM e troca Diffie-Hellman, retransmissor que não lê o conteúdo e apaga a sessão em 24 horas; sem número de usuários publicado [13].
- **Remover recusas virou negócio.** A Abliteration.ai (fundada no fim de 2025, incorporada em março de 2026) vende acesso por navegador e API a versões sem recusa de modelos abertos, inclusive o GLM-5.3; o Hugging Face hospeda "milhares" de modelos abliterados [6].

### 3.2 O que existe e ainda não funciona (ou funciona mal)

- **Qualidade do modelo embutido.** Nos testes citados pela Mozilla, o Gemini Nano do Chrome falhou em 15–24% das tarefas generativas e em 6% das de exatidão; o modelo de desktop ocupa cerca de 4,27 GB [17].
- **Energia.** O estudo mais recente (Guégain e Coignion, 10/07/2026; 18 configurações, dois celulares e um servidor) mede que a inferência no aparelho é, em média, **3 vezes menos eficiente em energia que a inferência em lote no servidor**; que a relação entre bits de quantização e energia por token não é monotônica; e que 88–90% do impacto ambiental da inferência local vem do carbono embutido na fabricação do aparelho, não da eletricidade [9].
- **Privacidade no aparelho não é automática.** Os runtimes Ollama, LM Studio e llama.cpp deixam histórico de prompts em JSON em texto claro, recuperável por perícia (Windows e Linux) [23]. No navegador, o estado de compilação de *pipeline* do WebGPU vaza entre origens (AUROC até 0,986) e a assinatura do WebGPU acrescenta 7,1 bits de entropia a uma impressão digital já grosseira; a mitigação por separação de chave custa 6 ms [24].
- **Padronização da web.** A Mozilla se opõe à Prompt API por três razões: interoperabilidade (o desenvolvedor afina o código para um modelo de um fornecedor), atualização e neutralidade — e porque usá-la exige aceitar a política de usos proibidos do Google, que vai além da lei [17].
- **NPU para 1 bit.** O suporte do `bitnet.cpp` a NPU ainda é promessa [1]; o ganho de velocidade de 1 bit hoje é de CPU.

### 3.3 Quem constrói

Microsoft (BitNet, LlamaWeb com UC Santa Cruz), Apple (Foundation Models, PCC), Google (Gemini Nano, Gemma, Chrome, AICore), Qualcomm (Hexagon NPU), comunidade aberta (llama.cpp/GGUF, MLC/WebLLM, Hugging Face), empresas de runtime (Ollama, LM Studio), pequenas empresas de 1 bit (PrismML) e, do lado oposto, quem vende o modelo sem recusa (Abliteration.ai).

### 3.4 Números de adoção

- 45% das remessas globais de celulares em 2026 seriam "GenAI smartphones" (Counterpoint, 22/06/2026; a página aberta traz só o título e a data; os demais anos vieram de resumo de busca e não foram usados) [4]. Capacidade de hardware não é uso: não há número aberto de quantos apps usam o modelo do sistema.
- 8,9 milhões de desenvolvedores/mês no Ollama [15]; 197.371 modelos em formato para llama.cpp [22]; 19,2 mil estrelas no WebLLM [8].
- Defasagem entre o modelo de fronteira e o melhor modelo que roda numa única GPU de consumo (RTX 5090, até ~40B em 4 bits): 6 a 12 meses, conforme a métrica (Epoch AI) [10]. Para celular, **sem número encontrado**.
- Memória: a IDC (18/12/2025) projeta, para 2026, contração do mercado de celulares entre 2,9% e 5,2% e alta de preço de 3–8%, porque cada *wafer* que vai para HBM de GPU deixa de ir para a LPDDR5X de um celular intermediário; a memória já é 15–20% do custo de um intermediário; Copilot+ PCs exigem 16 GB [11]. A Qualcomm aumentou o preço dos Snapdragon a partir de 01/09/2026 citando custo de memória, entre outros; a alta anterior tinha sido de 30% [21].
- **Nota sobre o Brasil.** Entre os sete celulares mais vendidos em Amazon e Mercado Livre até abril de 2026, dois só existem com 4 GB (Moto G06, Moto G15) e outros dois têm versão de 4 GB (Galaxy A17, Moto G35) [18]. É ranking de vitrine, não participação de mercado; mas basta para dizer que o requisito de 16 GB do modelo do Chrome [2] e o degrau de aparelho da Apple [7] deixam fora a maior parte do parque que a turma conhece.
- **Evidência de processo (da disciplina, não de fonte externa).** Três alunos de 2026.2 rodaram o julgamento das suas 500 entradas num modelo local (Ollama, Qwen 27B) depois de esbarrar na cota de API — a troca aconteceu dentro da atividade, por custo e cota, não por privacidade.

## 4. As disrupções-raiz

### 4.0 Candidatos recusados como raiz

- **Chamar API de modelo na nuvem.** Recusado: maduro, maioria entre desenvolvedores; tratado como contexto (é o que a raiz 1 desloca).
- **Rodar modelo pequeno num servidor próprio.** Recusado: maduro entre desenvolvedores (8,9 milhões/mês no Ollama [15]); tratado como contexto e como ponto de partida da raiz 3.
- **Recursos de IA de fábrica em aparelho topo (resumo de notificação, tradução, reescrita).** Recusado como raiz: já presentes nas três grandes plataformas e em cerca de 45% das remessas de 2026 [4] — é o que "já é comum em produto de massa", a régua do briefing. Entra como contexto; o que é emergente é o modelo do sistema **aberto a qualquer app e página** (raiz 2).
- **"Modelos menores e mais baratos"** em geral. Recusado: sem dizer o que rompe, é melhoria sustentadora (Christensen). A parte que rompe foi isolada na raiz 1.

### 4.1 Raiz 1 — Inferência de baixíssima precisão com memória dedicada leva modelo útil ao aparelho comum

1. **O que rompe.** A cobrança por chamada como base econômica da IA em produto de mídia, e a suposição de que capacidade de modelo mora no servidor. Quem publica deixa de ter custo variável por usuário; quem vende deixa de ter o medidor.
2. **Por que agora.** Três pré-condições que não existiam em 2021: modelos treinados nativamente em 1,58 bit com runtime aberto (2024–2026) [1]; NPUs com memória compartilhada própria desenhadas para *transformer* (setembro de 2026) [19]; e modelos esparsos com pesos no flash, que contornam a DRAM (Apple, junho de 2026) [3].
3. **Difusão.** Entre `demo pública` e `produto de nicho`: há modelo e runtime, mas o 1 bit ainda não roda em NPU e o Bonsai não tem validação independente. Emergente, com cadeia em confiança média a baixa.
4. **O que falta.** NPU executando 1 bit; um modelo de 1 bit validado por terceiros com qualidade de um 8B em 4 bits; memória de celular voltando a baratear (a crise de 2026 vai contra); e apps de mídia que usem isso fora de demonstração.

**Quem bloqueia.** Os fabricantes de memória e os compradores de HBM (data centers): cada *wafer* de HBM é um celular com menos RAM [11]. O efeito é a retroação e2.

### 4.2 Raiz 2 — O sistema operacional e o navegador distribuem o modelo como recurso de plataforma

1. **O que rompe.** A web como plataforma neutra em relação a conteúdo (usar uma API web passa a exigir aceitar a política de um fornecedor [17]) e o desenvolvedor como quem escolhe o modelo — no iPhone, o SO passa a ser o balcão onde o modelo, próprio ou de terceiro, é plugado [12].
2. **Por que agora.** Prompt API estável no Chrome 148 [2]; Foundation Models com protocolo aberto e roteamento para nuvem em junho de 2026 [12]; AppFunctions e modos de roteamento no Android em maio de 2026 [16]. Há cinco anos, o modelo do sistema não existia como API pública.
3. **Difusão.** `produto de nicho` a `adoção precoce`: estável em um navegador de desktop e em dois SOs móveis, mas com requisito alto (16 GB no Chrome), sem Android no navegador, e sem padrão entre navegadores.
4. **O que falta.** Padronização (ou a recusa dela) no W3C/WHATWG; o modelo embutido chegar ao navegador do celular; e a qualidade do modelo embutido parar de falhar em 15–24% das tarefas [17].

**Quem bloqueia.** A Mozilla (e, por interesse próprio, qualquer navegador sem modelo): opõe-se à padronização [17]. Efeito: e8.

### 4.3 Raiz 3 — O aparelho pessoal vira o servidor de IA da própria pessoa

1. **O que rompe.** A divisão cliente/servidor da internet de consumo (o "servidor" passa a ser o laptop ou o celular topo da própria pessoa, consultado de fora por canal cifrado [13]) e a ideia de IA como serviço idêntico para todos (o modelo com acesso aos arquivos dela, por RAG local [12], responde diferente para cada dono).
2. **Por que agora.** Runtimes locais com milhões de usuários [15], agentes de terminal que agem sobre arquivos, canal cifrado de ponta a ponta para comandá-los do celular [13], chip de celular vendido como "hub" de agente [19] e busca local integrada ao modelo do sistema [12].
3. **Difusão.** `produto de nicho` entre desenvolvedores; `laboratório` para o modelo que se adapta continuamente à pessoa. Por isso a cadeia da raiz 3 sai com confiança baixa desde a 2ª ordem.
4. **O que falta.** Um agente local que um não desenvolvedor instale; uplink residencial que aguente a consulta de fora; adaptação de modelo no aparelho a custo de energia aceitável; e uma resposta sobre segurança (o agente local tem acesso a tudo e o histórico fica em texto claro [23]).

**Quem bloqueia (ou captura).** As próprias empresas de runtime e de SO, que vendem o transbordo para a sua nuvem: o Ollama cobra por GPU na nuvem [15]; a Apple dá PCC grátis até 2 milhões de downloads [12]. Efeito: e11.

**Classe de referência que freia esta raiz.** O "servidor doméstico" (NAS, *home server*, *media center*) existe desde os anos 2000 e nunca saiu do nicho — premissa sem fonte aberta nesta rodada, declarada em 12.2. É a razão para empurrar os prazos da raiz 3.

### 4.4 Raiz 4 — Pesos soltos: modelos capazes circulam como arquivo, sem a moderação da camada de serviço

1. **O que rompe.** A moderação como propriedade do modelo e do provedor. Quando a recusa se remove em minutos e isso vira produto [6], a política de conteúdo deixa de estar no modelo e passa a estar só na distribuição e na lei.
2. **Por que agora.** Modelos abertos a poucos meses da fronteira [10], formato de distribuição universal (197 mil modelos para llama.cpp [22]) e ferramentas automatizadas de remoção de recusa com negócio montado em cima [6].
3. **Difusão.** `produto de nicho`, crescendo. Não é maioria entre usuários finais.
4. **O que falta.** Pouco do lado técnico; do lado social, falta o incidente que force resposta, e falta saber se os laboratórios continuam liberando pesos da faixa mais capaz.

**Quem bloqueia.** Governos e a própria indústria: a Lei de IA da UE aplica todas as obrigações a modelo aberto acima de 10²⁵ FLOPs e retira a isenção de modelo aberto monetizado; o fiscalizador pode multar desde 02/08/2026 [20]. Efeito: e14.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: Inferência de baixíssima precisão com memória dedicada na NPU leva modelo útil ao aparelho comum
    efeitos:
      - id: e1
        ordem: 1
        efeito: Apps e páginas de mídia com geração embutida deixam de ter custo variável por usuário, e o recurso de IA vendido por assinatura perde a base de custo que o justificava
        sinal: forte
        prazo: 2030
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Estúdios pequenos e artistas publicam obras interativas com o modelo dentro, que continuam funcionando depois que o estúdio fecha porque não há servidor a pagar
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Acervos de mídia passam a preservar o trio obra, pesos e runtime, e emular runtimes de inferência antigos vira ofício de conservação digital
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Fornecedores de modelo trocam a receita por token por receita de transbordo, cobrando só o que não cabe no aparelho (contexto longo, raciocínio profundo), e a nuvem vira camada de exceção roteada pelo sistema
            sinal: forte
            prazo: 2032
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: A costura entre local e nuvem vira elemento visível da interface, com convenção de SO que mostra ao usuário onde cada passo do pensamento aconteceu e quanto custou
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A memória, e não o cálculo, passa a decidir quem tem IA local, e a RAM do celular é disputada com o HBM dos data centers
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Pesos de 1 a 2 bits, esparsos e guardados no flash viram a norma de distribuição de modelo para celular, porque a DRAM cara força ativar só uma parte do modelo por vez
            sinal: forte
            prazo: 2032
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: O tamanho de modelo que o aparelho carrega e a velocidade do flash viram especificação de venda, e o celular passa a ser escolhido pelo modelo que roda como já foi pela câmera
                sinal: fraco
                prazo: 2036
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: O aparelho de entrada, com 4 a 6 GB, fica uma geração de modelo atrás e depende da nuvem, e a divisão digital passa a separar quem pensa offline de quem paga por chamada
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Compras públicas de tablets escolares passam a exigir memória mínima para inferência local, porque o offline evita custo por chamada e envio de dado de aluno menor de idade
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: O custo de energia da inferência sai da conta do provedor e vai para a bateria e para o carbono de fabricação do aparelho do usuário, a cerca de três vezes o gasto por token da nuvem em lote
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: O sistema operacional passa a trocar de modelo conforme bateria e temperatura, e quem projeta perde a garantia de que a mesma chamada devolve a mesma qualidade
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Mídia generativa passa a ter qualidade variável declarada, como o streaming adaptativo tem taxa de bits, e a avaliação de produto passa a medir o pior aparelho, não o melhor
                sinal: fraco
                prazo: 2037
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: O argumento de que local é mais verde cai, e a defesa ambiental da IA local é substituída pela de vida útil longa do aparelho
            sinal: fraco
            prazo: 2033
            confianca: baixa
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Fabricantes passam a vender IA local amarrada a garantia de atualização de modelo por muitos anos, porque o carbono embutido domina e trocar de aparelho para ter modelo novo fica indefensável
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: O agente de baixo consumo sempre ligado muda a interação de invocar para ambiente, com o aparelho escutando, vendo e sugerindo sem sair do bolso
        sinal: medio
        prazo: 2034
        confianca: baixa
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Pessoas em volta de quem usa passam a ser processadas por modelos que não enviam nada à nuvem, e o consentimento de terceiros perde o ponto de controle que o servidor oferecia
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Salas de aula, consultórios e teatros passam a exigir modelo desligado e a detectar NPU ativa, como já fizeram com a câmera do celular
                sinal: fraco
                prazo: 2042
                confianca: baixa
  - disrupcao: O sistema operacional e o navegador distribuem o modelo como recurso de plataforma
    efeitos:
      - id: e5
        ordem: 1
        efeito: Páginas web passam a gerar texto e analisar imagem com o modelo do navegador sem servidor, e publicar um site com IA volta a custar o mesmo que hospedar HTML
        sinal: forte
        prazo: 2031
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: O mesmo site passa a se comportar diferente em cada navegador porque cada um embute um modelo, e o teste de compatibilidade vira teste de modelo
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Um consórcio de padrões publica um modelo de referência com suíte de conformidade de comportamento, como os testes Acid fizeram para CSS
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Jornalismo de dados e ficção interativa na web passam a ser escritos contra o modelo embutido e ficam presos à versão que o navegador tinha quando a peça saiu
            sinal: fraco
            prazo: 2034
            confianca: baixa
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: O link quebrado ganha um parente, o modelo trocado, e arquivos de jornalismo passam a guardar a peça junto com o modelo que ela esperava
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: O fabricante do sistema e do navegador passa a aplicar a própria política de conteúdo dentro de qualquer app e página que use o modelo embutido
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Criadores de horror, sátira política e conteúdo adulto, recusados pelo modelo do sistema, passam a embutir modelo próprio baixado por WebGPU, e surgem dois circuitos de mídia generativa
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: As lojas de aplicativo passam a revisar e barrar apps que carregam pesos próprios, e o modelo embutido vira objeto de controle de distribuição como o motor de navegador foi no iOS
                sinal: fraco
                prazo: 2036
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: A política de recusa do modelo do sistema passa a variar por país, com adaptadores regionais que seguem a lei eleitoral e de conteúdo de cada mercado
            sinal: fraco
            prazo: 2034
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Aparelhos offline em período eleitoral passam a rodar regras de recusa desatualizadas, e a atualização remota do modelo vira instrumento de política pública
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: O sistema operacional passa a decidir o roteamento entre local e nuvem, e o fabricante cobra pelo transbordo acima de uma cota gratuita
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Modelos de fronteira de terceiros passam a chegar ao usuário como pacote dentro do framework do sistema, e o SO vira o balcão onde se escolhe o modelo
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A disputa antitruste da escolha de navegador padrão se repete como tela de escolha de modelo padrão imposta ao fabricante do sistema
                sinal: fraco
                prazo: 2036
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: Navegadores sem modelo próprio bloqueiam a padronização da API de modelo embutido, e ela fica restrita a um navegador por anos
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Desenvolvedores contornam o bloqueio com bibliotecas que baixam o próprio modelo e com armazenamento compartilhado entre sites, para não baixar um gigabyte por página
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: O navegador passa a gerir um cofre de pesos comum entre sites, e o conjunto de modelos em cache vira impressão digital rastreável do usuário
                sinal: fraco
                prazo: 2036
                confianca: baixa
  - disrupcao: O aparelho pessoal vira o servidor de IA da própria pessoa
    efeitos:
      - id: e9
        ordem: 1
        efeito: Pessoas passam a operar agentes que rodam no computador de casa e são comandados do celular por canal cifrado, e a casa vira o nó de inferência
        sinal: forte
        prazo: 2032
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: Provedores de internet residencial passam a ser pressionados por upload e endereço fixo, porque o tráfego deixa de ser só baixar da nuvem e passa a ser o celular consultando a casa
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: Famílias e condomínios passam a dividir um nó de inferência comum, e o servidor da família cria disputas sobre quem vê a memória de quem
                sinal: fraco
                prazo: 2042
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: O histórico do agente local, guardado em texto claro no disco, vira prova pericial rotineira
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e9.2.1
                ordem: 3
                efeito: Tribunais passam a requisitar o diário do modelo como hoje requisitam o celular, e o modelo que aprendeu com a pessoa vira testemunha involuntária
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: O modelo pessoal passa a aprender com os arquivos e o uso de cada pessoa no aparelho, e dois aparelhos idênticos deixam de responder igual
        sinal: medio
        prazo: 2034
        confianca: baixa
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: O modelo pessoal vira bem de herança e de partilha, e famílias passam a disputar o acesso ao modelo que conhece quem morreu ou se separou
            sinal: fraco
            prazo: 2040
            confianca: baixa
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: Surge o testamento de modelo, com instrução de apagar, transferir ou manter, e serviços de legado digital passam a custodiar pesos pessoais
                sinal: fraco
                prazo: 2046
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: Trocar de celular passa a significar migrar um modelo adaptado, e o fabricante que impede a exportação prende o usuário mais do que a nuvem prendia
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e10.2.1
                ordem: 3
                efeito: O direito à portabilidade de dados passa a ser invocado para exigir a exportação do adaptador pessoal em formato aberto
                sinal: fraco
                prazo: 2042
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: As empresas que vendem o runtime local empurram o usuário para a própria nuvem nos casos pesados, e o local vira porta de entrada de assinatura
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: O que roda em casa passa a ser definido pelo que o fornecedor do runtime e do chip deixa rodar, por licença e por verificação de modelo
            sinal: fraco
            prazo: 2034
            confianca: baixa
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: Runtimes comunitários abertos viram infraestrutura de último recurso, mantidos como utilidade pública por fundações e universidades
                sinal: fraco
                prazo: 2040
                confianca: baixa
  - disrupcao: Pesos soltos circulam como arquivo, sem a moderação da camada de serviço
    efeitos:
      - id: e12
        ordem: 1
        efeito: Remover as recusas de um modelo aberto vira operação de minutos e negócio com nome, e a moderação deixa de ser propriedade do modelo
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: Os repositórios de modelos viram o ponto de controle, e os pesos saem deles para redes privadas e torrent quando pressionados
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: Pesos passam a circular como a música em MP3 circulou, com catálogos paralelos, versões limpas e soltas do mesmo modelo e marca d'água de pesos como tentativa de rastreio
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e12.2
            ordem: 2
            efeito: A responsabilidade legal migra de quem publica o modelo para quem o modifica e implanta no produto
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e12.2.1
                ordem: 3
                efeito: Estúdios e artistas que usam modelo solto passam a fazer diligência de modelo como fazem liberação de direito de imagem, com cláusula contratual sobre os pesos usados
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e13
        ordem: 1
        efeito: Criadores de mídia passam a ter geração sem filtro para horror, sátira e conteúdo adulto no próprio aparelho, e o limite do que a IA gera deixa de ser o do fabricante
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: Os dois circuitos de mídia generativa, o do sistema e o do arquivo, passam a marcar gênero e público como a classificação indicativa marca
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: Festivais e plataformas passam a exigir a declaração do modelo usado com o hash dos pesos, como exigem os créditos da trilha
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e14
        ordem: 1
        efeito: Governos passam a tratar pesos abertos acima de um limiar de capacidade como item de uso dual, e os laboratórios deixam de liberar a versão mais capaz
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: A defasagem entre o modelo de fronteira e o modelo local volta a crescer, e o local se fixa na faixa útil mas atrás da ponta
            sinal: fraco
            prazo: 2035
            confianca: baixa
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: A IA local se estabiliza como a rádio AM, universal e deliberadamente atrás da fronteira, e a disputa de criação passa a ser sobre o que se faz com modelo mediano
                sinal: fraco
                prazo: 2044
                confianca: baixa
```

### 5.1 Mecanismos, raiz a raiz

**Raiz 1 — baixíssima precisão e memória dedicada.**

- **e1** porque o modelo no aparelho elimina a chamada faturável: a Prompt API não cobra [2], a Apple não cobra PCC abaixo de 2 milhões de downloads [12], o WebLLM roda na aba [8]. Sinal forte: três artefatos. Classe de referência para o prazo: a Prompt API levou do *origin trial* ao estável em cerca de dois anos num único navegador; 2030 supõe que o modelo do sistema chegue ao celular intermediário (Gemini Nano 4 "ainda este ano" só em topo [16]).
  - **e1.1** porque obra sem custo variável não precisa de alguém pagando servidor para continuar existindo. Sinal médio: há o caminho técnico (WebLLM com cache OPFS [8]; LlamaWeb em 16 aparelhos [5]), sem obra conhecida nomeada. Teste da causa solta: sem a raiz, a obra depende de API e morre com ela — passa.
    - **e1.1.1** porque o que se preserva passa a ser um artefato de três partes; se o runtime some, os pesos não bastam. Troca de ator (do estúdio para o acervo). Referência: preservação de jogos e *net art* exigiu emulação décadas depois; por isso 2040.
  - **e1.2** porque, se o comum roda no aparelho, o que sobra para vender é o que não cabe: contexto de 32 mil tokens e raciocínio "deep" no PCC [12], modos `PREFER_ON_DEVICE`/`PREFER_CLOUD` no Firebase [16], nuvem do Ollama cobrada por GPU [15]. Sinal forte: três artefatos. Troca de mecanismo (de "cobrar por uso" para "cobrar por exceção").
    - **e1.2.1** porque, quando a qualidade e a privacidade dependem de onde o passo rodou, esconder isso vira problema de confiança; a Apple já expõe o roteamento como API declarativa (Dynamic Profiles) [12], não ainda como UI. Troca de ator (do engenheiro para o designer).
- **e2** porque LPDDR e HBM saem das mesmas fábricas e o HBM paga mais [11]; o chip novo da Qualcomm põe memória na NPU justamente para depender menos da RAM [19]; a Qualcomm subiu preço citando memória [21]. Sinal forte. É a **retroação** da raiz: freia exatamente o aparelho comum que a raiz quer alcançar.
  - **e2.1** porque, com DRAM cara, só cabe o que se ativa por partes: o AFM 3 Core Advanced guarda o modelo inteiro no flash e ativa de 1 a 4B [3]; o Snapdragon roda MoE de 30B por ativação seletiva [19]; o 1 bit reduz o peso por parâmetro [1]. Sinal forte. Troca de mecanismo (de "mais memória" para "menos bits e menos pesos ativos").
    - **e2.1.1** porque o que diferencia o aparelho passa a ser o modelo que ele carrega. Marcado como possível extrapolação linear na seção 7; mantido com confiança baixa porque troca o critério de compra, não só o aumenta.
  - **e2.2** porque o requisito sobe mais rápido que a RAM do aparelho de entrada: 16 GB no Chrome [2], degrau de aparelho na Apple [7], nenhum Android no navegador [2], e a lista brasileira de 4 GB [18]. Troca de ator (do fabricante para o usuário de baixa renda).
    - **e2.2.1** porque a compra pública é onde a especificação de memória vira regra; o incentivo é duplo (custo por chamada e dado de aluno). Sem fonte aberta sobre editais atuais; confiança baixa.
- **e3** porque a energia medida por token no celular é, em média, três vezes a do servidor em lote, e o impacto ambiental é dominado pelo carbono de fabricação [9]. Sinal forte: medição publicada mais dois estudos na mesma linha vistos em busca (EnerInfer e *Keyword Matters*, títulos listados em 12.4, não abertos — por isso só [9] sustenta). É **retroação**: é o argumento que a nuvem vai usar contra a raiz.
  - **e3.1** porque a própria pesquisa propõe roteamento consciente de bateria entre as oito configurações Pareto-ótimas [9], e a Apple já varia o recurso por degrau de aparelho [7]. Troca de ator (do fabricante para o designer, que herda a variação).
    - **e3.1.1** porque o precedente do *streaming* adaptativo mostra que qualidade variável declarada vira convenção quando a variação é inevitável.
  - **e3.2** porque 88–90% do impacto vem da fabricação [9]; o argumento defensável passa a ser "não troque de aparelho", não "rode local".
    - **e3.2.1** porque, se o modelo novo exige aparelho novo, o carbono embutido anula a vantagem; o fabricante que quiser o argumento ambiental terá de atualizar modelo em aparelho velho.
- **e4** porque NPU dedicada e modelo multimodal permitem processamento contínuo sem ida à nuvem [3][19]. Confiança baixa depois do §6: a energia medida [9] vai contra "sempre ligado".
  - **e4.1** porque o servidor era onde se podia auditar ou barrar o processamento de quem não consentiu; no aparelho, não há ponto intermediário. Troca de ator (do usuário para quem está em volta).
    - **e4.1.1** porque o precedente é a proibição de câmera em espaços sensíveis; a troca é de mecanismo (de "não filmar" para "não inferir").

**Raiz 2 — modelo como recurso de plataforma.**

- **e5** porque a API do navegador tira a necessidade de servidor [2]. Prazo empurrado para 2031 no §6: a referência WebGL levou de 2011 (1.0) a setembro de 2021 (WebGL 2 em todos os navegadores grandes, com o Safari 15) — dez anos [14]; e a Prompt API hoje não roda em celular [2].
  - **e5.1** porque o desenvolvedor afina o código ao modelo de um fornecedor [17] e os modelos falham de forma diferente (15–24% de falha no Nano [17]). Troca de mecanismo (de compatibilidade de CSS/JS para compatibilidade de comportamento).
    - **e5.1.1** porque o precedente é a suíte de conformidade como forma de a web reconquistar interoperabilidade; é a resposta que a objeção da Mozilla pede [17].
  - **e5.2** porque obra que usa modelo embutido depende da versão; o navegador atualiza o modelo sozinho e apaga o modelo quando falta espaço [2].
    - **e5.2.1** porque o arquivo de jornalismo já lida com *link rot*; o modelo trocado é o mesmo problema com outro objeto.
- **e6** porque usar a API exige aceitar a política de usos proibidos do fornecedor [17] e os modelos da Apple vêm com *guardrails* próprios [12]. Sinal forte, confiança alta: já é regra hoje.
  - **e6.1** porque a recusa do sistema empurra quem cria para o modelo baixado, e o caminho técnico existe [8][5]; convergência com e13 (seção 5.2).
    - **e6.1.1** porque a loja é o ponto de controle que resta quando o modelo do sistema não é usado; precedente: a exigência histórica de motor de navegador único no iOS (de memória, sem fonte aberta nesta rodada — seção 8).
  - **e6.2** porque um modelo de sistema distribuído globalmente sob leis nacionais diferentes tende a adaptadores por mercado. Sem artefato: sinal fraco.
    - **e6.2.1** porque o modelo offline só muda quando atualizado; a atualização vira decisão política.
- **e7** porque o SO já expõe o roteamento (Dynamic Profiles com `.model(privateCloudCompute)`) e a cota grátis [12], e o Android expõe os modos [16]. Sinal forte.
  - **e7.1** porque o protocolo `LanguageModel` recebe pacotes da Anthropic e do Google [12]: o fornecedor de modelo passa a chegar ao usuário pela porta do SO.
    - **e7.1.1** porque "escolha do padrão" já foi a forma de a regulação antitruste europeia lidar com navegador e buscador; o objeto muda para modelo. Sem fonte aberta sobre isso nesta rodada.
- **e8** porque a Mozilla declarou oposição por escrito [17]. **Retroação com dono** da raiz 2.
  - **e8.1** porque o WebLLM já oferece armazenamento entre origens experimental [8] e o LlamaWeb reduz memória em 29–33% [5]; o contorno já existe.
    - **e8.1.1** porque estado persistente de GPU já vaza entre origens (AUROC 0,986) [24]; um cofre de pesos comum seria mais uma superfície. Troca de mecanismo (de economia de banda para rastreio).

**Raiz 3 — o aparelho pessoal como servidor.**

- **e9** porque os três pedaços existem: runtime local de massa entre desenvolvedores [15], canal cifrado do celular para o terminal [13] e chip de celular vendido para agente local [19]. Prazo empurrado para 2032 no §6 pela referência do servidor doméstico, que nunca saiu do nicho.
  - **e9.1** porque consultar a casa de fora inverte o fluxo que o acesso residencial foi desenhado para servir. Sem artefato: sinal fraco.
    - **e9.1.1** porque um nó caro tende a ser compartilhado; e memória compartilhada é conflito de privacidade doméstico.
  - **e9.2** porque os runtimes guardam prompts em JSON em texto claro [23]. Troca de ator (da pessoa para o perito).
    - **e9.2.1** porque um modelo adaptado codifica o que a pessoa disse a ele; requisitá-lo é o passo seguinte ao de requisitar o celular.
- **e10** porque o modelo do sistema já faz RAG sobre os arquivos locais (Spotlight Search Tool) [12] e o protocolo aceita modelos locais de terceiros [12]. A adaptação contínua dos pesos no aparelho é laboratório: confiança baixa.
  - **e10.1** porque o que é único e não reprodutível vira patrimônio. Troca de ator (da pessoa para a família e o juiz).
    - **e10.1.1** porque o legado digital de contas já existe como serviço; o objeto passa a ser pesos. Prazo 2046, na borda do horizonte.
  - **e10.2** porque o adaptador pessoal preso ao formato de um fabricante é o novo custo de troca.
    - **e10.2.1** porque a portabilidade de dados já é direito (LGPD, no Brasil; legislação europeia) — de memória, sem fonte aberta; seção 8.
- **e11** porque o Ollama já vende nuvem por GPU [15] e a Apple dá PCC grátis até um limiar [12]. **Retroação / captura** da raiz 3.
  - **e11.1** porque quem controla o chip e o runtime pode verificar o modelo antes de rodar; é a porta do wildcard W3.
    - **e11.1.1** porque, se o runtime comercial fecha, o comunitário (llama.cpp, com 197 mil modelos no formato [22]) vira a infraestrutura que ninguém pode desligar.

**Raiz 4 — pesos soltos.**

- **e12** porque a remoção de recusa virou produto [6]. Sinal forte, confiança alta.
  - **e12.1** porque, se a moderação não está no modelo, ela só pode estar em quem distribui; o Hugging Face é o distribuidor dominante [22].
    - **e12.1.1** porque arquivo pressionado em repositório central migra para redes paralelas; precedente da música digital.
  - **e12.2** porque a Lei de IA da UE põe a obrigação em quem implanta e só transforma o modificador em provedor acima de um terço do compute original [20]. Troca de ator (do laboratório para o estúdio).
    - **e12.2.1** porque quem responde passa a precisar saber o que usou; a diligência de direito de imagem é o precedente em mídia.
- **e13** porque o modelo solto roda no aparelho e a recusa não está mais lá [6][22].
  - **e13.1** porque dois circuitos com políticas diferentes tendem a ser lidos pelo público como marcas de gênero; convergência com e6.1.
    - **e13.1.1** porque a declaração de insumo é a forma de a curadoria lidar com o que não consegue verificar.
- **e14** porque a UE já tem limiar de risco sistêmico que atinge modelo aberto [20]. **Quem bloqueia** da raiz 4. A ordem executiva americana de junho de 2026 apareceu só em resumo de busca e não foi aberta — não sustenta nada aqui.
  - **e14.1** porque, se a faixa mais capaz não é liberada, a defasagem medida de 6–12 meses [10] cresce.
    - **e14.1.1** porque tecnologia universal e deliberadamente atrás da fronteira tem precedente (rádio AM ao lado do FM e do *streaming*). Prazo 2044.

### 5.2 Cruzamentos

- **Convergência 1 (a principal).** e6.1 (raiz 2: a recusa do sistema empurra o criador para o modelo baixado) e e13 (raiz 4: o modelo solto dá geração sem filtro) chegam ao mesmo efeito de 2ª ordem, e13.1: **dois circuitos de mídia generativa**, o do sistema e o do arquivo. Duas causas independentes — uma de plataforma, outra de distribuição — produzem a mesma divisão.
- **Convergência 2.** e2.2 (raiz 1: o aparelho de entrada fica uma geração atrás) e e14.1 (raiz 4: a defasagem entre fronteira e local volta a crescer) convergem numa IA local que é universal mas mediana. As causas são diferentes (memória num caso, regulação no outro), e as duas empurram o criador para o mesmo lugar: projetar para o modelo mediano.
- **Retroalimentação que reforça.** e1.2 (a nuvem vira camada de exceção) → os fornecedores querem controlar a exceção → e7 e e11 (o SO e o runtime decidem o roteamento e cobram o transbordo) → isso reforça a raiz 2 e captura a raiz 3.
- **Retroalimentação que enfraquece.** e9.2.1 (o modelo pessoal vira testemunha) → pessoas passam a evitar memória persistente → enfraquece e10 (o modelo que aprende com a pessoa).
- **Contradição.** A raiz 2 empurra para um guardião mais forte (política do fabricante dentro de qualquer página); a raiz 4 empurra para guardião nenhum. Não se resolve aqui. O que decide: se a NPU passa a exigir pesos assinados (W3) e se a memória barateia (W2). Com pesos assinados, vence o guardião; com memória barata e runtime aberto, os dois circuitos coexistem.
- **Cobertura STEEP e quem perde.** Social: e4.1, e9.1.1, e10.1. Tecnológico: e2.1, e5.1, e8.1. Econômico: e1, e1.2, e7, e11. Ecológico: e3, e3.2 (a categoria que costuma ficar vazia aqui não ficou — e está contra a raiz). Político: e6, e6.2, e14. **Quem perde:** o usuário do aparelho de entrada (e2.2); quem vende recurso de IA por assinatura (e1); quem está em volta de quem usa (e4.1); a web como plataforma neutra (e6); o laboratório que libera pesos e passa a ser pressionado (e14); o próprio dono do modelo pessoal diante do perito (e9.2).

## 6. Sinais fracos e wildcards

### 6.1 Sinais fracos

| Sinal | Onde foi visto | O que mudaria | O que observar |
|---|---|---|---|
| O computador de casa comandado do celular por canal cifrado | Termly [13] | Antecipa a raiz 3 para não desenvolvedores | Um cliente assim sem terminal, para usuário comum, com número de usuários publicado |
| O 1 bit saindo do LLM | BitNet embeddings e VibeASR.cpp [1] | Se busca e fala também cabem em 1 bit, o agente local inteiro (ouvir, buscar, responder) cabe no aparelho de entrada | NPU executando 1 bit (hoje "coming next" [1]) |
| Pesos no flash, não na DRAM | AFM 3 Core Advanced [3] | Desarma parte da retroação e2: o gargalo passa da DRAM para a velocidade do flash | Outro fabricante adotar; velocidade de flash aparecer em especificação de IA |
| O cache de GPU como rastreador | Estudo de privacidade do WebGPU [24] | Se o cofre de pesos (e8.1.1) vier, vira rastreio | Navegadores particionando cache de *pipeline* por origem |
| Família de modelos de nicho no topo dos downloads | "Ornith" entre os mais baixados para llama.cpp [22] | Sinal de que modelos fora dos grandes laboratórios ganham escala no circuito do arquivo | Crescimento de downloads de modelos de laboratórios pequenos |
| A troca por custo dentro da própria disciplina | Três alunos rodando o julgamento em Ollama/Qwen 27B depois da cota de API (evidência do curso) | Mostra que a migração acontece por cota e custo, não por privacidade | Repetir em 2027.1 e contar quantos migram |

### 6.2 Wildcards

- **W1 — Modelo de 1 bit com qualidade de fronteira num celular de entrada.** Mecanismo: treino nativo de 1 bit escalando melhor do que se espera, com NPU dedicada. Por que é improvável: hoje o 1 bit validado de maior qualidade é um 2B [1], e as alegações comerciais maiores não têm validação [25]. O que faria: dissolve e2.2 e e14.1, e a raiz 1 vira dominante; a nuvem vira só armazenamento. Sinal precoce: um modelo de 1 bit validado por terceiros empatando com um modelo de fronteira de dois anos antes.
- **W2 — O ciclo da memória se inverte.** Mecanismo: excesso de capacidade de HBM/DRAM se o investimento em data center desacelerar; memória volta a baratear e o celular de entrada ganha 12–16 GB. Por que é improvável no curto prazo: a IDC projeta crescimento de oferta abaixo da média em 2026 [11]; a indústria fala em escassez longa (fonte não aberta). O que faria: desfaz a retroação e2 e antecipa e2.2 em anos. Sinal precoce: queda de preço contratual de LPDDR por dois trimestres seguidos.
- **W3 — A NPU passa a recusar pesos não assinados.** Mecanismo: depois de um incidente grave com modelo solto, fabricantes de chip e SO implementam atestação de modelo, como já fazem com código assinado. Por que é improvável: quebraria o runtime aberto e a base de desenvolvedores [15][22]. O que faria: a raiz 4 migra para GPU e PC montado, a raiz 2 vence a contradição, e e11.1 vira regra. Sinal precoce: um SO móvel exigindo assinatura para carregar modelo na NPU.
- **W4 — Proibição de inferência local em aparelho de menor.** Mecanismo: pressão sobre IA de companhia e conteúdo sem filtro leva a exigir modelo do sistema (moderado) em aparelhos de menores. Por que é improvável: difícil de fiscalizar em aparelho offline. O que faria: fortalece e6 e dá ao fabricante o papel formal de guardião. Sinal precoce: lei de proteção de menores que mencione "modelo no dispositivo".

## 7. Contra o próprio mapa

### 7.1 Pré-mortem — "é 2046 e este mapa estava errado. Por quê?"

1. **A memória nunca barateou o bastante, e a IA local ficou no topo da pirâmide.** Então o que dominou foi e2 e e2.2, e as raízes 1 e 3 ficaram restritas a quem tem aparelho caro. → e1 mantido, mas e4 (sempre ligado) rebaixado e e9 empurrado.
2. **O "local" virou só um roteador para a nuvem do fabricante.** Com PCC grátis até um limiar [12] e nuvem do Ollama [15], a inferência local pode ter virado apenas o primeiro degrau de um funil de assinatura. Então e1 (fim do custo variável) estaria superestimado. → e1 mantido em confiança média (não alta), e e11 mantido com sinal forte como contrapeso explícito.
3. **O modelo pessoal nunca aconteceu, porque adaptar pesos no aparelho custa energia e cria risco legal.** → e10 rebaixado para baixa; toda a sub-árvore da herança já estava em baixa.

### 7.2 Extrapolação linear

- **e2.1.1** (o modelo vira especificação de venda) é "megapixel de novo": só mais do mesmo, maior. Mantido porque troca o critério de compra, mas com confiança baixa e marcado aqui.
- **e1** é, em parte, extrapolação da queda de preço de inferência. O mecanismo não linear é a eliminação do medidor (não há chamada faturável), não a queda do preço; sem isso, seria contexto.
- **e5.3** (removido): "buscadores perdem tráfego porque o navegador resume localmente" — linear e falha o teste da causa solta (aconteceria com resumo na nuvem). Vai para 12.3.

### 7.3 Velocidade de adoção

- **e5**: 2028 → **2031**. A referência WebGL levou dez anos da especificação ao suporte universal [14]; a Prompt API hoje é um navegador, desktop, 16 GB [2]. Mesmo 2031 exige que o modelo do navegador chegue ao celular.
- **e9**: 2030 → **2032**. A referência do servidor doméstico, que nunca passou do nicho, pede mais tempo e confiança não mais que média.
- **e4**: 2031 → **2034**, e confiança média → baixa: sem classe de referência de "assistente sempre ligado" que tenha passado de 10% por uso real, e a medição de energia [9] vai contra.
- **e2.2**: 2030 → **2034**. Troca de parque de celulares (premissa: cerca de três anos, sem fonte aberta) vezes a crise de memória.

### 7.4 A raiz que não acontece

- **Sem a raiz 1:** a raiz 2 continua (o modelo do sistema pode ser servido parcialmente pela nuvem do fabricante), a raiz 4 continua em PC e GPU. Sobra muito — não é raiz disfarçada.
- **Sem a raiz 2:** a raiz 1 alimenta apps nativos e bibliotecas como WebLLM; e6/e7 somem, e a contradição central desaparece — o mapa fica mais parecido com "IA local de nicho, livre".
- **Sem a raiz 3:** perde-se a sub-árvore de posse e herança (e10), a mais especulativa; o resto fica.
- **Sem a raiz 4:** a convergência 1 perde uma das pernas (sobra só e6.1 para criar o segundo circuito), e o mapa fica menos político.

### 7.5 Suposições escondidas

- **Modelos abertos continuam sendo liberados.** Se não, e14 vira raiz, e a raiz 4 encolhe. (Coberto por e14 e W3.)
- **O SO continua permitindo runtime de terceiros na NPU.** Quebrada → W3.
- **Energia do usuário continua aceitável.** A medição [9] já tensiona; se piorar, e4 some.
- **A web continua sendo uma plataforma onde se publica sem loja.** Se a publicação web ficar restrita, e1.1 e e5 enfraquecem.
- **Portabilidade de dados alcança pesos.** Premissa jurídica não verificada (e10.2.1).

### 7.6 Viés do autor

- **Este mapa foi escrito por uma IA que leu, antes de começar, o mapa de horizonte 2041 do mesmo tema, feito com a mesma skill.** Isso contamina: a raiz 4 e a formulação da contradição central (guardião forte × guardião nenhum) vêm de lá. A raiz 3 foi reformulada de propósito ("o aparelho como servidor", não "a adaptação contínua"), e o experimento foi trocado; ainda assim, a independência é parcial.
- **Gosto pela preservação de obra (e1.1, e1.1.1, e5.2.1).** É efeito que agrada a quem projeta mídia, e o sinal é médio a fraco. Nomeado.
- **Falseadores do briefing.** (a) Adoção além da maioria inicial: a raiz 2 é a mais próxima (45% das remessas são "capazes" [4]), mas capacidade não é uso por apps e páginas, e o navegador móvel ainda não tem o modelo — fica. (b) "Não rompe nada": a raiz 1 é a mais vulnerável a essa crítica; por isso ela foi escrita em torno da eliminação do medidor, não do preço.

### 7.7 Calibração

Depois das alterações: ordem 1 — alta 3, média 9, baixa 2; ordem 2 — alta 0, média 12, baixa 10; ordem 3 — alta 0, média 0, baixa 22. A confiança cai com a ordem. O sinal não foi atribuído pela posição: e1.2 e e2.1 (2ª ordem) têm sinal forte, e4 (1ª ordem) tem sinal médio.

### 7.8 Registro de alterações

- e1.2: sinal medio → forte, porque há três artefatos nomeados (PCC com raciocínio, modos do Firebase, nuvem do Ollama).
- e4: confianca media → baixa, e prazo 2031 → 2034, porque a energia medida por token no celular [9] contradiz o "sempre ligado" e não há classe de referência que tenha passado de 10%.
- e2.2: prazo 2030 → 2034, porque troca de parque × crise de memória.
- e5: prazo 2028 → 2031, porque a referência WebGL levou dez anos para chegar a todos os navegadores [14].
- e5.3: removido (vai para a seção 12.3), porque falha o teste da causa solta.
- e6.1.1: confianca media → baixa, porque o precedente do iOS foi citado de memória.
- e9: prazo 2030 → 2032, porque o servidor doméstico nunca saiu do nicho.
- e10: confianca media → baixa, porque a adaptação contínua dos pesos no aparelho é laboratório.
- e11.2: removido (vai para 12.3), porque "surge a profissão de administrador de IA doméstica" é efeito proibido (profissão nova genérica, sem nome nem mecanismo).
- e13: confianca alta → media, porque não há medida de quantos criadores de mídia usam modelo solto; o que há é oferta, não uso.
- e12.3: removido (vai para 12.3), porque "surge o auditor de pesos" é efeito proibido genérico.
- e14.1: confianca media → baixa, porque depende de uma política (restringir liberação) que ainda não existe.

Cota por raiz cumprida: raiz 1 (e4, e2.2), raiz 2 (e5, e5.3, e6.1.1), raiz 3 (e9, e10, e11.2), raiz 4 (e13, e12.3, e14.1).

## 8. O que a máquina errou

1. **Contaminação pelo mapa irmão.** Li o mapa de horizonte 2041 do mesmo tema antes de começar (para ver o formato). A estrutura de raízes e a contradição central saíram parecidas. Não é plágio de fonte, mas é perda de independência — relevante porque a disciplina vai comparar mapas entre horizontes. Declarado também em 7.6.
2. **Data da referência WebGL diverge entre rodadas.** O mapa de 2041 dizia "suporte universal em fevereiro de 2022"; a Wikipedia que abri hoje diz Safari 15 em 24/09/2021 [14]. Usei o que abri. Uma das duas rodadas leu errado, ou a página mudou; a diferença não altera a classe de referência (dez anos), mas mostra que data "conferível" também escorrega.
3. **Números de resumo de busca que não usei como fato.** Os resumos da busca trouxeram "93% da produção desviada para HBM", "70% da memória global para data centers em 2026", "6.000 modelos abliterados no Hugging Face" e "Trip.com com 400 milhões de usuários usando o Nano em produção". Nenhum foi confirmado numa página aberta — ficaram fora do texto e estão listados em 12.4. O risco era real: soavam precisos.
4. **A página da Counterpoint só tinha o título.** O "45%" vem do título [4]; os 36% (2025) e 52% (2027) apareceram só em resumo de busca. Usei só o 45%.
5. **A medição de energia vem de dois celulares.** O "três vezes menos eficiente" [9] foi medido em dois aparelhos (um deles um iPhone 14, segundo o resumo da busca; a página aberta diz só "dois smartphones modernos"). Levei esse número para uma afirmação de 1ª ordem com confiança alta (e3). A direção é robusta (lote no servidor amortiza melhor); o fator 3, não necessariamente — e para 2046 o fator é chute.
6. **Precedentes citados de memória.** O motor de navegador único do iOS (e6.1.1), a tela de escolha antitruste europeia (e7.1.1) e a portabilidade na LGPD (e10.2.1) vieram de memória, sem página aberta. Rebaixados ou mantidos em baixa, e declarados aqui.
7. **"Dois dos sete só com 4 GB" depende de uma tabela resumida.** A leitura do TechTudo [18] passou por um modelo que resume a página; o Galaxy A07 aparece como "até 8 GB", sem a configuração mínima. A contagem de "quatro com versão de 4 GB" é conservadora mas não conferida linha a linha.
8. **Afiliação e datas.** A afiliação do LlamaWeb (UC Santa Cruz e Microsoft Research) veio da página aberta [5]; a data do Snapdragon (22/09/2026) é a de hoje e foi dada pela página [19] — mas a matéria da CNBC com os números de mercado deu 403 e não foi usada.

## 9. Três cenários para 2046

**Provável.** Em 2046, quase todo aparelho vendido traz um modelo do sistema, e quase todo app e página o usa para o comum: resumir, descrever, transcrever, reescrever. O que é pesado vai para a nuvem do fabricante, que cobra pelo transbordo acima de uma cota. A memória baratou menos do que se esperava; o aparelho de entrada roda um modelo pequeno e uma geração atrás, e depende da nuvem para o resto. Existem dois circuitos de mídia generativa: o do sistema, moderado e uniforme, e o do arquivo, com modelos baixados, alguns sem recusa, rodando em PC e celular topo. Obras interativas com modelo embutido existem e sobrevivem ao estúdio, mas são nicho de arte e jornalismo. **Sinal precoce:** a Prompt API ou equivalente chegando ao navegador de celular com cota de nuvem integrada, antes de 2030.

**Desejável.** Em 2046, a API de modelo embutido é padrão da web, com um modelo de referência e uma suíte de conformidade; o criador escreve uma vez e a obra se comporta de forma parecida em qualquer navegador. Pesos de 1 bit rodam na NPU do aparelho de entrada, e a escola pública usa IA offline sem mandar dado de aluno para fora. O modelo pessoal existe, é exportável em formato aberto e tem regra clara de herança. **O que teria de ser feito:** padronização com política de conteúdo separada da API; NPUs abertas a runtime de terceiros; direito de portabilidade estendido a adaptadores. **Sinal precoce:** a Mozilla ou a Apple implementarem uma versão da API com modelo próprio e política própria, sem aceitar a do Google.

**Indesejável.** Em 2046, a NPU só carrega pesos assinados pelo fabricante; o modelo do sistema aplica regras diferentes por país e é atualizado remotamente em véspera de eleição; o modelo pessoal fica preso ao fabricante e é requisitado em processo judicial como o celular. O circuito do arquivo existe só em PC montado, marginal e tratado como suspeito. A IA local é universal e mediana, e a fronteira é da nuvem. **Sinal precoce:** um SO móvel exigir assinatura para carregar modelo na NPU, ou uma lei nacional exigir modelo "certificado" em aparelho vendido no país.

## 10. O experimento

**O que é.** *Obra sem servidor*: uma peça curta de ficção interativa (a pessoa descreve uma imagem ou tira uma foto, e a peça responde com um trecho narrativo que muda conforme a escolha) com o modelo **dentro da página**. A mesma peça roda por três caminhos: (a) o modelo do navegador (Prompt API, onde houver) [2]; (b) um modelo pequeno baixado e rodado por WebGPU (WebLLM ou LlamaWeb) [8][5]; (c) um modelo de 1 bit servido pelo computador de casa do autor via `bitnet.cpp` [1], acessado do celular. Sem chave de API em nenhum dos caminhos.

**Que pergunta sobre o futuro ele ajuda a responder.** Três, cada uma ligada a um `id`: (1) que fração do parque real de aparelhos de uma turma consegue rodar a obra localmente — testa e2.2; (2) o que muda na obra quando o modelo é o do sistema e não o baixado — recusas, estilo, falhas — testa e6.1 e e13.1; (3) quanto de bateria e de tempo a obra custa num celular comum — testa e3 e e4.

**Que tecnologia emergente usa, e por que não dá com a madura.** Usa modelo embutido no navegador, inferência por WebGPU e 1 bit em CPU. Com a madura (API na nuvem), a pergunta não existe: todo aparelho rodaria igual, o custo seria do autor, e não haveria o que comparar entre o modelo do sistema e o do arquivo.

**O que a turma faz ao testar em sala.** Cada pessoa abre a peça no próprio celular e no laptop, e registra num formulário: modelo do aparelho, RAM, qual caminho rodou, tempo até a primeira resposta, bateria antes e depois de dez interações, e se houve recusa. Depois, a turma lê às cegas pares de respostas (sistema × baixado) para a mesma entrada e marca qual preferiu e qual recusou. Por fim, cada um tenta uma entrada "no limite" (horror, sátira) e anota em que caminho ela passa.

**O resultado que faria o autor mudar de ideia.** Se **mais de dois terços** dos celulares da turma rodarem a obra localmente pelo caminho (b) com primeira resposta abaixo de cinco segundos, e2.2 cai (a divisão por memória é menor do que o mapa supõe) e e2 perde força como retroação. Se as respostas do modelo do sistema e do baixado forem **indistinguíveis às cegas e recusarem as mesmas entradas**, a convergência dos dois circuitos (e13.1) cai. Se a bateria gasta em dez interações for **desprezível** (abaixo de 1%), e4 volta a média.

## 11. Fontes

Vinte e cinco fontes abertas e lidas em 22/09/2026. As que não abriram, ou que apareceram só em resumo de busca, estão em 12.4.

1. https://github.com/microsoft/BitNet — sustenta a linha do tempo do `bitnet.cpp` (2023–2026), os ganhos de velocidade e energia em x86 e ARM, o 100B numa CPU a 5–7 tokens/s, os embeddings de 1 bit, o VibeASR.cpp e o suporte a NPU como promessa. Repositório oficial da Microsoft: confiável para o que mede, interessado no resultado.
2. https://developer.chrome.com/docs/ai/prompt-api — sustenta o Chrome 148 estável, os requisitos (22 GB, 16 GB de RAM ou >4 GB de VRAM, 4 núcleos), a ausência de Android e iOS, a remoção abaixo de 10 GB e as entradas multimodais. Documentação oficial, atualizada em 26/08/2026.
3. https://machinelearning.apple.com/research/introducing-third-generation-of-apple-foundation-models — sustenta o AFM 3 Core (3B) e Core Advanced (20B esparsos, 1–4B ativos, modelo no flash NAND), treino com quantização e português. Fonte primária do fabricante, 08/06/2026.
4. https://counterpointresearch.com/en/insights/genai-smartphone-share-to-rise-to-45-percent-of-global-shipments-in-2026 — sustenta só o 45% das remessas de 2026 (título) e a data (22/06/2026). Casa de análise; página de resumo, sem a metodologia.
5. https://arxiv.org/html/2605.20706v1 — sustenta o LlamaWeb: 16 aparelhos, 8 fabricantes de GPU, 29–33% menos memória, 45–69% mais vazão de decodificação, pré-preenchimento 21–51% mais lento, 23 formatos. Preprint acadêmico (UC Santa Cruz e Microsoft Research), 20/05/2026, sem revisão por pares.
6. https://techcrunch.com/2026/09/03/abliteration-ai-is-making-a-business-out-of-removing-ai-guardrails/ — sustenta a Abliteration.ai (fundação, incorporação, produto, GLM-5.3) e os "milhares" de modelos abliterados no Hugging Face. Imprensa de tecnologia, 03/09/2026.
7. https://www.callstack.com/blog/on-device-ai-after-wwdc-2026-whats-new — sustenta o "novo degrau de aparelho" e o roteamento local/PCC como decisão de produto. Blog de consultoria de React Native: secundário, útil para o efeito prático.
8. https://github.com/mlc-ai/web-llm — sustenta o WebLLM: API compatível com OpenAI, WebGPU, *workers*, quatro caches (inclusive Cross-Origin Storage experimental), 19,2 mil estrelas. Repositório do projeto.
9. https://arxiv.org/abs/2609.11940 — sustenta o fator de 3× de energia do aparelho contra o servidor em lote, a relação não monotônica entre bits e energia, as oito configurações Pareto-ótimas e os 88–90% de impacto vindos do carbono embutido. Preprint (Guégain e Coignion), 10/07/2026; amostra de dois celulares.
10. https://epoch.ai/data-insights/consumer-gpu-model-gap — sustenta a defasagem de 6 a 12 meses entre a fronteira e o que roda numa RTX 5090, por métrica. Instituto independente; ressalva de que modelos pequenos podem ser otimizados para benchmark.
11. https://www.idc.com/resource-center/blog/global-memory-shortage-crisis-market-analysis-and-the-potential-impact-on-the-smartphone-and-pc-markets-in-2026/ — sustenta a causa (HBM contra LPDDR5X), os cenários de 2026 para celular e PC, o peso da memória no custo e os 16 GB dos Copilot+. Casa de análise, 18/12/2025: projeção, não medição.
12. https://developer.apple.com/videos/play/wwdc2026/241/ — sustenta o contexto de 8.192 tokens, a imagem como entrada, o protocolo `LanguageModel`, os pacotes da Anthropic e do Google, o PCC (32 mil tokens, raciocínio, grátis abaixo de 2 milhões de downloads), a Spotlight Search Tool, Dynamic Profiles, o CLI `fm`, o SDK Python e o código aberto. Fonte primária do fabricante.
13. https://termly.dev/ — sustenta o funcionamento do Termly, as ferramentas suportadas, AES-256-GCM com Diffie-Hellman e o retransmissor que não lê o conteúdo. Página do produto; sem número de usuários.
14. https://en.wikipedia.org/wiki/WebGL — sustenta a classe de referência (WebGL 1.0 em março de 2011, 2.0 em janeiro de 2017, todos os navegadores grandes com o Safari 15 em setembro de 2021). Enciclopédia colaborativa; divergência com a rodada anterior registrada na seção 8.
15. https://techcrunch.com/2026/07/09/popular-open-source-ai-developer-tool-ollama-raises-65m-grows-to-nearly-9m-users/ — sustenta os 8,9 milhões de desenvolvedores/mês, 176 mil estrelas, 85% das Fortune 500, a série B de US$ 65 milhões e a nuvem por tempo de GPU. Imprensa; números fornecidos pela empresa.
16. https://android-developers.googleblog.com/2026/05/android-ai-intelligence-system.html — sustenta o Gemini Nano 4 em preview, o ML Kit Prompt API com saída estruturada e cache de prefixo, AppFunctions como MCP no aparelho e os modos de roteamento do Firebase. Blog oficial do Google, 26/05/2026.
17. https://www.theregister.com/2026/04/30/mozilla_pushes_back_against_googles/ — sustenta as objeções da Mozilla, a exigência de aceitar a política de usos proibidos, as taxas de falha do Nano e os 4,27 GB do modelo de desktop. Imprensa técnica com citação direta; o argumento é de uma parte interessada.
18. https://www.techtudo.com.br/listas/2026/04/celulares-mais-vendidos-em-2026-ate-agora-veja-se-valem-a-pena-edmobile.ghtml — sustenta a lista dos sete mais vendidos em Amazon e Mercado Livre e suas memórias. Imprensa brasileira, 22/04/2026; ranking de vitrine, não participação de mercado.
19. https://www.androidauthority.com/snapdragon-qualcomm-snapdragon-8-elite-gen-6-npu-3709726/ — sustenta a memória compartilhada maior na NPU, o acelerador para *transformer*, os 50% de pré-preenchimento e o MoE de até 30B local. Imprensa técnica sobre anúncio do fabricante, 22/09/2026.
20. https://digital-strategy.ec.europa.eu/en/faqs/guidelines-obligations-general-purpose-ai-providers — sustenta as condições da isenção de modelo aberto, sua perda por monetização, o limiar de 10²⁵ FLOP, o limiar de um terço do compute para o modificador virar provedor e as datas de 2025, 2026 e 2027. Fonte oficial da Comissão Europeia.
21. https://9to5google.com/2026/07/29/qualcomm-snapdragon-price-hike-september-2026/ — sustenta o aumento de preço dos Snapdragon a partir de 01/09/2026, com memória entre os custos citados, e a alta anterior de 30%. Imprensa de tecnologia.
22. https://huggingface.co/models?apps=llama.cpp&sort=downloads — sustenta os 197.371 modelos listados para llama.cpp e os downloads dos mais baixados. Página ao vivo do repositório: o número muda a cada dia.
23. https://arxiv.org/abs/2603.23996v1 — sustenta os artefatos periciais de Ollama, LM Studio e llama.cpp, com histórico de prompts em JSON em texto claro. Preprint de autor único, 25/03/2026, Windows e Linux.
24. https://arxiv.org/html/2606.26412 — sustenta o vazamento por estado de *pipeline* WebGPU (AUROC até 0,986), os 7,1 bits a mais de entropia, os 1.095 registros e a mitigação por separação de chave. Preprint de autor único, 24/06/2026.
25. https://www.theregister.com/2026/04/04/prismml_1bit_llm/ — sustenta o Bonsai 8B em 1,15 GB, Apache 2.0, e a ausência de validação independente das alegações. Imprensa técnica.

## 12. Anexo — o levantamento bruto

### 12.1 Saída do verificador

(colada abaixo, na íntegra, depois da execução)

```
$ python3 futurizacao-giordano/references/verificar.py tendencia-ia-local-no-dispositivo-e-no-navegador.md --links
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 14 (frontmatter diz 14)
efeitos ordem 2: 22 (frontmatter diz 22)
efeitos ordem 3: 22 (frontmatter diz 22)
prazo > horizonte (2046) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 3 · media 9 · baixa 2
confiança ordem 2: alta 0 · media 12 · baixa 10
confiança ordem 3: alta 0 · media 0 · baixa 22
links da seção 11: 25/25 respondem (frontmatter diz fontes: 25)
RESULTADO: ok
```

### 12.2 Premissas assumidas (o que o briefing não cobria)

- **Data do "hoje":** 22/09/2026, pelo relógio da máquina (ter 22/09/2026 18:43 -03).
- **"Comum em produto de massa":** operacionalizado como "recurso de fábrica nas três grandes plataformas, em aparelhos topo, presente em uma fração das remessas da ordem de metade" (seção 4.0).
- **Troca do parque de celulares: cerca de três anos.** Sem fonte aberta; usado em e2.2.
- **Servidor doméstico nunca saiu do nicho em vinte anos.** Sem fonte aberta; usado como classe de referência da raiz 3 (e9).
- **Preservação de jogos e *net art* exigiu emulação décadas depois.** De conhecimento geral, sem fonte aberta; usado em e1.1.1.
- **Precedentes jurídicos de memória:** motor de navegador único no iOS; tela de escolha antitruste europeia; portabilidade na LGPD (seção 8, item 6).
- **Nota sobre o Brasil:** feita com o ranking de vitrine do TechTudo [18], não com participação de mercado; IDC e Counterpoint Brasil não foram abertas.
- **Evidência de processo da disciplina:** os três alunos que migraram para Ollama/Qwen 27B vêm da descrição do tema dada pelo professor, não de fonte externa.
- **Modo de execução:** não interativo; nenhuma pergunta feita de volta; entrevista substituída pelo briefing, sem rebaixamento (regra da skill para briefing completo).
- **Profundidade:** três ordens; modo "a partir de um tema".

### 12.3 Efeitos cortados no §6

- **e5.3** (ordem 2, raiz 2): "Buscadores perdem tráfego porque o navegador resume a página localmente antes de o usuário clicar." Cortado: falha o teste da causa solta — o mesmo efeito vem de resumo na nuvem (já existe) — e é extrapolação linear.
- **e11.2** (ordem 2, raiz 3): "Surge a profissão de administrador de IA doméstica." Cortado: efeito proibido (profissão nova sem nome, sem ator, sem mecanismo específico).
- **e12.3** (ordem 2, raiz 4): "Surge o auditor independente de pesos." Cortado: efeito proibido, mesma razão. O que havia de específico nele foi absorvido por e12.2.1 (diligência de modelo em contrato de mídia).
- **Rascunho de raiz descartado:** "Adaptação contínua do modelo no aparelho" como raiz própria. Descartada porque está em laboratório e ficou como efeito (e10) da raiz 3, que tem artefatos hoje. Também para reduzir a sobreposição com o mapa de 2041 (seção 7.6).
- **Rascunho de efeito descartado:** "A cota gratuita instável das APIs empurra estudantes para modelo local." Descartado como efeito: é um sinal presente (seção 6.1), não uma consequência da raiz; e falha a causa solta (qualquer mudança de preço de API faria o mesmo).
- **Rascunho de wildcard descartado:** "Colapso de um provedor de nuvem de IA leva a migração em massa para local." Sem mecanismo que diferencie de uma troca de provedor; é enredo.

### 12.4 Buscas feitas, e o que não abriu

**Buscas por palavra-chave (14):**
1. BitNet 1-bit LLM on-device 2026
2. Chrome built-in AI Prompt API Gemini Nano stable 2026
3. Apple Foundation Models framework on-device WWDC 2026
4. WebGPU LLM inference browser WebLLM benchmark 2026
5. IA local no celular modelo offline Brasil 2026
6. NPU TOPS smartphone share AI capable shipments 2026 Counterpoint
7. Ollama users 2026 local LLM adoption
8. open weights model guardrails removed abliteration local model regulation 2026
9. Epoch AI frontier capabilities consumer GPU lag open models months
10. memory shortage DRAM smartphone RAM 2026 AI data centers HBM prices phones
11. on-device LLM battery energy per token smartphone study arXiv 2026
12. Qualcomm Snapdragon September 2026 on-device agent memory shortage
13. EU AI Act general-purpose AI open-source exemption obligations August 2026 downstream fine-tune
14. Hugging Face GGUF models count llama.cpp 2026 downloads

As demais páginas (Ollama/TechCrunch, blog Android, Mozilla/The Register, TechTudo, PrismML/The Register, WebGL, Termly, Comissão Europeia, estudos do arXiv) foram abertas por URL direta, a partir de resultados de busca ou de conhecimento prévio do endereço.

**Páginas tentadas e não abertas (não entram na seção 11):**
- https://www.cnbc.com/2026/09/22/qualcomm-releases-android-chip-built-for-ai-amid-memory-shortage.html — 403. Os números de TrendForce (LPDDR4X +70–75%, LPDDR5X +78–83% no 2º tri de 2026) e a expressão "AI hub" apareceram só no resumo da busca; não usados como fato.
- https://www.npr.org/2026/05/31/nx-s1-5816391/ai-safety-concerns-danger-open-weight-models-risks — tempo esgotado.
- https://www.lexology.com/library/detail.aspx?g=869c5f65-8f9f-4bc1-bbfd-332c9fbd95fd — 403. A ordem executiva americana de 02/06/2026 e o "6.000 modelos abliterados contra 600 em 2024" vieram daqui via resumo de busca; não usados.

**Números vistos só em resumo de busca (não usados como fato):** "93% da produção das três fabricantes de memória desviada para HBM"; "data centers com até 70% da memória global em 2026"; "SK Hynix: escassez pode passar de 2030"; "Trip.com usando o Nano em produção, 400 milhões de usuários"; "WebGPU em 82,7% do tráfego"; "WebLLM mantém até 80% do desempenho nativo; Llama 3.1 8B a 41 tokens/s num M3 Max"; "mais de 7.000 escolas brasileiras usaram IA offline para 1,5 milhão de redações"; "Counterpoint: 36% em 2025, 52% em 2027"; "EnerInfer: até 65% de ganho de energia em celular".

**Buscas que não deram em nada útil:** a busca em português sobre IA local no Brasil trouxe sobretudo blogs de guia de compra e listas de apps, sem número primário; nenhuma fonte brasileira de participação de mercado por faixa de RAM foi encontrada aberta.

### 12.5 Contagens

Raízes 4. Ordem 1: 14 (e1–e14). Ordem 2: 22. Ordem 3: 22. Retroações nomeadas por raiz: raiz 1 — e2 e e3; raiz 2 — e8; raiz 3 — e11; raiz 4 — e14. Quem bloqueia por raiz: fabricantes de memória e compradores de HBM; Mozilla; empresas de runtime e SO (captura); governos (UE).
