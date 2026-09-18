---
tema: "Sociedades simuladas: a simulação como instrumento de investigação"
slug: sociedades-simuladas-a-simulacao-como-instrumento-de-investigacao
autor_login: jgpt
zona_de_interesse: "Simulação e mundos"
data: 2026-09-18
horizonte: 2031
publico: "quem projeta mídia e interação"
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 12
efeitos_ordem_3: 12
tecnologias_citadas:
  - "Generative Agents (Park et al., 2023)"
  - "agentes-entrevista / gêmeos de respondentes (Park et al., 2024)"
  - "OASIS (CAMEL-AI)"
  - "AgentSociety"
  - "Concordia (Google DeepMind)"
  - "silicon samples / respondentes sintéticos"
  - "modelagem baseada em agentes clássica (NetLogo)"
  - "sistemas de recomendação sob avaliação de risco sistêmico (DSA art. 34)"
fontes: 9
confianca: media
experimento: "Túnel de vento de feed: 200 agentes numa rede social de brinquedo, dois algoritmos de recomendação, a turma aposta antes no resultado."
skill_usada: futurizacao-jgpt
publico_ok: false
---

## 1. Resumo

Simular uma sociedade deixou de ser metáfora de laboratório e virou instrumento operável: em 2023 eram 25 agentes numa cidade virtual; em 2026 há simuladores de mídia social que declaram até um milhão de agentes (OASIS) e plataformas que rodam mais de dez mil agentes com cinco milhões de interações para estudar polarização, boato e renda básica (AgentSociety). O que mudou não foi a modelagem baseada em agentes — essa é madura desde os anos 1990 —, mas o fato de o agente ter memória, personalidade e linguagem natural, e de o custo por agente ter caído a ponto de permitir população em vez de amostra. Este mapa aceita três disrupções-raiz: a população sintética barata e configurável; o agente ancorado numa pessoa real e entrevistada, que apaga a fronteira entre pesquisa com gente e pesquisa com modelo; e a obrigação regulatória de avaliar uma funcionalidade antes de implantá-la (DSA, art. 34) sem que exista método aceito para isso — vácuo que a simulação está ocupando. Os efeitos sobre mídia e interação vão do teste de ranking como etapa padrão do ciclo de produto até a disputa política sobre quem valida a sociedade sintética. A confiança geral do mapa é média: a evidência de escala é forte, a de validade é fraca e contestada.

## 2. O tema

Sociedade simulada, aqui, é um ambiente controlado povoado por muitos agentes que se afetam, onde se roda uma possibilidade e se observa o que emerge. Não é jogo (o objetivo não é a experiência do jogador) e não é produtividade (o objetivo não é entregar uma tarefa): é instrumento de investigação, na mesma família do túnel de vento — um lugar onde se erra barato antes de errar caro.

Encosta em mídia e interação por três portas. A primeira é o produto: um feed, um sistema de recomendação e uma política de moderação são exatamente o tipo de artefato cujo efeito só aparece na agregação de muita gente interagindo, e que hoje se testa em produção, com usuários reais, via teste A/B. A segunda é o método: se um agente responde como um respondente, a pesquisa com usuários — a base da prática de UX e de pesquisa de mercado — muda de material. A terceira é a política: plataformas grandes já têm obrigação legal de avaliar risco sistêmico antes de implantar funcionalidades críticas, e ninguém combinou como se faz isso.

Merece mapa de futuro, e não estado da arte, porque a pergunta interessante não é "o que existe" — existe muito, e está documentado — mas o que acontece com o campo quando testar uma sociedade antes de mexer nela ficar barato. As consequências mais pesadas não estão na tecnologia; estão em quem passa a poder afirmar o que sobre o comportamento coletivo, e com que autoridade.

## 3. Onde isso está hoje

**O que existe e funciona.**

- **Escala.** O OASIS (CAMEL-AI) é um simulador aberto de mídia social desenhado a partir de X e Reddit, com ambiente que se atualiza dinamicamente, 21 ações possíveis por agente (seguir, comentar, repostar) e sistema de recomendação embutido; declara suportar até um milhão de agentes e replica difusão de informação, polarização de grupo e efeito manada. O artigo está no arXiv desde novembro de 2024 e chegou à quinta versão em março de 2025 — sinal de trabalho continuado, não de demonstração única [F1].
- **Sociedade com economia e cidade.** O AgentSociety gera a vida social de mais de dez mil agentes com cinco milhões de interações, cada agente com memória, objetivos, emoções e relações, e é usado como bancada para cinco temas: polarização, mensagem inflamatória, renda básica universal, choque externo (furacão) e sustentabilidade urbana. Importante para o argumento deste mapa: os autores o descrevem explicitamente como testbed para *métodos de pesquisa* — survey, entrevista, intervenção [F2].
- **Ferramental de propósito geral.** A Concordia, do Google DeepMind, oferece a arquitetura que virou padrão de fato: entidades-jogadoras que declaram ações em linguagem natural e um *Game Master* que resolve o que acontece, como num RPG de mesa. O README lista, entre as aplicações, "avaliação de desempenho de serviços reais por uso simulado" — ou seja, a ponte para produto já está escrita na porta da ferramenta [F4].
- **O indivíduo, não só a população.** O trabalho de Park e colegas (Stanford) construiu agentes a partir de entrevistas de cerca de duas horas com mais de mil pessoas, e mediu o quanto esses agentes reproduzem as respostas dos indivíduos que representam em instrumentos consagrados (General Social Survey, Big Five), comparando-os com agentes construídos só a partir de demografia. O material institucional descreve também um *agent bank* — um acervo dessas réplicas com acesso controlado [F5].

**O que existe e não funciona (ou não se sustenta como se anuncia).**

- **Validade.** Uma revisão crítica de 2025 sobre LLM em simulação social baseada em agentes nomeia o problema central de *fluency fallacy*: o agente produz texto coerente que mascara inconsistência de comportamento, o que torna a validação difícil. Acrescenta a lacuna micro-macro (comportamento individual plausível não garante padrão agregado correto), o custo de rodar réplicas suficientes, o viés herdado dos dados, e a opacidade causal — não se sabe por que o agente decidiu o que decidiu [F6].
- **Respondente sintético.** No terreno vizinho, o dos *silicon samples*, o quadro empírico é desconfortável: em pareamentos humano-sintético, a concordância depende brutalmente da tarefa — alta em precificação, baixa em falácia da conjunção e em efeito de ancoragem, com inversão de sinal de coeficiente em parte dos termômetros do ANES —, e o método de correção estatística mais citado (PPI++) chega a *piorar* o viés demográfico em subgrupos. A recomendação dos próprios autores é um semáforo com três saídas, e uma delas é "desista" [F7].
- **Custo.** O README do OASIS publica consumo de tokens para **100** agentes (≈335 mil de entrada, ≈16,7 mil de saída) e uma tabela de custo em modelos comerciais. A escala de um milhão é uma capacidade declarada da arquitetura; o custo publicado é de dois dígitos de agentes. Não há menção, na documentação lida, a rodar com modelos locais [F3].

**Quem está construindo.** Laboratórios acadêmicos (Stanford, e o grupo do AgentSociety), um laboratório industrial (DeepMind, com a Concordia), uma comunidade aberta (CAMEL-AI), e uma indústria adjacente de pesquisa sintética que vende hoje, com marketing muito à frente da evidência.

**Diagnóstico de maturidade.** Aplicando a heurística do Hype Cycle apenas como diagnóstico — cobertura de demonstração ou cobertura de adoção? —, o que se lê é cobertura de demonstração: artigos que replicam fenômeno conhecido e anunciam escala. A exceção é a pesquisa sintética comercial, que já tem adoção real em teste de conceito de baixo risco, e também já tem a literatura de contestação que só aparece quando alguém usa de verdade.

## 4. As disrupções-raiz

### 4.1 População sintética barata, configurável e observável por dentro

**O que rompe.** A restrição antiga era de acesso: para ver como mil pessoas reagem a uma mudança de feed era preciso ter mil pessoas — e, mesmo tendo, não se enxergava o estado interno delas. A população sintética remove as duas restrições ao mesmo tempo: o experimento fica repetível, o contrafactual fica disponível (roda-se o mesmo mundo com e sem a mudança) e o estado interno é legível, porque é texto.

**Por que agora e não há cinco anos.** Em 2021 não havia agente que conversasse, lembrasse e mudasse de opinião sem regra escrita à mão; havia NetLogo e regras fixas. O limiar concreto é duplo: a arquitetura de agente generativo com memória, que data de 2023, e a queda de custo por agente-passo, que permitiu ir de 25 agentes para arquiteturas que declaram 10⁴–10⁶ [F1][F2]. O objeto simulado mudou de categoria: deixou de ser autômato e passou a ser interlocutor.

**O que ainda falta.** Validação externa. Replicar fenômeno já conhecido (polarização, manada) prova que o simulador não é absurdo; não prova que ele prevê o desconhecido — que é para isso que se usaria um túnel de vento [F6].

### 4.2 O agente ancorado numa pessoa real

**O que rompe.** A simulação deixa de ser sobre "um brasileiro típico de 34 anos" e passa a ser sobre *aquela* pessoa, que foi entrevistada, consentiu e pode ser consultada de novo amanhã, mil vezes, de graça. Isso remove a restrição que estruturava toda a pesquisa com usuários: o respondente é caro, cansa e some.

**Por que agora e não há cinco anos.** Porque o insumo mudou: não é mais preencher o modelo com demografia (que é o que as tentativas anteriores faziam, e que produz estereótipo), e sim condicioná-lo a uma entrevista longa da própria pessoa, com acurácia medida contra as respostas reais dela em instrumentos padronizados, e com comparação explícita contra a alternativa demográfica [F5]. O limiar é metodológico e mensurável, não retórico.

**O que ainda falta.** Um regime de consentimento que funcione. A réplica é derivada de fala identificável, dura mais que o consentimento e se agrega em coisas das quais não é mais extraível. E falta evidência de que a fidelidade se sustenta fora do tipo de pergunta com que foi avaliada [F7].

### 4.3 A obrigação de avaliar antes de implantar, sem método aceito

**O que rompe.** Esta raiz não é técnica, é jurídica — e a Etapa 2 admite limiar jurídico. O Artigo 34 do DSA obriga plataformas muito grandes a avaliar risco sistêmico na designação, ao menos uma vez por ano e **antes de implantar funcionalidades com impacto crítico** sobre os riscos identificados; entre os fatores a examinar está, nominalmente, o desenho dos sistemas de recomendação, e a documentação probatória deve ser guardada por três anos [F8]. Em português claro: mexer no algoritmo de recomendação exige, por lei, um estudo prévio.

**Por que agora e não há cinco anos.** Porque a obrigação não existia — o DSA passou a valer para as plataformas designadas em 2023 — e porque a primeira rodada de avaliações mostrou que não há método padronizado nem orientação formal da Comissão. Há um requisito sem procedimento, e um instrumento procurando um uso. É exatamente o formato de encaixe que produz adoção rápida.

**O que ainda falta.** Aceitação. Nada garante que regulador ou auditor considere o resultado de uma simulação como evidência; pode acontecer o contrário, e a simulação virar peça de teatro de conformidade — relatório grosso que ninguém consegue contestar.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "População sintética barata, configurável e observável por dentro"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "Testar uma mudança de ranking contra uma população sintética vira etapa padrão do ciclo de produto nas plataformas grandes."
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "Forma-se um mercado de tunel-de-vento-social como serviço, vendido a quem nao tem laboratorio proprio."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "O fornecedor do mundo simulado vira infraestrutura critica e passa a decidir, na pratica, quais efeitos sao visiveis e quais nao existem."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "A pesquisa com usuarios reais e empurrada para o fim do ciclo, como confirmacao, e deixa de ser a fonte de descoberta."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Times de design perdem contato com o caso anomalo e passam a errar de forma sistematica com usuarios fora da distribuicao do modelo."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "Resultados de simulacao de dinamica de desinformacao passam a ser publicados como evidencia em disputa publica."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Abre-se disputa metodologica publica sobre a validade da sociedade sintetica usada em cada estudo."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Consolida-se um registro publico de protocolo de simulacao - pre-registro, semente, versao do modelo, populacao - como condicao para o resultado ser citavel."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "Atores interessados encomendam simulacoes sob medida que sustentam a conclusao que ja queriam."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "A formula 'a simulacao mostrou que' perde peso retorico e passa a exigir auditoria de terceiro para circular."
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "O agente ancorado numa pessoa real (gemeo entrevistado)"
    efeitos:
      - id: e3
        ordem: 1
        efeito: "Paineis de pesquisa passam a vender replicas de respondentes reais, com consentimento e contrato de uso."
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "Surge um direito contratual sobre a propria replica: revogacao, prazo de validade e escopo de uso."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Revogar a replica se torna impossivel na pratica, porque ela ja foi agregada em populacoes derivadas das quais nao e mais extraivel."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "Comites de etica em pesquisa passam a discutir se consultar a replica de alguem e pesquisa com seres humanos."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "O regime etico se bifurca: replica ancorada em pessoa identificavel entra na regulacao de pesquisa; populacao sintetica generica fica fora dela."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: "O custo marginal de perguntar cai para perto de zero e o volume de perguntas feitas por ciclo de produto cresce uma ordem de grandeza."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "A pesquisa de baixo risco migra para sintetico enquanto a de alto risco permanece humana, criando uma divisao formal de castas metodologicas."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "A industria de paineis humanos encolhe e encarece, degradando justamente a base empirica que servia para validar o sintetico."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "Interfaces passam a ser otimizadas contra milhares de respostas simuladas por dia, isto e, contra o respondente medio do modelo-base."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "Produtos de midia convergem para fluxos e esteticas homogeneos, moldados pelo mesmo punhado de modelos-base usados como juri."
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "A obrigacao de avaliar antes de implantar (DSA art. 34) sem metodo aceito"
    efeitos:
      - id: e5
        ordem: 1
        efeito: "Relatorios de risco sistemico passam a incluir resultado de simulacao como prova de diligencia previa."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "Auditores independentes precisam da capacidade de rodar a contra-simulacao, e nao apenas de ler o relatorio da plataforma."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Forma-se a profissao de auditor de mundo simulado, com credencial, metodo publicado e responsabilidade legal pelo parecer."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "Plataformas sem capacidade propria contratam o simulador de terceiros, e o fornecedor passa a integrar o processo regulatorio."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "Instala-se conflito de interesse estrutural quando o mesmo fornecedor constroi o mundo, roda o teste e assina o laudo."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: "Governos passam a exigir simulacao previa para politica publica digital, como regra de plataforma, campanha de comunicacao e politica de moderacao."
        sinal: fraco
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "Cria-se a figura do sandbox social oficial: um ambiente publico onde a politica roda antes de valer."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "A escolha dos parametros do sandbox vira objeto de disputa politica explicita, como hoje e a escolha do indice que corrige um contrato."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "Uma decisao publica de impacto e tomada com base em resultado de simulacao que depois se revela errado."
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "O erro produz a primeira regra dura sobre admissibilidade de evidencia sintetica em decisao publica."
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

O que o bloco não diz sozinho:

**As três raízes não são independentes — e a roda esconde isso.** A raiz 3 (obrigação regulatória) só produz efeito se a raiz 1 (escala barata) se sustentar, porque avaliar risco sistêmico exige população, não amostra. E a raiz 2 (gêmeo entrevistado) é a que dá credibilidade às outras duas: é o único ponto do mapa onde alguém mediu fidelidade contra respostas reais de pessoas identificadas. Se a raiz 2 falhar em generalizar, as outras duas continuam acontecendo — só que como teatro.

**O eixo mais quente não aparece como efeito.** É a assimetria: quem tem o mundo simulado tem o veredito sobre o que é efeito colateral. Isso está espalhado em e1.1.1, e2.2.1 e e5.2.1, mas é uma coisa só, e é a consequência mais política do mapa.

**Os prazos são desiguais de propósito.** Os efeitos de 1ª ordem com prazo 2027-2028 são baratos e não dependem de ninguém autorizar nada — bastam a plataforma e o orçamento dela. Os de 2030 em diante dependem de instituição se mexer, e instituição é lenta; é por isso que toda a subárvore da raiz 3 já nasce com sinal fraco.

## 6. Sinais fracos e wildcards

**Sinais fracos.**

- **A simulação pessoal, rodando na máquina de quem pesquisa.** O levantamento da turma cita uma vila inteira rodando no navegador, sem rede. Não consegui verificar o projeto nesta sessão (ver §8 e §12), mas a direção é verificável por outro caminho: o README do OASIS publica consumo de tokens para 100 agentes na casa das centenas de milhares [F3] — ordem de grandeza que um modelo local já executa. Se a simulação social virar coisa de laptop, ela deixa de ser privilégio de laboratório e o mapa inteiro acelera.
- **Encontro entre agentes de autores diferentes.** Redes fechadas onde agentes criados por pessoas distintas se encontram são o embrião de um objeto que hoje não existe: o experimento social multi-institucional sem coordenação central. É também o pesadelo metodológico correspondente — ninguém controla a variável de ninguém.
- **Reprodutibilidade como diferencial de produto.** Replay determinístico e artefato endereçado por hash, citados no levantamento do aluno, são exatamente o que falta para a simulação virar evidência. Que isso apareça como funcionalidade de projeto pequeno, e não como exigência acadêmica, é sinal fraco interessante: o rigor pode chegar pelo produto, não pela revista.

**Emergentes rejeitadas como raiz (ficam no radar).**

- **Digital twin de cidade inteira com dados reais.** Existe, é caro, e ainda não mudou restrição nenhuma de quem projeta mídia — é infraestrutura de urbanismo. Sem limiar concreto para citar, não entra.
- **Agente com corpo no mundo físico.** Tema 9 da disciplina; aqui só entraria se a simulação passasse a treinar comportamento embarcado, e não há evidência lida disso.
- **Modelagem baseada em agentes clássica (NetLogo e similares).** Rejeitada por maturidade, e é a rejeição mais importante deste mapa: se sumisse amanhã, o campo não voltaria a ser o que era, porque já foi absorvida e tem substitutos. Ela é o piso do qual a disrupção parte.

**Wildcard (baixa probabilidade, alto impacto).** Um órgão eleitoral ou um tribunal aceita, em 2029 ou 2030, resultado de simulação social como peça instrutória — "a simulação mostra que esta regra de impulsionamento aumentaria X% a difusão de conteúdo falso" — e a decisão é tomada com base nisso. Dois anos depois demonstra-se que a população sintética usada tinha viés na direção do resultado. O impacto não é o erro em si: é a criação, de uma vez, de jurisprudência sobre evidência sintética, provavelmente restritiva demais e escrita sob o efeito do escândalo. O sinal precoce disso é banal e já observável: um relatório de política pública citando simulação de agentes na seção de metodologia, sem protocolo anexo.

## 7. Contra o próprio mapa

**Extrapolação linear.** O efeito `e4` — custo marginal de perguntar cai a zero, volume explode — é o presente, só que mais. É a continuação direta de uma curva de custo de inferência que já está em curso, sem descontinuidade nenhuma. Mantive `confianca: alta` justamente porque é extrapolação: é o efeito de que mais tenho certeza e o que menos ensina. O leitor deve tratá-lo como piso do mapa, não como achado. O mesmo vale, em menor grau, para `e1`: testar antes de lançar já é cultura de plataforma; o que muda é o material do teste, não o hábito.

**Velocidade de adoção nunca vista.** `e1` com prazo 2028 e confiança alta é o ponto mais frágil. O caso comparável que contradiz o prazo é o próprio teste A/B: levou cerca de uma década para ir de prática de poucas empresas de busca a infraestrutura padrão de produto digital — e ele tinha uma vantagem que a simulação não tem, a de medir usuário real, sem precisar convencer ninguém de que o substituto é fiel. Um segundo comparável, mais cruel, é o do respondente sintético: está em adoção comercial há dois anos e a literatura de validação continua concluindo que serve para estágio inicial e baixo risco [F7]. Por isso `e1.1` e `e1.2` ficam em `media`, e não em alta: a adoção do *ritual* é rápida; a da *confiança* não é.

**E se a raiz não vingar?**

- *Raiz 1 não vinga* (a validade externa não se estabelece e a simulação fica reconhecida como ferramenta de geração de hipótese, nunca de decisão): caem `e1.1`, `e1.1.1`, `e5` e toda a subárvore regulatória, porque ninguém aceita como prova o que a academia trata como brainstorm caro. Sobrevive `e1.2` numa versão fraca — a simulação como etapa de descoberta barata antes do teste com gente — e sobrevive `e2`, porque no debate público a exigência de validade é menor que na revista científica. É, aliás, o cenário mais provável para os próximos dois anos, dado o que [F6] e [F7] mostram.
- *Raiz 2 não vinga* (a fidelidade do gêmeo não generaliza para além do tipo de pergunta em que foi medida): cai a subárvore de `e3` inteira, incluindo a discussão ética, que simplesmente não acontece se a réplica for reconhecidamente ruim. `e4` sobrevive integralmente, porque volume barato não depende de fidelidade — e é aí que mora o risco: o mundo em que se pergunta muito a réplicas ruins é pior que o mundo em que não se pergunta.
- *Raiz 3 não vinga* (regulador rejeita simulação como evidência de diligência): caem `e5`, `e6` e as seis folhas abaixo delas — um terço do mapa. Fica de pé a simulação como ferramenta interna de produto, sem valor jurídico. Note que esta raiz é a que tem menor sinal e maior número de efeitos dependentes de terceiros: é a subárvore que eu apostaria em rebaixar primeiro.

**O que o ataque mudou.** Rebaixei `e3` de alta para média (vender réplica de pessoa real esbarra em consentimento, e consentimento é lento), rebaixei `e6` de média para baixa e adiei `e5.2` de 2029 para 2030 pela mesma razão institucional. Cortei dois efeitos por serem especulação sem mecanismo — estão no Anexo.

**Viés do autor.** A skill manda perguntar ao usuário, não inventar por ele. Nesta rodada não há usuário para responder, e a instrução recebida declara viés neutro e zona de interesse "Simulação e mundos" — isto é, o autor escolheu o tema dentro da área que já lhe interessa. Registro isso como limitação, não como resposta: **a pergunta sobre viés do autor não foi feita a ninguém**, e a declaração de neutralidade é do enunciado da tarefa, não do autor entrevistado. O sinal de que o tema foi escolhido por gosto está no próprio mapa — três raízes aceitas é generoso, e a raiz 3 passou no teste por um limiar jurídico, não por um limiar técnico.

## 8. O que a máquina errou

**1. Citei um número que não estava na fonte que eu disse ter lido.** Ao levantar o terreno dos respondentes sintéticos, escrevi na primeira versão que "uma revisão de 285 comparações silício-humano encontrou 65,3% de divergência" e atribuí isso ao artigo de diagnósticos e correções para painéis sintéticos de LLM. Ao abrir o artigo, o que existe é outra coisa: 2.286 respondentes do ANES pareados, 172.884 observações no Twin-2K-500, 180 replicações em 9 cenários controlados, e a falha do PPI++ (+58,5% de viés feminino, +44,7% de viés branco não-hispânico) atribuída a *terceiros*, Krsteski et al. Os "285 comparações / 65,3%" vieram de um trecho de busca que resumia **outro** trabalho. Percebi porque a leitura devolveu números com estrutura totalmente diferente dos que eu ia escrever. Este é o erro típico e perigoso: o número do snippet é plausível, redondo e vestível — e o texto final teria citado a fonte errada com confiança total.

**2. Assumi que o OASIS roda com modelo local.** Escrevi, de memória, que a escala de um milhão de agentes só faz sentido com inferência local (vLLM) e ia usar isso como evidência de que a simulação está barateando. O README não menciona modelo local nenhum: os exemplos são OpenAI e Qwen, e a tabela de custo é em yuan, para modelos comerciais [F3]. Pior: a única medição de token publicada é para **100** agentes, não para um milhão. A frase "declara um milhão de agentes" continua verdadeira; a frase "roda barato" não estava sustentada. Corrigi para separar capacidade declarada de custo medido.

**3. Fontes do levantamento da turma que eu não verifiquei.** `Luvoire`, `y-not.social`, `Gestalt Village`, `Argentor`, `NeuroForge`, `agent-inspect`, `DisasterReliefOps` e `Rath` vêm do levantamento do aluno. Busquei três deles e a busca não retornou nada específico (§12). **Não estão na seção 11 e não sustentam nenhum efeito deste mapa** — aparecem na §6 apenas como reportagem do levantamento, marcados como não verificados.

**4. Extração rala numa fonte que abri.** A página institucional de Stanford sobre os agentes-entrevista [F5] retornou um resumo pobre: confirmou o desenho (entrevistas de duas horas, GSS, Big Five, comparação com agentes demográficos, existência de um *agent bank*), mas **não** confirmou os números de acurácia (0,85 / 0,83) que circulavam nos trechos de busca. Por isso este documento fala em "acurácia medida contra respostas reais" e **não cita o número**. Se o número for usado em sala, tem de sair do artigo original, lido na íntegra — não deste mapa.

**5. Limitação de processo declarada.** A Etapa 4 manda perguntar ao usuário sobre viés do autor. Não havia usuário nesta rodada; a pergunta não foi feita (§7).

## 9. Três cenários para 2031

**Provável.** Em 2031, simular virou etapa de processo e não virou prova. As plataformas grandes mantêm equipes que rodam populações sintéticas antes de mexer no ranking, e o resultado entra no relatório anual de risco sistêmico como anexo — grosso, pouco lido, raramente contestado. A pesquisa com pessoas não acabou: encolheu, encareceu e virou a etapa de confirmação no fim do funil, o que na prática significa que descobre-se menos e confirma-se mais. A academia continua dividida: metade dos artigos usa sociedade sintética para gerar hipótese, a outra metade publica críticas de validade, e as duas metades citam os mesmos três simuladores. O regulador europeu nunca disse que aceita simulação como evidência, e também nunca disse que não — a ambiguidade serviu a todo mundo. No Brasil, o assunto chegou pela porta da desinformação eleitoral e ficou no discurso: fala-se em "testar a regra antes" desde as resoluções do TSE de 2026, mas quem tem capacidade de rodar o teste são as próprias plataformas.

**Desejável.** Em 2031, a simulação social virou instrumento com regras de uso, e as regras vieram antes do escândalo. Toda simulação que sustenta afirmação pública circula com protocolo: população declarada, modelo e versão, sementes, replay reprodutível, e o contrafactual rodado. Auditores independentes conseguem rodar a contra-simulação, porque exigiu-se que o ambiente fosse portável — e não só o relatório. Réplicas ancoradas em pessoas identificáveis entraram no regime de ética em pesquisa, com revogação que funciona porque foi desenhada antes da agregação, e não depois. O que teve de ser feito para chegar aqui: a comunidade acadêmica ter publicado, entre 2027 e 2029, um padrão mínimo de relato de simulação social — o equivalente ao pré-registro em psicologia — e ter tido a disciplina de recusar publicação sem ele; os órgãos reguladores terem financiado capacidade pública de simulação, em vez de terceirizar o laudo a quem constrói o mundo; e alguém ter mantido painéis humanos vivos, com dinheiro público, exatamente porque são eles que validam o sintético e o mercado sozinho os mataria.

**Indesejável.** Em 2031, "a simulação mostrou que" virou a nova forma de encerrar discussão. Quem encomenda o mundo escolhe o resultado, porque escolher a população é escolher o desfecho, e ninguém fora de meia dúzia de empresas tem como refazer o experimento. Uma decisão pública de grande alcance — uma regra de moderação em período eleitoral, digamos — foi tomada com base num resultado sintético que depois se mostrou enviesado na direção de quem pagou, e a reação foi uma regra dura escrita em pânico, que jogou fora o instrumento junto com o abuso. Pesquisa com gente real virou luxo de tribunal e de tese de doutorado. O design de mídia, otimizado contra o respondente médio de três modelos-base, produziu produtos que se parecem uns com os outros e que continuam errando sistematicamente com quem está fora da média — sem que ninguém perceba, porque quem está fora da média não aparece na população sintética. **O sinal precoce disto já é visível hoje:** um relatório de política ou de produto que cita resultado de simulação de agentes sem anexar protocolo, população e versão de modelo — e sem que ninguém peça.

## 10. O experimento

**Túnel de vento de feed.**

Uma rede social de brinquedo com 200 agentes rodando localmente, cada um com um perfil curto (interesses, tolerância a discordância, propensão a compartilhar) e memória do que viu. Dois algoritmos de recomendação plugáveis: um cronológico e um por engajamento. Roda-se o mesmo mundo, mesma semente, mesmos agentes, trocando só o ranking, e mede-se o que emerge: quantos clusters de opinião se formam, quanto tempo um boato plantado sobrevive, qual fração dos agentes só vê conteúdo de quem já concorda com eles. O painel mostra o mundo por dentro — dá para abrir a memória de um agente e ler por que ele repostou.

**Que pergunta sobre o futuro ele responde.** Se testar um algoritmo contra uma sociedade sintética vai virar etapa obrigatória do design de plataforma (efeito `e1`), então o resultado desse teste precisa ser *acionável* por quem projeta. O experimento pergunta: o que uma sociedade simulada consegue dizer sobre um sistema de recomendação que um teste A/B não diria — e o que ela diz de errado?

**Que tecnologia emergente usa, e por que não dá com tecnologia madura.** Precisa de agentes com memória e linguagem: o boato tem de ser *reescrito* ao ser passado adiante, com distorção, que é o mecanismo que interessa. Com modelagem baseada em agentes clássica isso não existe — em NetLogo o boato é um bit que propaga com probabilidade *p*, e a conclusão do experimento estaria embutida na escolha de *p*. É exatamente a fronteira entre maduro e emergente descrita na §4.1.

**O que a turma faria em sala.** Antes de rodar, cada pessoa escreve a própria aposta: qual ranking produz mais polarização, e por quanto. Roda-se ao vivo, com os dois rankings, e compara-se com as apostas. Depois vem a parte que ensina de verdade: cada grupo recebe a tarefa de *fabricar* o resultado oposto mexendo só na população — mudando a distribuição de perfis, não o algoritmo. Se conseguirem — e vão conseguir —, a aula terminou provando na prática por que quem escolhe a população escolhe o veredito, que é a tese política deste mapa.

**O que mudaria a opinião do autor.** Duas coisas, declaradas antes de rodar. (a) Se a adoção já tiver passado da maioria inicial — isto é, se aparecer evidência de que simulação pré-lançamento já é prática corrente em produto de massa, e não em laboratório —, o tema deixa de ser emergente pela régua da disciplina e este mapa perde o objeto. (b) Se ficar demonstrado que o simulador só reproduz o que já foi escrito na população — que a emergência é artefato do prompt —, então a tecnologia não rompe nada: é uma forma cara de reler as próprias premissas, e melhora o que já existe sem mudar restrição nenhuma.

## 11. Fontes

Só entram aqui páginas efetivamente abertas nesta sessão. O que foi visto apenas em trecho de resultado de busca está no Anexo, não aqui.

1. **[F1] OASIS: Open Agent Social Interaction Simulations with One Million Agents** — `https://arxiv.org/abs/2411.11581` — sustenta a escala declarada (até 1M de agentes), as plataformas simuladas (X e Reddit), os três fenômenos replicados e a cronologia (v1 em 18/11/2024, v5 em 23/03/2025). Confiabilidade: alta para o que o artigo *declara*; o artigo é pré-print revisado em cinco versões, e as alegações de escala são dos próprios autores, sem replicação independente lida por mim.
2. **[F2] AgentSociety: Large-Scale Simulation of LLM-Driven Generative Agents** — `https://arxiv.org/abs/2502.08691` — sustenta a escala (10 mil agentes, 5 milhões de interações), os cinco temas sociais e, crucialmente, a descrição da plataforma como bancada para métodos de pesquisa (survey, entrevista, intervenção). Confiabilidade: alta para o desenho; o próprio abstract não detalha limitações, o que registrei.
3. **[F3] README do OASIS (camel-ai/oasis)** — `https://github.com/camel-ai/oasis/blob/main/README.md` — sustenta o contraste entre capacidade declarada e custo medido: consumo publicado para 100 agentes (≈335.600 tokens de entrada, ≈16.750 de saída), tabela de custo em modelos comerciais, ausência de menção a modelos locais. Confiabilidade: alta — é documentação primária do projeto.
4. **[F4] README da Concordia (google-deepmind/concordia)** — `https://github.com/google-deepmind/concordia/blob/main/README.md` — sustenta a arquitetura Game Master e, em especial, a aplicação declarada de "avaliação de desempenho de serviços reais por uso simulado". Confiabilidade: alta como documentação; note que o repositório declara não ser produto oficialmente suportado pelo Google.
5. **[F5] Stanford HAI — agentes generativos de 1.052 indivíduos** — `https://hai.stanford.edu/news/ai-agents-simulate-1052-individuals-personalities-with-impressive-accuracy` — sustenta o desenho do estudo (entrevistas de ~2h, avaliação contra GSS e Big Five, comparação com agentes demográficos, existência de um *agent bank*). Confiabilidade: média — é material de divulgação institucional, e a extração desta sessão foi rala: **não confirmou os números de acurácia**, que por isso não aparecem neste documento (§8, item 4).
6. **[F6] Integrating LLM in Agent-Based Social Simulation: Opportunities and Challenges** — `https://arxiv.org/pdf/2507.19364` — sustenta toda a §3 "o que não funciona": *fluency fallacy*, lacuna micro-macro, custo de replicação, viés herdado, opacidade causal, e a leitura crítica das replicações de Milgram e Asch. Confiabilidade: alta para o argumento; é artigo de posição/revisão, não evidência experimental nova.
7. **[F7] When Can You Trust Your Synthetic Users? Diagnostics and Corrections for LLM Consumer Panels** — `https://arxiv.org/html/2609.13148` — sustenta a fragilidade do respondente sintético: correlação alta em precificação e baixa em ancoragem e falácia da conjunção, inversão de sinal em parte dos termômetros do ANES, falha do PPI++ (atribuída por eles a Krsteski et al.) e o semáforo confiar/corrigir/desistir. Confiabilidade: média-alta; é pré-print, e os números do PPI++ são de terceiros citados por ele, não medição própria.
8. **[F8] Artigo 34 do DSA — Risk assessment (CMS DigitalLaws)** — `https://www.cms-digitallaws.com/en/dsa/article-34/` — sustenta a raiz 3: obrigação de avaliar na designação, anualmente e **antes de implantar funcionalidades com impacto crítico**; os cinco fatores, incluindo desenho dos sistemas de recomendação; guarda de documentos por três anos. Confiabilidade: alta para o texto legal — é compilação de escritório de advocacia, útil para o dispositivo, não para interpretação.
9. **[F9] Eleições 2026: novas resoluções do TSE contra desinformação (The Conversation)** — `https://theconversation.com/eleicoes-2026-novas-resolucoes-do-tse-contra-uso-da-desinformacao-sao-um-avanco-mas-ainda-ha-lacunas-estruturais-282224` — sustenta a nota sobre o Brasil no cenário Provável: 14 resoluções aprovadas em março de 2026, janela de restrição a conteúdo sintético (72h antes, 24h depois), rotulagem obrigatória, responsabilidade solidária de plataformas após notificação, e a lacuna estrutural apontada pelos autores — a norma regula conduta e não altera a arquitetura das plataformas. Confiabilidade: média-alta; é análise assinada por acadêmicos, com viés editorial declarado.

## 12. Anexo — o levantamento bruto

Sem corte. O que não estiver aqui não pode ser processado depois.

### 12.1 Etapa 0 — a entrevista que não teve entrevistado

Esta rodada foi executada sem usuário disponível. As respostas da entrevista vieram pré-fornecidas no enunciado da tarefa, e as reproduzo como recebidas, porque elas são o frontmatter:

- Tema: "Sociedades simuladas: a simulação como instrumento de investigação" (tema 6 de 19; família "Simulação e mundos").
- Horizonte: 2031. Público: quem projeta mídia e interação. Recorte: global, com nota sobre o Brasil.
- Descartado de início: o que já é comum em produto de massa (régua da disciplina). Nenhuma outra exclusão.
- Disrupção suspeita: nenhuma declarada — "descubra". Viés: neutro. Excluir ideias óbvias que serviriam a qualquer tema.
- O que mudaria a opinião do autor: evidência de adoção além da maioria inicial (Rogers), ou de que a tecnologia só melhora o que existe.
- Profundidade: três ordens. Modo: a partir de uma inovação, não de um setor.
- Login: jgpt. Zona: Simulação e mundos.

**Duas perguntas obrigatórias da skill ficaram sem resposta real** e estão registradas como limitação, não como assunção silenciosa: (a) a pergunta da Etapa 4 sobre viés do autor (§7); (b) a autorização de publicação na galeria — por isso `publico_ok: false`.

A skill manda recusar gerar sem entrevista. Não houve recusa a fazer: a entrevista veio respondida, ainda que por um enunciado e não por uma pessoa. Registro a diferença porque ela importa para a leitura do mapa.

### 12.2 Buscas realizadas, na ordem

1. `OASIS one million agents social media simulation CAMEL-AI arXiv` — produtiva. Levou a [F1] e [F3].
2. `AgentSociety large-scale LLM agent social simulation 2025` — produtiva. Levou a [F2] e a [F6]. Trouxe também referências não abertas: `MASS: Deep Research for Social Sciences with Memory-Augmented Social Simulation` (arXiv 2606.09198), `From Script to Stage: Automating Experimental Design for Social Simulations with LLMs` (arXiv 2512.08935), `Topology-Aware LLM-Driven Social Simulation` (arXiv 2604.18011), `Crowd: A Social Network Simulation Framework` (arXiv 2412.10781). **Nenhuma foi aberta; nenhuma sustenta nada neste documento.** São a primeira fila de leitura para quem continuar este mapa.
3. `"Generative Agent Simulations of 1,000 People" Park Stanford interview replicate survey responses` — produtiva parcialmente. Levou a [F5]. Os números de acurácia (0,85 agregado; 0,83 normalizado no GSS) apareceram em trechos de busca — inclusive num texto de terceiros, `the-decoder.com` — e **não foram confirmados na página aberta**, por isso não entraram no corpo do documento. O artigo original (arXiv 2411.10109) não foi aberto nesta sessão.
4. `synthetic respondents market research criticism validity 2026 LLM survey samples` — produtiva. Levou a [F7]. Trouxe o número "285 comparações silício-humano, 24,9% similares, 65,3% divergentes, 9,8% parciais" e "erro médio absoluto de 14,5 pontos percentuais" — **números que não foram confirmados em nenhuma fonte aberta**, e que estão registrados aqui, e não no corpo, exatamente por isso (§8, item 1). Também apontou fontes não abertas: NIM ("Leaving Insight to Digital Twins?", "Your Next Respondent Might Be an LLM"), PyMC Labs, MeasuringU.
5. `Digital Services Act Article 34 systemic risk assessment simulation testing recommender before deployment 2026` — produtiva. Levou a [F8]. Trouxe também a observação (Knight-Georgetown Institute, **não aberta**) de que a primeira rodada de avaliações de risco sistêmico não trouxe informação nova e carece de padronização na ausência de orientação formal da Comissão. Usei essa ideia na §4.3 marcando-a como leitura de busca, não como fonte.
6. `Concordia DeepMind generative agent-based modeling library social simulation` — produtiva. Levou a [F4]. Não abertos: arXiv 2312.03664 (artigo original da Concordia), arXiv 2411.07038 (guia de desenho de experimentos com GABM), post da Cooperative AI Foundation sobre a v2.0 e o Concordia Contest do NeurIPS 2024.
7. `Brasil simulação social agentes IA política pública desinformação pesquisa 2026 universidade` — **improdutiva para o objeto**. Não encontrei nenhum trabalho brasileiro de simulação social com agentes de linguagem no sentido técnico deste mapa. O que existe é o debate de desinformação eleitoral (Data Privacy Brasil, InternetLab, UFJF, Observatório Lupa, TSE). Levou a [F9]. **Registro isto como achado negativo:** a nota sobre o Brasil neste mapa é sobre ausência de capacidade instalada, não sobre atividade — e uma busca melhor, em português e em inglês, com nomes de grupos de pesquisa, pode desmentir isso. Não a fiz.
8. `"Gestalt Village" OR "Luvoire" OR "y-not.social" agent simulation itch.io` — **sem resultado específico**. Retornou apenas listagens genéricas de itch.io por tag (`social-simulation`, `village-sim`) e projetos não relacionados (`Agent Sim` de AphoticApps; um trabalho de modelagem baseada em agentes sobre integração de estudantes internacionais). Conclusão honesta: **não verifiquei nenhum dos projetos do levantamento da turma**. `Argentor`, `NeuroForge`, `DisasterReliefOps`, `agent-inspect` e `Rath` sequer foram buscados.

### 12.3 Candidatas a disrupção-raiz testadas e o veredito

| Candidata | Teste "o que rompe, por que agora" | Veredito |
|---|---|---|
| População sintética em escala 10³–10⁶ | Limiar: agente com memória/linguagem (2023) + custo por agente-passo; de 25 para 10⁴–10⁶ | **Aceita** (raiz 1) |
| Gêmeo entrevistado (agente ancorado em pessoa) | Limiar: insumo passa de demografia para entrevista longa, com fidelidade medida contra o próprio respondente | **Aceita** (raiz 2) |
| Obrigação de avaliar antes de implantar (DSA 34) | Limiar jurídico: obrigação existe desde 2023, procedimento não existe | **Aceita** (raiz 3) — a mais frágil das três |
| Modelagem baseada em agentes clássica (NetLogo) | Se sumisse amanhã, o campo não regrediria; absorvida e substituível | **Rejeitada: madura** |
| Simulação local no navegador / laptop | Direção plausível, mas sem limiar concreto verificado nesta sessão | **Rejeitada como raiz → sinal fraco (§6)** |
| Digital twin de cidade com dados reais | Existe, é caro, não removeu restrição de quem projeta mídia | **Rejeitada: emergente** |
| Replay determinístico + artefato por hash | É requisito de credibilidade, não disrupção; vira consequência (e2.1.1) | **Rejeitada → sinal fraco** |
| Agentes com corpo no mundo físico | Fora do recorte (tema 9 da disciplina) | **Descartada por escopo** |
| Personagens autônomos em jogos | Fora do recorte (tema 7) | **Descartada por escopo** |
| Mercados de agentes com dinheiro real | Fora do recorte (tema 5) | **Descartada por escopo** |

### 12.4 Efeitos gerados e depois cortados

- *"A simulação social vira gênero de entretenimento: assistir a sociedades sintéticas se desenrolar."* Cortado por atravessar a fronteira com o tema 7 (personagens em jogos) e por não ter mecanismo causal ligado a nenhuma das três raízes — é observação sobre cultura de internet, não consequência do limiar cruzado.
- *"Escolas usam sociedades simuladas para ensinar ciências sociais."* Cortado por ser o tipo de ideia que serve a qualquer tema deste mapa (o enunciado pediu explicitamente para excluir ideias óbvias). Além disso a evidência disponível é de divulgação institucional, não de adoção.
- *"Surge um mercado negro de populações sintéticas enviesadas sob encomenda."* Cortado como efeito de 4º nível: é a consequência de `e2.2.1`, e o formato trava em três níveis. Fica aqui como material para quem continuar.
- *"Agentes simulados passam a ser usados para treinar moderadores humanos."* Cortado por ser aplicação de treinamento, não de investigação — o recorte do tema é a simulação como método.

### 12.5 Rebaixamentos aplicados na Etapa 4

| Efeito | De | Para | Motivo |
|---|---|---|---|
| e3 | confiança alta | média | Venda de réplica de pessoa real depende de consentimento, que é lento e contencioso |
| e6 | confiança média | baixa | Depende de instituição pública se mover; nenhuma evidência lida de que isso esteja em curso |
| e5.2 | prazo 2029 | 2030 | Mesma razão institucional; contratação regulada é mais lenta que contratação de produto |
| e1.1 e e1.2 | confiança alta | média | O comparável do teste A/B mostra que o hábito adota rápido e a confiança adota devagar |

### 12.6 O que este mapa deliberadamente não fez

- Não abriu o artigo original dos agentes-entrevista (arXiv 2411.10109) nem o artigo original da Concordia (arXiv 2312.03664). Ambos são leitura obrigatória para a próxima rodada.
- Não buscou evidência de adoção comercial de simulação pré-lançamento em plataformas (o que testaria diretamente o efeito `e1` e, se confirmado em escala de massa, invalidaria o tema pela régua da disciplina).
- Não procurou literatura de validação *positiva* — trabalhos que mostrem simulação acertando previsão fora da amostra. Procurei crítica e achei crítica; isto é viés de busca meu, e o leitor deve descontá-lo ao ler as §3 e §7.
