(function () {
  'use strict';

  /* Odontogram: behandeling per tandtype */
  var care = {
    snijtand:      { what: 'Bleken, facings en kleine vullingen. Wat je ziet als je lacht.' },
    hoektand:      { what: 'Orthodontie en aligners. De hoektand stuurt je hele beet.' },
    premolaar:     { what: 'Vullingen en inlays. Kauwt mee, wordt vaak vergeten bij het poetsen.' },
    kies:          { what: 'Wortelkanaalbehandeling, kronen en bruggen. Het zware werk.' },
    verstandskies: { what: 'Controle op ruimte. Trekken enkel als het nodig is.' }
  };
  var names = { snijtand: 'Snijtand', hoektand: 'Hoektand', premolaar: 'Premolaar', kies: 'Kies', verstandskies: 'Verstandskies' };

  var arch = document.querySelector('.arch');
  var labels = Array.prototype.slice.call(document.querySelectorAll('.arch-label, .arch-caption'));
  var active = null;
  var swapTimer;

  function show(tooth) {
    if (!tooth || tooth === active) return;
    if (active) active.classList.remove('is-active');
    active = tooth;
    active.classList.add('is-active');
    var type = tooth.dataset.type;
    labels.forEach(function (label) {
      label.querySelector('.arch-tooth').textContent = 'Tand ' + tooth.dataset.fdi + ' · ' + names[type];
      label.querySelector('.arch-what').textContent = care[type].what;
      label.classList.remove('is-swapping');
      void label.offsetWidth;
      label.classList.add('is-swapping');
    });
    clearTimeout(swapTimer);
    swapTimer = setTimeout(function () { labels.forEach(function (l) { l.classList.remove('is-swapping'); }); }, 400);
  }

  if (arch) {
    arch.classList.add('is-loading');
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        arch.classList.remove('is-loading');
        arch.classList.add('is-ready');
      });
    });
    arch.addEventListener('pointerover', function (e) {
      var t = e.target.closest('.tooth');
      if (t) show(t);
    });
    arch.addEventListener('focusin', function (e) {
      var t = e.target.closest('.tooth');
      if (t) show(t);
    });
    arch.addEventListener('click', function (e) {
      var t = e.target.closest('.tooth');
      if (t) show(t);
    });
  }

  /* Scroll-reveal, één keer */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = document.querySelectorAll('.reveal');
  if (!reduce && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* Pill: markeer de sectie in beeld */
  var links = document.querySelectorAll('.pill a[href^="#"]');
  var sections = [];
  links.forEach(function (a) {
    var s = document.querySelector(a.getAttribute('href'));
    if (s) sections.push({ a: a, s: s });
  });
  if (sections.length && 'IntersectionObserver' in window) {
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var hit = sections.filter(function (x) { return x.s === en.target; })[0];
        if (!hit) return;
        if (en.isIntersecting) {
          links.forEach(function (l) { l.classList.remove('is-current'); });
          hit.a.classList.add('is-current');
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px' });
    sections.forEach(function (x) { so.observe(x.s); });
  }
})();
