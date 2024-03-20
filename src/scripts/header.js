const header = document.querySelector('header');

document.addEventListener('DOMContentLoaded', () => {
  let lastScrollTop = 0;
  window.addEventListener('scroll', event => {
    const st = window.scrollY || document.documentElement.scrollTop;

    if (st > lastScrollTop) {
      header.classList.add('header-white-bg');
    } else {
      header.classList.remove('header-white-bg');
    }
  });
});
