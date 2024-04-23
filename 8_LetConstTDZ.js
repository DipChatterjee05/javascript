// <---------- LET & CONST IN JAVASCRIPT, TEMPORAL DEAD ZONE ---------->
// <---------- 1. TEMPORAL DEAD ZONE ---------->
/* console.log(a);
let a = 55;
// 'a' IS IN THE TEMPORAL DEAD ZONE FOR THE TIME BEING (ANYTHING BEFORE THIS LINE IS IN TDZ)
// OUTPUT - Uncaught ReferenceError: Cannot access 'a' before initialization */


// <---------- 2. REFERENCE ERROR ---------->
// <---------- EXAMPLE 1 ---------->
/* console.log(a);
let a = 55;
// OUTPUT - Uncaught ReferenceError: Cannot access 'a' before initialization */

// <---------- EXAMPLE 2 ---------->
/* console.log(x);
let a = 55;
// OUTPUT - Uncaught ReferenceError: x is not defined */


// <---------- 3. SYNTAX ERROR ---------->
// <---------- EXAMPLE 1 ---------->
/* let a = 10;
let a = 100;
// OUTPUT - Uncaught SyntaxError: Identifier 'a' has already been declared */

// <---------- EXAMPLE 2 ---------->
/* const a;
a = 1000;
// OUTPUT - Uncaught SyntaxError: Missing initializer in const declaration */

// <---------- EXAMPLE 3 ---------->
/* const a;
// OUTPUT - Uncaught SyntaxError: Missing initializer in const declaration */


// <---------- 4. TYPE ERROR ---------->
/* const a = 100;
a = 1000;
// OUTPUT - Uncaught TypeError: Assignment to constant variable */
