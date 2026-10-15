
//T1
const company="Digol";
function showCompany(){
    //console.log(company); //Cannot access 'company' before initialization 

    const company="OneBranding"
    console.log(company);
}
showCompany();
console.log(company);



//T2
function outer(){
    const name="siya";

    function inner(){
        console.log(name);
    }
    inner();
}
outer();


//T3
function increaseCounter(){
    let cnt=10;

    return function(){
        cnt+=2;
        console.log(cnt)
    };
}
const counter = increaseCounter();
counter();//12
counter();//14


//T4
function createUser(){
    let userName="Siya";

    return function(){
        console.log("Hello "+userName);
    };
}
const greetUser= createUser();
greetUser();



//T5
function multiCounter(){
    let number=1;

    return () => ++number;
}
const counterA = multiCounter();
const counterB = multiCounter();

console.log(counterA());//2
console.log(counterA());//3
console.log(counterB());//2