document.addEventListener('DOMContentLoaded', function () {
  const images = [
    'Lano.png', 'brzda.png', 'grillon(1).png', 'haky.png', 'jummar.png', 'karabina0.png'
    // Přidej další obrázky ze složky main
  ];

  const jokes = {
    it: [
      'Proč programátor nemůže být hladový? Protože má plný buffer.',
      'Kolik programátorů je potřeba na výměnu žárovky? Žádný, to je hardwarový problém.',
      'Já bych s vámi diskutoval, ale mám NULL pointer.',
      'Debugging je jako být detektiv, co hledá vlastní chyby.',
      '404: Smysl života nenalezen.',
      'Git commit -m \"Nechápu co jsem právě udělal\"',
      'CSS není bug – to je featura.',
      'Unit testy? Ne, my ladíme intuicí.',
      'Funguje to na mém počítači.',
      'Kód je poezie... spíš dadaismus.',
      'Sudo rm -rf / můj poslední příkaz.',
      'Programátor má radši stroj než lidi.',
      'Frameworky: moderní náboženství.',
      'Já nekóduju – já zaklínám.',
      'Když něco funguje, nešahej na to.',
      'Frontend je iluze, backend je realita.',
      'Neptej se proč, podívej se do logu.',
      'Smrt je jen segfault duše.',
      'Programátor dělá chyby rychleji.',
      'Syntax error je nový \"ahoj\".'
    ],
    climber: [
      'Horolezec nikdy nepadá. Jen rychle mění výšku.',
      'Co dělá horolezec o víkendu? Visí.',
      'Na skále nejsou WiFi, ale spojení se sebou.',
      'Pochopíš život, až visíš hlavou dolů.',
      'Karabina je moje jistota.',
      'Nejsem závislý... jen potřebuji stěnu.',
      'Každý pád je jen nový začátek.',
      'Moje lano mě drží víc než vztah.',
      'Když to nejde silou, přivaž další lano.',
      'Na vrchol vždycky vede cesta – někdy hlavou dolů.',
      'Horolezectví: legální únik od lidí.',
      'Vztahy padají, lano drží.',
      'Na skále se pozná charakter.',
      'Hák? To není zrada, to je přátelství.',
      'Miluju viset s přáteli – doslova.',
      'Pořád visím, a přitom stoupám.',
      'Když máš mačky, i srdce změkne.',
      'Lano: moje bezpečnostní deka.',
      'Stěna mi rozumí.',
      'Výšky mi dávají nadhled.'
    ],
    dark: [
      'Temný humor je jako jídlo – ne každý ho má.',
      'Smrt je garbage collection života.',
      'Všichni jedeme na baterky – někdo víc.',
      'Moje empatie má timeout.',
      'Nejsem cynický. Jsem realisticky brutální.',
      'Život je bug – smrt je fix.',
      'Pohřeb? To je jen logout.',
      'Nejsi mrtvý – jsi offline.',
      'Ráno vstávám jako zombie. A bez kávy zůstávám.',
      'Ironie: život je smrtelná nemoc.',
      'Užívám si život… jako debugger crash.',
      'Někdy je ticho odpověď... a výsměch.',
      'Můj smích je sarkastický výdech bez naděje.',
      'Optimismus? Mám ho ve /dev/null.',
      'Dneska mám náladu jako systém před bluescreenem.',
      'Moje svědomí? 404.',
      'Černý humor? Je to styl života.',
      'I smrt má deadline.',
      'Život je beta verze.',
      'Děti se smějí. Dospělí chlastají.'
    ]
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

  const box = document.createElement('div');
  box.id = 'moving-box';
  const img = document.createElement('img');
  box.appendChild(img);
  document.body.appendChild(box);

  let x = 100, y = 100, dx = 2, dy = 2;
  let index = 0;

  function animate() {
    const rect = box.getBoundingClientRect();
    if (x + rect.width >= window.innerWidth || x <= 0) {
      dx *= -1;
      index = (index + 1) % images.length;
      img.src = images[index];
    }
    if (y + rect.height >= window.innerHeight || y <= 0) {
      dy *= -1;
      index = (index + 1) % images.length;
      img.src = images[index];
    }
    x += dx;
    y += dy;
    box.style.left = x + 'px';
    box.style.top = y + 'px';
    requestAnimationFrame(animate);
  }

  img.src = images[index];
  animate();
});
