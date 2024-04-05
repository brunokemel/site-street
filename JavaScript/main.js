$(document).ready(function() {
    $('.menu-hambuerguer').click(function() {
        $('nav').slideToggle();
    })

    $('.carrossel').slick({
        prevArrow: false,
        autoplay: true
    });
})