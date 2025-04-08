// --- 3D Cube Setup ---

const images = [
  "KOTVÍCÍ DESKA PK3.png", "Lano.png", "Photoroom-20250408_151658_1.png",
  "Photoroom-20250408_151658_2.png", "Photoroom-20250408_151658_3.png",
  "brzda.png", "brzda01.png", "brzda02.png", "grillon(1).png", "grillon.png",
  "haky.png", "helma.png", "jummar.png", "jummar02.png", "karabina.png",
  "karabina0.png", "karabina01.png", "karabina02.png", "karabina03.png",
  "karabina05.png", "karabina06.png", "karabina07.png", "karabina08.png",
  "karabina09.png", "karabina1.png", "karabina10.png", "karabina11.png",
  "karabina12.png", "karabina13.png", "karabina14.png", "karabina15.png",
  "karabina16.png", "karabina17.png", "karabina18.png", "karabina19.png",
  "karabina20.png", "karabina21.png", "karabina22.png", "karabina23.png",
  "karabina24.png", "karabina25.png", "karabina26.png", "karabina27.png",
  "karabina28.png", "karabina29.png", "kladka01.png", "kladka02.png",
  "kladka04.png", "kladka05.png", "kladka_brzda.png", "kotvevnik.png",
  "lano01.png", "lano03.png", "lano200m.png", "logo-intro.png", "logo.png",
  "obrtlik.png", "ocelka01.png", "ocelka02.png", "ocelka03.png", "oecelka04.png",
  "rig.png", "sada.png", "sada01.png", "sedacka.png", "sedacka02.png",
  "sedak.png", "smyce.png", "smyce01.png", "vak.png", "vak03.png",
  "vak05.png", "zachycovac.png"
];

const cubeFaces = ["front", "back", "left", "right", "top", "bottom"];

function applyCubeFaces() {
  cubeFaces.forEach((face, i) => {
    const faceEl = document.querySelector(`.face.${face}`);
    if (faceEl) {
      const imgIndex = (Math.floor(Math.random() * images.length));
      faceEl.innerHTML = `<img src="${images[imgIndex]}" alt="${images[imgIndex]}" class="cube-face-img" />`;
    }
  });
}

function refreshFaces() {
  applyCubeFaces();
  setTimeout(refreshFaces, 4000);
}

// --- Cube Rotation ---

let angleX = 0;
let angleY = 0;
function rotateCube() {
  angleX += 0.6;
  angleY += 1.2;
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
  refreshFaces();

  const intro = document.getElementById("intro");
  const mainContent = document.getElementById("main-content");
  const audio = document.getElementById("intro-soundtrack");
  const headline = document.getElementById("headline-typing");
  if (audio) audio.play();
  if (headline) typeHeadline("SkyTel Montage™", headline);
  setTimeout(() => {
    if (intro) intro.style.display = "none";
    if (mainContent) mainContent.style.display = "block";
  }, 5000);
});

// --- Jazykový přepínač ---

const translations = {
  cs: "SkyTel Montage™ – Výšková telekomunikační technika",
  en: "SkyTel Montage™ – High-rise telecommunication works",
  kl: "SkyTel Montage™ – tlhoS ghoS Qeng" // Klingon
};

function switchLang(lang) {
  document.querySelectorAll("[data-lang-cs]").forEach(el => {
    const key = el.dataset.langKey;
    if (translations[lang]) {
      el.textContent = translations[lang];
    }
  });
}

// --- Nápis SkyTel Montage™ s efektem psaní ---

function typeHeadline(text, element) {
  let index = 0;
  function typeChar() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(typeChar, 100);
    }
  }
  typeChar();
}

// --- Mini Hra: klikací čtverec ---

function spawnMiniGame() {
  const gameBox = document.createElement("div");
  gameBox.id = "mini-game";
  gameBox.style.position = "fixed";
  gameBox.style.bottom = "20px";
  gameBox.style.left = "20px";
  gameBox.style.width = "100px";
  gameBox.style.height = "100px";
  gameBox.style.background = "#0ff";
  gameBox.style.border = "2px solid #fff";
  gameBox.style.cursor = "pointer";
  gameBox.title = "Klikni!";

  let score = 0;
  gameBox.onclick = () => {
    score++;
    gameBox.textContent = score;
    gameBox.style.background = `hsl(${Math.random() * 360}, 80%, 60%)`;
  };

  document.body.appendChild(gameBox);
}

spawnMiniGame();
