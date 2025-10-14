// global variables to track player scores
let humanScore = 0;
let computerScore = 0;

/**
 *  Returns a string representing one of three possible choices: rock, paper, or scissors.
 */
function getComputerChoice() {
    const CHOICE = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * CHOICE.length);

    return CHOICE[index];
}

/**
 * Prompt the user for their choice and returns it.
 */
function getHumanChoice() {
    let humanChoice = prompt("Make your choice (Type 'rock', 'paper', or 'scissors')").toLowerCase();

    return humanChoice;
}

/**
 * Takes the human and computer choices as inputs and returns the corresponding winner.
 */
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Draw.")
    }

    else if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore += 1;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
    }
    else {
        computerScore += 1;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
    }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);