const bgSections = document.querySelectorAll('.section.bg-image');

document.addEventListener('DOMContentLoaded', () => {
  let lastScrollTop = 0;
  window.addEventListener('scroll', function(event) {
    const st = window.scrollY || document.documentElement.scrollTop;

    bgSections.forEach(function(section) {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const sectionBottom = sectionTop + rect.height;
      const viewportHeight = window.innerHeight;

      // Check if section is fully visible
      const isFullyVisible = sectionTop >= 0 && sectionBottom <= viewportHeight;

      if (isFullyVisible) {
        // Section fully visible, set background position to center
        section.style.backgroundPosition = 'center';
      } else {
        // Calculate parallax effect
        const distanceFromCenter =
          sectionTop - viewportHeight / 2 + rect.height / 2 - st;
        const bgPositionY = -distanceFromCenter / 2;
        section.style.backgroundPosition = 'center ' + bgPositionY + 'px';
      }
    });

    lastScrollTop = st;
  });
});
