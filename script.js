document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const bgVideo = document.getElementById("bgVideo");
  const matrix = document.getElementById("matrix");
  const mottoEl = document.getElementById("motto");
  const jokeInner = document.querySelector(".joke-inner");
  const box = document.getElementById("moving-box");
  const imgEl = document.getElementById("moving-image");

  const translations = {
    cz: {
      companyName: "SkyTel Montage",
      slogan: "Váš partner pro výškové a telekomunikační projekty v celé Evropě.",
      motto: "Nepřekonáváš věž – překonáváš sám sebe.",
      poweredBy: "Vytvořeno BudAA za 1 hodinu s pomocí AI.",
      note: "Stránka slouží jako kontaktní vizitka, nikoliv finální verze.",
      jokes: [
        "To není bug, to je feature!",
        "Visím, tedy jsem.",
        "Chyba mezi židlí a klávesnicí.",
        "Bez lana není lezení.",
        "Backup? Možná příště."
      ]
    },
    en: {
      companyName: "SkyTel Montage",
      slogan: "Your partner for telecom and high-altitude projects across Europe.",
      motto: "You don't overcome the tower – you overcome yourself.",
      poweredBy: "Created by BudAA within 1 hour with AI support.",
      note: "This page serves as a contact card, not a final website.",
      jokes: [
        "It's not a bug, it's a feature!",
        "I hang, therefore I am.",
        "Error between chair and keyboard.",
        "Without rope, no climbing!",
        "Backup? Maybe next time."
      ]
    }
  };

  function applyTranslations(lang) {
    const t = translations[lang] || translations.cz;
    document.getElementById('company-name').textContent = t.companyName;
    document.getElementById('slogan').textContent = t.slogan;
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

  applyTranslations("cz");

  setTimeout(() => {
    intro.style.opacity = "0";
    intro.style.pointerEvents = "none";
    setTimeout(() => {
      intro.remove();
      if (bgVideo) {
        bgVideo.play().catch(err => console.error('Video error:', err));
      }
    }, 2000);
  }, 2000);

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

  const images = ["Lano.png", "Karabina.png", "Helma.png", "Postroj.png"];
  let x = 100, y = 100, dx = 2.5, dy = 2;
  function getRandomImage() {
    return images[Math.floor(Math.random() * images.length)];
  }
  function animateMovingBox() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const r = box.getBoundingClientRect();

    if (x + r.width >= vw || x <= 0) {
      dx *= -1;
      imgEl.src = getRandomImage();
    }
    if (y + r.height >= vh || y <= 0) {
      dy *= -1;
      imgEl.src = getRandomImage();
    }

    x += dx;
    y += dy;
    box.style.left = `${x}px`;
    box.style.top = `${y}px`;

    requestAnimationFrame(animateMovingBox);
  }

  requestAnimationFrame(animateMovingBox);
});
