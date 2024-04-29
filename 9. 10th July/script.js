/* <---------- 1. EVENT PROPAGATION CAPTURING & BUBBLING EXAMPLE IN JAVASCRIPT ----------> */
// EVENT PROPAGATION CAPTURING EXAMPLE 1 (PHASE 1 - TOP TO BOTTOM)
/* const divTag = document.getElementById("outer");
const buttonTag = document.querySelector("#inner");
divTag.addEventListener("click", () => {
    console.log("Outer div clicked during capturing phase");
}, true); // IF IT IS FALSE IT WON'T RUN THE EVENT
buttonTag.addEventListener("click", () => {
    console.log("Inner div clicked during capturing phase");
}, true); */


// EVENT PROPAGATION BUBBLING EXAMPLE 1 (PHASE 2 - BOTTOM TO TOP)
/* const body = document.querySelector("body"); // SELECTING THE BODY
const divTag = document.querySelector("div"); // SELECTING THE DIV
const pTag = document.querySelector("p"); // SELECTING THE P
// ADDING EVENT LISTENER ON BODY
body.addEventListener("click", (event) => {
    console.log("Hello Body Clicked");
    console.dir(event.target); // TARGET EVENT
    console.dir(event.currentTarget); // CURRENTLY TARGET EVENT
});
// ADDING EVENT LISTENER ON DIV
divTag.addEventListener("click", (event) => {
    console.log("Hello DivTag Clicked");
    console.dir(event.target);
    console.dir(event.currentTarget);
});
// ADDING EVENT LISTENER ON P
pTag.addEventListener("click", (event) => {
    console.log("Hello PTag Clicked");
    console.dir(event.target);
    console.dir(event.currentTarget);
}); */


// EXAMPLE 2
// WHEN AN EVENT OCCURS ON A NESTED ELEMENT, LIKE A BUTTON INSIDE A DIV, THE EVENT TRIGGERS ON THE INNERMOST ELEMENT FIRST AND THEN PROPAGATES UPWARDS THROUGH IT'S ANCESTORS
// UNLESS AN ANCESTOR STOPS THE PROPAGATION USING event.stopPropagation(), e.preventDefault()
/* const divTag = document.getElementById("outer");
const buttonTag = document.querySelector("#inner");
divTag.addEventListener("click", () => {
    console.log("Outer div clicked");
});
buttonTag.addEventListener("click", (event) => {
    console.log("Inner button clicked");
    event.stopPropagation();
}); */
// WHEN WE CLICKED THE BUTTON BOTH "Inner button clicked" AND "Outer div clicked" WILL BE LOGGED TO THE CONSOLE BECAUSE THE CLICK EVENT BUBBLES UP FROM THE BUTTON TO THE OUTER DIV


// e.preventDefault EXAMPLE
/* const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
}); */



/* <---------- 2. VALUE VS REFERENCE TYPES EXAMPLE IN JAVASCRIPT ----------> */
// 1. PRIMITIVE TYPES EXAMPLE
/* let a = 5;
let b = a; // b NOW HOLDS A COPY OF THE VALUE 5
a = 10; // CHANGING 'a' DOESN'T AFFECT 'b'
console.log(a); // OUTPUT:- 10
console.log(b); // OUTPUT:- 5 */


// 2. REFERENCE TYPES
/* let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 NOW POINTS TO THE SAME ARRAY AS arr1
arr1.push(4); // THIS WILL ALSO AFFECT arr2
console.log(arr1); // OUTPUT:- [1, 2, 3, 4]
console.log(arr2); // OUTPUT:- [1, 2, 3, 4] */
