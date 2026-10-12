
//================================================================================
//--------------------------------------------------------------------------------
//1. Print 1 - 135
//Write a program using JavaScript that will print all the numbers from 1 to 135.
//--------------------------------------------------------------------------------
//for loop to print numbers varying index from 1 to 135
console.log("Exercise 1");
for(let i =1; i<=135; i++){
    console.log(i);
}
//================================================================================
//--------------------------------------------------------------------------------
//2. Print Odd Numbers 1 - 135
//Write a program using JavaScript that will print all the odd numbers from 1 to 135.
//--------------------------------------------------------------------------------
//for loop to traverse through indexes 1 to 135
//Write condition to check if perticular index is odd then print
console.log("Exercise 2");
for(let i=1; i<=135;i++){
    if(i%2 !== 0){
        console.log(i);
    }
}
//================================================================================
//--------------------------------------------------------------------------------
//3. Sum of Printed Numbers
//Write a program that will print all the numbers from 1 to 135 AND the sum of the numbers that have been printed so far. Your output should look similar to this:
//Number is: 0 Sum: 0
//Number is: 1 Sum: 1
//Number is: 2 Sum: 3
//Number is: 3 Sum: 6
//...
//Note: You are NOT allowed to use an array to solve this exercise.
//--------------------------------------------------------------------------------
// create a new variable sum to collect the sum of all numbers 
// for loop to traverse through 1 to 135 and print the sum and numbers in block
console.log("Exercise 3");
let sum = 0;
for(let i = 1; i<=135; i++){
    sum +=i;
    console.log(`Number is: ${i} Sum: ${sum}`);
}

//================================================================================
//--------------------------------------------------------------------------------
//4. Print the elements of an array
//Given an array X = [1,4,2,12], write a program that will iterate through the array 
//and print all numbers on the screen. Your program should work with arrays of all sizes.
//--------------------------------------------------------------------------------
// for loop to go through array elements index varying from 0 to array.length 
// print array[index] for each iteration
console.log("Exercise 4");
const X = [1,4,2,12];
for(let i of X){
    console.log(i);
}
//OR
for(let i = 0 ; i <X.length; i++){
    console.log(X[i]);
}

//================================================================================
//--------------------------------------------------------------------------------
//5. Find Max
//Given an array X, write a program that would find the maximum value of the array. 
//Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero.
//--------------------------------------------------------------------------------
// declare a veriable which will hold MAX value compare the MAX value with each array 
// elements. 
// if condition to check array element is bigger then update the MAX variable with new value.
// loop through the array using for loop. 
// Assign the first element as Initial value to MAX.
//if all +ve numbers initial MAX value can be 0 if all -ve values in array then initial value
//being 0 will not give correct MAX value.
console.log("Exercise 5");
const X_1 = [2,-3,-1];
let MAX = X_1[0];

for(let i= 1; i <X_1.length; i++){
    if(MAX < X_1[i]){
        MAX = X_1[i];
    }    
};
console.log(`Maximum value in array is ${MAX}`);

//================================================================================
//--------------------------------------------------------------------------------
//6. Get Average
//Given an array X, write a program that will return the average value of all elements 
//in the array. For example, for array X = [2,1,3] your output should be 2.
//--------------------------------------------------------------------------------
// avergae = sum/num of elements
// declare 2 variables average and sum
// for loop to traverse through each element of array and calculate sum
// print average.
console.log("Exercise 6");
let average_6 = 0;
let sum_6 = 0;
const X_6 = [2,1,3];
for (let i of X_6){
    sum_6 += i;
};
average_6 = sum_6/X_6.length;
console.log(average_6);

//================================================================================
//--------------------------------------------------------------------------------
//7. Eliminate the Negatives
//Given an array X, write a program that will remove all negative numbers and replace 
//them with a 0. For example, for array X = [2,-1,4,-3] the output of your program should be
//[2,0,4,0]
//--------------------------------------------------------------------------------
// for loop to traverse through array
// if condition to check if the number is -ve i.e num <0 
// if yes replace the -ve number with 0
console.log("Exercise 7");
const X_7 = [2,-1,4,-3];
for(let i=0; i<X_7.length; i++){
    if(X_7[i] < 0){
        X_7[i] = 0;
    }
}
console.log(X_7);

//================================================================================
//--------------------------------------------------------------------------------
//8. Number to String
//Write a program that takes an array of numbers and turns the negative values into strings.
//For example,
// For array 
//const x= [1,-4,0,-1]  
// The output should be [1,'Turing,0,'Turing'].
//--------------------------------------------------------------------------------
// For loop through array elements
// if condition to check number is -ve 
// if yes change to a string "Turing"
// print updated array 
console.log("Exercise 8");
const X_8 = [1,-4,0,-1];

for(let i =0; i <X_8.length; i++){
    if(X_8[i] < 0){
        X_8[i] = 'Turing';
    }
}
console.log(X_8);
