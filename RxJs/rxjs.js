const { fromEvent, of, interval } = rxjs;
const { map, filter } = rxjs.operators;
// const { map, filter } = rxjs.operators;

const obsButton = document.getElementById('obs-btn');


// Use 'fromEvent' helper function to create an observable from Event
// Accept to arguments, first is target and second the event
const btnObservable$ = fromEvent(obsButton, 'click');

// To create a subscription, you call the 'subscribe' method,
// supplying a function (or object) - also known as an 'observer'
// This is where you can decide how to react( which mean reactive programing) to each event.
const btnSubscription = btnObservable$.subscribe(event => console.log(event));
// console.log('btnSubscription: ', btnSubscription);

// Also we can pass to 'subscribe' method, observer object against cb function, which include properties:
// next, error and complete
const btnSubscription2 = btnObservable$.subscribe({
    next: event => console.log('next method from observer object'),
    error: error => console.log('error method from observer object'),
    complete: () => console.log('observer complete')
});

btnSubscription.unsubscribe();


/*
 *
 * Methods
 *
 */

/*
 * 'of'
 * Allows you to deliver values in a sequence
 *
 * of(1, 2, 3) In this case it will emit 1,2,3 in order
 */

const dataSource = of(1, 2, 3, 5, 10); // create the stream of values: type number in this case

dataSource.pipe(
    // multiple each value in 2
    map(value => value * 2),
    filter(value => value > 6)
).subscribe(value => console.log('value: ', value));

// I know:
// do (tap), of, interval

// Need to learn:
// SwitchMap, MergeMap, forkJoin,

// Simple operators:

// 1. interval

const source = interval(100);
const subscribe = source.subscribe(val => console.log('val', val));

setTimeout(() => {
    subscribe.unsubscribe();
}, 3100);


/*
 * 1. SwitchMap
 *
 * Useful for canceling previous request and subscribe to the new one, on each new value comes
 */

// let btnSubscription3 = fromEvent(document, 'click')
//     .pipe(
//         // restart counter on every click
//         interval(2000)
//     )
//     .subscribe(console.log);


function generateField() {
    let field = document.createElement('div');
    let clientHeight = document.documentElement.clientHeight;
    let clientWidth = document.documentElement.clientWidth;

    // let fieldHeight = clientHeight - 300;
    // let fieldWidth = clientWidth - 200;
    let fieldHeight = clientHeight;
    let fieldWidth = clientWidth;

    field.setAttribute('id', 'play-field');
    field.style.height = fieldHeight + 'px';
    field.style.width = fieldWidth + 'px';
    // field.style.border = '1px dashed black';
    field.style.background = 'white';
    field.style.position = 'absolute';
    field.style.top = clientHeight/2 - fieldHeight/2 + 'px';
    console.log('element.style.top: ', field.style.top);
    field.style.left = clientWidth/2 - fieldWidth/2 + 'px';

    document.body.appendChild(field);

    return {
        height: fieldHeight,
        width: fieldWidth
    };
}

let field = generateField();

function generateSquareElement(field) {
    let element = document.createElement('div');
    let fieldHeight = field.height;
    let fieldWidth = field.width;

    let elementHeight = Math.floor(Math.random() * fieldHeight + 1) / 2;
    let elementWidth = Math.floor(Math.random() * fieldWidth + 1) / 2;

    element.style.height = elementHeight + 'px';
    element.style.width = elementWidth + 'px';

    let color = 'rgba(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ', 0.5)';
    // element.style.background = 'rgba(255, 0, 0, 0.5)';
    element.style.background = color;
    // element.style.border = '2px solid yellow';

    element.style.position = 'absolute';

    // calculate figure vertical position
    let elementVerticalPosition = Math.floor(Math.random() * fieldHeight + 1);
    if (elementVerticalPosition + elementHeight > fieldHeight) {
        element.style.bottom = fieldHeight - elementVerticalPosition + 'px';
    } else {
        element.style.top = elementVerticalPosition + 'px';
    }

    // calculate figure horizontal position
    let elementHorizontalPosition = Math.floor(Math.random() * fieldWidth + 1);
    if (elementHorizontalPosition + elementWidth > fieldWidth) {
        element.style.right = fieldWidth - elementHorizontalPosition + 'px';
    } else {
        element.style.left = elementHorizontalPosition + 'px';
    }
    return element;
}

function appendFigure() {
    let fieldElement = document.querySelector('#play-field');
    fieldElement.appendChild(generateSquareElement(field));
}

let iterator = 0;
while (iterator < 3000) {
    setTimeout(() => {
        appendFigure();
    }, 10 * iterator);
    iterator++;
}

