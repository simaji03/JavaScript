//T1
const student={
    name:"Siya",
    age:21
}
const jsonString= JSON.stringify(student);
console.log(jsonString);
const student_obejct = JSON.parse(jsonString);
console.log(student_obejct);

//T2
const invalidJson ='{"name":"siya",age:21}';
try{
    const user = JSON.parse(invalidJson);
    console.log(user);
}
catch(error){
    console.log("Sorry data is invalid ");
}

//T3
const users=[
    {id:1,name:"Siya",email:"siya200@gmail.com",active:true},
    {id:2,name:"Kiran",email:"kiran200@gmail.com",active:false},
    {id:3,name:"Ana",email:"ana200@gmail.com",active:true}
];
const activerUser=users.filter(user=>user.active)
                        .map(user=>({
                                    id:user.id,
                                    displayName:user.name,
                                    email:user.email
}));
console.log(activerUser);

//T4
const productPrice=[1000,500,250,100,1500];
const sorted=[...productPrice].sort((a,b)=>a-b);
console.log(productPrice);
console.log(sorted);

//T5
const products = [
    { name: "Laptop", price: 45000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1200 }
];
const TotalPrice=products.reduce((total,product)=>{
    return total + product.price;
},0);
console.log("Total ",TotalPrice);


//T6
const students = [
    { name: "Asha", marks: 82 },
    { name: "Ravi", marks: 67 },
    { name: "Neha", marks: 91 },
    { name: "Imran", marks: 48 },
    { name: "Meera", marks: 74 }
];
const totalMarks = students.reduce((total, student) => {
    return total + student.marks;
}, 0);
const averageMarks = totalMarks / students.length;
const topStudents = students.filter(student => student.marks >= 70);
console.log("Average Marks:", averageMarks);
console.log("Students scoring at least 70:", topStudents);


