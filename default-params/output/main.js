"use strict";

//Example 1
function applyDiscount(cost) {
  var discount = arguments.length <= 1 || arguments[1] === undefined ? .10 : arguments[1];

  return cost - cost * discount;
}

console.log(applyDiscount(100));

//Calling a function as a default param
function defaultDiscountRate() {
  return 0.50;
}

function applyDiscount2(cost) {
  var discount = arguments.length <= 1 || arguments[1] === undefined ? defaultDiscountRate() : arguments[1];

  return cost - cost * discount;
}

console.log("Second example: " + applyDiscount2(100));