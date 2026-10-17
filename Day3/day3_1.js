/*


const employee1 = {
    Empname: "siya",
    Empdepartment: "BCA",
    Empsalary: 100000,
    EmpId: 101
};

for (let std in employee1) {
    console.log(std,employee1[std]);
}


const user = {
  names: "Amit",
  greet () {
    console.log(`Hello, ${this.names}`);
  }
}

user.greet();


*/




//T1
const employee = {
    Empname:"siya",
    Empdepartment:"BCA",
    Empsalary:100000,
    EmpId:101
};
console.log("Employee information using dot")
console.log(employee.Empname);
console.log(employee.Empdepartment);
console.log(employee.Empsalary);
console.log(employee.EmpId);

console.log("Employee information using Brackets")
console.log(employee["Empname"]);
console.log(employee["Empdepartment"]);
console.log(employee["Empsalary"]);
console.log(employee["EmpId"]);

//T2
const product ={
    productName:"Perfume",
    ProductPrice:1000,
    discount:10
};
console.log("Product Details before Add, Update And Delete");
console.log(product);

product.stock=99;
product.ProductPrice=999;
delete product.discount;

console.log("Product Details Afetr Add, Update And Delete");
console.log(product);

//T3
const student = {
  stdname: "Neha",
  stdrollno:101,
  stdmarks: {
    javascript: 85,
    react: 100
  },
  stdaddress: {
    city: "Nadiad",
    state: "Gujarat"
  }
};
console.log(student.stdaddress.city); 
console.log(student.stdmarks.react); 

//T4
const user = {
    name: "Sima",
    age: 22
};
console.log(user.social?.linkedin);






