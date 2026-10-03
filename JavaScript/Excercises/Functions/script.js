
const sum_button = document.getElementById("sumButton");
const num1_input = document.getElementById("num1");
const num2_input = document.getElementById("num2");
const sum_output = document.getElementById("sumOutput");


/*1. Write a function that takes two numbers as parameters and returns their sum. 
Call the function with different numbers to test it.*/

sum_button.addEventListener("click", function() {
    let num_1 = parseInt(num1_input.value.trim());
    let num_2 = parseInt(num2_input.value.trim());
    let sum = sum_of_numbers(num_1,num_2);
    sum_output.innerHTML = `Sum: ${sum}`;
    console.log(`Sum: ${sum}`);
});

function sum_of_numbers(numOne,numTwo){
    let sumJS = numOne + numTwo;
    return sumJS;
}
const res1= sum_of_numbers(23, 10);
console.log(res1);

/*-------------------------------------------------------------------------*/

const strrev_button = document.getElementById("strRevButton");
const strrev_input  = document.getElementById("strRevInput");
const strrev_output = document.getElementById("strRevOutput");

/* 2.Create a function that accepts a string as a parameter and returns the string reversed. 
For example, "hello" should become "olleh.""*/

strrev_button.addEventListener("click", function() {
    let strin = strrev_input.value.trim();
    let reversedStr = reverseString(strin);
    strrev_output.style.color = "blue";
    strrev_output.innerHTML = `${reversedStr}`;
});

function reverseString(str) {
    let reversed = [];
    for (let i = 0; i < str.length; i++) {
        reversed[str.length - 1 - i] = str[i]; 
    }
    return reversed.join('');
}

const res2 = reverseString("HELLO"); // Output: "olleh"
console.log(res2);  
