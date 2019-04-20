function Person(name, age) {
  this.name = name;
  this.age = age;
}

people = [];

class Animal {
  constructor(bread, age) {
    this.bread = bread;
    this.age = age;
  }
}
let cat1 = new Animal('Cat', 24);
console.log(cat1);

console.log(
  '%c' + 'Scope: ',
  'color: red; font-size: 20px');
let name = 'Ruslan';

let person1 = {
  // name: '',
  setName: function() {
    this.name = 'Json';
    name = 'global reassign';
    return name;
  }
};
console.log('1: ', name);
person1.setName();
console.log('2: ', name);
console.log('3: ', person1.name);

/*
 * Set property function
 * set property to object or global object if run in global scope
 */
console.log(
  '%c' + 'Set property function tests: ',
  'color: red; font-size: 20px');
function setProperty(property, value) {
  this[property] = value;
}
console.log('4: ', window.salary);
setProperty('salary', '$4000');
console.log('5: ', window.salary);

people.push(new Person('Ruslan', 28));

console.log(people[0]);
console.log('Person salary:', people[0].salary);
relust = setProperty.call(people[0], 'salary', '$4000');
console.log('Person salary:', people[0].salary);
console.log(people[0]);


let person2 = new Person('John', 27);
console.log('person2: ', person2);

console.log('instanceof person2: ', person2 instanceof Person);
