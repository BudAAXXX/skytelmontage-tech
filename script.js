(() => {
  'use strict';

  /* =========================
     I18N + SEO
  ========================== */

  const I18N = {
    cs: {
      subtitle: "Specializované rope-access a elektro týmy pro výstavbu, modernizaci a servis mobilních a rádiových sítí v Německu a celé EU.",
      roles: "Majitel, jednatel a technický ředitel: Patrik Budinský (interně: CEO vesmíru)",

      statExperience: "let projektové práce na německých telekomunikačních stavbách",
      statCrews: "rope-access montážní týmy připravené k nasazení",
      statAge: "let – věk nejstaršího technika na crew listu",
      statNote: "Hodnoty jsou orientační a liší se podle konkrétní zakázky. Velikost týmu a rozsah prací se vždy stanovují individuálně podle projektu.",

      partners: "Partneři",
      partnersNote: "Soon.",

      servicesTitle: "Co děláme",
      servicesIntro1: "SkyTel Montage se zaměřuje na výstavbu, modernizaci a servis mobilních a rádiových sítí v Německu. Zajišťujeme kompletní anténní a přenosové systémy na stožárech, střechách i speciálních konstrukcích – od montáže ocelových prvků a tahání kabeláže přes instalaci a měření aktivních technologií až po fotodokumentaci a předávací protokoly.",
      servicesIntro2: "Práce kombinuje rope access techniky, elektro kvalifikaci a projektovou dokumentaci podle německých a českých norem. Typické rozsahy zahrnují roll-out nových lokalit, swap a upgrade programy a pravidelnou i havarijní údržbu.",
      service1: "Výstavba a swap mobilních lokalit (2G–5G, mikrovlnné spoje, rádiové systémy).",
      service2: "Montáž ocelových konstrukcí, anténních systémů a bezpečných přístupů / kotevních bodů.",
      service3: "Tahání a organizace kabeláže, značení a základní elektro zkoušky.",
      service4: "Fotodokumentace, řešení punchlistů a as-built dokumentace v DE/EN/CZ.",

      teamTitle: "Tým a organizace práce",
      teamIntro: "SkyTel Montage staví na malých stabilních posádkách, které kombinují elektro kvalifikaci, školení pro práce ve výškách (PSAgA) a praxi z německých telekomunikačních projektů. Týmy jsou nastavené tak, aby zvládly celý montážní cyklus – od přípravy pracoviště až po fotodokumentaci a předávací protokoly.",
      teamCompTitle: "Role v týmu",
      teamLead: "Vedoucí technik / team lead: elektro kvalifikace (NV 194/2022 §6/§7 nebo ekvivalent Elektrofachkraft), koordinace prací, řízení BOZP/DGUV a kontrola kvality.",
      ropeL2: "Rope-access technik (L2): montáž ocelových a anténních prvků, tahání kabeláže, instalace kotevních bodů a spolupráce na záchranných postupech.",
      ropeTech: "Rope-access technik / montér: dokončovací práce, čisté vedení kabelů, značení, fotodokumentace a kontrola detailů podle standardů projektu.",

      billingTitle: "Co se účtuje za každého člena týmu",
      billingDayRate: "Denní sazba: odborná práce na stavbě, příprava, dokumentace a použití běžného nářadí.",
      billingTravel: "Cestovní náklady: podíl na dodávce, PHM, mýtu a parkování podle projektu a počtu techniků.",
      billingPerDiem: "Diety a ubytování: standardně dle německých / českých sazeb, účtováno dle smluvního ujednání.",
      billingEquipment: "Speciální vybavení: případné příplatky za specifickou měřicí a testovací techniku (např. EMF, elektro měření, speciální rescue sety) vyžadovanou projektem.",

      paymentTitle: "Možnosti plateb",
      paymentCompany: "Fakturace přes české s.r.o. (EU DIČ): fakturace v EUR nebo CZK, standardní splatnost.",
      paymentMilestones: "Fakturace po milnících: rozdělení projektu na etapy (např. výstavba, zprovoznění, předání).",
      paymentMonthly: "Pravidelné měsíční faktury: souhrnná faktura za všechna pracoviště a odpracované dny v daném měsíci.",

      benefitsTitle: "Výhody pro partnery",
      benefit1: "Jeden kontaktní bod (Owner / CEO) s jasnou odpovědností za plánování, bezpečnost a dodání.",
      benefit2: "Foto a technická dokumentace v DE/EN/CZ podle standardů projektu (např. W+A, DFMG, operátoři).",
      benefit3: "Možnost rychlého nasazení na urgentní zásahy (víkendy / noc) dle kapacit a smlouvy.",
      benefit4: "Transparentní rozpad nákladů na každého člena týmu a použité vybavení, vhodné pro audity a refakturaci.",

      joke1: "Některé lekce získáš na školení. Jiné ve chvíli, kdy subdodavatel zmizí i s tvým lanem a rescue setem.",
      joke2: "Výsledek: dnes lezeme pod vlastním jménem, s vlastním vybavením a vlastní odpovědností.",

      cookieText: "Tento web používá pouze technicky nezbytné soubory cookie (např. pro volbu jazyka a skrytí tohoto oznámení). Nepoužíváme analytické ani marketingové cookies.",
      cookieOk: "Rozumím"
    },
    en: {
      subtitle: "Specialised rope-access and electrical teams for installation, upgrade and service of mobile and radio networks in Germany and across the EU.",
      roles: "Owner, CEO & Technical Director: Patrik Budinský (internally known as “CEO vesmíru”)",

      statExperience: "years of project work on German telecom sites",
      statCrews: "rope-access installation crews that can be deployed",
      statAge: "years – age of the oldest technician on the crew list",
      statNote: "Figures are indicative and may differ per project. Final crew size and scope are always agreed individually with the client.",

      partners: "Partners",
      partnersNote: "Soon.",

      servicesTitle: "What we do",
      servicesIntro1: "SkyTel Montage focuses on the installation, modernisation and service of mobile and radio networks in Germany. We deliver complete antenna and transmission systems on towers, rooftops and special structures – from steelwork and cable routing through installation and testing of active equipment to final photo documentation and handover reports.",
      servicesIntro2: "The work combines rope-access techniques, electrical qualification and project documentation according to German and Czech standards. Typical scopes include greenfield roll-out, swap and upgrade programmes and corrective or emergency maintenance.",
      service1: "New build and swap of mobile sites (2G–5G, microwave links, radio systems).",
      service2: "Assembly of steel structures, antenna systems and safe access / anchor points.",
      service3: "Structured cable routing, labelling and basic electrical tests.",
      service4: "Photo documentation, punch list handling and as-built reports in DE/EN/CZ.",

      teamTitle: "Team and work organisation",
      teamIntro: "SkyTel Montage works with small, stable crews that combine electrical qualification, PSAgA rope-access training and hands-on experience from German telecom projects. Each crew is structured to handle the full installation cycle – from site preparation to photo documentation and handover reports.",
      teamCompTitle: "Roles in the crew",
      teamLead: "Lead technician / team lead: electrical qualification (NV 194/2022 §6/§7 or equivalent Elektrofachkraft), coordination of works, responsibility for HSE (BOZP/DGUV) and quality control.",
      ropeL2: "Rope-access technician (L2): assembly of steel and antenna structures, cable routing, installation of anchor points and support with rescue procedures.",
      ropeTech: "Rope-access technician / rigger: finishing work, clean cable routing and labelling, photo documentation and detailed checks according to project standards.",

      billingTitle: "What is billed per team member",
      billingDayRate: "Day rate: professional work on site, preparation, documentation and standard tools.",
      billingTravel: "Travel costs: share of van, fuel, tolls and parking, allocated according to project and crew size.",
      billingPerDiem: "Per diems & accommodation: usually according to German / Czech rates, invoiced as agreed.",
      billingEquipment: "Special equipment: optional surcharges for specific measurement and test equipment (e.g. EMF meters, electrical testers, special rescue kits) requested by the project.",

      paymentTitle: "Payment options",
      paymentCompany: "Invoicing via Czech limited company (EU VAT): invoicing in EUR or CZK, standard payment terms.",
      paymentMilestones: "Milestone-based billing: project split into phases such as build, commissioning and final acceptance.",
      paymentMonthly: "Monthly summary invoices: one consolidated invoice per month for all sites and days worked.",

      benefitsTitle: "Benefits for partners",
      benefit1: "Single point of contact (Owner / CEO) with clear responsibility for planning, safety and delivery.",
      benefit2: "Photo and technical documentation in DE/EN/CZ according to project standards (e.g. W+A, DFMG, operators).",
      benefit3: "Option for rapid deployment on urgent calls (weekends / nights), depending on capacity and contract.",
      benefit4: "Transparent breakdown of costs per team member and equipment, suitable for audits and recharging.",

      joke1: "Some lessons you learn in training. Others when a subcontractor disappears together with your ropes and rescue kit.",
      joke2: "Result: today we climb under our own name, with our own gear and our own responsibility.",

      cookieText: "This website uses only technically necessary cookies (for example to remember your language selection and hide this notice). No analytics or marketing cookies are used.",
      cookieOk: "OK"
    },
    de: {
      subtitle: "Spezialisierte Rope-Access- und Elektroteams für Aufbau, Modernisierung und Service von Mobilfunk- und Funknetzen in Deutschland und ganz Europa.",
      roles: "Inhaber, Geschäftsführer und Technischer Leiter: Patrik Budinský (intern: CEO des Universums)",

      statExperience: "Jahre Projekterfahrung auf deutschen Telekommunikationsstandorten",
      statCrews: "Rope-Access-Montageteams, die einsatzbereit sind",
      statAge: "Jahre – Alter des ältesten Technikers auf der Crew-Liste",
      statNote: "Die Kennzahlen sind Richtwerte und können je nach Projekt variieren. Teamgröße und Leistungsumfang werden immer projektspezifisch abgestimmt.",

      partners: "Partner",
      partnersNote: "Soon.",

      servicesTitle: "Leistungen",
      servicesIntro1: "SkyTel Montage konzentriert sich auf Aufbau, Modernisierung und Service von Mobilfunk- und Funknetzen in Deutschland. Wir liefern komplette Antennen- und Übertragungssysteme auf Masten, Dächern und Sonderkonstruktionen – vom Stahlbau und Kabelzug über Montage und Messung aktiver Technik bis zur Foto- und Abnahmedokumentation.",
      servicesIntro2: "Die Arbeit verbindet Seilzugangstechnik, Elektro-Qualifikation und Projektdokumentation nach deutschen und tschechischen Normen. Typische Leistungen sind Rollout neuer Standorte, Swap- und Upgrade-Programme sowie reguläre und Notfallwartung.",
      service1: "Neubau und Swap von Mobilfunkstandorten (2G–5G, Richtfunkstrecken, Funksysteme).",
      service2: "Montage von Stahlstrukturen, Antennensystemen und sicheren Zugängen / Anschlagpunkten.",
      service3: "Kabelzug, strukturierte Verlegung, Beschriftung und grundlegende Elektroprüfungen.",
      service4: "Fotodokumentation, Bearbeitung von Punchlisten und As-Built-Dokumentation in DE/EN/CZ.",

      teamTitle: "Team und Arbeitsorganisation",
      teamIntro: "SkyTel Montage setzt kleine, eingespielte Teams ein, die Elektro-Qualifikation, PSAgA-Höhenarbeit und Praxiserfahrung aus deutschen Telekommunikationsprojekten verbinden. Die Teams sind so strukturiert, dass sie den gesamten Montagezyklus abdecken – von der Baustellenvorbereitung bis zur Foto- und Abnahmedokumentation.",
      teamCompTitle: "Rollen im Team",
      teamLead: "Lead-Techniker / Teamleiter: Elektro-Qualifikation (NV 194/2022 §6/§7 bzw. gleichwertige Elektrofachkraft), Koordination der Arbeiten, Verantwortung für Arbeitssicherheit (DGUV) und Qualitätskontrolle.",
      ropeL2: "Rope-Access-Techniker (L2): Montage von Stahl- und Antennenstrukturen, Kabelzug, Installation von Anschlagpunkten und Unterstützung bei Rettungskonzepten.",
      ropeTech: "Rope-Access-Techniker / Monteur: Fertigstellungsarbeiten, saubere Kabelverlegung und Beschriftung, Fotodokumentation und Detailprüfung gemäß Projektstandard.",

      billingTitle: "Was pro Teammitglied abgerechnet wird",
      billingDayRate: "Tagessatz: fachgerechte Arbeit vor Ort, Vorbereitung, Dokumentation und Standardwerkzeug.",
      billingTravel: "Reisekosten: Anteil an Transporter, Kraftstoff, Maut und Parken – je nach Projekt und Teamgröße.",
      billingPerDiem: "Spesen & Unterkunft: in der Regel nach deutschen / tschechischen Sätzen, gemäß vertraglicher Vereinbarung.",
      billingEquipment: "Spezialausrüstung: optionale Zuschläge für spezielle Mess- und Prüftechnik (z. B. EMF-Messgeräte, Elektroprüfer, spezielle Rettungssätze), falls projektspezifisch gefordert.",

      paymentTitle: "Zahlungsoptionen",
      paymentCompany: "Abrechnung über tschechische s.r.o. (EU-USt-ID): Abrechnung in EUR oder CZK, übliche Zahlungsziele.",
      paymentMilestones: "Abrechnung nach Meilensteinen: Aufteilung des Projekts in Phasen wie Aufbau, Inbetriebnahme und Abnahme.",
      paymentMonthly: "Monatliche Sammelrechnungen: eine konsolidierte Rechnung pro Monat für alle Standorte und Einsatztage.",

      benefitsTitle: "Vorteile für Partner",
      benefit1: "Ein zentraler Ansprechpartner (Owner / CEO) mit klarer Verantwortung für Planung, Sicherheit und Lieferung.",
      benefit2: "Foto- und technische Dokumentation in DE/EN/CZ gemäß Projektanforderungen (z. B. W+A, DFMG, Netzbetreiber).",
      benefit3: "Möglichkeit eines schnellen Einsatzes bei Notfällen (Wochenende / Nacht) abhängig von Kapazität und Vertrag.",
      benefit4: "Transparente Kostenaufteilung pro Teammitglied und Ausrüstung, geeignet für Audits und Weiterverrechnung.",

      joke1: "Manche Lektionen lernt man in Schulungen. Andere, wenn ein Subunternehmer mitsamt Seilen und Rettungsset verschwindet.",
      joke2: "Ergebnis: Heute klettern wir unter eigenem Namen, mit eigener Ausrüstung und eigener Verantwortung.",

      cookieText: "Diese Website verwendet nur technisch notwendige Cookies (z. B. zur Sprachwahl und zum Ausblenden dieses Hinweises). Analyse- oder Marketing-Cookies werden nicht eingesetzt.",
      cookieOk: "Verstanden"
    },
    kli: {
      subtitle: "telecom QeD • jenwI' Segh woch • yuQvam HochDaq ghom.",
      roles: "Owner, CEO & qum taj: Patrik Budinský (CEO vesmíru)",

      statExperience: "DISmeymey GermanyDaq Qu'",
      statCrews: "ghommey Qam ghom chenmoHlaHbogh",
      statAge: "ben – ghomDaq poQbogh tIQ law'",
      statNote: "mIvmeyvam qech neH; malja' wa'DIchDaq latlh nab wIchav.",

      partners: "jupmey (Partner)",
      partnersNote: "nItebHa’ ghomchoH. (Soon.)",

      servicesTitle: "ghom wIvang",
      servicesIntro1: "SkyTel Montage GermanyDaq telecom patmey qach, tI' je QapmoH.",
      servicesIntro2: "Qam, HoS QeD, De' naQ ghaj ghom.",
      service1: "mobIl pat chu' chenmoH.",
      service2: "Hachmey, ‘antenna’mey, naQHom je lan.",
      service3: "SIrghmey je peQ Janmey rar.",
      service4: "mIllogh De' je De' naQ qon.",

      teamTitle: "ghom & malja' nIl",
      teamIntro: "SkyTel Montage ghomvam Germany EU jeDaq Qam Qu' vatlh DISmey.",
      teamCompTitle: "ghom mIS Hutlh",
      teamLead: "DevwI' QeD: HoS QeD pat, Qan je chutlhu’ ghaj.",
      ropeL2: "Qam ghomwI' (L2): rar, SIrgh, naQHom lan, toD nab.",
      ropeTech: "Qam ghomwI' latlh: De' ten, rInmoH, mIllogh De' qon.",

      billingTitle: "wa' ghomwI'vaD nuq wI'ang",
      billingDayRate: "jajmeH Huch: Qu' nIv, ghu' gher, De' qon.",
      billingTravel: "lengmeH Huch: Duj, patlh, maw', mebpa'mey je.",
      billingPerDiem: "SojDaj & QottaH.",
      billingEquipment: "jan le': EMF, toD janmey le'.",

      paymentTitle: "Huch QaymeH mIw",
      paymentCompany: "Czech s.r.o. (EU VAT) mIrDaq pat.",
      paymentMilestones: "wab Deghmey mIr.",
      paymentMonthly: "jar wa' Sammey.",

      benefitsTitle: "jupvaD QaQbogh Dochmey",
      benefit1: "wa' ghot neH nab, Qan, Qul je luDev.",
      benefit2: "mIllogh De' DE/EN/CZ HolDaq.",
      benefit3: "ram / wa'leS nom ghom chenmoHlaH.",
      benefit4: "Hoch ghomwI'vaD Huch Qanchu'.",

      joke1: "wa' subdodavatel jorDI', lano' ghajQo' wIwuq.",
      joke2: "qaStaHvIS ret: 1 000 EUR lano'. malja'wa' ngoQ: 0.",

      cookieText: "cookie le' neH lo'meH nuqneH. De' nIDbe', mebpu' ngan je'be'.",
      cookieOk: "maj"
    }
  };

  const SEO = {
    cs: {
      title: "SkyTel Montage s.r.o. | Telekomunikační montáže a práce ve výškách v DE/EU",
      desc: "SkyTel Montage – český specializovaný dodavatel výstavby, modernizace a servisu mobilních a rádiových sítí v Německu. Týmy s elektro kvalifikací NV 194/2022 §6/§7, PSAgA a dokumentací podle německých a českých norem."
    },
    en: {
      title: "SkyTel Montage s.r.o. | Telecom & Rope Access in DE/EU",
      desc: "SkyTel Montage – specialist for installation, upgrade and service of mobile and radio networks in Germany and across the EU. Rope-access crews with electrical qualification (NV 194/2022 §6/§7), PSAgA and documentation according to German and Czech standards."
    },
    de: {
      title: "SkyTel Montage s.r.o. | Telekom & Höhenarbeit in DE/EU",
      desc: "SkyTel Montage – tschechischer Spezialist für Aufbau, Modernisierung und Service von Mobilfunk- und Funknetzen in Deutschland. Rollout, Umbau und Service in Höhenarbeit (PSAgA), Elektro-Qualifikation NV 194/2022 §6/§7 und Dokumentation nach deutschen und tschechischen Normen."
    },
    kli: {
      title: "SkyTel Montage | telecom QeD je Qam ghom",
      desc: "SkyTel Montage – GermanyDaq Qu' nIv chavbogh Czech ghom: telecom, Qam, HoS QeD je De' nIv."
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
     Ticker title
  ========================== */

  function initTickerTitle() {
    const el = document.getElementById('tickerTitle');
    if (!el) return;

    const finalText = el.dataset.text || el.textContent || '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    el.textContent = '';

    [...finalText].forEach((finalChar, index) => {
      const span = document.createElement('span');
      span.className = 'ticker-char';

      if (finalChar === ' ') {
        span.textContent = ' ';
        el.appendChild(span);
        return;
      }

      span.textContent = ' ';
      el.appendChild(span);

      let iterations = 0;
      const maxIterations = 10 + Math.floor(Math.random() * 6);
      const delay = 40;

      setTimeout(() => {
        const interval = setInterval(() => {
          span.textContent = chars[Math.floor(Math.random() * chars.length)];
          iterations++;
          if (iterations >= maxIterations) {
            clearInterval(interval);
            span.textContent = finalChar;
          }
        }, delay);
      }, index * 80);
    });
  }

  /* =========================
     Stats (scramble to data-final)
  ========================== */

  function initStats() {
    const numbers = document.querySelectorAll('.stat-number');
    if (!numbers.length) return;

    numbers.forEach((el, idx) => {
      const finalValue = parseInt(el.dataset.final, 10);
      if (Number.isNaN(finalValue)) return;

      let iterations = 0;
      const maxIterations = 25 + idx * 5;

      function scramble() {
        iterations++;
        if (iterations < maxIterations) {
          el.textContent = Math.floor(Math.random() * (finalValue + 12));
          requestAnimationFrame(scramble);
        } else {
          el.textContent = finalValue;
        }
      }

      setTimeout(() => {
        requestAnimationFrame(scramble);
      }, idx * 200);
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
     Snake mini-game
  ========================== */

  function initSnake() {
    const canvas = document.getElementById('snakeCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const cols = 20;
    const rows = 15;
    const cell = 8;

    canvas.width = cols * cell;
    canvas.height = rows * cell;

    let snake = [
      { x: 5, y: 7 },
      { x: 4, y: 7 },
      { x: 3, y: 7 }
    ];
    let dir = { x: 1, y: 0 };
    let food = spawnFood();
    let lastDir = { x: 1, y: 0 };
    let alive = true;

    function spawnFood() {
      return {
        x: Math.floor(Math.random() * cols),
        y: Math.floor(Math.random() * rows)
      };
    }

    function step() {
      if (!alive) {
        draw(true);
      } else {
        const head = snake[0];
        const next = { x: head.x + dir.x, y: head.y + dir.y };

        if (next.x < 0) next.x = cols - 1;
        if (next.x >= cols) next.x = 0;
        if (next.y < 0) next.y = rows - 1;
        if (next.y >= rows) next.y = 0;

        if (snake.some(seg => seg.x === next.x && seg.y === next.y)) {
          alive = false;
          draw(true);
        } else {
          snake.unshift(next);

          if (next.x === food.x && next.y === food.y) {
            food = spawnFood();
          } else {
            snake.pop();
          }

          lastDir = { ...dir };
          draw(false);
        }
      }
    }

    function draw(gameOver) {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#ff4b6a';
      ctx.fillRect(food.x * cell, food.y * cell, cell, cell);

      ctx.fillStyle = '#8bd3ff';
      snake.forEach((seg, index) => {
        const size = index === 0 ? cell : cell - 1;
        const offset = index === 0 ? 0 : 0.5;
        ctx.fillRect(seg.x * cell + offset, seg.y * cell + offset, size, size);
      });

      if (gameOver) {
        ctx.fillStyle = 'rgba(0,0,0,0.5)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#fff';
        ctx.font = '10px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2);
      }
    }

    function handleKey(e) {
      const key = e.key;
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)) {
        e.preventDefault();
      }

      if (!alive && key.startsWith('Arrow')) {
        snake = [
          { x: 5, y: 7 },
          { x: 4, y: 7 },
          { x: 3, y: 7 }
        ];
        dir = { x: 1, y: 0 };
        lastDir = { x: 1, y: 0 };
        food = spawnFood();
        alive = true;
        return;
      }

      switch (key) {
        case 'ArrowUp':
          if (lastDir.y !== 1) dir = { x: 0, y: -1 };
          break;
        case 'ArrowDown':
          if (lastDir.y !== -1) dir = { x: 0, y: 1 };
          break;
        case 'ArrowLeft':
          if (lastDir.x !== 1) dir = { x: -1, y: 0 };
          break;
        case 'ArrowRight':
          if (lastDir.x !== -1) dir = { x: 1, y: 0 };
          break;
      }
    }

    window.addEventListener('keydown', handleKey);

    draw(false);
    setInterval(step, 160);
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

    initFaviconAnimator();
    initCookieBanner();

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

    initTickerTitle();
    initStats();
    initMatrix();
    initSnake();
    initFloaters();
  });
})();
