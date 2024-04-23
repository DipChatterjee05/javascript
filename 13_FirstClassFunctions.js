// <---------- FIRST CLASS FUNCTIONS ---------->
// <---------- 1. FUNCTION STATEMENT ---------->
/* function x() {
    console.log("x Called");
}
x();
// FUNCTION STATEMENTS IS ALSO KNOWN AS FUNCTION DECLARATIONS */


// <---------- 2. FUNCTION EXPRESSION ---------->
/* let a = function() {
    console.log("a Called");
}
a();
// NORMAL FUNCTION EXPRESSION OR ANONYMOUS FUNCTION TO CREATE A FUNCTION EXPRESSION */


// <---------- 3. ANONYMOUS FUNCTION ---------->
// USED IN A PLACE WHERE FUNCTION ARE TREATED AS VALUES
/* function() {

}
// Uncaught SyntaxError: Function statements require a function name
// ANONYMOUS FUNCTION USED IN FUNCTION EXPRESSION */


// <---------- 4. NAMED FUNCTION EXPRESSION ---------->
/* let b = function x() {
    console.log("Hello", x);
}
b();
// IF WE CALL FUNCTION x() IT'S GIVES US UNCAUGHT REFERENCE ERROR: x IS NOT DEFINED
// WE CAN ONLY ACCESS FUNCTION x() INSIDE THE FUNCTION x() */


// <---------- 5. DIFFERENCE BETWEEN PARAMETERS AND ARGUMENTS ---------->
/* function x(param1, param2) { // PARAMETERS
    return param1 + param2;
}
console.log(x(22, 43)); // ARGUMENTS */


// <---------- 6. FIRST CLASS FUNCTIONS ---------->
// USED AS VALUES:-
/* let a = function() {
    console.log("Hello World");
}
a(); */

// CAN BE PASSED AS ARGUMENTS
// EXAMPLE 1
/* function x(param) {
    console.log(param);
}
x(function() {
    console.log("Hello");
}); */

// EXAMPLE 2
/* function x(param) {
    console.log(param);
}
function y() {
    console.log("Hello");
}
x(y); */

// FUNCTIONS CAN BE RETURNED FROM A FUNCTION
/* function x() {
    return function() {
        console.log("Hello");
    }
}
console.log(x()); */

// FIRST CLASS FUNCTIONS ARE KNOWN AS FIRST CLASS CITIZENS
