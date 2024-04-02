document.addEventListener('DOMContentLoaded', function() {
  const sectionHero = document.querySelector('.section-hero');
  const images = document.querySelectorAll('.section-hero__image');

  if (sectionHero) {
    sectionHero.addEventListener('mousemove', function(event) {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      if (images) {
        images.forEach((image, index) => {
          let intensity = parseInt(image.dataset.intensity) || 30;
           // Adjust intensity for the images
          const offsetX =
            (image.offsetLeft + image.offsetWidth / 2 - mouseX) / intensity; // Adjust the division value for the desired parallax effect
          const offsetY =
            (image.offsetTop + image.offsetHeight / 2 - mouseY) / intensity; // Adjust the division value for the desired parallax effect

          image.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0px)`;
        });
      }
    });
  }
});
