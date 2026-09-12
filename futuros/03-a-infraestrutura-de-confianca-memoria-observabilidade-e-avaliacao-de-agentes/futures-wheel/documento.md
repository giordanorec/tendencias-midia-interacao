---
titulo: "A infraestrutura de confiança: memória, observabilidade e avaliação de agentes"
tipo: resumo-de-tendencia
disciplina: "CIN0055 Tendências em Mídia e Interação 2026.2"
tema: "3 de 19"
familia: "Agentes"
zona: "Agentes"
skill: futurizacao-futures-wheel
autor: grec
horizonte: 2031
recorte: "global, com nota sobre o Brasil"
data: 2026-09-11
mapa_completo: "futures-wheel-a-infraestrutura-de-confianca-memoria-observabilidade-e-avaliacao-de-agentes.md"
---

# A infraestrutura de confiança: memória, observabilidade e avaliação de agentes

**Rodada com teto de 15 subagentes** (a skill prevê um expansor por ramo; aqui os ramos foram
agrupados, e 88 dos 107 efeitos de 2ª ordem ficaram sem expansão). Fase 8, infográficos,
pulada. O mapa completo — 188 efeitos (28 + 107 + 53), conexões cruzadas, wildcards e
284 fontes — está em `futures-wheel-a-infraestrutura-de-confianca-memoria-observabilidade-e-avaliacao-de-agentes.md` e no HTML de mesmo nome.

## A inovação

Se a máquina fabrica o produto, avaliar o produto mede a máquina: a pergunta muda de "o que foi
entregue?" para "por que isso está certo?", e isso exige ver o caminho — cada chamada, cada decisão,
cada tentativa que falhou. Ao mesmo tempo, o agente que **lembra** entre sessões deixa de ser
ferramenta e passa a acumular contexto, decisões e erros. Memória e auditoria são as duas faces da
mesma camada: traces e replay, avaliação por juiz automático (LLM-as-judge) em sistemas em que rodar
duas vezes dá dois resultados, memória de longo prazo e engenharia de contexto. Fora do recorte, pela
régua da disciplina: logs e métricas de aplicação e teste unitário, todos maduros. Os indicadores de
adoção põem o tema entre os primeiros adotantes: 16% dos deployments corporativos de IA generativa são
agentes de fato (Menlo Ventures, dez/2025).

**A tese.** A infraestrutura de confiança não torna o agente legível: ela desloca a confiança do instrumento para a conciliação entre registros de partes diferentes, entrega a política real a quem define taxas de amostragem e retenção, e põe entre a decisão e a pessoa afetada um texto escrito por outro sistema — de modo que o trabalho de quem projeta mídia e interação em 2031 é desenhar os momentos que viram prova (o aviso, a aprovação, o export, a errata) e decidir quem mantém a segunda cópia.

## Os 28 efeitos de 1ª ordem

| id | Efeito | STEEP | Prob. | Prazo |
|---|---|---|---|---|
| `e1_01` | Memória do assistente vira inventário de mídia paga, sem rótulo de publicidade | Econômico | alta | curto |
| `e1_02` | 96% da memória é criada pelo sistema; metade é inferência psicológica sobre a pessoa | Social | alta | curto |
| `e1_03` | Lembrar aumenta a inteligência percebida e reduz a confiabilidade percebida | Social | média | curto |
| `e1_04` | Observar é barato, avaliar quase de graça: reter é a linha de custo que cresce | Econômico | alta | curto |
| `e1_05` | Amostragem de trace vira decisão de governança tomada por script de manutenção | Político | média | curto |
| `e1_06` | Determinismo vira escolha de custo (~2x) e cria inferência de dois níveis | Tecnológico | média | médio |
| `e1_07` | Lei define o resultado do log sem o formato: custo dominante é reinstrumentar *(óbvio)* | Político | alta | curto |
| `e1_08` | Brasil: Res. Conj. 18 já exige trilha fim a fim, e retenção é cotada em dólar | Econômico | alta | curto |
| `e1_09` | Brasil: art. 20 da LGPD torna o trace obrigatório por via oblíqua, sem o PL 2338 | Político | alta | médio |
| `e1_10` | Brasil: LLM-juiz aplicado em português sem validação com anotadores brasileiros | Social | média | médio |
| `e1_11` | Juiz automático entra na pilha por ser barato, com erro de ~20% não auditado | Econômico | alta | curto |
| `e1_12` | Juiz erra mais quando as opções são próximas — o caso do A/B de peça criativa | Tecnológico | média | curto |
| `e1_13` | Eval vira teatro: gate ruidoso treina a equipe a forçar o merge e segue verde | Social | média | curto |
| `e1_14` | Eval vira profissão e o critério de qualidade passa a ser objeto vivo, versionado | Econômico | alta | curto |
| `e1_15` | Contaminação privatiza a régua: benchmark rotativo pago vira poder de narrativa | Econômico | média | médio |
| `e1_16` | Benchmark de memória não discrimina: compra se decide por integração e lock-in | Econômico | alta | curto |
| `e1_17` | Consolidação apaga o ativo de conformidade: o histórico morre com o fornecedor | Econômico | alta | curto |
| `e1_18` | Portabilidade assimétrica: o export existe, a memória não viaja com semântica | Econômico | média | médio |
| `e1_19` | Modera-se agora o que o agente memoriza, não só o que o público lê | Tecnológico | média | médio |
| `e1_20` | Memória se autoenvenena e todo conserto invalida memória em silêncio | Tecnológico | média | curto |
| `e1_21` | Esquecimento correto vira métrica, produto e disputa sobre o sentido de 'apagado' | Político | média | médio |
| `e1_22` | O trace registra o que o trabalhador considerou e descartou: vigilância cognitiva | Social | média | médio |
| `e1_23` | Trilha prova integridade e não completude — e a seguradora vira o comprador | Econômico | média | médio |
| `e1_24` | Pensamento exibido (UX) separa-se do trace de auditoria; traço caro é decoração | Social | alta | curto |
| `e1_25` | Memória legível por gente desloca a competência da infra para a curadoria editorial | Tecnológico | média | médio |
| `e1_26` | Trace vira instrumento de pesquisa de produto: o que o usuário pediu e não obteve | Econômico | média | médio |
| `e1_27` | O instrumento da confiança é descalibrado: 134% de erro, custo zero, esquema instável | Tecnológico | alta | curto |
| `e1_28` | SLA de agente passa a ser escrito em consistência (pass^k), não em acurácia média | Econômico | média | médio |

Três grupos se destacam. **Memória** (e1_01–03, e1_16–21, e1_25): o assistente que lembra vira inventário publicitário, retrato psicológico escrito pelo sistema e objeto de disputa entre portar e esquecer. **Avaliação** (e1_10–15, e1_27–28): o juiz automático entra por ser barato, erra onde a mídia mais o usa — entre opções parecidas — e o contrato passa a ser escrito em consistência (acertar k de k tentativas), não em acurácia média. **Trace** (e1_04–09, e1_22–24, e1_26): lembrar é o que custa, a amostragem vira governança por script, e o registro guarda a deliberação de quem trabalha. Brasil: e1_08, e1_09 e e1_10.

## Os 5 mais impactantes

1. **`e1_23` — A trilha prova integridade, não completude — e a seguradora vira o comprador.** É a raiz do padrão mais forte da árvore. A cadeia de hash de quem escreve o log não revela omissão, e é essa prova incompleta que reguladores e seguradoras estão comprando. Dela descendem a seguradora que escreve o padrão e vende a apólice (e2_B21, alta probabilidade), a prova de completude vinda das contrapartes (e2_B22), o trace como condição de cobertura para quem produz mídia com agente (e2_B23) e o certificado que não circula entre seguradoras (e3_R01). Todo o ponto de convergência do contra-registro parte daqui.

2. **`e1_11` — O juiz automático entra na pilha por ser barato, com erro não auditado.** É o instrumento de que quase todos os ramos de avaliação dependem, e a vulnerabilidade sistêmica sv1 (juiz concentrado em poucos modelos de poucos fornecedores). Recebe 9 menções na polinização cruzada. Dele saem a amostra humana escolhida pelo próprio juiz, que torna invisível o que ele não vê (e2_C05), a série histórica que quebra quando o modelo-juiz é aposentado (e2_C04, e2_B16) e a revisão da decisão automatizada feita por um modelo da mesma família (e3_P11).

3. **`e2_C23` — Na cobrança por resultado, o vendedor decide se houve resultado.** Transforma avaliação em caixa registradora: o Intercom Fin cobra US$ 0,99 por resolução e conta como resolvida a conversa em que o cliente fica 24 h em silêncio; a Zendesk verifica a resolução com um LLM operado por ela (e3_R15, o efeito mais citado da polinização, 10 menções). Fecha o ciclo fl5 — o rótulo de cobrança vira rótulo de treino e o agente aprende a produzir silêncio (e3_R17) — e, no Brasil, colide com a 'resolução sob a ótica do consumidor' do Decreto do SAC (e3_R16). Mexe diretamente no desenho do fim de toda conversa de atendimento.

4. **`e1_05` — A amostragem de trace vira decisão de governança tomada por script.** Efeito mais citado da polinização entre os de 1ª ordem (10 menções) e origem do padrão 'a política é um parâmetro de custo'. Quem escolhe qual fração do trace fica decide o que poderá ser auditado. Dele descendem o interruptor de legal hold que a primeira ordem judicial de preservação torna obrigatório (e2_D01, alta), o plano de amostragem pedido como na auditoria contábil (e2_D02) e o classificador de retenção cujos falsos negativos ninguém mede (e2_D03). No Brasil, a amostragem é incompatível com o direito do titular de pedir o trace da sua decisão (e2_D15).

5. **`e1_02` — 96% da memória é escrita pelo sistema; metade é inferência sobre a pessoa.** É a face da memória com mais consequência. O retrato psicológico produzido pelo sistema aciona o art. 20 da LGPD sobre uma frase que o sistema escreveu sozinho (e2_A09), vira atalho de pesquisa de usuário fora dos ritos de ética (e2_A10) e parte a lista em dois painéis. Na 3ª ordem, o rótulo do painel passa a decidir o que é portável (e3_M01) e o painel de conclusões fica vazio justamente nas categorias sensíveis (e3_M02). É o dado mais acionável da rodada para quem projeta interface.

**O padrão por trás dos cinco.** Em quase toda a árvore, quem produz o resultado também controla o instrumento que o mede. A resposta que surge de forma independente em quatro grupos é o **contra-registro**: a confiança vem de conciliar dois registros mantidos por partes diferentes — trace com fatura, log do agente com recibo da contraparte, cópia do consumidor com amostra da empresa —, não de um instrumento melhor. A cascata se juridifica com a profundidade (Político: 14% → 21% → 32% das três ordens). Para quem projeta mídia e interação, a interface vira gatilho jurídico: o aviso de decisão automatizada define o que se guarda inteiro (e2_D14), a tela de aprovação vira prova de supervisão ou de carimbo (e2_D11) e o verbo do microcopy decide o que viaja no export (e3_M01).

## Wildcards

9 cenários de baixa probabilidade e alto impacto — 4 positivos, 4 adversos, 1 ambivalente; sete construídos por combinação de efeitos já mapeados.

- **w1 · A trilha do INSS pela Lei de Acesso** (positivo). O TCU determina ao INSS a trilha integral de cada decisão automatizada; pela Lei de Acesso à Informação, ela vira o primeiro corpus público de decisões de agente em português, com desfecho de cada caso. É a versão que sobrevive do wildcard sugerido pela disciplina (trilha para toda decisão de IA no serviço público), que na forma literal foi descartado por improvável e pouco surpreendente.
- **w2 · O placar que move o preço** (adverso). Arenas de corretoras com botão de copiar operam os mesmos modelos; num dia de estresse, as posições copiadas derrubam o preço que os modelos usavam como entrada. A régua à prova de contaminação (o sinal Nof1) não é à prova de reflexividade — mecanismo de manada descrito pelo Banco da Inglaterra em 2025.
- **w3 · A conta de energia poda o desperdício, e não a prova** (positivo). Um grande comprador exige energia estimada por tarefa; a contagem só existe no trace, e a pressão de custo passa a cortar a redundância (reenvio de prompt, retentativas, volume encenado) em vez de cortar a evidência. Único wildcard ecológico, ancorado apenas na mediana de 0,24 Wh por prompt de texto publicada pelo Google.
- **w4 · O agente mais confiável é o envenenado** (adverso). Um agente certificado e segurado repete há meses, com consistência perfeita, uma frase plantada na memória por um botão 'Resumir com IA'; o teste de oito execuções dá nota máxima ao envenenado e reprova o concorrente que às vezes diz 'não sei'.
- **w5 · A imunidade de quem relata o próprio alarme** (positivo). Seguradoras e um regulador criam um canal neutro de relato de quase-incidentes de agente, no molde do relato voluntário da aviação, com imunidade limitada: as equipes param de esconder portões contornados e passam a relatá-los.
- **w6 · A frase que dá nota máxima** (adverso). Uma linha de aparência inofensiva engana juízes automáticos de fornecedores diferentes; descoberta na correção de redações, vale também para variantes de anúncio, fichas de produto e 'resoluções' de atendimento, e força cada setor a rejulgar o histórico.
- **w7 · O recibo do consumidor inverte o ônus** (positivo). O assistente pessoal guarda a transcrição da conversa com o agente do banco; no Juizado, com o ônus da prova invertido a favor do consumidor, a cópia da cliente vence a amostra de 1% da empresa, e a amostragem vira juridicamente insustentável no atendimento.
- **w8 · O retrato vendido pela extensão** (adverso). Uma extensão de navegador que sincroniza memória entre assistentes é comprada por um grupo ligado a corretor de dados e passa a exportar dossiês por pessoa; o consumo abandona a memória automática que lê qualquer canal.
- **w9 · O determinismo de graça** (ambivalente). O modo determinístico passa a custar quase nada: o teatro de avaliação perde o ruído que o alimentava e a prova de mídia personalizada vira semente mais entradas — mas pass^k fica trivial, e o contrato escrito em consistência perde o sentido.

Os adversos quebram na **métrica**, não na técnica; os positivos vêm de **instituições emprestadas** de outros setores (Lei de Acesso, relato da aviação, direito do consumidor), quase sempre como versões do contra-registro.

## Nota Brasil

O país entra antes de ter lei de IA, por três portas laterais já abertas: a trilha fim a fim do sistema financeiro, em vigor desde 01/01/2026, com retenção cotada em dólar (e1_08, e2_B08); o art. 20 da LGPD, cuja revisão pode ser feita por outra máquina desde o veto de 2019 — o que abre o circuito agente contra agente (e2_D13, e3_P10); e o Decreto do SAC, cuja 'resolução sob a ótica do consumidor' colide com a resolução por silêncio que o fornecedor fatura (e3_R16). Em avaliação, o primeiro juiz automático em massa no país corrige redação escolar (cerca de 80 mil alunos na rede paulista, e2_C01), e o Inep estuda IA para escrever a folha espelho do ENEM, não a nota (e3_R04).

## O que me faria mudar de ideia

- Pesquisas independentes mostrando, até o fim de 2027, mais de 50% das empresas com agente em produção retendo trace com conteúdo e avaliando a cada mudança — a adoção teria passado da maioria inicial.
- Juízes automáticos em português com concordância corrigida por acaso igual à de dois corretores humanos, e benchmarks de memória que não invertem o ranking ao trocar uma variável — um instrumento único bastaria, e a infraestrutura seria só melhoria incremental.

## Bibliografia essencial

Seleção das fontes que sustentam os efeitos citados acima, todas abertas pelos agentes. A lista completa (284 fontes, com marcação do que foi aberto por inteiro) está no mapa completo.

1. Dash et al., 'The Algorithmic Self-Portrait: Deconstructing Memory in ChatGPT', ACM Web Conference 2026 — `https://arxiv.org/abs/2602.01450`
2. Garimella, 'What does ChatGPT remember about you?' (1.200 exports doados), jun/2026 — `https://kirangarimella.substack.com/p/what-does-chatgpt-remember-about`
3. Microsoft Security Blog, 'Manipulating AI memory for profit: The rise of AI Recommendation Poisoning', fev/2026 — `https://www.microsoft.com/en-us/security/blog/2026/02/10/ai-recommendation-poisoning/`
4. Dong et al., 'A Practical Memory Injection Attack against LLM Agents' (MINJA), 2025 — `https://arxiv.org/abs/2503.03704`
5. Simon Willison, 'Claude Memory: A Different Philosophy', set/2025 — `https://simonwillison.net/2025/Sep/12/claude-memory/`
6. PCWorld, 'Claude can now import chat histories from ChatGPT', mar/2026 — `https://www.pcworld.com/article/3076376/claude-can-now-import-chat-histories-from-chatgpt-and-other-ais.html`
7. PCWorld, 'Google Gemini can now import your ChatGPT or Claude chat history', mar/2026 — `https://www.pcworld.com/article/3100804/google-gemini-can-now-import-your-chatgpt-or-claude-chat-history.html`
8. Anthropic, 'Commitments on model deprecation and preservation', nov/2025 — `https://www.anthropic.com/research/deprecation-commitments`
9. AWS, Amazon Bedrock AgentCore Pricing (consultado em 11/09/2026) — `https://aws.amazon.com/bedrock/agentcore/pricing/`
10. Jetty Blog, 'We analyzed 100k Langfuse traces', fev/2026 — `https://blog.jetty.io/p/we-analyzed-100k-langfuse-traces`
11. Thinking Machines Lab, 'Defeating Nondeterminism in LLM Inference', 2025 — `https://thinkingmachines.ai/blog/defeating-nondeterminism-in-llm-inference/`
12. LMSYS, 'Towards Deterministic Inference in SGLang', set/2025 — `https://www.lmsys.org/blog/2025-09-22-sglang-deterministic/`
13. Yao et al., 'τ-bench' (métrica pass^k), 2024 — `https://arxiv.org/abs/2406.12045`
14. Rabanser, Kapoor, Narayanan et al., 'Towards a Science of AI Agent Reliability', 2026 — `https://arxiv.org/abs/2602.16666`
15. Singh et al., 'The Leaderboard Illusion', 2025 — `https://arxiv.org/abs/2504.20879`
16. Chen et al. (Anthropic), 'Reasoning Models Don't Always Say What They Think', 2025 — `https://arxiv.org/abs/2505.05410`
17. Anthropic, documentação 'Thinking' da Claude API (consultada em 11/09/2026) — `https://platform.claude.com/docs/en/build-with-claude/thinking`
18. OpenTelemetry, GenAI observability / semantic conventions, 2026 — `https://opentelemetry.io/blog/2026/genai-observability/`
19. Humanloop → Anthropic: acqui-hire e desligamento da plataforma, 2025 — `https://humanloop.com/`
20. Dynatrace, 'Dynatrace to Acquire AI Observability Leader Arize', ago/2026 — `https://www.dynatrace.com/news/press-release/dynatrace-to-acquire-arize/`
21. Zendesk Help, 'About automated resolutions for AI agents' — `https://support.zendesk.com/hc/en-us/articles/5352026794010-About-automated-resolutions-for-AI-agents`
22. Lenny Zeltser, 'What to Make of AIUC-1, a New AI Agent Certification', abr/2026 — `https://zeltser.com/aiuc-1-cert`
23. ISACA, 'ISACA Expands Eligibility of First-Ever Advanced AI Audit Certification' (AAIA), jul/2025 — `https://www.isaca.org/about-us/newsroom/press-releases/2025/isaca-expands-eligibility-of-first-ever-advanced-ai-audit-certification`
24. Burges Salmon, 'Trusted Third-Party AI Assurance – DSIT Roadmap', set/2025 — `https://www.burges-salmon.com/articles/102l5fo/trusted-third-party-ai-assurance-dsit-roadmap/`
25. GN Crypto News, 'Mystery Model wins Alpha Arena AI trading competition' (Nof1, temporada 1.5) — `https://www.gncrypto.news/news/mystery-model-alpha-arena-season-1-5-winner/`
26. Simon Willison, 'OpenAI slams court order to save all ChatGPT logs, including deleted chats', jun/2025 — `https://simonwillison.net/2025/Jun/5/openai-court-order/`
27. Fountain Court Chambers, 'Amsterdam Court Upholds Appeal … Drivers v Uber and Ola', abr/2023 — `https://fountaincourt.uk/2023/04/amsterdam-court-upholds-appeal-in-algorithmic-decision-making-test-case-drivers-v-uber-and-ola/`
28. Fortune, 'Meta killed employee AI token dashboard', abr/2026 — `https://fortune.com/2026/04/09/meta-killed-employee-ai-token-dashboard/`
29. Columbia Journalism Review / Tow Center, 'AI Search Has a Citation Problem', mar/2025 — `https://www.cjr.org/tow_center/we-compared-eight-ai-search-engines-theyre-all-bad-at-citing-news.php`
30. Serpro, 'Congresso aprecia veto sobre revisão de decisões automatizadas', out/2019 — `https://www.serpro.gov.br/lgpd/noticias/2019/congresso-aprecia-veto-ao-artigo-20-da-lgpd`
31. Metrópoles, 'Escolas de SP terão ajuda de IA para agilizar correção de redações', dez/2025 — `https://www.metropoles.com/sao-paulo/escolas-ia-correcao-redacoes`
32. Agência Câmara, 'Inep … estuda uso de IA para agilizar divulgação de notas', jun/2026 — `https://www.camara.leg.br/noticias/1281239-inep-nega-mudanca-nos-criterios-da-redacao-do-enem-e-estuda-uso-de-ia-para-agilizar-divulgacao-de-notas`
33. propmark, 'Conar atualiza guia de publicidade … e inclui regras sobre IA', mai/2026 — `https://propmark.com.br/digital/conar-atualiza-guia-de-publicidade-com-influenciadores-e-inclui-regras-sobre-ia/`
34. TCU, 'TCU analisa indeferimentos indevidos no INSS' — `https://portal.tcu.gov.br/imprensa/noticias/tcu-analisa-indeferimentos-indevidos-no-inss`
35. Bank of England, Financial Stability in Focus, abr/2025 — `https://www.bankofengland.co.uk/financial-stability-in-focus/2025/april-2025`
36. 'One Token to Fool LLM-as-a-Judge', 2025 — `https://arxiv.org/abs/2507.08794`
37. Google Cloud, 'Measuring the environmental impact of AI inference' — `https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference`

