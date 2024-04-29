function displayRandomNumber() {
    const pTag = document.querySelector("#num");
    const randomNumber = Math.floor(Math.random()*41)-20;
    pTag.innerText = randomNumber;
}