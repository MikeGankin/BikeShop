'use strict';

var leftBtn = document.querySelector('.bikes__left-btn');
var rightBtn = document.querySelector('.bikes__right-btn');

function SliderControl() {
  leftBtn.addEventListener('click', function(e) {
    e.preventDefault();
  }
}

console.log(SliderControl());