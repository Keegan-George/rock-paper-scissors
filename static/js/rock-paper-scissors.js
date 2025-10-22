/**
 *  Returns a string representing one of three random computer choices: rock, paper, or scissors.
 */
function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"];
    let index = Math.floor(Math.random() * choice.length);

    return choice[index];
}


/**
 * Compares the player and the computer choices and returns an array containing:
 *  - an integer to indicate the winner.
 *  - an array with the corresponding human and computer choices. 
 */
function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()

    const draw = (playerChoice === computerChoice);

    const win = (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper");

    let winner;
    let choices = [playerChoice, computerChoice];

    if (draw) winner = -1;

    else if (win) winner = 1;

    else winner = 0;

    return [winner, choices]
}


/**
 * Displays the current player and computer choices. 
 */
function displayChoices(playerChoice, computerChoice) {
    const playerChoiceDisplay = document.querySelector(".player-choice");
    const computerChoiceDisplay = document.querySelector(".computer-choice");

    playerChoiceDisplay.textContent = playerChoice;
    computerChoiceDisplay.textContent = computerChoice;
}


/**
 * Displays the current scores.
 */
function displayScore(playerScore, computerScore) {
    const playerScoreDisplay = document.querySelector(".player-score");
    const computerScoreDisplay = document.querySelector(".computer-score");

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}


/**
 * Displays the winner of the current round.
 */
function displayRoundWinner(result) {
    const resultDisplay = document.querySelector(".round-result");

    const winner = result[0];
    const playerChoice = result[1][0];
    const computerChoice = result[1][1];

    if (winner === -1) {
        resultLabel = "Draw";
    }
    else if (winner === 1) {
        resultLabel = `You win! ${playerChoice} beats ${computerChoice}`;
    }
    else {
        resultLabel = `You Lose. ${computerChoice} beats ${playerChoice}`;
    }

    resultDisplay.textContent = resultLabel;
}


/**
 * Displays the winner of the game.
 */
function displayGameWinner(humanScore, computerScore, target) {
    const winner_display = document.querySelector(".game-winner");

    if (humanScore === target) {
        winner_display.textContent = "You win the game!"
    }

    else if (computerScore == target) {
        winner_display.textContent = "Computer wins the game. Refresh the page to try again."
    }
}


/**
 * Launches the game and tracks scores. 
 */

function playGame() {
    // track scores
    let humanScore = 0;
    let computerScore = 0;
    const target = 5;

    // button event listener
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            let humanChoice = button.textContent;
            let computerChoice = getComputerChoice();

            result = playRound(humanChoice, computerChoice);

            winner = result[0];

            if (winner === 1) {
                humanScore++;
            }
            else if (winner === 0) {
                computerScore++;
            }

            displayRoundWinner(result);
            displayChoices(humanChoice, computerChoice);
            displayScore(humanScore, computerScore);
            displayGameWinner(humanScore, computerScore, target);
        });
    });
}

playGame();

