function getPerson() {
  let name = 'John';
  let age = 25;

  return {
    name,
    age,
    greet() {
      return `Hello, ${this.name}`;
    }
  };
}

console.log(getPerson().greet());


//Example of Object Destructuring
let woman = {
  firstName: 'Karen',
  favouriteAge: 25
};

let { firstName, favouriteAge } = woman;

console.log(firstName, favouriteAge);



//Example of using Object Destructuring as params
//
function getData({result, count}) {
  console.log(result, count);
}

getData({
  name: 'Sara',
  age: 50,
  result: ['foo', 'bar'],
  count: 30
});


//Last Example
function greet({name, age}) {
  console.log(`Hello ${name}, you are ${age}`);
}

greet({
  name: 'Martin',
  age: 30
});
