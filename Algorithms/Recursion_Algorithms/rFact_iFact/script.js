/*Monday: rFactorial vs iFactorial
Solve the Factorialize algorithm. First, find an iterative solution and then a recursive solution.

//prompt user to enter a number to calculate the factorial
var num = prompt("What number do you want to find the factorial of?")
//recursive
var factorial = function(n) {
    if(n == 0) {
        return 1
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(num));*/
//---------------------------------------------------------------------------------------------

btn = document.getElementById('btn');

btn.addEventListener('click',function(){
    let num1 = Number(prompt("What number do you want to find the factorial of?"));
    alert("Recursive Factorial of number "+ num1 +" is: " +rFactorial(num1));
    alert("Iterative Factorial of number "+ num1 +" is: " +iFactorial(num1));
});

var rFactorial = function(n) {
    if(n == 0) {
        return 1
    } else {
        return n * rFactorial(n - 1);
    }
}

var iFactorial = function(n){
    let factorial = 1; 
    for(let i = n ; i > 0 ; i--){
            factorial *= i;
    }
    return factorial;
}