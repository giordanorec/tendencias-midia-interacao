---
tema: Bem-estar digital e design de fricção
slug: bem-estar-digital-e-design-de-friccao
autor_login: hfm
zona_de_interesse: Pessoas e dados
data: 2026-09-18
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 13
efeitos_ordem_3: 16
tecnologias_citadas: [rolagem infinita, autoplay, sistemas de recomendacao, NFC, tinta eletronica, launchers minimalistas Android, Screen Time, Digital Wellbeing, one sec, Brick, Bloom, Light Phone III, Aperture, Paper Phone, chatbots conversacionais, companheiros de IA, agentes de codigo]
fontes: 14
confianca: media
experimento: Banca de fricções — quatro intervenções de formatos diferentes (gesto físico, ritual impresso, humor e economia comportamental) aplicadas ao mesmo app durante uma semana pela turma, medindo intenção cumprida em vez de tempo de tela
skill_usada: futurizacao-hfm
publico_ok: false
---

## 1. Resumo

Depois de vinte anos de otimização de engajamento, a fricção deliberada deixou de ser gesto
crítico marginal e passou a ter três sustentações simultâneas: evidência experimental de que
um atraso com opção de desistir muda comportamento; um mercado de objetos baratos que
transferem a decisão do menu para o gesto físico; e, desde 2026, regulação que obriga
plataformas a desligar rolagem infinita e autoplay para menores na União Europeia e no
Brasil. O mapa deriva daí três disrupções-raiz — a fricção virando obrigação de design e não
produto de terceiros; a intervenção migrando para hardware, papel e ritual; e o deslocamento
do objeto do bem-estar digital do feed para o agente de IA, onde a dependência já é
documentada. Os efeitos de primeira ordem são razoavelmente firmes até 2028; os de terceira
ordem são hipóteses de baixa confiança, e estão marcados como tais. O que este mapa não
sustenta é eficácia clínica de nenhuma dessas intervenções: existência de ferramenta e
redução de aberturas de app não são tratamento, e a separação é mantida em todo o documento.

## 2. O tema

Bem-estar digital, aqui, é o conjunto de decisões de projeto que tratam o próprio uso como
algo a ser reduzido, interrompido ou tornado consciente. Design de fricção é a técnica
central: introduzir um custo pequeno e deliberado — espera, gesto, feiura, cálculo, pergunta
— entre o impulso e a ação, para que a ação deixe de ser automática.

O tema encosta em mídia e interação no ponto mais sensível da disciplina: a interface. Tudo o
que o campo aprendeu a chamar de boa prática — reduzir passos, antecipar a intenção, eliminar
espera — é exatamente o que essas intervenções desfazem de propósito. Não é um nicho de
aplicativo de produtividade; é uma inversão do critério de qualidade da interação.

Merece mapa de futuro, e não levantamento de estado da arte, por uma razão específica: o
objeto mudou de lugar duas vezes em pouco tempo. Saiu do aplicativo bloqueador (hoje
commodity, e por saturação pouco eficaz) para o objeto físico e o ritual; e começa a sair do
feed para o agente de IA, onde a pergunta "como se desenha fricção para uma ferramenta que
faz o trabalho por você" ainda não tem resposta de projeto. Ao mesmo tempo, o que era escolha
estética de estúdio virou, em 2026, exigência legal em dois blocos regulatórios. Uma
fotografia do presente perde justamente o que interessa: para onde a intervenção está
migrando.

## 3. Onde isso está hoje

### O que já existe e funciona

**Fricção como micro-intervenção tem evidência de comportamento.** O app *one sec* interpõe
uma espera curta com mensagem de deliberação e a opção de desistir antes de abrir o app-alvo.
Segundo a página de pesquisa do próprio produto, o estudo publicado na PNAS em fevereiro de
2023 (Grüning, Riedel e Lorenz-Spreen) reporta redução de 57% nas aberturas efetivas dos apps
selecionados após seis semanas [12]. O mesmo grupo aparece em um estudo longitudinal
apresentado no CHI 2024 sobre fricções de design contra uso excessivo. Vale registrar o que
esses números *são*: comportamento de abertura de aplicativo, medido em usuários que
instalaram voluntariamente uma ferramenta — não são medida de saúde, atenção ou concentração.

**Fricção em feed melhora memória e piora satisfação.** No estudo de Ruiz, Molina León e
Heuer (2024), 30 participantes usaram uma interface que exigia reagir a cada post para
carregar o próximo, contra rolagem infinita. A recordação do conteúdo foi significativamente
melhor na condição com fricção, e a maioria achou a interface frustrante [10]. Esse é o
achado mais útil do campo: a fricção funciona e incomoda ao mesmo tempo, e é por isso que
raramente sobrevive dentro de um produto que depende de satisfação declarada.

**Bem-estar por consciência, não por bloqueio.** Um estudo aceito para o CHI 2026 descreve o
*WellScreen*, que pede ao usuário estimar o próprio tempo de uso antes de mostrar o dado
real; com 25 participantes universitários, encontrou subestimação sistemática de produtividade
e redes sociais e superestimação de entretenimento [11]. É amostra pequena e público estreito,
mas indica o deslocamento da métrica: de quanto tempo para quão errado é o seu modelo de si.

**O objeto físico já é mercado, não conceito.** A *Brick*, um quadrado com NFC que trava apps
até novo toque, custa cerca de US$ 59; a *Bloom*, US$ 39, vendeu mais de 60 mil unidades
segundo reportagem da Fortune de fevereiro de 2026 [6]. O *Light Phone*, telefone minimalista
de Brooklyn, chegou ao terceiro modelo (entregue em março de 2025, sem financiamento coletivo)
e tem um modelo clamshell previsto para 2027 [5]. São números pequenos diante do mercado de
celulares — e é precisamente isso que os torna interessantes: é uma categoria nova com barreira
de entrada baixa.

**A fricção mecânica virou linguagem de design.** O *Aperture*, do estúdio londrino Special
Projects (2025, finalista do Innovation by Design da Fast Company), é uma capa que esconde
quase toda a tela; a dificuldade de virar a capa é declarada pelos autores como elemento de
projeto — "essa fricção deliberada desencoraja o gesto frequente e o torna mais intencional",
diz a cofundadora Clara Gaggero Westaway [7][8]. O mesmo estúdio assina o *Paper Phone*, feito
com o Google.

**Há um ecossistema aberto e vivo.** O tópico `digital-wellbeing` no GitHub reúne 437
repositórios públicos, com launchers minimalistas (Olauncher, 3,8 mil estrelas), bloqueadores
abertos e clientes alternativos que removem feeds e reels de redes específicas [13].

### O que existe e não funciona bem

**O bem-estar digital das próprias plataformas é maduro e fraco.** As Teen Accounts do
Instagram, anunciadas em setembro de 2024, trazem lembrete de saída após 60 minutos por dia e
modo de dormir entre 22h e 7h [14]. São defaults reais — e são exatamente o tipo de
intervenção que a Comissão Europeia considerou insuficiente no caso vizinho: nos achados
preliminares contra o TikTok, os avisos de tempo de tela para usuários de 13 a 17 anos foram
descritos como facilmente dispensáveis [2].

### Quem está construindo, e a mudança de 2026

**A regulação entrou no desenho da interface.** Em 6 de fevereiro de 2026 a Comissão Europeia
concluiu, em achados preliminares, que o design do TikTok viola o DSA — rolagem infinita,
autoplay, notificações e recomendação personalizada —, exigindo mudança no desenho básico do
serviço, com multa possível de até 6% do faturamento global anual [2][1]. O enquadramento
legal usa os artigos 25 (padrões manipuladores), 28 (menores) e 34 (avaliação de risco) do
DSA, ainda que o termo "design viciante" não apareça na lei [1].

No Brasil, a Lei 15.211/2025 (ECA Digital), sancionada em setembro de 2025, passou a valer em
17 de março de 2026 e proíbe mecanismos que estimulem uso compulsivo, nomeadamente rolagem
infinita e reprodução automática, para serviços acessados por crianças e adolescentes; a
fiscalização é da ANPD, com multas de até 10% do faturamento brasileiro, limitadas a R$ 50
milhões por infração, e possibilidade de suspensão [3][4]. O ônus é invertido: a plataforma
precisa demonstrar que o sistema de recomendação não empurra o usuário para o ciclo [3].

**E o objeto começou a se deslocar para a IA.** Um estudo da Drexel apresentado em abril de
2026 analisou mais de 300 posts de usuários autoidentificados como tendo 13 a 17 anos sobre
dependência de Character.AI e identificou os seis componentes de dependência comportamental —
conflito, apego, abstinência, tolerância, recaída e modificação de humor [9]. É análise
qualitativa de discurso em fórum, não medida clínica de prevalência, e assim deve ser lida.

## 4. As disrupções-raiz

### D1 — A fricção deixa de ser produto de terceiros e vira obrigação de design da plataforma

**O que rompe.** Durante quinze anos, quem quisesse menos engajamento tinha de comprar algo
por fora: extensão, bloqueador, temporizador. A intervenção era um enxerto adversarial. Com os
achados preliminares contra o TikTok e a vigência do ECA Digital, a fricção passa a ser
requisito do próprio produto — e, mais do que isso, requisito demonstrável perante um
regulador. Muda o autor da intervenção e muda quem responde por ela.

**Por que agora e não há cinco anos.** Em 2021 havia diretrizes de design apropriado à idade e
pressão reputacional; não havia decisão administrativa que atacasse a *arquitetura* — rolagem
infinita, autoplay, recomendação — como infração, nem lei nacional que a nomeasse. Os dois
fatos são de 2026 [2][3][4].

**O que ainda falta.** Falta decisão final e sanção aplicada no caso europeu (os achados são
preliminares e o TikTok os contesta [2]); falta a ANPD definir o que exige adaptação técnica e
o que vale de imediato [3]; e falta prova de que a obrigação atravesse a fronteira dos perfis
de menores sem virar apenas um segundo regime de interface.

### D2 — A intervenção sai da tela e vira objeto, gesto e ritual

**O que rompe.** O bloqueio por software é reversível com três toques, e por isso satura. A
intervenção física é irreversível sem um gesto no mundo: tocar o NFC, virar a capa, imprimir o
papel, trancar a caixa. Isso rompe com o pressuposto de que software de bem-estar se distribui
por loja de aplicativos e se configura em menu, e devolve ao design industrial um papel que ele
tinha perdido na interação cotidiana.

**Por que agora.** Três condições coincidiram: componentes baratos (uma etiqueta NFC custa
centavos), um canal de venda direto ao consumidor que sustenta produto de US$ 39 a US$ 59 com
volume de dezenas de milhares [6], e um público que já não precisa ser convencido do problema.
Cinco anos atrás o mesmo objeto exigiria explicar por que alguém pagaria para usar menos o
telefone que acabou de comprar.

**O que ainda falta.** Falta evidência de retenção: comprar um objeto de fricção é fácil, usá-lo
no sexto mês é outra coisa, e não encontrei estudo longitudinal independente desses produtos.
Falta também saber se a categoria sobrevive quando o sistema operacional incorporar o mesmo
gesto — que é o desfecho mais provável.

### D3 — O objeto do bem-estar digital migra do feed para o agente de IA

**O que rompe.** Toda a técnica acumulada pressupõe um uso sem produto: o tempo no feed é tempo
perdido, então atrasá-lo é ganho. Com um agente que escreve, resume e executa, o uso excessivo
*entrega trabalho*. A fricção deixa de proteger o tempo e passa a ter de proteger outra coisa —
a autoria, o julgamento, a competência de quem usa. Não há repertório de projeto para isso.

**Por que agora.** A dependência relacional com sistemas conversacionais já é objeto de pesquisa
empírica com os seis marcadores de dependência comportamental identificados em população
adolescente [9], e a discussão regulatória europeia sobre proteção de menores já menciona
companheiros de IA desligados por padrão. Há dois anos era anedota; hoje é literatura em
conferência revisada e texto normativo em tramitação.

**O que ainda falta.** Falta separar, com método, três coisas hoje empilhadas: uso intenso
produtivo, uso compulsivo e sofrimento clínico. Falta também qualquer intervenção testada — as
que existem, embutidas em fluxo de trabalho com agente, são protótipos sem avaliação publicada.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A friccao deixa de ser produto de terceiros e vira obrigacao de design da plataforma
    efeitos:
      - id: e1
        ordem: 1
        efeito: Rolagem infinita e autoplay deixam de ser padrao nos produtos acessados por menores na Uniao Europeia e no Brasil
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Surge uma camada de conformidade em que a equipe de produto precisa documentar por que seu desenho nao induz uso compulsivo
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Cursos de design de interacao passam a tratar evidencia sobre padroes de atencao como entregavel de projeto
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: Auditoria independente de arquitetura de atencao se estabelece como servico, no molde da auditoria de acessibilidade
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Produtos passam a manter dois regimes de interface e a versao com friccao vira laboratorio de design da casa
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Padroes testados no regime de menores sao exportados para adultos como preferencia configuravel
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Ferramentas de terceiros que apenas bloqueiam perdem razao de existir quando o bloqueio passa a vir de fabrica
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O mercado independente se desloca do bloqueio para o formato da intervencao, em ritual, hardware, corpo e humor
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Projetar para uso menor vira genero de design com repertorio proprio, e nao correcao de defeito alheio
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Plataformas passam a vender calma como diferencial pago, em assinatura sem recomendacao algoritmica ou modo sobrio
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Atencao protegida se estratifica por renda e quem nao paga permanece no desenho mais capturante
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A intervencao sai da tela e vira objeto, gesto e ritual
    efeitos:
      - id: e3
        ordem: 1
        efeito: O gesto fisico substitui a configuracao em menu como forma de decidir o proprio uso
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Consolida-se uma categoria de acessorio de atencao vendida fora da loja de aplicativos e com economia de acessorio
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A loja de aplicativos deixa de ser o unico gargalo de distribuicao de software de bem-estar
                sinal: fraco
                prazo: 2030
                confianca: baixa
              - id: e3.1.2
                ordem: 3
                efeito: Fabricantes pequenos ocupam o nicho porque a barreira de fabricacao e baixa e o software e fino
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Fabricantes de celular respondem integrando estados fisicos do aparelho ao sistema operacional
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Volta a haver diferenciacao de hardware por comportamento proposto e nao por especificacao de camera
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: O aparelho de funcao unica reaparece como segundo aparelho e nao como substituto do celular
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: O uso se fragmenta entre um aparelho de presenca e outro de producao, com a mesma identidade
            sinal: medio
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Operadoras e servicos tratam identidade em multiplos aparelhos como caso comum e nao como excecao
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Papel e impressao voltam como saida legitima de produto digital, com edicao fechada e finitude deliberada
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: O design de interacao recupera repertorio editorial de edicao, corte e limite como ferramenta de projeto
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: A metrica do produto de bem-estar passa de tempo de tela para intencao cumprida
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Ferramentas de autoestimativa e reflexao substituem o painel de contagem como interface principal
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A analitica pessoal de atencao vira categoria de dado intimo com risco proprio de vigilancia e de uso por empregador
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: O objeto do bem-estar digital migra do feed para o agente de IA
    efeitos:
      - id: e6
        ordem: 1
        efeito: O agente de IA se torna o novo lugar do uso excessivo, com dependencia relacional ja documentada em pesquisa
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Ferramentas de friccao nascem dentro do fluxo de trabalho com agente, em pausa, revisao obrigatoria e limite de sessao
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Saber quando nao acionar o agente vira competencia descrita em formacao profissional
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e6.1.2
                ordem: 3
                efeito: A friccao deixa de proteger o tempo do usuario e passa a proteger a autoria e o julgamento dele
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Reguladores estendem a regra de design viciante a companheiros e chatbots, exigindo vinculo afetivo desligado por padrao
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: A fronteira juridica entre produto de atencao e ferramenta de trabalho fica borrada e passa a ser disputada caso a caso
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: Provedores de IA passam a medir e reportar sinais de dependencia entre os proprios usuarios
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Relatorios de uso afetivo viram peca de disputa publica entre empresas e pesquisa independente
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Forma-se um campo de metrica de dependencia com contestacao metodologica comparavel ao de seguranca de conteudo
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: A interface do agente ganha limites deliberados, com sessao finita e recusa de continuidade afetiva
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: Produto de IA passa a ser avaliado tambem por quanto dispensa o usuario e nao apenas por retencao
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o bloco não diz

A roda sugere três cadeias independentes; na prática elas competem pelo mesmo espaço. Se D1 se
concretizar com força (regulação obrigando fricção de fábrica), D2 encolhe: o acessório físico
vira redundante para a maioria e sobrevive só como objeto de identidade. Se D1 travar em
litígio, D2 cresce — o mercado ocupa o vazio que a plataforma não preenche. As duas cadeias
não somam; uma é, em parte, sintoma da ausência da outra.

Há também uma assimetria de evidência entre os ramos que a estrutura esconde. Os efeitos de
D1 apoiam-se em fatos administrativos datados e verificáveis; os de D2, em números de mercado
declarados por reportagem; os de D3, em um estudo qualitativo de fórum e em discussão
normativa em curso. Mesmo com `confianca` marcada por efeito, o ramo D3 inteiro é o mais
frágil do mapa.

Por fim, a roda não tem como registrar o efeito nulo: o desfecho em que tudo isso acontece e o
comportamento agregado não muda, porque a pressão econômica que produziu o desenho capturante
continua intacta. Esse cenário está na seção 7 e na seção 9.

## 6. Sinais fracos e wildcards

### Sinais fracos

**Bem-estar embutido no harness do agente de código.** Protótipos que colocam pausa,
respiração guiada e checagem de fadiga dentro do ambiente de programação com agente. É o tema
18 encontrando o tema 1: o instrumento de bem-estar deixa de ser um app à parte e vira um
gancho do próprio ambiente de trabalho. Quase não existe hoje; se pegar, muda o lugar
institucional da intervenção — de escolha pessoal para configuração de equipe.

**A fricção como sátira.** Projetos que substituem conteúdo por haicais, que repreendem o
usuário em voz alta, que exibem a distância percorrida pelo polegar, que tratam tempo de tela
como carteira de ações. São peças de humor, não de produto — e é exatamente por isso que
sinalizam: o repertório está saindo da engenharia e entrando na cultura visual. Gênero novo
costuma nascer como piada.

**A métrica invertida.** O *WellScreen* e ferramentas próximas pedem que a pessoa estime antes
de mostrar o dado [11]. Se essa forma vencer o painel de contagem, o produto de bem-estar
digital deixa de ser um medidor e vira um instrumento de calibragem do modelo que a pessoa tem
de si — o que é uma mudança de objeto, não de recurso.

**A fricção clandestina no aberto.** Clientes alternativos que removem feeds e reels de
plataformas específicas, publicados como código aberto [13]. Vivem na dependência de APIs não
oficiais e podem ser derrubados a qualquer momento; mas indicam que parte do público quer o
serviço sem o mecanismo, e não o serviço com um cronômetro por cima.

### Wildcard

**Uma plataforma grande adota fricção deliberada por padrão — e ganha usuários com isso.** Não
como concessão regulatória nem como modo opcional escondido, mas como posição de produto:
sessão finita, sem autoplay, sem recomendação infinita, para todos os usuários. Probabilidade
baixa, porque contraria o mecanismo de receita da casa. Impacto alto e assimétrico: se
funcionasse comercialmente por dois trimestres, a premissa de que engajamento máximo é
condição de sobrevivência — premissa sobre a qual todo o resto deste mapa está construído —
cairia, e os efeitos de D2 e boa parte de D1 perderiam sentido. Não é previsão; é o evento que
invalidaria o mapa.

**Wildcard secundário.** Uma decisão judicial que reconheça dano por design em um caso
individual de grande repercussão, com indenização — o que transformaria arquitetura de atenção
em risco de responsabilidade civil, e não apenas administrativa. Aceleraria tudo em D1 e
tornaria a documentação de conformidade um ativo jurídico.

## 7. Contra o próprio mapa

**O efeito que é só extrapolação linear.** `e3.1` — a consolidação da categoria de acessório de
atenção — projeta a curva de 2025-2026 para frente sem nenhum mecanismo novo. É a cadeia mais
confortável do mapa e provavelmente a mais frágil: objetos baratos com alta rotatividade de
novidade podem ter vendido bem justamente por serem novidade. Sem dado de recompra ou de uso
no sexto mês — que eu não encontrei —, a extrapolação é preguiça disfarçada de tendência.

**O efeito que assume velocidade sem caso comparável.** `e1.1`, a camada de conformidade com
documentação de não-indução, assume que uma exigência regulatória vire prática corrente de
equipe de produto em cerca de dois anos. A comparação disponível é a acessibilidade, que levou
mais de uma década para virar entregável rotineiro e, na maior parte do mercado, ainda não
virou. Rebaixei a confiança para `media` e o prazo para 2028, mas ainda pode ser otimista.

**A disrupção que pode não se concretizar.** D1 depende de execução regulatória. Os achados
contra o TikTok são preliminares e contestados pela empresa [2]; no Brasil, a ANPD ainda vai
definir o que exige adaptação técnica [3]. Se a decisão europeia se dissolver em compromisso
negociado e a fiscalização brasileira se concentrar em verificação de idade em vez de
arquitetura — o que uma das análises jurídicas consultadas na busca já sugere —, D1 cai
inteira. O mapa então fica com duas pernas: o mercado de objetos (D2), menor do que aparenta, e
a migração para IA (D3), que é a mais especulativa. O documento inteiro perderia a espinha.

**Um efeito que removi.** Tinha escrito, na segunda ordem de D2, que "escolas e locais de
trabalho adotam caixas de bloqueio como política". Descartei: encontrei o produto e o preço,
não encontrei nenhuma evidência de adoção institucional. Era plausível e sem base — está no
anexo.

**Um número de que desconfio e mantive com ressalva.** A redução de 57% do *one sec* aparece na
página do próprio fabricante citando a publicação [12]. O número é de um artigo revisado por
pares, mas quem o divulga tem interesse comercial direto, e a tentativa de abrir a PNAS
diretamente retornou 403. Está no texto como "segundo a página de pesquisa do produto", e não
como fato verificado na fonte primária.

**Viés do agente.** O tema me é simpático: um mapa que conclui "a fricção está ganhando" é
mais bonito de escrever do que um que conclui "a fricção é um nicho de US$ 59 que não escala".
Três decisões tentam compensar isso: manter toda a terceira ordem em `confianca: baixa`;
declarar explicitamente que redução de abertura de app não é evidência de saúde nem de
atenção; e colocar o efeito nulo como um dos três cenários. Ainda assim, o leitor deve
descontar entusiasmo.

**Viés do recorte.** O enquadramento dado — "família Pessoas e dados", disrupção-raiz já
descrita pela disciplina — favorece encontrar ruptura onde pode haver apenas mercado de
acessório. Não descartei nenhuma das linhas sugeridas no enunciado, e isso é uma limitação,
não uma virtude.

## 8. O que a máquina errou

**Data errada em fonte real, com aparência de precisão.** Ao resumir a matéria da Fast Company
Brasil sobre o ECA Digital, o resumo automático afirmou que "a lei entrou em vigor em 17 de
março de 2025". A data é impossível: a Lei 15.211 é de 2025 e foi sancionada em setembro
daquele ano — não poderia vigorar em março anterior à própria sanção. Fui conferir em uma
segunda fonte, que registra sanção em setembro de 2025 e vigência em 17 de março de 2026 [4].
O erro é típico e perigoso: o dia e o mês estavam certos, só o ano estava errado, o que faz o
número parecer verificado.

**Fonte listada sem ter sido aberta.** Duas referências centrais — o artigo da PNAS sobre o
*one sec* e os artigos do CHI 2026 na ACM Digital Library — retornaram 403 nas tentativas de
acesso. A inclinação natural era citá-las assim mesmo, já que os dados apareceram em resultados
de busca. Não entraram na seção 11; o que entrou foi a página que eu de fato abri, com a
procedência declarada no texto. Quatro tentativas de abertura falharam e estão listadas no
anexo.

**Número de mercado tratado como se fosse auditado.** "Mais de 60 mil unidades vendidas" e
"mais de 100 mil pessoas usando" são números declarados pelas empresas e reproduzidos por
imprensa [5][6]. O primeiro rascunho os usava como base de projeção de tamanho de categoria.
Não são auditados, não têm denominador e não dizem nada sobre uso continuado. Ficaram no texto
como ordem de grandeza declarada, e o efeito que dependia deles foi rebaixado.

**Efeito plausível sem cadeia causal.** O modelo produziu, na terceira ordem, "a publicidade
migra para formatos de baixa frequência e alto valor". Soa bem, encaixa no ramo econômico e não
tem nenhuma evidência nem mecanismo neste mapa — a fricção afeta perfis de menores em dois
blocos regulatórios, o que está longe de mover o mercado publicitário global. Cortado.

## 9. Três cenários para 2031

**Provável.** A fricção virou requisito de conformidade e perdeu a graça. Em 2031, todo produto
grande tem um regime de interface para menores sem rolagem infinita nem autoplay, documentado
em um relatório anual que ninguém lê fora do jurídico, e um regime adulto praticamente
inalterado. As caixas de NFC e os telefones minimalistas continuam existindo, numa categoria
estável e pequena, do tamanho dos fones de ouvido de nicho: quem compra é quem já se
identificava com aquilo. O tempo médio de uso agregado não caiu de forma perceptível — mudou de
lugar, do feed para o assistente. O campo aprendeu a projetar fricção e aprendeu, no mesmo
movimento, a torná-la indolor o bastante para não atrapalhar a receita. A intervenção existe,
é legal, é medida e é irrelevante.

**Desejável.** A fricção deixou de ser defesa e virou vocabulário. Em 2031, projetar finitude —
uma grade que termina, uma sessão que fecha, um número fechado de itens por dia — é uma escolha
de design tão normal quanto escolher uma grade tipográfica, e é ensinada assim. Chegou-se aqui
por três coisas: as decisões regulatórias de 2026 sobreviveram ao litígio e criaram um piso; a
pesquisa aprendeu a medir intenção cumprida em vez de minutos, o que deu às equipes uma métrica
que não punia o desenho honesto; e alguns produtos de porte médio provaram que dava para
crescer sem arquitetura capturante. A transposição para o agente de IA aconteceu cedo: limites
de sessão e revisão obrigatória entraram nas ferramentas de trabalho antes de virarem
obrigação, porque as equipes perceberam que o custo do uso acrítico era delas.

**Indesejável.** A atenção virou serviço de assinatura. Em 2031, o desenho sem manipulação é o
produto pago — "modo sóbrio", sem recomendação, por uma mensalidade —, e o desenho capturante é
o gratuito, para quem não pode pagar. A regulação consolidou isso sem querer, ao exigir proteção
para menores e deixar o adulto como território livre: a plataforma cumpriu a lei no perfil
infantil e monetizou a calma no resto. O sinal precoce, visível já em 2027 ou 2028, é uma
assinatura sem publicidade que passe a prometer também *menos recomendação* — e não apenas
menos anúncio. No dia em que "sem algoritmo" aparecer na tabela de preços, este cenário está em
curso.

## 10. O experimento

**O que é.** *Banca de fricções* — uma bancada comparativa, montada em sala, em que o mesmo
aplicativo-alvo (escolhido por cada participante) é mediado por quatro intervenções de
**formatos diferentes** durante uma semana, uma por dia útil, com rodízio entre os
participantes:

1. **Gesto físico** — uma etiqueta NFC colada em um objeto fixo da casa; tocar nela alterna o
   estado de bloqueio. Custa centavos e replica o mecanismo comercial da categoria.
2. **Ritual impresso** — um resumo do que a pessoa perderia, gerado de manhã e impresso ou
   escrito à mão; a finitude do papel substitui o feed no primeiro acesso do dia.
3. **Humor** — uma repreensão escrita, específica e um pouco constrangedora, sorteada a cada
   abertura. Testa se a vergonha leve funciona onde o aviso neutro não funciona.
4. **Economia comportamental** — um custo simbólico: cada abertura debita de um saldo diário
   visível, e o saldo não reposto fecha o app até o dia seguinte.

**Que pergunta sobre o futuro ele ajuda a responder.** A que sustenta toda a segunda disrupção
deste mapa: *o formato da intervenção importa mais do que a intervenção?* A literatura mostra
que a fricção funciona e irrita [10]; a hipótese do mercado é que o formato certo faz a pessoa
tolerar a irritação. Se as quatro formas produzirem o mesmo efeito, D2 é uma questão de
embalagem e o mapa está superestimando o hardware.

**Que tecnologia emergente ele usa, e por que não dá com tecnologia madura.** O bloqueio em si é
tecnologia madura — é justamente o ponto. O que é emergente, e não existe pronto, são três
coisas: a **mediação por estado físico** (o app respondendo a um objeto do mundo, e não a um
horário); a **medição por intenção declarada** em vez de tempo de tela, que exige registrar a
intenção *antes* do uso e compará-la depois; e o **protocolo comparativo entre formatos**, que
nenhum produto oferece porque cada produto vende um formato só. Um bloqueador de prateleira
responde "reduziu?" e não responde "qual formato a pessoa aguenta?".

**O que a turma faz quando testar em sala.** Cada participante escolhe o app-alvo e declara, por
escrito, a intenção do dia ("vou abrir para responder mensagens do grupo, três vezes"). Ao fim
do dia registra três coisas: quantas vezes abriu, quantas cumpriram a intenção declarada, e uma
frase sobre o que sentiu na hora da fricção. Na aula, os dados vão para um quadro único por
formato — e a discussão se dá sobre a coluna que interessa: **irritação alta com intenção
cumprida alta** é o quadrante que define se a fricção tem futuro dentro de um produto comercial
ou só fora dele. Não se coleta nenhum dado de saúde, humor clínico ou diagnóstico; a
autodeclaração é sobre a experiência de uso.

**O que me faria mudar de ideia.** Três resultados, cada um matando uma parte do mapa:

- **Se os quatro formatos derem resultados estatisticamente indistinguíveis**, a premissa de D2
  cai: o formato é folclore e qualquer atrito serve, o que devolve a vantagem a quem já está
  dentro do sistema operacional.
- **Se a irritação for uniformemente alta e a intenção cumprida não subir**, a fricção não
  passa de custo sem retorno na escala de uma semana, e os efeitos `e2.1` e `e3.1` perdem base.
- **Se o efeito desaparecer entre o segundo e o quinto dia** em todos os formatos, o problema
  central não é desenho de intervenção, é habituação — e a conclusão prática é que a única
  fricção que sobrevive é a que a pessoa não controla, o que reforça D1 e esvazia D2.

## 11. Fontes

Somente fontes que abri e li. As tentativas de acesso que falharam estão listadas no anexo.

1. **European Parliamentary Research Service — "Addictive design on online platforms"** (06/05/2026).
   `https://epthinktank.eu/2026/05/06/addictive-design-on-online-platforms/`
   Sustenta: o enquadramento jurídico europeu (artigos 25, 28 e 34 do DSA), a ausência do termo
   "design viciante" no texto legal, as medidas exigidas em fevereiro de 2026 (desativar rolagem
   infinita gradualmente, pausas eficazes inclusive noturnas) e o teto de multa de 6% do
   faturamento global. Confiabilidade alta: serviço de pesquisa do Parlamento Europeu, fonte
   institucional sobre o próprio processo legislativo que descreve.

2. **Euronews — "TikTok's addictive design breaches EU law, Commission says"** (06/02/2026).
   `https://euronews.com/2026/02/06/tiktoks-addictive-design-breaches-eu-law-commission-says`
   Sustenta: a data e o conteúdo dos achados preliminares contra o TikTok, a caracterização dos
   avisos de tempo de tela para 13-17 anos como facilmente dispensáveis, a exigência de mudança
   no desenho básico do serviço e a contestação da empresa. Confiabilidade média-alta:
   jornalismo europeu de referência reportando ato administrativo; os achados são preliminares,
   e o documento registra isso.

3. **Fast Company Brasil — "Safety by Design? Entenda regra do ECA digital que pode limitar rolagem infinita"**.
   `https://fastcompanybrasil.com/tech/safety-by-design-entenda-regra-do-eca-digital-que-pode-limitar-rolagem-infinita/`
   Sustenta: a inversão do ônus da prova sobre o sistema de recomendação, o conjunto de
   exigências (perfil privado por padrão, controle parental, verificação de idade) e o papel da
   ANPD e do Ministério da Justiça na definição do que vale de imediato. Confiabilidade média:
   jornalismo especializado; **a data de vigência informada nesta fonte está errada** e foi
   corrigida pela fonte 4 — ver seção 8.

4. **FADC — "ECA Digital: o que muda para crianças e adolescentes"**.
   `https://www.fadc.org.br/noticias/eca-digital-o-que-muda`
   Sustenta: sanção da Lei 15.211/2025 em setembro de 2025 e vigência em 17/03/2026; proibição
   nominal de rolagem infinita e reprodução automática; fiscalização pela ANPD com Ministério
   Público, Conanda e Anatel; multas de até 10% do faturamento brasileiro limitadas a R$ 50
   milhões por infração; alcance extraterritorial. Confiabilidade média-alta: organização da
   sociedade civil especializada em direitos da criança, com descrição verificável do texto legal.

5. **Wikipédia — "Light Phone"**.
   `https://en.wikipedia.org/wiki/Light_Phone`
   Sustenta: a cronologia do produto (1ª geração 2017 via Kickstarter, US$ 415 mil e 3.187
   apoiadores; Light Phone II em 2019 com mais de US$ 3,5 milhões e 10.732 apoiadores; Light
   Phone III entregue em 27/03/2025, primeiro sem financiamento coletivo; Light Flip previsto
   para abril de 2027) e o tamanho da empresa. Confiabilidade média: enciclopédia colaborativa,
   usada aqui apenas para cronologia e números de campanha, que são documentados publicamente.

6. **Fortune — reportagem sobre produtos analógicos e bloqueadores entre a Geração Z** (13/02/2026).
   `https://fortune.com/2026/02/13/analog-gen-z-phone-addiction-bloom-brick-app-blockers-dumb-phones-social-media/amp`
   Sustenta: preços (Bloom US$ 39, Brick ~US$ 59), mais de 60 mil unidades vendidas pela Bloom,
   fundadores e o enquadramento de mercado da categoria. Confiabilidade média: imprensa de
   negócios reproduzindo números declarados pelas empresas, sem auditoria independente.
   Nota de acesso: a página foi aberta e lida, mas devolve 403 a requisição automatizada
   (checagem de link por `curl`); a leitura se deu pelo recuperador de conteúdo da sessão.

7. **Special Projects — página do projeto Aperture**.
   `https://specialprojects.studio/project/aperture/`
   Sustenta: o que é o Aperture, o mecanismo da capa que revela só parte da tela, o ano (2025),
   o status de conceito em evolução para protótipo e o reconhecimento no Innovation by Design da
   Fast Company. Confiabilidade média: fonte primária do autor do projeto — precisa sobre o
   artefato, interessada quanto à importância dele.

8. **Creative Boom — "Aperture by Special Projects reimagines tech to reclaim our attention"** (07/04/2025).
   `https://www.creativeboom.com/news/aperture-by-special-projects-reimagines-tech-to-reclaim-our-attention/`
   Sustenta: a citação de Clara Gaggero Westaway sobre a dificuldade de virar a capa ser
   elemento deliberado de projeto, e a posição declarada sobre o papel da IA como filtro.
   Confiabilidade média: imprensa de design, útil pela citação direta atribuída.

9. **Drexel University — "Teens Are Becoming Concerned About Their Attachment to AI Chatbots"** (abril/2026).
   `https://drexel.edu/news/archive/2026/April/teen-AI-chatbot-addiction`
   Sustenta: método (análise qualitativa de mais de 300 posts de Reddit de usuários
   autoidentificados entre 13 e 17 anos), identificação dos seis componentes de dependência
   comportamental, autoria (Namvarpour, Razi e colegas) e apresentação no CHI de 2026.
   Confiabilidade média-alta para o método e os autores; é release institucional sobre artigo
   revisado por pares, e a amostra é de discurso em fórum, não clínica.

10. **arXiv — Ruiz, Molina León e Heuer, "Design Frictions on Social Media: Balancing Reduced Mindless Scrolling and User Satisfaction"** (jul/2024, revisão nov/2024).
    `https://arxiv.org/abs/2407.18803`
    Sustenta: o desenho experimental (reagir a cada post contra rolagem infinita), n = 30, a
    melhora significativa de recordação e a frustração majoritária declarada. Confiabilidade
    média: preprint com método descrito, amostra pequena e tarefa de laboratório.

11. **arXiv — "In my defense, only three hours on Instagram: Designing Toward Digital Self-Awareness and Wellbeing"** (set/2025, aceito no CHI 2026).
    `https://arxiv.org/pdf/2509.21860`
    Sustenta: a existência do WellScreen, o mecanismo de estimar antes de ver, n = 25
    universitários, e o padrão de subestimação de produtividade e redes sociais com
    superestimação de entretenimento. Confiabilidade média-baixa para generalização: amostra
    pequena e homogênea; usado aqui como sinal de deslocamento de métrica, não como evidência de
    efeito.

12. **one sec — página de pesquisa do produto**.
    `https://one-sec.app/research/`
    Sustenta: a lista de publicações associadas ao produto (PNAS 2023 de Grüning, Riedel e
    Lorenz-Spreen; CHI 2024 de Haliburton e colegas; revisão de Cambridge de dez/2025; experimento
    de campo da autoridade dinamarquesa de consumo, 2025) e o número de redução de 57%.
    Confiabilidade baixa como fonte, alta como índice: é material do fabricante e tem interesse
    comercial; serve para localizar a literatura, e os números são atribuídos a ela no texto
    porque o acesso direto à PNAS falhou.

13. **GitHub — tópico `digital-wellbeing`**.
    `https://github.com/topics/digital-wellbeing`
    Sustenta: 437 repositórios públicos no tópico, os projetos mais estrelados (Olauncher 3,8k,
    Curbox 1,3k, FeurStagram 907, Zenith 456, Reef 343) e a distribuição por linguagem.
    Confiabilidade alta para o dado que sustenta (existência e volume de projetos abertos), nula
    como medida de uso real.

14. **Instagram — anúncio das Teen Accounts** (17/09/2024).
    `https://about.instagram.com/blog/announcements/instagram-teen-accounts`
    Sustenta: os defaults de bem-estar da plataforma — lembrete após 60 minutos diários e modo de
    dormir das 22h às 7h com notificações silenciadas. Confiabilidade alta para o que a empresa
    diz oferecer; nenhuma para eficácia.

## 12. Anexo — o levantamento bruto

### A entrevista

A skill exige entrevista antes de pesquisar. Nesta rodada não havia interlocutor disponível para
responder; os campos foram fornecidos no despacho da tarefa e são registrados aqui como
confirmados, com a ressalva de que não houve rodada de confirmação com pessoa humana.

| Campo | Valor |
|---|---|
| tema | Bem-estar digital e design de fricção (tema 18 de 19; família "Pessoas e dados") |
| recorte | O design contra o próprio uso: reduzir, interromper e recuperar a atenção — inclusive no uso de IA. Vínculo afetivo com companheiros de IA pertence ao tema 19 |
| horizonte | 2031 |
| público | Quem projeta mídia e interação |
| região | global, com nota sobre o Brasil |
| objetivo | Mapa de futuro para a disciplina CIN0055, base do projeto do movimento 3 |
| exclusões | O que já é comum em produto de massa (régua da disciplina). Nenhuma outra exclusão |
| viés desejado | neutro |
| profundidade | três ordens |
| modo | a partir de uma inovação/tema, não de um setor |
| disrupção suspeita | nenhuma declarada — a descoberta era parte da tarefa |
| ideias óbvias a excluir | as que serviriam a qualquer tema |
| critério de mudança de ideia | evidência de que a adoção passou da maioria inicial (Rogers), ou de que a tecnologia não rompe nada e só melhora o existente |

**Consequência metodológica da entrevista sem interlocutor.** Todo campo abaixo de "tema" foi
aceito sem negociação. Em uma rodada com pessoa humana, três perguntas teriam sido feitas: (a)
se o recorte inclui ou não intervenções de plataforma (incluí, como estado maduro); (b) se
"global" deve pesar a evidência anglófona, que é a que existe (pesa, e isso é limitação); (c) se
o horizonte 2031 vale para a cadeia regulatória, cujos prazos são administrativos e mais curtos.

### As consultas feitas

Buscas (WebSearch):

1. `digital wellbeing friction design 2026 attention economy intervention research`
2. `Light Phone III sales dumbphone market growth 2026`
3. `"one sec" app study PNAS Grüning self-nudge smartphone friction results`
4. `EU Digital Services Act addictive design infinite scroll ban 2026 regulation minors`
5. `Brasil ECA Digital Lei 15.211 2025 design viciante rolagem infinita plataformas`
6. `Brick app NFC phone lock funding revenue 2026 digital detox hardware startup`
7. `AI chatbot overuse dependency research 2026 emotional reliance study OpenAI MIT Media Lab`
8. `Special Projects "Paper Phone" Aperture case phone camera cover design studio`
9. `Instagram teen accounts default limits "quiet mode" 2026 wellbeing feature adoption numbers`

Aberturas bem-sucedidas: as 14 fontes da seção 11.

### Tentativas de acesso que falharam (e por isso não entraram na seção 11)

| URL | Resultado | O que teria sustentado |
|---|---|---|
| `https://dl.acm.org/doi/10.1145/3772318.3790517` | HTTP 403 | "Attention Nooks: Situated Frictions to Foster Intentional Technology Use", CHI 2026 — fricções situadas no espaço doméstico |
| `https://dl.acm.org/doi/10.1145/3772318.3793192` (via doi.org) | 302 → 403 na ACM | "What is Digital Wellbeing? A Leverage Points Framework", CHI 2026 |
| `https://dl.acm.org/doi/full/10.1145/3725215` | HTTP 403 | "The Digital Attention Heuristics", ACM TOCHI — heurísticas de projeto para atenção |
| `https://www.pnas.org/doi/10.1073/pnas.2213114120` | HTTP 403 | Fonte primária do estudo do *one sec* (n = 280, seis semanas, 57%) |
| `https://www.cnn.com/world/dumphones-feature-phones-spc` | HTTP 451 | Reportagem da CNN sobre o mercado de dumbphones |
| `https://arxiv.org/pdf/2407.18803` (PDF) | conteúdo binário ilegível | Resolvido pela página de resumo, `abs/2407.18803` |
| `https://www.tecmundo.com.br/...411645...` → `estadao.com.br` | redirecionamento bloqueado | Data de vigência do ECA Digital — resolvido pela FADC |

Observação metodológica: **três dos quatro artigos acadêmicos mais relevantes do tema estão
atrás de paywall institucional**. O mapa, portanto, apoia-se desproporcionalmente em preprints
do arXiv, comunicação institucional e imprensa. Isso é uma limitação de acesso, não uma escolha
editorial, e tem efeito conhecido: superestima o que é divulgado e subestima o que é publicado.

### Classificação dos achados

**Maduro** (estado atual, não é raiz — e é a régua de exclusão da disciplina):
- Bloqueadores de aplicativo e contadores de tempo de tela genéricos.
- Screen Time (Apple) e Digital Wellbeing (Android).
- Modo "não perturbe", modo de dormir, lembrete de tempo diário — incluindo os defaults das
  Teen Accounts do Instagram [14].
- Launchers minimalistas para Android [13] — amplamente disponíveis, embora nichados.

**Emergente:**
- Fricção por gesto físico e NFC como produto de consumo [6].
- Telefone minimalista premium como segundo aparelho [5].
- Métrica por autoestimativa e reflexão em vez de contagem [11].
- Clientes alternativos que removem mecanismos específicos de plataformas [13].
- Fricção embutida em ambiente de trabalho com agente (protótipos; sem avaliação publicada).

**Disruptivo** (muda papel, relação, custo ou prática):
- A obrigação regulatória de desenho não-capturante [1][2][3][4] — muda quem é o autor da
  intervenção e quem responde por ela.
- A mediação por estado físico do mundo em vez de configuração em menu [6][7][8] — muda o canal
  de distribuição e o custo de reverter a decisão.
- O deslocamento do objeto do bem-estar digital para o agente de IA [9] — muda o que a fricção
  protege, de tempo para autoria.

**Emergente que não é disruptivo, e por isso ficou de fora da raiz:** a sátira de bem-estar
digital (haicais no lugar de posts sobre IA, repreensão verbal, tempo de tela como carteira de
ações). Muda o *registro cultural* da intervenção, e é sinal fraco valioso — mas não altera
papel, custo nem relação. Está na seção 6, não na 4.

### Separação entre fato, inferência e hipótese

**Fatos apoiados por fonte aberta:**
- A Comissão Europeia emitiu achados preliminares contra o TikTok por design viciante em
  06/02/2026, com multa possível de 6% do faturamento global [1][2].
- A Lei 15.211/2025 vigora desde 17/03/2026 e proíbe nominalmente rolagem infinita e reprodução
  automática para serviços acessados por menores no Brasil, com fiscalização da ANPD [3][4].
- Fricção por reação obrigatória melhorou a recordação e piorou a satisfação declarada, com
  n = 30 [10].
- Existem produtos físicos de bloqueio a US$ 39-59, com mais de 60 mil unidades declaradas por
  um deles [6].
- O tópico `digital-wellbeing` do GitHub tem 437 repositórios públicos [13].
- Seis componentes de dependência comportamental foram identificados em discurso de adolescentes
  sobre Character.AI, em análise de mais de 300 posts [9].

**Inferências causais argumentadas (minhas, não das fontes):**
- Que a regulação de menores se torne laboratório de padrões depois exportados para adultos
  (`e1.2.1`): decorre do custo de manter dois regimes de interface, não de nenhuma fonte.
- Que o bloqueio de fábrica esvazie o mercado de bloqueadores de terceiros (`e2`): analogia com
  o que ocorreu com lanternas, leitores de QR e gravadores de tela ao serem absorvidos pelo
  sistema operacional. Analogia, não evidência.
- Que a irritação medida em laboratório [10] explique por que a fricção sobrevive fora das
  plataformas e não dentro delas: é interpretação minha do achado.

**Hipóteses prospectivas (confiança baixa, e assim marcadas na roda):**
- Toda a terceira ordem, sem exceção.
- A monetização da calma (`e2.2`, `e2.2.1`) — plausível pelo precedente da assinatura sem
  anúncios, sem nenhum caso observado de assinatura "sem recomendação".
- A fragmentação do celular em dois aparelhos (`e4.1`) — contraria a história do dispositivo
  convergente, que absorveu câmera, GPS, música e carteira. É a hipótese de que mais desconfio
  entre as que mantive.

### Efeitos gerados e removidos, com o motivo

| Efeito descartado | Onde estava | Por que caiu |
|---|---|---|
| "Escolas e empresas adotam caixas de bloqueio como política institucional" | 2ª ordem de D2 | Encontrei produto e preço; nenhuma evidência de adoção institucional. Plausível e sem base |
| "A publicidade migra para formatos de baixa frequência e alto valor" | 3ª ordem de D1 | Sem cadeia causal: a regra alcança perfis de menores em dois blocos, o que não move o mercado publicitário global |
| "Surge certificação de bem-estar digital tipo selo, com adesão voluntária" | 3ª ordem de D1 | Redundante com `e1.1.2` (auditoria), e selo voluntário tem histórico ruim de eficácia. Fundido |
| "Sistemas operacionais passam a cobrar por modo de foco avançado" | 2ª ordem de D2 | Especulação de modelo de negócio sem sinal algum; o recurso já existe gratuito nas duas plataformas |
| "O tempo de tela agregado cai globalmente até 2031" | 1ª ordem | Não é efeito de design, é agregado macro com dezenas de determinantes. Nenhuma fonte sustenta, e vários indícios apontam contra. Virou parte do cenário provável |
| "Terapias digitais para uso problemático viram categoria regulada" | 3ª ordem de D3 | Fora do contrato da skill: entra em alegação clínica, que a skill proíbe. Cortado sem substituição |

### Cadeias interrompidas por falta de evidência

Duas ramificações não foram até a terceira ordem, e registro isso em vez de inventar
ramificação decorativa:

- **`e4.2` (retorno do papel)** tem terceira ordem escrita, mas frágil: não encontrei nenhum
  dado de escala sobre impressão sob demanda para consumo pessoal de conteúdo. A cadeia existe
  como conceito de design (Paper Phone, Daily Paper Phone), não como prática medida.
- **`e5.1` (autoestimativa substituindo contagem)** morre na segunda ordem com evidência: há um
  estudo, com 25 participantes universitários [11]. A terceira ordem que escrevi — analítica
  pessoal como dado íntimo de risco — é extrapolação por analogia com dados de saúde vestíveis,
  e não tem sinal próprio neste tema.

### Limitações declaradas

1. **Sem eficácia clínica.** Nada neste mapa afirma que qualquer intervenção trate, melhore ou
   previna qualquer condição. Redução de aberturas de aplicativo é medida de comportamento de
   uso; separar isso de saúde é exigência do contrato da skill e é a separação mais importante
   do documento.
2. **Assimetria de acesso.** Três dos principais artigos de 2026 e o artigo primário da PNAS
   ficaram atrás de 403. Onde usei seus números, declarei a procedência indireta.
3. **Assimetria geográfica.** A evidência aberta é majoritariamente europeia e norte-americana.
   O Brasil entra por via legal (ECA Digital), não por pesquisa de design brasileira — não
   encontrei, nas buscas feitas, estudo brasileiro sobre fricção de interface. É lacuna do
   levantamento, e possivelmente lacuna das buscas em inglês.
4. **Números de mercado não auditados.** Todas as cifras de venda vêm de declaração de empresa
   reproduzida por imprensa [5][6].
5. **Horizonte desigual.** 2031 é longo para a cadeia regulatória (cujos prazos são de meses) e
   curto para a cadeia cultural (cujos efeitos são de uma geração). Os prazos por efeito tentam
   corrigir isso, mas a moldura única do mapa é uma simplificação.
6. **Critério de mudança de ideia, aplicado.** O despacho pedia rebaixar o que já tivesse passado
   da maioria inicial de adoção ou o que apenas melhorasse o existente. Apliquei: bloqueadores,
   contadores e modos "não perturbe" foram para o estado atual, e não para a raiz. Não apliquei
   o mesmo rigor à categoria de acessório físico, que pode estar em fase de novidade e não de
   adoção — o teste está no experimento da seção 10, e é por isso que ele existe.
