document.addEventListener('DOMContentLoaded', function() {
  const filterItems = document.querySelectorAll('.section-portfolio__filter a');
  const portfolioBoxes = document.querySelectorAll('.section-portfolio__box');

  // Initially show all portfolio items
  if(portfolioBoxes){
    filterPortfolio('all', portfolioBoxes);
  }

  // Add click event listeners to filter items
  if (filterItems) {
    filterItems.forEach(item => {
      item.addEventListener('click', event => {
        event.preventDefault();

        filterItems.forEach(item => { 
          item.classList.toggle('active', item === event.target);
        });
        
        // Filter portfolio items based on the clicked category
        const category = event.target.dataset.category;
        filterPortfolio(category, portfolioBoxes);
      });
    });
  }
});

function filterPortfolio(category, boxes) {
  boxes.forEach(box => {
    const categoryName = box.dataset.category;
    if (category === 'all' || categoryName === category) {
      box.style.display = 'block';
    } else {
      box.style.display = 'none';
    }
  });
}
