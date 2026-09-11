(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Traject-tijdlijn: fases lichten op en de lijn tekent zich, één keer */
  var traject = document.querySelector('.traject');
  var fases = document.querySelectorAll('.fase');
  if (traject) {
    if (reduce || !('IntersectionObserver' in window)) {
      traject.classList.add('is-drawn');
      fases.forEach(function (f) { f.classList.add('is-active'); });
    } else {
      var seen = 0;
      var fo = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          var idx = Number(en.target.dataset.fase) - 1;
          setTimeout(function () { en.target.classList.add('is-active'); }, idx * 220);
          fo.unobserve(en.target);
          seen += 1;
          if (seen === 1) traject.classList.add('is-drawn');
        });
      }, { threshold: 0.35 });
      fases.forEach(function (f) { fo.observe(f); });
    }
  }

  /* Scroll-reveal, één keer */
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

  /* Topnav: markeer de sectie in beeld */
  var links = document.querySelectorAll('.topnav a[href^="#"]');
  var sections = [];
  links.forEach(function (a) {
    var s = document.querySelector(a.getAttribute('href'));
    if (s) sections.push({ a: a, s: s });
  });
  if (sections.length && 'IntersectionObserver' in window) {
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var hit = sections.filter(function (x) { return x.s === en.target; })[0];
        if (!hit || !en.isIntersecting) return;
        links.forEach(function (l) { l.classList.remove('is-current'); });
        hit.a.classList.add('is-current');
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    sections.forEach(function (x) { so.observe(x.s); });
  }
})();
