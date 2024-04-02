document.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('.header__menu a');

  if (menuLinks) {
    menuLinks.forEach(function(menuLink) {
      menuLink.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('clicked');

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const styles = window.getComputedStyle(targetElement);
          const paddingTop = parseFloat(styles.paddingBlockStart);
          const offsetTop = targetElement.offsetTop - paddingTop;

          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }
});
