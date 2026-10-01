---
tema: NPCs generativos e mundos vivos
slug: npcs-generativos-e-mundos-vivos
autor_login: bvga
zona_de_interesse: Design de jogos e sistemas de agência
data: 2026-09-30
horizonte: 2056
publico: "estúdios de jogos, designers, roteiristas e pesquisadores de interação"
recorte_geografico: global
disrupcoes_raiz: 2
efeitos_ordem_1: 4
efeitos_ordem_2: 4
efeitos_ordem_3: 4
tecnologias_citadas: [NVIDIA ACE, Convai, OpenGameAgent, Inworld AI, Ubisoft Teammates, Thistle Gulch, Retail Mage, Eastshore, PastPort, SLM on-device]
fontes: 18
confianca: media
experimento: Sessão cega de agência e memória com ação validada por runtime
skill_usada: futurizacao-agregado-11-skills
publico_ok: false
---

## 1. Resumo

As 11 futurizações convergem para um núcleo relativamente estável: NPCs generativos deixam de ser apenas interfaces conversacionais e passam a operar dentro do mundo do jogo, com ações autorizadas por um runtime e memória persistente entre sessões. Em 2031, os efeitos mais próximos são adoção limitada em NPCs secundários e memória como diferencial de experiência; em 2036 aparecem exigências de QA, documentação e curadoria; em 2041 surgem problemas de continuidade e governança; em 2046 algumas skills projetam certificação, contratos e reorganização profissional; e 2056 concentra as hipóteses mais especulativas, como portabilidade de memória. O mapa não pressupõe adoção universal: a principal hipótese adversarial é que custo, segurança, responsabilidade e controle de marca mantenham a autonomia restrita por décadas. A convergência é mais forte para a arquitetura híbrida do que para a autonomia total.

## 2. O tema

NPCs generativos e mundos vivos descrevem experiências de jogo nas quais personagens controlados pelo computador usam modelos generativos para interpretar objetivos, conversar, selecionar ações disponíveis e, potencialmente, lembrar acontecimentos de sessões anteriores. O tema encosta diretamente em mídia e interação porque altera a unidade básica de autoria: em vez de toda fala e resposta serem previamente escritas, parte da interação passa a ser produzida em tempo de execução dentro de limites definidos pelo sistema.

Ele merece um mapa de futuro porque a questão relevante não é apenas se modelos de linguagem conseguem conversar melhor. A mudança potencial está na passagem de geração de texto para agência situada: o NPC pode escolher uma ação real, receber o resultado dela, revisar o plano e carregar memória para encontros posteriores. Essa mudança pode reorganizar design narrativo, QA, arquitetura de jogos, dublagem, relação entre jogador e personagem e até a noção de continuidade de um mundo virtual.

## 3. Onde isso está hoje

Em 2026 já existem demonstrações e produtos que combinam modelos generativos, voz, memória e ações dentro do jogo. NVIDIA ACE apresenta personagens autônomos e componentes de memória; Convai documenta sistemas que conectam comandos de NPC a ações no Unreal Engine; OpenGameAgent explora um runtime de agentes para jogos; Retail Mage apresenta uma abordagem híbrida; Thistle Gulch explora simulação multiagente; e Ubisoft Teammates representa um experimento fechado de personagens generativos. Essas evidências mostram capacidade técnica e experimentação real, mas não adoção majoritária da indústria.

O estado atual é melhor descrito como híbrido. O código do jogo continua definindo o espaço de ações permitido, enquanto o modelo generativo interpreta contexto, objetivos e linguagem. Diálogo ramificado, máquinas de estados e behavior trees são tecnologias maduras e, por isso, não entram como disrupções-raiz. A ruptura potencial aparece quando o modelo passa a selecionar ações reais dentro de um espaço validado pelo runtime.

Outro sinal importante é a memória. As fontes e as 11 skills tratam memória persistente como uma direção concreta de produto, mas a evidência de 2026 ainda não sustenta uma adoção ampla ou um padrão comum de memória entre jogos. O estudo citado sobre percepção de IA generativa em jogos e as fontes sobre regulamentação de chatbots indicam que percepção, segurança e governança já acompanham a evolução técnica.

Há também um risco de segurança não resolvido. Dez das 11 skills reproduziram a referência a um estudo que encontrou alta taxa de sucesso de ataques de prompt injection por roleplay contra NPCs de LLM. O fato sustenta a existência de uma vulnerabilidade relevante no estado pesquisado, mas não prova que ela permanecerá insolúvel até 2056.

## 4. As disrupções-raiz

### 4.1 Ação de NPC autorizada e validada por runtime

**O que rompe:** o NPC deixa de ser principalmente um gerador de diálogo e passa a ser um agente capaz de selecionar ações reais disponíveis no jogo, com o runtime validando se a ação pode ocorrer.

**Por que agora:** ACE, Convai, OpenGameAgent, Teammates e experiências semelhantes mostram que a integração entre modelo generativo e sistemas de jogo já saiu do campo puramente conceitual. O avanço relevante não é a existência de linguagem generativa, mas a conexão entre intenção gerada e ação verificável.

**O que ainda falta:** desempenho e custo compatíveis com produção em escala, testes adversariais, reprodutibilidade suficiente para QA, limites de ação documentáveis e mecanismos de segurança que reduzam exploits sem eliminar a agência percebida.

### 4.2 Memória persistente entre sessões

**O que rompe:** a identidade funcional do NPC deixa de ser limitada ao estado de uma sessão ou ao save tradicional e passa a incorporar informações acumuladas sobre interações anteriores.

**Por que agora:** já existem sinais concretos de personagens que lembram conversas e experiências anteriores, e a memória aparece como efeito de primeira ordem em todas as 11 futurizações. Isso torna a persistência uma direção observável, não apenas uma especulação abstrata.

**O que ainda falta:** definir o que deve ser lembrado, por quanto tempo, quem controla a memória, quanto custa armazená-la e recuperá-la, como corrigir memórias erradas e o que acontece quando um serviço ou servidor deixa de existir.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: Ação de NPC autorizada e validada por runtime de jogo
    efeitos:
      - id: e1
        ordem: 1
        efeito: NPCs secundários passam a selecionar ações reais dentro de espaços de ação definidos pelo jogo
        sinal: forte
        prazo: 2031
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: QA de jogos incorpora testes adversariais e documentação explícita do espaço de ações dos agentes
            sinal: medio
            prazo: 2036
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Ferramentas de auditoria e certificação de agentes tornam-se uma camada recorrente de produção e lançamento
                sinal: fraco
                prazo: 2046
                confianca: baixa
      - id: e1.2
        ordem: 2
        efeito: Equipes de narrativa e design passam a especificar invariantes e limites de comportamento além de escrever respostas individuais
        sinal: medio
        prazo: 2036
        confianca: media
        efeitos:
          - id: e1.2.1
            ordem: 3
            efeito: Parte do trabalho de roteiristas e dubladores migra de execução de conteúdo para curadoria, direção e negociação de uso de agentes
            sinal: fraco
            prazo: 2046
            confianca: baixa
  - disrupcao: Memória persistente de NPC entre sessões
    efeitos:
      - id: e2
        ordem: 1
        efeito: Memória de personagem passa a funcionar como diferencial de experiência e retenção em parte dos jogos
        sinal: forte
        prazo: 2031
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Jogadores passam a perceber o encerramento de um serviço como possível perda de continuidade de personagens e relações
            sinal: medio
            prazo: 2041
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Publishers e plataformas enfrentam pressão para definir políticas de retenção, exportação ou encerramento de memória de personagens
                sinal: fraco
                prazo: 2046
                confianca: baixa
      - id: e2.2
        ordem: 2
        efeito: Sistemas de memória exigem políticas de retenção, correção e controle do histórico atribuído ao jogador
        sinal: medio
        prazo: 2036
        confianca: media
        efeitos:
          - id: e2.2.1
            ordem: 3
            efeito: Alguns ecossistemas experimentam portabilidade parcial de persona ou memória entre produtos compatíveis
            sinal: fraco
            prazo: 2056
            confianca: baixa
```

A roda não consegue representar toda a divergência entre as skills. Em especial, nove futurizações admitem algum caminho para portabilidade de memória, enquanto jcsc trata essa possibilidade como wildcard por exigir coordenação entre concorrentes. Da mesma forma, apenas jgpt modela explicitamente um vale de desilusão antes da adoção mais ampla. Os horizontes também são checkpoints comuns da rodada, não datas em que os efeitos necessariamente se concretizam.

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — regulação de companion chatbots.** Leis estaduais dos EUA em 2026 voltadas a sistemas de companhia conversacional não são legislação específica para jogos, mas podem antecipar requisitos de transparência, retenção e segurança que atinjam NPCs com memória se as categorias regulatórias se aproximarem.

**Sinal fraco 2 — personagens que persistem como relação.** A combinação de memória, voz e continuidade cria uma categoria de experiência diferente de um NPC puramente roteirizado. Ainda não há evidência suficiente para afirmar que isso se tornará eixo central de design, mas o sinal pode alterar a forma de avaliar um jogo.

**Wildcard — incidente grave de segurança de agente.** Um exploit público em um jogo relevante, envolvendo NPCs capazes de agir dentro do mundo, poderia provocar recuo de publishers ou acelerar exigências de certificação muito antes de 2046. O impacto seria alto e a probabilidade é baixa-média.

**Wildcard — luto do servidor.** Se um jogo com personagens memoriosos criar forte vínculo entre jogadores e NPCs e depois encerrar seus servidores, a reação pode gerar pressão por políticas de preservação ou exportação. O efeito depende de vínculo afetivo e escala de adoção que ainda não estão demonstrados.

**Wildcard — restrição de plataforma a LLM externo.** Uma plataforma pode limitar chamadas externas de modelos antes que inferência local barata esteja madura o suficiente para substituí-las. Isso poderia aumentar custos e atrasar a adoção justamente quando a tecnologia parecer tecnicamente pronta.

## 7. Contra o próprio mapa

**Extrapolação linear.** O efeito de memória como diferencial de marketing em 2031 é o candidato mais evidente. A memória já é uma direção observável em 2026, então transformar sua expansão em disrupção futura pode simplesmente prolongar uma tendência existente. A confiança é alta apenas para a existência da capacidade e média para sua transformação em diferencial relevante de mercado.

**Velocidade de adoção.** O mapa assume que capacidades demonstradas em projetos experimentais chegam a produção de forma gradual. Isso pode ser otimista. O precedente de NPCs generativos ainda é pequeno e concentrado em experimentos, fornecedores especializados e demonstrações; não há precedente comparável que prove adoção ampla em jogos AAA na velocidade sugerida pelos checkpoints.

**Disrupção que pode não acontecer.** A ação validada pelo runtime pode permanecer uma capacidade de nicho. Publishers podem concluir que a imprevisibilidade, o custo de inferência, a dificuldade de QA e o risco de marca não compensam o ganho de agência. Nesse caso, a roda de certificação, reorganização de autoria e parte dos efeitos de trabalho perde seu principal mecanismo causal.

**Contrassinal econômico.** Se o custo por interação continuar alto ou se modelos locais não atingirem desempenho suficiente, o mundo vivo pode ser reservado a produtos com orçamento e infraestrutura muito elevados. Isso contradiz a expectativa de adoção ampla por estúdios médios e indies.

**Viés do mapa.** O próprio tema favorece imaginar ruptura porque NPCs generativos são um caso particularmente visível de aplicação de IA em interação. Além disso, as 11 skills receberam o mesmo conjunto de sinais iniciais; portanto, o consenso entre elas é robusto como comparação de métodos, mas não deve ser tratado como 11 amostras independentes do futuro.

**Principal ponto de discordância sobre a viabilidade.** O desenvolvimento pode não ocorrer da forma prevista porque autonomia de ação cria um problema de responsabilidade muito maior do que geração de diálogo. Um NPC que fala de maneira inesperada pode ser corrigido como conteúdo; um NPC que altera uma missão, entrega um item, interfere na economia ou toma uma ação não prevista pode gerar bugs, exploits e custos de suporte. Por isso, é plausível que a indústria mantenha durante décadas uma arquitetura híbrida, com modelos generativos dentro de um espaço de ações estreito, em vez de caminhar para NPCs amplamente autônomos.

## 8. O que a máquina errou

Um erro específico foi detectado em múltiplas execuções: algumas skills inicialmente trataram Ubisoft Teammates como se fosse um produto lançado, mas a verificação cruzada corrigiu seu status para **experimento/teste fechado**. bvga, jcsc e yrv registraram essa autocorreção explicitamente em seus documentos. Isso é importante porque transformar um experimento em lançamento faria a evidência de adoção parecer muito mais forte do que realmente é.

Outro ponto de desconfiança foi a convergência excessiva em algumas contagens e efeitos. O mapa agregado não trata números de 11/11 como probabilidade estatística, porque todas as skills receberam o mesmo contexto inicial e parte das mesmas evidências. A convergência é útil para identificar hipóteses resistentes a critérios diferentes, mas não elimina o viés de entrada compartilhada.

## 9. Três cenários para 2056

**Provável.** Em 2056, ação validada por runtime e memória persistente coexistem como camadas opcionais sobre arquiteturas tradicionais na maioria dos jogos de porte médio e grande que adotarem a tecnologia, mas autonomia ampla continua restrita. QA adversarial e ferramentas de auditoria são práticas comuns em produtos com agentes. Não existe padrão universal de portabilidade de memória; quando ela existe, tende a ser parcial e proprietária. O trabalho criativo foi reorganizado de maneira desigual, com maior peso em curadoria e direção em alguns estúdios.

**Desejável.** Em 2056, sistemas de agentes são suficientemente auditáveis para permitir agência relevante sem transformar cada atualização em um risco de certificação. Memória persistente é transparente ao jogador, pode ser corrigida e possui políticas claras de retenção. Algum nível de portabilidade existe entre ecossistemas compatíveis, e roteiristas, dubladores e designers participaram da definição das regras de uso dos agentes e da remuneração associada. Para chegar a esse cenário, seria necessário investir simultaneamente em segurança, ferramentas de debugging, padrões de interoperabilidade e negociação de direitos.

**Indesejável.** Em 2056, um ou mais incidentes graves de segurança e responsabilidade provocaram recuo dos publishers, mantendo NPCs generativos principalmente como interfaces conversacionais ou como agentes extremamente limitados. Jogos com memória dependem de poucos fornecedores, e o encerramento de serviços gera perda de histórico sem mecanismos consistentes de preservação. Um excesso de regulação ou uma regulação mal calibrada pode reforçar esse cenário ao tratar qualquer NPC memorioso como uma categoria de companion chatbot de alto risco.

## 10. O experimento

**O que é.** Construir uma pequena experiência com dois NPCs equivalentes: um usa diálogo generativo, mas não possui ações reais fora do roteiro; o outro usa diálogo generativo conectado a um conjunto limitado de ações validadas pelo runtime e registra memória entre sessões. O participante não deve ser informado inicialmente de qual versão está usando.

**Pergunta sobre o futuro.** Jogadores distinguem uma conversa mais fluida de uma agência real? E a memória persistente muda a percepção de continuidade mais do que a simples qualidade da conversa?

**Tecnologia emergente usada.** O experimento usa um modelo generativo conectado a ferramentas/ações do ambiente e uma camada de memória persistente. Isso é diferente de uma árvore de diálogo ou FSM madura porque a resposta não precisa ser previamente enumerada e o modelo pode selecionar uma ação dentro do espaço permitido pelo runtime.

**O que a turma fará.** Cada participante joga as duas condições, registra quais comportamentos atribuiu ao NPC e responde a perguntas sobre agência, coerência, surpresa, continuidade e confiança. Em seguida, os resultados são comparados com os logs reais de ações do runtime.

**Resultado que mudaria a hipótese.** Se a maioria dos participantes não conseguir distinguir diálogo generativo sem agência de um agente com ações reais, ou se a memória não alterar significativamente a percepção de continuidade, a tese de que essas capacidades formam uma ruptura perceptível para o jogador deverá ser rebaixada.

## 11. Fontes

1. [NVIDIA — NVIDIA Redefines Game AI With ACE Autonomous Game Characters](https://www.nvidia.com/en-us/geforce/news/nvidia-ace-autonomous-ai-companions-pubg-naraka-bladepoint/) — sustenta a existência e evolução de personagens autônomos e componentes de ACE. **Confiabilidade: alta**, fonte primária do fornecedor.
2. [Convai — How to Make AI NPCs Act on Your Commands in UE5](https://convai.com/blog/how-to-make-ai-npcs-act-on-your-commands-in-unreal-engine-5-with-convai) — sustenta a integração entre NPC generativo e ações no runtime do Unreal Engine. **Alta**, documentação do próprio fornecedor.
3. [Ubisoft — Ubisoft Reveals Teammates](https://news.ubisoft.com/en-us/article/3mWlITIuWuu0MoVuR6o8ps/ubisoft-reveals-teammates-an-ai-experiment-to-change-the-game) — sustenta o status experimental de Teammates e sua proposta de personagens generativos. **Alta**, fonte primária.
4. [Variety — Ubisoft Sets Generative-AI Game Teammates From Neo NPC Developers](https://variety.com/2025/gaming/news/ubisoft-generative-ai-game-teammates-neo-npc-developers-1236588038/) — sustenta informações sobre o desenvolvimento e a equipe ligada ao projeto. **Alta**, veículo especializado, embora secundário.
5. [OpenGameAgent — GitHub](https://github.com/EricSun0218/OpenGameAgent) — sustenta a existência de um runtime/projeto de agentes para jogos. **Média**, repositório técnico sem revisão por pares.
6. [80.lv — Thistle Gulch](https://80.lv/articles/ai-simulation-platform-where-characters-make-their-own-decisions) — sustenta a descrição da simulação multiagente e personagens que tomam decisões. **Média**, cobertura especializada.
7. [Jam & Tea Studios — Making Retail Mage](https://www.jamandtea.studio/news/making-retail-mage-a-new-approach-to-ai-in-games) — sustenta a natureza híbrida de Retail Mage. **Alta**, fonte do próprio estúdio sobre seu produto.
8. [80.lv — A GPT-3 Powered Feature in Modbox Lets A Player Talk To NPCs](https://80.lv/articles/a-gpt-3-powered-feature-in-modbox-lets-a-player-talk-to-npcs/) — sustenta o antecedente de uso de GPT-3 em interação com NPCs. **Alta para o fato histórico**, embora seja fonte secundária.
9. [arXiv — Player Perceptions of Generative AI in Games](https://arxiv.org/pdf/2608.11539) — sustenta aspectos de percepção de IA generativa em jogos. **Alta para o estudo citado**, com a ressalva de ser preprint.
10. [arXiv — Fixed-Persona SLMs with Modular Memory](https://arxiv.org/pdf/2511.10277) — sustenta pesquisa sobre persona fixa e memória modular em modelos menores. **Alta para a existência do trabalho**, com a ressalva de ser preprint.
11. [Orrick — 2026 State Chatbot Laws](https://www.orrick.com/en/Insights/2026/04/2026-State-Chatbot-Laws-Key-Provisions-and-Regulatory-Trends) — sustenta o sinal regulatório sobre companion chatbots em estados dos EUA. **Alta**, análise jurídica de escritório especializado.
12. [Multistate — State AI Companion Chatbot Laws](https://www.multistate.ai/updates/vol-105-state-ai-companion-chatbot-laws) — sustenta o levantamento de legislação estadual relacionada a companion chatbots. **Média-alta**, fonte secundária especializada.
13. [Metaverse Law — AI Companion Chatbot Regulations](https://www.metaverselaw.com/ai-companion-chatbot-regulations/) — sustenta contexto regulatório adjacente. **Média**, análise jurídica secundária.
14. [Medium — I watched a playtester talk an AI merchant out of a quest key](https://medium.com/@ashutosh_veriprajna/i-watched-a-playtester-talk-an-ai-merchant-out-of-a-quest-key-with-one-sentence-3b58e39bd1ef) — sustenta um relato prático sobre comportamento não previsto de um NPC generativo. **Média-baixa**, relato individual, útil como sinal e não como prova geral.
15. [JAGACO — The Controversy of Using Generative AI in Game Development](https://jagaco.com/2025/07/31/the-controversy-of-using-generative-ai-in-game-development/) — sustenta contexto de controvérsias e adoção de IA generativa no desenvolvimento de jogos. **Média**, fonte secundária.
16. [itch.io — Eastshore](https://shawnbuilds.itch.io/eastshore) — sustenta a existência do projeto/protótipo Eastshore citado nas futurizações. **Média**, página do próprio projeto.
17. [Startup Intros — Inworld AI](https://startupintros.com/orgs/inworld-ai) — sustenta informações secundárias sobre a empresa Inworld AI. **Média-baixa**, fonte agregadora e não primária.
18. [XboxPlay — NVIDIA ACE in 2026](https://xboxplay.games/ai-in-gaming/nvidia-ace-in-2026-how-ai-is-creating-npcs-that-remember-your-conversations-71562) — sustenta a cobertura secundária sobre memória persistente em ACE. **Média**, fonte jornalística secundária.

## 12. Anexo — o levantamento bruto

### 12.1 Registro do agregado das 11 skills

As 11 execuções foram: `alpa2`, `bvga`, `hfm`, `jcsc`, `jgpt`, `jlsn`, `kvv`, `meap`, `mjbo`, `vafs` e `yrv`. Todas trabalharam com o mesmo tema e checkpoints 2031, 2036, 2041, 2046 e 2056. O agregado identificou duas disrupções-raiz presentes nas 11 execuções: ação de NPC autorizada/validada pelo runtime e memória persistente entre sessões. Seis skills pararam nessas duas; quatro aceitaram uma terceira disrupção, mas sem consenso sobre sua formulação.

### 12.2 Concordâncias registradas

- **C01:** produto real, mas ainda nicho, não default da indústria — 11/11.
- **C02:** diálogo ramificado, FSM e behavior tree são maduros, não disrupções-raiz — 11/11.
- **C03:** ação de NPC autorizada pelo runtime é disrupção-raiz — 11/11.
- **C04:** memória persistente entre sessões é a disrupção com sinal mais forte e unânime — 11/11.
- **C05:** prompt injection via roleplay é risco técnico não resolvido; 10/11 citam a cifra de 89,6% do estudo utilizado.
- **C06:** Ubisoft Teammates é experimento em teste fechado, não lançamento — 11/11 após autocorreções cruzadas.
- **C07:** encerramento de servidor com memória de NPC é ponto de ruptura relevante — 9/11.
- **C08:** regulação de companion chatbot em estados dos EUA é sinal fraco relevante e adjacente a jogos — 11/11.

### 12.3 Discordâncias registradas

**D01 — O que já existe hoje é disrupção plena ou melhoria?** Algumas skills tratam ACE/Convai como disrupção em curso; outras separam conversação madura/emergente da camada realmente disruptiva de ação validada. A diferença é conceitual, não factual.

**D02 — Portabilidade de memória.** Nove skills admitem algum caminho futuro; jcsc rejeita tratá-la como efeito esperado e prefere mantê-la como wildcard, porque depende de coordenação entre concorrentes.

**D03 — Vale de desilusão.** jgpt projeta explicitamente um vale de desilusão entre 2031 e 2033; as outras dez não modelam uma desaceleração tão explícita.

**D04 — Trabalho criativo.** mjbo e vafs tratam a reorganização de roteiristas/dubladores como eixo mais central; as demais abordam o tema com menor ênfase.

**D05 — Vínculo afetivo.** Algumas skills tratam memória e vínculo jogador-NPC como risco de produto e governança; outras tratam a mesma capacidade como feature de experiência, com menos cautela.

### 12.4 Wildcards levantados

- **Luto do servidor:** encerramento de um mundo com personagens memoriosos gera pressão por preservação ou portabilidade.
- **Incidente de segurança de agente:** exploit público acelera certificação ou provoca recuo.
- **Celebridade sem autor:** personagem emergente ganha identidade própria e gera disputa de autoria.
- **Negociação sindical antecipada:** dubladores/roteiristas negociam antes da adoção em larga escala.
- **Restrição de plataforma a LLM externo:** limita chamadas de modelos externos antes de inferência local barata estar pronta.
- **Disputa de autoria de personagem emergente:** fãs ou ex-funcionários reivindicam participação na personalidade aprendida.

### 12.5 Wildcard com leituras incompatíveis

O barateamento de modelos pequenos e inferência local aparece com duas leituras. Uma skill o trata como acelerador positivo para estúdios pequenos e mundos vivos; outra o relaciona a um risco de arquitetura caso plataformas restrinjam modelos externos antes de a inferência local estar pronta. O mesmo gatilho pode, portanto, acelerar ou atrasar a adoção dependendo da ordem dos eventos.

### 12.6 Contra o mapa agregado

1. O consenso pode conter um artefato do contexto compartilhado, pois todas as skills receberam os mesmos sinais iniciais.
2. Memória como diferencial em 2031 pode ser extrapolação linear do que já ocorre em 2026.
3. Publishers podem recuar para diálogo sem ação real por aversão a risco de marca.
4. O impacto trabalhista pode estar subdimensionado pela maioria das skills.
5. Os checkpoints foram impostos externamente e podem induzir efeitos de 3ª ordem mais distantes do que cada skill escolheria individualmente.

### 12.7 Evidências que falsificariam a tese central

Se até 2031 nenhum estúdio de porte médio tiver adotado runtime de agente em produção, para além de demonstrações e experiências muito pequenas, e se memória persistente não aparecer como diferencial real de produto, as duas disrupções-raiz devem ser rebaixadas de hipótese forte para sinal persistente. Da mesma forma, um incidente grave de segurança que provoque recuo prolongado seria evidência contra uma trajetória de expansão contínua.

### 12.8 Experimentos levantados pelas skills

1. Sessão cega de agência — variações de alpa2, jlsn, meap e hfm.
2. Log causal auditável versus agente opaco — bvga e jcsc.
3. Corte de produção: agente versus escrita/dublagem manual — vafs e mjbo.
4. Painel de percepção de mundo assíncrono — kvv.
5. Comparação H2− versus H2+ — yrv.
6. Réplica de pico de expectativa — jgpt.

### 12.9 Observação sobre as rodadas originais

Os documentos individuais preservados em `resultados/skills/` contêm as rodas completas de cada uma das 11 skills, incluindo efeitos cortados, contestações, fontes e experimentos específicos. O presente documento consolida essas saídas para a entrega no formato da disciplina; a pasta original deve ser mantida junto ao projeto para preservar o levantamento bruto completo.

### 12.10 Inventário dos documentos individuais

- `resultado_alpa2_tema7.md`
- `resultado_bvga_tema7.md`
- `resultado_hfm_tema7.md`
- `resultado_jcsc_tema7.md`
- `resultado_jgpt_tema7.md`
- `resultado_jlsn_tema7.md`
- `resultado_kvv_tema7.md`
- `resultado_meap_tema7.md`
- `resultado_mjbo_tema7.md`
- `resultado_vafs_tema7.md`
- `resultado_yrv_tema7.md`
- `mapa_agregado_tema7.md`
- `manifesto_tema7.json`
