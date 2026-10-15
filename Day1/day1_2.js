/*

//T1
console.log(price);
var price = 100;
console.log(price);


function calculateTotal(price, quantity) {
  const total = price * quantity;
  return total;
}
const result = calculateTotal(100, 3);
console.log(result); // 300



const greet = function () {
  console.log("Hello!");
};
greet();



function second() {
  console.log("Inside second");
}
function first() {
  console.log("Inside first");
  second();
  console.log("First finished");
}
first();



console.log(price);
var price = 100;
console.log(price);


//T2
console.log(course);
const course = "MERN Stack";


//T3
console.log(square(5));
function square(number) {
    return number * number;
}




//T4
function third() {
  console.log("Third");
}
function second() {
  console.log("Second");
  third();
  console.log("Second finished");
}
function first() {
  console.log("First");
  second();
  console.log("First finished");
}
first();



//T5
printMessage();
const message = "Welcome";
function printMessage() {
  console.log(message);
}

printMessage() is called then 
it will go to the fucntion part,
then function tries to access message.
But const message is not executed yet.
Therefore, it gives  ReferenceError.
*/




//T6
function calculateTotal(price, quantity) {
    const total = price * quantity;
    return total;
}

const result = calculateTotal(100, 3);

console.log("Total Price:", result);

