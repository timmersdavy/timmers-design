// Timmers Design - Main JavaScript

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });

    // Close nav when link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
      });
    });
  }

  // Close nav when clicking outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('header')) {
      navLinks?.classList.remove('active');
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Form submission handler
  const contactForm = document.querySelector('form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }
});

// Form submission handler
function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const successMsg = document.querySelector('.success-message');
  const errorMsg = document.querySelector('.error-message');

  // Honeypot check
  const honeypot = form.querySelector('[name="website"]');
  if (honeypot && honeypot.value) {
    console.log('Spam detected');
    return false;
  }

  // Basic validation
  const name = form.querySelector('[name="name"]');
  const email = form.querySelector('[name="email"]');
  const message = form.querySelector('[name="message"]');

  if (!name?.value.trim() || !email?.value.trim() || !message?.value.trim()) {
    if (errorMsg) {
      errorMsg.textContent = 'Vul alstublieft alle verplichte velden in.';
      errorMsg.style.display = 'block';
    }
    return false;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    if (errorMsg) {
      errorMsg.textContent = 'Voer een geldig e-mailadres in.';
      errorMsg.style.display = 'block';
    }
    return false;
  }

  // Submit to Formspree
  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => {
      if (response.ok) {
        form.reset();
        if (successMsg) {
          successMsg.textContent = 'Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.';
          successMsg.style.display = 'block';
        }
        if (errorMsg) {
          errorMsg.style.display = 'none';
        }
      } else {
        throw new Error('Form submission failed');
      }
    })
    .catch(error => {
      if (errorMsg) {
        errorMsg.textContent = 'Er is een fout opgetreden. Probeer het later opnieuw.';
        errorMsg.style.display = 'block';
      }
    });

  return false;
}

// Lazy loading for images (optional optimization)
function lazyLoadImages() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// Call lazy loading on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', lazyLoadImages);
} else {
  lazyLoadImages();
}

// Smooth scroll on page load if anchor is present
window.addEventListener('load', function() {
  if (window.location.hash) {
    const element = document.querySelector(window.location.hash);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }
});

// Portfolio vertrekbord: split-flap reveal on load
(function() {
  const flaps = document.querySelectorAll('.board .flap');
  if (!flaps.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const flapChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789·';

  flaps.forEach((flap, index) => {
    const final = flap.dataset.final || flap.textContent;

    if (reduceMotion) {
      flap.textContent = final;
      return;
    }

    const rowDelay = Math.floor(index / 4) * 90;
    const cycles = 5 + (index % 4);
    let tick = 0;

    setTimeout(() => {
      flap.classList.add('is-flapping');
      const interval = setInterval(() => {
        tick++;
        if (tick >= cycles) {
          clearInterval(interval);
          flap.textContent = final;
          flap.classList.remove('is-flapping');
          return;
        }
        flap.textContent = final
          .split('')
          .map(ch => (ch === ' ' ? ' ' : flapChars[Math.floor(Math.random() * flapChars.length)]))
          .join('');
      }, 60);
    }, rowDelay);
  });
})();
