
/*---------------------------------------------------------------------------------------------*/
/*1. Create an object representing a book with properties like title, 
author, and year. Print the book's details to the console.*/

const book = {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    year: 1997
};
console.log("Book Details:", book);

/*---------------------------------------------------------------------------------------------------*/
/*2.Define an object to represent a person with properties like name, age, and gender.
 Create a function that takes a person's object as a parameter and prints a message with their information.*/

 const person = {
    name: "Smith",
    age:27,
    gender: 'Male'
 };

 function personalInfo(info){
    console.log('Name:', info.name);
    console.log('Age:', info.age);
    console.log('Gender:', info.gender);
 };
 personalInfo(person);