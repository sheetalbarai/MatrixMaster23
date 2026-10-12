//Wednesday: Factorialize!
//Declare a function factorialize(n) that takes an integer n as input and 
//returns the factorial of the provided integer.
//If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
//Factorials are often represented with the shorthand notation n!
//For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
//Example Outputs:
//
//factorialize(0) should return 1.
//factorialize(10) should return 3628800.
//factorialize(20) should return 2432902008176640000.
//-----------------------------------------------------------------------
// create a function factorialize with integer as input parameter.
// create a variable 'factorial' to store the final factorial value.
// initialize it to 1. for input 0 the result will be 1 
// for loop to traverse through all numbers from 1 to given integer 
// multiply all the numbers to generate result. return the result
// Test the function - giving different integer values. 

function factorialize(num){
    let factorial = 1; 
    for(let i = num ; i > 0 ; i--){
            factorial *= i;
    }
    return factorial;
}
console.log(factorialize(0));
console.log(factorialize(10));
console.log(factorialize(20));
