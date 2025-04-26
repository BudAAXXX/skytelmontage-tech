document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const video = document.getElementById("bgVideo");
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
      jokes: [
        "To není bug, to je featura!",
        "Visím, tedy jsem.",
        "Kód bez komentáře je jako stěna bez chytů.",
        "Chyba mezi židlí a klávesnicí.",
        "Debugování je jako hledání černé smyčky v noci."
      ]
    },
    en: {
      motto: "You don't overcome the tower – you overcome yourself.",
      jokes: [
        "It's not a bug, it's a feature!",
        "I hang, therefore I am.",
        "Coding without comments is like climbing without gear.",
        "Error between chair and keyboard.",
        "Debugging is like searching for a ghost in a cave."
      ]
    },
    de: {
      motto: "Du überwindest nicht den Turm – du überwindest dich selbst.",
      jokes: [
        "Das ist kein Bug, das ist ein Feature!",
        "Ich hänge, also bin ich.",
        "Code ohne Kommentare ist wie ein Seil ohne Knoten.",
        "Fehler sitzt vor dem Monitor.",
        "Debugging ist wie Geisterjagd im Dunkeln."
      ]
    },
    kli: {
      motto: "notlh veS Hutlh 'oH vaj SuvwI' qeylIS.",
      jokes: [
        "Qagh'a'? Qubmey vIneH!",
        "jIyIt, vaj jIyIn.",
        "QInwIjDaq chut neH",
        "cha'DIch nuqneH vIlo'laHbe'",
        "'ay' rurbogh QIDwI'."
      ]
    }
  };

  function applyTranslations(lang) {
    const t = translations[lang] || translations.cz;
    mottoEl.textContent = t.motto;
    updateJoke(t.jokes);
  }

  function updateJoke(jokes) {
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

  applyTranslations("cz"); // výchozí jazyk

  setTimeout(() => {
    intro.style.opacity = "0";
    intro.style.pointerEvents = "none";
    setTimeout(() => {
      intro.remove();
      if (video) {
        video.muted = true;
        video.play().catch(err => console.error('Video nepřehráno: ', err));
      }
    }, 3000);
  }, 2000);

  let x = 100, y = 100;
  let dx = window.innerWidth < 768 ? 1 : 2;
  let dy = window.innerWidth < 768 ? 1 : 2;

  (function animateMovingBox() {
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
  })();
});
