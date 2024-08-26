/* <---------- 1. REVISION (TYPE COERCION) ----------> */
// EXAMPLE 1
/* const a = "23";
const b = 23;
const c = a + b; // STRING + NUMBER = STRING
console.log(c); // OUTPUT - 2323 */


// EXAMPLE 2
/* const a = 23;
const b = "23";
const c = a + b; // NUMBER + STRING = STRING
console.log(c); // OUTPUT - 2323 */


// EXAMPLE 3
/* const x = "23";
console.log(typeof +x); // IF A STRING IS NUMBER THAN USING UNARY OPERATOR IT'S CONVERT INTO NUMBER
// OUTPUT - 23 */


// EXAMPLE 4
/* const y = "Hello";
console.log(+y); // IF WE CONVERT A ACTUAL STRING LITERAL INTO NUMBER IT'S GIVES US NaN
// OUTPUT - NaN (IT'S A ACTUAL NUMBER)
console.log(NaN + 1); // WE CAN'T MAKE OPERATIONS ON NaN ALTHOUGH IT'S A NUMBER */



/* <---------- 2. REVISION (ARRAYS) ----------> */
// EXAMPLE 1
/* const arr = ["v", "w", "x", "y", "z"];
console.log(arr[0]); // WE CAN ACCESS THE ARRAY USING INDEX []
console.log(arr.length); // WE CAN ACCESS THE LENGTH OF THE ARRAY */


// EXAMPLE 2
/* const arr = ["v", "w", "x", "y", "z"];
arr.push("a"); // WE CAN ADD THE LAST ELEMENT USING push() OPERATION
console.log(arr);
arr.pop(); // WE CAN REMOVE THE LAST ELEMENT USING pop() OPERATION
console.log(arr);
arr.shift(); // WE CAN REMOVE THE FIRST ELEMENT USING shift() OPERATION
console.log(arr);
arr.unshift("u");
console.log(arr);  */



/* <---------- 3. REVISION (FUNCTIONS) ----------> */
// FUNCTION DECLARATION/STATEMENT
/* function sayHi() {
    console.log("Hi My Name Is Dip");
}
sayHi();

// FUNCTION EXPRESSION
let hello = function() {
    console.log("Hi My Name Is Dip");
}
hello();

// ARROW FUNCTION
let myName = () => {
    console.log("Hi My Name Is Dip");
}
myName();

// SINGLE PARAMETER ARROW FUNCTION
let test = param => console.log(param);
test("Dip");

// MULTIPLE PARAMETER ARROW FUNCTION
let test2 = (param1, param2) => {
    console.log(param1 + param2);
}
test2(22, 33); */



/* <---------- 4. REVISION (parseInt & parseFloat) ----------> */
/* const a = "23.66";
console.log(parseInt(a)); // CONVERTS A STRING TO AN INTEGER
console.log(parseFloat(a)); // CONVERTS A STRING TO A FLOATING-POINT NUMBER */



/* <---------- 5. REVISION (BITWISE OPERATOR) ----------> */
/* const a = 2;
const b = 1;
console.log(a & b); // OUTPUT - 0
console.log(a | b); // OUTPUT - 3
console.log(a && b); // OUTPUT - 1
console.log(a || b); // OUTPUT - 2 */



/* <---------- 6. REVISION (LOGICAL OPERATOR) ----------> */
/* const a = 1;
const b = 2;
console.log(a && b); // OUTPUT - 2
console.log(a || b); // OUTPUT - 1 */



/* <---------- 7. REVISION (SHOT CIRCUIT EVALUATION) ----------> */
// LOGICAL AND (&&)
/* let x = 5;
let y = 10;
if (x > 0 && y > 0) {
    console.log("Both x and y are greater than 0");
} */

// LOGICAL OR (||)
/* let a = 0;
let b = 20;
if (a === 0 || b === 20) {
    console.log("Either a is 0 or b is 20.");
} */

// EXAMPLE 1
/* let name = "Dip";
let isEighteen = true; 
let noOfDrinks = 0;
function serveDrinks() {
    noOfDrinks = noOfDrinks + 1;
    return true;
}
let isAllowedToDrink = isEighteen && serveDrinks();
console.log(isAllowedToDrink); */

// EXAMPLE 2
/* let store1 = () => {
    return false;
    console.log("store");
};
let store2 = () => {
    return true;
};
let store = store1() || store2();
console.log(store); */

// EXAMPLE 3
/* let a = 3;
let b = false;
console.log(a && b); // OUTPUT - false */



/* <---------- 8. REVISION (TERNARY OPERATOR) ----------> */
// EXAMPLE 1
/* let a = 2;
let b = 1;
console.log(a > b ? "a is greater" : "b is greater"); */



/* <---------- 9. REVISION (HOISTING) ----------> */
// EXAMPLE 1
/* test2();
test();
console.log(a);
console.log(b);
console.log(c);
var a = 5;
let b = 5;
const c = 5;
function test() {
    console.log("Hello!");
};
const test2 = () => {
    console.log("Hello!");
}; */



/* <---------- 10. ES6 THIS KEYWORD EXAMPLE IN JAVASCRIPT ----------> */
// EXAMPLE 1
/* this.name = "Window Name";
function sayName() {
    console.log(`Hi My Name Is ${this.name}`);
}
const obj = {
    name: "Dip Chatterjee",
    age: 25,
    sayName: sayName,
}
obj.sayName(); // Hi My Name Is Dip Chatterjee
sayName(); // Hi My Name Is Window Name */



/* <---------- 11. CALL, APPLY & BIND EXAMPLE IN JAVASCRIPT ----------> */
// EXAMPLE 1
/* const person = {
    firstName: "Dip",
    lastName: "Chatterjee",
}
const person2 = {
    firstName: "Indira",
    lastName: "Banerjee",
}
function printFullName(homeTown, state) {
    console.log(this.firstName + " " + this.lastName + " From " + homeTown + " " + state);
}
// BIND EXAMPLE
// WE CAN'T DIRECTLY CALL THE BIND METHOD RATHER THAN IT STORE IN VARIABLE & LATER WE CAN CALL IT
let printNameDip = printFullName.bind(person, "Raghunathpur,", "West Bengal");
let printNameIndira = printFullName.bind(person2, "Arambagh,", "West Bengal");
printNameDip();
printNameIndira();

// CALL EXAMPLE
printFullName.call(person, "Raghunathpur,", "West Bengal");
printFullName.call(person2, "Arambagh,", "West Bengal");

// APPLY EXAMPLE
// WE PASS THE SECOND ARGUMENT AS ARRAY LIST
printFullName.apply(person, ["Raghunathpur,", "West Bengal"]);
printFullName.apply(person2, ["Arambagh,", "West Bengal"]); */



/* <---------- 12. AVOID EXTENDING BUILT-IN OBJECTS EXAMPLE IN JAVASCRIPT ----------> */
// BAD PRACTICE: EXTENDING BUILT-IN OBJECTS
// THIS IS KNOWN AS MONKEY PATCHING
// EXTENDING THE ARRAY PROTOTYPE (NOT RECOMMENDED)
/* Array.prototype.first = function() {
    return this[0];
};
const arr = [1, 2, 3];
console.log(arr.first()); // OUTPUT - 1
// THIS CAN CAUSE CONFLICTS IF ANOTHER LIBRARY ALSO ADDS A 'first' METHOD TO ARRAY */


// GOOD PRACTICE: CREATING UTILITY FUNCTIONS
// UTILITY FUNCTION APPROACH
/* function getFirstElement(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("Input must be an array");
    }
    return arr[0];
}
const arr = [1, 2, 3];
console.log(getFirstElement(arr)); // OUTPUT - 1

// UTILITY CLASS APPROACH
class ArrayUtils {
    static getFirst(arr) {
        if (!Array.isArray(arr)) {
            throw new TypeError("Input must be an array");
        }
        return arr[0];
    }
}
console.log(ArrayUtils.getFirst(arr)); // OUTPUT - 1 */



/* <---------- 13. hasOwnProperty EXAMPLE IN JAVASCRIPT ----------> */
/* const arr = [1, 2, 3];
console.log(arr.hasOwnProperty("test")); // TO CHECK IS THE PROPERTY AVAILABLE IN THE ARRAY OR NOT
console.log(arr.hasOwnProperty("length")); // GIVING OUTPUT IN BOOLEAN */



/* <---------- 14. ITERATING INSTANCE & PROTOTYPE MEMBERS EXAMPLE IN JAVASCRIPT ----------> */
/* function Person(name, age) {
    this.name = name;
    this.age = age;
}
// ADDING A METHOD TO THE PROTOTYPE
Person.prototype.greet = function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old`;
};
// CREATING AN INSTANCE
const person1 = new Person("Alice", 30);
// ACCESSING PROPERTIES & METHODS
console.log(person1.name); // Alice
console.log(person1.age); // 30
console.log(person1.greet()); // Hello, my name is Alice and I am 30 years old

console.log(Object.getPrototypeOf(person1)); // { greet: ƒ }
console.log(person1.__proto__ === Person.prototype); // true */



/* <---------- 15. ES6 CLASSES EXAMPLE IN JAVASCRIPT ----------> */
// ES6 CLASS BASED COMPONENT
/* class Person {
    constructor(name) {
        this.name = name;
    };
    sayHello() {
        console.log(`Hello ${this.name}`);
    }
}; */

// CLASSES ARE CONSTRUCTOR FUNCTION IN JAVASCRIPT
/* const Person = function(name) {
    this.name = name;
}
Person.prototype.sayHello = function () {
    console.log(`Hello ${this.name}`);
} */
