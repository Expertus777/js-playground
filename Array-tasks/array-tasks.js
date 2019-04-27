/*
 * Write a function that return sum of all array elements, without creating new variable
 *
 * Example: sumArr([2,6,1,9]); // 18
 */


let arr = [5,5,7,10];
console.log('Arr: ', arr);

function sumArr(arr) {
  this.sum = 0;
  this.i = 0;
  for(this.i; this.i < arr.length; this.i++) {
    this.sum += arr[i];
  }
  return this.sum;
}

console.log('sumArr through "for" loop: ', sumArr(arr));


// Right way
function sumArr2(arr) {
  return arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });
}

console.log(`sumArr [${[2,6,1,9]}] by reducer: `, sumArr2([2,6,1,9])); // 18
