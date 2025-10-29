// ===== script.js =====
(function () {
  'use strict';

  const $ = (sel) => document.querySelector(sel);

  // Bezpečný getElement
  const elements = {
    company: $('#company-name'),
    slogan: $('#slogan'),
    motto: $('#motto'),
    jokeInner: $('#joke-box .joke-inner'),
    powered: $('#powered-by'),
    note: $('#note'),
    langBtns: document.querySelectorAll('.languages button'),
    matrixHost: $('#matrix'),
    movingBox: $('#moving-box'),
    movingImg: $('#moving-image'),
    htmlEl: document.documentElement
  };

  // I18N obsah
  const i18n = {
    cs: {
      company: 'SkyTel Montage',
      slogan: 'Váš partner pro výškové a telekomunikační projekty v celé Evropě.',
      mottos: [
        'Bezpečnost. Kvalita. Transparentnost.',
        'DGUV a BOZP v praxi, ne na papíře.',
        'Doručíme hotové řešení, ne výmluvu.'
      ],
      jokes: [
        'Kontrola kotvení: dvakrát měř, jednou leť.',
        'Nejtišší alarm? Když chybí zajištění. Ten neuslyšíš, ale ucítíš.',
        'Když prší, leze se pomaleji. Data taky.'
      ],
      powered: '© 2025 SkyTel Montage',
      note: 'Projekty v DE/EU. Dokumentace dle DE/CZ norem.'
    },
    en: {
      company: 'SkyTel Montage',
      slogan: 'Your partner for telecom and rope access projects across Europe.',
      mottos: [
        'Safety. Quality. Transparency.',
        'DGUV and EHS that actually work.',
        'We deliver outcomes, not excuses.'
      ],
      jokes: [
        'Anchor check: measure twice, climb once.',
        'The quietest alarm is missing protection. You won’t hear it, you’ll feel it.',
        'When it rains, climbing slows. So does data.'
      ],
      powered: '© 2025 SkyTel Montage',
      note: 'Projects in DE/EU. Documentation aligned with DE/CZ standards.'
    },
    de: {
      company: 'SkyTel Montage',
      slogan: 'Ihr Partner für Telekommunikation und Höhenarbeit in Europa.',
      mottos: [
        'Sicherheit. Qualität. Transparenz.',
        'DGUV und Arbeitsschutz, die funktionieren.',
        'Wir liefern Ergebnisse, keine Ausreden.'
      ],
      jokes: [
        'Anker-Check: zweimal messen, einmal steigen.',
        'Der leiseste Alarm ist fehlender Schutz. Man hört ihn nicht, man spürt ihn.',
        'Bei Regen wird’s langsamer. Am Mast und im Netz.'
      ],
      powered: '© 2025 SkyTel Montage',
      note: 'Projekte in DE/EU. Dokumentation nach DE/CZ-Standards.'
    },
    // Záměrně vtipný dummy profil pro Klingonštinu
    kli: {
      company: 'SkyTel Montage',
      slogan: 'tlhIngan Hol: European telecom ready.',
      mottos: ['batlh. HoS. yaj.'],
      jokes: ['QI’yaH: Fall-arrest first, honor later.'],
      powered: '© 2025 SkyTel Montage',
      note: 'This language mode is for fun.'
    }
  };

  // Stav
  let lang = 'cs';
  let mottoIdx = 0;
  let jokeIdx = 0;
  let mottoTimer = null;
  let jokeTimer = null;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Render textů
  function renderTexts() {
    const t = i18n[lang] || i18n.cs;
    if (elements.company) elements.company.textContent = t.company;
    if (elements.slogan) elements.slogan.textContent = t.slogan;
    if (elements.motto) elements.motto.textContent = t.mottos[mottoIdx % t.mottos.length];
    if (elements.jokeInner) elements.jokeInner.textContent = t.jokes[jokeIdx % t.jokes.length];
    if (elements.powered) elements.powered.textContent = t.powered;
    if (elements.note) elements.note.textContent = t.note;
  }

  // Rotátory
  function startRotators() {
    const t = i18n[lang] || i18n.cs;

    clearInterval(mottoTimer);
    clearInterval(jokeTimer);

    mottoTimer = setInterval(() => {
      mottoIdx = (mottoIdx + 1) % t.mottos.length;
      if (elements.motto) {
        elements.motto.style.opacity = '0';
        setTimeout(() => {
          elements.motto.textContent = t.mottos[mottoIdx];
          elements.motto.style.opacity = '1';
        }, 200);
      }
    }, 4000);

    jokeTimer = setInterval(() => {
      jokeIdx = (jokeIdx + 1) % t.jokes.length;
      if (elements.jokeInner) {
        elements.jokeInner.style.opacity = '0';
        setTimeout(() => {
          elements.jokeInner.textContent = t.jokes[jokeIdx];
          elements.jokeInner.style.opacity = '1';
        }, 200);
      }
    }, 6000);
  }

  // Přepínač jazyka
  function setLanguage(newLang) {
    if (!i18n[newLang]) return;
    lang = newLang;
    mottoIdx = 0;
    jokeIdx = 0;
    document.documentElement.setAttribute('lang', newLang === 'cs' ? 'cs' : newLang);
    elements.langBtns.forEach(btn => {
      const active = btn.getAttribute('data-lang') === newLang;
      if (active) btn.setAttribute('aria-pressed', 'true'); else btn.removeAttribute('aria-pressed');
    });
    renderTexts();
    startRotators();
  }

  function initLangButtons() {
    elements.langBtns.forEach(btn => {
      btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
    });
  }

  // Matrix efekt
  function initMatrix() {
    if (!elements.matrixHost || reducedMotion) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    elements.matrixHost.appendChild(canvas);

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = new Array(columns).fill(1);
    }

    const chars = 'アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fontSize = 16;
    let columns = 0;
    let drops = [];

    resize();
    window.addEventListener('resize', resize, { passive: true });

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#8bf0ff';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
  }

  // Animace pohybujícího se obrázku
  function initMovingBox() {
    if (!elements.movingBox || reducedMotion) return;

    const speedX = 120;  // px/s
    const amp = 80;      // amplituda křivky
    const period = 4000; // ms
    let start = null;

    function step(ts) {
      if (start === null) start = ts;
      const t = ts - start;

      const w = window.innerWidth;
      const h = window.innerHeight;
      const x = (t / 1000) * speedX % (w + 160) - 160; // plynulý loop
      const y = h * 0.35 + Math.sin((t % period) / period * Math.PI * 2) * amp;

      elements.movingBox.style.transform = `translate(${x}px, ${y}px)`;
      requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  // Bezpečnost: pauza videa na low-power zařízeních
  function optimizeVideo() {
    const video = $('#bgVideo');
    if (!video) return;
    // Pokud je šířka < 480 px, nespouštěj video
    if (window.innerWidth < 480) {
      try { video.pause(); } catch (_) {}
    }
  }

  // Init
  function init() {
    initLangButtons();
    setLanguage('cs');
    initMatrix();
    initMovingBox();
    optimizeVideo();
  }

  // Spuštění
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
