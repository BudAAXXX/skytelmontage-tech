function switchLang(lang) {
  const html = document.documentElement;

  // Animace opacity
  html.style.transition = "opacity 0.3s ease";
  html.style.opacity = 0;

  setTimeout(() => {
    html.setAttribute('data-lang', lang);
    localStorage.setItem('lang', lang);
    html.style.opacity = 1;
  }, 300);
}

document.addEventListener('DOMContentLoaded', () => {
  // Pokud je jazyk uložen, použij ho
  let lang = localStorage.getItem('lang');

  // Pokud není uložen, použij jazyk prohlížeče
  if (!lang) {
    const browserLang = navigator.language.slice(0, 2);
    lang = ['cs', 'en', 'de'].includes(browserLang) ? browserLang : 'cs';
  }

  switchLang(lang);
});
