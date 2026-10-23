
//T4
import { displayStudent } from "./studentservices.js";
displayStudent("Siya", [99, 80, 100]);
displayStudent("Raj", [100, 95, 85]);


//T5
/* 

//Incorrect file name
import { displayStudents } from "./studentservice.js";
displayStudents("Siya", [80, 70, 90]);
//Error:ERR_MODULE_NOT_FOUND "displayStudents"

//correct : correct function name 'displayStudents' to 'displayStudent'

//Correct
import { displayStudent } from "./studentservice.js";
displayStudent("Siya", [80, 70, 90]);




//Incorrect file path
import { displayStudent } from "./studentServices.js";
displayStudent("Siya", [80, 70, 90]);
//Error: ERR_MODULE_NOT_FOUND "studentServices"

//correct: Use correct path name

//correct 
import { displayStudent } from "./studentservice.js";
displayStudent("Siya", [80, 70, 90]);
*/