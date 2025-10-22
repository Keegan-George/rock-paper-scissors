/**
 *  Returns a string representing one of three possible random computer choices: rock, paper, or scissors.
 */
function getComputerChoice() {
    const CHOICE = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * CHOICE.length);

    return CHOICE[index];
}


/**
 * Compares the player and the computer choices and returns an integer indicating if the player has won.
 */
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()

    let draw = (humanChoice === computerChoice);

    let win = (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper");

    if (draw) return -1;

    else if (win) return 1;

    else return 0;
}

/**
 * Displays the updated player choices to the screen. 
 */
function updateChoiceDisplay(playerChoice, computerChoice) {
    const playerChoiceDisplay = document.querySelector(".player-choice");
    const computerChoiceDisplay = document.querySelector(".computer-choice");

    playerChoiceDisplay.textContent = playerChoice;
    computerChoiceDisplay.textContent = computerChoice;
}


/**
 * Displays the updated scores to the screen. 
 */
function updateScoreDisplay(playerScore, computerScore) {
    const playerScoreDisplay = document.querySelector(".player-score");
    const computerScoreDisplay = document.querySelector(".computer-score");

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

/**
 * Displays the updated result of this round to the screen.
 */
function updateRoundResult(result) {
    const resultDisplay = document.querySelector(".round-result");
    resultDisplay.textContent = result;
}

/**
 * Launches the game and tracks scores. 
 */

function playGame() {
    // track scores
    let humanScore = 0;
    let computerScore = 0;
    const goal = 5;

    // button event listener
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            let humanChoice = button.textContent;
            let computerChoice = getComputerChoice();

            result = playRound(humanChoice, computerChoice);
            
            if (result === -1){
                resultLabel = "Draw";
            }
            if (result === 1) {
                humanScore++;
                resultLabel = `You win! ${humanChoice} beats ${computerChoice}`;
            }
            else if (result === 0) {
                computerScore++;
                resultLabel = `You Lose. ${computerChoice} beats ${humanChoice}`;
            }

            updateRoundResult(resultLabel);
            updateChoiceDisplay(humanChoice, computerChoice);
            updateScoreDisplay(humanScore, computerScore);
        });
    });

    // if (humanScore == goal):
    // pass
}

playGame();

