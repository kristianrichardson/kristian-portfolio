/* ── EMAIL OBFUSCATION ── */
(function() {
  const parts = ['kristianrichardson', '@', 'protonmail', '.com'];
  const addr  = parts.join('');
  const link  = document.getElementById('email-link');
  const disp  = document.getElementById('email-display');
  let revealed = false;
  link.addEventListener('click', e => {
    e.preventDefault();
    if (!revealed) {
      disp.textContent = addr;
      link.href = 'mailto:' + addr;
      revealed = true;
    } else {
      window.location.href = 'mailto:' + addr;
    }
  });
})();

/* ── MATRIX RAIN ── */
(function() {
  const cv = document.getElementById('matrix-canvas');
  const cx = cv.getContext('2d');
  function sz() {
    cv.width  = cv.offsetWidth;
    cv.height = cv.offsetHeight;
  }
  sz();
  window.addEventListener('resize', sz);

  const CHARS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ01';
  const FS = 13;
  let drops = [];
  function initDrops() {
    const cols = Math.floor(cv.width / FS);
    drops = Array.from({length: cols}, () => Math.random() * -80);
  }
  initDrops();
  window.addEventListener('resize', initDrops);

  // Pause when tab is hidden — saves CPU/battery
  let paused = false;
  document.addEventListener('visibilitychange', () => { paused = document.hidden; });

  // Respect prefers-reduced-motion
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reducedMotion) {
    setInterval(() => {
      if (paused) return;
      cx.fillStyle = 'rgba(8,8,16,0.06)';
      cx.fillRect(0, 0, cv.width, cv.height);
      cx.fillStyle = '#00e87a';
      cx.font = `${FS}px "JetBrains Mono", monospace`;
      drops.forEach((y, i) => {
        const ch = CHARS[Math.floor(Math.random() * CHARS.length)];
        cx.fillText(ch, i * FS, y * FS);
        if (y * FS > cv.height && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 1;
      });
    }, 50);
  }
})();

/* ── TYPING ANIMATION ── */
(function() {
  const phrases = [
    'Cyber Security Specialist',
    'Offensive Security Researcher',
    'Bug Bounty Hunter',
    'Security Researcher',
    'Python Tool Builder',
  ];
  const el = document.getElementById('typed');
  let pi = 0, ci = 0, del = false;

  function tick() {
    const ph = phrases[pi];
    if (del) {
      ci--;
      el.innerHTML = ph.slice(0, ci) + '<span class="cursor"></span>';
      if (ci <= 0) {
        del = false;
        pi = (pi + 1) % phrases.length;
        return setTimeout(tick, 450);
      }
      return setTimeout(tick, 38);
    } else {
      ci++;
      el.innerHTML = ph.slice(0, ci) + '<span class="cursor"></span>';
      if (ci === ph.length) {
        return setTimeout(() => { del = true; tick(); }, 2400);
      }
      return setTimeout(tick, 72);
    }
  }
  tick();
})();

/* ── SCROLL FADE-INS ── */
(function() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fi-anim').forEach(el => obs.observe(el));
})();
