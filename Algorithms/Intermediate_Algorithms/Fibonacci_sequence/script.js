//Friday: Fibonacci Sequence
//A great friend of yours, Fibonacci, just came up with a sequence of numbers that is really easy
// to compute. However, his time allows him to calculate by hand only the first 10-15 terms of the sequence; 
// of course, he is busy trying to come up with some other interesting sequence. 
// So he gives you the first terms and asks you to write an algorithm that will return the n-th term 
// in the sequence.
//His sequence looks like this: 1 1 2 3 5 8 13 21 34 ...
//Immediately you find the pattern: setting the first two terms to be 1, any other term is the sum of the 
// two previous terms.
// 1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13 and so on.
//In this way, if n would be equal to 4 your result should be 3; but if n is 7, then the result is 13.
//
//But these are small numbers, which can be computed by hand. What about bigger numbers? Let's see what 
//results you will get for the following n's:
//
//n = 43 -> x
//n = 101 -> x
//n = 227 -> x
//n = 491 -> x
//n = 881 -> x
//-------------------------------------------------------------------------------------------------------
// function to input integer representing nth element in Fibonacco series.
// create an empty array to store the elements (not required to have an array, but just in case)
// for loop - from index = 0 to index = input integer 
// for 0 and 1 index -  
function fibonacciSeq(n){
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

console.log(fibonacciSeq(2));
console.log(fibonacciSeq(3));
console.log(fibonacciSeq(4));
console.log(fibonacciSeq(5));
console.log(fibonacciSeq(7));
console.log(fibonacciSeq(43));
console.log(fibonacciSeq(101));
console.log(fibonacciSeq(227));
console.log(fibonacciSeq(491));
console.log(fibonacciSeq(881));


