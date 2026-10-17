//T1
const employee1={
    name:"siya",
    age:20,
    address:"Nadiad"
}
const employee2 = employee1;
employee2.age=21
console.log(employee1.age)
console.log(employee2.age)
/* Both variables show the same updated value because employee1 and employee2 refer to the same object in memory. */

//T2
const user ={
    name:"siya",
    email:"siya2000@gmail.com"
}
const updateduser={
    ...user,
    email:"siya2030@gmail.com"
}
console.log(user.email)
console.log(updateduser.email)

//T3
const product ={
    name:"Box",
    detail:{
        color:"Black",
        dimension:"3D"
    }
}
const Updated_new_Product ={
    ...product,
    detail:{
        ...product.detail,
        color:"white"
    }
}
console.log(product.detail.color)
console.log(Updated_new_Product.detail.color)


//T4
const Product_clothes={
    productname:"dress",
    productprice:1000,
    productstock:99
}
console.log(Object.keys(Product_clothes))
console.log(Object.values(Product_clothes))
console.log(Object.entries(Product_clothes))


//T5
const students = [
    { name: "Asha", marks: 80 },
    { name: "Ravi", marks: 65 },
    { name: "Neha", marks: 90 }
];
const updatedStudents = students.map(student =>
    student.name === "Ravi"
        ? { ...student, marks: 75 }
        : student
);
console.log("Original:", students);
console.log("Updated:", updatedStudents);
