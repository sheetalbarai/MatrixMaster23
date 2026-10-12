//=============================================================================================
//---------------------------------------------------------------------------------------------
//1. Addition
//Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, 
//but not both 3 and 5. To solve this task you might want to use the modulus operator.
//---------------------------------------------------------------------------------------------
//declare if variable to hold the addition result
// for loop to traverse from 200 to 2700
// if condition to check the division by 3 ot 5 and not 3&5
// add the value to variable if condition is true
// print result
console.log('Exercise - 1');
let addition = 0;

for(let i = 200; i <= 2700; i++){
    if((i%3===0 || i%5===0) && (!(i%3===0 && i%5===0))){
        addition += i;
    }
}
console.log(`Addition = ${addition}`);

//=============================================================================================
//---------------------------------------------------------------------------------------------
//2. Shift the Values
//Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one 
//to the front. When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].
//---------------------------------------------------------------------------------------------
//unshift array methods to be used. it adds elements to the beginning of array.
//define empty array for new array
//for loop to traverse through array , unshift elements of orig array to shifted
//print the new updated array

console.log('\nExercise - 2');
const orig_arr = [2,1,6,4,-7];
const shifted_arr = [];

for(let i = 0; i < orig_arr.length; i++){
    shifted_arr.unshift(orig_arr[i]);
}
console.log(`Original array = ${orig_arr}`);
console.log(`Shifted array  = ${shifted_arr}`);

//=============================================================================================
//---------------------------------------------------------------------------------------------
//3. FizzBuzz
//Create an algorithm that inserts the numbers from 1 to 135 into an array, while replacing the 
//values that are divisible by 3 with the word "Fizz", the numbers that are divisible by 5 with
//the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz".
//Your output should look like [1,2, 'Fizz',4, 'Buzz', 'Fizz',7, 8, ...]
//---------------------------------------------------------------------------------------------
// for loop to traverse through 1 to 135
// create an empty array to store the numbers and numbers replaced with words
// if condition to check divisible by 3, 5 and both.
// print the array output
console.log('\nExercise - 3');
const fizzbuzz_arr =[];

for(let i = 1; i <= 135; i++){
    if(i%3 === 0 && i%5 === 0){
        fizzbuzz_arr.push('FizzBuzz');
    }else if(i%3 === 0){
        fizzbuzz_arr.push('Fizz');
    }else if(i%5 === 0){
        fizzbuzz_arr.push('Buzz');
    }else{
        fizzbuzz_arr.push(i);
    }
}
console.log(fizzbuzz_arr);

//=============================================================================================
//---------------------------------------------------------------------------------------------
//4. Fibonacci
//For a Fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.
//A Fibonacci sequence is an infinite series of numbers that is created by adding the last two 
//numbers in the series. A series would start with the numbers 0 and 1 in place, followed 
//by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.
//0 1 1 2 3 5 8 13 21...
//---------------------------------------------------------------------------------------------
// create an empty array to store fibonacci series
// for loop to traverse through 1 to 1000000  (that is very long) so for example perse i<50
// initial 2 elements are 0 and 1. next element in series is addition of previous 2 elements.
// Push the addition to array
// print the array

console.log('\nExercise - 4');

let arr = [];
for (let i = 0; i < 50; i++){
   if(i==0 || i== 1){
    arr[i] = i;
   } else {
    arr[i] = arr[i-1] + arr[i-2];
   }
 }
console.log(arr);

//=============================================================================================
//---------------------------------------------------------------------------------------------
//5. Remove the Negative
//Given any array X, for example [1,-2,4,1], remove the negative numbers
//so that the output becomes: [1,4,1].
//---------------------------------------------------------------------------------------------
// create a new array to store only +ve numbers
//for loop array X elements
//if condition element >0 then push that to new array
//print new array.
console.log('\nExercise - 5');
let X = [1, -2, 4, 1];
let pos_arr = [];

for(let i = 0; i <= X.length; i++){
    if(X[i] >0){
        pos_arr.push(X[i]);
    }
}
console.log(pos_arr);

//=============================================================================================
//---------------------------------------------------------------------------------------------
//6. Communist Censorship
//Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], 
//replace every letter of the word Program with *, so the output would be 
//['Man', 'I','Love','The','Matrix','*******']. Then make your algorithm work for any word of 
//your choice
//---------------------------------------------------------------------------------------------
// for loop to traverse through given array of strings
//if condition to check element with word 'Program'
// replace with number of * = word.length.
//print the new array 
console.log('\nExercise - 6');
let X_6 = ['Man', 'I','Love','The','Matrix','Program'];

for(let i = 0 ; i < X_6.length; i++){
    if(X_6[i] === 'Matrix'){
        X_6[i] = '*'.repeat(X_6[i].length);
    }
}
console.log(X_6);