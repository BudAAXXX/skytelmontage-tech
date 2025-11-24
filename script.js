(() => {
  'use strict';

  /* =========================
     I18N + SEO
  ========================== */

  const I18N = {
    cs: {
      subtitle: "Telekomunikační a výškový tým připravený pro projekty v Německu a celé EU.",
      roles: "CEO / Owner: Patrik Budinský | Chief Tower Hacker: SkyTel Montage Crew",

      statCheated: "podvedených lidí",
      statRobbed: "okradených lidí",
      statLostGear: "ztracených lan & rescue setů",
      statNote: "Živé počítadlo. V ideálním světě nechceme tyhle hodnoty nikdy změnit.",

      slogan1: "Nekrotíš věž – překonáváš sám sebe.",
      slogan2: "Lezci na oceli, AI v pozadí – čistá práce, čistá data.",
      slogan3: "Od kotevního bodu po protokol o převzetí – jeden tým, jedna odpovědnost.",

      partners: "Partneři",
      partnersNote: "Soon.",

      teamTitle: "Tým & podmínky spolupráce",
      teamIntro: "SkyTel Montage nasazuje vícemanové týmy pro výstavbu, servis a emergency zásahy na telekomunikačních stavbách v Německu a po celé EU. Tým kombinuje elektro kvalifikaci, práce ve výškách (PSAgA) a zkušenosti z projektů pro velké operátory a generální dodavatele.",
      teamCompTitle: "Typické složení týmu",
      teamLead: "Vedoucí technik / team lead: elektro kvalifikace (NV 194/2022 §6/§7 nebo ekvivalent Elektrofachkraft), odpovědnost za BOZP/DGUV a kvalitu.",
      ropeL2: "Rope-access technik (L2): montáž, tahání kabelů, instalace konzol a kotevních bodů, příprava záchranných postupů.",
      ropeTech: "Rope-access technik / montér: doplňkové práce, kompletace, foto-dokumentace a kontrola detailů.",

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
      benefit1: "Jeden kontaktní bod (CEO / team lead) s jasnou odpovědností za plánování, bezpečnost a dodání.",
      benefit2: "Foto a technická dokumentace v DE/EN/CZ podle standardů projektu (např. W+A, DFMG, operátoři).",
      benefit3: "Možnost rychlého nasazení na urgentní zásahy (víkendy / noc) dle kapacit a smlouvy.",
      benefit4: "Transparentní rozpad nákladů na každého člena týmu a použité vybavení, vhodné pro audity a refakturaci.",

      experimentalNote: "Tato stránka slouží pouze pro experimentální účely a nejde o finální podobu webu. Děkujeme za pochopení."
    },
    en: {
      subtitle: "Telecom and rope-access team ready for projects in Germany and across the EU.",
      roles: "CEO / Owner: Patrik Budinský | Chief Tower Hacker: SkyTel Montage Crew",

      statCheated: "people cheated",
      statRobbed: "people robbed",
      statLostGear: "lost ropes & rescue kits",
      statNote: "Live counter. Our goal is to keep every value at zero.",

      slogan1: "You don’t overcome the tower – you overcome yourself.",
      slogan2: "Climbers on steel, AI in the background – clean work, clean data.",
      slogan3: "From anchor point to acceptance report – one team, one responsibility.",

      partners: "Partners",
      partnersNote: "Soon.",

      teamTitle: "Team & cooperation conditions",
      teamIntro: "SkyTel Montage deploys multi-person teams for telecom rollout, maintenance and emergency work at height in Germany and across the EU. The crew combines electrical qualifications, rope-access skills (PSAgA) and experience from projects for major operators and general contractors.",
      teamCompTitle: "Typical team composition",
      teamLead: "Lead technician / team lead: electrical qualification (NV 194/2022 §6/§7 or equivalent Elektrofachkraft), responsible for safety (BOZP/DGUV) and quality.",
      ropeL2: "Rope-access technician (L2): assembly, cable routing, installation of brackets and anchors, rescue planning.",
      ropeTech: "Rope-access technician / rigger: additional work, finishing, photo documentation and detailed checks.",

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
      benefit1: "Single point of contact (CEO / team lead) with clear responsibility for planning, safety and delivery.",
      benefit2: "Photo and technical documentation in DE/EN/CZ according to project standards (e.g. W+A, DFMG, operators).",
      benefit3: "Option for rapid deployment on urgent calls (weekends / nights), depending on capacity and contract.",
      benefit4: "Transparent breakdown of costs per team member and equipment, suitable for audits and recharging.",

      experimentalNote: "This page is used purely for experimental purposes and is not the final version of the website. Thank you for your understanding."
    },
    de: {
      subtitle: "Telekom- und Höhenarbeitsteam für Projekte in Deutschland und ganz Europa.",
      roles: "CEO / Owner: Patrik Budinský | Chief Tower Hacker: SkyTel Montage Crew",

      statCheated: "getäuschte Personen",
      statRobbed: "beraubte Personen",
      statLostGear: "verlorene Seile & Rettungssets",
      statNote: "Live-Zähler. Ziel: alle Werte dauerhaft bei Null halten.",

      slogan1: "Du bezwingst nicht den Mast – du überwindest dich selbst.",
      slogan2: "Kletterer am Stahl, KI im Hintergrund – saubere Arbeit, saubere Daten.",
      slogan3: "Vom Anschlagpunkt bis zum Abnahmeprotokoll – ein Team, eine Verantwortung.",

      partners: "Partner",
      partnersNote: "Soon.",

      teamTitle: "Team & Rahmenbedingungen der Zusammenarbeit",
      teamIntro: "SkyTel Montage setzt mehrköpfige Teams für Rollout, Service und Notfalleinsätze an Telekommunikationsanlagen in Deutschland und der EU ein. Das Team verbindet Elektro-Qualifikation, Höhenarbeit (PSAgA) und Erfahrung aus Projekten für Netzbetreiber und Generalunternehmer.",
      teamCompTitle: "Typische Teamzusammensetzung",
      teamLead: "Lead-Techniker / Teamleiter: Elektro-Qualifikation (NV 194/2022 §6/§7 bzw. gleichwertige Elektrofachkraft), verantwortlich für Arbeitssicherheit (DGUV) und Qualität.",
      ropeL2: "Rope-Access-Techniker (L2): Montage, Kabelzug, Installation von Konsolen und Anschlagpunkten, Rettungsplanung.",
      ropeTech: "Rope-Access-Techniker / Monteur: Zusatzarbeiten, Fertigstellung, Fotodokumentation und Detailkontrolle.",

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
      benefit1: "Ein zentraler Ansprechpartner (CEO / Teamleiter) mit klarer Verantwortung für Planung, Sicherheit und Lieferung.",
      benefit2: "Foto- und technische Dokumentation in DE/EN/CZ gemäß Projektanforderungen (z. B. W+A, DFMG, Netzbetreiber).",
      benefit3: "Möglichkeit eines schnellen Einsatzes bei Notfällen (Wochenende / Nacht) abhängig von Kapazität und Vertrag.",
      benefit4: "Transparente Kostenaufteilung pro Teammitglied und Ausrüstung, geeignet für Audits und Weiterverrechnung.",

      experimentalNote: "Diese Seite dient ausschließlich zu experimentellen Zwecken und stellt nicht die endgültige Version der Website dar. Vielen Dank für Ihr Verständnis."
    },
    kli: {
      subtitle: "telecom QeD • jenwI' Segh woch • yuQvam HochDaq ghom.",
      roles: "CEO / joHwI': Patrik Budinský | qum tajHommey: SkyTel Montage ghom",

      statCheated: "nuchpu’ napHa’",
      statRobbed: "Huch luHevbe’bogh nuvpu’",
      statLostGear: "lujorqu'pu' lano' & toD janmey",
      statNote: "mIvmey bIH. HochHom Dochmeyvam wIneH: pagh, pagh, pagh.",

      slogan1: "SamchoHbe’ Hoch ‘u’ – bIqun jeqlIj neH.",
      slogan2: "yoSDajDaq leS nagh, ‘emDaq vangtaH AI – ta’ law’, Qagh puS.",
      slogan3: "naQHom muvDI’ Qav wIv De’ – wa’ ghom, wa’ pARmaq.",

      partners: "jupmey (Partner)",
      partnersNote: "nItebHa’ ghomchoH. (Soon.)",

      teamTitle: "ghom je malja’ nIl",
      teamIntro: "SkyTel Montage ghomvam tlhoy’ ghochDaq QanchoHmeH, QaptaHmeH, SIghmoHmeH je QeD lo’taH, ‘oH Germany EU jeDaq. QeD QeDpIn, QamchoH (PSAgA) je Qu’ nIv Sov lughajchaj.",
      teamCompTitle: "ghom mIS Hutlh",
      teamLead: "DevwI’ QeD: HoS QeD pat (NV 194/2022 §6/§7), Qan je chutlhu’ (DGUV) je povqu’ ghu’ nIv DevwI’.",
      ropeL2: "Qam ghomwI’ (L2): rar, SIrgh, naQHom lan, QanDu’ Qav cher, toDmeH mIw nIqel.",
      ropeTech: "Qam ghomwI’ latlh: De’ ten, ghu’ rInmoH, mIllogh De’ qon je muSHa’ghachHa’ ngaS.",

      billingTitle: "wa’ ghomwI’vaD nuq wI’ang",
      billingDayRate: "jajmeH Huch: Qu’ nIv, ghu’ gher, De’ qon je jan loj.",
      billingTravel: "lengmeH Huch: Duj, patlh, maw’, mebpa’mey je ngaSbogh pImHey, ghom tInqu’ ‘etlh.",
      billingPerDiem: "SojDaj, QottaH: Germany / Czech patlhmeyvam rur, qarDajDaq nargh.",
      billingEquipment: "jan le’: EMF QI’meH janmey, pI’meH QI’meH janmey, toD janmey le’ je – poQlu’chugh neH.",

      paymentTitle: "Huch QaymeH mIw",
      paymentCompany: "Czech s.r.o. (EU VAT) mIrDaq pat: Huch EUR / CZK qaStaHvIS poQbogh poH.",
      paymentMilestones: "wab Deghmey mIr: chenmoH, tIj, Qav De’ nIqelmeH wanI’ mIrHom.",
      paymentMonthly: "jar wa’: jar Hochlogh ghommeyvaD wa’ DeghHom.",

      benefitsTitle: "jupvaD QaQbogh Dochmey",
      benefit1: "wa’ ghot neH DawIvlaH (CEO / DevwI’), nab, Qan, Qul je luDevchu’.",
      benefit2: "mIllogh De’ je De’ nIv DE/EN/CZ HolDaq chenmoHlu’, malja’ patmey tIbuS.",
      benefit3: "poH povHa’ ghorgh (wa’leS / ram) nom ghom wIchenmoHlaH, chaw’ Degh pablu’taHvIS.",
      benefit4: "ghomwI’ HochvaD Huch Qanchu’, janmey je – mIwvam chovlu’laH ‘ej qaSqa’moHlu’laH.",

      experimentalNote: "De’vam wIqel neH; ‘oH nIvqu’ De’ qav qachbe’. yajmeH qatlho’."
    }
  };

  const SEO = {
    cs: {
      title: "SkyTel Montage s.r.o. | Telekomunikační a výškové práce v DE/EU",
      desc: "SkyTel Montage – český tým s více než 8 lety zkušeností na telekomunikačních projektech v Německu. Montáže a servis sítí, práce ve výškách (PSAgA), elektro kvalifikace NV 194/2022 §6/§7 a kompletní dokumentace dle DE/CZ norem."
    },
    en: {
      title: "SkyTel Montage s.r.o. | Telecom & Rope Access in DE/EU",
      desc: "SkyTel Montage – Czech-based telecom and rope-access team with 8+ years of project experience in Germany. Network rollout, upgrades and service at height, electrical qualification (NV 194/2022 §6/§7) and documentation according to German and Czech standards."
    },
    de: {
      title: "SkyTel Montage s.r.o. | Telekom & Höhenarbeit in DE/EU",
      desc: "SkyTel Montage – tschechisches Team mit über 8 Jahren Erfahrung auf Telekommunikationsprojekten in Deutschland. Rollout, Umbau und Service von Netzen in Höhenarbeit (PSAgA), Elektro-Qualifikation nach NV 194/2022 §6/§7 und Projektdokumentation gemäß deutschen und tschechischen Normen."
    },
    kli: {
      title: "SkyTel Montage | telecom QeD je Qam ghom",
      desc: "SkyTel Montage – GermanyDaq Qu’ nIv chavbogh Czech ghom: telecom, Qam, HoS QeD je De’ nIv."
    }
  };

  const SUPPORTED_LANGS = ['cs', 'en', 'de', 'kli'];

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
  }

  function detectLang() {
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
     Fun stats (scramble to 0)
  ========================== */

  function initStats() {
    const numbers = document.querySelectorAll('.stat-number');
    if (!numbers.length) return;

    numbers.forEach((el, idx) => {
      const finalValue = 0;
      let iterations = 0;
      const maxIterations = 25 + idx * 5;

      function scramble() {
        iterations++;
        if (iterations < maxIterations) {
          el.textContent = Math.floor(Math.random() * 120);
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
        return;
      }

      const head = snake[0];
      const next = { x: head.x + dir.x, y: head.y + dir.y };

      if (next.x < 0) next.x = cols - 1;
      if (next.x >= cols) next.x = 0;
      if (next.y < 0) next.y = rows - 1;
      if (next.y >= rows) next.y = 0;

      if (snake.some(seg => seg.x === next.x && seg.y === next.y)) {
        alive = false;
        draw(true);
        return;
      }

      snake.unshift(next);

      if (next.x === food.x && next.y === food.y) {
        food = spawnFood();
      } else {
        snake.pop();
      }

      lastDir = { ...dir };
      draw(false);
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
