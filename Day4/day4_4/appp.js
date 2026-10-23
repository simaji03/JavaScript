//Q1
import { isEven } from "./math.js";
console.log("Is 8 even?", isEven(8));
console.log("Is 7 even?", isEven(7));

//Q2
function getMessage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task completed");
    }, 1000);
  });
}
async function displayMessage() {
  try {
    const message = await getMessage();
    console.log(message);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
displayMessage();


//Q3
async function fetchData() {
  try {
    const [usersResponse, postsResponse] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts")
    ]);
    if (!usersResponse.ok) {
      throw new Error(`Users request failed: ${usersResponse.status}`);
    }
    if (!postsResponse.ok) {
      throw new Error(`Posts request failed: ${postsResponse.status}`);
    }
    const [users, posts] = await Promise.all([
      usersResponse.json(),
      postsResponse.json()
    ]);

    console.log("Number of users:", users.length);
    console.log("Number of posts:", posts.length);

  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}
fetchData();