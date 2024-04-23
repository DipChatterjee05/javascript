// <---------- HOISTING IN JAVASCRIPT (VARIABLES & FUNCTIONS) ---------->
// <---------- 1. EXAMPLE 1 ---------->
/* var x = 5;
function getName() {
    console.log("Hello, World!");
}
getName();
console.log(x);
// OUTPUT - Hello, World!
// OUTPUT - 5 */


// <---------- 2. EXAMPLE 2 ---------->
/* getName();
console.log(x);
console.log(y);
var x = 5;
let y = 7;
function getName() {
    console.log("Hello, JavaScript!");
}
// OUTPUT - Hello, JavaScript!
// OUTPUT - undefined (var)
// OUTPUT - Uncaught ReferenceError: Cannot access 'y' before initialization */


// <---------- 3. EXAMPLE 3 ---------->
/* console.log(getName); // FULL FUNCTION PRINTED EVEN WE LOG IT BEFORE DECLARATION
function getName() {
    console.log("Hello, JavaScript");
}
/* OUTPUT - ƒ getName() {
    console.log("Hello, JavaScript");
} */


// <---------- 4. EXAMPLE 4 ---------->
/* getName();
function getName() {
    console.log("Hello, JavaScript!");
}
// FOR ONLY A VALID JAVASCRIPT FUNCTION HOISTING WORKS
// OUTPUT - Hello, JavaScript! */


// <---------- 5. EXAMPLE 5 ---------->
/* getName();
let getName = () => {
    console.log("Hello, JavaScript!");
}
// FOR ARROW FUNCTIONS IT'S WONT WORK IT'S GIVES US ERROR
// OUTPUT - Uncaught ReferenceError: Cannot access 'getName' before initialization */


// <---------- 6. EXAMPLE 6 ---------->
/* console.log(x);
console.log(y);
console.log(z);
var x = 5;
let y = 10;
const z = 15;
// OUTPUT - undefined
// OUTPUT - Uncaught ReferenceError: Cannot access 'y' before initialization
// OUTPUT - Uncaught ReferenceError: Cannot access 'z' before initialization */
