function setLang(lang) {
  fetch(`lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (data[key]) el.textContent = data[key];
      });
      if (data.jokes) jokes = data.jokes;
    });
}

let jokes = [];

function showJoke() {
  const box = document.getElementById('joke-box');
  if (jokes.length > 0) {
    const random = jokes[Math.floor(Math.random() * jokes.length)];
    box.textContent = random;
  }
}
setInterval(showJoke, 10000);
showJoke();

setTimeout(() => {
  const canvas = document.createElement('canvas');
  canvas.id = 'matrix';
  canvas.style.position = 'fixed';
  canvas.style.top = 0;
  canvas.style.left = 0;
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.zIndex = -1;
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const letters = Array(256).join("01").split("");
  const fontSize = 12;
  const columns = canvas.width / fontSize;
  const drops = Array(Math.floor(columns)).fill(1);

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "hsl(" + Math.floor(Math.random() * 360) + ", 100%, 50%)";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(draw, 33);
}, 27000);
