const CHOICE = ["rock", "paper", "scissors"];

function getComputerChoice(){
    var index = Math.floor(Math.random() * CHOICE.length);
    return CHOICE[index]
}
