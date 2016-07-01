//ES5 Constructor Method for "Classes"
function User(username, email) {
  this.username = username;
  this.email = email;
}

User.prototype.changeEmail = function(newEmail) {
  this.email = newEmail;
};

var user = new User('Shaiiblahblahblah', 'shaii@blahblahblah.com');
console.dir(user);


//ES6 Syntactic Sugar

class Person {

  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  //Using rest and spread to pass in the arguments name and age
  static register(...args) {
    return new Person(...args);
  }

  //Can use getters/setters
  get foo() {
    return 'foo';
  }

  changeName(newName) {
    this.name = newName;
  }
}

//let person = new Person('shaiiblahblahblah', 28);
let person = Person.register('shaiiblahblahblah', 28);
//person.changeName('shaiibobloblaw');
console.dir(person);
console.log(person.foo);
