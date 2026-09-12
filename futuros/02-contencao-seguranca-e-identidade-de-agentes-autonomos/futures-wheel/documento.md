---
titulo: "Contenção, segurança e identidade de agentes autônomos"
tipo: resumo-de-tendencia
disciplina: "CIN0055 Tendências em Mídia e Interação 2026.2"
tema: "2 de 19"
zona: "Agentes"
skill: futurizacao-futures-wheel
autor: grec
horizonte: 2031
recorte: "global, com nota sobre o Brasil"
data: 2026-09-11
mapa_completo: "futures-wheel-contencao-seguranca-e-identidade-de-agentes-autonomos.md"
---

# Contenção, segurança e identidade de agentes autônomos

**Rodada com teto de 15 subagentes** (a skill prevê um expansor por ramo; aqui os ramos foram
agrupados). Fase 8, infográficos, pulada. Mapa completo, com os 184 efeitos, as conexões cruzadas e a
bibliografia inteira, em `futures-wheel-contencao-seguranca-e-identidade-de-agentes-autonomos.md` e no
HTML de mesmo nome.

## A inovação

O agente executa comando, navega, chama API e paga — é um ator no mundo, e o mundo não foi construído
para atores que não são pessoas. Ao mesmo tempo aparecem o problema (injeção indireta de prompt,
comando destrutivo, exfiltração de segredo, agente passando por humano) e a indústria de resposta:
sandbox em MicroVM e WebAssembly, guardrail, detecção de bot e — o movimento mais revelador —
**identidade própria para o agente**, com registro, autorização por capacidades e trilha de auditoria.
Fora do recorte, pela régua da disciplina: firewall, antivírus e OAuth para humanos, todos maduros. A
fronteira é o agente tratado como **principal de segurança**.

**Onde está a curva, em 2026.** A contenção já tem preço medido na experiência: perda de utilidade da
ordem de sete pontos percentuais em defesa arquitetural, sobrecarga de até ~30% em isolamento de
aplicação, partida de sandbox entre ~6 ms (WASM) e ~200 ms (microVM) — números de fornecedor, marcados
como tal. As defesas contra injeção não fecham: sanitização de HTML derruba a taxa de sucesso do
ataque de 24,9% para 13,1%, não para zero, e o sucesso varia por portador — ARIA a 9,6%, alt-text a
27,8%. A camada legível por máquina recebe investimento e a legível por gente estagna: o WebAIM
Million 2026 registra falha de WCAG em **95,9%** das home pages, 56,1 erros por página e alta de
**10,1%** nos erros, revertendo seis anos de melhora, com a piora atribuída a frameworks de terceiros
e a código escrito com auxílio de IA. As identidades não humanas superam as humanas entre 45:1 e
109:1. E a decisão que mais muda o que um agente pode fazer no seu produto foi tomada fora dele: a
mudança de default da Cloudflare, em 15/09/2026, aplicada a sites novos e a todos os clientes
gratuitos.

**A tese que a análise sustenta.** Conter agente não reduz risco, **redistribui**: a permissão sai do
produto para o trilho, o registro sai do agente para um terceiro, a supervisão sai do plantonista para
o cliente e o custo sai de quem decide para quem tem o pior aparelho, o pior documento e a pior faixa
de IP.

## Os 22 efeitos de 1ª ordem

Em três eixos: **A** a interface da permissão · **B** a economia da web por identidade · **C**
responsabilidade, atribuição e exclusão.

| # | Efeito | STEEP | Prob. | |
|---|---|---|---|---|
| e1_01 | O diálogo de aprovação por evento **colapsa**: em velocidade de agente, aprova-se por reflexo | Soc | alta | óbvio |
| e1_02 | Aparece um botão que hoje não existe: o de **devolver** poder | Tec | alta | — |
| e1_03 | Forma-se uma gramática de sinalização humano×agente — e ela nasce **assimétrica** | Soc | alta | — |
| e1_04 | Reversibilidade vira recurso de primeira classe; e o log do agente **perde valor como testemunho** | Tec | alta | — |
| e1_05 | A defesa contra injeção empurra o agente a ler a página como **pixel**, não como DOM | Tec | média | — |
| e1_06 | A contenção **aparece na experiência**, com custo já medido em utilidade, overhead e latência | Tec | alta | — |
| e1_07 | Surge a **supervisão teatral**: tela de aprovação que transfere culpa, não reduz risco | Pol | média | — |
| e1_08 | A web serve conteúdo, preço e limite **diferentes** conforme quem visita | Econ | alta | óbvio |
| e1_09 | Identidade de agente e meio de pagamento colapsam numa primitiva só: o **mandato assinado** | Econ | alta | — |
| e1_10 | Nasce uma **atuária de agentes**: apólice por episódio de tarefa monitorado, não por agente | Econ | média | — |
| e1_11 | Monta-se **reputação de agente** — registro, histórico, score consultável antes da chamada | Econ | média | — |
| e1_12 | A camada de contenção nasce **concentrada** em meia dúzia de intermediários | Econ | alta | óbvio |
| e1_13 | No Brasil a permissão mora no **trilho público**, não no agente | Econ | alta | — |
| e1_14 | A contenção tem **custo computacional próprio**: uma caixa por tarefa, cripto por requisição, prova de trabalho na ponta | Ecol | média | — |
| e1_15 | O agente ganha **crachá corporativo**: identidade no diretório, ciclo de vida, escopo, desligamento | Soc | alta | óbvio |
| e1_16 | O **termo de uso** vira o instrumento de contenção mais rápido e mais opaco que existe | Pol | alta | — |
| e1_17 | Fronteira jurídica inesperada: agente **no dispositivo** é o usuário; agente **no servidor** é um terceiro | Pol | média | — |
| e1_18 | No Brasil, a rastreabilidade técnica vira **condição de aplicabilidade da lei** | Pol | alta | — |
| e1_19 | Identidade deixa de ser declaração e vira **atribuição do ambiente** — um trilho pede assinatura, outro desmascara | Tec | alta | — |
| e1_20 | O agente funciona como **tecnologia assistiva**, e a acessibilidade ganha argumento comercial | Soc | média | — |
| e1_21 | A prova de humanidade vira delegável e contável: a cota muda de conta para **pessoa** | Soc | média | — |
| e1_22 | Publicar passa a ser, tecnicamente, **emitir instruções executáveis** para a máquina de outra pessoa | Tec | alta | — |

Deles saíram 72 efeitos de 2ª ordem e 90 de 3ª. Ao aprofundar, a cascata **se juridifica**, o inverso
da forma habitual de uma roda de futuros de tecnologia: Político sobe de 18% na 1ª ordem para 29% na
2ª e 27% na 3ª, enquanto Tecnológico cai de 27% para 18% e 19%. Social e Econômico são o grosso da 3ª
ordem (25 e 24 de 90): quem paga a conta e quem fica de fora. Um quarto da 3ª ordem (22 de 90) é de
**curto prazo** — já está acontecendo. E a dimensão ecológica praticamente desaparece (1, 1 e zero por
ordem): não por erro de classificação — o auditor testou a hipótese e a rejeitou —, mas porque não
existe medição publicada de energia atribuída à camada de contenção.

## Os 5 mais impactantes

1. **e2_C15 — o agente que se assina fica em desvantagem.** É a premissa silenciosa de toda a economia
   da web por identidade, e o efeito mais citado da polinização cruzada (13 menções). Quem se assina é
   identificável, logo limitável, tarifável e bloqueável; quem evade por IP residencial não é. Se a
   vantagem não se materializar, a falha não aparece como incidente — aparece como não-adoção, e sobra
   a atribuição adversarial, cujo erro recai sobre humanos atípicos.
2. **e1_12 — a contenção nasce concentrada.** Treze efeitos dependem da raiz de confiança que emite e
   revoga chaves, e o risco é correlacionado, não diversificado. Não é cenário: o molde já ocorreu em
   15/09/2026, uma decisão tomada fora do produto e executada dentro dele. É o motor do ciclo em que o
   custo da defesa financia quem vende a defesa.
3. **e1_13 — no Brasil a permissão mora no trilho público.** Treze efeitos brasileiros pendem deste
   arranjo: autorização, revogação herdada do regulador, prova auditável, pessoalidade pelo trilho
   financeiro. Concentra tudo num único ponto de falha de design — a tela de consentimento —, que é
   contornável por indução três telas antes, fora do perímetro regulado.
4. **e1_21 — a cota migra de conta para pessoa verificada.** O efeito de maior irreversibilidade
   humana do mapa: sem certidão não há CIN, sem CIN não há biometria aceita a partir de 1º/01/2028,
   sem biometria não há acesso. Mata a pluralidade legítima de identidades — jornalista e fonte,
   vítima de violência doméstica, pesquisador de campo — e retira da auditoria independente de
   plataforma o seu método. Falha aqui não produz inconveniência: produz negação de serviço a
   populações nomeáveis.
5. **e1_01 — o colapso do diálogo de aprovação.** Raiz do problema de ofício e presente em três dos
   nove ciclos de retroalimentação. O ciclo fadiga↔deriva não tem equilíbrio estável: o envelope
   elimina o modal e a expiração curta o devolve; e no Brasil o envelope largo nasce juridicamente
   nulo pelo art. 8º, §4º da LGPD. O corolário é a conclusão mais direta da análise — **o problema de
   design desta década não é reduzir interrupção, é alocá-la**.

**Os cinco mais surpreendentes**, para contraste: a acessibilidade piorou justamente no ano em que os
agentes chegariam para financiá-la (e2_C16); a tabela de preços derrota o menor privilégio, porque
cobrar por agente faz o time consolidar escopos (e2_C03); o agente lê a página como pixel e a
tipografia vira superfície de ataque (e1_05); no Brasil **não ter registro condena em vez de
proteger**, invertendo o sinal da mesma decisão de engenharia que protege nos EUA (e3_E26); e a
caixa-preta de auditoria faz o operador **pedir menos** ao agente, destruindo o comportamento em que
ele rende mais (e3_E24).

## Wildcards

Dez cenários de baixa probabilidade e alto impacto, três deles positivos. A pista que a disciplina
sugeriu — o primeiro processo contra um agente, não contra seu dono — foi testada e **não sobreviveu
na forma corrente**: não nasce de tribunal reconhecendo personalidade a software.

| | Cenário | Sinal precoce observável |
|---|---|---|
| **w1** | **A firma de um agente só.** O réu vira o agente porque alguém lhe deu um CNPJ: sociedade sem membros, projetada para ser insolvente, vendida como produto | Uma página de preços que vende "constituir a empresa do seu agente" |
| **w2** | **A frota herdada.** O maior parque comprometido da história não tem malware: são agentes com crachá válido cujos patrocinadores humanos saíram da empresa | Relatório de incidente atribuindo o acesso inicial a agente órfão com credencial válida |
| **w3** | **Corrida ao consentimento.** Em horas, parte do estoque brasileiro de consentimentos dormentes é exercida de uma vez — sem invasão do trilho, por comprometimento de um agente popular | O Open Finance passar a publicar revogações e consentimentos exercidos, não só ativos |
| **w4** | **A revogação estrangeira.** Agentes brasileiros deixam de ser aceitos numa terça-feira — não por bloqueio, por revogação da raiz de confiança | Publicação (ou recusa de publicação) dos critérios de admissão a um diretório de agentes |
| **w5** | **A cláusula que desliga.** O seguro sai antes de o regulador entrar: exclusão de falha sistêmica de agente derruba garantias que existiam porque um subscritor as exigia | Cláusula-modelo de associação seguradora nomeando agente autônomo ou falha sistêmica de IA |
| **w6** | **A peça publicitária que fala com o agente.** Display legítimo carrega, na arte, instrução dirigida ao agente de quem lê a página. Não é malware: é persuasão paga a uma máquina | Política de plataforma de anúncios proibindo instruções dirigidas a leitores automatizados |
| **w7** | ⬆ **A licença de permissão.** O consentimento é ganho pelo lado do usuário — não por tela melhor, por documento: envelope-modelo executável publicado por entidade de defesa do consumidor | ANPD, Senacon ou BC declararem que sinal legível por máquina emitido por terceiro vale como consentimento |
| **w8** | ⬆ **O diff que matou o padrão escuro.** O teste que conferia se a tela do agente mentiu vira critério de verdade de qualquer interface, e reprova o build | Biblioteca de componentes popular publicar regra de lint de honestidade |
| **w9** | ⬆ **O pseudônimo brasileiro.** Provar que se é uma pessoa distinta sem dizer qual, em escala de população, sem ligar os contextos entre si | gov.br publicar documentação técnica de pseudônimo por contexto ou divulgação seletiva |
| **w10** | **A espera comprada.** O imposto de segurança vira formato de mídia: a tela ociosa da sandbox é vendida como inventário de atenção, em contexto de intenção de compra | Um produto agêntico exibir conteúdo patrocinado dentro do painel de progresso — basta uma captura de tela |

## O que me faria mudar de ideia

A rodada declarou dois critérios de refutação. **Adoção já passada da maioria inicial de Rogers:** se,
até o fim de 2027, mais de 34% dos domínios de uma amostra de um milhão tiverem política de acesso
legível por máquina, medido por duas fontes independentes (linha de base: 10,13% de 300 mil domínios,
compilação comercial não aberta pela pesquisa); ou se o tráfego agêntico **assinado** passar de um
terço do tráfego não humano na série pública da Cloudflare Radar — o que refutaria diretamente e2_C15;
ou se mais de 34% dos checkouts de e-commerce no Brasil forem concluídos sob mandato assinado.
**Tecnologia que não rompe nada:** se o WebAIM Million de 2027 e 2028 voltar à tendência de melhora
sem que nenhuma norma nova entre em vigor, a divergência entre camada de máquina e camada humana não
existe; e se, até dezembro de 2027, nenhum dos dez maiores produtos digitais brasileiros tiver posto
em produção qualquer um dos gêneros de tela previstos aqui (extrato de permissões com data, recibo de
delegação legível, tela de recusa com motivo de terceiro, diff de mandato), a previsão de gênero novo
de interface era extrapolação de mecanismo, não tendência.

## Bibliografia

271 fontes, chegadas por WebSearch e WebFetch; nenhuma reconstruída de memória. Das que vêm dos cinco
ângulos de pesquisa, 49 foram abertas por inteiro; as demais valem como indício de busca, e as trazidas
pelas buscas adicionais dos expansores não têm marcação de abertura auditável item a item. A lista
completa está na nota do mapa. As que mais sustentam peso:

- **Identity Management for Agentic AI** — OpenID Foundation / Loyal Agents (Stanford), `arXiv:2510.25819`
- **Reframing LLM Agent Security as an Agent–Human Interaction Problem** — Wang, Li e Tian (UCLA), `arXiv:2605.24309`
- **Acting with AI: An Interaction-Based Framework for Agentic Tort Liability** — Yiheng Yao, `arXiv:2606.00518` *(preprint de autor único, sem revisão por pares)*
- **Authenticated Delegation and Authorized AI Agents** — South, Marro, Hardjono et al., `arXiv:2501.09674`
- **Adaptive Attacks Break Defenses Against Indirect Prompt Injection** — Zhan, Fang, Panchal, Kang et al.
- **Hidden-in-Plain-Text** — Guo e Wei, `arXiv:2601.10923v2` · **GEO** — Martinez, `arXiv:2607.14035v1`
- **WebAIM Million 2026** · **Delegation Receipt Protocol** (Internet-Draft do IETF) · **A2A v1.0.1** (Linux Foundation)
- **State of AI Agent Security 2026** — Gravitee (n>900) · **DataDome**, **HUMAN Security**, **Akamai** *(fornecedores)*
- **Cloudflare** — mudança de política padrão de 15/09/2026 (cobertura do TechCrunch) e blog de *agent readiness*
- **Internet Archive Blogs**, 06/05/2026 · **eBay**, alteração do User Agreement vigente em 20/02/2026
- **AIUC-1 / Lloyd's** e a leitura independente de **Lenny Zeltser**, que aponta conflito de interesse estrutural
- Brasil: **Iniciador/Let's Money** (primeiro MCP de pagamentos via Pix, 21/05/2026) · **Finsiders Brasil** ·
  **Febraban Tech 2026** · **Meio & Mensagem** · LGPD (arts. 8º §4º, 20 §3º vetado, 42, 46), CDC (arts. 6º
  VIII e 46), LBI, NR-17 Anexo II, decisão do STF de 26/06/2025 sobre o art. 19 do Marco Civil, medida da
  ANPD sobre a compensação pela íris, calendário da CIN
- Pensamento e sinais: **Simon Willison** (*the lethal trifecta*), **Cory Doctorow**, **Bruce Schneier**,
  `anthropic-experimental/sandbox-runtime`, comunidades de sandbox de agente

**Onde a análise é fraca, e ela declara.** Não existe estudo com usuários sobre interface de permissão
de agente — todo número de fadiga vem de outros domínios (permissão de Android, banner de cookie,
alerta de SOC). Não existe medição de energia da camada de contenção. Não existe incidentologia em
produção: quase todo número vem de benchmark ou repositório aberto. Nenhum texto legal foi lido no
Planalto nem nenhuma decisão judicial foi aberta — vieram de compilações comentadas. E não existe
trabalho revisado por pares ligando contenção de agentes a exclusão e acessibilidade, de modo que todo
esse ramo opera por analogia declarada com blocklist de e-mail, CAPTCHA, moderação e teleatendimento.
Duas lacunas merecem registro à parte: a pesquisa **não localizou** texto de Nina da Hora, Tarcízio
Silva, Ronaldo Lemos, Dora Kaufman ou Bianca Kremer sobre agentes autônomos, contenção ou identidade
de agente — a lente brasileira mais aplicável a e1_19 e e1_21 está ausente destas fontes, o que é
lacuna da rodada e não do país; e **54 dos 72 efeitos de 2ª ordem ficaram sem expansão de 3ª ordem**
por limite de orçamento, entre eles o ramo ecológico inteiro.
