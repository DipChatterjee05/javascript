// <---------- ASYNCHRONOUS JAVASCRIPT & EVENT LOOP ---------->
// <---------- 1. EXAMPLE 1 WEB API's (window) ---------->
/* console.log("Start");
// STORE IN WEB API's ENVIRONMENT -> CALLBACK QUEUE -> EVENT LOOP -> CALL STACK
setTimeout(function x(){
    console.log("Callback");
}, 5000);
console.log("End"); */


//  <---------- 2. EXAMPLE 2 ---------->
/* console.log("Start");
// STORE IN WEB API's ENVIRONMENT -> CALLBACK QUEUE -> EVENT LOOP -> CALL STACK
document.getElementById("btn").addEventListener("click", function y() {
    console.log("Callback");
});
console.log("End"); */


// <---------- 3. EXAMPLE 3 ---------->
/* console.log("Start");
// STORE IN WEB API's ENVIRONMENT -> CALLBACK QUEUE -> EVENT LOOP -> CALL STACK
setTimeout(function x(){
    console.log("Callback");
}, 5000);
// STORE IN WEB API's ENVIRONMENT -> MICROTASK QUEUE -> EVENT LOOP -> CALL STACK
fetch("https://api.netflix.com").then(function z() {
    console.log("Netflix");
})
console.log("End"); */

/* MICROTASK QUEUE HAS HIGHER PRIORITY THAN CALLBACK QUEUE
MICROTASK QUEUE - PROMISES, MUTATION OBSERVER
CALLBACK QUEUE - SETTIMEOUT, DOM API's */
