let btnMenu = document.querySelector('.menu-btn');
let navbar = document.querySelector('.navbar');
let dataNavbar = navbar.getAttribute('data-navbar');
btnMenu.onclick = function(){
    navbar.classList.toggle("navbar--active");
};
// подключение слайдера
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },
});
// создание темной темы
const toggleSwitch = document.getElementById('input-checkbox');
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
// scroll header
window.addEventListener("scroll", function(){
    var header = document.querySelector(".header");
    header.classList.toggle("header--sticky", window.scrollY > 0);
});