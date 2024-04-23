// <---------- BLOCK SCOPE & SHADOWING ---------->
// <---------- 1. BLOCKS IN JAVASCRIPT ---------->
/* if (true) {
    // Blocks
    // Compound Statement
    var a = 5;
    console.log(a);
} */


// <---------- 2. BLOCK SCOPE IN JAVASCRIPT ---------->
/* {
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
} */


// <---------- 3. SHADOWING IN JAVASCRIPT ---------->
// <---------- EXAMPLE 1 ---------->
/* let b = 100;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(b);
// OUTPUT - 20 IS SHADOWED BY 100 */

// <---------- EXAMPLE 2 ---------->
/* const c = 100;
function x() {
    const c = 30;
    console.log(c);
}
x();
console.log(c);
// OUTPUT - 30 
// OUTPUT - 100 */


// <---------- 4. ILLEGAL SHADOWING IN JAVASCRIPT ---------->
// <---------- EXAMPLE 1 ---------->
/* let a = 100;
{
    var a = 10;
}
// Uncaught SyntaxError: Identifier 'a' has already been declared */

// <---------- EXAMPLE 2 ---------->
/* var a = 100;
{
    let a = 10;
}
// VALID JAVASCRIPT */

// <---------- EXAMPLE 3 ---------->
/* let a = 100;
function x() {
    var a = 20;
}
// VALID JAVASCRIPT */


// <---------- 5. LEXICAL BLOCK SCOPE IN JAVASCRIPT ---------->
/* const a = 100;
{
    const a = 200;
    {
        const a = 300;
        console.log(a);
    }
}
// OUTPUT - 300 */
