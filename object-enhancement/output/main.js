'use strict';

function getPerson() {
  var name = 'John';
  var age = 25;

  return {
    name: name,
    age: age,
    greet: function greet() {
      return 'Hello, ' + this.name;
    }
  };
}

console.log(getPerson().greet());

//Example of Object Destructuring
var woman = {
  firstName: 'Karen',
  favouriteAge: 25
};

var firstName = woman.firstName;
var favouriteAge = woman.favouriteAge;


console.log(firstName, favouriteAge);

//Example of using Object Destructuring as params
//
function getData(_ref) {
  var result = _ref.result;
  var count = _ref.count;

  console.log(result, count);
}

getData({
  name: 'Sara',
  age: 50,
  result: ['foo', 'bar'],
  count: 30
});

//Last Example
function greet(_ref2) {
  var name = _ref2.name;
  var age = _ref2.age;

  console.log('Hello ' + name + ', you are ' + age);
}

greet({
  name: 'Martin',
  age: 30
});