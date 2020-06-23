$(document).ready(function () {
    $(".teams__carousel").slick({
        dots: false,
        infinite: true,
        speed: 1500,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/previus.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/next.png"></button>',
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    slidesToScroll: 1,
                },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });
});