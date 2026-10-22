
//---------------------------------------------------------------
// Exercise - 1 Classes
/*Create a class called `Person` with the following properties and methods:
1 - Properties:
 `name` (string)
 `age` (number)
2 - Methods:
 `introduce()`: This method should return a string introducing the person, 
 for example: "Hi, my name is John and I am 25 years old." */
//---------------------------------------------------------------
//create a class with name , age as properties
class Person {
    constructor(name,age){
        this.name = name;
        this.age = Number(age);
    }
    // method in class
    introduce(){
        return `Hi, my name is ${this.name} and I am ${this.age} years old`;
    }
}

//---------------------------------------------------------------
// Exercise - 2 This
/*Create a new object using the `Person` class you defined in Exercise 1.
Name the object `person1` and set the `name` and `age` properties accordingly.
Then, create a function called `describePerson` that takes a callback function as an
argument. Inside the `describePerson` function, call the callback function with
`person1` as the `this` context.*/
//---------------------------------------------------------------
//create a new object of the class declared above
const person1 = new Person('John','25');

function decscribePerson(callback){
    return callback.call(person1);
}
//---------------------------------------------------------------
// Exercise - 3 Promises
/*Write a function called `wait` that takes a number as an argument 
(representing milliseconds) and returns a Promise. The Promise should 
resolve after the given number of milliseconds, using `setTimeout`.
The resolved value can be anything you choose.*/
//---------------------------------------------------------------
function wait(time_in_ms){
    return new Promise((resolve) => {
        setTimeout(()=> resolve(`waited ${time_in_ms} ms`),time_in_ms);
    }); 
};
//---------------------------------------------------------------
// Exercise - 4 Together
/*Create an HTML file and a corresponding JavaScript file to complete the assignment.
 Implement the tasks in the JavaScript file and include it in the HTML file using the
`<script>` tag. Test your code thoroughly, ensuring that each task is working
 correctly. Save both files and submit them together.*/
//---------------------------------------------------------------

console.log(person1.introduce());

decscribePerson(function(){
    console.log(this.introduce());
});

// The code written not quite clear for me yet. Wrote it with help of AI.
//i am sure its simple but somehow not able to map how things are executed in order.

wait(2000)
.then(() =>{
    document.getElementById('intro').textContent = person1.introduce();
    return wait(2000);
})

.then(()=>{
    document.getElementById('describe').textContent = decscribePerson(function() {
        return this.introduce();
    });
})

