






const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById('carousel-button-next').addEventListener('click', goToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', goToPreviousSlide);

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
};

function goToPreviousSlide() {
    hideAllSlides();
    if(slidePosition===0){
        slidePosition=totalSlides-1;
    } else{
        slidePosition--;
    };
    slides[slidePosition].classList.add("carousel-item-visible");
}

function goToNextSlide() {
    hideAllSlides();
    if(slidePosition===totalSlides-1){
        slidePosition=0;
    } else{
        slidePosition++;
    };
    slides[slidePosition].classList.add("carousel-item-visible");
};