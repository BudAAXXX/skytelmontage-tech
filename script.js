(() => {
  'use strict';

  /* =========================
     I18N + SEO
  ========================== */

  const I18N = {
    cs: {
      subtitle: "Specializovaný tým pro výstavbu, modernizaci a servis mobilních a rádiových sítí na území České republiky a v rámci celé Evropské unie.",
      roles: "Majitel, CEO vesmíru a technický ředitel: Patrik Budinský",

      partners: "Partneři",
      partnersNote: "Brzy.",

      servicesTitle: "Co děláme",
      servicesIntro1: "SkyTel Montage se zaměřuje na výstavbu, modernizaci a servis mobilních a rádiových sítí na území České republiky a v rámci celé Evropské unie. Zajišťujeme kompletní montáž ocelových konstrukcí, anténních systémů, přenosových prvků a kabelových tras – od přípravy a instalace až po technickou a fotodokumentaci.",
      servicesIntro2: "Typické zakázky zahrnují zprovozňování nových lokalit, upgrade a výměny technologií, migrace systémů a také opravné či havarijní zásahy po poruchách nebo poškození počasím.",
      service1: "Instalace a výměny mobilních lokalit (2G–5G, mikrovlnné spoje, rádiové systémy).",
      service2: "Montáž ocelových konstrukcí, anténních systémů, bezpečných přístupových cest a kotevních bodů.",
      service3: "Tahání a organizace kabeláže, značení, základní elektro zkoušky a funkční testy požadované projektem.",
      service4: "Fotodokumentace a as-built dokumentace v DE/EN/CZ podle požadavků zákazníka.",

      
      contactRoleLine: "Patrik Budinský – majitel, CEO vesmíru a technický ředitel",

      joke1: "Některé lekce získáte na školení. Jiné ve chvíli, kdy „partner“ zmizí i s vaším lanem a rescue setem.",
      joke2: "Výsledek: dnes lezeme pod vlastním jménem, s vlastním vybavením a vlastní odpovědností.",

      cookieText: "Tento web používá pouze technicky nezbytné soubory cookie (např. pro volbu jazyka a skrytí tohoto oznámení). Nepoužíváme analytické ani marketingové cookies.",
      cookieOk: "Rozumím",

      /* 404 */
      notFoundTitle: "404 – Stránka nenalezena",
      notFoundText: "Omlouváme se, ale stránka, kterou hledáte, neexistuje nebo byla přesunuta.",
      notFoundBack: "Zpět na hlavní stránku",

      /* Impressum */
      impressumHeading: "Impressum",
      impressumCompany: "SkyTel Montage s.r.o.",
      impressumLegalForm: "Právní forma: společnost s ručením omezeným založená podle práva České republiky.",
      impressumResp: "Za obsah stránek odpovídá: Patrik Budinský (majitel a jednatel).",
      impressumAddress: "Sídlo: BUSINESS CENTRUM, Řeznická 1332, 460 01 Liberec, Česká republika.",
      impressumContact: "Kontakt: patrik.budinsky@skytelmontage.tech, tel. +420 739 977 089.",
      impressumRegisterNote: "Údaje o zápisu do obchodního rejstříku budou doplněny po jeho provedení.",

      /* Privacy */
      privacyHeading: "Zásady ochrany osobních údajů",
      privacyIntro: "Tato stránka slouží jako základní firemní prezentace a kontaktní vizitka. Rozsah zpracování osobních údajů je omezen na nezbytné minimum.",
      privacyCookies: "Cookies: používáme pouze technicky nezbytné soubory cookie, například pro volbu jazyka a skrytí cookie lišty. Tyto cookies neslouží k analýze návštěvnosti ani k marketingu.",
      privacyNoTracking: "Nesledujeme návštěvníky pomocí analytických, marketingových či jiných sledovacích nástrojů třetích stran.",
      privacyContactData: "Pokud nás kontaktujete e-mailem nebo telefonicky, zpracováváme vámi poskytnuté kontaktní údaje pouze za účelem vyřízení dotazu nebo přípravy spolupráce.",
      privacyRights: "Osobní údaje zpracováváme v souladu s platnými právními předpisy. Máte právo požadovat přístup k údajům, jejich opravu nebo výmaz v rozsahu, v jakém je to právně možné.",
      privacyContact: "Pro dotazy k ochraně osobních údajů použijte prosím kontakt: patrik.budinsky@skytelmontage.tech.",

      /* Footer */
      footerImprint: "Impressum",
      footerPrivacy: "Zásady ochrany osobních údajů",
      footerBackHome: "Zpět na hlavní stránku"
    },

    en: {
      subtitle: "Specialised team for construction, modernisation and service of mobile and radio networks within the Czech Republic and across the European Union.",
      roles: "Owner, CEO of the Universe and Technical Director: Patrik Budinský",

      partners: "Partners",
      partnersNote: "Soon.",

      servicesTitle: "What we do",
      servicesIntro1: "SkyTel Montage focuses on the construction, modernisation and service of mobile and radio network infrastructure within the Czech Republic and across the entire European Union. We provide complete installation of steelwork, antenna systems, transmission components and cable routes – from preparation and assembly to technical and photo documentation.",
      servicesIntro2: "Typical scopes include deployment of new sites, upgrade and swap programmes, technology migration and corrective or emergency maintenance after faults or weather-related damage.",
      service1: "Installation and swap of mobile sites (2G–5G, microwave links, radio systems).",
      service2: "Assembly of steelwork, antenna systems, safe access routes and anchor points.",
      service3: "Cable routing, labelling, basic electrical checks and functional tests requested by the project.",
      service4: "Photo documentation and as-built documentation in DE/EN/CZ according to client standards.",

      
      contactRoleLine: "Patrik Budinský – Owner, CEO of the Universe and Technical Director",

      joke1: "Some lessons come from training. Others from projects where a “partner” disappears together with your ropes and rescue kit.",
      joke2: "Today we climb only under our own name, with our own gear and our own responsibility.",

      cookieText: "This website uses only technically necessary cookies (for example to remember your language selection and hide this notice). No analytics or marketing cookies are used.",
      cookieOk: "OK",

      /* 404 */
      notFoundTitle: "404 – Page not found",
      notFoundText: "Sorry, the page you are looking for does not exist or has been moved.",
      notFoundBack: "Back to the main page",

      /* Impressum */
      impressumHeading: "Impressum",
      impressumCompany: "SkyTel Montage s.r.o.",
      impressumLegalForm: "Legal form: private limited company (s.r.o.) established under the laws of the Czech Republic.",
      impressumResp: "Content responsibility: Patrik Budinský (owner and managing director).",
      impressumAddress: "Registered office: BUSINESS CENTRUM, Řeznická 1332, 460 01 Liberec, Czech Republic.",
      impressumContact: "Contact: patrik.budinsky@skytelmontage.tech, phone +420 739 977 089.",
      impressumRegisterNote: "Company register details will be added after registration is completed.",

      /* Privacy */
      privacyHeading: "Privacy policy",
      privacyIntro: "This website serves as a basic company presentation and contact page. The processing of personal data is limited to what is strictly necessary.",
      privacyCookies: "Cookies: we use only technically necessary cookies, for example to remember your language selection and to hide the cookie banner. These cookies are not used for analytics or marketing.",
      privacyNoTracking: "We do not use analytics, marketing or other tracking tools of third parties.",
      privacyContactData: "If you contact us by e-mail or phone, we process the contact details you provide solely for answering your request or preparing cooperation.",
      privacyRights: "Personal data is processed in accordance with applicable law. You have the right to request access, rectification or deletion of your data to the extent permitted by law.",
      privacyContact: "For privacy-related questions, please use the following contact: patrik.budinsky@skytelmontage.tech.",

      /* Footer */
      footerImprint: "Impressum",
      footerPrivacy: "Privacy policy",
      footerBackHome: "Back to the main page"
    },

    de: {
      subtitle: "Spezialisiertes Team für Aufbau, Modernisierung und Service von Mobilfunk- und Funknetzen in der Tschechischen Republik und in der gesamten Europäischen Union.",
      roles: "Inhaber, CEO des Universums und technischer Leiter: Patrik Budinský",

      partners: "Partner",
      partnersNote: "In Kürze.",

      servicesTitle: "Leistungen",
      servicesIntro1: "SkyTel Montage konzentriert sich auf den Aufbau, die Modernisierung und den Service von Mobilfunk- und Funknetzinfrastruktur in der Tschechischen Republik und in der gesamten Europäischen Union. Wir liefern vollständige Montage von Stahlbau, Antennensystemen, Übertragungselementen und Kabelwegen – von der Vorbereitung und Installation bis hin zur technischen Dokumentation und Fotodokumentation.",
      servicesIntro2: "Typische Leistungen umfassen die Inbetriebnahme neuer Standorte, Upgrade- und Swap-Programme, Technologiemigration sowie reguläre und Notfallwartung nach Störungen oder Wetterschäden.",
      service1: "Montage und Swap von Mobilfunkstandorten (2G–5G, Richtfunkstrecken, Funksysteme).",
      service2: "Montage von Stahlkonstruktionen, Antennensystemen, sicheren Zugangswegen und Anschlagpunkten.",
      service3: "Kabelzug, strukturierte Verlegung, Beschriftung sowie grundlegende Elektroprüfungen und Funktionstests gemäß Projektvorgaben.",
      service4: "Fotodokumentation und As-Built-Dokumentation in DE/EN/CZ gemäß Kundenvorgaben.",

     
      safety4: "Bevorzugt werden langfristige Einsätze mit stabilen Teams statt ständig wechselnder Crews.",

      contactTitle: "Kontakt & Zusammenarbeit",
      contactIntro: "Für technische Rückfragen, Projektplanung oder Abstimmung von Dokumentation nutzen Sie bitte den direkten Kontakt unten. Bevorzugt werden klar definierte Leistungen, realistische Zeitpläne und langfristige Zusammenarbeit bei Telekommunikationsprojekten innerhalb der EU.",
      contactBilling: "Die Abrechnung erfolgt über eine tschechische s.r.o. mit EU-USt-ID. Vertragsmodelle und Dokumentation können an die Anforderungen von Hauptauftragnehmern und Netzbetreibern angepasst werden.",
      contactRoleLine: "Patrik Budinský – Inhaber, CEO des Universums und technischer Leiter",

      joke1: "Manche Lektionen stammen aus Schulungen. Andere aus Projekten, bei denen ein „Partner“ mitsamt Seilen und Rettungssatz verschwindet.",
      joke2: "Heute klettern wir nur noch unter eigenem Namen, mit eigener Ausrüstung und eigener Verantwortung.",

      cookieText: "Diese Website verwendet nur technisch notwendige Cookies (z. B. zur Sprachwahl und zum Ausblenden dieses Hinweises). Analyse- oder Marketing-Cookies werden nicht eingesetzt.",
      cookieOk: "Verstanden",

      /* 404 */
      notFoundTitle: "404 – Seite nicht gefunden",
      notFoundText: "Die von Ihnen aufgerufene Seite existiert nicht oder wurde verschoben.",
      notFoundBack: "Zurück zur Startseite",

      /* Impressum */
      impressumHeading: "Impressum",
      impressumCompany: "SkyTel Montage s.r.o.",
      impressumLegalForm: "Rechtsform: Gesellschaft mit beschränkter Haftung (s.r.o.) nach tschechischem Recht.",
      impressumResp: "Inhaltlich verantwortlich: Patrik Budinský (Inhaber und Geschäftsführer).",
      impressumAddress: "Sitz: BUSINESS CENTRUM, Řeznická 1332, 460 01 Liberec, Tschechische Republik.",
      impressumContact: "Kontakt: patrik.budinsky@skytelmontage.tech, Tel. +420 739 977 089.",
      impressumRegisterNote: "Angaben zum Handelsregistereintrag werden nach erfolgter Eintragung ergänzt.",

      /* Privacy */
      privacyHeading: "Datenschutzhinweise",
      privacyIntro: "Diese Seite dient als grundlegende Unternehmenspräsentation und Kontaktseite. Die Verarbeitung personenbezogener Daten ist auf das unbedingt notwendige Maß beschränkt.",
      privacyCookies: "Cookies: Es werden nur technisch notwendige Cookies verwendet, z. B. zur Speicherung der Sprachauswahl und zum Ausblenden des Cookie-Hinweises. Diese Cookies werden nicht für Analyse- oder Marketingzwecke eingesetzt.",
      privacyNoTracking: "Es kommen keine Analyse-, Marketing- oder sonstigen Tracking-Werkzeuge Dritter zum Einsatz.",
      privacyContactData: "Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Kontaktdaten ausschließlich zur Bearbeitung Ihrer Anfrage oder zur Vorbereitung einer Zusammenarbeit.",
      privacyRights: "Personenbezogene Daten werden im Einklang mit den geltenden Rechtsvorschriften verarbeitet. Sie haben das Recht auf Auskunft, Berichtigung und Löschung im gesetzlich zulässigen Umfang.",
      privacyContact: "Für Fragen zum Datenschutz verwenden Sie bitte folgende Kontaktadresse: patrik.budinsky@skytelmontage.tech.",

      /* Footer */
      footerImprint: "Impressum",
      footerPrivacy: "Datenschutzhinweise",
      footerBackHome: "Zurück zur Startseite"
    },

    kli: {
      subtitle: "telecom QeD, Qam Qu' je • Czech, EU HochDaq.",
      roles: "Owner, ‘u’ CEO je HoS QeD DevwI’: Patrik Budinský",

      partners: "jupmey (Partner)",
      partnersNote: "nItebHa’ ghomchoH.",

      servicesTitle: "maHvaD nuq wIDo",
      servicesIntro1: "SkyTel Montage Czech je EUDaq mobile Qum patmey chenmoH, tI' je chepmoH. Stahl, antenna', Qum SIrghmey je wIlan, naQ De' qonlu'.",
      servicesIntro2: "Qu'mey motlh: pat chu' chenmoH, pat choH, pat ngevHa'moH, QapHa'ghach ghachDaq tI' je.",

      service1: "2G–5G patmey, microwave, Qum patmey lanlu'.",
      service2: "Stahl qachmey, antenna'mey, He wejDIch je wejmoH.",
      service3: "SIrghmey wItlha', wIper, HoS patmey wIwaH.",
      service4: "mIllogh De' je De' naQ DE/EN/CZ HolDaq.",

      approachTitle: "chay' wIQap",
      approachIntro: "wa' DevwI' nab, Qam Qu' je De' naQ Dev. vaj Qum Qe' napchoH.",
      approach1: "Qu' taghpa' De' naQ wIchegh, He je nabmey wInab.",
      approach2: "Hoch jaj ghu' wIvon, toolbox Qum wIchenmoH, ra'wI'vaD wIja'.",
      approach3: "QaptaHvIS, SIrghmey tIq, QanwI' janmey je wIwoQ.",
      approach4: "rInDI', mIllogh De' je potlhmey wI'ang.",

      safetyTitle: "Qan je laHmey",
      safetyIntro: "Qam Qu'vaD HoS QeD laH, PSAgA Qeq je poQlu'. Hochvam wImuSbe', 'ej wa' mIw wIchenmoH.",
      safety1: "NV 194/2022 §6/§7 pat wIlo', EUDaq QulHoS DevwI' ngoQ 'oH.",
      safety2: "PSAgA / rope access Qeq rut, telecom qachmeyDaq toD mIw le'.",
      safety3: "De' naQ DGUV rur: Qan wl, toD nabmey, janmey je OOPP tetlhmey.",
      safety4: "wa' ghom tIq wImaS, ghommey choHqu'be'.",

      contactTitle: "Qum & malja'",
      contactIntro: "projektev mu'tlhegh DaneHchugh, De' qeq DaneHchugh vaj Qum. Qu' nap, poH nap je wImuS.",
      contactBilling: "Huch QaymeH Czech s.r.o. (EU VAT). nabmey DaneHchugh laH wIchoH.",
      contactRoleLine: "Patrik Budinský – Owner, ‘u’ CEO je HoS QeD DevwI'",

      joke1: "wa' DaHjaj: QeqDaq ghoj. latlh jaj: subdodavatel tlhopDaq lano' jejHa'.",
      joke2: "DaHjaj: pongmaj neH wIlo', janmaj neH, pIlmaj neH.",

      cookieText: "cookie le' neH wIlo'. Hol wIv, De'vam So' neH. mI' Qul, mebpu' ngan, marketing Qulmey tu'lu'be'.",
      cookieOk: "maj",

      /* 404 */
      notFoundTitle: "404 – Daq tu'lu'be'",
      notFoundText: "Doch DaSambogh tu'lu'be' pagh ghoSlu'pu'.",
      notFoundBack: "HomeDaq chegh",

      /* Impressum */
      impressumHeading: "Impressum",
      impressumCompany: "SkyTel Montage s.r.o.",
      impressumLegalForm: "malja' mIw: s.r.o., Czech SepDaq qonlu'.",
      impressumResp: "De'vaD DevwI' qan: Patrik Budinský (Owner je joHwI').",
      impressumAddress: "SepDaq: BUSINESS CENTRUM, Řeznická 1332, 460 01 Liberec, Czech Sep.",
      impressumContact: "Qum: patrik.budinsky@skytelmontage.tech, +420 739 977 089.",
      impressumRegisterNote: "malja' qach De' (Handelsregister) De' ghItlhlu'DI' De'vam chellu'.",

      /* Privacy */
      privacyHeading: "De' Qan mIw",
      privacyIntro: "De'wI'vam malja' De' soQ neH 'ang; QummeH De' puS wIghaj.",
      privacyCookies: "Cookies: Hol wIvmeH je cookie mevmeH neH wIlo'. Qul, marketing, Qel De' ghajbe'.",
      privacyNoTracking: "Qul janmey, marketing Qulmey, pagh latlh mI' qImHa'wI' wIlo'be'.",
      privacyContactData: "yIQuj'eghchugh (e-mail, Qum), De'lIj wIngwI' De'vam jangmeH neH wIlo'.",
      privacyRights: "chut pablu'; De'lIj DaSam, choH, Qaw' je yIpoQlaHchu'.",
      privacyContact: "De' Qan qechmeyvaD Qum: patrik.budinsky@skytelmontage.tech.",

      /* Footer */
      footerImprint: "Impressum",
      footerPrivacy: "De' Qan mIw",
      footerBackHome: "HomeDaq chegh"
    }
  };

  const SEO = {
    cs: {
      title: "SkyTel Montage s.r.o. | Telekomunikační montáže a práce ve výškách v EU",
      desc: "SkyTel Montage – český specializovaný dodavatel výstavby, modernizace a servisu mobilních a rádiových sítí na území ČR a v rámci celé Evropské unie."
    },
    en: {
      title: "SkyTel Montage s.r.o. | Telecom & Rope Access in the EU",
      desc: "SkyTel Montage – specialist for installation, modernisation and service of mobile and radio network infrastructure within the Czech Republic and across the European Union."
    },
    de: {
      title: "SkyTel Montage s.r.o. | Telekom & Höhenarbeit in der EU",
      desc: "SkyTel Montage – tschechischer Spezialist für Aufbau, Modernisierung und Service von Mobilfunk- und Funknetzen in der Tschechischen Republik und in der Europäischen Union."
    },
    kli: {
      title: "SkyTel Montage | telecom QeD je Qam ghom",
      desc: "SkyTel Montage – Czech ghom EUDaq telecom Qu' chavbogh."
    }
  };

  const SUPPORTED_LANGS = ['cs', 'en', 'de', 'kli'];
  const FAVICON_FRAMES = ['logo.png', 'logo-intro.png'];

  /* =========================
     Helpers: cookies
  ========================== */

  function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
  }

  function getCookie(name) {
    const part = document.cookie.split('; ').find(row => row.startsWith(name + '='));
    if (!part) return null;
    return decodeURIComponent(part.split('=')[1] || '');
  }

  /* =========================
     SEO + language
  ========================== */

  function applySEO(lang) {
    const s = SEO[lang] || SEO.en;
    document.title = s.title;

    let md = document.querySelector('meta[name="description"]');
    if (!md) {
      md = document.createElement('meta');
      md.setAttribute('name', 'description');
      document.head.appendChild(md);
    }
    md.setAttribute('content', s.desc);

    const url = new URL(location.href);
    url.searchParams.set('lang', lang);
    history.replaceState(null, '', url.toString());
  }

  function setLang(lang) {
    const safe = SUPPORTED_LANGS.includes(lang) ? lang : 'en';
    const dict = I18N[safe] || I18N.en;

    document.documentElement.lang = safe;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === safe));
    });

    applySEO(safe);
    setCookie('stm_lang', safe, 365);
  }

  function detectLang() {
    const cookieLang = getCookie('stm_lang');
    if (SUPPORTED_LANGS.includes(cookieLang)) return cookieLang;

    const urlLang = new URL(location.href).searchParams.get('lang');
    if (SUPPORTED_LANGS.includes(urlLang)) return urlLang;

    const navLangs = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || 'en'];

    const primary = navLangs.map(l => l.toLowerCase());

    if (primary.some(l => l.startsWith('cs') || l.startsWith('sk'))) return 'cs';
    if (primary.some(l => l.startsWith('de'))) return 'de';
    if (primary.some(l => l.startsWith('en'))) return 'en';
    return 'en';
  }

  /* =========================
     Favicon animation
  ========================== */

  function initFaviconAnimator() {
    const link = document.querySelector('#favicon');
    if (!link || FAVICON_FRAMES.length < 2) return;

    let i = 0;
    setInterval(() => {
      i = (i + 1) % FAVICON_FRAMES.length;
      link.href = FAVICON_FRAMES[i];
    }, 2000);
  }

  /* =========================
     Cookie banner
  ========================== */

  function initCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    const btn = document.getElementById('cookie-accept');
    if (!banner || !btn) return;

    if (getCookie('stm_cookie_ok') === '1') {
      banner.classList.add('cookie-hidden');
      return;
    }

    btn.addEventListener('click', () => {
      setCookie('stm_cookie_ok', '1', 365);
      banner.classList.add('cookie-hidden');
    });
  }

  /* =========================
     Brand title – rotating letters
  ========================== */

  function initBrandTitle() {
    const el = document.getElementById('brandTitle');
    if (!el) return;

    const finalText = (el.dataset.text || el.textContent || '').toUpperCase();
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    el.textContent = '';

    [...finalText].forEach((finalChar, index) => {
      const span = document.createElement('span');
      span.className = 'brand-char';

      if (finalChar === ' ') {
        span.textContent = ' ';
        span.classList.add('brand-space');
        el.appendChild(span);
        return;
      }

      span.textContent = finalChar;
      el.appendChild(span);

      let iterations = 0;
      const maxIterations = 16 + Math.floor(Math.random() * 10);
      const baseDelay = 40;

      setTimeout(() => {
        const interval = setInterval(() => {
          iterations++;
          const progress = iterations / maxIterations;
          const angle = 360 * progress;

          if (iterations < maxIterations) {
            const randomChar = chars[Math.floor(Math.random() * chars.length)];
            span.textContent = randomChar;
            span.style.transform = `rotateY(${angle}deg)`;
          } else {
            span.textContent = finalChar;
            span.style.transform = 'rotateY(0deg)';
            span.classList.add('brand-char-final');
            clearInterval(interval);
          }
        }, baseDelay);
      }, index * 70);
    });
  }

  /* =========================
     Matrix
  ========================== */

  function initMatrix() {
    const canvas = document.getElementById('matrix');
    if (!canvas) return;

    const prefersReduced = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = canvas.getContext('2d');
    const DPR = Math.min(2, window.devicePixelRatio || 1);
    const fontSize = 16;
    const chars = 'アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let columns = 0;
    let drops = [];
    let tick = 0;
    let running = true;

    function resize() {
      canvas.width = Math.floor(window.innerWidth * DPR);
      canvas.height = Math.floor(window.innerHeight * DPR);
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      columns = Math.floor(window.innerWidth / fontSize);
      drops = new Array(columns).fill(1);
    }

    resize();
    window.addEventListener('resize', resize, { passive: true });

    document.addEventListener('visibilitychange', () => {
      running = document.visibilityState === 'visible';
      if (running) requestAnimationFrame(draw);
    });

    function draw() {
      if (!running) {
        requestAnimationFrame(draw);
        return;
      }

      tick++;
      if (tick % 3 !== 0) {
        requestAnimationFrame(draw);
        return;
      }

      ctx.fillStyle = 'rgba(0,0,0,0.08)';
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      ctx.fillStyle = '#8bd3ff';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillText(text, x, y);

        if (y > window.innerHeight && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      requestAnimationFrame(draw);
    }

    requestAnimationFrame(draw);
  }

  /* =========================
     Flying PNG gear
  ========================== */

  function initFloaters() {
    const layer = document.getElementById('floaters-layer');
    if (!layer) return;

    const prefersReduced = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const files = [
      "Lano.png",
      "brzda.png",
      "grillon(1).png",
      "haky.png",
      "jummar.png",
      "karabina0.png",
      "karabina01.png",
      "karabina02.png",
      "karabina08.png",
      "karabina13.png",
      "karabina15.png",
      "karabina17.png",
      "karabina18.png",
      "karabina19.png",
      "karabina20.png",
      "karabina26.png",
      "karabina28.png",
      "karabina29.png",
      "kladka01.png",
      "kladka02.png",
      "kladka04.png",
      "kotvevnik.png",
      "rig.png",
      "sada.png",
      "sedacka.png",
      "sedak.png",
      "smyce01.png",
      "vak.png",
      "vak03.png",
      "vak05.png",
      "obrtlik.png",
      "ocelka01.png",
      "ocelka02.png",
      "ocelka03.png",
      "oecelka04.png"
    ];

    const floaters = [];
    const recent = [];
    const maxRecent = 5;
    const count = Math.min(12, files.length);

    function pickFile() {
      const available = files
        .map((name, idx) => ({ name, idx }))
        .filter(item => !recent.includes(item.idx));

      const picked = available.length
        ? available[Math.floor(Math.random() * available.length)]
        : { idx: Math.floor(Math.random() * files.length), name: null };

      const idx = picked.idx;
      const file = picked.name || files[idx];

      recent.push(idx);
      if (recent.length > maxRecent) recent.shift();
      return file;
    }

    function createFloater() {
      const img = document.createElement('img');
      img.className = 'floater';
      img.src = pickFile();

      const vw = window.innerWidth;
      const vh = window.innerHeight;

      const size = 40 + Math.random() * 80;
      const startX = Math.random() * (vw - size);
      const startY = vh + Math.random() * vh * 0.3;
      const speedY = 0.05 + Math.random() * 0.12;
      const rotSpeed = (Math.random() * 0.04 - 0.02);

      img.style.width = `${size}px`;
      img.style.height = 'auto';

      layer.appendChild(img);

      return {
        el: img,
        x: startX,
        y: startY,
        size,
        speedY,
        angle: Math.random() * 360,
        rotSpeed
      };
    }

    for (let i = 0; i < count; i++) {
      floaters.push(createFloater());
    }

    let lastTime = performance.now();

    function animate(now) {
      const dt = now - lastTime;
      lastTime = now;

      const vw = window.innerWidth;
      const vh = window.innerHeight;

      floaters.forEach(f => {
        f.y -= f.speedY * dt;
        f.angle += f.rotSpeed * dt;

        if (f.y < -f.size * 1.5) {
          f.x = Math.random() * (vw - f.size);
          f.y = vh + Math.random() * vh * 0.3;
          f.speedY = 0.05 + Math.random() * 0.12;
          f.angle = Math.random() * 360;
          f.rotSpeed = (Math.random() * 0.04 - 0.02);
          f.el.src = pickFile();
        }

        f.el.style.transform = `translate(${f.x}px, ${f.y}px) rotate(${f.angle}deg)`;
      });

      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }

  /* =========================
     Init
  ========================== */

  document.addEventListener('DOMContentLoaded', () => {
    const startLang = detectLang();
    setLang(startLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        setLang(lang);
      });
    });

    document.querySelectorAll('.partner-logos img').forEach(img => {
      img.loading = 'lazy';
      img.decoding = 'async';
      img.addEventListener('error', () => {
        img.style.display = 'none';
      });
    });

    initBrandTitle();
    initMatrix();
    initFloaters();
    initFaviconAnimator();
    initCookieBanner();
  });
})();
