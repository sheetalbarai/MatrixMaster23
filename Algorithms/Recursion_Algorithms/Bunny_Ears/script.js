/*We have a number of bunnies and each bunny has two big floppy ears.
 We want to compute the total number of ears across all the bunnies 
 recursively (without loops or multiplication).

function bunnyEars(bunnies) {
  // Base case: if bunnies==0, just return 0.
  if (bunnies == 0) {return 0;}
  // Recursive case: otherwise, make a recursive call with bunnies-1
  // (towards the base case), and fix up what it returns.
  return 2 + bunnyEars(bunnies-1);
}

The result should be :

bunnyEars(0) // should give 0
bunnyEars(1) // should give  2
bunnyEars(2) // should give 4*/
//-----------------------------------------------------------------------------------------

function bunnyEars(bunnies) {
  // Base case: if bunnies==0, just return 0.
  if (bunnies == 0) {return 0;}
  // Recursive case: otherwise, make a recursive call with bunnies-1
  // (towards the base case), and fix up what it returns.
  return 2 + bunnyEars(bunnies-1);
}
console.log(bunnyEars(0));
console.log(bunnyEars(1));
console.log(bunnyEars(2));
console.log(bunnyEars(3));
console.log(bunnyEars(4));