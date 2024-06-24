$(document).ready(function() {

    var wind = $(window);

    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: false,
        live: false
    });
    wow.init();

    // ----------- fixed navbar -----------

    wind.on("scroll", function() {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar .custom-navbar")

        if (bodyScroll > 200) {

            navbar.addClass("fixed");

        } else {

            navbar.removeClass("fixed");
        }
    });



    // ---------- to top -----------
    $('.to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });


    // -------------- nav-toggle ------------
    $('.nav-toggle').click(function() {
        $('.navbar .custom-navbar .nav-list').toggleClass('show');
        $(this).toggleClass('active');
        $('.navbar .custom-navbar .overlay').toggleClass('show');
    })
    $('.navbar .custom-navbar .overlay').click(function() {
        $(this).removeClass('show');
        $('.navbar .custom-navbar .nav-list').removeClass('show');
        $('.nav-toggle').removeClass('active');
    })

    // ---------- to bottom -----------
    $('header .scroll-down').click(function() {
        var services = $(".services").offset().top;
        $('html, body').animate({
            scrollTop: services
        }, 1000);
        return false;
    });
});


// ------------ swiper sliders -----------
$(document).ready(function() {
    // ------------ head slider -----------
    // var swiper = new Swiper('.swiper-head', {
    //     speed: 1000,
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //     },
    //     mousewheel: false,
    //     keyboard: true,
    //     autoplay: {
    //         delay: 4000,
    //     },
    //     loop: true,
    // });

    var swiper = new Swiper('.header .header_swiper', {
        speed: 1000,
        pagination: {
            el: '.header .swiper-pagination',
            clickable: true,
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
    });

    var swiper = new Swiper('.partners_sec .partners_swiper', {
        speed: 1000,
        pagination: {
            el: '.partners_sec .swiper-pagination',
            clickable: true,
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 6,
                spaceBetween: 20,
            },
        }
    });
});