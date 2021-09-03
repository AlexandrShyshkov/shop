new Swiper('.sell-slider', {
    slidesPerView: 3,
    // spaceBetween: 1,
    centeredSlides: false,
    initialSlide: 1,
    // loop: true,
    // autoplay: {
    //     delay: 0,
    // },
    // speed: 20000,
    effect: 'coverflow',

    coverflowEffect: {
        rotate: 20,
        stretch: 150,
        slidesShadow: false,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});

new Swiper('.slider', {
    slidesPerView: 3,
    spaceBetween: 0,
    centeredSlides: false,
    // initialSlide: 1,
    // loop: true,
    // autoplay: {
    //     delay: 0,
    // },
    // speed: 20000,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});