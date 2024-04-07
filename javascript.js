function getComputerChoice() {
    let arrayChoice = ["rock", "paper", "sciccor"];
    return arrayChoice[(Math.floor(Math.random() * arrayChoice.length))];
}

function playRound(playerSelection, computerSelection){
    switch(playerSelection) {
        case "paper":
            if(computerSelection === "paper"){
                return("it's a tie, you both draw paper!");
            }
            else if(computerSelection === "rock"){
                return("you win!, paper beats rock!");
            }
            else{
                return("you lose!, sciccor beats paper!");
            }
            break;
        case "rock":
            if(computerSelection === "rock"){
                return("it's a tie, you both draw rock!");
            }
            else if(computerSelection === "sciccor"){
                return("you win!, rock beats sciccor!");
            }
            else{
                return("you lose!, paper beats rock!");
            }
        case "sciccor":
                if(computerSelection === "sciccor"){
                    return("it's a tie, you both draw sciccor");
                }
                else if(computerSelection === "paper"){
                    return("you win!, sciccor beats paper!");
                }
                else{
                    return("you lose!, rock beats sciccor!");
                }
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){
        const oldPlayerSelection = prompt("Enter between rock, paper, sciccor!: ");
        const playerSelection = oldPlayerSelection.toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }   
}

playGame();


