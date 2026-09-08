#!/usr/bin/env bash
# lote.sh — espera o lote 1 (01 02 03) terminar, depois roda a fila em grupos de 3; para se a cota acabar.
D="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"; cd "$D"
FILA=(04 05 06 08 09 10 11 12 13 14 15 16 18 19)
cota(){ grep -l "usage limit" "$D"/tema-*.codex.log 2>/dev/null | head -1; }
until [ "$(cat run-01.out run-02.out run-03.out 2>/dev/null | grep -c -E '^(OK|FALHOU)')" -ge 3 ]; do sleep 10; done
echo "lote1: $(cat run-01.out run-02.out run-03.out)"
i=0
while [ $i -lt ${#FILA[@]} ]; do
  if [ -n "$(cota)" ]; then echo "COTA ESGOTADA antes de ${FILA[*]:$i}"; echo "${FILA[*]:$i}" > FALTAM.txt; exit 2; fi
  g=("${FILA[@]:$i:3}"); i=$((i+3))
  for n in "${g[@]}"; do [ -f "tema-$n.png" ] && continue; ./gerar.sh "$n" > "run-$n.out" 2>&1 & done
  wait
  for n in "${g[@]}"; do cat "run-$n.out" 2>/dev/null | head -1; done
done
echo "FILA CONCLUIDA"
