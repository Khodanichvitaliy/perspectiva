$(document).ready(function(){
    $('.manufacture__slider').slick({
        arrows:true,
        dots:true,
        slidesToShow:1,
        slidesToScroll:1,
        fade:true
    });

    $('.manufacture-small__slider').slick({
        arrows:false,
        dots:false,
        slidesToShow:2,
        slidesToScroll:1,
        adaptiveHeight:true
    });
    $('.packaging__slider').slick({
        arrows:false,
        dots:false,
        slidesToShow:1,
        fade:true,
        autoplay:true,
        autoplaySpeed:300
    });
    $('.products__item').slick({
        arrows:true,
        appendArrows:".products__arrows",
        dots:true,
        slidesToShow:3,
        appendDots:".products__pagination"
    });
});
window.addEventListener("resize", function() {
    if (window.innerWidth <= 768) {
        $('.products__item').slick('unslick');
        sliderIsLive = false;
    }
    else {
        if (sliderIsLive) {
        $('.products__item').slick();
        sliderIsLive = true;
    }
    }
});

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.pull-out-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});