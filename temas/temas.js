/* Mergulho nos 19 temas — comportamento.
   Sem dependências. Dados em window.MERGULHO (dados-temas.js).
   Cenas se montam ao entrar (IntersectionObserver) e rearmam ao sair. */
(function () {
  "use strict";
  var D = window.MERGULHO;
  if (!D) return;
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var pad2 = function (n) { return (n < 10 ? "0" : "") + n; };
  var cap = function (s) { return s.charAt(0).toUpperCase() + s.slice(1); };
  var fmt = function (n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, "."); };
  var famDe = {}; D.familias.forEach(function (f) { f.temas.forEach(function (t) { famDe[t] = f; }); });
  var temaDe = {}; D.temas.forEach(function (t) { temaDe[t.n] = t; });
  var favicon = function (d) { return "https://www.google.com/s2/favicons?domain=" + encodeURIComponent(d) + "&sz=64"; };

  /* ---- 1. tema claro/escuro (mesma lógica da central) ---- */
  var raiz = document.documentElement;
  var btnTema = $("#tema");
  if (btnTema) btnTema.addEventListener("click", function () {
    var escuro = raiz.getAttribute("data-tema") === "escuro" || (!raiz.getAttribute("data-tema") && matchMedia("(prefers-color-scheme: dark)").matches);
    var novo = escuro ? "claro" : "escuro";
    raiz.setAttribute("data-tema", novo);
    try { localStorage.setItem("tema", novo); } catch (e) {}
  });

  /* ---- 2. chips de ferramenta ---- */
  function chip(f) {
    var letra = esc((f.n || "?").replace(/^@/, "").charAt(0).toUpperCase());
    var ico = '<span class="chip__ico" aria-hidden="true">' + letra + (f.d ? '<img loading="lazy" alt="" src="' + favicon(f.d) + '" onerror="this.remove()">' : "") + "</span>";
    var t = '<span class="t">' + esc(f.n) + "</span>";
    if (f.u) return '<li><a class="chip" href="' + esc(f.u) + '" target="_blank" rel="noopener">' + ico + t + "</a></li>";
    return '<li><span class="chip chip--sem" title="sem link no catálogo">' + ico + t + "</span></li>";
  }

  /* ---- 3. renderiza as 19 cenas de tema ---- */
  function cascata(texto, cls) {
    return texto.split(" ").map(function (w) { return '<span class="w"><i' + (cls ? ' class="' + cls + '"' : "") + ">" + esc(w) + "&nbsp;</i></span>"; }).join("");
  }
  function textoHTML(s) { return esc(s).replace(/`([^`]+)`/g, "<code>$1</code>"); }
  function cenaTema(t, idx) {
    var f = famDe[t.n];
    var viz = t.vizinhos.map(function (v) { return '<a href="#tema-' + v + '" title="' + esc(temaDe[v].titulo) + '">' + pad2(v) + " " + esc(temaDe[v].rotulo) + "</a>"; }).join("");
    var maduro = t.maduro.map(function (m) { return "<li>" + esc(m) + "</li>"; }).join("");
    var chips = t.ferramentas.map(chip).join("");
    var termos = t.termos.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("");
    var id = "t" + t.n;
    return '<section class="cena cena--tema" id="tema-' + t.n + '" data-rotulo="' + esc(pad2(t.n) + " " + t.rotulo) + '" data-fam="' + f.id + '">' +
      '<span class="fantasma" aria-hidden="true" data-par=".08">' + pad2(t.n) + "</span>" +
      '<img class="ilus" src="/temas/ilustracoes/tema-' + pad2(t.n) + '.png" alt="" width="1024" height="1024" loading="lazy" decoding="async" onerror="this.remove()">' +
      '<div class="in tema">' +
        '<div class="tema__esq">' +
        '<div class="tema__topo"><p class="kick">Tema ' + pad2(t.n) + " · " + esc(f.nome) + '</p><nav class="viz" aria-label="Temas vizinhos"><span>vizinhos</span>' + viz + "</nav></div>" +
        '<h2 class="tema__titulo casc"><span class="tema__curto">' + cascata(t.curto) + "</span>" + (t.resto ? '<span class="tema__resto">' + cascata(t.resto) + "</span>" : "") + "</h2>" +
        '<p class="tema__frase rv" data-d="1">' + esc(t.frase) + "</p>" +
        '<div class="regua rv" data-d="2" role="img" aria-label="Régua entre maduro e emergente">' +
          '<i class="regua__marcador" aria-hidden="true"></i>' +
          '<div class="regua__lado regua__lado--m"><span class="regua__rot">Maduro — a skill recusa</span><ul class="regua__maduro">' + maduro + "</ul></div>" +
          '<div class="regua__lado regua__lado--e"><span class="regua__rot">Emergente — o que vale</span><p class="regua__emergente">' + esc(t.emergente) + "</p></div>" +
        "</div>" +
        "</div>" +
        '<div class="tema__dir">' +
        '<div class="abas rv" data-d="3" role="tablist" aria-label="Mergulho no tema">' +
          '<button class="aba" role="tab" aria-selected="true" aria-controls="' + id + '-turma" id="' + id + '-a1">O que a turma trouxe <span class="aba__n">' + t.ferramentas.length + "</span></button>" +
          '<button class="aba" role="tab" aria-selected="false" aria-controls="' + id + '-roda" id="' + id + '-a2" tabindex="-1">Perguntas para a roda</button>' +
          '<button class="aba" role="tab" aria-selected="false" aria-controls="' + id + '-sinais" id="' + id + '-a3" tabindex="-1">Sinais fracos</button>' +
          '<button class="aba" role="tab" aria-selected="false" aria-controls="' + id + '-ia" id="' + id + '-a4" tabindex="-1">Para a sua IA</button>' +
        "</div>" +
        '<div class="painel rv" data-d="3">' +
          '<div role="tabpanel" id="' + id + '-turma" aria-labelledby="' + id + '-a1">' +
            '<p class="painel__porque"><b>Por que agora.</b> ' + esc(t.porque) + "</p>" +
            '<ul class="chips">' + chips + "</ul>" +
            '<p class="painel__texto painel__texto--fechado" style="margin-top:var(--s-3)">' + textoHTML(t.trouxe) + "</p>" +
            '<button type="button" class="ver-mais" data-alvo="texto">ler a evidência inteira ↓</button>' +
          "</div>" +
          '<div role="tabpanel" id="' + id + '-roda" aria-labelledby="' + id + '-a2" hidden>' +
            '<div class="roda">' +
              '<svg class="roda__svg" viewBox="0 0 150 150" aria-hidden="true"><circle data-o="3" cx="75" cy="75" r="66"></circle><circle data-o="2" cx="75" cy="75" r="46"></circle><circle data-o="1" cx="75" cy="75" r="26" class="on"></circle><text class="centro" x="75" y="82">?</text></svg>' +
              '<div><div class="roda__ordens" role="tablist" aria-label="Ordem da consequência">' +
                '<button class="ordem" role="tab" aria-selected="true" data-o="1">1ª ordem</button><button class="ordem" role="tab" aria-selected="false" data-o="2">2ª ordem</button><button class="ordem" role="tab" aria-selected="false" data-o="3">3ª ordem</button>' +
              '</div><p class="roda__texto"><span class="roda__q">' + esc(cap(t.perguntas["1"])) + '</span><small>o que muda primeiro</small></p></div>' +
            "</div>" +
          "</div>" +
          '<div role="tabpanel" id="' + id + '-sinais" aria-labelledby="' + id + '-a3" hidden>' +
            '<div class="sinais"><div class="sinal"><h4>Sinais fracos</h4><p>' + textoHTML(t.sinal) + '</p></div><div class="wild"><h4>Wildcard</h4><p>' + esc(t.wildcard) + "</p></div></div>" +
          "</div>" +
          '<div role="tabpanel" id="' + id + '-ia" aria-labelledby="' + id + '-a4" hidden>' +
            '<div class="ia"><div><h4>Termos para a varredura</h4><ul class="termos">' + termos + "</ul></div>" +
            "<div><h4>Entidades</h4><p>" + esc(t.entidades) + "</p></div>" +
            "<div><h4>Fontes</h4><p>" + esc(t.fontes) + "</p></div>" +
            '<button type="button" class="botao botao--linha ia__copiar" data-copiar="' + esc(t.termos.join(", ")) + '">Copiar os termos</button></div>' +
          "</div>" +
        "</div>" +
        "</div>" +
        '<div class="tema__acoes rv" data-d="4">' +
          '<a class="botao botao--principal" href="/futuros/" data-pagina-tema="' + t.n + '">Página do tema</a>' +
          '<a class="botao botao--linha" href="/materiais/temas-tendencias-2026-2/#tema-' + t.n + '">Ler no documento</a>' +
          (t.objeto ? '<p class="objeto">aqui o objeto é <b>' + esc(t.objeto) + "</b></p>" : "") +
          '<div class="tema__futuros" data-n="' + t.n + '" hidden></div>' +
        "</div>" +
      "</div>" +
      '<div class="folio"><span>' + esc(f.nome) + " · " + esc(f.sub) + "</span><span>" + pad2(idx + 5) + "</span></div>" +
    "</section>";
  }
  $("#temas").innerHTML = D.temas.map(cenaTema).join("");

  /* ---- 3b. futuros abertos à turma: mapas do professor e confrontos (aparecem no dia da aula do tema) ---- */
  fetch("/futuros/temas.json", { cache: "no-store" }).then(function (r) { return r.json(); }).then(function (lista) {
    lista.forEach(function (a) {
      var b = $('[data-pagina-tema="' + a.n + '"]'); if (b) b.href = a.url;
      var el = $('.tema__futuros[data-n="' + a.n + '"]'); if (!el) return;
      var quem = a.apresenta ? "<b>" + esc(a.apresenta) + "</b> apresenta em " + a.data.slice(8, 10) + "/" + a.data.slice(5, 7) + " · " : "";
      var confs = a.confrontos.map(function (c) { return '<a class="botao botao--linha" href="' + c.url + '">Confronto: mapa de ' + esc(c.login) + ' × professor</a>'; }).join("");
      el.innerHTML = '<p class="kick">' + quem + esc(a.estado) + '</p>' + (a.aberto ? '<a class="botao botao--linha" href="' + a.url + '">' + a.mapas + ' mapas de futuro deste tema</a>' + confs : "");
      el.hidden = false;
    });
  }).catch(function () {});

  /* abas, ordens, ver-mais, copiar (delegação) */
  document.addEventListener("click", function (e) {
    var aba = e.target.closest(".aba");
    if (aba) {
      var lista = aba.parentElement;
      $$(".aba", lista).forEach(function (b) { var on = b === aba; b.setAttribute("aria-selected", on); b.tabIndex = on ? 0 : -1; });
      var painel = lista.nextElementSibling;
      $$("[role=tabpanel]", painel).forEach(function (p) { p.hidden = p.id !== aba.getAttribute("aria-controls"); });
      return;
    }
    var ord = e.target.closest(".ordem");
    if (ord) {
      var roda = ord.closest(".roda"), o = ord.dataset.o, sec = ord.closest(".cena"), t = temaDe[+sec.id.replace("tema-", "")];
      $$(".ordem", roda).forEach(function (b) { b.setAttribute("aria-selected", b === ord); });
      $$("circle", roda).forEach(function (c) { c.classList.toggle("on", c.dataset.o === o); });
      $(".roda__q", roda).textContent = cap(t.perguntas[o]);
      $(".roda__texto small", roda).textContent = { "1": "o que muda primeiro", "2": "a consequência da consequência", "3": "o que muda de figura no fim" }[o];
      return;
    }
    var circ = e.target.closest(".roda__svg circle");
    if (circ) { var b = $('.ordem[data-o="' + circ.dataset.o + '"]', circ.closest(".roda")); if (b) b.click(); return; }
    var vm = e.target.closest(".ver-mais");
    if (vm) {
      var p = vm.previousElementSibling; var fechado = p.classList.toggle("painel__texto--fechado");
      vm.textContent = fechado ? "ler a evidência inteira ↓" : "recolher ↑";
      return;
    }
    var cp = e.target.closest("[data-copiar]");
    if (cp && navigator.clipboard) {
      navigator.clipboard.writeText(cp.dataset.copiar).then(function () { var t0 = cp.textContent; cp.textContent = "Copiado ✓"; setTimeout(function () { cp.textContent = t0; }, 1400); });
    }
  });
  document.addEventListener("keydown", function (e) {
    var aba = e.target.closest && e.target.closest(".aba");
    if (!aba || (e.key !== "ArrowRight" && e.key !== "ArrowLeft")) return;
    e.preventDefault(); e.stopPropagation();
    var abas = $$(".aba", aba.parentElement), i = abas.indexOf(aba) + (e.key === "ArrowRight" ? 1 : -1);
    var alvo = abas[(i + abas.length) % abas.length]; alvo.click(); alvo.focus();
  }, true);

  /* ---- 4. cenas de dados ---- */
  (function () {
    var T = D.turma, cat = T.catalogo, max = Math.max(cat.inspiracao, cat.desenvolvimento);
    $("#catalogo").innerHTML =
      '<div class="barra-g"><div class="barra-g__rot"><span>Inspiração · 8 varreduras</span><span>únicas</span></div><b class="barra-g__num num" data-alvo="' + cat.inspiracao + '">0</b><div class="barra-g__trilho"><div class="barra-g__fill" style="--w:' + (cat.inspiracao / max).toFixed(3) + '"></div></div></div>' +
      '<div class="barra-g barra-g--dev"><div class="barra-g__rot"><span>Desenvolvimento · 6 varreduras</span><span>únicas</span></div><b class="barra-g__num num" data-alvo="' + cat.desenvolvimento + '">0</b><div class="barra-g__trilho"><div class="barra-g__fill" style="--w:' + (cat.desenvolvimento / max).toFixed(3) + '"></div></div></div>' +
      '<p class="catalogo__soma">No catálogo comum: <b>' + fmt(T.total) + "</b> ferramentas únicas, lidas por <b>" + T.alunos + "</b> alunos e resumidas em <b>" + T.temas + "</b> temas.</p>";
    var vmax = Math.max.apply(null, T.varreduras.map(function (v) { return v.lido; }));
    var html = '<div class="varr varr--cab"><span class="varr__rot">varredura</span><span class="legenda-varr"><span><i class="u"></i>único</span><span><i class="r"></i>repetido na própria lista</span><span><i class="o"></i>já trazido por outro</span></span><span class="varr__n">lidas</span></div>';
    var uAtual = "";
    T.varreduras.forEach(function (v) {
      if (v.u !== uAtual) { uAtual = v.u; html += '<div class="varr__sep">' + (v.u === "inspiracao" ? "Inspiração" : "Desenvolvimento") + "</div>"; }
      var w = v.lido / vmax, unico = v.unico - v.de_outros, rep = v.lido - v.unico;
      html += '<div class="varr"><span class="varr__rot"><b>' + v.a + "</b>" + (v.de_outros ? "<span>" + v.de_outros + " de outros</span>" : "") + '</span><span class="varr__barra" style="width:' + (w * 100).toFixed(1) + '%" title="' + v.lido + " lidas · " + v.unico + " únicas · " + v.de_outros + ' já de outros">' +
        '<i class="varr__seg varr__seg--u" style="width:' + (unico / v.lido * 100).toFixed(1) + '%;transition-delay:.2s"></i>' +
        '<i class="varr__seg varr__seg--o" style="width:' + (v.de_outros / v.lido * 100).toFixed(1) + '%;transition-delay:.5s"></i>' +
        '<i class="varr__seg varr__seg--r" style="width:' + (rep / v.lido * 100).toFixed(1) + '%;transition-delay:.7s"></i>' +
        '</span><span class="varr__n">' + v.lido + "</span></div>";
    });
    $("#varreduras").innerHTML = html;

    var N = T.por_nivel, tot = function (k) { return N[k].inspiracao + N[k].desenvolvimento; }, m50 = tot("50");
    var nivel = function (k, rot, sub) {
      var w = tot(k) / m50 * 100, wi = N[k].inspiracao / tot(k) * 100;
      return '<div class="nivel"><span class="nivel__rot">' + rot + "<small>" + sub + '</small></span><div class="nivel__barra" style="width:' + Math.max(w, 9).toFixed(1) + '%">' +
        '<span class="nivel__seg nivel__seg--i" style="width:' + wi.toFixed(1) + '%">' + N[k].inspiracao + '</span><span class="nivel__seg nivel__seg--d" style="width:' + (100 - wi).toFixed(1) + '%;transition-delay:.3s">' + N[k].desenvolvimento + "</span></div></div>";
    };
    $("#piramide").innerHTML = nivel("50", "as 50", tot("50") + " escolhas") + nivel("5", "as 5", tot("5") + " escolhas") + nivel("1", "a 1", tot("1") + " escolhas") +
      '<div class="piramide__leg"><span><i class="i"></i>inspiração</span><span><i class="d"></i>desenvolvimento</span></div>' +
      '<p class="piramide__nota">Cada entrega afunila: <b>50</b> que valem a pena, <b>5</b> que se destacam, <b>1</b> que é a aposta. São essas <b>' + tot("1") + "</b> apostas que mais pesaram na hora de nomear os temas.</p>";
    var cmax = T.categorias[0].n;
    $("#categorias").innerHTML = '<div class="n1__rot" style="margin-bottom:var(--s-2)">as categorias mais frequentes no catálogo</div>' + T.categorias.map(function (c) {
      return '<div class="cat"><span class="cat__rot" title="' + esc(c.cat) + '">' + esc(c.cat) + '</span><span class="cat__barra"><i class="cat__fill" style="--w:' + (c.n / cmax).toFixed(3) + '"></i></span><span class="cat__n">' + c.n + "</span></div>";
    }).join("");
    $("#n1").innerHTML = '<div class="n1__rot">as ' + T.n1.length + ' escolhas nº 1 — uma por entrega</div><ul class="chips">' + T.n1.map(function (e) { return chip({ n: e.nome.replace(/^Show HN: /, "").split(" -")[0].slice(0, 40), u: e.u2, d: e.d }); }).join("") + "</ul>";
  })();

  /* ---- 5. constelação (SVG) ---- */
  var POS = { 1: [150, 120], 2: [300, 60], 3: [180, 250], 4: [410, 150], 5: [500, 250], 6: [640, 190], 7: [760, 70], 8: [880, 150], 9: [700, 280],
    10: [780, 410], 11: [700, 500], 12: [930, 250], 13: [900, 500], 14: [600, 455], 15: [470, 570], 16: [360, 500], 17: [240, 420], 18: [110, 530], 19: [230, 580] };
  var ESQ = { 6: 1, 8: 1, 10: 1, 11: 1, 12: 1, 13: 1, 14: 1 };
  var FAMPOS = { agentes: [110, 40], mundos: [640, 40], percepcao: [720, 640], criacao: [400, 640], pessoas: [60, 470] };
  var svg = $("#constelacao"), NS = "http://www.w3.org/2000/svg";
  var el = function (n, a) { var e = document.createElementNS(NS, n); for (var k in a) e.setAttribute(k, a[k]); return e; };
  var gA = el("g", { class: "arestas" }), gN = el("g", { class: "nos" }), gF = el("g", { class: "familias-rot" });
  D.familias.forEach(function (f) { var p = FAMPOS[f.id]; var t = el("text", { x: p[0], y: p[1], class: "familia-rot" }); t.textContent = f.nome; gF.appendChild(t); });
  var arestas = {};
  D.arestas.forEach(function (a) {
    var p = POS[a[0]], q = POS[a[1]];
    var l = el("line", { x1: p[0], y1: p[1], x2: q[0], y2: q[1], class: "aresta", "data-a": a[0], "data-b": a[1] });
    gA.appendChild(l); arestas[a[0] + "-" + a[1]] = l;
  });
  var nos = {};
  D.temas.forEach(function (t, i) {
    var mob = innerWidth < 900, p = POS[t.n], r = (mob ? 22 : 11) + Math.min(t.ferramentas.length, 30) * (mob ? .6 : .38), esq = ESQ[t.n];
    var g = el("g", { class: "no", "data-n": t.n, tabindex: "0", role: "link", "aria-label": "Tema " + t.n + ": " + t.titulo, style: "animation-delay:" + (i * 45) + "ms" });
    g.appendChild(el("circle", { class: "halo", cx: p[0], cy: p[1], r: r + 5 }));
    g.appendChild(el("circle", { class: "disco", cx: p[0], cy: p[1], r: r }));
    var n = el("text", { class: "n", x: p[0], y: p[1] }); n.textContent = t.n; g.appendChild(n);
    var rot = el("text", { class: "rot", x: esq ? p[0] - r - 9 : p[0] + r + 9, y: p[1] + 5, "text-anchor": esq ? "end" : "start" }); rot.textContent = t.rotulo; g.appendChild(rot);
    gN.appendChild(g); nos[t.n] = g;
  });
  svg.appendChild(gF); svg.appendChild(gA); svg.appendChild(gN);
  var legenda = $("#legenda"), legendaVazia = legenda.innerHTML, selecionado = null;
  function acender(n) {
    svg.classList.add("foco");
    var t = temaDe[n];
    $$(".no", svg).forEach(function (g) { g.classList.remove("on", "viz"); });
    $$(".aresta", svg).forEach(function (l) { l.classList.remove("on"); });
    nos[n].classList.add("on");
    t.vizinhos.forEach(function (v) { nos[v].classList.add("viz"); var k = Math.min(n, v) + "-" + Math.max(n, v); if (arestas[k]) arestas[k].classList.add("on"); });
    legenda.innerHTML = '<img class="legenda__ilus" src="/temas/ilustracoes/tema-' + pad2(n) + '.png" alt="" width="1024" height="1024" loading="lazy" decoding="async" onerror="this.remove()"><p class="kick">Tema ' + pad2(n) + " · " + esc(famDe[n].nome) + "</p><h3>" + esc(t.titulo) + "</h3><p>" + esc(t.frase) + '</p><div class="legenda__viz"><span>vizinhos</span>' +
      t.vizinhos.map(function (v) { return '<a href="#tema-' + v + '">' + pad2(v) + " " + esc(temaDe[v].rotulo) + "</a>"; }).join("") + '</div><a class="botao botao--principal" href="#tema-' + n + '">Mergulhar no tema ' + pad2(n) + " →</a>";
  }
  function apagar() { if (selecionado) return acender(selecionado); svg.classList.remove("foco"); $$(".no", svg).forEach(function (g) { g.classList.remove("on", "viz"); }); $$(".aresta", svg).forEach(function (l) { l.classList.remove("on"); }); legenda.innerHTML = legendaVazia; }
  svg.addEventListener("mouseover", function (e) { var g = e.target.closest(".no"); if (g) acender(+g.dataset.n); });
  svg.addEventListener("mouseleave", apagar);
  svg.addEventListener("focusin", function (e) { var g = e.target.closest(".no"); if (g) acender(+g.dataset.n); });
  svg.addEventListener("click", function (e) {
    var g = e.target.closest(".no"); if (!g) return;
    var n = +g.dataset.n;
    if (matchMedia("(hover: none)").matches && selecionado !== n) { selecionado = n; acender(n); return; }   /* toque: 1º toque seleciona, 2º mergulha */
    selecionado = null; irPara($("#tema-" + n));
  });
  svg.addEventListener("keydown", function (e) { var g = e.target.closest(".no"); if (g && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); irPara($("#tema-" + g.dataset.n)); } });

  /* famílias (filtro) */
  var famAtiva = null, famBox = $("#familias");
  famBox.innerHTML = '<button class="fam" type="button" aria-pressed="true" data-fam="">todas <span class="fam__n">19</span></button>' + D.familias.map(function (f) {
    return '<button class="fam" type="button" aria-pressed="false" data-fam="' + f.id + '" title="' + esc(f.sub) + '"><i class="fam__forma" aria-hidden="true"></i>' + esc(f.nome) + ' <span class="fam__n">' + f.temas.length + "</span></button>";
  }).join("");
  famBox.addEventListener("click", function (e) {
    var b = e.target.closest(".fam"); if (!b) return;
    famAtiva = b.dataset.fam || null;
    $$(".fam", famBox).forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
    aplicarFiltro();
  });

  /* busca */
  var q = $("#q"), q2 = $("#q2"), qOut = $("#q-out");
  var indice = D.temas.map(function (t) { return { n: t.n, txt: [t.titulo, t.rotulo, t.disrupcao, t.trouxe, t.termos.join(" "), t.entidades, t.emergente, famDe[t.n].nome].join(" ").toLowerCase() }; });
  function norm(s) { return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); }
  function batem(termo) {
    if (!termo) return null;
    var t = norm(termo.trim()); if (!t) return null;
    return indice.filter(function (i) { return norm(i.txt).indexOf(t) > -1; }).map(function (i) { return i.n; });
  }
  var termoAtual = "";
  function aplicarFiltro() {
    var hits = batem(termoAtual), ativo = !!(famAtiva || hits);
    svg.classList.toggle("filtro", ativo);
    D.temas.forEach(function (t) {
      var fora = (famAtiva && famDe[t.n].id !== famAtiva) || (hits && hits.indexOf(t.n) < 0);
      nos[t.n].classList.toggle("fora", !!fora);
      var tk = $('.trilho a[href="#tema-' + t.n + '"]'); if (tk) tk.classList.toggle("bate", !!hits && hits.indexOf(t.n) > -1);
      var li = $('#folha-lista li[data-n="' + t.n + '"]'); if (li) li.classList.toggle("oculto", !!fora);
    });
    D.arestas.forEach(function (a) { var l = arestas[a[0] + "-" + a[1]]; l.classList.toggle("fora", nos[a[0]].classList.contains("fora") || nos[a[1]].classList.contains("fora")); });
    qOut.textContent = hits ? (hits.length ? hits.length + (hits.length > 1 ? " temas batem: " : " tema bate: ") + hits.map(pad2).join(" ") : "nenhum tema bate") : "";
    if (hits && hits.length === 1 && !matchMedia("(hover: none)").matches) acender(hits[0]); else if (!selecionado) apagar();
  }
  function aoBuscar(e) { termoAtual = e.target.value; if (e.target === q) q2.value = termoAtual; else q.value = termoAtual; aplicarFiltro(); }
  q.addEventListener("input", aoBuscar); q2.addEventListener("input", aoBuscar);

  /* ---- 6. índice persistente: trilho + folha ---- */
  var secs = $$("main > section, main > #temas > section"), trilho = $("#trilho"), folhaLista = $("#folha-lista");
  var thtml = "", famAnt = null;
  secs.forEach(function (s) {
    var tema = s.classList.contains("cena--tema"), f = tema ? famDe[+s.id.replace("tema-", "")].id : null;
    if (tema && f !== famAnt) { thtml += '<span class="sep"></span>'; famAnt = f; }
    if (!tema && famAnt) { thtml += '<span class="sep"></span>'; famAnt = null; }
    thtml += '<a href="#' + s.id + '" class="' + (tema ? "cena-tema" : "") + '" aria-label="' + esc(s.dataset.rotulo) + '"><span>' + esc(s.dataset.rotulo) + "</span></a>";
  });
  trilho.innerHTML = thtml;
  var fhtml = "";
  D.familias.forEach(function (f) {
    fhtml += '<li class="fam-cab">' + esc(f.nome) + " · " + esc(f.sub) + "</li>";
    f.temas.forEach(function (n) { fhtml += '<li data-n="' + n + '"><a href="#tema-' + n + '"><b>' + pad2(n) + "</b>" + esc(temaDe[n].titulo) + "</a></li>"; });
  });
  fhtml += '<li class="fam-cab">mais</li><li><a href="#mapa"><b>↑</b>o mapa</a></li><li><a href="#fora"><b>×</b>o que ficou de fora</a></li>';
  folhaLista.innerHTML = fhtml;
  var folha = $("#folha"), indiceBtn = $("#indice-btn");
  function abrirFolha(v) { folha.hidden = !v; indiceBtn.setAttribute("aria-expanded", v); if (v) q2.focus(); }
  indiceBtn.addEventListener("click", function () { abrirFolha(folha.hidden); });
  $("#folha-fechar").addEventListener("click", function () { abrirFolha(false); });
  folhaLista.addEventListener("click", function (e) { if (e.target.closest("a")) abrirFolha(false); });

  /* ---- 7. play/replay por cena + trilho ativo + progresso ---- */
  var cenas = $$(".cena");
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      var s = e.target;
      if (e.isIntersecting && e.intersectionRatio >= .35) {
        if (!s.classList.contains("play")) { s.classList.add("play"); playCena(s); }
        $$(".trilho a").forEach(function (a) { a.classList.toggle("ativo", a.getAttribute("href") === "#" + s.id); });
      } else if (!e.isIntersecting && e.intersectionRatio === 0) { s.classList.remove("play"); resetCena(s); }
    });
  }, { threshold: [0, .35] });
  cenas.forEach(function (s) { io.observe(s); });
  var prog = $("#prog");
  function onScroll() {
    var h = document.documentElement.scrollHeight - innerHeight;
    prog.style.width = (h > 0 ? Math.min(100, scrollY / h * 100) : 0) + "%";
    if (reduce) return;
    $$(".fantasma[data-par]").forEach(function (w) {
      var r = w.parentElement.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight) return;
      w.style.transform = "translateY(" + (r.top * -(+w.dataset.par)).toFixed(1) + "px)";
    });
  }
  addEventListener("scroll", function () { requestAnimationFrame(onScroll); }, { passive: true });
  onScroll();

  /* count-up */
  function contar(s) {
    $$(".num[data-alvo]", s).forEach(function (n) {
      var alvo = +n.dataset.alvo, pre = n.dataset.prefixo || "", t0 = null, dur = 1300 + Math.min(alvo, 6000) * .1;
      if (reduce) { n.textContent = pre + fmt(alvo); return; }
      if (n._raf) cancelAnimationFrame(n._raf);
      (function passo(ts) { if (!t0) t0 = ts; var p = Math.min(1, (ts - t0) / dur), e = 1 - Math.pow(1 - p, 3); n.textContent = pre + fmt(Math.round(alvo * e)); if (p < 1) n._raf = requestAnimationFrame(passo); })(performance.now());
    });
  }
  function playCena(s) { contar(s); if (s.id === "abertura") funilPlay(); }
  function resetCena(s) { $$(".num[data-alvo]", s).forEach(function (n) { if (n._raf) cancelAnimationFrame(n._raf); n.textContent = (n.dataset.prefixo || "") + "0"; }); if (s.id === "abertura") funilStop(); }

  /* ---- 8. navegação por teclado (recalcula sempre a cena mais próxima) ---- */
  function nearest() { var b = 0, bd = 1e9, top = 60; cenas.forEach(function (s, i) { var d = Math.abs(s.getBoundingClientRect().top - top); if (d < bd) { bd = d; b = i; } }); return b; }
  function irPara(s) { if (!s) return; s.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" }); }
  function goTo(i) { irPara(cenas[Math.max(0, Math.min(cenas.length - 1, i))]); }
  addEventListener("keydown", function (e) {
    if (e.defaultPrevented) return;
    var tag = e.target.tagName;
    if (e.key === "Escape") { if (!folha.hidden) { abrirFolha(false); return; } if (q.value) { q.value = q2.value = termoAtual = ""; aplicarFiltro(); return; } selecionado = null; apagar(); return; }
    if (/INPUT|TEXTAREA|SELECT/.test(tag)) return;
    if (e.key === "/") { e.preventDefault(); irPara($("#mapa")); setTimeout(function () { q.focus(); }, reduce ? 0 : 500); return; }
    if (e.key === "i" || e.key === "I") { if (getComputedStyle(indiceBtn).display !== "none") { abrirFolha(folha.hidden); } return; }
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var d = ["ArrowRight", "ArrowDown", "PageDown", " ", "j"].indexOf(e.key) > -1, u = ["ArrowLeft", "ArrowUp", "PageUp", "k"].indexOf(e.key) > -1;
    if (d || u) { e.preventDefault(); goTo(nearest() + (d ? 1 : -1)); }
    else if (e.key === "Home") { e.preventDefault(); goTo(0); }
    else if (e.key === "End") { e.preventDefault(); goTo(cenas.length - 1); }
  });
  /* âncoras internas: rolagem suave e sem quebrar o snap */
  document.addEventListener("click", function (e) {
    var a = e.target.closest('a[href^="#"]'); if (!a) return;
    var alvo = $(a.getAttribute("href")); if (!alvo) return;
    e.preventDefault(); irPara(alvo); history.replaceState(null, "", a.getAttribute("href"));
  });

  /* ---- 9. o funil (cena-assinatura em canvas): milhares → 5.776 → 659 → 19 ---- */
  var cv = $("#funil"), funilRun = false, funilRaf = null, funilT0 = 0;
  var P = [], NP = 1600, W = 0, H = 0, DPR = Math.min(devicePixelRatio || 1, 1.5);
  function cor() { var c = getComputedStyle(document.documentElement).getPropertyValue("--brand").trim(); return c || "#db1e2f"; }
  function tinta() { return getComputedStyle(document.documentElement).getPropertyValue("--fg-muted").trim() || "#7d7376"; }
  function seed(i) { var x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); }
  function funilSize() {
    var r = cv.getBoundingClientRect(); W = cv.width = r.width * DPR; H = cv.height = r.height * DPR;
    var largo = r.width >= 900, x0 = largo ? .52 : .58, x1 = 1, y0 = largo ? 0 : .11, y1 = largo ? 1 : .30;    /* desktop: à direita do texto; mobile: canto superior direito */
    var Y = function (f) { return (y0 + f * (y1 - y0)) * H; };
    P = [];
    for (var i = 0; i < NP; i++) {
      var s0 = seed(i), s1 = seed(i + 9000), s2 = seed(i + 18000), s3 = seed(i + 27000);
      var a = s2 * Math.PI * 2;
      P.push({
        e0: [(x0 + s0 * (x1 - x0)) * W, Y(s1)],                                         /* dezenas de milhares: nuvem */
        e1: [((x0 + x1) / 2 + (s0 - .5) * (x1 - x0) * .62) * W, Y(.5 + (s1 - .5) * .62)],  /* 5.776: nuvem condensada */
        e2: [((x0 + x1) / 2 + Math.cos(a) * s3 * .16 * (x1 - x0)) * W, Y(.5 + Math.sin(a) * s3 * .28)],  /* 659: disco */
        e3: null, r: (0.7 + s3 * 1.3) * DPR, k: i,
      });
    }
    /* 19 pontos finais: a silhueta da constelação, em miniatura */
    var cx = (x0 + x1) / 2 * W, cy = Y(.5), sc = Math.min((x1 - x0) * W * .85 / 1000, (y1 - y0) * H * .7 / 650);
    D.temas.forEach(function (t, j) { var p = POS[t.n]; P[j * 17].e3 = [cx + (p[0] - 500) * sc, cy + (p[1] - 310) * sc]; P[j * 17].r3 = (4 + Math.min(t.ferramentas.length, 30) * .16) * DPR; });
  }
  function funilDraw(ts) {
    if (!funilRun) return;
    var ctx = cv.getContext("2d"), tt = (ts - funilT0) / 1000; ctx.clearRect(0, 0, W, H);
    var brand = cor(), mut = tinta();
    /* fases: 0–1.4s nuvem → 1.4–2.8 condensa → 2.8–4.2 disco → 4.2–5.6 dezenove */
    var f = Math.min(3, tt / 1.4), fi = Math.floor(f), fp = f - fi, e = fi >= 3 ? 1 : (1 - Math.pow(1 - fp, 3));
    for (var i = 0; i < NP; i++) {
      var p = P[i], from, to, alpha = 1, r = p.r;
      if (fi === 0) { from = p.e0; to = p.e1; }
      else if (fi === 1) { from = p.e1; to = p.e2; if (i > 659 * 2.4) alpha = 1 - e; }
      else if (fi === 2) { from = p.e2; to = p.e3 || p.e2; if (i > 659 * 2.4) continue; if (!p.e3) alpha = 1 - e; else r = p.r + (p.r3 - p.r) * e; }
      else { if (!p.e3) continue; from = to = p.e3; r = p.r3; }
      if (alpha <= 0.02) continue;
      var x = from[0] + (to[0] - from[0]) * e, y = from[1] + (to[1] - from[1]) * e;
      if (fi === 3) { x += Math.sin(tt * .9 + i) * 1.5 * DPR; y += Math.cos(tt * .7 + i * .3) * 1.5 * DPR; }
      ctx.globalAlpha = alpha * (p.e3 ? .95 : .55);
      ctx.fillStyle = p.e3 && fi >= 2 ? brand : mut;
      ctx.beginPath(); ctx.arc(x, y, r, 0, 6.2832); ctx.fill();
    }
    if (fi === 3) {   /* as fronteiras aparecem por último */
      ctx.globalAlpha = Math.min(1, fp * 1.6) * .5; ctx.strokeStyle = brand; ctx.lineWidth = 1 * DPR;
      var idx = {}; D.temas.forEach(function (t, j) { idx[t.n] = P[j * 17].e3; });
      D.arestas.forEach(function (a) { ctx.beginPath(); ctx.moveTo(idx[a[0]][0], idx[a[0]][1]); ctx.lineTo(idx[a[1]][0], idx[a[1]][1]); ctx.stroke(); });
    }
    ctx.globalAlpha = 1;
    funilRaf = requestAnimationFrame(funilDraw);
  }
  function funilPlay() { if (reduce || !cv.getContext) return; funilSize(); funilRun = true; funilT0 = performance.now(); funilRaf = requestAnimationFrame(funilDraw); }
  function funilStop() { funilRun = false; if (funilRaf) cancelAnimationFrame(funilRaf); }
  addEventListener("resize", function () { if (funilRun) { funilSize(); } });
  document.addEventListener("visibilitychange", function () { if (document.hidden) funilStop(); else if ($("#abertura").classList.contains("play")) funilPlay(); });

  /* ---- 10. impressão: congela os estados finais ---- */
  addEventListener("beforeprint", function () { cenas.forEach(function (s) { s.classList.add("play"); $$(".num[data-alvo]", s).forEach(function (n) { n.textContent = (n.dataset.prefixo || "") + fmt(+n.dataset.alvo); }); }); });

  /* ---- 11. chegou com #tema-N na URL: garante alinhamento após render ---- */
  if (location.hash) { var alvo0 = $(location.hash); if (alvo0) setTimeout(function () { alvo0.scrollIntoView({ block: "start" }); }, 60); }
})();
