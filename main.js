import './src/styles/main.scss';

// libraries
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import Splitting from 'splitting';
import 'animate.css';

import './src/scripts/parallax';
import './src/scripts/slider'
import './src/scripts/intersectionObserver';
import './src/scripts/servicesListTabs';
import './src/scripts/parallaxBgImage';


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
