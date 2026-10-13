//Tuesday: Find the longest Word in a String
//Return the length of the longest word in the provided sentence.
//Your response should be a number. For these algorithms, you are allowed to use the split() method.
//findLongestWord("The quick brown fox jumped over the lazy dog")  // should return a number.
//findLongestWord("The quick brown fox jumped over the lazy dog"). // should return 6.
//findLongestWord("May the force be with you")  // should return 5.
//-------------------------------------------------------------------------------
// Function with string as input
// create an array and split the input string across spaces(" ")
// declare a variable to store the length of longest word
// for loop to traverse through each element in array
// if condition to check if longest word length is < array element then update accordingly
// return the length

function findLongestWord(inputStr){
    let input_str_array = inputStr.split(" ");
    let longestWordLength = 0;

    for(let i = 0; i < input_str_array.length; i++){
        if(longestWordLength < input_str_array[i].length){
            longestWordLength = input_str_array[i].length;
        }
    }
    return longestWordLength;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("May the force be with you"));
console.log(findLongestWord("HTML or hypertext markup language is a markup language used to create the frontend of websites"));