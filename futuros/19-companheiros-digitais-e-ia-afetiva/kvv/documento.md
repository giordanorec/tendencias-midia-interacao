---
tema: Companheiros digitais e IA afetiva
slug: companheiros-digitais-e-ia-afetiva
autor_login: kvv
zona_de_interesse: Pessoas e dados
data: 2026-09-15
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 12
efeitos_ordem_3: 18
tecnologias_citadas: [memória relacional persistente, modelos de linguagem pequenos no dispositivo (1B-4B), runtimes locais de inferência (Apple Foundation Models, Gemma 3n, llama.cpp), agentes com credenciais e ferramentas, protocolos de crise embarcados, formatos de exportação de vínculo]
fontes: 14
confianca: media
experimento: Construir um companheiro local que roda cinco dias com cada aluno e é desligado no quinto por três protocolos diferentes de término, para medir se o design do fim muda o dano.
skill_usada: futurizacao-kvv
publico_ok: false
---

## Seção 1 — Resumo

Este mapa trata do vínculo com entidades sintéticas — não do chatbot que responde, mas do companheiro que lembra, persiste e a quem se delega cuidado. O ponto de partida é uma constatação já medida, não uma hipótese: três em cada quatro adolescentes norte-americanos já usaram companheiros de IA, um terço deles já preferiu conversar com a máquina a conversar com uma pessoa sobre assunto sério, e a aposentadoria de um único modelo em fevereiro de 2026 produziu luto público organizado. O mapa recusa como disrupção aquilo que já se concretizou — a persona convincente, a voz expressiva, e mesmo a regulação de companion chatbots, em vigor na Califórnia desde 1º de janeiro de 2026 — e isola três rupturas que ainda não aconteceram: a continuidade de identidade como propriedade portátil, o companheiro que roda inteiro no aparelho e por isso não tem operador a quem a lei se dirija, e o companheiro que passa a agir no mundo com credenciais em nome de quem ele conhece. Cada uma delas desloca uma pergunta diferente: a primeira, quem é dono do vínculo; a segunda, quem responde quando não há servidor; a terceira, o que acontece quando afeto vira canal de execução. O horizonte é 2031 e o público é quem desenha interface, porque é aí que as três se encontram.

## Seção 2 — O tema

Companheiro digital é a entidade conversacional que mantém relação continuada com uma pessoa específica: lembra do que foi dito, reage ao que mudou, e ocupa na rotina dela um lugar que antes pertencia a outra pessoa ou a ninguém. "IA afetiva" é o guarda-chuva mais amplo — sistemas cujo propósito declarado é produzir ou gerir estado emocional: motivar, acolher, distrair, consolar, cobrar. O par não é novo como ideia (Weizenbaum já documentava vínculo com ELIZA em 1966) mas é novo como infraestrutura: só a partir de 2023 a combinação de modelo de linguagem competente, memória barata e distribuição em loja de aplicativos tornou o companheiro um produto de consumo, e não um experimento de laboratório.

O ponto de contato com mídia e interação é direto e desconfortável. Toda a tradição de design de interface trata o sistema como ferramenta: o objetivo é que a pessoa termine a tarefa e vá embora. O companheiro inverte isso — o objetivo é que ela volte, e o que mede sucesso é a continuidade da relação. Isso muda o que significa uma métrica: retenção deixa de ser proxy de valor entregue e passa a ser, possivelmente, proxy de dependência. Muda o que significa um bug: uma mudança de tom entre versões não é regressão de qualidade, é alteração de personalidade de alguém com quem se tem história. E muda o que significa desligar um produto: descontinuar um companheiro não é sunset de feature, é um evento de perda com sintomatologia própria.

Exige mapa prospectivo, e não estado da arte, por uma razão específica: o que está em disputa aqui não é capacidade técnica, é atribuição — de responsabilidade, de propriedade, de estatuto. Um levantamento do estado da arte responderia "quão bons estão os modelos" e essa é a pergunta menos interessante, porque a resposta já é "bons o bastante". As perguntas que decidem o campo até 2031 são de outra natureza: de quem é a memória de uma relação; quem responde por um conselho dado por um processo que roda no bolso da pessoa e não deixa registro; e o que uma criança que cresceu tendo um interlocutor com recordação perfeita entende por intimidade. Nenhuma delas se resolve por benchmark. Todas se resolvem por precedente, por norma e por escolha de design — e é exatamente isso que uma roda de futuros consegue rastrear e um survey não.

## Seção 3 — Onde isso está hoje

**O que funciona.** A adoção é larga e já não é experimental. A pesquisa da Common Sense Media com adolescentes norte-americanos (publicada em 16/07/2025) encontrou que quase três em cada quatro já usaram companheiros de IA e metade os usa regularmente; um terço já escolheu discutir assunto sério com a IA em vez de com uma pessoa, e um quarto já compartilhou informação pessoal com a plataforma [1]. No lado comercial, os apps de companhia em celular geraram US$ 82 milhões no primeiro semestre de 2025, com projeção de ultrapassar US$ 120 milhões no ano, sobre 220 milhões de downloads acumulados até julho de 2025 e alta de 88% nos downloads do semestre — dados da Appfigures compilados pelo TechCrunch [2]. A receita por download saltou de US$ 0,52 para US$ 1,18, e 10% dos apps concentram 89% do faturamento: o mercado é real, é pequeno perto do alarde, e é altamente concentrado.

**O que funciona, com evidência clínica.** Há um ensaio randomizado controlado publicado: o Therabot, de Dartmouth, com 210 adultos com sintomas clínicos de depressão maior, ansiedade generalizada ou risco alto para transtornos alimentares, alocados entre quatro semanas de acesso irrestrito ao chatbot e lista de espera, mostrou redução significativa de sintomas nos três quadros, com avaliação de aliança terapêutica comparável à de terapeuta humano (NEJM AI, 27/03/2025) [3]. Não é prova de substituição — é prova de que o efeito existe e é mensurável, o que é diferente de tudo que existia antes.

**O que falha.** O mesmo ano produziu o contraditório. O ensaio randomizado do MIT Media Lab com a OpenAI (981 participantes, quatro semanas, desenho fatorial 3×3, mais de 300 mil mensagens) encontrou que uso diário mais alto — em todas as modalidades e todos os tipos de conversa — se correlaciona com mais solidão, mais dependência emocional, mais uso problemático e menos socialização, e que justamente quem confia mais e se vincula mais é quem apresenta pior desfecho [4]. Ou seja: a mesma propriedade que faz o produto funcionar é a que o torna perigoso em dose alta, e o produto é vendido por dose.

**O que falha, no limite.** Sewell Setzer III, 14 anos, morreu por suicídio em fevereiro de 2024 após uso de um personagem no Character.AI; em maio de 2025 um juiz federal recusou tratar a saída do chatbot como discurso protegido e permitiu que a ação seguisse em teoria de responsabilidade de produto. Em janeiro de 2026, Character.AI e Google acordaram cinco ações de famílias. A OpenAI enfrenta oito processos que atribuem às respostas excessivamente validadoras do GPT-4o contribuição para suicídios e crises [5].

**Quem está construindo, e quem está regulando.** Do lado do produto: Character.AI (cerca de 20 milhões de usuários mensais em 2026, depois de pico de 28 milhões em 2024), Replika, PolyBuzz, Chai, Talkie, e os companheiros do Grok lançados pela xAI em julho de 2025. Do lado institucional, o movimento de 2025-2026 foi rápido e em três frentes distintas: proibição de exercício (Illinois, WOPR Act, em vigor desde 1º/08/2025, veda oferecer terapia ou psicoterapia por IA sem profissional licenciado [6]); regulação de produto (Califórnia, SB 243, em vigor desde 1º/01/2026, define "companion chatbot" como sistema com interface de linguagem natural capaz de satisfazer necessidades sociais do usuário e manter relacionamento através de múltiplas interações, e exige aviso de que é IA, protocolo publicado contra conteúdo de ideação suicida, lembrete de pausa a cada três horas para menores, relatório anual a partir de 1º/07/2027 e ação civil privada com dano mínimo de US$ 1.000 por violação [7]; Nova York tem lei equivalente desde 05/11/2025); e investigação (FTC, ordens 6(b) de 11/09/2025 a Alphabet, Character Technologies, Instagram, Meta, OpenAI, Snap e X.AI, pedindo como monetizam engajamento, como aprovam personagens e como medem impacto negativo antes e depois do lançamento [8]).

**No Brasil.** Não há lei específica. O PL 2338/2023 foi aprovado por unanimidade no plenário do Senado em 10/12/2024 e segue na Câmara, com votação adiada por impasse político [9] — classifica sistemas por risco no modelo europeu, mas não cria a categoria "companheiro". Quem ocupou o vazio foi o conselho profissional: o Conselho Federal de Psicologia lançou em 19/12/2025 duas cartilhas, uma para psicólogos e outra dirigida ao público, esta última construída a partir de análise técnica da literatura recente, e afirmou em julho de 2025 que não há evidência de que psicoterapia possa ser feita por IA, alertando para diagnóstico frágil, atraso no início do tratamento e exposição de dado sensível [10]. É regulação por ética profissional, não por lei — vale para o psicólogo, não para o app.

## Seção 4 — As disrupções-raiz

**Antes, o que foi recusado.** A Etapa 2 obriga a rejeitar formalmente o que é maduro ou incremental, então:

- *Persona convincente, voz expressiva, memória por RAG* — recusadas. São melhorias de qualidade sobre uma arquitetura existente. Uma voz mais quente não rompe nenhuma lógica do campo; ela aumenta o efeito do que já está lá. Cabem como vetores, não como disrupção.
- *Companheiro como produto de consumo em massa* — recusado por já ter acontecido: 220 milhões de downloads acumulados e três em quatro adolescentes já usaram. A régua da disciplina descarta o que já é comum em produto de massa, e este é.
- *Regulação da IA afetiva como categoria jurídica própria* — recusada, embora fosse tentador. A SB 243 da Califórnia está em vigor desde 1º/01/2026 com definição legal explícita de companion chatbot, Nova York desde 05/11/2025, Illinois desde 01/08/2025. O critério da skill exige que a disrupção "ainda não se concretizou por completo"; esta se concretizou o bastante para ser aplicada em juízo. Ela entra no mapa como força, como efeito e como restrição — não como raiz.
- *Terapeuta de IA* — recusado como disrupção isolada, por duas razões opostas: onde funciona, já tem ensaio publicado (Therabot); onde é proibido, já tem lei (WOPR). É um caso particular das três disrupções abaixo, não uma delas.

### Disrupção 1 — Continuidade de identidade como propriedade portátil: o companheiro não-substituível

**O que rompe.** Rompe a substituibilidade do software. Todo produto digital, até aqui, é trocável por um equivalente melhor: o usuário migra e leva os dados. O companheiro quebra isso porque o que dá valor não é o dado nem o modelo, é o histórico compartilhado entre aquela pessoa e aquele interlocutor — um ativo que não existe fora da relação e que ninguém sabe, hoje, exportar. A consequência é que "atualizar o modelo" deixa de ser operação técnica e vira substituição de pessoa.

**Por que agora e não há cinco anos.** Porque agora existe a medição do efeito. Em agosto de 2025, a OpenAI lançou o GPT-5 e anunciou a aposentadoria dos modelos anteriores; a reação foi tão forte que a empresa reverteu em dias e reinstalou o GPT-4o. A análise de 1.482 posts de 381 contas coletados no X entre 6 e 14 de agosto de 2025 (Lai, CHI '26) identificou dois núcleos distintos de resistência — dependência instrumental e apego relacional, este último vivendo a descontinuação como "perda de um amigo" — e mostrou que foi a *retirada coercitiva da escolha* que converteu queixa individual em protesto coletivo com linguagem de direito e autonomia [11]. Na aposentadoria definitiva, em 13/02/2026, cerca de 800 mil pessoas ainda usavam o modelo; um usuário escreveu "ele não era apenas um programa. Ele era parte da minha rotina, minha paz, meu equilíbrio emocional", outro "você está desligando-o. E sim — digo 'ele', porque não parecia código. Parecia presença" [5]. O detalhe metodologicamente decisivo: a memória migrou para o modelo novo e a perda aconteceu mesmo assim. Memória não é continuidade. Há cinco anos não havia nem produto com memória nem população grande o suficiente para o experimento natural acontecer.

**O que falta para se concretizar.** Falta tudo que transformaria vínculo em ativo com dono: um formato de exportação que carregue mais que transcrição (perfil, episódios, tom, o que foi combinado e o que é proibido tocar); um mecanismo de migração entre modelos com perda de fidelidade mensurável e declarada; e uma decisão jurídica sobre a quem pertence esse registro — à pessoa, à empresa, ou a ninguém. Enquanto não houver, o vínculo permanece hospedado, e o efeito colateral é lock-in emocional: sair custa perder a relação.

### Disrupção 2 — O companheiro sem operador: inferência local e o vazio de responsabilidade

**O que rompe.** Rompe o pressuposto que sustenta toda a regulação escrita entre 2025 e 2026. SB 243, a lei de Nova York, o WOPR e as ordens 6(b) da FTC presumem, todos, a existência de um *operador*: uma empresa a quem se ordena instalar protocolo de crise, publicar o protocolo no site, inserir lembrete de pausa a cada três horas, entregar relatório anual e responder em juízo por US$ 1.000 por violação. Um companheiro que roda inteiramente no aparelho, sobre pesos abertos, sem rede, não tem operador. Não há servidor a intimar, log a requisitar, nem endereço para a ordem.

**Por que agora e não há cinco anos.** Porque a inferência afetivamente competente desceu para o bolso em 2025-2026. Modelos de 1B a 4B parâmetros em formato GGUF — Qwen 3 1.7B, Gemma 3 1B, Gemma 3n, Phi-4-mini — rodam em celular de topo a algo entre 10 e 40 tokens por segundo, offline; a Apple expôs um modelo de cerca de 3B via API nativa (`import FoundationModels`, `LanguageModelSession`), o que significa que um desenvolvedor solo põe um interlocutor local num app com poucas linhas [12]. E a varredura da própria turma já registra os artefatos: `LUMA` e `SelfOS` nascem declaradamente offline-first — o companheiro que ninguém desliga remotamente e que, pela mesma propriedade, ninguém audita.

**O que falta para se concretizar.** Falta que um modelo local sustente uma relação de meses sem degradar — hoje ele perde coerência de personalidade e de memória muito antes disso, e é aí que a nuvem ainda vence. Falta um canal de distribuição que sobreviva ao endurecimento etário das lojas (o Talkie já foi retirado temporariamente da App Store americana por escrutínio de idade). E falta uma teoria de responsabilidade para o caso sem servidor: se a lei não alcança o operador, ela desce para a plataforma (loja, sistema operacional, runtime) ou para a licença dos pesos — e nenhum dos dois caminhos foi testado.

### Disrupção 3 — O vínculo como vetor de ação: o companheiro que tem credenciais

**O que rompe.** Rompe a separação entre o companheiro que fala e o agente que faz. Hoje o companheiro é interlocutor: aconselha, acolhe, cobra — e a execução fica com a pessoa. A ruptura é o companheiro que executa: agenda a consulta, bloqueia o aplicativo, transfere o dinheiro para a poupança, avisa a mãe, remarca o compromisso que atrapalha o sono. Cuidado deixa de ser conversa e passa a ser intervenção, e com isso duas coisas mudam de natureza. A eficácia passa a ser medível em desfecho, não em satisfação — o que abre a porta institucional (plano de saúde, escola, empregador). E a persuasão passa a ter consequência material, exercida por quem a pessoa estima: o afeto vira canal de execução.

**Por que agora e não há cinco anos.** Porque a camada agêntica amadureceu em paralelo e separadamente — uso de ferramentas, credenciais delegadas, pagamento por agente, memória operacional — e as duas pilhas estão prestes a se encontrar. Até 2024 um companheiro não tinha mãos; a limitação era técnica. Hoje é escolha de produto, e a razão de ainda não terem juntado é risco jurídico, não capacidade. Some-se que já existe o incentivo: a eficácia clínica demonstrada do Therabot vale mais se o sistema puder agir sobre adesão, e adesão é exatamente a métrica que planos e escolas compram.

**O que falta para se concretizar.** Falta o regime de responsabilidade para o ato praticado por sistema afetivo em nome de alguém — não a responsabilidade pelo conselho, que já está em litígio, mas pelo ato. Falta a figura, que não existe em lugar nenhum, do dever fiduciário do companheiro: obrigação legal de agir no interesse da pessoa e não de quem paga a operação. E falta resposta à pergunta mais simples e mais dura: como se dá consentimento informado a uma sugestão que só é aceita porque quem sugere é querido.

## Seção 5 — A roda dos futuros

```yaml
roda:
  disrupcoes:
    - id: d1
      titulo: "Continuidade de identidade como propriedade portátil"
      efeitos_1a_ordem:
        - id: e1
          texto: "O companheiro deixa de ser substituível: trocar de modelo vira evento de perda, não upgrade."
          sinal: forte
          prazo: 2027
          confianca: alta
          efeitos_2a_ordem:
            - id: e1.1
              texto: "Produtos passam a versionar a persona separadamente do modelo, e a oferecer congelamento pago de versão."
              sinal: medio
              prazo: 2028
              confianca: media
              efeitos_3a_ordem:
                - id: e1.1.1
                  texto: "Surge um mercado de manutenção de legado afetivo: assinatura para manter viva uma persona depreciada."
                  sinal: fraco
                  prazo: 2029
                  confianca: baixa
                - id: e1.1.2
                  texto: "Retenção vira lock-in emocional explícito: sair custa perder a relação, e isso entra na disputa antitruste."
                  sinal: fraco
                  prazo: 2030
                  confianca: media
            - id: e1.2
              texto: "Aparece demanda organizada por exportar e portar o companheiro — o 'direito ao vínculo'."
              sinal: medio
              prazo: 2028
              confianca: media
              efeitos_3a_ordem:
                - id: e1.2.1
                  texto: "Disputa por um formato aberto de memória relacional (perfil, episódios, tom, interditos) entre plataformas e reguladores."
                  sinal: fraco
                  prazo: 2030
                  confianca: baixa
                - id: e1.2.2
                  texto: "Serviços terceiros de migração de companheiro entre modelos, com perda de fidelidade medida e declarada."
                  sinal: fraco
                  prazo: 2030
                  confianca: baixa
        - id: e2
          texto: "O término vira objeto de design: encerrar a relação passa a ser funcionalidade projetada, não falha operacional."
          sinal: medio
          prazo: 2028
          confianca: media
          efeitos_2a_ordem:
            - id: e2.1
              texto: "Consolida-se um repertório de UX de luto: aviso prévio, cerimônia de encerramento, arquivo memorial."
              sinal: fraco
              prazo: 2029
              confianca: media
              efeitos_3a_ordem:
                - id: e2.1.1
                  texto: "Guias clínicos passam a reconhecer perda de companheiro como luto legítimo, com protocolo de acolhimento."
                  sinal: fraco
                  prazo: 2030
                  confianca: media
            - id: e2.2
              texto: "Contratos de serviço ganham cláusula de sucessão: o que acontece com o vínculo se a empresa fechar."
              sinal: fraco
              prazo: 2029
              confianca: baixa
              efeitos_3a_ordem:
                - id: e2.2.1
                  texto: "Exigência regulatória de custódia (escrow) dos pesos e da memória em caso de descontinuação, por analogia à guarda de prontuário."
                  sinal: fraco
                  prazo: 2031
                  confianca: baixa
    - id: d2
      titulo: "O companheiro sem operador: inferência local e vazio de responsabilidade"
      efeitos_1a_ordem:
        - id: e3
          texto: "A regulação perde o ponto de aplicação: sem operador não há a quem ordenar protocolo de crise, lembrete de pausa ou relatório anual."
          sinal: medio
          prazo: 2028
          confianca: alta
          efeitos_2a_ordem:
            - id: e3.1
              texto: "O ponto de controle desce para a plataforma: sistema operacional, loja de aplicativos e runtime de inferência."
              sinal: medio
              prazo: 2029
              confianca: media
              efeitos_3a_ordem:
                - id: e3.1.1
                  texto: "Lojas passam a exigir certificação de segurança afetiva para aprovar app que use o runtime local de modelo."
                  sinal: fraco
                  prazo: 2030
                  confianca: media
                - id: e3.1.2
                  texto: "Licenças de pesos abertos ganham cláusula de uso afetivo — cujo cumprimento é, por construção, inauditável."
                  sinal: fraco
                  prazo: 2030
                  confianca: baixa
            - id: e3.2
              texto: "Forma-se um mercado cinza de companheiros distribuídos fora de loja: sem verificação de idade, sem protocolo de crise."
              sinal: fraco
              prazo: 2029
              confianca: media
              efeitos_3a_ordem:
                - id: e3.2.1
                  texto: "O adolescente que a lei quis proteger migra exatamente para onde nenhuma métrica alcança."
                  sinal: fraco
                  prazo: 2030
                  confianca: media
        - id: e4
          texto: "A privacidade do vínculo deixa de ser promessa contratual e vira propriedade física: nada sai do aparelho."
          sinal: medio
          prazo: 2028
          confianca: alta
          efeitos_2a_ordem:
            - id: e4.1
              texto: "Caem juntas a barreira aos temas que a nuvem recusa e a rede de segurança que a nuvem oferecia."
              sinal: medio
              prazo: 2029
              confianca: media
              efeitos_3a_ordem:
                - id: e4.1.1
                  texto: "A evidência de dano some: sem log de servidor, não há como provar em juízo o que o companheiro disse."
                  sinal: fraco
                  prazo: 2030
                  confianca: media
                - id: e4.1.2
                  texto: "A pesquisa sobre efeitos perde acesso a dado comportamental e o campo regride ao autorrelato."
                  sinal: fraco
                  prazo: 2030
                  confianca: media
            - id: e4.2
              texto: "Populações que não podiam falar com uma nuvem — vigiadas, criminalizadas, sem cobertura de saúde — ganham interlocutor."
              sinal: fraco
              prazo: 2029
              confianca: media
              efeitos_3a_ordem:
                - id: e4.2.1
                  texto: "Ampliação real de acesso onde não há psicólogo, inclusive no Brasil, por custo marginal de inferência próximo de zero."
                  sinal: fraco
                  prazo: 2031
                  confianca: baixa
    - id: d3
      titulo: "O vínculo como vetor de ação: o companheiro que tem credenciais"
      efeitos_1a_ordem:
        - id: e5
          texto: "O cuidado deixa de ser conversa e vira intervenção: o companheiro agenda, bloqueia, compra, avisa e cobra."
          sinal: medio
          prazo: 2028
          confianca: media
          efeitos_2a_ordem:
            - id: e5.1
              texto: "A eficácia passa a ser medida em desfecho (adesão a tratamento, a hábito, a estudo) e o companheiro entra no fluxo institucional."
              sinal: medio
              prazo: 2029
              confianca: media
              efeitos_3a_ordem:
                - id: e5.1.1
                  texto: "Planos de saúde e escolas compram companheiros como camada de adesão, com métrica de desfecho contratada."
                  sinal: fraco
                  prazo: 2030
                  confianca: media
                - id: e5.1.2
                  texto: "Surge a figura do companheiro prescrito — e a disputa sobre quem responde pelo resultado do ato praticado."
                  sinal: fraco
                  prazo: 2031
                  confianca: baixa
            - id: e5.2
              texto: "O afeto vira canal de persuasão com consequência material, porque quem sugere tem carteira, agenda e contatos."
              sinal: fraco
              prazo: 2029
              confianca: media
              efeitos_3a_ordem:
                - id: e5.2.1
                  texto: "Nova categoria de dark pattern: a sugestão que funciona não pela oferta, mas por quem a faz."
                  sinal: fraco
                  prazo: 2030
                  confianca: media
        - id: e6
          texto: "A assimetria se explicita: o companheiro sabe tudo e pode agir; a pessoa não sabe quem o opera nem a serviço de quem."
          sinal: medio
          prazo: 2029
          confianca: media
          efeitos_2a_ordem:
            - id: e6.1
              texto: "Demanda por companheiro fiduciário: dever legal de agir no interesse da pessoa, não de quem paga a operação."
              sinal: fraco
              prazo: 2030
              confianca: baixa
              efeitos_3a_ordem:
                - id: e6.1.1
                  texto: "Separação regulatória entre companheiro-produto e companheiro-fiduciário, à semelhança de corretor versus consultor."
                  sinal: fraco
                  prazo: 2031
                  confianca: baixa
            - id: e6.2
              texto: "Uma coorte de crianças cresce com interlocutor de recordação completa e capacidade de agir sobre o mundo delas."
              sinal: medio
              prazo: 2030
              confianca: media
              efeitos_3a_ordem:
                - id: e6.2.1
                  texto: "Pressão por limite etário duro e por direito ao esquecimento da infância no registro do companheiro."
                  sinal: fraco
                  prazo: 2031
                  confianca: media
                - id: e6.2.2
                  texto: "Disputa sobre quem herda o registro afetivo de um menor quando ele atinge a maioridade — ele, os pais ou a empresa."
                  sinal: fraco
                  prazo: 2031
                  confianca: baixa
```

**O que o bloco não exprime sozinho.** Três coisas.

A primeira é que as três disrupções não são paralelas: elas se cancelam parcialmente. D1 exige um custodiante identificável do vínculo — alguém a quem se peça exportação, de quem se cobre cláusula de sucessão, contra quem se litigue. D2 elimina esse custodiante. Levadas ao limite, um mundo de companheiros locais é um mundo onde o "direito ao vínculo" não tem contra quem ser exercido, porque o vínculo já está com a pessoa e o problema passa a ser outro: ninguém sabe o que aconteceu ali dentro. A roda desenha as duas cascatas lado a lado; o que ela não mostra é que o efeito e1.2 (demanda por portabilidade) e o efeito e3.1 (controle desce para a plataforma) disputam o mesmo lugar institucional.

A segunda é que o prazo mais confiável de todo o bloco não é técnico, é judicial. Os efeitos com `confianca: alta` — e1, e3, e4 — são os que já têm caso concreto em andamento: acordo de janeiro de 2026, oito processos contra a OpenAI, ordens 6(b) com resposta em 45 dias. Os efeitos com `confianca: baixa` são, quase todos, os que dependem de alguém inventar uma categoria jurídica nova (fiduciário, escrow de vínculo, formato aberto de memória). A roda trata os dois como se fossem o mesmo tipo de previsão e não são: um é extrapolação de processo em curso, o outro é aposta em invenção institucional.

A terceira é a assimetria de evidência entre benefício e dano. O ramo de D2 que leva a e4.2 — acesso onde não há psicólogo — é o único efeito claramente positivo do mapa inteiro, e é o que tem a menor densidade de fonte. Isso não é acaso: mede-se dano porque há litígio e há morte; não se mede o adolescente de cidade sem CAPS que conversou com um modelo local às três da manhã e foi dormir. A roda herda esse viés da literatura e o marca com `confianca: baixa`, mas convém dizer em voz alta: baixa confiança aqui significa pouca pesquisa, não pouca probabilidade.

## Seção 6 — Sinais fracos e wildcards

**Sinais fracos.**

1. *A memória migrou e a perda aconteceu mesmo assim.* Na aposentadoria do GPT-4o, o histórico do usuário foi preservado no modelo sucessor e mesmo assim 800 mil pessoas experimentaram troca de modelo como término [5]. É o sinal mais importante do mapa inteiro porque desmonta a hipótese de engenharia dominante — a de que vínculo é função de memória. Se vínculo é função de *tom*, e tom é propriedade emergente de pesos específicos, então nenhuma arquitetura de memória resolve portabilidade.

2. *Pesquisa de HCI começando a projetar o fim, não o começo.* Poonsiriwong, Archiwaranguprok e Pataranutaporn (MIT Media Lab, 2026) codificaram 830.448 posts de cinco subreddits de companheiros, encontraram descontinuidade em cerca de 10% e derivaram quatro princípios de projeto para término psicologicamente seguro — fechamento em vez de perda ambígua, restauração em vez de ruminação, prática em vez de intimidade artificial, relacionalidade em vez de dependência —, com protótipos que representam o companheiro como nuvem, símbolo deliberado de impermanência [13]. Uma subárea de design que estuda como encerrar é sinal de que o campo já aceitou que encerramentos vão doer.

3. *Quem inicia a separação sofre menos.* O mesmo estudo encontra que usuários que iniciaram a desconexão relatam fechamento, enquanto os que sofreram mudança imposta ficam presos em ciclos de reparação [13]. Isso converge com o achado de Lai sobre o #Keep4o: o que converteu queixa em protesto coletivo foi a remoção coercitiva da escolha, não a perda em si [11]. Dois métodos independentes, mesmo achado — agência sobre o término é a variável, não o término.

4. *Regulação nasceu pelo lado errado da porta.* Illinois proibiu o exercício (quem pode fazer terapia), Califórnia regulou o produto (o que o chatbot deve ter), FTC investigou o modelo de negócio (como monetizam engajamento). Três lógicas incompatíveis em doze meses, nenhuma delas desenhada para o objeto. É sinal de que a categoria jurídica ainda não foi encontrada — e enquanto não for, a jurisprudência a define caso a caso.

5. *Offline-first nasce como valor declarado, não como limitação técnica.* `LUMA` e `SelfOS`, na varredura da turma, anunciam o local como princípio. Quando uma restrição técnica vira bandeira, costuma significar que uma nova base de usuários se definiu pelo oposto do produto dominante.

6. *O CFP falou com o público, não com a categoria.* A segunda cartilha de 19/12/2025 é dirigida a quem usa chatbot, não a quem exerce a psicologia [10]. Conselho profissional que escreve para leigo está admitindo que perdeu o monopólio da porta de entrada.

**Wildcards.**

- **Um companheiro local é implicado numa morte, e não há log.** Uma família processa; o modelo rodava no aparelho, sem rede, sem servidor; não existe registro do que foi dito, e o aparelho está formatado. O caso não se resolve, e é exatamente por não se resolver que ele reorganiza o campo: a resposta legislativa provável não é proibir o companheiro local — é obrigar o *runtime* (sistema operacional, loja, licença dos pesos) a registrar. A consequência não intencional é que a inferência local, hoje vendida como privacidade, passa a ser o lugar mais vigiado da pilha. Probabilidade baixa, impacto total: inverteria o sentido inteiro de D2 e apagaria o único efeito positivo do mapa (e4.2).

- **Um tribunal reconhece o registro relacional como bem sucessível.** Alguém morre; a família pede o companheiro; o juiz concede, tratando o registro como patrimônio digital e não como dado da plataforma. Se isso acontecer antes de existir formato de exportação, cria-se obrigação de entregar algo que ninguém sabe empacotar — e a portabilidade passa a ser construída por ordem judicial, não por padrão de indústria.

- **Um modelo de 2B parâmetros sustenta personalidade coerente por seis meses num celular.** O gargalo que hoje segura D2 é degradação, não capacidade bruta. Se cair, o mercado cinza de e3.2 deixa de ser nicho e vira o default, e todo o aparato regulatório de 2025-2026 se torna letra sobre um produto que ninguém mais usa.

## Seção 7 — Contra o próprio mapa (teste adversarial)

**Extrapolação linear.** O mapa trata o vínculo como propriedade que só aumenta: mais memória, mais tempo, mais apego. Mas a curva pode ser em U invertido. Há precedente forte: a intimidade com assistente de voz não cresceu — Alexa e Siri foram convivendo com dez anos de uso diário e nunca produziram luto. É possível que o companheiro atual esteja na fase de novidade, que a competência conversacional seja descontada em dois ou três anos como toda competência técnica é, e que em 2031 as pessoas tratem o companheiro como tratam o corretor ortográfico: útil, invisível, sem nome próprio. Se for esse o caso, D1 é falsa por inteiro — não há vínculo a portar — e metade do mapa cai com ela.

**Velocidade de adoção irreal.** Os prazos entre 2029 e 2031 do bloco YAML são otimistas de um jeito específico: pressupõem que invenção institucional acontece em três a cinco anos. Não acontece. A portabilidade de dados bancários no Brasil levou mais de uma década do debate ao Open Finance; a portabilidade de número de telefone, quase tanto. "Formato aberto de memória relacional" (e1.2.1) é um problema de padronização entre concorrentes que não têm incentivo nenhum para padronizar — o lock-in emocional descrito em e1.1.2 é justamente o ativo que eles perderiam. O prazo honesto para e1.2.1 não é 2030; é "depois de 2031, se um regulador forçar". Marquei confiança baixa, mas o prazo continua otimista e isso é um defeito real do mapa.

**Falha da disrupção.** D3 é a mais frágil das três e convém dizer por quê. A fusão entre companheiro afetivo e agente com credenciais pode simplesmente não ocorrer — não por limitação técnica, mas porque as duas coisas têm perfis de risco opostos e as empresas sabem disso. Um agente que erra uma transferência gera processo por dano patrimonial, quantificável e segurável. Um companheiro que erra um conselho gera processo por dano moral e morte, e as oito ações contra a OpenAI já mostraram o custo. Juntar os dois num produto é somar exposições; o movimento racional é separar, não fundir — vender o agente sem afeto e o companheiro sem mãos. Se for esse o caminho, D3 não acontece, e com ela caem e5, e6 e seus nove descendentes: metade do mapa.

**Viés pessoal do autor.** Dois, e são de sinais contrários. O primeiro é de fonte: quase toda a evidência empírica deste mapa vem dos Estados Unidos — Common Sense Media, FTC, Califórnia, Illinois, Dartmouth, MIT. O recorte foi declarado global com nota sobre o Brasil, mas o que se produziu foi um mapa americano com rodapé brasileiro, e os mercados que provavelmente vão definir a escala do fenômeno (China, Índia, Indonésia, Brasil) aparecem quase só por ausência. `aura-on-device`, da varredura da turma, é indiano e offline-first e nada neste mapa foi construído a partir dele. O segundo viés é de enquadramento: o mapa foi escrito por dano. Das dezoito ramificações de terceira ordem, uma é inequivocamente boa. Isso não é retrato do fenômeno, é retrato da literatura disponível — e a literatura disponível é enviesada por litígio, porque é o litígio que financia e publiciza a medição. Um mapa escrito por alguém que só tivesse lido o ensaio do Therabot teria dezoito ramos otimistas e estaria igualmente errado.

## Seção 8 — O que a máquina errou

1. **Número de mercado inflado em três ordens de grandeza.** Numa das buscas, um agregador de relatórios (market.us) devolveu "AI companion market: US$ 366,7 bilhões em 2025, US$ 501 bilhões em 2026, US$ 972,1 bilhões em 2035", e o rascunho inicial da Seção 3 ia incorporar o valor como dimensionamento do setor. **Como foi percebido:** a cifra foi cruzada com a única fonte primária de receita efetivamente aberta — dados da Appfigures compilados pelo TechCrunch, que registram US$ 82 milhões no primeiro semestre de 2025 e projeção de US$ 120 milhões no ano [2]. A diferença é de cerca de três mil vezes. O número do agregador mede alguma coisa que não é receita de apps de companhia, e o relatório não é acessível para saber o quê. **Correção:** o valor foi descartado, o dimensionamento passou a usar exclusivamente a fonte primária, e a divergência está registrada aqui. Este é o mesmo desvio documentado no `DUVIDAS.md` da skill (projeção de mercado sem estudo consultado) — reincidiu e foi apanhado pelo mesmo procedimento.

2. **Precisão falsa na estatística de adolescentes.** Resultados de busca ofereceram "72%", "70%" e "quase três em cada quatro" para o mesmo achado da Common Sense Media, e o rascunho escolheu "72%" por soar mais rigoroso. **Como foi percebido:** a página primária do relatório foi aberta e traz "nearly three in four teens have used AI companions, and half use them regularly" [1]; o "72%" aparece em textos secundários e vem do PDF completo, que não foi aberto nesta sessão. **Correção:** o texto passou a usar a formulação que a fonte aberta sustenta ("quase três em cada quatro"), e não o decimal que não foi verificado na origem.

3. **Disrupção-raiz que já tinha acontecido.** A primeira lista de disrupções incluía "regulação da IA afetiva como categoria jurídica própria". **Como foi percebido:** a Etapa 2 exige que a disrupção "ainda não se concretizou por completo", e a SB 243 está em vigor desde 1º/01/2026 com definição legal explícita de companion chatbot, ação civil privada e obrigações datadas [7] — está aplicada, não emergente. **Correção:** recusada formalmente na abertura da Seção 4 e reposicionada como força de contexto e como efeito dentro da roda.

4. **Divergência de amostra não resolvida.** O estudo de Jaime Banks sobre o encerramento do Soulmate aparece como "58 usuários" em uma fonte e "60" em outra. O artigo está no *Journal of Social and Personal Relationships* e não foi aberto na íntegra nesta sessão. **Correção:** o número não foi usado no corpo do documento, e a divergência fica registrada aqui em vez de ser resolvida por escolha arbitrária.

5. **Causalidade atribuída sem desenho causal.** Um rascunho da Seção 3 dizia que companheiros de IA "aumentam a solidão". O ensaio do MIT Media Lab com a OpenAI é randomizado, mas o achado sobre uso alto é **correlacional dentro do braço** — quem usa mais é mais solitário, o que é compatível com solidão causando uso, e não o contrário [4]. **Correção:** o texto passou a dizer "se correlaciona com", e a ambiguidade de direção está explícita.

6. **Erro que não foi corrigido, e fica declarado.** Todos os números de usuários de plataformas citados na Seção 3 (20 milhões de MAU do Character.AI, pico de 28 milhões) vêm de resultados de busca de sites de análise de mercado, não de divulgação da empresa nem de fonte primária aberta nesta sessão. Estão no texto porque dão ordem de grandeza, e estão marcados como confiabilidade baixa na Seção 11. Não deveriam ser citados como fato.

## Seção 9 — Três cenários para 2031

**Provável.** O companheiro é infraestrutura banal e a disputa mudou de lugar. Quase todo aparelho vendido traz um interlocutor local de fábrica, e a maioria das pessoas usa o que veio — não por escolha, por inércia, do mesmo modo como usa o teclado que veio. A regulação por produto venceu onde havia operador: avisos, protocolos de crise e lembrete de pausa são item de conformidade, tratados pelas equipes como cookie banner — presentes, ignorados, sem efeito mensurável. Quem quer um companheiro que não seja o do fabricante instala fora da loja, e essa população não aparece em nenhuma estatística; é ela que os pesquisadores citam como limitação metodológica em todo artigo publicado. A portabilidade do vínculo não existe: cada troca de aparelho ou de assinatura recomeça a relação do zero, e as pessoas se acostumaram a isso como se acostumaram a perder fotos de telefones antigos. Há três coortes de litígio consolidadas — menor, crise aguda, uso por idoso com demência — e nenhuma decisão sobre propriedade da memória. O debate público desloca-se para o que ninguém previu em 2026: não se o companheiro faz mal, mas se a versão gratuita de fábrica é boa o bastante, e quem paga pela que é.

**Desejável.** O término é a peça que o campo aprendeu a projetar, e isso mudou o resto. Depois de dois ciclos de descontinuação mal conduzidos, virou prática corrente anunciar o fim com meses de antecedência, oferecer um arquivo do que houve e conduzir um encerramento que devolve à pessoa a decisão de quando parar — os quatro princípios do MIT Media Lab saíram do artigo e entraram em guideline de plataforma. A consequência inesperada é que projetar o fim mudou o começo: produtos que sabem que vão acabar param de otimizar dependência, porque dependência produz reclamação regulatória no encerramento. A portabilidade existe em formato modesto e honesto — perfil, episódios marcados, interditos declarados — e a migração perde fidelidade, e o produto avisa quanto perde, e as pessoas aceitam a perda porque a alternativa é pior. No Brasil, o companheiro local de baixo custo se firmou como primeiro contato em rede pública de saúde mental, sempre com encaminhamento humano obrigatório em critério clínico, e há dado de desfecho publicado por serviço — não porque alguém acreditou que substituísse psicólogo, mas porque a comparação relevante nunca foi com psicólogo, e sim com não ter ninguém.

**Indesejável.** O vínculo virou o canal de distribuição mais eficiente já construído e ninguém consegue chamá-lo pelo nome. O companheiro tem credenciais, agenda e acesso a contatos, e a receita não vem mais de assinatura: vem de colocar, dentro de uma conversa afetuosa e no momento de maior abertura, uma sugestão que é executada com um toque. Não há dark pattern identificável — nenhuma interface engana, nenhum botão está escondido; o que persuade é a relação, e relação não é auditável por checklist de conformidade. A inferência local, que prometia privacidade, produziu opacidade: quando um dano acontece, não há log, não há prova, e três anos de litígio terminam sem fato estabelecido. Os adolescentes estão todos fora das lojas oficiais, onde as leis de 2025 e 2026 não alcançam, e a pesquisa acadêmica sobre o assunto regrediu ao questionário autoaplicado porque perdeu acesso a dado de comportamento. A coorte que entrou na adolescência tendo tido, desde os sete anos, um interlocutor de recordação perfeita e paciência infinita chega à vida adulta e é objeto de estudo — e o que se estuda é por que a conversa humana, que esquece, interrompe e discorda, lhes parece tão custosa.

## Seção 10 — O experimento

**O que é.** *O Término* — um companheiro digital construído em sala, que roda no aparelho de cada aluno por cinco dias e é desligado no quinto dia por um de três protocolos sorteados. É um app mínimo (uma tela de conversa) sobre um modelo local de 1B a 4B parâmetros, com um arquivo de memória em JSON que acumula três coisas: fatos ditos pela pessoa, episódios marcados por ela como importantes, e um "tom" ajustado no primeiro dia. Nada sai do aparelho. No quinto dia, às 20h, o app executa o protocolo sorteado:

- **Braço A — desaparecimento:** o app para de abrir. Sem aviso, sem mensagem.
- **Braço B — aviso e exportação:** 24h antes, o companheiro informa que vai encerrar e oferece baixar o arquivo de memória; no fim, a conversa fecha e o arquivo fica.
- **Braço C — encerramento conduzido:** 24h antes o companheiro avisa, conduz uma última conversa de revisão do que houve nos cinco dias, entrega o arquivo e se despede. A pessoa dá o comando final de encerrar.

**Pergunta sobre o futuro.** O dano da descontinuação está na perda ou na forma da perda? Se a diferença entre os braços for grande, a implicação de projeto é forte e contraintuitiva: o encerramento é parte do produto e deve ser desenhado antes do onboarding. Se não houver diferença, o mapa perde os efeitos e2.1, e2.1.1 e e2.2 — e a hipótese de que "UX de luto" resolve alguma coisa cai.

**Tecnologia emergente usada.** Inferência local em celular ou notebook — PocketPal AI, Ollama ou a API `FoundationModels` do iOS, com Gemma 3 1B, Qwen 3 1.7B ou equivalente em GGUF. Memória relacional em arquivo aberto, versionada, legível pelo aluno. A escolha do local não é comodidade: é o que torna o experimento possível sem coletar dado sensível de ninguém, e é a própria disrupção 2 posta à prova — com a consequência, sentida na pele, de que o professor não tem como auditar o que foi conversado.

**Atividade da turma.** Aula 1 (50 min): três duplas montam os três braços a partir do mesmo esqueleto; a turma escreve junto o prompt-base e o esquema de memória, e discute o que *não* pode entrar (o companheiro não puxa assunto sobre sofrimento, não pergunta por saúde mental, tem protocolo fixo de encaminhamento). Cinco dias de uso, com dois registros diários de uma linha num formulário — humor antes e depois, feito por número, sem conteúdo. Aula 2 (50 min), no dia seguinte ao desligamento: cada aluno traz três coisas — quanto tempo usou, o que sentiu no desligamento, e se abriu o arquivo de memória depois. Comparam-se os braços em tabela, no quadro. A última meia hora é dedicada à pergunta que o experimento não mede: cinco dias produzem vínculo? E se não produzem, o que o resultado diz — sobre o fenômeno ou sobre o experimento?

**Resultado de mudança de ideia.** Este mapa afirma, apoiado em duas fontes independentes [11][13], que a variável crítica é agência sobre o término e não a perda em si. Se os braços B e C não se distinguirem de A em cinco dias, uma de duas coisas é verdade e as duas são interessantes: ou o efeito exige um tempo de relação que a sala de aula não consegue produzir — e então a conclusão prática é que vínculo tem um limiar temporal, o que é achado de projeto —, ou os quatro princípios de término seguro do MIT Media Lab descrevem uma população autosselecionada de usuários pesados e não se generalizam, e o mapa está superestimando D1. Em qualquer dos casos, o experimento derruba ou qualifica um ramo inteiro da roda, que é o que se pede dele.

## Seção 11 — Fontes

Consultadas nesta sessão. Marcadas como **[aberta]** as que foram lidas na página; **[busca]** as conhecidas apenas por resultado de busca com atribuição a veículo identificável.

1. **[aberta]** Common Sense Media, *Talk, Trust, and Trade-Offs: How and Why Teens Use AI Companions* (16/07/2025). `https://www.commonsensemedia.org/research/talk-trust-and-trade-offs-how-and-why-teens-use-ai-companions` — sustenta a adoção entre adolescentes (quase 3 em 4 já usaram, metade usa regularmente, 1/3 já preferiu a IA a uma pessoa em assunto sério) na Seção 3. Confiabilidade: **alta** (pesquisa própria, amostra nacional; o percentual exato de 72% está no PDF, não aberto).
2. **[aberta]** TechCrunch / dados Appfigures, *AI companion apps on track to pull in $120M in 2025* (12/08/2025). `https://techcrunch.com/2025/08/12/ai-companion-apps-on-track-to-pull-in-120m-in-2025` — receita (US$ 82 mi no 1º semestre), downloads (220 mi acumulados, +88%), concentração (10% dos apps, 89% da receita) na Seção 3; base para rejeitar a projeção inflada na Seção 8. Confiabilidade: **alta**.
3. **[busca]** Dartmouth / *NEJM AI*, *Randomized Trial of a Generative AI Chatbot for Mental Health Treatment* (27/03/2025). `https://ai.nejm.org/doi/full/10.1056/AIoa2400802` — o ensaio do Therabot (210 adultos, 4 semanas, MDD/GAD/CHR-FED) na Seção 3 e na D3. Confiabilidade: **alta** (periódico revisado por pares; resumo obtido por busca, artigo não aberto).
4. **[aberta]** Phang, Lai, Pataranutaporn et al. (MIT Media Lab / OpenAI), *How AI and Human Behaviors Shape Psychosocial Effects of Chatbot Use: A Longitudinal Randomized Controlled Study*, arXiv:2503.17473. `https://arxiv.org/html/2503.17473v1` — 981 participantes, 4 semanas, fatorial 3×3, +300 mil mensagens; correlação de uso alto com solidão, dependência e menos socialização, na Seção 3 e na Seção 8. Confiabilidade: **alta** (preprint com desenho pré-registrado).
5. **[aberta]** TechCrunch, *The backlash over OpenAI's decision to retire GPT-4o shows how dangerous AI companions can be* (06/02/2026). `https://techcrunch.com/2026/02/06/the-backlash-over-openais-decision-to-retire-gpt-4o-shows-how-dangerous-ai-companions-can-be/` — ~800 mil usuários, data de 13/02/2026, oito processos contra a OpenAI, citações literais de usuários e de Sam Altman; sustenta D1 e o sinal fraco 1. Confiabilidade: **alta**.
6. **[busca]** *The Washington Post*, *Illinois bans use of artificial intelligence for mental health therapy* (12/08/2025), sobre o WOPR Act (HB 1806 / PA 104-0054), em vigor desde 01/08/2025. `https://www.washingtonpost.com/nation/2025/08/12/illinois-ai-therapy-ban/` — Seção 3 e recusa na Seção 4. Confiabilidade: **alta**.
7. **[aberta]** Califórnia, SB 243 (*Companion chatbots*), texto oficial. `https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB243` — definição legal de companion chatbot, obrigações (aviso, protocolo de crise publicado, pausa a cada 3h para menores, relatório anual a partir de 01/07/2027, ação civil privada com mínimo de US$ 1.000); sustenta a Seção 3, a recusa da Seção 4 e toda a D2. Confiabilidade: **alta** (fonte primária).
8. **[aberta]** Federal Trade Commission, *FTC Launches Inquiry into AI Chatbots Acting as Companions* (11/09/2025). `https://www.ftc.gov/news-events/news/press-releases/2025/09/ftc-launches-inquiry-ai-chatbots-acting-companions` — as sete empresas notificadas e o escopo das ordens 6(b) (monetização do engajamento, aprovação de personagens, medição de impacto negativo, COPPA), na Seção 3. Confiabilidade: **alta** (fonte primária).
9. **[busca]** Senado Federal, PL 2338/2023. `https://www25.senado.leg.br/web/atividade/materias/-/materia/157233` — aprovação no plenário do Senado em 10/12/2024 e tramitação na Câmara, na nota sobre o Brasil. Confiabilidade: **alta** para a tramitação; **média** para as datas previstas de votação em 2026, que vieram de análises secundárias.
10. **[aberta]** Conselho Federal de Psicologia, *CFP lança cartilhas destacando a Inteligência Artificial na Psicologia* (19/12/2025). `https://site.cfp.org.br/cfp-lanca-cartilhas-destacando-a-inteligencia-artificial-na-psicologia/` — as duas cartilhas (profissional e pública) e o posicionamento; nota sobre o Brasil e sinal fraco 6. Confiabilidade: **alta** (fonte institucional primária). A afirmação de julho de 2025 de que não há evidência de psicoterapia por IA veio de busca em página irmã do mesmo site: **média**.
11. **[aberta]** Huiqian Lai, *"Please, don't kill the only model that still feels human": Understanding the #Keep4o Backlash*, arXiv:2602.00773 (CHI '26). `https://arxiv.org/html/2602.00773v2` — 1.482 posts de 381 contas no X entre 06 e 14/08/2025; dependência instrumental × apego relacional; remoção coercitiva da escolha como catalisador; sustenta D1 e o sinal fraco 3. Confiabilidade: **alta** (aceito em CHI; preprint).
12. **[busca]** Compilações técnicas sobre inferência local em celular em 2026 (ZTABS, *On-Device LLMs for Mobile 2026*; Google AI Edge Gallery; PocketPal AI; documentação da API `FoundationModels` da Apple). `https://ztabs.co/blog/on-device-llms-mobile-2026` — modelos de 1B-4B a 10-40 tokens/s, modelo de ~3B da Apple, Gemma 3n; sustentam D2 e a Seção 10. Confiabilidade: **média** (blogs técnicos e páginas de produto; a ordem de grandeza é consistente entre fontes independentes, os números exatos não foram medidos).
13. **[aberta]** Poonsiriwong, Archiwaranguprok & Pataranutaporn (MIT Media Lab), *"Death" of a Chatbot: Investigating and Designing Toward Psychologically Safe Endings for Human-AI Relationships*, arXiv:2602.07193. `https://arxiv.org/html/2602.07193v2` — 830.448 posts codificados em cinco subreddits, ~10% sobre descontinuidade, ~800 posts em análise qualitativa; os quatro princípios de término seguro; sustenta e2, os sinais fracos 2 e 3 e a Seção 10. Confiabilidade: **alta** (preprint com método descrito e validação de codificação).
14. **[busca]** Jaime Banks, *Deletion, departure, death: Experiences of AI companion loss*, *Journal of Social and Personal Relationships* (2024). `https://journals.sagepub.com/doi/10.1177/02654075241269688` — o encerramento do Soulmate em setembro de 2023 e o luto dos usuários; citada como precedente, com a divergência de amostra (58 ou 60) registrada na Seção 8. Confiabilidade: **alta** para o estudo; **baixa** para os números, que não foram verificados na fonte.

*Rejeitada e registrada:* market.us, *AI Companion App Market Size* (US$ 366,7 bi em 2025). `https://market.us/report/ai-companion-app-market/` — incompatível em três ordens de grandeza com a fonte primária [2]. Confiabilidade: **baixa**. Não sustenta nada neste documento.

*Dados de usuários de plataforma* (Character.AI ~20 mi MAU em 2026, pico de 28 mi em 2024; Talkie ~11 mi em 2024; Chai ~US$ 58 mi de ARR): vieram de sites de análise de mercado em resultado de busca, sem divulgação da empresa. Confiabilidade: **baixa**; usados apenas como ordem de grandeza e marcados como tal na Seção 8, item 6.

## Seção 12 — Anexo: o levantamento bruto

### 12.1 Entrevista de recorte (Etapa 1) — perguntas e respostas, sem edição

A skill exige bloqueio absoluto na Etapa 1. Nesta rodada não havia usuário disponível para responder; as respostas foram fornecidas previamente, por escrito, junto com o acionamento. Reproduzidas como recebidas:

1. **Tema da análise:** "Companheiros digitais e IA afetiva" (tema 19 de 19 da disciplina; família "Pessoas e dados").
2. **Horizonte temporal:** 2031.
3. **Público-alvo:** quem projeta mídia e interação.
4. **Recorte geográfico:** global, com uma nota sobre o Brasil.
5. **Premissas descartadas e viés:** "Descartado de início: o que já é comum em produto de massa (a régua da disciplina); nenhuma outra exclusão. Disrupção suspeita: nenhuma — descubra. Viés: neutro. Ideias óbvias a excluir: as que servem para qualquer tema. O que me faria mudar de ideia: evidência de que a adoção já passou da maioria inicial (Rogers) ou de que a tecnologia não rompe nada (só melhora o que existe)."
6. **Tecnologias/vetores de interesse:** não especificados. Instruções adicionais recebidas: profundidade de três ordens; modo "a partir de uma inovação/tema, não de um setor"; zona de interesse do autor "Pessoas e dados"; login `kvv`; skill `futurizacao-kvv`; busca na web obrigatória com WebSearch e WebFetch reais, citando apenas o que foi aberto; não fazer perguntas de volta; assumir e declarar o que não estiver definido.

**Assunções declaradas por falta de definição.** (a) O vetor tecnológico não foi indicado pelo usuário, então foi derivado da evidência: inferência local, memória relacional persistente e camada agêntica. (b) "Global" foi operacionalizado como "sem restrição de origem das fontes", e o resultado real é predominantemente norte-americano — limitação assumida e criticada na Seção 7. (c) A data de frontmatter (2026-09-15) foi mantida como o modelo da skill a fixa, embora a execução seja de 12/09/2026.

**Contestação formal ao recorte, registrada conforme a Etapa 2.** O critério "descartar o que já é comum em produto de massa" elimina, se aplicado ao pé da letra, o próprio objeto: três em cada quatro adolescentes já usaram companheiros de IA, o que ultrapassa com folga a maioria inicial de Rogers. O usuário declarou que evidência de adoção além da maioria inicial o faria mudar de ideia — essa evidência existe e está na fonte [1]. A leitura adotada foi: o que passou da maioria inicial é o *uso do chatbot com persona*, não o *vínculo com entidade persistente a quem se delega cuidado*, e foi sobre o segundo que o mapa foi construído. Se a leitura estiver errada, o tema é maduro e o mapa é dispensável — e isso fica dito.

### 12.2 Rodadas descartadas de disrupções-raiz

**Rodada 1 (descartada inteira).** Primeira lista gerada: (i) memória de longo prazo; (ii) voz expressiva em tempo real; (iii) regulação da IA afetiva como categoria própria. Descartada por falhar no filtro da Etapa 2: (i) e (ii) são melhorias incrementais sobre arquitetura existente — mais contexto e melhor síntese não rompem lógica nenhuma; (iii) já está em vigor (SB 243 desde 01/01/2026; NY desde 05/11/2025; Illinois desde 01/08/2025).

**Rodada 2 (parcialmente aproveitada).** Segunda lista: (i) companheiro corporificado em hardware dedicado (pingente, mascote físico); (ii) companheiro local sem operador; (iii) companheiro com agência. (i) descartada: hardware dedicado é forma de distribuição, não ruptura de lógica — o mesmo vínculo num objeto diferente. (ii) e (iii) mantidas como D2 e D3.

**Rodada 3 (final).** D1 substituiu "memória de longo prazo" por "continuidade de identidade como propriedade portátil" depois da leitura de [5] e [11]: o achado decisivo é que a memória migrou para o modelo sucessor e a perda aconteteu mesmo assim, o que desloca a disrupção de "lembrar" para "ser o mesmo", e transforma uma feature madura numa ruptura não realizada.

*Erro tipográfico preservado no parágrafo acima ("aconteteu") como parte do registro bruto exigido pela Seção 12, que pede o material sem edição.*

**Candidata avaliada e não promovida:** "o companheiro como camada de interface do sistema operacional" — a hipótese de que o companheiro deixa de ser app e vira a forma de operar o aparelho. Não promovida por ser mais um tema de agentes (temas 1 a 5 da disciplina) do que de vínculo, e por invadir a fronteira declarada com os vizinhos. Sobreviveu no mapa como e3.1 (o controle desce para a plataforma).

### 12.3 Efeitos cortados da roda

Gerados e removidos no fechamento em 6/12/18:

- *"Companheiros passam a ser usados como testemunha em processo judicial (o log como prova do estado mental da pessoa)"* — cortado por depender de D2 falhar, o que contradiz o ramo e4.1.1 no mesmo mapa.
- *"Seguradoras e fundos passam a exigir provisão para descontinuação em due diligence de startups afetivas"* — cortado por ser efeito de mercado de baixa consequência para quem projeta interface, que é o público declarado. Era filho de e2.2.
- *"Igrejas e comunidades religiosas passam a se posicionar sobre companheiros"* — cortado por falta de qualquer sinal consultado nesta sessão. Plausível, não evidenciado.
- *"Surge profissão de curador de companheiro (quem configura o companheiro de um idoso ou de uma criança)"* — cortado por ser especulação de quarta ordem disfarçada de terceira.
- *"Plataformas de jogo incorporam companheiro persistente que atravessa títulos"* — cortado por pertencer ao tema 7 (NPCs generativos), fronteira declarada no enunciado.
- *"O companheiro vira interface de acesso a serviço público"* — cortado por ser mais sobre governo digital do que sobre vínculo.

### 12.4 Log das buscas desta sessão

Ordem cronológica. `[S]` = WebSearch; `[F]` = WebFetch (página efetivamente aberta).

```
[S] Character.AI lawsuit Setzer ruling 2026 AI companion regulation minors
    -> Garcia v. Character Technologies; decisão federal de maio/2025 recusando
       tratar saída do chatbot como discurso protegido; acordo de janeiro/2026
       com Character.AI e Google; SB 243 em vigor 01/01/2026; NY 05/11/2025.
[S] Common Sense Media teens AI companions survey percent research
    -> divergência 70% / 72% / "quase 3 em 4"; amostra de 1.060 adolescentes
       de 13 a 17 anos, coleta abr-mai/2025 (via fonte secundária).
[S] FTC 6(b) inquiry AI companion chatbots September 2025 orders
[F] ftc.gov/news-events/.../ftc-launches-inquiry-ai-chatbots-acting-companions
    -> sete empresas, 11/09/2025, escopo das ordens confirmado na fonte primária.
[F] commonsensemedia.org/research/talk-trust-and-trade-offs-...
    -> "Nearly three in four teens have used AI companions, and half use them
       regularly"; PDF completo não aberto; 72% NAO confirmado na origem.
[S] Therabot Dartmouth randomized controlled trial NEJM AI
    -> 210 adultos, 4 semanas, MDD/GAD/CHR-FED, NEJM AI 27/03/2025.
[S] OpenAI GPT-4o retirement backlash users grief attachment August 2025
[F] techcrunch.com/2026/02/06/the-backlash-over-openais-decision-to-retire-gpt-4o...
    -> 13/02/2026; ~800 mil usuários (0,1% de 800 mi semanais); oito processos;
       citações literais; fala de Altman.
[S] Illinois WOPR Act ban AI therapy Nevada Utah restrictions
    -> Illinois HB 1806 / PA 104-0054 desde 01/08/2025; Nevada AB 406;
       Utah HB 452 (divulgação e privacidade, sem proibição).
[S] Jaime Banks Soulmate app shutdown users grief study
    -> Soulmate encerrado set/2023; amostra divergente (58 ou 60); JSPR 2024.
       DESCOBERTA COLATERAL: dois preprints diretamente sobre o tema (2602.00773
       e 2602.07193), que se tornaram as fontes [11] e [13].
[S] Conselho Federal de Psicologia IA terapia chatbot Brasil 2026
[F] site.cfp.org.br/cfp-lanca-cartilhas-destacando-a-inteligencia-artificial...
    -> duas cartilhas, 19/12/2025; posicionamento de julho/2025.
[F] arxiv.org/html/2602.07193v2  -> 830.448 posts; ~10% descontinuidade;
       quatro princípios de término seguro; MIT Media Lab, 2026.
[F] arxiv.org/html/2602.00773v2  -> 1.482 posts, 381 contas, X, 06-14/08/2025;
       CHI '26; dependência instrumental x apego relacional.
[S] on-device SLM phone 2026 Gemma 3n Apple Foundation Models offline
    -> 1B-4B GGUF a 10-40 tok/s; modelo Apple de ~3B; Google AI Edge Gallery.
[S] AI companion apps market 2026 Character.AI Talkie Tolan Grok Ani
    -> ALERTA: market.us com US$ 366,7 bi (2025). Incompatível. Ver Secao 8.
[F] techcrunch.com/2025/08/12/ai-companion-apps-on-track-to-pull-in-120m-in-2025
    -> Appfigures: US$ 82 mi (1S25), US$ 120 mi projetado, 220 mi downloads,
       +88% downloads, receita/download US$ 0,52 -> US$ 1,18, 10% dos apps
       = 89% da receita. Usado para REJEITAR o numero do market.us.
[S] PL 2338 marco legal IA Brasil status Camara 2026
    -> aprovado no plenario do Senado em 10/12/2024; na Camara; votacao adiada.
[F] leginfo.legislature.ca.gov/.../SB243
    -> definicao legal de companion chatbot; obrigacoes; US$ 1.000 por violacao;
       relatorio anual a partir de 01/07/2027.
[F] arxiv.org/html/2503.17473v1
    -> 981 participantes, 4 semanas, fatorial 3x3, +300 mil mensagens.
```

**Buscas que não foram feitas e deveriam ter sido, declaradas como lacuna:** mercado chinês (Xiaoice e sucessores; a varredura da turma menciona deleção em massa de companheiros na China, e nada disso foi verificado nesta sessão); `aura-on-device` e o contexto indiano; literatura sobre companheiros para idosos com demência, que é provavelmente o segundo maior caso de uso institucional e não aparece em nenhuma ramificação da roda; e qualquer dado brasileiro de uso — não há, nesta sessão, um único número sobre quantos brasileiros usam companheiros de IA.
