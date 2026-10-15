/*Section 1

//Q1
[B] let

//Q2
console.log(value);
var value = 10;
ans=> undefined because we are trying to access value before initialization

//Q3
[C] It throws a ReferenceError


//Q4
[A] only a
because var a is function-scoped so it is accessible outside the if block.
let b is block-scoped, so it is accessible only inside the if block.

//Q5
[B] Returns a value to the caller.

//Q6
[B] 8

//Q7
[A] Function declaration 
because unction declarations are hoisted, so they can generally be called before their declaration in the same scope.

//Q8
[B] Active function calls


//Q9
[B] 90


//Q10
[C] undefined


*/


/*Section 2

//Q1
let city = "Anand";

function showCity() {
  let city = "Surat";
  console.log(city);
}
showCity();
console.log(city);

Output:
node day1_4.js
Surat
Anand

Explaination:
let city = "Anand"; declares a global variable with the value "Anand"
Inside showCity(), another variable named city is declared with the value "Surat"
console.log(city) inside the function prints "Surat" because it uses the local variable,
After the function finishes, console.log(city) outside the function prints "Anand" because the global variable remains unchanged.


//Q2
console.log(price);
var price = 500;
console.log(price);

Output:
node day1_4.js
undefined
500

Explaination:
console.log(price) prints undefined because var price is hoisted. Its declaration is processed before execution,
but the assignment 500 has not happened yet.
var price = 500 assigns the value 500 to the variable,
The second console.log(price) prints 500.


//Q3
function calculate(a, b) {
  console.log(a + b);
}
const result = calculate(10, 20);
console.log(result);

Output
node day1_4.js
30
undefined

Explaination:
calculate(10, 20) calls the function with a = 10 and b = 20.
console.log(a + b) prints 30.
function has no return statement, so it automatically returns undefined. That value is stored in result.
console.log(result) prints undefined.


//Q4
function first() {
  console.log("A");
  second();
  console.log("B");
}
function second() {
  console.log("C");
}
first();

Output
node day1_4.js
A
C
B

Explaination:
first() is called.
console.log("A") prints A.
second() is called, so its execution begins.
console.log("C") prints C. Then second() finishes and control returns to first().
console.log("B") prints B.


//Q5
let marks = 60;
if (true) {
  let marks = 90;
  console.log(marks);
}
console.log(marks);

Output
node day1_4.js
90
60

Explaination:
let marks = 60; declares a variable outside the if block.
Inside the if block, let marks = 90; declares a separate variable because let is block-scoped.
The first console.log(marks) prints 90 because it accesses the variable inside the block.
After the block ends, the second console.log(marks) prints 60 because the outer variable has not changed.

*/


/* Section 3

//Q1
function showName() {
  const name = "Rahul";
}
showName();
console.log(name);

Problem:
The variable name is declared inside the showName()function using const. 
It cannot be accessed outside that function.

Correct:
function showName() {
    const name = "Rahul";
    return name;
}
console.log(showName());

Explaination:
const name = "Rahul"; declares a variable inside the function, so it has local scope.
console.log(name) outside the function cannot access that local variable and throws a ReferenceError.
Using return name sends the value back to the caller, allowing console.log(showName()) to print "Rahul".



//Q2
 console.log(course);
const course = "MERN Stack";

Problem:
The variable course is accessed before it is initialized.

Correct:
const course = "MERN Stack";
console.log(course);

Explaination:
const variables cannot be accessed before initialization.
Accessing course before its initialization throws a ReferenceError.
This happens because course is in the Temporal Dead Zone (TDZ) until its declaration is initialized


//Q3
function calculateTotal(price, quantity) {
  console.log(price * quantity);
}
const total = calculateTotal(200, 3);
console.log(total);

Problem:
The original function uses console.log() instead of return.

Correct:
function calculateTotal(price, quantity) {
    return price * quantity;
}
const total = calculateTotal(200, 3);
console.log(total);

Explaination:
Correction: Replace console.log(price * quantity) with return price * quantity.
Cause: console.log() displays the calculated value but does not send it back to the caller.
Without an explicit return value,the function returns undefined, so total stores undefined.

*/

/* Section 4

//Q1
function introduceStudent(name, age, course) {
    return `Hello, I am ${name}, I am ${age} years old, and I am learning ${course}.`;
}
console.log(introduceStudent("Asha", 21, "MERN Stack"));

//Q2
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(checkEvenOdd(4));
console.log(checkEvenOdd(7));
console.log(checkEvenOdd(0));

//Q3
function calculateDiscount(price, percentage) {
    if (price < 0 || percentage < 0 || percentage > 100) {
        return null;
    }
    let discount = (price * percentage) / 100;
    let finalPrice = price - discount;

    return finalPrice;
}
console.log(calculateDiscount(1000, 20));
console.log(calculateDiscount(500, 10));
console.log(calculateDiscount(-100, 20));
console.log(calculateDiscount(1000, 120));


//Q4
function getGrade(marks) {
    if (typeof marks !== "number" || marks < 0 || marks > 100 || !Number.isFinite(marks)) {
        return "Invalid marks";
    } else if (marks >= 90) {
        return "A";
    } else if (marks >= 75) {
        return "B";
    } else if (marks >= 50) {
        return "C";
    } else {
        return "Fail";
    }
}
console.log(getGrade(49));
console.log(getGrade(50));
console.log(getGrade(75));
console.log(getGrade(90));
console.log(getGrade(100));

console.log(getGrade(-5));
console.log(getGrade(105));
console.log(getGrade("75"));


//Q5
const students = [
    { name: "Asha", marks: 82 },
    { name: "Ravi", marks: 67 },
    { name: "Neha", marks: 91 }
];

function findStudent(students, name) {
    return students.find(student => student.name === name);
}
console.log(findStudent(students, "Ravi"));
console.log(findStudent(students, "Priya"));

*/

// Section 5

const students = [
    { name: "Asha", marks: 82 },
    { name: "Ravi", marks: 67 },
    { name: "Neha", marks: 91 },
    { name: "Imran", marks: 48 },
    { name: "Meera", marks: 74 }
];

function getTotalMarks(students) {
    let total = 0;
    for (const student of students) {
        total += student.marks;
    }
    return total;
}
console.log("Total marks:", getTotalMarks(students));


function getAverageMarks(students) {
    if (students.length === 0) {
        return null;
    }
    return getTotalMarks(students) / students.length;
}


console.log("Average marks:", getAverageMarks(students));

function getStudentResult(student) {
    if (student.marks >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
}

function findStudentByName(students, name) {
    return students.find(student => student.name === name);
}

function getTopStudent(students) {
    if (students.length === 0) {
        return undefined;
    }
    let topStudent = students[0];
    for (const student of students) {
        if (student.marks > topStudent.marks) {
            topStudent = student;
        }
    }
    return topStudent;
}

function printStudentReport(students) {
    for (const student of students) {
        console.log(
            "Name: " + student.name +
            ", Marks: " + student.marks +
            ", Result: " + getStudentResult(student)
        );
    }
}



console.log("Top student:", getTopStudent(students).name);

console.log(
    "Imran's result:",
    getStudentResult(findStudentByName(students, "Imran"))
);
console.log("Student Report:");
printStudentReport(students);


console.log("Empty array total:", getTotalMarks([]));
console.log("Empty array average:", getAverageMarks([]));
console.log("Empty array top student:", getTopStudent([]));
console.log("Missing student:", findStudentByName(students, "Priya"));






