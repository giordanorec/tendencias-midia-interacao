# Formato do documento de tendência

*CIN0055 · Tendências em Mídia e Interação · 2026.2*

Este é o formato de saída do movimento 2. Todo mapa de futuro sai daqui, e a skill de cada
aluno (Atividade 03) tem que **produzir já neste formato**.

O formato existe por uma razão prática: dez documentos escritos cada um do seu jeito viram
dez documentos. Dez documentos no mesmo esqueleto viram **um site, um conjunto de
infográficos e uma apresentação com consistência única** — sem que ninguém precise reformatar
nada à mão.

**Regra que vale sobre todas as outras: nada de corte.** Este documento é para ser
**exaustivo**. Tudo o que foi levantado entra. O processamento para as peças públicas é feito
depois, por cima; e só dá para resumir bem o que foi escrito por inteiro.

---

## Arquivo

```
tendencia-<slug-do-tema>.md
```

`slug` em minúsculas, sem acento, palavras separadas por hífen. Ex.: `audio-espacial-generativo`.

---

## Esqueleto

Os títulos de seção são **fixos e literais**, com a numeração. Um script separa o documento por
eles; um título trocado quebra o processamento. Você pode criar subtítulos livres dentro de
cada seção.

### Frontmatter

Primeira coisa do arquivo, entre `---`. Todos os campos são obrigatórios; use `null` quando não
se aplicar.

```yaml
---
tema: Áudio espacial generativo
slug: audio-espacial-generativo
autor_login: yrv
zona_de_interesse: Áudio e computação musical
data: 2026-09-15
horizonte: 2031            # o ano-alvo do mapa
publico: null              # para quem esta análise foi feita, ou null
recorte_geografico: global # global | brasil | <outro>
disrupcoes_raiz: 3         # quantas você identificou
efeitos_ordem_1: 6
efeitos_ordem_2: 11
efeitos_ordem_3: 14
tecnologias_citadas: [ ... ]    # nomes, como aparecem no texto
fontes: 34                      # quantas você de fato leu
confianca: media                # alta | media | baixa — sua avaliação do próprio mapa
experimento: Renderizador de cena sonora a partir de descrição em texto
skill_usada: futurizacao-yrv
publico_ok: false          # true se você autoriza seu nome na galeria pública
---
```

`publico_ok` controla a atribuição na página pública da disciplina. O padrão é `false`: o
conteúdo processado vai para a galeria **sem o seu nome**, a menos que você marque `true`.

### As seções

```markdown
## 1. Resumo

Um parágrafo. O mapa inteiro em cinco a oito linhas. É o texto que vai para o card
da galeria, então ele precisa se sustentar sozinho, fora do documento.

## 2. O tema

O que é, onde ele encosta em mídia e interação, e por que ele merece um mapa de futuro
em vez de um levantamento de estado da arte.

## 3. Onde isso está hoje

O estado atual, com fontes. O que já existe e funciona, o que existe e não funciona,
quem está construindo. Esta seção é a âncora do mapa no presente: sem ela, os efeitos
de terceira ordem são ficção.

## 4. As disrupções-raiz

As rupturas de onde tudo deriva. Uma subseção por disrupção. Para cada uma:
o que rompe, por que agora e não há cinco anos, e o que ainda falta acontecer para
que ela se concretize.

Tecnologia madura não entra aqui. Se você não consegue dizer o que ela rompe,
ela não é uma disrupção — é uma melhoria.

## 5. A roda dos futuros

O bloco YAML abaixo é **obrigatório e é lido por máquina** — é dele que saem os
infográficos. Escreva-o exatamente nesta estrutura, e depois comente em prosa
o que o bloco não consegue dizer.

```yaml
roda:
  - disrupcao: Modelos generativos de áudio rodando em tempo real no dispositivo
    efeitos:
      - id: e1
        ordem: 1
        efeito: Trilha sonora deixa de ser gravada e passa a ser sintetizada na hora
        sinal: forte          # forte | medio | fraco
        prazo: 2028
        confianca: alta       # alta | media | baixa
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O ofício de sound designer migra para curadoria de sistemas
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Formação em áudio se reorganiza em torno de direção, não de execução
                sinal: fraco
                prazo: 2033
                confianca: baixa
```

Regras do bloco:
- Três níveis de profundidade. Nem menos, nem mais.
- `id` hierárquico e único (`e1`, `e1.1`, `e1.1.1`).
- Todo efeito tem `sinal`, `prazo` e `confianca`. `confianca: baixa` é resposta legítima
  e frequente — na terceira ordem, é a resposta esperada.
- Um efeito por linha de `efeito`, em uma frase afirmativa. Não use pergunta.

## 6. Sinais fracos e wildcards

O que quase não aparece hoje mas mudaria o mapa inteiro se acontecesse. Inclua pelo
menos um wildcard de baixa probabilidade e alto impacto.

## 7. Contra o próprio mapa

A seção que vale mais numa correção. Onde este mapa provavelmente está errado.
No mínimo:

- Qual efeito é só extrapolação linear do presente.
- Qual efeito assume uma velocidade de adoção que nunca se viu em caso comparável.
- Qual disrupção pode simplesmente não se concretizar, e o que aconteceria com o mapa.
- Que viés seu entrou aqui — você escolheu este tema por gostar dele.

## 8. O que a máquina errou

O que a IA produziu de errado durante este trabalho, e como você percebeu.
Fonte inventada, número redondo demais, efeito plausível que não se sustenta,
autoria trocada. Um item específico com o motivo da desconfiança vale mais
que cinco genéricos.

## 9. Três cenários para <ano do horizonte>

Um parágrafo cada, escritos como se o ano já tivesse chegado:

- **Provável** — o que acontece se as tendências correntes seguirem.
- **Desejável** — o melhor desfecho plausível, e o que teria que ser feito para chegar lá.
- **Indesejável** — o desfecho ruim plausível, e qual é o sinal precoce dele.

## 10. O experimento

O que dá para construir **hoje** que ajude a entender essa tendência. É daqui que sai
o seu projeto do movimento 3.

- O que é.
- Que pergunta sobre o futuro ele ajuda a responder.
- Que tecnologia emergente ele usa — e por que não dá para fazer com tecnologia madura.
- O que a turma vai fazer quando testar isso em sala.
- O que seria um resultado que te faria mudar de ideia.

## 11. Fontes

Lista numerada. Só o que você leu. Para cada uma: link, o que ela sustenta neste
documento, e uma linha sobre o quanto ela é confiável.

Fonte que você não abriu não entra. Link tem que responder.

## 12. Anexo — o levantamento bruto

Sem limite de tamanho e sem edição. Tudo o que foi levantado e não coube nas seções
acima: as saídas completas da skill, as rodadas descartadas, os efeitos cortados,
os caminhos abandonados, as buscas que não deram em nada.

É a seção mais longa do documento, e é normal que seja. Nada aqui vai para a página
pública sem passar por processamento — mas o que não estiver aqui não pode ser
processado depois.
```

---

## Checagem antes de entregar

```bash
# 1. o frontmatter é YAML válido e tem todos os campos
python3 - <<'EOF'
import re, sys, yaml
t = open("tendencia-<slug>.md", encoding="utf-8").read()
fm = re.match(r"^---\n(.*?)\n---\n", t, re.S)
assert fm, "sem frontmatter"
d = yaml.safe_load(fm.group(1))
faltam = [k for k in ["tema","slug","autor_login","zona_de_interesse","data","horizonte",
    "publico","recorte_geografico","disrucoes_raiz","efeitos_ordem_1","efeitos_ordem_2",
    "efeitos_ordem_3","tecnologias_citadas","fontes","confianca","experimento",
    "skill_usada","publico_ok"] if k not in d and k != "disrucoes_raiz"]
if "disrupcoes_raiz" not in d: faltam.append("disrupcoes_raiz")
print("FALTAM:", faltam or "nada")
EOF

# 2. as 12 seções estão lá, com os títulos literais
grep -c "^## " tendencia-<slug>.md     # tem que imprimir 12

# 3. o bloco da roda é YAML válido
python3 -c "
import re,yaml
t=open('tendencia-<slug>.md',encoding='utf-8').read()
b=re.search(r'\`\`\`yaml\nroda:(.*?)\n\`\`\`',t,re.S)
print('roda ok' if b and yaml.safe_load('roda:'+b.group(1)) else 'RODA QUEBRADA')"

# 4. os links das fontes respondem
grep -o 'https\?://[^ )]*' tendencia-<slug>.md | sort -u \
  | xargs -I{} sh -c 'printf "%s " {}; curl -o /dev/null -s -w "%{http_code}\n" -L --max-time 10 {}'
```

---

## O que a disciplina faz com isso depois

1. Os doze blocos `roda:` viram **um mapa único de futuros da turma**, com os efeitos
   cruzados — onde dois temas diferentes convergem para o mesmo efeito de segunda ordem
   é exatamente o achado interessante.
2. As seções 1, 5, 9 e 10 alimentam o **site público** de tendências.
3. A seção 12 fica **privada**, atrás de login, e é a matéria-prima do processamento.
4. A seção 7 é o que se confronta com o mapa adversarial do professor na aula.
