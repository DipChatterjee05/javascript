/* <---------- 1. GETTERS & SETTERS EXAMPLE IN JAVASCRIPT ----------> */
// EXAMPLE 1
/* let person = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
        let parts = name.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
console.log(person.fullName); // OUTPUT - John Doe
person.fullName = "Jane Smith";
console.log(person.firstName); // OUTPUT - Jane
console.log(person.lastName); // OUTPUT - Smith
console.log(person.fullName); // OUTPUT - Jane Smith */
// IN THIS EXAMPLE, fullName IS A GETTER/SETTER PAIR. WHEN YOU ACCESS person.fullName, THE GETTER FUNCTION IS CALLED, WHICH RETURNS THE CONCATENATED FIRST NAME AND LAST NAME. WHEN YOU SET person.fullName, THE SETTER FUNCTION SPLITS THE FULL NAME INTO PARTS AND ASSIGNS THEM TO THE firstName & lastName PROPERTIES


// EXAMPLE 2
/* function Person(name, age) {
    this.name = name,
    this.age = age;
    // STATIC METHOD
    this.randomNumberStatic = Math.random();
    // DYNAMIC METHOD
    Object.defineProperty(this, "randomNumberDynamic", {
        // GETTER FUNCTION
        get: function() {
            return Math.random();
        },
    });
    return this;
};
// IT'S NOT DYNAMIC IT'S STATIC IT CAN'T CHANGE
const number = new Person();
console.log(number.randomNumberStatic, "Static");
console.log(number.randomNumberStatic, "Static");
// BUT IT'S DYNAMIC IT UPDATE DYNAMICALLY
const number2 = new Person();
console.log(number2.randomNumberDynamic, "Dynamic");
console.log(number2.randomNumberDynamic, "Dynamic"); */


// EXAMPLE 3
/* function Person(name, age) {
    this.name = name;
    let _age = age; // STORE AGE IN A PRIVATE VARIABLE
    Object.defineProperty(this, "age", {
        // GETTER FOR AGE
        get: function () {
            return _age;
        },
        // SETTER FOR AGE
        set: function (value) {
            if (typeof value === 'number' && value >= 0) {
                _age = value;
            } else {
                console.error("Age must be a non-negative number.");
            }
        }
    });
    return this;
};
const john = new Person("John", 25);
console.log(john.age); // ACCESS AGE USING GETTER
john.age = 30; // SET AGE USING SETTER
console.log(john.age); // ACCESS AGE USING GETTER */


/* <---------- 2. DATE FUNCTION EXAMPLE IN JAVASCRIPT ----------> */
// EXAMPLE 1
/* let currentDate = new Date();
console.log(currentDate); */


// EXAMPLE 2
/* let currentDate = new Date();
console.log(currentDate.getDate()); // GETS THE DAY-OF-THE-MONTH, USING LOCAL TIME
console.log(currentDate.getMonth()); // GETS THE MONTH, USING LOCAL TIME
console.log(currentDate.getFullYear()); // GETS THE YEAR, USING LOCAL TIME */



/* <---------- 3. PRIVATE PROPERTIES & METHODS EXAMPLE IN JAVASCRIPT ----------> */
// EXAMPLE 1
/* function createCounter() {
    let count = 0; // PRIVATE PROPERTY
    function increment() { // PRIVATE METHOD
        count++;
        console.log(count);
    }
    return {
        increment: increment
    };
}
let counter = createCounter();
counter.increment(); // OUTPUT: 1
counter.increment(); // OUTPUT: 2 */
// IN THIS EXAMPLE, count IS A PRIVATE PROPERTY, AND increment IS A PRIVATE METHOD. THEY ARE ACCESSIBLE ONLY WITHIN THE createCounter FUNCTION DUE TO CLOSURE. OUTSIDE THE FUNCTION, YOU CAN ONLY INTERACT WITH THEM VIA THE RETURNED OBJECT


// EXAMPLE 2
/* const privateProps = new WeakMap();
class Counter {
    constructor() {
        privateProps.set(this, { count: 0 }); // PRIVATE PROPERTY
    }
    increment() {
        const props = privateProps.get(this);
        props.count++;
        console.log(props.count);
    }
}
let counter = new Counter();
counter.increment(); // OUTPUT: 1
counter.increment(); // OUTPUT: 2 */
// IN THIS EXAMPLE, privateProps IS A WeakMap THAT HOLDS PRIVATE PROPERTIES FOR INSTANCES OF THE Counter CLASS. THE count PROPERTY IS ACCESSIBLE ONLY WITHIN THE CLASS METHODS AND NOT FROM OUTSIDE



/* <---------- 4. ABSTRACTION EXAMPLE IN JAVASCRIPT ----------> */
// EXAMPLE 1 (FUNCTIONS)
/* function add(a, b) {
    return a + b;
} */
// FUNCTIONS ENCAPSULATE A BLOCK OF CODE AND CAN BE USED TO ABSTRACT AWAY THE IMPLEMENTATION DETAILS. BY DEFINING FUNCTIONS WITH CLEAR INPUTS AND OUTPUTS, YOU HIDE THE INTERNAL WORKINGS OF THE CODE


// EXAMPLE 2 (OBJECTS)
/* let car = {
    make: "Toyota",
    model: "Camry",
    start: function() {
        // IMPLEMENTATION DETAILS HIDDEN
    },
    stop: function() {
        // IMPLEMENTATION DETAILS HIDDEN
    }
}; */
// OBJECTS ENCAPSULATE BOTH DATA AND BEHAVIOR. YOU CAN EXPOSE ONLY THE NECESSARY METHODS OR PROPERTIES, HIDING THE INTERNAL STATE AND IMPLEMENTATION DETAILS


// EXAMPLE 3 (CLASSES)
/* class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        // IMPLEMENTATION DETAILS HIDDEN
    }
}
let dog = new Animal("Dog");
dog.speak(); */
// WITH ES6, JAVASCRIPT INTRODUCED CLASS SYNTAX, ALLOWING FOR MORE STRUCTURED AND OBJECT-ORIENTED PROGRAMMING. CLASSES PROVIDE A BLUEPRINT FOR CREATING OBJECTS WITH PREDEFINED PROPERTIES AND METHODS, WHICH CAN HELP IN ABSTRACTING AWAY COMPLEXITY


// EXAMPLE 4 (MODULES)
// math.js
/* export function add(a, b) {
    return a + b;
}

// main.js
import { add } from "./math.js";
console.log(add(2, 3)); // OUTPUT - 5 */
// JAVASCRIPT MODULES ALLOW YOU TO ORGANIZE CODE INTO SEPARATE FILES OR MODULES. BY EXPORTING ONLY THE NECESSARY FUNCTIONS OR VARIABLES, YOU CAN ABSTRACT AWAY THE INTERNAL IMPLEMENTATION FROM THE REST OF THE APPLICATION
