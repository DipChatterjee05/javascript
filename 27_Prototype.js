// <---------- PROTOTYPE & PROTOTYPAL INHERITANCE IN JAVASCRIPT ---------->
// <---------- 1. EXAMPLE 1 ---------->
// <---------- 1. USING ARRAYS ---------->
/* let array = ["Dip", "Indira", "Jerry"];
console.log("Array1-", array.__proto__);
console.log("Array2-", Array.prototype);
console.log("Array3-", array.__proto__.__proto__);
console.log("Array4-", Object.prototype);
console.log("Array5-", array.__proto__.__proto__.__proto__); // null (PROTOTYPE CHAIN ENDS HERE) */


// <---------- 2. USING OBJECTS ---------->
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


// <---------- 3. USING FUNCTIONS ---------->
/* function hello() {
    // console.log("Hello");
}
console.log("Function1-", hello.__proto__);
console.log("Function2-", Function.prototype);
console.log("Function3-", hello.__proto__.__proto__);
console.log("Function4-", Object.prototype);
console.log("Function5-", hello.__proto__.__proto__.__proto__); // null (PROTOTYPE CHAIN ENDS HERE) */



// <---------- 2. EXAMPLE 2 ---------->
/* let object = {
    name: "Dip",
    city: "Raghunathpur",
    getIntro: function () {
        console.log(`${this.name} From ${this.city}`);
    },
};

let object2 = {
    name: "Indira",
};
console.log("1", object2.__proto__);
console.log("2", Object.prototype);

// NEVER DO THIS
object2.__proto__ = object; // FORCEFULLY SETUP THE object2 PROTOTYPE INTO object
console.log("3", object2.__proto__);

console.log(object2.name);
console.log(object2.city); // object2 INHERIT PROPERTIES OF object THIS IS KNOWN AS PROTOTYPAL INHERITANCE
console.log(object2.getIntro()); // object2 INHERIT METHODS OF object THIS IS KNOWN AS PROTOTYPAL INHERITANCE */



// <---------- 3. EXAMPLE 3 ---------->
// WE CAN CREATE OUR OWN POLYFILL USING THIS
/* Function.prototype.myBind = function () {
    console.log("Hello, World!");
}
function hello () {}
console.log(hello.__proto__.myBind()); */
