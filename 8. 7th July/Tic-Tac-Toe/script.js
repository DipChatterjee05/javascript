const CONSTANT = {
    X: "X",
    O: "O",
    PLAYER_1: "Player1",
    PLAYER_2: "Player2"
};

let currentPlayer = CONSTANT.PLAYER_1;

let currentGameSymbol = CONSTANT.X;

let gameBoard = document.querySelector("#gameBoard");
const buttons = gameBoard.childNodes;

for(button of buttons) {
    button.addEventListener("click", () => {
        playNextMove();
    });
}

function playNextMove(event) {
    if(event.target.innerText) {
        return;
    }
    event.target.innerText = currentGameSymbol;
    currentGameSymbol = currentGameSymbol === CONSTANT.X ? CONSTANT.O : CONSTANT.X;
    currentPlayer = currentPlayer === CONSTANT.PLAYER_1 ? CONSTANT.PLAYER_2 : CONSTANT.PLAYER_1;
}
