$(document).ready(function () {
  $(".header__nav").slideUp();
  $(".services__right").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  })
  $(".destination__slider").slick({
    slidesToScroll: 3,
    slidesToShow: 3,
    prevArrow: $('.destination__top-prev'),
    nextArrow: $('.destination__top-next'),
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  })

  $(".testimonials__slider").slick({
    fade: true,
    dots: true,
    infinite: false,
    centerMode: true,
    speed: 500,
  })

  $(".header__burger").click(function () {
    $(this).toggleClass("active");
    $(".header__nav").slideToggle();
    // if ($(this).hasClass("active")) {
    //   $(".header__nav").slideDown();
    // }
    // else {
    //   $(".header__nav").slideUp();
    // }
  })
})



