/*

//section A

//Q1
B. ??

//Q2
A. ?.


//Q3
B. JSON.stringify()

//Q4
C. reduce()

//Q5
C. sort()

//Q6
B. Strings


//Q7
B. removeItem()


//Q8
C. null


//Q9
A. ??


//Q10
C. JavaScript running on the same origin can access stored data.





//Section B

//Q1
console.log(0 || 10);//10
console.log(0 ?? 10);//0

//Q2
const numbers = [1, 2, 3, 4];
const total = numbers.reduce((sum, n) => sum + n, 0);
console.log(total); //10

//Q3
const product = {
  name: "Mouse",
  price: 500
};
console.log(JSON.stringify(product));//{"name":"Mouse","price":500}

//Q4
const users = [
  { name: "Asha", active: true },
  { name: "Ravi", active: false },
  { name: "Neha", active: true }
];
console.log(users.filter(user => user.active).length); //2

//Q5
const prices = [300, 100, 200];
const sorted = [...prices].sort((a, b) => a - b);
console.log(sorted);//[ 100, 200, 300 ]
console.log(prices);//[ 300, 100, 200 ]


/* 
//Section C

//Q1
const json = '{"name":"Asha","age":21}';
const user = JSON.stringify(json);
console.log(user.name);
//correct code
const json = '{"name":"Asha","age":21}';
const user = JSON.parse(json);
console.log(user.name);


//Q2
const prices = [100, 20, 300, 5];
const sorted = prices.sort();
console.log(sorted);
//correct code
const price = [100, 20, 300, 5];
const sorte = price.sort((a,b)=>a-b);
console.log(sorte);


//Q3
const tasks = ["Learn JS", "Practice React"];
localStorage.setItem("tasks", JSON.stringify(tasks));
const savedTasks = JSON.parse(localStorage.getItem("tasks"));
console.log(savedTasks);

*/

//section D


//Q1
function DisplayCity(user) {
    return user.address?.city ?? "Unknown City";
}
const user1 = {
    name: "Asha",
    address: {
        city: "Anand"
    }
};
const user2 = {
    name: "Ravi"
};
console.log(DisplayCity(user1));
console.log(DisplayCity(user2));

//Q2
const productes = [
    { name: "Laptop", price: 45000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1200 }
];
const jsonString = JSON.stringify(productes);
console.log(jsonString);
const parsedProducts = JSON.parse(jsonString);
console.log(parsedProducts);

//Q3
const products = [
    { name: "Laptop", price: 45000, quantity: 1 },
    { name: "Mouse", price: 500, quantity: 2 },
    { name: "Keyboard", price: 1200, quantity: 1 }
];
const totalCost = products.reduce((total, product) => {
    return total + product.price * product.quantity;
}, 0);
console.log("Total cost:", totalCost);


//Q4
const task = ["Learn JS", "Practice React", "Build a project"];
localStorage.setItem("tasks", JSON.stringify(tasks));
const savedTask = JSON.parse(localStorage.getItem("tasks"));
console.log(savedTasks);
console.log(savedTasks[0]);
console.log(Array.isArray(savedTasks));















