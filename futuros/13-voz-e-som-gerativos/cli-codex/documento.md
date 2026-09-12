---
tema: Voz e som gerativos
slug: voz-e-som-gerativos
autor_login: grec
zona_de_interesse: Percepção e mídia sintética
data: '2026-09-11'
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 2
efeitos_ordem_1: 6
efeitos_ordem_2: 6
efeitos_ordem_3: 6
tecnologias_citadas:
- Moshi
- Pocket TTS
- Magenta RealTime 2
- Lyria RealTime
- Suno Studio 2.0
- CORAA
- MIDI
fontes: 15
confianca: baixa
experimento: Bancada comparativa de diálogo local e instrumento musical gerativo
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Até 2031, a fronteira relevante não é simplesmente ouvir uma máquina falar ou pedir uma canção pronta: é negociar turnos de fala sem depender da rede e tocar um gerador musical enquanto ele produz o som. Este mapa explora duas raízes e dezoito consequências, com atenção a quem controla o dispositivo, a execução e a possibilidade de repetir uma experiência. A geração de canções por descrição já pertence ao contexto de produto de massa; a alegada ausência de stems precisa ser corrigida. A hipótese vocal permanece especulativa, enquanto instrumentos musicais generativos têm interfaces experimentais utilizáveis. Ganhos de participação convivem com exclusão por hardware, custo de auditoria e dependência de fornecedores. Os cenários são possibilidades condicionais, não previsões.

## 2. O tema

Modo MAPA; tema 13 de 19, família Percepção e mídia sintética. Objeto: voz e som gerados. Horizonte 2031; público de projeto de mídia e interação; recorte global, com nota brasileira. O briefing completo substitui a entrevista sem penalidade automática. Viés solicitado: neutro. Não houve disrupção previamente escolhida pelo autor. A roda nasce de inovação, não de um setor; museus, palcos e jogos são locais de observação das consequências.

A exclusão vinculante é o que já se faz com produto de massa. Também ficam fora ideias intercambiáveis entre temas, como “mais produtividade”, “novas profissões” e “reforma da educação”. O falseador é encontrar adoção além da maioria inicial ou constatar que a suposta ruptura só barateia a mesma prática. A escala Rogers aqui é uma heurística operacional da skill: não se infere porcentagem da população a partir de downloads, usuários acumulados ou quantidade de músicas.

Há três limites: computação local em geral pertence ao tema 16; imagem em movimento pertence ao 12; personagens narrativos não são uma terceira raiz escondida. Voz interessa pelo som e pela tomada de turno; música interessa pela geração e pelo controle temporal do material. As premissas não fornecidas, como hardware de referência e critérios experimentais, estão declaradas na seção 12.2.

## 3. Onde isso está hoje

Âncora documental em 11/09/2026. Onze consultas reais de busca, em português e inglês, e leitura de quinze páginas por `web.run`, usando `search_query` e `open`, equivalentes disponíveis de WebSearch/WebFetch. Não houve escuta comparativa, execução de modelos ou teste de bateria nesta rodada. “Funciona” abaixo significa implementação documentada, não validação pessoal.

| Objeto e data | O que a fonte sustenta | Limite da evidência |
|---|---|---|
| Moshi, paper de setembro de 2024 [F1] | Modelo fala-a-fala com fluxos paralelos; autores relatam cerca de 200 ms de latência prática | Não demonstra, por esse número, conversa sustentada em qualquer celular nem compreensão em português |
| Pocket TTS, lançado em janeiro de 2026 [F2–F3] | Síntese local em CPU; repositório atual inclui português e clonagem | TTS não escuta nem raciocina; a demo na página institucional usa CPU remota |
| Magenta RealTime 2, junho de 2026 [F4] | Geração controlável em fluxo; versão pequena anunciada para Apple Silicon, inclusive MacBook Air | A cadência de 40 ms é de frames; não é a latência completa. Controle preciso de batida continua limitado |
| Lyria RealTime, API anunciada em junho de 2025 [F5–F6] | Interfaces e API experimental para conduzir música instrumental durante a execução | A documentação avisa sobre transições abruptas e reset de contexto em mudanças de tempo ou escala |
| Suno, página atual, e Studio 2.0, documentação editada em agosto de 2026 [F7–F8] | Canção gerada em produto de amplo alcance; stems separados e exportação multitrack documentados | Separação estimada a partir de uma mix não é prova de acesso às pistas originais |

**Atores.** Kyutai constrói os modelos vocais; Google/Magenta e DeepMind constroem instrumentos e serviços de geração musical; Suno distribui a criação de faixas; Deezer controla parte da circulação e remuneração; a comunidade acadêmica do CORAA produz recursos para português. Não são cinco provas independentes da mesma capacidade.

**Número de adoção.** Suno declara mais de 100 milhões de pessoas que fizeram música [F7]: é acumulado e autodeclarado, não usuários ativos nem quota Rogers. Deezer informa, em abril de 2026, aproximadamente 44% dos uploads diários como totalmente gerados por IA, mas apenas 1–3% dos streams [F9]. Isso impede confundir abundância de oferta com preferência majoritária. Para diálogo full-duplex inteiramente local e instrumentos musicais generativos em uso recorrente: **sem número encontrado** de adoção, global ou brasileira. Não atribuo “<10%” sem denominador.

Uma checagem histórica adicional reforça a exclusão da voz genérica: o Smart Audio Report de 2022 informa 62% dos adultos americanos usando assistente de voz em algum dispositivo [F14–F15]. Isso não mede conversa gerativa local. O lançamento inicial do Echo é situado em novembro de 2014 pela nota da Amazon de junho de 2015 [F13].

**O que ainda não foi demonstrado aqui.** Qualidade humana sustentada com ruído e sobreposição em celulares comuns; redução líquida de energia; repetibilidade de uma sessão musical após atualização dos pesos; portabilidade de todos os controles entre fornecedores. Esses são testes pendentes, não funcionalidades anunciadas como prontas.

**Brasil.** CORAA [F10], apresentado em 2021, reúne 290,77 horas para reconhecimento de fala, incluindo fala espontânea e uma parcela europeia. É um recurso de avaliação linguística, não benchmark atual de voz gerativa nem autorização automática para clonagem. O suporte nominal a português no Pocket TTS não demonstra cobertura de sotaques, nomes próprios ou fala atípica. Em Recife, a turma deve avaliar esses casos e a diferença entre aparelho pessoal e computador emprestado. Não encontrei medida comparável de adoção brasileira das duas raízes; o mapa não transfere a taxa americana ou a contagem global para o Brasil.

## 4. As disrupções-raiz

### R1 — Diálogo vocal contínuo e interruptível inteiramente local

1. **O que rompe:** a dependência de conexão e de entrega explícita da vez para sustentar uma conversa sonora; a sessão passa a pertencer ao dispositivo, inclusive quando o visitante interrompe a resposta.
2. **Por que agora:** fluxos paralelos de fala [F1] e síntese leve [F2–F3] tornam peças necessárias acessíveis; juntá-las com compreensão e gestão de contexto ainda é trabalho, não conclusão deduzida da soma.
3. **Difusão:** **demo pública**, considerando a capacidade composta e generalizável; portanto **confianca: baixa em toda a cadeia**. A evidência dos componentes não permite chamá-la de adoção precoce medida.
4. **O que falta:** compreensão local útil, manejo de interrupção sem truncar intenção, avaliação em português, autonomia térmica, manutenção dos pesos e saída acessível para quem não fala.

Atores que podem redirecionar: fabricantes como Apple e integradores de aparelhos podem reservar processamento e microfone contínuo a certos equipamentos. Incentivo: bateria, suporte e diferenciação comercial. O mecanismo de bloqueio aparece em e3 → e3.1 → e3.1.1; é hipótese de desenho e compra, não política atual atribuída à Apple.

### R2 — Música como instrumento gerativo durante a execução

1. **O que rompe:** a separação entre produzir uma gravação e depois executá-la: o intérprete ou a sessão de jogo altera o material sonoro enquanto este é criado, sem escolher apenas entre arquivos prévios.
2. **Por que agora:** modelos em fluxo com controle contínuo têm APIs e interfaces utilizáveis [F5–F6]; a execução local ampliou as possibilidades de integração [F4].
3. **Difusão:** **produto de nicho experimental**, no sentido de ferramenta utilizável em interfaces e plugins, não produto consolidado. API experimental não prova adoção; não há taxa encontrada. Se só houver uso de demonstração, a classificação deve cair para demo e toda a cadeia perder a confiança média remanescente.
4. **O que falta:** controle suficiente para apresentações repetidas, falhas recuperáveis, orçamento de processamento, condições de uso compatíveis com distribuição e mecanismos de rastreio de sessões.

Bloqueador: editoras de jogos que aprovam distribuição podem exigir rastreabilidade para administrar reclamações e manutenção. Isso gera e6 e restringe quais cenas recebem o gerador. Não afirmo obrigação jurídica vigente. O custo de provar o que tocou pode superar o de armazenar uma faixa.

### Candidatos recusados

- **Canção inteira por descrição:** recusada como raiz pela régua de capacidade comum em produto de massa, com evidência atual [F7], não por declarar maioria populacional sem pesquisa. TMI-0035 já orienta essa recusa; a medição foi reaberta nesta rodada. Ano observado de ampla disponibilidade: 2026; ano de entrada na maioria Rogers: **não estabelecido**.
- **“Agora haverá stems”:** a fronteira do enunciado está desatualizada [F8]. Melhor separação ou mais ferramentas de edição, isoladamente, pode ser melhoria sustentadora. Não vira raiz automaticamente.
- **TTS, transcrição, assistente por nuvem, DAW e sampler:** contexto excluído pelo briefing; não invento ano de maioria nem porcentagem. Não é necessário reconstruir sua difusão para respeitar uma exclusão explícita.
- **Clonagem de voz isolada:** disponibilidade [F3] não basta para demonstrar nova ruptura. Golpe por áudio pode ocorrer sem R1 ou R2; não será filho causal artificial dessas raízes.

## 5. A roda dos futuros

O YAML traz a versão após a bateria adversarial. Frases afirmativas representam hipóteses condicionais às raízes, não promessas.

```yaml
roda:
- disrupcao: Diálogo vocal contínuo e interruptível executado integralmente no dispositivo
  efeitos:
  - id: e1
    ordem: 1
    efeito: Designers de guias sonoros prototipam conversas que continuam sem conectividade
    sinal: fraco
    prazo: 2028
    confianca: baixa
    efeitos:
    - id: e1.1
      ordem: 2
      efeito: Museus passam a comprar pacotes locais de voz e conhecimento com versões auditáveis
      sinal: fraco
      prazo: 2030
      confianca: baixa
      efeitos:
      - id: e1.1.1
        ordem: 3
        efeito: Curadores preservam a versão executável do guia junto ao acervo da exposição
        sinal: fraco
        prazo: 2031
        confianca: baixa
  - id: e2
    ordem: 1
    efeito: Equipes de interação tratam a interrupção e a sobreposição de fala como controles do diálogo
    sinal: medio
    prazo: 2028
    confianca: baixa
    efeitos:
    - id: e2.1
      ordem: 2
      efeito: Equipes de acessibilidade oferecem a mesma tomada de turno por gesto e texto
      sinal: fraco
      prazo: 2030
      confianca: baixa
      efeitos:
      - id: e2.1.1
        ordem: 3
        efeito: Compradores de guias sonoros avaliam equivalência entre modos antes de aceitar interfaces só de voz
        sinal: fraco
        prazo: 2031
        confianca: baixa
  - id: e3
    ordem: 1
    efeito: Integradores limitam a duração do diálogo local para caber no orçamento térmico do aparelho
    sinal: fraco
    prazo: 2029
    confianca: baixa
    efeitos:
    - id: e3.1
      ordem: 2
      efeito: Fabricantes de aparelhos condicionam o diálogo contínuo a classes específicas de hardware
      sinal: fraco
      prazo: 2030
      confianca: baixa
      efeitos:
      - id: e3.1.1
        ordem: 3
        efeito: Museus mantêm frotas de empréstimo para evitar excluir visitantes com aparelhos incompatíveis
        sinal: fraco
        prazo: 2031
        confianca: baixa
- disrupcao: Música passa de arquivo finalizado a instrumento generativo controlado durante a execução
  efeitos:
  - id: e4
    ordem: 1
    efeito: Performers conduzem o material musical gerado com controles contínuos em vez de disparar uma faixa pronta
    sinal: medio
    prazo: 2027
    confianca: media
    efeitos:
    - id: e4.1
      ordem: 2
      efeito: Produtores de shows ensaiam estados de falha e transições do modelo como parte da passagem de som
      sinal: fraco
      prazo: 2029
      confianca: media
      efeitos:
      - id: e4.1.1
        ordem: 3
        efeito: Contratantes remuneram a operação musical ao vivo separadamente da entrega de uma gravação
        sinal: fraco
        prazo: 2031
        confianca: baixa
  - id: e5
    ordem: 1
    efeito: Estúdios de jogos experimentam gerar a textura musical a partir do estado de cada sessão
    sinal: fraco
    prazo: 2029
    confianca: baixa
    efeitos:
    - id: e5.1
      ordem: 2
      efeito: Equipes de qualidade reproduzem estados do gerador para investigar falhas sonoras
      sinal: fraco
      prazo: 2030
      confianca: baixa
      efeitos:
      - id: e5.1.1
        ordem: 3
        efeito: Estúdios contratam compositores para definir limites de variação musical verificáveis
        sinal: fraco
        prazo: 2031
        confianca: baixa
  - id: e6
    ordem: 1
    efeito: Editoras de jogos exigem capturas e rastros de geração antes de aprovar trilhas variáveis
    sinal: fraco
    prazo: 2029
    confianca: media
    efeitos:
    - id: e6.1
      ordem: 2
      efeito: Fornecedores de áudio empacotam modelos versionados com gravações de contingência
      sinal: fraco
      prazo: 2030
      confianca: baixa
      efeitos:
      - id: e6.1.1
        ordem: 3
        efeito: Estúdios pequenos restringem a geração ao vivo a cenas que podem sustentar o custo de auditoria
        sinal: fraco
        prazo: 2031
        confianca: baixa
```

### Mecanismos, sinais e classes de referência

**Referência temporal comum CR-A: difusão de uma interface que pede mudança de hábito e parque instalado.** O iPhone foi apresentado em janeiro de 2007 [F11]; smartphones de várias marcas estavam com 35% dos adultos americanos em 2011 [F12]. O intervalo de quatro anos é uma comparação favorável, não a duração medida “demo → 10%”: smartphones anteriores já existiam e a pesquisa não data a travessia dos 10%. Uso-o como limite de plausibilidade para observar adoção relevante após demonstrações, não como extrapolador numérico global. A lacuna impede confiança alta em qualquer prazo.

**Referência CR-B: integração de instrumento digital.** Os marcos documentais são interfaces musicais ao vivo de 2025 [F5] e execução local de 2026 [F4]; o tempo até 10% permanece **censurado: não observado**. Essa classe serve para resistir a confundir lançamento e hábito. Uso CR-A como comparador rápido e acrescento, como premissa de planejamento e não dado histórico, um ciclo de integração de dois anos para palcos e jogos. Nenhum prazo pretende dizer “10% em tal ano”. Para contratos e acervos, o gargalo adicional é institucional: as datas finais são janelas de verificação, confiança baixa.

| ID | Mecanismo causal e troca de ator/mecanismo | Evidência específica do efeito e prazo |
|---|---|---|
| e1 | Porque R1 torna a resposta independente da rede, designers podem prototipar um guia cujo diálogo não termina na perda de conexão | Moshi e Pocket TTS [F1,F3] são habilitadores; zero protótipos de guia desse tipo encontrados. Sinal fraco, sem converter componente em aplicação. 2028: quatro anos após o marco vocal de 2024, CR-A |
| e1.1 | Porque e1 coloca uma sessão executável no aparelho, compradores do museu passam a receber pesos, conteúdo e versão em vez de somente minutos de atendimento remoto | Zero contratos encontrados; fraco. 2030: ciclo de aquisição posterior ao protótipo, CR-A com dois anos adicionais assumidos |
| e1.1.1 | Porque e1.1 torna versões parte da entrega, curadores precisam preservar a configuração que produziu a experiência, inclusive pronúncia e modo de responder | Zero casos encontrados; fraco. 2031: janela institucional depois da primeira compra, CR-A; não consequência automática |
| e2 | Porque R1 escuta e fala simultaneamente, a sobreposição deixa de ser apenas erro de entrada e passa a alterar quando a resposta para ou continua | Moshi [F1] é uma tentativa direta; sinal médio. 2028, CR-A a partir de 2024 |
| e2.1 | Porque e2 faz da disputa pelo turno um controle, equipes de acessibilidade precisam disponibilizar a mesma operação sem obrigar emissão vocal | Zero artefatos específicos abertos; fraco. 2030, CR-A mais integração de dois anos. É equivalência de interrupção, não acessibilidade genérica |
| e2.1.1 | Porque e2.1 torna comparável o controle nos modos, compradores podem rejeitar sistemas em que visitantes sem fala não conseguem corrigir ou interromper o guia | Zero editais encontrados; fraco. 2031, CR-A com atraso institucional assumido |
| e3 | Porque R1 mantém inferência e captura ativas durante o diálogo, integradores podem impor janelas de sessão para proteger o orçamento térmico | Zero medições dessa limitação em guias; fraco. 2029, CR-A com um ano de teste prolongado adicional; menor modelo não prova economia líquida |
| e3.1 | Porque e3 transforma duração útil em requisito físico, fabricantes podem vincular suporte a uma classe de aparelho e capturar a distribuição | Zero políticas específicas encontradas; fraco. 2030, CR-A; muda de engenharia de sessão para segmentação de hardware |
| e3.1.1 | Porque e3.1 faz a compatibilidade variar por aparelho, museus assumem aquisição e higienização de equipamentos de empréstimo para oferecer a mesma conversa | Zero compras encontradas; fraco. 2031, CR-A com aquisição institucional; retroação aumenta custo de R1 |
| e4 | Porque R2 produz material novo enquanto recebe controles, performers podem conduzir a geração em vez de apenas tocar a gravação | PromptDJ e a performance de Toro y Moi relatada no anúncio [F5] são tentativa e demonstração, não prova de rotina profissional; sinal médio. 2027: visibilidade de nicho dois anos após 2025, CR-B; não 10% de adoção |
| e4.1 | Porque e4 torna o fluxo do modelo parte do desempenho, a produção do show precisa ensaiar queda, atraso e retomada junto à passagem de som | Zero procedimentos reais abertos; fraco. 2029: quatro anos após 2025, CR-A como comparador favorável e CR-B como freio |
| e4.1.1 | Porque e4.1 identifica operação de risco durante o evento, contratantes podem separar remuneração da condução ao vivo e da entrega de um fonograma | Zero contratos encontrados; fraco. 2031: mais dois anos institucionais assumidos, CR-B; não afeta automaticamente todo músico |
| e5 | Porque R2 aceita controles durante o fluxo, estúdios podem mapear estado de jogo para textura gerada sem pré-renderizar cada combinação | Zero integrações de jogo abertas; fraco. 2029: marco 2025 + quatro anos de CR-A, confrontado com adoção não medida de CR-B |
| e5.1 | Porque e5 gera saídas dependentes de trajetórias de interação, QA precisa guardar estado do gerador e sequência de controles para investigar um defeito | Zero ferramentas de QA específicas encontradas; fraco. 2030: uma iteração produtiva depois de e5, CR-B; arquivo de áudio também pode continuar necessário |
| e5.1.1 | Porque e5.1 exige limites reproduzíveis para decidir se houve falha, estúdios podem contratar compositores para definir invariantes musicais testáveis | Zero contratos encontrados; fraco. 2031, CR-B mais ciclo contratual. Muda o objeto entregue, não inventa uma profissão |
| e6 | Porque R2 produz uma execução que não existia como faixa aprovada, editoras de jogos podem pedir captura e procedência para aprovar a trilha variável | Zero exigências específicas abertas; fraco. 2029, CR-A/CR-B; confiança média só no mecanismo de controle, não na existência atual |
| e6.1 | Porque e6 exige reconstruir o que foi ouvido, fornecedores passam a vender versão estável do gerador e gravações que continuam tocando quando ele falha | Zero pacotes comerciais encontrados; fraco. 2030, CR-B; muda do gate editorial para empacotamento |
| e6.1.1 | Porque e6.1 acrescenta armazenamento, operação e auditoria, estúdios pequenos podem limitar a geração a poucas cenas e conservar faixas nas demais | Zero decisões orçamentárias abertas; fraco. 2031, CR-B; retroação econômica freia R2 |

**Sinal não é confiança.** Nenhum efeito recebeu forte: não foram reunidos três artefatos específicos para nenhum deles. Os dois médios representam tentativas e protótipos; os demais são inferência. Fontes de capacidade técnica não viram casos comerciais por repetição. A confiança baixa de R1 é obrigatória pelo estágio composto, mesmo nos efeitos com sinais médios.

**Teste da causa solta.** Arquivo de software, acessibilidade, bateria, ensaio, QA e rastreabilidade já existiam. Os filhos mantidos tratam somente de versão vocal executável, interrupção equivalente, continuidade térmica, contingência de fluxo gerado, trajetória musical e aprovação de saídas não pré-fixadas. Removida a raiz, essas obrigações específicas desaparecem; as categorias genéricas permanecem como contexto. Não se diz que R1 inventa acessibilidade ou que R2 inventa contratos.

**Cobertura STEEP e perdas.** Social: e1/e2, visitantes sem conexão ou sem fala; tecnológico: e3/e4/e5; econômico: e6 e as cadeias de compra e contratação. Político: poder privado de decidir compatibilidade e aprovação, e3/e6; não há previsão de nova lei. Ecológico: sem efeito independente de primeira ordem sustentado; e3 mede restrição térmica, não pegada ambiental. Perdem margem fornecedores pagos por sessão remota se houver substituição; perdem acesso visitantes com hardware incompatível; perdem previsibilidade performers; pequenos estúdios podem absorver custos desproporcionais. Esses efeitos distributivos são hipóteses, não números de emprego.

### Cruzamentos e parada

**Convergência entre raízes:** e1.1 e e6.1 chegam à entrega de um pacote sonoro executável versionado. O comprador deixa de receber apenas áudio, mas precisa saber qual sistema o gerou. Museus e jogos não são o mesmo mercado; a convergência é do objeto contratável, inferida sem contá-la como efeito adicional.

**Retroalimentação:** R1 → e3 → e3.1 → e3.1.1 → custo de frota → freio de R1. R2 → e6 → e6.1 → e6.1.1 → menor abrangência da geração ao vivo → freio de R2. Também pode haver reforço de R2 por e4.1.1, se remuneração da performance pagar manutenção; essa seta não recebeu uma quarta ordem artificial.

**Contradições não resolvidas:** e4.1.1 supõe que operação ao vivo seja remunerável; e6.1.1 pode tornar economicamente preferível congelar o resultado. O que decide é disposição de pagar por variabilidade versus custo de risco. e1.1 pressupõe que o museu controla o pacote; e3.1 permite que o fabricante controle sua execução. O que decide é portabilidade entre aparelhos e permissões do sistema.

**Regra de parada:** cada ramo para na terceira ordem. Após e1.1.1, “mais museus arquivam” só repetiria o mesmo ator/mecanismo; após e2.1.1, “mais compras inclusivas” idem; após e3.1.1, “frotas maiores” idem. “Mais cachês” após e4.1.1, “mais contratos” após e5.1.1 e “menos cenas” após e6.1.1 também seriam mera escala. Não acrescentei filhos decorativos.

## 6. Sinais fracos e wildcards

| Sinal candidato | Onde foi visto | O que mudaria e como observar crescimento |
|---|---|---|
| Controle musical gerativo entrando no equipamento do intérprete | Implementação local e exemplos em F4 | Se aparecer em apresentações recorrentes com falhas e latências publicadas, e4.1 ganha evidência; contar eventos independentes, não views de uma demo |
| Voz sintética pequena combinada com suporte a português | F2–F3 | Se testes sustentados com sotaques e sobreposição forem publicados em dispositivos populares, R1 pode sair de demo; contar modelos, aparelhos e horas de sessão com protocolo reproduzível |
| Circulação passa a distinguir produção e escuta de IA | As métricas diferentes de uploads e streams em F9 | Se plataformas divulgarem denominadores e erro de detecção, muda a hipótese de remuneração; monitorar consumo efetivo e tratamento de reclamações, não só uploads |

“Fraco” nesta seção designa o indício da mudança sistêmica; não reclassifica toda capacidade documentada como pouco existente.

**Wildcard W1 — Retirada súbita da possibilidade de redistribuir um modelo musical decisivo.** Mecanismo: uma disputa de direitos ou decisão do fornecedor impede novas distribuições e força jogos a trocar o gerador ou congelar gravações. Baixa probabilidade de paralisar toda a classe, pois há alternativas; alto impacto para projetos dependentes de um único pacote. Sinal precoce: retirada de pesos acompanhada de mudança expressa de licença e exigência de migração. Enfraquece R2, fortalece e6.1 e pode empurrar e5 além de 2031. Hipótese, sem processo judicial específico inventado.

**Wildcard W2 — Revogação de execução contínua no aparelho por consumo ou abuso do microfone.** Mecanismo: fabricante restringe a sessão em segundo plano; guias precisam manter aplicativo visível ou hardware dedicado. É improvável uma restrição uniforme de todos os ambientes, mas um único sistema dominante no público de uma instalação pode inviabilizar sua operação. Sinal precoce: teste reproduzível mostrando sessões encerradas após atualização e documentação pública da mudança. Quebra a premissa de acesso persistente em R1; o mapa passa de “dispositivo pessoal” a instalação dedicada.

O artista sintético líder de parada, sugerido no contexto da disciplina, não foi promovido a wildcard: não foi aberta uma série de paradas que permita dizer se isso ainda seria raro em setembro de 2026. Também não é necessário para a causalidade das raízes escolhidas.

## 7. Contra o próprio mapa

### Pré-mortem: é 2031 e o mapa falhou

1. **O visitante não quer conversar com o guia.** R1 funciona tecnicamente, mas silêncio, privacidade e orientação espacial valem mais que diálogo. e1 não demonstra compra institucional; mantive baixa confiança e retirei o salto da substituição de telas. e2.1 preserva o controle não vocal como hipótese, não como desculpa para declarar sucesso.
2. **O performer quer surpresa no ensaio e precisão no palco.** R2 vira ferramenta de preparação, não instrumento ao vivo. e4.1.1 perdeu confiança média; e5 perdeu confiança média porque integração em jogos não foi encontrada. O descarte de e5 retiraria seus descendentes.
3. **Auditar custa mais que criar uma faixa.** Editoras congelam a geração antes da distribuição. e6.1 perdeu confiança média; e6.1.1 permanece como freio, não a alegação de que todo estúdio adotará geração.

### Linearidade, prazo e independência

“Mais vozes naturais”, “mais músicas baratas”, “morte da tela” e “substituição dos compositores” foram retirados: os dois primeiros são escala/qualidade; os outros saltam mecanismos. Os ramos mantidos mudam o objeto de controle ou contratação. Um sampler adaptativo pode derrotar R2 no experimento; nesse caso não basta trocar seu nome por “IA” para manter a raiz.

Todos os prazos fracos foram confrontados com CR-A/CR-B: e1.1/e2.1 não ficam em 2028; e3 não fica em 2027; e5/e6 só em 2029; e4.1 só em 2029; os contratos de terceira ordem só em 2031. Datas de aquisição e governança não são deduzidas da latência de um modelo. O horizonte é uma janela de observação, e nenhum efeito de primeira ou segunda ordem ultrapassa 2031. CR-B não tem 10% observado: essa lacuna continua no documento em vez de ser preenchida com um número redondo.

Se **R1 não acontecer**, R2 ainda permite música ao vivo em computador ou serviço remoto; caem e1–e3 e descendentes. Se **R2 não acontecer**, a conversa local permanece hipótese independente; caem e4–e6 e descendentes. A convergência de pacote versionado perde um de seus lados, não vira prova de raiz única.

**Premissas escondidas expostas:** acesso aos pesos; direito de distribuí-los; permissão para microfone; memória e energia disponíveis durante uma visita; intenção do público de usar voz; preferência de intérpretes por variabilidade; capacidade de registrar sessões sem coleta excessiva. W1 e W2 cobrem quebra de duas premissas. Economia de carbono foi removida porque inferência local pode simplesmente deslocar consumo.

**Viés da máquina/autoria:** o gosto por instrumentos expressivos fazia e4.1.1 parecer inevitável. Não há contrato aberto que o sustente. O desejo de autonomia fazia e1 parecer prova de independência do fornecedor, mas atualizações e licenças podem manter dependência.

**Calibração final:** primeira ordem: alta 0, média 2, baixa 4; segunda: alta 0, média 1, baixa 5; terceira: alta 0, média 0, baixa 6. Na R1 há um piso: tudo fica baixo porque a raiz está em demo; não invento uma quarta categoria para simular queda adicional. A distribuição total cai e nenhum terceiro nível é alto.

### Registro de alterações do rascunho causal

| ID | Antes | Depois | Razão |
|---|---|---|---|
| e1 | confiança média; sinal médio | confiança baixa; sinal fraco | A capacidade composta local não está comprovada pelos componentes; a regra de demo se estende a toda R1 |
| e1.1 | prazo 2028 | 2030 | Compra institucional não acompanha instantaneamente a prova técnica; dois anos adicionais assumidos |
| e2.1 | prazo 2028 | 2030 | Equivalência de controle exige desenho e teste, não só TTS |
| e3 | prazo 2027 | 2029 | Não há medição prolongada; adiamento de dois anos contra o salto demo–parque real |
| e4.1.1 | confiança média | baixa | Não foram encontrados contratos separando a remuneração |
| e5 | confiança média; prazo 2027 | baixa; 2029 | Nenhuma integração de jogo aberta; prazo rápido confrontado com CR-A/CR-B |
| e6.1 | confiança média | baixa | Pacote com rastros e contingência é inferência comercial |
| candidato c1 | R1 elimina telas em 2029 | removido para 12.4 | Não deriva de execução local e exclui quem não fala |
| candidato c2 | R2 elimina compositores em 2028 | removido para 12.4 | Não distingue execução, direção e responsabilidade |

Os valores “antes” correspondem à formulação preliminar auditada nesta composição; não representam uma versão publicada anterior. Há rebaixamento em ambas as raízes.

## 8. O que a máquina errou

1. **Aceitei provisoriamente a frase “não entrega canais separados”.** A abertura de F8 mostrou exportação de stems. Corrigi a âncora e recusei usar esse limite como novidade futura. Separação continua diferente de pistas originais.
2. **Quase tratei TTS local como conversa local.** F2 diz explicitamente que a demo é remota e F3 descreve síntese. R1 é uma capacidade composta ainda especulativa; corrigi sua confiança e não aleguei teste em celular.
3. **A referência de quatro anos era precisa demais.** F11 data um produto e F12 mede a categoria, com aparelhos anteriores. Não estabelecem demo→10%. Transformei a referência em comparação imperfeita declarada e retirei confiança alta de prazos.
4. **O enunciado induzia a confundir oferta e adoção.** A diferença em F9 impede converter percentual de uploads em preferência de ouvintes. Não estimei a quota Rogers de nenhuma raiz.
5. **O mecanismo de remuneração em e4.1.1 soava convincente sem contrato.** Rebaixei para baixa, sinal fraco. É uma hipótese a confrontar com produtores, não descoberta de campo.
6. **“Links não respondem” seria diagnóstico errado do Python.** A inspeção mostrou falha de DNS uniforme no shell; abertura pela web funcionou. Conservo o resultado literal do verificador e identifico a limitação de rede. Nenhuma fonte foi inventada para fazê-lo ficar verde.

## 9. Três cenários para 2031

**Provável.** É 2031. Algumas instalações oferecem diálogo vocal local, mas mantêm tela, texto e aparelhos de empréstimo. Instrumentos gerativos aparecem em palcos e jogos selecionados; a gravação pronta continua sendo solução simples para experiências que precisam se repetir. Fornecedores vendem versões e modos de contingência. O sinal precoce que indicou esta trajetória foi a repetição de uso em projetos independentes, acompanhada de publicação de falhas, não só lançamentos.

**Desejável.** É 2031. Visitantes conseguem interromper, corrigir e silenciar o guia sem precisar falar, e recebem a mesma qualidade de experiência em aparelhos acessíveis. Músicos controlam limites do gerador e têm acordos claros sobre operação e gravação. A autoria humana é legível nas escolhas, sem fingir que um modelo responde por direitos. O sinal precoce foi a combinação de testes públicos de equivalência entre modos com pacotes portáveis e contratos que remuneram o trabalho durante a execução.

**Indesejável.** É 2031. A promessa de autonomia local se concentra em poucos aparelhos; o visitante sem equipamento compatível recebe uma experiência inferior. Som gerado ao vivo exige auditoria que só estúdios grandes conseguem pagar, enquanto os pequenos voltam a material congelado. Uma atualização muda a voz ou o comportamento musical de instalações já entregues. O sinal precoce foi o aumento de exigências de hardware e a impossibilidade de reinstalar versões anteriores em projetos reais.

## 10. O experimento

**Bancada comparativa, não uma demonstração promocional.** Construir dois módulos curtos e independentes; não executar compras ou instalar modelos como parte desta entrega. Pergunta conjunta: o som gerado durante a interação cria controle novo e útil ou apenas uma alternativa mais cara ao áudio preparado?

**Módulo vocal.** Num computador compatível, testar um modelo fala-a-fala local como Moshi contra um guia com respostas gravadas e seleção por texto/botão. O objetivo é uma orientação sobre um pequeno conjunto de objetos, sem decisões sensíveis. A condição emergente precisa operar com rede desligada e aceitar sobreposição; uma cascata com Pocket TTS pode servir de terceiro comparador, nunca de prova de full-duplex nativo. Se a equipe não conseguir executar a condição, registrar inviabilidade no hardware escolhido e não substituí-la silenciosamente por nuvem. Teste em português é separado de teste em inglês: bom desempenho em inglês não aprova o requisito brasileiro.

**Módulo musical.** Usar Magenta RealTime 2 pequeno em Apple Silicon compatível e comparar com sampler/loops e transições programadas. Mesma cena interativa, controles contínuos equivalentes, material prévio com variedade suficiente para que o comparador maduro não seja uma caricatura. A pessoa deve conduzir transições e tentar repeti-las depois. O emergente gera material não pré-renderizado; o maduro pode resolver a tarefa sem essa novidade, o que falsearia o valor da ruptura para esse uso.

**Em sala.** Protocolo proposto: doze participantes voluntários, ordem contrabalançada, três tarefas por módulo, incluindo interrupção inesperada e repetição de uma transição. Esses números são escolhas de viabilidade didática, não amostra representativa. Não clonar voz de terceiro; usar voz própria consentida ou voz licenciada. Oferecer participação por controles silenciosos sem penalização. Guardar latência ponta a ponta, conclusão de tarefa, falhas, preferência com justificativa, temperatura e consumo relativo da sessão quando mensuráveis; não converter temperatura em carbono.

**Critério prévio de mudança de ideia.** Se o comparador maduro cumprir todas as tarefas relevantes com controle e avaliação equivalentes ou melhores, recusar a necessidade da raiz naquele caso. Se menos de nove das doze pessoas conseguirem as três tarefas no gerador sem intervenção do operador, rebaixar a prontidão para esse público; nove é um gate didático assumido, não significância estatística. Se desligar a rede impedir a condição vocal, o requisito local falhou. Se a variação musical só for tolerada na preparação e não na execução, deslocar e4/e5 para ferramenta de produção. Verificar ainda direitos e compatibilidade antes de implementar; o mapa não conclui que licenças de código autorizam todos os usos de voz ou música.

## 11. Fontes

Todas abertas nesta rodada; leitura documental, não teste. F1 e F10: abstract e metadados, não leitura integral dos PDFs. Data de acesso: 11/09/2026. Quinze fontes, sem contar resultados de busca não abertos. As referências F são usadas para não multiplicar URLs no corpo.

1. **F1 — Moshi, Défossez e colaboradores (2024).** https://arxiv.org/abs/2410.00037 — sustenta fluxos paralelos de fala e latência relatada. Fonte primária de pesquisa; resultados dos autores, sem reprodução nesta rodada.
2. **F2 — Kyutai, Text-to-speech.** https://kyutai.org/tts/ — datas e distinção entre modelo local e demo remota. Fonte primária institucional, sujeita a atualização.
3. **F3 — Kyutai, Pocket TTS, repositório.** https://github.com/kyutai-labs/pocket-tts — CPU, síntese, português e instruções de execução. Código e README primários; desempenho anunciado depende da máquina.
4. **F4 — Magenta RealTime 2 (04/06/2026).** https://magenta.withgoogle.com/magenta-realtime-2 — controle em fluxo, suporte local e limites temporais. Relato primário dos construtores, sem benchmark independente aqui.
5. **F5 — Introducing Lyria RealTime API (12/06/2025).** https://magenta.withgoogle.com/lyria-realtime — interfaces, plugin e performance demonstrada. Fonte primária de lançamento; demonstração não equivale a adoção profissional.
6. **F6 — Documentação Lyria RealTime.** https://ai.google.dev/gemini-api/docs/realtime-music-generation — API experimental e limites de transição. Documentação técnica primária; mudanças futuras podem alterar a interface.
7. **F7 — Suno, About.** https://suno.com/about — alcance acumulado autodeclarado e disponibilidade multiplataforma. Fonte comercial primária; não pesquisa de penetração ou auditoria de usuários.
8. **F8 — Suno, Introducing Studio 2.0 (13/08/2026).** https://help.suno.com/en/articles/13670529 — separação e exportação de stems. Documentação comercial primária; não prova qualidade da separação.
9. **F9 — Deezer, AI-generated tracks represent 44% of new uploaded music (20/04/2026).** https://newsroom-deezer.com/2026/04/ai-generated-tracks-represent-44-of-new-uploaded-music/ — diferença entre uploads e streams, regras de recomendação. Métrica primária de uma plataforma com interesse comercial em detecção; não representa o mercado global.
10. **F10 — CORAA, Candido Junior e colaboradores (2021).** https://arxiv.org/abs/2110.15731 — recurso brasileiro de reconhecimento de fala espontânea. Fonte primária; não avaliação de modelos generativos de 2026.
11. **F11 — Apple Reinvents the Phone with iPhone (09/01/2007).** https://www.apple.com/newsroom/2007/01/09Apple-Reinvents-the-Phone-with-iPhone/ — marco histórico de apresentação. Fonte primária corporativa; não mede adoção.
12. **F12 — Pew Research Center, Smartphone Adoption and Usage (11/07/2011).** https://www.pewresearch.org/internet/2011/07/11/smartphone-adoption-and-usage/ — 35% dos adultos americanos com smartphone. Pesquisa com metodologia publicada; categoria e país diferentes das raízes deste mapa.

13. **F13 — Amazon, Echo Now Available to All Customers (23/06/2015).** https://press.aboutamazon.com/2015/6/amazon-echo-now-available-to-all-customers — registra apresentação sete meses antes e oferta geral em 2015. Fonte primária histórica; não pesquisa de adoção.
14. **F14 — SSRS/Edison, Smart Audio Report 2022 (16/06/2022).** https://ssrs.com/insights/smart-audio-report-2022/ — uso de assistentes por 62% dos adultos americanos em 2022. Pesquisa primária; a URL histórica da Edison redirecionou para esta edição, portanto não comprova dados de 2017.
15. **F15 — National Public Media, The Smart Audio Report.** https://www.nationalpublicmedia.com/insights/reports/smart-audio-report/ — confirma a edição 2022 e oferece índice histórico. Fonte primária ligada ao mesmo estudo de F14, não replicação independente.

## 12. Anexo — o levantamento bruto

### 12.1 Contrato e percurso da rodada

Objetivo contratado antes da redação: mapa independente de voz e som gerativos, horizonte 2031, com duas a quatro raízes emergentes, três ordens, mecanismos, fontes abertas, autocrítica e verificação literal. Fora do contrato: gerar áudio, implementar protótipo, publicar, enviar mensagens ou comparar o mapa de aluno. A skill fornecida foi aplicada em modo MAPA. Também foi consultada a skill zerbini apenas para orientação de caminhos; o destino fornecido já pertence à pasta da rodada. O caminho /Users/giordano/Cosmos é um link para /Volumes/Extra/cosmos, confirmado localmente: não são duas cópias.

A consulta leve ao registro de memória global não trouxe conteúdo temático aproveitado; a entrada de monitoria CIN0055 não foi usada. O índice canônico de decisões da disciplina trouxe critérios de independência e maturidade, aplicados sem importar resultados numéricos de outras rodadas. O documento não depende de memória factual de pesquisas anteriores.

A integração CodeAgentSwarm não pôde ser ativada: `check_active` retornou “MCP tool call requires approval, but approval policy is never”. Pela regra dessa integração, a seção de tarefas foi ignorada e a rodada continuou em modo independente. Não se pediu permissão nem se criou dashboard/cron: esta é uma rodada documental em projeto existente.

### 12.2 Briefing e premissas assumidas

Dados fornecidos: tema Voz e som gerativos; slug voz-e-som-gerativos; autor grec; zona Percepção e mídia sintética; global com nota Brasil; público de projeto de mídia e interação; 2031; três ordens; viés neutro; nenhuma raiz suspeita; excluir produto de massa e frases genéricas; web obrigatória; nenhuma pergunta ao usuário; maturidade ou ausência de ruptura como falseador.

Assumido: “visível” é presença verificável em projetos do público, não maioria da humanidade. Aparelho significa computador ou dispositivo pessoal explicitamente testado, não promessa universal de celular. Os casos de museu e jogo organizam a investigação e não foram escolhidos pelo autor. `publico_ok: false` segue o padrão; login não é autorização para atribuição pública. Confiança global baixa decorre da combinação local não comprovada e da falta de adoção medida, não da ausência de entrevista.

Premissas temporais: CR-A é comparação favorável imperfeita. Os dois anos de integração e um ano institucional adicional são reservas de planejamento assumidas, não médias estatísticas. Não foi encontrado intervalo confiável demo→10% de instrumentos musicais gerativos ou conversação local. Esse requisito da skill fica atendido apenas como classe explicitada e auditada, com lacuna quantitativa declarada; não alego calibração empírica plena.

Premissas experimentais: doze pessoas, três tarefas e gate de nove são critérios didáticos propostos. Não foram observados nem são dados científicos. O hardware disponível à turma ainda precisa ser inventariado. A documentação de um produto não substitui verificação de licença, nem consentimento para usar voz alheia.

### 12.3 Buscas completas e trilhas não aproveitadas

| Busca efetivamente enviada | Idioma predominante | Resultado aproveitado e limite |
|---|---|---|
| Kyutai Moshi on device full duplex speech model latency paper | inglês | F1; sem taxa de usuários e sem prova geral em celular |
| generative music editable stems real time streaming model 2025 2026 | inglês | F4–F6; papers adicionais retornaram, mas não foram abertos nem citados |
| Suno 100 million users stems Studio 2026 | inglês | F7–F8; buscas trouxeram notícias, mas os números finais vêm de páginas primárias abertas |
| voz sintética Brasil pesquisa adoção música inteligência artificial 2025 | português | Retornou pesquisa jurídica e musical; não gerou taxa confiável comparável de adoção |
| site.pewresearch.org 2011 smartphone 35% Americans | inglês | F12; não fornece a data exata de cruzamento de 10% |
| site.deezer-investors.com 2026 AI generated music 44 percent | inglês | F9 pelo newsroom; consumo e uploads separados |
| site.kyutai.org pocket tts 2026 CPU | inglês | F2–F3; síntese local não é diálogo local |
| Brasil voz sintetica português síntese fala local benchmark CORAA | português | F10; recurso de ASR, sem adoção e sem avaliação generativa contemporânea |

Abertura direta adicional: F11 para conferir o marco histórico de 2007. Na revisão temporal, três consultas complementares elevaram o total a onze: `site.npr.org 2018 smart audio report 16 percent Americans`; `site.aboutamazon.com November 2014 Echo introduced`; `site.edisonresearch.com 2018 16% smart audio report`. Foram abertas a nota Amazon (F13), a página Edison solicitada e redirecionada para SSRS 2022 (F14), e o índice NPM (F15). O redirecionamento impede citar como lido o conteúdo de 2017 visto no snippet. O PDF Fall/Winter 2017 vinculado no índice foi aberto, mas retornou extração insuficiente; a tentativa de screenshots não forneceu conteúdo visual inspecionável nesta interface. Por isso, não importei dele o número de 16% nem o conto como fonte lida. Essa busca suplementar não resolveu a data exata de travessia de 10%; conserva-se a limitação quantitativa de CR-A/CR-B.

**Não aproveitados, por não abertura:** notícias sobre acordos industriais, postagens Reddit sobre qualidade dos stems, paper sobre destilação musical de junho de 2026, PATRICIA, SOTAQUE, estudos jurídicos e corpus de rádio. São trilhas para futura investigação, não fontes desta rodada. Não foram importadas alegações de licenciamento ou processos desses snippets. Nenhuma busca retornou literalmente zero resultados; três objetivos ficaram sem resposta: taxa brasileira, adoção recorrente de cada raiz e data demo→10% para comparadores específicos.

**Lista da turma recebida como contexto, não como evidência:** Suno, Udio, 1BITDRAGON, signalflow, pydub, Hacklily, ChatTTS, pytorch/audio, Whisper, Bark, piper-tts-web, plugin-tts-openai, openclaw-voice, expo-ai-kit, espnet e PastPort. Nenhum repositório indicado por aluno foi tomado como prova. Suno reaparece somente para testar e recusar a premissa de maturidade do próprio enunciado, com fontes primárias abertas novamente; não fornece sinal positivo às raízes. A independência temática não é cegamento perfeito porque o enunciado já expõe os nomes.

### 12.4 Candidatos e efeitos removidos, sem corte silencioso

| Candidato | Formulação bruta | Destino e razão |
|---|---|---|
| raiz-canção | Qualquer pessoa gera uma música completa | Contexto 3 e recusa 4; capacidade de produto de massa observada |
| raiz-stems | A música se tornará editável quando houver stems | Recusada: premissa técnica já contrariada; edição por si só pode ser sustentadora |
| raiz-clone | Qualquer voz passa a poder ser imitada | Contexto de identidade; disponibilidade não prova nova ruptura para este recorte |
| c1 | A voz elimina a tela em 2029 | Removido: confunde modalidade alternativa e universal; falta mecanismo que obrigue abandono da tela |
| c2 | A geração elimina o compositor em 2028 | Removido: salto de capacidade para substituição sem contratar, orientar e responsabilizar |
| c3 | Modelos locais reduzem carbono | Removido: faltam carga, energia, ciclo de vida e comparação com rede/servidor |
| c4 | Golpes de WhatsApp destroem a confiança na voz | Fora da árvore: podem acontecer sem diálogo local ou música ao vivo; causa solta |
| c5 | Universidades criam cursos de IA sonora | Fora da árvore: sem curso, decisão ou mecanismo específico, serviria a qualquer tema |
| c6 | Reguladores criam nova lei da voz | Fora da árvore: sem regulador e processo identificados; previsão jurídica genérica |
| c7 | Música sintética vira maioria do streaming | Removido: upload não é consumo; não há denominador global |
| c8 | Artista sintético lidera a parada | Wildcard não adotado: novidade/raridade não verificada, e não altera necessariamente as raízes |
| c9 | Novo profissão de prompt musical aparece | Removido: renomeia atividade sem evidência de divisão estável do trabalho |

A árvore final tem um filho e um neto por primeira ordem: seis cadeias completas, três primeiras ordens por raiz. O mínimo foi mantido porque expandir geraria redundância, não porque os efeitos removidos foram escondidos. As razões e as mudanças de confiança estão nesta seção e na 7.

### 12.5 Matriz de falsificação e próximos dados necessários

| Hipótese | Evidência que a enfraquece | Evidência que justificaria nova rodada |
|---|---|---|
| R1 é ruptura de controle | Guia gravado dá a mesma capacidade de interrupção/correção e resolve as tarefas offline | Sessões comparadas mostrando ganho específico na negociação do turno |
| R1 continua emergente | Pesquisa com denominador comprova uso recorrente além da maioria inicial, ou capacidade composta vira trivial em massa | Passa a contexto; mapear outra fronteira, sem salvá-la com adjetivos |
| R2 é instrumento novo | Performers só o usam para produzir arquivos e preferem dispará-los | Uso repetido ao vivo com respostas a controle que o sampler não reproduz satisfatoriamente |
| R2 muda contratos | A remuneração permanece apenas pela mesma gravação, sem responsabilidade operacional adicional | Contratos e relatos de produtor mostrando mudança concreta do objeto |
| Execução local é inclusiva | Hardware, calor e modos de entrada excluem visitantes de modo sistemático | Teste entre classes de aparelho e alternativas silenciosas equivalentes |
| Versão executável é o produto | Compradores preferem sempre congelar WAV | Entregas aceitas com versão de modelo, rastros de sessão e manutenção explícita |

Para revisão em 2031, não basta contar produtos: distinguir uso mensal, sessão demonstrativa, uso em produção, dispositivo com componente local e dispositivo com pipeline integralmente local. Adoção sem denominador não resolve o critério Rogers.

### 12.6 Limites de fontes, inferência e decisão da rodada

Todas as consequências comerciais e institucionais são inferências identificadas. Nenhum museu, jogo, contrato de show ou política de hardware foi inventado como caso existente. Os nomes de setores são atores prospectivos, não clientes observados. A lista de atores da âncora não mede competição nem participação de mercado.

A decisão metodológica herdada de TMI-0035 foi aplicada com nova consulta: recusar canção por descrição como raiz. A regra de TMI-0018 orientou não usar a lista da turma como fonte de sinais. A nova escolha analítica é concentrar a roda no controle durante a execução, aceitando perder amplitude de catálogo para manter causalidade. O próprio mapa contém as razões de inclusão e descarte; não se registrou um fato comercial novo como decisão de governança.

Pergunta de decantação: **houve aqui alguma decisão que uma sessão futura precisaria conhecer?** Sim: as raízes selecionadas, as recusas e a separação entre componente e capacidade composta estão registradas nas seções 4, 7 e 12.4; a limitação da comparação temporal permanece explícita. Não foram alterados índices centrais, decisões vigentes ou memórias globais.

### 12.7 Verificação automática integral

A abertura documental das quinze fontes pela ferramenta web funcionou. Uma checagem preliminar com `urllib.request`, o mesmo cliente do verificador, falhou para todos os domínios com `[Errno 8] nodename nor servname provided, or not known`. Isso é limitação de DNS/rede do shell deste ambiente, não evidência de HTTP 403 nem de página inexistente. Não cabe retirar todas as fontes para esconder o problema. O verificador original não foi modificado; a saída integral da execução pedida vem abaixo. A verificação de estrutura pode passar enquanto a verificação de links continua impedida por rede.

```text
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 2 (frontmatter diz 2)
efeitos ordem 1: 6 (frontmatter diz 6)
efeitos ordem 2: 6 (frontmatter diz 6)
efeitos ordem 3: 6 (frontmatter diz 6)
prazo > horizonte (2031) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 0 · media 2 · baixa 4
confiança ordem 2: alta 0 · media 1 · baixa 5
confiança ordem 3: alta 0 · media 0 · baixa 6
  link não responde: https://ai.google.dev/gemini-api/docs/realtime-music-generation
  link não responde: https://arxiv.org/abs/2110.15731
  link não responde: https://arxiv.org/abs/2410.00037
  link não responde: https://github.com/kyutai-labs/pocket-tts
  link não responde: https://help.suno.com/en/articles/13670529
  link não responde: https://kyutai.org/tts/
  link não responde: https://magenta.withgoogle.com/lyria-realtime
  link não responde: https://magenta.withgoogle.com/magenta-realtime-2
  link não responde: https://newsroom-deezer.com/2026/04/ai-generated-tracks-represent-44-of-new-uploaded-music/
  link não responde: https://press.aboutamazon.com/2015/6/amazon-echo-now-available-to-all-customers
  link não responde: https://ssrs.com/insights/smart-audio-report-2022/
  link não responde: https://suno.com/about
  link não responde: https://www.apple.com/newsroom/2007/01/09Apple-Reinvents-the-Phone-with-iPhone/
  link não responde: https://www.nationalpublicmedia.com/insights/reports/smart-audio-report/
  link não responde: https://www.pewresearch.org/internet/2011/07/11/smartphone-adoption-and-usage/
links da seção 11: 0/15 respondem (frontmatter diz fontes: 15)
RESULTADO: 1 problema(s) — corrija antes de entregar
```
