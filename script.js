'use strict';
import $ from 'jquery';

$(document).ready(function () {
  $('.list-item:first').hover(function() {
    $(this).toggleClass('active');
  });
  $('.list-item:eq(2)').on('click', function() {
    $('.image:even').fadeToggle('slow');
  });
   $('.list-item:eq(4)').on('click', function() {
    $('.image:odd').animate({
      opacity: 'toggle',
      height: 'toggle'
    }, 2000);
  });
});


// function generator
// function* generator() {
//   yield 'S';
//   yield 'c';
//   yield 'r';
//   yield 'i';
//   yield 'p';
//   yield 't';
// }

// const str = generator();
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());

function* count(n) {
  for (let i = 0; i <= n; i++) {
    yield i;
  }
}
// const counter = count(7);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);

for (let k of count(7)) {
  console.log(k)
}

