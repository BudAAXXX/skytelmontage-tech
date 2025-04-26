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

  const translations = { /* tvůj původní překladový objekt */ };

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
    "karabina29.png","kladka
