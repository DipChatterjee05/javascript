/* <---------- REVISION DOM ----------> */
// 1. TO FETCH ELEMENTS BY TAG NAME
/* const elements = document.getElementsByTagName("h1");
console.log(elements); */


// 2. TO FETCH ELEMENT BY ID
/* const idDiv = document.getElementById("test");
console.log(idDiv); */


// 3. TO FETCH ELEMENTS BY CLASSNAMES
/* const classDiv = document.getElementsByClassName("test2");
console.log(classDiv.map(()=>{})); // IT WON'T WORK BECAUSE IT NOT A ORIGINAL ARRAY IT'S A HTML COLLECTION OR NODE LIST

// ONLY FOR OF AND LENGTH WORK ON HTML COLLECTION OR NODE LIST
for(let element of classDiv) {
    console.log(element);
}
console.log(classDiv.length); */


// 4. TO FETCH ONE ELEMENT BY ANYTHING
/* const idDiv = document.querySelector("#test");
console.log(idDiv); */


// 4. TO FETCH ELEMENTS BY ANYTHING
/* const h1 = document.querySelectorAll("h1");
console.log(h1); */


// 5. TO CHANGE THE INNER TEXT
/* const h1 = document.querySelector("h1");
h1.innerText = h1.innerText + " " + "JavaScript!!!"; */


// 6. TO CHANGE THE INPUT VALUE
/* const input = document.querySelector("#text");
input.value = "Hello"; */


// 7. TO ADD ELEMENTS IN THE DOM TREE
/* const h1 = document.createElement("h1");
h1.innerText = "Hi I Am H1";
const create = document.querySelector("#create")
create.appendChild(h1); */


// 8. EVENT LISTENERS
/* const button = document.querySelector("#addTodo");
button.addEventListener("click", ()=> {
    const input = document.querySelector("#todo");
    const newTask = document.createElement("li");
    newTask.innerText = input.value;

    newTask.addEventListener("click", (e) => {
        const taskDone = e.target;
        // taskDone.classList.add("completed");
        taskDone.classList.toggle("completed"); // TO APPLY THE CSS
        // taskDone.id = "Hello"; // TO ADD ID
    })

    const listOfTodo = document.querySelector("#listOfTodo");
    const children = listOfTodo.children;
    children[0].appendChild(newTask);
}); */
