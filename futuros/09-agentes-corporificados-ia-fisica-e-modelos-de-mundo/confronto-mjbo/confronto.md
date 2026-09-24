---
tema: "Agentes corporificados, IA física e modelos de mundo"
slug: agentes-corporificados-ia-fisica-e-modelos-de-mundo
aluno_login: mjbo
professor_login: grec
data: 2026-09-24
horizonte: 2035
mapa_independente: ../../rodadas/giordano/09-agentes-corporificados-ia-fisica-e-modelos-de-mundo/tendencia-agentes-corporificados-ia-fisica-e-modelos-de-mundo.md
efeitos_em_comum: 10
efeitos_so_do_aluno: 8
efeitos_so_do_professor: 53
raizes_recusadas: 0
---

# Confronto — Agentes corporificados, IA física e modelos de mundo

**Os três documentos.** O mapa do aluno (`mjbo`, horizonte 2035, 3 raízes, 18 efeitos: 4 + 7 + 7).
O mapa independente do professor, feito às cegas pela skill `futurizacao-giordano` em 11/09
(horizonte 2031, 4 raízes, 64 efeitos: 17 + 27 + 20). O mapa do `futures-wheel` original, de
12/09 (horizonte 2031, 179 efeitos, ids no formato `e1_NN`, `e2_XNN`, `e3_TN_NN`), usado aqui só
como terceira voz, na seção 1 e na 1b.

**Como a contagem foi feita.** Um efeito está "em comum" quando os dois mapas nomeiam o mesmo
ator e o mesmo mecanismo, mesmo que com sentido diferente; quando o sentido diverge, a tabela diz.
Os 18 efeitos do aluno se dividem em 10 em comum e 8 só dele. Os 10 em comum correspondem a 11
efeitos do professor, porque `e4.1` do aluno cobre `e8` e `e8.2`; sobram 53 só do professor.
Dois pontos pesam em todo o confronto: os horizontes diferem (2035 contra 2031) e o público também
("comunidade científica de robótica e IA, e mercado automotivo" contra "quem projeta mídia e
interação"). Boa parte da seção 3 é diferença de recorte, não lacuna (ver seção 7).

---

## 1. O que os dois mapas têm em comum

★ = o efeito aparece também no futures-wheel (**convergência tripla**).

| Efeito (frase do aluno) | Aluno | Professor | Ordem (A/P) | O que a convergência independente sugere |
|---|---|---|---|---|
| "O treino de agentes corporificados passa a depender majoritariamente de dados sintéticos gerados, e não de coleta física proprietária" | `e1` | `e12` — "Dado sintético gerado por modelo de mundo é vendido como substituto do dado humano antes de ser equivalente, porque é a única forma de fechar a conta de custo" | 1/1 | Os dois mapas preveem a adoção. O professor acrescenta "antes de ser equivalente", a mesma ressalva que o aluno levanta na própria seção 7. A convergência está na adoção, não na qualidade. ★ `e1_01` — "O aprendizado do corpo robótico sai do mundo real e passa a acontecer dentro de máquinas". |
| "Novos entrantes constroem robôs competitivos sem frota própria, licenciando dados e modelos de mundo de terceiros" | `e1.1` | `e13.1` — "A vantagem se concentra em quem já tem frota em campo gerando trajetória de operação, e o entrante sem frota compra dado em vez de coletar" | 2/2 | Mesmo ator (o entrante sem frota) e mesmo mecanismo (comprar em vez de coletar), com leitura oposta: para o aluno, isso nivela a disputa; para o professor, a vantagem continua com quem tem frota. O sentido diverge, e a pergunta 2 da seção 6 parte daqui. |
| "A curadoria e validação de dados sintéticos vira a disciplina de engenharia crítica…" | `e1.2` | `e2.1` — "Surge uma camada de verificação de física entre quem gera o mundo e quem treina o agente, medindo o gerador contra medida real" | 2/2 | Os três mapas põem o gargalo na validação do que foi gerado. A diferença é de lugar: dentro do pipeline (aluno) ou entre fornecedor e comprador (professor). ★ `e1_11` — "Avaliar deixa de ser uma etapa e vira infraestrutura cara, centralizada e disputada". |
| "Surge uma função de auditoria independente de dados de treino físico, exigida por seguradoras antes de cobrir frotas autônomas" | `e1.2.1` | `e12.1.1` — "Comprador de robô passa a auditar a proveniência do dado de treino e não apenas o desempenho entregue" | 3/3 | Mesma auditoria, exigida por atores diferentes (seguradora ou comprador). O futures-wheel dá razão ao ator do aluno. ★ `e2_C04` — "A apólice inventa a caderneta do robô", e `e2_A19` — "a telemetria já está sendo empacotada como produto de seguro". |
| "A validação em simulação passa a ser aceita como evidência parcial em processos de homologação de sistemas autônomos" | `e2` | `e6.1` — "Comprador industrial passa a exigir teste em simulador diferente daquele em que a política foi treinada" | 1/2 | Convergência **parcial**: nos dois, a simulação vira evidência. O professor exige que o simulador de teste seja independente do de treino, condição que o `e2` do aluno não põe. ★ `e2_A16` — "A pergunta 'quem certifica que o mundo sintético é representativo' já tem resposta em rascunho". |
| "A responsabilidade por falha se desloca parcialmente do fabricante do robô para quem forneceu o modelo de mundo em que ele treinou" | `e2.1.1` | `e5.1.1` — "O primeiro litígio grave por acidente com robô sob política de terceiro se decide sobre acesso ao dado de treino, não sobre defeito de peça" | 3/3 | É a convergência mais forte do confronto. Os três mapas chegam também ao **mesmo wildcard**: o acidente cuja causa está no mundo de treino (wildcard do aluno na seção 6, W1 do professor, `w1` do futures-wheel). ★ `e1_15` — "a falha pode estar na física alucinada pelo modelo de mundo"; `e2_A22` — "a perícia precisa poder reconstruir o ambiente de treino". |
| "O mesmo modelo de controle opera robôs de fabricantes distintos com ajuste fino mínimo" | `e3` | `e5` — "Fabricante de robô passa a vender corpo compatível com política de terceiro em vez de vender comportamento próprio" | 1/1 | Mesma ruptura, vista do modelo (aluno) ou do fabricante (professor). Os dois dão confiança média e prazo entre 2028 e 2029. |
| "O setor se reorganiza em duas camadas econômicas separadas, corpo e inteligência, como aconteceu entre hardware e sistema operacional no smartphone" | `e3.1` | `e5.1` — "O contrato de fornecimento separa quem responde pelo corpo de quem responde pela política, e o integrador fica no meio sem controlar nenhum dos dois" | 2/2 | Os três mapas veem a separação em camadas. O futures-wheel contesta a analogia do aluno: ★ `e1_17` — "O corpo fica barato e o cérebro fica caro — e o preço final pode não cair como a narrativa promete", e registra que "a curva do humanoide não é a curva do smartphone". |
| "A verificabilidade vira o principal obstáculo de homologação, já que não há módulo isolável ao qual atribuir uma falha" | `e4.1` | `e8` — "A regulação de máquina alcança o comportamento aprendido antes de o comportamento aprendido ficar confiável"; `e8.2` — "…o certificado passa a valer mais que a demonstração em vídeo" | 2/1 e 2 | Os três mapas põem a certificação de comportamento aprendido como gargalo, cada um por um mecanismo: módulo não isolável (aluno), regulamento UE 2023/1230 (professor), ausência de verificação formal para transformers (futures-wheel). ★ `e1_13` — "Não há rota de verificação formal para a classe de modelo que está entrando nos corpos, e a garantia migra para uma camada de runtime". |
| "Instruir um veículo ou robô em linguagem natural se torna interface padrão de operação, e não recurso auxiliar" | `e4.2` | `e7` — "O comando em linguagem natural para robô é vendido antes de funcionar, porque os modelos hoje decidem por posição e ignoram a instrução" | 2/1 | Mesmo objeto, **sentido oposto**. O professor prevê o recuo (`e7.1`: "volta a desenhar affordance física e gesto em vez de comando falado"). O futures-wheel acompanha o aluno: ★ `e1_24` — "A instrução em linguagem natural vira a interface operacional do espaço de trabalho". É a divergência que mais rende em aula (pergunta 4). |

**Convergência só entre o aluno e o futures-wheel** (o professor não tem o efeito na roda):

| Aluno | Futures-wheel | Nota |
|---|---|---|
| `e1.1.1` — "Poucos provedores de mundo concentram o insumo de treino…" | `e1_28` — "A pilha inteira do aprendizado corporificado se concentra num fornecedor, e com ela um viés de simulação que ninguém detecta por comparação" | No professor, a concentração aparece só como suposição escondida (7.5, item 1: "o mapa inteiro vira um mapa de duopólio"), fora da roda. |
| `e2.1` — "Cenários de teste sintéticos padronizados viram requisito regulatório…" | `e3_T1_01` — "A escada de admissibilidade não cria um corpo institucional novo: ela entra por um encaixe que já estava pronto" | O futures-wheel dá ao efeito o ator que falta no do aluno: a acreditação de certificadora (ver seção 2). |

### 1b. O que só o futures-wheel viu

O aluno e o professor não têm estes efeitos. Os que mais tocam o recorte do aluno:

- `e1_10` — "O mundo gerado é sistematicamente OTIMISTA — não apenas impreciso, enviesado a favor do
  sucesso" (MiraBench: 92,0% de conclusão de tarefa, 12,8% de falhas preservadas). É a hipótese
  que o experimento do aluno (seção 10) poderia medir: uma política treinada em mundo gerado nunca
  viu o robô errar.
- `e1_05` — "A autonomia corporificada que chega ao público é, em boa parte, trabalho humano
  reorganizado geograficamente" (cerca de 70 agentes remotos da Waymo para 3.000 carros). Para o
  público automotivo do aluno, o operador remoto é um ator que falta à roda.
- `e1_27` — "Automatizar o espaço de trabalho aumenta a lesão no corpo humano que continua ali". É
  o único efeito dos três mapas sobre quem perde no chão de fábrica.
- `e1_34` — "O aprendizado corporificado adquire uma pegada computacional que ninguém está
  contabilizando". A categoria ecológica do STEEP ficou vazia nos outros dois mapas.
- `e1_18` — "A forma do corpo se revela escolha de design, não destino — e o corpo que já funciona
  em escala não é humanoide". Isso relativiza a seção 3 do aluno, centrada em humanoides.
- `e1_31` — "A corporificação brasileira em escala já existe, mas está no campo e no subsolo" (mais
  de 35 mil drones agrícolas, 72 equipamentos autônomos da Vale). O mapa do aluno é global e não
  tem nota sobre o Brasil.

---

## 2. Só no mapa do aluno

Oito efeitos. Uma observação vale para todos antes do exame um a um: **a prosa da seção 5 do
aluno não escreve o mecanismo efeito a efeito**, e nenhum `prazo` da roda vem com classe de
referência declarada. As duas classes que aparecem no documento (a rampa do Model 3, na seção 3,
e a simulação aeroespacial levando "décadas", na seção 7) servem para contestar o `e1`, não para
datar nenhum efeito. Por isso o teste de prazo falha nos oito, e não repito o motivo em cada linha.

| id | Frase | Mecanismo | Especificidade | Prazo com referência | Confiança calibrada | Motivo |
|---|---|---|---|---|---|---|
| `e1.1.1` | "Poucos provedores de mundo concentram o insumo de treino de boa parte da indústria robótica, replicando a concentração já vista na nuvem de IA" | falha | falha parcial | falha | passa (baixa) | A analogia com a nuvem descreve o resultado, não o mecanismo. No teste da causa solta, a concentração ocorreria também sem modelo de mundo, pela integração vertical silício–simulador–modelo que o próprio aluno aponta no cenário indesejável. |
| `e2.1` | "Cenários de teste sintéticos padronizados viram requisito regulatório, análogo aos protocolos de crash test" | falha | falha | falha | passa (baixa) | É o anti-padrão "reguladores criam categoria nova" sem regulador nomeado (UNECE WP.29? NHTSA? um organismo de acreditação, como no `e3_T1_01` do futures-wheel?). O crash test poderia servir de classe de referência para o prazo, mas não foi usado assim. |
| `e3.1.1` | "Fabricantes de corpo disputam margem por integração vertical, recomprando ou desenvolvendo camada de inteligência própria" | passa (na frase) | passa | falha | a rever | É a única retroação da raiz 2, e isso conta a favor. O `sinal: fraco` pode estar baixo: há fabricantes de corpo que já desenvolvem a inteligência em casa (ver seção 7, item a verificar). Se já ocorre, o efeito não é neto de `e3.1` e sim paralelo a ele, porque ordem não é data. |
| `e3.2` | "Montadoras adotam a mesma camada de inteligência para robôs de fábrica e para funções de condução, unificando equipes antes separadas" | falha | passa | falha | falha (média) | A seção 7 do próprio aluno restringe a portabilidade a "dentro de uma classe", sem transferência "para classes com dinâmica radicalmente distinta". Braço manipulador e veículo são classes distintas. Por esse argumento, a confiança deveria cair. |
| `e3.2.1` | "A formação em engenharia automotiva se reorganiza em torno de especificação e verificação de políticas aprendidas, em vez de projeto de subsistemas de controle" | falha | falha parcial | falha | passa (baixa) | O efeito escapa em parte do anti-padrão "cursos reorganizam o currículo", porque nomeia o conteúdo novo. Faltam o curso e o ator (uma acreditadora, uma universidade, uma montadora que contrata). No teste da causa solta, `e4.1` produziria o mesmo efeito sem passar por `e3.2`: o pai certo pode ser `e4.1`. |
| `e4` | "A pilha modular de percepção, predição e planejamento é substituída por um modelo único em parte dos sistemas de navegação embarcados" | passa (seção 4) | passa | falha | falha | O mecanismo está na seção 4 (fim do acúmulo de erro entre módulos, otimização conjunta). "Em parte dos sistemas" não diz quanto, o que torna o prazo de 2030 difícil de falsear. O ponto mais importante: o documento classifica a raiz como literatura acadêmica ("praticamente tudo […] é paper", seção 12), e por §2.3 da skill isso exige confiança baixa em toda a cadeia. Se, ao contrário, já houver VLA em carro de série (seção 4), o sinal e o prazo estão atrasados. Nos dois casos, `media` fica sem apoio. |
| `e4.1.1` | "Consolida-se uma engenharia de interpretabilidade aplicada a sistemas físicos, com ferramentas próprias e papel formal no processo de certificação" | falha | passa | falha | passa (baixa) | O mecanismo implícito é "a necessidade cria a solução", e necessidade não é mecanismo. Os outros dois mapas chegam ao mesmo obstáculo e propõem outra saída: medir o comportamento por fora (bancada de perturbação, `e6` do professor; supervisor de runtime, `e1_13` do futures-wheel), sem abrir o modelo. |
| `e4.2.1` | "A ambiguidade linguística vira categoria formal de risco em sistemas embarcados, com normas próprias para comandos mal interpretados" | falha | falha | falha | passa (baixa) | É o anti-padrão da norma sem normalizador. Nomear a família em que isso caberia (a ISO 21448/SOTIF, que já trata de mau uso previsível) faria o efeito passar. O efeito também depende de `e4.2`, que o `e7` do professor contesta: se o modelo ignora a instrução, o risco é o comando não ser lido, e não a ambiguidade. |

---

## 3. Só no mapa do professor

Cinquenta e três efeitos. "Recorte" = cabe no público do professor (mídia e interação) e não no do
aluno; "buraco" = cabe no público e no recorte do aluno, e a ausência pesa.

**R1 — o ambiente de treino passa a ser gerado (14 efeitos, 13 só do professor)**

| id | Frase | Buraco ou recorte? | O que o aluno ganharia ou perderia ao incluir |
|---|---|---|---|
| `e1` | "Estúdios adotam mundo gerado como pré-visualização exportável e não como entrega final" | recorte | Nada para o público dele; é o lado "jogo" da raiz. |
| `e1.1` | "A etapa de blockout de nível sai do cronograma de produção…" | recorte | — |
| `e1.1.1` | "O portfólio de entrada em level design passa a mostrar critério de espaço…" | recorte | — |
| `e1.2` | "Captura de referência no local […] vira insumo padrão de produção…" | recorte, com ponte | Ganharia o elo entre captura de lugar e dado de treino de navegação. |
| `e1.2.1` | "Locação física vira ativo licenciável…" | recorte, com ponte | É a versão de mídia do "acesso a lugares" (`e1_02` do futures-wheel). |
| `e2` | "Laboratórios de robótica compram mundo gerado como aumento de dado e mantêm o simulador autorado para o que precisa de parâmetro" | **buraco** | É a alternativa direta ao `e1` dele: aumento, e não substituição. Ganharia o contraponto que a seção 7 dele procura sem encontrar (gravidade estimada de 0,37 a 8,93 m/s², WorldBench). |
| `e2.1.1` | "Ambiente de treino passa a circular com ficha de física declarada…" | buraco | Daria artefato concreto ao `e1.2.1` e ao `e2.1` dele. |
| `e2.2` | "O erro de simulação […] passa a ser especificado em contrato…" | buraco | Daria o passo intermediário que falta entre o `e2.1` e o `e2.1.1` dele. |
| `e3` | "O custo de computação por minuto de mundo gerado freia o uso em execução…" | buraco parcial | É a retroação de custo que a raiz 1 dele não tem: nenhum efeito de `e1` freia a própria disrupção. |
| `e3.1` | "Estúdios adotam gerar-uma-vez-e-congelar…" | recorte | — |
| `e3.1.1` | "O modelo de mundo termina a década como ferramenta de autoria…" | recorte | — |
| `e4` | "Experiência ao vivo e instalação expositiva adotam mundo gerado antes do jogo comercial…" | recorte | — |
| `e4.1` | "A duração de coerência do modelo vira parâmetro declarado de projeto…" | recorte, com ponte | A coerência no tempo é também o limite de horizonte longo na navegação. |

**R2 — uma política pré-treinada dirige corpos diferentes (21 efeitos, 14 só do professor)**

| id | Frase | Buraco ou recorte? | O que o aluno ganharia ou perderia ao incluir |
|---|---|---|---|
| `e5.2` | "Nasce um mercado de adaptação de corpo, que converte um embodiment novo para o espaço de ação de uma política já treinada" | **buraco** | É a versão mercantil do "dentro de uma classe" da seção 7 dele: se a portabilidade é parcial, alguém vende a tradução. |
| `e5.2.1` | "O prédio entra na lista de corpos a adaptar…" | buraco parcial | Para navegação, o ambiente adaptado à máquina é parte do problema. |
| `e6` | "A bancada de perturbação vira o produto vendável, e medir a degradação passa a valer mais que declarar a taxa de sucesso" | **buraco** | O experimento dele (seção 10) já é uma bancada de perturbação. O mapa não tira o efeito do próprio experimento. |
| `e6.1.1` | "O simulador de teste se separa institucionalmente do simulador de treino…" | buraco | Endureceria o `e2` dele: validação sintética só vale com simulador independente. |
| `e6.2` | "Taxa de sucesso perde valor de comunicação e é substituída por curva de degradação…" | buraco parcial | — |
| `e7.1` | "Quem projeta interação com robô volta a desenhar affordance física e gesto em vez de comando falado" | **buraco** | É o efeito contrário ao `e4.2` dele. Com os dois lado a lado, o `e4.2` vira uma aposta com adversário. |
| `e7.1.1` | "A interface do robô doméstico converge para poucas ações confirmáveis…" | recorte (doméstico) | — |
| `e7.2` | "Pedir confirmação vira padrão de projeto, e a taxa de interrupção do robô entra como métrica de produto" | buraco | É a resposta de projeto ao risco que o `e4.2.1` dele entrega a uma norma. |
| `e8.1` | "Fabricante congela a política no embarque para não reabrir a avaliação de conformidade…" | **buraco** | O `e3` dele supõe política atualizável entre corpos. O congelamento por conformidade é o freio que falta à raiz 2. |
| `e8.1.1` | "Aprender em campo vira privilégio de frota própria…" | buraco | Aproxima-se do `e3.1.1` dele (integração vertical) por outro mecanismo. |
| `e9` | "O humanoide entra no mercado como mídia antes de entrar como força de trabalho" | recorte, com ponte | A seção 3 dele registra o dado ("primarily for learning, not productive tasks"), mas não o destino que o professor tira dele. |
| `e9.1` | "Quem projeta experiência de marca contrata corpo robótico como contrata performer…" | recorte | — |
| `e9.1.1` | "A gramática de movimento do humanoide comercial converge para o que fotografa bem…" | recorte | — |
| `e9.2` | "A distância entre o vídeo de demonstração e a máquina entregue vira problema declarado…" | buraco parcial | A seção 8 dele (erros 2 e 3) documenta esse fenômeno nas fontes, sem transformá-lo em efeito. |

(`e5`, `e5.1`, `e5.1.1`, `e6.1`, `e7`, `e8` e `e8.2` estão na seção 1.)

**R3 — a experiência física vira mercadoria (14 efeitos, 11 só do professor)**

| id | Frase | Buraco ou recorte? | O que o aluno ganharia ou perderia ao incluir |
|---|---|---|---|
| `e10` | "Gravar o próprio corpo executando tarefa vira ocupação remunerada em escala global" | **buraco** | É a raiz que o próprio aluno encontrou e não promoveu. O "segundo argumento contra o e1" (seção 7) diz que o robô em campo "é o aparato de coleta", e esta raiz do professor parte exatamente daí. |
| `e10.1` | "A cadeia de dado de robô herda o passivo trabalhista da anotação de dado…" | buraco | Poria na roda alguém que perde, o que falta no mapa dele. |
| `e10.1.1` | "O Brasil entra na cadeia como fornecedor de demonstração…" | recorte (global) | Seria a nota sobre o Brasil, que o recorte global dele não exige. |
| `e10.2` | "Quem projeta interação passa a projetar a sessão de captura…" | recorte | — |
| `e10.2.1` | "Direção de demonstração aparece como função nos estúdios de dado…" | recorte | — |
| `e11` | "O gesto gravado vira ativo com dono…" | buraco parcial | — |
| `e11.1` | "Contrato de captura passa a trazer cláusula de uso derivado…" | recorte | — |
| `e11.1.1` | "Entidade de representação de performer reivindica o gesto de trabalho…" | recorte | — |
| `e12.1` | "A proporção entre sintético e real vira número declarado do produto…" | buraco | Tornaria o `e1` dele mensurável: "majoritariamente" passaria a ser um número publicado. |
| `e13` | "O custo de coletar demonstração não cai como caiu o custo de computação, porque o gargalo é tempo de corpo humano em tempo real" | **buraco** | É o mecanismo que falta ao `e1` dele, e dá a razão econômica de a indústria "continuar escolhendo o mundo real". |
| `e13.1.1` | "Robô barato de nicho vira estratégia de coleta e é vendido abaixo do custo…" | buraco | Explicaria a queda de 52% no lucro da Unitree (seção 3 dele) por outra via que não a ineficiência. |

(`e12`, `e12.1.1` e `e13.1` estão na seção 1.)

**R4 — o agente generalista opera qualquer mundo 3D pela tela (15 efeitos, todos só do professor)**

| id | Frase | Buraco ou recorte? |
|---|---|---|
| `e14`, `e14.1`, `e14.1.1`, `e14.2`, `e14.2.1` | "Jogo, simulador e painel de operação viram o mesmo tipo de lugar para a máquina…" e descendentes | recorte |
| `e15`, `e15.1`, `e15.2`, `e15.2.1` | "O agente que joga vira instrumento de teste de jogo…" e descendentes | recorte |
| `e16`, `e16.1`, `e16.1.1` | "Plataforma de jogo bloqueia agente que lê tela…" e descendentes | recorte; `e16.1.1` ("a comparação entre laboratórios perde base comum") tem ponte com a seção 12 dele (benchmarks sem reprodução independente) |
| `e17`, `e17.1`, `e17.1.1` | "A presença de agente numa sessão compartilhada precisa ser declarada…" e descendentes | recorte |

Deixar R4 de fora é escolha coerente com o público dele: o aluno cita SIMA e Genie 3 como
tecnologia, mas o agente que opera pela tela não é objeto de "sistemas embarcados e navegação".
Incluí-la diluiria o mapa sem ganho para quem o lê.

**Balanço da seção.** Os buracos se concentram em dois lugares: a **retroação** (`e2`, `e3`,
`e8.1`, `e13`, todos freios de uma raiz que o aluno também tem) e **quem perde** (`e10`, `e10.1`).
O mapa do aluno tem uma retroação clara (`e3.1.1`) e nenhum efeito sobre trabalhador.

---

## 4. As raízes

Uma observação vale para as três: a seção 4 do aluno responde "o que rompe", "por que agora" e
"o que ainda falta", mas **não declara o estágio de difusão na escala da skill** nem nomeia **quem
bloqueia** (§3.11). O estágio abaixo foi inferido da própria seção 3 dele.

| Raiz do aluno | Rompe o quê | Por que agora | Estágio de difusão | O que falta | Veredito |
|---|---|---|---|---|---|
| **R1** "Modelos de mundo generativos como fonte primária de dados de treino físico" | "a restrição de que aprender a agir no mundo exige coletar dados no mundo" — passa | três pré-condições nomeadas — passa | produto de nicho (Cosmos com pesos abertos, uso em pipeline de GR00T) | validação sim-to-real; curadoria | **raiz**, mas formulada pelo ponto de chegada: "fonte primária" é o efeito `e1`, não a ruptura. A ruptura é o ambiente passar a ser gerado, que é como o professor formula R1 e como o futures-wheel formula a inovação. Convergência tripla na raiz. |
| **R2** "Políticas generalistas que transferem entre corpos diferentes" | "o acoplamento entre hardware e inteligência" — passa | datasets cross-embodiment, flow matching (π0) — passa | produto de nicho, caminhando para adoção precoce em ambiente controlado | transferência fora da bancada; margem de segurança industrial | **raiz**. Converge com a R2 do professor. A restrição "dentro de uma classe" da seção 7 dele é mais precisa que a formulação da seção 4 ("o corpo vira commodity"), e a seção 4 deveria ter sido reescrita por ela. |
| **R3** "Condução e navegação fim-a-fim por modelos visão-linguagem-ação" | "o paradigma modular […] Rompe organograma, não só arquitetura" — passa | fusão com VLMs, safra de 2026 — passa | **em disputa.** O documento o põe em laboratório ("praticamente tudo […] é paper"). Mas a Li Auto anunciou o "VLA Driver" em carro de série (Li i8, agosto de 2025; frota AD Max por OTA 8.0, setembro de 2025), como assistência supervisionada (ver seção 7) | verificabilidade para autonomia sem supervisão | **raiz**, não maduro. Qualquer que seja o estágio, a confiança da cadeia não fecha: se é laboratório, §2.3 manda confiança baixa em toda a cadeia (o `e4` está em média, o `e4.1` em alta); se já é produto de nicho, falta ao mapa o dado mais forte a favor dele. Há ainda um caminho que a roda não tem: o VLA entrou em produção **pela assistência supervisionada**, em que o motorista responde pela falha, e com isso contornou o obstáculo de homologação do `e4.1`. |

**Recusas do aluno.** ROS 2/SLAM, simuladores determinísticos acelerados por GPU e mapeamento HD
foram recusados como maduros, e com o mesmo critério do professor, que recusou os dois primeiros
nos mesmos termos. Enxames de drones foram recusados por escopo, não por maturidade, e o aluno diz
isso. Nenhuma raiz do aluno é tecnologia madura disfarçada: `raizes_recusadas: 0`.

**Raiz ausente.** O aluno não tem raiz equivalente à R3 do professor (dado corporal como
indústria de trabalho), mas o argumento dela aparece na seção 7 dele. Ver seção 5.

---

## 5. A seção 7 dele contra o §6 meu

**O que ele derrubou e eu mantive.**

- O aluno usa a admissão da Tesla ("primarily for learning, not productive tasks") como **argumento
  contra** o `e1`: se o robô em campo está lá para aprender, o dado real não foi substituído. O
  professor tira desse mesmo fato **uma raiz inteira** (R3) e mantém `e10` e `e13` com
  confiança alta. É o mesmo dado em duas leituras: para o aluno, ele enfraquece o dado
  sintético; para o professor, cria um mercado de dado corporal. As duas leituras são
  compatíveis, e o mapa do aluno só registra a primeira.
- Ele cortou "Desaparecimento do emprego industrial repetitivo" por falta de dado, e o professor
  cortou "O mercado de trabalho físico se reorganiza" pelo anti-padrão. É um corte convergente.
  A diferença está no que ficou: o professor substituiu o efeito por `e10.1.1` (país, insumo e
  posição na cadeia nomeados); o aluno não pôs nada no lugar, e a roda dele ficou sem trabalhador.
- Ele cortou "Robôs humanoides domésticos generalizados até 2035". O professor mantém o doméstico
  só como interface (`e7.1.1`), não como adoção. Os dois recusam a mesma promessa.

**O que eu derrubei e ele manteve.**

- O §6 do professor removeu "Escolas de design de jogos reorganizam o currículo…" e "Reguladores
  criam categoria jurídica para agente corporificado" pelo anti-padrão. O aluno mantém três
  efeitos da mesma família: `e3.2.1` (formação), `e2.1` (requisito regulatório) e `e4.2.1`
  (normas próprias). Ver seção 2.
- O professor rebaixou `e5` de alta para média e empurrou o prazo de 2027 para 2028 com classe de
  referência declarada (motor de jogo licenciado, cerca de 7 anos). O aluno mantém o `e3`
  equivalente em 2029, com média, sem classe declarada. Os valores quase coincidem; o que falta ao
  aluno é a justificativa escrita.

**O que ele argumentou e não aplicou.** A seção 7 dele é a parte mais forte do documento. Tem
cinco objeções concretas: `e3.1` como analogia, a velocidade do `e1` sem precedente, R3 como a
raiz mais frágil, o viés tecno-otimista declarado e a portabilidade "dentro de uma classe". Mas
**nenhuma delas alterou o bloco da roda**, e o aluno diz que fez isso de propósito ("o valor está
em ver a projeção original e a objeção lado a lado"). O §6 da skill pede outra coisa: um registro
de alterações com antes e depois, e pelo menos um efeito rebaixado ou removido por raiz. No
documento, a única alteração registrada é de antes de fechar a roda (`e1`: alta → média). Nas
raízes 2 e 3, nada foi rebaixado. O resultado é que o YAML diz `e1` em 2029 enquanto a prosa diz
que esse prazo "provavelmente está otimista em anos".

**O que o verificador viu e o que não vê.** O verificador marca `RESULTADO: ok`: 18/18 campos,
12/12 títulos, contagens batendo com o frontmatter, nenhum prazo além de 2035 e confiança caindo
com a ordem (ordem 1: 0/4/0; ordem 2: 1/5/1; ordem 3: 0/0/7). Tudo isso procede. Mas o verificador
lê só o YAML e o frontmatter, e três coisas lhe escapam:

1. **A distância entre a prosa e o YAML** no `e1`, descrita acima.
2. **A única confiança alta de segunda ordem é filha de um pai com confiança média**: `e4.1` (alta)
   sob `e4` (média). A justificativa do aluno ("já é observável hoje […] é um obstáculo presente")
   é um argumento de `sinal`, que ele já marcou como forte, e não de `confianca`. A skill separa as
   duas coisas (§3.4 e §3.7). Como `e4.1` só existe se `e4` acontecer, a confiança do filho não
   deveria passar a do pai.
3. **O estágio de R3 contra a confiança da cadeia**, que o verificador não tem como cruzar (seção 4).

---

## 6. Cinco perguntas para a aula

1. **(ancorada em `e4.1`)** O `e4.1` tem confiança alta porque o obstáculo "já é observável hoje",
   e o pai dele, `e4`, tem confiança média. Um efeito pode ser mais confiável que o efeito de que
   ele depende? O que distingue "já estou vendo isso" (sinal) de "acredito que isso vai
   acontecer" (confiança)?
2. **(ancorada em `e1.1`)** O `e1.1` diz que o entrante sem frota fica competitivo comprando dado.
   Um mapa independente diz que o mesmo entrante compra dado e **continua em desvantagem** diante
   de quem tem frota. Que número, publicado em 2027 ou 2028, mostraria qual das duas leituras está
   certa?
3. **(ancorada em `e3.1`)** A separação entre corpo e inteligência é comparada ao smartphone. Se a
   lista de materiais do humanoide **sobe** até 2030, em vez de cair, a analogia ainda vale? E o
   `e3.1.1` (fabricante recomprando a inteligência) é neto do `e3.1` ou já está acontecendo em
   paralelo a ele?
4. **(ancorada em `e4.2`)** O `e4.2` põe a linguagem natural como interface padrão. Há medidas em
   que o modelo ignora a instrução e decide pela posição dos objetos na cena. Que teste simples,
   feito em sala, mostraria se o robô leu o comando ou só reconheceu a cena?
5. **(ancorada em `e2.1.1`)** Os três mapas chegaram sozinhos ao mesmo acidente: a causa está no
   mundo em que o robô treinou. Para a responsabilidade chegar ao provedor do modelo de mundo, o
   que precisaria ter sido guardado (versão do modelo, semente, cenas)? E quem, na cadeia, tem
   incentivo para não guardar?

---

## 7. O que este confronto não cobre

- **Horizontes e públicos diferentes.** O mapa do professor foi feito às cegas em 11/09 com os
  padrões da skill (2031, "quem projeta mídia e interação"), e não com o briefing do aluno (2035,
  robótica e mercado automotivo). O passo 2 do modo adversarial pede o mesmo briefing, e esta
  rodada não o cumpriu. Consequências: prazos comparados entre horizontes diferentes; a ausência de
  condução autônoma no mapa do professor (sem `e4` equivalente) é efeito do recorte dele, não
  julgamento sobre a raiz 3 do aluno; e parte do que a seção 3 marca como "recorte" seria "buraco"
  num mapa com o briefing do aluno.
- **Li Auto / VLA Driver.** O dado da seção 4 vem do resumo de uma busca, e não de página aberta:
  o comunicado de relações com investidores
  (`https://ir.lixiang.com/news-releases/news-release-details/li-auto-inc-august-2025-delivery-update/`)
  não abriu dentro do tempo limite. A afirmação de que é assistência supervisionada, e não
  autonomia, também vem da busca. Precisa ser conferida antes de ir para a aula.
- **Fabricantes de corpo com inteligência própria** (`e3.1.1`, seção 2): a afirmação de que isso
  já ocorre é memória do professor, sem fonte aberta nesta rodada. Fica marcada como "a verificar",
  não como fato.
- **Futures-wheel.** Foi lido pela síntese e, para os ids de 2ª e 3ª ordem citados (`e2_A16`,
  `e2_A19`, `e2_A22`, `e2_C04`, `e3_T1_01`), por busca no mapa completo, não por leitura integral
  dos 179 efeitos. Pode haver convergências triplas que não foram marcadas.
- **Fontes do aluno.** Nenhuma das 23 fontes foi reaberta. O confronto aceita a seção 3 dele como
  está.
- **Onde o professor pode estar errado.** O §6 do mapa do professor declara viés próprio de
  "apreço por auditoria" (7.6). As convergências em `e1.2` e `e1.2.1` podem estar infladas por
  isso: são justamente os efeitos em que o mapa do professor põe mais peso. O mapa do professor
  também declara "desconfiança de demonstração", e isso pesa contra o `e4.2` do aluno. A
  divergência em linguagem natural (seção 1, última linha) é aposta dos dois lados, não correção
  de um pelo outro.
- **Critério de correspondência.** "Em comum" exige mesmo ator e mesmo mecanismo. `e2` ↔ `e6.1` é
  o caso mais frouxo e está marcado como parcial; com critério mais estrito, as contagens seriam
  9 / 9 / 54.
