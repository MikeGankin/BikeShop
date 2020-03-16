'use strict';

var leftBtn = document.querySelector('.bikes__left-btn');
var rightBtn = document.querySelector('.bikes__right-btn');

function sliderControl() {
  leftBtn.addEventListener('click', function (e) {
    e.preventDefault();
  });
  rightBtn.addEventListener('click', function (e) {
    e.preventDefault();
  });
}

console.log(sliderControl());
