const backgroundImages = [
  "Dusk.jpg",
  "NextBest.jpg"
];

let currentImageIndex = 0;

function updateBackgroundImage(){
  if (currentImageIndex == 0){

    document.querySelector(".u-section-1").style.backgroundImage = 'linear-gradient(0deg, rgba(51,51,41,0.45), rgba(51,51,41,0.45)), url("images/NextBest.jpg")';

    currentImageIndex = 1;
  }else{

    document.querySelector(".u-section-1").style.backgroundImage = 'linear-gradient(0deg, rgba(51,51,41,0.45), rgba(51,51,41,0.45)), url("images/Dusk.jpg")';

    currentImageIndex = 0;
  }

}
setInterval(updateBackgroundImage, 5000);