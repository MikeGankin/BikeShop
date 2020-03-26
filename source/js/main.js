'use strict';

$(document).ready(function () {
  $('.bikes__list').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
  });

  $('.main-header__hamburger').click(function (event) {
    $('.main-header__hamburger').toggleClass('clicked');
    $('.main-nav').toggleClass('opened');
  });
});
