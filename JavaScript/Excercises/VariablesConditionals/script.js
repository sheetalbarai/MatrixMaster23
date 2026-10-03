
const body       = document.querySelector("body");
const age_button = document.getElementById("checkAgeButton");
const age_input  = document.getElementById("ageInput");
const age_result = document.getElementById("ageResult")

const name_button = document.getElementById("checkNameButton");
const name_input  = document.getElementById("nameInput");
const name_result = document.getElementById("nameResult");
/*1. Create a variable to store your age. Write a conditional statement 
to check if you are old enough to vote (age >= 18), and log a message accordingly.*/


age_button.addEventListener("click", function() {
    let myAge = parseInt(age_input.value.trim());
    if(myAge >= 18){
        age_result.style.color = "green";
        age_result.innerHTML = "You can Vote!!";
    } else {
        let yearsToVote = 18 - myAge;
        age_result.style.color = "red";
        age_result.innerHTML = `Still ${yearsToVote} Years to vote !! Come back then.`;
    }
});

/* 2. Write a program that prompts the user for their name. 
If the name is "John," log "Hello, John!" to the console; otherwise,
 log "You are not John."*/

name_button.addEventListener("click", function() {
    let userName = prompt('Enter your name:');
    if(userName.toLocaleLowerCase() === 'john'){
        name_result.innerHTML = "Hello, John!";
        console.log("Hello, John!");
    } else {
        name_result.innerHTML = "You are not John.";
        name_result.style.color = "red";
        console.log("You are not John.");
    }
});
