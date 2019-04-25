function checkType(value) {
  let result = Object.prototype.toString.call(value);
  console.log('Type check of: ', value, ' is ', result);
  return result;
}

checkType([2,6,7,'2526']);
checkType(undefined);
checkType('test string');
checkType(2425);
checkType(true);
checkType(new Date());

console.log('Array.isArray([2]): ', Array.isArray([2]));
console.log('[22].isArray: ', [22, 245].toString());
