// <---------- CLOSURES ---------->
// <---------- 1. EXAMPLE 1 ---------->
/* function x() {
    let a = 5;
    function y() {
        console.log(a); // HERE Y FUNCTION IS CLOSURE OF X FUNCTION
    }
    y();
}
x(); */


// <---------- 2. EXAMPLE 2 ---------->
/* function x() {
    let a = 5;
    function y() {
        console.log(a);
    }
    return y;
}
let z = x(); // THE X FINISHES EXECUTING HERE CLEAR THE CALL STACK
console.log(z); // HERE Z CONTAINS THE WHOLE FUNCTION Y BECAUSE WE RETURN Y FROM X
z(); // IT PRINTS 5 BECAUSE EVAN WE RETURN Y, Y STILL REMEMBER HIS LEXICAL SCOPE Y REMEMBER WHERE THEY WERE ACTUALLY BEFORE
 */


// <---------- 3. EXAMPLE 3 ---------->
/* function x() {
    let a = 5;
    function y() {
        console.log(a);
    }
    a = 10;
    return y;
}
let z = x(); // AFTER X FINISHES EXECUTING THE VALUES NOT GARBAGE COLLECTED BECAUSE WE CAN USE IT LATER
console.log(z);
z(); // IT PRINTS 10 BECAUSE A IS NOT POINTING TO 5 IT REFER TO A MEMORY LOCATION */


// <---------- 4. EXAMPLE 4 ---------->
/* function x() {
    let a = 10;
    function y() {
        let b = 5;
        function z() {
            console.log(a, b); // IT PRINTS THE 10 & 5
        }
        z();
    }
    y();
}
x(); */

/* USES OF CLOSURES:-
1. MODULE DESIGN PATTERN
2. CURRYING
3. FUNCTIONS LIKE ONCE
4. MEMOIZE
5. MAINTAINING STATE IN ASYNC WORLD
6. setTIMEOUTS
7. ITERATORS ETC... */
