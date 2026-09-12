---
tema: "A infraestrutura de confiança: memória, observabilidade e avaliação de agentes"
slug: a-infraestrutura-de-confianca-memoria-observabilidade-e-avaliacao-de-agentes
autor_login: kvv
zona_de_interesse: Agentes
data: 2026-09-15
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 12
efeitos_ordem_3: 18
tecnologias_citadas: [replay determinístico de agentes, proxy MITM de trace, convenções semânticas GenAI do OpenTelemetry, memória tipada com proveniência, memória bitemporal entre sessões, LLM-as-judge e meta-avaliação, arenas de avaliação com consequência material, certificação acreditada de sistemas de gestão de IA]
fontes: 12
confianca: media
experimento: Turma executa a mesma tarefa em dois agentes e julga os dois percursos gravados sem ver o resultado final, para descobrir quanto da confiança vem do caminho e quanto vem do produto.
skill_usada: futurizacao-kvv
publico_ok: false
---

## Seção 1 — Resumo

Quando a máquina fabrica o produto, avaliar o produto deixa de medir o trabalho e passa a medir a máquina — e a pergunta de projeto muda de "o que foi entregue?" para "por que isso está certo?". Este mapa trata das três rupturas que sustentam essa mudança e que ainda não se concretizaram: o rastro re-executável substituindo o resultado como prova do trabalho; a memória entre sessões deixando de ser cache e virando ativo com dono em disputa; e a avaliação de sistemas não determinísticos virando função separada, auditável e com consequência material. Nenhuma das três está madura em 2026 — as convenções de telemetria para agentes continuam instáveis, os números de memória circulam quase só em blog de fornecedor, os juízes automáticos são consistentes sem serem válidos, e a obrigação europeia de registro automático de eventos para sistemas de alto risco acabou de ser adiada para dezembro de 2027. O documento aplica a Roda dos Futuros até a terceira ordem com horizonte em 2031, submete o próprio raciocínio a um teste adversarial, registra os erros cometidos pela IA durante a redação e propõe um experimento de sala para quem projeta mídia e interação.

## Seção 2 — O tema

"Infraestrutura de confiança" aqui é o par memória + auditoria: o que o agente carrega de uma sessão para outra e o que fica registrado do que ele fez. São duas faces do mesmo problema — confiar num sistema que ninguém consegue ler por inteiro. O ponto de contato com mídia e interação é mais direto do que parece. Primeiro, porque a memória é uma decisão de interface: um sistema que lembra três meses de conversa não é o mesmo produto que um que começa do zero, e a diferença aparece na tela, no tom, no que ele deixa de perguntar. Segundo, porque o rastro deixou de ser matéria de infraestrutura e virou matéria de representação: mostrar o percurso de um agente — o que ele tentou, o que falhou, por que desistiu — é um problema de design de informação tão difícil quanto qualquer visualização de dados. Terceiro, porque a avaliação define o que é "bom" no produto, e quem escreve a rubrica escreve o comportamento.

Exige mapa prospectivo, e não levantamento de estado da arte, por uma razão específica: o estado da arte aqui é enganoso. Existe uma quantidade enorme de ferramenta pronta, com página de vendas, gráfico comparativo e número de benchmark — e quase nada disso está estabilizado. As convenções que deveriam tornar o rastro portátil ainda mudam de nome entre versões; os scores de memória vêm de quem vende memória; os juízes automáticos que dão nota aos agentes estão eles próprios sob suspeita metodológica. Um levantamento fotografaria a oferta e concluiria que o problema está resolvido. O que está em disputa não é qual ferramenta ganha, e sim quem fica dono do rastro, quem fica dono da memória e quem tem autoridade para dizer que um sistema não determinístico presta.

## Seção 3 — Onde isso está hoje

**O que funciona.** A camada de captura existe e é usada. Oito plataformas disputam o mercado de observabilidade e avaliação de LLM — Langfuse (hoje sob a ClickHouse), LangSmith, Braintrust, Arize AX/Phoenix, MLflow, W&B Weave, Helicone e Datadog —, todas gravando prompts, respostas, chamadas de ferramenta, contagem de tokens, latência e custo em spans aninhados, com replay de sessão para agentes conversacionais [5]. O replay determinístico saiu do artigo e virou artefato: o `agrepl` intercepta toda interação externa na camada de transporte via proxy MITM, serializa o trace e re-executa em ambiente isolado sem rede, reportando fidelidade de replay F = 1.0 e redução mediana de 98,3% na latência por etapa em 250 instâncias de replay [3]. Do lado da memória, há benchmarks públicos com categorias definidas — LoCoMo com 1.540 perguntas, LongMemEval com 500, BEAM em escalas de 1M e 10M tokens [6]. E há certificação com acreditação: a ISO/IEC 42006:2025, publicada em julho de 2025, define os requisitos que um organismo certificador precisa cumprir para auditar e emitir certificados ISO 42001, exigindo competência no nível da equipe de auditoria, não do indivíduo [10].

**O que falha.** A padronização não chegou. Em julho de 2026, todo atributo, span, métrica e evento `gen_ai.*` do registro do OpenTelemetry ainda carrega o selo "Development" — nenhum estável; as convenções foram extraídas para um repositório próprio em 12 de junho de 2026 e ainda não têm release marcado; nomes centrais mudaram (`gen_ai.system` virou `gen_ai.provider.name`, `gen_ai.usage.prompt_tokens` virou `gen_ai.usage.input_tokens`) e a captura de conteúdo permanece opt-in [4]. Os números de memória vêm quase todos de quem vende memória, e o próprio relatório de fornecedor admite cinco problemas abertos, incluindo queda de 25% na abstração temporal entre BEAM 1M e 10M (64,1 → 48,6) e ausência de arquitetura robusta de privacidade e consentimento [6]. A memória persistente tem uma classe própria de falha: a contaminação heterogênea, em que evento específico de contexto vira alegação supergeneralizada e memória relevante mas funcionalmente incompatível envenena a geração — o MemGuard propõe memória tipada por papel funcional e relata até 28,27% de ganho de confiabilidade recuperando até 5,8× menos tokens [7]. E a avaliação automática está em crise silenciosa: uma auditoria de 21 juízes de nove provedores, com cerca de 541 mil julgamentos em 118 execuções sobre MT-Bench, JudgeBench e RewardBench, encontrou confiabilidade teste-reteste acima de 0,95 convivendo com deflação de kappa de 33 a 41 pontos percentuais no MT-Bench e rankings do mesmo juiz variando até 14 posições entre benchmarks — consistência alta, validade baixa [8]. Pior: o usuário simulado por LLM, base de boa parte da avaliação agêntica interativa, é proxy ruim do humano, com taxa de sucesso do agente variando até 9 pontos percentuais conforme o LLM que faz de usuário e desempenho sistematicamente pior para falantes de inglês vernacular afro-americano e inglês indiano [9].

**Quem está construindo, e o que a regra diz.** Constroem as plataformas de observabilidade (os oito acima), os fornecedores de memória (Mem0, Zep, Letta, entre outros), os autores de ferramentas de replay, e os organismos de certificação sob ISO 42006. O Estado chegou atrasado: o Artigo 12 do AI Act europeu obriga sistemas de alto risco a permitir o registro automático de eventos ao longo de toda a vida do sistema, para identificar situações de risco, viabilizar monitoramento pós-mercado e supervisionar a operação [1] — mas o Digital Omnibus empurrou a aplicabilidade dos sistemas de alto risco autônomos do Anexo III de 2 de agosto de 2026 para 2 de dezembro de 2027, e os do Anexo I de 2027 para 2 de agosto de 2028; o que não foi adiado foi a transparência do Artigo 50, em vigor desde agosto de 2026 [2]. No Brasil, o PL 2338/2023 foi pautado na Câmara em maio de 2026 e continua travado no impasse com o Senado, sem que o texto disponível detalhe obrigações de registro e rastreabilidade [12]. Ou seja: a exigência regulatória que forçaria trilha de auditoria universal existe no papel, foi adiada na Europa e ainda não fechou no Brasil.

## Seção 4 — As disrupções-raiz

### Disrupção 1 — A prova migra do resultado para o percurso re-executável

**O que rompe.** Rompe a equação que sustenta toda a engenharia de software de produto: entregável = artefato final. Se a máquina fabrica o artefato, conferir o artefato mede a máquina, não o trabalho — e, num sistema não determinístico, medir duas vezes dá dois resultados. A ruptura é substituir o objeto de confiança: o que se revisa, contrata, arquiva e apresenta deixa de ser o produto e passa a ser o rastro que o produziu, com fidelidade suficiente para ser re-executado por um terceiro. Isso reorganiza revisão de código, contrato de fornecimento, portfólio profissional e prova judicial.

**Por que agora e não há cinco anos.** Porque três coisas mudaram juntas. O agente ficou bom o bastante para ninguém conferir tudo — o volume de decisão delegada passou do que uma pessoa lê. A técnica de captura amadureceu: interceptar tudo na camada de transporte e re-executar com fidelidade 1.0 é resultado de 2026, não de 2021 [3]. E apareceu a exigência externa: o Artigo 12 do AI Act transforma registro automático de eventos em obrigação legal, não em boa prática [1]. Há cinco anos não havia nem volume, nem técnica, nem obrigação.

**O que falta para se concretizar.** Falta formato comum — enquanto todo atributo GenAI do OpenTelemetry estiver em "Development" e nomes mudarem entre versões [4], trace não é portátil, e prova que não atravessa fornecedor não é prova. Falta economia: gravar conteúdo custa armazenamento e cria passivo jurídico, e por isso a captura de conteúdo segue opt-in [4]. Falta jurisprudência: ninguém ainda perdeu uma causa por não ter o rastro. E falta o gesto cultural — a revisão de percurso ainda não é hábito de equipe nenhuma; hoje se olha o diff, não o caminho.

### Disrupção 2 — A memória entre sessões vira ativo acumulado, com dono em disputa

**O que rompe.** Rompe a condição de ferramenta. Ferramenta não acumula: usa-se e devolve-se igual. Um agente que lembra decisões, erros já cometidos e preferências ao longo de meses deixa de ser instrumento e vira uma parte com histórico — o que muda a relação de trabalho (o valor migra de quem sabe para o que o sistema lembra), a relação comercial (trocar de fornecedor deixa de ser trocar de modelo e passa a ser perder anos de contexto) e a relação de privacidade (memória que atravessa projetos, colegas e empregos vaza por construção, não por falha).

**Por que agora e não há cinco anos.** Porque o contexto ficou caro o bastante para que "lembrar" precise ser engenharia, e não só janela maior. Existe hoje um campo com benchmarks próprios, escalas de milhões de tokens e distinção explícita entre capacidade (contexto longo) e continuidade (memória) [6]. E porque a memória adquiriu patologia própria — contaminação, supergeneralização, incompatibilidade funcional — com defesas específicas sendo propostas [7]: um objeto técnico só tem patologia depois de existir de verdade.

**O que falta para se concretizar.** Falta padrão de portabilidade: não há formato de exportação de memória que atravesse fornecedores, e sem isso o ativo é da plataforma, não da pessoa. Falta arquitetura de consentimento — é uma das lacunas admitidas pelo próprio campo [6]. Falta evidência independente: os scores de memória são publicados majoritariamente por quem vende memória, com metodologias que o próprio relatório reconhece como não comparáveis entre si [6]. E falta o enquadramento jurídico: memória de agente ainda não foi classificada como dado pessoal, segredo de empresa, obra derivada ou arquivo — e cada uma dessas classificações produz um mundo diferente.

### Disrupção 3 — A avaliação vira função com consequência, e o avaliador vira objeto de auditoria

**O que rompe.** Rompe a ideia de que qualidade é atributo do código e responsabilidade de quem o escreve. Avaliar um sistema não determinístico exige, na prática, um segundo sistema não determinístico dando nota ao primeiro — e isso desloca a pergunta de "o sistema presta?" para "quem certifica quem certifica?". A ruptura é a emergência de uma função separada, com orçamento, conflito de interesse e responsabilidade própria, análoga ao que a auditoria contábil fez com a contabilidade: a nota deixa de ser métrica interna e vira ato com consequência para terceiros.

**Por que agora e não há cinco anos.** Porque a fragilidade do juiz automático saiu do boato e virou medição: 21 juízes, ~541 mil julgamentos, consistência alta com validade baixa, rankings do mesmo juiz variando até 14 posições conforme o benchmark [8]; e o usuário simulado, base da avaliação agêntica interativa, mostrou-se enviesado por demografia linguística [9]. Porque já existe a norma que audita o auditor (ISO 42006:2025) e um mercado de certificação em primeira onda [10]. E porque apareceu avaliação com consequência material — arenas em que modelos operam capital real, com resultado público e disputa pública sobre o que aquilo mede [11].

**O que falta para se concretizar.** Falta meta-avaliação padronizada: não há framework unificado para comparar juízes em pé de igualdade [8]. Falta separar institucionalmente quem constrói de quem avalia — hoje a mesma equipe escreve o agente e a rubrica que o aprova. Falta responsabilidade legal definida: quando um agente erra, ninguém ainda processou o avaliador. E falta resolver o conflito de interesse na raiz: certificadora paga pelo certificado é o desenho que produziu as crises da auditoria contábil e das agências de rating, e nada indica que a versão de IA nasça imune.

## Seção 5 — A roda dos futuros

```yaml
roda_dos_futuros:
  - id: e1
    efeito: "O artefato entregue deixa de ser o resultado e passa a ser o percurso re-executável"
    sinal: moderado
    prazo: "2027-2030"
    confianca: media
    filhos:
      - id: e1.1
        efeito: "Contratos de fornecimento passam a exigir a entrega do trace junto com o produto"
        sinal: fraco
        prazo: "2028-2031"
        confianca: baixa
        filhos:
          - id: e1.1.1
            efeito: "Consolida-se um 'pacote de prova' (trace + fixtures + versões) trocado entre fornecedor e cliente"
            sinal: fraco
            prazo: "2029-2031"
            confianca: baixa
          - id: e1.1.2
            efeito: "Revisão de trabalho em equipe migra de ler o resultado para julgar o caminho"
            sinal: fraco
            prazo: "2028-2030"
            confianca: media
      - id: e1.2
        efeito: "Replay determinístico entra no ambiente padrão de desenvolvimento e de suporte"
        sinal: moderado
        prazo: "2027-2029"
        confianca: media
        filhos:
          - id: e1.2.1
            efeito: "Testes de regressão passam a rodar sobre traces gravados em produção, não sobre casos escritos à mão"
            sinal: fraco
            prazo: "2028-2031"
            confianca: media

  - id: e2
    efeito: "Observar o agente vira um problema de projeto tão caro quanto executá-lo"
    sinal: moderado
    prazo: "2027-2030"
    confianca: media
    filhos:
      - id: e2.1
        efeito: "Gravar conteúdo (prompt e resposta) vira decisão jurídica, não técnica"
        sinal: moderado
        prazo: "2027-2029"
        confianca: media
        filhos:
          - id: e2.1.1
            efeito: "Empresas separam telemetria de estrutura (sempre ligada) de telemetria de conteúdo (sob consentimento)"
            sinal: fraco
            prazo: "2028-2030"
            confianca: media
          - id: e2.1.2
            efeito: "Primeiro incidente grande de vazamento de dados pessoais ocorre dentro de um lago de traces, não do banco de produção"
            sinal: fraco
            prazo: "2027-2031"
            confianca: baixa
      - id: e2.2
        efeito: "A convenção semântica de telemetria vira campo de disputa entre plataformas"
        sinal: forte
        prazo: "2026-2029"
        confianca: media
        filhos:
          - id: e2.2.1
            efeito: "Portabilidade de trace entra como critério em compra pública e em cláusula de saída de contrato"
            sinal: fraco
            prazo: "2029-2031"
            confianca: baixa

  - id: e3
    efeito: "A memória entre sessões vira ativo com dono ambíguo entre pessoa, equipe e plataforma"
    sinal: moderado
    prazo: "2027-2030"
    confianca: media
    filhos:
      - id: e3.1
        efeito: "Pessoas passam a levar — ou a perder — memória de trabalho ao trocar de projeto ou de emprego"
        sinal: fraco
        prazo: "2028-2031"
        confianca: media
        filhos:
          - id: e3.1.1
            efeito: "Cláusula sobre memória de agente entra em contrato de trabalho e em rescisão"
            sinal: fraco
            prazo: "2029-2031"
            confianca: baixa
          - id: e3.1.2
            efeito: "Exportar a memória do agente passa a ser reivindicado como direito, por analogia à portabilidade de dados"
            sinal: fraco
            prazo: "2029-2032"
            confianca: baixa
      - id: e3.2
        efeito: "Trocar de modelo fica trivial; trocar de camada de memória, não — e o lock-in migra de andar"
        sinal: moderado
        prazo: "2027-2030"
        confianca: media
        filhos:
          - id: e3.2.1
            efeito: "O preço do modelo vira commodity e a assinatura se ancora na camada que lembra"
            sinal: fraco
            prazo: "2028-2031"
            confianca: media

  - id: e4
    efeito: "Higiene de memória vira disciplina de produto: esquecer, tipar e datar passam a ser requisitos"
    sinal: fraco
    prazo: "2027-2030"
    confianca: media
    filhos:
      - id: e4.1
        efeito: "Memória ganha tipo, proveniência e prazo de validade em vez de ser texto solto num índice"
        sinal: moderado
        prazo: "2027-2029"
        confianca: media
        filhos:
          - id: e4.1.1
            efeito: "Interfaces passam a mostrar 'por que eu lembrei disto', com origem e data, como elemento comum de tela"
            sinal: fraco
            prazo: "2028-2031"
            confianca: media
          - id: e4.1.2
            efeito: "Contaminação de memória vira categoria própria de incidente, com resposta e post-mortem padronizados"
            sinal: fraco
            prazo: "2028-2031"
            confianca: media
      - id: e4.2
        efeito: "Equipes se dividem entre memória compartilhada e memória individual, e a escolha vira política interna"
        sinal: fraco
        prazo: "2028-2031"
        confianca: baixa
        filhos:
          - id: e4.2.1
            efeito: "Memória de equipe reproduz e amplifica o erro de quem tem mais antiguidade, por peso de frequência"
            sinal: fraco
            prazo: "2029-2032"
            confianca: baixa

  - id: e5
    efeito: "Avaliar deixa de ser etapa do desenvolvimento e vira função separada, com orçamento próprio"
    sinal: moderado
    prazo: "2027-2030"
    confianca: media
    filhos:
      - id: e5.1
        efeito: "Consolida-se o cargo de avaliador de agentes, institucionalmente separado de quem constrói"
        sinal: moderado
        prazo: "2027-2030"
        confianca: media
        filhos:
          - id: e5.1.1
            efeito: "Conselhos e diretorias passam a exigir parecer de avaliação antes de liberar agente com poder de gasto"
            sinal: fraco
            prazo: "2029-2031"
            confianca: media
          - id: e5.1.2
            efeito: "A certificação acreditada se estende de gestão de IA para desempenho de agente específico"
            sinal: fraco
            prazo: "2029-2032"
            confianca: baixa
      - id: e5.2
        efeito: "Benchmark público perde valor de decisão e a avaliação vira privada, situada e fechada"
        sinal: moderado
        prazo: "2027-2029"
        confianca: media
        filhos:
          - id: e5.2.1
            efeito: "Cada organização mantém seu conjunto-ouro como segredo comercial, e a comparabilidade entre empresas some"
            sinal: fraco
            prazo: "2028-2031"
            confianca: media

  - id: e6
    efeito: "O juiz automático vira objeto de auditoria, e a avaliação com consequência material se espalha"
    sinal: moderado
    prazo: "2027-2031"
    confianca: media
    filhos:
      - id: e6.1
        efeito: "Meta-avaliação (auditar o juiz) vira requisito de entrega, não refinamento acadêmico"
        sinal: moderado
        prazo: "2027-2030"
        confianca: media
        filhos:
          - id: e6.1.1
            efeito: "Divergência entre juízes passa a ser publicada junto com o score, como margem de erro"
            sinal: fraco
            prazo: "2028-2030"
            confianca: media
          - id: e6.1.2
            efeito: "Litígio sobre decisão automatizada passa a atacar o avaliador e a rubrica, não o modelo"
            sinal: fraco
            prazo: "2029-2032"
            confianca: baixa
      - id: e6.2
        efeito: "Arenas com consequência real (dinheiro, entrega, reputação) substituem tabelas de acerto como critério público"
        sinal: fraco
        prazo: "2027-2031"
        confianca: baixa
        filhos:
          - id: e6.2.1
            efeito: "Seguradoras começam a precificar risco de agente por histórico auditável de execução, não por declaração do fornecedor"
            sinal: fraco
            prazo: "2029-2032"
            confianca: baixa
```

**O que o bloco não exprime sozinho.** Três coisas. Primeira: os efeitos com sinal mais forte não estão nas pontas conceituais (e1, e5) e sim na briga de padrão (e2.2, único `sinal: forte` do mapa) — o que sugere que o que vai decidir este campo até 2031 não é a melhor ideia de avaliação, e sim quem controla o formato do rastro. Segunda: há uma assimetria de prazo entre memória e auditoria que o YAML só insinua. A memória avança por produto, e produto anda rápido; a auditoria avança por regra, e a regra acabou de andar para trás — o adiamento europeu para dezembro de 2027 [2] cria uma janela de três a quatro anos em que os agentes vão lembrar muito mais do que qualquer um é obrigado a registrar. É nessa janela que se formam os fatos consumados. Terceira: os ramos e3 e e5 colidem e o bloco não mostra a colisão. Se a memória vira ativo da plataforma (e3.2) e a avaliação vira privada e fechada (e5.2), o resultado combinado é um mercado em que ninguém consegue comparar nada com nada — nem trocar de fornecedor, nem verificar a nota do concorrente. O mapa tem, portanto, um atrator não desenhado: opacidade por acúmulo, não por segredo.

## Seção 6 — Sinais fracos e wildcards

**Sinais fracos** (coisas pequenas hoje, com mecanismo causal identificável):

1. **A extração do repositório.** Em junho de 2026 as convenções GenAI saíram do repositório principal do OpenTelemetry para um repositório próprio, sem release marcado [4]. Parece detalhe de governança; é o indicador de que o padrão vai versionar em ritmo próprio, e portanto de que a portabilidade do rastro vai piorar antes de melhorar.
2. **Contaminação de memória como objeto de pesquisa com defesa nomeada** [7]. Quando uma falha ganha nome, taxonomia e ferramenta específica, ela está a poucos anos de virar categoria de incidente operacional — e categoria de incidente é o que faz seguro e auditoria existirem.
3. **A consistência sem validade dos juízes** [8]. O sinal fraco não é "o juiz erra": é que ele erra de forma *estável*, o que o torna confiável para quem só mede repetibilidade. Sistemas que parecem confiáveis e não são passam por qualquer processo de compliance.
4. **O usuário simulado com viés linguístico** [9]. A avaliação agêntica que usa LLM como usuário já subestima sistematicamente o desempenho para falantes de variantes não padronizadas — um viés que entra na régua antes de entrar no produto, e que ninguém está obrigado a reportar.
5. **A certificação de quem certifica** (ISO 42006) já existir antes de o mercado de certificação existir de fato [10]: a infraestrutura da auditoria de IA está sendo montada antes da demanda, o que é raro e costuma anteceder profissionalização rápida.
6. **A disputa sobre o que a arena mede.** A cobertura das arenas de avaliação com capital real já vem acompanhada da ressalva de que os resultados "não são registros auditados de fundo" e de que desempenho de curto prazo não implica vantagem de longo prazo [11] — a discussão metodológica nasceu junto com o formato, o que acelera a chegada de manipulação e de regras.

**Wildcard (baixa probabilidade, alto impacto).** Um incidente de larga escala em serviço público — benefício negado, diagnóstico errado, prisão indevida — em que a instituição responsável **não consegue reconstruir o que o agente fez**, porque o rastro não foi guardado ou não pôde ser re-executado. A consequência não seria uma multa: seria a inversão do ônus da prova. Passaria a valer, por regra ou por jurisprudência, que decisão de IA sem percurso reconstituível é decisão nula. Isso antecipa em anos toda a Disrupção 1, torna a Disrupção 3 obrigatória (alguém precisa atestar a reconstituição) e, de quebra, mata parte da Disrupção 2: memória que não pode ser auditada vira passivo, e produtos passam a competir por *esquecer* de forma demonstrável. Um único caso bem documentado reorganizaria o mapa inteiro — e o adiamento europeu [2] aumenta, não diminui, a chance de ele acontecer antes da regra.

## Seção 7 — Contra o próprio mapa (teste adversarial)

**Extrapolação linear.** O mapa assume que a curva regulatória continua subindo — que o Artigo 12 vira exigência efetiva e puxa o resto. A evidência aponta para o contrário: o prazo de alto risco foi empurrado de agosto de 2026 para dezembro de 2027, e o dos produtos regulados para 2028 [2]. Adiamento uma vez é adiamento; duas vezes é tendência. Um mapa honesto tem de admitir a possibilidade de que a obrigação de trilha de auditoria seja sucessivamente diluída até virar declaração de conformidade autoatestada — cenário em que quase toda a terceira ordem do ramo e1 simplesmente não acontece.

**Velocidade de adoção irreal.** Tratar "revisão de percurso" como prática corrente até 2029 (e1.1.2) subestima brutalmente a inércia de hábito. Revisão de código levou vinte anos para virar norma, com ferramenta madura e benefício óbvio. Ler o caminho de um agente é mais caro, mais chato e menos gratificante do que ler um diff — e a economia de atenção de quem revisa trabalha contra. O mais provável é que o replay se estabeleça como ferramenta de *incidente* (usada quando algo quebra), não de *rotina*, o que rebaixa e1 de ruptura a utilidade.

**Falha da disrupção.** A Disrupção 2 é a mais frágil das três, e por uma razão que o mapa quase escondeu: não há evidência independente de que memória de longo prazo melhora resultado o bastante para justificar o custo. Os números disponíveis vêm de fornecedores de memória, em benchmarks que o próprio relatório admite não serem comparáveis entre si, com queda de 25% de desempenho quando a escala cresce de 1M para 10M tokens [6]. É plenamente possível que, até 2031, "memória" tenha se dissolvido de volta em contexto barato e recuperação sob demanda — e que o ativo que este mapa projeta como disputado nunca chegue a valer o bastante para ser disputado.

**Viés pessoal do autor (e da IA que redigiu).** Há dois vieses somados aqui. O da skill: ela obriga a encontrar exatamente três disrupções-raiz e trinta e seis efeitos, o que produz simetria onde a realidade não tem — o ramo e4, por exemplo, está mais fraco que os outros e sobreviveu por preencher a cota. O do redator: este texto foi escrito por um agente que *tem* memória entre sessões e *é* avaliado por rastro, e há um interesse estrutural embutido em narrar essa infraestrutura como inevitável e virtuosa. A leitura cínica cabe e não foi suficientemente perseguida: observabilidade é, também, vigilância de trabalhador com outro nome; memória de equipe é, também, dossiê; e a "profissão de avaliador" pode nascer já capturada por quem paga o certificado, como aconteceu com rating de crédito.

## Seção 8 — O que a máquina errou

1. **Data errada de entrada em vigor da obrigação de log.** Uma busca devolveu, com aparência de fato assentado, que "as obrigações de alto risco passam a ser exigíveis em 2 de agosto de 2026". O texto foi rascunhado com essa data. Ao abrir a página do Artigo 12, a data que constava era 2 de dezembro de 2027 [1]; a checagem no material jurídico sobre o Digital Omnibus confirmou o adiamento e trouxe também o novo prazo do Anexo I (2 de agosto de 2028) e o que *não* foi adiado (Artigo 50, transparência) [2]. Corrigido em toda a Seção 3, na Disrupção 1 e no teste adversarial — a correção inverteu o sentido do argumento: a regra não está chegando, está atrasando.

2. **Número de regulamento não confirmado.** O resumo de busca afirmava que o Digital Omnibus foi adotado como "Regulamento (UE) 2026/1744, publicado em 24 de julho de 2026". A página que efetivamente foi aberta não traz esse número [2]. O identificador foi removido do texto e a afirmação ficou restrita ao que a fonte aberta sustenta (prazos novos e o que permaneceu). Número de regulamento é exatamente o tipo de detalhe que soa verificável e passa sem checagem.

3. **Cifras de memória tratadas como fato, sendo alegação de fornecedor.** Os scores de LoCoMo e LongMemEval (92,5 / 94,4 para um sistema, 71,2 para outro) entraram no rascunho como medida neutra. São publicados por um dos fornecedores comparados, que admite no mesmo documento que os números usam modelos e configurações diferentes e não são diretamente comparáveis [6]. O texto foi reescrito para citar apenas a estrutura dos benchmarks e as limitações admitidas, e para marcar explicitamente a origem interessada — e isso virou argumento da Seção 7 ("falha da disrupção").

4. **Cifra da arena de avaliação com dinheiro real não verificada.** O valor de dez mil dólares por modelo apareceu no enunciado do tema e no resumo de busca. A fonte primária (site da própria arena) devolveu HTTP 429 e não pôde ser aberta; a fonte de terceiros que foi aberta não confirma o montante, menciona a temporada 1.5 encerrada em dezembro de 2025, o vencedor e as ressalvas metodológicas [11]. O mapa passou a citar o formato e a disputa sobre o que ele mede, sem afirmar o valor.

5. **Simplificação preguiçosa sobre juiz automático.** A primeira formulação foi "os juízes automáticos são inconsistentes". A leitura do estudo mostra o contrário e é mais interessante: confiabilidade teste-reteste acima de 0,95, viés de verbosidade pequeno (<0,011), e ainda assim deflação de kappa de 33 a 41 pontos e rankings variando até 14 posições entre benchmarks [8]. O título do próprio trabalho — confiabilidade sem validade — corrigiu o raciocínio e reposicionou a Disrupção 3: o problema não é ruído, é uma régua estável que mede outra coisa.

6. **Disrupção candidata reprovada no próprio filtro.** "Painéis de observabilidade para LLM" quase entrou como disrupção-raiz por ser o tema mais visível do campo. Foi recusada pela Etapa 2: logs, métricas e traços de aplicação são tecnologia madura, e o que existe hoje nas oito plataformas comparadas [5] é adaptação competente de APM a um novo objeto — melhoria incremental, não ruptura. O que sobreviveu ao filtro foi o que essas plataformas ainda não entregam: o rastro como prova re-executável e portátil.

## Seção 9 — Três cenários para 2031

**Provável.** Em 2031, gravar tudo é rotina e reconstituir quase nada é possível. Toda equipe que opera agentes tem lago de traces, painel e alerta; o replay determinístico existe e é usado — quando algo quebra, não quando algo funciona. A convenção de telemetria estabilizou tarde e em duas famílias concorrentes, de modo que exportar rastro entre plataformas continua sendo projeto de migração, e "portabilidade" virou cláusula que ninguém testa. A memória virou produto: as pessoas percebem, no dia em que trocam de emprego ou de ferramenta, que dois anos de contexto ficaram do outro lado — e reclamam sem ter a quem recorrer, porque a classificação jurídica desse acervo continua indefinida. A avaliação se profissionalizou por dentro: existem equipes de avaliação separadas nas empresas grandes, com conjunto-ouro próprio e fechado, o que tornou impossível comparar duas organizações. O juiz automático permanece central e permanece sem meta-avaliação padronizada; publica-se o score, não a divergência entre juízes. A Europa exige registro desde dezembro de 2027 para uma lista estreita de sistemas de alto risco, e o resto do mundo trata isso como problema europeu. No Brasil, a regra chegou por outro caminho — setorial, via consumidor e via banco central — e pega menos do que a discussão de 2026 imaginava.

**Desejável.** Em 2031, o percurso é um artefato de primeira classe e ele é *legível*. Existe um formato comum de pacote de prova — rastro, insumos, versões, semente — que atravessa fornecedores, e entregar trabalho feito por agente sem ele soa tão estranho quanto entregar planilha sem fórmula. Mostrar o caminho virou problema de design resolvido com competência: interfaces que exibem o que o agente tentou, o que descartou e por que lembrou de algo, com origem e data à vista, e que permitem ao usuário apagar uma memória e ver a consequência disso. A memória é portátil por padrão e tem prazo: esquecer é feature anunciada, não omissão. Avaliação é função separada, com divergência entre juízes publicada junto do score como margem de erro, e com a régua auditável por terceiros — e o conflito de interesse estrutural da certificação foi atacado de frente, com avaliador remunerado por rodízio e não pelo avaliado. Nada disso tornou os agentes mais confiáveis por decreto; tornou possível descobrir, em tempo útil, quando não são.

**Indesejável.** Em 2031, a infraestrutura de confiança virou infraestrutura de controle e de captura. O rastro completo de cada decisão existe, mas aponta para dentro: é usado para medir pessoas — quantas vezes aceitaram a sugestão, quanto tempo levaram para revisar, quem discordou do agente — e a observabilidade do sistema virou vigilância do trabalhador com nome de engenharia. A memória acumulada é o ativo, e é da plataforma: mudar de fornecedor custa perder o histórico da equipe inteira, o preço do modelo virou irrelevante e a assinatura se ancora no que lembra, com aumento anual que ninguém pode recusar. A avaliação virou teatro de conformidade: certificadora paga pelo certificado, rubrica escrita por quem constrói, juiz automático aprovando por estilo e não por acerto — estável, reprodutível e sistematicamente errado do mesmo jeito, que é a forma mais difícil de erro para se detectar. E a única trilha de auditoria universal que existe é a das plataformas sobre seus usuários, não a dos cidadãos sobre as decisões que os atingem.

## Seção 10 — O experimento

**O que é.** Um teste cego de percurso. Duas equipes recebem a mesma tarefa de mídia/interação — por exemplo, "produzir três variações de uma tela de onboarding e justificar a escolha" — e a executam com um agente, gravando tudo: prompts, respostas, chamadas de ferramenta, tentativas abandonadas, correções. Não é preciso construir nada novo: basta uma sessão de terminal com transcript, ou um proxy simples registrando as requisições. O produto de cada equipe é separado do seu rastro. Em seguida, a turma inteira recebe **só os rastros**, sem os resultados, e julga qual dos dois trabalhos deve ser aceito. Depois recebe **só os resultados**, sem os rastros, e julga de novo. Por fim, compara-se o veredito das duas rodadas.

**Pergunta sobre o futuro.** Se o percurso vira a prova, ele é *julgável* por humanos? A confiança que depositamos num trabalho feito por agente vem do produto ou do caminho — e as duas leituras concordam entre si?

**Tecnologia emergente usada.** Gravação e re-execução de trace de agente (o princípio do replay determinístico [3]) e as categorias de telemetria que o OpenTelemetry ainda está tentando padronizar [4] — usadas aqui na versão pobre e construível hoje: log estruturado de uma sessão real, com separação explícita entre telemetria de estrutura e telemetria de conteúdo.

**Atividade da turma.** Três rodadas com papéis. Rodada 1: cada aluno julga os dois rastros sozinho e registra sua nota e o motivo, sem ver os produtos. Rodada 2: julga os dois produtos sem ver os rastros. Rodada 3, em grupo: metade da turma assume o papel de *avaliador* (defende a nota dada ao percurso) e metade o papel de *autor* (defende o resultado), e a discussão é forçada a chegar num critério escrito — uma rubrica de duas páginas dizendo o que faz um percurso ser aceitável. A rubrica produzida pela turma é, ela própria, o objeto final de crítica: quem consegue burlá-la?

**Resultado de mudança de ideia esperado.** A expectativa é que a turma chegue acreditando que ver o caminho aumenta a confiança, e descubra três coisas incômodas. Primeira: julgar percurso é lento e cansativo — em dez minutos de rastro, a atenção acaba, o que explica por que revisão de percurso pode nunca virar rotina (ramo e1 do mapa). Segunda: os vereditos das duas rodadas frequentemente divergem, e quando divergem ninguém sabe qual está certo — que é exatamente o problema da confiabilidade sem validade [8], só que sentido na própria pele. Terceira: ao escrever a rubrica, a turma vira o avaliador — e descobre, ao tentar burlá-la, que escrever a régua é escrever o comportamento. Quem sai da aula tendo defendido as duas posições não volta a tratar "avaliação" como etapa técnica no fim do processo.

## Seção 11 — Fontes

1. **Article 12: Record-Keeping — EU Artificial Intelligence Act.** Sustenta: o texto da obrigação de registro automático de eventos para sistemas de alto risco e as datas de aplicabilidade (Anexo III em 2/12/2027; Anexo I em 2/8/2028), usadas na Seção 3, na Disrupção 1 e na Seção 8. Confiabilidade: alta. https://artificialintelligenceact.eu/article/12/
2. **EU AI Act Omnibus Agreement — Postponed High-Risk Deadlines and Other Key Changes — Gibson Dunn.** Sustenta: o adiamento dos prazos de alto risco (agosto/2026 → dezembro/2027; 2027 → agosto/2028; sandboxes → agosto/2027) e a permanência do Artigo 50; base do argumento da janela regulatória na Seção 5 e na Seção 7. Confiabilidade: alta. https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/
3. **Deterministic Replay for AI Agent Systems — arXiv:2607.16200.** Sustenta: o `agrepl`, replay via proxy MITM na camada de transporte, fidelidade F = 1.0, redução mediana de 98,3% de latência por etapa, 250 instâncias em cinco cargas; base técnica da Disrupção 1 e do experimento. Confiabilidade: alta. https://arxiv.org/abs/2607.16200
4. **OpenTelemetry's GenAI semantic conventions are NOT stable yet — here's what actually shipped in 2026 — DEV Community.** Sustenta: status "Development" de todos os atributos `gen_ai.*` em julho/2026, extração para repositório próprio em 12/6/2026, renomeações (`gen_ai.system` → `gen_ai.provider.name`), captura de conteúdo como opt-in; base da Seção 3 e do efeito e2.2. Confiabilidade: média (post técnico com rastreabilidade a versões e repositórios, não fonte oficial). https://dev.to/azena-ai/opentelemetrys-genai-semantic-conventions-are-not-stable-yet-heres-what-actually-shipped-in-2026-3mke
5. **Top LLM Observability and Evaluation Platforms in 2026 — MarkTechPost.** Sustenta: o mapa de oito plataformas (Langfuse/ClickHouse, LangSmith, Braintrust, Arize AX/Phoenix, MLflow, W&B Weave, Helicone, Datadog), o que o trace captura, e o julgamento de maturidade que levou à recusa de "painel de observabilidade" como disrupção. Confiabilidade: média (comparativo editorial; números de mercado citados não foram verificados em fonte primária e por isso não foram usados no texto). https://www.marktechpost.com/2026/08/09/top-llm-observability-and-evaluation-platforms-in-2026-langfuse-langsmith-braintrust-arize-and-more-compared/
6. **State of AI Agent Memory 2026 — Mem0.** Sustenta: estrutura dos benchmarks (LoCoMo 1.540 perguntas; LongMemEval 500; BEAM 1M/10M), queda de 25% na abstração temporal (64,1 → 48,6) e as cinco limitações admitidas, incluindo ausência de arquitetura de privacidade/consentimento; base da Disrupção 2 e da Seção 7. Confiabilidade: baixa para os scores (fonte é fornecedor comparando-se a concorrentes), média para as limitações admitidas. https://mem0.ai/blog/state-of-ai-agent-memory-2026
7. **MemGuard: Preventing Memory Contamination in Long-Term Memory-Augmented Large Language Models — arXiv:2605.28009.** Sustenta: contaminação heterogênea de memória, memória tipada por papel funcional, ganho de até 28,27% em confiabilidade com até 5,8× menos tokens recuperados; base do efeito e4.1 e do sinal fraco 2. Confiabilidade: alta. https://arxiv.org/abs/2605.28009
8. **Reliability without Validity: A Systematic, Large-Scale Evaluation of LLM-as-a-Judge Models — arXiv:2606.19544.** Sustenta: 21 juízes de nove provedores, ~541 mil julgamentos em 118 execuções, teste-reteste > 0,95, deflação de kappa de 33–41 p.p. no MT-Bench, viés de verbosidade < 0,011, rankings variando até 14 posições; base da Disrupção 3, da Seção 8 e do experimento. Confiabilidade: alta. https://arxiv.org/abs/2606.19544
9. **Lost in Simulation: LLM-Simulated Users are Unreliable Proxies for Human Users in Agentic Evaluations — arXiv:2601.17087.** Sustenta: variação de até 9 p.p. na taxa de sucesso do agente conforme o LLM que simula o usuário, descalibração sistemática e pior desempenho como proxy para falantes de AAVE e inglês indiano, em τ-Bench; base da Seção 3 e do sinal fraco 4. Confiabilidade: alta. https://arxiv.org/abs/2601.17087
10. **ISO 42006 Explained: Auditor Accreditation for ISO 42001 — AI Compliance Vendors.** Sustenta: ISO/IEC 42006:2025 publicada em 7/7/2025 como requisito para organismos certificadores, com competência exigida no nível da equipe de auditoria; base da Disrupção 3 e do efeito e5.1.2. Confiabilidade: média (fonte comercial do setor de conformidade, consistente com a descrição pública da norma). https://aicompliancevendors.com/blog/iso-42006-explained-auditor-accreditation-iso-42001
11. **AI Stock Trading Competitions 2026: Inside NoF1.ai Alpha Arena vs Rallies.ai — One Day Advisor.** Sustenta: existência e formato das arenas de avaliação com operação real, encerramento da temporada 1.5 em dezembro de 2025 e as ressalvas metodológicas (universo restrito de ativos, resultados não auditados, curto prazo não implica vantagem); base do efeito e6.2 e da Seção 8, item 4. Confiabilidade: baixa (cobertura secundária; a fonte primária, nof1.ai, retornou HTTP 429 e não pôde ser aberta). https://www.onedayadvisor.com/2026/01/AI-stock-trading.html
12. **PL da IA avança na Câmara, mas Redata e impasse com o Senado travam o calendário — Grownt.** Sustenta: status do PL 2338/2023 em maio de 2026 (votação prevista na comissão em 19/5 e no plenário em 27/5), o impasse com o Senado, e a ausência de detalhamento público sobre obrigações de registro e rastreabilidade; base da nota sobre o Brasil na Seção 3 e no cenário provável. Confiabilidade: média. https://grownt.tech/pl-da-ia-avanca-na-camara-mas-redata-e-impasse-com-o-senado-travam-o-calendario/

## Seção 12 — Anexo: o levantamento bruto

**Perguntas da Etapa 1, como a skill as faz, e as respostas recebidas:**

1. *Tema da análise* → "A infraestrutura de confiança: memória, observabilidade e avaliação de agentes" (tema 3 de 19 da disciplina; família "Agentes").
2. *Horizonte temporal* → 2031.
3. *Público-alvo* → quem projeta mídia e interação.
4. *Recorte geográfico* → global, com uma nota sobre o Brasil.
5. *Premissas descartadas e viés* → descartar de início o que já é comum em produto de massa (a régua da disciplina); nenhuma outra exclusão; viés declarado neutro; excluir ideias óbvias que serviriam para qualquer tema; nenhuma disrupção suspeita indicada — instrução explícita de descobrir. Critério de mudança de ideia fornecido: evidência de que a adoção já passou da maioria inicial (Rogers), ou de que a tecnologia não rompe nada (só melhora o que existe).
6. *Tecnologias/vetores de interesse* → nenhum vetor imposto; profundidade em três ordens; modo de análise a partir de uma inovação/tema, não de um setor. Instrução operacional adicional: usar busca na web de verdade e citar apenas o que foi efetivamente aberto.

*Observação de método:* a Etapa 1 prevê BLOQUEIO ABSOLUTO até o usuário responder. Nesta execução não havia interlocutor humano disponível na sessão; as respostas acima foram fornecidas por escrito, na íntegra, antes do início da Etapa 2, e o bloqueio foi satisfeito por elas. Nenhuma resposta de entrevista foi presumida pela IA.

**Aplicação da Etapa 2 — candidatas RECUSADAS por tecnologia madura ou incremental:**

- *Painéis de observabilidade de LLM (traces, métricas, custo por chamada).* Recusado: é APM adaptado a um objeto novo. Oito plataformas maduras disputam esse mercado com paridade de funcionalidade [5]; logs e métricas de aplicação são, pelo enunciado da própria disciplina, tecnologia madura. Não rompe: melhora o que já existe.
- *Teste unitário e CI para prompts (prompt regression testing).* Recusado: é prática de engenharia consolidada transposta. Não cria comportamento novo nem ecossistema novo.
- *RAG como "memória".* Recusado: recuperação sob demanda em corpus estático é técnica amplamente adotada desde 2023, e o próprio campo já separa capacidade (contexto) de continuidade (memória) [6]. Chamar RAG de memória é renomear o maduro.
- *Janela de contexto maior.* Recusado: é melhoria de hardware/modelo. Aumentar a janela não produz acúmulo entre sessões — o problema desta disrupção é continuidade, não capacidade.
- *Banco vetorial.* Recusado: infraestrutura de armazenamento madura; substrato, não ruptura.
- *"LLM-as-judge" como disrupção em si.* Recusado na forma proposta: usar um modelo para dar nota já é prática corrente em todas as plataformas comparadas [5]. O que sobreviveu ao filtro foi a camada acima — auditar o juiz, e avaliação com consequência material —, que ainda não existe.

**Candidatas ACEITAS e o teste de ruptura aplicado a cada uma:** ver Seção 4 (prova migra para o percurso; memória vira ativo disputado; avaliação vira função auditada). As três passaram no critério "ainda não se concretizaram por completo" e no critério de mudança de ideia fornecido pelo usuário: nenhuma passou da maioria inicial, e as três rompem lógica vigente em vez de acelerar processo existente.

**Efeitos cortados da Roda dos Futuros:**

- *"Manipulação de arena de avaliação com dinheiro real — equivalente a insider trading de benchmark"* (seria e6.2.2): cortado do bloco por excesso de cota (a roda fecharia em 19 efeitos de terceira ordem, e o formato exige 18). Preservado na Seção 6 como sinal fraco 6, que é onde ele efetivamente está hoje.
- *"A sociedade passa a confiar mais em sistemas auditáveis"*: cortado por ser afirmação genérica sem mecanismo causal — serviria para qualquer tema, exatamente o tipo de ideia que a entrevista mandou excluir.
- *"Agentes passam a se auditar mutuamente"*: cortado por circularidade não resolvida — reproduz o problema do juiz automático um nível acima sem acrescentar mecanismo; parte da ideia sobreviveu, com mecanismo, em e6.1.
- *"Surge um mercado secundário de memória de agente treinada"*: cortado por depender inteiramente de uma classificação jurídica que ainda não existe (a memória ser transacionável). Especulação de quarta ordem disfarçada de terceira.
- *"Ferramentas de observabilidade se consolidam em duas ou três grandes"*: cortado por ser previsão de mercado sobre tecnologia madura, fora do escopo do filtro da Etapa 2.

**Logs das iterações:**

- Iteração 1 — busca sobre convenções semânticas GenAI do OpenTelemetry e status de padronização (busca web); abertura do post técnico com o inventário de versões e renomeações.
- Iteração 2 — busca sobre memória de agentes e benchmarks (LoCoMo, LongMemEval, BEAM); abertura do relatório de fornecedor; identificação do conflito de interesse e rebaixamento do peso das cifras.
- Iteração 3 — busca sobre arenas de avaliação com dinheiro real; fonte primária inacessível (HTTP 429); abertura de cobertura secundária; decisão de não afirmar o montante apostado.
- Iteração 4 — busca sobre obrigações de registro do AI Act; abertura do Artigo 12 e descoberta da divergência de data em relação ao resumo de busca; busca específica sobre o Digital Omnibus; abertura da análise jurídica; correção do texto e remoção do número de regulamento não confirmado.
- Iteração 5 — busca sobre confiabilidade de LLM-as-judge e sobre benchmarks agênticos; abertura dos dois artigos (auditoria de 21 juízes; usuários simulados em τ-Bench); reformulação da Disrupção 3 de "juiz inconsistente" para "confiabilidade sem validade".
- Iteração 6 — busca sobre profissionalização da auditoria de IA (ISO 42001/42006); abertura da descrição da norma de acreditação; busca sobre contaminação de memória; abertura do MemGuard.
- Iteração 7 — busca sobre replay determinístico de agentes; abertura do artigo do `agrepl`; busca e abertura de fonte sobre o PL 2338/2023 para a nota do Brasil.
- Consolidação — cruzamento das sete frentes; aplicação da Etapa 2 às candidatas listadas acima; montagem da roda de 36 nós (6 + 12 + 18); autoauditoria adversarial (Seção 7); inventário dos erros cometidos e corrigidos (Seção 8); redação final.
