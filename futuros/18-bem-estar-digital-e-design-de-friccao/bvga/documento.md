---
tema: Bem-estar digital e design de fricção
slug: bem-estar-digital-e-design-de-friccao
autor_login: bvga
zona_de_interesse: Pessoas e dados
data: 2026-09-17
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 8
efeitos_ordem_2: 15
efeitos_ordem_3: 15
tecnologias_citadas: [design friction, self-nudging, verificação de idade, lembrete de pausa obrigatório, bloqueio por NFC, capa de fricção física, launcher minimalista, escala de cinza, agentes de IA conversacionais, harness de agente de código, assinatura sem anúncios, SDK de conformidade]
fontes: 14
confianca: media
experimento: Dose e Decaimento
skill_usada: futurizacao-bvga
publico_ok: false
---

## 1. Resumo

O bem-estar digital passou, entre dezembro de 2025 e setembro de 2026, de mercado de acessórios a
obrigação legal. Três instrumentos entraram em vigor nesse intervalo — a lei californiana SB 243
(1º/01/2026), o ECA Digital brasileiro (17/03/2026) e as obrigações do Regulamento de IA europeu
sobre dependência e manipulação (agosto de 2026) —, e um quarto, o Digital Fairness Act, está
anunciado para o quarto trimestre de 2026. Isso desloca a fricção do lugar onde a turma a
encontrou (extensão, capa, tag NFC, sátira) para dentro do produto de massa, por imposição.

O mapa identifica três disrupções-raiz, nenhuma delas um produto: **fricção como requisito de
conformidade** (o anti-engajamento vira custo de operação, não diferencial de marca); **fricção
dosada** (a intervenção atencional vira parâmetro medido, com curva de decaimento conhecida — e,
por isso mesmo, calibrável para baixo); e **fricção sobre o agente** (o objeto da intervenção
deixa de ser o tempo de tela e passa a ser a delegação, para a qual a medida "tempo" não serve).

A evidência disponível sustenta o mecanismo e desautoriza o otimismo. A fricção funciona — 36% das
tentativas de abrir um aplicativo são abandonadas diante de um atraso de dez segundos — mas o
efeito decai de 43% na primeira semana para 32–34% a partir da sexta, e um quarto dos usuários
desliga a intervenção periodicamente. Do outro lado, a via proibitiva já falhou em público: três
meses depois da proibição australiana, 81% dos menores de 16 anos continuavam usando redes
sociais, contra 86% antes. A confiança geral deste mapa é **média**: o mecanismo regulatório é
bem documentado, a resposta do design a ele é especulativa.

## 2. O tema

**Recorte.** Interfaces desenhadas para serem usadas menos: fricção deliberada, interrupção,
ritual, hardware de desconexão, e a extensão disso ao uso de IA. O objeto é reduzir, interromper
e recuperar a atenção — o design contra o próprio uso.

**Parâmetros da entrevista** (registrados antes da análise, conforme a regra de parada da skill):

| Campo | Valor |
|---|---|
| `tema` | Bem-estar digital e design de fricção |
| `horizonte` | 2031 |
| `publico` | quem projeta mídia e interação |
| `recorte_geografico` | global, com uma nota sobre o Brasil |
| `descartes` | o que já é comum em produto de massa; ideias que serviriam para qualquer tema |
| `vies_desejado` | neutro; nenhuma disrupção suspeita indicada de antemão |
| `profundidade` | três ordens |
| `modo` | a partir de uma inovação/tema, não de um setor |
| condição de mudança de ideia | evidência de que a adoção já passou da maioria inicial, ou de que a tecnologia só melhora o que existe |

**O que fica de fora, por decisão de escopo.** Contador de tempo de tela, bloqueador de
aplicativo, modo "não perturbe" e lembrete de limite: são pré-instalados por Google e Apple e
embarcados pelas próprias redes. São antecedentes maduros e aparecem no mapa apenas como
infraestrutura. Também fica de fora o vínculo afetivo com companheiros de IA como objeto em si
— é o tema vizinho; aqui ele entra só quando vira alvo de uma intervenção de interrupção.

**Nota de escopo declarada.** A entrevista pediu "global, com uma nota sobre o Brasil". O corpo
do mapa é global; o Brasil aparece na seção 3 e nos cenários, como o caso em que a obrigação de
projetar contra o uso compulsivo já está escrita em lei e ainda não foi testada.

## 3. Onde isso está hoje

**A evidência de que fricção funciona é boa, e a de que ela dura é ruim.** O estudo de campo do
aplicativo `one sec` acompanhou 280 pessoas por seis semanas: um atraso de dez segundos, uma
mensagem e um botão de desistir fizeram com que, em 36% das tentativas de abrir o aplicativo-alvo,
a pessoa desistisse. O efeito foi de 43% na primeira semana, caiu para 36% na segunda e estabilizou
em 32–34% até a sexta. Somado à queda de 37% no número de tentativas, o consumo caiu 57% ao fim
das seis semanas [1]. O acompanhamento longitudinal seguinte, com 1.039 usuários reais por 13,4
semanas em média, confirmou a queda nas tentativas — e registrou o outro lado: a taxa de desistência
diante da fricção cai com o tempo (as pessoas atravessam a barreira mais vezes), mais de um quarto
dos usuários tirou pelo menos uma folga da intervenção, as folgas começam preferencialmente na
sexta-feira e terminam no domingo, e o uso dispara imediatamente antes e depois delas [2].

**O repertório comercial é estreito e pouco teorizado.** A revisão de 39 aplicativos comerciais e
17 protótipos acadêmicos encontrou concentração em rastrear (28), monitorar (25) e criar obstáculos
(21); apenas 13% implementavam cooperação social, e os autores concluem que o campo trata de
"limitar uso sem sentido" em vez de "apoiar uso com sentido" [3]. Trabalho recente vai na mesma
direção: com 25 estudantes ao longo de duas semanas, a intervenção que produziu ganho não foi a
redução do número, e sim a reflexão sobre a diferença entre uso estimado e uso real [4].

**A via proibitiva já tem resultado medido, e ele é ruim.** A Austrália proibiu menores de 16 anos
nas redes em dezembro de 2025. Três meses depois, o regulador eSafety apurou que 81% dos menores
de 16 continuavam usando — contra 86% antes da lei —, e que cerca de metade das crianças que
mantiveram contas disse que a plataforma não verificou idade alguma [5].

**A via de design, por sua vez, virou obrigação em quatro frentes, todas dentro de quinze meses.**
Na Califórnia, a SB 243 está em vigor desde 1º/01/2026: operadores de *companion chatbots* devem
notificar usuários que sabem ser menores "pelo menos a cada três horas" de interação contínua,
lembrando de fazer uma pausa e de que o interlocutor é artificial; há direito de ação individual,
com o maior valor entre dano efetivo e US$ 1.000 por violação, e relatório anual ao Departamento
de Saúde Pública a partir de 1º/07/2027 [6]. No Brasil, o ECA Digital (Lei 15.211/2025, sancionada
em 17/09/2025) está em vigor desde 17/03/2026 e exige que produtos "desenvolvam desde a concepção
e adotem por padrão configurações que evitem o uso compulsivo", com "limitação de recursos para
aumentar, sustentar ou estender artificialmente o uso", além de vedar a autodeclaração de idade [7].
Na União Europeia, o Digital Fairness Act está anunciado para o quarto trimestre de 2026 e mira
explicitamente *dark patterns*, design viciante e personalização injusta; a consulta pública fechou
em 24/10/2025, com organizações de consumidores pedindo regras mais duras e plataformas pedindo o
contrário [8].

**Do lado da IA, a dependência saiu do anedótico.** O International AI Safety Report 2026, de
fevereiro, registra que "um subconjunto de usuários desenvolveu ou está em risco de desenvolver
dependência emocional patológica" de chatbots, citando o dado da OpenAI de que cerca de 0,15% dos
usuários ativos em uma semana e 0,03% das mensagens indicam apego emocional elevado, e observa que
indicadores de dependência se correlacionam com uso intenso — mas também que a evidência sobre
impacto psicológico é "emergente e mista" [9]. A pesquisa conjunta MIT Media Lab–OpenAI, de março
de 2025, encontrou correlação entre uso diário elevado e maior solidão, dependência e uso
problemático, e explicitou que não é possível estabelecer causalidade [10].

**O mercado de fricção de formato — o que a turma varreu — é real, visível e pequeno.** `Aperture`,
a escolha nº 1 da varredura, é um conceito de 2025 do estúdio Special Projects, finalista de prêmio
de design, ainda em coleta de interesse e **não à venda** [11]. O `Paper Phone` é um experimento
aberto encomendado pelo Google. O repositório público de código mostra o mesmo desequilíbrio: o
tópico `digital-wellbeing` no GitHub reúne 429 repositórios, e os mais visíveis são launchers
minimalistas, bloqueadores e filtros de feed — nenhum dos dez primeiros envolve hardware, NFC ou
IA [12]. Já o movimento inverso — plataforma vendendo menos incômodo — existe e não é o que parece:
o TikTok lançou assinatura sem anúncios no Reino Unido em 11/05/2026, por £3,99 mensais, removendo
anúncios e uso de dados publicitários, sem qualquer mudança anunciada na recomendação [13].

**Nota sobre o Brasil.** O país é o segundo do mundo em tempo de tela: cerca de nove horas por dia,
56,6% das horas acordado, com aproximadamente cinco horas só de celular, segundo levantamento do
Electronics Hub sobre dados do relatório Digital do DataReportal [14]. É também o país onde a
obrigação de projetar contra o uso compulsivo já é lei em vigor. A combinação torna o Brasil um
caso de teste involuntário: demanda alta, obrigação escrita, fiscalização ainda não demonstrada.

**Leitura pelo Hype Cycle e pelos Three Horizons** (heurísticas, não provas). Contador de tempo de
tela e bloqueador estão no platô, e com desgaste: são commodity pré-instalada. Fricção de formato
— hardware, ritual, humor — está no pico de expectativa, com imprensa de design abundante e
adoção medida escassa. Fricção obrigatória por lei está no gatilho: existe texto legal, não existe
ainda demonstração de efeito. Em Three Horizons: H1 é a plataforma otimizada para engajamento com
painel de tempo de tela acoplado; H2 é a conformidade em disputa, com teatro de fricção de um lado
e exigência de métrica de efeito do outro; H3 seria um produto cujo sucesso se mede também por um
teto de uso — configuração que hoje não tem nenhum exemplo em escala.

## 4. As disrupções-raiz

Foram gerados onze candidatos e aceitos três. As fichas dos aceitos vêm abaixo; as dos recusados
estão na seção 12, com o motivo da recusa.

### D1 — Fricção como requisito de conformidade

- `candidato`: a capacidade de obrigar, por norma auditável, que o produto de massa opere por padrão
  contra o próprio uso prolongado — configuração protetiva como estado inicial, lembrete
  compulsório, limitação de recursos que estendem artificialmente a sessão.
- `maturidade`: **emergente**. Existe texto legal em vigor em três jurisdições e um quarto
  instrumento anunciado; não existe ainda demonstração pública de efeito nem de fiscalização.
- `potencial_de_ruptura`: **alto**. Altera a arquitetura de produto (a fricção deixa de ser
  acessório de terceiro e vira componente nativo), a cadeia de valor (surge fornecimento de
  conformidade), as normas de governança e a distribuição de poder entre plataforma e regulador.
- `o_que_rompe`: rompe o arranjo em que o anti-engajamento só existia fora da plataforma, feito por
  quem não tinha receita de atenção a perder. Rompe também a premissa de que a métrica de produto
  só tem piso: passa a haver teto.
- `por_que_agora`: SB 243 em vigor desde 1º/01/2026 [6]; ECA Digital em vigor desde 17/03/2026,
  com o verbo "evitar o uso compulsivo" escrito na lei [7]; Digital Fairness Act anunciado para o
  4º trimestre de 2026, mirando design viciante [8]. Três normas e um anúncio em quinze meses.
- `o_que_falta`: capacidade de fiscalização demonstrada. A Austrália mostrou o contraexemplo: lei
  em vigor, queda de 86% para 81% e metade das contas sem verificação alguma [5]. Falta também uma
  definição operável de "uso compulsivo" que um auditor consiga medir.
- `evidencias`: [5], [6], [7], [8].
- `veredito`: **aceita**.

### D2 — Fricção dosada: a intervenção atencional vira parâmetro medido

- `candidato`: a capacidade de especificar uma intervenção de atenção por dose — duração do atraso,
  presença de mensagem, existência da saída fácil, frequência — e de prever seu decaimento, a
  partir de dados comportamentais longitudinais e de experimentos por componente.
- `maturidade`: **emergente**. Existem os dados (280 pessoas por seis semanas; 1.039 por 13,4
  semanas) e a decomposição experimental dos três mecanismos, mas ainda em um punhado de estudos,
  sobre um único aplicativo comercial, com amostra autosselecionada.
- `potencial_de_ruptura`: **alto**, e explicitamente de mão dupla. Altera o papel do profissional
  (o designer de bem-estar vira experimentador), a arquitetura do produto (a fricção precisa mudar
  de forma para não virar hábito) e a distribuição de poder — porque quem tem os dados de dose é
  quem tem o produto de massa, não quem faz a extensão.
- `o_que_rompe`: rompe a fricção como gesto ético declarado. Se a dose é mensurável, "colocamos
  uma pausa" deixa de ser argumento; e a mesma régua que mostra quanta fricção muda comportamento
  mostra quanta fricção uma plataforma aguenta sem perder receita.
- `por_que_agora`: os dois estudos que fecham o ciclo — efeito e decaimento — são de 2023 e 2024
  [1][2], e a obrigação legal de 2026 cria, pela primeira vez, a pergunta "quanto basta?" com
  consequência jurídica.
- `o_que_falta`: replicação fora do `one sec`, medida independente do fornecedor, e um acordo
  mínimo sobre o desfecho a otimizar (tempo? tentativas? satisfação? recuperação?).
- `evidencias`: [1], [2], [3], [4].
- `veredito`: **aceita**, com a ressalva de que a base empírica vem majoritariamente de um único
  produto e de seus próprios desenvolvedores como coautores [2].

### D3 — Fricção sobre o agente: o objeto deixa de ser o tempo

- `candidato`: a capacidade de projetar interrupção e verificação para uma ferramenta que executa
  o trabalho no lugar da pessoa — onde a medida "tempo de uso" perde sentido, porque o sistema que
  se quer moderar é justamente o que reduz o tempo gasto.
- `maturidade`: **experimental**. Existem obrigações recém-criadas (lembrete a cada três horas para
  menores [6]) e evidência de dependência em um subconjunto pequeno [9][10], mas não existe
  instrumento aceito para medir delegação excessiva, nem intervenção testada para ela.
- `potencial_de_ruptura`: **alto**. Altera a forma dominante de interação (a fricção passa a ser
  conversacional, produzida pelo próprio sistema que gera o vínculo), a métrica que organiza o campo
  inteiro (tempo), e quem responde pela intervenção (o provedor, sob responsabilidade jurídica, e
  não um terceiro).
- `o_que_rompe`: rompe a equação fundadora do bem-estar digital — menos tempo é melhor. Um agente
  que devolve tempo e retira decisão é, por essa régua, um bom resultado. Rompe também o locus: a
  intervenção teria de acontecer no momento da delegação, não no momento da abertura do aplicativo.
- `por_que_agora`: o Regulamento de IA europeu passou a exigir, em agosto de 2026, teste adversarial
  para riscos de dependência e manipulação; a SB 243 já impõe lembrete de pausa desde janeiro de
  2026 [6]; e o relatório internacional de fevereiro de 2026 documenta o fenômeno com número e
  ressalva [9].
- `o_que_falta`: uma medida de uso excessivo que não seja o relógio. Sem ela, o setor importa o
  lembrete de pausa do paradigma de tela e o aplica a um problema de outra natureza.
- `evidencias`: [6], [9], [10].
- `veredito`: **aceita**, com confiança menor que as outras duas.

**Candidatos recusados como raiz** (detalhe na seção 12): hardware de desconexão de função única;
bloqueio por chave física NFC; bloqueador e contador de tempo de tela; escala de cinza; assinatura
sem anúncios; sátira e crítica como formato de intervenção; proibição etária.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "D1 — Fricção como requisito de conformidade: o anti-engajamento vira custo de operação, não diferencial de marca"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "Plataformas passam a embarcar fricção nativa por padrão para públicos e jurisdições protegidos, em vez de deixá-la a aplicativos de terceiros"
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "O mercado de fricção de terceiros perde a camada básica e se desloca para o que a lei não cobre: adultos, ritual, objeto físico e uso de IA"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "Resta uma fricção de autor, por assinatura e por objeto, cuja clientela é quem já tem repertório — e a proteção atencional passa a se distribuir por renda"
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "Como a conformidade é verificada por relatório e auditoria, a fricção passa a ser projetada para ser demonstrável antes de ser eficaz"
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Reguladores passam a exigir métrica de efeito em vez de presença de recurso, e abre-se uma disputa técnica sobre qual é a medida legítima de uso compulsivo"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "A verificação de idade se torna a infraestrutura de fato do bem-estar digital, porque quase toda obrigação de fricção é condicionada à idade do usuário"
        sinal: forte
        prazo: 2027
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "O custo de identificar cada usuário empurra plataformas a estimar idade por comportamento, e um requisito de proteção vira mais coleta de dados"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Bem-estar digital e privacidade entram em conflito aberto de política pública, e parte do público recusa a proteção para não ser identificada"
                sinal: fraco
                prazo: 2031
                confianca: media
          - id: e2.2
            ordem: 2
            efeito: "A evasão por VPN, conta falsa e migração para serviços fora do escopo, já medida na Austrália, vira o argumento central contra a via proibitiva"
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "O debate regulatório migra de quem pode entrar para como o produto se comporta, e as regras de infância passam a puxar as regras gerais de design"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "Equipes de produto ganham uma função que responde formalmente por desengajamento, com orçamento próprio e conflito declarado com a meta de receita"
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "Métricas de sucesso passam a incluir um teto de uso e não só um piso, e esse teto precisa ser defendido internamente a cada ciclo de planejamento"
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Produtos dependentes de publicidade por impressão migram para receita por assinatura, porque assinatura tolera menos tempo de uso sem perder faturamento"
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "Forma-se um mercado B2B de conformidade atencional — bibliotecas de lembrete, pausa, verificação e relatório — que hoje não existe"
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "A fricção fica padronizada e idêntica em toda parte porque vem do mesmo punhado de bibliotecas, e perde a variedade de formato que a tornava eficaz"
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: "D2 — Fricção dosada: a intervenção atencional vira parâmetro medido, com curva de decaimento conhecida"
    efeitos:
      - id: e4
        ordem: 1
        efeito: "Intervenções de atenção passam a ser especificadas por dose e reavaliadas pela curva de decaimento, como tratamento, e não por gesto de projeto"
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "Como o efeito decai com a familiaridade, a fricção passa a ser rotativa e deliberadamente imprevisível: muda de forma para não virar hábito"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "A imprevisibilidade aproxima a fricção do repertório que ela combate, e a distinção entre nudge e padrão manipulativo passa a depender apenas de quem escolheu o objetivo"
                sinal: fraco
                prazo: 2031
                confianca: media
          - id: e4.2
            ordem: 2
            efeito: "A folga do usuário deixa de ser tratada como falha e vira objeto de projeto: o produto passa a planejar a interrupção da própria intervenção"
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "Consolida-se uma métrica de bem-estar baseada em recuperação — quanto tempo para retomar o controle — em vez de abstinência, mudando o que conta como sucesso"
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "A mesma instrumentação que mede o efeito da fricção mede quanta fricção a plataforma absorve sem perder receita, e a dose vira ferramenta dos dois lados"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "Plataformas convergem para a dose mínima defensável: suficiente para o auditor, insuficiente para mudar comportamento"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Pesquisa independente com dados de plataforma vira condição de credibilidade, e o acesso a dados se torna o campo principal de disputa do bem-estar digital"
                sinal: fraco
                prazo: 2032
                confianca: media
          - id: e5.2
            ordem: 2
            efeito: "Publicar a dose e o efeito medido vira diferencial competitivo de produtos pequenos, que não têm receita de atenção a perder"
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "Surge um rótulo de dose declarada, análogo ao rótulo nutricional, com o mesmo limite: é lido sobretudo por quem já se cuidava"
                sinal: fraco
                prazo: 2033
                confianca: baixa
  - disrupcao: "D3 — Fricção sobre o agente: o objeto da intervenção deixa de ser o tempo de tela e passa a ser a delegação"
    efeitos:
      - id: e6
        ordem: 1
        efeito: "Tempo deixa de funcionar como medida de uso excessivo, porque o agente reduz o tempo gasto e aumenta a quantidade de decisão delegada"
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "O objeto da intervenção migra de quanto você usou para o que você deixou de decidir, exigindo instrumentar o processo de trabalho e não a tela"
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "Ambientes de trabalho com agente passam a exigir verificação humana antes de aceitar, e a fricção migra do discurso de bem-estar para o de controle de qualidade"
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "Lembretes de pausa importados do paradigma de tela são aplicados ao agente sem evidência de que sirvam para dependência de delegação"
            sinal: medio
            prazo: 2027
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "O primeiro estudo que mostrar ausência de efeito desses lembretes desacredita publicamente a fricção obrigatória como categoria, atingindo também as obrigações que funcionam"
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: "Provedores de IA assumem a interrupção como responsabilidade de produto — lembrete, recusa de sessão longa, redirecionamento — porque a alternativa é responsabilidade jurídica"
        sinal: forte
        prazo: 2027
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "A fricção passa a ser conversacional: o mesmo sistema que produz o vínculo é quem o interrompe, configuração sem precedente no repertório de bem-estar digital"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "Usuários aprendem a desativar a interrupção por instrução, e a eficácia passa a depender de ela não ser negociável — tornando-a indistinguível de paternalismo"
                sinal: fraco
                prazo: 2031
                confianca: media
          - id: e7.2
            ordem: 2
            efeito: "Interromper a sessão colide com a métrica de engajamento do próprio provedor, tornando pública a contradição que as redes sociais levaram uma década para admitir"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: "Forma-se um mercado de intermediários de fricção sobre IA, fora do provedor, repetindo a história dos bloqueadores de terceiros uma década depois"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: "Bem-estar atencional é embutido no ambiente produtivo de trabalho com agente, e não mais no lazer: o alvo passa a ser a jornada"
        sinal: fraco
        prazo: 2029
        confianca: baixa
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "A intervenção passa a ser negociada com o empregador e não com o indivíduo, porque interromper custa tempo de produção"
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: "Fricção vira cláusula de norma de saúde ocupacional e de acordo coletivo, saindo do campo do design para o campo trabalhista"
                sinal: fraco
                prazo: 2033
                confianca: baixa
```

**Totais conferidos:** 3 disrupções, 8 efeitos de 1ª ordem (e1–e8), 15 de 2ª ordem e 15 de 3ª ordem.

**O que a estrutura não captura bem.** Três coisas.

A primeira é a **realimentação**. A roda é uma árvore, e o fenômeno não é. O efeito e5.1 (dose
mínima defensável) realimenta e1.2 (fricção demonstrável), que realimenta e1 — é um circuito, não
um galho. Representar isso como três nós separados sugere três eventos quando há um só, girando.

A segunda é a **coocorrência de mecanismos opostos**. e1.1 (mercado de terceiros se desloca) e
e3.2 (mercado B2B de conformidade se forma) descrevem o mesmo dinheiro indo para dois lugares. A
árvore não diz qual ganha; na prática, quem tiver o canal de distribuição ganha, e isso não é uma
propriedade da fricção, é uma propriedade da loja de aplicativos.

A terceira é a **assimetria de prazo dentro de um mesmo ramo**. e6.2 tem prazo 2027 e é filho de
e6, com prazo 2028 — o que está correto pela regra da skill (ordem é distância causal, não data),
mas confunde quem lê a árvore como cronograma. O lembrete de pausa para IA já existe em lei antes
de o campo admitir que tempo deixou de ser a medida certa; a obrigação chegou antes do diagnóstico.

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — a folga como padrão semanal.** No acompanhamento longitudinal, mais de um quarto
dos usuários desligou a intervenção pelo menos uma vez; as folgas mais comuns duram cerca de dois
dias, começam preferencialmente na sexta-feira e terminam no domingo [2]. Isso é pequeno, é
lateral e ninguém projetou para isso — mas descreve um ritmo de vida, não uma falha de adesão. Se
for confirmado fora do `one sec`, muda o desenho: a intervenção deixa de ser um muro e passa a ser
um calendário.

**Sinal fraco 2 — a fricção como qualidade, não como saúde.** As duas menções que a varredura da
turma trouxe sobre bem-estar dentro do fluxo de programação com agente apontam para um lugar onde
a interrupção não se justifica por saúde mental e sim por verificação do trabalho. É um sinal
fraco de verdade: dois repositórios, sem adoção medida. Mas é o único caminho identificado em que a
fricção sobre IA teria um pagador claro — quem paga pelo erro do agente.

**Sinal fraco 3 — o descompasso entre visibilidade e código.** O tópico `digital-wellbeing` no
GitHub tem 429 repositórios, e os dez mais visíveis são launchers, bloqueadores e filtros de feed;
nenhum envolve hardware, NFC ou IA [12]. A imprensa de design fala de capa, papel e tag; o código
público continua fazendo bloqueador. Se o formato tivesse mesmo migrado, apareceria aqui primeiro.

**Sinal fraco 4 — o conceito premiado que não está à venda.** `Aperture` é finalista de prêmio de
design e ainda coleta interesse de compradores [11]. A distância entre reconhecimento de design e
produto disponível é o próprio sinal: mede quanto do mercado de fricção de formato é discurso.

**Wildcard — uma plataforma grande adota fricção deliberada por padrão e ganha usuários com isso.**
Baixa probabilidade: exige que a perda de receita por sessão seja compensada por ganho de base ou
por assinatura, e o único movimento nessa direção — assinatura sem anúncios a £3,99 no Reino Unido
— remove anúncio, não engajamento, e não altera a recomendação [13]. Alto impacto se acontecer:
quebraria D1 pela raiz, porque a fricção deixaria de precisar de obrigação legal para existir em
escala, e todo o ramo e1–e3 (conformidade, teatro, fornecedor de conformidade) perderia a premissa.
O sinal precoce a vigiar é uma plataforma publicar, por conta própria, uma métrica de teto de uso
e ser medida por ela.

**Segundo wildcard, negativo — a fricção obrigatória ser derrubada por evidência.** Se um estudo
independente e bem desenhado mostrar que os lembretes compulsórios não produzem efeito — resultado
plausível dada a curva de decaimento conhecida [1][2] —, a categoria inteira perde legitimidade
política no mesmo movimento, inclusive as obrigações de configuração padrão, que são de outra
natureza. É o efeito e6.2.1 do mapa, e ele é o cenário indesejável em miniatura.

## 7. Contra o próprio mapa

**1. Qual efeito é apenas extrapolação linear do presente?** O e3.2 (mercado B2B de conformidade
atencional) é a resposta honesta. Ele foi derivado por analogia com o que aconteceu no GDPR e na
acessibilidade — apareceu norma, apareceu fornecedor —, e não por evidência específica deste
domínio. A analogia é razoável, mas é analogia. Mantido com confiança média e sinal fraco.

**2. Qual efeito assume adoção rápida demais?** O e1 (fricção nativa por padrão), com prazo 2027 e
confiança alta. O caso histórico comparável é o próprio banner de cookies: da diretiva de 2009 à
presença universal foram quase dez anos, e o resultado foi conformidade formal sem mudança de
comportamento. Mantive prazo e confiança porque, ao contrário do banner, aqui há prazo legal
vencido e relatório de adequação já exigido — mas o exemplo do cookie é o melhor argumento contra
este mapa inteiro, e ele reaparece em e1.2.

**3. Qual disrupção-raiz pode simplesmente não acontecer?** D3. É a mais frágil das três: depende
de que dependência de agente se estabeleça como problema de escala, e a evidência atual é de 0,15%
dos usuários ativos semanais, com o próprio relatório internacional classificando o corpo de
evidências como emergente e misto [9]. Se ficar em 0,15% e não crescer, D3 vira nota de rodapé
sobre proteção de menores, não disrupção.

**4. O que quebra na roda se essa disrupção falhar?** Caem e6, e7, e8 e todos os seus descendentes
— treze dos 38 efeitos. Sobrevivem D1 e D2 intactas, porque não dependem de IA. O mapa fica menor
e mais previsível: vira a história de uma regulação de plataforma social, sem a virada de objeto
que o tornava interessante.

**5. Que contrassinais existem?** Três, e são fortes. **(a)** A queda de 43% para 32–34% na taxa de
desistência em seis semanas [1] e a queda continuada da taxa de desistência ao longo de 13,4
semanas [2] dizem que a fricção perde potência com familiaridade — o que contraria o otimismo
implícito em toda a roda. **(b)** O tópico `digital-wellbeing` no GitHub continua dominado por
bloqueadores e launchers [12], contra a tese de que o formato migrou para hardware e ritual.
**(c)** A proibição australiana não moveu o comportamento de forma relevante [5], o que sugere que
norma sem capacidade de verificação não produz efeito — e todas as normas de D1 dependem de
verificação de idade, que é exatamente o que falhou lá.

**6. Que barreiras foram subestimadas?** A econômica: nenhuma plataforma de massa tem incentivo
para que a fricção funcione, e a conformidade é barata comparada à perda de sessão. A de
infraestrutura: verificação de idade confiável e não invasiva não existe hoje em escala, e o mapa
a trata como dada em e2. E a cultural: o pressuposto de que menos uso é melhor é contestado na
própria literatura, que recomenda deslocar o objetivo de "limitar uso sem sentido" para "apoiar uso
com sentido" [3] e mostra que o ganho veio da reflexão, não da redução [4].

**7. Que ator teria incentivo para bloquear, capturar ou redirecionar a mudança?** A plataforma de
massa, obviamente — mas por captura, não por bloqueio: implementando a fricção na dose mínima
defensável (e5.1) e transformando a auditoria em item de checklist. E, menos obviamente, o próprio
setor de bem-estar digital: fornecedores de conformidade passam a ter interesse em que a obrigação
exista e em que ela seja formal, não eficaz.

**8. Que viés entrou na seleção do tema e dos efeitos?** Dois. O primeiro é do recorte recebido: a
descrição do tema já afirma que "o design descobriu o valor da fricção" e que a inovação migrou
para o formato da intervenção — uma tese, não um dado, e o levantamento em código público não a
confirma [12]. Tratei-a como hipótese e ela não sobreviveu à seção 3; nenhuma das três raízes
aceitas é de formato. O segundo é meu, e é de disponibilidade: a base empírica sobre eficácia de
fricção vem quase toda de um único produto comercial, com seus desenvolvedores como coautores [2],
porque é o único com dados longitudinais públicos. Isso enviesa o mapa a favor da fricção curta
por software e contra formas que ninguém instrumentou.

**Efeitos rebaixados nesta revisão:** e3.1 e e4.2 caíram de confiança média para baixa (não há
nenhum exemplo de teto de uso adotado como métrica de produto, nem de folga tratada como recurso
de projeto). **Efeitos cortados:** dois caminhos foram eliminados por falta de mecanismo — estão
na seção 12.

## 8. O que a máquina errou

Erros efetivamente detectados durante o processo, e como foram corrigidos:

**1. Trate-se um conceito de design como produto no mercado.** Na primeira passagem, `Aperture` foi
classificado como evidência de que existe um mercado de hardware de fricção. Ao abrir a página do
estúdio, o projeto é descrito como conceito de 2025, finalista de premiação, com coleta de
interesse em página própria — não há produto à venda [11]. A classificação foi corrigida para
protótipo e o candidato "hardware de fricção como mercado" foi rebaixado a sinal.

**2. Atribuiu-se um estudo ao periódico errado.** A cobertura jornalística do caso australiano
levou a registrar inicialmente o levantamento como "estudo publicado no BMJ". Ao abrir a
reportagem, os números de 81% e 86% são do regulador eSafety, publicados em agosto de 2026 [5]. A
atribuição foi corrigida; o dado permanece, a fonte mudou.

**3. Confundiu-se remoção de anúncio com redução de engajamento.** A assinatura sem anúncios do
TikTok foi, na primeira leitura, tratada como caso de "plataforma vendendo fricção". A matéria diz
apenas que o assinante não vê anúncios e não tem dados usados para publicidade; nada é dito sobre
a recomendação [13]. Pagar para não ver anúncio pode aumentar o tempo de uso, não reduzi-lo. O
caso foi movido para a seção de wildcard, como o contrário do que parecia.

**4. Tomou-se o número da OpenAI sobre apego emocional como dado independente.** O 0,15% é medida
da própria empresa sobre o próprio produto, reproduzida — com marcação de fonte corporativa — pelo
relatório internacional [9]. Passou a ser citado com essa ressalva explícita, e não como estimativa
de prevalência.

**Não detectado:** nenhuma citação inexistente. Todas as quatorze fontes da seção 11 foram abertas;
duas tentativas de acesso falharam e as fontes correspondentes foram descartadas em vez de citadas
(registro na seção 12).

## 9. Três cenários para 2031

### Provável — a conformidade sem efeito

Cinco anos depois do primeiro pacote de leis, todo produto de massa tem fricção. Ela vem da mesma
meia dúzia de bibliotecas de conformidade, é igual em todo lugar e ninguém a percebe mais: virou o
banner de cookies da atenção. O relatório anual existe, a auditoria passa, e a métrica auditada é
presença de recurso, não redução de uso. As plataformas convergiram para a dose mínima defensável.
A verificação de idade se resolveu do jeito mais barato — estimativa comportamental —, e o efeito
colateral é que o produto sabe mais sobre o usuário do que antes da lei que o protegia. O mercado
de fricção de terceiros sobreviveu no nicho adulto e pago, com objetos bonitos e assinatura mensal,
para quem já tinha repertório. Quem tem tempo de tela alto e renda baixa continua exatamente onde
estava. No Brasil, o ECA Digital produziu adequação documental ampla e nenhuma mudança mensurável
no tempo de uso; discute-se por que.

### Desejável — a dose declarada

O ponto de virada foi metodológico, não moral: por volta de 2028, reguladores pararam de perguntar
"você tem um lembrete?" e passaram a perguntar "qual é o efeito medido dele?". Isso só foi possível
porque três condições foram construídas antes. Primeira, acesso de pesquisadores independentes a
dados de plataforma, com protocolo e sem veto do fornecedor — a disputa que se arrastou desde 2026.
Segunda, um desfecho acordado que não é tempo: recuperação — quanto tempo uma pessoa leva para
retomar o padrão que ela mesma escolheu, depois de uma folga. Terceira, a aceitação de que a folga
é parte do desenho, não fracasso dele, o que veio direto do achado de que as pausas seguem um ritmo
semanal. O resultado é um rótulo de dose declarada, hoje presente em produtos pequenos e em dois
grandes que o usaram como diferencial. O rótulo é lido sobretudo por quem já se cuidava — a
desigualdade não se resolveu —, mas pela primeira vez existe uma régua pública, e ela vale também
para agentes de IA, onde o desfecho declarado não é tempo e sim decisões verificadas pelo humano.

### Indesejável — a fricção desmoralizada

Em 2029, um estudo independente e bem desenhado mostrou que os lembretes de pausa obrigatórios —
os de tela e os de IA — não produzem efeito algum sobre comportamento. O resultado era previsível
para quem conhecia a curva de decaimento, mas a política pública tinha apostado neles porque eram o
que se sabia auditar. A reação foi proporcional ao investimento: a categoria inteira perdeu
legitimidade, e a revisão legislativa seguinte derrubou junto as obrigações de configuração padrão
— que eram de outra natureza e tinham mecanismo diferente. Plataformas passaram a citar o estudo
para argumentar que a intervenção não funciona e que a responsabilidade é individual. O mercado de
fricção de formato, que vivia da atenção da imprensa de design, murchou com a pauta. O sinal
precoce que poderia ter antecipado tudo isso estava disponível desde 2024: a taxa de desistência
diante da fricção cai com a familiaridade, e legislar sobre o componente de menor efeito — o
lembrete — em vez de sobre o de maior efeito — a saída fácil — era apostar no cavalo errado com
dados na mão.

## 10. O experimento

**Nome:** Dose e Decaimento.

**O que é.** Uma extensão de navegador e um aplicativo simples de celular que aplicam, sobre um
único aplicativo-alvo escolhido pelo participante, uma fricção cuja **forma muda por sorteio** a
cada bloco de duas semanas, dentro de quatro condições: (a) atraso fixo de dez segundos; (b) saída
fácil sem atraso — botão de desistir em destaque, abertura imediata se insistir; (c) forma rotativa
— a cada bloco, uma barreira diferente e não anunciada (atraso, pergunta, tela feia, exigência de
escrever o motivo); (d) controle com medição apenas. Todos os participantes registram, por pergunta
diária de uma linha, se o uso daquele dia foi deliberado ou automático. A instrumentação registra
tentativas, desistências e retomadas após folga. Duração mínima: 12 semanas, para atravessar o
ponto onde o efeito conhecido já decaiu.

**Pergunta de futuro que testa.** A imprevisibilidade deliberada da fricção impede o decaimento do
efeito? Formalmente: a taxa de desistência da condição rotativa (c) mantém-se estável entre a
semana 1 e a semana 12, enquanto as condições (a) e (b) decaem conforme a curva já documentada?

**Tecnologia emergente usada.** Fricção dosada e rotativa — a capacidade de D2 —, aplicada com
atribuição aleatória por bloco e desfecho de recuperação, e não de tempo total.

**Por que uma solução madura não responderia à mesma pergunta.** Um bloqueador comum, um contador
de tempo de tela ou o painel nativo do sistema operacional aplicam sempre a mesma barreira. Eles
podem medir quanto o uso caiu, mas não conseguem, por construção, separar o efeito da barreira do
efeito da familiaridade com aquela barreira específica — que é exatamente a variável em disputa. A
condição (c) só existe se a forma variar, e nenhum produto maduro varia a forma de propósito.

**O que os participantes farão.** Escolher um aplicativo-alvo; usar o telefone normalmente por 12
semanas; responder uma pergunta por dia; e — isto é parte do desenho, não ruído — poder desligar a
intervenção quando quiserem, com o desligamento registrado como dado e não como abandono.

**Métrica e observação.** Primária: taxa de desistência por semana, por condição, com o teste da
diferença de inclinação entre a condição rotativa e as fixas. Secundárias: número de tentativas por
dia; número, duração e dia da semana das folgas; tempo até retomar o padrão declarado depois de uma
folga; proporção de dias classificados pelo próprio participante como uso deliberado.

**O que faria o pesquisador mudar de ideia.** Se a condição rotativa decair na mesma inclinação
das fixas, D2 perde o principal caminho prático e o efeito e4.1 sai do mapa: significa que o
decaimento não é familiaridade com a forma, e sim esgotamento do próprio mecanismo de fricção — e,
nesse caso, toda a política pública construída sobre lembrete e pausa está apostando em algo que
expira sozinho. Se, ao contrário, a condição (b) — saída fácil, sem atraso — superar as outras
duas e não decair, o resultado empurra a recomendação para o lado oposto do que o mercado de
formato vem fazendo: o que funciona não é a barreira, é tornar a desistência trivial, e todo o
investimento em ritual, hardware e humor estará mirando o componente errado.

## 11. Fontes

1. **Grüning, D. J.; Riedel, F.; Lorenz-Spreen, P. — "Directing Smartphone Use Through the
   Self-Nudge App one sec", resumo estendido, IC2S2, Copenhague, 2023** (versão do artigo publicado
   em PNAS 120(8), 2023). `https://laura.alessandretti.com/public/pdf_accepted/paper88.pdf` —
   sustenta os números de eficácia e, sobretudo, o decaimento: 280 participantes, seis semanas, 36%
   de desistência média, 43% na primeira semana, 32–34% a partir da sexta, 37% menos tentativas,
   57% menos consumo ao final. Confiabilidade alta para o efeito medido; o aplicativo estudado é
   comercial e um dos autores é da empresa, o que exige a ressalva de interesse.
2. **Haliburton, L.; Grüning, D. J.; Riedel, F.; Schmidt, A.; Terzimehić, N. — "A Longitudinal
   In-the-Wild Investigation of Design Frictions to Prevent Smartphone Overuse", CHI 2024.**
   `https://www.medien.ifi.lmu.de/pubdb/publications/pub/haliburton2024chi/haliburton2024chi.pdf` —
   sustenta a queda das tentativas ao longo do tempo, a queda da taxa de desistência (a fricção é
   atravessada mais vezes conforme fica familiar) e o padrão de folgas: mais de um quarto dos 1.039
   usuários tirou folga, duração típica de cerca de dois dias, início na sexta e retorno no domingo.
   Confiabilidade alta como estudo revisado por pares; mesma ressalva de interesse e amostra
   autosselecionada de usuários de um produto.
3. **Almoallim, S.; Sas, C. — "Toward Research-Informed Design Implications for Interventions
   Limiting Smartphone Use", JMIR Formative Research, abril de 2022.**
   `https://pmc.ncbi.nlm.nih.gov/articles/PMC9066336/` — sustenta que o repertório comercial é
   estreito (39 aplicativos e 17 protótipos; concentração em rastrear, monitorar e obstruir; 13% com
   cooperação social) e que falta fundamentação teórica e avaliação de eficácia. Confiabilidade alta
   para o mapeamento de funcionalidades; é revisão de 2022, portanto o inventário está defasado.
4. **Bhat, K. S.; Shi, J. M.; Song, W.; Yoo, D. W.; Saha, K. — "'In my defense, only three hours on
   Instagram': Designing Toward Digital Self-Awareness and Wellbeing", arXiv, setembro de 2025,
   revisto em janeiro de 2026.** `https://arxiv.org/abs/2509.21860` — sustenta que reduzir tempo de
   tela simplifica demais o problema e que o ganho observado veio da reflexão sobre a diferença
   entre uso estimado e uso real. Confiabilidade média: 25 participantes, duas semanas, sem revisão
   por pares confirmada.
5. **Al Jazeera — "Australia's under-16 social media ban failing, study shows", 3 de agosto de
   2026.** `https://www.aljazeera.com/news/2026/8/3/australias-under-16-social-media-ban-failing-study-shows-what-it-means`
   — sustenta os números do regulador eSafety: 81% dos menores de 16 usando redes três meses após a
   proibição, contra 86% antes; cerca de metade das contas mantidas sem verificação de idade; evasão
   por VPN, biometria falsa e migração de plataforma. Confiabilidade média-alta: imprensa de
   reputação reportando dado de regulador; o relatório original do eSafety não foi aberto aqui.
6. **Gunderson Dettmer — "California SB 243: New Compliance Requirements for Operators of AI
   'Companion Chatbots'".**
   `https://www.gunder.com/en/news-insights/insights/client-insight-california-sb-243-new-compliance-requirements-for-operators-of-ai-companion-chatbots/`
   — sustenta o conteúdo operativo da SB 243: notificação "pelo menos a cada três horas" para
   usuários que o operador sabe serem menores, deveres de divulgação, vigência em 1º/01/2026,
   relatório anual a partir de 1º/07/2027, ação individual com o maior valor entre dano efetivo e
   US$ 1.000 por violação. Confiabilidade média-alta: análise de escritório de advocacia, não o
   texto legal; a tentativa de abrir o texto oficial em `leginfo.legislature.ca.gov` retornou erro
   503 (ver seção 12).
7. **UNICEF Brasil — "Estatuto Digital da Criança e do Adolescente (ECA Digital)".**
   `https://www.unicef.org/brazil/estatuto-digital-da-crianca-e-do-adolescente-eca-digital` —
   sustenta as datas (sanção em 17/09/2025, vigência em 17/03/2026) e as obrigações centrais:
   configurações por padrão que evitem o uso compulsivo, limitação de recursos que estendam
   artificialmente o uso, vedação da autodeclaração de idade, privacidade no grau mais elevado por
   padrão. Confiabilidade alta como leitura institucional da lei; não substitui o texto legal.
8. **Parlamento Europeu — Legislative Train Schedule, ficha do Digital Fairness Act.**
   `https://www.europarl.europa.eu/legislative-train/theme-protecting-our-democracy-upholding-our-values/file-digital-fairness-act`
   — sustenta o estágio (anunciado para o 4º trimestre de 2026), o alvo declarado (dark patterns,
   design viciante, personalização injusta) e o encerramento da consulta pública em 24/10/2025, com
   posições opostas entre consumidores e plataformas. Confiabilidade alta: fonte institucional do
   próprio legislador.
9. **International AI Safety Report 2026, presidido por Yoshua Bengio, fevereiro de 2026.**
   `https://arxiv.org/pdf/2602.21012` — sustenta a existência documentada de dependência emocional
   em um subconjunto de usuários, o número de 0,15% dos usuários ativos semanais e 0,03% das
   mensagens (medida da OpenAI, marcada como fonte corporativa no próprio relatório), a correlação
   entre indicadores de dependência e uso intenso, e a ressalva de que a evidência é emergente e
   mista. Confiabilidade alta como síntese internacional com painel de mais de trinta países; o
   número específico é de origem corporativa e está assim sinalizado.
10. **MIT Media Lab — "ChatGPT may be making us lonelier", 28 de março de 2025.**
    `https://www.media.mit.edu/articles/chatgpt-may-be-making-us-lonelier/` — sustenta a correlação
    entre uso diário elevado e maior solidão, dependência e uso problemático, e a ressalva explícita
    de que causalidade não pôde ser estabelecida. Confiabilidade média-alta: divulgação institucional
    de estudo próprio, em colaboração com a empresa cujo produto é estudado.
11. **Special Projects — página do projeto Aperture.**
    `https://specialprojects.studio/project/aperture/` — sustenta que Aperture é conceito de 2025,
    finalista do Innovation by Design 2025, em coleta de interesse e não à venda, e descreve o
    mecanismo de fricção física do virar da capa. Confiabilidade média: é a página do próprio
    estúdio, portanto fonte interessada; serve para estabelecer status do projeto, não eficácia.
12. **GitHub — tópico `digital-wellbeing`.** `https://github.com/topics/digital-wellbeing` —
    sustenta o contrassinal do código público: 429 repositórios, com os dez mais visíveis sendo
    launchers minimalistas, bloqueadores e filtros de feed, e nenhum deles envolvendo hardware, NFC
    ou IA. Confiabilidade média como proxy de atividade de desenvolvimento; não mede adoção nem
    representa projetos fechados.
13. **TechCrunch — "TikTok launches an ad-free subscription plan in the UK", 11 de maio de 2026.**
    `https://techcrunch.com/2026/05/11/tiktok-launches-an-ad-free-subscription-plan-in-the-uk/` —
    sustenta o preço (£3,99/mês), o mercado (Reino Unido), a justificativa declarada e o fato de que
    a assinatura remove anúncios e uso de dados publicitários sem nada dizer sobre a recomendação.
    Confiabilidade média-alta: imprensa especializada reportando anúncio de empresa.
14. **Poder360 — "Brasil é o 2º país com maior tempo de tela, diz pesquisa".**
    `https://www.poder360.com.br/tecnologia/brasil-e-o-2o-pais-com-maior-tempo-de-tela-diz-pesquisa/`
    — sustenta o dado brasileiro: cerca de nove horas diárias de tela, 56,6% das horas acordado, ~5h
    só de celular, segunda posição entre 45 países. Confiabilidade média: imprensa reportando
    levantamento do Electronics Hub sobre dados do DataReportal; a série é de 2023 e é a mais recente
    localizada, o que torna o número indicativo, não corrente.

## 12. Anexo — o levantamento bruto

### Candidatos descartados como disrupção-raiz

| Candidato | Maturidade | Potencial | Por que não é raiz |
|---|---|---|---|
| Contador de tempo de tela, bloqueador de aplicativo, modo não perturbe | **maduro** | baixo | Pré-instalado por Google e Apple, embarcado pelas redes; concentra o repertório comercial [3]. Entra como **antecedente maduro**. |
| Escala de cinza | **maduro** | baixo | Intervenção de fricção com evidência, disponível como ajuste nativo em ambos os sistemas operacionais. Antecedente. |
| Hardware de desconexão de função única (telefone minimalista) | emergente | **médio** | Existe mercado real e produto à venda, mas premium e de nicho; não altera duas dimensões estruturais em escala. Vira **sinal** e aparece no cenário provável como fricção de autor (e1.1.1). |
| Chave física de desbloqueio (tag NFC) | emergente | médio | É variação de formato sobre a capacidade madura de bloqueio; o mecanismo causal é o mesmo (obstáculo), com custo de aquisição maior. **Sinal.** |
| Capa de fricção física (`Aperture`) | **experimental** | médio | Conceito de 2025, não à venda [11]. Depende de adoção de acessório, que é a barreira que o próprio estúdio aponta. **Sinal** — e o mais visível deles. |
| Telefone de papel, caixa trancável, ritual impresso | experimental | baixo | Escala limitada por construção; o valor é demonstrativo e retórico. Entra como repertório de formato, não como raiz. |
| Sátira e crítica como formato de intervenção | experimental | baixo | Muda o discurso, não a arquitetura. Não passa no teste de duas dimensões. |
| Proibição etária de acesso | emergente | médio | Já tem resultado medido e ele é fraco [5]; e o efeito principal que produz — empurrar o debate para design — está capturado em e2.2 e e2.2.1. |
| Assinatura sem anúncios | **maduro** | baixo | Remove publicidade, não engajamento; nada indica mudança na recomendação [13]. Reclassificado como **contrassinal** e movido para wildcard. |
| Fricção no ambiente de trabalho com agente | experimental | médio | Evidência escassa (dois repositórios citados pela varredura da turma, sem adoção medida). Não vira raiz, mas sustenta o efeito e8 e um sinal fraco. |
| Verificação de idade | emergente | alto | Tem potencial alto, mas é **tecnologia habilitadora** de D1, não disrupção autônoma no recorte deste tema. Aparece como e2. |

### Caminhos causais cortados

- **"Fricção obrigatória → queda mensurável de tempo de tela agregado."** Cortado: não foi possível
  preencher o mecanismo. A evidência disponível mostra queda de uso em quem escolhe instalar a
  intervenção [1][2], não em quem a recebe imposta, e a única imposição em escala já medida não
  moveu o agregado [5]. Sem mecanismo, sem aresta.
- **"Mercado de hardware de desconexão cresce → o celular se fragmenta em objetos de função
  única."** Cortado na terceira ordem. A pergunta estava na descrição do tema e é boa, mas o
  mecanismo exige que o custo do objeto adicional caia abaixo do custo de conviver com o celular —
  e os preços observados vão na direção oposta (o produto de referência é premium). Mantido no
  anexo como hipótese alternativa, não na roda.
- **"Plataforma adota fricção por padrão → ganha usuários."** Não cortado, mas rebaixado de efeito
  a **wildcard**, porque exige inversão de incentivo econômico sem nenhum caso observado.

### Buscas sem resultado ou com acesso negado

- Texto oficial da SB 243 em `leginfo.legislature.ca.gov`: HTTP 503. Substituído pela análise de
  escritório de advocacia [6], com a limitação declarada na própria fonte.
- `pnas.org` e `dl.acm.org`: HTTP 403 nas páginas dos artigos. Resolvido por versões abertas dos
  mesmos trabalhos [1][2], lidas integralmente em PDF.
- Página institucional da OpenAI sobre uso afetivo: HTTP 403. O dado correspondente foi obtido pela
  citação no relatório internacional [9] e pela divulgação do MIT Media Lab [10], ambos com a
  marcação de que a medida é da própria empresa.
- Não foi localizada nenhuma medida pública, independente e posterior à vigência das leis de 2026,
  sobre efeito de fricção obrigatória em produto de massa. **Esta é a lacuna central do mapa** — e é
  a razão de a confiança geral ser média e não alta.
- Não foi localizada nenhuma métrica de adoção de `Aperture`, `Unpluq`, `Brick` ou equivalentes que
  não viesse do próprio fornecedor; por isso o tamanho do mercado de fricção de formato aparece aqui
  apenas por proxy (repositórios públicos, cobertura de imprensa), nunca como número.

### Contrassinais registrados

1. Decaimento do efeito da fricção com familiaridade [1][2] — contraria toda a roda, e está
   explicitado na seção 7.
2. Código público dominado por bloqueador e launcher [12] — contraria a tese de migração de formato
   que a descrição do tema apresenta como estabelecida.
3. Proibição australiana sem efeito relevante [5] — contraria a premissa de que norma produz
   comportamento.
4. Literatura recomendando abandonar a redução de tempo como objetivo [3][4] — contraria a métrica
   sobre a qual quase toda a regulação de 2026 foi construída.
5. Evidência sobre impacto psicológico de IA classificada como emergente e mista pelo próprio
   relatório internacional [9] — contraria a urgência implícita em D3.

### Hipóteses alternativas não desenvolvidas

- **A fricção como estética, não como função.** Existe a possibilidade de que a onda de formato
  (papel, capa, humor) seja melhor explicada como movimento estético — um gosto por objetos que
  resistem — do que como intervenção comportamental. Se for isso, o mercado é de design e não de
  bem-estar, e a medida certa de sucesso não é redução de uso. Não foi desenvolvida por falta de
  evidência que a distinga da hipótese principal.
- **O deslocamento do problema para o trabalho.** Se a pressão atencional de 2031 vier da jornada
  com agente e não do lazer, o campo inteiro migra de saúde pública para saúde ocupacional, e os
  atores mudam (sindicato, empregador, seguradora, não plataforma e regulador de consumo). Está
  parcialmente capturada em e8, e merecia um mapa próprio.

### Observações que não entraram no mapa final

- A descrição do tema afirma que o custo atencional das plataformas "virou pauta pública". Isso é
  verdadeiro e agora é mensurável de outra forma: virou pauta **legislativa**, em pelo menos quatro
  jurisdições, o que é um estágio diferente e mais consequente.
- A varredura da turma aplicou como critério "reprove clone genérico de bloqueador; aprove só o que
  muda o formato da intervenção". O critério é bom para curadoria e enviesa o levantamento: ele
  garante que o resultado da busca seja formato, o que impede que a busca teste se o formato é onde
  a mudança está. A evidência em código público [12] sugere que não é.
- O achado de que as folgas começam na sexta e terminam no domingo [2] é o dado mais útil e menos
  explorado de toda a literatura lida. Ele descreve a fricção como algo que convive com a semana de
  trabalho, e não como tratamento contínuo. Não virou efeito na roda porque não consegui derivar
  dele uma consequência estrutural com mecanismo claro — mas é a primeira coisa que eu testaria.
