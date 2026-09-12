---
tema: Narrativa gerativa e coautoria
slug: narrativa-gerativa-e-coautoria
autor_login: grec
zona_de_interesse: Simulação e mundos
data: 2026-09-12
horizonte: 2036
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 12
efeitos_ordem_2: 19
efeitos_ordem_3: 14
tecnologias_citadas: [MangoBox, AIComicBuilder, LunaTranslator, Live Translate, Hidden Door, Ren'Py, Twine, Inform 7, YarnSpinner, Dialogic, Arrow, Chronicler, Fantasy-Map-Generator, ChatTTS, Bark, NovelAI, AI Dungeon, Character.AI, Audible Virtual Voice, NARRA-Gym, NCP-Bench, Elsewise, Dramamancer, Pangram, C2PA, Sora 2, Veo 3.1, Kling 3.0]
fontes: 40
confianca: media
experimento: Banco de execuções — a mesma obra gerativa lida por quatorze pessoas, com medição do núcleo comum e do turno em que a consistência quebra
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

O custo de **contar** está caindo perto de zero, e com ele cai a suposição de que uma obra narrativa é um objeto fixo, produzido por alguém, numa língua. Em 2026 isso já é comércio: 26,5% das demos do Next Fest de junho e 40% dos lançamentos novos de uma semana de junho na Steam trazem declaração de IA generativa, e cerca de 60% dessas declarações são de arte; o Audible tem mais de 50 mil títulos com voz sintética e está traduzindo fala-para-fala; `MangoBox` entrega uma novela visual jogável a partir de uma frase; `LunaTranslator` (13.145 estrelas, com commit no dia em que este mapa foi escrito) e o `Live Translate` — vendido na Steam desde 20/06/2026 por R$ 45,46, 100% offline, 140+ idiomas — fazem obra japonesa virar obra em português sem que ninguém a tenha traduzido. Este mapa identifica três rupturas independentes: a **geração do artefato narrativo inteiro** a partir de uma intenção curta, a **obra que se ajusta a quem a lê** (e por isso deixa de ter um texto único), e a **tradução como camada do leitor**, não como etapa da obra. Delas derivam 45 efeitos até 2036. Os achados que menos se anteciparam: a receita por obra cai enquanto o catálogo explode (o catálogo de ficção de gênero autopublicada na Amazon multiplicou por 19,2 o número de livros com venda entre 2023 e 2026, contra 8,9 de receita); prêmios e concursos abandonam a declaração do autor e passam a exigir **prova de processo** — rascunhos datados, histórico de edição; a unidade de venda da ficção migra de cópia para **crédito de execução**, o que dá à obra um custo marginal que ela não tinha desde a impressão digital; e a proibição brasileira de IA em dublagem, se aprovada, alcança a obra oficial e não alcança a sobreposição feita pelo leitor, empurrando consumo para a camada não regulada. A retroação já tem dono e já mediu força: 63% de quem trabalha com design e narrativa vê a IA generativa como negativa (GDC 2026, 2.300+ respondentes); o IFComp proibiu em 2026 todo conteúdo player-facing gerado; o Spring Thing mudou a regra porque os resenhistas ameaçaram parar de resenhar. O que segura tudo é técnico e mensurável: no NCP-Bench, o melhor modelo sobrevive a 20 turnos de narrativa interativa em 42% dos casos, com taxa de conflito factual entre 40% e 68%.

## 2. O tema

**O objeto.** Narrativa gerativa não é "escrever com ajuda". É a produção do **artefato narrativo inteiro** — enredo, elenco, arte, fala, ramificação, som — a partir de uma intenção curta, e a coautoria humano-máquina como modo normal de escrever. O recorte deste mapa é a **história como coisa gerada** e o que isso faz com a ideia de autoria e de obra.

**Onde encosta em mídia e interação.** Em três lugares, e é por isso que o tema não cabe num levantamento de estado da arte.

1. **Na autoria.** `Ren'Py`, `Inform 7`, `Twine`, `YarnSpinner`, `Dialogic` e `Arrow` existem para que uma pessoa **enumere** — falas, ramos, condições. A geração não substitui a ferramenta; substitui o ato de enumerar. Quem escreve passa a escrever esquema, canon e restrição. Isso muda o ofício antes de mudar o software.
2. **Na identidade da obra.** Se o texto é produzido no turno, a partir do estado, então duas pessoas que "leram o mesmo livro" não leram o mesmo texto. Tudo o que depende de um referente compartilhado — resenha, cânone, prêmio, citação acadêmica, spoiler, preservação — perde o chão.
3. **Na língua.** Se a tradução acontece sobreposta, em tempo real, na máquina do leitor, então a localização deixa de ser uma etapa de produção e vira uma configuração de consumo. A obra deixa de ter uma língua de origem que lhe pertença.

**Por que merece mapa de futuro e não levantamento.** Um levantamento responde "que ferramentas existem para gerar narrativa" — isso está respondido na seção 3, com números. O que não é respondível por levantamento é o que acontece com o ofício de escritor de jogo, com o contrato de publicação, com o júri de um prêmio, com a indústria de localização e com a noção de "a obra" quando cada leitura é única. São perguntas sobre consequência; consequência não se levanta, se deriva — com mecanismo, com prazo ancorado em classe de referência, e submetida a quem tem incentivo para bloqueá-la.

**Fronteira com os vizinhos, declarada.** O personagem que age dentro de um mundo com regras é o **tema 7** (NPCs generativos). A geração de vídeo e imagem *como mídia* — controle, qualidade, autoria visual — é o **tema 12**. Design procedural (regras, não histórias) é o **tema 14**. Simulação social como método de investigação é o **tema 6**. Companheiro digital é o **tema 19**. Aqui o objeto é estreito: **a história como artefato gerado, e o que isso faz com autoria e com a ideia de obra**. Onde há vazamento — e há, sobretudo para o 7 e para o 19 — a seção 5 o nomeia em vez de fingir que a fronteira é limpa.

**Premissas assumidas nesta rodada.** O briefing veio completo: horizonte 2036, público de quem projeta mídia e interação, recorte global com nota sobre o Brasil, descarte do que já é comum em produto de massa, viés neutro, nenhuma raiz suspeita, busca na web ativa. Não houve entrevista com pessoa — a rodada é não interativa —, e por isso o que o briefing não cobriu está declarado aqui como premissa, não escondido:

- **(a)** "Quem projeta mídia e interação" foi lido como incluindo quem trabalha fora de jogos: editora, audiolivro, quadrinho, localização. Efeitos que vazam para esses setores estão marcados como vazamento.
- **(b)** A régua "o que já é comum em produto de massa" foi operacionalizada pela escala de difusão do §2 da skill, com corte em *maioria*. As recusas estão registradas na seção 4.
- **(c)** O recorte brasileiro é tratado como **assimetria de preço e de língua**, não como mercado consumidor — é aí que a diferença muda o efeito, e não na contagem de jogadores.
- **(d)** "Obra" é usado no sentido de objeto identificável e compartilhável entre duas pessoas, não no sentido jurídico de obra protegida. Onde o sentido jurídico importa (tradução como obra derivada, autoria humana como requisito de registro), está dito.

## 3. Onde isso está hoje

*Âncora feita com acesso à web em 12/09/2026. Vinte e cinco buscas em português e inglês, **trinta e duas páginas abertas com sucesso e sete recusadas** (402, 403 ou 404), treze repositórios consultados pela API do GitHub. Fonte que não abriu não entrou — nem como ilustração; o que deixei de afirmar por causa disso está em 12.5, e as buscas que não deram em nada, em 12.7.*

### 3.1 O que já existe e funciona

**Geração do artefato narrativo inteiro.** `MangoBox` (`mangobox.ai`) recebe uma descrição em texto — personagens, ambiente, enredo — e devolve uma novela visual jogável: até cinco personagens com personalidade e objetivo próprios, retratos e cenas em estilos escolhidos (anime, cyberpunk, realista), conversa em tempo real e escolhas que mudam a execução. Não é demo de laboratório: está publicado no itch.io, com página de criações e suporte comercial. `AIComicBuilder` (1.860 estrelas, último commit em 27/04/2026) faz o caminho roteiro → quadrinho animado, com design de personagem, storyboard e síntese de vídeo.

**Obra que se ajusta ao leitor, com modelo de negócio.** `Hidden Door` lançou publicamente em 2025 (cobertura de imprensa em 13–14/08/2025, segundo o próprio press kit) e é o caso mais informativo porque a aposta declarada é **licenciar**: a empresa se descreve como estúdio transmídia que constrói experiências de fã dentro de mundos ficcionais, com um "Narrador" de IA e uma ferramenta de worldbuilding chamada `Atlas`, e diz que os criadores "serão pagos de forma justa pelo trabalho". Na página do produto, o usuário pode publicar mundos e "ganhar dinheiro quando outros jogam". Fundação: US$ 7 milhões em seed (2022), com Makers Fund, Northzone e Betaworks entre os investidores. **Ressalva de procedência:** a lista específica de IPs licenciados que circula na imprensa (`The Crow`, catálogo da 831 Stories, ficção de Alan Dean Foster, Ramez Naam e Charles Stross) está em matérias que **não consegui abrir** nesta rodada — Variety devolveu 402 e Forbes 403 —, e por isso não é afirmada aqui como fato; ver 12.5. O que as páginas abertas sustentam é o **modelo**, não o catálogo. `NovelAI`, `AI Dungeon` e `Character.AI` cobrem a faixa freeform, com assinatura.

**Tradução como camada do leitor.** É aqui que a mudança está mais adiantada e menos comentada. `LunaTranslator` (`HIllya51/LunaTranslator`, C++, GPL-3.0) tem 13.145 estrelas, 1.144 forks e **commit em 12/09/2026** — o dia desta rodada. Ele extrai o texto do jogo por *hook* de memória (compatível com quase toda novela visual, e com emuladores de NS/PSP/PSV/PS2) ou por OCR, traduz com o motor que o usuário escolher — incluindo LLM local — e devolve sobreposto, com segmentação de japonês, furigana, AnkiConnect e TTS. Do lado comercial, o `Live Translate` (app 3812790) está à venda **na própria Steam** desde 20/06/2026 por R$ 45,46: 140+ idiomas, 100% offline na GPU do usuário, tradução de áudio em tempo real com sobreposição, de imagem e de vídeo. Requer 8 GB de VRAM (12+ recomendados) e ~40 GB de disco. Está em Acesso Antecipado, com 53% de avaliações positivas em 30 análises — ou seja: já é produto de prateleira, e ainda é ruim.

**Voz e tradução na obra oficial.** O Audible anunciou em 13/05/2025 a produção gerenciada de audiolivro com IA: mais de 100 vozes sintéticas em inglês, espanhol, francês e italiano, e tradução em beta — texto-para-texto e **fala-para-fala preservando a voz e o estilo do narrador original** — de inglês para espanhol, francês, italiano e alemão, com revisão humana opcional. Português não está na lista.

**A base madura sobre a qual tudo isso se apoia.** `Ren'Py` (6.812 estrelas, commit em 12/09/2026) sustenta **10.656 jogos publicados no itch.io**. `Inform` (1.641 estrelas), `Twine` (2.882), `YarnSpinner` (2.841), `Dialogic` para Godot (5.996), `Arrow` (1.347), `Fantasy-Map-Generator` (5.991) e `Chronicler` — worldbuilding offline em Markdown, 717 estrelas, commit em 12/09/2026 — formam um ecossistema de autoria que não é emergente coisa nenhuma: é infraestrutura.

### 3.2 O que existe e ainda não funciona

**Consistência de longo prazo.** É o gargalo, e ele é mensurável. O **NCP-Bench** (arXiv:2608.08160, ago/2026) monta 100 ambientes narrativos derivados de sinopses de filme, cada um com trajetória, compromissos e fatos iniciais verificáveis automaticamente, e mede se o agente narrador mantém integridade sob intervenção livre do usuário. O melhor modelo testado (GPT-5.2) tem **42% de taxa de sobrevivência após 20 turnos**; a taxa de conflito factual varia de **40% a 68%** conforme o modelo; dentro do limite de 100 turnos, apenas execuções isoladas cumprem todos os compromissos. A conclusão do paper é a frase que resume o estado da arte: **qualidade de linguagem alta não garante preservação de compromisso**.

**Avaliação.** O **NARRA-Gym** (arXiv:2605.08503, 08/05/2026, 18 autores, Notre Dame/LMU/UCSB entre outros) transforma uma semente emocional esparsa em episódio interativo completo e registra a trajetória inteira com o modelo no laço, avaliando nove LLMs de fronteira em coerência narrativa, gestão de estado em contexto longo, consistência de personagem, personalização e geração de artefato, com oito personas e juízes automáticos mais avaliação humana. O achado: variação substancial entre modelos, personas e dimensões — modelos com fluência narrativa forte falham em robustez, experiência do usuário ou personalização. Traduzindo: **não existe ainda uma métrica única de "boa história gerada"**, e os modelos não se ordenam do mesmo jeito em dimensões diferentes.

**Autoria sobre o gerado.** `Elsewise` (arXiv:2601.15295, submetido em 21/12/2025, revisado em 09/09/2026 — Wang, Chung, Roemmele, Sun, Kreminski e outros) ataca o problema certo: quando o modelo extrapola a partir de entrada aberta do jogador, **abre-se a distância entre a história imaginada pelo autor e a história vivida pelo jogador**. A proposta é visualizar o espaço de possibilidades por "Bundled Storylines". O estudo tem 12 participantes — é pesquisa, não produto. O `Dramamancer` (arXiv:2601.18785) é um resumo estendido de workshop sobre transformar esquemas do autor em execuções do jogador; não reporta número de teste.

**Vídeo a partir de roteiro.** O pipeline roteiro → vídeo animado existe e não fecha em obra longa: o teto de clipe é de 15 segundos no Sora 2 e 8 no Veo, e a consistência de personagem entre cortes ainda se degrada — um personagem estabelecido no primeiro plano deriva no quarto. O Kling 3.0 oferece storyboard multi-plano com continuidade automática. Território prático em 2026: narrativa de 15 a 60 segundos.

### 3.3 Quem constrói

| Ator | O que faz | Posição |
|---|---|---|
| **MangoBox** | novela visual jogável a partir de prompt | startup de nicho, distribuição por itch.io |
| **Hidden Door** | narrativa licenciada com repartição de receita | startup, US$ 7 mi seed, aposta no direito e no mundo autorizado |
| **Audible / Amazon** | voz e tradução sintética na obra oficial | incumbente, escala, catálogo de 50 mil+ títulos |
| **Valve e itch.io** | a etiqueta que define o que é declarável | infraestrutura de mercado; regra reescrita em 16/01/2026 |
| **Comunidade aberta** | `LunaTranslator`, `Ren'Py`, `Chronicler`, `AIComicBuilder` | onde o emergente e o maduro se encostam |
| **Academia** | NCP-Bench, NARRA-Gym, Elsewise | define o que conta como falha; hoje o único freio honesto |
| **IFComp, Spring Thing** | regra de admissão da ficção interativa | o portão cultural, e ele se fechou em 2026 |

### 3.4 Os números da adoção hoje

- **Steam:** no Next Fest de junho de 2026, **1.163 de 4.382 demos** rastreadas declararam IA — **26,5%** —, e cerca de 1.700 de ~8.682 entradas do evento no total (~20%). Na **semana encerrada em 14/06/2026, 40%** dos lançamentos novos declararam. Cerca de **60%** das declarações são de ativo visual; áudio, tradução, escrita e diálogo vêm depois, e código ficou dispensado pela política de janeiro de 2026. A série de volume: **~1.000 títulos declarados em todo o ano de 2024** e **7.818 no primeiro semestre de 2025**. *(Circula em imprensa secundária a série "10,9% em 2024 → 19,9% em 2025 → 30,8% em 2026" para o total de lançamentos do ano; não consegui abrir a fonte primária dela e por isso ela não é usada aqui — os números acima são os da análise que eu abri.)*
- **Desempenho:** apenas **1 das 10 demos mais jogadas** do Next Fest de junho/2026 trazia declaração de IA, contra 26,5% da amostra — um fosso de 2,5×.
- **Livros:** estudo de Chakrabarty, Liu, Ginsburg e Dhillon (arXiv:2607.20349, 22/07/2026) sobre **14.419 livros de ficção de gênero autopublicados** na Amazon entre 2023 e 2026, com detecção de IA em texto integral e registro diário de vendas: o número de livros com venda registrada cresceu **19,2×** enquanto a receita trimestral cresceu **8,9×** — a receita por livro vendido caiu na maioria dos gêneros. Livros com mais de 25% de texto de IA ocupam grande fatia do catálogo e fatia menor das vendas, mas **ganham participação ao longo do tempo** e ocupam posições de topo antes humanas. Os livros sem IA perdem mais terreno justamente nos gêneros de alta difusão de IA, e sobretudo onde a presença no Kindle Unlimited é alta.
- **Audiolivro:** mais de 50 mil títulos com "Virtual Voice" no Audible; a participação desses títulos na receita de 2025 foi de 0,03%.
- **Profissionais de jogos (GDC 2026, 2.300+ respondentes, matéria de 03/02/2026):** 52% consideram o impacto da IA generativa negativo (era 30% em 2025); 7% consideram positivo (13% em 2025); 36% usam a ferramenta no trabalho — 30% em estúdio e 58% em empresa de publicação e marketing. Por área, as visões mais desfavoráveis estão em arte visual e técnica (64%), **design e narrativa (63%)** e programação (59%). E o uso, quando existe, é quase todo instrumental: **81% usam para pesquisa ou brainstorming, 47% para tarefa rotineira, 19% para gerar ativo e 10% para geração procedural.** Isto qualifica `e2` e `e2.2`: em 2026 a máquina entrou no trabalho de quem escreve **antes** de entrar na obra.
- **Brasil (Pesquisa Game Brasil 2026, 7.000+ respondentes de 16 a 55 anos, publicada em 09/04/2026):** 45,7% se preocupam com a precarização do processo criativo pela IA; 39,3% ainda comprariam um jogo desenvolvido em boa parte com apoio dessa tecnologia.
- **Autores (BookBub, 2025, 1.200+ respondentes, citado pelo Christian Science Monitor):** 45% usam IA generativa para assistir o trabalho; 48% não usam e não pretendem.

### 3.5 O que já mudou de regra

- **Valve, 16/01/2026:** reescreveu o formulário de declaração. Passa a valer a distinção "IA que embarca no jogo e chega ao jogador" × "IA que só ajudou a construir". Copilot e assistentes de código saem da obrigação; ativo pré-gerado que acompanha o jogo ou o material de marketing entra.
- **itch.io, desde nov/2024:** campo "Generative AI disclosure" com tipos (gráfico, som, texto e diálogo, código). **Opcional para jogos, obrigatório para pacotes de asset**; quem não etiqueta perde indexação nas páginas de navegação. Quem declara ganha a tag `AI Generated`; quem nega, a tag `No AI`.
- **IFComp 2026:** "todo o conteúdo player-facing das entradas deve ser inteiramente criado por humanos, incluindo a arte de capa, a prosa e todos os ativos de jogo". Ferramenta de IA continua permitida para edição, depuração, acessibilidade, pesquisa, tradução limitada e código. Entradas não podem exigir que o jogador interaja com serviço de IA externo durante o jogo. É regra nova em 2026.
- **Spring Thing:** permitia entradas com IA e mudou; o motivo declarado no fórum da comunidade é operacional, não ideológico — *os resenhistas disseram que parariam de participar se isso significasse atravessar quantidades crescentes de slop*.
- **EU AI Act, art. 50:** a partir de **02/08/2026**, quem fornece sistema que gera áudio, imagem, vídeo ou texto sintético precisa marcar a saída em **formato legível por máquina** e detectável como gerada por IA; sistemas já no mercado antes dessa data têm até 02/12/2026 pelo acordo provisório do Omnibus de maio de 2026. Multa de até €15 milhões ou 3% do faturamento global. Vale extraterritorialmente.
- **Direito autoral (EUA):** o relatório do Copyright Office de 29/01/2025 manteve que obra inteiramente gerada não é protegida e que **prompt, sozinho, não constitui autoria humana**; protege-se a seleção, coordenação, arranjo ou modificação minimamente criativa. O D.C. Circuit negou rehearing en banc em 12/05/2025 e a Suprema Corte negou certiorari em 02/03/2026.
- **Vozes:** o Interactive Media Agreement da SAG-AFTRA, ratificado em julho de 2025 depois de greve de 11 meses, exige consentimento informado e descrição razoavelmente específica do uso da réplica digital, remunera o tempo de criação da réplica e permite suspender o consentimento durante greve. No Brasil, as Comissões de Cultura e de Trabalho da Câmara realizaram audiência pública em **29/08/2024** com o setor de dublagem, onde foram discutidos o **PL 1376/22** (dublagem e legendagem comercial no Brasil feitas por empresas e profissionais com sede ou residência no país) e o **PL 2338/23**, do senador Rodrigo Pacheco (remuneração por direito de autor a quem tiver obra usada em IA). No Senado, a **SUG 7/2025** — apresentada em 24/04/2025 pela dubladora Adriana Torres, que reuniu os 20 mil apoios necessários em 15/05/2025 — pede tornar obrigatória a atuação de dubladores profissionais em empresas nacionais, e aguarda relatório do senador Magno Malta (PL-ES) na CDH.
- **Menores:** a Character.AI anunciou em **29/10/2025** que removeria a conversa aberta para menores de 18 anos, com implementação até **25/11/2025** — na transição, o tempo de uso caiu para duas horas por dia e depois menos —, e implantou verificação de idade com modelo próprio mais a Persona. O detalhe que interessa a este tema em particular: **o que a empresa colocou no lugar do chat aberto foi ficção interativa**. O recurso chama-se `Stories` e, nas palavras da própria empresa, é "uma maneira orientada de criar e explorar ficção, em vez de chat aberto". Ou seja: sob pressão regulatória, a plataforma de conversa aberta mais usada do mundo migrou seu público jovem **para dentro do objeto deste mapa**, e na forma mais restrita dele.

### 3.6 O escândalo que define o problema de prova

Entre maio e agosto de 2026, três casos mostraram que **a declaração do autor deixou de ser verificável**. No Commonwealth Short Story Prize, três contos vencedores foram acusados de geração parcial; o detector Pangram marcou *The Serpent in the Grove*, de Jamir Nazir, como "100% gerado por IA" — o autor alegou uso de text-to-speech do Android, e a Commonwealth Foundation, após revisar **rascunhos de trabalho, documentos com carimbo de tempo e anotações**, declarou não ter encontrado evidência de uso de IA. A Hachette cancelou a publicação de *Shy Girl*, de Mia Ballard, após rumores em rede social; a autora negou e atribuiu o uso a um editor contratado. *Call Me, I'll Hide the Body*, de Jerry Falade, foi retirado por duas agências literárias apesar de contratos milionários; o autor negou e observou que obra de autor negro tem enfrentado escrutínio maior. O ponto operacional, e não moral: **o que resolveu o caso do Commonwealth não foi o detector, foi o arquivo de processo**.

## 4. As disrupções-raiz

### Antes: o que foi recusado, e por quê

| Candidato | Veredito | Motivo |
|---|---|---|
| Engine de novela visual e ferramenta de diálogo ramificado (`Ren'Py`, `Twine`, `Inform`, `YarnSpinner`, `Dialogic`) | **recusado como raiz** | Maduro. `Ren'Py` sustenta 10.656 jogos no itch.io e existe desde 2004; `Inform` é dos anos 1990. Entra como contexto na seção 3. |
| Geração de imagem e de vídeo *como mídia* | **recusado como raiz** | É o tema 12, e dentro do nicho já está em maioria funcional: 40% dos lançamentos novos de uma semana de junho de 2026 na Steam declararam IA, ~60% disso em arte. Entra como contexto e como efeito (e4). |
| Assistente de escrita / copiloto de texto | **recusado como raiz** | Maduro. 45% de 1.200+ autores (BookBub, 2025) já usam. Melhora sustentadora: faz o mesmo, mais rápido. Entra como contexto. |
| Fala sintética para diálogo (`ChatTTS`, `Bark`) | **recusado como raiz** | Commodity, e estagnada no aberto: `Bark` sem commit desde 19/08/2024, `ChatTTS` desde 10/04/2026 (39,8 mil e 39,3 mil estrelas — projetos grandes, parados). Entra como efeito na raiz 3. |
| "Prompt vira jogo" como categoria de produto | **recusado como raiz** | É o efeito observável da raiz 1, não uma ruptura distinta. |

### Raiz 1 — A geração do artefato narrativo inteiro a partir de uma intenção curta

**O que rompe.** Rompe a divisão de trabalho da produção narrativa e, com ela, o pressuposto de que **o custo de produzir é o filtro de qualidade**. Uma novela visual exigia roteirista, artista de personagem (sprites, expressões, CGs), programador de engine e tempo; o custo era a barreira que impedia que tudo fosse publicado, e a barreira fazia o trabalho da curadoria sem que ninguém precisasse curar. Não é "fazer o mesmo, mais barato": é o desaparecimento de um mecanismo de seleção que o mercado usava sem saber que usava.

**Por que agora, e não há cinco anos.** Porque três coisas fecharam ao mesmo tempo: (i) o pipeline multimodal texto → imagem → som → vídeo virou uma chamada só; (ii) o formato da novela visual — retrato, fundo, caixa de texto, escolha — é exatamente o artefato mais fácil de sintetizar, por ser estilizado e repetitivo; (iii) a distribuição já existia e é aberta (itch.io, Steam), sem porteiro técnico. Em 2021 faltavam os três.

**Onde está na difusão.** Entre **produto de nicho** e **adoção precoce**. `MangoBox` e `AIComicBuilder` são produtos com usuário, e o primeiro já cobra US$ 9/mês; a declaração de IA na Steam já alcança 26,5% das demos de um Next Fest, mas isso mede *ativo gerado*, não *obra gerada inteira* — a segunda ainda é minoria dentro da primeira.

**O que ainda falta acontecer.** (a) Consistência de personagem e de arte ao longo de uma obra de horas, não de minutos; (b) um caminho de monetização que não dependa de volume, já que o volume derruba o preço (ver e1); (c) resolução do estatuto jurídico — nos EUA, obra inteiramente gerada não é protegida, e prompt não é autoria; (d) que alguma dessas obras seja *jogada* — hoje o fosso de desempenho é de 2,5×.

**Quem bloqueia, e com que incentivo.** Os **resenhistas e júris da ficção interativa** (IFComp, Spring Thing) bloqueiam porque o custo deles é tempo de leitura voluntária, e o volume os destrói — o Spring Thing mudou a regra por essa razão explícita. As **lojas** (Valve, itch.io) não bloqueiam, mas etiquetam, e a etiqueta tem preço em visibilidade. O **público brasileiro** bloqueia pelo bolso: 45,7% preocupados, só 39,3% dispostos a comprar.

### Raiz 2 — A obra que se ajusta a quem a lê

**O que rompe.** Rompe a **identidade da obra**: o pressuposto de que existe um texto único ao qual duas pessoas podem se referir. Se a história se produz no turno, em função do estado e do leitor, então "o livro" não é um objeto, é uma classe de execuções possíveis. Isso não é melhoria de nada — é a perda de um referente compartilhado do qual dependem resenha, cânone, prêmio, citação, ensino, spoiler, preservação e a conversa de bar. É também a perda do custo marginal zero: texto impresso ou copiado custa zero por leitor; texto gerado custa inferência por turno.

**Por que agora, e não há cinco anos.** Porque contexto longo, memória persistente entre sessões e custo por turno em queda tornaram a execução personalizada economicamente viável — e porque apareceu o modelo de negócio que a sustenta: crédito de execução, como no `Hidden Door` (explicitamente modelado no Audible). Em 2021, `AI Dungeon` já mostrava a ideia e não tinha nem coerência nem contrato.

**Onde está na difusão.** **Produto de nicho.** Há produto com receita (Hidden Door, NovelAI, AI Dungeon, Character.AI), há IP licenciado de verdade, e há o freio técnico medido: 42% de sobrevivência em 20 turnos no melhor modelo.

**O que ainda falta acontecer.** (a) Que a consistência de longo prazo saia de 42% para algo que sustente obra de dezenas de horas; (b) que a indústria decida o que arquivar — o sistema, o log, ou nada; (c) que apareça uma forma de crítica e de recomendação que funcione sobre distribuição em vez de sobre texto; (d) que o custo por turno caia o bastante para o preço não decidir o enredo.

**Quem bloqueia, e com que incentivo.** Os **reguladores de proteção à infância** — FTC e legisladores nos EUA, com a Character.AI já tendo fechado a porta para menores em 24/11/2025 — porque narrativa aberta com menor de idade é passivo jurídico. E o **custo de inferência**, que bloqueia sem intenção: é o único ator deste mapa que não negocia.

### Raiz 3 — A tradução como camada do leitor, não como etapa da obra

**O que rompe.** Rompe a localização como **etapa de produção** e como **direito**. Até aqui, para uma obra existir em português alguém precisava traduzi-la, ser pago por isso e ter autorização — a tradução é obra derivada. Quando a tradução acontece na máquina do leitor, em tempo real, sobreposta, nada disso acontece: a obra é consumida em português sem que exista uma versão em português. Também rompe a ideia de que a obra **tem** uma língua de origem: a língua vira configuração do leitor, inclusive na voz (o Audible traduz fala-para-fala preservando o timbre do narrador).

**Por que agora, e não há cinco anos.** Porque OCR robusto mais LLM de tradução passaram a caber numa GPU de consumo com latência tolerável a leitura — o `Live Translate` pede 8 GB de VRAM e roda sem nuvem. Em 2021 a tradução automática de jogo existia, mas exigia serviço, era paga por chamada, e a qualidade não sustentava ficção. O `LunaTranslator` existe desde 28/09/2022 e só agora tem 13 mil estrelas e motor de LLM local.

**Onde está na difusão.** De **produto de nicho** para **adoção precoce**. O sinal mais claro não é o repositório: é o programa **vendido na Steam**, com preço em real, desde 20/06/2026.

**O que ainda falta acontecer.** (a) Qualidade que sustente prosa literária e não só menu e diálogo curto — 53% de avaliações positivas dizem que ainda não; (b) que algum titular de direito teste a tese de que a sobreposição é obra derivada; (c) que a camada saia do PC com GPU e entre no console e no celular, que é onde está o leitor brasileiro; (d) que as línguas fora do eixo europeu entrem na obra oficial — o beta do Audible traduz para espanhol, francês, italiano e alemão, não para português.

**Quem bloqueia, e com que incentivo.** **Dubladores e tradutores organizados**: no Brasil, audiência na Comissão de Cultura da Câmara e sugestão legislativa na CDH do Senado para tornar obrigatória a atuação de dublador profissional e vedar IA em dublagem comercial; nos EUA, a SAG-AFTRA já tem cláusula contratual. **Titulares de direito**, que têm incentivo para tratar a sobreposição como derivada não autorizada — e incentivo contrário, porque ela aumenta o alcance da obra sem lhes custar nada.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A geração do artefato narrativo inteiro a partir de uma intenção curta
    efeitos:
      - id: e1
        ordem: 1
        efeito: O catálogo de obras narrativas cresce muito mais rápido que a receita, e a receita por obra cai mesmo para quem não usa IA
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A etiqueta de procedência vira variável de ranqueamento nas lojas, e declarar passa a ter preço medido em visibilidade
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O selo "sem IA" vira categoria comercial com auditoria paga, como aconteceu com o selo orgânico
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Prêmios e concursos de ficção abandonam a declaração do autor e passam a exigir prova de processo — rascunhos datados e histórico de edição
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: O arquivo de processo vira ativo do autor, e o editor de texto passa a vender prova de autoria como funcionalidade paga
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e1.3
            ordem: 2
            efeito: Comunidades com resenha voluntária fecham a porta e passam a ser a garantia de procedência que a loja não dá
            sinal: forte
            prazo: 2027
            confianca: media
      - id: e2
        ordem: 1
        efeito: O ofício de escritor de jogo se parte entre quem escreve a fala e quem escreve a restrição, e só o segundo cresce
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Surge a ferramenta de autoria cujo objeto é o espaço de possibilidades e não o texto, e o autor revisa distribuição em vez de frase
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: A revisão editorial de obra gerativa vira amostragem estatística — o editor lê N execuções e aprova a distribuição, não o texto
                sinal: fraco
                prazo: 2037
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Estúdios passam a anunciar "escrito por humanos" como argumento de venda e de recrutamento, porque perder narrativistas custa mais que economizar roteiro
            sinal: forte
            prazo: 2028
            confianca: media
      - id: e3
        ordem: 1
        efeito: O piso de produção de uma novela visual cai de meses-pessoa para minutos, e o portfólio publicado deixa de sinalizar competência
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Jams presenciais e bancas com defesa ao vivo substituem a loja publicada como credencial de entrada em estúdio
            sinal: fraco
            prazo: 2030
            confianca: baixa
      - id: e4
        ordem: 1
        efeito: Ilustradores de novela visual perdem a encomenda de volume — conjunto de sprites, expressões e CGs — que era o rodapé de renda do setor
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: A encomenda que sobra migra para direção de arte, folha de estilo e retrabalho da saída; o preço por peça cai e o preço por hora de direção sobe
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Desaparece o degrau de entrada da carreira de ilustração, e formar iniciante passa a depender de residência paga ou subsídio
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: A obrigação europeia de marcar a saída em formato legível por máquina transforma a procedência em metadado obrigatório da obra narrativa distribuída
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: Engines e lojas passam a carregar a marca obra adentro, e pela primeira vez "sem IA" vira afirmação verificável em vez de declaração
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: A marcação vira instrumento de segmentação de mercado em vez de informação ao leitor, que filtra procedência como filtra idioma
                sinal: fraco
                prazo: 2038
                confianca: baixa
  - disrupcao: A obra que se ajusta a quem a lê
    efeitos:
      - id: e5
        ordem: 1
        efeito: A obra deixa de ter um texto único e passa a existir como sistema mais registro de execução
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Resenha, citação acadêmica e uso em sala passam a exigir o log da execução — semente, versão do modelo, trajetória — e a resenha sem log perde valor probatório
            sinal: fraco
            prazo: 2032
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Bibliotecas e arquivos passam a preservar o sistema e uma amostra de logs, e declaram publicamente que não preservam a obra
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: O spoiler morre e a conversa sobre a obra migra de "o que aconteceu" para "o que aconteceu com você", ficando mais rica no grupo e mais pobre entre estranhos
            sinal: fraco
            prazo: 2031
            confianca: baixa
      - id: e6
        ordem: 1
        efeito: A unidade de venda da ficção migra de cópia para crédito de execução
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O detentor de IP passa a licenciar mundo jogável como linha de receita separada do livro e do audiovisual, com repasse por execução
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: O contrato-padrão de publicação ganha cláusula de direitos gerativos, apartada de audiovisual e de audiolivro
                sinal: fraco
                prazo: 2036
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: A obra deixa de existir quando o servidor desliga, e o comprador descobre que comprou acesso e não exemplar
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Consumidor ou lei passam a exigir um modo degradado offline — uma versão fixa e congelada entregue junto com a obra viva
                sinal: fraco
                prazo: 2037
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: A inconsistência de longo prazo vira a métrica de qualidade do gênero, e é ela que decide o que chega ao mercado
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O produto que vence não é o mais livre, é o que restringe — biblioteca de tropos escrita à mão vence geração aberta na comparação comercial
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Liberdade total vira marca de amadorismo, e o valor do autor se desloca de escrever o que acontece para desenhar o que não pode acontecer
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: Plataformas de narrativa aberta fecham o público menor de idade por pressão de regulador e de tribunal, antes de qualquer avanço técnico
            sinal: forte
            prazo: 2027
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: A narrativa gerativa para público jovem se reorganiza em torno de cena pré-aprovada, o oposto do que a tecnologia permite
                sinal: forte
                prazo: 2031
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: O custo de inferência por turno vira linha de custo variável da obra, e a ficção volta a ter custo marginal
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: O design narrativo passa a racionar modelo — turno barato com modelo pequeno, cena-chave com modelo grande — e a qualidade da história passa a depender de quanto o leitor paga
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: No Brasil, onde a assinatura em dólar pesa mais, a narrativa gerativa chega primeiro como modelo local na GPU do próprio leitor, e a desigualdade de hardware vira diferença de enredo
                sinal: fraco
                prazo: 2033
                confianca: baixa
  - disrupcao: A tradução como camada do leitor, não como etapa da obra
    efeitos:
      - id: e8
        ordem: 1
        efeito: Obra sem versão em português passa a ser consumida em português sem que ninguém a tenha traduzido
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: A decisão de localizar deixa de ser "traduzir ou não" e vira "traduzir antes que o leitor traduza", e o valor da versão oficial passa a ser simultaneidade e qualidade
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: O mercado de localização se parte — some a faixa de volume barato, sobram a faixa de adaptação cultural cara e a de operação de pipeline
                sinal: fraco
                prazo: 2039
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: Dubladores e tradutores brasileiros obtêm norma que veda IA na dublagem comercial, e a norma alcança a obra publicada sem alcançar a sobreposição feita pelo leitor
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: A regra protege o emprego na obra oficial e desloca consumo para a camada não regulada, produzindo o oposto do efeito pretendido
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: A língua de origem deixa de ser propriedade da obra e vira configuração do leitor, inclusive no timbre de quem narra
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: A voz do intérprete vira ativo licenciável separado da língua, e o contrato passa a precificar a própria voz dizendo o que a pessoa não disse
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: A carreira de voz se parte entre quem licencia timbre com renda de escala e quem atua com renda por hora, e a segunda encolhe primeiro no mercado de volume
                sinal: fraco
                prazo: 2037
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: O grupo de tradução amadora perde a função que lhe dava existência, e some junto o canal pelo qual obra estrangeira de nicho chegava ao Brasil
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: A descoberta de obra estrangeira passa do evangelismo da comunidade para o algoritmo da loja, e obras que dependiam do primeiro desaparecem do repertório
            sinal: fraco
            prazo: 2031
            confianca: baixa
```

### O que o bloco não consegue dizer

**Os mecanismos, um a um.**

**Raiz 1.** `e1` acontece **porque** o custo de produzir deixa de ser o filtro: o estudo de 14.419 livros mostra catálogo ×19,2 contra receita ×8,9 entre 2023 e 2026, e — este é o ponto que quase todo mundo erra — **os livros sem IA também perdem receita por título**, porque o que caiu foi a atenção disponível por obra, não a qualidade de quem não usou. `e1.1` deriva **porque**, saturada a prateleira, a loja precisa de um eixo de ordenação barato, e a etiqueta que ela mesma criou é o eixo mais barato que existe: a itch.io já retira da indexação o pacote de asset não etiquetado. `e1.2` deriva **porque** o volume torna a declaração do autor não verificável por leitura — e o caso Commonwealth mostrou o que funciona quando o detector falha: rascunho datado, documento com carimbo de tempo, anotação. `e1.3` é a **retroação** da raiz 1, e tem dono nomeado: o Spring Thing mudou a regra porque os resenhistas — que trabalham de graça — ameaçaram sair.

`e2` deriva **porque** o artefato gerado precisa de esquema, canon e catálogo de ações para não derivar; é literalmente o que Dramamancer e Elsewise atacam. `e2.1` deriva de `e2` **porque** revisar frase por frase um sistema que produz texto diferente a cada execução é impossível — o objeto de revisão tem que mudar de texto para distribuição. `e2.2` é a segunda **retroação**, com número: 63% de quem trabalha em design e narrativa vê a IA como negativa, e estúdio que não consegue contratar narrativista paga isso em prazo.

`e3` deriva **porque** o portfólio publicado era um proxy de esforço, e o proxy quebrou. `e3.1` nomeia o ator porque a skill proíbe o efeito genérico "cursos reorganizam o currículo": o que muda é o **instrumento de seleção** — jam presencial e banca com defesa ao vivo —, não o currículo.

`e4` é o efeito de **quem perde**, e tem sinal forte: 60% das declarações de IA na Steam são de ativo visual, e o sprite de novela visual é exatamente o ativo repetitivo e estilizado que o modelo faz bem. `e4.1.1` é o efeito de terceira ordem mais sério do mapa e está **fora da janela** (2038, referência: reconstrução de degrau de entrada em ofício criativo após automação da base — a medida mais próxima é a fotografia de banco de imagens, que levou mais de uma década): o trabalho repetitivo não era só renda, era o degrau pelo qual se aprendia o ofício.

`e11` é o eixo **político**, e tem data: 02/08/2026 para o art. 50 do AI Act, com prorrogação até 02/12/2026 para sistema já no mercado. `e11.1` deriva **porque** marca em formato legível por máquina que não sobrevive à exportação não serve para nada — a pressão vai da obrigação do fornecedor de modelo para a cadeia de ferramenta e loja.

**Raiz 2.** `e5` deriva **porque** o texto passa a ser produzido no turno: o que existe para arquivar é o sistema e o log, não o livro. `e5.1` deriva **porque** quem cita precisa de referente, e o único referente estável vira a trajetória registrada. `e5.2` deriva **porque** o referente compartilhado encolhe: duas pessoas continuam podendo falar do sistema, mas não do que aconteceu.

`e6` deriva **porque** o custo marginal do texto deixa de ser zero — é inferência por turno —, e cópia deixa de ser unidade natural de preço. `e6.1` deriva **porque** o detentor de IP percebe uma janela de licenciamento nova: o Hidden Door se constituiu inteiro em torno dessa aposta — licenciar mundo, pagar quem cria, repartir quando outro joga — e levantou US$ 7 milhões para tentá-la. Não afirmo aqui **quais** contratos ele fechou, porque as matérias que trazem a lista não abriram (ver 12.5): o que sustenta o efeito é o modelo constituído, não o catálogo. `e6.2` é o efeito de **quem perde**: o leitor. `e6.2.1` está fora da janela (2037), e o prazo sai de `e6.2` (2031) mais o tempo que uma exigência de consumidor leva para virar prática — a referência usada é a portabilidade de dados, de reivindicação a obrigação corrente em cerca de seis anos.

`e7` deriva **porque** a métrica existe e é ruim: 42% de sobrevivência em 20 turnos, conflito factual de 40% a 68%. `e7.1` deriva **porque**, com essa taxa, o produto que restringe entrega experiência melhor que o que libera — o Hidden Door é o caso, com biblioteca de tropos escrita à mão. `e7.2` é a **retroação** da raiz 2, e ela já aconteceu: Character.AI barrou menores de 18 em 24/11/2025, sob inquérito da FTC aberto em setembro de 2025. O detalhe que importa: **a retroação chegou antes do avanço técnico**.

`e12` é o eixo **ecológico-econômico** e o que mais mexe com o Brasil. Deriva **porque** cada turno é uma chamada paga; `e12.1` deriva **porque** orçamento variável obriga a racionar, exatamente como nível de detalhe gráfico; e `e12.1.1` deriva **porque** assinatura em dólar pesa diferente aqui — o caminho brasileiro provável é modelo local na GPU do leitor, que é a mesma infraestrutura que o `Live Translate` já exige (8 GB de VRAM).

**Raiz 3.** `e8` deriva **porque** a extração de texto por hook e o LLM local fecharam o laço sem nuvem e sem custo por chamada. `e8.1` deriva **porque** a alternativa do estúdio deixou de ser "existir ou não em português" e virou "existir antes". `e8.2` é a **retroação** da raiz 3, com dono: Câmara e Senado, a pedido dos dubladores. `e8.2.1` é o efeito que ninguém pede e que o mecanismo produz: a norma alcança quem publica, não quem lê.

`e9` deriva **porque** o Audible já traduz fala-para-fala preservando timbre; `e9.1` deriva **porque** o timbre separado da língua vira ativo, e a SAG-AFTRA já escreveu o contrato que o precifica. `e10` é o efeito de **quem perde** menos óbvio: o grupo de tradução amadora perde a função, e com ele some o canal de descoberta que ele operava — a tradução resolvia o acesso, mas era o grupo que dizia o que valia a pena acessar.

### As classes de referência usadas para os prazos

| Classe | Medida observada | Onde foi aplicada |
|---|---|---|
| Declaração de IA na Steam | de ~1.000 títulos em todo 2024 a 7.818 só no 1º semestre de 2025, e a 26,5% das demos de um Next Fest em 2026 — ~2 anos | `e1` (2027), `e4` (2028) |
| Audiolivro com voz sintética | 50 mil+ títulos desde mai/2025, 0,03% da receita de 2025 — catálogo rápido, receita lenta | `e9` (empurrado para 2032), `e1` |
| Acordo sindical após conflito | greve de 11 meses → contrato ratificado em jul/2025 — 1 a 3 anos | `e2.2` (2028), `e9.1` (2029) |
| Legislação europeia | AI Act aprovado em 2024, art. 50 aplicável em 02/08/2026 — ~2 anos de lei a obrigação | `e11` (2028), `e11.1` (2031) |
| Tramitação legislativa brasileira sobre ofício | audiências em 2025, sugestão ainda sem relatório votado — 3 a 6 anos até norma | `e8.2` (2030) |
| Engine de autoria virar padrão | `Ren'Py` de 2004 a 10.656 jogos no itch.io — ~20 anos | `e2.1` (2029, por ser ferramenta e não engine) |
| Regulação reativa a dano com menor | primeira ação judicial → política de plataforma em ~18 meses (Character.AI) | `e7.2` (2027) |
| Substituição de ofício por automação de tradução | tradução automática comercial desde os anos 2010, mercado de localização ainda crescendo | `e8.1.1` (2034, deliberadamente lento) |

### Cruzamentos

**Convergência — o trabalho remunerado migra de produzir para especificar e corrigir.** `e4.1` (raiz 1: o ilustrador vira quem dirige e corrige) e `e7.1` (raiz 2: o valor do autor migra para o desenho da restrição) são o mesmo efeito chegando por caminhos independentes — um pela economia do ativo visual, outro pela falha técnica de consistência. Convergência independente é o sinal mais forte que este mapa produz, e a consequência prática é desagradável: **as duas rotas eliminam o mesmo degrau — o trabalho de execução pelo qual se aprendia o ofício** (`e4.1.1`).

**Segunda convergência — a obra passa a carregar o registro de como foi feita e de como foi lida.** `e11.1` (raiz 1, marca legível por máquina obrigatória na UE) e `e5.1` (raiz 2, citação que exige o log da execução) chegam ao mesmo lugar por motivos que não se falam: um é regulação de transparência, o outro é necessidade epistêmica de quem cita. O achado é que **a infraestrutura de procedência exigida pela lei serve exatamente para resolver o problema de referente criado pela obra adaptativa** — sem que ninguém tenha projetado isso.

**Retroalimentação.** `e7.2` (fechar para menores) → `e7.1` (trilho, cena pré-aprovada) → reforço da raiz 2 **numa forma domesticada**: a retroação não freia a disrupção, ela a canaliza. É o ciclo mais importante do mapa, porque explica por que a previsão "vai ser barrado" e a previsão "vai dominar" podem estar ambas certas.

**Contradição não resolvida.** `e6` (venda por execução, obra viva no servidor) × `e6.2.1` (exigência de um modo offline congelado). As duas não coexistem sem alguém pagar duas produções. O que decide entre elas é uma coisa só, e ela não é técnica: **se a lei de consumidor passa a tratar "compra de acesso a obra narrativa" como compra de exemplar**. Registro as duas como vigentes.

**Segunda contradição.** `e8.2` (norma brasileira que veda IA em dublagem) × `e8` (o leitor traduz sozinho). Proteger o ofício na obra publicada, sem alcançar a camada do leitor, pode **aumentar** o consumo na camada não regulada — `e8.2.1`. Não resolvo: quem decide é se a norma trata a ferramenta ou o produto.

### Cobertura STEEP e quem perde

| Eixo | Efeitos | Observação |
|---|---|---|
| **Social** | `e5.2`, `e7.2`, `e7.2.1`, `e10.1` | a conversa sobre obra e o acesso do público jovem |
| **Tecnológico** | `e7`, `e7.1`, `e2.1`, `e11.1` | consistência como métrica, autoria sobre distribuição |
| **Econômico** | `e1`, `e6`, `e6.1`, `e12`, `e4`, `e8.1` | preço, unidade de venda, custo marginal |
| **Ecológico** | `e12`, `e12.1`, `e12.1.1` | o único eixo ecológico honesto aqui é o custo de inferência; não forcei "pegada de carbono da geração de imagem", que seria efeito do tema 12 |
| **Político** | `e11`, `e8.2`, `e7.2`, `e9.1` | AI Act, PL de dublagem, FTC, SAG-AFTRA |
| **Quem perde** | `e4` (ilustrador de volume), `e10` (grupo de tradução amadora), `e6.2` (leitor que comprou acesso), `e4.1.1` (iniciante sem degrau), `e1` (autor humano em gênero de alta difusão de IA) | cinco efeitos dedicados; um mapa só com quem ganha seria propaganda |

## 6. Sinais fracos e wildcards

### Sinais fracos

**1. O gargalo da ficção interativa não é produção, é leitura voluntária.** O Spring Thing mudou a regra sobre IA porque **os resenhistas disseram que parariam** — não por posição estética. Isso revela que o recurso escasso no ecossistema de ficção interativa é atenção crítica não remunerada, e que ela tem ponto de ruptura. *O que mudaria:* se a atenção voluntária colapsar, `e1.3` deixa de ser retroação e vira o mecanismo principal de seleção do mercado inteiro, incluindo comercial. *Sinal observável:* número de juízes inscritos no IFComp 2026 comparado a 2025, e número de resenhas por entrada.

**2. A tradução já é produto de prateleira e ainda é ruim.** `Live Translate` na Steam por R$ 45,46, 100% offline, 140+ idiomas, **53% de avaliações positivas em 30 análises**. A combinação "vendido na loja" + "nota ruim" + "30 análises" é a assinatura de uma categoria acabando de nascer. *O que mudaria:* `e8` acelera de 2027 para já. *Sinal observável:* um overlay com mais de 1.000 análises e acima de 80% de positivas, ou a Valve embutir a função no cliente.

**3. A ferramenta de autoria cujo objeto é a distribuição.** `Elsewise` tem 12 participantes e nomes sérios (Kreminski, Roemmele). É pesquisa. *O que mudaria:* se `Ren'Py`, Unity ou Godot incorporarem visualização de espaço de possibilidades, `e2.1` antecipa ~3 anos e `e2` se resolve a favor de quem escreve restrição. *Sinal observável:* um commit, num desses três, com "possibility space" ou equivalente no changelog.

**4. O canon offline crescendo enquanto tudo migra para nuvem.** `Chronicler` — worldbuilding offline, wiki local em Markdown — tem 717 estrelas e commit em 12/09/2026. É pequeno, e é contra a corrente. *O que sinaliza:* demanda por canon sob controle do autor, que é precondição de `e2` e de `e7.1`. *Sinal observável:* integração entre ferramenta de canon local e LLM local (canon como contexto, sem nuvem).

**5. A camada aberta de voz parou.** `Bark` sem commit desde 19/08/2024; `ChatTTS` desde 10/04/2026. Somados, quase 80 mil estrelas paradas. *O que sinaliza:* a fala gerativa migrou para serviço fechado, e quem fizer narrativa gerativa com voz vai depender de fornecedor — o que reforça `e6` (execução paga) e `e12` (custo por turno). *Sinal observável:* um fork ativo com mais de 5 mil estrelas, ou o contrário — o abandono definitivo dos dois.

**6. O fosso de 2,5× entre declarar IA e ser jogado.** Uma demo em dez entre as mais jogadas do Next Fest de junho/2026 trazia declaração, contra 26,5% da amostra. *O que sinaliza:* que `e1` não é só diluição de catálogo — há rejeição ativa, medida em comportamento e não em opinião. *Sinal observável:* esse fosso em três Next Fests seguidos; se fechar, `e2.2` e `e1.3` perdem força.

### Wildcards

**Wildcard 1 — um prêmio literário de primeira linha premia obra assumidamente coautorada, e vence pelo processo.** *Mecanismo:* um autor apresenta o arquivo completo de processo — versões, prompts, decisões de recusa — e o júri entende que a curadoria demonstrável **é** a autoria, exatamente como o Copyright Office descreve seleção, coordenação e arranjo. *Por que é improvável:* o movimento de 2026 vai no sentido oposto (IFComp proibiu, Spring Thing fechou, Hachette cancelou). *O que faria com o mapa:* `e1.2` e `e1.1.1` antecipam ~4 anos, e o selo deixa de ser "sem IA" para virar "com processo auditado", o que inverte `e11.1.1`. *Sinal precoce:* um prêmio criando **categoria** de obra assistida, com regulamento próprio — não uma exceção, uma categoria.

**Wildcard 2 — um tribunal decide que a sobreposição de tradução em tempo real é obra derivada, e responsabiliza a loja que vende o programa.** *Mecanismo:* titular japonês de novela visual aciona a distribuidora do overlay, alegando que o produto existe para produzir derivada não autorizada em escala. *Por que é improvável:* a tradução se materializa na máquina do leitor e não é distribuída; a doutrina de uso pessoal protege a maior parte disso. *O que faria com o mapa:* mata `e8.1` (não haveria pressão por simultaneidade, porque a alternativa seria ilegal), empurra `e8` para a clandestinidade e fortalece `e8.2`. *Sinal precoce:* uma notificação extrajudicial a um app de overlay publicado na Steam, ou a retirada de um deles da loja.

**Wildcard 3 — uma decisão sobre treino encarece a licença e o custo por turno sobe em vez de cair.** *Mecanismo:* obrigação de licenciar corpus literário para treino de modelo de narrativa repassa custo ao preço da inferência. *Por que é improvável:* a tendência de preço por token é de queda há quatro anos, e a queda tem sido mais rápida que qualquer custo regulatório observado. *O que faria com o mapa:* inverte `e6` e `e12` — a obra gerativa vira produto caro de nicho, e `e1` (diluição do catálogo) desacelera. *Sinal precoce:* um fornecedor de modelo anunciando **linha de preço específica para uso narrativo/ficcional**, separada da geral.

**Wildcard 4 — a plataforma de narrativa gerativa mais usada do mundo é escolar, não recreativa.** *Mecanismo:* uma rede pública adota narrativa adaptativa para leitura, e o volume supera todo o entretenimento somado. *Por que é improvável:* compra pública é lenta e o dano reputacional de IA com menor de idade é alto — `e7.2` mostra a direção contrária. *O que faria com o mapa:* `e12.1.1` (desigualdade de hardware virando diferença de enredo) sairia do plano do consumo e entraria no plano da política pública, o que é outro mapa. *Sinal precoce:* um edital estadual ou federal brasileiro que especifique "narrativa adaptativa" em vez de "conteúdo digital".

## 7. Contra o próprio mapa

### 7.1 Pré-mortem — é 2036 e este mapa se mostrou errado

**Razão 1: a consistência nunca chegou, e a narrativa gerativa ficou presa em forma curta.** Se os 42% de sobrevivência em 20 turnos virarem 60% e pararem aí, a obra gerada continua sendo um brinquedo de minutos, e nada do que depende de obra longa acontece. Os efeitos atingidos são `e5`, `e5.1`, `e6` e `e6.1` — todo o ramo da "obra que se ajusta ao leitor" pressupõe que ela consiga durar. *Ação:* `e5` rebaixado.

**Razão 2: eu li a regulação como se ela fosse cumprida.** O art. 50 do AI Act tem multa alta e mecanismo fraco de verificação; a experiência com rotulagem de conteúdo é de baixa adesão fora das grandes plataformas. Se a marcação for tratada como caixinha a marcar, `e11.1` não acontece e `e11` fica sendo custo de compliance sem efeito de mercado. *Ação:* `e11.1` rebaixado.

**Razão 3: confundi movimento de comunidade com movimento de mercado.** IFComp, Spring Thing e a resenha voluntária são o coração cultural da ficção interativa e uma fração desprezível do dinheiro. Se o mercado comercial simplesmente ignorar, `e1.3` e `e2.2` viram folclore de nicho. O contrapeso honesto é que os 63% de rejeição vêm de profissionais empregados, não de comunidade amadora — mas rejeição declarada e comportamento de compra não são a mesma coisa, e a PGB 2026 mostra o hiato: 45,7% preocupados, 39,3% comprariam mesmo assim. *Ação:* `e2.2` mantido, `e1.3` mantido, mas o hiato registrado aqui.

### 7.2 Extrapolação linear — o que era só "mais do mesmo"

- **`e3.1.1`** (jam presencial e playtest ao vivo viram credencial mais forte que loja publicada) era `e3.1` amadurecendo: mesmo ator, mesmo mecanismo, só mais adiante no tempo. Viola a regra de parada. **Removido**, vai para a seção 12.
- **`e5.2.1`** (nasce a crítica de sistema narrativo) era `e5.1` com outro nome: mesmo ator (quem escreve sobre obra), mesmo mecanismo (perda de referente). **Removido**, vai para a seção 12.
- **`e8.3`** (estúdios expõem camada de texto oficial para controlar a tradução que não conseguem impedir) não tinha ator nomeado nem caso, e o mecanismo — "controlar o que não se consegue impedir" — serviria para qualquer tema. **Removido**, vai para a seção 12.

### 7.3 Velocidade de adoção — prazos que exigiam mais do que se viu

- **`e9`** estava em 2030. A classe de referência é o audiolivro sintético: catálogo de 50 mil títulos em um ano, mas 0,03% da receita. Catálogo não é adoção. E o beta de tradução do Audible cobre espanhol, francês, italiano e alemão — não português. **Prazo 2030 → 2032.**
- **`e8.1.1`** (partição do mercado de localização) estava em 2031. A tradução automática comercial existe desde os anos 2010 e o mercado de localização de jogos continuou crescendo o tempo todo; substituição de ofício por automação de tradução nunca foi rápida em caso nenhum. **Prazo 2031 → 2034** nesta passagem — e depois **2034 → 2039** na conferência de teto de 7.9, que é onde a referência foi de fato derivada em vez de estimada.
- **`e3.1`** estava em 2029 com sinal fraco. Mudança de instrumento de seleção em contratação é lenta e conservadora. **Prazo 2029 → 2030.**
- **`e11.1`** estava em 2030. Compliance de marcação que precisa atravessar engine, exportador e loja depende de cadeia inteira. **Prazo 2030 → 2031.**

### 7.4 A raiz que não acontece

- **Se a raiz 1 não se concretizar** (a geração do artefato inteiro continuar produzindo coisa que ninguém joga): sobra a raiz 3 inteira — a tradução como camada do leitor não depende de nada da raiz 1 — e sobra a parte da raiz 2 que é freeform conversacional. Cai `e1` a `e4` e `e11`. O mapa perde 40% e continua de pé.
- **Se a raiz 2 não se concretizar** (a obra adaptativa nunca sair do nicho): sobram as raízes 1 e 3 inteiras. Cai `e5` a `e7` e `e12`. O mapa perde o ramo mais conceitual e mantém os dois economicamente ancorados.
- **Se a raiz 3 não se concretizar** (a sobreposição continuar ruim e restrita a PC com GPU): sobram 1 e 2 inteiras. Cai o ramo `e8`–`e10`.

Nenhuma raiz é indispensável às outras — o que confirma que são três, e não uma disfarçada em três. A dependência que **existe** e precisa estar dita: `e12` (custo por turno) atinge as raízes 2 e 3 ao mesmo tempo, e é a única variável exógena capaz de mudar o mapa inteiro sozinha.

### 7.5 Suposições escondidas

1. **Que o preço por token continua caindo.** Todo o ramo `e6`/`e12` assume isso. Se parar, é o wildcard 3.
2. **Que as lojas continuam permitindo.** `e1`, `e1.1` e `e3` assumem Steam e itch.io abertas. Uma decisão de curadoria restritiva da Valve mudaria `e1` num trimestre.
3. **Que modelo capaz continua disponível localmente.** `e12.1.1` (o caminho brasileiro) depende de modelo aberto rodando em GPU de consumo. Se a fronteira aberta fechar, o Brasil não tem caminho barato e `e12.1.1` vira exclusão, não adaptação.
4. **Que "obra" continua sendo uma categoria que interessa a alguém.** `e5` e todo o seu ramo assumem que a perda do referente compartilhado incomoda. Pode simplesmente não incomodar — a conversa sobre jogos multiplayer já é sobre execuções distintas há vinte anos e ninguém reclamou.
5. **Que o Brasil importa obra e não exporta.** O recorte brasileiro deste mapa é de consumo (`e8`, `e12.1.1`). Se a produção nacional de narrativa crescer, o efeito relevante é outro: exportar sem localizar, o que é `e8` ao contrário e não está no mapa.

### 7.6 Viés do autor

Dois, específicos:

- **Viés de quem gosta do argumento da "obra que deixa de existir".** `e5`, `e5.1` e `e5.2` são os efeitos mais interessantes intelectualmente e os de sinal mais fraco do mapa. Estão aqui porque a pergunta é bonita. Mantidos, com confiança rebaixada e com a suposição escondida nº 4 declarada acima.
- **Viés de infraestrutura aberta.** Este mapa dá peso grande a repositório de GitHub e a projeto de comunidade (`LunaTranslator`, `Chronicler`, `Ren'Py`) porque são mensuráveis e porque eu os acho relevantes. Contagem de estrela não é adoção: `Bark` tem 39 mil estrelas e está morto há dois anos. Onde usei estrela, usei junto com a data do último commit, que é o que separa projeto vivo de projeto famoso.

### 7.7 Calibração

Depois das alterações: 1ª ordem — alta 3, média 9, baixa 0. 2ª ordem — alta 0, média 13, baixa 6. 3ª ordem — alta 0, média 0, baixa 14. Os números conferidos pelo verificador estão na seção 12. A confiança cai monotonicamente com a ordem. As três confianças altas de 1ª ordem (`e1`, `e7`, `e8`) são as três que têm número medido e artefato verificável hoje.

### 7.8 Registro de alterações

- `e3.1.1`: **removido** (vai para a seção 12), porque era `e3.1` amadurecendo — mesmo ator, mesmo mecanismo; viola a regra de parada.
- `e5.2.1`: **removido** (vai para a seção 12), porque era `e5.1` renomeado — mesmo ator e mesmo mecanismo.
- `e8.3`: **removido** (vai para a seção 12), porque não tinha ator nomeado e o mecanismo serviria para qualquer tema.
- `e4`: confianca `alta` → `media`, porque o dado dos ~60% é sobre ativo visual na Steam em geral, não sobre sprite de novela visual; a inferência é minha.
- `e6`: confianca `alta` → `media`, porque os três casos (Hidden Door, NovelAI, AI Dungeon) são de nicho e nenhum publica receita.
- `e5`: confianca `alta` → `media`, pela razão 1 do pré-mortem — todo o ramo pressupõe obra longa, e a obra longa não funciona (42% em 20 turnos).
- `e11.1`: confianca `media` → `baixa` e prazo `2030` → `2031`, pela razão 2 do pré-mortem.
- `e9`: prazo `2030` → `2032`, porque a classe de referência do audiolivro sintético mostra catálogo rápido e receita lenta, e português não está no beta.
- `e8.1.1`: prazo `2031` → `2034`, porque substituição de ofício por automação de tradução nunca foi rápida em caso comparável.
- `e3.1`: prazo `2029` → `2030`, porque mudança de instrumento de contratação é conservadora.
- `e1.2`: confianca `alta` → `media`, porque o caso Commonwealth mostra prêmios **revisando** processo, não ainda **exigindo** processo como regra escrita.
- `e3.1`, `e5.1` e `e12.1`: confianca `media` → `baixa`, na conferência de calibração de 7.7 — os três têm `sinal: fraco` e nenhum artefato observável hoje, e a segunda ordem estava com média demais para a distribuição cair de verdade.

A bateria derrubou três efeitos e rebaixou cinco, com pelo menos uma remoção ou rebaixamento por raiz: raiz 1 (`e3.1.1` removido, `e4` e `e1.2` rebaixados), raiz 2 (`e5.2.1` removido, `e5` e `e6` rebaixados), raiz 3 (`e8.3` removido, `e9` e `e8.1.1` adiados).

### 7.9 Conferência de teto — os prazos terminais encostados no horizonte

A TMI-0080 estabeleceu que, em rodada de horizonte longo, `prazo > horizonte em ordem 3: 0` é **suspeita de compressão** e não conformidade, obrigando a re-derivar pela classe de referência todo prazo terminal que caia na faixa `[horizonte-2, horizonte]`. A TMI-0081 estendeu a obrigação às rodadas `h2036` depois de medir um contraexemplo na rodada 07 desta mesma escada. Esta rodada não saiu com o contador em zero — saiu com quatro —, mas a faixa `[2034, 2036]` tinha **sete** prazos terminais, que é o mesmo padrão de amontoamento. Conferi os sete, um a um, pela classe de referência.

| id | prazo antes | classe de referência usada | prazo depois |
|---|---|---|---|
| `e1.1.1` | 2034 | selo de origem com auditoria paga: do marco regulatório ao mercado consolidado, ~12 anos (certificação orgânica). Marco = etiqueta obrigatória (2024–2026) | **2038** |
| `e2.1.1` | 2035 | mudança da unidade de revisão numa cadeia editorial: ~8 anos a partir de a ferramenta existir (`e2.1`, 2029) | **2037** |
| `e11.1.1` | 2034 | rotulagem obrigatória virando segmentação de prateleira: ~12 anos do marco (rotulagem nutricional). Marco = 02/08/2026 | **2038** |
| `e6.1.1` | 2034 | cláusula nova no contrato-padrão de publicação: 5 a 8 anos depois de o mercado existir (`e6.1`, 2030); referência: cláusula de direitos de e-book | **2036** |
| `e7.1.1` | 2035 | mudança de consenso profissional em disciplina de design: ~6 anos da proposta ao consenso (referência: *mobile first*, 2009→2015), a partir de `e7.1` (2029) | **2035, confirmado** |
| `e8.1.1` | 2034 | partição estrutural de setor de serviços sob pressão de automação: 8 a 12 anos do início da pressão (`e8.1`, 2029) | **2039** |
| `e8.2.1` | 2035 | medição do deslocamento de consumo após norma de conteúdo: 3 a 5 anos da norma (`e8.2`, 2030) | **2034** |

**Cinco dos sete estavam comprimidos, um foi confirmado e um foi antecipado.** Esta rodada está fora do gatilho literal da TMI-0080 — o contador não era zero, era quatro —, e mesmo assim a compressão estava lá. Por isso a conferência virou decisão nova: **TMI-0086**, que troca o gatilho do contador para a densidade da faixa `[horizonte-2, horizonte]`. O contador do verificador subiu de 4 para 8, e a faixa `[2034, 2036]` continua ocupada (`e8.2.1` 2034, `e7.1.1` 2035, `e6.1.1` 2036), o que afasta também a hipótese oposta da TMI-0085 — a janela final vazia. A lição, para quem ler a escada de horizontes depois: o contador diferente de zero **não** dispensa a conferência. Quatro efeitos já fora da janela me deram, na primeira redação, a sensação de mapa calibrado, e sete prazos amontoados no teto passaram sem que eu olhasse.

## 8. O que a máquina errou

Eu sou a máquina. O que fiz de errado nesta rodada, com o motivo da desconfiança:

1. **Aceitei, por um momento, números de usuários vindos de blogspam.** Ao buscar escala de `AI Dungeon` e `NovelAI`, o que voltou foram páginas de SEO (arcanumrpgs, weavai, roletopia, zencreator) e, dentro delas, um "Character.AI tem 20M+ de usuários ativos mensais e 10M+ de personagens". Nenhuma fonte primária. **Não usei o número em lugar nenhum do mapa**, e é por isso que a raiz 2 está ancorada em Hidden Door (que tem fatos verificáveis: investidor nomeado, valor de seed, modelo declarado pela própria empresa) e não em escala de plataforma. O risco era exatamente o de número redondo sem origem.

2. **Citei o IFComp por uma página que não é a que a busca me deu.** O post original (`blog.ifcomp.org`, Tumblr) devolveu HTTP 403 e eu tinha o texto da regra apenas pelo resumo do buscador. Fui a `ifcomp.org/rules/` e confirmei lá. Consequência honesta: a afirmação de que a regra foi informada "pela pesquisa pós-competição de 2025, a que mais teve resposta na história da organização" **não está confirmada por página que eu tenha aberto** — aparece no resumo da busca, não na página de regras. Não usei como fato; registro como não verificado.

3. **Estou repassando uma alegação de terceiro sobre marca d'água.** O Christian Science Monitor afirma que a Anthropic anunciou marca d'água em toda saída do Claude a partir de agosto de 2026, sem opção de desligar, e que a OpenAI desenvolveu detecção com 99,9% de acurácia e não a lançou. Não abri fonte primária de nenhuma das duas, e **não construí efeito nenhum sobre elas**. Se fossem verdadeiras, `e11.1` mudaria de confiança baixa para média. Ficam como alegação do jornal.

4. **A página "sobre" do MangoBox não tem número nenhum.** Abri, e não há usuários, histórias criadas, preço nem data de lançamento — só navegação e contato. A descrição do produto veio da página inicial e do resumo de busca. Qualquer afirmação minha sobre **escala** do MangoBox seria invenção; por isso ele aparece como existência de categoria, não como medida de adoção.

5. **Quase escrevi o efeito genérico que a própria skill proíbe.** A primeira versão de `e3.1` era "cursos de escrita e de design reorganizam o currículo" — que serve para qualquer tema deste semestre e não diz nada. Substituí por um efeito com ator nomeado (jam presencial, banca com defesa ao vivo) e mecanismo (o portfólio publicado deixou de ser proxy de esforço). O teste de especificidade pegou; se não tivesse pegado, o mapa teria um efeito de enchimento.

6. **Comprimi cinco prazos terminais contra o teto do horizonte, e só percebi porque uma decisão em vigor me obrigou a conferir.** Na primeira redação, sete dos quatorze efeitos de 3ª ordem caíam na faixa `[2034, 2036]` — o ano do horizonte e os dois anteriores. Isso não é coincidência: é o que acontece quando se deriva o prazo do filho somando "três a cinco anos" ao do pai e depois se olha se cabe. A conferência da TMI-0080/0081 (seção 7.9) derrubou cinco: `e1.1.1` 2034→2038, `e2.1.1` 2035→2037, `e11.1.1` 2034→2038, `e6.1.1` 2034→2036, `e8.1.1` 2034→2039. O contador de efeitos fora da janela subiu de 4 para 8. **A sensação de mapa calibrado veio antes da conferência e estava errada.**
7. **Citei, na primeira versão, a lista de IPs licenciados do Hidden Door a partir de resumo de busca.** `The Crow`, 831 Stories, Alan Dean Foster, Ramez Naam e Charles Stross apareciam como fato. Ao tentar abrir as fontes — Variety e Forbes —, recebi 402 e 403. Nem o press kit nem a página de produto do Hidden Door listam os IPs. **Retirei a lista do corpo do mapa** e a deixei registrada como não verificada. `e6.1` continua de pé porque o mecanismo (licenciar mundo jogável como linha de receita) está sustentado pelo material da própria empresa; o que caiu foi a ilustração, não o efeito.
8. **Datei errado a audiência da Câmara sobre dublagem.** O resumo de busca sugeria 2025; a página da Câmara, aberta, diz **29/08/2024**, nas Comissões de Cultura **e de Trabalho**, e nomeia dois projetos (PL 1376/22 e PL 2338/23) que eu não tinha. Corrigido. É o tipo de erro que não muda o efeito e envenena a data — e num mapa cuja moeda é prazo, data errada é o pior tipo de erro barato.
9. **Subestimei o melhor fato do mapa por não ter aberto a fonte certa na primeira vez.** Eu tinha "a Character.AI barrou menores de conversa aberta". Abrindo o anúncio da empresa e a cobertura do TechCrunch, o fato é outro e é muito mais forte para este tema: o que ela colocou no lugar chama-se `Stories` e é **ficção interativa orientada**. Ou seja, `e7.2.1` — que eu tinha derivado como efeito de 3ª ordem, sinal médio, para 2031 — **já aconteceu em 25/11/2025**. Subi o sinal para forte e mantive o prazo e a confiança, porque o que já existe é o caso de uma plataforma, não o padrão do setor. Registro o erro: eu tinha o efeito certo com a evidência fraca, e só achei a evidência forte na segunda passagem.
10. **Os demais prazos de 3ª ordem continuam sendo o ponto fraco do documento.** Os que a conferência de 7.9 não alcançou (`e1.2.1`, `e5.1.1`, `e12.1.1`, `e7.2.1`, `e4.1.1`, `e6.2.1`, `e9.1.1`) foram derivados dos de 2ª ordem com folga estimada, e isso é convenção, não medida. Devem ser lidos como ordenação relativa, não como data.

7. **A tabela de classes de referência mistura coisas de qualidade desigual.** "Regulação reativa a dano com menor: ~18 meses" é derivada de **um** caso (Character.AI). Classe de referência com n=1 é anedota com nome pomposo. Mantive porque é melhor declarar a base do prazo do que esconder, mas `e7.2` deve ser lido com essa ressalva.

## 9. Três cenários para 2036

**Provável.** A narrativa gerativa não substituiu a escrita: ocupou o andar de baixo do mercado e empurrou todo mundo um degrau. O catálogo de ficção é dez vezes maior e vale menos por obra; a receita por título caiu também para quem escreveu à mão, porque o que ficou escasso foi a atenção. O produto que deu certo não é o que gera livremente — é o que restringe, com canon escrito por gente e catálogo de situações curado, e cobra por execução. Quem escreve para jogo virou duas profissões: um punhado de pessoas que desenham a restrição, bem pagas, e um mercado encolhido de quem escreve a fala. O ilustrador de novela visual perdeu a encomenda de volume e ganhou a de direção — mas o degrau pelo qual se entrava na profissão sumiu, e a entrada de gente nova depende de residência paga. Prêmios e concursos pedem arquivo de processo como se pede currículo. Na Europa, a obra distribuída carrega marca de procedência legível por máquina; fora dela, mais ou menos. E no Brasil, jogo japonês se joga em português na hora, com a sobreposição rodando na GPU do jogador, enquanto a lei que protege o dublador protege a obra oficial — e a obra oficial é a que menos gente consome. *Sinal precoce de que estamos aqui:* o fosso de desempenho entre obra declarada e não declarada permanece perto de 2,5× por três Next Fests seguidos, enquanto a fatia de declaração passa de 50%.

**Desejável.** A mesma expansão de catálogo aconteceu, mas duas coisas foram construídas a tempo. A primeira: procedência virou infraestrutura de verdade — a marca legível por máquina sobrevive à exportação, o histórico de processo é do autor e não da plataforma, e por isso "feito por humano", "assistido" e "gerado" são três categorias que o leitor filtra como filtra idioma, sem que ninguém precise acusar ninguém. Isso desarmou o clima de caça às bruxas de 2026, em que autores tiveram livros cancelados por rumor e detector. A segunda: a coautoria foi tratada como ofício e não como atalho — a ferramenta de autoria passou a mostrar a distribuição de histórias possíveis, e quem escreve aprendeu a trabalhar nesse objeto. A tradução por camada do leitor foi incorporada em vez de combatida: estúdios publicam a camada de texto, o tradutor humano trabalha sobre a saída da máquina e é pago por isso, e obra que nunca teria versão em português passou a ter. *O que teve que ser feito para chegar aqui:* a marcação de procedência precisou ser fiscalizada de fato, e a norma brasileira de dublagem precisou regular a **obra publicada** sem criminalizar a ferramenta do leitor. *Sinal precoce:* uma engine de autoria mainstream incorporando visualização de espaço de possibilidades; um acordo coletivo brasileiro que precifique revisão de saída de máquina em vez de proibir a máquina.

**Indesejável.** O catálogo virou ruído e a curadoria virou pedágio. As lojas descobriram que a etiqueta de procedência é o eixo de ordenação mais barato que existe e passaram a vendê-la: quem paga aparece, quem não paga não existe, e a distinção "humano/gerado" virou um plano de assinatura. A narrativa adaptativa comercial se consolidou como serviço — nada do que se comprou continua existindo depois que o servidor desliga, e não há exemplar para guardar. O que se lê depende do que se paga: quem assina o plano caro recebe as cenas escritas com o modelo grande, quem não assina recebe a versão de modelo pequeno, e isso não é uma diferença de conforto, é uma diferença de enredo — no Brasil, onde a assinatura pesa mais, a versão barata virou a versão padrão. O ofício de entrada desapareceu em três frentes ao mesmo tempo — sprite, fala, tradução — e não foi substituído por nada. E a comunidade de resenha voluntária, que era o único filtro que não cobrava, simplesmente parou. *Sinal precoce deste cenário:* uma loja grande lançar posicionamento pago atrelado à etiqueta de IA; ou o IFComp não conseguir juízes suficientes em uma edição.

## 10. O experimento

### Banco de execuções — a mesma obra lida por quatorze pessoas

**O que é.** Um protótipo mínimo de novela visual gerativa (Ren'Py como casca, um LLM local no laço, canon fixo em Markdown no formato do `Chronicler`) e um instrumento de medição. Os quatorze alunos da turma recebem **a mesma semente**: o mesmo canon, o mesmo prompt inicial, o mesmo modelo, a mesma versão. Cada um joga vinte turnos. O sistema registra o log completo de cada execução — turno, entrada do jogador, saída, estado.

Depois, três medidas sobre os quatorze logs:

1. **Núcleo comum.** Que eventos de enredo aparecem em quantas das quatorze execuções? (Marcação manual em dupla, com desacordo registrado.)
2. **Turno da quebra.** Em que turno cada execução produz a primeira contradição com o canon ou consigo mesma? É o NCP-Bench com humanos no lugar do agente adversário — e humanos são adversários piores e mais criativos que um script.
3. **Teste da conversa.** Duas pessoas que jogaram execuções diferentes conversam por dez minutos sobre "a obra", com um terceiro anotando: quantas vezes precisam explicar o próprio enredo antes de conseguirem discordar de alguma coisa?

**Que pergunta sobre o futuro ele ajuda a responder.** A pergunta de 2ª ordem do tema: **se a história se adapta a cada leitor, ainda existe "a obra"?** Ela é empírica e ninguém a mediu — o NCP-Bench mede consistência contra intervenção, não *referente compartilhado*. Este experimento mede o que sobra em comum, que é a condição material de existir crítica, cânone, aula e conversa.

**Que tecnologia emergente ele usa, e por que não dá com a madura.** Usa geração no laço com canon externo. Não dá com `Ren'Py` sozinho — e a razão é exata, não retórica: numa árvore escrita à mão, as quatorze execuções são **necessariamente** um subconjunto de um conjunto que alguém enumerou, e o núcleo comum é um artefato da autoria, não da leitura. A medida só significa alguma coisa quando o espaço de execuções não foi escrito por ninguém.

**O que a turma faz ao testar em sala.** Joga os vinte turnos (≈25 min), marca os logs em dupla (≈30 min), roda o teste da conversa em pares cruzados (≈20 min) e fecha com a tabela de núcleo comum na lousa. Sai um número: a fração de eventos compartilhados por pelo menos doze das quatorze execuções.

**O resultado que me faria mudar de ideia.** Se o núcleo comum for **alto** — digamos, ≥70% dos eventos de enredo presentes em ao menos doze das quatorze execuções — então a obra adaptativa **não** dissolve o referente compartilhado; ela o mantém e varia a superfície. Nesse caso `e5`, `e5.1` e `e5.2` caem inteiros, e a raiz 2 perde o que tem de mais forte, sobrando dela só a parte econômica (`e6`, `e12`). Seria o achado mais útil deste mapa, porque derruba a parte de que eu mais gosto — que é exatamente o viés declarado em 7.6.

E se o núcleo comum for **baixo** (<30%) mas o teste da conversa correr bem mesmo assim, aprendemos outra coisa, mais interessante: que as pessoas conversam sobre o sistema e não sobre o enredo — e aí o objeto cultural do futuro não é a história, é o gerador.

## 11. Fontes

Quarenta fontes, **todas abertas em 12/09/2026** — por `WebFetch` ou, no caso dos repositórios, pela API do GitHub. Fonte que não abriu não entra: as sete que devolveram 402, 403 ou 404 estão listadas em 12.5, com o que elas sustentariam e o que deixei de afirmar por causa disso.

**Ferramentas e produtos**

1. `https://www.mangobox.ai/` — MangoBox: a partir de um prompt, gera até cinco personagens com personalidade, objetivo e estilo visual próprios, retratos e arte de cena em estilos escolhidos, cena de abertura, e conversa em que os personagens respondem ao jogador e entre si, com interrupção. Plano Pro a US$ 9/mês; rodapé © 2025. Sustenta a raiz 1. Confiabilidade: material do próprio fornecedor — prova de existência e de preço, não de adoção.
2. `https://itch.io/games/made-with-renpy` — 10.656 jogos feitos com Ren'Py. Sustenta a recusa de maturidade do §2. Confiabilidade: alta, contagem da própria loja no momento da consulta.
3. `https://store.steampowered.com/app/3812790/Live_Translate/` — tradução offline vendida na Steam desde 20/06/2026, R$ 45,46 (de R$ 53,49), 140+ idiomas, tradução de áudio em tempo real com sobreposição, de imagem e de vídeo, Windows, mínimo de 8 GB de VRAM e ~40 GB de disco, Acesso Antecipado, 53% de avaliações positivas em 30 análises. Sustenta `e8` e o sinal fraco 2. Confiabilidade: alta para preço, data e avaliação; a alegação de qualidade é do vendedor.
4. `https://www.hiddendoor.co/press` — press kit: estúdio transmídia, Narrador de IA, ferramenta `Atlas`, cobertura de lançamento em 13–14/08/2025, US$ 7 mi de seed (2022) com Makers Fund, Northzone e Betaworks. Sustenta `e6`. Confiabilidade: material da própria empresa.
5. `https://www.hiddendoor.co/` — página de produto: o criador publica mundos e "ganha dinheiro quando outros jogam". Sustenta `e6.1`. Confiabilidade: idem; note-se que **não** lista os IPs licenciados (ver 12.5).
6. `https://blog.character.ai/u18-chat-announcement/` — anúncio de 29/10/2025: remoção da conversa aberta para menores de 18 até 25/11/2025, limite de duas horas por dia na transição, verificação de idade com modelo próprio mais Persona, e criação de vídeos, histórias e transmissões no lugar. Sustenta `e7.2`. Confiabilidade: alta, é a fonte primária do fato.
7. `https://techcrunch.com/2025/11/25/character-ai-will-offer-interactive-stories-to-kids-instead-of-open-ended-chat/` — o substituto é `Stories`, "uma maneira orientada de criar e explorar ficção, em vez de chat aberto", em vigor desde 25/11/2025. Sustenta `e7.2.1`, e é o que muda o sinal dele de médio para forte. Confiabilidade: imprensa de tecnologia de referência, citando a empresa.

**Repositórios (metadados lidos pela API do GitHub em 12/09/2026)**

8. `https://github.com/HIllya51/LunaTranslator` — 13.145 estrelas, 1.144 forks, C++, GPL-3.0, criado em 28/09/2022, push em 12/09/2026. Sustenta a raiz 3.
9. `https://github.com/renpy/renpy` — 6.812 estrelas, criado em 28/06/2012, push em 12/09/2026. A base madura.
10. `https://github.com/dialogic-godot/dialogic` — 5.996 estrelas, push em 30/08/2026.
11. `https://github.com/Azgaar/Fantasy-Map-Generator` — 5.991 estrelas, push em 12/09/2026.
12. `https://github.com/klembot/twinejs` — 2.882 estrelas, criado em 23/01/2018, push em 05/09/2026.
13. `https://github.com/YarnSpinnerTool/YarnSpinner` — 2.841 estrelas, criado em 03/10/2015, push em 07/09/2026.
14. `https://github.com/LingyiChen-AI/AIComicBuilder` — roteiro → quadrinho animado, 1.860 estrelas, push em 27/04/2026. Sustenta a raiz 1.
15. `https://github.com/ganelson/inform` — 1.641 estrelas, push em 24/06/2026.
16. `https://github.com/mhgolkar/Arrow` — 1.347 estrelas, push em 05/09/2025 (parado há um ano).
17. `https://github.com/mak-kirkland/chronicler` — worldbuilding offline em Markdown, 717 estrelas, push em 12/09/2026. Sustenta o sinal fraco 4.
18. `https://github.com/2noise/ChatTTS` — 39.828 estrelas, criado em 27/05/2024, push em 10/04/2026. Sustenta o sinal fraco 5.
19. `https://github.com/suno-ai/bark` — 39.265 estrelas, criado em 07/04/2023, push em **19/08/2024**. Sustenta o sinal fraco 5: projeto grande e parado há dois anos.

**Pesquisa (preprints; nenhum revisado por pares, e isso está considerado na confiança)**

20. `https://arxiv.org/abs/2608.08160` — NCP-Bench: 100 ambientes narrativos derivados de sinopses, com trajetória, compromissos e fatos verificáveis; GPT-5.2 com **42% de sobrevivência após 20 turnos**; conflito factual de **40% a 68%**; apenas execuções isoladas cumprem todos os compromissos em 100 turnos. É o número que sustenta `e7` e todo o pré-mortem. Confiabilidade: desenho verificável e números explícitos; preprint.
21. `https://arxiv.org/abs/2605.08503` — NARRA-Gym, 08/05/2026, dezoito autores: avalia nove LLMs de fronteira em coerência, estado em contexto longo, consistência de personagem, personalização e geração de artefato, com oito personas, juiz automático e avaliação humana. Achado: variação substancial entre modelos, personas e dimensões. Sustenta a seção 3.2.
22. `https://arxiv.org/abs/2607.20349` — Chakrabarty, Liu, Ginsburg e Dhillon, 22/07/2026: 14.419 livros de ficção de gênero autopublicados na Amazon, 2023–2026, detecção em texto integral e venda diária; livros com venda ×19,2 contra receita ×8,9; livros sem IA perdendo mais terreno nos gêneros de alta difusão e onde o Kindle Unlimited pesa. É a espinha de `e1`. Confiabilidade: metodologia descrita, coautoria jurista de peso (Ginsburg); detecção de IA em texto tem erro conhecido, o que o próprio paper trata.
23. `https://arxiv.org/abs/2601.15295` — Elsewise, de Wang, Chung, Roemmele, Sun, Halperin, Lu e Kreminski; submetido em 21/12/2025, revisado em 09/09/2026; "Bundled Storylines" para visualizar o espaço de possibilidades; estudo com **12 participantes**. Sustenta `e2.1` e o sinal fraco 3. Amostra pequena, declarada.
24. `https://arxiv.org/abs/2601.18785` — Dramamancer: esquema do autor → execução do jogador. Resumo estendido de workshop, **sem número de teste**. Usado só como existência de linha de pesquisa, e é a fonte mais fraca desta lista.
25. `https://arxiv.org/abs/2502.17878` — Wu, Wu, Xu, Zhang e Zhao, ACL 2025: imersão e agência em drama interativo com LLM, avaliação por julgamento humano. Contexto da seção 3.2.

**Regra, norma e decisão**

26. `https://ifcomp.org/rules/` — regra de autoria do IFComp 2026: todo conteúdo player-facing criado inteiramente por humanos, incluindo capa, prosa e ativos; IA permitida para edição, depuração, acessibilidade, pesquisa, tradução limitada e código; entrada não pode exigir que o jogador use serviço de IA externo. Sustenta `e1.3`. Confiabilidade: alta, é o regulamento.
27. `https://intfiction.org/t/interactive-fiction-competitions-open-to-genai-entries-2026/77758` — fórum da comunidade: o Spring Thing mudou de posição porque "os resenhistas disseram que parariam de participar se isso significasse atravessar quantidades crescentes de slop". Sustenta `e1.3` e o sinal fraco 1. Confiabilidade: média — é fórum, com falas atribuídas a nomes públicos da comunidade.
28. `https://itch.io/t/4309690/generative-ai-disclosure-tagging` — anúncio oficial da itch.io, de **20/11/2024**, por leafo: campo de declaração com quatro tipos (gráficos, som, texto e diálogos, código), tags automáticas `AI Generated` e `No AI`, obrigatório para pacotes de asset, e perda de indexação nas páginas de navegação para quem não etiqueta. Sustenta `e1.1`. Confiabilidade: alta, fonte primária da plataforma.
29. `https://www.gamedeveloper.com/business/valve-tweaks-and-clarifies-ai-disclosure-rules-for-steam` — reescrita do formulário da Valve em **16/01/2026**: declara-se IA que gera conteúdo do jogo e IA que gera conteúdo durante o jogo; ferramenta de fluxo de trabalho, como assistente de código, fica dispensada. Sustenta a seção 3.5.
30. `https://artificialintelligenceact.eu/article/50/` — texto do art. 50(2): quem fornece sistema que gera áudio, imagem, vídeo ou texto sintético assegura que a saída seja marcada em formato legível por máquina e detectável como gerada, com solução técnica eficaz, interoperável, robusta e confiável. Aplicável a partir de **02/08/2026** pelo art. 113. Sustenta `e11`. Confiabilidade: alta, é o texto da norma.
31. `https://www.copyright.gov/ai/` — página oficial: Parte 1 (réplicas digitais) em 31/07/2024, Parte 2 (copyrightability) em 29/01/2025, Parte 3 (treino) em pré-publicação em 09/05/2025. Sustenta a seção 3.5. Confiabilidade: alta, órgão oficial. **Ressalva:** a página índice não reproduz as conclusões da Parte 2; a formulação "prompt sozinho não constitui autoria" vem do relatório, não desta página, e está marcada como tal na seção 8.
32. `https://ipandmedialaw.fkks.com/post/102ksuq/new-sag-aftra-2025-interactive-media-agreement-approved-by-members` — Interactive Media Agreement ratificado em **09/07/2025**, com 95% de aprovação, após cerca de um ano de greve: consentimento com descrição razoavelmente específica do uso da réplica digital, exigência de que a réplica seja objetivamente identificável como a pessoa, relatórios de uso obrigatórios do produtor, e remuneração quando a réplica gera performance que exigiria o intérprete. Sustenta `e9.1`. Confiabilidade: análise jurídica de escritório; a página oficial do sindicato devolveu 403 (ver 12.5).
33. `https://www12.senado.leg.br/noticias/materias/2025/08/07/cdh-examina-sugestao-que-protege-dubladores-contra-a-concorrencia-com-a-ia` — **SUG 7/2025**, apresentada em 24/04/2025 pela dubladora Adriana Torres, 20 mil apoios alcançados em 15/05/2025, aguardando relatório do senador Magno Malta (PL-ES) na CDH; pede tornar obrigatória a atuação de dubladores profissionais em empresas nacionais. Sustenta `e8.2`. Confiabilidade: alta, agência oficial do Senado.
34. `https://www.camara.leg.br/noticias/1092791-segmento-de-dublagem-pede-protecao-legal-contra-uso-de-voz-gerada-por-inteligencia-artificial/` — audiência pública em **29/08/2024** nas Comissões de Cultura e de Trabalho, com o Movimento Dublagem Viva e o Ministério da Cultura; em discussão o **PL 1376/22** e o **PL 2338/23** (Rodrigo Pacheco). Sustenta `e8.2`. Confiabilidade: alta, agência oficial da Câmara.

**Mercado e imprensa**

35. `https://www.llamagriffin.com/Data/SteamNextFestJune2026/part-2.html` — Next Fest de junho de 2026: 1.163 de 4.382 demos rastreadas com declaração de IA (**26,5%**), ~1.700 de ~8.682 entradas do evento (~20%), 40% dos lançamentos novos da semana encerrada em 14/06/2026, ~60% das declarações em ativo visual, código dispensado pela política de janeiro de 2026, e **1 das 10 demos mais jogadas** com declaração. Também: ~1.000 títulos declarados em todo 2024 e 7.818 no primeiro semestre de 2025. Sustenta `e1`, `e4` e o sinal fraco 6. Confiabilidade: análise independente com amostra e método declarados.
36. `https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/` — GDC 2026, 2.300+ respondentes: 52% negativo, 7% positivo, 36% de uso (30% em estúdio, 58% em publicação e marketing); por área, 64% em arte, **63% em design e narrativa**, 59% em programação. Sustenta `e2.2`. Confiabilidade: alta para a série histórica; survey de autosseleção, como a própria organização declara.
37. `https://www.gamedeveloper.com/business/one-third-of-game-workers-use-generative-ai-but-half-think-it-s-bad-for-the-industry` — leitura independente do mesmo survey, de 03/02/2026, com a quebra por uso: **81% pesquisa ou brainstorming, 47% tarefa rotineira, 19% geração de ativo, 10% geração procedural**. É o número que qualifica `e2`: a máquina entrou no trabalho antes de entrar na obra. Confiabilidade: imprensa do setor.
38. `https://www.csmonitor.com/Arts-Culture/Books/2026/0812/ai-publishing-commonwealth-prize-shy-girl` — Commonwealth Short Story Prize (2026), *Shy Girl* de Mia Ballard (cancelado pela Hachette) e *Call Me, I'll Hide the Body* de Jerry Falade (retirado por duas agências); o detector Pangram marcando *The Serpent in the Grove* como "100% gerado"; a Commonwealth Foundation resolvendo o caso por **rascunhos de trabalho, documentos com carimbo de tempo e anotações**; enquete BookBub de 2025 com 1.200+ autores, 45% usando e 48% não. Sustenta `e1.2` e a seção 3.6. Confiabilidade: jornalismo com fontes nomeadas. **As alegações desta matéria sobre marca d'água de OpenAI e Anthropic não foram verificadas e não sustentam efeito nenhum** (ver seção 8, item 3).
39. `https://www.audible.com/about/newsroom/audible-expands-catalog-with-ai-narration-and-translation-for-publishers` — anúncio de **13/05/2025**: produção gerenciada ou autosserviço, 100+ vozes sintéticas em inglês, espanhol, francês e italiano; tradução em beta texto-para-texto e **fala-para-fala preservando voz e estilo do narrador**, de inglês para espanhol, francês, italiano e alemão, com revisão por linguista opcional. Sustenta `e9` e `e9.1`. Confiabilidade: alta para o compromisso da empresa; nenhuma para adoção.
40. `https://www.omelete.com.br/games/pesquisa-game-brasil-2026-ia-jogos` — Pesquisa Game Brasil 2026, 7.000+ respondentes de 16 a 55 anos, publicada em **09/04/2026**: 45,7% se preocupam com a precarização do processo criativo pela IA; 39,3% ainda comprariam jogo desenvolvido em boa parte com apoio dela. É a nota Brasil. Confiabilidade: imprensa reportando survey comercial; a metodologia completa não foi aberta nesta rodada, e por isso nenhum efeito depende só deste número.

## 12. Anexo — o levantamento bruto

### 12.1 Saída do verificador

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 3 (frontmatter diz 3)
efeitos ordem 1: 12 (frontmatter diz 12)
efeitos ordem 2: 19 (frontmatter diz 19)
efeitos ordem 3: 14 (frontmatter diz 14)
prazo > horizonte (2036) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 8 [('e1.1.1', 2038), ('e2.1.1', 2037), ('e4.1.1', 2038), ('e11.1.1', 2038), ('e5.1.1', 2038), ('e6.2.1', 2037), ('e8.1.1', 2039), ('e9.1.1', 2037)]
confiança ordem 1: alta 3 · media 9 · baixa 0
confiança ordem 2: alta 0 · media 13 · baixa 6
confiança ordem 3: alta 0 · media 0 · baixa 14
links da seção 11: 40/40 respondem (frontmatter diz fontes: 40)
RESULTADO: ok
```

Comando: `python3 /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/futurizacao-giordano/references/verificar.py /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/giordano-h2036/08-narrativa-gerativa-e-coautoria/tendencia-narrativa-gerativa-e-coautoria.md --links`

Os **oito** efeitos de 3ª ordem que passam do horizonte estão declarados, como manda a regra 8 do §3 da skill e a TMI-0055: `e1.1.1` (2038, o selo auditado), `e2.1.1` (2037, a revisão editorial por amostragem), `e4.1.1` (2038, o degrau de entrada da ilustração desaparecendo), `e5.1.1` (2038, o arquivo assumindo que não preserva a obra), `e6.2.1` (2037, a exigência de modo offline congelado), `e8.1.1` (2039, a partição do mercado de localização), `e9.1.1` (2037, a partição da carreira de voz) e `e11.1.1` (2038, a marcação virando segmentação). Todos estão fora da janela de 2036 e portanto fora do que este mapa pode defender; permanecem no bloco porque a cadeia causal só fecha ali, e todos estão com `confianca: baixa`.

Cinco desses oito **só foram parar fora da janela depois da conferência de teto da seção 7.9** — na primeira redação estavam comprimidos contra 2034–2036. O contador subiu de 4 para 8. Isto é o registro da TMI-0080/TMI-0081 nesta rodada: o contador diferente de zero não dispensa a conferência, e foi exatamente essa falsa sensação de conformidade que quase deixou os cinco passarem.


### 12.2 Premissas assumidas por não ter havido entrevista

O briefing desta rodada veio completo (modo, tema, slug, autor, zona de interesse, horizonte, público, recorte, descartado, raiz suspeita, viés, busca web, saída). Não houve pessoa para responder, e por isso o §0 da skill foi cumprido pelo briefing, sem rebaixamento de confiança — mas o que o briefing **não** cobriu está aqui, declarado, e não escondido:

| O que o briefing não disse | O que eu assumi | Consequência se estiver errado |
|---|---|---|
| Se "quem projeta mídia e interação" inclui quem trabalha fora de jogos | Assumi que sim: editora, audiolivro, quadrinho e localização entram | Se fosse só jogos, `e1`, `e9`, `e9.1` e metade da raiz 3 sairiam do recorte |
| O que exatamente conta como "comum em produto de massa" | Operacionalizei pela escala de difusão do §2 da skill, com corte em *maioria* | Um corte mais brando promoveria "assistente de escrita" a raiz, e o mapa teria quatro |
| Se a nota sobre o Brasil é de consumo ou de produção | Assumi consumo — assimetria de preço e de língua | Se fosse produção, o efeito relevante seria exportar sem localizar, que não está mapeado (ver 7.5, item 5) |
| Quais "ideias óbvias" excluir, além do que serve para qualquer tema | Excluí os quatro efeitos que a própria skill proíbe: currículo, regulador genérico, profissão nova, "mudanças no mercado de trabalho" | Registrado abaixo, em 12.4 |
| O que faria o autor mudar de ideia | O briefing deu: evidência de adoção além da maioria inicial, ou de que a tecnologia só melhora o que existe | Virou o critério de recusa do §2 e a régua do experimento (seção 10) |

### 12.3 Os efeitos cortados no §6, na íntegra

Nenhum corte silencioso. Os três estão aqui como estavam antes de serem removidos.

**`e3.1.1` (3ª ordem, raiz 1) — removido.**
> *O jam presencial e o playtest ao vivo viram credencial mais forte que a loja publicada.* — sinal fraco, prazo 2032, confiança baixa.
> **Motivo da remoção:** é `e3.1` amadurecendo. Mesmo ator (quem contrata, quem avalia), mesmo mecanismo (o artefato publicado deixou de sinalizar esforço). A regra de parada do §3.9 diz para derivar o próximo nível só enquanto houver troca de ator ou de mecanismo, e aqui não há nenhuma das duas.

**`e5.2.1` (3ª ordem, raiz 2) — removido.**
> *Nasce um gênero crítico novo — a crítica de sistema narrativo, que avalia a distribuição de execuções em vez de uma.* — sinal fraco, prazo 2034, confiança baixa.
> **Motivo da remoção:** é `e5.1` com outro nome. O ator é o mesmo (quem escreve sobre obra) e o mecanismo é o mesmo (perda de referente único). Vale registrar que ele é interessante e que eu gostaria que ficasse — o que é exatamente o sintoma de viés que 7.6 descreve.

**`e8.3` (2ª ordem, raiz 3) — removido.**
> *A obra passa a ser projetada para ser interceptada: estúdios expõem a camada de texto (API ou hook oficial) para controlar a tradução que não conseguem impedir.* — sinal fraco, prazo 2031, confiança baixa.
> **Motivo da remoção:** não passa no teste de especificidade do §3.3. "Expor a interface para controlar o que não se consegue impedir" é uma frase que serve para qualquer disrupção de plataforma — troque "tradução" por "mod", por "captura de tela" ou por "leitor de tela" e ela continua de pé. Sem ator nomeado e sem caso observado, é enredo.

### 12.4 Os efeitos que nem chegaram a entrar

Quatro formulações foram escritas e descartadas antes do bloco `roda:`, porque a própria skill as proíbe por serem genéricas. Ficam registradas para que se veja o que o filtro pegou:

1. *"Cursos de escrita criativa e de design de jogos reorganizam o currículo em torno de direção em vez de execução."* — serve para qualquer um dos dezenove temas do semestre. Substituído por `e3.1`, com ator (jam presencial, banca com defesa ao vivo) e mecanismo (o portfólio deixou de ser proxy de esforço).
2. *"Reguladores criam uma categoria jurídica nova para obra coautorada."* — sem regulador nomeado e sem mecanismo. O que sobrou disso, com nome e data, foi `e11` (art. 50 do AI Act, 02/08/2026) e `e8.2` (CDH do Senado e Comissão de Cultura da Câmara).
3. *"Surge a profissão de curador de narrativa gerativa."* — profissão nova é o efeito genérico por excelência. O que sobrou, com mecanismo, foi `e2` (a partição do ofício existente) e `e2.1` (a ferramenta que muda o objeto de revisão).
4. *"Mudanças no mercado de trabalho criativo."* — sem sujeito. Substituído por cinco efeitos com ator e perda nomeados: `e4`, `e4.1`, `e4.1.1`, `e10`, `e2`.

### 12.5 As buscas que não deram em nada

- **Escala de `AI Dungeon` e de `NovelAI` (usuários, receita, retenção).** Dezenas de páginas de SEO comparando plataformas de roleplay, nenhum número primário. O único número que apareceu — "Character.AI com 20M+ de usuários ativos mensais e 10M+ de personagens" — vinha de página de comparação comercial, sem origem citada. **Não usei.** Consequência: a raiz 2 está ancorada em `Hidden Door`, que tem fatos verificáveis, e não em escala de plataforma.
- **Números do `MangoBox`.** A página "sobre" não traz usuários, histórias criadas, preço nem data de lançamento. Nenhuma cobertura de imprensa independente foi encontrada. Entra como existência de categoria.
- **Tamanho do mercado de localização de jogos com metodologia aberta.** O relatório de mercado da Slator devolveu 403; as demais fontes eram press releases de consultoria de market research com projeções divergentes entre si por fator de 2,5× (US$ 1,52 bi contra US$ 3,90 bi para o mesmo ano). **Nenhum número de mercado de localização entrou neste mapa** — `e8.1` e `e8.1.1` são derivados de mecanismo, não de projeção de mercado.
- **Estatística agregada do itch.io sobre volume de novelas visuais publicadas por ano.** A plataforma não publica série histórica; só a contagem por tag no momento da consulta (10.656 com Ren'Py). Sem série, não dá para medir aceleração — e por isso `e1` está ancorado no estudo dos 14.419 livros, não no itch.io.
- **Sete páginas recusaram a leitura, e o que cada uma me custou.** Registro separado porque a regra da skill — *fonte que não abriu não entra* — só é honesta se o custo dela aparecer:

| Fonte | Código | O que ela sustentaria | O que fiz |
|---|---|---|---|
| `variety.com` (Hidden Door, 14/08/2025) | 402 via redirecionamento para `tollbit.variety.com` | a lista de IPs licenciados do Hidden Door | **retirei a lista do mapa** (ver seção 8, item 7) |
| `forbes.com` (Hidden Door, Charlie Fink) | 403 | idem, e o modelo de repartição de receita | idem; o modelo ficou sustentado pelo material da própria empresa |
| `cnbc.com`, `usnews.com`, `thehill.com` (Character.AI) | 403 e timeout | a data e o teor do fechamento para menores | substituí pelo **anúncio da própria Character.AI** e pelo TechCrunch, que abriram — e o fato ficou melhor |
| `sagaftra.org` (Interactive Media Agreement) | 403 | as cláusulas de réplica digital | substituí por análise jurídica independente (fonte 32) |
| `blog.ifcomp.org` (política de IA de 2026) | 403 | o texto do anúncio e a pesquisa pós-competição | substituí por `ifcomp.org/rules/`; a parte sobre a pesquisa **não** entrou |
| `slator.com` (relatório de mercado 2026) | 403 | tamanho do mercado de localização | **nenhum número de mercado de localização entrou no mapa** |
| `metafilter.com`, `bcg.com` | 403 | contexto sobre IFComp 2026 e sobre curadoria de loja | descartadas; nada dependia delas |

- **Post original do IFComp sobre a política de 2026.** `blog.ifcomp.org` (Tumblr) devolveu HTTP 403 em todas as tentativas. A regra foi confirmada em `ifcomp.org/rules/`; a afirmação sobre a pesquisa pós-competição de 2025 não foi confirmada em página aberta.
- **Página oficial da SAG-AFTRA sobre o Interactive Media Agreement de 2025.** HTTP 403. Substituída por análise jurídica independente (fonte 37).
- **Dados brasileiros de consumo de obra em língua estrangeira sem localização.** Nada encontrado. É o buraco mais relevante deste mapa para a nota Brasil: `e8` e `e10` descrevem um fenômeno que eu não consigo dimensionar aqui.

### 12.6 Os repositórios consultados pela API do GitHub, na íntegra

Consulta feita em 12/09/2026 via `api.github.com/repos/<owner>/<repo>`. Estrelas e data do último push são os dois campos que usei; a data separa projeto vivo de projeto famoso.

| Repositório | Estrelas | Criado | Último push | Leitura |
|---|---|---|---|---|
| `HIllya51/LunaTranslator` | 13.145 | 28/09/2022 | 12/09/2026 | vivo, e é o artefato central da raiz 3 |
| `2noise/ChatTTS` | 39.828 | 27/05/2024 | 10/04/2026 | grande, desacelerando |
| `suno-ai/bark` | 39.265 | 07/04/2023 | 19/08/2024 | grande e morto há dois anos |
| `renpy/renpy` | 6.812 | 28/06/2012 | 12/09/2026 | vivo; a base madura |
| `dialogic-godot/dialogic` | 5.996 | — | 30/08/2026 | vivo |
| `Azgaar/Fantasy-Map-Generator` | 5.991 | — | 12/09/2026 | vivo |
| `klembot/twinejs` | 2.882 | 23/01/2018 | 05/09/2026 | vivo |
| `YarnSpinnerTool/YarnSpinner` | 2.841 | 03/10/2015 | 07/09/2026 | vivo |
| `LingyiChen-AI/AIComicBuilder` | 1.860 | — | 27/04/2026 | ativo, desacelerando |
| `ganelson/inform` | 1.641 | — | 24/06/2026 | vivo |
| `mhgolkar/Arrow` | 1.347 | — | 05/09/2025 | parado há um ano |
| `mak-kirkland/chronicler` | 717 | — | 12/09/2026 | pequeno e muito vivo |
| `coppolaemilio/dialogic` | 89 | — | 10/04/2025 | repositório antigo; o vivo é o `dialogic-godot` |

Observação metodológica: `Azure-Tang/AIComicBuilder`, `mvonbalt/chronicler` e `Ariel-Rodriguez/Arrow` — os caminhos que eu tinha suposto a partir do nome — **não existem**. Achei os três pela busca da API. É um lembrete barato: caminho de repositório inferido de nome é invenção até alguém abrir.

### 12.7 As buscas desta rodada, uma a uma

1. `AI generated visual novel tool 2026 mangobox generate playable visual novel from prompt` — deu MangoBox, itch.io.
2. `Steam AI disclosure percentage games 2026 generative AI games released` — devolveu a série 10,9% / 19,9% / 30,8% em veículos secundários; **não usei**, porque não achei a fonte primária. O que entrou foram os números da análise do Next Fest, que abri.
3. `IFComp 2026 rules AI generated interactive fiction policy intfiction` — deu a regra nova e o fórum.
4. `US Copyright Office AI generated works registration human authorship 2026 report` — deu o relatório e a negativa de certiorari em 02/03/2026.
5. `game localization industry AI machine translation 2026 Slator market size decline` — **não deu nada usável** (ver 12.5).
6. `Audible AI narration audiobooks 2026 number of titles AI voice translation` — deu os 50 mil títulos e os 0,03% de receita.
7. `literary prize AI co-written novel award 2026 disclosure requirement publisher` — deu o caso Commonwealth.
8. `LunaTranslator OCR real-time game translation overlay 2026 GitHub` — deu o repositório e a descrição técnica.
9. `script to video generation 2026 Sora Veo narrative consistency characters minutes` — deu os tetos de 8 e 15 segundos e a deriva de personagem entre cortes.
10. `"AI Dungeon" OR "NovelAI" 2026 users revenue interactive storytelling numbers` — **não deu nada usável** (ver 12.5).
11. `dublagem inteligência artificial Brasil 2026 lei projeto dubladores vozes sintéticas UBD` — deu Senado e Câmara.
12. `arXiv 2026 interactive narrative generation LLM evaluation player agency study` — deu NCP-Bench, NARRA-Gym, Elsewise, Dramamancer.
13. `Steam January 2026 AI disclosure policy change code exempt Valve rules update` — deu a reescrita de 16/01/2026.
14. `SAG-AFTRA interactive media agreement AI voice performers 2025 2026 video game terms consent` — deu as cláusulas de consentimento e de suspensão em greve.
15. `Hidden Door narrative play licensed IP launch 2026 AI storytelling startup` — deu os IPs licenciados e o modelo de crédito.
16. `Abragames censo indústria brasileira de jogos 2026 inteligência artificial uso estúdios` — deu a PGB 2026 (45,7% / 39,3%).
17. `EU AI Act Article 50 transparency obligations August 2026 labelling AI generated content machine readable marking` — deu a data de 02/08/2026 e a prorrogação até 02/12/2026.
18. `itch.io AI generated content tag policy 2026 disclosure required` — deu a obrigatoriedade para asset e a perda de indexação.
19. `personalized adaptive story different for every reader AI product 2026` — **quase nada usável**: o que voltou foram listas comerciais de geradores de livro infantil e uma projeção de mercado ("US$ 3,2 bi em 2025 → US$ 18,7 bi em 2034") sem metodologia aberta, que **não usei**.
20. `real-time AI translation overlay games commercial 2026 Steam built-in live translation subtitles platform` — deu o `Live Translate` na Steam, que é o melhor artefato do mapa.
21. `Character.AI minors ban open-ended chat November 2025 regulation FTC 2026` — deu a data de 24/11/2025 e o inquérito da FTC.
22. `itch.io number of visual novels Ren'Py Twine games published 2026 statistics` — só páginas de navegação; a contagem veio de abrir a própria página.
23. `GDC State of the Game Industry 2026 generative AI survey percentage developers negative` — deu os 52%, os 63% de design e narrativa e os 2.300+ respondentes.
24. `"AI slop" storefront discovery 2026 flood of AI generated games books` — deu o estudo dos 14.419 livros.

São vinte e cinco, contando a busca restrita a domínio que fiz no fim para achar o anúncio da Character.AI depois de três veículos de imprensa recusarem a leitura. Na primeira redação da seção 3 eu havia escrito "dezesseis", porque contei como uma só as buscas disparadas em pares na mesma chamada. Corrigi a seção 3; registro aqui o erro em vez de apagá-lo.

### 12.8 O que este mapa deliberadamente não cobriu

- **Qualidade literária.** Nada aqui diz se a história gerada é boa. O mapa mede adoção, economia, regra e consistência — não valor estético. Quem quiser a pergunta estética precisa de outro instrumento.
- **Treino e direito sobre corpus.** A disputa sobre usar livros para treinar modelo é grande, litigiosa e é outro tema; entra aqui só como wildcard 3, pelo canal do preço.
- **Companheiro digital e vínculo afetivo.** É o tema 19. `e7.2` toca nele porque a regulação de menores veio de lá, e está marcado como vazamento.
- **Personagem agêntico dentro de mundo com regras.** É o tema 7. `e7.1` (trilho e canon) encosta, e está declarado.
- **Vídeo gerado como mídia.** É o tema 12. Aparece na seção 3.2 só para estabelecer que o pipeline roteiro → vídeo ainda não fecha em obra longa.

### 12.9 Nota sobre a numeração dos ids

Os ids do bloco `roda:` não são sequenciais dentro de cada raiz: `e11` e `e12` pertencem às raízes 1 e 2 e foram derivados depois, na passagem de cobertura STEEP — `e11` para o eixo político e `e12` para o eixo econômico-ecológico. Mantive os números em que nasceram em vez de renumerar, porque renumerar quebraria a rastreabilidade entre a seção 7 (registro de alterações) e o bloco. O verificador só exige que o id do filho derive do id do pai, e isso está respeitado.

### 12.10 O que este mapa faria diferente com horizonte de 2031

*Subseção exigida pela TMI-0059, que vale para toda rodada de horizonte longo (`h2036`, `h2041`, `h2046`, `h2056`): o degrau só é legível como escada se cada mapa disser o que seria no degrau padrão de cinco anos. Isto não é a seção 7 — não é onde o mapa está errado, é o que ele seria com outro recorte.*

**Quantas raízes sobreviveriam: três, mas duas mudariam de natureza.**

- **Raiz 3 (tradução como camada do leitor)** sobreviveria inteira e seria a **raiz principal** do mapa de 2031, não a terceira. Ela é a única cujas evidências já são artefatos comprados e usados hoje — `LunaTranslator` com commit de hoje, `Live Translate` à venda desde junho — e cujo efeito de 1ª ordem (`e8`) está datado em **2027**. Num mapa de cinco anos, ela domina.
- **Raiz 1 (geração do artefato inteiro)** sobreviveria, mas **truncada na economia**: `e1` (2027), `e4` (2028), `e3` (2028) e `e11` (2028) caberiam; `e2` (2030) entraria no limite; e os efeitos que dão sentido a ela — o selo auditado, a revisão por amostragem, a segmentação por procedência — ficariam todos fora. O mapa de 2031 diria "o catálogo inunda e o ilustrador perde a encomenda", e não conseguiria dizer o que se faz a respeito.
- **Raiz 2 (a obra que se ajusta ao leitor)** é a que mais sofreria. Sobreviveriam `e7` (2028), `e12` (2028), `e6` (2029) e `e7.2` (2027). Sairia `e5` (2030 no limite) com **todo o seu ramo fora** — e `e5` é a raiz conceitual do tema: a pergunta "ainda existe a obra?" simplesmente **não é uma pergunta de 2031**. Num horizonte de cinco anos, a raiz 2 vira "narrativa gerativa é um produto com problema de consistência e modelo de assinatura", o que é verdadeiro e é pequeno.

**Quantos efeitos caberiam.** Dos 45, **22 têm prazo ≤ 2031**: onze dos doze de 1ª ordem (só `e9`, em 2032, ficaria fora), dez dos dezenove de 2ª ordem, e **um** dos quatorze de 3ª ordem (`e7.2.1`, 2031 — que, ironicamente, é o único que já aconteceu). Ou seja: **a terceira ordem praticamente desapareceria**, e com ela desapareceria a roda. Sobraria uma lista de consequências imediatas, que é o que a Futures Wheel existe para não ser.

**Que efeitos mudariam de ordem.** Nenhum mudaria de ordem *causal* — ordem mede distância causal e não calendário, e isso não depende do horizonte. O que mudaria é o **peso relativo**: `e7.2` (fechamento para menores, 2027) e `e1.3` (comunidades fechando a porta, 2027) passariam a ser, num mapa de 2031, os efeitos mais consequentes do documento, quando aqui são retroações. Um mapa de cinco anos deste tema é, em boa medida, **um mapa sobre quem está barrando**, porque é isso que está datado para já.

**Qual seria o teto de confiança.** Mais alto, e enganosamente. Com horizonte 2031, os três efeitos de `confianca: alta` (`e1`, `e7`, `e8`) continuariam e representariam 14% do mapa em vez de 7%; a segunda ordem manteria as treze médias; e a terceira ordem, reduzida a um único efeito, sairia com **100% de sinal forte** — porque o único que caberia é o que já tem caso real. O resultado seria um mapa que parece muito mais bem calibrado do que o de 2036 e que na verdade só evitou de olhar para onde é difícil enxergar. Este é o argumento mais forte a favor da escada da TMI-0053: **a confiança alta do horizonte curto é, em parte, um artefato do recorte.**

**O que os dez anos compram, em uma frase.** Compram exatamente os três achados que este mapa considera seus e que nenhum deles cabe em 2031: a receita por obra caindo também para quem não usou IA; a prova de processo substituindo a declaração de autoria; e o degrau de entrada do ofício desaparecendo sem substituto. O que os dez anos custam está em 7.9 e na seção 8: catorze efeitos terminais cujo ano é derivado de classe de referência com n pequeno, e a tentação — que eu não resisti na primeira redação — de encostá-los no teto do horizonte para que o mapa parecesse caber.
