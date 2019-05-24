/*
 * TASK:
 *
 * Write the function that you can call multiple times in a row
 *
 * Example:
 * add(2)(3)(15) // 20
 */


// If you need that function return;
function add2(x) {
    return function innerFunction(y) {
        x += y;
        console.clear();
        console.log(x);
        return add2(x);
    };
}

add2(2)(3)(17)(5)(36)(54); //117


function add3(x) {
    return function innerFunction(y) {
        if (!arguments.length) {
            return x;
        }
        x += y;
        return add3(x);
    };
}

console.log(add3(2)(3)(10)(5)()); //20

// By arrow functions:
const add = x => y => {
    if(y === 'finish') {
        return x;
    }
    x += y;
    return add(x);
};

console.log('add function:', add(24)(65)(11)('finish')); //100
