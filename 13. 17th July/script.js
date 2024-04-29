/* <---------- 1. CLOSURES EXAMPLE IN JAVASCRIPT ----------> */
// CLOSURE IN JAVASCRIPT REFERS TO THE COMBINATION OF A FUNCTION AND THE LEXICAL ENVIRONMENT WITHIN WHICH THAT FUNCTION WAS DECLARED. THIS ALLOWS THE FUNCTION TO RETAIN ACCESS TO VARIABLES FROM ITS CONTAINING SCOPE EVEN AFTER THE CONTAINING SCOPE HAS FINISHED EXECUTING
/* function outerFunction() {
    let outerVariable = "I am from outer function";
    function innerFunction() {
        console.log(outerVariable);
    }
    return innerFunction;
}
let closure = outerFunction();
closure(); */
// IN THIS EXAMPLE, INNER FUNCTION FORMS A CLOSURE OVER THE VARIABLE OUTER VARIABLE, EVEN THOUGH OUTER VARIABLE IS DECLARED IN THE SCOPE OF OUTER FUNCTION. THIS ALLOWS INNER FUNCTION TO ACCESS OUTER VARIABLE EVEN AFTER OUTER FUNCTION HAS FINISHED EXECUTING



/* <---------- 2. TEMPLATE LITERAL EXAMPLE IN JAVASCRIPT ----------> */
// A TEMPLATE LITERAL IS A WAY TO CREATE STRINGS THAT ALLOWS FOR EMBEDDED EXPRESSIONS IT IS DENOTED BY BACKTICKS
/* const firstName = "Dip";
const lastName = "Chatterjee";
const fullName = `Hello I am ${firstName} ${lastName}`;
console.log(fullName); */



/* <---------- 3. 4 PILLARS OF OBJECT ORIENTED PROGRAMMING EXAMPLE IN JAVASCRIPT ----------> */



/* <---------- 4. CONSTRUCTOR FUNCTION EXAMPLE IN JAVASCRIPT ----------> */
/* class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
} */
// CONSTRUCTOR FUNCTION
// THEY USE THIS TO REFER TO THE NEW OBJECT
/* function Person(name, age) {
    this.name = name;
    this.age = age;
    return this;
}
// THEY ARE CALLED WITH NEW KEYWORD
const dip = new Person("Dip", 24);
console.log(dip); */



/* <---------- 5. THIS KEYWORD EXAMPLE IN JAVASCRIPT ----------> */
// EXAMPLE 1
// console.log(this); // THIS POINTS TO GLOBAL OBJECT

// EXAMPLE 2
/* function test() {
    console.log(this); // IT ALSO POINT THE GLOBAL OBJECT
}
test(); */

// EXAMPLE 3
/* const obj = {
    name: "Dip Chatterjee",
    age: 25,
    sayName: function() {
        console.log(this); // IN OBJECT THIS POINTS TO THE OBJ
    }
}
obj.sayName();
const thisValue = obj.sayName;
thisValue(); // IN THIS CASE THIS WILL POINT TO GLOBAL OBJECT */

// EXAMPLE 4
/* this.name = "Window Name";
function sayName() {
    console.log(`Hi My Name Is ${this.name}`);
}
const obj = {
    name: "Dip Chatterjee",
    age: 25,
    sayName: sayName,
}
obj.sayName(); // IT DOESN'T MATTER WHERE THE FUNCTION IS DEFINED HOW WE CALL CALL IN THIS CASE THE OUTPUT WILL BE OBJECT */



/* <---------- 6. CONSTRUCTOR PROPERTY EXAMPLE IN JAVASCRIPT ----------> */
// IN JAVASCRIPT, THE CONSTRUCTOR PROPERTY IS A REFERENCE TO THE CONSTRUCTOR FUNCTION THAT CREATED AN INSTANCE OF AN OBJECT. IT POINTS BACK TO THE FUNCTION THAT WAS USED TO CREATE THE OBJECT. THIS PROPERTY IS AUTOMATICALLY CREATED AND MAINTAINED FOR EVERY OBJECT CREATED USING A CONSTRUCTOR FUNCTION.
/* function Person(name, age) {
    this.name = name;
    this.age = age;
}
let person = new Person("Alice", 30);
console.log(person.constructor === Person); // OUTPUT: true */
// person.constructor REFERS BACK TO THE PERSON CONSTRUCTOR FUNCTION, INDICATING THAT PERSON WAS CREATED USING PERSON AS ITS CONSTRUCTOR.



/* <---------- 7. FACTORIES & FACTORY FUNCTION EXAMPLE IN JAVASCRIPT ----------> */
// EXAMPLE 1 (FACTORY FUNCTION)
/* function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet() {
            console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
        }
    };
}
const person1 = createPerson("Alice", 30);
const person2 = createPerson("Bob", 25);
person1.greet();
person2.greet(); */
// THESE ARE FUNCTIONS THAT RETURN OBJECTS. THEY ENCAPSULATE THE CREATION OF OBJECTS AND ALLOW YOU TO CREATE MULTIPLE INSTANCES WITH SIMILAR PROPERTIES AND METHODS. THEY ARE USEFUL FOR CREATING MULTIPLE OBJECTS WITH THE SAME STRUCTURE.


// EXAMPLE 2 (FACTORIES)
/* function Person(name, age) {
    this.name = name;
    this.age = age;
}
function createPerson(name, age) {
    return new Person(name, age);
}
const person1 = createPerson('Alice', 30);
const person2 = createPerson('Bob', 25);
console.log(person1);
console.log(person2);
// THESE ARE FUNCTIONS OR CLASSES USED TO CREATE OBJECTS. THEY ABSTRACT THE PROCESS OF CREATING OBJECTS AND CAN PROVIDE ADDITIONAL FUNCTIONALITIES LIKE OBJECT CACHING OR CUSTOMIZATION THROUGH PARAMETERS.
console.log(person1 instanceof createPerson); // OUTPUT - false
console.log(person instanceof Person);  // OUTPUT - true  */



/* <---------- 8. DYNAMIC NATURE OF OBJECTS EXAMPLE IN JAVASCRIPT ----------> */
// EXAMPLE 1 (ADDING OR REMOVING PROPERTIES)
/* let person = {
    name: "John",
    age: 30
};
person.gender = "male"; // ADDING A NEW PROPERTY
delete person.age; // REMOVING AN EXISTING PROPERTY */


// EXAMPLE 2 (CHANGING PROPERTY VALUES)
// person.name = "Jane"; // CHANGING THE VALUE OF AN EXISTING PROPERTY


// EXAMPLE 3 (PROTOTYPE CHAIN AND INHERITANCE)
/* function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHello = function () {
    console.log("Hello, my name is " + this.name);
};
let john = new Person("John", 30);
let jane = new Person("Jane", 25);
john.sayHello(); // OUTPUT: Hello, my name is John
jane.sayHello(); // OUTPUT: Hello, my name is Jane
// MODIFYING PROTOTYPE DYNAMICALLY
Person.prototype.sayAge = function () {
    console.log("I am " + this.age + " years old.");
};
john.sayAge(); // OUTPUT: I am 30 years old.
jane.sayAge(); // OUTPUT: I am 25 years old. */



/* <---------- 9. FUNCTIONS & OBJECTS EXAMPLE IN JAVASCRIPT ----------> */
// FUNCTIONS
// EXAMPLE 1 (Declaration)
/* function functionName(parameter1, parameter2) {
    // Function body
} */
// FUNCTIONS CAN BE DECLARED USING THE function KEYWORD FOLLOWED BY A NAME AND A SET OF PARENTHESES FOR PARAMETERS.


// EXAMPLE 2 (ANONYMOUS FUNCTIONS)
/* let anonymousFunction = function (parameter) {
    // Function body
}; */
// FUNCTIONS WITHOUT A NAME ARE CALLED ANONYMOUS FUNCTIONS AND CAN BE ASSIGNED TO VARIABLES OR PASSED AS ARGUMENTS TO OTHER FUNCTIONS.


// EXAMPLE 3 (ARROW FUNCTIONS)
/* let arrowFunction = (parameter) => {
    // Function body
}; */
// INTRODUCED IN ES6, ARROW FUNCTIONS PROVIDE A MORE CONCISE SYNTAX FOR WRITING FUNCTIONS.


// OBJECTS
// EXAMPLE 1 (OBJECT LITERAL)
/* let person = {
    name: "John",
    age: 30,
    city: "New York"
};
// OBJECTS CAN BE CREATED USING THE OBJECT LITERAL NOTATION {} WITH KEY-VALUE PAIRS c


// EXAMPLE 2 (ACCESSING PROPERTIES)
/* console.log(person.name); // OUTPUT: John
console.log(person['age']); // OUTPUT: 30
// OBJECT PROPERTIES CAN BE ACCESSED USING DOT NOTATION OR BRACKET NOTATION c


// EXAMPLE 3 (METHODS)
/* let person = {
    name: "John",
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
person.greet(); // OUTPUT: Hello, my name is John
// FUNCTIONS DEFINED WITHIN AN OBJECT ARE CALLED METHODS */


// EXAMPLE 4 (CONSTRUCTOR FUNCTIONS)
/* function Person(name, age) {
    this.name = name;
    this.age = age;
}
let john = new Person("John", 30);
// CONSTRUCTOR FUNCTIONS CAN BE USED TO CREATE MULTIPLE OBJECTS WITH SIMILAR PROPERTIES AND METHODS */


// EXAMPLE 5 (PROTOTYPES)
/* Person.prototype.greet = function() {
    console.log("Hello, my name is " + this.name);
};
// OBJECTS IN JAVASCRIPT ARE LINKED TO A PROTOTYPE OBJECT FROM WHICH THEY CAN INHERIT PROPERTIES AND METHODS */
