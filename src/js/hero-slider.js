/** Hero slider: fades between slides, driven by the 01 / 02 / 03 buttons. */
export function initHeroSlider() {
  const root = document.querySelector('[data-hero]');
  if (!root) return;

  const slides = [...root.querySelectorAll('[data-hero-slide]')];
  const dots = [...root.querySelectorAll('[data-hero-dot]')];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let index = 0;
  let timer;

  const go = (n) => {
    index = (n + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle('is-active', i === index));
    dots.forEach((d, i) => {
      d.classList.toggle('is-active', i === index);
      d.setAttribute('aria-current', String(i === index));
    });
  };

  const stop = () => clearInterval(timer);
  const start = () => {
    stop();
    if (!reduceMotion) timer = setInterval(() => go(index + 1), 6500);
  };

  dots.forEach((dot, i) =>
    dot.addEventListener('click', () => {
      go(i);
      start();
    })
  );

  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', start);
  go(0);
  start();
}
