document.addEventListener('DOMContentLoaded', function() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  if (animatedElements) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('words');
          observer.unobserve(entry.target); // Stop observing once animation is triggered, the animation will be activated only once
        } else {
          entry.target.classList.remove('words');
        }
      });
    });

    animatedElements.forEach(element => {
      observer.observe(element);
    });
  }
});
