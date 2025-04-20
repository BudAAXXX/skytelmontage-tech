setTimeout(() => {
  document.getElementById('bg-video').style.display = 'none';
  document.getElementById('matrix-overlay').style.display = 'block';
  startMatrix();
}, 60000);

function startMatrix() {
  const canvas = document.getElementById("matrix");
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
}

const cube = document.getElementById("cube");
const imageNames = [
  "Lano.png", "Photoroom-20250408_151658_1.png", "Photoroom-20250408_151658_2.png",
  "Photoroom-20250408_151658_3.png", "brzda.png", "brzda01.png"
];

for (let i = 0; i < 6; i++) {
  const face = document.createElement("div");
  face.className = "face";
  const img = document.createElement("img");
  img.src = `main/${imageNames[i % imageNames.length]}`;
  face.appendChild(img);
  cube.appendChild(face);
}
