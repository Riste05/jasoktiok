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
            ele.style.transform = 'translateX(42%)';
        }, 800 + delay)
        delay += 150;
    })

})

/////////////////////////////////////////////////
const yearsOfExperience = document.querySelector('.years-of-experience');
const happyClient = document.querySelector('.happy-client');

const bannerContainer = document.querySelector('.banner-container');

const observer = new IntersectionObserver((entries, observe) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
        years();
        client();
        observe.unobserve(bannerContainer)
    }

}, { threshold: 0.2 })

observer.observe(bannerContainer)


function years() {
    let countYears = 0;

    const stopYear = setInterval(() => {
        countYears++;
        yearsOfExperience.textContent = `${countYears}+`;
        if (countYears === 20) clearInterval(stopYear)
    }, 400);
}

function client() {
    let countClient = 0;

    const stopClient = setInterval(() => {
        countClient++;
        happyClient.textContent = `${countClient}+`;
        if (countClient === 800) clearInterval(stopClient)
    }, 10)
}


/////////////////////////////////////////////////

const aboutContentContent = document.querySelector('.about-content_content');
const aboutContentImg = document.querySelector('.about-content_img');
const asideA = document.querySelectorAll('.aside ul li');
const socialMedia = document.querySelectorAll('.social-media');


ScrollReveal({
    distance: '150px',
    duration: 2500
})

ScrollReveal().reveal(aboutContentContent, { origin: 'bottom', })
ScrollReveal().reveal(aboutContentImg, { origin: 'top', })

ScrollReveal().reveal(asideA, {
    origin: 'left',
    interval: 250,
    delay: 0,
    duration: 1000
})
ScrollReveal().reveal(socialMedia, {
    origin: 'bottom',
    delay: 1000,
})


/////////////////////////////////////////////////


const galleryImage = document.querySelectorAll('.gallery img');
const popUpImage = document.querySelector('.pop-up-image');
const closeGallery = document.querySelectorAll('.pop-up-image span');

galleryImage.forEach((ele, i) => {
    const imgAttr = ele.getAttribute('src');

    ele.addEventListener('click', function () {
        popUpImage.style.display = 'block';
        document.querySelector('.pop-up-image img').src = imgAttr;
    })


})

closeGallery.forEach(btn => {
    btn.addEventListener('click', function () {
        popUpImage.style.display = 'none';
    })
})


////////////////////////////////////

$(document).ready(function () {
    $('.carousel').carousel({
        padding: 400,
        numVisible: 5,
        // noWrap: true,
        duration: 250,
        dist: -250,
        // ako sakam tocki da gi klikam
        // indicators: true,
    });

    // setInterval(function () {
    //     $('.carousel').carousel('next')
    // }, 3000)

});