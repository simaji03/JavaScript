//T1
const languages=["Python","HTML","CSS","JavaScript","C"];
const [first,second,third,forth,fifth]=languages;
console.log(first)
console.log(third)

//T2
const employee ={
    empname:"siya",
    emproll:101,
    empcity:"Nadiad"
};
//console.log(employee.empname);
//console.log(employee.emproll);
//console.log(employee.empcity);

const {empname : Ename,emproll,empcity,empstate = "Gujarat"}=employee;
console.log(Ename);
console.log(emproll);
console.log(empcity);
console.log(empstate)

console.log(employee)


//T3
const student1=["Siya",101];
const student2 =["Kiya",102]
const combined_students=[...student1,...student2];
console.log(combined_students)
const copied=[...combined_students];
copied.push("Hiya",103);
console.log("New array")
console.log(copied)
console.log("Original combined array")
console.log(combined_students)


//T4
function calculateAvg(...marks){
    const total = marks.reduce((sum,mark)=> sum+mark,0)
    return total/marks.length
}
console.log(calculateAvg(100,99,95))
console.log(calculateAvg(100,100,100,99,99))


//T5
function displayUser({name,email,role}){
    console.log("Name: ",name);
    console.log("Email: ",name);
    console.log("Role: ",name);
}
const user ={
    name:"Siya",
    email:"siya2000@gmail.com",
    role:"Scientist"
}
displayUser(user)