/* <---------- BASIC EXAMPLE ----------> */
/* alert("Dip Is A Stupid");
console.log("Hello World"); */



/* <---------- 1. EXAMPLE OF CONCATENATION ----------> */
// const a = 23;
// const b = "hi";
// const result = a+b;
// console.log(result);
// OUTPUT WILL BE :- 23hi

// const a = 23;
// const b = "23";
// const result = b+a;
// console.log(result);
// OUTPUT WILL BE :- 2323

// const a = 23;
// const b = "23";
// const result = +b+a;
// console.log(result);
// OUTPUT WILL BE :- 46



/* <---------- 2. EXAMPLE OF TYPE COERCION ----------> */
// const a = "233";
// const result = (+a)+10; // IF YOU PUT TERNARY OPERATOR IN FRONT OF STRING THE STRING CONVERTED INTO A NUMBER IF IT IS REALLY NUMBER
// console.log(result);
// OUTPUT WILL BE :- 243



/* <---------- 3. EXAMPLE OF NaN ----------> */
// const b = "JavaScriptIsWeird";
// const res = (+b)+10; // YOU CANT FORCEFULLY CONVERT A STRING INTO A NUMBER ITS GIVES YOU NaN
// console.log(res);
// OUTPUT WILL BE :- NaN (Not a Number)



/* <---------- 4. EXAMPLE OF CONTROL FLOWS ----------> */
// const a = 23;
// if(a) {
//     console.log("a is true");
// } else {
//     console.log("a is false");
// }
// OUTPUT WILL BE :- a is true



/* <---------- 5. EXAMPLE OF FUNCTIONS ----------> */
// function add(a,b) {
//     return a+b;
// }
// console.log(add(5,5));
// OUTPUT WILL BE :- 10



/* <---------- 6. EXAMPLE OF PROMPT ----------> */
// function add(a,b) {
//     return a+b;
// }
// const a = parseInt(prompt("Give The First Number"));
// const b = parseInt(prompt("Give The Second Number"));
// console.log(add(a,b));
// OUTPUT WILL BE :- DEPENDS ON USER INPUT



/* <---------- 7. EXAMPLE OF OBJECTS LITERALS ----------> */
// let obj = {
//     name: "Dip Stark",
//     age: 24,
//     isMarried: false,
// }
// console.log(obj.name);



/* <---------- 8. EXAMPLE OF OBJECTS LITERALS USING CONST ----------> */
// const obj = {
//     name: "Dip Stark",
// }
// obj.name = "potato"; // WE CAN CHANGE THE VALUE OF OBJECTS EVEN IT IS CONSTRAINTS
// console.log(obj.name);
