(() => {
  'use strict';

  /* =========================
     I18N + SEO
  ========================== */

  const I18N = {
    cs: {
      noscriptText: "Tento web používá JavaScript pro vizuální efekty a přepínání jazyků. Základní informace o službách jsou dostupné i bez JavaScriptu.",

      subtitle: "Specializovaný rope-access a elektro tým pro výstavbu, modernizaci a servis telekomunikačních pracovišť v České republice a v celé Evropské unii.",
      roles: "Majitel, jednatel a technický ředitel: Patrik Budinský (interně přezdíván „CEO vesmíru“).",

      joke1: "Některé lekce získáš na školení. Jiné ve chvíli, kdy „partner“ zmizí i s tvým lanem a rescue setem.",
      joke2: "Výsledek: dnes lezeme pod vlastním jménem, s vlastním vybavením a vlastní odpovědností.",

      servicesTitle: "Co děláme",
      servicesIntro1: "SkyTel Montage se zaměřuje na výstavbu, modernizaci a servis mobilních a rádiových sítí na území České republiky a v rámci celé Evropské unie. Zajišťujeme kompletní montáž ocelových konstrukcí, anténních systémů, přenosových prvků a kabelových tras – od přípravy a instalace až po technickou a foto dokumentaci.",
      servicesIntro2: "Typické zakázky zahrnují roll-out nových lokalit, swap a upgrade programy, migrace technologií a také opravné či havarijní zásahy po poruchách nebo poškození počasím.",
      service1: "Instalace a swap mobilních lokalit (2G–5G, mikrovlnné spoje, rádiové systémy).",
      service2: "Montáž ocelových konstrukcí, anténních systémů, bezpečných přístupů a kotevních bodů.",
      service3: "Tahání a organizace kabeláže, značení, základní elektro zkoušky a funkční testy požadované projektem.",
      service4: "Fotodokumentace a as-built dokumentace v DE/EN/CZ podle standardů projektu.",

      approachTitle: "Jak pracujeme na stavbě",
      approachIntro: "Posádka je nastavená tak, aby plánování, práce ve výškách i dokumentace šly přes jednu zodpovědnou osobu. Pro objednatele je tak jednodušší komunikace a snižuje se riziko nedorozumění mezi více subdodavateli.",
      approach1: "Jasné potvrzení rozsahu zakázky před výjezdem, včetně podmínek přístupu, rigging konceptu a požadované dokumentace.",
      approach2: "Každodenní vyhodnocení rizik na místě, krátký toolbox talk a koordinace s objednatelem nebo stavbyvedoucím.",
      approach3: "Čisté provedení s důrazem na kabel management, ochranu proti korozi a správné dotažení mechanických spojů.",
      approach4: "Závěrečná vizuální kontrola, fotodokumentace a stručný report s případnými otevřenými body.",

      safetyTitle: "Bezpečnost a kvalifikace",
      safetyIntro: "Práce ve výškách a na živé telekomunikační infrastruktuře vyžaduje kombinaci elektro kvalifikace, školení PSAgA a znalost předpisů. Tyto oblasti bereme jako jeden celek, ne jen jako povinnou administrativu.",
      safety1: "Elektro kvalifikace dle NV 194/2022 §6/§7 používaná jako základ pro ekvivalent Elektrofachkraft v projektech.",
      safety2: "Pravidelné školení PSAgA / rope access se zaměřením na telekomunikační konstrukce, záchranné postupy a self-rescue scénáře.",
      safety3: "Interní dokumentace v návaznosti na DGUV a národní požadavky (hodnocení rizik, záchranné koncepty, evidence nářadí a OOPP).",
      safety4: "Preferujeme dlouhodobou spolupráci s ověřeným týmem místo neustálého střídání posádek.",

      contactTitle: "Kontakt a spolupráce",
      contactIntro: "Pro technické dotazy, plánování nových projektů nebo sladění dokumentace použijte přímý kontakt níže. Preferujeme jasně definovaný rozsah, realistické termíny a dlouhodobou spolupráci na telekomunikačních projektech v ČR a celé EU.",
      contactCompany: "<strong>SkyTel Montage s.r.o.</strong><br>BUSINESS CENTRUM, Řeznická 1332<br>460&nbsp;01 Liberec, Česká republika",
      contactPerson: "Patrik Budinský – majitel, jednatel a technický ředitel<br>Tel.: +420&nbsp;739&nbsp;977&nbsp;089<br>E-mail: <a href=\"mailto:patrik.budinsky@skytelmontage.tech\">patrik.budinsky@skytelmontage.tech</a>",
      contactBilling: "Fakturace probíhá přes české s.r.o. s EU DIČ. Nastavení smluv a dokumentace lze přizpůsobit požadavkům objednatele.",

      partners: "Partneři",
      partnersNote: "Soon.",

      snakeTitle: "Snake",

      footerImpressum: "Impressum",
      footerPrivacy: "Ochrana soukromí",

      cookieText: "Tento web používá pouze technicky nezbytné soubory cookie (např. pro volbu jazyka a skrytí tohoto oznámení). Nepoužíváme analytické ani marketingové cookies.",
      cookieOk: "Rozumím",

      notFoundTitle: "404 – Stránka nenalezena",
      notFoundText: "Stránka, kterou hledáte, nebyla nalezena nebo již neexistuje.",
      notFoundBack: "Zpět na hlavní stránku",

      impressumTitle: "Impressum",
      impressumCompany: "<strong>SkyTel Montage s.r.o.</strong><br>BUSINESS CENTRUM, Řeznická 1332<br>460&nbsp;01 Liberec, Česká republika",
      impressumRepresented: "Zastoupená:",
      impressumCEO: "Patrik Budinský – majitel, jednatel a technický ředitel",
      impressumRegisterNote: "Údaje z obchodního rejstříku budou doplněny po zápisu.",
      impressumContactLabel: "Kontaktní údaje:",
      impressumContactLines: "Telefon: +420&nbsp;739&nbsp;977&nbsp;089<br>E-mail: <a href=\"mailto:patrik.budinsky@skytelmontage.tech\">patrik.budinsky@skytelmontage.tech</a>",

      privacyTitle: "Zásady ochrany osobních údajů",
      privacyIntro: "Tato stránka slouží jako firemní prezentace. Neshromažďujeme analytická ani marketingová data a nesdílíme údaje s třetími stranami.",
      privacyNoCookies: "Používáme pouze technicky nezbytné soubory cookie – konkrétně pro zapamatování zvoleného jazyka a skrytí lišty s informací o cookies. Bez nich by web nefungoval komfortně. Nepoužíváme cookies pro sledování návštěvníků, profilování nebo reklamu.",
      privacyLogFiles: "Server může standardně zaznamenávat technické logy (např. IP adresu, čas přístupu, URL a kód odpovědi) za účelem zajištění provozu, bezpečnosti a řešení incidentů. Tyto logy nejsou používány k marketingové analýze.",
      privacyContact: "V případě dotazů k ochraně osobních údajů nás můžete kontaktovat na adrese: <a href=\"mailto:patrik.budinsky@skytelmontage.tech\">patrik.budinsky@skytelmontage.tech</a>."
    },

    en: {
      noscriptText: "This website uses JavaScript for visual effects and language switching. Core information about our services is available even without JavaScript.",

      subtitle: "Specialised rope-access and electrical team for construction, modernisation and service of telecom sites within the Czech Republic and across the European Union.",
      roles: "Owner, managing director and technical lead: Patrik Budinský (internally referred to as “CEO of the Universe”).",

      joke1: "Some lessons come from training. Others from projects where a “partner” disappears together with your ropes and rescue kit.",
      joke2: "Today we climb only under our own name, with our own gear and our own responsibility.",

      servicesTitle: "What we do",
      servicesIntro1: "SkyTel Montage focuses on the construction, modernisation and service of mobile and radio network infrastructure within the Czech Republic and across the European Union. We provide complete installation of steelwork, antenna systems, transmission components and cable routes – from preparation and assembly to technical and photo documentation.",
      servicesIntro2: "Typical scopes include roll-out of new sites, swap and upgrade programmes, technology migration and corrective or emergency maintenance after faults or weather damage.",
      service1: "Installation and swap of mobile sites (2G–5G, microwave links, radio systems).",
      service2: "Assembly of steelwork, antenna systems, safe access routes and anchor points.",
      service3: "Cable routing, labelling, basic electrical checks and functional tests requested by the project.",
      service4: "Photo documentation and as-built documentation in DE/EN/CZ according to project standards.",

      approachTitle: "How we work on site",
      approachIntro: "The crew is organised so that planning, work at height and documentation go through one responsible person. This simplifies communication for the client and reduces the risk of misunderstandings between different subcontractors.",
      approach1: "Clear scope confirmation before deployment, including access conditions, rigging concept and expected documentation.",
      approach2: "Daily on-site risk assessment, short toolbox talk and coordination with the client or site manager.",
      approach3: "Clean execution with focus on cable management, corrosion protection and correct torque of mechanical joints.",
      approach4: "Final visual check, photo documentation and a concise report highlighting any open points.",

      safetyTitle: "Safety and qualification",
      safetyIntro: "Work at height and on live telecom infrastructure requires a combination of electrical qualification, PSAgA training and knowledge of safety regulations. We treat these areas as one package rather than „extra paperwork“.",
      safety1: "Electrical qualification according to NV 194/2022 §6/§7 (Czech standard), used as basis for Elektrofachkraft equivalence in projects.",
      safety2: "Regular PSAgA / rope-access training focused on telecom structures, rescue procedures and self-rescue scenarios.",
      safety3: "Internal documentation aligned with DGUV and national requirements (risk assessments, rescue concepts, tool and PPE records).",
      safety4: "Preference for long-term cooperation with the same team members instead of constantly rotating crews.",

      contactTitle: "Contact & cooperation",
      contactIntro: "For technical questions, project planning or documentation alignment, please use the direct contact below. We prefer clear scopes, realistic schedules and long-term cooperation on telecom projects in the Czech Republic and across the EU.",
      contactCompany: "<strong>SkyTel Montage s.r.o.</strong><br>BUSINESS CENTRUM, Řeznická 1332<br>460&nbsp;01 Liberec, Czech Republic",
      contactPerson: "Patrik Budinský – owner, managing director and technical lead<br>Tel.: +420&nbsp;739&nbsp;977&nbsp;089<br>E-mail: <a href=\"mailto:patrik.budinsky@skytelmontage.tech\">patrik.budinsky@skytelmontage.tech</a>",
      contactBilling: "Invoicing is carried out via a Czech limited company (s.r.o.) with EU VAT registration. Contract and documentation formats can be adapted to the client’s requirements.",

      partners: "Partners",
      partnersNote: "Soon.",

      snakeTitle: "Snake",

      footerImpressum: "Impressum",
      footerPrivacy: "Privacy",

      cookieText: "This website uses only technically necessary cookies (for example to remember your language selection and hide this notice). No analytics or marketing cookies are used.",
      cookieOk: "OK",

      notFoundTitle: "404 – Page not found",
      notFoundText: "The page you are looking for was not found or no longer exists.",
      notFoundBack: "Back to the main page",

      impressumTitle: "Impressum",
      impressumCompany: "<strong>SkyTel Montage s.r.o.</strong><br>BUSINESS CENTRUM, Řeznická 1332<br>460&nbsp;01 Liberec, Czech Republic",
      impressumRepresented: "Represented by:",
      impressumCEO: "Patrik Budinský – owner, managing director and technical lead",
      impressumRegisterNote: "Commercial register details will be added after registration.",
      impressumContactLabel: "Contact:",
      impressumContactLines: "Phone: +420&nbsp;739&nbsp;977&nbsp;089<br>E-mail: <a href=\"mailto:patrik.budinsky@skytelmontage.tech\">patrik.budinsky@skytelmontage.tech</a>",

      privacyTitle: "Privacy policy",
      privacyIntro: "This site is used as a company presentation. We do not collect analytics or marketing data and do not share data with third parties.",
      privacyNoCookies: "We use only technically necessary cookies – specifically to remember your language selection and to hide the cookie information banner. Without these cookies, the site would not function comfortably. We do not use cookies for tracking, profiling or advertising.",
      privacyLogFiles: "The server may record technical logs (e.g. IP address, access time, URL and response code) for the purpose of operation, security and incident handling. These logs are not used for marketing analysis.",
      privacyContact: "For questions regarding data protection, please contact us at: <a href=\"mailto:patrik.budinsky@skytelmontage.tech\">patrik.budinsky@skytelmontage.tech</a>."
    },

    de: {
      noscriptText: "Diese Website verwendet JavaScript für visuelle Effekte und die Sprachumschaltung. Zentrale Informationen zu unseren Leistungen sind auch ohne JavaScript verfügbar.",

      subtitle: "Spezialisiertes Rope-Access- und Elektrotechnik-Team für Aufbau, Modernisierung und Service von Telekomstandorten in der Tschechischen Republik und in der gesamten Europäischen Union.",
      roles: "Inhaber, Geschäftsführer und technischer Leiter: Patrik Budinský (intern als „CEO des Universums“ bezeichnet).",

      joke1: "Manche Lektionen stammen aus Schulungen. Andere aus Projekten, bei denen ein „Partner“ mitsamt Seilen und Rettungssatz verschwindet.",
      joke2: "Ergebnis: Heute klettern wir nur noch unter eigenem Namen, mit eigener Ausrüstung und eigener Verantwortung.",

      servicesTitle: "Leistungen",
      servicesIntro1: "SkyTel Montage konzentriert sich auf Aufbau, Modernisierung und Service von Mobilfunk- und Funknetz-Infrastruktur in der Tschechischen Republik sowie in der gesamten Europäischen Union. Wir liefern vollständige Montage von Stahlbau, Antennensystemen, Übertragungselementen und Kabelwegen – von der Vorbereitung über die Installation bis hin zur technischen- und Fotodokumentation.",
      servicesIntro2: "Typische Leistungen sind Rollout neuer Standorte, Swap- und Upgrade-Programme, Technologiemigration sowie reguläre und Notfallwartung nach Störungen oder Wetterschäden.",
      service1: "Montage und Swap von Mobilfunkstandorten (2G–5G, Richtfunkstrecken, Funksysteme).",
      service2: "Montage von Stahlstrukturen, Antennensystemen, sicheren Zugängen und Anschlagpunkten.",
      service3: "Kabelzug, strukturierte Verlegung, Beschriftung sowie grundlegende Elektroprüfungen und Funktionstests gemäß Projektvorgaben.",
      service4: "Fotodokumentation und As-Built-Dokumentation in DE/EN/CZ gemäß Projektanforderungen.",

      approachTitle: "Arbeitsweise auf der Baustelle",
      approachIntro: "Das Team ist so organisiert, dass Planung, Höhenarbeit und Dokumentation über eine verantwortliche Person laufen. Dies vereinfacht die Kommunikation für den Auftraggeber und reduziert das Risiko von Missverständnissen zwischen mehreren Subunternehmern.",
      approach1: "Klare Leistungsabstimmung vor dem Einsatz, einschließlich Zugangsbedingungen, Rigging-Konzept und erforderlicher Dokumentation.",
      approach2: "Tägliche Gefährdungsbeurteilung vor Ort, kurze Toolbox-Besprechung und Abstimmung mit Auftraggeber oder Bauleitung.",
      approach3: "Saubere Ausführung mit Fokus auf Kabelmanagement, Korrosionsschutz und korrektes Anzugsdrehmoment von Verbindungen.",
      approach4: "Abschließende Sichtprüfung, Fotodokumentation und kurzer Bericht mit eventuell offenen Punkten.",

      safetyTitle: "Sicherheit und Qualifikation",
      safetyIntro: "Arbeiten in der Höhe und an aktiver Telekommunikationsinfrastruktur erfordern eine Kombination aus Elektro-Qualifikation, PSAgA-Schulung und Kenntnis der Arbeitsschutzregeln. Diese Bereiche verstehen wir als Gesamtpaket, nicht nur als zusätzliche Bürokratie.",
      safety1: "Elektro-Qualifikation nach NV 194/2022 §6/§7 (CZ), verwendet als Grundlage für eine Einstufung als Elektrofachkraft in Projekten.",
      safety2: "Regelmäßige PSAgA- / Rope-Access-Schulungen mit Fokus auf Telekommunikationsstrukturen, Rettungsverfahren und Self-Rescue-Szenarien.",
      safety3: "Interne Dokumentation in Anlehnung an DGUV und nationale Anforderungen (Gefährdungsbeurteilungen, Rettungskonzepte, Werkzeug- und PSA-Nachweise).",
      safety4: "Bevorzugt werden langfristige Einsätze mit denselben Teammitgliedern statt ständig wechselnder Crews.",

      contactTitle: "Kontakt & Zusammenarbeit",
      contactIntro: "Für technische Rückfragen, Projektplanung oder Abstimmung von Dokumentation nutzen Sie bitte den direkten Kontakt unten. Bevorzugt werden klar definierte Leistungen, realistische Zeitpläne und langfristige Zusammenarbeit bei Telekommunikationsprojekten in der Tschechischen Republik und in der EU.",
      contactCompany: "<strong>SkyTel Montage s.r.o.</strong><br>BUSINESS CENTRUM, Řeznická 1332<br>460&nbsp;01 Liberec, Tschechische Republik",
      contactPerson: "Patrik Budinský – Inhaber, Geschäftsführer und technischer Leiter<br>Tel.: +420&nbsp;739&nbsp;977&nbsp;089<br>E-Mail: <a href=\"mailto:patrik.budinsky@skytelmontage.tech\">patrik.budinsky@skytelmontage.tech</a>",
      contactBilling: "Die Abrechnung erfolgt über eine tschechische s.r.o. mit EU-USt-ID. Vertragsmodelle und Dokumentation können an die Anforderungen des Auftraggebers angepasst werden.",

      partners: "Partner",
      partnersNote: "Soon.",

      snakeTitle: "Snake",

      footerImpressum: "Impressum",
      footerPrivacy: "Datenschutz",

      cookieText: "Diese Website verwendet nur technisch notwendige Cookies (z. B. zur Sprachwahl und zum Ausblenden dieses Hinweises). Analyse- oder Marketing-Cookies werden nicht eingesetzt.",
      cookieOk: "Verstanden",

      notFoundTitle: "404 – Seite nicht gefunden",
      notFoundText: "Die gesuchte Seite wurde nicht gefunden oder existiert nicht mehr.",
      notFoundBack: "Zurück zur Startseite",

      impressumTitle: "Impressum",
      impressumCompany: "<strong>SkyTel Montage s.r.o.</strong><br>BUSINESS CENTRUM, Řeznická 1332<br>460&nbsp;01 Liberec, Tschechische Republik",
      impressumRepresented: "Vertreten durch:",
      impressumCEO: "Patrik Budinský – Inhaber, Geschäftsführer und technischer Leiter",
      impressumRegisterNote: "Handelsregisterangaben werden nach Eintragung ergänzt.",
      impressumContactLabel: "Kontakt:",
      impressumContactLines: "Telefon: +420&nbsp;739&nbsp;977&nbsp;089<br>E-Mail: <a href=\"mailto:patrik.budinsky@skytelmontage.tech\">patrik.budinsky@skytelmontage.tech</a>",

      privacyTitle: "Datenschutzerklärung",
      privacyIntro: "Diese Seite dient als Unternehmenspräsentation. Es werden keine Analyse- oder Marketing-Daten erhoben und keine Daten an Dritte weitergegeben.",
      privacyNoCookies: "Wir verwenden nur technisch notwendige Cookies – insbesondere zur Speicherung der gewählten Sprache und zum Ausblenden des Cookie-Hinweises. Ohne diese Cookies wäre die Nutzung der Seite eingeschränkt. Es werden keine Cookies für Tracking, Profiling oder Werbung eingesetzt.",
      privacyLogFiles: "Der Server kann technische Log-Dateien erfassen (z. B. IP-Adresse, Zugriffszeit, URL und Antwortcode), um Betrieb, Sicherheit und Störungsbehebung zu gewährleisten. Diese Log-Dateien werden nicht für Marketingzwecke ausgewertet.",
      privacyContact: "Bei Fragen zum Datenschutz erreichen Sie uns unter: <a href=\"mailto:patrik.budinsky@skytelmontage.tech\">patrik.budinsky@skytelmontage.tech</a>."
    },

    kli: {
      noscriptText: "De'vam laDmeH JavaScript lo'lu' – 'ach De' potlh tu'lu'bej je.",

      subtitle: "telecom QeD, Qam Qu' je – Czech yuQDaq je EU HochDaq.",
      roles: "Owner, qumwI' je QeD DevwI': Patrik Budinský (ghomDaq „‘u’ CEO“ ponglu').",

      joke1: "wa'logh ghomDaq ghom – loghDaq \"jup\"vam lano'mey' je toD janmey je ghajtaHvIS nargh.",
      joke2: "DaH: pongmaj neH wIlo', janmaj neH wIlo', pIm DevwI' tu'lu'be'.",

      servicesTitle: "nuq wIDo",
      servicesIntro1: "SkyTel Montage Czech yuQDaq je EUDaq mobIl je radio patmey chenmoH, tI' je laH. Stahl, antenna'mey, rarwI' janmey je SIrghmey wIlan – nabvo', chenmoH, De' qon je.",
      servicesIntro2: "Qu'mey motlh: ghoS chu' (roll-out), choH (swap, upgrade), pat choH je QapHa'meH Qutlh.",
      service1: "mobIl patmey (2G–5G, microwave, radio) chenmoH je choH.",
      service2: "Stahl qachmey, antenna'mey, He' Qan je QanDu' lanlu'.",
      service3: "SIrghmey rar, De' ngaSbogh permey, pat patmey tI'lu'.",
      service4: "mIllogh De' je De' naQ (DE/EN/CZ) chenmoHlu'.",

      approachTitle: "chay' wIQap",
      approachIntro: "wa' DevwI'vaD nab, Qam Qu' je De' naQ boQlu', vaj Qum ngeDqu'.",
      approach1: "Qu' nab pup, He' nab, rigging nab je De' poQlu'bogh wIwuq pa' maSuch.",
      approach2: "jaj HochDaq Qan nab chu', ghomvaD QInHom je DevwI' je latlhpu'.",
      approach3: "QaptaHvIS, SIrghmey naQ, natlhHa' je wI'Ijchu'.",
      approach4: "rInDI', mIllogh De' naQ je potlhmey wI'ang.",

      safetyTitle: "Qan & laHmey",
      safetyIntro: "Qam Qu' je telecom pat Hutlhbe' HoS QeD, PSAgA Qeq je chut Sov.",
      safety1: "NV 194/2022 §6/§7 pat Dalo', 'oH HoS QeD pat ghajbogh Doch'e'.",
      safety2: "PSAgA / rope-access Qeq motlh, toD mIw le' je self-rescue mIw je.",
      safety3: "DGUV rur De'naQ, Qan nabmey, toD nabmey, janmey je OOPP ghItlhmey.",
      safety4: "ghom wa' rap maSaH – ghom choHqu'be'.",

      contactTitle: "Qum & malja'",
      contactIntro: "projektevmey, De' nab pagh De' naQvam qelchugh, Qum. nab law', poH qar je malja' nIl wImaS.",
      contactCompany: "<strong>SkyTel Montage s.r.o.</strong><br>BUSINESS CENTRUM, Řeznická 1332<br>460&nbsp;01 Liberec, Czech Republic",
      contactPerson: "Patrik Budinský – Owner, qumwI' je QeD DevwI'<br>Tel.: +420&nbsp;739&nbsp;977&nbsp;089<br>E-mail: <a href=\"mailto:patrik.budinsky@skytelmontage.tech\">patrik.budinsky@skytelmontage.tech</a>",
      contactBilling: "Huch QaymeH Czech s.r.o. (EU VAT) lo'lu'. nabmey je De' ghItlhmey malja' poQwI'vaD tIchoHlaH.",

      partners: "jupmey",
      partnersNote: "Soon.",

      snakeTitle: "Snake",

      footerImpressum: "Impressum",
      footerPrivacy: "Privacy",

      cookieText: "cookie le' neH lo'meH – Hol wIv De' je De'vam QIn Hal So'laH. nID, maHvaD De' lajbe'lu', je'lu'be'.",
      cookieOk: "maj",

      notFoundTitle: "404 – tu'lu'be'",
      notFoundText: "nuq DanejtaH tu'lu'be' – rIn puS pagh pImta'.",
      notFoundBack: "Qu'majDaq chegh",

      impressumTitle: "Impressum",
      impressumCompany: "<strong>SkyTel Montage s.r.o.</strong><br>BUSINESS CENTRUM, Řeznická 1332<br>460&nbsp;01 Liberec, Czech Republic",
      impressumRepresented: "DevwI':",
      impressumCEO: "Patrik Budinský – Owner, qumwI', QeD DevwI'",
      impressumRegisterNote: "malja' De' (Handelsregister) Deghmey ghItlhlu'DI', De'vam lutuQ.",
      impressumContactLabel: "Qum:",
      impressumContactLines: "Phone: +420&nbsp;739&nbsp;977&nbsp;089<br>E-mail: <a href=\"mailto:patrik.budinsky@skytelmontage.tech\">patrik.budinsky@skytelmontage.tech</a>",

      privacyTitle: "Privacy De'",
      privacyIntro: "De'vam malja' lanmeH jan neH. De' nIDmeH pagh marketing De' wIlo'be', not wIje'.",
      privacyNoCookies: "cookie lo'lu'neS neH Dochmeyvammo': Hol wIv, cookie QIn So' je. tracking, profile chenmoH pagh web quảng cáo wIlo'be'.",
      privacyLogFiles: "Server log De' Qan (IP, poH, URL, rap) ghajlaH – HoS, Qan, Qaw' DI'on je. marketingmeH Qul net chaw'be'.",
      privacyContact: "Privacy De' Dalo' DaneHchugh, Qum: <a href=\"mailto:patrik.budinsky@skytelmontage.tech\">patrik.budinsky@skytelmontage.tech</a>."
    }
  };

  const SEO = {
    cs: {
      title: "SkyTel Montage s.r.o. | Telekomunikační montáže a práce ve výškách v ČR a EU",
      desc: "SkyTel Montage – český specializovaný dodavatel výstavby, modernizace a servisu mobilních a rádiových sítí v České republice a celé EU. Rope-access tým s elektro kvalifikací NV 194/2022 §6/§7, PSAgA a dokumentací dle německých a českých norem."
    },
    en: {
      title: "SkyTel Montage s.r.o. | Telecom & Rope Access in CZ/EU",
      desc: "SkyTel Montage – specialist for construction, modernisation and service of mobile and radio networks within the Czech Republic and across the European Union. Rope-access crew with electrical qualification (NV 194/2022 §6/§7), PSAgA and documentation according to German and Czech standards."
    },
    de: {
      title: "SkyTel Montage s.r.o. | Telekom & Höhenarbeit in CZ/EU",
      desc: "SkyTel Montage – tschechischer Spezialist für Aufbau, Modernisierung und Service von Mobilfunk- und Funknetzen in der Tschechischen Republik und in der EU. Rope-Access-Team mit Elektro-Qualifikation NV 194/2022 §6/§7, PSAgA und Dokumentation nach deutschen und tschechischen Normen."
    },
    kli: {
      title: "SkyTel Montage | telecom QeD je Qam ghom",
      desc: "SkyTel Montage – Czech ghom, telecom QeD je Qam Qu' EU HochDaq."
    }
  };

  const SUPPORTED_LANGS = ['cs', 'en', 'de', 'kli'];
  const FAVICON_FRAMES = ['logo.png', 'logo-intro.png'];

  /* =========================
     Cookie helpers
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

    try {
      const url = new URL(location.href);
      url.searchParams.set('lang', lang);
      history.replaceState(null, '', url.toString());
    } catch {
      // ignore
    }
  }

  function setLang(lang) {
    const safe = SUPPORTED_LANGS.includes(lang) ? lang : 'en';
    const dict = I18N[safe] || I18N.en;

    document.documentElement.lang = safe;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const val = dict[key];
      if (!val) return;
      if (val.indexOf('<') !== -1) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
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

    try {
      const urlLang = new URL(location.href).searchParams.get('lang');
      if (SUPPORTED_LANGS.includes(urlLang)) return urlLang;
    } catch {
      // ignore
    }

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
      }, 50 + index * 3);
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
        ctx.fillStyle = 'rgba(0,0,0,0.6)';
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

    initCookieBanner();
    initFaviconAnimator();
    initBrandTitle();
    initMatrix();
    initSnake();
    initFloaters();
  });
})();
