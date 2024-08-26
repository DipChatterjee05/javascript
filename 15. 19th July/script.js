/* <---------- 1. ADDING OR REMOVING PROPERTIES EXAMPLE IN JAVASCRIPT ----------> */
// EXAMPLE 1
/* const object = {
    name: "John",
    age: 27,
    friends: ["Tom", "Jerry"],
}
object.isMarried = true; // ADDING A PROPERTY
console.log(object);
delete object.isMarried; // REMOVING A PROPERTY
console.log(object); */



/* <---------- 2. ENUMERATING OR ITERATE OVER PROPERTIES OF OBJECTS EXAMPLE IN JAVASCRIPT ----------> */
// EXAMPLE 1
/* const amazon = {
    cart: [
        {
            name: "potato",
            price: 20,
            quantity: 2,
        },
        {
            name: "tomato",
            price: 40,
            quantity: 3,
        }
    ],
    accountBalance: 1000,
}

// 1. USING for...in LOOP
// THE for...in LOOP ITERATES OVER ALL ENUMERABLE PROPERTIES OF AN OBJECT AND ITS PROTOTYPE CHAIN
for (let key in amazon) {
    console.log(key + ": " + amazon[key]);
}

// 2. USING Object.keys()
// THE Object.keys() METHOD RETURNS AN ARRAY OF A GIVEN OBJECT'S OWN ENUMERABLE PROPERTY NAMES
const keys = Object.keys(amazon);
console.log(keys);

// 3. USING Object.values()
// THE Object.values() METHOD RETURNS AN ARRAY OF A GIVEN OBJECT'S OWN ENUMERABLE PROPERTY VALUES
const values = Object.values(amazon);
console.log(values);

// 4. USING Object.entries()
// THE Object.entries() METHOD RETURNS AN ARRAY OF A GIVEN OBJECT'S OWN ENUMERABLE PROPERTY [KEY, VALUE] PAIRS
const entries = Object.entries(amazon);
console.log(entries);

// 5. for...in LOOP ALSO ITERATES OVER INHERITED PROPERTIES FROM THE PROTOTYPE CHAIN. IF WE ONLY WANT TO ITERATE OVER AN OBJECT'S OWN PROPERTIES, WE MAY NEED TO COMBINE IT WITH hasOwnProperty() METHOD
for (let key in amazon) {
    if (amazon.hasOwnProperty(key)) {
        console.log(key + ": " + amazon[key]);
    }
} */


// EXAMPLE 2
/* const amazon = {
    cart: [
        {
            name: "potato",
            price: 20,
            quantity: 2,
        },
        {
            name: "tomato",
            price: 40,
            quantity: 3,
        }
    ],
    accountBalance: 1000,
}
Object.defineProperty(amazon, "accountNumber", {
    value: 1234567890,
    enumerable: false, // IT'S HIDE THE PROPERTY WHILE ITERATING
});
Object.defineProperty(amazon, "trackingNumber", {
    value: 5051999,
    enumerable: false, // IT'S HIDE THE PROPERTY WHILE ITERATING
});
for(key in amazon) {
    console.log(key); // THE accountNumber PROPERTY WON'T LOG HERE
}
console.log(amazon);
console.log("accountNumber:", amazon.accountNumber, "trackingNumber:", amazon.trackingNumber); // BUT IT EXISTS */



/* <---------- 3. PROTOTYPES EXAMPLE IN JAVASCRIPT ----------> */
// EXAMPLE 1
// EVERY FUNCTION HAS A PROTOTYPE PROPERTY
/* function hello() {
    console.log("Hello, World!");
}
console.log(hello.__proto__);
console.log(Function.prototype);

// EVERY OBJECT HAS A PROTOTYPE PROPERTY
let obj = {
    name: "John",
}
console.log(obj.__proto__);
console.log(Object.prototype);

// EVERY ARRAY HAS A PROTOTYPE PROPERTY
let arr = ["Dip", "Tom"];
console.log(arr.__proto__);
console.log(Array.prototype); */



/* <---------- 4. PROTOTYPE INHERITANCE EXAMPLE IN JAVASCRIPT ----------> */
// EXAMPLE 1
/* let obj = {
    name: "Dip",
    age: 25,
}
let obj2 = {
    name: "Tom",
    age: 27,
}
// WE PUTTING THE POLYFILL OF A FUNCTION
Object.prototype.sayHi = function() { // INHERITANCE
    console.log(`Hi My Name ${this.name}`);
}
obj.sayHi();
obj2.sayHi(); */



/* <---------- 5. PROTOTYPE CHAIN EXAMPLE IN JAVASCRIPT ----------> */
// EXAMPLE 1
/* let object = {
    name: "Dip",
    city: "Raghunathpur",
    getIntro: function() {
        console.log(`${this.name} From ${this.city}`);
    },
};
console.log("Object1-", object.__proto__);
console.log("Object2-", Object.prototype);
console.log("Object3-", object.__proto__.__proto__); // null (PROTOTYPE CHAIN ENDS HERE) */



/* <---------- 6. MULTILEVEL INHERITANCE EXAMPLE IN JAVASCRIPT ----------> */



/* <---------- 7. CONSTRUCTOR PROTOTYPES EXAMPLE IN JAVASCRIPT ----------> */
// EXAMPLE 1
// THIS PROPERTY IS USED TO ADD PROPERTIES AND METHODS TO OBJECTS CREATED WITH THE CONSTRUCTOR FUNCTION
/* function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHello = function () {
    console.log("Hello, my name is " + this.name);
}; */
