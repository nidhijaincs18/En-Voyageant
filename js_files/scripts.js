$(function() {
    $('.cards-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});

// testimonial section

$('.testimonial-box').owlCarousel({
    loop: true,
    margin: 8,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        }
    }
});

// reveal text on scroll

window.addEventListener('scroll', scrollAppear);

function scrollAppear() {
    var textAppear = document.querySelectorAll('.text-appear');

    for (var i = 0; i < textAppear.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = textAppear[i].getBoundingClientRect().top;

        if (revealTop < windowHeight) {
            textAppear[i].classList.add('fadein');
        } else {
            textAppear[i].classList.remove('fadein');
        }
    }
}