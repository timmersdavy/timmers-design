// Timmers Design - GSAP animaties
// Rustig en functioneel: één hero-moment, daarna subtiele reveals bij scroll.
// Zonder JS of met "minder beweging" blijft alles gewoon zichtbaar.
(function () {
  if (typeof gsap === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

  gsap.defaults({ ease: 'power3.out' });

  // Veel elementen hebben in de CSS "transition: all". Dat botst met GSAP en laat
  // elementen op opacity 0 hangen. Daarom zetten we de CSS-transition uit tijdens
  // de animatie en geven we alles daarna terug aan de stylesheet.
  function from(targets, vars, position, tl) {
    var v = Object.assign({}, vars);
    var fromVars = {};
    var toVars = { clearProps: 'opacity,transform,transition' };
    ['y', 'opacity', 'scale'].forEach(function (k) {
      if (k in v) { fromVars[k] = v[k]; delete v[k]; toVars[k] = k === 'opacity' || k === 'scale' ? 1 : 0; }
    });
    fromVars.transition = 'none';
    Object.assign(toVars, v);
    return tl ? tl.fromTo(targets, fromVars, toVars, position)
              : gsap.fromTo(targets, fromVars, toVars);
  }

  // 1. Hero: eenmalig orkestreerd moment (alleen op de homepage)
  var hero = document.querySelector('.atelier-hero');
  if (hero) {
    var tl = gsap.timeline({ delay: 0.1 });
    from('.atelier-eyebrow', { y: 16, opacity: 0, duration: 0.5 }, undefined, tl);
    from('.atelier-text h1', { y: 28, opacity: 0, duration: 0.7 }, '-=0.25', tl);
    from('.atelier-lede', { y: 20, opacity: 0, duration: 0.55 }, '-=0.4', tl);
    from('.atelier-text .btn', { y: 16, opacity: 0, duration: 0.5 }, '-=0.3', tl);

    var art = hero.querySelector('.atelier-art');
    if (art) {
      from(art, { y: 24, opacity: 0, duration: 0.8 }, 0.2, tl);
      var line = art.querySelector('polyline');
      if (line && line.getTotalLength) {
        var len = line.getTotalLength();
        gsap.set(line, { strokeDasharray: len, strokeDashoffset: len });
        tl.to(line, { strokeDashoffset: 0, duration: 1.1, ease: 'power2.inOut' }, 0.7);
      }
      var dot = art.querySelector('polyline ~ circle');
      if (dot) tl.from(dot, { scale: 0, transformOrigin: '50% 50%', duration: 0.4, ease: 'back.out(2)' }, '-=0.2');
    }
  }

  // 2. Scroll-reveals
  if (typeof ScrollTrigger === 'undefined') return;

  function reveal(selector, stagger) {
    var items = gsap.utils.toArray(selector);
    if (!items.length) return;
    gsap.set(items, { opacity: 0, y: 32, transition: 'none' });
    ScrollTrigger.batch(items, {
      start: 'top 90%',
      once: true,
      onEnter: function (batch) {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: stagger || 0.12,
          overwrite: true,
          clearProps: 'opacity,transform,transition'
        });
      }
    });
  }

  reveal('.section-title', 0);
  reveal('.strip-panel', 0.14);
  reveal('.project-card', 0.14);
  reveal('.review', 0.15);
  reveal('.faq-item, details', 0.08);
  reveal('.section-tint-amber > *', 0.12);
  reveal('.service-card, .pricing-card', 0.14);
})();
