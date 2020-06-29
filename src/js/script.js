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
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    autoplay: true,
                    arrows: false,
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
    $(".clients__carousel").slick({
        dots: false,
        infinite: true,
        speed: 1500,
        autoplay: false,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
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
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    autoplay: true,
                    arrows: false,
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

    $('.clients__carousel').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('#clients__dots a.clients__dot_active').removeClass('clients__dot_active');
        $('#clients__dots a').eq(nextSlide).addClass('clients__dot_active');
    });
    $('#clients__dots a').on('click', function (e) {
        e.preventDefault();
        $('#clients__dots a.clients__dot_active').removeClass('clients__dot_active');
        $(this).addClass('clients__dot_active');
        var targetSlide = $(this).data('target');
        $('.clients__carousel').slick('slickGoTo', targetSlide);
    });

    $('ul.latest__tabs').on('click', 'li:not(.latest__tab_active)', function () {
        $(this)
            .addClass('latest__tab_active').siblings().removeClass('latest__tab_active')
            .closest('div.container').find('div.latest__content').removeClass('latest__content_active').eq($(this).index()).addClass('latest__content_active');
    });
});