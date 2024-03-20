const filterTabs = document.querySelectorAll('.section-portfolio__filter a');

if (filterTabs) {
  filterTabs.forEach(tab => {
    tab.addEventListener('click', event => {
      event.preventDefault();

      filterTabs.forEach(tab => {
        tab.classList.remove('active');
        event.target.classList.add('active');
      })
    });
  });
}
