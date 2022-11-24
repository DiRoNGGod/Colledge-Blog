"use strict"

// & Создание выплывающего меню

const menuBtn = document.querySelector(".menu-btn");
const headerNav = document.querySelector(".header__nav");

try {
    menuBtn.addEventListener('click', function(e) {
        headerNav.classList.toggle('_active');
        document.querySelector(".menu-btn__content").classList.toggle('_active');
    })
} catch (error) {
    
}

// & Выплывающее меню пользователя

const userProfileBtn = document.querySelector('.bxs-user');
const userProfileList = document.querySelector('.header__user-list');

document.addEventListener('click', function (e) {
    if(!(e.target.closest('.header__user-list')) && !(e.target.closest('.bxs-user'))) {
        userProfileList.classList.remove('_active');
    }
    
    if(e.target.closest('.bxs-user')) {
        userProfileList.classList.toggle('_active');
    }
})
document.addEventListener('scroll', function() {
    if(userProfileList.classList.contains('_active')) {
        userProfileList.classList.remove('_active');
    }
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
const listContent = document.querySelectorAll('.news__filter-category-list');

listButton.forEach(el => {
    el.addEventListener('click', function (e) {
        let listContentElement = el.parentElement.nextElementSibling;

        if (!(e.target.closest('.news__filter-accordion').classList.contains('_active'))) {
            listButton.forEach(el => {
                el.classList.remove('_active');
                listContentElement.classList.remove('_active');
            });

            listContent.forEach(el => {
                el.style.maxHeight = null;
            });
        }
        
        el.classList.toggle('_active');
        listContentElement.classList.toggle('_active');

        if(listContentElement.classList.contains('_active')) {
            listContentElement.style.maxHeight = listContentElement.scrollHeight + "px";
        } else {
            listContentElement.style.maxHeight = null;
        }
    })
});

const listHelpButton = document.querySelectorAll('.help__accordeon-btn');
const helpContent = document.querySelectorAll('.help__accordeon-answer');

listHelpButton.forEach(el => {
    el.addEventListener('click', function (e) {

        let helpContentElement = el.parentElement.nextElementSibling;

        if (!(e.target.closest('.help__accordeon-btn').classList.contains('_active'))) {
            listHelpButton.forEach(el => {
                el.classList.remove('_active');
                helpContentElement.classList.remove('_active');
            });

            helpContent.forEach(el => {
                el.style.maxHeight = null;
            });
        }
        
        el.classList.toggle('_active');
        helpContentElement.classList.toggle('_active');

        if(helpContentElement.classList.contains('_active')) {
            helpContentElement.style.maxHeight = helpContentElement.scrollHeight + "px";
        } else {
            helpContentElement.style.maxHeight = null;
        }
    })
});