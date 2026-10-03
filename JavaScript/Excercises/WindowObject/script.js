
/*1.Use the `window.alert` method to
 display an alert dialog with a message of your choice when a button is clicked on a webpage..*/

sendAlert.addEventListener("click", function() {
    window.alert("This is just an alert message to check if the button works correctly.");
});

/* 2. Create a function that uses `window.prompt` 
to ask the user for their name, then use `window.alert` to greet them with their name.*/

function greetUser() {
    let userName = window.prompt("Please enter your name:", "Your Name");
    window.alert("Hello, " + userName + "! Welcome to our website.");
}

greetUser();
