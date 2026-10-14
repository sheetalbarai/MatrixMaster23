/*Sum All Odd Fibonacci
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
The first two numbers in the Fibonacci sequence are 1 and 1. 
Every additional number in the sequence is the sum of the two previous numbers.
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5, and 8.
For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
function sumFibs(num) {
  return num;
}
sumFibs(4);*/
//------------------------------------------------------------------------------------------------------------
// function with input parameter as integer
//declare 3 variable to generate fibonacci series
//initial values of var1 and var2 is 1 and var3 is 0
//  var3 is sum of var1 and var2 during iterations
// declare a sum variable and add first 2 elements
// while the new generated fibonacci number var3 is less than the input integer 
// generate new elemnts of fibonacci series and also check condition if that element is odd
// if yes add to sum 
//return sum 


function sumFibs(num){
    let var1 = 1;
    let var2 = 1;
    let var3 = 0;
    let sumOddFib = var1 +var2;//Initial sum as first 2 elements of Fibonacci are fixed.

   while(var3 <= num){
        if(var3 %2 !== 0){
            sumOddFib += var3;
        }
        var3 = var1 + var2;
        var1 = var2;
        var2 = var3;
    } 
    return sumOddFib;
} 
console.log(sumFibs(10));
console.log(sumFibs(4));
console.log(sumFibs(15));