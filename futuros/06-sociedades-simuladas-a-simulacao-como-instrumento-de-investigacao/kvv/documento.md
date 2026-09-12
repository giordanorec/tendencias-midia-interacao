---
tema: "Sociedades simuladas: a simulação como instrumento de investigação"
slug: sociedades-simuladas-a-simulacao-como-instrumento-de-investigacao
autor_login: kvv
zona_de_interesse: Simulação e mundos
data: 2026-09-15
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 12
efeitos_ordem_3: 18
tecnologias_citadas: [agentes generativos com memória e reflexão, simulação social em escala de 1M de agentes, gêmeo digital de rede social, agentes ancorados em auto-relato individual, modelagem baseada em agentes generativos (Concordia), replay determinístico com semente auditável, SLMs sub-3B com WebGPU no navegador, otimização topológica de custo de token]
fontes: 16
confianca: media
experimento: "Um túnel de vento de bolso — a turma roda a mesma micro-rede social com 40 agentes LLM sob duas regras de recomendação e três sementes, e compara com 48h da própria turma no mesmo desenho."
skill_usada: futurizacao-kvv
publico_ok: false
---

## Seção 1 — Resumo

Este mapa trata a sociedade simulada não como gênero de software, mas como **instrumento de medida** — o túnel de vento das ciências sociais e do design de plataforma. A modelagem baseada em agentes com regras fixas é madura desde os anos 1990 e foi recusada pelo filtro desta skill; o que ainda não se concretizou são três rupturas distintas: o agente **ancorado numa pessoa real** (1.052 americanos, entrevistas de duas horas, 86% da consistência teste-reteste da própria pessoa), a **simulação como etapa obrigatória antes do lançamento**, empurrada menos pela tecnologia e mais pela avaliação de risco sistêmico do DSA, e a **simulação barata e local**, rodando no navegador sem nuvem. Nenhuma está pronta: falta validação fora dos EUA, falta quem certifique que a sociedade sintética se parece com a real, e falta prova de que a variância não colapsa. O documento rastreia efeitos de primeira, segunda e terceira ordem até 2031, submete o próprio raciocínio a teste adversarial, registra sete erros cometidos pela máquina nesta sessão e propõe um experimento construível hoje, em sala, com 40 agentes e 48 horas de turma.

## Seção 2 — O tema

Uma sociedade simulada é um ambiente controlado em que múltiplos agentes se afetam, produzem dado analisável e podem ser observados por dentro. A parte antiga disso — modelagem baseada em agentes, NetLogo, regras fixas — tem trinta anos. A parte nova é o agente cujo "miolo" é um modelo de linguagem: ele tem memória, reflete sobre o que viveu, conversa em linguagem natural com os outros e decide sem que ninguém tenha escrito a regra que produz aquela decisão. Foi isso que mudou de figura em 2023, quando vinte e cinco agentes numa vila estilo *The Sims* organizaram uma festa de Dia dos Namorados sem que a festa estivesse no roteiro [1].

O contato com mídia e interação é direto e tem duas pontas. Na primeira, a simulação é **objeto de projeto**: alguém desenha o ambiente, a granularidade do tempo, o que o agente vê e o que ele esquece — e essas são decisões de interface, não de infraestrutura. Na segunda, e mais consequente, a simulação é **ferramenta de quem projeta**: um feed, uma regra de moderação, um algoritmo de recomendação podem ser rodados contra uma população sintética antes de existirem para gente de verdade. O gêmeo digital de rede social já é feito e publicado com esse propósito explícito [4].

Por que isto exige mapa prospectivo e não levantamento de estado da arte: porque o estado da arte aqui é uma frase curta e pouco interessante ("existem plataformas de simulação social com LLM, algumas declaram até um milhão de agentes"), enquanto a pergunta que importa é uma cadeia de consequências que ainda não aconteceu. O que acontece com a pesquisa com pessoas quando o usuário sintético fica bom o bastante? Quem valida que a população sintética representa a real, quando o resultado dela informa política pública? O que muda no ofício de projetar quando testar em população sintética for tão barato quanto rodar um teste unitário? Nenhuma dessas perguntas se responde catalogando ferramentas — todas dependem de efeitos de segunda e terceira ordem, que é exatamente o que a Roda dos Futuros existe para expor.

## Seção 3 — Onde isso está hoje

**O que funciona.** Três resultados são sólidos e verificáveis. (a) A arquitetura de agente generativo — percepção, memória, reflexão, planejamento — produz comportamento social emergente reconhecível e foi publicada em conferência revisada por pares (UIST'23) [1]. (b) A escala deixou de ser o gargalo: OASIS é um simulador aberto que declara suportar até um milhão de usuários, replicando difusão de informação, polarização de grupo e efeito manada em ambientes modelados sobre X e Reddit [2]. AgentSociety, da Tsinghua, roda mais de 10 mil agentes e ~5 milhões de interações em ambiente urbano, econômico e social, com cinco eixos de estudo declarados: polarização, mensagem inflamatória, renda básica universal, choques externos e sustentabilidade urbana [8]. (c) A calibração individual funciona melhor do que se esperava: agentes construídos a partir de entrevistas semiestruturadas de duas horas com 1.052 americanos reproduzem as respostas dessas pessoas na General Social Survey a 86% da consistência que as próprias pessoas têm consigo mesmas após duas semanas — e reduzem o viés de acurácia entre grupos raciais e ideológicos em comparação com agentes descritos apenas por demografia [3].

**O que falha.** A revisão sistemática mais direta sobre o assunto tem o título como conclusão: simulações humanas baseadas em LLM **ainda não são confiáveis**, com discrepâncias significativas entre o resultado simulado e a ação humana autêntica, por duas famílias de causa — limites do próprio modelo e falhas no desenho da simulação [5]. O inventário de modos de falha é razoavelmente estável na literatura: **diversidade** (saída genérica e estereotipada), **viés** (erro sistemático ao simular grupos específicos), **bajulação** (o agente responde o que agrada), **estranheza** (resultado superficialmente certo produzido por mecanismo que não é humano) e **generalização** (erro fora da distribuição, justamente onde a descoberta científica moraria) [6]. Do lado conceitual, a crítica mais organizada lista seis falácias na substituição de participantes humanos: equiparar predição de token a inteligência, tratar o modelo como "o humano médio", ler alinhamento como explicação, antropomorfizar, essencializar identidades e trocar dado de modelo por evidência humana [7]. E há a falha quantitativa que mais importa para quem vai usar isso como medida: quando respondentes sintéticos substituem uma amostra representativa, a variância colapsa e uma fração grande das relações estatísticas muda de sinal ou de magnitude [12].

**Quem está construindo.** Academia: Stanford HCI (agentes generativos e agentes ancorados em indivíduo) [1][3]; Tsinghua (AgentSociety) [8]; o consórcio europeu do Y Social, gêmeo digital de rede social com agentes LLM [4]. Laboratório industrial: Google DeepMind, com a Concordia — biblioteca de modelagem baseada em agentes generativos cuja metáfora central é o RPG de mesa, com um *Game Master* que arbitra a plausibilidade das ações declaradas em linguagem natural [9]. Comunidade aberta: CAMEL-AI (OASIS) [2]. Mercado: o setor de pesquisa de mercado, que vende "respondente sintético" — e onde ESOMAR, Kantar, NIQ e Bain convergem, em 2026, no enquadramento de **suplemento validado contra humanos, não substituto**, com o código ICC/ESOMAR tendo passado a definir "dado sintético" formalmente em junho de 2025 [12].

**A medição do próprio aluno**, que este mapa acolhe como dado e não como fonte: de 7.776 anúncios em dois dos maiores diretórios comerciais de IA, **dois** eram sobre simulação. A leitura dele — "diretório vende produtividade; simulação é instrumento de investigação" — é o achado mais útil da varredura, porque indica que a difusão deste tema **não passa pelo canal comercial** e, portanto, não será detectada por quem olha o mercado.

**Onde passa a linha, formalmente.** Maduro e recusado: ABM clássico de regra fixa; persona sintética gerada por prompt sem calibração nem população; gêmeo digital industrial. Emergente e aceito: agente com modelo de linguagem em população, escala de milhares a milhões, e a simulação tratada como instrumento de medida sujeito a validação.

## Seção 4 — As disrupções-raiz

**Recusados pelo filtro anti-tecnologia madura.** Antes das três escolhidas, o registro formal do que foi rejeitado. *(i) Modelagem baseada em agentes clássica (NetLogo, Schelling, Sugarscape):* madura desde os anos 1990, com literatura consolidada e adoção institucional — não rompe nada, é o estado anterior contra o qual a ruptura se define. *(ii) "Persona sintética" por prompt:* é IA generativa básica aplicada a um caso de uso antigo (o *proto-persona* do design). Não cria comportamento entre agentes, não produz emergência e não gera dado analisável — acelera a redação de um artefato que já existia. É melhoria incremental, não ruptura. *(iii) Gêmeo digital de fábrica, cidade ou logística:* maduro, com fornecedores estabelecidos e ciclo de compra corporativo; o objeto ali é o processo físico, não a sociedade. *(iv) "Agente com memória":* é componente, não disrupção — sozinho, é uma otimização de arquitetura de software.

### Disrupção 1 — O indivíduo reexecutável: a sociedade sintética deixa de ser demográfica e passa a ser ancorada em pessoas reais

**O que rompe.** Rompe a unidade de análise da pesquisa social. Hoje, a unidade é a *amostra*: recruta-se, mede-se uma vez, e o dado envelhece. Com agentes ancorados em auto-relato individual, a unidade passa a ser o **banco de indivíduos reexecutáveis** — mil pessoas que podem ser reperguntadas infinitas vezes, sobre qualquer coisa, sem recrutar ninguém de novo. Isso rompe também a economia da pesquisa (o custo marginal da pergunta seguinte vai a zero) e a própria noção de "coleta": não há coleta, há execução.

**Por que agora e não há cinco anos.** Três condições se juntaram e nenhuma existia em 2021. A arquitetura de memória com reflexão e recuperação, que só foi demonstrada em 2023 [1]. A evidência de validade **no nível do indivíduo**, e não da média — 86% da consistência teste-reteste da própria pessoa, publicada a partir de novembro de 2024 e ainda em revisão em 2026 [3]. E a queda de custo por rodada: o trabalho de otimização topológica de 2026 relata redução de 50–90% no consumo de tokens mantendo ou melhorando a fidelidade, o que muda simulação de experimento único para rotina [10].

**O que falta para se concretizar.** Falta validação fora do contexto em que foi construída — a evidência é de amostra americana medida contra a General Social Survey, e não há razão para presumir que se transfira ao Brasil ou a qualquer sociedade com outra estrutura de clivagem. Falta resolver a variância: se o duplo acerta a média e perde a cauda, ele serve para descrever e não para descobrir [12]. Falta regime de consentimento — a entrevista foi dada uma vez, o duplo roda para sempre, e nenhum termo de consentimento existente cobre isso [13]. E falta preço: quem é dono do duplo, e quem é pago quando ele trabalha.

### Disrupção 2 — O túnel de vento obrigatório: simular a plataforma antes de soltá-la em gente

**O que rompe.** Rompe o A/B test em população real como método canônico do design de plataforma. O padrão atual da indústria é experimentar **nas pessoas** — soltar a variação para 1% dos usuários e medir. A ruptura é deslocar o primeiro teste para uma população sintética, invertendo a ordem: simula-se, descarta-se o que falha, e só então se expõe gente. Rompe, junto, a assimetria de quem pode auditar: hoje só a plataforma consegue rodar o experimento, porque só ela tem os usuários; um ambiente sintético aberto é replicável por um regulador, um jornalista ou uma universidade.

**Por que agora e não há cinco anos.** Porque a escala e o gêmeo chegaram ao mesmo tempo que a obrigação. Do lado técnico: simuladores abertos declarando até um milhão de agentes com espaço de ação rico [2], e gêmeos digitais de rede social publicados como instrumento de estudo de política de plataforma [4]. Do lado regulatório: o DSA instituiu um ciclo contínuo de avaliação de risco sistêmico sobre sistemas de recomendação, e em 2026 a Comissão Europeia estendeu o caso contra o X ao Grok justamente pela questão da **avaliação antes do lançamento de funcionalidade** [11]. A primeira rodada de avaliações de risco, segundo a crítica, reciclou material e ignorou risco de *design* [11] — é essa lacuna que a simulação se candidata a ocupar.

**O que falta para se concretizar.** Falta, sobretudo, **quem certifica**. Não existe benchmark público de calibração social — nenhuma forma acordada de dizer "esta população sintética se parece com a população da Alemanha". Sem isso, o resultado da simulação não é evidência, é argumento. Faltam também garantias de auditabilidade: semente, replay determinístico e artefato versionado precisam ser exigência, ou a simulação vira a peça retórica que a empresa quiser. E falta jurisprudência: nenhum regulador declarou ainda que aceita resultado simulado como prova de mitigação. O DSA **não exige simulação** hoje — exige teste e monitoramento contínuos; a passagem de um a outro é a aposta deste mapa, não um fato.

### Disrupção 3 — O laboratório social de bolso: simulação barata, local e sem nuvem

**O que rompe.** Rompe o monopólio de quem pode simular. Hoje, rodar dez mil agentes é privilégio de quem tem orçamento de API de laboratório; a simulação em escala é cara na conta de token e invisível na conta de eletricidade. A ruptura é a sociedade sintética que roda no dispositivo de quem a usa — sem nuvem, sem contrato, sem que o provedor veja a pergunta. Isso rompe a assimetria entre quem estuda plataforma e quem é estudado por ela: um professor, um sindicato, uma redação passam a poder rodar o próprio experimento.

**Por que agora e não há cinco anos.** Porque três curvas se cruzaram. Modelos pequenos (sub-3B, com chamada de ferramenta nativa) ficaram competentes o bastante para sustentar um agente simples. O WebGPU saiu de especificação para disponibilidade geral e já executa inferência de modelos pequenos direto no navegador, sem instalação [14]. E a otimização de custo de simulação avançou por conta própria: agrupar agentes de papel semelhante e modelar influência pela topologia da rede corta de 50% a 90% do consumo de token do método [10]. Em 2021 nenhuma das três existia em forma utilizável.

**O que falta para se concretizar.** Falta coerência de longo prazo: modelo pequeno mantém persona por dezenas de passos, não por milhares — e sociedade simulada interessante é a que roda muito tempo. Falta ferramental de análise para quem não programa: hoje o resultado sai como log, e ler log não é ler resultado. Falta um formato de compartilhar o experimento de modo replicável — semente, configuração e artefato endereçado por hash — sem o qual "eu rodei aqui e deu isso" não é afirmação verificável. E falta, honestamente, demanda: a medição do aluno (2 anúncios em 7.776) sugere que ninguém está vendendo isso porque quase ninguém está pedindo.

## Seção 5 — A roda dos futuros

```yaml
roda_dos_futuros:
  - id: e1
    efeito: "Simular a plataforma antes de lançá-la vira etapa padrão do processo de design de produto"
    sinal: moderado
    prazo: "2028-2031"
    confianca: media
    filhos:
      - id: e1.1
        efeito: "Surge o papel de engenheiro de população sintética dentro dos times de produto"
        sinal: fraco
        prazo: "2028-2030"
        confianca: media
        filhos:
          - id: e1.1.1
            efeito: "Portfólio de designer passa a incluir log de simulação, não só protótipo navegável"
            sinal: fraco
            prazo: "2030-2032"
            confianca: baixa
          - id: e1.1.2
            efeito: "Cursos de IHC incorporam simulação social como método obrigatório, ao lado de teste com usuário"
            sinal: fraco
            prazo: "2029-2032"
            confianca: baixa
      - id: e1.2
        efeito: "A pesquisa com usuário parte em duas: exploração sintética barata e validação humana cara"
        sinal: moderado
        prazo: "2027-2030"
        confianca: media
        filhos:
          - id: e1.2.1
            efeito: "Painéis humanos encolhem em tamanho e sobem em preço por entrevista"
            sinal: fraco
            prazo: "2029-2031"
            confianca: media
          - id: e1.2.2
            efeito: "Nasce a metrica 'taxa de confirmacao humana' como selo de qualidade de achado sintético"
            sinal: fraco
            prazo: "2029-2032"
            confianca: baixa

  - id: e2
    efeito: "Reguladores passam a aceitar (e depois a pedir) evidência de simulação na avaliação de risco sistêmico"
    sinal: fraco
    prazo: "2029-2032"
    confianca: baixa
    filhos:
      - id: e2.1
        efeito: "Aparece o auditor de simulação: quem certifica que a população sintética representa a real"
        sinal: fraco
        prazo: "2030-2033"
        confianca: baixa
        filhos:
          - id: e2.1.1
            efeito: "Um benchmark público de calibração social vira infraestrutura disputada — quem o define define o 'humano padrão'"
            sinal: fraco
            prazo: "2031-2034"
            confianca: baixa
      - id: e2.2
        efeito: "Plataformas simulam para se defender e o relatório de simulação vira peça de litígio"
        sinal: fraco
        prazo: "2029-2032"
        confianca: media
        filhos:
          - id: e2.2.1
            efeito: "Escolha conveniente de parâmetro produz o resultado desejado — consolida-se o 'simulation-washing'"
            sinal: fraco
            prazo: "2030-2033"
            confianca: media
          - id: e2.2.2
            efeito: "Exige-se replay determinístico com semente auditável e artefato por hash, não só o relatório final"
            sinal: fraco
            prazo: "2031-2034"
            confianca: baixa

  - id: e3
    efeito: "O indivíduo reexecutável se institucionaliza: pessoas licenciam o próprio duplo cognitivo"
    sinal: fraco
    prazo: "2029-2032"
    confianca: baixa
    filhos:
      - id: e3.1
        efeito: "Consentimento deixa de ser evento pontual e vira licença de uso continuado do comportamento"
        sinal: fraco
        prazo: "2028-2031"
        confianca: media
        filhos:
          - id: e3.1.1
            efeito: "Comitês de ética criam trilha própria para pesquisa com duplos, separada da pesquisa com humanos"
            sinal: fraco
            prazo: "2029-2032"
            confianca: media
      - id: e3.2
        efeito: "Forma-se mercado de duplos: quem tem duplo bem calibrado é remunerado por rodada de uso"
        sinal: fraco
        prazo: "2030-2033"
        confianca: baixa
        filhos:
          - id: e3.2.1
            efeito: "Populações com pouca pegada digital ficam fora do banco e o viés de representação se institucionaliza"
            sinal: moderado
            prazo: "2029-2032"
            confianca: media
          - id: e3.2.2
            efeito: "Surge o direito de recusar a própria simulação — opt-out do duplo, análogo ao direito de imagem"
            sinal: fraco
            prazo: "2031-2034"
            confianca: baixa

  - id: e4
    efeito: "A pesquisa de opinião perde o monopólio da antecipação e passa a conviver com o número simulado"
    sinal: moderado
    prazo: "2027-2030"
    confianca: media
    filhos:
      - id: e4.1
        efeito: "Institutos incorporam camada sintética e passam a publicar dois números lado a lado"
        sinal: moderado
        prazo: "2027-2029"
        confianca: media
        filhos:
          - id: e4.1.1
            efeito: "Uma decisão pública de peso é tomada sobre número simulado que depois se mostra divergente do real"
            sinal: fraco
            prazo: "2029-2032"
            confianca: baixa
      - id: e4.2
        efeito: "Contra-movimento de confiança: selo de 'pesquisa 100% humana' vira diferencial de mercado"
        sinal: fraco
        prazo: "2028-2031"
        confianca: media
        filhos:
          - id: e4.2.1
            efeito: "Credibilidade humana vira produto premium e o dado sintético vira commodity de baixa margem"
            sinal: fraco
            prazo: "2030-2033"
            confianca: baixa

  - id: e5
    efeito: "Simulação social fica barata e local: roda no navegador, sem nuvem e sem custo por token"
    sinal: fraco
    prazo: "2028-2031"
    confianca: media
    filhos:
      - id: e5.1
        efeito: "Jornalistas, professores, sindicatos e ativistas rodam suas próprias sociedades sintéticas"
        sinal: fraco
        prazo: "2029-2031"
        confianca: baixa
        filhos:
          - id: e5.1.1
            efeito: "Escola básica usa sociedade simulada como instrumento de ensino de ciências sociais"
            sinal: fraco
            prazo: "2030-2033"
            confianca: baixa
          - id: e5.1.2
            efeito: "Proliferam simulações sem método, em que a conclusão precede o experimento"
            sinal: moderado
            prazo: "2029-2031"
            confianca: media
      - id: e5.2
        efeito: "Assistir uma sociedade rodar vira gênero de mídia — parte entretenimento, parte argumento"
        sinal: fraco
        prazo: "2029-2032"
        confianca: baixa
        filhos:
          - id: e5.2.1
            efeito: "Peça de simulação é usada como retórica política: o 'vídeo do futuro' como prova de campanha"
            sinal: fraco
            prazo: "2030-2033"
            confianca: baixa

  - id: e6
    efeito: "Consolida-se um vocabulário de erro próprio: sabe-se nomear do que a sociedade sintética é incapaz"
    sinal: moderado
    prazo: "2027-2030"
    confianca: media
    filhos:
      - id: e6.1
        efeito: "Publica-se carta de limitação padronizada junto de todo resultado simulado"
        sinal: fraco
        prazo: "2028-2031"
        confianca: media
        filhos:
          - id: e6.1.1
            efeito: "Revistas passam a exigir pré-registro do desenho da simulação antes de a simulação rodar"
            sinal: fraco
            prazo: "2029-2032"
            confianca: media
      - id: e6.2
        efeito: "Identifica-se um conjunto de fenômenos que a simulação sistematicamente não produz: conflito real, tédio, recusa"
        sinal: moderado
        prazo: "2027-2030"
        confianca: media
        filhos:
          - id: e6.2.1
            efeito: "Esse conjunto vira objeto de pesquisa próprio — o que falta ao agente passa a definir o humano na prática"
            sinal: fraco
            prazo: "2029-2032"
            confianca: baixa
          - id: e6.2.2
            efeito: "Design de plataforma passa a tratar simulação como detector de falha, nunca como preditor de sucesso"
            sinal: fraco
            prazo: "2029-2032"
            confianca: media
```

**O que o bloco não exprime sozinho.** Três coisas.

A primeira é que os ramos **competem pelo mesmo recurso escasso**, que não é computação — é credibilidade. `e2` (o regulador aceita) e `e5.1.2` (proliferam simulações sem método) se canibalizam: cada simulação amadora com conclusão pré-fabricada que circula publicamente encarece a aceitação institucional da simulação séria. A árvore mostra os dois como ramos paralelos; na prática, um envenena o outro.

A segunda é a **assimetria de prazo entre o técnico e o institucional**. Todos os efeitos de primeira ordem com sinal moderado são técnicos ou de mercado (`e1`, `e4`, `e6`); todos os institucionais (`e2`, `e3`) têm sinal fraco e confiança baixa. Isso não é acaso: a capacidade chega antes da regra, e a lacuna entre as duas é exatamente onde o wildcard da Seção 6 mora. O horizonte de 2031 pega o campo no meio dessa lacuna, não depois dela.

A terceira é que `e6` — o vocabulário de erro — é o **ramo de maior valor e o único que a Roda representa mal**, porque ele não é consequência das disrupções: é condição de possibilidade delas. Se o campo não aprender a nomear o que a simulação não faz, nada em `e2` acontece, e `e1` vira teatro de processo. A Roda desenha `e6` ao lado dos outros; ele deveria estar embaixo.

## Seção 6 — Sinais fracos e wildcards

**Sinais fracos.**

1. **O silêncio comercial.** Dois anúncios de simulação em 7.776 nos maiores diretórios de IA (medição do autor). Não é ausência de tecnologia — é ausência de canal. Sinal de que a difusão, quando vier, não virá pelo mercado de ferramenta, e sim pela academia e pela obrigação regulatória.
2. **A simulação que roda inteira no navegador**, sem rede (o caso `Gestalt Village`, da varredura da turma). Combinado com WebGPU em disponibilidade geral e modelos sub-3B com chamada de ferramenta [14], indica que o custo marginal de um experimento social pode ir a quase zero antes de 2030.
3. **Otimização de custo publicada como contribuição científica** [10]. Quando um campo começa a publicar sobre eficiência do próprio método, é porque o método passou de demonstração a rotina.
4. **Replay determinístico e artefato por hash** aparecendo em projetos de simulação (o caso `Luvoire`, da varredura da turma). É um sinal de infraestrutura de *auditoria*, não de pesquisa — antecipa `e2.2.2` por uma via que ninguém pediu.
5. **A tradução regulatória em curso.** A extensão do caso do X ao Grok, em janeiro de 2026, gira em torno de avaliação **antes** do lançamento de funcionalidade [11]. O verbo "antes" é o que abre a porta para o túnel de vento.
6. **O código ICC/ESOMAR definindo "dado sintético"** em junho de 2025 [12]. Definição formal é o primeiro passo de qualquer regime de responsabilização.
7. **A crítica ganhando forma canônica** — cinco desafios nomeados [6], seis falácias listadas [7]. Campo que padroniza a própria crítica está a caminho de padronizar a própria validação.

**Wildcards.**

**W1 — O resultado simulado usado como evidência em decisão pública, e errado.** Um governo ou regulador decide sobre uma política — moderação eleitoral, renda básica, restrição etária — com base numa sociedade sintética; a decisão sai; o efeito real é oposto ao simulado e a discrepância é rastreada até o viés do modelo. Probabilidade baixa até 2031, impacto máximo: mata `e2` inteiro por uma geração, e transfere o campo do registro de "instrumento" para o registro de "risco". É a versão social do que o colapso de um modelo econômico faz com a reputação da economia — com o agravante de que aqui o viés é de um artefato privado, não de uma teoria pública.

**W2 — A validade individual se transferir para outras culturas.** O inverso: alguém replica o resultado dos 1.052 [3] numa amostra brasileira ou indiana e obtém a mesma ordem de acurácia. Probabilidade baixa-média, impacto alto: encurta todos os prazos institucionais deste mapa em dois a três anos e transforma `e3` (mercado de duplos) de possibilidade em corrida.

**W3 — Uma plataforma grande admitir publicamente que simulou antes de lançar.** Baixa probabilidade porque o incentivo é o oposto — admitir é entregar ao regulador uma obrigação e ao concorrente um método. Mas o dia em que uma empresa transformar isso em argumento de confiança ("não testamos em você"), `e1` deixa de ser processo interno e vira posicionamento de marca, arrastando o setor inteiro.

## Seção 7 — Contra o próprio mapa (teste adversarial)

**Extrapolação linear.** O mapa assume que a curva de fidelidade dos agentes continua subindo, e ela pode ser assintótica. Os 86% da consistência teste-reteste [3] podem ser o teto estrutural do método, não um ponto da subida: o que se mede ali é convergência com auto-relato, e auto-relato é justamente o que o modelo de linguagem melhor imita. Nada garante que a mesma arquitetura melhore em comportamento observado — decisão sob custo real, conflito, recusa. Se o teto for esse, todo o ramo `e3` e boa parte de `e4` não acontecem: o duplo fica bom para prever o que a pessoa *diz* e permanentemente ruim para prever o que ela *faz*, e nenhum regulador aceita isso como evidência.

**Velocidade de adoção irreal.** Os prazos institucionais deste mapa (2029-2032) são provavelmente otimistas por pelo menos três anos. A primeira rodada de avaliações de risco do DSA reciclou material e ignorou risco de design [11]; o campo levou dois anos para não fazer o básico. Presumir que passará daí a exigir simulação auditável em cinco anos é ignorar que instituição regulatória se move por escândalo, não por capacidade técnica disponível. Some-se a isto o dado de adoção de agentes em geral — 17% das organizações em 2026, apesar do alarde — e o cenário mais honesto é que 2031 chega com a capacidade instalada e o uso institucional ainda experimental.

**Falha da disrupção.** A Disrupção 2 é a mais frágil das três, e por uma razão que não é técnica: **a plataforma não quer**. Simular antes de lançar produz um registro escrito de que a empresa sabia. Hoje, o teste A/B em população real tem a vantagem jurídica de não deixar hipótese documentada — só resultado. Um túnel de vento gera exatamente o artefato que um litígio adora: a rodada em que o dano apareceu e o produto foi lançado assim mesmo. É plausível que a simulação pré-lançamento se torne comum e **deliberadamente não registrada**, o que a esvazia como instrumento de accountability e a reduz a ferramenta interna de otimização — cenário em que `e2` inteiro cai e `e1` sobrevive esvaziado.

**Viés pessoal do autor.** A zona de interesse declarada é "Simulação e mundos": o autor gosta do objeto e escolheu o tema. Dois vieses específicos, além do entusiasmo genérico. Primeiro, a medição dos 7.776 anúncios é um achado real, mas foi **interpretada no sentido que favorece a tese** — "o mercado não vê, logo é emergente". A leitura rival é igualmente compatível com o dado: o mercado não vende porque não há demanda, e não há demanda porque o instrumento não entrega o que promete. O mapa registra a primeira leitura e devia registrar as duas com o mesmo peso. Segundo, há um viés de simpatia metodológica embutido no enquadramento "túnel de vento": a metáfora é lisonjeira e faz trabalho argumentativo que a evidência ainda não fez. Túnel de vento funciona porque a aerodinâmica tem leis validadas independentemente do túnel; a simulação social não tem o equivalente, e é precisamente isso que a revisão sistemática aponta [5]. Usar a metáfora é já conceder a conclusão.

## Seção 8 — O que a máquina errou

1. **Título e número errados do estudo dos 1.052.** A primeira busca devolveu o trabalho como *"Generative Agent Simulations of 1,000 People"* com "85% de acurácia relativa". Ao abrir o registro do arXiv (2411.10109), a versão v3, de junho de 2026, tem outro título — *"LLM Agents Grounded in Self-Reports Enable General-Purpose Simulation of Individuals"* — e números diferentes: 86% (entrevista + survey), 83% (só entrevista), 82% (só survey). Corrigido para a v3 aberta; o rascunho que citava "85%" foi descartado.
2. **Transformar capacidade declarada em experimento realizado.** O rascunho afirmava que o OASIS "roda um milhão de agentes". O abstract diz *"capable of modeling up to one million users"* — capacidade declarada da plataforma, não relato de um experimento de um milhão de agentes como rotina. Reescrito para "declara suportar até".
3. **Número de eficiência generalizado indevidamente.** Escrevi na Seção 3 do rascunho que "o custo de simulação caiu 50 a 90%". O intervalo é de **um** trabalho (TopoSim, arXiv 2604.18011) sobre o consumo de token **do próprio método proposto**, medido contra as baselines dele. Corrigido para atribuir o número ao trabalho, não ao campo.
4. **Artefato do enunciado que a busca não confirmou.** A varredura da turma nomeia `y-not.social` como rede social povoada por agentes. A busca direta pelo nome não retornou esse site. Retornou, sim, um projeto acadêmico com propósito idêntico — *Y Social: an LLM-powered Social Media Digital Twin* (arXiv 2408.00818, Rossetti et al.). Optei por citar o que abri e **registrar a busca negativa** em vez de validar o nome do enunciado. O mesmo vale para `Argentor`, `Luvoire`, `Rath`, `NeuroForge`, `DisasterReliefOps`, `agent-inspect` e `Gestalt Village`: nenhum foi verificado independentemente nesta sessão e todos aparecem no texto explicitamente marcados como "da varredura da turma", nunca como fonte.
5. **Atribuição de autoria conceitual frouxa.** O rascunho creditava à biblioteca Concordia a criação da expressão "modelagem baseada em agentes generativos". A referência correta é o artigo da DeepMind que propõe o arcabouço com a metáfora do *Game Master* (arXiv 2312.03664); a biblioteca é a implementação. Ajustado.
6. **Fonte paga apresentada como lida.** Tentei abrir o artigo publicado das seis falácias no periódico (SAGE) e recebi HTTP 403. Em vez de citar como se tivesse lido o texto integral, a Seção 11 registra o preprint no arXiv e a lista de falácias obtida via resumo de busca, com confiabilidade **média** — não alta.
7. **Afirmação regulatória forte demais.** Escrevi que "o DSA exige simulação". Não exige. Exige testar, monitorar e avaliar sistemas de recomendação num ciclo contínuo, e há em 2026 um caso girando em torno de avaliação antes do lançamento de funcionalidade [11]. Rebaixado de "exige" para "abre a porta" — e a Seção 7 registra que essa passagem é a aposta mais frágil do mapa.

## Seção 9 — Três cenários para 2031

**Provável.** Simular virou etapa barata e rotineira do trabalho de quem projeta, e não virou prova de nada. Todo time de produto de tamanho médio roda uma população sintética antes de mexer no feed, do mesmo jeito que roda um teste de carga: para achar o que quebra, não para prever o que vende. O vocabulário de erro se consolidou — fala-se em colapso de variância e em bajulação do agente como se fala em viés de seleção — e toda entrega vem com uma carta de limitação que quase ninguém lê. A pesquisa de mercado se partiu em duas camadas, a sintética exploratória e a humana confirmatória, com os painéis humanos menores e mais caros. Do lado institucional, quase nada aconteceu: reguladores europeus citam simulação em relatório, nenhum a exige, e a certificação de representatividade continua sendo um artigo de posição em vez de uma norma. O Brasil aparece como consumidor da ferramenta e ausente do banco de calibração: não há população sintética brasileira validada, e os estudos que circulam aqui rodam sobre distribuições americanas com a nacionalidade trocada no prompt.

**Desejável.** A simulação encontrou o lugar honesto: detector de falha, não preditor de sucesso. Existe um benchmark público de calibração social, mantido por consórcio de universidades e não por empresa, contra o qual qualquer população sintética pode ser medida antes de ser usada — e ele inclui amostras fora do eixo EUA-Europa, com participação brasileira. Toda simulação que informa decisão pública publica semente, configuração e replay determinístico, de modo que um terceiro possa reexecutar e obter o mesmo resultado; simulação irreprodutível não conta como argumento. Quem cedeu entrevista para virar duplo mantém controle sobre o uso, é remunerado por rodada e pode revogar. Rodar uma sociedade custa quase nada e roda no navegador, então a mesma capacidade que a plataforma usa para otimizar, a redação e o sindicato usam para auditar — a assimetria entre quem estuda e quem é estudado diminuiu pela primeira vez em vinte anos. E o ensino mudou: aluno de design aprende a projetar o ambiente e a desconfiar do resultado no mesmo semestre.

**Indesejável.** A simulação virou instrumento de legitimação. Plataformas publicam relatórios de população sintética que mostram exatamente o que precisam mostrar, porque a escolha de parâmetro, de modelo e de semente decide o resultado e nenhuma dessas escolhas é auditável; o regulador, sem capacidade técnica própria, aceita o relatório como cumprimento de obrigação. Em paralelo, o barateamento produziu o dilúvio: qualquer um roda uma sociedade e publica o gráfico, a conclusão sempre precede o experimento, e o público aprendeu que simulação é um jeito de embrulhar opinião. Uma decisão pública de peso foi tomada sobre resultado simulado e deu errado de forma visível, o que envenenou o uso legítimo junto com o ilegítimo. O banco de duplos se consolidou sobre quem tinha pegada digital — urbano, letrado, conectado — e o viés virou infraestrutura: a política pública desenhada contra a sociedade sintética funciona bem para quem já estava representado nela. Ninguém decidiu isso; foi o resultado de cada ator otimizar o próprio custo.

## Seção 10 — O experimento

**O que é.** *Um túnel de vento de bolso.* Uma micro-rede social sintética com 40 agentes LLM, construída em cima de uma biblioteca aberta de simulação social, onde a única variável manipulada é a **regra de ordenação do feed**: cronológica pura versus ordenação por engajamento. A mesma configuração roda três vezes com sementes diferentes por condição — seis rodadas ao todo, 300 passos cada. Em paralelo, e com o mesmo desenho, a turma de 14 alunos vive 48 horas num mural fechado com as duas mesmas regras (sete pessoas em cada condição, trocando na metade). Mede-se o mesmo em ambos: polarização das posições declaradas, concentração de atenção nos três autores mais vistos, e taxa de sobrevivência de uma afirmação falsa plantada no início.

**Pergunta sobre o futuro.** *Um resultado simulado é estável o bastante para mudar uma decisão de design?* O teste não é "a simulação acerta o humano" — é mais duro e mais útil: **a variância entre sementes da mesma condição é menor que a diferença entre as condições?** Se não for, a simulação não é instrumento de medida, é gerador de narrativa, e todo o ramo `e2` deste mapa desaba.

**Tecnologia emergente usada.** Agentes generativos com memória e reflexão, orquestrados por uma das bibliotecas abertas de simulação social (Concordia, OASIS ou Y Social, conforme o que a turma conseguir rodar); modelo pequeno rodando local sempre que couber, para que o custo não limite o número de sementes; replay determinístico com semente registrada e configuração versionada por hash, para que outro grupo possa reexecutar.

**Atividade da turma.** Três encontros. No primeiro, a turma escreve o protocolo **antes** de rodar qualquer coisa: hipótese, métricas, critério de falsificação — e o protocolo é entregue lacrado, para que o resultado não possa ser reinterpretado depois (é o pré-registro de `e6.1.1`, exercitado em sala). No segundo, metade da turma opera as seis rodadas sintéticas enquanto a outra metade vive as 48 horas no mural; depois trocam os papéis de análise, de modo que ninguém analise o próprio lado. No terceiro, o confronto: os dois conjuntos de números na mesma tabela, e cada grupo defende publicamente uma leitura. Encerra com uma pergunta escrita individual: *que decisão de produto eu tomaria com base nisto, e que decisão eu me recusaria a tomar?*

**Resultado de mudança de ideia.** Duas saídas mudam a posição de quem entrou no experimento. **Se** a dispersão entre sementes for maior que o efeito da condição, a conclusão é que o instrumento ainda não mede — e a turma sai tendo falsificado, com dado próprio, a parte mais vendida deste mapa. **Se** a direção do efeito for a mesma nos dois lados (sintético e humano) mesmo com magnitudes diferentes, a conclusão é oposta e mais interessante: a simulação serve para **ordenar alternativas**, não para estimar grandezas — o que é exatamente o uso que um designer precisa e o uso que um regulador não pode aceitar. Qualquer dos dois resultados desloca a discussão de "a IA consegue simular gente?" para "para que tipo de pergunta este instrumento é honesto?", que é a pergunta que o campo inteiro ainda está aprendendo a fazer.

## Seção 11 — Fontes

Legenda: *aberta* = página efetivamente carregada e lida nesta sessão; *resumo de busca* = conteúdo lido no resultado de busca, sem abrir a página. Nenhuma fonte é citada sem uma dessas duas marcas.

1. **Park, J. S. et al. — "Generative Agents: Interactive Simulacra of Human Behavior" (UIST '23).** `https://dl.acm.org/doi/10.1145/3586183.3606763` — resumo de busca. Sustenta: a arquitetura de agente generativo e o experimento dos 25 agentes na vila. Confiabilidade: **alta** (conferência revisada por pares; metadados consistentes em três resultados independentes).
2. **Yang, Z. et al. — "OASIS: Open Agent Social Interaction Simulations with One Million Agents" (arXiv 2411.11581).** `https://arxiv.org/abs/2411.11581` — aberta. Sustenta: a escala declarada, as plataformas modeladas (X e Reddit) e os fenômenos replicados (difusão, polarização, manada). Confiabilidade: **alta**.
3. **Park, J. S. et al. — "LLM Agents Grounded in Self-Reports Enable General-Purpose Simulation of Individuals" (arXiv 2411.10109, v3 de 28/06/2026; título anterior: "Generative Agent Simulations of 1,000 People").** `https://arxiv.org/abs/2411.10109` — aberta. Sustenta: 1.052 participantes, entrevistas de duas horas, 86%/83%/82% da consistência teste-reteste; base da Disrupção 1. Confiabilidade: **alta**.
4. **Rossetti, G. et al. — "Y Social: an LLM-powered Social Media Digital Twin" (arXiv 2408.00818).** `https://arxiv.org/abs/2408.00818` — aberta. Sustenta: existência de gêmeo digital de rede social com agentes LLM voltado a estudar política de plataforma e fenômenos emergentes. Confiabilidade: **alta** (preprint, mas com autoria e escopo verificados).
5. **Wang, Q. et al. — "LLM-based Human Simulations Have Not Yet Been Reliable" (arXiv 2501.08579).** `https://arxiv.org/abs/2501.08579` — aberta. Sustenta: a revisão sistemática de falhas e as duas famílias de causa. Confiabilidade: **alta** (o próprio resumo declara não haver números quantitativos consolidados — registrado assim no texto).
6. **Anthis, J. R. et al. — "LLM Social Simulations Are a Promising Research Method" (arXiv 2504.02234).** `https://arxiv.org/abs/2504.02234` — resumo de busca. Sustenta: os cinco desafios nomeados (diversidade, viés, bajulação, estranheza, generalização). Confiabilidade: **média** (lista obtida via resumo; página não aberta).
7. **Lin, Z. — "Six Fallacies in Substituting Large Language Models for Human Participants" (preprint arXiv 2402.04470; versão publicada em *AMPPS*, 2025).** `https://arxiv.org/abs/2402.04470` — resumo de busca. A versão do periódico (`https://journals.sagepub.com/doi/10.1177/25152459251357566`) retornou **HTTP 403** e não foi lida. Sustenta: as seis falácias da substituição. Confiabilidade: **média**.
8. **Piao, J. et al. — "AgentSociety" (arXiv 2502.08691, Tsinghua).** `https://arxiv.org/abs/2502.08691` — resumo de busca. Sustenta: 10 mil agentes, ~5 milhões de interações, cinco eixos de estudo social. Confiabilidade: **média**.
9. **Vezhnevets, A. S. et al. — "Generative agent-based modeling with actions grounded in physical, social, or digital space using Concordia" (arXiv 2312.03664) + repositório `google-deepmind/concordia`.** `https://arxiv.org/html/2312.03664v2` · `https://github.com/google-deepmind/concordia` — resumo de busca. Sustenta: o arcabouço de GABM e a metáfora do Game Master; a v2.0 da biblioteca após o Concordia Contest (NeurIPS 2024). Confiabilidade: **média**.
10. **Xu, Y. et al. — "Topology-Aware LLM-Driven Social Simulation" (TopoSim, arXiv 2604.18011).** `https://arxiv.org/abs/2604.18011` — aberta. Sustenta: redução de 50–90% no consumo de tokens do método proposto, mantendo fidelidade. Confiabilidade: **média** (preprint recente, resultado do próprio método contra as suas baselines).
11. **DSA Observatory — "Reclaiming the Algorithm: What the DSA can—and can't—fix about recommender systems" (15/02/2026)** e **Knight-Georgetown Institute — "Systemic Risk Assessment under the Digital Services Act"**. `https://dsa-observatory.eu/2026/02/15/reclaiming-the-algorithm-what-the-dsa-can-and-cant-fix-about-recommender-systems/` · `https://kgi.georgetown.edu/research-and-commentary/systemic-risk-assessment-under-the-digital-services-act/` — resumo de busca. Sustentam: o ciclo contínuo de teste/monitoramento de recomendadores, a fragilidade da primeira rodada de avaliações e a extensão do caso do X ao Grok em janeiro de 2026 quanto a avaliação prévia ao lançamento. Confiabilidade: **média** (análise de observatório e de instituto, não texto legal — a leitura jurídica não foi conferida na fonte primária).
12. **Panorama do debate sobre respondentes sintéticos em pesquisa de mercado (2026):** Skim/Skimle, PyMC Labs, IdSurvey, Radical Innovators. `https://skimle.com/blog/synthetic-respondents-in-research-promise-pitfalls-and-when-to-use-in-2026` · `https://www.pymc-labs.com/blog-posts/synthetic-consumers-a-practical-guide` — resumo de busca. Sustentam: a convergência ESOMAR/Kantar/NIQ/Bain no enquadramento "suplemento validado, não substituto", a definição de dado sintético no código ICC/ESOMAR (junho/2025) e o colapso de variância quando o sintético substitui amostra representativa. Confiabilidade: **baixa** (fontes de fornecedor e de consultoria, com interesse comercial no tema; o código ICC/ESOMAR não foi lido na fonte primária).
13. **Frontiers in Systems Biology — "Streamlining IRB review of AI human subjects research (AIHSR): the three-stage framework" (2026).** `https://www.frontiersin.org/journals/systems-biology/articles/10.3389/fsysb.2026.1804193/full` — resumo de busca. Sustenta: a inadequação dos arcabouços de comitê de ética existentes para simulação de populações e a questão de representação/consentimento. Confiabilidade: **média**.
14. **WebLLM (arXiv 2412.15803) e panorama de SLMs com WebGPU (2026).** `https://arxiv.org/html/2412.15803v2` — resumo de busca. Sustenta: inferência de modelos sub-3B no navegador sem instalação; WebGPU em disponibilidade geral. Confiabilidade: **média** para o artigo; **baixa** para os panoramas de blog que o acompanham.
15. **Agência Pública — "IA adiciona novas camadas de risco à desinformação nas eleições 2026" (janeiro/2026)**, com o dado do Observatório/Lupa: crescimento de 308% na circulação de conteúdo falso produzido com IA entre 2024 e 2025 no Brasil. `https://apublica.org/2026/01/inteligencia-artificial-e-desinformacao-nas-eleicoes-de-2026/` — resumo de busca. Sustenta: a nota sobre o Brasil — há objeto de estudo de sobra e nenhuma infraestrutura de simulação nacional correspondente. Confiabilidade: **média** (jornalismo de apuração citando levantamento de terceiro; o relatório-fonte não foi aberto).
16. **Varredura da turma (kvv) — levantamento de plataformas de simulação social e medição de diretórios comerciais.** Material da disciplina, não fonte externa. Sustenta: o dado de 2 anúncios sobre simulação em 7.776, e os nomes `Argentor`, `Luvoire`, `Rath`, `NeuroForge`, `DisasterReliefOps`, `agent-inspect`, `Gestalt Village`, `y-not.social`. Confiabilidade: **baixa como fonte externa** — nenhum desses artefatos foi verificado independentemente nesta sessão, e a busca por `y-not.social` não confirmou o nome (ver Seção 8, item 4). Citados sempre marcados como "da varredura da turma".

## Seção 12 — Anexo: o levantamento bruto

### 12.1 — Respostas da entrevista de recorte (Etapa 1), como recebidas

```
- Tema: "Sociedades simuladas: a simulação como instrumento de investigação"
  (tema 6 de 19 da disciplina; família "Simulação e mundos").
- Horizonte: 2031. Público: quem projeta mídia e interação.
  Recorte: global, com uma nota sobre o Brasil.
- Descartado de início: o que já é comum em produto de massa (a régua da
  disciplina); nenhuma outra exclusão.
- Disrupção suspeita: nenhuma — descubra. Viés: neutro. Ideias óbvias a
  excluir: as que servem para qualquer tema.
- O que me faria mudar de ideia: evidência de que a adoção já passou da
  maioria inicial (Rogers) ou de que a tecnologia não rompe nada (só melhora
  o que existe).
- Profundidade: três ordens. Modo: a partir de uma inovação/tema, não de um setor.
- Zona de interesse do autor: "Simulação e mundos". Login do autor: kvv.
  Skill usada: futurizacao-kvv.
- Busca na web: usar WebSearch e WebFetch de verdade; só citar o que abriu.
  Não inventar fontes.
- Não fazer perguntas de volta. Não parar para pedir confirmação. Se algo
  não estiver definido, assumir e declarar.
```

**Assunções declaradas por falta de definição:** (a) "público: quem projeta mídia e interação" foi lido como designers de produto, pesquisadores de IHC e gente de política de plataforma — não como público leigo; (b) a "nota sobre o Brasil" foi alocada na Seção 9 (cenário provável) e na fonte [15], por ser onde tem consequência, e não como seção própria; (c) `data: 2026-09-15` no frontmatter é valor fixo do gabarito da skill, mantido como está mesmo tendo a sessão rodado em 12/09/2026.

### 12.2 — Log do filtro da Etapa 2 (recusas formais)

```
CANDIDATO: modelagem baseada em agentes clássica (NetLogo, Schelling, Sugarscape)
VEREDITO: RECUSADO — tecnologia madura. Literatura consolidada desde os anos 1990,
adoção institucional em ciências sociais computacionais. É o estado ANTERIOR contra
o qual a ruptura se define, não a ruptura.

CANDIDATO: "persona sintética" gerada por prompt
VEREDITO: RECUSADO — IA generativa básica. Acelera a produção de um artefato que já
existia no ofício de design (o proto-persona). Não há múltiplos agentes se afetando,
não há emergência, não há dado analisável. Melhoria incremental.

CANDIDATO: gêmeo digital (indústria, cidade, logística)
VEREDITO: RECUSADO — maduro, com fornecedores estabelecidos e ciclo de compra
corporativo (ver posicionamento Gartner 2026). Além disso o objeto é o processo
físico, não a sociedade — fora do recorte.

CANDIDATO: "agente com memória de longo prazo"
VEREDITO: RECUSADO — é componente de arquitetura, não disrupção. Sozinho não muda
a lógica do tema.

CANDIDATO: agente ancorado em auto-relato individual (duplo reexecutável)
VEREDITO: ACEITO — Disrupção 1. Rompe a unidade de análise da pesquisa social.

CANDIDATO: simulação como etapa pré-lançamento / túnel de vento de plataforma
VEREDITO: ACEITO — Disrupção 2, com ressalva registrada na Seção 7: é a mais frágil
das três, e por razão jurídica, não técnica.

CANDIDATO: simulação local, barata, no navegador
VEREDITO: ACEITO — Disrupção 3. Rompe o monopólio de quem pode simular.
```

### 12.3 — Log das buscas efetivamente realizadas

```
WebSearch  "OASIS CAMEL-AI one million agents social simulation arXiv"
WebSearch  "Generative Agents Park 2023 Stanford interactive simulacra human behavior paper"
WebSearch  "'Generative Agent Simulations of 1,000 People' Park 2024 interview agents replicate survey"
WebSearch  "AgentSociety large-scale LLM social simulation 2025 policy intervention"
WebSearch  "Concordia DeepMind generative agent-based modeling library social simulation"
WebSearch  "synthetic respondents market research 2026 debate validity ESOMAR AI personas replacing survey panels"
WebSearch  "DSA systemic risk assessment recommender system testing simulation regulators 2026"
WebSearch  "ethics synthetic participants IRB human subjects LLM simulation replacing participants 2025 2026"
WebSearch  "simulação social agentes LLM Brasil pesquisa 2026 desinformação eleições ambiente simulado"
WebSearch  "arXiv 2504.02234 LLM Social Simulations Are a Promising Research Method challenges recommendations"
WebSearch  "Zhicheng Lin Six Fallacies in Substituting LLMs for Human Participants fallacies list"
WebSearch  "small language models on-device browser WebGPU multi-agent simulation runs locally 2026"
WebSearch  "'y-not.social' OR 'y-not social' simulated social network AI agents study recommendation misinformation"
           -> BUSCA NEGATIVA: nenhum site com esse nome. Retornou, em vez disso,
              "Y Social: an LLM-powered Social Media Digital Twin" (arXiv 2408.00818).
WebSearch  "Gartner hype cycle 2026 synthetic data / AI simulation digital twin position"

WebFetch   https://arxiv.org/abs/2501.08579   -> OK (título, autoria, achados)
WebFetch   https://arxiv.org/abs/2411.10109   -> OK (título v3 mudou; 86/83/82%)
WebFetch   https://arxiv.org/abs/2411.11581   -> OK ("capable of modeling up to one million")
WebFetch   https://arxiv.org/abs/2408.00818   -> OK (Y Social, Rossetti et al., 01/08/2024)
WebFetch   https://arxiv.org/abs/2604.18011   -> OK (TopoSim, 50-90% de token)
WebFetch   https://journals.sagepub.com/doi/10.1177/25152459251357566 -> HTTP 403 (não lido)
```

### 12.4 — Efeitos cortados da Roda (e o motivo do corte)

```
CORTADO: "Simulação vira requisito de contratação pública de software"
MOTIVO: plausível, mas é o mesmo efeito de e2 com outro comprador; não adiciona
        ramo, só troca o ator. Redundante.

CORTADO: "Agentes simulados são usados para treinar outros agentes (auto-jogo social)"
MOTIVO: é tema do vizinho (mercados de máquinas, tema 5) e de treinamento de modelo,
        não de simulação-como-instrumento. Fora do recorte.

CORTADO: "NPCs de jogo herdam a arquitetura de agente generativo"
MOTIVO: fronteira explícita com o tema 7 (personagens autônomos em jogos). Recusado
        por disciplina de escopo, mesmo sendo o efeito de primeira ordem mais provável
        de todos.

CORTADO: "Seguradoras usam sociedade sintética para precificar risco social"
MOTIVO: especulação sem sinal observável; nenhuma fonte consultada sugere movimento
        nessa direção. Seria efeito inventado.

CORTADO: "Agentes simulados desenvolvem linguagem própria não compreensível"
MOTIVO: folclore recorrente, sem base nas fontes consultadas. Descartado como o tipo
        de ideia que "serve para qualquer tema" — exatamente o que a entrevista
        mandou excluir.

CORTADO: "O custo energético da simulação em massa vira questão ambiental"
MOTIVO: verdadeiro, mas genérico a toda a computação com LLM; não é específico deste
        tema. Mesma regra acima.

CORTADO (3a ordem): "Universidades fecham laboratórios de survey"
MOTIVO: extrapolação linear do ramo e4 sem nenhum sinal — é justamente o erro que a
        Seção 7 acusa. Cortado por coerência com a própria autoauditoria.
```

### 12.5 — Rodadas descartadas do documento

```
RODADA 1 (descartada): Disrupções propostas = (1) agentes generativos, (2) escala de
um milhão, (3) simulação de desinformação. Descartada porque (1) é a tecnologia, não
a ruptura de lógica; (2) é atributo quantitativo de (1); e (3) é caso de uso. O filtro
da Etapa 2 pede quebra estrutural, e três variações da mesma capacidade não são três
disrupções. Refeita.

RODADA 2 (descartada parcialmente): Seção 3 abria pelo mercado ("o setor de pesquisa
de mercado já vende respondentes sintéticos"). Invertido: a evidência forte é
acadêmica e a evidência comercial é a de menor confiabilidade da lista (fonte [12],
baixa). Abrir pelo mercado dava ao texto uma ancoragem que as fontes não sustentam.

RODADA 3 (ajuste): a metáfora do túnel de vento, que vem do enunciado do tema, foi
mantida no texto MAS explicitamente contestada na Seção 7 — túnel de vento funciona
porque a aerodinâmica tem leis validadas fora do túnel, e a simulação social não tem
o equivalente. Manter a metáfora sem essa ressalva seria conceder a conclusão.
```

### 12.6 — Nota de método

O mapa foi construído com a Roda dos Futuros (Glenn) como estrutura primária, parando
deliberadamente na terceira ordem — a partir da quarta, a incerteza composta torna o
desdobramento especulação sem lastro. O Hype Cycle foi usado apenas como heurística de
expectativa (e não como instrumento preditivo: não tem validação empírica, não publica
critério quantitativo e sofre viés de sobrevivência), e o Quadrante Mágico foi
deliberadamente NÃO usado, por medir posição comercial presente e penalizar
exatamente o tipo de disrupção incipiente que este tema é — o dado dos 2 anúncios em
7.776 é a demonstração cabal disso. A Matriz de Impacto Cruzado não foi montada por
limite de escopo, mas a interação mais importante que ela pegaria está registrada em
prosa na Seção 5: `e2` (aceitação institucional) e `e5.1.2` (dilúvio de simulação sem
método) se canibalizam, e nenhuma árvore de derivação simples mostra isso.
