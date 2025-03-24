// <----- 1. Logical AND (&&) & Logical OR (||) ------>

// let a = true;
// let a = false;
// let b = true;
// let b = false;
// function getName(name) {
//     return name;
// }
// if both the value is true than only return true
// console.log(a && b); // output - true
// console.log(a && b); // output - false
// 1. if both the value is true than return true
// 2. if one of them is false it return false
// 3. if first one is false than it will not execute next checking return false
// console.log(a && getName("Dip Chatterjee"));
// 1. if one of the value is true it's return true
// console.log(a || b); // output - true
// console.log(a || b); // output - true
// console.log(a || getName("Dip Chatterjee"));



// <----- 2. Template Literal (``) ------>
// let firstName = "Dip";
// let lastName = "Chatterjee";
// console.log(firstName + " " + lastName); // using normal concatenation
// console.log(`${firstName} ${lastName}`); // using template literal



// <----- 3. Ternary Operator (? :) ------>
// let showRecipeOne = true;
// function getRecipeOneName(name) {
//     return name;
// }
// function getRecipeTwoName(name) {
//     return name;
// }
// if (showRecipeOne) {
//     console.log(getRecipeOneName("Pizza!"));
// } else {
//     console.log(getRecipeTwoName("Coke!"));
// }
// condition ? statement1 : statement2
// showRecipeOne ? console.log(getRecipeOneName("Pizza!")) : console.log(getRecipeTwoName("Coke!"));



// <----- 4. Destructuring In Objects & Arrays ------>
// let product = {
//     id: 1,
//     productName: "Xiaomi Smart TV",
//     rating: 4.8,
// };
// let product2 = {
//     id: 2,
//     productName: "Apple Smart Watch",
//     rating: 4.5,
// };
// console.log(product, product2);
// let { id, productName, rating } = product;
// console.log(id, productName, rating);

// let array = [1, 2, 3];
// let arrayFirstValue = array[0];
// let arraySecondValue = array[1];
// console.log(arrayFirstValue, arraySecondValue);
// let [arrayFirstElement, arraySecondElement, arrayThirdElement] = array;
// console.log(arrayFirstElement, arraySecondElement, arrayThirdElement);



// <----- 5. Default Parameter, Spread & Rest Operators ------>
// Default Parameter
