const bgSections = document.querySelectorAll('.section.bg-image');

let lastScrollTop = 0;
window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  bgSections.forEach(function(section) {
    const rect = section.getBoundingClientRect();
    // get the distance from the top of the document to the top of the section
    const sectionTop = rect.top + window.scrollY;
    const viewportHeight = window.innerHeight;

    // Calculate parallax effect relative to each section's position
    const distanceFromCenter =
      sectionTop + rect.height / 30 - (scrollPosition + viewportHeight / 30);
    const bgPositionY = -distanceFromCenter / 30;
    section.style.backgroundPosition = 'center ' + bgPositionY + 'px';
  });

  lastScrollTop = scrollPosition;
});
