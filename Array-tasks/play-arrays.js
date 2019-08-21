/*
 * Difference between forEach, map, filter and reduce
 */

console.group('Difference between forEach, map, filter and reduce');

// forEach
let sampleArrForForEach = [1, 2, 3];
let sampleArrAfterForEach = sampleArrForForEach.forEach(a => a*a);

console.log('forEach. Original array: ', sampleArrForForEach);
console.log('forEach. Returned value after method: ', sampleArrAfterForEach);

// Result: just call callback for each value in array and that's it, don't modify existing array


// map
let sampleArrForMap= [1, 2, 3];
let sampleArrAfterMap = sampleArrForMap.map(a => a*a);

console.log('map. Original array: ', sampleArrForMap);
console.log('map. Returned value after method: ', sampleArrAfterMap);

console.groupEnd();
