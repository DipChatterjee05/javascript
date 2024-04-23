// <---------- ASYNC AWAIT ---------->
// <---------- 1. WHAT IS ASYNC? ---------->
/* const promise = new Promise((resolve, reject) => {
    resolve("Promise Resolved");
});
// ASYNC FUNCTION ALWAYS RETURN A PROMISE
async function getData() {
    return "Hello World";
}
const dataPromise = getData(); // IN THE dataPromise THE PROMISE STATUS IS SAVED
console.log(dataPromise); // PROMISE STATUS
dataPromise.then((response) => console.log(response)); // WE PRINT THE PROMISE VALUE */


// <---------- 2. WHAT IS AWAIT? ---------->
/* const promise = new Promise((resolve, reject) => {
    resolve("Promise Resolved");
});
// HOW WE HANDLE PROMISES BEFORE ASYNC AWAIT
function getData() {
    promise.then((response) => {
        console.log(response);
    });
}
getData();
// HOW WE HANDLE PROMISES USING ASYNC AWAIT
async function handlePromise() {
    const data = await promise; // AWAIT CAN ONLY BE USED INSIDE AN ASYNC FUNCTION
    console.log(data);
}
handlePromise(); */


// <---------- 3. DIVING DEEP INTO ASYNC AWAIT? ---------->
/* const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise1 Resolved Value");
    }, 10000);
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise2 Resolved Value");
    }, 5000);
});

// OLDER WAY TO HANDLING PROMISE
function getData() {
    promise.then((response) => console.log(response));
    console.log("Hello World"); // THIS WILL PRINTED FIRST THEN THE PROMISE DATA
}
getData();

// USING ASYNC AWAIT HANDLING PROMISE
async function handlePromise() {
    console.log("Hello World");
    const data = await promise1; // JS ENGINE WILL WAIT FOR PROMISE TO BE RESOLVED
    console.log("Hello Promise1");
    console.log(data);

    const data2 = await promise2; // EVEN PROMISE2 TAKES 5 SECONDS BUT PROMISE1 PRINTED FIRST
    console.log("Hello Promise2"); // BUT IF WE REVERSE THE ORDER THAN PROMISE2 PRINTED FIRST
    console.log(data2);
}
handlePromise(); */


// <---------- 4. HOW ASYNC AWAIT WORKS BEHIND THE SCENE? ---------->
// <---------- 5. REAL LIFE EXAMPLE OF ASYNC AWAIT ---------->
/* const API_URL = "https://dummyjson.com/products";
async function getData() {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
}
getData(); */


// <---------- 6. ERROR HANDLING IN ASYNC AWAIT ---------->
/* const API_URL = "https://dummyjson.com/products";
async function getData() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Hello I Am Finally");
    }
}
getData(); */


// <---------- 7. INTERVIEW QUESTIONS IN ASYNC AWAIT ---------->
// <---------- 8. ASYNC AWAIT VS PROMISE .THEN .CATCH ---------->
