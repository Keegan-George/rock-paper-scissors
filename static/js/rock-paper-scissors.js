// global variables to track player scores
let humanScore = 0;
let computerScore = 0;

/**
 *  Returns a string representing one of three possible choices: rock, paper, or scissors.
 */
function getComputerChoice(){
    const CHOICE = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * CHOICE.length);

    return CHOICE[index];
}

/**
 * 
 * Prompt the user for their choice and returns it.
 */
function getHumanChoice(){
    let humanChoice = prompt("Make your choice (Type 'rock', 'paper', or 'scissors')");

    return humanChoice;
}