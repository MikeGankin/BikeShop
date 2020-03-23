'use strict';

$(document).ready(function () {
  $('.bikes__list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2,
        }
      }
    ]
  });

  $('.accessories__list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          initialSlide: 4,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 320,
        settings: {
          initialSlide: 4,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.main-header__hamburger').click(function (event) {
    $('.main-header__hamburger').toggleClass('clicked');
    $('.main-nav').toggleClass('opened');
  });
});
