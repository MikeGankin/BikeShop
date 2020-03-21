'use strict';

$(document).ready(function () {
  $('.bikes__list').slick({
    easing: 'ease',
    infinite: false,
    adaptiveHeight: true,
    initialSlide: 1,
    centerMode: false,
  });
  $('.accessories__list').slick({
    easing: 'ease',
    infinite: false,
    adaptiveHeight: true,
    initialSlide: 1,
    centerMode: false,
  });
});
