/*

//Section A

//Q1
B. export

//Q2
C. catch

//Q3
B. Pending, fulfilled, rejected

//Q4
C. A Promise

//Q5
B. Inside an async function

//Q6
B. Converts a JSON string into a JavaScript value

//Q7
B. It returns a Promise.

//Q8
A. The HTTP status is in the successful 200–299 range.


//Q9
C. .catch()

//Q10
B. The returned Promise rejects.

//Q11
B. Tracking function calls currently being executed

//Q12
B. A synchronous console.log() statement that follows a timer registration

//Q13
A. A Promise .then() callback


//Q14
B. To coordinate execution of queued callbacks when the call stack is available

//Q15
B. A queued task such as a Promise reaction callback


//Q16
C. A setTimeout() callback


//Q17
C. A, C, B

//Q18
B. The async function suspends until the awaited result is available, allowing other work to proceed.

//Q19
A. true

//Q20
C. 11

//Q21
A. The next Promise in the chain receives that value.

//Q22
B. The next Promise in the chain becomes rejected unless the error is handled.

//Q23
D. Promise.allSettled()

//Q24
A. Promise.any()

//Q25
B. Settles according to the first input Promise to settle

//Q26
B. It is useful for waiting for multiple independent Promises and collecting their results

//Q27
B. Because HTTP error responses such as 404 generally still fulfill the fetch() Promise


//Q28
B. Because HTTP error responses such as 404 generally still fulfill the fetch() Promise


//Q29
B. import { calculateTotal } from "./math.js";

//Q30
B. It can block user interactions and delay rendering.


*/

//Section B

//Q1
console.log("Start");
console.log("Middle");
console.log("End");
//Start
//Middle
//End


//Q2
console.log("A");
Promise.resolve().then(() => console.log("B"));
console.log("C");
//A
//C
//B

//Q3
console.log("Start");
setTimeout(() => console.log("Timer"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");
//A
//B
//promise
//Timer

//Q4
async function test() {
  console.log(1);
  await Promise.resolve();
  console.log(2);
}
test();
console.log(3);
//1
//3
//2


//Q5
Promise.resolve().then(() => console.log("A"));
Promise.resolve().then(() => console.log("B"));
console.log("C");
//C
//A
//B


//Q6
Promise.resolve(5)
  .then(value => value * 2)
  .then(value => value + 1)
  .then(value => console.log(value));
//11

//Q7
async function getNumber() {
  return 20;
}
getNumber().then(value => console.log(value + 5));
console.log("Done");
//25

//Q8
Promise.resolve()
  .then(() => {
    throw new Error("Failed");
  })
  .catch(error => {
    console.log(error.message);
    return "Recovered";
  })
  .then(value => console.log(value));
//Failed
//Recovered


//Q9
console.log("Start");
setTimeout(() => console.log("Timer"), 0);
Promise.resolve().then(() => {
  console.log("Promise 1");

  Promise.resolve().then(() => {
    console.log("Promise 2");
  });
});
console.log("End");
//Start
//End
//Promise 1
//Promise 2
//Timer


//Q10
async function run() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
  await Promise.resolve();
  console.log("C");
}
run();
console.log("D");
//A
//D
//B
//C


/* 
//Section C

//Q1
const promise = Promise.resolve("Success");
console.log(promise);
//Correct code
const promise = Promise.resolve("Success");
promise.then(value => {
  console.log(value);
});

//Q2
function getData() {
  return Promise.resolve("Data loaded");
}
function displayData() {
  const data = await getData();
  console.log(data);
}
displayData();
//Correct code
function getData() {
  return Promise.resolve("Data loaded");
}
async function displayData() {
  const data = await getData();
  console.log(data);
}
displayData();

//Q3
async function loadUsers() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error(error.message);
  }
}
loadUsers();
//Correct code
async function loadUsers() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const users = await response.json();
    console.log(users);

  } catch (error) {
    console.error(error.message);
  }
}
loadUsers();

//Q4
console.log("First");
setTimeout(() => console.log("Second"), 0);
console.log("Third");
//Correct code
console.log("First");
console.log("Second");
console.log("Third");


*/