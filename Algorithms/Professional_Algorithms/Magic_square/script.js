//Tuesday: Magic Squares
//A 3x3 magic square is a 3x3 grid of the numbers 1-9 such that each row, column,
//and major diagonal adds up to 15. Here's an example:
//<code>
//8 1 6
//3 5 7
//4 9 2
//</code>
//
//The major diagonals in this example are 8 + 5 + 2 and 6 + 5 + 4.
//Write a function that, given a grid containing the numbers 1-9, 
//determines whether it's a magic square. Use whatever format you want for the grid, 
//such as a 2-dimensional array, or a 1-dimensional array of length 9, or a function that takes 9 arguments.
// You do not need to parse the grid from the program's input, but you can if you want to.
// You don't need to check that each of the 9 numbers appears in the grid: assume this to be true.
//Example inputs/outputs
//<code>[8, 1, 6, 3, 5, 7, 4, 9, 2] => true
//[2, 7, 6, 9, 5, 1, 4, 3, 8] => true
//[3, 5, 7, 8, 1, 6, 4, 9, 2] => false
//[8, 1, 6, 7, 5, 3, 4, 9, 2] => false
//</code><div>
//</div>
//-----------------------------------------------------------------------------------------------------------
// assumed input in 2D array for the function to check if its a magic square
// for loop to interate through rows and colums of the array
// for row iteration check sum of all numbers if rowSum is not 15 then return false and no need to check sum 
// for column and diagonal 
// similarly add individual column numbers and store in variable
// create 2 variables for diagonal sum 
// Check all the sums ..if anyone not equal to 15 return false.
// if all conditions are pass.. then return true ..the array is indeed magical.

// I did create index.html just to have HTML,JS with DOM.. but JS and html will connect next time.
// till then only JS code is also working.

function chkMagicSquare(arr){

    let rowSum = 0;
    let colSum = 0;
    let diagSum1 = 0;
    let diagSum2 = 0;

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j <arr.length; j++){
            //Row sum 
            rowSum += arr[i][j];
            //column sum
            colSum += arr[j][i];
            //Diagonal 1 sum
            if(i == j){
                diagSum1 += arr[i][j];
            }
            //Diagonal 2 sum
            if(Math.abs(i-j) === 2 || (i === 1 && j===1)){
                diagSum2 += arr[i][j];
            }
        }
        console.log("Row"+i+"_SUM" +" "+rowSum);
        if (rowSum != 15) {
            return false;
        } else { 
            rowSum = 0;
        }
        console.log("Col"+i+"_SUM" +" "+colSum);
        if(colSum != 15){
            return false
        } else {
            colSum = 0;
        }
    }
    console.log("Diag1_SUM" +" "+diagSum1);
    console.log("Diag2_SUM" +" "+diagSum2);
    
    if(diagSum1 !== 15) {return false};
    if(diagSum2 !== 15) {return false};
   
    return true;
}

console.log("Array 1 is magic square?  "+chkMagicSquare([[8,1,6],[3,5,7],[4,9,2]]));
console.log("Array 2 is magic square?  "+chkMagicSquare([[2,7,6],[9,5,1],[4,3,8]]));
console.log("Array 3 is magic square?  "+chkMagicSquare([[3,5,7],[8,1,6],[4,9,2]]));
console.log("Array 4 is magic square?  "+chkMagicSquare([[8,1,6],[7,5,3],[4,9,2]]));