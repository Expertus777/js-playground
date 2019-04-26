const arr = [2, 4, 53, 89];

// Problem: after 2 sec print 4 times 4: undefined
console.log('setTimeout in for loop: ');
for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    // console.log(`${i}: ${arr[i]}`);
    console.log(i, arr[i]);
  }, 2000)
}

// 4: undefined
// 4: undefined
// 4: undefined
// 4: undefined


// Solution 1: change var i to let i, let is block scoped!
console.log('setTimeout in for loop: ');
for (let i = 0; i < arr.length; i++) {
  setTimeout(function () {
    // console.log(`${i}: ${arr[i]}`);
    console.log(i, arr[i]);
  }, 2000)
}

// 0, 2
// 1, 4
// 2, 53
// 3, 89


// Solution 2: pass i to function arguments
console.log('setTimeout in for loop: ');
for (var i = 0; i < arr.length; i++) {
  setTimeout(function (x) {
    // console.log(`${i}: ${arr[i]}`);
    return function() {
      console.log('pass i to function arguments: ', x, arr[x]);
    }
  }(i), 2000)
}

// 0, 2
// 1, 4
// 2, 53
// 3, 89
