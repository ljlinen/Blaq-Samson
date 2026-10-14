import { TESTIMONIALS } from '../config/testimonials.js';

/** "What They Say" slider: previous / next through TESTIMONIALS. */
export function initTestimonials() {
  const root = document.querySelector('[data-testimonials]');
  if (!root || !TESTIMONIALS.length) return;

  const quote = root.querySelector('[data-quote]');
  const author = root.querySelector('[data-author]');
  const prev = root.querySelector('[data-prev]');
  const next = root.querySelector('[data-next]');
  let index = 0;

  const render = () => {
    const t = TESTIMONIALS[index];
    quote.textContent = `“${t.quote}”`;
    author.textContent = `— ${t.author}`;
  };

  prev.addEventListener('click', () => {
    index = (index - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
    render();
  });
  next.addEventListener('click', () => {
    index = (index + 1) % TESTIMONIALS.length;
    render();
  });

  render();
}
