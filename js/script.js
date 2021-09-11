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
    },

});

new Swiper('.slider', {
    freeMode: false,
    simulateTouch: false,
    allowTouchMove: false,
    slidesPerView: 3,
    spaceBetween: 0,
    centeredSlides: false,
    slidesPerGroup: 9999,
    initialSlide: 0,
    loop: true,
    autoplay: {
        delay: 0,
        // waitForTransition: false,
    },
    speed: 99999,
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // }
});
// -------burger---------
$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $("body").toggleClass('no-scroll');
    });
    $('.header__menu').click(function(event) {
        $('.header__burger,.header__menu').removeClass('active');
        $("body").removeClass('no-scroll');
        removeClass
    });
    // ------------popup------------------
    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');
        $("body").addClass('no-scroll');

    });

    modalClose.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.popup');

        modalParent.removeClass('show');
        $("body").removeClass('no-scroll');
    });

    $('.popup').on("click", function(event) {

        $(this).removeClass('show');
        $("body").removeClass('no-scroll');
    });

    $('.popup__content').on("click", function(event) {
        event.stopPropagation()
    });

});