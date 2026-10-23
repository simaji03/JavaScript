//T1
const productName = "Laptop";
const price = 45000;
const quantity = 2;
const total = price * quantity;
const invoice = `
----- PRODUCT INVOICE -----
Product Name : ${productName}
Price        : ₹${price}
Quantity     : ${quantity}
Total        : ₹${total}
---------------------------
`;
console.log(invoice);


//T2
const user = {
    name: "Ravi",
    contact: {
        email: "ravi@gmail.com",
        phone: "9876543210"
    }
};
console.log(user.contact?.phone);
const usr={
    name:"Siya"
}
console.log(usr.contact?.phone)



//const nam=null
//console.log(nam ?? "guest")
//T3
const values = [0, false, "", null, undefined];
values.forEach(value => {
    console.log("Value:", value);
    console.log("Using || :", value || "Default");
    console.log("Using ?? :", value ?? "Default");
    console.log("----------------");
});


//T4
function greet(name="guest"){
    return `Hello ${name}`;
}
console.log(greet());         
console.log(greet("Asha"));   
console.log(greet(undefined)); 
console.log(greet(null));  


//T5
function displayProfile(user={}){
    const name=user.name ?? "Unknown";
    const city = user.address?.city ?? "City Not Provided";

    return `${name} lives in ${city}`;
}
const user1 = {
    name: "siya",
    address: {
        city: "Anand"
    }
};
const user2 = {
    address: {
        city: "Vadodara"
    }
};
const user3 = {
    name: "Asha"
};
console.log(displayProfile(user1));
console.log(displayProfile(user2));
console.log(displayProfile(user3));

