

//T1
const names=["React","Node.js","MongoDB"];
names.forEach(name => console.log(name)); //React \n Node.js \n MongoDB


//T2
const numbers2=[1,2,3,4,5];
const Squarenum= numbers2.map(num => num*2);
console.log(Squarenum); [ 2, 4, 6, 8, 10 ]


//T3
const numbers3 = [100, 45, 28, 60, 95];
const result3 = numbers3.filter(number => number >= 60);
console.log(result3); //[ 100, 60, 95 ]



//T4
const products = [
    { name: "Keyboard", price: 800 },
    { name: "Mouse", price: 500 },
    { name: "Monitor", price: 5000 },
    { name: "Headphones", price: 900 }
];
const result= products.filter(product => product.price<1000).map(product => product.name);
console.log(result); //[ 'Keyboard', 'Mouse', 'Headphones' ]



//T5
const students = [
    { name: "Asha", marks: 82 },
    { name: "Ravi", marks: 67 },
    { name: "Neha", marks: 91 },
    { name: "Imran", marks: 48 },
    { name: "Meera", marks: 74 }
];
const selectedStudents = students.filter(student => student.marks >= 70);
selectedStudents.forEach(student => console.log(student.name));
//Asha
//Neha
//Meera
