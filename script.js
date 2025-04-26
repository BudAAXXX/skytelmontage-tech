document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const video = document.querySelector(".background-video");
  setTimeout(() => {
    intro.style.opacity = "0";
    intro.style.pointerEvents = "none";
    setTimeout(() => {
      intro.remove();
      video.play().catch(() => {});
    }, 500);
  }, 1000);

  const rollingText = "SkyTel Montage";
  const rollingTarget = document.getElementById("rolling-text");
  let i = 0;
  (function typeRolling() {
    if (i < rollingText.length) {
      rollingTarget.textContent += rollingText[i++];
      setTimeout(typeRolling, 100);
    }
  })();

  const mottoText = "Nepřekonáváš věž – překonáváš sám sebe.";
  const mottoEl = document.getElementById("motto");
  let m = 0;
  setTimeout(function typeMotto() {
    if (m < mottoText.length) {
      mottoEl.textContent += mottoText[m++];
      setTimeout(typeMotto, 70);
    }
  }, 1500);

  const translations = {
    cz: {
      disclaimer: "Tento web byl vytvořen za 23s s pomocí AI. Nepředstavuje finální podobu webu.",
      powered: "Powered by SkyTel Montage | Glitchy, Geeky, Gorgeous ✨",
      jokes: [
        "To není bug, to je featura!",
        "Visím, tedy jsem.",
        "Kód bez komentáře je jako stěna bez chytů.",
        "Chyba mezi židlí a klávesnicí.",
        "Debugování je jako hledání černé smyčky v noci."
      ]
    },
    en: {
      disclaimer: "This website was created in 23s with the help of AI. Not the final version.",
      powered: "Powered by SkyTel Montage | Glitchy, Geeky, Gorgeous ✨",
      jokes: [
        "It's not a bug, it's a feature!",
        "I hang, therefore I am.",
        "Coding without comments is climbing without gear.",
        "Error between chair and keyboard.",
        "Debugging is like searching for a ghost in a cave."
      ]
    },
    de: {
      disclaimer: "Diese Website wurde in 23 Sekunden mit KI erstellt. Nicht die finale Version.",
      powered: "Powered by SkyTel Montage | Glitchy, Geeky, Gorgeous ✨",
      jokes: [
        "Das ist kein Bug, das ist ein Feature!",
        "Ich hänge, also bin ich.",
        "Ohne Kommentare ist Code wie ein Seil ohne Knoten.",
        "Fehler sitzt vor dem Monitor.",
        "Debuggen ist wie Geisterjagd im Dunkeln."
      ]
    },
    kli: {
      disclaimer: "QIn vIchenmoHta' 23 lupmey lo'lu'taHvIS. not Qav pat.",
      powered: "Duybogh SkyTel Montage | Glitchy, Geeky, Gorgeous ✨",
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
    const t = translations[lang] || translations.en;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (t[key]) el.textContent = t[key];
    });
    const jokeInner = document.querySelector(".joke-inner");
    if (!jokeInner) return;
    jokeInner.textContent = t.jokes[Math.random() * t.jokes.length | 0];
    setInterval(() => {
      jokeInner.textContent = t.jokes[Math.random() * t.jokes.length | 0];
    }, 5000);
  }

  document.querySelectorAll(".languages button").forEach(btn =>
    btn.addEventListener("click", () => applyTranslations(btn.dataset.lang))
  );
  applyTranslations((navigator.language || navigator.userLanguage).slice(0,2));

  const images = [
    "Lano.png","brzda.png","grillon(1).png","haky.png","jummar.png",
    "karabina0.png","karabina01.png","karabina02.png","karabina08.png",
    "karabina13.png","karabina15.png","karabina17.png","karabina18.png",
    "karabina19.png","karabina20.png","karabina26.png","karabina28.png",
    "karabina29.png","kladka01.png","kladka02.png","kladka04.png",
    "kotvevnik.png","logo.png","obrtlik.png","ocelka01.png","ocelka02.png",
    "ocelka03.png","oecelka04.png","rig.png","sada.png","sedacka.png",
    "sedak.png","smyce01.png","vak.png","vak03.png","vak05.png"
  ];

  const box = document.getElementById("moving-box"),
        imgEl = document.getElementById("moving-image");
  let x = 50, y = 50,
      isMob = window.innerWidth < 768,
      dx = isMob ? 1 : 2, dy = isMob ? 1 : 2,
      idx = Math.random() * images.length | 0;
  imgEl.src = main/${images[idx]};

  (function anim(){
    const vw = visualViewport?.width || window.innerWidth,
          vh = visualViewport?.height || window.innerHeight,
          r = box.getBoundingClientRect();

    if (x + r.width >= vw || x <= 0) {
      dx *= -1; idx = (idx + 1) % images.length;
      imgEl.src = main/${images[idx]};
    }
    if (y + r.height >= vh || y <= 0) {
      dy *= -1; idx = (idx + 1) % images.length;
      imgEl.src = main/${images[idx]};
    }

    x += dx; y += dy;
    box.style.left = ${x}px;
    box.style.top = ${y}px;
    requestAnimationFrame(anim);
  })();
});
