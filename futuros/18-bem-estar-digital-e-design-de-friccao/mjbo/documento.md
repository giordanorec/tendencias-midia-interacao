---
tema: Bem-estar digital e design de fricção
slug: bem-estar-digital-e-design-de-friccao
autor_login: mjbo
zona_de_interesse: Pessoas e dados
data: 2026-09-17
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 9
efeitos_ordem_2: 13
efeitos_ordem_3: 13
tecnologias_citadas: [NFC passivo, Brick, Unpluq Tag, Aperture, Light Phone III, Daylight DC-1, one sec, Opal, Freedom, Olauncher, Screen Time API do iOS, iOS Shortcuts, hooks de harness de agente, LLM como avaliador de intenção, verificação de idade, ANPD]
fontes: 14
confianca: media
experimento: Portão de intenção no harness do agente
skill_usada: futurizacao-mjbo
publico_ok: false
---

## 1. Resumo

Depois de vinte anos otimizando engajamento, o design descobriu o valor da fricção — e em
2026 a fricção deixou de ser um app e virou três coisas ao mesmo tempo: um objeto que se
compra (o Brick de US$ 59, a Unpluq Tag, a capa Aperture, o Light Phone III de US$ 699), uma
cláusula de sentença judicial (o acordo de US$ 18 bilhões que impôs à Meta limite padrão de
duas horas para adolescentes) e um gênero expressivo que roda em extensão de navegador
escrita numa tarde. Este mapa trata as três como rupturas distintas, com consequências que
não convergem: a primeira re-fragmenta o smartphone em objetos de função única e transforma
calma em bem posicional; a segunda mata o tempo de sessão como métrica-mestra de produto e
arrasta identidade verificada junto, por efeito colateral; a terceira desfaz a forma canônica
da interface. A quarta ruptura é a que importa para quem projeta: o objeto do bem-estar
digital está migrando de tempo de tela para dependência cognitiva em relação a agentes de IA
— e ali não há tela para contar nem app para bloquear, o que deixa o setor inteiro, construído
sobre a API de tempo de tela, sem instrumento de medição. O mapa tem confiança média: a
evidência de eficácia da fricção é real mas curta, e o ramo dos agentes é aposta declarada.

## 2. O tema

Bem-estar digital, no uso corrente da indústria, nomeia o conjunto de recursos com que um
sistema tenta reduzir o próprio uso: contador de tempo de tela, bloqueador, modo "não
perturbe", lembrete de pausa. Design de fricção é o nome do método por trás da parte que
funciona: introduzir deliberadamente pontos de dificuldade na interação, para interromper o
automatismo e forçar deliberação antes da ação. É literalmente o inverso do mandamento que
organizou a disciplina de interação desde os anos 1990 — reduza passos, reduza carga, reduza
tempo até a tarefa.

Onde isso encosta em mídia e interação é direto demais para precisar de argumento: o objeto
de trabalho é a interface, e a pergunta é se ela deve ser boa em ser usada ou boa em ser
largada. O que faz o tema merecer um mapa de futuro, e não apenas um levantamento de estado
da arte, é que em 2026 a variável que mudou não foi a técnica — foi *quem decide*. Até 2024,
a fricção era escolha de um usuário preocupado, instalada por ele, desinstalável por ele.
Hoje ela chega por três caminhos que não se falam: comprada como objeto físico, imposta por
sentença judicial e lei, e escrita pelo próprio usuário com ajuda de um LLM. Três regimes de
decisão diferentes produzem três futuros diferentes para a mesma tecnologia, e é isso que uma
roda dos futuros consegue separar e um levantamento não.

Há ainda uma razão de fronteira. A conversa sobre uso excessivo está migrando de tela para
agente — de "quanto tempo você passou" para "quanto do seu trabalho você não entende mais".
Essa migração invalida o instrumento de medição do campo inteiro, e quem projeta interação
com agentes vai herdar o problema antes que exista vocabulário para ele.

## 3. Onde isso está hoje

### O que já existe e funciona em produção

**Fricção em software, com evidência publicada.** O caso mais documentado é o `one sec`, que
intercepta a abertura de um app-alvo com uma espera curta somada a uma mensagem de
deliberação e a opção explícita de desistir. A página de pesquisa do próprio app lista quatro
trabalhos revisados por pares: o estudo no PNAS (Grüning, Riedel e Lorenz-Spreen, fevereiro de
2023), o estudo longitudinal in-the-wild no CHI 2024 (Haliburton, Grüning, Riedel, Schmidt e
Terzimehić), um experimento de campo da Autoridade Dinamarquesa de Concorrência e Consumo com
consumidores jovens (2025) e uma revisão narrativa de Cambridge (Yap, Fokas, Ferguson e Orben,
dezembro de 2025) [2]. Os números que circulam do experimento do PNAS — 280 participantes, seis
semanas, cerca de 36% de aberturas abandonadas após a interferência e cerca de 37% menos
tentativas na sexta semana em relação à primeira — vêm da descrição do estudo, não de leitura
direta do artigo, que respondeu 403 às tentativas de acesso (ver Seção 12). O achado
qualitativo mais importante, e o que a página do app declara, é que **a opção de desistir pesa
mais do que o atraso em si**: a fricção não funciona por custo de tempo, funciona por abrir uma
porta de saída no meio do automatismo.

**Fricção em hardware, vendida no varejo.** O `Brick` é um disco magnético passivo com NFC:
custa US$ 59, não tem bateria, e o telefone só volta a destravar os apps bloqueados quando
encostado fisicamente nele; pode ser compartilhado entre telefones da mesma casa e não tem
assinatura [12]. A `Unpluq Tag` opera pela mesma lógica de chave física, com assinatura anual
acoplada. O `Light Phone` é o caso mais antigo e mais instrutivo: fundado em 2014, primeiro
aparelho entregue em 2017 com US$ 415 mil de financiamento coletivo, o Light Phone II em 2019
com US$ 3,5 milhões, o Light Phone III lançado em março de 2025, e um Light Flip anunciado para
abril de 2027 [6]. O `Daylight DC-1` esgotou o primeiro lote de cinco mil unidades ainda em 2024,
com tela transflectiva monocromática e retroiluminação âmbar, sem luz azul [11].

**Fricção imposta por default, por decisão judicial.** Em agosto de 2026 a Meta fechou acordo
de até US$ 18 bilhões com 52 estados e territórios dos EUA. Passam a valer, por padrão, para
menores de 18 anos no Instagram e no Facebook: limite diário de duas horas que só o
responsável pode desligar, bloqueio de meia-noite às 6h, notificações silenciadas das 8h às
15h, aviso de pausa a cada 15 minutos de uso contínuo, feed não algorítmico como opção padrão,
autoplay desativável e contagem de curtidas oculta [5]. Trinta por cento do valor é
condicional: só é pago se YouTube e TikTok adotarem limite diário de uma hora, modo noturno e
verificação de idade — e a própria Meta declarou que o limite de tempo e o modo noturno só
estão garantidos por cinco anos se os concorrentes não aderirem [5]. Isto é decisivo para ler o
que vem: **a fricção foi tratada pela empresa como passivo com prazo de validade, não como
produto**.

**Fricção imposta por lei, no Brasil.** A Lei 15.211/2025, o ECA Digital, está em vigor desde
17 de março de 2026: exige mecanismos técnicos confiáveis de verificação de faixa etária em vez
de autodeclaração, vincula conta de menor de 16 anos a responsável, obriga configurações de
privacidade no máximo por padrão, dá ao responsável ferramentas de acompanhamento de tempo de
tela e gastos, proíbe caixas de recompensa em jogos acessados por menores, e põe a ANPD como
fiscal, com multa de até 10% do faturamento no Brasil, limitada a R$ 50 milhões por infração
[14]. A Lei 15.100/2025 já restringia o uso de celular na educação básica. O contexto brasileiro
justifica a pressa: o Brasil aparece em segundo lugar mundial em tempo diante de telas, com
9h32 por dia, atrás apenas da África do Sul — número de levantamento da Proxyrack sobre o
Digital 2023 Global Report da We Are Social/Meltwater, portanto de 2023 e de metodologia
comercial [8].

**Fricção como software livre, em volume.** O tópico `digital-wellbeing` no GitHub reúne 435
repositórios públicos. Os maiores: `Olauncher`, launcher minimalista para Android com 3,8 mil
estrelas; `curbox-android`, bloqueador livre com 1,3 mil; `FeurStagram`, um cliente de Instagram
sem Reels, feed nem anúncios, com 906; `Zenith`, app de bem-estar em Material 3, com 454;
`Reef`, com 343 [4]. É o retrato mais honesto da saturação: bloqueador virou commodity, e é de
graça.

### O que existe como protótipo, paper ou demo e não está em produção

**A fricção na forma do objeto.** O `Aperture`, do estúdio Special Projects, é uma capa que,
virada, deixa visível apenas uma pequena janela da tela; a interface se adapta a essa janela,
mostra versões mínimas de apps essenciais, aceita comando de voz para definir o que aparece, e
reconhece uso simultâneo por mais de uma pessoa. Está em fase conceitual caminhando para
protótipo — "began as an experimental concept, but it's now moving toward reality" —, foi
finalista do Fast Company 2025 Innovation by Design em Design Experimental e Conceitual, e vem
da mesma casa que fez o Paper Phone e o Envelope para o Google [1]. Não é produto: é o objeto que
demonstra a tese de que a fricção pode estar na *forma*, e não no software.

**A fricção pilotada por LLM.** O trabalho "State Your Intention to Steer Your Attention"
propõe um assistente que coleta a intenção declarada do usuário, lê capturas de tela, títulos de
janela e URLs com um modelo de linguagem, e notifica quando o comportamento diverge da meta;
foi avaliado em estudo de campo within-subjects de três semanas, com 22 participantes, contra
um sistema baseado em regras e contra um controle passivo [3]. É pequeno, é preliminar, e é o
primeiro desenho em que a intervenção atencional entende *conteúdo* em vez de contar minutos.

**A fricção que não bloqueia nada.** O `WellScreen` pede ao usuário que estime diariamente o
próprio uso antes de mostrar o dado real. Em teste de duas semanas com 25 universitários, os
participantes subestimavam sistematicamente o uso de produtividade e de redes sociais e
superestimavam o de entretenimento; houve melhora de 10% no afeto positivo, e a reflexão
estruturada foi descrita como apoio ao reconhecimento de padrões [9].

**A teoria da fricção que ninguém está construindo.** O artigo "The case against efficiency:
friction in social media", de Joshua Garland e colegas, publicado na npj Complexity em 22 de
janeiro de 2026, separa três tipos: fricção **cognitiva** (o aviso que pede reflexão antes de
compartilhar), **estrutural** (limite de encaminhamento, teto de tamanho de grupo) e
**normativa** (a pista social que reafirma a norma da comunidade). O caso empírico mais forte
citado é o do Nextdoor em 2016: exigir que o usuário descrevesse o comportamento suspeito em
vez da aparência reduziu perfilamento racial em 75% — ao custo de 50% de abandono do
formulário. Os autores são explícitos sobre os limites: efeito individual não escala de forma
confiável para a plataforma inteira, fricção demais torna o produto inutilizável, efeito de
curto e de longo prazo divergem, e determinar o nível ótimo de fricção é descrito como
intratável [7]. Quase tudo que a varredura da turma levantou é do primeiro tipo, individual. Os
outros dois praticamente não aparecem no mercado.

### O que já é maduro e por isso não entra na Seção 4

Contador de tempo de tela, bloqueador de app, modo "não perturbe" e escala de cinza: existem
em todo sistema operacional desde 2018, são gratuitos, são 435 repositórios no GitHub, e nada
do que fazem era impossível antes. São melhoria, não ruptura. O levantamento de Lyngs e colegas
já havia catalogado 367 apps e extensões de autocontrole digital e proposto uma taxonomia de
recursos de design a partir de um modelo dual de autorregulação — o campo tem inventário
completo e mecanismo pouco explorado [10].

### Quem está construindo

Estúdios de design com agenda autoral (Special Projects), fabricantes de hardware de nicho
(Light Phone, Daylight Computer, Brick, Unpluq), aplicativos com pesquisa acadêmica acoplada
(one sec), o campo de CHI e ciência do comportamento (Lyngs em Oxford, Orben e o Digital Mental
Health Group em Cambridge, Haliburton e Terzimehić em Munique, Garland em Arizona State),
comunidades de software livre no GitHub e no Show HN, e — desde 2026 — tribunais estaduais
americanos e a ANPD.

## 4. As disrupções-raiz

### 4.1 A fricção materializada: a barreira sai do software e vira objeto ausente

**O que rompe.** Todo bloqueador em software compartilha o mesmo defeito estrutural: quem
instala pode desinstalar, e o faz em três segundos, no momento exato em que a fricção deveria
agir. O acessório de fricção físico quebra isso. Bloquear passa a depender de um objeto que
pode simplesmente *não estar na sala* — um disco NFC deixado na cozinha, uma capa virada, uma
chave que ficou em casa. Isso não é uma melhoria do bloqueador: é um mecanismo diferente,
compromisso vinculante em vez de intenção renovável, disponível por US$ 59 e sem bateria.

**O que invalida.** Invalida o bloqueador por assinatura puramente em software como categoria
com vantagem defensável — se a barreira que funciona é física e não cobra mensalidade, o
mercado de Freedom e Opal fica preso ao segmento que aceita uma barreira que ele mesmo pode
remover. Invalida, mais fundo, a premissa de convergência do smartphone, que diz que todas as
funções devem morar no mesmo objeto porque é mais eficiente. E ameaça o papel profissional do
designer de UX como otimizador de funil: o Nextdoor mostra que 50% de abandono de formulário
pode ser resultado desejado [7], e nenhuma métrica de produto em uso hoje sabe ler isso como
sucesso.

**Por que agora e não há cinco anos.** Três coisas mudaram: a etiqueta NFC passiva ficou barata
o bastante para virar acessório de US$ 59 sem bateria [12]; os sistemas operacionais abriram APIs
que permitem a um app de terceiro bloquear de forma confiável (Screen Time API no iOS, modos de
foco), o que antes só a Apple e o Google conseguiam; e o bloqueador em software saturou até
virar commodity gratuita, com 435 repositórios no GitHub [4] — quando a camada de baixo vira
gratuita, a inovação migra para o formato.

**O que falta para se concretizar.** Falta escala fora do nicho de review de tecnologia. O
Light Phone está no mercado desde 2017 e continua nicho [6]; o Daylight vendeu cinco mil
unidades [11]. Falta também evidência longitudinal de que a barreira física resiste ao hábito —
os dados de eficácia que existem são de fricção em software, de seis semanas [2].

### 4.2 A fricção por default, imposta de fora, na coorte que não escolheu

**O que rompe.** Até 2025, toda intervenção atencional era opt-in: chegava a quem já estava
preocupado, que é exatamente o público que menos precisa dela. O acordo da Meta inverte o
default para uma coorte inteira, por sentença: duas horas, bloqueio noturno, silêncio em
horário escolar, aviso a cada 15 minutos [5]. O ECA Digital faz o mesmo por lei, com ANPD e multa
de 10% do faturamento [14]. O usuário deixou de ser quem decide.

**O que invalida.** Invalida o tempo de sessão como métrica-mestra de produto para menores —
não como preferência de time, como obrigação. Invalida a categoria de app de controle parental
de terceiros, cuja função passa a vir embutida e auditada. E invalida a autodeclaração de idade
como prática aceitável, o que arrasta consigo uma camada de identidade verificada para dentro de
interações que hoje são anônimas.

**Por que agora e não há cinco anos.** Porque em 2021 não havia nem sentença nem lei. O que
mudou é jurídico, não técnico: um litígio de 52 estados chegando a acordo em agosto de 2026 [5],
e uma lei brasileira em vigor desde março de 2026 com fiscal e multa definidos [14].

**O que falta para se concretizar.** Falta que sobreviva. Trinta por cento do pagamento é
condicional à adesão de YouTube e TikTok, e a Meta garantiu o limite de tempo por apenas cinco
anos se os concorrentes não aderirem [5] — ou seja, a própria empresa desenhou a saída. E falta
verificação de idade que funcione, que é o pré-requisito técnico de tudo e ainda não existe em
escala.

### 4.3 A fricção como gênero expressivo — emergente, com ressalva

**Ressalva declarada primeiro:** esta entra como **emergente**, não como disrupção consumada.
Ela passa no teste do "o que torna possível" e no "por que agora", mas eu não consigo nomear
uma prática estabelecida, um papel profissional ou um modelo de negócio que ela invalide hoje.
É aposta.

**O que torna possível.** Uma intervenção atencional idiossincrática, feita para uma pessoa só,
produzida numa tarde. Substituir posts sobre IA por haicais de jardim, esconder estrelas de
avaliação, deixar um site feio de propósito, exigir uma conta de matemática, mostrar quantos
quilômetros o polegar rolou, repreender em voz alta: nenhuma dessas coisas é um produto viável,
e é exatamente esse o ponto. A intervenção deixa de precisar de mercado para existir.

**Por que agora.** Porque o custo de escrever uma extensão de navegador caiu a quase zero com
geração de código por LLM, e porque há canal de distribuição social pronto (Show HN, GitHub
Topics) para artefato de autor único. O `FeurStagram`, com 906 estrelas [4], é um cliente
alternativo que remove o feed, os Reels e os anúncios do Instagram — não é um bloqueador, é uma
reescrita do produto alheio.

**O que falta.** Falta qualquer evidência de eficácia. A literatura mede atraso, mensagem de
deliberação e opção de desistir [2,3,9]; ninguém mediu vergonha, riso ou constrangimento como
mecanismo. E falta permanência: extensão de autor único morre quando a plataforma muda o DOM.

### 4.4 A fricção para agentes: o objeto migra de tempo de tela para dependência cognitiva

**O que rompe.** Todo o campo de bem-estar digital é construído sobre uma métrica: minutos de
tela por app. Um agente de IA torna essa métrica cega. O trabalho acontece com a tela apagada, e
o que se perde não é tempo — é compreensão do que foi feito em seu nome. Não há "abrir o app"
para interceptar, que é o gesto onde toda a literatura de fricção opera [2,3]. A ruptura é de
objeto de medida, não de técnica.

**O que invalida.** Invalida o tempo de tela como proxy de bem-estar digital — e com ele o
instrumento de todo o setor, das APIs de sistema operacional aos 435 repositórios do GitHub [4]
e à taxonomia de 24 recursos derivada de 367 ferramentas [10], todas ancoradas em contagem de uso
de app.

**Por que agora e não há cinco anos.** Porque há evidência empírica recente de que uso
intensivo é problema mensurável, e não retórica: o ensaio controlado randomizado do MIT Media
Lab com a OpenAI, com cerca de mil participantes ao longo de quatro semanas, associou uso diário
mais alto a mais solidão, mais dependência emocional, mais uso problemático e menos socialização,
com o padrão variando conforme o tipo de conversa [13]. E porque o uso de agente saiu do chat e
entrou no *harness* de trabalho — é ali que aparecem os primeiros ganchos de bem-estar embutidos
no fluxo de programação com agente, como os projetos `breakwatch` e `workshop-wellbeing-hooks`
levantados pela turma.

**O que falta.** Falta praticamente tudo. Falta uma métrica de delegação não compreendida que
não seja autodeclarada; falta um ponto de interceptação consensual (a abertura? a aceitação do
resultado?); e falta que a dependência cognitiva vire pauta pública, o que ainda não aconteceu.
É a disrupção mais frágil deste mapa e a que mais muda o trabalho de quem projeta interação.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A fricção materializada em objeto físico, fora do alcance do software que ela bloqueia
    efeitos:
      - id: e1
        ordem: 1
        efeito: Comprar um objeto cuja única função é impedir o uso de outro objeto vira categoria de varejo
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Fabricantes de telefone passam a vender a fricção embutida como diferencial de linha
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O modo mínimo vira item de especificação comparado em review, como câmera e bateria
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O smartphone se re-fragmenta e parte das funções migra para objetos de função única
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: A identidade digital deixa de morar no telefone e passa a morar numa camada de sincronia entre objetos
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A barreira física cria uma classe nova de falha de uso, o usuário trancado fora de algo urgente
        sinal: medio
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Normas de segurança e acessibilidade passam a exigir rota de emergência em todo dispositivo de bloqueio
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: A rota de emergência vira escape rotineiro e a eficácia da fricção física cai ao nível da do software
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: Usar menos vira serviço pago, invertendo a direção do dinheiro na economia da atenção
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Forma-se um mercado de dois lados em que a mesma empresa vende engajamento a anunciantes e calma a usuários
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Calma vira bem posicional, e quem não paga permanece exposto ao produto otimizado
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A fricção por default, imposta por sentença judicial e por lei, a quem não escolheu
    efeitos:
      - id: e4
        ordem: 1
        efeito: O tempo de sessão deixa de ser a métrica-mestra de produto para a coorte adolescente
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Times de produto adotam métricas de sessão intencional, como aberturas desistidas e retorno declarado
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A instrumentação de intenção vira dado regulado e auditável, como hoje é o consentimento de cookies
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Verificação de idade confiável vira infraestrutura obrigatória de plataforma
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: O anonimato na rede aberta encolhe como efeito colateral de uma política de bem-estar
                sinal: medio
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: A fricção default passa a ser otimizada para sobreviver ao teste jurídico, não para mudar comportamento
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Surge um gênero de fricção teatral, visível e mensurável no relatório e contornável em dois toques
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A descrença na fricção regulada reabre espaço para a intervenção de terceiro como a que é de verdade
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: A coorte adulta passa a exigir por escolha o que a adolescente recebeu por imposição
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Os controles de bem-estar saem do submenu e migram para a primeira execução do aplicativo
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: O onboarding deixa de ser tutorial de recursos e vira negociação de limites
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: A fricção como gênero expressivo de autor único, escrita com LLM em vez de comprada (emergente)
    efeitos:
      - id: e7
        ordem: 1
        efeito: A intervenção atencional passa a ser escrita pelo próprio usuário em vez de comprada pronta
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: A reescrita da interface alheia vira prática corrente e o produto deixa de ter uma forma canônica
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Plataformas endurecem o cliente contra modificação e a superfície web aberta encolhe
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: Humor e constrangimento se firmam como mecanismos de intervenção comportamental testáveis
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: Métodos de avaliação de experiência passam a medir vergonha e riso como variáveis de desenho
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: O objeto do bem-estar digital migra de tempo de tela para dependência cognitiva em agentes de IA
    efeitos:
      - id: e8
        ordem: 1
        efeito: O bem-estar digital passa a se ocupar do que o usuário deixou de compreender, não do tempo que passou
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Ferramentas de trabalho com agente embutem pausas, checagens de intenção e relatórios de delegação
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: A avaliação de desempenho profissional incorpora a razão entre o que foi delegado e o que foi compreendido
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: A fricção deliberada se desloca do ponto de abertura para o ponto de aceitação da saída do agente
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: A revisão obrigatória se esvazia em ritual e passa a ser aprovada sem leitura, como o termo de uso
                sinal: medio
                prazo: 2031
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: A métrica de tempo de tela perde sentido porque o agente trabalha com a tela apagada
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: O setor de bem-estar digital perde o instrumento de medição sobre o qual foi inteiramente construído
            sinal: fraco
            prazo: 2031
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: Nasce uma métrica de carga delegada que repete os mesmos problemas de proxy que o tempo de tela teve
                sinal: fraco
                prazo: 2033
                confianca: baixa
```

### O que o bloco não diz

**As quatro disrupções não são independentes, e o bloco as apresenta como se fossem.** É a
limitação estrutural do formato de roda, e vale nomeá-la explicitamente. `e3` (calma como
serviço pago) e `e4` (morte do tempo de sessão como métrica) se reforçam: a plataforma
obrigada a limitar adolescentes de graça tem incentivo direto para vender o mesmo limite a
adultos. E `e5` (fricção teatral) é praticamente a negação de `e4.1` (métricas de intenção
adotadas de verdade) — as duas estão na roda porque as duas têm sustentação, e o resultado
real depende de qual chega primeiro ao time de produto. Se houvesse uma matriz de impacto
cruzado aqui, `e5` teria probabilidade condicional alta dado `e4`, e isso não cabe na árvore.

**Os prazos são o campo mais fraco do bloco.** Eles foram atribuídos por analogia com a
velocidade de adoção de coisas parecidas, não por dado. O único prazo que tem chão duro é o de
`e4`, porque o acordo da Meta tem data de implementação e o ECA Digital já está em vigor [5,14].
Todos os outros são estimativa.

**Nenhum efeito deste mapa é de fricção estrutural ou normativa.** A roda inteira deriva de
intervenções que agem sobre um indivíduo — porque é isso que existe no mercado e é isso que a
varredura levantou. A taxonomia de Garland e colegas mostra que há dois terços do espaço de
desenho fora daqui [7], e esse vazio é um achado do mapa, não um descuido dele.

**`confianca` mede convicção, não probabilidade.** Um efeito com confiança alta e sinal fraco
(nenhum aqui) seria contraditório; um com sinal forte e confiança alta, como `e1` e `e4`, está
essencialmente descrevendo o presente com data futura — o que é precisamente a crítica da
Seção 7.

## 6. Sinais fracos e wildcards

**A fricção que não é sobre quem usa.** O caso do Nextdoor em 2016 — exigir descrição de
comportamento em vez de aparência, com queda de 75% no perfilamento racial e alta de 50% no
abandono do formulário [7] — é a única evidência forte deste levantamento de uma fricção que
protege *terceiros*, não o próprio usuário. Se esse enquadramento pegar, o bem-estar digital
deixa de ser um tema de saúde individual e vira tema de dano coletivo, com uma base jurídica
inteiramente diferente. Hoje quase nada do que se constrói tem essa forma.

**A fricção estrutural, de rede.** Limite de encaminhamento, teto de tamanho de grupo, alcance
reduzido ou atrasado [7]. É a categoria com melhor histórico real de eficácia em escala — o
limite de encaminhamento do WhatsApp é o exemplo vivo — e é a que menos aparece no mercado de
bem-estar digital, porque não é vendável como produto ao usuário final: só a plataforma pode
implementá-la.

**A fricção como script de sistema operacional, sem app.** Um estudo de 2026 sobre automação em
nível de SO relata que 18 dos 24 recursos de desenho da taxonomia de autocontrole digital podem
ser operacionalizados apenas com iOS Shortcuts, sem software externo (não consegui abrir o
artigo diretamente — ver Seção 12). Se isso se confirmar, a camada de aplicativo de bem-estar
digital fica redundante por baixo, do mesmo jeito que o bloqueador virou commodity por cima.

**A intervenção que só pergunta.** O WellScreen não bloqueia nada: pede uma estimativa antes de
mostrar o dado, e mesmo assim produziu melhora de afeto positivo em duas semanas com 25
participantes [9]. Se a estimativa sozinha funcionar, todo o aparato de bloqueio pode ser
excesso de engenharia.

**Wildcard — uma plataforma grande adota fricção deliberada por default e ganha usuários com
isso.** Impacto altíssimo: viraria de cabeça para baixo a premissa de que engajamento e receita
são a mesma coisa, e tornaria irrelevante metade deste mapa, porque a fricção deixaria de ser
contracorrente. **Por que a probabilidade é baixa:** a única grande plataforma que adotou
fricção por default em 2026 o fez sob acordo de US$ 18 bilhões, condicionou 30% do pagamento à
adesão dos concorrentes e garantiu os recursos por apenas cinco anos caso eles não adiram [5].
Isso é o comportamento de quem trata a fricção como passivo a ser amortizado, não como
proposta de valor. Enquanto o preço do anúncio for função do tempo de exposição, adotar
fricção voluntariamente é destruir receita antes de saber se o usuário paga pela alternativa.

**Wildcard — a primeira sentença por dano decorrente de dependência de agente de IA.** Baixa
probabilidade até 2031 porque não existe nexo causal estabelecido nem métrica aceita de
dependência cognitiva; a evidência mais forte hoje é correlacional e de quatro semanas [13].
Alto impacto porque repetiria, para agentes, exatamente o caminho que levou a fricção às
plataformas sociais — e o caminho levou cerca de doze anos.

**Wildcard — o retrocesso regulatório.** Se a verificação de idade obrigatória produzir um
vazamento de identidade em escala, o ECA Digital e seus equivalentes podem ser revertidos, e
com eles toda a disrupção 4.2. Baixa probabilidade porque a ANPD tem poder de multa e a
política tem apoio público amplo; alto impacto porque derrubaria o único ramo do mapa que hoje
tem data marcada.

## 7. Contra o próprio mapa

**1. O efeito que é só extrapolação linear do presente: `e1`.** "Comprar um objeto cuja única
função é impedir o uso de outro objeto vira categoria de varejo" não descreve uma mudança de
natureza — descreve mais lojas vendendo o que já se vende. O Light Phone entrega aparelho desde
2017 [6]; o Daylight vendeu cinco mil unidades [11]; o Brick custa US$ 59 e já é resenhado pela
NBC [12]. Chamar isso de efeito futuro com sinal forte e confiança alta é quase trapaça: eu
datei o presente em 2027. A pergunta que importaria — e que o mapa não responde — é se existe
alguma escala em que essa categoria deixa de ser nicho, e nove anos de Light Phone sugerem que
não. Mantive `e1` na roda porque `e1.1` e `e1.2` dependem dele, mas ele deveria ser lido como
premissa, não como previsão.

**2. O efeito com velocidade de adoção sem caso comparável: `e4.2`.** "Verificação de idade
confiável vira infraestrutura obrigatória de plataforma" em 2028 assume dois anos entre
obrigação legal e infraestrutura funcionando. O caso comparável é o consentimento de cookies do
GDPR: a obrigação vale desde maio de 2018 e, oito anos depois, a implementação dominante é um
banner desenhado para ser aceito sem leitura, sem interoperabilidade entre sites e com
fiscalização esparsa. Se a coisa mais simples — um botão de sim ou não — levou oito anos para
não funcionar direito, verificação de idade que precisa de documento, biometria ou terceiro de
confiança, sem vazar identidade, em jurisdições diferentes, não fica pronta em dois. `e4.2`
deveria estar em 2031, e `e4.2.1` ficaria fora do horizonte deste mapa.

**3. A disrupção que pode simplesmente não se concretizar: a 4.4, a fricção para agentes.** Ela
depende de uma premissa que ainda não se realizou: que a dependência cognitiva em relação a
agentes vire problema público reconhecido. A alternativa perfeitamente plausível é que o agente
seja absorvido como a planilha foi — ninguém mede "tempo excessivo de Excel", ninguém propõe
fricção para fórmula, e a delegação de cálculo deixou de ser assunto em uma geração. A evidência
que tenho é correlacional, de quatro semanas, e sobre chatbot conversacional, não sobre agente
de trabalho [13]. **Se essa disrupção cair**, somem `e8`, `e9` e os seis efeitos derivados deles —
oito dos 35 efeitos do mapa — e sobra um mapa competente e convencional sobre tela, hardware e
regulação, que é exatamente o mapa que a disciplina já teria sem mim. Ou seja: o ramo mais
frágil é também o único que justifica este documento existir.

**4. O viés que entrou, e onde exatamente.** O corpus que originou o recorte é uma varredura de
GitHub e Show HN — artefatos feitos por gente que escreve código, para gente que escreve
código. Isso inflou `e7` de forma específica: "a intervenção atencional passa a ser escrita pelo
próprio usuário" é verdade para uma fração minúscula da população e foi lançada na roda como
tendência de público, com sinal médio. Para quem não programa, essa disrupção não existe — e
LLM escrevendo a extensão não resolve, porque ainda é preciso saber que se pode fazer isso, e
carregar a extensão, e mantê-la viva quando a plataforma muda. O mesmo viés inflou 4.1: hardware
indie é fotogênico, rende Show HN e rende review, e por isso parece maior do que é. Há um
segundo viés, geográfico, que declaro por dever: o recorte é global, mas a evidência de 2026 é
quase toda americana e europeia, e US$ 59 de Brick num país que lidera o tempo de tela mundial
com 9h32 [8] e renda mediana baixa não é o mesmo produto. A nota sobre o Brasil deste mapa está
ancorada em lei [14] e num número de 2023 de metodologia comercial [8] — que é pouco.

**5. Um viés meu de método, que o formato não pede mas convém registrar.** Classifiquei 4.4
como disrupção-raiz e 4.3 como emergente, e a fronteira entre as duas foi decidida por uma
pergunta só: consigo nomear o que isso invalida. Para 4.4 nomeei "o tempo de tela como
instrumento"; para 4.3 não consegui nomear nada. Mas "invalidar uma métrica" é um critério
mais frouxo do que "invalidar um modelo de negócio", e um avaliador mais rigoroso do que eu
classificaria 4.4 como emergente também — o que deixaria este mapa com duas disrupções-raiz, e
não quatro.

## 8. O que a máquina errou

**1. Números de um estudo que ela não conseguiu abrir, apresentados como se tivesse aberto.**
O artigo do PNAS sobre o `one sec` é a evidência central da Seção 3, e as duas tentativas de
acesso (o DOI na PNAS e o registro no PubMed) devolveram 403 e bloqueio por cookie. Os números
— 280 participantes, seis semanas, 36% de abandono, 37% de redução — vieram de descrição em
resultado de busca, não do artigo. A primeira redação da Seção 3 os trazia sem ressalva, como
se fossem leitura direta. **Como percebi:** conferindo a lista de fontes contra a lista de URLs
que de fato responderam, e vendo que a fonte dos números não estava entre elas. Corrigi
atribuindo-os à página de pesquisa do próprio app [2], que é parte interessada, e declarando a
limitação no corpo do texto. É exatamente o erro que o `DUVIDAS.md` já registra em outra forma:
aceitar estatística de quem tem interesse no resultado.

**2. Uma revisão acadêmica citada com autoria e conclusão que eu não verifiquei.** Em uma
passagem intermediária, a revisão narrativa de Cambridge (Yap, Fokas, Ferguson e Orben,
dez/2025) apareceu sustentando a afirmação de que a evidência de eficácia das intervenções é
fraca. Eu não abri esse artigo — o PDF relacionado de Skeggs e Orben retornou binário ilegível,
e a busca por ele devolveu outros trabalhos do mesmo grupo, não aquele. A conclusão atribuída
era plausível e provavelmente correta, e é isso que a torna perigosa. **Como percebi:** ao notar
que a única evidência da existência daquele artigo era a lista de publicações mantida pela
empresa cujo produto ele avalia [2]. Removi a afirmação; o artigo aparece agora apenas como item
dessa lista, sem que eu diga o que ele conclui.

**3. Fusão de duas coisas diferentes sob o rótulo "fricção".** Nas primeiras passagens, a
fricção de bem-estar (atraso antes de abrir o Instagram) e a fricção de integridade
informacional (aviso de acurácia antes de compartilhar, limite de encaminhamento) entraram como
o mesmo fenômeno em escalas diferentes. São mecanismos com objetivos opostos: uma protege quem
usa, a outra protege quem recebe. **Como percebi:** ao ler a taxonomia de três tipos do artigo
da npj Complexity [7] e ver que o caso do Nextdoor, que eu estava usando para argumentar sobre
bem-estar individual, é um caso de dano a terceiros. Separei: o caso foi para a Seção 6, como
sinal fraco, que é onde ele de fato pertence.

**4. Uma disrupção-raiz que não passava no próprio teste da skill.** A quarta candidata original
era "o dumbphone como categoria de mercado". Ela falha na primeira pergunta: telefone com menos
função existe desde sempre, e o Light Phone desde 2017 [6] — não torna possível nada que antes
não era. **Como percebi:** aplicando a pergunta 1 por escrito em vez de pular para o veredito,
que é o passo que a skill obriga exatamente por isso. Virou parte do estado atual na Seção 3.

**Uma nota de desconfiança.** Nenhum desses quatro foi pego por uma verificação automática —
todos vieram de conferir fonte contra afirmação, à mão. A checagem de estrutura que a skill
prescreve (12 seções, YAML válido, campos do frontmatter) passaria com os quatro erros
intactos, porque ela verifica forma e não verdade. Assumo que há erros restantes neste documento
do mesmo tipo, não pegos.

## 9. Três cenários para 2031

**Provável.** Em 2031 a fricção é padrão regulado e produto de nicho ao mesmo tempo, e as duas
coisas quase não se tocam. Toda plataforma grande entrega limite diário, bloqueio noturno e
aviso de pausa para menores, porque a lei exige em quase toda jurisdição relevante — e entrega
no formato mínimo que sobrevive a uma auditoria: visível no relatório, contornável em dois
toques, desenhado por um time de conformidade e não por um de produto. O adulto que quer de
verdade continua comprando fora: um disco de NFC, uma capa, um segundo aparelho, ou pagando
assinatura de um "modo calmo" que a própria plataforma vende. Tempo de tela ainda é a métrica
oficial, e já não mede nada de útil, porque uma parte crescente do trabalho e do consumo passa
por agentes com a tela apagada. Quem projeta interação convive com duas listas de requisito que
se contradizem — a de engajamento e a de conformidade — e resolve a contradição no nível do
pixel, caso a caso, sem que ninguém decida a questão de fundo.

**Desejável.** Em 2031 a métrica mudou, e foi isso que mudou tudo o resto. Times de produto
reportam sessão intencional — quantas aberturas terminaram em desistência, quanto do uso foi
declarado antes de acontecer — ao lado de tempo de sessão, porque a regulação passou a exigir
métrica de intenção em vez de exigir limite de minutos, e porque a literatura mostrou que a
opção de desistir importa mais que o atraso. A fricção estrutural saiu do papel: limites de
alcance e de encaminhamento são desenho normal de plataforma, e não medida de crise. Ferramentas
de trabalho com agente trazem, por padrão, um relatório do que foi delegado e não compreendido —
não para culpar ninguém, mas porque virou requisito de auditabilidade. **O que teria de ser
feito para chegar lá:** produzir, até 2028, evidência longitudinal pública de que a métrica de
intenção prevê bem-estar melhor que a de minutos, e ter alguém disposto a escrever isso em uma
norma — porque nenhuma plataforma adota voluntariamente uma métrica que a faz parecer pior.

**Indesejável.** Em 2031 calma é bem posicional. Quem pode pagar comprou o aparelho secundário,
a assinatura do modo sem algoritmo, a escola sem telas e a semana de retiro sem sinal; quem não
pode ficou com a versão gratuita, que é a otimizada. A verificação de idade obrigatória se
consolidou como camada de identidade em toda interação e o anonimato na rede aberta encolheu,
com o argumento do bem-estar servindo de justificativa para uma infraestrutura que ninguém teria
aprovado se apresentada pelo que é. E a fricção, tendo virado obrigação legal medida em minutos,
foi implementada como teatro, desmoralizada por isso, e passou a ser citada como prova de que
intervenção não funciona — fechando a porta pela qual teria de entrar a intervenção que funciona.
**O sinal precoce disto, hoje:** a cláusula de cinco anos no acordo da Meta [5]. Uma empresa que
condiciona a permanência de uma proteção à adesão dos concorrentes está declarando, por escrito
e em juízo, que a trata como custo competitivo. Se, até 2028, os recursos de bem-estar
continuarem aparecendo em acordos judiciais e nunca em anúncio de produto, o cenário está em
curso.

## 10. O experimento

**Portão de intenção no harness do agente**

**O que é.** Um gancho instalado no ponto em que o agente de IA entrega um resultado para ser
aceito — o momento de aprovar um diff, um texto, uma alteração. Antes de permitir a aceitação, o
portão pede que a pessoa escreva, em uma frase, o que aquilo faz. Um segundo modelo compara a
frase escrita com o que o artefato de fato faz e devolve um veredito de três estados: descreve,
descreve parcialmente, não descreve. O portão **não bloqueia** — registra. A saída do
instrumento é uma série temporal de uma única variável: a proporção de entregas aceitas sem
compreensão declarada correta, que chamo de taxa de delegação opaca.

**Que pergunta sobre o futuro ele ajuda a responder.** Duas, ligadas. A primeira é a pergunta
de 3ª ordem deste mapa: como se desenha fricção para uma ferramenta que faz o trabalho por
você? A hipótese embutida é que o ponto de interceptação muda — não é a abertura, é a aceitação
(`e8.2`). A segunda é a pergunta que decide se a disrupção 4.4 é real: existe alguma coisa
mensurável chamada dependência cognitiva, ou isso é retórica? Se a taxa de delegação opaca for
estável e alta desde o primeiro dia, não há fenômeno novo — há só gente usando ferramenta. Se
ela **subir com o tempo de uso**, há.

**Que tecnologia emergente usa, e por que não dá com tecnologia madura.** Usa duas coisas que
não existiam de forma acessível antes de 2025: ganchos programáveis no *harness* de um agente de
trabalho, que permitem interromper o ciclo num ponto arbitrário (é a mesma superfície técnica
dos projetos `breakwatch` e `workshop-wellbeing-hooks` levantados pela turma), e um LLM como
avaliador semântico da distância entre uma descrição em linguagem natural e um artefato. Com
tecnologia madura isso é impossível, não é só mais trabalhoso: bloqueador de app não tem app
para bloquear, contador de tempo de tela conta uma tela que está apagada durante boa parte do
trabalho do agente, e comparar "o que você disse que isso faz" com "o que isso faz" não é uma
operação que exista sem um modelo de linguagem. A parte madura do experimento — registrar
evento, desenhar série temporal — é justamente a que não responde nada.

**O que a turma faz quando testar isso em sala.** Cada pessoa instala o portão no seu próprio
harness e trabalha normalmente por duas semanas, na sua tarefa real, sem meta de melhora e sem
ninguém vendo os dados de ninguém. Em sala, comparamos apenas três coisas por pessoa: a curva da
taxa de delegação opaca ao longo dos dias, o tempo médio gasto escrevendo a frase (a medida do
custo da fricção), e uma pergunta aberta de encerramento — em que momento você começou a
escrever a frase para passar do portão em vez de para entender? Esse último ponto é o achado
que interessa, e é o mesmo mecanismo de `e8.2.1`: a data em que o ritual se esvaziou. Uma
segunda rodada, com metade da turma usando um portão que só pede a frase e a outra metade
usando um que mostra o veredito do avaliador, separa se o efeito vem de escrever ou de ser
corrigido — que é a mesma distinção que a literatura de fricção encontrou entre o atraso e a
opção de desistir.

**O que me faria mudar de ideia sobre o mapa.** Três resultados, cada um derrubando uma parte
diferente. **Se a taxa de delegação opaca for plana**, ao longo das duas semanas e entre pessoas
com muito e pouco uso de agente, não há fenômeno novo: a disrupção 4.4 cai, `e8` e `e9` saem da
roda, e este mapa vira um documento sobre tela e regulação. **Se o tempo médio de escrita cair
rápido e o veredito continuar positivo**, a fricção foi absorvida como habilidade e não como
custo — o que enfraquece a premissa geral do mapa de que fricção e uso são forças opostas, e
sugere que a boa fricção desaparece ao ser aprendida, o que nenhuma parte deste documento
considera. E **se as pessoas simplesmente desinstalarem o portão na primeira semana**, o mapa
está certo no diagnóstico e errado no remédio: confirma que só a barreira que o usuário não
controla funciona (disrupção 4.1), e implica que fricção para agente não vai vir de gancho
voluntário — vai ter de vir de fora, como veio para as plataformas, por sentença.

## 11. Fontes

1. **Aperture — Special Projects** · `https://specialprojects.studio/project/aperture/` ·
   Sustenta a descrição do Aperture na Seção 3 e a tese de que a fricção pode residir na forma
   física (disrupção 4.1): capa que, virada, expõe apenas uma pequena janela da tela, com
   interface adaptativa e comando de voz; em transição de conceito para protótipo; finalista do
   Fast Company 2025 Innovation by Design em Design Experimental e Conceitual. *Confiabilidade:*
   é a página do próprio estúdio, portanto autoritativa quanto ao que o objeto é e promocional
   quanto ao que ele resolve — nenhuma alegação de eficácia daqui foi usada.

2. **Research — one sec** · `https://one-sec.app/research/` · Sustenta a lista de estudos
   revisados por pares sobre fricção em software (PNAS 2023; CHI 2024; Autoridade Dinamarquesa de
   Concorrência e Consumo 2025; revisão de Cambridge, dez/2025) e a afirmação de que a opção de
   desistir pesa mais que o atraso. *Confiabilidade:* parte interessada — é a página do produto
   avaliado. Os artigos existem e são verificáveis pelos identificadores; a **seleção** do que
   listar e a ênfase são promocionais. A alegação de "57% de redução" que a página faz **não** foi
   usada neste documento, por não vir acompanhada de estudo identificado.

3. **State Your Intention to Steer Your Attention** · `https://arxiv.org/abs/2510.14513` ·
   Sustenta, na Seção 3, o estado da fricção pilotada por LLM: assistente que lê capturas de
   tela, títulos e URLs contra uma intenção declarada; estudo de campo within-subjects de três
   semanas, 22 participantes, contra sistema de regras e controle passivo. *Confiabilidade:*
   preprint no arXiv, sem revisão por pares confirmada; N pequeno e duração curta. Usado como
   sinal de direção de pesquisa, nunca como evidência de eficácia.

4. **GitHub Topics: digital-wellbeing** · `https://github.com/topics/digital-wellbeing` ·
   Sustenta a afirmação de saturação e commoditização do bloqueador: 435 repositórios públicos;
   Olauncher (3,8 mil estrelas), curbox-android (1,3 mil), FeurStagram (906), Zenith (454), Reef
   (343). *Confiabilidade:* dado primário e verificável, mas estrela mede atenção e não uso; a
   contagem é um retrato de 17/09/2026.

5. **Unprecedented teen protections on Instagram see $18B lawsuit settled — 9to5Mac,
   27/08/2026** · `https://9to5mac.com/2026/08/27/unprecedented-teen-protections-on-instagram-see-18b-lawsuit-settled/`
   · Sustenta a disrupção 4.2 inteira e o sinal precoce do cenário indesejável: US$ 18 bilhões, 52
   estados e territórios, limite padrão de duas horas removível só por responsável, bloqueio de
   0h às 6h, silêncio de notificação das 8h às 15h, aviso a cada 15 minutos, feed não algorítmico
   como padrão, curtidas ocultas; 30% do valor condicionado a YouTube e TikTok adotarem limite de
   uma hora, modo noturno e verificação de idade; garantia de cinco anos caso não adiram.
   *Confiabilidade:* imprensa especializada relatando documento judicial público — os termos são
   verificáveis na íntegra do acordo, que não consultei diretamente. Números conferem com outras
   coberturas independentes vistas na busca.

6. **Light Phone — Wikipédia** · `https://en.wikipedia.org/wiki/Light_Phone` · Sustenta a
   cronologia do hardware minimalista e o argumento, na Seção 7, de que ele é nicho há nove anos:
   fundação em 2014; primeiro aparelho entregue em 2017 com US$ 415.127 de 3.187 apoiadores; Light
   Phone II em 2019 com US$ 3.513.838 de 10.732 apoiadores; Light Phone III em 27/03/2025; Light
   Flip previsto para abril de 2027. *Confiabilidade:* enciclopédia colaborativa; as cifras de
   financiamento coletivo são rastreáveis à plataforma de origem. Não há número de vendas
   auditado — e essa ausência é, ela mesma, informação.

7. **The case against efficiency: friction in social media — Garland et al., npj Complexity,
   22/01/2026** · `https://pmc.ncbi.nlm.nih.gov/articles/PMC12827046/` · A fonte teórica mais
   importante deste mapa. Sustenta a taxonomia de fricção cognitiva, estrutural e normativa
   (Seções 5 e 6), o caso do Nextdoor (queda de 75% em perfilamento racial, alta de 50% em
   abandono de formulário) e os limites declarados: efeito individual não escala para a
   plataforma, fricção demais inutiliza o produto, curto e longo prazo divergem, nível ótimo é
   descrito como intratável. *Confiabilidade:* artigo revisado por pares em periódico do
   portfólio Nature, com limitações explicitadas pelos próprios autores — o padrão mais alto
   deste levantamento. É artigo de posição e revisão, não estudo empírico original.

8. **Brasil é o 2º no mundo em tempo de tela: 9h32 por dia — Abranet** ·
   `https://www.abranet.org.br/noticias/brasil-e-o-2-no-mundo-em-tempo-de-tela-9h32-por-dia/` ·
   Sustenta a nota sobre o Brasil na Seção 3 e a ressalva de renda na Seção 7: 9h32 diários,
   segundo lugar entre 25 países, atrás da África do Sul (9h38); 8,4 plataformas sociais por mês;
   84,3% de penetração de internet. *Confiabilidade:* **a mais fraca da lista.** É associação
   setorial reportando levantamento de uma empresa comercial (Proxyrack) sobre o relatório Digital
   2023 da We Are Social/Meltwater — três camadas de intermediação, metodologia não publicada, e
   dado de 2023 usado num mapa de 2026. Usado apenas para ordem de grandeza, e declarado como tal
   no corpo do texto.

9. **"In my defense, only three hours on Instagram": Designing Toward Digital Self-Awareness and
   Wellbeing** · `https://arxiv.org/abs/2509.21860` · Sustenta o sinal fraco da intervenção que não
   bloqueia (Seção 6): ferramenta WellScreen, duas semanas, 25 universitários, subestimação
   sistemática de uso de produtividade e redes sociais, superestimação de entretenimento, melhora
   de 10% em afeto positivo. *Confiabilidade:* preprint, estudo formativo declarado, N pequeno, sem
   grupo de controle aparente. A melhora de 10% é indicativa e não deve ser lida como efeito
   estabelecido.

10. **Self-Control in Cyberspace: Applying Dual Systems Theory to a Review of Digital Self-Control
    Tools — Lyngs et al.** · `https://arxiv.org/abs/1902.00157` · Sustenta a afirmação de que o
    campo tem inventário completo e mecanismo pouco explorado (Seção 3): 367 apps e extensões
    catalogados nas lojas do Google Play, Chrome Web e Apple, organizados por um modelo dual de
    autorregulação; os autores apontam mecanismos cognitivos subexplorados e compreensão limitada
    do que de fato sustenta o autocontrole. *Confiabilidade:* trabalho de referência do campo,
    publicado em CHI; a data (2019) é a limitação — o catálogo envelheceu, a taxonomia não.

11. **Daylight Computer Co. — Wikipédia** · `https://en.wikipedia.org/wiki/Daylight_Computer_Co.`
    · Sustenta o caso do hardware de atenção como nicho com demanda real (Seção 3): tablet DC-1
    com tela transflectiva monocromática, retroiluminação âmbar, sem luz azul, 1,2 kg, SolOS sobre
    Android 13, 60 Hz; primeiro lote de cinco mil unidades esgotado em 2024. *Confiabilidade:*
    enciclopédia colaborativa; o número de cinco mil unidades vem da empresa e não é auditado.

12. **We finally tried the screen time blocking app Brick — NBC Select** ·
    `https://www.nbcnews.com/select/shopping/brick-phone-app-blocker-review-rcna259740` ·
    Sustenta a descrição do Brick e a tese do compromisso físico (disrupção 4.1): disco magnético
    com NFC, US$ 59, sem bateria nem assinatura, compartilhável entre telefones da casa, até dez
    modos automáticos; teste por cinco editores durante duas semanas, com relato de que a barreira
    física é mais difícil de contornar que um limite em software. *Confiabilidade:* resenha de
    consumo com link de afiliado, amostra de cinco pessoas, sem controle — é relato de experiência,
    não evidência. Usado para preço e mecanismo, não para eficácia.

13. **Study finds extensive AI chatbot use can deepen feelings of loneliness — MIT Media Lab** ·
    `https://www.media.mit.edu/articles/study-finds-extensive-ai-chatbot-use-can-deepen-feelings-of-loneliness/`
    · Sustenta o "por que agora" da disrupção 4.4 e a ressalva da Seção 7: colaboração MIT Media
    Lab e OpenAI, março de 2025; uso mais intenso associado a mais solidão e menos tempo de
    socialização. *Confiabilidade:* comunicação institucional sobre pesquisa própria, em
    colaboração com a empresa cujo produto foi estudado. **A página não trouxe N nem duração** — os
    números que circulam (cerca de mil participantes, quatro semanas) vieram de resultado de busca
    e estão declarados como tal no corpo do texto. Achado correlacional; a própria página diz que a
    resposta "é complicada".

14. **ECA Digital: o que muda para crianças e adolescentes — Fundação Abrinq / FADC** ·
    `https://www.fadc.org.br/noticias/eca-digital-o-que-muda` · Sustenta a nota sobre o Brasil e a
    disrupção 4.2 no recorte nacional: Lei 15.211/2025 exigindo verificação técnica confiável de
    faixa etária em vez de autodeclaração, vinculação de conta de menor de 16 a responsável,
    privacidade no máximo por padrão, ferramentas de acompanhamento de tempo e gastos, proibição de
    caixas de recompensa para menores, remoção de conteúdo de risco em 24 horas, ANPD como fiscal e
    multa de até 10% do faturamento no Brasil limitada a R$ 50 milhões por infração.
    *Confiabilidade:* organização da sociedade civil interpretando texto legal — a lei é a fonte
    primária e é pública; a leitura é de quem defende a política. A data de vigência (17/03/2026)
    foi corroborada por outro resultado de busca, não por leitura do Diário Oficial.

## 12. Anexo — o levantamento bruto

### 12.1 Etapa 1 — entrevista, respostas recebidas

Rodada automatizada, sem usuário disponível. As respostas aos itens obrigatórios foram
fornecidas junto com o pedido:

- Horizonte (obrigatório): 2031.
- Público: quem projeta mídia e interação.
- Recorte geográfico (obrigatório): global, com uma nota sobre o Brasil.
- Já descartado (obrigatório): o que já é comum em produto de massa — a régua da disciplina.
  Nenhuma outra exclusão. Confirmação explícita registrada: "nenhuma outra exclusão".
- Viés desejado (obrigatório): neutro.
- Zona de interesse: Pessoas e dados.
- Extras fornecidos: disrupção suspeita — nenhuma, descobrir; ideias óbvias a excluir — as que
  servem para qualquer tema; profundidade — três ordens; modo — a partir de uma inovação/tema,
  não de um setor; o que faria o autor mudar de ideia — evidência de que a adoção já passou da
  maioria inicial (Rogers), ou de que a tecnologia não rompe nada.

Condição de parada da Etapa 1: satisfeita, os quatro itens obrigatórios têm resposta clara.
**Desvio declarado:** a skill trata a Etapa 1 como bloqueante e prevê repergunta; nesta rodada
não havia interlocutor, e as respostas vieram pré-fornecidas. Nenhum item obrigatório foi
assumido pela máquina.

### 12.2 Etapa 2 — buscas realizadas, uma a uma

Buscas (WebSearch):

1. `friction design digital wellbeing 2026 intentional friction apps research` — produtiva.
   Devolveu o estudo longitudinal do CHI 2024, o artigo da npj Complexity, o preprint do
   assistente de intenção e o WellScreen.
2. `Special Projects Aperture phone case camera privacy Paper Phone` — produtiva. Confirmou
   Aperture, Paper Phone e Envelope.
3. `Light Phone III sales dumbphone market growth 2026 minimalist phone` — **parcialmente
   descartada.** Devolveu quase só conteúdo de afiliado ("os 5 melhores dumbphones de 2026") e
   uma alegação de "alta de quase 150% nas vendas para jovens adultos" sem fonte primária
   identificável. **A alegação de 150% foi descartada e não aparece no documento** — é exatamente
   o padrão de número sem metodologia descrito no `DUVIDAS.md`. Aproveitei da busca apenas o preço
   de pré-venda do Light Phone III, e mesmo esse não usei no corpo, preferindo a cronologia da
   Wikipédia.
4. `Brasil lei celular escolas 15.100 ECA digital 15.211 tempo de tela 2026` — produtiva.
   Localizou a Lei 15.100/2025, a Lei 15.211/2025, a data de vigência e a pesquisa do MEC.
5. `"one sec" app friction study Anderl Simonsson field experiment social media opens reduction`
   — produtiva, com erro meu embutido: inventei um par de sobrenomes ("Anderl Simonsson") na
   string de busca. Os autores reais são Grüning, Riedel e Lorenz-Spreen. A busca funcionou
   apesar disso, mas registro o episódio: se a busca tivesse "confirmado" a autoria inventada, eu
   teria citado dois pesquisadores inexistentes.
6. `AI chatbot overuse dependence 2026 study OpenAI MIT loneliness heavy users wellbeing` —
   produtiva. MIT Media Lab, OpenAI, e um estudo de Stanford (agosto de 2026) que **não usei** por
   não ter aberto a fonte.
7. `Instagram TikTok YouTube built-in friction 2026 teen accounts time limits "take a break"
   adoption results` — produtiva quanto ao acordo; **infrutífera quanto ao que eu queria**, que
   era dado de adoção e eficácia dos recursos existentes. Não existe dado público disso.
8. `"calm technology" OR "attention economy" hardware 2026 Brick Opal Unpluq Daylight Computer
   market digital detox` — produtiva para hardware, poluída por conteúdo de SEO ("Digital Detox
   2026: 7 passos comprovados"). Nenhum desses sites entrou nas fontes.
9. `Orben Yap 2025 "narrative review" smartphone social media interventions effectiveness screen
   time evidence weak` — **infrutífera e instrutiva.** Eu procurava confirmação de que a evidência
   de eficácia das intervenções é fraca. A busca não localizou o artigo específico e devolveu
   outros trabalhos do grupo. Consequência: a afirmação saiu do documento. Vale registrar que eu
   estava buscando confirmação de uma tese que já tinha, o que é o desenho de busca errado.
10. `Ulrik Lyngs digital self-control tools review Android intervention research 2026` —
    produtiva. Levou ao artigo de 2019 com 367 ferramentas e ao estudo de 2026 sobre automação em
    nível de SO.
11. `Brasil tempo de tela média 9 horas 2026 pesquisa Panorama Mobile Time Opinion Box bem-estar
    digital` — parcialmente produtiva. Deu o 9h32 e um dado da Bain & Company (28% dos brasileiros
    querem reduzir tempo de tela, com tempo de tela em primeiro lugar entre hábitos a mudar,
    à frente de dieta e sedentarismo) que **não usei** por não ter aberto o relatório original —
    apesar de ser, de longe, o dado mais interessante da busca para a nota sobre o Brasil.

Páginas efetivamente abertas e lidas (14, as da Seção 11), e páginas que **falharam**:

- `dl.acm.org/doi/10.1145/3613904.3642370` (CHI 2024, estudo longitudinal) — HTTP 403.
- `pnas.org/doi/10.1073/pnas.2213114120` (one sec) — HTTP 403.
- `pubmed.ncbi.nlm.nih.gov/36745809/` — bloqueio por cookie.
- `medien.ifi.lmu.de/.../haliburton2024chi.pdf` — PDF ilegível na extração (binário).
- `arxiv.org/pdf/2407.18803` (Design Frictions on Social Media) — PDF ilegível na extração.
- `en.kfst.dk/.../20250619-disrupting-social-media-habits.pdf` (autoridade dinamarquesa) — PDF
  ilegível na extração.
- `selfdeterminationtheory.org/.../2025_SkeggsOrben_SocialMedia.pdf` — PDF ilegível na extração.
- `tandfonline.com/doi/full/10.1080/0144929X.2026.2711013` (automação em nível de SO, 2026) —
  HTTP 403. **Este é o mais custoso da lista:** o dado de que 18 dos 24 recursos da taxonomia de
  Lyngs são operacionalizáveis via iOS Shortcuts está na Seção 6 declarado como não verificado
  diretamente, e ele é a base de um sinal fraco inteiro.
- `hollywoodreporter.com/.../meta-time-limits-kids-instagram-facebook...` — redirecionamento para
  domínio de paywall; substituído pela cobertura do 9to5Mac.
- `gov.br/mec/.../sancionados-decretos-que-regulamentam-o-eca-digital` — conexão encerrada pelo
  servidor (socket hang up). Substituído pela FADC, que é fonte pior: é interpretação, não texto
  oficial. Retomar por aqui numa próxima rodada.

**Padrão observado, digno de nota metodológica:** as fontes de melhor qualidade (artigo revisado
por pares, texto legal oficial) foram sistematicamente as menos acessíveis, e as piores (resenha
de afiliado, release setorial) as mais fáceis. Um levantamento que não registra isso acaba, sem
perceber, com uma bibliografia inversamente ordenada por rigor.

### 12.3 Etapa 3 — o teste de disrupção, candidato por candidato, com as reprovações

**Candidato A — acessório físico de fricção (Brick, Unpluq Tag, Aperture, caixa trancável).**
(1) Torna possível uma barreira que não está no alcance do software que ela bloqueia — o objeto
pode não estar na sala; é compromisso vinculante, não intenção renovável. **Passa.** (2) Invalida
o bloqueador-por-assinatura em software como categoria defensável, invalida a premissa de
convergência do smartphone, e ameaça o papel do designer como otimizador de funil. **Passa.**
(3) NFC passivo barato, APIs de bloqueio confiável no SO, e commoditização do bloqueador em
software (435 repos). **Passa.** → **Disrupção-raiz.**

**Candidato B — fricção por default imposta por sentença e lei.** (1) Torna possível a fricção
não-opt-in, que chega a quem não se preocupava; antes isso não existia por falta de mandato, não
por falta de técnica. **Passa.** (2) Invalida o tempo de sessão como métrica-mestra para menores,
a categoria de controle parental de terceiros, e a autodeclaração de idade. **Passa.** (3) Acordo
de 52 estados em ago/2026 e ECA Digital vigente desde mar/2026, com fiscal e multa. Em 2021 não
havia nem um nem outro. **Passa.** → **Disrupção-raiz.**

**Candidato C — fricção como gênero expressivo, de autor único.** (1) Torna possível a
intervenção idiossincrática e descartável, porque o custo de produzi-la caiu a quase zero.
**Passa, fraco.** (2) **Falha.** Não consigo nomear prática, papel ou modelo de negócio que isso
invalide. (3) Codegen por LLM e canal de distribuição social pronto. **Passa.** → **Emergente,
entra na Seção 4 com ressalva explícita.**

**Candidato D — fricção para agentes / dependência cognitiva.** (1) Torna possível medir o que se
deixou de compreender em vez do tempo que se passou; ainda é aposta. **Passa com ressalva.**
(2) Invalida o tempo de tela como instrumento de todo o setor. **Passa.** (3) RCT MIT/OpenAI e a
migração do uso de agente do chat para o harness de trabalho. **Passa.** → **Disrupção-raiz com
o rompimento ainda não consumado.** Reclassificação registrada na Seção 7, item 5: um avaliador
mais rigoroso a chamaria de emergente, e teria razão.

**Reprovados, com o motivo:**

- **Dumbphone como categoria.** Falha em (1): telefone com menos função existe desde sempre;
  Light Phone desde 2017. Melhoria de posicionamento de mercado, não ruptura. → Seção 3.
- **Bloqueador de app e contador de tempo de tela.** Falha em (1) de forma óbvia. 435
  repositórios gratuitos no GitHub. → Seção 3. É literalmente a régua da disciplina: comum em
  produto de massa.
- **Modo "não perturbe" e escala de cinza.** Falha em (1). Embutidos em todo SO desde 2018.
- **Modo foco com IA ("IA que entende o que você está fazendo").** Falha em (3): a resposta ao
  "por que agora" era "porque os modelos estão melhores", que a skill marca explicitamente como
  sintoma de melhoria incremental disfarçada de ruptura. Sobrevive como item da Seção 3, via
  fonte [3].
- **Retiro de desconexão e turismo de detox.** Falha em (1) e é serviço, não mídia nem interação.
  Fora de escopo.
- **Proibição de celular em escola.** Reprovado por outro motivo: é política pública já em
  execução (Lei 15.100/2025), não disrupção em mídia e interação. Entra como contexto na Seção 3.

### 12.4 Etapa 4 — efeitos cortados da roda, com o motivo

Cortados por falharem na regra de parada de derivação (exigiriam encadear duas ou mais
suposições independentes não testadas), ou por não terem caminho nomeável de volta à
disrupção-raiz:

- *"O smartphone deixa de existir como categoria até 2031."* — Duas suposições empilhadas
  (fragmentação bem-sucedida **e** substituto de identidade consolidado), nenhuma testada. Virou
  a versão contida `e1.2` e `e1.2.1`.
- *"Escolas sem tela viram padrão na educação privada de elite."* — Caminho de volta à
  disrupção passa por política educacional, não por design de fricção. Sobrevive como cláusula
  dentro do cenário indesejável, que é onde suposição empilhada é legítima.
- *"A economia da atenção colapsa e a publicidade muda de modelo."* — Especulação de
  especulação, e é o tipo de efeito que serve para qualquer tema — excluído pelo critério
  fornecido na Etapa 1 ("ideias óbvias a excluir: as que servem para qualquer tema").
- *"Terapia para dependência digital vira especialidade médica reconhecida."* — Plausível, mas
  o caminho de volta é por saúde pública, e o mapa não levantou evidência do lado clínico.
- *"Uma plataforma grande adota fricção por default e cresce."* — **Não cortado por implausível,
  mas realocado:** é wildcard, não efeito, porque não decorre da disrupção — decorre de uma
  decisão empresarial contra o próprio incentivo. Está na Seção 6 com a probabilidade
  justificada.
- *"Governos passam a limitar tempo de tela de adultos."* — Cortado por contrariar a evidência
  levantada: as duas peças regulatórias de 2026 [5,14] tratam exclusivamente de menores, e não há
  sinal de extensão.
- *"A fricção migra para o carro, a TV e o eletrodoméstico."* — Nenhum sinal no levantamento.
  Zero fontes. Deixado de fora inteiramente, e registrado aqui porque a ausência de sinal é
  informação: o tema está confinado a telefone e computador pessoal.

### 12.5 Etapa 5 — a contestação em forma bruta, antes de virar a Seção 7

Primeira tentativa de contestação, descartada por genérica: "o mapa pode errar nos prazos",
"adoção pode ser mais lenta que o previsto", "regulação pode mudar". A condição de parada da
Etapa 5 pegou isso: nenhum dos três aponta efeito concreto. Segunda tentativa, mantida, com o
item 5 (viés de método na classificação de 4.4) acrescentado depois, ao revisar o veredito da
Etapa 3 — não estava no plano original.

### 12.6 Etapa 8b — resultado da checagem final

Executada sobre o arquivo entregue, com os números impressos e não apenas o "passou" — que é a
lição registrada no `DUVIDAS.md`, item 3. Saída bruta:

```
FRONTMATTER faltam: nada | campos: 18
SECOES: 12
    ## 1. Resumo
    ## 2. O tema
    ## 3. Onde isso está hoje
    ## 4. As disrupções-raiz
    ## 5. A roda dos futuros
    ## 6. Sinais fracos e wildcards
    ## 7. Contra o próprio mapa
    ## 8. O que a máquina errou
    ## 9. Três cenários para 2031
    ## 10. O experimento
    ## 11. Fontes
    ## 12. Anexo — o levantamento bruto
DISRUPCOES no bloco: 4
ORDEM1: 9 (frontmatter 9 )
ORDEM2: 13 (frontmatter 13 )
ORDEM3: 13 (frontmatter 13 )
ORDEM4+: 0
ids unicos: True | nos sem sinal/prazo/confianca ou com pergunta: nenhum
confianca na 3a ordem: {'baixa': 13}
fontes numeradas na S11: 14 (frontmatter 14 )
```

Checagem 4 do formato — os 14 links da Seção 11 respondem, um por linha, código HTTP à
esquerda:

```
200 https://9to5mac.com/2026/08/27/unprecedented-teen-protections-on-instagram-see-18b-lawsuit-settled/
200 https://arxiv.org/abs/1902.00157
200 https://arxiv.org/abs/2509.21860
200 https://arxiv.org/abs/2510.14513
200 https://en.wikipedia.org/wiki/Daylight_Computer_Co.
200 https://en.wikipedia.org/wiki/Light_Phone
200 https://github.com/topics/digital-wellbeing
200 https://one-sec.app/research/
200 https://pmc.ncbi.nlm.nih.gov/articles/PMC12827046/
200 https://specialprojects.studio/project/aperture/
200 https://www.abranet.org.br/noticias/brasil-e-o-2-no-mundo-em-tempo-de-tela-9h32-por-dia/
200 https://www.fadc.org.br/noticias/eca-digital-o-que-muda
200 https://www.media.mit.edu/articles/study-finds-extensive-ai-chatbot-use-can-deepen-feelings-of-loneliness/
200 https://www.nbcnews.com/select/shopping/brick-phone-app-blocker-review-rcna259740
```

**Um erro de processo pego aqui, na linha do `DUVIDAS.md` item 3.** A primeira execução desta
checagem de links imprimiu `404` para o verbete do Daylight. O link não estava quebrado: o
comando de extração removia pontuação final da URL, e o endereço real termina em ponto
(`Daylight_Computer_Co.`). Ou seja, a ferramenta de verificação reprovou uma fonte boa por um
defeito da própria ferramenta. Conferido à mão, o endereço com o ponto responde 200. É
exatamente o mesmo padrão do bug de extração registrado no `DUVIDAS.md`: se eu tivesse lido só
o veredito, teria removido uma fonte legítima do documento.

### 12.7 Notas soltas que não couberam em nenhuma seção

- **O `FeurStagram` merece mais atenção do que o mapa lhe deu.** Com 906 estrelas [4], não é um
  bloqueador: é um cliente alternativo que remove feed, Reels e anúncios do Instagram. Isso não é
  fricção nem abstinência — é uma terceira coisa, reapropriação, e não há categoria para ela na
  taxonomia de Lyngs [10] nem na de Garland [7]. Pode ser o achado mais original do levantamento e
  está subrepresentado na roda, aparecendo só como `e7.1`.
- **Dado não usado, que eu gostaria de ter usado:** a Bain & Company teria medido que 28% dos
  brasileiros querem reduzir o tempo de tela, e que reduzir tela aparece em primeiro lugar entre
  hábitos a mudar, à frente de dieta e sedentarismo. Se verdadeiro, é o melhor argumento de
  demanda para a nota sobre o Brasil. Não abri a fonte, então não entrou. Fica marcado como
  primeira coisa a buscar numa próxima rodada.
- **Uma pergunta que o mapa não responde e deveria:** se a opção de desistir pesa mais que o
  atraso [2], por que o mercado inteiro vende atraso e bloqueio, e quase ninguém vende porta de
  saída? Não achei resposta no material levantado, e a pergunta é boa o bastante para virar tema
  de outro mapa.
- **Fronteira com o tema 19 respeitada:** companheiro digital e vínculo afetivo com IA não
  entraram, embora a fonte [13] toque no assunto. Usei dela apenas a parte de uso intensivo,
  dependência e socialização, que é o que sustenta a disrupção 4.4 — o vínculo afetivo em si é do
  vizinho.
