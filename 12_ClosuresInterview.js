// <---------- CLOSURES INTERVIEW ---------->
// <---------- 1. EXAMPLE 1 ---------->
/* function x() {
    let a = 5;
    function y() {
        console.log(a);
    }
    y(); // y FORMS A CLOSURE WITH x
}
x(); */


// <---------- 2. EXAMPLE 2 ---------->
/* function x() {
    let a = 5;
    function y() {
        console.log(a);
    }
    return y; // EVEN IF WE RETURN THE FUNCTION WE CAN ACCESS THE FUNCTION ANYWHERE IN THE CODE
}
x()(); // CALLING THE INNER FUNCTION
let z = x(); // z STORE THE y FUNCTION ITSELF
console.log(z); // IF WE LOG IT WE CAN SEE THE WHOLE y FUNCTION
z(); // IF WE CALL THE z IT MEANS WE CALL THE y FUNCTION */


// <---------- 3. EXAMPLE 3 ---------->
/* function x(b) { // IF WE PASS A PARAMETER IT BEHAVE ACTUALLY SAME
    let a = 5;
    function y() {
        console.log(a, b);
    }
    return y;
}
let z = x("Hello World");
z(); */


// <---------- 4. EXAMPLE 4 ---------->
/* function outer() { // IT DOESN'T MATTER HOW MANY FUNCTION IT FORMS A CLOSURE EVERY TIME A FUNCTION IS CREATED
    let a = 5;
    function x(s) {
        let b = 10;
        function y() {
            console.log(a, b, s);
        }
        y();
    }
    x("Hello World");
}
outer(); */


// <---------- 5. EXAMPLE 5 ---------->
/* function outer() {
    let a = 5;
    function x(s) {
        let b = 10;
        function y() {
            console.log(a, b, s);
        }
        return y;
    }
    return x;
}
let a = 100; // IT WONT PRINT 100 BECAUSE IN THE outer FUNCTION a IS 5 IF a IS NOT PRESENT IN THE OUTER FUNCTION THAN 100 WILL PRINT
// IF 100 IS ALSO NOT PRESENT IN THE GLOBAL SCOPE IT GIVES UNCAUGHT REFERENCE ERROR
let close = outer()("Hello World");
close(); */


// <---------- 6. EXAMPLE 6 ---------->
/* function counter() {
    let count = 0;
    return function incrementCounter() {
        count++;
        console.log(count);
    }
}
// console.log(count); // NO ONE CAN ACCESS THE count VARIABLE OUTSIDE (DATA HIDING)
let counter1 = counter();
counter1();
counter1();
let counter2 = counter(); // IT WILL GIVE A FRESH NEW COPY OF COUNTER IT WON'T ANY LINK WITH counter1
counter2(); */


// <---------- 7. EXAMPLE 7 ---------->
/* function Counter() { // CONSTRUCTOR FUNCTION
    let count = 0;
    this.incrementCounter = function() {
        count++;
        console.log(count);
    }
    this.decrementCounter = function() {
        count--;
        console.log(count);
    }
}
let counter1 = new Counter(); // WE CAN ACCESS THE FUNCTION WITH new KEYWORD
counter1.incrementCounter();
counter1.decrementCounter(); */


// <---------- 8. EXAMPLE 8 ---------->
/* function x() {
    let a = 5; // a IS GARBAGE COLLECTED
    let b = 10; // b IS SMARTLY GARBAGE COLLECTED BECAUSE WE DON'T USE b ANYWHERE IN OUR CODE
    return function y() {
        console.log(a);
    }
}
let z = x();
z(); */
