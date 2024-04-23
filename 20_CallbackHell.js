// <---------- CALLBACK HELL ---------->
// <---------- 1. EXAMPLE 1 (NORMAL CALLBACK FUNCTION) ---------->
/* console.log("Hello");
setTimeout(() => {
    console.log("Callback");
}, 5000);
console.log("World"); */


// <---------- 2. EXAMPLE 2 (CALLBACK HELL) ---------->
/* const cart = ["shoes", "pants", "shirts"];
api.createOrder(cart, function (oderId) {
    api.showOrderSummary(oderId, () => {
        api.proceedToPayment(() => {
            api.updateWallet();
        });
    });
});
// PYRAMID OF DOOM */


// <---------- EXAMPLE 3 (INVERSION OF CONTROL) ---------->
/* const cart = ["shoes", "pants", "shirts"];
api.createOrder(cart, function () {
    api.proceedToPayment();
});
// WE LOOSE THE CONTROL OF OUR CODE WHILE USING CALLBACK */
