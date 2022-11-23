"use strict"

// & Создание выплывающего меню

const menuBtn = document.querySelector(".menu-btn");
const headerNav = document.querySelector(".header__nav");

menuBtn.addEventListener('click', function(e) {
    headerNav.classList.toggle('_active');
    document.querySelector(".menu-btn__content").classList.toggle('_active');
})

// & Выплывающее меню пользователя

const userProfileBtn = document.querySelector('.bxs-user');
const userProfileList = document.querySelector('.header__user-list');

userProfileBtn.addEventListener('click', function (e) {
    userProfileList.classList.toggle('_active');
})

// & Скролл шапки

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

// & Смена вида плиток новостей

const newsButtonsList = document.querySelector('#list-news');
const newsButtonsBrick = document.querySelector('#brick-news');

const newsContent = document.querySelector('.news__row');

try {
    newsButtonsBrick.addEventListener('click', function (e) {
        if(newsContent.classList.contains('list-news')) {
            newsContent.classList.remove('list-news');
            newsContent.classList.add('brick-news');
            newsButtonsBrick.classList.add('_active');
            newsButtonsList.classList.remove('_active');
        }
    })
} catch (error) {
    
}
try {
    newsButtonsList.addEventListener('click', function (e) {
        if(newsContent.classList.contains('brick-news')) {
            newsContent.classList.remove('brick-news');
            newsContent.classList.add('list-news');
            newsButtonsBrick.classList.remove('_active');
            newsButtonsList.classList.add('_active');
        }
    })
} catch (error) {
    
}

// & Раскрытие аккордеона

const listButton = document.querySelectorAll('.news__filter-accordion');

listButton.forEach(el => {
    el.addEventListener('click', function (e) {
        el.classList.toggle('_active');

        el.parentElement.nextElementSibling.classList.toggle('_active');
    })
});