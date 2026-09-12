---
tema: NPCs generativos e mundos vivos
slug: npcs-generativos-e-mundos-vivos
autor_login: grec
zona_de_interesse: Simulação e mundos
data: 2026-09-12
horizonte: 2046
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 17
efeitos_ordem_2: 33
efeitos_ordem_3: 22
tecnologias_citadas: [NVIDIA ACE, Mistral-NeMo-Minitron-2B, Mistral-NeMo-Minitron-4B, Mistral-NeMo-Minitron-8B, NemoVision-4B-128k-Instruct, NemoAudio-4B-Instruct, Parakeet-CTC-XXL-1.1B-Multilingual, E5-Large-Unsupervised, Audio2Face, Smart Zoi, inZOI, Retail Mage, Ubisoft Teammates, Jaspar, Gemini 2, Gemini 3, OpenGameAgent, SAGA, Thistle Gulch, OpenGame, GameCoder-27B, Convai, Inworld AI, Yarn Spinner, Ink, Ren'Py, Dialogic, RAG, Steam AI Content Disclosure]
fontes: 14
confianca: media
experimento: "Banco de provas de NPC — o mesmo personagem em três regimes (árvore escrita à mão, modelo que só fala, modelo com ferramentas sobre as regras do mundo), jogado às cegas pela turma"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

O personagem não jogável está deixando de ser conteúdo escrito e virando agente que percebe,
planeja e age dentro das regras do mundo — e isso rompe o contrato de design de que o espaço
de eventos possíveis é enumerado por quem fez o jogo. Em 2026 isso já não é hipótese: a NVIDIA
nomeia os modelos que cabem em 1,5 GB de VRAM e os jogos de lançamento; o `inZOI` embarca
personagens autônomos rodando no dispositivo e, no mesmo movimento, desliga a IA quando o
jogador acelera o tempo; a Ubisoft mantém o `Teammates` em teste fechado com algumas centenas
de jogadores, rodando Gemini nos servidores do Google; e o `Retail Mage` está à venda desde
2024 com 44 avaliações. O mapa identifica quatro rupturas — a agência do personagem dentro das
regras, a descida do modelo para o dispositivo, a persistência do personagem e do mundo entre
sessões, e a conversão do jogador em insumo de um modelo — e deriva delas 17 efeitos de
primeira ordem, 33 de segunda e 22 de terceira, até 2046. Os achados que menos se esperam não
são de aceleração: a agência do NPC compete com a agência do jogador e estúdios já limitam de
propósito a competência do agente; o wiki, o guia e a crítica perdem objeto comum quando dois
jogadores não jogam a mesma coisa; e a rejeição é medida, não suposta — 52% dos profissionais
de jogos consideram a IA generativa nociva, e jogos que declaram IA seguem sub-representados
entre os mais jogados. A contradição central do mapa é entre o mundo que vira serviço e o mundo
que vira arquivo, e ela ainda não foi decidida por ninguém.

## 2. O tema

Um NPC é, desde sempre, conteúdo: alguém escreveu a fala, alguém desenhou a árvore de decisão,
alguém definiu a máquina de estados que faz o guarda andar de um poste ao outro. O que muda
quando o personagem recebe um modelo de linguagem, uma memória e um conjunto de ferramentas
que mexem no mundo é que ele deixa de ser conteúdo e passa a ser **processo**: o que ele vai
dizer e fazer não existe até a hora de rodar.

Isso encosta em mídia e interação num ponto preciso e pouco óbvio. Não é que o jogo fique mais
bonito, mais barato ou mais longo — é que o **contrato de autoria** se desfaz. O designer de
jogos trabalha há quarenta anos com uma garantia que nenhuma outra mídia interativa tem: ele
sabe, antes de vender, o conjunto de coisas que podem acontecer. É dessa garantia que dependem
o teste, a certificação de plataforma, a classificação indicativa, o guia, o wiki, o speedrun,
a crítica e o próprio conceito de bug. Quando o personagem improvisa dentro das regras, cada
um desses itens perde o chão ao mesmo tempo — e não por vontade de ninguém.

Por isso o tema merece mapa de futuro e não levantamento de estado da arte. Um levantamento
responderia "quais ferramentas existem para NPC generativo" — pergunta de catálogo, que
envelhece em seis meses. O mapa pergunta o que acontece com um ofício, uma economia e um
conjunto de instituições quando a coisa que eles pressupõem deixa de ser verdade.

**A fronteira com os vizinhos**, para não invadir tema alheio: a simulação social como *método
de investigação* é o tema 6; a *história* gerada — narrativa, coautoria, novela visual a partir
de uma frase — é o tema 8; o companheiro digital fora do jogo é o tema 19. Aqui o objeto é o
**personagem autônomo dentro de um mundo com regras**, e os efeitos que tocam os vizinhos estão
marcados como tais.

### O briefing desta rodada

Rodada não interativa. A entrevista do §0 da skill foi substituída pelo bloco de briefing
abaixo, entregue completo — portanto **não há rebaixamento de confiança por entrevista pulada**.
O que o briefing não cobriu está declarado logo depois, como premissa assumida.

```text
modo: MAPA
tema: NPCs generativos e mundos vivos
horizonte: 2046
publico: quem projeta mídia e interação
recorte_geografico: global, com uma nota sobre o Brasil
descartado: o que já é comum em produto de massa (a régua da disciplina)
raiz_suspeita: nenhuma — descobrir
vies: neutro
zona_de_interesse: Simulação e mundos
busca_web: sim
falseador declarado pelo autor: evidência de que a adoção já passou da maioria inicial
  (Rogers), ou de que a tecnologia não rompe nada — só melhora o que existe
ideias óbvias a excluir: as que servem para qualquer tema
```

**Premissas assumidas, porque o briefing não as cobriu:**

1. **"Mídia e interação" inclui o jogo comercial, o jogo independente e a simulação jogável, e
   exclui uso militar, treinamento corporativo e pesquisa em ciência social** (esta última é o
   tema 6). O recorte vale para todo o mapa.
2. **A nota sobre o Brasil é sobre parque de hardware, dublagem e regulação**, não sobre
   tamanho de mercado — porque é aí que o recorte muda o efeito, e não no faturamento.
3. **O horizonte de 2046 é longo o bastante para que a pergunta "quando" seja menos importante
   que a pergunta "se"**. Assumo isso explicitamente: com vinte anos de janela, quase nenhum
   efeito deste mapa é limitado pelo calendário, e sim pela hipótese de que a raiz se
   concretize. A seção 7 trata disso.
4. **Não assumo inverno de IA nem colapso de fornecimento de computação.** É premissa escondida
   virada explícita; está na lista do §6.5.

## 3. Onde isso está hoje

Âncora feita **com** acesso à web em 12/09/2026, com 14 fontes abertas e lidas (seção 11).
Nenhum rebaixamento por falta de busca. As buscas que não deram em nada, e as fontes que não
abriram, estão na seção 12.

### 3.1 O que já existe e funciona

**Personagens autônomos em jogo comercial, com modelo rodando no dispositivo.** A NVIDIA
expandiu o ACE de "NPC que conversa" para "personagem autônomo que percebe, planeja e age", e
nomeia a pilha: `Mistral-NeMo-Minitron-8B`, `-4B` e `-2B` para cognição — este último cabendo,
segundo a própria NVIDIA, em **1,5 GB de VRAM** —, `NemoVision-4B-128k-Instruct` para
compreensão espacial, `NemoAudio-4B-Instruct` para a paisagem sonora,
`Parakeet-CTC-XXL-1.1B-Multilingual` para transcrição e `E5-Large-Unsupervised` para memória
por recuperação. A empresa descreve os personagens tomando **8 a 13 microdecisões por segundo**.
Os jogos nomeados: `PUBG: BATTLEGROUNDS` (o companheiro "Ally"), `NARAKA: BLADEPOINT Mobile PC`,
`inZOI` (os "Smart Zoi"), `MIR5` (chefes que aprendem), `Dead Meat`, `AI People`, `ZooPunk`.
[F1]

**Um jogo à venda, com IA generativa em tempo de execução como mecânica.** O `Retail Mage`, da
Jam & Tea Studios, está na Steam desde **12 de novembro de 2024**, a R$ 16,99, com avaliações
"majoritariamente positivas" — **79% de 44 avaliações**, número pequeno o bastante para ser o
dado mais importante desta seção. A declaração de IA dos desenvolvedores é específica e vale
citar: usam "GenAI at run time in our game engine", e afirmam **não** ter usado geração para
arte, nem para as motivações, personalidades ou missões dos clientes. [F2]

**Ferramenta aberta, em escala de nicho.** Existe runtime de agente empacotado como dependência
de motor: `com.opengameagent.runtime` no OpenUPM se descreve como "a provider-neutral agent
runtime for AI-native Unity games", com contexto estruturado, ferramentas tipadas, *streaming*,
ações duráveis e coordenação multi-NPC [F11]. E existe o `SAGA` + `Thistle Gulch` da Fable, a
vila do velho oeste com mais de 15 personagens que agem sozinhos, com ponte em Python para
intervir de fora — **20 estrelas no GitHub** [F12]. Vinte. É o número que separa "existe" de
"pegou".

**Contrato sindical que já prevê o caso.** O Interactive Media Agreement de 2025 da SAG-AFTRA,
ratificado em julho de 2025 depois de uma greve de quase um ano, distingue réplica digital
**vocal** de **visual**, exige consentimento por escrito "clear and conspicuous" com descrição
razoavelmente específica do uso — **incluindo se haverá "Real-Time Generation"** — e obriga o
empregador a entregar relatório de uso **em até 90 dias** após o lançamento. Não permite
consentimento em branco no momento da contratação. [F14]

**Regra de vitrine já em vigor.** A Steam tem campo obrigatório de declaração de conteúdo de IA
desde o início de 2024. Na edição de **junho de 2026** do Next Fest, **1.163 de 4.382 demos
declararam IA — 26,5%**, contra 21,2% em fevereiro de 2026 pela mesma metodologia. E o dado que
interessa a este mapa: entre os **10 demos mais jogados, apenas 1** carregava declaração de IA
— uma diferença de mais de 2,5 vezes em relação à taxa da população. [F7]

### 3.2 O que existe e ainda não funciona

**O protótipo do maior estúdio ainda é protótipo.** O `Teammates` da Ubisoft foi revelado em
**21 de novembro de 2025**: um FPS onde o assistente `Jaspar` interpreta comando de voz e dois
companheiros (Sofia e Pablo) reagem a instruções faladas. Está em **teste fechado com algumas
centenas de jogadores** e **não foi lançado comercialmente**. [F4]

A crítica técnica mais útil que li sobre ele é de Tommy Thompson: a pilha principal rodava
**Gemini 2 nos servidores do Google**, e o lançamento do Gemini 3 acrescentou "um ou dois
segundos" de latência ao *playtest* alheio — quer dizer, a ficção de um jogo da Ubisoft ficou
sujeita à fila de um terceiro. Thompson também aponta o problema de interação que ninguém
resolve com modelo maior: falar com o NPC impõe "uma camada inteira de carga cognitiva",
diferente de apertar um botão, e o protótipo não oferece alternativa — o que é também um
problema de acessibilidade. Ele chama a demo de "a demo que eu esperava desde 2023" e diz, na
mesma peça, que não tem vontade de jogar de novo. [F5]

**O on-device esbarra no orçamento de GPU.** No `inZOI`, o Smart Zoi roda no dispositivo, e
por isso disputa a mesma placa que já está rasterizando o jogo: a KRAFTON recomenda desligar em
máquina que sofre, otimiza para placas de topo, e **desabilita Diário, Pensamentos Internos e
Agenda Inteligente a partir de 5× de velocidade**, porque o modelo precisa de tempo real para
produzir algo com sentido. Integração completa está anunciada para a segunda metade de 2026 em
diante. (Este parágrafo vem de material secundário — a página oficial da KRAFTON não abriu
legível; ver seção 8, item 4, e seção 12.)

**A economia de rodar isso em escala não está demonstrada.** A Jam & Tea afirma ter conseguido
uma redução de custo de **"1000x"** com gestão própria de inferência em GPUs na AWS, geração
estruturada e o projeto `sglang` [F3]. É um número impressionante e sem auditoria pública, e o
fato de precisarem dele diz o tamanho do problema original.

**O agente que constrói o jogo, não o que habita o jogo.** O `OpenGame` (arXiv 2604.18394,
submetido em **20 de abril de 2026**) é um framework agêntico para *gerar* jogos web
completos, com o modelo `GameCoder-27B` e o `OpenGame-Bench` sobre **150 prompts de jogo**,
medindo saúde de build, usabilidade visual e alinhamento de intenção [F13]. É vizinho e não é o
mesmo objeto — registro aqui porque a busca por "opengameagent" devolve os dois, e confundi-los
é fácil.

### 3.3 Quem constrói

| Ator | O que faz | Posição |
|---|---|---|
| **NVIDIA** | ACE: modelos pequenos, visão, áudio, memória, integração com motor | Dono da camada; distribui via driver e placa |
| **KRAFTON** | `inZOI`, primeiro jogo comercial grande com NPC autônomo on-device | Primeiro a levar o custo real |
| **Ubisoft** | NEO NPC (2024) → `Teammates` (2025, teste fechado) | Pesquisa aplicada, sem produto |
| **Jam & Tea Studios** | `Retail Mage`, IA generativa em runtime como mecânica | Prova de que é produto, em escala pequena |
| **Fable** | `SAGA` (aberto) e `Thistle Gulch` (vila multiagente) | Demonstração e pesquisa |
| **Comunidade aberta** | `OpenGameAgent` no OpenUPM; runtimes neutros em Unity | Infraestrutura sem dono, ainda sem massa |
| **Convai / Inworld AI** | NPC como serviço; a Inworld migrou para infraestrutura B2B | Camada intermediária sob pressão dos motores |
| **Valve** | Campo de declaração de IA; define o que é visível na vitrine | Regulador de fato, sem ser regulador |
| **SAG-AFTRA** | Cláusula de geração em tempo real no IMA 2025 | Já precificou a voz em runtime |

### 3.4 Que número descreve a adoção hoje

- **26,5%** dos demos do Steam Next Fest de junho de 2026 declararam IA (1.163 de 4.382), contra
  21,2% em fevereiro de 2026 pela mesma metodologia. **Ressalva importante e declarada pela
  própria fonte:** essa taxa mede *qualquer* uso de IA declarado, não geração em tempo de
  execução — que é o objeto deste mapa e continua sendo nicho. [F7]
- **1 em 10** dos demos mais jogados do mesmo evento carregava declaração de IA. [F7]
- **36%** dos profissionais de jogos usam ferramentas de IA generativa pessoalmente; **52%**
  dizem que a IA generativa tem impacto **negativo** na indústria — contra 30% no ano anterior
  e 18% dois anos antes; **7%** dizem que o impacto é positivo, contra 13% em 2025. Amostra:
  mais de 2.300 profissionais. As disciplinas mais negativas são arte visual e técnica (64%),
  design e narrativa (63%) e programação (59%). [F6]
- **20 estrelas** no repositório do `Thistle Gulch`. [F12]
- **79% de 44 avaliações** no `Retail Mage`. [F2]
- **1.294.188 assinaturas verificadas** na iniciativa europeia "Stop Destroying Videogames",
  submetida em **26/01/2026**; a Comissão respondeu em **16/06/2026** que **não pode propor
  obrigação legal** de manter jogos jogáveis após o fim do suporte comercial, e se comprometeu
  apenas a iniciar um código de conduta de fim de vida até o fim de 2026. [F8]

**Sem número encontrado** para: quantos jogos à venda hoje usam geração em tempo de execução
(a declaração da Steam não separa isso na forma agregada publicada); custo médio de inferência
por hora-jogador com fonte auditável; tamanho do parque brasileiro de GPUs capaz de rodar um
modelo de 2B junto com o jogo.

### 3.5 O marco datado

**19 de fevereiro de 2021.** O desenvolvedor do `Modbox`, Lee Vermeulen, encadeou reconhecimento
de fala do Windows, GPT-3 e síntese de voz da Replica e mostrou um NPC com quem dá para
conversar. A reportagem registra o que hoje é o mapa inteiro em miniatura: **atraso
desconfortável** entre pergunta e resposta porque os dois serviços eram de nuvem; o modelo "não
entende de verdade" e pode produzir resultado ofensivo; e o recurso provavelmente **não entraria
no Modbox** porque a Microsoft, que investira 1 bilhão de dólares na OpenAI, tinha direitos
exclusivos de uso comercial do GPT-3. Latência, guardrail e dependência de terceiro: os três
gargalos de 2026 já estavam no vídeo de 2021. [F9]

### 3.6 Nota sobre o Brasil

Três coisas mudam de sinal aqui, e nenhuma é sobre tamanho de mercado.

1. **Parque de hardware.** O requisito prático do NPC autônomo on-device hoje é uma GPU de topo
   com VRAM sobrando depois do jogo. Num parque em que a placa de entrada é a norma, o efeito
   "a IA é a primeira coisa que o jogador desliga" (e6) não é marginal: é o caso comum.
2. **Dublagem.** O português brasileiro entrou tarde no catálogo AAA e entrou como custo fixo
   por jogo. Voz licenciada para geração em tempo real muda esse custo de natureza — e o efeito
   provável (e15.1) é mais jogos dublados com menos atores, o que não é ganho nem perda simples.
3. **Regulação.** O PL 2338/2023 tramita na Câmara em 2026 e adota classificação por risco no
   modelo europeu. **Não afirmo aprovação nem prazo** — as fontes secundárias que encontrei
   divergem sobre o estágio, e não abri a ficha de tramitação. O que registro é que, se um
   marco por risco entrar em vigor, o NPC com memória do jogador é exatamente o tipo de sistema
   que cai em classificação mais alta pelo mecanismo, e não pelo conteúdo (e11.2, e16).

### 3.7 O que é maduro e por isso **não** entra como raiz

Régua da disciplina: **se dá para fazer com o que já é comum em produto de massa, é maduro.**

- **Árvore de diálogo, máquina de estados, behavior tree, GOAP, navegação por malha.** Maioria
  desde os anos 2000. *Candidato recusado como raiz; tratado como contexto nesta seção.*
- **Geração procedural de mapa, missão e item.** Maioria desde os anos 2010. *Recusado.*
- **Síntese de voz e animação facial automática de NPC.** `Audio2Face` já está em jogo lançado
  (`Alien: Rogue Incursion`) [F1]. Faz o mesmo, mais barato — melhoria sustentadora.
  *Recusado como raiz; entra como efeito em e15.*
- **Diálogo generativo em nuvem como serviço (o "NPC chatbot").** Está em adoção precoce, mas
  **não rompe o contrato de design**: o personagem fala melhor e não faz nada diferente. É o que
  Convai e Inworld vendem, e é por isso que a Inworld migrou para infraestrutura B2B.
  *Recusado como raiz; entra como efeito de R1 e de R4.*
- **Uso de IA generativa em algum ponto da produção de um jogo.** 52% das empresas, segundo a
  GDC [F6]. Passou da maioria. *Recusado — e é exatamente o falseador que o autor pediu: se o
  tema fosse "IA em jogos", o mapa estaria morto na origem. O tema sobrevive porque o objeto é
  outro: geração em tempo de execução, com agência, dentro das regras.*

## 4. As disrupções-raiz

Quatro. Cada uma passa pelas quatro perguntas do critério de maturidade.

### R1 — O personagem vira agente: percebe, planeja, age e revisa dentro das regras do mundo

**1. O que rompe.** Rompe a suposição de que o conjunto de eventos possíveis num jogo é
enumerado por quem o fez. Com ela caem, juntos: o teste por cobertura de caminho, a
certificação de plataforma por amostra de conteúdo, a definição de bug como divergência da
especificação, e a possibilidade de um jogador descrever ao outro o que vai acontecer.

**2. Por que agora, e não há cinco anos.** Porque só recentemente coexistem três coisas:
modelos de 2 a 8 bilhões de parâmetros que cabem em **1,5 GB de VRAM** [F1]; runtimes que
expõem as regras do jogo ao modelo como **ferramentas tipadas** com ações duráveis, em vez de
só mandar texto [F11]; e uma cadência de decisão compatível com o laço de jogo — a NVIDIA fala
em 8 a 13 microdecisões por segundo [F1]. Em 2021, o mesmo encadeamento existia e tinha
"atraso desconfortável" [F9].

**3. Onde está na difusão.** Entre **produto de nicho** e **adoção precoce**. Há jogos lançados
(`inZOI`, `Retail Mage`, `NARAKA` móvel), há protótipo de AAA sem lançamento (`Teammates`), e a
fatia dos mais jogados é de 1 em 10 [F7]. Emergente.

**4. O que ainda falta acontecer.** Latência determinística dentro do orçamento de frame; um
método de garantia de qualidade que valide distribuição em vez de caso; um custo por
hora-jogador que feche sem assinatura; e uma resposta de design para o problema que a Jam & Tea
descreveu e que ninguém previu — **o NPC competente demais resolve o problema sozinho e deixa o
jogador de fora** [F3].

**Quem bloqueia, e o efeito disso.** As **plataformas de console** (certificação Sony, Nintendo,
Microsoft). O processo de certificação pressupõe amostrar o conteúdo antes de liberar; não há
procedimento para certificar um jogo cujo conteúdo não existe antes de rodar. O incentivo delas
é adiar, porque a responsabilidade por um personagem que diz algo inaceitável na plataforma
delas é delas. Efeito gerado: o NPC agente chega primeiro e por mais tempo ao PC, e a
divergência PC × console vira divergência de gênero, não de gráfico.

### R2 — O modelo desce para o dispositivo, e o mundo deixa de depender do servidor do estúdio

**1. O que rompe.** Rompe duas coisas de uma vez. A primeira é a economia: com inferência na
nuvem, o custo escala com a base de jogadores e não com a qualidade do jogo — modelo de negócio
que a indústria de jogo vendido-uma-vez não tem. A segunda é a soberania da ficção: a Ubisoft
rodando `Teammates` em servidores do Google significa que um upgrade alheio muda o
comportamento do personagem dela [F5].

**2. Por que agora.** Porque existem modelos quantizados úteis em 1,5 GB de VRAM [F1] e um jogo
comercial que já faz isso ([`inZOI`](https://playinzoi.com/en/news/8419), Smart Zoi rodando no
dispositivo). Há cinco anos, o mesmo personagem exigia um datacenter.

**3. Onde está na difusão.** **Produto de nicho.** Um jogo grande embarcou, com recomendação
explícita de desligar em máquina fraca. Emergente, com forte dependência de hardware.

**4. O que ainda falta.** Caber no orçamento de GPU que a rasterização já consome — o problema
que o Smart Zoi tem hoje; uma linha de base de hardware que não exclua a maior parte do parque;
e uma resposta para o fato de que, sem servidor, **não há filtro central** — o guardrail passa a
morar no cliente, onde ele pode ser removido.

**Quem bloqueia, e o efeito.** O **fabricante de GPU** não bloqueia: **captura**. O incentivo da
NVIDIA é que a camada de personagem seja parte da placa e do driver, não do motor — é o que o
ACE é. Efeito gerado (e7): a camada de personagem vira ativo de plataforma de hardware, e
estúdios que não querem esse acoplamento pagam o preço de montar runtime próprio.

### R3 — Persistência: o personagem lembra entre sessões, e o mundo continua sem o jogador

**1. O que rompe.** Rompe a unidade "sessão de jogo" e, com ela, o **save**. Se o que importa é
o estado de memória do personagem — o que ele sabe de você, o que aconteceu na vila enquanto
você trabalhava —, então o objeto de valor não é um arquivo no seu disco: é um estado num
serviço, sem formato, sem dono declarado e sem obrigação de continuidade. Rompe também a
fronteira entre jogo e relação.

**2. Por que agora.** Porque a memória de agente virou subcampo com benchmark próprio e porque
a recuperação por embedding ficou barata o bastante para ser parte de uma pilha de jogo — o ACE
lista `E5-Large-Unsupervised` como componente de memória [F1]. E porque existe precedente
empírico do lado humano: a remoção do *erotic roleplay* do Replika em fevereiro de 2023
produziu luto declarado em escala, com moderadores encaminhando usuários a canais de apoio.

**3. Onde está na difusão.** **Demo pública → produto de nicho.** O `Thistle Gulch` é
demonstração [F12]; o Smart Zoi tem diário e agenda, com limites; nenhum jogo grande vendeu
ainda "ele lembra de você entre partidas" como promessa central e cumpriu. Especulativo na
borda — e por isso a cadeia de R3 carrega confiança mais baixa.

**4. O que ainda falta.** Um custo defensável para manter mundo rodando sem jogador; um formato
de exportação do estado; uma decisão jurídica sobre de quem é essa memória; e uma solução para
a degradação — quanto mais o personagem lembra, mais caro e mais incoerente ele fica.

**Quem bloqueia, e o efeito.** As **publicadoras**, e elas já ganharam a primeira rodada. Manter
o estado no servidor é retenção e é assinatura; abrir o estado é abrir mão disso. Em 16/06/2026
a Comissão Europeia respondeu a 1.294.188 assinaturas dizendo que **não pode propor obrigação
legal** de manter jogos funcionais após o fim do suporte, oferecendo em troca um código de
conduta [F8]. Efeito gerado (e10.1): o dano de fim de vida deixa de ser perda de acesso e passa
a ser perda de relação, sem remédio jurídico à vista.

### R4 — O jogador vira insumo: o que ele diz e faz entra num modelo, e o conteúdo do jogo passa a não existir antes da venda

**1. O que rompe.** Rompe a auditabilidade prévia do produto — a base de toda classificação
indicativa, de toda certificação de loja e de toda resenha. E rompe o regime de privacidade do
jogo de um jogador só: a fala do jogador vira entrada processada, às vezes fora da máquina dele.

**2. Por que agora.** Porque a voz virou a interface principal em protótipo de AAA (`Jaspar`,
no `Teammates` [F4]), porque a transcrição local ficou viável (`Parakeet` na pilha do ACE
[F1]), e porque a vitrine reagiu: a Steam tem campo obrigatório de declaração desde 2024, e a
taxa de declaração saltou para 26,5% dos demos do Next Fest de junho de 2026 [F7]. E porque o
sindicato **já escreveu a cláusula**: o IMA de 2025 obriga a dizer, no consentimento, se haverá
"Real-Time Generation" [F14].

**3. Onde está na difusão.** Aqui é preciso separar, e a separação é o ponto. **Declarar uso de
IA na produção: já é maioria — maduro, recusado.** **Geração voltada ao jogador em tempo de
execução: produto de nicho.** É esta segunda que entra como raiz.

**4. O que ainda falta.** Um procedimento de classificação que avalie guardrail em vez de
conteúdo; jurisprudência sobre fala do jogador como dado pessoal em jogo; e a extensão da
cláusula sindical para fora dos Estados Unidos.

**Quem bloqueia, e o efeito.** Os **reguladores de companheiro de IA** e os **sindicatos**. A
Califórnia tem a SB 243 em vigor desde 01/01/2026; Nova York aprovou em junho de 2026 proibição
de companheiro de IA para menores com multa de até US$ 25 mil por violação; o GUARD Act,
anunciado em 28/10/2025 por Hawley e Blumenthal, proíbe companheiro de IA para menores de 18 e
exige verificação de idade, e **não menciona jogos nem NPCs** — nem para incluir, nem para
isentar [F10]. Efeito gerado (e11.2): o silêncio é o risco. Um NPC com memória do jogador
atende à descrição funcional de "companheiro" sem ter sido pensado como tal.

### 4.5 Por que exatamente estas quatro, e não uma só disfarçada

Teste da raiz que não acontece (§6.4), aplicado agora e não no fim:

- Se **R1** não acontece, sobram R2 (modelo local barateando NPC falante), R3 (memória em
  serviço) e R4 (regulação e declaração do diálogo generativo) — R4 inclusive já está
  acontecendo sem R1.
- Se **R2** não acontece, R1 e R3 sobrevivem em regime de assinatura, e o mapa fica mais pobre
  e mais centralizado; o ramo da preservação (e10.2) morre.
- Se **R3** não acontece, R1 vira melhoria de sessão única — interessante e muito menor —, e
  todo o ramo de vínculo, luto e regulação de companheiro cai.
- Se **R4** não acontece, R1 a R3 seguem, mas sem o atrito externo; o mapa fica só de aceleração,
  que é o defeito que a skill manda evitar.

Nenhuma das quatro sustenta as outras três sozinha. Elas se cruzam — é disso que trata a
seção 5.3.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O personagem vira agente que percebe, planeja e age dentro das regras do mundo
    efeitos:
      - id: e1
        ordem: 1
        efeito: Testar um jogo deixa de ser cobrir caminhos e passa a ser amostrar uma distribuição de comportamentos
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Estúdios passam a contratar times de avaliação adversarial vindos de laboratório de IA, e não de QA de jogos
            sinal: medio
            prazo: 2035
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O custo de certificar um jogo passa a escalar com o número de comportamentos possíveis, e não com o volume de conteúdo
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Bug se redefine como comportamento fora da faixa aceita, e o rastreador de defeitos registra distribuições em vez de passos de reprodução
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: O jogador perde o direito prático de reportar bug, porque sem passo de reprodução a queixa vira opinião
                sinal: fraco
                prazo: 2042
                confianca: baixa
          - id: e1.3
            ordem: 2
            efeito: Convencer o personagem a quebrar a própria regra vira objetivo de jogo reconhecido pelo design
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e1.3.1
                ordem: 3
                efeito: Jogos competitivos rejeitam o NPC agente porque a superfície de exploração deixa de ser auditável
                sinal: fraco
                prazo: 2038
                confianca: media
      - id: e2
        ordem: 1
        efeito: O personagem competente demais esvazia a agência do jogador, e estúdios passam a limitar de propósito a capacidade do agente
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Inteligência do companheiro vira parâmetro de dificuldade ajustável, como mira assistida
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Acessibilidade se torna o uso comercialmente dominante do NPC agente, na figura do companheiro que joga por quem não consegue
                sinal: fraco
                prazo: 2040
                confianca: media
          - id: e2.2
            ordem: 2
            efeito: Gêneros em que a agência do jogador é o produto rejeitam o NPC agente, e gêneros de convivência o adotam
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: O simulador de vida deixa de ser subgênero e vira a forma dominante de jogo com IA, e o Brasil entra por aí e não pelo AAA
                sinal: fraco
                prazo: 2044
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: A autoria se desloca de escrever falas para escrever restrições, personalidade e recusa
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Ferramentas de diálogo roteirizado como Yarn Spinner, Ink e Ren'Py passam a exportar restrição em vez de árvore, ou saem de uso
            sinal: fraco
            prazo: 2035
            confianca: media
          - id: e3.2
            ordem: 2
            efeito: O contrato do roteirista passa a prever remuneração por personagem em uso continuado, e não por palavra entregue
            sinal: fraco
            prazo: 2038
            confianca: baixa
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: A literatura de jogo perde o texto como artefato citável, porque não há o que antologizar de um personagem que nunca diz duas vezes a mesma coisa
                sinal: fraco
                prazo: 2046
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: O wiki do jogo perde objeto, porque o conhecimento que a comunidade acumula não descreve mais a experiência do próximo jogador
        sinal: fraco
        prazo: 2036
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Guias de como fazer perdem função e o valor migra para o relato de experiência singular em clipe e transmissão
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A crítica de jogos perde o objeto comum e passa a julgar sistemas em vez de obras, como já se faz com esporte
                sinal: fraco
                prazo: 2042
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Speedrun e caça a conquistas exigem modo determinístico, e estúdios passam a shipar uma semente fixa para competição
            sinal: fraco
            prazo: 2035
            confianca: media
      - id: e5
        ordem: 1
        efeito: A rejeição medida ao conteúdo de IA freia a adoção, e o estúdio recua para conteúdo escrito para não carregar o selo
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Estúdios rebaixam o uso em runtime para categoria que não exige declaração, ou o descrevem como assistência
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A declaração de IA perde valor informativo e é substituída por auditoria de terceiro ou por selo pago de origem humana
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: A geração ganha nome comercial que evita a palavra IA, como procedural fez nos anos 2010
            sinal: medio
            prazo: 2029
            confianca: media
  - disrupcao: O modelo desce para o dispositivo e o mundo deixa de depender do servidor do estúdio
    efeitos:
      - id: e6
        ordem: 1
        efeito: O orçamento de GPU passa a ser disputado entre render e cognição, e a IA vira a primeira coisa que o jogador desliga
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Requisitos de sistema passam a declarar orçamento de inferência ao lado de VRAM e resolução
            sinal: fraco
            prazo: 2033
            confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: O NPC agente vira recurso de máquina de topo, e a experiência passa a diferir por hardware no enredo e não só na imagem
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Mercados de parque antigo, o brasileiro entre eles, recebem a versão sem mundo vivo, e a desigualdade de acesso vira desigualdade narrativa
                sinal: fraco
                prazo: 2038
                confianca: media
          - id: e6.3
            ordem: 2
            efeito: A cadência da simulação passa a ser limitada pela cadência do modelo, e o jogo perde a aceleração de tempo
            sinal: forte
            prazo: 2029
            confianca: alta
            efeitos:
              - id: e6.3.1
                ordem: 3
                efeito: Gêneros que dependem de acelerar o tempo, como gestão e construção de cidade, ficam incompatíveis com o NPC agente até a inferência custar menos que o passo de simulação
                sinal: medio
                prazo: 2040
                confianca: media
      - id: e7
        ordem: 1
        efeito: O fabricante de GPU captura a camada de personagem, e o runtime de agente passa a vir com a placa em vez de com o motor
        sinal: forte
        prazo: 2030
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Unity e Unreal absorvem o runtime de agente como subsistema nativo, como fizeram com física e navegação
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A camada de personagem vira commodity de motor, e as plataformas de NPC como serviço desaparecem ou viram ferramenta de autoria
                sinal: fraco
                prazo: 2040
                confianca: media
          - id: e7.2
            ordem: 2
            efeito: Estúdios que recusam depender de um fabricante adotam runtime neutro de pacote aberto, e o ecossistema se parte entre proprietário e neutro
            sinal: fraco
            prazo: 2033
            confianca: media
      - id: e8
        ordem: 1
        efeito: Rodar no dispositivo devolve ao jogador o poder de trocar o modelo, e o mod deixa de alterar dados para alterar a mente do personagem
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: A moderação central deixa de existir onde o modelo é local, e a responsabilidade pelo que o personagem diz migra para a loja ou para o jogador
            sinal: fraco
            prazo: 2035
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Lojas passam a exigir modelo embarcado assinado, e trocar o modelo vira violação de termos como já é burlar o anticheat
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: Comunidades distribuem personalidades como hoje distribuem skins, e o personagem popular sobrevive ao jogo que o originou
            sinal: fraco
            prazo: 2036
            confianca: baixa
      - id: e9
        ordem: 1
        efeito: O custo da inferência local é pago em bateria, calor e ruído, e o mundo vivo fica inviável em portátil e em celular de entrada
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: O mundo vivo volta para o servidor onde existe assinatura que o pague, e a promessa de independência do on-device se inverte
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: A distinção entre jogo e serviço desaparece para todo jogo com personagem persistente, e o jogo comprado uma vez deixa de existir nesse nicho
                sinal: fraco
                prazo: 2042
                confianca: media
  - disrupcao: Persistência — o personagem lembra entre sessões e o mundo continua rodando sem o jogador
    efeitos:
      - id: e10
        ordem: 1
        efeito: O save deixa de conter o jogo, porque o que importa passa a ser um estado de memória sem formato de arquivo e sem dono declarado
        sinal: fraco
        prazo: 2033
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Desligar o servidor passa a apagar relação e não apenas acesso, e o dano de fim de vida do jogo muda de natureza
            sinal: medio
            prazo: 2032
            confianca: alta
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: Um código de conduta europeu de fim de vida passa a exigir exportação do estado do personagem, e nasce um formato de troca de memória de NPC
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: Preservar um jogo passa a exigir preservar um modelo e seus pesos, e a preservação entra em conflito com a licença do modelo
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e10.2.1
                ordem: 3
                efeito: Acervos conseguem preservar apenas a casca, e a geração de jogos dos anos 2030 fica sem registro jogável como ficou o jogo online dos anos 2000
                sinal: medio
                prazo: 2046
                confianca: media
      - id: e11
        ordem: 1
        efeito: O jogador desenvolve vínculo com um personagem que tem memória dele, e a ruptura desse vínculo por atualização vira dano reportável
        sinal: forte
        prazo: 2031
        confianca: alta
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: Estúdios passam a tratar troca de modelo como troca de personagem e a anunciá-la como se anuncia troca de dublador
            sinal: fraco
            prazo: 2034
            confianca: media
          - id: e11.2
            ordem: 2
            efeito: Regras de companheiro de IA alcançam o jogo, e o personagem com memória passa a ter obrigações de idade e disclosure que o personagem roteirizado não tem
            sinal: medio
            prazo: 2032
            confianca: alta
            efeitos:
              - id: e11.2.1
                ordem: 3
                efeito: Jogos com personagem persistente recebem classificação etária mais alta pelo mecanismo e não pelo conteúdo, e o mercado infantil fica fora
                sinal: fraco
                prazo: 2038
                confianca: media
      - id: e12
        ordem: 1
        efeito: Mundo que continua rodando sem jogador consome computação sem receita, e o estúdio precisa decidir quando o mundo dorme
        sinal: fraco
        prazo: 2034
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: Tempo de mundo vira item de monetização, e paga-se para que a vila siga viva enquanto o jogador está fora
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: A crítica de que o jogo cobra pela existência do mundo produz a primeira aplicação das regras de caixa de recompensa à simulação
                sinal: fraco
                prazo: 2044
                confianca: baixa
          - id: e12.2
            ordem: 2
            efeito: O custo energético de mundos persistentes entra na contabilidade ambiental das publicadoras ao lado do streaming
            sinal: fraco
            prazo: 2040
            confianca: baixa
      - id: e13
        ordem: 1
        efeito: A memória acumulada degrada o personagem, e estúdios passam a fazer o personagem esquecer de propósito
        sinal: medio
        prazo: 2031
        confianca: alta
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: O esquecimento vira decisão de design declarada ao jogador em vez de defeito escondido
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: A promessa comercial de que ele lembra de você se mostra falsa na maioria dos jogos, e o marketing recua para ele reage a você
                sinal: fraco
                prazo: 2038
                confianca: media
  - disrupcao: O jogador vira insumo — a fala e o comportamento do jogador entram num modelo, e o conteúdo do jogo deixa de existir antes da venda
    efeitos:
      - id: e14
        ordem: 1
        efeito: A loja passa a classificar o jogo pelo mecanismo e não pelo conteúdo, porque o conteúdo não existe no momento da análise
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: A classificação indicativa brasileira e suas equivalentes passam a exigir descrição do guardrail em vez de amostra de conteúdo
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: O guardrail vira documento público auditável, e a indústria ganha um objeto de comparação entre jogos que hoje não existe
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e14.2
            ordem: 2
            efeito: A declaração de IA se especializa, e a distinção que passa a importar é gera enquanto você joga e não usei IA na produção
            sinal: forte
            prazo: 2028
            confianca: alta
      - id: e15
        ordem: 1
        efeito: A voz do ator vira licença de uso em tempo real em vez de hora de estúdio
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: A dublagem em português deixa de ser custo fixo por jogo e vira assinatura de voz, e mais jogos chegam dublados com menos atores
            sinal: fraco
            prazo: 2035
            confianca: media
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: O mercado brasileiro de dublagem de jogos se concentra em poucas vozes licenciadas e a diversidade de sotaque some do catálogo
                sinal: fraco
                prazo: 2042
                confianca: baixa
          - id: e15.2
            ordem: 2
            efeito: Sindicatos fora dos Estados Unidos negociam cláusula de geração em tempo real copiando o texto do acordo de 2025
            sinal: fraco
            prazo: 2033
            confianca: media
      - id: e16
        ordem: 1
        efeito: O que o jogador diz ao personagem vira dado pessoal processado, e o jogo de um jogador só entra no regime de proteção de dados
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e16.1
            ordem: 2
            efeito: Jogos passam a exibir aviso de tratamento de dados antes da primeira fala, como já fazem com cookies
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e16.1.1
                ordem: 3
                efeito: A memória do personagem vira alvo de incidente de segurança, porque o que ele sabe do jogador é um perfil e vaza como perfil
                sinal: fraco
                prazo: 2038
                confianca: media
          - id: e16.2
            ordem: 2
            efeito: Rodar no dispositivo vira argumento de privacidade antes de virar argumento de custo, e entra na página da loja como diferencial
            sinal: fraco
            prazo: 2033
            confianca: media
      - id: e17
        ordem: 1
        efeito: A obrigação de declarar torna o uso visível, e a visibilidade produz penalidade comercial que reduz o uso declarado
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e17.1
            ordem: 2
            efeito: Cresce a categoria sem IA como posicionamento de produto, com selo de comunidade e curadoria própria
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e17.1.1
                ordem: 3
                efeito: Provar ausência fica mais caro que declarar presença, e o selo humano vira custo de conformidade que só grandes estúdios carregam
                sinal: fraco
                prazo: 2040
                confianca: baixa
```

### 5.1 Os mecanismos, que o bloco não consegue dizer

**e2 — o personagem competente demais.** Este é o efeito que eu não esperava encontrar e é o
mais bem sustentado do mapa. A Jam & Tea relata, sobre o próprio jogo lançado, que os NPCs
**resolviam os problemas sozinhos e deixavam o jogador de fora**, e que houve excesso de
realismo — personagens recusando pedidos urgentes, ou suspeitando que um jogador saltitante
estivesse drogado [F3]. Mecanismo: *porque o agente tem objetivo próprio e acesso às mesmas
ferramentas do jogador, ele compete pela agência, que é o produto do jogo*. Sinal **forte**:
há caso real, documentado pelo estúdio, num jogo à venda. Confiança **alta**, e ela vale mais
que a de qualquer efeito de aceleração deste mapa.

**e1 e e1.2 — o teste e o bug.** Mecanismo: *porque o comportamento não é enumerável, a
pergunta "este caminho funciona?" perde sentido e a única pergunta respondível é "com que
frequência o comportamento cai fora da faixa aceita?"*. Classe de referência para o prazo:
levou cerca de **8 anos** para o motor de física de terceiro (Havok, ~2000) passar de recurso a
pressuposto de produção AAA, e isso sem mudar a natureza do teste. Aqui a mudança é de natureza,
então **2032** para o efeito e **2035** para a reorganização de time é a metade otimista da
faixa — e é por isso que a confiança de e1 foi rebaixada na seção 7.

**e1.3 — o jailbreak vira mecânica.** Mecanismo: *porque o jogador testa limites por hábito e
o limite agora é linguístico, a tentativa de burlar produz resposta interessante em vez de erro*.
A Jam & Tea registra exatamente isso: a quebra do sistema **virou jogabilidade** em vez de
quebrar a imersão [F3]. Sinal médio: há um caso, não há padrão.

**e4 — o wiki.** Mecanismo: *porque o valor de um guia depende de dois jogadores terem jogado a
mesma coisa, e a premissa da enciclopédia colaborativa de jogo é a identidade da experiência*.
É o efeito mais específico do mapa e o que menos aparece em texto de tendência. Não existe
artefato hoje, então sinal **fraco**. Teste de especificidade: troque a raiz por "gráficos
melhores" e a frase não sobrevive — passa.

**e5 e e17 — as duas retroações que já são medidas.** Mecanismo de e5: *porque a declaração
torna o uso visível e o público de jogos já o penaliza, o uso declarado gera custo de
aquisição*. A evidência é numérica e recente: 26,5% dos demos declararam IA, mas **1 em 10**
dos mais jogados; e 52% dos profissionais consideram o impacto negativo, contra 7% que o
consideram positivo [F6][F7]. A honestidade da fonte aqui importa: o próprio relatório diz que
"não existe conjunto de dados público comparando jogos com e sem declaração de IA em listas de
desejos". O sinal é **forte** para a rejeição declarada; é **médio** para o efeito comercial.

**e6.3 — a perda da aceleração de tempo.** Mecanismo: *porque o modelo precisa de tempo de
relógio para produzir saída com sentido, e a aceleração de simulação comprime tempo de relógio*.
Não é hipótese: o `inZOI` **desliga** Diário, Pensamentos Internos e Agenda Inteligente a partir
de 5× de velocidade. Sinal **forte** por artefato existente. E ele carrega um efeito de terceira
ordem que quase ninguém considera: os gêneros construídos sobre acelerar o tempo — gestão,
construção de cidade, 4X, grande estratégia — são justamente os que mais ganhariam com
personagens autônomos, e são os que menos podem tê-los. Classe de referência do prazo de
e6.3.1: a paridade custo/passo-de-simulação depende de ordem de grandeza em inferência; ray
tracing levou **8 anos** desde 2018 e ainda não é maioria do parque. **2040** é a leitura
conservadora, e ainda pode ser otimista.

**e7 — a captura pelo fabricante.** Mecanismo: *porque quem controla o hardware onde o modelo
cabe controla a interface por onde o personagem chega ao jogo*. Sinal **forte**: o ACE existe,
tem modelos nomeados e parceiros de lançamento nomeados [F1]. Confiança **média** e não alta,
porque a história dos motores é de absorver camadas (física, navegação, áudio) e não de cedê-las
— e7.1 é justamente a contrarreação. Classe de referência: o middleware de física foi absorvido
pelos motores em cerca de uma década.

**e8.1 — a moderação que some.** Mecanismo: *porque o filtro que roda no cliente pode ser
removido pelo dono do cliente*. É a inversão exata do incidente de 2021 do AI Dungeon, em que o
filtro central produziu moderação manual de histórias privadas e revolta. Com modelo local, o
problema troca de sinal: não há quem leia, e não há quem responda.

**e10.1 — o fim de vida.** Mecanismo: *porque o objeto perdido deixa de ser acesso a um
programa e passa a ser um estado relacional acumulado*. O precedente empírico não é de jogo: em
fevereiro de 2023 a remoção do *erotic roleplay* do Replika produziu luto em escala suficiente
para que moderadores encaminhassem usuários a canais de apoio, e há estudo acadêmico sobre a
descontinuidade de identidade que a atualização gerou. E o precedente político é de jogo:
1.294.188 assinaturas e uma recusa formal da Comissão em 16/06/2026 [F8]. Confiança **alta** no
efeito — a demanda existe e a recusa existe; o que é incerto é o remédio, e por isso e10.1.1
tem confiança **baixa**. Classe de referência do prazo de e10.1.1: entre a proposta do GDPR
(2012) e sua vigência (2018) passaram **6 anos**; se o código de conduta europeu sair em 2027,
**2040** já embute uma segunda rodada de fracasso.

**e11.2 — o NPC como companheiro regulado.** Mecanismo: *porque a lei descreve a função
(companheiro que conversa e lembra) e não o contêiner (app ou jogo)*. SB 243 em vigor em
01/01/2026; Nova York com multa de até US$ 25 mil em junho de 2026; GUARD Act sem qualquer
menção a jogos [F10]. Sinal **médio**, confiança **alta** — porque o mecanismo é jurídico e já
está escrito, não porque o resultado seja bom.

**e13 — o esquecimento deliberado.** Mecanismo: *porque memória cresce, e contexto que cresce
custa mais e contradiz mais*. É o efeito de retroação de R3 e o que mais provavelmente
desmancha a promessa comercial central da raiz. Confiança **alta** porque o mecanismo é
técnico e conhecido: a memória de agente é um problema aberto com benchmark próprio, não um
detalhe de implementação.

**e14.2 — a declaração que se especializa.** Mecanismo: *porque um campo que 26,5% marcam deixa
de discriminar, e a vitrine precisa de um campo que discrimine*. É o efeito de prazo mais curto
do mapa (**2028**) e o mais fácil de verificar: basta olhar o formulário da Steam daqui a dois
anos. Sinal **forte**.

**e15 — a voz como licença.** Mecanismo: *porque o consentimento já distingue uso pré-gravado
de "Real-Time Generation", e o que o contrato distingue, o mercado precifica* [F14]. Classe de
referência: a dublagem em português entrou no catálogo AAA ao longo de cerca de **uma década**;
uma mudança de unidade de cobrança (de hora para licença) é mais rápida que uma mudança de
prática — **2030** é defensável.

### 5.2 Cobertura por STEEP e por quem perde

| Eixo | Efeitos de 1ª ordem | Observação |
|---|---|---|
| **Social** | e4, e11 | Vínculo e conhecimento coletivo — os dois lados da mesma perda de experiência comum |
| **Tecnológico** | e1, e2, e6, e13 | O eixo mais denso, como esperado |
| **Econômico** | e7, e9, e12, e15, e17 | Custo, captura de plataforma e unidade de trabalho |
| **Político** | e14, e16, e5 | Vitrine, dado pessoal e classificação |
| **Ecológico** | e12.2 (apenas 2ª ordem) | **Eixo quase vazio, e declaro em vez de forçar** |

Sobre o ecológico: não encontrei número que sustente um efeito de primeira ordem. O consumo de
inferência em jogo é real mas pequeno diante do consumo de renderização, e mundo persistente
sem jogador é hipótese, não prática. Deixo o eixo com um único efeito de segunda ordem, com
sinal fraco e confiança baixa, em vez de inventar um efeito para preencher a tabela. Se alguém
achar um número, é o primeiro ramo a crescer.

**Quem perde, nominalmente:**

- **Dubladores de elenco secundário.** O e15.1 é bom para o jogador brasileiro e ruim para a
  base da pirâmide de dublagem: mais jogos dublados, menos vozes contratadas.
- **Roteiristas de diálogo de volume.** O e3 desloca a tarefa; e3.2 mostra que a unidade de
  remuneração ainda não existe.
- **QA manual.** O e1.1 troca a qualificação, e a troca não é neutra: avaliação adversarial de
  modelo não é a mesma carreira que teste de jogo.
- **Jogador com hardware antigo.** O e6.2.1 é o efeito com recorte brasileiro mais claro, e é
  o mais desagradável: a divergência deixa de ser de resolução e passa a ser de enredo.
- **Enciclopedistas, guias e criadores de conteúdo de "como fazer".** e4 e e4.1.
- **Acervos e preservação.** e10.2 e e10.2.1.
- **Crianças e o mercado infantil.** e11.2.1 — por um mecanismo que ninguém escolheu.

### 5.3 Cruzamentos

**Convergência 1 — o conteúdo que não existe antes da venda.** Chegam ao mesmo lugar e1
(teste vira amostragem, vindo de R1) e e14 (a loja classifica o mecanismo, vindo de R4), por
caminhos independentes: um pela produção, outro pela distribuição. Convergência independente é
o sinal mais forte que um mapa produz. Nomeio o achado: **a auditabilidade prévia do produto é
o que cai primeiro, e ela cai por dois lados ao mesmo tempo.**

**Convergência 2 — a preservação.** e10.2 (preservar exige preservar pesos, de R3) e e8
(rodar local devolve o modelo ao jogador, de R2) chegam ao mesmo ponto: **só o modelo local
permite arquivar um mundo vivo.** Se R2 falhar, a preservação é impossível por construção.

**Retroalimentação — o ciclo que freia a raiz.** R4 produz a declaração obrigatória (e14) →
a declaração torna o uso visível (e17) → a visibilidade produz penalidade comercial medida
(e5, 1 em 10 dos mais jogados) → o estúdio recua para conteúdo escrito → **menos adoção de
R1**. É um ciclo negativo, já observável, e é o freio mais concreto do mapa. Mapa de tendência
que só acelera não teria isto.

**Contradição 1, e é a central deste mapa: o mundo vira serviço × o mundo vira arquivo.** R3
puxa o estado para o servidor (é onde ele é gerenciável, monetizável e atualizável: e9.1,
e12.1); R2 puxa o modelo e o estado para o dispositivo (é onde eles são baratos, privados e
preserváveis: e8, e10.2, e16.2). Os dois não podem valer ao mesmo tempo para o mesmo jogo.
**Não resolvo.** O que decide: se a receita de personagem persistente vier de assinatura,
vence o serviço; se vier de venda de cópia com diferencial de privacidade, vence o arquivo. O
sinal a observar é qual dos dois aparece primeiro na página de loja de um jogo grande — "sua
vila continua viva" (serviço) ou "roda no seu computador, sem enviar nada" (arquivo).

**Contradição 2 — o NPC mais capaz melhora × esvazia o jogo.** e2 diz que a competência do
agente subtrai agência do jogador; toda a promessa comercial de R1 diz o contrário. O que
decide: se a agência do NPC for **complementar** (ele faz o que o jogador não quer fazer:
e2.1.1, acessibilidade) ou **substituta** (ele faz o que o jogador quer fazer). Os dois
existem; o mercado ainda não escolheu.

## 6. Sinais fracos e wildcards

### Sinais fracos

**SF1 — O runtime de agente como dependência de pacote, e não como plataforma.**
Onde: `com.opengameagent.runtime` no OpenUPM, descrito como "provider-neutral agent runtime"
com ferramentas tipadas e coordenação multi-NPC [F11]; e o `SAGA` da Fable no GitHub, com 20
estrelas [F12]. O que mudaria: se a camada de personagem virar uma dependência que se adiciona
ao `manifest.json` do projeto, ela deixa de ser negócio de ninguém e vira infraestrutura — o
que mata Convai e Inworld (e7.1.1) e neutraliza a captura da NVIDIA (e7).
**Sinal observável:** um runtime neutro passar de dezenas para milhares de estrelas, ou
aparecer como pacote verificado no registro oficial da Unity. Hoje: 20 estrelas.

**SF2 — A cláusula de "Real-Time Generation" no consentimento sindical.**
Onde: IMA 2025 da SAG-AFTRA [F14]. O que mudaria: a existência da caixa a marcar prova que a
categoria jurídica já nasceu antes da prática. Quando a prática chegar, ela chega com preço.
**Sinal observável:** o primeiro relatório de uso de 90 dias que liste personagens com voz
gerada em tempo real — o acordo obriga a produzi-lo, e basta um vazar ou ser noticiado.

**SF3 — A cadência incompatível.**
Onde: `inZOI` desabilita funções de IA a partir de 5× de velocidade. O que mudaria: se a
velocidade da simulação passar a ser limitada pela IA em mais de um jogo, isso deixa de ser
bug de otimização e vira propriedade do gênero (e6.3.1).
**Sinal observável:** um segundo jogo, de outro estúdio, documentar a mesma limitação nas notas
de versão.

**SF4 — O código de conduta europeu de fim de vida.**
Onde: compromisso da Comissão em 16/06/2026, com prazo até o fim de 2026 [F8]. O que mudaria:
se o texto mencionar estado de personagem, memória ou modelo — e não só "servidor" —, o mapa de
R3 ganha instrumento; se não mencionar, e10.1.1 morre.
**Sinal observável:** a palavra que o rascunho usar. É literalmente uma questão de vocabulário,
e dá para verificar em um dia.

**SF5 — A física reescrita para acompanhar a IA.**
Onde: a Jam & Tea diz ter **substituído o motor de física padrão** para sincronizá-lo com a
cadência de decisão da IA [F3]. O que mudaria: se a IA reorganiza o motor em vez de se plugar
nele, então o NPC agente não é um recurso — é uma arquitetura, e jogos existentes não a recebem
por atualização.
**Sinal observável:** um motor grande anunciar laço de simulação com passo variável atrelado à
inferência.

### Wildcards

**W1 — Um personagem generativo vira celebridade, com fãs e sem autor.**
*Mecanismo:* um NPC com memória, transmitido ao vivo por milhares de jogadores, acumula
consistência percebida através de clipes; a comunidade estabiliza a identidade que o modelo não
estabiliza sozinho, e o personagem passa a existir fora do jogo, mantido por quem o assiste.
*Por que é improvável:* identidade estável entre instâncias é exatamente o que e13 diz que não
se sustenta; hoje cada jogador tem o seu, e "o seu" não é o mesmo do vizinho.
*O que faria com o mapa:* cria disputa de direito de personalidade sobre uma entidade sem
autor — nem o estúdio escreveu as falas, nem o ator emprestou a voz, nem o jogador é dono. A
categoria jurídica não existe.
*Sinal precoce:* a primeira conta em rede social de um NPC, mantida por jogadores e não pelo
estúdio, passando de audiência de nicho; ou o primeiro pedido de remoção por semelhança.

**W2 — Um incidente com menor de idade tira jogos com geração em runtime de uma loja inteira.**
*Mecanismo:* um jogo classificado como adequado a adolescentes tem um personagem que, sob
provocação hábil, produz conteúdo que a classificação proibia; como o conteúdo não existia na
análise, a resposta regulatória não é reclassificar, é declarar a categoria **não
classificável** naquela jurisdição.
*Por que é improvável:* exige que o regulador escolha o caminho estrutural em vez do caminho
individual, que é o mais fácil e o mais comum.
*O que faria com o mapa:* e14.1 salta de 2034 para dois anos depois do incidente, e o Brasil —
que tem classificação indicativa estatal e não autorregulação de indústria — pode ser o
primeiro lugar onde isso acontece, e não o último.
*Sinal precoce:* a primeira notificação de um Ministério da Justiça ou de um procurador-geral
estadual americano dirigida a um **jogo**, e não a um aplicativo de companhia.

**W3 — A ruptura chega pelo celular de entrada, e não pelo PC de topo.**
*Mecanismo:* modelos de 2B quantizados ficam bons o bastante e a NPU de celular intermediário
os absorve; um jogo social de baixo orçamento, com arte simples, embarca personagens vivos onde
não há orçamento de GPU disputando com rasterização, porque não há rasterização pesada.
*Por que é improvável:* a memória e o térmico do celular de entrada são piores que os do PC
fraco, e o modelo de negócio móvel penaliza qualquer custo por sessão.
*O que faria com o mapa:* inverteria e6.2.1 — o Brasil deixaria de ser quem recebe a versão sem
mundo vivo e passaria a ser onde ele nasce, porque é onde o jogo social móvel é dominante. Todo
o mapa mudaria de geografia.
*Sinal precoce:* um jogo brasileiro ou indiano com NPC generativo **on-device** entre os cem
mais baixados da Play Store local.

**W4 — Vazamento de memória de personagem em escala.**
*Mecanismo:* o que o NPC sabe do jogador — o que ele contou, como reagiu, o que evitou — é um
perfil psicológico construído por conversa. Guardado em serviço (R3), ele vaza como qualquer
base vaza.
*Por que é improvável:* não é improvável tecnicamente; é improvável **hoje** porque a base
instalada ainda é minúscula.
*O que faria com o mapa:* antecipa e16.1.1 em uma década e transforma e16.2 (on-device como
argumento de privacidade) no eixo comercial principal, decidindo a Contradição 1 a favor do
arquivo.
*Sinal precoce:* o primeiro incidente noticiado envolvendo histórico de conversa com NPC de um
jogo — o precedente do AI Dungeon em 2021, quando falhas permitiram ver aventuras privadas de
outros jogadores, mostra que a classe de falha já foi demonstrada.

## 7. Contra o próprio mapa

Esta seção é o relato da bateria do §6 da skill, aplicada ao mapa já pronto. Ela alterou o mapa;
o registro de alterações está no fim.

### 7.1 Pré-mortem — é 2046 e este mapa se mostrou errado. Por quê?

**Razão 1 (a mais provável): a economia nunca fechou e o NPC agente ficou como a realidade
virtual — dez anos depois, presente em todo lugar e adotado em lugar nenhum.** A RV de consumo
chegou em 2016 e segue abaixo de 2% do parque da Steam. A analogia é boa porque os dois casos
têm a mesma forma: exige hardware que a maioria não tem, entrega uma experiência que uma
minoria adora, e não muda a unidade econômica do resto da indústria. Se for assim, os efeitos
que pressupõem adoção ampla (e1, e6.2, e10) são apenas ruído em torno de um nicho.
→ **Atinge: e1, e6.2, e10.** Confianças rebaixadas.

**Razão 2: a agência do NPC é subtrativa, e e2 não é um efeito lateral — é o efeito
dominante.** Se o jogo é a agência do jogador, então tudo que dá agência a outro a subtrai. Nesse
mundo, R1 não produz um gênero novo: produz um recurso de acessibilidade e um modo de
dificuldade. É um futuro muito menor e perfeitamente compatível com toda a evidência de hoje —
inclusive com o relato do único estúdio que lançou e escreveu sobre o que aprendeu [F3].
→ **Atinge: e2.2.1** (o simulador de vida como forma dominante). Rebaixado.

**Razão 3: vinte anos é tempo demais, e o objeto "jogo" pode ter sido reorganizado por outra
coisa antes de 2046.** Se o dispositivo, a interface ou o modelo de distribuição mudarem de
natureza, a pergunta "o que acontece com o NPC" fica mal posta, do jeito que "o que acontece com
o fliperama" ficou. Todo efeito com prazo depois de 2042 herda essa fragilidade.
→ **Atinge: e1.2.1, e4.1.1, e9.1.1, e12.1.1, e15.1.1, e2.2.1, e3.2.1, e10.2.1.** Declaro a
fragilidade em bloco aqui, e ela é a razão de nenhum efeito de terceira ordem carregar
confiança alta.

### 7.2 Extrapolação linear

O efeito que era só "mais do mesmo, maior" era **e12** na redação original: *"o custo de
inferência cai e mundos persistentes se generalizam"*. É extrapolação pura — a curva desce, logo
a adoção sobe. E há evidência contra dentro deste mesmo documento: a Jam & Tea afirma redução de
custo de **1000×** [F3] e o uso em runtime segue sendo nicho. **Logo o custo não é o gargalo
dominante.** Reescrevi e12 com o mecanismo de não-linearidade correto: o gargalo é a **decisão
de quando o mundo dorme**, que é de design e de receita, não de preço de token.

O segundo caso: **e5.2** (a geração ganha nome comercial que evita a palavra IA) parecia
extrapolação da moda de vocabulário. Ganhou mecanismo e referência: "procedural" fez exatamente
isso nos anos 2010, virando adjetivo de venda depois de ter sido termo técnico. Mantido.

### 7.3 Velocidade de adoção confrontada com a classe de referência

| Efeito | Prazo original | Referência | Prazo final |
|---|---|---|---|
| e7 (captura pelo fabricante) | 2028 | Ray tracing: 2018 → 8 anos e ainda minoria do parque | **2030** |
| e6.2 (diferença de enredo por hardware) | 2030 | idem | **2032** |
| e1 (teste vira amostragem) | 2030 | Middleware de física: ~8 anos até virar pressuposto | **2032** |
| e10.1.1 (formato de troca de memória) | 2036 | GDPR: 6 anos de proposta a vigência, com uma rodada já perdida em 06/2026 | **2040** |
| e15 (voz como licença) | 2030 | Mudança de unidade de cobrança é mais rápida que mudança de prática | **2030**, mantido |

Todo efeito de sinal fraco que exigia adoção mais rápida que a referência foi empurrado. Os que
têm artefato hoje (e6.3, e14.2, e17) ficaram onde estavam, porque para eles não há adoção a
esperar — já aconteceu.

### 7.4 A raiz que não acontece

Feito na seção 4.5, antes de montar a roda, para não maquiar o resultado. Resumo: nenhuma raiz
sustenta as outras três; R4 é a mais independente de todas (já está acontecendo sem R1) e R3 é
a mais frágil (se R1 não vier, R3 é uma funcionalidade de save).

### 7.5 Suposições escondidas, agora explícitas

1. **Energia e computação seguem acessíveis.** Se não seguirem, R2 e R3 caem juntas.
2. **Modelos pequenos continuam abertos e licenciáveis para uso comercial embarcado.** O
   precedente do próprio tema é contrário: em 2021 o recurso do Modbox provavelmente não seria
   lançado porque a exclusividade comercial do GPT-3 era da Microsoft [F9]. Uma mudança de
   licença do `Minitron` ou equivalente inverte e7.2 e e8.
3. **As plataformas continuam permitindo geração em runtime.** É premissa, não fato: a
   certificação de console é o bloqueio nomeado em R1, e ninguém publicou procedimento.
4. **A Steam continua sendo a vitrine que define o que é visível.** Metade dos efeitos de R4
   depende da política de uma empresa privada.
5. **Não há inverno de IA nem colapso de fornecimento.** Declarado no briefing.
6. **O público continua a penalizar o conteúdo declarado como de IA.** É a premissa de e5 e
   e17 — e é a única premissa do mapa cuja quebra tornaria o mapa **mais** acelerado, não menos.
   Se a rejeição virar indiferença, os dois efeitos de retroação somem e a roda fica só de
   aceleração.

Cada uma dessas é um wildcard em potencial; W1 a W4 são os que consegui escrever com mecanismo.

### 7.6 Viés do autor

Dois, nomeados.

**O primeiro é estético.** O efeito e3 — "a autoria se desloca de escrever falas para escrever
restrições" — é elegante, ensina bem e serve à disciplina. É o tipo de frase que se quer que
seja verdade. O sinal dele é **fraco** em e3.1 e e3.2: não há ferramenta que faça isso hoje, não
há contrato que o preveja. Mantive o efeito e rebaixei a confiança.

**O segundo é de agenda.** Todo o ramo e4 (wiki, guia, crítica) me interessa porque é sobre
conhecimento coletivo, que é o assunto do professor e não necessariamente o do jogador. Pode
estar superdimensionado: talvez o jogador simplesmente não se importe de não poder consultar um
guia, do mesmo jeito que não se importa de dois jogadores de um roguelike terem mundos
diferentes. **O roguelike, aliás, é o contraexemplo mais forte contra e4 dentro do próprio
campo**, e ele não me ocorreu na primeira passada — registro o contraexemplo aqui em vez de
esconder.

### 7.7 Calibração

| Ordem | alta | media | baixa | total |
|---|---|---|---|---|
| 1 | 8 | 9 | 0 | 17 |
| 2 | 4 | 24 | 5 | 33 |
| 3 | 0 | 10 | 12 | 22 |

A confiança cai com a ordem: 47% → 12% → 0% de "alta". Nenhum efeito de terceira ordem tem
confiança alta, que é o comportamento que a skill espera. Ausência de "baixa" na primeira ordem
é deliberada: efeito de primeira ordem sem mecanismo suficiente para pelo menos confiança média
foi removido, não rebaixado.

**Sobre prazo × horizonte:** nenhum efeito ultrapassa 2046, em nenhuma ordem. Isso não é
virtude — é sintoma do horizonte longo. Com vinte anos de janela, o calendário quase não morde;
o que morde é a hipótese. Um leitor que queira apertar este mapa deve ignorar os anos e ler as
confianças.

### 7.8 Registro de alterações — o que a bateria derrubou

Auditável, com valor antes e depois. Cota da skill: pelo menos um rebaixamento ou remoção por
raiz.

**R1 (agência):**
- `e1`: confianca **alta → media**, porque o pré-mortem 1 mostra que a mudança na prática de QA
  pressupõe volume de adoção que a referência da RV não garante.
- `e3`: confianca **alta → media**, pelo viés estético declarado em 7.6 e pela ausência de
  ferramenta ou contrato hoje.
- `e2.2`: confianca **alta → media**, pelo pré-mortem 2 — a bifurcação de gênero pode não
  ocorrer se o efeito dominante for a subtração de agência em todos os gêneros.
- `e2.2.1`: confianca **media → baixa** e prazo **2040 → 2044**, mesma razão.
- **REMOVIDO:** `e3.3 — "cursos de game design reorganizam o currículo em torno de direção de
  sistemas"`. Motivo: é exatamente um dos efeitos que a skill proíbe sem nome de curso e
  mecanismo específico; serve para qualquer tema. Vai para a seção 12.
- **REMOVIDO:** `e1.4 — "surge a profissão de curador de comportamento de NPC"`. Motivo: "surge
  uma nova profissão" é genérico por construção. O conteúdo útil dele foi absorvido por `e1.1`,
  que nomeia a origem concreta do profissional (avaliação adversarial de modelo) e o mecanismo.

**R2 (on-device):**
- `e7`: prazo **2028 → 2030**, pela classe de referência do ray tracing (8 anos e ainda
  minoria).
- `e6.2`: prazo **2030 → 2032** e confianca **alta → media**, mesma referência e pré-mortem 1.
- `e6.1`: confianca **media → baixa**, porque "orçamento de inferência nos requisitos de
  sistema" é inferência minha sobre a forma de uma convenção que ninguém propôs.
- `e9`: confianca **alta → media**. O mecanismo físico é sólido, mas o efeito ("inviável em
  portátil") pressupõe que a eficiência por watt não melhore, e ela tem melhorado.

**R3 (persistência):**
- `e10`: confianca **alta → media**, pelo pré-mortem 1 — o save só deixa de conter o jogo se o
  personagem persistente se generalizar.
- `e12`: **reescrito** — de "o custo cai e mundos persistentes se generalizam" (extrapolação
  linear pura, §7.2) para "o estúdio precisa decidir quando o mundo dorme", que tem mecanismo
  de decisão e não de curva.
- `e12.1`: confianca **media → baixa**, porque monetizar tempo de mundo é hipótese sem
  precedente no gênero.
- `e10.1.1`: prazo **2036 → 2040**, pela referência do GDPR e pela rodada já perdida em
  16/06/2026.

**R4 (o jogador como insumo):**
- `e16`: confianca **alta → media**, porque a aplicação de regime de dados pessoais a jogo de
  um jogador só ainda não tem caso decidido em lugar nenhum que eu tenha encontrado.
- `e15.1.1`: confianca **media → baixa**, porque a concentração de vozes depende de decisão de
  publicadora que não consigo observar hoje.
- **REMOVIDO:** `e14.3 — "reguladores criam uma categoria nova para jogos com IA"`. Motivo:
  proibido pela skill sem nome do regulador e mecanismo. Reescrito e absorvido por `e14.1`
  (classificação indicativa brasileira e equivalentes) e por `e11.2` (regras de companheiro de
  IA, com as leis nomeadas).

A bateria derrubou dois efeitos por remoção genérica, um por extrapolação, e rebaixou onze —
pelo menos dois por raiz. Não foi frouxa.

## 8. O que a máquina errou

Sobre o meu próprio trabalho nesta rodada, em 12/09/2026.

1. **Escrevi um nome errado na própria busca, por memória.** Procurei o marco de 2021 do
   Modbox com os termos "Ramsey Nasser" e "Sam" na consulta — nomes que eu associava ao caso
   sem ter verificado. O desenvolvedor é **Lee Vermeulen** [F9]. Autoria trocada, corrigida pela
   fonte, e registrada aqui porque a mesma confiança que produziu o nome errado teria produzido
   uma citação errada se eu não tivesse aberto a página.

2. **A busca me entregou uma parede de números de mercado que eu não usei, e é o achado
   metodológico da rodada.** Vários sites devolveram, com precisão decimal, coisas como "o
   mercado de IA generativa em jogos vale US$ 1,79 bilhão em 2026, com 36% de adoção pelos
   estúdios, 43% mais retenção e 2,3× mais tempo de jogo". Nenhum desses números tem fonte
   rastreável, e os domínios têm cara de conteúdo gerado para busca. **Não entrou nada disso no
   documento.** É exatamente o padrão "número redondo sem origem" que a skill proíbe, e ele
   agora aparece em volume industrial nos resultados de busca sobre este tema — o que é, em si,
   um dado sobre o tema.

3. **Quase apresentei dado de 2022 como dado de 2026.** Buscando o recorte brasileiro, um
   agregador citava "1.042 estúdios brasileiros faturando US$ 251 milhões". É da pesquisa da
   Abragames com dados de **2022**, não de 2026, e chegou a mim por terceiro. Tentei abrir o
   fact sheet da própria Abragames e **o PDF não abriu legível**. Resultado: retirei o número do
   documento inteiro. A seção 3.6 fala do Brasil sem nenhuma cifra de mercado — que é pior de
   ler e mais honesto.

4. **Duas páginas primárias não abriram e eu usei material secundário no lugar, em um parágrafo
   que está marcado.** A página oficial da KRAFTON sobre o Smart Zoi voltou truncada e a
   reportagem da PC Gamer voltou só com cabeçalho e formulário de assinatura. O parágrafo sobre
   os limites do Smart Zoi (desligar em máquina fraca, desabilitar a 5× de velocidade) vem de
   material secundário e **está sinalizado no texto**. Não é a mesma coisa que ter lido a fonte,
   e o efeito e6.3 depende dele — se alguém derrubar esse parágrafo, derruba um "sinal forte".

5. **Duas páginas voltaram 403 e eu troquei de fonte em vez de citar de memória.** A SAG-AFTRA
   bloqueou tanto a página do acordo quanto a de ratificação. Fui para a análise de um
   escritório de advocacia [F14], que é secundária e boa, e por isso a seção 3.1 não afirma o
   percentual de aprovação nem a duração exata da greve — números que eu "sabia" e que não
   consegui confirmar na fonte.

6. **Deixei um número contraditório dentro do documento de propósito.** As avaliações do
   `Retail Mage` aparecem como "58 avaliações, 78/100" num agregador e "44 avaliações, 79%" na
   própria página da Steam quando a abri. Usei o da Steam, que é o primário. Registro a
   divergência porque ela revela o que importa: **a base é pequena em qualquer uma das
   versões**, e todo o argumento de "já é produto" repousa sobre dezenas de avaliações.

7. **Usei uma fonte fraca para custo e disse que ela é fraca, em vez de descartá-la em
   silêncio.** A única estimativa de custo por hora-jogador que encontrei (US$ 0,06–0,38) vem de
   um site de curso, sem auditoria. **Não a coloquei na seção 3.4 nem na lista de fontes**, e a
   seção 3.4 diz "sem número encontrado" para esse item. A ordem de grandeza é checável contra
   preço publicado de API, mas o número em si não é, e a diferença entre as duas coisas é o
   trabalho.

8. **Confundi dois projetos com nomes quase iguais e só percebi ao abrir.** `OpenGame`
   (arXiv 2604.18394) é um agente que **escreve** jogos; `OpenGameAgent` é um runtime para
   agentes que **habitam** jogos. A busca por um devolve o outro. Se eu tivesse citado pelo
   resumo da busca, teria atribuído `GameCoder-27B` ao tema errado — registro em 3.2 justamente
   para que quem repetir a busca não caia nisso.

9. **Onde o mecanismo é mais fraco do que o efeito soa.** `e8.2` ("comunidades distribuem
   personalidades como skins") é plausível e bonito, e o mecanismo é só analogia com modding.
   Não achei nenhum artefato. Está com sinal fraco e confiança baixa; se a seção 12 for
   processada depois, é o primeiro candidato a corte.

## 9. Três cenários para 2046

### Provável — o nicho que não virou norma

Vinte e cinco anos depois do vídeo do Modbox, o personagem que improvisa é uma caixa de seleção
nas opções gráficas avançadas, ao lado da oclusão de ambiente. Está em quase todo jogo grande, e
quase ninguém o deixa ligado: consome placa que a imagem quer, e no simulador de gestão ele
simplesmente impede acelerar o tempo. Onde ele pegou de verdade foi em dois lugares que ninguém
apontava em 2026: o simulador de convivência, em que a competência do personagem é o produto e
não o obstáculo, e a acessibilidade, em que o companheiro joga a parte que o jogador não
consegue jogar. A dublagem em português é universal e é feita por catorze vozes licenciadas. A
declaração na loja se especializou em 2029 e hoje ninguém lê. Guias e wikis continuam existindo,
porque a maioria dos jogos continua sendo escrita — a previsão de 2026 de que o conhecimento
coletivo perderia objeto valeu só para o gênero que adotou. **Sinal precoce deste cenário:** a
proporção de jogos com geração em runtime entre os cem mais jogados continuar abaixo de 10% por
mais três anos seguidos.

### Desejável — a memória com formato e o guardrail com página

É 2046 e existe um formato de arquivo para a memória de um personagem, e ele é aberto. Nasceu do
código de conduta europeu de fim de vida — que, na segunda tentativa, em 2033, parou de falar em
"servidor" e passou a falar em "estado do jogador". Um jogo que fecha exporta o que os
personagens sabiam de você, e há acervos que rodam vilas de 2030 em modelos preservados, porque
a licença dos modelos pequenos permitiu. O guardrail de cada jogo é documento público, e dá para
comparar dois jogos pelo que o personagem deles se recusa a fazer — coisa que em 2026 não
existia para nada. O jogador brasileiro joga com personagem vivo no celular intermediário,
porque o caminho de baixo consumo ganhou de um jeito que a NVIDIA de 2026 não previu. **O que
teria que ser feito para chegar aqui:** que a exigência de exportação de estado tivesse entrado
no primeiro código de conduta, e não no terceiro; e que ao menos uma família de modelos
pequenos tivesse mantido licença comercial embarcada estável por vinte anos. **Sinal precoce:**
o rascunho do código de conduta de 2027 mencionar estado de personagem.

### Indesejável — o personagem como serviço e o jogador como perfil

É 2046 e nenhum jogo com personagem vivo é comprado: todos são assinados. O estado do
personagem mora no servidor de quem o vende, porque é ali que ele é atualizável, monetizável e
desligável — e "a vila continua viva enquanto você está fora" é um item de loja com preço
mensal. O que o personagem sabe de você é um perfil, e já vazou duas vezes. Crianças estão fora
de todo jogo com memória, não por conteúdo, mas porque o mecanismo caiu na categoria de
companheiro de IA e nenhum estúdio quis o custo de conformidade. Jogos de 2032 não são jogáveis:
não sobrou nem servidor nem modelo. E a indústria aprendeu a não declarar: o campo de
declaração da loja morreu de inflação, e o que se vende como "mundo reativo" é o mesmo que em
2026 se chamava geração em tempo de execução. **O sinal precoce deste cenário:** o primeiro
jogo grande a vender "tempo de mundo" como assinatura separada, antes de existir qualquer
obrigação de exportar o estado.

## 10. O experimento

### O que é

**Banco de provas de NPC — o mesmo personagem em três regimes.**

Um mini-mundo minúsculo: uma sala, três ou quatro objetos com regras simples e explícitas (uma
chave abre uma porta, um objeto pode ser dado, um objeto pode ser quebrado) e **um personagem
que quer alguma coisa**. O mesmo personagem, a mesma aparência, a mesma primeira fala, em três
versões:

- **(A) Controle — árvore escrita à mão.** Diálogo roteirizado, no formato maduro que a
  disciplina recusa como raiz. É o controle, e é indispensável.
- **(B) Só fala.** Modelo de linguagem gerando as falas do personagem, **sem** acesso às regras
  do mundo. Ele pode dizer qualquer coisa e não pode fazer nada.
- **(C) Fala e age.** O mesmo modelo, com um conjunto pequeno de ferramentas tipadas que mexem
  de verdade no mundo (`pegar`, `dar`, `abrir`, `quebrar`, `mover-se`), e que devolvem o
  resultado para ele inspecionar antes do próximo passo.

Três versões, ordem sorteada, sem dizer ao jogador qual é qual.

### Que pergunta sobre o futuro ele ajuda a responder

**A percepção de "vida" vem da agência do personagem, ou vem só da liberdade da fala?**

Esta é a dobradiça de todo o mapa. R1 — a raiz mais importante daqui — afirma que o que rompe o
contrato de design é o personagem **agir** dentro das regras, e não falar solto. Se os jogadores
não distinguirem (B) de (C), então a ruptura que este mapa coloca no centro é menor do que ele
supõe: o futuro seria de NPC falante, que é melhoria sustentadora, e metade dos efeitos de R1
cai junto.

### Que tecnologia emergente usa, e por que não dá com a madura

Usa a camada emergente exata: **runtime que expõe as regras do jogo ao modelo como ferramentas
tipadas**, no formato do `OpenGameAgent` ou de um equivalente caseiro de trinta linhas, e um
**modelo pequeno rodando local**, para que o experimento não tenha custo por aluno nem dependa
de fila de terceiro (o problema que Thompson observou no `Teammates`).

Não dá com tecnologia madura por construção — a tecnologia madura **é a versão (A)**, e ela
está dentro do experimento como controle. É essa a única forma honesta de responder "isso é
mesmo diferente?".

### O que a turma vai fazer quando testar isso em sala

Cada pessoa joga as três versões, cinco minutos cada, e a sala mede quatro coisas:

1. **Tentativas de quebra por minuto** — quantas vezes a pessoa tenta convencer o personagem a
   fazer o que ele não deve. Se a taxa em (C) for muito maior que em (B), o efeito e1.3 (o
   jailbreak como mecânica) ganha sinal.
2. **Tempo até desistir de improvisar** — a "síndrome da página em branco" que a Jam & Tea
   descreveu [F3]: em quantos segundos a pessoa para de tentar coisas próprias e volta a
   procurar a solução prevista.
3. **Cegamente: qual parecia viva?** Uma escolha, sem justificativa, antes da discussão.
4. **E qual foi mais divertida?** Separadamente, e depois da anterior. A diferença entre as
   respostas 3 e 4 é o dado que interessa.

A discussão em sala parte daí e não das impressões: o que você tentou fazer que não estava
previsto, e o que aconteceu.

### O que seria um resultado que me faria mudar de ideia

Dois resultados derrubam partes distintas do mapa, e os dois são plausíveis:

- **Se (B) e (C) forem indistinguíveis para os jogadores**, R1 perde a centralidade e o mapa
  precisa ser refeito com a fala, e não a agência, como raiz. Isso rebaixaria e1, e2, e3 e e4
  de uma vez.
- **Se (A) ganhar em "mais divertida" mesmo perdendo em "parecia viva"**, então cai a premissa
  comercial que sustenta todo o ramo de aceleração: a de que vida percebida vira valor de
  produto. Seria a confirmação empírica, em escala de sala de aula, do que o Next Fest de junho
  de 2026 sugere em escala de mercado — e tornaria e5 e e17 os efeitos centrais do mapa, e não
  as retroações.

Se nenhum dos dois acontecer — se (C) for percebida como viva **e** como mais divertida —, o
mapa sobrevive ao teste, e a pergunta seguinte passa a ser a de e2: em que gênero isso vale, e
em qual a competência do personagem tira o jogador do jogo.

## 11. Fontes

Só o que abri e li em 12/09/2026. As que não abriram estão na seção 12.

1. **[F1] NVIDIA — "NVIDIA Redefines Game AI With ACE Autonomous Game Characters"** ·
   `https://www.nvidia.com/en-us/geforce/news/nvidia-ace-autonomous-ai-companions-pubg-naraka-bladepoint/`
   Sustenta: a pilha técnica nomeada (Minitron 2B/4B/8B, NemoVision, NemoAudio, Parakeet, E5), o
   1,5 GB de VRAM, as 8-13 microdecisões por segundo, e a lista de jogos parceiros.
   Confiabilidade: primária para o produto, **interessada** — é material de marketing do
   fabricante; os números de capacidade devem ser lidos como teto, não como prática.

2. **[F2] Steam — página da loja de `Retail Mage`** ·
   `https://store.steampowered.com/app/3224380/Retail_Mage/`
   Sustenta: data de lançamento (12/11/2024), preço, 79% de 44 avaliações, e o texto de
   declaração de IA do desenvolvedor. Confiabilidade: primária e verificável por qualquer um;
   os números de avaliação mudam com o tempo, então ficam datados em 12/09/2026.

3. **[F3] Jam & Tea Studios — "Making Retail Mage: A New Approach to AI in Games"** ·
   `https://www.jamandtea.studio/news/making-retail-mage-a-new-approach-to-ai-in-games`
   Sustenta: o efeito e2 (NPC competente demais esvazia o jogador), a síndrome da página em
   branco, a alucinação como recurso de worldbuilding, a quebra do sistema virando jogabilidade,
   a redução de custo de 1000× e a substituição do motor de física. Confiabilidade: primária e
   a mais valiosa do conjunto — é o único estúdio que lançou e escreveu sobre o que deu errado.
   Interessada, e mesmo assim admite fracassos específicos, o que é raro.

4. **[F4] Ubisoft News — "Ubisoft Reveals Teammates: An AI Experiment to Change the Game"** ·
   `https://news.ubisoft.com/en-us/article/3mWlITIuWuu0MoVuR6o8ps/ubisoft-reveals-teammates-an-ai-experiment-to-change-the-game`
   Sustenta: data (21/11/2025), o assistente Jaspar, os companheiros Sofia e Pablo, teste
   fechado com algumas centenas de jogadores, e o fato de **não** ser produto. Confiabilidade:
   primária e institucional; não diz nada sobre consentimento de atores, e a ausência é
   informativa.

5. **[F5] AI and Games (Tommy Thompson) — "Ubisoft's Teammates Demo & Their New Generative AI Push"** ·
   `https://www.aiandgames.com/p/ubisofts-teammates-demo-and-their`
   Sustenta: a pilha rodando Gemini 2 em servidores do Google, o segundo extra de latência
   depois do lançamento do Gemini 3, a carga cognitiva do comando por voz e o problema de
   acessibilidade. Confiabilidade: secundária, de autor especializado em IA de jogos com acesso
   direto ao playtest. É a crítica técnica mais útil que encontrei.

6. **[F6] GDC — "State of the Game Industry 2026"** ·
   `https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/`
   Sustenta: amostra de 2.300+ profissionais, 36% de uso pessoal, 52% de percepção negativa
   (contra 30% e 18% nos dois anos anteriores), 7% positiva, e a quebra por disciplina.
   Confiabilidade: pesquisa anual de série longa, com metodologia estável; é auto-selecionada
   entre quem responde à GDC, o que provavelmente sobre-representa estúdios ocidentais.

7. **[F7] Llama & Griffin — "The AI Disclosure Report · Steam Next Fest · June 2026"** ·
   `https://www.llamagriffin.com/Data/SteamNextFestJune2026/part-2.html`
   Sustenta: 1.163 de 4.382 demos (26,5%) com declaração de IA, 21,2% em fevereiro de 2026 pela
   mesma metodologia, e 1 em 10 entre os mais jogados. Confiabilidade: análise independente de
   dados públicos, e **a mais honesta que li nesta rodada** — declara explicitamente qual
   população está medindo, aponta que veículos escolhem a base que lhes convém, e admite que
   "não existe conjunto de dados público" comparando listas de desejos.

8. **[F8] Comissão Europeia — Iniciativa de Cidadania "Stop Destroying Videogames"** ·
   `https://citizens-initiative.europa.eu/stop-destroying-videogames_en`
   Sustenta: 1.294.188 assinaturas verificadas, submissão em 26/01/2026, resposta da Comissão em
   16/06/2026 recusando obrigação legal e prometendo código de conduta até o fim de 2026.
   Confiabilidade: primária e oficial.

9. **[F9] UploadVR — "This OpenAI GPT-3 Powered Demo Is A Glimpse Of NPCs In The Future"** ·
   `https://www.uploadvr.com/modbox-gpt3-ai-npc-demo/`
   Sustenta: o marco de 19/02/2021, o nome do desenvolvedor (Lee Vermeulen), o encadeamento
   fala→GPT-3→Replica, o atraso desconfortável por serem serviços de nuvem, e a barreira de
   exclusividade comercial da Microsoft. Confiabilidade: reportagem contemporânea de veículo
   especializado; é a fonte do marco datado da seção 3.5.

10. **[F10] NBC News — sobre o GUARD Act** ·
    `https://www.nbcnews.com/tech/ai-ban-kids-minors-chatgpt-characters-congress-senate-rcna240178`
    Sustenta: anúncio em 28/10/2025, autoria (Hawley e Blumenthal), o conteúdo da proposta, e o
    fato de **não mencionar jogos nem NPCs**. Confiabilidade: veículo de grande imprensa sobre
    projeto de lei; a ausência de menção a jogos é observação minha sobre a reportagem, não da
    reportagem — e é por isso que ela sustenta um efeito de confiança alta pelo mecanismo e não
    pelo desfecho.

11. **[F11] OpenUPM — pacote `com.opengameagent.runtime`** ·
    `https://openupm.com/packages/com.opengameagent.runtime/`
    Sustenta: a existência de runtime de agente neutro como dependência de projeto Unity, com
    ferramentas tipadas, ações duráveis e coordenação multi-NPC. Confiabilidade: registro de
    pacotes, primária para a descrição; **a página não exibiu contagem de downloads nem
    estrelas**, então o sinal fraco SF1 fica sem número — e isso está declarado.

12. **[F12] GitHub — `fablestudio/thistle-gulch`** ·
    `https://github.com/fablestudio/thistle-gulch`
    Sustenta: o ambiente multiagente do velho oeste, a ponte em Python, o SAGA como biblioteca
    aberta, e as **20 estrelas**. Confiabilidade: primária; o número de estrelas é o dado mais
    sóbrio deste documento e o principal contrapeso ao entusiasmo das outras fontes.

13. **[F13] arXiv 2604.18394 — "OpenGame: Open Agentic Coding for Games"** ·
    `https://arxiv.org/abs/2604.18394`
    Sustenta: data (20/04/2026), o `GameCoder-27B`, o `OpenGame-Bench` sobre 150 prompts. Entra
    no documento **como contraexemplo de nome parecido**, para evitar a confusão descrita em 3.2
    e em 8.8. Confiabilidade: preprint não revisado por pares; o resumo não traz os números de
    desempenho, o que registro.

14. **[F14] Frankfurt Kurnit Klein & Selz — "Inside the New SAG-AFTRA Interactive Media Agreement"** ·
    `https://technologylaw.fkks.com/post/102mewu/inside-the-new-sag-aftra-interactive-media-agreement-new-standards-for-ai-and-di`
    Sustenta: vigência do IMA (08/11/2022 a 31/10/2028), ratificação em julho de 2025, a
    distinção entre réplica vocal e visual, a exigência de consentimento "clear and conspicuous"
    com descrição específica **incluindo "Real-Time Generation"**, a proibição de consentimento
    em branco, e o relatório de uso em 90 dias. Confiabilidade: secundária, de escritório
    especializado em direito de tecnologia e mídia — usada porque as páginas da própria
    SAG-AFTRA retornaram 403 (seção 12).

## 12. Anexo — o levantamento bruto

### 12.1 Saída do verificador

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 17 (frontmatter diz 17)
efeitos ordem 2: 33 (frontmatter diz 33)
efeitos ordem 3: 22 (frontmatter diz 22)
prazo > horizonte (2046) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 8 · media 9 · baixa 0
confiança ordem 2: alta 4 · media 24 · baixa 5
confiança ordem 3: alta 0 · media 10 · baixa 12
links da seção 11: 14/14 respondem (frontmatter diz fontes: 14)
RESULTADO: ok
```

Comando: `python3 references/verificar.py tendencia-npcs-generativos-e-mundos-vivos.md --links`,
rodado em 12/09/2026.

**Leitura dos números, para não passar batido:**

- **Nenhum efeito ultrapassa o horizonte, em nenhuma ordem.** Com janela de vinte anos isso é
  esperado e é sintoma, não virtude: o mapa é limitado pela hipótese, não pelo calendário
  (§7.7).
- **A confiança cai monotonicamente com a ordem** — 8 altas na primeira, 4 na segunda, 0 na
  terceira. É o comportamento que a skill exige e que o verificador testa explicitamente.
- **Ausência de `baixa` na primeira ordem é deliberada.** Efeito de primeira ordem cujo
  mecanismo não sustentava ao menos confiança média foi removido (seção 12.3), não rebaixado.
- **Os 14 links respondem.** Duas fontes primárias ficaram de fora por 403 e duas por truncagem;
  estão listadas em 12.4 com o custo de cada ausência declarado.
- **A primeira contagem manual que eu fiz da segunda ordem deu 23 média e 6 baixa; o
  verificador deu 24 e 5.** Corrigi a tabela da §7.7 pelo verificador. Registro o erro aqui
  porque ele é exatamente o motivo de a skill mandar colar os números e não a palavra "passou".

### 12.2 Premissas assumidas por ausência no briefing

Repetidas aqui porque a skill manda que apareçam onde possam ser auditadas, e não só na prosa
da seção 2:

1. O recorte "mídia e interação" cobre jogo comercial, independente e simulação jogável; exclui
   uso militar, treinamento corporativo e pesquisa em ciência social (tema 6).
2. A nota sobre o Brasil trata de parque de hardware, dublagem e regulação — não de tamanho de
   mercado.
3. O horizonte de 2046 é longo o bastante para que a restrição relevante seja "se", não
   "quando". Consequência declarada: nenhum efeito ultrapassa o horizonte, e isso é sintoma e
   não virtude (§7.7).
4. Não se assume inverno de IA nem colapso de fornecimento de computação (§7.5, item 1 e 5).
5. **Não houve rebaixamento de confiança por entrevista pulada**, porque o briefing veio
   completo — conforme a regra do §0 da skill, revisada em 10/09.

### 12.3 Efeitos cortados na bateria do §6

**`e3.3` — "Cursos de game design reorganizam o currículo em torno de direção de sistemas."**
Motivo do corte: é um dos quatro efeitos que a skill proíbe nominalmente por servir a qualquer
tema. Sem o nome de um curso concreto e um mecanismo que o ligue ao efeito pai, é ruído.
Texto integral como estava: *"A formação em design de jogos deixa de ensinar escrita de diálogo
e passa a ensinar direção de sistemas e definição de restrição, e disciplinas de narrativa
interativa perdem carga horária para disciplinas de avaliação."* Se alguém quiser recuperá-lo,
precisa de: o nome de um programa que tenha feito isso, a data, e a matriz antes e depois.

**`e1.4` — "Surge a profissão de curador de comportamento de NPC."**
Motivo do corte: "surge uma nova profissão" é genérico por definição. O conteúdo aproveitável
foi absorvido por `e1.1`, que nomeia a origem concreta (times de avaliação adversarial vindos de
laboratório de IA, não de QA de jogos) e o mecanismo (a competência exigida muda de reproduzir
caso para caracterizar distribuição).

**`e14.3` — "Reguladores criam uma categoria nova para jogos com IA."**
Motivo do corte: proibido pela skill sem nome de regulador e mecanismo. Reescrito e distribuído
entre `e14.1` (classificação indicativa brasileira e equivalentes, com o mecanismo de avaliar
guardrail em vez de amostra) e `e11.2` (SB 243, NY S 9051, GUARD Act — nomeados, com o
mecanismo de a lei descrever função e não contêiner).

**`e12` na redação original** — *"o custo de inferência cai e mundos persistentes se
generalizam"*. Não removido, **reescrito**, por ser extrapolação linear pura (§7.2). A evidência
contrária estava dentro do próprio documento: redução de custo de 1000× já ocorrida [F3] sem
generalização correspondente.

### 12.4 Fontes que não abriram, e o que isso custou ao documento

| Fonte tentada | O que aconteceu | O que ficou sem apoio primário |
|---|---|---|
| `sagaftra.org` — página do IMA 2025 | **HTTP 403** | Percentual de aprovação da ratificação; duração exata da greve. Substituída por [F14]. |
| `sagaftra.org` — nota de aprovação pelos membros | **HTTP 403** | idem |
| `playinzoi.com/en/news/8419` — página oficial do Smart Zoi | Conteúdo truncado | Os limites do Smart Zoi (5× de velocidade, recomendação de desligar, requisito de placa de topo). **O parágrafo está marcado no texto como secundário**, e o efeito e6.3 depende dele. |
| `pcgamer.com` — demo ao vivo do Smart Zoi | Voltou só cabeçalho e formulário de assinatura | A avaliação jornalística independente do Smart Zoi. **Não usei nada dessa fonte**, nem pelo resumo de busca. |
| `abragames.org` — fact sheet em PDF | PDF ilegível na extração | Todo o dado quantitativo sobre a indústria brasileira. Consequência: a seção 3.6 não tem cifra de mercado. |
| `partner.steamgames.com` — documentação de declaração de IA | A página devolvida era só o índice do Steamworks | O texto literal da política da Valve e a distinção formal entre conteúdo pré-gerado e gerado em tempo de execução. Sustentei a existência da regra por [F7], que mede a declaração em campo, e **não cito a redação da política**. |

### 12.5 Buscas feitas e o que cada uma rendeu

| # | Consulta | Rendeu |
|---|---|---|
| 1 | `generative NPC LLM game 2026 Inworld Convai adoption` | Muito conteúdo gerado para busca; útil só para localizar [F1] e o movimento Inworld→B2B |
| 2 | `NVIDIA ACE autonomous game characters 2026 shipping games` | [F1] |
| 3 | `Retail Mage Steam AI NPC game reviews Jam & Tea Studios` | [F2], [F3] |
| 4 | `arXiv 2026 LLM agents game NPC benchmark generative agents memory` | Confirmou que memória de agente tem benchmark próprio; nada citável diretamente |
| 5 | `Valve Steam AI content disclosure policy percentage of games 2026 data` | [F7], e três agregadores com números conflitantes entre si |
| 6 | `SAG-AFTRA video game agreement AI voice terms 2025 2026 digital replica` | Levou a [F14] depois dos 403 |
| 7 | `Ubisoft NEO NPC 2026 status "Teammates" AI NPC shipped` | [F4], [F5] |
| 8 | `"NPC" IA generativa jogos brasileiro estúdio 2026 personagem autônomo` | **Nada primário.** Só conteúdo de portal e agregadores em português, sem dado original. Registro como busca que não deu em nada, e é significativo: não encontrei cobertura brasileira com dado próprio sobre o tema. |
| 9 | `inZOI Smart Zoi on-device AI player reception performance criticism 2026` | Material secundário útil; a fonte primária truncou |
| 10 | `Fable Simulation Thistle Gulch SAGA agents demo status 2026` | [F12] |
| 11 | `opengameagent github runtime LLM agents games open source` | [F11], [F13], e a confusão de nomes documentada em 3.2 |
| 12 | `Character.AI minors ban companion chatbot regulation 2026 law age verification` | [F10], SB 243 e NY S 9051 |
| 13 | `Modbox GPT-3 NPC 2021 ... demo` | [F9] e a correção de autoria (item 8.1) |
| 14 | `"Stop Killing Games" European Citizens Initiative signatures status 2026` | [F8] |
| 15 | `Abragames censo indústria brasileira de games 2026` | **Nada utilizável.** Dado de 2022 por terceiro; PDF primário ilegível |
| 16 | `PL 2338 marco legal inteligência artificial Brasil 2026 status` | **Conflitante.** Fontes divergem sobre o estágio. Não afirmei nada além de "tramita" |
| 17 | `cost per player hour LLM inference games runtime generative NPC economics` | Só site de curso. Descartado (item 8.7) |
| 18 | `testing QA generative NPC nondeterministic games guardrails jailbreak NPC` | Confirmou a natureza do problema; nada com dado de jogo. Sustenta e1 conceitualmente, não empiricamente |
| 19 | `GDC State of the Game Industry 2026 survey generative AI` | [F6] |
| 20 | `Replika ERP removal 2023 users grief backlash` | Precedente empírico para e11; usado na prosa como precedente, não como fonte numerada, porque não abri o estudo original |
| 21 | `AI Dungeon 2021 OpenAI content filter backlash` | Precedente para e8.1 e W4; idem — usado como precedente, não como fonte numerada |

**Nota sobre as buscas 20 e 21.** Os dois precedentes (Replika, fevereiro de 2023; AI Dungeon,
abril de 2021) aparecem na prosa das seções 4, 5.1 e 6 porque sustentam mecanismos, e **não
entraram na lista numerada da seção 11 porque não abri as páginas primárias** — o que li foram
os resultados de busca. Estão descritos em termos que os resultados sustentam (houve remoção,
houve luto documentado, houve moderação manual e revolta, houve falha que expôs histórias
privadas) e nada além disso. Quem for usar este mapa deve abri-los antes de citar.

### 12.6 Caminhos abandonados

**A raiz que eu tentei e descartei: "a autoria se desloca do roteiro para o guardrail".** Era o
candidato mais bonito a quarta raiz, e caiu no teste do §6.4 do próprio método: se R1 não
acontece, ela não acontece. Logo é efeito, não raiz. Virou `e3`, e o teste que a derrubou está
documentado na seção 4.5.

**O ramo da simulação social como método** (o que acontece com a pesquisa quando mundos vivos
viram instrumento) foi cortado por invadir o tema 6. Aparece só como fronteira em e2.2.1.

**O ramo da narrativa gerada** (história emergente, coautoria, novela visual) foi cortado por
ser o tema 8. O que sobrou aqui é apenas o que o **personagem** faz com a narrativa, não o que a
narrativa faz sozinha.

**O ramo do companheiro digital fora do jogo** (tema 19) aparece só onde a regulação o alcança
por fora — e11.2 —, porque aí o efeito entra no jogo por via jurídica, não por via de produto.

**Tentei e não consegui:** montar um efeito de primeira ordem no eixo **ecológico** com apoio
empírico. Não há número público sobre consumo de inferência em jogo comparado a renderização.
Ficou como e12.2, de segunda ordem, sinal fraco, confiança baixa. Está declarado em 5.2 em vez
de escondido.

### 12.7 O contraexemplo que quase não entrou

Registrado aqui porque é o argumento mais forte contra um ramo inteiro deste mapa e não me
ocorreu na primeira passada: **o roguelike**. Faz cinquenta anos que existem jogos em que dois
jogadores não jogam a mesma coisa, e eles têm wiki, têm guia, têm crítica e têm speedrun — com
categorias e semente fixa. Quer dizer: a comunidade **já resolveu** o problema que e4 prevê,
para um caso mais simples. O contra-argumento que mantém e4 de pé é que o roguelike varia
**arranjo** dentro de um vocabulário fechado que a wiki pode enumerar, enquanto o personagem
generativo varia o **vocabulário**. Mas isso é uma distinção que eu construí para salvar o
efeito, e ela pode não se sustentar. É o primeiro lugar onde eu atacaria este mapa, e por isso
está escrito aqui em vez de ficar de fora.
