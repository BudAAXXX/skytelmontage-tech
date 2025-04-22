document.addEventListener('DOMContentLoaded', function () {
  const imagePath = 'main/';
  const imageCount = 40; // nastav podle reálného počtu PNG souborů
  const imageList = [];

  for (let i = 0; i < imageCount; i++) {
    imageList.push(`${imagePath}karabina${i}.png`);
  }

  // Přidej další specifické názvy, pokud existují jiné obrázky než karabiny
  const extraImages = [
    'Lano.png', 'brzda.png', 'grillon(1).png', 'haky.png', 'jummar.png',
    'sedacka.png', 'vak.png', 'ocelka01.png', 'rig.png'
  ];
  imageList.push(...extraImages.map(img => `${imagePath}${img}`));

  const jokes = {
    it: [/* IT vtipy */],
    climber: [/* lezecké vtipy */],
    dark: [/* černý humor */]
  };

  const jokeBox = document.createElement('div');
  jokeBox.id = 'joke-box';
  jokeBox.style.position = 'fixed';
  jokeBox.style.bottom = '80px';
  jokeBox.style.left = '50%';
  jokeBox.style.transform = 'translateX(-50%)';
  jokeBox.style.background = 'rgba(0,0,0,0.5)';
  jokeBox.style.padding = '10px 20px';
  jokeBox.style.borderRadius = '8px';
  jokeBox.style.fontSize = '1.2rem';
  jokeBox.style.maxWidth = '80%';
  jokeBox.style.textAlign = 'center';
  jokeBox.style.opacity = '0.8';
  jokeBox.style.zIndex = '6';
  document.body.appendChild(jokeBox);

  function randomJoke() {
    const all = [...jokes.it, ...jokes.climber, ...jokes.dark];
    return all[Math.floor(Math.random() * all.length)];
  }

  setInterval(() => {
    jokeBox.textContent = randomJoke();
  }, 5000);

  const box = document.createElement('div');
  box.id = 'moving-box';
  box.style.position = 'absolute';
  box.style.width = '100px';
  box.style.height = '100px';
  box.style.border = '2px solid #00ffee';
  box.style.borderRadius = '10px';
  box.style.overflow = 'hidden';
  box.style.zIndex = '5';
  box.style.opacity = '0.9';
  const img = document.createElement('img');
  img.style.width = '100%';
  img.style.height = '100%';
  img.style.objectFit = 'contain';
  box.appendChild(img);
  document.body.appendChild(box);

  let x = 100, y = 100, dx = 2, dy = 2;
  let index = 0;
  img.src = imageList[index];

  function animate() {
    const rect = box.getBoundingClientRect();
    if (x + rect.width >= window.innerWidth || x <= 0) {
      dx *= -1;
      index = (index + 1) % imageList.length;
      img.src = imageList[index];
    }
    if (y + rect.height >= window.innerHeight || y <= 0) {
      dy *= -1;
      index = (index + 1) % imageList.length;
      img.src = imageList[index];
    }
    x += dx;
    y += dy;
    box.style.left = x + 'px';
    box.style.top = y + 'px';
    requestAnimationFrame(animate);
  }

  animate();
});
