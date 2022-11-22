// & Слайдер

const sliderImages = document.querySelectorAll('.slider-item__img');
const sliderLine = document.querySelector('.banner-section__slider-line');

let count = 0;
let width;

function init() {
    width = document.querySelector('.banner-section__slider').offsetWidth;

    sliderLine.style.width = width * sliderImages.length + "px";

    rollSlider();
}

window.addEventListener('resize', init)
init();

document.querySelector('.slider-btn__prev').addEventListener('click', function(){
    count--;

    if(count < 0) {
        count = sliderImages.length - 1;
    }

    rollSlider();
})

document.querySelector('.slider-btn__next').addEventListener('click', function(){
    count++;

    if(count >= sliderImages.length) {
        count = 0;
    }

    rollSlider();
})

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}