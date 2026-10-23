
const loading = document.getElementById("loading");
const errorMessage = document.getElementById("error");
const userList = document.getElementById("user-list");

async function fetchUsers() {
    loading.style.display = "block";
    errorMessage.textContent = "";
    userList.innerHTML = "";

    try {
        // Fetch users from the API
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        // Check for HTTP errors
        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        // Convert JSON into JavaScript data
        const users = await response.json();

        // Display each user's name and email
        users.forEach((user) => {
            const card = document.createElement("div");
            card.className = "user-card";

            const name = document.createElement("h3");
            name.textContent = user.name;

            const email = document.createElement("p");
            email.textContent = user.email;

            card.append(name, email);
            userList.appendChild(card);
        });

    } catch (error) {
        errorMessage.textContent = "Error: " + error.message;

    } finally {
        // Always hide loading, whether success or failure
        loading.style.display = "none";
    }
}

fetchUsers();
