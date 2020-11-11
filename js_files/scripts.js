//Navigation Bar
window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY);
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
        600: {
            items: 2
        },
        1000: {
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

// reveal text on scroll

window.addEventListener('scroll', scrollAppear);

function scrollAppear() {
    var textAppear = document.querySelectorAll(".text-appear");

    for (var i = 0; i < textAppear.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = textAppear[i].getBoundingClientRect().top;

        if (revealTop < windowHeight) {
            textAppear[i].classList.add("fadein");
        } else {
            textAppear[i].classList.remove("fadein");
        }
    }
}