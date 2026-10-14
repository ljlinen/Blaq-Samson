/**
 * Newsletter form. No backend yet — swap the TODO for your provider
 * (Mailchimp, Formspree, your own API...).
 */
export function initNewsletter() {
  const form = document.querySelector('[data-newsletter]');
  if (!form) return;
  const status = form.querySelector('[data-newsletter-status]');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = new FormData(form).get('email');
    // TODO: send `email` to your mailing list service here.
    console.info('[newsletter] signup:', email);
    status.textContent = 'You’re on the list. Welcome to the movement.';
    form.reset();
  });
}
