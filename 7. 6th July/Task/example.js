const addTaskButton = document.querySelector("#addTaskButton");
addTaskButton.addEventListener("click", () => {
    const input = document.querySelector("#taskInput");
    const newTask = document.createElement("li");
    newTask.innerText = input.value;
    const list = document.querySelector("#list");
    list.appendChild(newTask);
});
