/* <---------- EXAMPLES OF BASICS OF ARRAYS IN JAVASCRIPT ----------> */
// 1. ARRAY PUSH EXAMPLE
// const arr = [1, 2, 3];
// arr.push(4);
// console.log(arr); // ADD THE VALUE AT END NODE
// OUTPUT WILL BE:- [1, 2, 3, 4]

// 2. ARRAY POP EXAMPLE
// const arr = [1, 2, 3];
// arr.pop();
// console.log(arr); // DELETE THE VALUE OF END NODE
// OUTPUT WILL BE:- [1, 2]

// 3. ARRAY UNSHIFT EXAMPLE
// const arr = [1, 2, 3];
// arr.unshift(0);
// console.log(arr); // ADD THE VALUE OF START NODE
// OUTPUT WILL BE:- [0, 1, 2, 3]

// 4. ARRAY SHIFT EXAMPLE
// const arr = [1, 2, 3];
// arr.shift();
// console.log(arr); // DELETE THE VALUE OF START NODE
// OUTPUT WILL BE:- [2, 3]

// 5. ARRAY LENGTH EXAMPLE
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.length); // TO SEE THE LENGTH OF THE ARRAY
// OUTPUT WILL BE:- 5

// 6. CONSOLE.DIR(); EXAMPLE
// const arr = [1, 2, 3, 4, 5];
// console.dir(arr);  // THE CONSOLE.DIR(); FUNCTION IN JAVASCRIPT IS USED TO DISPLAY AN INTERACTIVE LIST OF THE PROPERTIES OF A SPECIFIED JAVASCRIPT OBJECT. IT PROVIDES A WAY TO INSPECT THE STRUCTURE OF AN OBJECT IN A MORE DETAILED AND ORGANIZED MANNER THAN THE STANDARD CONSOLE.LOG();



/* <---------- EXAMPLE OF OPERATORS PRECEDENCE & JAVASCRIPT OPERATORS ----------> */
// 1. BASICS MATH
// console.log(1+2*3);
// OUTPUT WILL BE:- 7 // BECAUSE OF RULES MULTIPLICATION IS HIGHER PRECEDENCE THAN ADDISON THAT'S WHY THE ANSWER IS 7

// 2. BITWISE OPERATORS EXAMPLE
// console.log(1&2); // BITWISE AND OPERATOR
// OUTPUT WILL BE:- 0

// console.log(1|2); // BITWISE OR OPERATOR
// OUTPUT WILL BE:- 3

// 3. LOGICAL OPERATORS EXAMPLE
/* if(1 && 4) { // LOGICAL AND OPERATOR
    console.log("True");
} else {
    console.log("False");
} */
// OUTPUT WILL BE:- (1 && 4)TRUE / (0 && 4) FALSE

/* if(1 || 4) { // LOGICAL OR OPERATOR
    console.log("True");
} else {
    console.log("False");
} */
// OUTPUT WILL BE:- TRUE

// 4. EQUALITY OPERATORS EXAMPLE
/* if(3 == "3") { // == OPERATOR
    console.log("True");
} else {
    console.log("False");
} */

/* if(3 === "3") { // === OPERATOR
    console.log("True");
} else {
    console.log("False");
} */

/* if(3 != "3") { // != OPERATOR
    console.log("True");
} else {
    console.log("False");
} */

/* if(3 !== "3") { // !== OPERATOR
    console.log("True");
} else {
    console.log("False");
} */

// 5. COMPRESSION OPERATORS EXAMPLE
/* if(3 <= "3") { // <= OPERATOR
    console.log("True");
} else {
    console.log("False");
} */

// 6. TERNARY OPERATORS EXAMPLE
// 3 === 3 ? console.log("True") : console.log("False");



/* <---------- EXAMPLE OF SWITCH CASE & LOOPS IN JAVASCRIPT ----------> */
// 1. SWITCH CASE EXAMPLE
/* let day = "Wednesday";
switch (day) {
    case "Monday":
        console.log("It's the start of the week!");
        break;
    case "Tuesday":
        console.log("It's the second day of the week!");
        break;
    case "Wednesday":
        console.log("It's the third day of the week!");
        break;
    default:
        console.log("Error 404!");
        break;
} */

// 2. FOR LOOP EXAMPLE
/* for (let a = 0; a <= 5; a++) {
    console.log(a);
} */

// 3. WHILE LOOP EXAMPLE
/* let a = 0;
while (a<5) {
    console.log(a);
    a++;
} */

// 4. DO WHILE LOOP EXAMPLE
/* let number = 0;
do {
    console.log(number);
    number++;
} while (number <= 5); */

// 5. FOR OF LOOP EXAMPLE (USED FOR ARRAYS)
/* let colors = ["red", "green", "blue"]
for (const color of colors) {
    console.log(color);
} */

// 6. FOR IN LOOP EXAMPLE (USED FOR OBJECT)
/* let person = {
    name: "John",
    age: "27",
    occupation: "Developer",
}

for (const key in person) {
    console.log(key + ": " + person[key]);
} */

// 7. FOR EACH LOOP EXAMPLE (USED FOR ARRAYS NEED A CALLBACK FUNCTION)
/* let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
    console.log(number);
}); */

// 8. IF ELSE LOOP EXAMPLE
/* let number = 25;
if (number > 30) {
    console.log("It's a hot day");
} else if(number >= 20 && number <=30) {
    console.log("It's a pleasant day");
} else {
    console.log("It's a bit chilly");
} */

// 9. INFINITE LOOP EXAMPLE
/* while(true) {
    console.log("Hello World!");
} */



/* <---------- EXAMPLE OF BREAK & CONTINUE IN JAVASCRIPT ----------> */
// 1. BREAK EXAMPLE
/* for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break; // EXIT THE LOOP WHEN I IS 3
    }
    console.log(i);
} */

// 2. CONTINUE EXAMPLE
/* for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // SKIP THE REST OF THE LOOP AND MOVE TO THE NEXT ITERATION WHEN I IS 2
    }
    console.log(i);
} */



/* <---------- JAVASCRIPT LOGICAL OPERATORS WITH NON BOOLEANS ----------> */
// 1. LOGICAL AND (&&)
/* let result = "Hello" && 42;
console.log(result); // OUTPUT:- 42 */

// 2. LOGICAL OR (||)
/* let result = "" || "Hello World!";
console.log(result); // OUTPUT:- Hello World! */

// 3. LOGICAL NOT (!)
/* let value = "Hello";
if (!value) {
    console.log("Value Is False");
} else {
    console.log("Value Is True");  // OUTPUT:- Value Is True
} */
