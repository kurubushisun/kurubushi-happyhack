$(function($){
    $('.firstview').bgSwitcher({
        images:['images/background1.jpg','images/background2.jpg','images/background3.jpg','images/background4.jpg','images/background5.jpg',],
        interval: 7000,
        loop: true,
    });
    particlesJS.load(
        'particles-js',
        'js/particlesjs-config.json'
    );

    $('.slider').slick({
        autoplay: false,
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
});