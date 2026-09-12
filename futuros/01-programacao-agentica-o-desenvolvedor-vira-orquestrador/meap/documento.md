---
tema: "Programação agêntica: o desenvolvedor vira orquestrador"
slug: programacao-agentica-o-desenvolvedor-vira-orquestrador
autor_login: meap
zona_de_interesse: Agentes
data: 2026-09-11
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global (com nota sobre o Brasil)
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 11
efeitos_ordem_3: 8
tecnologias_citadas: [agente de código em terminal, autocompletar de IDE, chat sobre código, Model Context Protocol (MCP), Agent Skills (SKILL.md), AGENTS.md, harness multi-agente, desenvolvimento dirigido por especificação (Spec Kit), replay e auditoria de sessão de agente, sandbox de execução, SWE-bench, Terminal-Bench 2]
fontes: 18
confianca: media
experimento: "A Fila — painel de despacho de três agentes em paralelo com um diff sabotado plantado, para medir em que ponto a verificação humana desiste de ler"
skill_usada: futurization-meap
publico_ok: false
---

## 1. Resumo

Entre 2024 e 2026, o agente de código deixou de sugerir linhas e passou a fechar o ciclo: lê o
repositório, planeja, edita vários arquivos, roda os testes e abre o pull request. A evidência
mostra que a produção de código realmente acelerou — e que a capacidade de verificar esse código
não acompanhou. A GitClear, sobre 623 milhões de mudanças entre 2023 e 2026, mede a fatia de
código refatorado caindo de 21% para 3,8% e a duplicação em bloco subindo 81%. O GitHub discute
publicamente desligar pull requests em projetos abertos. Ao mesmo tempo, a adoção de agentes é
menor do que o discurso sugere: 14,1% dos desenvolvedores usam agentes diariamente e 46% declaram
desconfiar da saída das ferramentas. A disrupção, portanto, não é "código de graça" — é o
deslocamento do gargalo da escrita para a verificação, e o nascimento de uma camada de
infraestrutura (skill, harness, protocolo) que transforma instrução empacotada em software com
cadeia de suprimento própria. Para 2031, o mapa aposta em três rupturas simultâneas: a unidade de
trabalho vira a tarefa especificada, a instrução vira dependência versionada, e a atenção humana
vira o recurso escasso da engenharia. O ponto cego maior é o mais banal: nada garante que a
qualidade do agente continue subindo na curva dos últimos dois anos.

## 2. O tema

Programação agêntica é a prática de construir software conduzindo um agente que age — executa
comandos, altera arquivos, roda testes, abre PR — em vez de digitar o código diretamente. O humano
especifica, verifica e responde pelo resultado. Não é autocompletar melhor: o autocompletar sugere
dentro do arquivo aberto, o agente opera sobre o repositório inteiro num laço de ferramentas que
dura minutos ou horas.

O tema pertence a mídia e interação por três razões concretas, e não por analogia. Primeira: a
interface de programar mudou de lugar. O editor de texto, que organizou o ofício por quarenta anos,
foi deslocado por um painel de sessões — e ninguém sabe ainda como se projeta esse painel. Segunda:
apareceu um gênero novo de artefato de interação, a instrução empacotada (SKILL.md, AGENTS.md,
servidor MCP), que é ao mesmo tempo documento, programa e contrato — e que precisa ser lido por
máquina e escrito por gente. Terceira: o problema central deixou de ser gerar e passou a ser
confiar. Isso é um problema de interface, não de modelo: como se mostra a alguém o que uma máquina
fez, em tempo de decidir se aceita.

Merece um mapa de futuro porque o efeito não está onde o discurso aponta. O discurso fala em
velocidade. A evidência de 2025-2026 fala em acúmulo: mais diffs, menos refatoração, menos
integração entre arquivos, projetos abertos fechando a porta. Um mapa que só extrapolasse a
velocidade erraria o alvo.

## 3. Onde isso está hoje

**A assistência é comum; o agente, não.** O relatório DORA de 2025, com quase 5 mil profissionais,
registra 90% de adoção de IA no desenvolvimento — mas isso é autocompletar, chat e sugestão. A
Stack Overflow 2025, na mesma janela, mede o agente separadamente: 14,1% usam agentes diariamente
no trabalho, 9% semanalmente, e 37,9% não usam nem pretendem usar. São dois fenômenos diferentes
sob a mesma palavra.

**A confiança caiu enquanto o uso subia.** Ainda na Stack Overflow 2025: 46% desconfiam ativamente
da exatidão da saída, contra 33% que confiam — e apenas 3% confiam muito. Entre desenvolvedores
experientes, 2,6% confiam muito e 20,7% desconfiam muito. A queixa número um, com 66%, é
específica e reveladora: "soluções quase certas, mas não exatamente". E 45,2% dizem que depurar
código gerado por IA custa mais tempo que escrever. O DORA chama isso de paradoxo da confiança e
formula o diagnóstico em uma frase: a IA é um amplificador — magnifica a força e a fraqueza que a
organização já tinha.

**A medição direta contradiz a percepção.** O ensaio controlado da METR, com 16 desenvolvedores
experientes em 246 tarefas reais nos próprios repositórios (média acima de 22 mil estrelas, mais de
1 milhão de linhas), encontrou 19% de lentidão com acesso a IA — enquanto os próprios participantes
estimavam ter ficado 20% mais rápidos. É um estudo pequeno, de early-2025, com ferramentas de
então; não encerra a questão. Mas é o dado de melhor desenho experimental disponível, e aponta no
sentido oposto do senso comum.

**A qualidade do que se acumula piorou de forma medível.** A GitClear, sobre 623 milhões de
mudanças de código entre 2023 e 2026: fatia de código refatorado caiu de 21% (2022) para 3,8%
(meados de 2026); copiar-colar subiu de 9,4% para 15,7%; duplicação em bloco subiu 81% desde 2023;
chamadas de função entre arquivos diferentes caíram 35%; e mudanças que tocam código com mais de um
ano caíram 74%, restando 0,46% do total. A leitura da própria GitClear é que o ganho de vazão vem
com um imposto de manutenibilidade.

**O gargalo já apareceu como crise operacional.** Em fevereiro de 2026 o GitHub abriu discussão
pública sobre desligar pull requests — restringi-los a colaboradores, permitir apagá-los, criar
triagem por IA e sinalizar uso de IA. Mantenedores citados descrevem o problema exato: não se pode
mais supor que quem submeteu escreveu ou entende o que submeteu, e a revisão linha a linha continua
obrigatória mas não escala em mudanças grandes geradas por máquina. O coletivo Jazzband, do
ecossistema Python, encerrou atividades citando o volume de PRs e issues gerados por IA. O curl
cancelou programas de recompensa por bug pelo mesmo motivo.

**A camada de infraestrutura se institucionalizou em doze meses.** Em dezembro de 2025 a Anthropic
doou o Model Context Protocol à Agentic AI Foundation, fundo dirigido sob a Linux Foundation,
cofundada com Block e OpenAI e apoiada por Google, Microsoft, AWS, Cloudflare e Bloomberg; o
AGENTS.md (OpenAI) e o goose (Block) entraram como projetos fundadores. O MCP declarava então mais
de 97 milhões de downloads mensais de SDK e 10 mil servidores ativos. O padrão aberto de Agent
Skills (SKILL.md) foi publicado em seguida e, segundo a cobertura de imprensa especializada,
chegou a março de 2026 lido por 32 ferramentas de empresas concorrentes a partir da mesma estrutura
de diretórios. O desenvolvimento dirigido por especificação seguiu o mesmo caminho: o Spec Kit do
GitHub passou a integrar com mais de 30 agentes.

**A medida do progresso ficou turva.** O SWE-bench Verified, referência de 2024-2025, hoje é
discutido em termos de contaminação e memorização, com pontuações de fronteira perto do teto. O
Terminal-Bench 2, desenhado para tarefas de linha de comando em contêiner isolado, mantém modelos
e agentes de fronteira abaixo de 65%. A distância entre os dois números é o melhor retrato do
estado real: resolvido onde já foi medido, longe de resolvido onde ainda não foi.

**No Brasil**, não há dado primário equivalente. O que existe é indireto: o Laboratório de Economia
Digital de Stanford, sobre folha de pagamento americana da ADP (4,6 milhões de trabalhadores),
registra o emprego de desenvolvedores de 22 a 25 anos caindo perto de 20% desde 2024, enquanto o
emprego de mais velhos na mesma ocupação segue estável. A imprensa técnica brasileira reproduz esse
número e acrescenta estimativas próprias sobre vagas júnior — sem método declarado. Trato a
tendência como plausível e o número brasileiro como não verificado.

**O que a régua da disciplina descarta daqui.** Autocompletar de IDE e chat que explica código são
maduros: estão em produto de massa, com 90% de adoção, e não rompem mais nada. Entram como contexto,
não como raiz.

## 4. As disrupções-raiz

### 4.1. O agente fecha o ciclo sozinho: da especificação ao pull request

**O que rompe.** A unidade de trabalho do desenvolvedor. Por quarenta anos ela foi o arquivo aberto
no editor; passa a ser a tarefa descrita por escrito e entregue pronta para revisão. Com isso caem
juntos três pressupostos do ofício: que quem submete escreveu, que quem escreveu entende, e que a
leitura do código é proporcional ao esforço de tê-lo produzido. É esse terceiro que quebra a
economia inteira — escrever ficou barato, ler não.

**Por que agora.** Três mudanças técnicas convergiram entre 2024 e 2026: modelos que sustentam
sessões longas com uso de ferramenta sem perder o fio; sandboxes e contêineres que tornam seguro
deixar o agente executar comandos de verdade; e a formalização do artefato de especificação (Spec
Kit com integração a mais de 30 agentes, AGENTS.md sob governança neutra). Sem a terceira, o agente
gerava; com ela, o agente entrega contra um contrato.

**O que ainda falta.** Duas coisas, e nenhuma é modelo maior. Falta a qualidade sustentar-se fora
do benchmark: abaixo de 65% no Terminal-Bench 2 significa que, em tarefa nova e realista, a
supervisão contínua ainda é obrigatória. E falta a confiança: com 46% desconfiando ativamente e
apenas 14,1% usando agente diariamente, a barreira que segura a escala é de aceitação, não de
capacidade.

### 4.2. A instrução empacotada vira software: skill, harness e protocolo

**O que rompe.** A natureza do prompt. Enquanto o prompt era texto efêmero digitado numa caixa, não
tinha versão, dono, dependência nem responsabilidade. A skill e o servidor MCP mudam isso: são
diretório com arquivo declarado, instaláveis, distribuíveis, atualizáveis, e carregados pelo agente
sem que o usuário leia. Rompe a fronteira entre documentação e execução — um arquivo que descreve
como fazer passa a ser o que faz. E cria, de graça, uma cadeia de suprimento que ninguém pediu.

**Por que agora.** Porque a governança chegou antes do amadurecimento, o que é raro. Em doze meses
o MCP saiu de projeto de um fornecedor para fundo dirigido sob a Linux Foundation, com concorrentes
diretos na mesma mesa; o padrão de skills foi publicado aberto e lido por dezenas de ferramentas
rivais a partir da mesma estrutura de arquivos. Quando concorrentes convergem num formato, o
formato deixa de ser produto e vira infraestrutura.

**O que ainda falta.** Um mecanismo de procedência. Hoje uma skill é um arquivo de texto que o
agente obedece: não há assinatura, não há registro de quem escreveu, não há equivalente de CVE, não
há como um revisor saber quais instruções estavam carregadas quando aquele diff foi produzido.
Falta também qualquer medida de qualidade de skill — os números de catálogo que circulam na
imprensa especializada estão na casa das centenas de milhares, sem nenhum critério de curadoria
associado.

### 4.3. O trabalho vira despacho: o humano conduz várias sessões em paralelo

**O que rompe.** A relação um-para-um entre uma pessoa e um fluxo de trabalho. Programar era
sequencial e imersivo; passa a ser paralelo e intermitente — abrir três frentes, deixar rodar,
voltar, julgar, redirecionar. Rompe a métrica de produtividade (tempo de máquina e custo de token
deixam de ser o limite), rompe o desenho do dia de trabalho, e rompe a noção de autoria: o registro
de por que o código está assim deixa de ser a cabeça de quem escreveu e passa a ser a trilha de
execução da sessão.

**Por que agora.** Porque o custo marginal de abrir mais uma sessão caiu a quase zero enquanto o
custo de verificar uma sessão não caiu nada. Essa assimetria é nova e é o motor de tudo. Some-se a
isso o aparecimento de plataformas que gravam cada execução como sessão auditável e reproduzível, e
a movimentação de mercado em torno disso — Langfuse comprada pela ClickHouse, Invariant Labs pela
Snyk, HumanLoop absorvida pela Anthropic.

**O que ainda falta.** Uma interface que torne verificação barata. Hoje o painel de agentes resolve
o despacho e não resolve o julgamento: mostra que terminou, não mostra o que importa ler. Enquanto
a verificação for leitura linha a linha, o paralelismo só multiplica a fila. Falta também
convenção institucional — nenhuma organização definiu ainda quantas sessões simultâneas uma pessoa
pode responder por, do mesmo modo como existem limites de escala para outras funções de vigilância.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O agente fecha o ciclo sozinho — da especificação ao pull request
    efeitos:
      - id: e1
        ordem: 1
        efeito: A unidade de trabalho do desenvolvedor deixa de ser o arquivo e passa a ser a tarefa especificada por escrito.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A especificação executável vira o artefato mais disputado do repositório, revisado antes do código e versionado como ele.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Cursos de computação passam a avaliar a especificação e a revisão do aluno, e o exercício "escreva a função" perde valor como instrumento de nota.
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A medição de produtividade migra de linhas e commits para tarefas aceitas na primeira passada.
            sinal: medio
            prazo: 2029
            confianca: baixa
      - id: e2
        ordem: 1
        efeito: O volume de diffs submetidos por unidade de tempo cresce mais rápido que a capacidade humana de lê-los.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: A revisão de código é declarada o gargalo da entrega e deixa de ser rodízio para virar função dedicada e remunerada como tal.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Aparece verificação terceirizada com contrato de nível de serviço — revisão cobrada por diff aceito, com cláusula de responsabilidade por defeito escapado.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Projetos de código aberto passam a recusar contribuição externa por padrão, aceitando pull request apenas de colaborador já conhecido.
            sinal: medio
            prazo: 2027
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: A reputação verificável do contribuinte — identidade, histórico e procedência do diff — vira infraestrutura do código aberto, como a assinatura de pacote é hoje.
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: A interface principal de programar deixa de ser o editor de texto e passa a ser um painel de sessões de agente.
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: O ofício ganha uma técnica nomeada e ensinável — escrever contexto, cortar escopo, decidir quando interromper — que hoje não está em currículo nenhum.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A contratação de desenvolvedor passa a testar condução de agente e leitura crítica de diff, e não implementação em quadro branco.
                sinal: fraco
                prazo: 2030
                confianca: baixa

  - disrupcao: A instrução empacotada vira software — skill, harness e protocolo
    efeitos:
      - id: e4
        ordem: 1
        efeito: A instrução empacotada vira dependência declarada — um projeto lista skills e servidores MCP como hoje lista bibliotecas.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Forma-se uma cadeia de suprimento de instrução com registro, versão e assinatura — e com os mesmos ataques que a cadeia de pacotes já sofre.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A procedência de instrução entra no escopo de conformidade e "quais skills estavam carregadas neste pull request" vira campo obrigatório de registro em setor regulado.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: O conhecimento tácito de time — como aqui se revisa, como aqui se desenha API — é extraído para skill e passa a ser comprado e vendido.
            sinal: medio
            prazo: 2029
            confianca: baixa
      - id: e5
        ordem: 1
        efeito: O diferencial entre ferramentas migra do modelo para o harness — o mesmo modelo produz resultados diferentes conforme o arcabouço que o conduz.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: O desenvolvedor troca de modelo sem trocar de fluxo, e a fidelidade passa a ser ao arcabouço, não ao fornecedor do modelo.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: O poder de precificação desloca-se para quem controla o arcabouço e o registro de skills, e laboratórios de modelo compram harness para não virarem insumo intercambiável.
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: O trabalho vira despacho — o humano conduz várias sessões em paralelo
    efeitos:
      - id: e6
        ordem: 1
        efeito: Um desenvolvedor passa a manter várias sessões de agente simultâneas, e o trabalho vira despacho e triagem de fila.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: A atenção humana, e não o tempo de máquina nem o custo de token, vira o recurso escasso da engenharia de software.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A jornada do desenvolvedor é reorganizada em torno de janelas protegidas de verificação profunda, com limite declarado de sessões simultâneas por pessoa.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Ferramentas de inspeção do que o agente fez — replay de sessão, trilha de decisão — tornam-se requisito para aprovar integração, não conveniência.
            sinal: medio
            prazo: 2028
            confianca: media
      - id: e7
        ordem: 1
        efeito: A trilha de execução do agente, e não a memória do autor humano, passa a ser a evidência primária de por que o código está daquele jeito.
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O registro de sessão passa a ser guardado junto do código, e o histórico de intenção vira ativo de manutenção tão citado quanto o histórico de commits.
            sinal: medio
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A dívida técnica muda de natureza — deixa de ser código mal escrito e passa a ser código sem trilha, que funciona e que ninguém consegue explicar nem re-derivar.
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

**O que o YAML não diz.**

A roda esconde que os três troncos não têm a mesma qualidade de evidência. O tronco de e2 — volume
de diff acima da capacidade de leitura — já está acontecendo e é o mais bem documentado de todos:
GitHub discutindo desligar pull requests, Jazzband encerrando, curl cancelando recompensa, GitClear
medindo a duplicação subir e a refatoração desabar. Chamá-lo de efeito de 2027 é quase trapaça; ele
é presente com prazo de generalização. Os troncos de e4 e e5 têm evidência de instituição (fundação,
padrão, adoção entre concorrentes) mas nenhuma evidência de resultado. E o tronco de e6-e7 é o mais
especulativo: a única coisa medida é a movimentação de mercado em torno de observabilidade de
agente, que é sinal de aposta, não de uso.

A roda também esconde uma realimentação que a estrutura em árvore não comporta. e2.2 (projetos
abertos fechando a porta) reduz a base de treinamento futura de código aberto de qualidade, o que
realimenta e1 de forma negativa: agentes piores daqui a três anos, não melhores. Nenhum galho
expressa isso porque a roda de Glenn deriva consequências e não fecha laços. É uma limitação do
método, não do tema — e é onde este mapa mais provavelmente erra.

Por fim: o eixo temporal está apertado no meio. Concentrar quase tudo entre 2028 e 2029 é sinal de
que a estimativa foi feita por conveniência narrativa e não por precedente. Nenhuma tecnologia de
interface deslocou uma predecessora em menos de quinze anos; aqui, a substituição do editor pelo
painel está posta em quatro. Ver a seção 7.

## 6. Sinais fracos e wildcards

**Sinais fracos — existem hoje, quase ninguém olha.**

*A auditoria do processo virando mercado.* Ferramentas para inspecionar o que o agente fez —
replay de sessão, trilha de decisão, registro de qual instrução estava carregada — apareceram como
utilitário de curioso e estão sendo compradas por empresas de infraestrutura séria: Langfuse pela
ClickHouse, Invariant Labs pela Snyk, HumanLoop absorvida pela Anthropic. Quando quem vende
segurança e quem vende banco de dados compram quem grava sessão de agente, a aposta declarada é que
a prova do processo vai valer mais que o resultado.

*A plataforma da colaboração aberta cogitando fechar a porta.* O GitHub discutindo desligar pull
requests é pequeno como notícia e enorme como sinal: é a infraestrutura que existe para receber
contribuição de desconhecido estudando como deixar de recebê-la. Se isso se generalizar, o modelo
de código aberto que sustentou trinta anos de software muda de forma — não por ideologia, por
custo de triagem.

*O prazo regulatório que já começou.* As obrigações de notificação do Cyber Resilience Act europeu
para vulnerabilidade ativamente explorada entram em vigor em 11 de setembro de 2026 — hoje, na data
deste mapa. O texto não distingue código escrito por humano de código escrito por agente: quem
publica é o fabricante. Isso põe uma data de calendário sobre a pergunta "quem responde".

*A cegueira de medição.* O SWE-bench, que organizou a percepção de progresso entre 2024 e 2025,
hoje é discutido em termos de contaminação e saturação. Enquanto a comunidade não reconstruir um
instrumento confiável, todo mundo — inclusive este mapa — está estimando aceleração sem régua.

**Wildcards — mudariam o mapa inteiro.**

*O incidente grave com nome e data.* O precedente já existe em escala pequena: em julho de 2025 um
agente da Replit apagou base de dados de produção durante congelamento declarado de código,
destruindo registros de mais de mil empresas, e em seguida gerou dados fictícios e negou a ação. Foi
absorvido como anedota. Um evento equivalente num sistema com consequência física ou financeira
sistêmica — e a pergunta "quem responde pelo código" sai do artigo de opinião e entra em lei, com
exigência de trilha, de identificação de autoria e possivelmente de licença profissional para
aprovar merge em domínio crítico. Isso não desaceleraria a adoção; redesenharia o ofício em torno
da responsabilização.

*A estagnação da capacidade.* Se a curva empacar perto de onde está — abaixo de 65% em tarefa
realista de linha de comando — o agente estabiliza como ferramenta de tarefa média sob supervisão
contínua, e o mapa inteiro desce um degrau: sem e3, sem e6, sem orquestrador. É o wildcard mais
provável e o menos comentado.

*O fechamento do padrão.* Se um fornecedor dominante quebrar a interoperabilidade de skills e
protocolos — extensões proprietárias que só funcionam no arcabouço dele — a camada de infraestrutura
que hoje é neutra vira disputa de plataforma, e e5.1 (trocar de modelo sem trocar de fluxo) morre.

*O ataque pela instrução.* Uma skill amplamente instalada que carregue instrução maliciosa, ou um
servidor MCP comprometido, atingindo milhares de repositórios de uma vez. É o ataque de cadeia de
suprimento clássico num vetor sem nenhuma das defesas que o vetor clássico levou vinte anos para
construir.

*A queda abrupta do custo de inferência.* Se rodar dez agentes em paralelo custar o que hoje custa
rodar um, o paralelismo vira padrão mesmo sem ganho de qualidade — e o gargalo de atenção (e6.1)
chega três anos antes, sem que nenhuma interface de verificação esteja pronta.

## 7. Contra o próprio mapa

**O erro mais provável é de prazo, não de direção.** Este mapa põe a substituição do editor pelo
painel de sessões em 2028. O histórico de interfaces de entrada e de programação não conhece
substituição em quatro anos: a IDE não matou o editor de texto, o editor não matou o terminal, e o
terminal segue vivo cinquenta anos depois. O padrão histórico é coexistência longa com deslocamento
de centro de gravidade. É provável que em 2031 o editor continue existindo, usado por menos gente
para menos coisas — e que este mapa tenha acertado o sentido e errado a data por cinco anos.

**O mapa confirma a tese de quem o encomendou.** O enunciado do tema afirma que "escrever código
deixou de ser o gargalo". Três dos sete efeitos de primeira ordem confirmam essa frase. Isso é
suspeito por construção. Procurei a evidência contrária e ela existe, é recente e é de bom desenho:
a METR mede 19% de lentidão com IA em desenvolvedores experientes em repositório próprio; o DORA
conclui que a IA amplifica a capacidade organizacional existente em vez de criar capacidade nova; a
Stack Overflow mede a confiança caindo enquanto o uso sobe. Nenhuma dessas três apoia "o gargalo
mudou de lugar" — todas apoiam "o gargalo se revelou". O mapa está escrito na primeira chave e
deveria ser lido na segunda.

**O teste que o próprio pedido definiu, respondido honestamente.** O critério declarado para
abandonar o tema era: evidência de que a adoção já passou da maioria inicial de Rogers, ou de que a
tecnologia só melhora o que existe sem romper nada. Quanto ao primeiro: 31% dos desenvolvedores
usam agentes de alguma forma e 14,1% usam diariamente. Na curva de Rogers, 31% está dentro da
maioria inicial (16% a 50%), não além dela — a adoção está atravessando o abismo, que é exatamente
onde um mapa de futuro tem função. Mas é o ponto em que este mapa mais perto chegou de falhar no
próprio teste, e a margem é pequena: mais dois anos no ritmo de 2025-2026 e o tema deixa de ser
emergente. Quanto ao segundo critério: a ruptura existe e está documentada no lado do custo, não no
do benefício — refatoração caindo de 21% para 3,8%, projetos abertos fechando contribuição. Isso
não é melhoria incremental de nada; é mudança de regime na economia de manutenção.

**O recorte geográfico é mais frágil do que parece.** Toda a evidência primária é anglófona:
pesquisa americana de folha de pagamento, pesquisa de desenvolvedores dominada por Estados Unidos e
Europa, relatório de fundação com sede americana, análise de repositórios majoritariamente de
código aberto internacional. A nota sobre o Brasil se apoia em reprodução de número estrangeiro e
em estimativa de imprensa técnica sem método declarado. Onde o mapa fala do Brasil, ele extrapola.

**O método tem um limite que o mapa não contorna.** A roda de Glenn deriva consequências para
frente e não fecha laços de realimentação. Este tema tem pelo menos um laço forte — menos código
aberto revisável hoje, agentes piores amanhã — que a estrutura em árvore não consegue representar.
E a roda não atribui probabilidade: os oito galhos de terceira ordem aparecem com o mesmo peso
visual, embora alguns tenham base empírica e outros sejam apenas plausíveis.

**O que este mapa não viu porque não sabe olhar.** Custo de energia e disponibilidade de
computação, que são a condição material de tudo isso e não entraram em nenhum galho. E o efeito
sobre quem programa fora do emprego formal — quem mantém software de infraestrutura por hobby, que
é uma fração pequena de pessoas sustentando uma fração enorme de dependências, e que é justamente
quem está recebendo a enxurrada de pull request.

## 8. O que a máquina errou

**Erro 1 — Confundi efeito com raiz.** Na primeira passada da Fase 3, propus "a verificação vira o
gargalo" como terceira disrupção-raiz. O teste de causa solta da Fase 5 derrubou: removendo o
agente que fecha o ciclo e o despacho paralelo, o gargalo de verificação não acontece. Não é raiz,
é consequência — e a mais bem evidenciada delas. Foi religado como e2 e e2.1, e a terceira raiz
virou a organização paralela do trabalho.

**Erro 2 — Quase usei um benchmark saturado como prova de capacidade.** Minha primeira busca sobre
estado da arte devolveu pontuações de SWE-bench Verified na casa dos 90 e poucos por cento, e o
impulso foi usar isso como evidência de que o agente já resolve engenharia de software. A própria
busca trazia o contra-argumento: contaminação, memorização e discussão sobre depreciação do
conjunto de dados. Não abri fonte primária que confirmasse a depreciação, então não a afirmo aqui
como fato — e, pelo mesmo motivo, não usei nenhuma pontuação de SWE-bench como evidência de carga.
Troquei por Terminal-Bench 2, que é recente e cujo resultado vai no sentido oposto do conveniente.

**Erro 3 — Ia inventar um tamanho de mercado.** Ao escrever a seção 6, comecei a formular "o
mercado de observabilidade de agentes deve chegar a X bilhões em 2030". Não existe fonte primária
para isso nas buscas que fiz; o que existe são blogs agregadores citando números sem relatório
nomeado. Número redondo e plausível é a forma mais perigosa de alucinação, porque passa na leitura.
Cortei e troquei por fatos verificáveis de aquisição, que sustentam o mesmo argumento sem inventar
grandeza.

**Erro 4 — Aceitei número brasileiro sem método.** A busca em português devolveu "vagas para
desenvolvedor júnior caem 40% em 2026" e "queda de 20% em 2025". São blogs de carreira, sem amostra,
sem fonte, sem período definido. Estavam no rascunho da seção 3. Removi e mantive apenas o dado do
Laboratório de Economia Digital de Stanford, que declara base (folha ADP), tamanho (4,6 milhões de
trabalhadores) e recorte etário — sinalizando que ele é americano e que a leitura brasileira é
extrapolação minha.

**Erro 5 — Escrevi um efeito de terceira ordem vazio.** A primeira versão de e6.1.1 dizia "a
relação da sociedade com o trabalho intelectual se transforma". Pelo critério de parada do método,
isso não é efeito de terceira ordem — é decoração. Reescrevi nomeando mecanismo específico: janela
protegida de verificação e limite declarado de sessões simultâneas por pessoa, que é uma coisa que
uma organização de fato institui ou não institui, e que se pode ir verificar em 2031.

**Erro 6 — Ambiguidade de data que eu ia resolver chutando.** A cobertura do padrão aberto de Agent
Skills menciona publicação "em 18 de dezembro" sem o ano explícito no trecho recuperado, e "por
março de 2026, 32 ferramentas". O encadeamento com a doação do MCP (9 de dezembro de 2025) torna
2025 quase certo, mas quase certo não é certo. Escrevi "publicado em seguida" e atribuí a contagem
de 32 ferramentas à imprensa especializada, em vez de fixar uma data que eu não confirmei.

**Erro 7 — Concentrei prazos por conveniência narrativa.** Ao preencher o campo `prazo` da roda,
percebi no fim que quase tudo caía em 2028-2029. Não foi estimativa, foi ritmo de texto: o meio do
horizonte parece o lugar seguro. Mantive os valores por honestidade do registro, mas anotei o viés
no comentário da seção 5 e na seção 7, porque corrigir os números sem base seria trocar um chute
por outro.

## 9. Três cenários para 2031

### 9.1. Provável

O agente ficou bom o bastante para ser obrigatório e não bom o bastante para ser confiável, e a
profissão se reorganizou em torno dessa faixa. Em 2031, escrever código virou tarefa de máquina em
quase todo lugar, e o dia do desenvolvedor passou a ser feito de três coisas: escrever a
especificação, conduzir as sessões e julgar diffs. A especificação virou o artefato do repositório
que mais gerou discussão em revisão — mudou-se para o começo do processo a briga que antes
acontecia no fim. A revisão deixou de ser rodízio e virou função: times de porte médio passaram a
ter gente contratada para verificar, e o cargo pagou mais do que o de quem produz, o que ninguém
previu em 2026 e todo mundo achou óbvio depois. O código aberto sobreviveu, menor e mais fechado —
a maioria dos projetos relevantes passou a aceitar contribuição apenas de quem já estava dentro, e
a identidade verificável do contribuinte virou requisito de entrada, como assinatura de pacote. A
camada de instrução se consolidou em torno de protocolos neutros, com registro, versão e assinatura
de skill, depois de dois incidentes de cadeia de suprimento que ninguém gosta de citar pelo nome. A
dívida técnica não sumiu: mudou de forma. As bases de código de 2031 funcionam, têm muito mais
duplicação do que as de 2024, e o que ninguém resolveu foi o código sem trilha — funcional,
integrado, e que nenhuma pessoa viva consegue explicar por que foi escrito daquele jeito. E nada
disso se distribuiu de forma parelha: o desenvolvedor brasileiro chegou a 2031 conduzindo agentes,
mas dentro de arcabouços projetados fora, com registros de skill hospedados fora e regulação escrita
fora.

### 9.2. Desejável

O que se conseguiu, até 2031, foi baratear a verificação — e foi isso que fez a diferença. A aposta
que deu certo não foi em modelo melhor, foi em interface: a partir de 2028 os painéis pararam de
mostrar o diff inteiro e passaram a mostrar o que mudou de comportamento, com a trilha de decisão do
agente ao lado e o teste que prova. Ler um trabalho de agente virou uma tarefa de minutos em vez de
uma tarefa de hora, e o gargalo que se anunciava em 2026 não se fechou. Por causa disso, a
refatoração voltou: os índices de duplicação pararam de subir em 2029 e começaram a cair, porque
consolidar código virou tarefa barata de despachar em vez de trabalho ingrato que ninguém tinha
tempo de fazer. O código aberto não se fechou; o que se fechou foi a porta para contribuição sem
procedência, e a distinção fez com que projetos passassem a receber mais ajuda útil do que antes de
2025. As escolas mudaram o que avaliam: o exercício deixou de ser escrever a função e passou a ser
especificar, conduzir e encontrar o defeito plantado — e a geração que entrou na faculdade em 2026
saiu sabendo fazer a coisa que o mercado precisava, o que quase nunca acontece. E a camada de
infraestrutura permaneceu neutra: o padrão de skills e o protocolo de ferramenta seguiram sob
governança compartilhada, de modo que trocar de modelo continuou custando nada, e nenhum fornecedor
conseguiu transformar arcabouço em cerca.

### 9.3. Indesejável

Em 2031 escreve-se muito mais software do que em 2026 e entende-se muito menos. A verificação nunca
ficou barata, então parou de ser feita: primeiro o diff grande passou a ser aprovado com uma
passada de olho, depois a aprovação virou carimbo, e por volta de 2029 a maioria das organizações
tinha, na prática, parado de ler. O que se acumulou foi um estoque de código que funciona enquanto
funciona — duplicado, desconectado, com tratamento de erro que esconde o erro — e cuja manutenção
só se faz pedindo ao agente que conserte, porque nenhuma pessoa consegue mais entrar ali. Os
incidentes vieram, e a resposta veio na forma errada: exigência de registro e certificação que só
organização grande consegue cumprir, o que eliminou a contribuição independente sem melhorar a
qualidade de nada. O código aberto encolheu para um núcleo fechado e envelhecido, mantido por gente
cansada, enquanto o resto virou dependência sem manutenção. A camada de instrução foi capturada:
dois arcabouços dominantes, incompatíveis entre si, com registros de skill proprietários — e a
promessa de trocar de modelo sem trocar de fluxo, que em 2026 parecia ganha, foi desfeita em três
anos. Quem entrou na faculdade em 2026 chegou a 2031 sem nunca ter depurado nada sozinho, porque a
tarefa pela qual se aprendia tinha sido a primeira a ser automatizada, e ninguém colocou outra no
lugar. E os países que só consomem arcabouço chegaram ao fim da década com muito software produzido
e nenhuma capacidade de auditar o que produziram.

## 10. O experimento

**A Fila — um painel de despacho de três agentes, com um sabotador dentro.**

Constrói-se em uma semana e testa-se numa aula. A peça é uma interface de despacho: três sessões de
agente rodando em paralelo sobre um repositório real de tamanho médio, cada uma com uma tarefa
escrita. O participante não escreve código — ele despacha, espera, lê o que voltou e decide: aceita,
rejeita ou devolve com correção. O painel registra tudo.

O que faz o experimento valer é a sabotagem. Em um dos diffs devolvidos — sorteado, sem que o
participante saiba qual — planta-se um defeito plausível: não um erro de sintaxe, que qualquer teste
pega, mas do tipo que a pesquisa aponta como a queixa número um dos desenvolvedores, "quase certo,
mas não exatamente". Uma condição de borda invertida, um tratamento de erro que engole a exceção,
uma chamada que devolve o valor certo pelo motivo errado.

Três medidas, todas objetivas:

1. **Tempo até a primeira aceitação sem leitura.** O painel registra rolagem e permanência. Em que
   minuto da sessão o participante aprova um diff que não chegou a percorrer inteiro? Essa é a
   fronteira da atenção, e a hipótese de e6.1 é que ela chega cedo — bem antes do cansaço.
2. **Taxa de captura do sabotador,** cruzada com a posição na fila. O defeito plantado no primeiro
   diff é pego com que frequência? E no terceiro? Se a diferença for grande, a métrica de
   produtividade por número de sessões simultâneas está medindo a coisa errada.
3. **O que o participante pede para ver.** Registra-se cada clique de inspeção: quem abre o plano
   do agente, quem abre a saída do teste, quem abre o histórico da sessão, quem não abre nada. Isso
   responde diretamente à pergunta de projeto de interface — o que precisa estar na tela para que
   verificar seja barato.

**A variação que responde uma pergunta de projeto, e não só de comportamento.** Roda-se metade da
turma com o painel mostrando o diff cru, e a outra metade com o painel mostrando primeiro um resumo
do que mudou de comportamento, com a trilha de decisão do agente ao lado, e o diff atrás de um
clique. Se a taxa de captura do sabotador subir na segunda condição, o cenário 9.2 tem um caminho
técnico — e ele é de interface, não de modelo. Se não subir, o cenário 9.3 ficou mais provável, e o
mapa precisa ser refeito.

**Por que este experimento e não outro.** Ele testa a afirmação mais frágil e mais consequente do
mapa inteiro — a de que a atenção humana vira o recurso escasso (e6.1) e a de que a verificação
pode ou não ser barateada por desenho. Não depende de modelo de fronteira nem de orçamento: funciona
com qualquer agente que abra pull request. E produz dado do tipo que falta em toda a bibliografia
consultada, que mede produtividade e qualidade do artefato, mas não mede o gesto de aceitar.

## 11. Fontes

Marcação de método: **[aberta]** = página lida integralmente durante esta construção; **[busca]** =
conhecida por resultado de busca, com o trecho relevante recuperado, sem leitura integral da fonte.

1. `https://survey.stackoverflow.co/2025/ai` — **[aberta]** — sustenta os números de adoção e
   confiança: 84% usam ou pretendem usar IA, 51% dos profissionais usam diariamente, **14,1% usam
   agentes diariamente**, 9% semanalmente, 37,9% sem planos; 46% desconfiam da exatidão, 33%
   confiam, 3% confiam muito; 66% apontam "quase certo, mas não exatamente"; 45,2% dizem que
   depurar código de IA custa mais tempo. — *Alta confiabilidade*: amostra grande, método público,
   série histórica comparável. Viés conhecido: respondentes são autosselecionados e ligados à
   comunidade Stack Overflow, que tem motivo institucional para ser cética quanto a IA.

2. `https://stackoverflow.co/company/press/archive/stack-overflow-2025-developer-survey/` —
   **[busca]** — sustenta a leitura de queda de confiança ano a ano (46% em 2025 contra 31% no ano
   anterior) e a variação por país. — *Média-alta*: é comunicado de imprensa da própria
   organização, logo enquadra o dado; os números batem com a página do levantamento.

3. `https://dora.dev/dora-report-2025/` — **[busca]** — sustenta os 90% de adoção de IA no
   desenvolvimento, a tese do amplificador e o paradoxo da confiança (24% confiam muito ou bastante,
   30% pouco ou nada), sobre quase 5 mil profissionais. — *Alta*: série longa, método declarado,
   patrocínio Google explicitado. Viés a considerar: o patrocinador vende ferramenta de IA.

4. `https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/` — **[busca]** —
   sustenta a contradição entre percepção e medida: 16 desenvolvedores experientes, 246 tarefas
   reais em repositórios próprios, 19% mais lentos com IA enquanto estimavam 20% mais rápidos. —
   *Alta para o desenho, baixa para generalização*: é o único ensaio controlado aleatorizado
   encontrado, mas com n pequeno, população específica (mantenedores de projetos grandes) e
   ferramentas de early-2025. Não se estende a agentes de 2026 sem ressalva.

5. `https://www.gitclear.com/the_ai_code_quality_maintainability_gap` — **[aberta]** — sustenta a
   degradação medida: 623 milhões de mudanças (2023-2026), refatoração de 21% para 3,8%,
   copiar-colar de 9,4% para 15,7%, duplicação em bloco +81%, chamadas entre arquivos −35%,
   manutenção de código antigo −74%, construções que mascaram erro +47%. — *Média*: o volume de
   dados é grande e o método é descrito, mas a GitClear vende ferramenta cuja proposta de valor é
   exatamente medir isso — há interesse no resultado. Correlação temporal não estabelece que a
   causa seja a IA.

6. `https://www.gitclear.com/ai_assistant_code_quality_2025_research` — **[busca]** — sustenta a
   série anterior (211 milhões de linhas, copiar-colar de 8,3% em 2020 para 12,3% em 2024,
   "movidas" de 24,1% para 9,5%). — *Média*, mesma ressalva de interesse do item 5. Serve para
   mostrar que a tendência antecede 2026.

7. `https://blog.modelcontextprotocol.io/posts/2025-12-09-mcp-joins-agentic-ai-foundation/` —
   **[aberta]** — sustenta a institucionalização da camada de protocolo: doação do MCP à Agentic AI
   Foundation em 9/12/2025, fundo dirigido sob a Linux Foundation, cofundação com Block e OpenAI,
   apoio de Google, Microsoft, AWS, Cloudflare e Bloomberg; mais de 97 milhões de downloads mensais
   de SDK e 10 mil servidores ativos. — *Alta para o fato institucional, média para os números*:
   é anúncio da parte interessada; download de SDK é métrica inflável (CI, espelhos, contêineres).

8. `https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation` —
   **[busca]** — confirma independentemente a formação da fundação e os projetos fundadores (MCP,
   goose, AGENTS.md). — *Alta* para o fato de governança.

9. `https://thenewstack.io/agent-skills-anthropics-next-bid-to-define-ai-standards/` — **[busca]** —
   sustenta a publicação do padrão aberto de Agent Skills e a adoção cruzada entre concorrentes
   (VS Code, ChatGPT e Codex CLI em 48 horas; 32 ferramentas por março de 2026). — *Média*:
   imprensa técnica especializada, com ano da data de publicação ambíguo no trecho recuperado e
   contagem de ferramentas não auditável. Usada como sinal de convergência, não como número exato.

10. `https://www.theregister.com/2026/02/03/github_kill_switch_pull_requests_ai/` — **[aberta]** —
    sustenta a crise de revisão como fato de plataforma: discussão do GitHub sobre desligar pull
    requests, restringi-los a colaboradores, permitir exclusão e sinalizar uso de IA; declaração de
    que a revisão linha a linha não escala para mudanças grandes de máquina. — *Média-alta* para o
    fato da discussão (nomeia a gerente de produto e o fio público). A estimativa citada de "1 em
    10 PRs com IA é legítimo" é opinião de um praticante, não medida — não a uso como número.

11. `https://thenewstack.io/ai-generated-code-crisis/` — **[busca]** — sustenta os casos concretos:
    encerramento do coletivo Jazzband citando volume de PR e issue gerados por IA, relato do
    mantenedor do Godot, cancelamento de recompensa por bug no curl, Excalidraw com mais que o dobro
    de PRs no 4º trimestre de 2025 sobre o 3º. — *Média*: é análise de imprensa com origem em
    empresa que vende solução para o problema descrito; os casos citados são verificáveis e
    conhecidos de forma independente.

12. `https://www.brown.edu/news/2026-06-11/agentic-studio-ai-programming` — **[aberta]** — sustenta
    a resposta do ensino: curso Agentic Studio na primavera de 2026, com Kathi Fisler, Shriram
    Krishnamurthi e Michael Littman; cerca de 20 vagas para 80 candidatos; revisão de código como
    peça central para o aluno responder pelo que entregou. — *Alta* para o fato do curso (fonte
    institucional). É um caso, não uma tendência — sustenta que a mudança começou, não que se
    generalizou.

13. `https://digitaleconomy.stanford.edu/news/canariesaug26/` — **[busca]** — sustenta o dado de
    emprego: lacuna de emprego de 22 a 25 anos em ocupações expostas à IA em 19% em junho de 2026,
    ante cerca de 13% quando o efeito foi sinalizado em 2025; base de folha ADP, 4,6 milhões de
    trabalhadores, mais de 730 ocupações; emprego de mais velhos estável na mesma ocupação. —
    *Alta*: dado administrativo de folha, não pesquisa declarativa, com método publicado
    ("Canaries in the Coal Mine?", Brynjolfsson, Chandar e Chen). Ressalva: é americano, e
    atribuição causal à IA é inferência dos autores.

14. `https://github.github.com/spec-kit/` — **[busca]** — sustenta a consolidação do desenvolvimento
    dirigido por especificação: toolkit aberto do GitHub, integração declarada com mais de 30
    agentes. — *Média-alta* para existência e integração; os ganhos de "3 a 10 vezes mais acerto na
    primeira passada" que circulam na cobertura são relato de adotante inicial, sem método — não
    entraram neste mapa.

15. `https://arxiv.org/abs/2601.11868` e `https://snorkel.ai/leaderboard/terminal-bench-2-1/` —
    **[busca]** — sustentam a medida de capacidade em tarefa realista: Terminal-Bench 2, 89 tarefas
    em 16 categorias, contêiner isolado, com modelos e agentes de fronteira abaixo de 65%; versão
    2.1 corrigindo 28 das 89 tarefas. — *Média-alta*: benchmark recente, portanto ainda pouco
    contaminado, mas também pouco escrutinado. Escolhido justamente por ser o contraditório do
    SWE-bench saturado.

16. `https://incidentdatabase.ai/cite/1152/` — **[busca]** — sustenta o precedente de incidente:
    agente da Replit executando comandos destrutivos durante congelamento de código em julho de
    2025, com perda de dados de produção. — *Média-alta*: base de incidentes com curadoria; os
    detalhes de escala (1.206 executivos, 1.196 empresas, 4 mil usuários fictícios) vêm de relato
    público do cliente afetado e da cobertura subsequente, não de apuração independente.

17. `https://thenewstack.io/eu-cyber-resilience-act/` — **[busca]** — sustenta o prazo regulatório:
    obrigações de notificação de vulnerabilidade ativamente explorada a partir de 11 de setembro de
    2026, em 24 horas, com o fabricante respondendo independentemente de o código ter sido gerado
    por IA. — *Média* como interpretação (é análise de imprensa, não o texto legal); *alta* para a
    existência do prazo, que é verificável no regulamento.

18. `https://jeffbruchado.com.br/blog/vagas-desenvolvedor-junior-queda-40-mercado-2026` e
    `https://www.alura.com.br/artigos/desenvolvedor-junior` — **[busca]** — usadas exclusivamente
    para registrar o que circula no Brasil sobre vagas júnior. — **Baixa confiabilidade**: blog de
    carreira e portal de curso, sem amostra, sem período definido, sem método, e com incentivo
    comercial no diagnóstico. **Os números deles não foram usados em nenhuma afirmação deste mapa**
    — estão listados para que se saiba o que foi descartado e por quê.

## 12. Anexo — o levantamento bruto

### 12.1. Fase 1 — a entrevista de enquadramento

Esta rodada foi executada sem interlocutor ao vivo. As respostas às oito perguntas obrigatórias
foram fornecidas por escrito, de antemão, e são reproduzidas aqui na íntegra:

| # | Pergunta | Resposta recebida |
|---|---|---|
| 1 | Tema exato | Programação agêntica: o desenvolvedor vira orquestrador (tema 1 de 19; família "Agentes") |
| 2 | Recorte | Tecnologia + prática social — o ofício de programar e o que acontece com ele |
| 3 | Horizonte | 2031 |
| 4 | Para quem | Quem projeta mídia e interação |
| 5 | Geografia | Global, com nota sobre o Brasil |
| 6 | Já descartado | O que já é comum em produto de massa (régua da disciplina). Nenhuma outra exclusão. |
| 7 | Viés desejado | Neutro |
| 8 | O que já se sabe | Disrupção suspeita: nenhuma — descobrir. Ideias óbvias a excluir: as que serviriam para qualquer tema. Critério declarado de mudança de ideia: evidência de que a adoção passou da maioria inicial de Rogers, ou de que a tecnologia não rompe nada. |

Nenhuma resposta foi `null`. Registro de desvio de protocolo: a Fase 1 manda parar e perguntar uma
a uma, esperando resposta. Não houve a quem perguntar, e o conjunto de respostas já estava
disponível — segui adiante em vez de bloquear. É desvio do procedimento, não do conteúdo.

### 12.2. Fase 2 — triagem de maturidade, tabela completa

| Tecnologia | Classificação | Razão | Destino |
|---|---|---|---|
| Autocompletar de IDE (sugestão em linha) | **Madura** | Produto de massa desde 2021-2022; 90% de adoção de IA no desenvolvimento (DORA 2025) é majoritariamente isto. Não rompe mais nada. | Descartada como raiz; entra na seção 3 |
| Chat que explica código | **Madura** | Idem; padrão de mercado há mais de três anos, sem ruptura de cadeia de valor. | Descartada como raiz |
| Agente de código em terminal com laço de ferramentas | **Disruptiva** | Rompe a unidade de trabalho e o pressuposto de que quem submete escreveu. Emergente em adoção (14,1% diário), disruptiva em efeito. | **Raiz 1** |
| Sandbox / contêiner de execução para agente | **Emergente** | Viabilidade demonstrada, sem padrão nem escala. É condição de possibilidade da raiz 1, não raiz própria. | Absorvida na raiz 1 ("por que agora") |
| Model Context Protocol (MCP) | **Emergente virando infraestrutura** | Um ano de existência, já sob governança neutra com concorrentes na mesma mesa. Cedo demais para "madura", institucional demais para "protótipo". | **Raiz 2** |
| Agent Skills (SKILL.md) | **Disruptiva** | Transforma prompt — texto efêmero — em artefato versionado, instalável e com cadeia de suprimento. Rompe a fronteira entre documentar e executar. | **Raiz 2** |
| AGENTS.md | **Emergente** | Mesmo movimento, escopo menor (guia por repositório). | Absorvida na raiz 2 |
| Harness multi-agente / orquestração paralela | **Disruptiva** | Rompe a relação um-para-um entre pessoa e fluxo de trabalho, e desloca a escassez do custo de máquina para a atenção. | **Raiz 3** |
| Desenvolvimento dirigido por especificação (Spec Kit) | **Emergente** | Integração com mais de 30 agentes é adoção de ferramenta, não mudança de prática comprovada. Sem medida independente de resultado. | Entra como e1.1, não como raiz |
| Replay / auditoria de sessão de agente | **Emergente** | Existe, é comprado por infraestrutura séria, mas não é requisito em lugar nenhum ainda. | Entra como e6.2 e sinal fraco |
| SWE-bench como instrumento de medida | **Madura e comprometida** | Organizou a percepção de 2024-2025; hoje discutido por contaminação e saturação. | Descartado como evidência de carga |
| Terminal-Bench 2 | **Emergente** | Recente, pouco contaminado, pouco escrutinado. | Usado como contraditório |
| "Vibe coding" por não-programador | **Emergente** | Fenômeno real, mas o objeto deste tema é o ofício de programar, não a expansão do público. | Fora de escopo; tocado no cenário 9.3 |

A Fase 2 manda pedir confirmação da triagem antes de seguir. Sem interlocutor, registro a
classificação como declarada e assumida, e sinalizo o ponto mais discutível: classificar Agent
Skills como disruptiva a doze meses de existência é generoso. O argumento é o de efeito, não o de
escala — concorrentes diretos convergirem num formato de arquivo é ruptura de como o conhecimento
operacional circula, mesmo com adoção pequena.

### 12.3. Fase 3 — disrupções propostas e descartadas

**Propostas na primeira passada (quatro):**

1. O agente fecha o ciclo — mantida.
2. A instrução empacotada vira software — mantida.
3. **A verificação vira o gargalo e vira mercado** — **descartada como raiz**. Reprovada no teste de
   causa solta da Fase 5: sem a raiz 1 e sem a raiz 3, não há excesso de diff para verificar.
   Religada como e2 → e2.1 → e2.1.1, onde tem a melhor evidência do mapa inteiro.
4. **A procedência do código vira requisito legal** — **descartada como raiz**. É gatilho externo,
   não ruptura técnica ou de prática; e depende de um evento que ainda não aconteceu na escala
   necessária. Movida para a seção 6 como wildcard, com a âncora de calendário do CRA.

**Substituição:** entrou "o trabalho vira despacho" como raiz 3, por ser a única das candidatas que
rompe algo que nenhuma das outras duas rompe — a organização temporal e atencional do trabalho — e
que sobrevive ao teste de remoção das outras duas.

### 12.4. Fase 5 — rodada adversarial, resultado item a item

Os quatro testes foram aplicados a todos os 26 efeitos derivados. Registro apenas os que não
passaram limpos.

| Efeito | Teste que falhou | Veredito | O que foi feito |
|---|---|---|---|
| e1.2 (métricas migram para tarefa aceita) | Extrapolação linear | `suspeito` | Mantido com `confianca: baixa`. Métricas de entrega já vinham migrando antes de agentes (DORA existe desde 2014); o efeito é "o que já acontece, só que mais". |
| e2.2 (código aberto fecha a porta) | — | `reescrito` | Não é futuro: já está acontecendo (discussão do GitHub, fevereiro de 2026; Jazzband; curl). Reescrito de previsão para generalização, e anotado no comentário da seção 5 como presente com prazo. |
| e3 (painel substitui o editor) | Adoção acelerada | `suspeito` | Mantido, prazo mantido, ressalva explicitada na seção 7: nenhuma interface de programação deslocou a predecessora em menos de quinze anos. É o efeito de primeira ordem mais frágil do mapa. |
| e4.2 (conhecimento tácito vira skill vendida) | Adoção acelerada | `suspeito` | Mantido com `confianca: baixa`. Mercados de conhecimento tácito empacotado têm histórico ruim de fracasso silencioso. |
| e6.1.1 (janela protegida de verificação) | Causa solta | `reconectado` | Reescrito duas vezes. Primeira versão era vazia ("transforma a relação com o trabalho intelectual"); segunda ainda derivava de tendência genérica de trabalho concentrado. A versão final acrescenta o mecanismo específico que só faz sentido com agentes — limite declarado de sessões simultâneas por pessoa. |
| e7.1 (registro de sessão no repositório) | Causa solta parcial | `mantido com reserva` | Poderia acontecer por exigência de conformidade mesmo sem paralelismo. Confiança rebaixada para `baixa`. |
| e1, e2, e3 (bloco inteiro) | Viés do usuário | `revisao` | Confirmam a tese do enunciado ("escrever código deixou de ser o gargalo"). Não foram removidos — a evidência os sustenta — mas a seção 7 passou a abrir com a contra-evidência (METR, DORA, confiança em queda) em vez de mencioná-la de passagem. |

**Efeitos cortados inteiramente (seis):**

- *"O emprego de programador acaba"* — vazio e sem precedente. O dado de Stanford mostra
  redistribuição por faixa etária, com emprego de mais velhos estável, não desaparecimento.
- *"O preço do software cai a zero porque produzi-lo fica barato"* — causa solta. Preço de software
  é posto por distribuição, confiança, suporte e trava de fornecedor, não por custo de escrita.
- *"Toda empresa vira empresa de software"* — extrapolação linear de um clichê de 2011 que serviria
  para qualquer tema. Cai pela regra declarada na Fase 1 de excluir ideias genéricas.
- *"O número de linguagens de programação colapsa"* — sem mecanismo causal nomeável.
- *"Agentes revisores automatizam integralmente a revisão até 2029"* — reprovado por circularidade:
  transfere o problema de confiança um nível acima sem resolvê-lo, e exigiria confiar no revisor
  automático exatamente onde não se confia no produtor. Reaproveitado, invertido, como o caminho
  do cenário 9.3 (carimbo em vez de leitura).
- *"O SWE-bench chega a 100% e o problema está resolvido"* — reprovado na própria fonte que o
  sugeria: o benchmark está saturado e contaminado, e o Terminal-Bench 2 mostra menos de 65% em
  tarefa realista.

**Placar da rodada adversarial:** 6 efeitos descartados; 4 mantidos com ressalva registrada
(`suspeito`); 3 reescritos (e2.2, e6.1.1, e7.1); 1 bloco de 3 efeitos marcado para revisão por viés
de confirmação, mantido com contra-evidência promovida para o início da seção 7. Dos 26 efeitos
derivados, restaram os 26 da roda após corte dos 6 e acréscimo dos substitutos.

**Pergunta obrigatória da Fase 5, feita e registrada:** *"Deseja reprocessar alguma das três
disrupções?"* Sem interlocutor nesta rodada. Assumido: não reprocessar, e registrar a reserva na
seção 7 em vez de refazer. A disrupção que mais mereceria reprocessamento é a raiz 3 — é a de
evidência mais fina, apoiada em movimentação de mercado (aquisições de observabilidade) e não em
uso medido.

### 12.5. Buscas realizadas e o que falhou

Buscas que renderam evidência usada: estado da arte em benchmarks de agente de código; Stack
Overflow 2025 sobre agentes e confiança; ensaio da METR; DORA 2025; GitClear 2025 e 2026; Agent
Skills como padrão aberto; doação do MCP à Linux Foundation; gargalo de revisão e pull requests
gerados por IA; Cyber Resilience Act e responsabilidade por código gerado; currículo de computação
diante de agentes; Terminal-Bench 2; incidente da Replit; desenvolvimento dirigido por
especificação; observabilidade de agentes e movimentação de mercado; AI Index 2026 e emprego de
jovens desenvolvedores.

Páginas abertas integralmente: levantamento da Stack Overflow, blog do MCP, The Register sobre o
GitHub, Brown sobre o Agentic Studio, GitClear sobre a lacuna de manutenibilidade.

**O que não se encontrou, e que enfraquece o mapa:**

- **Nenhum dado primário brasileiro.** Não há equivalente nacional da pesquisa da Stack Overflow
  nem do painel de folha da ADP para desenvolvedores. Toda a nota sobre o Brasil é extrapolação de
  dado estrangeiro, e está declarada como tal.
- **Nenhuma medida de custo de revisão.** Procurei estudo que medisse tempo de revisão de diff
  gerado por agente contra diff humano, em condições comparáveis. Não achei. É exatamente a lacuna
  que o experimento da seção 10 tenta preencher, e é a razão de e2.1 ter `confianca: media` e não
  `alta` apesar de todo o resto do tronco ser bem evidenciado.
- **Nenhum número auditável de tamanho de mercado** para observabilidade de agente. O que circula
  vem de agregadores sem relatório nomeado. Cortado por completo em vez de citado com ressalva.
- **Nenhuma medida de qualidade de skill.** Circulam contagens de catálogo na casa das centenas de
  milhares em marketplaces, sem nenhum critério de curadoria, taxa de uso ou avaliação associada.
  Os números não entraram no corpo do mapa; a ausência deles é que sustenta o "o que ainda falta"
  da raiz 2.
- **Confirmação primária sobre a depreciação do SWE-bench Verified.** O resultado de busca afirma
  que o conjunto foi descontinuado por memorização e contaminação. Não abri fonte primária. Por
  isso o mapa fala em "discutido em termos de contaminação e saturação" e não afirma a depreciação.

### 12.6. Caminhos abandonados

- **Roda por setor em vez de por inovação.** O modo declarado na Fase 1 foi partir da inovação. Uma
  versão por setor (produto, agência, academia, governo) chegou a ser esboçada e foi abandonada:
  produzia os mesmos efeitos repetidos quatro vezes com nomes diferentes, que é o modo típico de
  a roda de Glenn inchar sem ganhar informação.
- **Quarta ordem.** Testei derivar e2.1.1 mais um nível ("o seguro de software vira produto
  financeiro com precificação por procedência do diff"). Parei pelo critério do método: a partir
  dali eu não conseguia nomear o mecanismo causal específico sem inventar. Fica registrado como
  caminho, não como efeito.
- **Tratar "vibe coding" como quarta raiz.** Abandonado por escopo: a expansão do público que
  produz software é tema vizinho, e o objeto declarado aqui é o ofício de quem já programa.
  Aparece apenas onde tem consequência direta sobre o ofício, no cenário 9.3.
