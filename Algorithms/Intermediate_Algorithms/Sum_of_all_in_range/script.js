//Sum All Numbers in a Range
//We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
//
//function sumAll(arr) {
//  // You can do this!
//}
//sumAll([1, 4]);
//The lowest number will not always come first.
//sumAll([1, 4])  // should return a number.
//sumAll([1, 4])  // should return 10.
//sumAll([4, 1])  // should return 10.
//sumAll([5, 10])  // should return 45.
//--------------------------------------------------------------------------------------------
// function with Array as input parameter [ assuming input array has ONLY 2 elements]
// declare variable to accumulate sum of all numbers
// declare variables to know lower and higher numbers from array elements
// ternary operator with condition to check arr[0] and arr[1] which one is smaller
// assign smaller number and higher number from ternary result
// for loop from lower number to higher number and calculate sum
// return sum 

function sumAll(inputArr){
    let sum = 0 ;
    let [lowerNum, higherNum] = (inputArr[0] < inputArr[1])? inputArr: [inputArr[1],inputArr[0]];
    for(let i = lowerNum; i <= higherNum; i++){
        sum += i;
    }
    return sum;
}
console.log(sumAll([1,4]));
console.log(sumAll([4,1]));
console.log(sumAll([5,10]));
console.log(sumAll([10,1]));