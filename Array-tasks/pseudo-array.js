let temp;
let fruits = ['Apple', 'Banana', 'Pineapple', 'Kiwi', 'Peach', 'Orange'];

// Pseudo-array:
let pseudoArrCars = {
    0: 'Honda',
    40: 'Mercedes',
    30: 'BMW',
    length: 300
};
let ArrCars;


/**
 * Method slice
 *
 * Cut the array and return the copy of initial Array. Initial array stay without changes.
 *
 * Also slice can be used for creating an Array from Pseudo Array Structures or Iterable objects
 */

temp = fruits.slice(1,3); // return ['Banana', 'Pineapple']
ArrCars = Array.prototype.slice.call(pseudoArrCars);

console.log('temp: ', temp);
console.log('pseudoArrCars: ', pseudoArrCars);
console.log('ArrCars: ', ArrCars);
