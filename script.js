document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const video = document.getElementById("bgVideo");
  const rollingTarget = document.getElementById("rolling-text");
  const mottoEl = document.getElementById("motto");
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
      company: "SkyTel Montage",
      motto: "Nepřekonáváš věž – překonáváš sám sebe.",
      disclaimer: "Tento web byl vytvořen za 23s pomocí AI. Nepředstavuje finální podobu webu.",
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
      company: "SkyTel Montage",
      motto: "You don't overcome the tower – you overcome yourself.",
      disclaimer: "This website was created in 23s with AI. Not the final version.",
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
      company: "SkyTel Montage",
      motto: "Du überwindest nicht den Turm – du überwindest dich selbst.",
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
      company: "SkyTel Montage",
      motto: "notlh veS Hutlh 'oH vaj SuvwI' qeylIS.",
      disclaimer: "23 tupmey lo'taH QInmey vIchenmoHpu'.",
      powered: "SkyTel Montage Duy | Glitchy, Geeky, Gorgeous ✨",
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
    if (jokeInner) {
      jokeInner.textContent = t.jokes[Math.floor(Math.random() * t.jokes.length)];
      setInterval(() => {
        jokeInner.textContent = t.jokes[Math.floor(Math.random() * t.jokes.length)];
      }, 5000);
    }
  }

  document.querySelectorAll(".languages button").forEach(btn => {
    btn.addEventListener("click", () => applyTranslations(btn.dataset.lang));
  });

  applyTranslations((navigator.language || navigator.userLanguage).slice(0, 2));

  // Rolling Text pro název
  const rollingText = translations.en.company;
  let i = 0;
  (function typeRolling() {
    if (i < rollingText.length) {
      rollingTarget.textContent += rollingText[i++];
      setTimeout(typeRolling, 100);
    }
  })();

  // Motto
  const mottoText = translations.en.motto;
  let m = 0;
  setTimeout(function typeMotto() {
    if (m < mot
