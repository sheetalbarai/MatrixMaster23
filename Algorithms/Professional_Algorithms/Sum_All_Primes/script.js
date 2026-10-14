/*Thursday: Sum All Primes
Sum all the prime numbers up to and including the provided number.
A prime number is defined as a number greater than one and having only two divisors, one and itself.
For example, 2 is a prime number because it's only divisible by one and two.
The provided number may not be a prime.
function sumPrimes(num) {
  return num;
}
sumPrimes(10);
The results should be like :
sumPrimes(10)  // should return a number.
sumPrimes(10) // should return 17.
sumPrimes(977)  // should return 73156. */
//---------------------------------------------------------------------------------------------------------
// 0 and 1 are not considered to be prime numbers
// function to take input integer 
// declare a variable sum to collect the addition of all prime numbers
// for loop to traverse from 0 to input integer.
// if condition to check if the number is prime or not 
//if prime add to sum and return sum
// For redability - added another small function to determine if the givern number is prime or not
// logic wise 
// if 0 or 1 return false 
// for loop - from number 2 to given input number 
// check if number % i is 0 and number is not same as i during interations ..if yes return false (given number is not a Prime) 
// if condition is not satified during for loop , its the prime number ..return true.


function sumPrimes(num){
    let sum = 0;
    for(let i = 0; i <= num; i++ ){
        if(chkPrime(i)){
            sum += i;
        }
    }
    return sum;
}

function chkPrime(n){
    if(n === 0 || n === 1){
        return false;
    } else {
        for (let i = 2 ; i <= n/2 ; i++ ){
            if(n%i === 0 && (n !== i)){
                return false;
            } 
        }   
        return true;
    }
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));
console.log(sumPrimes(1));