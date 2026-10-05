
//Exercise 1 -destructuring 
/*Write the destructuring assignment that reads:
name property into the variable name.
years property into the variable age.
isAdmin property into the variable isAdmin (false if absent)*/

let user = {
    name: "John",
    years: 30
};

var {name: names, years:age, isAdmin:isAdmin =false} = user;

console.log(names, age, isAdmin);
//===================================================================================================//
//Exercise 2 - Give the right Name
/*Give the right name:

Create the variable with the name of our planet. How would you name such a variable?
Create the variable to store the name of the current visitor. How would you name that variable?*/

let ourPlanet;
let currentVisitor;

//===================================================================================================//
//Exercise 3 - result of call
/*Look at the code. What will be the result of the call at the last line and why? */
let phrase = "Hello";

if (true) {
  let user = "John";
  function sayHi() {
    //alert(`${phrase}, ${user}`);
    console.log(`${phrase}, ${user}`); //Updated to console log to run with Node.
  }
};

sayHi();  //Output 'Hello, John' (Example of Closure)
//===================================================================================================//
//Exercise 4 -Object code
/*Write the code, one line for each action:
Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.*/

const user4 = {};
user4.name = 'John';
user4.surname = 'Smith'; console.log(user4);
user4.name = 'Pete'; console.log(user4);
delete user4.name; console.log(user4);

//===================================================================================================//
//Exercise 5 -change an object declared with const 
//Is it possible to change an object declared with const, how do you think and why?
//ha ha :) just tried in previous example and it worked

//Objects points to a reference or its like a pointer. and reference
//points to a address which has data like name in this case
//user5 -> reference -> data(name, age etc)
//So when we add new elements to the object ..the reference to mem location
//stays the same but the data is updated so JS allows the declaration.
const user5 ={
    name:"John"
}
user5.name = "Pete"; console.log(user5);
//===================================================================================================//
//Exercise 6 -Sum of all salaries
/*We have an object storing the salaries of our team:
Write a code to sum all salaries and store in the variable sum. If salaries is empty, then the result must be 0.*/

let salaries = {
  Fred: 100,
  Ted: 160,
  Ghaith: 130
}

function sumS(listOfSalaries){
    let sum = 0;
    for(let key in listOfSalaries){
       sum+=listOfSalaries[key];
    }
    return sum;
}
console.log(sumS(salaries));

//===================================================================================================//
//Exercise 7 -Ternary
/*Rewrite this if using the ternary operator '?':
if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}*/
let a, b;
const result = (a+b<4)? 'Below':'Over';

//===================================================================================================//
//Exercise 8 - Multiple Ternary
/*Rewrite if..else using multiple ternary operators '?'.
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}*/
let login ='Director';
let message = (login == 'Employee') ? 'Hello': ((login == 'Director')? 'Greetings': ((login == '')? 'No login':''));
console.log(message);