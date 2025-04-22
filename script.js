document.addEventListener("DOMContentLoaded", function () {
  const lang = navigator.language || navigator.userLanguage;
  const langShort = lang.slice(0, 2).toLowerCase();
  const buttons = document.querySelectorAll(".languages button");
  buttons.forEach(btn => {
    if (btn.dataset.lang === langShort) {
      btn.style.border = "2px solid #00ffee";
    }
  });

  // Intro logo fade out
  const intro = document.getElementById('intro');
  setTimeout(() => {
    intro.style.opacity = '0';
    intro.style.pointerEvents = 'none';
    setTimeout(() => {
      intro.remove();
      const video = document.querySelector('.background-video');
      video.muted = false;
      video.play().catch(e => console.warn('Video autoplay blocked:', e));
    }, 1000);
  }, 3000);

  // Fullscreen image view
  document.body.addEventListener('click', function (e) {
    if (e.target.closest('#moving-box')) {
      const img = e.target.closest('#moving-box').querySelector('img');
      const full = document.createElement('div');
      full.style.position = 'fixed';
      full.style.top = '0';
      full.style.left = '0';
      full.style.width = '100vw';
      full.style.height = '100vh';
      full.style.background = 'rgba(0,0,0,0.95)';
      full.style.display = 'flex';
      full.style.justifyContent = 'center';
      full.style.alignItems = 'center';
      full.style.zIndex = '9999';
      full.innerHTML = `<img src="${img.src}" style="max-width:90vw; max-height:90vh; border-radius:12px; box-shadow:0 0 30px #0ff;" alt="fullscreen">`;
      full.addEventListener('click', () => full.remove());
      document.body.appendChild(full);
    }
  });

  // Joke box
  const jokes = {
    it: ['404 error: Joke not found 🤖', 'Programátor vstoupí do baru... a nic nepije, protože je to bug.'],
    climber: ['Lano je lepší než vztah – vždycky tě podrží.', 'Visím, tedy jsem.'],
    dark: ['Život je beta verze.', 'Offline = mrtvý, online = šťastný?']
  };
  const jokeBox = document.createElement('div');
  jokeBox.id = 'joke-box';
  document.body.appendChild(jokeBox);

  function randomJoke() {
    const all = [...jokes.it, ...jokes.climber, ...jokes.dark];
    return all[Math.floor(Math.random() * all.length)];
  }

  setInterval(() => {
    jokeBox.textContent = randomJoke();
  }, 5000);
});
