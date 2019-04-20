/*
 * eval function run string as JavaScript code
 */
simple_string = '2 + 2';
eval_return = eval('2 + 2');

console.log('simple_string: ', simple_string);
console.log('eval_return: ', eval_return);

/*
 * void, give possibility to do something and return always undefined
 */
void 0; // return undefined;
void (2+2); // return undefined;

// Can be used to identify theIIFE (Immediately Invoked Function Expression)
void function (a) {
  console.log('a: ', a);
}();

