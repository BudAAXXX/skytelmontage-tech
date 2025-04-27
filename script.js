document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const video = document.getElementById("bgVideo");
  const matrix = document.getElementById("matrix");
  const mottoEl = document.getElementById("motto");
  const jokeInner = document.querySelector(".joke-inner");
  const box = document.getElementById("moving-box");
  const imgEl = document.getElementById("moving-image");

  const images = [
    "Lano.png", "brzda.png", "grillon(1).png", "haky.png", "jummar.png",
    "karabina0.png", "karabina01.png", "karabina02.png", "karabina08.png",
    "karabina13.png", "karabina15.png", "karabina17.png", "karabina18.png",
    "karabina19.png", "karabina20.png", "karabina26.png", "karabina28.png",
    "karabina29.png", "kladka01.png", "kladka02.png", "kladka04.png",
    "kotvevnik.png", "obrtlik.png", "ocelka01.png", "ocelka02.png",
    "ocelka03.png", "oecelka04.png", "rig.png", "sada.png",
    "sedacka.png", "sedak.png", "smyce01.png", "vak.png",
    "vak03.png", "vak05.png"
  ];

  const translations = {
    cz: {
      motto: "Nepřekonáváš věž – překonáváš sám sebe.",
      poweredBy: "Powered by BudAA s AI za jednu hodinku",
      note: "Tato stránka slouží jako online vizitka a kontakt pro SkyTel Montage. Kompletní webová prezentace je v přípravě.",
      jokes: [
        "To není bug, to je featura!",
        "Visím, tedy jsem.",
        "Kód bez komentáře je jako stěna bez chytů.",
        "Chyba mezi židlí a klávesnicí.",
        "Debugování je hledání v temnotě.",
        "Výška? Jen další bug v matrixu!",
        "Fixnul jsem to páskou. Lezeckou i programovací.",
        "Chytíš se držáku nebo se chytíš za hlavu?",
        "Skript padl? Spadni s grácií!",
        "Záloha je tvoje jištění – i v IT!",
        "Síť bez signálu = stěna bez chytů.",
        "Výškový routering – aneb tanec na střeše.",
        "Vysílač bez napětí = ajťák bez kávy.",
        "Připojka? Lano nebo ethernet?",
        "Slaňování? Update firmware!",
        "Chybová hláška: přehřívání lanovodů!",
        "Backend? Frontend? Radši Boulderend.",
        "Deploy? Zašroubuj a běž.",
        "Server spadl? Doufej, že jsi nezapomněl lano.",
        "ISP = Internet Spletený Pavučinou."
      ]
    },
    en: {
      motto: "You don't overcome the tower – you overcome yourself.",
      poweredBy: "Powered by BudAA with AI in just one hour",
      note: "This page serves as an online business card and contact for SkyTel Montage. Full website is under construction.",
      jokes: [
        "It's not a bug, it's a feature!",
        "I hang, therefore I am.",
        "Coding without comments is like climbing without gear.",
        "Error between chair and keyboard.",
        "Debugging is ghost hunting in the dark.",
        "Height? Just another bug in the system!",
        "I fixed it with duct tape. Climbing and coding.",
        "Grip the wall or grip your head?",
        "Script crashed? Fall with style!",
        "Backup is your belay system – even in IT!",
        "Network down = wall with no grips.",
        "Roof-top routing – dance with antennas!",
        "Transmitter offline = programmer without coffee.",
        "Connection? Rope or Ethernet?",
        "Rappelling? Updating firmware!",
        "Warning: Overheating ropes detected!",
        "Backend? Frontend? Better go Boulderend.",
        "Deploy? Bolt and go.",
        "Server crash? Hope you tied your knot!",
        "ISP = Intertwined Spider Protocol."
      ]
    },
    de: {
      motto: "Du überwindest nicht den Turm – du überwindest dich selbst.",
      poweredBy: "Powered by BudAA mit KI in nur einer Stunde",
      note: "Diese Seite dient als Online-Visitenkarte und Kontakt f\u00fcr SkyTel Montage. Eine vollständige Website ist in Vorbereitung.",
      jokes: [
        "Das ist kein Bug, das ist ein Feature!",
        "Ich hänge, also bin ich.",
        "Code ohne Kommentare ist wie Klettern ohne Seil.",
        "Fehler sitzt vor dem Monitor.",
        "Debugging ist Geisterjagd im Dunkeln.",
        "Höhe? Nur ein weiterer Fehler im System!",
        "Mit Klebeband repariert. Beim Klettern und Coden.",
        "Greife den Griff oder deinen Kopf!",
        "Skript abgestürzt? Mit Stil fallen!",
        "Backup ist dein Sicherungssystem – auch in der IT!",
        "Netzwerk offline = Wand ohne Griffe.",
        "Dachrouting – Tanz mit Antennen!",
        "Sender tot = Programmierer ohne Kaffee.",
        "Anschluss? Seil oder Ethernet?",
        "Abseilen? Firmware aktualisieren!",
        "Warnung: Überhitzte Seile entdeckt!",
        "Backend? Frontend? Lieber Bouldern.",
        "Deploy? Schrauben und los!",
        "Server abgestürzt? Knoten vergessen?",
        "ISP = Ineinander Spinnen Protokoll."
      ]
    },
    kli: {
      motto: "notlh veS Hutlh 'oH vaj SuvwI' qeylIS.",
      poweredBy: "BudAA AI wa’ repDaq Qul",
      note: "De'vamDaq SkyTel Montage QIn 'oH. wIteb De'vam wovbe'bogh 'e' ghoS.",
      jokes: [
        "Qagh'a'? Qubmey vIneH!",
        "jIyIt, vaj jIyIn.",
        "QInwIjDaq chut neH.",
        "cha'DIch nuqneH vIlo'laHbe'.",
        "'ay' rurbogh QIDwI'.",
        "Hoch? pe'vIl vIQaw'.",
        "ghItlhwIj lugh? qet pa'!",
        "wIj puH HIq SIQ.",
        "SeHlaw HIvje'! jIyIn.",
        "DopwIj vIbuS 'ej baH!",
        "HaSta Qaw' – SIQmoH.",
        "naQmey DaSam, Hovmey HIq.",
        "Qaw' vItlhutlh – tugh!",
        "pa' vIghro' vISam – chaq?",
        "vIghro' HochDu'vaD Qong!",
        "qetmeH 'oH neH.",
        "vISaHbe' – pa' vIlaw'.",
        "ghojmoHwI' qon – vItlhutlh.",
        "Qupbogh SeHlaw bIghHa'.",
        "mach Qongbogh neH!"
      ]
    }
  };

  function applyTranslations(lang) {
    const t = translations[lang] || translations.cz;
    mottoEl.textContent = t.motto;
    document.getElementById('powered-by').textContent = t.poweredBy;
    document.getElementById('note').textContent = t.note;
    updateJokes(t.jokes);
  }

  function updateJokes(jokes) {
    if (!jokeInner) return;
    jokeInner.textContent = jokes[Math.floor(Math.random() * jokes.length)];
    setInterval(() => {
      jokeInner.textContent = jokes[Math.floor(Math.random() * jokes.length)];
    }, 5000);
  }

  document.querySelectorAll(".languages button").forEach(btn => {
    btn.addEventListener("click", () => {
      applyTranslations(btn.dataset.lang);
    });
  });

  applyTranslations("cz"); // Výchozí jazyk

  setTimeout(() => {
    intro.style.opacity = "0";
    intro.style.pointerEvents = "none";
    setTimeout(() => {
      intro.remove();
      if (video) {
        video.muted = true;
        video.play().catch(err => console.error('Video nepřehráno: ', err));
        document.getElementById('company-name').classList.add('fade-in');
        document.getElementById('motto').classList.add('fade-in');
      }
    }, 2000);
  }, 2000);

  // Matrix efekt po 30 sekundách
  setTimeout(() => {
    video.pause();
    matrix.style.opacity = "1";
    startMatrix();
  }, 30000);

  function startMatrix() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const columns = Math.floor(width / 15);
    const drops = Array(columns).fill(1);

    const ctx = createMatrixCanvas();
    setInterval(() => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 70%)`;
      ctx.font = "15px monospace";

      for (let i = 0; i < drops.length; i++) {
        const char = Math.random() < 0.003 ? "W+A" : (Math.random() > 0.5 ? "0" : "1");
        ctx.fillText(char, i * 15, drops[i] * 15);

        if (drops[i] * 15 > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }, 70);
  }

  function createMatrixCanvas() {
    const canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    matrix.appendChild(canvas);
    return canvas.getContext("2d");
  }

  // Pohyb boxu vybavení
  let x = 100, y = 100;
  let dx = 2.5, dy = 2;

  function animateMovingBox() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const r = box.getBoundingClientRect();

    if (x + r.width >= vw || x <= 0) {
      dx *= -1;
      imgEl.src = images[Math.floor(Math.random() * images.length)];
    }
    if (y + r.height >= vh || y <= 0) {
      dy *= -1;
      imgEl.src = images[Math.floor(Math.random() * images.length)];
    }

    x += dx;
    y += dy;
    box.style.left = `${x}px`;
    box.style.top = `${y}px`;

    requestAnimationFrame(animateMovingBox);
  }

  requestAnimationFrame(animateMovingBox);
});
