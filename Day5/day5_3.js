//Q1
localStorage.setItem("username","siya");
const username=localStorage.getItem("username");
console.log("hello "+username);


//Q2
const userPreferences = {
    theme: "dark",
    language: "English"
};
localStorage.setItem("preferences", JSON.stringify(userPreferences));
const savedPreferences = JSON.parse(
    localStorage.getItem("preferences")
);
console.log("Theme:", savedPreferences.theme);
console.log("Language:", savedPreferences.language);


//Q3
const currentStep = 2;
sessionStorage.setItem("formStep", currentStep);
const savedStep = sessionStorage.getItem("formStep");
console.log("Current Form Step:", savedStep);


//Q4/5
//To test invalid JSON, go to your browser's developer console and run:
localStorage.setItem("tasks", "{invalid JSON}");


//Q6
//Passwords and secret API keys should never be stored in browser storage, 
// such as localStorage or sessionStorage, because they are not secure places for sensitive information.



