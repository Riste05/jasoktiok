'use strict';

const menuBurgerOpen = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('.mobile-nav');

const mobileNavLi = document.querySelectorAll('.mobile-nav li');

let delay = 0;

menuBurgerOpen.addEventListener('click', function () {
    menuBurgerOpen.classList.toggle('open');
    mobileNav.classList.toggle('active')

    mobileNavLi.forEach(ele => {
        setTimeout(function () {
            ele.style.transform = 'translateX(40%)';
        }, 600 + delay)
        delay += 150;
    })

})






