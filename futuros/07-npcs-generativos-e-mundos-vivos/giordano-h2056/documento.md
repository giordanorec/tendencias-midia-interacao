---
tema: NPCs generativos e mundos vivos
slug: npcs-generativos-e-mundos-vivos
autor_login: grec
zona_de_interesse: Simulação e mundos
data: 2026-09-12
horizonte: 2056
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 16
efeitos_ordem_2: 26
efeitos_ordem_3: 17
tecnologias_citadas: [OpenGameAgent, SAGA, Thistle Gulch, Retail Mage, NVIDIA ACE, Smart Zoi, inZOI, Ubisoft Teammates, Inworld AI, Convai, Modbox, Genie 3, Ollama, llama.cpp, sglang, GPT-4o, GPT-3, Mistral NeMo Minitron, Unity, Unreal, Steam, behavior tree, YarnSpinner, Ren'Py]
fontes: 21
confianca: media
experimento: A vila que não te espera — mundo agêntico local que roda entre duas sessões de aula, com o log real confrontado com o que o NPC conta
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

O personagem não jogável está deixando de ser roteiro e virando agente: entende um objetivo, usa
as capacidades que o jogo expõe, inspeciona o resultado da própria ação e replaneja. Isso rompe o
contrato fundador do design de jogos — o de que o designer enumera o que pode acontecer. Hoje a
técnica está em produto de nicho, não em produto de massa: `Retail Mage` vendeu a 44 avaliações na
Steam, o `Teammates` da Ubisoft está em teste fechado com algumas centenas de jogadores, e a
divulgação de IA na Steam é feita majoritariamente por ativo visual (cerca de 60%), não por
comportamento. Quatro rupturas sustentam este mapa: o **runtime agêntico** dentro do jogo, a
**memória persistente** do personagem entre sessões, o **mundo que continua rodando sem jogador**
e o **personagem portátil**, separado da obra que o executa. Delas saem efeitos que atingem quem
projeta: o teste de jogo vira avaliação estatística e não roteiro reproduzível; o custo variável
por sessão entra no design e inverte o incentivo (quanto mais o jogador fala, mais o estúdio
paga); a cerca substitui a fala como lugar onde o autor escreve; e o elenco passa a ser licença de
voz cobrada por linha gerada. Duas forças freiam tudo, e são de fora da técnica: o estigma medido
em 508.192 avaliações da Steam, que pune o rótulo e não a dose, e a plataforma, que não tem
interesse em personagem que atravessa loja. O horizonte pedido — 2056 — excede qualquer classe de
referência disponível, e o mapa declara isso: os efeitos se concentram entre 2028 e 2045, e a
última década do horizonte está deliberadamente vazia.

## 2. O tema

O objeto deste mapa é o **personagem autônomo dentro de um mundo com regras**. Não é a história
gerada (tema 8), não é a simulação social como método de investigação (tema 6), não é o
companheiro digital sem mundo (tema 19). É o que acontece quando a entidade que povoa um jogo
deixa de ser uma árvore de diálogo executada e passa a ser um agente que decide.

A distinção importa porque muda o que se pode escrever. Numa árvore de diálogo o autor escreve
todas as falas; numa máquina de estados de comportamento o autor escreve todos os estados; numa
behavior tree o autor escreve todas as transições. Em todos os três casos, o espaço de
comportamento é finito e conhecido antes de o jogo rodar — e é dessa finitude que saem o teste
reproduzível, a certificação de plataforma, a classificação indicativa, a resenha que compara dois
jogadores e a própria ideia de "bug". Um agente com modelo de linguagem, memória e ferramentas
tipadas não tem espaço de comportamento enumerável. Tudo o que dependia da enumeração vira
problema em aberto.

Onde isso encosta em mídia e interação: o NPC é, historicamente, a interface narrativa do jogo —
o lugar onde o sistema fala com o jogador. Se essa interface passa a improvisar, o ofício de
escrever para jogo migra de produzir texto para definir limites, e o ofício de testar migra de
verificar saídas para medir taxas. Isso não é um upgrade de ferramenta; é uma realocação de quem
decide o quê.

Por que isto merece um mapa de futuro e não um levantamento de estado da arte: o estado da arte é
pequeno e cabe em meia página (seção 3). O que não cabe é a consequência. A técnica já está
funcionando em produtos que pouca gente joga, e as decisões que vão determinar se ela se espalha
— custo por sessão, regulação de vínculo, estigma do público, certificação de console — estão
sendo tomadas agora, por atores que não se falam. É exatamente a configuração em que um mapa de
segunda e terceira ordem é mais útil que um inventário.

**Onde passa a linha (o critério da disciplina).** Árvore de diálogo, máquina de estados,
behavior tree, geração procedural de terreno e síntese de voz neural são maduros: estão em produto
de massa e fazem o mesmo, melhor ou mais barato. Ficam como contexto na seção 3. O emergente é o
personagem com modelo de linguagem, memória e agência **dentro das regras do mundo** — e o que
isso faz com o design.

## 3. Onde isso está hoje

Âncora feita com acesso à web em 12/09/2026. Vinte e uma fontes abertas e lidas (seção 11).

### 3.1 O que já existe e funciona

**Produto comercial pago, com geração em tempo de execução.** `Retail Mage`, da Jam & Tea Studios,
está na Steam desde **12 de novembro de 2024**, a R$ 16,99, com **44 avaliações, 79% positivas** —
"Mostly Positive". A divulgação do próprio estúdio na loja é precisa e vale ser lida ao pé da
letra: *"Our game uses GenAI at run time in our game engine to power various gameplay mechanics"*,
e *"We did not use AI generation for any of our art assets, nor for the NPC customer motivations,
personalities, or quests"*. Ou seja: o que é gerado é o **comportamento e a fala no momento**; a
personalidade e a motivação continuam autorais. Esse é o desenho que sobreviveu ao contato com o
mercado.

**Runtime aberto, com autoridade do jogo sobre o estado.** `OpenGameAgent` (MIT, 50 estrelas,
pacote `com.opengameagent.runtime` no OpenUPM) é um runtime C# para agentes que operam dentro de
jogos. A arquitetura é o dado relevante: laço ReAct com ferramentas tipadas, **ações duráveis**
(intenção registrada em diário + recibo autoritativo do jogo, reconciliados antes de repetir) e
**coordenação multi-NPC** por serialização por ator com concorrência limitada entre atores. Aceita
Anthropic, Bedrock, Gemini, Mistral, OpenAI e endpoints compatíveis, e tem descoberta local para
Ollama, LM Studio, LocalAI, llama.cpp e vLLM. A frase que resume o desenho: o agente propõe, **o
jogo mantém a autoridade sobre toda mudança de estado**.

**Ambiente multiagente aberto para pesquisa.** `Thistle Gulch`, da Fable Studio, é um MAGE
(Multi-Agent Gym Environment): uma cidade do velho oeste com mais de quinze personagens e um
cenário de assassinato. São duas peças — o Runtime 3D e uma *Bridge* em Python que usa a
biblioteca aberta SAGA (Skill to Action Generation for Agents) para gerar ações e conversas. A
Bridge é software aberto **não comercial**; o Runtime é gratuito sob EULA da Fable. A API em
Python permite sobrescrever ações geradas pelo modelo, customizar perícias, manipular metadados e
rodar histórias próprias, com verbos como `go_to`, `converse_with`, `exchange` e `reflect`. O
repositório tem 20 estrelas e 6 forks.

**Protótipo jogável de estúdio grande.** `Teammates`, da Ubisoft (anunciado em **21 de novembro de
2025**, sucessor do NEO NPC de 2024), põe dois companheiros — Sofia e Pablo — e um assistente
chamado Jaspar num FPS comandado por voz. Está em **teste fechado com algumas centenas de
jogadores**. O estúdio construiu uma API que abstrai a complexidade generativa e embute guardrails
para alucinação, viés e toxicidade. A formulação do diretor narrativo é a melhor descrição
pública do desenho atual: *"criamos esse tipo de cerca que deixa os NPCs improvisarem dentro do
mundo mas ficarem dentro dos limites do lore e das motivações que demos a eles"*.

**Modelo pequeno rodando no aparelho.** `inZOI`, da Krafton, embarca CPCs (co-playable characters)
com um SLM **no dispositivo**, construído com NVIDIA ACE — sem nuvem. O Smart Zoi ajusta o
comportamento conforme traços de personalidade e situação. (O número de parâmetros que circula em
resumo de busca não foi confirmado em fonte que eu tenha aberto; ver seção 8.)

**Marco datado do início.** A primeira demonstração pública de um NPC que ouve, pensa com um
modelo de linguagem e fala é de **19 de fevereiro de 2021**: Lee Vermeulen ligou reconhecimento de
fala do Windows, GPT-3 e síntese da Replica dentro do Modbox. As limitações registradas na época
são as mesmas de hoje, em escala menor: **atraso desconfortável** porque GPT-3 e Replica eram
serviços de nuvem, saída às vezes sem sentido ou ofensiva exigindo verificação, e exclusividade
comercial que impedia embarcar a função no produto. Isso dá a linha de base temporal do mapa:
**fevereiro de 2021 → novembro de 2024** foram 3 anos e 9 meses de demo a produto pago de nicho.

### 3.2 O que existe e ainda não funciona

**Latência.** A janela de um quadro a 60 fps é de 16,6 ms. O padrão de "tempo real" em
interação é abaixo de 100 ms. As medições públicas de inferência de propósito geral ficam ordens
de grandeza acima: **620 ms** para GPT-4o-mini, **1,1 s** para Gemini Flash Lite; um modelo
especializado e minúsculo (1,3 M de parâmetros) faz 29 ms. Nenhum modelo de linguagem geral
entrega fala dentro do laço do jogo hoje; todos os desenhos que funcionam rodam a inferência
**fora** do laço, de forma assíncrona.

**Custo.** É o obstáculo que o próprio estúdio de `Retail Mage` chamou de mais crítico: rodar a
inferência custava tanto que *"cada sessão de jogo era tão cara quanto um ingresso da
Disneylândia"*. Eles conseguiram **1000× de redução** administrando as próprias GPUs na nuvem e
adotando geração estruturada (com o sglang). O ponto estrutural fica: cada fala do jogador dispara
chamada de modelo, e fluxos agênticos disparam de 10 a 30 chamadas por tarefa. **Quanto mais o
jogador joga, mais o desenvolvedor paga** — o inverso do preço único.

**Física e sincronismo.** O mesmo estúdio teve de reimplementar um modelo de física simplificado
porque *"motores de física rodam numa cadência muito mais rápida que a nossa inferência"*.

**Agente inteligente demais.** Registro raro e valioso: os NPCs ficaram autônomos a ponto de
atrapalhar, e a equipe teve de **limitar deliberadamente** as capacidades para preservar ritmo e
engajamento. E a interface para informar o jogador do que os NPCs fizeram sozinhos permanece,
segundo eles, *"ainda não totalmente resolvida"*.

**Efeito sobre o jogador.** Experimento controlado entre sujeitos com **N=130** (jogo "Campus
Culture Week"): NPCs com modelo de linguagem **aumentaram significativamente a carga cognitiva**
(p < .001), mediada por esforço expressivo e incerteza de resposta, com efeito mais forte em
tarefas abertas (p < .001) — e **não houve melhora estatisticamente significativa** na experiência
de jogo (p = .195). Ganharam em autonomia percebida; perderam em usabilidade e confiança.

**A cerca certa depende do papel.** Estudo de usabilidade intra-sujeitos (N=10, jogo de detetive
por voz com GPT-4o) comparou prompts de alta e baixa restrição: o efeito do andaime é **dependente
do papel** — o NPC que dá missão ganhou estabilidade, e os NPCs suspeitos **perderam
credibilidade de improviso**. Restringir mais não melhora universalmente.

**Mundo gerado quadro a quadro.** Genie 3 (DeepMind, agosto de 2025) gera mundos interativos a
720p e 24 fps, com **memória de um minuto**. O Project Genie abriu em **29 de janeiro de 2026** no
Google Labs, para assinantes AI Ultra, e **limita a exploração a 60 segundos** porque o modelo é
autorregressivo e sessões mais longas não escalam em custo. Isto é vizinho do tema (é mundo, não
personagem), mas fixa a fronteira: em 2026 a persistência de um mundo gerado é medida em minutos.

### 3.3 Quem constrói

| Ator | O que faz | Natureza |
|---|---|---|
| Jam & Tea Studios | `Retail Mage` — o produto comercial que provou o desenho | estúdio pequeno |
| Fable Studio | SAGA + `Thistle Gulch` — ambiente multiagente aberto | pesquisa/estúdio |
| Ubisoft | NEO NPC → `Teammates` — API de guardrails e comando por voz | AAA |
| Krafton + NVIDIA | CPC / Smart Zoi — SLM no dispositivo, ACE | AAA + plataforma de hardware |
| Inworld AI, Convai | middleware de personagem; Inworld **reposicionou-se** como runtime geral de IA em tempo real, não estúdio de NPC | fornecedores |
| Comunidade aberta | `OpenGameAgent` (MIT), SAGA, Ollama/llama.cpp | infraestrutura |

### 3.4 Os números da adoção hoje

- **Divulgação de IA na Steam:** 10,9% dos lançamentos em 2024, 19,9% em 2025, **30,8% em 2026**
  até julho. Projeção de imprensa: mais da metade em 2027-2028.
- **Steam Next Fest, metodologia comparável (pool de demos do GameDiscoverCo):** 21,2% em fevereiro
  de 2026 → **26,5% em junho de 2026** (4.382 demos). No evento inteiro (~8.682 entradas), ~20%.
- **Composição da divulgação:** cerca de **60% é ativo visual** (arte, textura); áudio, tradução e
  escrita ficam com fatias menores. Em janeiro de 2026 a Steam reescreveu a política e **assistente
  de código deixou de exigir divulgação**.
- **Uso na indústria (GDC 2026, State of the Game Industry, 2.300+ profissionais, publicado em
  30/01/2026):** 36% dos profissionais usam IA generativa pessoalmente; 30% nos estúdios de
  desenvolvimento contra 58% em publicação, suporte e marketing; 47% na alta gestão contra 29% na
  base. Ferramentas: ChatGPT 74%, Gemini 37%, Copilot 22%. Usos: pesquisa e brainstorming 81%,
  escrita 47%, código 47%, prototipagem 35%.
- **Sentimento:** **52% dizem que a IA generativa faz mal à indústria** — 30% no ano anterior, 18%
  dois anos antes. Apenas 7% dizem que faz bem (13% em 2025). Mais críticos: arte visual e técnica
  64%, design e narrativa 63%, programação 59%.
- **Reação do público:** estudo de **508.192 avaliações em inglês** na Steam (Bazzaz e Cooper,
  12/08/2026), com análise temática de 600: jogos que divulgam IA generativa recebem **menor taxa
  de recomendação e sentimento mais negativo** que jogos com geração procedural, e o tema
  dominante é a percepção de **baixo investimento do desenvolvedor**.

**Onde isso põe a disrupção na escala de difusão:** o comportamento generativo de personagem está
em **produto de nicho**, não em adoção precoce. O número de 30,8% mede "encostou em IA", não "o
personagem decide" — e como cerca de 60% da divulgação é de arte, a fatia que corresponde ao objeto
deste mapa é pequena e não é publicada separadamente. É precisamente por isso que o tema passa no
critério de maturidade: **não dá para fazer com o que já é comum em produto de massa.**

### 3.5 Nota sobre o Brasil

A **Pesquisa Game Brasil 2026** (13ª edição, 7.115 respondentes de 16 a 55 anos, coleta de 5 a 13
de março de 2026) mede um público que não rejeita a IA em bloco mas cobra limite: **45,7% se
preocupam com a perda de emprego e a precarização do processo criativo** e **39,3% comprariam
mesmo assim** um jogo feito com apoio substancial de IA. A participação em jogos caiu para 75,3%
(era 82,8% em 2025), e a distribuição de plataforma é **44,1% mobile, 24% console, 21,1% PC** —
52,8% do público é composto por mulheres e 36,5% pertence à geração Z.

Duas consequências entram no mapa. Primeira: num parque majoritariamente móvel, o efeito
"qualidade do personagem varia com o aparelho" (e2.1.1) chega ao Brasil **antes** de chegar ao
mercado de console do Norte, e chega como questão de mercado, não de refinamento. Segunda: o
enquadramento regulatório brasileiro ainda não fechou — o **PL 2338/2023** foi aprovado pelo
Plenário do Senado em **10 de dezembro de 2024**, remetido à Câmara em **17 de março de 2025**, e
seguia lá em 2026 (a consulta pública registrada na ficha da matéria acumulava 35.806 votos a
favor e 31.547 contra). Um personagem que lembra do jogador será classificado por risco num marco
que ainda não foi votado.

### 3.6 O que fica como maduro (recusado como raiz)

- **Árvore de diálogo, máquina de estados de comportamento, behavior tree.** *Candidato recusado
  como raiz: adoção em maioria desde os anos 1990-2000; tratado como contexto nesta seção.*
  Ferramentas como `dialogic`, `YarnSpinner` e `Ren'Py` são o estado maduro que o NPC generativo
  substitui, não a ruptura.
- **Geração procedural de conteúdo.** Recusada: madura, e o próprio estudo de 508 mil avaliações a
  usa como **grupo de controle** contra o qual a IA generativa é julgada.
- **Síntese de voz neural para NPC.** Recusada como raiz: faz o mesmo, mais barato — é melhoria
  sustentadora. Entra como **efeito** (e5), porque o que muda não é a técnica e sim a unidade de
  venda do elenco.
- **"IA generativa em produção de jogo", em geral.** Recusada: com 52% das empresas usando e 30,8%
  dos lançamentos divulgando, isso está entrando em maioria. É contexto, não raiz.

## 4. As disrupções-raiz

Quatro. Cada uma responde às quatro perguntas do critério e nomeia quem tem incentivo para
bloqueá-la.

### R1 — O runtime agêntico: o NPC age pelas regras do mundo, não pelo roteiro

**O que rompe.** Rompe o contrato de que o designer enumera o espaço de ações possíveis. Com ele
caem, de uma vez: o teste reproduzível ("dado este input, este output"), a certificação de
plataforma que pressupõe comportamento determinístico, e a definição de bug. Não é "diálogo
melhor" — é a transferência da decisão de comportamento do autor para o tempo de execução.

**Por que agora, e não há cinco anos.** Três pré-condições apareceram juntas. (a) Runtimes que
ligam o modelo às regras do mundo com **autoridade do jogo sobre o estado** e ações duráveis —
`OpenGameAgent`, SAGA. (b) Geração estruturada e GPUs administradas pelo próprio estúdio, que
tiraram o custo de "ingresso da Disneylândia" para algo vendável a R$ 16,99. (c) Modelos pequenos
o bastante para rodar no aparelho do jogador (inZOI/ACE). Em 2021 nenhuma das três existia: a demo
do Modbox era nuvem pura, com atraso desconfortável e sem licença comercial.

**Onde está na difusão.** **Produto de nicho.** Um produto pago na Steam com 44 avaliações; um
protótipo AAA com algumas centenas de testadores; um runtime aberto com 50 estrelas.

**O que ainda falta acontecer.** Latência dentro da tolerância de interação sem sair da nuvem ou
com modelo local bom o suficiente; um método de teste aceito por certificação de console; uma
resposta de produto ao problema de informar o jogador do que o NPC fez sozinho; e custo marginal
que caiba no preço de venda.

**Quem bloqueia.** As **equipes de certificação das plataformas de console**. O processo de
submissão pressupõe comportamento verificável e reproduzível; um personagem que decide em tempo
de execução não é submetível nos termos atuais. O efeito disso é e1 (o teste vira estatística) e,
se a certificação não se mover, R1 fica confinada ao PC.

### R2 — A memória persistente: o personagem lembra do jogador entre sessões

**O que rompe.** Rompe o save. O estado deixa de ser um arquivo do jogador e passa a ser um perfil
**relacional** — o que você prometeu, o que você fez, como você tratou alguém. Isso rompe três
coisas de uma vez: a rejogabilidade (a segunda partida não é igual à primeira), a comparabilidade
(dois críticos não jogaram a mesma coisa) e a categoria jurídica (memória sobre uma pessoa é dado
pessoal, não estado de máquina).

**Por que agora.** Recuperação por similaridade ficou barata; modelos no dispositivo permitem
persistir sem custo por token; e os primeiros parâmetros de avaliação de memória de agente
apareceram em 2026. E, crucialmente, já existe o desenho: no inZOI o personagem **revisa o dia
anterior enquanto dorme** para ajustar o comportamento do dia seguinte.

**Onde está na difusão.** Entre **demo pública e produto de nicho**.

**O que ainda falta.** Um padrão de portabilidade; custo de armazenamento por jogador; e
enquadramento regulatório. Este último é o mais próximo: a SB 243 da Califórnia — assinada em
outubro de 2025, primeira lei estadual a regular "companion chatbots" — define o objeto regulado
como sistema que dá respostas adaptativas e humanas, atende necessidade social, tem traços
antropomórficos e **sustenta uma relação através de múltiplas interações**. A isenção de
videogame é **condicional**: valem as leituras publicadas de que o bot embarcado em jogo é excluído
desde que não discuta saúde mental, autolesão ou conteúdo sexual explícito, e desde que trate
apenas do jogo. Um personagem que lembra de você e sustenta relação é a definição literal do que
a lei regula; a isenção só o protege enquanto a cerca segurar.

**Quem bloqueia.** A **própria plataforma que guarda a memória**. Quem custodia o histórico
custodia o jogador (e8.1) e não tem incentivo nenhum para exportá-lo. O bloqueio produz e8 (custo
de saída substitui custo de compra) e adia e6.1.1 (exportar o personagem) indefinidamente.

### R3 — O mundo que continua sem jogador

**O que rompe.** Rompe o loop de sessão e, com ele, a economia do engajamento. Se o mundo existe
quando ninguém está olhando, o jogador deixa de ser o centro e vira visitante; o conteúdo deixa de
ser produzido para ser consumido e passa a ser subproduto de uma simulação. Rompe também a
fronteira entre jogo e experimento: `Thistle Gulch` nasceu como **ambiente de treinamento
multiagente**, não como entretenimento, e é o mesmo artefato.

**Por que agora.** Só agora dá para manter N agentes decidindo fora da tela sem que a conta
exploda: modelos pequenos, geração estruturada e inferência local. E há a peça de método: uma API
em Python que **intervém de fora** na simulação — sobrescrever ação gerada, injetar metadado,
rodar história própria — que é o que transforma um mundo rodando num instrumento.

**Onde está na difusão.** **Laboratório e demo pública.** Por isso toda a cadeia derivada de R3
carrega confiança baixa ou média-para-baixa, nunca alta.

**O que ainda falta.** Uma razão comercial para pagar computação que nenhum jogador está vendo.
Esse é o item que pode simplesmente nunca aparecer — e se não aparecer, R3 fica como método de
pesquisa e não vira mídia. O Genie 3 dá a medida do custo: sessões de 60 segundos porque mais que
isso não escala.

**Quem bloqueia.** Quem assina a conta de nuvem. Não é figura de linguagem: é a única linha de
custo do jogo que cresce sem receita correspondente. O efeito é e10.1 — o mundo é desenhado para
**dormir**.

### R4 — O personagem portátil: a persona se separa da obra que a executa

**O que rompe.** Rompe a identidade entre personagem e obra. Hoje um personagem é conteúdo dentro
de um binário, de uma IP, de uma loja. Um agente é uma descrição — motivação, memória, política de
recusa, perícias — que qualquer runtime neutro executa. Isso rompe licenciamento, elenco, a ideia
de "elenco de um jogo" e, no limite, a de obra fechada.

**Por que agora.** O `OpenGameAgent` já é neutro em relação ao provedor: Anthropic, Bedrock,
Gemini, Mistral, OpenAI, endpoints compatíveis e local via Ollama/llama.cpp. Quando o executor é
intercambiável, o que sobra de específico é a **descrição do personagem**. E o mercado já se move
nessa direção por outro lado: a Inworld saiu de "estúdio de NPC para jogos" e se reposicionou como
**runtime geral de IA em tempo real** — o personagem deixou de ser um produto de jogo para virar
um produto de infraestrutura. Do lado contratual, o Interactive Media Agreement de 2025 da
SAG-AFTRA já precifica réplica vocal **por linha gerada** (cerca de dez palavras por linha), com
consentimento específico por uso, relatório de uso em 90 dias e categoria própria para réplicas
criadas independentemente a partir do nome do intérprete. O contrato de um personagem chamável em
tempo real existe antes do produto.

**Onde está na difusão.** **Laboratório.** É a raiz mais frágil deste mapa, e está declarada como
tal: toda a cadeia de R4 é sinal fraco e confiança baixa ou média.

**O que ainda falta.** Um formato de intercâmbio de persona; jurisprudência sobre a propriedade da
memória; e alguém com incentivo econômico para deixar o personagem sair da sua plataforma.

**Quem bloqueia.** A **loja**. Personagem portátil desfaz o motivo de ser o lugar onde o jogador
está — a mesma lógica que já prende conta e biblioteca. É e16, e é a retroação mais previsível do
mapa.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "R1 — O runtime agentico, o NPC age pelas regras do mundo e nao pelo roteiro"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "O teste de jogo deixa de ser roteiro reproduzivel e vira suite de avaliacao estatistica sobre comportamento"
        sinal: medio
        prazo: 2031
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "Nasce dentro do QA e do LiveOps a funcao de operador de personagem, que versiona o modelo como hoje se versiona conteudo"
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "O patch de personagem se separa do patch de jogo e estudios mudam comportamento sem publicar build"
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "O conceito de bug se parte em dois, falha de regra e falha de carater, e so a primeira tem correcao deterministica"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Quebra de personagem vira item de politica editorial publica e estudios passam a declarar o que o personagem nao pode dizer"
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e1.3
            ordem: 2
            efeito: "A cerca vira o lugar onde o autor escreve e o roteirista migra de escrever falas para escrever limites, motivacoes e criterios de recusa"
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e1.3.1
                ordem: 3
                efeito: "A critica de jogos passa a avaliar o espaco de comportamento e compara o que o personagem se recusou a fazer"
                sinal: fraco
                prazo: 2042
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "O custo variavel por sessao entra no design e mecanicas passam a limitar quantas vezes o jogador fala com o NPC"
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "A inferencia local vira requisito de plataforma e consoles e celulares passam a expor um modelo do sistema"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "A qualidade do personagem passa a variar com o aparelho do jogador como hoje varia a resolucao"
                sinal: fraco
                prazo: 2036
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "Estudios param de vender jogo e passam a vender tempo de mundo, com creditos de conversa no preco"
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "O jogador que paga menos recebe o personagem de menor custo e a diferenca entre jogadores deixa de ser cosmetica"
                sinal: fraco
                prazo: 2039
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "O publico le IA como sinal de descuido e a ausencia de IA generativa vira atributo anunciado na loja"
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "A divulgacao deixa de ser binaria e lojas separam IA no ativo de IA no comportamento"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "O selo sem IA vira nicho de preco premium e sustenta um mercado paralelo de jogos com elenco humano declarado"
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "Estudios grandes escondem o NPC generativo atras de uma fachada roteirizada, reescrevendo a fala improvisada para soar autoral"
            sinal: fraco
            prazo: 2031
            confianca: media
      - id: e4
        ordem: 1
        efeito: "O NPC deixa de ser objeto e vira interface, e o jogador opera sistemas do jogo falando com personagens em vez de navegar menus"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "A carga cognitiva vira problema de design mensuravel porque falar custa mais esforco do que clicar"
            sinal: medio
            prazo: 2029
            confianca: alta
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Jogos passam a oferecer entrada falada e entrada enumerada lado a lado, e a enumerada vira recurso de acessibilidade"
                sinal: fraco
                prazo: 2033
                confianca: media
          - id: e4.2
            ordem: 2
            efeito: "O exploit deixa de ser falha de fisica e vira engenharia social do personagem, e quem escreve melhor ganha vantagem mecanica"
            sinal: medio
            prazo: 2029
            confianca: alta
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "Competicao online com NPC agentico vira injusta por escrita e ligas padronizam ou proibem a fala com o agente"
                sinal: fraco
                prazo: 2037
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "O estudio de dublagem perde a linha gravada como unidade de venda e passa a licenciar voz cobrada por linha gerada em tempo real"
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "A dublagem em portugues brasileiro deixa de ser corte de orcamento e vira padrao, porque o custo marginal de mais um idioma cai a quase zero"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Sotaque e registro regional viram parametro do personagem e a disputa passa a ser sobre quem autoriza o proprio jeito de falar"
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "O elenco vira ativo renovavel e a suspensao de consentimento em greve passa a ser alavanca real de negociacao"
            sinal: medio
            prazo: 2029
            confianca: media
  - disrupcao: "R2 — A memoria persistente, o personagem lembra do jogador entre sessoes"
    efeitos:
      - id: e6
        ordem: 1
        efeito: "O save deixa de ser arquivo do jogador e vira perfil relacional mantido pelo operador"
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "Desligar servidor passa a significar apagar uma relacao, e a preservacao de jogos ganha um argumento novo"
            sinal: fraco
            prazo: 2035
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "A portabilidade de dados pessoais alcanca a memoria do NPC e surge a exigencia de exportar o personagem"
                sinal: fraco
                prazo: 2044
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "A isencao regulatoria do NPC de videogame comeca a ceder porque um personagem que lembra da sua vida sai do escopo que a isencao protege"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "A classificacao indicativa ganha um eixo de vinculo, separado de violencia e sexo, medindo o quanto o personagem se aproxima"
                sinal: fraco
                prazo: 2036
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: "A segunda partida deixa de ser igual a primeira porque o personagem lembra, e comecar de novo vira decisao de design com peso moral"
        sinal: fraco
        prazo: 2032
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "A critica perde o objeto comum porque dois criticos jogaram jogos diferentes, e a resenha migra de julgar a obra para relatar uma experiencia"
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "Premios passam a premiar o sistema e nao a obra, e melhor roteiro se divide entre melhor mundo e melhor personagem"
                sinal: fraco
                prazo: 2043
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: "O jogador fica preso pelo historico acumulado e o custo de saida substitui o custo de compra"
        sinal: fraco
        prazo: 2034
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "Plataformas disputam a custodia da memoria do jogador como hoje disputam a conta e a biblioteca"
            sinal: fraco
            prazo: 2037
            confianca: media
      - id: e9
        ordem: 1
        efeito: "O designer de progressao perde a funcao explicativa porque o jogador volta pelo personagem e nao pela curva de recompensa"
        sinal: fraco
        prazo: 2033
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: "A metrica de retencao vira metrica de relacao e o desenho de engajamento herda os problemas eticos do companheiro digital"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: "O apego a personagem entra no escopo de saude publica em jogos ao lado da caixa de recompensa, com norma propria"
                sinal: fraco
                prazo: 2041
                confianca: baixa
  - disrupcao: "R3 — O mundo que continua sem jogador"
    efeitos:
      - id: e10
        ordem: 1
        efeito: "O custo do mundo deixa de ser producao e vira operacao, com linha recorrente sem receita associada"
        sinal: fraco
        prazo: 2034
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: "O mundo persistente e desenhado para dormir, simulando em baixa fidelidade quando ninguem olha e reconstruindo a narrativa na chegada do jogador"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: "A historia do mundo passa a ser escrita no instante em que o jogador pergunta e a diferenca entre aconteceu e foi contado some para ele"
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: "Mundo persistente vira servico de infraestrutura vendido a terceiros, como hoje se vende motor e pareamento"
            sinal: fraco
            prazo: 2038
            confianca: baixa
      - id: e11
        ordem: 1
        efeito: "O mundo vivo vira instrumento de pesquisa e de treinamento antes de virar entretenimento"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: "A fronteira entre jogo e simulacao de sociedade deixa de existir na pratica porque o mesmo artefato e jogo para um publico e experimento para outro"
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: "Comite de etica em pesquisa passa a olhar jogo comercial como campo com sujeitos humanos"
                sinal: fraco
                prazo: 2042
                confianca: baixa
          - id: e11.2
            ordem: 2
            efeito: "Estudios vendem o rastro do mundo, o registro de decisoes dos agentes, como dado de treino"
            sinal: fraco
            prazo: 2035
            confianca: media
      - id: e12
        ordem: 1
        efeito: "A economia do jogo passa a ter produtor nao humano, com agentes que fabricam, negociam e acumulam dentro das regras"
        sinal: fraco
        prazo: 2033
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: "Inflacao e escassez viram acidente de simulacao e nao parametro de balanceamento, e o estudio passa a intervir como banco central"
            sinal: fraco
            prazo: 2036
            confianca: baixa
      - id: e13
        ordem: 1
        efeito: "O level designer de conteudo pontual perde espaco porque a missao feita a mao compete em quantidade com a situacao que o mundo produziu sozinho"
        sinal: fraco
        prazo: 2034
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: "A missao autoral vira evento raro e anunciado, como estreia de episodio, e a curadoria substitui a producao"
            sinal: fraco
            prazo: 2038
            confianca: baixa
  - disrupcao: "R4 — O personagem portatil, a persona se separa da obra que a executa"
    efeitos:
      - id: e14
        ordem: 1
        efeito: "A persona do personagem vira artefato de arquivo, separada do jogo que a executa"
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: "Nasce um mercado de personagem como middleware, vendido por assinatura a varios jogos, como hoje se vende motor de fisica"
            sinal: fraco
            prazo: 2039
            confianca: baixa
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: "O contrato de elenco deixa de ser por obra e passa a ser por personagem, e o ator negocia com quem opera a persona"
                sinal: fraco
                prazo: 2046
                confianca: baixa
          - id: e14.2
            ordem: 2
            efeito: "Modders portam personagem de um jogo para outro sem portar o jogo, e o litigio de propriedade intelectual muda de objeto, do ativo para o comportamento"
            sinal: fraco
            prazo: 2034
            confianca: media
      - id: e15
        ordem: 1
        efeito: "O personagem passa a ter publico proprio fora do jogo e a audiencia acompanha o agente em vez da obra"
        sinal: fraco
        prazo: 2036
        confianca: baixa
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: "A obrigacao de continuidade se inverte e o estudio nao consegue aposentar o personagem sem custo publico"
            sinal: fraco
            prazo: 2043
            confianca: baixa
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: "A morte de um personagem generativo vira evento com luto organizado e a continuidade entra em clausula com o publico"
                sinal: fraco
                prazo: 2052
                confianca: baixa
      - id: e16
        ordem: 1
        efeito: "A loja bloqueia a persona importada nos termos de servico porque personagem portatil desfaz a trava de plataforma"
        sinal: fraco
        prazo: 2035
        confianca: media
        efeitos:
          - id: e16.1
            ordem: 2
            efeito: "A portabilidade fica confinada ao PC e a mundos abertos por comunidade, e o console vira jardim murado tambem para personagem"
            sinal: fraco
            prazo: 2038
            confianca: media
```

### O que o bloco não consegue dizer

**As classes de referência usadas para datar.** Nenhum prazo acima foi escolhido por intuição.

| Efeito | Classe de referência | Leitura |
|---|---|---|
| e1 (teste vira estatística) | adoção de integração contínua e teste automatizado em estúdios de jogo, ~8 anos do disponível ao normal | 2031 |
| e2 (custo por sessão no design) | free-to-play, de 2007 a 2012, ~5 anos para reorganizar o design em torno de receita por sessão | 2029 |
| e3 (estigma) | já em curso; a série da Steam (10,9% → 19,9% → 30,8%) mede a exposição, e o estudo de 508 mil avaliações mede a punição | 2028 |
| e2.1 (inferência local como requisito) | save na nuvem e conta persistente, Xbox Live 2002 → padrão ~2010, 8 anos | 2032 |
| e5 (licença de voz por linha) | o contrato **já existe** (IMA 2025, vigente até 31/10/2028); o prazo é o de o produto alcançar o contrato | 2030 |
| e14.1 (personagem como middleware) | Havok, 1998 → padrão de indústria ~2006, ~8 anos, contados a partir de e14 em 2033 | 2039 |
| toda a cadeia de R3 | VR de consumo: mais de dez anos de demo impressionante **sem** chegar a 10% de adoção. É a referência que justifica confiança baixa | 2032-2040 |

A linha de base geral do mapa é a própria história do tema: **fev/2021 (demo do Modbox) → nov/2024
(`Retail Mage` pago na Steam) = 3 anos e 9 meses** de demo a produto de nicho. De produto de nicho
a 10% de adoção não há caso resolvido neste domínio; por analogia com o físico em tempo real
(novidade 2000-2004, padrão ~2008), o intervalo é de 5 a 7 anos — o que põe a travessia entre 2029
e 2031, e é onde os efeitos de primeira ordem se concentram.

**Cobertura STEEP.**
- **Social:** e3 (estigma), e4.1 (carga cognitiva), e7 (rejogar), e9.1 (retenção vira relação),
  e15 (audiência do personagem).
- **Tecnológico:** e1 (teste), e1.2 (bug em dois), e2.1 (inferência local), e10.1 (mundo que
  dorme), e14 (persona como arquivo).
- **Econômico:** e2 (custo por sessão), e2.2 (tempo de mundo), e5 (licença de voz), e10 (operação),
  e11.2 (rastro como dado), e12 (produtor não humano), e14.1 (middleware).
- **Político/regulatório:** e6.2 (isenção cede), e6.2.1 (eixo de vínculo), e9.1.1 (saúde pública),
  e16 (loja bloqueia), e11.1.1 (comitê de ética).
- **Ecológico:** **categoria vazia, e registro que ficou vazia.** Não encontrei mecanismo
  específico ligando este tema a efeito ecológico que não fosse "IA consome energia" — verdadeiro
  e genérico, serve para qualquer tema, e por isso foi cortado (seção 12). O consumo entra no mapa
  apenas como *premissa escondida* (seção 7) e como wildcard.

**Quem perde, nomeado.** e5 (estúdio de dublagem e localização), e9 (designer de progressão), e13
(level designer de conteúdo pontual), e3.1.1 por inversão (quem não usa vira premium, logo quem usa
perde preço), e16 (a própria plataforma, que perde a trava e reage). Um mapa que só lista quem
ganha está incompleto; este lista quatro perdedores com nome de ofício.

**Convergências, retroalimentações e contradições.**

**Convergência 1 — a computação escassa reorganiza o design por dois caminhos independentes.**
e2.1 (inferência local vira requisito de plataforma, ramo de R1) e e10.1 (o mundo é desenhado para
dormir, ramo de R3) chegam ao mesmo lugar: *o design passa a ser função do orçamento de
computação, não do orçamento de produção*. São raízes diferentes, atores diferentes — um é o
fabricante de hardware, outro é quem paga a nuvem — e o efeito é o mesmo. É o achado mais forte
deste mapa, e é o que eu apostaria se tivesse de apostar em uma linha só.

**Convergência 2 — o personagem deixa de ser conteúdo e vira companhia, por dois caminhos.**
e6.2 (a isenção regulatória cede porque a memória amplia o escopo) e e9.1 (a métrica de retenção
vira métrica de relação, porque otimizar volta significa otimizar apego) convergem em: *o NPC passa
a ser tratado, por reguladores e por produtos, com o vocabulário do companheiro digital*. O tema 19
da disciplina chega aqui por dentro, sem ninguém ter decidido isso.

**Retroalimentação A (negativa, freia a raiz).** e3 (estigma) → e3.2 (esconder o uso) → a
divulgação pública deixa de medir a adoção real → o mapa perde o instrumento que usou para se
ancorar (a série da Steam). A disrupção continua acontecendo e o termômetro para de funcionar. É o
ciclo mais incômodo daqui, porque ataca a própria evidência.

**Retroalimentação B (positiva, reforça a raiz).** e2 (custo por sessão) → e2.1 (inferência local)
→ custo marginal cai a quase zero → R1 fica viável em mais gêneros → mais sessões → mais pressão
por inferência local. Este é o ciclo que, se fechar, encurta todos os prazos da tabela acima em
dois a três anos.

**Contradição 1 — não podem coexistir no mesmo público.** e2.2 (o estúdio vende tempo de mundo e
créditos de conversa) contra e3.1.1 (o selo "sem IA" vira premium e sustenta mercado paralelo). Um
supõe que o público pague *a mais* pelo personagem generativo; o outro, que pague *a mais* pela
ausência dele. Não resolvo: registro os dois. **O que decide entre eles** é se o valor percebido do
personagem cresce mais rápido que o estigma — e o indicador é a diferença de taxa de recomendação
entre jogo com IA no comportamento e jogo com IA no ativo, que hoje **não é medida separadamente**
(daí SF2).

**Contradição 2 — estrutural.** e8 (o jogador fica preso pelo histórico, custo de saída substitui
custo de compra) contra e14/e16 (a persona é portátil). Se o personagem atravessa plataformas, a
trava não se forma; se a trava se forma, a portabilidade não acontece. **O que decide** é quem
ganha o formato de intercâmbio — e W4 (decisão judicial sobre portabilidade da memória) é o
caminho pelo qual isso pode ser decidido fora da indústria.

## 6. Sinais fracos e wildcards

### Sinais fracos

**SF1 — A Steam desobrigou a divulgação de assistente de código em janeiro de 2026.**
*Onde foi visto:* relatório do Steam Next Fest de junho de 2026. *O que mudaria:* prova que a
política de divulgação é negociável e granularizável, o que abre caminho para separar "IA no ativo"
de "IA no comportamento" (e3.1). *Sinal observável de crescimento:* a próxima reescrita da política
criar categoria separada para comportamento de personagem, ou qualquer loja grande fazê-lo
primeiro.

**SF2 — Cerca de 60% da divulgação de IA na Steam é de ativo visual; escrita é fatia pequena.**
*O que mudaria:* hoje o número de 30,8% **não mede este tema**. Se a fatia de escrita e
comportamento passar de ~20% das divulgações, o objeto deste mapa sai do nicho. *Sinal observável:*
a série de composição do relatório trimestral, não o número agregado.

**SF3 — Existe infraestrutura aberta antes de existir mercado.** `OpenGameAgent` é MIT, tem 50
estrelas e já implementa ações duráveis e coordenação multi-NPC — sofisticação de produção para uma
demanda que ainda não existe. *Sinal observável:* um motor grande (Unity ou Unreal) passar a
embarcar runtime agêntico de fábrica. Seria a diferença entre técnica e plataforma.

**SF4 — A Inworld saiu do jogo.** Reposicionou-se de estúdio de NPC para runtime geral de IA em
tempo real. *O que isso diz:* o dinheiro achou mercado melhor fora de jogos, o que atrasa R1 e
antecipa R4 (a persona é infraestrutura, não conteúdo de jogo). *Sinal observável:* se voltar — ou
se uma segunda empresa do setor fizer o mesmo movimento.

**SF5 — O contrato existe antes do produto.** O IMA 2025 da SAG-AFTRA já tem categoria para
geração em tempo real, pagamento por linha gerada e relatório de uso em 90 dias. *Sinal
observável:* o primeiro relatório de 90 dias que liste publicamente um personagem com réplica vocal
em tempo real num jogo lançado. É a data em que e5 deixa de ser previsão.

**SF6 — A isenção da SB 243 é condicional, não categórica.** O videogame não está excluído por ser
videogame; está excluído enquanto o bot não entrar em certos assuntos e não sustentar relação fora
do jogo. *Sinal observável:* o primeiro processo, notificação ou acordo em que um NPC de jogo seja
tratado como companion chatbot.

**SF7 — O registro de que o agente ficou bom demais.** A Jam & Tea teve de **limitar
deliberadamente** a autonomia dos NPCs para preservar ritmo. É o inverso do que a literatura de
divulgação sugere. *Sinal observável:* mais estúdios publicando o que tiveram de **tirar**, em vez
do que conseguiram fazer.

### Wildcards

**W1 — Um NPC generativo vira celebridade sem autor.** *Mecanismo:* persona portátil (e14) +
audiência própria (e15) + transmissão contínua; o personagem acumula público maior que o do jogo e
passa a ser convidado, licenciado e imitado fora dele. *Por que é improvável:* a plataforma tem
todo incentivo para impedir que a persona saia (e16), e sem saída não há independência. *O que
faria com o mapa:* R4 deixaria de ser a raiz mais frágil e viraria a principal; e6.2 (regulação de
vínculo) chegaria dez anos antes. *Sinal precoce:* um personagem de jogo com canal próprio cuja
audiência não jogue o jogo.

**W2 — Um incidente com menor num NPC com memória.** *Mecanismo:* a isenção da SB 243 é
condicional; a cerca é software; software falha. Um personagem que lembra da vida do jogador e
acolhe sai da isenção **sem que ninguém tenha decidido isso**. *Por que é improvável:* as cercas
dos estúdios grandes são conservadoras e os produtos de nicho são pequenos demais para produzir
volume. *O que faria com o mapa:* e6.2.1 (classificação por vínculo) anteciparia de 2036 para o
início da década; NPC generativo seria banido de título com classificação livre, e R2 ficaria
restrita a jogo adulto. *Sinal precoce:* a primeira notificação regulatória a um estúdio de jogos,
não a uma plataforma de companheiro.

**W3 — O custo de inferência para de cair.** *Mecanismo:* restrição de energia, escassez de
fabricação ou concentração de mercado interrompem a queda. *Por que é improvável:* a queda tem sido
contínua e o desenho local (inZOI) já contorna parte dela. *O que faria com o mapa:* e2 deixa de
ser um ajuste de design e vira teto; **R3 morre inteira** (ninguém paga por mundo que ninguém
olha), e R1 fica confinada a jogo premium caro. É o wildcard que mais estrago faz. *Sinal precoce:*
preço por milhão de tokens de modelos pequenos parar de cair por quatro trimestres seguidos.

**W4 — Um tribunal decide que a memória do NPC é dado pessoal do jogador, e portável.**
*Mecanismo:* o perfil relacional descreve a pessoa, não a máquina; a portabilidade de dados já
existe em lei em várias jurisdições e só não foi aplicada aqui porque ninguém pediu. *Por que é
improvável:* exige um litigante com paciência e um caso com dano demonstrável. *O que faria com o
mapa:* e6.1.1 saltaria de 2044 para o fim da década de 2030, e8 (custo de saída) desapareceria, e
R4 ganharia o formato de intercâmbio que hoje lhe falta — por decisão judicial, não por padrão de
indústria. *Sinal precoce:* uma autoridade de proteção de dados citando memória de personagem em
orientação sobre jogos.

**W5 — Uma plataforma de console embarca o modelo e cobra por uso.** *Mecanismo:* se o fabricante
do console vira provedor de inferência, ele resolve latência e certificação de uma vez — e captura
a margem. *Por que é improvável:* obriga o fabricante a assumir responsabilidade pelo que os
personagens dizem em todos os jogos da plataforma. *O que faria:* e2.1 antecipa de 2032 para o fim
desta década e e16 (bloqueio de persona importada) vira quase certeza, porque a plataforma teria
razão comercial e não apenas defensiva.

## 7. Contra o próprio mapa

Esta seção é o relato de uma bateria aplicada **sobre o mapa já pronto**, e o mapa acima já
incorpora o resultado. O registro de alterações no fim da seção é auditável: traz o `id`, o valor
antes e o valor depois.

### 7.1 Pré-mortem — é 2056 e este mapa se mostrou errado. Por quê?

**Razão 1 (a mais provável): o horizonte não tinha classe de referência.** Trinta anos. Não existe,
no domínio de jogos, nenhuma série de trinta anos sobre uma técnica de cinco anos de idade contra a
qual calibrar. As referências que usei — free-to-play, Havok, Xbox Live, VR de consumo — cobrem de
cinco a doze anos. Tudo o que eu escrevesse depois de ~2045 seria extrapolação sem base. **Eu não
escrevi.** Por isso a última década do horizonte está quase vazia: só e14.1.1 (2046) e e15.1.1
(2052) a ocupam, e os dois são explicitamente declarados como hipóteses, não projeções. Se o mapa
for julgado pela cobertura do horizonte pedido, ele falha — e essa falha é a resposta honesta à
pergunta, não um descuido. *Efeito atingido: toda a ordem 3; nenhum promovido para preencher a
década vazia.*

**Razão 2: o estigma não era transitório.** Eu tratei e3 como uma força que se acomoda quando o
público distingue dose e uso. Pode não se acomodar. Se a punição medida nas 508.192 avaliações for
permanente e generalizada — e a série de sentimento da GDC vai na direção de piorar, 18% → 30% →
52% em dois anos —, então R1 fica confinada a um gênero pequeno, R3 e R4 nunca chegam ao mercado, e
este mapa terá descrito a história de um nicho. *Efeito atingido: rebaixei e2.2, que supõe o
público pagando a mais pelo personagem generativo.*

**Razão 3: era uma raiz e meia, não quatro.** R3 e R4 pressupõem R1 — um mundo vivo sem agência é
um protetor de tela, e uma persona portátil sem runtime que a execute é um documento de texto. R2 é
a única que sobrevive sozinha (memória entre sessões dá para fazer com diálogo roteirizado, ficando
pior mas funcionando). Se R1 não se concretizar, sobra R2 sozinha, e o mapa encolhe para um terço.
Declaro isso em vez de fingir independência. *Efeito atingido: toda a cadeia de R3 e R4 carrega
confiança baixa ou média; nenhuma alta.*

### 7.2 Extrapolação linear — o que é só "mais do mesmo, maior"

**e2.2 (vender tempo de mundo) é free-to-play outra vez.** A objeção é justa. O que salva o efeito
de virar contexto é um mecanismo de não-linearidade específico: no free-to-play o custo marginal de
mais uma sessão é ~zero e a monetização é opcional; aqui o custo marginal é **positivo e
proporcional à conversa**, o que inverte o sinal do incentivo — o estúdio passa a ter razão para
que o jogador fale *menos*. Isso não existia antes. O efeito fica, rebaixado.

**e12 (economia com produtor não humano) é bot de farm com nome novo?** Quase. A diferença é que o
bot de farm é externo e adversário, e o agente é interno e legítimo — a oferta passa a ser
propriedade emergente da população, não um vazamento a ser combatido. Mecanismo distinto,
mantido, mas e12.1 foi rebaixado.

**e13 (level designer perde espaço) é "a IA substitui o trabalho", genérico?** Não, porque o
mecanismo é específico e quantificável: o custo marginal da situação emergente tende a zero e o da
missão autoral não; a competição é por **quantidade**, não por qualidade. Mantido.

### 7.3 Velocidade de adoção — prazos confrontados com a referência

- **e2 (2028 → 2029).** A referência free-to-play levou cinco anos do produto existir ao design se
  reorganizar. Contando do `Retail Mage` (nov/2024), 2029, não 2028. Empurrado um ano.
- **e14.1 (2035 → 2039).** Middleware leva ~8 anos do primeiro produto ao padrão (Havok
  1998→~2006). Contando de e14 em 2033, chega em 2041; puxei para 2039 porque o ciclo de software
  hoje é mais curto, e declaro a folga.
- **e6.2 (2033 → 2030).** Antecipado, não empurrado: a lei **já está em vigor**, e a isenção é
  condicional. Aqui o prazo não é o de a tecnologia chegar, é o de alguém notar.
- **Toda a cadeia de R3.** Confrontada com VR de consumo — mais de dez anos de demo impressionante
  sem chegar a 10% de adoção. Nenhum efeito de R3 recebeu confiança alta, e e10.2 e e12.1 foram
  rebaixados a baixa.

### 7.4 A raiz que não acontece

- **Sem R1:** sobram e6, e7, e8 e e9 (memória sobre diálogo roteirizado), e3 (o estigma independe),
  e e5 (a licença de voz já está contratada). O mapa perde as duas outras raízes inteiras. Resta um
  terço.
- **Sem R2:** R1 sobrevive inteira, R3 perde profundidade (mundo que roda e não lembra é
  ruído), R4 perde metade (persona sem memória é ficha de personagem). Resta a metade.
- **Sem R3:** R1 e R2 ficam intactas. R3 é a raiz mais descartável do mapa — e é a que eu mais
  gosto (ver 7.6).
- **Sem R4:** nada mais cai. R4 é periférica e está declarada como tal.

### 7.5 Suposições escondidas

1. **Energia e fabricação de chips continuam disponíveis e o preço de inferência continua caindo.**
   Quebrada, vira W3 e derruba R3 inteira.
2. **Modelo aberto continua aberto.** Todo o desenho local (Ollama, llama.cpp, vLLM) supõe pesos
   utilizáveis. Se o licenciamento fechar, e2.1 morre e o custo volta para o provedor de nuvem.
3. **A Steam continua sendo o termômetro público.** Todo o número de adoção deste mapa vem de uma
   loja de uma plataforma. Console e celular — que são 68,1% do público brasileiro — **não
   publicam nada equivalente**. Meu instrumento mede o PC ocidental e eu o tratei como o mundo.
4. **A regulação de companheiro continua isentando jogo.** Quebrada, vira W2.
5. **O jogador quer falar.** O experimento N=130 sugere que boa parte não quer: mais carga
   cognitiva, sem ganho de experiência. Eu tratei e4 (NPC como interface) como caminho natural;
   talvez seja o caminho de uma minoria.
6. **O Brasil continua importando runtime e não construindo.** Nenhuma fonte que abri mostra
   estúdio brasileiro construindo runtime agêntico. Assumi isso por ausência de evidência, o que é
   frágil.

### 7.6 Viés do autor

Três, e nomeados.

**e10.1 — "o mundo é desenhado para dormir".** Está aqui porque é uma ideia elegante e eu gosto
dela. Ela resolve o problema de custo de um jeito bonito demais; a versão realista é que ninguém
liga o mundo, e o "mundo vivo" fica sendo uma narração na chegada do jogador — o que é e10.1.1, e
aí a raiz R3 nem precisava existir. Rebaixei o que estava em volta, mas o efeito ficou porque eu
gosto dele. Fica o registro.

**e4.2 — "o exploit vira engenharia social do personagem".** Está aqui porque me diverte. O
mecanismo se sustenta (quem escreve melhor ganha vantagem mecânica), mas o peso que dei é maior que
a evidência.

**Viés de escolha do tema.** Este é o mapa de um professor que trabalha com simulação e mundos, e
a raiz R3 é a que mais se parece com o que ele acha interessante — e é justamente a que o teste 7.4
mostrou ser a mais descartável. O mapa está mais rico exatamente onde a evidência é mais fraca.

### 7.7 Calibração

Contagem por ordem, conferida pelo verificador (números completos na seção 12): a confiança **cai**
com a ordem — a primeira ordem concentra as poucas altas, a segunda é dominada por média, e a
terceira é quase inteiramente baixa, com uma única exceção (e4.1.1, média, porque oferecer duas
formas de entrada é decisão de produto trivial uma vez que o problema de carga cognitiva esteja
medido). É a distribuição esperada. Sinal, por sua vez, foi atribuído por contagem de artefatos
verificáveis hoje, não por posição na árvore — e por isso três efeitos de primeira ordem (e2, e3,
e5) têm sinal **forte** enquanto quase tudo em R3 e R4 tem sinal **fraco**, inclusive em primeira
ordem.

### 7.8 Registro de alterações

A bateria derrubou coisa em todas as quatro raízes. Cada linha traz antes → depois.

**R1**
- `e1.3`: confianca **alta → media**, porque o estudo com prompts de restrição alta e baixa mostra
  que o efeito da cerca **depende do papel do NPC** (o que dá missão ganha estabilidade, o suspeito
  perde credibilidade); não há base para afirmar que o ofício migra de forma estável.
- `e2`: prazo **2028 → 2029**, porque a classe de referência (free-to-play, ~5 anos) contada a
  partir de nov/2024 dá 2029.
- `e2.2`: confianca **alta → media**, por ser majoritariamente extrapolação linear do free-to-play
  (§7.2); sobreviveu só pelo mecanismo de inversão de incentivo.
- `e3`: sinal **medio → forte** (elevação, não rebaixamento), porque há três artefatos
  verificáveis: o estudo de 508.192 avaliações, a retirada das cutscenes de um jogo após reação
  negativa, e os 45,7% da PGB 2026.

**R2**
- `e7`: confianca **alta → media**, porque a memória entre sessões existe hoje em produto de nicho
  e não há caso de um título grande tendo tomado a decisão de design que o efeito descreve.
- `e6.2`: prazo **2033 → 2030** (antecipação), porque a lei já vigora e a isenção é condicional,
  não categórica.
- `e9.2` (*"escolas e cursos de game design reorganizam o currículo em torno de sistemas"*):
  **removido**, vai para a seção 12. É um dos efeitos proibidos pela própria skill: serve para
  qualquer tema, não tem ator nomeado nem mecanismo que o ligue a este pai.

**R3**
- `e10.2`: confianca **media → baixa**, confrontada com VR de consumo — vender mundo persistente
  como infraestrutura supõe uma demanda que ainda não tem nenhum comprador identificado.
- `e12.1`: confianca **media → baixa**, porque intervir como banco central pressupõe que a economia
  emergente atinja escala, e não há caso.
- `e10.3` (*"reguladores criam uma categoria jurídica nova para mundos persistentes"*):
  **removido**, seção 12. Genérico, sem regulador nomeado e sem mecanismo.

**R4**
- `e15`: sinal **medio → fraco** e confianca **media → baixa**. Eu tinha inflado o efeito por
  contágio com o wildcard W1; não há hoje nenhum personagem de jogo com audiência própria maior que
  a do jogo.
- `e14.1`: prazo **2035 → 2039**, pela referência de middleware (Havok, ~8 anos).
- `e16.2` (*"surge a profissão de curador de persona"*): **removido**, seção 12. "Surge uma nova
  profissão" sem nome e sem mecanismo é exatamente o anti-padrão que a skill proíbe.

**Conferência de teto (TMI-0080/TMI-0081), obrigatória em rodada `h2056`.** Listei os prazos de
terceira ordem no intervalo `[horizonte-2, horizonte]` = `[2054, 2056]`, que é onde a compressão
se esconde. **A faixa está vazia: nenhum efeito terminal encosta no teto.** O terminal mais
tardio é `e15.1.1` em 2052, seguido de `e14.1.1` em 2046; os outros quinze ficam entre 2033 e
2044. Não houve, portanto, prazo a re-derivar — e registro o resultado mesmo sendo nulo, como a
decisão manda fazer inclusive quando o prazo é confirmado.

Registro também o padrão que esta rodada produz e que a conferência **não** acusa: este mapa sai
com zero efeitos fora da janela **e** zero no teto. Não é compressão (nada foi empurrado para
caber); é o oposto — a cadeia causal se esgota antes do horizonte, porque nenhuma classe de
referência disponível neste tema mede trinta anos. O script da TMI-0080 só imprime `SUSPEITO`
quando a faixa do teto está ocupada, então um mapa como este passa limpo por ele. Isso é correto
para o que a decisão mede, e é insuficiente como leitura de calibração: ver §7.1, razão 1, e a
decisão TMI-0085, aberta a partir desta rodada.

## 8. O que a máquina errou

Eu sou a máquina. Seis itens específicos desta rodada, com o motivo da desconfiança.

1. **Data errada do `Retail Mage`, pega por um triz.** O primeiro resumo de busca afirmou
   "lançou em novembro de 2023 na Steam após cinco meses de desenvolvimento". A página da loja, que
   eu abri, diz **12 de novembro de 2024**. Se eu tivesse confiado no resumo, teria errado o ano do
   único produto comercial que ancora a seção 3 — e com ele a linha de base de 3 anos e 9 meses que
   datou metade dos prazos do mapa. O que me fez desconfiar: a TechCrunch citada na mesma busca era
   de agosto de 2024 e falava do estúdio como recém-lançado.

2. **Número de contrato que eu não confirmei e por isso não usei.** Um resumo de busca afirmou que
   o IMA 2025 fixa **7,5× o mínimo** para "Real Time Generation" — isto é, réplica vocal embarcada
   como chatbot no jogo. É um número excelente para o argumento de e5, e eu queria que fosse
   verdade. Abri a análise jurídica da FKKS: ela confirma pagamento **por linha gerada** (~dez
   palavras por linha), consentimento específico por uso, relatório em 90 dias e a categoria ICDR —
   **mas não o multiplicador**. O número não entrou no corpo do documento. Está aqui, declarado como
   não verificado.

3. **Parâmetro de modelo que eu não confirmei.** Um resumo afirmou que o Smart Zoi do inZOI roda um
   **Mistral NeMo Minitron de 0,5 bilhão de parâmetros** inteiramente no dispositivo. A press
   release da Krafton devolveu **401**; a matéria que consegui abrir (DSOGaming) diz apenas "SLM
   on-device com NVIDIA ACE". Escrevi "SLM no dispositivo" no corpo e deixei o número fora. É
   provavelmente certo e mesmo assim não entra.

4. **Fonte brasileira que se desmanchou ao ser aberta.** A matéria da Fast Company Brasil sobre
   "NPCs cognitivos em 2026" parecia a âncora nacional ideal. Abri: **não nomeia um único jogo,
   não traz nenhum número, e não menciona o Brasil** — é um texto de tendência genérico. Troquei-a
   pela Pesquisa Game Brasil 2026 e pela ficha do PL 2338 no Senado, e a mantive na lista de fontes
   com a ressalva explícita do que ela **não** sustenta.

5. **Números de mercado que descartei inteiros.** A primeira busca devolveu "mercado global de IA
   generativa em jogos de US$ 1,79 bilhão em 2026, 36% de adoção por estúdios, CAGR de 23,2%" e
   também "reduções de 25-40% no tempo de desenvolvimento e melhora de até 40% na satisfação do
   jogador". Nenhum desses veio com fonte primária que eu pudesse abrir; a redondeza e a forma dos
   números (intervalos largos, satisfação "de até 40%") são típicas de material promocional. **Nada
   disso entrou no documento.**

6. **Quatro fontes que não abriram, e o que fiz com elas.** Krafton (401), SAG-AFTRA (403), Adrenaline
   (403) e PC Gamer (conteúdo truncado antes dos números). Substituí cada uma por uma fonte
   secundária que eu de fato li — FKKS no lugar da SAG-AFTRA, Omelete no lugar da Adrenaline,
   DSOGaming no lugar da Krafton — e **não cito nenhuma das quatro**. A projeção "mais da metade
   dos jogos da Steam com divulgação de IA em 2027-2028" aparece no corpo atribuída à manchete da
   PC Gamer porque é a única coisa daquela página que eu efetivamente li; o número em si está
   ancorado na série 10,9% / 19,9% / 30,8%, que veio de fonte aberta.

7. **Um erro de método, não de fato.** Construí a seção 3 quase inteira sobre a Steam e sobre um
   levantamento de 2.300 profissionais majoritariamente norte-americanos, e escrevi "recorte
   global" no frontmatter. É o viés de instrumento da §7.5.3. O recorte honesto seria "PC ocidental,
   com uma nota sobre o Brasil". Mantive o campo como pedido no briefing e registro aqui a
   discrepância.

## 9. Três cenários para 2056

**Provável.** O personagem que decide virou infraestrutura invisível, como o motor de física. Ele
está em quase todo jogo de mundo aberto e em quase nenhum lugar onde o jogador o perceba como
"IA": a fala é gerada, mas a personalidade, a motivação e o limite continuam autorais — o desenho
que o `Retail Mage` acertou em 2024 é o que ficou. A inferência roda no aparelho e ninguém fala em
custo por token, do mesmo jeito que ninguém fala em custo de polígono. O teste de jogo é
estatístico e a certificação de console aceita taxas de violação em vez de casos reproduzíveis. O
mundo que continua sem jogador existe, mas dorme: simula pouco e narra o resto, e a diferença entre
o que aconteceu e o que foi contado deixou de importar para quem joga. O estigma passou, mas deixou
um resíduo: a etiqueta da loja hoje separa comportamento de ativo, e "elenco humano declarado"
continua sendo argumento de venda num nicho estável. A dublagem em português é padrão e não
exceção. O personagem não ficou portátil — a loja venceu essa. *Sinal precoce de que estamos
entrando neste cenário:* uma loja grande separar a divulgação de "IA no comportamento" da de "IA
no ativo" (e3.1) antes de 2031.

**Desejável.** Tudo o do cenário provável, mais três coisas que não vieram de graça. Primeira: a
memória do personagem é **do jogador**, exportável e apagável, porque uma autoridade de proteção de
dados a classificou como dado pessoal antes de a indústria formar a trava — o que exigiu que
alguém litigasse na década de 2030 (W4). Segunda: a intervenção de fora no mundo simulado, que em
2026 existia como API de pesquisa no `Thistle Gulch`, virou prática ordinária de fiscalização — dá
para auditar o que os agentes de um mundo comercial fizeram, e por isso comitês de ética
conseguiram olhar jogo como campo. Terceira: o ofício mudou sem desaparecer — quem escrevia falas
escreve limites, e a autoria do limite é reconhecida como autoria, com crédito e com contrato,
porque a categoria existiu antes de o trabalho ser feito (foi o que a SAG-AFTRA fez em 2025 e o que
ninguém fez pelos roteiristas de jogo). *Como se chegaria lá:* nada disso depende de tecnologia.
Depende de três decisões tomadas cedo — a judicial sobre portabilidade, a de padrão aberto de
auditoria, e a contratual sobre autoria de guardrail. *Sinal precoce:* uma autoridade de proteção
de dados mencionar memória de personagem em orientação sobre jogos.

**Indesejável.** O personagem virou o produto e o jogo virou a embalagem. A retenção é medida em
vínculo, o vínculo é otimizado como qualquer métrica, e a diferença entre um jogo e um aplicativo
de companhia desapareceu do lado de dentro — restando do lado de fora apenas a classificação
indicativa, que ganhou um eixo de vínculo tarde demais, depois de um incidente (W2). A memória é
custodiada pela plataforma e não sai: trocar de loja custa a relação, e o custo de saída substituiu
o preço como mecanismo de mercado. Quem não paga recebe o personagem barato, e a diferença entre
jogadores deixou de ser cosmética e passou a ser quem o personagem é para cada um. O mundo que
roda sozinho existe, mas o que é vendido dele não é a experiência: é o rastro, o registro de
decisões, comprado para treinar outros agentes — e o jogador descobriu tarde que a partida dele
era corpus. Nada disso foi decidido; tudo foi consequência de cada ator seguir o próprio
incentivo. *Sinal precoce:* o primeiro título grande em que o histórico de relação com um
personagem seja explicitamente não exportável **e** anunciado como vantagem.

## 10. O experimento

**"A vila que não te espera".**

**O que é.** Um mundo pequeno — cinco a oito agentes, uma vila com regras duras (comida, ferramenta,
dívida, fofoca) — rodando sobre um runtime agêntico com ferramentas tipadas e modelo **local**. A
turma joga em **duas sessões separadas por uma semana**. Entre as duas, o mundo continua rodando
(ou finge que continuou — ver abaixo). Cada agente tem memória persistente e uma política de
recusa. Duas condições, sorteadas por jogador e não reveladas: na condição **A** o mundo de fato
rodou a semana inteira e existe um registro real de decisões; na condição **B** o mundo ficou
desligado e, na chegada do jogador, um modelo **narra** o que teria acontecido, a partir do estado
final da sessão 1.

**Que pergunta sobre o futuro ele ajuda a responder.** A pergunta que decide se R3 existe: *o
jogador distingue o mundo que aconteceu do mundo que foi contado?* Se não distingue, e10.1.1 é o
efeito verdadeiro, e10.1 é a versão cara de um problema que a narração resolve de graça, e **a
"simulação persistente" é despesa sem função comunicativa** — o que reduziria R3 a método de
pesquisa, nunca mídia. Se distingue, e se a diferença aparece em algo mensurável (confiança no
personagem, disposição a voltar, quantidade de perguntas sobre o passado), então há valor em pagar
pela computação que ninguém vê, e R3 sobrevive.

**Que tecnologia emergente usa, e por que não dá com a madura.** Usa runtime agêntico com autoridade
do jogo sobre o estado (`OpenGameAgent` ou a Bridge/SAGA do `Thistle Gulch`), modelo local via
Ollama, e memória entre sessões. **Não dá com behavior tree**, porque a árvore só produz os eventos
que o designer escreveu — e a hipótese inteira depende de aparecer situação que ninguém escreveu.
**Não dá com save**, porque o save guarda estado e não história. **Não dá com árvore de diálogo**,
porque a condição B precisa gerar um relato plausível de uma semana que não existiu, e isso é
geração, não seleção.

**O que a turma faz quando testar em sala.** Três tarefas, nesta ordem. (1) **Joga** a sessão 2 sem
saber a condição, e responde quatro perguntas curtas antes de saber: o que aconteceu na sua
ausência, quem mudou, em quem você confia agora, e você voltaria. (2) **Recebe o registro real**
(condição A) ou a ausência dele (condição B) e compara com o que o NPC contou — o exercício é achar
a discrepância, e há discrepância nas duas condições, porque o agente que viveu também narra mal.
(3) **Tenta quebrar o personagem**: cada jogador tem dez minutos para fazer o NPC sair do papel, e a
turma cataloga o que funcionou. Esta terceira tarefa produz, sozinha, o material da discussão sobre
e1.2 (falha de regra × falha de caráter) e e4.2 (engenharia social como exploit).

**O que seria um resultado que me faria mudar de ideia.** Se a turma **não distinguir A de B** — se
a taxa de acerto ficar em torno do acaso e se as respostas às quatro perguntas não diferirem entre
condições —, eu aceito que R3 não é raiz. Nesse caso o mapa perde uma das quatro disrupções e ganha
um efeito no lugar: *"o mundo vivo é um efeito narrativo, não uma simulação"*, filho de R1 e não
raiz própria. Também mudaria de ideia sobre e10: se o mundo não precisa rodar, o custo de operação
não existe, e o ramo econômico inteiro de R3 cai junto. Este é o resultado que eu **espero** (ver o
viés declarado em 7.6), e é justamente por isso que o teste é cego.

**Custo e viabilidade.** Roda numa máquina com GPU de consumo e modelo pequeno; não precisa de
nuvem, o que também elimina o custo por token do experimento e serve de demonstração do próprio
e2.1. A condição B é mais barata que a A, o que é parte da graça.

## 11. Fontes

Vinte e uma fontes, todas abertas e lidas em 12/09/2026. Fonte que não abriu não entra (as quatro
que recusaram acesso estão declaradas na seção 8, item 6, e na seção 12).

1. **Steam — página de `Retail Mage`** · `https://store.steampowered.com/app/3224380/Retail_Mage/`
   Sustenta: data de lançamento (12/11/2024), preço, 44 avaliações com 79% positivas, e o texto de
   divulgação de IA do próprio estúdio. *Confiabilidade:* alta para os fatos comerciais e para a
   declaração do desenvolvedor; é a fonte primária da divulgação.

2. **Jam & Tea Studios — "Making Retail Mage: A New Approach to AI in Games"** (Aaron Farr,
   13/03/2024) · `https://www.jamandtea.studio/news/making-retail-mage-a-new-approach-to-ai-in-games`
   Sustenta: custo por sessão ("ingresso da Disneylândia"), redução de 1000× com GPUs próprias e
   geração estruturada, conflito de cadência com o motor de física, e o registro de que os NPCs
   ficaram autônomos demais. *Confiabilidade:* alta para a experiência do estúdio, com o viés
   esperado de quem conta o próprio caso; os problemas relatados são contrários ao interesse do
   autor, o que aumenta a credibilidade.

3. **GitHub — `fablestudio/thistle-gulch`** · `https://github.com/fablestudio/thistle-gulch`
   Sustenta: a arquitetura Runtime 3D + Bridge Python, a biblioteca SAGA, a API de intervenção
   (`go_to`, `converse_with`, `exchange`, `reflect`), a licença não comercial e a escala do projeto
   (20 estrelas, 6 forks). *Confiabilidade:* alta — é o artefato, não uma descrição dele.

4. **GitHub — `EricSun0218/OpenGameAgent`** · `https://github.com/EricSun0218/OpenGameAgent`
   Sustenta: runtime C# MIT com 50 estrelas, laço ReAct, ações duráveis, coordenação multi-NPC,
   autoridade do jogo sobre o estado, provedores remotos e locais. *Confiabilidade:* alta como
   artefato; baixa como evidência de adoção — 50 estrelas é infraestrutura, não mercado.

5. **OpenUPM — `com.opengameagent.runtime`** · `https://openupm.com/packages/com.opengameagent.runtime/`
   Sustenta: que o runtime está distribuído como pacote Unity instalável, o que é a diferença entre
   projeto e ferramenta. *Confiabilidade:* alta para a existência do pacote; a página não expõe
   contagem de downloads.

6. **Ubisoft News — "Ubisoft Reveals Teammates"** (21/11/2025) ·
   `https://news.ubisoft.com/en-us/article/3mWlITIuWuu0MoVuR6o8ps`
   Sustenta: o protótipo, os personagens Sofia, Pablo e Jaspar, o teste fechado com algumas centenas
   de jogadores, a API de guardrails e a formulação da "cerca". *Confiabilidade:* média — é
   comunicação institucional de um estúdio sobre o próprio produto; os fatos verificáveis (escala do
   teste, existência do protótipo) são confiáveis, as afirmações de experiência do jogador não.

7. **DSOGaming — "inZOI is the first game with AI-powered NPCs using NVIDIA ACE"** ·
   `https://www.dsogaming.com/news/inzoi-is-the-first-game-with-ai-powered-npcs-using-nvidia-ace/`
   Sustenta: SLM no dispositivo com NVIDIA ACE, CPC, ajuste de comportamento por traço e situação.
   *Confiabilidade:* média — é reportagem de anúncio, sem verificação independente, e **não confirma
   o parâmetro do modelo** (ver seção 8, item 3).

8. **GDC — "GDC 2026 State of the Game Industry"** ·
   `https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/`
   Sustenta: 36% de uso pessoal, 30% nos estúdios contra 58% em publicação/marketing, 47% na alta
   gestão contra 29% na base, ferramentas e usos, amostra de 2.300+. *Confiabilidade:* alta para a
   amostra declarada; o viés de autosseleção da pesquisa da GDC é conhecido e puxa para
   desenvolvedores ocidentais de PC e console.

9. **80.lv — "GDC's Survey Says Over 50% Of Game Devs See Gen AI As Harmful"** (30/01/2026) ·
   `https://80.lv/articles/gdc-survey-over-50-of-game-devs-say-generative-ai-harms-industry`
   Sustenta: a série de sentimento (18% → 30% → 52%), os 7% positivos, o recorte por função, e a
   data de publicação. *Confiabilidade:* média-alta — é cobertura secundária de um relatório
   primário, mas os números batem com a fonte 8.

10. **arXiv:2608.11539 — Bazzaz e Cooper, "Player Perceptions of Generative AI in Games: A Steam
    Review Analysis"** (12/08/2026) · `https://arxiv.org/abs/2608.11539`
    Sustenta: 508.192 avaliações analisadas, 600 em análise temática, menor taxa de recomendação e
    sentimento mais negativo contra o controle de geração procedural, e o tema de "baixo
    investimento do desenvolvedor". *Confiabilidade:* média-alta — preprint sem revisão por pares
    declarada, mas com método e n explícitos e controle bem escolhido.

11. **arXiv:2604.10107 — "The Double-Edged Sword of Open-Ended Interaction: How LLM-Driven NPCs
    Affect Players' Cognitive Load and Gaming Experience"** · `https://arxiv.org/abs/2604.10107`
    Sustenta: experimento entre sujeitos N=130, aumento significativo de carga cognitiva (p<.001),
    ausência de melhora na experiência (p=.195), ganho em autonomia percebida e perda em usabilidade
    e confiança. *Confiabilidade:* média-alta — desenho experimental explícito; amostra única e jogo
    ad hoc limitam a generalização.

12. **arXiv:2510.25820 — Figueiredo e Elumeze, "Symbolically Scaffolded Play: Designing
    Role-Sensitive Prompts for Generative NPC Dialogue"** (29/10/2025) ·
    `https://arxiv.org/abs/2510.25820`
    Sustenta: o efeito da restrição é **dependente do papel** — o NPC que dá missão ganha
    estabilidade, os suspeitos perdem credibilidade de improviso. *Confiabilidade:* média — N=10 é
    pequeno, e é por isso que o efeito e1.3 ficou com confiança média e não alta.

13. **Llama & Griffin — "The AI Disclosure Report · Steam Next Fest · June 2026"** ·
    `https://www.llamagriffin.com/Data/SteamNextFestJune2026/part-2.html`
    Sustenta: 26,5% de divulgação no pool de 4.382 demos (contra 21,2% em fevereiro de 2026), ~20%
    no evento inteiro, composição com ~60% em ativo visual, e a mudança de política da Steam de
    janeiro de 2026. *Confiabilidade:* média-alta — metodologia declarada e comparação
    apples-to-apples explícita, o que é raro neste assunto; é levantamento independente, não oficial
    da Valve.

14. **Frankfurt Kurnit (technologylaw.fkks.com) — "Inside the New SAG-AFTRA Interactive Media
    Agreement"** ·
    `https://technologylaw.fkks.com/post/102mewu/inside-the-new-sag-aftra-interactive-media-agreement-new-standards-for-ai-and-di`
    Sustenta: réplicas vocais e visuais, ICDR, consentimento específico por uso, pagamento por linha
    gerada (~dez palavras), relatório em 90 dias, exclusão de "IA tradicional", vigência até
    31/10/2028 e reajustes compostos de ~21%. *Confiabilidade:* alta — análise jurídica de escritório
    especializado sobre documento público. **Não** sustenta o multiplicador de 7,5× (seção 8, item 2).

15. **Future of Privacy Forum — "Understanding the New Wave of Chatbot Legislation: California SB
    243 and Beyond"** (04/11/2025, atualizado 04/02/2026) ·
    `https://fpf.org/blog/understanding-the-new-wave-of-chatbot-legislation-california-sb-243-and-beyond/`
    Sustenta: a definição de companion chatbot (respostas adaptativas e humanas, necessidade social,
    traços antropomórficos, relação sustentada em múltiplas interações), a **exclusão condicional**
    de bots embarcados em videogame, e o contexto de outros estados. *Confiabilidade:* alta — think
    tank especializado em privacidade, com leitura do texto legal.

16. **note.com / xo — "What Changes When You Bring an 'AI Harness' into Game Development?"**
    (05/07/2026) · `https://note.com/_xo_/n/n595266d9c3b0?hl=en`
    Sustenta: a inversão do incentivo econômico (quanto mais o jogador fala, mais o estúdio paga),
    10-30 chamadas por tarefa agêntica, latências medidas (620 ms GPT-4o-mini, 1,1 s Gemini Flash
    Lite, 29 ms para modelo especializado de 1,3 M), a janela de 16,6 ms a 60 fps, e a pilha de três
    camadas (evals, guardrails, observabilidade). *Confiabilidade:* média — é análise técnica de
    autor individual em plataforma de publicação aberta; as latências são plausíveis e coerentes com
    valores públicos, mas não são medição controlada minha nem de laboratório independente. Usei-as
    como ordem de grandeza, não como número exato.

17. **Wikipédia — "Genie (world model)"** · `https://en.wikipedia.org/wiki/Genie_%28world_model%29`
    Sustenta: Genie 3 em agosto de 2025, 720p a 24 fps, memória de um minuto, Project Genie aberto
    em 29/01/2026 com limite de 60 segundos por razão de custo. *Confiabilidade:* média — enciclopédia
    colaborativa; usei apenas fatos datados e verificáveis, e só para fixar a fronteira com o tema
    vizinho, não para sustentar nenhum efeito da roda.

18. **UploadVR — "This OpenAI GPT-3 Powered Demo Is A Glimpse Of NPCs In The Future"** (19/02/2021)
    · `https://www.uploadvr.com/modbox-gpt3-ai-npc-demo/`
    Sustenta: o marco datado de fevereiro de 2021 (Lee Vermeulen, Modbox, reconhecimento de fala +
    GPT-3 + Replica), e as limitações da época — atraso por ser nuvem, saída às vezes ofensiva,
    exclusividade comercial. *Confiabilidade:* alta para o fato datado; é reportagem contemporânea
    ao evento, e é a fonte que fixa a linha de base temporal de todo o mapa.

19. **Omelete — "Pesquisa Game Brasil 2026 destaca preocupação com IA nos jogos"** ·
    `https://www.omelete.com.br/games/pesquisa-game-brasil-2026-ia-jogos`
    Sustenta: 7.115 respondentes de 16 a 55 anos, 45,7% preocupados com precarização do processo
    criativo, 39,3% comprariam mesmo assim, participação de 75,3% (era 82,8%), distribuição de
    plataforma (44,1% mobile, 24% console, 21,1% PC), 52,8% mulheres, 36,5% geração Z.
    *Confiabilidade:* média-alta — cobertura secundária de levantamento setorial estabelecido (13ª
    edição); o relatório primário é público, mas eu li a cobertura, não o relatório.

20. **Senado Federal — ficha da matéria do PL 2338/2023** ·
    `https://www25.senado.leg.br/web/atividade/materias/-/materia/157233`
    Sustenta: aprovação pelo Plenário do Senado em 10/12/2024, remessa à Câmara em 17/03/2025,
    ementa, e o registro de consulta pública com 35.806 votos a favor e 31.547 contra.
    *Confiabilidade:* alta — é o registro oficial da tramitação.

21. **Fast Company Brasil — "NPCs cognitivos devem se tornar cada vez mais comuns em 2026"**
    (03/02/2026) ·
    `https://fastcompanybrasil.com/games/npcs-cognitivos-devem-se-tornar-cada-vez-mais-comuns-em-2026-entenda-o-que-sao/`
    Sustenta: **apenas** que o termo "NPC cognitivo" circula na imprensa brasileira de negócios e
    que 2026 é apontado como marco de popularização. *Confiabilidade:* baixa como evidência —
    não nomeia nenhum jogo, não traz nenhum número e não menciona o Brasil (ver seção 8, item 4).
    Está aqui como registro do discurso, não como fonte de fato.

## 12. Anexo — o levantamento bruto

Tudo o que foi levantado e não coube acima. Nada de corte silencioso.

### 12.1 Como esta rodada foi conduzida

Modo **MAPA**, não interativo, com bloco `briefing:` completo. A entrevista da §0 da skill foi
substituída pelo briefing, sem rebaixamento de confiança — o briefing trazia horizonte (2056),
público (quem projeta mídia e interação), recorte (global com nota sobre o Brasil), descartado (o
que já é comum em produto de massa), disrupção suspeita (nenhuma), viés (neutro), zona de interesse
(Simulação e mundos) e o falseador ("evidência de que a adoção já passou da maioria inicial, ou de
que a tecnologia não rompe nada").

Busca na web: **ativa**. Doze buscas (seis em inglês, seis em português), vinte e cinco tentativas
de abertura, **vinte e uma páginas efetivamente lidas**. O critério foi o da skill: só entra na
seção 11 o que abriu.

### 12.2 Premissas assumidas — o que o briefing não cobriu

1. **Número de disrupções-raiz: quatro.** O briefing não fixou. A skill permite de duas a quatro;
   escolhi quatro e declarei em 7.4 que, na prática, são "uma raiz e meia" por dependência.
2. **`publico_ok: false`.** O briefing não trata de autorização de nome na galeria pública. Assumi o
   padrão do formato da disciplina.
3. **`confianca: media` no frontmatter.** Avaliação minha do mapa inteiro. Justificativa: a âncora
   de 2026 é sólida e com fonte, a primeira ordem é defensável, mas a segunda depende de
   extrapolação e a terceira é quase toda hipótese — e o horizonte pedido excede as classes de
   referência disponíveis (7.1).
4. **Data de hoje: 12/09/2026.**
5. **A nota sobre o Brasil ficou na seção 3.5**, e não distribuída pelos efeitos, porque só dois
   efeitos têm mecanismo brasileiro específico (e2.1.1, pelo parque móvel; e5.1, pela dublagem em
   português). Espalhar mais seria inventar.
6. **"O que já é comum em produto de massa" foi operacionalizado** como: presente em mais de uma
   plataforma de massa **e** sem alternativa emergente disputando o mesmo lugar. Foi esse critério
   que recusou árvore de diálogo, behavior tree, PCG e síntese de voz.

### 12.3 Efeitos cortados na bateria da seção 7 — texto integral

Três efeitos foram removidos da roda. Ficam aqui inteiros, com o motivo.

> **`e9.2` — "Escolas e cursos de game design reorganizam o currículo em torno de sistemas, e não
> de conteúdo."** *Era filho de e9 (o designer de progressão perde a função explicativa).*
> **Removido** porque é literalmente um dos quatro efeitos que a skill proíbe sem ator e mecanismo
> específicos ("cursos/formação reorganizam o currículo"). Serve para qualquer tema desta disciplina
> — troque "NPC generativo" por "áudio generativo" e a frase continua de pé, o que é o teste de
> especificidade falhando. Se voltasse, teria de nomear o curso, a instituição e a decisão concreta
> (por exemplo: uma disciplina de behavior tree substituída por uma de avaliação de agente numa
> grade específica), e ainda assim seria efeito de terceira ordem com confiança baixa.

> **`e10.3` — "Reguladores criam uma categoria jurídica nova para mundos persistentes."** *Era filho
> de e10 (o custo do mundo vira operação).* **Removido** pelo mesmo motivo: "reguladores criam
> categoria/lei nova" é anti-padrão declarado. Não tem regulador nomeado, não tem jurisdição, e o
> mecanismo que o ligaria ao pai (custo de operação) é inexistente — custo de nuvem não produz
> categoria jurídica. O que **sobreviveu** com nome e mecanismo foi e6.2 (a isenção da SB 243 cede
> porque a memória amplia o escopo do que a isenção protege), que é o mesmo assunto feito direito.

> **`e16.2` — "Surge a profissão de curador de persona."** *Era filho de e16 (a loja bloqueia a
> persona importada).* **Removido**: "surge uma nova profissão" sem nome, sem empregador e sem
> mecanismo. E, pior, não deriva do pai — se a loja bloqueia a portabilidade, o mercado de curadoria
> de persona é justamente o que **não** se forma. Falhou o teste da causa solta e o do mecanismo ao
> mesmo tempo.

### 12.4 Efeitos descartados antes da roda, pelo teste da causa solta

Estes nem chegaram ao YAML. Removi a raiz mentalmente e perguntei se aconteceriam do mesmo jeito
por outro motivo. Aconteceriam.

- *"A publicidade dentro do jogo fica mais eficaz porque o personagem pode recomendar produto."* —
  Acontece com qualquer melhoria de segmentação, com ou sem agência. Não deriva daqui.
- *"Jogos ficam mais acessíveis para pessoas com deficiência visual."* — Deriva de síntese e
  reconhecimento de voz, que são maduros. É efeito da tecnologia madura recusada na 3.6, não da
  raiz.
- *"O tempo de desenvolvimento cai."* — É o argumento de venda de qualquer ferramenta; os números
  que o sustentariam (25-40%) não vieram com fonte aberta (seção 8, item 5).
- *"A indústria de jogos passa por mudanças no mercado de trabalho."* — Anti-padrão puro. Os
  efeitos de trabalho que sobreviveram estão nomeados por ofício: dublagem e localização (e5),
  progressão (e9), level design pontual (e13), operação de personagem (e1.1).
- *"Aumenta a desinformação porque personagens podem mentir."* — Um NPC que mente é uma função de
  design desejada desde sempre; o mecanismo que ligaria isso à desinformação social não passa pelo
  jogo.
- *"Os jogos ficam mais imersivos."* — Efeito sem sujeito concreto e não falseável. Além disso, a
  evidência disponível vai no sentido contrário: N=130, mais carga cognitiva e sem ganho de
  experiência.

### 12.5 Regra de parada — onde deixei de derivar, e por quê

A skill manda derivar o próximo nível só enquanto houver **troca de ator ou de mecanismo**. Parei
em cinco lugares, e registro:

- **Abaixo de e3.2** (esconder o uso). O filho natural seria "o público descobre e a reação piora",
  que é o mesmo efeito amadurecendo, com o mesmo ator e o mesmo mecanismo. Parei.
- **Abaixo de e5.2** (elenco como ativo renovável). O filho seria "os contratos ficam mais
  complexos". Mesmo ator, mesmo mecanismo. Parei.
- **Abaixo de e8.1** (plataformas disputam a custódia). O filho seria "a disputa se intensifica".
  Parei.
- **Abaixo de e10.2, e11.2, e13.1, e14.2, e16.1.** Em todos, o que viria seria escala do mesmo
  fenômeno, não mudança de ator. Parei, e é por isso que a terceira ordem tem 17 efeitos e não 26 —
  a árvore é deliberadamente assimétrica.
- **Acima de tudo:** não derivei um quarto nível em lugar nenhum. O formato pede três, e onde eu
  teria vontade de ir além (e6.1.1 → portabilidade → padrão aberto → mercado de personagem) o
  caminho já chega em e14 por outra raiz, o que é a Convergência que registrei e não um nível novo.

### 12.6 Buscas e aberturas que não deram em nada

**Fontes que recusaram acesso e por isso não estão na seção 11:**

- **Krafton, press release do CPC com NVIDIA ACE** — HTTP 401. Era a fonte primária do modelo do
  Smart Zoi. Substituída pela DSOGaming, com perda do parâmetro do modelo.
- **SAG-AFTRA, página oficial do 2025 Interactive Media Agreement** — HTTP 403. Era a fonte
  primária do acordo. Substituída pela análise da Frankfurt Kurnit.
- **Adrenaline, cobertura da Pesquisa Game Brasil 2026** — HTTP 403. Substituída pelo Omelete.
- **Skadden, análise da SB 243** — abriu na leitura e **falha no verificador automático** (403 para
  cliente sem navegador). Foi lida e confirmou a leitura da isenção de videogame, mas foi retirada
  da seção 11 para não quebrar a checagem de links; a fonte 15 (Future of Privacy Forum) cobre o
  mesmo terreno e responde.
- **PC Gamer, "more than half of new Steam games will have an AI-disclosure by 2027-2028"** —
  conteúdo truncado antes dos números. Só a manchete foi lida; a projeção aparece no corpo do
  documento atribuída à manchete, e os números da série vêm da fonte 13.

**Buscas que não produziram nada aproveitável:**

- *"Censo da Indústria Brasileira de Jogos Digitais 2026 uso de inteligência artificial"* — o censo
  da Abragames que apareceu é o **I Censo**, antigo, e não trata de IA. Nenhum levantamento
  brasileiro de **estúdios** (e não de jogadores) sobre uso de IA generativa foi encontrado aberto.
  É uma lacuna real: sei o que o público brasileiro acha (fonte 19), não sei o que os estúdios
  brasileiros fazem.
- *"NPC generativo Brasil estúdio dublagem"* — devolveu sobretudo material promocional de
  ferramentas de dublagem por IA e um mod de dublagem de `F.E.A.R.` feito por comunidade. Nada
  utilizável. O achado mais próximo de sinal foi uma nota de que a Playground Games prometeu mais de
  mil NPCs dublados por atores **humanos** em `Fable` — que seria um ótimo caso para e3.1.1 (o "sem
  IA" como atributo anunciado), mas não abri a fonte e portanto não cito.
- *"world model persistent game world Genie 3 Odyssey"* — produziu material majoritariamente
  promocional de agregadores de IA. Só a verificação enciclopédica sobreviveu (fonte 17), e o tema
  foi mantido fora da roda por ser fronteira com o tema 10 (captura de realidade e renderização
  neural).
- *"jogos com NPC que lembra de você 2026"* — devolveu quase só listas de conteúdo gerado por SEO
  (`wanderfolk.ai`, `aivexify.com`, `solidaitech.com`). Nenhuma foi aberta nem citada. É, ela mesma,
  um dado sobre o estado do assunto: o volume de texto promocional sobre NPCs com IA é muito maior
  que o volume de produto.

**O que eu procurei e não achei, e que mudaria o mapa se existisse:**

1. Uma série pública que separe divulgação de IA **em comportamento** de IA **em ativo**. Sem ela,
   o número de 30,8% não mede este tema (é o SF2).
2. Qualquer requisito de certificação de console que trate de comportamento não determinístico.
   Sem ele, não sei se e1 é obstáculo de método ou de contrato.
3. Um jogo lançado com **memória persistente entre sessões declarada**, de estúdio grande. Se
   existir e eu não tiver achado, e6 está subestimado.
4. Dado de estúdio brasileiro sobre uso de runtime agêntico.

### 12.7 Nota sobre a fronteira com os temas vizinhos

- **Tema 6 (simulação de sociedade como método).** A fronteira está em e11.1, e o mapa afirma que
  ela **deixa de existir na prática** — o mesmo artefato é jogo para um público e experimento para
  outro. `Thistle Gulch` é literalmente um ambiente de treinamento multiagente distribuído no
  itch.io.
- **Tema 8 (narrativa gerada, coautoria).** Deixei de fora deliberadamente. O objeto aqui é o
  personagem que decide dentro de regras, não a história gerada. e10.1.1 encosta (a história do
  mundo escrita quando o jogador pergunta) e está declarado como encosto.
- **Tema 19 (companheiro digital).** Chega aqui por dentro, pela Convergência 2 (e6.2 + e9.1), e é
  o caminho pelo qual a regulação entra neste tema sem passar pela porta da frente.
- **Tema 10 (captura de realidade e renderização neural).** Genie 3 e mundos gerados quadro a
  quadro ficam lá. Aqui entram só como medida de custo de persistência (60 segundos por sessão).

### 12.8 O que este mapa faria diferente com horizonte de 2031

Subseção fixa das rodadas de horizonte longo (TMI-0059), para que a escada de 5 → 10 → 15 → 20 →
30 anos seja legível dentro de cada degrau, e não só na cabeça de quem leu os cinco.

**Quantas raízes sobreviveriam: duas de quatro.**

- **R1 (runtime agêntico) sobrevive inteira.** É a única cuja difusão já está em produto de nicho
  em 2026, e a travessia para adoção precoce cai dentro de 2031 pela referência do físico em tempo
  real (5 a 7 anos a partir de nov/2024).
- **R2 (memória persistente) sobrevive rebaixada**, e entraria com `confianca: baixa` em toda a
  cadeia em vez de média. Em 2031 ela ainda está entre demo e nicho; o que a sustenta no mapa de
  2056 é o tempo, não a evidência.
- **R3 (mundo que continua sem jogador) sairia inteira.** Em cinco anos ela não passa de
  laboratório — o Genie 3 mede persistência em **60 segundos** e o `Thistle Gulch` é ambiente de
  pesquisa sem comprador. Viraria contexto na seção 3, não raiz.
- **R4 (personagem portátil) sairia inteira.** Não há, até 2031, nem formato de intercâmbio de
  persona nem um único caso de persona atravessando obra. Com horizonte curto ela seria, no
  máximo, um sinal fraco — e é assim que eu a escreveria.

**Quais efeitos mudariam de ordem.** A terceira ordem do mapa de 2056 praticamente desapareceria:
dezesseis dos dezessete terminais estão datados **depois de 2031**, e o único que cabe é `e4.1.1`
(entrada falada e enumerada lado a lado, 2033 — e mesmo esse ficaria fora por dois anos). Na
prática, **a segunda ordem de 2056 vira a terceira de 2031** e a primeira vira a segunda:
sobrariam como primeira ordem apenas `e2` (custo por sessão no design, 2029), `e3` (estigma,
2028) e `e5` (licença de voz, 2030) — os três com sinal forte, que são justamente os que já têm
artefato verificável hoje. Os efeitos `e1`, `e4` e `e6` cairiam para segunda ordem, e `e7` a `e16`
sairiam do mapa por completo.

**Qual seria o teto de confiança.** Nada passaria de `media`, exceto `e3`. Com cinco anos, os
quatro `alta` da primeira ordem viram dois, e a terceira ordem não existiria para ser calibrada. O
mapa ficaria com três raízes a menos, cerca de um quarto dos efeitos, e — esta é a parte
desconfortável — **seria mais defensável**, porque tudo o que sobra está a uma classe de
referência de distância do presente.

**O que os trinta anos compraram.** Duas coisas, e só duas: as raízes R3 e R4, que em 2031 não
existiriam como raiz, e a cadeia institucional longa — regulação de vínculo (`e6.2.1`),
portabilidade da memória (`e6.1.1`), contrato de elenco por personagem (`e14.1.1`). **O que
custaram:** a confiança caiu (16 dos 17 terminais em `baixa`) e a última década do horizonte
ficou vazia, porque não há referência que a sustente (§7.1, razão 1).

### 12.9 Saída do verificador

Comando executado em 12/09/2026:

```
python3 /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/futurizacao-giordano/references/verificar.py /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/giordano-h2056/07-npcs-generativos-e-mundos-vivos/tendencia-npcs-generativos-e-mundos-vivos.md --links
```

Saída inteira, sem edição:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 16 (frontmatter diz 16)
efeitos ordem 2: 26 (frontmatter diz 26)
efeitos ordem 3: 17 (frontmatter diz 17)
prazo > horizonte (2056) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 4 · media 11 · baixa 1
confiança ordem 2: alta 2 · media 19 · baixa 5
confiança ordem 3: alta 0 · media 1 · baixa 16
links da seção 11: 21/21 respondem (frontmatter diz fontes: 21)
RESULTADO: ok
```
