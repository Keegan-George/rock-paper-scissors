/**
 *  Returns a random string representing one of three possible computer choices: rock, paper, or scissors.
 */
function getComputerChoice() {
    const CHOICE = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * CHOICE.length);

    return CHOICE[index];
}

/**
 * Prompt the player for their choice and return it.
 */
function getHumanChoice() {
    let humanChoice = prompt("Make your choice (Type 'rock', 'paper', or 'scissors'.)").toLowerCase();

    return humanChoice;
}

/**
 * Handles the win logic by comparing the choices of the computer and the player. 
 * Returns an integer (-1, 0, or 1) if the player has drawn, lost, or won accordingly against the computer.
 */
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return -1;
    }

    else if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        return 1;
    }
    else {
        return 0;
    }
}

/**
 * Runs the game for the specified number of rounds, tracking scores and displaying results to the screen. 
 */

function playGame() {
    const ROUNDS = 5;
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < ROUNDS; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        result = playRound(humanSelection, computerSelection);

        switch (result) {
            case -1:
                console.log("Draw.")
                break;

            case 1:
                console.log(`You win! ${humanSelection} beats ${computerSelection}.`)
                humanScore++;
                break;

            case 0:
                console.log(`You lose! ${computerSelection} beats ${humanSelection}.`)
                computerScore++;
                break;
        }

        console.log(`Current score | player: ${humanScore}    computer: ${computerScore}`)
    }

}


playGame();

