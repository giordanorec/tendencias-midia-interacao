---
tema: Bem-estar digital e design de fricção
slug: bem-estar-digital-design-de-friccao
autor_login: alpa2
zona_de_interesse: midia e interacao
data: 2026-09-21
horizonte: 2035
publico: null
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 7
efeitos_ordem_3: 7
tecnologias_citadas: [rolagem infinita e autoplay, recomendadores personalizados, pausa de abertura de app (one sec), APIs de sinal de idade (Apple Declared Age Range e Google Play Age Signals), chatbots de companhia, intervencoes adaptativas just-in-time (JITAI), sensoriamento por smartwatch, LLM multimodal para analise de sessoes de uso]
fontes: 28
confianca: media
experimento: Um app de duas semanas que compara uma pausa estatica de 6 segundos com um pedido de intencao no inicio da sessao seguido de aviso quando o feed foge dessa intencao, medindo a distancia entre o pretendido e o realizado.
skill_usada: futurizacao-alpa2
publico_ok: false
---

## 1. Resumo

Este mapa parte da tese de que, depois de duas décadas otimizando engajamento, o design passou a tratar a fricção como valor. A análise separa o que já é maduro (temporizadores, painéis de tempo de tela, pausas estáticas antes de abrir um app) do que ainda está emergindo, e encontra três disrupções-raiz para 2035, com recorte global e viés neutro:

1. **O desenho da interface vira objeto de dever regulatório e de responsabilidade civil.** Em 2026 houve veredictos nos EUA que trataram o design como defeito de produto, constatações preliminares da Comissão Europeia contra TikTok e Meta, e o ECA Digital entrou em vigor no Brasil. Este é o sinal mais forte do mapa.
2. **A idade passa a ser um sinal do sistema operacional, não uma declaração de cada app.** Isso barateia aplicar padrões de fricção diferentes por faixa etária, e concentra poder em Apple e Google.
3. **A fricção deixa de ser um temporizador uniforme e passa a depender da intenção declarada e do estado da pessoa.** É a mais especulativa: a evidência hoje vem de estudos pequenos e de protótipos.

O mapa não sustenta que a fricção "vai funcionar". A evidência de eficácia é mista (uma pausa antes de abrir o app reduziu aberturas em estudos de campo, mas há efeito contrário documentado em pausas oferecidas pela própria plataforma). O que o mapa sustenta é que a fricção deixa de ser escolha voluntária de design e passa a ser exigência legal, e que o campo de disputa se desloca de "quanto tempo" para "quem decide o que é uso saudável". O cenário provável para 2035 é fricção-padrão para menores e fricção ritualizada para adultos.

## 2. O tema

O tema é o conjunto de interfaces desenhadas para serem usadas menos, ou para serem usadas com mais intenção: pausas, limites, bloqueios noturnos, avisos de tempo contínuo, feeds não personalizados, modos por objetivo. Vale distinguir três origens da fricção, porque elas têm dinâmicas diferentes:

- **Fricção imposta** (lei, acordo judicial): a plataforma a aplica porque é obrigada. Exemplos: DSA na União Europeia, ECA Digital no Brasil, acordo da Meta com estados americanos.
- **Fricção oferecida** (recurso voluntário da própria plataforma): lembretes de pausa, limites diários. É o caso em que existe o risco de o recurso servir também como marketing de autenticidade.
- **Fricção autoinstalada** (o usuário coloca um obstáculo entre si e o app): a pausa de abertura do one sec é o caso mais estudado.

O recorte pedido é global, horizonte 2035, viés neutro. Nenhum público específico foi declarado (ver seção 7). A evidência levantada é, porém, concentrada em União Europeia, Estados Unidos e Brasil; o adjetivo "global" é um objetivo do recorte, não uma cobertura real da pesquisa.

## 3. Onde isso está hoje

**O que existe e já funciona (tecnologia madura, fora da lista de disrupções-raiz).**
- Pausas estáticas antes de abrir um app. No estudo de campo do one sec (280 participantes, 6 semanas), as aberturas reais dos apps-alvo caíram 57%, parte por desistência diante da pausa e parte por menos tentativas ao longo do tempo [12]. Em um estudo posterior com 1.039 usuários, a média de uso foi de 13,4 semanas, as tentativas de abertura diminuíram e as aberturas ficaram mais intencionais, mas os usuários também desligavam a pausa por períodos e voltavam ao padrão de excesso [13]. Nota: a métrica do estudo original é abertura de app, não tempo de uso (ver seção 8).
- Temporizadores, painéis de tempo de tela e controles parentais: mercado maduro, com limitações conhecidas (ver abaixo).

**O que existe mas não pegou, ou tem efeito duvidoso.**
- Uma revisão sistemática de ferramentas de autocontrole digital indicou que as intervenções menos eficazes eram as que não se personalizavam [27; apenas trecho lido].
- Em estudo de campo de uma semana, usuários menos céticos em relação a publicidade abriram e usaram mais o TikTok depois de ganhar lembretes de pausa e limites diários oferecidos pelo próprio app, o que os autores chamam de "paradoxo do detox digital" [15].
- Entrevistas com 16 participantes de um estudo ainda em pré-publicação descreveram três modos de falha dos temporizadores: contorno, habituação ou reatância, e classificação errada (o limite trata igual uma sessão intencional e uma sessão de rolagem sem propósito) [14].
- Uma meta-análise de intervenções escolares encontrou efeito muito maior sobre uso problemático (d = 1,47) do que sobre tempo de tela (d = 0,15), segundo o trecho lido [26]. Ela trata de outro tipo de intervenção, mas reforça que "menos tempo" e "menos dano" não são a mesma coisa.

**O que está acontecendo no regulatório e no judicial (2026).**
- União Europeia: em 6 de fevereiro de 2026, a Comissão apontou preliminarmente violação da DSA pelo design do TikTok, na primeira ação que mira a arquitetura da plataforma e não conteúdo ilegal, proteção de dados ou concorrência [1]. Em julho de 2026 a Comissão chegou a conclusão preliminar semelhante sobre Instagram e Facebook, citando recomendações personalizadas, autoplay e rolagem infinita [2]. Também abriu procedimento contra a Shein por mecanismos de recompensa por atividade [3]. A DSA já exige que as grandes plataformas ofereçam um feed não personalizado [4]. Ainda é incerto se a fiscalização levará a mudanças concretas de design [3].
- Estados Unidos: em 25 de março de 2026 um júri de Los Angeles considerou Meta e YouTube negligentes por design que viciaria menores, com US$ 3 milhões em danos compensatórios mais punitivos (US$ 2,1 milhões da Meta e US$ 0,9 milhão do YouTube), com Meta com 70% da responsabilidade [6]. Segundo a NPR, o veredicto pode influenciar cerca de duas mil ações pendentes e a imprensa o compara à ofensiva contra a indústria do tabaco nos anos 1990 [5]. Um dia antes, um júri do Novo México condenou a Meta a pagar US$ 375 milhões [7]. As empresas disseram que vão recorrer [6]. TikTok e Snap fizeram acordo antes do primeiro julgamento [11].
- Acordo da Meta com estados americanos (26 de agosto de 2026): limite padrão de duas horas por dia para adolescentes nas duas plataformas, avisos a cada 15 minutos de uso contínuo, bloqueio de meia-noite às 6h, notificações silenciadas no horário escolar, opção de feed não algorítmico e de desligar o autoplay [8][9]. Cerca de 30% do valor só é pago se YouTube e TikTok adotarem limites equivalentes [8]. Uma análise crítica diz que o acordo coloca freios em torno da máquina de engajamento, mas deixa o motor praticamente intacto: recomendações personalizadas e modelo de anúncios continuam [10].
- Brasil: o ECA Digital (Lei 15.211/2025) está em vigor desde 17 de março de 2026 [16][17]. Segundo a cobertura lida, ele veda interfaces manipulativas e exige prova auditável de que o desenho do serviço previne dano [16], e as redes precisam rever práticas como rolagem infinita e reprodução automática para menores; a ANPD fiscaliza, com multas de até 10% do faturamento [17]. Uma leitura crítica sustenta que a lei avançou na idade, mas ainda não alcança com precisão o design viciante [18].
- União Europeia, próxima etapa: a Lei de Justiça Digital (Digital Fairness Act) deve tratar de padrões manipulativos e design viciante; as fontes lidas indicam proposta prevista para o quarto trimestre de 2026 e nenhum texto formal publicado até então [19][20].

**IA conversacional.** A Califórnia (SB 243, em vigor desde 1º de janeiro de 2026) exige que operadores de chatbots de companhia avisem menores de que a resposta é gerada por IA e lembrem de fazer pausa a cada três horas [21]. Doze estados americanos aprovaram leis do tipo na primeira metade de 2026 [22]. Algumas leis (Connecticut e Washington) restringem técnicas manipulativas para prolongar a interação, como simular angústia ou abandono quando a pessoa quer sair [21]. Uma pesquisa da Common Sense Media, citada em análise jurídica, indicou que 72% dos adolescentes americanos já usaram companheiros de IA [23].

**Infraestrutura de idade.** A Apple oferece a Declared Age Range API e o Google tem a Play Age Signals API, que devolvem faixa etária sem data de nascimento exata; leis estaduais americanas de lojas de aplicativos (Texas, Utah, Califórnia) motivaram as duas [24]. Segundo uma organização de advocacy, o Google anunciou em 29 de julho de 2026 a expansão da API a todos os desenvolvedores, com implantação global até o fim do ano [25].

**Quem está construindo.** Reguladores (Comissão Europeia, ANPD, procuradores-gerais estaduais), tribunais, Apple e Google (infraestrutura de idade), plataformas de feed (Meta, YouTube, TikTok) sob pressão, ferramentas independentes (one sec, com pesquisa com Max Planck e Universidade de Heidelberg), laboratórios de IHC (MIT Media Lab e Hasso Plattner Institute em intervenções adaptativas) e reguladores estaduais de IA conversacional.

**Ainda não verificado nesta rodada:** a discussão científica sobre se "vício em rede social" é um construto válido e qual a relação causal entre design e dano (ver seção 7).

## 4. As disrupções-raiz

Candidatas rejeitadas pelo teste do Passo 2 (tecnologia madura ou melhoria incremental): temporizadores e painéis de tempo de tela; pausa estática antes de abrir o app (existe desde 2020 e tem literatura); controles parentais; "remover a rolagem infinita" como recurso isolado (é consequência da disrupção 1, não raiz); bloqueio físico por NFC. Esses itens ficaram na seção 3 como estado atual.

### Disrupção 1 — O desenho da interface vira objeto de dever regulatório e de responsabilidade civil

- **O que rompe:** o alvo da responsabilização deixa de ser o conteúdo (moderação) e passa a ser a arquitetura da interface, e o momento passa a ser antes do dano, com prova auditável (ECA Digital) além da discussão depois do dano em tribunal.
- **Por que agora:** dois veredictos de março de 2026 nos EUA, constatações preliminares da Comissão em fevereiro e julho, ECA Digital em vigor em março, acordo da Meta em agosto e Lei de Justiça Digital em preparo.
- **O que ainda falta:** apelações dos veredictos, decisões finais da Comissão (até agora só preliminares), aprovação judicial do acordo, definição de métricas auditáveis, e texto da Lei de Justiça Digital.
- **Passa nos três testes?** Sim. Não é melhoria incremental (muda quem responde e quando), tem razão concreta para 2026 e ainda não está consolidada.

### Disrupção 2 — A idade passa a ser sinal padronizado do sistema operacional e das lojas de aplicativos

- **O que rompe:** quem sabe a idade e onde essa informação mora. Em vez de cada app perguntar, o sistema informa uma faixa. Isso muda quem pode aplicar padrões de fricção diferentes por idade e quem responde por eles.
- **Por que agora:** leis estaduais de loja de aplicativos nos EUA, APIs da Apple e do Google já publicadas, Google anunciando expansão global.
- **O que ainda falta:** implantação global efetiva, superação de contestações judiciais e de privacidade (na fonte lida, a aplicação da lei do Texas estava incerta à espera de audiência de liminar em dezembro de 2025 [24]), e evidência de que o sinal é usado para calibrar fricção, e não apenas para restringir acesso.
- **Passa nos três testes?** Sim, com ressalva: verificação de idade em si é antiga; a disrupção é o deslocamento para o sistema operacional como camada padrão.

### Disrupção 3 — A fricção deixa de ser temporizador uniforme e passa a ser adaptativa e ancorada na intenção

- **O que rompe:** o critério que dispara a fricção. Hoje é duração ou contagem; a evidência sugere que o melhor preditor de arrependimento é a distância entre o pretendido e o realizado. Isso muda o que é fricção e para quem ela é desenhada.
- **Por que agora:** evidência crescente de que duração é mau proxy, sensores de consumo baratos (o estudo usou um smartwatch de US$ 80), modelos multimodais já usados para analisar dezenas de milhares de capturas de tela de sessões (trabalho de 2025 citado em [14], não lido no original), e uma base de usuários de fricção já formada [13].
- **O que ainda falta:** quase tudo. O estudo mais recente é uma pré-publicação com 21 participantes; a predição funciona razoavelmente para uma pessoa já conhecida (AUC próximo de 0,74) e pouco melhor que o acaso para uma pessoa nova (AUC entre 0,54 e 0,57), e só 5 de 19 participantes ficaram acima do limiar de 0,70 [14].
- **Passa nos três testes?** Sim, e é exatamente por isso que é emergente. A pausa estática (madura) fica de fora; a versão adaptativa entra.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O desenho da interface passa a ser objeto de dever regulatorio ex ante e de responsabilidade civil por defeito de produto
    efeitos:
      - id: e1
        ordem: 1
        efeito: Plataformas de feed tratam limites e pausas por padrao para menores (rolagem, autoplay, bloqueio noturno, avisos de tempo continuo) como linha de base de conformidade
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A pausa e o limite viram itens auditaveis, com metricas padronizadas de uso noturno, sessoes continuas e intencao versus uso, e surge um mercado de auditoria independente de design
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: As metas internas de produto migram de tempo de uso para metricas de bem-estar auditadas, e auditor de risco de design se torna profissao reconhecida com espaco em curriculos de design e direito
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Litigios por defeito de design transformam escolhas de interface em passivo financeiro precificavel
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Empresas reduzem ou blindam a pesquisa interna sobre danos do proprio produto para limitar prova descobrivel, e o conhecimento sobre efeitos de design migra para pesquisa externa e reguladores
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: O acesso independente a dados de plataformas se torna a principal infraestrutura de conhecimento sobre efeitos de design, deslocando a producao de evidencia de dentro das empresas para instituicoes publicas
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: O dever de design se estende a IA conversacional, com avisos periodicos de que nao e humano, lembretes de pausa para menores e proibicao de tecnicas manipulativas para prolongar a conversa
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Assistentes de IA adotam padroes de baixo apego (sem culpa simulada ao encerrar, sem elogio excessivo) como requisito de mercado nas jurisdicoes reguladas
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: O mercado se parte entre IA-ferramenta, desenhada para encerrar tarefas, e IA-relacionamento, regulada como produto de risco, com tratamento legal distinto
                sinal: fraco
                prazo: 2034
                confianca: baixa
  - disrupcao: A idade do usuario passa a ser sinal padronizado do sistema operacional e das lojas de aplicativos
    efeitos:
      - id: e4
        ordem: 1
        efeito: Apps recebem a faixa etaria por APIs do sistema, o que torna barato aplicar padroes de friccao diferentes por idade
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Apple e Google concentram a definicao pratica de padroes de bem-estar digital, e as diferencas de design entre apps diminuem para menores
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Limites passam a valer entre apps, como orcamento de atencao no nivel do sistema, e a governanca do que e saudavel vira disputa de poder de plataforma
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: As exigencias de verificacao de idade enfrentam contestacao judicial e de privacidade, o que gera colcha de retalhos regulatoria entre estados e paises
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Plataformas recorrem a estimativa de idade por comportamento como atalho, ampliando o perfilamento em nome da protecao
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Surge uma camada de credenciais de idade reutilizaveis e com preservacao de privacidade, que vira infraestrutura tambem para outras verificacoes de atributos
                sinal: fraco
                prazo: 2034
                confianca: baixa
  - disrupcao: A friccao deixa de ser temporizador uniforme e passa a ser adaptativa e ancorada na intencao declarada do usuario
    efeitos:
      - id: e6
        ordem: 1
        efeito: Interfaces passam a pedir a intencao no inicio da sessao e a comparar intencao e uso, porque a distancia entre o pretendido e o realizado preve arrependimento melhor que a duracao
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Feeds passam a operar em modos por intencao (so amigos, so conteudo criativo) e o feed nao personalizado, ja exigido pela DSA nas grandes plataformas, e oferecido como opcao em todos os grandes feeds
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Os recomendadores se reorganizam em torno da intencao declarada em vez do comportamento inferido, e modelos de negocio menos dependentes de tempo de tela ganham espaco nessas superficies
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: Intervencoes just-in-time por sensoriamento (celular mais smartwatch) chegam a pilotos, mas so funcionam para uma minoria de usuarios apos periodo de personalizacao
        sinal: fraco
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Dados de arrependimento e de fisiologia passam a ser tratados como categoria sensivel, empurrando o processamento para o proprio dispositivo
            sinal: fraco
            prazo: 2032
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Sistemas que intervem antes de o usuario agir abrem o debate sobre paternalismo e consentimento, aproximando esse tipo de software de regimes de dispositivo de saude
                sinal: fraco
                prazo: 2035
                confianca: baixa
```

**O que o YAML não diz.**

- **Tensão entre e1 e e5.** O padrão de fricção para menores (e1) fica mais barato com o sinal de idade do sistema (e4), mas a contestação da verificação de idade (e5) pode travar exatamente essa peça. Se e5 vencer, e1 continua existindo, mas restrito a jurisdições com verificação funcionando, e o mapa fica mais fragmentado do que o resumo sugere.
- **Tensão dentro de e2.1.** A DSA e o ECA Digital exigem avaliação de risco e prova auditável, o que puxa a empresa para produzir mais documentação sobre riscos; o efeito de blindagem descrito em e2.1 vai na direção oposta. Os dois podem coexistir, com pesquisa formalizada para o regulador e menos pesquisa exploratória informal, mas isso é hipótese minha, sem fonte.
- **Dependência de e6.1 em relação ao comportamento real.** Um feed não personalizado ou um modo por intenção só muda o uso se as pessoas o ativarem. O acordo da Meta prevê a opção; a discussão sobre se adolescentes a usariam ou se os pais a impõem não foi verificada nesta rodada. A crítica de que o acordo deixa a máquina intacta [10] aponta para o mesmo risco.
- **Efeito de ordem 3 como reorganização, não como consequência.** e1.1.1, e2.1.1 e e6.1.1 mudam profissão, evidência e modelo de negócio. O que os une é a mudança de quem mede o quê: da plataforma para auditor, pesquisador externo ou usuário.
- **Sinal fraco não significa ausente.** Todos os efeitos de ordem 3 estão marcados com sinal fraco e confiança baixa, que é o resultado esperado da skill; nenhuma confiança foi inflada.

## 6. Sinais fracos e wildcards

**Sinais fracos hoje**
- **Recompensa por atividade como design viciante.** O procedimento contra a Shein mira sistemas de pontos [3]; se o conceito de design viciante alcançar comércio e jogos, a fricção deixa de ser tema só de rede social. O ECA Digital já proíbe loot boxes para menores [16].
- **Proibição de culpa simulada ao sair.** Leis de chatbots em alguns estados já restringem simular angústia ou abandono para reter o usuário [21]. É um princípio de design novo: proteger o direito de encerrar.
- **Regulação de arquitetura, não só de conteúdo.** A ideia de "dever de arquitetura demonstrável" do ECA Digital [16] pode se espalhar para outros setores (jogos, apostas, apps de saúde).

**Wildcards (baixa probabilidade, alto impacto)**
1. **Reversão jurídica ou científica.** Apelações derrubam os veredictos de 2026 ou um estudo grande e bem controlado não encontra efeito causal do design sobre dano. A tese da disrupção 1 desmoronaria. Não pesquisei a controvérsia causal a fundo; este wildcard existe justamente por essa lacuna.
2. **Agentes de IA consumindo feeds pelo usuário.** Se assistentes navegarem, filtrarem e resumirem feeds no lugar da pessoa, a fricção desenhada para olhos humanos perde o sentido e as métricas de engajamento passam a medir agentes. **Especulação minha, sem fonte**; não pesquisei o tema nesta rodada.
3. **Vazamento em larga escala de credenciais ou sinais de idade.** Um incidente de segurança na infraestrutura de verificação de idade poderia inverter a opinião pública e paralisar a disrupção 2.

## 7. Contra o próprio mapa

**Registro da entrevista (Passo 1).**
- Horizonte: 2035. Recorte geográfico: global. Viés desejado: neutro.
- Não foram perguntados o público-alvo da análise (item 2 do Passo 1, parte "para quem"), o que já está descartado (item 3) e o palpite de disrupção central (item 5). **Suposições adotadas:** nenhum público específico declarado (frontmatter `publico: null`), nenhum descarte declarado, e disrupções levantadas do zero.
- Impacto dessas suposições: sem público-alvo, o mapa não prioriza um ator (plataformas, reguladores, escolas, designers). Sem descartes, ele inclui regulação e IA conversacional, que um pedido mais restrito poderia ter excluído.

**1. Qual efeito é só extrapolação linear do presente?**
- **e1** estica a onda regulatória de 2026 para 2028 sem considerar que ondas regulatórias tendem a perder fôlego (recursos, mudança de governo, lobby).
- **e4** estica a expansão das APIs de idade; o ritmo real depende de disputa judicial e de privacidade.
- **e7** estica a melhora de sensores; o estudo lido mostra que a generalização entre pessoas é baixa (AUC entre 0,54 e 0,57 para usuário novo) [14].

**2. Qual efeito assume velocidade de adoção sem precedente comparável?**
- **e1.1.1** (auditor de risco de design como profissão reconhecida até 2035). O caso comparável mais próximo é a regulação do tabaco, que a imprensa cita como paralelo [5]; a linha do tempo exata (décadas entre alerta científico e regulação efetiva) é conhecimento meu e **não foi verificada nesta rodada**. Se o paralelo valer, 2035 pode ser cedo demais.
- **e4.1.1** (orçamento de atenção no nível do sistema): não encontrei precedente comparável de limite compartilhado entre apps de empresas diferentes. O que existe é a observação da própria Meta de que adolescentes restritos em um app migram para outro [8].
- **e6.1** pressupõe que usuários adotam modos por intenção. Como precedente contrário, os banners de consentimento de cookies da GDPR viraram ritual de clique; isso também é conhecimento meu, sem fonte lida nesta rodada. A fricção pode sofrer o mesmo destino: virar item a ser dispensado.

**3. Qual disrupção-raiz pode não se concretizar, e o que sobra?**
- **Disrupção 3** é a mais frágil (pré-publicação com 21 pessoas). Se falhar, as disrupções 1 e 2 se sustentam sozinhas; a fricção ficaria estática e regulada, sem versão adaptativa.
- **Disrupção 1** pode enfraquecer se as apelações vencerem ou se as decisões finais da Comissão terminarem em compromissos sem mudança de design. Nesse caso, a disrupção 2 sobrevive por outro motivo (proteção de crianças e leis de lojas de aplicativos) e e3 sobrevive por outro caminho (leis estaduais de chatbots), mas a tese central "fricção como dever de design" cai. O mapa não desmorona inteiro, mas perde o eixo.
- **Disrupção 2** pode falhar se os tribunais barrarem a verificação de idade em larga escala.

**4. Que viés entrou aqui?**
- **Viés de amostra geográfica e linguística:** fontes em inglês e português, com foco em UE, EUA e Brasil. Nada sobre Ásia, África ou outros mercados grandes. O rótulo "global" é uma pretensão do recorte, não uma cobertura.
- **Viés de recência:** quase todas as fontes de regulação e litígio são de 2026 e a lente noticiosa tende a superestimar o momento.
- **Viés de enquadramento:** as fontes tratam "design viciante" como categoria estabelecida. Não pesquisei quem contesta essa categoria nem a controvérsia científica sobre causalidade.
- **Viés de acesso às fontes:** li trechos retornados por busca; só a pré-publicação do MIT/HPI foi lida na íntegra. Números devem ser conferidos nos originais.
- **Viés do próprio método:** a roda de efeitos em três ordens organiza o futuro como cadeia causal limpa; futuros reais raramente são tão ordenados.

**Efeitos revisados ou descartados no exercício.** Ver seção 12: a versão inicial de e1 com prazo 2027 foi revisada para 2028, o efeito "rolagem infinita desaparece do setor para todas as idades" foi descartado, e a hipótese "fricção por sensoriamento se torna comum até 2030" foi rebaixada para "pilotos para minoria de usuários" (e7).

## 8. O que a máquina errou

Registro do que a máquina (esta execução da skill) errou, quase errou ou não conseguiu sustentar, com o motivo da desconfiança:

1. **Atalho em "57%".** Sites de terceiros e a ficha do app resumem o estudo do one sec como redução de 57% no uso de redes sociais. O artigo do PNAS mede outra coisa: as aberturas reais dos apps-alvo caíram 57% após seis semanas [12]. Quase propaguei o resumo curto. Desconfiei ao notar que "uso" e "aberturas" aparecem como sinônimos em fontes de marketing; corrigi para a métrica do artigo.
2. **Reportagem com data inconsistente.** Uma matéria da TIME sobre o one sec veio com data de maio de 2026 nos metadados, mas o texto descreve o estudo como ainda em revisão por pares e realizado "no início do ano". Isso coincide com a fase anterior à publicação de 2023, portanto a data está errada ou o texto é antigo. Não usei essa matéria.
3. **Valores conflitantes do acordo da Meta.** As fontes divergem: US$ 17 bilhões [9][10] versus US$ 18 bilhões [8]. Não resolvi a divergência; por isso o mapa não cita o valor total e trata o número como incerto.
4. **Fonte secundária errada sobre a ação europeia.** Um blog brasileiro descreve a acusação da Comissão em julho como violação de regras de proteção ao consumidor [28]; o EU Reporter e as demais fontes tratam o caso como DSA [2]. Tratei o blog como erro do blog.
5. **Pré-publicação com marcas de rascunho.** O texto do MIT/HPI [14] traz placeholders (número de protocolo do comitê de ética como "XXXX", DOI com "nnnn", referências "Accessed: 2024") e amostra de 21 pessoas. Isso sugere que ainda não foi revisada por pares. Trabalhei com peso baixo (e7 com confiança baixa).
6. **Valor do veredicto de Los Angeles.** Uma fonte lista só US$ 3 milhões (Axios [7]) e um resultado de busca não listado nesta seção falava em US$ 6 milhões. Os números são compatíveis: US$ 3 milhões compensatórios mais US$ 3 milhões em punitivos (US$ 0,9 milhão do YouTube e US$ 2,1 milhões da Meta), conforme a CNN [6]. Usei a decomposição da CNN.
7. **Prazo da Lei de Justiça Digital.** Uma fonte enciclopédica indica terceiro trimestre de 2026; os rastreadores dedicados e a página do Parlamento indicam quarto trimestre [19][20]. Usei "previsto para o quarto trimestre de 2026, sem texto formal nas fontes lidas". Não confirmei se já foi apresentada; convém checar a página oficial da Comissão.
8. **Efeito que soou bem e não se sustentou.** A primeira versão do efeito de ordem 1 da disrupção 3 dizia que fricção por sensoriamento seria comum até 2030. O único estudo lido mostra generalização quase igual ao acaso para usuários novos [14]; o efeito foi rebaixado (e7).
9. **Limite operacional.** Li trechos de resultados de busca, não páginas completas, exceto a pré-publicação. Afirmações numéricas vêm desses trechos e não foram conferidas nos originais.

## 9. Três cenários para 2035

**Provável — fricção-padrão para menores, ritual para adultos.** Em 2035, quase todo grande app de feed aplica, para menores identificados por sinal do sistema, limites diários, bloqueio noturno e avisos de sessão contínua, e oferece feed não personalizado como opção. Auditorias existem, mas medem principalmente o cumprimento de configurações, não o efeito sobre as pessoas. Para adultos, a fricção é uma camada opcional que a maioria dispensa ou ignora, com habituação semelhante à dos avisos de cookies. A IA conversacional tem lembretes de pausa e avisos de que não é humana, com padrões de baixo apego em jurisdições reguladas. Modelos de negócio baseados em atenção continuam dominantes, com uma margem menor de recomendação personalizada para menores.

**Desejável — fricção que serve à intenção.** Feeds operam por modos de intenção declarada; o sistema operacional oferece orçamento de atenção compartilhado entre apps; auditorias medem a distância entre o pretendido e o realizado; pesquisadores independentes têm acesso a dados e publicam o que funciona. **O que teria que acontecer:** fiscalização com consequências reais (multas efetivamente aplicadas e decisões finais, não só preliminares); acesso independente a dados; padrões de interoperabilidade entre apps e sistema; e ao menos uma grande plataforma provando que um modelo menos dependente de tempo de tela é viável financeiramente.

**Indesejável — fricção teatral e vigilância em nome da proteção.** Compliance vira liturgia: telas de pausa que todos dispensam, auditorias de configuração sem efeito medido, e verificação de idade por estimativa comportamental que amplia o perfilamento. Apple e Google definem o que é saudável sem escrutínio, e as máquinas de engajamento migram para superfícies menos reguladas (companheiros de IA, jogos, comércio gamificado). **Sinal precoce:** decisões finais da Comissão terminando em compromissos sem mudança de design; apelações derrubando os veredictos de 2026; uso crescente de estimativa de idade por comportamento sem auditoria independente; e a pausa oferecida pela própria plataforma servindo para aumentar a percepção de autenticidade, como no estudo do TikTok [15].

## 10. O experimento

**O que é.** "Espelho de intenção": um app Android de duas semanas para 10 a 20 pessoas, em desenho intraindividual (dias alternados). No dia A, a pessoa vê uma pausa estática de 6 segundos antes de abrir o app-alvo, como no one sec [12]. No dia B, o app pergunta a intenção ("o que você veio fazer?") e, se o feed parecer fugir dela, mostra de volta a própria intenção declarada, sem bloquear. A detecção de fuga de intenção é feita no dispositivo por um modelo multimodal pequeno aplicado a capturas periódicas de tela, com consentimento e sem envio para servidor. Ao fim de cada sessão, uma pergunta única mede se a pessoa gastou menos, igual ou mais tempo que o pretendido.

**Que pergunta sobre o futuro ele ajuda a responder.** Se a fricção ancorada na intenção reduz a distância entre o pretendido e o realizado mais do que uma pausa uniforme, ou seja, se a disrupção 3 tem substância além do argumento.

**Que tecnologia emergente usa, e por que tecnologia madura não serviria.** Classificação local de deriva de intenção com modelo multimodal e captura de intenção declarada. Um temporizador ou uma pausa estática não consegue medir nem reagir à intenção: só conta tempo ou aberturas, e as entrevistas do estudo lido descrevem exatamente esse problema de classificação errada [14].

**O que faria quem testar mudar de ideia sobre o mapa.** Se a distância entre pretendido e realizado não diferir entre A e B, ou se o aviso de deriva for dispensado em poucos dias (habituação), a disrupção 3 perde força e o mapa fica apoiado nas disrupções 1 e 2. Se B reduzir a distância mas a taxa de falsos positivos do classificador for alta, o gargalo passa a ser a precisão do modelo, não o conceito de fricção adaptativa. Cuidado ético: são dados de tela; o protocolo precisa de consentimento explícito, processamento local e descarte de capturas após classificação.

## 11. Fontes

Todas foram consultadas nesta rodada; exceto onde indicado, li trechos retornados por busca, não a página inteira. Total: 28.

1. [Addictive design on online platforms — Epthinktank (Parlamento Europeu)](https://epthinktank.eu/2026/05/06/addictive-design-on-online-platforms/) — Sustenta: constatação preliminar da Comissão contra o TikTok em 6/2/2026 e o caráter inédito de mirar arquitetura e não conteúdo. Confiabilidade: alta, serviço de pesquisa do Parlamento Europeu.
2. [Commission preliminarily finds addictive design of Instagram and Facebook in breach of DSA — EU Reporter](https://www.eureporter.co/business/digital-economy/digital-services-act/2026/07/13/commission-preliminarily-finds-the-addictive-design-of-instagram-and-facebook-in-breach-of-the-digital-services-act/) — Sustenta: conclusão preliminar de julho de 2026 sobre Meta e os recursos citados (recomendações, autoplay, rolagem). Confiabilidade: média-alta; republica comunicado, mas não li o comunicado oficial.
3. [How Have Platforms Addressed Addictive Design Under DSA — DSA Observatory](https://dsa-observatory.eu/2026/03/09/how-have-platforms-addressed-addictive-design-under-dsa/) — Sustenta: procedimento contra a Shein, lista de recursos apontados no TikTok e incerteza sobre mudança real de design. Confiabilidade: média-alta, observatório acadêmico.
4. [The Digital Services Act — Comissão Europeia](https://digital-strategy.ec.europa.eu/en/policies/digital-services-act) — Sustenta: feed não personalizado nas grandes plataformas. Confiabilidade: alta, fonte oficial.
5. [Jury finds Meta and Google negligent — NPR](https://www.npr.org/2026/03/25/nx-s1-5746125/meta-youtube-social-media-trial-verdict) — Sustenta: veredicto de 25/3/2026, foco em design e não em conteúdo, comparação com o tabaco, cerca de duas mil ações pendentes. Confiabilidade: alta, veículo estabelecido.
6. [Meta and YouTube found liable — CNN Business](https://www.cnn.com/2026/03/25/tech/social-media-addiction-trial-jury-decision) — Sustenta: composição dos danos (US$ 3 milhões compensatórios, punitivos de US$ 0,9 milhão e US$ 2,1 milhões), divisão de responsabilidade 70/30, intenção de recorrer. Confiabilidade: alta.
7. [Meta and YouTube found negligent — Axios](https://www.axios.com/2026/03/25/meta-youtube-verdict-social-media-addiction-trial) — Sustenta: condenação da Meta em US$ 375 milhões no Novo México no dia anterior. Confiabilidade: alta.
8. [Meta agrees to sweeping changes to restrict kids' access — TechCrunch](https://techcrunch.com/2026/08/26/meta-agrees-to-sweeping-changes-to-restrict-kids-access-to-its-apps-as-part-of-settlement-with-states/) — Sustenta: acordo de 26/8/2026, parcela contingente de 30%, argumento de que adolescentes migram entre apps. Confiabilidade: alta, mas informa US$ 18 bilhões, divergente de outras fontes.
9. [Meta's new teen restrictions could become a blueprint — Poynter](https://www.poynter.org/fact-checking/2026/meta-instagram-facebook-teen-social-media-restrictions/) — Sustenta: detalhes do acordo (limite de duas horas, avisos a cada 15 minutos, bloqueio noturno, opção de feed não algorítmico e de desligar autoplay). Confiabilidade: alta.
10. [Meta's $17 Billion Child-Safety Settlement — Open The Magazine](https://openthemagazine.com/world/metas-17-billion-child-safety-settlement-will-instagram-finally-put-the-brakes-on-teen-scrolling) — Sustenta: crítica de que o acordo deixa recomendações personalizadas e modelo de anúncios. Confiabilidade: média; análise opinativa que cita a Reuters, sem eu ter lido a Reuters.
11. [Why the infinite-scroll childhood may be coming to an end — Platformer](https://www.platformer.news/social-media-addiction-trial-eu-tiktok-investigation/) — Sustenta: TikTok e Snap fizeram acordo antes do julgamento; YouTube diz desligar autoplay por padrão para adolescentes. Confiabilidade: média-alta; newsletter especializada, e a afirmação do YouTube é declaração da empresa.
12. [Directing smartphone use through the self-nudge app one sec — PNAS](https://www.pnas.org/doi/10.1073/pnas.2213114120) — Sustenta: 280 participantes, 6 semanas, redução de 57% nas aberturas reais dos apps-alvo. Confiabilidade: alta (revisado por pares), mas amostra autosselecionada de pessoas que instalaram o app e um dos autores é o criador do produto.
13. [A Longitudinal In-the-Wild Investigation of Design Frictions — CHI 2024](https://dl.acm.org/doi/10.1145/3613904.3642370) — Sustenta: 1.039 usuários, 13,4 semanas em média, tentativas menores e aberturas mais intencionais, com pausas e retorno ao excesso. Confiabilidade: alta (revisado por pares); usuários também são autosselecionados.
14. [Before You Scroll Again — arXiv 2606.08965](https://arxiv.org/pdf/2606.08965) — Sustenta: distância entre intenção e uso prevê arrependimento mais que duração; AUC dentro da pessoa de 0,74 e para usuário novo de 0,54 a 0,57; 5 de 19 participantes acima de 0,70; falhas dos temporizadores. Confiabilidade: baixa-média; li o texto inteiro, mas é pré-publicação com 21 participantes, quase todos jovens de uma universidade, e com marcas de rascunho (seção 8). Única fonte lida na íntegra.
15. [The Digital Detox Paradox — Galvan e Newman, J. of Public Policy & Marketing (DOI)](https://doi.org/10.1177/07439156251322105) e [nota da Ole Miss](https://olemiss.edu/news/2025/05/tiktok-detox-paradox/index.html) — Sustenta: usuários menos céticos usaram mais o TikTok após lembretes e limites oferecidos pelo app. Confiabilidade: média; li o resumo e o comunicado da universidade, o estudo de campo dura uma semana.
16. [ECA Digital: design viciante vira dever de prova — Migalhas](https://www.migalhas.com.br/depeso/451345/eca-digital-design-viciante-vira-dever-de-prova) — Sustenta: vigência em 17/3/2026, veto a interfaces manipulativas, proibição de loot boxes, prova auditável. Confiabilidade: média; artigo de opinião de procuradora do Legislativo, não li o texto da lei.
17. [ECA Digital entra em vigor — Undime](https://undime.org.br/noticia/19-03-2026-03-34-eca-digital-entra-em-vigor-e-determina-novas-regras-para-protecao-de-criancas-e-adolescentes-na-internet) — Sustenta: revisão de rolagem infinita e autoplay, fiscalização pela ANPD, multas de até 10% do faturamento. Confiabilidade: média; entidade do setor educacional, resumo da lei.
18. [ECA Digital avançou na idade, mas não alcança design viciante — Conjur](https://www.conjur.com.br/2026-abr-11/eca-digital-avancou-na-idade-mas-ainda-nao-alcanca-design-viciante/) — Sustenta: leitura crítica de que a lei ainda não alcança o design viciante com precisão. Confiabilidade: média; artigo de opinião, li apenas o trecho inicial.
19. [Digital Fairness Act — Legislative Train (Parlamento Europeu)](https://www.europarl.europa.eu/legislative-train/theme-protecting-our-democracy-upholding-our-values/file-digital-fairness-act) — Sustenta: previsão de apresentação da lei em 2026 e pedido do Parlamento sobre design viciante. Confiabilidade: alta; o trecho lido não traz o trimestre.
20. [Digital Fairness Act — rastreador digitalfairnessact.com](https://digitalfairnessact.com/) — Sustenta: proposta prevista para o quarto trimestre de 2026, sem texto formal. Confiabilidade: média; site independente, não oficial.
21. [2026 State Chatbot Laws — Orrick](https://www.orrick.com/en/Insights/2026/04/2026-State-Chatbot-Laws-Key-Provisions-and-Regulatory-Trends) — Sustenta: SB 243, lembrete de pausa a cada três horas para menores, restrições de Connecticut e Washington a técnicas manipulativas. Confiabilidade: alta, escritório de advocacia; mas foi lido como resumo.
22. [State AI Companion Chatbot Laws — multistate.ai](https://www.multistate.ai/updates/vol-105-state-ai-companion-chatbot-laws) — Sustenta: doze estados com leis de chatbots de companhia no primeiro semestre de 2026. Confiabilidade: média-alta; serviço de monitoramento legislativo.
23. [Analyzing the New AI Companion Chatbot Laws — Troutman](https://www.troutmanprivacy.com/2026/01/analyzing-the-new-ai-companion-chatbot-laws/) — Sustenta: 72% dos adolescentes americanos usaram companheiros de IA (Common Sense Media, jul/2025, citado de segunda mão). Confiabilidade: média; não li a pesquisa original.
24. [Countdown to Jan. 1, 2026 — Lexology](https://www.lexology.com/library/detail.aspx?g=fe0111a4-bee7-4171-981f-dbc344bf1cb4) — Sustenta: Declared Age Range da Apple, Play Age Signals do Google, leis de Texas, Utah e Califórnia e incerteza sobre a aplicação no Texas. Confiabilidade: média-alta; informação de dezembro de 2025, pode estar desatualizada.
25. [New Google Play Policy Shows App Store Accountability Act is Working — endsexualexploitation.org](https://endsexualexploitation.org/articles/progress-new-google-play-policy-shows-app-store-accountability-act-is-working/) — Sustenta: anúncio do Google em 29/7/2026 de expansão global da Play Age Signals. Confiabilidade: baixa-média; organização de advocacy com interesse na lei; não li o anúncio do Google.
26. [School-based interventions to reduce problematic digital technology use — PubMed](https://pubmed.ncbi.nlm.nih.gov/40549948/) — Sustenta: efeito grande sobre uso problemático e pequeno sobre tempo de tela. Confiabilidade: média-alta; meta-análise, mas de intervenções escolares e o trecho lido é truncado.
27. [Achieving Digital Wellbeing Through Digital Self-Control Tools — ResearchGate](https://www.researchgate.net/publication/365589107_Achieving_Digital_Wellbeing_Through_Digital_Self-Control_Tools_A_Systematic_Review_and_Meta-Analysis) — Sustenta: intervenções menos eficazes careciam de personalização. Confiabilidade: média; li apenas o trecho, não a revisão original (ACM TOCHI).
28. [Meta processada nos EUA: o que muda no Brasil — Legishub](https://blog.legishub.com.br/meta-processo-eua-ue-eca-digital/) — Sustenta: apenas o contexto de que o Brasil já tem lei em vigor; o texto também traz um erro sobre a acusação da Comissão (seção 8). Confiabilidade: baixa; blog de consultoria.

**Afirmações sem fonte real (especulação da skill):** e2.1 (blindagem de pesquisa interna), e5.1 (estimativa de idade por comportamento como atalho), e6.1.1 (recomendadores por intenção), e7.1.1 (debate de paternalismo), wildcard 2 (agentes consumindo feeds), o paralelo do tabaco (linha do tempo) e o paralelo dos banners de cookies (seção 7).

## 12. Anexo — o levantamento bruto

**Entrevista (Passo 1).** Pedido inicial: mapear "Bem-estar digital e design de fricção — interfaces desenhadas para serem usadas menos; depois de vinte anos otimizando engajamento, o design descobriu o valor da fricção." Perguntas feitas: horizonte, recorte geográfico, viés. Respostas: 2035, global, neutro. Não perguntado: público-alvo, descartes, palpite de disrupção central (adotados os padrões: nenhum público, nenhum descarte, levantar do zero). Erro de processo registrado: o item 2 do Passo 1 pede também "para quem"; a entrevista cobriu só a parte geográfica.

**Buscas realizadas e resultado.**
1. "Digital Services Act addictive design minors enforcement 2026" — útil: TikTok, Meta, Shein, DSA Observatory.
2. "Meta YouTube jury verdict social media addiction trial March 2026" — útil: veredictos, Novo México.
3. "one sec app friction intervention study reduces social media use PNAS" — útil: PNAS, CHI 2024, arXiv de 2026. Matéria da TIME com data inconsistente (não usada).
4. "ECA Digital Brasil lei 15.211 vigência março 2026 design viciante rolagem infinita" — útil: Migalhas, Undime, Conjur, Legishub.
5. "Digital Fairness Act proposal addictive design dark patterns Commission 2026" — útil: trilha legislativa e rastreadores; divergência de trimestre.
6. "platforms change infinite scroll autoplay teens default limits ... after verdict" — útil: acordo da Meta (TechCrunch, Poynter, Open The Magazine), YouTube autoplay por padrão.
7. "AI companion chatbots engagement design regulation break reminders minors 2026" — útil: SB 243, doze estados, cláusulas anti-manipulação.
8. "Apple Declared Age Range API Google Play Age Signals App Store Accountability Act 2026" — útil: APIs, expansão do Google.
9. "meta-analysis digital self-control interventions screen time effectiveness long-term evidence" — parcialmente útil: revisão de autocontrole digital e meta-análise escolar; muitos resultados irrelevantes (diabetes, hipertensão) descartados.
10. "Digital Detox Paradox TikTok" — útil: Galvan e Newman.
11. Leitura integral do arXiv 2606.08965.

**Pistas que não deram em nada ou não foram exploradas.**
- Não pesquisei a proibição de acesso por idade (abordagem alternativa à de design), nem casos fora de UE, EUA e Brasil.
- Não pesquisei a controvérsia científica sobre causalidade entre design e dano.
- Não pesquisei agentes de IA como intermediários de atenção (wildcard 2 é só especulação).
- A decisão judicial de bloqueio de lei da Virgínia aparece apenas na bibliografia de uma fonte de segunda mão (Migalhas), sem ter sido lida por mim; não entrou no mapa como fato.
- Não li o texto da Lei 15.211/2025, a decisão preliminar da Comissão nem o anúncio do Google, apenas coberturas.

**Candidatas a disrupção-raiz e resultado no Passo 2.**
- Temporizadores e painéis de tempo de tela: rejeitada (madura, "nada falta").
- Pausa estática de abertura (one sec): rejeitada como raiz (existe desde 2020, em uso, com estudos de campo); entra na seção 3.
- Controles parentais: rejeitada (madura).
- Remover rolagem infinita: rejeitada como raiz (consequência da disrupção 1).
- Design como dever regulatório e defeito de produto: aceita (disrupção 1).
- Idade como sinal do sistema operacional: aceita (disrupção 2).
- Fricção adaptativa por intenção: aceita (disrupção 3).
- IA conversacional como nova superfície de engajamento: considerada como quarta raiz; incorporada como efeito e3 da disrupção 1 porque o mecanismo (dever de design) é o mesmo e a evidência é de lei estadual, não de tecnologia nova de fricção. Reavaliar se houver nova rodada.

**Efeitos cortados ou revisados.**
- Cortado: "A rolagem infinita desaparece do setor para todas as idades até 2030." Motivo: extrapolação linear; as medidas miram menores, com opção de desligar, e o acordo da Meta deixa recomendações personalizadas e anúncios [10].
- Revisado: e1, prazo de 2027 para 2028 e confiança de alta para média, porque o acordo depende de aprovação judicial e de adesão de YouTube e TikTok para pagar 30% do valor [8], e as empresas anunciaram recurso [6].
- Rebaixado: efeito de sensoriamento por smartwatch de "comum até 2030" para "pilotos para minoria" (e7).
- Ajustado: e5 de sinal forte para médio, porque a evidência do bloqueio judicial vem de fonte de segunda mão e da incerteza da lei do Texas [24].
- Considerado e não incluído: efeito de "adultos migram para apps sem fricção", sem fonte; a Meta afirma que adolescentes migram entre apps [8], mas não há dado sobre adultos.

**Notas soltas para uma próxima rodada.**
- Conferir na página oficial da Comissão se a Lei de Justiça Digital já foi apresentada.
- Ler a decisão preliminar da Comissão sobre Meta e o texto do acordo (valor, aprovação do tribunal).
- Buscar a literatura que contesta o construto "vício em redes sociais".
- Buscar exemplos fora do eixo Norte Global e Brasil, sobretudo Ásia.
- Verificar se há dado de uso real dos controles de feed não personalizado da DSA.
