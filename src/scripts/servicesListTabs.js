// add class active to the link which is clicked
const links = document.querySelectorAll('.section-services__list a');
const listItems = document.querySelectorAll('.section-services__list li');
const serviceTitle = document.querySelector('.section-services__service-title');
const serviceEntry = document.querySelector('.section-services__service-entry');
const serviceMedia = document.querySelector('.section-services__service-media img');
const serviceContainer = document.querySelector('.section-services__service');

if (links) {
  links.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();

      links.forEach(link => {
        link.classList.remove('active');
        event.target.classList.add('active');
      });
    });
  });
}

// change the service-title, service-entry and service media img, when click on list item
document.addEventListener('DOMContentLoaded', function() {
   // Function to handle click event on list items
  function handleListItemClick() {
    // Get the title and image source of the clicked list item
    const title = this.textContent.trim().replace(this.querySelector('.section-services__list-number').textContent,'');
    const imageUrl = this.dataset.imageUrl;
    const entry = this.dataset.entryContent;

    // Update the content of .section-services__service-title, .section-services__service-entry and  image src based on the clicked list item
    if (serviceTitle && serviceEntry && serviceMedia) {
      serviceContainer.classList.remove('active');

      // Update the content
      setTimeout(() => {
        serviceTitle.textContent = title;
        serviceEntry.textContent = entry;
        serviceMedia.src = imageUrl;

        // Show the container with updated content
        serviceContainer.classList.add('active');
      }, 300); // Set timeout to match the transition duration
    }
  }

  // Add click event listener to each list item
  if (listItems) {
    listItems.forEach(item => {
      item.addEventListener('click', handleListItemClick);
    });
  }

  if (listItems && listItems.length > 0) {
    const firstListItem = listItems[0];
    handleListItemClick.call(firstListItem); // Call the click handler for the first list item
  }
});
