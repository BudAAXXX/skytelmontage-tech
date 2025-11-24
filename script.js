(() => {
  'use strict';

  // Futuristický „číselník“ pro název SkyTel Montage
  function initTickerTitle() {
    const el = document.getElementById('tickerTitle');
    if (!el) return;

    const finalText = el.dataset.text || el.textContent || '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    // vyčisti původní obsah
    el.textContent = '';

    [...finalText].forEach((finalChar, index) => {
      const span = document.createElement('span');
      span.className = 'ticker-char';

      // mezera zůstane mezera, bez animace
      if (finalChar === ' ') {
        span.textContent = ' ';
        el.appendChild(span);
        return;
      }

      span.textContent = ' ';
      el.appendChild(span);

      let iterations = 0;
      const maxIterations = 10 + Math.floor(Math.random() * 6); // 10–15 cyklů
      const delay = 40; // rychlost překlikávání znaku

      setTimeout(() => {
        const interval = setInterval(() => {
          span.textContent = chars[Math.floor(Math.random() * chars.length)];
          iterations++;
          if (iterations >= maxIterations) {
            clearInterval(interval);
            span.textContent = finalChar;
          }
        }, delay);
      }, index * 80); // postupné zpoždění pro jednotlivá písmena
    });
  }

  // matrix efekt (výkonově šetrný + zpomalený)
  function initMatrix() {
    const canvas = document.getElementById('matrix');
    if (!canvas) return;

    // respektuj prefers-reduced-motion
    const prefersReduced = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      return;
    }

    const ctx = canvas.getContext('2d');
    const DPR = Math.min(2, window.devicePixelRatio || 1);
    const fontSize = 16;
    const chars = 'アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let columns = 0;
    let drops = [];
    let tick = 0;
    let running = true;

    function resize() {
      canvas.width = Math.floor(window.innerWidth * DPR);
      canvas.height = Math.floor(window.innerHeight * DPR);
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      columns = Math.floor(window.innerWidth / fontSize);
      drops = new Array(columns).fill(1);
    }

    resize();
    window.addEventListener('resize', resize, { passive: true });

    // pauza při skrytém tabu (volitelné, ale pomáhá výkonu)
    document.addEventListener('visibilitychange', () => {
      running = document.visibilityState === 'visible';
      if (running) {
        requestAnimationFrame(draw);
      }
    });

    function draw() {
      if (!running) {
        requestAnimationFrame(draw);
        return;
      }

      tick++;

      // zpomalení: vykresli jen každý 3. frame
      if (tick % 3 !== 0) {
        requestAnimationFrame(draw);
        return;
      }

      ctx.fillStyle = 'rgba(0,0,0,0.08)';
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      ctx.fillStyle = '#8bd3ff';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillText(text, x, y);

        if (y > window.innerHeight && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      requestAnimationFrame(draw);
    }

    requestAnimationFrame(draw);
  }

  document.addEventListener('DOMContentLoaded', () => {
    // název „SkyTel Montage“ jako číselník
    initTickerTitle();

    // skryj chybějící partnerská loga (pokud nějaká přidáš)
    document.querySelectorAll('.partner-logos img').forEach(img => {
      img.loading = 'lazy';
      img.decoding = 'async';
      img.addEventListener('error', () => {
        img.style.display = 'none';
      });
    });

    // matrix efekt
    initMatrix();
  });
})();
