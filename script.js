// Random Computer choice function
function computerPlay() {
    let choicesList = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * choicesList.length);
    return choicesList[randomChoice];
}

// Round play function
function playRound(playerSelection, computerSelection) {
    let playerSelected = playerSelection.toLowerCase(); // Making sure player can input any variation of text
    if(playerSelected == computerSelection) {
        return "It's a tie!"
    }
    else if (playerSelected == "rock" && computerSelection == "scissors"){
        return "You win! Rock beats Scissors"
    }
    else if(playerSelected == "paper" && computerSelection == "rock"){
        return "You win! Paper beats Rock"
    }
    else if(playerSelected == "scissors" && computerSelection == "paper"){
        return "You win! Scissors beats Paper"
    } // Win conditions
    else if (computerSelection == "rock" && playerSelected == "scissors"){
        return "You lose! Rock beats Scissors"
    }
    else if(computerSelection == "paper" && playerSelected == "rock"){
        return "You lose! Paper beats Rock"
    }
    else if(computerSelection == "scissors" && playerSelected == "paper"){
        return "You lose! Scissors beats Paper"
    } // Lose conditions  
}

// Game function
function game() {
    for(let i = 1; i <= 5; i++) {
        playerSelection = prompt("What is your choice?");
        console.log(playRound(playerSelection, computerPlay()));
    }
}
game();