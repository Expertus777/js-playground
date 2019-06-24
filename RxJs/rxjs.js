const { fromEvent } = rxjs;
// const { map, filter } = rxjs.operators;

const obsButton = document.getElementById('obs-btn');

const btnObservable = fromEvent(obsButton, 'click');

const btnSubscription = btnObservable.subscribe(event => console.log(event));
