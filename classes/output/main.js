'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//ES5 Constructor Method for "Classes"
function User(username, email) {
  this.username = username;
  this.email = email;
}

User.prototype.changeEmail = function (newEmail) {
  this.email = newEmail;
};

var user = new User('Shaiiblahblahblah', 'shaii@blahblahblah.com');
console.dir(user);

//ES6 Syntactic Sugar

var Person = function () {
  function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  //Using rest and spread to pass in the arguments name and age


  _createClass(Person, [{
    key: 'changeName',
    value: function changeName(newName) {
      this.name = newName;
    }
  }, {
    key: 'foo',


    //Can use getters/setters
    get: function get() {
      return 'foo';
    }
  }], [{
    key: 'register',
    value: function register() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return new (Function.prototype.bind.apply(Person, [null].concat(args)))();
    }
  }]);

  return Person;
}();

//let person = new Person('shaiiblahblahblah', 28);


var person = Person.register('shaiiblahblahblah', 28);
//person.changeName('shaiibobloblaw');
console.dir(person);
console.log(person.foo);