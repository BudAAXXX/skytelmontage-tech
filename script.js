const jokes = [
  "Why did the developer go broke? Because he used up all his cache.",
  "Freeclimbers don't fall, they just choose faster descents.",
  "404: Joke not found. Maybe it went climbing?",
  "Git commit -m 'climbed a rock, forgot the rope'",
  "IT guy went climbing. Now he's stuck on the cloud."
];
document.getElementById('joke').textContent = jokes[Math.floor(Math.random() * jokes.length)];

function setLang(lang) {
  fetch(`lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      document.getElementById('headline').textContent = data.headline;
      document.getElementById('notice').textContent = data.notice;
    });
}

setTimeout(() => {
  document.getElementById('overlay').classList.add('rainbow-matrix');
}, 27000);

// Floating cube logic
const cube = document.getElementById('floating-cube');
const images = [
  'karabina01.png', 'helma.png', 'grillon.png', 'sedacka.png',
  'brzda.png', 'kladka01.png', 'lano01.png', 'vak.png'
];

function randomPosition() {
  return Math.floor(Math.random() * 90) + '%';
}

function randomImage() {
  return images[Math.floor(Math.random() * images.length)];
}

function animateCube() {
  cube.style.top = randomPosition();
  cube.style.left = randomPosition();
  cube.style.backgroundImage = `url('${randomImage()}')`;
}

setInterval(animateCube, 4000);
animateCube();

// Dynamic gallery load
fetch('vybaveni_gallery_github.json')
  .then(res => res.json())
  .then(data => {
    const grid = document.getElementById('dynamic-grid');
    data.forEach(item => {
      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.name;
      grid.appendChild(img);
    });
  });

// Slideshow logic
const slideshowImgs = ['karabina01.png', 'grillon.png', 'sedacka.png', 'vak03.png'];
let slideIndex = 0;
setInterval(() => {
  document.getElementById('slideshow-img').src = slideshowImgs[slideIndex];
  slideIndex = (slideIndex + 1) % slideshowImgs.length;
}, 5000);

// Výchozí jazyk
setLang('en');
