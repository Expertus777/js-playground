/*
var name = 'Ruslan';

function() {
  var name = 'Jack';
}
*/

var name = 'Ruslan';

var person1 = {
  setName: function() {
    name = 'Json';
  }
};

console.log('1: ', name);
person1.setName();
console.log('2: ', name);
console.log('3: ', person1.name);
