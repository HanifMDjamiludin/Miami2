// make elements appear on scroll
const elements = document.querySelectorAll(".hidden");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      });
      elements.forEach((element) => {
        observer.observe(element);
      });

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
  if(counter == 0){
    counter = 1;
  }else{
    counter = 0;
  };
}, 5000);

