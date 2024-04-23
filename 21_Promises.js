// <---------- PROMISES ---------->
// <---------- 1. WHY WE USE PROMISES ---------->
/* const cart = ["pants", "shirts", "shoes"];
createOrder(cart, function(orderId) {
    proceedToPayment(orderId);
}); // USING CALLBACK THERE IS ISSUE - INVERSION OF CONTROL */


/* const cart = ["pants", "shirts", "shoes"];
const promise = createOrder(cart); // { data: undefined }
promise.then(function (orderId) {
    proceedToPayment(orderId);
}); // USING PROMISES THE CALLBACK FUNCTION IS ONLY CALLED WHEN THE DATA IS INSIDE THE PROMISE OBJECT */


// <---------- 2. PROMISE OBJECT IN BROWSER ---------->
/* const URL = "https://...........";
const promise = fetch(URL);
console.log(user);
promise.then(function(data) {
    console.log(data);
}); */


// <---------- 3. PROMISE CHAINING IN JAVASCRIPT ---------->
/* const cart = ["pants", "shirts", "shoes"];
createOrder(cart, function (orderId) {
    proceedToPayment(orderId, function (paymentInfo) {
        showOrderSummary(paymentInfo, function (paymentInfo) {
            updateWallet(paymentInfo);
        });
    });
}); // USING CALLBACK WE FACE THE PROBLEM CALLBACK HELL PYRAMID OF DOOM */


// PROMISE CHAINING
/* createOrder(cart)
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        return showOrderSummary(paymentInfo);
    })
    .then(function (paymentInfo) {
        return updateWallet(paymentInfo);
    }); */
