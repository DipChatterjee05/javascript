const calculator = document.querySelector("#calculator");

calculator.addEventListener("click", (event) => {
    const operation = event.target.innerText;
    const number1 = Number.parseInt(document.querySelector("#number1").value);
    const number2 = Number.parseInt(document.querySelector("#number2").value);
    let result = 0;
    if (operation === "+") {
        result = number1 + number2;
    } else if (operation === "-") {
        result = number1 - number2;
    } else if (operation === "*") {
        result = number1 * number2;
    } else if (operation === "/") {
        result = number1 / number2;
    }

    const inputResult = document.querySelector("#result");
    inputResult.value = result;
});
