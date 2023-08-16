const SlideshowImages= document.querySelectorAll(".intro-slideshow img")
let counter=0;
SlideshowImages[counter].style.display="block";
setInterval(nextImage,3000);
function nextImage(){
    SlideshowImages[counter].style.display="none";
    counter= (counter+1)% SlideshowImages.length;
    SlideshowImages[counter].style.display="block";
}