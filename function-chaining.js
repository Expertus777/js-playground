var results = []; // store the result of functions to print

/*
 * CALCULATOR FUNCTION
 * should calculate values and be possible to chain
 *
 * Examples:
 * calculator(3).plus(1).minus(2).math(); // 4
 */
function calculator(initValue) {
    var calculatorObject = {
        result: initValue,
        plus: function (value) {
            this.result += value;
            return calculatorObject;
        },
        minus: function (value) {
            this.result -= value;
            return calculatorObject;
        },
        multiply: function (value) {
            this.result *= value;
            return calculatorObject;
        },
        math: function () {
            return this.result;
        }
    };
    return calculatorObject;
}

/*
 * TEST CASES:
 */
// result = calculator(3); //3
results[0] = calculator(3).plus(1).minus(2).math(); //4
results[1] = calculator(3).plus(1).minus(2).multiply(10).math(); //20

function showResults(results) {
    for(var i = 0; i < results.length; i++ ) {
        console.log(results[i]);
    }
}
showResults(results);
