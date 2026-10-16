/*Friday: r Triangle
We have a triangle made of blocks. The topmost row has 1 block, the next row down has 2 blocks,
the next row has 3 blocks, and so on. Compute recursively (no loops or multiplication) the total 
number of blocks in such a triangle with the given number of rows.

var rTriangle = function(rows){
  if (rows === 0) {
    return 0; 
  } else{
    return rows + rTriangle(rows-1)
   }
 }

The results should be :
triangle(0) // should give 0
triangle(1) // should give 1
triangle(2) // should give 3*/
//-----------------------------------------------------------------------------------------------


var rTriangle = function(rows){
  if (rows === 0) {
    return 0; 
  } else{
    return rows + rTriangle(rows-1)
   }
}

console.log(rTriangle(0));
console.log(rTriangle(1));
console.log(rTriangle(2));
console.log(rTriangle(3));
console.log(rTriangle(4));