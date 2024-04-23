// <---------- TRUST ISSUES WITH SETTIMEOUT ---------->
// <---------- 1. HOW setTIMEOUT ACTUALLY WORKS ---------->
/* console.log("Start");
setTimeout(() => {
    console.log("CallBack");
}, 5000);
console.log("End"); */


// <---------- 2. HOW CAN WE BLOCK OUR MAIN THREAD ---------->
/* console.log("Start");
setTimeout(() => {
    console.log("CallBack");
}, 5000);
console.log("End");

let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate + 10000) {
    endDate = new Date().getTime();
}
console.log("While Expires"); */


// <---------- 3. WHAT HAPPENED IF WE DO THIS ---------->
/* console.log("Start");
setTimeout(() => {
    console.log("CallBack");
}, 0);
console.log("End"); */
// OUTPUT - Start, End, Callback
// CONCURRENCY MODEL
