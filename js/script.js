const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

document.addEventListener('DOMContentLoaded', (event) => {
    const element = document.querySelector('.your-element-class'); // Substitua pelo seletor do seu elemento

    element.addEventListener('mouseover', () => {
        element.style.fontVariationSettings = "'wght' 700";
    });

    element.addEventListener('mouseout', () => {
        element.style.fontVariationSettings = "'wght' 300";
    });
});