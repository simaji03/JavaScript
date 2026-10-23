//T1
function first() {
    console.log("Entering first");
    second();
    console.log("Leaving first");
}
function second() {
    console.log("Entering second");
    third();
    console.log("Leaving second");
}
function third() {
    console.log("Entering third");
    console.log("Leaving third");
}
console.log("Start");
first();
console.log("End");


//T2
console.log("Message 1");
setTimeout(() => {
  console.log("Message 2");
}, 1000);
console.log("Message 3");


//T3
console.log("Start");
setTimeout(() => {
    console.log("setTimeout callback");
}, 0);
Promise.resolve().then(() => {
    console.log("Promise callback");
});
console.log("End");


//T4
console.log("A");
queueMicrotask(() => {
  console.log("B");
});
queueMicrotask(()=>{
    console.log("C")
});
Promise.resolve().then(() => {
  console.log("D");
});
console.log("E");


//T5
console.log("Start");
setTimeout(() => {
  console.log("Timer callback starts");
  Promise.resolve().then(() => {
    console.log("Promise callback");
  });
  console.log("Timer callback ends");
}, 1000);
console.log("End");


//T6
async function example() {
  console.log("Vefore await");
  await Promise.resolve();
  console.log("After await");
}
console.log("Start");
example();
console.log("End");


//T7
console.log("Start");
setTimeout(() => {
  console.log("Timer callback executed");
}, 1000);
const start = Date.now();
while (Date.now() - start < 3000) {
}
console.log("Loop finished");



