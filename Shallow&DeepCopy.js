// <---------- SHALLOW COPY & DEEP COPY ---------->

// Original object with a nested object
const originalObject = {
    name: "Alice",
    details: {
        age: 25,
        city: "Wonderland",
    },
};

// Shallow copy using spread operator
const shallowCopy = { ...originalObject };

// Deep copy using structuredClone
const deepCopy = structuredClone(originalObject);

// Modifying the nested object in the original
originalObject.details.age = 26;

console.log(originalObject.details.age); // Output: 26
console.log(shallowCopy.details.age); // Output: 26
console.log(deepCopy.details.age); // Output: 25
