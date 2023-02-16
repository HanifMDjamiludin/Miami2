// instant transition between two images
// var imageContainer = document.querySelector(".u-section-1");
// var imageArray = ["NextBest.jpg", "Dusk.jpg"];
// var imageIndex = 0;

// function changeImage() {
//   imageContainer.style.backgroundImage = imageArray[imageIndex];
//   if(imageIndex == 0){
//     imageIndex=1;
//   }else{
//     imageIndex=0;
//   }
// }
// setInterval(changeImage, 4300);





//instant transition, linear gradient messes it up
// const images = [
//   "linear-gradient(rgba(51,51,41,0.45), rgba(51,51,41,0.45)), url('NextBest.jpg')",
//   "linear-gradient(rgba(51,51,41,0.45), rgba(51,51,41,0.45)), url('Dusk.jpg')"
// ];
// let currentIndex = 0;

// function changeBackground() {
//   const section = document.querySelector(".u-section-1");
//   currentIndex = (currentIndex + 1) % images.length;
//   section.style.backgroundImage = `url(${images[currentIndex]})`;
// }

// setInterval(changeBackground, 5000);


const section = document.getElementById('sec-279e');
const backgrounds = ['background1', 'background2'];
let counter = 0;

setInterval(() => {
  section.classList.remove(backgrounds[counter === 0 ? backgrounds.length - 1 : counter - 1]);
  section.classList.add(backgrounds[counter]);
  counter = (counter + 1) % backgrounds.length;
}, 4500);

