document.addEventListener("DOMContentLoaded", () => {
  // INTRO
  const intro = document.getElementById("intro");
  const video = document.querySelector(".background-video");
  setTimeout(() => {
    intro.style.opacity = "0";
    intro.style.pointerEvents = "none";
    setTimeout(() => {
      intro.remove();
      video.play().catch(() => {});
    }, 1000);
  }, 3000);

  // MOTTO
  const mottoText = "Nepřekonáváš věž – překonáváš sám sebe.";
  const mottoEl = document.getElementById("motto");
  let i = 0;
  function typeMotto() {
    if (i < mottoText.length) {
      mottoEl.textContent += mottoText.charAt(i);
      i++;
      setTimeout(typeMotto, 75);
    }
  }
  typeMotto();

  // PŘEKLADY
  const translations = {
    en: {
      logoText: "⚡ SkyTel Montage ⚡",
      facebook: "Facebook",
      linkedin: "LinkedIn",
      github: "GitHub",
      disclaimer: "This website was created in 23s with the help of AI. It does not represent the final version. Thank you for understanding.",
      powered: "Powered by SkyTel Montage | Glitchy, Geeky, Gorgeous ✨",
      jokes: [
        "404 error: Joke not found 🤖",
        "It's not a bug, it's a feature!",
        "I climb, therefore I am.",
        "Life is in beta.",
        "Offline = dead, online = alive?"
      ]
    },
    cz: {
      logoText: "⚡ SkyTel Montage ⚡",
      facebook: "Facebook",
      linkedin: "LinkedIn",
      github: "GitHub",
      disclaimer: "Tento web byl vytvořen za 23s s pomocí AI. Nepředstavuje finální podobu webu. Díky za pochopení.",
      powered: "Powered by SkyTel Montage | Glitchy, Geeky, Gorgeous ✨",
      jokes: [
        "404 error: Vtip nenalezen 🤖",
        "To není bug, to je featura!",
        "Visím, tedy jsem.",
        "Život je beta verze.",
        "Offline = mrtvý, online = šťastný?"
      ]
    },
    de: {
      logoText: "⚡ SkyTel Montage ⚡",
      facebook: "Facebook",
      linkedin: "LinkedIn",
      github: "GitHub",
      disclaimer: "Diese Website wurde in 23s mit Hilfe von KI erstellt. Sie stellt nicht die endgültige Version dar. Danke für Ihr Verständnis.",
      powered: "Powered by SkyTel Montage | Glitchy, Geeky, Gorgeous ✨",
      jokes: [
        "404 Fehler: Witz nicht gefunden 🤖",
        "Das ist kein Bug, das ist ein Feature!",
        "Ich hänge, also bin ich.",
        "Das Leben ist eine Beta-Version.",
        "Offline = tot, online = lebendig?"
      ]
    },
    kli: {
      logoText: "⚡ SkyTel Montage ⚡",
      facebook: "QIn vIghro'",
      linkedin: "nIvbogh Qun",
      github: "ghItHub",
      disclaimer: "23 lupmey lo'lu'taHvIS QIn vIchenmoHpu'. vItlhutlhlaHbe' Qav pat.",
      powered: "Duybogh SkyTel Montage | Glitchy, Geeky, Gorgeous ✨",
      jokes: [
        "404 Qagh: HIvje' pagh tu'lu' 🤖",
        "Qagh'a'? Qubmey vIneH!",
        "jIyIt, vaj jIyIn.",
        "yIn 'oH beta DuQ.",
        "Offline = Hegh, Online = yIn?"
      ]
    }
  };

  // APLIKACE PŘEKLADU
  let jokeInterval;
  function applyTranslations(lang) {
    const dict = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });

    const jokeBox = document.getElementById("joke-box");
    if (jokeInterval) clearInterval(jokeInterval);
    jokeBox.textContent = dict.jokes[Math.floor(Math.random() * dict.jokes.length)];
    jokeInterval = setInterval(() => {
      jokeBox.textContent = dict.jokes[Math.floor(Math.random() * dict.jokes.length)];
    }, 5000);
  }

  document.querySelectorAll(".languages button").forEach(btn => {
    btn.addEventListener("click", () => {
      applyTranslations(btn.dataset.lang);
    });
  });

  const browserLang = (navigator.language || navigator.userLanguage).slice(0, 2).toLowerCase();
  applyTranslations(browserLang);

  // KOSTKA
  const imageList = [
    "Lano.png", "brzda.png", "grillon(1).png", "haky.png", "jummar.png",
    "karabina0.png", "karabina01.png", "karabina02.png", "karabina08.png", "karabina13.png",
    "karabina15.png", "karabina17.png", "karabina18.png", "karabina19.png", "karabina20.png",
    "karabina26.png", "karabina28.png", "karabina29.png", "kladka01.png", "kladka02.png",
    "kladka04.png", "kotvevnik.png", "logo.png", "obrtlik.png", "ocelka01.png",
    "ocelka02.png", "ocelka03.png", "oecelka04.png", "rig.png", "sada.png",
    "sedacka.png", "sedak.png", "smyce01.png", "vak.png", "vak03.png", "vak05.png"
  ];

  const box = document.createElement("div");
  box.id = "moving-box";
  const boxImg = document.createElement("img");
  box.appendChild(boxImg);
  document.body.appendChild(box);

  let x = 50, y = 50, dx = 2, dy = 2, imgIndex = 0;
  boxImg.src = `main/${imageList[imgIndex]}`;
  boxImg.alt = "Pohyblivá fotka";

  function animateBox() {
    const rect = box.getBoundingClientRect();
    if (x + rect.width >= window.innerWidth || x <= 0) {
      dx *= -1;
      imgIndex = (imgIndex + 1) % imageList.length;
      boxImg.src = `main/${imageList[imgIndex]}`;
    }
    if (y + rect.height >= window.innerHeight || y <= 0) {
      dy *= -1;
      imgIndex = (imgIndex + 1) % imageList.length;
      boxImg.src = `main/${imageList[imgIndex]}`;
    }
    x += dx;
    y += dy;
    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
    requestAnimationFrame(animateBox);
  }

  animateBox();
});
