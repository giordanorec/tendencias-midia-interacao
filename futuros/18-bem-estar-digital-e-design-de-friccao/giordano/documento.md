---
tema: "Bem-estar digital e design de fricção"
slug: bem-estar-digital-e-design-de-friccao
autor_login: grec
zona_de_interesse: Pessoas e dados
data: 2026-09-11
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 17
efeitos_ordem_2: 19
efeitos_ordem_3: 12
tecnologias_citadas: [scroll infinito, autoplay, sistema de recomendação, DSA, Digital Fairness Act, ECA Digital, Declared Age Range API, Family Controls, Screen Time, Android Digital Wellbeing, NFC, e-ink, Aperture, Paper Phone, Envelope, Brick, Bloom, Yondr, Light Phone III, one sec, Opal, Freedom, Unpluq, WellScreen, intervenção gradual visual, intervenção gradual háptica, verificação de idade, Persona, lembrete de pausa do ChatGPT, harness de agente, breakwatch, Claudeholic, dopa-mean, PlugBrain, scrollwrapped]
fontes: 18
confianca: media
experimento: Freio de agente — um gancho no harness que intercepta o pedido antes da execução e testa duas fricções concorrentes (pausa por tempo × devolver a tarefa a quem pediu), medindo delegação e não minutos
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Depois de vinte anos otimizando engajamento, a fricção virou objeto de projeto — mas não pelo
caminho que a literatura de bem-estar digital previa. O bloqueador de app e o contador de tempo
de tela chegaram à maioria e não mudaram o agregado: o Digital Wellbeing do Android segue em
"beta" e praticamente parado desde 2018, e 97% dos aplicativos comerciais da categoria não têm
nenhum estudo que os sustente. O que se move em 2026 são quatro coisas diferentes. A primeira é
que a fricção deixou de ser opção do usuário e virou obrigação do produto: em 6 de fevereiro a
Comissão Europeia disse preliminarmente que o scroll infinito do TikTok viola o DSA, em 10 de
julho disse o mesmo da Meta, e o remédio que ela nomeia — desligar scroll infinito e autoplay
por padrão, impor pausas de tela inclusive noturnas, tornar o recomendador menos orientado a
engajamento — é literalmente uma especificação de interface escrita por um regulador. A segunda
é que a intervenção saiu do software e virou objeto com preço: Brick a US$ 59, Bloom a US$ 39 com
mais de 60 mil unidades vendidas, capa Aperture, bolsa Yondr, papel impresso. A terceira é que o
alvo começou a mudar do feed para o agente de IA, onde o vocabulário herdado não serve — não há
rolagem para interromper, e o valor da ferramenta cresce com a sessão longa. A quarta, ainda
frágil, é que a métrica pode deixar de ser o minuto. Contra tudo isso pesa o resultado
australiano: a proibição para menores de 16 anos moveu o uso de 86% para 81% em três meses. Para
quem projeta mídia e interação, a aposta central deste mapa é que até 2031 a fricção deixa de ser
um recurso que a pessoa instala e passa a ser, ao mesmo tempo, uma obrigação legal auditável, um
bem de consumo pago e um problema não resolvido de design de IA — três coisas que não cabem na
mesma tela.

## 2. O tema

O objeto aqui é o **design contra o próprio uso**: interfaces desenhadas para serem usadas menos,
interrompidas mais cedo ou abandonadas mais fácil. Não é acessibilidade, não é privacidade e não
é moderação de conteúdo. É a decisão, dentro do próprio projeto, de inserir custo onde a prática
dos últimos vinte anos mandava remover custo.

Isso encosta em mídia e interação em três pontos concretos. Primeiro, **o fim de feed**: o scroll
infinito eliminou uma superfície de interface que existia em toda publicação — o fim. Se ele for
desligado por padrão, alguém precisa desenhar de novo o que aparece quando o conteúdo acaba, e
ninguém desenha isso há quinze anos. Segundo, **o objeto**: a intervenção migrou para hardware,
capa, bolsa, papel e chaveiro NFC, o que coloca molde, material e ritual dentro do escopo de
quem antes só desenhava tela. Terceiro, **a forma da resposta**: quando a ferramenta é um agente
que faz o trabalho, a fricção não pode ser temporal sem destruir o produto, e passa a ser uma
propriedade do texto que a máquina devolve — devolver a pergunta em vez da conclusão é uma
decisão de interação, não de modelo.

Merece mapa de futuro, e não levantamento de estado da arte, por uma razão específica: **as
evidências de 2026 apontam em direções opostas**. O regulador europeu afirma que a fricção
funciona e que as plataformas precisam ser obrigadas a ela; o regulador australiano mediu a
própria proibição e encontrou quatro pontos percentuais. Um estudo de campo com 104 pessoas
mostra que a intervenção certa depende do traço psicológico de quem a recebe; a indústria vende
uma intervenção só para todo mundo. Um levantamento acadêmico mostra que 97% dos aplicativos da
categoria não têm pesquisa que os sustente, e o mercado projetado para eles cresce a 34,9% ao
ano. Não dá para descrever isso como "estado da arte" — é um campo cujas premissas estão sendo
decididas agora, e as decisões são de design.

Fronteira declarada: **companheiro digital e vínculo afetivo com IA são o tema 19**. Aqui o
objeto é reduzir, interromper e recuperar atenção. A raiz R3 toca a IA apenas pelo ângulo da
interrupção e da delegação — não pelo do vínculo.

## 3. Onde isso está hoje

### O que já existe e funciona

**A intervenção regulatória sobre o núcleo do produto.** Em **6 de fevereiro de 2026** a Comissão
Europeia publicou conclusões preliminares de que o desenho do TikTok viola o Digital Services
Act. Os recursos nomeados são scroll infinito, autoplay, notificações por push e o recomendador
altamente personalizado; a formulação da Comissão é que eles "recompensam constantemente o
usuário com conteúdo novo" e colocam o cérebro em "modo piloto automático". A Comissão diz
explicitamente que as ferramentas de tempo de tela e controle parental existentes são
insuficientes porque são "fáceis de dispensar e introduzem fricção limitada" — ou seja, o
argumento regulatório **é um argumento de design de fricção**. Os remédios sugeridos: desligar o
scroll infinito ao longo do tempo, impor pausas de tela efetivas inclusive noturnas, e adaptar o
recomendador. Em **10 de julho de 2026** a Comissão emitiu conclusões preliminares equivalentes
sobre Instagram e Facebook, com a mesma lista de recursos e o pedido de que autoplay e scroll
infinito sejam desligados **por padrão**. Em ambos os casos a decisão final ainda não existe; o
teto possível é 6% do faturamento mundial anual.

**A base legal.** Segundo o serviço de estudos do Parlamento Europeu, o DSA não define "design
viciante": a acusação se apoia no artigo 25 (proibição de interface enganosa ou manipulativa) e
no artigo 34 (obrigação de avaliar riscos sistêmicos). O Digital Fairness Act, esperado para
antes do fim de 2026, é a peça que deve nomear o problema diretamente.

**No Brasil.** O **ECA Digital (Lei 15.211/2025)** entrou em vigor em **17 de março de 2026** e
proíbe expressamente práticas de design manipulativo, incluindo recursos que estimulem uso
compulsivo; exige verificação de idade que não seja autodeclaração, vinculação da conta de menor
de 16 anos a um responsável e configuração de privacidade no padrão mais protetivo. A fiscalização
é da ANPD, com sanções administrativas previstas a partir de novembro de 2026. Em paralelo, a
**Lei 15.100/2025** (restrição de celular na escola) está implementada em **92% das escolas**
segundo a pesquisa nacional do Inep com Instituto Alana e Unesco, respondida por **8.189 gestores
entre março e abril de 2026** e divulgada em 30 de junho: 95% dos gestores relatam maior
concentração, 97% maior participação, 86% redução de ansiedade percebida.

**O objeto de desconexão como produto.** A Fortune, em 13 de fevereiro de 2026, descreve a
categoria com números: **Bloom**, dispositivo de aço a US$ 39, criado por dois universitários em
2024, **mais de 60 mil unidades vendidas**; **Brick**, chaveiro NFC a US$ 59, fundado em 2023,
que exige encostar o telefone no objeto físico para destravar os apps. O **Light Phone III** é
vendido entre US$ 699 e US$ 799. O mercado de "digital detox e attention wellness" é estimado
pela Fact.MR em **US$ 0,75 bilhão em 2026**, com serviços de bloqueio de app respondendo por 31%
e assinatura de app por 45% da entrega; os fornecedores que ela nomeia são Headspace, Calm,
Freedom, Opal, Yondr, Unplugged Rest e Unpluq.

**A fricção paga.** A **Opal** faturou **US$ 17,1 milhões em 2025** e opera com cerca de 33
pessoas, sem captação divulgada. Ou seja: existe demanda solvente para ser menos engajado.

**A fricção como intervenção no assistente.** A OpenAI passou a exibir lembrete de pausa —
"You've been chatting for a while — is this a good time for a break?" — e a mudar a forma da
resposta em temas pessoais, devolvendo perguntas e prós e contras em vez de conclusão. A
**Character.AI** removeu o chat aberto para menores de 18 anos a partir de **25 de novembro de
2025**, com limite intermediário de duas horas por dia reduzido progressivamente, e verificação
de idade por modelo próprio somado a terceiros (Persona).

### O que existe e ainda não funciona

**A prateleira de bem-estar digital.** A revisão de funcionalidades de Almoallim e Sas (JMIR
Formative Research, 2022) examinou 39 aplicativos comerciais e 17 acadêmicos: 72% rastreiam uso,
64% comparam contra limites, **54% criam obstáculos**, e **97% (38 de 39) não têm pesquisa
documentada que os sustente**. A conclusão dos autores é que a categoria é estreita demais —
mede uso sem sentido em vez de apoiar uso com sentido.

**O sistema operacional.** O Digital Wellbeing do Android segue com rótulo "beta" e praticamente
sem evolução desde 2018; a única adição relevante em oito anos foi o "Heads Up". A crítica
central é que as ferramentas foram desenhadas para o comportamento de 2018 — rolar posts de
amigos — e não para feed algorítmico de vídeo curto de desconhecidos, e que o temporizador é
contornado em dois toques.

**A proibição por cima.** A Austrália proibiu redes sociais para menores de 16 anos em 10 de
dezembro de 2025. O regulador eSafety mediu três meses depois: **81% dos menores de 16
continuavam usando alguma plataforma restrita, contra 86% antes**; o uso diário ficou em ~58%
contra ~60%; cerca de 4,7 milhões de contas foram removidas, e a maioria das crianças que
seguiram usando **nem precisou contornar nada** — as plataformas não as identificaram. Entre
quem precisou, 70% disse que foi fácil.

**A intervenção única para todo mundo.** O estudo de campo de Meinhardt, Dragic, Colley, Lukoff e
Rukzio (IMWUT, 2026), com **104 participantes em 7 dias** e app próprio medindo rolagem em
TikTok, Instagram, Facebook e YouTube Shorts, comparou pop-up explícito, escurecimento gradual da
tela e vibração crescente após 15 minutos de rolagem contínua. O pop-up explícito teve a maior
eficácia objetiva, mas sua aceitação despencava rápido; as intervenções graduais eram percebidas
como insuficientes justamente por quem tem alta impulsividade e baixo autocontrole — o público
que mais precisaria delas.

**A medida.** O trabalho de Bhat, Shi, Song, Yoo e Saha (CHI 2026), com a ferramenta WellScreen e
**25 estudantes em duas semanas**, mostrou erro sistemático de percepção: as pessoas subestimam o
tempo em redes sociais e em apps de produtividade e superestimam o de entretenimento. A
intervenção — comparar estimativa com dado real — produziu ~10% de melhora em afeto positivo. Os
autores argumentam que reduzir tempo de tela simplifica demais o problema.

### Quem constrói

Quatro grupos com incentivos diferentes, e é a diferença entre eles que produz este mapa.
**Reguladores** (Comissão Europeia via DSA/DFA, ANPD via ECA Digital, MEC/Inep na lei escolar) —
querem obrigação auditável. **Fabricantes de sistema** (Apple, Google) — controlam as APIs de
restrição e o novo aparato de idade (Declared Age Range, com faixas <13, 13–15, 16–17, 18+), e
não têm incentivo próprio para reduzir uso. **Empresas de fricção** (Opal, one sec, Freedom,
Brick, Bloom, Unpluq, Yondr, Light Phone, estúdios como o Special Projects) — vivem da falha das
duas primeiras. **Fornecedores de IA** (OpenAI, Character.AI) — chegaram à fricção por incidente
e responsabilidade, não por demanda.

### O número que descreve a adoção

Não há um número único honesto. O que existe: **US$ 0,75 bi** de mercado estimado em 2026
(estimativa comercial da Fact.MR, ver §8); **US$ 17,1 milhões** de faturamento da Opal em 2025
(dado de fornecedor agregado); **60 mil** unidades de Bloom; **54%** dos apps comerciais da
categoria oferecendo obstáculo; **92%** das escolas brasileiras sob restrição legal. Para o
agregado de uso, **não achei número que sustente queda**: as séries de tempo de tela global
seguem em torno de 6h40–6h50 por dia e não caíram — o que faz do "bem-estar digital" uma
categoria que cresce em receita sem evidência de efeito agregado. Essa é a tensão que o mapa
inteiro tenta explorar.

## 4. As disrupções-raiz

### Candidatos recusados

*Candidato "bloqueador de app, contador de tempo de tela e modo não perturbe" recusado como raiz:
adoção em maioria desde 2018, embutido em iOS e Android, presente em 54% a 72% dos aplicativos da
categoria; tratado como contexto na seção 3.*

*Candidato "modo escala de cinza" recusado como raiz: é ajuste de acessibilidade do sistema
operacional, disponível há anos; melhoria sustentadora, não ruptura.*

*Candidato "proibição de celular na escola" recusado como raiz: no Brasil já está em 92% das
escolas — é maioria. Entra no mapa como contexto e como força motriz de R1 e R2, não como raiz.*

*Candidato "retiro de detox / turismo sem sinal" recusado como raiz: nicho estável há uma década,
sem ruptura de prática de design; aparece como segmento de mercado na seção 3.*

### R1 — A fricção deixa de ser opção do usuário e vira obrigação do produto

**O que rompe.** Rompe a premissa, vigente desde que existe produto digital, de que **a função
objetivo do design é do designer** — que otimizar engajamento é uma escolha de negócio legítima,
e que oferecer controles opcionais descarrega a responsabilidade. A Comissão inverteu as duas
coisas: disse que os controles opcionais não contam porque "são fáceis de dispensar e introduzem
fricção limitada", e passou a especificar mecânica de interface (desligar scroll infinito, pausa
noturna, recomendador menos orientado a engajamento). Não é "fazer o mesmo, melhor": é outro dono
da decisão.

**Por que agora, e não há cinco anos.** O DSA só passou a valer para plataformas muito grandes em
2023–2024, e a máquina de investigação só produziu os primeiros casos de **design** — não de
conteúdo — em 2026. No Brasil, o ECA Digital só entrou em vigor em 17 de março de 2026. A
pré-condição não é técnica, é institucional: até agora não havia instrumento que alcançasse a
camada de interface.

**Onde está na difusão.** Entre `demo pública` e `produto de nicho`. Há conclusões preliminares
contra as duas maiores plataformas de vídeo curto do Ocidente e uma lei em vigor no Brasil, mas
**nenhuma decisão final, nenhum redesenho entregue e nenhuma multa aplicada**.

**O que ainda falta acontecer.** Decisão final de não conformidade em pelo menos um caso;
esgotamento do recurso judicial; a primeira entrega de produto redesenhado; o texto do Digital
Fairness Act; e as primeiras sanções da ANPD, previstas para novembro de 2026.

**Quem bloqueia.** As próprias plataformas, por dois caminhos simultâneos: o recurso (a Meta já
respondeu que a Comissão não considerou as Teen Accounts, que permitem corte noturno e teto de 15
minutos diários) e a conformidade mínima — implementar a letra do remédio sem o efeito.

### R2 — A intervenção sai do software e vira objeto, ritual e mobília

**O que rompe.** Rompe a premissa de que o aparelho é o lugar onde se administra o próprio uso do
aparelho. Um bloqueador de software é revogável pelo mesmo dedo que o instalou; um chaveiro NFC
que ficou em casa não é. Rompe também o canal: a fricção deixa a loja de aplicativos — onde vive
sob as regras de quem lucra com engajamento — e passa a ser vendida como bem físico, com margem,
frete e devolução. E rompe o repertório profissional: molde, material e gesto entram no escopo de
quem projetava tela.

**Por que agora, e não há cinco anos.** Três pré-condições se juntaram. O bloqueador de software
saturou e ficou demonstravelmente contornável. NFC e e-ink baratearam a ponto de um objeto de
função única custar US$ 39. E a compra em lote por instituição (escola sob a Lei 15.100, empresa)
criou um comprador que não é o usuário — o que muda a economia inteira da categoria.

**Onde está na difusão.** `produto de nicho` entrando em `adoção precoce`. Sessenta mil unidades
de um produto, US$ 0,75 bi de mercado estimado, e um item — a bolsa em escola — já em maioria
institucional no Brasil.

**O que ainda falta acontecer.** Retenção medida além do primeiro ano; um fabricante de aparelho
expor o estado físico do acessório ao sistema; e a passagem do objeto de sinal de status a
utensílio.

**Quem bloqueia.** Apple e Google, que controlam as APIs de restrição (Screen Time, Family
Controls) das quais esses objetos dependem para efetivamente travar algo. Podem absorver a
categoria, e podem estrangulá-la sem anunciar.

### R3 — O alvo da fricção muda do feed para o agente de IA

**O que rompe.** Rompe todo o vocabulário herdado. As três alavancas do bem-estar digital — cortar
tempo, esconder conteúdo, interromper rolagem — pressupõem que o dano é **consumo passivo medido
em minutos**. Com um agente, não há rolagem para interromper, a sessão longa é exatamente o
produto, e o dano alegado é de outra natureza: delegação de cognição, perda do estado de fluxo e
dependência relacional. Rompe também a premissa de que a fricção é externa ao artefato: a única
fricção disponível num agente é a **forma da resposta** — devolver a pergunta, recusar a
conclusão, pedir que a pessoa decida —, o que faz do bem-estar uma propriedade do texto gerado.

**Por que agora, e não há cinco anos.** O agente só virou ambiente de trabalho diário em 2025–2026.
E as primeiras respostas de produto já existem: lembrete de pausa no ChatGPT, mudança da forma da
resposta em temas pessoais, e o corte do chat aberto para menores de 18 na Character.AI em 25 de
novembro de 2025. Do lado do trabalho, a BCG (abril de 2026, ~1.500 trabalhadores) encontrou 14%
relatando "ressaca mental" de uso de IA, e — o dado mais útil deste mapa — **produtividade que
cresce até o terceiro agente simultâneo e cai a partir do quarto**.

**Onde está na difusão.** Entre `demo pública` e `produto de nicho`. Existem intervenções em
produção (lembrete de pausa, corte etário), mas nenhuma delas foi desenhada para o problema
específico da delegação; são o vocabulário do feed transplantado.

**O que ainda falta acontecer.** Uma intervenção que meça delegação em vez de tempo; evidência de
que a fricção de forma muda comportamento; e um caso regulatório sobre uso de IA por adulto — hoje
toda a pressão é sobre menores.

**Quem bloqueia.** O próprio fornecedor, cuja receita é por token ou assinatura e cuja métrica de
sucesso é uso; e a empresa cliente, que comprou o agente para fazer mais com menos gente, não para
desacelerar ninguém.

### R4 — A métrica deixa de ser o minuto

**O que rompe.** Rompe a unidade de conta de todo o campo. Diagnóstico, produto, conformidade,
relatório para pais e política pública estão todos escritos em minutos de tela. Se o minuto deixa
de ser a medida — porque as pessoas erram sistematicamente a própria estimativa, porque a
intervenção certa depende do traço psicológico de quem a recebe, e porque o regulador já chamou os
controles de tempo de inefetivos —, então o painel, a meta, o limite e a multa precisam ser
reescritos em outra coisa.

**Por que agora, e não há cinco anos.** Porque só agora há evidência empírica dos dois lados: a
percepção errada é medida (WellScreen, CHI 2026) e a dependência de traço é medida (IMWUT 2026,
n=104). Antes havia crítica conceitual sem dado.

**Onde está na difusão.** `laboratório` entrando em `demo pública`. Estudos com 25 e 104
participantes, e protótipos de aluno (scrollwrapped, screen-time-stocks). Nenhum produto de escala.
Por isso toda a cadeia derivada desta raiz carrega confiança baixa.

**O que ainda falta acontecer.** Um indicador substituto que seja ao mesmo tempo interpretável pela
pessoa e auditável por terceiro. É um requisito duplo que ninguém satisfez, e pode não ser
satisfazível — ver e15.1.

**Quem bloqueia.** Quem vende conformidade e quem vende controle parental: ambos precisam de um
número comparável entre pessoas e entre trimestres, e "intenção" não é isso.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A fricção deixa de ser opção do usuário e vira obrigação do produto, especificada por regulador
    efeitos:
      - id: e1
        ordem: 1
        efeito: Plataformas grandes passam a embarcar interrupção por padrão e a tratá-la como requisito de conformidade, não como recurso de bem-estar
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O fim de feed volta a existir e vira uma superfície de design disputada, com tela de encerramento, paginação e estado de "você está em dia"
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O fim de feed vira inventário publicitário premium e a fricção passa a ser monetizada em vez de reduzida
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O time jurídico entra no fluxo de decisão de interface, e mudança de feed passa a exigir parecer como já exige parecer de privacidade
            sinal: fraco
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: O histórico de alteração de interface vira peça documental auditável, e protótipos descartados passam a ser guardados como prova
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A verificação de idade vira a infraestrutura de fato da fricção, e o custo de projetar passa a incluir uma camada de identidade
        sinal: medio
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Produtos passam a manter duas interfaces em paralelo, a verificada e a não verificada, dobrando o custo de desenho de fluxos sensíveis
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: O custo da camada de identidade empurra produto pequeno para fora dos mercados regulados, e a fricção obrigatória concentra o mercado nos grandes
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: O efeito agregado pequeno das medidas impostas alimenta o argumento de que regular design não funciona, e freia a própria agenda regulatória
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Reguladores deslocam a exigência de desligar o recurso para provar o efeito, e passam a pedir métrica de resultado auditada por terceiro
            sinal: fraco
            prazo: 2030
            confianca: baixa
      - id: e4
        ordem: 1
        efeito: O designer de crescimento perde seu instrumento principal nos mercados regulados, e a otimização de engajamento migra para os recursos e regiões ainda não nomeados
        sinal: fraco
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: O produto brasileiro herda o desenho europeu por economia de manutenção, e o ECA Digital ganha eficácia que sua fiscalização sozinha não teria
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A fricção chega ao Brasil sem o debate público que a produziu, e vira ajuste de configuração em vez de escolha de projeto
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: Uma plataforma passa a anunciar a própria fricção como diferencial competitivo, vendendo a promessa de não fazer o usuário perder a hora
        sinal: fraco
        prazo: 2029
        confianca: baixa
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: O modo calmo vira camada paga, e a atenção protegida passa a ser um bem de assinatura como já é o silêncio publicitário
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Forma-se uma divisão de classe da atenção, em que quem paga é interrompido menos e quem não paga continua sendo o inventário
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A intervenção sai do software e vira objeto, ritual e mobília
    efeitos:
      - id: e6
        ordem: 1
        efeito: Consolida-se uma categoria de acessório de desconexão com preço, margem e canal próprios, fora das lojas de aplicativo
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O objeto de desconexão vira signo social visível, e o design passa a otimizar para ser visto sendo usado tanto quanto para o efeito
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A categoria decai como moda decai, e encolhe sem que o uso agregado tenha mudado
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: O aplicativo de bem-estar puro software é espremido entre o sistema operacional de um lado e o objeto do outro, e vira commodity de assinatura barata
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e7
        ordem: 1
        efeito: A peça física entra no repertório de quem projeta interação, e o protótipo de interface passa a incluir um molde
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Fabricantes de aparelho passam a expor ao sistema o estado físico do acessório, e o modo reduzido deixa de ser aplicativo de terceiro
            sinal: fraco
            prazo: 2030
            confianca: media
          - id: e7.2
            ordem: 2
            efeito: O aparelho único deixa de ser premissa de projeto, e funções voltam a objetos dedicados como câmera sem tela e leitor e-ink
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: O objeto de função única ganha um segundo motivo além do bem-estar, que é não carregar a identidade verificada do aparelho principal
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: Escola e empresa passam a comprar fricção em lote, e a decisão sobre a própria interrupção deixa de ser individual
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: O consentimento vira o problema de design central desses produtos, porque quem escolhe a fricção não é quem a sofre
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Aparece a fricção negociada, em que a pessoa define a própria regra e a instituição apenas verifica o cumprimento
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: O objeto de fricção depende comercialmente da mesma rede que combate, porque é nela que ele é descoberto e desejado
        sinal: medio
        prazo: 2028
        confianca: media
  - disrupcao: O alvo da fricção muda do feed para o agente de IA
    efeitos:
      - id: e10
        ordem: 1
        efeito: O fornecedor de IA embute interrupção e desencorajamento no próprio produto antes de existir regulação específica sobre isso
        sinal: medio
        prazo: 2027
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: A fricção de IA deixa de ser temporal e se desloca para a forma da resposta, com o modelo devolvendo a decisão em vez da conclusão
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: Surge um eixo explícito de produto entre fazer por você e fazer com você, e a mesma empresa vende os dois com preços diferentes
                sinal: fraco
                prazo: 2030
                confianca: baixa
              - id: e10.1.2
                ordem: 3
                efeito: A recusa deliberada do modelo é lida como degradação do serviço, e a fricção pedagógica vira motivo de troca de fornecedor
                sinal: fraco
                prazo: 2029
                confianca: media
          - id: e10.2
            ordem: 2
            efeito: O próprio agente é usado para desligar a fricção do agente, e a intervenção é contornada exatamente por quem mais depende dela
            sinal: fraco
            prazo: 2029
            confianca: media
      - id: e11
        ordem: 1
        efeito: O bem-estar entra no harness do agente de programação, e a interrupção passa a ser medida em sessões paralelas em vez de minutos de tela
        sinal: fraco
        prazo: 2029
        confianca: baixa
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: O sinal de exaustão passa a ser lido em agregado de equipe, e não por pessoa, para não virar instrumento de avaliação individual
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: A métrica de produtividade agêntica ganha um denominador humano e entra em contrato de fornecimento de ferramenta
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: A verificação de idade e o corte de uso chegam ao assistente antes de chegarem ao navegador, porque o dano alegado é relacional e não informacional
        sinal: medio
        prazo: 2027
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: A fricção de IA é tratada pela via da proteção da criança e da saúde mental, com a ANPD no Brasil e o eixo DSA na Europa, e não pela via do direito do consumidor
            sinal: fraco
            prazo: 2030
            confianca: baixa
      - id: e13
        ordem: 1
        efeito: O profissional em início de carreira perde o caminho de prática, porque a tarefa que o formava é a que o agente executa primeiro
        sinal: fraco
        prazo: 2029
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: A fricção pedagógica migra do produto para o contrato de formação, e passa a ser comprada pela empresa como treinamento em vez de vir embutida na ferramenta
            sinal: fraco
            prazo: 2031
            confianca: baixa
      - id: e14
        ordem: 1
        efeito: O vocabulário de fricção do feed é importado inteiro para a IA e falha, porque não há rolagem para interromper nem minuto que descreva o dano
        sinal: medio
        prazo: 2028
        confianca: media
  - disrupcao: A métrica do bem-estar digital deixa de ser o minuto
    efeitos:
      - id: e15
        ordem: 1
        efeito: A unidade de medida migra de tempo para discrepância entre uso percebido e uso real, e o painel passa a mostrar erro de estimativa em vez de total
        sinal: fraco
        prazo: 2029
        confianca: baixa
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: A métrica antiga sobrevive por necessidade jurídica, porque pausa de tela é auditável para efeito de multa e intenção não é
            sinal: fraco
            prazo: 2029
            confianca: media
          - id: e15.2
            ordem: 2
            efeito: Quem vende relatório de minutos para pais e para recursos humanos perde o produto, porque o número deixa de significar o que prometia
            sinal: fraco
            prazo: 2030
            confianca: baixa
      - id: e16
        ordem: 1
        efeito: A intervenção passa a ser escolhida por traço da pessoa e não por aplicativo alvo, com o mesmo produto entregando interrupções diferentes a perfis diferentes
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e16.1
            ordem: 2
            efeito: Personalizar a fricção exige inferir traço psicológico a partir do uso, e o produto de bem-estar herda o problema ético que dizia combater
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e16.1.1
                ordem: 3
                efeito: A inferência de traço para fins de bem-estar entra no escopo de avaliação de impacto do ECA Digital e vira objeto de fiscalização da ANPD
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e17
        ordem: 1
        efeito: A alegação de tempo bem gasto deixa de ser retórica de plataforma e passa a ser afirmação sujeita a prova, como já é a alegação de eficácia em saúde
        sinal: fraco
        prazo: 2030
        confianca: baixa
```

### O que o bloco não diz

**As classes de referência usadas em cada prazo.** Elas não cabem no YAML e são o que separa ano
de chute.

- **e1 (2028).** Referência: o banner de consentimento de cookies. Da vigência do GDPR em maio de
  2018 à ubiquidade visual do banner levou cerca de dois anos, e ali havia uma norma já aprovada.
  Aqui ainda estamos em conclusão preliminar, com recurso provável. Dois anos a partir de uma
  decisão final que não existe antes de 2027 põe o efeito visível em 2028, não antes.
- **e2 (2027, confiança alta — a única alta da primeira ordem).** Não depende de decisão
  regulatória nova: a Declared Age Range API da Apple já existe com faixas definidas, a
  Character.AI já contratou verificação de terceiro, e o ECA Digital já proíbe autodeclaração com
  sanção a partir de novembro de 2026. É o único efeito do mapa cujo mecanismo já está inteiro em
  produção.
- **e3 (2028).** Referência direta e recente: a Austrália. Três meses depois da proibição, 81%
  contra 86%. Se o número europeu se parecer com o australiano, o contra-argumento estará pronto
  antes da primeira multa.
- **e6 (2027, sinal forte).** Referência: o fone com cancelamento de ruído, que levou cerca de seis
  anos do nicho de viajante à categoria de massa. O acessório de desconexão está no ano três ou
  quatro dessa curva, com três artefatos verificáveis hoje — Bloom com 60 mil unidades, Brick e
  Light Phone III com preço e canal, Yondr com comprador institucional.
- **e8 (2027, sinal forte).** Já aconteceu no Brasil: 92% das escolas, medido pelo Inep com 8.189
  gestores. O prazo aqui não é previsão, é a extensão do mesmo movimento ao comprador corporativo.
- **e10 (2027).** Referência: o aviso de "jogue com responsabilidade" no jogo de aposta online, que
  levou cerca de cinco anos do primeiro gesto voluntário à obrigação legal. A IA está no primeiro
  ano desse ciclo, com o lembrete de pausa da OpenAI e o corte etário da Character.AI.
- **e15 (2029).** Referência: a migração de page views para tempo de leitura no jornalismo digital,
  cerca de cinco anos entre o primeiro argumento público e a adoção corrente. Aqui o argumento
  público tem um ano e a evidência tem n=25 e n=104. Cinco anos a partir de 2026 dá 2031; coloquei
  2029 para o **deslocamento começar a aparecer em produto**, não para se consolidar — e por isso a
  confiança é baixa.

**O que conta como sinal, efeito por efeito.** Os três `forte` da primeira ordem têm artefato
nomeado: e6 (Bloom, Brick, Light Phone III, Yondr, mercado estimado), e8 (Lei 15.100 com 92%,
Yondr em escolas). Os `medio` têm tentativa registrada mas não consolidada: e1 e e3 (conclusões
preliminares sem decisão), e2 (API existe, uso ainda parcial), e9 (a categoria cresce por
divulgação nas mesmas redes que bloqueia — observável, mas não quantificado), e10 e e12 (duas
empresas, não a indústria), e14 (o transplante de vocabulário é visível no lembrete de pausa do
ChatGPT, que é literalmente um contador de tempo de sessão), e16 (um estudo de campo). Os `fraco`
não têm caso: são inferência a partir de mecanismo.

**Cobertura STEEP e quem perde.** *Social*: e6.1, e8.1, e13. *Tecnológico*: e2, e7, e11, e16.
*Econômico*: e5.1, e6, e6.2, e9, e15.2. *Político*: e1, e3, e4, e12, e17. *Ecológico*: **ficou
vazia** — não encontrei mecanismo específico que ligue fricção de atenção a efeito ambiental sem
inventar; o candidato óbvio (menos uso, menos energia de datacenter) não sobrevive ao teste da
causa solta, porque o gasto energético de recomendação é marginal diante do de inferência de IA, e
cairia por outro motivo. Registrado como vazia em vez de preenchida à força.

*Quem perde*, explicitamente: o designer de crescimento (e4); o aplicativo de bem-estar
independente (e6.2); o aluno e o trabalhador que recebem a fricção que não escolheram (e8.1); o
profissional em início de carreira (e13); o vendedor de relatório de minutos (e15.2); e, em e5.1.1
e e2.1.1, quem não paga e quem é pequeno.

### Cruzamentos

**Convergência — o achado central deste mapa.** Dois ramos de raízes diferentes chegam ao mesmo
lugar: **e2** (a verificação de idade vira a infraestrutura da fricção regulatória) e **e12** (a
verificação de idade chega ao assistente de IA antes de chegar ao navegador). Somados, produzem um
resultado que nenhum dos dois anuncia sozinho: **para desenhar contra o próprio uso, o produto
precisa primeiro saber quem você é.** A fricção, que se apresenta como devolução de autonomia,
está sendo construída sobre uma camada de identificação obrigatória. É uma colisão frontal com o
tema 17 (soberania de dados): a mesma pessoa que quer o feed interrompido tende a não querer o
documento verificado, e em 2026 as duas coisas viraram a mesma engenharia. Quem projeta precisa
escolher, e a escolha não está sendo apresentada como escolha.

**Convergência secundária.** **e5.1** (o modo calmo como camada paga) e **e6** (o objeto de
desconexão com preço) chegam juntos a: **a fricção é um bem de consumo**. A resposta à pergunta
da roda — "quem paga para ser menos engajado?" — já tem número: a Opal faturou US$ 17,1 milhões em
2025, e 60 mil pessoas compraram um pedaço de aço de US$ 39. A consequência de terceira ordem
(e5.1.1) é desconfortável e específica: a atenção protegida vira produto premium, e quem não paga
permanece inventário.

**Retroalimentação.** Três ciclos, um por raiz. **e3** enfraquece R1: quanto mais a medida imposta
for medida e der pouco, menor o apetite regulatório para a próxima. **e6.1 → e6.1.1** enfraquece
R2: o objeto cresce por ser signo, e o que cresce por ser signo decai como signo. **e10.2**
enfraquece R3 de um jeito quase cômico e completamente plausível: a ferramenta que contorna a
fricção é a própria ferramenta friccionada — basta pedir a ela.

**Contradição não resolvida.** **e1** e **e16** não podem coexistir sem arbitragem. A fricção
mandatória exige uniformidade — o remédio tem de ser o mesmo para todos, senão não é auditável. A
fricção eficaz, pelo dado do IMWUT 2026, exige diferenciação por traço, porque o pop-up explícito
que funciona para alta impulsividade é o que mais irrita quem não precisa dele. Não resolvo:
registro as duas. **O que decide entre elas** é e3.1 — se o regulador aceitar prova de efeito em
vez de recurso desligado, e16 vence; se continuar especificando mecânica, e1 vence e a eficácia
vira problema de outra pessoa.

## 6. Sinais fracos e wildcards

### Sinais fracos

**1. Bem-estar embutido no harness do agente de código.** Onde foi visto: `breakwatch` e
`workshop-wellbeing-hooks` na varredura da turma — bem-estar dentro do fluxo de programação com
agente, não no telefone. É o tema 18 encontrando o tema 1. O que mudaria: se o lugar da
intervenção for a ferramenta de trabalho e não o aparelho pessoal, o comprador vira a empresa e o
desenho muda inteiro. **Sinal observável de crescimento:** um fornecedor de agente de código
embarcar isso de fábrica, ou um contrato corporativo citar carga cognitiva.

**2. A sátira como formato de intervenção.** `Claudeholic` (sátira sobre uso excessivo de IA
generativa), `scroll-scold` (repreensão verbal). O que mudaria: se o humor for mais eficaz que o
bloqueio, a intervenção sai do registro terapêutico e entra no registro editorial — outro ofício,
outro autor. **Sinal observável:** uma intervenção humorística aparecer num produto de empresa
grande, não em repositório de aluno.

**3. Fricção placebo.** `dopa-mean` — ícone falso que impõe trinta segundos de pausa, descrito
pelos próprios autores como efeito placebo e fricção cognitiva. Se a pausa funciona **sem** que
nada esteja de fato bloqueado, o custo de implementar bem-estar cai a quase zero e a premissa
econômica de R2 (o objeto precisa travar algo de verdade) desaba. **Sinal observável:** uma
replicação controlada comparando fricção real e fricção aparente.

**4. O papel como superfície de saída.** `Daily Paper Phone`, o Paper Phone do Special Projects. O
que mudaria: se a saída deixa de ser tela, a interface deixa de ser interativa — e um campo
inteiro de design volta a ser tipografia e diagramação. **Sinal observável:** uma operadora, um
banco ou uma escola oferecer resumo diário impresso ou em e-ink como serviço, não como
experimento.

**5. A intervenção que muda o que aparece, não quanto tempo dura.** `holiday-from-ai` substitui
posts sobre IA no LinkedIn por haicais de jardim; `amazon-unrated` some com estrelas e avaliações;
`Reravel` deixa o site menos atraente de propósito. É fricção sem relógio — ataca o gatilho e não
a duração. **Sinal observável:** um bloqueador comercial adotar substituição de conteúdo em vez de
bloqueio, ou um navegador embarcar "modo feio".

### Wildcards

**1. Uma plataforma grande desliga o scroll infinito por padrão no mundo inteiro, por vontade
própria, e ganha usuários.** *Mecanismo:* se a Comissão obrigar o desligamento na União Europeia,
a empresa terá pela primeira vez um experimento natural continental com grupo de controle do
tamanho do resto do mundo. Se o resultado for neutro em receita e positivo em retenção de longo
prazo, o cálculo se inverte sozinho, sem virtude. *Por que é improvável:* receita publicitária é
medida por trimestre e retenção por ano; nenhum executivo troca a primeira pela segunda enquanto
puder recorrer. *O que faria com o mapa:* R1 deixaria de ser a raiz e viraria consequência — a
regulação teria apenas antecipado uma decisão de mercado, e e5 saltaria de confiança baixa para
alta. *Sinal precoce:* a plataforma **parar de recorrer**, ou estender voluntariamente à América
Latina uma mudança exigida só na Europa.

**2. Um estudo grande derruba a premissa moral do campo.** *Mecanismo:* um desenho causal com
amostra grande mostra que a associação entre tempo de tela e sofrimento não sobrevive a
controle — que o tempo é sintoma e não causa. Não é fantasia: a pesquisa nacional do Inep sobre a
Lei 15.100 mede **percepção de gestores**, não desempenho nem saúde de aluno, e o próprio governo
anunciou estudo de desdobramentos. *O que faria com o mapa:* R1 perde a justificativa de saúde e
sobra o argumento de manipulação (artigo 25 do DSA, engano e não dano); R2 vira mercado de
bem-estar sem eficácia, como tantos outros; R4 se fortalece. *Sinal precoce:* o resultado do
estudo do MEC vir nulo em indicador objetivo apesar dos 95% de percepção positiva, ou uma
metanálise de alto impacto com efeito próximo de zero.

**3. Um incidente grave atribuído à dependência de agente, não de rede social.** *Mecanismo:* um
caso com repercussão nacional em que a delegação a um assistente — não o vínculo afetivo, que é o
tema 19, mas a delegação de decisão — produz dano material verificável, em contexto de trabalho ou
de saúde. *Por que é improvável no horizonte:* exige que a cadeia causal seja atribuível, e
delegação difusa quase nunca é. *O que faria com o mapa:* comprime R3 em dois anos e joga e12 para
adultos, o que hoje nenhuma regulação faz. *Sinal precoce:* a primeira ação judicial contra um
fornecedor de IA por dano decorrente de uso profissional excessivo, e não por conteúdo.

## 7. Contra o próprio mapa

### Pré-mortem — é 2031 e este mapa deu errado. Por quê?

**Razão 1 — nada foi decidido.** O recurso das plataformas se arrasta, o Digital Fairness Act sai
aguado, a ANPD não fiscaliza por falta de estrutura, e em 2031 o scroll infinito continua ligado
em todo lugar. Este é o desfecho mais provável entre os três, porque é o que a história de
regulação de plataforma vem entregando. *Aponta para:* e1. *Ação tomada:* prazo empurrado de 2027
para 2028.

**Razão 2 — a fricção era moda.** O objeto de desconexão seguiu a curva de qualquer acessório
comprado por sinalização: pico, saturação, vitrine de brechó. Em 2031 o Brick é um objeto de
2026. *Aponta para:* e6.1.1, que já está no mapa como retroação, e para e7.2. *Ação tomada:*
e7.2 rebaixado.

**Razão 3 — o problema mudou de lugar e o mapa ficou olhando para o feed.** Se R3 estiver certa e
a atenção em disputa for a de quem trabalha com agente, então três das quatro raízes deste mapa
tratam de um problema de 2020, com dado de 2026, e o objeto real está em outro lugar. *Aponta
para:* a distribuição do mapa inteiro, que dá cinco efeitos de primeira ordem a R1 e cinco a R3
como se fossem equivalentes em maturidade — e não são. *Ação tomada:* declarado aqui; R3 mantida
com sinal e confiança modestos em vez de inflada.

### Extrapolação linear

Dois efeitos eram só "mais do mesmo, maior" na primeira versão.

**e7.2** (fragmentação do aparelho em objetos dedicados) era extrapolação pura: o relógio saiu, o
fone saiu, logo a câmera sai. Isso é tendência com régua, não mecanismo. Ganhou um mecanismo
não-linear em **e7.2.1**: se o aparelho principal passar a carregar identidade verificada (e2), o
objeto de função única adquire um motivo que nada tem a ver com bem-estar — não ser identificado.
Com o mecanismo, ficou; sem ele, teria ido para a seção 12.

**e6** (a categoria de acessório) não é extrapolação — tem três artefatos com preço e volume — mas
**e6.1.1** foi acrescentado justamente para impedir que o ramo virasse linha reta ascendente.

### Velocidade de adoção

Confrontei cada prazo de efeito com sinal fraco contra a classe de referência declarada na seção
5. Dois não passaram e foram empurrados:

- **e15**: exigia que uma mudança de métrica se propagasse em três anos a partir de evidência com
  n=25 e n=104. A referência (page views → tempo de leitura) levou cerca de cinco anos **com**
  incentivo comercial direto, que aqui não existe. Empurrado de 2028 para 2029 e rebaixado.
- **e5**: exigia que uma plataforma grande adotasse fricção como diferencial em três anos, sem
  nenhum caso hoje. Mantido em 2029, mas com confiança rebaixada a baixa — é quase um wildcard, e
  está declarado como tal na seção 6.

### E se a raiz não acontecer?

- **Sem R1** (a regulação não sai do papel): o mapa perde e1–e5 e boa parte de e15.1, mas R2, R3 e
  R4 sobrevivem inteiras — são movimentos de mercado e de pesquisa, não de lei. Sobra um mapa
  menor e mais comercial.
- **Sem R2** (o objeto não vira categoria): perdem-se e6–e9 e o mapa fica só com regulação e IA.
  Sobrevive, mas perde o único ramo com sinal forte hoje.
- **Sem R3** (a fricção não migra para o agente): perdem-se e10–e14. O mapa vira um documento sobre
  o passado — descrição bem sustentada de um problema que o campo já entendeu.
- **Sem R4** (o minuto continua sendo a medida): perdem-se apenas e15–e17, e e1 fica **mais**
  forte, porque a conformidade em minutos é mais fácil. É a raiz mais dispensável do mapa, e a de
  menor confiança — o que é coerente.

Nenhuma das quatro sustenta as outras três sozinha, o que é o teste que eu queria passar. Mas há
uma dependência assimétrica declarada: **e2 é pré-condição de parte de R1 e de R3 ao mesmo tempo**,
e se a verificação de idade for judicialmente barrada, dois ramos encolhem juntos.

### Suposições escondidas

1. **Que a categoria "bem-estar digital" continua sendo um campo.** Pode simplesmente dissolver-se
   em conformidade jurídica de um lado e produto de consumo do outro, sem nada no meio — e aí não
   há tema, há dois temas.
2. **Que o efeito da fricção existe.** Todo o mapa assume que interromper muda comportamento de
   modo duradouro. O dado disponível é fraco nos dois sentidos: 97% dos apps sem pesquisa, e o
   estudo de campo com maior rigor mostrando que a aceitação da intervenção despenca em segundos.
   Gerou o wildcard 2.
3. **Que a plataforma continua sendo quem decide.** O mapa trata Apple e Google como atores
   passivos em R2 quando eles são donos da API de restrição. Se a Apple absorver a categoria num
   lançamento, e6 e e6.2 se fundem e a metade da roda de R2 vira um parágrafo.
4. **Que o Brasil segue a Europa.** e4.1 assume o efeito Bruxelas em design. Não é garantido: pode
   haver dois desenhos mantidos em paralelo, e o Brasil ficar com o não regulado.
5. **Que o custo de inferência de IA não muda a economia.** Se o token barateia muito, o incentivo
   do fornecedor a limitar sessão desaparece e e10 perde a força; se encarece, a fricção chega por
   preço e não por cuidado — o que seria um efeito que este mapa não tem.

### Viés do autor

Dois, nomeados.

**O primeiro é de simpatia.** R3 — a fricção migrando para o agente — é a parte do mapa de que eu
mais gosto, e é a que tem menos evidência. Ela carrega cinco efeitos de primeira ordem, tantos
quanto R1, que tem duas conclusões preliminares da Comissão Europeia e uma lei em vigor por trás.
A simetria é do autor, não do mundo. Deixei R3 no mapa com sinal e confiança modestos, mas o leitor
deve saber que a densidade dela é escolha, não medida.

**O segundo é profissional.** Escrevo de dentro do problema: uso agentes o dia inteiro para
trabalhar, inclusive para produzir este documento. O efeito e13 — o profissional em início de
carreira que perde o caminho de prática — é o que mais me incomoda pessoalmente, e por isso é o que
mais mereceria desconfiança de quem lê. Ele passa no teste de mecanismo, mas não tem artefato hoje.

### Calibração

Primeira ordem: 3 alta, 10 media, 4 baixa (17). Segunda: 0 alta, 13 media, 6 baixa (19). Terceira:
0 alta, 1 media, 11 baixa (12). A confiança cai monotonicamente com a ordem, e nenhuma alta
sobrevive além do primeiro nível — o que é o comportamento esperado. As três altas da primeira
ordem são e2, e6 e e8, e as três têm artefato em produção ou medição oficial já publicada.

### Registro de alterações

- **e1: prazo 2027 → 2028**, porque a classe de referência (banner de cookies) conta dois anos a
  partir de norma **aprovada**, e aqui não há sequer decisão final.
- **e5: confianca media → baixa**, porque não existe um único caso de plataforma grande vendendo
  fricção como diferencial, e o mecanismo depende de inversão de horizonte contábil.
- **e7.2: prazo 2030 → 2031 e confianca media → baixa**, por ser extrapolação linear até ganhar o
  mecanismo de identidade em e7.2.1.
- **e11: confianca media → baixa**, porque os únicos artefatos são dois repositórios de aluno
  (`breakwatch`, `workshop-wellbeing-hooks`) que eu **não abri** — são sinal de que alguém pensou
  no assunto, não evidência de adoção.
- **e15: prazo 2028 → 2029 e confianca media → baixa**, pela classe de referência do jornalismo
  digital e pelo tamanho das amostras (n=25, n=104).
- **e16.1: confianca baixa → media** (única elevação), porque o mecanismo é direto e já documentado:
  personalizar exige inferir, e inferir traço a partir de uso é exatamente o que o ECA Digital
  submete a avaliação de impacto.
- **Removido — "cursos de design reorganizam o currículo em torno de fricção"**: genérico, serve
  para qualquer tema, sem nome de curso nem mecanismo. Vai para a seção 12.
- **Removido — "surge a profissão de designer de atenção"**: proibido pela regra de efeito genérico;
  não consegui nomear a profissão nem o empregador. Seção 12.
- **Removido — "reguladores criam uma categoria jurídica nova de produto atencional"**: sem nome de
  regulador nem de instrumento. O que sobreviveu foi e12.1, que nomeia ANPD e o eixo DSA. Seção 12.
- **Removido — "surge norma técnica internacional de bem-estar digital"**: sem mecanismo e sem
  comitê identificável. Seção 12.
- **Reconectado — "a energia de datacenter cai com menos engajamento"**: não passou no teste da
  causa solta (cairia por outro motivo, ou não cairia de todo diante da inferência de IA). Removido,
  e a categoria ecológica do STEEP ficou declaradamente vazia.

A bateria derrubou pelo menos um efeito por raiz: e1 e três genéricos em R1, e7.2 em R2, e11 em R3,
e15 em R4.

## 8. O que a máquina errou

1. **Quase usei alegação de fornecedor como resultado revisado por pares.** O site do one sec
   afirma "57% menos aberturas de app" e "3000 anos poupados de rolagem por semana". Tentei abrir o
   artigo do PNAS que sustentaria o primeiro número (10.1073/pnas.2213114120) e levei **HTTP 403**.
   Não li o artigo. O número está na seção 12 marcado como alegação de vendedor e **não sustenta
   nenhum prazo deste mapa** — mas, na primeira passagem, eu o tinha escrito na seção 3 como se
   fosse achado científico.

2. **Peguei um número de blog de concorrente e quase o tratei como dado.** A afirmação "60% a 70%
   dos usuários desativam bloqueadores no primeiro mês" apareceu numa busca, vinda de um blog de
   produto que vende um bloqueador rival. Não abri nenhuma fonte primária para isso; a CHI 2024 de
   Haliburton et al. (10.1145/3613904.3642370), que seria a referência correta sobre permanência de
   fricção, também devolveu **403**. O número saiu do corpo do documento e está na seção 12 como
   afirmação de marketing não verificada. O que sustenta a ideia de contorno no mapa é outro dado,
   esse sim aberto: 70% dos adolescentes australianos dizendo que foi fácil burlar.

3. **Troquei julho por outubro.** Ao ler a matéria do France 24 sobre as conclusões preliminares
   contra a Meta, o resumo que recebi datou o fato de **10 de outubro de 2026**. A URL, a matéria da
   CNBC e o próprio comunicado da Comissão dizem **10 de julho de 2026**. Corrigi no documento; o
   erro sobreviveria se eu não tivesse conferido a data contra a URL.

4. **Usei porcentagens de uma fonte que não abri e depois as substituí.** Numa busca apareceram
   "62,2% usam limites de tempo, 43,2% não perturbe, 32,4% escala de cinza" — números de origem
   indeterminada. Substituí pelos números da revisão de Almoallim e Sas (JMIR, 2022), que eu abri:
   72% rastreiam uso, 64% comparam com limites, 54% criam obstáculos, 97% sem pesquisa documentada.
   São coisas diferentes (prevalência de funcionalidade em app × prevalência de uso por pessoa), e
   eu as teria apresentado como se fossem a mesma.

5. **Escrevi "a Comissão multou o TikTok" na primeira versão.** Não multou. Em 6 de fevereiro de
   2026 emitiu **conclusões preliminares**; os 6% do faturamento são o teto de uma decisão final que
   ainda não existe e que pode não existir. É a diferença entre uma notícia e um fato.

6. **Atribuí o Paper Phone ao Google.** O Paper Phone é do **Special Projects**, estúdio londrino de
   Clara Gaggero Westaway e Adrian Westaway, em trabalho feito com o Google. A autoria que importa
   para este mapa é a do estúdio — é ele que produz Envelope, Paper Phone e Aperture como uma linha
   coerente de trabalho — e eu a tinha creditado à plataforma.

7. **Tratei a pesquisa do Inep como medida de efeito.** Os 95% de "maior concentração" e 86% de
   "redução de ansiedade" são **percepção de 8.189 gestores escolares**, não medição de
   aprendizagem nem de saúde. No texto da seção 3 eu havia escrito "os alunos se concentram mais";
   corrigi para "gestores relatam". A distinção é exatamente a do wildcard 2.

8. **Projeção comercial usada como âncora.** Os US$ 15 bilhões em 2036 com CAGR de 34,9% vêm de um
   relatório que a Fact.MR vende. Usei apenas o valor de **2026** (US$ 0,75 bi) e as participações de
   segmento como ordem de grandeza; a projeção de dez anos está citada, mas não sustenta nenhum
   prazo — trinta e cinco por cento ao ano por uma década em mercado de consumo quase nunca se
   realiza.

## 9. Três cenários para 2031

**Provável.** O scroll infinito continua ligado, mas com um rodapé jurídico. As decisões finais da
Comissão saíram entre 2027 e 2028, foram recorridas, e o que chegou à tela foi a conformidade
mínima: um "você está em dia" opcional, uma pausa noturna que se dispensa em dois toques, e uma
tela de verificação de idade no cadastro — esta sim, universal e irreversível, porque virou
infraestrutura e não recurso. O agregado de tempo de tela não caiu. O mercado de fricção paga
consolidou-se em torno de meia dúzia de assinaturas e de uma prateleira de acessórios que vende
bem no fim do ano. A discussão migrou para o agente de IA, onde tudo recomeça do zero com o
vocabulário errado: os primeiros produtos de bem-estar de IA são contadores de tempo de sessão, e
não funcionam pelo motivo de sempre. **Sinal precoce de que estamos aqui:** a primeira decisão
final da Comissão ser seguida de um recurso e de um ajuste cosmético anunciado como redesenho.

**Desejável.** A fricção deixou de ser um recurso e virou uma propriedade declarada do produto,
como acessibilidade. O que tornou isso possível não foi a lei especificar mecânica, e sim ela ter
passado a exigir **prova de efeito** — o deslocamento de e3.1 —, o que liberou as equipes a
desenhar a intervenção certa para cada pessoa em vez da mesma para todas, e obrigou a publicar o
resultado. O fim de feed virou uma superfície de design respeitada, com bons exemplos e más
imitações, como qualquer outra. A fricção de IA achou sua forma própria: não interromper, mas
devolver a decisão, e a escolha entre "faz por você" e "faz com você" virou uma preferência
explícita que a pessoa ajusta, não uma política escondida no sistema. A camada de identidade foi
resolvida por divulgação seletiva, sem entregar documento para provar maioridade. **Sinal precoce:**
um regulador aceitar métrica de resultado auditada em vez de recurso desligado — e uma empresa
publicar o número mesmo ruim.

**Indesejável.** A fricção virou um produto de classe. Quem paga assinatura tem o modo calmo, o
feed que termina e o agente que pergunta antes de agir; quem não paga tem o produto otimizado para
engajamento, agora com verificação de identidade obrigatória por cima — o pior dos dois mundos, sem
sossego e sem anonimato. A camada de idade, construída em nome da proteção da criança, virou
identificação universal e foi reaproveitada para outras coisas. Nas escolas e nas empresas, a
fricção comprada em lote virou monitoramento: o que começou como bolsa para o celular terminou como
painel de atenção por pessoa, e a "métrica de bem-estar" da equipe virou item de avaliação
individual — exatamente o que e11.1 tenta evitar. **Sinal precoce:** um produto de bem-estar
corporativo que mostre dados por indivíduo ao gestor, e não em agregado.

## 10. O experimento

**O que é.** *Freio de agente* — um gancho no harness do agente de código que intercepta o pedido
**antes** da execução e, numa fração das vezes, aplica uma de duas fricções concorrentes:

- **Fricção temporal** (o vocabulário herdado do feed): uma pausa de N segundos com a mensagem "você
  está nesta sessão há X minutos", e o botão de continuar.
- **Fricção de forma** (a hipótese de R3): o agente devolve a tarefa — "esta é a terceira vez hoje
  que você me pede isto; quer que eu faça, ou quer que eu explique em três linhas para você fazer?"
  — e registra a escolha.

Mede-se **delegação**, não minutos: proporção de pedidos executados pelo agente sobre pedidos
feitos, quantos foram retomados pela pessoa, e quantas vezes a fricção foi desligada. Um terceiro
braço barato e obrigatório: **fricção placebo** (a pausa de trinta segundos do `dopa-mean`, sem
nada por trás), para saber se o efeito é do custo ou da interrupção.

**Que pergunta sobre o futuro ele responde.** A pergunta de terceira ordem do tema, e a aposta
central de R3: **como se desenha fricção para uma ferramenta que faz o trabalho por você?** Se a
fricção temporal e a de forma derem o mesmo resultado, e10.1 cai e o vocabulário do feed serve — o
que poupa uma década de reinvenção. Se a placebo empatar com as outras duas, o sinal fraco 3 vira
achado e a economia de R2 desaba junto.

**Que tecnologia emergente ele usa, e por que não dá com a madura.** Usa o gancho de harness de
agente (pre-tool-use hook), que só existe porque o agente virou ambiente programável em 2025–2026, e
uma classificação local do tipo de pedido para decidir quando a devolução faz sentido. Não dá com
tecnologia madura por uma razão exata: **bloqueador de app e contador de tempo de tela não têm o que
medir aqui.** Eles enxergam minutos de janela em foco; num agente, a sessão longa é o valor entregue
e os minutos não distinguem quem delegou tudo de quem conduziu tudo. O objeto da medida — a
delegação — é invisível para toda a prateleira madura da categoria.

**O que a turma faz ao testar em sala.** Duas semanas, cada pessoa com o próprio agente, três braços
sorteados por pedido (temporal, forma, placebo) e um quarto braço de controle sem fricção. Em sala:
cada pessoa traz o próprio registro, e a turma compara duas coisas que quase nunca aparecem juntas —
**o que o log diz** (taxa de delegação por braço) e **o que a pessoa achou** (irritação, utilidade,
vontade de desligar). O dado do IMWUT 2026 prevê que esses dois vão divergir, e que a divergência
vai depender do perfil; a turma tem n pequeno mas variedade real de perfil, o que é exatamente a
condição em que essa divergência aparece.

**O resultado que me faria mudar de ideia.** Se a fricção de forma **não** reduzir a delegação mais
que a temporal, R3 perde seu efeito mais importante (e10.1) e o mapa volta a ser um documento sobre
o feed com um apêndice sobre IA. E se a placebo empatar com as duas, então o campo inteiro está
resolvendo o problema errado: não é custo que interrompe, é interrupção que interrompe — e aí o
objeto físico de US$ 59 não tem razão de existir.

## 11. Fontes

1. `https://digital-strategy.ec.europa.eu/en/news/commission-preliminarily-finds-tiktoks-addictive-design-breach-digital-services-act`
   — Comunicado da Comissão Europeia, 6/2/2026. Sustenta R1 inteira: os recursos nomeados (scroll
   infinito, autoplay, push, recomendador), a formulação do "modo piloto automático", a afirmação de
   que os controles existentes são "fáceis de dispensar e introduzem fricção limitada", e os remédios
   sugeridos. Fonte primária do regulador; é a acusação, não a sentença — lê-se como posição de parte.
2. `https://digital-strategy.ec.europa.eu/en/news/commission-preliminarily-finds-addictive-design-instagram-and-facebook-breach-digital-services-act`
   — Comunicado da Comissão Europeia, 10/7/2026, sobre Instagram e Facebook. Sustenta a data, os
   recursos e a afirmação de que as medidas de mitigação da Meta falharam. Mesma natureza e mesma
   ressalva da anterior.
3. `https://epthinktank.eu/2026/05/06/addictive-design-on-online-platforms/`
   — Serviço de estudos do Parlamento Europeu, 6/5/2026. Sustenta a base jurídica (artigos 25 e 34 do
   DSA), o fato de "design viciante" não estar definido na norma, e a expectativa em torno do Digital
   Fairness Act. Fonte institucional de análise, não de decisão; boa para enquadramento, não para
   prever texto final.
4. `https://www.fadc.org.br/noticias/eca-digital-entenda-nova-lei`
   — Fundação Abrinq pelos Direitos da Criança e do Adolescente. Sustenta o ECA Digital: vigência em
   17/3/2026, proibição de design manipulativo e de uso compulsivo, fim da autodeclaração de idade,
   vinculação de menores de 16 a responsável, ANPD como fiscalizadora. Organização de advocacy —
   favorável à lei; usei apenas os fatos normativos, que batem com a análise jurídica independente
   que li em paralelo.
5. `https://agenciabrasil.ebc.com.br/educacao/noticia/2026-06/lei-que-restringe-uso-de-celulares-ja-e-adotada-por-92-das-escolas`
   — Agência Brasil, 30/6/2026, sobre a pesquisa nacional do Inep com Instituto Alana e Unesco.
   Sustenta os 92% de adoção, os 8.189 gestores respondentes e os percentuais de percepção.
   Agência pública reportando pesquisa oficial; confiável quanto aos números, e os números são de
   **percepção de gestor**, o que o texto deixa explícito.
6. `https://www.aljazeera.com/news/2026/8/3/australias-under-16-social-media-ban-failing-study-shows-what-it-means`
   — Al Jazeera, 3/8/2026, sobre o estudo do regulador eSafety. Sustenta o dado que mais pesa contra
   R1: 81% contra 86%, uso diário estável, 4,7 milhões de contas removidas, 70% dizendo que burlar
   foi fácil. Veículo jornalístico reportando regulador; o número original é do eSafety, que eu não
   abri diretamente.
7. `https://specialprojects.studio/project/aperture/`
   — Special Projects. Sustenta o Aperture (capa cuja janela é o recorte da câmera), sua condição de
   **conceito, não produto**, a autoria do estúdio e a linha Envelope / Paper Phone / Aperture. Site
   do próprio autor: ótimo para o quê e o como, imprestável para adoção.
8. `https://fortune.com/2026/02/13/analog-gen-z-phone-addiction-bloom-brick-app-blockers-dumb-phones-social-media/amp`
   — Fortune, 13/2/2026. Sustenta os números de R2: Bloom a US$ 39 com mais de 60 mil unidades,
   Brick a US$ 59, e a ironia de a categoria crescer pelas mesmas redes que combate (base de e9).
   Jornalismo de negócios; os números vêm das empresas, e o texto registra que a Brick recusou-se a
   divulgar vendas.
9. `https://www.factmr.com/report/digital-detox-and-attention-wellness-services-market`
   — Fact.MR. Sustenta a ordem de grandeza do mercado em 2026 (US$ 0,75 bi), as participações de
   segmento e a lista de fornecedores. **Relatório comercial de empresa que vende o relatório** — a
   projeção de 2036 e o CAGR de 34,9% não sustentam nada neste documento; ver §8.
10. `https://getlatka.com/companies/opal.so`
    — GetLatka, perfil atualizado em 10/9/2026. Sustenta US$ 17,1 milhões de faturamento da Opal em
    2025 e ~33 pessoas. Agregador de dados de SaaS, frequentemente autodeclarados; ordem de grandeza
    confiável, precisão não.
11. `https://one-sec.app/`
    — Site do fornecedor. Sustenta o que o produto faz (respiração, espelho, prompts, extensão de
    navegador, sincronização entre aparelhos) e **nada mais**. Todas as estatísticas da página são
    alegação de vendedor e estão tratadas como tal.
12. `https://9to5google.com/2026/02/20/google-has-ignored-androids-digital-wellbeing-tools-for-years-so-whats-next/`
    — 9to5Google, 20/2/2026. Sustenta a estagnação do Digital Wellbeing desde 2018, o rótulo "beta",
    o descompasso com o feed algorítmico de vídeo curto e o argumento de incentivo do dono da
    plataforma. Veículo especializado, texto opinativo; os fatos de produto são verificáveis, a
    leitura de motivação é do autor.
13. `https://arxiv.org/abs/2509.21860`
    — Bhat, Shi, Song, Yoo e Saha, CHI 2026. Sustenta R4: a má percepção sistemática do próprio uso,
    o estudo de duas semanas com 25 estudantes, os ~10% de melhora em afeto positivo, e o argumento
    de que reduzir tempo de tela simplifica demais. Artigo revisado por pares em conferência de
    primeira linha da área; amostra pequena, resultado exploratório.
14. `https://arxiv.org/html/2607.15818`
    — Meinhardt, Dragic, Colley, Lukoff e Rukzio, IMWUT 2026. Sustenta e16 e a contradição da seção 5:
    104 participantes, 7 dias, pop-up explícito com maior eficácia objetiva mas aceitação que despenca,
    e intervenções graduais percebidas como insuficientes justamente por quem tem alta impulsividade e
    baixo autocontrole. É a melhor evidência de campo deste mapa.
15. `https://pmc.ncbi.nlm.nih.gov/articles/PMC9066336/`
    — Almoallim e Sas, JMIR Formative Research, 2022. Sustenta o diagnóstico da prateleira: 39 apps
    comerciais e 17 acadêmicos, 54% criando obstáculos, 97% sem pesquisa documentada, e a recomendação
    de projetar para uso com sentido em vez de contra uso sem sentido. Revisado por pares; de 2022,
    portanto anterior ao ciclo atual — usado como linha de base, não como retrato de hoje.
16. `https://blog.character.ai/u18-chat-announcement/`
    — Character.AI. Sustenta o corte do chat aberto para menores de 18 em 25/11/2025, o limite
    intermediário de duas horas por dia em redução progressiva, e a verificação de idade com modelo
    próprio mais Persona. Comunicação da empresa; descreve o que ela fez, não o efeito.
17. `https://www.implicator.ai/after-reports-of-harm-openai-tweaks-chatgpt-to-curb-overuse-and-emotional-dependency/`
    — implicator.ai. Sustenta o lembrete de pausa do ChatGPT com a redação exata, a mudança na forma
    da resposta em temas pessoais (base de e10.1), e a crítica de que o lembrete é dispensável.
    Publicação especializada pequena; confere com a comunicação da própria OpenAI que circulou à época,
    mas é fonte secundária.
18. `https://builtin.com/articles/ai-brain-fry-software-developers`
    — Built In. Sustenta R3 do lado do trabalho: pesquisa da BCG de abril de 2026 com ~1.500
    trabalhadores (14% com "ressaca mental"), o estudo de Berkeley de março de 2026, e o dado que uso
    como âncora — **a produtividade cresce até o terceiro agente simultâneo e cai a partir do
    quarto**. Jornalismo setorial citando pesquisa de consultoria; não abri os estudos originais, e o
    número do quarto agente merece a desconfiança que se dá a dado de consultoria.

## 12. Anexo — o levantamento bruto

### 12.1 Método desta rodada

Skill `futurizacao-giordano` v1.2, modo MAPA, execução não interativa em 11/9/2026. Vinte e duas
operações de web (quinze buscas em português e inglês, dezenove aberturas bem-sucedidas, quatro
bloqueios por 403). Nenhuma fonte citada sem ter sido aberta.

### 12.2 Premissas assumidas (briefing completo, sem rebaixamento)

O `briefing:` veio completo — horizonte 2031, público "quem projeta mídia e interação", recorte
global com nota sobre o Brasil, descartado "o que já é comum em produto de massa", disrupção
suspeita nenhuma, viés neutro, zona de interesse "Pessoas e dados". Portanto **não houve
rebaixamento de confiança por ausência de entrevista**. O que o briefing não cobria e eu assumi:

- **Profundidade três ordens** e **modo "a partir do tema, não do setor"**, conforme instrução.
- **"Ideias óbvias a excluir": as que servem para qualquer tema.** Apliquei como regra dura: quatro
  efeitos foram removidos por isso (§7).
- **Falseador declarado** ("evidência de que a adoção já passou da maioria inicial, ou de que a
  tecnologia não rompe nada"): virou o critério do §2 e produziu quatro recusas explícitas de
  candidato a raiz.
- **Assumi que "global" significa América do Norte + Europa + Brasil.** Não encontrei nada sobre
  fricção deliberada na Ásia — nem sobre o sistema chinês de modo juvenil, que é o maior programa de
  fricção obrigatória do mundo e que este mapa **não cobre**. É um buraco real, declarado.

### 12.3 O que a varredura da turma trouxe, e como foi tratado

O enunciado do tema lista trinta e poucos repositórios levantados pela turma: `Aperture`,
`holiday-from-ai`, `youlite`, `habit-prompter`, `scrollwrapped`, `Daily Paper Phone`, `paperweight`,
`digital detox box`, `Pocket-OS-Cardputer`, `Flipper habit`, `breathing`, `scroll-scold`,
`lesscroll`, `dopa-mean`, `PlugBrain`, `Reravel`, `amazon-unrated`, `Claudeholic`,
`digital-habits-blocker`, `screen-time-stocks`, `Institute of Idleness`, `slate`, `Frost`, `mute`,
`workshop-wellbeing-hooks`, `breakwatch`, `JIT`.

**Não abri nenhum deles.** O briefing declara o texto do tema como contexto e não como fonte, e
repositório de aluno não é evidência de adoção. Eles entraram no mapa exclusivamente como **sinal
fraco nomeado** (seção 6) e como matéria-prima do experimento (`dopa-mean` virou o braço placebo,
`breakwatch` virou a justificativa de e11). Isso é uma limitação real: se algum deles tiver tração
fora da turma, e11 está subestimado.

Do único que abri — `Aperture`, via site do estúdio — veio a correção mais útil do mapa: **é um
conceito, não um produto**. A escolha nº 1 da turma não está à venda. Isso muda o peso de e7: a
peça física entrar no repertório de quem projeta é uma aposta sobre estúdios de design, não sobre
uma cadeia de fornecimento existente.

### 12.4 Efeitos cortados, e por quê

- *"Cursos e formação em design reorganizam o currículo em torno de fricção."* Serve para qualquer
  tema; não consegui nomear curso nem mecanismo. **Removido.**
- *"Surge a profissão de designer de atenção."* Efeito genérico proibido; sem nome de profissão nem
  de empregador. **Removido.**
- *"Reguladores criam uma categoria jurídica nova de produto atencional."* Sem regulador nem
  instrumento nomeado. Sobreviveu apenas o que nomeia — e12.1 (ANPD, eixo DSA). **Removido.**
- *"Surge norma técnica internacional de bem-estar digital (tipo ISO)."* Sem comitê identificável e
  sem mecanismo que o produzisse. **Removido.**
- *"O consumo de energia de datacenter cai com a redução de engajamento."* Reprovado no teste da
  causa solta: cairia (ou não cairia) por motivos alheios à fricção, e a inferência de IA domina o
  balanço. **Removido**; a categoria ecológica do STEEP ficou declaradamente vazia.
- *"A publicidade migra em massa para fora das redes sociais."* Efeito real possível, mas ele deriva
  da queda de engajamento — que este mapa **não prevê** (o agregado não caiu). Seria contradizer a
  seção 3. **Removido.**
- *"Bloqueador de app vira recurso nativo de sistema operacional."* Já é: Screen Time e Digital
  Wellbeing desde 2018. É contexto, não efeito futuro. **Removido.**

### 12.5 As buscas que não deram em nada, e os bloqueios

- **Artigo do PNAS sobre o one sec** (`10.1073/pnas.2213114120`): **HTTP 403**. Seria a melhor
  evidência experimental sobre atraso deliberado antes de abrir app. Não lido, não citado.
- **CHI 2024, Haliburton et al., "A Longitudinal In-the-Wild Investigation of Design Frictions"**
  (`10.1145/3613904.3642370`): **HTTP 403** na ACM DL e PDF ilegível no espelho da LMU. Era a fonte
  correta para permanência de efeito ao longo do tempo — a lacuna mais séria deste mapa. O que ficou
  no lugar é o IMWUT 2026, que mede sete dias, não meses.
- **Verfassungsblog sobre TikTok e DSA**: abriu, mas o conteúdo veio truncado e não consegui extrair
  o argumento jurídico. Substituído pelo serviço de estudos do Parlamento Europeu.
- **CNBC e SSENSE**: bloquearam a leitura (403). O primeiro cobria a decisão sobre a Meta
  (substituído pelo comunicado da própria Comissão); o segundo tratava do Brick como signo de status,
  que é a base de e6.1 — esse efeito ficou, portanto, apoiado só na Fortune e está com sinal `medio`,
  não `forte`, por causa disso.
- **gov.br / Ministério da Justiça** sobre a Lei 15.352/2026 e a ANPD: página com conteúdo
  restrito, exige autenticação. A informação sobre a agência veio das análises jurídicas e da FADC.
- **Busca por dado agregado de tempo de tela que mostrasse queda**: **não encontrei**. Todas as
  séries que apareceram (agregadores comerciais citando DataReportal) mostram estabilidade em torno de
  6h40–6h50 por dia, com variação anual abaixo de 3% nos dois sentidos. Não abri nenhum agregador
  desses, e por isso o número **não** entrou como fonte — está aqui como registro de busca frustrada,
  e é exatamente a ausência que sustenta a tensão da seção 3.
- **Busca por fricção deliberada na Ásia** (modo juvenil chinês, Coreia): não produziu fonte que eu
  pudesse abrir em inglês ou português com detalhe de design. Buraco declarado em 12.2.
- **Busca por retenção de longo prazo de acessório físico de desconexão**: nada. Nenhuma das
  empresas publica coorte. É o que mantém e6.1.1 como retroação plausível e não verificável.

### 12.6 Números de terceiros que ficaram fora do corpo do documento

- **"57% menos aberturas de app", "2 horas a mais de sono por semana", "3000 anos poupados de
  rolagem por semana", "226.947 anos poupados"** — one-sec.app. Alegação de vendedor. Não sustentam
  nada; registrados aqui para quem quiser ir atrás do artigo do PNAS.
- **"60% a 70% dos usuários desativam bloqueadores no primeiro mês"** — blog de produto concorrente,
  sem estudo citado. Não usado.
- **"US$ 15,0 bi em 2036, CAGR 34,9%, Índia 36,6%"** — Fact.MR. Projeção comercial de dez anos; não
  sustenta prazo.
- **"Quase metade dos adolescentes americanos de 13 a 17 diz usar plataformas 'quase
  constantemente'" (Pew, 2025)** — citado pelo serviço de estudos do Parlamento Europeu; eu não abri o
  Pew. Fica como contexto de segunda mão.
- **"4,7 milhões de contas removidas na Austrália"** — número do eSafety via Al Jazeera; abri o
  intermediário, não o original.
- **"14% com ressaca mental de IA; produtividade cai a partir do quarto agente"** — BCG via Built In;
  abri o intermediário, não o original. Sustenta e11, que por isso está com confiança baixa.

### 12.7 Saída do verificador

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 17 (frontmatter diz 17)
efeitos ordem 2: 19 (frontmatter diz 19)
efeitos ordem 3: 12 (frontmatter diz 12)
prazo > horizonte (2031) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 3 · media 10 · baixa 4
confiança ordem 2: alta 0 · media 13 · baixa 6
confiança ordem 3: alta 0 · media 1 · baixa 11
links da seção 11: 18/18 respondem (frontmatter diz fontes: 18)
RESULTADO: ok
```
