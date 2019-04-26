// Beginning
// For e.g.

let ruslan = {
  name: 'Ruslan',
  yearOfBirth: 1991,
  job: 'Front End Developer',
  age: function () {
    let age = new Date().getUTCFullYear() - this.yearOfBirth;
    console.log(this.name, + ' ' + age, 'years old. ');
    return age;
  }
};

let anna = {
  name: 'Anna',
  yearOfBirth: 2001,
  job: 'Student',
  age: function () {
    let age = new Date().getUTCFullYear() - this.yearOfBirth;
    console.log(this.name, + ' ' + age, 'years old. ');
    return age;
  }
};

ruslan.age();
anna.age();
// But the problem of this 'age' function that we repeated for EACH object that take the place not comfortable to change
// That is why we can move this 'age' function common for all persons instance in object prototype, because it inherit from
// Object

Object.prototype.age = function () {
  let age = new Date().getUTCFullYear() - this.yearOfBirth;
  console.log(this.name, + ' ' + age, 'years old. ');
  return age;
};

// So when we create the new person, we can create it without age method, cause it in the prototype, and we can inherit
// Because when we look for an property in the object where it's not defined, js will look at it in prototype
// For e.g.:

let lucy = {
  name: 'Lucy',
  yearOfBirth: 1983,
  job: 'Project Manager'
};

lucy.age();

/*
 * For object creating in JavaScript commonly used 'Function Constructor (Функция конструктор)' pattern
 */

console.log(
  '%c' + 'For object creating in JavaScript commonly used \'Function Constructor \' pattern (патерн Функция конструктор)',
  'font-size: 18px; color: green'
);

// ==================

let Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

let personWithOutNew = Person('Ruslan', 1991, 'Front End Developer');
console.log('personWithOutNew: ', personWithOutNew);

let personWithNew = new Person('Ruslan', 1992, 'Front End Developer');
console.log('personWithNew: ', personWithNew);
// Keyword 'new' create the new object, and it like call the Person function inside this newly created objects,
// so keyword 'this' refer to this object. The object where the function was called named 'Context'
// because properties are there! And usually we call function inside some object in purpose to manipulate
// the object property. For e.g. return some values, or set some values, or calculate the some new info from props.
// Like age for example from year of birth!

// new is good cause create the new object Parent with constructor property from which we create the instance.
// This parent object in inherit from Object.prototype which leads to null and
// And we can add some functions to prototype!

Person.prototype.getName = function () {
  console.log('My name is: ', this.name);
};
personWithNew.getName();

// Factory function
function person(name, age) {
  return {
    name: name,
    age: age
  }
}

let jane = person('Jane', 14);
console.log('jane: ', jane);

