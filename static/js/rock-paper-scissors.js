function getComputerChoice(){
    const CHOICE = ["rock", "paper", "scissors"];

    let index = Math.floor(Math.random() * CHOICE.length);
    return CHOICE[index]
}
