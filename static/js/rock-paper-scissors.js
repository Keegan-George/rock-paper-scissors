/**
 *  Returns a random string representing one of three possible computer choices: rock, paper, or scissors.
 */
function getComputerChoice() {
    const CHOICE = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * CHOICE.length);

    return CHOICE[index];
}


/**
 * Compares the player and the computer choices and returns an integer indicating if the player has won
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
 * Launches the game, tracks scores, and displays results to the screen. 
 */

function playGame() {
    // track scores
    let humanScore = 0;
    let computerScore = 0;
    const TARGET_SCORE = 5;

    // button event listener
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            let humanChoice = button.textContent;
            let computerChoice = getComputerChoice();

            console.log(`Human Choice: ${humanChoice}`);
            console.log(`Computer Choice: ${computerChoice}`);

            console.log(playRound(humanChoice, computerChoice));
        });
    });



    




    // const ROUNDS = 5;

    

    // for (let i = 0; i < ROUNDS; i++) {
    //     let computerSelection = getComputerChoice();

    //     result = playRound(playerChoice, computerSelection);

    //     switch (result) {
    //         case -1:
    //             console.log("Draw.")
    //             break;

    //         case 1:
    //             console.log(`You win! ${playerChoice} beats ${computerSelection}.`)
    //             humanScore++;
    //             break;

    //         case 0:
    //             console.log(`You lose! ${computerSelection} beats ${playerChoice}.`)
    //             computerScore++;
    //             break;
    //     }

    //     console.log(`Current score | player: ${humanScore}    computer: ${computerScore}`)
    // }

}


playGame();

