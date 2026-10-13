//========================================================================================
//----------------------------------------------------------------------------------------
// Monday: Largest Number in Arrays
//Return an array consisting of the largest number from each provided sub-array. 
//For simplicity, the provided array will contain exactly 4 sub-arrays.
//Remember, you can iterate through an array with a simple for loop, 
//and access each member with array syntax arr[i].
//function largestOfFour(arr) {
//  // You can do this!
//  return arr;
//}
//largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
////Returns [5,27,39,1001]
//----------------------------------------------------------------------------------------
// function with array as input 
// declare empty array for storing large numbers
// for loop to go through the sub-arrays in array
// use Math.max and spread operator to seperate elements of sub array and find a max value among them
// push the max value to large number array 
// return the new array.

function largestOfFour(arr) {
  let largestArr =[];

  for(let i =0; i < arr.length; i++) {
    let max_num = Math.max(...arr[i]);
    largestArr.push(max_num);
  }
  return largestArr;
}

const inputArr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
console.log(largestOfFour(inputArr));
//Returns [5,27,39,1001]

