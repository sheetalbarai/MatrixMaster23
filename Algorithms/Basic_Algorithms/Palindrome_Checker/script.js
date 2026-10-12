//Thursday: Palindrome Checker
//Declare a function isPalindrome(str) that takes a string as an input.
//Return true if the given string is a palindrome. Otherwise, return false.
//A palindrome is a word or sentence that's spelled the same way both forward
//and backward, ignoring punctuation, case, and spacing.
//-----------------------------------------------------------------------------
// write a function which takes string as a input (word or whole string with case,
// puncuations and spaceing )
// create input array to accumilate the split of each and every letter of the input string with , ;? etc delimiters
// Join the array elements and change them to all lower case. 
// create a revStr 
function isPalindrome(str){
    let inputStr_arr = str.split(/[,;.?\s+]/);
    let inputStr = inputStr_arr.join("").toLowerCase();

    let revStr_arr = [];
    
    for(let i of inputStr){
        revStr_arr.unshift(i);
    }
    let revStr = revStr_arr.join("");

    if(inputStr === revStr){
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome('WhAT'));
console.log(isPalindrome('Eva, can I see bees in a cave?'))
