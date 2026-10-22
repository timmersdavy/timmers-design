// Timmers Design - GSAP + ScrollTrigger + Lenis
// Subtiel: zachte scroll, 1 hero-moment, fade/translate bij scrollen.
// Valt veilig terug op statische content als iets faalt of bij prefers-reduced-motion.
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Spotlight die de muis volgt op kaarten (alleen CSS-variabelen, ook zonder GSAP)
  if (!reduceMotion && window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.strip-panel, .project-card').forEach(function (el) {
      el.classList.add('has-spotlight');
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        el.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    });
  }

  if (reduceMotion || !window.gsap || !window.ScrollTrigger) return;

  var revealTargets = '.section-title p, .strip-panel, .project-card, .review, .faq-item, .process-step, .service-card';

  try {
    gsap.registerPlugin(ScrollTrigger);

    // Lenis smooth scroll, gekoppeld aan ScrollTrigger
    if (window.Lenis) {
      var lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
      window.lenis = lenis;
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
      gsap.ticker.lagSmoothing(0);
    }

    // Hero: één georkestreerd moment
    var hero = document.querySelector('.atelier-hero');
    if (hero) {
      var tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.atelier-eyebrow', { y: 16, opacity: 0, duration: 0.5 })
        .from('.atelier-hero h1', { y: 28, opacity: 0, duration: 0.7 }, '-=0.25')
        .from('.atelier-lede', { y: 20, opacity: 0, duration: 0.5 }, '-=0.4')
        .from('.atelier-text .btn', { y: 16, opacity: 0, duration: 0.45, clearProps: 'all' }, '-=0.3')
        .from('.atelier-art', { x: 24, opacity: 0, duration: 0.7 }, 0.2);

      var line = hero.querySelector('.atelier-art polyline');
      if (line && line.getTotalLength) {
        var len = line.getTotalLength();
        gsap.set(line, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(line, { strokeDashoffset: 0, duration: 1.4, ease: 'power2.inOut', delay: 0.7 });
      }
    }

    // Titels: woord voor woord (React Bits "split text"-stijl)
    gsap.utils.toArray('.section-title h2').forEach(function (h2) {
      var label = h2.textContent.trim();
      h2.setAttribute('aria-label', label);
      h2.innerHTML = label.split(/\s+/).map(function (w) {
        return '<span aria-hidden="true" style="display:inline-block;overflow:hidden;vertical-align:top"><span class="w" style="display:inline-block">' + w + '</span></span>';
      }).join(' ');
      gsap.from(h2.querySelectorAll('.w'), {
        yPercent: 110, duration: 0.7, ease: 'power3.out', stagger: 0.08,
        scrollTrigger: { trigger: h2, start: 'top 88%', once: true }
      });
    });

    // Count-up voor de reviewscore ("5,0")
    var score = document.querySelector('.reviews-score');
    if (score) {
      var raw = score.textContent;
      var m = raw.match(/(\d+),(\d)/);
      if (m) {
        var target = parseFloat(m[1] + '.' + m[2]);
        var o = { v: 0 };
        score.setAttribute('aria-label', raw.trim());
        gsap.to(o, {
          v: target, duration: 1.4, ease: 'power2.out',
          scrollTrigger: { trigger: score, start: 'top 90%', once: true },
          onUpdate: function () { score.textContent = raw.replace(m[0], o.v.toFixed(1).replace('.', ',')); },
          onComplete: function () { score.textContent = raw; }
        });
      }
    }

    // Scroll-reveals in batches
    var items = gsap.utils.toArray(revealTargets);
    if (items.length) {
      gsap.set(items, { opacity: 0, y: 28 });
      ScrollTrigger.batch(items, {
        start: 'top 88%',
        once: true,
        onEnter: function (batch) {
          gsap.to(batch, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.12, clearProps: 'transform' });
        }
      });
    }
  } catch (err) {
    // Toon alles als animaties falen
    gsap.set(revealTargets, { clearProps: 'all' });
    if (window.console) console.warn('Animaties uitgeschakeld:', err);
  }
})();
