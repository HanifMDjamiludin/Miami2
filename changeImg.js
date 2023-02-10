var imageContainer = document.querySelector(".u-section-1");
var imageArray = ['linear-gradient(0deg, rgba(51,51,41,0.45), rgba(51,51,41,0.45)), url("images/NextBest.jpg")', 'linear-gradient(0deg, rgba(51,51,41,0.45), rgba(51,51,41,0.45)), url("images/Dusk.jpg")'];
var imageIndex = 0;

function changeImage() {
  imageContainer.style.backgroundImage = imageArray[imageIndex];
  if(imageIndex == 0){
    imageIndex=1;
  }else{
    imageIndex=0;
  }
}

setInterval(changeImage, 4300);