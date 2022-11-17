"use strict"

// & Создание выплывающего меню

const menuBtn = document.querySelector(".menu-btn");
const headerNav = document.querySelector(".header__nav");

menuBtn.addEventListener('click', function(e) {
    headerNav.classList.toggle('_active');
    document.querySelector(".menu-btn__content").classList.toggle('_active');
})