---
tema: "Sociedades simuladas: a simulação como instrumento de investigação"
slug: sociedades-simuladas-a-simulacao-como-instrumento-de-investigacao
autor_login: mjbo
zona_de_interesse: "Simulação e mundos"
data: 2026-09-17
horizonte: 2031
publico: "quem projeta mídia e interação"
recorte_geografico: "global, com nota sobre o Brasil"
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 10
efeitos_ordem_3: 15
tecnologias_citadas: [generative agents, OASIS, AgentSociety, Concordia, PIANO/Project Sid, usuarios sinteticos, populacao sintetica, ARTAI, agent-based modeling classico, LLMs abertos de peso congelado]
fontes: 14
confianca: media
experimento: "Duas cidades, um algoritmo: replicação cega de um efeito conhecido"
skill_usada: futurizacao-mjbo
publico_ok: false
---

## 1. Resumo

Colocar uma sociedade de agentes num ambiente controlado e observar o que emerge deixou de ser
demonstração e virou instrumento. Entre 2023 e 2026 a linha saiu de 25 agentes numa vila
(Park et al.) para simuladores abertos que declaram um milhão de agentes (OASIS) e plataformas
que rodam 10 mil agentes e 5 milhões de interações para estudar polarização, renda básica e
choques externos (AgentSociety). O custo publicado é da ordem de centavos por passo de
simulação com 100 agentes, o que tira o preço da lista de barreiras. O que sobra como barreira
é a validade: benchmarks recentes mostram que usuários sintéticos erram a resposta individual
por 14 a 22 pontos percentuais contra uma linha de base demográfica trivial, e inflam a
diferença entre grupos de 1,3 a 4,7 vezes — ou seja, produzem um mundo mais estereotipado que o
real. O mapa aposta que até 2031 a simulação social entra no processo de design de plataforma e
no repertório regulatório como pré-triagem barata e obrigatória de olhar, não como prova; e que
a disputa profissional e ética se desloca de "dá para simular?" para "quem assina que esta
sociedade sintética se parece com a real?".

## 2. O tema

O objeto aqui não é o jogo nem o assistente de produtividade: é a simulação social como
**método**. Uma sociedade de agentes — cada um com memória, personalidade e capacidade de falar
com os outros em linguagem natural — é posta num ambiente configurável, roda-se a possibilidade,
e observa-se o que emerge. O paralelo que a disciplina usa é o túnel de vento: não se voa no
túnel, testa-se a asa nele.

Onde isso encosta em mídia e interação: o ambiente configurável mais óbvio é uma plataforma de
mídia. Simular uma rede social antes de lançá-la significa testar o algoritmo de recomendação,
a política de moderação e a dinâmica de desinformação num lugar onde ninguém se machuca. E a
interface do instrumento é ela própria um problema de design: ver por dentro mil agentes —
quem falou com quem, por que decidiu o que decidiu, onde a riqueza se concentrou — é um problema
de visualização e de interação tão difícil quanto o de simulação.

Merece mapa de futuro por três razões. Primeira: a curva de escala foi de 25 para 10⁶ agentes em
três anos, e escala aqui muda a natureza do resultado (efeitos macro de polarização e manada só
aparecem acima de certo número). Segunda: já existe uma pressão institucional — avaliação de
risco sistêmico de plataformas na UE, pesquisa de opinião com custo em alta — que cria demanda
por um instrumento assim antes que ele esteja validado. Terceira: é um caso raro em que a
tecnologia emergente e a crítica a ela crescem no mesmo ritmo, o que dá material empírico para
os dois lados do mapa.

Fronteira declarada: personagens autônomos em jogos (tema 7), mercados de máquinas com dinheiro
real (tema 5) e agentes com corpo no mundo físico (tema 9) ficam de fora. Modelagem baseada em
agentes clássica (NetLogo, regras fixas) fica de fora da Seção 4 por ser madura — mas está na
Seção 3, porque é o chão contra o qual a novidade se mede.

## 3. Onde isso está hoje

**O que existe e funciona, com gente usando.**

O marco fundador é `Generative Agents` (Park et al., submetido em abril de 2023): 25 agentes num
ambiente sandbox ao estilo The Sims, com uma arquitetura de três peças — memória em linguagem
natural, reflexão (sintetizar memórias em conclusões de nível mais alto) e planejamento. O
resultado que virou folclore: a partir da intenção de um único agente de dar uma festa, os
demais espalharam convites ao longo de dois dias, fizeram amizades, convidaram-se para encontros
e apareceram juntos na hora certa, sem roteiro ([1]).

`OASIS` (CAMEL-AI, arXiv 2411.11581, primeira submissão em 18/11/2024, cinco versões até março
de 2025) é hoje o simulador aberto de referência para mídia social: declara suporte a até um
milhão de agentes, 21 a 23 ações (seguir, comentar, repostar), sistemas de recomendação por
interesse e por hot-score espelhando X e Reddit, e replica três fenômenos conhecidos —
difusão de informação, polarização de grupo e efeito manada. O achado metodologicamente
importante: **grupos maiores produzem dinâmica de grupo mais acentuada e opiniões mais
diversas**, isto é, escala não é só mais do mesmo ([2]). O repositório está vivo (5,2 mil
estrelas, atividade até agosto de 2026, Apache 2.0) e publica custo: cerca de ¥0,027 por passo
para 100 agentes com Qwen Plus, ¥0,717 com Qwen Max, escalando proporcionalmente ([3]).

`AgentSociety` (Tsinghua, arXiv 2502.08691, fev/2025, revisto em abril de 2026) roda mais de 10
mil agentes gerando 5 milhões de interações em ambiente urbano, social e econômico, e foi usada
como bancada para cinco questões de política: polarização, propagação de mensagens inflamatórias,
efeitos de renda básica universal, choques externos (furacão) e sustentabilidade urbana ([4]).

`Concordia` (Google DeepMind) é a biblioteca de propósito geral: arquitetura entidade-componente
com um **Game Master** — inspirado em RPG de mesa — que simula o ambiente e resolve em resultado
o que os agentes declaram fazer em linguagem natural. 1,7 mil estrelas, 368 forks, 1.338 commits,
distribuída no PyPI como `gdm-concordia`; usos declarados incluem ciências sociais, segurança de
IA, economia, geração de dado sintético e teste de serviços reais por uso simulado ([5]).

`Project Sid` (Altera.AL, arXiv 2411.00114, out/2024) levou de 10 a mais de 1000 agentes para
dentro do Minecraft com a arquitetura PIANO, e relatou emergência de papéis especializados,
adesão e mudança de regras coletivas e transmissão cultural e religiosa. Limitação declarada
pelos próprios autores: os agentes são fracos em visão e raciocínio espacial, e não têm
impulsos inatos (sobrevivência, curiosidade) que catalisem desenvolvimento societal genuíno ([6]).

**O que existe como paper, protótipo ou demanda, mas não está em produção.**

`ARTAI` (arXiv 2409.12396) é uma plataforma de avaliação que usa simulação para estimar risco
societal de algoritmos de recomendação **antes** do deploy, explicitamente posicionada como
ferramenta possível de conformidade com a avaliação de risco sistêmico exigida pela regulação
europeia ([7]). Vale a ressalva de honestidade: o PDF veio comprimido na extração e não consegui
confirmar autoria e filiação — trato a fonte como indicativa da existência da linha de trabalho,
não como evidência forte.

A frente de política pública está se organizando como comunidade: o workshop `PoliSim@CHI 2026`
(Barcelona) reúne HCI, PLN, IA responsável e formuladores de política em torno de simulação com
agentes para política. É nele que aparece a peça mais dura do levantamento: Luo, Arora e Guirado
(Berkeley, 09/04/2026) argumentam que simulações de política exigem **precondições fortes** — não
tratar simulação de população marginalizada como saída neutra; não simular uma população sem
participação constitutiva dela; não simular sem cadeia de decisão legível, validação independente
e mecanismo formal de recurso. Os exemplos de mau uso que eles citam são concretos: simulação de
evacuação explorada para maximizar dano, simulação de população imigrante usada para otimizar
estratégia de deportação ([8]).

**A crítica, que amadureceu junto.**

Duas fontes fazem o contrapeso empírico. Gao, Lee, Burtch e Fazelpour (PNAS, junho de 2025)
testaram oito LLMs em mil sessões independentes cada no jogo 11-20 (profundidade de raciocínio
estratégico, nível-k): humanos ficam em torno do nível 3 (escolhem 17), os modelos concentraram
em 20 ou 19 (nível 0 ou 1), com divergência estatisticamente significativa; modelo maior não foi
melhor (GPT-4 menos humano que GPT-3.5), e até `Centaur`, treinado sobre 60 mil participantes
humanos, não replicou o comportamento. A imagem que fecha o artigo — esperar entender
comportamento humano assim seria "entrevistar um papagaio para conhecer o estado mental do dono"
— é a frase mais citável contra o entusiasmo ([9]).

Um benchmark cross-domain de 2026 (arXiv 2607.26348, sob revisão) é ainda mais específico, e é a
fonte numérica central deste mapa. Testando quatro modelos (Claude Haiku 4.5 e Sonnet 4.6;
Llama-3.1-8B e 3.3-70B) contra GSS (10 questões, EUA) e WVS (16 questões, 63 países), encontrou
duas falhas que replicam em todos: (a) nenhuma vantagem individual — no WVS, de 13,9 a 21,8 pontos
percentuais **menos** acurados que uma linha de base demográfica; (b) sobre-determinação
demográfica — os modelos tratam demografia como mais preditiva de atitude do que ela é entre
pessoas reais, inflando a diferença entre segmentos de 1,3× a 4,1× (GSS) e de 2,0× a 4,7× (WVS),
com taxa de decisão errada em torno de 50% (GSS) e 72% (WVS). A divergência agregada (Jensen-Shannon)
fica baixa — 0,011 a 0,090 no GSS —, o que é exatamente a armadilha: **a média parece boa
enquanto a estrutura está errada** ([10]).

Na literatura de simulação social há nome para isso: a falácia da fluência e o vão de validade
micro-macro — um agente que fala de forma convincente não garante que o agregado da sociedade
simulada corresponda ao mundo ([11]).

**Nota sobre o Brasil.** O que está em pauta aqui não é ainda a simulação como método de pesquisa,
e sim o seu primo perigoso: a persona sintética usada como ator político real. O monitoramento da
Data Privacy Brasil publicado em 15/09/2026 documenta perfis inteiramente gerados por IA
simulando participação em atividade política (inclusive uma caminhada), descritos como "nova forma
de fabricação artificial de apoio e engajamento", e registra que ~63% de 413 casos analisados não
traziam qualquer indicação de uso de IA, apesar da regra do TSE que exige identificação explícita,
destacada e acessível de conteúdo sintético em propaganda eleitoral ([12]). Para o mapa isso
importa por um motivo: no Brasil, a palavra "população sintética" já chega ao debate público
contaminada pelo uso eleitoral, antes de chegar como instrumento de pesquisa.

**Quem está construindo:** CAMEL-AI (OASIS), Tsinghua FIB Lab (AgentSociety), Google DeepMind
(Concordia), Altera.AL (Project Sid), Stanford (linha fundadora), e uma camada comercial de
"consumidores sintéticos" em pesquisa de mercado que aparece nas buscas mas que este mapa
deliberadamente não usa como fonte de número, pelo motivo declarado na Seção 12.

## 4. As disrupções-raiz

### D1 — O agente com modelo de linguagem como unidade de simulação

**O que torna possível que antes não era.** Modelagem baseada em agentes existe desde os anos
1990, mas o agente era uma regra: se vizinho A, então B. O agente com LLM tem memória episódica,
reflexão e **fala** — e isso permite simular o que a ABM clássica não alcançava: deliberação,
persuasão, mudança de opinião por argumento, norma social negociada em linguagem. Também permite
algo novo de método: a simulação passa a produzir **texto interpretável** (o diário do agente, a
justificativa da decisão), não só séries numéricas.

**O que invalida.** Ameaça dois arranjos. O primeiro é o da modelagem por regras fixas como forma
canônica de estudar dinâmica social: quem calibra parâmetro de regra passa a competir com quem
escreve persona. O segundo, mais sensível, é o do painel amostral como única fonte legítima de
"o que as pessoas fariam" na fase exploratória de produto — não substituído, mas deslocado para
depois de uma pré-triagem sintética.

**Por que agora.** Três coisas mudaram entre 2021 e 2026: a capacidade de seguir persona e manter
coerência ao longo de milhares de passos; o custo por chamada, que caiu ao ponto de OASIS publicar
centavos por passo com 100 agentes ([3]); e a existência de infraestrutura aberta reutilizável
(Concordia, OASIS, AgentSociety) — antes cada laboratório reconstruía o simulador do zero.

**Veredito: disrupção-raiz.** Passa nos três.

**O que falta para se concretizar.** Validação. Enquanto o benchmark mostrar sobre-determinação
demográfica de até 4,7× ([10]) e falha de raciocínio estratégico ([9]), o instrumento gera
hipótese, não resultado.

### D2 — Escala: de dezenas para milhões de agentes, a preço de nuvem comum

**O que torna possível que antes não era.** Não é "o mesmo, maior". Fenômeno macro — polarização,
cascata de informação, manada — não emerge com 25 agentes; emerge com milhares. OASIS relata
explicitamente que escala maior produz dinâmica de grupo mais acentuada e opiniões mais diversas
([2]), e AgentSociety opera na faixa de 10 mil agentes e 5 milhões de interações para reproduzir
padrões conhecidos ([4]). Ou seja: a escala é o que transforma a demonstração de comportamento
individual convincente em **observação de fenômeno coletivo**.

**O que invalida.** O monopólio da plataforma sobre o experimento social em larga escala. Até aqui,
a única entidade capaz de rodar um experimento com um milhão de usuários era quem tinha um milhão
de usuários. Um simulador aberto com um milhão de agentes muda quem pode fazer a pergunta — ainda
que não resolva quem pode responder com autoridade.

**Por que agora.** Engenharia de escalonamento (agendamento paralelo, agentes baratos misturados a
agentes por regra), modelos pequenos suficientemente bons e licença aberta. A curva concreta: 25
agentes em 2023 ([1]) → 1000+ em 2024 ([6]) → 10⁶ declarados em 2024–2026 ([2][3]).

**Veredito: disrupção-raiz.** Passa nos três, com a ressalva de que "um milhão" é capacidade
declarada de plataforma; os estudos publicados operam confortavelmente na casa dos milhares.

**O que falta.** Um benchmark público de validade macro — a prova de que a sociedade simulada
reproduz um fenômeno conhecido que ela não viu no treino.

### D3 — A simulação como artefato de prestação de contas (emergente, com ressalva)

**O que torna possível.** Exigir de quem lança uma plataforma que apresente o que aconteceu antes
de acontecer. ARTAI existe precisamente como plataforma de avaliação de risco societal de
algoritmo de recomendação antes do deploy, posicionada junto à obrigação europeia de avaliação de
risco sistêmico ([7]); e a comunidade de política pública já está discutindo as condições de uso
antes de haver uso em massa ([8]).

**O que invalida — e aqui está a ressalva.** Nada, ainda. Não existe obrigação legal de simular;
existe obrigação de avaliar e mitigar risco, e simulação é uma forma possível de tentar. Pelo
critério da Etapa 3 da skill, isso não é disrupção consumada: é **emergente**, entra com aposta
declarada. O que ela ameaçaria, se se concretizar, é o modelo "lançar e medir" — o teste A/B em
gente de verdade como primeiro contato entre um desenho e suas consequências.

**Por que agora.** Convergência de enforcement regulatório sobre recomendação e disponibilidade de
simuladores abertos que produzem artefato inspecionável (log, replay, número).

**O que falta.** Um caso — um só — em que um resultado de simulação tenha mudado a decisão de um
regulador ou de um tribunal. Enquanto não houver, é bibliografia.

**Rejeitadas no teste (não entram aqui).** Modelagem baseada em agentes clássica: falha no item 1
(não torna possível nada que antes não era). Gêmeo digital de cidade alimentado por sensor: falha
no item 1 pela mesma razão — é melhoria de instrumentação. Persona sintética em pesquisa de mercado
vendida como produto: falha no item 2, porque não invalida o painel, é vendida como complemento
dele — e, pelo benchmark, ainda perde de uma linha de base demográfica ([10]).

## 5. A roda dos futuros

```yaml
roda:
  disrupcoes_raiz:
    - id: D1
      nome: "O agente com modelo de linguagem como unidade de simulação"
    - id: D2
      nome: "Escala: de dezenas para milhões de agentes a preço de nuvem comum"
    - id: D3
      nome: "A simulação como artefato de prestação de contas (emergente)"
  efeitos:
    - id: e1
      de: [D1, D3]
      efeito: "O teste de dinâmica social antes do lançamento entra no processo de design de plataforma como etapa nomeada."
      sinal: medio
      prazo: 2028
      confianca: media
      filhos:
        - id: e1.1
          efeito: "Times de produto passam a ter um papel dedicado de engenharia de simulação social, entre pesquisa de usuário e data science."
          sinal: fraco
          prazo: 2029
          confianca: media
          filhos:
            - id: e1.1.1
              efeito: "Cursos de design de interação passam a ensinar simulação como método, ao lado de teste com usuário."
              sinal: fraco
              prazo: 2031
              confianca: baixa
            - id: e1.1.2
              efeito: "Ferramenta de simulação vira item de compra com fornecedor auditado, e não mais script interno."
              sinal: fraco
              prazo: 2031
              confianca: baixa
        - id: e1.2
          efeito: "Relatórios de risco sistêmico de plataformas passam a anexar resultados de simulação como evidência de esforço de mitigação."
          sinal: fraco
          prazo: 2029
          confianca: media
          filhos:
            - id: e1.2.1
              efeito: "Reguladores exigem reprodutibilidade da simulação — semente, versão de modelo, log de interação."
              sinal: fraco
              prazo: 2031
              confianca: baixa
            - id: e1.2.2
              efeito: "Não ter simulado passa a pesar contra a plataforma em litígio, como não ter feito teste de colisão."
              sinal: fraco
              prazo: 2031
              confianca: baixa
    - id: e2
      de: [D1, D2]
      efeito: "O usuário sintético se estabiliza como pré-triagem barata dentro do ciclo de produto, e não como substituto do painel humano."
      sinal: forte
      prazo: 2027
      confianca: alta
      filhos:
        - id: e2.1
          efeito: "Institutos de pesquisa vendem painel híbrido: humano para calibrar, sintético para varrer o espaço de opções."
          sinal: medio
          prazo: 2028
          confianca: media
          filhos:
            - id: e2.1.1
              efeito: "O preço da varredura quantitativa cai e o valor do instituto migra para a calibração e o aval."
              sinal: fraco
              prazo: 2030
              confianca: baixa
            - id: e2.1.2
              efeito: "Surge um mercado de certificação de população sintética, vendendo o aval que o simulador não tem."
              sinal: fraco
              prazo: 2031
              confianca: baixa
        - id: e2.2
          efeito: "Decisões erradas causadas por inflação de diferença entre grupos aparecem documentadas publicamente."
          sinal: medio
          prazo: 2028
          confianca: media
          filhos:
            - id: e2.2.1
              efeito: "Relatar divergência agregada e inflação de segmento vira praxe, como margem de erro é praxe em pesquisa de opinião."
              sinal: fraco
              prazo: 2030
              confianca: baixa
            - id: e2.2.2
              efeito: "Um produto lançado sobre evidência sintética e rejeitado pelo público vira o caso citado em toda discussão do método."
              sinal: fraco
              prazo: 2031
              confianca: baixa
    - id: e3
      de: [D1]
      efeito: "Laboratórios de ciências sociais passam a usar simulação como etapa de pré-registro: a hipótese é testada no simulador antes de ir a pessoas."
      sinal: medio
      prazo: 2028
      confianca: media
      filhos:
        - id: e3.1
          efeito: "Comitês de ética passam a revisar simulações de populações reais, olhando representação e consentimento da comunidade representada."
          sinal: fraco
          prazo: 2029
          confianca: media
          filhos:
            - id: e3.1.1
              efeito: "Comunidades representadas exigem participação no desenho da simulação que fala por elas."
              sinal: fraco
              prazo: 2031
              confianca: baixa
        - id: e3.2
          efeito: "Reprodutibilidade vira o problema técnico central: trocar a versão do modelo muda o resultado da sociedade simulada."
          sinal: medio
          prazo: 2027
          confianca: media
          filhos:
            - id: e3.2.1
              efeito: "Simuladores passam a fixar modelos abertos de peso congelado como condição de replicação, sacrificando qualidade por estabilidade."
              sinal: fraco
              prazo: 2030
              confianca: baixa
    - id: e4
      de: [D2]
      efeito: "Plataformas de simulação se consolidam como infraestrutura aberta com custo por passo publicado, como se publica preço de nuvem."
      sinal: forte
      prazo: 2027
      confianca: alta
      filhos:
        - id: e4.1
          efeito: "Rodar uma sociedade de centenas de agentes no laptop ou no navegador vira exercício de sala de aula."
          sinal: medio
          prazo: 2028
          confianca: media
          filhos:
            - id: e4.1.1
              efeito: "Forma-se uma cultura de simulação caseira, com mundos compartilhados como hoje se compartilha notebook e mod."
              sinal: fraco
              prazo: 2030
              confianca: baixa
            - id: e4.1.2
              efeito: "O volume de mundos simulados publicados excede a capacidade de qualquer um auditá-los."
              sinal: fraco
              prazo: 2031
              confianca: baixa
        - id: e4.2
          efeito: "Custo deixa de ser a barreira de entrada e a barreira passa a ser a validação."
          sinal: medio
          prazo: 2028
          confianca: media
          filhos:
            - id: e4.2.1
              efeito: "Um benchmark público de validade macro — replicar fenômeno conhecido não visto no treino — vira condição de publicação."
              sinal: fraco
              prazo: 2030
              confianca: baixa
    - id: e5
      de: [D2, D3]
      efeito: "O desenho de plataforma passa a ser avaliado por comportamento emergente simulado, e não só por métrica de engajamento medida."
      sinal: medio
      prazo: 2029
      confianca: media
      filhos:
        - id: e5.1
          efeito: "Uma métrica de saúde de rede derivada de simulação entra no painel de produto ao lado de retenção."
          sinal: fraco
          prazo: 2030
          confianca: baixa
          filhos:
            - id: e5.1.1
              efeito: "Otimizar contra o simulador produz efeito Goodhart: desenho que pontua bem na simulação e falha no mundo."
              sinal: fraco
              prazo: 2031
              confianca: baixa
    - id: e6
      de: [D1, D2]
      efeito: "Operações de influência usam os mesmos simuladores abertos para ensaiar campanhas antes de executá-las."
      sinal: fraco
      prazo: 2028
      confianca: media
      filhos:
        - id: e6.1
          efeito: "Defesa e ataque passam a usar o mesmo instrumento, com a mesma documentação pública."
          sinal: fraco
          prazo: 2029
          confianca: baixa
          filhos:
            - id: e6.1.1
              efeito: "A publicação de simuladores sociais enfrenta debate de uso duplo semelhante ao de ferramentas de segurança ofensiva."
              sinal: fraco
              prazo: 2031
              confianca: baixa
```

**O que o bloco não diz.**

Primeiro: a roda toda pende para a institucionalização — produto, regulação, academia — e quase
não olha para o uso vernacular. O único ramo que trata disso é `e4.1`, e ele é o mais frágil de
sustentar com fonte: tenho custo publicado ([3]) e não tenho nenhuma medida de adoção fora de
laboratório. Se eu estiver errado sobre a direção principal do mapa, é provável que o erro esteja
aí — pode ser que a simulação social se popularize primeiro como brinquedo e cultura, e só depois
como instrumento, exatamente o inverso da ordem que a roda assume.

Segundo: `e2` é o único efeito de 1ª ordem com confiança alta, e isso é deliberado — ele já está
acontecendo, é quase descrição do presente. Os efeitos que interessam ao tema (`e1`, `e5`, `e6`)
estão todos em sinal fraco ou médio. A roda é, nesse sentido, honestamente pobre de certezas.

Terceiro: os prazos assumem continuidade regulatória. Todo o ramo `e1.2` cai inteiro se a pressão
de avaliação de risco sistêmico afrouxar — e afrouxamento regulatório é exatamente o tipo de coisa
que este mapa não tem instrumento para prever.

Quarto: não há, em lugar nenhum da roda, um efeito que descreva o fracasso do método. Isso é uma
escolha estrutural do Futures Wheel (ele deriva consequências de uma disrupção assumida) e é uma
limitação séria. A Seção 7 e o cenário indesejável existem para compensar isso; não compensam
inteiramente.

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — o custo já está publicado.** Um repositório de simulação social publicar tabela
de preço por passo (¥0,027 para 100 agentes com Qwen Plus, [3]) é sinal de que a comunidade já
pensa em orçamento, não em viabilidade. Quando o debate migra de "é possível?" para "quanto
custa?", a tecnologia costuma estar a um passo de virar rotina.

**Sinal fraco 2 — os agentes não veem.** Project Sid registra que a maior limitação é visão e
raciocínio espacial ([6]). Isso é fraco hoje e enorme depois: significa que as sociedades
simuladas atuais são sociedades de texto. Quando a percepção visual entrar de verdade, o que vale
para simulação de rede social pode não valer para simulação de espaço físico compartilhado — e
metade da literatura atual vira específica de domínio sem que ninguém tenha avisado.

**Sinal fraco 3 — a ética chegou antes do uso.** Ter um artigo de precondições fortes para uso em
política pública em abril de 2026 ([8]), antes de haver uso disseminado em política pública, é
inversão rara da ordem habitual. Pode significar duas coisas opostas: que o campo aprendeu com
o ciclo anterior de IA, ou que quem está próximo já viu a demanda chegando pela porta dos fundos.

**Sinal fraco 4 — a média engana.** Divergência agregada baixíssima (0,011) com estrutura errada
([10]) é o sinal mais perigoso do levantamento, porque é invisível para quem valida por
comparação de médias — que é como quase todo mundo valida.

**Wildcard — um resultado de simulação vira evidência em decisão pública, e está errado.**
Um regulador, um juiz ou um secretário municipal decide com base num relatório que traz
população sintética como evidência principal; a decisão é tomada, aplicada, e depois se descobre
que a sociedade simulada exagerava a diferença entre grupos na exata faixa em que a decisão foi
calibrada — o efeito documentado de inflação de segmento de até 4,7× ([10]). O dano não seria a
simulação errada: seria a lição aprendida errada, com o campo inteiro sendo descartado por um
caso mal conduzido.

**Por que a probabilidade é baixa até 2031:** não há hoje nenhum caminho institucional que
aceite simulação como evidência principal. Avaliação de risco sistêmico pede demonstração de
esforço de mitigação, não prova; tribunal pede perícia com metodologia aceita; e o próprio campo
está produzindo, em 2026, a literatura que desqualifica esse uso ([8][9][10][11]). Para o
wildcard acontecer seria preciso que alguém pulasse a fila da validação — o que exige pressa
política, não maturidade técnica. É por isso que é wildcard e não efeito: baixa probabilidade,
impacto que reescreveria o mapa inteiro.

**Wildcard menor — a proibição por analogia eleitoral.** No Brasil, "população sintética" pode
ser regulada por reflexo do combate a perfis sintéticos em campanha ([12]), atingindo a pesquisa
como dano colateral de uma regra escrita para outro problema. Baixa probabilidade porque as duas
coisas estão em arenas diferentes — mas o vocabulário compartilhado é um risco real.

## 7. Contra o próprio mapa

**1. Qual efeito é só extrapolação linear do presente.** `e2` ("usuário sintético como pré-triagem
no ciclo de produto") e todo o seu ramo. Isso já acontece em 2026; o que eu fiz foi projetar a mesma
prática crescendo. Não há mudança de natureza ali — há barateamento e normalização. Pelo critério da
própria Etapa 3 da skill, `e2` é o pedaço mais maduro da roda, e ele está lá porque sustenta os
outros ramos, não porque seja informativo sobre o futuro. Quem ler o mapa procurando a parte
segura vai achar `e2`; quem ler procurando o que importa deve olhar `e1.2` e `e5.1.1`.

**2. Qual efeito assume velocidade de adoção sem caso comparável.** `e1.2.2` — "não ter simulado
passa a pesar em litígio até 2031". O comparável óbvio é o teste de colisão automotivo, que a
própria ementa do tema sugere: nos EUA, o programa de avaliação de veículos novos começa em 1978,
e a obrigatoriedade efetiva de desempenho em colisão se constrói ao longo de duas décadas, não de
cinco anos. Um segundo comparável, mais próximo: a avaliação de impacto de proteção de dados
levou da diretiva europeia de 1995 ao regime obrigatório de 2018 — mais de vinte anos entre o
princípio e a exigência com dente. Assumir que simulação social percorra esse caminho em cinco
anos é otimismo de calendário, e é o efeito que eu cortaria primeiro se tivesse que cortar um.

**3. Qual disrupção-raiz pode não se concretizar, e o que sobra.** D3 (simulação como artefato de
prestação de contas) é a mais frágil — ela já entrou classificada como emergente, com a ressalva
de que não invalidou nada. Se D3 cair, caem `e1.2` inteiro (quatro nós), `e1` perde metade da
razão de ser e `e5` perde o vetor institucional. Sobra um mapa menor e mais quieto: simulação como
ferramenta interna de time de produto e de laboratório acadêmico (D1 e D2 intactos), sem
consequência pública — o que é, note-se, um desfecho perfeitamente plausível e até mais provável
que o mapa principal.

**4. Que viés entrou aqui, e onde.** Dois, ambos localizáveis.

O primeiro é meu, como skill: viés de fonte acadêmica. O recorte pedia neutralidade, e o que fiz
foi montar quase todo o presente com arXiv e repositório. Isso não é neutro — é uma escolha que
sistematicamente sobrerrepresenta o que é publicável e subrepresenta o que é comercial e fechado.
O efeito concreto no mapa: `e4` ("infraestrutura aberta com custo publicado") tem confiança alta em
parte porque eu só olhei onde as coisas são abertas. Se metade do uso real de simulação social em
2026 estiver dentro de plataformas, sem paper, esse efeito está calibrado sobre a amostra errada.

O segundo é do recorte dado: "descartar o que já é comum em produto de massa". Essa régua é
útil, mas empurra o mapa para o institucional e o regulatório, porque é lá que estão as coisas
ainda não comuns. É provavelmente por isso que `e4.1` (simulação caseira, vernacular) ficou como
um galho fino e sem fonte, enquanto ramos regulatórios ganharam quatro nós. Não é que o vernacular
seja menos provável — é que a régua o empurrou para fora do foco.

Acrescento um quinto item, não pedido pela skill mas exigido pela honestidade do levantamento:
**a evidência mais forte que encontrei é contra o mapa, não a favor dele.** As duas fontes com
números concretos e metodologia visível ([9] e [10]) dizem que o instrumento não funciona para o
uso individual e que ele deforma estrutura de grupo. As fontes a favor são majoritariamente
declarações de capacidade de plataforma ("suporta até um milhão de agentes"), que é um tipo de
afirmação mais fraco. Um mapa construído sobre essa assimetria deveria ter confiança global média,
e é por isso que o frontmatter diz `media` e não `alta`.

## 8. O que a máquina errou

Quatro erros concretos desta rodada, todos pegos durante o processo:

**1. Citei uma plataforma de avaliação sem conseguir confirmar autoria.** O PDF do ARTAI
(arXiv 2409.12396) voltou da extração com o texto comprimido: a leitura confirmou o objeto e a
ligação com a regulação europeia, mas não autores nem instituição. A tentação era completar com
uma atribuição plausível. Registrei a limitação em vez disso, na Seção 3 e na Seção 11 — a fonte
entra como indicativa, não como evidência forte.

**2. Atribuição divergente numa fonte de crítica metodológica.** A busca listou o arXiv 2507.19364
como "Integrating LLM in Agent-Based Social Simulation: Opportunities and Challenges"; a leitura
do PDF devolveu outro título ("From the Fluency Fallacy to the Micro-to-Macro Validity Gap") e a
atribuição a Taillandier et al., 2024. Não consegui reconciliar as duas coisas nesta rodada. Uso o
conceito — falácia da fluência, vão de validade micro-macro — e sinalizo a divergência na Seção 11,
em vez de escolher uma das duas versões e apresentá-la como certa.

**3. Quase tratei "capacidade declarada" e "resultado publicado" como a mesma coisa.** "Um milhão
de agentes" é o que OASIS declara suportar; os estudos que li operam na casa dos milhares. Na
primeira montagem da Seção 4, D2 estava escrita como se o milhão fosse rotina. Corrigi com uma
ressalva explícita. É o mesmo tipo de erro que o autor da skill documentou no seu `DUVIDAS.md`:
aceitar o número mais impressionante sem olhar de onde ele vem e o que ele afirma exatamente.

**4. Uma fonte não abriu e eu poderia tê-la citado de memória.** A página da PNAS retornou 403;
consegui o mesmo artigo pelo repositório PMC. Se não tivesse conseguido, o artigo não poderia
entrar na Seção 11 — e ele é uma das duas peças centrais da crítica. Registro porque o caminho
fácil aqui era citar a partir do resumo da busca, sem ter aberto nada.

O que **não** foi conferido, e portanto é onde provavelmente mora o próximo erro: nenhum dos
números de custo de [3] foi reproduzido por mim, e a extração de arXiv via conversão para markdown
pode ter simplificado tabelas. Os valores de [10] — que sustentam boa parte da Seção 7 — vieram de
uma tabela convertida, num manuscrito ainda sob revisão por pares.

## 9. Três cenários para 2031

**Provável.** Em 2031, simular virou uma etapa barata e pouco prestigiada do trabalho: fica entre o
brainstorm e o protótipo, do lado das coisas que se fazem antes de gastar dinheiro com gente de
verdade. Todo time grande de plataforma tem alguém que roda sociedades sintéticas antes de mudar a
recomendação, e ninguém confunde isso com evidência — o resultado entra na conversa como "a
simulação sugere", no mesmo tom com que se cita um teste de usabilidade com cinco pessoas. A
academia usa mais: virou praxe rodar a hipótese no simulador antes de levá-la ao comitê de ética, e
o comitê de ética passou a perguntar sobre a simulação também. A regulação europeia aceita
resultados de simulação nos relatórios de risco sistêmico como demonstração de esforço, sem nunca
ter dito que eles provam alguma coisa. O instrumento existe, é usado, e é sistematicamente citado
com mais confiança do que merece.

**Desejável.** Em 2031, o campo tem um benchmark público de validade macro — um conjunto de
fenômenos sociais conhecidos que uma sociedade sintética precisa reproduzir sem tê-los visto — e
publicar simulação sem passar por ele é como publicar experimento sem grupo de controle. Toda
simulação vem com três números na primeira página: divergência agregada, inflação de diferença
entre segmentos e a taxa de decisão que teria sido errada. Populações representadas participam do
desenho das simulações que falam por elas, como pedem as precondições de Berkeley ([8]). O
resultado prático é modesto e valioso: a simulação social virou um bom gerador de hipóteses com
erro conhecido, e ninguém a vende como oráculo. *Para chegar lá* seria preciso que alguém
financiasse o benchmark — trabalho caro, sem glamour, que não vende plataforma — e que os três ou
quatro grupos que hoje dominam a infraestrutura aberta concordassem em ser medidos por ele antes
que qualquer um deles precise vender.

**Indesejável.** Em 2031, a pesquisa com pessoas encolheu onde era mais barata de cortar — a fase
exploratória — e o que sobrou foi um mundo de decisões calibradas sobre uma população que exagera
suas próprias divisões. Produtos são desenhados para segmentos que o simulador acha mais distintos
do que são; políticas públicas são pré-testadas em sociedades sintéticas cujo viés de modelo virou,
silenciosamente, viés da política. O primeiro caso público de erro grave vem de uma decisão tomada
com pressa política, e a reação é a errada: em vez de exigir validação, proíbe-se a categoria
inteira, e o instrumento morre junto com o uso indevido. *O sinal precoce disso, hoje*: um relatório
de política pública ou um deck de produto que apresente resultado de população sintética **sem**
apresentar a comparação com dado humano ao lado. Não é a simulação errada que avisa — é a ausência
da calibração no mesmo documento.

## 10. O experimento

**Duas cidades, um algoritmo: replicação cega de um efeito conhecido.**

**O que é.** A turma monta duas instâncias da mesma rede social simulada, com OASIS ou Concordia,
povoadas por algumas centenas de agentes com perfis derivados de uma distribuição demográfica
declarada. As duas instâncias são idênticas em tudo, exceto no algoritmo de recomendação: uma por
interesse, outra por hot-score (as duas já disponíveis no OASIS). Injeta-se a mesma informação
falsa nas duas, no mesmo ponto da rede, e mede-se alcance, velocidade e polarização de opinião ao
longo de N passos. Antes de rodar, cada grupo registra sua previsão por escrito — qual das duas
cidades polariza mais, e quanto. O ponto do experimento não é descobrir qual algoritmo é pior: é
medir a distância entre o que a turma previu, o que a simulação produziu, e o que a literatura já
mediu com gente de verdade sobre o mesmo fenômeno.

**Que pergunta responde.** A pergunta de 2ª ordem do tema, na sua forma operacional: *quem valida
que a sociedade sintética se parece com a real?* Aqui a validação é feita pela turma, à mão, sobre
um fenômeno pequeno — e é isso que torna a pergunta concreta em vez de filosófica.

**Que tecnologia emergente usa e por quê.** Agentes com LLM em escala de centenas (D1 + D2). Não dá
para fazer com tecnologia madura: em NetLogo, a regra de propagação é escrita por quem faz o
experimento, então o resultado é consequência da regra, não observação. O interesse aqui é
justamente que ninguém escreveu a regra de quem repassa a mentira — ela emerge da conversa entre
os agentes, e pode emergir errada. Isso é o que a ABM clássica não oferece.

**O que a turma faz em sala.** Divide-se em grupos; cada grupo registra sua previsão antes de rodar;
roda-se as duas instâncias (o custo publicado sugere ordem de centavos a poucos reais por rodada
com modelo barato, [3]); compara-se previsão × simulação × literatura. Em seguida, a parte que
importa: cada grupo procura **um** número no seu resultado que ele não conseguiria defender diante
de alguém que perguntasse "e como você sabe que essa sociedade se parece com a nossa?". A discussão
final é sobre esses números, não sobre o gráfico bonito.

**O que faria mudar de ideia sobre o mapa.** Se as duas instâncias, rodadas com a mesma semente e
mesma configuração em dias diferentes ou com versões diferentes do modelo, produzirem resultados
qualitativamente divergentes — uma cidade polarizando e a outra não —, então `e3.2` deixa de ser
um efeito de 2ª ordem e vira a história principal: reprodutibilidade seria o obstáculo dominante, e
tudo que o mapa projeta sobre uso regulatório (`e1.2`) fica sem chão, porque regulador não aceita
evidência que muda quando se troca a versão da ferramenta. Inversamente, se a simulação reproduzir
a direção e a ordem de grandeza do efeito medido na literatura com humanos, eu deveria subir a
confiança de `e1` e `e5` de média para alta — e o cenário provável passaria a ser
subestimado, não superestimado.

## 11. Fontes

Todas abertas e lidas nesta rodada (17/09/2026). Quatorze fontes distintas.

1. **Generative Agents: Interactive Simulacra of Human Behavior** — `https://arxiv.org/abs/2304.03442`
   Sustenta: 25 agentes, arquitetura memória/reflexão/planejamento, comportamento emergente da
   festa organizada sem roteiro, datas (abril/2023, revisão agosto/2023).
   Confiabilidade: alta — paper fundador, revisado, amplamente replicado.

2. **OASIS: Open Agent Social Interaction Simulations with One Million Agents** — `https://arxiv.org/abs/2411.11581`
   Sustenta: escala declarada de um milhão, plataformas X e Reddit, replicação de difusão,
   polarização e efeito manada, achado de que escala maior acentua dinâmica de grupo, cronologia
   (18/11/2024, cinco versões até 23/03/2025).
   Confiabilidade: alta para o que o sistema faz; média para "um milhão", que é capacidade
   declarada e não resultado de estudo publicado.

3. **Repositório camel-ai/oasis** — `https://github.com/camel-ai/oasis`
   Sustenta: estado do projeto (5,2 mil estrelas, atividade até agosto/2026, Apache 2.0), 23 ações,
   e os números de custo por passo (¥0,027 Qwen Plus / ¥0,717 Qwen Max para 100 agentes).
   Confiabilidade: média-alta — é fonte primária do projeto sobre si mesmo; os custos são
   auto-reportados e não foram reproduzidos por mim.

4. **AgentSociety: Large-Scale Simulation of LLM-Driven Generative Agents** — `https://arxiv.org/abs/2502.08691`
   Sustenta: 10 mil agentes, 5 milhões de interações, cinco questões sociais simuladas (polarização,
   mensagens inflamatórias, renda básica, furacão, sustentabilidade urbana), datas (fev/2025,
   revisão abril/2026).
   Confiabilidade: alta.

5. **Repositório google-deepmind/concordia** — `https://github.com/google-deepmind/concordia`
   Sustenta: arquitetura entidade-componente com Game Master, 1,7 mil estrelas, 368 forks, 1.338
   commits, pacote `gdm-concordia`, usos declarados.
   Confiabilidade: média-alta, mesma ressalva de fonte primária sobre si mesma.

6. **Project Sid: Many-agent simulations toward AI civilization** — `https://arxiv.org/abs/2411.00114`
   Sustenta: de 10 a 1000+ agentes, arquitetura PIANO, papéis especializados, mudança de regra
   coletiva e transmissão cultural, limitação de visão e raciocínio espacial, data (31/10/2024).
   Confiabilidade: média — é publicação de laboratório privado (Altera.AL) com forte componente de
   demonstração; as limitações declaradas pelos próprios autores aumentam a credibilidade.

7. **ARTAI: An Evaluation Platform to Assess Societal Risk of Recommender Algorithms** — `https://arxiv.org/pdf/2409.12396`
   Sustenta: existência de plataforma de avaliação por simulação de risco societal de recomendação
   antes do deploy, e sua ligação declarada com conformidade regulatória europeia.
   Confiabilidade: **baixa nesta rodada** — a extração veio comprimida e não confirmei autoria nem
   filiação. Usada como indício da linha de trabalho, não como evidência.

8. **We Need Strong Preconditions For Using Simulations In Policy** (Luo, Arora, Guirado — UC Berkeley,
   09/04/2026, PoliSim@CHI 2026, Barcelona) — `https://arxiv.org/html/2604.07838v1`
   Sustenta: as três precondições (não tratar como saída neutra, não simular sem participação, não
   simular sem accountability), os exemplos de mau uso (evacuação, deportação), e a existência do
   workshop PoliSim@CHI 2026.
   Confiabilidade: média-alta — é posição argumentada, não medição; a autoria e a data são claras.

9. **Take caution in using LLMs as human surrogates** (Gao, Lee, Burtch, Fazelpour — PNAS, jun/2025) —
   `https://pmc.ncbi.nlm.nih.gov/articles/PMC12184514/`
   Sustenta: jogo 11-20, oito LLMs, mil sessões cada, humanos em nível 3 contra modelos em nível 0-1,
   modelo maior não melhor, falha do Centaur, fragilidade a prompt.
   Confiabilidade: alta — PNAS, revisão por pares, desenho experimental explícito.
   *Nota de processo: a página da PNAS retornou 403; o texto foi lido no repositório PMC.*

10. **When Synthetic Users Fail: A Cross-Domain Benchmark of LLM-Simulated Human Survey Responses** —
    `https://arxiv.org/html/2607.26348v1`
    Sustenta: os números centrais deste mapa — 13,9 a 21,8 p.p. abaixo da linha de base demográfica
    no WVS, divergência de Jensen-Shannon de 0,011 a 0,382, inflação de diferença entre segmentos de
    1,3× a 4,7×, taxa de decisão errada de ~50% (GSS) e ~72% (WVS); quatro modelos e dois domínios.
    Confiabilidade: média-alta para os números, com ressalva declarada pelo próprio manuscrito de
    estar **sob revisão por pares**. É a fonte da qual mais depende a Seção 7, e isso é um risco
    concentrado.

11. **From the Fluency Fallacy to the Micro-to-Macro Validity Gap** (listado nas buscas como
    "Integrating LLM in Agent-Based Social Simulation: Opportunities and Challenges") —
    `https://arxiv.org/pdf/2507.19364`
    Sustenta: o conceito de falácia da fluência e do vão de validade micro-macro — agente fluente
    não garante agregado válido.
    Confiabilidade: **baixa-média por divergência de metadados** — título e autoria retornados pela
    leitura não batem com os da listagem de busca, e não reconciliei isso. O conceito é usado; a
    atribuição não deve ser citada adiante sem nova verificação.

12. **IA na pré-eleição: deepfakes, desinformação e novos desafios para a integridade das eleições de
    2026** (Data Privacy Brasil, 15/09/2026) — `https://www.dataprivacybr.org/ia-na-pre-eleicao-deepfakes-desinformacao-e-novos-desafios-para-a-integridade-das-eleicoes-de-2026/`
    Sustenta: perfis inteiramente gerados por IA simulando participação política, a expressão
    "fabricação artificial de apoio e engajamento", ~63% de 413 casos sem indicação de uso de IA, e
    a exigência do TSE de identificação explícita, destacada e acessível.
    Confiabilidade: média-alta — organização de pesquisa com metodologia de monitoramento declarada;
    é a única fonte brasileira do mapa, o que é uma fragilidade do recorte, não da fonte.

13. **AgentSociety — repositório tsinghua-fib-lab/AgentSociety** (via listagem de busca; página do
    projeto não aberta individualmente)
    Sustenta: apenas a existência e a descrição do projeto como plataforma de simulação nativa de LLM
    para pesquisa em ciências sociais.
    Confiabilidade: baixa como fonte independente — registrada aqui por transparência, já que o
    conteúdo substantivo veio de [4], que foi lido.

14. **Página de busca sobre síntese de consumidores e usuários sintéticos em pesquisa de mercado**
    (conjunto de resultados, incluindo material comercial de consultorias)
    Sustenta: nada neste documento. Registrada porque foi levantada e **deliberadamente descartada**
    como fonte de número, pelo motivo detalhado na Seção 12: estatística de mercado publicada por
    quem vende o serviço, sem metodologia acessível.
    Confiabilidade: nula para fins de evidência; útil como observação sobre o formato do mercado.

## 12. Anexo — o levantamento bruto

### Etapa 1 — entrevista (respostas recebidas, sem interação)

Esta rodada foi executada sem usuário disponível para responder. As respostas foram fornecidas
antecipadamente e são reproduzidas como vieram:

- Tema: "Sociedades simuladas: a simulação como instrumento de investigação" (tema 6 de 19; família
  "Simulação e mundos").
- Horizonte: 2031. Público: quem projeta mídia e interação. Recorte: global, com nota sobre o Brasil.
- Descartado de início: o que já é comum em produto de massa (régua da disciplina); nenhuma outra
  exclusão — confirmado explicitamente, como a Etapa 1 exige.
- Disrupção suspeita: nenhuma. Viés: neutro. Ideias óbvias a excluir: as que servem para qualquer tema.
- O que faria mudar de ideia: evidência de adoção além da maioria inicial (Rogers), ou de que a
  tecnologia não rompe nada.
- Profundidade: três ordens. Modo: a partir de uma inovação/tema, não de um setor.
- Zona de interesse: "Simulação e mundos". Login: mjbo. Skill: futurizacao-mjbo.

**Desvio de processo declarado:** a Etapa 1 da skill é bloqueante e exige perguntar antes de produzir
qualquer coisa. Nesta rodada não houve a quem perguntar; as respostas obrigatórias (horizonte,
recorte, descarte, viés) vieram completas por escrito, então a condição de parada foi satisfeita sem
o diálogo. O item que mais sofre com isso é o viés "neutro": neutralidade declarada por terceiro não
é a mesma coisa que neutralidade negociada na conversa, e a Seção 7 registra onde isso provavelmente
pesou.

### Etapa 2 — buscas realizadas

Buscas (WebSearch):
1. `generative agents LLM social simulation 2026 million agents platform` → levou a AgentSociety e ao
   workshop Social Agents.
2. `OASIS CAMEL-AI one million agents social media simulation arxiv` → OASIS (arXiv + repo + site).
3. `synthetic users LLM market research validity replicate survey respondents 2026 critique` → o
   benchmark [10], além de material comercial descartado.
4. `Project Sid Altera 1000 agents Minecraft civilization simulation paper` → [6].
5. `DSA systemic risk assessment simulation testing recommender algorithm before deployment regulation 2026`
   → ARTAI, DSA Observatory, análises de escritórios de advocacia.
6. `Concordia DeepMind generative agent-based modeling library social simulation` → [5].
7. `simulação social agentes LLM Brasil pesquisa 2026 população sintética desinformação` → [12] e
   diversos papers de simulação eleitoral.
8. `"synthetic participants" research ethics IRB LLM simulation replace human subjects debate 2026` → [9].
9. `government policy simulation LLM agent society digital twin pilot 2026 public sector` → [8],
   PoliSim@CHI 2026, EconSimulacra, SDT de Newcastle.

Páginas efetivamente abertas (WebFetch): arXiv 2411.11581, arXiv 2502.08691, arXiv 2304.03442,
arXiv 2607.26348v1, arXiv 2409.12396, arXiv 2604.07838v1, arXiv 2507.19364, arXiv 2411.00114,
github.com/camel-ai/oasis, github.com/google-deepmind/concordia, PMC12184514, dataprivacybr.org.

Falhas de acesso: `pnas.org/doi/10.1073/pnas.2501660122` → HTTP 403 (contornado via PMC);
`dl.acm.org/doi/full/10.1145/3772363.3778738` (PoliSim@CHI 2026) → HTTP 403, não contornado — por
isso o workshop é citado a partir de [8] e não diretamente.

### Buscas que não deram em nada utilizável

- Tentativa de encontrar número de adoção de simulação social **fora** de laboratório (empresas que
  declarem usar em produção): nada encontrado com metodologia visível. É a maior lacuna do
  levantamento e a razão de `e4.1` e `e5` ficarem em sinal fraco.
- Tentativa de encontrar caso concreto de resultado de simulação usado em decisão regulatória: nada.
  Foi o que rebaixou D3 de disrupção para emergente.
- Material comercial sobre "consumidores sintéticos" (guias de consultoria, blogs de fornecedor):
  abundante, e descartado em bloco. Motivo, o mesmo que o autor da skill registrou no seu
  `DUVIDAS.md` sobre estatística de digital twin: número de mercado publicado por quem vende o
  serviço, sem metodologia acessível, não entra nem na Seção 3 nem na Seção 11.

### Etapa 3 — teste de disrupção, respostas completas

**D1 — agente com LLM como unidade de simulação.**
(1) Torna possível: deliberação, persuasão e norma negociada em linguagem; saída interpretável em
texto. Sim. (2) Invalida: ABM por regras fixas como forma canônica; e o painel amostral como única
fonte da fase exploratória. Sim. (3) Por que agora: coerência de persona em milhares de passos,
custo por chamada, infraestrutura aberta reutilizável. Sim. → **disrupção-raiz**.

**D2 — escala.**
(1) Torna possível: observar fenômeno macro que não emerge em dezenas de agentes; [2] documenta que
a dinâmica muda com a escala. Sim. (2) Invalida: o monopólio de quem tem base de usuários sobre o
experimento social em larga escala. Sim. (3) Por que agora: escalonamento paralelo, modelos pequenos
bons o bastante, licença aberta; curva 25 → 1000+ → 10⁶ em três anos. Sim. → **disrupção-raiz**,
com ressalva de que o milhão é capacidade declarada.

**D3 — simulação como artefato de prestação de contas.**
(1) Torna possível: exigir demonstração antes do lançamento. Sim. (2) Invalida: nada, ainda —
não há obrigação de simular, e nenhum caso de decisão pública baseada em simulação foi encontrado.
**Não.** (3) Por que agora: enforcement regulatório sobre recomendação + simuladores abertos. Sim.
→ **emergente**, entra na Seção 4 com ressalva explícita.

**Reprovadas:**
- ABM clássica (NetLogo e similares): falha em (1) — não torna possível nada novo. → madura, fica na
  Seção 3.
- Gêmeo digital de cidade com sensor: falha em (1) pela mesma razão. → madura.
- Persona sintética como produto de pesquisa de mercado: falha em (2) — vendida como complemento do
  painel, e pelo benchmark [10] perde de uma linha de base demográfica. → não entra.
- Personagem autônomo em jogo: fora de escopo por decisão da disciplina (tema 7).

### Etapa 4 — efeitos cortados

- *"A pesquisa de opinião acaba até 2031."* Cortado. Exige empilhar duas suposições não testadas
  (que a validade seja resolvida **e** que a legitimidade institucional migre junto) e contraria
  diretamente [10]. Rebaixado ao cenário indesejável, onde aparece na forma mais fraca e defensável:
  encolhimento da fase exploratória, não desaparecimento.
- *"Agentes simulados ganham status moral / ética de pesquisa se aplica a agentes."* Cortado da roda.
  É a 3ª pergunta da ementa, e é boa — mas não consegui narrar em uma frase o caminho mecânico da
  disrupção até lá sem passar por uma premissa filosófica independente. Fica registrado aqui como
  candidato a wildcard de horizonte mais longo.
- *"Plataformas param de fazer teste A/B com usuários reais."* Cortado. Especulação de especulação:
  exige que a simulação seja aceita como substituto **e** que o custo de A/B suba. Sobrou a forma
  fraca em `e5`.
- *"Simulação vira gênero de entretenimento — assistir sociedades sintéticas como se assiste
  streaming."* Cortado da roda principal por ser de outra família (encosta no tema 7) e por não ter
  nenhum sinal no levantamento. Sobreviveu diluído em `e4.1.1`.
- *"Mercado de personas sintéticas certificadas vira indústria bilionária até 2031."* Cortado o
  adjetivo e o número; sobrou `e2.1.2` sem dimensionamento, porque qualquer número que eu colocasse
  viria de fonte comercial descartada.

### Etapa 5 — nota de processo sobre a contestação

A contestação foi escrita **depois** da roda completa, como a skill exige, e mudou o documento em
dois pontos concretos: (a) rebaixou a confiança global de alta para média no frontmatter, ao
constatar que a evidência com número é majoritariamente contrária ao mapa; (b) acrescentou um quinto
item à Seção 7, não previsto pela skill, para registrar essa assimetria de qualidade entre as fontes
a favor e contra. Nenhum efeito foi removido nesta etapa — o que é, em si, um sinal de alerta: uma
contestação que não derruba nada costuma ser branda demais. O candidato mais óbvio à remoção,
declarado na própria Seção 7, é `e1.2.2`.

### Checagem final (Etapa 8, condição de parada)

Conferido antes da entrega: 12 seções com os títulos exatos; frontmatter com todos os campos
preenchidos, nenhum omitido, `publico_ok: false` porque não houve confirmação do autor; bloco `roda:`
com três níveis e `sinal`/`prazo`/`confianca` em todos os nós; contagens do frontmatter (3 / 6 / 10 /
15) batendo com os nós do bloco; nenhum item da Seção 4 reprovado no teste da Etapa 3 (D3 entra
marcada como emergente, conforme a regra); Seção 7 com quatro itens concretos e nomeados; Seção 11
apenas com endereços de fato abertos, com as duas fontes problemáticas ([7] e [11]) marcadas como
tais em vez de removidas ou maquiadas.
