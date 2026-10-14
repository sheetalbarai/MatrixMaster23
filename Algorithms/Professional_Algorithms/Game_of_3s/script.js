/*Monday: Game of 3s
We want to play a "Game of 3s". Here's how you play it:
First, you pick a random number. Then, repeatedly do the following:
If the number is divisible by 3, divide it by 3.
If it's not, either add 1 or subtract 1 (to make it divisible by 3), then divide it by 3.
The game stops when you reach "1".
Challenge Description
The input is a single number: the number at which the game starts. Write a program that plays
the 3s game, and outputs a valid sequence of steps you need to take to get to 1. Each step should
be output as the number you start at, followed by either -1 or 1 (if you are adding/subtracting 1 before dividing), 
or 0 (if you are just dividing). 
The last line should simply be 1.
Input Description
The input is a single number: the number at which the game starts.
gameOfThree(100);
Output Description
The output is a list of valid steps that must be taken to play the game. 
Each step is represented by the number you start at, followed by either -1 or 1 
(if you are adding/subtracting 1 before dividing), or 0 (if you are just dividing).
The last line should simply be 1.
OUTPUT:
100 -1
33 0
11 1
4 -1
1 */
//-----------------------------------------------------------------------------------------------
// write a function with integer as input which needs to be recursively divided by 3
// create an empty array to store all intermediate results(alternatively console log can be used to
// print the intermediate reults )
// create a temp variable to store the division o/p
// while loop with condition that input integer is >1 do the operation
//check if num divisible by 3 reminder =0 then push to array or print 
// if not num+1 divisible by 3 else if num-1 divisible by 3 , then print accordingly
// assign the num = temp variable for next iteration
// return the array with desired output (alternatively print on console)
//Storing in an array is sometimes good practice for all results and then print at end. 

function gameOfThree(num){
    
    let outputArr = [];
    let numDiv = 0;

    while(num > 1){
        if(num %3 === 0){
            numDiv = num/3;
            outputArr.push([num,0]); 
            console.log(num +" "+ 0);  
        } else if ((num+1) %3 === 0){
            numDiv = (num+1)/3;
            outputArr.push([num,1]);
            console.log(num +" "+ 1); 
        } else if((num-1)%3 === 0){
            numDiv = (num-1)/3;
            outputArr.push([num,-1]);
            console.log(num +" "+ -1); 
        }
        num = numDiv;
    }
    outputArr.push(num); //last entry
    console.log(num); 
    return outputArr;
 }

console.log(gameOfThree(100));

console.log(gameOfThree(27));
