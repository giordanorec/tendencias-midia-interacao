---
tema: "Sociedades simuladas: a simulação como instrumento de investigação"
slug: sociedades-simuladas-a-simulacao-como-instrumento-de-investigacao
autor_login: vafs
zona_de_interesse: Simulação e mundos
data: 2026-09-11
horizonte: 2031
publico: Quem projeta mídia e interação — para decidir quando um resultado de simulação social pode entrar no processo de projeto e quando ele não pode ser tratado como evidência
recorte_geografico: global (com nota sobre o Brasil)
disrupcoes_raiz: 3
efeitos_ordem_1: 4
efeitos_ordem_2: 7
efeitos_ordem_3: 8
tecnologias_citadas: [agentes generativos com LLM (memória e reflexão), simuladores sociais de larga escala (OASIS, AgentSociety), sandbox de pré-teste de política de plataforma (PolicySim), agentes ancorados em entrevista/autorrelato de pessoa real, persona digital / amostragem sintética em pesquisa, surrogates destilados de agente LLM (behavioral cloning), modelagem baseada em agentes clássica com regras fixas (NetLogo, PolicySpace/Ipea)]
fontes: 12
confianca: media
experimento: "Túnel de vento de bolso — a mesma decisão de projeto de interação (duas regras de ranking de feed) submetida em paralelo a uma população de agentes LLM com persona derivada da própria turma e à turma real, medindo divergência item a item e onde a população sintética erra"
skill_usada: futurizacao-vafs
publico_ok: false
---

## 1. Resumo

A simulação social com agentes de modelo de linguagem deixou de ser demonstração e virou
instrumento com literatura, escala e crítica próprias: há simuladores abertos que declaram até
um milhão de agentes ([OASIS](https://arxiv.org/abs/2411.11581)), plataformas de dez mil agentes
e cinco milhões de interações desenhadas para experimento social
([AgentSociety](https://arxiv.org/abs/2502.08691)), e sandboxes propostos explicitamente como
alternativa *pré-implantação* ao teste A/B, que é reativo por construção
([PolicySim](https://arxiv.org/html/2603.19649)). Para quem projeta mídia e interação, a pergunta
do mapa não é "a simulação vai ficar boa" — é **o que deixa de ser obrigatório quando ela fica
barata**. Três coisas: expor usuário real como primeiro lugar onde o risco aparece; recrutar
gente para a primeira rodada de teste de conceito; e ter instituição por trás para rodar um
experimento social.

O contrapeso é o eixo central deste documento, e ele não é retórico: a revisão crítica de
[Larooij e Törnberg (2025)](https://arxiv.org/abs/2504.03274) conclui que os LLMs **agravam**, em
vez de resolver, os problemas históricos de validação da modelagem por agentes, e que boa parte
dos estudos valida por "plausibilidade" subjetiva. Nenhuma das três disrupções abaixo resolve
isso. O mapa inteiro descreve um instrumento cuja adoção corre mais rápido que a régua que
diria quando confiar nele — e é dessa defasagem, não da capacidade técnica, que saem quase todos
os efeitos de 2ª e 3ª ordem.

**Viés declarado:** neutro. Onde o sinal é ambíguo, este documento registra as duas leituras e
rebaixa a confiança, em vez de escolher a mais interessante.

## 2. O tema

"Sociedade simulada" aqui é um arranjo específico: **muitos agentes, se afetando, num ambiente
configurável, produzindo dado analisável** — e o comportamento de cada agente vindo de um modelo
de linguagem com memória, não de uma regra escrita à mão. O objetivo declarado é investigar, não
entreter nem produzir: rodar a possibilidade antes de ela acontecer no mundo. É a analogia do
túnel de vento — testa-se a asa sem derrubar o avião, testa-se a regra de recomendação sem
polarizar gente de verdade.

Isso pertence a mídia e interação por uma razão direta: **o objeto testado é justamente o que
essa área projeta**. Feed, ranking, regra de moderação, mecânica de rede social, fluxo de
onboarding — tudo isso é desenho de interação cujo efeito só aparece em agregado, com muita
gente junta, ao longo do tempo. É exatamente a classe de efeito que nenhum teste de usabilidade
com cinco pessoas pega e que hoje só aparece depois do lançamento. Merece mapa de futuro, e não
levantamento de estado da arte, porque a pergunta interessante é normativa e não técnica: **se
dá para simular antes, testar antes passa a ser obrigação de quem projeta?**

Fronteiras respeitadas: personagem autônomo *em jogo* é o tema 7; mercado de máquinas com
dinheiro real é o tema 5; agente com corpo no mundo físico é o tema 9. Aqui o objeto é a
simulação social **como método**.

## 3. Onde isso está hoje

**Maduro.** Modelagem baseada em agentes com regra fixa tem décadas de uso em produção:
epidemiologia, tráfego, economia computacional. No Brasil o caso nomeável é o
[PolicySpace](https://repositorio.ipea.gov.br/entities/book/d11e2635-69c2-4912-bf4a-629b208ec7b9),
de Bernardo Alves Furtado (Ipea, 2018), um modelo baseado em agentes calibrado para **333
municípios brasileiros em 46 concentrações populacionais**, com famílias, empresas, mercados,
impostos e mobilidade, usado como laboratório *in silico* de política pública. É rule-based, não
tem LLM nenhum, e é exatamente por isso que serve de régua: a prática de simular sociedade para
decidir política **já existe e já é institucional**. O que muda não é a prática — é o que gera o
comportamento do agente.

**A virada.** O experimento de referência é
[Park et al., "Generative Agents: Interactive Simulacra of Human Behavior"](https://arxiv.org/abs/2304.03442)
(abril de 2023): **vinte e cinco agentes** num sandbox inspirado em *The Sims*, com arquitetura
que "estende um modelo de linguagem para guardar um registro completo das experiências do agente
em linguagem natural, sintetizar essas memórias ao longo do tempo em reflexões de nível mais
alto, e recuperá-las dinamicamente para planejar comportamento" — e, a partir de uma única
intenção plantada num agente, os agentes "espalham autonomamente convites para a festa ao longo
dos dois dias seguintes, fazem novos conhecidos, convidam uns aos outros para ir juntos e se
coordenam para aparecer na hora certa".

**A escala.** [OASIS](https://arxiv.org/abs/2411.11581) (Yang et al., submetido em 18/11/2024) é
um simulador aberto de rede social modelado sobre X e Reddit, com 23 ações possíveis por agente,
sistema de recomendação embutido e suporte declarado a **até um milhão de agentes**; replica
difusão de informação, polarização de grupo e efeito manada, e reporta que escalas maiores de
população produzem dinâmica de grupo mais acentuada.
[AgentSociety](https://arxiv.org/abs/2502.08691) (Piao et al., 02/2025) gera vida social para
**mais de 10 mil agentes e 5 milhões de interações**, com agentes dotados de emoção, necessidade
e cognição, e cinco temas de experimento declarados: polarização, mensagem inflamatória, renda
básica universal, choque externo (furacão) e sustentabilidade urbana. O enquadramento do próprio
paper é o ponto: propõe "substituir experimentos tradicionais, caros e logisticamente
difíceis".

**O uso como pré-teste de plataforma.** [PolicySim](https://arxiv.org/html/2603.19649) (Huang et
al., ACM Web Conference 2026) é um sandbox de mil agentes para otimizar política de intervenção
antes de implantar, avaliada em X/Weibo sobre sistema de recomendação e controle de exposição. O
argumento dele é literal: o teste A/B "é reativo, não proativo", e o risco só aparece depois que
o dano é "incontrolável e potencialmente irreversível".

**O uso como respondente.** Em
[Park et al., arXiv:2411.10109](https://arxiv.org/abs/2411.10109), 1.052 americanos passaram por
entrevista semiestruturada de duas horas; os agentes construídos a partir dessas entrevistas
acertaram itens retidos da General Social Survey a **83%** da consistência teste-reteste dos
próprios participantes em duas semanas (82% só com survey, 86% combinando as duas fontes, contra
74% de agentes só com demografia). Em paralelo, a indústria de pesquisa já respondeu no nível da
norma: a versão 2025 do Código ICC/ESOMAR trata de IA, dado sintético e persona sintética, e o
Artigo 9 torna a divulgação **obrigatória** — "se dado sintético ou IA foi usado, o público tem
de ser informado"
([Ahuja e Bretcha, Research World, 08/01/2026](https://researchworld.com/articles/why-the-icc-esomar-code-will-matter-more-than-ever-in-2026)).

**E o custo caindo.** [Itkin, "Poor Man's Agentic Modeling"](https://arxiv.org/html/2608.11215)
(07/2026) substitui cada agente LLM por um modelo de 2 a 12 parâmetros ajustado a partir de
"algumas centenas a alguns milhares de consultas baratas", e roda a sociedade em laptop, varrendo
N de 20 a 3.200; os custos reportados são da ordem de **US$ 0,44 a US$ 0,67 por três a seis mil
decisões**, com orçamento total do estudo em "alguns dólares".

**Nada disso é padrão de nenhum fluxo em escala.** Nenhuma plataforma declara simulação como
etapa obrigatória de lançamento; nenhum instituto substituiu painel humano; nenhum periódico
aceita simulação como evidência confirmatória. É esse "ainda não" que faz o tema caber na
seção 4 em vez de parar aqui.

## 4. As disrupções-raiz

### D1 — O túnel de vento social: pré-teste de mecânica de plataforma em população de agentes

**O que rompe.** A regra hoje é que o efeito agregado de uma decisão de interação — o que o novo
ranking faz com a polarização, o que a nova regra de moderação faz com a cascata de
desinformação — só é descoberto **depois** de exposto a gente real, por teste A/B ou rollout
gradual. Se o sandbox pré-implantação funcionar, o rollout gradual perde a função de
*descoberta* e fica só com a de *confirmação*. Some, junto, uma defesa institucional inteira:
"não havia como saber antes".

**Teste 1 (madura?)** Não. Não há três implantações em produção, em escala, como opção padrão:
há papers, código aberto e piloto. **Teste 2 (emergente?)** Sim — OASIS e AgentSociety são
software aberto em uso fora dos seus autores; PolicySim está em conferência de primeira linha
(WWW 2026) propondo exatamente esse uso. **Teste 3 (disruptiva?)** Sim, com ator nomeável: o
*beta fechado / rollout gradual como instrumento de descoberta de dano emergente* deixa de ser
necessário — não fica mais lento, fica dispensável na etapa em que hoje é obrigatório.

**Por que agora e não em 2019.** Antes o agente ou seguia regra escrita à mão (e então o
resultado era o que o modelador já supunha) ou não escalava. A combinação de memória/reflexão
(Park 2023) com escala de 10⁴–10⁶ agentes e sistema de recomendação embutido (OASIS,
AgentSociety) é recente e replicável.

**O que falta.** Um caso público em que um dano previsto em sandbox tenha depois sido observado
(ou desmentido) no mundo real, com os dois lados publicados. Sem isso, o instrumento não tem
nenhuma calibração externa.

### D2 — A população sintética entra antes do humano na pesquisa de produto

**O que rompe.** A primeira rodada — teste de conceito, reação a mensagem, triagem de hipótese
de UX — deixa de exigir recrutar pessoa paga. Não é que o humano suma: é que ele **muda de
posição na fila**, de primeiro respondente para validador final.

**Teste 1 (madura?)** Não, e a prova é normativa: se fosse padrão consolidado, não teria acabado
de entrar no Código ICC/ESOMAR como algo a declarar. **Teste 2 (emergente?)** Sim — há produto
comercial vendido, há norma setorial reagindo, e há medida acadêmica de desempenho
(83–86% do teste-reteste humano em itens de GSS, Park et al. 2411.10109). **Teste 3
(disruptiva?)** Sim: o *painel humano pequeno de triagem exploratória* perde a razão de existir
como etapa obrigatória. O que sobrevive é outra coisa — o painel como padrão-ouro de calibração,
que é um negócio diferente do de hoje.

**O que falta, e é grave.** Validação externa que resista. O trabalho mais cuidadoso que abri —
[Jia et al., "When Can Digital Personas Reliably Approximate Human Survey Findings?"](https://arxiv.org/abs/2605.10659)
(11/05/2026), construído sobre o painel LISS com respostas retidas pós-corte — conclui que
personas digitais melhoram o alinhamento com a **distribuição** de respostas em domínios ligados
a atributos estáveis, mas "permanecem limitadas para predição individual e falham em recuperar a
estrutura multivariada do respondente", indo melhor em perguntas de baixa variabilidade e pior
em respostas "subjetivas, heterogêneas ou raras". Isto é: a população sintética acerta o meio e
erra a borda — e borda é onde mora quase tudo que interessa a design de mídia.

### D3 — O instrumento sai do laboratório: sociedade simulada roda em laptop

**O que rompe.** A premissa de que fazer experimento social exige instituição — orçamento de
nuvem, laboratório, comitê. Com surrogate destilado (Itkin, 2026), a sociedade de milhares de
agentes roda em máquina pessoal por alguns dólares, e a competência vira desenhar o cenário, não
bancar a infraestrutura.

**Teste 1 (madura?)** Não — é método de 2026, um autor, sem adoção difundida. **Teste 2
(emergente?)** Sim, por pouco, e por convergência: existe também a via do simulador aberto
(OASIS, AgentSociety) e o sinal de simulação rodando inteira no navegador que a varredura da
turma registrou (Gestalt Village). Não é linha única de laboratório. **Teste 3 (disruptiva?)**
Sim: o *monopólio institucional sobre o experimento social* perde sentido. Quem quiser rodar uma
sociedade sintética e publicar o resultado não precisa de ninguém.

**O que falta.** Que a destilação preserve o que interessa. O método de Itkin é assumidamente
macroscópico — ele troca a cognição individual por comportamento agregado, o que é honesto e
também é a limitação: o que emerge de conversa entre agentes, e não de estatística de decisão,
pode não sobreviver à substituição.

## 5. A roda dos futuros

O bloco abaixo é lido por máquina. Em prosa, três observações que o YAML não carrega:

**Um efeito foi rebaixado de propósito.** O `e1.2` ("o A/B test deixa de ser onde o risco
aparece") sobreviveu à auditoria da Fase 4 como *extrapolação linear* e como *velocidade de
adoção sem precedente comparável* — está em `confianca: baixa` por decisão, não por falta de
elaboração. Detalhe na seção 7.

**Um efeito foi cortado.** O que seria o `e1.2.1` ("o ciclo de release inteiro migra para
sandbox") saiu da roda: não havia passo intermediário narrável entre "o A/B deixa de descobrir
risco" e "a engenharia de release se reorganiza". Registro na seção 12.

**A 3ª ordem está quase toda em `baixa`, e isso é o resultado esperado.** As duas exceções em
`media` (`e3.1.1`, sobre declaração obrigatória de origem do dado) só estão ali porque o
movimento **já começou** em norma escrita — o que, note-se, também as torna as menos
interessantes como futurização.

```yaml
roda:
  - disrupcao: Pré-teste de mecânica de plataforma em população de agentes (o túnel de vento social)
    efeitos:
      - id: e1
        ordem: 1
        efeito: Equipes de plataforma passam a rodar feed, ranking e regra de moderação contra uma população de agentes antes de expor usuário real, porque o sandbox aberto já reproduz polarização e efeito manada de forma configurável
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Surge no time de produto a função de quem desenha e calibra a população de teste (persona, topologia de rede, recomendador) separada de quem escreve o algoritmo, como QA se separou de desenvolvimento
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O relatório de simulação pré-lançamento passa a ser exigido por regulador em avaliação de risco sistêmico, e "não havia como saber antes" deixa de funcionar como defesa depois de um dano emergente
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: Quem publica a população sintética de referência calibrada ganha poder de definir o que conta como usuário típico, e a população de teste vira infraestrutura disputada como hoje são os benchmarks
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O teste A/B perde a função de descobrir risco e fica com a de confirmar risco já previsto, encurtando a janela em que usuário real é exposto a mecânica não testada
            sinal: fraco
            prazo: 2030
            confianca: baixa
      - id: e2
        ordem: 1
        efeito: Testar uma hipótese sobre dinâmica social de plataforma (cascata de desinformação, brigada, polarização por recomendação) deixa de exigir acesso a dado concedido pela plataforma, porque o simulador aberto traz o recomendador dentro
        sinal: medio
        prazo: 2027
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: A pesquisa crítica de plataforma ganha uma via que não passa por API concedida — não para medir o que acontece lá dentro, que continua fechado, mas para gerar e descartar hipótese antes de pedir acesso, tornando o corte de API um veto menos completo
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Instala-se uma disputa de método em que a plataforma responde ao achado de simulação dizendo "sua população não é a minha", e sem padrão público de calibração a disputa não se resolve por evidência
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: População sintética entra antes do humano na pesquisa de produto e de conteúdo
    efeitos:
      - id: e3
        ordem: 1
        efeito: A primeira rodada de teste de conceito e de reação a mensagem passa a ser feita com agentes ancorados em autorrelato, e o respondente humano é reservado para confirmar o que a rodada sintética apontou
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: O instituto de pesquisa deixa de vender volume de entrevista e passa a vender calibração e certificação, com o painel humano virando o padrão-ouro que valida a população sintética de um cliente
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Declarar a origem do dado (sintético ou humano) sai do código setorial de pesquisa e vira exigência contratual e de publicação também fora dele, alcançando alegação de produto e peça de comunicação
                sinal: medio
                prazo: 2030
                confianca: media
              - id: e3.1.2
                ordem: 3
                efeito: O acesso a gente real se reposiciona como bem escasso e caro na cadeia de pesquisa, e o diferencial competitivo passa a ser ter painel humano vivo, não ter volume de dado
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: O viés do modelo entra no produto mais cedo e menos visível, porque o que a população sintética representa mal — resposta subjetiva, heterogênea ou rara — deixa de ser testado em vez de aparecer como resultado negativo
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Produtos de mídia convergem para o centro do que o modelo representa bem, e proposta de nicho cultural perde justamente a etapa de teste que serviria para defendê-la internamente
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A sociedade simulada sai do laboratório e roda em máquina pessoal
    efeitos:
      - id: e4
        ordem: 1
        efeito: Rodar uma sociedade de milhares de agentes deixa de exigir orçamento de nuvem, porque o agente LLM é substituído por um surrogate de poucos parâmetros ajustado com algumas centenas de consultas
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Aluno, jornalista e ativista passam a produzir resultado de simulação social sem instituição, sem financiamento e sem passar por comitê de ética, porque nenhuma dessas instâncias tem jurisdição sobre agente
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A categoria "experimento social" se parte em duas — o que envolve pessoa, regulado, e o que envolve agente, não regulado — e a segunda cresce sem instância que avalie desenho nem divulgação
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: O volume de resultado de simulação publicado cresce mais rápido que a capacidade de validá-lo, e "plausível" passa a circular como se fosse "medido" porque a validação corrente é avaliação subjetiva de credibilidade
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Periódico e conferência criam faixa própria de submissão para evidência simulada, exigindo mecanismo declarado e não só reprodução do fenômeno, sob pena de a área perder a distinção entre simular e medir
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — a simulação rodando no navegador.** A varredura da turma registrou uma vila
simulada que roda inteira no cliente, sem rede. Não consegui abrir fonte primária sobre ela
nesta rodada (registro na seção 12), mas o sinal converge com o que consegui verificar: o método
de surrogate destilado de Itkin roda em laptop por dólares. Dois caminhos independentes apontando
para "simulação social é barata e pessoal" é mais forte que qualquer um dos dois sozinho.

**Sinal fraco 2 — a norma chegou antes do produto.** O Código ICC/ESOMAR já obriga a declarar uso
de dado sintético e persona sintética. Norma costuma vir atrasada; aqui veio antes de existir
adoção majoritária. Isso pode significar que o setor já vê o deslocamento como inevitável — ou
que o setor está se protegendo de uma disrupção que ele próprio ainda não sabe se vai acontecer.
Neutro: as duas leituras cabem no mesmo fato.

**Sinal fraco 3 — o escrutínio metodológico começou cedo.** Em menos de três anos o campo já
produziu revisão crítica ([Larooij e Törnberg](https://arxiv.org/abs/2504.03274)), régua de
validação estatística ([Hullman et al.](https://arxiv.org/html/2602.15785)) e escala formal de
plausibilidade de mecanismo ([Zhao et al.](https://arxiv.org/abs/2605.12824)). Um campo que
ganha seus céticos rápido tende a estabilizar melhor — e também tende a demorar mais a virar
prática, porque a régua atrasa a adoção. De novo, as duas leituras.

**Wildcard A — um resultado de simulação vira evidência em decisão pública e está errado.** Não
é hipótese solta: AgentSociety declara testar renda básica universal e resposta a furacão, e se
apresenta como plataforma "para cientistas sociais e formuladores de política". Basta que uma
dessas saídas circule sem a ressalva de mecanismo. O dano não seria a decisão errada em si — seria
o descrédito retroativo do instrumento inteiro, incluindo os usos em que ele funcionava.

**Wildcard B — alguém demonstra que o fenômeno emergente era artefato de prompt.** É a hipótese
explícita de Zhao et al.: distinguir emergência genuína de artefato de decisão de engenharia de
prompt. Se um trabalho mostrar que a polarização observada nos simuladores de referência é efeito
do prompt e não da interação, o efeito `e1` cai junto, e a D1 inteira vira melhoria de
prototipagem em vez de instrumento.

**Wildcard C — um caso de "usuário sintético" processado como pesquisa com humanos.** Os agentes
de Park et al. 2411.10109 são construídos a partir de duas horas de entrevista de pessoa real e
identificável. Se um agente desses produzir dado que prejudique quem o originou, a pergunta
"isso é pesquisa com seres humanos?" deixa de ser acadêmica e vira litígio. Nenhuma das fontes
que abri trata disso; Hullman et al., aliás, não discutem revisão ética em nenhum ponto.

## 7. Contra o próprio mapa

Produto direto da auditoria da Fase 4, item a item — não texto genérico.

**1. `e1.2` é extrapolação linear E assume adoção sem precedente comparável.** "O A/B test deixa
de descobrir risco" é a curva de hoje só que mais: pré-teste em simulação já existe como prática
menor, e o efeito só a projeta. Pior, ele assume que a indústria de plataforma reorganize seu
ciclo de release em ~4 anos. O caso comparável mais próximo é o *crash test* obrigatório
automotivo, que levou décadas entre ser tecnicamente viável e virar exigência — e ele tinha
morte contada por corpo como métrica, coisa que dano de feed não tem. Efeito mantido, rebaixado
para `confianca: baixa`.

**2. `e1.1.1` depende de um regulador que ainda não pediu isso.** O efeito supõe que avaliação
de risco sistêmico passe a aceitar — e depois exigir — relatório de simulação. Nada nas fontes
que abri indica que algum regulador tenha pedido. É derivação lógica da D1, não observação.
`sinal: fraco`, `confianca: baixa`, e assumido como tal.

**3. `e3.1.1` é o efeito menos interessante do mapa, e por um motivo específico.** Ele está em
`media` porque já aconteceu em parte: o Código ICC/ESOMAR já obriga a divulgação. O que resta de
futurização é só o alargamento para fora do setor de pesquisa. Um efeito que já começou não é
prova de bom mapa — é o que sobra quando a análise fica perto demais do presente.

**4. A D2 pode estar lendo capacidade como adoção.** Os 83–86% de Park et al. são contra a
consistência teste-reteste dos próprios participantes, em itens de survey, numa amostra dos EUA.
Jia et al., com desenho mais duro (respostas retidas pós-corte), acham que a persona falha em
predição individual e em estrutura multivariada. Se a leitura dura prevalecer, a D2 não se
concretiza como disrupção: vira ferramenta de geração de hipótese, útil e não estrutural — e caem
com ela `e3`, `e3.1`, `e3.1.1`, `e3.1.2`.

**5. A D1 pode simplesmente não acontecer, e é a que mais leva junto.** Ela depende de que o
comportamento agregado do sandbox tenha relação causal com o comportamento agregado real. Larooij
e Törnberg dizem que a validação hoje é avaliação subjetiva de credibilidade e que a natureza de
caixa-preta do LLM limita justamente o desemaranhamento de mecanismo causal emergente. Se isso
não for resolvido até ~2029, D1 não escala, e caem `e1`, `e1.1`, `e1.1.1`, `e1.1.2`, `e1.2` —
metade da roda.

**6. Viés de quem pediu, declarado.** O recorte veio com a régua da disciplina — excluir o que já
é comum em produto de massa — e isso empurra o mapa para o que ainda não aconteceu, que é
sistematicamente o território de menor evidência. Um mapa feito sem essa régua teria mais
material sólido e menos futurização; este trocou solidez por alcance, por instrução explícita.

**7. Viés de quem construiu a skill, declarado.** A skill `futurizacao-vafs` exige que toda
disrupção tenha "ator que perde a razão de existir". Isso é um bom freio contra chamar melhoria
de disrupção — e é também um incentivo a **encontrar** uma vítima nomeável para cada candidato,
mesmo quando o efeito real é distribuído. As três disrupções aqui nomearam o rollout gradual, o
painel de triagem e o monopólio institucional. Ao menos a terceira é mais uma abstração que um
ator; sustentei a nomeação, mas registro a fragilidade.

**8. Viés de fonte.** Onze das doze fontes são acadêmicas, e nove são arXiv. Não abri nenhum
relatório de plataforma nem de instituto de pesquisa com dado primário — procurei, e o que
encontrei do lado comercial era material de fornecedor vendendo a própria solução (seção 12).
Logo: este mapa lê o campo pelo olhar de quem publica sobre ele, que é sistematicamente mais
cauteloso e mais autocrítico que quem o vende.

## 8. O que a máquina errou

**1. Título e número errados, ambos corrigidos contra a fonte.** Eu ia citar o trabalho de Park e
colegas como "Generative Agent Simulations of 1,000 People", com a marca de **85%** de acurácia —
que é como o resultado circula em texto secundário. Abri
[arXiv:2411.10109](https://arxiv.org/abs/2411.10109): o título da versão atual é **"LLM Agents
Grounded in Self-Reports Enable General-Purpose Simulation of Individuals"**, e não existe um
"85%". Os números são **83%** (só entrevista), **82%** (só survey), **86%** (combinado) e **74%**
(só demografia), todos relativos à consistência teste-reteste de duas semanas dos próprios
participantes. A diferença entre "85%" e "83/82/86% conforme a fonte de dado" é exatamente o tipo
de erro que passa despercebido: o número arredondado soa igualmente preciso e apaga a variável
que interessa — qual dado alimentou o agente.

**2. Um número atraente que NÃO entrou, porque não localizei na fonte.** Apareceu em resultado de
busca a afirmação de que, numa revisão de **285 comparações silício-humano**, apenas 24,9%
convergiram e 65,3% divergiram. É o número perfeito para este documento. Fui atrás: o resumo de
busca o associava a Jia et al. (arXiv:2605.10659), e ao abrir o paper vi que ele é outra coisa —
um estudo sobre o painel LISS, sem revisão de 285 comparações. **Não cito o número**, porque não
achei a fonte dele. Registro aqui porque não citar um número bom é invisível no texto final, e
essa invisibilidade é justamente o que torna fácil citá-lo sem checar.

**3. Uma projeção de mercado descartada por ser alegação de fornecedor.** Circula que "dado
sintético responderá por mais de 50% dos insumos de pesquisa de mercado até 2027" e que "95% dos
líderes de insights planejam adotar dado sintético". As três páginas em que encontrei isso vendem
plataforma de respondente sintético. Alegação de fornecedor sobre o próprio mercado não sustenta
efeito neste mapa; ficou fora da roda e fora da contagem de fontes.

**4. A data de OASIS não é a que o enunciado do tema sugere.** O enunciado diz "em 2026 há
plataformas declarando um milhão de agentes". OASIS, que é a plataforma que declara isso, foi
submetido em **18 de novembro de 2024**. A capacidade é dois anos mais velha que o enquadramento
— o que muda a leitura de prazo: a escala não é a novidade de agora, o que é novo é o uso dela
como instrumento de pré-teste (PolicySim, 2026).

**5. Não errei, mas quase deduzi.** Assumi por um momento que o Brasil não tivesse nada
institucional em simulação social. Buscando, achei o PolicySpace do Ipea, calibrado para 333
municípios — rule-based, de 2018. A conclusão correta é mais específica e mais útil que a minha
suposição: o Brasil tem a *prática* instalada, não a *virada* de agentes com LLM.

## 9. Três cenários para 2031

**Cenário A — O instrumento amadurece e é adotado com régua (o menos provável dos três).**
A escala de plausibilidade de mecanismo de Zhao et al. e a régua de calibração estatística de
Hullman et al. viram exigência de revisão por pares até 2029. Simulação pré-implantação entra no
processo de plataforma como etapa declarada, com população de teste publicada e auditável. Quem
projeta mídia e interação ganha uma etapa nova e um vocabulário novo — "essa mecânica passou no
túnel de vento com a população X, versão Y". O painel humano vira serviço de calibração, caro e
respeitado. *Requisito duro:* alguém publicar um caso de predição de sandbox validada depois no
mundo real. Sem isso, este cenário não começa.

**Cenário B — Adoção assimétrica: barato por dentro, sem valor por fora (o mais provável).**
A simulação se instala como ferramenta interna de geração de hipótese — barata, útil, rotineira —
e **não** ganha estatuto de evidência. Ninguém publica achado de simulação como resultado;
regulador não pede; periódico não aceita como confirmatório. Quem projeta usa todo dia e não cita
em lugar nenhum, como se usa protótipo de papel. A consequência silenciosa é `e3.2`: o viés do
modelo entra no produto cedo e ninguém mede, porque o instrumento não é oficial o suficiente para
ter auditoria. Este é o cenário em que o mapa acima acerta as 1ªs ordens e erra quase todas as
3ªs.

**Cenário C — Descrédito por uso indevido.** Um resultado de sociedade sintética é usado como
evidência numa decisão pública de alta visibilidade — política social, moderação eleitoral — e é
desmentido depois. A reação atinge o instrumento inteiro, inclusive os usos em que ele
funcionava. Simulação vira palavra suja em processo formal, e sobrevive só como ferramenta
interna não declarada, o que é o Cenário B pela porta dos fundos e com mais dano. *Gatilho
observável:* a primeira citação de saída de simulador de agentes em documento oficial de política
pública, sem ressalva de mecanismo.

**O que separa A de B.** Não é capacidade do modelo. É se existe, até 2029, **uma comparação
pública entre predição de sandbox e desfecho real**. Esse é o indicador único a monitorar.

## 10. O experimento

**Túnel de vento de bolso** — testável presencialmente com a turma, numa aula.

**Hipótese.** Uma população de agentes com persona derivada de autorrelato prevê a *direção* do
efeito de uma decisão de ranking sobre um grupo real, mas erra a *dispersão* — acerta a média,
perde a borda. (Previsão direta de Jia et al.: bem em pergunta de baixa variabilidade, mal em
resposta heterogênea.)

**Montagem.** (a) Cada participante responde a um questionário curto de autorrelato — hábitos de
consumo de conteúdo, três temas de interesse, três de rejeição, tolerância a discordância. (b)
Monta-se uma micro-rede social de turma, com um feed cujo ranking tem duas variantes: **R1**,
cronológico; **R2**, por afinidade declarada. (c) Constrói-se uma população de agentes, um por
participante, com persona = o autorrelato dele, sobre um simulador aberto (OASIS serve, e já traz
recomendador). (d) Roda-se a mesma sessão de 40 minutos duas vezes: uma com os agentes, uma com
as pessoas.

**Medida.** Três números, os mesmos dos dois lados: proporção de interações entre pessoas de
temas opostos; concentração de atenção nos três posts mais vistos (Gini); e taxa de abandono do
feed. Compara-se **a diferença R2 − R1** em cada lado, não o valor absoluto — é o efeito da
decisão de projeto que interessa, não o realismo do agente.

**O que falsearia a hipótese.** Se a população sintética acertar também a dispersão (variância
dentro de ±20% da observada), a objeção central deste mapa enfraquece e a D1 fica mais forte. Se
errar até a direção do efeito em pelo menos uma das três medidas, a D1 perde a premissa, e o
mapa deve ser relido pelo Cenário B.

**Por que este experimento e não outro.** Porque ele testa a única coisa que separa o Cenário A
do B — comparação entre predição de sandbox e desfecho observado — na menor escala em que a
comparação ainda faz sentido. E porque ele é honesto sobre o próprio limite: 14 pessoas não são
uma população, e o resultado vale como demonstração de método, não como medida.

## 11. Fontes

Doze fontes abertas e lidas nesta sessão. O que foi só visto em resultado de busca, sem abrir,
não entra aqui nem na contagem.

1. Park, J. S.; O'Brien, J. C.; Cai, C. J.; Morris, M. R.; Liang, P.; Bernstein, M. S.
   **Generative Agents: Interactive Simulacra of Human Behavior.** arXiv:2304.03442, 07/04/2023
   (rev. 06/08/2023). `https://arxiv.org/abs/2304.03442`
2. Yang, Z. *et al.* **OASIS: Open Agent Social Interaction Simulations with One Million
   Agents.** arXiv:2411.11581, 18/11/2024. `https://arxiv.org/abs/2411.11581`
3. Piao, J. *et al.* **AgentSociety: Large-Scale Simulation of LLM-Driven Generative Agents
   Advances Understanding of Human Behaviors and Society.** arXiv:2502.08691, 12/02/2025.
   `https://arxiv.org/abs/2502.08691`
4. Park, J. S.; Zou, C. Q.; Kamphorst, J.; Egan, N.; Shaw, A.; Hill, B. M.; Cai, C.; Morris,
   M. R.; Liang, P.; Willer, R.; Bernstein, M. S. **LLM Agents Grounded in Self-Reports Enable
   General-Purpose Simulation of Individuals.** arXiv:2411.10109, 15/11/2024.
   `https://arxiv.org/abs/2411.10109`
5. Huang, R. *et al.* **PolicySim: An LLM-Based Agent Social Simulation Sandbox for Proactive
   Policy Optimization.** arXiv:2603.19649, 20/03/2026 (ACM Web Conference 2026).
   `https://arxiv.org/html/2603.19649`
6. Hullman, J.; Broska, D.; Sun, H.; Shaw, A. **This human study did not involve human subjects:
   Validating LLM simulations as behavioral evidence.** arXiv:2602.15785, 17/02/2026.
   `https://arxiv.org/html/2602.15785`
7. Jia, M.; Chen, Y.; Sharma, D.; Diaz-Rodriguez, J. **When Can Digital Personas Reliably
   Approximate Human Survey Findings?** arXiv:2605.10659, 11/05/2026.
   `https://arxiv.org/abs/2605.10659`
8. Larooij, M.; Törnberg, P. **Do Large Language Models Solve the Problems of Agent-Based
   Modeling? A Critical Review of Generative Social Simulations.** arXiv:2504.03274, 04/04/2025.
   `https://arxiv.org/abs/2504.03274`
9. Zhao, P.; Pham, D. H.; Vincent, N. **Mechanism Plausibility in Generative Agent-Based
   Modeling.** arXiv:2605.12824, 12/05/2026 (v2 em 17/05/2026; ACM FAccT 2026).
   `https://arxiv.org/abs/2605.12824`
10. Itkin, I. **Poor Man's Agentic Modeling: Simulating Large LLM-Agent Societies on a Laptop.**
    arXiv:2608.11215, 07/2026. `https://arxiv.org/html/2608.11215`
11. Ahuja, V.; Bretcha, J. **Why The ICC/Esomar Code Will Matter More Than Ever In 2026.**
    Research World, 08/01/2026.
    `https://researchworld.com/articles/why-the-icc-esomar-code-will-matter-more-than-ever-in-2026`
12. Furtado, B. A. **PolicySpace: agent-based modeling.** Ipea, 2018.
    `https://repositorio.ipea.gov.br/entities/book/d11e2635-69c2-4912-bf4a-629b208ec7b9`

## 12. Anexo — o levantamento bruto

### Entrevista (Fase 1) — os seis pontos

Os seis pontos vieram respondidos no próprio pedido; nenhum ficou em branco, e por isso a
`confianca` do documento **não** foi rebaixada para `baixa` pela regra de corte da Fase 1.
Registro do que foi recebido:

| # | Ponto | Resposta recebida |
|---|---|---|
| 1 | Tema e recorte | "Sociedades simuladas: a simulação como instrumento de investigação" — tema 6 de 19, família "Simulação e mundos" |
| 2 | Horizonte | 2031 |
| 3 | Para quem | Quem projeta mídia e interação |
| 4 | Recorte geográfico | Global, com nota sobre o Brasil |
| 5 | Descartado | O que já é comum em produto de massa (régua da disciplina); nenhuma outra exclusão |
| 6 | Viés | Neutro |

**Ressalva honesta:** esta rodada correu **sem interlocutor disponível para pergunta de volta**,
por instrução explícita de quem despachou. A skill normalmente pediria esclarecimento em pelo
menos dois pontos: (a) se "quem projeta mídia e interação" inclui quem projeta *plataforma* ou só
quem projeta *peça/produto de conteúdo* — assumi que inclui plataforma, e é o que sustenta a D1;
(b) o que exatamente conta como "comum em produto de massa" para este tema — assumi que exclui
NPC scriptado e ABM clássica, e mantém em jogo tudo que é agente com LLM. As duas suposições
estão declaradas aqui em vez de silenciosas, que é o que a regra de corte exige.

### Fase 2 — o teste aplicado, candidato por candidato

| Candidato | T1: madura? | T2: emergente? | T3: disruptiva? | Decisão |
|---|---|---|---|---|
| Pré-teste de mecânica de plataforma em população de agentes | Não — há paper e código aberto, não implantação padrão | Sim — OASIS/AgentSociety abertos e usados fora dos autores; PolicySim em WWW 2026 | Sim — o rollout gradual perde a função de *descobrir* dano emergente | **Aceita (D1)** |
| População sintética como respondente antes do humano | Não — se fosse, não teria acabado de entrar no Código ICC/ESOMAR | Sim — produto comercial, norma setorial reagindo, medida acadêmica publicada | Sim — o painel humano de triagem exploratória deixa de ser etapa necessária | **Aceita (D2)** |
| Sociedade simulada em máquina pessoal (surrogate destilado) | Não — método de 2026, sem difusão | Sim, por pouco — converge com simulador aberto e com simulação em navegador | Sim — o monopólio institucional sobre experimento social perde sentido | **Aceita (D3)** |
| ABM clássica com regra fixa (NetLogo, PolicySpace/Ipea) | **Sim** — décadas de uso em epidemiologia, tráfego, economia; 333 municípios no Ipea; o que resta é ficar mais rápido | — | — | **Rejeitada: madura.** Entra na seção 3 |
| Escala de um milhão de agentes, por si só | Não | Sim | **Não** — mais agentes é parâmetro, não mudança de natureza; nenhum ator perde razão de existir por causa do N | **Rejeitada: melhoria.** Vira condição de possibilidade da D1, não raiz |
| NPC com backend de LLM em jogo comercial | Não | Sim | Não, dentro deste recorte — melhora credibilidade narrativa; não dispensa nenhum ator do *método* de investigação | **Rejeitada: fora de escopo (tema 7) e melhoria** |
| Gêmeo digital de cidade com sensor (tráfego, energia) | Parcialmente madura em mobilidade e energia | — | Não — mais barato e mais rápido, mesma natureza; e só entra neste tema quando ligado a agentes com LLM | **Rejeitada: madura/melhoria** |
| Mercado de agentes com transação real | — | — | — | **Fora de escopo: tema 5** |
| Sociedade sintética como evidência formal em decisão pública | Não | **Não** — não existe caso estabelecido; é hipótese | — | **Rejeitada como raiz; movida para seção 6 (wildcard A)** |

### Fase 4 — o que a auditoria fez com cada efeito

**Rebaixados.** `e1.2` (de `media` para `baixa`): reprovado em dois dos três testes —
extrapolação linear e velocidade de adoção sem precedente comparável (o comparável mais próximo,
crash test automotivo, levou décadas e tinha métrica de dano contável).

**Reescritos com o passo que faltava.** `e2.1` estava como "a pesquisa crítica de plataforma
deixa de depender de API concedida" — o que pula uma etapa grosseira: simulação **não** dá acesso
ao que acontece dentro da plataforma real, e nenhuma fonte sustenta que dê. Reescrito para o que
o mecanismo permite de fato: gerar e descartar hipótese antes de precisar de acesso, o que torna
o corte de API um veto menos completo, não um veto inócuo. `e3.1.1` estava como "declarar origem
do dado vira obrigação" — mas isso já é verdade no Código ICC/ESOMAR desde 2025, ou seja, era
presente disfarçado de futuro. Reescrito para o alargamento que ainda não aconteceu: sair do
setor de pesquisa e alcançar alegação de produto e peça de comunicação.

**Cortado.** O que seria `e1.2.1` — "o ciclo de release das plataformas se reorganiza em torno do
sandbox" — saiu da roda. Não havia passo intermediário narrável entre "o A/B deixa de descobrir
risco" e "a engenharia de release muda de forma": só dava para escrever "e aí o processo todo
muda", que é o critério de parada (a) da Fase 3. Além disso, o efeito seria o mesmo para
praticamente qualquer disrupção em ferramenta de teste — critério (c).

**Mantidos sem alteração.** `e1`, `e2`, `e3`, `e4` (as quatro 1ªs ordens), `e3.2` e `e4.2`.
Todos passaram nos três testes: têm mecanismo narrável em uma frase, não são a curva de hoje
projetada, e não dependem de velocidade sem precedente. Isso é **6 de 19** efeitos intocados; os
outros 13 foram rebaixados, reescritos, ou nasceram já em `baixa` por decisão da auditoria.

### Buscas que não deram em nada

- **Caso brasileiro de simulação social com agentes LLM.** Procurei por instituto (Ipea, FGV,
  USP), por termo em português e por veículo nacional. Achei ABM clássica institucional
  (PolicySpace, incluído) e trabalhos brasileiros de sistemas multiagente com LLM em outros
  domínios — negociação agrícola em cenário de RPG, acesso a dados de transparência
  governamental, análise de desinformação climática no Cerrado. **Nenhum deles é sociedade
  simulada como instrumento de investigação social.** A nota sobre o Brasil neste documento é,
  portanto, deliberadamente magra: há prática madura de simular sociedade para política pública,
  e não encontrei a virada de agentes com LLM. Isso pode ser ausência real ou limite da minha
  busca em português; não sei distinguir os dois com o que abri.
- **Gestalt Village (simulação rodando inteira no navegador).** Citada na varredura da turma, não
  localizei fonte primária nesta rodada. Entrou na seção 6 como sinal declarado de segunda mão,
  explicitamente, e não sustenta nenhum efeito sozinho.
- **Dado primário de plataforma sobre uso interno de simulação pré-lançamento.** Não achei
  nenhum. Se alguma plataforma grande já faz isso, não publicou. É a lacuna mais incômoda deste
  levantamento, porque é exatamente onde a D1 se confirmaria ou cairia.
- **Lado comercial da pesquisa por respondente sintético.** O que encontrei era material de
  fornecedor de plataforma de respondente sintético, com números sobre o próprio mercado
  (adoção projetada, taxa de alinhamento com humano). Excluído por ser alegação de vendedor sobre
  o próprio produto — ver seção 8, item 3. O único material de setor que entrou foi normativo
  (ICC/ESOMAR), que não vende plataforma.
- **Regulador exigindo simulação pré-implantação.** Procurei e não achei. `e1.1.1` fica como
  derivação lógica declarada, não como observação — ver seção 7, item 2.

### Nota sobre ferramentas

Busca e leitura de página estavam disponíveis nesta sessão e foram usadas: doze páginas abertas
e lidas, listadas na seção 11. Nenhuma fonte foi citada de memória. Duas citações que a memória
oferecia como seguras foram conferidas contra a fonte e **estavam erradas ou imprecisas** — o
título e o número de Park et al. 2411.10109 (seção 8, item 1) e a data de OASIS relativa ao
enquadramento do tema (item 4). É o que a skill pede que seja registrado: não a declaração de que
se verificou, mas o que a verificação mudou.
