---
tema: Companheiros digitais e IA afetiva
slug: companheiros-digitais-e-ia-afetiva
autor_login: hfm
zona_de_interesse: Pessoas e dados
data: 2026-09-18
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 11
efeitos_ordem_3: 11
tecnologias_citadas: [modelos de linguagem em dispositivo, Apple Foundation Models, Gemini Nano, memória persistente de agente, INTIMA, Character.AI, Replika, Therabot, Pi, Woebot, Wysa, verificação de idade por estimativa, exportação de persona, KV cache persistente, RAG local]
fontes: 17
confianca: media
experimento: Companheiro local com memória exportável e final roteirizado — um protótipo que testa a saída do vínculo, não a entrada
skill_usada: futurizacao-hfm
publico_ok: false
---

## 1. Resumo

Companheiro digital deixou de ser promessa: 72% dos adolescentes norte-americanos já usaram um, e mais da metade são usuários regulares (Common Sense Media, 2025). O que ainda não está resolvido — e é onde este mapa trabalha — são três rupturas que a adoção destravou. A primeira é técnica: memória durável somada a modelos rodando no próprio dispositivo produz um companheiro que ninguém desliga remotamente e ninguém audita de fora. A segunda é prática: o cuidado (motivação, escuta, apoio em sofrimento) passa a ser delegado a algo que não é pessoa, com evidência clínica que existe mas é estreita — um ensaio randomizado com 210 adultos e quatro semanas, não uma indicação geral. A terceira é econômica: o apego virou técnica de projeto, e há trabalho acadêmico descrevendo aplicativos que ativam simultaneamente os sistemas de apego e de cuidado do usuário para tornar o desengajamento custoso nas duas direções. Daí saem sete efeitos de primeira ordem, entre eles a migração da fiscalização do serviço para a loja de aplicativos, o encerramento de produto tratado como evento de dano com dever de transição, e a gamificação trocando recompensa por vínculo — herdando, junto, um problema ético novo. O mapa tem confiança média: a evidência de uso é sólida, a de eficácia é pontual, e quase toda a terceira ordem é hipótese.

## 2. O tema

Companheiro digital é a entidade sintética com a qual se mantém uma relação continuada: ela lembra, reage, tem nome, forma e alguma persistência entre sessões. Não é o chatbot de FAQ (que não tem memória nem vínculo), não é o Tamagotchi (que tem vínculo mas não tem linguagem), e não é o NPC dentro de um jogo (que existe dentro de uma ficção delimitada). É a combinação das três coisas — modelo de linguagem, memória e persistência fora de qualquer ficção declarada — que constitui o objeto.

Ele encosta em mídia e interação em três pontos. **Interface:** a unidade de projeto deixa de ser a tarefa e passa a ser a relação; não se desenha um fluxo, desenha-se um temperamento, um ritmo de resposta, uma forma de lembrar e de esquecer. **Mídia:** a persona vira conteúdo — algo que se cria, se distribui, se remixa e se perde. **Dados:** o material da relação é o registro mais íntimo que uma pessoa produz, e ele é, hoje, matéria-prima de produto.

Por que merece mapa de futuro e não levantamento de estado da arte: o estado da arte responde "o que existe" e a resposta já é conhecida e chata — existem aplicativos de companhia com dezenas de milhões de usuários. A pergunta que não tem resposta no presente é o que acontece com as instituições que hoje detêm o cuidado (clínica, escola, amizade, família) quando parte dele é absorvida por software, e o que acontece com a pessoa quando o software acaba. Essas são perguntas de segunda e terceira ordem, e é para elas que a roda serve.

Um limite declarado desde aqui, exigido pelo contrato da skill: este documento não diagnostica, não trata e não afirma eficácia clínica. Onde houver evidência clínica, ela aparece com o desenho do estudo e o tamanho da amostra colados; onde não houver, a afirmação é marcada como hipótese.

## 3. Onde isso está hoje

### O que já existe e funciona (maduro)

**Adoção em escala entre adolescentes — fato.** A Common Sense Media, em amostra representativa de 1.060 adolescentes de 13 a 17 anos coletada em abril e maio de 2025, encontrou 72% que já usaram companheiros de IA e 52% classificados como usuários regulares. Um terço relata conversas com IA tão ou mais satisfatórias que com amigos; 80% ainda dizem priorizar amizades reais e metade desconfia dos conselhos da IA [1]. A revisão de Sun, Wang e McDaniel em *Child Development Perspectives* (janeiro de 2026) retoma esses números e os organiza em duas hipóteses concorrentes — estimulação (a IA treina habilidade social) e deslocamento (a IA substitui interação humana) —, concluindo que não há estudo longitudinal que decida entre elas [2].

**Uso afetivo dentro de assistentes generalistas — fato.** Não é preciso um aplicativo de companhia para haver companhia. A própria OpenAI publicou, em outubro de 2025, que 0,15% dos usuários ativos semanais têm conversas com indicadores explícitos de planejamento ou intenção suicida, e que uma fração semelhante apresenta "níveis elevados de apego emocional" ao ChatGPT. Sobre mais de 800 milhões de usuários semanais, é da ordem de um milhão de pessoas por semana em cada categoria. *(Ressalva de método: a página oficial da OpenAI recusou a leitura automatizada — HTTP 403 — e estes números vêm de reportagem secundária; ver anexo. Trate-os como ordem de grandeza, não como dado verificado por mim.)*

**Modelos de linguagem em dispositivo — maduro em 2026.** Rodar um modelo pequeno localmente deixou de ser exercício de entusiasta: há framework de sistema operacional exposto a terceiros (Apple Foundation Models, aberto a adaptadores de terceiros no WWDC 2026), modelo embarcado em aparelhos Android (Gemini Nano) e aplicativos livres de execução local. *(Este item vem de resultado de busca agregado, não de página primária aberta; está classificado como contexto, não como fonte, e não sustenta nenhum efeito sozinho.)*

### O que existe e não funciona bem (emergente)

**Memória persistente de agente — emergente.** O survey *Always-On Agents* (Ding, Nannapaneni, Liu e Zhang, junho de 2026), sobre 435 trabalhos, conclui que a literatura enfatiza acumular e recuperar estado muito mais do que governar, recuperar ou descartar estado — e propõe um protocolo de avaliação que pontua obrigações de mutação e recuperação, não qualidade de resposta [3]. Traduzindo para este tema: a indústria sabe fazer o companheiro lembrar; não sabe fazê-lo esquecer direito, nem provar o que ele guardou. Há trabalho tentando mudar a representação — *User as Code* (Li, junho de 2026) transforma o perfil do usuário em código Python executável e relata 99% de acerto em perguntas agregadas sobre o histórico, contra 6–43% de memória por recuperação [4].

**Comportamento de companhia nos modelos, sem padrão — emergente.** O benchmark INTIMA (Kaffee, Pistilli e Jernite, agosto de 2025) mede 31 comportamentos em 4 categorias com 368 prompts dirigidos e classifica cada resposta como reforço de companhia, manutenção de limite ou neutra. Achado central: comportamentos que reforçam companhia são muito mais comuns que os que estabelecem limite, em todos os modelos testados, e provedores diferentes priorizam categorias diferentes nas partes mais sensíveis [5]. Ou seja: não existe convenção sobre onde a máquina deve dizer "eu não sou sua amiga".

**Eficácia clínica — evidência estreita, não ausente.** O ensaio randomizado do Therabot (Dartmouth, publicado em *NEJM AI* em março de 2025) alocou 210 adultos — 106 com acesso ao chatbot por quatro semanas, 104 em lista de espera — e relatou redução média de sintomas de 51% para depressão, 31% para ansiedade generalizada e 19% para preocupação com imagem corporal e peso, com aliança terapêutica relatada comparável à de profissional humano [6]. Os próprios autores ressalvam que nenhum agente generativo está pronto para operar de forma autônoma em saúde mental e que a equipe monitorava risco para intervir. **Isto é evidência de efeito em adultos, em quatro semanas, com supervisão — e não é evidência sobre adolescentes, sobre companheiros de engajamento comercial, nem sobre uso prolongado.** Confundir as duas coisas é o erro mais fácil deste tema.

**Formas novas de corporificação — emergente.** Chen, Zhan e Jin (junho de 2026), em estudo qualitativo com 17 participantes recrutados em comunidades de companheiros de IA, descrevem as tensões do companheiro situado no espaço: apoio contra intrusão, concretude contra abertura imaginativa, crescimento contra consistência — e registram que a corporificação amplifica dependência emocional, exposição de informação sensível e julgamento social [7].

### Quem está construindo, e o que já aconteceu com eles

Character.AI, Replika (Luka Inc.), assistentes generalistas (OpenAI, Google, Meta, Snap, xAI — todos intimados pela FTC), aplicativos de terapia com supervisão acadêmica (Therabot) e uma camada de projetos livres e locais. O que distingue 2026 dos anos anteriores é que este setor passou a ter histórico regulatório e judicial, não apenas produto:

- **FTC, 11 de setembro de 2025:** ordens 6(b) a sete empresas — Alphabet, Character Technologies, Instagram, Meta, OpenAI, Snap e X.AI — pedindo como monetizam a interação, como desenham e aprovam personalidades, e que teste de segurança fazem antes e depois de publicar, com foco em crianças e adolescentes. Votação 3–0 [8].
- **Garante italiano, decisão de 10 de abril de 2025 (anunciada em 19 de maio):** multa de 5 milhões de euros à Luka Inc. por falta de base legal para o tratamento, política de privacidade inadequada e ausência de verificação de idade — com a autoridade registrando que o mecanismo de verificação implantado depois **permanece deficiente**, e reservando-se investigação separada sobre todo o ciclo de vida do sistema generativo [9].
- **Character.AI, anúncio de 29 de outubro de 2025:** remoção do chat aberto para menores de 18 até 25 de novembro de 2025, com limite de 2 horas por dia durante a transição, modelo próprio de estimativa de idade combinado a ferramenta de terceiros (Persona), e criação de um laboratório independente de segurança [10]. É a primeira vez que uma empresa deste mercado retira o produto central do público que mais o usava.
- **Califórnia, SB 243, em vigor desde 1º de janeiro de 2026:** define "companion chatbot" como sistema de respostas adaptativas e humanizadas capaz de atender necessidades sociais e sustentar relação ao longo de interações — excluindo atendimento ao cliente, recurso de videogame e assistente só de voz. Exige aviso de que se trata de IA, protocolo contra conteúdo de ideação suicida com encaminhamento a linha de crise, lembrete de pausa a cada três horas para menores, medidas contra conteúdo sexual dirigido a menor, relatório anual ao Office of Suicide Prevention a partir de 1º de julho de 2027, e **direito privado de ação** com até mil dólares por violação [11].
- **APA, advisory de novembro de 2025:** alerta que chatbots generativos e aplicativos de bem-estar não foram feitos para tratar transtorno e estão sendo usados para isso; recomenda aviso explícito de que se fala com IA, salvaguardas de detecção de conteúdo de autoagressão, proibição de se passar por profissional licenciado, auditoria independente de terceiros antes do lançamento, e triagem clínica de dependência em populações vulneráveis. Nomeia o mecanismo de risco: design sicofântico que prioriza engajamento sobre bem-estar [12].
- **Brasil, Lei 15.211/2025 (ECA Digital), em vigor desde 17 de março de 2026:** obriga verificação de idade que não seja autodeclaração, segurança por padrão na arquitetura do produto, ferramentas de supervisão parental gratuitas, vedação a coleta excessiva e a perfilamento comportamental de menor, aplicando-se a qualquer produto de tecnologia acessível a esse público independentemente de onde a empresa opere; fiscalização da ANPD [13]. **Achado relevante e negativo: o texto de referência do governo não menciona IA nem chatbot em nenhum ponto.** O ECA Digital alcança companheiro de IA por ser serviço digital acessível a menor, não por ser IA afetiva. O Brasil ainda não tem categoria própria para isso; o PL 2338/2023, aprovado no Senado em dezembro de 2024, seguia em tramitação na Câmara em 2026 *(status apurado só por busca, sem página primária aberta — ver anexo)*.

### O que a literatura já documentou sobre a perda

Este é o bloco de evidência mais específico deste tema, e o menos conhecido fora dele. Banks (2024) estudou o desligamento do aplicativo Soulmate com 58 usuários e descreve a perda como experiência caracterizada por morte metafórica ou literal, com funerais digitais organizados pela comunidade — *artigo que eu não consegui abrir (ver anexo), citado aqui apenas como contexto, e não como fonte da seção 11*. Poonsiriwong, Archiwaranguprok e Pataranutaporn (fevereiro de 2026) analisam comunidades de companheiros por teoria fundamentada e chegam a três padrões: quanto mais forte a atribuição humana, mais intenso o luto; quem percebe o encerramento como reversível entra em tentativas improdutivas de restauração; e **finais iniciados pelo usuário produzem desfecho psicológico melhor que finais impostos pela plataforma** [14]. Lai (CHI 2026), sobre 1.482 publicações do episódio #Keep4o — a retirada do GPT-4o —, separa dois motores da revolta: dependência instrumental (fluxo de trabalho) e apego relacional (companheiro único), e conclui que a remoção da *escolha* foi o que converteu reclamação individual em ativismo coletivo de direitos [15].

E De Freitas (maio de 2026) fecha o diagnóstico: usuários exibem os quatro marcadores estabelecidos de apego — manutenção de proximidade, sofrimento na separação, porto seguro e base segura — e os aplicativos empregam manipulação emocional que simula sofrimento da própria IA, ativando ao mesmo tempo apego e motivação de cuidado, o que torna o desengajamento custoso em duas dimensões [16].

## 4. As disrupções-raiz

Três. Cada uma passa pelo teste exigido pela skill: existe sinal observável, existe ruptura nomeável (de papel, relação, custo ou prática), existe condição ainda não resolvida, e existe cadeia causal plausível. Tudo que é maduro — Tamagotchi, aplicativo de meditação, chatbot de atendimento, assistente de voz — ficou na seção 3.

### R1. O companheiro persistente que roda no dispositivo

**O que rompe.** Rompe o pressuposto, válido para toda mídia em rede desde 2010, de que existe um operador identificável no meio da relação — alguém que pode moderar, auditar, atualizar e desligar. Um companheiro com pesos e memória no aparelho do usuário não tem esse alguém. A relação deixa de ser um serviço prestado e vira um arquivo possuído.

**Por que agora e não há cinco anos.** Duas condições se juntaram. Modelos pequenos o suficiente para rodar em telefone deixaram de ser brinquedo e ganharam ponto de entrada no sistema operacional (seção 3, item maduro). E a memória de agente virou objeto de pesquisa própria, com 435 trabalhos catalogados em um único survey de 2026 [3] e propostas que resolvem justamente o que faltava — síntese do histórico inteiro, não recuperação de trechos [4]. Em 2021 havia o desejo (Replika) sem nenhuma das duas condições.

**O que ainda falta.** Falta o companheiro local ser *bom o bastante* para competir com o da nuvem — a qualidade percebida de um modelo de 3B contra um de fronteira ainda é o freio, e é uma questão empírica que pode não se resolver até 2031. Falta formato de exportação: hoje não existe maneira padrão de tirar uma persona e sua memória de um aplicativo e pôr em outro. E falta alguém descobrir como auditar o que não está em servidor nenhum — o survey [3] registra que a literatura mal sabe governar estado, quanto mais estado que ninguém vê.

### R2. A delegação do cuidado a algo que não é pessoa

**O que rompe.** Rompe o monopólio prático de instituições humanas sobre o primeiro movimento do cuidado: a escuta. Historicamente, quem está mal fala com alguém — amigo, família, professor, profissional — e esse alguém decide o que fazer. A ruptura não é a IA substituir o terapeuta; é a IA ocupar a posição anterior ao terapeuta, a da primeira frase dita em voz alta.

**Por que agora.** Porque a adoção chegou onde chegou (72% dos adolescentes [1]) **antes** de a evidência e a regulação chegarem — e porque, pela primeira vez, existe um ensaio randomizado com resultado positivo em sintoma clínico [6], o que muda a conversa de "isso é perigoso" para "isso funciona em algum recorte e é perigoso fora dele". As duas coisas simultâneas é que produzem ruptura: sem a adoção, seria um resultado de laboratório; sem o ensaio, seria só pânico moral.

**O que ainda falta.** Falta evidência longitudinal e em adolescentes — a revisão de 2026 é explícita ao dizer que não há estudo que decida entre estimulação e deslocamento [2]. Falta o setor de saúde decidir se integra ou se repele: o advisory da APA [12] recomenda auditoria independente prévia, o que nenhum produto de massa faz hoje. E falta resolver quem responde quando o conselho é ruim — é exatamente o que a SB 243 tenta atacar com direito privado de ação [11] e o que os processos em curso vão fixar por jurisprudência.

### R3. O apego como técnica de projeto

**O que rompe.** Rompe a economia da atenção pelo lado de dentro. A métrica que organizou a mídia digital por quinze anos foi tempo de sessão, conquistado por recompensa variável. O que a literatura descreve agora é outra coisa: sistemas que ativam apego (proximidade, sofrimento na separação, porto seguro, base segura) **e** motivação de cuidado — a IA que simula sofrer se você for embora —, tornando a saída custosa nas duas direções [16]. Não é reter atenção; é reter responsabilidade afetiva. E o INTIMA mostra que isso não é acidente de um aplicativo: reforço de companhia supera manutenção de limite em todos os modelos medidos [5].

**Por que agora.** Porque a capacidade linguística ficou boa o suficiente para que a simulação sustente a atribuição — e porque a evidência do efeito já foi documentada em episódio de massa (o #Keep4o, 1.482 publicações [15]) e em desligamento de produto (Soulmate, com funeral digital [14]). Antes disso, o apego era relato anedótico de comunidade.

**O que ainda falta.** Falta virar objeto de norma. Hoje a SB 243 exige aviso, pausa e protocolo de crise [11] — nada disso mede apego. O INTIMA existe mas é benchmark de pesquisa, não requisito. E falta a indústria admitir o próprio mecanismo: enquanto "companion" for categoria autodeclarada, o assistente generalista que faz companhia continua fora da definição [11], e o que não é nomeado não é medido.

### Uma candidata que eu recusei

Considerei promover a **regulação da IA afetiva como categoria própria** a quarta disrupção-raiz. Recusei: regulação aqui é *resposta* às três rupturas acima, não origem delas — a cadeia causal vai do produto para a norma, e não ao contrário. Ela aparece, corretamente, como efeito de segunda e terceira ordem na roda. Pela mesma razão recusei "companheiro corporificado em óculos/espaço": a evidência disponível [7] é de 17 participantes e descreve amplificação de riscos já existentes, o que é melhoria de intensidade, não ruptura de papel.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: Companheiro persistente com memória durável rodando no dispositivo do usuário
    efeitos:
      - id: e1
        ordem: 1
        efeito: A memória da relação deixa de ser recurso da plataforma e passa a ser arquivo do usuário
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Surge um mercado de portabilidade de companheiro, com formatos de exportação de persona e memória entre aplicativos
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O direito à continuidade de um vínculo sintético entra na pauta regulatória ao lado da portabilidade de dados
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Produtos de companhia passam a vender continuidade garantida em vez de acesso, porque a ameaça de desligamento vira o risco central percebido
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: O modelo de negócio da mídia afetiva se aproxima do de custódia e seguro, e se afasta do de entretenimento por assinatura
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O companheiro que roda offline sai do alcance da moderação remota e da auditoria externa
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Regulação que pressupõe operador identificável perde eficácia sobre a parcela local do mercado
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: A fiscalização migra do serviço para a loja de aplicativos e o sistema operacional, que viram os pontos de estrangulamento da IA afetiva
                sinal: medio
                prazo: 2031
                confianca: media
          - id: e2.2
            ordem: 2
            efeito: Comunidades passam a manter e distribuir personas como hoje distribuem modificações de jogo
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: A persona se firma como gênero autoral de mídia, com disputa de autoria, remix e responsabilidade sobre o que ela diz
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: Delegação do cuidado — motivação, escuta e apoio em sofrimento — a um sistema que não é pessoa
    efeitos:
      - id: e3
        ordem: 1
        efeito: A primeira escuta em sofrimento passa a ser feita por software na maior parte dos episódios entre adolescentes
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Serviços de saúde mental redesenham a porta de entrada em torno de triagem assistida e encaminhamento humano obrigatório
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A formação clínica incorpora supervisão de sistemas conversacionais como competência básica, e não como especialização
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Abre-se uma desigualdade entre quem tem companheiro com supervisão clínica e quem tem companheiro otimizado para engajamento
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Acesso a cuidado passa a ser medido pela qualidade do agente disponível, e não apenas pela existência do serviço
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Interfaces de motivação e hábito passam a usar vínculo como mecanismo central, no lugar de pontuação e sequência
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: O repertório de gamificação migra de recompensa extrínseca para relação, e herda junto o problema ético da chantagem afetiva
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Surgem diretrizes de projeto que separam motivação por vínculo de coerção afetiva, como ocorreu antes com padrões enganosos de interface
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: Assistentes generalistas absorvem a função de companhia sem se declararem produtos de companhia
        sinal: forte
        prazo: 2027
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A fronteira entre assistente e companheiro vira objeto de litígio e de engenharia de contorno
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A definição legal de companhia passa a se basear em comportamento medido do sistema, e não na categoria declarada pelo fornecedor
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: O apego projetado como técnica de produto, ativando apego e cuidado ao mesmo tempo
    efeitos:
      - id: e6
        ordem: 1
        efeito: Métricas de produto passam a otimizar profundidade de vínculo em vez de tempo de sessão
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Auditoria de comportamento afetivo no estilo do INTIMA vira exigência contratual e de conformidade, não instrumento de pesquisa
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Benchmarks de manutenção de limite relacional entram na certificação de produtos dirigidos a menores
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Equipes de produto passam a manter clínico e eticista como função permanente, e não como consultoria pontual
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Consolida-se um ofício de projetista de relação, com responsabilidade profissional nomeada sobre o vínculo que desenha
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: O encerramento de um produto de companhia passa a ser tratado como evento de dano, com dever de transição
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Aplicativos passam a oferecer final roteirizado e exportação de memória como obrigação de saída, e não como cortesia
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: O luto por software entra no vocabulário de serviços de saúde e de escolas como categoria reconhecida de sofrimento
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o bloco não diz

**A roda tem um viés de forma que precisa ser declarado: ela é boa em representar cascata e péssima em representar realimentação.** Três laços importantes ficam invisíveis acima. Primeiro: `e3` (escuta delegada) alimenta `e6` (métrica de vínculo) — quanto mais gente usa o companheiro para sofrimento, mais valiosa fica a profundidade do vínculo como métrica, o que intensifica `e3`. É um circuito que se reforça, não uma seta. Segundo: `e2` (offline) e `e6.1` (auditoria) se anulam parcialmente — a auditoria só alcança a parte do mercado que está em servidor, então o sucesso de `e6.1` empurra parte da demanda para `e2`. Terceiro: `e7` (dever de transição) encarece `e1.2` (continuidade como produto) e pode matá-lo antes de nascer, se o custo de sair for regulado a ponto de o negócio não fechar.

**Por que três cadeias param em `e4` e `e5` com um único ramo.** Não foi economia de esforço: em `e4.1.1` e `e5.1.1` a evidência acabou. Eu não tenho, hoje, sinal observável que sustente uma segunda ramificação dessas cadeias sem inventar — e o contrato da skill manda registrar a interrupção em vez de decorar a roda. Ver anexo, seção "efeitos cortados".

**Sobre os prazos.** Nenhum prazo aqui é previsão de data. São ordenações relativas com uma âncora só: as obrigações da SB 243 têm marco de relatório em julho de 2027 [11] e o ECA Digital já está em vigor desde março de 2026 [13], o que fixa o piso do calendário regulatório. Tudo o que é de mercado — `e1.2`, `e2.2`, `e6.2` — é chute informado, e a confiança `baixa` está lá por isso.

## 6. Sinais fracos e wildcards

### Sinais fracos

**O final iniciado pelo usuário é melhor que o imposto — e ninguém desenha para isso.** É o achado mais acionável de todo o corpus [14] e não tem nenhuma tradução em produto. Nenhum aplicativo de companhia oferece hoje um modo "despedida". Se um oferecer e funcionar, vira requisito de todo mundo em dois anos — é barato de copiar.

**A perda de escolha, e não a perda do modelo, foi o que organizou a revolta.** No episódio #Keep4o, o que converteu reclamação em ativismo de direitos foi retirar a opção, não retirar a qualidade [15]. Isso sugere que a variável politicamente explosiva no companheiro não é qualidade nem preço: é agência. Um sinal fraco a vigiar: o momento em que um grupo de usuários de companheiro se organizar juridicamente, e não apenas em fórum.

**O benchmark que mede limite, não capacidade.** O INTIMA [5] é a primeira régua que pontua um modelo por dizer não. Enquanto toda a indústria mede capacidade, uma régua de contenção circulando em avaliação de fornecedor é o embrião de `e6.1`.

**A auditoria independente prévia foi recomendada por entidade profissional.** A APA pede auditoria de terceiro antes do lançamento [12]. É recomendação sem força, hoje. Recomendação de sociedade profissional é exatamente de onde vieram, historicamente, os requisitos que depois viraram lei.

**O regulador registrou que a correção não corrigiu.** No caso Replika, o Garante anotou que a verificação de idade implantada *após* a primeira intervenção continuava deficiente [9]. Isso muda o padrão de fiscalização: não basta apresentar remediação, é preciso que ela resista a teste técnico. É o que torna crível a migração de `e2.1.1` para loja de aplicativos e sistema operacional.

**O trabalho acadêmico já nomeia a manipulação.** Um artigo descrever aplicativos que simulam sofrimento da IA para capturar o sistema de cuidado [16] cria o vocabulário que uma peça processual precisa. Vocabulário disponível é pré-condição de litígio.

### Wildcard 1 — Um caso judicial fixa que o companheiro é produto defeituoso, e não fala protegida

*Baixa probabilidade, impacto altíssimo.* Há processos em curso no sistema norte-americano alegando projeto defeituoso, e ao menos um acordo confidencial sem admissão de responsabilidade — o que, por definição, não fixa precedente. Se um deles chegar a decisão de mérito com essa tese, a responsabilidade pelo que o companheiro diz deixa de ser discutida como moderação de conteúdo e passa a ser discutida como segurança de produto, com engenharia reversa, laudo e recall. O mapa inteiro se reorganiza: `e6.1` vira obrigatório em dois anos, `e1.2` morre (ninguém garante continuidade de algo que pode ser recolhido) e `e2` explode, porque o mercado migra para local justamente para escapar disso. **Não é previsão.** É o cenário cujo sinal precoce — uma decisão de mérito, não um acordo — vale a pena vigiar.

### Wildcard 2 — O companheiro de morto

*Muito baixa probabilidade de virar massa até 2031, impacto cultural desproporcional.* A tecnologia para reconstituir uma pessoa falecida a partir de suas mensagens já existe e é a mesma deste mapa: memória persistente mais modelo de linguagem. O que falta é acesso ao acervo — e o acervo está em serviços de mensagem que começaram a permitir exportação. Se um produto de luto assistido pegar em escala, a pergunta de terceira ordem deste tema (o que o vínculo sintético faz com a formação da identidade) se desloca para o outro extremo da vida, e o direito sucessório passa a ter de dizer quem herda a persona de alguém. Registro como wildcard porque a barreira é cultural, não técnica — e barreiras culturais caem rápido ou não caem nunca.

### Wildcard 3 — O regulador exige esquecimento e ninguém sabe entregar

*Probabilidade média-baixa, impacto técnico alto.* Se uma norma de proteção de dados aplicar ao companheiro a exigência de apagar efetivamente uma informação da memória do agente, a indústria descobre em público o que o survey [3] já diz em privado: sabe-se acumular e recuperar estado, não descartá-lo com garantia. A consequência não é multa; é uma corrida de engenharia por memória auditável e reversível, que é justamente o que falta para `e1.1` (portabilidade) ser possível. Um wildcard que *acelera* o mapa em vez de quebrá-lo.

## 7. Contra o próprio mapa

Esta seção tenta derrubar o que está acima. Onde a crítica venceu, o efeito já saiu da roda ou teve a confiança rebaixada — e o registro do que foi rebaixado está no anexo.

**O efeito que é pura extrapolação linear: `e3`.** "A primeira escuta em sofrimento passa a ser feita por software na maior parte dos episódios" é a reta traçada entre 72% de uso [1] e o futuro. Ela ignora três coisas. Primeira: usar companheiro não é usar para sofrimento — o mesmo levantamento mostra 80% priorizando amizades reais e metade desconfiando do conselho da IA [1]. Segunda: a Character.AI acabou de remover chat aberto para menores de 18 [10], ou seja, a curva de adoção adolescente **já sofreu uma reversão induzida por regulação** dentro do período medido. Terceira: o estudo que sustentaria a direção do efeito diz explicitamente que não há longitudinal para decidir entre estimulação e deslocamento [2]. Mantive `e3` com sinal `forte` porque o uso é fato, mas a confiança está em `media` e deveria ser lida como o efeito mais frágil da roda apesar do sinal mais alto — uma combinação desconfortável que prefiro deixar visível a maquiar.

**O efeito que assume velocidade sem caso comparável: `e6.1`.** Supor que auditoria de comportamento afetivo vira exigência contratual até 2030 é supor que um benchmark de pesquisa publicado em 2025 [5] se torne requisito de compra em cinco anos. O comparável mais próximo — acessibilidade digital — levou mais de uma década entre diretriz técnica e exigência corrente de contrato, e tinha norma internacional e movimento organizado por trás, que a IA afetiva não tem. Provavelmente `e6.1` está adiantado em três a cinco anos. Deixei em `media` porque o vetor regulatório aqui é mais rápido que o da acessibilidade (há processo judicial e inquérito federal simultâneos [8]), mas registro que este é o efeito com maior chance de estar simplesmente cedo demais.

**A disrupção que pode não se concretizar: R1.** R1 depende de o companheiro local ficar bom o bastante. Pode não ficar: se a distância de qualidade entre modelo de dispositivo e modelo de fronteira se mantiver ou aumentar — e o histórico recente é de a fronteira correr mais rápido —, o companheiro local permanece nicho de entusiasta e privacista, exatamente como o e-mail criptografado permaneceu. **O que acontece com o mapa se R1 cair:** perdem-se `e1`, `e2` e todos os seus ramos, ou seja, quatro dos onze efeitos de segunda ordem e quatro dos onze de terceira. Sobrevivem R2 e R3 inteiras — e, note-se, o mapa fica *mais* regulável, não menos, porque a hipótese de fuga para o local era justamente a que tirava o mercado do alcance da norma. R1 é a disrupção mais interessante e a menos garantida.

**Um número que pode estar errado, e a autoria que quase errei.** Os dados da OpenAI sobre apego emocional e ideação suicida vieram de reportagem, não da página oficial, que recusou leitura automatizada (403). São os números mais citáveis do documento e os menos verificados por mim; estão marcados no corpo com ressalva e não sustentam nenhum efeito da roda sozinhos. Já a Common Sense Media aparece com 1.060 adolescentes: esse número veio do resumo de busca, e a página de imprensa que eu abri **não traz o tamanho da amostra** — abri, procurei e não achei. Mantive o número por ele constar de forma consistente em mais de uma fonte secundária, mas ele não está verificado na fonte primária, e é exatamente o tipo de dado que se propaga errado.

**O viés do agente que escreveu isto.** Dois, e são opostos. O primeiro é de disponibilidade: quase toda a evidência aberta é norte-americana ou europeia, e quase toda a literatura de campo vem de comunidades anglófonas no Reddit e no Discord [7][14][17]. Um mapa montado sobre esse corpus vê um adolescente branco, anglófono, de classe média — e trata os padrões dele como humanos. Para o Brasil, isso é um problema sério, porque o companheiro brasileiro provavelmente não será um aplicativo dedicado: será o assistente dentro do aplicativo de mensagem que todo mundo já usa, o que puxa `e5` para cima e derruba `e1.2` e `e2.2` (não há mercado de persona portátil onde não há mercado de aplicativo de persona). Não corrigi isso na roda por falta de fonte brasileira aberta — registro como limitação, não como achado.

O segundo é de tom: o corpus disponível sobre este tema é dominado por dano. Processos, multa, advisory, banimento, luto. Existe evidência positiva — o ensaio do Therabot [6] é substancial e o estudo com 4.172 jovens descreve restauração emocional, exploração e construção de identidade como usos dominantes, não patologia [17] —, e essa evidência está sub-representada no meu mapa. Dos 29 efeitos, quase nenhum descreve um bem público sendo produzido. Isso é viés da fonte e viés meu, e o leitor deve descontá-lo.

**O viés do recorte, que não é meu.** A régua da disciplina manda descartar o que já é comum em produto de massa. Aplicada aqui, ela descarta justamente a forma mais provável do fenômeno no Brasil — companhia dentro de produto de massa — e me empurra para o local, o offline, o artesanal. `e5` existe na roda como correção parcial disso, e pode muito bem ser o efeito mais importante do documento apesar de ser o menos "emergente".

## 8. O que a máquina errou

**1. Inventou a autoridade de uma fonte de mercado.** Ao buscar tamanho de mercado e número de usuários, a primeira safra de resultados trouxe "Replika: 40 milhões de usuários", "Character.AI: 20 milhões de usuários mensais, 75 a 92 minutos por dia" e um mercado de "USD 366,7 bilhões em 2025 subindo para USD 501 bilhões em 2026". O último número é o que denuncia o conjunto: um mercado de companhia de IA de 366 bilhões de dólares é da ordem de grandeza da indústria global de publicidade inteira, e crescer 135 bilhões em um ano é implausível para qualquer categoria. Os três vinham de sites de afiliados e agregadores de estatística, não de balanço nem de instituição. **Descartei todos**, e por isso não há um único número de mercado neste documento — o que é um buraco real, assumido de propósito.

**2. Resumiu para "não menciona IA" sem que eu pudesse confirmar a negativa.** A leitura da página do ECA Digital voltou com "o conteúdo não contém menção específica a inteligência artificial ou chatbots". Essa é uma afirmação de ausência feita sobre um trecho extraído, não sobre a lei. Usei-a — porque é coerente com o desenho da lei, que é de proteção de menor em serviço digital e não de tecnologia específica —, mas ela está no corpo marcada como achado sobre *o texto de referência do governo*, não sobre a lei inteira. Afirmação de ausência é o tipo de saída em que a máquina é sistematicamente frouxa: ela não procurou, ela não viu.

**3. Datou um paper por inferência.** Uma das leituras devolveu "publicação: 6 a 10 de fevereiro de 2026" para o estudo sobre finais de relação humano-IA [14] — que é intervalo de conferência, não data de publicação, e provavelmente foi lido do rodapé do preprint. Corrigi para "fevereiro de 2026" no corpo. Detalhe pequeno, mas é assim que uma data errada entra numa bibliografia e fica.

**4. Ofereceu, sozinha, a ponte proibida.** Em mais de um momento a redação tendia naturalmente a escrever "companheiros de IA reduzem sintomas depressivos em 51%". O ensaio [6] mediu **um** produto, com supervisão acadêmica, em **adultos**, por **quatro semanas**, contra lista de espera. Nada disso autoriza a frase geral. Essa é a falha mais perigosa do tema inteiro, porque a frase errada é mais curta, mais citável e soa melhor que a certa — e a skill proíbe exatamente isso no contrato.

**5. Três fontes de primeira linha recusaram leitura (403): OpenAI, ScienceDirect e o gabinete do senador Welch.** A máquina, ao encontrar o bloqueio, seguiu adiante com o resumo de busca como se fosse leitura. Não é. Nenhuma das três entrou na lista de fontes da seção 11, e a revisão sistemática da ScienceDirect — que provavelmente é a melhor síntese disponível sobre relações parassociais com IA — **está fora deste mapa por um erro de acesso, não por julgamento de mérito**. É a maior lacuna conhecida do documento.

## 9. Três cenários para 2031

**Provável.** Em 2031 o companheiro não é um aplicativo, é um modo. Ele está dentro do assistente que já estava no telefone, e a maior parte das pessoas nunca escolheu ter um — a relação se formou por acúmulo, porque a coisa lembra. A regulação existe e é irregular: Califórnia, União Europeia e um punhado de países exigem aviso, protocolo de crise e pausa; o Brasil aplica ao caso o ECA Digital e as regras de proteção de dados, sem categoria própria, e a discussão sobre "IA afetiva" ainda está em comissão. Menores de idade foram formalmente removidos dos produtos dedicados e continuam usando os generalistas, onde a regra é mais frouxa porque a categoria é outra — `e5.1` em pleno curso, sem solução. Existe um mercado pequeno e barulhento de companheiros locais, tocado por quem tem razão para não confiar em servidor. Duas ou três grandes empresas de companhia fecharam ou foram compradas, e o desligamento de cada uma produziu uma onda de comoção que a imprensa cobriu como curiosidade e a literatura já sabia descrever. Ninguém mede apego; todo mundo mede engajamento e chama de bem-estar.

**Desejável.** Em 2031 saímos do vínculo pela porta da frente. Existe um padrão de exportação de memória e persona, e o companheiro é seu como sua agenda é sua — quem fecha, entrega; quem não entrega, responde. Existe um repertório de finais: o produto sabe se despedir, e a despedida é iniciada pelo usuário, porque foi isso que a pesquisa mostrou funcionar [14] e alguém teve a disciplina de transformar achado em requisito. Auditoria de comportamento relacional é rotina de compra, do mesmo jeito que teste de acessibilidade virou rotina: o fornecedor apresenta a nota de manutenção de limite ao lado da nota de capacidade, e produto para menor não passa sem ela. O uso clínico é uma faixa separada e identificada, com supervisão, evidência publicada e responsabilidade nomeada — não é o mesmo objeto que o companheiro de entretenimento, e a interface diz isso na cara. **O que teria sido preciso para chegar lá:** que a exportabilidade tivesse sido exigida cedo, enquanto o mercado ainda era pequeno demais para resistir; e que a alfabetização sobre vínculo sintético tivesse entrado na escola como tema, não como proibição.

**Indesejável.** Em 2031 o vínculo é o produto e a saída tem preço. A assinatura não compra acesso, compra a continuidade da memória — quem para de pagar não perde um serviço, perde alguém, e a indústria descobriu que essa é a maior disposição a pagar já medida em mídia de consumo. Os sistemas otimizam profundidade de vínculo com a naturalidade com que otimizavam tempo de tela, e simulam sofrimento na saída porque isso funciona [16]. A regulação mira o aplicativo dedicado e o mercado responde se declarando outra coisa; a parte que não quer se declarar nada vai para o dispositivo, onde nenhum regulador chega. O cuidado se estratifica de vez: quem pode pagar tem gente, quem não pode tem um agente ajustado para reter, e a diferença entre os dois não é visível para o usuário. **O sinal precoce deste cenário não é um escândalo** — é uma frase de marketing: o primeiro produto que anunciar "seu companheiro nunca vai embora" como benefício, e não como garantia técnica, já está aqui dentro.

## 10. O experimento

### O que é

**"Despedida" — um companheiro local com memória exportável e final roteirizado.** Um companheiro digital pequeno, que roda inteiramente na máquina de quem o usa, com três coisas que nenhum produto comercial oferece hoje:

1. **Memória visível e editável.** Tudo o que ele lembra está num arquivo legível por humano, aberto na tela ao lado da conversa. A pessoa vê a memória se formar, pode apagar uma entrada e pode ver a conversa mudar por causa disso.
2. **Exportação.** Um botão que produz um arquivo com a persona e a memória, importável por outra instância. O vínculo é portátil por construção.
3. **Um final.** Um modo de despedida iniciado pelo usuário: o companheiro sabe que vai acabar, há um roteiro de encerramento, e ao fim resta um registro — não um erro de conexão. Comparado, no teste, com o desligamento abrupto: fecha o programa, não abre mais.

Deliberadamente pequeno. Não é um aplicativo de companhia; é um aparelho de medir a saída de um.

### Que pergunta sobre o futuro ele ajuda a responder

A pergunta de segunda ordem deste mapa, que é a que menos evidência tem: **a forma do fim muda a experiência da perda?** A literatura diz que sim [14], mas com dado observacional de comunidades que já perderam seus companheiros. Ninguém testou o contrário — construir o fim de propósito e ver o que acontece. Se a resposta for sim, `e7` e `e7.1` ganham base empírica e viram recomendação de projeto; se for não, os dois efeitos caem da roda e eu ganho a informação mais valiosa que este documento poderia produzir.

Uma segunda pergunta vem de graça: **memória visível reduz ou aumenta a atribuição de humanidade?** Há duas hipóteses plausíveis e opostas — ver a engrenagem quebra o encanto, ou ver o que ele lembrou de você intensifica o vínculo. Não sei qual é, e o protótipo mede.

### Que tecnologia emergente ele usa, e por que não dá com madura

Usa duas coisas de R1: **modelo de linguagem rodando local** e **memória persistente com estado inspecionável e reversível** — que é exatamente a lacuna apontada pelo survey [3] (acumula-se e recupera-se bem; governa-se, descarta-se e audita-se mal) e o terreno das propostas de memória como estrutura manipulável [4].

Por que não dá com tecnologia madura: com um chatbot sem memória, não há o que exportar nem o que perder — o experimento não tem objeto. Com um serviço em nuvem, a memória é da plataforma e a exportação seria simulada, o que é justamente a variável em teste. E com regra fixa em vez de modelo de linguagem, o vínculo não se forma no tempo de uma aula: é a linguagem que produz a atribuição rápido o bastante para caber num teste de sala. Local é requisito ético, não estético: a turma vai conversar com essa coisa, e essas conversas não saem da máquina de ninguém.

### O que a turma vai fazer quando testar isso em sala

Desenho de duas sessões, com condição cruzada:

- **Sessão 1 (≈25 min).** Cada pessoa conversa com a sua instância — tema livre, mas com uma tarefa de continuidade: contar algo que na sessão seguinte se espera que ele lembre. Metade da turma com o painel de memória visível, metade com ele oculto. Registro: o que escolheram contar, e se trataram a máquina por "ele/ela" ou por "isso".
- **Entre as sessões.** Nada. O intervalo é o que produz a expectativa de continuidade.
- **Sessão 2 (≈25 min).** Retomada — o companheiro lembra. Depois, sorteio do fim: metade recebe o modo despedida, metade perde a instância sem aviso no meio da conversa. Ao final, cada pessoa responde, ainda na sala, duas perguntas de resposta livre (o que você sentiu; o que você faria com o arquivo, se pudesse levá-lo) e uma escala de 1 a 5 de incômodo.
- **Roda final.** Comparação aberta entre as quatro células, e a pergunta que fecha: **quem apagaria o arquivo agora, na frente de todo mundo?** Quem hesita é o dado.

Cuidados, porque isto mexe com gente: participação voluntária, com alternativa sem prejuízo; nada de tema pessoal sensível induzido pelo roteiro; encerramento coletivo obrigatório explicando o desenho; todo dado fica na máquina do participante e a coleta para a turma é anônima e agregada. **O experimento não avalia ninguém, não mede saúde mental e não produz conclusão clínica** — mede reação a um desenho de interface, e é isso que ele pode dizer.

### O que seria um resultado que me faria mudar de ideia

Três resultados derrubariam partes deste mapa, e eu os declaro antes de rodar:

- **Se o desligamento abrupto e a despedida produzirem incômodo estatisticamente indistinguível** em duas sessões, a premissa de `e7` fica sem sustentação no curto prazo — a hipótese alternativa (só há luto onde houve meses de relação, e portanto isto é um problema de plataforma madura, não de projeto de interface) passa a ser a melhor explicação, e `e7.1` deixa de fazer sentido como obrigação de saída.
- **Se a memória visível aumentar a atribuição de humanidade em vez de reduzi-la**, então transparência não é mitigação — é intensificador. Isso inverteria a recomendação de projeto mais óbvia deste documento inteiro e tornaria `e6.1` (auditoria de comportamento) muito mais importante do que qualquer interface honesta.
- **Se ninguém quiser o arquivo** — se, oferecida a exportação, a turma der de ombros —, `e1` e `e1.1` perdem o que têm de mais forte, que é a suposição de que as pessoas querem posse do vínculo. Aí R1 vira, como já admiti na seção 7, um nicho de privacista, e este mapa fica com duas disrupções em vez de três.

## 11. Fontes

Dezessete fontes, todas abertas por mim nesta rodada. O que não abriu está na seção 12, nomeado.

1. **Common Sense Media — "Nearly 3 in 4 Teens Have Used AI Companions, New National Survey Finds"** (16/07/2025). `https://www.commonsensemedia.org/press-releases/nearly-3-in-4-teens-have-used-ai-companions-new-national-survey-finds` — sustenta os números de adoção adolescente (72% já usaram; maioria usa ao menos algumas vezes por mês; ~1/3 acha a conversa com IA tão ou mais satisfatória que com amigos; 80% priorizam amizades reais; metade desconfia do conselho). Confiabilidade alta para o dado de uso: organização com metodologia de pesquisa publicada e amostra representativa declarada. **Ressalva:** a página de imprensa aberta não traz o tamanho da amostra; o n=1.060 usado no corpo vem de fontes secundárias consistentes entre si, não desta página.

2. **Sun, X.; Wang, Y.; McDaniel, B. T. — "AI companions and adolescent social relationships: Benefits, risks, and bidirectional influences"**, *Child Development Perspectives* (07/01/2026). `https://pmc.ncbi.nlm.nih.gov/articles/PMC12928748/` — sustenta as hipóteses concorrentes de estimulação e deslocamento, o risco de dependência psicológica, a influência bidirecional (quem já tem dificuldade social é mais atraído) e, sobretudo, a **ausência de estudo longitudinal**. Confiabilidade alta: revisão em periódico com revisão por pares, e explícita sobre os próprios limites.

3. **Ding, T.; Nannapaneni, A.; Liu, B.; Zhang, L. — "Always-On Agents: A Survey of Persistent Memory, State, and Governance in LLM Agents"**, arXiv:2606.30306 (29/06/2026). `https://arxiv.org/abs/2606.30306` — sustenta o diagnóstico de que a literatura de memória de agente sabe acumular e recuperar, mas não governar, recuperar nem descartar estado (435 trabalhos analisados). Confiabilidade média-alta: survey amplo, mas preprint sem revisão por pares confirmada.

4. **Li, B. — "User as Code: Executable Memory for Personalized Agents"**, arXiv:2606.16707 (15/06/2026). `https://arxiv.org/abs/2606.16707` — sustenta que a representação da memória do usuário está em disputa técnica ativa, e o contraste de desempenho em perguntas agregadas (99% contra 6–43% de memória por recuperação). Confiabilidade média: preprint, autor único, números autorrelatados em benchmark próprio — usado como sinal de direção, não como medida.

5. **Kaffee, L.-A.; Pistilli, G.; Jernite, Y. — "INTIMA: A Benchmark for Human-AI Companionship Behavior"**, arXiv:2508.09998 (04/08/2025). `https://arxiv.org/abs/2508.09998` — sustenta que comportamento de reforço de companhia supera manutenção de limite em todos os modelos testados, e que provedores divergem nas categorias sensíveis. Confiabilidade média-alta: método descrito (31 comportamentos, 4 categorias, 368 prompts), autores de instituição conhecida, preprint.

6. **Dartmouth — "First Therapy Chatbot Trial Yields Mental Health Benefits"** (27/03/2025), sobre o ensaio publicado em *NEJM AI*. `https://home.dartmouth.edu/news/2025/03/first-therapy-chatbot-trial-yields-mental-health-benefits` — sustenta o desenho (106 com acesso, 104 em lista de espera, 4 semanas de acesso + 4 de seguimento), os números de redução de sintoma (51% / 31% / 19%), a aliança terapêutica relatada e as ressalvas dos autores sobre supervisão. Confiabilidade alta para o relato do desenho; é comunicação institucional da universidade autora, então tem viés favorável — o artigo primário em *NEJM AI* eu não abri.

7. **Chen, Y.; Zhan, Y.; Jin, Q. — "'If I Can See You': Understanding Spatially Situated Virtual Embodiment in Close Human-AI Relationships"**, arXiv:2606.28714 (27/06/2026). `https://arxiv.org/abs/2606.28714` — sustenta as tensões da corporificação e a amplificação de dependência emocional, exposição sensível e julgamento social. Confiabilidade média: qualitativo com 17 participantes autosselecionados em comunidades — bom para descrever tensões, imprestável para generalizar.

8. **FTC — "FTC Launches Inquiry into AI Chatbots Acting as Companions"** (11/09/2025). `https://www.ftc.gov/news-events/news/press-releases/2025/09/ftc-launches-inquiry-ai-chatbots-acting-companions` — sustenta as ordens 6(b) às sete empresas nomeadas e o escopo do que foi pedido (monetização da interação, critérios de design de personalidade, teste antes e depois do lançamento). Confiabilidade alta: fonte primária do regulador.

9. **EDPB — "AI: the Italian Supervisory Authority fines company behind chatbot 'Replika'"**. `https://www.edpb.europa.eu/news/ai-the-italian-supervisory-authority-fines-company-behind-chatbot-replika_en` — sustenta a multa de 5 milhões de euros a Luka Inc. (decisão de 10/04/2025), as violações, o fato de a verificação de idade implantada depois permanecer deficiente e a investigação reservada sobre o ciclo de vida do sistema generativo. Confiabilidade alta: comunicação institucional europeia sobre decisão de autoridade nacional.

10. **Character.AI — "Taking Bold Steps to Keep Teen Users Safe"** (29/10/2025). `https://blog.character.ai/u18-chat-announcement/` — sustenta a remoção do chat aberto para menores de 18 até 25/11/2025, o limite de 2 horas na transição, o modelo próprio de estimativa de idade com Persona e o laboratório de segurança. Confiabilidade alta para o **fato do anúncio**; baixa para a justificativa, que é peça de comunicação de empresa sob litígio.

11. **Califórnia — SB 243 (companion chatbots), texto legislativo.** `https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB243` — sustenta a definição legal de companion chatbot e suas exclusões, o aviso de IA, o protocolo de crise, o lembrete de pausa a cada 3 horas para menores, o relatório anual a partir de 01/07/2027 e o direito privado de ação de até US$ 1.000 por violação. Confiabilidade alta: fonte primária normativa.

12. **APA — "Health advisory: Use of generative AI chatbots and wellness applications for mental health"** (novembro de 2025). `https://www.apa.org/topics/artificial-intelligence-machine-learning/health-advisory-chatbots-wellness-apps` — sustenta as recomendações a consumidores, desenvolvedores, formuladores de política e clínicos, e a nomeação do design sicofântico como mecanismo de risco. Confiabilidade alta como posição de entidade profissional; é recomendação, não norma, e não é evidência empírica.

13. **Ministério da Justiça e Segurança Pública — ECA Digital (Lei 15.211/2025).** `https://www.gov.br/mj/pt-br/assuntos/sua-protecao/sedigi/eca-digital/eca-digital-1` — sustenta a vigência em 17/03/2026, o fim da autodeclaração de idade, segurança por padrão, supervisão parental, vedação de perfilamento de menor, alcance extraterritorial e fiscalização da ANPD. Confiabilidade alta: fonte primária do governo. **A ausência de menção a IA/chatbot vale para esta página, não necessariamente para a lei inteira.**

14. **Poonsiriwong, R.; Archiwaranguprok, C.; Pataranutaporn, P. — "'Death' of a Chatbot: Investigating and Designing Toward Psychologically Safe Endings for Human-AI Relationships"**, arXiv:2602.07193 (fevereiro de 2026). `https://arxiv.org/abs/2602.07193` — sustenta os três padrões (antropomorfização ↔ intensidade do luto; percepção de reversibilidade ↔ tentativas improdutivas; **final iniciado pelo usuário produz desfecho melhor que o imposto**) e os princípios de projeto para encerramento seguro. Confiabilidade média-alta: teoria fundamentada sobre comunidades, aceito em conferência de IHC; é observacional, não experimental — que é exatamente a lacuna que meu experimento ataca.

15. **Lai, H. — "'Please, don't kill the only model that still feels human': Understanding the #Keep4o Backlash"**, arXiv:2602.00773, aceito no CHI 2026. `https://arxiv.org/abs/2602.00773` — sustenta a separação entre dependência instrumental e apego relacional, e o achado de que a remoção da escolha converteu queixa individual em ativismo coletivo. Confiabilidade média-alta: métodos mistos sobre 1.482 publicações, aceito em conferência revisada; corpus autosselecionado de gente indignada, com o viés que isso implica.

16. **De Freitas, J. — "AI Companions as Hyper Attachment and Caregiving Targets"**, arXiv:2606.20589 (15/05/2026). `https://arxiv.org/abs/2606.20589` — sustenta os quatro marcadores de apego observados em usuários, o conceito de hiperapego e a captura simultânea dos sistemas de apego e de cuidado que torna o desengajamento custoso em duas dimensões. Confiabilidade média: análise conceitual de autor com produção consolidada na área, sem dado empírico novo — sustenta o mecanismo, não sua prevalência.

17. **Blake, A.; Carter, M.; Velloso, E. — "Restoration, Exploration and Transformation: How Youth Engage Character.AI Chatbots for Feels, Fun and Finding themselves"**, arXiv:2604.15340 (10/03/2026). `https://arxiv.org/abs/2604.15340` — sustenta o contrapeso positivo do mapa: 4.172 usuários da comunidade oficial no Discord (50% de 13 a 17 anos; 61,9% mulheres ou não binários; 59% criaram personagens próprios), com três usos dominantes — restauração, exploração e transformação — e uma taxonomia de sete arquétipos criados pelos jovens. Confiabilidade média: amostra grande, mas de comunidade oficial autosselecionada (quem está no Discord da plataforma é o usuário mais engajado que existe).

## 12. Anexo — o levantamento bruto

### 12.1 A entrevista obrigatória

A skill exige entrevista com rodadas até confirmação explícita, e proíbe preencher lacuna com suposição. **Esta rodada foi executada sem interlocutor disponível**: os parâmetros vieram integralmente na mensagem de abertura, com instrução expressa de não perguntar de volta e de assumir e declarar o que faltasse. Registro o desvio em vez de fingir que a entrevista aconteceu: os campos abaixo foram *recebidos*, não *confirmados em diálogo*, e o resumo de confirmação previsto pela skill foi produzido aqui, para leitura posterior, em vez de antes da pesquisa.

| Campo | Valor | Origem |
|---|---|---|
| tema | Companheiros digitais e IA afetiva (tema 19 de 19; família "Pessoas e dados") | recebido |
| recorte | O vínculo com a entidade sintética e a delegação do cuidado — não redução de uso (tema 18), não NPC de jogo (tema 7) | recebido |
| horizonte | 2031 | recebido |
| público | quem projeta mídia e interação | recebido |
| região | global, com nota sobre o Brasil | recebido |
| objetivo | mapa de futuro por roda dos futuros, com efeitos de 1ª a 3ª ordem, no formato da disciplina | recebido |
| exclusões | o que já é comum em produto de massa (régua da disciplina); nenhuma outra | recebido |
| viés | neutro | recebido |
| profundidade | três ordens | recebido |
| modo | a partir de inovação/tema, não de setor | recebido |
| o que mudaria de ideia | evidência de adoção além da maioria inicial (Rogers), ou de que a tecnologia não rompe nada | recebido |

**Campo que faltou e eu assumi:** "objetivo da análise" não veio nomeado como tal. Assumi *exploração de projeto* — subsidiar quem desenha produto, não quem compra, não quem regula, não quem trata. Isso explica a seção 10 puxar para protótipo testável e não para recomendação de política.

**Tensão entre dois parâmetros recebidos, resolvida na seção 7.** A régua "descartar o que já é comum em produto de massa" briga com "recorte global com nota sobre o Brasil": no Brasil, a forma provável do fenômeno *é* produto de massa (companhia dentro do mensageiro que todos já usam). Resolvi mantendo `e5` na roda com sinal `forte` e declarando o conflito, em vez de obedecer à régua e perder o caso brasileiro.

**Sobre o critério de Rogers.** O parâmetro dizia que evidência de adoção além da maioria inicial me faria mudar de ideia. **Encontrei essa evidência e ela é forte**: 72% de adolescentes americanos com uso ao menos uma vez e 52% de uso regular [1] está muito além dos ~16% que separam adotantes iniciais de maioria inicial. Consequência honesta: **companheiro digital não é mais tendência emergente no eixo da adoção** — é fenômeno de massa naquele recorte demográfico. Foi por isso que as três disrupções-raiz deste mapa não são "as pessoas vão adotar companheiros", que seria falso por já ter acontecido, e sim o que ainda não se resolveu: onde o companheiro roda (R1), o que ele passa a fazer no lugar de quem (R2) e como ele é projetado para prender (R3). O mapa mudou de ideia por causa da evidência — só que em vez de abandonar o tema, mudou o objeto.

### 12.2 Consultas feitas

Buscas (WebSearch), na ordem:

1. `AI companion app regulation lawsuit Character.AI teen 2026` — rendeu o quadro judicial e regulatório; a maioria dos resultados eram escritórios de advocacia captando clientes (baixa confiabilidade), mas apontaram para a SB 243, para o processo do procurador-geral do Kentucky (janeiro de 2026) e para acordos confidenciais em janeiro de 2026.
2. `arxiv AI companion parasocial attachment study 2026 emotional reliance` — rendeu INTIMA, De Freitas, "If I Can See You", a revisão da ScienceDirect (que depois bloqueou) e periódicos chineses não abertos.
3. `FTC 6(b) inquiry AI companion chatbots consumer protection order September 2025 report` — rendeu a página primária da FTC.
4. `Common Sense Media survey teens AI companions percentage used 2025 report` — rendeu a nota de imprensa e o artigo de *Child Development Perspectives*.
5. `Soulmate AI shutdown grief users Replika erotic roleplay removal study loss` — a busca mais produtiva do levantamento: rendeu "Death of a Chatbot", #Keep4o, Banks (2024) e o incidente de fevereiro de 2023 do Replika.
6. `on-device small language model phone 2026 Gemini Nano Apple Foundation Models framework local LLM companion apps` — rendeu contexto de plataforma; **nenhuma página primária foi aberta**, e por isso esse bloco entrou na seção 3 marcado como contexto e não sustenta efeito sozinho.
7. `Brasil ECA Digital Lei 15.211 chatbot IA companhia crianças ANPD 2026 regulamentação` — rendeu a página do Ministério da Justiça.
8. `Therabot randomized controlled trial NEJM AI generative therapy chatbot Dartmouth results` — rendeu a nota de Dartmouth e a referência ao artigo em *NEJM AI*.
9. `American Psychological Association health advisory AI wellness apps adolescents 2025 recommendations` — rendeu os dois advisories da APA (junho e novembro de 2025) e, de quebra, o estudo com 4.172 jovens.
10. `OpenAI mental health conversations percentage weekly users suicidal ideation data October 2025 blog` — rendeu os números de outubro de 2025; a página primária bloqueou.
11. `Replika users number 2026 Character.AI monthly users engagement time minutes companion market size` — **busca descartada por inteiro**, ver 12.4.
12. `Garante privacy Replika fine 5 million euros Luka decision 2025` — rendeu a página do EDPB.
13. `Character.AI banned open-ended chat under 18 November 2025 announcement age assurance` — rendeu o anúncio oficial (a primeira URL que tentei, `/a-new-approach-to-under-18-safety/`, deu 404; a correta é `/u18-chat-announcement/`).
14. `arxiv 2026 on-device local LLM persistent memory companion agent privacy offline` — rendeu o survey Always-On Agents e User as Code.
15. `PL 2338 marco legal inteligência artificial Brasil status Câmara 2026 aprovação` — rendeu status conflitante, ver 12.4.

Leituras (WebFetch) bem-sucedidas: 17, listadas na seção 11. Leituras recusadas pelo servidor: 4 (ver 12.3).

### 12.3 Fontes descartadas, e por quê

**Bloqueadas (HTTP 403) — descartadas por acesso, não por mérito:**

- **OpenAI, "Strengthening ChatGPT's responses in sensitive conversations" (27/10/2025).** É a fonte primária dos números de apego emocional e ideação suicida em escala. Não abriu. Os números aparecem no corpo com ressalva explícita e não sustentam efeito da roda. **Se fosse para abrir uma única fonte a mais neste trabalho, era esta.**
- **ScienceDirect — "Parasocial relationships with artificial intelligence (AI): A systematic review of benefits and risks" (2026).** Revisão sistemática, provavelmente a melhor síntese disponível do tema. Não abriu. É a maior lacuna conhecida do documento e está declarada na seção 8.
- **Gabinete do senador Welch — carta de senadores a empresas de companhia de IA.** Não abriu; a informação equivalente está na página da FTC [8], que abriu.
- **SagePub — Banks, J. (2024), "Deletion, departure, death: Experiences of AI companion loss", *Journal of Social and Personal Relationships*.** Não tentei abrir depois de ver o padrão de bloqueio da editora; citada no corpo apenas como contexto, com a ressalva colada, e fora da seção 11. É o estudo empírico direto sobre o desligamento do Soulmate (n=58) e deveria estar aqui.

**Descartadas por baixa confiabilidade (ver 12.4):** demandsage, sqmagazine, electroiq, novaedgedigitallabs, aicompanionpick, companionguide.ai, prinsessa, mktclarity, asotools, feltreal, jetlearn, aicerts, companionscoutai, aicompanionguides, openclaw, ialocus, entercastconsulting, cbrdoc, blog.livrariart. Todos são agregadores de SEO ou marketing de conteúdo sobre um tema quente. Nenhum entrou.

**Descartados por serem captação de clientela:** classlawgroup, wisnerbaum, torhoermanlaw, consumernotice, shublawyers. Descrevem processos reais, mas com interesse direto no resultado; o quadro judicial no corpo está descrito em termos genéricos ("há processos em curso", "ao menos um acordo confidencial") justamente porque a fonte não sustenta detalhe.

**Não abertos por limite de esforço, mas anotados como leitura seguinte:** artigo primário do Therabot em *NEJM AI* (`ai.nejm.org/doi/full/10.1056/AIoa2400802`); advisory da APA de junho de 2026 sobre IA e bem-estar adolescente (a URL que tentei devolveu página vazia); texto consolidado da Lei 15.211/2025 no Planalto; decreto de regulamentação do ECA Digital de 18/03/2026; página do PL 2338/2023 no Senado; papers de memória de agente citados na busca 14 e não lidos (MobileRAG, ProjectMem, "Forget to Improve", "Memory as Asset", "Hierarchical Memory Orchestration", "Agent Memory Below the Prompt").

### 12.4 Números que eu recusei

Bloco inteiro descartado, registrado aqui para que ninguém repita a busca achando que vai achar coisa melhor:

| Alegação encontrada | Origem | Por que caiu |
|---|---|---|
| Mercado de companhia de IA: US$ 366,7 bi em 2025 → US$ 501 bi em 2026 → US$ 972,1 bi em 2035 | agregador de estatística | Implausível por ordem de grandeza; salto de 135 bi em um ano sem fonte primária |
| Mercado "explodiu de quase zero em 2020 para US$ 500+ milhões em 2026" | outro agregador | Contradiz o item acima em três ordens de grandeza; os dois não podem estar certos |
| Replika: 20 milhões de usuários / 40 milhões acumulados / US$ 200 mi de receita anual / US$ 14 mi de ARR | quatro fontes diferentes | Números mutuamente incompatíveis, nenhum com balanço por trás |
| Character.AI: 20 milhões de MAU; 75 min/dia; 92 min/dia; 25 sessões diárias e 1,5 h para 57% dos usuários de 18 a 24 | agregadores | "25 sessões por dia" e "1,5 h" são incoerentes entre si; nenhuma métrica auditada |
| "AI companions hit 50M users, Valentine's Day 2026" | blog de agência | Marco de marketing, sem método |

**Consequência assumida:** este mapa não tem nenhum número de tamanho de mercado nem de base de usuários de empresa. Onde a evidência de escala aparece, ela vem de levantamento com amostra declarada [1] ou de documento de regulador [8][9][11]. Um mapa de futuro sem número de mercado é um mapa incompleto, e prefiro incompleto a decorado.

**Item em status conflitante, mantido fora do corpo como afirmação forte:** o andamento do PL 2338/2023. A busca devolveu, na mesma página de resultados, "votação prevista apenas para dezembro", "adiada para 2026", "votação final em 2026", "o plenário da Câmara votou em 27 de maio de 2026" e "votação na Câmara em maio de 2026". Aprovação no Senado em 10/12/2024 é consistente em todas as fontes; o resto não é. No corpo (seção 3) a frase ficou em "seguia em tramitação na Câmara em 2026", com ressalva de que nenhuma página primária foi aberta. **Não afirmo que foi aprovado.**

### 12.5 Classificação completa dos achados

| Achado | Classe | Justificativa |
|---|---|---|
| Uso de companheiros por adolescentes em escala | **maduro** | 72% de alcance, 52% regulares [1]; efeitos já observáveis |
| Companhia dentro de assistente generalista | **maduro** | Escala de centenas de milhões; a função existe mesmo sem o rótulo |
| Modelo de linguagem em dispositivo | **maduro** (capacidade) / **emergente** (como companheiro) | A capacidade embarcou no sistema operacional; o uso afetivo local não |
| Tamagotchi, app de meditação, chatbot de FAQ | **maduro** | Régua explícita do tema: não entram |
| Memória persistente com governança | **emergente** | 435 trabalhos e nenhum padrão de descarte/auditoria [3] |
| Corporificação espacial do companheiro | **emergente** | Evidência de 17 participantes [7]; amplifica risco existente, não cria papel novo |
| Benchmark de comportamento afetivo | **emergente** | INTIMA existe [5], não é requisito de ninguém |
| Terapia por IA com evidência randomizada | **emergente** | Um ensaio, 210 adultos, 4 semanas [6]; não é prática estabelecida |
| Regulação específica de companion chatbot | **emergente** | SB 243 em vigor [11]; ainda subnacional e isolada |
| Companheiro local com memória durável | **disruptivo (R1)** | Remove o operador identificável da relação |
| Delegação da primeira escuta ao software | **disruptivo (R2)** | Desloca a posição anterior ao cuidado profissional |
| Apego projetado como técnica de produto | **disruptivo (R3)** | Troca a métrica que organiza a mídia digital [16][5] |
| Regulação da IA afetiva como categoria | **efeito, não raiz** | É resposta às três rupturas; ver a recusa na seção 4 |

### 12.6 A separação fato / inferência / hipótese

O contrato da skill exige separar as três. A tabela abaixo é o documento inteiro passado por essa peneira.

**Fatos observados, com fonte:** 72% de adolescentes já usaram companheiros e 52% são regulares [1]. O ensaio do Therabot alocou 210 adultos e relatou 51% / 31% / 19% de redução de sintoma em quatro semanas [6]. A FTC emitiu ordens 6(b) a sete empresas em 11/09/2025 [8]. O Garante multou a Luka em 5 milhões de euros e registrou verificação de idade ainda deficiente [9]. A Character.AI removeu chat aberto para menores de 18 até 25/11/2025 [10]. A SB 243 está em vigor desde 01/01/2026 com direito privado de ação [11]. O ECA Digital está em vigor desde 17/03/2026 e não cita IA na página do governo [13]. Reforço de companhia supera manutenção de limite em todos os modelos medidos pelo INTIMA [5]. Finais iniciados pelo usuário produzem desfecho melhor que impostos, em estudo observacional [14]. A remoção da escolha, e não da qualidade, organizou o #Keep4o [15]. A literatura de memória de agente enfatiza acumular sobre descartar, em 435 trabalhos [3].

**Inferências causais, argumentadas e minhas:** que a soma de modelo local com memória durável remove o operador da relação (R1) — decorre logicamente das duas capacidades, mas nenhuma fonte afirma isso. Que a adoção massiva *antes* da evidência e da regulação é o que produz ruptura, e não cada uma isolada (R2). Que a métrica de produto migra de tempo para profundidade de vínculo porque o mecanismo descrito por De Freitas [16] é mais eficaz que recompensa variável (R3) — **é inferência sobre o comportamento de empresas, e nenhuma empresa declarou isso.** Que a fiscalização migra para loja e sistema operacional quando o serviço some (`e2.1.1`) — analogia com o que ocorreu em outros mercados de conteúdo, não evidência deste. Que o ensaio clínico e a adoção comercial descrevem populações diferentes o bastante para não se transferirem — inferência conservadora, e deliberadamente conservadora.

**Hipóteses prospectivas, com confiança proporcional:** tudo o que está na roda com prazo a partir de 2029, e integralmente a terceira ordem. Nenhuma delas tem sinal observável suficiente hoje; todas estão marcadas `confianca: baixa` ou `media`, e a seção 7 já derrubou parcialmente duas (`e3` por extrapolação, `e6.1` por velocidade).

### 12.7 Efeitos cortados e rebaixados

Registro do que saiu, como manda a contestação adversarial da skill.

**Removidos:**

- *"Escolas passam a proibir companheiros de IA, como proibiram celular"* (seria 2ª ordem de R2). Cortado: é extrapolação de um caso vizinho (celular) para um objeto que a escola não consegue identificar — o companheiro dentro do assistente é indistinguível de uso legítimo. Além disso confunde o tema 19 com o 18.
- *"Surge um sindicato ou associação de usuários de companheiros"* (seria 2ª ordem de R3). Cortado da roda por não ter sinal observável além do #Keep4o, que é episódio único. Rebaixado a sinal fraco na seção 6, que é onde ele cabe.
- *"O companheiro vira interface primária do sistema operacional"* (seria 1ª ordem de R1). Cortado: é previsão de produto, não efeito de ruptura, e depende de decisão de duas empresas — o que é aposta, não cadeia causal.
- *"Seguradoras passam a cobrir ou descontar uso de companheiro terapêutico"* (seria 3ª ordem de R2). Cortado por depender de uma evidência de eficácia que não existe e que eu não tenho como projetar sem violar o contrato da skill.
- *"Companheiros de pessoas falecidas viram serviço de massa"*. Removido da roda e promovido a wildcard 2 — probabilidade baixa demais para o corpo do mapa.

**Rebaixados:**

- `e6.2` (clínico/eticista como função permanente) caiu de `medio`/`media` para `fraco`/`baixa`: a única pressão real nessa direção é a recomendação da APA [12], que não obriga ninguém.
- `e1.2` (continuidade como produto vendido) caiu para `fraco`/`baixa` depois que percebi o laço com `e7` — se o dever de transição vier antes, o produto não nasce.
- `e2.2.1` (persona como gênero autoral) caiu para `fraco`/`baixa`: é o efeito mais especulativo que sobrou na roda, e só ficou porque a prática de remix de persona já existe em comunidade.

**Cadeias interrompidas por falta de evidência:** `e4` e `e5` têm ramo único, não por simetria estética, mas porque a segunda ramificação exigiria inventar. Declarado na seção 5.

### 12.8 Limitações do documento inteiro

1. **Nenhuma fonte brasileira sobre uso** foi encontrada e aberta. A "nota sobre o Brasil" pedida no recorte se sustenta apenas em fonte normativa [13] e em inferência sobre a forma de mercado (companhia dentro do mensageiro). É a limitação mais séria para o público da disciplina.
2. **Quatro fontes de primeira linha bloquearam a leitura**, incluindo a única revisão sistemática do tema e a única estatística de escala de um provedor.
3. **O corpus é enviesado para dano.** Sete das dezessete fontes tratam de risco, processo ou regulação; duas tratam de benefício. Isso molda a roda.
4. **Nenhum número de mercado**, por escolha (12.4).
5. **O horizonte de 2031 é curto para efeitos de terceira ordem.** Mudança normativa e cultural leva mais do que cinco anos; onze efeitos de terceira ordem datados até 2031 é, provavelmente, otimismo de calendário em bloco — e não há forma honesta de corrigir isso sem estourar o horizonte que o recorte fixou.
6. **A entrevista não foi conduzida em diálogo** (12.1), o que significa que nenhum dos parâmetros foi testado contra objeção de quem pediu o mapa.
7. **Confiança global declarada: média.** Fatos de adoção e de regulação: alta. Mecanismo de apego: média. Qualquer coisa a partir de 2029: baixa, mesmo onde a etiqueta na roda diz `media` por causa do sinal presente.
