/* <---------- 1. TRY CATCH EXAMPLE IN JAVASCRIPT ----------> */
// EXAMPLE 1
/* try {
    const obj = {};
    obj.test.name;
} catch (error) {
    console.error(error.message); // CONSOLE.ERROR(); TO PRINT THE ERROR
} finally {
    console.log("This Will Always Be Executed");
} */
/* OUTPUT - Cannot read properties of undefined (reading 'name')
This Will Always Be Executed */


// EXAMPLE 2
/* try {
    // CODE THAT MIGHT THROW AN EXCEPTION
    throw new Error("This Is An Example Error"); // IT WILL CREATE NEW ERROR(CLASS) OBJECT THIS IS CALL CUSTOM ERROR THAT DEVELOPER THROW
} catch (error) {
    // CODE TO HANDLE THE EXCEPTION
    console.error("An Error Occurred", error.message); // IT WILL CATCH THE ERROR OBJECT IN ERROR.MESSAGE
} finally {
    // CODE WILL ALWAYS RUN, WHETHER THERE WAS AN EXCEPTION OR NOT
    console.log("This Will Always Be Executed");
} */


// EXAMPLE 3
/* try {
    const bankAccount = {};
    bankAccount.amount = 5000;
    bankAccount.accountUser = "Dip";
    const newBalance = bankAccount.amount - 1500;
    if(newBalance < 0) {
        throw new Error("Not Enough Balance!!!");
    }
    bankAccount.amount = newBalance;
    console.log("The Updated Balance Is: " + newBalance);
} catch (error) {
    console.error("An Error Occurred:", error.message);
    console.dir(error); // TO SEE THE ERROR(CLASS) OBJECT
    console.log(error.stack); // TO SEE THE ERROR IN WHICH LINE
} finally {
    console.log("This Will Always Be Executed");
} */



/* <---------- 2. FIRST CLASS FUNCTIONS EXAMPLE IN JAVASCRIPT ----------> */
// A PROGRAMMING LANGUAGE IS SAID TO HAVE FIRST-CLASS-FUNCTIONS WHEN THE FUNCTIONS IN THAT LANGUAGE ARE TREATED LIKE ANY OTHER VARIABLE

/* 1. ASSIGNING A FUNCTION TO A VARIABLE 
// EXAMPLE 1
const foo = () => {
    console.log("foobar");
}
foo(); // INVOKE IT USING THE VARIABLE
// OUTPUT - foobar

// EXAMPLE 2
const sayHi = function() {
    console.log("Hello!");
}
sayHi(); // OUTPUT - Hello!

// EXAMPLE 3
const sayBy = function goodBy() {
    console.log("Good By!");
}
sayBy(); // EVEN IF OUR FUNCTION WAS NAMED WE CAN USE THE VARIABLE NAME TO INVOKE IT. NAMING IT WILL BE HELPFUL WHEN DEBUGGING OUR CODE BUT IT WON'T EFFECT THE WAY WE INVOKE IT
// OUTPUT - Good By!

// EXAMPLE 4
const obj = {
    name: "Dip",
    age: function() {
        console.log("24");
    }
}
obj.age(); // WE CAN ASSIGN A FUNCTION AS A VALUE TO A KEY IN AN OBJECT
// OUTPUT - 24 */


/* 2. PASSING A FUNCTION AS AN ARGUMENT 
// EXAMPLE 1
const myName = () => {
    return "Hello!";
} // WE ARE CREATING A FUNCTION WHICH RETURN A STRING HELLO!
const greeting = (sayHi, name) => { // WE ARE PASSING TWO PARAMETER IN GREETING FUNCTION
    console.log(sayHi() + " " + name); // IN sayHi PARAMETER WE STORE myName() FUNCTION AND CALL sayHi() AS A FUNCTION INVOCATION
}
greeting(myName, "Dip"); // WE SEND myName() FUNCTION TO THE sayHi PARAMETER AND A STRING TO THE name PARAMETER AS ARGUMENTS AND INVOKE THE greeting() FUNCTION
// OUTPUT - Hello! Dip 

// EXAMPLE 2
function sayHello() {
    return "Hello, ";
}
function greeting(message, name) {
    console.log(message() + name);
}
// PASS 'sayHello' AS AN ARGUMENT TO 'greeting' FUNCTION
greeting(sayHello, "JavaScript!");
// OUTPUT - Hello, JavaScript!
// WE ARE PASSING OUR sayHello() FUNCTION AS AN ARGUMENT TO THE greeting() FUNCTION, THIS EXPLAINS HOW WE ARE TREATING THE FUNCTION AS A VALUE
// THE FUNCTION THAT WE PASS AS AN ARGUMENT TO ANOTHER FUNCTION IS CALLED A CALLBACK FUNCTION. HERE sayHello() IS A CALLBACK FUNCTION
*/


/* 3. RETURNING A FUNCTION
// EXAMPLE 1
function sayHello() {
    return () => {
        console.log("Hello!");
    };
}
// sayHello()();
const sayHi = sayHello();
sayHi();
// WE ARE RETURNING A FUNCTION FROM ANOTHER FUNCTION WE CAN RETURN A FUNCTION BECAUSE FUNCTIONS IN JS ARE TREATED AS VALUES
// A FUNCTION THAT RETURNS A FUNCTION OR TAKES OTHER FUNCTIONS AS ARGUMENTS IS CALLED HIGHER ORDER FUNCTIONS

// EXAMPLE 2
function a() {
    return function b() {
        console.log("Hello World");
    }
}
// a()();
const c = a();
c(); */



/* <---------- 3. CALLBACK FUNCTIONS EXAMPLE IN JAVASCRIPT ----------> */
// A CALLBACK FUNCTION IS A FUNCTION PASSED INTO ANOTHER FUNCTION AS AN ARGUMENT, WHICH IS THEN INVOKE INSIDE THE OUTER FUNCTION TO COMPLETE SOME KIND OF ROUTINE OR ACTION
// EXAMPLE 1
/* function x() {
    console.log("I am function x");
}
function y() {
    console.log("I am function y");
}
function z(instruction) {
    instruction();
}
z(y); // HERE Y IS A CALLBACK FUNCTION */


// EXAMPLE 2
/* function doSomething(callback) {
    // SIMULATING A ASYNCHRONOUS OPERATION
    setTimeout(() => {
        console.log("Task Completed");
        callback(); // CALLING THE CALLBACK FUNCTION 
    }, 3000);
}
function handleCallback() {
    console.log("Callback Executed");
}
// USING THE CALLBACK
doSomething(handleCallback); */
// CALLBACK FUNCTIONS ALLOWS FOR ASYNC OPERATIONS. LIKE HANDLING USER INPUT, MAKING API REQUESTS OR MANAGING TIMEOUT
// THE FUNCTION THAT WE PASS ANA AN ARGUMENT TO ANOTHER FUNCTION IS CALLED A CALLBACK FUNCTION. HERE 'handleCallback()' IS AN CALLBACK FUNCTION



/* <---------- 4. HIGHER-ORDER FUNCTIONS EXAMPLE IN JAVASCRIPT ----------> */
// EXAMPLE 1
/* function higherOrderFunction(fileName, log = console.log) {
    return function (message) {
        log(fileName + " " + message);
    }
}
const hello = higherOrderFunction("example.js"); // WE STORE 'higherOrderFunction()' IN HELLO AND PASS THE ARGUMENT TO 'fileName' PARAMETER
hello("Hello Dip"); // WE CALLING THE ANONYMOUS FUNCTION THROUGH 'hello' VARIABLE BECAUSE IT IS A FUNCTION AND PASS THE ARGUMENT TO 'message' PARAMETER
*/


// EXAMPLE 2
/* const interviewQuestions = (name) => {
    if (name === "Dip") {
        return function(topic) {
            console.log(`Hi ${name}, What is ${topic}`);
        }
    } else if (name === "Indira") {
        return function(topic) {
            console.log(`Hi ${name}, What is ${topic}`);
        }
    } else if (name === "Jerry") {
        return function(topic) {
            console.log(`Hi ${name}, What is ${topic}`);
        }
    } else {
        return function() {
            console.log("Welcome To Interview");
        }
    }
}

// interviewQuestions("Dip")("JavaScript?");
// interviewQuestions("Indira")("Kotlin?");
// interviewQuestions("Jerry")("React?");

const interviewer = interviewQuestions("Dip");
interviewer("JavaScript?");
// A FUNCTION THAT RETURNS A FUNCTION OR TAKES OTHER FUNCTIONS AS ARGUMENTS IS CALLED HIGHER ORDER FUNCTION
*/



/* <---------- 5. RECURSION  EXAMPLE IN JAVASCRIPT ----------> */
// WHEN A FUNCTION CALLING ITSELF IT IS KNOWN AS RECURSION IT'S A POWERFUL TECHNIQUE BUT REQUIRES CAREFUL DESIGN TO AVOID INFINITE LOOPS
// A RECURSIVE FUNCTION CAN RECEIVE TWO INPUTS: A BASE CASE (ENDS RECURSION) AND A RECURSIVE CASE (RESUMES RECURSION)
/* function factorial(n) {
    if (n === 0 || n === 1) {
        // THE BASE CASE PROVIDES A TERMINATION CONDITION FOR THE RECURSION
        return 1;
    } else {
        return n * factorial(n - 1);
        // THE FUNCTION CALL ITSELF WITH A REDUCED PARAMETER UNTIL IT REACHES THE BASE CASE
    }
}
// IMPROPER USE OF RECURSION MAY LEAD TO A STACK OVERFLOW
const result = factorial(5);
console.log("Factorial Of 5:", result); */
