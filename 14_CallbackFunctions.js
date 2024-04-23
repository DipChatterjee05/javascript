// <---------- CALLBACK FUNCTIONS ---------->
/* 1. WHAT IS CALLBACK FUNCTIONS IN JAVASCRIPT?
2. JAVASCRIPT IS A SYNCHRONOUS SINGLE-THREADED LANGUAGE
3. BLOCKING THE MAIN THREAD
4. POWER OF CALLBACKS */

/* setTimeout(() => {
    console.log("timer");
}, 5000);

function x(param) {
    console.log("x");
    param();
}
x(function y() {
    console.log("y");
}); */


// <---------- 1. DEEP DIVE INTO EVENT LISTENER HOW CALLBACK WORK WITH EVENT LISTENER ---------->
/* document.querySelector("#clickMe").addEventListener("click", function x() {
    // FUNCTION x() IS A CALLBACK FUNCTION
    console.log("Button Clicked");
}); */


// <---------- 2. CLOSURES DEMO WITH EVENT LISTENER ---------->
/* function attachEventListener() {
    let count = 0;
    document.querySelector("#clickMe").addEventListener("click", function x() {
        // FUNCTION x() CALLBACK FUNCTION FORMS A CLOSURE WITH attachEventListener()
        console.log("Button Clicked", ++count);
    });
}
attachEventListener(); */


// <---------- 3. SCOPE DEMO WITH EVENT LISTENER ---------->
/* function attachEventListener() {
    let count = 0;
    document.querySelector("#clickMe").addEventListener("click", function x() {
        console.log("Button Clicked", ++count);
    });
}
attachEventListener(); */
// ELEMENTS -> BUTTON -> EVENT LISTENER -> HANDLER -> SCOPE


// GARBAGE COLLECTION & REMOVE EVENT LISTENER
