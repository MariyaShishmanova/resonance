import './src/styles/main.scss';

// libraries
import './node_modules/splitting/dist/splitting.css';
import './node_modules/splitting/dist/splitting-cells.css';
import Splitting from 'splitting';
import './node_modules/animate.css';

import './src/scripts/parallax';
import './src/scripts/sliderTeam';
import './src/scripts/intersectionObserver';
import './src/scripts/servicesListTabs';
import './src/scripts/parallaxBgImage';
import './src/scripts/header';
import './src/scripts/portfolioFilter';
import './src/scripts/sliderTestimonials';
import './src/scripts/sliderBoxes';
import './src/scripts/smoothScroll';
import './src/scripts/accordion';
import './src/scripts/smoothScrollToSections';


// initialize rellax parallax library
const rellax = new Rellax('.rellax');

document.addEventListener('DOMContentLoaded', function() {
  // initialize wow library, to activate the animations when scroll to them
  new WOW().init();
  // initialize splitting library for the animation of the headings
  Splitting();

  // add class visible after the animation starts (the elements are invisible before that)
  document.querySelectorAll('.wow').forEach(function(element) {
    element.addEventListener('animationstart', function() {
      this.classList.add('visible');
    });
  });
});
