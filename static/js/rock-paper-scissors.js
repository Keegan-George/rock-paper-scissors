function getComputerChoice(){
    const CHOICE = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * CHOICE.length);

    return CHOICE[index];
}

function getHumanChoice(){
    let humanChoice = prompt("Make your choice (Type 'rock', 'paper', or 'scissors')");

    return humanChoice;
}