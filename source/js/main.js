'use strict';

$(document).ready(function () {
  $('.bikes__list').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.main-header__hamburger').click(function (event) {
    $('.main-header__hamburger').toggleClass('clicked');
    $('.main-nav').toggleClass('opened');
  });
});
