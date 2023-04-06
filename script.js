'use strict';

const menuBurgerOpen = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('.mobile-nav');

const anchorText = document.querySelectorAll('.mobile-nav li a');

let delay = 0;

menuBurgerOpen.addEventListener('click', function () {
    menuBurgerOpen.classList.toggle('open');
    mobileNav.classList.toggle('active')

    anchorText.forEach(ele => {
        setTimeout(function () {
            ele.style.transform = 'translateX(40%)';
        }, 800 + delay)
        delay += 150;
    })

})

/////////////////////////////////////////////////




