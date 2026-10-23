


//MINI project 
import { getUsers } from "./api.js";

const status= document.getElementById("status");
const userList = document.getElementById("user-list");

async function displayUser() {
    status.textContent="Loading Users...";
    status.className="";
    userList.replaceChildren();

    try{
        const users = await getUsers();
        users.forEach(user => {
            const card = document.createElement("article");
            card.className="user-card";

            const name=document.createElement("h2");
            name.textContent=user.name;

            const email=document.createElement("p");
            email.textContent=`Email: ${user.email}`;

            const city=document.createElement("p");
            city.textContent=`City: ${user.address.city}`;

             card.append(name, email, city);
             userList.appendChild(card);

        });
        status.textContent=`Loaded ${users.length} users successfully.`;
    }
    catch(error){
        console.error("Unable to load users: ",error);

        status.textContent=`Unable to load users. ${error.message || "Please try again."}`;
        
        status.className="error";
    }
}
displayUser();