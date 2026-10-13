---
tema: "Máquinas que veem qualquer coisa: visão de vocabulário aberto"
slug: maquinas-veem-visao-vocabulario-aberto
autor_login: vjmm
zona_de_interesse: "Visão computacional, XR e robótica"
data: 2026-10-12
horizonte: 2031
publico: "Professor e colegas da disciplina"
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 6
efeitos_ordem_3: 6
tecnologias_citadas: [CLIP, Grounding DINO, OWL-ViT, Segment Anything, SAM 2, Donut, OCR, DINOv2, modelos visão-linguagem]
fontes: 12
confianca: media
experimento: "Comparar, em imagens autorizadas e documentos sintéticos, uma pipeline de classes fixas/OCR com uma pipeline de prompts abertos e registrar erros, abstenções e diferenças de acessibilidade."
skill_usada: futurizacao-vjmm
publico_ok: false
---

## 1. Resumo

Visão de vocabulário aberto permite pedir a um modelo que encontre ou segmente conceitos descritos em linguagem, em vez de limitar toda tarefa a uma lista fixa de rótulos. CLIP demonstrou transferência zero-shot por alinhamento imagem-texto; Grounding DINO aplica descrições a detecção localizada; SAM e SAM 2 oferecem segmentação promptável em imagens e vídeo. Isso amplia usos possíveis em acessibilidade, inspeção e leitura de documentos, mas não equivale a percepção universal: os resultados dependem de dados, idioma, contexto, latência e avaliação. Até 2031, a hipótese central é que interfaces visuais flexíveis serão incorporadas em mais fluxos, com revisão humana nos usos de consequência alta. O contra-mapa é que modelos especializados, erros e governança podem manter a anotação e a validação como gargalos.

## 2. O tema

Em sistemas tradicionais, a tarefa é especificada por classes e exemplos pré-definidos: “detectar carro, pessoa e cachorro”. Em visão de vocabulário aberto, o usuário pode indicar categorias ou referentes com texto mais flexível — por exemplo, “a rachadura fina perto da janela” — para localizar, detectar, segmentar ou relacionar regiões visuais. A expressão cobre técnicas distintas: alinhamento imagem-texto para classificação zero-shot; detecção fundamentada em expressões; segmentação promptável; modelos multimodais que respondem perguntas sobre imagens; e interpretação de documentos como imagem.

O tema toca mídia e interação porque muda quem pode especificar o que uma máquina procura e como imagens, vídeo, documentos e interfaces se tornam pesquisáveis ou acionáveis. Merece um mapa de futuro porque a mudança não é apenas reconhecer mais rótulos: é deslocar a criação de categorias de um pipeline técnico prévio para uma interação em linguagem natural. Ainda assim, “aberto” significa flexível em comparação com vocabulário fixo, não ilimitado ou infalível.

**Recorte adotado:** horizonte 2031; público professor e turma; escopo global, destacando implicações brasileiras quando sustentadas; análise neutra-cética. Inclui acessibilidade, vigilância/privacidade, documentos e automação visual. Não foi solicitado descartar subtema algum. O usuário não informou crenças ou fontes prévias; não são atribuídas a ele.

## 3. Onde isso está hoje

**Já demonstrado.** CLIP treinado em pares imagem-texto mostrou transferência zero-shot para diversas tarefas sem treinamento específico em cada conjunto de dados. OWL-ViT explorou detecção zero-shot e condicionada por texto/imagem. Grounding DINO combina visão e linguagem para localizar objetos por nomes ou expressões referentes. O projeto Segment Anything criou modelo de segmentação promptável e um conjunto de dados de máscaras em grande escala; SAM 2 estendeu essa linha a imagens e vídeo com memória temporal e interações por prompt. São resultados de pesquisa e avaliações dos próprios trabalhos, não prova de desempenho universal em campo.

**Documentos.** Donut propôs compreensão de imagens de documentos sem uma etapa OCR separada. O artigo aponta motivadores concretos: custo computacional e erros de OCR que se propagam; também mostra que o método ainda é uma abordagem de pesquisa avaliada em tarefas e conjuntos específicos. Soluções comerciais continuam oferecendo OCR tradicional, análise de imagens e recursos de gestão de ativos; portanto, o caminho aberto e OCR-free convive com tecnologias maduras, não as substituiu.

**Limites atuais.** “Zero-shot” quer dizer que o modelo avaliado não recebeu treinamento específico no conjunto da tarefa; não significa que não houve dados ou treinamento prévios. Expressões ambíguas, objetos raros, cena fora de distribuição, resolução, oclusão, idioma e contexto podem degradar a saída. Máscaras plausíveis podem estar erradas; em vídeo, erros podem persistir no rastreamento. Em documentos, estrutura, escrita manual, idioma e layout são fontes de falha. Modelos maiores ainda implicam custo, latência, energia e dependência de serviço. Uma descrição gerada não é descrição acessível automaticamente adequada: W3C orienta que alternativas textuais sejam específicas à função e ao contexto.

**Quem constrói.** Trabalhos acadêmicos e laboratórios, incluindo OpenAI (CLIP), IDEA Research/colaboradores (Grounding DINO), Meta FAIR (SAM/SAM 2) e NAVER/colaboradores (Donut), demonstram linhas de pesquisa. Microsoft documenta serviços de visão, OCR e gestão de ativos digitais, evidência de oferta operacional, mas não prova que vocabulário aberto substituiu os sistemas anteriores.

**Distinção de maturidade:** OCR, classificação com classes fixas, detecção convencional e anotação manual são contexto maduro. Alinhamento multimodal e detecção/segmentação aberta já foram demonstrados em pesquisa e ferramentas, mas generalidade robusta, baixo custo, multilíngue, privacidade-preservadora e confiável em fluxos críticos permanecem emergentes. O produto não é sinônimo de ruptura social consumada.

## 4. As disrupções-raiz

### 4.1. Categorias visuais especificadas por linguagem

**O que rompe:** o pressuposto de que cada aplicação precisa pré-definir e treinar uma lista fechada de categorias para cada tarefa. **Por que agora:** pré-treinamento imagem-texto e modelos de alinhamento permitem transferir conceitos descritos por linguagem; CLIP e Grounding DINO demonstram essa possibilidade em benchmarks. **O que falta:** desempenho previsível em conceitos raros, expressões relacionais, idiomas e ambientes reais; custos compatíveis; protocolos de avaliação e modos seguros de abstenção.

### 4.2. Segmentação promptável em imagens e vídeo

**O que rompe:** a segmentação como tarefa rigidamente treinada para classes e dados específicos, movendo parte da especificação para prompts, pontos ou regiões indicadas pelo usuário. **Por que agora:** SAM e SAM 2 demonstraram segmentação promptável e extensão a vídeo, com ferramentas de coleta de dados interativa. **O que falta:** precisão estável em objetos pequenos/oclusos e continuidade temporal, limites de custo e energia e validação adequada em aplicações de maior consequência. A segmentação promptável não garante compreensão semântica completa.

### 4.3. Compreensão visual de documentos e telas

**O que rompe:** a dependência de pipeline OCR separado seguido por interpretação textual, ou de templates fixos para cada formato, em certos fluxos de compreensão de documentos. **Por que agora:** Donut mostra que modelos visão-texto podem mapear imagens de documentos diretamente para saídas estruturadas, enquanto modelos multimodais ampliam perguntas sobre cenas e interfaces. **O que falta:** robustez em layouts e línguas diversos, rastreabilidade da extração, taxas de erro suficientemente baixas e controles para dados pessoais. OCR-free não significa erro-free nem dispensa validação.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: Categorias visuais especificadas por linguagem
    efeitos:
      - id: e1
        ordem: 1
        efeito: Equipes conseguem testar categorias novas sem treinar um classificador separado para cada conceito.
        sinal: forte
        prazo: 2027
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Parte do trabalho de anotação migra de rotular imagens para revisar prompts, casos-limite e erros do modelo.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Critérios de auditoria passam a incluir quem definiu as categorias e quais grupos ou objetos ficaram invisíveis.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Aplicações de busca visual oferecem consultas por descrições mais específicas do que uma taxonomia fixa.
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Organizações passam a indexar mais acervos visuais sem preparar manualmente cada vocabulário de busca.
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Políticas de retenção e acesso precisam tratar embeddings e descrições derivadas como formas de dados potencialmente sensíveis.
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: Segmentação promptável em imagens e vídeo
    efeitos:
      - id: e3
        ordem: 1
        efeito: Criadores e analistas isolam regiões de imagem ou vídeo com prompts e interações simples.
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Prototipagem de edição, inspeção e anotação visual se torna mais acessível a pessoas sem treinamento em visão computacional.
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A autoria de conjuntos de dados de segmentação se desloca parcialmente para quem escolhe prompts e valida resultados.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Sistemas de vídeo permitem selecionar e acompanhar regiões sem criar um modelo fechado para cada cenário.
        sinal: medio
        prazo: 2029
        confianca: baixa
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Inspeção contínua por câmera fica tecnicamente mais simples de configurar em alguns ambientes.
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Disputas sobre consentimento, retenção e propósito de uso de imagens passam a acompanhar a configuração dos prompts e não só a instalação da câmera.
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: Compreensão visual de documentos e telas
    efeitos:
      - id: e5
        ordem: 1
        efeito: Alguns fluxos extraem campos de documentos diretamente da imagem, sem depender de OCR como estágio separado.
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Sistemas de processamento documental combinam extração visual e interpretação semântica em uma etapa de revisão.
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A conferência humana migra da transcrição campo a campo para a validação de exceções, proveniência e decisões automatizadas.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: Interfaces de software podem ser consultadas por descrições visuais em vez de depender apenas de seletores ou nomes de campos.
        sinal: fraco
        prazo: 2029
        confianca: baixa
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Automação de tarefas em telas pode alcançar interfaces sem API, mas continua sensível a mudanças de layout e interpretação incorreta.
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Fornecedores e equipes passam a documentar evidências visuais e confirmação humana para ações executadas por agentes.
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

O bloco mostra cadeias possíveis, não probabilidades calculadas. As raízes interagem: visão aberta pode alimentar segmentação e compreensão de documentos, mas as falhas também se propagam de uma etapa para outra. O efeito de vigilância depende de implantação, custo, autorização e política — a possibilidade técnica não prova adoção. Em acessibilidade, uma descrição útil depende da tarefa e da pessoa; automatizar geração não substitui testes com usuários. O YAML não expressa atores que resistem, distribuição de custos, diferenças entre setores nem caminhos em que a tecnologia não escala.

## 6. Sinais fracos e wildcards

- **Sinal fraco — interface por conceito:** Grounding DINO e SAM mostram interfaces em que o usuário descreve a região ou o conceito, em vez de escolher uma classe fechada. Isso pode virar interface comum, mas os trabalhos consultados são demonstrações de modelo/benchmark, não prova de uso cotidiano em escala.
- **Sinal fraco — documentos sem OCR:** Donut demonstra uma alternativa de pesquisa ao pipeline OCR → compreensão. O sinal relevante é mudança arquitetural, não substituição generalizada de OCR.
- **Sinal fraco — vídeo interativo:** SAM 2 introduz memória temporal e segmentação em streaming. Se a latência, consistência e custo melhorarem, prompts poderão selecionar coisas ao longo do tempo, não apenas numa imagem isolada.
- **Wildcard, baixa probabilidade/alto impacto:** óculos de consumo executam localmente segmentação aberta contínua e anunciam em voz baixa o que há no campo de visão. Isso poderia ampliar acessibilidade e também normalizar identificação persistente de objetos, pessoas e locais. Depende de hardware, bateria, privacidade e consentimento; não é previsão central.

## 7. Contra o próprio mapa

1. **Extrapolação linear:** supor que mais conceitos detectáveis hoje resultará em compreensão confiável de qualquer cena é extrapolação. A roda reduz a afirmação a consultas flexíveis e aplicações delimitadas.
2. **Adoção acelerada:** a cadeia “modelo → indexação de todo acervo → novas regras de privacidade em 2031” pode avançar mais lentamente por integração, custo, risco jurídico e qualidade. Reduzimos a confiança dos efeitos mais distantes a baixa.
3. **Disrupção que pode falhar:** segmentação promptável pode continuar sendo assistência especializada, com desempenho irregular em vídeo e contextos críticos. Se assim for, anotação e modelos específicos continuarão centrais e a mudança de profissão será menor.
4. **Causa alternativa:** automação de documentos pode se ampliar por OCR melhor, templates e APIs, sem modelos OCR-free. A hipótese de ruptura só se sustenta se a abordagem visual integrada melhorar robustez, custo ou capacidade em documentos variados.
5. **Viés de seleção:** o tema foi escolhido pelo aluno, mas ele não relatou por quê; não atribuímos interesse pessoal específico. O documento pode privilegiar novidades de laboratórios e demos públicas porque são mais fáceis de localizar do que implantações silenciosas, falhas e experiências de usuários brasileiros.
6. **Risco de exagero:** “vocabulário aberto” é frequentemente apresentado como “qualquer coisa”. A expressão é relativa à taxonomia fixa. Benchmarks de zero-shot medem tarefas definidas e não autorizam extrapolar para todo objeto, idioma, condição visual ou consequência.

## 8. O que a máquina errou

Na pesquisa inicial, o assistente tentou usar dois IDs arXiv inferidos incorretamente: um era trabalho de engenharia elétrica e outro de física matemática, sem relação com o tema. A leitura dos títulos e resumos permitiu detectar e descartar essas referências antes de usá-las como evidência. Também foi necessário conter a formulação enganosa “ver qualquer coisa”: a evidência disponível demonstra generalização a vocabulários e benchmarks específicos, não visão universal. O documento não converte hipóteses sociais em dados observados.

## 9. Três cenários para 2031

### Provável

Em 2031, busca visual aberta, segmentação por prompts e modelos multimodais aparecem em mais ferramentas de criação, inspeção e tratamento documental, mas em sistemas delimitados e frequentemente com fallback para OCR, taxonomias fechadas ou revisão humana. Os ganhos são mais claros na configuração de tarefas e prototipagem do que em precisão universal. A adoção varia por custo, risco e acesso a dados.

### Desejável

Em 2031, modelos visuais abertos ajudam pessoas a explorar imagens e documentos sem exigir que equipes criem uma classe para cada caso. Sistemas informam incerteza, permitem corrigir descrições e guardam proveniência; organizações testam resultados em idiomas e grupos diversos e oferecem processamento local quando a privacidade exige. Ferramentas de acessibilidade são avaliadas com seus usuários, sem confundir legenda automática com descrição adequada.

### Indesejável

Em 2031, a facilidade de perguntar por qualquer conceito normaliza análise contínua de câmeras e acervos pessoais. Sistemas dão respostas confiantes porém incorretas, e a presença de um botão de revisão serve de justificativa sem revisão efetiva. Pessoas afetadas têm pouca visibilidade sobre prompts, retenção ou contestação; erros e dados de treinamento reproduzem desigualdades, enquanto organizações transferem a responsabilidade para o usuário final.

## 10. O experimento

**Protótipo:** uma comparação pequena, executável em sala, entre (A) pipeline convencional com OCR ou classes fixas e (B) ferramenta de visão que aceite descrição textual, usando imagens públicas/autorizadas e documentos sintéticos sem dados pessoais. Cada pessoa faz algumas tarefas iguais: localizar um objeto descrito, segmentar uma região e extrair um campo de documento; registra acerto, erro, abstenção, tempo e necessidade de correção.

**Pergunta sobre o futuro:** especificar por linguagem realmente torna a percepção visual acessível a mais pessoas e reduz o custo de preparar categorias, ou apenas desloca o trabalho para corrigir erros menos previsíveis?

**Tecnologia emergente:** detecção/segmentação aberta e compreensão multimodal de documentos. OCR, classificação fixa e leitura humana são referências maduras para comparação, não a novidade do experimento.

**Atividade da turma:** comparar duas interfaces com os mesmos casos; incluir pelo menos um prompt ambíguo, uma imagem com oclusão, um documento com layout incomum e um caso em que o sistema deveria se abster. Os participantes anotam a confiança percebida versus o acerto real. Para acessibilidade, avaliar com pessoa usuária voluntária e consentimento; sem isso, não alegar que o protótipo melhora acessibilidade.

**Resultado que mudaria o mapa:** se a solução aberta exigir quantidade semelhante de preparação e correção, falhar mais em descrições relacionais/ambíguas, ou não trouxer ganho mensurável de tempo/usabilidade sobre o baseline, reduziríamos a expectativa de substituição de taxonomias e de ampliação de acesso. Se os erros forem sistematicamente difíceis de detectar, aumentaríamos a preocupação com automação em contextos de vigilância ou decisão.

## 11. Fontes

1. Radford et al., “Learning Transferable Visual Models From Natural Language Supervision” (CLIP), arXiv 2021. Sustenta alinhamento imagem-texto e avaliação de transferência zero-shot; não demonstra entendimento universal. **Alta** para o método e resultados reportados pelos autores; desempenho é limitado aos experimentos descritos. https://arxiv.org/abs/2103.00020
2. Minderer et al., “Simple Open-Vocabulary Object Detection with Vision Transformers” (OWL-ViT), ECCV 2022. Sustenta detecção aberta condicionada por texto/imagem e desafios de escala/treinamento. **Alta** para o artigo e benchmarks reportados. https://arxiv.org/abs/2205.06230
3. Liu et al., “Grounding DINO: Marrying DINO with Grounded Pre-Training for Open-Set Object Detection”, arXiv 2023, versão 2024. Sustenta detecção por nomes e expressões referentes; AP informado é do benchmark citado, não garantia em campo. **Alta** para os resultados do artigo. https://arxiv.org/abs/2303.05499
4. Kirillov et al., “Segment Anything”, arXiv 2023. Sustenta o projeto de segmentação promptável, sua escala de dados declarada e as avaliações zero-shot. **Alta** para descrição do sistema e resultados publicados; desempenho não é universal. https://arxiv.org/abs/2304.02643
5. Ravi et al., “SAM 2: Segment Anything in Images and Videos”, arXiv 2024. Sustenta extensão a vídeo, memória temporal e streaming, conforme avaliação dos autores. **Alta** para a arquitetura e experiências descritas. https://arxiv.org/abs/2408.00714
6. Kim et al., “OCR-free Document Understanding Transformer” (Donut), ECCV 2022. Sustenta a abordagem OCR-free e discute custo, inflexibilidade e propagação de erros de pipelines OCR. **Alta** para a proposta e tarefas avaliadas; não prova substituição do OCR em produção. https://arxiv.org/abs/2111.15664
7. Yang et al., “The Dawn of LMMs: Preliminary Explorations with GPT-4V(ision)”, arXiv 2023. Sustenta exemplos e análise qualitativa de modelos multimodais de linguagem e visão; é uma exploração preliminar, não avaliação exaustiva. **Média**. https://arxiv.org/abs/2309.17421
8. Microsoft Learn, “What is Azure Vision in Foundry Tools?”, atualizado 2026. Sustenta que serviços comerciais seguem oferecendo OCR, análise de imagem e gestão de ativos; documento de fornecedor, útil para oferta, não adoção independente. **Média-alta** para o catálogo descrito. https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/overview
9. W3C WAI, “Images Tutorial”, atualizado 08/04/2026. Sustenta que texto alternativo depende da função e contexto da imagem e deve transmitir a informação pertinente; não avalia modelos de visão. **Alta** como orientação de acessibilidade web. https://www.w3.org/WAI/tutorials/images/
10. NIST, “AI Risk Management Framework”. Sustenta abordagem de identificar e gerir riscos a indivíduos, organizações e sociedade em desenho, uso e avaliação de IA; não é regulação específica de visão aberta. **Alta** como framework institucional. https://www.nist.gov/itl/ai-risk-management-framework
11. CIn/UFPE, “Tema 11 — Máquinas que veem qualquer coisa: visão de vocabulário aberto”, página dos temas da disciplina. Sustenta o enquadramento e perguntas de pesquisa escolhidos pela turma (SAM, DINOv2, Donut etc.); é material da disciplina, não fonte independente de desempenho. **Média** para enquadramento. https://tendencias-midia-interacao.vercel.app/temas/
12. CIn/UFPE, “Formato do documento de tendência”. Sustenta estrutura, metadados e requisitos formais da entrega. **Alta** para as regras do curso. https://tendencias-midia-interacao.vercel.app/materiais/formato-documento-tendencia/

## 12. Anexo — o levantamento bruto

### Enquadramento da entrevista

- Tema e login conferidos no site e histórico: vjmm, tema 11.
- O usuário confirmou que o mapa pode cobrir todos os subtemas sugeridos: acessibilidade, vigilância/privacidade, documentos e automação de trabalho visual.
- Horizonte 2031, público da disciplina, escopo global com atenção ao Brasil e tom neutro-cético foram opções propostas pelo assistente e aceitas pelo usuário (“pode fazer sobre tudo que você falou”).
- O usuário não relatou intuição ou fonte pessoal prévia. Esse campo permaneceu desconhecido.

### Busca e descartes

- CLIP (arXiv:2103.00020), OWL-ViT (2205.06230), Grounding DINO (2303.05499), SAM (2304.02643), SAM 2 (2408.00714), Donut (2111.15664) e exploração de LMMs/GPT-4V (2309.17421) foram abertos e seus resumos/metadados consultados.
- Páginas oficiais consultadas: Microsoft Learn sobre Azure Vision; W3C WAI Images Tutorial; NIST AI RMF; materiais TMI sobre tema e formato.
- A página do curso cita SAM 3 e DINOv3; esta versão do documento não depende de alegações específicas sobre esses sistemas porque não foi feita verificação independente suficiente para os seus detalhes.
- IDs inicialmente consultados que resultaram em outros temas foram descartados após conferência de título: arXiv:2305.19752 (engenharia elétrica) e arXiv:2403.05137 (física matemática). Não são fontes deste mapa.

### Efeitos e alternativas considerados

- Separar a disrupção de categoria aberta da segmentação promptável e de compreensão de documentos, para não chamar toda visão multimodal de uma única mudança.
- Automação de interface foi mantida como ramo especulativo de baixa confiança: não foi tratada como capacidade geral já alcançada.
- Acessibilidade aparece como possibilidade condicionada por desenho, teste com usuários e contexto; nenhuma alegação de benefício já comprovado foi feita.
- Vigilância aparece como risco e wildcard condicionado a implantação, custo, política e consentimento; não como tendência inevitável.
- Oportunidade e efeitos negativos foram mantidos juntos; as cadeias de ordem 3 têm confiança baixa.
