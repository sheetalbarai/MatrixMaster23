/*Thursday: iFib vs rFib
The Fibonacci sequence is a famous bit of mathematics, and it happens to have a recursive definition.
The first two values in the sequence are 1 and 1 (essentially 2 base cases).
 Each subsequent value is the sum of the previous two values, 
 so the whole sequence is 1, 1, 2, 3, 5, 8, 13, 21 and so on. 
 Define a recursive fibonacci(n) method that returns the nth Fibonacci number,
  with n=1 representing the start of the sequence.
Note: Solve both iteratively and recursively.
function fibonacci(n) {
   if (n <= 2){
     return 1;
   }else{
     return fibonacci(n-2) + fibonacci(n-1);
   }
}
console.log(fibonacci(7));
//Returns 21

The results should be:

fibonacci(1) // should give 1
fibonacci(2) // should give 1
fibonacci(3) // should give 2*/
//------------------------------------------------------------------------------------------
// 7th element in FIbonacci is series is 13 and not 21 ...if we check  1, 1, 2, 3, 5, 8, 13, 21

function rFibonacci(n) {
   if (n <= 2){
     return 1;
   }else{
     return rFibonacci(n-2) + rFibonacci(n-1);
   }
}
console.log("Recursive");
console.log(rFibonacci(7));//Returns 21
console.log(rFibonacci(1)); // should give 1
console.log(rFibonacci(2)); // should give 1
console.log(rFibonacci(3)); // should give 2*/)
console.log(rFibonacci(8));

function iFibonacci(n){
    const arr = [];
    for(let i = 0; i < n ; i++){
        if(i==0 || i==1) {
            arr[i] = 1;
        } else{
            arr[i] = arr[i-1] + arr[i-2];
        }
    }
    return arr.pop();
}
console.log("Iterative");
console.log(iFibonacci(7));//Returns 21
console.log(iFibonacci(1)); // should give 1
console.log(iFibonacci(2)); // should give 1
console.log(iFibonacci(3)); // should give 2*/)
console.log(iFibonacci(8));