/* <---------- 1. REVISION OBJECTS ----------> */ 
// PROBLEM 1
/* const obj = {
    name: "Dip Chatterjee",
    age: 25,
    address: {
        area: { name: "Bangalore" },
        doorNo: 555,
    },
}
let areaCopy = obj.address.area;
areaCopy.name = "Delhi";
console.log(obj.address.area.name); // Delhi Will Be Printed */


// PROBLEM 2
/* const obj = {
    name: "Dip Chatterjee",
    age: 25,
    address: {
        area: "Bangalore",
        doorNo: 555,
    },
}
let areaCopy = obj.address.area;
areaCopy = "Delhi";
console.log(obj.address.area); // Bangalore Will Be Printed */



/* <---------- 2. SPREAD OPERATOR EXAMPLE IN JAVASCRIPT ----------> */
// EXAMPLE 1
// USED TO EXPAND ELEMENTS OF AN ARRAY OR PROPERTIES OF AN OBJECT
/* const person = {
    name: "Dip Chatterjee",
    age: 24,
}
const address = {
    city: "Bangalore",
    doorNo: 555,
}
const newObject = {...person, ...address}; // IT WILL FIRST EXPAND BOTH OBJECTS AND MERGE THEM AND MAKE A NEW FRESH COPY
console.log(newObject); */

// EXAMPLE 2
/* const test = {
    name: "Dip Chatterjee",
    age: 24,
}
const testCopy = { ...test };
testCopy.age = 50; // IT WON'T CHANGE BECAUSE IT'S A COPY
console.log(test); */

// EXAMPLE 3
/* const test2 = {
    name: "Dip Chatterjee",
}
const test3 = {
    name: "Indira Banerjee",
}
const test4 = {
    name: "Dip+Indira",
}
const mergeObj = { ...test2, ...test3, ...test4 }; // IF WE MERGE THE OBJECTS WITH SAME KEY:VALUE PAIR IT WILL PRINT THE LAST VALUE
console.log(mergeObj); */

// EXAMPLE 4
/* const person1 = {
    name: "Dip Chatterjee",
    address: {
        city: "Bangalore",
    }
}
const person2 = { ...person1, address: { ...person1.address }, name: "Indira Banerjee" };
person1.address.city = "Delhi";
console.log(person1);
console.log(person2); */

// EXAMPLE 5
/* const arr = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const newArr = [...arr, ...arr2, 9, 10];
console.log(newArr); */



/* <---------- 3. REST OPERATOR EXAMPLE IN JAVASCRIPT ----------> */
// EXAMPLE 1
/* function add(...arrayOfNumbers) { // WE CAN PASS AS AN PARAMETER
    let sum = 0;
    for(let elements of arrayOfNumbers) {
        sum += elements;
    }
    return sum;
}
console.log(add(1, 2, 3, 4, 5, 6)); // HERE WE PUTTING THE VALUES TO THE PARAMETER */

// EXAMPLE 2
/* function add(...arrayOfNumbers) {
    return arrayOfNumbers.reduce((total, num) => total + num, 0);
}
console.log(add(1, 2, 3, 4, 5, 6)); */
