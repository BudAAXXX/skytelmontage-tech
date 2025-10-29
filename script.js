(() => {
  'use strict';

  // i18n texty
  const I18N = {
    cs: {
      headline: "SkyTel Montage",
      subtitle: "Váš partner pro výškové a telekomunikační projekty v celé Evropě.",
      partners: "Partneři",
      certs: "Certifikace a školení",
      note: "Toto je základ. Dle požadavků projektu doplníme další školení a certifikace. Tým je vícemanový."
    },
    en: {
      headline: "SkyTel Montage",
      subtitle: "Your partner for telecom and rope-access projects across Europe.",
      partners: "Partners",
      certs: "Certifications & Training",
      note: "This is the baseline. We add project-specific trainings and certs as required. Multi-person team."
    },
    de: {
      headline: "SkyTel Montage",
      subtitle: "Ihr Partner für Telekommunikation und Höhenarbeit in ganz Europa.",
      partners: "Partner",
      certs: "Zertifikate & Schulungen",
      note: "Dies ist die Basis. Projektbezogene Schulungen/Zertifikate ergänzen wir nach Vorgabe. Mehrköpfiges Team."
    },
    kli: {
      headline: "SkyTel Montage",
      subtitle: "batlh • HoS • yaj",
      partners: "Qochbe'",
      certs: "patlhmey",
      note: "De'vam 'oH. poQlu'taHvIS DIchel."
    }
  };

  // SEO texty
  const SEO = {
    cs: {
      title: "SkyTel Montage s.r.o. | Telekom a výškové práce v DE/EU",
      desc: "8 let praxe v Německu. Montáže a servis telekom sítí, práce ve výškách (PSAgA), elektro kvalifikace NV 194/2022 §7, G25/G37/G41, Siemens SIMATIC S7/TIA. Dokumentace dle DE/CZ norem."
    },
    en: {
      title: "SkyTel Montage s.r.o. | Telecom & Rope Access in DE/EU",
      desc: "8 years in Germany. Telecom rollout and service, rope access (PSAgA), electrical qualification NV 194/2022 §7, G25/G37/G41, Siemens SIMATIC S7/TIA. Documentation per DE/CZ standards."
    },
    de: {
      title: "SkyTel Montage s.r.o. | Telekom & Höhenarbeit in DE/EU",
      desc: "8 Jahre Erfahrung in Deutschland. Rollout und Service, Höhenarbeit (PSAgA), Elektro-Qualifikation NV 194/2022 §7, G25/G37/G41, Siemens SIMATIC S7/TIA. Dokumentation nach DE/CZ-Standards."
    }
  };

  function applySEO(lang) {
    const s = SEO[lang] || SEO.cs;
    document.title = s.title;
    let md = document.querySelector('meta[name="description"]');
    if (!md) { md = document.createElement('meta'); md.setAttribute('name','description'); document.head.appendChild(md); }
    md.setAttribute('content', s.desc);
    const url = new URL(location.href);
    url.searchParams.set('lang', lang);
    history.replaceState(null, '', url.toString());
  }

  // přepínač jazyků
  function setLang(lang) {
    document.documentElement.lang = lang;
    const dict = I18N[lang] || I18N.cs;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.dataset.i18n;
      if (dict[k]) el.textContent = dict[k];
    });
    document.querySelectorAll('.lang button').forEach(b => {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });
    applySEO(lang);
  }

  // matrix efekt (výkonově šetrný)
  function initMatrix() {
    const canvas = document.getElementById('matrix');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const DPR = Math.min(2, window.devicePixelRatio || 1);
    const fontSize = 16;
    const chars = 'アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let columns = 0;
    let drops = [];

    function resize() {
      canvas.width = Math.floor(innerWidth * DPR);
      canvas.height = Math.floor(innerHeight * DPR);
      canvas.style.width = innerWidth + 'px';
      canvas.style.height = innerHeight + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      columns = Math.floor(innerWidth / fontSize);
      drops = new Array(columns).fill(1);
    }
    resize();
    addEventListener('resize', resize, { passive: true });

    function draw() {
      ctx.fillStyle = 'rgba(0,0,0,0.08)';
      ctx.fillRect(0, 0, innerWidth, innerHeight);

      ctx.fillStyle = '#8bd3ff';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillText(text, x, y);

        if (y > innerHeight && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
  }

  // init
  document.addEventListener('DOMContentLoaded', () => {
    // jazyk z URL
    const urlLang = new URL(location.href).searchParams.get('lang') || 'cs';
    setLang(urlLang);

    document.querySelectorAll('.lang button').forEach(btn => {
      btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });

    // skryj chybějící partnerská loga
    document.querySelectorAll('.partner-logos img').forEach(img => {
      img.loading = 'lazy';
      img.addEventListener('error', () => img.style.display = 'none');
    });

    initMatrix();
  });
})();
