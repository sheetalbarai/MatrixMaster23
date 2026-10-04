
const textChangeBtn = document.getElementById("textChangeBtn");
const textOriginal  = document.getElementById("text");
const header5       = document.querySelectorAll("h5"); // All returns array of all elements
const toDoBtn       = document.getElementById("addBtn");
const toDoItem      = document.getElementById("todoIn");
const toDoUL        = document.getElementById("todo_ul");

header5.forEach(hdr => {
    hdr.style.color = "blue";
});

/*1. Create an HTML page with a button and a div element. 
Write a JavaScript function that changes the text content of the div when the button is clicked */

textOriginal.textContent = "This is the original text.";

textChangeBtn.addEventListener("click", modifyText);
function modifyText() {
    if(textOriginal.textContent.includes("original")) {
        textOriginal.textContent = "The text has been changed!";
    }else{
        textOriginal.textContent = "This is the original text.";
    }
}

/*2. In an HTML page, create a list of items (e.g., a to-do list) using an unordered list (`<ul>`) 
and list items (`<li>`). Write JavaScript to add a new item to the list when a button is clicked.*/

toDoBtn.addEventListener("click",() =>{
    const newItem = toDoItem.textContent;
    toDoUL.appendChild= '<li>newItem</li>';
});

/*1.Use the `window.alert` method to
 display an alert dialog with a message of your choice when a button is clicked on a webpage..*/

 /*
sendAlert.addEventListener("click", function() {
    window.alert("This is just an alert message to check if the button works correctly.");
});

/* 2. Create a function that uses `window.prompt` 
to ask the user for their name, then use `window.alert` to greet them with their name.*/
/*
function greetUser() {
    let userName = window.prompt("Please enter your name:", "Your Name");
    window.alert("Hello, " + userName + "! Welcome to our website.");
}

greetUser();
*/
