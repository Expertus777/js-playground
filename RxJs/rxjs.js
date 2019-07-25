const { fromEvent, of, interval, empty } = rxjs;
const { map, filter, switchMap, mergeMap, merge, scan, tap, takeWhile, startWith, mapTo } = rxjs.operators;
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

// Sources:
const documentClick$ = fromEvent(document, 'click'); // Observable - click event on document
const interval_1s$ = interval(1000); // Observable - numbers each second

/*
 * 'of'
 * Allows you to deliver values in a sequence
 *
 * of(1, 2, 3) In this case it will emit 1,2,3 in order
 */

const dataSource$ = of(1, 2, 3, 5, 10); // create the stream of values: type number in this case

dataSource$.pipe(
    // multiple each value in 2
    map(value => value * 2),
    filter(value => value > 6)
).subscribe(value => console.log('value: ', value));

// I know:
// do (tap), of, interval, merge, empty, scan, mapTo

// Need to learn:
// SwitchMap, MergeMap, forkJoin,

// Simple operators:

// 1. interval

/*const source = interval(100);
const subscribe = source.subscribe(val => console.log('val', val));

setTimeout(() => {
    subscribe.unsubscribe();
}, 3100);*/

// 2. merge

// 2.1 merge as the static method
/*merge(
    documentClick$, interval_1s$
).subscribe(event => console.log(event));*/

// 2.2 merge as instance method
// documentClick$.pipe(merge(interval_1s$)).subscribe(console.log);


// 3. empty
/*empty().subscribe({
    next: () => console.log('Next'),
    complete: () => console.log('Complete Empty observable!')
});*/

// 4. scan // 5. takeWhile
// scan - create state // takeWhile - emit values until provided expression is false

/*interval_1s$.pipe(
    tap(console.log),
    scan((acc, currValue) => {
        return acc + currValue;
    }),
    takeWhile(value => value < 28, true),
    startWith(-3,-2,-1)
).subscribe(console.log);*/


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

// Examples:


// 1. Restart interval on every click

// Just subscribe to each observable individually
// documentClick$.subscribe(event => console.log(Object.prototype.toString.call(event)));
// interval_1s$.subscribe(event => console.log(event));

// Now we want to restart timer on each click event
// For that we can use switchMap!

/*documentClick$.pipe(
    switchMap(() => interval_1s$),
    mapTo('Hello!')
).subscribe(event => console.log(event));*/

// Sub function:
    // mapTo - emits the given constant value on the output Observable every time the source Observable emits a value

// 2. Countdown timer with pause and resume

const COUNTDOWN_TIME = 10;

// elements reference:
const startButton = document.getElementById('start-btn');
const stopButton = document.getElementById('stop-btn');
const restartButton = document.getElementById('restart-btn');

const timeEl = document.querySelector('.app-counter > .number');

// observables:
const start$ = fromEvent(startButton, 'click').pipe(mapTo('start'));
const stop$ = fromEvent(stopButton, 'click').pipe(mapTo('stop'));
const restart$ = fromEvent(restartButton, 'click').pipe(mapTo('restart'));

/*interval_1s$
    .pipe(
        takeWhile(() => {
            let stop = true;
            let subs = stop$.subscribe((value) => value);
            console.log(stop, subs);
            return stop;
        })
    )
    .subscribe(time => timeEl.innerHTML = time);*/

let counter = 'Press START';
rxjs.merge(start$,stop$, restart$).subscribe(
    (value) => {
        switch (value) {
            case 'start':
                counter = 0;
                interval_1s$.subscribe(time => timeEl.innerHTML = time);
                // let timeSubscription = interval_1s$.subscribe(time => timeEl.innerHTML = time);
                break;
            case 'stop':
                // counter = 0;
                // test.unsubscribe();
        }
    }
);

timeEl.innerHTML = String(counter);

/*start$.subscribe(() => null);

stop$.subscribe(() => null);

restart$.pipe(
    switchMap(() => interval_1s$)
).subscribe(time => timeEl.innerHTML = time);*/

/*
 * 1. mergeMap
 *
 * on every emission of source observable create the new one
 * For example save input value on each input - most common case
 */

// Examples:

// 1. mergeMap with observable

let string$ = of('Hello');

// now let's map to inner observable and flatten
string$.pipe(
    mergeMap(stringValue => {
        return of(`${stringValue} World!`)
    })
).subscribe(
    (string) => console.log('$$$ mergeMap: ', string)
);


//mergeMap with promise
const mergeMapCreatePromiseWithAssignValue = val => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`${val} World From Promise resolve`);
        reject(`${val} World From Promise reject`);
    }, 4000);
}).then(
    (data)=>{
        console.log(data)
    },
    (error) => {
        console.log(data)
    }
);
console.log('mergeMapWithPromise: ', mergeMapCreatePromiseWithAssignValue('Hello'));



