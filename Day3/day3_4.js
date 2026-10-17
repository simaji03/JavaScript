/* Section A

//Q1
B. user.name

//Q2
B. Optional chaining

//Q3
C. An array of property names

//Q4
B. A shallow copy

//Q5
A. ...args

//Q6
C. Its properties can change, but the variable cannot be reassigned.


//Q7
A. Property values

//Q8
B. { name: studentName }


//Q9
B. Changes through one reference may be visible through the other.


//Q10
B. Create an updated object.

*/

//Section B
//Q1
const user1 = { name: "Amit", age: 20 };
const { namess } = user1;
console.log(namess);
//Amit
//uses object destructuring to extract the name property from the user object and store its value in a variable named name.

//Q2
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log(original.length); //3 prints 3 because the original array still has 3 elements.
console.log(copy.length); //4 prints 4 because the copied array now has 4 elements.
// uses the spread operator (...) to create a new array containing the same elements as original.

//Q3
const user3 = { name: "Riya", city: "Anand" };
const updated = { ...user3, city: "Surat" };
console.log(user3.city); //Anand prints Anand because the original object remains unchanged.
console.log(updated.city);//Surat prints Surat because the new object has the updated city.
//The spread operator (...user) copies the properties of user3 into a new object.
//city: "Surat" then overwrites the copied city property because it appears later.

//Q4
const [first, ...remaining] = [5, 10, 15, 20];
console.log(first); //5
console.log(remaining);//[10,15,20]
//first receives the first element: 5.
//...remaining collects all the remaining elements into a new array: [10, 15, 20].


//Q5
const product = {
  name: "Laptop",
  details: { color: "Silver" }
};
const copied5 = { ...product };
copied5.details.color = "Black";
console.log(product.details.color);//Black
//The output is Black because the spread operator creates a shallow copy, so both objects share the same nested details object.


/* 
//Section C

//Q1
const user = { name: "Asha" };
console.log(user.address.city);
//Problem : It is trying to access value that does not exists

//corrrect code
const user = { name: "Asha" };
console.log(user.address?.city);



//Q2
const numbers = [1, 2, 3];
const copy = numbers;
copy.push(4);
console.log(numbers);
//problem : copy and numbers refer to the same array. Therefore, adding 4 through copy also changes the array accessed through numbers


//Correct code
const numbers = [1, 2, 3];
const copy = [...numbers];
copy.push(4);
console.log(numbers);
console.log(copy);



//Q3
const student = { name: "Jay", marks: 70 };

const updatedStudent = {
  ...student,
  marks: student.marks
};
updatedStudent.marks = 90;
console.log(student.marks);
//Problem :There is actually no error in this code. Because { ...student } creates a separate, shallow copy, updating updatedStudent.marks does not change the original student's marks.
//However, the code doesn't print the updated marks.


//Correct code
const student = { name: "Jay", marks: 70 };
const updatedStudent = {
    ...student,
    marks: 90
};
console.log(student.marks);
console.log(updatedStudent.marks);

*/

//Section D
//Q1
const course = {
    title: "JavaScript",
    duration: "3 months",
    price: 2000
};
course.level = "Beginner";
course.price = 2500;
console.log(course);

//Q2
const user2 = {
    names: "Ravi",
    email: "ravi@gmail.com"
};
const { names, email, city = "Anand" } = user2;
console.log(names);
console.log(email);
console.log(city);

//Q3
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(10, 20, 30));
console.log(sumAll(5, 10, 15, 20));

//Q4
const employee = {
    name: "Amit",
    age: 25,
    role: "Developer"
};
const updatedEmployee = {
    ...employee,
    role: "Manager"
};
console.log(employee);
console.log(updatedEmployee);

//Section D
const students = [
    {
        id: 1,
        name: "Asha",
        marks: 82,
        address: { city: "Anand" }
    },
    {
        id: 2,
        name: "Ravi",
        marks: 65,
        address: { city: "Nadiad" }
    },
    {
        id: 3,
        name: "Neha",
        marks: 90,
        address: { city: "Vadodara" }
    }
];


console.log("Student Names and Cities:");
students.forEach(student => {
    console.log(student.name + " - " + student.address.city);
});


const passedStudents = students.filter(student => student.marks >= 70);
console.log("\nStudents scoring at least 70:");
passedStudents.forEach(student => {
    console.log(student.name + " - " + student.marks);
});


const updatedStudents = students.map(student =>
    student.id === 2
        ? { ...student, marks: 75 }
        : student
);
console.log("\nUpdated Student Records:");
console.log(updatedStudents);


const { name, marks } = updatedStudents.find(student => student.id === 2);
console.log("\nSelected Student Details:");
console.log("Name:", name);
console.log("Marks:", marks);

console.log("\nOriginal Student Records:");
console.log(students);




