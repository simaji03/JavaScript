
//Q1
console.log(a); //undefined
var a = 10;
console.log(m); //nitialization
let m = 20;
console.log(foo()); //99
function foo() { return 99; } 


//Q2
let x = { value: 1 };
let y = x;
x.value = 5;
y = { value: 10 };
console.log(x.value, y.value); //5,10


//Q3
console.log(typeof 10); //number
console.log("10" - 2); //8
console.log("10" + 2 - 1); //101
console.log(typeof typeof 10); //string


//Q4/5
let user = { name: "Rahil", age: 21 };
(function({ name, age }) {
  let name2 = name;
  name = "Changed";
  console.log(name, name2, user.name);
})(user); //changed rahil rahil


//Q6
console.log("A");
setTimeout(() => {
  console.log("B");

  async function run() {
    console.log("C");
    await Promise.resolve();
    console.log("D");
  }

  run();
}, 0);
Promise.resolve().then(() => console.log("E"));
console.log("F"); 
//A,F,E,B,C,D


//Q7
console.log(1);
async function x() {
  console.log(2);
  await null;
  console.log(3);
}
x();
Promise.resolve().then(() => console.log(4));
setTimeout(() => console.log(5));
console.log(6);
//1,2,6,3,4,5


//Q8
async function test() {
  console.log("X");
  await Promise.resolve();
  console.log("Y");

  await Promise.resolve(
    Promise.resolve().then(() => console.log("Z"))
  );
  console.log("W");
}
console.log("A");
test();
console.log("B");
//A,X,B,Y,Z,W


//Q9
console.log("1");
setTimeout(() => {
  console.log("2");

  Promise.resolve()
    .then(() => console.log("3"))
    .then(() => console.log("4"));
}, 0);
Promise.resolve().then(() => console.log("5"));
console.log("6");
//1,6,5,2,3,4


//Q10
Promise.resolve().then(() => console.log("M1"));
queueMicrotask(() => {
  console.log("M2");
  Promise.resolve().then(() => console.log("M3"));
});
console.log("S1");
Promise.resolve().then(() => console.log("M4"));
console.log("S2");
//S1,S2,M1,M2,M4,M3


//Q11
async function work(n) {
  return n * 2;
}
console.log("Start");
[1, 2, 3].forEach(async (x) => {
  console.log("A" + x);
  console.log(await work(x));
});
console.log("End");
// Start,A1,A2,A3,End,2,4,6


//Q12
console.log("Q");
setTimeout(async () => {
  console.log("W");
  await null;
  console.log("E");
}, 0);

Promise.resolve().then(() => console.log("R"));
console.log("T");
// Q,T,R,W,E


//Q13
async function one() {
  console.log("1");
  await null;
  console.log("2");
}
async function two() {
  console.log("3");
  await null;
  console.log("4");
}
console.log("0");
one();
two();
console.log("5");
//0,1,3,5,2,4


//Q14
console.log("A");
new Promise((res) => {
  console.log("B");
  res();
}).then(() => console.log("C"));

async function go() {
  console.log("D");
  await null;
  console.log("E");
}
go();
console.log("F");
//A,B,D,F,C,E


//Q15
console.log("1");
setTimeout(() => console.log("2"));
Promise.resolve().then(() => {
  console.log("3");
  setTimeout(() => console.log("4"));
});
Promise.resolve().then(() => console.log("5"));
console.log("6");
//1,6,3,5,2


//Q16
function counter() {
  let n = 0;
  return function count(x) {
    if (x === 0) return n;
    n += x;
    return count(x - 1);
  };
}
const c = counter();
console.log(c(3));  //6
console.log(c(2));   //9


//Q17
function aa() {
  return 1;
}
let bb = aa;
function aa() {
  return 2;
}
console.log(aa(), bb()); //2 2


//Q18
const obj = {
  a: { x: 10 },
  b: { x: 20 }
};
let { a, b } = obj;
a.x = 99;
b = { x: 40 };
console.log(obj.a.x, obj.b.x, a.x, b.x); //99 20 99 40


//Q19
function sum(arr) {
  if (arr.length === 0) return 0;
  return arr.pop() + sum(arr);
}
const nums = [1, 2, 3, 4];
console.log(sum(nums), nums.length); //10 0


//Q20
let funcs = [];
for (var i = 0; i < 3; i++) {
  funcs.push(() => console.log(i));
}
funcs[0]();//3
funcs[1]();//3
funcs[2]();//3



