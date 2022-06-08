const bodyStyles = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyles.getPropertyValue('--grid-gap'));


const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: gap,
    loop: true,
    navigation: {
        nextEl: '.portfolio-section__next',
        prevEl: '.portfolio-section__prev',
    },
});

const swiperRecalls = new Swiper('.swiperRecalls', {
    slidesPerView: 1,
    spaceBetween: gap,
    loop: true,
    navigation: {
        nextEl: '.recalls-section__next',
        prevEl: '.recalls-section__prev',
    },
});

