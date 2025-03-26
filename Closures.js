// <---------- CLOSURES ---------->
function createCounter() {
    let count = 0; // This is a private variable

    return function() {
        count++; // The inner function has access to 'count'
        return count;
    };
};

const counter = createCounter();

console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
