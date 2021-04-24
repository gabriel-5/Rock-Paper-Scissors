let playerScore = 0;
let computerScore = 0;
let playerSelection;


function computerPlay(){
    let possMoves = ["Rock", "Paper", "Scissors"]; 
    let randomPick = possMoves [Math.floor(Math.random() * possMoves.length)]; 
    console.log(randomPick);
    return(randomPick); 
}


function playRound(playerSelection){ 

    computerSelection = computerPlay();

    if (playerSelection === "rock" && computerSelection === "Rock"){
        console.log("It's a draw: DOUBLE ROCK");
        return "It's a draw!";   
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
        computerScore = (computerScore + 1);
        console.log("You lose! PAPER COVERS ROCK");
        return "You lose! Paper covers rock.";    
    } else if (playerSelection === "rock" && computerSelection === "Scissors"){
        playerScore = (playerScore + 1);
        console.log("You win! ROCK BREAKS SCISSORS");
        return "You win! Rock breaks scissors.";
    }
      else if (playerSelection === "scissors" && computerSelection === "Rock"){
        computerScore = (computerScore + 1);
        console.log( "You lose! Rock breaks scissors.");
        return "You lose! Rock breaks scissors.";
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        playerScore = (playerScore + 1);
        console.log( "You win! SCISSORS CUT PAPER");
        return "You win! Scissors cut paper.";       
    } else if (playerSelection === "scissors" && computerSelection === "Scissors"){
        console.log( "It's a draw: DOUBLE SCISSORS");
        return "It's a draw!";
    }
    else if (playerSelection === "paper" && computerSelection === "Rock"){
        playerScore = (playerScore + 1);
        console.log("You win! PAPER COVERS ROCK");
        return "You win! Paper covers rock."; 
    } else if (playerSelection === "paper" && computerSelection === "Paper") {
        console.log("It's a draw: DOUBLE PAPER");
        return "It's a draw!";
    } else if (playerSelection === "paper" && computerSelection === "Scissors"){
        computerScore = (computerScore + 1);
        console.log("You lose! SCISSORS CUT PAPER");
        return "You lose! Scissors cut paper.";
        
    }

}

function result(){
    if (playerScore > computerScore){
        console.log("You win! You got " + playerScore + " points and the computer got " + computerScore + " points.");
    } else if (playerScore < computerScore){
        console.log("You lose :( You got " + playerScore + " points and the computer got " + computerScore + " points.");
    } else {
        console.log("It's a draw... You got " + playerScore + " points and the computer got " + computerScore + " points.")
    }

}


const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")

rockButton.addEventListener("click", e => {
    playRound("rock");
})
paperButton.addEventListener("click", e => {
    playRound("paper");
})
scissorsButton.addEventListener("click", e => {
    playRound("scissors");
})






