/* <---------- 1. HOW EVENT LISTENERS WORK IN JAVASCRIPT ----------> */
// ADDING AN EVENT LISTENER (SINGLE 'click' EVENT)
/* const button = document.querySelector("#changeButton");
const test = button.addEventListener("click", () => {
    const h1 = document.querySelector("h1");
    h1.innerText = "Hello, Dip Chatterjee";
}); */


// ADDING AN EVENT LISTENER (DOUBLE 'dblclick' EVENT)
/* const button = document.querySelector("#changeButton");
const test = button.addEventListener("dblclick", () => {
    const h1 = document.querySelector("h1");
    h1.innerText = "Hello, Dip Chatterjee";
}); */



/* <---------- 2. CREATING & ADDING HTML ELEMENTS TO PAGE IN JAVASCRIPT ----------> */
// 1. SELECTING THE 'addTaskButton'
/* const addTaskButton = document.querySelector("#addTaskButton");
// 2. ADDING EVENT LISTENER ON THE BUTTON
addTaskButton.addEventListener("click", () => {
    // 3. NOW SELECTING THE INPUT FIELD
    const input = document.querySelector("#taskInput");
    // 4. NOW WE CREATE NEW ELEMENT IN THE OL
    const newTask = document.createElement("li");
    // 5. NOW SETTING UP THE INNER TEXT OF THE LI USING INPUT VALUE
    newTask.innerText = input.value;
    // 6. NOW SELECTING THE LIST
    const list = document.querySelector("#list");
    list.appendChild(newTask);
}); */



/* <---------- 3. HOW TO WRITE CLEAN AND LOGICAL CODE IN JAVASCRIPT ----------> */
/* const MAX_SUBMISSION_DAY = 5; // MAGIC VARIABLE SNAKE_UPPERCASE
let noOfDaysFromCreation = prompt("How many days ago created!");
if(noOfDaysFromCreation > MAX_SUBMISSION_DAY) {
    alert("Sorry You Are Late!");
} else {
    alert("You Have " + (MAX_SUBMISSION_DAY - noOfDaysFromCreation) + " Remaining");
} */
