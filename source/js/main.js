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
          infinite: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          infinite: false,
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
          infinite: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          initialSlide: 4,
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          infinite: false,
        }
      },
      {
        breakpoint: 320,
        settings: {
          initialSlide: 4,
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        }
      }
    ]
  });
});
