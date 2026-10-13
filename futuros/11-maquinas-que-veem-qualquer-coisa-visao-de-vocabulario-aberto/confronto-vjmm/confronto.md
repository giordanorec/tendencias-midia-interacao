---
tema: "Máquinas que veem qualquer coisa: visão de vocabulário aberto"
slug: maquinas-que-veem-qualquer-coisa-visao-de-vocabulario-aberto
aluno_login: vjmm
professor_login: grec
data: 2026-10-13
horizonte: 2031
mapa_independente: /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/giordano/11-maquinas-que-veem-qualquer-coisa-visao-de-vocabulario-aberto/tendencia-maquinas-que-veem-qualquer-coisa-visao-de-vocabulario-aberto.md
efeitos_em_comum: 12
efeitos_so_do_aluno: 6
efeitos_so_do_professor: 48
raizes_recusadas: 1
---

# Confronto: Máquinas que veem qualquer coisa, visão de vocabulário aberto

**Como este documento foi produzido.** Os dois mapas independentes existiam antes de o documento
do aluno ser lido. O mapa principal do confronto é o da skill `futurizacao-giordano`, de
11/09/2026, horizonte 2031: 4 raízes, 18 efeitos de 1ª ordem, 26 de 2ª e 17 de 3ª (61 ao todo).
O terceiro mapa, da skill `futures-wheel` original, de 12/09/2026 (40 efeitos de 1ª ordem, 218 no
total, ids no formato `e1_NN`, `e2_XNN`, `e3_TN_NN`), entra como **terceira voz** só na seção 1 e
na subseção 1b: quando um efeito aparece nos três mapas, está marcado **TRIPLA**. A síntese do
futures-wheel lista só a 1ª ordem; os ids de 2ª e 3ª ordem citados aqui foram conferidos no mapa
completo. O mapa do aluno, de 12/10/2026, tem 3 raízes e 18 efeitos (6 + 6 + 6). O objeto deste
texto é o mapa, não a pessoa.

Caminhos completos dos documentos:

```
/Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/giordano/11-maquinas-que-veem-qualquer-coisa-visao-de-vocabulario-aberto/tendencia-maquinas-que-veem-qualquer-coisa-visao-de-vocabulario-aberto.md
```

```
/Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/futures-wheel/11-maquinas-que-veem-qualquer-coisa-visao-de-vocabulario-aberto/tendencia-maquinas-que-veem-qualquer-coisa-visao-de-vocabulario-aberto.md
```

```
/Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/futures-wheel/11-maquinas-que-veem-qualquer-coisa-visao-de-vocabulario-aberto/futures-wheel-maquinas-que-veem-qualquer-coisa-visao-de-vocabulario-aberto.md
```

```
/Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/confrontos/11-vjmm/tendencia-maquinas-que-veem-qualquer-coisa-visao-de-vocabulario-aberto-vjmm.md
```

**Uma ressalva antes de tudo.** O passo 2 do modo adversarial pede que o mapa independente rode
com o mesmo briefing do aluno. Este não rodou: foi produzido antes, com o briefing da disciplina.
Horizonte (2031) e recorte (global, com atenção ao Brasil) coincidem. Divergem o público
("professor e colegas da disciplina" no dele, "quem projeta mídia e interação" no meu) e a zona
("Visão computacional, XR e robótica" no dele, "Percepção e mídia sintética" no meu). E há um mês
entre os mapas. O dele declara na seção 12 que não usou SAM 3 nem DINOv3 "porque não foi feita
verificação independente suficiente"; a âncora dele para em SAM 2 (2024) e Donut (2021), e a
minha e a do futures-wheel são construídas sobre o SAM 3 (19/11/2025). Parte das diferenças de
"por que agora" e de `sinal` vem dessa escolha, que está declarada.

**Como contei.** Um efeito do aluno está "em comum" quando o meu mapa tem um efeito com o mesmo
objeto e a mesma direção de mudança, ainda que em outra ordem ou com outro ator. Contei pelo lado
do aluno: 12 dos 18 efeitos dele têm par, e esses pares usam 13 ids do meu mapa; os outros 48 dos
meus 61 ficam na seção 3. Onde o par é parcial, está escrito na tabela.

---

## 1. O que os dois mapas têm em comum

Doze dos dezoito efeitos do aluno têm par no meu mapa; oito deles aparecem também no
futures-wheel. Nas colunas de id, o primeiro é o do aluno, o segundo o do meu mapa, o terceiro o
do futures-wheel.

| Efeito (frase do aluno, abreviada) | aluno | professor | futures-wheel | ordens (a/p) | o que a convergência sugere |
|---|---|---|---|---|---|
| "Equipes conseguem testar categorias novas sem treinar um classificador separado para cada conceito" | `e1` | `e1`: "Equipes de visão entregam detector novo em dias, sem coletar nem rotular dataset" | `e1_12`: "Desenhar caixa de propósito geral deixa de ter preço" (US$ 1,18 contra US$ 124.092,54 pela mesma rotulagem) | 1 / 1 | **TRIPLA.** Os três põem o efeito no começo da roda. O prazo dele (2027) é o mesmo a que o meu chegou depois da bateria do §6 (2026 → 2027, pela classe de referência do SAM 1). O futures-wheel acrescenta o que nenhum dos dois tem: a economia se realiza no vocabulário comum (F1 0,785 em VOC) e cai na cauda longa (0,215 em LVIS). Uma "categoria nova" costuma ser cauda longa. Ver pergunta 1. |
| "Parte do trabalho de anotação migra de rotular imagens para revisar prompts, casos-limite e erros do modelo" | `e1.1` | `e1.2`: "Plataformas de anotação movem a receita de desenhar caixa para revisar, avaliar e arbitrar discordância" | `e1_14`: "A anotação não morre: vira prompt e exemplar"; `e2_B03`: "O gargalo de custo migra da produção do rótulo para a verificação por amostragem" | 2 / 2 | **TRIPLA.** Mesma mudança vista por atores diferentes: o trabalho (dele), a receita da plataforma (meu), os dois (futures-wheel). O meu mapa e o futures-wheel derivam quem perde (`e1.2.1`, fora do horizonte; `e1_13`, "o que some é o meio da escada"); o dele não. |
| "Critérios de auditoria passam a incluir quem definiu as categorias e quais grupos ou objetos ficaram invisíveis" | `e1.1.1` | parcial: `e3.2`: "A auditoria de qualidade passa a exigir o histórico de versões do prompt junto do lote produzido" | `e1_05`: "Auditar deixa de ser inspecionar uma lista de 80 classes e passa a ser inspecionar um espaço de consultas infinito"; `e2_A02`: a consulta "vira arquivo versionado, com autor, data e aprovação" | 3 / 2 | **TRIPLA na primeira metade da frase.** "Quem definiu as categorias" é o histórico do prompt (meu, na fábrica) e a consulta versionada com autor (futures-wheel). A segunda metade, "quais grupos ou objetos ficaram invisíveis", não tem par no meu mapa; tem no futures-wheel (`e3_T2_02`, o ponto cego da cascata; `e2_B41`, "o que não tem nome sai do acervo, e em português isso é mais"). O meu mapa nomeia a norma (`e3.2.1`, IATF 16949); o dele deixa "critérios de auditoria" sem dono. |
| "Aplicações de busca visual oferecem consultas por descrições mais específicas do que uma taxonomia fixa" | `e2` | `e15`: "O acervo pessoal de imagem passa a responder pergunta, e o que estava guardado passa a estar disponível" | `e1_36`: "O acervo pessoal fica pesquisável por descrição, localmente e sem etiqueta" | 1 / 1 | **TRIPLA.** O meu mapa e o futures-wheel apontam produto já embarcado (Enhanced Visual Search a partir do iOS 18, Ask Photos); por isso o meu está em `sinal: forte`, 2027. O dele está em `sinal: medio`, 2028, com ator genérico ("aplicações de busca visual"). |
| "Políticas de retenção e acesso precisam tratar embeddings e descrições derivadas como formas de dados potencialmente sensíveis" | `e2.1.1` | `e15.1.1`: "Apagar a foto deixa de bastar porque o índice sobrevive ao arquivo, e o direito ao esquecimento passa a se aplicar ao embedding" | só como wildcard: `w1`, "O índice que era um rosto" | 3 / 3 | Dupla (no futures-wheel, wildcard). Mesmo objeto: o embedding como dado derivado. Três estatutos de tempo para ele: 2031 no dele; 2033 no meu, empurrado pela bateria do §6 ("categoria jurídica nova não nasce em cinco anos sem um caso"); evento improvável disparado por inversão de embedding no futures-wheel. É o único par em que o prazo dele é anterior ao meu. |
| "A autoria de conjuntos de dados de segmentação se desloca parcialmente para quem escolhe prompts e valida resultados" | `e3.1.1` | `e1.2` (mesma frase da linha de `e1.1`) | `e1_14`; `e1_15`: "O modelo passa a anotar os dados que treinam o próximo modelo, e a alça se fecha" | 3 / 2 | **TRIPLA, e repetida dentro do mapa dele.** É o `e1.1` dele dito de novo, na raiz 4.2. O futures-wheel acrescenta o que nenhum dos dois tem: quem anota passa a ser o modelo anterior, e o erro dele vira dado de treino do próximo. |
| "Sistemas de vídeo permitem selecionar e acompanhar regiões sem criar um modelo fechado para cada cenário" | `e4` | `e2`: "Contar e rastrear por descrição vira função de prateleira em vídeo, sem treino por espécie ou por objeto" | com restrição: `e1_08`, "Em vídeo, a percepção por conceito é racionada por objeto, não por câmera" | 1 / 1 | Dupla, e o futures-wheel põe o freio (cerca de cinco objetos em tempo quase real por GPU). No meu mapa este efeito está na raiz R1 (a classe decidida na pergunta), não numa raiz de segmentação; ver a seção 4 sobre a raiz 4.2 dele. |
| "Disputas sobre consentimento, retenção e propósito de uso de imagens passam a acompanhar a configuração dos prompts e não só a instalação da câmera" | `e4.1.1` | `e11.1`: "O litígio brasileiro sobre câmera muda de eixo, do consentimento para coleta biométrica para a finalidade e a proporcionalidade da consulta"; `e12.1.1`: "a disputa vira sobre o log" | `e1_16`: "A busca por pessoa muda de regime jurídico sem mudar de finalidade"; `e2_B24`: "O ativismo precisa trocar o pedido: de banir o rosto para exigir o registro da frase" | 3 / 2-3 | **TRIPLA, e a mais significativa do confronto.** É a convergência central do meu mapa ("o objeto que se audita deixa de ser o banco de dados e passa a ser a pergunta") e o eixo da tese do futures-wheel. O dele chega lá sem ter aberto nenhuma das fontes sobre vigilância que os outros dois usaram (Smart Sampa, AI Act, PL 2338), o que torna esta convergência a mais independente das oito. Falta ao dele o porquê: `e11` meu (a descrição não é dado biométrico e escapa da moldura escrita para biometria). Ver pergunta 3. |
| "Alguns fluxos extraem campos de documentos diretamente da imagem, sem depender de OCR como estágio separado" | `e5` | `e6`: "O pipeline de OCR, layout e parser desaparece do meio, e integrar documento vira uma chamada de modelo" | `e1_22`: "Extrair campo de documento cai de uma a duas ordens de grandeza de preço" | 1 / 1 | **TRIPLA, com três motivos diferentes.** O dele se apoia no Donut (2021); o meu, em VLM com peso Apache-2.0 e OCR em 32 idiomas (Qwen3-VL) e na tese de custo do DeepSeek-OCR; o futures-wheel, no preço (mil imagens na ordem de US$ 0,13 contra US$ 50 por mil páginas no Textract). O alcance também difere: "alguns fluxos" no dele, "desaparece do meio" no meu, que por isso registra a contradição `e6` × `e6.1.1`. |
| "A conferência humana migra da transcrição campo a campo para a validação de exceções, proveniência e decisões automatizadas" | `e5.1.1` | `e6.2`: "A conferência humana migra de ler o campo para julgar o caso duvidoso, e a métrica do time vira taxa de encaminhamento"; `e9.1`: "Uma camada de prova de leitura, com recorte da imagem, coordenada e confiança por campo, vira requisito de contrato" | `e2_C07`: dupla inferência, "só o campo em que divergem vai para o humano"; `e2_C10`: "O OCR não morre: vira o notário do VLM" | 3 / 2 | **TRIPLA, quase literal.** A frase dele e o meu `e6.2` são a mesma; "proveniência" é o meu `e9.1`. Eu a ponho em 2029 na 2ª ordem; ele, em 2031 na 3ª. O futures-wheel dá o mecanismo que falta aos dois: como se descobre que um campo é exceção. Ver pergunta 4. |
| "Interfaces de software podem ser consultadas por descrições visuais em vez de depender apenas de seletores ou nomes de campos" | `e6` | `e16`: "A tela vira imagem legível por máquina, e o agente opera software olhando pixel em vez de chamar API" | (sem par) | 1 / 1 | Dupla. Os dois mapas penduram o efeito numa raiz que não é bem a dele: eu o deixei em R4 e registrei a escolha como discutível (7.4 e 12.5 do meu mapa, uma quinta raiz "a interface vira imagem" que atravessaria os temas 1 e 4); ele juntou telas e documentos na raiz 4.3. O meu está em `sinal: forte` (no OSWorld 2.0 todos os modelos operam por captura de tela); o dele, em `fraco`. |
| "Automação de tarefas em telas pode alcançar interfaces sem API, mas continua sensível a mudanças de layout e interpretação incorreta" | `e6.1` | `e16.2`: "A captura de tela vira o formato de integração de quem não tem API, e o raspar visual escapa de termos de uso escritos para requisição HTTP" | (sem par) | 2 / 2 | Dupla. O dele é o único efeito da roda que traz o próprio freio dentro da frase. O meu acrescenta o ator que pode bloquear: o sistema operacional, que pode proibir leitura de tela por processo não autorizado (suposição escondida 4 do meu mapa). |

**Dois padrões nos doze pares.** Em nenhum deles o mapa dele tem `confianca` maior que a do meu, e
só uma vez tem prazo anterior (`e2.1.1`, onde eu empurrei o meu para 2033). Em quatro pares ele põe
o efeito uma ordem abaixo da minha (`e1.1.1`, `e3.1.1`, `e4.1.1`, `e5.1.1`). É coerente com o viés
"neutro-cético" que ele declara na seção 2; a seção 5 mostra que o calendário dele segue a ordem da
árvore, o que explica parte do atraso.

**Convergência nos wildcards (fora da contagem).** O wildcard dele ("óculos de consumo executam
localmente segmentação aberta contínua e anunciam em voz baixa o que há no campo de visão") é o
meu `W1` ("Rotulagem contínua do campo de visão em óculos de consumo, sem nuvem"), com o mesmo duplo
uso: acessibilidade e identificação persistente. O meu escreve a distância (cerca de três ordens de
grandeza em eficiência energética) e o sinal precoce (detecção aberta rodando no SoC do óculos, com
número de miliwatts); o dele lista as dependências (hardware, bateria, privacidade, consentimento).
O futures-wheel chega perto pela câmera, não pelos óculos (`w9`; `e3_T1_13`, o SoC Ambarella CV7).

**Convergências entre o aluno e o futures-wheel sem par no meu mapa.** Não entram na contagem de
`efeitos_em_comum` (que mede aluno × professor), mas indicam onde o meu mapa tem buraco ou está em
minoria:

- `e2.1` do aluno ("Organizações passam a indexar mais acervos visuais sem preparar manualmente
  cada vocabulário de busca") ↔ `e2_B35` ("Acervo de museu, arquivo e redação ganha uma camada de
  metadados não curada que vira a única porta de entrada") e `e2_C01` (com leitura barata, "passa a
  valer a pena reler o acervo a cada pergunta nova"). **Aqui o meu mapa está contra os outros
  dois:** o meu `e18` diz que a indexação retroativa de acervo grande não acontece por custo. Ver
  pergunta 2.
- `e3` do aluno ("Criadores e analistas isolam regiões de imagem ou vídeo com prompts e interações
  simples") ↔ `e2_A23`, que registra o efeito como presente: "Instagram Edits, Meta AI Vibes e o
  View in Room do Marketplace já operam com SAM 3". O meu mapa cita os mesmos produtos na seção 3 e
  não derivou efeito deles.
- `e6.1.1` do aluno ("Fornecedores e equipes passam a documentar evidências visuais e confirmação
  humana para ações executadas por agentes") ↔ `e2_C20` ("nenhum sistema que lê imagem pode
  disparar ação sensível sem confirmação humana explícita"). O futures-wheel dá o mecanismo que o
  efeito dele não tem: a imagem lida pode conter uma instrução (`e1_28`). Ver seção 2 e pergunta 5.
- **Uma contradição:** `e4.1` do aluno ("Inspeção contínua por câmera fica tecnicamente mais simples
  de configurar") contra `e2_A21` ("a percepção aberta é acionada por gatilho [...] e não por fluxo
  contínuo"). O meu `e4` vai no mesmo sentido do futures-wheel.

### 1b. O que só o futures-wheel viu

Efeitos que não estão no mapa do aluno nem no meu, e que mudariam a leitura dos dois:

- **`e1_28` e `e1_29`, a imagem vira canal de comando.** Toda imagem que entra num sistema que lê
  por descrição é potencialmente uma instrução; o ataque mora no redimensionamento. O futures-wheel
  cita 64% de sucesso de injeção por imagem em modelos de fronteira (Cloud Security Alliance).
  Atinge o ramo de telas dos dois mapas (`e6`, `e6.1` dele; `e16`, `e16.2` meu), que tratam o agente
  que lê a tela só pelo lado da capacidade.
- **`e1_30`, a peça gráfica endereçada à máquina.** A camiseta que impede o detector de casar a
  descrição, o rodapé que instrui o agente, a placa que reescreve o prompt; e `e2_B21`, "quem é
  vigiado passa a projetar a roupa contra a frase". É o efeito mais próximo do ofício de quem faz
  mídia, e nenhum dos dois mapas o tem.
- **`e1_02` e `e1_03`, a frase que o operador digita não é a que o modelo recebe.** Há uma camada
  de reescrita e uma lista privada de consultas bloqueadas (whitepaper da Verkada). O `e4.1.1` dele
  e o meu `e11.1` supõem que a disputa é sobre a frase digitada; o futures-wheel mostra que há duas
  frases, e só uma fica guardada (`e2_A04`).
- **`e2_A19`, a cascata.** Em produção, o modelo aberto só vê o que um detector fechado já
  recortou (pessoa e veículo). O meu `e4.1` tem as duas camadas no treino; o futures-wheel as põe na
  operação. Consequência para os dois mapas: "pessoa de moletom cinza" só funciona porque um
  detector de classe fixa já decidiu o que é pessoa.
- **`e1_39`, o vocabulário aberto é aberto em inglês.** O dele cita idioma como limite (seções 3 e
  4.1) e o meu cita os 32 idiomas do Qwen3-VL; nenhum deriva efeito. O futures-wheel mede a
  distância (+27,65 pontos de Accuracy@1 com legendas escritas em português) e a resposta barata da
  engenharia, traduzir a consulta, que empilha uma segunda reescrita.
- **`e1_04` e `e2_A10`, dizer que não está ali vira requisito.** A tela precisa distinguir "não
  encontrei" de "não existe". O experimento dele mede exatamente isso ("um caso em que o sistema
  deveria se abster"; "confiança percebida versus o acerto real"), mas a roda não tem o efeito.
- **`e1_34`, a carga de verificar a máquina recai sobre quem menos pode verificar.** A pessoa cega
  que recebe uma descrição fluente não tem como conferi-la. Nem o meu ramo de acessibilidade (`e17`)
  nem a prosa do dele chegam a este ponto.

---

## 2. Só no mapa do aluno

Seis efeitos não têm par no meu mapa. Cada um passa pelos testes do §3 da skill: mecanismo escrito,
especificidade (troque a raiz e veja se a frase ainda serve), prazo com classe de referência,
confiança calibrada.

**Quatro observações que valem para os dezoito, inclusive os da seção 1, e por isso não repito
linha a linha.**

1. **Mecanismo.** A skill pede `porque <pai> faz <mecanismo>` por efeito, na prosa depois do YAML.
   O documento tem um parágrafo depois do YAML, que trata das raízes em conjunto ("as falhas também
   se propagam de uma etapa para outra"), não de efeito a efeito. Onde o mecanismo está na própria
   frase, conto como escrito.
2. **Prazo.** O documento não traz classe de referência para nenhum prazo. Os prazos seguem a
   árvore sem exceção: 1ª ordem entre 2027 e 2029, 2ª entre 2029 e 2030, 3ª toda em 2031, o ano do
   horizonte; todo filho está um ou dois anos depois do pai. O §3.7 da skill diz que ordem não é
   data. Pela régua, o teste de prazo falha nos dezoito.
3. **Confiança.** Cai com a ordem (1ª: 4 `media`, 2 `baixa`; 2ª: 1 `media`, 5 `baixa`; 3ª: 6
   `baixa`), e nenhum efeito tem `alta`. Passa no teste de calibração. A seção 5 mostra o que essa
   distribuição não diz.
4. **Frase afirmativa (§3, regra 1).** Seis efeitos trazem um quantificador que impede a frase de
   ser falsa: "Parte do trabalho" (`e1.1`), "parcialmente" (`e3.1.1`), "em alguns ambientes"
   (`e4.1`), "Alguns fluxos" (`e5`), "podem ser consultadas" (`e6`), "pode alcançar" (`e6.1`). Um
   efeito com "alguns" é confirmado por qualquer caso, e por isso não é refutável. E um (`e2.1.1`)
   diz o que políticas "precisam" fazer, que é recomendação, não efeito.

**`e2.1`** (2ª, `sinal: medio`, 2030, `confianca: baixa`): "Organizações passam a indexar mais
acervos visuais sem preparar manualmente cada vocabulário de busca."
*Mecanismo:* implícito (a consulta por descrição de `e2` dispensa o vocabulário). *Especificidade:*
falha; "organizações" e "acervos visuais" sem nome (museu, jornal, empresa, prefeitura?), e "mais"
é extrapolação linear (§6.2: o mesmo, maior). *Prazo:* falha, sem referência. *Confiança:*
calibrada.
Motivo: o meu mapa removeu este efeito na bateria do §6 ("Toda imagem vira dado estruturado por
padrão", tese escrita como efeito) e o partiu em `e15` (acontece no acervo pessoal) e `e18` (não
acontece no institucional, porque o custo é proporcional ao tamanho do acervo); o futures-wheel fica
do lado dele (`e2_B35`). É o ponto em que os três mapas discordam.

**`e3`** (1ª, `sinal: forte`, 2028, `confianca: media`): "Criadores e analistas isolam regiões de
imagem ou vídeo com prompts e interações simples."
*Mecanismo:* na frase (o prompt substitui a máscara feita à mão). *Especificidade:* fraca; dois
públicos diferentes, e a frase serve igualmente para o SAM 1 de 2023, isto é, não depende do que é
novo. *Prazo:* falha no sentido inverso; com `sinal: forte` e o efeito já em produto de consumo
(`e2_A23` do futures-wheel; seção 3.1 do meu mapa), 2028 é tarde, e pelo §2 o que já é comum em
produto de massa é contexto, não efeito. *Confiança:* calibrada.
Motivo: é o efeito da raiz que o meu mapa recusou como melhoria sustentadora (SAM 1 e SAM 2,
segmentar por clique); ver seção 4.

**`e3.1`** (2ª, `sinal: medio`, 2030, `confianca: baixa`): "Prototipagem de edição, inspeção e
anotação visual se torna mais acessível a pessoas sem treinamento em visão computacional."
*Mecanismo:* não escrito. *Especificidade:* falha; três atividades numa frase, nenhum ator, e
"mais acessível a não especialistas" serve para qualquer ferramenta que simplifique uma tarefa
(troque a raiz por "plataformas sem código" e a frase continua servindo). *Regra de parada:* falha;
`e3` já diz "interações simples", e `e3.1` é o pai mais adiante, sem troca de ator nem de
mecanismo. *Prazo:* falha, sem referência. *Confiança:* calibrada.
Motivo: a versão com ator existe no meu mapa, `e3.1` ("O inspetor humano deixa de olhar peça e passa
a escrever e manter o texto que define o defeito"); escolhida uma das três atividades e nomeado quem
muda, o efeito passaria.

**`e4.1`** (2ª, `sinal: fraco`, 2030, `confianca: baixa`): "Inspeção contínua por câmera fica
tecnicamente mais simples de configurar em alguns ambientes."
*Mecanismo:* não escrito. *Especificidade:* falha; "em alguns ambientes" não diz se é fábrica ou
espaço público. A palavra "inspeção" aponta para a indústria e o filho `e4.1.1` (consentimento,
retenção, propósito) aponta para vigilância; o meu mapa separa os dois em `e3` (fábrica) e `e10`
(câmera com pergunta), com atores e freios diferentes. "Tecnicamente mais simples" descreve uma
possibilidade, não uma mudança em alguém. *Prazo:* falha, sem referência; os meus pares usam o caso
Cognex e Keyence (`e3`, 2028) e o intervalo Carnaval 2019 → Smart Sampa 2024 encurtado pelo parque
de câmeras já instalado (`e10`, 2027). *Confiança:* calibrada.
Motivo: "contínua" é contradito pelo futures-wheel (`e2_A21`, acionada por gatilho) e pela minha
retroação `e4` (o custo por quadro impede a substituição); é o elo que liga `e4` dele à convergência
tripla de `e4.1.1`, e é o elo mais fraco da cadeia.

**`e5.1`** (2ª, `sinal: medio`, 2030, `confianca: baixa`): "Sistemas de processamento documental
combinam extração visual e interpretação semântica em uma etapa de revisão."
*Mecanismo:* não escrito. *Especificidade:* fraca; "sistemas de processamento documental" é o mesmo
sujeito de `e5`. *Regra de parada:* falha; `e5` já é extrair o campo direto da imagem, sem estágio
separado, e juntar extração e interpretação numa etapa é o mesmo efeito amadurecendo. *Prazo:*
falha, sem referência. *Confiança:* calibrada.
Motivo: a cadeia `e5` → `e5.1.1` fica inteira sem ele; os filhos de 2ª ordem do meu `e6` trocam de
objeto (`e6.1`, o erro muda de natureza; `e6.2`, a conferência humana muda), e é essa troca que a
regra de parada pede.

**`e6.1.1`** (3ª, `sinal: fraco`, 2031, `confianca: baixa`): "Fornecedores e equipes passam a
documentar evidências visuais e confirmação humana para ações executadas por agentes."
*Mecanismo:* não escrito. *Especificidade:* falha; "fornecedores e equipes" não nomeia ninguém.
*Causa solta (§3, regra 10):* falha como está; agentes que agem por API também precisariam de
registro e confirmação humana, então o efeito aconteceria sem a raiz 4.3. *Prazo:* falha, sem
referência. *Confiança:* calibrada.
Motivo: com o mecanismo do futures-wheel (`e1_28`: a imagem lida pode conter uma instrução; `e2_C20`:
por isso nenhuma ação sensível sem confirmação explícita), o efeito passa a depender da leitura por
imagem e passa no teste da causa solta.

---

## 3. Só no mapa do professor

Quarenta e oito efeitos. Para cada um: buraco (o recorte do aluno comportaria e não tem) ou recorte
(o recorte dele exclui de propósito), e o que ele ganharia ou perderia ao incluir.

O recorte dele inclui, por escrito, "acessibilidade, vigilância/privacidade, documentos e automação
visual", e não descarta subtema nenhum. Por isso quase tudo abaixo é buraco: 46 buracos e 2
recortes. Dez dos 46 dependem de evidência brasileira, que o recorte dele inclui "quando
sustentada" e cuja falta ele declara no item 5 da seção 7; estão marcados "Brasil".

### R1, a classe deixa de ser decidida no treino e passa a ser decidida na pergunta (14 sem par)

- **`e1.1`**, "O ativo de valor deixa de ser o dataset rotulado e passa a ser o conjunto de
  avaliação". Buraco. O `e1.1` dele descreve o trabalho que produz esse ativo (revisar casos-limite
  e erros) sem dizer que é ali que o valor passa a morar. Ganharia o mecanismo econômico do ramo.
- **`e1.1.1`**, contratos "passam a especificar taxa de falso positivo por conceito, não acurácia
  média". Buraco pequeno: é o "critério de auditoria" do `e1.1.1` dele, com dono (o contrato) e
  métrica.
- **`e1.2.1`**, "O trabalho de anotação distribuída encolhe em volume e sobe em exigência,
  concentrando a renda em menos pessoas" (2032, fora do horizonte, declarado). Buraco: o mapa dele
  não nomeia quem perde em nenhum ramo.
- **`e2.1`**, monitoramento ecológico e agrícola "troca amostragem manual por censo contínuo".
  Recorte: ecologia não está entre os quatro subtemas dele. Ganharia a categoria ecológica, que a
  roda dele não cobre.
- **`e2.1.1`**, órgãos ambientais "abrem disputa sobre quem homologa o modelo". Recorte, idem.
- **`e3`**, "Inspeção industrial deixa de esperar amostra de defeito e sobe linha nova com o defeito
  descrito em texto". Buraco: o resumo dele cita inspeção como uso, e `e3.1` e `e4.1` falam de
  inspeção sem dizer qual. Ganharia o ator (a fábrica), o número (adaptação zero-shot de 65,0% para
  85,1%) e a separação entre fábrica e vigilância que falta a `e4.1`.
- **`e3.1`**, "O inspetor humano deixa de olhar peça e passa a escrever e manter o texto que define o
  defeito". Buraco; é a versão com ator do `e3.1` dele.
- **`e3.2.1`**, a IATF 16949 ganha "cláusula de rastreabilidade de prompt equivalente à de calibração
  de instrumento". Buraco pequeno; nomeia a norma que o `e1.1.1` dele deixa genérica.
- **`e4`**, "O custo de inferência por quadro impede a substituição do detector fixo, e o vocabulário
  aberto se instala na fábrica de modelo, não na operação". **Buraco, o maior do confronto.** É a
  retroação da R1 e é o "contra-mapa" que o resumo dele anuncia ("modelos especializados, erros e
  governança podem manter a anotação e a validação como gargalos") sem transformá-lo em efeito. O
  futures-wheel chega ao mesmo ponto por dois caminhos (`e1_06`, o modelo aberto "vai para a sala de
  aula"; `e1_11`, os treinos especializados se multiplicam). Ganharia o freio que a prosa do §5 dele
  reconhece faltar ("caminhos em que a tecnologia não escala").
- **`e4.1`**, o trabalho em duas camadas, "o modelo aberto rotulando e o modelo pequeno rodando".
  Buraco; daria a `e1` e `e4` dele o formato que a adoção assume.
- **`e4.1.1`**, a vantagem competitiva "migra do dado proprietário para a escolha do vocabulário e do
  conjunto de teste". Buraco.
- **`e5`**, "A licença vira o gargalo". Buraco: o §3 dele cita "dependência de serviço" como limite e
  não deriva efeito. Perderia pouco ao não incluir: a base do meu `e5` é fonte secundária (seção 7).
- **`e5.1`**, uma linhagem sob licença permissiva "ocupa a faixa que a licença restrita deixou vaga".
  Buraco.
- **`e5.1.1`**, compras públicas brasileiras com execução local "acabam puxando modelo de peso
  permissivo de origem chinesa". Buraco, Brasil.

### R2, o documento deixa de ser convertido em texto e passa a ser lido como imagem (11 sem par)

- **`e6.1`**, "O erro muda de natureza, de caractere trocado detectável por dicionário para campo
  plausível inventado que passa em toda validação sintática". **Buraco.** A ideia está no texto dele
  ("OCR-free não significa erro-free", seção 4.3) e não virou efeito. É o mecanismo que faltava a
  `e5.1.1` dele: a conferência migra para exceções porque o erro deixou de ser pego por regra. O
  futures-wheel tem o mesmo efeito (`e1_24`).
- **`e6.1.1`**, setores auditados "mantêm o OCR determinístico como testemunha ao lado do modelo, e o
  custo do processo sobe". Buraco; é o efeito que o item 4 da seção 7 dele (causa alternativa) pede e
  não registra.
- **`e6.2.1`**, o cargo de digitador e conferente "some do organograma do BPO documental brasileiro e
  reaparece como analista de exceção, com quadro menor". Buraco, Brasil; é quem perde em `e5.1.1`
  dele.
- **`e7`**, "O formulário deixa de ser a forma canônica de coletar dado estruturado". Buraco, direto
  no público de mídia e interação.
- **`e7.1`**, serviços públicos e de crédito no Brasil "passam a oferecer mande a foto como caminho
  principal". Buraco, Brasil.
- **`e7.1.1`**, "O PDF perde a função de formato de entrega". Buraco pequeno.
- **`e7.2`**, "Quem projeta interação passa a desenhar a tela de correção do que a máquina leu como
  tela principal do fluxo, não como exceção". **Buraco.** É o efeito mais acionável para a turma, e o
  experimento dele (registrar erro, abstenção e necessidade de correção) já mede a matéria-prima.
  Ver pergunta 4.
- **`e8`**, "A imagem vira formato de compressão de contexto". Buraco; `sinal: fraco` no meu mapa, e
  o futures-wheel registra o contra-sinal (arXiv 2512.03643). Ganharia pouco.
- **`e8.1`**, memórias de agente guardam página renderizada, "e a busca textual sobre o acervo deixa
  de funcionar como antes". Idem.
- **`e9`**, "A exigência de dizer de que pixel saiu cada número segura a adoção onde há auditoria, e a
  leitura sem OCR entra primeiro onde ninguém confere". **Buraco**: é a retroação da R2. A
  "rastreabilidade da extração" está no "o que falta" da raiz 4.3 dele e não virou freio.
- **`e9.1.1`**, "O grounding espacial vira a diferença comercial entre modelos de documento".
  Buraco.

### R3, a câmera deixa de ter uma lista de alvos e passa a ter uma pergunta (14 sem par)

O mapa dele não tem esta raiz (seção 4). Do ramo, tem a consequência (`e4.1.1`), alcançada por
`e4.1`.

- **`e10`**, "Busca em vídeo por descrição em linguagem natural vira função padrão do sistema de
  câmeras". **Buraco**; é o pai que falta a `e4.1.1` dele. Sem ele, a disputa sobre "configuração dos
  prompts" chega por "inspeção contínua", que não nomeia a câmera de vigilância.
- **`e10.1`**, "O vigilante deixa de assistir parede de monitores e passa a escrever consultas e
  triar alertas". Buraco (quem muda de trabalho).
- **`e10.1.1`**, a vigilância privada "encolhe em posto fixo e cresce em central remota". Buraco
  (quem perde).
- **`e10.2`**, o vídeo que hoje se descarta "passa a ser consultado retroativamente". Buraco;
  parente do `e2.1` dele, no vídeo.
- **`e11`**, "A vigilância por descrição escapa da moldura jurídica escrita para biometria, porque
  camisa vermelha e mochila preta não são dado biométrico". **Buraco, e é o mecanismo que falta à
  convergência tripla de `e4.1.1`.** O dele diz que a disputa muda de lugar; este diz por quê.
- **`e11.1.1`**, "A ANPD passa a ser cobrada por registro de consultas [...] e descobre não ter
  instrumento para isso". Buraco, Brasil.
- **`e11.2`**, "Categorias proibidas na Europa, como inferir etnia ou emoção, voltam pela porta da
  descrição livre". Buraco; toca a segunda metade do `e1.1.1` dele pelo lado oposto (grupos
  selecionados, não invisíveis).
- **`e12`**, "O perfilamento por aparência substitui o perfilamento por identidade, e o erro deixa de
  ter vítima identificável". Buraco; o cenário indesejável dele descreve isto em prosa ("Pessoas
  afetadas têm pouca visibilidade sobre prompts, retenção ou contestação").
- **`e12.1`**, "A reparação individual deixa de funcionar como freio". Buraco.
- **`e13`**, "Cidades e varejo passam a comprar pergunta por mês em vez de câmera instalada". Buraco;
  a prosa do §5 dele lista custo como condição da vigilância, sem efeito.
- **`e13.1`**, prefeituras médias sem GPU "ficam com câmera que grava e não consulta". Buraco,
  Brasil.
- **`e14`**, "A evidência de que câmera não reduz crime desloca o argumento de venda da prevenção para
  a elucidação". Buraco, Brasil (estudo do CESeC sobre o Smart Sampa); é a retroação da R3.
- **`e14.1`**, o indicador de sucesso muda "de crime evitado para foragido localizado e caso
  apoiado". Buraco, Brasil.
- **`e14.1.1`**, "O debate público perde o eixo da eficácia". Buraco, Brasil.

### R4, a imagem parada deixa de ser arquivo opaco e vira base consultável (9 sem par)

- **`e15.1`**, "A privacidade por obscuridade acaba dentro de casa, e o comprovante, a senha na tela e
  o remédio ao fundo viram resultado de busca". Buraco; é o elo entre `e2` dele (consulta por
  descrição) e `e2.1.1` (embedding sensível), que hoje salta de "organizações indexam" para
  "políticas de retenção" sem passar por quem fica exposto.
- **`e15.2`**, divórcio, processo trabalhista e investigação "passam a pedir a consulta ao acervo em
  vez do acervo". Buraco.
- **`e16.1`**, quem projeta interface "passa a ter dois públicos com necessidades opostas". Buraco,
  direto no público da disciplina; o futures-wheel tem parente (`e1_35`, a imagem publicada passa a
  ter dois públicos).
- **`e16.1.1`**, "a acessibilidade vira argumento econômico antes de ser argumento moral". Buraco;
  liga o ramo de telas dele ao subtema de acessibilidade.
- **`e17`**, "Descrever o mundo para quem não enxerga sai do celular e vai para os óculos, com
  descrição contínua em vez de sob demanda". **Buraco dentro do escopo declarado.** Acessibilidade é
  um dos quatro subtemas dele; a roda não tem efeito sobre ela, e o tema aparece só na prosa do §5 e
  no wildcard. O meu `e17` tem `sinal: forte` (Be My Eyes por voz nos óculos do Meta, em 21
  mercados). Ganharia o efeito presente que dá chão ao wildcard dele, que é o meu `W1`.
- **`e17.1`**, "a pessoa cega passa a perguntar onde está o objeto em vez de receber a cena inteira".
  Buraco; daria forma de efeito à frase do §5 dele ("uma descrição útil depende da tarefa e da
  pessoa").
- **`e17.1.1`**, "O Brasil fica fora da primeira janela por ausência de lançamento e de idioma".
  Buraco, Brasil.
- **`e18`**, "A indexação retroativa de acervo grande não acontece por custo". **Buraco, e
  contradição com `e2.1` dele.** É a retroação da R4. Ver pergunta 2.
- **`e18.1`**, arquivos públicos, museus e jornais brasileiros "ficam com acervo não consultável
  enquanto plataformas consultam o delas". Buraco, Brasil (quem perde).

---

## 4. As raízes

O aluno respondeu, para cada raiz, três das quatro perguntas do §2: o que rompe, por que agora, o
que falta. **A pergunta 3, onde está na difusão, não está respondida com a escala para nenhuma das
três.** A seção 3 dele diz que alinhamento multimodal e detecção aberta "permanecem emergentes" e
que OCR e classes fixas são "contexto maduro", mas não põe cada raiz num estágio. Também falta, por
raiz, o "quem bloqueia" com ator nomeado (§3, regra 11), e o próprio texto registra a falta: "O YAML
não expressa atores que resistem, distribuição de custos, diferenças entre setores nem caminhos em
que a tecnologia não escala." O verificador conta raízes (3, igual ao frontmatter); não aplica o
critério.

### Raiz 4.1, "Categorias visuais especificadas por linguagem"

- **Rompe o quê.** "O pressuposto de que cada aplicação precisa pré-definir e treinar uma lista
  fechada de categorias para cada tarefa." Passa; é a mesma ruptura da minha R1.
- **Por que agora.** Respondido com CLIP (2021) e Grounding DINO (2023). Não passa como está escrito:
  a pergunta do §2 é "por que agora, e não há cinco anos?", e o CLIP é de cinco anos atrás. O meu
  mapa responde com três pré-condições que só existem juntas desde o fim de 2025 (o modelo que
  devolve todas as instâncias de um conceito, com identidade; 4 milhões de conceitos com negativos
  difíceis; a descida para a borda no mesmo ano). A diferença decorre de ele ter deixado o SAM 3 de
  fora por não conseguir verificá-lo (seção 12 dele), escolha declarada.
- **Difusão.** Não declarada. Pelos dados dos mapas: adoção precoce (padrão de rotulagem automática
  no Roboflow, integrado na Ultralytics, em produto de consumo do Meta). Emergente.
- **O que falta.** Bem listado ("desempenho previsível em conceitos raros, expressões relacionais,
  idiomas e ambientes reais; custos compatíveis; protocolos de avaliação e modos seguros de
  abstenção"). Coincide com o meu (custo, conceito subjetivo, detector de alucinação) e com o
  futures-wheel (cauda longa, inglês, abstenção).
- **Veredito: raiz.** Com o "por que agora" a refazer.

### Raiz 4.2, "Segmentação promptável em imagens e vídeo"

- **Rompe o quê.** "A segmentação como tarefa rigidamente treinada para classes e dados específicos,
  movendo parte da especificação para prompts, pontos ou regiões indicadas pelo usuário." Não passa:
  SAM e SAM 2 segmentam sem classe, por ponto, caixa ou máscara; fazem a mesma tarefa de anotação,
  mais rápido. É melhoria sustentadora, e o meu mapa a recusou como raiz por isso (4.0: "Vira efeito,
  não raiz"). A parte que seria ruptura, segmentar por conceito escrito, já é a raiz 4.1. O próprio
  "o que falta" dele diz isso: "A segmentação promptável não garante compreensão semântica
  completa."
- **Por que agora.** SAM (abril de 2023) e SAM 2 (2024). Passa no calendário.
- **Difusão.** Não declarada. No nicho de anotação, o meu mapa registra o SAM 1 como padrão de
  pré-rotulagem em plataforma cerca de dois anos depois do lançamento; e o futures-wheel registra
  segmentação em produto de consumo (`e2_A23`). No nicho, perto de maioria.
- **O que falta.** Listado (objetos pequenos e oclusos, continuidade temporal, custo, validação).
- **Teste da raiz que não acontece (§6.4).** Se a 4.2 não acontecer, `e3.1.1` continua de pé (é o
  `e1.1` dele, na 4.1) e `e4` também (no meu mapa, rastrear por descrição está na R1). Sobra `e3` e
  `e3.1`, que estão na seção 2. A raiz não sustenta efeito que a 4.1 não sustente.
- **Veredito: efeito.** Recusada como raiz; os efeitos dela pertencem à 4.1 ou são contexto.

### Raiz 4.3, "Compreensão visual de documentos e telas"

- **Rompe o quê.** "A dependência de pipeline OCR separado seguido por interpretação textual, ou de
  templates fixos para cada formato." Passa; é a minha R2.
- **Por que agora.** Respondido com Donut (2021) e "modelos multimodais". Não passa como está
  escrito, pelo mesmo motivo da 4.1: o meu mapa registra que o Donut "provou o conceito em 2021 e não
  pegou, porque exigia treinar por domínio". O que mudou em 2025 (VLM generalista com peso
  permissivo e OCR em 32 idiomas; a página como pixel custando menos token que como texto; o preço
  por token igual para texto e imagem, no futures-wheel) não está na resposta.
- **Difusão.** Não declarada. A seção 3 dele diz que o OCR-free "convive com tecnologias maduras, não
  as substituiu". Pelo meu mapa: produto de nicho passando a adoção precoce.
- **O que falta.** Bem listado; "rastreabilidade da extração" é a minha "prova de leitura" (`e9.1`).
- **Veredito: raiz.** Com uma ressalva: a metade "telas" (`e6`, `e6.1`, `e6.1.1`) tem outro ator (o
  agente que opera software) e outro bloqueador (o sistema operacional, os termos de uso). Se a parte
  de documentos não acontecer, a de telas continua. Pelo teste do §6.4, são duas raízes numa; o meu
  mapa teve o mesmo problema e o registrou como escolha discutível.

### As raízes que os outros dois mapas têm e este não tem

- **A câmera com uma pergunta** (minha R3; o ramo mais denso do futures-wheel, `e1_16` a `e1_21`).
  O recorte dele inclui vigilância, e a prosa diz que "o efeito de vigilância depende de implantação,
  custo, autorização e política". Na roda, a vigilância só aparece no fim de uma cadeia que começa em
  segmentação (`e4` → `e4.1` → `e4.1.1`). As três raízes dele são técnicas (categoria, segmentação,
  documento); as minhas quatro são deslocamentos com dono. Ver pergunta 3.
- **A imagem parada vira base consultável** (minha R4). Está parcialmente dentro da 4.1 dele, na
  cadeia `e2` → `e2.1` → `e2.1.1`, sem o efeito sobre quem fica exposto (`e15.1`).

---

## 5. A seção 7 dele contra o §6 meu

### O que ele derrubou e eu mantive

A seção 7 dele não remove nem rebaixa nenhum efeito identificado por `id`. Há uma alteração
declarada e três dúvidas sem alteração.

- **Item 2, "Adoção acelerada".** A cadeia "modelo → indexação de todo acervo → novas regras de
  privacidade em 2031" (`e2` → `e2.1` → `e2.1.1`): "Reduzimos a confiança dos efeitos mais distantes
  a baixa." Sem o valor anterior. No meu par, `e15` ficou em `alta` e `e15.1` em `media`; só
  `e15.1.1` está em `baixa`. Mantive `e15` alto porque o produto já está embarcado; ele rebaixou sem
  artefato contrário.
- **Item 4, "Causa alternativa".** "Automação de documentos pode se ampliar por OCR melhor, templates
  e APIs, sem modelos OCR-free." É o teste da causa solta aplicado à raiz 4.3, e é mais duro que o
  meu. Eu mantive `e6` em `confianca: alta`, com a justificativa da razão 2 do meu pré-mortem ("o
  pipeline técnico já está trocado em quem não audita"). Ele manteve `e5` em `media` e não alterou
  nada.
- **Item 3, "Disrupção que pode falhar".** Diz que a segmentação promptável pode continuar sendo
  assistência especializada. Manteve a raiz 4.2. Eu já a tinha recusado antes de chegar ao §6 (ver
  abaixo).
- **Item 1, "Extrapolação linear".** "Supor que mais conceitos detectáveis hoje resultará em
  compreensão confiável de qualquer cena é extrapolação. A roda reduz a afirmação a consultas
  flexíveis e aplicações delimitadas." Mesmo movimento que o meu 7.2 fez ao remover "Toda imagem vira
  dado estruturado por padrão"; o dele corta o enquadramento, o meu cortou um efeito com nome.

### O que eu derrubei e ele manteve

- **SAM 1 e SAM 2 como raiz**, recusados na 4.0 do meu mapa como melhoria sustentadora, contra a
  **raiz 4.2 dele**, mantida (seção 4).
- **"Toda imagem vira dado estruturado por padrão"**, removido do meu mapa como tese escrita em forma
  de efeito e partido entre `e15` e `e18`, contra **`e2.1` dele** ("Organizações passam a indexar mais
  acervos visuais"), mantido.
- **"Surge a profissão de curador de vocabulário visual"**, removido por ser o efeito genérico que a
  skill proíbe sem ator, e reaproveitado em `e3.1` com o inspetor de fábrica nomeado, contra **`e3.1.1`
  dele** ("A autoria [...] se desloca parcialmente para quem escolhe prompts e valida resultados"),
  sem ator. O item 3 da seção 7 dele fala em "mudança de profissão" sem dizer qual.
- **"Reguladores criam uma categoria nova de vigilância semântica"**, removido por genérico e
  substituído por `e11.1` e `e11.1.1` (ANPD, registro de consultas), contra **`e2.1.1` dele**
  ("Políticas de retenção e acesso precisam tratar embeddings..."): tem objeto (o embedding), não tem
  ator (políticas de quem?).
- **`e15.1.1`, prazo 2031 → 2033**, fora do horizonte e declarado, contra **`e2.1.1` dele em 2031**,
  que só teve a confiança rebaixada.
- **`e1` e `e10`, prazo 2026 → 2027 por classe de referência.** O `e1` dele já estava em 2027, sem
  classe. Mesmo ano, por motivos diferentes.

Um caso no sentido oposto: **`e16`, `confianca: alta → media`** no meu §6 (20,6% de sucesso no
OSWorld 2.0 não sustenta a escala). O `e6` dele nasceu em `baixa` e `sinal: fraco`. Ali ele foi mais
cauteloso desde o começo.

### O que a seção 7 dele tem e o meu §6 não tem

- **O superlativo do tema como risco (item 6).** "Vocabulário aberto é frequentemente apresentado
  como qualquer coisa. A expressão é relativa à taxonomia fixa." A seção 8 dele repete: "foi
  necessário conter a formulação enganosa ver qualquer coisa". O meu §6 não questiona o título do
  tema; o futures-wheel questiona ("A leitura fácil do tema não sobrevive inteira à evidência").
- **O viés do método de busca (item 5).** O documento "pode privilegiar novidades de laboratórios e
  demos públicas porque são mais fáceis de localizar do que implantações silenciosas, falhas e
  experiências de usuários brasileiros". O meu 7.6 nomeia o viés do gosto (a convergência de que eu
  gosto) e o peso do Brasil, no sentido oposto: eu disse que pesei demais a vigilância brasileira;
  ele diz que lhe faltou o Brasil.

### O que a seção 7 dele não fez

- **Registro de alterações.** A skill pede, por `id`, o valor antes e o depois, e pelo menos um
  efeito rebaixado ou removido por raiz. Nenhum item da seção 7 cita um `id`; a única alteração
  (item 2) não tem valor anterior.
- **Pré-mortem.** Não há "é 2031 e o mapa se mostrou errado; por quê". O item 3 cobre a raiz 4.2; o
  item 4, parte da 4.3; a 4.1 não tem.
- **Suposições escondidas.** Não há lista. As que o mapa assume sem dizer incluem custo de GPU e
  energia estável e a continuidade do acesso aos modelos abertos (a licença do SAM 3 exige aprovação
  de acesso, segundo a fonte que o meu mapa usou).
- **Retroação por raiz.** Nenhuma das três raízes tem efeito que freie a própria disrupção; o
  parágrafo depois do YAML admite. O único freio da roda está dentro da frase de `e6.1`.

### O que o verificador mostrou

O verificador deu `RESULTADO: ok`: 18/18 campos, 12/12 títulos, três raízes, contadores iguais ao
frontmatter (6/6/6), nenhum prazo além do horizonte, e a confiança caindo com a ordem (1ª: 0 altas,
4 médias, 2 baixas; 2ª: 0, 1, 5; 3ª: 0, 0, 6). Cinco coisas ele não mede e este confronto encontrou:

1. **Prazo pela posição.** "0 prazos além de 2031" é verdade, e os seis efeitos de 3ª ordem estão
   todos exatamente em 2031; todo filho está um ou dois anos depois do pai. No meu mapa há filhos no
   mesmo ano do pai (`e6.1` e `e6`, 2027; `e14.1` e `e14`, 2028), porque o prazo vem da referência e
   não da árvore.
2. **Sinal e confiança uniformes na 3ª ordem.** Seis `fraco`, seis `baixa`. Passa na checagem de
   calibração e não informa nada sobre cada efeito. Na 1ª ordem o `sinal` varia (3 `forte`, 2
   `medio`, 1 `fraco`), o que mostra que ali ele foi atribuído efeito a efeito.
3. **Classe de referência.** O verificador não procura; não há nenhuma.
4. **Links.** O verificador rodou sem `--links`. Conferi os 12 links da seção 11 em 13/10/2026: os
   12 respondem (HTTP 200), o que bate com `fontes: 12`.
5. **Valor do slug.** O verificador confere que o campo existe, não o valor. O frontmatter dele traz
   `maquinas-veem-visao-vocabulario-aberto`; o slug do tema é
   `maquinas-que-veem-qualquer-coisa-visao-de-vocabulario-aberto`.

---

## 6. Cinco perguntas para a aula

1. **(ancorada em `e1`)** O mapa diz que equipes passam a testar categorias novas sem treinar um
   classificador para cada conceito. Uma medição citada pelo futures-wheel encontrou rotulagem
   automática com F1 de 0,785 em objetos comuns e de 0,215 na cauda longa. Escolham uma categoria do
   campus ou da cidade que nenhum conjunto de dados conhecido tem: o modelo aberto a encontraria? Se
   não encontra, para quem o ganho de `e1` existe?
2. **(ancorada em `e2.1`)** O mapa diz que organizações passam a indexar mais acervos visuais. Um
   segundo mapa diz que a indexação de acervo grande e antigo não acontece, porque o custo cresce com
   o tamanho do acervo e não com o uso; um terceiro diz que acontece, com uma camada de metadados que
   ninguém curou e que vira a única porta de entrada. Pensem num acervo concreto (as fotos de um
   jornal local, de uma biblioteca, dos eventos do CIn): quem pagaria a indexação, e quem decidiria o
   que fica sem nome?
3. **(ancorada em `e4.1.1`)** O mapa diz que a disputa sobre câmeras passa a acompanhar a
   configuração dos prompts. A LGPD e o PL 2338 tratam com mais rigor o dado biométrico; uma busca por
   "pessoa de moletom cinza com mochila preta" não usa dado biométrico. Se alguém filmado quiser
   contestar, o que pede: a gravação, a frase digitada ou a lista de quem a frase selecionou? Quem
   guarda cada uma dessas três coisas hoje?
4. **(ancorada em `e5.1.1`)** O mapa diz que a conferência humana passa a validar exceções. Se o erro
   do modelo é um campo plausível inventado, e não uma letra trocada, como quem confere sabe que um
   campo é exceção? Esbocem a tela de conferência: o que ela mostra (o recorte da imagem, a
   confiança, uma segunda leitura) para que validar não vire clicar em "ok"?
5. **(ancorada em `e6.1.1`)** O mapa diz que fornecedores passam a documentar confirmação humana para
   ações de agentes. Se o agente lê a tela como imagem, um cartaz, um rodapé ou uma camiseta podem
   trazer um texto que ele toma como instrução. A confirmação humana deveria valer para toda ação do
   agente, ou só para as que partem do que ele leu numa imagem? Quem traça essa fronteira?

---

## 7. O que este confronto não cobre

- **Fontes não reabertas.** Não reabri nenhuma fonte do aluno nem dos dois mapas independentes.
  Conferi apenas que os 12 links do aluno respondem. Os números do futures-wheel citados nas seções
  1, 1b e 6 (F1 0,785 e 0,215; US$ 1,18 contra US$ 124.092,54; 64% de sucesso de injeção por imagem;
  +27,65 pontos em português; os produtos que "já operam com SAM 3") vêm do documento dele, que
  declara ter aberto as fontes; não os conferi.
- **Independência das convergências.** O meu mapa e o futures-wheel foram feitos com um dia de
  diferença, sobre o mesmo material (documentação do SAM 3, Smart Sampa, AI Act); a convergência
  entre os dois é menos independente do que parece. O mapa do aluno não usou esse material, e por
  isso as oito convergências triplas valem mais pelo lado dele.
- **O critério de "em comum" é meu.** Contei `e1.1.1` como comum com par parcial (`e3.2`) e `e4.1`
  como só do aluno; outro leitor poderia contar 11 ou 13. As contagens do frontmatter seguem a regra
  escrita no início.
- **Onde o meu mapa também falha nos testes que apliquei.** O meu `e16` está pendurado numa raiz que o
  meu próprio §6 apontou como errada, o mesmo problema que apontei na raiz 4.3 dele. O meu `e5` se
  apoia na licença do SAM 3 lida na documentação da Ultralytics, não no card oficial (seção 8 do meu
  mapa). A classe de referência do meu `e17` (vendas de óculos) vem de reportagem que não abriu. O
  meu mapa também não tem segurança (`e1_28`) nem idioma (`e1_39`) como efeito, os mesmos buracos que
  apontei no dele na subseção 1b. E a convergência "o objeto auditado passa a ser a pergunta" é a que
  o meu 7.6 declara como viés do autor; a convergência do `e4.1.1` dele reforça o achado, mas não
  testa o caminho contrário, que nenhum dos três mapas tem.
- **Diferença de briefing e de data.** Público e zona diferentes, e um mês entre os mapas (ressalva
  no início). Parte do "só do professor" é efeito sobre quem projeta mídia, público que o dele não
  tinha; parte das diferenças de "por que agora" vem do SAM 3, que ele deixou de fora por não
  conseguir verificá-lo.
- **Anexo do aluno.** Li as seções 1 a 12 inteiras. A seção 12 descreve a entrevista e as buscas;
  não traz a saída do verificador, que veio em arquivo separado.
