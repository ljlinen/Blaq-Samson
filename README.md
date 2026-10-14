# Black Samson

Vite (vanilla JS) site. Responsive, no framework.

## Run

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the build
```

## Folder structure

```
index.html                  page markup (all sections)
public/
  favicon.svg
  images/                   <- PUT YOUR IMAGES HERE
    hero/  story/  categories/  lifestyle/  reviews/
src/
  main.js                   entry point
  config/
    images.js               image map: which file each slot uses
    testimonials.js         review quotes
  js/                       one small file per feature
    images.js  nav.js  hero-slider.js  testimonials.js  newsletter.js
  styles/                   one stylesheet per section
    variables.css  base.css  header.css  hero.css  story.css
    categories.css  lifestyle.css  reviews.css  footer.css
```

## Images

Add files to `public/images/<folder>/` with these names (or edit `src/config/images.js`):

| Slot | File |
| --- | --- |
| Hero slide 1 / 2 / 3 | `hero/hero-1.jpg`, `hero/hero-2.jpg`, `hero/hero-3.jpg` |
| Story collage (large) | `story/story-hoodie-back.jpg` |
| Story collage (pocket) | `story/story-pocket.jpg` |
| Story collage (chain tee) | `story/story-chain-tee.jpg` |
| Story tall image | `story/story-embroidery.jpg` |
| Categories | `categories/hoodies.jpg`, `t-shirts.jpg`, `pants.jpg`, `accessories.jpg` |
| Lifestyle banner | `lifestyle/lifestyle-banner.jpg` |
| Reviews | `reviews/review-1.jpg`, `review-2.jpg`, `review-3.jpg` |

Until an image exists, its frame shows the expected path as a small label.
Use `.png`/`.webp` instead? Just change the extension in `src/config/images.js`.
