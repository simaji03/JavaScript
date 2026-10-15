
//T1
function welcomeUser(name, callback){
    console.log("hello "+name);
    callback();
}
function greet(){
    console.log("Good Morning !");
}
welcomeUser("siya",greet); // hello siya \n Good Morning !


//T2
function calculator(a,b,callback){
    return callback(a,b);
}
const add = calculator(50,5,(x,y) => x+y);
const sub = calculator(50,5,(x,y) => x-y);
const mul = calculator(50,5,(x,y) => x*y);
const div = calculator(50,5,(x,y) => x/y);

console.log(add);//55
console.log(sub);//45
console.log(mul);//250
console.log(div);//10


//T3
function multiply(a){
    return function(b){
        return a*b;
    }
}
const multiplication = multiply(2);
console.log(multiplication(10));//20
console.log(multiplication(100));//200



//T4
console.log("Message 1");
setTimeout(() => {
    console.log("Message 2");
},1000);
console.log("Message 3"); // Message 1 \n Message 3 \n Message 2



//T5
function numberDouble(numbers,callback){
    return numbers.map(callback);
}
const numbers=[1,2,3,4,5];
const doubleNumber = numberDouble(numbers,num => num*2);
console.log(doubleNumber); //[ 2, 4, 6, 8, 10 ]
