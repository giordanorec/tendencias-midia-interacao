---
tema: Narrativa gerativa e coautoria
slug: narrativa-gerativa-e-coautoria
autor_login: bvga
zona_de_interesse: Simulação e mundos
data: 2026-09-12
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 11
efeitos_ordem_3: 11
tecnologias_citadas: [MangoBox, LunaTranslator, Veo 3.1, Sora, Ren'Py, Twine, Inform 7, YarnSpinner, Dialogic, Monogatari, NCP-Bench, NARRA-Gym, emaqi, Human Authored, SynthID, ChatTTS, Bark, Character.AI, AI Dungeon]
fontes: 19
confianca: media
experimento: A mesma obra, dois leitores
skill_usada: futurizacao-bvga
publico_ok: false
---

## 1. Resumo

Três capacidades emergentes, não uma. **Primeira:** gerar o artefato narrativo audiovisual inteiro a partir de uma intenção curta — existe hoje como produto pago de nove dólares por mês, e falha onde importa (um agente narrativo de ponta preserva os compromissos da própria história em 42% dos casos após vinte turnos). **Segunda:** a obra deixar de ter uma edição, porque cada leitura é gerada. **Terceira:** a localização migrar do produtor para o receptor, com tradução sobreposta instalada por quem consome.

O que a evidência lida **não** sustenta é a frase que abre o tema — "o custo de contar cai perto de zero". O custo de produzir o artefato cai; o custo de produzir algo *distinguível* não. Dois estudos independentes medem o mesmo teto: entre 9% e 17% do vocabulário responde por toda a variação entre nacionalidades em histórias geradas, e por baixo do marcador cultural sobra um esqueleto de trama único. O gargalo migra de produzir para *triar*, e é aí que o poder se concentra — em janeiro de 2026 o YouTube encerrou onze canais e limpou outros seis, somando 35 milhões de inscritos e 4,7 bilhões de visualizações, sob uma regra que não proíbe IA: proíbe ausência de julgamento humano.

A aposta central deste mapa, portanto, é invertida em relação ao enunciado. Até 2031 a escassez não é de história. É de **autoria atribuível** — e ela já começou a ser vendida: a Authors Guild abriu o selo *Human Authored* a qualquer autor em 2 de março de 2026, a dez dólares por título, com verificação de identidade por terceiro e base pública consultável.

Confiança geral: **média**. As três raízes têm evidência datada de existência; nenhuma tem evidência de adoção além dos inovadores, e uma delas (a obra sem edição única) pode ser cosmética — o experimento proposto na seção 10 existe para derrubá-la.

## 2. O tema

O objeto aqui é **a história como coisa gerada**, e o que isso faz com autoria. Não é o personagem que age dentro de um mundo (tema 7), não é a geração de imagem e vídeo como mídia (tema 12), não é design procedural por regras (tema 14).

A entrevista da seção 0 da skill foi feita antes de qualquer análise; o registro completo está na seção 12. Parâmetros confirmados: horizonte **2031**; público **quem projeta mídia e interação**; recorte **global, com nota sobre o Brasil**; descarte **o que já é comum em produto de massa**, mais ideias genéricas que serviriam para qualquer tema; viés **neutro**; profundidade **três ordens**; modo **a partir de uma inovação**, não de um setor. Não houve contradição entre os parâmetros.

Duas consequências do descarte, aplicadas com rigor. **Chatbot de personagem e assistente de escrita saem do mapa**: Character.AI e ChatGPT são produto de massa, e a própria pesquisa da indústria mostra por quê — 74% dos profissionais de jogos que usam IA generativa usam ChatGPT, e 81% a usam para pesquisa e brainstorming. Isso é ferramenta consolidada, não fronteira. **Motor de novela visual, editor de diálogo ramificado e gerador de mapa saem como antecedentes maduros**: Ren'Py, Twine, Inform 7, YarnSpinner, Monogatari, Dialogic. Eles entram no mapa como infraestrutura e como base de comparação, nunca como raiz.

Uma declaração de posição, porque o viés pedido foi neutro e o enunciado do tema não é. A frase "o custo de contar cai perto de zero — e a pergunta de quem é o autor fica sem chão" embute a conclusão na premissa. Tratei-a como hipótese a testar, e ela sobreviveu pela metade: o custo de *produzir* cai, o chão da autoria não desapareceu — está sendo reconstruído em regra de concurso, política de plataforma e selo pago, com datas.

## 3. Onde isso está hoje

**A capacidade existe e é vendável.** MangoBox recebe uma descrição de cenário e devolve retratos de personagem, locações, personalidades e uma cena de abertura; o plano Pro custa US$ 9 por mês e inclui histórias e imagens ilimitadas mais vinte vídeos gerados. Nada na página do produto diz quem é o titular do que sai — a única afirmação sobre os dados é de privacidade ("os chats ficam no seu navegador"), não de propriedade. Isso é típico: a camada jurídica está atrás da camada técnica.

**A capacidade falha onde a narrativa longa precisa que ela funcione.** O NCP-Bench (ICML 2026, submetido em 8 de agosto de 2026) mede *preservação de compromisso narrativo* em 100 ambientes de ficção interativa derivados de sinopses de filmes, com verificação automática. O melhor modelo avaliado, GPT-5.2, sustenta 42% de sobrevivência após vinte turnos; a taxa de conflito factual varia de 40% a 68% entre modelos; compromissos de longo prazo só foram satisfeitos em execuções isoladas dentro do limite de cem turnos. A conclusão dos autores é o achado que mais importa para quem projeta: **qualidade linguística alta não garante consistência lógica**, sobretudo sob intervenção adversarial do usuário. O NARRA-Gym (maio de 2026), avaliando nove modelos de fronteira em oito personas, chega ao mesmo lugar por outro caminho: modelos que produzem histórias fluentes falham em robustez, experiência de uso e resistência a erro de personalização sensível.

**A adoção é real e sua medida é ruim.** Um estudo de cerca de 53.600 lançamentos no Steam, de meados de 2023 a meados de 2026, mostra a declaração de IA passando de ~10,9% dos lançamentos em 2024 a 19,9% em 2025 e 30,8% em 2026 — projetando ~50% em 2027-2028. Três ressalvas do próprio autor desmontam qualquer leitura triunfalista: a declaração é **binária** ("tocou em IA", não dose); a receita estimada usa o método Boxleiter e é exata só em ordem de magnitude; e 22% dos jogos com receita significativa e declaração de IA **adicionaram a declaração retroativamente**, às vezes anos depois. Por jogo, títulos com IA têm sucesso a 55% da taxa dos sem IA — o crescimento vem de volume, não de qualidade. E o recorte por tipo de uso é a informação mais contraintuitiva do levantamento: entre os jogos com IA que fracassaram, 6% declaravam localização; entre os que deram certo, 18%. A IA que paga hoje traduz e dubla — não escreve.

**O pipeline texto→vídeo tem um teto documentado.** Na documentação do Gemini API, todos os modelos Veo 3.1 geram clipes de no máximo **8 segundos**, e a duração de 8 s só vale em 1080p, 4K ou com imagem de referência; a extensão de vídeo só opera em 720p; os arquivos gerados ficam no servidor por dois dias; e "vídeos criados pelo Veo recebem marca d'água SynthID". Um roteiro não vira um vídeo animado: vira uma costura de clipes de oito segundos. E o lado econômico já cobrou: em 24 de março de 2026 a OpenAI encerrou o app Sora, cerca de seis meses após o lançamento, com custo diário reportado na ordem de US$ 1 milhão, ~US$ 1,30 por clipe, queda de usuários ativos diários de ~1 milhão para menos de 500 mil, 3,3 milhões de downloads e US$ 2,1 milhões de compras no app em toda a vida do produto — levando embora um acordo com a Disney na casa de US$ 1 bilhão.

**A homogeneidade é medida, não impressão.** Rettberg e Wigers geraram 11.800 histórias com gpt-4o-mini — 50 para cada um de 236 países — e encontraram uniformidade marcante sob os símbolos nacionais: protagonista em cidade pequena resolvendo conflito por "reconectar-se à tradição e organizar eventos comunitários", conflito real higienizado, romance quase ausente. Eles nomeiam a categoria de viés: **padronização narrativa**, que prefere estabilidade a mudança. Bhatt e colegas (junho de 2026) medem a mesma coisa com outro método — cinco modelos, 125 tópicos, 193 nacionalidades: apenas **9% a 17% do vocabulário** responde pela variação entre nacionalidades, e o que sobra depois de remover esses tokens contém sequências multipalavra repetidas, isto é, um template narrativo culturalmente agnóstico. E marcadores culturais de 19 países, predominantemente do Sul global, são **em média ofensivos**.

**A governança já se mexeu — e não na direção que se esperava.** O US Copyright Office publicou a Parte 2 do relatório *Copyright and Artificial Intelligence* em 29 de janeiro de 2025: proteção só para autoria humana, análise caso a caso, prompts sozinhos não bastam como controle, e é protegível o que é perceptível do humano na saída mais a seleção, coordenação e arranjo criativos e as modificações criativas. A IFComp, a competição mais antiga do nicho exato deste tema, aprovou para 2026 a regra 4: **todo o conteúdo voltado ao jogador deve ser inteiramente criado por humanos** — prosa, capa e todos os ativos —, é permitido usar IA em edição, depuração, acessibilidade, pesquisa, tradução limitada e código, e as inscrições **não podem exigir que juiz ou jogador interaja com IA durante a partida**; primeira infração dá advertência ou desclassificação, segunda desclassifica. O YouTube renomeou em julho de 2025 a política de "conteúdo repetitivo" para "conteúdo inautêntico" e passou a alcançar "conteúdo que carece de criatividade humana genuína"; a onda de janeiro de 2026 encerrou 11 canais e apagou o conteúdo de outros 6, somando 35 milhões de inscritos e 4,7 bilhões de visualizações. A Authors Guild lançou o selo *Human Authored* em beta para membros em janeiro de 2025 e o abriu a todos em 2 de março de 2026, a US$ 10 por título para não-membros, com verificação de identidade por terceiro e base pública de consulta; a regra: texto integralmente de autoria humana, salvo uso *de minimis* — e, explicitamente, IA para índice, pesquisa, brainstorming e **estruturação de roteiro** não desqualifica.

**A localização não está morrendo.** A Orange Inc. levantou 2,92 bilhões de ienes (~US$ 19,4 milhões) em pré-Série A em maio de 2024, com o Shogakukan entre os investidores, alegando capacidade de quintuplicar a localização para 500 títulos por mês, contra um custo corrente de ~US$ 7.000 por volume e um ponto de partida em que só ~10.000 volumes de manga têm edição em inglês, ~2% do publicado no Japão. Tradutores contestaram a economia com aritmética simples: os mesmos US$ 19,5 milhões pagariam tradução e letreiramento de ~1.625.000 páginas. Do lado do mercado, a projeção de serviços linguísticos é de US$ 75,53 bilhões em 2026 para US$ 96,97 bilhões em 2031 (CAGR 5,12%), com pós-edição de tradução automática já representando 38,87% do investimento de 2025 e **inflação de 10-15% nos salários de tradutores especializados** na América do Norte e Europa. O commodity comprime; o especializado encarece.

**Do lado do receptor, a ferramenta é pequena e já funciona.** LunaTranslator: 13,1 mil estrelas, 1,1 mil forks, GPLv3, ~4.945 commits, Windows. Extrai texto por hook (inclusive de emuladores de NS, PSP, PSV e PS2), por OCR próprio e por reconhecimento de fala, traduz com "quase todos os motores, incluindo tradução por modelo de linguagem grande e tradução offline", e devolve sobreposto, com segmentação de japonês, furigana, AnkiConnect e TTS.

**Quem trabalha nisso não está entusiasmado.** GDC, *State of the Game Industry 2026*, mais de 2.300 profissionais: 36% usam IA generativa no trabalho (30% em estúdios, 58% em publicação, suporte e marketing); 52% acham que ela tem impacto negativo na indústria, contra 30% no ano anterior e 18% no anterior a esse; só 7% acham o impacto positivo, contra 13% em 2025. Em **design e narrativa a visão desfavorável é de 63%** — perto do topo, junto de arte (64%). E 28% dos respondentes foram demitidos nos últimos dois anos, um terço entre os norte-americanos, dois terços dos respondentes de estúdios AAA relatando demissões na empresa.

**Nota sobre o Brasil.** A moldura legal está parada. O PL 2338/2023 foi aprovado pelo Senado em 10 de dezembro de 2024, após 244 emendas, e remetido à Câmara em 17 de março de 2025 pelo Ofício SF nº 235; no Senado a tramitação está encerrada, e o registro oficial não mostra movimento posterior à remessa. Ou seja: durante toda a janela em que as três capacidades deste mapa se tornaram compráveis, o país operou sem regra própria — e o que de fato regula a autoria de obra gerada, no Brasil como fora, é a regra de loja (Steam), de plataforma (YouTube), de concurso (IFComp) e de guilda (Authors Guild). Para quem projeta mídia aqui, a consequência prática é que a decisão de conformidade é **contratual e privada**, não legal, pelo menos até a votação na Câmara.

## 4. As disrupções-raiz

Gerei doze candidatos e aceitei três. As fichas dos aceitos vêm abaixo; as dos rebaixados e descartados estão na seção 12.

### Raiz A — Geração do artefato narrativo completo a partir de uma intenção curta

- **candidato:** produzir, de uma frase, um artefato narrativo audiovisual jogável inteiro — elenco, arte, cenas, diálogo, voz — sem equipe.
- **maturidade:** emergente. Produto comercial existe e cobra assinatura; a capacidade central falha em consistência de longo curso.
- **potencial_de_ruptura:** alto. Altera quem pode produzir, o custo marginal, o papel do intermediário (escritor, artista, letrista) e a arquitetura do produto (de exemplar para serviço).
- **o_que_rompe:** a barreira de produção de um artefato narrativo audiovisual, que exigia equipe multidisciplinar e meses. Rompe também o pressuposto de que a *quantidade* de obras é limitada pela oferta de ofício.
- **por_que_agora:** o ciclo multimodal fechou num único produto pago (MangoBox: retrato, locação, personalidade, cena, vídeo, US$ 9/mês) e a declaração de IA saltou a 30,8% dos lançamentos no Steam em 2026, com projeção de ~50% em 2027-2028.
- **o_que_falta:** consistência verificável além de algumas dezenas de turnos (42% de sobrevivência em 20 turnos; 40-68% de conflito factual); e um regime de titularidade — o USCO exige análise caso a caso e nega que o prompt sozinho baste.
- **evidencias:** MangoBox (produto, alta para existência, baixa para desempenho); NCP-Bench, ICML 2026 (alta); estudo de 53.600 lançamentos no Steam (média, método declarado e limitado); documentação Veo 3.1 (alta, teto de 8 s).
- **veredito:** **aceita.**

### Raiz B — A obra deixa de ter uma edição: cada leitura é um exemplar

- **candidato:** a narrativa adaptada em tempo de leitura, com estado por usuário, de modo que não existe um texto entregue igual para dois leitores.
- **maturidade:** experimental. Há produto (geração de cena sob demanda, chat com personagem, estado no navegador) e há instrumento de avaliação que já trata *personalização empática* como dimensão a medir — mas não há evidência de obra longa assim sustentada.
- **potencial_de_ruptura:** alto. Altera a forma dominante de interação, a norma social de discutir uma obra, a arquitetura do produto e o regime jurídico, que pressupõe um objeto identificável.
- **o_que_rompe:** a identidade da obra como referente compartilhado — a condição de que duas pessoas tenham lido a mesma coisa.
- **por_que_agora:** o NARRA-Gym (maio de 2026) transforma "semente emocional esparsa" em episódio completo e mede personalização empática e resistência a erro de personalização sensível como eixos de avaliação de nove modelos de fronteira; ou seja, a adaptação por leitor já é a variável de projeto, não efeito colateral.
- **o_que_falta:** qualquer mecanismo de referência estável entre leituras. E, contra ela, falta demonstrar que a variação é *substantiva*: 9-17% do vocabulário explicando a variação entre nacionalidades sugere que a personalização possa ser marcador trocado sobre trama idêntica.
- **evidencias:** NARRA-Gym (alta para o desenho de avaliação, média para generalização); MangoBox (média); USCO Parte 2 (alta, para a consequência jurídica); Bhatt et al. e Rettberg & Wigers (altas, e **contra** a raiz).
- **veredito:** **aceita, com a ressalva mais frágil do mapa.** É a raiz que o red team ataca com mais sucesso e que o experimento da seção 10 foi desenhado para derrubar.

### Raiz C — A localização migra do produtor para o receptor

- **candidato:** tradução sobreposta em tempo de consumo, instalada por quem lê, sobre obra que ninguém decidiu traduzir.
- **maturidade:** emergente. Funciona hoje, num nicho, com atrito real: Windows, hook ou OCR, configuração manual.
- **potencial_de_ruptura:** alto. Altera a cadeia de valor, quem pode consumir, a barreira de acesso, o papel do intermediário e a distribuição de poder no gate territorial.
- **o_que_rompe:** o pressuposto de que uma obra chega a um mercado quando alguém decide pagar para traduzi-la — e a ideia correlata de que a obra tem uma língua de origem que define seu público.
- **por_que_agora:** três coisas ao mesmo tempo. LunaTranslator com 13,1 mil estrelas e motores de LLM plugáveis do lado do receptor; do lado do produtor, Orange com ~US$ 19,4 milhões e alegação de 500 volumes/mês contra ~2% de manga com edição oficial em inglês; e, no mercado, a localização como o uso de IA que mais correlaciona com sucesso comercial (18% dos jogos com IA bem-sucedidos no Steam a declaram, contra 6% dos que fracassaram).
- **o_que_falta:** extração fora do Windows e fora de novela visual; qualidade em obra literária; e uma resposta ao fato de que a tradução sobreposta não autorizada é obra derivada.
- **evidencias:** GitHub LunaTranslator (alta, para existência e escala do repositório); Comics Beat sobre a Orange (média — números da empresa, com a contestação dos tradutores registrada na mesma fonte); estudo do Steam (média); Mordor Intelligence (média, pesquisa de mercado paga).
- **veredito:** **aceita.**

Duas recusas que importam registrar aqui, e não só no anexo. **"Atestação de autoria humana" não é raiz** — é consequência institucional, e já está em vigor (IFComp 2026, Authors Guild em março de 2026), o que a coloca no lado consolidado; entra na roda como efeito. **"Script-to-video de ponta a ponta" não é raiz** — parte é fronteira do tema 12 e parte esbarra num teto documentado de 8 segundos por clipe; entra como tecnologia habilitadora da Raiz A.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "Geração do artefato narrativo completo a partir de uma intenção curta"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "O custo de produzir um protótipo narrativo audiovisual cai para minutos e dezenas de dólares, e o volume de artefatos publicados cresce mais rápido que a atenção disponível"
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "A triagem, e não a produção, passa a ser o gargalo, e plataformas remuneram sinal de julgamento humano em vez de obra entregue"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "Um mercado de atestação de autoria se estabelece — selo pago, verificação de identidade, base pública — e a curadoria vira infraestrutura controlada por poucas plataformas e guildas"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "A remuneração de quem escreve migra de entregar texto para assinar, revisar e responder pelo texto, e os contratos passam a precificar responsabilidade em vez de palavras"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "O cargo de escritor de jogo se bifurca entre um núcleo pequeno de diretores de narrativa com poder de veto e uma camada larga de revisores pagos por volume"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.3
            ordem: 2
            efeito: "Concursos, prêmios e catálogos adotam regras que separam conteúdo voltado ao público, onde o humano é obrigatório, de ferramenta de produção, onde a IA é permitida"
            sinal: forte
            prazo: 2027
            confianca: alta
            efeitos:
              - id: e1.3.1
                ordem: 3
                efeito: "A distinção entre conteúdo voltado ao público e ferramenta de produção vira a convenção contratual de fato para autoria, à frente da lei"
                sinal: medio
                prazo: 2030
                confianca: media
      - id: e2
        ordem: 1
        efeito: "Um repertório narrativo e visual médio se consolida, porque os artefatos gerados convergem para o mesmo esqueleto de trama sob marcadores culturais trocados"
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "O valor de mercado desloca-se para o que a geração não produz: desvio deliberado de esqueleto, voz autoral reconhecível, obra que não cabe no template"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Formação e portfólio em narrativa passam a ser avaliados por capacidade de divergir do modelo, e não por domínio de ofício reproduzível"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "Culturas com pouco texto de treino recebem localização cosmética, com marcador trocado sobre trama idêntica, e isso se torna o modo default de internacionalizar uma história"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "Mercados periféricos passam a exigir prova de origem cultural verificável como condição de compra pública ou de incentivo fiscal"
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "A obra deixa de ter uma edição: cada leitura é um exemplar"
    efeitos:
      - id: e3
        ordem: 1
        efeito: "Produtos narrativos passam a ser vendidos como sessão e não como exemplar — assinatura, cota de geração, estado salvo por usuário"
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "A crítica e a conversa migram do enredo para o sistema: resenha-se o gerador e suas regras, não o desfecho"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Surge um gênero de documentação da própria leitura — trilha, log, replay compartilhável — como único referente comum possível entre dois leitores"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "O direito autoral se reorganiza em torno do sistema gerador — motor, regras, personagens, seleção e arranjo — porque o texto entregue não carrega autoria humana suficiente"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "Contratos de adaptação e de espólio passam a licenciar comportamento de personagem e restrição de trama, e não capítulos"
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: "A promessa de história que se adapta a cada leitor sobrevive melhor em sessões curtas, porque a consistência decai com o número de turnos"
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "O formato dominante da narrativa gerada é o episódio de 15 a 40 minutos com estado descartável, e não o romance ou a campanha longa"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "A obra longa e consistente volta a ser diferencial de prestígio e passa a ser anunciada como tal, à maneira de gravado ao vivo"
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "A localização migra do produtor para o receptor"
    efeitos:
      - id: e5
        ordem: 1
        efeito: "O público deixa de esperar a decisão de traduzir, e obras não licenciadas passam a ser consumidas com camada de tradução instalada pelo próprio leitor"
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "O gate territorial perde função de controle e mantém só função de receita: o detentor escolhe entre lançar oficialmente ou ser lido de graça e sem registro"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Editoras passam a lançar simultaneamente uma versão bruta legendada por máquina e uma versão trabalhada, vendendo a segunda como produto premium"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "A localização profissional se especializa e encarece por unidade em vez de desaparecer, com o volume commodity migrando para pós-edição"
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "Traduzido por pessoa vira selo de produto, no mesmo movimento do selo de autoria humana"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: "A língua de origem enfraquece como decisão de projeto, e obras nascem com texto escrito para ser traduzido por máquina — sintaxe curta, referência explícita, glossário embutido"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "O estilo de obras nascidas globais se achata na direção do que a máquina traduz bem, e o jogo de palavras intraduzível migra para nichos declaradamente locais"
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "Forma-se um movimento estético de intraduzibilidade deliberada, que usa a resistência à tradução automática como marca de autoria"
                sinal: fraco
                prazo: 2032
                confianca: baixa
```

**O que a estrutura não captura bem.** Quatro coisas, e todas mudam como o mapa deve ser lido.

**Primeira: a roda é uma árvore, e o fenômeno é um grafo.** Os efeitos e1.1.1 (mercado de atestação), e1.3.1 (a distinção público/ferramenta como convenção de fato) e e5.2.1 (selo de tradução humana) são o *mesmo* movimento chegando por três ramos diferentes — a escassez migrando de história para autoria atribuível. A árvore obriga a escolher um pai e faz parecer que são três coisas. São uma, e por isso a confiança nela é maior do que o "fraco/baixa" de cada nó sugere isoladamente. Onde três ramos independentes convergem, a convergência é o achado.

**Segunda: a ordem esconde uma inversão de prazo.** e1.3 é efeito de segunda ordem e **já aconteceu**: a regra 4 da IFComp está em vigor para 2026, e o selo da Authors Guild abriu em março de 2026. Já e1, que é primeira ordem, se completa depois. A skill avisa que ordem é distância causal e não cronologia; aqui o aviso é literal e vale repetir, porque a leitura intuitiva da roda erra.

**Terceira: a roda não representa o mecanismo que mais explica o mapa, que é um teto e não um empurrão.** e2 existe por causa de uma *limitação* medida da geração, não de uma capacidade. Um formalismo de consequências trata mal causas que são impedimentos: se amanhã a homogeneidade for resolvida, e2 não enfraquece — ele se inverte, e o ramo e2.1 (valor no desvio de esqueleto) desaparece junto com o problema que o criava.

**Quarta: não há nó para o desaparecimento do fornecedor.** A roda deriva do que acontece *se* a raiz ocorrer, e não do que acontece se a infraestrutura for desligada. Com e3 (obra como sessão) aceito, o desligamento de um serviço não interrompe o acesso: apaga a obra. Isso está na seção 6 como wildcard porque a estrutura da roda não tem onde pôr.

## 6. Sinais fracos e wildcards

### Sinais fracos

**1. LunaTranslator: 13,1 mil estrelas, GPLv3, Windows.** Pequeno por qualquer medida de indústria e estrutural por qualquer medida de mecanismo: obra em japonês consumida em português sem que ninguém a tenha traduzido, com o custo da decisão editorial transferido para o leitor. É o sinal mais forte do mapa justamente por ser pequeno — a capacidade não precisou de uma plataforma para existir.

**2. A regra 4 da IFComp proíbe exigir que o jogador interaja com IA durante a partida.** O nicho mais antigo da ficção interativa legislou contra a forma de produto que este tema projeta — não contra o uso de IA, que segue permitido em edição, depuração, acessibilidade, pesquisa, tradução limitada e código. A fronteira que essa comunidade desenhou é entre *ferramenta* e *superfície*.

**3. Verificação de identidade por terceiro para um selo de dez dólares por título.** A Authors Guild trouxe infraestrutura de identidade para dentro da literatura. O detalhe que quase ninguém nota: a regra permite IA para brainstorming e estruturação de roteiro. A coautoria foi explicitamente preservada dentro do selo de autoria humana.

**4. 22% dos jogos com IA e receita significativa declararam IA retroativamente.** A declaração não é um fato técnico registrado no momento da produção: é uma negociação feita depois, às vezes anos depois. Qualquer arquitetura de proveniência que se projete até 2031 terá de assumir que o registro é reescrito.

**5. Localização em 18% dos jogos com IA bem-sucedidos contra 6% dos fracassados.** O uso de IA que hoje correlaciona com dinheiro é o que *traduz*, e não o que *escreve*. Se a Raiz C parece a menos glamourosa das três, é ela que tem o único sinal econômico direto do levantamento.

**Não são sinais fracos**, e a distinção é obrigatória: ChatGPT (74% de uso entre profissionais de jogos que usam IA), Character.AI e os 30,8% de declaração no Steam. São adoção consolidada ou líder de mercado.

### Wildcards

**W1 — A primeira obra narrativa perdida por desligamento de servidor (principal).** Baixa probabilidade de acontecer com uma obra *canônica* até 2031; alto impacto se acontecer. Precedente parcial e datado: a OpenAI encerrou o app Sora em 24 de março de 2026 por custo, ~seis meses após o lançamento — e a documentação do Veo declara que os vídeos gerados ficam no servidor por dois dias. Se e3 valer (obra vendida como sessão), a obra não fica indisponível: deixa de existir, porque não havia exemplar. **Como altera o mapa:** inverte o ramo e3 inteiro. A pressão passa a ser por *fixação* — exportar a leitura, congelar o modelo, exigir exemplar — e o efeito e3.1.1 (log como referente) deixa de ser sinal fraco e se torna requisito de preservação, possivelmente legal. O ramo e4.1.1 (obra longa como prestígio) se reforça por outro motivo: a obra longa passa a valer por ser a única que sobrevive ao fornecedor.

**W2 — Um tribunal declarar que a saída de um gerador narrativo interativo não tem autoria e cai em domínio público, e uma plataforma usar a decisão para reutilizar livremente o que seus usuários geraram.** A base já está posta pelo USCO (só autoria humana é protegida; prompt sozinho não basta), mas a consequência inversa — *logo, não é de ninguém, e portanto é nossa* — nunca foi testada em escala. **Como altera o mapa:** e3.2 sai de "reorganização em torno do sistema gerador" para uma corrida por fixação artificial de autoria humana mínima; o mercado de atestação (e1.1.1) deixa de ser um selo de marketing e vira condição de propriedade.

**W3 — Uma plataforma dominante de distribuição passar a exigir prova criptográfica de autoria humana para monetizar.** Baixa probabilidade porque o custo de falso positivo é político; alto impacto porque encerraria a ambiguidade. A infraestrutura parcial existe do lado oposto (SynthID marca o que é gerado, não o que é humano). **Como altera o mapa:** quebra a Raiz A no ponto de distribuição em vez de no ponto de produção — o artefato continua barato de fazer e se torna impossível de publicar em escala, o que empurra a geração para dentro do processo (ferramenta) e esvazia e1 sem esvaziar e2.

**Sobre o wildcard proposto no enunciado do tema** — "um best-seller assumido como coautoria com IA ganhar um prêmio literário, ou ser barrado dele". Ele não é wildcard: **já ocorreu, em janeiro de 2024**. Rie Kudan ganhou o Prêmio Akutagawa com *Tokyo-to Dojo-to*, declarou que "cerca de 5% do texto inteiro foi escrito diretamente pela IA generativa", e o comitê, que já havia chamado a obra de praticamente impecável, não viu problema. Evento consumado, sem consequência de regime — o que é, em si, um dado: o teste de estresse ocorreu e o sistema absorveu.

## 7. Contra o próprio mapa

**1. Qual efeito é apenas extrapolação linear do presente?** **e1.** "Custo cai, volume sobe" é a curva de declaração do Steam prolongada: 10,9% → 19,9% → 30,8% → projeção de 50%. Não há mecanismo novo nele, e a projeção é do próprio autor do estudo, sob a ressalva de que a métrica é binária. Mantenho e1 com confiança alta porque a evidência é direta, mas ele é o nó **menos informativo** do mapa: quem projeta mídia não decide nada a partir dele. O conteúdo está nos filhos.

**2. Qual efeito assume adoção rápida demais?** **e3** (obra vendida como sessão). **Rebaixei-o de confiança alta para média durante esta revisão.** Comparação histórica: jogo-como-serviço levou cerca de uma década para virar norma, com infraestrutura de pagamento e de rede já pronta. E o caso mais bem capitalizado de mídia gerada por assinatura na janela recente **fracassou em seis meses**: Sora, encerrada em 24 de março de 2026, 3,3 milhões de downloads, US$ 2,1 milhões de receita vitalícia no app, ~US$ 1 milhão de custo por dia. Vender sessão gerada exige que a margem feche por sessão, e o único ponto de dados grande disponível diz que não fechou.

**3. Qual disrupção-raiz pode simplesmente não acontecer?** **A Raiz B.** Se a adaptação por leitor for cosmética — e é exatamente o que duas medições independentes sugerem, com 9-17% do vocabulário respondendo pela variação entre nacionalidades e um template de trama por baixo —, então *não existe* obra sem edição única: existe a mesma obra com nomes trocados. A pergunta de segunda ordem do enunciado ("duas pessoas podem discutir um livro que leram em versões diferentes?") se dissolve, porque elas leram a mesma coisa com outra pintura.

**4. O que quebra na roda se a Raiz B falhar?** Sete efeitos: e3, e3.1, e3.1.1, e3.2, e3.2.1, e4, e4.1, e4.1.1 — descontando e4, que sobrevive invertido (se a personalização é cosmética, a limitação de consistência deixa de importar para o formato). O ramo de direito autoral (e3.2) perde a premissa: se há uma obra estável, o regime atual de análise caso a caso do USCO basta e não há reorganização em torno do sistema gerador. **Raízes A e C ficam intactas**, e é por isso que o mapa não depende da mais especulativa das três.

**5. Que contrassinais existem?** Seis, todos lidos, e são fortes: **(a)** 52% dos profissionais de jogos veem impacto negativo, contra 30% e 18% nos dois anos anteriores, e o positivo caiu de 13% para 7% — a curva de aceitação está indo para trás, não para frente, e em design e narrativa a rejeição é de 63%. **(b)** Jogos com IA têm sucesso a 55% da taxa dos sem IA; o crescimento é de volume. **(c)** Sora encerrada por custo. **(d)** O YouTube apagou 11 canais e limpou 6, com 35 milhões de inscritos e 4,7 bilhões de visualizações, sob regra de "conteúdo inautêntico". **(e)** A IFComp proibiu conteúdo gerado voltado ao jogador. **(f)** A localização cresce 5,12% ao ano com salário de especialista subindo 10-15% — o oposto do desaparecimento previsto na terceira pergunta de ordem do enunciado.

**6. Que barreiras foram subestimadas?** Três, de naturezas diferentes. **Econômica:** custo de inferência por sessão longa, com os dois únicos números públicos disponíveis sendo ~US$ 1,30 por clipe e ~US$ 1 milhão por dia. **Técnica e documentada:** 8 segundos por clipe no Veo 3.1, com extensão só a 720p — um roteiro não vira vídeo, vira costura; e 42% de sobrevivência em 20 turnos, com 40-68% de conflito factual. **Jurídica:** a tradução sobreposta não autorizada é obra derivada, e a Raiz C depende de um regime que ninguém testou; no Brasil, o PL 2338/2023 está na Câmara desde 17 de março de 2025, sem registro de movimento posterior, o que atrasa qualquer previsibilidade local até depois do horizonte próximo.

**7. Que ator teria incentivo para bloquear, capturar ou redirecionar?** **Plataformas de distribuição**, e por motivo de negócio, não de princípio: inflação de oferta derruba o preço do inventário publicitário, e a regra de "conteúdo inautêntico" do YouTube protege esse preço — a linha traçada não foi contra IA, foi contra *volume sem julgamento*. **Guildas**, que capturam a mudança vendendo o selo (dez dólares por título, gratuito para membro: o selo também é instrumento de filiação). **Detentores de catálogo**, e a Disney retirando-se de um acordo de ~US$ 1 bilhão é o exemplo caro. **Os próprios fornecedores de modelo**, que preferem vender ferramenta a hospedar obra — o encerramento do Sora foi, entre outras coisas, a saída de um fornecedor do negócio de hospedar a mídia gerada por usuários.

**8. Que viés do pesquisador e do modelo entrou aqui?** Três, e o terceiro é o incômodo. **(a) Viés do enunciado:** "o custo de contar cai perto de zero" é conclusão disfarçada de premissa, e a terceira pergunta de ordem já supõe que a localização como indústria está em risco — suposição que o dado de mercado contradiz. Tratei ambas como hipóteses; a segunda não passou. **(b) Viés da amostra da turma:** a varredura veio de GitHub, itch.io e Hugging Face, onde o que existe é *ferramenta*, não obra vendida. Um levantamento feito por catálogo comercial produziria um mapa mais conservador, e não tenho como saber o quanto. **(c) Viés meu, como modelo:** sou parte interessada. As evidências mais fortes deste mapa — 11.800 histórias homogêneas, 9-17% de variação lexical, 42% de sobrevivência em 20 turnos — são evidências *contra* a capacidade do meu próprio tipo de sistema, e foi nelas que me apoiei com mais firmeza. Isso pode parecer virtude de honestidade, mas o efeito estrutural é outro: onde a evidência favorecia a geração, eu dependi de páginas de produto e de pesquisa de mercado paga, que são as fontes mais fracas da lista. A assimetria está declarada; ela não está corrigida.

**Efeitos cortados nesta revisão** (registro completo na seção 12): o desaparecimento do escritor de jogo como profissão, o desaparecimento da localização como indústria, e uma cadeia que ia de "modelo de mundo persistente" a "novela infinita coerente" — cortada por falta de mecanismo, já que nenhuma fonte lida sustenta persistência muito além de vinte turnos.

## 8. O que a máquina errou

Erros **realmente detectados** durante este trabalho, não exemplos ilustrativos. Nenhuma fonte inventada foi detectada; nenhuma autoria trocada foi detectada.

**1. Número de terceira mão a caminho de virar fato.** Na primeira busca sobre o Steam, os agregadores ofereciam "33% dos novos lançamentos" num título e "20%" em outro, com datas incompatíveis. Ao abrir o estudo, o número é 30,8% em 2026 até a data da coleta, com ~53.600 lançamentos analisados **e uma métrica binária**: "tocou em IA", não dose. Se eu tivesse citado o agregador, teria publicado um número sem denominador e sem a ressalva que o desqualifica como medida de intensidade. Esta é a forma mais comum do erro "número sem origem": o número existe, a origem é outra, e a ressalva morre no caminho.

**2. Wildcard que já tinha acontecido.** Aceitei inicialmente o wildcard sugerido no enunciado — prêmio literário para obra em coautoria com IA. O evento ocorreu em **janeiro de 2024**, com Rie Kudan e o Akutagawa, ~5% do texto gerado, e o comitê declarando que não era problema. Um evento consumado não tem baixa probabilidade. Corrigido: passou para sinal consumado na seção 6, e os três wildcards foram reconstruídos.

**3. Fonte primária que não abriu, e a tentação de preencher de memória.** Tentei duas vezes obter o texto da política de declaração de IA do Steam — a página de documentação do Steamworks e o post de notícia — e nenhuma devolveu o conteúdo da política. Eu sei aproximadamente o que ela diz. **Não a parafraseei.** A política entra no mapa apoiada no estudo que lê as declarações reais dos jogos, e a lacuna está declarada aqui e na seção 12. É a diferença entre "capacidade madura tratada como disruptiva" e o erro correlato, menos discutido: fonte lembrada tratada como fonte lida.

**4. Fato sustentado em agregador porque a fonte forte estava atrás de pagamento.** O encerramento do Sora: a Variety é a fonte mais forte e devolveu HTTP 402 via tollbit; outra tentativa devolveu conteúdo corrompido, sem relação com a página. O fato está mantido com **confiança média**, e registro explicitamente que o número de ~US$ 1 milhão por dia é atribuído ao *Wall Street Journal* **por terceiros** — não foi lido na origem. Uso o fato para sustentar uma barreira econômica, não uma quantia.

**5. Classificação errada, pega pela própria régua da skill.** Na primeira passada eu tinha "atestação de autoria humana como bem de mercado" na lista de disrupções-raiz. Ela falha em dois dos cinco critérios da seção 2.3: não é capacidade técnica emergente, é consequência institucional; e **já está em vigor** — IFComp 2026, Authors Guild em 2 de março de 2026 —, o que a põe do lado consolidado. Rebaixada a efeito (e1.1, e1.1.1, e5.2.1). É o erro que a skill nomeia como "capacidade madura tratada como disruptiva", e ele ficou mais atraente justamente por ser a ideia mais original que eu tinha.

**6. Causalidade plausível sem mecanismo, escrita e depois cortada.** Eu havia derivado "modelos de mundo persistentes permitem novela visual infinita e coerente" como efeito de segunda ordem. Ao aplicar o teste "se A acontecer, B fica mais provável porque ______", o preenchimento honesto era "porque a tecnologia vai melhorar" — que não é mecanismo. Cortado. Contra ele, e diretamente: 42% de sobrevivência em 20 turnos, e compromissos de longo prazo satisfeitos apenas em execuções isoladas dentro de cem turnos.

## 9. Três cenários para 2031

Três mecanismos diferentes, não três graus de otimismo. Escritos como se 2031 já tivesse chegado.

### Provável — o meio gerado

O volume ganhou. Mais da metade dos lançamentos em lojas de jogos carrega declaração de IA, e a declaração perdeu significado no mesmo movimento em que se generalizou: continua binária, continua adicionada depois. O que se tornou escasso não é história — é razão para abrir uma. As plataformas ocuparam o vazio com a única medida que sabiam operar em escala: sinal de julgamento humano. Canal com voz própria monetiza, esteira de template não, e a fronteira é decidida por sistema automatizado cuja regra não é pública.

O trabalho narrativo não desapareceu; foi reorganizado. O contrato de quem escreve precifica revisão e responsabilidade, não palavras, e nos estúdios grandes a função se partiu entre poucos diretores com poder de veto e uma camada larga de revisão paga por volume. A rejeição profissional que a GDC media em 63% em design e narrativa não virou greve nem adesão: virou ambivalência contratualizada.

A obra longa e consistente ficou caro de fazer e, por isso, virou sinal de status — anunciada como tal. O formato que de fato se popularizou é o episódio curto de estado descartável, porque é onde a consistência aguenta. E a localização não morreu em lugar nenhum: o commodity foi para pós-edição, o especializado encareceu, e "traduzido por pessoa" vale como selo no mesmo balcão em que "escrito por pessoa" vale.

### Desejável — a via da procedência

O mesmo volume, resultado diferente, e a diferença veio de coisas que tiveram de ser **construídas**, não de boa vontade.

Primeira condição: a declaração deixou de ser binária. Dose e papel passaram a ser declarados — o que foi gerado, em que etapa, sob revisão de quem — e a comparação entre "uma textura passada por upscaler" e "todo o conjunto de arte gerado" parou de ser a mesma caixinha marcada. Isso exigiu que uma loja grande aceitasse perder simplicidade de interface.

Segunda condição: a base de atestação de autoria **não** pertence a uma plataforma só. O que começou como selo de guilda a dez dólares por título virou registro interoperável, com identidade verificada, consultável por qualquer um e portável entre lojas — e, crucialmente, mantendo a carve-out que a Authors Guild já tinha escrito em 2026: usar IA para pesquisar, estruturar e revisar não descaracteriza autoria humana. A coautoria ficou dizível sem virar confissão.

Terceira condição: fixação. Depois do primeiro caso ruidoso de obra perdida com o servidor, exportar a própria leitura passou a ser requisito e não cortesia — log, trilha, replay, e onde possível o próprio modelo congelado. A consequência inesperada e boa: com o referente de volta, voltou a conversa. Duas pessoas discutem uma história adaptada porque ambas têm o registro do que leram.

Quarta condição, a mais difícil e a menos completa: a localização cosmética foi nomeada como defeito. Trocar marcador cultural sobre trama idêntica passou a ser reprovável em compra pública e em incentivo fiscal, com exigência de origem cultural verificável — o que só aconteceu porque as medições de 2025 e 2026 sobre padronização narrativa e sobre marcadores ofensivos de países do Sul global foram levadas a sério por quem assina edital, e não apenas citadas.

### Indesejável — o meio descartável

Aqui o que falhou não foi a tecnologia: foi a durabilidade.

A narrativa gerada venceu como sessão. Não se compra obra, compra-se cota, e o estado vive no servidor de quem vende. Por um tempo pareceu ótimo — barato, adaptado, infinito. Depois a margem não fechou. Dois fornecedores de modelo concentraram a hospedagem porque só eles suportavam o custo por sessão, uma loja concentrou a distribuição, e quando o primeiro dos dois saiu do negócio, um catálogo inteiro de obras deixou de existir. Não ficou indisponível: deixou de existir, porque nunca houve exemplar. A preservação não tinha do que se apoiar, e a crítica do período anterior — que já havia migrado do enredo para o sistema — ficou falando de geradores que ninguém pode mais executar.

O que sobrou no meio é homogêneo, e a homogeneidade nem foi percebida como perda, porque o repertório médio se tornou a referência com a qual se aprende a escrever. Culturas com pouco texto de treino receberam a versão cosmética de si mesmas e, sem base de comparação, a versão cosmética passou a ser a versão.

**O sinal precoce que poderia ter antecipado isto foi registrado e ignorado duas vezes.** Em 24 de março de 2026 um fornecedor encerrou um produto de mídia gerada por custo, cerca de seis meses após lançá-lo, com um parceiro de catálogo avisado com uma hora de antecedência; e a documentação técnica do concorrente dizia, por escrito, que os vídeos gerados ficavam no servidor por dois dias. Estava tudo lá, em documentação pública, na mesma semana em que os produtos eram anunciados como o futuro da narrativa.

## 10. O experimento

### A mesma obra, dois leitores

**O que é.** Uma novela visual gerada a partir de uma única frase-semente, jogada **em paralelo e isoladamente** por pares de participantes, com estado persistente por pessoa. Cada par joga 30 minutos sem ver a tela do outro. Depois, os dois se sentam juntos por 10 minutos com uma tarefa só: reconstruir em conjunto, por escrito, uma linha do tempo dos acontecimentos da história — e marcar cada ponto em que não conseguem concordar sobre o que aconteceu.

**Pergunta de futuro que testa.** A pergunta de segunda ordem do tema, operacionalizada: *se a história se adapta a cada leitor, ainda existe "a obra"?* Ou seja: quanto do enredo permanece **referenciável em comum** entre duas pessoas que receberam a mesma semente? Isto testa diretamente a Raiz B, que é a mais frágil do mapa.

**Tecnologia emergente usada.** Geração de novela visual a partir de intenção curta (MangoBox ou equivalente, com conta paga, US$ 9/mês), instrumentada com o esquema de *commitments* do NCP-Bench: antes de rodar, declaro por escrito os compromissos da semente (fatos iniciais, objetivos, restrições) e classifico cada divergência entre os dois leitores como violação de compromisso, adição divergente ou conflito factual.

**Por que uma solução madura não responderia à mesma pergunta.** Em Ren'Py, Twine ou Inform 7 o grafo de ramos é **finito e conhecido pelo autor**. A divergência entre dois leitores seria, por construção, um dos N caminhos previstos, e a medida de sobreposição apenas devolveria a estrutura que o autor desenhou — mediria o autor, não o fenômeno. O que se quer medir é divergência **que ninguém previu**, e ela só existe onde o texto é gerado no momento da leitura. Um grupo de controle em Twine, com o mesmo protocolo, serve exatamente para estabelecer o piso: quanta divergência um ramo autoral deliberado já produz.

**O que os participantes fazem.** 12 pares (24 pessoas), recrutados sem exigência de familiaridade com novela visual. Duas condições: gerado (8 pares) e controle em Twine com ramificação autoral equivalente em tamanho (4 pares). Sessão de 30 min individual, 10 min de reconstrução conjunta, 5 min de entrevista curta sobre uma pergunta única — "vocês leram a mesma história?" — respondida por cada um separadamente antes de saber a resposta do outro.

**Métrica e observação.** Três, pré-registradas antes de rodar:
1. **Sobreposição referenciável:** proporção de eventos que os dois citam e situam na mesma ordem relativa, sobre o total de eventos citados pelo par.
2. **Contradições irreconciliáveis por sessão:** número de pontos em que os dois afirmam fatos incompatíveis e não conseguem resolver conversando.
3. **Tempo até a primeira divergência bloqueadora:** minutos de conversa até o primeiro ponto em que a discordância impede a reconstrução de continuar.

**O que me faria mudar de ideia** — os dois limiares, declarados agora para que o resultado possa me contrariar:
- **Se a sobreposição referenciável ficar acima de 70% e as contradições ficarem abaixo de 2 por sessão**, a personalização é cosmética. A **Raiz B cai**, e com ela sete efeitos do mapa (e3 e e4 e seus descendentes). Este é o resultado que as duas medições de homogeneidade — 9-17% de variação lexical, template de trama compartilhado — me levam a *esperar*, e é por isso que o experimento vale: ele testa a parte do mapa em que eu menos acredito, não a parte em que acredito.
- **Se a sobreposição ficar abaixo de 30%**, a conversa compartilhada realmente deixa de ser possível sem instrumento externo. Então **e3.1.1 deixa de ser sinal fraco** — o log da leitura como único referente comum passa de especulação a requisito de projeto, e quem constrói produto narrativo gerado precisa entregar exportação de trilha desde o primeiro dia.
- **Se o grupo de controle em Twine produzir sobreposição semelhante à do gerado**, o fenômeno não é da geração: é da ramificação, tem décadas, e este tema perde sua pergunta de segunda ordem para o tema 14.

## 11. Fontes

1. **MangoBox — página de produto.** `https://www.mangobox.ai/` — sustenta que gerar novela visual a partir de descrição curta é produto comercial com preço (Pro US$ 9/mês, imagens ilimitadas, 20 vídeos/mês) e que a página não declara titularidade da saída. *Confiabilidade: baixa para desempenho, alta para existência e preço — é fonte corporativa interessada, sem triangulação independente de qualidade.*
2. **Sulka Haro, "Three years of AI on Steam".** `https://fragwyz.substack.com/p/three-years-of-ai-on-steam` — ~53.600 lançamentos de meados de 2023 a meados de 2026; declaração de IA em 10,9% (2024), 19,9% (2025), 30,8% (2026); receita de 10-27% por proxy de reviews; sucesso por jogo a 55% da taxa dos sem IA; localização em 18% dos bem-sucedidos vs 6% dos fracassados; 22% de declaração retroativa. *Confiabilidade: média-alta — análise independente com método (Boxleiter) e limitações declaradas pelo autor; não revisada por pares.*
3. **Ma, Yan, Shi et al., "Can LLM Agents Stick to the Script? A Benchmark for Long-Horizon Consistency in Interactive Narratives" (ICML 2026).** `https://arxiv.org/abs/2608.08160` — NCP-Bench, 100 ambientes; GPT-5.2 com 42% de sobrevivência após 20 turnos; conflito factual de 40-68%; qualidade linguística não garante consistência. *Confiabilidade: alta — aceito em conferência de primeira linha, verificação automática.*
4. **Huang, Ma, Ye et al., "NARRA-Gym for Evaluating Interactive Narrative Agents".** `https://arxiv.org/abs/2605.08503` — avaliação executável de 9 modelos em 8 personas, com personalização empática e resistência a erro sensível como dimensões; fluência não prediz robustez. *Confiabilidade: média-alta — preprint de maio de 2026, sem revisão por pares confirmada.*
5. **US Copyright Office, *Copyright and Artificial Intelligence*.** `https://www.copyright.gov/ai/` — Parte 1 (31/07/2024), Parte 2 sobre copiabilidade (29/01/2025), Parte 3 pré-publicação (09/05/2025); guia de registro de 16/03/2023. *Confiabilidade: alta — órgão público, fonte primária.*
6. **Comics Beat, "AI manga translation start-up Orange gets $20 million in funding".** `https://www.comicsbeat.com/ai-manga-translation-start-up-orange-gets-20-million-in-funding/` — 2,92 bi de ienes (~US$ 19,4 mi), maio de 2024, Shogakukan entre investidores; meta de 500 títulos/mês; ~US$ 7.000/volume; ~10.000 volumes em inglês, ~2% do total; e a contestação dos tradutores. *Confiabilidade: média — imprensa especializada, números da empresa, com o contraditório na mesma peça.*
7. **LunaTranslator (HIllya51), repositório.** `https://github.com/HIllya51/LunaTranslator` — 13,1 mil estrelas, 1,1 mil forks, GPLv3, ~4.945 commits; hook, OCR próprio, reconhecimento de fala, emuladores NS/PSP/PSV/PS2, motores de LLM, TTS, furigana. *Confiabilidade: alta para existência e escala do repositório; nula como medida de número de usuários.*
8. **Smithsonian Magazine, sobre Rie Kudan e o Prêmio Akutagawa.** `https://www.smithsonianmag.com/smart-news/this-award-winning-japanese-novel-was-written-partly-by-chatgpt-180983641/` — janeiro de 2024; "cerca de 5% do texto inteiro escrito diretamente pela IA generativa"; comitê havia chamado a obra de praticamente impecável. *Confiabilidade: média-alta — imprensa de reputação, citando a autora diretamente.*
9. **Outlook Respawn, sobre o encerramento do Sora.** `https://respawn.outlookindia.com/gaming/gaming-news/openai-shuts-down-sora-ai-video-app-was-losing-1-million-a-day` — anúncio em 24/03/2026, ~6 meses de operação; ~US$ 1 mi/dia e ~US$ 1,30/clipe; DAU de ~1 mi para <500 mil; 3,3 mi de downloads; US$ 2,1 mi de receita no app; acordo Disney de ~US$ 1 bi desfeito. *Confiabilidade: baixa-média — agregador citando o WSJ; a fonte forte (Variety) retornou HTTP 402. O fato do encerramento é triangulado pelo título da Variety; as quantias não foram lidas na origem.*
10. **Moshion, "YouTube Is Demonetizing AI Channels. Here Is What Actually Changed."** `https://moshion.app/resources/youtube-demonetization-ai-faceless-channels` — política renomeada de "repetitious" para "inauthentic content" em julho de 2025, alcançando "conteúdo que carece de criatividade humana genuína"; onda de janeiro de 2026 com 11 canais encerrados e 6 limpos, 35 mi de inscritos e 4,7 bi de visualizações; critério de julgamento humano por vídeo. *Confiabilidade: baixa-média — análise de terceiro citando estudo da Kapwing; a política em si é da plataforma e não foi lida na origem.*
11. **Authors Guild, "Authors Guild Launches Expanded 'Human Authored' Certification Program".** `https://authorsguild.org/news/human-authored-certification-expands-to-all-authors/` — beta em janeiro de 2025, expansão em 02/03/2026; US$ 10/título para não-membros; verificação de identidade por terceiro; base pública; regra citada verbatim, com IA permitida para índice, pesquisa, brainstorming e estruturação. *Confiabilidade: alta como fonte primária da própria regra; interessada quanto a mérito e tração ("milhares de livros", sem auditoria).*
12. **GDC, *State of the Game Industry 2026*.** `https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/` — mais de 2.300 respondentes; 36% usam IA generativa (30% em estúdios, 58% em publicação/marketing); 52% veem impacto negativo (30% e 18% nos anos anteriores), 7% positivo (13% em 2025); design e narrativa com 63% de visão desfavorável; 81% usam para pesquisa/brainstorming; 28% demitidos em dois anos. *Confiabilidade: média-alta — série anual com método declarado; amostra autosselecionada, sem datas de campo publicadas na peça.*
13. **Senado Federal, PL 2338/2023.** `https://www25.senado.leg.br/web/atividade/materias/-/materia/157233` — aprovado em 10/12/2024 após 244 emendas; remetido à Câmara em 17/03/2025 pelo Ofício SF nº 235; tramitação encerrada no Senado, sem movimento posterior registrado. *Confiabilidade: alta — registro oficial, fonte primária.*
14. **IFComp, "Rules for the Competition" (2026).** `https://ifcomp.org/rules/` — regra 4: todo conteúdo voltado ao jogador inteiramente criado por humanos, incluindo capa, prosa e ativos; IA permitida em edição, depuração, acessibilidade, pesquisa, tradução limitada e código; proibido exigir interação com IA durante a partida; advertência ou desclassificação na primeira infração, desclassificação automática na segunda. *Confiabilidade: alta — regulamento oficial, fonte primária.*
15. **Mordor Intelligence, *Language Services Market* (atualizado em 11/09/2026).** `https://www.mordorintelligence.com/industry-reports/language-services-market` — US$ 71,84 bi (2025), US$ 75,53 bi (2026), US$ 96,97 bi (2031), CAGR 5,12%; pós-edição de tradução automática em 38,87% do investimento de 2025; localização com IA a 7,82% de CAGR; inflação de 10-15% em salários de tradutores especializados. *Confiabilidade: média — pesquisa de mercado comercial, método declarado mas não auditável; usada aqui como contra-sinal, o que reduz o risco de otimismo interessado.*
16. **Rettberg & Wigers, "AI-generated stories favour stability over change" (Open Research Europe, 2025).** `https://arxiv.org/abs/2507.22445` — 11.800 histórias com gpt-4o-mini, 50 por cada um de 236 países; uniformidade de trama, conflito higienizado; nomeia "padronização narrativa" como categoria de viés. *Confiabilidade: alta quanto a método e escala; aguardando revisão por pares.*
17. **Bhatt, Vijay, Milbauer & Diaz, "Characterizing Cultural Localization in AI-Generated Stories".** `https://arxiv.org/abs/2606.14626` — 5 modelos, 125 tópicos, 193 nacionalidades; 9-17% do vocabulário responde pela variação entre nacionalidades; template narrativo culturalmente agnóstico; marcadores de 19 países, sobretudo do Sul global, em média ofensivos. *Confiabilidade: alta quanto a método; preprint de junho de 2026.*
18. **Google, documentação do Veo na Gemini API.** `https://ai.google.dev/gemini-api/docs/veo` — Veo 3.1 / Fast / Lite; máximo de 8 segundos por clipe ("8 seconds only if 1080p or 4k or using reference images"); extensão só em 720p; áudio nativo; "vídeos criados pelo Veo recebem marca d'água SynthID"; arquivos retidos por 2 dias; latência de 11 s a 6 min. *Confiabilidade: alta — documentação primária do fornecedor, sobre limites técnicos que não o favorecem.*
19. **KitGuru, sobre *The Portopia Serial Murder Case* da Square Enix.** `https://www.kitguru.net/gaming/matthew-wilson/square-enixs-free-ai-visual-novel-launches-to-negative-steam-reviews/` — 24/04/2023; posicionado pela empresa como "demonstração educacional de Processamento de Linguagem Natural"; avaliação "Muito negativa" no Steam com menos de 250 reviews; crítica de rigidez do parser. *Confiabilidade: média — imprensa especializada; usada apenas como antecedente histórico, não como evidência de capacidade atual.*

**Buscas que não deram resultado utilizável, registradas por honestidade:** a política de declaração de IA do Steam na fonte primária (documentação do Steamworks e post de notícia, ambos sem devolver o texto da política); a peça da Variety sobre o Sora (HTTP 402); o anúncio da própria IFComp sobre a política de IA (HTTP 403 — a regra foi lida no regulamento oficial, que é fonte melhor); e uma tentativa de localizar uma novela visual inteiramente gerada, lançada comercialmente e com recepção documentada, que não encontrou nenhum caso — ausência que reforça o veredito de "emergente" da Raiz A.

## 12. Anexo — o levantamento bruto

### Registro da entrevista (seção 0 da skill)

A skill proíbe produzir análise imediatamente após receber um tema. As seis perguntas mínimas foram feitas antes de qualquer pesquisa, e respondidas pelo enquadramento desta rodada:

| Campo | Resposta |
|---|---|
| `tema` | Narrativa gerativa e coautoria — tema 8 de 19, família "Simulação e mundos"; objeto: a história como coisa gerada e o efeito sobre autoria |
| `horizonte` | 2031 |
| `publico` | quem projeta mídia e interação |
| `recorte_geografico` | global, com uma nota sobre o Brasil |
| `descartes` | o que já é comum em produto de massa (régua da disciplina); ideias óbvias que serviriam para qualquer tema; nenhuma outra exclusão |
| `vies_desejado` | neutro |

Parâmetros adicionais declarados: profundidade de três ordens; modo "a partir de uma inovação", não de um setor; disrupção suspeita nenhuma (descobrir); critério de mudança de ideia do solicitante — evidência de que a adoção passou da maioria inicial (Rogers) ou de que a tecnologia não rompe nada.

Confirmação de parâmetros feita, sem contradição detectada. **Uma tensão, não contradição, registrada aqui:** o recorte "global" combinado com "uma nota sobre o Brasil" produz um desequilíbrio inevitável de evidência — as fontes brasileiras disponíveis são legislativas, não de mercado ou de pesquisa, e é por isso que a nota sobre o Brasil na seção 3 fala de moldura legal e não de produção. Assumi isso em vez de fabricar simetria.

**Duas suposições declaradas, por não haver usuário para dirimir:** (a) "nota sobre o Brasil" foi interpretada como um parágrafo dentro da seção 3, não como seção própria — a skill proíbe criar um 13º título `##`; (b) `recorte_geografico` no frontmatter foi preenchido como `global`, já que o vocabulário permitido é `global | brasil | outro` e o recorte principal é global.

### Classificação de todos os candidatos

| # | Candidato | Maturidade | Ruptura | Veredito |
|---|---|---|---|---|
| 1 | Geração do artefato narrativo completo a partir de intenção curta | emergente | alto | **Raiz A** |
| 2 | Obra sem edição única (adaptação por leitor) | experimental | alto | **Raiz B** |
| 3 | Localização migrando para o receptor | emergente | alto | **Raiz C** |
| 4 | Coerência narrativa de longo curso verificável | experimental | alto | rebaixado a "o que falta" da Raiz A |
| 5 | Atestação de autoria humana como bem de mercado | **em vigor** | alto | rebaixado a efeito (e1.1, e1.1.1, e5.2.1) |
| 6 | Script-to-video de ponta a ponta | emergente com teto duro | médio-alto | tecnologia habilitadora; fronteira com tema 12 |
| 7 | Motores de novela visual (Ren'Py, Monogatari) | **maduro** | baixo | antecedente |
| 8 | Diálogo ramificado e ficção interativa autoral (Twine, Inform 7, YarnSpinner, Arrow, Dialogic) | **maduro** | baixo | antecedente |
| 9 | Worldbuilding offline e gerador de mapa (chronicler, Fantasy-Map-Generator) | **maduro** | baixo | antecedente |
| 10 | TTS gerativo para diálogo (ChatTTS, Bark) | maduro como infraestrutura | baixo-médio | descartado pela régua: voz sintética já é produto de massa |
| 11 | Chatbot de personagem (Character.AI, AI Dungeon) | **produto de massa** | — | descartado pela régua |
| 12 | Personagem que age dentro de um mundo | — | — | descartado: tema 7 |
| 13 | Geração procedural por regras | — | — | descartado: tema 14 |
| 14 | Parser de linguagem natural em adventure (Portopia, 2023) | antecedente fracassado | baixo | descartado: demonstração de 2023, "Muito negativa" no Steam; entra como precedente na seção 3 |

**Nota sobre o candidato 6.** Ele é o que mais se aproximou de ser uma quarta raiz, e o motivo do corte foi duplo e explícito: parte do objeto pertence ao tema 12 por decisão da disciplina (a geração de vídeo *como mídia*), e a capacidade tem um teto documentado que a desqualifica como "geração do artefato inteiro" — 8 segundos por clipe no Veo 3.1, extensão só a 720p. Um roteiro de dez minutos exige ~75 clipes costurados, o que é montagem, não geração de obra.

### Caminhos causais cortados, e o teste que os cortou

O teste é sempre o mesmo: *"se A acontecer, B se torna mais provável porque ______"*. Quando o preenchimento honesto não é mecanismo, a aresta cai.

1. **"Modelos de mundo persistentes → novela visual infinita e coerente".** Preenchimento honesto: "porque a tecnologia vai melhorar". Não é mecanismo. **Cortado**, e contra ele há evidência direta (42% em 20 turnos; compromissos de longo prazo satisfeitos só em execuções isoladas em 100 turnos).
2. **"Custo de produção cai → escritores de jogo desaparecem como profissão".** O mecanismo exigiria substituição na entrega, e o dado disponível diz outra coisa: entre os 36% que usam IA generativa, o uso majoritário é pesquisa e brainstorming (81%), e jogos com IA têm sucesso a 55% da taxa dos sem IA. **Cortado** e substituído por e1.2 e e1.2.1 (recomposição da função, não eliminação).
3. **"Tradução instantânea → a localização como indústria desaparece".** Contradito por dado direto: mercado projetado de US$ 75,53 bi (2026) a US$ 96,97 bi (2031), CAGR 5,12%, pós-edição em 38,87% do investimento, salários de especialistas com inflação de 10-15%. **Cortado** e invertido em e5.2 (especialização e encarecimento por unidade). Este é o corte em que a evidência mais claramente contraria o enunciado do tema.
4. **"Prêmio literário barra obra em coautoria com IA" como wildcard.** **Cortado** por já ter ocorrido o oposto, com data: Akutagawa, janeiro de 2024, ~5% de texto gerado, comitê sem objeção.
5. **"Geração barata → democratização do acesso a contar histórias para culturas sub-representadas".** Aresta atraente e **cortada** pela evidência: marcadores culturais de 19 países, sobretudo do Sul global, são em média ofensivos, e 9-17% do vocabulário responde por toda a variação entre nacionalidades. O mecanismo real aponta na direção contrária, e virou e2.2 e e2.2.1.
6. **"Declaração de IA obrigatória → consumidor escolhe informado → mercado se autorregula".** **Cortado**: a declaração é binária e 22% dos casos com receita significativa a adicionaram retroativamente. Sem dose e sem tempestividade, não há informação para escolher.

### Contrassinais reunidos, inclusive os que não couberam no mapa

- Sentimento profissional em deterioração medida: 18% → 30% → 52% de visão negativa; positivo de 13% para 7%.
- Sucesso por jogo de títulos com IA a 55% da taxa dos sem IA.
- Encerramento do Sora por custo, seis meses após o lançamento, com recuo de um detentor de catálogo de ~US$ 1 bi.
- Onda de desmonetização do YouTube: 11 canais encerrados, 6 limpos, 35 mi de inscritos, 4,7 bi de visualizações.
- IFComp proibindo conteúdo gerado voltado ao jogador e proibindo exigir IA durante a partida.
- Localização crescendo, com salário de especialista subindo.
- Teto de 8 segundos por clipe na documentação do próprio fornecedor.
- Precedente de 2023 (Portopia): a primeira tentativa de grande editora de vender narrativa com IA linguística foi recebida com "Muito negativa".

### Hipóteses alternativas ao mapa inteiro

**H1 — A escassez inverte e o mapa está certo pelo motivo errado.** Não é que a autoria humana vire escassa por virtude; ela vira escassa por *função de plataforma* — é o marcador mais barato de triar inventário publicitário. Se for isso, o mercado de atestação (e1.1.1) chega mais rápido do que "fraco/2031/baixa" sugere, e chega como instrumento de controle de oferta, não de reconhecimento de ofício. Esta é a hipótese que eu consideraria a segunda mais provável, e ela não está no corpo do mapa porque é uma releitura do mesmo desenho, não um desenho alternativo.

**H2 — Tudo isto é uma camada de ferramenta, e nada de estrutural acontece até 2031.** A geração é absorvida por pré-produção e pós-edição, como a tradução automática foi; o artefato narrativo continua sendo feito por gente, mais rápido; nenhuma das três raízes muda a forma do produto. Evidência a favor: 81% de uso em brainstorming, IFComp permitindo IA em ferramenta e proibindo em superfície, a Authors Guild permitindo estruturação de roteiro dentro do selo humano, e a localização crescendo. **Esta é a hipótese mais bem sustentada pela evidência lida**, e o mapa acima está mais na direção da mudança do que ela autorizaria. Registro isso explicitamente porque é o tipo de assimetria que a skill manda não limpar: um mapa de futuro tem viés estrutural a favor de que algo aconteça.

**H3 — A ruptura vem de onde este mapa não olhou: educação e formação.** Se o repertório médio gerado se torna o material com que se aprende a escrever, a mudança relevante não é de mercado, é de currículo, e aparece antes de 2031 em quem entra na profissão, não em quem já está nela. O mapa toca isso de raspão em e2.1.1 e não tem evidência para mais.

### Observações que não entraram no mapa final

- **A carve-out da Authors Guild é o achado mais subestimado do levantamento.** O selo de autoria humana permite explicitamente IA para brainstorming e estruturação de roteiro. Isto é: a instituição que mais tem a perder com a coautoria **normalizou a coautoria** e desenhou a linha em outro lugar — na expressão literária, não no processo. Nenhum efeito da roda captura isso bem, e talvez devesse.
- **A convergência de três instituições independentes na mesma linha, em menos de doze meses**, é o padrão mais forte do levantamento e não tem nó próprio: IFComp (conteúdo voltado ao jogador × ferramenta de desenvolvimento), YouTube (criatividade humana genuína por vídeo × volume templatizado), Authors Guild (expressão literária × auxílio). Três comunidades que não se coordenam chegaram à mesma fronteira. Isso está em e1.3 e e1.3.1, mas diluído.
- **O único número econômico limpo do levantamento favorece a tradução, não a escrita** (18% vs 6%). Se eu tivesse de escolher uma das três raízes para apostar, seria a C — e o mapa dá a ela o menor número de efeitos, o que é uma incoerência entre a força da evidência e o peso na estrutura. Declarado, não corrigido.
- **Não há nenhuma novela visual inteiramente gerada, lançada comercialmente, com recepção documentada.** Procurei; não encontrei. A ausência é informação: em setembro de 2026 a Raiz A existe como ferramenta, e não como obra no mercado.
- **Sobre o Brasil, o que faltou.** Não encontrei, dentro do escopo desta rodada, dado brasileiro sobre produção de narrativa gerada, sobre dublagem e localização nacionais diante da IA, ou sobre posição de entidades de classe daqui. A nota da seção 3 se limita ao que foi possível ler em fonte primária (o registro legislativo). Uma rodada com foco brasileiro precisaria buscar ABRAGAMES, entidades de dublagem e editais de fomento — e isso não foi feito.
