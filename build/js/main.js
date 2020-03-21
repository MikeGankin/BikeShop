'use strict';

$(document).ready(function () {
  $('.bikes__list').slick({
    easing: 'ease',
    infinite: false,
    adaptiveHeight: true,
    initialSlide: 1,
    centerMode: true,
    centerPadding: '50px',
  });
  $('.accessories__list').slick({
    easing: 'ease',
    infinite: false,
    adaptiveHeight: true,
    initialSlide: 1,
    centerMode: true,
    centerPadding: '50px',
  });
});
