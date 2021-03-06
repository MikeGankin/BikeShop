'use strict';

$(document).ready(function () {
  $('.bikes__list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    adaptiveHeight: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          initialSlide: 4,
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          initialSlide: 4,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 320,
        settings: {
          initialSlide: 4,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.accessories__list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    adaptiveHeight: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          initialSlide: 4,
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          initialSlide: 4,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 320,
        settings: {
          initialSlide: 4,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.main-header__hamburger').click(function (event) {
    $('.main-header__hamburger').toggleClass('clicked');
    $('.main-nav').toggleClass('opened');
  });
});
