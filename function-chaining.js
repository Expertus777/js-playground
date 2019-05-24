let results = []; // store the result of functions to print

/*
 * CALCULATOR FUNCTION
 * should calculate values and be possible to chain
 *
 * Examples:
 * calculator(3).plus(1).minus(2).math(); // 4
 */
function calculator(initValue) {
    let calculatorObject = {
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
results.push(
  calculator(3).plus(1).minus(2).math(), //4
  calculator(3).plus(1).minus(2).multiply(10).math() //20
);

/*
 * MODERNIZE CALCULATOR FUNCTION WHICH MODIFY THE GLOBAL OBJECT (CONTEXT) WINDOW
 */
function calculator2(initValue) {
    this.result = initValue;
    this.plus = function (value) {
        this.result += value;
        return this;
    };
    this.minus = function (value) {
        this.result -= value;
        return this;
    };
    this.math = function () {
        return this.result;
    };
    return this;
}
results.push(
  calculator2(34).plus(26).minus(1).math()
);


/*
 * Show results
 */
function showResults(results) {
    for(var i = 0; i < results.length; i++ ) {
        console.log(results[i]);
    }
}
showResults(results);
