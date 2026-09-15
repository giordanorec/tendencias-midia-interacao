---
titulo: "Voz e som gerativos"
tipo: resumo-de-tendencia
disciplina: "CIN0055 Tendências em Mídia e Interação 2026.2"
tema: "13 de 19"
familia: "Percepção e mídia sintética"
zona: "Percepção e mídia sintética"
skill: futurizacao-futures-wheel
autor: grec
horizonte: 2031
recorte: "global, com nota sobre o Brasil"
data: 2026-09-12
mapa_completo: "futures-wheel-voz-e-som-gerativos.md"
---

# Voz e som gerativos

**Rodada com teto de 15 subagentes, dos quais 14 foram usados.** A skill prevê um expansor por ramo;
aqui os ramos foram agrupados por tema em três lotes de 2ª ordem, cada lote marcou os **cinco ramos mais
férteis**, e a 3ª ordem saiu só sobre esses quinze (TMI-0028, TMI-0050). Por isso, dos 132 efeitos de 2ª
ordem, **117 ficaram sem filhos**: o orçamento foi para onde rendia profundidade. A
Fase 8 (infográficos) foi pulada. O mapa completo, com 243 efeitos (50 + 132 + 61),
conexões cruzadas, wildcards e 325 fontes (253 abertas por inteiro), está em
`futures-wheel-voz-e-som-gerativos.md` e no HTML de mesmo nome.

## A inovação

O enunciado anuncia duas rupturas: **a voz vira a interface primária**, local, conversacional e com
qualidade humana; e **a música passa a ser gerada inteira** a partir de uma descrição, com um sinal fraco
(a faixa gerada não entregaria os canais separados). As cinco frentes (171 fontes, 153 abertas) testaram as
duas contra os critérios declarados de antemão e **corrigiram ambas**, chegando por caminhos independentes
às mesmas correções.

**A voz como interface já existe, mas na nuvem.** Desde 08/07/2026 o modo de voz padrão do ChatGPT é
full-duplex e aceita interrupção. A OpenAI declara mais de 150 milhões de pessoas usando Voz e Ditado; o
número é da empresa e não informa uso ativo. **Sair da nuvem continua na fronteira**: nenhum produto de
massa conversa em full-duplex dentro do aparelho. O modelo aberto que faz isso acerta 35,4% das
interrupções com 2,9 s de latência no desafio HumDial (ICASSP 2026), e em português espontâneo o
reconhecimento erra 46% das palavras, de 3 a 4 vezes mais nas frases curtas, que é o formato dos comandos.
A arquitetura que se impõe é **ouvido e boca locais, cérebro remoto**.

**A música gerada é massa como criação e como oferta, não como escuta.** Faixas geradas passaram de 50% dos
envios diários à Deezer (cerca de 90 mil por dia) e ficam entre 1% e 3% dos streams, até 85% deles
fraudulentos. Os "100 milhões" da Suno são quem já usou, pela conta da própria empresa; 2 milhões pagam.
**O sinal fraco caiu**: o Suno Studio exporta stems em áudio e MIDI desde 25/09/2025. O limite migrou da
técnica para o **contrato**: a Udio desligou download e stems depois do acordo com a Universal, e a Suno
passou a limitar downloads por plano.

**A evidência também põe na 1ª ordem uma ruptura que o enunciado deixava para a 3ª: a voz deixou de valer
como prova de identidade.** Clones feitos com ferramenta de consumo são julgados humanos em 70% dos casos,
contra 72% das vozes reais. Nenhuma das nove marcas d'água de áudio testadas resiste a todos os ataques. A
operadora Verizon descontinuou a senha por voz.

## A tese

Até 2031, voz e som gerativos deixam de romper pelo que soam, porque o clone já passa por humano e a música gerada já satura os canais, e passam a romper pelo registro: a prova de quem fala e de quem fez migra do sinal para contas, canais autenticados e contratos mantidos por poucos fornecedores, enquanto o modelo aberto e local fica fora de todo regime e o Brasil recebe o ataque pronto em português e a defesa depois.

## Os 50 efeitos de 1ª ordem

| id | Efeito | STEEP | Prob. | Prazo |
|---|---|---|---|---|
| `e1_01` | O modelo de fala vira infraestrutura do sistema operacional, e não do app — e a qualidade dessa infraestrutura passa a ser estratificada… *(óbvio)* | Tecnológico | alta | até 2028 |
| `e1_02` | A arquitetura que se impõe é híbrida — 'ouvido e boca rápidos, cérebro remoto' — e não 'tudo no dispositivo' *(óbvio)* | Tecnológico | alta | até 2028 |
| `e1_03` | A síntese de voz pequena vira commodity aberta e passa a caber em qualquer interface, inclusive no navegador *(óbvio)* | Tecnológico | alta | até 2028 |
| `e1_04` | O custo deixa de ser o argumento para tirar a voz da nuvem; o argumento passa a ser privacidade, operação offline e dado que não sai do… | Econômico | média | até 2028 |
| `e1_05` | A pilha aberta de voz e áudio, da qual a voz local depende, mostra fragilidade de manutenção e de licença | Tecnológico | média | até 2028 |
| `e1_06` | Com o full-duplex virando padrão de massa, o problema de projeto da conversa por voz deixa de ser latência e passa a ser saber quando calar *(óbvio)* | Tecnológico | alta | até 2028 |
| `e1_07` | Agentes de voz em ambiente compartilhado passam a responder a quem não falou com eles, o que reabre o problema do endereçamento | Tecnológico | alta | até 2028 |
| `e1_08` | A paridade com a voz humana vale para a frase isolada, não para a conversa: a costura aparece com contexto e com o passar dos turnos | Tecnológico | alta | até 2028 |
| `e1_09` | No atendimento corporativo, a voz ultrapassa o texto como canal do agente de IA e muda a unidade de cobrança para a resolução *(óbvio)* | Econômico | alta | até 2028 |
| `e1_10` | A voz conversacional produz vínculo afetivo e sinais de dependência concentrados numa fração de usuários pesados *(óbvio)* | Social | alta | até 2028 |
| `e1_11` | Falar com a máquina em público continua sendo barreira, e os produtos começam a contornar o constrangimento em vez de esperar que ele passe *(óbvio)* | Social | média | até 2028 |
| `e1_12` | A clonagem de voz com ferramenta de consumo fica indistinguível para o ouvinte comum, e a barreira técnica da falsificação praticamente some *(óbvio)* | Tecnológico | alta | até 2028 |
| `e1_13` | Instituições começam a abandonar a voz como senha *(óbvio)* | Tecnológico | alta | até 2028 |
| `e1_14` | A fraude com voz sintética cresce como fração da fraude, com números de fornecedores muito acima dos dados oficiais *(óbvio)* | Econômico | alta | até 2028 |
| `e1_15` | Não existe detector universal de voz sintética, e a detecção se desloca do sinal acústico para o comportamento na conversa e para APIs de… *(óbvio)* | Tecnológico | alta | até 2028 |
| `e1_16` | A marca d'água de áudio não sustenta rotulagem obrigatória de conteúdo sintético: cai diante de manipulações simples e só é lida dentro do… *(óbvio)* | Político | alta | até 2028 |
| `e1_17` | A escola perde o áudio gravado em casa como evidência de proficiência oral e devolve a avaliação ao presencial e síncrono *(óbvio)* | Social | média | 2028-2031 |
| `e1_18` | A maioria dos envios diários às plataformas de música passa a ser sintética *(óbvio)* | Econômico | alta | até 2028 |
| `e1_19` | A escuta não acompanha a oferta, e o principal uso econômico imediato da faixa gerada é a fraude de royalties | Econômico | alta | até 2028 |
| `e1_20` | A curadoria algorítmica, e não a lei, vira a barreira real à música sintética: plataformas cortam recomendação, monetização e permanência *(óbvio)* | Político | alta | até 2028 |
| `e1_21` | Rotular pela identidade do artista, e não pelo método de criação, cria incentivo a pôr rosto e nome humanos em música gerada | Social | média | até 2028 |
| `e1_22` | A detecção de música sintética vira produto dos dois lados: ativo patenteado das plataformas e dos próprios geradores, e serviço de evasão… *(óbvio)* | Econômico | alta | até 2028 |
| `e1_23` | O podcast repete o padrão da música: a voz sintética conversacional vira spam de catálogo e a oferta automatizada ultrapassa a humana nos… *(óbvio)* | Econômico | alta | até 2028 |
| `e1_24` | Na música funcional — dormir, estudar, foco, ambiente comercial — a substituição por faixa gerada acontece sem ruptura perceptível, porque… *(óbvio)* | Econômico | alta | até 2028 |
| `e1_25` | Com faixas sintéticas subindo uma escada de paradas cada vez maiores, definir o que é elegível para uma parada vira decisão regulatória, e… | Político | média | até 2028 |
| `e1_26` | O gerador de música absorve a estação de trabalho, e a música gerada passa a sair como sessão editável, não como arquivo único *(óbvio)* | Tecnológico | alta | até 2028 |
| `e1_27` | A portabilidade e a editabilidade da música gerada passam a ser decididas por contrato de licença, não pela técnica | Econômico | alta | até 2028 |
| `e1_28` | Enquanto a editabilidade regride no comercial licenciado, ela avança no aberto e local, fora do alcance de acordos e de detectores de… | Tecnológico | média | até 2028 |
| `e1_29` | A gravadora passa de adversária a sócia do modelo: a música gerada comercial entra na fase de treino licenciado com repasse de receita *(óbvio)* | Econômico | alta | até 2028 |
| `e1_30` | A IA de áudio que os músicos adotam em massa é a de separação e fluxo de trabalho; a geração inteira entra como esboço que some do produto… | Econômico | média | até 2028 |
| `e1_31` | O prompt de texto se mostra insuficiente para intenção musical temporal, e as interfaces de geração migram para edição por trecho, por… *(óbvio)* | Tecnológico | alta | até 2028 |
| `e1_32` | Na Europa, a licença passa a ser condição de operação para gerador de música *(óbvio)* | Político | alta | até 2028 |
| `e1_33` | Filtros de direitos baseados no texto do pedido não impedem a replicação de obras protegidas, porque o modelo recupera a obra memorizada… | Tecnológico | alta | até 2028 |
| `e1_34` | A voz vira ativo licenciável, com consentimento e preço próprios, em vez de simplesmente proibida ou livre *(óbvio)* | Econômico | alta | até 2028 |
| `e1_35` | O dano econômico da música gerada cai na camada do 'meio' — músico de sessão, trilha de biblioteca, vinheta, demo —, que o direito autoral… | Econômico | média | 2028-2031 |
| `e1_36` | Audiolivro e dublagem de cauda longa passam a ser sintéticos, e a tradução fala-para-fala começa a preservar a voz de quem fala *(óbvio)* | Econômico | alta | até 2028 |
| `e1_37` | O clone da própria voz vira a voz cotidiana de quem a perdeu *(óbvio)* | Social | alta | até 2028 |
| `e1_38` | A voz como interface primária exclui quem fala diferente, exceto onde alguém coletou centenas de horas de fala atípica *(óbvio)* | Social | alta | 2028-2031 |
| `e1_39` | A música gerada a partir de descrição abre a composição para quem não ouve ou não pode tocar | Social | média | 2028-2031 |
| `e1_40` | A música gerada passa a ser instrumento tocável em tempo real no próprio laptop, e não arquivo pronto — o caminho para trilha adaptativa em… | Tecnológico | média | 2028-2031 |
| `e1_41` | A canção gerada vira recurso embutido em assistente e em mensagem, e não lançamento | Social | alta | até 2028 |
| `e1_42` | O produtor passa a projetar personas, sistemas e narrativas, e a autoria híbrida ganha contrato de gravadora *(óbvio)* | Econômico | média | até 2028 |
| `e1_43` | Sem régua automática confiável de qualidade musical, a decisão sobre qual modelo ou faixa é melhor volta à escuta humana e a arenas de… | Tecnológico | média | até 2028 |
| `e1_44` | No Brasil, a voz como interface esbarra no reconhecimento do português falado, não na síntese — e o pior caso é justamente o comando curto | Tecnológico | alta | até 2028 |
| `e1_45` | O áudio de WhatsApp perde a presunção de autenticidade no país que mais usa mensagem de voz, pela via da fraude *(óbvio)* | Social | alta | até 2028 |
| `e1_46` | A regra eleitoral brasileira inclui a voz na definição de deepfake, mas deixa zona cinzenta para o áudio falso que não se apresenta como… | Político | alta | até 2028 |
| `e1_47` | A dublagem brasileira se organiza para obter reserva legal de trabalho humano, e não apenas rótulo | Político | média | 2028-2031 |
| `e1_48` | A música gerada tocada comercialmente pode passar a pagar execução pública no Brasil, o que reduz a vantagem de custo da IA na ambientação | Econômico | média | 2028-2031 |
| `e1_49` | No Brasil, a música sintética chega à parada geral pela voz clonada de artistas nacionais conhecidos, e não por persona declarada. 'Sina de… | Social | média | até 2028 |
| `e1_50` | Uma empresa de origem brasileira ocupa a via oposta à da Suno para a editabilidade: parte da separação e da prática do músico e só depois… | Econômico | alta | até 2028 |

Os 9 temas que organizam a 1ª ordem, e pelos quais os lotes de expansão foram formados: **A voz sai da nuvem em camadas** (`e1_01` a `e1_05`); **Conversa full-duplex e o agente de voz** (`e1_06` a `e1_11`); **A voz deixa de ser prova** (`e1_12` a `e1_17`); **Oferta sintética satura o canal** (`e1_18` a `e1_25`); **Editabilidade decidida por contrato** (`e1_26` a `e1_31`); **Licença, direito e trabalho da voz e do som** (`e1_32` a `e1_36`); **Acessibilidade: a voz e a música de quem não tinha** (`e1_37` a `e1_39`); **Música como sistema, recurso e instrumento** (`e1_40` a `e1_43`); **Brasil** (`e1_44` a `e1_50`).

## Os 5 mais impactantes

1. **`e1_12` — A clonagem de voz com ferramenta de consumo fica indistinguível para o ouvinte comum.** É a terceira raiz e a origem da maior cascata da árvore: alimenta fraude (e1_14, e1_45), o fim da voz como senha (e1_13), a migração da confiança para o canal (e2_A32) e dois ciclos reforçadores (fl2, fl9). Clones julgados humanos em 70% dos casos contra 72% das vozes reais, com modelos abertos que clonam em português com 3 a 10 segundos.

2. **`e1_19` — A escuta não acompanha a oferta, e o principal uso econômico imediato da faixa gerada é a fraude de royalties.** Muda a leitura da R2 de 'música que disputa audiência' para 'faixa que disputa o bolo de royalties', e sustenta o ciclo fl1, os limiares de pagamento (e2_B04), a distribuidora como ponto de controle (e2_B06) e a vulnerabilidade sv5 (a execução contável como base de remuneração).

3. **`e1_27` — A portabilidade e a editabilidade da música gerada passam a ser decididas por contrato de licença, não pela técnica.** É a reformulação da R2 e do sinal fraco; organiza o ramo B inteiro (cota de download, aposentadoria de modelos, remix confinado, critério de 'serviço autorizado') e a vulnerabilidade sv1, que depende de poucas gravadoras, poucos geradores e decisões judiciais não definitivas.

4. **`e2_A32` — A confiança numa ligação sai do timbre e vai para o canal.** É o ponto de convergência mais amplo do mapa (a prova migra do sinal para o registro), já em curso em escala: 35 bilhões de chamadas autenticadas pelo Origem Verificada no Brasil em 2025. Dele saem quatro efeitos de 3ª ordem (app do banco como autenticador, golpe contra o 'ligue de volta', autenticação presa a ecossistema, selo que depende da versão do Android).

5. **`e2_B12` — O detector de uma única plataforma vira árbitro de fato para paradas, sociedades de gestão e distribuidoras.** Concentra num classificador privado a decisão sobre o que conta como música humana, com erro que se propaga a todos os produtos que o licenciam (e2_B13, e3_T2_01) e cegueira declarada para modelos abertos (e2_B29); sustenta o ciclo fl7 e a vulnerabilidade sv2.

**O que os cinco têm em comum.** Nenhum trata de a voz ou a música soarem melhor. Os cinco apontam para o lugar onde a pergunta *isto é humano, é quem diz ser?* passa a ser respondida, e esse lugar não é o som. Numa ligação, a resposta passa a vir do canal autenticado (`e2_A32`), porque o timbre já não distingue (`e1_12`). Numa faixa, vem do detector de uma única plataforma, que outras paradas e distribuidoras adotam (`e2_B12`), e do contrato que decide o que pode ser exportado e editado (`e1_27`). E a economia que financia a oferta é, antes de tudo, a disputa pelos royalties (`e1_19`). O que o mapa descreve é **a prova saindo do sinal e entrando num registro que só existe dentro de um contrato ou de um ecossistema**, com o modelo aberto e local fora de todos eles.

**Os 5 mais surpreendentes**: `e1_33` filtros de direitos baseados no texto do pedido não impedem a replicação de obras protegidas; `e1_44` no Brasil, a voz como interface esbarra no reconhecimento do português falado, não na síntese, e o pior caso é o comando curto; `e2_C25` a música feita para uma conversa não gera execução, stream nem parada; `e3_T1_13` o primeiro número público sobre tentativas de clonar candidatos brasileiros virá de um único fornecedor e medirá deslocamento, não incidência; `e3_T2_10` a regra de parada premia a voz principal humana e empurra a IA para o coro e o apoio.

**Distribuição.** Econômico 34% → 30% → 33% e Político 12% → 21% → 30% da 1ª à 3ª ordem; Tecnológico 34% → 28% → 23%; Social 20% → 21% → 15%. **A categoria Ecológica está vazia nas três ordens**, e isso não é descuido: nenhum candidato terminou em consequência sobre um meio físico, só em custo, fraude ou contrato, e nenhuma fonte do corpus mede energia de geração de áudio (TMI-0083). 76 dos 243 efeitos são óbvios depois da auditoria (TMI-0061), numa proporção que cai de uma ordem para a seguinte. 6 ficam fora da janela de 2031 (`e2_A44`, `e2_B19`, `e2_C12`, `e2_C24`, `e3_T1_03`, `e3_T2_20`).

## Wildcards

12 cenários de baixa probabilidade e alto impacto: 4 positivos, 5 negativos e 3 ambíguos.

- **w1 · O nº 1 que só se descobre sintético depois** (ambíguo). Entre 2027 e 2030, uma faixa com voz principal gerada, lançada sob nome e rosto de uma pessoa real, chega ao nº 1 da Billboard Hot 100 ou de uma parada oficial da rede IFPI. Semanas depois, a origem aparece: o classificador do…
- **w2 · O primeiro nº 1 brasileiro de voz clonada é autorizado pelo próprio ídolo** (ambíguo). Em 2027 ou 2028, um artista brasileiro de primeira linha adere a um programa de voz licenciada de gravadora e autoriza uma 'versão' gerada em gênero local (pagode, piseiro, brega funk) de um sucesso estrangeiro cuja editora…
- **w3 · O cérebro desce para o bolso: conversa full-duplex local com qualidade de nuvem em 2027** (ambíguo). INVERTE o pressuposto central da R1 corrigida, de ouvido e boca locais com cérebro remoto (e1_02).
- **w4 · Ordem de destruição: o tribunal manda apagar o modelo e tudo o que nasceu dele** (negativo). INVERTE o pressuposto de que a disputa de direitos se resolve por licença e troca voluntária de modelo (e1_29, e2_C01).
- **w5 · O microfone que assina: a voz volta a ser prova pelo hardware** (positivo). INVERTE o pressuposto de que a voz deixou de ser prova de vez (terceira raiz).
- **w6 · O dividendo do mentiroso chega ao TSE: o áudio verdadeiro que ninguém consegue provar** (negativo). No segundo turno de 25/10/2026, ou na eleição municipal de 2028, circula por WhatsApp, fora da janela de 72 horas e sem forma de propaganda, um áudio comprometedor de um candidato competitivo.
- **w7 · O ouvido brasileiro destravado: o acervo público de fala vira base de modelo aberto** (positivo). Entre 2027 e 2029, instituições públicas brasileiras relicenciam para treino os acervos de fala espontânea que já existem (CORAA, com o NURC-Recife, o ALIP e o SP2010) e completam o material com uma coleta nova, consentida, que…
- **w8 · Verme falado: instrução inaudível que salta de agente em agente** (negativo). Em 2027 ou 2028, uma perturbação adversarial imperceptível, embutida numa música de espera, numa saudação de caixa postal ou num áudio viral de vídeo curto, faz agentes de voz executarem uma instrução.
- **w9 · A costura some: o golpe de conversa longa em escala industrial** (negativo). Por volta de 2028, um modelo mantém conversa de meia hora ou mais com voz clonada, sem a costura que hoje aparece com o contexto.
- **w10 · O cadastro de vozes legítimas vaza e vira o melhor conjunto de ataque do mundo** (negativo). Entre 2027 e 2030, um fornecedor que concentra vozes de referência (vozes protegidas de candidatos, bancos de voz de pacientes com ELA, vozes licenciadas de artistas e locutores) sofre invasão, é obrigado por ordem estrangeira a…
- **w11 · A execução deixa de ser a moeda, e a enxurrada sintética perde o motivo** (positivo). Entre 2028 e 2030, uma grande plataforma de streaming, e depois as demais, troca o rateio proporcional por um modelo em que a assinatura de cada ouvinte vai só para o que ele ouviu.
- **w12 · Portabilidade de voz vira direito: a persona sintética e a pessoa com ELA ganham a mesma lei** (positivo). Entre 2028 e 2031, a combinação de um direito sobre a própria voz para qualquer pessoa, no modelo da proposta dinamarquesa, com o direito de portabilidade de dados passa a abranger o modelo de voz e as gravações de origem.

**O wildcard do enunciado, testado.** "Um artista sintético lidera uma parada de sucesso" **já não é wildcard na forma literal**: houve número 1 em parada de nicho e no iTunes, uma faixa número 1 no Spotify sueco foi barrada da parada oficial, uma faixa atribuída por detector a um modelo generativo chegou ao nº 58 da Hot 100, e uma faixa com vozes clonadas de cantores brasileiros entrou em 85º na Billboard Brasil. Continua wildcard só na forma forte: **número 1 da parada principal de um país, com a voz principal gerada, revelado depois** (`w1`). Como a ARIA passou a excluir gravação com voz principal gerada e a IFPI anunciou princípios de elegibilidade para as paradas que administra, a brasileira inclusive, ainda sem data de aplicação, a liderança só volta por origem descoberta depois da parada ou por voz clonada com autorização do próprio ídolo (`w2`).

De maior impacto é `w8`: uma instrução inaudível escondida no áudio, que agentes de voz obedecem e repassam uns aos outros nas ligações entre máquinas. O ataque publicado (arXiv 2604.14604) teve de 79% a 96% de sucesso em 13 modelos. Das saídas positivas, nenhuma depende de regulação de IA: o microfone que assina a gravação no hardware (`w5`), o acervo brasileiro de fala liberado para modelo aberto (`w7`), a remuneração que deixa de contar execução (`w11`) e a portabilidade da voz como direito (`w12`).

## Nota Brasil

O país tem **infraestrutura regulatória própria, mas a defesa técnica chega depois do ataque em português**. Do lado institucional: a autenticação de chamadas Origem Verificada (35 bilhões de chamadas em 2025), o MED 2.0 do Pix, o cadastro de músico acompanhante com CPF em cada ISRC (16,6% dos direitos conexos), a inclusão da voz na definição de deepfake do TSE e o acordo do tribunal com fabricantes de voz para a eleição de outubro de 2026. Do lado técnico: a detecção de golpes que escuta a chamada não opera no país (a proteção no aparelho chega por outra via, num piloto para apps financeiros), o banco de voz pessoal da Apple não fala português, e os benchmarks de detecção de voz sintética e de fim de turno são em inglês. **A nota de voz de WhatsApp é o canal onde marca d'água, assinatura, detecção e regra eleitoral falham juntas.** Na música, o caso nacional não é persona sintética: é voz clonada de artista conhecido numa "versão" de sucesso estrangeiro, retirada do streaming depois de reclamação do lado da composição original, e não dos cantores imitados. O Moises (João Pessoa, 70 milhões de usuários) é o ator brasileiro de escala global no ferramental de separação e geração por faixa. O acervo acadêmico de fala espontânea (CORAA) existe, mas em licença não comercial. Procurado e não encontrado: startup brasileira com modelo próprio de conversa por voz, artista brasileiro gerado por IA com audiência relevante e perda financeira brasileira específica de golpe por voz clonada.

## O que me faria mudar de ideia

Os dois critérios declarados de antemão foram adoção além da maioria inicial de Rogers e tecnologia que só melhora o que existe. **Nenhum derrubou as raízes; os dois as corrigiram.** A conversa por voz na nuvem já não é fronteira; a música funcional (dormir, estudar) só barateia o que já era anônimo. Esta rodada **diverge da TMI-0035** quanto à maturidade da música gerada: aquela decisão contou o lado da criação (100 milhões cumulativos), esta contou o lado da escuta (1% a 3% dos streams). As duas concordam que o limite virou contratual. Sinais que mudariam a conclusão:

- Um modelo aberto de fala-para-fala full-duplex rodando em celular intermediário atingir no Full-Duplex-Bench-v2 nota próxima à dos fechados (hoje 2,76 contra 4,51) e taxa de rejeição correta de fala de terceiros acima de 70% no HumDial: a arquitetura 'cérebro remoto' deixa de ser necessária e a R1 original volta a valer (w3).
- Uma plataforma de streaming com detector publicado (Deezer ou equivalente) reportar música totalmente gerada acima de 16% das execuções com fraude abaixo de metade dessas execuções, ou a Suno publicar usuários ativos mensais auditados por terceiro: a R2 passaria da maioria inicial pelo lado da escuta e a leitura da TMI-0035 sobre maturidade ganharia base.
- Reforma em segunda instância da sentença de Munique (Az. 42 O 763/25) ou decisão na ação da AFM que dispense licença para treino: cai de uma vez a razão do jardim murado, da cota de download e da aposentadoria de modelos (sv1).
- Android ou iOS passarem a assinar áudio na captura (C2PA ou equivalente) no gravador nativo e na nota de voz dos mensageiros, com verificação exibida ao receptor: a voz volta a valer como prova para o conteúdo assinado e a terceira raiz se inverte (w5).
- A IFPI publicar lista de serviços autorizados e data de aplicação no Pro-Música Chart, ou a Billboard adotar regra pública de exclusão: muda e2_B23, e3_T2_05, e3_T2_28 e o contraste 'excluir contra identificar'.
- Relicenciamento para uso comercial de acervo de fala espontânea brasileira (CORAA hoje em CC BY-NC-ND 4.0) ou modelo de reconhecimento local com erro abaixo de 20% no CORAA: vários efeitos da desvantagem brasileira mudam de sinal ao mesmo tempo (sv4, w7).

## Bibliografia essencial

Fontes abertas por inteiro, com título e URL copiados do registro `json/bibliografia.json` (TMI-0082). A lista completa, com 325 fontes, está na nota Obsidian.

1. Full-Duplex Interaction in Spoken Dialogue Systems: A Comprehensive Study (ICASSP 2026 HumDial Challenge, trilha full-duplex) — Northwestern Polytechnical University, Nanjing University, AISHELL, arXiv 2604.21406, abril de 2026 — `https://arxiv.org/html/2604.21406`
2. Full-Duplex-Bench-v2: A Multi-Turn Evaluation Framework for Duplex Dialogue Systems with an Automated Examiner — Lin, Kuan, Shi, Chang, Arora, Watanabe, Lee, arXiv 2510.07838 (v2 de abril de 2026) — `https://arxiv.org/html/2510.07838`
3. Comparing Automatic Speech Recognition Quality for Brazilian Portuguese in Multimodal Large Models — Lanaro, Moraes, Luiz, Oliveira, Salzani, Carbinatti, Feltrin, Marucci, Santos, De Paris, Gibaut (Instituto Eldorado, Campinas), ICAART 2026, pp. 673–682 — `https://www.scitepress.org/Papers/2026/146373/146373.pdf`
4. Voice clones sound realistic but not (yet) hyperrealistic — Lavan, Irvine, Rosi, McGettigan (Queen Mary, UCL), PLOS One, 24/09/2025 — `https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0332692`
5. SoK: How Robust is Audio Watermarking in Generative AI models? — Wen, Innuganti, Ramos, Guo, Yan, março de 2025, arXiv 2503.19176 — `https://arxiv.org/pdf/2503.19176`
6. ASVspoof 5: Evaluation of Spoofing, Deepfake, and Adversarial Attack Detection Using Crowdsourced Speech — Wang, Delgado, Evans et al., IEEE/ACM TASLP, arXiv 2601.03944 (v3, 2026) — `https://arxiv.org/html/2601.03944v3`
7. Echoes of Humanity: Exploring the Perceived Humanness of AI Music — Figueiredo, Martinelli, Sousa, Rodrigues, Pedrosa, Ferreira (UFMG), NeurIPS 2025 Creative AI Track, arXiv 2509.25601 — `https://arxiv.org/pdf/2509.25601`
8. Bob's Confetti: Phonetic Memorization Attacks in Music and Video Generation — Roh, Novack, Peng, Mireshghallah, Berg-Kirkpatrick, Houmansadr, julho de 2025 (revisão fevereiro de 2026), arXiv 2507.17937 — `https://arxiv.org/abs/2507.17937`
9. Equipe da Sesame (Brendan Iribe, Ankit Kumar e outros) — Post 'Crossing the uncanny valley of conversational voice', 27/02/2025 — `https://www.sesame.com/blog/crossing-the-uncanny-valley-of-voice`
10. OpenAI releases new voice models for more natural live conversations, TechCrunch, 08/07/2026 — `https://techcrunch.com/2026/07/08/openai-releases-new-voice-models-for-more-natural-live-conversations/`
11. Apple Machine Learning Research — Introducing the Third Generation of Apple's Foundation Models — `https://machinelearning.apple.com/research/introducing-third-generation-of-apple-foundation-models`
12. AI Music Tops 50% of Daily Uploads on Deezer, Deezer Newsroom, jul/2026 — `https://newsroom-deezer.com/2026/07/ai-music-exceeds-50-percent-daily-uploads-deezer/`
13. Deezer confirms 85% of AI streams are fraud, now demonetized, Deezer Newsroom, 29/01/2026 — `https://newsroom-deezer.com/2026/01/ai-generated-music-deezer-selling-detection-tool/`
14. SUNO introduces 'Suno Studio', a generative audio workstation, comunicado PR Newswire, 25/09/2025 — `https://www.prnewswire.com/news-releases/suno-introduces-suno-studio-a-generative-audio-workstation-built-for-all-creatives-from-seasoned-pros-to-aspiring-artists-302567486.html`
15. Suno — Introducing Studio 2.0 — `https://suno.com/blog/studio-2`
16. Udio Help Center, atualizado em 17/02/2026 — `https://help.udio.com/en/articles/12683565-changes-associated-with-the-universal-music-group-umg-partnership`
17. Warner Music Group settles with Suno, strikes first-of-its-kind deal with AI song generator, Music Business Worldwide, 25/11/2025 — `https://www.musicbusinessworldwide.com/warner-music-group-settles-with-suno-strikes-first-of-its-kind-deal-with-ai-song-generator/`
18. Tenor da sentença TVA GEMA ./. Suno, comunicado de imprensa do Landgericht München I (Bayerisches Staatsministerium der Justiz), 31/07/2026 — `https://www.justiz.bayern.de/gerichte-und-behoerden/landgericht/muenchen-1/presse/2026/16.php`
19. IFPI Rolls Out Global Principles for the Eligibility of Recordings Developed Using AI in Official Music Charts Worldwide, IFPI, 30/07/2026 — `https://www.ifpi.org/ifpi-rolls-out-global-principles-for-the-eligibility-of-recordings-developed-using-ai-in-official-music-charts-worldwide/`
20. ARIA Chart Changes FAQs, ARIA (consultado em 12/09/2026) — `https://www.aria.com.au/aria-chart-changes-faqs`
21. Spotify Newsroom, 13/08/2026 — `https://newsroom.spotify.com/2026-08-13/presentamos-una-nueva-etiqueta-para-identificar-perfiles-de-artistas-generados-por-ia/`
22. Stereogum, 04/08/2026 — `https://stereogum.com/2507265/treblo-appears-to-confirm-fenix-flexins-rubberz-is-the-first-ai-generated-hot-100-hit/news`
23. Verizon Support, FAQ do Voice ID (consultado em 12/09/2026) — `https://www.verizon.com/support/voice-id-faqs/`
24. Mobile Time — 'Origem Verificada tem 35 bi de chamadas autenticadas em 2025', 13/03/2026 — `https://www.mobiletime.com.br/noticias/13/03/2026/origem-verificada-2025/`
25. InfoMoney, cobertura do Febraban Tech 2026 (24/08/2026) — `https://www.infomoney.com.br/minhas-financas/fatia-dos-deepfakes-em-fraudes-sobe-de-01-para-65-e-inflama-desconfianca/`
26. Liz Pelly, em conversa com Mack Hagood — Podcast Phantom Power, 27/02/2025 — `https://www.mackhagood.com/podcast/liz-pelly-on-spotify/`
27. Moises — 2025 Year in Review — `https://moises.ai/newsroom/company-milestones/2025-year-in-review/`
28. Ipeirotis e Rizakos (NYU) — 'Scalable and Personalized Oral Assessments Using Voice AI', arXiv 2603.18221v2, 15/05/2026 — `https://arxiv.org/html/2603.18221v2`
29. AudioHijack — ataque por instrução inaudível a agentes de voz (arXiv 2604.14604), aberta pelo caçador de wildcards — `https://arxiv.org/abs/2604.14604`

---

*Mapa gerado pela skill `futures-wheel` (modo 1, a partir de uma inovação) em 12/09/2026, com teto de 15 subagentes, dos quais 14 usados. Fase 8 pulada. 243 efeitos, 167 não óbvios (69%) depois da auditoria, que fez 39 reclassificações e arbitrou 23 contradições entre agentes (26 efeitos com nota de correção). Contrato em `CONTRATO.md`, histórico em `log.txt`, artefatos intermediários em `json/`.*