
/*1. Create an array of your favorite fruits. Use a `for` loop to log each fruit to the console.*/
const favFruits = ["Mango", "Banana", "Apple", "Grapes", "Orange"];

for (let i = 0; i <favFruits.length; i++) {
    console.log(favFruits[i]);
}
/*---------------------------------------------------------------------------------------------------*/
/* 2. Write a function that takes an array of numbers as a parameter and returns the average of those numbers. */
function average(arr_numbers) {
    let sum = 0;
    for (let i =0; i < arr_numbers.length; i++) {
        sum += arr_numbers[i];
    }
    return sum / arr_numbers.length;
}
const numbers = [10, 20, 30, 40, 50];
console.log("Average:", average(numbers));

/*---------------------------------------------------------------------------------------------------*/
/* 3.Given an array of numbers, use a loop to find and log the largest number in the array.*/
const numArray = [3, 7, 12, 18, 200, 40, 569, 2];
let largestNum = 0;
for (let i = 0; i<numArray.length; i++) {
    if (numArray[i] > largestNum) {
        largestNum = numArray[i];
    }
}
console.log("Largest number:", largestNum);

/*---------------------------------------------------------------------------------------------------*/
/*4. Create an array of words. 
Use a `for` loop to construct a sentence by concatenating these words and log it to the console.*/
const arrWords = ["Create", "an", "array", "of", "words", "and", "construct", "a", "sentence."];
let sentence = "";
for (let i = 0; i < arrWords.length; i++) {
    sentence += arrWords[i] + " ";
}
console.log("Sentence:", sentence);

/*---------------------------------------------------------------------------------------------------*/
/*5. Write a function that takes an array of names and a name as a parameter. 
The function should check if the given name exists in the array and return true or false.*/
function checkName(arr_names, name){
    for (let i = 0; i < arr_names.length; i++) {
        if (arr_names[i] === name) {
            return true;
        }
    }
    return false;   
}   

const names = ["Amber", "Bobby", "Charlie", "David", "Eva"];
const nameToCheck = "David";
const namePresent = checkName(names, nameToCheck);
console.log(`Is ${nameToCheck} present in the array?`, namePresent);

/*---------------------------------------------------------------------------------------------------*/
/*6. Create an array of even numbers from 1 to 20 using a `for` loop and the `if` statement. 
Log the resulting array to the console. */

const evenNumbers = [];
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        evenNumbers.push(i);
    }
}
console.log("Even numbers from 1 to 20:", evenNumbers);