//Wednesday : Title Case a Sentence
//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lowercase.
//For the purpose of this exercise, you should also capitalize on connecting words like "the" and "of".
//For this algorithm, you can use the split() method.
//titleCase("I'm a little tea pot")  // should return a string.
//titleCase("I'm a little tea pot")  // should return "I'm A Little Tea Pot".
//titleCase("sHoRt AnD sToUt")  // should return "Short And Stout".\
//-----------------------------------------------------------------------------------------------
// function with input paramter of string type
// create and array for words from input string split across " "(space). Also make all letters lowercase
// create an empty output array
// for loop through all the words of input array and split them again into invividual letters.
// 1st letter make it capital and push the updated word to output array
// create a variable to join the final output array to string 
// return string

function titleCase(inputStr){
    let input_str_arr = inputStr.toLowerCase().split(" ");
    let output_str_arr = [];

    for(let i = 0; i < input_str_arr.length; i++){
        let word_arr = input_str_arr[i].split("");
        word_arr[0]= word_arr[0].toUpperCase();
        output_str_arr.push(word_arr.join(""));
    } 
    let outputStr = output_str_arr.join(" ");
    return (outputStr);
}
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt")); 