import './styles/main.css';

import { applyImages } from './js/images.js';
import { initNav } from './js/nav.js';
import { initHeroSlider } from './js/hero-slider.js';
import { initTestimonials } from './js/testimonials.js';
import { initNewsletter } from './js/newsletter.js';

applyImages();
initNav();
initHeroSlider();
initTestimonials();
initNewsletter();

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();
