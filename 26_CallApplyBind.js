// <---------- CALL, APPLY & BIND ---------->
// <---------- 1. CALL METHOD ---------->
// <---------- EXAMPLE 1 ---------->
/* const person = {
    firstName: "Dip",
    lastName: "Chatterjee",
}
const person2 = {
    firstName: "Indira",
    lastName: "Banerjee",
}
function printFullName() {
    console.log(this.firstName + " " + this.lastName);
}
printFullName.call(person);
// FUNCTION BORROWING
printFullName.call(person2); */


// <---------- EXAMPLE 2 ---------->
/* const person = {
    firstName: "Dip",
    lastName: "Chatterjee",
}
const person2 = {
    firstName: "Indira",
    lastName: "Banerjee",
}
function printFullName(homeTown, state) {
    console.log(this.firstName + " " + this.lastName + " From " + homeTown + " " + state);
}
printFullName.call(person, "Raghunathpur,", "West Bengal");
printFullName.call(person2, "Arambagh,", "West Bengal"); */


// <---------- 2. APPLY METHOD ---------->
/* const person = {
    firstName: "Dip",
    lastName: "Chatterjee",
}
const person2 = {
    firstName: "Indira",
    lastName: "Banerjee",
}
function printFullName(homeTown, state) {
    console.log(this.firstName + " " + this.lastName + " From " + homeTown + " " + state);
}
printFullName.apply(person, ["Raghunathpur,", "West Bengal"]); // WE PASS THE SECOND ARGUMENT AS ARRAY LIST
printFullName.apply(person2, ["Arambagh,", "West Bengal"]); */


// <---------- 3. BIND METHOD ---------->
/* const person = {
    firstName: "Dip",
    lastName: "Chatterjee",
}
const person2 = {
    firstName: "Indira",
    lastName: "Banerjee",
}
function printFullName(homeTown, state) {
    console.log(this.firstName + " " + this.lastName + " From " + homeTown + " " + state);
}
let printNameDip = printFullName.bind(person, "Raghunathpur,", "West Bengal");
// WE CAN'T DIRECTLY CALL THE BIND METHOD RATHER THAN IT STORE IN VARIABLE & LATER WE CAN CALL IT
let printNameIndira = printFullName.bind(person2, "Arambagh,", "West Bengal");
printNameDip();
printNameIndira(); */
