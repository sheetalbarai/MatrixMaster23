//================================================================================
//Exercise 1- Write a function filterRange(arr, a, b) that gets an array arr, 
//looks for elements between a and b in it and returns an array of them.

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
//alert( filtered );  // 3,1 (matching values)
console.log(filtered);
//alert( arr );      // 5,3,8,1 (not modified)
console.log(arr);

function filterRange(arrayIn, a, b) {
    let filteredArray = arrayIn.filter(x => (x>=a && x<=b));
    return filteredArray;
};

//================================================================================
//Exercise 2- You have an array of user objects, each one has user.name.
//Write the code that converts it into an array of names.
let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 } 
let mary = { name: "Mary", age: 28 }
let users = [ john, pete, mary ]

let names = users.map(x => x.name); /* ... your code */

//alert( names ) // John, Pete, Mary
console.log(names);

//================================================================================
//Exercise 3- Write the function getAverageAge(users) that gets an array of objects 
//with property age and gets the average.
//The formula for the average is (age1 + age2 + ... + ageN) / N. For instance:
let john1 = { name: "John", age: 25 }
let pete1 = { name: "Pete", age: 30 }
let mary1 = { name: "Mary", age: 29 }

let arr1 = [ john1, pete1, mary1 ]

//alert( getAverageAge(arr) )   // (25 + 30 + 29) / 3 = 28
console.log(getAverageAge(arr1));

function getAverageAge(arrayIn){

    let arrAvg = arrayIn.reduce((a,x) => (a+x.age),0); //reduce operator with Initial accumulator value of 0 
    arrAvg /= arrayIn.length; // for the average of the array property values.
    return arrAvg;
};
