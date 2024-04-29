/* <---------- 1. REGEX EXAMPLE IN JAVASCRIPT ----------> */
/* const regex = /pattern/; // REGULAR EXPRESSION (REGEX)
const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // USING '/ /' WE DECLARE REGEX IT'S START WITH ^ AND END WITH $
console.log(pattern.test("test@gmail.com")); // RETURNS A BOOLEAN VALUE THAT INDICATES WHETHER OR NOT A PATTERN EXISTS IN A SEARCHED STRING
// OUTPUT - true */


/* <---------- 2. ASYNC & DEFER ATTRIBUTE EXAMPLE IN JAVASCRIPT ----------> */


/* <---------- 3. DOM MANIPULATION, DOM SELECTORS, DOM MODEL EXAMPLE IN JAVASCRIPT ----------> */
// 1. USING TAG NAMES
/* const listOfh2 = document.getElementsByTagName("h2");
console.log(listOfh2); // IT'S CALLED HTML COLLECTION OR NODE LIST BECAUSE IT'S NOT AN ARRAY
console.log(listOfh2.length); // WE CAN ACCESS THE LENGTH
for(let element of listOfh2) {
    console.log(element);
} // TO SEE EVERY ELEMENTS
const htmlCollectionArray = Array.from(listOfh2); // WE CAN FORCEFULLY CONVERTED INTO ARRAY
console.log(htmlCollectionArray); */


// 2. USING CLASS NAMES
// document.getElementsByClassName("para"); // MULTIPLE SELECTOR
// RETURNS A HTML COLLECTION OF THE ELEMENTS IN THE OBJECT ON WHICH THE METHOD WAS INVOKED (A DOCUMENT OR AN ELEMENT) THAT HAVE ALL THE CLASSES GIVEN BY CLASSNAMES. THE CLASSNAMES ARGUMENT IS INTERPRETED AS A SPACE-SEPARATED LIST OF CLASSES


// 3. USING ID
/* const dom = document.getElementById("test"); // RETURNS A REFERENCE TO THE FIRST OBJECT WITH THE SPECIFIED VALUE OF THE ID ATTRIBUTE
// dom.innerText = "Hello, World"; // ADDING TEXT TO TEST ID HTML ELEMENT
dom.innerText = dom.innerText + " " + "Dip Chatterjee"; // CONCAT THE TEXT AND ADD IT */


// 4. QUERY SELECTOR
/* const paragraph = document.querySelector("#exampleDiv p") // RETURNS THE FIRST ELEMENT THAT IS A DESCENDANT OF NODE THAT MATCHES SELECTORS
paragraph.textContent = "Hello Using document.querySelector!"; */

/* const elements = document.querySelectorAll("h2");
console.log(elements); // NODE LIST */



/* <---------- 4. DOT & BRACKETS NOTATION EXAMPLE IN JAVASCRIPT ----------> */
// BOTH DOT & BRACKETS NOTATION ARE USED TO ACCESS & MANIPULATE OBJECT PROPERTIES

/* DOT NOTATION 
1. SYNTAX: object.property
2. EXAMPLE: person.name
3. USED WHEN A PROPERTY NAME IS A VALID IDENTIFIER AND DOESN'T CONTAIN SPECIAL CHARACTERS */


/* BRACKET NOTATION 
1. SYNTAX: object['property'] or object[expression] 
2. EXAMPLE: person['name'] or person[variable] 
3. USED WHEN THE PROPERTY NAME IS DYNAMIC, CONTAINS SPECIAL CHARACTERS, OR IS STORED IN A VARIABLE */

// EXAMPLE OF BOTH NOTATIONS
/* const person = {
    name: "Dip",
    age: 24
}
// DOT NOTATION
const nameDot = person.name;
console.log(nameDot);
// OUTPUT - Dip
// BRACKETS NOTATION
const nameBracket = person['name'];
console.log(nameBracket);
// OUTPUT - Dip
const propertyName = "age";
const ageBracket = person[propertyName];
console.log(ageBracket);
// OUTPUT - 24 */



/* <---------- 5. TYPEOF OPERATOR EXAMPLE IN JAVASCRIPT ----------> */
// THE typeof OPERATOR IS USED TO DETERMINE THE DATA TYPE OF A VARIABLE OR EXPRESSION
// typeof null RETURNS "object" WHICH IS CONSIDERED A QUIRK IN JAVASCRIPT

/* let num = 55;
console.log(typeof num);
// OUTPUT - number

let string = "Hello, World!";
console.log(typeof string);
// OUTPUT - string 

let arr = [1, 2, 3];
console.log(typeof arr);
// OUTPUT - object

let fun = function() {};
console.log(typeof fun);
// OUTPUT - function */
