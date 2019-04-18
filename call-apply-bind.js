function combineString(greeting, ending) {
    console.log(greeting + ' ' + this.screenTop + ending);
}

var myObjectPerson = {
    name: 'Ruslan',
    screenTop: 100
};

// 1) Call
combineString.call(myObjectPerson, 'Hello', '!');

// 2) Apply
combineString.apply(myObjectPerson, ['Hi', '.']);

// 3) Bind
var f = combineString.bind(myObjectPerson, 'Hello', '?');
f();

var name = 'Ruslan';
function Fn1() {
    var name = 'Andrey';
    function Fn2() {
        console.log(name);
    }
    Fn2();
}
console.log(name);
Fn1();

// Callback tests:
function FnCallBack(value, callback) {
    var myValue = value;
    console.log(1);
    setTimeout(function () {
        myValue = 10;
        callback(myValue);
        function secondCallback(value) {
            var calculated = value + 20;
            console.log('Second ', calculated);
        }
        secondCallback(myValue);
    }, 3000);
}

FnCallBack(1, function (value) {
    console.log(value);
});
