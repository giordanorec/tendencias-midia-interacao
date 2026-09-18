---
tema: Bem-estar digital e design de fricção
slug: bem-estar-digital-e-design-de-friccao
autor_login: jgpt
zona_de_interesse: Pessoas e dados
data: 2026-09-18
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 8
efeitos_ordem_3: 8
tecnologias_citadas: [scroll infinito, autoplay, notificações push, sistemas de recomendação, bloqueadores de aplicativo, nudges de fricção temporal, telefones minimalistas, e-ink, NFC, verificação de idade, agentes de código, assistentes conversacionais, telemetria de sessão, feeds cronológicos]
fontes: 7
confianca: media
experimento: Um "provador de fricção" — mesma tarefa de mídia repetida sob cinco arquiteturas diferentes de atrito, medindo não o tempo economizado, mas o arrependimento declarado e a taxa de contorno.
skill_usada: futurizacao-jgpt
publico_ok: false
---

## 1. Resumo

Durante vinte anos, fricção foi defeito. Entre 2025 e 2026 ela virou obrigação legal. A
Comissão Europeia abriu achados preliminares contra o TikTok sob o DSA mirando a
arquitetura da plataforma — scroll infinito, autoplay, push — e não o conteúdo; um júri
norte-americano responsabilizou Meta e YouTube por design viciante; e em agosto de 2026 a
Meta fechou acordo de cerca de US$ 18 bilhões que impõe teto default de duas horas diárias
para adolescentes, silêncio de notificação à noite e no horário escolar, e contagem de
curtidas oculta. Ao mesmo tempo, experimentos controlados passaram a medir o efeito de
cortar acesso — com resultados grandes e com um detalhe incômodo: a adesão é baixa e o
efeito reverte quando a intervenção acaba. Este mapa trata do que acontece quando a
fricção deixa de ser escolha individual, comprada em app de terceiro, e passa a ser
parâmetro de produto auditável — e do que acontece quando esse mesmo movimento alcança a
IA, onde a ferramenta não rouba o tempo: ela faz o trabalho. Horizonte 2031.

## 2. O tema

Bem-estar digital, no uso corrente, é uma família de intervenções que tenta reduzir,
interromper ou devolver a atenção de quem usa um produto: contadores de tempo de tela,
bloqueadores, lembretes, modos de foco. Design de fricção é o subconjunto que trabalha
pelo atrito deliberado — atrasar, esconder, tornar feio, exigir um gesto a mais, cobrar um
custo cognitivo na porta de entrada.

O tema encosta em mídia e interação no ponto mais desconfortável possível: ele é a
inversão do objetivo declarado de quase toda métrica de produto da última década. Quem
projeta interface aprendeu a remover passos; aqui o ofício é escolher quais passos
recolocar, onde, e com que justificativa. A questão de projeto não é "menos tela" — é
qual unidade de valor substitui tempo de sessão quando tempo de sessão vira passivo
jurídico.

Merece mapa de futuro, e não estado da arte, porque o objeto mudou de natureza em menos de
dois anos. Um estado da arte de 2024 descreveria um mercado de aplicativos de
autocontrole. Um de 2026 descreve uma categoria de conformidade regulatória, com prazos,
multas e perícia. Os efeitos interessantes não estão no que os bloqueadores fazem — estão
no que acontece com o resto do campo quando fricção vira requisito, preço e prova.

## 3. Onde isso está hoje

**O que já existe e funciona.** A evidência experimental saiu do território correlacional.
Um ensaio randomizado pré-registrado com 467 participantes bloqueou todo o acesso à
internet móvel por duas semanas usando o app Freedom, preservando ligação e SMS: atenção
sustentada melhorou com d = 0,24, saúde mental com d = 0,57 — que os próprios autores
comparam ao efeito meta-analítico de antidepressivos — e bem-estar subjetivo com d = 0,46,
com mediação por tempo offline, conexão social e sono [1]. No plano da intervenção leve, o
app *one sec* — que interpõe uma espera curta e a opção de desistir antes de abrir o app
alvo — foi estudado com 1.039 usuários e um experimento de campo de seis semanas; a
componente que mais pesou foi a opção explícita de desistir, e não a mensagem de
deliberação [não verificado, ver §8].

**O que existe e não funciona.** Duas coisas, e ambas são centrais. Primeiro, adesão: no
ensaio de bloqueio, apenas 119 dos que se comprometeram — 25,5% — cumpriram a definição
pré-registrada de conformidade, e 83% da amostra já estava motivada a reduzir o uso [1].
Segundo, permanência: no ensaio publicado no BMC Medicine, com redução a duas horas
diárias por três semanas, os indicadores melhoraram e então voltaram a subir assim que a
intervenção terminou [não verificado, ver §8]. A revisão de 367 aplicativos e extensões de
autocontrole digital feita por Lyngs e colegas já apontava que o campo tinha ferramentas
demais e teoria de menos: o trabalho organiza os recursos encontrados sob um modelo de
sistemas duais de autorregulação justamente porque o repertório de design estava
sedimentado sem mecanismo explicado [2].

**Quem está construindo isso agora.** Três frentes distintas. A regulatória: a Comissão
Europeia, em 6 de fevereiro de 2026, emitiu achados preliminares de violação do DSA pelo
TikTok — a primeira ação que não trata de conteúdo ilegal, dados ou concorrência, mas da
arquitetura da plataforma; em março de 2026 um júri nos EUA responsabilizou Meta e YouTube
por design viciante; e o Digital Fairness Act, esperado até o fim de 2026, deve proibir
técnicas de design aditivo, com remédios do tipo desativação progressiva de recursos,
pausas efetivas e adaptação de recomendadores [3]. A judicial-contratual: em 26 de agosto
de 2026 a Meta aceitou pagar cerca de US$ 18 bilhões ao longo de uma década e implantar
teto default de duas horas por dia para menores de 18 somando Facebook e Instagram,
bloqueio de postagem e visualização entre meia-noite e 6h, notificações silenciadas entre
8h e 15h, lembretes a cada 15 minutos de uso contínuo, feed não algorítmico opcional,
controle de autoplay e curtidas ocultas por default — com US$ 5,3 bilhões retidos como
alavanca para que TikTok e YouTube adotem medidas equivalentes [4]. A de objeto: estúdios
e fabricantes tratando o atrito como matéria física — o caso mais claro é o *Aperture*, do
Special Projects, uma capa que, virada, cobre quase toda a tela e deixa só a janela do
recorte de câmera; a dificuldade deliberada de virar a capa é o mecanismo, não um defeito
de fabricação, e o projeto é protótipo em busca de realimentação, não produto à venda [5].
Em volta, uma economia de nicho que a imprensa de negócios já batizou de "economia da
fricção", com câmeras instantâneas restauradas e telefones de voz para crianças, sem
números de mercado publicados [6].

**No Brasil.** O país entrou nesse assunto pela escola e pela infância, não pelo produto. A
Lei 15.100/2025, de janeiro de 2025, restringe o uso de celular na educação básica; o MEC
rodou pesquisa nacional no primeiro semestre de 2026 para medir os efeitos, e o
diagnóstico que justificou a lei citava o PISA 2022, em que 80% dos estudantes brasileiros
relataram distração com celular nas aulas de matemática, e uma média nacional de nove
horas e treze minutos diários de tela [7]. Em paralelo, a Lei 15.211/2025 — o "ECA
Digital" — entrou em vigor em 17 de março de 2026 e alcança design de engajamento voltado
a menores [não verificado, ver §8].

Diagnóstico de maturidade, usando o Hype Cycle apenas como heurística de leitura e nunca
como previsão de prazo: o que se lê sobre hardware de desconexão ainda é majoritariamente
cobertura de demonstração — protótipo premiado, peça de exposição, pré-venda. O que se lê
sobre fricção regulatória já é cobertura de adoção: prazos, multas, cronograma de
implantação, valor retido em contrato.

## 4. As disrupções-raiz

Três candidatas passaram no teste "o que isso rompe, e por que agora e não há cinco anos".
Uma quarta, a mais atraente esteticamente, foi rejeitada e está na §6.

### D1 — A fricção deixa de ser escolha do usuário e vira default imposto ao produto

**O que rompe.** Até 2024, quem quisesse atrito comprava atrito: instalava bloqueador,
assinava Opal ou Freedom, comprava um Light Phone. A restrição removida agora é de
*legitimidade*: a arquitetura de engajamento passou a ser objeto autônomo de sanção,
independentemente do conteúdo servido. Isso inverte quem carrega o custo de projetar a
interrupção — sai do usuário, entra no fabricante.

**Por que agora.** O limiar é datável e concreto: 6 de fevereiro de 2026, achados
preliminares da Comissão contra o TikTok sob os artigos 25, 34 e 35 do DSA, mirando scroll
infinito, autoplay, push e recomendador [3]; março de 2026, veredito de júri
responsabilizando Meta e YouTube [3]; 26 de agosto de 2026, acordo da Meta com teto default
de duas horas e cronograma de implantação para fevereiro de 2027 [4]. Há cinco anos não
havia nem a base legal (o DSA só passou a ser aplicado às plataformas muito grandes em
2023) nem precedente judicial que tratasse arquitetura como causa.

**O que ainda falta.** O Digital Fairness Act ainda é proposta; o acordo da Meta vale para
menores e para os EUA; e nada disso testou ainda a resposta óbvia do mercado — contorno,
migração para produto não coberto, e reclassificação de idade.

### D2 — A fricção vira parâmetro mensurável, e portanto auditável e periciável

**O que rompe.** A restrição removida é probatória. Enquanto o dano atencional era
autorrelato e correlação, "design viciante" era retórica. Com ensaios randomizados
pré-registrados produzindo tamanhos de efeito comparáveis a intervenções clínicas [1], a
alegação vira perícia possível. Isso habilita um uso qualitativamente novo: certificar,
litigar e comprar com base em arquitetura de escolha, não em intenção declarada.

**Por que agora.** O limiar é a existência de desenho causal com bloqueio real de acesso e
medição objetiva de atenção, publicado e replicável [1], somado a estudos de campo de
intervenção leve com dezenas de milhares de aberturas de app registradas. Há cinco anos o
repertório era de 367 ferramentas sem teoria comum [2] e estudos de autorrelato.

**O que ainda falta.** Exatamente aquilo que a própria evidência denuncia: 25,5% de adesão
[1] e reversão pós-intervenção significam que o efeito medido é de um regime que ninguém
sustenta espontaneamente. Falta um desenho que meça fricção *permanente e tolerável*, não
abstinência temporária.

### D3 — A fricção muda de alvo: do entretenimento para a ferramenta que trabalha por você

**O que rompe.** Toda a tradição de bem-estar digital pressupõe que o produto rouba tempo
que a pessoa daria a outra coisa. Com assistentes e agentes, o produto *devolve* tempo — e
o que está em jogo não é a hora perdida, é a competência delegada e o vínculo. A restrição
que cai é conceitual antes de ser técnica: começa a existir obrigação legal de interromper
uma ferramenta de produtividade.

**Por que agora.** A Califórnia passou a exigir que chatbots revelem que são IA e emitam
lembrete de pausa a cada três horas; o estado de Washington, com vigência prevista para
janeiro de 2027, proíbe explicitamente técnicas manipulativas como elogio excessivo,
simulação de sofrimento e incentivo ao isolamento [não verificado, ver §8]. Em paralelo, o
estudo de uso afetivo conduzido por OpenAI e MIT Media Lab associa uso pesado a mais
solidão e mais sinais de dependência [não verificado, ver §8]. Há cinco anos não havia
produto com uso diário em escala nem categoria jurídica para ele.

**O que ainda falta.** Ninguém sabe desenhar fricção para uma ferramenta cujo valor é
justamente não interromper o trabalho. Um lembrete de pausa a cada três horas numa sessão
de programação com agente é ruído; o mesmo lembrete numa conversa de companhia às três da
manhã talvez seja a única coisa que importa. A distinção jurídica entre os dois casos não
existe.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A fricção deixa de ser escolha do usuário e vira default imposto ao produto
    efeitos:
      - id: e1
        ordem: 1
        efeito: Plataformas reprojetam a arquitetura do feed como tarefa de conformidade, com teto de sessão, curfew de notificação e alternativa não algorítmica embutidos no produto.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Surge uma camada profissional de conformidade atencional dentro dos times de produto, com especificação de fricção versionada no design system ao lado de acessibilidade.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Bibliotecas de componentes passam a expor primitivas de interrupção padronizadas, e um produto sem elas é lido pelo mercado como dívida regulatória.
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O default de fricção vale por faixa etária, o que empurra a verificação de idade para dentro da camada de sistema operacional e loja de aplicativos.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: A identidade verificada por idade vira infraestrutura padrão de mídia, e a disputa sobre atenção se desloca para a porta de entrada, onde encontra a agenda de soberania de dados.
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A fricção vira argumento de venda, e produtos passam a anunciar o que deliberadamente não fazem como diferencial competitivo.
        sinal: medio
        prazo: 2027
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Assinaturas pagas incorporam o modo calmo — sem feed, sem recomendação, sem push — como benefício premium do plano.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Consolida-se uma crítica de fricção de duas classes, em que quem paga compra sossego e quem não paga continua sendo a mercadoria, e essa assimetria entra na pauta regulatória seguinte.
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: Tempo de sessão perde status de métrica-norte interna, porque passa a ser passivo jurídico auditável.
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Contratos de publicidade são repactuados sobre unidades declaradas de atenção consentida, e não sobre volume de impressão servida.
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Forma-se um mercado de inventário de atenção consentida com preço-prêmio e auditoria independente de qualidade de sessão.
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A fricção vira parâmetro mensurável, e portanto auditável e periciável
    efeitos:
      - id: e4
        ordem: 1
        efeito: A perícia de arquitetura de escolha se profissionaliza, com metodologia reprodutível para demonstrar padrão escuro em juízo.
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Laboratórios independentes passam a certificar interfaces por arquitetura de escolha, como já se faz com consumo de energia e acessibilidade.
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Compra pública e adoção escolar passam a exigir o selo atencional em edital, o que transfere o poder de pauta do regulador para o comprador institucional.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: A baixa adesão e a reversão pós-intervenção viram peça central de defesa das plataformas, deslocando a discussão de dano para causalidade e permanência.
        sinal: medio
        prazo: 2027
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A pesquisa migra de quanto tempo para que tipo de sessão, e arrependimento declarado substitui minutos como desfecho primário.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Métricas de qualidade de sessão entram em SDKs de telemetria como campo padrão, e a mesma instrumentação criada para provar dano passa a ser usada para otimizar engajamento.
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A fricção muda de alvo, do entretenimento para a ferramenta que trabalha por você
    efeitos:
      - id: e6
        ordem: 1
        efeito: Assistentes conversacionais passam a embutir interrupção obrigatória e revelação de natureza artificial por exigência legal.
        sinal: forte
        prazo: 2027
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: A fricção em ferramenta de trabalho cobra custo de oportunidade visível, e surge um mercado de perfil profissional isento de interrupção.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A regulação se bifurca entre IA-companhia e IA-ferramenta, e a finalidade declarada do produto vira categoria jurídica disputada, com incentivo a reclassificação oportunista.
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: O objeto da intervenção deixa de ser tempo de tela e passa a ser delegação cognitiva, com checkpoints de compreensão no lugar de contadores de minutos.
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O próprio ambiente de trabalho com agentes embute pausa, revisão obrigatória e registro de decisão como parte do fluxo, e não como aplicativo externo.
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Organizações passam a tratar dependência de agente como risco operacional auditável e a exigir prova periódica de competência residual humana.
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

O que o bloco não diz sozinho: as três subárvores não são independentes — elas competem
pelo mesmo recurso escasso, que é a definição de dano. Se prevalecer a leitura de D2 em
sua versão defensiva (e5), a subárvore de D1 desacelera, porque o remédio regulatório
perde base probatória. Se prevalecer a versão acusatória, D1 acelera e arrasta D3 junto,
porque a mesma doutrina que trata arquitetura como causa não tem como isentar a
arquitetura de um agente.

O segundo não-dito é a assimetria de prazo. Os efeitos de primeira ordem de D1 têm data
marcada em contrato — fevereiro de 2027 [4] — e por isso confiança alta. Os de D3 dependem
de uma distinção conceitual que ninguém formulou ainda. Mapa com confiança alta na base e
baixa no topo é o esperado; o que seria suspeito é o contrário.

O terceiro: a roda não contém nenhuma ramificação em que a fricção simplesmente funcione e
o assunto se encerre. Isso é deliberado. Toda a evidência disponível aponta para efeito
grande e não duradouro [1], o que empurra o tema para regulação permanente ou para
desistência, e não para cura.

## 6. Sinais fracos e wildcards

**A candidata rejeitada — hardware e ritual de desconexão.** Era a raiz mais bonita e não
passou no teste da Etapa 2. Capa que tampa a tela, telefone de papel impresso pela manhã,
tag NFC que trava o aparelho, caixa trancável, telefone minimalista: tudo isso existe,
tudo isso é encantador, e nada disso mudou uma restrição do campo. O *Aperture* é
protótipo em busca de realimentação, não produto [5]; a "economia da fricção" é coberta
sem um único número de mercado publicado [6]; o Light Phone III chegou a ser eleito uma
das invenções do ano pela TIME e ainda opera em regime de pré-venda com fila. Pelo critério
da skill, isso é **emergente**: curva de capacidade subindo, sem mudança estrutural em quem
produz ou consome. Fica no radar, não na raiz. O sinal a vigiar é um só: o dia em que um
fabricante de celular grande vender um modo de aparelho — não um app — com tela reduzida
por default.

**Sinal fraco 1 — fricção dentro do harness de programação com agente.** Projetos que
embutem pausa, medição de fadiga e checkpoint no próprio ambiente de trabalho com IA
(`breakwatch`, `workshop-wellbeing-hooks`) são a primeira aparição de bem-estar digital
como componente de infraestrutura de desenvolvimento, e não como aplicativo de consumo. É
o tema 18 encontrando o tema 1. Se isso pegar, a fricção vira dependência de projeto,
versionada e revisada em code review.

**Sinal fraco 2 — a sátira como método de pesquisa.** Peças como `Claudeholic` e
`scroll-scold` não são produto; são instrumentos de crítica que testam publicamente uma
hipótese de comportamento antes que exista literatura sobre ela. O padrão histórico é que
a sátira chegue primeiro e a categoria depois. Vale acompanhar o que elas ridicularizam
hoje.

**Sinal fraco 3 — a fricção reaproveitada como mecânica de engajamento.** Tempo de tela
convertido em carteira de ações, milhas roladas pelo polegar, desafio de matemática para
liberar o app: são intervenções que usam o vocabulário do jogo para combater o jogo. O
risco embutido é óbvio — a mesma gramática que gamifica a abstinência pode gamificar a
recaída.

**Wildcard 1 — a plataforma que adota fricção por vontade própria e ganha com isso.** Note
que a versão *involuntária* disso já ocorreu: a Meta implantará teto default de duas horas
para adolescentes — mas como cláusula de um acordo de US$ 18 bilhões, com US$ 5,3 bilhões
retidos até que concorrentes façam o mesmo [4]. O wildcard verdadeiro é a versão
voluntária: uma plataforma grande adotar teto de sessão por default para *adultos*, sem
processo judicial, e reportar crescimento de base. Baixa probabilidade, impacto altíssimo:
converteria fricção de custo de conformidade em vantagem competitiva e reescreveria a
subárvore inteira de D1 em dois anos.

**Wildcard 2 — a fricção obrigatória produz dano mensurável.** Uma coorte de adolescentes
sob teto default por dois anos que apresente pior desfecho que o grupo sem teto — por
isolamento, por migração para serviços não regulados, por perda de rede de apoio. Baixa
probabilidade, impacto devastador sobre D1 e D3 simultaneamente, porque retira a base
moral de todo o movimento.

**Wildcard 3 — o modelo local muda o custo da vigilância benigna.** Se a detecção de uso
problemático rodar inteiramente no dispositivo, sem telemetria, a intervenção deixa de
exigir confiança na plataforma. Isso destravaria fricção adaptativa sem o preço de
privacidade que hoje a inviabiliza — e encosta direto no tema de IA local.

## 7. Contra o próprio mapa

**Extrapolação linear.** O efeito e2 ("fricção vira argumento de venda") é o presente, só
que mais: telefones minimalistas e apps de foco já se vendem assim há anos. Não há
descontinuidade nele — só mais volume da mesma curva. Rebaixado de forte para médio, e sua
subárvore (e2.1, e2.1.1) carrega o mesmo desconto. O mesmo vale parcialmente para e4: a
perícia de padrão escuro é continuação de uma prática de consultoria que já existe; o que
é novo é o foro, não o método.

**Velocidade de adoção nunca vista.** O efeito e1.1.1 — primitivas de interrupção
padronizadas em bibliotecas de componentes até 2030 — pressupõe adoção mais rápida do que
o caso comparável mais próximo: acessibilidade. A WCAG é de 1999, virou exigência legal em
várias jurisdições ao longo dos anos 2000, e ainda hoje a maioria dos produtos falha em
verificação automática básica. Se acessibilidade levou vinte e cinco anos para chegar onde
está, fricção padronizada em cinco é otimismo. Mantido no mapa com `confianca: baixa`
justamente por isso. Igualmente suspeito é e3.1: repactuar a moeda da publicidade digital
até 2029 supõe velocidade que nem a transição para *viewability* — que levou quase uma
década e ainda convive com o padrão antigo — sustenta.

**Se a disrupção não vingar.** D1 morre se o Digital Fairness Act encalhar, se o acordo da
Meta for reaberto em recurso, ou se as plataformas conseguirem cumprir a letra e esvaziar
o espírito — teto de duas horas que o usuário renova com dois toques é conformidade sem
fricção. Nesse caso caem e1, e2, e3 e as oito folhas abaixo delas, e o tema volta a ser
mercado de nicho de app de autocontrole, exatamente como em 2023. D2 morre por dentro: se
os estudos de replicação confirmarem que só 25,5% das pessoas cumprem a intervenção [1] e
que o efeito reverte em semanas, o argumento pericial desaba e a subárvore e4/e4.1/e4.1.1
some — sobra apenas e5, que é a própria defesa. D3 morre se a distinção entre
IA-ferramenta e IA-companhia se provar jurídica e tecnicamente indecidível: a saída mais
provável nesse caso não é regulação melhor, é isenção geral por finalidade declarada, e
e6.1.1 vira o cenário base em vez de efeito de terceira ordem.

**Viés do autor.** Pergunta obrigatória da skill, e nesta rodada não houve autor humano
para respondê-la — a execução correu sem interlocutor, com parâmetros fixados de antemão e
viés declarado como neutro. Registro a limitação em vez de inventar a resposta. O que
declaro é o viés *da execução*: o tema recompensa a narrativa de que a fricção está
vencendo, porque as manchetes de 2026 são todas de vitória regulatória. A correção aplicada
foi rebaixar hardware de raiz a sinal emergente (§6) e manter, em e5, uma subárvore inteira
dedicada ao argumento contrário. Um mapa deste tema que não contenha a hipótese "nada disso
funciona de forma duradoura" é propaganda.

**O que mudaria de ideia.** Dois gatilhos declarados na abertura: evidência de que a adoção
já passou da maioria inicial — o que tornaria o tema maduro e não emergente — e evidência
de que a tecnologia não rompe nada. Do primeiro há um indício incômodo: o teto default da
Meta alcança, de uma vez, a maior base adolescente do Ocidente [4], o que não é adoção de
maioria inicial por escolha, mas é penetração de maioria por imposição. Isso não torna o
tema maduro, mas torna madura a *categoria produto*, e é o principal motivo de a confiança
global deste mapa ser `media`, não `alta`.

## 8. O que a máquina errou

O erro mais específico, e o mais instrutivo: ao montar a §4, a máquina tinha praticamente
escrito "hardware e ritual de desconexão" como terceira disrupção-raiz, com um parágrafo
convincente sobre queda de custo de NFC e e-ink. Era falso por omissão. O teste da Etapa 2
pede um limiar concreto, e não havia nenhum — o *Aperture* é protótipo declarado pelo
próprio estúdio [5], a matéria de negócios sobre "economia da fricção" não traz um único
número de mercado [6], e o telefone minimalista mais visível do segmento opera com fila de
pré-venda e dezenas de funcionários. A candidata era atraente porque é *visual* e porque é
o que a curadoria da turma elegeu como destaque; ela sobreviveria a uma leitura rápida e
ocupa hoje a §6, rebaixada. Foi percebido ao tentar responder "que restrição caiu?" e só
haver resposta estética.

Segundo erro, de método: a primeira tentativa de verificar o ensaio do BMC Medicine bateu
em barreira de autenticação e a máquina quase registrou o dado como lido, porque o resumo
do buscador era detalhado o bastante para parecer leitura. Está marcado como não verificado
em todas as ocorrências, e por isso o número de fontes no frontmatter é 7 e não 12.

**Fontes citadas no texto que NÃO foram abertas nesta sessão** — dependem de confirmação
antes de qualquer uso como evidência: (a) o estudo do *one sec* publicado na PNAS —
tentativa de acesso devolveu 403; (b) o ensaio randomizado do BMC Medicine sobre redução a
duas horas diárias e a reversão pós-intervenção — redirecionamento para autenticação; (c) a
lei californiana com lembrete de pausa a cada três horas e a lei de Washington HB 2225; (d)
a Lei 15.211/2025 brasileira e seu cronograma de fiscalização; (e) preço, volume e
cronograma do Light Phone III; (f) o estudo de uso afetivo de OpenAI e MIT Media Lab. Todos
aparecem no texto com marca explícita.

Terceiro: número redondo demais. "US$ 18 bilhões" e "cerca de 2 horas" circulam com valores
divergentes entre veículos — há relatos de "até US$ 18 bilhões", de "US$ 17,1 bilhões" e de
"US$ 5,3 bilhões retidos". O documento usa a formulação da fonte que foi de fato lida [4] e
não tenta conciliar as demais.

Quarto, uma limitação estrutural desta rodada: a Etapa 0 da skill é bloqueante e
entrevista o usuário. Não houve usuário. Os parâmetros vieram fixados no despacho e foram
adotados como respostas; a pergunta sobre viés do autor (Etapa 4, item 4) ficou sem
resposta real, como registrado na §7. Um mapa produzido sem a entrevista viva perde
exatamente a parte que impede a roda de sair genérica — e é possível que este tenha saído
mais alinhado ao enunciado da disciplina do que teria saído com um autor discordando.

## 9. Três cenários para 2031

**Provável.** A fricção virou item de conformidade e perdeu quase toda a graça. Em 2031,
todo produto de mídia grande tem teto de sessão configurável, curfew de notificação e feed
não algorítmico disponível em algum menu, porque foi obrigado — e a maior parte dos
usuários adultos nunca mexeu em nenhum deles. As equipes de produto ganharam uma disciplina
nova, com especialistas, checklist e auditoria, que se parece muito com o que aconteceu
com acessibilidade e privacidade: presente em todo lugar, levada a sério em poucos. As
plataformas cumpriram a letra e reconstruíram o engajamento por fora dos parâmetros
regulados. O mercado de objetos de desconexão continuou pequeno, saudável e cultuado, sem
nunca ter virado indústria. E o assunto migrou para a IA, onde a conversa recomeçou do zero
com o mesmo vocabulário e a mesma ingenuidade.

**Desejável.** Em 2031, a unidade de medida mudou. A discussão parou de ser sobre minutos e
passou a ser sobre sessões que a pessoa reconhece como suas, e existe instrumentação
pública e independente para medir isso — não telemetria da própria plataforma. Produtos
competem declarando o que se recusam a fazer, e há um selo que significa alguma coisa
porque foi construído por laboratório independente e exigido em compra pública e escolar
antes de ser exigido por lei. Para chegar aqui, três coisas precisaram ser feitas: alguém
teve de financiar pesquisa de fricção *permanente e tolerável*, e não de abstinência de
duas semanas, porque o dado que existia media um regime que ninguém sustenta; a
instrumentação de qualidade de sessão precisou nascer fora das empresas medidas, sob pena
de virar mais um sinal de otimização; e a discussão sobre IA precisou ser separada por
finalidade — companhia e ferramenta — antes que a regulação chegasse, e não depois.

**Indesejável.** Em 2031, a fricção virou produto de assinatura e privilégio de classe.
Quem paga tem o modo calmo, o feed cronológico, o silêncio noturno; quem não paga tem a
versão gratuita, mais agressiva do que nunca, porque precisa financiar a paz dos outros. A
verificação de idade, criada para aplicar tetos por faixa etária, virou identidade
obrigatória para consumir mídia, e a infraestrutura montada para proteger adolescentes é a
mesma que hoje identifica todo mundo. A telemetria de qualidade de sessão, construída para
provar dano em juízo, foi absorvida pelas plataformas e é usada para prever exatamente o
instante em que a pessoa está prestes a sair — para não deixar. O sinal precoce disso é
observável muito antes de 2031, e é banal: o dia em que o "modo foco" aparecer listado como
benefício do plano pago, e não como configuração do plano gratuito.

## 10. O experimento

**O provador de fricção.** Um instrumento de sala, construível em um fim de semana: uma
mesma tarefa de consumo de mídia — digamos, "encontre e assista a três vídeos sobre um
assunto que você escolheu" — repetida por cada participante sob cinco arquiteturas de
atrito diferentes, sorteadas em ordem aleatória. As cinco: (a) sem atrito, linha de base;
(b) atraso temporal na abertura, com opção explícita de desistir, imitando o *one sec*; (c)
degradação estética, com a interface deliberadamente feia e em escala de cinza; (d) atrito
corporal, exigindo um gesto físico desproporcional para continuar; (e) atrito social, em
que continuar exige declarar em voz alta ao grupo por que está continuando. Ao final de
cada rodada, uma única pergunta: "essa sessão foi sua?", em escala, mais o registro de
quantas vezes a pessoa contornou o mecanismo.

**Que pergunta sobre o futuro ele responde.** Se fricção vira requisito regulado (D1), a
pergunta de projeto imediata é *qual* fricção especificar, e a literatura disponível não
responde — ela mede abstinência total, não formato. O experimento responde a versão
pequena e honesta disso: qual formato de atrito produz menos arrependimento com menos
contorno. E mede a variável que a §7 aponta como o calcanhar do campo: a taxa de contorno,
que é o que transforma conformidade em teatro.

**Que tecnologia emergente usa, e por que não dá para fazer com tecnologia madura.** Usa
duas. A primeira é a instrumentação de qualidade de sessão — arrependimento declarado no
ato, e não tempo de tela agregado no fim do dia; é emergente porque o desfecho padrão de
toda ferramenta madura continua sendo o minuto. A segunda é classificação local no
dispositivo para decidir *quando* interpor o atrito sem enviar nada para fora; com
tecnologia madura isso exigiria telemetria remota, e a pergunta contaminaria a resposta —
ninguém declara arrependimento honesto para um instrumento que está mandando o dado embora.
Um contador de tempo de tela comum não serve porque mede a única variável que este mapa
argumenta estar errada.

**O que a turma faria testando em sala.** Cada pessoa passa pelas cinco condições em dez
minutos, no próprio telefone, com o instrumento rodando no navegador. O resultado coletivo
vai para o quadro na hora: uma matriz de formato de atrito por arrependimento e por taxa de
contorno. A discussão começa pelo caso mais provável e mais interessante — a condição que
mais reduziu o uso ser também a que mais gerou contorno — porque é exatamente o dilema que
a Meta terá a partir de fevereiro de 2027 [4].

**O que mudaria a opinião do autor.** Se as cinco condições produzirem arrependimento
estatisticamente indistinguível, o argumento central deste mapa — de que o formato da
intervenção é o que importa, e não a quantidade — perde sustentação, e o tema volta a ser
uma questão de dose. E se a condição de atrito social vencer com folga, o mapa inteiro está
mirando no lugar errado: a alavanca não seria o design do produto, mas o contexto de uso —
o que reclassificaria a Lei 15.100/2025 brasileira, que proíbe o aparelho na escola, como
a intervenção mais bem desenhada do conjunto, e não como a mais grosseira.

## 11. Fontes

Lista apenas do que foi de fato aberto e lido nesta sessão, em 18/09/2026. Fontes citadas
no corpo com a marca "não verificado" estão enumeradas na §8 e deliberadamente fora desta
lista.

1. `https://pmc.ncbi.nlm.nih.gov/articles/PMC11834938/` — Castelo e colegas, ensaio
   randomizado com desenho cruzado, n = 467, bloqueio de internet móvel por duas semanas
   via app Freedom. Sustenta os tamanhos de efeito citados na §3 e em D2 (atenção d = 0,24;
   saúde mental d = 0,57; bem-estar d = 0,46), a taxa de conformidade de 25,5% e o viés de
   autosseleção de 83%. Confiabilidade alta: artigo revisado por pares, pré-registrado, com
   limitações declaradas pelos próprios autores — que são, aliás, o que este mapa mais usa.
2. `https://arxiv.org/abs/1902.00157` — Lyngs e colegas, revisão de 367 apps e extensões de
   autocontrole digital sob modelo de sistemas duais. Sustenta a afirmação de que o campo
   tinha repertório sedimentado sem mecanismo explicado. Confiabilidade média-alta:
   preprint de trabalho publicado em CHI; só o resumo foi lido nesta sessão, e ele é
   deliberadamente mais teórico do que empírico.
3. `https://epthinktank.eu/2026/05/06/addictive-design-on-online-platforms/` — serviço de
   pesquisa do Parlamento Europeu. Sustenta a cronologia regulatória de D1: achados
   preliminares contra o TikTok em 06/02/2026 sob os artigos 25, 34 e 35 do DSA; veredito de
   júri nos EUA em março de 2026; Digital Fairness Act esperado e remédios propostos.
   Confiabilidade alta para fatos processuais e datas; é fonte institucional e parte
   interessada no desfecho, o que pede cautela na leitura prospectiva.
4. `https://www.macrumors.com/2026/08/26/meta-teen-time-limit/` — detalhamento do acordo da
   Meta de 26/08/2026. Sustenta o teto default de duas horas, o bloqueio entre meia-noite e
   6h, o silêncio de notificação entre 8h e 15h, os lembretes aos 15, 60 e 90 minutos, as
   curtidas ocultas, o valor aproximado de US$ 18 bilhões e os US$ 5,3 bilhões retidos como
   alavanca sobre concorrentes. Confiabilidade média: imprensa especializada relatando
   documento judicial que não foi lido em primeira mão; os valores divergem entre veículos
   (ver §8).
5. `https://specialprojects.studio/project/aperture/` — página do próprio estúdio sobre o
   *Aperture*. Sustenta a descrição do mecanismo e, sobretudo, a afirmação de que é
   protótipo e não produto — que é o que rebaixa a candidata de raiz a sinal emergente.
   Confiabilidade alta para o status do projeto (é o autor falando de si) e baixa para
   qualquer alegação de eficácia.
6. `https://www.pymnts.com/the-weekender/2026/the-friction-economy-why-gen-z-is-trading-smartphones-for-dumb-devices/`
   — reportagem de negócios sobre a "economia da fricção". Sustenta a existência do
   discurso de mercado e, negativamente, a ausência de números: não traz uma única cifra de
   tamanho de mercado. Confiabilidade baixa como evidência quantitativa; média como registro
   de narrativa do setor. Usada no mapa principalmente pelo que lhe falta.
7. `https://agenciabrasil.ebc.com.br/educacao/noticia/2026-01/mec-fara-pesquisa-sobre-impacto-da-restricao-de-celular-nas-escolas`
   — agência pública brasileira. Sustenta a nota sobre o Brasil: Lei 15.100/2025 sancionada
   em 13/01/2025, pesquisa nacional do MEC no primeiro semestre de 2026, 80% dos estudantes
   brasileiros relatando distração com celular no PISA 2022, média de 9h13 de tela diária.
   Confiabilidade média-alta para os fatos administrativos; os números de efeito percebido
   são relato de especialista, não medição.

## 12. Anexo — o levantamento bruto

**Condições de execução.** Rodada automatizada, sem usuário humano presente. A Etapa 0 da
skill é bloqueante por desenho e não pôde ser cumprida como entrevista; os parâmetros foram
recebidos prontos no despacho e adotados integralmente como se fossem respostas. Tema: bem-
estar digital e design de fricção, tema 18 de 19, família "Pessoas e dados". Horizonte:
2031. Público: quem projeta mídia e interação. Recorte: global com nota sobre o Brasil.
Descartado de início: apenas o que já é comum em produto de massa, conforme a régua da
disciplina. Viés: neutro. Disrupção suspeita: nenhuma, a descobrir. Profundidade: três
ordens. Modo: a partir do tema, não do setor. Login: jgpt. A skill manda recusar geração
sem entrevista; a recusa não foi aplicada porque não havia interlocutor a quem recusar, e a
limitação está registrada na §8 em vez de ser silenciada.

**Buscas realizadas, na ordem.**

1. `digital wellbeing friction design 2026 attention economy hardware dumbphone market` —
   devolveu PYMNTS (fonte 6), Stanford Daily, Vice, PauseGadget, Accio, futureparty, Vertu.
   Achado útil: existência do discurso "economia da fricção"; achado negativo decisivo:
   nenhum número de mercado em nenhum dos resultados.
2. `Ulrik Lyngs digital self-control tools research friction interventions effectiveness` —
   devolveu a página do pesquisador, Semantic Scholar, arXiv 1902.00157 (fonte 2), o paper
   CHI 2024 do workshop com n = 280 estudantes, e "Not Now, Ask Later" sobre enfraquecimento
   do regime de mudança de comportamento ao longo do tempo. Este último é diretamente
   relevante para e5 e não foi aberto; fica como pista para quem continuar.
3. `Brasil lei ECA Digital 15.211/2025 ... prazo 2026` — devolveu Machado Meyer, Câmara,
   FADC, IBDTec. Tentativa de abrir a análise da Machado Meyer retornou HTTP 403. Dado
   colhido só do resumo de busca: vigência em 17/03/2026, fiscalização em etapas, segunda
   etapa prevista para agosto de 2026. Marcado como não verificado.
4. `"one sec" app friction study intervention ACM reduce app openings results` — devolveu o
   artigo da PNAS, o CHI 2024 de Haliburton sobre frições de design em campo longitudinal, e
   resenhas comerciais. Números colhidos do resumo de busca e não confirmados: 1.039
   usuários ao longo de 13,4 semanas; experimento de campo com 280 participantes em 6
   semanas; 36% de desistência após a interferência; −37% de tentativas de abertura na sexta
   semana; a opção de desistir pesou mais que a mensagem de deliberação. Tentativa de abrir
   a PNAS: HTTP 403. Tentativa de abrir o PDF do CHI de Haliburton: o conteúdo voltou
   binário e ilegível. Ambos marcados como não verificados. Esta é a lacuna mais séria do
   documento, porque é justamente a literatura sobre *formato* de fricção — o experimento da
   §10 existe, em parte, para contornar a ausência dela.
5. `EU Digital Services Act addictive design infinite scroll autoplay ban 2026 proposal
   Digital Fairness Act` — devolveu medianama, EPRS (fonte 3), TechBriefly, digitalfairnessact.com,
   TechTimes, Harro, Petrie-Flom/Harvard. Optei pela fonte institucional do Parlamento
   Europeu e descartei os agregadores.
6. `AI chatbot overuse wellbeing guardrails 2026 OpenAI break reminders emotional reliance
   study` — devolveu APA Monitor, International AI Safety Report 2026 (arXiv 2602.21012),
   IEEE Spectrum, o PDF do estudo de uso afetivo da OpenAI, Nature Machine Intelligence.
   Dados colhidos só do resumo: ~0,15% dos usuários semanais com sinais de apego elevado;
   0,03% das mensagens; usuários pesados com piores desfechos; Califórnia exigindo pausa a
   cada 3h e revelação de que é IA; Washington HB 2225 com vigência em janeiro de 2027
   proibindo elogio excessivo, simulação de sofrimento e incentivo ao isolamento. Nenhum
   aberto. Toda a base de D3 depende desta rodada e está marcada como não verificada — é a
   raiz mais frágil do mapa em termos de evidência lida, e isso deveria pesar em qualquer
   uso posterior.
7. `Light Phone III sales 2026 Brick ...` — PitchBook, Tracxn, Crunchbase, página do
   fabricante. Colhido do resumo: US$ 22,9 milhões levantados, 45 funcionários, preço entre
   US$ 599 e US$ 899, TIME Best Inventions 2025, pré-venda com entrega prevista para
   setembro de 2026. Tentativa de abrir `thelightphone.com/lightiii` devolveu página sem
   conteúdo textual extraível — provavelmente renderizada por script. Não verificado.
8. `Aperture Special Projects phone case ...` — levou à página do estúdio (fonte 5), a
   Creative Boom, Fast Company e Design Indaba. A página do estúdio foi aberta e confirmou o
   status de protótipo, que é o dado que derrubou a candidata a raiz.
9. `TikTok "wind down" Instagram teen accounts sleep mode ...` — devolveu guias parentais,
   newsroom do TikTok, blogs de análise. Colhido do resumo e não verificado: Teen Accounts
   do Instagram desde 17/09/2024, com aviso aos 60 minutos e modo dormir das 22h às 7h; 1
   hora de limite default para 13–17 anos no TikTok. Um resultado trazia "aumento de 234% na
   adoção da ferramenta" após o default de 60 minutos do TikTok — número de origem obscura,
   de agregador, descartado e registrado aqui apenas para que ninguém o reencontre e o use.
10. `BMC Medicine 2025 randomized trial restricting smartphone internet three weeks
    wellbeing` — devolveu o artigo do BMC (acesso bloqueado por redirecionamento de
    autenticação), Healio, Examine, MadInAmerica, e o PMC do ensaio de Castelo, que virou a
    fonte 1. Dados do BMC colhidos só do resumo: redução a ≤2h/dia por três semanas; queda
    de 27% nos sintomas depressivos; reversão rápida ao fim da intervenção. Não verificado,
    e é uma pena, porque a reversão é o achado mais importante do tema.
11. `Lei 15.100/2025 proibição celular escolas Brasil resultados 2026` — devolveu MPCE,
    Agência Brasil (fonte 7), gov.br/MEC, Senado, acessa.com. Tentativa de abrir a página do
    MEC em gov.br falhou com *socket hang up*; a matéria da Agência Brasil foi aberta e
    virou a fonte 7. Colhido apenas do resumo de busca e não usado no corpo: restrição em
    todos os espaços escolares saltando de 20% para 48%; permissão irrestrita, que era 13%,
    deixando de existir; adoção por 92% das escolas segundo veículo secundário. Números
    plausíveis, origem não confirmada em primeira mão — ficam aqui e não na §3.

**Candidatas a disrupção-raiz e o veredito de cada uma.**

- *Fricção por mandato regulatório e judicial* — ACEITA (D1). Limiar datável: 06/02/2026,
  03/2026, 26/08/2026.
- *Fricção como parâmetro mensurável e periciável* — ACEITA (D2). Limiar: desenho causal com
  bloqueio real e medição objetiva de atenção, com d = 0,57 em saúde mental.
- *Fricção aplicada à IA conversacional e agêntica* — ACEITA (D3), com ressalva forte: o
  limiar legal é real mas a evidência de apoio não foi verificada em primeira mão.
- *Hardware, objeto e ritual de desconexão* — REJEITADA como raiz, movida para §6 como
  emergente. Motivo: nenhuma restrição do campo caiu; o que há é queda de custo dentro do
  mesmo jogo e cobertura de demonstração, não de adoção.
- *Bloqueadores de app, contador de tempo de tela, modo não perturbe* — REJEITADOS como
  maduros, conforme a régua da disciplina e o critério da Etapa 2. Teste aplicado: se
  sumissem amanhã, o campo não voltaria a ser o de 2021; são infraestrutura absorvida e
  substituível.
- *Gamificação da abstinência (tempo de tela como carteira de ações, milhas do polegar)* —
  REJEITADA como raiz; virou sinal fraco 3. Motivo: é mecânica de engajamento aplicada ao
  problema do engajamento, sem limiar próprio.
- *Sátira e crítica performática (Claudeholic, scroll-scold)* — REJEITADA como raiz; virou
  sinal fraco 2. Motivo: é método de investigação pública, não tecnologia que remove
  restrição.

**Efeitos cortados durante a Etapa 3.**

- "Surge um mercado de seguro contra vício digital" — cortado por não ter mecanismo causal
  identificável ligando-o a nenhum efeito de segunda ordem; era especulação livre.
- "Escolas passam a ensinar design de fricção no currículo" — cortado por ser efeito de
  quarta ordem disfarçado e por ser genérico o bastante para servir a qualquer tema, o que
  o enunciado da rodada pedia explicitamente para excluir.
- "O celular se fragmenta em objetos de função única" — mantido fora da roda apesar de
  constar do enunciado da disciplina, porque depende inteiramente da raiz de hardware, que
  foi rejeitada. Se aquela raiz for reabilitada por evidência nova de mercado, este é o
  primeiro efeito a reinserir, e ele traria consigo uma subárvore de pelo menos três folhas.
- "Plataformas grandes adotam fricção por default e crescem com isso" — não entrou como
  efeito porque a versão involuntária já é fato consumado [4] e a versão voluntária é
  wildcard; está na §6 como wildcard 1, que é o lugar metodologicamente correto.
- Um quarto nível chegou a ser esboçado sob e1.2.1, conectando identidade verificada a
  mercados de reputação. Não foi gerado: o formato da disciplina fixa três níveis, e o
  desdobramento virou parte da nota de fronteira com o tema de soberania de dados.

**Buscas que não foram feitas e deveriam ser, por quem continuar.** Corpus do GitHub Topics
`digital-wellbeing` com contagem de repositórios ao longo do tempo, que daria uma série
temporal em vez de anedota; r/nosurf e r/digitalminimalism como sinal social medido, e não
citado; literatura de CHI 2025 e 2026 sobre habituação a frições, que é a lacuna central da
§3; e qualquer dado de mercado brasileiro sobre aparelhos minimalistas, que aqui é zero
absoluto. Nenhuma dessas foi executada nesta rodada, e a §3 é mais fraca por isso.
