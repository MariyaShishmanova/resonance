const links = document.querySelectorAll(
  '.section-media-and-accordion__accordion-term a'
);
const descriptions = document.querySelectorAll(
  '.section-media-and-accordion__accordion-descr'
);

document.addEventListener('DOMContentLoaded', () => {
  if (links) {
    links.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();

        links.forEach(link => {
          link.classList.remove('active');
          link.nextElementSibling.classList.remove('active');
        });

        if (!event.target.classList.contains('active')) {
          event.target.classList.add('active');
          event.target.nextElementSibling.classList.add('active');
        }

        // Update height for descriptions
        updateHeight();
      });
    });
  }

  function updateHeight() {
    descriptions.forEach(description => {
      const activeDescription = description.classList.contains('active');
      if (activeDescription) {
        const height = description.scrollHeight;
        // add 28px to the actual height for some padding effect
        description.style.height = height + 28 + 'px';
      } else {
        description.style.height = ''; // Reset height to 0 if not active
      }
    });
  }

  if (descriptions) {
    // Call updateHeight initially
    updateHeight();
  }
});
