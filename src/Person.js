class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return this.name + ' says hello from the outside.';
  }
}

console.log(new Person('Shaii').greet());
