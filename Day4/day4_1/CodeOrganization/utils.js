export function calculateAVG(marks){
    const total= marks.reduce((sum,mark)=>sum+mark,0);
    return total/marks.length;
}

export function getResult(avg){
    return avg>= 50 ?"Pass":"Fail";
}