"use strict";

//Example of Rest
function sum() {
  for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  return numbers.reduce(function (prev, current) {
    return prev + current;
  });
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

//Example of Spread
function sumtwo(x, y) {
  return x + y;
}

var nums = [9, 10];

console.log(sumtwo.apply(undefined, nums));