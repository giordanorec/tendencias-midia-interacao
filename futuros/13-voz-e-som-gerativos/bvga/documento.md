---
tema: Voz e som gerativos
slug: voz-e-som-gerativos
autor_login: bvga
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-12
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 9
efeitos_ordem_3: 9
tecnologias_citadas: [Suno, Udio, Stemphonic, Moshi, Mimi, Qwen3-Omni, Piper TTS, Kokoro TTS, Picovoice Orca, Apple SpeechAnalyzer, Apple Personal Voice, ElevenLabs, AudioSeal, WavMark, VoiceMark, DDEX AI credits]
fontes: 22
confianca: media
experimento: A faixa que se desmonta
skill_usada: futurizacao-bvga
publico_ok: false
---

## 1. Resumo

**Até 2031, a mudança estrutural mais bem sustentada pelas evidências não é a música gerada ficar boa — isso já aconteceu — e sim a música gerada deixar de ser um arquivo que se possui.** Duas das três raízes aceitas neste mapa tratam de propriedade, proveniência e exportabilidade; apenas uma trata de capacidade de modelo.

A pesquisa forçou duas correções no enunciado de partida. Primeira: **o limite técnico apontado como sinal revelador — "não entrega os canais separados" — deixou de valer**. Em 11/06/2026 a Suno publicou o modo Advanced Split, que separa uma faixa em quase cem instrumentos regenerando cada stem em vez de fatiar a mixagem [1]. Segunda: **o wildcard proposto — um artista sintético numa parada — já ocorreu em parte**: "How Was I Supposed to Know?", de Xania Monet, entrou em parada de execução radiofônica da Billboard e o projeto assinou contrato de US$ 3 milhões em setembro de 2025 [20]. Nenhum dos dois pode ser tratado como futuro.

Feita a limpeza, três disrupções-raiz sobrevivem: **R1 — geração multi-faixa nativa** (o modelo produz o arranjo como faixas sincronizadas e simbólico editável, não como render); **R2 — geração licenciada com proveniência por saída** (cada geração carrega um vínculo com o catálogo de treino, e a saída pode não ser exportável); **R3 — fala conversacional full-duplex local** (o diálogo por voz roda no aparelho, sem enviar áudio nem pagar por minuto). A roda deriva 24 efeitos em três ordens. Nenhum recebeu sinal forte.

O que **não** sobreviveu ao red team: a substituição da tela pela voz. A posse de caixa inteligente nos EUA está em 39%, depois de quatro anos de platô [19]; 97% dos ouvintes não distinguem música gerada de música humana [8], mas música gerada é 1 a 3% das execuções na Deezer [7]. Capacidade de gerar não é adoção de consumo, e qualidade de fala não é mudança de interface.

**Consequência prática para quem projeta:** trate a saída generativa como documento com camadas e proveniência, não como render; desenhe para dois regimes de voz no mesmo produto (local limitado e remoto capaz), com regra explícita de troca; e não pressuponha que o usuário terá o arquivo.

## 2. O tema

Entrevista concluída antes da pesquisa, conforme a seção 0 da skill. Parâmetros:

| Parâmetro | Delimitação |
|---|---|
| Tema | Voz e som gerativos: fala conversacional gerada e música gerada por descrição |
| Horizonte | 2031 |
| Público | Quem projeta mídia e interação |
| Geografia | Global, com nota sobre o Brasil |
| Fora do escopo | O que já é comum em produto de massa (régua da disciplina) |
| Postura | Neutra; partida por inovação/capacidade, não por setor |
| Profundidade | Três ordens causais |
| Critério de mudança de ideia | Evidência de que a adoção passou da maioria inicial, ou de que a capacidade só melhora o existente |

**O que "som e voz gerados" significa aqui.** Duas famílias, mantidas separadas porque suas cadeias de valor são diferentes: (a) **fala** — reconhecimento, síntese e diálogo falado; (b) **música** — geração de peça inteira a partir de descrição, incluindo instrumental, voz cantada e mixagem.

**O que a régua da disciplina exclui, e por quê.** Assistente de voz por nuvem, TTS, clonagem de voz a partir de poucos segundos e transcrição automática são capacidades comercialmente repetíveis, presentes em múltiplas plataformas e sustentando usos reais. Por isso entram como **antecedentes maduros**, não como raízes. O mesmo vale para o agente de voz por nuvem em produção: a ElevenLabs declara ter passado de US$ 350 milhões de ARR no fim de 2025 para mais de US$ 500 milhões em quatro meses de 2026 [18]. É dado de empresa interessada e mede receita, não capacidade — mas serve ao propósito oposto ao entusiasmo: mercado dessa ordem indica capacidade **estabelecida**, logo fora do escopo de disrupção.

**Fronteiras herdadas.** Imagem em movimento e IA no dispositivo em geral são outros temas da disciplina; aqui só a parte de áudio e voz.

**Data de corte: 12/09/2026.** Os anos atribuídos aos efeitos são janelas analíticas para teste de hipótese, não previsões de lançamento. `autor_login: bvga` é o identificador informado; não representa verificação de identidade.

## 3. Onde isso está hoje

### 3.1 Música gerada: a capacidade está madura, o regime jurídico não

**Gerar uma peça inteira convincente é capacidade madura.** A Deezer informa receber cerca de **90 mil faixas 100% geradas por IA por dia**, mais de **50% de todos os uploads diários** no pico de junho de 2026, e diz etiquetar essas faixas e retirá-las de recomendação algorítmica e playlist editorial [7]. Num teste cego da Deezer com a Ipsos — 9.000 pessoas em oito países, incluindo o Brasil, entre 6 e 10/10/2025 —, **97% dos participantes falharam** em identificar a faixa totalmente gerada; **80%** concordaram que ela deveria ser rotulada e **52%** se disseram desconfortáveis com a própria incapacidade de distinguir [8]. Os dois primeiros são dados de plataforma interessada em posicionar-se como a que rotula; o desenho do segundo (teste cego, amostra e datas declaradas) é verificável e a conclusão converge com o volume observado.

**O limite apontado como revelador caiu.** Em 11/06/2026 a Suno publicou melhorias em separação de stems, incluindo o modo **Advanced Split**, que permite "escolher exatamente o que extrair de uma lista de quase cem instrumentos", exclusivo do plano Premier [1]. A página de produto descreve exportação de **até 12 stems WAV alinhados no tempo** para uso em DAW [2]. Isso é **separação posterior da mixagem**, não geração nativa em faixas — distinção que sustenta R1 e que a nota de lançamento do próprio fornecedor deixa explícita ao contrapor "regenerar cada stem" a "fatiar o mix".

**A geração nativa em faixas é fronteira de pesquisa.** O Stemphonic (submetido em 10/02/2026) propõe gerar um conjunto **variável** de stems sincronizados em uma única passagem de inferência, com controle de atividade por stem, contra abordagens anteriores de conjunto fixo ou geração sequencial [3]. É preprint com demonstração, não produto.

**O regime jurídico mudou antes da tecnologia.** Em 29/10/2025 a UMG e a Udio anunciaram acordo que encerra o litígio e cria plataforma licenciada para 2026, com as criações "controladas dentro de um jardim murado" e medidas de impressão digital e filtragem [12]. Em 25/11/2025 a WMG e a Suno anunciaram acordo no qual, com a chegada dos modelos licenciados em 2026, faixas do plano gratuito passam a ser **tocáveis e compartilháveis, mas não baixáveis**, planos pagos ganham **limite mensal de downloads**, e artistas têm controle de opt-in sobre nome, imagem, semelhança, **voz** e composições [13]. São comunicados das próprias partes: estabelecem o que foi anunciado, não o que será entregue.

**Há projeção econômica, e ela é de parte interessada.** O estudo global encomendado pela CISAC à PMP Strategy (04/12/2024) projeta **24% da receita dos criadores musicais em risco até 2028**, perda cumulativa de €10 bilhões em cinco anos, e IA generativa respondendo por ~20% da receita das plataformas de streaming e ~60% da receita de bibliotecas de produção [11]. O próprio estudo condiciona a projeção à manutenção do quadro regulatório. É encomenda de entidade de arrecadação; trato como hipótese quantificada, não medida.

### 3.2 Fala: transcrição e síntese locais são maduras; o diálogo local não é

**Síntese no dispositivo roda muito acima do tempo real em CPU comum.** Um comparativo de dez motores de TSS on-device (publicado em 14/07/2026, atualizado em 18/08/2026), em AMD Ryzen 7 5700X com 64 GB, reporta Picovoice Orca em 7 MB e razão de 0,065×, Piper TTS em 61 MB e 0,35×, Kokoro em 341 MB e 1,28× [15]. **O comparativo é do fornecedor cujo motor lidera** — não o uso como prova de superioridade, e sim como evidência de que TTS local em dezenas de megabytes é engenharia resolvida.

**Voz personalizada local também é capacidade estabelecida.** A Apple descreve o Personal Voice treinado com **150 frases lidas**, com "treinamento e inferência inteiramente no dispositivo", durante a noite e com o aparelho carregando; MOS de 3,68 contra 3,85 das gravações originais [14]. É página da própria Apple, de 18/12/2023 — estabelece arquitetura e ordem de grandeza, não desempenho atual.

**O que não é maduro é o diálogo falado full-duplex local.** O Moshi declara latência **teórica de 160 ms** (80 ms de quadro do codec Mimi + 80 ms de atraso acústico) e latência prática de até **200 ms em GPU L4**, com o codec Mimi a 12,5 Hz e 1,1 kbps, pesos em CC-BY 4.0 e implementações MLX em int4/int8/bf16 [6]. **A marca de 200 ms é em GPU de servidor, não em celular** — a existência de build MLX quantizado indica caminho para máquina pessoal, não para telefone. Do lado dos modelos omni de pesos abertos, o Qwen3-Omni declara latência teórica de primeiro pacote de **234 ms** em partida a frio, com 119 idiomas de texto, 19 de entrada de fala e 10 de saída [5] — mas a variante publicada é de 30B parâmetros com 3B ativos, dimensão de estação de trabalho.

### 3.3 Proveniência, confiança e governança

**A obrigação de marcação chegou.** O Artigo 50 do AI Act europeu exige que provedores de sistemas que geram áudio sintético garantam que as saídas sejam "marcadas em formato legível por máquina e detectáveis como artificialmente geradas ou manipuladas" (50(2)), e que quem implanta sistemas que criam deepfakes de áudio "divulgue que o conteúdo foi artificialmente gerado ou manipulado" (50(4)), com exceções para edição padrão, investigação criminal e obra **artística, criativa ou satírica** [10]. A exceção artística é relevante para música: a peça gerada pode escapar da obrigação de divulgação que a chamada telefônica não escapa.

**E a marcação é frágil.** Um estudo de 17/08/2026 avaliou dez esquemas de marca d'água neural de áudio e removeu, com ataque estrutural sem treinamento e **PESQ ≥ 3,6** (qualidade preservada), a carga do WavMark, SilentCipher e audiowmark e o **sinalizador de detecção do AudioSeal**; VoiceMark, WMCodec, AlignMark e AWARE resistiram, e o método identificou qual esquema estava presente com 84% de acerto [4]. Marcas em magnitude e domínio-portador são frágeis; marcas em domínio latente resistiram. Conclusão operacional: **a obrigação legal de marcar e a robustez da marca não estão no mesmo lugar.**

**O rótulo está migrando da faixa para o perfil.** Em 11/08/2026 o Spotify anunciou um selo **"AI Persona"**, a partir de meados de setembro de 2026, para perfis cuja identidade pública "parece representar identidades fotorrealistas geradas por IA", com autodeclaração voluntária mais revisão da própria plataforma, aplicada a perfis acima de certos limiares de audiência; cita "dezenas de milhares de créditos de IA submetidos diariamente" [9]. É anúncio de plataforma; mede intenção declarada, não efeito.

**O dano por voz é o lado com evidência de escala.** Pelo relatório de crimes na internet de 2025 do FBI, norte-americanos reportaram **US$ 893.346.472** em perdas em **22.364** reclamações que referenciavam IA, com clonagem de voz entre os vetores principais [21]. **Não consegui abrir a fonte primária** (fbi.gov devolveu 403 e o PDF do IC3 não extraiu texto legível); o número está aqui por veículo secundário e assim declarado. No Brasil, reportagem de 20/03/2026 descreve o padrão operacional: ligação silenciosa para coletar amostra de voz — "quanto mais você responder aquela ligação e continuar falando, mais perfeita ficará a clonagem" — seguida de áudio de WhatsApp pedindo transferência [22]. É imprensa especializada com fonte única de fornecedor de segurança; sustenta a existência do padrão, não sua frequência.

### 3.4 Nota sobre o Brasil

Dois fatos da TIC Domicílios 2025 (coleta de março a agosto de 2025, divulgação em 09/12/2025) importam para voz local: cerca de **50 milhões** de brasileiros usaram IA generativa, **32%** dos usuários de Internet, mas com **69% na classe A contra 16% nas classes D e E**, e **59%** entre quem tem superior contra **17%** com fundamental; **61%** das pessoas das classes D e E com celular têm plano pré-pago, com limitação de dados [17]. A leitura é direta e ainda assim contraintuitiva: **é exatamente onde a nuvem é mais cara que o modelo local tem mais valor de uso** — e é onde o aparelho capaz de rodá-lo é menos provável.

Do lado da produção sonora, a dublagem brasileira já levou a demanda ao Legislativo. Em audiência nas comissões de Cultura e de Trabalho da Câmara em 29/08/2024, o setor pediu regulação do uso de IA e apoiou o PL 1376/22, além de referenciar o PL 2338/23; o Ministério da Cultura denunciou que "muitos profissionais criativos precisam assinar contratos de adesão, renúncia dos direitos de autor e transferência do direito de personalidade" [16]. É registro de audiência pública de 2024: estabelece a existência e o conteúdo da demanda, não seu desfecho.

### 3.5 Cheque temporal: Three Horizons

| Horizonte | Sistema e conflitos | Evidência que permitiria avançar |
|---|---|---|
| H1 — presente | Música gerada como render descartável em volume massivo, com 1–3% das execuções; voz por nuvem cobrada por minuto; voz local restrita a transcrever e falar | Inventário de tarefas em que o arquivo gerado é insuficiente porque não se pode editá-lo nem provar sua origem |
| H2 — 2027–2029 | Plataformas licenciadas com saída não exportável disputam com pesos abertos exportáveis; stems por separação disputam com stems por geração; voz local disputa com voz remota dentro do mesmo produto | Uso repetido de material gerado como insumo (não como produto final); modelo full-duplex rodando em telefone com qualidade aceitável em português |
| H3 — 2030–2031 | Saída generativa é documento com camadas e proveniência; falar com o sistema não implica enviar a voz; origem declarada é atributo de catálogo | Retenção fora de demonstração; proveniência exigida na distribuição; convenção de turno de voz estabilizada |

As faixas são cheque de transição, não previsão. **H1 pode continuar dominante em 2031** — e a evidência de platô de adoção de interface por voz [19] é a razão principal para levar essa possibilidade a sério. **Não atribuí posição formal no Hype Cycle**: ele entra aqui como pergunta ("isto é capacidade repetível ou anúncio?"), não como curva. **Magic Quadrant não foi usado**: o mercado de agentes de voz está se formando e uma leitura de posicionamento competitivo seria confundida com previsão.

## 4. As disrupções-raiz

As fichas são hipóteses estruturais. "Alto" descreve o **alcance** da ruptura caso ocorra, não sua probabilidade. Candidatos rejeitados estão na seção 12.

### R1 — Geração multi-faixa nativa: a saída deixa de ser render e passa a ser projeto

| Campo | Avaliação |
|---|---|
| candidato | O modelo gera o arranjo como conjunto de faixas sincronizadas, com controle por faixa e simbólico extraível, em vez de produzir uma mixagem final |
| maturidade | experimental |
| potencial_de_ruptura | alto |
| o_que_rompe | O pressuposto de que material gerado é descartável e irrevisável; altera quem pode produzir (revisar passa a bastar), a cadeia de valor da produção musical e a arquitetura das ferramentas de edição |
| por_que_agora | Geração multi-stem em passagem única saiu do conjunto fixo para o variável em 02/2026 [3], e o fornecedor líder já vende separação por regeneração de quase cem instrumentos [1] — os dois caminhos convergem para o mesmo artefato |
| o_que_falta | Qualidade de stem nativo em produto; formato interoperável entre gerador e DAW; clareza de licença sobre a camada (e não só sobre a faixa); e demanda comprovada — não há evidência de que editabilidade, e não qualidade, é o que falta ao usuário |
| evidencias | Stemphonic [3], nota de lançamento e página de produto da Suno [1][2] |
| veredito | **Aceita** como raiz experimental. Rejeitada a formulação "música gerada é editável" como se já fosse capacidade nativa: hoje é separação posterior, de um fornecedor, no plano mais caro |

**Limiar de ruptura:** o usuário recebe camadas que pode substituir individualmente sem regerar a peça, e a ferramenta de edição passa a assumir material gerado como ponto de partida. Se a separação continuar sendo um pós-processo proprietário de um plano premium, permanece melhoria incremental de exportação.

### R2 — Geração licenciada com proveniência por saída: a saída deixa de ser um arquivo que se possui

| Campo | Avaliação |
|---|---|
| candidato | Cada geração carrega vínculo verificável com o catálogo de treino, com compensação por saída e restrição de exportação — a geração vira serviço de consumo, não ato de produção |
| maturidade | emergente |
| potencial_de_ruptura | alto |
| o_que_rompe | O pressuposto de que a saída generativa é um arquivo do usuário; altera a cadeia de valor (o detentor de catálogo passa a controlar o modelo, não só a obra), a arquitetura da plataforma e a distribuição de poder entre gravadora, plataforma e criador |
| por_que_agora | Dois acordos anunciados em 2025 estabelecem jardim murado e teto de download com modelos licenciados previstos para 2026 [12][13], e a obrigação de marcação legível por máquina passa a valer no AI Act [10] |
| o_que_falta | Lançar; sobreviver à comparação com pesos abertos exportáveis; provar que a medida de semelhança que fundamenta o royalty é auditável por quem não a calcula; e resolver que a marca d'água que sustentaria a proveniência é removível [4] |
| evidencias | Comunicados UMG/Udio [12] e WMG/Suno [13], Artigo 50 do AI Act [10], fragilidade de marca d'água [4], selo de persona do Spotify [9] |
| veredito | **Aceita** como raiz emergente. Rejeitada como "fim da música gerada sem licença": o caminho de pesos abertos e exportáveis não desaparece por acordo comercial |

**Limiar de ruptura:** a proveniência passa a ser condição de circulação — sem ela o material não entra na distribuição. Se a etiqueta continuar sendo informativa e opcional, é rotulagem, não ruptura.

### R3 — Fala conversacional full-duplex local: falar com o sistema sem enviar a voz nem pagar por minuto

| Campo | Avaliação |
|---|---|
| candidato | Diálogo falado com escuta e fala simultâneas rodando no dispositivo do usuário, sem tráfego de áudio e sem custo por minuto |
| maturidade | emergente |
| potencial_de_ruptura | alto |
| o_que_rompe | O acoplamento entre interface por voz e infraestrutura de nuvem paga; altera o custo marginal e a barreira de entrada para pôr voz num produto, os contextos em que a voz é juridicamente admissível, e a governança do áudio capturado |
| por_que_agora | Full-duplex com codec de 1,1 kbps e pesos abertos existe com builds quantizados para máquina pessoal [6]; TTS local roda dezenas de vezes acima do tempo real em CPU comum [15]; voz personalizada já treina e infere no aparelho [14] |
| o_que_falta | Modelo full-duplex que caiba em telefone com qualidade aceitável — a marca de 200 ms do Moshi é em GPU de servidor [6], e o omni de pesos abertos comparável é de escala 30B [5]; qualidade em português; consumo de bateria; e convenção de turno |
| evidencias | Moshi/Mimi [6], Qwen3-Omni [5], comparativo on-device TTS [15], Personal Voice [14] |
| veredito | **Aceita** como raiz emergente, restrita ao diálogo full-duplex. **Rejeitadas como maduras** — e portanto fora da raiz — a transcrição local, a síntese local e a clonagem de voz |

**Limiar de ruptura:** um produto sem equipe de voz e sem contrato de nuvem consegue oferecer diálogo falado com interrupção natural. Se o local continuar sendo o modo degradado que aciona a nuvem ao primeiro pedido complexo, é redundância, não mudança de regime.

**Relação entre as raízes.** R1 e R2 competem: R1 quer a saída como documento editável e exportável; R2 quer a saída como objeto de plataforma não exportável. As duas podem coexistir em produtos distintos — e, se coexistirem, a divisão não será técnica, será jurídica. R3 é independente das outras duas; sua falha não afeta o ramo musical, e vice-versa.

## 5. A roda dos futuros

Todos os efeitos são **proposições condicionais**, não fatos. `sinal` é a força do indício que sustenta o efeito: `forte` exigiria observação direta consistente; `medio`, evidência parcial ou mecanismo próximo; `fraco`, indício inicial ou consequência institucional ainda não observada. `confianca` é o julgamento sobre o efeito neste recorte e prazo. **Nenhum efeito recebeu sinal forte**, e nenhuma consequência institucional recebeu confiança acima de baixa.

```yaml
roda:
  - disrupcao: R1 — Geração multi-faixa nativa (saída como projeto, não como render)
    efeitos:
      - id: e1
        ordem: 1
        efeito: A saída generativa passa a ser tratada como projeto com camadas, e as ferramentas de edição assumem material gerado como ponto de partida.
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O trabalho valorizado desloca-se de gerar para revisar, e surgem produtos cuja proposta é editar material já gerado.
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Contratos de trilha passam a exigir entrega em faixas separadas, porque o comprador precisa trocar uma camada sem regerar a peça.
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Com cada camada gerada separadamente, a disputa de direito desloca-se de "a música é derivada?" para "esta camada é derivada?".
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: O licenciamento passa a ser precificado por camada, tornando viável licenciar apenas o timbre de um instrumentista.
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O custo de produzir música funcional sob medida cai a quase zero para quem nunca contratou trilha, ampliando o mercado por baixo antes de substituir o de cima.
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: A biblioteca de produção deixa de vender catálogo e passa a vender curadoria, liberação de direitos e responsabilidade jurídica.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Em audiovisual de baixo orçamento o crédito de composição deixa de existir como função contratada, e a verificação musical migra para o departamento jurídico.
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: R2 — Geração licenciada com proveniência por saída (saída como objeto de plataforma)
    efeitos:
      - id: e3
        ordem: 1
        efeito: A saída generativa deixa de ser arquivo que se possui e passa a ser objeto de plataforma — tocável e compartilhável, não exportável.
        sinal: medio
        prazo: 2027
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Quem precisa do arquivo migra para pesos abertos, e o campo se parte em duas ecologias — uma licenciada e não exportável, outra exportável e sem liberação de direitos.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Distribuidoras passam a exigir prova de proveniência no upload, e a ausência de proveniência — não a presença de IA — torna-se o motivo de recusa.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: A compensação por geração cria um dado novo — a medida de semelhança entre a saída e o catálogo de treino — calculada pela própria plataforma.
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Essa medida vira objeto de disputa técnica e judicial, porque quem a calcula é parte interessada no valor que ela determina.
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: "O rótulo de origem migra do arquivo para o perfil: passa-se a identificar o artista como sintético, não a faixa como gerada."
        sinal: medio
        prazo: 2027
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: A persona sintética torna-se categoria administrável de catálogo, com contrato e política de recomendação próprios, em vez de anomalia a remover.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: O público passa a escolher por origem declarada como escolhe por gênero, e "feito por pessoa" torna-se atributo de mercado com preço próprio.
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: R3 — Fala conversacional full-duplex local
    efeitos:
      - id: e5
        ordem: 1
        efeito: Falar com o sistema deixa de implicar enviar a própria voz a um servidor, e o custo por minuto sai da conta do produto.
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A voz passa a ser usada onde a nuvem era inadmissível — prontuário, sala de aula, chão de fábrica, atendimento presencial — porque o áudio não sai do aparelho.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A transcrição local torna-se o registro padrão desses contextos, e a discussão desloca-se de quem guarda o áudio para quem tem direito de não ser transcrito.
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Quem projeta passa a desenhar dois regimes de voz no mesmo produto — local, barato e limitado; remoto, caro e capaz — com regra explícita de quando cada um entra.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: A degradação graciosa da voz — o que o produto faz quando só o modelo local está disponível — entra em requisito de acessibilidade e de compra pública.
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: Como a fala local dispensa chave de API, a barreira para pôr voz num produto deixa de ser comercial e passa a ser de projeto.
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Multiplicam-se interfaces de voz em produtos sem equipe de voz, e o erro dominante deixa de ser o reconhecimento e passa a ser o turno — quando o sistema fala, cala e interrompe.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Estabiliza-se um repertório de convenções de turno comparável ao do botão e do rolamento, e sua ausência passa a ser lida como defeito de projeto, não como limite da tecnologia.
                sinal: fraco
                prazo: 2033
                confianca: baixa
```

**O que a estrutura não captura bem.** Três coisas.

Primeira: **a roda separa o que a evidência mostra junto.** R1 e R2 estão em ramos distintos, mas o mesmo acordo que promete modelos licenciados (R2) é o que limita o download [13] — isto é, a condição de possibilidade de R1 para o usuário final está no ramo de R2. Uma árvore não representa aresta entre ramos; a prosa precisa dizer que **e3 pode cancelar e1** dentro das plataformas licenciadas, enquanto e1 sobrevive em pesos abertos.

Segunda: **a ordem causal não é ordem temporal, e aqui isso é extremo.** `e3` é de 1ª ordem com prazo 2027 porque já foi anunciado [13]; `e1.1.1` é de 3ª ordem com prazo 2032. Mas `e4.1.1` — o público escolhendo por origem declarada — é de 3ª ordem e tem prazo 2031, antes de efeitos de 2ª ordem do ramo de R1. Distância causal e data não se acompanham.

Terceira: **efeitos com sinal médio e confiança média convivem com terceiras ordens de confiança baixa na mesma sequência, e a roda não propaga incerteza.** Uma cadeia `medio → medio → fraco` parece mais firme que é: o elo final herda a fragilidade de todos os anteriores e adiciona a sua. Leia toda 3ª ordem deste mapa como hipótese a testar, não como consequência esperada.

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — a fragilidade da marca d'água é assimétrica por domínio.** Marcas em magnitude e domínio-portador caíram a ataque estrutural sem treinamento preservando PESQ ≥ 3,6; marcas em domínio latente resistiram [4]. O indício pequeno é o "resistiram": se a proveniência robusta exigir estar dentro do codec, ela deixa de ser algo que se aplica ao arquivo depois e passa a ser algo que se escolhe no momento de gerar — o que dá ao fabricante do modelo, não ao detentor de direito, a chave da atribuição.

**Sinal fraco 2 — a exceção artística do AI Act.** O Artigo 50(4) dispensa de divulgação a obra "artística, criativa ou satírica" [10]. O sinal é que **a música gerada pode ficar de fora da obrigação que a chamada telefônica não escapa** — e a rotulagem da música passa a depender de política de plataforma [7][9], não de lei. Um regime de proveniência que se sustenta em termos de serviço muda quando o termo de serviço muda.

**Sinal fraco 3 — "dezenas de milhares de créditos de IA submetidos diariamente" [9].** Não é o volume que interessa; é o fato de existir uma declaração voluntária que alguém se dá o trabalho de preencher. Se declarar passar a dar vantagem de distribuição, a etiqueta deixa de ser confissão e vira credencial.

**Sinal fraco 4 — a régua local de acesso.** 61% das classes D e E com celular usam plano pré-pago com limitação de dados [17]. O sinal é que a demanda por modelo local mais forte está onde o aparelho para rodá-lo é menos provável — e quem projetar voz local para "privacidade" pode descobrir que o argumento vendedor é **custo de dados**.

**O que NÃO é sinal fraco, contra o enunciado do tema.** (a) "Não entrega os canais separados" — deixou de valer em 06/2026 [1]. (b) "Artista sintético liderar uma parada" — ocorreu em parte em 09/2025: primeira canção de IA a entrar em parada de execução radiofônica da Billboard, com contrato de US$ 3 milhões [20]. Produto líder de mercado e fato consumado não são sinais fracos; são estado atual.

### Wildcard

**Uma decisão judicial declara que a saída de modelo treinado sem licença é obra derivada, e a decisão vale retroativamente sobre o material já distribuído.** Baixa probabilidade: os dois maiores litígios foram encerrados por acordo comercial [12][13], o que reduz a chance de precedente. Alto impacto: como 97% dos ouvintes não distinguem origem [8] e a marca d'água é removível [4], **não existe hoje forma confiável de identificar retroativamente qual faixa distribuída veio de qual modelo**. O efeito não seria remoção de catálogo; seria a inversão do ônus — quem distribui passaria a precisar provar procedência humana.

**O que isso quebra no mapa:** e3.1 (as duas ecologias) colapsa numa só, porque o caminho de pesos abertos exportáveis perde viabilidade comercial, não técnica; e1 e e1.2 ganham força, porque a proveniência por camada deixa de ser refinamento e passa a ser requisito de defesa; e e4.1.1 inverte de atributo de mercado para exigência de conformidade. O ramo de R3 fica intacto — é a evidência de que R3 é independente, não um apêndice.

## 7. Contra o próprio mapa

**1. Qual efeito é apenas extrapolação linear do presente?**
`e2` — a queda a quase zero do custo de música funcional. É a continuação direta de 90 mil faixas por dia [7] e da projeção de 60% da receita de bibliotecas [11]. Mantive-o porque a formulação foi **corrigida durante a análise**: a versão original dizia "o mercado de trilha para jogo, vídeo e publicidade encolhe", extrapolação de substituição. A versão mantida diz **ampliação por baixo antes de substituição por cima** — que é o que a evidência sustenta, já que a Deezer mede 1 a 3% das execuções [7], não das encomendas.

**2. Qual efeito assume adoção rápida demais?**
`e6.1` — a multiplicação de interfaces de voz. O caso histórico comparável é a própria caixa inteligente: 39% de posse nos EUA em 2026 depois de quatro anos de platô, com o maior ganho anual desde 2021 [19]. Disponibilidade barata de capacidade de voz não produziu adoção de interface por voz na década passada; supor que produzirá agora porque o modelo é local é fé, não inferência. **Rebaixei `e6.1` de confiança alta para média e seu efeito de 3ª ordem para sinal fraco**, e empurrei `e6.1.1` para 2033, fora do horizonte do mapa — declaradamente, para que o leitor veja que ele não cabe em 2031.

**3. Qual disrupção-raiz pode simplesmente não acontecer?**
**R1.** A hipótese embutida é que falta editabilidade ao usuário. Não há evidência disso neste levantamento. O que há é evidência do contrário: 97% não distinguem origem [8] e o volume de uploads é massivo [7] — perfil de uso em que o material gerado é **consumido como produto final**, não usado como insumo. A separação de stems pode ser o que é hoje: recurso de plano caro para uma minoria profissional [1], nunca a forma padrão da saída.

**4. O que quebra na roda se essa disrupção falhar?**
Cai o ramo inteiro de `e1` (quatro efeitos). `e2` sobrevive, pois não depende de editabilidade — música funcional barata funciona como render. `e1.2` e `e1.2.1` cairiam com consequência adicional: sem camadas, a atribuição de direito continua sendo sobre a peça inteira, o que **fortalece** R2, porque a única proveniência possível volta a ser a da plataforma. R1 falhar não é neutro: transfere poder para o ramo de R2.

**5. Que contrassinais existem?**
Quatro, todos de fonte lida. (a) Música gerada é 1 a 3% das execuções na Deezer, e até 85% das execuções de faixas totalmente geradas foram identificadas como fraudulentas em 2025 [7] — parte do volume não é consumo, é fraude de royalty. (b) Posse de caixa inteligente em 39% após platô de quatro anos [19]. (c) A latência competitiva do Moshi é em GPU L4 [6] e o omni de pesos abertos comparável é de escala 30B [5] — o "local" dos dois casos não é um telefone. (d) O comparativo de TTS local que mostra números favoráveis ao on-device é do fornecedor que lidera o próprio comparativo [15].

**6. Que barreiras foram subestimadas?**
**Econômica:** R2 depende de o usuário aceitar não possuir o arquivo; nada no material lido mede essa disposição. **Regulatória:** a exceção artística do Artigo 50(4) [10] pode deixar a música fora da obrigação de divulgação, removendo o motor legal de e3.1.1. **Infraestrutural e de acesso:** bateria e memória de telefone para full-duplex, e a distribuição de aparelhos no Brasil [17]. **De medida:** a proveniência que sustenta R2 repousa em marca d'água removível a baixo custo [4] — barreira técnica que trata a raiz como resolvida quando não está.

**7. Que ator teria incentivo para bloquear, capturar ou redirecionar a mudança?**
**Detentores de catálogo** têm incentivo para capturar R2, não para bloqueá-la: o jardim murado [12] e o teto de download [13] convertem litígio em controle de plataforma. **Plataformas de streaming** têm incentivo para redirecionar a rotulagem do arquivo para o perfil [9], porque etiquetar perfis acima de limiares de audiência é muito mais barato que auditar 90 mil faixas diárias [7]. **Fabricantes de sistema operacional** têm incentivo para capturar R3, porque voz local roda em API deles [14] — o que troca a dependência de nuvem por dependência de plataforma, sem eliminar dependência. **Fornecedores de voz por nuvem** são os únicos com incentivo para bloquear R3, e têm receita para financiá-lo [18].

**8. Qual viés do pesquisador e do modelo entrou na seleção?**
Três, declarados. (a) **Viés de ferramenta disponível:** quase toda evidência de música gerada vem de duas plataformas e de uma plataforma de streaming que se posiciona publicamente como a que detecta e rotula [7][8] — a narrativa "há muita IA e nós a identificamos" serve ao negócio dela. (b) **Viés de ruptura:** a skill pede disrupções, e isso pressiona a promover capacidade emergente a raiz. A contrapartida aplicada foi rebaixar explicitamente transcrição local, síntese local, clonagem de voz e agente de voz por nuvem a antecedentes maduros — quatro candidatos com aparência futurista descartados por maturidade. (c) **Viés de anglofonia:** a base técnica lida é em inglês e os números de desempenho em fala são em inglês; **não encontrei, neste levantamento, taxa de erro por palavra em português para os modelos locais citados** — lacuna que afeta diretamente a nota sobre o Brasil e que declaro em vez de preencher por analogia.

**O que foi cortado de vez.** A cadeia "voz vira interface primária → a tela perde centralidade → o teclado deixa de ser o padrão de entrada" foi **removida da roda**. O mecanismo não se completa: mesmo com fala local perfeita, o teste "se A acontecer, B fica mais provável porque ______" fica sem preenchimento diante do platô de adoção [19] e do fato de que voz é entrada ruim para tarefas que exigem revisão, precisão e sigilo em público. Mantive na roda apenas a versão que o mecanismo sustenta: **dois regimes de voz coexistindo dentro do mesmo produto** (`e5.2`), não a substituição.

## 8. O que a máquina errou

Erros efetivamente detectados nesta rodada, com a correção aplicada.

**1. Tomei o enunciado do tema como estado atual.** O briefing afirma que a música gerada "não entrega os canais separados" e trata isso como o sinal revelador. Parti disso. A verificação mostrou que a Suno publicou Advanced Split em 11/06/2026, com separação por regeneração em quase cem instrumentos [1], além de exportação de 12 stems alinhados [2]. **Correção:** o sinal foi reformulado — o que não existe não é a separação, é a **geração nativa em faixas**, que segue experimental [3]. Sem essa verificação, a disrupção central do mapa estaria descrita como ausente uma capacidade que já se vende.

**2. Tratei um wildcard como futuro quando ele já é passado.** O briefing propõe como wildcard "um artista sintético liderar uma parada de sucesso". Iniciei a análise com ele. Verificação: Xania Monet entrou em parada de execução radiofônica da Billboard e assinou contrato de US$ 3 milhões em 09/2025 [20]. **Correção:** movido de wildcard para estado atual, e um wildcard novo foi construído (decisão judicial retroativa sobre obra derivada). A fonte é Wikipédia — enciclopédia com curadoria aberta, adequada para datas e posições de parada, insuficiente para leitura de mercado; não extraí dela nenhuma inferência além dos fatos citados.

**3. Ia atribuir latência de servidor a um dispositivo pessoal.** Registrei inicialmente "Moshi roda com 200 ms no dispositivo". A leitura da fonte mostra que os 200 ms práticos são **em GPU L4**, e que 160 ms é a latência **teórica** de arquitetura [6]. **Correção:** a distinção está explícita na seção 3.2 e é o principal "o que falta" de R3. Este era o erro com maior potencial de contaminar o mapa: teria transformado uma raiz emergente em capacidade disponível.

**4. Usei número que não consegui verificar em fonte primária.** As cifras do relatório de crimes na internet do FBI (US$ 893.346.472; 22.364 reclamações) vêm de veículo secundário [21]: fbi.gov devolveu HTTP 403 e o PDF do IC3 não produziu texto extraível. **Correção:** a limitação está declarada no corpo, e o argumento sobre confiança na voz **não repousa** nesse número — repousa na fragilidade demonstrada da marca d'água [4] e na indistinguibilidade medida em teste cego [8].

**5. Citei fonte que não abriu.** Tentei usar a documentação do framework Speech da Apple para sustentar a afirmação sobre SpeechAnalyzer. A página retornou só o título, sem corpo. **Correção:** a fonte foi descartada e a afirmação sobre fala local na Apple foi reancorada na página de pesquisa da própria empresa sobre Personal Voice [14], que traz método e números. O SpeechAnalyzer permanece nomeado no mapa sem alegação de desempenho atribuída a ele.

**6. Não notei de imediato o conflito de interesse do comparativo de TTS.** O comparativo on-device usado é publicado pelo fornecedor cujo motor aparece em primeiro lugar [15]. **Correção:** o dado é usado apenas para a alegação estrutural de que TTS local roda muito acima do tempo real em CPU comum — sustentada também pelos concorrentes na mesma tabela — e nunca para ordenar qualidade entre motores.

**7. Deixei escapar dado de busca como se fosse lido.** Em rascunho intermediário constavam a afirmação de 10 milhões de conversas semanais em agentes de voz e preços por minuto de API de voz em tempo real. Nenhum dos dois aparece nas fontes que efetivamente abri — o blog da empresa traz ARR, não conversas [18]. **Correção:** ambos removidos do corpo e registrados como não verificados na seção 12.

## 9. Três cenários para 2031

Os três diferem em **mecanismo, ator dominante e condição** — não em grau de otimismo sobre a mesma previsão.

### Provável — "a saída não é sua, e quase ninguém reclamou"

*Escrito como se 2031 já tivesse chegado.* O jardim murado venceu por conveniência, não por decisão. As plataformas licenciadas entregam qualidade melhor e liberação de direitos embutida, e a maioria dos usuários nunca quis o arquivo: queria a faixa tocando. Os pesos abertos exportáveis continuam existindo, e é onde está a produção profissional que precisa editar — um nicho menor e mais técnico do que se supôs em 2026. A rotulagem se consolidou no perfil, não na faixa: identifica-se o artista sintético, e a peça isolada circula sem etiqueta, amparada na exceção artística. Música funcional sob medida virou utilitário, e a biblioteca de produção que sobreviveu vende garantia jurídica. Do lado da fala, os dois regimes convivem: todo produto tem voz local para o básico e nuvem para o resto, e a decisão de qual usar é de arquitetura, não de experiência. Ninguém chama isso de ruptura; chamam de como as coisas são.

**Atores dominantes:** detentores de catálogo e plataformas de streaming. **Mecanismo:** captura do litígio por acordo comercial. **Por que é o provável:** é a continuação direta do que foi anunciado em 2025 [12][13] e da rotulagem já em curso [7][9].

### Desejável — "proveniência por camada, e a etiqueta virou credencial"

O que teve de ser construído, e não estava dado em 2026: **primeiro**, marca d'água em domínio latente como padrão de fato, porque foi a única família que resistiu a remoção barata [4] — o que exigiu que a proveniência fosse decidida no momento de gerar, não aplicada depois; **segundo**, formato de intercâmbio de faixas geradas que nenhum fornecedor controlasse sozinho, sem o qual "editável" significaria "editável no plano premium de quem gerou" [1]; **terceiro**, que declarar origem passasse a dar vantagem de distribuição, transformando a etiqueta de confissão em credencial. Com os três, a atribuição de direito passou a operar por camada: licencia-se o timbre de um instrumentista sem licenciar a obra, e paga-se quem foi efetivamente usado. Na fala, a exigência de degradação graciosa entrou em compra pública, e o produto que só funciona com nuvem paga deixou de passar em licitação — o que, no Brasil, foi o que tornou voz viável onde o plano é pré-paid e limitado [17].

**Atores dominantes:** órgãos de padronização e compradores públicos. **Mecanismo:** interoperabilidade imposta por requisito de compra, não por consenso de mercado. **Condição frágil:** os três requisitos são independentes e nenhum tem hoje quem o financie.

### Indesejável — "a voz deixou de ser prova, e o áudio deixou de ser evidência"

A proveniência foi obrigatória e removível ao mesmo tempo. A obrigação de marcar entrou em vigor [10]; a marca continuou caindo a ataque de baixo custo com qualidade preservada [4]. O resultado não foi um mundo de falsificações — foi um mundo em que **nenhum áudio prova nada**. A chamada telefônica deixou de ser meio de confirmação, o áudio de mensageria perdeu valor de compromisso, e a verificação voltou a exigir presença ou canal separado — com o custo recaindo sobre quem tem menos alternativas. O padrão de golpe já documentado em 2026 — ligação silenciosa para coletar amostra, áudio de aplicativo pedindo transferência [22] — deixou de ser golpe e passou a ser condição de fundo: a suspeita generalizada tornou-se o comportamento racional. A quem não pode falar, e usa voz sintetizada legitimamente [14], a desconfiança se estendeu por igual.

**Ator dominante:** ninguém — é o cenário do vácuo de responsabilidade. **Mecanismo:** obrigação legal de marcar sem requisito de robustez da marca. **Sinal precoce que o teria antecipado:** a assimetria por domínio de marca d'água publicada em 08/2026 [4]. Estava disponível, e mostrava que a marca exigida pela regra não é a marca que resiste.

## 10. O experimento

### A faixa que se desmonta

**O que é.** Uma bancada com doze participantes — seis que trabalham com som para mídia, seis que não — e um briefing único: entregar uma peça de 30 segundos que atenda a três exigências de cliente, sendo a terceira revelada só depois da primeira entrega ("troque o instrumento de base, mantenha tudo o mais"). Duas condições, atribuídas cruzadamente:

- **A — render:** o participante recebe a mixagem gerada, já pronta e de boa qualidade, sem faixas separadas.
- **B — camadas:** o participante recebe o mesmo material gerado, entregue como faixas sincronizadas separadas, mais o simbólico extraível.

**Pergunta de futuro que testa.** R1 supõe que o que falta ao material gerado é **editabilidade**, não qualidade. A bancada testa isso diretamente: a entrega em camadas muda o que a pessoa consegue fazer, ou só muda como ela se sente ao fazê-lo?

**Tecnologia emergente usada.** Separação de stems por regeneração e extração simbólica de material gerado [1][2]; quando disponível, geração multi-faixa nativa em passagem única [3] como terceira condição exploratória.

**Por que uma solução madura não responde.** Uma biblioteca de trilha com stems já resolve o caso e sempre resolveu — mas não responde à pergunta, porque nela o material foi **composto** para ser editável. A pergunta é sobre material **gerado**: se a camada regenerada carrega artefato, vazamento de timbre ou incoerência de arranjo suficiente para que editá-la custe mais que regerar a peça inteira, então R1 é conveniência, não ruptura. Só material gerado responde isso.

**O que os participantes farão.** Receber o briefing, produzir a entrega, receber a revisão surpresa e produzir a segunda entrega. Sem instrução de método: quem quiser abrir uma DAW abre, quem quiser voltar ao gerador e pedir de novo, volta.

**Métricas e observações.**
1. **Caminho escolhido na revisão** — editar a camada ou regerar a peça. É a medida central: na condição B, se a maioria regerar em vez de editar, a hipótese de R1 está contrariada pelos próprios usuários que teriam mais a ganhar com ela.
2. **Rodadas até a entrega aceita**, por condição e por perfil.
3. **Tempo até a primeira entrega** e tempo até a segunda — a expectativa é que B seja mais lento na primeira e mais rápido na segunda; se for mais lento nas duas, a camada está atrapalhando.
4. **Avaliação cega de terceiros** sobre as entregas finais, sem saber a condição — para separar "ficou melhor" de "deu mais controle".
5. **O que os seis participantes sem experiência em som fazem com as camadas** — é onde se observa se editabilidade amplia quem pode produzir ou apenas equipa quem já podia.

**Hipótese falsificável.** *Na condição B, a maioria dos participantes resolverá a revisão surpressa editando a camada, e não regerando a peça.*

**Qual resultado me faria mudar de ideia.** Se, na condição B, a maioria regerar em vez de editar — ou se a avaliação cega não distinguir as entregas de A e B —, **rebaixo R1 de disrupção-raiz a tecnologia habilitadora** e corto o ramo `e1` da roda, mantendo `e2`. Isso é coerente com o critério declarado na entrevista: se a capacidade só melhora o que já existe, ela não é raiz. No sentido oposto, se os participantes sem experiência entregarem peças aceitas na condição B e não na A, R1 sobe de experimental para emergente e seu efeito sobre "quem pode produzir" ganha confiança média.

**Por que este e não outro.** É o experimento cujo resultado mais muda o mapa: R1 é a única raiz que pode ser derrubada por observação direta em semanas, e sua queda transfere poder para o ramo de R2 (§7.4). R2 não é testável em bancada — depende de plataformas ainda não lançadas. R3 é testável, mas o que se mediria hoje é engenharia (latência, bateria), não futuro. A bancada de turno de voz, considerada e preterida, está registrada na seção 12.

## 11. Fontes

Somente fontes efetivamente abertas e lidas nesta rodada. Onde a leitura falhou, isso está dito na seção 8 e a fonte não aparece aqui.

1. **Suno — nota de lançamento "Stem Separation improvements"**, 11/06/2026. https://suno.com/release-notes/advanced-stems — Sustenta que existe separação por **regeneração** de quase cem instrumentos, exclusiva do plano Premier, e que há três modos (Advanced Split, Split from Mix, Auto Split de 12 categorias). *Confiabilidade: alta para o que a empresa oferece; nula como avaliação independente de qualidade — é comunicação de produto do próprio fornecedor.*
2. **Suno — página de produto "Vocal and Instrumental Splitter"**, sem data. https://suno.com/l/vocal-and-instrumental-splitter — Sustenta a exportação de até 12 stems WAV alinhados no tempo para uso em DAW. *Confiabilidade: média; página comercial sem data, útil só para descrever a oferta.*
3. **Stemphonic: All-at-once Flexible Multi-stem Music Generation**, arXiv 2602.09891, 10/02/2026. https://arxiv.org/abs/2602.09891 — Sustenta que a geração de conjunto **variável** de stems sincronizados em passagem única é objeto de pesquisa ativa, contra abordagens de conjunto fixo ou sequenciais. *Confiabilidade: média-alta para a existência da capacidade em pesquisa; é preprint, sem revisão por pares confirmada.*
4. **How Fragile Is Your Watermark? Training-Free Structural Removal of Neural Audio Watermarks**, arXiv 2608.16566, 17/08/2026. https://arxiv.org/abs/2608.16566 — Sustenta que WavMark, SilentCipher, audiowmark e o sinalizador do AudioSeal foram removidos com PESQ ≥ 3,6, enquanto VoiceMark, WMCodec, AlignMark e AWARE resistiram; e 84% de acerto em identificar o esquema presente. *Confiabilidade: média-alta; preprint, mas com resultado negativo e verificável, tipo de achado que fontes interessadas não publicariam.*
5. **Qwen3-Omni Technical Report**, arXiv 2509.17765, 22/09/2025. https://arxiv.org/abs/2509.17765 — Sustenta latência teórica de primeiro pacote de 234 ms em partida a frio e cobertura de 119/19/10 idiomas. *Confiabilidade: média; relatório técnico dos próprios autores do modelo, com benchmarks autorreportados.*
6. **kyutai-labs/moshi**, repositório oficial. https://github.com/kyutai-labs/moshi — Sustenta latência teórica de 160 ms (80 ms de quadro Mimi + 80 ms acústico), prática de até 200 ms **em GPU L4**, codec Mimi a 12,5 Hz e 1,1 kbps, pesos em CC-BY 4.0 e builds MLX int4/int8/bf16. *Confiabilidade: alta para especificação e licença, por ser a fonte canônica; os números são do desenvolvedor.*
7. **Deezer Newsroom — "AI Music Tops 50% of Daily Uploads on Deezer"**, 21/07/2026. https://newsroom-deezer.com/2026/07/ai-music-exceeds-50-percent-daily-uploads-deezer/ — Sustenta ~90 mil faixas totalmente geradas por dia, mais de 50% dos uploads diários no pico de 06/2026, 1 a 3% das execuções totais, até 85% das execuções dessas faixas identificadas como fraudulentas em 2025, e a política de etiquetagem e exclusão de recomendação. *Confiabilidade: média; é a única medida pública desse tipo, mas vem de plataforma que se posiciona comercialmente como a que detecta — sem triangulação possível neste levantamento.*
8. **Deezer Newsroom — pesquisa Deezer/Ipsos**, 12/11/2025. https://newsroom-deezer.com/2025/11/deezer-ipsos-survey-ai-music/ — Sustenta 9.000 respondentes em oito países (inclusive Brasil), coleta de 6 a 10/10/2025, teste cego com três faixas, 97% de falha na identificação, 80% a favor de rótulo e 52% de desconforto. *Confiabilidade: média-alta; encomendada por parte interessada, mas com desenho, amostra e datas declarados e executada por instituto independente.*
9. **Spotify Newsroom — "Introducing a New Label for AI-Generated Artist Identities"**, 11/08/2026. https://newsroom.spotify.com/2026-08-11/ai-persona-badges-transparency/ — Sustenta o selo "AI Persona" a partir de meados de 09/2026, autodeclaração voluntária mais revisão da plataforma, aplicação a perfis acima de limiares de audiência, e "dezenas de milhares de créditos de IA submetidos diariamente". *Confiabilidade: alta para o que a empresa anuncia; nenhuma para efeito, que ainda não pode ser medido.*
10. **Comissão Europeia — AI Act Service Desk, Artigo 50**. https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50 — Sustenta a obrigação de marcação legível por máquina para áudio sintético (50(2)), a divulgação de deepfake de áudio por quem implanta (50(4)) e as exceções para edição padrão, investigação criminal e obra artística/criativa/satírica. *Confiabilidade: alta; canal oficial da Comissão sobre o texto legal. A página consultada não informou a data de aplicação — não afirmo data aqui.*
11. **CISAC — "Global economic study shows human creators' future at risk from generative AI"**, 04/12/2024. https://www.cisac.org/Newsroom/news-releases/global-economic-study-shows-human-creators-future-risk-generative-ai — Sustenta a projeção de 24% da receita de criadores musicais em risco até 2028, €10 bilhões cumulativos, ~20% da receita de streaming e ~60% da receita de bibliotecas, sob quadro regulatório inalterado; estudo da PMP Strategy. *Confiabilidade: baixa-média como previsão; alta como registro da posição de entidades de arrecadação. É projeção encomendada por parte diretamente interessada no resultado.*
12. **PR Newswire — UMG e Udio, acordos estratégicos**, 29/10/2025. https://www.prnewswire.com/news-releases/universal-music-group-and-udio-announce-udios-first-strategic-agreements-for-new-licensed-ai-music-creation-platform-302599129.html — Sustenta o encerramento do litígio, a plataforma licenciada prevista para 2026 e as criações "controladas dentro de um jardim murado" com impressão digital e filtragem. *Confiabilidade: alta para o que foi anunciado; nenhuma para o que será entregue. É comunicado das próprias partes.*
13. **PR Newswire — Warner Music Group e Suno**, 25/11/2025. https://www.prnewswire.com/news-releases/warner-music-group-and-suno-forge-groundbreaking-partnership-302626017.html — Sustenta o acordo, a chegada de modelos licenciados em 2026 com depreciação dos atuais, faixas do plano gratuito tocáveis e compartilháveis mas não baixáveis, teto mensal de downloads nos planos pagos, e opt-in de artistas sobre nome, imagem, semelhança, voz e composições. *Confiabilidade: alta para o anunciado; comunicado das partes.*
14. **Apple Machine Learning Research — "Advancing Speech Accessibility with Personal Voice"**, 18/12/2023. https://machinelearning.apple.com/research/personal-voice — Sustenta treinamento com 150 frases lidas, treinamento e inferência inteiramente no dispositivo, arquitetura FastSpeech2 modificada com vocoder WaveRNN, MOS 3,68 contra 3,85 do original e similaridade 3,8. *Confiabilidade: média-alta para método e ordem de grandeza; é publicação da própria empresa e tem quase três anos.*
15. **Picovoice — "On-device TTS Comparison: Open-source Benchmark 2026"**, publicado 14/07/2026, atualizado 18/08/2026. https://picovoice.ai/blog/on-device-tts/ — Sustenta que TTS local roda muito acima do tempo real em CPU de desktop (Ryzen 7 5700X, 64 GB): Orca 7 MB a 0,065×, Piper 61 MB a 0,35×, Kokoro 341 MB a 1,28×, com dez motores em ~200 interações simuladas. *Confiabilidade: baixa para ordenação entre motores — o comparativo é do fornecedor do motor que lidera; média-alta para a alegação estrutural, que os concorrentes na mesma tabela também sustentam.*
16. **Câmara dos Deputados — "Segmento de dublagem pede proteção legal contra uso de voz gerada por inteligência artificial"**, 29/08/2024. https://www.camara.leg.br/noticias/1092791-segmento-de-dublagem-pede-protecao-legal-contra-uso-de-voz-gerada-por-inteligencia-artificial/ — Sustenta a existência e o conteúdo da demanda do setor em audiência nas comissões de Cultura e de Trabalho, a referência ao PL 1376/22 e ao PL 2338/23, e a declaração do Ministério da Cultura sobre contratos de adesão com renúncia de direito autoral e transferência de direito de personalidade. *Confiabilidade: alta como registro de audiência pública; nenhuma sobre desfecho legislativo. Fonte de 2024 — não verifiquei a tramitação até 2026.*
17. **Cetic.br — "50 milhões de brasileiros já usam IA…" (TIC Domicílios 2025)**, 09/12/2025. https://cetic.br/pt/noticia/50-milhoes-de-brasileiros-ja-usam-ia-mas-potenciais-beneficios-continuam-limitados-as-camadas-de-maior-renda-e-escolaridade/ — Sustenta ~50 milhões de usuários de IA generativa (32% dos usuários de Internet), 69% na classe A contra 16% nas classes D e E, 59% com superior contra 17% com fundamental, e 61% de plano pré-pago nas classes D e E; coleta de março a agosto de 2025. *Confiabilidade: alta; pesquisa amostral de referência nacional com metodologia pública. Não mede demanda por voz nem por IA de áudio.*
18. **ElevenLabs — "ElevenLabs crosses $500M ARR and welcomes new investors"**, 05/05/2026. https://elevenlabs.io/blog/500m-arr-and-new-investors — Sustenta a declaração de US$ 350 milhões de ARR no fim de 2025 e mais de US$ 500 milhões em quatro meses de 2026, com clientes nomeados. *Confiabilidade: baixa-média; autorrelato de empresa em anúncio de captação, sem auditoria. Usado aqui apenas para classificar o agente de voz por nuvem como mercado estabelecido, não como medida de capacidade.*
19. **SSRS / Edison Research — "The Power of Audio 2026"**. https://ssrs.com/news/the-power-of-audio-2026/ — Sustenta posse de caixa inteligente em 39% no Infinite Dial 2026, "maior ganho desde 2021", alta de 4 pontos em um ano, e podcast em 40% de participação no áudio falado. *Confiabilidade: média-alta para a série histórica, que é referência do setor; a página não detalha amostra nem metodologia, e o PDF da apresentação não produziu texto extraível.*
20. **Wikipédia — Xania Monet**. https://en.wikipedia.org/wiki/Xania_Monet — Sustenta que o projeto é de Telisha "Nikki" Jones, com letras próprias e música gerada pela Suno; posições em paradas da Billboard (nº 30 em Adult R&B Airplay, nº 20 em Hot R&B Songs, nº 1 em R&B Digital Song Sales); primeira canção de IA a entrar em parada de execução radiofônica da Billboard; contrato de US$ 3 milhões com a Hallwood Media em 09/2025. *Confiabilidade: média; enciclopédia de curadoria aberta, aceitável para datas e posições de parada verificáveis, insuficiente para qualquer inferência de mercado — e usada aqui só para os fatos citados.*
21. **Malwarebytes — "Americans lost nearly $900 million to AI-powered scams, FBI says"**, 08/06/2026. https://www.malwarebytes.com/blog/scams/2026/06/americans-lost-nearly-900-million-to-ai-powered-scams-fbi-says — Sustenta, atribuindo ao relatório de 2025 do FBI, US$ 893.346.472 em perdas e 22.364 reclamações referenciando IA, com clonagem de voz entre os vetores, e registra que são apenas perdas reportadas. *Confiabilidade: baixa-média; secundária. **A primária não foi lida** (fbi.gov: HTTP 403; PDF do IC3 sem texto extraível). Nenhuma conclusão deste mapa depende deste número.*
22. **Canaltech — "Golpe de voz clonada via WhatsApp já é realidade, alerta especialista em IA"**, 20/03/2026. https://canaltech.com.br/seguranca/golpe-de-voz-clonada-via-whatsapp-ja-e-realidade-alerta-especialista-em-ia/ — Sustenta o padrão operacional no Brasil: ligação silenciosa para coletar amostra ("quanto mais você responder aquela ligação e continuar falando, mais perfeita ficará a clonagem") seguida de áudio de aplicativo pedindo transferência. *Confiabilidade: baixa-média; imprensa especializada com fonte única de fornecedor de segurança, e sem número verificável — a matéria **não** traz os dados de Mastercard ou Febraban que apareceram em resultados de busca. Sustenta a existência do padrão, não sua frequência.*

## 12. Anexo — o levantamento bruto

### 12.1 Candidatos avaliados e rejeitados

| Candidato | Maturidade | Ruptura | Veredito e motivo |
|---|---|---|---|
| Geração de peça musical inteira a partir de descrição | **maduro** | alto (já realizado) | **Rejeitado como raiz.** Comercialmente repetível em múltiplas plataformas, com 90 mil faixas/dia numa única DSP [7] e 97% de indistinguibilidade [8]. Vira **antecedente maduro** e é excluído pela régua da disciplina. Foi o candidato mais tentador: parece o tema, e não é raiz. |
| Clonagem de voz a partir de poucos segundos | **maduro** | alto (já realizado) | **Rejeitado como raiz.** Produto de massa; opera como antecedente das consequências de confiança [22]. |
| Transcrição local (Whisper e sucessores) | **maduro** | médio | **Rejeitado.** Repetível, com ecossistema; problemas são de engenharia, não de incerteza fundamental. Antecedente de R3. |
| Síntese de fala local (Piper, Kokoro, Orca) | **maduro** | médio | **Rejeitado.** Dezenas de megabytes, muito acima do tempo real em CPU comum [15]. Antecedente de R3. |
| Agente de voz conversacional por nuvem | **maduro** | alto (já realizado) | **Rejeitado.** Mercado da ordem de centenas de milhões de ARR [18]. Antecedente e, para R3, o ator com incentivo de bloqueio. |
| Voz personalizada para quem perde a fala (voice banking) | **maduro** | médio | **Rejeitado como raiz**, mantido como habilitadora de acessibilidade e como a população mais exposta ao cenário indesejável [14]. |
| Marcação e proveniência legível por máquina | emergente | médio | **Rebaixado a sinal + habilitadora.** Falha no "por que agora" por robustez: a marca exigida é removível a baixo custo [4]. Alimenta R2, não é raiz. |
| Detecção de música gerada em escala na distribuição | emergente | médio | **Rebaixado a sinal.** Muda recomendação e monetização [7], não a forma de interação nem quem pode produzir. |
| Modelo omni de pesos abertos como interface universal de áudio | emergente | alto | **Absorvido em R3.** Sozinho não é raiz: o exemplar lido é de escala 30B [5], dimensão de estação de trabalho — a raiz é o *full-duplex local*, não o omni. |
| Separação de stems por regeneração como produto | **maduro** (um fornecedor) | médio | **Rejeitado como raiz**, mantido como o antecedente que R1 precisa superar [1][2]. Recurso de plano premium de um fornecedor não é mudança estrutural. |
| Artista/persona sintética como categoria de catálogo | emergente | médio | **Rebaixado a efeito** (`e4.1`), não raiz. Já tem selo de plataforma [9] e caso consumado [20]. |

### 12.2 Caminhos causais cortados

1. **voz local → tela perde centralidade → teclado deixa de ser padrão de entrada.** Cortado no teste de mecanismo (§7). Contrassinal: platô e 39% de posse de caixa inteligente [19].
2. **música gerada barata → mercado de trilha encolhe → compositor de trilha desaparece.** Cortado por extrapolação de substituição. Reescrito como ampliação por baixo (`e2`), coerente com 1 a 3% das execuções [7]. O desaparecimento do **crédito** em audiovisual de baixo orçamento sobreviveu (`e2.1.1`), com sinal fraco.
3. **música gerada domina as paradas de sucesso.** Cortado. O caso lido chega a nº 30 em execução radiofônica e nº 20 em Hot R&B [20]; a projeção de receita mais agressiva é de parte interessada e condicionada [11]. Presença em parada não é domínio de parada.
4. **fala sintética indistinguível → autenticação por voz é abandonada pelos bancos.** Cortado por falta de evidência lida: não abri nenhuma fonte sobre política de autenticação por voz de instituição financeira. A consequência de confiança permaneceu no cenário indesejável, sem efeito correspondente na roda.
5. **rótulo obrigatório → ouvinte evita música gerada.** Cortado: 80% dizem querer rótulo [8], e nada nas fontes lidas liga rótulo a mudança de comportamento de escuta. Sobreviveu na forma mais fraca e declaradamente especulativa (`e4.1.1`, sinal fraco, confiança baixa).
6. **modelo local → fim da dependência de plataforma.** Cortado: voz local roda em API de fabricante de sistema operacional [14]; troca-se dependência de nuvem por dependência de plataforma. Registrado em §7.7 como incentivo de captura.

### 12.3 Buscas sem resultado utilizável, e lacunas declaradas

- **Taxa de erro por palavra em português** para os modelos de fala locais citados: busca feita, resultados trazendo apenas números em inglês (LibriSpeech, Open ASR Leaderboard). **Lacuna que afeta diretamente a nota sobre o Brasil.** Não inferi por analogia.
- **Retenção ou uso repetido de agente de voz local** em produto real: não encontrado. Nenhuma medida de adoção de R3 existe neste levantamento — a confiança de `e5` e `e6` reflete isso.
- **Disposição do usuário a aceitar saída não exportável:** não encontrada. É a incerteza central de R2 e não há dado sobre ela.
- **Fonte primária do FBI (IC3 2025):** fbi.gov devolveu HTTP 403; o PDF do relatório não produziu texto extraível. Usada fonte secundária [21], declaradamente.
- **Documentação do framework Speech da Apple:** a página retornou apenas o título, sem corpo. Descartada; alegação reancorada em [14].
- **Apresentação do Infinite Dial 2026 (PDF):** não extraiu texto. Usada a página da SSRS [19], que reporta os mesmos números.
- **Política de dados de voz da ANPD / classificação da voz como dado biométrico sensível no Brasil:** não pesquisada nesta rodada. Lacuna reconhecida, relevante para `e5.1.1`.

### 12.4 Dados de busca NÃO verificados — não usados no corpo

Registro para rastreabilidade, e porque a seção 8 depende deste registro:

- "10 milhões de conversas semanais" em plataforma de agentes de voz — apareceu em resultado de busca; **não consta** do blog da empresa que abri [18]. Não usado.
- Preços por minuto de áudio de API de voz em tempo real (entrada e saída) — apareceram em análises de terceiros; nenhuma página oficial de preços foi aberta. **Não usados** — por isso `e5` afirma que o custo por minuto "sai da conta do produto" sem cifra.
- Queda de ~80% na receita de sincronização alegada por um duo em ação judicial de 2026; relatório dinamarquês projetando perda de 6,9 bilhões de coroas; "65% dos supervisores musicais usarão IA em 2026" — todos de resultado de busca, nenhuma fonte primária aberta. **Não usados.**
- Pesquisa Mastercard (89% de brasileiros temem clonagem da própria voz) e perdas da Febraban (R$ 10,1 bilhões em fraude bancária) — apareceram em resultados de busca e **não constam** da matéria que efetivamente abri [22]. **Não usados.**
- Taxas de acerto do Parakeet contra Whisper no Open ASR Leaderboard — resultado de busca; leaderboard não aberto. **Não usado.**
- MusicGen-Stem como referência de geração multi-stem: apareceu em busca e é plausível, mas não abri o artigo. R1 é sustentada por [3], não por ele.

### 12.5 Contrassinais registrados

1. Música gerada é 1 a 3% das execuções na Deezer, e até 85% das execuções dessas faixas foram identificadas como fraudulentas em 2025 [7] — parte do volume não é consumo.
2. Posse de caixa inteligente em 39% nos EUA, após platô de quatro anos [19].
3. A latência competitiva de full-duplex lida é em GPU de servidor [6]; o omni comparável é de escala 30B [5].
4. O comparativo favorável ao TTS local é publicado pelo fornecedor que o lidera [15].
5. A exceção artística do Artigo 50(4) [10] pode manter a música gerada fora da obrigação de divulgação — enfraquecendo o motor legal de `e3.1.1`.
6. A projeção econômica mais citada é encomenda de entidade de arrecadação e condicionada a quadro regulatório inalterado [11].

### 12.6 Hipóteses alternativas não adotadas

- **"A ruptura é a voz, não a música."** Plausível: voz é interface, música é conteúdo, e mudança de interface tem alcance maior. Não adotada porque a evidência de adoção de interface por voz é de platô [19], enquanto a de volume em música é massiva [7]. O mapa reflete isso dando duas raízes ao ramo musical e uma ao de fala — e a assimetria é deliberada, não descuido.
- **"A ruptura é econômica, não técnica: o custo marginal zero do som."** Parcialmente adotada, dentro de `e2`. Não promovida a raiz porque custo marginal zero é consequência da capacidade madura de geração, e a skill proíbe capacidade madura como raiz.
- **"Não há disrupção: é substituição de insumo dentro de cadeias existentes."** Esta é a hipótese que o critério de mudança de ideia declarado na entrevista privilegia, e ela **venceu parcialmente** — foi o que rebaixou geração de música inteira, clonagem de voz e agente de voz por nuvem a antecedentes. Se a bancada da seção 10 der o resultado negativo previsto, ela vence também sobre R1, e o mapa fica com duas raízes.

### 12.7 Observações que não entraram no mapa

- A régua "o que já é comum em produto de massa fica fora" foi, nesta rodada, o filtro mais produtivo: retirou os quatro candidatos de aparência mais futurista e obrigou a descer ao nível de **capacidade estrutural** (faixas nativas, proveniência por saída, full-duplex local) em vez de ficar em nomes de produto. Vale registrar como método, não como achado.
- O experimento de voz **considerado e preterido**: bancada de turno — duas pessoas conversando com um agente de voz, uma com modelo local e outra com remoto, medindo interrupções indevidas, silêncios mal interpretados e desistências. Preterido porque hoje mediria engenharia (latência, bateria) e não futuro, e porque não existe modelo full-duplex local em telefone para constituir a condição experimental [5][6].
- Há um efeito de acessibilidade que não achou lugar na roda: se voz sintética legítima [14] e voz sintética fraudulenta [22] convergem em qualidade, quem depende da primeira herda a suspeita gerada pela segunda. Está no cenário indesejável e **não** na roda, porque não consegui preencher o mecanismo sem supor comportamento social que nenhuma fonte lida mede. Declaro a omissão em vez de inventar o elo.
