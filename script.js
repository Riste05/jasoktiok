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
const asideA = document.querySelectorAll('.aside ul li');
const socialMedia = document.querySelectorAll('.social-media');


ScrollReveal({
    distance: '150px',
    duration: 2500,
    delay: 500
})

ScrollReveal().reveal(aboutContentContent, { origin: 'top', })
ScrollReveal().reveal(aboutContentImg, { origin: 'bottom', })
ScrollReveal().reveal(asideA, {
    origin: 'left',
    interval: 250,
    delay: 0,
    duration: 1300
})
ScrollReveal().reveal(socialMedia, {
    origin: 'bottom',
    delay: 1500

})

/////////////////////////////////////////////////

