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