//Friday: 3rd Highest Number in Array
//Having an array of numbers, write an algorithm that will return the 3rd highest number in the array. 
// Your algorithm should do only one iteration of the array (just one for/while loop).
//
//Example:
//Using the array 
//const arr = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31]
//The correct answer is : 11
//-------------------------------------------------------------------------------------------------
// function to return 3rd height number in input array 
// declare 3 variables to store the 3 heighest number in decending order
// for loop to traverse through array elements 
// if conditions to determine the 3rd heighest, 2nd and heightest numbers
//return 3rd heighest number.
 
function thirdHeighest(inputArr){
    let num1 = 0;
    let num2 = 0;
    let num3 = 0;

    for(let i = 0; i < inputArr.length ; i++){
        if(inputArr[i] > num1){
            num3 = num2;
            num2 = num1;
            num1 = inputArr[i];
        } else if(inputArr[i] > num2){
            num3 = num2;
            num2 = inputArr[i];
        } else if(inputArr[i] > num3){
            num3 = inputArr[i];
        }
    }
    return num3;
}
const arr = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];
console.log(thirdHeighest(arr));