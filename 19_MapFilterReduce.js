// <---------- MAP, FILTER & REDUCE ---------->
// <---------- 1. MAP FUNCTION EXAMPLE ---------->
// <---------- EXAMPLE 1 ---------->
/* const array = [5, 1, 3, 2, 6];

function double(x) {
    return x * 2;
}
function triple(x) {
    return x * 3;
}
function binary(x) {
    return x.toString(2);
}
const output = array.map(binary);
console.log(output);


// <---------- EXAMPLE 2 ---------->
const output2 = array.map(function(x) {
    return x + 100;
});
console.log(output2);


// <---------- EXAMPLE 3 ---------->
const output3 = array.map((x) => {
    return x + 1000;
});
console.log(output3); */


// <---------- 2. FILTER FUNCTION EXAMPLE ---------->
// <---------- EXAMPLE 1 ---------->
/* const array = [5, 1, 3, 2, 6];

const output = array.filter((x) => {
    return x % 2;
});
console.log(output);

const output2 = array.filter((x) => {
    return x % 2 === 0;
});
console.log(output2);

const output3 = array.filter((x) => {
    return x > 4;
});
console.log(output3); */



// <---------- 3. REDUCE FUNCTION EXAMPLE ---------->
// <---------- EXAMPLE 1 ---------->
/* const array = [5, 1, 3, 2, 6];

// POLYFILL OF REDUCE FUNCTION TO FIND OUT SUM
function findSum(param) {
    let sum = 0;
    for (let i = 0; i < param.length; i++) {
        sum = sum + param[i];
    }
    return sum;
}
console.log(findSum(array)); 

// ACTUAL REDUCE FUNCTION
const output = array.reduce((previousValue, currentValue) => {
    previousValue = previousValue + currentValue;
    return previousValue;
},0);
console.log(output); 


// <---------- EXAMPLE 2 ---------->
// POLYFILL OF REDUCE FUNCTION TO FIND OUT MAX
function findMax(param) {
    let max = 0;
    for (let i = 0; i < param.length; i++) {
        if (param[i] > max) {
            max = param[i];
        }
    }
    return max;
}
console.log(findMax(array));

// ACTUAL REDUCE FUNCTION
const output = array.reduce((previousValue, currentValue) => {
    if (currentValue > previousValue) {
        previousValue = currentValue;
    }
    return previousValue;
}, 0)
console.log(output); */



// <---------- 4. MORE FUNCTION EXAMPLES ---------->
/* const users = [
    {
        firstName: "Dip",
        lastName: "Chatterjee",
        age: 24,
    },
    {
        firstName: "Indira",
        lastName: "Banerjee",
        age: 24,
    },
    {
        firstName: "Hello",
        lastName: "World",
        age: 75,
    },
    {
        firstName: "Jerry",
        lastName: "Chatterjee",
        age: 26,
    },
]; */

// <---------- 1ST TASK LIST OF FULL NAMES (MAP) ---------->
/* const output = users.map((user) => {
    return user.firstName + " " + user.lastName;
});
console.log(output); */


// <---------- 2ND TASK AGE GROUP (REDUCE) ---------->
/* const output = users.reduce((previousValue, currentValue) => {
    if(previousValue[currentValue.age]) {
        previousValue[currentValue.age] = ++previousValue[currentValue.age];
    } else {
        previousValue[currentValue.age] = 1;
    }
    return previousValue;
}, {});
console.log(output); */


// <---------- 3RD TASK TAKE OUT FIRST NAME OF ALL THE PEOPLE WHO'S AGE IS LESS THAN 30 (FILTER) ---------->
/* const output = users.filter((x) => {
    return x.age < 30;
}).map((x) => {
    return x.firstName;
});
console.log(output); */


// <---------- 4TH TASK TAKE OUT FIRST NAME OF ALL THE PEOPLE WHO'S AGE IS LESS THAN 30 (REDUCE) ---------->
/* const output = users.reduce((previousValue, currentValue) => {
    if(currentValue.age < 30) {
        previousValue.push(currentValue.firstName);
    }
    return previousValue;
}, []);
console.log(output); */
