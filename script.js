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
      poweredBy: "Vytvořeno BudAA za 1 hodinu s pomocí AI.",
      note: "Stránka slouží jako kontaktní vizitka, nikoliv finální verze.",
      jokes: [
        "To není bug, to je feature!",
        "Visím, tedy jsem.",
        "Kód bez komentáře je jako stěna bez chytů.",
        "Chyba mezi židlí a klávesnicí.",
        "Debugování je jako hledání černé smyčky v noci.",
        "Backup? To udělám příště.",
        "Síť je dole? Pondělí potvrzeno.",
        "Neptej se proč, ale funguje to.",
        "Bez lana není výšek!",
        "Každý pád začíná ignorací smyce."
      ]
    },
    en: {
      motto: "You don't overcome the tower – you overcome yourself.",
      poweredBy: "Created by BudAA within 1 hour with AI support.",
      note: "This page serves as a contact card, not a final website.",
      jokes: [
        "It's not a bug, it's a feature!",
        "I hang, therefore I am.",
        "Coding without comments is like climbing without gear.",
        "Error between chair and keyboard.",
        "Debugging is like searching for a ghost loop at night.",
        "Backup? Maybe someday.",
        "Network down? Must be Monday.",
        "Don't ask why, but it works.",
        "Without a rope, no climbing!",
        "Every fall starts with neglect."
      ]
    },
    de: {
      motto: "Du überwindest nicht den Turm – du überwindest dich selbst.",
      poweredBy: "Erstellt von BudAA in einer Stunde mithilfe von KI.",
      note: "Diese Seite dient als Kontaktkarte, nicht als finale Version.",
      jokes: [
        "Das ist kein Bug, das ist ein Feature!",
        "Ich hänge, also bin ich.",
        "Code ohne Kommentare ist wie Klettern ohne Seil.",
        "Fehler sitzt vor dem Bildschirm.",
        "Debugging ist wie Geisterjagd in der Nacht.",
        "Backup? Vielleicht später.",
        "Netzwerk weg? Montag eben.",
        "Warum funktioniert es? Keine Ahnung.",
        "Ohne Seil kein Klettern!",
        "Jeder Sturz beginnt mit Ignoranz."
      ]
    },
    kli: {
      motto: "notlh veS Hutlh 'oH vaj SuvwI' qeylIS.",
      poweredBy: "BudAA ghItlh lo' 1 rep je QIn.",
      note: "QInmey DIlmeH pagh pong - QIn neH!",
      jokes: [
        "Qagh'a'? Qubmey vIneH!",
        "jIyIt, vaj jIyIn.",
        "QInwIjDaq chut neH.",
        "Qapla' vIneH.",
        "ghorgh SuvwI' vIloS?",
        "veS 'oHbej!",
        "HoHlu'meH Qapbe' pong.",
        "pe'vIl vIlo'!",
        "SuSbe' 'ach nIvbogh.",
        "Qapchu'!"
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
    }, 5000);
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
        bgVideo.play().catch(err => console.error('Video nepřehráno:', err));
      }
    }, 2000);
  }, 2000);

  // Matrix efekt po 30 sekundách
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
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
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

  // Pohyb boxu s vybavením
  let x = 100, y = 100, dx = 2.5, dy = 2;

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
