"use strict"

// & Создание выплывающего меню

const menuBtn = document.querySelector(".menu-btn");
const headerNav = document.querySelector(".header__nav");

menuBtn.addEventListener('click', function(e) {
    headerNav.classList.toggle('_active');
    document.querySelector(".menu-btn__content").classList.toggle('_active');
})


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

// & Скролл шапки

console.log(window.pageYOffset)

window.addEventListener('scroll', function (e) {
    if (window.pageYOffset > 0) {
        document.querySelector('.header').classList.add('_scroll');
    } else {
        document.querySelector('.header').classList.remove('_scroll');
    }
})

// & Cоздание темной темы

const toggleSwitch = document.querySelector('#theme-block__checkbox');
const currentTheme = localStorage.getItem('data-theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme === 'dark'){
        toggleSwitch.checked = true;
    }
}
function switchTheme(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('data-theme', 'dark');
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('data-theme', 'light');
    }
}
toggleSwitch.addEventListener('change', switchTheme, false);