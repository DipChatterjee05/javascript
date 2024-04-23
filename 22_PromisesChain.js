// <---------- PROMISES CHAIN ---------->
// <---------- 1. CREATING A PROMISE (CONSUMER PART) ---------->
/* const cart = ["item1", "item2", "item3"];

const promise = createOrder(cart);
console.log(promise); // PROMISE IS IN PENDING STATE

promise.then(function (orderId) {
    console.log(orderId);
    console.log(promise);
})
.catch((error) => {
    console.log(error.message);
});

// CREATING A PROMISE (DEVELOPER/PRODUCER PART)
function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) { // PROMISE HAS ONLY TWO STATES
        if (!validateCart(cart)) {
            const error = new Error("Cart Is Not Valid");
            reject(error);
        }
        const orderId = "123456789";
        if (orderId) {
            setTimeout(() => {
                resolve(orderId);
            }, 5000);
        }
    });
    return pr;
}

function validateCart(cart) {
    return true;
    // return false;
} */


// <---------- 2. ADVANCED PROMISE CHAINING ---------->
/* const cart = ["item1", "item2", "item3"];

createOrder(cart)
    .then(function (orderId) {
        console.log(orderId);
        return orderId; // WE ALWAYS HAVE TO RETURN WHILE CHAINING
    })
    .then(function (orderId) {
        return proceedToPayment(orderId); // ITS A NEW PROMISE
    })
    .then(function (paymentInfo) { // IT HANDLE THE proceedToPayment PROMISE
        console.log(paymentInfo);
    })
    .catch((error) => {
        console.log(error.message); // THIS CATCH HANDLE ALL THE ABOVE ERRORS
    })
    .then(function () {
        console.log("This Then Will Definitely Call");
    })

// CREATING A PROMISE (DEVELOPER/PRODUCER PART)
function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            const error = new Error("Cart Is Not Valid");
            reject(error);
        }
        const orderId = "123456789";
        if (orderId) {
            setTimeout(() => {
                resolve(orderId);
            }, 5000);
        }
    });
    return pr;
}

function proceedToPayment() {
    return new Promise(function (resolve, reject) {
        resolve("Payment Successful");
    })
}

function validateCart() {
    return true;
} */
