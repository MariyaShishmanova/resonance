const filterItems = document.querySelectorAll('.section-portfolio__filter a');
const portfolioBoxes = document.querySelectorAll('.section-portfolio__box');

document.addEventListener('DOMContentLoaded', function() {
  function filterPortfolio(category) {
    if (portfolioBoxes) {
      portfolioBoxes.forEach(box => {
        const categoryName = box.dataset.category;
        if (category === 'all' || categoryName === category) {
          box.style.display = 'block';
          if (category !== 'all') {
            box.style.marginTop = '0'; // Set margin top to 0 for branding, development, and design categories
          } else {
            box.style.marginTop = ''; // Reset margin top to default as defined in CSS for other categories
          };
        } else {
          box.style.display = 'none';
        }
      });
    }
  }

  // Initially show all portfolio items
  filterPortfolio('all');

  // Add click event listeners to filter items
  if (filterItems) {
    filterItems.forEach(item => {
      item.addEventListener('click', event => {
        event.preventDefault();
        // Remove 'active' class from all filter items
        filterItems.forEach(item => item.classList.remove('active'));
        // Add 'active' class to clicked filter item
        event.target.classList.add('active');
        // Filter portfolio items based on the clicked category
        const category = event.target.dataset.category;
        filterPortfolio(category);
      });
    });
  }
});
