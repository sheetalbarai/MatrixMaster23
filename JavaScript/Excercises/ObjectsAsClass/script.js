
/*---------------------------------------------------------------------------------------------*/
/*1. Create an object that simulates a class representing a car with properties 
like make, model, and year. Add a method to start the car..*/

const car = {
   make: "Honda",
   model:'City',
   year:2018,
   start() {
      console.log(`The ${this.make} ${this.model} is starting.`);
   }
};
/*---------------------------------------------------------------------------------------------------*/
/*2. Extend the previous car class object with a method to drive the car. 
Print a message when you start and drive the car instance.*/

car.drive = function(){
   console.log(`The ${this.make} ${this.model} is driving.`);
};

car.start();
car.drive();