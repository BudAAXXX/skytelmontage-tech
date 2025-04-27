document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const bgVideo = document.getElementById("bgVideo");
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
      poweredBy: "Vytvořil BudAA za jednu hodinu s AI.",
      note: "Tato stránka neslouží jako finální prezentace. Slouží jako vizitka a kontakt.",
      jokes: [
        "To není bug, to je feature!",
        "Visím, tedy jsem.",
        "Kód bez komentáře je jako stěna bez chytů.",
        "Chyba mezi židlí a klávesnicí.",
        "Debugování je jako hledání černé smyčky v noci.",
        "Backup? To udělám příště.",
        "Bez chyb není pokroku.",
        "Síť je dole? Zase pondělí.",
        "Neptej se proč, ale funguje to.",
        "Kompiluji, tedy žiji.",
        "Vždycky to byla cache!",
        "Ovládám kabely jako šaman.",
        "Bez lana není výšek!",
        "Smyčky? Kód i horolezení!",
        "Baterka je nový Bůh.",
        "Když spadneš, je pozdě šetřit karabiny.",
        "Čím delší smyčka, tím kratší pád.",
        "Kódujeme jako šplháme: krok za krokem.",
        "Výška je relativní – pád je absolutní.",
        "Pevné připojení? Ano, a taky k zemi!"
      ]
    },
    en: {
      motto: "You don't overcome the tower – you overcome yourself.",
      poweredBy: "Created by BudAA with AI in one hour.",
      note: "This website is a contact and presentation card, not the final version.",
      jokes: [
        "It's not a bug, it's a feature!",
        "I hang, therefore I am.",
        "Coding without comments is like climbing without gear.",
        "Error between chair and keyboard.",
        "Debugging is like searching for a black loop at night.",
        "Backup? Maybe later.",
        "Without bugs, no progress.",
        "Network down? It's Monday.",
        "Don't ask why, but it works.",
        "Compiling... I exist.",
        "Always blame the cache!",
        "Cables are my magic ropes.",
        "Without a rope, no climbing!",
        "Loops? In code and in climbing!",
        "Flashlight is the new God.",
        "Save your carabiners before it's too late.",
        "Longer sling, shorter fall.",
        "We code like we climb: step by step.",
        "Height is relative, falling is absolute.",
        "Strong connection? Yes, both WiFi and life-line!"
      ]
    },
    de: {
      motto: "Du überwindest nicht den Turm – du überwindest dich selbst.",
      poweredBy: "Erstellt von BudAA mit KI in einer Stunde.",
      note: "Diese Website dient als Visitenkarte und Kontaktseite, nicht als endgültige Version.",
      jokes: [
        "Das ist kein Bug, das ist ein Feature!",
        "Ich hänge, also bin ich.",
        "Code ohne Kommentare ist wie Klettern ohne Ausrüstung.",
        "Fehler sitzt vor dem Monitor.",
        "Debugging ist wie Geisterjagd im Dunkeln.",
        "Backup? Später vielleicht.",
        "Ohne Fehler kein Fortschritt.",
        "Netzwerk ausgefallen? Montag eben.",
        "Warum funktioniert das? Keine Ahnung.",
        "Kompiliere... existiere.",
        "Immer ist der Cache schuld!",
        "Seile sind mein Zauber.",
        "Ohne Seil kein Klettern!",
        "Schlingen? Im Code und am Gurt.",
        "Taschenlampe ist der neue Gott.",
        "Karabiner sparen? Keine gute Idee.",
        "Je länger die Schlinge, desto kürzer der Fall.",
        "Wir codieren wie wir klettern: Schritt für Schritt.",
        "Höhe ist relativ, Fallen ist absolut.",
        "Starke Verbindung? WLAN und Seil!"
      ]
    },
    kli: {
      motto: "notlh veS Hutlh 'oH vaj SuvwI' qeylIS.",
      poweredBy: "Qel BudAA lo'taH wa' rep.",
      note: "nuqneH - 'oH jangbe' vay'.",
      jokes: [
        "Qagh'a'? Qubmey vIneH!",
        "jIyIt, vaj jIyIn.",
        "QInwIjDaq chut neH",
        "cha'DIch nuqneH vIlo'laHbe'",
        "'ay' rurbogh QIDwI'.",
        "yIQaw'! pe'vIl wIlo'!",
        "Qel neH wIj val.",
        "cha'logh QongtaHvIS QIH.",
        "HIQ vIlo'chugh, Qapbej!",
        "SuS vIlo'chugh, maghoS.",
        "lojmItmey tIpoSmoH!",
        "Sevbe'ghach!",
        "QumpInmey vItoy'!",
        "mInDu' vIleghlaHbe'.",
        "romuluSngan vImuv!",
        "Dochmey pe'!",
        "ghorgh HoS!",
        "maHIvtaH!",
        "SuS vIlaHbe'.",
        "He' vI'ogh!"
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
    jokeInner.textContent = jokes[Math.floor(Math.random() * jokes.length)];
    setInterval(() => {
      jokeInner.textContent = jokes[Math.floor(Math.random() * jokes.length)];
    }, 7000);
  }

  document.querySelectorAll(".languages button").forEach(btn => {
    btn.addEventListener("click", () => {
      applyTranslations(btn.dataset.lang);
    });
  });

  // Default language
  applyTranslations("cz");

  // Intro zmizení
  setTimeout(() => {
    intro.style.opacity = "0";
    intro.style.pointerEvents = "none";
    setTimeout(() => {
      intro.remove();
      if (bgVideo) {
        bgVideo.muted = true;
        bgVideo.play().catch(err => console.error('Video nepřehráno: ', err));
      }
    }, 2000);
  }, 2000);

  // Matrix efekt po 30s
  setTimeout(() => {
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
      ctx.fillStyle = "#00ff00";
      ctx.font = "15px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = Math.random() > 0.5 ? "0" : "1";
        ctx.fillText(text, i * 15, drops[i] * 15);
        if (drops[i] * 15 > height && Math.random() > 0.975) drops[i] = 0;
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

  // Pohyb vybavení
  let x = 100, y = 100, dx = 2, dy = 2;
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
