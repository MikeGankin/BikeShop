'use strict';

$(document).ready(function () {
  $('.bikes__list').slick({
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  });

  $('.accessories__list').slick({
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  });

  $('.header__hamburger').click(function (event) {
    $('.header__hamburger').toggleClass('clicked');
    $('.nav').toggleClass('opened');
  });
});
