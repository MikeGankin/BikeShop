'use strict';

var leftBtn = document.querySelector('.bikes__left-btn');
var rightBtn = document.querySelector('.bikes__right-btn');
var centerBlock = document.querySelector('.bikes__slide-2');

function sliderControl() {
  leftBtn.addEventListener('click', function (e) {
    e.preventDefault();
    centerBlock.classList.add('slideLeft');

  });
  rightBtn.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('Я тоже кнопка');
  });
}

sliderControl();
