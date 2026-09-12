---
tema: "A infraestrutura de confiança: memória, observabilidade e avaliação de agentes"
slug: a-infraestrutura-de-confianca-memoria-observabilidade-e-avaliacao-de-agentes
autor_login: grec
zona_de_interesse: Agentes
data: 2026-09-12
horizonte: 2046
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 19
efeitos_ordem_2: 32
efeitos_ordem_3: 27
tecnologias_citadas: [Mem0, Letta, MemGPT, Zep, Graphiti, Cognee, ByteRover, MemPalace, memory tool (Anthropic), ChatGPT memory, context editing, compaction, memorywire, MCP, OpenTelemetry GenAI semantic conventions, Langfuse, LangSmith, Arize Phoenix, Braintrust, Helicone, Maxim AI, promptfoo, LLM-as-judge, pass^k, tau-bench, SWE-bench, GAIA, WebArena, OSWorld, LoCoMo, LongMemEval, BEAM, BenchJack, Alpha Arena (Nof1), C2PA, ISO/IEC 42001, EU AI Act Art. 12, EU AI Act Art. 26, EU AI Act Art. 50, Regulamento (UE) 2026/1744, EU Data Act, LGPD, PL 2338/2023, Resolução CNJ 615/2025, ChatTCU]
fontes: 28
confianca: media
experimento: "A prancha com memória — um editor de peça gráfica que mostra, ao lado do trabalho, o que o agente anotou, o que muda se você corrigir uma anotação, e em quantas de oito execuções o mesmo pedido dá o mesmo resultado"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Quando a máquina fabrica a peça, avaliar a peça mede a máquina — e a pergunta deixa de ser "o que
foi entregue?" para virar "por que isto está certo?". Responder exige ver o caminho; e o agente que
lembra entre sessões deixa de ser ferramenta e vira algo que acumula. Este mapa persegue quatro
rupturas até 2046: a **memória se descola da ferramenta** e vira objeto com dono, formato e
titularidade disputada; o **julgamento substitui a conferência**, porque o mesmo pedido dá
resultados diferentes e "aprovado" deixa de ser binário; a **trilha vira objeto de prova**, e o que
se entrega a um cliente passa a incluir o caminho, não só o arquivo; e o **custo de lembrar e de
registrar passa a disputar orçamento com o custo de pensar**, fazendo do esquecimento uma decisão
de projeto. Para quem projeta mídia e interação, o efeito mais próximo não é técnico: a interface
de memória — ver, corrigir, apagar o que o sistema sabe sobre você — vira superfície de projeto tão
disputada quanto o feed foi na década de 2010, e "começar um projeto" deixa de ser uma tela em
branco. O risco central do mapa não é que a infraestrutura não se construa: é que ela se construa,
ninguém a leia, e a confiança acabe sendo função do orçamento de quem produz.

## 2. O tema

O objeto aqui é estreito e deliberado: **saber o que o agente sabe e conferir o que ele fez**. Não
é conter o agente (isso é outro tema da disciplina), nem o ofício de programar com ele. É a camada
que permite confiar num sistema que ninguém consegue ler por inteiro — e ela tem duas faces que a
indústria trata como problemas separados e são o mesmo problema: **memória** (o que atravessa
sessões) e **auditoria** (o que ficou registrado do caminho).

Isto encosta em mídia e interação em três lugares concretos. Primeiro, na **superfície**: se o
sistema lembra, alguém tem de projetar como a pessoa vê, corrige e apaga o que ele lembrou — e essa
tela ainda não tem convenção, como "pasta" e "linha do tempo" um dia não tiveram. Segundo, na
**entrega**: se o processo vira prova, o que um estúdio entrega a um cliente muda de natureza.
Terceiro, na **avaliação**: quem escreve o critério do que é bom passa a ter mais poder sobre o
produto que quem escreve o código — e critério de qualidade estética é exatamente o que direção de
arte e editoria sempre fizeram, agora tendo de virar texto executável.

Merece mapa de futuro, e não levantamento de estado da arte, porque a parte madura do assunto é
chata e a parte interessante ainda não tem forma. Log, métrica e teste unitário são resolvidos há
vinte anos. O que não é resolvido é avaliar sistema **não determinístico** — rodar duas vezes dá
dois resultados — e fazer memória atravessar sessão, ferramenta e fornecedor. Um levantamento de
estado da arte de 2026 descreveria ferramentas que, em 2046, provavelmente não existirão com esses
nomes. O que tem chance de sobreviver vinte anos são as **formas institucionais**: quem tem o
direito de apagar, o que conta como prova, quem certifica quem. É nisso que este mapa aposta.

**Premissas assumidas** (o briefing cobriu horizonte, público, recorte, descarte inicial, viés e
zona de interesse; o resto é assunção declarada, conforme §0 da skill): o mapa é escrito de fora
das plataformas, sem acesso a dado interno de nenhum fornecedor; trata "quem projeta mídia e
interação" como quem trabalha em estúdio, agência, redação, produtora, jogo ou produto digital, não
como quem opera infraestrutura; e assume que o leitor da disciplina tem vinte anos de carreira pela
frente, o que é a razão de o horizonte ser 2046 e não 2031.

## 3. Onde isso está hoje

Âncora feita com acesso à web em 12/09/2026: 16 buscas em português e inglês, 28 fontes abertas e
lidas (seção 11). Duas tentativas falharam por bloqueio de acesso e estão registradas na seção 12.

### O que já existe e funciona

**Memória como biblioteca.** Mem0 está em 65,2 mil estrelas no GitHub, licença Apache-2.0, com três
modos de uso (biblioteca, servidor auto-hospedado, plataforma em nuvem). O Graphiti, grafo de
conhecimento temporal que é o núcleo aberto do Zep, está em 30,8 mil estrelas, também Apache-2.0, e
modela fatos com janela de validade — em vez de apagar o que ficou velho, invalida e preserva a
história. O Letta (ex-MemGPT) está em 24,7 mil estrelas, Apache-2.0, e migrou o código ativo para
um repositório novo, `letta-ai/letta-code`, arquivando o servidor da V1. Do lado dos fornecedores
de modelo, a ferramenta de memória da Anthropic é **client-side**: o modelo pede operações de
arquivo (`view`, `create`, `str_replace`, `insert`, `delete`, `rename`) sobre um prefixo
`/memories`, e a aplicação executa contra armazenamento próprio. A documentação é explícita: "a
memória vive inteiramente na sua aplicação".

**Observabilidade como mercado consolidado.** O Langfuse se descreve como plataforma aberta de
avaliação e observabilidade de agentes, "OpenTelemetry native", e declara 21 das Fortune 50, mais de
100 mil engenheiros, mais de 90 bilhões de observações por mês e mais de 65 milhões de instalações
de SDK por mês. Em **16 de janeiro de 2026** foi adquirido pela ClickHouse, junto com uma Série D de
US$ 400 milhões; no anúncio, a ClickHouse cita 23,1 milhões de instalações de SDK por mês, 6 milhões
de downloads de Docker e 63 das Fortune 500. A licença MIT e a auto-hospedagem foram mantidas. Do
lado da avaliação, o promptfoo (25 mil estrelas, MIT) faz avaliação de prompt e *red-teaming*, diz
servir aplicações com mais de 10 milhões de usuários e, segundo a própria página do repositório, foi
adquirido pela OpenAI mantendo-se aberto. Ou seja: **a camada de confiança já foi comprada pelos
donos da camada de dados e da camada de modelo.**

**Regulação que já morde, no Brasil antes que na Europa.** A Resolução CNJ nº 615/2025 regula o uso
de IA no Judiciário brasileiro exigindo transparência, rastreabilidade, auditoria e registro, com
supervisão humana obrigatória e proibição de que o sistema julgue pessoas. O TCU publica um portal
com 12 iniciativas de IA em operação, controle de acesso por perfil, revisões periódicas com
registros auditáveis, vedação explícita de decisão automatizada sobre cidadão, e compartilhamento de
código-fonte com mais de 100 órgãos públicos. Na Europa, o EU Data Act, aplicável desde **12 de
setembro de 2025**, já obriga portabilidade e troca entre provedores de serviços de processamento de
dados — ninguém ainda apontou essa obrigação para memória de agente.

**Padrões de contexto e de proveniência.** A especificação do MCP em vigor é a de **28 de julho de
2026**, com Resources, Prompts, Tools do lado do servidor, Elicitation do lado do cliente, e
extensões para Tasks, Skills e Apps. O C2PA publicou a versão 2.3 da especificação de Content
Credentials, com ecossistema acima de 6.000 membros e afiliados em janeiro de 2026.

### O que existe e ainda não funciona

**Memória não é portável.** Um teste feito na primeira semana de julho de 2026 sobre sete produtos
(memória do ChatGPT, Claude Projects, canal de memória do Claude, informações salvas do Gemini,
regras e memórias do Cursor, Cognee, ByteRover) conclui, verificando documentação e comportamento:
"sete produtos, sete variações de não". O ZIP da conta do ChatGPT exporta conversas, mas as memórias
salvas não têm exportação; o Claude exporta JSON e resumo em texto, mas sem estrutura; o Gemini
aceita ZIP de concorrente na entrada e o achata em texto. Nenhum atinge **simetria de importação** —
um concorrente reconstruir a memória em forma estruturada.

**O padrão que resolveria isso existe e não foi adotado.** O `memorywire` (arXiv 2606.01138,
submetido em 31/05/2026, autor único) propõe um formato de fio em JSON-Schema 2020-12 para cinco
operações (`remember`, `recall`, `forget`, `merge`, `expire`) sobre quatro tipos de memória
(semântica, episódica, procedimental, emocional), com implementação de referência, cinco
adaptadores, e um canal opcional de governança com humano no laço. O resumo declara o diagnóstico
com precisão: "não há formato de fio compartilhado: toda integração é sob medida, toda migração
reconstrói a memória do zero, e nenhum framework entrega uma superfície de governança que permita a
um humano revisar as escritas antes que entrem no armazenamento de longo prazo". Nenhuma adoção é
alegada. E **o MCP, que padronizou ferramentas, não padronizou memória** — a ausência é o dado.

**A avaliação não tem régua confiável.** Em τ-bench (arXiv 2406.12045), agentes acertam menos de
50% das tarefas e são inconsistentes: `pass^8 < 25%` no domínio de varejo, isto é, em oito execuções
da mesma tarefa, menos de um quarto passa nas oito. Em LongMemEval (arXiv 2410.10813, ICLR 2025),
assistentes comerciais perdem cerca de 30% de acurácia ao lembrar informação através de interações
prolongadas. O BenchJack (arXiv 2605.12673, 14/05/2026, Wang, Li, Mang, Cheung, Sen e Song) audita
SWE-bench, WebArena, OSWorld, GAIA e outros e encontra brechas exploráveis que permitem pontuar alto
por atalho e não por capacidade. E o juiz automático, que seria a saída, tem dispersão grande: uma
avaliação sistemática de 21 modelos-juízes de 9 fornecedores sobre 3 benchmarks, com cerca de 541
mil julgamentos (arXiv 2606.19544), mede concordância com humanos (κ de Cohen) entre 0,376 e 0,511
no MT-Bench e entre 0,271 e 0,875 no JudgeBench, com taxa de inversão por posição de 9,9% a 17,3%, e
identifica o "paradoxo consistência–viés": dois juízes de produção com teste-reteste acima de 0,95
convivendo com viés posicional acima de 0,10.

**Lembrar mais não é lembrar melhor.** O relatório de estado da memória de agentes publicado pela
Mem0 (01/04/2026) — publicado pela Mem0 e medindo a Mem0, o que é preciso registrar — declara 92,5
em LoCoMo e 94,4 em LongMemEval, e ao mesmo tempo reconhece perda de cerca de 25% de desempenho
quando o contexto cresce dez vezes, e lista como não resolvidos: abstração temporal, resolução de
identidade entre sessões, envelhecimento de fatos relevantes, e avaliação em nível de aplicação, que
segue sendo "processo manual e sob medida".

**A lei que definiria a trilha escorregou.** O artigo 12 do AI Act (registro automático de eventos
ao longo da vida do sistema) valeria para sistemas de alto risco do Anexo III a partir de 02/08/2026.
O Regulamento (UE) 2026/1744 — o "Digital Omnibus" —, publicado no Jornal Oficial em **24/07/2026** e
em vigor desde **27/07/2026**, adiou essa data para **02/12/2027** (Anexo III) e **02/08/2028**
(Anexo I). O detalhe que importa: **o artigo 50, de transparência sobre conteúdo gerado, não foi
adiado** e vale desde 02/08/2026. Rotular o produto continuou obrigatório; registrar o processo
escorregou dezesseis meses.

### Quem constrói

Quatro grupos, com incentivos diferentes. **Os donos do dado**: ClickHouse (dona do Langfuse),
Datadog, Grafana — querem que trilha de agente seja mais um tipo de telemetria. **Os donos do
modelo**: OpenAI (dona do promptfoo), Anthropic (memória client-side, contexto editável,
compactação), Google — querem memória e avaliação como recurso do modelo, não como camada
independente. **A comunidade aberta**: Mem0, Letta, Graphiti, OpenTelemetry, e um autor solitário
propondo formato de fio. **Os certificadores**: BSI, Schellman, A-LIGN, KPMG, TÜV SÜD, AENOR, que
emitem ISO/IEC 42001 e estão construindo o método antes de a lei exigir.

### Que número descreve a adoção hoje

Não há número único, e onde há, ele diverge. O mais duro que encontrei é o da certificação: **cerca
de 350 organizações no mundo** com ISO/IEC 42001, segundo estimativas públicas de organismos
certificadores compiladas em abril de 2026 — entre elas AWS, Microsoft, Anthropic, Snowflake,
ServiceNow, KPMG, Synthesia. Trezentas e cinquenta é um número pequeno: está no começo da curva. Do
lado da instrumentação, o Langfuse declara 90 bilhões de observações por mês, o que descreve volume
e não adoção. Para estrelas de GitHub e instalações de SDK, ver a seção 8 — os números divergem
entre fontes e eu não os concilio.

### O que é maduro e por isso fica aqui, como contexto

Log e métrica de aplicação (anos 2000), teste unitário e integração contínua, RAG (produto de massa
desde 2024), agente que usa ferramenta (o MCP virou padrão de fato) e **chatbot que lembra o seu
nome** — a memória do ChatGPT chegou a Plus e Pro nos EUA em 2026 e estava sendo estendida a Free e
Go. Nada disso entra como raiz. A regra prática da §2 da skill resolve sem discussão: se dá para
fazer com o que já é comum em produto de massa, é maduro.

## 4. As disrupções-raiz

Quatro rupturas, cada uma submetida às quatro perguntas do critério de maturidade. Ao final, as
recusas registradas.

### D1 — A memória se descola da ferramenta e vira objeto com dono

**O que rompe.** Rompe o modelo em que o histórico é subproduto do produto: hoje, o que o sistema
sabe sobre você é uma tabela dentro da plataforma, e existe porque a plataforma existe. A ruptura é
a memória virar **artefato**: com formato, versão, procedência assinada, direito de exportação e
titular definido. Isso desmonta o argumento de que trocar de ferramenta é barato, e desmonta a
suposição — a que sustenta o desenho de quase todo software de criação — de que o trabalho começa em
branco.

**Por que agora, e não há cinco anos.** Porque memória virou engenharia, e não recurso: há
frameworks com dezenas de milhares de estrelas e benchmarks dedicados (LoCoMo, LongMemEval, BEAM);
porque o custo de contexto tornou "colar tudo" inviável, obrigando a recuperação sob demanda; e
porque a base jurídica da portabilidade já existe — o Data Act é aplicável desde 12/09/2025 — sem
que ninguém tenha apontado a obrigação para este objeto. Há cinco anos não havia nem o objeto nem a
lei.

**Onde está na difusão.** **Produto de nicho.** O padrão que resolveria (memorywire, 05/2026) tem
implementação de referência e nenhuma adoção declarada; o MCP não tem primitiva de memória; e o
teste de portabilidade de julho de 2026 deu sete não em sete.

**O que ainda falta acontecer.** Um formato de arquivo **e** um protocolo de fio adotados por pelo
menos dois fornecedores grandes — nenhum dos dois sozinho resolve, porque um cobre a saída e o outro
a permanência. Uma definição normativa do que conta como memória "estruturada e reutilizável", sem a
qual a portabilidade se cumpre com ZIP de texto. Um caso concreto que produza jurisprudência sobre
titularidade. E uma interface em que a pessoa veja e edite o acervo — sem ela, a portabilidade é
direito que ninguém exerce.

**Quem bloqueia.** As plataformas de assistente, com o instrumento mais barato que existe: cumprir a
letra da portabilidade exportando texto plano. É o que o GDPR produziu desde 2018 no artigo 20 —
ZIPs formalmente conformes e materialmente inúteis.

### D2 — O julgamento substitui a conferência

**O que rompe.** Rompe a definição operacional de "funciona". Teste de software compara resultado
obtido com resultado esperado; a igualdade é o critério. Quando o mesmo pedido, com o mesmo prompt e
os mesmos dados, dá oito resultados diferentes, não existe "esperado" — existe distribuição. Isso
desmonta o ofício de QA como conferência, desmonta o binário "aprovado/reprovado" que sustenta
contrato, edital e homologação, e transfere poder para quem escreve o critério.

**Por que agora, e não há cinco anos.** Porque a inconsistência foi medida e ganhou métrica: o
`pass^k` de τ-bench formalizou em 2024 o que antes era queixa; porque os benchmarks públicos
saturaram e foram auditados como gamificáveis (BenchJack, 05/2026); porque o juiz-LLM virou a única
saída escalável e acabou de ser medido com dispersão grande (541 mil julgamentos, 06/2026); e porque
o cargo existe — "evals engineer" passou de linha dentro da vaga de ML sênior a vaga própria.

**Onde está na difusão.** **Adoção precoce** entre quem constrói com modelo de linguagem; nicho no
resto da economia. Nenhum relatório comercial de avaliação que eu tenha visto publica métrica
corrigida por acaso, que é o teste de que a prática amadureceu.

**O que ainda falta acontecer.** Que κ corrigido por acaso, e não concordância bruta, vire praxe de
relatório. Que o juiz seja auditável — hoje ele é uma caixa julgando outra caixa. Que o custo de
julgar caia, ou que se aceite que avaliar custe mais que produzir. E que alguém decida quem
certifica o avaliador.

**Quem bloqueia.** Os fornecedores de modelo, por dois caminhos: restringindo em termos de serviço o
uso comparativo dos seus modelos, e publicando os próprios números sem contaminação declarada.

### D3 — A trilha vira o objeto de prova

**O que rompe.** Rompe a ideia — contábil, jurídica, jornalística, acadêmica — de que a evidência é
o artefato entregue. Se a peça foi fabricada por um sistema que ninguém lê por inteiro, olhar a peça
não diz se ela está certa; diz apenas que ela existe. A prova passa a ser o caminho: cada chamada,
cada decisão, cada tentativa que falhou. E rompe, de quebra, o estatuto do log como coisa
descartável de trinta dias.

**Por que agora, e não há cinco anos.** Porque existe uma camada comum onde antes havia formatos
proprietários — as convenções GenAI do OpenTelemetry, sobre as quais Langfuse, Phoenix e os demais
constroem; porque o mercado se consolidou em 2026 (ClickHouse compra Langfuse em janeiro; OpenAI
compra promptfoo), o que é sinal de que a camada virou infraestrutura e não experimento; porque a
certificação começou a existir (~350 certificados ISO/IEC 42001); e porque a exigência normativa
saiu do papel em pelo menos um lugar — a Resolução CNJ 615/2025, no Brasil, exige rastreabilidade e
auditoria hoje, não em 2027.

**Onde está na difusão.** **Produto de nicho caminhando para adoção precoce**, e apenas em setor
regulado. Fora dele, instrumenta-se para depurar, não para provar.

**O que ainda falta acontecer.** Uma definição do que é uma trilha **completa** — sem ela, cada
fornecedor entrega o que lhe convém. Uma economia de retenção que torne guardar anos viável. Uma
forma de atestação por terceiro, porque trilha que só quem a produziu consegue verificar não é
prova. E a lei entrar em vigor: o artigo 12 já escorregou dezesseis meses.

**Quem bloqueia.** Os fornecedores de modelo, alegando segredo de negócio e segurança — e com
argumento legítimo, porque a trilha completa contém o prompt de sistema, o dado do cliente e o
caminho de contorno de salvaguardas.

### D4 — O custo de lembrar e de registrar passa a disputar orçamento com o custo de pensar

**O que rompe.** Rompe a premissa de que inferência é o caro e armazenamento é desprezível. Uma
trilha que permita reconstituir a execução precisa gravar prompt, parâmetros de amostragem, resposta
exata, e requisição **e** resposta de cada chamada de ferramenta — isto é, o registro do trabalho é
maior que o trabalho. Uma memória de anos idem. Quando o custo de guardar compete com o de produzir,
**esquecer vira decisão de projeto**, com política, interface e responsável — e não mais um efeito
colateral de limpeza de disco.

**Por que agora, e não há cinco anos.** Porque replay determinístico, que é a única técnica que
devolve a capacidade de depurar, exige gravar tudo dos dois lados; porque o volume já é mensurável
(90 bilhões de observações por mês numa plataforma só); e porque ficou medido que guardar mais não
melhora: perda de cerca de 25% quando o contexto cresce dez vezes, e queda de cerca de 30% em
assistentes comerciais na avaliação de memória de longo prazo. Há cinco anos, guardar tudo era
barato e parecia bom.

**Onde está na difusão.** **Produto de nicho.** Amostragem de trilha, políticas de expiração e
armazenamento em camadas existem e são vendidos; o que não existe é a leitura disso como escolha de
projeto — e não como corte de custo.

**O que ainda falta acontecer.** Uma política de esquecimento com valor jurídico, isto é, que
sobreviva a uma pergunta em juízo. Compressão com garantia de reconstituição — hoje se comprime
resumindo, e resumo não reconstitui. E um preço que force a escolha: enquanto guardar for barato o
bastante, ninguém decide.

**Quem bloqueia.** Os próprios departamentos jurídicos, dos dois lados ao mesmo tempo: mandam
guardar por dever de prestar contas e mandam apagar por dever de proteção de dados. O bloqueio aqui
não é má-fé, é contradição normativa.

### Recusas registradas

- *Candidato "chatbot com memória" recusado como raiz:* a memória do ChatGPT foi para Plus e Pro e
  estava indo para Free e Go em 2026 — adoção caminhando para maioria em produto de massa; tratado
  como contexto na seção 3.
- *Candidato "observabilidade de aplicação" recusado como raiz:* log, métrica e tracing distribuído
  estão em maioria desde os anos 2010; contexto.
- *Candidato "teste automatizado e integração contínua" recusado como raiz:* maduro; contexto. O que
  não é maduro é o teste de sistema não determinístico, que é D2.
- *Candidato "RAG" recusado como raiz:* produto de massa desde 2024, e responde à pergunta "como
  achar o documento", não "o que o sistema sabe sobre você"; contexto.
- *Candidato "agente que usa ferramenta" recusado como raiz:* o MCP é padrão de fato com
  especificação datada de 28/07/2026; maduro; contexto — e é justamente por ser maduro que a
  **ausência** de primitiva de memória nele vira sinal fraco (seção 6).
- *Candidato "surge a profissão de auditor de IA" recusado como raiz e rebaixado a efeito de 2ª
  ordem (e14.2):* é consequência de D3, não ruptura independente; e, na forma genérica, é efeito
  proibido pela §3 da skill. Entrou com nome (BSI, Schellman, A-LIGN, KPMG) e mecanismo.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A memória se descola da ferramenta e vira objeto com dono
    efeitos:
      - id: e1
        ordem: 1
        efeito: "Contratos de trabalho e de prestação de serviço passam a dizer de quem é a memória do agente que a pessoa usou"
        sinal: fraco
        prazo: 2033
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "Ao sair de uma empresa, o profissional negocia que parte da memória leva e que parte apaga, como hoje negocia carteira de clientes"
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "Forma-se um mercado de memória de ofício, em que diretores de arte e roteiristas licenciam o acervo de decisões que treinou o agente deles"
                sinal: fraco
                prazo: 2044
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "Varas do trabalho brasileiras passam a aceitar memória de agente como prova de autoria e de jornada"
            sinal: fraco
            prazo: 2038
            confianca: baixa
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "A memória vira instrumento de vigilância retroativa do trabalhador e sindicatos passam a exigir cláusula de esquecimento em convenção coletiva"
                sinal: fraco
                prazo: 2043
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "Um formato de arquivo de memória com procedência assinada é adotado por pelo menos dois fornecedores grandes"
        sinal: fraco
        prazo: 2034
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Ferramentas de criação (edição de vídeo, design, DAW) passam a importar a memória do cliente em vez de pedir briefing"
            sinal: fraco
            prazo: 2038
            confianca: baixa
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "O briefing deixa de ser documento e vira a diferença entre duas memórias: o que o cliente já estabeleceu e o que muda neste projeto"
                sinal: fraco
                prazo: 2044
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "A tela em branco desaparece das ferramentas de criação: começar um projeto passa a ser escolher de qual acervo partir"
            sinal: fraco
            prazo: 2040
            confianca: baixa
      - id: e3
        ordem: 1
        efeito: "A interface de memória — ver, corrigir, versionar e apagar o que o sistema sabe sobre você — vira superfície de projeto tão disputada quanto o feed"
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "Mostrar o que muda no trabalho já feito quando se corrige uma anotação vira padrão de interação, como o desfazer"
            sinal: medio
            prazo: 2035
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "O objeto direto da interação deixa de ser o artefato e passa a ser o sistema que o produz: edita-se a máquina, não o documento"
                sinal: fraco
                prazo: 2042
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "Metáforas concorrentes de memória (diário, arquivo comunitário, controle de versão, fichário) disputam o lugar que pasta e linha do tempo ocuparam"
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "A metáfora vencedora determina o que as pessoas acreditam poder pedir que o sistema esqueça"
                sinal: fraco
                prazo: 2043
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: "Vazamento entre inquilinos e entre pessoas da mesma equipe faz empresas desligarem memória persistente em parte dos fluxos"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "Isolamento criptográfico por pessoa vira requisito de compra e encarece memória a ponto de nichos inteiros voltarem a operar sem ela"
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Consolida-se o desenho inverso ao de hoje: memória efêmera por padrão, persistente por exceção declarada"
                sinal: fraco
                prazo: 2041
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "Saúde, justiça e educação passam a exigir que a memória fique do lado do cliente, como já é o desenho da ferramenta de memória client-side da Anthropic"
            sinal: medio
            prazo: 2033
            confianca: media
      - id: e5
        ordem: 1
        efeito: "Plataformas de assistente respondem à portabilidade exportando memória em texto plano, cumprindo a letra e inutilizando a função"
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "ANPD e Comissão Europeia precisam definir em norma o que conta como memória estruturada e reutilizável, porque sem isso a portabilidade do Data Act não morde"
            sinal: fraco
            prazo: 2037
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "A definição legal é escrita sobre o desenho do maior fornecedor, que já terá publicado o formato que lhe convém"
                sinal: fraco
                prazo: 2043
                confianca: baixa
  - disrupcao: O julgamento substitui a conferência
    efeitos:
      - id: e6
        ordem: 1
        efeito: "Aprovado deixa de ser binário: entrega-se a taxa de acerto em N execuções, e não o resultado de uma"
        sinal: medio
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "Contratos de agência e de software passam a ter cláusula de variância aceitável, ao lado de prazo e escopo"
            sinal: fraco
            prazo: 2035
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "Seguradoras de responsabilidade profissional precificam variância, e quem não a mede paga prêmio maior"
                sinal: fraco
                prazo: 2042
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "Interfaces de criação passam a mostrar ao usuário quantas vezes o mesmo pedido daria o mesmo resultado"
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "O público aprende a ler variância como lê previsão do tempo e passa a exigir intervalo em vez de resposta única"
                sinal: fraco
                prazo: 2044
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: "Quem escreve o critério de avaliação passa a ter mais poder sobre o produto que quem escreve o código"
        sinal: medio
        prazo: 2031
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "A rubrica — o texto que define o que é bom — vira o artefato mais versionado e mais disputado da equipe"
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "Editoria, curadoria e direção de arte se reescrevem como rubricas executáveis, e o gosto passa a ter diff"
                sinal: fraco
                prazo: 2041
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: "Redações e estúdios contratam alguém cujo ofício é discordar do juiz automático por amostragem"
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: "O papel se parte em dois, quem escreve o critério e quem audita o critério, porque quem escreve não pode conferir a si mesmo"
                sinal: fraco
                prazo: 2043
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: "Benchmark público deixa de servir como prova de compra e vira folclore de marketing"
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "Cada comprador grande mantém conjunto privado de avaliação e não publica, e a comparação pública entre sistemas piora"
            sinal: medio
            prazo: 2032
            confianca: alta
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: "Sem base comparável pública, jornalismo e regulador passam a depender de auditor contratado para dizer qual sistema é melhor"
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: "Laboratórios pequenos e grupos acadêmicos perdem o único instrumento que os tornava comparáveis aos grandes"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: "A avaliação independente migra para consórcios financiados por quem é avaliado, repetindo o conflito de interesse da classificação de risco de crédito"
                sinal: fraco
                prazo: 2039
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: "A divergência entre juízes automáticos vira notícia quando uma decisão cara depender de um, e a confiança no juiz-LLM recua"
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: "Relatórios de avaliação passam a exigir métrica corrigida por acaso e painel de juízes, encarecendo a avaliação em ordem de grandeza"
            sinal: fraco
            prazo: 2035
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: "Avaliar passa a custar mais que produzir em classes inteiras de conteúdo, e produtos deixam de ser avaliados antes para serem apenas monitorados depois"
                sinal: fraco
                prazo: 2043
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: "O avaliador humano volta, agora caro e especializado, para as decisões que não suportam variância"
            sinal: medio
            prazo: 2033
            confianca: media
      - id: e10
        ordem: 1
        efeito: "A avaliação com consequência real — dinheiro, audiência, saúde — se estabelece como classe de prova ao lado do benchmark"
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: "Veículos de mídia passam a rodar arenas com consequência como formato editorial, no lugar do review de produto"
            sinal: fraco
            prazo: 2037
            confianca: baixa
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: "O público passa a confiar mais no placar da arena que na documentação do fornecedor, e a arena vira alvo de manipulação"
                sinal: fraco
                prazo: 2044
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: "Fornecedores restringem em termos de serviço o uso dos seus modelos em arenas comparativas com consequência real"
            sinal: fraco
            prazo: 2034
            confianca: media
  - disrupcao: A trilha vira o objeto de prova
    efeitos:
      - id: e11
        ordem: 1
        efeito: "O que se entrega a um cliente passa a incluir a trilha do processo, e não só o arquivo final"
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: "Estúdios e agências precificam a trilha como item de orçamento, como hoje precificam arquivo editável e cessão de direitos"
            sinal: fraco
            prazo: 2035
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: "Entregar sem trilha vira sinal de preço baixo e o mercado se parte em dois níveis"
                sinal: fraco
                prazo: 2042
                confianca: baixa
          - id: e11.2
            ordem: 2
            efeito: "A trilha substitui o portfólio em disputas de autoria: prova-se o que se fez mostrando o caminho, não a peça"
            sinal: fraco
            prazo: 2038
            confianca: baixa
            efeitos:
              - id: e11.2.1
                ordem: 3
                efeito: "Concursos, editais e bancas passam a pedir a trilha junto da peça, e a avaliação do processo compete com a da obra"
                sinal: fraco
                prazo: 2044
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: "Proveniência do conteúdo e proveniência do processo convergem num registro único, ligando o C2PA da peça à trilha de execução que a produziu"
        sinal: fraco
        prazo: 2036
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: "Plataformas de publicação passam a exibir como isto foi feito ao lado de quem fez isto"
            sinal: fraco
            prazo: 2040
            confianca: baixa
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: "Inspecionar o processo de uma peça vira gesto rotineiro de leitura de mídia, como conferir a fonte de uma notícia"
                sinal: fraco
                prazo: 2046
                confianca: baixa
      - id: e13
        ordem: 1
        efeito: "A retenção da trilha passa a ser definida por lei, e não por custo de disco"
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: "Apagar trilha vira ato juridicamente qualificado, como destruir documento contábil"
            sinal: fraco
            prazo: 2037
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: "Surge o arquivista de trilhas dentro de empresas de mídia, primo do arquivista de acervo e com a mesma função de guarda"
                sinal: fraco
                prazo: 2044
                confianca: baixa
          - id: e13.2
            ordem: 2
            efeito: "No Brasil a exigência chega primeiro pelo Judiciário e pelo controle externo (CNJ e TCU) e só depois pelo marco geral de IA"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e13.2.1
                ordem: 3
                efeito: "O setor público brasileiro vira comprador-âncora de observabilidade de agentes e o requisito de edital molda o produto vendido ao setor privado"
                sinal: fraco
                prazo: 2039
                confianca: baixa
      - id: e14
        ordem: 1
        efeito: "Fornecedores de modelo entregam trilha parcial, alegando segredo de negócio e risco de segurança na exposição do caminho completo"
        sinal: medio
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: "Firma-se a distinção entre trilha auditável por terceiro e trilha verificável apenas por quem a produziu, e só a primeira tem valor de prova"
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: "Atestação por terceiro ou por hardware entra na cadeia da trilha, como a assinatura digital entrou no documento"
                sinal: fraco
                prazo: 2042
                confianca: baixa
          - id: e14.2
            ordem: 2
            efeito: "Auditar IA vira linha de serviço das firmas que já emitem ISO/IEC 42001 — BSI, Schellman, A-LIGN, KPMG —, que trazem método e responsabilidade civil prontos"
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e14.2.1
                ordem: 3
                efeito: "A auditoria de IA ganha registro profissional e responsabilidade pessoal do auditor, mas só depois de um colapso público atribuído a um sistema aprovado"
                sinal: fraco
                prazo: 2046
                confianca: baixa
      - id: e15
        ordem: 1
        efeito: "A trilha vira superfície de ataque e de exposição, porque contém o prompt de sistema, o dado do cliente e o erro cometido"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: "Empresas passam a registrar menos por decisão deliberada, e a auditabilidade cai por escolha e não por descuido"
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: "Instala-se um conflito estável entre o dever de registrar e o dever de não guardar, que não se resolve em norma e passa a ser arbitrado caso a caso"
                sinal: fraco
                prazo: 2041
                confianca: baixa
  - disrupcao: O custo de lembrar e de registrar passa a disputar orçamento com o custo de pensar
    efeitos:
      - id: e16
        ordem: 1
        efeito: "Esquecer vira função de produto, com política declarada, interface própria e um responsável"
        sinal: fraco
        prazo: 2033
        confianca: media
        efeitos:
          - id: e16.1
            ordem: 2
            efeito: "A pessoa passa a escolher o que o sistema esquece, e esquecer vira gesto de interface tão comum quanto salvar"
            sinal: fraco
            prazo: 2037
            confianca: media
            efeitos:
              - id: e16.1.1
                ordem: 3
                efeito: "Apagar deixa de significar remover o arquivo e passa a significar remover a influência daquilo sobre o que o sistema faz, e a diferença entre as duas coisas vira litígio"
                sinal: fraco
                prazo: 2044
                confianca: baixa
          - id: e16.2
            ordem: 2
            efeito: "Provedores cobram por lembrar, com preço por volume e por prazo de guarda, como armazenamento em nuvem em camadas"
            sinal: medio
            prazo: 2034
            confianca: media
      - id: e17
        ordem: 1
        efeito: "Compressão de memória e de trilha vira disciplina própria, organizada em torno da pergunta se aquilo ainda reconstitui o que aconteceu"
        sinal: fraco
        prazo: 2035
        confianca: media
        efeitos:
          - id: e17.1
            ordem: 2
            efeito: "Separa-se trilha reconstituível de trilha apenas narrativa, e só a primeira serve de prova"
            sinal: fraco
            prazo: 2039
            confianca: baixa
            efeitos:
              - id: e17.1.1
                ordem: 3
                efeito: "O resumo automático da própria trilha vira o ponto cego da auditoria, porque ninguém audita o resumidor"
                sinal: fraco
                prazo: 2045
                confianca: baixa
      - id: e18
        ordem: 1
        efeito: "Projetos pequenos e independentes ficam sem trilha e sem memória longa por falta de orçamento, e a confiança vira função do tamanho de quem produz"
        sinal: fraco
        prazo: 2034
        confianca: media
        efeitos:
          - id: e18.1
            ordem: 2
            efeito: "Cooperativas e coletivos de mídia passam a compartilhar infraestrutura de trilha, como hoje compartilham estúdio e equipamento"
            sinal: fraco
            prazo: 2039
            confianca: baixa
            efeitos:
              - id: e18.1.1
                ordem: 3
                efeito: "Universidades e arquivos nacionais são cobrados a manter infraestrutura pública de registro de processo, como hoje mantêm acervo"
                sinal: fraco
                prazo: 2046
                confianca: baixa
      - id: e19
        ordem: 1
        efeito: "Lembrar mais deixa de melhorar o resultado, e a degradação medida com o crescimento do contexto vira limite prático de projeto"
        sinal: medio
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e19.1
            ordem: 2
            efeito: "O valor migra da quantidade de memória para a curadoria da memória, e produtos passam a competir por esquecer bem"
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e19.1.1
                ordem: 3
                efeito: "A memória curada de um domínio vira ativo licenciável, e o acervo — não o modelo — passa a ser o que se compra"
                sinal: fraco
                prazo: 2042
                confianca: baixa
```

### O que o bloco não diz: os mecanismos

O YAML carrega o efeito; o mecanismo mora aqui. Cada linha abaixo lê-se como *"porque o pai faz X,
o filho acontece"*. As classes de referência que sustentam cada `prazo` estão nomeadas.

**Classes de referência usadas neste mapa** (e é delas que saem os anos, não de intuição):

| Classe | O que levou | Por que serve |
|---|---|---|
| OpenTelemetry | do Dapper (2010) e Zipkin (2012) até padrão de fato (~2022) — **~10 anos** | padrão técnico de instrumentação que ninguém é obrigado a adotar |
| C2PA | fundada em 2021, spec 2.3 em dez/2025, +6.000 membros em jan/2026 e **nenhuma câmera conforme** no programa de conformidade em meados de 2026 — **5 anos e a cadeia ainda quebra no upload** | padrão de proveniência com consórcio forte e adoção parcial |
| Portabilidade numérica telefônica | obrigatória nos EUA em 2003, após ~7 anos de disputa regulatória | direito de levar embora algo que o fornecedor não quer entregar |
| Art. 20 do GDPR (portabilidade de dados) | em vigor desde 2018, cumprido com arquivos que ninguém reimporta — **8 anos sem função** | o que acontece quando a lei obriga a exportar sem definir o formato |
| Auditoria contábil obrigatória | Companies Act britânico de 1844; obrigatoriedade externa em 1900; nos EUA, só depois de 1929, com o Securities Act de 1933 — **décadas, e um colapso** | profissão de fé pública nasce de desastre, não de consenso |
| Teste A/B em produto digital | de prática de nicho (~2000) a padrão de mercado (~2010) — **~10 anos** | mudança de como se decide que algo está bom |
| HTTPS | Let's Encrypt em 2015, mais de 90% do tráfego cifrado por volta de 2021 — **~6 anos** | o que acontece quando alguém **remove o custo** de fazer a coisa certa |

#### D1 — A memória se descola da ferramenta

**e1** (contratos passam a dizer de quem é a memória) acontece porque, quando o acervo passa a ser
transferível, ele vira coisa com valor separável do emprego — e tudo que tem valor separável acaba
em cláusula. O sinal é fraco porque contratos hoje falam de *output* de IA, não de memória. Prazo
2033 pela classe do teste A/B: cerca de dez anos entre a prática de nicho e a convenção de mercado,
contando de 2023, quando a memória entre sessões começou a existir em produto.

**e1.1** (negociar o que se leva ao sair) porque a memória de trabalho é indistinguível, na prática,
da relação com o cliente — e carteira de clientes já é objeto de negociação em saída. **e1.1.1**
(mercado de memória de ofício) porque, se a memória é transferível e tem procedência assinada, ela
pode ser licenciada sem ser copiada: é a estrutura econômica do banco de imagens, aplicada a
decisões de projeto. Confiança baixa porque depende de e2 e de titularidade resolvida.

**e1.2** (varas do trabalho aceitando memória como prova) porque a memória registra quem pediu o
quê, quando, e o que foi corrigido — que é exatamente o que se tenta provar em disputa de autoria e
de jornada. Prazo 2038 pela classe do GDPR: entre a existência do objeto jurídico e a jurisprudência
estável passam de oito a dez anos. **e1.2.1** (vigilância retroativa e cláusula sindical) é o efeito
de **quem perde**: o mesmo registro que prova a jornada prova o erro cometido três anos antes, sem
prescrição prática. A resposta organizada a isso, historicamente, vem por convenção coletiva.

**e2** (formato com procedência adotado por dois grandes) porque um formato só vira formato quando
dois concorrentes o suportam — um fornecedor sozinho publicando padrão é documentação de produto.
Prazo 2034 pela classe C2PA: cinco anos de consórcio forte e a conformidade ainda não fechou; somo a
isso a inexistência de consórcio análogo para memória em 2026. **e2.1** (ferramentas de criação
importando memória em vez de pedir briefing) porque, havendo formato, importar o acervo do cliente é
mais barato que reconstruí-lo por entrevista — e o briefing é, funcionalmente, uma entrevista para
reconstruir memória que já existe em outro lugar. **e2.1.1** (o briefing vira diferença entre duas
memórias) porque, quando o acervo é versionado, a informação nova é o *diff*, não o documento
inteiro — a mesma transformação que o controle de versão fez com "a nova versão do arquivo".
**e2.2** (fim da tela em branco) porque a tela em branco é um artefato de sistemas sem estado: ela só
existe porque a ferramenta não sabia nada antes de você abri-la.

**e3** (a interface de memória vira superfície disputada) é o efeito mais próximo do público deste
mapa e o mais bem sustentado. Acontece porque, uma vez que o sistema age a partir do que lembra,
controlar o que ele lembra passa a ser a única forma real de controlar o que ele faz — e controle
que não tem tela não é exercido. Sinal **médio**, com três artefatos verificáveis: o Memory Sandbox
(UIST 2023) já propunha gerenciamento visível e interativo de memória; o SemanticCommit (Vaithilingam
e outros, 04/2025) construiu e testou com 12 participantes uma interface de resolução de conflito
entre intenções gravadas; e o DIS 2026 traz um levantamento do espaço de projeto de interfaces de
memória. Prazo 2031 porque os três artefatos já existem e o que falta é convenção, não invenção.

**e3.1** (mostrar o que muda ao corrigir uma anotação) porque memória sem análise de impacto é
edição às cegas: o estudo do SemanticCommit registra que metade dos participantes adotou um fluxo de
sinalizar conflitos primeiro e resolver localmente depois, em vez de aceitar correção global gerada
pela máquina. **e3.1.1** (edita-se a máquina, não o documento) porque, se corrigir a anotação muda
tudo que dela deriva, corrigir o documento passa a ser o caminho ineficiente. **e3.2** (disputa de
metáforas) porque a interface de memória ainda não tem vocabulário assentado, e o DIS 2026 lista
candidatas explicitamente: controle de versão, Zettelkasten, diário pessoal, arquivo comunitário,
requisitos. **e3.2.1** (a metáfora determina o que se pede para esquecer) porque metáfora de
interface não descreve o sistema, delimita o que o usuário imagina ser possível — quem pensa "pasta"
pede para deletar arquivo; quem pensa "diário", pede para reescrever uma página.

**e4** é a **retroação** de D1: vazamento faz desligar memória. Acontece porque memória persistente
multiplica a superfície de dado sensível por todas as sessões passadas, e porque isolamento em
implantações reais tem sido configuração e não garantia de arquitetura — 2026 já registrou casos de
vazamento entre inquilinos por infraestrutura compartilhada e regras de ameaça catalogadas para
contaminação de memória entre usuários. Prazo 2030: é o único ramo cujo gatilho já ocorreu.
**e4.1** (isolamento criptográfico encarece) porque separar por rótulo é barato e separar por chave
não é. **e4.1.1** (efêmero por padrão) porque, quando o custo do erro supera o ganho da lembrança, o
padrão se inverte — foi o que aconteceu com cookies de terceiros. **e4.2** (setores regulados exigem
memória do lado do cliente) porque o desenho já existe: a ferramenta de memória da Anthropic é
client-side por construção, e quem tem dever de guarda prefere guardar.

**e5** é **quem bloqueia**: exportação em texto plano. Acontece porque o custo de cumprir a letra é
próximo de zero e o custo de cumprir a função é o próprio fosso competitivo — e a evidência é direta,
sete produtos testados em julho de 2026, sete variações de não. Prazo 2032 pela classe do art. 20 do
GDPR, que produz exatamente este resultado há oito anos. **e5.1** (ANPD e Comissão definindo o que é
memória estruturada) porque a portabilidade do Data Act existe desde 12/09/2025 e não morde sem
definição do objeto — nomear o regulador e o mecanismo é o que tira este efeito da categoria
proibida de "reguladores criam categoria nova". **e5.1.1** (a norma é escrita sobre o desenho do
maior) porque quem publica primeiro define o vocabulário que o legislador tem disponível.

#### D2 — O julgamento substitui a conferência

**e6** (aprovado vira distribuição) porque, medida a variância, relatar um único resultado passa a
ser omissão — e a métrica já existe desde 2024 no `pass^k`, com o número que torna o problema
inegável: `pass^8 < 25%` em varejo no τ-bench. Confiança **alta** e prazo 2030 porque o mecanismo é
aritmético e o instrumento está pronto; o que falta é hábito de relatório. **e6.1** (cláusula de
variância em contrato) porque contrato precifica risco, e variância é risco mensurável. **e6.1.1**
(seguro precifica variância) porque seguradora cobra pelo que consegue medir, e passa a cobrar mais
de quem não mede — mecanismo idêntico ao do desconto por telemetria em seguro de automóvel.
**e6.2** (interfaces mostrando repetibilidade) porque, se a variância existe e o produto a esconde,
o usuário atribui o erro a si mesmo; mostrar é mais barato que consertar. **e6.2.1** (o público
aprende a ler intervalo) pela classe da previsão do tempo: levou décadas para "70% de chance de
chuva" virar leitura corrente, e é por isso que o prazo é 2044.

**e7** (o poder migra para quem escreve o critério) porque, quando a execução é automática, o que
resta de decisão humana é a definição do que conta como bom. Sinal médio: o cargo virou vaga própria
em fornecedores e laboratórios. **e7.1** (a rubrica vira o artefato mais disputado) porque ela passa
a ser o único lugar onde a discordância estética tem efeito material. **e7.1.1** (o gosto passa a ter
diff) porque rubrica versionada permite perguntar "quando foi que a gente mudou de opinião sobre
isso" — uma pergunta que direção de arte nunca pôde responder com precisão. **e7.2** (contratar
alguém para discordar do juiz) porque o juiz automático erra de forma sistemática, não aleatória: o
estudo de 2026 mostra juízes individualmente consistentes e mutuamente inconsistentes, e erro
sistemático só aparece por amostragem externa. **e7.2.1** (o papel se parte em dois) porque quem
escreve o critério tem incentivo a validar o próprio critério — é a separação entre preparar a
demonstração financeira e auditá-la.

**e8** (benchmark público vira folclore) tem **sinal forte** e é o único assim no mapa, com três
artefatos: a auditoria do BenchJack (05/2026) encontrando brechas exploráveis em SWE-bench,
WebArena, OSWorld e GAIA; a saturação medida no topo; e a contaminação não declarada por nenhum
fornecedor de modelo. Prazo 2029 porque o processo já está em curso. **e8.1** (conjuntos privados e
comparação pública pior) porque o comprador grande tem incentivo a não publicar o que o protege da
contaminação — e a soma de decisões racionais individuais destrói o bem comum. **e8.1.1** (jornalismo
e regulador dependem de auditor contratado) porque, sem base pública, a única fonte de comparação é
quem foi pago para olhar. **e8.2** é **quem perde**: laboratório pequeno e grupo acadêmico só eram
comparáveis ao grande porque a régua era pública e gratuita. **e8.2.1** (consórcios financiados pelo
avaliado) pela classe das agências de classificação de risco de crédito, cujo conflito estrutural —
quem é avaliado paga a avaliação — levou décadas para ser reconhecido e não foi resolvido.

**e9** é a **retroação** de D2: a confiança no juiz recua quando a divergência vira notícia. O
mecanismo é a dispersão medida (κ de 0,271 a 0,875 no JudgeBench) encontrar um caso com consequência.
**e9.1** (métrica corrigida por acaso e painel de juízes) porque a correção do problema é conhecida e
cara: o próprio estudo recomenda relatar métrica corrigida por acaso e auditar consistência e viés
conjuntamente. **e9.1.1** (avaliar custa mais que produzir) porque o custo de julgar cresce com o
número de juízes e com o tamanho do que se julga, enquanto o custo de gerar cai — as duas curvas se
cruzam. **e9.2** (volta do avaliador humano caro) porque, em decisão que não suporta variância, o
humano deixa de ser o caro e passa a ser o barato em relação ao painel de juízes.

**e10** (avaliação com consequência real) porque benchmark mede o que o benchmark mede, e
consequência real não é gamificável pelo mesmo caminho: o Alpha Arena, da Nof1, deu a cada modelo
US$ 10 mil de dinheiro real, mesmo prompt e mesmos dados, na temporada 1 entre 18/10 e 03/11/2025 —
e o resultado agregado foi de perda, o que é justamente o que um benchmark saturado não conseguiria
mostrar. Prazo 2033 pela classe do teste A/B. **e10.1** (arenas como formato editorial) porque
review de produto perdeu função quando o produto muda toda semana, e arena com consequência é
conteúdo que se renova sozinho. **e10.1.1** (a arena vira alvo de manipulação) porque toda métrica
que vira placar público passa a ser otimizada diretamente — lei de Goodhart, e o mecanismo é o mesmo
do BenchJack, só que com dinheiro. **e10.2** é **quem bloqueia**: restringir comparação em termos de
serviço é o instrumento mais barato de que o fornecedor dispõe.

#### D3 — A trilha vira o objeto de prova

**e11** (entrega passa a incluir a trilha) porque, se a peça foi fabricada por um sistema opaco, o
cliente que precisa prestar contas não pode fazê-lo com a peça na mão. Sinal médio: o Judiciário
brasileiro já exige rastreabilidade e auditoria por norma vigente (Resolução CNJ 615/2025), e o TCU
opera com registros auditáveis. Prazo 2032 pela classe do OpenTelemetry: cerca de dez anos do
artefato à convenção, contando das convenções GenAI. **e11.1** (precificar a trilha) porque item de
entrega que custa esforço vira linha de orçamento — o precedente direto é a cessão de arquivo
editável, que agências levaram anos para cobrar separadamente. **e11.1.1** (mercado de dois níveis)
porque o barato é sempre o que não presta contas. **e11.2** (trilha substitui portfólio em disputa de
autoria) porque portfólio prova posse do arquivo, não autoria do processo — e é exatamente a autoria
do processo que fica em dúvida quando a máquina fabrica. **e11.2.1** (editais pedindo a trilha)
porque quem compra com dinheiro público precisa justificar a escolha, e a trilha é a justificativa.

**e12** (proveniência de conteúdo e de processo convergem) porque hoje há duas cadeias que não se
falam: o C2PA assina *a peça* e a trilha registra *a execução*, e a pergunta do leitor — "isto foi
feito como?" — precisa das duas. Prazo 2036 pela classe C2PA, que em cinco anos montou consórcio de
mais de 6.000 membros e ainda não fechou conformidade de câmera, e cuja cadeia quebra quando a
plataforma remove metadado no upload. Confiança média porque a convergência é tecnicamente simples e
institucionalmente difícil: são consórcios diferentes, com incentivos diferentes. **e12.1**
(plataformas exibindo "como isto foi feito") porque já exibem "quem fez", e o custo marginal de mais
um campo é baixo — o LinkedIn já mostra ícone de Content Credentials clicável. **e12.1.1** (inspeção
de processo vira gesto de leitura) prazo 2046, no limite do horizonte, pela classe da checagem de
fonte jornalística, que levou uma geração para virar hábito e ainda é minoritária.

**e13** (retenção definida por lei) porque a decisão de guardar deixa de ser econômica quando há
dever de guarda: o artigo 26 do AI Act obriga o implantador a manter logs sob seu controle por pelo
menos seis meses. Prazo 2033 e não 2028 porque a data escorregou: o Regulamento (UE) 2026/1744
empurrou o artigo 12 de 02/08/2026 para 02/12/2027. **e13.1** (apagar trilha vira ato qualificado)
pela classe do documento contábil, cuja destruição é tipificada. **e13.1.1** (arquivista de trilhas)
porque guarda com prazo legal exige alguém responsável por ela — a função existe há um século em
acervo, e migra. **e13.2** é a **nota sobre o Brasil**: aqui a exigência chegou primeiro pelo
Judiciário e pelo controle externo, não pelo marco geral — CNJ 615/2025 está em vigor e o PL
2338/2023 ainda tramita na Câmara. Sinal médio e prazo 2031 porque já está acontecendo.
**e13.2.1** (setor público como comprador-âncora) porque requisito de edital define produto: o TCU já
compartilha código-fonte com mais de 100 órgãos, o que multiplica o mesmo requisito por toda a
administração.

**e14** é **quem bloqueia**, e tem confiança **alta** porque o incentivo é limpo e o argumento é
legítimo: a trilha completa contém prompt de sistema, dado de cliente e o caminho pelo qual uma
salvaguarda foi contornada. **e14.1** (trilha auditável por terceiro × verificável pelo produtor)
porque prova que só o interessado consegue conferir não é prova — é a distinção entre demonstração
financeira e demonstração auditada. **e14.1.1** (atestação na cadeia) pela classe da assinatura
digital, que levou cerca de duas décadas entre norma e uso corrente. **e14.2** (firmas de auditoria
entram) porque elas já têm o que falta: método, seguro e responsabilidade civil — e já emitem ISO/IEC
42001, com cerca de 350 certificados no mundo em abril de 2026. **e14.2.1** (registro profissional e
responsabilidade pessoal) prazo 2046, no limite do horizonte, pela classe mais dura do mapa: a
auditoria contábil só virou obrigatória e pessoalmente responsável depois de 1929. O mecanismo
embutido é desagradável e precisa ser dito: **esse efeito exige um desastre**.

**e15** é a **retroação** de D3: a trilha é o ativo e o passivo ao mesmo tempo. **e15.1** (registrar
menos deliberadamente) porque, quando o registro vira risco, reduzir registro vira gestão de risco —
e isso é indistinguível, de fora, de boa prática de minimização de dados. **e15.1.1** (conflito
estável entre registrar e não guardar) porque as duas obrigações têm base normativa própria e nenhuma
revoga a outra: é **contradição registrada, não resolvida** (ver §4 abaixo).

#### D4 — O custo de lembrar e de registrar

**e16** (esquecer vira função de produto) porque, quando guardar custa, alguém tem de decidir o que
não guardar — e decisão recorrente com consequência vira função, política e dono. Sinal fraco: a
expiração de memória aparece hoje como *recomendação de segurança* na documentação, não como recurso
vendido. **e16.1** (esquecer vira gesto de interface) porque o usuário é quem sabe o que está errado
no que foi anotado sobre ele, e hoje não tem como dizê-lo com precisão. Esta é a outra metade de
**e3**: a mesma tela. **e16.1.1** (apagar o arquivo × apagar a influência) porque, em sistema que
aprende, remover o registro não remove o efeito — e a diferença entre as duas coisas é exatamente o
que um pedido de eliminação sob a LGPD pressupõe resolvido. **e16.2** (cobrar por lembrar) pela
classe do armazenamento em camadas, que já funciona assim; é o efeito mais previsível do ramo, e a
§6 registra que ele é extrapolação linear.

**e17** (compressão como disciplina) porque a única saída para guardar mais barato é guardar menos
bits, e a pergunta que separa boa de má compressão aqui não é fidelidade perceptual, é
reconstituição. **e17.1** (reconstituível × narrativa) porque hoje se comprime trilha resumindo, e
resumo não permite reexecutar. **e17.1.1** (ninguém audita o resumidor) porque o resumo é produzido
pelo mesmo tipo de sistema que se quer auditar — o ponto cego é estrutural, não descuido.

**e18** é **quem perde** no ramo econômico: confiança vira função de tamanho. Porque trilha completa,
painel de juízes e memória isolada por chave são custos fixos, e custo fixo sempre concentra.
**e18.1** (cooperativas compartilhando infraestrutura de trilha) pela classe do estúdio compartilhado
e da cooperativa de produção, que é como coletivos de mídia já resolvem custo fixo. **e18.1.1**
(infraestrutura pública de registro) prazo 2046, no limite do horizonte, pela classe do arquivo
nacional e da rede pública de pesquisa: a demanda aparece quando o custo privado exclui gente
demais.

**e19** (lembrar mais deixa de melhorar) tem confiança **alta** porque já está medido dos dois lados:
perda de cerca de 25% quando o contexto cresce dez vezes, no relatório da Mem0, e queda de cerca de
30% em assistentes comerciais no LongMemEval. Prazo 2030 porque a medida já existe e o que falta é a
consequência de projeto. **e19.1** (valor migra para curadoria) porque, se mais memória piora,
competir por volume deixa de fazer sentido e competir por seleção passa a fazer. **e19.1.1** (o
acervo vira o que se compra) porque, se o modelo é intercambiável e a memória curada não é, o ativo é
a memória — é a inversão que o mercado de dados já viveu quando o algoritmo virou commodity.

### Cruzamentos

**Convergência 1 — alguém tem de definir o que é registro suficiente.** `e5.1` (ANPD e Comissão
definindo o que conta como memória estruturada) vem de D1; `e14.1` (a distinção entre trilha
auditável por terceiro e trilha verificável pelo produtor) vem de D3. São ramos de raízes diferentes
chegando ao mesmo lugar: **a portabilidade e a auditabilidade dependem, ambas, de uma definição
normativa de suficiência do registro** — e quem escrever essa definição decide as duas coisas de uma
vez. É o achado mais valioso deste mapa, e é acionável: é onde um grupo de pesquisa brasileiro
poderia ter efeito desproporcional, porque a definição ainda não existe em lugar nenhum.

**Convergência 2 — confiança vira função de orçamento.** `e9.2` (volta do avaliador humano caro, de
D2), `e18` (projetos pequenos sem trilha, de D4) e `e11.1.1` (mercado de dois níveis, de D3) chegam
ao mesmo efeito por três caminhos independentes: painel de juízes, custo de guarda e custo de
entrega. Nenhum deles sozinho concentra o mercado; os três juntos, sim.

**Convergência 3 — lembrar e esquecer são a mesma tela.** `e3` (interface de memória, de D1) e
`e16.1` (esquecer como gesto, de D4) são, para quem projeta, uma única superfície. Projetar uma sem
a outra produz exatamente o que existe hoje: uma lista do que o sistema anotou, sem o botão que
importa.

**Retroalimentação negativa.** `e15` → `e15.1` enfraquece a própria raiz D3: quanto mais valiosa a
trilha como prova, mais perigosa ela como exposição, e mais racional registrar menos. O ciclo se
fecha em `e17.1`, que é a tentativa de escapar dele guardando menos sem perder reconstituição. Se
`e17` falhar, D3 estagna por dentro, sem que nenhuma força externa a bloqueie.

**Retroalimentação positiva.** `e19.1` (valor migra para curadoria) reforça D1: se a memória curada
é o ativo, o dono dela quer poder levá-la — e a pressão por portabilidade deixa de ser bandeira de
consumidor e vira interesse comercial de quem paga a conta.

**Contradição, registrada e não resolvida.** `e13.1` (apagar trilha vira ato juridicamente
qualificado) e `e16.1` / `e16.1.1` (a pessoa escolhe o que o sistema esquece, e "apagar" passa a
significar remover a influência) **não podem coexistir integralmente**. Uma diz que há dever de
guarda; a outra, que há direito de eliminação. As duas têm base normativa própria hoje: dever de
prestação de contas de um lado, LGPD e GDPR do outro. O que decide entre elas, caso a caso, é se a
trilha é classificada como documento de prestação de contas ou como dado pessoal do titular — e essa
classificação ainda não foi feita para memória de agente em lugar nenhum. É o litígio que este mapa
prevê com mais confiança e menos data.

### Cobertura STEEP e quem perde

- **Social:** e1.2.1 (vigilância retroativa), e3.2.1 (o que se acredita poder esquecer), e6.2.1
  (público lendo variância), e12.1.1 (inspecionar processo como leitura).
- **Tecnológico:** e2, e14.1.1, e17, e19 — formato, atestação, compressão, limite de contexto.
- **Econômico:** e11.1, e16.2, e18, e19.1.1 — precificação, cobrança por guarda, concentração,
  acervo como ativo.
- **Ecológico:** **vazio, e registro que ficou vazio.** Guardar trilha e memória por décadas tem
  custo energético e material, mas não encontrei nenhum dado que ligasse volume de telemetria de
  agentes a consumo, e não vou inventar o elo. É lacuna do mapa, não ausência do fenômeno.
- **Político:** e5.1, e13.2, e13.2.1, e14.2.1 — regulação, controle externo, profissão regulada.
- **Quem perde:** trabalhadores sob memória retroativa (e1.2.1); laboratórios pequenos e academia
  (e8.2); produtores independentes (e18); e, de forma menos óbvia, **o público**, em e8.1.1 — porque
  a comparação entre sistemas sai do domínio público e passa a ser vendida.

### Prazo e horizonte

Nenhum efeito de 1ª ou 2ª ordem passa de 2046. Três efeitos de 3ª ordem encostam no horizonte
(`e12.1.1`, `e14.2.1`, `e18.1.1`, todos em 2046) e nenhum o ultrapassa — o que é uma escolha, não
uma constatação: com horizonte de vinte anos, efeitos de terceira ordem cabem dentro da janela, e
empurrá-los para fora seria fingir precisão que não tenho. Os três são os mais frágeis do mapa, e
estão marcados com confiança baixa.

## 6. Sinais fracos e wildcards

### Sinais fracos

**1. Um formato de fio para memória existe, com implementação de referência, e ninguém adotou.**
*Onde foi visto:* `memorywire`, arXiv 2606.01138, submetido em 31/05/2026, autor único, CC-BY 4.0.
Especifica cinco operações (`remember`, `recall`, `forget`, `merge`, `expire`) sobre quatro tipos de
memória, com interface `MemoryStore`, roteador de fan-out, canal opcional de governança com humano no
laço, implementação aberta com cinco adaptadores (sqlite-vec, mem0, Letta, Cognee, pgvector) e suíte
de conformidade passando 68 de 80 células sem falhas. *O que mudaria:* se adotado por dois grandes,
D1 inteira antecipa cerca de cinco anos, e `e2` sai de 2034 para perto de 2029. *Sinal observável de
crescimento:* um fornecedor de modelo publicar adaptador, **ou** o MCP ganhar primitiva de memória na
lista de extensões — hoje há Tasks, Skills e Apps, e não há memória.

**2. A ausência de memória no MCP.** *Onde foi visto:* especificação de 28/07/2026, que padroniza
Resources, Prompts, Tools e Elicitation, e cujas extensões notáveis são Tasks, Skills over MCP e MCP
Apps. *Por que é sinal:* o protocolo que resolveu a interoperabilidade de ferramentas passou ao largo
do estado. Isso ou significa que a memória será resolvida dentro do modelo (e D1 murcha), ou
significa que ela ainda não tem dono — e o que não tem dono acaba capturado. *Sinal observável:* uma
proposta de extensão de memória entrar em grupo de trabalho.

**3. O paradoxo consistência–viés nos juízes de produção.** *Onde foi visto:* arXiv 2606.19544, 21
juízes, 9 fornecedores, 3 benchmarks, ~541 mil julgamentos: dois juízes de produção com teste-reteste
acima de 0,95 e viés posicional acima de 0,10 — isto é, **estáveis e errados da mesma forma toda
vez**, que é o tipo de erro que auditoria de amostra não pega. *O que mudaria:* torna `e7.2` (alguém
contratado para discordar) obrigatório, não opcional. *Sinal observável:* o primeiro relatório
comercial de avaliação que publique κ corrigido por acaso ao lado da concordância bruta.

**4. O artigo 12 escorregou e o artigo 50 não.** *Onde foi visto:* Regulamento (UE) 2026/1744,
publicado em 24/07/2026, em vigor em 27/07/2026, adiando as obrigações de alto risco do Anexo III de
02/08/2026 para 02/12/2027 — enquanto a transparência sobre conteúdo gerado do artigo 50 seguiu
valendo desde 02/08/2026. *Por que é sinal:* revela a ordem de prioridade política — **rotular o
produto é inegociável, registrar o processo é adiável**. *Sinal observável:* se um próximo omnibus
adiar também o artigo 50, ou se o artigo 12 escorregar de novo; qualquer um dos dois empurra D3 para
depois de 2035.

**5. O setor público brasileiro como laboratório involuntário.** *Onde foi visto:* portal de IA do
TCU, com 12 iniciativas em operação, registros auditáveis, vedação explícita de decisão automatizada
sobre cidadão, e compartilhamento de código-fonte com mais de 100 órgãos; e Resolução CNJ 615/2025,
que já exige rastreabilidade e auditoria. *Por que é sinal:* o Brasil está exigindo trilha antes da
União Europeia, por via administrativa em vez de legislativa. *Sinal observável:* o primeiro edital
federal que liste trilha de execução de agente como **entregável**, e não como requisito de
segurança.

**6. O Letta arquivou o próprio servidor e migrou para `letta-code`.** *Onde foi visto:* o
repositório `letta-ai/letta` declara que o código ativo se mudou e que o servidor da V1 foi para um
branch de arquivo. *Por que é sinal:* o campo da memória persistente está se reescrevendo em torno de
**agentes de código**, não de assistentes conversacionais — o que muda quem define os requisitos.
*Sinal observável:* benchmarks de memória migrarem de conversa de várias sessões para tarefa de
engenharia de vários dias.

**7. Consolidação simultânea dos dois lados.** *Onde foi visto:* ClickHouse compra Langfuse em
16/01/2026 (dono do dado compra a observabilidade); e a página do promptfoo declara aquisição pela
OpenAI (dono do modelo compra a avaliação). *Por que é sinal:* a camada de confiança está sendo
absorvida pelas camadas que ela deveria vigiar. *Sinal observável:* a primeira ferramenta de
avaliação aberta a mudar de licença depois de adquirida.

### Wildcards

**W1 — Um colapso público atribuído a um sistema que passou na avaliação.** *Mecanismo:* um juiz
automático com viés posicional acima de 0,10 aprova, de forma consistente, uma família de decisões
com o mesmo defeito; o erro é invisível caso a caso e só aparece no agregado, meses depois; a
auditoria mostra que todos os envolvidos seguiram o processo e usaram as ferramentas certas. *Por que
é improvável:* exige que a falha seja grande, rastreável **e** atribuível — a atribuição é a parte
difícil, porque sistemas compostos diluem responsabilidade. *O que faria com o mapa:* antecipa
`e14.2.1` de 2046 para perto de 2035 e transforma `e9` de retroação em ruptura, pela classe de 1929.
*Sinal precoce:* a primeira ação judicial em que a defesa seja "o avaliador automático aprovou".

**W2 — Envenenamento de memória em escala.** *Mecanismo:* injeção que contamina memória compartilhada
e se propaga entre sessões e entre usuários — o padrão de falha já está catalogado em regras de
ameaça de 2026 (contaminação de memória, vazamento entre inquilinos por infraestrutura
compartilhada). Basta que ocorra em um produto de grande base instalada. *Por que é improvável:* os
fornecedores grandes já tratam isolamento como requisito, e o ataque precisa sobreviver à revisão
humana em pelo menos um ponto. *O que faria com o mapa:* memória persistente vira opt-in explícito,
`e4.1.1` (efêmero por padrão) antecipa uma década, e D1 recua cinco anos. *Sinal precoce:* o primeiro
CVE de severidade alta num framework de memória de agente com adoção de produção.

**W3 — Uma decisão judicial brasileira declarando a memória do agente dado pessoal do titular.**
*Mecanismo:* caso concreto com dano — alguém prejudicado por algo que um agente corporativo "lembrou"
a seu respeito — leva a ANPD ou o Judiciário a enquadrar o acervo sob a LGPD, disparando direito de
acesso, correção e eliminação sobre a memória. *Por que é improvável:* exige caso com dano
demonstrável e nexo, e o objeto ainda não é nomeado em norma. *O que faria com o mapa:* força a
portabilidade por via judicial **antes** da via técnica — inverte a ordem de D1, em que o formato
vinha primeiro e a norma depois, e torna `e5.1` irrelevante porque a definição vem por sentença.
*Sinal precoce:* a ANPD abrir tomada de subsídios especificamente sobre memória de agentes, ou
incluí-la no mapa de temas prioritários do próximo biênio.

**W4 — Contexto barato de dezenas de milhões de tokens torna "memória" desnecessária.** *Mecanismo:*
o custo por token cai a ponto de recarregar todo o histórico a cada sessão ficar mais barato que
manter infraestrutura de recuperação. *Por que é improvável — e por que não é impossível:* a
degradação medida hoje (cerca de 25% de perda quando o contexto cresce dez vezes) diz que o problema
não é só de preço, é de atenção; mas isso é uma propriedade da arquitetura atual, não uma lei. *O que
faria com o mapa:* D1 e D4 perdem a raiz; D2 e D3 permanecem inteiras, porque avaliar e auditar não
dependem de como o contexto chega. É este wildcard que o pré-mortem da §7 trata como a razão nº 1 de
o mapa estar errado. *Sinal precoce:* um modelo comercial publicar desempenho **estável** em
LongMemEval ou BEAM com contexto de 10 milhões de tokens, sem camada de memória.

## 7. Contra o próprio mapa

Esta seção é o relato da bateria da §6 da skill, aplicada ao mapa pronto, e o registro auditável do
que ela mudou. A bateria derrubou coisas.

### 7.1 Pré-mortem: é 2046 e este mapa se mostrou errado. Por quê?

**Razão 1 — o problema se dissolveu na arquitetura.** Contexto amplo e barato fez "memória" virar
apenas "carregar tudo", e a infraestrutura de recuperação, versionamento e portabilidade nunca
precisou existir. O mapa terá descrito com precisão uma solução para um problema temporário. *Aponta
para:* D1 e D4 inteiras. *Ação:* `e2` rebaixado e `e16` rebaixado (abaixo), e o wildcard W4 criado
explicitamente para carregar este risco.

**Razão 2 — ninguém lê a trilha.** A história da observabilidade em software é a de instrumentar
muito e olhar pouco: a maior parte do log produzido no mundo nunca foi lida por ninguém. Se a trilha
de agente seguir o mesmo caminho, ela vira custo de conformidade — existe, é cara, e não produz
confiança nenhuma. *Aponta para:* `e11`, `e12` e todo o ramo de convergência com proveniência.
*Ação:* `e12` rebaixado de confiança alta para média e empurrado de 2032 para 2036.

**Razão 3 — a regulação escorrega de novo.** Já escorregou dezesseis meses em 2026, por regulamento
publicado seis dias antes do prazo original. Um mapa de vinte anos que apoia três ramos em data
regulatória está apoiado no item mais volátil que existe. *Aponta para:* `e13`, `e14`, `e5.1`. *Ação:*
`e13` empurrado de 2029 para 2033.

### 7.2 Extrapolação linear

**`e16.2` (provedores cobram por lembrar) é extrapolação linear pura**: é armazenamento em camadas
aplicado a um objeto novo, "mais do mesmo, maior". Ele só ganha não-linearidade quando amarrado a
`e19` — porque, se lembrar mais **piora** o resultado, a cobrança deixa de ser só preço e vira
mecanismo de projeto: o fornecedor passa a ter incentivo a vender esquecimento como qualidade. Ficou
no mapa com essa amarração escrita; sem ela, seria contexto e não efeito.

**`e11.1` (precificar a trilha) roça a mesma crítica**: é a cessão de arquivo editável aplicada a
outro artefato. Mantive porque o mecanismo muda — arquivo editável é entregue uma vez, trilha tem
prazo de guarda, e prazo de guarda cria obrigação continuada, que arquivo não cria.

### 7.3 Velocidade de adoção confrontada com a classe de referência

- **`e2`** (formato de memória adotado por dois grandes) estava em **2031**. A classe C2PA diz cinco
  anos de consórcio robusto para chegar a conformidade incompleta; e o C2PA tinha, em 2021, o que a
  memória não tem em 2026: um consórcio. **Empurrado para 2034.**
- **`e12`** (convergência de proveniência de conteúdo e de processo) estava em **2032**. Exige que
  dois consórcios distintos se coordenem, o que nenhuma classe de referência do mapa faz em menos de
  uma década. **Empurrado para 2036.**
- **`e13`** (retenção definida por lei) estava em **2029**, contando do prazo original do artigo 12.
  O prazo original não existe mais. **Empurrado para 2033.**
- **`e14.2.1`** (auditoria de IA com registro e responsabilidade pessoal) estava em **2040**. A classe
  é a auditoria contábil, que precisou de 1929 e de quatro anos depois dele. **Empurrado para 2046**,
  no limite do horizonte, com o mecanismo do desastre escrito às claras.
- **`e19`** (lembrar mais deixa de melhorar) estava em **2028**. O número já existe, mas virar limite
  de projeto declarado exige que produtos o admitam publicamente, o que nenhum fez. **Empurrado para
  2030.**

### 7.4 A raiz que não acontece

- **Se D1 não acontecer** (a memória nunca se descola da ferramenta): sobram D2, D3 e D4 quase
  inteiras — perde-se `e19.1.1` e enfraquece-se `e16.1`. D1 é a raiz mais independente.
- **Se D2 não acontecer** (a conferência determinística de algum modo volta a servir): cai o ramo
  inteiro de e6 a e10, e D3 perde `e14.1`. Mas D2 não acontecer exige que a não-determinação
  desapareça, o que é afirmação sobre a arquitetura, não sobre o mercado.
- **Se D3 não acontecer** (a trilha nunca vira prova): D1 e D2 permanecem, D4 perde metade — `e17` e
  `e18` são majoritariamente sobre trilha.
- **Se D4 não acontecer** (guardar continua barato): perde-se o único freio econômico do mapa, e D1 e
  D3 aceleram. Curiosamente, o mapa **piora** sem D4: fica só com aceleração.

Nenhuma raiz sustenta sozinha mais da metade dos efeitos, o que responde à pergunta da §6.4: não há
uma raiz única disfarçada de quatro. A dependência mais forte é D3 → D4, e está declarada.

### 7.5 Suposições escondidas

1. **Energia e armazenamento continuam baratos o bastante para que "guardar tudo" seja o padrão de
   partida.** Se não forem, D4 vira a raiz principal e as outras três se subordinam a ela.
2. **Modelos continuam acessíveis a terceiros por API.** Sem isso não há arena comparativa (`e10`),
   nem avaliação independente (`e8.1.1`), nem auditoria externa (`e14.1`). Uma mudança de termos de
   serviço derruba três ramos de uma vez — e `e10.2` está no mapa justamente porque essa mudança já
   é do interesse de quem pode fazê-la.
3. **A web continua raspável e o benchmark público continua possível de montar.** Se deixar de ser,
   `e8.1` (conjuntos privados) acontece por outro caminho e mais rápido.
4. **O Brasil aprova algum marco legal de IA no horizonte.** O PL 2338/2023 foi aprovado no Senado em
   dezembro de 2024 e segue na Câmara. Se não passar, `e13.2` continua valendo pela via administrativa
   (CNJ, TCU), que é por onde já está acontecendo — esta é a suposição menos frágil das cinco.
5. **A instrumentação continua sendo escrita em inglês.** Trilha em português, com rubrica em
   português julgada por juiz automático treinado majoritariamente em inglês, é caso que não encontrei
   testado em lugar nenhum. Se a diferença for grande, `e7.1` e `e9.1` têm custo extra no Brasil que o
   mapa não contabiliza.

### 7.6 Viés do autor

Dois efeitos estão aqui porque me interessam, não porque a evidência os imponha. **`e10.1`** (arenas
com consequência como formato editorial) e **`e11.2`** (a trilha substituindo o portfólio em disputa
de autoria) são a projeção, em escala de mercado, de uma convicção de professor: a de que avaliar o
processo é mais honesto que avaliar o produto. É exatamente o que eu gostaria que fosse verdade, e
isso é motivo para desconfiar. `e10.1` foi rebaixado. `e11.2` ficou com confiança baixa e sinal
fraco, e deve ser o primeiro alvo de quem for confrontar este mapa.

Há um viés a mais, de origem: cheguei a este tema pela zona de interesse "Agentes", e o mapa trata
memória e auditoria como problema de **infraestrutura**. Um mapa escrito a partir de "Cultura" ou de
"Trabalho" teria posto `e1.2.1` (vigilância retroativa) como raiz, não como neto.

### 7.7 Calibração

Confianças por ordem, depois das alterações: **ordem 1** — alta 5, média 14, baixa 0; **ordem 2** —
alta 1, média 21, baixa 10; **ordem 3** — alta 0, média 0, baixa 27. A distribuição cai
monotonicamente com a ordem, como exige a §3.6 da skill. As cinco confianças altas de 1ª ordem
(`e6`, `e7`, `e8`, `e14`, `e19`) são todas ancoradas em número publicado, não em raciocínio: `pass^8
< 25%`, vaga própria existente, auditoria de brechas do BenchJack, incentivo declarado de segredo de
negócio, e as duas medidas de degradação de contexto. A única confiança alta de 2ª ordem (`e8.1`) é
alta porque o comportamento já é observado: comprador grande com conjunto privado que não publica.

### 7.8 Registro de alterações (antes → depois)

- **`e2`**: prazo **2031 → 2034**, porque a classe C2PA levou cinco anos com consórcio e a memória não
  tem consórcio. *(cota de D1)*
- **`e1`**: confiança **alta → media**, porque não encontrei uma única cláusula contratual real sobre
  memória de agente — só sobre output. *(D1)*
- **`e3`**: sinal **forte → medio**, porque os três artefatos que sustentam o efeito são acadêmicos
  (UIST 2023, estudo com 12 participantes em 2025, levantamento DIS 2026) e um único controle de
  produto em beta; três artefatos seriam sinal forte se fossem de produção. *(D1)*
- **`e10.1`**: confiança **media → baixa**, por viés do autor declarado em 7.6. *(cota de D2)*
- **`e8.3` — REMOVIDO** (ia para a seção 12): era *"escolas de comunicação reorganizam o currículo em
  torno de avaliação"*. É efeito proibido pela §3 da skill — serve para qualquer tema, não tem curso
  nomeado nem mecanismo que o ligue ao pai. *(D2)*
- **`e12`**: confiança **alta → media** e prazo **2032 → 2036**, pelo pré-mortem 2 e pela classe C2PA.
  *(cota de D3)*
- **`e13`**: prazo **2029 → 2033**, porque a data em que eu me apoiava foi revogada pelo Regulamento
  (UE) 2026/1744. *(D3)*
- **`e14.2.1`**: prazo **2040 → 2046**, pela classe da auditoria contábil, que exigiu um colapso.
  *(D3)*
- **"Surge a profissão de auditor de IA" — REBAIXADO de raiz candidata a efeito de 2ª ordem
  (`e14.2`)**, com firmas nomeadas e mecanismo escrito, porque na forma genérica é efeito proibido.
  *(D3)*
- **`e16`**: sinal **medio → fraco**, porque não encontrei nenhum produto que **venda** esquecimento;
  expiração aparece só como recomendação de segurança em documentação. *(cota de D4)*
- **`e19`**: prazo **2028 → 2030**, por 7.3. *(D4)*
- **"e20 — reguladores criam uma categoria jurídica nova para memória" — REESCRITO** como `e5.1`, com
  ANPD e Comissão Europeia nomeadas e com o mecanismo (a portabilidade do Data Act não morde sem
  definição do objeto), porque na forma original era efeito proibido. *(D1)*

Cota da §6 cumprida: pelo menos um efeito rebaixado ou removido por raiz — D1 (`e2`, `e1`, `e3`), D2
(`e10.1`, `e8.3` removido), D3 (`e12`, `e13`, `e14.2.1`), D4 (`e16`, `e19`).

## 8. O que a máquina errou

Eu sou a máquina. O que segue é sobre o meu próprio trabalho nesta rodada, em 12/09/2026.

1. **Quase escrevi a data errada do artigo 12 do AI Act.** A primeira busca devolveu um post de
   fornecedor de compliance afirmando que "o cumprimento do artigo 12 começa em 2 de agosto de 2026",
   com ar de fato estabelecido. A página do próprio artigo diz 02/12/2027 e 02/08/2028. A discrepância
   só apareceu porque fui verificar a fonte primária, e a explicação — o Digital Omnibus, Regulamento
   (UE) 2026/1744, publicado nove dias antes do prazo original — exigiu uma terceira busca. **Se eu
   tivesse confiado no resumo da busca, três efeitos deste mapa (`e13`, `e13.1`, `e14`) estariam
   ancorados numa data revogada.** É o erro mais grave que eu cometeria hoje neste tema, e ele quase
   passou.
2. **Números de estrelas do Langfuse: quatro valores diferentes.** As fontes secundárias devolveram
   31,5 mil, 24,6 mil, 21 mil e 22 mil, e o trecho de busca de uma delas chegou a dizer ">2.000
   GitHub stars" — erro de transcrição da própria fonte, que o anúncio da ClickHouse desmente com
   "20.000+". Usei o site do Langfuse e o anúncio da ClickHouse, e **não conciliei**: a faixa é
   imprecisa e está declarada como tal na seção 3.
3. **Instalações de SDK por mês: três números para a mesma métrica.** A ClickHouse diz 23,1 milhões
   em janeiro; o site do Langfuse diz 65 milhões; uma fonte secundária diz 26 milhões. Citei os dois
   primários lado a lado e não tirei média — média de números incompatíveis é invenção com aparência
   de rigor.
4. **Não consegui abrir a ACM Digital Library (HTTP 403), duas vezes.** "Metaphors for Memory:
   Charting a Design Space of AI Memory Tools and Interfaces" (DIS 2026) e o extended abstract do CHI
   2026 sobre memória de longo prazo usável e respeitosa da privacidade eu **conheço apenas pelo
   resumo devolvido pela busca**. `e3.2` e `e3.2.1` se apoiam nisso. São, por essa razão, os efeitos
   mais frágeis de D1, e não os listei entre as fontes abertas.
5. **Dois PDFs não extraíram texto legível** — o do `memorywire` e o do Memory Sandbox. Do primeiro
   consegui o resumo pela página `abs` do arXiv, e é dela que vêm os números que cito. Do segundo não
   consegui nada, e por isso ele aparece na prosa da seção 5 como referência de existência e **não
   está na lista de fontes**.
6. **O guia de carreira de "evals engineer" que usei não tem fonte para quase nada.** Ele afirma
   velocidade de contratação cinco vezes maior e faixas salariais sem metodologia, sem link, sem
   pesquisa. Usei dele **uma única afirmação** — que o cargo passou de linha dentro de uma vaga de ML
   sênior a vaga própria — e mesmo essa é assertiva do autor. Sustenta `e7`, que está com confiança
   alta por outros motivos (o mecanismo, não a fonte). Registro como ponto fraco.
7. **A aquisição do promptfoo pela OpenAI eu li na página do próprio repositório**, sem conferir com
   anúncio independente. Trato como alegação do projeto, não como fato verificado, e a seção 3 diz
   isso com essas palavras.
8. **O relatório mais citado sobre memória é publicado por quem vende memória.** As notas de LoCoMo e
   LongMemEval da seção 3 são auto-relatadas pela Mem0 sobre a Mem0. Mantive porque o número que
   **uso** no mapa é o desfavorável — a perda de cerca de 25% com o crescimento do contexto —, e
   empresa nenhuma inventa número contra si mesma. Mas o par de números favoráveis (92,5 e 94,4) não
   deve ser lido como medida independente.
9. **Eu não busquei em nenhuma língua além de português e inglês.** O mapa fala em recorte global e
   não tem uma única fonte em chinês, coreano ou japonês, onde há trabalho relevante sobre memória de
   agentes. Isso é limite declarado, não cobertura.

10. **Citei o Alpha Arena sem ter aberto uma fonte primária sobre ele.** As duas tentativas
   falharam (o site da Nof1 devolveu 429, a página secundária devolveu 404), e os números que uso na
   seção 5 — US$ 10 mil por modelo, temporada 1 entre 18/10 e 03/11/2025, resultado agregado
   negativo — vêm de trechos de busca. Deixei-os no texto porque `e10` não depende deles, e registrei
   a dívida na seção 12.5. Mas é exatamente o tipo de citação que a skill proíbe, e a decisão certa
   teria sido ou abrir a fonte, ou não dar os números.

## 9. Três cenários para 2046

**Provável.** A infraestrutura existe e quase ninguém a lê. Toda entrega corporativa vem com trilha
anexada, e a trilha é aberta em auditoria, em litígio e em mais nada. A memória é portátil por lei em
três jurisdições e, na prática, o que se exporta é um arquivo que o concorrente reimporta como texto
— o artigo 20 do GDPR se repetiu. Avaliar custa mais que produzir em classes inteiras de conteúdo, e
a resposta do mercado foi parar de avaliar antes e monitorar depois. As agências grandes vendem
processo auditável como item de linha; as pequenas vendem preço. Quem projeta interface aprendeu a
desenhar painel de memória, e o painel é aquele que ninguém abre — como a tela de privacidade do
celular. *O sinal precoce, hoje:* exportações que cumprem a letra e não a função, e nenhum relatório
comercial publicando métrica corrigida por acaso.

**Desejável.** A memória tem formato, procedência assinada e dono definido, e dois grandes a
suportam antes de a lei obrigar — o que fez a norma se escrever sobre um desenho interoperável em vez
de sobre o do maior fornecedor. A tela de memória virou convenção: ver o que o sistema anotou,
corrigir, ver o que a correção muda no trabalho já feito, e esquecer com um gesto tão comum quanto
salvar. Declarar variância virou praxe — nenhuma entrega diz "funciona", todas dizem em quantas de
quantas. Existe auditoria independente com responsabilidade pessoal, e ela chegou **sem** o desastre
que a história da auditoria contábil exigiu. E existe infraestrutura pública de registro de processo,
mantida por universidade e arquivo, que permite a um coletivo de seis pessoas em Recife entregar com
a mesma trilha que uma agência de seiscentas. *O sinal precoce:* dois fornecedores grandes adotando o
mesmo formato de memória antes de qualquer obrigação legal.

**Indesejável.** A memória se concentrou em dois fornecedores e virou o fosso: trocar de plataforma
significa recomeçar como estranho, e por isso ninguém troca. A trilha existe, e só a plataforma a lê
— é verificável por quem a produziu e por mais ninguém, o que a torna prova de nada. A avaliação é
feita por um juiz automático que ninguém audita, estável e enviesado da mesma forma toda vez, e o
resultado dele é o que vai para o contrato. No trabalho, a memória do agente virou registro
retroativo sem prescrição: o que você pediu, como pediu e o que errou há oito anos está lá, do lado
do empregador, e a cláusula de propriedade foi assinada na admissão. Quem não tem orçamento para
trilha não é considerado confiável, o que quer dizer que confiança virou uma coisa que se compra. *O
sinal precoce:* a primeira cláusula contratual padrão dizendo que a memória do agente pertence à
empresa e não à pessoa.

## 10. O experimento

**A prancha com memória.**

**O que é.** Um editor simples — de peça gráfica, de roteiro ou de página, tanto faz, desde que a
turma trabalhe de verdade nele — com quatro coisas que nenhuma ferramenta de criação tem hoje ao
mesmo tempo:

1. **Um painel de memória ao lado do trabalho**, mostrando em texto legível tudo o que o agente
   anotou sobre a pessoa e sobre o projeto, editável linha a linha. A implementação mais direta é a
   ferramenta de memória client-side: o modelo pede operação de arquivo, a aplicação executa, e o
   arquivo fica visível.
2. **Análise de impacto antes de aplicar a correção.** Quando a pessoa edita uma anotação, a prancha
   mostra o que muda no que já foi feito, e ela decide se aceita local ou globalmente — o desenho
   testado no SemanticCommit, agora num contexto de criação visual.
3. **Um medidor de variância.** Cada pedido roda oito vezes; a interface mostra em quantas das oito o
   resultado se repete, por um critério declarado. É `pass^k` trazido para dentro da tela do usuário
   final, e não do painel do engenheiro.
4. **Trilha e exportação.** A prancha grava a execução nas convenções GenAI do OpenTelemetry e
   exporta a memória no formato do `memorywire` — e existe um **segundo protótipo**, com outro
   fornecedor por baixo, que tenta importar essa memória e continuar o trabalho.

**Que pergunta sobre o futuro ele responde.** Duas, e as duas são de 1ª ordem neste mapa. **(a)
Quando a pessoa vê a memória e vê a variância, ela muda o que pede?** Se vir e não mudar, `e3` e
`e6.2` são efeitos de engenheiro, não de usuário, e o ramo mais importante do mapa para este público
cai. **(b) O que sobrevive à travessia entre dois sistemas?** É o teste direto de `e2`, e o
experimento produz um número que não existe na literatura: a fração do acervo que continua
funcionando do outro lado.

**Que tecnologia emergente usa, e por que não dá com a madura.** Memória entre sessões com controle
do lado do cliente, avaliação por repetição com métrica de consistência, instrumentação em convenções
GenAI, e formato de fio de memória com implementação de referência. Não dá com tecnologia madura por
uma razão de definição: software determinístico **não tem variância para mostrar**, e ferramenta sem
estado não tem memória para atravessar. O experimento é impossível de fazer com o que é comum em
produto de massa, o que é exatamente o critério da disciplina.

**O que a turma faz ao testar.** Cada dupla usa a prancha por uma semana em projeto real seu, com o
painel aberto. Registra: quantas vezes abriu o painel, quantas vezes editou uma anotação, e se
mudou o pedido depois de ver a variância. Na aula seguinte, **as duplas trocam de memória**: cada uma
importa o acervo da outra no segundo protótipo e tenta continuar o trabalho alheio por trinta
minutos. A discussão sai de três perguntas: o que você apagaria da sua memória antes de entregá-la a
outra pessoa; o que você não conseguiu entender no acervo alheio; e o que você teria pedido de forma
diferente se soubesse que só três de oito execuções concordam.

**O que seria um resultado que me faria mudar de ideia.** Se a maioria das duplas **não abrir** o
painel de memória por conta própria, ou abrir e não editar, então a interface de memória não é
superfície de projeto disputada — é preferência de quem constrói, e `e3` perde a confiança média que
tem. E se mostrar a variância **não mudar** o que as pessoas pedem, então `e6.2` cai e, com ele, boa
parte do argumento de que a não-determinação chega à interface em vez de ficar no painel de controle
do engenheiro. Seria o achado mais útil possível: derrubaria o ramo que eu considero mais importante
neste mapa, e derrubaria com dado de sala de aula.

## 11. Fontes

Vinte e oito fontes abertas e lidas em 12/09/2026. O que não abriu não entra — o que tentei abrir e
não consegui está registrado na seção 12.

**Norma e regulação**

1. `https://artificialintelligenceact.eu/article/12/` — texto do artigo 12 do AI Act (registro
   automático de eventos) e as datas de aplicação: 02/12/2027 para o Anexo III e 02/08/2028 para o
   Anexo I. *Sustenta:* D3, `e13`, `e14`, sinal fraco 4. *Confiabilidade:* alta para o texto do
   artigo; é reprodução comentada do regulamento por iniciativa privada, não o Jornal Oficial.
2. `https://www.praxikon.com/en/posts/digital-omnibus-high-risk-postponement-december-2027` —
   Regulamento (UE) 2026/1744, publicado em 24/07/2026 e em vigor em 27/07/2026; adiamento das
   obrigações de alto risco; confirmação de que o artigo 50 **não** foi adiado. *Sustenta:* seção 3,
   sinal fraco 4, pré-mortem razão 3. *Confiabilidade:* média-alta; escritório especializado, com
   número de regulamento e datas verificáveis, cruzado com a fonte 3.
3. `https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/`
   — as novas datas (02/12/2027 e 02/08/2028) e a manutenção do artigo 50 em 02/08/2026. *Sustenta:*
   o mesmo, por segunda fonte independente. *Confiabilidade:* alta como análise jurídica; é alerta a
   clientes, escrito antes da publicação no Jornal Oficial, e por isso foi cruzado com a fonte 2.
4. `https://digital-strategy.ec.europa.eu/en/policies/data-act` — Data Act aplicável desde
   12/09/2025, com regras de troca entre provedores de serviços de processamento de dados.
   *Sustenta:* D1, `e5.1`. *Confiabilidade:* alta; é a página da própria Comissão Europeia.
5. `https://www.trf1.jus.br/sjgo/noticias/cnj-regulamenta-uso-da-inteligencia-artificial-no-judiciario`
   — Resolução CNJ nº 615/2025: transparência, rastreabilidade, auditoria e registro; supervisão
   humana; vedação de que o sistema julgue pessoas; comitê supervisor. *Sustenta:* `e13.2`, `e11`,
   nota sobre o Brasil. *Confiabilidade:* média-alta; é notícia institucional do Judiciário federal
   sobre a norma, não o texto da resolução — tentei o texto no portal de atos do CNJ e recebi 403
   (seção 12).
6. `https://ia.tcu.gov.br/` — portal de IA do TCU: 12 iniciativas em operação, registros auditáveis,
   controle de acesso por perfil, vedação explícita de decisão automatizada sobre cidadão,
   compartilhamento de código com mais de 100 órgãos. *Sustenta:* `e13.2`, `e13.2.1`, sinal fraco 5.
   *Confiabilidade:* alta para o que o TCU declara sobre si; é autodescrição institucional.

**Memória de agentes**

7. `https://mem0.ai/blog/state-of-ai-agent-memory-2026` — relatório de 01/04/2026: LoCoMo 92,5,
   LongMemEval 94,4, BEAM 64,1 (1M) e 48,6 (10M); perda de ~25% quando o contexto cresce 10×;
   problemas em aberto (abstração temporal, identidade entre sessões, envelhecimento, avaliação em
   nível de aplicação). *Sustenta:* seção 3, `e19`, D4. *Confiabilidade:* **baixa para os números
   favoráveis** (a Mem0 mede a Mem0) e razoável para o número desfavorável, que é o que uso.
8. `https://github.com/mem0ai/mem0` — 65,2 mil estrelas, Apache-2.0, três modos de implantação,
   números da revisão de abril de 2026. *Sustenta:* seção 3. *Confiabilidade:* alta para estrelas e
   licença; autodeclarada para benchmark.
9. `https://github.com/letta-ai/letta` — 24,7 mil estrelas, Apache-2.0, linhagem MemGPT, migração do
   código ativo para `letta-code` e arquivamento do servidor V1. *Sustenta:* seção 3, sinal fraco 6.
   *Confiabilidade:* alta; é o repositório.
10. `https://github.com/getzep/graphiti` — 30,8 mil estrelas, Apache-2.0, grafo temporal com janela de
    validade de fatos e invalidação em vez de exclusão; é o núcleo aberto do Zep. *Sustenta:* seção 3,
    e o mecanismo de `e17`. *Confiabilidade:* alta para estrelas, licença e arquitetura.
11. `https://platform.claude.com/docs/en/agents-and-tools/tool-use/memory-tool` — ferramenta de
    memória client-side: seis comandos sobre `/memories`, execução pela aplicação, "a memória vive
    inteiramente na sua aplicação"; recomendações de expiração periódica e proteção contra travessia
    de caminho; integração com edição de contexto e compactação. *Sustenta:* seção 3, `e4.2`, `e16`,
    e o desenho do experimento. *Confiabilidade:* alta; é a documentação do fornecedor.
12. `https://arxiv.org/abs/2606.01138` — `memorywire`, 31/05/2026: cinco operações, quatro tipos de
    memória, implementação de referência com cinco adaptadores, suíte de conformidade 68/80, nenhuma
    adoção alegada. *Sustenta:* D1, `e2`, sinal fraco 1, experimento. *Confiabilidade:* média;
    preprint de autor único, sem revisão por pares, com números auto-relatados — e o diagnóstico que
    cito (não há formato compartilhado) é verificável de fora.
13. `https://arxiv.org/pdf/2606.30306` — *Always-On Agents: A Survey of Persistent Memory, State, and
    Governance in LLM Agents*, 30/06/2026, Ding, Nannapaneni, Liu e Zhang; 136 páginas organizando
    tipos de memória, gestão de estado e governança. *Sustenta:* a afirmação de que memória
    persistente virou objeto de pesquisa com corpo próprio. *Confiabilidade:* média; preprint extenso
    e recente, do qual extraí estrutura, não conclusões numéricas.
14. `https://arxiv.org/abs/2504.09283` — *Semantic Commit*, Vaithilingam, Kim, Acosta-Parenteau, Lee,
    Mhedhbi, Glassman e Arawjo, 12/04/2025: resolução de conflito semântico em memória de IA, estudo
    intra-sujeitos com 12 participantes, metade adotando fluxo de análise de impacto antes da
    revisão. *Sustenta:* `e3.1`, `e3.1.1`, experimento. *Confiabilidade:* alta como estudo de HCI;
    amostra pequena (n=12), que é o normal na área e limita generalização.
15. `https://arxiv.org/pdf/2604.21284` — *Spatial Metaphors for LLM Memory: A Critical Analysis of the
    MemPalace Architecture*, Dey e Viradecha. *Sustenta:* `e3.2` (metáfora de memória como escolha de
    projeto, e não descrição do sistema). *Confiabilidade:* média-baixa; preprint argumentativo, sem
    experimento próprio — uso como indício de que a disputa de metáforas existe, não como evidência.
16. `https://dev.to/stantyan/i-tested-7-ai-memory-products-for-portability-all-7-lock-you-in-31pm` —
    teste de portabilidade de sete produtos (ChatGPT, Claude Projects, canal de memória do Claude,
    Gemini, Cursor, Cognee, ByteRover) verificado contra documentação e comportamento na primeira
    semana de julho de 2026; nenhum atinge simetria de importação. *Sustenta:* D1, `e5`, seção 3.
    *Confiabilidade:* média; teste individual de autor com interesse declarado no tema, método
    descrito e resultado reproduzível por quem quiser repetir — que é o que salva a fonte.

**Observabilidade, avaliação e padrões**

17. `https://langfuse.com/` — autodescrição em 2026: plataforma aberta de avaliação e observabilidade
    de agentes, "OpenTelemetry native"; 21 das Fortune 50, 100 mil+ engenheiros, 90 bi+ observações
    por mês, 65 mi+ instalações de SDK por mês, 22 mil+ estrelas. *Sustenta:* seção 3, D3.
    *Confiabilidade:* baixa-média para os números (marketing próprio) e alta para a arquitetura e o
    compromisso com OTel.
18. `https://clickhouse.com/blog/clickhouse-acquires-langfuse-open-source-llm-observability` —
    aquisição em 16/01/2026; 20 mil+ estrelas, 23,1 mi de instalações de SDK/mês, 6 mi de downloads
    de Docker, 19 das Fortune 50 e 63 das Fortune 500; manutenção da licença MIT e da
    auto-hospedagem. *Sustenta:* seção 3, sinal fraco 7. *Confiabilidade:* alta para o fato da
    aquisição e as datas; interessada para os números.
19. `https://github.com/promptfoo/promptfoo` — 25 mil estrelas, MIT, avaliação de prompt e
    *red-teaming*; alegação de aquisição pela OpenAI mantendo a licença aberta. *Sustenta:* seção 3,
    sinal fraco 7. *Confiabilidade:* alta para licença e estrelas; **alegação do projeto**, não
    verificada de forma independente, para a aquisição.
20. `https://github.com/open-telemetry/semantic-conventions-genai` — repositório para onde as
    convenções GenAI se mudaram; `Schema URL: TODO` no README, o que indica especificação ainda em
    movimento. *Sustenta:* seção 3 e a ressalva de que a camada comum é mais nova do que o discurso
    sugere. *Confiabilidade:* alta; é o repositório oficial. **Não consegui extrair dele a lista de
    spans nem os níveis de estabilidade** — ver seção 12.
21. `https://modelcontextprotocol.io/specification/latest` — especificação de 28/07/2026: Resources,
    Prompts, Tools, Elicitation; extensões Tasks, Skills over MCP e MCP Apps; **nenhuma primitiva de
    memória**. *Sustenta:* sinal fraco 2, D1. *Confiabilidade:* alta; é a especificação.
22. `https://arxiv.org/abs/2406.12045` — τ-bench, Yao, Shinn, Razavi e Narasimhan, 17/06/2024: menos
    de 50% de acerto e `pass^8 < 25%` em varejo; define `pass^k`. *Sustenta:* D2, `e6`, experimento.
    *Confiabilidade:* alta; benchmark revisado e amplamente citado. Ressalva: é de 2024, e modelos
    melhoraram — o que não muda a existência da variância, que é o que uso.
23. `https://arxiv.org/abs/2410.10813` — LongMemEval, Wu, Wang, Yu, Zhang, Chang e Yu, ICLR 2025: 500
    questões, cinco habilidades de memória de longo prazo, queda de ~30% em assistentes comerciais.
    *Sustenta:* seção 3, `e19`. *Confiabilidade:* alta; publicado em conferência com revisão.
24. `https://arxiv.org/pdf/2605.12673` — BenchJack, Wang, Li, Mang, Cheung, Sen e Song, 14/05/2026:
    auditoria de SWE-bench, WebArena, OSWorld, GAIA e outros; brechas exploráveis, métricas frágeis a
    gaming, desempenho superestimado. *Sustenta:* `e8` (o único sinal forte do mapa). *Confiabilidade:*
    alta; preprint de grupo conhecido em segurança e sistemas, com método declarado.
25. `https://arxiv.org/html/2606.19544v1` — avaliação sistemática de juízes: 21 modelos, 9
    fornecedores, 3 benchmarks, ~541 mil julgamentos; κ de 0,376–0,511 (MT-Bench) e 0,271–0,875
    (JudgeBench); inversão por posição de 9,9% a 17,3%; paradoxo consistência–viés. *Sustenta:* D2,
    `e9`, `e7.2`, sinal fraco 3. *Confiabilidade:* alta; é a evidência mais forte do mapa sobre
    avaliação, com escala e método declarados. Ressalva: preprint, não revisado por pares.
26. `https://aicompliancevendors.com/blog/iso-42001-certified-companies-list` — cerca de 350
    organizações certificadas em ISO/IEC 42001 em abril de 2026, com organismos emissores nomeados
    (Schellman, BSI, A-LIGN, TÜV SÜD, AENOR) e empresas nomeadas (AWS, Microsoft, Anthropic,
    Snowflake, ServiceNow, KPMG, Synthesia). *Sustenta:* seção 3, `e14.2`. *Confiabilidade:* média; é
    compilação de fonte secundária a partir de comunicados públicos, e o próprio texto chama o número
    de estimativa — não há registro central de certificados.
27. `https://jobsbyculture.com/blog/ai-evals-engineer-career-guide-2026` — afirma que a avaliação
    passou de linha dentro de vaga de ML sênior a cargo próprio desde o fim de 2024, com lista de
    empresas contratantes. *Sustenta:* `e7` (apenas a existência do cargo). *Confiabilidade:*
    **baixa**; sem fonte para faixas salariais nem para velocidade de contratação. Usado para uma
    única afirmação, e registrado como ponto fraco na seção 8.
28. `https://spec.c2pa.org/specifications/specifications/2.3/index.html` — página da especificação
    C2PA 2.3, com Content Credentials, atestações e guia para implementadores. *Sustenta:* `e12`,
    classe de referência C2PA. *Confiabilidade:* alta como fonte da existência e da versão da
    especificação; **não consegui extrair dela o conteúdo técnico** (datas, cobertura de streaming),
    e por isso a classe de referência usa os dados de ecossistema que estão registrados na seção 12
    como vindos de busca, não de fonte aberta.

## 12. Anexo — o levantamento bruto

Nada foi cortado em silêncio. O que segue é o que não coube nas seções acima.

### 12.1 O contrato desta rodada (tempo 2 do protocolo, escrito antes da execução)

**Objetivo:** produzir o mapa de futuro do tema 3 da disciplina no horizonte 2046, no formato da
disciplina, em modo não interativo, com busca real na web.
**Critério de pronto:** doze seções com títulos literais; frontmatter completo; bloco `roda:` com
três níveis e contadores batendo com o frontmatter; toda fonte aberta antes de citada; a bateria da
§6 derrubando pelo menos um efeito por raiz; saída do verificador colada aqui.
**O que não entra:** conter o agente (tema 2), o ofício de programar com agente (tema 1), e
tecnologia madura conforme a régua da disciplina (recusas registradas na seção 4).

### 12.2 Premissas assumidas por falta de entrevista

O briefing cobriu horizonte (2046), público (quem projeta mídia e interação), recorte (global com
nota sobre o Brasil), descarte inicial (o que já é comum em produto de massa), disrupção suspeita
(nenhuma — descobrir), viés (neutro), ideias óbvias a excluir (as que servem para qualquer tema),
falseador (evidência de adoção além da maioria inicial, ou de que a tecnologia não rompe nada) e
zona de interesse (Agentes). Conforme a §0 da skill, **um briefing completo substitui a entrevista
sem rebaixamento de confiança**, e o que ele não cobriu vai declarado aqui:

- **Assumi** que o público trabalha em estúdio, agência, redação, produtora, jogo ou produto digital
  — e não em infraestrutura. Isso pesou na escolha de `e3` como efeito central.
- **Assumi** que o leitor tem vinte anos de carreira pela frente, o que justifica tratar formas
  institucionais em vez de produtos.
- **Assumi** que "nota sobre o Brasil" significa um ramo próprio no mapa (`e13.2`, `e13.2.1`,
  `e1.2`), e não um parágrafo apenso.
- **Não assumi** nada sobre orçamento, tamanho de equipe ou setor específico do leitor.

### 12.3 Efeitos cortados no §6, com o motivo

- **`e8.3` — "escolas de comunicação reorganizam o currículo em torno de avaliação"** (era 2ª ordem,
  filho de `e8`). *Removido* por ser efeito proibido pela §3 da skill: serve para qualquer tema, não
  nomeia curso nem mecanismo. A versão salvável seria algo como "o CIn-UFPE passa a exigir, na
  disciplina de projeto, que a entrega inclua a rubrica de avaliação executável", e nem isso eu
  consigo ligar a `e8` por mecanismo — a saturação de benchmark público não força mudança de
  currículo, só a torna conveniente.
- **"Surge a profissão de auditor de IA"** (era candidata a disrupção-raiz). *Rebaixada* a `e14.2`,
  com firmas nomeadas (BSI, Schellman, A-LIGN, KPMG) e mecanismo escrito. Como raiz não passava na
  pergunta 1 do §2: não rompe nada sozinha, é consequência de a trilha virar prova.
- **"Reguladores criam categoria jurídica nova para memória"** (era 1ª ordem). *Reescrita* como
  `e5.1`, com ANPD e Comissão Europeia nomeadas e com o mecanismo (a portabilidade do Data Act não
  morde sem definição do objeto).
- **"Mudanças no mercado de trabalho de QA"** (era 1ª ordem, D2). *Descartada na redação*, antes de
  entrar no bloco, pelo teste de especificidade: a frase serve igualmente para automação de testes,
  para *low-code* e para offshore. O que sobrou dela com mecanismo próprio virou `e7` e `e7.2`.
- **"A confiança vira diferencial competitivo"** (era 1ª ordem). *Descartada*: é tautologia
  disfarçada de efeito, e não tem ator. A parte verdadeira dela virou `e18` — confiança como função
  do tamanho de quem produz —, que tem ator, mecanismo e quem perde.
- **Candidata a quinta raiz: "o agente avalia o agente" (avaliação recursiva).** *Descartada como
  raiz* porque não passou na pergunta 2 do §2 — não consegui identificar a pré-condição que a tornou
  possível **agora** e não há cinco anos; LLM julgando LLM existe desde 2023. Ficou como mecanismo
  dentro de D2, em `e7.2.1` e `e17.1.1` (o ponto cego de ninguém auditar o resumidor).

### 12.4 O que tentei abrir e não consegui

| URL | Resultado | O que se perdeu |
|---|---|---|
| `https://dl.acm.org/doi/10.1145/3800645.3812979` | HTTP 403 | *Metaphors for Memory* (DIS 2026), que sustenta `e3.2` e `e3.2.1`. Conheço apenas pelo resumo de busca: o trabalho levanta padrões e metáforas dominantes de interfaces de memória e explora as menos dominantes — controle de versão, Zettelkasten, requisitos, diário pessoal, arquivo comunitário, sondas culturais e ficção científica. **Não citado como fonte.** |
| `https://dl.acm.org/doi/full/10.1145/3772363.3799198` | HTTP 403 | Extended abstract do CHI 2026 sobre memória de longo prazo usável e respeitosa da privacidade. **Não citado como fonte.** |
| `https://www.conjur.com.br/2026-jun-21/ia-e-risco-de-integridade-nova-arquitetura-de-controle-publico/` | HTTP 403 | Argumento sobre arquitetura de controle público sobre IA no Brasil. Substituído pelo portal do TCU e pela notícia sobre a Resolução CNJ 615/2025. |
| `https://atos.cnj.jus.br/atos/detalhar/6001` | HTTP 403 | Texto integral da Resolução CNJ 615/2025. Substituído pela fonte 5, que é notícia institucional sobre a norma — o que significa que **não li o texto da resolução**, apenas descrição dele. |
| `https://nof1.ai/` | HTTP 429 | Fonte primária sobre o Alpha Arena. Ver 12.5. |
| `https://www.datawallet.com/crypto/alpha-arena-nof1-ai-explained` | HTTP 404 | Idem. |
| `https://opentelemetry.io/docs/specs/semconv/gen-ai/` | Página movida, sem conteúdo | Lista de spans e níveis de estabilidade das convenções GenAI. O repositório para onde apontou (fonte 20) também não expôs a lista na página inicial. |
| `https://arxiv.org/pdf/2606.01138` (PDF) | Texto não extraível | Resolvido pela página `abs` (fonte 12). |
| `https://arxiv.org/pdf/2308.01542` (Memory Sandbox, PDF) | Texto não extraível | O trabalho é citado na prosa da seção 5 como referência de existência e **não está na lista de fontes**. |
| `https://www.iso.org/standard/42001` | HTTP 403 para o verificador | Não citado. |

### 12.5 Alegações que usei e não consegui confirmar em fonte aberta

**Registro explícito, porque a skill proíbe fonte citada de memória.** As afirmações abaixo aparecem
na prosa do mapa e vêm **apenas de trechos devolvidos por busca**, sem que eu tenha aberto a página
de origem. Elas não sustentam nenhum `sinal`, `prazo` ou `confianca` sozinhas:

- **Alpha Arena / Nof1**: US$ 10 mil de dinheiro real por modelo, mesmo prompt e mesmos dados,
  contratos perpétuos de cripto na Hyperliquid; temporada 1 de 18/10 a 03/11/2025; resultado agregado
  negativo. As duas tentativas de abrir fonte primária falharam (429 e 404). `e10` está com confiança
  média e sinal médio, e o mecanismo dele — avaliação com consequência não é gamificável pelo mesmo
  caminho do benchmark — não depende dos números.
- **C2PA, dados de ecossistema**: mais de 6.000 membros e afiliados em janeiro de 2026; câmeras Sony,
  Nikon, Canon, Leica, Fujifilm e Panasonic com modelos capazes; Pixel 10 assinando por padrão;
  LinkedIn exibindo ícone clicável; nenhuma implementação de câmera com conformidade fechada em
  meados de 2026; C2PA 2.3 estendendo proveniência a transmissão ao vivo por assinatura de segmentos
  CMAF. Abri a página da especificação 2.3 (fonte 28) e ela não traz nada disso. **A classe de
  referência C2PA da seção 5 se apoia nesses dados**, e é, por isso, a classe mais frágil do mapa.
- **Memória do ChatGPT chegando a Free e Go em 2026**, e números de desempenho do sistema de memória
  (82,8% de recuperação factual, 71,3% de aderência a preferência, 75,1% em avaliação sensível ao
  tempo). Usado apenas na recusa de maturidade da seção 4, que não depende de número.
- **Incidentes de vazamento entre inquilinos em 2026** e regras de ameaça catalogadas para
  contaminação de memória. Sustentam `e4` e W2 como padrão de falha, não como contagem.
- **Estimativa de que 85% dos órgãos federais brasileiros usarão IA até o fim de 2026.** Não usei em
  lugar nenhum do mapa: número redondo, de fonte secundária, sem método. Registro para que não seja
  reintroduzido por engano numa próxima rodada.

### 12.6 Buscas que não deram em nada

- **Dado ecológico sobre telemetria de agentes.** Procurei ligação entre volume de trilha/memória e
  consumo energético ou material. Não achei nada que ligasse os dois. É por isso que a categoria
  ecológica do STEEP está declarada vazia na seção 5, em vez de preenchida com plausibilidade.
- **Avaliação em português.** Procurei estudo sobre desempenho de juiz-LLM em português, ou sobre
  rubrica em português. Não achei. Virou a suposição escondida nº 5 da seção 7.
- **Preço de trilha.** Procurei número de custo real de retenção de trilha de agente (por milhão de
  spans, por mês). Não achei nada público. D4 inteira é, por isso, a raiz com menos ancoragem
  numérica do mapa, e a que mais precisaria de um número para subir de confiança.
- **Cláusula contratual sobre memória.** Procurei modelo de contrato que trate titularidade de
  memória de agente. Não achei. Foi o que rebaixou `e1` de alta para média.
- **Fontes em chinês, coreano e japonês.** Não busquei. Limite declarado na seção 8.

### 12.7 Notas soltas do levantamento, que não couberam

- O desenho da ferramenta de memória da Anthropic tem um detalhe que vale para quem projeta: a
  instrução que a API injeta no prompt de sistema diz, literalmente, *"assuma interrupção: sua janela
  de contexto pode ser reiniciada a qualquer momento, então você corre o risco de perder qualquer
  progresso que não esteja registrado no seu diretório de memória"*. É a primeira vez que vejo um
  produto instruir o próprio agente a **agir como se fosse mortal**. Não consegui transformar isso em
  efeito com mecanismo — mas é o tipo de coisa que, em vinte anos, pode ter virado convenção de
  projeto de agente, do mesmo jeito que "salve sempre" foi convenção nos anos 1990.
- O Graphiti não apaga fato velho: invalida e mantém a história, com janela de validade. Isso é uma
  decisão de projeto com consequência jurídica direta — um sistema que nunca apaga é um sistema que
  não consegue atender a um pedido de eliminação sob a LGPD sem quebrar a própria arquitetura.
  Alimenta a contradição registrada na seção 5, e é o caso concreto dela.
- A documentação da Anthropic recomenda **"apagar periodicamente arquivos de memória não acessados há
  muito tempo"** como medida de segurança. Esquecimento aparece, hoje, como higiene — não como
  função. É exatamente a distância que `e16` propõe percorrer.
- O `memorywire` inclui um canal opcional de governança com humano no laço para **revisar escritas
  antes que entrem no armazenamento de longo prazo**. É o desenho de `e3.1` num protocolo, não numa
  interface — e o fato de estar num protocolo obscuro, e não num produto, é a medida de quão cedo
  isto está.
- O MCP tem extensão de **Tasks** (execução assíncrona de longa duração, com entrada no meio do
  caminho e identificadores duráveis). Execução longa e durável sem memória padronizada é uma
  combinação instável: ou a memória entra no protocolo, ou cada implementação de Tasks inventa a sua.
  Não virou efeito porque não consegui escrever o mecanismo sem especular sobre governança de um
  grupo de trabalho.
- Nenhuma das ferramentas de observabilidade que examinei oferece a operação que este mapa considera
  central em `e3.1`: **mostrar o que muda a jusante quando uma informação de memória é corrigida**.
  Elas mostram o que aconteceu; não simulam o que aconteceria. A lacuna é o próprio experimento da
  seção 10.

### 12.8 Saída do verificador

Comando executado, com a saída inteira colada abaixo — números, não a palavra "passou":

```
python3 /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/futurizacao-giordano/references/verificar.py /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/giordano-h2046/03-a-infraestrutura-de-confianca-memoria-observabilidade-e-avaliacao-de-agentes/tendencia-a-infraestrutura-de-confianca-memoria-observabilidade-e-avaliacao-de-agentes.md --links
```

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 19 (frontmatter diz 19)
efeitos ordem 2: 32 (frontmatter diz 32)
efeitos ordem 3: 27 (frontmatter diz 27)
prazo > horizonte (2046) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 5 · media 14 · baixa 0
confiança ordem 2: alta 1 · media 21 · baixa 10
confiança ordem 3: alta 0 · media 0 · baixa 27
links da seção 11: 28/28 respondem (frontmatter diz fontes: 28)
RESULTADO: ok
```

Leitura da saída: 18 de 18 campos de frontmatter, 12 de 12 títulos literais, 4 raízes e 19/32/27
efeitos batendo com os contadores declarados, nenhum prazo de 1ª ou 2ª ordem além de 2046 e nenhum
de 3ª ordem também — o que é escolha, declarada no fim da seção 5. A calibração cai monotonicamente
(alta 5 → 1 → 0), e a 3ª ordem está inteira em confiança baixa, que é a resposta esperada. Os 28
links da seção 11 respondem. O verificador não confere o que este mapa tem de mais frágil: se o
mecanismo de cada efeito se sustenta. Para isso existem a seção 7 e a aula.
