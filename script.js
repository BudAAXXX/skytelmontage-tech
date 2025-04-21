const translations = {
  cs: {
    headline: "Vítej ve SkyTel Montage",
    notice: "Tento web byl vytvořen za 20 sekund pomocí AI. Je ve výstavbě a nezobrazuje finální podobu. Omlouváme se za komplikace.",
    contactHeader: "Kontakt:",
    contactEmail: "patrik.budinsky@skytelmontage.tech",
    contactInstagram: "Instagram @highvoltagedrivЄ",
    contactYouTube: "YouTube @mtikto",
    equipmentTitle: "Vybavení",
    footerText: "Powered by BudAA ® | Registrovaná ochranná známka",
    jokes: [
      "Proč vývojář zbankrotoval? Protože použil všechen svůj cache.",
      "Lezec nespadl, jen zvolil rychlejší sestup.",
      "404: Vtip nenalezen. Možná zrovna šplhá?",
      "Git commit -m 'vylezl na věž, zapomněl lano'"
    ]
  },
  en: {
    headline: "Welcome to SkyTel Montage",
    notice: "This website was created in 20 seconds using AI. It is under construction and does not represent the final version. We apologize for any inconvenience.",
    contactHeader: "Contact:",
    contactEmail: "patrik.budinsky@skytelmontage.tech",
    contactInstagram: "Instagram @highvoltagedrivЄ",
    contactYouTube: "YouTube @mtikto",
    equipmentTitle: "All Equipment",
    footerText: "Powered by BudAA ® | Trademark Registered",
    jokes: [
      "Why did the developer go broke? Because he used up all his cache.",
      "Freeclimbers don't fall, they just choose faster descents.",
      "404: Joke not found. Maybe it went climbing?",
      "Git commit -m 'climbed a tower, forgot the rope'"
    ]
  }
};

function detectLang() {
  const lang = navigator.language.slice(0, 2);
  return translations[lang] ? lang : 'en';
}

function setLang(lang) {
  const t = translations[lang];
  document.getElementById('headline').textContent = t.headline;
  document.getElementById('notice').textContent = t.notice;
  document.getElementById('contactHeader').textContent = t.contactHeader;
  document.getElementById('contactEmail').textContent = t.contactEmail;
  document.getElementById('contactInstagram').textContent = t.contactInstagram;
  document.getElementById('contactYouTube').textContent = t.contactYouTube;
  document.getElementById('equipmentTitle').textContent = t.equipmentTitle;
  document.getElementById('footerText').textContent = t.footerText;
  document.getElementById('joke').textContent = t.jokes[Math.floor(Math.random() * t.jokes.length)];
}

setLang(detectLang());

setTimeout(() => {
  document.getElementById('overlay').classList.add('matrix');
}, 27000);
