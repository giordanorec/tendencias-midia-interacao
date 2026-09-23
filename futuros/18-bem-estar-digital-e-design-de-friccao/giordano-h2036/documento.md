---
tema: "Bem-estar digital e design de fricção"
slug: bem-estar-digital-e-design-de-friccao
autor_login: grec
zona_de_interesse: Pessoas e dados
data: 2026-09-22
horizonte: 2036
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 16
efeitos_ordem_2: 24
efeitos_ordem_3: 22
tecnologias_citadas: [rolagem infinita, autoplay, notificação push, sistema de recomendação, DSA, Digital Fairness Act, SAFE for Kids Act, SB 976, ECA Digital, Lei 15.100, estimativa de idade por rosto, Persona, cifra ponta-a-ponta, NFC, Brick, Bloom, Light Phone III, LightOS, Aperture, Paper Phone, Envelope, Yondr, one sec, Opal, Digital Habits Blocker, Olauncher, FeurStagram, intervenção gradual visual, intervenção gradual háptica, câmera frontal ao vivo, Bangle.js 2, WellScreen, intervenção adaptativa just-in-time, lembrete de pausa do ChatGPT, Character.AI, cognitive forcing functions, harness de agente de código, ganchos (hooks), breakwatch, workshop-wellbeing-hooks, modelo local no dispositivo]
fontes: 29
confianca: media
experimento: "Freio por intenção — um interceptador (extensão de navegador e gancho de harness de agente) que pergunta a intenção na abertura, compara com o que de fato aconteceu usando um modelo local, e testa essa fricção contra a pausa fixa do tipo one sec, medindo arrependimento e não minutos"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Até 2036, a fricção deixa de ser um acessório que o usuário instala por conta própria e passa a
ser disputada por quatro forças que não conversam entre si. O regulador e o tribunal passaram a
tratar o *desenho* da plataforma como causa de dano (Comissão Europeia contra TikTok e Meta em
2026; júri de Los Angeles contra Meta e YouTube em março de 2026; SAFE for Kids Act de Nova York
com regras finais em julho de 2026; ECA Digital no Brasil). O hardware e o ritual de desconexão
viraram mercado de nicho real (Brick, Bloom, Light Phone III, Yondr em milhões de alunos, lei
brasileira de celular na escola adotada por 92% dos gestores). O alvo da fricção começa a migrar do
feed para o assistente de IA, porque a evidência de 2026 mostra perda de persistência e de
aprendizado depois de pouco uso. E a intervenção começa a sair do cronômetro para o contexto e o
corpo. O achado central do mapa é uma convergência que joga contra o próprio tema: nas quatro
raízes, a fricção eficaz é a menos aceita, e a fricção aceita se desgasta — o que empurra o freio
a adotar a lógica de novidade do engajamento que ele combate. Confiança média; terceira ordem
inteira em confiança baixa.

## 2. O tema

**O que é.** Interfaces e objetos desenhados para serem usados *menos*: pausas impostas antes de
abrir um app, pontos de parada no feed, objetos que trancam o aparelho, telefones que não rodam
rede social, capas que escondem a tela, rituais institucionais de desconexão. O objeto do mapa é
reduzir, interromper e recuperar a atenção — o design contra o próprio uso. A fronteira com o tema
19 (companheiros digitais e vínculo afetivo com IA) é mantida: aqui entra a IA como ferramenta que
se usa demais, não como vínculo.

**Onde encosta em mídia e interação.** Toda a gramática de interação dos últimos vinte anos foi
escrita para remover atrito: rolagem infinita, autoplay, notificação, recomendação personalizada. A
mudança em curso inverte o sinal do atrito — ele passa de defeito a remover para material de
projeto. Isso atinge o ofício de quem projeta (o "ponto de parada" vira componente), o modelo de
negócio de quem distribui mídia (o fim do autoplay mexe na impressão passiva) e a forma dos
aparelhos (o objeto de função única volta).

**Por que um mapa de futuro e não um estado da arte.** Porque o que está maduro aqui — bloqueador
de app, contador de tempo de tela, "não perturbe" — é exatamente o que a régua da disciplina manda
descartar, e o que está emergindo muda de formato: sai do software do próprio aparelho para a lei,
o objeto, o agente de IA e o sensor. Essas quatro saídas têm donos, incentivos e velocidades
diferentes, e é o cruzamento delas que decide o que existe em 2036. Um levantamento listaria
produtos; o mapa precisa dizer o que cada saída quebra e quem reage.

**Premissas do briefing** (todas dadas; nenhuma assumida sem declaração): horizonte 2036; público:
quem projeta mídia e interação; recorte global com nota sobre o Brasil; descartado de início o que
já é comum em produto de massa; nenhuma raiz suspeita; viés neutro; zona "Pessoas e dados";
falseador declarado pelo autor: *evidência de que a adoção já passou da maioria inicial (Rogers) ou
de que a tecnologia não rompe nada, só melhora o que existe* — usado como critério no §7.

## 3. Onde isso está hoje

Âncora feita com busca na web em 22/09/2026 (22 buscas, 29 fontes abertas e lidas; lista em 11 e
registro das buscas em 12.3).

### O que já existe e funciona

- **Fricção de autoaplicação com evidência de campo.** O one sec, app de "self-nudge", foi testado
  em experimento de campo com 280 participantes por seis semanas: em 36% das tentativas de abrir o
  app-alvo o usuário desistia após a interferência, as tentativas caíram 37% em relação à primeira
  semana, e a abertura efetiva caiu 57% após seis semanas; num experimento pré-registrado com 500
  pessoas, o componente mais eficaz foi *oferecer a opção de desistir*, a espera reduziu consumo e
  a mensagem de deliberação não teve efeito (Grüning, Riedel e Lorenz-Spreen, PNAS 2023 — fonte
  15). O estudo longitudinal com 1.039 usuários por 13,4 semanas em média confirmou a redução de
  tentativas e aberturas mais intencionais, mas registrou que os usuários *tiram pausas da própria
  intervenção e voltam rápido ao uso excessivo* (Haliburton et al., CHI 2024 — fonte 16).
- **Fricção configurável por pesquisadores.** O Digital Habits Blocker (Lyngs, Oxford; Kollnig,
  Maastricht), código aberto, bloqueia apps e sites com "desafios de digitação" de dificuldade
  ajustável para impedir o desbloqueio impulsivo, em macOS, Windows, iOS e Android (fonte 21).
- **Ecossistema aberto.** O tópico `digital-wellbeing` do GitHub lista 446 repositórios; os mais
  estrelados são launcher minimalista (Olauncher, 3,8 mil estrelas), bloqueadores, e um cliente de
  Instagram que remove reels e feed mantendo mensagens (FeurStagram, 929) — isto é, a remoção do
  formato, não o bloqueio do app, já aparece no topo (fonte 22).
- **Objetos de desconexão à venda.** Bloom a US$ 39 com mais de 60 mil unidades vendidas e Brick
  a US$ 59, ambos pucks que travam apps por contato; a Fortune registra a ironia de a categoria
  crescer pelas redes que combate (fonte 10). Light Phone III lançado em 2025, preço final US$ 799,
  5G e eSIM, sem rede social, e-mail nem navegador, fabricado pela Foxconn (fonte 12).
- **Fricção institucional em escala.** Yondr, bolsa magnética trancável: pelo menos 2,5 milhões de
  alunos nos EUA, escolas em 50 estados e 45 países, US$ 25 a 30 por aluno; a empresa não divulga
  receita e declara "crescimento de três dígitos" (fonte 13). No Brasil, um ano após a Lei
  15.100/2025, 92% dos gestores dizem aplicar a restrição de celular na escola; a restrição em todos
  os espaços subiu de 20% para 48%; 39% relatam falta de infraestrutura de guarda — 45% nas públicas
  contra 18% nas privadas (pesquisa Inep com Alana e Unesco, 8.189 gestores — fonte 9).
- **Fricção que as plataformas já fazem por conta própria.** Lembrete do ChatGPT desde agosto de
  2025 — "*You've been chatting for a while—is this a good time for a break?*" —, dispensável com
  um clique (fonte 28). Character.AI encerrou o chat aberto para menores de 18 até 25/11/2025, com
  teto diário de duas horas em rampa descendente e verificação de idade com modelo próprio e
  Persona (fonte 29).

### O que existe e ainda não funciona

- **A fricção que as plataformas já oferecem não reduz o risco, segundo o regulador.** A Comissão
  Europeia concluiu preliminarmente, em 6/2/2026, que as ferramentas de tempo de tela e de controle
  parental do TikTok "não parecem reduzir efetivamente os riscos", e sugeriu desligar a rolagem
  infinita, impor pausas de tela efetivas inclusive à noite e adaptar o recomendador (fonte 1). Em
  10/7/2026, o mesmo para Instagram e Facebook, com desligamento de rolagem infinita e autoplay por
  padrão; a Meta discorda e cita as Teen Accounts (fonte 2).
- **Proibição por idade sem desenho não muda o uso.** Três meses após a proibição australiana para
  menores de 16, 81% ainda usavam ao menos uma plataforma restrita (86% antes), uso diário de 60%
  para 58%, 4,7 milhões de contas removidas e cerca de metade dizendo que a plataforma não
  verificou sua idade (fonte 6). É o contraponto que mais pesa: restringir *acesso* não é o mesmo
  que mudar *formato*.
- **Fricção eficaz é fricção rejeitada.** No estudo de campo com 104 pessoas por sete dias sobre
  vídeo curto, o pop-up explícito fez parar mais rápido (mediana 7 s) mas teve a avaliação
  subjetiva caindo; a intervenção visual gradual foi a mais aceita e a mais lenta (mediana 56 s); e
  quem tem alta impulsividade e baixo autocontrole respondeu melhor ao pop-up explícito (Meinhardt
  et al., IMWUT 2026 — fonte 17). Na IA, o mesmo: as intervenções de *cognitive forcing* que mais
  reduziram a dependência excessiva receberam as piores notas subjetivas (Buçinca, Malaya e Gajos,
  CSCW 2021, N=199 — fonte 24).
- **Aperture** (Special Projects): capa que, virada, mostra só uma janela da tela com interfaces
  mínimas geradas por IA e voz; "conceito que caminha para a realidade", finalista do Fast Company
  Innovation by Design 2025, sem produto à venda (fonte 11).
- **Intervenção por contexto e corpo** existe em laboratório: 21 participantes, sete dias, 1.445
  questionários por sessão, relógio Bangle.js 2 de US$ 80; o maior preditor de arrependimento foi a
  distância entre o uso pretendido e o real; propõe arquitetura em duas camadas para intervenções
  *just-in-time* (Ahmed, … Maes — fonte 19). Rosto ao vivo pela câmera frontal a cada 20 vídeos
  reduziu consumo (61,3 contra 94,4 vídeos), mas a tela preta, pensada como controle, foi a mais
  aceita (Kim et al., CHI EA 2026, N=84 — fonte 18). Reflexão diária estruturada: 25 estudantes,
  duas semanas, má percepção sistemática do próprio uso e cerca de 10% de melhora em afeto positivo
  (Bhat et al., CHI 2026 — fonte 20).

### Quem constrói

1. **Reguladores e tribunais**: Comissão Europeia (DSA, e o Digital Fairness Act com proposta
   esperada para 2026 — fonte 3); procuradoria de Nova York (SAFE for Kids Act, vigência em
   25/1/2027, feed em ordem fixa para menores sem consentimento, sem notificação entre 0h e 6h —
   fonte 4); o júri de Los Angeles (fonte 5); a ANPD no Brasil (fontes 7 e 8).
2. **Pequenas empresas de hardware e app**: Brick, Bloom, Light, Yondr, Opal, one sec.
3. **Estúdios de design especulativo**: Special Projects (Envelope e Paper Phone em 2019, Aperture
   em 2025).
4. **Pesquisa em IHC**: LMU Munique (Haliburton, Terzimehić), Ulm (Meinhardt, Rukzio), Oxford
   (Lyngs), MIT Media Lab (Maes), Harvard (Gajos, Buçinca).
5. **Provedores de IA**, reativamente: OpenAI (lembrete), Character.AI (teto e corte),
   Anthropic (pesquisa sobre formação de habilidade com IA — fonte 25).
6. **Comunidade aberta**: 446 repositórios em `digital-wellbeing`, extensões que tiram o formato.

### Números de adoção

- Opal: 1 milhão de usuários ativos diários e US$ 10 milhões de receita anual recorrente após virar
  freemium (conversão caiu de 20% para 9%; dois terços dos ativos são usuários gratuitos, sobretudo
  estudantes) — entrevista do fundador, abril de 2026 (fonte 14). Número do fornecedor.
- Bloom: mais de 60 mil unidades (fonte 10). Brick: sem número; a empresa não divulga.
- Yondr: 2,5 milhões de alunos (fonte 13).
- Brasil: 92% dos gestores escolares aplicando a Lei 15.100 (fonte 9).
- Light Phone III: sem número de vendas encontrado.
- Mercado total de "detox digital": sem número confiável aberto nesta rodada (12.4).

Leitura da difusão (critério do §2): **bloqueio de app no software do próprio aparelho é maioria**
(nativo no iOS e no Android desde 2018) e fica fora como raiz. Fricção física de consumo está em
**produto de nicho**. Fricção institucional na escola está em **maioria no Brasil** como política,
e por isso entra como *contexto* e não como raiz; o que é raiz é o objeto e o ritual como produto
fora da escola. Fricção por regulação está em **demo pública** (acusações preliminares, um veredito
de primeira instância, regras que entram em vigor em 2027). Fricção em IA e fricção por contexto
estão em **laboratório/demo**.

## 4. As disrupções-raiz

Candidatos recusados como raiz:
- *Bloqueador de app e contador de tempo de tela*: adoção em maioria desde 2018 (nativo nos dois
  sistemas); tratado como contexto na seção 3.
- *"Não perturbe" e modo foco*: idem.
- *Proibição de celular na escola*: maioria no Brasil desde 2025 como política; tratada como contexto
  e como efeito (e7).
- *Proibição de rede social por idade (modelo australiano)*: rompe acesso, não formato; a própria
  avaliação do regulador mostra uso quase inalterado (fonte 6). Tratada como caminho concorrente e
  como parte de e3.
- *Dumbphone como categoria*: existe há décadas; o que muda é o *par* aparelho mínimo + smartphone,
  tratado em e6.1.

### d1 — A fricção deixa de ser escolha do usuário e vira obrigação do produto, especificada por regulador e por tribunal

- **O que rompe.** A suposição de que o dono da plataforma decide o padrão de engajamento e de que
  "tempo gasto" é métrica legítima de produto. Pela primeira vez o objeto da acusação é a
  arquitetura, não o conteúdo, os dados ou a concorrência (fonte 1).
- **Por que agora.** Três pré-condições que só se juntaram em 2025–2026: o DSA com dever de
  avaliação de risco sistêmico em vigor e aplicado; o primeiro veredito de júri contra o desenho
  (março de 2026, fonte 5); e normas de menores que especificam o formato do feed (NY, fonte 4;
  ECA Digital, fonte 7).
- **Difusão.** Demo pública: acusações preliminares, veredito recorrível, regras com vigência em 2027.
- **O que falta.** Decisão final da Comissão; texto do Digital Fairness Act; confirmação em recurso;
  e, sobretudo, um critério de *eficácia* da fricção — hoje ninguém define o que é "pausa efetiva".

### d2 — A intervenção sai do software do próprio aparelho e vira objeto, ritual e espaço

- **O que rompe.** A suposição de que o smartphone é o aparelho único e sempre presente, e de que a
  gestão da atenção se faz dentro dele, com as ferramentas do dono do sistema.
- **Por que agora.** NFC e APIs de controle de uso permitiram a um puck de US$ 39 travar apps; o
  hardware de telefone mínimo alcançou 5G, eSIM e câmera decente (fonte 12); e a escola, por lei,
  passou a comprar a desconexão física (fontes 9 e 13).
- **Difusão.** Produto de nicho (dezenas de milhares de unidades), com o braço institucional já
  em escala.
- **O que falta.** Interoperabilidade de mensageria para o aparelho mínimo ser viável fora dos EUA;
  preço; e uma resposta dos donos do sistema operacional que não esvazie a categoria.

### d3 — O alvo da fricção migra do feed para o assistente e o agente de IA

- **O que rompe.** O princípio de desenho de assistente em vigor: responder já e por inteiro. A
  evidência de 2026 mostra que cerca de dez minutos de assistência reduzem a persistência e o
  desempenho sem IA (N=1.222 — fonte 26), e que desenvolvedores juniores assistidos aprendem menos
  (50% contra 67% no teste, N=52 — fonte 25).
- **Por que agora.** O assistente virou infraestrutura de trabalho (diário de retirada com
  trabalhadores do conhecimento — fonte 27), e o harness de agente de código passou a aceitar
  ganchos programáveis na sessão, o que permite embutir a fricção no próprio fluxo.
- **Difusão.** Laboratório e demo; produto só em gestos dispensáveis (fonte 28) ou em menores
  (fonte 29).
- **O que falta.** Um produto com fricção cognitiva que retenha usuários adultos; um comprador
  institucional; uma métrica que não seja tempo.

### d4 — A fricção passa a ser disparada pelo contexto e pelo corpo, e medida por intenção em vez de minutos

- **O que rompe.** O cronômetro e a regra fixa como forma da intervenção, e o minuto como métrica
  de bem-estar.
- **Por que agora.** Relógio barato com sensor aberto (fonte 19), modelos pequenos que podem rodar
  no aparelho, e a acumulação de estudos mostrando que a distância entre intenção e uso prediz
  arrependimento melhor que o tempo (fontes 19 e 20).
- **Difusão.** Laboratório.
- **O que falta.** Precisão da previsão fora do laboratório; aceitação da coleta de sinal íntimo;
  resolver a habituação (fontes 16 e 17).

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A fricção deixa de ser escolha do usuário e vira obrigação do produto, especificada por regulador e por tribunal
    efeitos:
      - id: e1
        ordem: 1
        efeito: Plataformas grandes na União Europeia passam a entregar rolagem infinita e autoplay desligados por padrão, com ativação por escolha do usuário
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O ponto de parada vira componente documentado do design system, produzido como evidência para o relatório de risco sistêmico do DSA
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Auditoria de design viciante vira serviço contratado como a auditoria de acessibilidade, e o designer responde por métrica de fricção em due diligence
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A versão com fim vira artefato regional, e usuários fora da UE passam a enxergar e pedir o feed que a UE recebe
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: A ANPD incorpora a especificação europeia de padrão desligado por referência em norma do ECA Digital, em vez de escrever critério próprio
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Documento interno que persegue tempo de sessão vira prova em litígio, e times de produto deixam de registrar metas de engajamento por escrito
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: A otimização migra para métricas substitutas menos auditáveis, como retorno diário e satisfação declarada, e o engajamento continua com outro nome
            sinal: fraco
            prazo: 2031
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Pesquisadores acadêmicos com acesso a dados pelo artigo 40 do DSA viram os auditores de fato dos experimentos A/B das plataformas
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Investidores e seguradoras passam a precificar risco de design viciante como passivo contingente de empresa de consumo
            sinal: fraco
            prazo: 2033
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Startups de mídia social passam a buscar selo de ausência de padrões viciantes para captar e para entrar em loja de apps escolar
                sinal: fraco
                prazo: 2036
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: A idade estimada vira o interruptor da fricção, e o mesmo feed passa a ter formato diferente conforme a faixa etária que o sistema atribui
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Plataformas usam a proteção de menores como teto e contestam a fricção para adultos, e o adulto vulnerável fica sem proteção de formato
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Adultos passam a pedir voluntariamente o modo de menor como produto, e a conta com fricção vira opção de assinatura
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: A estimativa de idade por rosto e documento põe bem-estar digital e privacidade em conflito aberto dentro do mesmo regulador
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: A fricção desce para o sistema operacional e a loja de apps, que já sabem a idade, e a responsabilidade sai do app para Apple e Google
                sinal: medio
                prazo: 2032
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: As plataformas respondem com fricção de fachada, lembretes dispensáveis com um toque, e o remédio regulatório chega diluído
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: A eficácia medida da fricção vira critério jurídico, e o dilema eficácia contra aceitação dos estudos de campo entra na decisão do regulador
            sinal: fraco
            prazo: 2032
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Estudos de campo de IHC sobre intervenções passam a ser encomendados e contestados como perícia em processos de design viciante
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: Criadores de vídeo curto cuja renda depende de impressão passiva perdem alcance quando o autoplay sai do padrão
        sinal: fraco
        prazo: 2031
        confianca: baixa
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Formatos com fim, como episódio, edição diária e grade finita, ganham valor de distribuição e a lógica de grade de programação volta
            sinal: medio
            prazo: 2033
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: O fim de sessão passa a ser projetado como momento de marca, com créditos, resumo e despedida desenhados pelo produtor de mídia
                sinal: fraco
                prazo: 2035
                confianca: baixa
  - disrupcao: A intervenção sai do software do próprio aparelho e vira objeto, ritual e espaço
    efeitos:
      - id: e6
        ordem: 1
        efeito: O objeto de função única volta como acessório de desconexão, com puck de contato, caixa trancável, capa que esconde a tela e telefone mínimo
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O smartphone se divide em um par, o aparelho principal e o aparelho de sair, com a mesma linha em eSIM nos dois
            sinal: medio
            prazo: 2032
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: No Brasil o par esbarra no WhatsApp, e a interoperabilidade de mensageria vira pauta de bem-estar e não só de concorrência
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: A desconexão vira estética de consumo vendida por anúncio nas próprias redes, e a categoria depende do canal que combate
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: O objeto vira gadget de gaveta e o mercado de desconexão encolhe por esgotamento da novidade, como a pulseira de passos abandonada
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: Escolas, empresas e casas de espetáculo passam a comprar desconexão física em escala, com bolsa trancada e armário na porta
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Espaço sem celular vira diferencial pago em restaurante, hotel, coworking e escola particular, e a desconexão vira bem posicional
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A desconexão vira marcador de classe, com a escola pública sem armário e a privada com bolsa, e a desigualdade de atenção passa a ser medida
                sinal: medio
                prazo: 2034
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: A geração brasileira que cursou a escola sem celular chega à universidade esperando espaço desconectado, e cursos copiam a regra
            sinal: fraco
            prazo: 2034
            confianca: baixa
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: Empregadores passam a oferecer horário sem aparelho como benefício de contratação para recém-formados
                sinal: fraco
                prazo: 2036
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: O objeto de fricção ganha IA e deixa de bloquear para reduzir, mostrando só uma janela com interface mínima gerada para a tarefa
        sinal: medio
        prazo: 2031
        confianca: baixa
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: A interface mínima gerada sob demanda substitui o app em tarefas curtas, e a loja de apps perde a vitrine para quem usa o objeto
            sinal: fraco
            prazo: 2034
            confianca: baixa
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Donos de app disputam o direito de não serem resumidos, e o conflito sobre quem desenha a tela chega ao regulador de concorrência
                sinal: fraco
                prazo: 2036
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: Apple e Google incorporam o gesto do objeto ao sistema, com travamento por contato e modo mínimo nativo, e esvaziam o mercado independente
        sinal: fraco
        prazo: 2029
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: Hardware independente com sistema próprio vira refúgio de quem não confia no dono do sistema operacional para desenhar o próprio freio
            sinal: medio
            prazo: 2033
            confianca: baixa
  - disrupcao: O alvo da fricção migra do feed para o assistente e o agente de IA
    efeitos:
      - id: e10
        ordem: 1
        efeito: Assistentes passam a oferecer um modo que retém a resposta e pede tentativa, explicação ou previsão antes de entregar
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Redes de ensino e universidades passam a exigir o modo com fricção em contrato institucional de IA, como exigem restrição de celular
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: A avaliação escolar passa a medir persistência sem IA como competência, e a prova sem assistente vira ritual periódico
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: Entre adultos o modo com fricção perde para o assistente sem fricção e fica escondido nas configurações, porque é o menos agradável
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e10.2.1
                ordem: 3
                efeito: Fricção cognitiva vira produto pago de carreira para quem pode escolher não desaprender, e a proteção fica com quem já tem mais
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: O harness do agente de código ganha ganchos de bem-estar que pausam, limitam e interrompem a sessão do operador
        sinal: fraco
        prazo: 2028
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: A medida de bem-estar no trabalho com agente passa de tempo para aceite sem revisão, contando mudanças que o humano aprovou sem ler
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: O limite de aceite cego entra na auditoria de código gerado, e bem-estar do operador vira requisito de segurança de software
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e11.2
            ordem: 2
            efeito: O operador de muitas sessões de agente vira o novo usuário compulsivo, com a notificação de tarefa concluída como recompensa variável
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e11.2.1
                ordem: 3
                efeito: Ferramentas de orquestração de agentes adotam janelas de despacho que agrupam avisos, como o e-mail adotou a entrega em lote
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: A retirada do assistente vira experiência reconhecida, e organizações passam a ensaiar dias sem IA como teste de resiliência
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: Ofícios regulados passam a exigir competência demonstrada sem IA em certificação periódica, como a aviação exige voo manual
            sinal: fraco
            prazo: 2034
            confianca: baixa
      - id: e13
        ordem: 1
        efeito: Provedores de IA pagos por uso limitam a fricção a gestos dispensáveis e a menores, porque a fricção real corta a receita
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: A fricção em IA se divide em forte para menores e companhia e nula para trabalho, e o uso compulsivo produtivo fica socialmente legítimo
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: O esgotamento de operador de agentes aparece em estatística de saúde ocupacional antes de existir desenho contra ele
                sinal: fraco
                prazo: 2036
                confianca: baixa
  - disrupcao: A fricção passa a ser disparada pelo contexto e pelo corpo, e medida por intenção em vez de minutos
    efeitos:
      - id: e14
        ordem: 1
        efeito: Intervenções passam a disparar por previsão de arrependimento a partir de contexto e sensor de pulso, em vez de cronômetro
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: A fricção gradual, com tela que escurece, vibração crescente e reflexo do próprio rosto, substitui o bloqueio binário no desenho de intervenção
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: A fricção adaptativa é contestada como manipulação em sentido inverso, e surge a exigência de fricção declarada e desligável
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e14.2
            ordem: 2
            efeito: O sinal íntimo coletado para frear, como fadiga e arrependimento previsto, vira ativo publicitário se sair do aparelho
            sinal: fraco
            prazo: 2032
            confianca: baixa
            efeitos:
              - id: e14.2.1
                ordem: 3
                efeito: Bem-estar vira o caso de uso que justifica exigir modelo de intervenção rodando no aparelho, sem enviar sinal a servidor
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e15
        ordem: 1
        efeito: A distância entre intenção declarada e uso real substitui o minuto como indicador de bem-estar em pesquisa e em produto
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: O contador de tempo de tela perde valor como prova regulatória e é trocado por registro de intenção, que é mais fácil de manipular
            sinal: fraco
            prazo: 2034
            confianca: baixa
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: Plataformas passam a otimizar a própria declaração de intenção, sugerindo intenções que o feed consegue satisfazer
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e16
        ordem: 1
        efeito: A habituação corrói o efeito da fricção, e o usuário tira pausas da própria intervenção e volta ao uso anterior
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e16.1
            ordem: 2
            efeito: Ferramentas de fricção passam a trocar periodicamente o tipo de intervenção para escapar da habituação, e o freio vira fluxo de novidade
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e16.1.1
                ordem: 3
                efeito: O app de bem-estar passa a otimizar usuário ativo diário como qualquer app de engajamento, e o freio compete pela mesma atenção
                sinal: medio
                prazo: 2033
                confianca: baixa
```

### Os mecanismos, efeito a efeito

**d1 — obrigação de produto.**

- **e1** porque d1 faz o remédio sugerido pela Comissão ("desligar recursos viciantes como a
  rolagem infinita", fonte 1; "desligados por padrão", fonte 2) virar a forma mais barata de
  encerrar um processo cuja multa pode chegar a 6% do faturamento mundial (fonte 2). Classe de
  referência: o banner de consentimento de cookies depois do GDPR — da vigência da norma à
  generalização do componente na UE levou pouco tempo, mas o formato só se estabilizou depois de
  anos de decisões de autoridades nacionais. Aqui o processo está em fase preliminar e há recurso;
  por isso 2029, não 2027 (ver registro em 7). Sinal forte: duas acusações nomeando o recurso e o
  remédio; uma lei nova-iorquina que já especifica feed em ordem fixa para menores (fonte 4).
- **e1.1** porque e1 faz a plataforma precisar *provar* ao regulador que o ponto de parada existe e
  funciona, e a forma de provar é documentá-lo como componente com critérios; é o mesmo mecanismo
  que transformou acessibilidade em componente auditável. Sinal médio: a Meta já argumenta com as
  Teen Accounts como evidência de conformidade (fonte 2).
- **e1.1.1** porque e1.1 cria um artefato auditável, e artefato auditável gera mercado de
  auditoria. Troca de ator (do time de produto para o auditor externo). Sem sinal hoje.
- **e1.2** porque e1 cria duas versões visíveis do mesmo produto; a diferença regional, quando
  perceptível, vira demanda de quem não a tem. Fraco: não achei caso documentado de usuário fora da
  UE pedindo a versão europeia.
- **e1.2.1** porque e1.2 e o ECA Digital (que já proíbe design manipulativo e de uso compulsivo,
  fonte 7) deixam a ANPD com o dever e sem critério técnico; a especificação europeia pronta é o
  atalho. Ator específico: ANPD, que já age sobre desenho de produto (suspendeu o Go Live do Discord
  em 12/8/2026 — fonte 8).
- **e2** porque d1 faz o próprio desenho virar objeto de responsabilidade civil — o júri concluiu
  que as plataformas foram negligentes no desenho e sabiam do perigo para menores, com rolagem
  infinita, autoplay e notificação no centro do caso (fonte 5) —, e o que prova o "sabiam" é o
  registro interno. Classe de referência: tabaco, onde a documentação interna foi o que virou os
  processos (analogia feita pelos próprios especialistas citados na fonte 5). Sinal médio: um
  veredito, milhares de casos pendentes.
- **e2.1** porque e2 pune o *registro* da meta e não a *prática* da otimização; a otimização
  migra para o que é defensável. É o efeito Goodhart com dono: o time de crescimento. Esta é a
  retroação que captura d1.
- **e2.1.1** porque e2.1 esconde a otimização nos experimentos, e o DSA prevê acesso de
  pesquisadores a dados das plataformas muito grandes; quem sabe ler experimento passa a ser o
  auditor. Artigo 40 citado de memória — ver seção 8.
- **e2.2** porque e2 transforma o desenho em passivo com valor esperado (multa de até 6% mais
  indenizações em milhares de processos), e passivo com valor esperado é precificado.
- **e2.2.1** porque e2.2 faz a ausência de padrão viciante ter valor na captação e porque o ECA
  Digital e o SAFE Act criam compradores (escolas, lojas com perfil de menor) que exigem prova.
- **e3** porque d1, nas três jurisdições lidas, amarra o formato à idade: NY exige verificar 17+
  antes de ligar o feed personalizado (fonte 4), o ECA Digital acaba com a autodeclaração de idade
  (fonte 7), Character.AI corta o chat aberto por idade estimada (fonte 29). Sinal forte.
- **e3.1** porque e3 dá à plataforma o argumento de que o problema é infantil e já foi resolvido
  para crianças — é literalmente a defesa da Meta (fonte 2). O DSA fala em "adultos vulneráveis"
  (fonte 1), então há disputa, não resultado.
- **e3.1.1** porque e3.1 deixa o adulto sem a versão calma, e a versão calma já existe, pronta, no
  modo de menor; oferecê-la como opção vira produto. Liga a d2 (o adulto já paga por fricção fora).
- **e3.2** porque e3 exige estimativa de idade, e a estimativa coleta rosto ou documento; no
  Brasil a mesma ANPD que cobra proteção de menores é a autoridade de dados, e o caso Discord já
  mostra proteção de menor em choque com cifra ponta-a-ponta (fonte 8).
- **e3.2.1** porque e3.2 torna caro cada app verificar idade, e a ANPD já monitora lojas de apps e
  sistemas operacionais (fonte 7); a camada que já conhece o usuário absorve a obrigação. Sinal
  médio: o monitoramento existe; a transferência não.
- **e4** porque d1 cria obrigação sem critério de eficácia, e a resposta mais barata à obrigação
  sem critério é o gesto mínimo: o lembrete do ChatGPT se dispensa com um toque (fonte 28), o
  regulador europeu já disse que as ferramentas do TikTok "não parecem reduzir os riscos" (fonte
  1). Quem bloqueia: as próprias plataformas. Confiança alta: é o que já acontece.
- **e4.1** porque e4 força o regulador a definir o que é fricção *efetiva*, e a única base
  empírica disponível mostra que a mais eficaz é a menos aceita (fontes 17 e 24) — logo, a decisão
  jurídica herda o dilema.
- **e4.1.1** porque e4.1 transforma estudo de campo em evidência decisiva, e evidência decisiva em
  litígio é contratada pelas duas partes.
- **e5** porque d1 tira do padrão o autoplay, que é o que produz impressão sem escolha; quem vive
  de impressão passiva perde. Quem perde, nomeado. Sinal fraco e confiança baixa: nenhum dado de
  alcance após mudança de padrão foi encontrado.
- **e5.1** porque e5 valoriza o que termina por construção; a turma trouxe `slate` (grade finita
  duas vezes ao dia) e o Paper Phone é edição diária impressa (fonte 11). Sinal médio por esses dois
  artefatos; a classe de referência (retorno da newsletter como formato com fim) está citada de
  memória.
- **e5.1.1** porque e5.1 faz do fim um momento previsível, e momento previsível é espaço de
  projeto e de marca.

**d2 — objeto, ritual e espaço.**

- **e6** porque d2 encontra comprador: 60 mil Blooms, Brick a US$ 59, Light Phone III a US$ 799
  (fontes 10 e 12). Confiança alta de que o nicho existe em 2027; nenhuma de que passa dele.
  Classe de referência para sair do nicho: VR de consumo, mais de dez anos e ainda não. Por isso
  nenhum efeito de d2 assume massa.
- **e6.1** porque e6, quando o objeto é um telefone completo com 5G e eSIM (fonte 12), deixa de
  ser "desligar" e vira "trocar de aparelho conforme o momento". Confiança baixa: não há número de
  vendas do Light Phone III.
- **e6.1.1** porque e6.1 depende de mensageria, e no Brasil a mensageria é um app só que não roda
  no aparelho mínimo; o par não fecha sem interoperabilidade. Premissa do autor, sem fonte aberta
  sobre o mercado de mensageria nesta rodada.
- **e6.2** porque e6 é vendido pelo mesmo canal que combate — é o que a Fortune registra (fonte
  10). Retroação: o crescimento da categoria reforça a plataforma de anúncio.
- **e6.2.1** porque e6.2 faz do objeto uma compra de impulso, e compra de impulso de bem-estar
  tem abandono alto. Classe de referência de memória: pulseiras de passos. Fraco e baixa.
- **e7** porque d2 ganha comprador institucional com orçamento e lei: Yondr em 2,5 milhões de
  alunos (fonte 13), Brasil com 92% das escolas aplicando a Lei 15.100 (fonte 9). É o ramo com
  mais evidência do mapa inteiro — e também o que mais se aproxima da maioria, o que obriga a
  tratá-lo como efeito, não como raiz (seção 4).
- **e7.1** porque e7 prova a quem frequenta a escola que espaço sem celular é possível, e o que
  é possível e escasso fora da escola passa a ter preço.
- **e7.1.1** porque e7.1 cobra pela desconexão e porque, dentro da escola, a desconexão já depende
  de infraestrutura desigual: 45% das públicas contra 18% das privadas relatam dificuldade de guarda
  (fonte 9). Sinal médio por esse dado; confiança baixa sobre a medição chegar a existir.
- **e7.2** porque e7, no Brasil, forma uma coorte inteira sob a regra; a coorte que entrou no
  ensino médio em 2025 chega à universidade por volta de 2028 e ao trabalho perto de 2032. Fraco.
- **e7.2.1** porque e7.2 cria expectativa de uma coorte que os empregadores disputam.
- **e8** porque d2 encontra a IA gerativa de interface: o Aperture propõe interfaces mínimas
  geradas por IA numa janela física (fonte 11). Troca de mecanismo (de bloquear para reduzir).
  Médio: um conceito publicado, finalista de prêmio; nenhum produto.
- **e8.1** porque e8, se funcionar, faz o usuário ver a tarefa e não o app; a vitrine do app deixa
  de ser vista.
- **e8.1.1** porque e8.1 tira do dono do app a tela, e o dono do app reage — é o conflito atual
  entre agentes e sites, na versão bem-estar.
- **e9** porque d2 prova demanda e o dono do sistema tem o incentivo histórico de absorver função
  de terceiro. Quem bloqueia: Apple e Google. Sinal fraco: não abri fonte que mostre movimento
  nesse sentido nesta rodada (12.4).
- **e9.1** porque e9 concentra o freio em quem também vende o acelerador; parte dos usuários não
  aceita. Sinal médio: Light Phone com sistema próprio (fonte 12), launchers abertos (fonte 22).
  Regra de parada: o filho de e9.1 seria "mais hardware independente", o mesmo efeito
  amadurecendo; parei.

**d3 — a IA como alvo.**

- **e10** porque d3 torna a perda mensurável: persistência e desempenho sem IA caem após cerca de
  dez minutos de assistência (fonte 26), e os padrões de uso que preservaram aprendizado são os que
  pedem explicação ou fazem só pergunta conceitual (fonte 25). O produto que imita esses padrões é
  um modo que segura a resposta. Sinal médio: pesquisa publicada por provedor; produto não aberto
  nesta rodada.
- **e10.1** porque e10 oferece à escola o mesmo tipo de solução que ela já comprou para o celular
  (e7): uma restrição de formato. Troca de ator: o comprador passa a ser a rede de ensino.
- **e10.1.1** porque e10.1 precisa medir se funcionou, e a medida natural é o desempenho sem
  assistente — exatamente o que a fonte 26 mede.
- **e10.2** porque e10, para o adulto que escolhe, é o menos agradável: os desenhos que mais
  reduziram dependência tiveram as piores notas (fonte 24). Retroação de d3.
- **e10.2.1** porque e10.2 deixa a fricção cognitiva sem padrão e com demanda de quem tem
  consciência do custo; o que resta é produto premium. Quem perde: quem não sabe que precisa.
- **e11** porque d3 encontra no harness de agente um ponto de interceptação programável; a turma
  trouxe `breakwatch` e `workshop-wellbeing-hooks` (bem-estar no fluxo do agente de código). Não
  abri esses repositórios — sinal fraco (ver 7 e 8).
- **e11.1** porque e11, aplicado a quem delega, mede a coisa errada se medir tempo; o que
  prejudica é aceitar sem ler, o análogo da dependência excessiva da fonte 24.
- **e11.1.1** porque e11.1 produz um número que interessa à segurança de software (código aceito
  sem revisão), e o que interessa à segurança ganha orçamento.
- **e11.2** porque d3, no trabalho com vários agentes, reproduz o mecanismo de recompensa variável
  do feed: a tarefa termina em momento imprevisível e avisa. Inferência, sem fonte.
- **e11.2.1** porque e11.2 é o problema que o e-mail já teve e resolveu parcialmente com lote;
  a solução conhecida migra.
- **e12** porque d3 torna o assistente infraestrutura, e infraestrutura revela a dependência
  quando falha: o diário de retirada mostra lacunas na execução e recuperação de valores
  profissionais (fonte 27). Ensaiar a falha é o que se faz com infraestrutura crítica.
- **e12.1** porque e12 dá nome ao risco e a aviação dá o molde (horas de voo manual). Regra de
  parada: o filho seria "mais certificação", sem troca de ator; parei.
- **e13** porque d3 contraria a receita de quem cobra por uso ou assinatura; o resultado
  observável é fricção onde há pressão jurídica (menores, fonte 29) e gesto dispensável no resto
  (fonte 28). Quem bloqueia: os provedores. Confiança alta: é o presente.
- **e13.1** porque e13 separa os casos pela pressão pública, e a pressão pública hoje está sobre
  companhia e menores, não sobre produtividade.
- **e13.1.1** porque e13.1 deixa o dano sem desenho contra ele, e dano sem desenho aparece primeiro
  como estatística.

**d4 — contexto e corpo.**

- **e14** porque d4 dá um preditor melhor que o relógio (a distância entre intenção e uso, fonte
  19) e sensores baratos; o disparo por previsão substitui o disparo por tempo. Médio: três estudos
  de laboratório (fontes 18, 19, 20), nenhum produto.
- **e14.1** porque e14 dispara no momento incerto, e no momento incerto um bloqueio binário erra
  feio; a modulação gradual erra menos (fonte 17) e o reflexo do próprio rosto interrompe sem
  proibir (fonte 18).
- **e14.1.1** porque e14.1 faz o sistema mudar o comportamento sem aviso explícito — é um nudge
  invisível, o mesmo tipo de objeção feita ao design viciante, com sinal trocado.
- **e14.2** porque e14 exige sinal fisiológico e de contexto; o sinal que prevê arrependimento
  também prevê suscetibilidade. Quem captura: publicidade.
- **e14.2.1** porque e14.2 torna inaceitável enviar o sinal, e a alternativa técnica é o modelo
  local (liga aos temas 16 e 17).
- **e15** porque d4 muda o que se mede: a pesquisa já mostra má percepção sistemática do próprio
  uso (fonte 20) e "aberturas mais intencionais" como resultado (fonte 16).
- **e15.1** porque e15 dá ao regulador um indicador melhor que o minuto, mas autodeclarado.
- **e15.1.1** porque e15.1 transforma a declaração em alvo. **Fora da janela do mapa** (2038):
  exige primeiro que e15.1 exista.
- **e16** porque d4, e qualquer fricção, sofre habituação: usuários do one sec tiram pausas da
  intervenção e voltam ao uso anterior (fonte 16); a avaliação do pop-up cai com o tempo (fonte
  17). Retroação de d4 (e de todas as raízes). Confiança alta.
- **e16.1** porque e16 obriga a renovar o estímulo, e renovar estímulo é a técnica do feed.
- **e16.1.1** porque e16.1, somado ao modelo freemium (Opal com 1 milhão de ativos diários,
  conversão de 20% para 9% — fonte 14), faz do app de freio um app que precisa ser aberto todo dia.
  Sinal médio pelo caso Opal; confiança baixa de que isso vire padrão.

### Regra de parada

Parei em e9.1 e e12.1 sem neto porque o filho seria o mesmo efeito maior. Em d4, não derivei
netos de "gradual substitui binário" em direção ao design de hardware (vibração em pulseira) porque
não havia troca de ator.

### Cobertura STEEP e quem perde

- **Social**: e3.1, e7.1, e7.1.1, e10.2.1, e13.1.
- **Tecnológico**: e8, e11, e14, e14.2.1, e3.2.1.
- **Econômico**: e2.2, e5, e6, e6.2, e16.1.1.
- **Ecológico**: **vazio**. A única ligação plausível (objeto de desconexão como mais um
  eletrônico descartável, e6.2.1) é fraca; não forcei.
- **Político**: e1, e1.2.1, e3.2, e4.1, e8.1.1.
- **Quem perde**: criadores de impressão passiva (e5), escola pública (e7.1.1), adulto vulnerável
  (e3.1), quem não sabe que precisa da fricção cognitiva (e10.2.1), empresas independentes de
  hardware (e9), donos de app (e8.1.1), operadores de agentes (e13.1.1).

### Cruzamentos

- **Convergência 1 — eficácia contra aceitação.** e4.1 (regulação), e10.2 (IA), e14.1 (contexto) e
  e16 (habituação) chegam ao mesmo ponto por mecanismos independentes: a fricção que funciona é a
  que as pessoas rejeitam, e a que elas aceitam perde efeito. As fontes 17, 18, 24 e 16 mostram
  isso em quatro domínios (vídeo curto, rosto, decisão com IA, abertura de app). É o achado mais
  robusto do mapa.
- **Convergência 2 — a fricção desce para a camada de baixo.** e3.2.1 (idade no sistema), e9
  (objeto absorvido pelo sistema) e e14.2.1 (modelo local) empurram o freio para o sistema
  operacional ou para o aparelho. Três raízes diferentes dão poder ao mesmo ator: o dono do sistema.
- **Convergência 3 — a escola como compradora.** e7 (celular) e e10.1 (IA com fricção): a mesma
  instituição, o mesmo tipo de contrato, com dez anos de distância.
- **Retroalimentação.** e16.1.1 (o freio vira app de engajamento) enfraquece d4 e d2; e6.2 (vender
  desconexão pela rede) reforça a plataforma que d1 tenta frear; e2.1 (métrica substituta) esvazia
  d1 por dentro.
- **Contradição.** e3.2.1 (fricção no sistema operacional) e e9.1 (refúgio fora do sistema) não se
  sustentam como tendência dominante ao mesmo tempo. Decide entre eles: se Apple e Google aceitarem
  a obrigação de verificar idade na loja, e3.2.1 vence; se resistirem e a obrigação ficar no app,
  o espaço do hardware independente cresce.
- **Contradição 2.** e14 (disparo por sensor) e e14.2.1 (tudo local) contra e14.2 (sinal vira
  anúncio): decide quem fornece o modelo de previsão.

## 6. Sinais fracos e wildcards

### Sinais fracos

1. **Bem-estar no harness de agente** (`breakwatch`, `workshop-wellbeing-hooks`, trazidos pela
   turma; repositórios de lembrete por gancho no Claude Code vistos em busca). Se crescer: o tema 18
   encontra o tema 1 e a fricção passa a ser configuração padrão de ferramenta de trabalho.
   Observável: um harness de agente de código de grande fornecedor trazendo limite de sessão ou
   pausa por padrão; ou métrica de "aceite sem revisão" aparecendo em ferramenta de revisão.
2. **Remoção de formato em vez de bloqueio** (FeurStagram no topo do tópico `digital-wellbeing`,
   fonte 22; `youlite` e `Reravel` da turma). Se crescer: a disputa passa a ser pelo direito de
   cliente alternativo, e o bem-estar vira argumento de interoperabilidade. Observável: pedido de
   acesso a API de cliente de terceiros fundamentado em bem-estar, sob DMA ou DSA.
3. **Tela preta como fricção aceita** (fonte 18): o controle foi mais aceito que a intervenção.
   Se crescer: o desenho de fricção descobre que o mínimo funciona melhor que o engenhoso.
   Observável: replicação do resultado em estudo de campo.
4. **ANPD agindo sobre função de produto** (Discord Go Live, fonte 8). Se crescer: o Brasil passa
   a ser jurisdição onde recurso de interface é suspenso por decisão administrativa. Observável:
   segundo despacho da ANPD suspendendo recurso por uso compulsivo, não por conteúdo.
5. **Intenção como métrica** (fontes 19 e 20). Observável: uma plataforma publicando indicador de
   "sessão intencional" em relatório de transparência do DSA ou do ECA Digital.

### Wildcards

- **W1 — Uma plataforma grande adota fricção deliberada por padrão e ganha usuários.** Mecanismo:
  uma rede nova ou em crise (o "wildcard" que a disciplina já propôs) aposta em feed finito como
  diferença, num momento em que o regulador pune os concorrentes. Improvável porque nenhum caso
  documentado mostra fricção ganhando mercado de massa, e porque a fonte 17 indica que a fricção
  aceita é fraca. O que faria com o mapa: d1 deixa de ser necessária e vira validação; e5.1 vira
  forte; e4 cai. Sinal precoce: crescimento público de rede com feed finito.
- **W2 — Decisão europeia que proíbe rolagem infinita para todos os usuários.** Mecanismo: decisão
  final contra TikTok ou Meta que adota o remédio da acusação sem distinguir idade. Improvável pelo
  recurso e pela pressão comercial transatlântica. Efeito: e3.1 some, e1.2 vira forte, e5 vira
  alto impacto. Sinal: texto da decisão final.
- **W3 — Um incidente de dependência de agente com dano visível** (erro grave aceito sem revisão,
  atribuído a esgotamento do operador). Mecanismo: o dano cria pressão pública sobre d3 no
  trabalho, que hoje não existe (e13.1). Efeito: e11.1.1 antecipa em vários anos. Sinal: primeiro
  processo trabalhista ou regulatório citando a sessão de agente.
- **W4 — Premissa quebrada: o dono do sistema operacional fecha as APIs de controle de uso a
  terceiros** (alegando privacidade). Efeito: Brick, Opal, one sec e similares perdem o mecanismo;
  d2 vira hardware com sistema próprio ou nada. Sinal: mudança de política na API de controle de
  uso.

## 7. Contra o próprio mapa

### Pré-mortem: é 2036 e o mapa errou. Por quê?

1. **A regulação foi capturada e virou lembrete.** As decisões europeias foram negociadas em
   compromissos que mantêm o formato com um lembrete a mais; o júri de Los Angeles foi revertido.
   Aponta para e1, e1.1, e2. Ação: e1 teve o prazo empurrado e a confiança reduzida; e2 reduzido.
2. **O objeto de desconexão foi moda.** As vendas pararam em dezenas de milhares e o assunto saiu
   da imprensa. Aponta para e6.1 e e8. Ação: e6.1 rebaixado; e8 empurrado.
3. **A IA não gerou demanda por fricção porque o custo cognitivo não apareceu fora do
   laboratório.** Os estudos de 2026 não replicaram em trabalho real. Aponta para e10.1, e11. Ação:
   e10.1 rebaixado; e11 com sinal reduzido.

### Extrapolação linear

- **e6** ("o objeto volta") é o presente crescendo. Mantido como 1ª ordem só porque o mecanismo de
  não-linearidade está nos filhos (e6.1, a divisão em par; e6.2, a dependência do canal); sem eles
  seria contexto.
- **e7** idem: é a lei que já está em vigor. Seu valor está em e7.1.1 (a desigualdade), não nele.
- **e12.1** era "mais certificação"; parei nele (regra de parada) e removi o neto.

### Velocidade de adoção

- **e1** exigia que a decisão final e a implementação saíssem em três anos após uma acusação
  preliminar; a referência (GDPR → componente estável) e a existência de recurso empurram para
  2029: **+2 anos**.
- **e8** exigia que um conceito sem produto chegasse a produto visível em cinco anos; referência VR
  de consumo: **+2 anos** (2029 → 2031).
- **e7.2** depende de uma coorte percorrer a escola: o prazo é demográfico, não de adoção;
  mantido.
- **e3.1.1** estava em 2031; exige e3.1 estabilizado primeiro: **+2 anos** (2033).

### A raiz que não acontece

- **Sem d1:** sobram d2 (mercado de nicho), d3 e d4 (laboratório). O mapa perde a única força com
  poder de mudar o padrão para a maioria; o tema volta a ser "escolha individual de quem pode
  pagar". O mapa não desmorona, mas vira o mapa de um nicho.
- **Sem d2:** sobra a fricção por lei e por software; somem o par de aparelhos e a desigualdade de
  espaço. As convergências 1 e 2 sobrevivem.
- **Sem d3:** o mapa volta ao feed. O que se perde é justamente o que muda de formato em 2036.
- **Sem d4:** sobra a fricção fixa; a convergência 1 perde um dos quatro domínios, mas fica de pé.
- Conclusão: nenhuma raiz é disfarce de outra; a convergência 1 é independente de qualquer uma.

### Suposições escondidas

1. **As APIs de controle de uso continuam abertas a terceiros.** Quebrada: W4.
2. **O DSA continua sendo aplicado com a mesma disposição.** Pressão comercial internacional pode
   frear; afeta todo d1.
3. **Modelo pequeno local continua barato e disponível** (d4 e e14.2.1).
4. **O custo cognitivo da IA medido em laboratório existe no trabalho real** (d3 inteira).
5. **A escola brasileira mantém a Lei 15.100** (e7.2). Premissa política.

### Viés do autor

O efeito que está aqui porque o autor gosta do tema é **e11** e seus filhos (bem-estar no harness
do agente de código): o autor opera muitas sessões de agente simultâneas e tende a enxergar o
problema porque o vive. A evidência externa é fraca (repositórios da turma não abertos). Por isso
o sinal foi rebaixado e toda a sub-árvore está em confiança baixa, exceto e11, em média por ser um
fato técnico simples (ganchos existem). Segundo viés: a preferência por d2 como "o formato
interessante" — o mapa se protege tratando e7 como efeito e não assumindo massa em nenhum ramo de
d2.

### Calibração

Contagem final (saída do verificador em 12.1): ordem 1 — 5 alta, 9 média, 2 baixa; ordem 2 — 0
alta, 9 média, 15 baixa; ordem 3 — 0 alta, 0 média, 22 baixa. Cai com a ordem.

### Registro de alterações

- e1: prazo 2027 → 2029, porque há recurso e a referência do componente pós-GDPR levou anos para
  estabilizar; confianca alta → media, pelo pré-mortem 1.
- e2: confianca alta → media, porque um veredito de primeira instância com recurso anunciado
  (fonte 5) não sustenta "alta".
- e1.1.1: removido o filho paralelo "designer passa a ter certificação de ética de fricção" (vai
  para 12.5), porque é o efeito genérico "surge nova profissão" sem ator nem mecanismo.
- e5: confianca media → baixa, porque não encontrei dado de alcance após mudança de padrão.
- e6.1: confianca media → baixa, porque não há número de vendas do Light Phone III e a
  interoperabilidade (e6.1.1) é bloqueio real.
- e8: prazo 2029 → 2031, pela referência VR de consumo (conceito sem produto).
- e9.1.1: removido ("mais hardware independente"), regra de parada.
- e3.1.1: prazo 2031 → 2033, porque depende de e3.1 estabilizado.
- e10.1: confianca media → baixa, pelo pré-mortem 3.
- e11: sinal medio → fraco, porque os repositórios que o sustentariam não foram abertos nesta
  rodada; o viés do autor está nomeado acima.
- e12.1.1: removido ("simuladores de trabalho sem IA"), regra de parada.
- e14: sinal forte → medio, porque os três artefatos são estudos de laboratório, e a regra do §3
  conta artefato observável como tentativa, não caso real.
- e16.1: confianca media → baixa, porque não há ferramenta que já faça rotação de intervenção.
- e15.1.1: mantido fora da janela (2038) e declarado.

Cota mínima: d1 (e1, e2, e5), d2 (e6.1, e8, e9.1.1), d3 (e10.1, e11, e12.1.1), d4 (e14, e16.1).
Cumprida em todas as raízes.

## 8. O que a máquina errou

1. **Número que veio de resumo de busca e quase entrou.** A busca sobre dumbphones devolveu "vendas
   cresceram 25% em 2025", "dumbphones podem chegar a 10% do mercado global em 2026" e "Punkt vendeu
   50 mil unidades em 2024", de páginas de loja e blog. Nenhum desses números vem de fonte aberta e
   verificável; o de 10% contraria qualquer leitura razoável da categoria. Nenhum entrou.
2. **Preço do Light Phone III.** O resumo de busca trouxe US$ 599, 699, 799 e 899 e um plano de US$
   59 por mês. Usei só o que a página aberta (Wikipedia) dá como preço final, US$ 799; o plano mensal
   não entrou por não ter sido aberto.
3. **Resumo do WebFetch contradizendo a página anterior.** O resumo da ABC7 disse US$ 6 milhões no
   total (3 compensatórios + 3 punitivos), mas depois listou Meta US$ 2,1 milhões e YouTube US$ 900
   mil — que são só os punitivos. Não usei o valor da indenização no texto; usei só a conclusão do
   júri.
4. **Autoria e local da fonte 17.** O resumo automático deu um "Volume 1031409" sem sentido para a
   IMWUT; confiei nos autores e no DOI e não citei volume. A filiação a Ulm (seção 3) vem de memória
   sobre os autores (Rukzio, Colley), não da página aberta.
5. **Artigo 40 do DSA** (acesso de pesquisadores a dados, e2.1.1) e **o banner de cookies como
   classe de referência** (e1) estão citados de memória, sem fonte aberta nesta rodada.
6. **Analogia com a pulseira de passos (e6.2.1)** e **com a newsletter (e5.1)**: classe de
   referência de memória, sem número. Mecanismo plausível, evidência nenhuma.
7. **"Especialistas comparam ao tabaco"** (e2) vem do resumo da ABC7; a comparação é das pessoas
   citadas na matéria, não um fato sobre o litígio.
8. **Repositórios da turma** (`breakwatch`, `workshop-wellbeing-hooks`, `slate`, `youlite`,
   `Reravel`) foram usados como sinal sem que eu os abrisse; a busca por `breakwatch` não achou o
   repositório. Estão marcados como material da turma (12.6), não como fonte.
9. **O resumo do one sec vindo da busca** trazia os números da PNAS; só os usei depois de abrir o
   resumo no Europe PMC (fonte 15). O blog do one sec (fonte 23) não traz os números — resumo de
   busca e página aberta não batiam.

## 9. Três cenários para 2036

**Provável.** Em 2036, na União Europeia e em Nova York, o feed de quem tem conta de menor tem fim,
não toca sozinho e não notifica de madrugada; o de adulto tem as mesmas opções escondidas em
configurações e um lembrete que se dispensa. A disputa jurídica da década foi sobre o que conta
como pausa *efetiva*, e terminou com um critério modesto. O Brasil aplica o ECA Digital com a
ANPD tomando decisões pontuais sobre recursos de produto. O objeto de desconexão ficou num nicho
estável de dezenas de milhares de compradores por marca, com a escola como maior cliente. O
assistente de IA tem modo tutor, usado quase só onde a escola exige. Quem opera muitos agentes
trabalha sem freio, e a primeira estatística de esgotamento ligada a isso começa a aparecer. Sinal
precoce de que estamos entrando nele: a decisão final da Comissão sobre o TikTok adotando remédio
só para menores.

**Desejável.** Em 2036, "ponto de parada" é componente básico como contraste de cor: todo produto
de mídia tem fim de sessão desenhado, e o indicador público é intenção cumprida, não minutos. A
fricção cognitiva virou padrão nos assistentes usados por quem está aprendendo, com critério de
eficácia medido em estudo independente. O sinal de estado íntimo usado para frear roda no aparelho
e não sai dele. Para chegar lá teria sido preciso: um critério de eficácia definido com base em
estudo de campo (e4.1), acesso de pesquisadores aos experimentos das plataformas (e2.1.1) e uma
exigência de modelo local para intervenções baseadas em sensor (e14.2.1). Sinal precoce: um
regulador publicando critério de eficácia de fricção com número.

**Indesejável.** Em 2036, a fricção virou produto de classe: quem pode paga pelo par de aparelhos,
pelo espaço sem celular e pelo assistente que não o deixa desaprender; a escola pública ficou sem
armário e com o assistente sem fricção. A estimativa de idade por rosto tornou-se infraestrutura
de vigilância justificada por bem-estar. O app de freio mais usado otimiza usuário ativo diário
e vende o sinal de fadiga a anunciantes. O regulador aceitou lembretes como cumprimento. Sinal
precoce: uma ferramenta de bem-estar com sensor enviando dados de estado para servidor de terceiro
por padrão, sem reação regulatória.

## 10. O experimento

**O que é.** *Freio por intenção.* Um interceptador em duas versões — extensão de navegador para
sites de vídeo curto e um gancho no harness de agente de código — que, na abertura, pergunta em uma
linha "para que você veio?" e, no fim da sessão, usa um modelo pequeno rodando localmente para
comparar a intenção declarada com o que aconteceu (títulos vistos; no agente, o que foi pedido e
quantas mudanças foram aceitas sem abrir). Três condições em sorteio diário: (A) pausa fixa de
alguns segundos com opção de desistir, o mecanismo mais eficaz do one sec (fonte 15); (B) a
pergunta de intenção com devolutiva no fim; (C) nenhuma intervenção.

**Que pergunta responde.** Se a fricção guiada por intenção (d4) supera a fricção fixa em
reduzir arrependimento, e se ela se desgasta mais devagar (e16). No agente: se "aceite sem
revisão" é uma métrica que os próprios usuários reconhecem como o problema (e11.1).

**Que tecnologia emergente usa, e por que não dá com a madura.** Um modelo pequeno no aparelho que
entende texto livre de intenção e conteúdo de sessão, e o gancho programável do harness de agente.
O contador de tempo de tela só vê minutos e app aberto; ele não sabe se a sessão cumpriu o que a
pessoa queria, que é o preditor de arrependimento (fonte 19). E rodar local é condição: mandar
títulos vistos a um servidor para classificar é exatamente o risco de e14.2.

**O que a turma faz ao testar.** Cada pessoa instala a versão que usa (navegador ou agente) por
uma semana. No fim de cada dia, responde duas perguntas (quanto se arrependeu do tempo usado;
quanto a intervenção incomodou). Em sala: comparar arrependimento e incômodo por condição, e olhar
se a condição B perde efeito do 1º ao 7º dia menos que a A. Discutir o dilema eficácia × aceitação
com os próprios números.

**O que me faria mudar de ideia.** Se a condição B não reduzir o arrependimento mais que a A, ou
se decair tão rápido quanto ela, d4 perde a razão de ser e deve ser rebaixada a melhoria
sustentadora do cronômetro — uma fricção mais cara que faz o mesmo. Se ninguém na turma
reconhecer "aceite sem revisão" como problema no uso de agente, e11.1 sai do mapa.

## 11. Fontes

1. `https://digital-strategy.ec.europa.eu/en/news/commission-preliminarily-finds-tiktoks-addictive-design-breach-digital-services-act`
   — Comissão Europeia, 6/2/2026. Sustenta d1, e1 e e4: recursos nomeados, a afirmação de que as
   ferramentas atuais "não parecem reduzir efetivamente os riscos", e os remédios sugeridos.
   Fonte primária do regulador; é acusação preliminar, não decisão.
2. `https://www.techtimes.com/articles/320180/20260711/eu-charges-meta-addictive-design-infinite-scroll-violates-dsa-health-rules.htm`
   — Tech Times, 11/7/2026, sobre a acusação contra Meta. Sustenta desligamento por padrão, multa de
   até 6% e a resposta da Meta com as Teen Accounts (e1, e3.1). Imprensa de tecnologia; a cifra em
   dólares é estimativa do veículo.
3. `https://en.wikipedia.org/wiki/Digital_Fairness_Act`
   — Wikipedia. Sustenta o calendário do Digital Fairness Act (consulta 2025, proposta esperada em
   2026) e o escopo. Enciclopédia colaborativa; útil para cronologia, não para texto normativo.
4. `https://ag.ny.gov/press-release/2026/attorney-general-james-and-governor-hochul-release-final-safe-kids-act-rules`
   — Procuradoria-geral de Nova York, 28/7/2026. Sustenta e3: vigência em 25/1/2027, feed em ordem
   fixa para menores sem consentimento, sem notificações entre 0h e 6h, métodos de verificação de
   idade, multa por violação. Fonte primária.
5. `https://abc7.com/post/los-angeles-social-media-addiction-trial-jury-finds-instagram-youtube-liable-landmark-court-case/18771272/`
   — ABC7, março de 2026. Sustenta e2: júri considerou Meta e YouTube negligentes no desenho, com
   rolagem infinita, autoplay e notificação em causa; milhares de processos pendentes; recurso
   anunciado. Jornalismo local; os valores da indenização vieram inconsistentes no resumo e não foram
   usados (seção 8).
6. `https://www.aljazeera.com/news/2026/8/3/australias-under-16-social-media-ban-failing-study-shows-what-it-means`
   — Al Jazeera, 3/8/2026, sobre a avaliação do eSafety. Sustenta a recusa da proibição por idade
   como raiz: 86% → 81%, uso diário 60% → 58%, 4,7 milhões de contas. Jornalismo sobre dado do
   regulador; a página do eSafety não abriu nesta rodada (tempo esgotado).
7. `https://www.dataprivacybr.org/um-ano-do-eca-digital-data-privacy-brasil-abre-acesso-a-dois-materiais-sobre-afericao-de-idade-e-design-manipulativo/`
   — Data Privacy Brasil, 17/9/2026. Sustenta o ECA Digital (vigência em 17/3/2026, práticas de
   design manipulativo, relatórios de transparência, monitoramento da ANPD sobre lojas, sistemas e
   IA gerativa) — e1.2.1, e3, e3.2.1. Organização de pesquisa independente com posição pública
   sobre o tema.
8. `https://conjur.com.br/2026-ago-21/arquitetura-de-risco-das-plataformas-e-responsabilidade-civil-preventiva-anpd-e-discord/`
   — Conjur, 21/8/2026. Sustenta a suspensão do Go Live do Discord pela ANPD em 12/8/2026 e o
   conflito com cifra ponta-a-ponta (e1.2.1, e3.2). Artigo de opinião jurídica em veículo
   especializado; o fato do despacho é verificável.
9. `https://agenciabrasil.ebc.com.br/educacao/noticia/2026-06/lei-que-restringe-uso-de-celulares-ja-e-adotada-por-92-das-escolas`
   — Agência Brasil, junho de 2026, sobre pesquisa Inep/Alana/Unesco. Sustenta e7, e7.1.1: 92%,
   8.189 gestores, 20% → 48%, 45% das públicas contra 18% das privadas com problema de guarda. Agência
   pública; os números são percepção de gestor.
10. `https://fortune.com/2026/02/13/analog-gen-z-phone-addiction-bloom-brick-app-blockers-dumb-phones-social-media/amp`
    — Fortune, 13/2/2026. Sustenta e6 e e6.2: Bloom US$ 39 e 60 mil unidades, Brick US$ 59, a
    categoria vendida pelas redes. Jornalismo de negócios; números das empresas.
11. `https://specialprojects.studio/project/aperture/`
    — Special Projects. Sustenta e8: Aperture como conceito de 2025 com interface mínima gerada por
    IA, e a linha Envelope / Paper Phone de 2019. Site do autor; bom para o quê, nulo para adoção.
12. `https://en.wikipedia.org/wiki/Light_Phone_III`
    — Wikipedia. Sustenta e6, e6.1, e9.1: lançamento em 2025, US$ 799, 5G, eSIM, LightOS sem rede
    social, fabricação pela Foxconn, sem número de vendas. Enciclopédia colaborativa.
13. `https://www.cbsnews.com/news/yondr-pouches-school-cell-phone-ban/`
    — CBS News. Sustenta e7: 2,5 milhões de alunos, 50 estados e 45 países, US$ 25–30 por aluno,
    receita não divulgada. Jornalismo; números da empresa.
14. `https://www.revenuecat.com/blog/growth/kenneth-schlenker-sub-club-podcast-2026`
    — RevenueCat, 29/4/2026, entrevista com o fundador da Opal. Sustenta e16.1.1: 1 milhão de ativos
    diários, US$ 10 milhões de ARR, conversão de 20% para 9%. Autodeclaração em blog de fornecedor
    de infraestrutura de assinatura.
15. `https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=EXT_ID:36795756&resultType=core&format=json`
    — Resumo, via Europe PMC, de Grüning, Riedel e Lorenz-Spreen, PNAS 120(8), 2023. Sustenta a
    âncora e o experimento: 280 participantes, 6 semanas, 36%, 37%, 57%, e que a opção de desistir
    foi o componente mais eficaz. Revisado por pares; um dos autores é o criador do one sec.
16. `https://www.medien.ifi.lmu.de/pubdb/publications/pub/haliburton2024chi/haliburton2024chi.pdf`
    — Haliburton, Grüning, Riedel, Schmidt e Terzimehić, CHI 2024. Sustenta e16 e e15: 1.039
    usuários, 13,4 semanas, aberturas mais intencionais, pausas na intervenção e retorno rápido ao
    uso excessivo. Revisado por pares; mesma ressalva de conflito de interesse.
17. `https://arxiv.org/html/2607.15818`
    — Meinhardt, Dragic, Colley, Lukoff e Rukzio, IMWUT 2026. Sustenta a convergência 1, e4.1, e14.1,
    e16: 104 pessoas, 7 dias, pop-up eficaz e menos aceito, gradual aceito e lento, impulsivos
    respondendo melhor ao explícito. Melhor evidência de campo do mapa.
18. `https://arxiv.org/html/2604.19424`
    — Kim et al., CHI EA 2026. Sustenta e14.1 e o sinal fraco 3: rosto ao vivo reduz consumo, tela
    preta é a mais aceita. Resumo estendido, N=84; exploratório.
19. `https://arxiv.org/abs/2606.08965`
    — Ahmed, Enkmann, Shimizu, Yip, Beermann, Alomar, Uebernickel e Maes. Sustenta d4 e e14: 21
    pessoas, 7 dias, relógio de US$ 80, distância intenção-uso como maior preditor de
    arrependimento. Pré-print, amostra pequena.
20. `https://arxiv.org/abs/2509.21860`
    — Bhat, Shi, Song, Yoo e Saha, CHI 2026. Sustenta e15: má percepção do próprio uso e ~10% de
    melhora em afeto positivo com reflexão. Revisado por pares; 25 estudantes.
21. `https://github.com/ulyngs/digital-habits-blocker/blob/main/README.md`
    — Digital Habits Blocker (Lyngs, Kollnig). Sustenta a âncora: fricção de desbloqueio com
    dificuldade ajustável, código aberto, quatro sistemas. Documentação do próprio projeto.
22. `https://github.com/topics/digital-wellbeing`
    — GitHub. Sustenta o sinal fraco 2 e e9.1: 446 repositórios, launcher minimalista e cliente sem
    reels no topo. Contagem da plataforma no dia da consulta.
23. `https://one-sec.app/blog/friction-will-change-your-behavior/`
    — Blog do one sec. Sustenta a definição de fricção como "barreira que torna a ação mais
    trabalhosa, mas não impossível" (Grüning). Fornecedor; sem números.
24. `https://arxiv.org/abs/2102.09692`
    — Buçinca, Malaya e Gajos, CSCW 2021. Sustenta e10.2 e a convergência 1: cognitive forcing
    reduz dependência excessiva e recebe as piores notas; N=199. Revisado por pares; de 2021, anterior
    aos assistentes atuais.
25. `https://www.anthropic.com/research/AI-assistance-coding-skills`
    — Anthropic, 29/1/2026. Sustenta d3 e e10: 52 engenheiros, 50% contra 67% no teste, padrões de
    uso que preservam aprendizado. Pesquisa de provedor de IA sobre o próprio produto.
26. `https://arxiv.org/abs/2604.04721`
    — Liu, Christian, Dumbalska, Bakker e Dubey. Sustenta d3 e e10.1.1: N=1.222, queda de
    persistência e de desempenho sem IA após cerca de dez minutos. Pré-print com amostra grande.
27. `https://arxiv.org/abs/2603.26099`
    — Oh, Lee, Choi, Park e Lim, CHI EA 2026. Sustenta e12: diário de retirada de LLM, 10
    trabalhadores, 4 dias. Exploratório.
28. `https://www.implicator.ai/after-reports-of-harm-openai-tweaks-chatgpt-to-curb-overuse-and-emotional-dependency/`
    — implicator.ai, 4/8/2025. Sustenta e4 e e13: a redação do lembrete do ChatGPT e a crítica de que
    é dispensável. Veículo pequeno; o texto do lembrete é verificável no produto.
29. `https://blog.character.ai/u18-chat-announcement/`
    — Character.AI, 29/10/2025. Sustenta e3 e e13: fim do chat aberto para menores, teto de duas
    horas em rampa, verificação com Persona. Comunicado da empresa.

## 12. Anexo — o levantamento bruto

### 12.1 Saída do verificador

Comando: `python3 futurizacao-giordano/references/verificar.py tendencia-bem-estar-digital-e-design-de-friccao.md --links`, rodado em 22/09/2026.

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 16 (frontmatter diz 16)
efeitos ordem 2: 24 (frontmatter diz 24)
efeitos ordem 3: 22 (frontmatter diz 22)
prazo > horizonte (2036) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 1 [('e15.1.1', 2038)]
confiança ordem 1: alta 5 · media 9 · baixa 2
confiança ordem 2: alta 0 · media 9 · baixa 15
confiança ordem 3: alta 0 · media 0 · baixa 22
links da seção 11: 29/29 respondem (frontmatter diz fontes: 29)
RESULTADO: ok
```

O único efeito com prazo além do horizonte é e15.1.1 (2038), de 3ª ordem, declarado fora da janela na seção 5.

### 12.2 Premissas assumidas e o que o briefing não cobria

O briefing cobria todos os itens da entrevista (§0); não houve rebaixamento por falta de
entrevista. Assumido e declarado:
- Profundidade: três ordens; modo: a partir do tema, não de um setor.
- "O que já é comum em produto de massa" foi lido como: recurso nativo de iOS e Android ou recurso
  padrão das grandes plataformas.
- Proibição de celular na escola foi tratada como contexto porque, no Brasil, já está em maioria
  como política (92%), o que o falseador do autor manda excluir como raiz.
- O falseador ("adoção passou da maioria inicial" ou "só melhora o que existe") foi aplicado às
  quatro raízes na seção 4 e no experimento (seção 10, critério de mudar de ideia sobre d4).
- Nota sobre o Brasil distribuída em e1.2.1, e3.2, e6.1.1, e7, e7.1.1, e7.2.

### 12.3 Buscas feitas (22/09/2026)

1. European Commission addictive design DSA 2026 TikTok decision → fontes 1 e contexto.
2. dumbphone Light Phone Brick sales 2026 gen z → só blogs e lojas com números sem origem (seção 8).
3. Digital Fairness Act proposal 2026 addictive design infinite scroll → fontes 2, 3.
4. ChatGPT break reminder overuse AI dependency study 2026 → fontes 27, 28.
5. one sec app PNAS friction Grüning 2023 → fontes 15, 23.
6. social media addiction trial verdict 2026 Meta YouTube jury Los Angeles → fonte 5.
7. Australia under-16 ban eSafety evaluation 2026 → fonte 6.
8. New York SAFE for Kids Act rules 2026, California SB 976 → fonte 4; SB 976 só no resumo.
9. Lyngs digital-habits-blocker friction → fonte 21.
10. breakwatch Claude Code hook break reminder github → **não encontrou `breakwatch`**; achou
    repositórios de lembretes por gancho (não abertos).
11. ECA Digital Lei 15.211 vigência design manipulativo ANPD → fontes 7, 8.
12. Anthropic Claude wellbeing AI dependence cognitive offloading 2026 → fontes 25, 26.
13. Opal revenue users funding → fonte 14.
14. Brick phone blocker funding users 2026 → só agregadores (não usados).
15. lei celular escolas 92% Inep → fonte 9.
16. Yondr revenue students → fonte 13.
17. Light Phone III shipping sales price → fonte 12.
18. cognitive forcing functions Buçinca → fonte 24.
19. Character.AI under 18 two hours → fonte 29.
20. Instagram teen accounts sleep mode 60 minutes → só guias de pais e blogs; não usados como fonte.
21. "Longitudinal In-the-Wild Investigation of Design Frictions" → fontes 16, 18, 19, 17.
22. (consulta direta) GitHub topic digital-wellbeing → fonte 22.

### 12.4 O que não abriu, ou abriu e não serviu

- CNN sobre dumbphones: HTTP 451.
- PNAS (página do artigo): 403; PubMed: só aviso de cookies; ADS: 405; PDF de Alessandretti:
  binário ilegível. Resolvido pelo Europe PMC (fonte 15).
- Página do eSafety: tempo esgotado. NPR sobre o veredito: tempo esgotado. CNBC: 403.
- ACM DL (Haliburton): 403; PDF da LMU lido por `pdftotext` (fonte 16).
- Portal do Planalto sobre a regulamentação do ECA Digital: "conteúdo restrito".
- Números de mercado de "detox digital": não procurei relatório comercial nesta rodada; nenhum
  número de mercado total entra.
- Nenhuma fonte aberta sobre Apple ou Google incorporando travamento físico (e9) — por isso sinal
  fraco.
- Nenhuma fonte aberta sobre modo "estudo/tutor" em produto de assistente — e10 fica em sinal
  médio pelos estudos, não por produto.

### 12.5 Efeitos cortados

- "Designers passam a ter certificação de ética de fricção" (filho de e1.1): cortado — é "surge
  nova profissão" sem ator.
- "Hardware independente cresce" (neto de e9.1): regra de parada.
- "Mercado de simuladores de trabalho sem IA" (neto de e12.1): regra de parada.
- "Reguladores criam categoria de design viciante": cortado como genérico; substituído por e1.2.1
  (ANPD, por referência) e e4.1 (critério de eficácia).
- "Mudança no mercado de publicidade" (candidato a filho de e1): genérico; o efeito específico
  ficou em e5 (criadores de impressão passiva).
- "Relógios de pulso voltam" (candidato em d2): teste da causa solta — aconteceria por moda sem d2.
- "Aumento de ansiedade por FOMO de quem usa dumbphone": sem fonte e sem mecanismo específico.

### 12.6 Material da turma usado como sinal (não como fonte)

Da varredura descrita no tema: `Aperture` (aberto — fonte 11), `Daily Paper Phone` (via fonte 11),
`paperweight`, `digital detox box`, `Pocket-OS-Cardputer`, `Flipper habit`, `breathing`,
`scroll-scold`, `lesscroll`, `dopa-mean`, `PlugBrain`, `Reravel`, `amazon-unrated`, `Claudeholic`,
`digital-habits-blocker` (aberto — fonte 21), `screen-time-stocks`, `Institute of Idleness`,
`slate`, `Frost`, `mute`, `workshop-wellbeing-hooks`, `breakwatch`, `JIT`, `holiday-from-ai`,
`youlite`, `habit-prompter`, `scrollwrapped`. Usados: `slate` (e5.1), `youlite` e `Reravel` (sinal
fraco 2), `breakwatch` e `workshop-wellbeing-hooks` (e11 e sinal fraco 1), `Claudeholic` (d3 como
indício cultural, não como evidência), `dopa-mean` e `PlugBrain` (formas de fricção cognitiva
anteriores a d3). Não abertos, salvo os marcados.

### 12.7 Raízes consideradas e não usadas

- "Economia comportamental aplicada à fricção" (`screen-time-stocks`, `scrollwrapped`): forma de
  intervenção, não ruptura; entraria como variação de d4.
- "Sátira como intervenção" (`Claudeholic`, `holiday-from-ai`, `Institute of Idleness`): sinal
  cultural relevante, sem mecanismo de ruptura mensurável; ficou como indício em d3.
- "Proibição de acesso por idade": recusada (seção 4).
