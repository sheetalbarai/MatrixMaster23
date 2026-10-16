/*Wednesday: Power N
First solve this algorithm iteratively, then recursively.
Given base and n that are both 1 or more, 
compute recursively (no loops) the value of base to the n power, so powerN(3, 2) is 9 (3 squared).
function power(base, exponent) {
  if (exponent == 0)
    return 1;
  else
    return base * power(base, exponent - 1);
}
The results should be :

powerN(3, 1) // should give 3
powerN(3, 2) // should give 9
powerN(3, 3) // should give 27*/
//---------------------------------------------------------------------------------------------

//recursive
function rPowerN(base, exponent) {
  if (exponent == 0)
    return 1;
  else
    return base * rPowerN(base, exponent - 1);
}
//Iterative
function iPower(x,n){
  let result = 1;
  for(let i = 0; i<n; i++){
    result*=x;
  }
  return result;
}

console.log("Recursive way power(3,3) = ", rPowerN(3,3));
console.log("Iterative way power(3,2) = ", iPower(3,2));