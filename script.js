const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
document.getElementById('year').textContent = new Date().getFullYear();

// Version 1.2: floating soda bubbles
const bubbleField = document.querySelector('.bubble-field');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (bubbleField && !reduceMotion) {
  const bubbleCount = window.innerWidth < 700 ? 9 : 16;
  for (let index = 0; index < bubbleCount; index += 1) {
    const bubble = document.createElement('span');
    bubble.className = 'float-bubble';
    const size = Math.round(14 + Math.random() * 48);
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDuration = `${9 + Math.random() * 12}s`;
    bubble.style.animationDelay = `${-Math.random() * 18}s`;
    bubbleField.appendChild(bubble);
  }
}

// Version 1.2: branded bubble cursor for desktop
const customCursor = document.querySelector('.custom-cursor');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

if (customCursor && finePointer && !reduceMotion) {
  document.body.classList.add('cursor-ready');
  window.addEventListener('mousemove', (event) => {
    customCursor.style.left = `${event.clientX}px`;
    customCursor.style.top = `${event.clientY}px`;
    customCursor.classList.add('visible');
  });
  document.documentElement.addEventListener('mouseleave', () => customCursor.classList.remove('visible'));

  document.querySelectorAll('a, button, .drink-card').forEach((target) => {
    target.addEventListener('mouseenter', () => customCursor.classList.add('hovering'));
    target.addEventListener('mouseleave', () => customCursor.classList.remove('hovering'));
  });
}


// Version 1.3: occasional mascot sparkles
const sparkleField = document.querySelector('.sparkle-field');
if (sparkleField && !reduceMotion) {
  const sparkleSymbols = ['✨', '⭐', '✦'];
  const makeSparkle = () => {
    const sparkle = document.createElement('span');
    sparkle.className = 'mascot-sparkle';
    sparkle.textContent = sparkleSymbols[Math.floor(Math.random() * sparkleSymbols.length)];
    sparkle.style.left = `${8 + Math.random() * 84}%`;
    sparkle.style.top = `${8 + Math.random() * 76}%`;
    sparkleField.appendChild(sparkle);
    sparkle.addEventListener('animationend', () => sparkle.remove());
  };
  setInterval(() => {
    makeSparkle();
    if (Math.random() > 0.55) setTimeout(makeSparkle, 180);
  }, 2100);
}
