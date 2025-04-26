document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const video = document.getElementById("bgVideo");
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

  let lastIdx = -1;

  function getNextImage() {
    let idx;
    do {
      idx = Math.floor(Math.random() * images.length);
    } while (idx === lastIdx);
    lastIdx = idx;
    return `main/${images[idx]}`;
  }

  function startMovingBox() {
    let x = 50, y = 50;
    let dx = window.innerWidth < 768 ? 1 : 2;
    let dy = window.innerWidth < 768 ? 1 : 2;

    function animate() {
      const vw = visualViewport?.width || window.innerWidth;
      const vh = visualViewport?.height || window.innerHeight;
      const r = box.getBoundingClientRect();

      if (x + r.width >= vw || x <= 0) {
        dx *= -1;
        imgEl.src = getNextImage();
      }
      if (y + r.height >= vh || y <= 0) {
        dy *= -1;
        imgEl.src = getNextImage();
      }

      x += dx; y += dy;
      box.style.left = `${x}px`;
      box.style.top = `${y}px`;

      requestAnimationFrame(animate);
    }
    animate();
  }

  imgEl.src = getNextImage();

  // Tady řídíme animaci intro + video
  setTimeout(() => {
    setTimeout(() => {
      intro.style.opacity = "0";
      setTimeout(() => {
        intro.remove();
        video.style.opacity = "1";
        video.play().catch(() => {});
        startMovingBox();
      }, 1000); // Po fadeout intru
    }, 1000); // Po dokončení fadeIn obrázku logo-intro.png
  }, 2000); // FadeIn intro obrázku trvá 2s
});
