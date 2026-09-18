---
tema: "A infraestrutura de confiança: memória, observabilidade e avaliação de agentes"
slug: a-infraestrutura-de-confianca-memoria-observabilidade-e-avaliacao-de-agentes
autor_login: jgpt
zona_de_interesse: Agentes
data: 2026-09-18
horizonte: 2031
publico: "quem projeta mídia e interação"
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 9
efeitos_ordem_2: 14
efeitos_ordem_3: 18
tecnologias_citadas: [OpenTelemetry GenAI semantic conventions, Langfuse, ClickHouse, Arize Phoenix, MLflow, promptfoo, Mem0, Letta, Zep, Graphiti, LoCoMo, LongMemEval, BEAM, SWE-bench Verified, tau-bench, GAIA, LLM-as-a-judge, MT-Bench, JudgeBench, RewardBench, ISO/IEC 42001, ISO/IEC 42006, EU AI Act art. 12, Digital Omnibus (Reg. UE 2026/1744), Nof1 Alpha Arena, MCP, Open Memory Protocol, MIF, memorywire]
fontes: 10
confianca: media
experimento: "Peer review cego do caminho: cada aluno entrega só o traço da execução, sem o resultado, e outro decide se aceita — medindo acerto e custo de conferir."
skill_usada: futurizacao-jgpt
publico_ok: false
---

## 1. Resumo

Quando a máquina fabrica o produto, avaliar o produto deixa de medir o produto e passa a medir a
máquina — e a pergunta de aceitação muda de "o que foi entregue?" para "por que isso está certo?".
Responder a essa segunda pergunta exige ver o caminho: cada chamada, cada ferramenta, cada
tentativa descartada. Ao mesmo tempo, o agente que lembra entre sessões para de ser ferramenta e
vira acervo. Este mapa trata das duas faces da mesma infraestrutura — a trilha e a memória — e
sustenta que três limiares foram cruzados entre 2025 e 2026: o traço ganhou vocabulário comum e
régua jurídica; a memória ganhou benchmark, preço por token e nenhuma porta de saída; e a
avaliação ganhou meta-avaliação com número, que mostrou que 85% de concordância bruta de um juiz
LLM viram ~48% depois de corrigidos por acaso. A consequência de 2031 que mais importa a quem
projeta mídia e interação não é técnica: é que parte do tempo de quem cria migra de produzir para
conferir, e que o acervo de memória — não o modelo — vira o que prende o usuário.

## 2. O tema

O objeto aqui é estreito de propósito: **saber o que o agente sabe e conferir o que ele fez**.
Não é contê-lo (tema 2), nem o ofício de programar com ele (tema 1). É a camada que permite
confiar num sistema que ninguém consegue ler por inteiro.

Ela encosta em mídia e interação em três pontos concretos. Primeiro, porque o traço é uma
**interface**: alguém precisa ler um grafo de decisões que nasceu como JSON, e ler isso é problema
de design, não de infraestrutura. Segundo, porque a memória é **relação**: um sistema que lembra o
que você pediu há oito meses se comporta como personagem contínuo, não como ferramenta, e isso
muda o que se pode projetar em cima dele. Terceiro, porque a avaliação de sistemas não
determinísticos — em que rodar duas vezes dá dois resultados — quebra o pressuposto silencioso de
todo teste de software e de todo teste de usabilidade: o de que a mesma entrada devolve a mesma
saída.

Merece mapa de futuro, e não estado-da-arte, porque as três perguntas que o tema abre não têm
resposta técnica: de quem é a memória, quem certifica o avaliador, e quem paga o custo de
conferir. São perguntas de arranjo — propriedade, profissão, prova — e arranjos se exploram por
cenário, não por catálogo de ferramentas.

## 3. Onde isso está hoje

### O que já existe e funciona

**O vocabulário do traço existe e está adotado.** As GenAI semantic conventions do OpenTelemetry
descrevem uma hierarquia em que "o span de topo `invoke_agent`" contém spans filhos para chamadas
de modelo e de ferramenta, e a documentação oficial afirma que estão "já em uso hoje e sob
desenvolvimento ativo" [F1]. O ponto importante para este mapa não é a capacidade — é o **acordo**:
plataformas concorrentes passaram a nomear a mesma coisa do mesmo jeito.

**A ferramenta de leitura existe e é commodity.** O Langfuse, plataforma aberta de tracing,
evals (inclusive LLM-as-a-judge), gestão de prompt e datasets, está em 34,7 mil estrelas no
GitHub sob licença MIT e informa no próprio README que, "desde janeiro de 2026, somos parte da
ClickHouse" [F10]. Uma aquisição por uma empresa de banco de dados colunar é o sinal mais claro de
que o gargalo da observabilidade de agente virou volume de telemetria, não modelo.

**A memória virou engenharia com métrica.** O relatório de estado de 2026 da Mem0 cita três
benchmarks padronizados — LoCoMo (1.540 perguntas multi-sessão), LongMemEval (500 perguntas em
seis categorias) e BEAM (escalas de 1M e 10M tokens) — e reporta 92,5 em LoCoMo e 94,4 em
LongMemEval, a ~6.900 tokens por consulta contra ~26.000 do algoritmo anterior; a atualização de
abril de 2026 teria dado "+29,6 pontos em raciocínio temporal e +23,1 em multi-hop" [F6]. É fonte
de fornecedor sobre o próprio produto — vale como prova de que **existe régua e existe preço**,
não como prova de superioridade.

**A régua jurídica existe, com texto.** O artigo 12 do AI Act europeu determina que sistemas de
alto risco "devem tecnicamente permitir o registro automático de eventos (logs) ao longo da vida
do sistema", com conteúdo mínimo que inclui período de cada uso, bases consultadas, dados de
entrada que produziram correspondência e identificação de quem verificou o resultado [F2]. O
artigo 26 impõe ao implantador guardar esses logs por no mínimo seis meses [F5].

**A profissão de auditor começou a existir formalmente.** A ISO/IEC 42006:2025, publicada em 7 de
julho de 2025, rege quem pode certificar um sistema de gestão de IA contra a ISO/IEC 42001:
exige que a equipe de auditoria demonstre, coletivamente, competência em tecnologia de IA,
controles do Anexo A, sistemas de gestão, obrigações legais e conhecimento setorial — e introduz
cálculo estruturado de tempo de auditoria [F9].

### O que existe e não funciona

**A memória não sai de onde entrou.** Um levantamento de julho de 2026 testou sete produtos de
memória (ChatGPT Memory, Claude Projects/Memory, Claude Tag, Gemini, Cursor, Cognee, ByteRover) e
resumiu o resultado em uma frase: "sete produtos, sete variações de não". O ZIP de conta do
ChatGPT cobre conversas — "as memórias salvas não têm exportação"; no Gemini, o Takeout cobre
atividade, mas a informação salva não é exportável em separado; no Cursor, as regras são markdown
no repositório, mas as memórias não exportam [F4]. Três propostas de intercâmbio apareceram no
primeiro semestre de 2026 — MIF, memorywire e Open Memory Protocol — e "nenhuma delas tem
governança institucional, uma segunda implementação independente ou adoção de fornecedor" [F4].

**O juiz automático é consistente sem ser válido.** O estudo *Reliability without Validity*
avaliou 21 modelos de 9 provedores em três benchmarks (MT-Bench, JudgeBench, RewardBench), em 118
rodadas e cerca de 541 mil julgamentos. Os 21 modelos apresentaram deflação de kappa de 33,8 a
41,3 pontos percentuais no MT-Bench: 85% de concordância bruta correspondem a ~48% de concordância
corrigida por acaso. E há o paradoxo consistência–viés: dois juízes em produção (Qwen 3 8B e
Gemini 2.5 Flash) tiveram confiabilidade teste-reteste acima de 0,95 **e** viés de posição acima
de 0,10 — repetem o mesmo veredito com precisão e erram sempre para o mesmo lado [F3].

**O log comum não serve de prova.** A análise de conformidade sobre logging de agentes é direta:
o logging padrão de aplicação captura chamadas de ferramenta, delegações e respostas do modelo,
mas não garante que o registro não foi alterado — e "se os seus logs podem ser silenciosamente
alterados e você não consegue demonstrar o contrário, o valor probatório deles é zero" [F5].

**O prazo regulatório escorregou.** O Digital Omnibus on AI adiou as obrigações de alto risco:
sistemas autônomos do Anexo III de 2 de agosto de 2026 para **2 de dezembro de 2027**, e IA
embarcada em produtos regulados (Anexo I) para 2 de agosto de 2028. O acordo político provisório
é de 6 de maio de 2026. As obrigações de transparência do artigo 50 **não** foram adiadas, com
exceção de uma carência de quatro meses para marca d'água [F7]. A página de referência do artigo
12 já registra as novas datas [F2].

**A avaliação com consequência real começou e parou.** A Alpha Arena da Nof1 deu US$ 10.000 reais
a cada um de seis modelos (Qwen3 Max, DeepSeek Chat V3.1, Claude Sonnet 4.5, Grok 4, Gemini 2.5
Pro, GPT-5) para operar cripto. Ranking final: Qwen3 Max +22,3%; DeepSeek +4,89%; Claude −30,81%;
Grok −45,3%; Gemini −56,71%; GPT-5 −62,66% [F8]. A própria análise adverte que "um retorno final
esconde o caminho percorrido até ele" e que o resultado não estabelece superioridade geral de
nenhum modelo [F8]. Segundo cobertura secundária que **não consegui abrir** (o site nof1.ai
devolveu HTTP 429), as competições públicas mais recentes continuavam sendo as temporadas 1 e 1.5,
de fins de 2025 — ou seja, o sinal mais forte de avaliação com consequência real não se repetiu em
escala em 2026. **Não verificado — precisa ser confirmado antes de entregar.**

### Quem está construindo

Aberto: Langfuse (ClickHouse), Arize Phoenix, MLflow, promptfoo, Letta, Mem0, Zep/Graphiti.
Fechado/plataforma: LangSmith, Braintrust, e as nuvens (Google Cloud, AWS, Azure) e a Datadog,
que aparecem como adotantes das convenções GenAI do OpenTelemetry — informação que li em resumo
de busca, **não em página de cada fornecedor**, e que portanto trato como não verificada.
Institucional: comitê de semantic conventions do OpenTelemetry; ISO/IEC (42001, 42006); Comissão
Europeia e Parlamento (AI Act, Omnibus); no Brasil, o PL 2338/2023, aprovado no Senado em dezembro
de 2024 e ainda em tramitação na Câmara em 2026 — **não verificado**, li apenas resumo de busca,
sem abrir a ficha de tramitação.

### Leitura de maturidade (heurística, não previsão)

Aplicando o Hype Cycle da Gartner apenas como diagnóstico — cobertura de demonstração ou cobertura
de adoção? —, a leitura é: tracing de LLM tem **cobertura de adoção** (números de instalação,
aquisição por infra, adoção corporativa citada); memória de agente tem cobertura mista (benchmark
e preço indicam uso, mas o discurso de comparação entre fornecedores ainda é de demonstração);
avaliação com consequência real tem **cobertura de demonstração** pura — um evento muito coberto,
sem continuidade. Isso não diz nada sobre prazo; diz só onde desconfiar.

## 4. As disrupções-raiz

### D1. O traço substitui o produto como unidade de prova

**O que rompe.** Rompe a equivalência entre "entregue" e "aceito". Enquanto o artefato era escrito
por humano, verificar o artefato bastava. Com o artefato fabricado por máquina, o artefato é
amostra de uma distribuição — e a única evidência de que ele não é um acerto por acaso está no
caminho. A unidade de avaliação migra do output para o trace.

**Por que agora e não há cinco anos.** Dois limiares concretos, ambos de 2025–2026. (a) Limiar de
**interoperabilidade**: antes não havia nome comum para "span de agente"; hoje há `invoke_agent`
com filhos para modelo e ferramenta, em convenção pública sob desenvolvimento ativo [F1], e uma
plataforma aberta MIT que a consome, com 34,7 mil estrelas, comprada por uma empresa de banco
colunar em janeiro de 2026 [F10]. (b) Limiar **jurídico**: o artigo 12 exige registro automático
ao longo de toda a vida do sistema, com itens mínimos, e o artigo 26 exige seis meses de guarda
[F2][F5]. Há cinco anos não existia nem o vocabulário nem a obrigação; o que se registrava era log
de aplicação, não decisão.

**O que ainda falta.** Falta estabilidade: a convenção segue em desenvolvimento, não é contrato
congelado [F1]. Falta legibilidade: a própria documentação reconhece que plataformas renderizam os
atributos como JSON cru, "difíceis de ler" [F1]. Falta integridade: log comum não é prova [F5]. E
falta a pressão do prazo, que escorregou 16 meses [F7] — o que enfraquece o "agora", e é a razão
de a confiança deste mapa ser média e não alta.

### D2. A memória entre sessões virou artefato com formato, custo e dono — e nasceu sem porta de saída

**O que rompe.** Rompe o pressuposto de que a relação com um sistema de IA é descartável. Se o
sistema acumula contexto, decisões e erros já cometidos, o que prende o usuário deixa de ser a
qualidade do modelo e passa a ser o acervo. Isso inverte a economia: trocar de fornecedor deixa de
ser gratuito.

**Por que agora.** (a) Limiar de **medição**: memória saiu de "janela de contexto" para sistema com
benchmark próprio (LoCoMo, LongMemEval, BEAM em 1M e 10M tokens) e custo explícito — ~6.900 tokens
por consulta contra ~26.000 antes [F6]. O que tem régua e preço é componente, e componente se
compra separado. (b) Limiar de **fechamento**: em julho de 2026, sete de sete produtos testados não
exportavam a memória destilada, e as três propostas de intercâmbio surgidas no semestre não tinham
governança, segunda implementação nem adoção [F4]. Há cinco anos não havia nem o ativo nem o
fechamento — a "memória" era um campo de sistema colado no prompt.

**O que ainda falta.** Falta a disputa jurídica: nenhuma autoridade decidiu se memória destilada é
dado pessoal portável ou obra derivada do fornecedor. Falta escala temporal: os benchmarks medem
sessões e milhões de tokens, não anos de uso contínuo — o relatório de 2026 admite queda de ~25%
entre BEAM 1M e 10M [F6]. E falta o caso público de dano — o vazamento lateral que torne o risco
tangível.

### D3. Avaliar virou ofício — e o juiz passou a ser julgado

**O que rompe.** Rompe a autoridade do número. A prática de 2024–2025 era simples: roda o
benchmark, compara a pontuação, decide. 2026 tirou o chão dos dois lados: do benchmark público,
que saturou, e do juiz automático, que se mostrou consistente sem ser válido. Sobra uma atividade
que precisa de método, de credencial e de responsabilidade — isto é, uma profissão.

**Por que agora.** (a) Limiar de **meta-avaliação com número**: 21 modelos, 3 benchmarks, 118
rodadas, ~541 mil julgamentos, deflação de kappa de 33,8–41,3 pp e o paradoxo consistência–viés
[F3]. Antes disso, criticar o juiz era opinião; agora é medida. (b) Limiar **institucional**: a
ISO/IEC 42006, de julho de 2025, define competência exigida de quem certifica — o que existe
quando um campo passa a ter porteiro [F9]. (c) Limiar de **consequência**: a Alpha Arena mostrou
que dá para avaliar com dinheiro real e dispersão brutal (de +22,3% a −62,66% entre modelos que
recebem o mesmo prompt) [F8].

**O que ainda falta.** Falta continuidade na avaliação com consequência — o experimento mais duro
parece não ter se repetido em escala (não verificado). Falta padrão de meta-avaliação: o próprio
estudo aponta a ausência de critério comum para comparar juízes em pé de igualdade [F3]. E falta
resolver o que a auditoria contábil também não resolveu: quem paga o auditor é o auditado.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "O traço substitui o produto como unidade de prova"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "Agentes em serviço passam a emitir traço em vocabulário comum, e a telemetria de raciocínio supera em volume o log de aplicação"
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "Surge uma camada de produto dedicada a LER traço — replay, diff entre execuções, marcação de ponto de decisão — porque JSON cru é ilegível para quem projeta"
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "O replay de execução vira gênero de interface tão padronizado quanto o player de vídeo, com linha do tempo, marcador de decisão e ramificação contrafactual"
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: "Quem projeta passa a desenhar para dois leitores — o usuário e o auditor — e a trilha vira superfície exposta ao usuário final como resposta à pergunta por que isso está certo"
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "O custo de reter traço integral colide com a retenção mínima exigida e nasce a amostragem seletiva de traço por risco"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "A política de amostragem vira objeto de disputa jurídica, porque quem decide o que é gravado decide o que pode ser auditado depois"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "A prova de integridade se separa do log comum e o registro inviolável vira requisito de compra, não de engenharia"
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Provedores de nuvem passam a vender traço notarizado como serviço cobrado à parte do processamento"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "A notarização vira dependência crítica e concentra poder em quem guarda a prova sobre quem é acusado por ela"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "Contratos de fornecimento de agente passam a incluir cláusula de entrega do traço ao cliente em formato aberto"
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "A entrega do traço se torna via de vazamento de prompt proprietário e de dado de terceiro, e a redação seletiva de traço vira especialidade paga"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "A pergunta de aceitação em equipe muda de passou no teste para o caminho é defensável, e a revisão de trilha entra no fluxo como o code review entrou"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "Parte do tempo de quem projeta migra de produzir para conferir, e o ofício se desloca para curadoria de evidência"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Forma-se um papel intermediário de leitor profissional de traço, entre o engenheiro e o auditor certificado, e a fronteira entre os três vira disputa de mercado"
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e3.1.2
                ordem: 3
                efeito: "Equipes que não sustentam o custo de conferir param de usar agentes em tarefa de consequência, e o uso se bifurca entre descartável e auditado"
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "A memória entre sessões virou artefato com formato, custo e dono — e nasceu sem porta de saída"
    efeitos:
      - id: e4
        ordem: 1
        efeito: "Memória de agente passa a ser comprada como componente separado do modelo, com benchmark próprio e preço por token de recuperação"
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "A qualidade percebida de um assistente descola da qualidade do modelo, e dois produtos sobre o mesmo modelo entregam experiências distintas por causa da memória"
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "O discurso de venda deixa de anunciar qual modelo roda por baixo e passa a anunciar há quanto tempo o sistema conhece você"
                sinal: fraco
                prazo: 2030
                confianca: baixa
              - id: e4.1.2
                ordem: 3
                efeito: "Trocar de assistente adquire custo percebido equivalente ao de trocar de número de telefone antes da portabilidade numérica"
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "Como a memória destilada não exporta, o acervo vira o fosso competitivo e a retenção de cliente deixa de depender da qualidade corrente do produto"
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "Aparece pressão regulatória por portabilidade de memória por analogia à portabilidade de dados, com disputa sobre se memória derivada é dado do titular ou obra do fornecedor"
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "Memória compartilhada entre pessoas da mesma equipe vira funcionalidade padrão, e com ela o vazamento lateral de contexto entre colegas"
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "Nasce controle de acesso por memória — escopo, expiração, esquecimento sob demanda — tão granular quanto permissão de arquivo"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "O que o agente da empresa lembra de você depois que você sai entra em negociação trabalhista e em cláusula de desligamento"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "A entrada de uma pessoa nova passa a incluir herdar a memória do antecessor, e o conhecimento tácito da equipe deixa de ser tácito"
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "O erro herdado se propaga em silêncio e uma decisão mal registrada em 2028 continua orientando o agente em 2031 sem que ninguém lembre o motivo"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: "Como a memória tem custo medido em tokens, ela é projetada para esquecer, e esquecer vira decisão de design com consequência atribuível"
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "A política de esquecimento vira artefato versionado, revisável e auditável, ao lado da política de retenção de log"
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "As duas metades da infraestrutura entram em contradição — a auditoria manda guardar, a memória manda descartar — e a organização precisa declarar qual delas perde"
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "Avaliar virou ofício — e o juiz passou a ser julgado"
    efeitos:
      - id: e7
        ordem: 1
        efeito: "Avaliação privada sobre a distribuição real de tarefas substitui o benchmark público como critério de compra"
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "O conjunto de avaliação vira ativo proprietário, mais difícil de copiar que o prompt e mais defendido que o modelo"
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "Organizações passam a vender acesso ao próprio eval como serviço de admissão, e provar-se nele antecede qualquer contrato"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: "Como o juiz automático tem viés medido, a calibração do avaliador entra no pipeline antes da avaliação do avaliado"
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: "A cadeia de quem calibra o calibrador não fecha tecnicamente e é resolvida por credencial e reputação, como nas demais profissões de fé pública"
                sinal: medio
                prazo: 2030
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: "A avaliação com consequência real ganha legitimidade sobre a avaliação em sandbox quando a decisão tem custo"
        sinal: fraco
        prazo: 2029
        confianca: baixa
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "Arenas com aposta real se espalham para fora de finanças — suporte, logística, moderação — com dano limitado por apólice"
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: "Surge seguro para agente em produção precificado pela qualidade do traço, e quem audita melhor paga prêmio menor"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: "A certificação de sistema de gestão de IA profissionaliza o auditor e cria escassez de gente qualificada antes de criar método consolidado"
        sinal: medio
        prazo: 2027
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: "A auditoria de IA se parte em duas — auditoria de processo e auditoria de execução sobre o traço — com formações e mercados distintos"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: "A auditoria de execução exige acesso ao traço bruto do fornecedor e o segredo industrial do modelo colide frontalmente com o dever de provar"
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e9.1.2
                ordem: 3
                efeito: "Quem certifica passa a ser certificado em cadeia, replicando a arquitetura da auditoria contábil, inclusive o conflito de quem paga ser o auditado"
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

O que o bloco não diz sozinho:

**As três subárvores não são independentes — elas colidem em e6.1.1.** A infraestrutura de
auditoria empurra para guardar tudo (obrigação legal de registro automático por toda a vida do
sistema, seis meses mínimos de retenção [F2][F5]); a infraestrutura de memória empurra para
descartar quase tudo (o ganho de 2026 foi cortar o consumo de ~26.000 para ~6.900 tokens por
consulta [F6]). São a mesma organização, o mesmo agente e duas ordens opostas. Nenhum dos
fornecedores citados trata as duas como um problema só. Este é, na minha leitura, o efeito mais
subestimado do mapa.

**A árvore D2 é a que mais interessa a quem projeta interação, e é a menos técnica.** e4.1.1 e
e4.1.2 descrevem uma mudança de gênero de produto: o assistente deixa de ser ferramenta e vira
relação com custo de saída. Quem desenha a experiência desenha, na prática, o quanto sair dói.

**Os prazos são ordem de grandeza, não data.** Onde escrevi 2028 e 2029, leia "antes do horizonte,
depois da metade". Onde escrevi 2031, leia "no limite do horizonte, se a cadeia inteira valer".

## 6. Sinais fracos e wildcards

**Emergentes rejeitadas como raiz (ficam no radar).**

- **Memória bitemporal em grafo** (Zep/Graphiti, e a família `memtrace` citada pela turma). O
  argumento é bom — separar "quando aconteceu" de "quando eu soube" resolve a maior falha das
  memórias planas. Rejeitada como raiz porque ainda não forçou mudança estrutural em quem usa: é
  uma escolha de implementação dentro do mesmo jogo. Li em resumo de busca que Zep/Graphiti marcam
  71,2% em LongMemEval contra 49% do Mem0 — **não verificado**, não abri a fonte, e é comparação
  entre concorrentes.
- **Memória sem LLM** (`deja-vu`, `memtrace`, `projectmem`: indexar o que os agentes já gravaram em
  disco, sem nova chamada de modelo). Emergente com forte apelo econômico — custo marginal quase
  zero —, mas ainda em nicho de ferramenta de desenvolvedor.
- **Redução agressiva de contexto** (`lean-ctx` e família: 60–90% menos tokens). É otimização de
  custo dentro do mesmo paradigma, não remoção de restrição. Fica no radar porque, se o corte
  chegar a uma ordem de grandeza, ele muda o que cabe numa sessão — e aí vira raiz.
- **Extração de frustração e falha silenciosa da conversa real** (`Agnost` e similares). Isto é
  pesquisa de usuário feita pela máquina sobre o log da interação. Emergente; se pegar, encosta em
  mídia e interação mais diretamente que qualquer outro item desta lista.

**Wildcards (baixa probabilidade, alto impacto).**

1. **Trilha auditável obrigatória para toda decisão de IA em serviço público.** O wildcard proposto
   pela disciplina. Um governo — não a UE, que já escorregou 16 meses [F7], mas um de médio porte
   com impulso reformista — exige que toda decisão administrativa assistida por IA venha com traço
   consultável pelo cidadão. O efeito colateral não é conformidade: é que a interface do traço
   vira serviço público de massa, e o design dessa leitura vira problema de acessibilidade e
   alfabetização, não de engenharia. Baixa probabilidade até 2031; impacto total sobre e1.1.
2. **O vazamento lateral de escala.** Uma memória corporativa compartilhada expõe, em escala, o
   que funcionários disseram a um agente uns sobre os outros. Não é hipótese exótica: é a
   combinação direta de e5 com a inexistência de controle granular. Um único caso público
   antecipa e5.1 em dois anos e mata e5.2.
3. **Um tribunal recusa o traço como prova.** Uma corte decide que registro produzido e guardado
   pelo próprio fornecedor não tem valor probatório — exatamente o argumento de que log alterável
   silenciosamente vale zero [F5]. Isso não freia a infraestrutura: acelera e2 e e2.1, e cria o
   mercado de notarização de uma vez.
4. **O anti-wildcard: a memória deixa de importar.** Uma geração de modelos com contexto
   efetivamente ilimitado e barato torna a engenharia de memória desnecessária. Se acontecer, a
   subárvore D2 inteira cai — e o item mais valioso deste mapa vira o registro de por que
   parecia inevitável.

## 7. Contra o próprio mapa

**Extrapolação linear.** O efeito **e4** ("memória comprada como componente com benchmark e preço")
é o presente, só que mais. Ele já está acontecendo: há benchmark, há preço por token, há 21
frameworks integrados [F6]. Chamá-lo de efeito de primeira ordem para 2027 é quase descrever 2026.
Mantive a confiança `alta` justamente por isso — é o único efeito do mapa que é mais constatação
que previsão, e serve de âncora para os outros. O mesmo vale, em menor grau, para **e7**: "eval
privado substitui benchmark público" é uma curva já em curso, puxada pela saturação dos públicos.
Rebaixei **e8** de `media` para `baixa` no ataque: a evidência de que avaliação com consequência
real cresce é um único evento, de 2025, que aparentemente não se repetiu [F8].

**Velocidade de adoção nunca vista.** Dois efeitos pressupõem velocidade sem caso comparável.
O primeiro é **e2.2** (cláusula contratual de entrega de traço em formato aberto até 2029):
o comparável é a portabilidade de dados do GDPR, que levou anos entre a obrigação legal e a
existência de exportação que alguém conseguisse usar — e ali a obrigação já existia. Aqui não
existe. Por isso **e2.2 está em `confianca: baixa`**. O segundo é **e4.2.1** (pressão regulatória
por portabilidade de memória até 2030): o comparável honesto é a portabilidade numérica em
telefonia, que levou mais de uma década entre demanda e implementação. Mantive o prazo em 2030
como pressão, não como implementação — e em `confianca: baixa`.

E um terceiro, mais sutil: **e1** assume que a convenção OpenTelemetry GenAI se estabiliza a tempo.
A própria documentação a descreve como "sob desenvolvimento ativo" [F1], e uma convenção instável
é exatamente o tipo de coisa que atrasa cinco anos sem aviso. Por isso **e1 está em `media`,
apesar do sinal `forte`** — sinal forte de direção, confiança média de prazo.

**Se cada disrupção-raiz não vingar.**

- **Se D1 não vingar** (a convenção não estabiliza, ou o custo de reter traço integral inviabiliza
  a prática, ou o adiamento regulatório vira revogação): cai a subárvore e1–e3 inteira, e com ela
  o efeito que mais interessa a este público — e3.1, a migração do tempo de produzir para conferir.
  O que sobra é o mundo atual: se confere por amostragem e se aceita o que parece bom. O sinal
  precoce dessa não-concretização já existe e está no mapa: o Digital Omnibus adiou as obrigações
  de alto risco em 16 meses [F7]. Um segundo adiamento seria a confirmação.
- **Se D2 não vingar** (contexto barato o bastante para dispensar memória, ou um padrão de
  intercâmbio pega de verdade): cai a tese de lock-in por acervo — e4.2, e4.1.2, e4.2.1. Note que
  as duas causas são opostas e ambas matam a subárvore, o que aumenta a chance combinada de ela
  cair. É a subárvore mais frágil do mapa. Sobrariam e5 e e6 em versão fraca: memória continua
  existindo, só não vira ativo disputado.
- **Se D3 não vingar** (a meta-avaliação vira literatura acadêmica sem consequência de mercado, e
  a certificação ISO fica em carimbo de licitação): cai e9.1 e toda a analogia com a auditoria
  contábil. Sobra e7, que é robusto por outra razão — eval privado cresce por motivo comercial,
  não por motivo epistêmico. O sinal precoce seria o próprio mercado de certificação parar de
  crescer sem que enforcement chegue.

**Viés do autor.** A skill manda perguntar ao usuário se ele escolheu o tema por gostar dele. Nesta
rodada **não houve usuário para responder** — a execução foi automática, com respostas de
entrevista pré-definidas. Declaro, então, o que consigo declarar: o tema veio de uma lista de 19
da disciplina, não de escolha afetiva do autor, o que reduz um viés; mas o briefing recebido já
afirmava a disrupção-raiz ("se a máquina fabrica o produto, avaliar o produto mede a máquina") e
já listava as ferramentas a considerar, o que **introduz outro viés, mais forte: o de confirmação
de um enquadramento dado**. Percebo pelo menos um efeito dele: procurei evidência de que a
infraestrutura de confiança está se consolidando e encontrei; não procurei, com o mesmo empenho,
evidência de que agentes em produção estão sendo abandonados por não compensarem — o que tornaria
todo o mapa irrelevante. Registro isso como limitação ativa, não resolvida. **Esta pergunta precisa
ser feita ao autor (jgpt) antes da entrega.**

## 8. O que a máquina errou

**1. Errei a data que sustenta o "por que agora" inteiro — e errei de forma convincente.** Três
resumos de busca independentes afirmaram, com números e penalidades, que as obrigações de alto
risco do AI Act "entram em vigor em 2 de agosto de 2026", com multa de até €15 milhões ou 3% do
faturamento. Um deles trazia até a frase pronta que eu usaria: "times que acertarem o logging
agora sairão na frente quando os padrões chegarem" [F5]. Eu tinha, ali, um limiar perfeito: uma
data recém-passada, obrigatória, que explicaria por que a observabilidade de agente virou urgente
em 2026. Só descobri que estava errado porque abri a página do artigo 12 e ela dizia outra coisa:
2 de dezembro de 2027 e 2 de agosto de 2028 [F2]. A busca seguinte explicou: o Digital Omnibus
adiou tudo, e entrou em vigor **seis dias antes** do prazo original [F7]. Se eu tivesse citado o
resumo em vez de abrir a fonte, o mapa inteiro estaria ancorado numa obrigação que não existe — e
soaria mais confiante do que este, não menos. A lição não é "verifique fontes"; é que o erro
apareceu **exatamente onde o material era mais conveniente**.

**2. Dois números incompatíveis sobre o mesmo fato, e eu quase escolhi o mais dramático.** Sobre a
Alpha Arena, um resumo dizia que o Qwen executou "1.418 negociações"; a análise que abri diz que
fez "cerca de 43 negociações — menos de três por dia" e atribui o bom resultado justamente à baixa
atividade [F8]. São afirmações opostas sobre a mesma variável, e a primeira servia melhor à
narrativa de "modelo compulsivo". Não uso nenhuma das duas: cito só os retornos, que as duas
fontes confirmam.

**3. Citei um número que envelhece em meses como se fosse propriedade estável.** Resumos de busca
davam ao Langfuse "20.470" e "21.000+" estrelas, em fevereiro de 2026; o README, aberto hoje, diz
34,7 mil [F10]. Nenhum está errado — o que está errado é o gênero de evidência. Contagem de
estrelas mede atenção recente, não adoção; usei-a apenas como sinal de que existe ferramenta
aberta viva, e pus o peso do argumento na aquisição pela ClickHouse, que é um fato datado.

**4. Não consegui abrir a fonte primária do sinal mais forte do tema.** O site nof1.ai devolveu
HTTP 429. Tudo o que digo sobre a continuidade (ou descontinuidade) da avaliação com dinheiro real
vem de terceiros, e está marcado como não verificado. Isso enfraquece **e8** — e é por isso que
e8 é o único efeito de primeira ordem do mapa com `confianca: baixa`.

**5. Limitação estrutural desta rodada.** A Etapa 4 da skill manda perguntar ao autor sobre viés;
a Etapa 1 manda confirmar fontes duvidosas com ele. Não havia usuário. As duas perguntas ficaram
em aberto e estão marcadas no texto, em vez de respondidas por mim no lugar dele.

## 9. Três cenários para 2031

**Provável — "a conferência virou trabalho".** Em 2031, quem projeta mídia e interação passou a
gastar entre um quarto e um terço do tempo lendo caminho, não produzindo artefato. As ferramentas
de replay amadureceram e ficaram parecidas entre si — linha do tempo, ponto de decisão, diff entre
duas execuções da mesma tarefa — e a leitura de traço deixou de exigir engenheiro. O vocabulário do
OpenTelemetry estabilizou tarde, em 2028, mas estabilizou, e nenhuma organização grande monta
telemetria proprietária de agente. A memória, essa, seguiu presa: as três propostas de intercâmbio
de 2026 morreram, uma quarta apareceu em 2029 com apoio de dois fornecedores médios e não pegou, e
trocar de assistente continua custando o acervo. O regulador europeu chegou em dezembro de 2027,
com um ano e meio de atraso sobre o plano original, e o efeito prático foi menos dramático do que
se previa: o que mudou não foi o que se registra, foi quem pode ver.

**Desejável — "a memória é da pessoa".** Em 2031, a memória de um agente é portável, e a portar
não foi generosidade de fornecedor: foi consequência de uma decisão regulatória que classificou
memória destilada como dado do titular, não como obra derivada — a disputa que em 2026 nem estava
formulada. Para chegar aqui foi preciso, em ordem: que um dos padrões de 2026 conseguisse
governança institucional em vez de ficar sendo projeto de um desenvolvedor só; que uma autoridade
de proteção de dados — não necessariamente europeia — aceitasse examinar o caso antes de haver
dano; e que os fornecedores descobrissem que o lock-in por acervo estava bloqueando a própria
expansão deles, o que já se argumentava em 2026. Junto com a portabilidade veio a parte menos
celebrada e mais importante: o direito de ver, editar e apagar o que o sistema lembra de você —
inclusive o que o agente da sua antiga empresa lembra. A auditoria de execução profissionalizou-se
sem virar cartório: formou-se uma prática de leitura de traço acessível a quem não é engenheiro, e
a interface dessa leitura virou objeto de design, com a mesma seriedade que se deu à acessibilidade.

**Indesejável — "a prova pertence a quem é acusado por ela".** Em 2031, a trilha existe, é
obrigatória e não serve para nada. O volume de traço tornou a retenção integral impagável, a
amostragem por risco virou padrão, e quem define o critério de amostragem é o próprio fornecedor
do agente — de modo que o que poderia incriminar tende a não ter sido gravado. Auditoria virou
ritual: a certificação existe, é cara, é paga pelo auditado e nunca reprova ninguém. A memória
consolidou-se como o ativo que se previa, e trocar de plataforma passou a significar recomeçar do
zero uma relação de anos, o que na prática acabou com a troca. O sinal precoce disto já era
visível em 2026 e está neste documento: a amostragem seletiva sendo apresentada como boa prática
de engenharia (e1.2), sem que ninguém perguntasse quem escolhe a amostra (e1.2.1). Quando a
pergunta foi feita, em 2029, a resposta já estava dada por omissão.

## 10. O experimento

**"Peer review cego do caminho".**

**O que é.** Cada aluno escolhe uma tarefa de mídia real e resolvível por agente em uma sessão —
montar um roteiro de dois minutos, revisar a acessibilidade de uma página, extrair a estrutura de
um material e remontá-la em outro formato. Roda com tracing ligado (Langfuse self-hosted é MIT e
sobe em Docker Compose [F10]; instrumentação nas convenções GenAI do OpenTelemetry [F1]). Entrega
**só o traço** — a árvore de decisões, chamadas de ferramenta, tentativas descartadas — **sem o
resultado**. Um segundo aluno lê apenas o traço e decide: aceito ou rejeito, e por quê. Depois vê
o resultado. Registram-se duas coisas: a taxa de acerto do julgamento cego e o **tempo gasto para
julgar**.

**Que pergunta sobre o futuro ele responde.** A tese central deste mapa — e3, e3.1 — é que a
unidade de avaliação migra do produto para o caminho. Isso só acontece se o caminho for legível
por quem não é engenheiro, e se conferir custar menos que refazer. O experimento mede as duas
coisas de uma vez, com a turma como amostra. Se der 50% de acerto, a trilha não substitui nada. Se
o tempo de conferir passar do tempo de fazer, e3.1.2 (a bifurcação entre uso descartável e uso
auditado) deixa de ser efeito de terceira ordem e vira previsão imediata.

**Que tecnologia emergente usa, e por que não dá com tecnologia madura.** Usa tracing de agente
com semântica de decisão. Log de aplicação — que é maduro e existe desde sempre — registra o que
foi chamado e o que retornou; não registra o que o agente considerou e abandonou, que é exatamente
a informação de que o julgamento cego depende. Sem a camada emergente, o avaliador estaria lendo
um extrato de chamadas de função, não um raciocínio.

**Uma segunda rodada, se houver tempo: "o teste da porta de saída".** A turma usa, por três
semanas, um agente com memória compartilhada da disciplina. Ao fim, cada aluno tenta exportar o
que o sistema lembra dele e reimportar em outro. O resultado esperado, pela evidência de 2026, é
que não dê [F4] — e o valor pedagógico está em descobrir isso com a própria mão, não no slide.

**O que mudaria a opinião do autor.** Duas coisas, e estão declaradas desde a Etapa 0. Primeira:
evidência de que a adoção já passou da maioria inicial — se leitura de traço já for prática
corrente em equipes de produto, e não de plataforma, isto não é tendência emergente, é piso, e o
mapa perde a raiz D1. Segunda: evidência de que a tecnologia não rompe nada — se o julgamento cego
der resultado igual ao julgamento pelo produto, então observar o caminho não acrescenta
informação, e toda a infraestrutura é conformidade cara, não epistemologia nova.

## 11. Fontes

Lista apenas do que foi **aberto e lido nesta sessão**. As afirmações que vieram só de resumo de
busca estão marcadas no corpo do texto como "não verificado" e não aparecem aqui.

1. **[F1]** `https://opentelemetry.io/blog/2026/genai-observability/` — Blog oficial do
   OpenTelemetry sobre observabilidade GenAI. Sustenta: existência da hierarquia de spans com
   `invoke_agent` no topo; status "em uso hoje e sob desenvolvimento ativo"; e o problema de
   legibilidade (plataformas renderizam atributos como JSON cru). *Confiabilidade: alta como fonte
   primária do próprio projeto; é parte interessada em relação à adoção da convenção, e o post não
   traz declaração formal de estabilidade.*
2. **[F2]** `https://artificialintelligenceact.eu/article/12/` — Texto do artigo 12 do AI Act
   (record-keeping e logging automático), com as datas de aplicação. Sustenta: a obrigação de
   registro automático ao longo da vida do sistema, o conteúdo mínimo de log, e as datas corrigidas
   (2/12/2027 e 2/8/2028). *Confiabilidade: alta para o texto legal; é site de referência
   não oficial, mas reproduz o articulado.*
3. **[F3]** `https://arxiv.org/html/2606.19544v1` — *Reliability without Validity: A Systematic,
   Large-Scale Evaluation of LLM-as-a-Judge Models*. Sustenta: 21 modelos, 9 provedores, 3
   benchmarks, 118 rodadas, ~541 mil julgamentos; deflação de kappa de 33,8–41,3 pp; 85% bruto
   ≈ 48% corrigido; paradoxo consistência–viés. *Confiabilidade: alta em método e escala; preprint
   arXiv, sem revisão por pares confirmada.*
4. **[F4]** `https://stantyan.com/blog/portable-ai-memory-or-permanent-lock-in/` — Levantamento de
   portabilidade de memória (jul/2026). Sustenta: sete produtos testados, "sete variações de não";
   o detalhe produto a produto; as três propostas de intercâmbio de 2026 sem governança nem
   adoção. *Confiabilidade: média-alta — teste documentado com tabela e critérios explícitos, mas
   é blog de autor individual com posição declarada a favor da portabilidade.*
5. **[F5]** `https://www.helpnetsecurity.com/2026/04/16/eu-ai-act-logging-requirements/` — Análise
   sobre o que o AI Act exige do logging de agentes. Sustenta: a dificuldade específica dos
   agentes; a frase sobre valor probatório zero de log alterável; retenção mínima de seis meses;
   penalidades. *Confiabilidade: média-alta para o enquadramento técnico; publicada em abril/2026
   e já defasada quanto à data de vigência — usei-a para o argumento, não para o prazo.*
6. **[F6]** `https://mem0.ai/blog/state-of-ai-agent-memory-2026` — Relatório de estado da memória
   de agente 2026. Sustenta: LoCoMo/LongMemEval/BEAM e suas escalas; 92,5 e 94,4; ~6.900 vs
   ~26.000 tokens; ganhos de abril/2026; 21 frameworks e 20 backends; queda de ~25% entre BEAM 1M
   e 10M. *Confiabilidade: baixa-média para as comparações — é o fornecedor falando do próprio
   produto. Alta apenas para o fato de que existem benchmarks e métricas de custo.*
7. **[F7]** `https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/`
   — Análise jurídica do acordo do Digital Omnibus. Sustenta: adiamento de 2/8/2026 para 2/12/2027
   (Anexo III) e para 2/8/2028 (Anexo I); acordo político em 6/5/2026; artigo 50 mantido, com
   carência de quatro meses só para marca d'água. *Confiabilidade: alta — escritório de advocacia
   internacional analisando texto legislativo; note a divergência de um dia sobre a data do acordo
   entre esta fonte e resumos de busca (6 vs 7 de maio).*
8. **[F8]** `https://www.iweaver.ai/blog/alpha-arena-ai-trading-season-1-results/` — Resultados da
   Temporada 1 da Alpha Arena. Sustenta: seis modelos, US$ 10.000 reais cada, ranking e retornos;
   a advertência de que o retorno final esconde o caminho e não prova superioridade geral.
   *Confiabilidade: média — fonte secundária; diverge de outra cobertura quanto ao número de
   operações, o que está registrado na seção 8.*
9. **[F9]** `https://www.brightdefense.com/news/iso-42006-raises-the-bar-for-iso-42001-certifiers/`
   — Sobre a ISO/IEC 42006:2025. Sustenta: publicação em 7/7/2025; exigências de competência da
   equipe de auditoria; cálculo estruturado de tempo de auditoria; capacidade de auditor como
   questão aberta. *Confiabilidade: média — blog de empresa de compliance, parte interessada no
   mercado de certificação; os fatos datados (publicação, escopo) são verificáveis.*
10. **[F10]** `https://github.com/langfuse/langfuse` — README do Langfuse. Sustenta: escopo do
    produto (tracing, evals com LLM-as-a-judge, prompt management, datasets); licença MIT com
    `/ee` sob outros termos; 34,7 mil estrelas; "desde janeiro de 2026 somos parte da ClickHouse".
    *Confiabilidade: alta para fatos sobre o próprio projeto; é material de divulgação — o que
    afirma sobre adoção corporativa não foi verificado em fonte independente.*

## 12. Anexo — o levantamento bruto

Sem corte. O que não estiver aqui não pode ser processado depois.

### 12.1 Condições de execução desta rodada

- Executada em 18/09/2026, 01:51 (horário da máquina), de forma **não interativa**. Não havia
  usuário para responder às perguntas da Etapa 0 nem às da Etapa 4.
- As respostas de entrevista foram fornecidas em bloco no briefing de execução, a saber: tema
  (item 3 de 19, família "Agentes"); horizonte 2031; público "quem projeta mídia e interação";
  recorte global com nota sobre o Brasil; descartado de início apenas "o que já é comum em produto
  de massa" (a régua da disciplina); nenhuma disrupção suspeitada de antemão; viés neutro; excluir
  ideias que serviriam a qualquer tema; profundidade em três ordens; modo "a partir de uma
  inovação/tema, não de um setor"; zona de interesse "Agentes"; autor jgpt.
- **Nota sobre o recorte geográfico.** O briefing pediu "global, com uma nota sobre o Brasil". A
  nota sobre o Brasil ficou fraca: a única evidência que encontrei foi o estado de tramitação do
  PL 2338/2023, e não abri a ficha oficial — só resumos de busca. Por isso ela aparece na seção 3
  marcada como não verificada e não sustenta nenhum efeito da roda. Assumi `recorte_geografico:
  global` no frontmatter, em vez de inventar um valor misto. **Item em aberto para o autor.**
- Arquivos de apoio de jgpt: o diretório `turma/jgpt/` contém apenas `SKILL.md`. Não existem
  `ESTUDO.md`, `TESTE.md`, `DUVIDAS.md` nem README para consultar. Registrado porque a instrução
  de execução os mencionava.

### 12.2 Buscas realizadas — queries exatas

1. `OpenTelemetry GenAI semantic conventions agent observability status 2026`
2. `agent memory Letta Mem0 Zep long-term memory benchmark 2026`
3. `Nof1 alpha arena LLM trading $10000 real money results 2026`
4. `EU AI Act Article 12 automatic logging record-keeping high-risk August 2026 obligations`
5. `EU AI Act digital omnibus delay high-risk obligations December 2027 agreed`
6. `LLM-as-a-judge reliability critique bias agreement human evaluators 2026 paper`
7. `PL 2338 marco legal inteligência artificial Brasil status 2026 câmara aprovação`
8. `agent memory portability export lock-in "memory" ChatGPT Claude user data vendor 2026`
9. `tau-bench GAIA agent benchmark saturation contamination 2026 evaluation crisis`
10. `"AI auditor" profession assurance market ISO 42001 certification growth 2026 third-party audit`
11. `Langfuse open source LLM observability adoption 2026 traces self-hosted`

### 12.3 Páginas abertas

**Abertas com sucesso (10):** as dez da seção 11.

**Tentada e falhou (1):** `https://nof1.ai/` — HTTP 429 (Too Many Requests). Consequência: toda
afirmação sobre o estado atual da Alpha Arena depende de terceiros. **Refazer antes da entrega.**

### 12.4 Material lido em resumo de busca e NÃO usado como sustentação

Registrado porque pode ser útil a quem processar isto depois — e porque nada disto deve ser citado
sem abrir a fonte primeiro.

- **Comparativo de memórias (dev.to, Medium, mem0.ai):** Zep/Graphiti em 71,2% no LongMemEval
  contra 49% do Mem0 (gap de 22 pp); Mem0 com ~55 mil estrelas em maio/2026; Letta com
  "self-editing memory" e "sleep-time compute"; SuperLocalMemory Modo C em 87,7% e Letta em
  ~83,2%. Não abri nenhuma dessas páginas. São, em boa parte, fornecedores comparando-se a
  concorrentes.
- **Papers de memória vistos só no resultado de busca:** *MemDelta: Controlled Baselines and Hidden
  Confounds in Agent Memory Evaluation* (arXiv 2606.29914); *DynamicMem* (2606.22877);
  *Are We Ready For An Agent-Native Memory System?* (2606.24775); *Structured Belief State…*
  (2605.11325); *Portable Agent Memory: A Protocol for Provenance-Verified Memory Transfer*
  (2605.11032); *Mitigating Provenance-Role Collapse…* (2605.25869); *MedMemoryBench* (2605.11814).
  O `MemDelta` e o `Portable Agent Memory` são os dois que eu abriria primeiro numa próxima rodada
  — o primeiro porque ataca confundidores na avaliação de memória (e portanto atacaria [F6]); o
  segundo porque é a versão acadêmica do problema de e4.2.1.
- **Benchmarks de agente:** afirmação de que os três primeiros do SWE-bench Verified estavam a
  menos de 5 pontos percentuais entre si no início de 2026; GAIA Nível 1 próximo do teto;
  contaminação (questões do MMLU verbatim no Common Crawl, HumanEval quase duplicado de soluções
  de LeetCode); no tau-bench, o subconjunto "airline" resistindo e o "telecom" decaindo.
  Papers relacionados não abertos: *Benchmark Health Index* (2602.11674); *Agent Island*
  (2605.04312); *Towards a Science of AI Agent Reliability* (2602.16666). **Este último é o que
  mais falta neste mapa.**
- **LLM-as-a-judge, outros:** revisão sistemática de 27 artigos entre jan/2020 e mar/2026;
  estudo da RAND com modelos de fronteira excedendo 50% de erro em benchmarks de viés; a
  observação de que avaliadores humanos podem ser mais enviesados que os modelos. Nenhum aberto.
- **ISO 42001 / mercado de auditoria:** previsão Gartner de 71% das grandes empresas planejando
  alinhamento à ISO 42001 até 2027; 1.400+ vagas de governança de IA nos EUA (LinkedIn, abr/2026);
  filas de 6+ meses para auditoria de Estágio 2 em 2025; faixa salarial de US$ 100–160 mil para
  auditor de organismo certificador. Não abertos, e todos de fontes com interesse direto em vender
  formação ou certificação. **Não usei nenhum destes números no corpo do documento** — exatamente
  por isso.
- **Adoção do OpenTelemetry GenAI:** afirmação de que Google Cloud, AWS, Azure e Datadog adotaram
  as convenções; e de que o GenAI SIG foi formado em abril de 2024, com escopo expandido para
  orquestração de agente, chamada de ferramenta MCP, captura de conteúdo e avaliação de qualidade
  ("seis camadas"). Plausível e coerente com [F1], mas não verificado em página de fornecedor.
- **Langfuse:** 26 milhões de instalações de SDK por mês, 6 milhões de pulls de Docker, adoção por
  19 das Fortune 50 e 63 das Fortune 500. Números de material de marketing; não usados.
- **Brasil:** PL 2338/2023 aprovado por unanimidade no Senado em dezembro de 2024, em votação na
  Câmara ao longo de 2026, com sessão de plenário marcada para 27/5/2026; modelo baseado no AI Act
  europeu, com classificação por risco e direitos de transparência, explicação e contestação; ANPD
  como autoridade central, mais CRIA, CECIA e CBIA. **Nada disto foi aberto.** A ficha oficial
  (`camara.leg.br` e `senado.leg.br`) aparecia nos resultados e não foi consultada — falha de
  execução minha, não do método.

### 12.5 Candidatas a disrupção-raiz testadas e REJEITADAS

O teste aplicado foi o da Etapa 2: *"o que isso rompe, e por que agora e não há cinco anos?"*,
exigindo limiar concreto.

- **"Contexto longo barato" como raiz.** Rejeitada: é barateamento dentro do mesmo jogo, não
  remoção de restrição. Se sumisse amanhã, o campo não voltaria a 2021. Vira, porém, o
  anti-wildcard da seção 6 — porque se ela acelerar demais, mata D2.
- **RAG / indexação de código (`codegraph-rust`, `cased/kit`, `sigmap`, `cocoindex`, `airweave`).**
  Rejeitada como raiz: madura o bastante para ser infraestrutura absorvida e substituível por
  equivalentes. É o piso sobre o qual a memória se apoia, não a ruptura.
- **Logs e métricas de aplicação.** Rejeitada explicitamente — é a linha que a própria descrição do
  tema traça: maduro.
- **Teste unitário e CI.** Idem.
- **Memória bitemporal em grafo.** Rejeitada como raiz, mantida na seção 6. Razão: muda a
  implementação, ainda não mudou quem usa.
- **Avaliação com consequência real como raiz autônoma.** Rejeitada como raiz **separada**;
  absorvida como efeito de primeira ordem (e8) dentro de D3, e com confiança baixa. Razão: um
  evento, de 2025, sem continuidade demonstrada. Era tentador promovê-la — é o sinal mais vistoso
  do tema — e é precisamente por ser vistosa que não passou no teste do limiar.

### 12.6 Efeitos gerados e CORTADOS

- *"O traço vira material de treinamento: o caminho de execuções bem-sucedidas alimenta o próximo
  modelo."* Cortado por ser quarta ordem disfarçada e por pertencer ao tema 1 (o ofício de
  programar com agente), não a este.
- *"Agentes passam a assinar criptograficamente cada decisão com identidade própria."* Cortado por
  invadir o tema 2 (contenção e identidade de agentes). A fronteira foi respeitada; o que sobrou
  aqui é só a integridade do registro (e2), não a identidade de quem age.
- *"Surge um mercado secundário de memórias de agente — comprar o acervo de um profissional que se
  aposenta."* Cortado por especulação livre: não consegui identificar mecanismo que ligue e4.2 a
  isso sem um salto. Fica registrado porque é o tipo de coisa que, se aparecer como sinal fraco em
  2028, muda a leitura de D2 inteira.
- *"A avaliação de agentes vira esporte espectador, com transmissão e apostas."* Cortado: derivaria
  de e8.1, que já está em confiança baixa; empilhar especulação sobre especulação é exatamente o
  que a Etapa 3 manda não fazer.
- *"O custo de conferir cria uma classe de trabalho de baixa remuneração — o operário do traço."*
  **Quase entrou como e3.1.3.** Cortado por falta de qualquer evidência de mecanismo no material
  levantado, e não por implausibilidade. É o efeito de terceira ordem mais socialmente relevante
  que este mapa não conseguiu sustentar. **Recomendo ao autor investigá-lo à parte.**

### 12.7 Perguntas que ficaram em aberto para o autor (jgpt)

1. Você escolheu este tema por gostar dele? (Etapa 4, item 4 — não pôde ser feita nesta rodada.)
2. Confirma a fonte Nof1 — o site devolveu 429 e o estado atual da Alpha Arena não pôde ser
   verificado?
3. A "nota sobre o Brasil" deve ser aprofundada com a ficha oficial do PL 2338/2023, ou o recorte
   global basta para esta entrega?
4. Aceita `publico_ok: false`? A skill fixa o padrão em falso e não houve autorização explícita.
