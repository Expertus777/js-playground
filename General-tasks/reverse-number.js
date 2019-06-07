/*
 * Reverse number function
 *
 * Accepted param: number
 * Returned result: reverse number
 *
 * Examples: reversNumber(12345678) // 87654321
 */

function reverseNumber(number) {
  const result = parseFloat(number.toString().split('').reverse().join('')) * Math.sign(number);
  console.log('Input: ' + number, 'Output: ' + result);
  return result;
}

reverseNumber(-32562321);



