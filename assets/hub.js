/* ~grec/tmi/26-2 é o endereço público da disciplina (GREC-0010). Emoldurada pelo CIn, a página avisa
   a rota a quem a emoldura; aberta direto no domínio da Vercel, devolve para o CIn. */
(function () {
  var CIN = "https://www.cin.ufpe.br", BASE = "/~grec/tmi/26-2";
  var direto = /(^|[?&])direto=1/.test(location.search);
  try { if (direto) sessionStorage.setItem("tmi-direto", "1"); } catch (e) {}
  var ficar = direto; try { ficar = ficar || sessionStorage.getItem("tmi-direto") === "1"; } catch (e) {}
  if (window.top !== window.self) {
    var avisar = function () { try { parent.postMessage({ tipo: "tmi-rota", caminho: location.pathname + location.search + location.hash, titulo: document.title }, CIN); } catch (e) {} };
    avisar(); addEventListener("hashchange", avisar); addEventListener("load", avisar);
  } else if (location.hostname === "tendencias-midia-interacao.vercel.app" && !ficar) {
    location.replace(CIN + BASE + location.pathname + location.search + location.hash);
  }
})();
/* Central da disciplina — três comportamentos, sem dependência.
   1. tema claro/escuro, lembrado no aparelho;
   2. a seção AGORA marca o que passou, o que é hoje e o que é o próximo;
   3. o calendário faz o mesmo, linha a linha. */
(function () {
  "use strict";

  /* ---- 1. tema ---- */
  var raiz = document.documentElement;
  try {
    var guardado = localStorage.getItem("tema");
    if (guardado === "claro" || guardado === "escuro") raiz.setAttribute("data-tema", guardado);
  } catch (e) {}
  var btn = document.getElementById("tema");
  if (btn) btn.addEventListener("click", function () {
    var escuroAgora = raiz.getAttribute("data-tema") === "escuro" ||
      (!raiz.getAttribute("data-tema") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    var novo = escuroAgora ? "claro" : "escuro";
    raiz.setAttribute("data-tema", novo);
    try { localStorage.setItem("tema", novo); } catch (e) {}
  });

  /* ---- utilidades de data (fuso de Recife: os prazos são locais) ---- */
  var agora = new Date();
  function hojeISO() {
    var d = new Date(agora.getTime() - agora.getTimezoneOffset() * 60000);
    return d.toISOString().slice(0, 10);
  }
  function diasAte(iso) {
    var a = new Date(hojeISO() + "T00:00:00");
    var b = new Date(iso.slice(0, 10) + "T00:00:00");
    return Math.round((b - a) / 86400000);
  }
  function rotuloFalta(iso) {
    var fim = new Date(iso);
    if (isNaN(fim)) return "";
    if (fim < agora) return "encerrado";
    var d = diasAte(iso);
    if (d === 0) return "hoje";
    if (d === 1) return "amanhã";
    return "faltam " + d + " dias";
  }

  /* ---- 2. AGORA ---- */
  var itens = Array.prototype.slice.call(document.querySelectorAll(".agora__item[data-quando]"));
  var proximoMarcado = false;
  itens.forEach(function (el) {
    var quando = el.getAttribute("data-quando");
    var fim = new Date(quando);
    var falta = el.querySelector(".agora__falta");
    if (falta) falta.textContent = rotuloFalta(quando);
    if (fim < agora) { el.classList.add("agora__item--passado"); return; }
    if (!proximoMarcado) { el.classList.add("agora__item--proximo"); proximoMarcado = true; }
  });

  /* ---- 3. calendário ---- */
  var linhas = Array.prototype.slice.call(document.querySelectorAll(".cal tr[data-dia]"));
  var hoje = hojeISO(), proximaMarcada = false;
  linhas.forEach(function (tr) {
    var dia = tr.getAttribute("data-dia");
    if (dia < hoje) tr.classList.add("passado");
    else if (dia === hoje) { tr.classList.add("hoje"); proximaMarcada = true; }
    else if (!proximaMarcada) { tr.classList.add("proximo"); proximaMarcada = true; }
  });

  /* ---- data de atualização no rodapé ---- */
  var carimbo = document.getElementById("carimbo");
  if (carimbo && carimbo.dataset.data) {
    var p = carimbo.dataset.data.split("-");
    carimbo.textContent = p[2] + "/" + p[1] + "/" + p[0];
  }
})();
