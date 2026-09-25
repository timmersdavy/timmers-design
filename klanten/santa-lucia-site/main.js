(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Scroll-reveal, één keer per element */
  var items = document.querySelectorAll('.reveal');
  if (!reduce && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* Sticky CTA-balk: verbergen zodra het echte contactformulier in beeld is */
  var cta = document.querySelector('.sticky-cta');
  var contact = document.getElementById('contact');
  if (cta && contact && 'IntersectionObserver' in window) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        cta.style.transform = en.isIntersecting ? 'translateY(100%)' : 'none';
      });
    }, { threshold: 0.15 });
    co.observe(contact);
    cta.style.transition = 'transform .3s ease';
  }
})();
