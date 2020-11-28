//Navigation Bar

window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})

$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $('.menu-toggle').toggleClass('active')
        $('.nav-bar').toggleClass('active')
    })
})

//Tour Cards

$('.cards-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        760: {
            items: 2
        }
    }
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