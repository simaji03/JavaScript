import { calculateAVG, getResult  } from "./utils.js";

export function displayStudent(name,marks){
    const average = calculateAVG(marks);
    const result = getResult(average);

    console.log("Student:", name);
    console.log("Average:", average);
    console.log("Result:", result);
}