/*
    Static members used for class operations, that connect to class at all, not instant objects
    For example we have two Circle classes, and we want compare which circle is bigger, lets create for this static function "compare"
    Example:
 */

class Circle {
    _radius;

    constructor(radius) {
        if (radius < 0) throw new Error('Radius cannot be negative');
        this._radius = radius;
    };

    set color(color) {
        if (color === 'red') throw new Error('Red color is forbidden');
        this._color = color;
        updateView();
    }
    get color() {
        console.log(`The circle color is ${this._color}.`);
        return this._color;
    }

    set radius(radius) {
        if (radius < 0) throw new Error('Radius cannot be negative');
        this._radius = radius;
        updateView();
    }
    get radius() {
        return this._radius + 'px';
    }
}

let circle1 = new Circle(5);
circle1.radius = 120;
console.log(circle1);
circle1.color = 'purple';
console.log(circle1);
circle1.color;

function updateCircle() {
    let radius = document.querySelector('#radius').value;
    let color = document.querySelector('#color').value;

    if (radius) circle1.radius = radius;
    if (color) circle1.color = color;
    updateView();
}

function updateView() {
    document.querySelector('#result').style.borderRadius = circle1.radius;
    document.querySelector('#result').style.backgroundColor = circle1.color;
    document.querySelector('#result').style.width = circle1.radius;
    document.querySelector('#result').style.height = circle1.radius;
    document.querySelector('#result').style.lineHeight = circle1.radius;
}

updateView();

/*
    Another usage for static methods is fabric methods which create new objects - instances of classes
    Example:
 */






/*
    Important notes:
    1. Static methods doesn't change object properties, their purpose not for that
    but manipulate class objects for  example.
 */
