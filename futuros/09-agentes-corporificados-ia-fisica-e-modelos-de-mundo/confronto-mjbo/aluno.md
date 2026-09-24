---
tema: Agentes corporificados, IA física e modelos de mundo
slug: agentes-corporificados-ia-fisica-modelos-de-mundo
autor_login: mjbo
zona_de_interesse: Sistemas embarcados e navegação
data: 2026-09-24
horizonte: 2035
publico: Comunidade científica de robótica e IA, e mercado automotivo
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 4
efeitos_ordem_2: 7
efeitos_ordem_3: 7
tecnologias_citadas: [NVIDIA Cosmos, NVIDIA Isaac GR00T, Isaac Sim, Isaac Lab, NVIDIA PhysX, π0, π0.7, Gemini Robotics, SIMA, Genie 3, Marble, V-JEPA 2, OpenDriveVLA, AutoVLA, OpenVLA, Open X-Embodiment, MetaDrive, MuJoCo, ROS 2, cuVSLAM, Waymo Driver, Tesla FSD, Tesla Optimus, Figure 03, Boston Dynamics Atlas, Unitree H2, Apptronik Apollo, Agility Digit]
fontes: 23
confianca: media
experimento: Medidor de gap sim-to-real em navegação com política treinada em mundo gerado
skill_usada: futurizacao-mjbo
publico_ok: false
---

## 1. Resumo

A IA saiu da tela e ganhou corpo, e a técnica que tornou isso possível deixou de ser o
simulador escrito à mão e passou a ser o modelo de mundo: um modelo que gera o ambiente
em vez de apenas renderizá-lo. Este mapa projeta até 2035 o que decorre de três rupturas
que já têm evidência de campo em 2026 — dados de treino físico gerados por modelos de mundo,
políticas generalistas que transferem entre corpos diferentes, e a substituição da pilha
modular de percepção-predição-planejamento por modelos visão-linguagem-ação de ponta a ponta.
O efeito mais provável não é o robô humanoide onipresente, mas uma reorganização do setor em
duas camadas — corpo e inteligência — com o insumo de treino concentrado em poucos provedores
de mundo. O ponto de maior incerteza continua sendo o mesmo que a literatura técnica de 2026
chama de problema dominante não resolvido: o gap entre o que funciona na simulação e o que
funciona no chão de fábrica.

## 2. O tema

Agentes corporificados são sistemas de IA que percebem e agem num ambiente físico — robô,
drone, carro — em vez de operar apenas sobre texto e pixels. IA física é o nome que a
indústria deu ao conjunto de modelos, simuladores e pipelines de dados que sustentam isso.
E modelo de mundo é a peça nova: um modelo generativo que produz ambientes e trajetórias
fisicamente plausíveis, usado como fonte de dados de treino e, cada vez mais, como o próprio
mecanismo de previsão dentro do agente.

Onde isso encosta em mídia e interação: primeiro, porque o simulador — que nasceu de motores
de jogo e de pipelines de renderização — virou infraestrutura crítica de uma indústria que não
é de entretenimento; o mesmo Unreal, o mesmo PhysX, a mesma cadeia gráfica, agora treinando
robôs. Segundo, porque o modelo de mundo borra a fronteira entre gerar mídia e gerar
experiência de treino: a mesma família de técnicas que produz vídeo sintético produz os dados
com que um robô aprende a andar. Terceiro, e mais direto para o recorte de sistemas embarcados
e navegação: a interface entre humano e máquina física passa a ser linguagem natural, não
código de controle — instruir um robô vira um problema de interação, não de programação.

Merece um mapa de futuro em vez de um levantamento de estado da arte porque o estado da arte
aqui muda de trimestre em trimestre e, sozinho, não responde à pergunta que importa: se o
insumo de treino da robótica inteira passa a ser gerado por meia dúzia de modelos de mundo,
o que decorre disso para quem constrói robôs, para quem regula e para quem trabalha ao lado
deles. Essa pergunta é de encadeamento de consequências, e é exatamente o que um levantamento
não faz.

## 3. Onde isso está hoje

**O que já existe e funciona.** Humanoides saíram da fase de demonstração e entraram em
implantação comercial inicial ao longo de 2026. A Figure completou um piloto de onze meses
com o Figure 02 na planta da BMW em Spartanburg, acumulando mais de mil horas de operação
documentadas e contribuindo para a produção de dezenas de milhares de veículos; a BMW
planejou implantação subsequente em Leipzig, marcando a primeira operação europeia de
humanoides em produção. O Digit, da Agility, movimenta contentores em armazéns da GXO e da
Amazon. O Apollo, da Apptronik, é testado pela Mercedes-Benz. A Tesla converteu parte da
fábrica de Fremont para produção do Optimus Gen 3, com unidades operando internamente em
tarefas de manuseio de células, assentamento de conectores e roteamento de cabos.

Do lado da navegação autônoma, a escala é bem maior e mais antiga. A Waymo passou de cerca de
200 mil corridas pagas por semana no início de 2025 para mais de 500 mil por semana no início
de 2026, operando em dez a onze cidades americanas, com expansão de área de serviço para mais
de 1.400 milhas quadradas e primeiras operações internacionais preparadas em Londres e Tóquio.
A Tesla passou a operar sem supervisão em Austin e anunciou expansão para sete áreas
metropolitanas. São duas apostas técnicas opostas — sensores redundantes com mapa HD prévio
contra câmera apenas com aprendizado de frota — rodando lado a lado em Phoenix, o que
transforma 2026 numa comparação controlada rara.

Do lado dos modelos, a infraestrutura de IA física está consolidada como produto: NVIDIA
Cosmos como modelo de mundo, Isaac Sim e Isaac Lab como simulação de alta fidelidade, e Isaac
GR00T como modelo fundacional de robô generalista. O GR00T N1.6 integra política
visão-linguagem-ação com o modelo de mundo Cosmos Reason e demonstra transferência zero-shot
entre corpos diferentes; o GR00T N1.7 já saiu com licenciamento comercial e a NVIDIA prévia um
N2 baseado em arquitetura de modelo de ação-mundo unificada. AGIBOT, LG Electronics, NEURA
Robotics e outras fabricantes adotaram esses modelos para acelerar implantações industriais.
A Physical Intelligence publicou o π0.7 em abril de 2026, um modelo fundacional dirigível que
demonstra generalização cross-embodiment zero-shot — por exemplo, um robô dobrando roupa sem
ter visto a tarefa antes — e desempenho comparável a modelos especializados ajustados por
aprendizado por reforço em tarefas como operar uma máquina de espresso.

**O que existe e ainda não funciona.** A condução de ponta a ponta baseada em VLA é, hoje,
majoritariamente literatura acadêmica: OpenDriveVLA (aceito no AAAI 2026), AutoVLA, DriveVLM,
e uma safra grande de variantes ao longo de 2026. A pilha em produção nos robotáxis continua
sendo modular, não um VLA único. E o problema estrutural que a própria literatura nomeia como
dominante e não resolvido é o gap sim-to-real: o Cosmos 3 produz sequências de ação que
funcionam em simulação, mas se elas transferem para hardware físico em chão de fábrica é
descrito como questão empírica em aberto, cujo primeiro teste real seriam as entregas de GR00T
no fim de 2026.

**A economia ainda não fecha.** Volume não é lucro: o lucro líquido da Unitree caiu 52% ano a
ano no primeiro trimestre de 2026 mesmo com ações de robótica em alta. Produção seriada de um
humanoide com dez mil componentes não tem precedente na história da manufatura, e a própria
rampa do Model 3 da Tesla levou mais de dezoito meses para estabilizar com um produto muito
mais simples.

**E o uso produtivo ainda não começou — segundo a própria fabricante.** A evidência mais dura
disso não vem de análise externa, e sim de admissão contra o próprio interesse: Musk concedeu
que o Optimus não estava em uso nas fábricas da Tesla "in a material way", e que as unidades
eram "primarily for learning, not productive tasks". Isso é uma distinção que quase nenhuma
divulgação faz: os robôs implantados hoje estão em operação, mas em operação de **aprendizado**,
não de produção. A consequência disso para o mapa está na Seção 7 — e não é a consequência que
eu esperava ao escrever a Seção 5.

**Quem está construindo.** NVIDIA (Isaac, Cosmos, GR00T), Google DeepMind (Gemini Robotics,
SIMA, Genie 3), Physical Intelligence (série π), Meta (V-JEPA 2), World Labs (Marble),
Figure AI, Tesla, Boston Dynamics, Apptronik, Agility Robotics, 1X, Unitree, Fourier, AGIBOT,
Waymo, Zoox.

**Tecnologia madura, para contraste.** ROS 2, SLAM, planejamento de trajetória (OMPL, MoveIt
2), mapeamento HD e simuladores físicos determinísticos acelerados por GPU são o chão em que
tudo isso pisa — e, pelo critério da Etapa 3, não entram como disrupção-raiz.

## 4. As disrupções-raiz

### Modelos de mundo generativos como fonte primária de dados de treino físico

**O que rompe.** A restrição de que aprender a agir no mundo exige coletar dados no mundo.
O Cosmos gera vídeos e trajetórias de cena fisicamente consistentes, complementando o
simulador determinístico ao cobrir dinâmicas de horizonte longo, eventos raros e interações
complexas que seriam proibitivamente caras de coletar fisicamente. Isso rompe a barreira de
entrada mais dura da robótica: quem não tem frota não tem dado, e quem não tem dado não tem
política.

**Por que agora e não há cinco anos.** Três coisas mudaram juntas: arquiteturas generativas
capazes de manter consistência física ao longo do tempo, compute de treino em escala de
cluster DGX, e a constatação empírica de que dados sintéticos elevam a generalização com menos
amostras reais — o GR00T N1 é pré-treinado numa mistura de demonstrações reais, vídeo de
escala de internet e dados sintéticos em larga escala gerados pelo pipeline Mimic do Isaac Lab.

**O que ainda falta.** Validação de que a política treinada assim sobrevive ao contato com o
real. E há um gargalo que se desloca: à medida que os modelos base ficam bons em gerar dados
sintéticos fisicamente plausíveis, a restrição sobe para a curadoria — como esses dados são
rotulados, deduplicados e validados antes de chegar ao treino.

### Políticas generalistas que transferem entre corpos (cross-embodiment)

**O que rompe.** O acoplamento entre hardware e inteligência. Historicamente, cada robô tinha
sua pilha de controle; uma política treinada para um braço não servia para outro. O π0.7
demonstra generalização cross-embodiment zero-shot, e o GR00T N1.6 reporta desempenho forte
entre corpos diferentes com ajuste fino mínimo. Se a inteligência é portável, o corpo vira
commodity — e a tese de que robótica pode ser um mercado de plataforma, e não uma coleção de
projetos customizados, deixa de ser especulação.

**Por que agora e não há cinco anos.** Datasets cross-embodiment em escala (Open X-Embodiment
e sucessores), a adaptação de VLMs pré-treinados para saída de ação contínua via flow matching
(a contribuição do π0), e a chegada de arquiteturas que produzem comandos motores a dezenas de
hertz sem perder o conhecimento semântico da web.

**O que ainda falta.** Demonstrar transferência em ambientes não estruturados e com margem de
segurança industrial, não apenas em tarefas de manipulação de bancada. E a advertência
honesta que a própria análise de mercado faz: a implantação real pode continuar
específica demais a hardware, sensível demais a segurança e faminta demais por dados para
virar camada horizontal.

### Condução e navegação fim-a-fim por modelos visão-linguagem-ação

**O que rompe.** O paradigma modular que estrutura a engenharia automotiva há duas décadas —
percepção, predição e planejamento como subsistemas separados, cada um com sua equipe, sua
métrica e seu fornecedor. Modelos de ponta a ponta mapeiam sensor bruto diretamente em ação,
eliminando acúmulo de erro entre módulos e permitindo otimização conjunta. Rompe organograma,
não só arquitetura.

**Por que agora e não há cinco anos.** Os métodos fim-a-fim anteriores apenas imitavam
trajetórias de especialista e careciam de conhecimento de mundo para lidar com cenários de
cauda longa; a fusão com VLMs trouxe justamente esse conhecimento, e 2026 concentra a safra de
trabalhos que fecham o ciclo (OpenDriveVLA no AAAI 2026, AutoVLA com ajuste por reforço,
modelos de mundo acoplados ao planejamento).

**O que ainda falta.** Sair do benchmark para a produção. A verificabilidade é o obstáculo
real: um sistema modular permite auditar qual módulo falhou; um modelo fim-a-fim, não — e é
exatamente isso que a homologação automotiva exige hoje.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: Modelos de mundo generativos como fonte primária de dados de treino físico
    efeitos:
      - id: e1
        ordem: 1
        efeito: O treino de agentes corporificados passa a depender majoritariamente de dados sintéticos gerados, e não de coleta física proprietária
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Novos entrantes constroem robôs competitivos sem frota própria, licenciando dados e modelos de mundo de terceiros
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Poucos provedores de mundo concentram o insumo de treino de boa parte da indústria robótica, replicando a concentração já vista na nuvem de IA
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A curadoria e validação de dados sintéticos vira a disciplina de engenharia crítica, deslocando o gargalo da arquitetura do modelo para o pipeline de dados
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Surge uma função de auditoria independente de dados de treino físico, exigida por seguradoras antes de cobrir frotas autônomas
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A validação em simulação passa a ser aceita como evidência parcial em processos de homologação de sistemas autônomos
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Cenários de teste sintéticos padronizados viram requisito regulatório, análogo aos protocolos de crash test
            sinal: medio
            prazo: 2033
            confianca: baixa
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: A responsabilidade por falha se desloca parcialmente do fabricante do robô para quem forneceu o modelo de mundo em que ele treinou
                sinal: fraco
                prazo: 2035
                confianca: baixa
  - disrupcao: Políticas generalistas que transferem entre corpos diferentes
    efeitos:
      - id: e3
        ordem: 1
        efeito: O mesmo modelo de controle opera robôs de fabricantes distintos com ajuste fino mínimo
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: O setor se reorganiza em duas camadas econômicas separadas, corpo e inteligência, como aconteceu entre hardware e sistema operacional no smartphone
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Fabricantes de corpo disputam margem por integração vertical, recomprando ou desenvolvendo camada de inteligência própria
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Montadoras adotam a mesma camada de inteligência para robôs de fábrica e para funções de condução, unificando equipes antes separadas
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: A formação em engenharia automotiva se reorganiza em torno de especificação e verificação de políticas aprendidas, em vez de projeto de subsistemas de controle
                sinal: fraco
                prazo: 2035
                confianca: baixa
  - disrupcao: Condução e navegação fim-a-fim por modelos visão-linguagem-ação
    efeitos:
      - id: e4
        ordem: 1
        efeito: A pilha modular de percepção, predição e planejamento é substituída por um modelo único em parte dos sistemas de navegação embarcados
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: A verificabilidade vira o principal obstáculo de homologação, já que não há módulo isolável ao qual atribuir uma falha
            sinal: forte
            prazo: 2030
            confianca: alta
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Consolida-se uma engenharia de interpretabilidade aplicada a sistemas físicos, com ferramentas próprias e papel formal no processo de certificação
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Instruir um veículo ou robô em linguagem natural se torna interface padrão de operação, e não recurso auxiliar
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: A ambiguidade linguística vira categoria formal de risco em sistemas embarcados, com normas próprias para comandos mal interpretados
                sinal: fraco
                prazo: 2035
                confianca: baixa
```

O bloco não consegue dizer três coisas. A primeira é que e1 e e3 são o mesmo fenômeno visto de
dois lados: dados de treino portáveis e políticas portáveis se reforçam mutuamente — se um
avança e o outro não, a camada horizontal de inteligência não se forma, e boa parte do ramo
e3.1 cai junto. A segunda é que e4.1 é o único efeito que mantive em confiança alta, e
deliberadamente: ele já é observável hoje no descompasso entre a literatura fim-a-fim e a
pilha modular que continua em produção nos robotáxis — é um obstáculo presente, não uma
projeção. A terceira é que os prazos de terceira ordem, todos entre 2034 e 2035, estão
comprimidos contra o limite do horizonte; num mapa de horizonte mais longo eles provavelmente
se espalhariam, e a compressão é artefato do recorte de dez anos, não uma previsão de que tudo
acontece no mesmo ano.

## 6. Sinais fracos e wildcards

**Sinal fraco 1.** O DreamZero e a linhagem de modelos de ação-mundo prevêem o próximo estado
do mundo e a próxima ação do robô numa única passagem, em vez de tratar simulação e controle
como sistemas separados. Se esse padrão se firmar, a distinção entre "o simulador" e "a
política" — que estrutura este mapa inteiro — deixa de fazer sentido arquitetural.

**Sinal fraco 2.** Fabricantes limitando deliberadamente a capacidade física dos robôs (a 1X
restringindo o manuseio de objetos pesados, cortantes ou quentes) sinaliza que a contenção
pode virar característica de produto anunciada, não apenas requisito de segurança interno.

**Sinal fraco 3.** A NVIDIA prevê um robô humanoide de referência construído sobre hardware
Unitree, sinalizando padronização de hardware de prateleira sobre o qual desenvolvedores
constroem — o equivalente robótico de uma placa de referência.

**Wildcard (baixa probabilidade, alto impacto).** Um acidente grave com robô ou veículo
autônomo cuja investigação conclua que a causa-raiz estava no modelo de mundo em que ele
treinou — um viés sistemático nos dados sintéticos, não uma falha de sensor ou de hardware.
A probabilidade é baixa porque exige simultaneamente o acidente, a capacidade forense de
rastrear a falha até o dado de treino (que hoje praticamente não existe) e a disposição de
tornar isso público. Mas o impacto seria estrutural: transformaria o provedor de modelo de
mundo em elo responsabilizável da cadeia — exatamente o efeito e2.1.1 — e provavelmente
travaria por anos a aceitação de validação sintética como evidência regulatória, derrubando o
ramo e2 inteiro.

## 7. Contra o próprio mapa

**Qual efeito é só extrapolação linear do presente.** O e3.1 — a separação do setor em camadas
de corpo e inteligência — é analogia direta com o que aconteceu no smartphone, e analogia não
é argumento. Robótica tem uma diferença material que o smartphone não tinha: o acoplamento
físico entre política de controle e dinâmica específica do corpo é muito mais forte do que
entre aplicativo e hardware. Estou projetando um padrão conhecido sobre um domínio que pode
não aceitá-lo, e a própria análise de mercado do π0.7 levanta essa ressalva: a implantação
real pode continuar hardware-específica e sensível demais à segurança para virar camada
horizontal.

**Qual efeito assume velocidade de adoção sem precedente.** O e1, ainda que rebaixado para
confiança média, assume que dados sintéticos passam a dominar o treino físico até 2029 — três
anos. O caso comparável mais próximo, a adoção de simulação em projeto aeroespacial e
automotivo, levou décadas para ser aceita como substituto parcial de ensaio físico, e nunca
substituiu integralmente. Três anos para uma inversão de fonte primária de dados não tem
precedente observável em engenharia de sistemas críticos.

**Qual disrupção pode não se concretizar.** A terceira — condução fim-a-fim por VLA. Ela
depende de resolver a verificabilidade, e hoje não há caminho claro para isso: a homologação
automotiva é construída sobre decomposição modular e atribuição de falha. Se não se
concretizar, cai o ramo e4 inteiro (e4, e4.1, e4.1.1, e4.2, e4.2.1), que é metade dos efeitos
deste mapa ligados diretamente ao público automotivo. O que sobra é um mapa sobre robótica
industrial com o automotivo entrando só pela porta da manufatura, não do veículo — um mapa
bem menos interessante para o público a que este documento se destina, o que é justamente
motivo para desconfiar de que eu tenha sido generoso com essa disrupção.

**Que viés meu entrou aqui.** Dois, e eles se somam na mesma direção. O primeiro é o viés que
eu mesmo pedi na entrevista: lente tecno-otimista. Ela aparece concretamente em ter tratado os
três candidatos como disrupções que se concretizam e depois discutido as ressalvas, em vez de
tratar cada uma como aposta que pode falhar desde o início. O segundo é o viés de escolha do
tema: escolhi este tema por interesse pessoal em sistemas embarcados e navegação, e isso
provavelmente inflou o peso dado à disrupção fim-a-fim, que é a mais academicamente
interessante das três e a com menos evidência de produção. Um mapa feito por alguém sem esse
interesse provavelmente daria a e4 confiança baixa desde o começo, ou nem a incluiria como
disrupção-raiz.

**Um efeito que rebaixei durante a construção, registrado.** O e1 começou com confiança alta,
apoiado na força do investimento e do discurso da NVIDIA. Rebaixei para média ao encontrar a
avaliação técnica de que a transferência de ações geradas pelo Cosmos 3 para hardware físico
em chão de fábrica permanece questão empírica em aberto, com o gap sim-to-real descrito como
o problema dominante não resolvido da robótica humanoide. Confiança alta seria acreditar no
roadmap do fornecedor, não na evidência.

**Um segundo argumento contra o e1, encontrado depois de escrever a roda.** Este não é o gap
sim-to-real; é observação de comportamento da indústria, e para mim é o achado mais forte desta
revisão. Se os robôs implantados hoje estão em operação **primariamente para aprender**, e não
para produzir (Seção 3), então o dado do mundo real ainda não foi substituído pelo dado
sintético. O robô no chão de fábrica, nesta leitura, não é o produto: é o aparato de coleta. E
se o dado sintético já bastasse, não haveria necessidade dele lá. Isso derruba o prazo de 2029
do e1 por um motivo que não é técnico — não é que a geração de mundo não funcione, é que a
indústria, com o que tem hoje, continua escolhendo o mundo real como fonte primária. Minha
projeção de inversão até 2029 provavelmente está otimista em anos, não em meses. Registro isso
aqui em vez de reescrever o e1 de propósito: o valor está em ver a projeção original e a
objeção lado a lado.

**Onde a disrupção 2 está formulada de forma forte demais.** A Seção 4 diz que, se a
inteligência é portável, o corpo vira commodity. Acho essa formulação larga demais para o
horizonte de dez anos. Portabilidade **universal** — um modelo que opera qualquer plataforma
robótica, de braço industrial a drone — é uma aposta muito maior do que a evidência sustenta;
os resultados de cross-embodiment que existem são entre corpos com morfologia e regime de
controle parecidos. A versão que eu defenderia é mais estreita: portabilidade **dentro de uma
classe** de robôs — políticas que transferem entre braços manipuladores diferentes, por
exemplo — sem transferir para classes com dinâmica radicalmente distinta, como plataformas
aéreas. Isso não derruba o e3, mas muda o que ele significa: o corpo vira commodity **dentro de
uma categoria**, não no setor inteiro, e aí o efeito e3.1 (a separação em duas camadas
econômicas) acontece por nicho, não de forma horizontal. Com mais tempo que dez anos, a versão
universal volta a ser plausível — mas 2035 é curto para ela.

## 8. O que a máquina errou

**Erro 1 — conflação de duas coisas diferentes sob o mesmo nome.** Durante a construção, quase
tratei "simulador determinístico acelerado por GPU" (Isaac Sim, MuJoCo) e "modelo de mundo
generativo" (Cosmos, Genie) como o mesmo fenômeno em estágios diferentes de maturidade. São
categoricamente distintos: um resolve equações de física sobre uma cena que alguém modelou; o
outro gera a cena e a dinâmica a partir de dados. Percebi ao ler o levantamento técnico sobre
Isaac Sim, que descreve Cosmos como algo que *complementa* o simulador, estendendo cobertura
de dados para dinâmicas de horizonte longo e eventos raros — e não como algo que o substitui
por ser mais avançado. Se eu tivesse mantido a conflação, a disrupção-raiz 1 estaria errada na
premissa, porque o simulador determinístico é maduro e o modelo de mundo não é, e eu teria
classificado os dois juntos.

**Erro 2 — número de implantação inflado sem verificação da unidade de medida.** Uma das
primeiras fontes afirmava que a Figure havia superado 10 mil implantações e a Tesla 50 mil
unidades do Optimus, em número redondo e sem qualificar o que estava sendo contado.
Desconfiei justamente do arredondamento e da ausência de qualificação, e cruzei com outras
fontes. O que aparece em registros verificáveis é bem mais modesto e de natureza diferente:
por exemplo, 420 veículos autônomos da Tesla registrados no Texas em setembro de 2026,
com a própria fonte alertando que veículo registrado não é o mesmo que veículo em serviço, nem
que veículo rodando sem supervisão. Números de implantação nesse setor misturam unidades
produzidas, unidades entregues, unidades em piloto e unidades em operação, e quase nenhuma
fonte de divulgação distingue. Usei no documento apenas os números que vêm com unidade de
medida explícita (horas de operação da Figure em Spartanburg, corridas pagas por semana da
Waymo, milhas quadradas de cobertura) e deixei de fora as contagens de unidades.

*Correção posterior, ao reler a fonte 1 com atenção:* o problema é pior do que eu descrevi
acima, e é anterior à ambiguidade de unidade. A fonte 1 afirma que **nenhuma** dessas cifras
vem das empresas que elas descrevem — ou seja, não é só que "10 mil implantações" não diz o que
está contando; é que o número não tem fonte primária nenhuma. Minha desconfiança inicial foi
pelo arredondamento, que é o sintoma. A causa é a ausência de origem. Registro a correção em
vez de apagar a versão anterior porque a diferença entre as duas é justamente o que eu aprendi
na segunda leitura.

**Erro 3 — viés de fonte promocional na descrição de maturidade.** Boa parte do material
disponível sobre Cosmos e GR00T é publicado pela própria NVIDIA ou por blogs de parceiros
comerciais, e descreve capacidade em tom de produto concluído. A correção veio de fontes que
não vendem o produto — a literatura técnica que nomeia o sim-to-real como problema dominante
não resolvido, e a análise que aponta a queda de 52% no lucro da Unitree como evidência de que
volume não é lucratividade. Sem esse contrapeso, a Seção 3 teria descrito como "funciona hoje"
o que é, mais honestamente, "foi anunciado como funcionando e será testado no fim de 2026".

## 9. Três cenários para 2035

**Provável.** Em 2035, agentes corporificados são infraestrutura consolidada em ambientes
semi-estruturados — manufatura, logística, inspeção — e em navegação urbana mapeada, com
robotáxis operando em algumas dezenas de cidades globalmente. Modelos de mundo são a fonte
dominante de dados de treino, e dois ou três provedores concentram esse insumo. A camada de
inteligência generalista existe e é licenciada, mas não desacoplou completamente do corpo:
a maior parte das implantações ainda exige ajuste fino específico de hardware. A condução
fim-a-fim entrou em produção parcialmente, em funções delimitadas e auditáveis, não como
substituto integral da pilha modular. O trabalho físico repetitivo em ambiente controlado
diminuiu de forma perceptível mas não abrupta, e a discussão pública sobre isso é constante
sem ter produzido política pública consolidada.

**Desejável.** Em 2035, a camada de inteligência é genuinamente portável e existe concorrência
real entre provedores de modelos de mundo, incluindo alternativas abertas com pesos públicos —
o que impediu a concentração do efeito e1.1.1 e manteve a barreira de entrada baixa para
laboratórios acadêmicos e empresas fora do eixo das grandes fabricantes de chip. A
verificabilidade foi resolvida por uma engenharia de interpretabilidade que amadureceu junto
com os modelos, permitindo homologar sistemas fim-a-fim sem abrir mão de atribuição de falha.
Validação sintética padronizada reduziu o custo de certificar sistemas autônomos, e o ganho de
segurança em rodovia é mensurável e publicado. Para chegar lá, teria sido necessário que os
padrões de cenário sintético fossem construídos como bem público — por consórcio ou órgão
regulador — e não como produto proprietário de quem também vende o modelo.

**Indesejável.** Em 2035, o insumo de treino da robótica está concentrado em pouquíssimos
provedores verticalmente integrados que também vendem o silício, o simulador e o modelo
fundacional, e a barreira de entrada em robótica é mais alta do que era em 2026, não mais
baixa. Um acidente com causa-raiz rastreada a viés em dados sintéticos gerou resposta
regulatória fragmentada por jurisdição, e a validação em simulação perdeu credibilidade
justamente quando era mais necessária. A condução fim-a-fim ficou travada na homologação e
foi abandonada como linha de produto, sobrevivendo só na academia. O sinal precoce já visível
hoje: a mesma empresa fornecendo o simulador, o modelo de mundo, o modelo fundacional do robô
e o hardware de treino — uma integração vertical que, em 2026, é celebrada como conveniência
de pipeline e não discutida como concentração de infraestrutura crítica.

## 10. O experimento

**O que é.** Um medidor de gap sim-to-real em navegação: treinar uma política simples de
navegação (evitar obstáculo e chegar a um alvo) inteiramente dentro de um ambiente gerado —
usando um simulador leve como MetaDrive ou um mundo produzido por modelo generativo — e depois
executar a mesma política em um ambiente real barato: um robô de rodas com câmera única, ou,
na versão mais acessível, sobre vídeo real gravado do mesmo tipo de percurso. Medir a queda de
desempenho entre os dois e, principalmente, catalogar em que situações específicas ela
acontece.

**Que pergunta sobre o futuro ele ajuda a responder.** A pergunta central de que dependem duas
das três disrupções deste mapa: o quanto do desempenho aprendido em mundo gerado sobrevive ao
contato com o mundo real, e se as falhas são aleatórias ou sistemáticas. Se forem
sistemáticas e identificáveis, o efeito e1 é plausível no prazo projetado; se forem
imprevisíveis, ele não é.

**Que tecnologia emergente ele usa, e por que não dá para fazer com tecnologia madura.** Usa
política aprendida de ponta a ponta a partir de dados gerados, não pilha de navegação clássica.
Com tecnologia madura — SLAM mais planejador de trajetória — o experimento não responde nada,
porque essa pilha não aprende com dados sintéticos: ela constrói um mapa métrico e planeja
sobre ele, e sua transferência para o real é um problema de calibração de sensor, não de
generalização de política. É exatamente a diferença entre os dois que o experimento mede.

**O que a turma vai fazer quando testar isso em sala.** Cada pessoa propõe uma perturbação do
ambiente real que acredita que vai quebrar a política (mudar a iluminação, colocar um
obstáculo de formato não visto, mudar a textura do chão), registra a previsão antes de rodar,
e depois compara com o resultado. O produto da aula não é o robô funcionando — é a lista de
perturbações que as pessoas *previram* corretamente contra as que ninguém previu. Essa segunda
lista é a medida prática do que "gap sim-to-real" significa.

**O que seria um resultado que me faria mudar de ideia.** Se a política treinada só em mundo
gerado transferir com queda pequena de desempenho e as falhas forem previsíveis pela turma,
isso enfraquece a minha ressalva central da Seção 7 e sugere que fui conservador demais ao
rebaixar e1 para confiança média — o cenário desejável ficaria mais provável do que projetei.
Se, ao contrário, a política quebrar em perturbações que ninguém antecipou, o problema não é
de quantidade de dados sintéticos, e sim de cobertura desconhecida — e aí o prazo de 2029 para
e1 está errado por anos, não por meses.

## 11. Fontes

1. Technology.org, "Humanoid Robots in 2026: What Is Actually Deployed" (18/07/2026) —
   https://www.technology.org/2026/07/18/humanoid-robots-in-2026-what-is-actually-deployed/
   Sustenta a queda de 52% no lucro da Unitree, a ausência de precedente em produção seriada de
   humanoide, a comparação com a rampa do Model 3, a afirmação de que nenhuma das cifras de
   implantação vem das empresas que elas descrevem, e a concessão de Musk de que o Optimus não
   estava em uso "in a material way" nas fábricas da Tesla, sendo as unidades "primarily for
   learning, not productive tasks". Confiável: é a fonte mais cética do conjunto, separa
   explicitamente volume de lucro, e é a única que rastreia a procedência dos números. Nota de
   leitura: a fala de Musk é sobre uso interno nas fábricas da Tesla, não sobre venda externa —
   confundir as duas coisas seria erro meu, não da fonte. (Retorna 403 a requisição
   automatizada; abre normalmente no navegador.)
2. Technerdo, "Humanoid Robots in 2026: Market Leaders, Deployments, and What Comes Next"
   (23/04/2026) — https://www.technerdo.com/blog/humanoid-robots-market-2026
   Sustenta o piloto de onze meses da Figure na BMW Spartanburg, as mais de mil horas de
   operação, o plano de Leipzig, e os casos Agility/GXO e Apptronik/Mercedes. Confiável com
   ressalva: blog setorial, mas cita horas e plantas específicas, verificáveis.
3. VaaSBlock, "Humanoid Robotics 2026: Figure, Optimus, 1X Commercial Reality" (30/06/2026) —
   https://www.vaasblock.com/news/humanoid-robotics-figure-tesla-optimus-commercial-reality-2026/
   Sustenta o gap entre narrativa de vídeo promocional e realidade operacional. Confiável com
   ressalva: análise para investidor, com viés próprio, mas explicitamente cética.
4. AI Magicx, "Humanoid Robots in the Workplace: The 2026 Business Leader's Reality Check"
   (23/03/2026) — https://www.aimagicx.com/blog/humanoid-robots-workplace-tesla-optimus-atlas-2026
   Origem das contagens de unidades que **descartei** (ver Seção 8, erro 2). Baixa
   confiabilidade para números; listada por transparência sobre o que foi rejeitado.
5. Optimusk, "Tesla Optimus Factory Deployment: 2025-2026 Status" (06/08/2026) —
   https://optimusk.blog/blog/tesla-optimus-factory-deployment/
   Sustenta a conversão da linha de Fremont e o gap entre meta anunciada e produção real.
   Confiável com ressalva: blog dedicado ao produto, portanto favorável, mas admite o gap.
6. NVIDIA Technical Blog, "Building Generalist Humanoid Capabilities with Isaac GR00T N1.6
   Using a Sim-to-Real Workflow" (26/01/2026) —
   https://developer.nvidia.com/blog/building-generalist-humanoid-capabilities-with-nvidia-isaac-gr00t-n1-6-using-a-sim-to-real-workflow/
   Sustenta a integração do GR00T N1.6 com Cosmos Reason, a transferência zero-shot e o stack
   de localização (cuVSLAM, nvblox). Confiável para capacidade técnica, com viés comercial na
   descrição de maturidade.
7. NVIDIA Newsroom, "NVIDIA and Global Robotics Leaders Take Physical AI to the Real World" —
   https://nvidianews.nvidia.com/news/nvidia-and-global-robotics-leaders-take-physical-ai-to-the-real-world
   Sustenta GR00T N1.7 com licenciamento comercial, a prévia do N2, Isaac Lab 3.0 e a lista de
   adotantes (AGIBOT, LG, NEURA). Confiável como anúncio oficial; é fonte institucional.
8. Build Fast with AI, "NVIDIA Cosmos 3 + Isaac GR00T Robot: Full Review" (02/06/2026) —
   https://www.buildfastwithai.com/blogs/nvidia-cosmos-3-isaac-groot-physical-ai-2026
   Sustenta a ressalva central deste mapa: o sim-to-real como problema dominante não resolvido
   e as entregas do fim de 2026 como primeiro teste real. Confiável: review independente, é o
   contrapeso às fontes institucionais. **Limite desta fonte, encontrado na segunda leitura:**
   ela *afirma* que o gap é o problema dominante não resolvido, mas não explica o mecanismo —
   diz apenas que "real-world humanoid robotics is harder than benchmarks suggest". Ou seja,
   ela sustenta que o problema existe, não por que existe. Qualquer explicação do mecanismo
   (dificuldade de simular contato, ruído de sensor e atuador, erro composto em tarefa longa,
   viés sistemático no mundo gerado) não vem desta fonte e não deve ser atribuída a ela. Ela
   também observa que boa parte dos benchmarks da área "don't have the same independent
   reproduction infrastructure" — um segundo problema de credibilidade, adjacente: se os
   benchmarks não são reproduzíveis por terceiros, a comparação entre modelos também é frágil.
9. Encord, "Best Foundation Models for the Physical World in 2026" —
   https://encord.com/blog/foundation-models-physical-ai-2026/
   Sustenta a definição de world foundation model, o deslocamento do gargalo para curadoria de
   dados, o padrão DreamZero de unificar previsão de mundo e ação, e o robô de referência sobre
   hardware Unitree. Confiável com ressalva: empresa de ferramentas de dados, o que
   provavelmente enfatiza o argumento da curadoria.
10. arXiv, levantamento sobre Isaac Sim — https://arxiv.org/pdf/2606.03551
    Sustenta a distinção entre simulação de alta fidelidade e modelo de mundo generativo — a
    base da correção do erro 1 da Seção 8. Confiável: literatura revisada.
11. arXiv, "Isaac Lab: A GPU-Accelerated Simulation Framework for Multi-Modal Robot Learning" —
    https://arxiv.org/pdf/2511.04831
    Sustenta o papel de dados sintéticos via pipeline Mimic no pré-treino do GR00T N1.
    Confiável: literatura técnica com descrição de método.
12. arXiv, "π0.7: a Steerable Generalist Robotic Foundation Model with Emergent Capabilities"
    (24/04/2026) — https://arxiv.org/abs/2604.15483
    Sustenta a generalização cross-embodiment zero-shot e o desempenho comparável a modelos
    especializados. Confiável: publicação dos autores do modelo, com método descrito.
13. Physical Intelligence, "π0: A Vision-Language-Action Flow Model for General Robot Control" —
    https://www.pi.website/download/pi0.pdf
    Sustenta a arquitetura de flow matching para ação contínua e a frequência de comando motor.
    Confiável: paper técnico da empresa.
14. Black Scarab, "Physical Intelligence Deep Dive: pi 0.7" (22/06/2026) —
    https://www.blackscarab.ai/insights/physical-intelligence-generalist-robot-policy-guide
    Sustenta a tese da camada horizontal de inteligência **e** a ressalva de que a implantação
    pode continuar hardware-específica. Confiável com ressalva: análise de investimento.
15. arXiv, "AutoVLA: A Vision-Language-Action Model for End-to-End Autonomous Driving" —
    https://arxiv.org/pdf/2506.13757
    Sustenta a crítica ao paradigma modular (acúmulo de erro, falta de otimização conjunta) e a
    limitação dos métodos fim-a-fim anteriores em cauda longa. Confiável: literatura revisada.
16. GitHub, OpenDriveVLA — https://github.com/DriveVLA/OpenDriveVLA
    Sustenta a aceitação no AAAI 2026 e a existência de código e modelo públicos. Confiável:
    repositório primário.
17. arXiv, "The Era of End-to-End Autonomy: Transitioning from Rule-Based Driving to Large
    Driving Models" — https://arxiv.org/pdf/2603.16050
    Sustenta a descrição do GR00T como política sensório-motora generalizada e o papel do Cosmos
    na geração de dados a escalas inviáveis de coletar no real. Confiável: literatura revisada.
18. arXiv, "Learning Vision-Language-Action World Models for Autonomous Driving" —
    https://arxiv.org/pdf/2604.09059
    Sustenta a densidade da safra de 2026 em VLA acoplado a modelo de mundo para condução.
    Confiável: literatura revisada.
19. Electrek, "Waymo expands robotaxi coverage more than 20%" (13/05/2026) —
    https://electrek.co/2026/05/13/waymo-expands-coverage-1400-square-miles-11-cities/
    Sustenta as mais de 1.400 milhas quadradas em 11 cidades e a preparação para Londres e
    Tóquio. Confiável: veículo especializado, números atribuídos a anúncio da empresa.
20. HumAI, "2026 Is the Year of Autonomous Driving" (01/04/2026) —
    https://www.humai.blog/2026-is-the-year-of-autonomous-driving-waymo-in-10-cities-tesla-expanding-where-you-can-already-get-a-robotaxi/
    Sustenta as 500 mil corridas pagas por semana, a operação sem supervisão em Austin e a
    oposição técnica entre as duas abordagens. Confiável com ressalva: blog, mas os números
    batem com as demais fontes.
21. The Chargeport, "Robotaxi Status September 2026" —
    https://thechargeport.com/robotaxi-tracker
    Sustenta a correção do erro 2 da Seção 8: 420 veículos registrados no Texas, com a ressalva
    explícita de que registrado ≠ em serviço ≠ sem supervisão. Confiável: é a fonte que mais
    cuida da unidade de medida.
22. Congress.gov, S.3275 — Humanoid ROBOT Act of 2025 —
    https://www.congress.gov/bill/119th-congress/senate-bill/3275/text
    Sustenta a existência de definição legal formal de robô humanoide em tramitação. Confiável:
    fonte primária legislativa.
23. Hill Dickinson, "Humanoid robots and the law — preparing for a new era of risk"
    (12/02/2026) — https://www.hilldickinson.com/our-view/articles/humanoid-robots-and-the-law-preparing-for-a-new-era-of-risk/
    Sustenta a limitação deliberada de capacidade física pela 1X e a expectativa de que a adoção
    seja gradual e a regulação divergente entre jurisdições. Confiável: escritório jurídico
    especializado.

## 12. Anexo — o levantamento bruto

### Buscas realizadas, na ordem, e o que cada uma rendeu

1. `humanoid robots commercial deployment 2026 Figure Tesla Optimus factory` — alto
   aproveitamento; originou as fontes 1 a 5. Foi a busca que expôs o problema de unidade de
   medida nas contagens de implantação (erro 2 da Seção 8): a mesma semana de notícias traz
   "50 mil unidades produzidas", "10 mil implantações" e "420 veículos registrados no Texas",
   e as três contam coisas diferentes.
2. `NVIDIA Cosmos GR00T world model robot foundation model 2026 sim-to-real` — alto
   aproveitamento; originou as fontes 6 a 11. Retornou também material de marketing de parceiro
   que foi descartado por não trazer fato verificável além do que as fontes 6 e 7 já dizem.
3. `US robot liability regulation autonomous humanoid workplace law 2026` — aproveitamento
   médio; originou as fontes 22 e 23. Retornou também análises de consultoria jurídica
   (MLT Aikins, Autonomy Global) que repetem o mesmo conteúdo da fonte 23 sem acrescentar, e
   uma fonte sobre padrões OSHA/IEEE P7009 que ficou de fora porque o recorte deste mapa é
   global, não EUA — em um recorte americano, ela entraria.
4. `vision-language-action model autonomous driving end-to-end 2026 production` — alto
   aproveitamento acadêmico, baixo aproveitamento de produção; originou as fontes 15 a 18. O
   achado mais importante desta busca foi negativo: praticamente tudo que existe sobre VLA para
   condução é paper, não produto. Isso derrubou a ideia inicial de tratar a disrupção 3 como
   já em curso e a rebaixou para "em transição", o que se reflete na confiança média de e4.
5. `robotaxi expansion 2026 Waymo Tesla cities scale autonomous vehicles` — alto
   aproveitamento; originou as fontes 19 a 21. Confirmou que a escala real de navegação
   autônoma em produção vem da pilha modular, não de modelos fim-a-fim — o que é justamente o
   contraponto mais forte contra a disrupção 3.
6. `Physical Intelligence pi0 Gemini Robotics generalist robot policy 2026 cross-embodiment` —
   alto aproveitamento; originou as fontes 12 a 14. Retornou também vários papers de
   cross-embodiment (Mirage, OXE-AugE, Octo, Open X-Embodiment) que sustentam a linhagem técnica
   mas não foram citados individualmente por serem nível de detalhe excessivo para o documento;
   ficam registrados aqui.

### Candidatos a disrupção-raiz testados e rejeitados

Aplicando o teste de três perguntas da skill (o que torna possível que antes não era / que
prática estabelecida ameaça / por que agora e não há cinco anos):

- **ROS 2, SLAM, planejamento de trajetória (OMPL, MoveIt 2), cuVSLAM.** Rejeitados: falham na
  pergunta 1. São infraestrutura madura e continuam sendo usados dentro dos sistemas novos —
  o próprio pipeline do GR00T N1.6 usa ROS e stacks de mapeamento visual. Melhoram, não rompem.
  Entraram na Seção 3 como baseline de contraste.
- **Simuladores físicos determinísticos acelerados por GPU (Isaac Sim, Isaac Lab, MuJoCo,
  PhysX).** Caso limítrofe, rejeitado como disrupção-raiz e classificado como infraestrutura.
  Passam na pergunta 3 (aceleração por GPU é recente) mas falham na 1 quando comparados com o
  que já existia: simulação física para robótica não é nova, ficou mais rápida e mais fiel.
  A parte genuinamente nova — geração do ambiente em vez de simulação de um ambiente modelado
  — está capturada na disrupção 1, e separá-las foi exatamente a correção do erro 1 da Seção 8.
- **Mapeamento HD prévio para navegação autônoma.** Rejeitado: maduro. É o que a Waymo usa em
  produção há anos, e o debate sobre substituí-lo (a aposta câmera-apenas da Tesla) é uma
  disputa entre duas abordagens estabelecidas, não uma ruptura emergente.
- **Enxames de drones com telemetria coordenada.** Rejeitado por escopo, não por maturidade:
  passa no teste, mas puxaria o mapa para aplicações militares e de resgate, que têm uma
  dinâmica regulatória e de financiamento suficientemente distinta para merecer mapa próprio.
  Fica registrado como caminho abandonado.

### Efeitos cortados antes da Seção 5

- **"Robôs humanoides domésticos generalizados até 2035".** Cortado por exigir encadear duas
  suposições independentes não testadas: custo de hardware caindo a nível de bem de consumo
  *e* segurança certificada para ambiente não estruturado com crianças e idosos. Nenhuma das
  duas tem evidência de trajetória hoje. Não virou nem wildcard porque não é baixa
  probabilidade e alto impacto — é média probabilidade e prazo indeterminado, que é o tipo de
  efeito que a roda não sabe representar.
- **"Desaparecimento do emprego industrial repetitivo".** Cortado por ser conclusão de terceira
  ordem que exige dados econômicos que este mapa não levantou. Aparece de forma bem mais
  contida no cenário provável da Seção 9, como "diminuiu de forma perceptível mas não abrupta".
- **"Robôs treinados em modelos de mundo desenvolvem comportamento emergente não previsto pelos
  projetistas".** Cortado por ser especulação sobre capacidade de modelo, não consequência
  encadeada de uma disrupção — é uma afirmação sobre o que os modelos *serão*, não sobre o que
  acontece no mundo *se* eles forem. Fora do escopo do método.
- **Um quarto efeito de primeira ordem sobre padronização de hardware de referência** (a partir
  do sinal do robô de referência sobre Unitree) foi considerado e movido para a Seção 6 como
  sinal fraco, porque tem um único ponto de evidência — uma prévia anunciada — e isso não
  sustenta um ramo inteiro de roda.

### Segunda passagem de leitura (23–24/09/2026), depois da roda montada

Voltei às duas fontes mais céticas do conjunto — a 8 e a 1 — para verificar se o documento as
representava direito. Quatro achados, dois deles corrigindo o próprio documento:

1. **A fonte 8 afirma sem explicar.** Ela nomeia o sim-to-real como problema dominante não
   resolvido, mas não dá o mecanismo. Isso não invalida a ressalva; muda o que eu posso dizer
   que ela sustenta. Registrado na Seção 11.
2. **Os benchmarks da área não têm infraestrutura de reprodução independente**, segundo a mesma
   fonte. Não entrou na roda porque é um problema de método de avaliação, não um efeito
   encadeado de uma disrupção — mas enfraquece qualquer comparação entre modelos citada por
   fornecedor, o que reforça o erro 3 da Seção 8.
3. **As cifras de implantação não têm fonte primária.** Versão mais dura do erro 2, corrigida
   na Seção 8.
4. **Os robôs implantados hoje estão aprendendo, não produzindo** — com admissão da própria
   Tesla. Isso virou o segundo argumento contra o e1 na Seção 7, e é a mudança mais
   substantiva desta revisão. Não alterei o bloco da roda: a projeção original e a objeção
   ficam lado a lado de propósito.

**Uma linha que não entrou por não ser verificável.** Ao rever a disrupção 1, me lembrei de
trabalhos de simulação e geração de dados para veículos conectados (do tipo V2X) que reforçariam
o argumento, mas não consegui recuperar a referência exata com confiança suficiente para citar.
Registro aqui o caminho em vez de inventar a citação — fonte que eu não abri não entra na Seção
11, e o nome que eu lembrava pode estar trocado.

**O que continua sem leitura aprofundada, declarado.** Das 23 fontes, aprofundei a 8 e a 1
nesta segunda passagem. As fontes de mecanismo — π0 e π0.7 (12, 13), AutoVLA (15), Isaac Lab
(11) — foram usadas na construção do mapa a partir de trechos e abstracts, não de leitura
integral. Isso limita o que eu posso afirmar sobre *como* cada arquitetura funciona, e é
precisamente onde uma pergunta em aula encontraria meu limite. Declarar isso é mais útil do que
deixar implícito.

### Buscas que não deram em nada

- Tentativas de encontrar dados públicos de taxa de falha em campo de humanoides implantados
  não retornaram nada consolidado. A única menção relevante é indireta: uma fonte jurídica
  relata um incidente de robô que atingiu um refrigerador e quase acertou um funcionário, e
  outra observa que não houve incidente grave documentado em implantações comerciais até o
  início de 2026 — mas atribui isso ao fato de as implantações serem poucas e supervisionadas
  de perto, o que não é evidência de segurança. Essa ausência de dado é, ela mesma, um achado:
  o efeito e1.2.1 (auditoria exigida por seguradoras) pressupõe uma base atuarial que hoje não
  existe publicamente.
- Busca por evidência de adoção de VLA fim-a-fim em produção automotiva (não em pesquisa) não
  retornou nenhum caso confirmado. Isso está refletido na confiança média de e4 e na Seção 7
  como a disrupção mais provável de não se concretizar.
