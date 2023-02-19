// navbar background color change on scroll
var navbar = document.querySelector('.navbar');

window.onscroll = function() {
  if (window.pageYOffset > 0) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
}

// background image change
const section = document.getElementById('sec-279e');
const backgrounds = ['background1', 'background2'];
let counter = 0;

setInterval(() => {
  section.classList.remove(backgrounds[counter === 0 ? backgrounds.length - 1 : counter - 1]);
  section.classList.add(backgrounds[counter]);
  counter = (counter + 1) % backgrounds.length;
}, 4500);

