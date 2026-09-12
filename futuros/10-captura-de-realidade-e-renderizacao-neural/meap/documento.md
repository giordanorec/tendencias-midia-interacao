---
tema: Captura de realidade e renderização neural
slug: captura-de-realidade-e-renderizacao-neural
autor_login: meap
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-11
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global (com nota sobre o Brasil)
disrupcoes_raiz: 4
efeitos_ordem_1: 10
efeitos_ordem_2: 14
efeitos_ordem_3: 13
tecnologias_citadas: [3D Gaussian Splatting, NeRF, KHR_gaussian_splatting (glTF), reconstrução 3D a partir de uma imagem (Hunyuan3D, Tripo, TRELLIS), mocap sem marcador (Move.ai, EasyMocap), profundidade monocular (Depth-Anything-V2), 4D Gaussian Splatting / vídeo volumétrico, VPS e Large Geospatial Model (Niantic Spatial), modelos de mundo generativos (Marble/World Labs), fotogrametria clássica, escaneamento a laser, mocap com marcadores, upscalers generativos (Magnific), SuperSplat, model-viewer]
fontes: 11
confianca: media
experimento: "Três capturas do mesmo objeto — medida, reconstruída de uma foto e gerada por prompt — publicadas lado a lado num visualizador web sem rótulo, para medir a taxa de acerto da turma ao separar registro de invenção, e depois revelar o rastro de captura de cada uma."
skill_usada: futurization-meap
publico_ok: false
---

## 1. Resumo

A captura de realidade deixou de ser um problema de geometria e virou um problema de aprendizado: com Gaussian Splatting (2023) e reconstrução a partir de uma imagem única, o pipeline 3D clássico — modelar, texturizar, iluminar — colapsa em filmar. Em 2026 isso já não é promessa de laboratório: 212 ferramentas no mercado, cerca de quatro artigos de campo de radiância por dia, splat editável nativamente em 3ds Max, Houdini e Nuke, e um formato de troca padronizado (KHR_gaussian_splatting, release candidate de fevereiro de 2026) prestes a ser ratificado. O que se move para 2031 não é a qualidade visual — essa já está resolvida —, são três coisas que nenhuma delas é técnica: quem tem direito sobre a forma de um lugar e de um corpo quando copiá-los custa um minuto de celular; o que sobra da profissão que existia para fabricar o que agora se coleta; e, sobretudo, o que acontece com o estatuto de registro quando captura e geração produzem o mesmo arquivo, no mesmo formato, sem marcar onde termina o que a câmera viu e começa o que o modelo inventou. Este mapa sustenta que a disrupção decisiva do tema não é a captura ficar fácil — é a fronteira entre medir e imaginar deixar de ser legível no artefato.

## 2. O tema

Captura de realidade e renderização neural é o conjunto de técnicas que transforma sensor comum — a câmera de um celular, um vídeo de mão, uma foto solta — em ativo 3D navegável, sem passar pelo trabalho manual de modelagem. A família tem três frentes: reconstrução de cena (NeRF, e depois Gaussian Splatting, que fez o mesmo em tempo real), reconstrução de objeto a partir de pouquíssimas imagens ou de uma só (Hunyuan3D, Tripo, TRELLIS), e captura de movimento humano sem marcador a partir de vídeo RGB (Move.ai, EasyMocap).

O tema pertence a mídia e interação por um motivo direto: ele muda a matéria-prima. Durante trinta anos, mundo virtual foi coisa que se fabricava — e portanto era escasso, caro e assinado por alguém. A partir do momento em que se coleta, o custo de produção deixa de ser a barreira, e as barreiras que sobram passam a ser de outra natureza: jurídica (posso capturar isto?), epistêmica (isto que estou vendo foi medido ou inventado?) e estética (se tudo nasce fotorrealista, o que significa escolher não ser?).

Merece um mapa de futuro porque está exatamente no ponto em que a curva de adoção ainda não passou da maioria inicial — a técnica venceu, as instituições ao redor dela não se formaram — e porque as consequências mais pesadas não estão no campo de quem a desenvolve. Elas estão no direito, na formação profissional e no regime de prova.

## 3. Onde isso está hoje

**A técnica ganhou e está sendo industrializada.** O Khronos Group anunciou em 3 de fevereiro de 2026 o release candidate da extensão `KHR_gaussian_splatting`, que permite guardar splats dentro do glTF 2.0 — o formato de entrega 3D mais adotado do mundo. A ratificação era esperada para o segundo trimestre de 2026. O grupo que assina o trabalho diz muito sobre o estágio: Autodesk, Cesium/Bentley, Esri, Huawei, Niantic Spatial, NVIDIA e XGRIDS, com colaboração do Open Geospatial Consortium. Padronizar formato é o que se faz quando a tecnologia deixou de ser experimento e virou coisa que precisa atravessar departamentos e empresas sem perder a forma.

**O volume é de campo consolidado, não de nicho.** O levantamento próprio do RadianceFields.com, com dados até 9 de julho de 2026, registra 212 ferramentas de Gaussian Splatting no mercado (43 estúdios de captura, 38 serviços em nuvem, 27 visualizadores, 25 gratuitos), 3.333 artigos de campo de radiância indexados — dos quais ao menos 749 datados de 2026, cerca de quatro por dia —, mais de US$ 1,5 bilhão em captação declarada entre 13 empresas, e 415 vagas abertas. As indústrias que mais adotam, por número de ferramentas, são GIS (25), arquitetura/engenharia/construção (24) e mídia e entretenimento (20). São dados primários de um veículo especializado, não de auditoria independente — ver a ressalva na seção 11.

**As ferramentas de produção absorveram splat como cidadão de primeira classe.** Em julho de 2026: 3ds Max 2027.2 passou a tratar splat como tipo de objeto nativo e editável; Houdini 22 saiu com suporte nativo; Nuke 17 já havia entrado em beta com suporte nativo no fim de 2025; DJI Terra removeu o limite de escala na reconstrução; Volinga levou 4D Gaussian Splatting para a Unreal Engine; e a 4DV.ai, com Dell e NVIDIA, exibiu na SIGGRAPH 2026 um vídeo de 11,5 minutos em que todo quadro é 4DGS, sem elemento 2D.

**O espaço está virando infraestrutura endereçável.** Em 7 de abril de 2026 a Niantic Spatial lançou o Scaniverse como plataforma integrada de captura (web e móvel) e o VPS 2.0, com localização 6DoF de precisão quase centimétrica em áreas mapeadas, contra os 3 a 5 metros do GPS. A empresa descreve o Scaniverse como "a porta de entrada" do seu Large Geospatial Model — uma representação persistente e legível por máquina do mundo físico — e nomeia como clientes-alvo robótica, energia, construção, logística, setor público e grandes recintos.

**O lado gerativo alcançou o lado capturado, e os dois saem no mesmo formato.** O Marble, da World Labs, está aberto ao público desde 12 de novembro de 2025 e ganhou API pública em 21 de janeiro de 2026. Ele aceita texto, imagem única, várias imagens, vídeo ou layout 3D grosseiro, e exporta *gaussian splats* (a representação de maior fidelidade, segundo a própria empresa) e malhas. Ou seja: o arquivo que carrega o que uma câmera mediu e o arquivo que carrega o que um modelo imaginou são, hoje, do mesmo tipo.

**Mocap sem marcador não é mais exótico, mas também não venceu sozinho.** O balanço da Vicon sobre a GDC 2026 descreve fluxo híbrido, não substituição: markerless reduz a barreira de entrada e serve à iteração rápida, enquanto marcador continua vencendo em objetos e adereços, porque "props seguem difíceis pela enorme variedade de forma, detalhe de superfície, comportamento de movimento e complexidade de interação". O mercado global de mocap 3D é pequeno — cerca de US$ 319 milhões em 2026, por estimativa de consultoria — o que importa: a disrupção aqui não está no tamanho do mercado que ela ataca, está em quem passa a poder produzir sem ele.

**O direito está atrás, e sabe disso.** A Dinamarca propôs em 26 de junho de 2025 emendar sua Lei de Direito Autoral para dar a toda pessoa identificável direito sobre traços faciais, voz e corpo, com poder de notificação de remoção e responsabilização de plataforma — é a primeira tentativa de tratar a própria aparência como titularidade autoral. No Brasil, a ANPD recebeu 1.594 contribuições de 88 participantes na tomada de subsídios sobre dados biométricos, com divergência declarada justamente sobre consentimento em relações assimétricas, uso de biometria em treino de IA e reconhecimento facial em espaço público; a norma estava prevista para ser concluída em 2026. Nenhum dos dois trata de espaço — só de pessoa.

**E a proteção dos próprios ativos capturados é reconhecidamente imatura.** O primeiro levantamento sistemático sobre proteção de propriedade intelectual em ativos 3DGS, de fevereiro de 2026, conclui que o progresso "permanece fragmentado, sem uma visão unificada dos mecanismos subjacentes, dos paradigmas de proteção e dos desafios de robustez".

**O que a régua da disciplina descarta.** Fotogrametria clássica, escaneamento a laser terrestre e mocap com marcadores estão maduros e não entram como disrupção-raiz. NeRF também não entra: provou a tese em 2020 e foi substituído em produção pelo Gaussian Splatting antes de romper qualquer cadeia de valor. Vídeo estéreo de celular (spatial video) é produto de massa e é canal, não ruptura.

## 4. As disrupções-raiz

### 4.1. O pipeline 3D colapsa em captura

**O que rompe.** A cadeia de valor que existia para *fabricar* o 3D — modelagem, retopologia, UV, texturização, iluminação — e a escassez que essa cadeia produzia. Um ativo fotorrealista deixa de ser resultado de semanas de trabalho especializado e passa a ser resultado de uma volta ao redor do objeto com um celular, ou de uma única foto submetida a um modelo generativo.

**Por que agora.** O Gaussian Splatting (2023) resolveu o tempo real, que o NeRF não resolvia. Três anos depois, o ecossistema fechou: formato de troca padronizado em release candidate (fev/2026), suporte nativo nos três principais programas de produção (3ds Max, Houdini, Nuke), 212 ferramentas comerciais e captura rodando em aparelho comum. O lado do objeto isolado fechou por outro caminho: os geradores imagem→3D passaram a entregar material PBR pronto para produção, não só silhueta.

**O que ainda falta.** Editabilidade semântica. Splat descreve aparência, não geometria segmentável e mensurável: dá para ver de qualquer ângulo, não dá para dizer "esta parte é a porta" nem medir com confiança. Falta também reiluminação robusta — o que foi capturado carrega a luz do dia em que foi capturado. Enquanto isso não fechar, a captura entra no pipeline como cenário e referência, não como ativo interativo completo.

### 4.2. A aparência do mundo vira dado apropriável

**O que rompe.** O regime tácito segundo o qual estar visível em público não é o mesmo que ser reproduzível. Fotografar uma fachada sempre foi banal; produzir uma cópia navegável, dimensionalmente fiel e reinserível em qualquer outra obra é outra coisa — e o direito que temos foi escrito para a primeira.

**Por que agora.** A captura ficou gratuita, rápida e invisível (é indistinguível de alguém filmando). O ativo resultante ficou portátil, porque o formato padronizou. E a proteção não existe: o levantamento de fevereiro de 2026 sobre PI em ativos 3DGS descreve o campo como fragmentado. A regulação em movimento — a proposta dinamarquesa sobre rosto, voz e corpo; a norma da ANPD sobre biometria — mira a pessoa, e ainda assim está em disputa; nenhuma das duas endereça a forma de um lugar.

**O que ainda falta.** Um litígio de referência. Enquanto nenhum tribunal relevante decidir se um campo de radiância de uma pessoa é retrato, obra derivada ou dado biométrico sensível, cada plataforma opera pela própria política, e a ausência de decisão funciona como permissão.

### 4.3. Registro e invenção colapsam no mesmo artefato

**O que rompe.** O estatuto de prova da captura. Reconstruir a partir de uma imagem única significa, por definição, inventar o que a câmera não viu — e a linha de pesquisa de reconstrução amodal existe justamente para inferir o oculto. O mesmo vale, em grau menor, para qualquer splat: as regiões pouco observadas são interpoladas. E o mesmo arquivo, no mesmo formato, recebe sem distinção o que foi medido e o que um modelo de mundo gerou do zero a partir de um prompt.

**Por que agora.** Porque a convergência já aconteceu no produto, não na teoria: o Marble aceita texto, imagem, vídeo ou layout e exporta *gaussian splats* — a mesma saída que um scanner de celular produz. Antes de 2025, geração e captura tinham cheiro diferente e formato diferente. Agora não têm.

**O que ainda falta.** Um padrão de proveniência para 3D, equivalente ao que o C2PA tenta para imagem — e que a extensão glTF recém-padronizada, focada em geometria e aparência, não contempla. Falta também o incidente público que torne a diferença socialmente perceptível: enquanto ninguém for prejudicado de forma visível por confiar num escaneamento inventado, a distinção segue sendo assunto de especialista.

### 4.4. O espaço vira endereçável por máquina

**O que rompe.** A separação entre mapa e território, e o monopólio da tela como lugar da interface. Um sistema de posicionamento visual com precisão quase centimétrica sobre um mapa capturado transforma um ponto físico em endereço estável, que qualquer dispositivo resolve igual — e que pessoa e máquina consultam do mesmo jeito.

**Por que agora.** VPS 2.0 e o Large Geospatial Model da Niantic Spatial (abr/2026) fecharam o ciclo captura → mapa persistente → localização, com a captura feita por celular comum. A padronização do splat em glTF, com participação de Esri, Cesium e do Open Geospatial Consortium, é o que permite esse mapa circular entre atores que não são do mesmo dono.

**O que ainda falta.** Cobertura e federação. Um mapa persistente só vale se o lugar aonde você vai estiver nele, e hoje a cobertura é ilha por ilha, cada uma de um operador. Falta também resolver quem arbitra o que pode ser ancorado num ponto físico de terceiro — questão que não tem sequer um foro.

*(Fronteira declarada: a 4.4 encosta no tema 9, agentes corporificados, e no 15, distribuição de 3D pela web. Aqui o objeto é o que a captura neural faz ao espaço enquanto ativo endereçável, não o agente que navega nele nem o transporte do arquivo.)*

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O pipeline 3D colapsa em captura
    efeitos:
      - id: e1
        ordem: 1
        efeito: O custo de produzir um ambiente 3D fotorrealista cai para o custo de filmar o lugar com um celular comum.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Equipes pequenas passam a entregar cenários de qualidade antes restrita a grande estúdio, e a vantagem competitiva migra de conseguir fabricar o ativo para escolher o que capturar.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A curadoria do lugar real vira a decisão criativa central, e a formação em mídia desloca peso de modelagem para captura, olhar e direção de fotografia.
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O gargalo muda de criação para edição, porque splat descreve aparência e não geometria segmentável, e limpar, recortar e dar semântica passa a consumir o tempo que a modelagem consumia.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Consolida-se a especialidade de editor de campo de radiância, com ferramenta, vocabulário e mercado próprios, ocupando o nicho que a modelagem manual deixou.
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Os postos de entrada em 3D encolhem primeiro, porque tarefa repetitiva de asset júnior é o que captura e geração substituem melhor.
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: A escada de formação da profissão quebra no primeiro degrau, porque desaparece o trabalho repetitivo por onde se aprendia o ofício.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Falta quem saiba consertar à mão o que a captura errou, e a dependência do pipeline neural deixa de ser escolha e passa a ser ausência de alternativa treinada.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Parte dos estúdios converte o ganho em ampliação de escopo, com mundos maiores e mais densos no mesmo orçamento, mantendo o número de vagas e mudando o que elas fazem.
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e3
        ordem: 1
        efeito: O fotorrealismo vira o padrão estético de fábrica, porque é o que a captura entrega sem esforço adicional.
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Estilizar passa a custar mais do que não estilizar, invertendo a economia do estilo que valeu desde o 3D em tempo real.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A estilização vira sinal de investimento humano e argumento de preço, como o desenho à mão passou a ser depois que a fotografia barateou o registro.
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: A aparência do mundo vira dado apropriável
    efeitos:
      - id: e4
        ordem: 1
        efeito: Qualquer pessoa produz em minutos uma cópia navegável de um espaço, de uma fachada ou de um corpo, sem que nenhuma etapa técnica exija consentimento.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Estabelecimentos, museus e eventos passam a proibir captura volumétrica em contrato e sinalização, distinguindo-a explicitamente da fotografia que sempre toleraram.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Forma-se um mercado de licenciamento do direito de captura, e administrar um lugar passa a incluir vender o acesso à sua forma, não apenas à sua imagem.
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Um litígio de referência sobre splat de pessoa capturado sem consentimento e usado comercialmente obriga tribunais a decidir se um campo de radiância é retrato, obra derivada ou dado biométrico.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: A categoria jurídica escolhida define a infraestrutura, e se o corpo capturado for enquadrado como dado biométrico sensível a captura casual de cena com transeuntes deixa de ser viável em produto.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: Os formatos de troca padronizam geometria e aparência antes de padronizar proveniência e consentimento.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Quem publica assume sozinho o risco jurídico, porque o arquivo não carrega de onde veio nem sob que autorização foi feito.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Bibliotecas profissionais passam a comprar por cadeia de proveniência em vez de por qualidade visual, e o ativo sem procedência perde valor mesmo sendo tecnicamente superior.
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: Contramedidas de captura viram produto, de superfícies e iluminação que degradam a reconstrução a marcas d'água embutidas no próprio splat.
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: A proteção contra ser reconstruído passa a ser comprada em vez de garantida por lei.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Instala-se desigualdade de proteção por renda e por porte, com marca grande blindando sua loja e pessoa comum sem blindar sua casa, e a assimetria entra na pauta regulatória.
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: Registro e invenção colapsam no mesmo artefato
    efeitos:
      - id: e7
        ordem: 1
        efeito: O mesmo arquivo transporta, sem marcação, o que foi medido, o que foi interpolado e o que o modelo inventou do lado que nenhuma câmera viu.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Captura 3D deixa de ser aceita como prova em perícia, seguro e vistoria sem laudo sobre o método de reconstrução.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: O mercado se parte em captura mensurável, com laudo e geometria verificável, e captura ilustrativa, barata e sem valor probatório, e as duas deixam de disputar o mesmo cliente.
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: O público aprende que o escaneado tem partes inventadas, e a confiança em isto foi capturado do real cai ao patamar em que já está a da imagem gerada.
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: A autenticidade migra do artefato para o processo, e quem precisa afirmar que algo existiu assim publica o rastro de captura — poses, sensores, data — em vez do resultado.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: Gerar um mundo fica mais barato e mais controlável do que ir ao lugar capturá-lo.
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: A captura passa a ser escolhida por razão semântica, quando importa que seja aquele lugar e não um lugar plausível.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Documentário, jornalismo e patrimônio imersivos separam-se do entretenimento em mundo gerado e passam a vender referencialidade em vez de imersão.
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: O espaço vira endereçável por máquina
    efeitos:
      - id: e9
        ordem: 1
        efeito: Ambientes internos e urbanos ganham coordenadas persistentes e compartilháveis com precisão centimétrica, independentes do GPS.
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: A interface deixa de ser a tela e passa a ser o lugar, com conteúdo, instrução e anúncio ancorados a pontos físicos que qualquer dispositivo resolve igual.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: A camada de endereçamento espacial é disputada como o DNS foi, e quem detém o mapa persistente de um shopping, campus ou aeroporto cobra pelo direito de ancorar qualquer coisa ali.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: O mesmo mapa capturado serve de entrada para pessoa e para máquina.
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: O design de interação passa a projetar para dois leitores simultâneos, e o segundo não tem olhos nem tolerância a ambiguidade.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: Emerge a prática de legibilidade dupla, com ambientes desenhados para serem legíveis por gente e não-ambíguos para reconstrução, equivalente espacial do que a otimização para busca fez com o texto.
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

**O que o YAML não diz.**

*A roda tem um centro que não é o mais óbvio.* As quatro disrupções não têm o mesmo peso. A 4.1 (pipeline colapsa) é a mais certa e a menos interessante: é a que todo mundo já viu chegar, e seus efeitos são majoritariamente redistributivos — o trabalho muda de lugar, o custo cai, alguém perde e alguém ganha. A 4.3 (registro e invenção colapsam) é a menos discutida e a que reorganiza mais coisas, porque atinge um pressuposto que nem estava em disputa: o de que escanear é uma forma de olhar, e não uma forma de escrever.

*Duas ramificações se contradizem de propósito, e isso é deliberado.* `e2.1` diz que os postos de entrada somem e a formação quebra; `e2.2` diz que os estúdios convertem o ganho em escopo e preservam vagas. Não escolhi entre as duas porque a evidência de 2026 sustenta as duas ao mesmo tempo: relatos de setor descrevem tanto redução de contratação em tarefa repetitiva quanto uso das ferramentas para ampliar mundo dentro do mesmo orçamento. Qual delas domina em 2031 depende de uma variável que não é técnica — se o mercado de jogos e audiovisual está em expansão ou em retração no período. Um mapa que apagasse uma das duas seria mais elegante e menos honesto.

*Os prazos são conservadores por escolha.* Todo efeito de segunda ordem aqui está datado com pelo menos um ano de folga em relação ao que a curva técnica permitiria, porque a história das interfaces mostra que a técnica chega antes das instituições por margens largas. Nenhum efeito deste mapa assume adoção mais rápida do que o próprio Gaussian Splatting teve entre 2023 e 2026 — esse é o precedente que uso como teto.

*O que a roda não cobre.* Não derivei efeitos sobre robótica e treino de agentes em mundo capturado, que é o tema 9, nem sobre transporte e streaming de splat pela web, que é o 15. São ramos reais e foram cortados por fronteira, não por irrelevância.

## 6. Sinais fracos e wildcards

**Reconstrução como programa, não como dado.** O `img2threejs`, citado pela turma, reconstrói o objeto de uma foto como código procedural Three.js em vez de malha ou nuvem. Isso é marginal hoje e, se pegar, muda a natureza do ativo: um objeto capturado que é um *programa* pode ser parametrizado, versionado, difado e auditado linha a linha — coisas que um splat de dois milhões de gaussianas não permite. Resolveria simultaneamente o problema de editabilidade da 4.1 e o de proveniência da 4.3, por um caminho que ninguém está olhando. Liga com o tema 14.

**Splat como formato de arquivo permanente.** A sessão de discussão da SIGGRAPH 2026 sobre 3D→4D levantou, entre outros pontos, o uso de 3DGS como formato de arquivamento do mundo real. Hoje isso é conversa de corredor. Se instituições de patrimônio adotarem, cria-se uma obrigação de preservação de longo prazo sobre um formato de três anos de idade — e o risco de uma geração de acervo ilegível em vinte anos.

**Compressão como poder.** A extensão glTF já nasceu prevendo extensões de compressão propostas por Niantic Spatial e Qualcomm. Quem define o codec define quem consegue reproduzir. É a mesma jogada do vídeo, e está acontecendo em silêncio, fora do debate público sobre captura.

**Wildcard 1 — o caso que vira jurisprudência.** Um splat de uma pessoa, capturado numa rua ou num evento sem consentimento, aparece em obra comercial de alcance nacional. A decisão judicial que vier desse caso — e não a técnica — determina qual dos ramos de `e4.2.1` vale para o resto da década. Não é possível prever o teor; é possível prever que a decisão será tomada por quem não entende a diferença entre uma fotografia e um campo de radiância, porque não há literatura jurídica formada sobre isso.

**Wildcard 2 — a captura silenciosa.** Se aparelhos que já andam com as pessoas passarem a reconstruir o ambiente continuamente como subproduto de outra função (navegação, acessibilidade, estabilização), a captura deixa de ser um ato e vira um estado. Todo o mapa da 4.2 assume que existe alguém filmando de propósito. Sem esse alguém, o consentimento não tem a quem ser pedido, e as contramedidas de `e6` viram a única defesa possível.

**Wildcard 3 — o colapso do custo de geração.** Se gerar um mundo plausível ficar duas ordens de grandeza mais barato do que capturar um real, a captura pode encolher para nichos de referencialidade muito antes de 2031, e boa parte da disrupção 4.1 perde objeto: não haveria pipeline colapsando em captura, haveria pipeline substituído por prompt. Esse é o cenário em que este mapa erra mais feio.

## 7. Contra o próprio mapa

**Viés herdado do enunciado.** O tema, como a disciplina o descreveu, já apontava privacidade de espaços e direito sobre aparência como as perguntas de primeira ordem. A disrupção 4.2 confirma esse enquadramento. Marquei-a como `review` na rodada adversarial e a mantive porque a evidência independente a sustenta — a imaturidade declarada da proteção de PI em 3DGS, a regulação em disputa no Brasil e na Dinamarca —, mas o leitor deve saber que ela não foi descoberta contra o enunciado, foi encontrada dentro dele.

**O erro mais provável é de calendário, não de direção.** A história das interfaces diz que instituições demoram mais do que qualquer estimativa. É plausível que em 2031 nada de `e4.2.1`, `e7.1.1` ou `e9.1.1` tenha acontecido, não porque as forças não estejam lá, mas porque litígio, norma técnica e reorganização de mercado levam mais de cinco anos rotineiramente. Se este mapa estiver errado, aposto que estará errado por otimismo de prazo nos efeitos de terceira ordem.

**Extrapolação linear no ramo da profissão.** `e1`, `e2` e `e3` descrevem, no fundo, uma história já contada: ferramenta barateia produção, trabalho de entrada some, estética do default vira hegemônica. É o roteiro da fotografia sobre a pintura, do desktop publishing sobre a tipografia, do estoque de imagens sobre a ilustração comercial. Isso pode significar que o padrão é robusto — ou que estou encaixando o tema num molde conhecido em vez de olhar para ele. Não tenho como decidir entre as duas hipóteses com a evidência disponível.

**Causa frouxa admitida na disrupção 4.4.** Espaço endereçável por máquina aconteceria de qualquer forma por pressão da robótica e da logística, mesmo sem captura neural. Reconectei o ramo argumentando que é a captura por sensor comum que popula o mapa em escala — mas se amanhã frotas de veículos e robôs fizerem esse mapeamento sozinhas, `e9` e `e10` deixam de derivar deste tema e passam a pertencer ao tema 9. É o ramo mais frágil do mapa e o primeiro que eu cortaria.

**O que me faria abandonar a tese central.** Dois achados. Primeiro: evidência de que a adoção já passou da maioria inicial — se captura neural estiver embutida no fluxo de trabalho padrão da maior parte de quem produz mídia, e não em 212 ferramentas especializadas e 415 vagas, então isto é infraestrutura madura e não cabe mapa de futuro, cabe manual. Segundo: evidência de que a técnica só melhora o que já existia — se, olhando de perto, splat estiver apenas substituindo fotogrametria nos mesmos usos, com os mesmos atores e o mesmo regime de direito, então não há ruptura, há barateamento, e este documento inteiro está superdimensionado.

## 8. O que a máquina errou

**Erro 1 — data de lançamento do Marble, tirada de agregador.** O resumo de busca afirmava que o Marble foi lançado comercialmente "no início de 2026". O blog da própria World Labs, aberto diretamente, diz "disponível para todos a partir de hoje" em 12 de novembro de 2025. Um agregador havia comprimido lançamento, API e versões numa data só. Corrigido pela fonte primária; a API pública é que é de 21 de janeiro de 2026.

**Erro 2 — objeção da Comissão Europeia afirmada sem fonte aberta.** Um resultado de busca dizia que a Comissão Europeia levantou objeções substanciais ao projeto dinamarquês. Ao abrir a análise jurídica que eu efetivamente li, não há menção a objeção da Comissão — só a observação de que o projeto precisa ser coordenado com o RGPD e o DSA. Retirei a afirmação. Pelo mesmo motivo, não afirmo a data de entrada em vigor em 1º de julho de 2026, que apareceu em busca e não estava na fonte aberta.

**Erro 3 — frase incoerente reproduzida de comparativo comercial.** Um comparativo de geradores 3D afirmava, na mesma sentença, que o Hunyuan3D 2.1 é superado em qualidade pelo TRELLIS.2 e pelo Hunyuan3D 2.1. A frase se contradiz e vem de página de marketing. Descartei o ranking inteiro em vez de citar a parte que me convinha, e mantive apenas o que o artigo técnico sustenta: que o sistema entrega material PBR pronto para produção a partir de imagem.

**Erro 4 — projeção de mercado sem relatório identificável.** Apareceu em busca a cifra de US$ 10,29 bilhões para vídeo volumétrico em 2030, com 26% de crescimento anual. Não há relatório, ano nem empresa rastreáveis no resultado. Número redondo e plausível é exatamente o padrão de alucinação estatística que o `DUVIDAS.md` registra. Fora do documento.

**Erro 5 — classificação de maturidade forçada por conveniência.** Na triagem, minha primeira inclinação foi classificar o Gaussian Splatting como disruptivo sem reservas. Aplicando a regra de ouro da própria skill — três anos como padrão de mercado — ele está no limite: a técnica é de 2023, e o suporte nativo em ferramenta de produção e o formato padronizado são de 2025-2026. A disrupção-raiz, portanto, não é a técnica; é o colapso do pipeline que ela viabiliza. A correção mudou o enunciado da 4.1.

**Erro 6 — tentação de preencher o recorte Brasil com exemplo inventado.** As buscas em português sobre uso de captura neural por empresas ou instituições brasileiras não retornaram nada verificável. A saída fácil seria nomear uma startup plausível ou um projeto de patrimônio genérico. Registro a lacuna em vez de preenchê-la: sobre o Brasil, este mapa só afirma o que a ANPD publicou sobre biometria, e nada sobre adoção.

## 9. Três cenários para 2031

### 9.1. Provável

A captura neural virou etapa ordinária de produção e ninguém mais a chamava pelo nome. Cenário de jogo, fundo de comercial, visita de imóvel e reconstituição jornalística passaram a nascer de filmagem com aparelho comum, e a discussão sobre qualidade tinha morrido por volta de 2028. O trabalho não desapareceu: mudou de nome. As vagas de modelador júnior rarearam e as de edição e limpeza de captura se multiplicaram, com o efeito colateral de que a entrada na profissão ficou mais difícil — aprendia-se menos fazendo. O direito continuou atrás: houve dois ou três casos ruidosos sobre pessoas capturadas sem consentimento, decididos por analogia com retrato e sem estabelecer regra geral, e nenhuma jurisdição relevante chegou a tratar a forma de um espaço como objeto de direito próprio. Proveniência virou exigência contratual nas bibliotecas profissionais antes de virar norma técnica. E a fronteira entre capturado e gerado, que este mapa apontou como a questão central, seguiu ilegível no arquivo — não porque fosse impossível marcá-la, mas porque nenhum ator com poder de padronizar tinha interesse em marcá-la.

### 9.2. Desejável

O padrão de proveniência para ativos 3D saiu junto com a ratificação do formato, e não cinco anos depois. Todo splat publicado carregava, no próprio arquivo, o rastro mínimo: quando, com que sensor, sob que autorização, e quais regiões foram medidas e quais inferidas — de modo que um visualizador comum podia sombrear o que foi inventado. Isso não impediu nada: continuou possível gerar mundos inteiros de um prompt, e continuou barato. Mas separou dois mercados que tinham colapsado num só, e devolveu valor à ida ao lugar. Do lado do direito, o Brasil chegou em 2031 com a norma de biometria concluída e com jurisprudência que distingue capturar o corpo de capturar o espaço, tratando o primeiro como dado sensível e o segundo como questão de uso, não de existência. E a escada da profissão foi reconstruída por fora do trabalho repetitivo que sumiu: as escolas passaram a formar em captura, curadoria e edição de campo com o mesmo cuidado com que formavam em modelagem, e a estilização deixou de ser luxo por ter voltado a ser ensinada.

### 9.3. Indesejável

Capturar deixou de ser um ato e virou um estado: aparelhos reconstruíam o ambiente continuamente como subproduto de outras funções, e a pergunta sobre consentimento perdeu destinatário. A proteção existiu, mas se comprava — superfícies, iluminação e assinaturas que degradam a reconstrução foram vendidas como serviço para quem tinha uma marca a proteger, e a casa de quem não tinha ficou aberta. O mapa persistente dos lugares mais valiosos consolidou-se sob poucos operadores, que passaram a cobrar pelo direito de ancorar qualquer conteúdo num ponto físico, e a camada de endereçamento espacial nasceu privada sem que houvesse foro para questioná-la. Do lado da confiança, o pior aconteceu do jeito mais banal: como capturado e gerado eram indistinguíveis no arquivo, o público simplesmente parou de fazer a distinção — e com ela se perdeu também o valor do registro legítimo. Vistoria, perícia e reportagem imersiva tiveram de provar cada vez o que antes se presumia, e a parte que não tinha recurso para provar deixou de ser ouvida. O fotorrealismo automático completou o quadro: tudo parecia real, nada garantia ser, e a estética deixou de carregar qualquer informação sobre a origem do que se via.

## 10. O experimento

**A prova cega de proveniência.** Construível hoje, numa tarde, com ferramenta gratuita e sem servidor.

*O que se monta.* Três reconstruções do mesmo objeto ou do mesmo canto de sala:

1. **Medida** — captura por vídeo de celular processada em Gaussian Splatting (Polycam, Luma ou Scaniverse), com dezenas de pontos de vista.
2. **Inferida** — reconstrução a partir de **uma única foto** do mesmo objeto, por um gerador imagem→3D (Tripo, Hunyuan3D ou TRELLIS). Metade da geometria, por construção, é invenção do modelo.
3. **Gerada** — o mesmo objeto descrito por texto a um modelo de mundo (Marble) e exportado como splat, sem que nenhuma câmera tenha visto o objeto real.

*Como se apresenta.* Os três arquivos publicados lado a lado num visualizador web — SuperSplat ou `model-viewer`, que rodam no navegador sem instalação —, sem rótulo, sem ordem fixa, navegáveis livremente. A turma responde a duas perguntas por peça: *isto foi medido, inferido ou gerado?* e *aponte na tela a região de que você menos confia*.

*O que se mede.* Taxa de acerto por peça e por pessoa; se a taxa fica perto do acaso (33%), a disrupção 4.3 está confirmada em sala. Mapa de calor das regiões apontadas como suspeitas, comparado com as regiões que de fato tinham pouca ou nenhuma observação de câmera — mede se a intuição humana localiza a invenção. E a variação do acerto quando se libera a navegação livre: a hipótese é que girar em torno do objeto, que é justamente o que a mídia imersiva promete, *piora* o julgamento, porque o fotorrealismo consistente de todos os ângulos é o que o método entrega de melhor.

*O que se entrega junto.* Um painel de rastro de captura ao lado de cada peça — número de imagens, poses da câmera, data, dispositivo, e o que foi inferido — revelado só depois da resposta. Esse painel é, ele mesmo, o protótipo mínimo do padrão de proveniência que a seção 9.2 descreve como desejável. Construí-lo à mão para três peças é a maneira mais rápida de descobrir o que custaria construí-lo para todas.

*Por que vale.* O experimento não testa uma opinião sobre o futuro; testa uma afirmação factual do presente, com resultado que pode contrariar o mapa. Se a turma distinguir as três peças com facilidade, a disrupção 4.3 está superestimada e este documento perde seu centro.

## 11. Fontes

Todas as fontes abaixo foram abertas e lidas diretamente. Afirmações que apareceram apenas em resumo de busca, sem página aberta, não entraram no documento — ver seção 8.

1. `https://www.khronos.org/news/press/gltf-gaussian-splatting-press-release` — release candidate da extensão `KHR_gaussian_splatting` para glTF 2.0, 3 de fevereiro de 2026; ratificação prevista para o 2º trimestre de 2026; participantes (Autodesk, Cesium/Bentley, Esri, Huawei, Niantic Spatial, NVIDIA, XGRIDS); extensões de compressão propostas por Niantic e Qualcomm. — **Alta confiabilidade**: fonte primária do órgão de padronização. É comunicado institucional, portanto otimista sobre o próprio trabalho, mas os fatos verificáveis (nome, status, data, participantes) são de primeira mão.

2. `https://radiancefields.com/gaussian-splatting-statistics` — 212 ferramentas, 3.333 artigos indexados, ≥749 em 2026, ~4 artigos/dia, US$ 1,5 bi+ em captação declarada entre 13 empresas, 415 vagas abertas, distribuição por indústria; dados até 9 de julho de 2026. — **Confiabilidade média**: dados primários das bases do próprio veículo, explicitamente declarados como contagem e não estimativa, mas sem auditoria externa e com viés de recorte (um veículo especializado tende a contar o que seu público reporta). Usei os números como ordem de grandeza, não como censo.

3. `https://www.auganix.org/ar-news-nianctic-scaniverse-vps-2-0/` — lançamento de Scaniverse e VPS 2.0 pela Niantic Spatial em 7 de abril de 2026; localização 6DoF quase centimétrica contra 3-5 m do GPS; Large Geospatial Model; setores-alvo. — **Confiabilidade média**: veículo setorial reproduzindo anúncio da empresa. As métricas de precisão são alegação de fornecedor, não medição independente, e assim estão tratadas no texto.

4. `https://www.worldlabs.ai/blog/marble-world-model` — o Marble aceita texto, imagem única, múltiplas imagens, vídeo, layout 3D e ativos existentes, e exporta *gaussian splats* e malhas; disponível ao público desde 12 de novembro de 2025. — **Alta confiabilidade para o fato central** (o que o produto aceita e o que exporta é verificável no próprio produto); baixa para juízos de qualidade, que são de marketing. O fato que sustenta a disrupção 4.3 — captura e geração saindo no mesmo formato — vem daqui.

5. `https://radiancefields.substack.com/p/gaussian-splatting-in-july-2026` — 3ds Max 2027.2 com splat como objeto nativo editável, Houdini 22 com suporte nativo, DJI Terra sem limite de escala, Volinga levando 4DGS à Unreal, Chronosplat reproduzindo 4D no navegador a partir de arquivos estáticos, e o filme de 11,5 min inteiramente em 4DGS da 4DV.ai com Dell e NVIDIA na SIGGRAPH 2026. — **Confiabilidade média-alta** para os lançamentos (são fatos de produto, checáveis); é boletim editorial, não peer review.

6. `https://arxiv.org/abs/2602.03878` — *Intellectual Property Protection for 3D Gaussian Splatting Assets: A Survey*, fev/2026. Conclui que o progresso "permanece fragmentado, sem uma visão unificada dos mecanismos, paradigmas de proteção e desafios de robustez". — **Alta confiabilidade** como retrato do estado da arte acadêmica; é preprint, não revisado por pares. Sustenta o "o que ainda falta" da disrupção 4.2.

7. `https://www.vicon.com/resources/blog/what-gdc-2026-taught-us-about-the-future-of-motion-capture/` — mocap em 2026 como fluxo híbrido, não substituição; markerless reduz barreira e acelera iteração, marcador mantém vantagem em objetos e adereços pela variedade de forma e complexidade de interação. — **Confiabilidade baixa a média, com viés declarado**: a Vicon vende sistemas com marcadores, e portanto tem interesse na tese do híbrido. Usei-a justamente como contraponto ao entusiasmo com markerless, e não como prova de que o markerless é limitado.

8. `https://mocaponline.com/pages/motion-capture-industry-statistics` — mercado global de mocap 3D em ~US$ 319 milhões em 2026; descrições de adoção por porte de estúdio apenas qualitativas; sem percentuais de penetração de markerless. — **Confiabilidade baixa**: agrega números de quatro consultorias diferentes sem reconciliá-los, e a própria página não fornece as métricas que seu título promete. Citei só a ordem de grandeza do mercado e registrei a ausência do resto.

9. `https://schjodt.com/news/owning-the-self-denmarks-copyright-turn-against-deepfakes` — proposta dinamarquesa de 26 de junho de 2025 para emendar a Lei de Direito Autoral, dando a toda pessoa identificável direito sobre traços faciais, voz e corpo, com notificação de remoção, indenização sem dano reputacional e responsabilização de plataforma; dispositivos distintos para artistas intérpretes e para o público geral. — **Alta confiabilidade**: análise de escritório jurídico sobre texto legislativo. Não confirma a data de entrada em vigor nem objeção da Comissão Europeia; ver seção 8.

10. `https://convergenciadigital.com.br/governo/anpd-reconhecimento-facial-e-inteligencia-artificial-racham-consulta-sobre-biometria/` — 1.594 contribuições de 88 participantes na tomada de subsídios da ANPD sobre dados biométricos; divergência sobre consentimento em relações assimétricas, uso de biometria em treino de IA e reconhecimento facial em espaço público; conclusão das regras pretendida para 2026; matéria de 28 de novembro de 2025. — **Confiabilidade média-alta**: veículo especializado em política digital brasileira, números atribuídos ao processo público da própria ANPD. É a única âncora do recorte Brasil neste documento.

11. `https://arxiv.org/abs/2506.15442` — *Hunyuan3D 2.1: From Images to High-Fidelity 3D Assets with Production-Ready PBR Material*, jun/2025. Geração de ativo 3D texturizado a partir de imagem, com geometria e textura em módulos separados; o próprio texto observa que a área segue acessível sobretudo a pesquisadores e desenvolvedores. — **Confiabilidade média**: preprint de equipe industrial, com caráter de tutorial e sem benchmark comparativo independente. Usei-o para sustentar apenas a capacidade (imagem→3D com PBR), não qualquer alegação de superioridade.

## 12. Anexo — o levantamento bruto

### 12.1. Fase 1 — Entrevista de enquadramento

Rodada executada sem interlocutor humano disponível; as respostas foram fornecidas previamente, em bloco, pelo enunciado da rodada. Registro literal do par pergunta-resposta, porque a skill exige que o enquadramento seja auditável:

| # | Pergunta da skill | Resposta recebida |
|---|---|---|
| 1 | Tema exato (3 a 7 palavras) | Captura de realidade e renderização neural (tema 10 de 19; família "Percepção e mídia sintética") |
| 2 | Recorte: tecnologia, prática social, mercado, regulação ou infraestrutura? | Não especificado no bloco de respostas. **Assumido e declarado:** tecnologia + prática social + regulação, porque as três aparecem inseparáveis no enunciado do tema. |
| 3 | Horizonte | 2031 |
| 4 | Para quem é o mapa | Quem projeta mídia e interação |
| 5 | Recorte geográfico | Global, com nota sobre o Brasil |
| 6 | O que já está descartado | O que já é comum em produto de massa (régua da disciplina). Nenhuma outra exclusão. |
| 7 | Viés desejado | Neutro |
| 8 | O que o usuário já sabe / leu | Nenhuma disrupção suspeitada de antemão ("descubra"). Critério de mudança de ideia declarado: evidência de que a adoção passou da maioria inicial (Rogers), ou de que a tecnologia não rompe nada. |
| extra | Profundidade e modo | Três ordens; partir de uma inovação/tema, não de um setor |

**Lacuna de enquadramento assumida:** a pergunta 2 não foi respondida. Em vez de travar a rodada, assumi o recorte triplo acima e o declaro aqui, conforme a instrução de assumir e declarar.

### 12.2. Fase 2 — Triagem de maturidade (tabela completa, incluindo o que foi descartado)

| Tecnologia | Classificação | Justificativa |
|---|---|---|
| Fotogrametria clássica (COLMAP, RealityCapture) | **Madura** | Padrão de mercado há mais de uma década. Não rompe nada hoje. Entra como contexto. |
| Escaneamento a laser terrestre / LiDAR profissional | **Madura** | Commodity cara e estabelecida em AEC e patrimônio. Nenhuma ruptura em curso. |
| Mocap com marcadores (Vicon, OptiTrack) | **Madura** | Padrão de estúdio há 20 anos; mantém vantagem estrutural em adereços. |
| LiDAR em celular | **Madura** | Embarcado desde 2020 na linha profissional de um fabricante. Já não surpreende. |
| **NeRF** | **Madura como marco, descartada como raiz** | Provou a tese em 2020 e foi superada em produção pelo 3DGS antes de romper cadeia de valor alguma. Marco científico, não disrupção econômica. |
| **3D Gaussian Splatting** | **Disruptiva, no limite da regra de ouro** | Técnica de 2023; padrão de fato só a partir de 2025-2026 (formato, suporte nativo). Passa no teste de três anos por pouco. **Consequência:** a raiz declarada não é a técnica, é o colapso de pipeline que ela viabiliza (4.1). |
| Reconstrução 3D de imagem única (Hunyuan3D, Tripo, TRELLIS) | **Disruptiva** | Quebra a relação entre número de observações e existência do ativo. É o que torna a invenção indistinguível do registro. |
| Mocap sem marcador (Move.ai, EasyMocap) | **Emergente em transição** | Ferramenta de produção corrente em 2026, mas em arranjo híbrido. Entra como mecanismo dentro de 4.1, não como raiz própria. |
| Profundidade monocular (Depth-Anything-V2) | **Emergente, já embarcada** | Componente, não produto. Habilita, não rompe. |
| 4D Gaussian / vídeo volumétrico | **Emergente** | Demonstrações de 2026 existem e impressionam; distribuição e compressão ainda em aberto. Não sustenta raiz sozinha no horizonte. |
| VPS + Large Geospatial Model (Niantic Spatial) | **Emergente com efeito disruptivo na infraestrutura** | Vira a raiz 4.4, com ressalva de causa frouxa declarada na seção 7. |
| Modelos de mundo generativos (Marble / World Labs) | **Disruptiva** | Não é captura, e é exatamente por isso que importa: produz o mesmo artefato pelo caminho oposto. Núcleo da raiz 4.3. |
| Padronização glTF (`KHR_gaussian_splatting`) | **Emergente, gatilho de infraestrutura** | Não é raiz; é o que permite que as raízes escalem. Aparece como mecanismo em 4.1, 4.2 e 4.4. |
| Upscalers generativos (Magnific) | **Madura no 2D** | Descartada como raiz, mas citada por analogia: "acabamento que inventa detalhe" é o mesmo movimento de 4.3, uma dimensão abaixo. |
| Vídeo estéreo de celular (spatial video) | **Madura, é canal** | Produto de massa. Descartada pela régua da disciplina. |

**Confirmação da triagem:** a skill exige confirmação do usuário antes de prosseguir. Sem interlocutor, prossegui com a triagem acima registrada como assunção declarada. As duas classificações que um interlocutor provavelmente contestaria estão marcadas em negrito no quadro.

### 12.3. Fase 5 — Rodada adversarial, item a item

**Descartados (6).**

| Efeito gerado | Teste que o derrubou | Motivo |
|---|---|---|
| "A profissão de modelador 3D deixa de existir até 2030." | Adoção acelerada + precedente histórico | Nenhuma técnica de produção madura desapareceu em cinco anos. Reescrito como `e2` (os postos de *entrada* encolhem primeiro). É a mesma armadilha do "QWERTY some até 2028" registrada no `DUVIDAS.md`. |
| "O mercado de mocap com marcadores desaparece até 2029." | Extrapolação linear | Contradito pela evidência de 2026: fluxo híbrido, adereços ainda difíceis para markerless. |
| "Redes sociais tornam-se majoritariamente 3D." | Adoção acelerada | Sem precedente. Tentativas anteriores de foto 3D em rede social não pegaram; não há mecanismo causal novo que explique por que agora. |
| "Museus perdem sentido porque tudo estará escaneado." | Efeito vazio | "Muda a sociedade" disfarçado. Não nomeia mecanismo. |
| "Todo mundo terá um avatar volumétrico de si em 2031." | Adoção acelerada + causa frouxa | Depende de plataforma de distribuição e de norma de identidade que não existem, e derivaria mais de avatares corporativos que de captura neural. |
| "O streaming de vídeo é substituído por cena navegável." | Extrapolação linear | Assume substituição total onde a história mostra coexistência longa. |

**Mantidos com ressalva (3).**

- `e9`, `e10` e filhos — **causa frouxa**. Espaço endereçável por máquina aconteceria por pressão de robótica e logística mesmo sem captura neural por sensor comum. Reconectado com o argumento de que é a captura barata que popula o mapa em escala; ressalva registrada na seção 7.
- Toda a disrupção 4.2 — **viés do usuário/enunciado**. Confirma o enquadramento que a descrição do tema já oferecia. Mantida porque a evidência independente sustenta, com o aviso explícito na seção 7.
- `e7.2` (queda de confiança do público) — **confiança rebaixada para baixa**. Depende de um evento de consciência pública que pode simplesmente não ocorrer. Prazo empurrado para 2030.

**Reescritos (4).**

- "Artistas 3D perdem emprego por causa da IA" → `e2`, restrito ao degrau de entrada e ao mecanismo específico da captura. O enunciado original sofria de causa frouxa: aconteceria por IA generativa 2D de qualquer forma.
- "O 3D fica barato" → `e1`, com o mecanismo nomeado (custo de produção cai para o custo de filmar).
- "Haverá regulação sobre captura" → `e4.2`, transformado em efeito falseável: um litígio de referência obriga a escolher entre três categorias jurídicas nomeadas.
- "Splats precisarão de metadados" → `e5` + `e5.1.1`, com o mecanismo econômico explícito (o risco migra para quem publica; a proveniência vira critério de compra).

**Resumo numérico da rodada adversarial:** 23 efeitos gerados na primeira derivação; **6 descartados**, **4 reescritos**, **3 mantidos com ressalva explícita**, 10 aprovados sem alteração. Acrescentei depois 3 efeitos que faltavam para satisfazer o mínimo de dois efeitos de primeira ordem por disrupção (`e3`, `e5`, `e10`), todos submetidos aos mesmos quatro testes.

**Re-rodada de disrupção:** a skill manda perguntar ao usuário se alguma disrupção deve ser re-rodada. Sem interlocutor, re-rodei por conta própria a 4.4, que era a mais frágil no teste de causa frouxa. Resultado: mantida com dois efeitos de primeira ordem em vez de três, e com a fronteira em relação ao tema 9 declarada em texto.

### 12.4. Buscas que não deram em nada

- **Uso de captura neural no Brasil (empresa, instituição, patrimônio).** Buscas em português combinando *gaussian splatting*, Brasil, startup, captura 3D e patrimônio retornaram apenas material internacional e conteúdo genérico de divulgação. Nenhum caso brasileiro verificável. **Lacuna registrada, não preenchida.** O recorte Brasil deste documento sustenta-se só sobre o processo regulatório da ANPD.
- **Números de adoção de markerless.** A página que promete estatísticas de mocap não fornece percentuais de penetração; as descrições por porte de estúdio são qualitativas. O documento não afirma números de adoção.
- **Objeção da Comissão Europeia ao projeto dinamarquês.** Apareceu em resumo de busca; não confirmada em nenhuma fonte aberta. Fora do documento.
- **Cifra de mercado de vídeo volumétrico.** Sem relatório rastreável. Fora do documento.
- **Incidente concreto de splat de pessoa usado sem consentimento em obra comercial.** Procurado como âncora do wildcard 1; não encontrado caso documentado. O wildcard está declarado como hipótese, não como fato reportado.

### 12.5. Caminhos abandonados

- **Ramo "captura para treino de robô e modelo de mundo".** Cortado por fronteira com o tema 9, apesar de ser um dos usos que mais puxam investimento hoje (a maior captação do setor é de uma empresa de direção autônoma).
- **Ramo "distribuição e compressão de splat na web".** Cortado por fronteira com o tema 15, embora a disputa por codec esteja registrada como sinal fraco na seção 6, porque a dimensão de poder que ela carrega pertence a este tema.
- **Ramo "reconstrução amodal e o que o modelo infere do lado oculto".** Absorvido dentro de `e7` em vez de virar disrupção própria; sozinho, é mecanismo, não ruptura.
- **Ramo "captura neural e acessibilidade".** Levantado e não desenvolvido por falta de evidência: descrição de ambiente para pessoa com deficiência visual a partir de mapa 3D persistente é plausível e não achei nada concreto em 2026 que sustentasse derivação. Fica anotado como lacuna para quem retomar o tema.
