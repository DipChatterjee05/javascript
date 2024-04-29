/* <---------- 1. HOISTING EXAMPLE IN JAVASCRIPT ----------> */
/* getName();
function getName() {
    console.log("Hello World!");
} */



/* <---------- 2. VAR VS LET VS CONST SCOPE EXAMPLE IN JAVASCRIPT ----------> */
/* console.log(a); // OUTPUT - undefined (BECAUSE VAR IS IN THE GLOBAL SCOPE)
console.log(b); // OUTPUT - Uncaught ReferenceError: Cannot access 'b' before initialization (BECAUSE LET IS IN THE BLOCK SCOPE)
console.log(c); // OUTPUT - Uncaught ReferenceError: Cannot access 'c' before initialization (BECAUSE LET IS IN THE BLOCK SCOPE)
var a = 5;
// LET & CONST INTRODUCED IN 2015 ECMASCRIPT6
let b = 10; // FROM LINE NUMBER 1 TO 14 LET IS IN TEMPORAL DEAD ZONE
const c = 15; // FROM LINE NUMBER 1 TO 15 CONST IS IN TEMPORAL DEAD ZONE */


// LET & CONST ARE BLOCKED SCOPED VARIABLES
/* if(true) {
    let a = 5;
    const b = 3;
}
console.log(a);
console.log(b); // OUTPUT -nUncaught ReferenceError: a is not defined b is not defined */



/* <---------- 3. LEXICAL ENVIRONMENT EXAMPLE IN JAVASCRIPT ----------> */
/* function a() {
    b();
    function b() {
        console.log(x);
    }
}
let x = 10;
a(); // OUTPUT - 10 (BECAUSE FUNCTION B HAS ACCESS OF BOTH FUNCTION A & ALSO THE GLOBAL EXECUTION CONTEXT) */



/* <---------- 4. ARROW FUNCTIONS EXAMPLE IN JAVASCRIPT ----------> */
// 1. SIMPLE ARROW FUNCTION
/* const greet = name => `Hello, ${name}!`;
console.log(greet("Dip")); // OUTPUT - Hello, Dip */


// 2. ARROW FUNCTION WITH MULTIPLE STATEMENT
/* const multiply = (a, b) => {
    const result = a * b;
    return result;
}
console.log(multiply(4, 7)); // OUTPUT - 28


// 3. ARROW FUNCTION IN ARRAY MAPPING
/* const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map( num => num * num);
console.log(squared); // OUTPUT - [1, 4, 9, 16, 25] */


// 4. ARROW FUNCTION WITH DEFAULT PARAMETER
/* const greetPerson = (name = "Dip") => `Hello, {name}!`;
console.log(greetPerson()); // OUTPUT - Hello, Dip! */


// 5. ARROW FUNCTION WITH OBJECT LITERAL
/* const createPerson = (name, age) => ({name, age});
console.log(createPerson("Dip", 25)); // OUTPUT - {name: 'Dip', age: 25} */



/* <---------- 5. DIFFERENCE BETWEEN PARAMETERS & ARGUMENTS IN JAVASCRIPT ----------> */
/* function add(a, b) { // HERE A & B ARE THE PARAMETERS OF THE FUNCTION
    console.log(a + b);
}
add(10, 20); // HERE 10 & 20 ARE THE ARGUMENTS OF THE PARAMETERS */


/* <---------- 6. DEFAULT PARAMETERS EXAMPLE IN JAVASCRIPT ----------> */
/* function add(a = 5, b = 5) { // A & B ARE AS DEFAULT PARAMETERS
    console.log(a + b);
}
add(); // IF WE DON'T PUT VALUES THIS FUNCTION WILL TAKE A & B AS DEFAULT PARAMETERS */



/* <---------- 7. ANONYMOUS FUNCTION & NAMED FUNCTION EXPRESSIONS EXAMPLE IN JAVASCRIPT ----------> */
// 1. ANONYMOUS FUNCTION EXPRESSION
/* let anonymousFunction = function() {
    console.log("This Is An Anonymous Function Expression");
}; 
anonymousFunction(); */
// AN ANONYMOUS FUNCTION IS A FUNCTION WITHOUT A NAME. IT'S OFTEN DEFINED INLINE & CAN BE ASSIGNED TO A VARIABLE


// 2. NAMED FUNCTION EXPRESSION
/* let namedFunction = function myNamedFunction() {
    console.log("This Is An Named Function Expression");
}
namedFunction(); */
// A NAMED FUNCTION EXPRESSION IS A FUNCTION THAT HAS A NAME, BUT THE NAME IS ONLY ACCESSIBLE WITHIN THE FUNCTION ITSELF. THIS CAN BE USEFUL FOR RECURSION OR PROVIDING A HELPFUL IDENTIFIER FOR DEBUGGING PURPOSE

// BOTH ANONYMOUS FUNCTION & NAMED FUNCTION EXPRESSIONS ARE OFTEN USED IN SITUATIONS WHERE YOU NEED TO PASS A FUNCTION AS AN ARGUMENT TO ANOTHER FUNCTION OR ASSIGN IT TO A VARIABLE
