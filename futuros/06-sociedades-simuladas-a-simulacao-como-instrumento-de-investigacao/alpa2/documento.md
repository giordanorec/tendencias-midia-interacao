---
tema: "Sociedades simuladas: a simulação como instrumento de investigação"
slug: sociedades-simuladas-a-simulacao-como-instrumento-de-investigacao
autor_login: alpa2
zona_de_interesse: Simulação e mundos
data: 2026-09-17
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 11
efeitos_ordem_3: 11
tecnologias_citadas: [generative-agents, OASIS, AgentSociety, Concordia, Simile, synthetic-users, agent-based-modeling, WebGPU, small-language-models, robustness-audit]
fontes: 6
confianca: media
experimento: "Um túnel de vento de bolso — replicar um fenômeno já medido numa comunidade real pequena e rodar a mesma sociedade sintética em 27 combinações de seed, versão de modelo e formulação de prompt, para medir quanto da conclusão sobrevive."
skill_usada: futurizacao-alpa2
publico_ok: false
---

## 1. Resumo

Simular uma sociedade de agentes com modelo de linguagem deixou de ser demonstração e virou
instrumento com orçamento. Em 2024–2026 o campo cruzou três limiares ao mesmo tempo: escala
(OASIS declara suportar até um milhão de agentes; AgentSociety relata mais de 10 mil agentes e
5 milhões de interações), calibração por pessoa real (1.052 pessoas entrevistadas por duas
horas cada, transformadas em agentes) e dinheiro (Simile, fundada pelo autor do experimento
original de Stanford, levantou 200 milhões de dólares a uma avaliação de 2 bilhões em julho de
2026, vendendo usuário sintético para pesquisa de produto).

Junto com os três limiares veio um quarto, que é o mais interessante para quem projeta: o campo
descobriu que **acertar o agregado e errar o indivíduo é o comportamento típico**, não a
exceção. Um benchmark de julho de 2026 sobre GSS e World Values Survey encontrou modelos que
empatam ou perdem para uma simples tabela de consulta demográfica no nível individual, e que
inflam a diferença entre segmentos de 2 a 4 vezes — o que leva a segmentar o público errado em
metade a três quartos dos casos. Uma replicação de fórum tipo Reddit acertou número de usuários
e de posts dentro do intervalo de confiança, e errou toxicidade e tamanho de thread. Um terceiro
trabalho mostra que a conclusão muda com a seed, com a versão do modelo e com a redação do
prompt.

Esse é o desenho do mapa até 2031: a simulação social se firma como instrumento **de triagem e
de ensaio**, não de prova; a camada de validação vira um mercado próprio; a pergunta política
deixa de ser "dá para simular?" e passa a ser "de quem é a sociedade que está sendo simulada, e
quem assina que ela se parece com a real?".

Três disrupções-raiz passaram no critério: população sintética calibrada como sujeito de
pesquisa, simulação como etapa do ciclo de design de plataforma, e simulação barata rodando
local. Modelagem baseada em agentes clássica (NetLogo e parentes) foi rejeitada como raiz — é
madura, e está na seção 3.

Confiança geral: **média**. Os efeitos de 1ª ordem têm evidência corrente; os de 3ª ordem são,
como esperado, de confiança baixa.

---

## 2. O tema

O objeto aqui é a **simulação social como método**: colocar muitos agentes num ambiente
controlado, deixar rodar e observar o que emerge — para testar uma política, um algoritmo de
recomendação ou uma dinâmica de desinformação **antes** de aplicá-la em gente. A analogia que
o próprio campo usa é o túnel de vento: não se voa o avião para descobrir se a asa aguenta.

Três fronteiras foram respeitadas nesta análise:

- **Não é jogo.** Personagem autônomo dentro de um jogo é outro assunto; aqui o produto da
  simulação é dado analisável, não diversão.
- **Não é mercado de máquinas.** Agente com carteira e dinheiro real é outro assunto; aqui o
  dinheiro, quando aparece, é variável do experimento.
- **Não é robô.** Agente com corpo no mundo físico é outro assunto; aqui o ambiente é
  configurável justamente porque é sintético.

**A régua de novidade adotada.** Modelagem baseada em agentes com regras fixas existe desde os
anos 1990 e é ferramenta consolidada de ciências sociais computacionais. O que é emergente é o
agente cujo comportamento **não está escrito** — ele tem memória, personalidade, conversa em
linguagem natural com os outros e consulta um modelo para decidir. É essa substituição, da
regra pelo modelo, mais a escala de milhares a milhões, que define o recorte.

**Suposições adotadas nesta rodada** (a entrevista do Passo 1 foi respondida, mas parcialmente
por padrão; ver seção 7): horizonte 2031; público de quem projeta mídia e interação; recorte
global com nota sobre o Brasil; descarte apenas da régua da disciplina (o que já é comum em
produto de massa não entra); viés neutro; disrupção central levantada do zero.

---

## 3. Onde isso está hoje

### O que já existe e funciona

**Modelagem baseada em agentes clássica — madura.** Regras fixas, agentes simples, décadas de
literatura. Funciona, é ensinada, tem ferramenta estável. Está aqui, e não na seção 4,
exatamente por isso: não falta nada para ela se concretizar.

**Simulação social com agentes de linguagem, em escala de laboratório — funcionando.**
`AgentSociety`, do grupo da Tsinghua, relata mais de 10 mil agentes gerando cerca de 5 milhões
de interações em ambiente urbano, social e econômico, e diz reproduzir padrões de polarização,
propagação de mensagem inflamatória, efeito de renda básica universal, choque externo (furacão)
e sustentabilidade urbana, com alinhamento declarado a resultados experimentais do mundo real.
`OASIS`, do CAMEL-AI, é um simulador de rede social de código aberto, com sistema de recomendação
embutido e 23 ações possíveis por agente, que declara suportar até um milhão de usuários e
reporta ter reproduzido propagação de informação, polarização de grupo e efeito manada em
réplicas de X e de Reddit. `Concordia`, do Google DeepMind, é uma biblioteca de simulação social
generativa que organiza o ambiente como uma mesa de RPG — uma entidade "mestre de jogo" arbitra
o que as ações dos agentes produzem no mundo; teve versão 2.0 lançada depois de um torneio no
NeurIPS.

**Calibração por pessoa real — funcionando, com acesso restrito.** O trabalho de Park e colegas
(Stanford) entrevistou 1.052 pessoas, amostradas para representar a população dos EUA, por duas
horas cada, com um entrevistador automatizado para padronizar; os agentes resultantes respondem
questionários e tomam decisões de modo próximo ao dos seus originais humanos. Os autores
anunciaram disponibilizar esses agentes por API restrita para pesquisa.

**Dinheiro — funcionando.** `Simile`, fundada por Joon Sung Park (o mesmo autor do experimento
original com 25 agentes numa cidade virtual), levantou 200 milhões de dólares a 2 bilhões de
avaliação em 30/07/2026, cinco meses depois de uma série A de 100 milhões, vendendo usuário
sintético para marketing e pesquisa de produto, com a CVS Health entre os clientes citados.

### O que existe mas não pegou — ou não se sustenta

**A promessa de substituir o respondente humano.** É aqui que está a evidência mais dura, e ela
é negativa. Um benchmark de 28/07/2026 rodou GSS (2016–2024) e World Values Survey (onda 7, 63
países) contra quatro modelos, em dois formatos de prompt, com linhas de base não-LLM. No GSS,
todo modelo empata ou perde para uma tabela de consulta demográfica (acurácia 0,589); no WVS,
todo modelo fica de 11 a 22 pontos percentuais abaixo da linha de base. Pior: os modelos tratam
o dado demográfico como muito mais preditivo do que ele é — orientação política explica 1,5% da
variação real na confiança em bancos e até 67% no modelo. Na prática, isso infla a diferença
entre segmentos de 2 a 4 vezes e leva a mirar o segmento errado em 50% a 72% dos casos. E o
efeito **piora** com o modelo maior, não melhora.

**A validação do próprio método.** Uma replicação operacional de um fórum de tecnologia estilo
Reddit (Tomašević e colegas, versão de 24/04/2026) partiu de 50 agentes e chegou a ~610 usuários
numa janela de 30 dias. Usuários únicos, posts-raiz e usuários ativos por dia caíram dentro do
intervalo de confiança de 99% do fórum real. Comentários (904 contra 733), tamanho médio de
thread (2,53 contra 2,25) e toxicidade média (0,143 contra 0,119) ficaram todos **acima**. As
duas redes têm organização núcleo-periferia, mas o núcleo simulado é 3,7 vezes maior.

**A estabilidade do resultado.** Ye, Cao, Chen e Ferrara (20/05/2026) argumentam que não se deve
tirar conclusão científica de simulação social com LLM sem auditoria de robustez, e documentam
três fragilidades: sensibilidade ao prompt, dependência da versão do modelo e sensibilidade à
seed. Revisões do campo reforçam: a maioria dos trabalhos valida por "parece plausível" e
reporta rodada única.

### Quem está construindo

Laboratórios acadêmicos (Stanford HCI, Tsinghua FIB Lab), laboratórios industriais (Google
DeepMind), comunidade de código aberto (CAMEL-AI), startups com capital de risco pesado
(Simile), e uma franja de projetos pequenos — vilas de agentes com diário próprio, grades
60×60 com replay determinístico e artefato verificável por hash, redes sociais inteiras
povoadas por agentes, vilas que rodam inteiras no navegador.

### O dado de mercado que o recorte do aluno mediu

De 7.776 anúncios levantados em dois dos maiores diretórios comerciais de IA, **dois** eram
sobre simulação. Não é sinal de que o campo seja irrelevante; é sinal de que ele não é produto
de prateleira. Diretório vende produtividade. Simulação é instrumento de investigação — vende-se
para laboratório e para departamento de risco, não para o usuário que procura "a melhor
ferramenta de IA".

---

## 4. As disrupções-raiz

Três candidatas passaram nos três testes do critério. Uma foi rejeitada e está registrada no
anexo.

### D1 — A população sintética calibrada por pessoa real vira sujeito de pesquisa

**O que rompe.** Muda quem é sujeito de um experimento social e quem pode rodar um. Não é
"pesquisa mais rápida": é a possibilidade de rodar a mesma população mil vezes, com uma
variável trocada, o que nenhum desenho com pessoas permite. Também muda quem precisa de quem —
uma equipe de produto deixa de depender de recrutamento para fazer a primeira leitura.

**Por que agora, e não há cinco anos.** Três coisas cruzaram limiar juntas: o custo por agente
por passo caiu com modelos menores e mais baratos; apareceu um método de calibração por
entrevista longa (2 mil horas de entrevista viraram 1.052 agentes) que dá ao agente algo além
de um perfil demográfico; e chegou capital de risco em escala de bilhão, que financia a
infraestrutura que a academia não financiaria.

**O que ainda falta.** Falta o principal: validade no nível do indivíduo e do subgrupo. A
evidência atual é de que acerta o agregado e erra a pessoa, e de que o erro tem direção
(estereotipagem demográfica). Falta também um padrão público de como se demonstra que uma
população sintética se parece com a real. Enquanto isso não existir, ela é instrumento de
triagem, não de prova.

### D2 — A simulação vira etapa do ciclo de design de plataforma

**O que rompe.** Rompe a ordem do teste. Hoje mudança de recomendação, de moderação ou de feed
é testada em gente — A/B em fração da base real — e o dano, quando há, acontece antes de ser
medido. Se dá para rodar a mudança numa réplica sintética primeiro, o que era experimento com
usuário vira ensaio prévio, e a pergunta "você testou isso antes de lançar?" passa a ter uma
resposta possível que não é "testamos em vocês".

**Por que agora, e não há cinco anos.** Há cinco anos não existia simulador social de código
aberto com sistema de recomendação embutido e escala de centenas de milhares de agentes; agora
existe. E há pressão regulatória nova: o Digital Services Act europeu exige, nos artigos 34 e
35, que plataformas muito grandes identifiquem e mitiguem riscos sistêmicos, listando
explicitamente o desenho do recomendador entre os fatores a pesar — e a primeira rodada de
avaliações e auditorias foi avaliada como pobre em informação nova, o que cria demanda por um
instrumento que produza evidência de verdade.

**O que ainda falta.** Nenhum regulador exige simulação; nenhuma métrica de fidelidade é aceita
como suficiente; nenhuma plataforma grande publicou que faz isso como rotina. Existe protótipo
acadêmico de plataforma de avaliação de risco societal de recomendador, mas não padrão.

### D3 — A simulação social barata, local e pessoal

**O que rompe.** Muda quem pode rodar. Se uma sociedade de agentes cabe num navegador, sem
servidor e sem conta de nuvem, o experimento social deixa de ser privilégio de quem tem
orçamento de GPU. Isso não é "mais barato": é a diferença entre precisar de permissão
institucional e não precisar.

**Por que agora, e não há cinco anos.** WebGPU passou a vir ligado por padrão nos principais
navegadores em 2026, e modelos de algumas centenas de milhões de parâmetros passaram a rodar no
cliente com desempenho utilizável e custo zero por token — o compute é o do usuário. Há cinco
anos nenhuma das duas condições valia.

**O que ainda falta.** Falta demonstrar que agente pequeno produz comportamento emergente que
valha alguma coisa. As demonstrações fortes do campo foram feitas com modelos grandes; não há,
até onde esta rodada apurou, uma vila em navegador que tenha reproduzido um fenômeno social
não-trivial e mensurável. É emergente com folga — talvez emergente demais.

---

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "A população sintética calibrada por pessoa real vira sujeito de pesquisa"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "Pesquisa de usuário e pesquisa de opinião passam a rodar primeiro em painel sintético e só depois, quando o risco justifica, em pessoas."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "O custo de uma rodada de pesquisa cai o bastante para que testar vire rotina contínua em vez de evento marcado no calendário."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "A profissão de pesquisador de UX se reorganiza em torno de calibrar e auditar populações sintéticas, e não mais de conduzir sessões."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "Forma-se um mercado de painéis sintéticos licenciados por segmento, vendidos como se vende base de dado."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Pessoas passam a reivindicar controle e pagamento sobre o agente construído a partir das próprias entrevistas."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "A discrepância entre o agregado que acerta e o indivíduo que erra vira o problema técnico central do campo."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "A validação vira produto separado: benchmarks públicos, auditoria de robustez e selo de fidelidade vendidos por terceiros."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Publicar resultado de simulação social sem auditoria de robustez passa a ser tratado como má prática metodológica declarada."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "Resultados de simulação passam a ser reportados como bandas sobre muitas seeds e versões de modelo, em vez de um número único."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "Periódicos e congressos de ciências sociais criam trilha própria de simulação generativa com pré-registro obrigatório."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "Governos e grandes organizações encomendam sociedades sintéticas específicas do próprio território ou da própria base de usuários."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "A pergunta de quem é a sociedade simulada vira disputa política: quem não tem população sintética própria é modelado pela de outro país."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Soberania de população sintética entra na pauta de política digital ao lado de soberania de dado e de nuvem."
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: "A simulação vira etapa do ciclo de design de plataforma"
    efeitos:
      - id: e4
        ordem: 1
        efeito: "Equipes de plataforma passam a testar mudança de recomendação numa réplica sintética antes de expor usuário real."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "O teste A/B com gente perde a posição de primeiro instrumento e vira etapa de confirmação final."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "A cultura de lançar e medir cede espaço a uma cultura de simular e justificar, aproximando design de plataforma da engenharia de segurança."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "Reguladores passam a aceitar evidência de ensaio pré-lançamento como parte da avaliação de risco sistêmico."
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "Consolida-se a função de auditor independente de simulação, com formação e responsabilidade próprias."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "Desinformação, brigada e comportamento coordenado passam a ser ensaiados em ambiente fechado antes de acontecerem em público."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "O mesmo ambiente serve para ensaiar o ataque: quem quer manipular testa a campanha na réplica antes de soltá-la."
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Simuladores sociais de grande escala passam a ser tratados como item de uso dual, com controle de acesso e termos de licença restritivos."
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: "A simulação social barata, local e pessoal"
    efeitos:
      - id: e6
        ordem: 1
        efeito: "Rodar uma pequena sociedade de agentes deixa de exigir orçamento de nuvem e passa a caber num navegador comum."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "A simulação social vira formato de peça de mídia: um mundo que o leitor roda, ajusta e observa, em vez de um gráfico que ele lê."
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "Jornalismo e educação passam a publicar o modelo executável junto com a matéria, como hoje publicam o conjunto de dados."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "Multiplicam-se simulações baratas e mal validadas, e o resultado de simulação perde peso como argumento isolado."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "Distinguir simulação auditada de simulação caseira vira competência básica de leitura de mídia, ensinada na escola."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: "O ambiente de simulação vira também o campo de prova onde produtos agênticos são avaliados antes de encontrar usuário humano."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "Interfaces passam a ser projetadas contra populações que as atravessam milhares de vezes, e não contra o clique de uma pessoa por vez."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "Design de interação incorpora testabilidade por população sintética como disciplina própria, ao lado de acessibilidade."
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o bloco não diz

**Os efeitos e2 e e6.2 empurram em direções opostas, e essa é a tensão principal do mapa.**
O primeiro diz que o campo endurece — aparece auditoria, aparece banda de incerteza, aparece
pré-registro. O segundo diz que o campo se dilui — qualquer pessoa roda uma vila no navegador e
publica o print. As duas coisas vão acontecer ao mesmo tempo, e o resultado provável não é uma
vencer a outra: é a formação de duas camadas com públicos diferentes, como existe hoje entre
ensaio clínico e post de suplemento. O risco não é a camada caseira existir; é ela ser lida com
a autoridade da outra.

**e1 e e2 são o mesmo movimento visto de dois lugares.** A adoção acelera *porque* o agregado
acerta — é verdade que o painel sintético reproduz direção e magnitude de tendência atitudinal.
O problema aparece exatamente onde o produto é usado: segmentação, persona, decisão sobre um
subgrupo. Um instrumento que acerta a média e erra o recorte é perigoso justamente por ser
parcialmente bom — se errasse sempre, ninguém usaria.

**e4.2 é o efeito mais frágil da roda inteira, e está marcado assim de propósito.** Colocar
simulação dentro de um regime regulatório exige um padrão de fidelidade que ninguém tem. A
comparação com teste de colisão de automóvel, que a formulação do tema levanta, é útil mas
enganosa: o boneco de teste mede uma quantidade física com instrumento calibrado contra
cadáveres e voluntários; a sociedade sintética mede uma quantidade social contra... outra
medida social, ela própria contestada. Não há equivalente de força em newton aqui.

**e3.1 é onde o Brasil aparece.** A dependência não é de nuvem nem de modelo: é de **corpus de
calibração**. Os agentes calibrados que existem hoje foram construídos a partir de uma amostra
representativa dos Estados Unidos, e os simuladores de rede social foram validados contra X e
Reddit. Não existe, até onde esta rodada apurou, população sintética calibrada em amostra
brasileira, nem réplica validada de uma plataforma onde o brasileiro efetivamente conversa. Se
uma decisão sobre desenho de plataforma no Brasil passar a se apoiar em ensaio sintético, o
ensaio, por ora, será feito com gente que não é daqui. Há capacidade instalada para mudar isso
— o país tem tradição em modelagem baseada em agentes para política pública — mas o que falta
não é técnica, é o corpus.

**Nenhum efeito de 3ª ordem deste mapa tem confiança acima de baixa.** Isso é o resultado
esperado do método, não uma falha da rodada. Onde a 3ª ordem soou confortável demais, foi
porque estava só esticando a 2ª — dois casos assim foram cortados e estão no anexo.

---

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — a vila que roda no navegador.** Uma simulação social completa sem servidor,
sem conta e sem custo. Hoje é curiosidade técnica. Importa porque muda a unidade de quem
pergunta: de laboratório para pessoa.

**Sinal fraco 2 — o replay determinístico e o artefato verificável por hash.** Alguns projetos
pequenos já gravam a rodada inteira de modo que ela possa ser reproduzida passo a passo e
conferida por hash criptográfico. É uma resposta direta à fragilidade de seed documentada na
literatura, e vem de projetos independentes, não dos grandes laboratórios. Se isso virar
convenção, a auditoria de robustez fica barata — e o efeito e2.1 acelera.

**Sinal fraco 3 — agente de autor diferente se encontrando no mesmo ambiente.** Redes fechadas
onde cada participante traz o seu agente e observa o encontro. Hoje é brincadeira entre
desenvolvedores. Se pegar, cria a primeira infraestrutura em que a sociedade simulada não é de
ninguém em particular — o que resolve parte do problema de "de quem é a população", e cria
outro problema inteiro de governança.

**Sinal fraco 4 — o silêncio do mercado.** Dois anúncios de simulação em 7.776 num diretório
comercial de IA é um dado, não uma ausência de dado. Diz que a tecnologia está se desenvolvendo
fora do canal que forma a percepção pública sobre o que a IA faz. Quando ela chegar à decisão
pública, chegará sem ter passado pelo período de familiarização que os produtos de
produtividade tiveram.

**Wildcard A (baixa probabilidade, alto impacto) — o resultado errado que virou decisão.**
Um resultado de simulação social é usado como evidência central numa decisão pública de peso —
desenho de um programa social, resposta a uma crise, restrição a uma plataforma — a decisão é
tomada, e depois se descobre que o resultado não sobrevive à troca de seed ou de versão do
modelo. Não é fantasia: as três fragilidades estão documentadas e a demanda regulatória por
evidência existe. O impacto não é o erro em si; é a reação. Um caso assim provavelmente
congelaria o uso institucional do método por anos e empurraria todo o mapa para o cenário
indesejável da seção 9.

**Wildcard B (baixa probabilidade, alto impacto) — a validação que dá certo.** O inverso:
alguém publica um protocolo de calibração que faz o erro no nível individual cair abaixo da
linha de base demográfica, de forma replicada e independente. Nesse caso e1 acelera vários anos,
e a pergunta da seção 3 — "o que separa usuário sintético de pesquisa com pessoas?" — deixa de
ser filosófica e vira imediata, com um comitê de ética tendo que responder se rodar mil vezes um
agente calibrado numa pessoa real exige o consentimento dela.

**Wildcard C — a proibição preventiva.** Uma jurisdição relevante decide que população sintética
calibrada em pessoas identificáveis é tratamento de dado pessoal sob regime estrito, e o
licenciamento de painéis sintéticos (e1.2) morre antes de existir. Efeito colateral curioso:
isso empurraria o campo para populações sintéticas não calibradas — mais livres e menos
válidas.

---

## 7. Contra o próprio mapa

### 7.1 Qual efeito é só extrapolação linear do presente

**e1.1 é o mais culpado.** "Custo cai, então testar vira contínuo" pega uma curva de custo e
estica. O que a curva não captura: o gargalo da pesquisa de usuário raramente foi o custo de
recrutar — foi a capacidade da equipe de absorver e agir sobre o que a pesquisa disse.
Barateando o instrumento sem mudar a capacidade de decisão, o resultado plausível não é
"testar mais", é "acumular relatórios que ninguém lê". O efeito ficou no mapa com confiança
média, mas deveria ser lido como "a leitura fica contínua", não "a decisão fica melhor".

**e1.2 também.** Presume que um mercado de painéis licenciados se forma porque a tecnologia
permite. Mercados de dado se formam quando há comprador disposto e regime jurídico claro; aqui
o segundo está em disputa (ver wildcard C).

### 7.2 Qual efeito assume velocidade de adoção sem precedente

**e4.2 — regulador aceitando ensaio sintético como evidência até 2029 — é o caso mais frágil.**
O comparável direto é o teste de colisão automotivo, invocado pela própria formulação do tema.
A cronologia real desse comparável não ajuda a tese: a lei federal de segurança veicular nos
EUA é de 1966 e o programa de avaliação por estrelas que tornou o teste um instrumento público
comparável é do fim dos anos 1970 — mais de uma década entre a exigência legal e o instrumento
consolidado, para uma medida **física**, com boneco calibrado. Pedir que uma medida social, sem
padrão de calibração e com validade contestada na literatura corrente, percorra caminho
equivalente em três anos é assumir velocidade sem precedente. O efeito ficou, rebaixado a sinal
fraco e confiança baixa, porque a pressão regulatória é real — mas o prazo 2029 deve ser lido
como o começo de uma conversa, não como a chegada.

**e6.1.1 — jornalismo publicando modelo executável junto com a matéria.** O comparável é a
publicação de dado aberto por redações, que levou cerca de uma década para virar prática numa
minoria de veículos, e nunca virou padrão. Não encontrei precedente comparável de adoção rápida
de artefato executável em redação; marcado como tal.

### 7.3 Qual disrupção-raiz pode não se concretizar, e o que sobra

**D1 é a que tem mais chance de não se concretizar na forma prometida.** Não porque a tecnologia
falhe, mas porque a evidência disponível já aponta para o limite: erra o indivíduo, estereotipa
o demográfico, e piora com escala de modelo. Se o limite for estrutural — se for uma propriedade
de como o modelo aprende, e não um problema de calibração — D1 não vira sujeito de pesquisa;
vira **gerador de hipótese**. O mapa não desmorona: e2 (a validação como problema central)
sobrevive intacto e fica ainda mais forte, e1 se reduz de "substitui a pesquisa" para "faz a
triagem antes dela", e a árvore inteira encolhe cerca de um terço em ambição sem perder a forma.

**D2 é a que mais depende de coisa que não é técnica.** Precisa de decisão regulatória ou de
pressão pública. Se nada disso vier, ela sobrevive como prática interna e voluntária de algumas
equipes grandes — o que ainda produz e4 e e5, mas mata e4.2 e e4.2.1.

**D3 é a mais frágil como previsão e a mais barata de verificar.** Se em 2028 não houver
nenhuma simulação em navegador que reproduza um fenômeno social mensurável, ela some do mapa
sem levar nada junto — e6 e e7 caem, o resto fica de pé. É por isso que ela merece o
experimento da seção 10 e não uma aposta.

### 7.4 Que viés entrou aqui

**Declarado.** Viés neutro foi pedido. Onde o mapa não é neutro, é por peso de evidência: a
literatura corrente sobre validação é majoritariamente crítica, e isso puxa o mapa para o
cético. Registro isso explicitamente porque é um viés de seleção de fonte, não uma conclusão —
trabalhos que validam positivamente têm menos chance de virar manchete no arXiv do que
trabalhos que refutam.

**Suposições adotadas por falta de resposta.** Recorte geográfico "global com nota sobre o
Brasil" foi tratado como global com um parágrafo dedicado, não como análise brasileira — a
seção 5 declara a lacuna de corpus em vez de estimá-la. Público "quem projeta mídia e
interação" fez o mapa privilegiar consequências de design e de método sobre consequências
econômicas; um mapa para investidor teria mais ramos em e1.2 e menos em e2.2.

**Viés de disponibilidade de fonte.** As fontes abertas nesta rodada são majoritariamente de
língua inglesa e de arXiv. Não abri nenhuma fonte primária brasileira sobre o tema. A nota
sobre o Brasil na seção 5 é, portanto, uma afirmação sobre o que eu **não encontrei**, não uma
afirmação sobre o que não existe.

**Viés de confirmação do próprio autor da skill.** O `DUVIDAS.md` de alpa2 registra que o erro
típico da rodada anterior foi classificar tecnologia madura como disrupção. Sabendo disso, esta
rodada foi mais severa no Passo 2 — o que pode ter empurrado para o outro lado, rejeitando algo
que merecia entrar. A candidata rejeitada está no anexo, com o motivo, para quem quiser
discordar.

### 7.5 O que foi revisado ou descartado

- **Descartado:** "A pesquisa de opinião com pessoas acaba até 2031." Era um efeito de 2ª ordem
  na primeira passagem. A evidência aponta na direção oposta — erro médio na casa dos pontos
  percentuais de dois dígitos e desempenho abaixo de linha de base demográfica no nível
  individual. Substituído por coexistência com divisão de papéis (e1).
- **Revisado:** e4.2 foi rebaixado de sinal médio/confiança média para sinal fraco/confiança
  baixa, pelo argumento de velocidade sem precedente em 7.2.
- **Descartado:** "Ética de pesquisa passa a se aplicar a agentes." Ficou como pergunta no
  wildcard B, não como efeito, porque na formulação de efeito ela não passava no teste de
  especificidade — é uma questão em aberto, não uma consequência derivável.
- **Descartado:** um quarto candidato a disrupção-raiz (registrado no anexo).

---

## 8. O que a máquina errou

Registro do que deu errado **durante esta rodada**, com o motivo da desconfiança.

**1. Quase classifiquei modelagem baseada em agentes como disrupção-raiz.** Na primeira
passagem do Passo 4, "simular sociedade para testar política" entrou como raiz. Ao aplicar o
terceiro teste por escrito — "o que ainda falta para se concretizar?" — a resposta honesta para
a versão clássica é "nada; é ferramenta consolidada de ciências sociais computacionais há
décadas". É exatamente o erro documentado no `DUVIDAS.md` do autor da skill, com outro fato. A
raiz não é simular; é **o agente cujo comportamento não está escrito**. Corrigido: a ABM
clássica foi para a seção 3.

**2. Tratei "um milhão de agentes" como experimento realizado, e não é isso que a fonte diz.**
O texto do OASIS fala em suportar até um milhão de usuários — capacidade declarada da
arquitetura. Os fenômenos reportados (propagação, polarização, efeito manada) não estão
demonstrados como tendo sido validados num experimento de um milhão de agentes contra dado real
de um milhão de pessoas. A distinção entre "suporta" e "validou nessa escala" é onde o número
grande engana, e o número grande é justamente o que mais circula sobre este tema. Corrigido no
texto para "declara suportar".

**3. Não consegui abrir duas fontes e não as citei.** O artigo da *Political Analysis*
("Synthetic Replacements for Human Survey Data: The Perils of Large Language Models") devolveu
HTTP 429; o PDF do ARTAI devolveu conteúdo binário ilegível. As duas aparecem como títulos em
resultado de busca e as duas seriam convenientes para o argumento — o que é precisamente o
motivo para não usá-las. Estão listadas na seção 11 como não abertas, e nenhuma afirmação deste
documento se apoia nelas.

**4. Usei um número de desempenho de navegador vindo de blog pessoal e voltei atrás.** A cifra
de tokens por segundo de modelo pequeno em WebGPU vem de post individual, não de benchmark
revisado. Mantive no texto apenas a afirmação estrutural que tem apoio mais amplo — WebGPU
ligado por padrão nos principais navegadores em 2026 e custo zero por token no cliente — e tirei
o número específico. Número preciso de fonte fraca é o tipo de detalhe que dá credibilidade
emprestada a um argumento que não a merece.

**5. A comparação com teste de colisão me convenceu antes de eu checá-la.** Ela estava na
formulação do tema, soava boa, e eu a usei como apoio para e4.2. Ao procurar a cronologia real
do comparável, ela passou a **enfraquecer** a tese em vez de sustentá-la (7.2). Uma analogia que
vem junto com a pergunta é a mais difícil de auditar, porque ela chega parecendo premissa e não
alegação.

**6. Nenhuma fonte brasileira foi aberta, e quase escrevi a nota sobre o Brasil como se
soubesse.** A primeira redação afirmava que não existe população sintética calibrada em amostra
brasileira. Não tenho como afirmar isso — tenho como afirmar que não encontrei. Corrigido para
a forma negativa honesta.

---

## 9. Três cenários para 2031

### Provável — o instrumento de triagem

A simulação social é rotina em duas casas: departamentos de risco de plataformas grandes e
laboratórios de ciências sociais computacionais. Ninguém séria discute substituir pesquisa com
pessoas; discute-se onde cortar. O fluxo de trabalho padrão em equipe de produto tem uma etapa
sintética antes da etapa humana, e uma regra informal sobre quando o resultado sintético basta
— tipicamente: basta para descartar, não basta para decidir. Publicar simulação sem banda de
incerteza sobre múltiplas seeds virou constrangedor em congresso, ainda que não proibido.
Existem duas ou três empresas grandes vendendo painel sintético e uma discussão jurídica em
curso sobre o que significa consentir com a construção de um agente a partir da própria
entrevista. O regulador europeu olha para o método com interesse e nenhuma exigência. No Brasil,
quem usa, usa população calibrada em outro lugar, e a maioria das equipes não sabe disso.

### Desejável — o túnel de vento com padrão de calibração

O mesmo quadro, mais uma coisa: existe um protocolo público de validação, construído
colaborativamente e sustentado por um conjunto de fenômenos de referência com dado real aberto,
contra o qual qualquer simulador pode se medir. Falar em "fidelidade" deixa de ser retórica e
passa a ter um número comparável entre laboratórios. O replay determinístico com artefato
verificável virou convenção, então auditar a rodada de outra pessoa é barato. Há populações
sintéticas calibradas fora do eixo EUA, inclusive no Brasil, construídas com consentimento
explícito e remuneração de quem foi entrevistado. A camada caseira floresce e ninguém a confunde
com a camada auditada, porque a diferença é visível no artefato.

**O que teria que acontecer para chegar lá:** alguém precisa financiar o chato. O conjunto de
fenômenos de referência não tem dono comercial, não vira produto e não rende manchete — é
infraestrutura pública, e infraestrutura pública só existe quando alguém paga por ela antes de
precisar. O caminho realista é um consórcio de laboratórios com um regulador interessado, na
linha do que aconteceu com benchmarks de visão computacional nos anos 2010.

### Indesejável — a evidência que ninguém consegue contestar

A simulação social entra na decisão pública antes do padrão de validação. Um relatório sintético
sustenta uma decisão relevante, e a decisão é boa ou ruim por razões que ninguém consegue
separar do modelo. O resultado não é reproduzível — a versão do modelo mudou, a seed se perdeu,
o prompt não foi publicado — mas também não é contestável, porque contestar exige rodar de novo,
e rodar de novo exige acesso que o dono do simulador controla. A assimetria não é de
inteligência: é de acesso ao ambiente. Paralelamente, a camada barata produz um dilúvio de
simulações que confirmam o que quem as rodou já achava, e "eu simulei" vira figura de retórica.

**Sinal precoce deste cenário, observável bem antes de 2031:** o primeiro documento público de
política ou de regulação que cite resultado de simulação com agentes **sem publicar a versão do
modelo, as seeds e a distribuição dos resultados entre rodadas**. Não é preciso esperar o erro
aparecer; basta reparar quando a incerteza deixar de ser reportada. Se isso acontecer antes de
existir protocolo de validação aceito, o cenário indesejável já começou.

---

## 10. O experimento

### O que é: um túnel de vento de bolso

Escolher **um fenômeno já medido** numa comunidade real, pequena e acessível — o fórum da
disciplina, um grupo de mensagens da turma, uma lista de e-mails de um coletivo, qualquer
ambiente onde exista registro real e permissão para usá-lo. Medir nele três ou quatro
quantidades simples e verificáveis: quantas pessoas postam, quantas respostas por tópico, quanto
tempo um assunto dura, qual a proporção de mensagens que iniciam assunto contra as que respondem.

Depois, montar uma versão sintética do mesmo ambiente: dez a cinquenta agentes, cada um com uma
persona curta derivada do perfil de participação real (não do conteúdo — do padrão), o mesmo
número de dias simulados, o mesmo mecanismo de quem vê o quê.

E então a parte que é o experimento de verdade: **rodar 27 vezes** — três seeds × três versões
ou tamanhos de modelo × três formulações diferentes do mesmo prompt de persona. Não uma rodada
bonita: vinte e sete rodadas, e a distribuição dos resultados.

### Que pergunta sobre o futuro ele ajuda a responder

**A conclusão é do mundo simulado ou da forma como eu pedi?** Essa é a pergunta que decide se a
2ª ordem deste mapa (e2.1, e2.2 — auditoria e banda de incerteza como norma) é urgente ou
precipitada. Se as 27 rodadas concordarem, a fragilidade documentada na literatura é menos grave
do que parece em ambientes pequenos e a pressa pela camada de validação diminui. Se
discordarem — e discordarem mais entre formulações de prompt do que entre seeds —, então a
variável que mais mexe no resultado não é o mundo: é o pesquisador. Que é um resultado
desconfortável e útil.

Como subproduto, ele testa D3 diretamente: se as 27 rodadas couberem num laptop ou num
navegador, a disrupção de simulação local é real; se exigirem nuvem, ela não é.

### Que tecnologia emergente ele usa, e por que a madura não serve

Usa agente com modelo de linguagem — memória própria, persona em linguagem natural, decisão
consultada ao modelo. Uma biblioteca de simulação social generativa serve, e roda em escala
pequena sem infraestrutura.

**Por que NetLogo ou ABM clássica não serviriam:** num modelo de regras fixas, o comportamento
do agente é aquilo que o pesquisador escreveu. Rodar 27 vezes mediria variação estocástica dentro
de uma regra conhecida — informação legítima, mas outra pergunta. O experimento aqui só faz
sentido porque o comportamento **não está escrito**: a variação entre formulações de prompt é
uma quantidade que simplesmente não existe em modelo de regra fixa. É precisamente essa
quantidade que a literatura corrente aponta como fragilidade e que ninguém mede em ambiente
pequeno e barato.

### O que faria quem testar mudar de ideia sobre o mapa

- **Se a variação entre formulações de prompt for menor que a variação entre seeds:** o efeito
  e2 perde centralidade, a auditoria de robustez vira higiene e não problema estruturante, e o
  mapa inteiro fica mais otimista — D1 volta a ser candidata a substituir pesquisa, não só a
  triá-la.
- **Se a simulação errar sistematicamente na mesma direção que a replicação de fórum errou
  (mais conversa, mais conflito, núcleo mais denso que o real):** isso é um viés reprodutível, e
  viés reprodutível é corrigível. Seria a melhor notícia possível para o cenário desejável.
- **Se o resultado for irreprodutível de forma desordenada** — cada rodada num lugar, sem padrão
  — então o instrumento não está pronto para nada além de gerar hipótese, e os efeitos de e4
  (simulação no ciclo de design de plataforma) devem ser adiados no mapa em vários anos.
- **Se o ambiente sintético reproduzir uma quantidade que ninguém tentou casar de propósito** —
  uma que não estava no alvo da calibração — isso é a evidência mais forte que este experimento
  pequeno pode produzir a favor do método, e valeria mais que qualquer das outras.

---

## 11. Fontes

### Abertas e lidas nesta rodada (6)

1. **OASIS: Open Agent Social Interaction Simulations with One Million Agents** —
   `https://arxiv.org/abs/2411.11581`
   Sustenta: a escala declarada (até um milhão de agentes), as 23 ações por agente, os sistemas
   de recomendação embutidos, e a reprodução de propagação de informação, polarização de grupo e
   efeito manada em réplicas de X e Reddit. Submetido em 18/11/2024, versão final 23/03/2025.
   *Confiabilidade:* preprint de arXiv com código aberto publicado, revisado pela comunidade
   via uso; a afirmação de escala é de capacidade arquitetural, não de experimento validado —
   ver seção 8, item 2.

2. **AgentSociety: Large-Scale Simulation of LLM-Driven Generative Agents Advances
   Understanding of Human Behaviors and Society** — `https://arxiv.org/abs/2502.08691`
   Sustenta: mais de 10 mil agentes e 5 milhões de interações; os cinco cenários (polarização,
   mensagem inflamatória, renda básica universal, furacão como choque externo, sustentabilidade
   urbana); a alegação de alinhamento com resultados experimentais reais. Submetido em
   12/02/2025, versão revista em 10/04/2026.
   *Confiabilidade:* preprint de grupo acadêmico estabelecido, com plataforma de código aberto;
   a alegação de alinhamento com o mundo real é dos próprios autores e não foi replicada de
   forma independente dentro do que esta rodada apurou.

3. **Towards Operational Validation of LLM-Agent Social Simulations: A Replicated Study of a
   Reddit-like Technology Forum** (Tomašević et al.) — `https://arxiv.org/html/2508.21740v3`
   Sustenta: todos os números da replicação — 50 agentes iniciais, ~610 usuários em 30 dias,
   usuários únicos 610 [595, 625] contra 591 [505, 677] do fórum real, posts-raiz 593 contra
   569, usuários ativos por dia 37,3 contra 32,7; e os desvios: comentários 904 contra 733,
   tamanho de thread 2,53 contra 2,25, toxicidade 0,143 contra 0,119, núcleo 3,7× maior.
   Versão de 24/04/2026.
   *Confiabilidade:* a fonte mais útil deste documento, porque é o raro trabalho que compara
   contra dado real com intervalo de confiança em vez de julgar por plausibilidade. Preprint.

4. **Stop Drawing Scientific Claims from LLM Social Simulations Without Robustness Audits**
   (Jinyi Ye, Lei Cao, Ding Chen, Emilio Ferrara) — `https://arxiv.org/pdf/2605.18890`
   Sustenta: as três fragilidades — sensibilidade ao prompt, dependência da versão do modelo,
   sensibilidade à seed — e o argumento de que conclusão científica exige auditoria de robustez.
   20/05/2026.
   *Confiabilidade:* preprint; autor sênior com trajetória em desinformação computacional. A
   leitura desta rodada foi do documento, mas a descrição das fragilidades veio em parte da
   estrutura e dos apêndices; não conferi as magnitudes específicas de cada fragilidade.

5. **When Synthetic Users Fail: A Cross-Domain Benchmark of LLM-Simulated Human Survey
   Responses** — `https://arxiv.org/html/2607.26348v1`
   Sustenta: o desenho (GSS 2016–2024 com 10 questões; WVS onda 7 com 63 países e 16 questões;
   quatro modelos; dois formatos de prompt; linhas de base não-LLM) e os resultados — empate ou
   derrota para a linha de base demográfica de 0,589 no GSS, 11 a 22 pontos percentuais abaixo
   no WVS, orientação política explicando 1,5% da variação real contra até 67% no modelo,
   inflação de 2 a 4× nas diferenças entre segmentos, segmento errado em 50% a 72% dos casos,
   e o achado de que modelos maiores estereotipam mais. 28/07/2026.
   *Confiabilidade:* preprint declaradamente em revisão por pares. É a base da parte cética
   deste mapa; se ela não sobreviver à revisão, os efeitos e1 e e2 mudam de peso.

6. **Synthetic-user startup Simile raises $200M at $2B valuation 5 months after $100M Series A**
   (TechCrunch) — `https://techcrunch.com/2026/07/30/synthetic-user-startup-simile-raises-200m-at-2b-valuation-5-months-after-100m-series-a/`
   Sustenta: Simile, fundada por Joon Sung Park; série B de 200 milhões liderada por Greenoaks a
   2 bilhões de avaliação em 30/07/2026, cinco meses depois de uma série A de 100 milhões
   liderada pela Index; CVS Health entre os clientes citados; a ligação com o experimento
   original ("Smallville").
   *Confiabilidade:* imprensa especializada de tecnologia, confiável para fatos de rodada de
   investimento; a avaliação de 2 bilhões é precificação de mercado privado, não medida de
   capacidade técnica.

### Conhecidas apenas por resultado de busca (não abertas — nenhuma afirmação deste documento se apoia exclusivamente nelas)

7. **Generative Agent Simulations of 1,000 People** (Park et al., `arXiv:2411.10109`) e a
   cobertura do Stanford HAI. Fundamenta a descrição das 1.052 pessoas, das duas horas de
   entrevista por participante, do entrevistador automatizado e da API restrita. Vista em
   resumo de busca e corroborada indiretamente pela matéria da TechCrunch (fonte 6), que
   identifica o mesmo autor. Tratada como razoavelmente firme, mas não verificada na íntegra.

8. **google-deepmind/concordia** (repositório) e material associado. Fundamenta a descrição da
   biblioteca, do padrão "mestre de jogo" e da versão 2.0 pós-torneio no NeurIPS. Resumo de
   busca.

9. **Materiais sobre o Digital Services Act** (DSA Observatory, TechPolicy.Press,
   Knight-Georgetown Institute). Fundamentam a existência das obrigações dos artigos 34 e 35,
   a inclusão do desenho do recomendador entre os fatores a avaliar, e a avaliação de que a
   primeira rodada de auditorias produziu pouca informação nova. Resumo de busca; o texto legal
   não foi lido nesta rodada.

10. **Material sobre WebGPU e modelos pequenos no navegador.** Fundamenta a afirmação de que
    WebGPU está ligado por padrão nos principais navegadores em 2026 e que a inferência no
    cliente custa zero por token. Origem majoritariamente de blogs técnicos, sem revisão.
    Fonte fraca, declarada como tal; o número específico de desempenho foi removido do texto
    (seção 8, item 4).

### Não abertas por falha técnica

11. **Synthetic Replacements for Human Survey Data? The Perils of Large Language Models**
    (*Political Analysis*, Cambridge). HTTP 429. Seria a fonte revisada por pares mais forte
    para o argumento cético; **nada neste documento se apoia nela**.

12. **ARTAI: An Evaluation Platform to Assess Societal Risk of Recommender Algorithms**
    (`arXiv:2409.12396`). PDF devolvido como binário ilegível. A menção a "protótipo acadêmico
    de plataforma de avaliação de risco societal de recomendador" na seção 4 se apoia apenas no
    título e no resumo de busca, e está formulada com essa cautela.

### Não tem fonte — especulação declarada da própria skill

- Todos os efeitos de 3ª ordem da seção 5.
- Os três cenários da seção 9.
- Os três wildcards da seção 6.
- A cronologia do teste de colisão automotivo usada como comparável em 7.2 (lei de 1966,
  programa de avaliação no fim dos anos 1970) vem de conhecimento prévio do modelo e **não foi
  verificada nesta rodada**; o argumento depende da ordem de grandeza — mais de uma década —,
  não das datas exatas.
- O dado de 2 em 7.776 anúncios de diretório vem do levantamento do próprio aluno, relatado na
  formulação do tema. Não foi reproduzido aqui.

---

## 12. Anexo — o levantamento bruto

### A entrevista (Passo 1) — como foi respondida

Respostas recebidas junto com o tema, sem rodada de perguntas:

- **Horizonte:** 2031.
- **Recorte:** quem projeta mídia e interação; global, com nota sobre o Brasil.
- **Descartado:** só a régua da disciplina (o que já é comum em produto de massa não entra).
  Nenhuma outra exclusão.
- **Viés:** neutro.
- **Palpite de disrupção central:** nenhum — levantar do zero.
- **Extra dado espontaneamente:** ideias óbvias a excluir são "as que servem para qualquer
  tema"; o que faria mudar de ideia é evidência de adoção além da maioria inicial (Rogers) ou
  de que a tecnologia só melhora o que existe.

Condição de saída satisfeita (itens 1 e 2 respondidos). O último item foi usado como critério de
corte na seção 4: nenhuma das três raízes aprovadas passa de maioria inicial em adoção, e todas
as três mudam quem pode fazer o quê, não apenas a velocidade.

### Candidato a disrupção-raiz rejeitado

**"Modelagem baseada em agentes para testar política pública antes de aplicá-la."**
- Teste 1 (o que rompe?): muda quem pode testar política sem aplicá-la. *Passaria.*
- Teste 2 (por que agora?): não há razão de agora. Existe há décadas, com literatura,
  ferramenta e uso institucional. *Falhou.*
- Teste 3 (o que falta?): nada. Está em produção e em uso comum na comunidade relevante.
  *Falhou.*
- **Veredito:** madura. Foi para a seção 3. A versão emergente do mesmo objeto é o agente com
  modelo de linguagem, que é D1.

**Segundo candidato considerado e não promovido: "a sociedade sintética como evidência
admissível em decisão pública."** Não foi rejeitada por ser madura — foi rejeitada por não ser
uma tecnologia, e sim uma *consequência de status epistêmico*. Está no mapa como e4.2, e3.1 e
como o wildcard A. Registro aqui porque foi a decisão de classificação mais discutível desta
rodada: quem quiser reorganizar o mapa pode promovê-la a raiz e derivar dela uma árvore própria
sobre validação, responsabilidade e prova.

### Efeitos cortados, com o motivo

| Efeito rascunhado | Ordem | Por que caiu |
|---|---|---|
| "A pesquisa de opinião com pessoas acaba." | 2ª | Contradito pela evidência: desempenho abaixo de linha de base demográfica no nível individual. Substituído por coexistência com divisão de papéis. |
| "Ética de pesquisa passa a se aplicar a agentes." | 3ª | Não passa no teste de especificidade — é pergunta em aberto, não consequência derivável. Virou wildcard B. |
| "Tudo que é interface vai ser testado por agente." | 1ª | "Tudo" não é efeito, é ausência de análise (regra do Passo 5). Reescrito como e7, com escopo em produto agêntico. |
| "A simulação social muda a educação." | 3ª | Vago demais. Reescrito como e6.1.1 e e6.2.1, que dizem o que exatamente muda. |
| "Empresas de pesquisa de mercado desaparecem." | 2ª | Extrapolação linear sem precedente; empresas de pesquisa absorveram automação antes sem desaparecer. Cortado. |
| "Agentes sintéticos ganham direitos." | 3ª | Fora do escopo do tema (é ética de agente, não simulação como método) e sem sinal corrente. Cortado. |

### Buscas feitas e o que renderam

| Busca | Rendeu |
|---|---|
| generative agents LLM social simulation 2026 million agents platform | AgentSociety (arXiv 2502.08691) e seu ecossistema. **Útil.** |
| OASIS CAMEL-AI one million agents social media simulation arXiv | OASIS (arXiv 2411.11581) e repositório. **Útil.** |
| synthetic users market research LLM replace survey respondents validity 2026 | O benchmark "When Synthetic Users Fail" e um conjunto de material de consultoria (não usado). **Útil.** |
| Park "generative agent simulations of 1,000 people" interview agents Stanford | Confirmou o método das 1.052 entrevistas; não abri o preprint. **Parcial.** |
| Concordia DeepMind generative agent-based modeling library | Descrição da biblioteca e do padrão mestre-de-jogo; v2.0. **Parcial.** |
| Digital Services Act systemic risk assessment recommender system simulation testing before deployment 2026 | Confirmou as obrigações dos artigos 34/35 e a crítica à primeira rodada de auditorias. **Não achou** exigência de simulação pré-lançamento — que é justamente por isso que e4.2 é sinal fraco. |
| LLM agent simulation criticism validation crisis social science 2026 arXiv | A veia crítica inteira: replicação do fórum, auditoria de robustez, revisão sobre validação. **A busca mais produtiva desta rodada.** |
| Brasil simulação social agentes IA política pública teste plataforma 2026 | Material sobre agentes de IA no setor público e sobre IA nas eleições de 2026, **nada sobre simulação social como método no Brasil**. Resultado negativo registrado; é o que sustenta a formulação cautelosa da nota sobre o Brasil. |
| WebGPU in-browser LLM agents simulation local small model 2026 | WebGPU por padrão nos navegadores; custo zero por token no cliente. Fontes fracas. **Parcial.** |
| synthetic users startup funding 2026 simulate customers product testing | Simile — a descoberta mais forte da rodada para o lado do dinheiro. **Útil.** |

### Tentativas que falharam

- `cambridge.org` — *Political Analysis*, "Synthetic Replacements for Human Survey Data" —
  HTTP 429. Não relida.
- `arxiv.org/pdf/2409.12396` — ARTAI — PDF devolvido como binário; a ferramenta não extraiu
  texto. Não tentei o HTML alternativo.

### Nomes que apareceram no caminho e não entraram no corpo do documento

`SocioVerse` (world model de simulação social apoiado em um repositório declarado de 10 milhões
de usuários reais), `Silicon Society Cookbook` (espaço de projeto de simulações sociais com
LLM), e um trabalho sobre simular atitudes de segurança e privacidade de usuário final. Todos
apareceram apenas como título em resultado de busca. Registrados aqui porque são os pontos de
partida mais prováveis para quem continuar este mapa — especialmente o primeiro, que ataca
diretamente o problema de corpus de calibração levantado na nota sobre o Brasil.

### Observação de método, para quem repetir esta rodada

O Passo 2 fez o trabalho que o `DUVIDAS.md` do autor da skill previu que ele faria: a primeira
passagem do Passo 4 produziu uma raiz madura com justificativa plausível e fonte real, e só a
resposta escrita à terceira pergunta a derrubou. O que este documento acrescenta ao aprendizado
registrado lá é uma segunda armadilha, de natureza diferente: **a analogia que vem junto com a
pergunta**. O teste de colisão apareceu na formulação do tema, foi aceito como apoio, e só caiu
quando eu procurei a cronologia real do comparável. A lição operacional: o Passo 6.2 não deve
ser aplicado só aos efeitos que a skill gerou, mas também aos comparáveis que a skill herdou de
quem fez a pergunta.
