const header = document.querySelector('.header');
const btnNav = document.querySelector('.btn-nav');
const headerLanguages = document.querySelector('.header__languages');

// function to handle btnNav click
function handleBtnNav() {
  btnNav.classList.toggle('active');
  document.body.classList.toggle('mobile-nav-visible');
}

function handleHeaderLanguages() {
  headerLanguages.classList.toggle('active');
}

// function to set css property to html
function setCssProperty(property, value, unit = 'px') {
  if (!property || !value) {
    throw new Error('Both property and value are required');
  }
  document.documentElement.style.setProperty(property, `${value}${unit}`);
}

// function to get the header height
function getAndUpdateHeaderHeight() {
  let currentHeaderHeight = 0;

  if (header) {
    let headerHeight = header.offsetHeight;

    if (headerHeight !== currentHeaderHeight) {
      currentHeaderHeight = headerHeight;
      setCssProperty('--header-height', currentHeaderHeight);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // change the header background when scroll
  let top = 0;
  window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    // store the scroll position in sessionStorage
    sessionStorage.setItem('scrollPosition', scrollTop);

    if (scrollTop > top) {
      header.classList.add('header-white-bg');
    } else {
      header.classList.remove('header-white-bg');
    }
  });

  // check sessionStorage for scroll position on page load
  window.addEventListener('load', function() {
    const storedScrollPosition = sessionStorage.getItem('scrollPosition');

    // If there's a stored scroll position, update the header accordingly
    if (storedScrollPosition && parseInt(storedScrollPosition) > 0) {
      header.classList.add('header-white-bg');
    }
  });

  // click event for btnNav
  if (btnNav) {
    btnNav.addEventListener('click', handleBtnNav);
  }

  if (headerLanguages) {
    headerLanguages.addEventListener('click', handleHeaderLanguages);
  }

  setCssProperty('--viewport-height', window.innerHeight);
  window.addEventListener('resize', () => {
    setCssProperty('--viewport-height', window.innerHeight);

    // check if the window inner width is > then 992px and the mobile menu is open and if so - remove the active class from btn and mobile-nav-visible from body
    if (
      window.innerWidth > 992 &&
      document.body.classList.contains('mobile-nav-visible')
    ) {
      document.body.classList.remove('mobile-nav-visible');
      btnNav.classList.remove('active');
    }
  });

  // set --header-height to the html and update it when resize
  getAndUpdateHeaderHeight();
  window.addEventListener('resize', getAndUpdateHeaderHeight);
});
