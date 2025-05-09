document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const bgVideo = document.getElementById("bgVideo");
  const matrix = document.getElementById("matrix");
  const box = document.getElementById("moving-box");
  const imgEl = document.getElementById("moving-image");

  const images = [
    "Lano.png",
    "brzda.png",
    "grillon(1).png",
    "karabina01.png",
    "sedacka.png",
    "vak05.png"
  ];

  function getRandomImage() {
    return images[Math.floor(Math.random() * images.length)];
  }

  // Jazykové přepínače – připraveno pro budoucí překlady
  document.querySelectorAll(".languages button").forEach(btn => {
    btn.addEventListener("click", () => {
      console.log(`Přepnuto na jazyk: ${btn.dataset.lang}`);
    });
  });

  // Intro přechod
  setTimeout(() => {
    intro.style.opacity = "0";
    intro.style.pointerEvents = "none";
    setTimeout(() => {
      intro.remove();
      if (bgVideo) {
        bgVideo.play().catch(err => console.error("Video error:", err));
      }
    }, 2000);
  }, 2000);

  // Matrix efekt
  setTimeout(() => {
    matrix.style.opacity = "1";
    startMatrix();
  }, 30000);

  function startMatrix() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const columns = Math.floor(width / 15);
    const drops = Array(columns).fill(1);
    const canvas = document.createElement("canvas");
    matrix.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;

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

  // Pohybující se box
  let x = 100, y = 100, dx = 2.5, dy = 2;
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
