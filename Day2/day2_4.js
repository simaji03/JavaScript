/*

//section A

//Q1
B. A function retaining access to its lexical scope

//Q2
C. map()

//Q3
B. A new array of matching elements

//Q4
D. undefined

//Q5
A. forEach()

//Q6
B. A function passed to another function

//Q7
B. [2, 3, 4]

//Q8
B. [6]

//Q9
A. A function that accepts or returns another function

//Q10
B. Each call creates a separate lexical environment

*/

//Section B
//Q1
function outer() {
  let value = 5;
  return () => ++value;
}
const counter = outer();
console.log(counter());//6
console.log(counter());//7

//Q2
const numbers2 = [1, 2, 3];
const result = numbers2.map(n => n * 3);
console.log(result); //[ 3, 6, 9 ]

//Q3
const numbers3 = [10, 20, 30, 40];
console.log(numbers3.filter(n => n >= 30)); //[ 30, 40 ]

//Q4
const numbers4 = [4, 8, 12];
console.log(numbers4.find(n => n > 5)); //8

//Q5
function run(callback) {
  console.log("A");
  callback();
  console.log("C");
}
run(() => console.log("B"));
//A
//B
//C


//Section C

//Q1
function createCounter() {
    let count = 0;

    return function () {
        return count++;
    };
}
const counter1 = createCounter();
console.log(counter1()); // 0
console.log(counter1()); // 1
console.log(counter1()); // 2

//Q2
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
console.log(doubled);

//Q3
const students3 = [
    { id: 1, name: "Asha" },
    { id: 2, name: "Ravi" }
];
const student = students3.find(student => student.id === 2);
console.log(student);

//Section D

//Q1
function createCounter() {
    let count = 0;
    return function () {
        count += 2;
        return count;
    };
}
const counter2 = createCounter();
console.log(counter2()); // 2
console.log(counter2()); // 4
console.log(counter2()); // 6
console.log(counter2()); // 8


//Q2
function calculator(num1, num2, callback) {
    return callback(num1, num2);
}
function addition(a, b) {
    return a + b;
}
function subtraction(a, b) {
    return a - b;
}
console.log(calculator(50, 5, addition)); //55
console.log(calculator(50, 5, subtraction)); //45


//Q3
const prices = [100, 200, 500, 1000];
const pricesWithGST = prices.map(price => price * 1.18);
console.log(pricesWithGST); //[ 118, 236, 590, 1180 ]


//Q4

const users = [
    { name: "Asha", active: true },
    { name: "Ravi", active: false },
    { name: "Neha", active: true },
    { name: "Imran", active: false }
];
const activeUsers = users.filter(user => user.active === true);
console.log(activeUsers); //[ { name: 'Asha', active: true }, { name: 'Neha', active: true } ]


//Section E
const students = [
    { id: 1, name: "Asha", marks: 82 },
    { id: 2, name: "Ravi", marks: 45 },
    { id: 3, name: "Neha", marks: 91 },
    { id: 4, name: "Imran", marks: 38 },
    { id: 5, name: "Meera", marks: 74 }
];


console.log("All Student Results");
students.forEach(student => {
    console.log(student.name + " : " + student.marks);
});


const passedStudents = students.filter(student => student.marks >= 50);
console.log("\nStudents Who Passed");
console.log(passedStudents);


const passedNames = passedStudents.map(student => student.name);
console.log("\nNames of Passed Students");
console.log(passedNames);


const searchId = 3;
const foundStudent = students.find(student => student.id === searchId);
console.log("\nSearch Student");
console.log(foundStudent);


function createOperationCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

const countOperation = createOperationCounter();
console.log("\nProcessing Counter");
countOperation();
console.log("Operations performed:", countOperation());

countOperation();
console.log("Operations performed:", countOperation());

countOperation();
console.log("Operations performed:", countOperation());

countOperation();
console.log("Operations performed:", countOperation());



