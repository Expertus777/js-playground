// Imports
import { Tires } from "./tires-class";
import { Engine } from "./engine-class";

// Car class
class Car {
    constructor(maker, model, engine, tires) {
        this.maker = maker;
        this.model = model;
        this.engine = engine;
        this.tires = tires;
    }
}


// Michelin tires
let michelinTires = new Tires('Michelin', 'R55/60', 2019);

// Two cars: BMW and Mercedes
let bmw = new Car('BMW', '318i', new Engine('BMW', 'M43'), michelinTires);
let mercedes = new Car('Mercedes', 'c 63', new Engine('Mercedes', '9G'), michelinTires);

// Display
console.log('bmw: ', bmw);
console.log('mercedes: ', mercedes);



// Aircraft:
/*class Aircraft {
    maker;
    model;
    engine;
    tires;
    constructor(maker, model) {
        this.maker = maker;
        this.model = model;
        this.engine = new Engine('Boeing');
        this.tires = new Tires('Michelin');
    }
}*/

// let boeing = new Aircraft('Boeing', '747');
// console.log('boeing: ', boeing);
