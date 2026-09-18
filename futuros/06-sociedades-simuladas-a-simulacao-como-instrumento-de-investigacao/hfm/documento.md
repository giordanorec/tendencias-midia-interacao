---
tema: "Sociedades simuladas: a simulação como instrumento de investigação"
slug: sociedades-simuladas-a-simulacao-como-instrumento-de-investigacao
autor_login: hfm
zona_de_interesse: Simulação e mundos
data: 2026-09-18
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 12
efeitos_ordem_3: 15
tecnologias_citadas: [Generative Agents, OASIS, AgentSociety, Concordia, PIMMUR, silicon sampling, synthetic users, agent-based modeling, LLM-based agent simulation, Simile, Qualtrics, Ifop DataBoost AI, Covasim]
fontes: 13
confianca: media
experimento: Bancada de ensaio de feed — uma rede social minúscula povoada por agentes, em que a turma troca a regra de recomendação e mede o que muda, com o mesmo cenário rodado duas vezes sob desenhos de prompt opostos
skill_usada: futurizacao-hfm
publico_ok: false
---

## 1. Resumo

Colocar uma sociedade de agentes de linguagem num ambiente controlado deixou de ser
demonstração e passou a ser instrumento: OASIS declara até um milhão de agentes numa rede social
sintética com recomendador embutido, AgentSociety relata mais de dez mil agentes e cinco milhões
de interações como bancada para experimentos de política pública, e a biblioteca Concordia, do
DeepMind, diz explicitamente servir para avaliar serviços digitais reais simulando usuários. A
ruptura para quem projeta mídia e interação é que o ciclo de design ganha um estágio de ensaio
antes do contato com gente — testar o algoritmo de recomendação, a política de moderação ou a
dinâmica de desinformação antes de lançá-los. Só que a mesma literatura que constrói esses
laboratórios já está desmontando seus resultados: uma auditoria de 350 artigos com 576 estudos
encontrou que metade dos prompts predetermina o desfecho, e que ao reaplicar princípios mínimos
de desenho os "comportamentos emergentes" relatados frequentemente somem ou se invertem. O mapa
que segue aposta que a disputa dos próximos cinco anos não é sobre escala de simulação — essa
está resolvida — e sim sobre **quem tem autoridade para dizer que a sociedade sintética se parece
com a real**. Daí derivam três consequências incômodas: a validação vira o bem escasso, o painel
humano vira ativo caro em vez de insumo barato, e o viés do modelo de linguagem passa a operar
como viés de amostragem em decisões de produto e de política.

## 2. O tema

**O objeto.** Uma sociedade simulada, aqui, é um ambiente configurável habitado por muitos
agentes movidos por modelo de linguagem — com memória, personalidade e conversa em linguagem
natural entre eles — que se afetam mutuamente e produzem dado analisável. Não é jogo e não é
ferramenta de produtividade. É instrumento de investigação: o que o túnel de vento é para a
aerodinâmica, a sociedade simulada pretende ser para a ciência social e para o design de
plataforma.

**Onde encosta em mídia e interação.** Em três lugares, todos de peso.

1. **O feed.** Uma rede social inteira povoada por agentes permite ligar e desligar regras de
   recomendação e observar o que acontece com difusão de informação, polarização e efeito manada
   — sem tocar em nenhum usuário. É a promessa mais direta: testar o algoritmo antes de lançá-lo.
2. **O usuário de pesquisa.** A mesma tecnologia produz "usuários sintéticos" que respondem
   entrevista, preenchem questionário e avaliam protótipo. Isso mexe diretamente no método de
   quem projeta interação.
3. **O mundo como material.** Configurar ambiente, papéis, escassez e regras é uma prática de
   design de mundo. Quem projeta interação passa a projetar também a arena onde ela é ensaiada.

**Por que merece mapa de futuro e não levantamento de estado da arte.** Porque a coisa
interessante não está na capacidade técnica, que já existe e está documentada, mas na cadeia de
consequências institucionais que ela abre e que ainda não se resolveu: se dá para simular uma
rede social antes de lançá-la, isso vira obrigação regulatória ou fica como conveniência de
produto? Se governos testam política em sociedade sintética, quem responde quando o resultado
está errado? Se o usuário sintético fica bom o bastante, o que separa pesquisa com pessoas de
pesquisa com simulação — e a ética de pesquisa se aplica a qual das duas? Um levantamento de
estado da arte responde "o que existe". Nenhuma dessas três perguntas é respondível assim.

**Onde passa a linha do emergente.** Modelagem baseada em agentes clássica é madura: regras
fixas, agentes sem linguagem, décadas de uso em epidemiologia, mobilidade urbana e economia. Não
entra como disrupção-raiz. O que é emergente é o agente com modelo de linguagem — memória,
personalidade, negociação em linguagem natural — operando na casa dos milhares a milhões. E o que
é **disruptivo** é mais estreito ainda: não a existência desses agentes, e sim o momento em que a
saída deles passa a ser aceita como **evidência** em decisão de produto, de plataforma ou de
política pública.

**Fronteira com os vizinhos.** Personagem autônomo dentro de jogo é outro tema; mercado de
máquinas com dinheiro real é outro tema; agente com corpo no mundo físico é outro tema. Aqui o
objeto é a simulação social **como método**.

## 3. Onde isso está hoje

### 3.1 O que já existe e funciona

**O experimento fundador.** Park et al. colocaram 25 agentes numa cidade sandbox inspirada em
The Sims, com arquitetura de observação, planejamento e reflexão. A partir de uma única semente
dada por um usuário — um agente querer dar uma festa de Dia dos Namorados —, os agentes
espalharam convites ao longo de dois dias, fizeram conhecidos novos, se convidaram para ir
juntos e coordenaram a chegada. O artigo é de abril de 2023, com versão final em agosto do mesmo
ano, e foi apresentado no UIST '23. A avaliação foi por ablação dos componentes da arquitetura,
com avaliadores humanos julgando credibilidade — não por comparação com dado social real.
*(fato, fonte 1)*

**A escala.** OASIS, do CAMEL-AI, é um simulador de mídia social de código aberto que declara
suportar até um milhão de agentes, com ambiente dinâmico, 21 a 23 ações possíveis (seguir,
comentar, repostar) e **sistemas de recomendação embutidos**, por interesse e por pontuação de
popularidade. Reproduz difusão de informação, polarização de grupo e efeito manada em ambientes
modelados a partir de X e Reddit. Um achado declarado no próprio artigo importa mais que a
escala: populações maiores geraram dinâmicas de grupo mais acentuadas e opiniões mais diversas —
ou seja, o tamanho da simulação altera o resultado observado. Publicado em novembro de 2024, com
revisões posteriores; 23 autores. *(fato, fontes 2 e 3)*

**O laboratório de política.** AgentSociety, do grupo da Tsinghua, relata gerar a vida social de
mais de dez mil agentes e cinco milhões de interações, com agentes dotados de emoções,
necessidades, motivações e cognição do ambiente, derivadas de teoria psicológica e econômica. É
explicitamente apresentado como bancada para experimento social computacional em cinco frentes:
polarização, difusão de mensagem inflamatória, efeito de renda básica universal, choque externo
do tipo furacão, e sustentabilidade urbana. E declara suportar os métodos clássicos da pesquisa
social — survey, entrevista e intervenção — aplicados aos agentes. Fevereiro de 2025, revisado em
abril de 2026. *(fato, fonte 4)*

**A infraestrutura de uso industrial.** Concordia, do Google DeepMind, é uma biblioteca de
modelagem generativa baseada em agentes cujo padrão de interação vem do RPG de mesa: um Game
Master simula o ambiente, traduz a ação declarada em linguagem natural pelo agente e verifica sua
plausibilidade física ou digital. As aplicações declaradas pelos próprios autores são três, e a
terceira é a que importa aqui: pesquisa científica, **avaliação de desempenho de serviços
digitais reais**, e geração de dado sintético simulando usuários. Dezembro de 2023. *(fato, fonte
5)*

**O mercado de respondente sintético, já operando.** A Gallup, com noventa anos de pesquisa de
opinião, firmou parceria com a startup Simile, fundada por pesquisadores de Stanford, para criar
agentes treinados a partir de entrevistas em profundidade com cerca de mil integrantes de seu
painel probabilístico. A Qualtrics oferece painéis sintéticos, declarando que de 5% a 10% das
respostas vêm de modelos públicos e mais de 95% de dados próprios. O instituto francês Ifop
transformou uma amostra de 116 entrevistas num grupo ampliado de 580 com o produto DataBoost AI.
A Gallup declarou salvaguarda explícita: respostas simuladas não entram nas estimativas
populacionais publicadas, e o compromisso é nunca apresentar resposta artificial como humana.
Matéria de 9 de junho de 2026. *(fato, fonte 11)*

### 3.2 O que existe e não funciona — ou funciona menos do que se anuncia

Esta subseção é o contrapeso da anterior e é a parte mais bem documentada do tema.

**A auditoria que desmonta a emergência.** O trabalho dos princípios PIMMUR fez uma auditoria
pré-registrada de 350 artigos recentes, contendo 576 estudos de simulação com modelos de
linguagem, em quatro bases (Scopus, IEEE Xplore, ACM DL e arXiv). Formaliza seis requisitos
metodológicos — Profile (agentes heterogêneos), Interaction (interação natural, não roteirizada),
Memory (memória retida entre turnos), Minimal-control (o prompt não pode predeterminar o
desfecho), Unawareness (o agente não pode inferir a hipótese do experimento) e Realism (validação
contra dado do mundo real, não contra teoria simplificada). Dois números: **50,6% dos prompts
impõem restrições que predeterminam o resultado**, e modelos de fronteira identificam corretamente
qual experimento social está sendo rodado em cerca de metade dos casos — isto é, o agente sabe o
que se espera dele. E o achado central: ao reproduzir cinco experimentos representativos com os
princípios aplicados, **os fenômenos coletivos relatados frequentemente desaparecem ou se
invertem**. Setembro de 2025, revisado até setembro de 2026. *(fato, fonte 7)*

**O problema da persona média.** Um position paper aceito no ICML 2026 sustenta que a tendência
dos modelos de produzir saída homogênea — agir como "persona média" — limita fundamentalmente a
capacidade de capturar a diversidade comportamental de que a dinâmica social depende. A
recomendação é técnica e severa: casar a profundidade da validação com a exigência de
heterogeneidade da pergunta, **reportar variância junto com alinhamento de média**, e restringir
a conclusão a padrão qualitativo coletivo quando a variância for insuficiente. Junho de 2025,
versão atual de julho de 2026. *(fato, fonte 6)*

**A lavagem de viés.** Na cobertura do mercado de respondente sintético, Sean Westwood
(Dartmouth) resume o mecanismo: a amostragem de silício "lava" vieses e os converte em dado,
amplificando estereótipos do material de treino. Jason Miklian (Oslo) aponta o outro lado: dado
sintético reproduz a sabedoria convencional e falha justamente em produzir achado surpreendente —
que é o motivo de se fazer pesquisa. *(fato reportado, fonte 11)*

**O teste de campo em pesquisa de usuário.** A Nielsen Norman Group rodou três estudos comparando
usuário sintético com usuário real e publicou o resultado em junho de 2024. Os sintéticos
relatavam comportamento idealizado — 100% de conclusão de curso, enquanto usuários reais
abandonavam depois de três dos sete —, listavam sete fatores de engajamento sem priorização nem
profundidade, e aprovavam ideias conceituais sem crítica genuína. A recomendação: servem para
pesquisa de gabinete, geração de hipótese, piloto de roteiro de entrevista e proto-persona; não
servem para validar conceito, pesquisar população de nicho ou decidir produto. *(fato, fonte 10)*

**A ausência de validação aceita.** Hullman, Broska, Sun e Shaw (2026) organizam o campo em três
estratégias de validação e mostram que a mais usada é a mais frágil: a heurística
"validar-e-então-simular", que usa alinhamento observado num cenário para justificar uso em
cenário vizinho, **não consegue garantir ausência de viés sistemático** e é inadequada para
pesquisa confirmatória. As duas alternativas são calibração estatística com dado humano, que
produz estimador não-enviesado sob condições, e "simular-e-então-validar", em que a simulação só
serve para descobrir hipótese a ser testada com gente. O título é irônico e resume a questão
ética: *This human study did not involve human subjects*. *(fato, fonte 9)*

### 3.3 Quem está construindo, e o formato do mercado

Do lado acadêmico e de laboratório corporativo: Stanford e Google (Generative Agents), CAMEL-AI
(OASIS), Tsinghua (AgentSociety), Google DeepMind (Concordia). Do lado comercial de pesquisa:
Gallup com Simile, Qualtrics, Ifop.

Do lado amador e de hobby, o sinal é escasso e vale medir. O aluno que fez a varredura da turma
mediu 7.776 anúncios em dois dos maiores diretórios comerciais de ferramentas de IA e encontrou
**dois** sobre simulação — a leitura dele é que o diretório vende produtividade, e simulação é
instrumento de investigação, não produto de assinatura. Uma checagem independente feita aqui, na
tag `social-simulation` do itch.io, devolveu nove títulos, nenhum deles mencionando agentes de
modelo de linguagem: são jogos de simulação social no sentido clássico do gênero. *(fato
verificado, fonte 13; e fato relatado pela turma, não verificado independentemente)*

**Leitura do conjunto (inferência).** Há uma assimetria clara: a capacidade de construir a
sociedade simulada está madura e barata de reproduzir, enquanto a capacidade de **defender** o
que ela produz não existe ainda como prática estabelecida. Não é o caso comum de tecnologia
promissora à espera de escala. É o caso inverso: escala pronta à espera de método.

### 3.4 O custo, que quase nunca aparece na conversa

O repositório do OASIS publica uma tabela de consumo de tokens justamente para que se estime o
gasto antes de rodar, e o exemplo documentado é instrutivo: **100 agentes em um único passo de
tempo consomem cerca de 335.600 tokens de entrada**. Licença Apache 2.0, instalável por PyPI,
operando por API de modelo — não localmente. *(fato, fonte 3)*

Multiplicar isso por milhares de passos e milhares de agentes é o que separa a demonstração do
experimento. É também o que determina quem poderá rodar a simulação grande — e essa é uma
consequência de primeira ordem que o mapa registra adiante.

### 3.5 Para onde o regulador está olhando

Sob o Digital Services Act, plataformas com mais de 45 milhões de usuários mensais na União
Europeia devem fazer avaliação anual de risco sistêmico em quatro categorias, incluindo efeito
sobre processo eleitoral e discurso cívico, e o sistema de recomendação está no centro da
atenção. A análise do Knight-Georgetown Institute, de maio de 2025, recomenda que a avaliação
julgue sistematicamente o papel do **design** da plataforma no risco, com métricas e metodologias
específicas incorporadas ao processo de auditoria, e chega a sugerir que a avaliação considere
resultados agregados de **experimentação de design**. O que esse texto **não** faz — e a
verificação foi explícita — é mencionar simulação ou teste pré-lançamento: o foco declarado é
avaliação retrospectiva e auditoria de sistema já implantado. *(fato, fonte 12)*

Essa lacuna é exatamente o vão em que a disrupção 1 se instala.

## 4. As disrupções-raiz

Três. Uma quarta candidata foi considerada e descartada, e o registro está na seção 12.

Critério aplicado, conforme o método: só entra o que tem sinal observável hoje, uma ruptura de
papel/relação/custo/prática, uma condição ainda não resolvida, e cadeia causal plausível.
Tecnologia madura não entra.

### D1 — O ensaio em população sintética entra no ciclo de design de plataforma, antes do usuário

**O que rompe.** A ordem canônica de quem projeta mídia interativa é: protótipo → teste com
poucas pessoas → lançamento → medição em produção. A ruptura é inserir, entre protótipo e
lançamento, um estágio de ensaio em sociedade sintética — no qual se liga e desliga a regra de
recomendação, muda-se a política de moderação, injeta-se uma narrativa falsa e observa-se a
difusão. Rompe porque desloca o momento do erro: fenômenos que só apareciam depois de expor gente
real passam a ser, em princípio, antecipáveis em bancada. E rompe a relação: o comportamento
coletivo dos usuários deixa de ser exclusivamente *medido* e passa a ser *ensaiado*.

**Por que agora e não há cinco anos.** Três condições se juntaram. A primeira, o agente com
linguagem: em 2023 vinte e cinco agentes coordenaram uma festa sem roteiro, o que modelagem
baseada em regras não produz (fonte 1). A segunda, a escala com recomendador dentro: OASIS traz o
ambiente de rede social com sistema de recomendação por interesse e por popularidade — não é uma
sociedade genérica, é um feed (fontes 2 e 3). A terceira, a intenção declarada de uso industrial:
Concordia diz, no próprio artigo, servir para avaliar serviços digitais reais simulando usuários
(fonte 5). Nenhuma das três existia em 2021.

**O que ainda falta acontecer.** Falta o elo que transforma ensaio em evidência aceita: um
critério público de quando o resultado do ensaio conta. O texto regulatório mais próximo — a
avaliação de risco sistêmico do DSA — pede método e métrica, mas fala de sistema já implantado e
não menciona teste pré-lançamento (fonte 12). Enquanto o ensaio não for admissível, ele continua
sendo instrumento interno de convencimento de equipe, o que é bem menos do que o túnel de vento.

### D2 — A validação, e não a simulação, vira o objeto de disputa e o gargalo

**O que rompe.** A pergunta deixa de ser "consigo simular?" e passa a ser "quem diz que esta
sociedade sintética se parece com alguma sociedade real?". Rompe porque desloca o poder: sai de
quem tem o simulador e vai para quem tem o dado humano de referência e o argumento metodológico.
Rompe também o vocabulário de produto: "comportamento emergente" deixa de ser adjetivo de
marketing e volta a ser alegação que exige desenho experimental.

**Por que agora e não há cinco anos.** Porque a crítica saiu do plano do comentário e virou
medida. A auditoria PIMMUR não diz que simulação é frágil em abstrato: mediu 350 artigos e 576
estudos, mostrou que metade dos prompts predetermina o desfecho, e — o ponto decisivo — reproduziu
cinco experimentos com os princípios aplicados e viu os fenômenos coletivos sumirem ou se
inverterem (fonte 7). O position paper do ICML 2026 nomeia o mecanismo subjacente, a persona
média, e propõe exigência concreta: reportar variância junto com média (fonte 6). E Hullman et
al. mostram que a estratégia de validação mais usada é justamente a que não garante ausência de
viés sistemático (fonte 9). Três trabalhos independentes, todos de 2025–2026, todos com critério
aplicável. Em 2021 não havia nem os estudos a auditar.

**O que ainda falta acontecer.** Falta a institucionalização: um conjunto de exigências que
periódico, regulador ou comprador cobre de fato. Hoje os critérios existem como recomendação de
artigo. O dia em que um deles virar condição de publicação ou de contrato é o dia em que a
disrupção se concretiza — e é a hipótese principal do mapa.

### D3 — O sujeito de pesquisa deixa de ser escasso

**O que rompe.** A economia inteira da pesquisa de usuário e de opinião se apoia em uma escassez:
gente custa caro, demora, recusa, e por isso a amostra é pequena e a pergunta é disputada. Quando
o respondente passa a ter custo marginal próximo de zero e disponibilidade ilimitada, rompe-se a
relação entre **custo da pergunta** e **cuidado com a pergunta**. Rompe também a fronteira
normativa: pesquisa com pessoas tem comitê de ética, consentimento e responsabilidade; pesquisa
com agentes não tem nada disso, e produz um objeto com aparência de resultado de pesquisa.

**Por que agora e não há cinco anos.** Porque saiu do laboratório e entrou no mercado com nome e
sobrenome: Gallup com Simile e mil entrevistas de painel probabilístico como base, Qualtrics com
painéis sintéticos declarando a proporção de modelo público, Ifop expandindo 116 entrevistas em
580 (fonte 11). E porque a contestação também chegou com medida: os três estudos comparativos da
NN/g, com o contraste de 100% de conclusão declarada pelo sintético contra o abandono real depois
do terceiro curso, são de 2024 (fonte 10). O mercado e a refutação nasceram quase juntos, o que é
raro e é o que torna este ponto interessante.

**O que ainda falta acontecer.** Falta o caso público de dano — uma decisão de peso tomada sobre
respondente sintético e depois desmentida pelo mundo. Até lá, a salvaguarda é voluntária e
declarada pelo próprio vendedor, como no compromisso da Gallup de não usar resposta simulada em
estimativa populacional publicada (fonte 11). Salvaguarda voluntária de vendedor é exatamente o
tipo de arranjo que costuma durar até o primeiro incidente.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O ensaio em população sintética entra no ciclo de design de plataforma, antes do usuário
    efeitos:
      - id: e1
        ordem: 1
        efeito: O ciclo de design de plataforma ganha um estágio de ensaio em sociedade sintética entre o protótipo e o lançamento
        sinal: medio
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Equipes de produto passam a versionar o ambiente de simulação como versionam o código, e o cenário vira artefato entregável
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A documentação de um produto de mídia passa a incluir o relatório do ensaio sintético, como o laudo de colisão acompanha o carro
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: A formação em design de interação incorpora leitura e contestação de saída de simulação como competência básica
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Reguladores e auditores passam a aceitar o ensaio sintético como peça da avaliação de risco sistêmico de plataforma
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Forma-se um mercado de laboratórios independentes de simulação social, análogo às casas de auditoria
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O custo de computação por rodada substitui o custo de recrutamento como principal restrição da pesquisa de plataforma
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: A simulação em escala grande se concentra em quem tem infraestrutura, e a maioria das equipes roda versões pequenas e enviesadas
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: A assimetria de escala vira assimetria de argumento, e quem simula mais agentes domina a conversa pública sobre efeito de plataforma
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Modelos pequenos e baratos passam a ser escolhidos por preço, e o agente barato vira o agente padrão da simulação social
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Os achados do campo passam a refletir o comportamento dos modelos baratos mais do que o das pessoas que eles representam
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: A validação, e não a simulação, vira o objeto de disputa e o gargalo
    efeitos:
      - id: e3
        ordem: 1
        efeito: Publicar resultado de simulação passa a exigir declarar variância, grau de controle do prompt e desconhecimento da hipótese pelos agentes
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Parte dos comportamentos emergentes já publicados é reclassificada como artefato de método
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A palavra emergência perde valor retórico no discurso de produto e volta a ser alegação que precisa de desenho experimental
                sinal: medio
                prazo: 2031
                confianca: media
          - id: e3.2
            ordem: 2
            efeito: Surge a figura do auditor de simulação, que não roda o modelo e sim contesta o desenho de quem rodou
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Contestar uma simulação torna-se ato processual, com direito de recurso para quem é afetado pelo resultado
                sinal: fraco
                prazo: 2032
                confianca: baixa
              - id: e3.2.2
                ordem: 3
                efeito: A validação contra dado humano vira bem escasso, e quem detém o painel real ganha poder sobre quem detém o simulador
                sinal: medio
                prazo: 2032
                confianca: media
      - id: e4
        ordem: 1
        efeito: A pergunta sobre a qual população real a população sintética corresponde passa a ser respondida por escrito, com responsável nomeado
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: A escolha do modelo de linguagem vira decisão de amostragem, e o viés do modelo entra na ficha técnica do estudo
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Populações mal representadas nos dados de treino passam a ser mal representadas nas políticas testadas por simulação
                sinal: medio
                prazo: 2032
                confianca: media
          - id: e4.2
            ordem: 2
            efeito: Comunidades simuladas reivindicam participação no desenho da simulação que as representa
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Consentimento coletivo para ser modelado entra no vocabulário de ética de pesquisa ao lado do consentimento individual
                sinal: fraco
                prazo: 2033
                confianca: baixa
  - disrupcao: O sujeito de pesquisa deixa de ser escasso
    efeitos:
      - id: e5
        ordem: 1
        efeito: A pesquisa exploratória com usuário migra para população sintética e a pesquisa com pessoas se concentra na etapa confirmatória
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: O painel humano deixa de ser insumo commodity e vira ativo caro, mantido para calibrar o sintético
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Participar de pesquisa passa a ser remunerado como trabalho especializado e não como favor de dez minutos
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Equipes que nunca conversaram com um usuário real passam a decidir produto com base em relato sintético
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: O repertório de surpresa do campo encolhe e os produtos convergem para o que o modelo já considerava plausível
                sinal: medio
                prazo: 2032
                confianca: media
      - id: e6
        ordem: 1
        efeito: O agente sintético entra na coleta de opinião pública e eleitoral como camada de ampliação de amostra
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Institutos de pesquisa precisam declarar em cada número publicado a fronteira entre resposta humana e resposta simulada
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A confiança na pesquisa de opinião passa a depender de rastreabilidade de origem e não de tamanho de amostra
                sinal: medio
                prazo: 2032
                confianca: media
          - id: e6.2
            ordem: 2
            efeito: Campanhas e plataformas testam mensagem em eleitorado sintético antes de mostrá-la a qualquer pessoa
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: A regulação eleitoral passa a tratar teste em população sintética como gasto de campanha declarável
                sinal: fraco
                prazo: 2033
                confianca: baixa
              - id: e6.2.2
                ordem: 3
                efeito: A distinção entre pesquisar a opinião e fabricá-la fica mais difícil de sustentar publicamente
                sinal: medio
                prazo: 2033
                confianca: baixa
```

### O que o bloco não consegue dizer

**A roda esconde que D2 é condição das outras duas.** O bloco YAML apresenta três disrupções em
paralelo, como se fossem independentes. Não são. Se a disputa por validação (D2) se resolver a
favor do rigor, D1 fica mais lenta e mais confiável, e D3 fica confinada à etapa exploratória, que
é onde a NN/g já a coloca. Se D2 se resolver por omissão — ninguém cobra, todo mundo publica —
D1 e D3 aceleram e ficam perigosas. Não é uma bifurcação pequena: é a variável que governa o mapa
inteiro, e a estrutura hierárquica da roda não tem onde registrá-la.

**A cronologia mente um pouco.** Os prazos são a data em que o efeito estaria visível, não em que
começa. Vários já começaram: e3 tem artigo com critério publicado desde 2025 (fonte 7), e6 tem
produto vendido desde 2026 (fonte 11). "Prazo 2028" ali significa "deixou de ser exceção".

**Duas cadeias foram interrompidas por falta de evidência, e o registro está na seção 12.** Uma
sobre uso militar e de segurança pública de sociedade sintética; outra sobre o efeito da simulação
na formação de cientista social. Nos dois casos não achei sinal observável que sustentasse
primeira ordem, e forçar ramificação decorativa é pior que admitir o vão.

**A roda não tem coluna para reversibilidade.** e3.1 — a reclassificação de emergência como
artefato — é um efeito que *desfaz* outros. Um efeito corretivo aparece na mesma árvore que
efeitos expansivos, com o mesmo formato, e o leitor não vê que ele empurra na direção contrária.

## 6. Sinais fracos e wildcards

### Sinais fracos

**O denominador do mercado.** Dois anúncios de simulação em 7.776 ferramentas de IA em dois
grandes diretórios comerciais, na medição da turma; nove jogos na tag `social-simulation` do
itch.io, nenhum citando agente de modelo de linguagem, na checagem independente feita aqui (fonte
13). O sinal fraco não é a ausência: é o que a ausência diz sobre o **formato**. Diretório vende
assinatura mensal para resolver tarefa. Sociedade simulada não resolve tarefa — produz pergunta.
Se em 2029 esse denominador mudar, não será porque a simulação ficou melhor, mas porque alguém
descobriu como cobrar por ela; e o que se cobra molda o que se constrói.

**A simulação que roda na máquina de quem a escreveu.** A turma relata uma vila que roda inteira
no navegador, sem rede — não verifiquei. Se for verdade, o sinal é sobre custo: hoje o número
documentado é 335.600 tokens de entrada para cem agentes em um passo (fonte 3), o que confina a
simulação séria a quem paga API. Simulação barata e pessoal muda quem faz a pergunta — e é a
diferença entre um instrumento de laboratório e um instrumento de argumento público.

**A entrevista virando ação do agente.** O repositório do OASIS registra, entre as adições
recentes de 2026, ações de entrevista e suporte a grupo de conversa (fonte 3). É pequeno e é
revelador: o simulador está sendo adaptado para responder aos **métodos** da pesquisa social, não
só para reproduzir fenômeno. Combina com AgentSociety declarando suporte a survey, entrevista e
intervenção (fonte 4). O instrumento está se moldando para caber no protocolo de quem valida — o
que acelera D3 sem resolver D2.

**A pré-condição que ninguém pediu ainda.** O trabalho de Berkeley propõe que simular população
sem participação dela seja tratado como inadmissível, com envolvimento constitutivo e não
consultivo, e sugere "relatórios de desenvolvimento e implantação de simulação" (fonte 8). É
abril de 2026 e não tem força nenhuma hoje. Sinal fraco porque é a semente de e4.2 e e4.2.1 — o
vocabulário de consentimento coletivo — e porque propostas desse tipo costumam ficar dormentes
até um incidente.

### Wildcards

**W1 — Um resultado de simulação é usado como evidência em decisão pública de peso, e está
errado.** Baixa probabilidade no horizonte, alto impacto. O mecanismo é conhecido e documentado:
metade dos prompts predetermina o desfecho (fonte 7), a estratégia de validação mais comum não
garante ausência de viés sistemático (fonte 9), e modelagem baseada em agentes já informou
decisão de governo em contexto sanitário, com literatura própria sobre os riscos de validação
frouxa. Se acontecer, a reação provável não é calibrar: é proibir por um tempo. E a proibição
atingiria em cheio o uso legítimo, que é o exploratório. Isto não é previsão — é o cenário cuja
mera possibilidade deveria mudar como se escreve o relatório hoje.

**W2 — Uma sociedade simulada produz um achado social genuinamente novo, depois confirmado em
campo.** Baixa probabilidade, alto impacto, e é o wildcard *bom*. Toda a crítica atual converge
em que o sintético reproduz a sabedoria convencional e falha em surpreender (fonte 11). Um único
contraexemplo bem documentado — hipótese nascida na simulação, testada com gente, confirmada —
reabilitaria o método de uma vez e tornaria o ensaio pré-lançamento (D1) muito mais difícil de
recusar. Note-se que este é exatamente o desenho "simular-e-então-validar" que Hullman et al.
descrevem como o uso defensável (fonte 9): o wildcard não é uma tecnologia nova, é alguém fazendo
direito o que já está descrito.

**W3 — Um grande modelo passa a ser treinado, ou ajustado, com dado gerado por sociedades
simuladas em escala.** Baixa probabilidade e impacto sistêmico difícil de reverter: o viés da
persona média entraria no material de treino da geração seguinte, e a validação contra dado
humano — já o gargalo de D2 — ficaria ainda mais escassa. É o único item deste mapa cujo efeito
seria silencioso: ninguém anuncia, e o campo descobre depois.

## 7. Contra o próprio mapa

Esta seção tenta derrubar o que está acima. Onde a crítica venceu, o efeito foi rebaixado ou
removido, e o registro do que saiu está na seção 12.

**Qual efeito é só extrapolação linear do presente.** `e2` — o custo de computação substituir o
custo de recrutamento — é a extrapolação mais óbvia do mapa. Ele pega um número real (335.600
tokens para cem agentes em um passo, fonte 3) e projeta que essa restrição continue sendo a
dominante. Mas o preço por token vem caindo há anos e modelos pequenos vêm melhorando; se a queda
continuar, o efeito se esvazia e todo o ramo e2.1/e2.2 vai junto. Mantive `e2` com sinal `forte`
porque o custo é observável hoje, mas a confiança está em `media` exatamente por isso, e não em
alta. O ramo `e2.2` — o agente barato como padrão — é o que sobrevive a qualquer dos dois
cenários de preço, e é por isso o mais sólido do par.

**Qual pressupõe velocidade de adoção sem caso comparável.** `e1.2` — regulador aceitar ensaio
sintético como peça de avaliação de risco até 2030 — é o efeito mais frágil do mapa e eu o
rebaixei duas vezes durante a escrita. A analogia implícita é o teste de colisão automotivo, e a
analogia é ruim: o crash test se apoia em física mensurável e num boneco padronizado que a
indústria inteira aceita. Não existe boneco padronizado de sociedade, e a fonte 12 mostra que o
texto regulatório mais próximo nem menciona teste pré-lançamento. Rebaixei `e1.2` de `medio/media`
para `fraco/baixa`. Não removi porque o KGI chega a sugerir que a avaliação considere resultados
de experimentação de design, o que é a porta por onde isso entraria — mas é uma porta estreita.

**Qual disrupção pode simplesmente não se concretizar, e o que acontece com o mapa.** D1. É
perfeitamente possível que o ensaio em população sintética fique para sempre como ferramenta
interna de convencimento de equipe — rodada, mostrada em reunião, jamais publicada, jamais
auditada — sem nunca virar estágio formal do ciclo. Nesse mundo, e1, e1.1, e1.2 e os três efeitos
de terceira ordem abaixo deles caem, e sobra um mapa sobre método de pesquisa (D2 e D3), não sobre
design de plataforma. Seria um mapa menor e provavelmente mais correto. Registro isso como a
falha mais provável do documento inteiro.

**O que está frouxo em D3.** `e5` afirma migração da pesquisa exploratória para o sintético. O
número disponível empurra no sentido contrário: uma pesquisa citada em cobertura de 2026 reporta
que só 8% dos pesquisadores de UX usariam participante sintético e 88% duvidam da qualidade — mas
**não consegui abrir a fonte primária desse dado** (a página da Qualitati não entregou o conteúdo,
e o artigo da ACM Interactions devolveu 403). Portanto ele não entra na lista de fontes e não
sustenta nada aqui. O que sustenta `e5` é mais fraco e mais indireto: a existência do mercado de
respondente sintético com nomes verificáveis (fonte 11) e a posição da NN/g de que o uso
exploratório é o uso defensável (fonte 10). Mantive `e5` em `medio/media` por causa disso.

**Qual efeito tem viés de simetria.** `e3.1` — a reclassificação de comportamentos emergentes como
artefato — está com sinal `forte`, e essa é a posição em que este mapa mais se expõe. Ela repousa
quase inteiramente numa fonte (fonte 7). É uma auditoria pré-registrada, em quatro bases, com
reprodução de cinco experimentos, o que é forte; mas é **uma** e ainda não teve tempo de ser
contestada. Se a reprodução dela não se sustentar, `e3.1` cai e leva junto `e3.1.1`.

**Que viés meu entrou aqui.** Dois, e são opostos.

O primeiro é de tema: a zona de interesse declarada é "Simulação e mundos", o que predispõe a
achar que simulação importa. Um mapa escrito por quem parte da metodologia de pesquisa social
provavelmente teria concluído que a história toda é uma nota de rodapé de uma discussão antiga
sobre validade externa — e essa leitura não é obviamente pior que esta.

O segundo é o viés do próprio agente que escreve. Há um atrativo narrativo forte em "a tecnologia
existe mas a validação não", porque é uma tese elegante, contrarian na medida certa, e faz o autor
parecer criterioso. Suspeito que ela esteja *parcialmente* certa e *inteiramente* conveniente.
Contrapeso honesto: a crítica metodológica é normal em campo jovem e raramente detém a adoção —
questionário de opinião foi criticado por décadas e ninguém parou de fazer. A hipótese alternativa
de que D2 se resolva por omissão, com todos publicando e ninguém cobrando, é pelo menos tão
plausível quanto a que este mapa privilegia, e o mapa não a trata com o mesmo cuidado.

Terceiro viés, menor e vindo do enunciado: a descrição da disciplina já vem com a analogia do
túnel de vento embutida. Usei-a, e ela é sedutora demais. Túnel de vento funciona porque o ar do
túnel é o mesmo ar de fora. Nada garante que o agente sintético seja feito da mesma matéria que a
gente que ele representa — e esse é precisamente o conteúdo de D2. A analogia que abre este
documento é a analogia que ele passa dez páginas contestando.

## 8. O que a máquina errou

**Um número que mudou entre versões do mesmo artigo, e quase entrou errado.** Ao pesquisar a
auditoria PIMMUR, o resumo de busca informou "39 papers auditados, 89,7% violando ao menos um
princípio" — número redondo, específico, plausível, e que eu estava prestes a escrever. Ao abrir o
artigo (fonte 7), a versão atual, de setembro de 2026, diz **350 artigos contendo 576 estudos** e
reporta 50,6% dos prompts com controle excessivo. Outra saída de busca, na mesma sessão, dizia
"42 estudos e 90,7%". Três pares de números diferentes para o mesmo trabalho. A explicação
provável é benigna — o artigo cresceu da v1 à v4, e os buscadores indexaram versões distintas —
mas o efeito prático é o mesmo de uma alucinação: se eu tivesse citado o resumo de busca, teria
publicado um número que a fonte não sustenta. O que disparou a desconfiança foi a discrepância
entre duas buscas, não bom senso meu. Se as duas tivessem concordado no número errado, eu teria
escrito o número errado. **Regra que tiro disso: número que vem de resumo de busca não é fonte,
nem quando duas buscas concordam.**

**Artefatos que o levantamento da turma cita e que eu não consegui confirmar.** `Luvoire`
(grade 60×60, dez mil agentes, replay determinístico, artefatos por hash SHA256), `Argentor`
(dez personagens com diário próprio que "esquecem de comer"), `y-not.social`, `Rath`,
`NeuroForge`, `DisasterReliefOps`, `agent-inspect`, `Gestalt Village`. Busquei; nenhum retornou
resultado identificável. Podem ser reais e pequenos demais para indexação, podem ter outro nome
público, ou podem estar em plataforma que a busca não alcança. A tentação, aqui, era escrever
"segundo o levantamento, Luvoire suporta dez mil agentes com replay determinístico" — o que é
formalmente honesto e praticamente uma fabricação, porque empresta ao dado uma solidez que ele não
tem. **Optei por citá-los apenas como relato não verificado, e por não usar nenhum deles como
sustentação de efeito.** O detalhe do SHA256 e da grade 60×60 é o tipo de especificidade que
produz confiança indevida, e é exatamente por isso que merecia checagem.

**Uma fonte que a busca me ofereceu e que eu não pude ler.** O artigo da ACM Interactions sobre
os desafios dos usuários sintéticos apareceu em posição de destaque, com título e edição
(janeiro-fevereiro de 2026), e o resumo de busca já trazia argumentos atribuíveis a ele. Ao tentar
abrir, o servidor devolveu 403. O mesmo aconteceu com o blog que reportava a pesquisa com 150
profissionais de UX: a página abriu, mas devolveu só o título. Em ambos os casos eu tinha, pelo
resumo de busca, material suficiente para escrever parágrafos convincentes com citação e
percentual. Não escrevi: eles não estão na seção 11 e o número dos 8% aparece na seção 7 apenas
como dado que **não** pude verificar. Registro isto porque é o modo mais comum de uma fonte falsa
entrar num documento verdadeiro — não por invenção, mas por promoção de resumo a leitura.

**Um viés estrutural meu, de composição de mapa.** Ao montar a roda, produzi primeiro cadeias
simétricas: três disrupções, duas de primeira ordem cada, duas de segunda cada, duas de terceira
cada. Ficou bonito e estava errado — havia ramos existindo só para preencher a simetria. Podei-os
e a árvore ficou irregular, com nós de um filho só. A simetria é um artefato do gerador, não do
mundo, e num documento que fala justamente sobre artefato metodológico ela seria uma ironia cara.
Duas cadeias inteiras foram cortadas por não terem sinal de primeira ordem, e estão na seção 12.

## 9. Três cenários para 2031

**Provável.** Em 2031 a sociedade simulada é um instrumento normal e desigualmente usado.
Plataformas grandes rodam ensaio sintético antes de mexer no feed, e ninguém publica o resultado —
ele existe como slide em reunião interna e como argumento em discussão de prioridade, não como
evidência auditável. A academia se dividiu: uma parte adotou os critérios de desenho e publica com
variância declarada, outra continua produzindo estudos que a primeira não cita. Os institutos de
pesquisa de opinião usam ampliação sintética de amostra como prática corrente, com nota de rodapé
metodológica que quase ninguém lê, e a Gallup mantém a salvaguarda que anunciou em 2026 porque a
reputação dela depende disso mais do que a de seus concorrentes. Pesquisa exploratória com usuário
sintético virou rotina em equipe de produto, e a NN/g continua publicando o mesmo alerta, agora com
mais dados e o mesmo efeito prático. Nenhum desastre visível, nenhuma consolidação: o instrumento
se espalhou sem que a pergunta sobre sua validade tenha sido respondida — apenas ficou menos
interessante de fazer.

**Desejável.** Em 2031 existe uma prática estabelecida do que se declara ao publicar resultado de
simulação social — variância junto com média, grau de controle do prompt, se os agentes podiam
inferir a hipótese, e contra que dado humano houve calibração — e essa declaração é condição para
que o resultado conte em decisão de produto ou de política. Não virou lei; virou condição de
publicação e cláusula de contrato, que é mais rápido e menos frágil. A simulação assumiu seu lugar
defensável, o de gerar hipótese a ser testada com gente, e pelo menos um achado nasceu assim e foi
confirmado em campo — o que fez mais pela legitimidade do método que dez artigos de defesa. O
painel humano ficou caro e quem participa é pago como quem faz trabalho especializado. Existem
laboratórios independentes que auditam simulação alheia e vivem disso. **O que teria sido preciso
fazer para chegar aqui:** que os critérios propostos entre 2025 e 2026 tivessem sido adotados por
um punhado de periódicos e conferências grandes antes do primeiro incidente público, e não depois.
A janela é essa, é curta, e passa por decisão editorial — não por tecnologia.

**Indesejável.** Em 2031 uma decisão pública de peso foi tomada com base em simulação de
sociedade, o resultado se mostrou errado, e a reação foi proibir em bloco. O uso exploratório —
o único que a literatura de 2026 considerava defensável — morreu junto com o uso abusivo, porque a
proibição não distingue. Antes disso, entre 2027 e 2030, a assimetria de escala tinha convertido
"quantos agentes você simulou" em argumento de autoridade, e discussões públicas sobre efeito de
plataforma passaram a ser vencidas por quem tinha mais computação. Populações mal representadas no
material de treino foram mal representadas nas políticas testadas em bancada, sem que ninguém
pudesse contestar porque não havia mecanismo de contestação. **O sinal precoce é específico e dá
para vigiar a partir de hoje:** o primeiro documento oficial — parecer regulatório, relatório
público, peça de consulta — que cite resultado de simulação com agentes **sem declarar variância,
grau de controle de prompt e dado humano de calibração**. Não é o uso que sinaliza o risco. É a
ausência da declaração.

## 10. O experimento

**Bancada de ensaio de feed.**

**O que é.** Uma rede social minúscula — cinquenta a cem agentes — rodando localmente, com um
feed cuja regra de recomendação é trocável por uma linha de configuração: cronológica, por
popularidade, por afinidade de interesse. Injeta-se uma informação falsa e uma verdadeira num
agente qualquer e observa-se, por um número fixo de passos, quem viu o quê, quem repostou, e como
as posições se distribuíram no fim. A saída é um painel simples: difusão por regra, dispersão de
opinião, e o log de quem falou com quem.

A parte que faz o experimento valer não é essa. É a segunda metade: **o mesmo cenário roda duas
vezes, sob desenhos de prompt deliberadamente opostos.** Na rodada A os agentes recebem persona
rica e nenhuma indicação do que se espera deles. Na rodada B recebem a instrução ligeiramente
sugestiva que aparece em metade dos estudos auditados — algo como "você tende a concordar com o
que sua rede compartilha". Compara-se a saída das duas.

**Que pergunta sobre o futuro ele ajuda a responder.** A pergunta central de D2, na escala em que
uma turma consegue verificá-la com as próprias mãos: **quanto do "comportamento emergente" é o
sistema, e quanto é o prompt?** Se a rodada B produzir polarização nítida e a rodada A não, a
turma terá reproduzido em uma tarde o achado mais incômodo da fonte 7 — que fenômenos coletivos
relatados somem ou se invertem quando o desenho muda. E terá aprendido a coisa mais útil que este
tema oferece a quem projeta mídia: ler saída de simulação já perguntando o que foi plantado na
entrada.

**Que tecnologia emergente ele usa, e por que não dá com tecnologia madura.** Usa agentes movidos
por modelo de linguagem, com memória entre turnos e conversa em linguagem natural, sobre um
ambiente com recomendador. Não dá para fazer com modelagem baseada em agentes clássica, do tipo
NetLogo, e a razão é precisamente o objeto do experimento: em modelo de regra fixa a suscetibilidade
ao enquadramento **é** o parâmetro — você a escreve, ela obedece, e comparar as duas rodadas não
significa nada. O que se quer medir aqui só existe em agente que interpreta linguagem: o efeito de
uma frase aparentemente inócua no comportamento coletivo. Esse é o fenômeno novo, e ele é
inacessível à tecnologia madura.

**O que a turma faz quando testar isso em sala.** Cada dupla escreve *uma* frase de persona ou de
instrução, sem ver a das outras, e as frases entram na mesma simulação. Roda-se uma vez. Depois,
as duplas apostam, por escrito e antes de ver o resultado, qual regra de recomendação produziu
mais polarização. Revela-se o resultado, e em seguida revela-se qual frase cada dupla escreveu.
A discussão que interessa não é sobre o feed — é sobre descobrir que a própria frase de alguém
explicava o resultado que todos atribuíam ao algoritmo.

**O que seria um resultado que me faria mudar de ideia.** Se as rodadas A e B produzirem o mesmo
padrão agregado, com variância comparável entre agentes, em várias sementes aleatórias, então a
tese central deste mapa — de que a validação é o gargalo e de que boa parte da emergência é
artefato de desenho — está errada, ou pelo menos muito exagerada nesta escala. Nesse caso D2
encolhe para uma nota metodológica, D1 fica muito mais fácil de defender, e o mapa inteiro deveria
ser reescrito em torno de D1 e D3. Dois resultados adicionais mudariam minha posição: se a rodada
A exibir variância entre agentes comparável à de um grupo humano no mesmo tipo de tarefa — o
oposto do que o argumento da persona média prevê (fonte 6) —, ou se a simulação produzir um padrão
que ninguém da turma havia previsto por escrito e que depois se sustente numa checagem com dado
real. Este último seria o wildcard W2 em miniatura, e seria o melhor resultado possível.

## 11. Fontes

Treze fontes, todas abertas e lidas nesta sessão. Fonte que não abriu não entra — três casos
estão registrados na seção 8 e na seção 12.

1. **Generative Agents: Interactive Simulacra of Human Behavior** — Park et al., arXiv:2304.03442
   (abr/2023, v2 ago/2023; UIST '23). `https://arxiv.org/abs/2304.03442`
   **Sustenta:** os 25 agentes na cidade sandbox, a festa de Dia dos Namorados emergindo de uma
   única semente, e a avaliação por ablação com juízes humanos.
   **Confiabilidade:** alta como fato histórico e como artefato técnico — é o experimento fundador
   do campo, publicado em conferência de primeira linha. Baixa como evidência de realismo social:
   a avaliação mediu credibilidade percebida, não correspondência com comportamento humano real, e
   este mapa não a usa para isso.

2. **OASIS: Open Agent Social Interaction Simulations with One Million Agents** — CAMEL-AI,
   arXiv:2411.11581 (nov/2024). `https://arxiv.org/abs/2411.11581`
   **Sustenta:** a escala de um milhão de agentes, o recomendador embutido, a reprodução de
   difusão, polarização e efeito manada em ambientes tipo X e Reddit, e o achado de que populações
   maiores alteram a dinâmica observada.
   **Confiabilidade:** alta para capacidade técnica declarada e verificável em código; média para
   as alegações de realismo dos fenômenos, pelas razões que as fontes 6 e 7 desenvolvem.

3. **Repositório camel-ai/oasis** — GitHub. `https://github.com/camel-ai/oasis`
   **Sustenta:** licença Apache 2.0, instalação por PyPI, operação por API e não local, o número
   de 335.600 tokens de entrada para 100 agentes em um passo de tempo, e as adições de 2026
   incluindo ação de entrevista e grupo de conversa.
   **Confiabilidade:** alta — é fonte primária do próprio projeto, com código e versionamento
   verificáveis. Os números de token são estimativa publicada pelo projeto, não medição
   independente.

4. **AgentSociety: Large-Scale Simulation of LLM-Driven Generative Agents** — Piao et al.,
   arXiv:2502.08691 (fev/2025, v2 abr/2026). `https://arxiv.org/abs/2502.08691`
   **Sustenta:** mais de 10 mil agentes e 5 milhões de interações, as cinco frentes de experimento
   social, e o suporte declarado a survey, entrevista e intervenção.
   **Confiabilidade:** alta para o que o sistema faz; o resumo não declara limitações, o que por si
   já é dado relevante e foi tratado como tal.

5. **Generative agent-based modeling with actions grounded in physical, social, or digital space
   using Concordia** — Google DeepMind, arXiv:2312.03664 (dez/2023).
   `https://arxiv.org/abs/2312.03664`
   **Sustenta:** o padrão do Game Master, e — o ponto que mais importa a este mapa — a declaração,
   pelos próprios autores, de que a biblioteca serve para avaliar desempenho de serviços digitais
   reais simulando usuários.
   **Confiabilidade:** alta para intenção de uso declarada, que é para o que foi usada aqui.

6. **LLM-Based Social Simulations Require a Boundary** — arXiv:2506.19806 (jun/2025, v3 jul/2026;
   ICML 2026, Position Paper Track). `https://arxiv.org/abs/2506.19806`
   **Sustenta:** o argumento da persona média, e as três exigências — casar validação com
   heterogeneidade, reportar variância junto com média, limitar conclusão a padrão qualitativo
   quando a variância for insuficiente.
   **Confiabilidade:** alta como posição revisada e aceita em conferência de primeira linha. É
   explicitamente um *position paper*: argumento, não medição. Usada aqui como argumento.

7. **The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies** —
   arXiv:2509.18052 (set/2025, v4 set/2026). `https://arxiv.org/abs/2509.18052`
   **Sustenta:** a auditoria pré-registrada de 350 artigos e 576 estudos em quatro bases, os seis
   princípios, os 50,6% de prompts que predeterminam o desfecho, e o achado de que fenômenos
   coletivos somem ou se invertem quando os princípios são aplicados.
   **Confiabilidade:** a mais alta do conjunto em termos de desenho — pré-registro em OSF, quatro
   bases, reprodução de cinco experimentos. Ressalva importante e registrada na seção 8: os números
   mudaram entre versões, e os resumos de busca indexam versões antigas. Os números usados aqui são
   os do resumo da versão atual, lido diretamente.

8. **We Need Strong Preconditions For Using Simulations In Policy** — Luo, Arora e Guirado (UC
   Berkeley), arXiv (abr/2026). `https://arxiv.org/html/2604.07838`
   **Sustenta:** as três pré-condições — não tratar simulação de população marginalizada como
   neutra, não simular população sem participação constitutiva dela, não simular sem prestação de
   contas — e a proposta de relatórios de desenvolvimento e implantação de simulação.
   **Confiabilidade:** média. Preprint recente, sem revisão por pares identificada, de natureza
   normativa. Usada apenas como sinal fraco e como origem do vocabulário de e4.2 — nunca como
   evidência de que algo está acontecendo.

9. **This human study did not involve human subjects: Validating LLM simulations as behavioral
   evidence** — Hullman, Broska, Sun e Shaw (2026), arXiv:2602.15785.
   `https://arxiv.org/html/2602.15785v1`
   **Sustenta:** as três estratégias de validação, e o ponto central de que a heurística
   "validar-e-então-simular" não garante ausência de viés sistemático e é inadequada para pesquisa
   confirmatória.
   **Confiabilidade:** alta para o argumento metodológico; Hullman é referência estabelecida em
   incerteza e comunicação de evidência. Preprint.

10. **Synthetic Users: If, When, and How to Use AI-Generated "Research"** — Nielsen Norman Group
    (jun/2024). `https://www.nngroup.com/articles/synthetic-users/`
    **Sustenta:** os três estudos comparativos, o contraste dos 100% de conclusão declarada contra
    o abandono real após o terceiro de sete cursos, e a delimitação de onde o usuário sintético
    serve e onde não serve.
    **Confiabilidade:** alta para prática de pesquisa de usuário e por ser teste próprio
    documentado; a NN/g tem interesse comercial declarado em pesquisa com pessoas, o que não anula
    o dado mas justifica lê-lo com a ressalva.

11. **A nova aposta das pesquisas de opinião: pessoas que não existem** — Fast Company Brasil
    (09/06/2026). `https://fastcompanybrasil.com/ia/a-nova-aposta-das-pesquisas-de-opiniao-pessoas-que-nao-existem/`
    **Sustenta:** a parceria Gallup–Simile com base em cerca de mil entrevistas de painel
    probabilístico, os painéis sintéticos da Qualtrics com a proporção declarada de modelo público,
    a expansão de 116 para 580 entrevistas pelo Ifop, as salvaguardas declaradas pela Gallup, e as
    críticas de Westwood (lavagem de viés) e Miklian (ausência de achado surpreendente).
    **Confiabilidade:** média-alta como jornalismo especializado com fontes nomeadas e
    verificáveis; é fonte secundária — os números vêm das empresas citadas, não de auditoria
    independente. É também a fonte da nota sobre o Brasil neste mapa, e o recorte dela é de
    circulação brasileira sobre um fenômeno majoritariamente internacional.

12. **Systemic Risk Assessment under the Digital Services Act** — Knight-Georgetown Institute
    (15/05/2025). `https://kgi.georgetown.edu/research-and-commentary/systemic-risk-assessment-under-the-digital-services-act/`
    **Sustenta:** o limiar de 45 milhões de usuários mensais, as quatro categorias de risco, a
    centralidade do sistema de recomendação, a recomendação de avaliar sistematicamente o papel do
    design — e, decisivo para o mapa, a **ausência** de menção a simulação ou teste pré-lançamento,
    com foco em avaliação retrospectiva.
    **Confiabilidade:** alta como análise institucional de política; é interpretação de um
    instituto, não texto legal. A ausência verificada é usada como limite, não como prova de que
    nunca ocorrerá.

13. **Jogos com a tag `social-simulation`** — itch.io. `https://itch.io/games/tag-social-simulation`
    **Sustenta:** a checagem independente do sinal amador — nove títulos na listagem, nenhum
    mencionando agentes de modelo de linguagem; são jogos de simulação social no sentido clássico
    do gênero.
    **Confiabilidade:** baixa como medida de mercado — uma tag de uma plataforma numa consulta, com
    listagem paginada e resultado que varia com o tempo. Usada apenas como sinal fraco e como
    contraponto ao levantamento da turma, jamais como denominador.

## 12. Anexo — o levantamento bruto

### 12.1 A entrevista, e por que ela não teve rodadas

A skill exige entrevista antes de pesquisar, com oito campos confirmados e resumo devolvido para
aceite. Nesta execução **não havia interlocutor**: os oito campos vieram preenchidos no próprio
enunciado da tarefa, com instrução explícita de não fazer perguntas de volta e de assumir e
declarar o que faltasse. Registro o quadro tal como recebido, porque a conformidade com o método
tem de ser auditável:

| Campo | Valor | Origem |
|---|---|---|
| tema | Sociedades simuladas: a simulação como instrumento de investigação | dado |
| recorte | a simulação social como **método**, não personagem de jogo, não mercado de máquinas, não robô | dado |
| horizonte | 2031 | dado |
| público | quem projeta mídia e interação | dado |
| região | global, com nota sobre o Brasil | dado |
| objetivo | mapa de futuro por disrupções-raiz e roda de três ordens | dado |
| exclusões | o que já é comum em produto de massa (régua da disciplina); nenhuma outra | dado |
| viés | neutro | dado |

**Campos assumidos e declarados**, porque a skill exige o registro em vez do preenchimento
silencioso: (a) "viés neutro" foi operado como o `equilibrado` do método, já que a skill não define
um valor `neutro`; (b) "objetivo da análise" não veio com essas palavras e foi derivado do formato
exigido pela disciplina; (c) a nota sobre o Brasil foi interpretada como recorte secundário, não
como seção própria — ela aparece dentro da seção 3 e da fonte 11, e é o ponto mais fraco do mapa
em termos de evidência, com uma única fonte secundária.

**A disrupção suspeita foi declarada como "nenhuma — descubra", o que é um pedido específico e
mudou o método.** Não parti de hipótese; classifiquei achados primeiro e só depois perguntei quais
sobreviviam ao critério de disrupção. O efeito prático foi que D2 — a validação como gargalo —
subiu para o centro do mapa, o que não teria acontecido se eu tivesse partido da hipótese óbvia
("simulação vai virar padrão de teste de plataforma"), que era a leitura natural do enunciado do
tema.

**O que me faria mudar de ideia, conforme declarado:** evidência de adoção já além da maioria
inicial, ou evidência de que a tecnologia não rompe nada. Verificação feita ao fim: nenhum dos dois
apareceu. Contra a primeira, os indicadores de adoção disponíveis apontam para estágio inicial —
dois anúncios em 7.776 ferramentas no levantamento da turma, nenhum jogo com agente de linguagem
na tag verificada do itch.io, e um mercado de respondente sintético em rollout experimental com
salvaguardas voluntárias. Contra a segunda, há ruptura documentada em pelo menos um ponto —
Concordia declara uso para avaliar serviço digital real simulando usuário, o que não é melhoria de
prática existente e sim substituição de estágio. **Portanto a tese do mapa sobrevive ao próprio
critério de refutação declarado.** Registro isto porque é a checagem que mais frequentemente se
esquece de fazer.

### 12.2 Consultas feitas

Buscas (WebSearch, todas em set/2026):
1. `generative agents simulacra Stanford Park 2023 arXiv 25 agents`
2. `OASIS CAMEL-AI million agents social media simulation arXiv`
3. `AgentSociety large-scale LLM agent social simulation arXiv 2025`
4. `Concordia DeepMind generative agent-based modeling library arXiv`
5. `"silicon sampling" LLM synthetic survey respondents bias critique validity 2025`
6. `critique LLM social simulation validity "does not" replicate human behavior caution arXiv 2025 2026`
7. `PIMMUR principles LLM social simulation audit 42 studies arXiv Zhou 2025`
8. `synthetic users UX research AI personas criticism 2026 market research adoption`
9. `Digital Services Act systemic risk assessment recommender system testing simulation before deployment`
10. `Gestalt Village browser agent simulation itch.io OR "y-not.social" OR Luvoire agent society simulation`
11. `simulação com agentes de IA pesquisa Brasil respondentes sintéticos institutos de pesquisa 2026`
12. `"generative agents" simulation cost tokens scaling thousands agents compute expensive 2026`
13. `policy simulation agent-based model used as evidence government decision wrong risk 2026`

Páginas efetivamente abertas (WebFetch): as treze da seção 11, mais as três tentativas falhas
abaixo.

### 12.3 Fontes descartadas, e o motivo

| Fonte | Por que não entrou |
|---|---|
| ACM Interactions, *The Challenges of Synthetic Users in UX Research* (jan-fev/2026) | HTTP 403. O resumo de busca trazia argumentos citáveis; promover resumo a leitura é o modo mais comum de fonte falsa entrar em documento verdadeiro. Fora. |
| Qualitati, *Synthetic Users vs Real Participants* (2026) | Página abriu mas devolveu só o título. É a origem provável do dado "8% usam, 88% duvidam", que por isso aparece na seção 7 apenas como dado **não verificado**. |
| ACM Interactions blog, *The Synthetic Persona Fallacy* | Não aberta. O resumo de busca atribuía a ela a taxonomia de três danos (lavagem de viés, deturpação, vão de responsabilização), que é útil e que **não** foi usada no corpo do mapa por não ter sido lida. |
| Medium, *The Synthetic User Temptation* | Blog pessoal, sem revisão. Não aberta. Não agregaria além do que fontes 10 e 11 sustentam. |
| `arxiv.org/pdf/2606.30085` (*Not-quite-human tastes*, surrogates de survey) | Apareceu em busca com argumento diretamente relevante — omnivorismo estilizado de substitutos de LLM. Não aberta por limite de tempo desta sessão. É a lacuna mais sentida do levantamento: reforçaria D3 com evidência empírica que hoje se apoia em fonte jornalística. |
| `arxiv.org/abs/2501.08579` (*LLM-based Human Simulations Have Not Yet Been Reliable*) | Não aberta. Título e resumo de busca convergem com as fontes 6, 7 e 9, já abertas. Redundância provável, mas registro que não foi verificada. |
| EY / Atlan / Spheron / Mem0, custos de token de agente (2026) | Análises de mercado de fornecedor, com números de TCO sem metodologia pública. Preferi o número do próprio repositório do OASIS (fonte 3), que é verificável. Os "5 a 30× mais tokens" e o "US$ 5.400 para uma versão de quatro jogadores" ficaram de fora por isso. |
| JASSS, *[In]Credible Models* — verificação e validação de ABM para política | Não aberta. Sustentaria o histórico de ABM clássica em política, que este mapa trata como maduro e portanto fora da raiz. Ficaria bem numa seção de estado da arte, que não é este documento. |
| Deloitte / Forbes Brasil, adoção de IA agêntica no Brasil | Abertas em resumo de busca apenas. Falam de adoção de agentes em empresa, não de simulação social como método — assunto vizinho, não o mesmo. Fora do recorte. |
| Wikipedia, *Algorithmic amplification* | Terciária. Não usada. |

### 12.4 Achados do levantamento da turma que não consegui verificar

Registro nominal, porque a não verificação é o dado:

`Luvoire` (grade 60×60, até 10 mil agentes, replay determinístico, artefatos por hash SHA256) ·
`Argentor` (dez personagens com diário próprio numa cidade; relato de que "esquecem de comer") ·
`y-not.social` (rede social inteira povoada por agentes, para estudar recomendação e
desinformação) · `Rath` · `NeuroForge` (rede fechada onde agentes de autores diferentes se
encontram) · `DisasterReliefOps` (coordenação sob escassez) · `agent-inspect` (Gini, riqueza e
poder em tempo real) · `Gestalt Village` (vila rodando inteira no navegador, sem rede).

Busca dirigida não retornou nada identificável para nenhum deles. Três hipóteses, nesta ordem de
plausibilidade: são projetos pequenos, recentes e não indexados, possivelmente de game jam; têm
nome público diferente do interno; ou a busca disponível aqui não alcança a plataforma onde vivem.
**Nenhum foi usado para sustentar efeito.** Dois foram mencionados no corpo — `y-not.social`
implicitamente, na descrição do experimento, e `Gestalt Village` como sinal fraco de simulação
barata — sempre marcados como relato não verificado. O item `agent-inspect`, se existir como
descrito, é o mais interessante do conjunto e o que eu mais gostaria de ter verificado: um
instrumento que mostra Gini e concentração de poder em tempo real dentro da simulação é
exatamente a peça que falta para a discussão de validação sair do texto e virar leitura.

### 12.5 Efeitos removidos ou rebaixados, e por quê

**Removidos inteiros:**

- *"Plataformas passam a contratar sociólogos para desenhar cenário de simulação"* — plausível,
  sem sinal observável. Era projeção de bom senso disfarçada de efeito. Fora.
- *"Simulação social vira produto de assinatura em diretório de ferramentas de IA"* — contradiz
  diretamente o achado do denominador (2 em 7.776 na medição da turma; 9 jogos sem agente de
  linguagem na checagem do itch.io). Manter seria ignorar a única medida de mercado que tenho.
- *"Agentes simulados desenvolvem cultura própria e vocabulário não previsto"* — atraente,
  citável, e exatamente o tipo de alegação que a fonte 7 mostra evaporar sob desenho controlado.
  Escrevê-lo num mapa cuja tese é que a emergência é frequentemente artefato seria incoerência.
- *"Usuários reais passam a interagir com agentes simulados sem saber"* — tema vizinho (agentes em
  produto), não simulação como método. Fora do recorte declarado.

**Cadeias interrompidas por falta de sinal de primeira ordem** — registradas conforme o método
exige, em vez de ramificadas decorativamente:

- **Uso militar e de segurança pública de sociedade sintética** (ensaio de distúrbio civil,
  resposta a multidão). Cadeia causal fácil de imaginar e consequências grandes. Nenhuma fonte
  aberta sustenta primeira ordem, e a analogia com `DisasterReliefOps` — coordenação sob escassez
  — não se verifica. Interrompida na origem.
- **Efeito da simulação na formação do cientista social** (dissertação inteira rodada em bancada,
  trabalho de campo como etapa opcional). Há indício indireto: AgentSociety declara suportar
  survey, entrevista e intervenção sobre agentes (fonte 4). Mas não achei sinal de adoção em
  formação, e a distância entre "o sistema suporta o método" e "o programa de pós ensina assim" é
  grande demais para atravessar sem evidência. Interrompida.

**Rebaixados:**

- `e1.2` (regulador aceitar ensaio sintético) — de `medio/media` para `fraco/baixa`. Motivo na
  seção 7: a analogia do crash test não se sustenta e a fonte 12 mostra o texto regulatório mais
  próximo silente sobre teste pré-lançamento.
- `e5.2` (equipes decidindo produto sem nunca ter falado com usuário real) — de `forte` para
  `medio`. O único número disponível sobre adoção em UX empurra no sentido contrário, e eu não
  consegui abrir a fonte primária dele. Sinal forte com evidência que não abriu é sinal
  inventado.
- `e3.1` mantido em `forte` **com ressalva explícita** — repousa quase inteiramente na fonte 7,
  que é metodologicamente sólida mas é uma só e ainda não foi contestada. A ressalva está na seção
  7 e não no bloco YAML, o que é uma limitação do formato: a roda não tem campo para "depende de
  uma única fonte".

### 12.6 Inferências, marcadas como tais

Tudo abaixo é raciocínio meu, não fato de fonte. Está separado aqui justamente para poder ser
atacado sem contaminar a seção 3.

1. **A assimetria capacidade/validação é o achado central deste mapa.** Ninguém, em nenhuma fonte
   aberta, formula a coisa assim. É minha leitura do conjunto: três sistemas em escala de milhares
   a milhões (fontes 2, 3, 4) contra três trabalhos independentes de 2025–2026 mostrando que a
   validação não está resolvida (fontes 6, 7, 9). Se essa leitura estiver errada, o mapa inteiro
   perde o eixo.
2. **O formato do mercado explica a escassez, e não a falta de interesse.** Inferência a partir da
   observação do aluno sobre diretórios de produtividade, reforçada pelo resultado do itch.io. É
   plausível e é não testada.
3. **A validação, e não a computação, será o bem escasso.** Deriva da combinação entre custo de
   token caindo e painel humano de referência não escalando. É a inferência mais forte do
   documento e a mais fácil de refutar: basta o custo de computação parar de cair.
4. **A salvaguarda voluntária de vendedor dura até o primeiro incidente.** Generalização de padrão
   histórico de outros mercados, aplicada aqui sem evidência específica. Uso-a para construir o
   wildcard W1, não para sustentar efeito no bloco da roda.
5. **A analogia do túnel de vento é o principal risco retórico do tema.** Ela vem no enunciado da
   disciplina, é excelente para explicar a ideia e falsa no ponto decisivo: o ar do túnel é o
   mesmo ar de fora, e nada garante que o agente sintético seja feito da mesma matéria que a gente
   que ele representa. Esta é a observação que eu gostaria que sobrevivesse caso todo o resto do
   documento envelheça mal.

### 12.7 Limitações desta execução

- **Sem entrevista real.** Os parâmetros vieram do enunciado. Não houve rodada de confirmação com
  interlocutor, o que a skill exige. O quadro está em 12.1 para auditoria.
- **Treze fontes é pouco para um mapa com três disrupções.** O documento de referência da turma
  fala em dezenas. Preferi treze abertas a quarenta citadas de resumo de busca, mas registro que a
  cobertura é rasa em dois pontos: o Brasil (uma fonte, secundária) e a evidência empírica de
  adoção em UX (nenhuma fonte primária aberta).
- **Viés linguístico e geográfico do levantamento.** Doze das treze fontes são em inglês; das
  treze, seis são preprints do arXiv. O campo mora no arXiv, o que justifica a concentração, mas
  significa que a maior parte da evidência deste mapa **não passou por revisão por pares**. As
  exceções são a fonte 1 (UIST '23) e a fonte 6 (ICML 2026).
- **Número que só existe em relato de terceiro.** O 7.776/2 do levantamento da turma é citado como
  relato e não foi reproduzido — reproduzi-lo exigiria acesso aos dois diretórios nomeados, que o
  enunciado não identifica.
- **Horizonte curto para efeito de terceira ordem.** 2031 são cinco anos. Vários efeitos de
  terceira ordem levam prazo 2032 ou 2033, isto é, **além do horizonte declarado**. Isso é
  deliberado e está sinalizado nos campos `prazo`: a cadeia causal não termina em 2031, e truncá-la
  no ano-alvo produziria um mapa mais arrumado e menos verdadeiro.
- **Sem acesso aos artefatos da turma.** Oito projetos citados no enunciado não puderam ser
  verificados (12.4). Um mapa escrito com acesso a eles — especialmente ao `agent-inspect` e ao
  `y-not.social` — provavelmente teria mais material empírico e menos apoio em literatura.
- **A data.** Este documento foi escrito em 18 de setembro de 2026. As fontes 7 e 4 têm revisões
  de setembro e abril de 2026, respectivamente; o campo se move rápido e a seção 3 envelhece
  primeiro.
