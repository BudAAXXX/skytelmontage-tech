document.addEventListener("DOMContentLoaded", () => {
  // Intro fade + autoplay video
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

  // Rolující název
  const rollingText = "SkyTel Montage";
  const rollingTarget = document.getElementById("rolling-text");
  let i = 0;
  function typeRolling() {
    if (i < rollingText.length) {
      rollingTarget.textContent += rollingText.charAt(i);
      i++;
      setTimeout(typeRolling, 150);
    }
  }
  typeRolling();

  // Překlady a vtipy
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
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) el.textContent = t[key];
    });

    const jokeBox = document.querySelector(".joke-inner");
    if (!jokeBox) return;
    setInterval(() => {
      const randomJoke = t.jokes[Math.floor(Math.random() * t.jokes.length)];
      jokeBox.textContent = randomJoke;
    }, 5000);
  }

  document.querySelectorAll(".languages button").forEach(btn => {
    btn.addEventListener("click", () => applyTranslations(btn.dataset.lang));
  });

  const browserLang = (navigator.language || navigator.userLanguage).slice(0, 2);
  applyTranslations(browserLang);
});
