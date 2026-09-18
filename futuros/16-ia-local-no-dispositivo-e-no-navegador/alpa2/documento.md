---
tema: "IA local: no dispositivo e no navegador"
slug: ia-local-no-dispositivo-e-no-navegador
autor_login: alpa2
zona_de_interesse: Criação e plataforma
data: 2026-09-18
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 11
efeitos_ordem_3: 13
tecnologias_citadas: [BitNet b1.58, bitnet.cpp, quantização ternária, WebGPU, WebLLM, Prompt API do Chrome, Gemini Nano, Apple Foundation Models framework, LiteRT-LM, Gemma 3n, llama.cpp, Ollama, NPU, Snapdragon X2 Elite, Snapdragon C, GGUF]
fontes: 8
confianca: media
experimento: "Um mesmo protótipo de leitor de documento rodando em três níveis de inteligência (modelo do navegador, modelo baixado, nuvem) e instrumentado para medir o que o usuário percebe, não o que o benchmark diz."
skill_usada: futurizacao-alpa2
publico_ok: false
---

## 1. Resumo

A inferência está saindo da nuvem e indo para o aparelho de quem usa. Três coisas cruzaram um limiar ao mesmo tempo: modelos treinados nativamente em baixíssima precisão (BitNet b1.58, pesos ternários) que rodam em CPU comum; runtimes embutidos nos sistemas operacionais e no navegador (Apple Foundation Models, LiteRT-LM, Prompt API estável no Chrome 148); e NPUs descendo para faixas de preço populares. O efeito primário não é técnico, é econômico: **o custo marginal por chamada vai a zero para tudo que couber no dispositivo**, e com ele desaparecem a chave de API, a cota e o intermediário.

O que este mapa sustenta, para quem projeta mídia e interação até 2031:

1. A restrição de projeto muda de **custo por chamada** para **orçamento de memória, bateria e calor**. Isso é uma restrição de design de interação, não de infraestrutura.
2. O **aparelho**, e não a conta, passa a definir que IA a pessoa tem. Isso reintroduz degradação graciosa — agora de inteligência, não de banda.
3. O maior contrapeso ao mapa inteiro **não é técnico**: é a crise de memória de 2026. DRAM subindo 90–95% no primeiro trimestre e aparelhos de entrada voltando a 4 GB empurram a IA local para o topo da linha justamente no momento em que ela ficaria "grátis".
4. A pergunta estrutural do horizonte não é se o modelo roda local — em 2026 ele já roda. É **quem responde por ele quando não há log central**.

Confiança geral: média. Alta na 1ª ordem (há evidência em produto), média na 2ª, deliberadamente baixa na 3ª.

## 2. O tema

**Objeto:** a inferência que acontece no dispositivo do usuário final — celular, laptop comum, aba do navegador — com qualidade suficiente para agente, voz e visão. Não é o modelo pequeno num servidor próprio (maduro), nem a chamada a API de nuvem (maduro), nem o dado local (tema vizinho), nem a voz local (tema vizinho).

**Horizonte:** 2031. **Público:** quem projeta mídia e interação. **Recorte:** global, com nota sobre o Brasil.

**Suposições declaradas** (esta rodada não teve entrevista ao vivo; as respostas vieram pré-definidas, e onde faltou informação eu assumi e declaro):

| Item do Passo 1 | Resposta adotada |
|---|---|
| Horizonte | 2031 |
| Recorte | quem projeta mídia e interação; global com nota Brasil |
| Descartes | só a régua da disciplina: nada que já seja comum em produto de massa |
| Viés | neutro, sem preferência declarada |
| Palpite do usuário | nenhum; disrupção-raiz levantada do zero |
| Não perguntado, assumido por mim | que "qualidade suficiente" significa suficiente para a tarefa do produto, não paridade com modelo de fronteira — critério meu, não do usuário |
| Não perguntado, assumido por mim | que hardware entra no mapa (o descarte declarado não o excluiu) |

## 3. Onde isso está hoje

### O que já existe e funciona

- **Modelos ternários treinados do zero.** O `bitnet.cpp` da Microsoft roda BitNet b1.58 com pesos em {-1, 0, +1}. O framework declara ganho de 1,37× a 5,07× em CPUs ARM e 2,37× a 6,17× em x86, com redução de energia de 55% a 82%. O modelo de referência é o BitNet-b1.58-2B-4T (2,4 B parâmetros, 4 T tokens). A página do projeto declara que hoje o suporte é majoritariamente **CPU**, com kernel de GPU só para o modelo principal e NPU "coming next" — ou seja, o próprio projeto que simboliza a tendência ainda não usa o chip que a tendência pressupõe.
- **Runtime no sistema operacional.** O Foundation Models framework da Apple expõe um modelo de ~3 B parâmetros por API Swift, sem chave e sem custo por chamada, com geração guiada (saída estruturada).
- **Runtime no navegador.** A Prompt API do Chrome está **estável no Chrome 148**, com Gemini Nano local, entrada multimodal (texto, imagem, áudio) e saída em texto.
- **Runtime portátil.** LiteRT-LM (Google) roda Gemma 3, Gemma 3n, EmbeddingGemma e FunctionGemma em Android, iOS, web e desktop, com aceleração de GPU e NPU, cuidando de KV-cache, tokenização e clonagem de sessão.
- **Hardware descendo de faixa.** Snapdragon X2 Elite Extreme declara 80 TOPS de NPU; a plataforma Snapdragon C leva NPU dedicada a laptops abaixo de US$ 300, com aparelhos de Acer, HP e Lenovo previstos para o fim de 2026.
- **Ferramental de comunidade maduro.** llama.cpp, Ollama, LM Studio, GGUF no Hugging Face. Isto é tão comum entre desenvolvedores que **não é mais emergente** — é a âncora do presente, não uma disrupção.

### O que existe mas não pegou (ou não pegou ainda)

- **O navegador com modelo local não é para qualquer máquina.** A própria documentação da Prompt API exige **22 GB livres** no volume do perfil, **mais de 4 GB de VRAM** ou 16 GB de RAM com 4+ núcleos, e **não está disponível em Chrome Android nem iOS**. O modelo é removido se o espaço cair abaixo de 10 GB. Uma tecnologia "no navegador" que não roda no navegador do celular ainda não é a tecnologia do celular.
- **O teto de desempenho da web é real.** Medições de WebLLM colocam Llama 3.1 8B em 4 bits a ~41 tokens/s num M3 Max — cerca de 80% do nativo. É ótimo, mas a referência é um laptop caro; em GPU integrada e em Safari móvel o número despenca.
- **A cota gratuita de nuvem é instável** — a percepção que a própria turma registrou ("a documentação promete 1.500 requisições por dia, a conta recebe 20") é parte do motor social da tendência: a migração para modelo local aconteceu dentro da própria atividade da disciplina, por atrito de cota, não por convicção.

### O contra-fato que quase ninguém coloca no mapa

**A memória ficou cara em 2026.** DRAM subiu 90–95% de trimestre a trimestre no 1T26; LPDDR5X projetado em +78–83% no 2T26; a Gartner estima alta combinada de DRAM e SSD de ~130% até o fim de 2026, empurrando o preço de smartphone em ~13% e derrubando os embarques globais em ~8,4%. Marcas já **rebaixaram especificação**, com modelos de entrada voltando a 4 GB. A causa é a própria IA: HBM para datacenter consumindo capacidade de wafer.

Isto é decisivo para o mapa: **a IA de nuvem está encarecendo o hardware que a IA local precisa**. A tendência tem um inimigo interno.

### Quem está construindo

Microsoft (BitNet, Phi), Apple (Foundation Models), Google (Gemini Nano, LiteRT-LM, Gemma), Qualcomm (Hexagon, Snapdragon C), MLC/WebLLM, Ollama, Jan, LM Studio, e a comunidade de r/LocalLLaMA e Hugging Face (GGUF) como camada social.

## 4. As disrupções-raiz

Aplicando o teste do Passo 2 (o que rompe / por que agora / o que falta).

### D1 — Inferência de qualidade útil no aparelho do usuário final, a custo marginal zero

- **O que rompe.** Não é "mais barato": é que some o intermediário. Sem chave, sem cota, sem conta, sem quem possa desligar. Muda **quem pode fazer** (qualquer aplicativo, sem contrato com fornecedor de modelo) e **quem precisa de quem**. Passa no teste 1.
- **Por que agora.** Três limiares cruzados quase juntos: treino nativo em 1,58 bit (BitNet 2B4T, 2025), runtime oficial em três sistemas operacionais, e NPU chegando a laptop abaixo de US$ 300 no fim de 2026. Passa no teste 2.
- **O que falta.** Qualidade estável em aparelho de entrada; NPU suportada pelos runtimes de 1 bit (o próprio bitnet.cpp ainda é CPU); e memória barata — que em 2026 anda na direção oposta. Passa no teste 3.

### D2 — O navegador deixa de ser cliente e vira host de modelo

- **O que rompe.** A página deixa de ser a interface de um servidor e passa a ser o lugar onde a inteligência mora. Isso muda o que é possível publicar na web sem infraestrutura: um site estático passa a poder fazer o que antes exigia backend e faturamento por uso. Passa no teste 1.
- **Por que agora.** Prompt API estável no Chrome 148, WebGPU disponível, e inferência em WebAssembly/WebGPU já em ~80% do desempenho nativo em máquina boa. Passa no teste 2.
- **O que falta.** Cobertura móvel (não existe em Chrome Android nem iOS), requisito de 22 GB livres, ausência em Web Workers, e um mecanismo de pesos compartilhados que evite cada site baixar o seu. Passa no teste 3.

### D3 — O modelo pessoal: inteligência que fica com a pessoa, não com o serviço

- **O que rompe.** Um modelo que roda offline, acumula estado do usuário e não é replicável pelo fornecedor deixa de ser serviço e passa a ser **bem** — copiável, herdável, apreensível, perdível junto com o aparelho. Muda a natureza jurídica do objeto, não só o custo. Passa no teste 1.
- **Por que agora.** Adaptação local barata (LoRA, unsloth), runtimes com sessão persistente (LiteRT-LM com KV-cache e clonagem de sessão), e agentes locais de comunidade (mecha-factory, aura-on-device, SelfOS, Termly) mostrando o computador pessoal como servidor de IA pessoal. Passa no teste 2.
- **O que falta.** Praticamente tudo o que importa: formato portátil de estado pessoal, backup, migração entre aparelhos e qualquer resposta jurídica. É a mais frágil das três. Passa no teste 3, com folga.

### Rejeitadas pelo critério do Passo 2

| Candidata | Teste que falhou | Para onde foi |
|---|---|---|
| Chamada a API de modelo em nuvem | Teste 3 — em produção e em uso comum | Seção 3 |
| Modelo pequeno em servidor próprio | Teste 3 — maduro | Seção 3 |
| llama.cpp / Ollama / GGUF no laptop do desenvolvedor | Teste 3 — comum na comunidade-alvo | Seção 3 (é a âncora do presente) |
| "NPU mais rápida a cada geração" | Teste 1 — torna mais rápido o que já se fazia | Seção 3 |
| "Modelo pequeno com qualidade melhor" | Teste 1 — melhoria incremental | Seção 3 |

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "D1 — Inferência de qualidade útil no aparelho do usuário final, a custo marginal zero"
    efeitos:
      - id: e1
        ordem: 1
        efeito: O custo por chamada deixa de ser uma variável de projeto para tudo que couber no dispositivo.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Produtos de mídia passam a embutir IA em funções contínuas que nunca sustentariam custo por chamada, como revisão enquanto se escreve e busca semântica sobre tudo que a pessoa já abriu.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O orçamento de bateria e de calor substitui o orçamento financeiro como restrição central do design de interação, e vira item de especificação de produto.
                sinal: fraco
                prazo: 2030
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: Consolida-se uma classe de interface sempre atenta, que observa o contexto do usuário de forma contínua porque observar deixou de custar dinheiro.
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Quem vende assinatura de IA genérica perde o piso de preço e passa a cobrar por distribuição, sincronização e contexto, não por inferência.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: A nuvem se reposiciona como serviço de exceção, acionada só para o que o dispositivo comprovadamente não faz, e o padrão passa a ser local com escalonamento explícito.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O aparelho, e não a conta, passa a determinar que inteligência a pessoa tem à disposição.
        sinal: medio
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Forma-se uma desigualdade de capacidade por hardware, em que o mesmo aplicativo entrega agente para uns e formulário para outros.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: O projeto de mídia passa a prever dois ou mais níveis de inteligência como prática corrente, do mesmo modo que já previu banda larga e conexão precária.
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: O fabricante do aparelho assume o papel de curador do modelo, decidindo o que ele recusa, quando atualiza e o que o substitui.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: A recusa do modelo embutido vira disputa pública equivalente à moderação de plataforma, com o agravante de não existir registro central do que foi recusado.
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e2.2.2
                ordem: 3
                efeito: Surge um mercado de modelos alternativos instaláveis, reproduzindo no plano da inteligência a tensão entre loja oficial e instalação por fora.
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: A alta de preço da memória transforma RAM em recurso disputado dentro do aparelho, e a IA local passa a competir com o resto do sistema.
        sinal: forte
        prazo: 2026
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Os fabricantes racionam a IA local por faixa de preço, e a promessa de inteligência gratuita depois de baixada vira atributo de topo de linha.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Em mercados de aparelho de entrada, entre eles o Brasil, a IA local chega primeiro pelo laptop e pelo desktop e só depois pelo celular, invertendo a ordem de adoção de toda tecnologia móvel anterior.
                sinal: fraco
                prazo: 2030
                confianca: baixa
  - disrupcao: "D2 — O navegador deixa de ser cliente e vira host de modelo"
    efeitos:
      - id: e4
        ordem: 1
        efeito: A aba passa a hospedar inferência sem chave e sem servidor, e a fronteira entre aplicativo instalado e página publicada se apaga.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: O primeiro acesso a um site passa a envolver download de pesos, e o peso da página volta a ser o problema central do design web depois de uma década discutindo outra coisa.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Consolida-se um acervo de pesos compartilhados entre sites, mantido pelo navegador, e quem governa esse acervo governa o que a web consegue fazer sem servidor.
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Nascem experiências que só existem porque nada sai da máquina, em domínios onde enviar o dado era o impedimento, como documento sensível, diário e saúde.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: A alegação de que nada é enviado vira promessa verificável por inspeção de rede, e aparece uma prática de auditoria e selo para produtos estritamente locais.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: A degradação que o projetista precisa prever deixa de ser de rede e passa a ser de capacidade, com o mesmo site sendo inteligente numa máquina e limitado em outra.
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A detecção de capacidade de modelo entra no vocabulário de interface como as consultas de mídia entraram no layout responsivo.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A avaliação de modelo, incluindo qualidade, viés e recusa, passa a ser competência de quem faz interface, e não mais assunto exclusivo de quem faz servidor.
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "D3 — O modelo pessoal: inteligência que fica com a pessoa, não com o serviço"
    efeitos:
      - id: e6
        ordem: 1
        efeito: O modelo que acumula o estado de uma pessoa passa a se comportar como bem pessoal, portátil e não reconstituível pelo fornecedor.
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Perder o aparelho passa a significar perder inteligência acumulada, e o backup do modelo entra na rotina doméstica como entrou o backup de fotos.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: O modelo pessoal cai nas mesmas perguntas jurídicas do diário e do aparelho, envolvendo herança, apreensão e sigilo, sem jurisprudência formada para responder.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: A autoria passa a ser disputada entre a pessoa e o modelo treinado com ela, porque copiar o estilo se torna copiar um arquivo.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Contratos de trabalho e de encomenda passam a tratar do modelo pessoal do profissional, definindo com quem ele fica ao fim do vínculo.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: A responsabilidade pelo que o modelo diz se pulveriza, porque sem registro central não há a quem pedir o histórico do que foi respondido.
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: A regulação desloca a exigência do provedor do modelo para quem publica o aplicativo que o embute, seguindo a lógica já visível no tratamento europeu de modelos abertos.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Produtoras e agências passam a manter evidência local de conformidade, reinventando o log dentro do dispositivo do usuário e sob consentimento dele.
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o bloco acima não consegue dizer

**As três disrupções não são independentes, e uma delas trabalha contra as outras.** D1 pressupõe memória abundante; e3 diz que memória virou escassa. O mesmo movimento que impulsiona a IA local — a corrida de datacenter — está encarecendo o hardware onde ela deveria rodar. O mapa tem uma tensão interna que nenhuma linha do YAML expressa: **é possível que a IA local se torne, por alguns anos, um privilégio de quem tem aparelho caro, exatamente o oposto da narrativa de democratização que a acompanha.**

**Há uma inversão política curiosa entre e2.2 e e7.** Em e2.2, a IA local concentra poder: o fabricante do aparelho vira guardião único da inteligência, sem concorrente na caixa. Em e7, ela dissolve poder: ninguém responde porque não há log. As duas coisas podem ser verdade ao mesmo tempo, e esse é o pior arranjo possível — controle concentrado na curadoria, responsabilidade difusa na consequência. Se eu tivesse que apontar o efeito de segunda ordem mais subestimado do mapa, seria esse par.

**Para quem projeta, o efeito mais acionável é e5, não e1.** e1 é o que todo mundo repete (fica grátis). e5 é o que muda o trabalho amanhã: projetar para um mundo em que a inteligência disponível varia por máquina é um problema de interface, não de infraestrutura, e ninguém tem ainda um padrão para isso — nem um `@media`, nem um `navigator.capability`, nem uma convenção de como avisar o usuário de que ele está recebendo a versão menos capaz.

**E a linha entre e4.2 e o tema vizinho é tênue.** Experiência "que não envia nada" é onde a IA local (tema 16) encosta em dados e identidade sem terceiros (tema 17). A distinção que mantive: aqui a garantia vem de o **modelo** estar local; lá, de o **dado** estar local. Um produto sério vai precisar das duas, e isso é uma fronteira que provavelmente desaparece antes de 2031.

## 6. Sinais fracos e wildcards

**Sinais fracos (existem hoje, quase invisíveis):**

- **O `Termly` — controlar o CLI de IA da sua máquina pelo celular, com criptografia ponta a ponta.** O sinal não é o aplicativo: é a topologia. O computador pessoal virando **servidor de IA pessoal**, com o celular como terminal fino. Se isso pegar, a disputa não é "nuvem versus dispositivo", é "qual dos meus dispositivos é o servidor".
- **Alunos migrando para modelo local por atrito de cota, não por ideologia.** Registrado na própria disciplina. Adoção por irritação é um caminho de difusão pouco estudado e historicamente rápido.
- **O bitnet.cpp declarando suporte a NPU como "coming next".** A tecnologia-símbolo da tendência ainda não usa o chip que a tendência pressupõe. Quando essas duas curvas se encontrarem, o salto de capacidade em aparelho barato será degrau, não rampa.
- **A Prompt API aceitar áudio e imagem e devolver só texto.** Uma assimetria pequena que define o que dá para construir na web local em 2026: compreensão sim, geração não.

**Wildcards (baixa probabilidade, alto impacto):**

1. **Um modelo ternário atingir qualidade de fronteira num celular de entrada.** É o wildcard que o próprio tema nomeia, e o mapa inteiro se desloca em dois anos se acontecer: e1.2.1 deixa de ser "nuvem como exceção" e vira "nuvem como nicho".
2. **A crise de memória durar até 2029 em vez de um ano.** Não é otimista nem tecnológico, e é o wildcard mais provável de todos os improváveis. Resultado: a IA local vira produto de luxo, e2.1 se agrava até virar linha de corte social, e o Brasil fica do lado errado dela.
3. **Uma corte tratar o modelo pessoal como extensão da pessoa.** Um único precedente sobre apreensão ou quebra de sigilo de um modelo que aprendeu com alguém reorganizaria e6.1.1 de especulação para regra, e mudaria o design de todo produto que guarda estado do usuário.
4. **Um incidente de larga escala com modelo embutido desatualizado.** Modelo local não recebe correção instantânea. Uma falha grave em milhões de aparelhos sem canal de atualização rápida criaria, da noite para o dia, a figura do **recall de inteligência** — e com ela toda a burocracia de versionamento que o mapa hoje só especula.

## 7. Contra o próprio mapa

### 7.1 Que efeito é só extrapolação linear do presente?

**e1.1 é o mais frágil por esse critério.** "Se ficou grátis, todo mundo vai embutir em tudo" é a curva de custo esticada sem atrito. O atrito real existe e tem nome: tamanho do binário, tempo de primeiro carregamento, bateria, e o fato de que produto de mídia raramente adota algo porque ficou barato — adota porque o usuário pediu ou o concorrente fez.

**e1.2 também.** "Assinatura de IA morre porque o custo marginal foi a zero" é o raciocínio que previu o fim da TV paga quando a banda larga chegou. Assinatura sobrevive por conveniência e integração, não por custo de inferência.

### 7.2 Que efeito assume velocidade de adoção sem precedente?

**e4 (a web com modelo embutido) é o suspeito principal.** O comparável honesto é o **WebGL**: especificado em 2011, com uso disseminado em produto só no fim da década — quase dez anos. WebGPU e a Prompt API são mais novas que isso, e a Prompt API sequer existe no navegador móvel. Projetar "fronteira apagada entre app e página" para 2027 assume adoção mais rápida do que qualquer API de navegador anterior teve.

Um segundo comparável, mais favorável: o **service worker** e o PWA, que foram de proposta a uso corrente em cerca de quatro anos — mas com um requisito de recurso incomparavelmente menor que 22 GB de disco livre.

Para **e6 (modelo pessoal como bem)** e **e6.1.1 (herança e apreensão)**, **não encontrei precedente comparável**. O caso mais próximo — herança de conta digital e acervo de fotos — levou mais de uma década para produzir regra estável, e tratava de dado, não de artefato computacional que produz conteúdo novo. Registro isso como ausência de precedente, não como confirmação.

### 7.3 Que disrupção-raiz pode simplesmente não se concretizar?

**D3 é a mais provável de não acontecer**, e por um motivo prosaico: adaptação local exige que a pessoa faça alguma coisa. A história de produto de massa é implacável com qualquer coisa que exija manutenção do usuário — backup de modelo é backup, e backup é a categoria de tarefa que as pessoas mais consistentemente não fazem. O caminho mais provável é que o "modelo pessoal" seja um perfil de contexto sincronizado por um serviço, ou seja, exatamente o que a disrupção dizia dispensar.

**Se D3 cair, o mapa não desmorona.** e6 e e7 vão junto (2 efeitos de 1ª ordem, 3 de 2ª, 4 de 3ª), mas D1 e D2 se sustentam sozinhas, e e7.1 sobrevive migrando para baixo de D1 — a questão de responsabilidade sem log existe mesmo com modelo genérico embutido, sem nenhuma personalização.

**Se D1 cair** (por preço de memória prolongado, por qualidade insuficiente em aparelho comum), o mapa desmorona de verdade. D2 depende de D1 — navegador hospedando modelo é um caso particular de dispositivo rodando modelo. Nesse cenário sobra um mapa de nicho: IA local como recurso profissional e de topo de linha, com os efeitos de e2.1 e e3.1 dominando tudo o mais. É um mapa bem menos interessante e bem mais provável do que este documento admite no corpo principal.

### 7.4 Que viés entrou aqui?

- **Viés declarado pelo usuário:** neutro, sem preferência.
- **Viés de otimismo técnico da minha parte, provável.** Toda fonte primária que abri é de quem constrói a tecnologia — Microsoft, Apple, Google, Chrome. Fabricante não publica o que não funcionou. Compensei parcialmente trazendo a crise de DRAM, que veio de fonte de mercado (Gartner, TrendForce, Counterpoint) e é a única evidência estruturalmente desfavorável no documento. Ainda assim, a proporção é desequilibrada e o leitor deve descontar.
- **Viés de recorte imposto pela disciplina.** A régua "nada que já é comum em produto de massa" me obrigou a rejeitar Ollama e llama.cpp como disrupção. Isso é metodologicamente correto e substantivamente discutível: para a maior parte do mundo, rodar um modelo local **não** é comum, e o que é maduro na comunidade de desenvolvedores é emergente fora dela.
- **Viés de público.** O mapa fala a quem projeta mídia e interação, então efeitos de infraestrutura, energia e cadeia de suprimentos ficaram sub-representados, mesmo sendo provavelmente mais determinantes que os de interface.
- **Viés de horizonte.** 2031 é curto para efeitos de 3ª ordem de natureza jurídica e cultural. Datei vários em 2031 sabendo que 2035 seria mais honesto — e isso infla artificialmente a densidade do horizonte.

### 7.5 O que foi descartado ou revisado neste passo

| Item | O que era | O que virou | Por quê |
|---|---|---|---|
| "A demanda por datacenter desacelera porque a inferência migra para o dispositivo" | efeito de 2ª ordem sob e1 | **descartado** | A evidência de 2026 aponta o contrário: a demanda de datacenter está tão alta que consome a capacidade de wafer da memória de consumo. Era extrapolação de vaso comunicante, sem base. |
| "Todo aparelho novo terá agente local até 2028" | efeito de 1ª ordem | **descartado** | Confunde NPU presente com agente útil. Ter silício não é ter produto; e o rebaixamento de especificação de 2026 vai na direção contrária. |
| e1, prazo | 2026 | **revisado para 2027** | A afirmação é sobre prática de projeto, não sobre existência da tecnologia. A tecnologia existe agora; a prática muda depois. |
| e3 | não existia | **acrescentado como 1ª ordem** | Primeira versão da roda ignorava a crise de memória. Um mapa de IA local em 2026 que não fala do preço da RAM está errado, e a omissão era grave. |
| "Fim das lojas de aplicativos" | efeito de 3ª ordem sob e2.2 | **descartado** | "Tudo vai mudar" disfarçado. Não é específico o bastante para ser um efeito; virou o e2.2.2, mais estreito e falseável. |

## 8. O que a máquina errou

Registro do que percebi durante a própria execução:

1. **Tentei abrir o relatório da Counterpoint sobre AI PCs e ele está atrás de assinatura.** O número que circula — ~59% dos embarques globais em 2026, contra ~39% em 2025 — apareceu em resumo de busca, não na página que consegui ler. Mantive no documento **marcado como não verificado na fonte**. Se eu não tivesse tentado abrir, teria citado como se tivesse lido. Esse é exatamente o erro que o Passo 9 existe para impedir.
2. **Quase escrevi que "o modelo local elimina a dependência de fornecedor".** Não elimina: troca o fornecedor de modelo pelo fabricante do aparelho, que decide qual modelo vem, quando atualiza e o que ele recusa. A frase soava bem e estava errada; virou e2.2, que diz o contrário do que eu ia escrever.
3. **Meu primeiro rascunho da roda tinha zero efeitos negativos sobre hardware.** Só percebi a ausência ao buscar deliberadamente por contrafatos — a busca sobre preço de DRAM não estava no plano original. Isso sugere que o viés de fonte (documentação de fabricante) tinha contaminado a estrutura inteira, não apenas o tom.
4. **Arredondamentos que decidi não fazer.** "Ganho de 5× com bitnet.cpp" é a ponta superior de uma faixa de 1,37× a 5,07× em ARM, medida em condições do próprio fabricante. Mantive a faixa no texto. Do mesmo modo, "80% do desempenho nativo no navegador" vale para M3 Max, não para "um laptop".
5. **Números de prazo são estimativa minha, não projeção de fonte.** Nenhuma das fontes projeta ano para nenhum dos 31 efeitos. Os campos `prazo` são julgamento da skill, e devem ser lidos como ordem de grandeza.
6. **O `expo-ai-kit`, o `Gestalt Village` e o `aura-on-device`, citados no enunciado do tema, eu não verifiquei.** Aparecem no documento como sinais relatados pela turma, não como evidência que eu tenha aberto. Não os transformei em fonte.

## 9. Três cenários para 2031

### Provável — "a inteligência de duas velocidades"

Em 2031, todo aparelho vendido acima de certa faixa de preço tem um modelo embutido que o usuário nunca escolheu e não sabe nomear. Ele resume, traduz, descreve imagem, encontra coisas e recusa algumas. É bom o suficiente para que ninguém pense em pagar por isso separadamente, e limitado o suficiente para que, uma vez por semana, o aplicativo avise que "esta tarefa precisa de conexão".

Abaixo dessa faixa — que a crise de memória empurrou para cima e que nunca voltou inteiramente ao normal — os aparelhos continuam chamando servidor, e seus usuários continuam sendo os que pagam com dado o que os outros pagam com hardware.

Quem projeta mídia aprendeu a trabalhar com isso do jeito que aprendeu a trabalhar com conexão ruim: detecta a capacidade, entrega duas experiências e tenta que a menor não pareça um castigo. O navegador roda modelo em desktop com naturalidade e no celular quase nunca. A assinatura de IA não morreu; migrou para o que o dispositivo não faz — memória longa, coordenação entre pessoas, o que aconteceu hoje.

### Desejável — "o piso comum"

Em 2031 existe um piso de inteligência disponível em qualquer aparelho, garantido por modelos ternários muito pequenos e por um acervo de pesos compartilhado que o navegador mantém uma vez e todos os sites usam. Ninguém baixa 400 MB por site.

O que teria sido necessário para chegar aqui: o suporte a NPU nos runtimes de 1 bit ter amadurecido antes de 2028; algum acordo — de mercado ou de padronização — sobre o cache comum de pesos; e a oferta de memória ter se normalizado até 2028. Nenhuma das três é implausível; as três juntas exigem sorte.

O ganho não é econômico, é de projeto: com um piso garantido, o designer volta a projetar uma experiência em vez de duas, e a inteligência deixa de ser variável de segmentação. Surge uma categoria inteira de produto que só existe porque nada sai da máquina — e a alegação "não enviamos nada" é auditável, não publicitária.

### Indesejável — "o guardião na caixa"

Em 2031 o modelo do aparelho é o único que funciona bem nele. Modelos alternativos rodam, mas sem NPU, o que na prática significa lentos e quentes. O fabricante decide o que o modelo recusa, e a recusa não deixa registro em lugar nenhum — não há log, não há apelação, não há como demonstrar que aconteceu. Quando um produto de mídia é recusado no dispositivo, não há a quem recorrer, porque tecnicamente ninguém recusou nada.

A responsabilidade seguiu o caminho previsto em e7.1: caiu sobre quem publica o aplicativo, que não escolheu o modelo, não pode auditá-lo e não pode atualizá-lo.

**O sinal precoce, que já é visível hoje:** a distância entre o desempenho do modelo do fabricante e o de um modelo instalado por fora, no mesmo aparelho. Enquanto essa razão ficar perto de 1, o cenário é remoto. Quando ela passar de 3 — e a rota de aceleração por NPU ser de acesso restrito é o caminho para isso —, o cenário já está instalado, mesmo que ninguém tenha anunciado.

## 10. O experimento

### O que é

**Um mesmo protótipo, três inteligências, um instrumento.**

Construa um leitor de documento com uma única função: a pessoa abre um PDF e faz perguntas sobre ele. Implemente a mesma interface três vezes, com a mesma aparência e o mesmo texto:

- **A** — Prompt API do Chrome (Gemini Nano, modelo do navegador).
- **B** — um modelo de 1 a 3 B baixado sob demanda via WebLLM/WebGPU, com barra de download visível.
- **C** — uma API de nuvem.

Não diga ao participante qual é qual. Sorteie a ordem. Instrumente três coisas: **tempo até a primeira resposta útil**, **momento em que a pessoa desiste**, e **o que ela diz quando a resposta é pior** — se culpa a si mesma, o documento, ou a ferramenta.

Custo: uma semana de trabalho e nenhum orçamento de infraestrutura. É de propósito.

### Que pergunta sobre o futuro ele ajuda a responder

A pergunta de e5, que é a mais acionável do mapa e a menos respondida: **quanta queda de qualidade o usuário aceita em troca de "não sai daqui" e de "não precisa de conta" — e como ele explica a queda para si mesmo?**

Se a pessoa atribui a falha a si mesma, projetar em duas velocidades é viável. Se ela atribui ao produto, e2.1 deixa de ser uma questão de acessibilidade e vira um risco de marca, e o cenário indesejável ganha um mecanismo de aceleração.

Uma segunda pergunta cai de graça: **a barra de download mata o produto?** É o teste direto de e4.1 — se ninguém espera 300 MB, a web com modelo local depende inteiramente do acervo compartilhado de pesos (e4.1.1), e a estimativa de 2027 para e4 está errada por anos.

### Que tecnologia emergente ele usa, e por que a madura não serve

Usa a Prompt API estável no Chrome 148 e inferência em WebGPU. **Uma API de nuvem não serviria** porque o objeto do experimento é precisamente o que a nuvem não tem: o custo de partida (download de pesos, requisito de máquina) e a ausência de custo de uso. Com nuvem, as três condições teriam desempenho parecido e o experimento mediria a qualidade do modelo — que é justamente o que já sabemos medir e o que menos importa aqui.

### O que faria quem testar mudar de ideia sobre o mapa

- **Se a condição A (navegador) for preferida mesmo sendo pior**, o mapa está conservador: adoção por privacidade e ausência de conta é mais forte do que assumi, e os prazos de e4 e e4.2 devem ser antecipados.
- **Se a condição C (nuvem) vencer por larga margem e a queixa for qualidade, não latência**, D1 está superestimada: "suficiente para a tarefa" é uma régua de engenheiro, não de usuário, e o cenário provável vira otimista demais.
- **Se ninguém completar a condição B por causa do download**, e4.1 sobe de efeito de 2ª ordem para restrição estrutural de D2, e o acervo compartilhado de pesos deixa de ser efeito de 3ª ordem para virar pré-requisito.
- **Se a variância entre máquinas for maior que a variância entre condições**, então e5 é o efeito principal de todo o mapa e deveria ter sido uma disrupção-raiz.

## 11. Fontes

Listadas apenas as consultadas nesta execução. Marco explicitamente o que **abri e li** e o que vi **só em resumo de busca** — são coisas diferentes e o documento não deve fingir que não são.

| # | Fonte | O que sustenta | Acesso | Confiabilidade |
|---|---|---|---|---|
| 1 | `https://github.com/microsoft/BitNet` | Ganhos de 1,37×–5,07× (ARM) e 2,37×–6,17× (x86), energia −55% a −82%; modelos suportados; suporte **majoritariamente CPU**, NPU "coming next" | **aberto e lido** | Alta para o que a ferramenta faz; é o repositório oficial, logo mede a si mesma — os ganhos são declarados pelo autor, não por terceiro |
| 2 | `https://developer.chrome.com/docs/ai/prompt-api` | Prompt API estável no Chrome 148; 22 GB livres; >4 GB VRAM ou 16 GB RAM e 4+ núcleos; sem Chrome Android/iOS; multimodal na entrada, texto na saída; indisponível em Web Workers | **aberto e lido** | Alta — documentação normativa do próprio navegador; é a fonte que mais restringe o otimismo do mapa |
| 3 | `https://arxiv.org/pdf/2504.12285` — BitNet b1.58 2B4T Technical Report | 2,4 B parâmetros, 4 T tokens, pesos ternários; primeiro 1-bit nativo em escala | resumo de busca | Alta como documento (relatório técnico), mas **não abri o PDF**; usei só o que o resumo de busca trouxe |
| 4 | `https://machinelearning.apple.com/research/introducing-third-generation-of-apple-foundation-models` e páginas correlatas da Apple | Modelo de ~3 B no dispositivo, API Swift, geração guiada, sem chave nem custo por chamada | resumo de busca | Média-alta; material de fabricante, sem contraditório |
| 5 | `https://github.com/google-ai-edge/LiteRT-LM` e `https://developers.google.com/edge/litert-lm` | Runtime para Android, iOS, web e desktop; Gemma 3/3n; aceleração GPU e NPU; KV-cache e clonagem de sessão | resumo de busca | Média-alta; material de fabricante |
| 6 | `https://arxiv.org/pdf/2412.15803` — WebLLM (e o trabalho posterior "Llamas on the Web") | ~41 tok/s para Llama 3.1 8B em 4 bits num M3 Max; ~80% do desempenho nativo; queda severa em GPU integrada e Safari móvel | resumo de busca | Alta como literatura revisada; o número é de hardware topo de linha e **não generaliza** |
| 7 | `https://www.gartner.com/en/newsroom/press-releases/2026-02-26-gartner-says-surging-memory-costs-will-reduce-global-pc-and-smartphone-shipments-in-2026` e `https://www.trendforce.com/presscenter/news/20251211-12831.html` | DRAM +90–95% no 1T26; LPDDR5X +78–83% no 2T26; ~130% de alta combinada até o fim de 2026; +13% no preço de smartphone; −8,4% nos embarques; retorno de modelos de entrada a 4 GB | resumo de busca | Alta como sinal de mercado; projeção de casa de análise, logo sujeita a revisão trimestral |
| 8 | `https://artificialintelligenceact.eu/gpai-guidelines-overview/` e análises jurídicas correlatas | Isenções parciais para modelos de licença livre; quem incorpora o modelo num sistema e o coloca no mercado responde como provedor do sistema; poderes plenos de fiscalização a partir de 2 de agosto de 2026 | resumo de busca | Média; texto regulatório é confiável, a leitura de escritórios de advocacia é interpretação e diverge entre si |

**Consultada e não obtida:** `https://counterpointresearch.com/en/reports/ai-advanced-pcs-to-surpass-half-of-global-shipments-in-2026` — tentei abrir e o relatório exige assinatura. O número de ~59% dos embarques em 2026 (contra ~39% em 2025) aparece no resumo de busca e **não foi verificado na fonte**. Use com desconto.

**Especulação da própria skill, sem fonte** (declarado, não atribuído a ninguém): todos os campos `prazo` da roda; a tensão entre e2.2 e e7; o comparável do WebGL em 7.2; a estimativa de que D3 é a mais frágil; a hipótese de inversão de ordem de adoção no Brasil (e3.1.1) — esta última é dedução a partir do preço de memória e do perfil do parque de aparelhos brasileiro, não é dado.

**Nota sobre o Brasil.** A ANPD colocou IA como eixo prioritário de fiscalização para 2026–2027 e passou a operar com poderes reforçados, o que torna o processamento estritamente local um argumento de conformidade atraente por aqui. Esse ponto veio de resumo de busca (`https://www.airiskaware.com/pt/insights/brazil-lgpd-ai-governance-2026` e correlatos), **não abri as páginas**, e o trato como sinal, não como fato estabelecido. O ponto brasileiro em que tenho mais confiança é o outro: um parque dominado por aparelhos de entrada, numa conjuntura em que o entrada está sendo rebaixado para 4 GB, é o pior lugar possível para uma tecnologia que pede memória.

## 12. Anexo — o levantamento bruto

### Buscas realizadas, na ordem

1. `BitNet b1.58 1-bit LLM Microsoft bitnet.cpp CPU inference 2026` — deu o essencial da D1. Trouxe também um artigo de 2026 sobre SIMD para modelos ternários (Litespark) que não usei por não ter aberto.
2. `Apple Foundation Models framework on-device 3B model developers 2026` — confirmou o runtime de SO. Vários resultados eram blogs de terceiros reembalando o anúncio; ignorei.
3. `Chrome built-in AI Prompt API Gemini Nano WebGPU stable 2026 web developers` — deu a estabilização no Chrome 148.
4. `NPU AI PC shipments share 2026 Qualcomm Snapdragon on-device inference forecast` — deu Snapdragon C em laptop abaixo de US$ 300 e os números de penetração (estes, não verificados).
5. `WebLLM MLC WebGPU in-browser LLM inference 2026 performance limits` — deu o teto de desempenho e, mais útil, o limite.
6. `Brasil 2026 celular entrada memória RAM IA no dispositivo LGPD ANPD processamento local` — deu ANPD como eixo de fiscalização e a pressão de RAM. Resultados em português de qualidade irregular; muita página de consultoria.
7. `DRAM memory price surge 2026 smartphone RAM cost AI demand impact entry-level phones` — **a busca que mudou o mapa.** Não estava no plano. Gerou o efeito e3 inteiro e o wildcard 2.
8. `Google AI Edge LiteRT-LM Gemma 3n on-device Android 2026 ML Kit GenAI APIs` — confirmou o runtime portátil.
9. `EU AI Act open-weight models downstream deployer responsibility on-device local model liability 2026` — sustentou e7.1.

### Páginas efetivamente abertas

- `github.com/microsoft/BitNet` — obtida.
- `developer.chrome.com/docs/ai/prompt-api` — obtida; foi a que mais derrubou otimismo.
- `counterpointresearch.com/.../ai-advanced-pcs...` — **falhou**, paywall. Registrado na seção 8.

### Rodadas descartadas da roda

**Primeira versão (descartada inteira).** Tinha duas disrupções-raiz — "custo zero" e "modelo pessoal" — e nenhuma menção a hardware ou a preço de memória. Todos os efeitos eram de natureza econômica ou cultural. Descartada por ser um mapa de IA local sem o corpo físico da IA local.

**Efeitos cortados, com o motivo:**

- *"A demanda por datacenter desacelera."* — Contrariado pela evidência de 2026 (HBM consumindo capacidade de wafer). Era vaso comunicante imaginário.
- *"Todo aparelho novo terá agente local até 2028."* — Confunde silício com produto.
- *"Fim das lojas de aplicativos."* — Não-específico; virou e2.2.2.
- *"A educação muda porque todo aluno terá um tutor offline."* — Cortado por ser o efeito que serve para qualquer tema (foi explicitamente pedido que se excluíssem os genéricos). Reaproveitável se alguém quiser um recorte educacional, mas não diz nada sobre IA local em particular.
- *"O consumo de energia global cai porque inferência local gasta menos."* — Cortado: o ganho de 55–82% do bitnet.cpp é por inferência, não agregado, e não há como projetar o agregado sem dado de volume. Seria número inventado.
- *"Surge um formato aberto de modelo pessoal portátil."* — Cortado como efeito e mantido apenas como o que **falta acontecer** em D3. Não é consequência; é pré-condição.
- *"Publicidade deixa de funcionar porque o agente local filtra tudo."* — Cortado: pressupõe adoção de agente local majoritária e comportamento de usuário que nenhuma evidência sustenta. Bom tema, mapa errado.

**Efeito que quase virou disrupção-raiz e não virou:** e5 (degradação por capacidade). Passa nos três testes e é o efeito mais acionável do documento. Deixei como efeito de D2 porque ele é consequência de D1 e D2 juntas, não causa — mas o item final do Passo 10 do experimento existe justamente para me desmentir aqui.

### Fios não puxados, para quem continuar

- **Térmico e bateria.** Nenhuma das fontes que li mede quanto tempo de bateria custa uma sessão de agente local. É a variável que decide e1.1 e não achei número.
- **O que acontece quando o modelo do fabricante e o modelo do aplicativo discordam** dentro do mesmo aparelho. Nenhum runtime documenta isso.
- **Atualização de modelo embutido.** Nenhuma das documentações que li descreve política de versionamento ou de correção de falha. É o buraco de onde sai o wildcard 4.
- **Federação entre dispositivos da mesma pessoa** (o sinal do `Termly`). Não busquei; merece rodada própria e encosta no tema 17.
- **A cota que empurrou a turma para o Ollama.** Vale investigar se a instabilidade de cota gratuita é acidente de fornecedor ou política deliberada de conversão. Se for política, é um motor de adoção de IA local que nenhum mapa de tendência está contando.
