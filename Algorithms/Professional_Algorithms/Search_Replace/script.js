/*Wednesday : Search and Replace
Perform a search and replace the sentence using the arguments provided and return the new sentence.
The first argument is the sentence to perform the search and replace on.
The second argument is the word that you will be replacing (before).
The third argument is what you will be replacing the second argument with (after).
NOTE: Preserve the case of the original word when you are replacing it.
For example, if you mean to replace the word "Book" with the word "dog", it should be replaced with "Dog"
function myReplace(str, before, after) {
  return str;
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");*/
//----------------------------------------------------------------------------------------
// This one is tricky , there are so many permutations and combinations possible 
// what is before word is all Uppercase/ all lowercase/TitleCase/Mixed case/ 
// what is length of before and after words does not match.
//
// I tried to replace the before word with after with MIXED case
// with assumption that word length is same.
// if we have just make all words in TitleCase ..algorithm would be different.
/*=================================================================================*/
// define a function to take 3 input parameters
// trim the input string for spaces before and after and then split across space into and array
// for loop to traverse through array
// condition to check the before word in array words
//if matching - loop through length of word 
//match the case of before word ..letter by letter with after word 
// update the array with new word and return joined array as string



function myReplace(str, before, after) {
    let strArr = str.trim().split(" ");

    for(let i=0; i<strArr.length; i++){
        let afterWord =''; 
        if(strArr[i] === before) {
            for(let j=0 ; j<strArr[i].length; j++){
                if(strArr[i][j] === strArr[i][j].toUpperCase()){
                    afterWord += after[j].toUpperCase();
                } else {
                    afterWord += after[j].toLowerCase();
                }
            }
            strArr[i] = afterWord;
        }
    }
  return (strArr.join(" "));
}

console.log(myReplace("A quick brown fox JuMpEd over the lazy dog", "JuMpEd", "leaped"));
console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));
console.log(myReplace("A quick brown fox JUMPED over the lazy dog", "JUMPED", "leaped"));
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));