/* <---------- 1.Array.form() EXAMPLE IN JAVASCRIPT ----------> */
// THIS METHOD CREATES A NEW ARRAY INSTANCE FROM AN ARRAY-LIKE OR ITERABLE OBJECT. IT'S COMMONLY USED TO CONVERT OBJECTS THAT ARE NOT TECHNICALLY ARRAYS (LIKE NODE LIST, ARGUMENTS, ETC) INTO ARRAYS, OR TO CREATE SHALLOW COPIES OF ARRAYS
// CONVERT A STRING TO AN ARRAY
/* const str = "hello";
const strArray = Array.from(str);
console.log(strArray); // OUTPUT:- ['h', 'e', 'l', 'l', 'o']


// CONVERT A NODE LIST TO AN ARRAY
const nodeList = document.querySelectorAll('div');
const nodeArray = Array.from(nodeList);
console.log(nodeArray); // OUTPUT:- [div, div, div, ...] */


/* <---------- 2. NUMBER OBJECTS EXAMPLE IN JAVASCRIPT ----------> */
// 1. Number.parseFloat():- PARSES A STRING ARGUMENT AND RETURNS A FLOATING POINT NUMBER
/* const floatValue = Number.parseFloat('10.5');
console.log(floatValue); // OUTPUT:- 10.5 */


// 2. Number.parseInt():- PARSES A STRING ARGUMENT AND RETURNS AN INTEGER
/* const intValue = Number.parseInt('10');
console.log(intValue); // OUTPUT:- 10 */


// 3. Number.isNaN():- CHECKS WHETHER A VALUE IS NAN (NOT-A-NUMBER)
/* console.log(Number.isNaN(NaN)); // OUTPUT:- true
console.log(Number.isNaN(10)); // OUTPUT:- false */


// 4. Number.isFinite():- CHECKS WHETHER A VALUE IS A FINITE NUMBER
/* console.log(Number.isFinite(Infinity)); // OUTPUT:- false
console.log(Number.isFinite(10)); // OUTPUT:- true */


// 5. Number.isInteger():- CHECKS WHETHER A VALUE IS AN INTEGER
/* console.log(Number.isInteger(10)); // OUTPUT:- true
console.log(Number.isInteger(10.5)); // OUTPUT:- false */


// 6. Number.prototype.toFixed():- FORMATS A NUMBER USING FIXED-POINT NOTATION
/* const num = 10.567;
console.log(num.toFixed(2)); // OUTPUT:- "10.57" */
