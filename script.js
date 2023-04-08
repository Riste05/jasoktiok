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

const aboutContentContent = document.querySelector('.about-content_content');
const aboutContentImg = document.querySelector('.about-content_img');

ScrollReveal().reveal(aboutContentContent, {
    origin: 'top',
    distance: '150px',
    duration: 2500,
    delay: 500,
})

ScrollReveal().reveal(aboutContentImg, {
    origin: 'bottom',
    distance: '100px',
    duration: 2500,
    delay: 500,
})

/////////////////////////////////////////////////

