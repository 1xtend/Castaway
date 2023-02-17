
const navBtn = document.querySelector('#navBtn');
const nav = document.querySelector('.navbar');
const body = document.querySelector('body');

navBtn.addEventListener('click', () => {
  nav.classList.toggle('active');

  if (nav.classList.contains('active')) {
    body.style.position = 'fixed';
  } else {
    body.style.position = 'relative';
  }

  nav.addEventListener('click', (e) => {
    const links = e.currentTarget.querySelectorAll('.navbar__link');

    links.forEach((link) => {
      if (e.target === link) {
        nav.classList.remove('active');
        body.style.position = 'relative';
      }
    });
  });
});
