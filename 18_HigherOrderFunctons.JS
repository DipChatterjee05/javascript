// <---------- HIGHER-ORDER FUNCTIONS ---------->
// <---------- 1. EXAMPLE 1 ---------->
/* function sayHello() {
    return () => {
        console.log("Hello!");
    }
}
sayHello()(); */


// <---------- 2. EXAMPLE 2 ---------->
// FUNCTION x() IS CALLBACK FUNCTION
/* function x() {
    console.log("Hello");
}
// FUNCTION y() IS HIGHER-ORDER FUNCTION
function y() {
    x();
}
y(); */


// <---------- 3. FUNCTIONAL PROGRAMMING ---------->
/* const radius = [1, 2, 3, 4];

const calculateArea = function(param) {
    const output = [];
    for( let i = 0; i < param.length; i++) {
        output.push(Math.PI * param[i] * param[i]);
    }
    return output;
}
console.log(calculateArea(radius));

const calculateCircumference = function(param) {
    const output = [];
    for( let i = 0; i < param.length; i++) {
        output.push(2 * Math.PI * param[i]);
    }
    return output;
}
console.log(calculateCircumference(radius));

const calculateDiameter = function(param) {
    const output = [];
    for( let i = 0; i < param.length; i++) {
        output.push(2 * param[i]);
    }
    return output;
}
console.log(calculateDiameter(radius)); */
// WE ARE REPEATING LOGIC THIS IS NOT A GOOD CODE
// DRY PRINCIPLE - DON'T REPEAT YOURSELF


// <---------- 4. OPTIMIZING OUR CODE ---------->
/* const radius = [1, 2, 3, 4];
const area = function(param) {
    return Math.PI * param * param;
}
const circumference = function(param) {
    return 2 * Math.PI * param;
}
const diameter = function(param) {
    return 2 * param;
}
const calculate = function(param, logic) {
    const output = [];
    for( let i = 0; i < param.length; i++) {
        output.push(logic(param[i]));
    }
    return output;
}
console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter)); */


// <---------- 5. POLYFILL FOR MAP FUNCTION ---------->
/* const radius = [1, 2, 3, 4];

const area = function(param) {
    return Math.PI * param * param;
}

Array.prototype.calculate = function(logic) {
    const output = [];
    for( let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
}

console.log(radius.map(area)); // MAP FUNCTION
console.log(radius.calculate(area)); // POLYFILL OF MAP FUNCTION */
