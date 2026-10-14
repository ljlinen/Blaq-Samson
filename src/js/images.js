import { IMAGES } from '../config/images.js';

const BASE = import.meta.env.BASE_URL;

const lookup = (path) => path.split('.').reduce((obj, key) => obj?.[key], IMAGES);

/**
 * Finds every <img data-img="group.key"> and points it at the file
 * listed in src/config/images.js. If the file isn't there yet, the frame
 * gets an "is-missing" state that shows the expected path.
 */
export function applyImages() {
  document.querySelectorAll('img[data-img]').forEach((img) => {
    const file = lookup(img.dataset.img);
    const frame = img.closest('.img-frame');

    if (!file) {
      console.warn(`[images] No entry for "${img.dataset.img}" in src/config/images.js`);
      frame?.classList.add('is-missing');
      return;
    }

    if (frame) frame.dataset.path = `images/${file}`;

    img.addEventListener('error', () => frame?.classList.add('is-missing'));
    img.addEventListener('load', () => frame?.classList.remove('is-missing'));
    img.src = `${BASE}images/${file}`;
  });
}
