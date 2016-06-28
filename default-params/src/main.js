//Example 1
function applyDiscount(cost, discount= .10) {
  return cost - (cost * discount)
}

console.log(applyDiscount(100));



//Calling a function as a default param
function defaultDiscountRate() {
  return 0.50;
}

function applyDiscount2( cost, discount=defaultDiscountRate() ) {
  return cost - (cost * discount);
}

console.log("Second example: " + applyDiscount2(100));
