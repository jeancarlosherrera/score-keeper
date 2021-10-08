const score1Display = document.querySelector("#score1Display");
const score2Display = document.querySelector("#score2Display");
const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const clearButton = document.querySelector("#reset");
const playTo = document.querySelector("#playTo");

let p1Score = 0;
let p2Score = 0;

let winningScore = 3;
let isGameOver = false;


p1Button.addEventListener("click", function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            score1Display.classList.add("has-text-success");
            score2Display.classList.add("has-text-danger");
            p1Button.disabled = true;
            p2Button.disabled = true;

        }
        score1Display.textContent = p1Score;
    }
})

p2Button.addEventListener("click", function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            score2Display.classList.add("has-text-success");
            score1Display.classList.add("has-text-danger");
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        score2Display.textContent = p2Score;
    }
})

playTo.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    reset();
})

clearButton.addEventListener("click", reset)

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    score1Display.textContent = 0;
    score2Display.textContent = 0;
    score1Display.classList.remove("has-text-success", "has-text-danger");
    score2Display.classList.remove("has-text-success", "has-text-danger");
    p1Button.disabled = false;
    p2Button.disabled = false;
}