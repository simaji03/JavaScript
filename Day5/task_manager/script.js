
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");
const taskCount = document.getElementById("taskCount");

const STORAGE_KEY = "savedTasks";

let tasks = [];


function loadTasks() {
    try {
        const savedData = localStorage.getItem(STORAGE_KEY);

        
        if (savedData === null) {
            tasks = [];
            return;
        }

      
        const parsedData = JSON.parse(savedData);

        
        if (
            !Array.isArray(parsedData) ||
            !parsedData.every(task =>
                task !== null &&
                typeof task === "object" &&
                typeof task.id === "number" &&
                typeof task.text === "string" &&
                typeof task.completed === "boolean"
            )
        ) {
            tasks = [];
            message.textContent = "Saved data was invalid. Starting with an empty task list.";
            return;
        }

        tasks = parsedData;

    } catch (error) {
        
        tasks = [];
        message.textContent = "Could not load saved tasks.";
        console.error("Loading error:", error);
    }
}


function saveTasks() {
    try {
        
        const jsonData = JSON.stringify(tasks);

        localStorage.setItem(STORAGE_KEY, jsonData);

    } catch (error) {
        message.textContent = "Could not save tasks. Check browser storage.";
        console.error("Saving error:", error);
    }
}


function displayTasks() {
    taskList.replaceChildren();

    tasks.forEach(function (task) {
        const listItem = document.createElement("li");
        listItem.className = "task-item";

        if (task.completed) {
            listItem.classList.add("completed");
        }

        const taskText = document.createElement("span");
        taskText.className = "task-text";
        taskText.textContent = task.text;

       
        const completeButton = document.createElement("button");
        completeButton.className = "complete-button";
        completeButton.textContent = task.completed ? "Undo" : "Complete";
        completeButton.setAttribute(
            "aria-label",
            `${task.completed ? "Mark incomplete" : "Mark complete"}: ${task.text}`
        );

        completeButton.addEventListener("click", function () {
            toggleTask(task.id);
        });

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Delete";
        deleteButton.setAttribute("aria-label", `Delete: ${task.text}`);

        deleteButton.addEventListener("click", function () {
            deleteTask(task.id);
        });

        listItem.append(taskText, completeButton, deleteButton);
        taskList.appendChild(listItem);
    });


    const completedCount = tasks.filter(task => task.completed).length;

    taskCount.textContent =
        `Total tasks: ${tasks.length} | Completed: ${completedCount}`;
}


function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        message.textContent = "Please enter a task.";
        return;
    }

    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(newTask);

    saveTasks();
    displayTasks();

    taskInput.value = "";
    message.textContent = "";
    taskInput.focus();
}


function toggleTask(taskId) {
    tasks = tasks.map(function (task) {
        if (task.id === taskId) {
            return {
                ...task,
                completed: !task.completed
            };
        }

        return task;
    });

    saveTasks();
    displayTasks();
}


function deleteTask(taskId) {
    tasks = tasks.filter(function (task) {
        return task.id !== taskId;
    });

    saveTasks();
    displayTasks();
    message.textContent = "";
}


addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

loadTasks();
displayTasks();
