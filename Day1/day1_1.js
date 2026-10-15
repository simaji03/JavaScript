/*
console.log("Hello World!");

var nm="kajal";
let rollno=100;
const address="Nadiad";

console.log(nm);
console.log(rollno);
console.log(address);

rollno= rollno+1;
console.log(rollno);


//address="nd";
//console.log(address);


const students={nm1:"karan",marks:99}
students.marks=110;
console.log("Name of student: ",students.nm1);
console.log("Marks of student: ",students.marks);



console.log("Program Finished")*/


/*

//global scope
const course ="Full Stack Developer";
function showCourse()
{
    console.log("Name of the course: ",course);
}
showCourse();


//function scope
function SimpleInterest()
{
    const p=1500;
    const r=2;
    const t=3;

    const si=(p*r*t)/100;
    return si;
}
console.log("Simple Interest:",SimpleInterest());



//variable over sahdow

const city="Anand";
function showCity()
{
    const city="Nadiad";
    console.log(city);

}
console.log(city);
showCity();

*/

//T1
const namee="Sima Maji";
const age=21;
const city="nadiad";
const course="FullStack";
console.log("Name: ",namee);
console.log("Age: ",age);
console.log("City: ",city);
console.log("Course: ",course);


//T2
const namee1 = "Sima Maji";
const age1 = 21;
const city1 = "Nadiad";
const course1 = "FullStack";

console.log("Name:", namee1);
console.log("Age:", age1);
console.log("City:", city1);
console.log("Course:", course1);

let taskcnt = 0;
console.log("Initial Task Count:", taskcnt);

taskcnt = taskcnt + 1;
console.log("After First Update:", taskcnt);

taskcnt = taskcnt + 1;
console.log("After Second Update:", taskcnt);




//T3
//Global
const number = 101; // Global scope
function displayName() {
    console.log("Number inside function:", number);
}
displayName();
console.log("Outside function:", number);


//function
function displayName1() {
    const number = 102;
    console.log("Number inside function:", number);
}
displayName1();

//block scope
if(true){
    let numbers=103;
    const course="FCS";

    console.log("Number: ",numbers);
    console.log("Course: ",course)
}

//var let inside function
if(true){
    var a=10;
    let b=20;

    console.log("Inside Block Value of A: ",a);
    console.log("Inside Block Value of B: ",b);
}
console.log("Inside Block Value of A: ",a);
//console.log("Inside Block Value of B: ",b); //error 


//T4
const marks=500;
function showmarks(){
    const marks=600;
   console.log("marks inside function: ",marks);
}
showmarks();
console.log("marks outside function: ",marks);


//T5
function calculation(){
    const quantity=5;
    const price=150;
    const total=quantity*price;
    return total;
}
console.log(calculation());


//T6
function showStudent() {
  const name = "Asha";
  let marks = 80;
}

showStudent();

console.log(name);
console.log(marks);// we cannot use local var outside function