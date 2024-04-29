/* <---------- SOME MORE THIS KEYWORD EXAMPLES IN JAVASCRIPT ----------> */
// EXAMPLE 1
// DEFINE AN OBJECT
/* const person = {
    name: "John",
    age: 30,
    greet: function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }
};
// CALL THE GREET METHOD
person.greet(); // OUTPUT: Hello, my name is John and I am 30 years old
// CREATE ANOTHER OBJECT
const anotherPerson = {
    name: "Alice",
    age: 25
};
// CALL THE GREET METHOD FROM THE FIRST OBJECT, BUT USING call() TO SPECIFY 'anotherPerson' AS THE CONTEXT
person.greet.call(anotherPerson); // OUTPUT: Hello, my name is Alice and I am 25 years old */


// EXAMPLE 2
// DEFINE A CONSTRUCTOR FUNCTION FOR A CAR
/* function Car(make, model) {
    this.make = make;
    this.model = model;
    this.getInfo = function () {
        return `Make: ${this.make}, Model: ${this.model}`;
    };
}
// CREATE A NEW CAR OBJECT
const myCar = new Car("Toyota", "Camry");
// CALL THE getInfo METHOD
console.log(myCar.getInfo()); // OUTPUT: Make: Toyota, Model: Camry */
