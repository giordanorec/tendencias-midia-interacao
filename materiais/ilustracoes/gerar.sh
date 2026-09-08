#!/usr/bin/env bash
# gerar.sh NN — lê tema-NN.txt (prompt exato), manda o Codex gerar via image_gen e salvar tema-NN.png
set -uo pipefail
D="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
NN="${1:?uso: gerar.sh NN}"
P="$D/tema-$NN.txt"; OUT="$D/tema-$NN.png"; LOG="$D/tema-$NN.codex.log"
[ -f "$P" ] || { echo "sem prompt $P"; exit 1; }
t0=$(date +%s)
codex exec -m gpt-5.6-sol --skip-git-repo-check --ephemeral -C "$D" -o "$D/tema-$NN.last.txt" "Tarefa unica, sem perguntar nada e sem alterar nenhum outro arquivo.
Leia o arquivo $P. Ele contem o PROMPT EXATO de uma imagem. Use sua ferramenta image_gen UMA vez com esse prompt, palavra por palavra, sem acrescentar nem remover nada, tamanho 1024x1024 (quadrado), qualidade alta. Salve o PNG resultante exatamente em $OUT. Se a ferramenta devolver a imagem em outro caminho, copie para $OUT. Nao edite a imagem. Ao final imprima apenas: o caminho do PNG e os parametros que passou ao image_gen (size, quality, background)." </dev/null >"$LOG" 2>&1
rc=$?
t1=$(date +%s)
if [ -f "$OUT" ]; then
  echo "OK tema-$NN $(( t1 - t0 ))s $(sips -g pixelWidth -g pixelHeight "$OUT" | tail -2 | awk '{print $2}' | paste -sd x -)"
else
  echo "FALHOU tema-$NN rc=$rc $(( t1 - t0 ))s — ver $LOG"; tail -5 "$LOG"
fi
