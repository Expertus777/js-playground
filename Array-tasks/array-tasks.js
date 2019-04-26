/*
 * Write a function that return sum of all array elements, without creating new variable
 *
 * Example: sumArr([2,6,1,9]); // 18
 */


let arr = [2,5,7,10];
let arrSum = 0;
function sumArr(arr) {
  for(let i = 0; i < arr.length; i++) {
    arrSum += arr[i];
  }
}

sumArr(arr);
console.log('arrSum: ', arrSum);
