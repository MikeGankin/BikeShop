'use strict';

$(document).ready(function () {

  $('.bikes__list').slick({
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1365,
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
    initialSlide: 3,
    infinite: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1365,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      }
    ]
  });

  $('.header__hamburger').click(function (event) {
    event.preventDefault();
    $('.header__hamburger').toggleClass('hamburger-clicked');
    $('.nav').toggleClass('nav-opened');
  });

  $(window).resize(function () {
    var width = $(window).width();
    console.log(width);

    if (width < 1440) {
      $('.filters-link').click(function (event) {
        event.preventDefault();
        $('.filters-link').addClass('link-clicked');
        $('.filter__options').addClass('filter-opened');
        $('.catalog__list').addClass('opacity');
      });

      $('.filter-close').click(function (event) {
        event.preventDefault();
        $('.filters-link').removeClass('link-clicked');
        $('.filter__options').removeClass('filter-opened');
        $('.catalog__list').removeClass('opacity');
      });
    }
  });

  $('.list-button--bikes').click(function (event) {
    event.preventDefault();
    $('.list-button--bikes').toggleClass('button-clicked');
    $('.bikes-selection').toggleClass('list-opened');
    $('.electro-bikes').toggleClass('list-active');
  });

  $('.list-button--producer').click(function (event) {
    event.preventDefault();
    $('.list-button--producer').toggleClass('button-clicked');
    $('.producer-selection').toggleClass('list-opened');
    $('.electro-bikes').toggleClass('list-active');
  });

  $('.list-button--material').click(function (event) {
    event.preventDefault();
    $('.list-button--material').toggleClass('button-clicked');
    $('.material-selection').toggleClass('list-opened');
    $('.electro-bikes').toggleClass('list-active');
  });

  $('.list-button--color').click(function (event) {
    event.preventDefault();
    $('.list-button--color').toggleClass('button-clicked');
    $('.color-selection').toggleClass('list-opened');
    $('.electro-bikes').toggleClass('list-active');
  });

  $('.list-button--size').click(function (event) {
    event.preventDefault();
    $('.list-button--size').toggleClass('button-clicked');
    $('.size-selection').toggleClass('list-opened');
    $('.electro-bikes').toggleClass('list-active');
  });

  $('.list-button--wheels').click(function (event) {
    event.preventDefault();
    $('.list-button--wheels').toggleClass('button-clicked');
    $('.wheels-selection').toggleClass('list-opened');
    $('.electro-bikes').toggleClass('list-active');
  });

  $('.list-button--speed').click(function (event) {
    event.preventDefault();
    $('.list-button--speed').toggleClass('button-clicked');
    $('.speed-selection').toggleClass('list-opened');
    $('.electro-bikes').toggleClass('list-active');
  });
});
