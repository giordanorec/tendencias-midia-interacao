---
tema: "A infraestrutura de confiança: memória, observabilidade e avaliação de agentes"
slug: a-infraestrutura-de-confianca-memoria-observabilidade-e-avaliacao-de-agentes
autor_login: bvga
zona_de_interesse: Agentes
data: 2026-09-12
horizonte: 2031
publico: "quem projeta mídia e interação"
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 11
efeitos_ordem_3: 11
tecnologias_citadas: [OpenTelemetry GenAI semantic conventions, Langfuse, Arize Phoenix, LangSmith, Braintrust, promptfoo, Inspect AI, Mem0, Letta, Zep, Model Context Protocol, Portable Agent Memory, agrepl, tau-bench, LOCOMO, SWE-bench, LLM-as-judge, Sinapses]
fontes: 17
confianca: media
experimento: "O caminho na tela"
skill_usada: futurizacao-bvga
publico_ok: false
---

## 1. Resumo

Se a máquina fabrica o produto, avaliar o produto deixa de medir a máquina. É essa troca de objeto — do resultado para o caminho — que organiza este mapa. Três disrupções-raiz foram aceitas: **o traço de execução como unidade de prova** (o artefato auditável passa a ser a árvore de chamadas, não a resposta), **a memória persistente como acervo com titular** (o que o agente lembra atravessa sessão, projeto, equipe e emprego, e ninguém decidiu de quem é) e **a metrologia da avaliação não determinística** (quando o avaliador é ele mesmo um modelo, a régua precisa de calibração, e alguém precisa calibrar quem calibra).

O que sustenta o "por que agora" não é entusiasmo: é um desencontro medido. A pesquisa da LangChain com 1.340 profissionais (nov–dez/2025) mostra 89% dos times com observabilidade instrumentada, mas só 52,4% rodando avaliação offline, 37,3% online e 24% as duas — e qualidade, não custo, como principal barreira de produção (32%). Ou seja: o traço já é coletado em quase todo lugar e quase não é usado para julgar nada. Ao mesmo tempo, o vocabulário que tornaria esse traço comparável entre fornecedores — as *semantic conventions* GenAI do OpenTelemetry, com `invoke_agent`, `execute_tool` e `plan` — continua inteiramente marcado como **Development**, sem um único atributo estável.

O mapa é deliberadamente cético em dois pontos. Primeiro: observabilidade de aplicação, tracing de chamada de LLM e teste unitário são **maduros** e entram aqui como infraestrutura, nunca como disrupção. Segundo: boa parte da evidência de "memória de agente" vem de fornecedores medindo a si próprios em um benchmark de 81 pares de pergunta-resposta, com setups não comparáveis — isso é sinal de campo imaturo, não de ruptura consumada. A confiança geral do documento é **média**, e há contrassinais fortes registrados na seção 7, incluindo o adiamento das obrigações de alto risco do AI Act para dezembro de 2027.

## 2. O tema

**Recorte.** A infraestrutura que permite confiar num sistema que ninguém consegue ler por inteiro: memória que atravessa sessões e ferramentas, observabilidade que registra o caminho, e avaliação de sistemas em que rodar duas vezes dá dois resultados. Não é sobre conter o agente (isso é contenção/sandbox) nem sobre o ofício de programar com ele. O objeto aqui é **saber o que o agente sabe e conferir o que ele fez**.

**Parâmetros da entrevista** (conduzida antes da análise, respostas registradas no anexo):

| Campo | Valor |
|---|---|
| `tema` | A infraestrutura de confiança: memória, observabilidade e avaliação de agentes |
| `horizonte` | 2031 |
| `publico` | quem projeta mídia e interação |
| `recorte_geografico` | global, com nota sobre o Brasil |
| `descartes` | o que já é comum em produto de massa; ideias genéricas que serviriam a qualquer tema |
| `vies_desejado` | neutro — nem promocional nem catastrofista |
| `profundidade` | três ordens |
| `modo` | a partir de uma inovação/tema, não de um setor |

**Confirmação dos parâmetros.** Não houve contradição entre os campos. Uma tensão foi resolvida por decisão explícita: a régua "descartar o que já é comum em produto de massa" eliminaria a memória de perfil do ChatGPT — e ela foi de fato eliminada como candidata a raiz, permanecendo apenas como antecedente. Já a memória **entre ferramentas e entre fornecedores** não é comum em produto de massa e permaneceu no escopo.

**Por que este público.** Para quem projeta mídia e interação, o tema não é só engenharia de bastidor. Se a justificativa do sistema passa a aparecer na tela, o traço vira elemento de design — com problemas próprios de ruído, sobrecarga e teatro de transparência. E se a memória vira acervo com titular, a fronteira de privacidade que o designer assume hoje (o aplicativo) deixa de existir.

## 3. Onde isso está hoje

### 3.1 O que está maduro (entra como infraestrutura, nunca como raiz)

**Tracing de chamada de LLM como produto.** Langfuse (34.5 mil estrelas no GitHub, repositório de maio/2023), Arize Phoenix (11.4 mil), promptfoo (25.0 mil) — todos com atividade de commit no dia da medição (12/09/2026). Existem múltiplos fornecedores concorrentes, o problema é de engenharia e não de incerteza fundamental, e há uso real muito além de demonstração: **89% dos respondentes da pesquisa da LangChain têm observabilidade instrumentada, e 94% entre os que já têm agente em produção**. Isso é maturidade pelo critério da própria skill. Não é disrupção.

**Log e métrica de aplicação; teste unitário determinístico.** Maduros há duas décadas. Antecedentes.

**Memória de perfil dentro de um produto de massa.** Descartada de saída pela régua da disciplina.

### 3.2 O que está emergente

**O vocabulário comum do traço.** As *semantic conventions* GenAI do OpenTelemetry modelam a execução inteira como árvore de spans — `create_agent`, `invoke_agent` (cliente e interno), `invoke_workflow`, `plan`, `execute_tool` — com atributos como `gen_ai.operation.name`, `gen_ai.provider.name`, `gen_ai.input.messages`. Mas **todo o conjunto carrega o selo "Development"**: nada estável. Há coleta em toda parte e nenhuma garantia de que dois traços de fornecedores diferentes signifiquem a mesma coisa.

**Avaliação de sistema não determinístico.** O τ-bench (jun/2024) introduziu o `pass^k` — a fração de tarefas em que o agente acerta *sempre*, sob amostragem repetida. Agentes de fronteira de função-calling acertavam menos de 50% no `pass^1` e **menos de 25% no `pass^8`** no domínio de varejo. O trabalho de Bjarnason, Silva e Monperrus sobre aleatoriedade em avaliações agênticas (mar/2026) mostra que a variância entre execuções é grande o bastante para **inverter o ranking entre agentes**, tornando comparações de execução única potencialmente enganosas.

**A insuficiência do resultado como prova.** Kirgis, Kapoor, Narayanan e outros (mai/2026) argumentam que a análise de logs é *necessária* para avaliação crível: benchmarks contêm brechas identificáveis, agentes exibem *reward hacking*, e no SWE-bench muitos *pull requests* aprovados não seriam de fato integrados a código de produção. A recomendação é inspeção obrigatória do log de execução — não confiança no número final.

**O juiz que é ele mesmo um modelo.** O trabalho de Yagubyan (jun/2026) mede instabilidade entre execuções idênticas, viés de posição em nível de "cara ou coroa" e preferência do juiz por respostas de modelos semelhantes a si. Se o instrumento de medida é um sistema imperfeito, toda a pilha de avaliação repousa em fundação incerta.

**Memória de longo prazo entre sessões.** Mem0 (65.2 mil estrelas), Letta (24.7 mil), Zep (4.9 mil). O artigo do Mem0 (abr/2025) reporta **91% de redução na latência p95 e mais de 90% de economia de token** contra processar o contexto inteiro — o argumento decisivo não é conforto, é custo. Do lado da plataforma, a Anthropic descreve o contexto como recurso finito sujeito a *context rot* ("à medida que o número de tokens cresce, a capacidade do modelo de recuperar informação com precisão diminui") e recomenda compactação e anotação estruturada fora da janela.

**Replay determinístico.** O `agrepl` (abr/2026) intercepta todas as interações externas na camada de transporte por um proxy MITM, serializa o traço e o reexecuta em ambiente isolado sem rede: **fidelidade F = 1,0 em 250 instâncias de replay, com redução de 98,3% na latência mediana por passo**. Do lado do modelo, kernels *batch-invariant* produzem saída bit a bit idêntica ao custo de cerca de 61,5% de *throughput*.

### 3.3 O que é experimental

**Portabilidade de memória.** Não existe padrão ratificado. O MCP padronizou o acesso a ferramenta, mas não o modelo de dados da memória, e o roadmap de 2026 não menciona memória. O protocolo *Portable Agent Memory* (Microsoft, mai/2026) propõe proveniência em Merkle-DAG com BLAKE3 e Ed25519, tokens de acesso com escopo de capacidade e *re-hydration* resistente a injeção; no piloto com Claude, GPT-4 e Gemini reporta continuidade de transferência de 0,83–0,92 contra 0,28–0,45 sem memória, e detecção de adulteração de 100% em 200 padrões de ataque. É um artigo com piloto, não um padrão adotado.

**Memória como superfície de ataque.** O MINJA (v1 mar/2025, v5 fev/2026) injeta registros maliciosos no banco de memória **usando apenas consultas e observações de saída** — sem privilégio elevado, sem acesso direto ao banco. Qualquer usuário pode fazê-lo.

**Avaliação com consequência real.** O Alpha Arena da Nof1 deu 10 mil dólares reais a cada modelo de fronteira para operar no mercado com o mesmo prompt. O conjunto perdeu dinheiro. É a demonstração mais desconfortável de que avaliação sem consequência mede outra coisa.

### 3.4 Nota sobre o Brasil

O Brasil já tem, no Judiciário, a obrigação que a Europa adiou. A **Resolução CNJ nº 615, de 11/03/2025**, define *auditabilidade* como "capacidade de um sistema de IA se sujeitar à avaliação dos seus algoritmos, dados, processos de concepção ou resultados" (art. 4º, XVII) e, no art. 13, exige de toda solução de alto risco, antes de entrar em produção, "registro de fontes automatizadas e do grau de supervisão humana" submetido a auditorias regulares (inciso II) e "uso de ferramentas ou processos de registro automático da operação do sistema (log), sempre que tecnicamente possível" (inciso V). Relatórios de auditoria são públicos na plataforma **Sinapses**, e OAB, Ministério Público e Defensorias têm acesso garantido a eles.

No plano geral, o **PL 2338/2023** foi aprovado pelo Plenário do Senado em 10/12/2024 e remetido à Câmara em 17/03/2025, onde segue. Na União Europeia, o **art. 12 do AI Act** exige registro automático de eventos ao longo da vida do sistema — mas a aplicação às categorias de alto risco escorregou para **2 de dezembro de 2027** (Anexo III) e **2 de agosto de 2028** (Anexo I).

O contraste importa para o mapa: quem projeta para o setor público brasileiro já opera sob exigência de log e auditoria; quem projeta para o mercado europeu ganhou mais dois anos.

## 4. As disrupções-raiz

Foram gerados nove candidatos e aceitos três. As fichas dos rejeitados estão na seção 12.

---

### D1 — O traço de execução como unidade de prova

| Campo | Conteúdo |
|---|---|
| `candidato` | O artefato que se audita, versiona e contesta deixa de ser a saída e passa a ser a árvore completa da execução: cada chamada, cada ferramenta, cada tentativa descartada. |
| `maturidade` | emergente |
| `potencial_de_ruptura` | alto |
| `o_que_rompe` | (1) O contrato de qualidade do software — "passou no teste" deixa de ser suficiente porque o teste mede o produto, e o produto foi fabricado pela máquina que se quer medir. (2) O papel do QA e do revisor humano. (3) A arquitetura de produto: coletar o caminho inteiro muda o que se armazena, o que custa e o que vaza. (4) A governança: o traço é simultaneamente a prova e o dado mais sensível do sistema. |
| `por_que_agora` | Os agentes ficaram longos o bastante para que ninguém confira tudo — e benchmarks de resultado são comprovadamente gamáveis (brechas no SWE-bench, *reward hacking*, PRs aprovados que não seriam integrados). O `pass^8 < 25%` do τ-bench mostra que uma passada não diz nada sobre o sistema. E já existe uma gramática candidata para descrever o caminho de forma comparável (spans `invoke_agent`/`execute_tool`/`plan`). |
| `o_que_falta` | Convenção estável — hoje 100% em "Development". Custo e política de retenção de traço. Tratamento de PII dentro do traço. Um juiz confiável para ler o caminho em escala. |
| `evidencias` | Kirgis et al. (2605.08545); τ-bench (2406.12045); semconv GenAI do OpenTelemetry; LangChain 2026 (89% instrumentam, 52,4% avaliam offline). |
| `veredito` | **Aceita.** Emergente, ruptura alta, "por que agora" concreto, rompimento claro, condição pendente identificada. |

---

### D2 — A memória persistente como acervo com titular

| Campo | Conteúdo |
|---|---|
| `candidato` | O que o agente lembra deixa de ser cache de sessão e vira acervo que atravessa projeto, ferramenta, equipe e emprego — acumulando contexto, decisões e erros já cometidos, sem que esteja decidido de quem ele é. |
| `maturidade` | emergente |
| `potencial_de_ruptura` | alto |
| `o_que_rompe` | (1) A fronteira de privacidade: ela deixa de ser o aplicativo e passa a ser a pessoa. (2) A barreira de troca de fornecedor: o lock-in migra da API para o contexto acumulado. (3) A distribuição de poder: o ativo passa a ser o acervo, não o modelo. (4) A noção de sessão como unidade de interação — que é uma premissa de design, não um fato técnico. |
| `por_que_agora` | Lembrar virou economia mensurável: 91% menos latência p95 e >90% menos custo de token contra contexto cheio. O contexto é recurso finito com degradação documentada (*context rot*). E não existe padrão ratificado de portabilidade — o MCP padronizou a ferramenta e deixou a memória de fora do roadmap de 2026. |
| `o_que_falta` | Um modelo de dados interoperável. Um regime de consentimento que funcione quando o titular do dado não é quem opera o agente. Defesa contra envenenamento — o MINJA opera só com consultas. Evidência independente de eficácia: os placares de memória hoje são autorreportados. |
| `evidencias` | Mem0 (2504.19413); Portable Agent Memory (2605.11032); MINJA (2503.03704); Anthropic sobre contexto finito; New America sobre MCP e poder; contagem de estrelas de Mem0/Letta/Zep. |
| `veredito` | **Aceita**, com a ressalva de que a evidência de desempenho é majoritariamente de parte interessada e está triangulada apenas parcialmente. |

---

### D3 — A metrologia da avaliação não determinística

| Campo | Conteúdo |
|---|---|
| `candidato` | Quando o sistema avaliado é não determinístico e o avaliador é ele mesmo um modelo, a avaliação deixa de ser uma etapa de engenharia e passa a exigir metrologia: variância declarada, número de execuções, calibração do juiz e alguém que responda por ele. |
| `maturidade` | emergente |
| `potencial_de_ruptura` | alto |
| `o_que_rompe` | (1) O papel de profissionais e intermediários — surge um avaliador separado de quem constrói. (2) A cadeia de valor da certificação e da compra: o que se vende passa a incluir a prova. (3) As normas de governança: log deixa de ser boa prática e vira obrigação documental. (4) Quem detém a régua detém o mercado. |
| `por_que_agora` | O juiz-máquina está documentadamente instável — inconsistência em nível de cara-ou-coroa por efeito de posição, preferência por si mesmo, variância que inverte rankings. Ao mesmo tempo, a exigência legal de registro já está em vigor no Judiciário brasileiro (CNJ art. 13, V) e escrita, ainda que adiada, no art. 12 do AI Act. Não há padrão técnico finalizado para esse log. |
| `o_que_falta` | Padrões de log de IA ainda em rascunho. Conjuntos de referência humanos abertos. Um modelo econômico: avaliar bem custa execuções repetidas, e repetição é dinheiro. Uma resposta institucional para "quem paga o auditor". |
| `evidencias` | Yagubyan (2606.13685); Bjarnason et al. (2602.07150); τ-bench `pass^k`; CNJ 615/2025 art. 4º XVII e art. 13; AI Act art. 12; LangChain 2026 (só 24% rodam offline e online). |
| `veredito` | **Aceita.** É a raiz de confiança mais baixa das três, porque depende de um motor regulatório que acaba de perder dois anos na Europa. |

---

### Candidatos recusados por serem maduros ou por não romperem

- **Tracing de chamada de LLM como produto** — maduro (89% de instrumentação; múltiplos fornecedores). Entra como infraestrutura de D1.
- **Replay determinístico** — evidência forte e recente (`F = 1,0`), mas rebaixado a **tecnologia habilitadora** de D1 e D3: ele torna o traço reexecutável, não muda por si só o que conta como prova.
- **Memória de perfil em produto de massa** — descartada pela régua da disciplina.
- **RAG / busca sobre documentos** — maduro; melhora o que existe, não rompe.
- **Redução de contexto / *context engineering*** — habilitadora, dentro de D2.
- **Avaliação com dinheiro real** — rebaixada a **sinal fraco** (seção 6): é um experimento, não uma capacidade instalada.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "D1 — O traço de execução como unidade de prova"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "O objeto que se audita deixa de ser a saída do agente e passa a ser a árvore completa da execução, incluindo as tentativas descartadas."
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "O traço vira dado de primeira classe do produto, com orçamento próprio de armazenamento, política de retenção, amostragem e tratamento de dados pessoais."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "Exportar o próprio traço vira requisito de compra e cláusula contratual, e ferramenta que não exporta é eliminada na triagem."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "Publicar um número de benchmark sem o log correspondente passa a ser tratado como evidência de segunda classe."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Forma-se uma prática de contestação por terceiros, que reabrem o traço alheio para derrubar a alegação de desempenho."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "O ofício de garantir qualidade se desloca de escrever asserção determinística para desenhar rubrica, cenário e plano de amostragem."
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Aparece um cargo dedicado de engenharia de avaliação, com carreira própria e separado de quem constrói o agente."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "A separação entre quem constrói e quem avalia deixa de ser escolha de time e vira exigência interna de conformidade."
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "Produtos de mídia e interação passam a expor parte do caminho ao usuário final, e não apenas o resultado."
        sinal: fraco
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "A justificativa navegável vira elemento de design, com problemas próprios de ruído, sobrecarga cognitiva e hierarquia."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Consolida-se um padrão de justificativa que ninguém lê: a transparência vira ritual de interface e perde função de controle."
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "D2 — A memória persistente como acervo com titular"
    efeitos:
      - id: e4
        ordem: 1
        efeito: "A memória do agente passa a ser tratada como acervo com titularidade disputada, e não como cache descartável de sessão."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "A fronteira de privacidade deixa de ser o aplicativo e passa a ser a pessoa: o que o agente sabe atravessa projeto, equipe e empregador."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Desligamento e troca de emprego passam a incluir expurgo de memória, com disputa sobre o que é conhecimento da empresa e o que é da pessoa."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "Trocar de fornecedor passa a custar o acervo e não a integração: o aprisionamento migra da interface de programação para o contexto acumulado."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "Portabilidade de memória entra na pauta regulatória como entrou a portabilidade de dados, e um formato de exportação é imposto de fora do mercado."
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "Lembrar deixa de ser conforto e vira economia: memória passa a ser a principal técnica de controle do custo de contexto."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "A memória vira superfície de ataque de primeira ordem, porque envenenar o acervo rende mais e dura mais do que burlar um prompt."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Surge uma prática de higiene de memória, com proveniência assinada, quarentena e revisão periódica do que o agente acredita saber."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "Sistemas antigos com acervo grande passam a superar sistemas novos tecnicamente melhores, por vantagem de contexto e não de modelo."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "Acervo de contexto passa a ser comprado e vendido como se compra base de usuários, e aparece um mercado cinzento de memória."
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: "D3 — A metrologia da avaliação não determinística"
    efeitos:
      - id: e6
        ordem: 1
        efeito: "A avaliação passa a reportar variância, número de execuções e intervalo em vez de um número único de desempenho."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "O juiz-máquina vira ele mesmo objeto de calibração periódica contra um painel humano de referência."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "Quem detém o painel humano de referência detém a régua do mercado, e os conjuntos-ouro se fecham para preservar esse poder."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "O custo de avaliar cresce a ponto de virar linha de orçamento própria, e as equipes passam a avaliar por amostragem em vez de integralmente."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "Amostragem mal desenhada cria pontos cegos sistemáticos: o que não é amostrado deixa de existir para a organização."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: "A exigência legal de registro converte observabilidade de prática de engenharia em obrigação documental com prazo e responsável."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "Auditoria independente de sistema agêntico se organiza como serviço, com credencial, metodologia publicada e responsabilidade contratual."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "Reaparece o problema estrutural da auditoria contábil: o auditor é pago por quem ele audita, e a independência vira questão regulatória."
                sinal: fraco
                prazo: 2032
                confianca: baixa
```

**O que a estrutura não captura bem.** Três coisas.

A primeira é a **realimentação**. A roda é uma árvore, e o fenômeno não é. O efeito `e5.2` (acervo antigo vence sistema novo) reforça diretamente `e4.2` (aprisionamento pelo contexto), que está em outro ramo da mesma disrupção; e `e6.2` (avaliar por amostragem) enfraquece `e1` (auditar o caminho inteiro) na raiz vizinha. A árvore obriga a escolher um pai e perde o ciclo.

A segunda é a **interação entre raízes**. D1 e D3 são quase o mesmo movimento visto de dois lados — coletar a prova e julgá-la — e D2 é o que torna a prova necessária, porque o que o agente lembra é o que ninguém mais consegue inspecionar. Separá-las foi decisão metodológica para permitir que uma falhe sem derrubar as outras, não uma afirmação de que são independentes.

A terceira é a **distribuição desigual**. Quase todo efeito aqui vale de modos muito diferentes para um time de produto num fornecedor de plataforma, para um tribunal brasileiro sob a Resolução 615 e para uma agência de mídia de cinco pessoas. O YAML não tem campo para "para quem", e isso é uma perda real: o mesmo `e4.2` é catástrofe para quem compra e estratégia deliberada para quem vende.

## 6. Sinais fracos e wildcards

### Sinais fracos

1. **Avaliação com dinheiro real.** O Alpha Arena da Nof1 deu 10 mil dólares reais a cada modelo de fronteira, com o mesmo prompt, e pediu plano de operação com alvo, *stop* e condição de invalidação — realimentando o próprio plano nas chamadas seguintes. O conjunto perdeu dinheiro. É pequeno, localizado e ambíguo, e por isso é sinal e não raiz: mas é a primeira avaliação em que errar dói.

2. **Uma ferramenta de avaliação de Estado, minúscula.** O Inspect AI, do instituto britânico de segurança de IA, tem 2.756 estrelas — ordens de grandeza abaixo do Mem0 ou do promptfoo. É exatamente o perfil de sinal fraco: pouca ressonância, origem institucional incomum, e é ele que o artigo sobre análise de logs indica como o tipo de arcabouço que captura registro detalhado de execução.

3. **A ausência como sinal.** O roadmap 2026 do MCP não menciona memória, embora o *release candidate* de 28/07/2026 formalize um arcabouço de extensões que seria o lugar natural dela. Uma lacuna deliberada num protocolo dominante diz mais sobre disputa de valor do que um anúncio.

4. **Padrões de log de IA em rascunho.** `prEN 18229-1` (registro e supervisão humana) e `ISO/IEC DIS 24970` (registro de sistemas de IA) ainda não são normas finalizadas. Quando forem, o art. 12 do AI Act ganha conteúdo técnico — e é aí que a obrigação vira especificação de produto.

5. **Agentes de código emitindo telemetria nativa.** Copilot no VS Code, Codex e Claude Code (em beta) já emitem traços no vocabulário GenAI do OpenTelemetry. A ferramenta que o desenvolvedor usa todo dia está instrumentando a si mesma — é assim que uma convenção deixa de ser proposta.

### Wildcards

**W1 — O Brasil vira o campo de prova antes da Europa.** O AI Act adiou alto risco para dez/2027 e ago/2028. Se o PL 2338/2023 for aprovado na Câmara com dispositivo de rastreabilidade de decisão automatizada e entrar em vigor antes, o país com a menor indústria de ferramentas de observabilidade passa a ser o primeiro mercado grande a exigir trilha de auditoria em larga escala — e o Judiciário, já sob a Resolução 615, vira o laboratório. **Efeito no mapa:** `e7` e `e7.1` antecipam de 2028/2030 para 2027/2028, e o eixo de desenvolvimento dessas ferramentas deixa de ser puramente americano. Probabilidade baixa, impacto alto.

**W2 — O primeiro grande vazamento de acervo de memória corporativa.** Não de mensagens, mas de *conclusões*: o que o agente inferiu e registrou sobre pessoas, projetos e decisões, atravessando equipes. **Efeito no mapa:** inverte D2. A memória vira passivo, não ativo; "esquecer por padrão" vira funcionalidade de venda; `e5.2` e `e4.2` se enfraquecem porque ninguém quer acumular; e `e5.1.1` (higiene de memória) antecipa e vira obrigatório. O incidente "Echoleak", em que instruções escondidas em e-mails levaram agentes a vazar conversa privada, é o precedente em escala menor.

**W3 — O padrão de portabilidade sai de um incumbente e é adotado.** O aprisionamento se resolveria por captura, não por abertura: um fornecedor publica o formato, ele vira de fato o padrão, e a interoperabilidade passa a existir sob a governança de quem mais lucra com ela. **Efeito no mapa:** `e4.2.1` acontece sem regulação, e `e6.1.1` piora — quem define o formato da memória também define o que é memorizável.

## 7. Contra o próprio mapa

**1. Qual efeito é apenas extrapolação linear do presente?**
`e1.1` — "o traço vira dado de primeira classe, com retenção, amostragem e tratamento de PII". Isso é a história do log de aplicação repetida com outro nome. Não há mecanismo novo ali: é a mesma pressão de custo e de conformidade que produziu retenção de log em 2010. Mantive porque é o degrau causal que leva a `e1.1.1`, mas a confiança deveria ser lida como "provável e pouco informativo", não como descoberta.

**2. Qual efeito assume adoção rápida demais?**
`e2.1` — o cargo dedicado de engenharia de avaliação até 2030. O precedente histórico é o SRE: a prática foi formulada no Google em 2003 e só virou cargo comum fora dele por volta de 2016–2018 — cerca de quinze anos. O caso do cientista de dados é parecido. Rebaixei de 2029 para 2030 e de confiança alta para média. Mesmo assim, pode ser otimista: o dado disponível mostra que **só 24% das equipes rodam avaliação offline e online**, o que não é população suficiente para sustentar uma carreira.

**3. Qual disrupção-raiz pode simplesmente não acontecer?**
**D2.** Se as janelas de contexto continuarem crescendo e barateando, "memória" deixa de ser uma camada com dono e vira detalhe de implementação dentro do fornecedor do modelo. O contrassinal é direto: a Anthropic descreve compactação e limpeza de resultado de ferramenta como funcionalidades *da plataforma* — quanto melhor isso ficar, menos razão existe para uma camada externa de memória com protocolo próprio. Nesse mundo, o acervo nunca se destaca o bastante para ter titular.

**4. O que quebra na roda se essa disrupção falhar?**
Cai o ramo inteiro de `e4` — a fronteira de privacidade na pessoa (`e4.1`), o expurgo de memória no desligamento (`e4.1.1`), o aprisionamento pelo contexto (`e4.2`) e a imposição regulatória de portabilidade (`e4.2.1`). Sobrevive `e5`, porque a economia de contexto continua valendo mesmo que a memória seja interna à plataforma — mas `e5.2` (acervo antigo vence sistema novo) perde o mecanismo, já que a vantagem passaria a ser do fornecedor e não do cliente. Perde-se, com isso, a pergunta de terceira ordem mais interessante do tema: de quem é a memória.

**5. Que contrassinais existem?**
- **A demanda pode não existir.** 89% instrumentam, mas só 37,3% avaliam em produção. Coletar é barato e passivo; julgar é caro e gera responsabilidade. A hipótese nula é que o traço continue sendo coletado e ignorado por mais cinco anos.
- **A convenção pode nunca estabilizar.** O `gen_ai.*` está inteiramente em "Development" desde que existe. Convenção semântica que não estabiliza é convenção que não força comparabilidade — e sem comparabilidade, `e1.2` e `e1.2.1` não têm base.
- **O motor regulatório perdeu força.** O adiamento para dez/2027 e ago/2028 tira dois anos do mecanismo que sustenta `e7`.
- **O campo de memória pode estar medindo mal a si mesmo.** O LOCOMO tem 81 pares de pergunta-resposta, e os placares divulgados são autorreportados com modelos e configurações diferentes, não comparáveis entre si. Isso não é evidência de disrupção: é evidência de que ainda não há régua.

**6. Que barreiras foram subestimadas?**
Custo, em três formas. Determinismo bit a bit custa cerca de 61,5% de *throughput*. Armazenar o traço integral de agentes que rodam por horas é caro por construção. E avaliar bem exige execuções repetidas — o `pass^k` é literalmente pagar *k* vezes pela mesma tarefa. Há ainda uma barreira que quase nunca é dita: **o traço é o dado mais sensível do sistema**, porque contém tudo o que o agente viu, inclusive o que não deveria ter visto. A organização que instrumenta bem cria a prova contra si mesma. Isso é um desincentivo cultural e jurídico real, não um detalhe.

**7. Que ator teria incentivo para bloquear, capturar ou redirecionar a mudança?**
Os fornecedores de modelo, e o argumento não é meu: "contexto, e não desempenho do modelo, é a verdadeira fonte de poder monopolista". Memória e traço dentro da plataforma são fosso; fora dela, são commodity. Os fornecedores de observabilidade têm o incentivo simétrico de manter esquema proprietário. E o comprador — que seria o beneficiário — tem o incentivo silencioso de não produzir registro auditável do que seu sistema fez. Os três incentivos apontam para o mesmo lugar: coletar muito, padronizar pouco, julgar menos ainda.

**8. Que viés do pesquisador e do modelo entrou na seleção?**
Três, e um deles é constitutivo. (a) **Viés de auto-interesse:** este mapa foi produzido por um agente, sobre a infraestrutura que serve para fiscalizar agentes. Há um empurrão estrutural para concluir que essa infraestrutura é inevitável e valiosa. (b) **Viés de fonte interessada:** a evidência de desempenho de memória vem majoritariamente de fornecedores medindo a si próprios; sinalizei onde, mas não consegui triangular com fonte independente. (c) **Viés de disponibilidade:** o arXiv publica muitíssimo sobre avaliação e memória de agente, e volume de publicação não é evidência de adoção — é evidência de que o problema é interessante para pesquisadores.

**Cortes efetivamente aplicados.** Foram removidos dois efeitos que não sobreviveram ao teste causal: "agentes passam a recusar tarefa quando o traço está desligado" (sem mecanismo — nada obriga o modelo a isso, e o incentivo do fornecedor é o oposto) e "a profissão de avaliador vira regulamentada por conselho até 2031" (assume velocidade regulatória sem precedente; a auditoria contábil levou décadas). `e3` foi rebaixado de sinal médio para fraco, porque a evidência de que produtos de consumo vão expor o caminho é anedótica. E `e2.1` foi adiado e rebaixado, como descrito em (2).

## 8. O que a máquina errou

Erros efetivamente detectados nesta execução — nenhum inventado para parecer crítico.

**1. Placar de memória tratado como evidência de maturidade.** A primeira varredura devolveu uma tabela de desempenho no LOCOMO (Mem0 92,5%, Zep 94,7%, ZeroMemory 96,1%) e eu ia usá-la como demonstração de que a memória de longo prazo já funciona. Ao ler com cuidado, a própria fonte adverte que os números são autorreportados, com modelos e configurações diferentes, **não comparáveis entre si** — e que o benchmark tem 81 pares de pergunta-resposta. **Correção:** os números saíram do corpo do mapa. Passei a usar o fato como contrassinal na seção 7: um campo cujos placares não são comparáveis ainda não tem régua.

**2. Padronização confundida com padrão.** Num rascunho da seção 3, escrevi que o OpenTelemetry "já padronizou" o traço de agente. A fonte primária mostra cada span e cada atributo marcado como *Development* — nada estável. **Correção:** a existência da convenção virou evidência de "por que agora" de D1, e a ausência de estabilidade virou o "o que falta" da mesma ficha. É uma diferença que muda o veredito: com padrão estável, D1 estaria perto de madura.

**3. Fonte primária inacessível, declarada como tal.** Duas tentativas falharam: `nof1.ai` devolveu HTTP 429 atrás de um *checkpoint* de segurança, em duas tentativas e também por linha de comando. O PDF da Resolução CNJ 615/2025 devolveu 403 pela ferramenta de fetch — foi obtido por download direto e lido na íntegra, e as citações de artigos vêm desse texto. Já o Alpha Arena **não foi lido em primeira mão**: o sinal fraco da seção 6 se apoia em fonte secundária especializada e está assim declarado na seção 11.

**4. Números oferecidos e recusados.** A busca ofereceu "entre as primeiras 350 organizações do mundo com ISO/IEC 42001" como evidência de que a auditoria de IA está se profissionalizando. Não abri fonte primária que sustentasse a contagem, e por isso o número **não entra no mapa** — a seção 6 e o efeito `e7.1` ficam sem ele. Registro aqui porque a tentação de usar era real e o critério da skill é explícito.

**5. O que não encontrei.** Não localizei nenhuma fonte primária, lida, que medisse **adoção de memória persistente entre sessões em produção** — o equivalente ao "89% instrumentam observabilidade" da LangChain, mas para memória. A pesquisa da LangChain não traz dado sobre memória. Isso é uma lacuna do mapa, não um detalhe: D2 está apoiada em capacidade demonstrada e economia medida, não em adoção medida.

## 9. Três cenários para 2031

### Provável — "Coletado e não lido"

Em 2031 praticamente todo sistema agêntico em produção emite traço. A convenção GenAI do OpenTelemetry finalmente estabilizou partes do vocabulário — chamada de modelo e execução de ferramenta — e deixou `plan` e as operações de memória em desenvolvimento permanente, porque é justamente ali que os fornecedores não querem comparabilidade. O resultado é um mundo em que o caminho está gravado e quase ninguém o lê: a proporção de equipes que avalia em produção subiu de 37% para pouco mais da metade, e a amostragem virou norma por razão de custo, com os pontos cegos previstos em `e6.2.1`.

A memória ficou onde o cliente não decide: dentro das plataformas de modelo, entregue como funcionalidade e não como camada. Existem exportadores, eles produzem arquivos, e os arquivos não reconstituem o que o sistema sabia — a portabilidade continua nominal. Trocar de fornecedor custa o acervo, e todo mundo sabe disso e ninguém chama de aprisionamento.

Quem projeta mídia e interação convive com uma assimetria desconfortável: tem um botão de "ver o raciocínio" na interface porque virou expectativa de mercado, e sabe, pela telemetria da própria interface, que quase ninguém clica.

### Desejável — "A prova acompanha a alegação"

O mesmo traço, mas com três condições que precisaram ser construídas, e nenhuma delas é tecnológica.

A primeira: **um conjunto de referência humano aberto**, mantido por instituição sem participação no mercado que ele arbitra, contra o qual os juízes-máquina são calibrados periodicamente. Sem isso, `e6.1` acontece e `e6.1.1` também — a régua se fecha. Aqui ela não fechou porque alguém pagou para mantê-la aberta antes de ela valer dinheiro.

A segunda: **portabilidade de memória com proveniência verificável**, no espírito do protocolo PAM, adotada como requisito de compra pública antes de virar lei. Compra pública moveu o mercado em vez de esperar a norma — e foi esse o caminho, não a regulação, porque a regulação chegou tarde.

A terceira, e a mais difícil: **a cultura de publicar o log junto do número**. Em 2031, alegação de desempenho sem traço reexecutável tem o mesmo estatuto que artigo sem dado: publicável, não confiável. Isso não veio de norma; veio de contestação repetida (`e1.2.1`) até o custo reputacional de não publicar superar o de publicar.

O ganho para quem projeta interação é concreto: dá para desenhar justificativa com hierarquia honesta, porque existe uma medida de quanto da justificativa é realmente verificável.

### Indesejável — "O acervo e a régua nas mesmas mãos"

Em 2031, memória e avaliação convergiram para os mesmos três ou quatro atores. O contexto acumulado ficou dentro das plataformas, a régua de qualidade também — porque quem tem o painel humano de referência tem o juiz, e quem tem o juiz define o que é bom. A auditoria independente existe, é paga por quem ela audita, e o problema estrutural previsto em `e7.1.1` se instalou sem crise: ninguém precisou de escândalo, bastou a economia.

O golpe que fecha o cenário vem por onde ninguém olhava: envenenamento de memória em escala. Como o ataque não exige privilégio — basta conversar com o agente —, acervos corporativos acumularam, ao longo de anos, crenças plantadas que ninguém consegue datar, porque o traço que permitiria datá-las foi descartado por política de retenção de 90 dias, escolhida por custo. A organização sabe o que o agente acredita e não sabe por quê.

**O sinal precoce que teria antecipado isso** é de 2026 e estava à vista: a distância entre 89% de instrumentação e 37,3% de avaliação em produção. Coletar sem julgar não é um estágio intermediário rumo à auditoria — é um equilíbrio estável, e confortável para quem vende. Quem quisesse ter visto, teria visto ali.

## 10. O experimento

### "O caminho na tela"

**O que é.** Um mesmo agente de produção — um assistente que monta uma pauta ou um roteiro a partir de fontes que ele mesmo busca e lê — exposto em duas interfaces. Na **A**, apenas o resultado. Na **B**, o resultado mais o traço navegável: cada chamada de ferramenta, cada fonte aberta, cada caminho tentado e descartado, instrumentado no vocabulário GenAI do OpenTelemetry (`invoke_agent`, `execute_tool`, `plan`) e com replay do traço disponível para quem quiser reexecutar um passo.

**Pergunta de futuro que testa.** Mostrar o caminho melhora a **calibração** da confiança — isto é, faz a pessoa aceitar o que está certo *e* rejeitar o que está errado — ou apenas aumenta a aceitação de tudo, incluindo o errado? É a pergunta que decide se o efeito `e3.1` é design de controle ou teatro de transparência (`e3.1.1`).

**Tecnologia emergente usada.** As convenções semânticas GenAI (emergentes: tudo em *Development*) e o replay determinístico de execução agêntica.

**Por que uma solução madura não responde à mesma pergunta.** Log de aplicação registra chamadas que aconteceram; não registra a tentativa descartada nem o plano — e é exatamente a tentativa descartada que carrega a informação sobre *por que* o resultado está como está. Teste unitário não serve porque a saída é não determinística: a mesma pergunta produz duas respostas diferentes, ambas aceitáveis ou ambas erradas por motivos distintos. E um painel de métricas de produto responde "quantos aceitaram", não "quantos aceitaram o que deveriam ter rejeitado".

**O que os participantes farão.** 40 pessoas que projetam mídia e interação, divididas em dois grupos, 20 tarefas cada. Em 10 das 20 tarefas, um erro é plantado — **plausível e verificável**: uma fonte que não diz o que o resumo afirma, um número trocado, uma atribuição de autoria errada. Para cada saída, o participante decide aceitar ou rejeitar e declara sua confiança de 0 a 100. A interface B registra, por telemetria própria, quanto do traço foi de fato aberto e por quanto tempo.

**Métrica e observação.** Três medidas, nessa ordem de importância:
1. **Discriminação (d′)** entre saídas corretas e erradas, comparando A e B. É a medida que separa confiança útil de confiança genérica.
2. **Calibração (escore de Brier)** entre a confiança declarada e o acerto.
3. **Uso real do traço** — fração de participantes de B que abriram algum nó, e correlação entre profundidade de inspeção e discriminação.
Como controle de variância, cada tarefa roda três vezes no agente e as três saídas entram no conjunto: sem isso, se estaria medindo uma amostra de um sistema estocástico como se fosse fixa — o erro que o τ-bench e o trabalho sobre aleatoriedade em avaliações agênticas documentam.

**O que me faria mudar de ideia.** Se B aumentar a aceitação também nos casos com erro plantado — confiança sobe, d′ não muda ou piora —, a camada de justificativa é teatro. Nesse caso `e3.1` deve ser cortado da roda e `e3.1.1` promovido a efeito de segunda ordem, e a premissa geral de que "ver o caminho gera confiança legítima" cai junto com boa parte da utilidade de D1 para produto voltado ao usuário final. O contrário também é falseável: se a discriminação melhorar **apenas** entre quem abriu o traço de fato, e esse grupo for pequeno, então o efeito existe mas é elitista, e o desenho de interface — não a instrumentação — vira o gargalo.

## 11. Fontes

1. **OpenTelemetry — GenAI agent and framework spans.** https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/gen-ai-agent-spans.md — Sustenta que existe um vocabulário comum candidato para o traço de agente (`create_agent`, `invoke_agent`, `invoke_workflow`, `plan`, `execute_tool`) e que **todo ele está marcado como "Development"**, sem atributo estável. *Confiabilidade alta: fonte primária, o próprio repositório da especificação.*

2. **Yao, Heineman, Mao et al. — τ-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains.** arXiv:2406.12045, 17/06/2024. https://arxiv.org/abs/2406.12045 — Sustenta a métrica `pass^k` e os números de inconsistência (agentes de fronteira abaixo de 50% no `pass^1` e abaixo de 25% no `pass^8` em varejo). *Confiabilidade alta: artigo primário, amplamente replicado como benchmark de referência.*

3. **Kirgis, Kapoor, Rabanser, Nadgir, Ududec, Dubois, Allaire, Stosz, Hobbhahn, Steinhardt, Narayanan — Log analysis is necessary for credible evaluation of AI agents.** arXiv:2605.08545. https://arxiv.org/pdf/2605.08545 — Sustenta o núcleo de D1: avaliação baseada só em resultado é evidência insuficiente; há brechas identificáveis no SWE-bench e *reward hacking* em modelos de fronteira. *Confiabilidade alta: artigo primário com autoria de grupos independentes (Princeton, AISI, Apollo, METR).*

4. **Bjarnason, Silva, Monperrus — On Randomness in Agentic Evals.** arXiv:2602.07150v3, 26/03/2026. https://arxiv.org/pdf/2602.07150 — Sustenta que a variância entre execuções idênticas é grande o bastante para inverter rankings, e que execução única não representa desempenho de forma confiável. *Confiabilidade alta: artigo primário com análise estatística explícita.*

5. **Yagubyan — The Coin Flip Judge? Reliability and Bias in LLM-as-a-Judge Evaluation.** arXiv:2606.13685. https://arxiv.org/pdf/2606.13685 — Sustenta a instabilidade do juiz-máquina: variância entre execuções idênticas, viés de posição em nível de cara-ou-coroa, preferência por saídas de modelos semelhantes. *Confiabilidade média-alta: artigo primário, autoria única, resultados convergentes com a literatura mais ampla sobre viés de juiz.*

6. **Mudasiru — Deterministic Replay for AI Agent Systems.** arXiv:2607.16200, 30/04/2026. https://arxiv.org/abs/2607.16200 — Sustenta a viabilidade técnica do replay determinístico (`agrepl`): fidelidade F = 1,0 em 250 instâncias, redução de 98,3% na latência mediana por passo, binário Go sob licença MIT. *Confiabilidade média-alta: artigo primário com implementação aberta; ainda sem replicação independente.*

7. **Dong, Xu, Wang et al. — Memory Injection Attacks on LLM Agents via Query-Only Interaction (MINJA).** arXiv:2503.03704, v1 05/03/2025, v5 12/02/2026. https://arxiv.org/abs/2503.03704 — Sustenta que memória persistente é superfície de ataque acessível a qualquer usuário, sem privilégio elevado, apenas por consultas e observação de saída. *Confiabilidade alta para o modelo de ameaça; os percentuais de sucesso citados em fontes secundárias não constam do resumo lido e por isso não foram usados.*

8. **Chhikara, Khant, Aryan et al. — Mem0: Building Production-Ready AI Agents with Scalable Long-Term Memory.** arXiv:2504.19413, 28/04/2025. https://arxiv.org/abs/2504.19413 — Sustenta a economia de lembrar: 91% de redução de latência p95 e mais de 90% de economia de token contra contexto completo. *Confiabilidade média: é artigo dos próprios autores do produto; o ganho de custo é plausível e mecanicamente explicável, mas a comparação de qualidade é autoavaliação.*

9. **Ravindran (Microsoft) — Portable Agent Memory: A Protocol for Provenance-Verified Memory Transfer Across Heterogeneous LLM Agents.** arXiv:2605.11032, maio/2026. https://arxiv.org/html/2605.11032v1 — Sustenta os seis gargalos de memória (aprisionamento, amnésia de sessão, ausência de verificação de integridade, controle de acesso grosseiro, vulnerabilidade a injeção, incompatibilidade entre modelos) e que nenhum protocolo existente cobre portabilidade com integridade criptográfica. *Confiabilidade média: primária para a proposta; os números do piloto são do próprio autor e a amostra não é descrita como grande.*

10. **Anthropic — Effective context engineering for AI agents.** https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents — Sustenta o contexto como recurso finito, o fenômeno de *context rot* e as técnicas de compactação e anotação estruturada fora da janela. *Confiabilidade média: fonte corporativa interessada; a afirmação sobre degradação com o comprimento do contexto é convergente com literatura independente, mas a fonte é parte no assunto.*

11. **LangChain — State of Agent Engineering (2026).** https://www.langchain.com/state-of-agent-engineering — Sustenta os números de adoção: 1.340 respostas entre 18/11 e 02/12/2025; 57% com agentes em produção; 89% com observabilidade instrumentada (94% entre quem já está em produção); 52,4% com avaliação offline; 37,3% online; 24% com as duas; qualidade como principal barreira (32%), latência em segundo (20%). *Confiabilidade média: pesquisa de fornecedor, com amostra autosselecionada e enviesada para o ecossistema da própria empresa — mas com metodologia declarada e tamanho de amostra razoável. Os percentuais devem ser lidos como ordem de grandeza, não medida populacional.*

12. **EU Artificial Intelligence Act — Article 12: Record-Keeping.** https://artificialintelligenceact.eu/article/12/ — Sustenta a obrigação de registro automático de eventos ao longo da vida do sistema de alto risco, o que deve ser registrado, e as datas de aplicação (02/12/2027 para o Anexo III, 02/08/2028 para o Anexo I). *Confiabilidade alta para o texto legal; a plataforma é uma consolidação não oficial, mas reproduz o articulado.*

13. **Conselho Nacional de Justiça — Resolução nº 615, de 11 de março de 2025.** https://atos.cnj.jus.br/files/original1555302025031467d4517244566.pdf (41 páginas, baixado e lido na íntegra) — Sustenta a nota sobre o Brasil: definição de auditabilidade (art. 4º, XVII), obrigações de governança prévia para alto risco incluindo registro de fontes automatizadas submetido a auditoria regular (art. 13, II) e registro automático de operação em log (art. 13, V), publicidade dos relatórios na plataforma Sinapses e acesso garantido à OAB, ao Ministério Público e às Defensorias. *Confiabilidade alta: fonte primária oficial.*

14. **Senado Federal — PL 2338/2023, "Dispõe sobre o uso da Inteligência Artificial".** https://www25.senado.leg.br/web/atividade/materias/-/materia/157233 — Sustenta a situação de tramitação: aprovada pelo Plenário do Senado em 10/12/2024, remetida à Câmara dos Deputados em 17/03/2025. *Confiabilidade alta: fonte primária oficial.*

15. **Steinberg e Trivedi (New America) — AI Agents and Memory: Privacy and Power in the Model Context Protocol (MCP) Era.** 05/11/2025. https://www.newamerica.org/insights/ai-agents-and-memory/ — Sustenta o argumento de que memória de agente é distribuída, persistente e opaca; o risco de vazamento entre serviços; o incidente "Echoleak"; e a formulação de que "contexto, e não desempenho do modelo, é a verdadeira fonte de poder monopolista". *Confiabilidade média-alta: instituto de políticas públicas, argumentativo por natureza, com posição declarada — usado como análise, não como medição.*

16. **GitHub REST API — contagem de estrelas e datas de repositório**, consultada em 12/09/2026 para `langfuse/langfuse` (34.502), `mem0ai/mem0` (65.169), `promptfoo/promptfoo` (25.042), `letta-ai/letta` (24.710), `Arize-ai/phoenix` (11.420), `getzep/zep` (4.911), `UKGovernmentBEIS/inspect_ai` (2.756). https://api.github.com/repos/langfuse/langfuse — Sustenta a diferença de ressonância entre projetos e a classificação do Inspect AI como sinal fraco. *Confiabilidade alta para o número; baixa como proxy de adoção em produção — estrela mede atenção, não uso.*

17. **Moran (Flat Circle) — AI Trading Arenas.** https://blog.flatcircle.ai/p/ai-trading-arenas — Sustenta o sinal fraco do Alpha Arena: 10 mil dólares reais por modelo, desenho com plano de operação realimentado nas chamadas seguintes, e prejuízo geral dos participantes. *Confiabilidade baixa-média: blog especializado, sem metodologia publicada. **Limitação declarada:** a fonte primária (`nof1.ai`) devolveu HTTP 429 atrás de checkpoint de segurança em três tentativas, inclusive por linha de comando, e não foi lida. O sinal está registrado com essa ressalva e nenhum número dele entrou na roda.*

## 12. Anexo — o levantamento bruto

### A. A entrevista, como ocorreu

A skill exige parada antes da análise. A entrevista foi conduzida com as seis perguntas mínimas e respondida integralmente antes de qualquer busca. Respostas registradas: tema (o tema 3 de 19 da disciplina, família "Agentes"); horizonte 2031; público "quem projeta mídia e interação"; recorte global com nota sobre o Brasil; descartes = o que já é comum em produto de massa, mais ideias genéricas que serviriam a qualquer tema; viés neutro; profundidade três ordens; modo "a partir de uma inovação/tema". Duas informações adicionais foram fornecidas e usadas: nenhuma disrupção suspeita foi indicada a priori ("descubra"), e o critério de mudança de ideia declarado foi *evidência de que a adoção já passou da maioria inicial, ou de que a tecnologia só melhora o que existe sem romper nada*. Esse segundo critério foi aplicado literalmente e é o que rebaixou tracing de LLM, RAG e engenharia de contexto.

### B. Candidatos gerados e vereditos

| # | Candidato | Maturidade | Ruptura | Veredito |
|---|---|---|---|---|
| 1 | Traço de execução como unidade de prova | emergente | alto | **aceito — D1** |
| 2 | Memória persistente como acervo com titular | emergente | alto | **aceito — D2** |
| 3 | Metrologia da avaliação não determinística | emergente | alto | **aceito — D3** |
| 4 | Replay determinístico de execução agêntica | emergente/experimental | médio | rebaixado a **tecnologia habilitadora** de D1 e D3 |
| 5 | Tracing de chamada de LLM como produto | **maduro** | — | rebaixado a **antecedente**; 89% de instrumentação, múltiplos fornecedores, problema de engenharia |
| 6 | Avaliação com consequência financeira real | experimental | alto se ocorrer | rebaixado a **sinal fraco**; um experimento não é capacidade instalada |
| 7 | Memória de perfil em produto de massa | maduro | baixo | **descartado** pela régua da disciplina |
| 8 | RAG / recuperação sobre documentos | maduro | baixo | **descartado**: melhora o que existe |
| 9 | Redução de contexto / engenharia de contexto | emergente | médio | rebaixado a **habilitadora** de D2 |

### C. Caminhos causais cortados

- *"Agentes passarão a recusar tarefas quando o traço estiver desligado."* Cortado no teste "se A, então B porque ___": não há mecanismo. Nada no sistema obriga o modelo a isso, e o incentivo do fornecedor aponta no sentido contrário.
- *"A profissão de avaliador será regulamentada por conselho profissional até 2031."* Cortado por velocidade sem precedente. A auditoria contábil levou décadas entre prática e regulamentação; sete anos não é plausível sem um choque que não está previsto.
- *"O custo de avaliação levará empresas a abandonar agentes."* Cortado: assume que avaliar é condição de uso, e o dado disponível mostra exatamente o contrário — 63% não avaliam em produção e continuam operando.
- *"Traço completo vira obrigatório para todo produto com IA."* Cortado por confusão entre previsão e desejo. A obrigação, onde existe, é para **alto risco** — não para todo produto.
- *"Memória compartilhada entre agentes de uma equipe melhora o desempenho coletivo."* Não cortado por implausibilidade, mas **não incluído por falta de evidência lida**. É uma hipótese aberta e provavelmente o melhor tema para quem quiser continuar este mapa.

### D. Buscas sem resultado, ou com resultado insuficiente

- **Adoção de memória persistente em produção.** Nenhuma fonte primária lida com o equivalente ao "89% instrumentam observabilidade", mas para memória. A pesquisa da LangChain, consultada diretamente, **não traz dado sobre memória**. Lacuna declarada na seção 8.
- **`nof1.ai`.** HTTP 429 atrás de checkpoint de segurança da Vercel, em três tentativas (duas por ferramenta de fetch, uma por `curl` com *user agent* de navegador). Não lida.
- **PDF da Resolução CNJ 615/2025 pela ferramenta de fetch.** HTTP 403. Resolvido por download direto e extração de texto; lido na íntegra (41 páginas).
- **Contagem de certificações ISO/IEC 42001.** Oferecida pela busca ("entre as primeiras 350 organizações"), sem fonte primária aberta. **Não usada.**
- **Dado brasileiro de adoção de observabilidade ou avaliação de agentes.** Nenhuma fonte encontrada. A nota sobre o Brasil é, por isso, regulatória e não de adoção — o que é uma limitação real do recorte.

### E. Contrassinais registrados (inclusive os que não couberam na seção 7)

- A convenção GenAI do OpenTelemetry existe desde 2024 e segue integralmente em *Development*. Convenção que não estabiliza não força comparabilidade.
- 89% coletam, 37,3% avaliam em produção. Coletar sem julgar pode ser um equilíbrio estável, não uma etapa.
- O AI Act adiou alto risco em dois anos (dez/2027 e ago/2028).
- O LOCOMO tem 81 pares de pergunta-resposta e placares autorreportados não comparáveis.
- O MCP, protocolo dominante de acesso a ferramenta, **não tem memória no roadmap de 2026**.
- Compactação e limpeza de resultado de ferramenta viraram funcionalidade **da plataforma**, o que empurra a memória para dentro do fornecedor e enfraquece D2.

### F. Hipóteses alternativas ao mapa inteiro

**H1 — A janela de contexto resolve a memória.** Se contexto longo continuar barateando na mesma curva, a camada externa de memória some, e D2 inteira era um artefato de um gargalo temporário. É a hipótese que mais me preocupa e a que está explicitamente na pergunta 3 da seção 7.

**H2 — A avaliação não vira infraestrutura; vira seguro.** Em vez de todo mundo avaliar, o mercado precifica o risco: quem não avalia paga apólice mais cara, e uma seguradora — não um auditor — vira o ator que define a régua. Essa hipótese reorganiza toda a raiz D3 em torno de um ator que nem aparece no mapa atual. Não a desenvolvi por falta de evidência lida, mas ela é internamente coerente e tem precedente em segurança cibernética.

**H3 — O traço vira prova contra quem o guarda, e a prática recua.** Se os primeiros processos judiciais usarem traço de agente como prova contra o operador, o incentivo racional passa a ser **não coletar**, ou coletar com retenção mínima. Nesse mundo, `e1` acontece e depois se reverte — algo que a Futures Wheel, por ser uma árvore que só cresce, não tem como representar.

### G. Observações que não entraram no mapa final

- O ataque de envenenamento de memória tem um irmão que não explorei: **envenenamento do traço**. Se o traço é a prova, adulterá-lo é adulterar a prova — e é exatamente por isso que o protocolo PAM usa assinatura, embora para memória e não para traço. Não encontrei trabalho lido sobre integridade criptográfica de traço de agente. Parece lacuna real.
- A distinção entre *memória* e *traço* é menos nítida do que este documento sugere. Um traço retido e indexado **é** uma memória, e um dos projetos citados no enunciado da disciplina (`deja-vu`, que indexa sessões já gravadas em disco) opera exatamente nessa ambiguidade. Se as duas coisas forem a mesma infraestrutura vista de ângulos diferentes, D1 e D2 são uma raiz só — e o mapa teria duas, não três.
- Nada aqui trata do **custo ambiental** de reexecutar tarefas *k* vezes para medir `pass^k`. Avaliar bem é computacionalmente caro por definição, e esse custo não aparece em nenhuma das fontes lidas.
