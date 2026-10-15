/*
const square = number => number*number;
console.log(square(5));

const add = (a, b) => a + b;
console.log(add(10, 25)); // 25

const Si =(p,r,t) => (p*r*t)/100;
console.log(Si(1500,2,3));


function calculateDiscount(price, percentage) {
  if (
    typeof price !== "number" ||
    typeof percentage !== "number" ||
    !Number.isFinite(price) ||
    !Number.isFinite(percentage) ||
    price < 0 ||
    percentage < 0 ||
    percentage > 100
  ) 
  {
    return null;
  }
  return price - (price * percentage) / 100;
}
console.log(calculateDiscount(1000, 10));  // 900
console.log(calculateDiscount(1000, 120)); // null

*/


//T4
const students = [
  { name: "Asha", marks: 82 },
  { name: "Ravi", marks: 67 },
  { name: "Neha", marks: 91 },
  { name: "Imran", marks: 48 },
  { name: "Meera", marks: 74 }
];
function getTotalMarks(studentList) {
  let total=0;

  for(const student of studentList) {
    total = total + student.marks;
  }
  return total;
}
console.log("Total Marks:", getTotalMarks(students));

function getAverageMarks(studentList) {
    if (studentList.length === 0) {
    return null;
  }
  return getTotalMarks(studentList) / studentList.length;
}
console.log("Average Marks:", getAverageMarks(students));


function findStudentByName(studentList, name) {
   for (const student of studentList) {
    if (student.name === name) {
      return student;
    }
  }
  return undefined;
}
console.log(findStudentByName(students, "Neha"));



function getStudentResult(student) {
   if (student.marks >= 50) {
    return "Pass";
  } 
  else {
    return "Fail";
  }
}
function printStudentReport(studentList) {
  for (const student of studentList) {
    console.log(
      "Name:", student.name,
      "| Marks:", student.marks,
      "| Result:", getStudentResult(student)
    );
  }
}
printStudentReport(students);



//T1
// T1: Get Full Name
function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(getFullName("Sima", "Maji"));


function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(8));
console.log(isEven(5));


function getLargest(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
console.log(getLargest(10, 25, 15));
console.log(getLargest(40, 20, 30));


function calculateDiscount(price, percentage) {
    if (price < 0 || percentage < 0 || percentage > 100) {
        return null;
    }

    let discount = price * percentage / 100;
    let finalPrice = price - discount;

    return finalPrice;
}
console.log(calculateDiscount(1000, 20));
console.log(calculateDiscount(500, 10));
console.log(calculateDiscount(1000, 120));


//T2
function calculateTotal1(price, quantity) {
    return price * quantity;
}
console.log(calculateTotal1(100, 3));
const calculateTotal2 = function(price, quantity) {
    return price * quantity;
};
console.log(calculateTotal2(100, 3));
const calculateTotal3 = (price, quantity) => price * quantity;
console.log(calculateTotal3(100, 3));



//T4- extra
//higheststudent
function getHighestScoringStudent(studentList) {
    if (studentList.length === 0) {
        return null;
    }
    let highestStudent = null;
    for (const student of studentList) {
        if (typeof student.marks !== "number" ||
            !Number.isFinite(student.marks)) {
            continue;
        }
        if (highestStudent === null ||
            student.marks > highestStudent.marks) {
            highestStudent = student;
        }
    }
    return highestStudent;
}
console.log(getHighestScoringStudent(students));

//new array
function getPassingStudents(studentList) {
    return studentList.filter(student =>
        typeof student.marks === "number" &&
        Number.isFinite(student.marks) &&
        student.marks >= 50
    );
}
console.log(getPassingStudents(students));


//number of passing students
function countPassingStudents(studentList) {
    let count = 0;
    for (const student of studentList) {
        if (
            typeof student.marks === "number" &&
            Number.isFinite(student.marks) &&
            student.marks >= 50
        ) {
            count++;
        }
    }
    return count;
}
console.log("Students Passed:", countPassingStudents(students));


//missing data 
const testStudents = [
    { name: "Amit", marks: 85 },
    { name: "Riya" },
    { name: "John", marks: "70" },
    { name: "Sara", marks: -10 },
    { name: "Raj", marks: 105 },
    { name: "Mina", marks: 45 }
];
function hasValidMarks(student) {
    return (
        student !== null &&
        typeof student === "object" &&
        typeof student.marks === "number" &&
        Number.isFinite(student.marks) &&
        student.marks >= 0 &&
        student.marks <= 100
    );
}
function getValidStudents(studentList) {
    return studentList.filter(hasValidMarks);
}
console.log(getValidStudents(testStudents));


//empty array
const emptyStudents = [];
console.log(getHighestScoringStudent(emptyStudents));
console.log(getPassingStudents(emptyStudents));
console.log(countPassingStudents(emptyStudents));