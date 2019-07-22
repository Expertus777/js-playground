/*let promise = new Promise((resolve, reject) => {
  let startTime = new Date().getTime();
  setTimeout(() => {
    let finishTime = new Date().getTime();
    let doneTime = (finishTime - startTime) / 1000;
    Math.random() > 0.5 ? resolve(`TRUE!!! Time: ${doneTime}`) : reject(`FALSE!!! Time: ${doneTime}`);
  }, Math.random() * 10000);
});

promise.then(
  (data) => {console.log(data)},
  (error) => {console.log(error)}
  );*/

/*let counter = 0;
console.log(counter);
let intervalId = setInterval(() => {
  counter++;
  console.log(counter);
  if(counter >= 10) clearInterval(intervalId);
}, 1000);*/


/*setInterval(() => {
  // console.clear();
}, 1000);*/
