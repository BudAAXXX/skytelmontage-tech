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
  "lano01.png", "lano03.png", "lano200m.png", "logo.png", "obrtlik.png",
  "ocelka01.png", "ocelka02.png", "ocelka03.png", "oecelka04.png", "rig.png",
  "sada.png", "sada01.png", "sedacka.png", "sedacka02.png", "sedak.png",
  "smyce.png", "smyce01.png", "vak.png", "vak03.png", "vak05.png",
  "zachycovac.png"
];

let current = Math.floor(Math.random() * images.length);
const cubeImage = document.getElementById("cube-image");

function nextImage() {
  current = Math.floor(Math.random() * images.length);
  cubeImage.style.opacity = 0;
  setTimeout(() => {
    cubeImage.src = images[current];
    cubeImage.style.opacity = 1;
  }, 300);
}

setInterval(nextImage, 10000);

function switchLang(lang) {
  document.querySelectorAll("[data-lang-cs]").forEach(el => {
    if (el.dataset[`lang${lang.toUpperCase()}`]) {
      el.textContent = el.dataset[`lang${lang.toUpperCase()}`];
    }
  });
}

window.addEventListener("load", () => {
  const intro = document.getElementById("intro");
  const mainContent = document.getElementById("main-content");
  const audio = document.getElementById("intro-soundtrack");
  if (audio) audio.play();
  setTimeout(() => {
    if (intro) intro.style.display = "none";
    if (mainContent) mainContent.style.display = "block";
  }, 5000);
});

let angle = 0;
let posX = 50;
let posY = 50;
let speedX = (Math.random() - 0.5) * 1.5;
let speedY = (Math.random() - 0.5) * 1.5;

function animateCube() {
  angle += 0.5;
  posX += speedX;
  posY += speedY;

  if (posX < 0 || posX > 100) speedX = -speedX;
  if (posY < 0 || posY > 100) speedY = -speedY;

  const cube = document.querySelector(".cube-container");
  if (cube) {
    cube.style.transform = `translate(-50%, -50%) translate(${posX}vw, ${posY}vh) rotateY(${angle}deg) rotateX(${angle / 2}deg) scale(4)`;
  }
  requestAnimationFrame(animateCube);
}

animateCube();

// Vizitka zobrazení
window.addEventListener("DOMContentLoaded", () => {
  const card = document.getElementById("vizitka");
  if (card) card.style.opacity = 1;
});
