function getComputerChoice() {
    let arrayChoice = ["rock", "paper", "sciccor"];
    return arrayChoice[(Math.floor(Math.random() * arrayChoice.length))];
}

function playerWin(){
    return playerScore++;
}

function playerLose(){
    return computerScore++;
}

function playRound(playerSelection, computerSelection){
    switch(playerSelection) {
        case "paper":
            if(computerSelection === "paper"){
                return("it's a tie, you both draw paper!");
            }
           else if(computerSelection === "rock"){
                playerWin();
                return("you win!, paper beats rock!");
            }
            else{
                playerLose();
                return("you lose!, sciccor beats paper!");
            }
            break;
        case "rock":
            if(computerSelection === "rock"){
                return("it's a tie, you both draw rock!");
            }
            else if(computerSelection === "sciccor"){
                playerWin();
                return("you win!, rock beats sciccor!");
            }
            else{
                playerLose();
                return("you lose!, paper beats rock!");
            }
        case "sciccor":
            if(computerSelection === "sciccor"){
                return("it's a tie, you both draw sciccor");
            }
            else if(computerSelection === "paper"){
                playerWin();
                return("you win!, sciccor beats paper!");
            }
            else{
                playerLose();
                return("you lose!, rock beats sciccor!");
            }
    }
}

function checkWinner(){
    if(playerScore > computerScore){
        console.log(`you win with a score of ${playerScore} agaisnt ${computerScore}`);
    }
    else if(playerScore === computerScore){
        console.log(`it's a tie with both score of ${playerScore}`);
    }
    else{
        console.log(`you lose with score of ${playerScore} against ${computerScore}`);
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){
        const oldPlayerSelection = prompt("Enter between rock, paper, sciccor!: ");
        const playerSelection = oldPlayerSelection.toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }   
    checkWinner();
}

let playerScore = 0;
let computerScore = 0;
playGame();


