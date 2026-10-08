//========================================================================
//Exercise 1- The following function returns true if the parameter age is greater than 18.
//Otherwise, it asks for a confirmation and returns its result.
/*function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Do you have your parents permission to access this page?');
  }
}*/
//Rewrite it, to perform the same, but without if...else, and use the arrow function.
//updated the code to run without HTML


const ageBtn    = document.getElementById('ageBtn');

ageBtn.addEventListener('click',function(e){
    e.preventDefault();
    const inputAge  = document.getElementById('num1');
    const age = inputAge.value !== ""? parseInt(inputAge.value):0;
    checkAge(age);
});
//added confirm ('true) just to check o/p with html 
//const checkAge = age => age>18 ? true: confirm('Do you have your parents permission to access this page?');
const checkAge = age => age>18 ? confirm('true'): confirm('Do you have your parents permission to access this page?');


//console.log('Exercise 1 - Output');
//console.log(checkAge(17));
//console.log(checkAge(28));



//========================================================================
//Exercise 2-Write a function pow(x,n) that returns x in power n. Or, 
//in other words, multiplies x by itself n times and returns the result.
/*pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1*/
//P.S. In this task, the function 
//should support only the natural values of n: integers up from 1.

const powBtn = document.getElementById('powBtn');
const product = document.getElementById('power_output');
product.style.color = 'brown';

powBtn.addEventListener('click',function(e){
    e.preventDefault();
  
    let num1 = document.getElementById('num1_2');
    let num2 = document.getElementById('num2_2');

    let powXY = pow(num1.value, num2.value);
    product.innerHTML = `${num1.value} to the power of ${num2.value} is ${powXY}`;
  }
)

function pow(x,n){
  let x_in = parseInt(x);
  let n_in = parseInt(n); 
  let result = 1;
  for(let i = 0; i<n_in; i++){
    result*=x_in;
  }
  return result;
}
//console.log('Exercise 2 - Output');
//console.log(pow(3,2));
//console.log(pow(3,3));
//console.log(pow(1,100));

//========================================================================
//Exercise 3-Replace Function Expressions with arrow functions in the code:
/*function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no()
}

ask(
  "Do you agree?",
  function() { alert("You agreed.") },
  function() { alert("You canceled the execution.") }
)*/

ask_que = document.getElementById('ask_que');
ask_que.addEventListener('click',function(){
  ask(
  "Do you agree?",
  function() { alert("You agreed.") },
  function() { alert("You canceled the execution.") });

});

const ask = (question, yes, no) => confirm(question)? yes():no();

//========================================================================
//Exercise 4
/*Create an object calculator with three methods:

read() prompts for two values and saves them as object properties.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.*/

calc= document.getElementById("calculator");

calc.addEventListener('click',function(){
    calculator.read();
    alert( "sum =" + calculator.sum() );
    alert( "product ="+ calculator.mul() );
});

let calculator = {
  a:0,
  b:0,
  read () {
     this.a = Number(prompt("Enter first number"));
     this.b = Number(prompt("Enter second number"));
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
};


//========================================================================
//Exercise 5
/*Write a function min(a,b) which returns the least of two numbers a and b. 
Use the arrow function along with the question mark operator ?*/
const minBtn = document.getElementById("minBtn");

minBtn.addEventListener('click',function(){
   let a = Number(prompt("Enter first number"));
   let b = Number(prompt("Enter second number"));
   alert( "Minimum of " + a + " and " + b + " is " + min(a,b));
});


const min = (a,b) => a<b?a:b;
//console.log('Exercise 5 - Output');
//console.log(min(5,10));
//console.log(min(8,6));