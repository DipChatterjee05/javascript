/* <---------- 1. SOME EXAMPLES OF FIRST-CLASS-FUNCTIONS ----------> */
// EXAMPLE 1

// ASSIGNING A FUNCTION TO A VARIABLE
/* const greet = function(name) {
    return "Hello, " + name;
}
// PASSING A FUNCTION AS AN ARGUMENT
function executeFunction(param1, param2) {
    return param1(param2);
}
console.log(executeFunction(greet, "Dip"));
// RETURNING A FUNCTION FROM ANOTHER FUNCTION
function multiplier(param1) {
    return function(x) {
        console.log(x * param1);
    };
}
const double = multiplier(2);
double(5); */


// EXAMPLE 2

// FUNCTION THATS ADD TWO NUMBER
/* function add(x, y) {
    return x + y;
}
// ASSIGNING A FUNCTION TO A VARIABLE
const sum = add;
// PASSING A FUNCTION AS AN ARGUMENT
function performOperation(params, a, b ) {
    return params(a, b);
}
// USING THE performOperation() FUNCTION & PASSING SUM AS AN ARGUMENT
const result = performOperation(sum, 5, 5);
console.log(result); */


// EXAMPLE 3

// FUNCTION AS AN ARGUMENT
/* function a(test) {
    test();
}
a(() => {
    console.log("Hello");
}) */

// FUNCTION AS AN ARGUMENT
/* function b(test) {
    test();
}
function c() {
    console.log("Hello");
}
b(c); */


// EXAMPLE 4

// RETURN A FUNCTION FROM ANOTHER FUNCTION
/* function robot(instruction) {
    let action = null;
    switch (instruction) {
        case 1:
            action = function() {
                console.log("Welcome");
            }
        break;
        case 2:
            action = function() {
                console.log("Good Bye");
            }
        break;
    }
    return action;
}
function door() {
    let fun = robot(2);
    fun();
}
door(); */



/* <---------- 2. SOME EXAMPLE OF HIGHER ORDER FUNCTION ----------> */
// EXAMPLE 1
/* const radius = [3, 1, 2, 4];
const area = function (radius) {
    return Math.PI * radius * radius;
}
const circumference = function (radius) {
    return 2 * Math.PI * radius;
}
const diameter = function(radius) {
    return 2 * radius;
}
const calculate = function (radius, logic) {
    const output = [];
    for(let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
}
console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter)); */


// EXAMPLE 2
/* const numbers = [1, 2, 3, 4, 5];

// MAP - SQUARING EACH NUMBER
const squared = numbers.map(function(num) {
    return num * num;
});
console.log("Squared Numbers:", squared);

// FILTER - KEEPING ONLY EVEN NUMBERS
const evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log("Even Numbers:", evenNumbers);

// REDUCE - CALCULATING THE SUM
const sum = numbers.reduce(function(accumulator, current) {
    return accumulator + current;
}, 0);
console.log("Sum", sum); */
