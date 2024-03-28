document.addEventListener("click",()=>{
  const menuLinks = document.querySelectorAll('.header__menu a');

  if(menuLinks) {
  menuLinks.forEach(function(menuLink){
    menuLink.addEventListener('click', function(e){
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if(targetElement) {
        const offsetTop = targetElement.offsetTop;

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
      }
    })
  })
  }
})