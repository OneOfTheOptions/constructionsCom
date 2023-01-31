const bodyStyles = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyles.getPropertyValue('--grid-gap'));
const sliderWidth = parseInt(bodyStyles.getPropertyValue(`--slider-width`));

const swiper = new Swiper('.swiper', {
    width: sliderWidth,
    slidesPerView: 3,
    spaceBetween: gap,
    loop: true,
    navigation: {
        nextEl: '.portfolio-section__next',
        prevEl: '.portfolio-section__prev',
    },
});

// const swiperRecalls = new Swiper('.swiperRecalls', {
//     slidesPerView: 1,
//     spaceBetween: gap,
//     loop: true,
//     navigation: {
//         nextEl: '.recalls-section__next',
//         prevEl: '.recalls-section__prev',
//     },
// });
//
// const swiperRelatedProjects = new Swiper('.swiperRelatedProjects', {
//     width: sliderWidth,
//     slidesPerView: 3,
//     spaceBetween: gap,
//     loop: true,
//     navigation: {
//         nextEl: '.related-projects__next',
//         prevEl: '.related-projects__prev',
//     },
// });
//
// //work projects
//  const projectsImages = document.querySelector('.projects-images-slider');
//  if(projectsImages){
//     const project1_nav = new Swiper(".projects-images-nav", {
//         spaceBetween: 20,
//         slidesPerView: 10,
//         freeMode: true,
//         watchSlidesProgress: true,
//     });
//     const project1 = new Swiper(projectsImages, {
//         spaceBetween: 20,
//         slidesPerView: 1,
//         navigation: {
//             nextEl: ".projects-images__next",
//             prevEl: ".projects-images__prev",
//         },
//         thumbs: {
//             swiper: project1_nav,
//         },
//     });
// }
//
//  //similarProjects
// const swiperSimilarProjects = new Swiper('.swiperSimilarProjects', {
//     width: sliderWidth,
//     slidesPerView: 3,
//     spaceBetween: gap,
//     loop: true,
//     navigation: {
//         nextEl: '.similar-projects__next',
//         prevEl: '.similar-projects__prev',
//     },
// });


