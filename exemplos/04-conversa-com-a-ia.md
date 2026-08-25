# 4 · A conversa com a IA, transcrita

**Aluno:** exemplo (troque pelo seu login)
**Quando:** 19 a 21 de agosto de 2026
**Onde:** Claude (chat, plano gratuito) para escrever o coletor · Gemini 2.5 Flash pelo Google AI
Studio para julgar os 11.500 em lote · Ollama com Qwen local para a limpeza de duplicatas

**Como transcrevi:** copiei as trocas que mudaram o rumo do trabalho e cortei as repetições.
Onde cortei, marquei com `[…]`. Não reescrevi nada para ficar bonito — os erros estão aqui.
Se você entregar isto, não precisa entregar as diretrizes (arquivo 5). Um dos dois basta.

---

## Rodada 1 — o pedido errado

**Eu:** me liste 10.000 ferramentas de IA para mídia e interação

**IA:** Não consigo listar 10.000 ferramentas — eu não tenho como visitar sites, e uma lista
gerada só da minha memória traria as mesmas cinquenta que todo mundo conhece, várias delas
desatualizadas ou já extintas. Posso fazer duas coisas melhores: escrever para você um coletor que
varre fontes reais e produz esse volume, ou ajudar você a escolher quais fontes varrer. Qual você
prefere?

**Eu:** faz a lista assim mesmo, só pra eu ver

**IA:** [uma lista de 40 nomes]

> **Onde eu percebi o problema.** Vinte e dois dos quarenta eu já conhecia. Dois estavam mortos —
> abri e caí em domínio à venda. E a lista inteira era de produto comercial americano: nada de
> pesquisa, nada de projeto de artista. Era exatamente a lista que qualquer um da turma teria
> gerado escrevendo o mesmo prompt. **Foi aí que entendi o desenho da atividade:** o trabalho da
> IA não é *saber* as ferramentas. É *ir buscar* as ferramentas.

---

## Rodada 2 — o pedido certo

**Eu:** ok, você tinha razão. quero o coletor. as fontes que eu escolhi estão aqui: [colei a lista
que virou o arquivo 3]. escreva um script python que varra essas fontes e escreva um jsonl com
uma linha por achado: quando, consulta, fonte, nome, url, trecho. sem dependência exótica, tem que
rodar no meu notebook.

**IA:** [script com um coletor por tipo de fonte — API onde existe, HTML onde não existe, com
espera entre requisições e retomada de onde parou] Três avisos antes de você rodar: […] o Product
Hunt exige token, o Hugging Face pagina de um jeito diferente dos outros, e os diretórios
comerciais mudam o HTML com frequência — se quebrar, é ali.

**Eu:** rodou 40 minutos e parou no product hunt, erro 429

**IA:** É limite de taxa. Você está pedindo rápido demais. [ajuste com recuo exponencial e cache
em disco para não repetir o que já foi baixado] Rode de novo — ele vai pular o que já está no
cache.

**Eu:** agora foi. 22.420 linhas. mas tem muita repetição

**IA:** Repetição é esperado e é informação: o mesmo endereço aparecendo em cinco fontes diferentes
diz algo sobre ele. Não jogue fora o log bruto — ele é a prova do tamanho da varredura. Faça a
deduplicação num passo separado, gerando um segundo arquivo. […] O ponto delicado é **o que conta
como "o mesmo"**: `x.com/tool`, `www.x.com/tool/`, `x.com/tool?utm_source=nl` e `docs.x.com` são
todos a mesma ferramenta. Normalize para o domínio registrável antes de comparar — menos para
GitHub, Hugging Face, itch.io e afins, onde o que identifica é domínio + dois primeiros pedaços do
caminho.

**Eu:** 11.500 distintas

---

## Rodada 3 — a peneira, e a descrição que não prestava

**Eu:** agora julgue as 11.500 e me devolva as 500 melhores

**IA:** Não em uma chamada — não cabe. E "melhores" é vago demais para produzir um resultado que
você consiga defender. Vamos fazer assim: você me dá os critérios, eu rodo em lotes de 40 e devolvo
uma decisão com justificativa por item. Comece pelos cortes duros: o que reprova na hora,
independentemente de qualquer outra qualidade?

**Eu:** [os cinco cortes que viraram o arquivo 5]

**IA:** [primeiro lote julgado]

**Eu:** as decisões estão boas mas as descrições estão horríveis. "Uma solução poderosa que
revoluciona o fluxo criativo" não me diz nada. eu vou ter que abrir 500 links assim.

**IA:** Justo — eu estava repetindo o texto de marketing da própria página. Me dê a forma que
você quer e eu sigo.

**Eu:** 2 ou 3 frases. primeiro o que entra e o que sai, concreto. depois onde encaixa no
trabalho. depois o limite: preço, requisito, o que ela não faz. proibido adjetivo de propaganda.
se não souber o limite escreve "não consegui apurar", não inventa.

**IA:** [lote refeito]

> Essa foi a troca mais importante da atividade inteira. Com o limite escrito na descrição, eu
> consegui peneirar as 500 olhando os cartões, abrindo link só nas duvidosas. Sem isso a atividade
> não terminaria no prazo.

---

## Rodada 4 — o empate

**Eu:** sobraram 1.240 aprovadas. preciso de 500

**IA:** Aumentar o rigor dos critérios é o caminho óbvio e é o errado: você vai acabar com 500
ferramentas da mesma categoria, porque geração de imagem tem mais oferta e passa mais fácil. Sugiro
desempatar por diversidade antes de nota. […]

**Eu:** faz por categoria, teto de 80 por categoria

**IA:** [aplicado] Ficaram 500 com esta distribuição: […] Uma observação: as 80 de "geração de
imagem" cortaram 210 candidatas, enquanto "acessibilidade" entrou com 31 e não encheu a cota. Isso
não é defeito do critério, é retrato do mercado — vale você registrar isso no seu relato.

**Eu:** registrei. e desempate depois da categoria?

**IA:** Por fonte menos representada, para o que veio de conferência e de itch.io não ser
atropelado pelo volume dos diretórios comerciais. Depois nota. […]

---

## O que eu tiraria de lição

1. **A IA não sabe as ferramentas — ela busca as ferramentas.** Pedir a lista pronta devolve o
   senso comum; pedir o coletor devolve a varredura.
2. **O critério é meu, a execução é dela.** Toda vez que eu deleguei o critério ("escolha as
   melhores"), voltou genérico. Toda vez que eu escrevi o critério, voltou utilizável.
3. **A descrição é parte da ferramenta.** Uma lista de 500 nomes sem descrição honesta é uma lista
   de 500 links para abrir na mão. O trabalho não estaria feito.
4. **O que ela me contestou foi o mais útil.** As duas vezes em que ela disse "não faço assim, e
   este é o motivo" foram as duas viradas do trabalho.
