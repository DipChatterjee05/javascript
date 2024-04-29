/* <---------- 1. ARRAY CONCAT EXAMPLE IN JAVASCRIPT ----------> */
/* const arr = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const arr3 = [11, 12, 13, 14, 15];
// IT IS KNOWN AS FUNCTIONAL PROGRAMMING (PURE FUNCTION BECAUSE IT WONT CHANGE THE ORIGINAL ARRAY)
console.log(arr.concat(arr2));
// CONCAT COMBINES TWO OR MORE ARRAYS. THIS METHOD RETURNS A NEW ARRAY WITHOUT MODIFYING ANY EXITING ARRAYS
console.log(arr);
console.log(arr2);
const newArr = arr.concat(arr2,arr3);
console.log(newArr); */



/* <---------- 2. ARRAY REVERSE EXAMPLE IN JAVASCRIPT ----------> */
/* const arr = [1, 2, 3, 4, 5];
const newArr = arr.reverse(); // (IMPURE FUNCTION IT CHANGE THE ORIGINAL ARRAY)
// REVERSES THE ELEMENTS IN AN ARRAY IN PLACE. THIS METHOD MUTATES THE ARRAY AND RETURNS A REFERENCE TO THE SAME ARRAY.
console.log(newArr);


// TO CREATE A RESERVED COPY WITHOUT MODIFYING THE ORIGINAL ARRAY WE CAN USE SLICE METHOD BEFORE CALLING REVERSE
const newArr = arr.slice().reverse();
console.log(arr); // (PURE FUNCTION)
console.log(newArr); */



/* <---------- 3. ARRAY TOSTRING EXAMPLE IN JAVASCRIPT ----------> */
/* const arr = [1, 2, 3, 4, 5];
const newArr = arr.toString(); // (PURE FUNCTION)
// RETURNS A STRING REPRESENTATION OF AN ARRAY.
console.log(newArr);


// WE CAN SPECIFY A SEPARATOR USING .join() METHOD IF WE DON'T PROVIDE SEPARATOR IT WILL USE COMA BY DEFAULT
const newArr = arr.join(" | ").toString();
console.log(arr); // (PURE FUNCTION)
console.log(newArr); */



/* <---------- 4. ARRAY JOIN EXAMPLE IN JAVASCRIPT ----------> */
/* const arr = [1, 2, 3, 4, 5];
const newArr = arr.join(" / ");
// ADDS ALL THE ELEMENTS OF AN ARRAY INTO A STRING, SEPARATED BY THE SPECIFIED SEPARATOR STRING
console.log(arr); // (PURE FUNCTION)
console.log(newArr); */



/* <---------- 5. ARRAY INCLUDES, INDEXOF, LASTINDEXOF EXAMPLE IN JAVASCRIPT ----------> */
// INCLUDES EXAMPLE
/* const arr = [1, 2, 3, 4, 5];
const newArr = arr.includes(3);
// DETERMINES WHETHER AN ARRAY INCLUDES A CERTAIN ELEMENT, RETURNING TRUE OR FALSE AS APPROPRIATE
console.log(arr); // (PURE FUNCTION)
console.log(newArr); */


// INDEXOF EXAMPLE
/* const arr = [1, 2, 3, 4, 5];
const newArr = arr.indexOf(3);
// RETURNS THE INDEX OF THE FIRST OCCURRENCE OF A VALUE IN AN ARRAY, OR -1 IF IT IS NOT PRESENT
console.log(arr); // (PURE FUNCTION)
console.log(newArr); */


// LASTINDEXOF EXAMPLE
/* const arr = [1, 2, 3, 4, 5, 3];
const newArr = arr.lastIndexOf(3);
// RETURNS THE INDEX OF THE LAST OCCURRENCE OF A SPECIFIED VALUE IN AN ARRAY, OR -1 IF IT IS NOT PRESENT
console.log(arr); // (PURE FUNCTION)
console.log(newArr); */



/* <---------- 6. ARRAY SLICE, SPLICE EXAMPLE IN JAVASCRIPT ----------> */
// SLICE EXAMPLE
/* const arr = ['A', 'B', 'C', 'D', 'E', 'F'];
const newArr = arr.slice(2, 5); // FIRST INDEX AND LAST INDEX BUT LAST INDEX NOT INCLUDE
// RETURNS A COPY OF A SECTION OF AN ARRAY. FOR BOTH START AND END, A NEGATIVE INDEX CAN BE USED TO INDICATE AN OFFSET FROM THE END OF THE ARRAY. FOR EXAMPLE, -2 REFERS TO THE SECOND TO LAST ELEMENT OF THE ARRAY
console.log("Original Array: ", arr); // (PURE FUNCTION)
console.log("Slice Array: ", newArr); // OUTPUT - ['C', 'D', 'E'] */


// SPLICE EXAMPLE
/* let arr = ["Dip", "Indira", "Jerry", "Jericho"];
let newArr = arr.splice(2, 0, "Hello"); // STARTING INDEX, DELETE COUNT, AND ADDING ELEMENT (IMPURE FUNCTION)
// REMOVES ELEMENTS FROM AN ARRAY AND, IF NECESSARY, INSERTS NEW ELEMENTS IN THEIR PLACE, RETURNING THE DELETED ELEMENTS
console.log("Original Array: ", arr); // OUTPUT - ["Dip", "Indira", "Hello", "Jerry", "Jericho"]
console.log(newArr); */


/*let originalArray = [1, 2, 3, 4, 5];
let removeElements = originalArray.splice(1, 2, 6, 7);
console.log(originalArray);
console.log(removeElements); */



/* <---------- 7. ARRAY LOOPS MAP, FILTER, REDUCE, FOREACH, SOME, EVERY, FIND EXAMPLE IN JAVASCRIPT ----------> */
// 1. MAP EXAMPLE 1
/* const originalArray = ["Dip", "Indira", "Jerry"];
// CALLS A DEFINED CALLBACK FUNCTION ON EACH ELEMENT OF AN ARRAY, AND RETURNS AN ARRAY THAT CONTAINS THE RESULTS
const newArr = originalArray.map((friendName)=> {
    return {
        name: friendName,
        age: 24,
    };
});
console.log(newArr); // (PURE FUNCTION) */

// MAP EXAMPLE 2
/* const originalArray = [1, 2, 3, 4, 5];
const newArr = originalArray.map((element)=> {
    return element * element;
});
console.log(newArr); */

// MAP EXAMPLE 3
/* const originalArray = [{name: "Dip", age: 24}, {name: "Indira", age: 23}, {name: "Jerry", age: 25}];
const newArr = originalArray.map((obj) => {
    if(obj.age >= 24) {
        return {
            ...obj, vote: "Yes"
        }
    } else {
        return {
            ...obj, vote: "No"
        }
    }
});
console.log(newArr); */


// 2. FILTER EXAMPLE 1
/* const originalArray = [{name: "Dip", age: 24}, {name: "Indira", age: 23}, {name: "Jerry", age: 18}];
// RETURNS THE ELEMENTS OF AN ARRAY THAT MEET THE CONDITION SPECIFIED IN A CALLBACK FUNCTION
const newArr = originalArray.filter((person)=> {
    if(person.age >= 20) {
        return true;
    } else {
        return false;
    }
}).map((person)=>{
    return person.name;
}).reduce((previousValue, currentValue) => {
    return previousValue + 1;
},0);
console.log(newArr); */

// FILTER EXAMPLE 2
/* let originalArray = [1, 2, 3, 4, 5];
let evenNumbers = originalArray.filter((element) => {
    return element % 2 === 0;
});
console.log(evenNumbers); */


// 3. REDUCE EXAMPLE 1
/* let originalArray = [1, 2, 3, 4, 5];
// IT IS USED TO ACCUMULATE VALUES OF AN ARRAY INTO A SINGLE RESULT
let newArr = originalArray.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
},0); // THE REDUCE FUNCTION STARTS WITH AN INITIAL VALUE OF 0 FOR THE ACCUMULATOR AND ADDS EACH ELEMENT OF THE ARRAY TO IT
console.log(newArr); */


// 4. FOREACH EXAMPLE 1
/* const originalArray = [1, 2, 3, 4, 5];
// PERFORMS THE SPECIFIED ACTION FOR EACH ELEMENT IN AN ARRAY
const newArr = originalArray.forEach((number, index, array) => {
    array[index] = number * number; // SQUARE EACH ELEMENT IN AN ARRAY
});
console.log(originalArray); // (IMPURE FUNCTION) */

// FOREACH EXAMPLE 2
/* let fruits = ["apple", "banana", "orange"]
fruits.forEach((fruit, index) => {
    console.log(`Index: ${index}, Fruit: ${fruit}`);
}); */

// FOREACH EXAMPLE 3
/* let numbers = [1, 2, 3, 4, 5];
let sum = 0;
numbers.forEach((number) => {
    sum += number;
});
console.log(sum); */


// 5. SOME EXAMPLE 1
/* let fruits = ["apple", "banana", "orange"];
// DETERMINES WHETHER THE SPECIFIED CALLBACK FUNCTION RETURNS TRUE FOR ANY ELEMENT OF AN ARRAY
let result = fruits.some((word) => {
    return word.includes("a");
});
console.log(result); // (PURE FUNCTION) */


// 6. EVERY EXAMPLE 1
/* let numbers = [4, 8, 12, 6, 16];
// DETERMINES WHETHER ALL THE MEMBERS OF AN ARRAY SATISFY THE SPECIFIED TEST
let areAllEven = numbers.every((number) => {
    return number % 2 === 0;
});
console.log(areAllEven); // (PURE FUNCTION) */

// EVERY EXAMPLE 2
/* let fruits = ["apple", "banana", "orange"];
let result = fruits.every((word) => {
    return word.length > 3;
});
console.log(result); */


// 7. FIND EXAMPLE 1
/* let numbers = [5, 8, 12, 3, 6];
// RETURNS THE VALUE OF THE FIRST ELEMENT IN THE ARRAY WHERE PREDICATE IS TRUE, AND UNDEFINED OTHERWISE
let result = numbers.find((number) => {
    return number > 10;
});
console.log(result); // (PURE FUNCTION) */



/* <---------- 8. ARRAY SORTING EXAMPLE IN JAVASCRIPT ----------> */
// EXAMPLE 1
/* const originalArray = [3,1,4,1,9,2,6,5,3,5];
// SORTS AN ARRAY IN PLACE. THIS METHOD MUTATES THE ARRAY AND RETURNS A REFERENCE TO THE SAME ARRAY
let sortedArray = originalArray.slice().sort((a, b) => {
    return a - b; // IN ASCENDING ORDER
});
console.log(originalArray); // USING SLICE WE CAN KEEP THE ORIGINAL ARRAY
console.log(sortedArray); // (IMPURE FUNCTION) */

// EXAMPLE 2
/* const originalArray = [3,1,4,1,9,2,6,5,3,5];
let sortedArray = originalArray.sort((a, b) => {
    return b - a; // IN DESCENDING ORDER
});
console.log(originalArray);
console.log(sortedArray); // (IMPURE FUNCTION) */


// EXAMPLE 3
/* const originalArray = [
    {name: "Jericho", priority: "low"},
    {name: "Jerry", priority: "low"},
    {name: "Dip", priority: "high"},
    {name: "Indira", priority: "high"},
];
let newArr = originalArray.sort((a, b) => {
    if(a.priority === "high" && b.priority === "low") {
        return -1; // 'a' COMES BEFORE 'b'
    } else if (a.priority === "low" && b.priority === "high") {
        return 1; // 'b' COMES BEFORE 'a'
    } else {
        return 0; // NO CHANGE IN ORDER
    }
});
console.log(newArr); */



/* <---------- 9. MATH OBJECT EXAMPLE IN JAVASCRIPT ----------> */
// 1. Math.abs(x): RETURNS THE ABSOLUTE VALUE OF A NUMBER X
/* let absoluteValue = Math.abs(-5);
console.log(absoluteValue);
// OUTPUT - 5 */


// 2. Math.round(x): ROUNDS A NUMBER X TO THE NEAREST INTEGER
/* let roundedNumber = Math.round(4.6)
console.log(roundedNumber);
// OUTPUT - 5 */


// 3. Math.floor(x): ROUNDS DOWN TO THE NEAREST INTEGER
/* let floorNumber = Math.floor(4.6);
console.log(floorNumber);
// OUTPUT - 4 */


// 4. Math.ceil(x): ROUNDS UP TO THE NEAREST INTEGER
/* let ceilNumber = Math.ceil(4.1);
console.log(ceilNumber);
// OUTPUT - 5 */


// 5. Math.sqrt(x): RETURN THE SQUARE ROOT OF A NUMBER X
/* let squareRoot = Math.sqrt(25);
console.log(squareRoot);
// OUTPUT - 5 */


// 6. Math.random(): RETURN A PSEUDO-RANDOM FLOATING POINT NUMBER BETWEEN 0 (INCLUSIVE) TO 1 (EXCLUSIVE)
/* let randomValue = Math.random();
console.log(randomValue); */


// 7. Math.sin(), Math.cos(), Math.PI, Math.max(), Math.min()



/* <---------- 10. STRINGS EXAMPLE IN JAVASCRIPT ----------> */
// 1. CREATING STRINGS: WE CAN CREATE STRINGS USING SINGLE OR DOUBLE QUOTES
/* let singleQuote = 'Hello, World!';
let doubleQuote = "Hello, World!"; */


// 2. STRING CONCATENATION: WE CAN CONCATENATE STRINGS USING THE + OPERATOR
/* let firstName = "Dip";
let lastName = "Chatterjee";
let fullName = firstName + " " + lastName;
console.log(fullName);
// OUTPUT - Dip Chatterjee */


// 3. STRING LENGTH: YOU CAN FIND THE LENGTH OF A STRING USING THE LENGTH PROPERTY
/* let greeting = "Hello";
console.log(greeting.length);
// OUTPUT - 5 */


// 4. ACCESSING CHARACTERS: WE CAN ACCESS INDIVIDUAL CHARACTERS IN A STRING USING SQUARE BRACKETS
/* let word = "JavaScript";
console.log(word[0]);
// OUTPUT - J */


// 5. SUBSTRING: WE CAN EXTRACT SUBSTRING USING THE SUBSTRING METHOD
/* let sentence = "This is a sentence";
let substring = sentence.substring(5, 12);
console.log(substring);
// OUTPUT - is a se */


// 6. STRING METHODS
/* let text = "Hello, World!";
console.log(text.toUpperCase()); // TO UPPERCASE THE STRING
console.log(text.toLowerCase()); // TO LOWERCASE THE STRING
console.log(text.indexOf("W")); // TO FIND THE INDEX
console.log(text.replace("W", "H")); // TO REPLACE THE STRING */


// 7. TEMPLATE LITERALS: TEMPLATE LITERALS ALLOW EMBEDDING EXPRESSIONS INSIDE STRING LITERALS
/* let age = 25;
let message = `I am ${age} years old`;
console.log(message); */
