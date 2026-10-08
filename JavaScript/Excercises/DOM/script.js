
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

toDoBtn.addEventListener("click", addItem);
function addItem(){
    const newItem = toDoItem.value;
    if(newItem !== ""){
        const li = document.createElement('li');
        li.innerHTML = newItem;
        toDoUL.appendChild(li);
        //toDoItem.value = 'Type Items'; toDoItem.style.color = 'gray';
        toDoItem.value = "";
    }
    newItem = "";
}

/* 3. Create a web page with an image and a button.
 Write JavaScript to change the image source when the button is clicked..*/

const imgAttributes = document.querySelector('img');
const imageBtn      = document.getElementById('imgBtn');

imgAttributes.style.width = '40%';
imgAttributes.style.height = '40%';

imageBtn.addEventListener('click', changeImage);

function changeImage() {
        imgAttributes.src = 'https://www.apple.com/v/iphone/home/ck/images/overview/priority-router/hero_iphone_duo__wqpt8bqwtfm2_medium.jpg'
};

/*4. Build an interactive form in HTML (e.g., a simple login form) with input fields for username and password.
Write JavaScript to validate the form when submitted. Display a message based on whether the login was successful or not.*/

const userName = document.getElementById('usrname');
const passWord = document.getElementById('passwd');
const loginSubmitBtn = document.getElementById('loginBtn');
const loginStatus = document.getElementById('loginStatus');

const sample_username = 'abc@gmail.com';
const sample_password = 'Email_2026';

loginSubmitBtn.addEventListener('click', validateLogin);

function validateLogin(e) {
    e.preventDefault();
    if(userName.value === sample_username){
        if(passWord.value === sample_password){
            loginStatus.innerHTML = "Login Succesessful";
            loginStatus.style.color = 'green';
        } else{
            loginStatus.innerHTML = "Wrong password. Try again!!";
            loginStatus.style.color = 'red';
        } 
    } else{
        loginStatus.innerHTML = "Username is not registered !!";
        loginStatus.style.color = 'red';
    }
    //userName.value = 'username'; userName.style.color = 'gray';
    //passWord.value = 'password'; passWord.style.color = 'gray';
    userName.value = "";
    passWord.value = "";
};
