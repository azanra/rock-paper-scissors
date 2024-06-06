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
            break;
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
            break;
    }
}

function checkWinner(){
    if(playerScore > computerScore){
        console.log(`you win with a score of ${playerScore} against ${computerScore}`);
    }
    else if(playerScore === computerScore){
        console.log(`it's a tie with both score of ${playerScore}`);
    }
    else{
        console.log(`you lose with score of ${playerScore} against ${computerScore}`);
    }
}   

function playGame(){
    checkRock();
    checkPaper();
    checkSciccor();
    checkWinner();
}

function checkRock() {
    let rockBtn = document.querySelector('#rock');
    rockBtn.addEventListener('click', isRock);

    function isRock() {
        let playerSelection = "rock";
        let computerSelection = getComputerChoice();
        displayPlayerSelect(playerSelection);
        displayComputerSelect(computerSelection);
        displayRoundResult(playerSelection, computerSelection);
        displayPlayerScore(playerScore);
        displayComputerScore(computerScore);
    }
}

function checkPaper() {
    let paperBtn = document.querySelector('#paper');
    paperBtn.addEventListener('click', isPaper);
    
    function isPaper() {
        let playerSelection = 'paper';
        let computerSelection = getComputerChoice();
        displayPlayerSelect(playerSelection);
        displayComputerSelect(computerSelection);
        displayRoundResult(playerSelection, computerSelection);
        displayPlayerScore(playerScore);
        displayComputerScore(computerScore);
    }
}

function checkSciccor() {
    let sciccorBtn = document.querySelector('#sciccor');
    sciccorBtn.addEventListener('click', isSciccor);

    function isSciccor() {
        let playerSelection = 'sciccor';
        let computerSelection = getComputerChoice();
        displayPlayerSelect(playerSelection);
        displayComputerSelect(computerSelection);
        displayRoundResult(playerSelection,computerSelection);
        displayPlayerScore(playerScore);
        displayComputerScore(computerScore);
    }
}
 function displayPlayerSelect(playerSelection) {
    const playerContainer = document.querySelector('.display-playerSelect');
    const playerText = document.querySelector('.playerSelect-text');
    playerText.textContent = `Player selection : ${playerSelection}`;
    playerContainer.appendChild(playerText);
 }

 function displayComputerSelect(computerSelection) {
    const computerContainer = document.querySelector('.display-computerSelect');
    const computerText = document.querySelector('.computerSelect-text');
    computerText.textContent = `Computer selection : ${computerSelection}`;
    computerContainer.appendChild(computerText);
 }

 function displayRoundResult(playerSelection, computerSelection) {
    const resultContainer = document.querySelector('.display-roundResult');
    const roundText = document.querySelector('.roundText');
    roundText.textContent = `${playRound(playerSelection, computerSelection)}`;
    resultContainer.appendChild(roundText);
 }

 function displayPlayerScore(playerScore) {
    const playerScoreContainer = document.querySelector('.display-playerScore');
    const playerScoreText = document.querySelector('.playerScore-text');
    playerScoreText.textContent = `Player score : ${playerScore}`;
    playerScoreContainer.appendChild(playerScoreText);
 }

 function displayComputerScore(computerScore) {
    const computerScoreContainer = document.querySelector('.display-computerScore');
    const computerScoreText = document.querySelector('.computerScore-text');
    computerScoreText.textContent = `Computer score : ${computerScore}`;
    computerScoreContainer.appendChild(computerScoreText);
 }

let playerScore = 0;
let computerScore = 0;
playGame();


