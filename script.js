// --- 3D Cube Setup ---

const images = [
  "KOTVÍCÍ DESKA PK3.png", "Lano.png", "Photoroom-20250408_151658_1.png",
  "Photoroom-20250408_151658_2.png", "Photoroom-20250408_151658_3.png",
  "brzda.png", "brzda01.png", "brzda02.png", "grillon(1).png", "grillon.png"
];

const cubeFaces = ["front", "back", "left", "right", "top", "bottom"];

function applyCubeFaces() {
  cubeFaces.forEach((face, i) => {
    const faceEl = document.querySelector(`.face.${face}`);
    if (faceEl) {
      faceEl.style.backgroundImage = `url('${images[i % images.length]}')`;
    }
  });
}

// --- Cube Rotation ---

let angleX = 0;
let angleY = 0;
function rotateCube() {
  angleX += 0.3;
  angleY += 0.5;
  const cube = document.querySelector(".cube");
  if (cube) {
    cube.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
  }
  requestAnimationFrame(rotateCube);
}

// --- Intro ---

window.addEventListener("load", () => {
  applyCubeFaces();
  rotateCube();

  const intro = document.getElementById("intro");
  const mainContent = document.getElementById("main-content");
  const audio = document.getElementById("intro-soundtrack");
  if (audio) audio.play();
  setTimeout(() => {
    if (intro) intro.style.display = "none";
    if (mainContent) mainContent.style.display = "block";
  }, 5000);
});

// --- Jazykový přepínač ---

function switchLang(lang) {
  document.querySelectorAll("[data-lang-cs]").forEach(el => {
    if (el.dataset[`lang${lang.toUpperCase()}`]) {
      el.textContent = el.dataset[`lang${lang.toUpperCase()}`];
    }
  });
}
