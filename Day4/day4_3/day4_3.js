//T1
function getDataCallback(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

getDataCallback((result) => {
  console.log(result);
});

function getDataPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
}
getDataPromise().then((result) => {
  console.log(result);
});


//T2
Promise.resolve(10)
  .then((number) => number * 3)
  .then((number) => number + 5)
  .then((result) => console.log(result));


//T3
Promise.resolve(10)
  .then((number) => {
    console.log("First:", number);
    return number * 2;
  })
  .then((number) => {
    throw new Error("Something went wrong!");
  })
  .then((number) => {
    console.log("This will not execute");
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });


//T4
function calculate() {
  return Promise.resolve(10)
    .then((number) => number * 3)
    .then((number) => number + 5);
}
async function main() {
  try {
    const result = await calculate();
    console.log(result);
  } catch (error) {
    console.log("Error:", error.message);
  }
}
main();


//T5
async function getUsers() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const users = await response.json();

    users.slice(0, 5).forEach((user) => {
      console.log(user.name);
    });
  } catch (error) {
    console.log("Error:", error.message);
  }
}
getUsers();


//T6
async function fetchData() {
  try {
    const [usersResponse, postsResponse] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts")
    ]);

    if (!usersResponse.ok || !postsResponse.ok) {
      throw new Error("One or more requests failed");
    }

    const [users, posts] = await Promise.all([
      usersResponse.json(),
      postsResponse.json()
    ]);

    console.log("Users:", users.length);
    console.log("Posts:", posts.length);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

fetchData();


//T7
Promise.all([
  Promise.resolve("A"),
  Promise.resolve("B")
]).then(console.log);

Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Failed")
]).then(console.log);

Promise.race([
  new Promise((resolve) =>
    setTimeout(() => resolve("Slow"), 1000)
  ),
  Promise.resolve("Fast")
]).then(console.log);

Promise.any([
  Promise.reject("Error"),
  Promise.resolve("Success")
]).then(console.log);


//T8
//CORRECT CODE

//1
function getNumber() {
  return Promise.resolve(25);
}

getNumber().then((number) => {
  console.log(number);
});

//2
Promise.resolve(5)
  .then((number) => {
    return number * 2;
  })
  .then((result) => {
    console.log(result);
  });

// 3
Promise.reject(new Error("Failed"))
  .catch((error) => {
    console.log(error.message);
  });

// 4
async function fetchData() {
  try {
    const [usersResponse, postsResponse] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts")
    ]);

    if (!usersResponse.ok || !postsResponse.ok) {
      throw new Error("Failed to fetch data");
    }

    const [users, posts] = await Promise.all([
      usersResponse.json(),
      postsResponse.json()
    ]);

    console.log("Users:", users.length);
    console.log("Posts:", posts.length);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

fetchData();

//T9
console.log("1. Start");
setTimeout(() => {
  console.log("2. Timer");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("3. Promise");
  })
  .then(() => {
    console.log("4. Promise chain");
  });

async function run() {
  console.log("5. Async start");
  await Promise.resolve();
  console.log("6. After await");
}
run();
console.log("7. End");